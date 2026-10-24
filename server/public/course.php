<?php
declare(strict_types=1);
/* Therapo — صفحه معرفی هر دوره برای موتورهای جست‌وجو (/course/yona، /course/homa، …)
 * فقط متن معرفی، سرفصل و قیمت؛ هیچ کد یا محتوای درسی برنامه در این صفحه نیست. */
$trapoRoot = dirname(__DIR__);
if (!is_file($trapoRoot . '/lib/bootstrap.php') && is_file($trapoRoot . '/trapo_app/lib/bootstrap.php')) $trapoRoot .= '/trapo_app';
require $trapoRoot . '/lib/bootstrap.php';

$nonce = rtrim(strtr(base64_encode(random_bytes(18)), '+/', '-_'), '=');
Http::securityHeaders($nonce, true);
header('Content-Type: text/html; charset=utf-8');
$esc = fn($x) => htmlspecialchars((string) $x, ENT_QUOTES, 'UTF-8');
$root = rtrim(str_replace('\\', '/', dirname((string) ($_SERVER['SCRIPT_NAME'] ?? '/'))), '/') . '/';
$slug = preg_replace('/[^a-z]/', '', strtolower((string) ($_GET['c'] ?? '')));
$all = require TRAPO_ROOT . '/lib/views/seo-courses.php';
$c = null;
foreach ($all as $x) if ($x['slug'] === $slug) $c = $x;
if (!$c) {
    http_response_code(404); header('Cache-Control: no-store');
    echo '<!doctype html><html lang="fa" dir="rtl"><meta charset="utf-8"><meta name="robots" content="noindex"><title>دوره پیدا نشد | Therapo</title><p style="font-family:system-ui;text-align:center;margin:20vh 16px">این دوره پیدا نشد. <a href="' . $esc($root) . '">صفحه اصلی Therapo</a></p></html>';
    exit;
}
// کاربر واردشده مستقیم به خود دوره در برنامه می‌رود
if (Auth::user()) { header('Cache-Control: no-store'); header('Location: ' . $root . '?course=' . $slug, true, 302); exit; }
header('Cache-Control: private, max-age=600');
require TRAPO_ROOT . '/lib/views/pricing.php';
require TRAPO_ROOT . '/lib/views/scenes.php';
ob_start([Http::class, 'minHtml']);
require TRAPO_ROOT . '/lib/views/course.php';
ob_end_flush();
