<?php
/* صفحه اصلی سایت برای بازدیدکننده واردنشده: صفحه معرفی (برای موتورهای جست‌وجو) + ورود و ثبت‌نام
 * متغیرها از index.php: $esc, $refPre, $R, $kicked, $maxDev, $nonce
 * هیچ کدی از برنامه در این صفحه نیست؛ فقط معرفی و فرم. */
$base = rtrim((string) Cfg::get('base_url', ''), '/');
require_once TRAPO_ROOT . '/lib/views/pricing.php';
require_once TRAPO_ROOT . '/lib/views/scenes.php';
$fd = (int) ($R['friend_discount_pct'] ?? 0);
$title = 'تراپو | آموزش بالینی الکترولیت، گاز خون، تغذیه بالینی، ترمینولوژی پزشکی و نوار قلب';
$desc = 'تراپو آکادمی آموزش بالینی برای دانشجویان پزشکی، پرستاری و تغذیه: اصلاح الکترولیت، تفسیر گاز خون (ABG)، معاینه تغذیه‌محور (NFPE)، ترمینولوژی پزشکی و تفسیر نوار قلب (ECG) با ۹۹۹ درس کوتاه، ۲۹۰ کیس بالینی و گواهی پایان دوره. درس اول هر دوره رایگان، هر دوره با یک بار خرید برای همیشه.';
$courses = [
    ['yona', 'یونا', 'Yona', 'اصلاح اختلالات الکترولیت', 'Electrolyte disorders', '#58cc02',
     'سدیم، پتاسیم، کلسیم، منیزیم و فسفر را مثل یک پزشک کشیک اصلاح کن: فرمول‌ها، پروتکل‌ها، مسئله‌های محاسباتی تازه و ماشین‌حساب بالینی.',
     'Correct sodium, potassium, calcium, magnesium and phosphate like an on-call physician — formulas, protocols, fresh calculation problems and bedside calculators.',
     'دانشجوی پزشکی، انترن و رزیدنت، پرستار ICU و اورژانس، داروساز، کارشناس تغذیه بالینی', 'Medical students, interns, residents, ICU/ER nurses, pharmacists, clinical dietitians'],
    ['homa', 'هما', 'Homa', 'تفسیر گاز خون و اسید-باز', 'Blood gas & acid–base', '#e5484d',
     'تفسیر گام‌به‌گام ABG و VBG: اکسیژناسیون، اسید و باز، جبران مورد انتظار، آنیون گپ و نسبت دلتا، با ۲۹ بیمار واقعی‌نما و کیس‌های تکمیلی.',
     'Step-by-step ABG and VBG interpretation — oxygenation, acid–base, expected compensation, anion gap and delta ratio — with 29 realistic patients and more.',
     'دانشجوی پزشکی، رزیدنت بیهوشی، اورژانس و داخلی، پرستار ICU و NICU، کارشناس هوشبری و تنفس‌درمانی', 'Medical students, anaesthesia/ER/IM residents, ICU & NICU nurses, respiratory therapists'],
    ['negar', 'نگار', 'Negar', 'معاینه فیزیکی تغذیه‌محور (NFPE)', 'Nutrition-focused physical exam', '#8e2c6e',
     'تشخیص سوءتغذیه بر پایه معیارهای ASPEN و Academy: معاینه عضله و چربی، ادم، قدرت چنگش، نشانه‌های کمبود ریزمغذی‌ها و مستندسازی با کد ICD-10.',
     'Diagnose malnutrition with the ASPEN/Academy criteria — muscle and fat exam, oedema, grip strength, micronutrient signs and ICD-10 documentation.',
     'کارشناس و دانشجوی تغذیه، متخصص تغذیه، پزشک و رزیدنت، پرستار بخش و ICU', 'Dietitians and nutrition students, physicians, residents, ward and ICU nurses'],
    ['termino', 'ترمینو', 'Termino', 'ترمینولوژی پزشکی در ۱۵ حیطه', 'Medical terminology · 15 modules', '#4b4fc4',
     'هر واژه پزشکی یک پازل است: پیشوند، ریشه و پسوند را بشناس و بعد ۱۴ دستگاه بدن، از قلب و ریه تا چشم، گوش و سرطان را با ۴٬۶۰۰+ واژه یاد بگیر.',
     'Every medical term is a puzzle: learn prefixes, roots and suffixes, then 14 body systems — heart, lungs, eyes, ears, cancer and more — with 4,600+ terms.',
     'دانشجوی پزشکی، پرستاری، مامایی، داروسازی، پیراپزشکی و مدارک پزشکی', 'Medicine, nursing, midwifery, pharmacy and allied-health students, health-records staff'],
    ['ritma', 'ریتما', 'Ritma', 'تفسیر نوار قلب (ECG)', 'ECG interpretation', '#d7263d',
     'هر نوار قلب یک داستان است: کاغذ نوار و ۱۲ لید، موج‌ها و محور، آریتمی‌ها و بلوک‌ها، ایسکمی و STEMI، الکترولیت‌ها و داروها، و نوار در ICU و اورژانس.',
     'Every ECG tells a story: paper and the 12 leads, waves and axis, arrhythmias and blocks, ischaemia and STEMI, electrolytes and drugs, and the ECG in ICU and ER.',
     'دانشجوی پزشکی و پرستاری، پرستار CCU، ICU و اورژانس، فوریت‌های پزشکی، کارورز و رزیدنت', 'Medical and nursing students, CCU/ICU/ER nurses, paramedics, interns and residents'],
];
$faq = [
    ['تراپو برای چه کسانی است؟', 'Who is Therapo for?',
     'برای دانشجویان و فارغ‌التحصیلان پزشکی، پرستاری، مامایی، داروسازی، تغذیه و پیراپزشکی، و کادر درمان بخش‌های ICU و اورژانس که می‌خواهند مهارت‌های بالینی را سریع و کاربردی تمرین کنند.',
     'Students and graduates of medicine, nursing, midwifery, pharmacy, nutrition and allied health, and ICU/ER staff who want fast, practical clinical practice.'],
    ['آیا استفاده از تراپو رایگان است؟', 'Is Therapo free?',
     'ثبت‌نام رایگان است و درس اول هر دوره را رایگان می‌بینی تا با روش آموزش آشنا شوی. برای باز شدن همه درس‌ها، کیس‌ها، ابزارها، امتحان نهایی و گواهی، همان دوره را یک بار می‌خری و برای همیشه در دسترست می‌ماند.',
     'Signing up is free and the first lesson of every course is free so you can get to know the method. To open every lesson, case, tool, the final exam and the certificate, you buy that course once and keep it for good.'],
    ['قیمت دوره‌ها چقدر است و چطور می‌خرم؟', 'How much are the courses and how do I buy?',
     'قیمت هر دوره (دسترسی دائمی): ' . implode('، ', array_map(fn($c) => Shop::courseName($c) . ' ' . trapo_fa_num(Shop::coursePrice($c)) . ' تومان', array_keys(Shop::catalog()))) . '. با خرید هم‌زمان چند دوره تخفیف می‌گیری. در برنامه «خرید دوره» را بزن و پیام آماده سفارش را با یک دکمه در تلگرام، بله یا ایمیل بفرست؛ پس از پرداخت، دوره خودکار روی حسابت باز می‌شود.',
     'Each course (lifetime access): ' . implode(', ', array_map(fn($c) => Shop::courseName($c, true) . ' ' . number_format(Shop::coursePrice($c)) . ' Toman', array_keys(Shop::catalog()))) . '. Buying several together is cheaper. Tap “Buy course” in the app and send the ready-made order message on Telegram, Bale or email; once paid, the course opens on your account automatically.'],
    ['پیشرفتم را چطور می‌بینم؟', 'How do I track my progress?',
     'مثل دولینگو: هدف روزانه انتخاب می‌کنی، امتیاز امروز و زنجیره روزهای پشت‌سرهم را می‌بینی و نمودار ۷ و ۳۰ روز اخیر نشان می‌دهد چقدر جلو رفته‌ای. پیشرفتت همراه حسابت روی همه دستگاه‌ها می‌ماند.',
     'Like Duolingo: you pick a daily goal, see today’s XP and your day streak, and charts of the last 7 and 30 days show how far you’ve come. Your progress follows your account to every device.'],
    ['هر درس چقدر طول می‌کشد؟', 'How long is each lesson?',
     'هر درس حدود سه دقیقه است: یک کارت آموزشی کوتاه، سؤال‌های تعاملی و در پایان هر بخش، بیمار واقعی‌نما و آزمون مرحله.',
     'About three minutes: a short teaching card and interactive questions, with realistic patients and a stage test at the end of each section.'],
    ['روی گوشی هم کار می‌کند؟', 'Does it work on my phone?',
     'بله. تراپو روی گوشی، تبلت، لپ‌تاپ و دسکتاپ اجرا می‌شود و می‌توانی آن را مثل یک اپ روی صفحه اصلی نصب کنی. پیشرفتت با ورود به حساب روی همه دستگاه‌ها همراهت است.',
     'Yes — phone, tablet, laptop and desktop, and you can install it like an app on your home screen. Your progress follows your account to every device.'],
    ['گواهی پایان دوره می‌دهد؟', 'Do I get a certificate?',
     'بله. با قبولی در امتحان نهایی هر دوره، گواهی پایان دوره با نام تو و کد پیگیری صادر می‌شود.',
     'Yes. Passing a course’s final exam issues a completion certificate with your name and a tracking code.'],
];
$ld = [
    '@context' => 'https://schema.org',
    '@graph' => [
        ['@type' => 'EducationalOrganization', '@id' => $base . '/#org', 'name' => 'تراپو', 'alternateName' => 'Therapo', 'url' => $base . '/', 'logo' => $base . '/appicons/icon-512.png', 'description' => $desc],
        ['@type' => 'WebSite', '@id' => $base . '/#site', 'name' => 'تراپو', 'url' => $base . '/', 'inLanguage' => 'fa-IR', 'publisher' => ['@id' => $base . '/#org']],
        ['@type' => 'ItemList', 'name' => 'دوره‌های تراپو', 'itemListElement' => array_map(function ($c, $i) use ($base) {
            return ['@type' => 'ListItem', 'position' => $i + 1, 'url' => $base . '/course/' . $c[0], 'item' => ['@type' => 'Course', 'name' => $c[1] . ' · ' . $c[3], 'description' => $c[6], 'inLanguage' => 'fa', 'url' => $base . '/course/' . $c[0], 'offers' => trapo_offers($base . '/course/' . $c[0], $c[0]),
                'provider' => ['@id' => $base . '/#org'], 'educationalLevel' => 'Professional', 'hasCourseInstance' => ['@type' => 'CourseInstance', 'courseMode' => 'online']]];
        }, $courses, array_keys($courses))],
        ['@type' => 'FAQPage', 'mainEntity' => array_map(function ($q) { return ['@type' => 'Question', 'name' => $q[0], 'acceptedAnswer' => ['@type' => 'Answer', 'text' => $q[2]]]; }, $faq)],
    ],
];
?><!doctype html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title><?= $esc($title) ?></title>
<meta name="description" content="<?= $esc($desc) ?>">
<meta name="robots" content="<?= $refPre !== '' ? 'noindex, follow' : 'index, follow, max-image-preview:large' ?>">
<link rel="canonical" href="<?= $esc($base) ?>/">
<meta name="theme-color" content="#12b3a8">
<meta property="og:type" content="website">
<meta property="og:site_name" content="تراپو">
<meta property="og:locale" content="fa_IR">
<meta property="og:title" content="<?= $esc($title) ?>">
<meta property="og:description" content="<?= $esc($desc) ?>">
<meta property="og:url" content="<?= $esc($base) ?>/">
<meta property="og:image" content="<?= $esc($base) ?>/img/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?= $esc($title) ?>">
<meta name="twitter:description" content="<?= $esc($desc) ?>">
<meta name="twitter:image" content="<?= $esc($base) ?>/img/og.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="تراپو">
<link rel="icon" type="image/svg+xml" href="appicons/icon.svg">
<link rel="icon" href="appicons/icon-192.png">
<link rel="apple-touch-icon" href="appicons/icon-192.png">
<link rel="manifest" href="manifest.json">
<link rel="stylesheet" href="<?= $esc(trapo_asset('auth.css')) ?>">
<script type="application/ld+json" nonce="<?= $esc($nonce) ?>"><?= json_encode($ld, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG) ?></script>
</head>
<body>
<div class="lp-bg" aria-hidden="true"><i></i><i></i><i></i><i></i><span class="lp-bg__grid"></span></div>
<header class="lp-bar">
  <a class="lp-logo" href="./" aria-label="تراپو">
    <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true"><defs><linearGradient id="acg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#58cc02"/><stop offset=".5" stop-color="#12b3a8"/><stop offset="1" stop-color="#8e2c6e"/></linearGradient></defs><rect width="64" height="64" rx="18" fill="url(#acg)"/><path d="M32 12c-6 8-12 15-12 22a12 12 0 0 0 24 0c0-7-6-14-12-22z" fill="#fff" opacity=".95"/><path d="M26 35h12M32 29v12" stroke="#12b3a8" stroke-width="4" stroke-linecap="round"/></svg>
    <b data-t="brand">تراپو</b>
  </a>
  <nav class="lp-nav">
    <a href="#courses" data-t="navCourses">دوره‌ها</a><a href="#pricing" data-t="navPrice">قیمت‌ها</a><a href="#faq" data-t="navFaq">سؤال‌های رایج</a>
    <button type="button" class="lp-inst" data-install hidden>📲 <span data-t="install">نصب اپ</span></button>
    <button type="button" class="au__lang" data-lang aria-label="English">🌐 <b>English</b></button>
    <a class="lp-cta lp-cta--sm" href="#join" data-go-tab="login" data-t="login">ورود</a>
  </nav>
</header>

<main>
  <section class="lp-hero">
    <div class="lp-hero__txt">
      <p class="lp-kicker" data-t="kicker">آکادمی آموزش بالینی · ویژه دانشجویان و کادر درمان</p>
      <h1 data-t="h1">مهارت‌های بالینی را با درس‌های سه‌دقیقه‌ای و بیمار واقعی‌نما یاد بگیر</h1>
      <p class="lp-lead" data-t="lead">اصلاح الکترولیت، تفسیر گاز خون، معاینه تغذیه‌محور، ترمینولوژی پزشکی و تفسیر نوار قلب؛ کوتاه، تعاملی و کاربردی برای بخش، کشیک و امتحان. با گواهی پایان دوره.</p>
      <div class="lp-hero__cta">
        <a class="lp-cta" href="#join" data-go-tab="register" data-t="ctaStart">ثبت‌نام رایگان و شروع</a>
        <a class="lp-ghost" href="#courses" data-t="ctaCourses">دیدن دوره‌ها</a>
      </div>
      <ul class="lp-nums">
        <li><b><?= trapo_fa_num(count($courses)) ?></b><span data-t="nCourses">دوره تخصصی</span></li>
        <li><b>۹۹۹</b><span data-t="nLessons">درس کوتاه</span></li>
        <li><b>۹٬۳۰۰+</b><span data-t="nQ">سؤال و مرحله</span></li>
        <li><b>۲۹۰</b><span data-t="nCases">کیس بالینی</span></li>
      </ul>
    </div>

    <div class="lp-joinwrap">
    <div class="lp-fly" aria-hidden="true"><?php foreach (['yona', 'homa', 'negar', 'termino', 'ritma'] as $i => $m): ?><img class="lp-fm lp-fm--<?= $i ?>" src="img/m-<?= $m ?>.svg" width="72" height="90" alt=""><?php endforeach; ?><span class="lp-spark lp-spark--a">✦</span><span class="lp-spark lp-spark--b">✦</span><span class="lp-spark lp-spark--c">✦</span></div>
    <section class="au__card lp-join" id="join" aria-labelledby="au-t">
      <header class="au__h">
        <div><h2 id="au-t" data-t="joinT">شروع رایگان</h2><p data-t="tag">ثبت‌نام در کمتر از یک دقیقه · درس اول هر دوره رایگان</p></div>
      </header>
      <?php if (!empty($kicked)): ?>
      <p class="au__gift au__kick" data-kick>🔐 <span data-t="kicked">حسابت روی دستگاه دیگری باز شد و از این دستگاه خارج شدی. هر حساب حداکثر روی <?= (int) $maxDev ?> دستگاه هم‌زمان باز می‌ماند.</span></p>
      <?php endif; ?>
      <div class="au__tabs" role="tablist">
        <button type="button" role="tab" class="is-on" data-tab="login" data-t="login">ورود</button>
        <button type="button" role="tab" data-tab="register" data-t="register">ثبت‌نام رایگان</button>
      </div>
      <?php if ($refPre !== ''): ?>
      <p class="au__gift" data-gift>🎁 <span data-t="gift">با دعوت دوستت آمده‌ای: <?= $fd ?>٪ تخفیف اولین خرید برایت محفوظ است.</span></p>
      <?php endif; ?>
      <form class="au__f" novalidate autocomplete="on">
        <label class="au__in" data-only="register"><span data-t="name">نام و نام خانوادگی (روی گواهی‌ها)</span><input name="name" maxlength="60" autocomplete="name"></label>
        <label class="au__in"><span data-t="loginLbl">ایمیل یا شماره موبایل</span><input name="login" dir="ltr" maxlength="120" autocomplete="username" inputmode="email" required></label>
        <label class="au__in" data-only="register"><span data-t="contactLbl" data-contact-lbl>شماره موبایل یا ایمیل دوم (اختیاری)</span><input name="contact" dir="ltr" maxlength="120" autocomplete="tel"></label>
        <label class="au__in"><span data-t="pass">رمز عبور</span>
          <span class="au__pw"><input name="pass" type="password" dir="ltr" minlength="8" maxlength="200" autocomplete="current-password" required><button type="button" data-eye aria-label="نمایش رمز">👁️</button></span></label>
        <label class="au__in" data-only="register"><span data-t="ref">کد معرف (اختیاری)</span><input name="ref" dir="ltr" maxlength="12" value="<?= $esc($refPre) ?>" autocomplete="off"></label>
        <p class="au__err" role="alert" hidden></p>
        <button class="au__go" type="submit" data-t="goLogin">ورود</button>
        <p class="au__note" data-only="register" data-t="terms">با ثبت‌نام، درس اول هر دوره رایگان باز می‌شود. هر ایمیل یا شماره موبایل فقط یک حساب دارد؛ رمز را جایی امن نگه دار.</p>
      </form>
    </section>
    </div>
  </section>
  <svg class="lp-ecg" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="lpecg" x1="0" x2="1"><stop offset="0" stop-color="#58cc02"/><stop offset=".5" stop-color="#12b3a8"/><stop offset="1" stop-color="#8e2c6e"/></linearGradient></defs><path d="M0 40 H330 l12 -6 l10 6 h18 l8 10 l14 -46 l14 58 l10 -22 h22 l14 -8 l14 8 H760 l12 -6 l10 6 h18 l8 10 l14 -46 l14 58 l10 -22 h22 l14 -8 l14 8 H1200"/></svg>

  <?= trapo_scenes_html() ?>

  <section class="lp-sec" id="courses" aria-labelledby="c-t">
    <h2 id="c-t" data-t="cT">دوره‌ها؛ هر کدام یک مسیر روشن</h2>
    <p class="lp-sub" data-t="cS">هر دوره چند دنیا و سطح دارد؛ هر روز چند درس سه‌دقیقه‌ای، بیمار واقعی‌نما، ابزار و ماشین‌حساب بالینی، و در پایان امتحان و گواهی.</p>
    <div class="lp-courses">
      <?php foreach ($courses as $c): ?>
      <article class="lp-c" style="--cc:<?= $c[5] ?>">
        <img src="img/m-<?= $c[0] ?>.svg" width="96" height="120" alt="<?= $esc($c[1]) ?>" loading="lazy">
        <h3><a href="course/<?= $c[0] ?>"><span data-l="fa"><?= $esc($c[1]) ?></span><span data-l="en" lang="en"><?= $esc($c[2]) ?></span> <small><span data-l="fa"><?= $esc($c[3]) ?></span><span data-l="en" lang="en"><?= $esc($c[4]) ?></span></small></a></h3>
        <p><span data-l="fa"><?= $esc($c[6]) ?></span><span data-l="en" lang="en"><?= $esc($c[7]) ?></span></p>
        <p class="lp-aud">👥 <b data-t="for">مناسب برای</b> <span data-l="fa"><?= $esc($c[8]) ?></span><span data-l="en" lang="en"><?= $esc($c[9]) ?></span></p>
        <a class="lp-more" href="course/<?= $c[0] ?>"><span data-l="fa">سرفصل‌ها و معرفی کامل <?= $esc($c[1]) ?> ←</span><span data-l="en" lang="en">Full syllabus of <?= $esc($c[2]) ?> →</span></a>
      </article>
      <?php endforeach; ?>
    </div>
  </section>

  <?= trapo_pricing_html($esc) ?>

  <section class="lp-sec" aria-labelledby="w-t">
    <h2 id="w-t" data-t="wT">چرا تراپو؟</h2>
    <ul class="lp-why">
      <li><b data-t="w1t">⏱️ درس‌های سه‌دقیقه‌ای</b><span data-t="w1">بین دو کشیک یا در مسیر هم می‌شود خواند؛ هر روز کمی، ولی پیوسته.</span></li>
      <li><b data-t="w2t">🏥 بیمار واقعی‌نما</b><span data-t="w2">۲۹۰ کیس بالینی با آزمایش، گاز خون، نوار قلب و تصویر؛ مثل راند بخش.</span></li>
      <li><b data-t="w3t">🧮 ابزار و ماشین‌حساب بالینی</b><span data-t="w3">۲۲ ابزار: کسری سدیم، دوز پتاسیم و منیزیم، آنیون گپ، P/F و …</span></li>
      <li><b data-t="w4t">🚨 کیس‌های ترکیبی ICU</b><span data-t="w4">بیمار بدحالی که الکترولیت، گاز خون و تغذیه را با هم می‌خواهد.</span></li>
      <li><b data-t="w5t">🎓 گواهی پایان دوره</b><span data-t="w5">با قبولی در امتحان نهایی، گواهی با نام و کد پیگیری.</span></li>
      <li><b data-t="w6t">📱 روی همه دستگاه‌ها</b><span data-t="w6">گوشی، تبلت، لپ‌تاپ؛ قابل نصب مثل اپ و پیشرفت همراه حساب.</span></li>
    </ul>
  </section>

  <section class="lp-sec" aria-labelledby="s-t">
    <h2 id="s-t" data-t="sT">در سه قدم شروع کن</h2>
    <ol class="lp-steps">
      <li><b>۱</b><span data-t="s1">رایگان ثبت‌نام کن (ایمیل یا شماره موبایل).</span></li>
      <li><b>۲</b><span data-t="s2">دوره‌ات را انتخاب کن و درس اول را رایگان امتحان کن.</span></li>
      <li><b>۳</b><span data-t="s3">اگر خوشت آمد، دوره را یک بار بخر؛ همه درس‌ها، کیس‌ها، ابزارها و گواهی برای همیشه باز می‌شوند.</span></li>
    </ol>
  </section>

  <section class="lp-sec" id="faq" aria-labelledby="f-t">
    <h2 id="f-t" data-t="fT">سؤال‌های رایج</h2>
    <div class="lp-faq">
      <?php foreach ($faq as $q): ?>
      <details><summary><span data-l="fa"><?= $esc($q[0]) ?></span><span data-l="en" lang="en"><?= $esc($q[1]) ?></span></summary><p><span data-l="fa"><?= $esc($q[2]) ?></span><span data-l="en" lang="en"><?= $esc($q[3]) ?></span></p></details>
      <?php endforeach; ?>
    </div>
  </section>

  <section class="lp-end">
    <h2 data-t="endT">همین امروز اولین درس را شروع کن</h2>
    <a class="lp-cta" href="#join" data-go-tab="register" data-t="ctaStart">ثبت‌نام رایگان و شروع</a>
  </section>
</main>
<?= trapo_footer_html($esc) ?>
<script src="<?= $esc(trapo_asset('auth.js')) ?>"></script>
<script src="<?= $esc(trapo_asset('lp.js')) ?>"></script>
</body>
</html>
