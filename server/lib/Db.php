<?php
declare(strict_types=1);

/**
 * پایگاه داده: PDO با SQLite (پیش‌فرض) یا MySQL، همه پرس‌وجوها با پارامتر (بدون الحاق رشته).
 * جدول‌ها هنگام اولین اتصال ساخته می‌شوند (migrate)؛ اجرای دوباره بی‌خطر است.
 */
final class Db
{
    private static ?PDO $pdo = null;
    private static string $driver = 'sqlite';

    public static function pdo(): PDO
    {
        if (self::$pdo) return self::$pdo;
        $c = Cfg::get('db');
        self::$driver = $c['driver'] ?? 'sqlite';
        $opt = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, PDO::ATTR_EMULATE_PREPARES => false];
        if (self::$driver === 'mysql') {
            self::$pdo = new PDO($c['mysql_dsn'], $c['mysql_user'], $c['mysql_pass'], $opt);
        } else {
            $path = $c['sqlite_path'];
            $dir = dirname($path);
            if (!is_dir($dir)) mkdir($dir, 0700, true);
            self::$pdo = new PDO('sqlite:' . $path, null, null, $opt);
            self::$pdo->exec('PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000;');
            @chmod($path, 0600);
        }
        self::migrate();
        return self::$pdo;
    }

    public static function q(string $sql, array $p = []): PDOStatement
    {
        $st = self::pdo()->prepare($sql);
        $st->execute($p);
        return $st;
    }
    public static function one(string $sql, array $p = []): ?array { $r = self::q($sql, $p)->fetch(); return $r === false ? null : $r; }
    public static function all(string $sql, array $p = []): array { return self::q($sql, $p)->fetchAll(); }
    public static function val(string $sql, array $p = []) { $r = self::q($sql, $p)->fetchColumn(); return $r === false ? null : $r; }
    public static function exec(string $sql, array $p = []): int { return self::q($sql, $p)->rowCount(); }
    public static function insert(string $sql, array $p = []): int { self::q($sql, $p); return (int) self::pdo()->lastInsertId(); }
    public static function tx(callable $fn)
    {
        $pdo = self::pdo();
        $pdo->beginTransaction();
        try { $r = $fn(); $pdo->commit(); return $r; }
        catch (Throwable $e) { $pdo->rollBack(); throw $e; }
    }

    /** ساخت جدول‌ها؛ نوع ستون‌ها برای هر دو موتور قابل‌حمل نوشته شده است */
    private static function migrate(): void
    {
        $my = self::$driver === 'mysql';
        $PK = $my ? 'BIGINT PRIMARY KEY AUTO_INCREMENT' : 'INTEGER PRIMARY KEY AUTOINCREMENT';
        $S = $my ? 'VARCHAR(191)' : 'TEXT';
        $T = $my ? 'MEDIUMTEXT' : 'TEXT';
        $I = $my ? 'BIGINT' : 'INTEGER';
        $E = $my ? ' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4' : '';
        $sql = [
            "CREATE TABLE IF NOT EXISTS users (id $PK, login $S NOT NULL UNIQUE, name $S NOT NULL DEFAULT '', pass_hash $S NOT NULL,
               dev_id $S NOT NULL UNIQUE, ref_code $S NOT NULL UNIQUE, referred_by $I NULL, credit $I NOT NULL DEFAULT 0,
               status $S NOT NULL DEFAULT 'active', created_at $I NOT NULL, last_login $I NULL)$E",
            "CREATE TABLE IF NOT EXISTS sessions (id_hash $S PRIMARY KEY, user_id $I NOT NULL, role $S NOT NULL DEFAULT 'user', csrf $S NOT NULL,
               ck $S NOT NULL, created_at $I NOT NULL, expires_at $I NOT NULL, seen_at $I NOT NULL, ip $S NOT NULL DEFAULT '', ua $S NOT NULL DEFAULT '')$E",
            "CREATE TABLE IF NOT EXISTS licenses (id $PK, user_id $I NOT NULL, code $S NOT NULL UNIQUE, tier $I NOT NULL, mask $I NOT NULL, dur $I NOT NULL,
               exp $I NOT NULL, life $I NOT NULL DEFAULT 0, trial $I NOT NULL DEFAULT 0, created_at $I NOT NULL)$E",
            "CREATE TABLE IF NOT EXISTS progress (user_id $I NOT NULL, k $S NOT NULL, v $T NOT NULL, updated_at $I NOT NULL, PRIMARY KEY (user_id, k))$E",
            "CREATE TABLE IF NOT EXISTS orders (id $PK, order_code $S NOT NULL UNIQUE, user_id $I NOT NULL, courses $S NOT NULL, mask $I NOT NULL,
               tier $I NOT NULL, dur $I NOT NULL, base_price $I NOT NULL, promo $S NULL, promo_pct $I NOT NULL DEFAULT 0, ref_pct $I NOT NULL DEFAULT 0,
               credit_used $I NOT NULL DEFAULT 0, final_price $I NOT NULL, status $S NOT NULL DEFAULT 'pending', note $T NULL,
               created_at $I NOT NULL, paid_at $I NULL)$E",
            "CREATE TABLE IF NOT EXISTS referrals (id $PK, referrer_id $I NOT NULL, referred_id $I NOT NULL UNIQUE, created_at $I NOT NULL,
               order_id $I NULL, reward $I NOT NULL DEFAULT 0, status $S NOT NULL DEFAULT 'joined')$E",
            "CREATE TABLE IF NOT EXISTS credit_log (id $PK, user_id $I NOT NULL, delta $I NOT NULL, reason $S NOT NULL, order_id $I NULL, created_at $I NOT NULL)$E",
            "CREATE TABLE IF NOT EXISTS promos (code $S PRIMARY KEY, pct $I NOT NULL, plans $S NOT NULL, until_at $I NULL, max_uses $I NULL,
               uses $I NOT NULL DEFAULT 0, label $S NOT NULL DEFAULT '', active $I NOT NULL DEFAULT 1, created_at $I NOT NULL)$E",
            "CREATE TABLE IF NOT EXISTS rate (k $S PRIMARY KEY, n $I NOT NULL, reset_at $I NOT NULL)$E",
            "CREATE TABLE IF NOT EXISTS wallets (user_id $I PRIMARY KEY, plan $S NULL, plan_until $I NOT NULL DEFAULT 0, ult_until $I NOT NULL DEFAULT 0,
               bank $I NOT NULL DEFAULT 0, day $S NOT NULL DEFAULT '', day_left $I NOT NULL DEFAULT 0, prac_n $I NOT NULL DEFAULT 0, updated_at $I NOT NULL DEFAULT 0)$E",
            "CREATE TABLE IF NOT EXISTS audit (id $PK, user_id $I NULL, action $S NOT NULL, ip $S NOT NULL DEFAULT '', meta $T NULL, created_at $I NOT NULL)$E",
        ];
        foreach ($sql as $s) self::$pdo->exec($s);
        // ستون‌های تازه برای پایگاه داده‌های قبلی (تکرار بی‌خطر): کلید یکتای هویت و راه تماس دوم
        foreach (['login_key', 'contact', 'contact_key'] as $col) {
            try { self::$pdo->exec("ALTER TABLE users ADD COLUMN $col $S NULL"); } catch (Throwable $e) { /* ستون از قبل هست */ }
        }
        try { self::$pdo->exec("ALTER TABLE orders ADD COLUMN product $S NULL"); } catch (Throwable $e) { /* ستون از قبل هست */ } // محصول قلب
        try { self::$pdo->exec("ALTER TABLE wallets ADD COLUMN ans_pool $I NOT NULL DEFAULT 0"); } catch (Throwable $e) { /* ستون از قبل هست */ } // قلب پاسخ‌های درس برای تطبیق
        try {
            foreach (self::$pdo->query('SELECT id, login FROM users WHERE login_key IS NULL')->fetchAll() as $r) {
                self::$pdo->prepare('UPDATE users SET login_key = ? WHERE id = ?')->execute([Auth::identityKey((string) $r['login']), $r['id']]);
            }
        } catch (Throwable $e) { /* */ }
        foreach (['CREATE INDEX IF NOT EXISTS ix_lic_user ON licenses(user_id)', 'CREATE INDEX IF NOT EXISTS ix_ord_user ON orders(user_id)',
                  'CREATE INDEX IF NOT EXISTS ix_sess_user ON sessions(user_id)', 'CREATE INDEX IF NOT EXISTS ix_ref_referrer ON referrals(referrer_id)',
                  'CREATE INDEX IF NOT EXISTS ix_user_lkey ON users(login_key)', 'CREATE INDEX IF NOT EXISTS ix_user_ckey ON users(contact_key)'] as $ix) {
            try { self::$pdo->exec($my ? str_replace('IF NOT EXISTS ', '', $ix) : $ix); } catch (Throwable $e) { /* شاخص از قبل هست */ }
        }
    }
}
