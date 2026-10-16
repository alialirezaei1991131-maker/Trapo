<?php
declare(strict_types=1);

/**
 * پنل مدیریت سرور (/manage): سفارش‌ها، تأیید پرداخت، کدهای تخفیف کمپین، کاربران و جدول معرف‌ها.
 * ساختن کد فعال‌سازی این‌جا نیست: کلید خصوصی فقط در پنل آفلاین مدیر (admin/index.html) می‌ماند.
 */
final class Manage
{
    public static function allowed(): bool
    {
        $allow = (array) Cfg::get('manage_ip_allow', []);
        return !$allow || in_array(Http::ip(), $allow, true);
    }
    public static function login(string $pass): array
    {
        if (!self::allowed()) Http::fail('forbidden', 403);
        Http::limit('mlogin|' . Http::ip(), 5, 1800);
        $h = (string) Cfg::get('manage_password_hash', '');
        if ($h === '' || !password_verify($pass, $h)) { Http::audit(null, 'manage_login_fail'); Http::fail('bad_credentials', 401); }
        Http::audit(null, 'manage_login');
        return Auth::startSession(0, 'admin');
    }
    public static function require(): array
    {
        if (!self::allowed()) Http::fail('forbidden', 403);
        $s = Auth::session('admin');
        if (!$s) Http::fail('auth', 401);
        return $s;
    }

    public static function stats(): array
    {
        $now = time();
        return [
            'users' => (int) Db::val('SELECT COUNT(*) FROM users'),
            'users7' => (int) Db::val('SELECT COUNT(*) FROM users WHERE created_at > ?', [$now - 7 * 86400]),
            'pending' => (int) Db::val("SELECT COUNT(*) FROM orders WHERE status = 'pending'"),
            'paid' => (int) Db::val("SELECT COUNT(*) FROM orders WHERE status = 'paid'"),
            'revenue' => (int) Db::val("SELECT COALESCE(SUM(final_price), 0) FROM orders WHERE status = 'paid'"),
            'revenue30' => (int) Db::val("SELECT COALESCE(SUM(final_price), 0) FROM orders WHERE status = 'paid' AND paid_at > ?", [$now - 30 * 86400]),
            'referred' => (int) Db::val('SELECT COUNT(*) FROM referrals'),
            'referredPaid' => (int) Db::val("SELECT COUNT(*) FROM referrals WHERE status = 'rewarded'"),
            'credit' => (int) Db::val('SELECT COALESCE(SUM(credit), 0) FROM users'),
            'top' => Db::all("SELECT u.name, u.login, u.ref_code, COUNT(r.id) joined, SUM(CASE WHEN r.status = 'rewarded' THEN 1 ELSE 0 END) paid, COALESCE(SUM(r.reward), 0) earned
                              FROM referrals r JOIN users u ON u.id = r.referrer_id GROUP BY r.referrer_id, u.name, u.login, u.ref_code ORDER BY paid DESC, joined DESC LIMIT 20"),
        ];
    }
    public static function orders(string $status): array
    {
        $st = in_array($status, ['pending', 'paid', 'cancelled'], true) ? $status : 'pending';
        return Db::all('SELECT o.*, u.name, u.login, u.dev_id, ref.name AS ref_name FROM orders o JOIN users u ON u.id = o.user_id
                        LEFT JOIN users ref ON ref.id = u.referred_by WHERE o.status = ? ORDER BY o.id DESC LIMIT 200', [$st]);
    }
    public static function users(string $q): array
    {
        $q = trim($q);
        $cols = 'id, login, contact, name, dev_id, ref_code, credit, created_at, last_login';
        if ($q === '') $rows = Db::all("SELECT $cols FROM users ORDER BY id DESC LIMIT 50");
        else {
        $like = '%' . str_replace(['%', '_'], ['\%', '\_'], mb_substr($q, 0, 60)) . '%';
        $key = Auth::identityKey($q);
        $rows = Db::all("SELECT $cols FROM users WHERE login LIKE ? ESCAPE '\\' OR contact LIKE ? ESCAPE '\\' OR name LIKE ? ESCAPE '\\' OR dev_id LIKE ? ESCAPE '\\' OR ref_code = ? OR login_key = ? OR contact_key = ? ORDER BY id DESC LIMIT 50",
            [$like, $like, $like, $like, strtoupper($q), $key, $key]);
        }
        foreach ($rows as &$r) {
            $r['licenses'] = Db::all('SELECT tier, mask, dur, exp, life, created_at FROM licenses WHERE user_id = ?', [$r['id']]);
            $r['orders'] = Db::all('SELECT order_code, final_price, status, created_at FROM orders WHERE user_id = ? ORDER BY id DESC LIMIT 10', [$r['id']]);
            $r['invited'] = (int) Db::val('SELECT COUNT(*) FROM referrals WHERE referrer_id = ?', [$r['id']]);
            $r['wallet'] = Hearts::state((int) $r['id']);
        }
        return $rows;
    }
    /** همه کاربران برای Excel (CSV با BOM): نام، ایمیل/موبایل، راه تماس دوم، تاریخ‌ها، معرف، خرید و اشتراک */
    public static function usersCsv(): void
    {
        $rows = Db::all('SELECT u.id, u.name, u.login, u.contact, u.field, u.degree, u.dev_id, u.ref_code, u.credit, u.created_at, u.last_login, u.status, r.login AS ref_login,
            (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id AND o.status = ?) AS paid_n,
            (SELECT COALESCE(SUM(final_price), 0) FROM orders o WHERE o.user_id = u.id AND o.status = ?) AS paid_sum,
            (SELECT COUNT(*) FROM referrals x WHERE x.referrer_id = u.id) AS invited
            FROM users u LEFT JOIN users r ON r.id = u.referred_by ORDER BY u.id', ['paid', 'paid']);
        $now = (int) floor(microtime(true) * 1000);
        $cell = function ($v): string {
            $v = str_replace(["\r", "\n"], ' ', (string) $v);
            if ($v !== '' && strpbrk($v[0], '=+-@') !== false) $v = "'" . $v; // جلوگیری از اجرای فرمول در Excel
            return '"' . str_replace('"', '""', $v) . '"';
        };
        $out = "\xEF\xBB\xBF" . implode(',', array_map($cell, ['شناسه', 'نام', 'ایمیل یا موبایل (ورود)', 'راه تماس دوم', 'تاریخ ثبت‌نام', 'آخرین ورود',
            'وضعیت', 'دعوت‌شده توسط', 'کد معرف', 'تعداد دعوت', 'اعتبار (تومان)', 'خرید پرداخت‌شده', 'جمع پرداخت (تومان)', 'اشتراک فعال', 'شناسه حساب', 'رشته', 'مقطع'])) . "\r\n";
        foreach ($rows as $r) {
            $act = [];
            foreach (Db::all('SELECT tier, mask, exp, life FROM licenses WHERE user_id = ?', [$r['id']]) as $l) {
                if ((int) $l['life'] !== 1 && (int) $l['exp'] <= $now) continue;
                $act[] = ['', 'آموزشی', 'Pro', 'الماس'][(int) $l['tier']] . ' ' . ((int) $l['life'] === 1 ? 'دائمی' : 'تا ' . self::jdate((int) floor((int) $l['exp'] / 1000)));
            }
            $out .= implode(',', array_map($cell, [$r['id'], $r['name'], $r['login'], $r['contact'], self::jdate((int) $r['created_at']), $r['last_login'] ? self::jdate((int) $r['last_login']) : '',
                $r['status'] === 'active' ? 'فعال' : 'غیرفعال', $r['ref_login'], $r['ref_code'], $r['invited'], $r['credit'], $r['paid_n'], $r['paid_sum'], implode(' | ', $act), $r['dev_id'], Rewards::FIELDS[$r['field'] ?? ''][0] ?? '', Rewards::DEGREES[$r['degree'] ?? ''][0] ?? ''])) . "\r\n";
        }
        Http::audit(null, 'm_users_csv', ['n' => count($rows)]);
        http_response_code(200);
        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename="trapo-users-' . gmdate('Y-m-d') . '.csv"');
        header('Cache-Control: no-store');
        echo $out;
        exit;
    }
    /** تاریخ شمسی (به وقت تهران) برای گزارش‌ها: 1405/07/24 14:05 */
    public static function jdate(int $ts): string
    {
        $dt = new DateTime('@' . $ts); $dt->setTimezone(new DateTimeZone('Asia/Tehran'));
        [$gy, $gm, $gd] = array_map('intval', explode('-', $dt->format('Y-n-j')));
        $g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        $gy2 = $gm > 2 ? $gy + 1 : $gy;
        $days = 355666 + (365 * $gy) + intdiv($gy2 + 3, 4) - intdiv($gy2 + 99, 100) + intdiv($gy2 + 399, 400) + $gd + $g_d_m[$gm - 1];
        $jy = -1595 + (33 * intdiv($days, 12053)); $days %= 12053;
        $jy += 4 * intdiv($days, 1461); $days %= 1461;
        if ($days > 365) { $jy += intdiv($days - 1, 365); $days = ($days - 1) % 365; }
        $jm = $days < 186 ? 1 + intdiv($days, 31) : 7 + intdiv($days - 186, 30);
        $jd = 1 + ($days < 186 ? $days % 31 : ($days - 186) % 30);
        return sprintf('%04d/%02d/%02d %s', $jy, $jm, $jd, $dt->format('H:i'));
    }
    public static function promos(): array { return Db::all('SELECT * FROM promos ORDER BY created_at DESC'); }
    public static function promoAdd(array $b): array
    {
        $code = strtoupper(preg_replace('/[^0-9A-Za-z-]/', '', Http::str($b, 'code', 24)));
        $pct = (int) ($b['pct'] ?? 0);
        $plans = array_values(array_intersect([1, 2, 3], array_map('intval', (array) ($b['plans'] ?? [1, 2, 3]))));
        $days = (int) ($b['days'] ?? 0); $max = isset($b['max']) && $b['max'] !== '' ? max(1, (int) $b['max']) : null;
        if (strlen($code) < 3 || $pct < 1 || $pct > 70 || !$plans) Http::fail('bad_promo');
        if (Db::val('SELECT 1 FROM promos WHERE code = ?', [$code]) || isset(((array) Cfg::get('promos', []))[$code])) Http::fail('promo_exists', 409);
        Db::exec('INSERT INTO promos (code, pct, plans, until_at, max_uses, label, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [$code, $pct, implode(',', $plans), $days > 0 ? time() + $days * 86400 : null, $max, Http::str($b, 'label', 80), time()]);
        Http::audit(null, 'promo_add', ['code' => $code, 'pct' => $pct]);
        return Db::one('SELECT * FROM promos WHERE code = ?', [$code]);
    }
    public static function promoToggle(string $code): void { Db::exec('UPDATE promos SET active = 1 - active WHERE code = ?', [strtoupper($code)]); }
}
