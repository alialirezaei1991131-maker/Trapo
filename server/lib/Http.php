<?php
declare(strict_types=1);

/** تنظیمات (config.php بیرون از public) */
final class Cfg
{
    private static ?array $c = null;
    public static function load(string $file): void
    {
        if (!is_file($file)) { http_response_code(500); exit('config.php not found'); }
        self::$c = require $file;
        $s = self::$c['app_secret'] ?? '';
        if (!preg_match('/^[0-9a-f]{64}$/i', $s)) { http_response_code(500); exit('app_secret must be 64 hex chars'); }
    }
    public static function get(string $k, $def = null) { return self::$c[$k] ?? $def; }
    public static function secret(): string { return hex2bin(self::$c['app_secret']); }
}

/** پاسخ JSON، ورودی، سربرگ‌های امنیتی، CSRF و محدودیت نرخ */
final class Http
{
    public const MAX_BODY = 600000; // ۶۰۰ کیلوبایت (بزرگ‌ترین ورودی: همگام‌سازی پیشرفت)

    public static function https(): bool
    {
        return (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || ($_SERVER['SERVER_PORT'] ?? '') === '443'
            || strtolower($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https';
    }

    /** سربرگ‌های امنیتی هر پاسخ؛ CSP با nonce برای تنها اسکریپت درون‌خطی صفحه */
    public static function securityHeaders(?string $nonce = null, bool $html = false): void
    {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: SAMEORIGIN');
        header('Referrer-Policy: same-origin');
        header('Cross-Origin-Opener-Policy: same-origin');
        header('Cross-Origin-Resource-Policy: same-origin');
        header('Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()');
        if (self::https()) header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
        if ($html) {
            $n = $nonce ? " 'nonce-$nonce'" : '';
            header("Content-Security-Policy: default-src 'self'; script-src 'self' blob:$n; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self'; frame-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'");
        } else {
            header("Content-Security-Policy: default-src 'none'; frame-ancestors 'none'");
        }
    }

    public static function json($data, int $code = 200): void
    {
        http_response_code($code);
        header('Content-Type: application/json; charset=utf-8');
        header('Cache-Control: no-store');
        echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }
    public static function fail(string $err, int $code = 400, array $extra = []): void { self::json(['ok' => false, 'err' => $err] + $extra, $code); }

    /** بدنه JSON درخواست با سقف اندازه */
    public static function body(): array
    {
        $len = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
        if ($len > self::MAX_BODY) self::fail('too_large', 413);
        $raw = file_get_contents('php://input', false, null, 0, self::MAX_BODY + 1);
        if ($raw === false || strlen($raw) > self::MAX_BODY) self::fail('too_large', 413);
        if ($raw === '') return [];
        $j = json_decode($raw, true);
        if (!is_array($j)) self::fail('bad_json');
        return $j;
    }
    public static function str(array $b, string $k, int $max = 200): string
    {
        $v = $b[$k] ?? '';
        if (!is_string($v) && !is_int($v)) return '';
        $v = trim((string) $v);
        return mb_substr($v, 0, $max);
    }

    public static function ip(): string
    {
        // فقط REMOTE_ADDR قابل اعتماد است (سربرگ X-Forwarded-For را هر کسی می‌تواند بسازد)
        return substr((string) ($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0'), 0, 64);
    }
    public static function ua(): string { return substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 180); }

    /** درخواست‌های تغییردهنده فقط از همین سایت: Origin/Referer با base_url یکی باشد */
    public static function sameOrigin(): bool
    {
        $base = rtrim((string) Cfg::get('base_url'), '/');
        $o = $_SERVER['HTTP_ORIGIN'] ?? '';
        if ($o !== '') return rtrim($o, '/') === $base || self::hostMatch($o);
        $r = $_SERVER['HTTP_REFERER'] ?? '';
        return $r === '' ? false : (strpos($r, $base . '/') === 0 || self::hostMatch($r));
    }
    private static function hostMatch(string $url): bool
    {
        $h = parse_url($url, PHP_URL_HOST);
        $self = $_SERVER['HTTP_HOST'] ?? '';
        $port = parse_url($url, PHP_URL_PORT);
        return $h !== null && $self !== '' && ($h === $self || ($h . ($port ? ':' . $port : '')) === $self);
    }

    /**
     * محدودیت نرخ: حداکثر $max بار در $win ثانیه برای کلید؛ بیشتر از آن ← 429
     * کلیدها هش می‌شوند تا IP یا شناسه کاربر خام در جدول نماند.
     */
    public static function limit(string $key, int $max, int $win): void
    {
        $k = hash('sha256', $key);
        $now = time();
        $row = Db::one('SELECT n, reset_at FROM rate WHERE k = ?', [$k]);
        if (!$row || $row['reset_at'] <= $now) {
            Db::exec('DELETE FROM rate WHERE k = ?', [$k]);
            Db::exec('INSERT INTO rate (k, n, reset_at) VALUES (?, 1, ?)', [$k, $now + $win]);
            return;
        }
        if ((int) $row['n'] >= $max) {
            header('Retry-After: ' . max(1, $row['reset_at'] - $now));
            self::fail('rate_limited', 429, ['retry' => $row['reset_at'] - $now]);
        }
        Db::exec('UPDATE rate SET n = n + 1 WHERE k = ?', [$k]);
    }
    public static function limitReset(string $key): void { Db::exec('DELETE FROM rate WHERE k = ?', [hash('sha256', $key)]); }

    public static function audit(?int $uid, string $action, array $meta = []): void
    {
        Db::exec('INSERT INTO audit (user_id, action, ip, meta, created_at) VALUES (?, ?, ?, ?, ?)',
            [$uid, $action, hash('sha256', self::ip() . '|' . bin2hex(Cfg::secret())), $meta ? json_encode($meta, JSON_UNESCAPED_UNICODE) : null, time()]);
    }
}

/** Base32 کراکفورد (بدون I، L، O، U) — همان الفبای برنامه */
final class B32
{
    public const A = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
    public static function enc(string $bytes): string
    {
        $bits = 0; $val = 0; $out = '';
        foreach (str_split($bytes) as $ch) {
            $val = ($val << 8) | ord($ch); $bits += 8;
            while ($bits >= 5) { $out .= self::A[($val >> ($bits - 5)) & 31]; $bits -= 5; }
            $val &= (1 << $bits) - 1;
        }
        if ($bits > 0) $out .= self::A[($val << (5 - $bits)) & 31];
        return $out;
    }
    public static function dec(string $s, int $n): ?string
    {
        $s = strtr(strtoupper($s), ['O' => '0', 'I' => '1', 'L' => '1']);
        $bits = 0; $val = 0; $out = '';
        $len = strlen($s);
        for ($i = 0; $i < $len; $i++) {
            $v = strpos(self::A, $s[$i]);
            if ($v === false) return null;
            $val = ($val << 5) | $v; $bits += 5;
            if ($bits >= 8) { $out .= chr(($val >> ($bits - 8)) & 255); $bits -= 8; $val &= (1 << $bits) - 1; }
        }
        return strlen($out) >= $n ? substr($out, 0, $n) : null;
    }
    public static function rand(int $n): string
    {
        $o = '';
        for ($i = 0; $i < $n; $i++) $o .= self::A[random_int(0, 31)];
        return $o;
    }
}
