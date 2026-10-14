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
        if ($q === '') return Db::all('SELECT id, login, name, dev_id, ref_code, credit, created_at, last_login FROM users ORDER BY id DESC LIMIT 50');
        $like = '%' . str_replace(['%', '_'], ['\%', '\_'], mb_substr($q, 0, 60)) . '%';
        $rows = Db::all("SELECT id, login, name, dev_id, ref_code, credit, created_at, last_login FROM users WHERE login LIKE ? ESCAPE '\\' OR name LIKE ? ESCAPE '\\' OR dev_id LIKE ? ESCAPE '\\' OR ref_code = ? ORDER BY id DESC LIMIT 50",
            [$like, $like, $like, strtoupper($q)]);
        foreach ($rows as &$r) {
            $r['licenses'] = Db::all('SELECT tier, mask, dur, exp, life, created_at FROM licenses WHERE user_id = ?', [$r['id']]);
            $r['orders'] = Db::all('SELECT order_code, final_price, status, created_at FROM orders WHERE user_id = ? ORDER BY id DESC LIMIT 10', [$r['id']]);
            $r['invited'] = (int) Db::val('SELECT COUNT(*) FROM referrals WHERE referrer_id = ?', [$r['id']]);
        }
        return $rows;
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
