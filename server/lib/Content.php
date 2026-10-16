<?php
declare(strict_types=1);

/**
 * تحویل امن فایل‌های برنامه
 *  - فایل‌های اصلی برنامه (موتور، دوره‌ها، تصویرها) در private/app هستند و آدرس مستقیم ندارند
 *  - فقط کاربر واردشده آن‌ها را می‌گیرد؛ هر فایل با کلید جداگانه همان نشست (AES-256-GCM) رمزنگاری می‌شود
 *  - محتوای پولی فقط برای مشترکان: کاربر بدون اشتراک «نسخه پیش‌نمایش» (فقط درس رایگان، بدون پرونده‌ها) می‌گیرد
 *    و حیطه‌های قفل ترمینو را اصلاً دریافت نمی‌کند
 */
final class Content
{
    /** فقط این مسیرها مجازند (بدون .. و بدون پوشه دلخواه) */
    private const ALLOW = '~^(js/engine\.js|courses/data-[a-z0-9-]+\.js|courses/termino/[a-z]+(-img|\.en)?\.js)$~';

    public static function dir(): string { return rtrim((string) Cfg::get('app_dir', dirname(__DIR__) . '/private/app'), '/'); }

    /** کدام دوره و کدام نسخه (کامل / پیش‌نمایش / ممنوع) برای این کاربر؟ */
    public static function resolve(array $u, string $f): ?string
    {
        if (!preg_match(self::ALLOW, $f) || strpos($f, '..') !== false) return null;
        $dir = self::dir();
        $full = $dir . '/' . $f;
        if (!is_file($full)) return null;
        $paid = function (string $course) use ($u): bool { return License::access((int) $u['id'], $course)['tier'] >= 1; };
        // حیطه‌های ترمینو: مقدمه (لِکسا) برای همه (پیش‌نمایش)، بقیه فقط برای مشترکان
        if (preg_match('~^courses/termino/([a-z]+)(-img|\.en)?\.js$~', $f, $m)) {
            if ($paid('termino')) return $full;
            if ($m[1] !== (string) Cfg::get('termino_free_module', 'lexa')) return null;
            if (($m[2] ?? '') === '-img') return $full; // تصویرهای حیطه رایگان
            // نسخه پیش‌نمایش به همان زبان (lexa.preview.js یا lexa.en.preview.js)
            $pv = $dir . '/courses/termino/' . $m[1] . ($m[2] ?? '') . '.preview.js';
            return is_file($pv) ? $pv : null;
        }
        // فایل دوره‌های تک: بدون اشتراک ← نسخه پیش‌نمایش؛ اگر پیش‌نمایش ساخته نشده باشد هیچ (هرگز نسخه کامل)
        if (preg_match('~^courses/data-([a-z0-9]+)\.js$~', $f, $m) && isset(((array) Cfg::get('course_bits', []))[$m[1]]) && $m[1] !== 'termino') {
            if ($paid($m[1])) return $full;
            $pv = $dir . '/courses/data-' . $m[1] . '.preview.js';
            return is_file($pv) ? $pv : null;
        }
        // شیفت اورژانس (Grand Rounds): فقط با پکیج الماس یا حداقل ۲ دوره؛ بقیه فقط فهرست کیس‌ها (پیش‌نمایش)
        if ($f === 'courses/data-grand-rounds.js') {
            if (self::grandAllowed((int) $u['id'])) return $full;
            $pv = $dir . '/courses/data-grand-rounds.preview.js';
            return is_file($pv) ? $pv : null;
        }
        return $full;
    }

    /** همان قاعده برنامه: الماس، یا اشتراک فعال در حداقل ۲ دوره */
    public static function grandAllowed(int $uid): bool
    {
        $n = 0;
        foreach (array_keys((array) Cfg::get('course_bits', [])) as $c) {
            $t = License::access($uid, (string) $c)['tier'];
            if ($t >= 3) return true;
            if ($t >= 1 && ++$n >= 2) return true;
        }
        return false;
    }

    /** پاسخ: base64( nonce(12) || ciphertext || tag(16) ) با کلید نشست */
    public static function serve(array $u, array $sess, string $f): void
    {
        Http::limit('asset|' . $u['id'], 400, 3600);
        $path = self::resolve($u, $f);
        if ($path === null) Http::fail('forbidden', 403);
        $data = file_get_contents($path);
        if ($data === false) Http::fail('missing', 404);
        $key = hex2bin($sess['ck']);
        $iv = random_bytes(12);
        $tag = '';
        $ct = openssl_encrypt($data, 'aes-256-gcm', $key, OPENSSL_RAW_DATA, $iv, $tag, '', 16);
        if ($ct === false) Http::fail('crypto', 500);
        http_response_code(200);
        header('Content-Type: text/plain; charset=us-ascii');
        header('Cache-Control: private, no-store');
        header('X-Robots-Tag: noindex');
        echo base64_encode($iv . $ct . $tag);
        exit;
    }
}
