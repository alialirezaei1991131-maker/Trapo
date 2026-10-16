<?php
declare(strict_types=1);

/**
 * سفارش، کد تخفیف و سیستم معرف
 *  - مبلغ همیشه روی سرور حساب می‌شود (عدد ارسالی مرورگر نادیده گرفته می‌شود)
 *  - از میان کد تخفیف و تخفیف دوستِ معرفی‌شده فقط بزرگ‌تر اعمال می‌شود (روی هم جمع نمی‌شوند)
 *  - اعتبار کیف پول (پاداش معرف) هنگام ساخت سفارش رزرو و با لغو سفارش برگردانده می‌شود
 *  - پاداش معرف وقتی پرداخت اولین سفارش دوست در پنل مدیریت تأیید شود به حساب معرف می‌رود
 */
final class Shop
{
    private const TIERS = [1 => ['آموزشی', 'Standard'], 2 => ['بالینی Pro', 'Clinical Pro'], 3 => ['پکیج جامع الماس', 'Diamond All-Access']];
    private const DUR = [1 => ['۱ ماهه (۳۰ روز)', '1 month (30 days)'], 2 => ['۳ ماهه (۹۰ روز)', '3 months (90 days)'],
                         3 => ['۶ ماهه (۱۸۰ روز)', '6 months (180 days)'], 4 => ['۱ ساله (۳۶۵ روز)', '1 year (365 days)']];

    private static function r10k(float $x): int { return (int) (round($x / 10000) * 10000); }
    private static function r1k(float $x): int { return (int) (round($x / 1000) * 1000); }

    /** همان قاعده قیمت برنامه: سطح ۱ و ۲ جمع قیمت دوره‌ها × تخفیف باندل؛ الماس قیمت ثابت؛ سپس ضریب مدت */
    public static function price(int $tier, array $ids, int $dur): int
    {
        $P = (array) Cfg::get('prices', []);
        $mult = (float) (($P['_dur_mult'] ?? [])[$dur] ?? 1);
        if ($tier === 3) return self::r10k(((int) ($P['_diamond'] ?? 1790000)) * $mult);
        if (!$ids) return 0;
        $sum = 0;
        foreach ($ids as $id) $sum += (int) (($P[$id] ?? $P['_default'])[$tier] ?? 0);
        $B = (array) ($P['_bundle'] ?? [1 => 1]);
        $nb = max(array_keys($B));
        return self::r10k($sum * (float) $B[min($nb, count($ids))] * $mult);
    }

    /** کد تخفیف: ثابت (config)، کمپین پنل مدیریت سرور، یا (اختیاری) قالب قدیمی */
    public static function promo(string $raw): ?array
    {
        $c = strtoupper(preg_replace('/\s+/', '', $raw));
        $c = preg_replace('/[–—_]/u', '-', $c);
        if ($c === '' || strlen($c) > 40) return null;
        $fixed = ((array) Cfg::get('promos', []))[$c] ?? null;
        if ($fixed) return ['code' => $c, 'pct' => (int) $fixed['pct'], 'plans' => array_map('intval', $fixed['plans'] ?? [1, 2, 3]), 'label' => $fixed['fa'] ?? '', 'labelEn' => $fixed['en'] ?? ''];
        $row = Db::one('SELECT * FROM promos WHERE code = ? AND active = 1', [$c]);
        if ($row) {
            if ($row['until_at'] && (int) $row['until_at'] < time()) return ['code' => $c, 'err' => 'promo_expired'];
            if ($row['max_uses'] !== null && (int) $row['uses'] >= (int) $row['max_uses']) return ['code' => $c, 'err' => 'promo_used_up'];
            return ['code' => $c, 'pct' => (int) $row['pct'], 'plans' => array_map('intval', explode(',', $row['plans'])), 'label' => $row['label'], 'labelEn' => $row['label']];
        }
        if (Cfg::get('allow_legacy_promos') && preg_match('/^([A-Z0-9]{2,12})-(\d{2})([0-9A-Z]{3})([APV])-([0-9A-Z]{4})$/', $c, $m)) {
            $tag = substr(B32::enc(hash('sha256', 'TRAPO-PROMO-1|' . $m[1] . '|' . $m[2] . '|' . $m[3] . '|' . $m[4], true)), 0, 4);
            if (!hash_equals($tag, $m[5])) return null;
            $days = 0; foreach (str_split($m[3]) as $ch) $days = $days * 32 + strpos(B32::A, $ch);
            if (1704067200 + ($days + 1) * 86400 < time()) return ['code' => $c, 'err' => 'promo_expired'];
            $pct = (int) $m[2];
            if ($pct < 1 || $pct > 60) return null;
            return ['code' => $c, 'pct' => $pct, 'plans' => ['A' => [1, 2, 3], 'P' => [2, 3], 'V' => [3]][$m[4]], 'label' => 'کمپین ' . $m[1], 'labelEn' => $m[1] . ' campaign'];
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

    /** پیش‌فاکتور (بدون ثبت): برای نمایش زنده در پنجره خرید */
    public static function quote(array $u, array $b): array
    {
        if (!empty($b['product'])) return self::quoteHearts($u, $b);
        $tier = (int) ($b['tier'] ?? 0); $dur = (int) ($b['dur'] ?? 1);
        if (!isset(self::TIERS[$tier]) || !isset(self::DUR[$dur])) Http::fail('bad_plan');
        $bits = (array) Cfg::get('course_bits', []);
        $ids = array_values(array_unique(array_filter((array) ($b['courses'] ?? []), fn($x) => is_string($x) && isset($bits[$x]))));
        if ($tier === 3) $ids = array_keys($bits);
        if (!$ids) Http::fail('no_course');
        if ($tier === 2 && count($ids) > 2) Http::fail('pro_max_two');
        $base = self::price($tier, $ids, $dur);
        $promo = null; $promoErr = null;
        $pin = Http::str($b, 'promo', 40);
        if ($pin !== '') {
            $p = self::promo($pin);
            if (!$p) $promoErr = 'promo_invalid';
            elseif (isset($p['err'])) $promoErr = $p['err'];
            elseif (!in_array($tier, $p['plans'], true)) $promoErr = 'promo_plan';
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
        if ($tier === 3) $mask = License::ALL_MASK;
        return ['tier' => $tier, 'dur' => $dur, 'courses' => $ids, 'mask' => $mask, 'base' => $base,
                'promo' => $promo && !$useRef ? $promo : null, 'promoErr' => $promoErr, 'promoBeaten' => $promo && $useRef,
                'refPct' => $useRef ? $fp : 0, 'pct' => $pct, 'afterDiscount' => $afterDisc,
                'credit' => $credit, 'creditUsed' => $useCredit, 'final' => max(0, $afterDisc - $useCredit)];
    }

    /** پیش‌فاکتور محصول قلب (اشتراک، بسته، نامحدود): همان تخفیف دوست، کد تخفیف و اعتبار کیف پول */
    private static function quoteHearts(array $u, array $b): array
    {
        $p = Hearts::product(Http::str($b, 'product', 30));
        if (!$p) Http::fail('bad_plan');
        $base = $p['price'];
        $promo = null; $promoErr = null;
        $pin = Http::str($b, 'promo', 40);
        if ($pin !== '') {
            $x = self::promo($pin);
            if (!$x) $promoErr = 'promo_invalid';
            elseif (isset($x['err'])) $promoErr = $x['err'];
            elseif (!in_array($p['promoPlan'], $x['plans'], true) && !($p['promoPlan'] === 1 && array_intersect([1, 2], $x['plans']))) $promoErr = 'promo_plan';
            else $promo = $x;
        }
        $fp = self::friendPct($u);
        $pct = max($promo ? $promo['pct'] : 0, $fp);
        $useRef = $fp > 0 && $fp >= ($promo ? $promo['pct'] : 0);
        $afterDisc = $pct ? self::r1k($base * (1 - $pct / 100)) : $base;
        $credit = (int) Db::val('SELECT credit FROM users WHERE id = ?', [$u['id']]);
        $maxUse = self::r1k($afterDisc * ((int) (Cfg::get('referral')['max_credit_use_pct'] ?? 50)) / 100);
        $useCredit = !empty($b['use_credit']) ? min($credit, $maxUse) : 0;
        return ['product' => $p['code'], 'productFa' => $p['fa'], 'productEn' => $p['en'], 'tier' => 0, 'dur' => 0, 'courses' => [], 'mask' => 0, 'base' => $base,
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
            $oid = Db::insert('INSERT INTO orders (order_code, user_id, courses, mask, tier, dur, base_price, promo, promo_pct, ref_pct, credit_used, final_price, status, created_at, product)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [$code, $u['id'], implode(',', $q['courses']), $q['mask'], $q['tier'], $q['dur'], $q['base'], $q['promo']['code'] ?? null, $q['promo']['pct'] ?? 0,
                 $q['refPct'], $q['creditUsed'], $q['final'], 'pending', time(), $q['product'] ?? null]);
            if ($q['creditUsed'] > 0) Db::exec('INSERT INTO credit_log (user_id, delta, reason, order_id, created_at) VALUES (?, ?, ?, ?, ?)', [$u['id'], -$q['creditUsed'], 'order', $oid, time()]);
            if (!empty($q['promo']['code'])) Db::exec('UPDATE promos SET uses = uses + 1 WHERE code = ?', [$q['promo']['code']]);
            return $oid;
        });
        Http::audit((int) $u['id'], 'order', ['order' => $code, 'final' => $q['final']]);
        $en = ($b['lang'] ?? 'fa') === 'en';
        return $q + ['order' => $code, 'id' => $id, 'message' => self::message($u, $q, $code, $en)];
    }

    /** متن سفارش برای پشتیبانی؛ خط‌های ماشینی همان قالب پنل آفلاین مدیر است */
    public static function message(array $u, array $q, string $code, bool $en): string
    {
        $T = fn($fa, $e) => $en ? $e : $fa;
        $nf = fn($n) => $en ? number_format($n) : strtr(number_format($n), ['0' => '۰', '1' => '۱', '2' => '۲', '3' => '۳', '4' => '۴', '5' => '۵', '6' => '۶', '7' => '۷', '8' => '۸', '9' => '۹', ',' => '٬']);
        $cur = $T('تومان', 'Toman');
        if (!empty($q['product'])) {
            // سفارش قلب: کد فعال‌سازی لازم نیست؛ با تأیید پرداخت در پنل مدیریت سرور قلب‌ها خودکار به حساب می‌روند
            $L = [$T('🧾 سفارش قلب تراپو', '🧾 Therapo hearts order'), '━━━━━━━━━━━━━━', '👤 ' . $T('نام', 'Name') . ': ' . $u['name'],
                  '📧 ' . $T('حساب', 'Account') . ': ' . $u['login'], '❤️ ' . $T('محصول', 'Product') . ': ' . $q[$en ? 'productEn' : 'productFa']];
            if ($q['pct']) $L[] = '🏷️ ' . $T('قیمت پایه', 'Base price') . ': ' . $nf($q['base']) . ' ' . $cur . ' · ' . ($q['refPct'] ? $T('تخفیف دعوت دوست', 'Friend discount') . ' ' . $q['refPct'] . '%' : $q['promo']['code'] . ' ' . $q['pct'] . '%');
            if ($q['creditUsed']) $L[] = '👛 ' . $T('اعتبار کیف پول', 'Wallet credit') . ': −' . $nf($q['creditUsed']) . ' ' . $cur;
            $L[] = '💰 ' . $T('مبلغ', 'Amount') . ': ' . $nf($q['final']) . ' ' . $cur;
            $L[] = '🔢 ' . $T('کد سفارش', 'Order ID') . ': ' . $code;
            $L[] = '━━━━━━━━━━━━━━';
            $L[] = $T('پس از تأیید پرداخت، قلب‌ها خودکار به حسابت اضافه می‌شوند. 🙏', 'Once your payment is confirmed, the hearts are added to your account automatically. 🙏');
            return implode("\n", $L);
        }
        $L = [
            $T('🧾 سفارش اشتراک تراپو', '🧾 Therapo subscription order'), '━━━━━━━━━━━━━━',
            '👤 ' . $T('نام', 'Name') . ': ' . $u['name'],
            '📱 ' . $T('شناسه دستگاه', 'Device') . ' (Device ID): ' . $u['dev_id'],
            '📚 ' . $T('دوره‌ها', 'Courses') . ': ' . implode($T('، ', ', '), $q['courses']),
            '💎 ' . $T('پلن', 'Plan') . ': ' . self::TIERS[$q['tier']][$en ? 1 : 0] . ' — Tier ' . $q['tier'],
            '⏳ ' . $T('مدت اعتبار', 'Duration') . ': ' . self::DUR[$q['dur']][$en ? 1 : 0],
        ];
        if ($q['pct']) {
            $L[] = '🏷️ ' . $T('قیمت پایه', 'Base price') . ': ' . $nf($q['base']) . ' ' . $cur;
            $L[] = $q['refPct'] ? '🤝 ' . $T('تخفیف دعوت دوست', 'Friend invite discount') . ': ' . $q['refPct'] . '%'
                                : '🎁 ' . $T('کد تخفیف', 'Discount code') . ': ' . $q['promo']['code'] . ' (' . $q['pct'] . '%)';
        }
        if ($q['creditUsed']) $L[] = '👛 ' . $T('اعتبار کیف پول', 'Wallet credit') . ': −' . $nf($q['creditUsed']) . ' ' . $cur;
        $L[] = '💰 ' . $T('مبلغ', 'Amount') . ': ' . $nf($q['final']) . ' ' . $cur;
        $L[] = '🔢 ' . $T('کد سفارش', 'Order ID') . ': ' . $code;
        $L[] = '🕒 ' . $T('تاریخ', 'Date') . ': ' . gmdate('Y-m-d H:i') . ' UTC';
        $L[] = '🔧 TRAPO-ORDER:' . $u['dev_id'] . ':' . $q['tier'] . ':' . $q['mask'] . ':' . $q['dur'];
        if (!empty($q['promo'])) $L[] = '🔧 TRAPO-PROMO:' . $q['promo']['code'] . ':' . $q['promo']['pct'] . ':' . $q['final'];
        $L[] = '━━━━━━━━━━━━━━';
        $L[] = $T('سفارش در سرور ثبت شد؛ پس از پرداخت، کد فعال‌سازی برایتان فرستاده می‌شود. 🙏', 'Your order is registered; after payment you will receive your activation code. 🙏');
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
    public static function markPaid(string $code, string $note = ''): array
    {
        return Db::tx(function () use ($code, $note) {
            $o = Db::one('SELECT * FROM orders WHERE order_code = ?', [$code]);
            if (!$o) throw new RuntimeException('no_order');
            if ($o['status'] !== 'pending') throw new RuntimeException('not_pending');
            Db::exec("UPDATE orders SET status = 'paid', paid_at = ?, note = ? WHERE id = ?", [time(), $note ?: null, $o['id']]);
            if (!empty($o['product'])) Hearts::credit((int) $o['user_id'], (string) $o['product']); // قلب‌ها همین حالا به حساب خریدار
            Rewards::onPaid((int) $o['user_id']); // قلب هدیه برای معرفِ خریدار
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
            return ['order' => $code, 'reward' => $reward];
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
