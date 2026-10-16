<?php
declare(strict_types=1);
/* تراپو — robots.txt و sitemap.xml برای موتورهای جست‌وجو (نشانی سایت از base_url در config.php) */
$trapoRoot = dirname(__DIR__);
if (!is_file($trapoRoot . '/lib/bootstrap.php') && is_file($trapoRoot . '/trapo_app/lib/bootstrap.php')) $trapoRoot .= '/trapo_app';
require $trapoRoot . '/lib/bootstrap.php';
$base = rtrim((string) Cfg::get('base_url', ''), '/');
header('Cache-Control: public, max-age=86400');
if (($_GET['f'] ?? '') === 'sitemap') {
    header('Content-Type: application/xml; charset=utf-8');
    // تاریخ آخرین ساخت (version.txt = زمان ساخت به میلی‌ثانیه، مبنای ۳۶)
    $ver = trim((string) @file_get_contents(Content::dir() . '/version.txt'));
    $ms = preg_match('/^[0-9a-z]{6,12}$/', $ver) ? (int) base_convert($ver, 36, 10) : 0;
    $last = gmdate('Y-m-d', $ms > 1.6e12 ? intdiv($ms, 1000) : time());
    echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n" . '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n"
        . '  <url><loc>' . htmlspecialchars($base . '/', ENT_XML1) . '</loc><lastmod>' . $last . '</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>' . "\n"
        . '</urlset>' . "\n";
    exit;
}
header('Content-Type: text/plain; charset=utf-8');
echo "User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /manage/\nDisallow: /*?ref=\n\nSitemap: " . $base . "/sitemap.xml\n";
