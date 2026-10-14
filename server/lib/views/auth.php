<?php
/* صفحه ورود و ثبت‌نام (متغیرها از index.php: $esc, $refPre, $R) */
?><!doctype html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex">
<meta name="theme-color" content="#12b3a8">
<title>تراپو · ورود</title>
<link rel="icon" href="icons/icon-192.png">
<link rel="manifest" href="manifest.json">
<link rel="stylesheet" href="css/fonts.css">
<link rel="stylesheet" href="auth.css">
</head>
<body>
<main class="au">
  <section class="au__card" aria-labelledby="au-t">
    <header class="au__h">
      <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true"><defs><linearGradient id="acg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#58cc02"/><stop offset=".5" stop-color="#12b3a8"/><stop offset="1" stop-color="#8e2c6e"/></linearGradient></defs><rect width="64" height="64" rx="18" fill="url(#acg)"/><path d="M32 12c-6 8-12 15-12 22a12 12 0 0 0 24 0c0-7-6-14-12-22z" fill="#fff" opacity=".95"/><path d="M26 35h12M32 29v12" stroke="#12b3a8" stroke-width="4" stroke-linecap="round"/></svg>
      <div><h1 id="au-t" data-t="brand">تراپو</h1><p data-t="tag">آکادمی بالینی بازی‌وار · یونا، هما، نگار و ترمینو</p></div>
      <button type="button" class="au__lang" data-lang aria-label="English">🌐 <b>English</b></button>
    </header>
    <div class="au__tabs" role="tablist">
      <button type="button" role="tab" class="is-on" data-tab="login" data-t="login">ورود</button>
      <button type="button" role="tab" data-tab="register" data-t="register">ثبت‌نام رایگان</button>
    </div>
    <?php if ($refPre !== ''): ?>
    <p class="au__gift" data-gift>🎁 <span data-t="gift">با دعوت دوستت آمده‌ای: <?= (int) ($R['friend_discount_pct'] ?? 0) ?>٪ تخفیف اولین خرید برایت محفوظ است.</span></p>
    <?php endif; ?>
    <form class="au__f" novalidate autocomplete="on">
      <label class="au__in" data-only="register"><span data-t="name">نام و نام خانوادگی (روی گواهی‌ها)</span><input name="name" maxlength="60" autocomplete="name"></label>
      <label class="au__in"><span data-t="loginLbl">ایمیل یا شماره موبایل</span><input name="login" dir="ltr" maxlength="120" autocomplete="username" inputmode="email" required></label>
      <label class="au__in"><span data-t="pass">رمز عبور</span>
        <span class="au__pw"><input name="pass" type="password" dir="ltr" minlength="8" maxlength="200" autocomplete="current-password" required><button type="button" data-eye aria-label="نمایش رمز">👁️</button></span></label>
      <label class="au__in" data-only="register"><span data-t="ref">کد معرف (اختیاری)</span><input name="ref" dir="ltr" maxlength="12" value="<?= $esc($refPre) ?>" autocomplete="off"></label>
      <p class="au__err" role="alert" hidden></p>
      <button class="au__go" type="submit" data-t="goLogin">ورود</button>
      <p class="au__note" data-only="register" data-t="terms">با ثبت‌نام، درس اول هر دوره رایگان باز می‌شود. رمز را جایی امن نگه دار.</p>
    </form>
    <ul class="au__feat">
      <li data-t="f1">📚 درس‌های سه‌دقیقه‌ای، بیمار واقعی‌نما و ماشین‌حساب بالینی</li>
      <li data-t="f2">🧩 ترمینو: ۱۵ حیطه ترمینولوژی پزشکی</li>
      <li data-t="f3">🔐 پیشرفتت روی هر دستگاهی که وارد شوی همراهت است</li>
    </ul>
  </section>
  <p class="au__foot" data-t="foot">تراپو ابزار آموزشی است و جایگزین قضاوت بالینی یا دستور پزشک نیست.</p>
</main>
<script src="auth.js"></script>
</body>
</html>
