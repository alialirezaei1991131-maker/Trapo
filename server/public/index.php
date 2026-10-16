<?php
declare(strict_types=1);
/*
 * تراپو — صفحه اصلی نسخه هاست
 *  - کاربر وارد نشده: صفحه ورود / ثبت‌نام (هیچ کد برنامه‌ای فرستاده نمی‌شود)
 *  - کاربر واردشده: قالب برنامه + بارگذار؛ کد برنامه بعداً رمزنگاری‌شده از /api می‌آید
 */
// پوشه برنامه (lib، private، data، config.php) بیرون از وب: کنار پوشه وب، یا در «trapo_app» کنار آن (چیدمان cPanel با .cpanel.yml)
$trapoRoot = dirname(__DIR__);
if (!is_file($trapoRoot . '/lib/bootstrap.php') && is_file($trapoRoot . '/trapo_app/lib/bootstrap.php')) $trapoRoot .= '/trapo_app';
require $trapoRoot . '/lib/bootstrap.php';

$nonce = rtrim(strtr(base64_encode(random_bytes(18)), '+/', '-_'), '=');
Http::securityHeaders($nonce, true);
header('Cache-Control: no-store');
header('Content-Type: text/html; charset=utf-8');

// کد معرف از لینک دعوت (?ref=…) تا هنگام ثبت‌نام نگه داشته می‌شود
$ref = strtoupper(preg_replace('/[^0-9A-Za-z]/', '', (string) ($_GET['ref'] ?? '')));
if ($ref !== '' && strlen($ref) <= 12) setcookie('trp_ref', $ref, ['expires' => time() + 30 * 86400, 'path' => '/', 'secure' => Http::https(), 'httponly' => false, 'samesite' => 'Lax']);

$u = Auth::user();
$s = $u ? Auth::session() : null;
$esc = fn($x) => htmlspecialchars((string) $x, ENT_QUOTES, 'UTF-8');

if (!$u || !$s) {
    $refPre = $ref !== '' ? $ref : strtoupper(preg_replace('/[^0-9A-Za-z]/', '', (string) ($_COOKIE['trp_ref'] ?? '')));
    $R = (array) Cfg::get('referral', []);
    $kicked = Auth::$kicked; // این مرورگر نشست داشت ولی با ورود روی دستگاه دیگر بسته شد
    $maxDev = max(1, (int) Cfg::get('max_sessions_per_user', 2));
    require TRAPO_ROOT . '/lib/views/auth.php';
    exit;
}

$dir = Content::dir();
$tpl = @file_get_contents($dir . '/shell.html');
$files = json_decode((string) @file_get_contents($dir . '/files.json'), true);
if ($tpl === false || !is_array($files)) { http_response_code(503); exit('app not deployed: run tools/build-server.js'); }
$cfg = [
    'csrf' => $s['csrf'], 'ck' => $s['ck'], 'files' => $files,
    'user' => ['name' => $u['name'], 'login' => $u['login'], 'dev' => $u['dev_id'], 'since' => (int) $u['created_at']],
    'codes' => License::codes((int) $u['id']), 'referral' => Shop::referral($u), 'wm' => Content::wmTag((int) $u['id']),
];
$json = json_encode($cfg, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);
echo strtr($tpl, ['{{NONCE}}' => $nonce, '{{CFG}}' => $json, '{{VER}}' => $esc(trim((string) @file_get_contents($dir . '/version.txt')))]);
