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
        'code_days' => 60, // کد قلب تا چند روز بعد از صدور قابل استفاده است
        // مأموریت‌های روزانه: هر روز ۳ تا از این فهرست (پاداش = قلب هدیه)؛ chest = جایزه کامل کردن هر سه
        'quests' => [
            'right20' => ['c' => 'right', 'n' => 20, 'h' => 4, 'i' => '✅', 'fa' => '۲۰ پاسخ درست بده', 'en' => 'Get 20 answers right'],
            'lessons2' => ['c' => 'lesson', 'n' => 2, 'h' => 5, 'i' => '📚', 'fa' => '۲ درس تازه تمام کن', 'en' => 'Finish 2 new lessons'],
            'practice1' => ['c' => 'practice', 'n' => 1, 'h' => 3, 'i' => '🔁', 'fa' => 'یک تمرین مرور انجام بده', 'en' => 'Do one review practice'],
            'boss2' => ['c' => 'boss', 'n' => 2, 'h' => 5, 'i' => '👹', 'fa' => '۲ غول آخر درس را شکست بده', 'en' => 'Defeat 2 lesson bosses'],
            'perfect1' => ['c' => 'perfect', 'n' => 1, 'h' => 5, 'i' => '💯', 'fa' => 'یک درس را بی‌اشتباه تمام کن', 'en' => 'Finish a lesson with no mistakes'],
            'tool2' => ['c' => 'tool', 'n' => 2, 'h' => 3, 'i' => '🧮', 'fa' => 'با ۲ ابزار بالینی کار کن', 'en' => 'Use 2 clinical tools'],
            'game1' => ['c' => 'game', 'n' => 1, 'h' => 3, 'i' => '🃏', 'fa' => 'یک بازی جفت‌ها را تمام کن', 'en' => 'Finish a memory-match game'],
            'round1' => ['c' => 'round', 'n' => 1, 'h' => 4, 'i' => '🏥', 'fa' => 'یک کیس بالینی را حل کن', 'en' => 'Solve a clinical case'],
        ],
        'quest_chest' => 5,
    ];
    /** رویدادهای بی‌هزینه فقط برای شمارش مأموریت‌ها (سقف روزانه دارند) */
    private const TRACK = ['boss', 'perfect', 'game'];
    private const RANK = ['bronze' => 1, 'silver' => 2, 'gold' => 3];
    private const MONTH = 30 * 86400;

    public static function cfg(): array
    {
        $c = (array) Cfg::get('hearts', []);
        $d = self::DEF;
        foreach (['free_daily', 'practice_max', 'lesson_min', 'code_days'] as $k) if (isset($c[$k])) $d[$k] = (int) $c[$k];
        if (isset($c['quests']) && is_array($c['quests'])) $d['quests'] = $c['quests'];
        if (isset($c['quest_chest'])) $d['quest_chest'] = (int) $c['quest_chest'];
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
            $r['day'] = $t; $r['day_left'] = self::daily($r, $C); $r['prac_n'] = 0; $r['q'] = '{}';
            Db::exec("UPDATE wallets SET day = ?, day_left = ?, prac_n = 0, q = '{}', updated_at = ? WHERE user_id = ?", [$t, $r['day_left'], time(), $uid]);
        }
        return $r;
    }
    private static function view(array $r): array
    {
        $C = self::cfg(); $now = time();
        $ult = (int) $r['ult_until'] > $now;
        $plan = ($r['plan'] && (int) $r['plan_until'] > $now) ? $r['plan'] : null;
        $q = self::q($r);
        $quests = array_map(fn($id) => ['id' => $id, 'i' => $C['quests'][$id]['i'], 'fa' => $C['quests'][$id]['fa'], 'en' => $C['quests'][$id]['en'], 'n' => (int) $C['quests'][$id]['n'],
            'have' => min((int) $C['quests'][$id]['n'], (int) ($q['c'][$C['quests'][$id]['c']] ?? 0)), 'h' => (int) $C['quests'][$id]['h'], 'done' => !empty($q['ok'][$id])], self::todayQuests((int) $r['user_id'], (string) $r['day'], $C));
        return ['gift' => (int) ($r['gift'] ?? 0), 'quests' => $quests, 'chest' => ['h' => (int) $C['quest_chest'], 'done' => !empty($q['ok']['chest'])],
                'unl' => $ult, 'ultUntil' => $ult ? (int) $r['ult_until'] : 0, 'plan' => $plan, 'planUntil' => $plan ? (int) $r['plan_until'] : 0,
                'daily' => self::daily($r, $C), 'left' => (int) $r['day_left'], 'bank' => (int) $r['bank'], 'day' => $r['day'],
                'paid' => $ult || $plan || (int) $r['bank'] > 0, 'cost' => $C['cost'], 'free' => (int) $C['free_daily'],
                'practiceLeft' => max(0, (int) $C['practice_max'] - (int) $r['prac_n'])];
    }
    public static function state(int $uid): array { return self::view(self::fresh($uid)); }
    private static function q(array $r): array { $q = json_decode((string) ($r['q'] ?? ''), true); return is_array($q) ? $q + ['c' => [], 'ok' => []] : ['c' => [], 'ok' => []]; }
    /** سه مأموریت امروز این کاربر (ثابت در طول روز، متفاوت برای هر کاربر و هر روز) */
    private static function todayQuests(int $uid, string $day, array $C): array
    {
        $ids = array_keys($C['quests']);
        usort($ids, fn($a, $b) => crc32("$uid|$day|$a") <=> crc32("$uid|$day|$b"));
        return array_slice($ids, 0, min(3, count($ids)));
    }
    /** شمارنده مأموریت‌های امروز */
    public static function track(int $uid, string $counter, int $n = 1): void
    {
        if ($n <= 0) return;
        Db::tx(function () use ($uid, $counter, $n) {
            $r = self::fresh($uid); $q = self::q($r);
            $q['c'][$counter] = min(500, (int) ($q['c'][$counter] ?? 0) + $n);
            Db::exec('UPDATE wallets SET q = ? WHERE user_id = ?', [json_encode($q), $uid]);
        });
    }
    /** گرفتن جایزه مأموریت (سرور خودش شمارنده را بررسی می‌کند) */
    public static function questClaim(int $uid, string $id): array
    {
        $C = self::cfg();
        return Db::tx(function () use ($uid, $id, $C) {
            $r = self::fresh($uid); $q = self::q($r); $today = self::todayQuests($uid, (string) $r['day'], $C);
            if ($id === 'chest') {
                foreach ($today as $t) if (empty($q['ok'][$t])) throw new RuntimeException('quest_not_done');
                $h = (int) $C['quest_chest'];
            } else {
                if (!in_array($id, $today, true)) throw new RuntimeException('quest_unknown');
                $d = $C['quests'][$id];
                if ((int) ($q['c'][$d['c']] ?? 0) < (int) $d['n']) throw new RuntimeException('quest_not_done');
                $h = (int) $d['h'];
            }
            if (!empty($q['ok'][$id])) throw new RuntimeException('quest_claimed');
            $q['ok'][$id] = 1; $r['gift'] = (int) ($r['gift'] ?? 0) + $h; $r['q'] = json_encode($q);
            Db::exec('UPDATE wallets SET q = ?, gift = ?, updated_at = ? WHERE user_id = ?', [$r['q'], $r['gift'], time(), $uid]);
            return self::view($r) + ['got' => $h];
        });
    }
    /** قلب هدیه (پاداش‌ها و مأموریت‌ها): مثل بقیه قلب‌ها خرج می‌شود ولی محتوای پولی را باز نمی‌کند */
    public static function addGift(int $uid, int $n): void
    {
        if ($n <= 0) return;
        self::fresh($uid);
        Db::exec('UPDATE wallets SET gift = gift + ?, updated_at = ? WHERE user_id = ?', [min($n, 1000), time(), $uid]);
    }
    /** کاربری که قلب خریده (اشتراک فعال، نامحدود فعال یا بسته قلب باقی‌مانده) همه محتوای دوره‌ها را می‌گیرد */
    public static function paid(int $uid): bool { return self::state($uid)['paid']; }
    public static function unlimited(int $uid): bool { return self::state($uid)['unl']; }

    /** خرج قلب برای چند رویداد پشت‌سرهم: اول از سهمیه امروز، بعد از بسته؛ short یعنی قلب کافی نبود */
    public static function spend(int $uid, array $events): array
    {
        $C = self::cfg();
        $events = array_slice(array_values(array_filter($events, fn($e) => is_string($e) && (isset($C['cost'][$e]) || $e === 'practice' || in_array($e, self::TRACK, true)))), 0, 60);
        return Db::tx(function () use ($uid, $events, $C) {
            $r = self::fresh($uid); $v = self::view($r); $short = false; $spent = 0; $q = self::q($r);
            foreach ($events as $e) {
                // شمارش برای مأموریت‌های روزانه (رویدادهای بدون هزینه سقف ۲۰ در روز دارند)
                $q['c'][$e] = min(in_array($e, self::TRACK, true) ? 20 : 500, (int) ($q['c'][$e] ?? 0) + 1);
                if (in_array($e, self::TRACK, true)) continue;
                if ($e === 'practice') {
                    if ((int) $r['prac_n'] < (int) $C['practice_max']) { $r['prac_n']++; if (!$v['unl']) $r['day_left'] = min((int) $r['day_left'] + 1, max($v['daily'], (int) $r['day_left'])); }
                    continue;
                }
                if ($v['unl']) continue;
                $n = (int) $C['cost'][$e];
                $a = min($n, (int) $r['day_left']); $r['day_left'] -= $a; $n -= $a;
                $g = min($n, (int) ($r['gift'] ?? 0)); $r['gift'] = (int) ($r['gift'] ?? 0) - $g; $n -= $g;
                $b = min($n, (int) $r['bank']); $r['bank'] -= $b; $n -= $b;
                $spent += $a + $g + $b;
                if ($n > 0) $short = true;
                if ($e === 'right' || $e === 'wrong') $r['ans_pool'] = min(300, (int) ($r['ans_pool'] ?? 0) + (int) $C['cost'][$e]);
            }
            $r['q'] = json_encode($q);
            Db::exec('UPDATE wallets SET day_left = ?, gift = ?, bank = ?, prac_n = ?, ans_pool = ?, q = ?, updated_at = ? WHERE user_id = ?', [$r['day_left'], (int) ($r['gift'] ?? 0), $r['bank'], $r['prac_n'], (int) ($r['ans_pool'] ?? 0), $r['q'], time(), $uid]);
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
            $a = min($miss, (int) $r['day_left']); $g = min($miss - $a, (int) ($r['gift'] ?? 0)); $b = min($miss - $a - $g, (int) $r['bank']);
            Db::exec('UPDATE wallets SET ans_pool = ?, day_left = ?, gift = ?, bank = ?, updated_at = ? WHERE user_id = ?', [$pool - $cov, (int) $r['day_left'] - $a, (int) ($r['gift'] ?? 0) - $g, (int) $r['bank'] - $b, time(), $uid]);
            if ($miss > 0) Http::audit($uid, 'hearts_settle', ['lessons' => $n, 'missing' => $miss]);
            return $a + $g + $b;
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

    /* ---------- کد قلب (TRH1): ساخته‌شده با کلید پنل مدیر، فقط برای یک حساب و فقط یک بار ----------
     * ۸ بایت داده + ۶۴ بایت امضای Ed25519 روی «TRAPO-HRT-1|شناسه حساب|داده» (سرور فقط کلید عمومی دارد).
     * بایت ۰: دو بیت بالا = 10 (کد قلب)، بیت‌های ۵-۴ = نوع (0 قلب، 1 نامحدود به روز، 2 اشتراک روزانه)
     * بایت ۱-۲: مقدار (قلب، روز، یا برای اشتراک: بایت ۱ = سطح ۱..۳، بایت ۲ = ماه)؛ بایت ۳-۶: دقیقه صدور از ۲۰۲۴؛ بایت ۷: تصادفی */
    private const HC_EPOCH = 1704067200; // 2024-01-01 UTC (ثانیه)
    public static function parseCode(string $code, string $dev): array
    {
        $s = preg_replace('/[^0-9A-Z]/', '', strtoupper($code));
        if (strlen($s) === 120 && strpos($s, 'TRH1') === 0) $s = substr($s, 4);
        if (strlen($s) !== 116) return ['ok' => false, 'err' => 'format'];
        $all = B32::dec($s, 72); if ($all === null) return ['ok' => false, 'err' => 'format'];
        $p = substr($all, 0, 8); $sig = substr($all, 8, 64);
        $msg = 'TRAPO-HRT-1|' . License::normDev($dev) . '|' . bin2hex($p);
        $ok = false;
        foreach ((array) Cfg::get('license_public_keys', []) as $k) {
            $pk = base64_decode($k, true);
            if ($pk !== false && strlen($pk) === SODIUM_CRYPTO_SIGN_PUBLICKEYBYTES && sodium_crypto_sign_verify_detached($sig, $msg, $pk)) { $ok = true; break; }
        }
        if (!$ok) return ['ok' => false, 'err' => 'sig'];
        $b = array_values(unpack('C*', $p));
        if (($b[0] >> 6) !== 2) return ['ok' => false, 'err' => 'ver'];
        $kind = ['hearts', 'ult', 'plan'][($b[0] >> 4) & 3] ?? null;
        if (!$kind) return ['ok' => false, 'err' => 'ver'];
        $issued = self::HC_EPOCH + ((($b[3] << 24) | ($b[4] << 16) | ($b[5] << 8) | $b[6]) * 60);
        $r = ['ok' => true, 'kind' => $kind, 'issued' => $issued];
        if ($kind === 'plan') { $tier = [1 => 'bronze', 2 => 'silver', 3 => 'gold'][$b[1]] ?? null; if (!$tier || $b[2] < 1) return ['ok' => false, 'err' => 'ver']; $r += ['tier' => $tier, 'months' => $b[2]]; }
        else { $n = ($b[1] << 8) | $b[2]; if ($n < 1) return ['ok' => false, 'err' => 'ver']; $r['amount'] = $n; }
        return $r;
    }
    /** ثبت کد قلب روی حساب: امضا با شناسه همین حساب، هنوز در مهلت، و هرگز قبلاً مصرف نشده */
    public static function redeemCode(array $u, string $code): array
    {
        $uid = (int) $u['id'];
        $g = self::parseCode($code, (string) $u['dev_id']);
        if (!$g['ok']) { Http::audit($uid, 'heart_code_fail', ['err' => $g['err']]); throw new RuntimeException('code_' . $g['err']); }
        $days = max(1, (int) (self::cfg()['code_days'] ?? 60));
        if (time() > $g['issued'] + $days * 86400) throw new RuntimeException('code_expired');
        $norm = preg_replace('/[^0-9A-Z]/', '', strtoupper($code));
        if (strpos($norm, 'TRH1') !== 0) $norm = 'TRH1' . $norm;
        return Db::tx(function () use ($u, $uid, $g, $norm) {
            $dup = Db::one('SELECT user_id FROM heart_codes WHERE code = ?', [$norm]);
            if ($dup) throw new RuntimeException((int) $dup['user_id'] === $uid ? 'code_already' : 'code_used');
            $r = self::fresh($uid); $now = time();
            if ($g['kind'] === 'hearts') {
                $n = min(100000, $g['amount']);
                Db::exec('UPDATE wallets SET bank = bank + ?, updated_at = ? WHERE user_id = ?', [$n, $now, $uid]);
                $amount = $n;
            } elseif ($g['kind'] === 'ult') {
                $d = min(3650, $g['amount']);
                Db::exec('UPDATE wallets SET ult_until = ?, updated_at = ? WHERE user_id = ?', [max($now, (int) $r['ult_until']) + $d * 86400, $now, $uid]);
                $amount = $d;
            } else {
                $C = self::cfg(); $tier = $g['tier']; $mo = min(24, $g['months']);
                $active = $r['plan'] && (int) $r['plan_until'] > $now;
                $plan = $active && self::RANK[$r['plan']] > self::RANK[$tier] ? $r['plan'] : $tier;
                $until = max($now, $active ? (int) $r['plan_until'] : $now) + $mo * self::MONTH;
                Db::exec('UPDATE wallets SET plan = ?, plan_until = ?, day_left = ?, updated_at = ? WHERE user_id = ?', [$plan, $until, max((int) $r['day_left'], (int) $C['plans'][$plan]['daily']), $now, $uid]);
                $amount = $mo;
            }
            Db::exec('INSERT INTO heart_codes (code, user_id, kind, amount, created_at) VALUES (?, ?, ?, ?, ?)', [$norm, $uid, $g['kind'] === 'plan' ? 'plan:' . $g['tier'] : $g['kind'], $amount, $now]);
            Http::audit($uid, 'heart_code', ['kind' => $g['kind'], 'amount' => $amount]);
            return ['kind' => $g['kind'], 'amount' => $amount, 'tier' => $g['tier'] ?? null, 'wallet' => self::state($uid)];
        });
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
