<?php
declare(strict_types=1);

/**
 * پرداخت آنلاین با درگاه زیبال (config.php → 'zibal' => ['merchant' => '…'])
 *  ۱. start: برای سفارش در انتظار، درخواست پرداخت (مبلغ به ریال، از همان مبلغ نهایی ثبت‌شده روی سرور) و نشانی درگاه
 *  ۲. کاربر در درگاه پرداخت می‌کند و زیبال او را به pay.php برمی‌گرداند
 *  ۳. back/verifyOrder: تأیید پرداخت با سرور زیبال (نه با پارامترهای نشانی) و بررسی مبلغ؛ بعد Shop::markPaid
 *     دوره‌ها را برای همیشه روی حساب باز می‌کند. تکرار برگشت یا تأیید (کد ۲۰۱) بی‌خطر است.
 * کد مرچنت: config.php، و اگر آن‌جا خالی باشد کد مرچنت درگاه Therapo؛ 'off' = پرداخت آنلاین خاموش؛ 'zibal' = حالت آزمایشی زیبال.
 */
final class Pay
{
    /** کد مرچنت درگاه زیبال Therapo (اگر config.php کد دیگری نداشته باشد) */
    private const MERCHANT = '6ae319d042e2a3e4ca5e8e44';
    private static function cfg(): array { return (array) Cfg::get('zibal', []); }
    public static function merchant(): string
    {
        $m = trim((string) (self::cfg()['merchant'] ?? ''));
        if ($m === '') return self::MERCHANT;
        return strtolower($m) === 'off' ? '' : $m;
    }
    public static function enabled(): bool { return self::merchant() !== ''; }
    private static function api(): string { return rtrim((string) (self::cfg()['api'] ?? 'https://gateway.zibal.ir'), '/'); }

    /** نشانی بازگشت از درگاه: base_url تنظیمات، یا همین سایت */
    private static function callbackUrl(): string
    {
        $base = rtrim((string) Cfg::get('base_url', ''), '/');
        if ($base === '') {
            $dir = rtrim(str_replace('\\', '/', dirname(dirname((string) ($_SERVER['SCRIPT_NAME'] ?? '/api/index.php')))), '/');
            $base = (Http::https() ? 'https' : 'http') . '://' . preg_replace('/[^0-9A-Za-z.:\-]/', '', (string) ($_SERVER['HTTP_HOST'] ?? 'localhost')) . $dir;
        }
        return $base . '/pay.php';
    }

    /** درخواست JSON به زیبال؛ null یعنی پاسخی نیامد */
    private static function post(string $path, array $body): ?array
    {
        $url = self::api() . $path;
        $json = json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        $raw = false;
        if (function_exists('curl_init')) {
            $ch = curl_init($url);
            curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => $json, CURLOPT_RETURNTRANSFER => true,
                CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Accept: application/json'], CURLOPT_CONNECTTIMEOUT => 10, CURLOPT_TIMEOUT => 25]);
            $raw = curl_exec($ch);
            curl_close($ch);
        } else {
            $raw = @file_get_contents($url, false, stream_context_create(['http' => ['method' => 'POST', 'header' => "Content-Type: application/json\r\nAccept: application/json\r\n", 'content' => $json, 'timeout' => 25, 'ignore_errors' => true]]));
        }
        $r = is_string($raw) ? json_decode($raw, true) : null;
        if (!is_array($r)) error_log('[trapo] zibal ' . $path . ': no valid response');
        return is_array($r) ? $r : null;
    }

    /** شروع پرداخت سفارش کاربر؛ خروجی: نشانی درگاه (یا بازگشت مستقیم برای سفارش رایگان یا پرداخت‌شده) */
    public static function start(array $u, string $code): array
    {
        if (!self::enabled()) throw new RuntimeException('pay_off');
        Http::limit('pay|' . $u['id'], 30, 3600);
        $o = Db::one('SELECT * FROM orders WHERE order_code = ? AND user_id = ?', [$code, $u['id']]);
        if (!$o) throw new RuntimeException('no_order');
        if ($o['status'] === 'paid') return ['url' => './?pay=ok&order=' . rawurlencode($code)];
        if ($o['status'] !== 'pending' || !empty($o['product'])) throw new RuntimeException('not_pending');
        $toman = (int) $o['final_price'];
        if ($toman <= 0) { // کد تخفیف ۱۰۰٪ یا اعتبار کیف پول: چیزی برای پرداخت نیست
            Shop::markPaid($code, 'رایگان (تخفیف یا اعتبار)');
            return ['url' => './?pay=ok&order=' . rawurlencode($code)];
        }
        $r = self::post('/v1/request', ['merchant' => self::merchant(), 'amount' => $toman * 10, 'callbackUrl' => self::callbackUrl(),
                                         'orderId' => $code, 'description' => 'Therapo ' . $code]);
        if (!$r || (int) ($r['result'] ?? 0) !== 100 || empty($r['trackId'])) {
            error_log('[trapo] zibal request ' . $code . ': ' . json_encode($r));
            throw new RuntimeException('pay_gateway');
        }
        Db::exec('UPDATE orders SET pay_track = ? WHERE id = ?', [(string) $r['trackId'], $o['id']]);
        Http::audit((int) $u['id'], 'pay_start', ['order' => $code]);
        return ['url' => self::api() . '/start/' . rawurlencode((string) $r['trackId'])];
    }

    /** برگشت کاربر از درگاه (pay.php) */
    public static function back(array $q): array
    {
        $track = preg_replace('/[^0-9]/', '', (string) ($q['trackId'] ?? ''));
        $code = strtoupper(preg_replace('/[^0-9A-Za-z\-]/', '', (string) ($q['orderId'] ?? '')));
        if ($track === '' || strlen($track) > 30) return ['ok' => false, 'err' => 'bad'];
        $o = Db::one('SELECT * FROM orders WHERE pay_track = ?', [$track]);
        if (!$o || ($code !== '' && $o['order_code'] !== $code)) return ['ok' => false, 'err' => 'no_order'];
        if ($o['status'] === 'pending' && (string) ($q['success'] ?? '') !== '1') return ['ok' => false, 'order' => $o['order_code'], 'err' => 'cancelled'];
        return self::verifyOrder($o);
    }

    /** پنل مدیریت: بررسی دوباره سفارشی که کاربر پرداخت کرده ولی به سایت برنگشته */
    public static function check(string $code): array
    {
        $o = Db::one('SELECT * FROM orders WHERE order_code = ?', [$code]);
        if (!$o) throw new RuntimeException('no_order');
        if (empty($o['pay_track'])) throw new RuntimeException('no_payment');
        return self::verifyOrder($o);
    }

    /** تأیید پرداخت با زیبال و باز کردن دوره‌ها */
    private static function verifyOrder(array $o): array
    {
        $code = (string) $o['order_code'];
        if ($o['status'] === 'paid') return ['ok' => true, 'order' => $code, 'ref' => (string) ($o['pay_ref'] ?? '')];
        if ($o['status'] !== 'pending') return ['ok' => false, 'order' => $code, 'err' => 'not_pending'];
        if (!self::enabled()) return ['ok' => false, 'order' => $code, 'err' => 'pay_off'];
        $v = self::post('/v1/verify', ['merchant' => self::merchant(), 'trackId' => (int) $o['pay_track']]);
        $res = (int) ($v['result'] ?? 0);
        if (!$v || ($res !== 100 && $res !== 201)) return ['ok' => false, 'order' => $code, 'err' => $v ? 'unpaid' : 'pay_gateway'];
        $want = (int) $o['final_price'] * 10;
        if ((isset($v['amount']) && (int) $v['amount'] !== $want) || (!empty($v['orderId']) && (string) $v['orderId'] !== $code)) {
            error_log('[trapo] zibal verify mismatch ' . $code . ': ' . json_encode($v));
            return ['ok' => false, 'order' => $code, 'err' => 'mismatch'];
        }
        $ref = substr(preg_replace('/[^0-9A-Za-z\-]/', '', (string) ($v['refNumber'] ?? '')), 0, 40);
        $card = substr(preg_replace('/[^0-9*\-]/', '', (string) ($v['cardNumber'] ?? '')), 0, 24);
        Db::exec('UPDATE orders SET pay_ref = ? WHERE id = ?', [$ref !== '' ? $ref : null, $o['id']]);
        try {
            Shop::markPaid($code, 'زیبال' . ($ref !== '' ? ' · شماره پیگیری ' . $ref : '') . ($card !== '' ? ' · کارت ' . $card : ''));
        } catch (RuntimeException $e) {
            if ($e->getMessage() !== 'not_pending') throw $e; // هم‌زمان در درخواست دیگری ثبت شده
        }
        Http::audit((int) $o['user_id'], 'pay_ok', ['order' => $code, 'ref' => $ref]);
        return ['ok' => true, 'order' => $code, 'ref' => $ref];
    }
}
