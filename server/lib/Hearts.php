<?php
declare(strict_types=1);

/**
 * کیف قلب (نسخه هاست): یک موجودی برای همه دوره‌ها
 *  - هر روز (نیمه‌شب تهران) سهمیه روزانه تازه می‌شود: رایگان ۱۵، اشتراک برنزی/نقره‌ای/طلایی ۴۰/۸۰/۱۵۰
 *  - بسته قلب (bank) تاریخ انقضا ندارد و بعد از تمام شدن سهمیه روزانه خرج می‌شود
 *  - نامحدود (Ultimate): قلب بی‌نهایت و آزادی شروع از هر درس، برای ۳/۶/۹/۱۲ ماه
 *  - هزینه هر کار را سرور حساب می‌کند؛ مرورگر فقط نوع کار را می‌فرستد (درست، غلط، ابزار، کیس، آزمون …)
 * همه عددها با کلید 'hearts' در config.php قابل تغییرند.
 */
final class Hearts
{
    public const DEF = [
        'free_daily' => 15,
        'plans' => [
            'bronze' => ['daily' => 40, 'fa' => 'برنزی', 'en' => 'Bronze', 'price' => [1 => 290000, 3 => 690000]],
            'silver' => ['daily' => 80, 'fa' => 'نقره‌ای', 'en' => 'Silver', 'price' => [1 => 490000, 3 => 1190000]],
            'gold' => ['daily' => 150, 'fa' => 'طلایی', 'en' => 'Gold', 'price' => [1 => 790000, 3 => 1890000]],
        ],
        'packs' => [50 => 59000, 150 => 149000, 400 => 349000, 1000 => 749000],
        'ultimate' => [3 => 2990000, 6 => 4990000, 9 => 6490000, 12 => 7490000],
        // هزینه هر کار؛ practice = پاداش تمرین مرور (+۱، حداکثر practice_max بار در روز)
        'cost' => ['right' => 1, 'wrong' => 2, 'tool' => 1, 'round' => 3, 'checkpoint' => 5, 'final' => 10, 'speed' => 3],
        'practice_max' => 5,
        // تطبیق با پیشرفت: هر درس تازه‌ای که تمام می‌شود دست‌کم این‌قدر قلب پاسخ پشتش دارد؛ اگر نداشت (درخواست خرج قلب جلویش گرفته شده) کسر می‌شود
        'lesson_min' => 3,
    ];
    private const RANK = ['bronze' => 1, 'silver' => 2, 'gold' => 3];
    private const MONTH = 30 * 86400;

    public static function cfg(): array
    {
        $c = (array) Cfg::get('hearts', []);
        $d = self::DEF;
        foreach (['free_daily', 'practice_max', 'lesson_min'] as $k) if (isset($c[$k])) $d[$k] = (int) $c[$k];
        foreach (['plans', 'cost'] as $k) if (isset($c[$k]) && is_array($c[$k])) $d[$k] = array_replace_recursive($d[$k], $c[$k]);
        foreach (['packs', 'ultimate'] as $k) if (isset($c[$k]) && is_array($c[$k]) && $c[$k]) $d[$k] = $c[$k]; // فهرست کامل جایگزین می‌شود
        return $d;
    }
    /** روز جاری به وقت تهران (سهمیه روزانه نیمه‌شب تهران تازه می‌شود) */
    public static function today(): string { return (new DateTime('now', new DateTimeZone('Asia/Tehran')))->format('Y-m-d'); }

    private static function row(int $uid): array
    {
        $r = Db::one('SELECT * FROM wallets WHERE user_id = ?', [$uid]);
        if ($r) return $r;
        Db::exec('INSERT INTO wallets (user_id, updated_at) VALUES (?, ?)', [$uid, time()]);
        return Db::one('SELECT * FROM wallets WHERE user_id = ?', [$uid]);
    }
    private static function daily(array $r, array $C): int
    {
        $plan = ($r['plan'] && (int) $r['plan_until'] > time()) ? $r['plan'] : null;
        return $plan && isset($C['plans'][$plan]) ? (int) $C['plans'][$plan]['daily'] : (int) $C['free_daily'];
    }
    /** ردیف کیف با سهمیه امروز (اگر روز عوض شده، سهمیه تازه و شمارنده پاداش صفر می‌شود) */
    private static function fresh(int $uid): array
    {
        $C = self::cfg(); $r = self::row($uid); $t = self::today();
        if ($r['day'] !== $t) {
            $r['day'] = $t; $r['day_left'] = self::daily($r, $C); $r['prac_n'] = 0;
            Db::exec('UPDATE wallets SET day = ?, day_left = ?, prac_n = 0, updated_at = ? WHERE user_id = ?', [$t, $r['day_left'], time(), $uid]);
        }
        return $r;
    }
    private static function view(array $r): array
    {
        $C = self::cfg(); $now = time();
        $ult = (int) $r['ult_until'] > $now;
        $plan = ($r['plan'] && (int) $r['plan_until'] > $now) ? $r['plan'] : null;
        return ['unl' => $ult, 'ultUntil' => $ult ? (int) $r['ult_until'] : 0, 'plan' => $plan, 'planUntil' => $plan ? (int) $r['plan_until'] : 0,
                'daily' => self::daily($r, $C), 'left' => (int) $r['day_left'], 'bank' => (int) $r['bank'], 'day' => $r['day'],
                'paid' => $ult || $plan || (int) $r['bank'] > 0, 'cost' => $C['cost'], 'free' => (int) $C['free_daily'],
                'practiceLeft' => max(0, (int) $C['practice_max'] - (int) $r['prac_n'])];
    }
    public static function state(int $uid): array { return self::view(self::fresh($uid)); }
    /** کاربری که قلب خریده (اشتراک فعال، نامحدود فعال یا بسته قلب باقی‌مانده) همه محتوای دوره‌ها را می‌گیرد */
    public static function paid(int $uid): bool { return self::state($uid)['paid']; }
    public static function unlimited(int $uid): bool { return self::state($uid)['unl']; }

    /** خرج قلب برای چند رویداد پشت‌سرهم: اول از سهمیه امروز، بعد از بسته؛ short یعنی قلب کافی نبود */
    public static function spend(int $uid, array $events): array
    {
        $C = self::cfg();
        $events = array_slice(array_values(array_filter($events, fn($e) => is_string($e) && (isset($C['cost'][$e]) || $e === 'practice'))), 0, 60);
        return Db::tx(function () use ($uid, $events, $C) {
            $r = self::fresh($uid); $v = self::view($r); $short = false; $spent = 0;
            foreach ($events as $e) {
                if ($e === 'practice') {
                    if ((int) $r['prac_n'] < (int) $C['practice_max']) { $r['prac_n']++; if (!$v['unl']) $r['day_left'] = min((int) $r['day_left'] + 1, max($v['daily'], (int) $r['day_left'])); }
                    continue;
                }
                if ($v['unl']) continue;
                $n = (int) $C['cost'][$e];
                $a = min($n, (int) $r['day_left']); $r['day_left'] -= $a; $n -= $a;
                $b = min($n, (int) $r['bank']); $r['bank'] -= $b; $n -= $b;
                $spent += $a + $b;
                if ($n > 0) $short = true;
                if ($e === 'right' || $e === 'wrong') $r['ans_pool'] = min(300, (int) ($r['ans_pool'] ?? 0) + (int) $C['cost'][$e]);
            }
            Db::exec('UPDATE wallets SET day_left = ?, bank = ?, prac_n = ?, ans_pool = ?, updated_at = ? WHERE user_id = ?', [$r['day_left'], $r['bank'], $r['prac_n'], (int) ($r['ans_pool'] ?? 0), time(), $uid]);
            return self::view($r) + ['short' => $short, 'spent' => $spent];
        });
    }

    /** تطبیق با پیشرفت ذخیره‌شده: n درس تازه تمام شده؛ قلبی که پاسخ‌هایشان خرج کرده‌اند از ans_pool کم می‌شود و کسری از کیف کسر می‌شود */
    public static function settle(int $uid, int $n): int
    {
        if ($n <= 0) return 0;
        $C = self::cfg();
        return Db::tx(function () use ($uid, $n, $C) {
            $r = self::fresh($uid);
            if ((int) $r['ult_until'] > time()) return 0;
            // کد فعال‌سازی قدیمی Pro یا الماس (قلب بی‌نهایت قبلی) هم قلبی خرج نمی‌کند
            if (Db::val('SELECT 1 FROM licenses WHERE user_id = ? AND tier >= 2 AND (life = 1 OR exp > ?)', [$uid, time()])) return 0;
            $need = $n * (int) $C['lesson_min'];
            $pool = (int) ($r['ans_pool'] ?? 0); $cov = min($need, $pool); $miss = $need - $cov;
            $a = min($miss, (int) $r['day_left']); $b = min($miss - $a, (int) $r['bank']);
            Db::exec('UPDATE wallets SET ans_pool = ?, day_left = ?, bank = ?, updated_at = ? WHERE user_id = ?', [$pool - $cov, (int) $r['day_left'] - $a, (int) $r['bank'] - $b, time(), $uid]);
            if ($miss > 0) Http::audit($uid, 'hearts_settle', ['lessons' => $n, 'missing' => $miss]);
            return $a + $b;
        });
    }

    /** محصول قلب از روی کد: plan:<bronze|silver|gold>:<1|3>، pack:<تعداد>، ult:<ماه> */
    public static function product(string $code): ?array
    {
        $C = self::cfg();
        if (preg_match('/^plan:(bronze|silver|gold):(\d{1,2})$/', $code, $m) && isset($C['plans'][$m[1]]['price'][(int) $m[2]])) {
            $p = $C['plans'][$m[1]]; $mo = (int) $m[2];
            return ['code' => $code, 'kind' => 'plan', 'price' => (int) $p['price'][$mo], 'promoPlan' => 1,
                    'fa' => "اشتراک قلب {$p['fa']} · " . self::fd($p['daily']) . ' قلب در روز · ' . self::moFa($mo), 'en' => "{$p['en']} heart plan · {$p['daily']} hearts a day · $mo month" . ($mo > 1 ? 's' : '')];
        }
        if (preg_match('/^pack:(\d{1,5})$/', $code, $m) && isset($C['packs'][(int) $m[1]])) {
            $n = (int) $m[1];
            return ['code' => $code, 'kind' => 'pack', 'price' => (int) $C['packs'][$n], 'promoPlan' => 1, 'fa' => 'بسته ' . self::fd($n) . ' قلب (بدون تاریخ انقضا)', 'en' => "$n-heart pack (never expires)"];
        }
        if (preg_match('/^ult:(\d{1,2})$/', $code, $m) && isset($C['ultimate'][(int) $m[1]])) {
            $mo = (int) $m[1];
            return ['code' => $code, 'kind' => 'ult', 'price' => (int) $C['ultimate'][$mo], 'promoPlan' => 3, 'fa' => 'نامحدود (قلب بی‌نهایت، همه دوره‌ها) · ' . self::moFa($mo), 'en' => "Ultimate (unlimited hearts, every course) · $mo months"];
        }
        return null;
    }
    private static function fd(int $n): string { return strtr((string) $n, ['0' => '۰', '1' => '۱', '2' => '۲', '3' => '۳', '4' => '۴', '5' => '۵', '6' => '۶', '7' => '۷', '8' => '۸', '9' => '۹']); }
    private static function moFa(int $m): string { return self::fd($m) . ' ماهه'; }

    /** فروشگاه برای برنامه: قیمت‌ها و قاعده‌ها (همه از همین‌جا؛ برنامه عددی از خودش ندارد) */
    public static function catalog(): array
    {
        $C = self::cfg(); $plans = [];
        foreach ($C['plans'] as $k => $p) $plans[] = ['id' => $k, 'daily' => (int) $p['daily'], 'fa' => $p['fa'], 'en' => $p['en'], 'price' => array_map('intval', $p['price'])];
        return ['free' => (int) $C['free_daily'], 'plans' => $plans, 'packs' => array_map('intval', $C['packs']), 'ultimate' => array_map('intval', $C['ultimate']),
                'cost' => $C['cost'], 'practiceMax' => (int) $C['practice_max']];
    }

    /** واریز محصول پرداخت‌شده به کیف (از تأیید پرداخت در پنل مدیریت سرور) */
    public static function credit(int $uid, string $code): void
    {
        $p = self::product($code); if (!$p) throw new RuntimeException('bad_product');
        $C = self::cfg(); $r = self::fresh($uid); $now = time();
        if ($p['kind'] === 'pack') {
            Db::exec('UPDATE wallets SET bank = bank + ?, updated_at = ? WHERE user_id = ?', [(int) explode(':', $code)[1], $now, $uid]);
        } elseif ($p['kind'] === 'ult') {
            $until = max($now, (int) $r['ult_until']) + (int) explode(':', $code)[1] * self::MONTH;
            Db::exec('UPDATE wallets SET ult_until = ?, updated_at = ? WHERE user_id = ?', [$until, $now, $uid]);
        } else {
            [, $tier, $mo] = explode(':', $code);
            $active = $r['plan'] && (int) $r['plan_until'] > $now;
            $plan = $active && self::RANK[$r['plan']] > self::RANK[$tier] ? $r['plan'] : $tier; // پلن بالاتر می‌ماند، مدت‌ها جمع می‌شوند
            $until = max($now, $active ? (int) $r['plan_until'] : $now) + (int) $mo * self::MONTH;
            $left = max((int) $r['day_left'], (int) $C['plans'][$plan]['daily']); // سهمیه امروز همین حالا پر می‌شود
            Db::exec('UPDATE wallets SET plan = ?, plan_until = ?, day_left = ?, updated_at = ? WHERE user_id = ?', [$plan, $until, $left, $now, $uid]);
        }
        Http::audit($uid, 'hearts_credit', ['product' => $code]);
    }

    /** هدیه مدیر: قلب به بسته، یا روزهای نامحدود */
    public static function gift(int $uid, int $hearts, int $ultDays): array
    {
        if (!Db::val('SELECT 1 FROM users WHERE id = ?', [$uid])) throw new RuntimeException('no_user');
        $r = self::fresh($uid); $now = time();
        $hearts = max(0, min(100000, $hearts)); $ultDays = max(0, min(3650, $ultDays));
        Db::exec('UPDATE wallets SET bank = bank + ?, ult_until = ?, updated_at = ? WHERE user_id = ?',
            [$hearts, $ultDays ? max($now, (int) $r['ult_until']) + $ultDays * 86400 : (int) $r['ult_until'], $now, $uid]);
        Http::audit(null, 'm_gift', ['uid' => $uid, 'hearts' => $hearts, 'ultDays' => $ultDays]);
        return self::state($uid);
    }
}
