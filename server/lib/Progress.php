<?php
declare(strict_types=1);

/**
 * همگام‌سازی پیشرفت: کلیدهای academy_* (پیشرفت دوره‌ها، تنظیمات سراسری) برای هر حساب روی سرور نگه داشته
 * می‌شود تا با ورود از دستگاه دیگر برگردد. کلید مجوز (academy_license_data) هرگز از مرورگر پذیرفته نمی‌شود؛
 * کدهای فعال‌سازی فقط از جدول licenses (که خود سرور بررسی کرده) می‌آیند.
 */
final class Progress
{
    private const KEY = '/^academy_(course_[a-z0-9_]{2,24}|global_state)$/';
    private const MAX_ONE = 300000, MAX_ALL = 2000000;

    public static function get(array $u): array
    {
        $out = [];
        foreach (Db::all('SELECT k, v, updated_at FROM progress WHERE user_id = ?', [$u['id']]) as $r) $out[$r['k']] = ['v' => $r['v'], 'at' => (int) $r['updated_at']];
        return $out;
    }
    /** ذخیره: فقط کلیدهای مجاز، JSON معتبر و اندازه محدود؛ نسخه قدیمی‌تر روی نسخه تازه‌تر نوشته نمی‌شود */
    public static function put(array $u, array $items): array
    {
        Http::limit('prog|' . $u['id'], 240, 3600);
        $saved = []; $newDone = 0;
        $total = (int) Db::val('SELECT COALESCE(SUM(LENGTH(v)), 0) FROM progress WHERE user_id = ?', [$u['id']]);
        foreach ($items as $k => $it) {
            if (!is_string($k) || !preg_match(self::KEY, $k) || !is_array($it)) continue;
            $v = $it['v'] ?? null; $at = (int) ($it['at'] ?? 0);
            if (!is_string($v) || strlen($v) > self::MAX_ONE || !is_array(json_decode($v, true))) continue;
            $nowMs = (int) floor(microtime(true) * 1000);
            if ($at <= 0 || $at > $nowMs + 300000) $at = $nowMs;
            $old = Db::one('SELECT LENGTH(v) n, updated_at, v FROM progress WHERE user_id = ? AND k = ?', [$u['id'], $k]);
            if ($old && (int) $old['updated_at'] > $at) continue;
            // درس‌هایی که تازه تمام شده‌اند (برای تطبیق با قلب خرج‌شده)
            if (strpos($k, 'academy_course_') === 0) $newDone += max(0, self::doneCount($v) - ($old ? self::doneCount((string) $old['v']) : 0));
            if ($total - (int) ($old['n'] ?? 0) + strlen($v) > self::MAX_ALL) Http::fail('progress_full', 413);
            Db::exec('DELETE FROM progress WHERE user_id = ? AND k = ?', [$u['id'], $k]);
            Db::exec('INSERT INTO progress (user_id, k, v, updated_at) VALUES (?, ?, ?, ?)', [$u['id'], $k, $v, $at]);
            $total += strlen($v) - (int) ($old['n'] ?? 0);
            $saved[] = $k;
        }
        if ($newDone > 0) Hearts::settle((int) $u['id'], min($newDone, 200));
        return $saved;
    }
    private static function doneCount(string $v): int
    {
        $j = json_decode($v, true);
        return is_array($j) && isset($j['done']) && is_array($j['done']) ? count($j['done']) : 0;
    }
}
