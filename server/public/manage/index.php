<?php
declare(strict_types=1);
/* پنل مدیریت سرور: فقط یک صفحه ثابت؛ همه داده‌ها با /api (نشست مدیر جدا، کوکی SameSite=Strict) */
require dirname(__DIR__, 2) . '/lib/bootstrap.php';
if (!Manage::allowed()) { http_response_code(403); exit('forbidden'); }
Http::securityHeaders(null, true);
header('Cache-Control: no-store');
header('Content-Type: text/html; charset=utf-8');
header('X-Robots-Tag: noindex, nofollow');
?><!doctype html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>تراپو · مدیریت سرور</title>
<link rel="stylesheet" href="../css/fonts.css">
<link rel="stylesheet" href="../auth.css">
<link rel="stylesheet" href="manage.css">
</head>
<body>
<main class="mg">
  <section class="au__card mg__login" id="login">
    <header class="au__h"><div><h1>مدیریت سرور تراپو</h1><p>سفارش‌ها، تأیید پرداخت، کد تخفیف و معرف‌ها</p></div></header>
    <form class="au__f" id="lf"><label class="au__in"><span>رمز مدیریت</span><input type="password" name="pass" autocomplete="current-password" dir="ltr" required></label>
      <p class="au__err" hidden></p><button class="au__go">ورود</button></form>
    <p class="au__note">صدور کد فعال‌سازی این‌جا نیست؛ کلید خصوصی فقط در پنل آفلاین (admin/index.html) روی کامپیوتر خودتان است.</p>
  </section>
  <section id="app" hidden>
    <header class="mg__bar"><b>🛠️ مدیریت سرور تراپو</b>
      <nav class="mg__tabs">
        <button data-tab="dash" class="is-on">داشبورد</button><button data-tab="orders">سفارش‌ها</button><button data-tab="promos">کد تخفیف</button><button data-tab="users">کاربران</button>
      </nav><button class="mg__out" data-out>خروج</button></header>
    <div id="view"></div>
  </section>
</main>
<script src="manage.js"></script>
</body>
</html>
