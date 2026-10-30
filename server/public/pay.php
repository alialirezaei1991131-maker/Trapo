<?php
declare(strict_types=1);
/*
 * Therapo — بازگشت از درگاه پرداخت زیبال
 * پرداخت با سرور زیبال تأیید می‌شود (Pay::back) و کاربر با نتیجه به برنامه برمی‌گردد:
 *   ./?pay=ok&order=…&ref=…   یا   ./?pay=fail&order=…&why=…
 */
$trapoRoot = dirname(__DIR__);
if (!is_file($trapoRoot . '/lib/bootstrap.php') && is_file($trapoRoot . '/trapo_app/lib/bootstrap.php')) $trapoRoot .= '/trapo_app';
require $trapoRoot . '/lib/bootstrap.php';
Http::securityHeaders();
header('Cache-Control: no-store');

$r = Pay::back($_GET);
$q = ['pay' => $r['ok'] ? 'ok' : 'fail'];
if (!empty($r['order'])) $q['order'] = $r['order'];
if (!empty($r['ref'])) $q['ref'] = $r['ref'];
if (!$r['ok'] && !empty($r['err'])) $q['why'] = $r['err'];
header('Location: ./?' . http_build_query($q), true, 302);
