<?php
declare(strict_types=1);

/**
 * حساب کاربری و نشست
 *  - رمز با password_hash ذخیره می‌شود (هرگز رمز خام)
 *  - توکن نشست فقط در کوکی HttpOnly است و در پایگاه داده فقط HMAC آن می‌ماند
 *  - هر نشست یک توکن CSRF و یک کلید محتوای جدا (برای رمزنگاری فایل‌های برنامه) دارد
 *  - شناسه دستگاه هر حساب (dev_id) ثابت است تا کدهای فعال‌سازی امضاشده مدیر به حساب گره بخورند، نه به مرورگر
 */
final class Auth
{
    public const COOKIE = 'trp_s';
    /** هش واقعی یک رمز تصادفی: برای حساب ناموجود هم همان زمان password_verify صرف شود */
    private const DUMMY = '$2y$10$JUrqDvBILjrE6vPiy6lYO.w8xJ9vY6zGe06B7.xVxSFdgFdJGA2Ua';
    private static ?array $cur = null;
    private static bool $loaded = false;

    /** ایمیل یا شماره موبایل ایران (۰۹…) را یکدست می‌کند؛ نامعتبر = '' */
    public static function normLogin(string $raw): string
    {
        $s = trim(strtr($raw, ['۰' => '0', '۱' => '1', '۲' => '2', '۳' => '3', '۴' => '4', '۵' => '5', '۶' => '6', '۷' => '7', '۸' => '8', '۹' => '9',
            '٠' => '0', '١' => '1', '٢' => '2', '٣' => '3', '٤' => '4', '٥' => '5', '٦' => '6', '٧' => '7', '٨' => '8', '٩' => '9']));
        if (strpos($s, '@') !== false) {
            $e = strtolower($s);
            return (strlen($e) <= 120 && filter_var($e, FILTER_VALIDATE_EMAIL)) ? $e : '';
        }
        $d = preg_replace('/[\s\-()]/', '', $s);
        if (preg_match('/^(?:\+98|0098|98)?0?(9\d{9})$/', $d, $m)) return '0' . $m[1];
        return '';
    }
    public static function passwordProblem(string $p): ?string
    {
        if (mb_strlen($p) < 8) return 'pass_short';
        if (strlen($p) > 200) return 'pass_long';
        if (preg_match('/^(\d)\1+$|^(12345678|123456789|1234567890|password|qwertyui|11111111|00000000)$/i', $p)) return 'pass_weak';
        return null;
    }

    private static function devId(): string
    {
        for ($i = 0; $i < 20; $i++) {
            $id = implode('-', str_split(B32::rand(12), 4));
            if (!Db::val('SELECT 1 FROM users WHERE dev_id = ?', [$id])) return $id;
        }
        throw new RuntimeException('dev id');
    }
    private static function refCode(): string
    {
        for ($i = 0; $i < 20; $i++) {
            $c = 'T' . B32::rand(6);
            if (!Db::val('SELECT 1 FROM users WHERE ref_code = ?', [$c])) return $c;
        }
        throw new RuntimeException('ref code');
    }

    public static function register(string $login, string $pass, string $name, string $ref): array
    {
        $ip = Http::ip();
        Http::limit('reg|' . $ip, (int) Cfg::get('register_max_per_ip_day', 8), 86400);
        $l = self::normLogin($login);
        if ($l === '') Http::fail('bad_login');
        if ($e = self::passwordProblem($pass)) Http::fail($e);
        $name = trim(preg_replace('/[\x00-\x1F\x7F<>]/u', '', $name));
        if (mb_strlen($name) < 2 || mb_strlen($name) > 60) Http::fail('bad_name');
        if (Db::val('SELECT 1 FROM users WHERE login = ?', [$l])) Http::fail('login_taken', 409);
        $hash = password_hash($pass, PASSWORD_DEFAULT);
        $refUser = null;
        $ref = strtoupper(preg_replace('/[^0-9A-Za-z]/', '', $ref));
        if ($ref !== '') $refUser = Db::one('SELECT id FROM users WHERE ref_code = ? AND status = ?', [$ref, 'active']);
        $uid = Db::tx(function () use ($l, $name, $hash, $refUser) {
            $id = Db::insert('INSERT INTO users (login, name, pass_hash, dev_id, ref_code, referred_by, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [$l, $name, $hash, self::devId(), self::refCode(), $refUser ? (int) $refUser['id'] : null, time()]);
            if ($refUser) Db::exec('INSERT INTO referrals (referrer_id, referred_id, created_at) VALUES (?, ?, ?)', [(int) $refUser['id'], $id, time()]);
            return $id;
        });
        Http::audit($uid, 'register', $refUser ? ['ref' => (int) $refUser['id']] : []);
        return self::startSession($uid, 'user');
    }

    public static function login(string $login, string $pass): array
    {
        $l = self::normLogin($login);
        $ip = Http::ip();
        $max = (int) Cfg::get('login_max_attempts', 6);
        Http::limit('login|' . $ip . '|' . $l, $max, 900);
        Http::limit('login-ip|' . $ip, $max * 5, 900);
        $u = $l === '' ? null : Db::one('SELECT id, pass_hash, status FROM users WHERE login = ?', [$l]);
        // زمان پاسخ برای حساب ناموجود و موجود یکسان می‌ماند
        $ok = password_verify($pass, $u ? $u['pass_hash'] : self::DUMMY);
        if (!$u || !$ok) { Http::audit($u ? (int) $u['id'] : null, 'login_fail'); Http::fail('bad_credentials', 401); }
        if ($u['status'] !== 'active') Http::fail('account_disabled', 403);
        if (password_needs_rehash($u['pass_hash'], PASSWORD_DEFAULT)) Db::exec('UPDATE users SET pass_hash = ? WHERE id = ?', [password_hash($pass, PASSWORD_DEFAULT), $u['id']]);
        Http::limitReset('login|' . $ip . '|' . $l);
        Http::audit((int) $u['id'], 'login');
        return self::startSession((int) $u['id'], 'user');
    }

    public static function startSession(int $uid, string $role): array
    {
        $token = rtrim(strtr(base64_encode(random_bytes(32)), '+/', '-_'), '=');
        $now = time();
        $days = (int) Cfg::get('session_days', 30);
        $s = ['id_hash' => self::hashTok($token), 'user_id' => $uid, 'role' => $role, 'csrf' => bin2hex(random_bytes(24)), 'ck' => bin2hex(random_bytes(32)),
              'created_at' => $now, 'expires_at' => $now + ($role === 'admin' ? 8 * 3600 : $days * 86400), 'seen_at' => $now];
        Db::exec('INSERT INTO sessions (id_hash, user_id, role, csrf, ck, created_at, expires_at, seen_at, ip, ua) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [$s['id_hash'], $uid, $role, $s['csrf'], $s['ck'], $now, $s['expires_at'], $now, hash('sha256', Http::ip()), Http::ua()]);
        if ($role === 'user') {
            Db::exec('UPDATE users SET last_login = ? WHERE id = ?', [$now, $uid]);
            // سقف نشست هم‌زمان: قدیمی‌ترین‌ها بسته می‌شوند
            $keep = max(1, (int) Cfg::get('max_sessions_per_user', 3));
            $old = Db::all("SELECT id_hash FROM sessions WHERE user_id = ? AND role = 'user' ORDER BY created_at DESC", [$uid]);
            foreach (array_slice($old, $keep) as $o) Db::exec('DELETE FROM sessions WHERE id_hash = ?', [$o['id_hash']]);
        }
        self::setCookie($token, $s['expires_at'], $role);
        self::$cur = $s; self::$loaded = true;
        return $s;
    }
    private static function hashTok(string $t): string { return hash_hmac('sha256', $t, Cfg::secret()); }
    private static function cookieName(string $role): string { return $role === 'admin' ? 'trp_m' : self::COOKIE; }
    private static function setCookie(string $val, int $exp, string $role): void
    {
        setcookie(self::cookieName($role), $val, ['expires' => $exp, 'path' => '/', 'secure' => Http::https(), 'httponly' => true, 'samesite' => $role === 'admin' ? 'Strict' : 'Lax']);
    }

    /** نشست فعلی (یا null)؛ نشست منقضی پاک می‌شود */
    public static function session(string $role = 'user'): ?array
    {
        if (self::$loaded && self::$cur && self::$cur['role'] === $role) return self::$cur;
        $tok = $_COOKIE[self::cookieName($role)] ?? '';
        if (!is_string($tok) || !preg_match('/^[A-Za-z0-9_-]{40,60}$/', $tok)) return null;
        $s = Db::one('SELECT * FROM sessions WHERE id_hash = ? AND role = ?', [self::hashTok($tok), $role]);
        if (!$s) return null;
        $now = time();
        if ((int) $s['expires_at'] < $now) { Db::exec('DELETE FROM sessions WHERE id_hash = ?', [$s['id_hash']]); return null; }
        if ($now - (int) $s['seen_at'] > 300) Db::exec('UPDATE sessions SET seen_at = ? WHERE id_hash = ?', [$now, $s['id_hash']]);
        self::$cur = $s; self::$loaded = true;
        return $s;
    }
    public static function user(): ?array
    {
        $s = self::session();
        if (!$s) return null;
        $u = Db::one('SELECT id, login, name, dev_id, ref_code, referred_by, credit, status, created_at FROM users WHERE id = ?', [$s['user_id']]);
        return $u && $u['status'] === 'active' ? $u : null;
    }
    public static function requireUser(): array
    {
        $u = self::user();
        if (!$u) Http::fail('auth', 401);
        return $u;
    }
    /** درخواست تغییردهنده: هم Origin همین سایت باشد و هم سربرگ X-CSRF با توکن نشست بخواند */
    public static function requireCsrf(string $role = 'user'): void
    {
        if (!Http::sameOrigin()) Http::fail('origin', 403);
        $s = self::session($role);
        $h = $_SERVER['HTTP_X_CSRF'] ?? '';
        if (!$s || !is_string($h) || !hash_equals($s['csrf'], $h)) Http::fail('csrf', 403);
    }
    public static function logout(string $role = 'user'): void
    {
        $s = self::session($role);
        if ($s) Db::exec('DELETE FROM sessions WHERE id_hash = ?', [$s['id_hash']]);
        setcookie(self::cookieName($role), '', ['expires' => 1, 'path' => '/', 'secure' => Http::https(), 'httponly' => true, 'samesite' => 'Lax']);
        self::$cur = null;
    }
    public static function changePassword(array $u, string $old, string $new): void
    {
        $row = Db::one('SELECT pass_hash FROM users WHERE id = ?', [$u['id']]);
        Http::limit('pw|' . $u['id'], 6, 900);
        if (!$row || !password_verify($old, $row['pass_hash'])) Http::fail('bad_credentials', 401);
        if ($e = self::passwordProblem($new)) Http::fail($e);
        Db::exec('UPDATE users SET pass_hash = ? WHERE id = ?', [password_hash($new, PASSWORD_DEFAULT), $u['id']]);
        // همه نشست‌های دیگر بسته می‌شوند
        $cur = self::session();
        Db::exec("DELETE FROM sessions WHERE user_id = ? AND role = 'user' AND id_hash <> ?", [$u['id'], $cur ? $cur['id_hash'] : '']);
        Http::audit((int) $u['id'], 'password_change');
    }
}
