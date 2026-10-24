<?php
declare(strict_types=1);

/* راه‌اندازی مشترک: تنظیمات، کلاس‌ها، گزارش خطا (بدون نمایش جزئیات به کاربر) */
error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');
mb_internal_encoding('UTF-8');
date_default_timezone_set('UTC');
if (function_exists('header_remove')) header_remove('X-Powered-By'); // نسخه PHP افشا نشود

define('TRAPO_ROOT', dirname(__DIR__));
require __DIR__ . '/Http.php';
require __DIR__ . '/Db.php';
require __DIR__ . '/Auth.php';
require __DIR__ . '/License.php';
require __DIR__ . '/Content.php';
require __DIR__ . '/Shop.php';
require __DIR__ . '/Ads.php';
require __DIR__ . '/Progress.php';
require __DIR__ . '/Manage.php';

Cfg::load(getenv('TRAPO_CONFIG') ?: TRAPO_ROOT . '/config.php');

set_exception_handler(function (Throwable $e) {
    error_log('[trapo] ' . get_class($e) . ': ' . $e->getMessage() . ' @ ' . $e->getFile() . ':' . $e->getLine());
    if (!headers_sent()) { http_response_code(500); header('Content-Type: application/json; charset=utf-8'); }
    echo json_encode(['ok' => false, 'err' => 'server']);
});
