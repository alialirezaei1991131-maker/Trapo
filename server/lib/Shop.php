<?php
declare(strict_types=1);

/**
 * فروش دوره، کد تخفیف و سیستم معرف
 *  - هر دوره یک بار خریده می‌شود و برای همیشه روی حساب باز است (جدول purchases)؛ قلب و اشتراک ماهانه در کار نیست
 *  - مبلغ همیشه روی سرور حساب می‌شود (عدد ارسالی مرورگر نادیده گرفته می‌شود)
 *  - از میان کد تخفیف و تخفیف دوستِ معرفی‌شده فقط بزرگ‌تر اعمال می‌شود (روی هم جمع نمی‌شوند)
 *  - اعتبار کیف پول (پاداش معرف) هنگام ساخت سفارش رزرو و با لغو سفارش برگردانده می‌شود
 *  - با «پرداخت شد» در پنل مدیریت، دوره‌های سفارش خودکار روی حساب خریدار باز می‌شوند و پاداش معرف واریز می‌شود
 */
final class Shop
{
    /** بیت هر دوره (همان bitFlag فایل‌های دوره)؛ config.php قدیمی که ریتما را ندارد هم کار می‌کند */
    private const BITS = ['yona' => 1, 'homa' => 2, 'negar' => 4, 'termino' => 8, 'ritma' => 16];
    /** قیمت دائمی هر دوره (تومان) اگر config.php قیمت تازه نداشته باشد */
    private const PRICES = ['yona' => 490000, 'homa' => 590000, 'negar' => 540000, 'termino' => 740000, 'ritma' => 640000];
    private const BUNDLE = [1 => 1, 2 => 0.95, 3 => 0.92, 4 => 0.9, 5 => 0.88];
    private const NAMES = ['yona' => ['یونا', 'Yona'], 'homa' => ['هما', 'Homa'], 'negar' => ['نگار', 'Negar'], 'termino' => ['ترمینو', 'Termino'], 'ritma' => ['ریتما', 'Ritma']];

    private static function r10k(float $x): int { return (int) (round($x / 10000) * 10000); }
    private static function r1k(float $x): int { return (int) (round($x / 1000) * 1000); }

    /** همه دوره‌ها و بیتشان */
    public static function bits(): array { return array_replace(self::BITS, array_map('intval', (array) Cfg::get('course_bits', []))); }
    public static function courseName(string $id, bool $en = false): string { return self::NAMES[$id][$en ? 1 : 0] ?? $id; }

    /** قیمت دائمی یک دوره؛ قالب قدیمی config.php (قیمت ماهانه پلن‌ها) نادیده گرفته می‌شود */
    public static function coursePrice(string $id): int
    {
        $P = (array) Cfg::get('prices', []);
        $v = $P[$id] ?? null;
        if (is_numeric($v) && (int) $v > 0) return (int) $v;
        if (isset(self::PRICES[$id])) return self::PRICES[$id];
        return is_numeric($P['_default'] ?? null) ? (int) $P['_default'] : 490000;
    }
    public static function bundle(): array
    {
        $B = (array) (((array) Cfg::get('prices', []))['_bundle'] ?? []);
        // قالب قدیمی (۲ دوره ۸۵٪، ۳ دوره ۷۵٪) فقط تا ۳ دوره بود؛ اگر کمتر از ۵ پله داشت، پیش‌فرض تازه
        return count($B) >= 5 ? array_map('floatval', $B) : self::BUNDLE;
    }
    /** قیمت‌ها برای نمایش در برنامه و صفحه معرفی */
    public static function catalog(): array
    {
        $out = [];
        foreach (array_keys(self::bits()) as $id) $out[$id] = self::coursePrice($id);
        return $out;
    }
    /** جمع قیمت دوره‌ها × ضریب تخفیف چنددوره‌ای */
    public static function price(array $ids): int
    {
        if (!$ids) return 0;
        $sum = 0;
        foreach ($ids as $id) $sum += self::coursePrice($id);
        $B = self::bundle();
        $nb = max(array_keys($B));
        return self::r10k($sum * (float) ($B[min($nb, count($ids))] ?? 1));
    }

    /** دوره‌هایی که حساب برای همیشه خریده است */
    public static function ownedCourses(int $uid): array
    {
        return array_map(fn($r) => (string) $r['course'], Db::all('SELECT course FROM purchases WHERE user_id = ? ORDER BY id', [$uid]));
    }
    /** باز کردن دائمی یک دوره روی حساب (تکرار بی‌خطر) */
    public static function grant(int $uid, string $course, ?int $orderId = null, string $source = 'order'): bool
    {
        if (!isset(self::bits()[$course])) return false;
        if (Db::val('SELECT 1 FROM purchases WHERE user_id = ? AND course = ?', [$uid, $course])) return false;
        Db::exec('INSERT INTO purchases (user_id, course, order_id, source, created_at) VALUES (?, ?, ?, ?, ?)', [$uid, $course, $orderId, $source, time()]);
        Http::audit($uid, 'grant', ['course' => $course, 'source' => $source]);
        return true;
    }
    public static function revoke(int $uid, string $course): void
    {
        Db::exec('DELETE FROM purchases WHERE user_id = ? AND course = ?', [$uid, $course]);
        Http::audit($uid, 'revoke', ['course' => $course]);
    }

    /** راه‌های ارسال پیام سفارش و نماد اعتماد (config.php؛ هرکدام خالی باشد، نشانی پشتیبانی پیش‌فرض تراپو) */
    public static function contact(): array
    {
        $c = (array) Cfg::get('contact', []);
        return ['telegram' => (string) (($c['telegram'] ?? '') ?: 'Therapo_support'), 'bale' => (string) (($c['bale'] ?? '') ?: 'Therapo'), 'email' => (string) (($c['email'] ?? '') ?: 'info@therapo1.ir')];
    }
    public static function enamad(): array
    {
        $e = (array) Cfg::get('enamad', ['id' => '8269784', 'code' => 'LFiJT2p4RkYAtQBsW7x4ywIuqiMCu3lJ']);
        return ['id' => preg_replace('/[^0-9]/', '', (string) ($e['id'] ?? '')), 'code' => preg_replace('/[^0-9A-Za-z]/', '', (string) ($e['code'] ?? ''))];
    }

    /** کد تخفیف: ثابت (config)، کمپین پنل مدیریت سرور، یا (اختیاری) قالب قدیمی */
    public static function promo(string $raw): ?array
    {
        $c = strtoupper(preg_replace('/\s+/', '', $raw));
        $c = preg_replace('/[–—_]/u', '-', $c);
        if ($c === '' || strlen($c) > 40) return null;
        $fixed = ((array) Cfg::get('promos', []))[$c] ?? null;
        if ($fixed) return ['code' => $c, 'pct' => (int) $fixed['pct'], 'plans' => array_map('intval', $fixed['plans'] ?? [1, 2, 3]), 'courses' => array_values((array) ($fixed['courses'] ?? [])), 'label' => $fixed['fa'] ?? '', 'labelEn' => $fixed['en'] ?? ''];
        $row = Db::one('SELECT * FROM promos WHERE code = ? AND active = 1', [$c]);
        if ($row) {
            if ($row['until_at'] && (int) $row['until_at'] < time()) return ['code' => $c, 'err' => 'promo_expired'];
            if ($row['max_uses'] !== null && (int) $row['max_uses'] <= (int) $row['uses']) return ['code' => $c, 'err' => 'promo_used_up'];
            return ['code' => $c, 'pct' => (int) $row['pct'], 'plans' => array_map('intval', explode(',', (string) $row['plans'])),
                    'courses' => array_values(array_filter(explode(',', (string) ($row['courses'] ?? '')))), 'label' => $row['label'], 'labelEn' => $row['label']];
        }
        if (Cfg::get('allow_legacy_promos') && preg_match('/^([A-Z0-9]{2,12})-(\d{2})([0-9A-Z]{3})([APV])-([0-9A-Z]{4})$/', $c, $m)) {
            $tag = substr(B32::enc(hash('sha256', 'TRAPO-PROMO-1|' . $m[1] . '|' . $m[2] . '|' . $m[3] . '|' . $m[4], true)), 0, 4);
            if (!hash_equals($tag, $m[5])) return null;
            $days = 0; foreach (str_split($m[3]) as $ch) $days = $days * 32 + strpos(B32::A, $ch);
            if (1704067200 + ($days + 1) * 86400 < time()) return ['code' => $c, 'err' => 'promo_expired'];
            $pct = (int) $m[2];
            if ($pct < 1 || $pct > 60) return null;
            return ['code' => $c, 'pct' => $pct, 'plans' => ['A' => [1, 2, 3], 'P' => [2, 3], 'V' => [3]][$m[4]], 'courses' => [], 'label' => 'کمپین ' . $m[1], 'labelEn' => $m[1] . ' campaign'];
        }
        return null;
    }

    /** تخفیف دوستِ معرفی‌شده: فقط تا اولین سفارش پرداخت‌شده */
    public static function friendPct(array $u): int
    {
        if (!$u['referred_by']) return 0;
        if (Db::val("SELECT 1 FROM orders WHERE user_id = ? AND status = 'paid'", [$u['id']])) return 0;
        return (int) (Cfg::get('referral')['friend_discount_pct'] ?? 0);
    }

    /** پیش‌فاکتور (بدون ثبت): دوره‌های انتخابی که هنوز خریده نشده‌اند، تخفیف و اعتبار */
    public static function quote(array $u, array $b): array
    {
        $bits = self::bits();
        $owned = self::ownedCourses((int) $u['id']);
        $want = array_values(array_unique(array_filter((array) ($b['courses'] ?? []), fn($x) => is_string($x) && isset($bits[$x]))));
        if (!$want) Http::fail('no_course');
        $ids = array_values(array_diff($want, $owned));
        if (!$ids) Http::fail('already_owned');
        $base = self::price($ids);
        $promo = null; $promoErr = null;
        $pin = Http::str($b, 'promo', 40);
        if ($pin !== '') {
            $p = self::promo($pin);
            if (!$p) $promoErr = 'promo_invalid';
            elseif (isset($p['err'])) $promoErr = $p['err'];
            elseif (!in_array(2, $p['plans'], true)) $promoErr = 'promo_plan';          // کد قدیمی فقط-الماس
            elseif ($p['courses'] && array_diff($ids, $p['courses'])) $promoErr = 'promo_course'; // کد مخصوص دوره‌های دیگر
            else $promo = $p;
        }
        $fp = self::friendPct($u);
        $pct = max($promo ? $promo['pct'] : 0, $fp);
        $useRef = $fp > 0 && $fp >= ($promo ? $promo['pct'] : 0);
        $afterDisc = $pct ? self::r10k($base * (1 - $pct / 100)) : $base;
        $credit = (int) Db::val('SELECT credit FROM users WHERE id = ?', [$u['id']]);
        $maxUse = self::r1k($afterDisc * ((int) (Cfg::get('referral')['max_credit_use_pct'] ?? 50)) / 100);
        $useCredit = !empty($b['use_credit']) ? min($credit, $maxUse) : 0;
        $mask = 0; foreach ($ids as $id) $mask |= (int) $bits[$id];
        return ['courses' => $ids, 'mask' => $mask, 'base' => $base, 'full' => array_sum(array_map([self::class, 'coursePrice'], $ids)),
                'promo' => $promo && !$useRef ? $promo : null, 'promoErr' => $promoErr, 'promoBeaten' => $promo && $useRef,
                'refPct' => $useRef ? $fp : 0, 'pct' => $pct, 'afterDiscount' => $afterDisc,
                'credit' => $credit, 'creditUsed' => $useCredit, 'final' => max(0, $afterDisc - $useCredit)];
    }

    public static function createOrder(array $u, array $b): array
    {
        Http::limit('order|' . $u['id'], 20, 3600);
        $q = self::quote($u, $b);
        if ($q['promoErr'] && Http::str($b, 'promo', 40) !== '') Http::fail($q['promoErr']);
        $code = '';
        for ($i = 0; $i < 20; $i++) { $code = 'ORD-' . B32::rand(6); if (!Db::val('SELECT 1 FROM orders WHERE order_code = ?', [$code])) break; }
        $id = Db::tx(function () use ($u, $q, $code) {
            if ($q['creditUsed'] > 0) {
                // رزرو اعتبار؛ اگر هم‌زمان خرج شده باشد سفارش رد می‌شود
                $n = Db::exec('UPDATE users SET credit = credit - ? WHERE id = ? AND credit >= ?', [$q['creditUsed'], $u['id'], $q['creditUsed']]);
                if ($n !== 1) throw new RuntimeException('credit');
            }
            // tier 2 و dur 5 (دائمی): همان قالب کد فعال‌سازی، اگر روزی برای نسخه آفلاین کد خواسته شود
            $oid = Db::insert('INSERT INTO orders (order_code, user_id, courses, mask, tier, dur, base_price, promo, promo_pct, ref_pct, credit_used, final_price, status, created_at, product)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [$code, $u['id'], implode(',', $q['courses']), $q['mask'], 2, 5, $q['base'], $q['promo']['code'] ?? null, $q['promo']['pct'] ?? 0,
                 $q['refPct'], $q['creditUsed'], $q['final'], 'pending', time(), null]);
            if ($q['creditUsed'] > 0) Db::exec('INSERT INTO credit_log (user_id, delta, reason, order_id, created_at) VALUES (?, ?, ?, ?, ?)', [$u['id'], -$q['creditUsed'], 'order', $oid, time()]);
            if (!empty($q['promo']['code'])) Db::exec('UPDATE promos SET uses = uses + 1 WHERE code = ?', [$q['promo']['code']]);
            return $oid;
        });
        Http::audit((int) $u['id'], 'order', ['order' => $code, 'final' => $q['final']]);
        $en = ($b['lang'] ?? 'fa') === 'en';
        return $q + ['order' => $code, 'id' => $id, 'message' => self::message($u, $q, $code, $en)];
    }

    /** پیام آماده خرید (برای تلگرام، بله یا ایمیل)؛ خط ماشینی همان قالب پنل آفلاین مدیر است */
    public static function message(array $u, array $q, string $code, bool $en): string
    {
        $T = fn($fa, $e) => $en ? $e : $fa;
        $nf = fn($n) => $en ? number_format($n) : strtr(number_format($n), ['0' => '۰', '1' => '۱', '2' => '۲', '3' => '۳', '4' => '۴', '5' => '۵', '6' => '۶', '7' => '۷', '8' => '۸', '9' => '۹', ',' => '٬']);
        $cur = $T('تومان', 'Toman');
        $L = [
            $T('🛒 سفارش خرید دوره Therapo', '🛒 Therapo course order'), '━━━━━━━━━━━━━━',
            '👤 ' . $T('نام', 'Name') . ': ' . $u['name'],
            '📧 ' . $T('حساب', 'Account') . ': ' . $u['login'],
            '📚 ' . $T('دوره‌ها', 'Courses') . ': ' . implode($T('، ', ', '), array_map(fn($c) => self::courseName($c, $en), $q['courses'])),
            '♾️ ' . $T('دسترسی', 'Access') . ': ' . $T('دائمی', 'Lifetime'),
        ];
        if ($q['pct']) {
            $L[] = '🏷️ ' . $T('قیمت پایه', 'Base price') . ': ' . $nf($q['base']) . ' ' . $cur;
            $L[] = $q['refPct'] ? '🤝 ' . $T('تخفیف دعوت دوست', 'Friend invite discount') . ': ' . $q['refPct'] . '%'
                                : '🎁 ' . $T('کد تخفیف', 'Discount code') . ': ' . $q['promo']['code'] . ' (' . $q['pct'] . '%)';
        }
        if ($q['creditUsed']) $L[] = '👛 ' . $T('اعتبار کیف پول', 'Wallet credit') . ': −' . $nf($q['creditUsed']) . ' ' . $cur;
        $L[] = '💰 ' . $T('مبلغ', 'Amount') . ': ' . $nf($q['final']) . ' ' . $cur;
        $L[] = '🔢 ' . $T('کد سفارش', 'Order ID') . ': ' . $code;
        $L[] = '🪪 ' . $T('شناسه حساب', 'Account ID') . ': ' . $u['dev_id'];
        $L[] = '🕒 ' . $T('تاریخ', 'Date') . ': ' . gmdate('Y-m-d H:i') . ' UTC';
        $L[] = '🔧 TRAPO-ORDER:' . $u['dev_id'] . ':2:' . $q['mask'] . ':5';
        if (!empty($q['promo'])) $L[] = '🔧 TRAPO-PROMO:' . $q['promo']['code'] . ':' . $q['promo']['pct'] . ':' . $q['final'];
        $L[] = '━━━━━━━━━━━━━━';
        $L[] = $T('سلام، می‌خواهم این دوره‌ها را بخرم. لطفاً راه پرداخت را بفرستید. پس از تأیید پرداخت، دوره‌ها خودکار روی حسابم باز می‌شوند. 🙏',
                  'Hi, I’d like to buy these courses. Please send me the payment details. Once the payment is confirmed, the courses open on my account automatically. 🙏');
        return implode("\n", $L);
    }

    public static function myOrders(array $u): array
    {
        return Db::all('SELECT order_code, product, courses, tier, dur, base_price, promo, promo_pct, ref_pct, credit_used, final_price, status, created_at, paid_at FROM orders WHERE user_id = ? ORDER BY id DESC LIMIT 30', [$u['id']]);
    }

    /** وضعیت معرف کاربر: کد، تعداد دعوت‌ها، خریدهای موفق، اعتبار */
    public static function referral(array $u): array
    {
        $R = (array) Cfg::get('referral', []);
        $joined = (int) Db::val('SELECT COUNT(*) FROM referrals WHERE referrer_id = ?', [$u['id']]);
        $rew = Db::one("SELECT COUNT(*) n, COALESCE(SUM(reward), 0) s FROM referrals WHERE referrer_id = ? AND status = 'rewarded'", [$u['id']]);
        return ['code' => $u['ref_code'], 'link' => rtrim((string) Cfg::get('base_url'), '/') . '/?ref=' . $u['ref_code'],
                'joined' => $joined, 'paid' => (int) $rew['n'], 'earned' => (int) $rew['s'], 'credit' => (int) Db::val('SELECT credit FROM users WHERE id = ?', [$u['id']]),
                'friendPct' => (int) ($R['friend_discount_pct'] ?? 0), 'rewardPct' => (int) ($R['referrer_reward_pct'] ?? 0),
                'myFriendPct' => self::friendPct($u), 'cap' => (int) ($R['reward_cap'] ?? 0), 'maxUse' => (int) ($R['max_credit_use_pct'] ?? 0)];
    }

    /* ---------- پنل مدیریت سرور ---------- */
    /** پرداخت تأیید شد: دوره‌های سفارش برای همیشه روی حساب خریدار باز می‌شوند و پاداش معرف (اگر هست) واریز می‌شود */
    public static function markPaid(string $code, string $note = ''): array
    {
        return Db::tx(function () use ($code, $note) {
            $o = Db::one('SELECT * FROM orders WHERE order_code = ?', [$code]);
            if (!$o) throw new RuntimeException('no_order');
            if ($o['status'] !== 'pending') throw new RuntimeException('not_pending');
            Db::exec("UPDATE orders SET status = 'paid', paid_at = ?, note = ? WHERE id = ?", [time(), $note ?: null, $o['id']]);
            $granted = [];
            if (empty($o['product'])) foreach (array_filter(explode(',', (string) $o['courses'])) as $c) if (self::grant((int) $o['user_id'], $c, (int) $o['id'])) $granted[] = $c;
            $reward = 0;
            $ref = Db::one("SELECT * FROM referrals WHERE referred_id = ? AND status = 'joined'", [$o['user_id']]);
            if ($ref && (int) $o['final_price'] > 0) {
                $R = (array) Cfg::get('referral', []);
                $reward = min((int) ($R['reward_cap'] ?? 0), self::r1k((int) $o['final_price'] * ((int) ($R['referrer_reward_pct'] ?? 0)) / 100));
                if ($reward > 0) {
                    Db::exec('UPDATE users SET credit = credit + ? WHERE id = ?', [$reward, $ref['referrer_id']]);
                    Db::exec('INSERT INTO credit_log (user_id, delta, reason, order_id, created_at) VALUES (?, ?, ?, ?, ?)', [$ref['referrer_id'], $reward, 'referral', $o['id'], time()]);
                }
                Db::exec("UPDATE referrals SET status = 'rewarded', order_id = ?, reward = ? WHERE id = ?", [$o['id'], $reward, $ref['id']]);
            }
            return ['order' => $code, 'reward' => $reward, 'granted' => $granted];
        });
    }
    public static function cancel(string $code): void
    {
        Db::tx(function () use ($code) {
            $o = Db::one('SELECT * FROM orders WHERE order_code = ?', [$code]);
            if (!$o || $o['status'] !== 'pending') throw new RuntimeException('not_pending');
            Db::exec("UPDATE orders SET status = 'cancelled' WHERE id = ?", [$o['id']]);
            if ((int) $o['credit_used'] > 0) {
                Db::exec('UPDATE users SET credit = credit + ? WHERE id = ?', [$o['credit_used'], $o['user_id']]);
                Db::exec('INSERT INTO credit_log (user_id, delta, reason, order_id, created_at) VALUES (?, ?, ?, ?, ?)', [$o['user_id'], (int) $o['credit_used'], 'refund', $o['id'], time()]);
            }
            if ($o['promo']) Db::exec('UPDATE promos SET uses = CASE WHEN uses > 0 THEN uses - 1 ELSE 0 END WHERE code = ?', [$o['promo']]);
        });
    }
}
