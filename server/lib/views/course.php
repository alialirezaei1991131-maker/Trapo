<?php
/* صفحه معرفی یک دوره؛ متغیرها از public/course.php: $c (seo-courses.php)، $all، $esc، $root، $nonce */
$base = rtrim((string) Cfg::get('base_url', ''), '/');
$url = $base . '/course/' . $c['slug'];
$title = $c['title'];
$desc = $c['desc'];
$join = './?signup=1#join';
$faq = array_merge($c['faq'], [
    ['هزینه این دوره چقدر است؟', 'ثبت‌نام رایگان است و درس اول ' . $c['fa'] . ' را رایگان می‌بینی. همه درس‌ها، کیس‌ها، ابزارها، امتحان نهایی و گواهی با یک بار خرید (' . trapo_fa_num(Shop::coursePrice($c['slug'])) . ' تومان) برای همیشه روی حسابت باز می‌ماند؛ بدون اشتراک ماهانه.'],
    ['چطور می‌خرم؟', 'بعد از ثبت‌نام، در برنامه «خرید دوره» را بزن و پیام آماده سفارش را با یک دکمه در تلگرام، بله یا ایمیل برای ما بفرست؛ پس از پرداخت، دوره خودکار روی حسابت باز می‌شود.'],
    ['گواهی پایان دوره می‌دهد؟', 'بله. با قبولی در امتحان نهایی، گواهی پایان دوره با نام تو و کد پیگیری صادر می‌شود.'],
]);
$ld = ['@context' => 'https://schema.org', '@graph' => [
    ['@type' => 'BreadcrumbList', 'itemListElement' => [
        ['@type' => 'ListItem', 'position' => 1, 'name' => 'Therapo', 'item' => $base . '/'],
        ['@type' => 'ListItem', 'position' => 2, 'name' => 'دوره‌ها', 'item' => $base . '/#courses'],
        ['@type' => 'ListItem', 'position' => 3, 'name' => $c['fa'] . ' · ' . $c['subject'], 'item' => $url]]],
    ['@type' => 'Course', '@id' => $url . '#course', 'name' => $c['fa'] . ' · ' . $c['subject'], 'alternateName' => $c['en'], 'description' => $desc, 'url' => $url, 'inLanguage' => 'fa',
     'provider' => ['@type' => 'EducationalOrganization', 'name' => 'Therapo', 'sameAs' => $base . '/'], 'educationalLevel' => 'Professional', 'audience' => ['@type' => 'EducationalAudience', 'audienceType' => $c['audience']],
     'teaches' => $c['outcomes'], 'keywords' => implode('، ', $c['kw']), 'image' => $base . '/img/og.png', 'isAccessibleForFree' => false,
     'hasCourseInstance' => ['@type' => 'CourseInstance', 'courseMode' => 'online', 'courseWorkload' => 'PT3M'],
     'syllabusSections' => array_map(fn($w) => ['@type' => 'Syllabus', 'name' => $w['name'], 'description' => $w['sub']], $c['worlds']),
     'offers' => trapo_offers($url, $c['slug'])],
    ['@type' => 'FAQPage', 'mainEntity' => array_map(fn($q) => ['@type' => 'Question', 'name' => $q[0], 'acceptedAnswer' => ['@type' => 'Answer', 'text' => $q[1]]], $faq)],
]];
?><!doctype html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<base href="<?= $esc($root) ?>">
<title><?= $esc($title) ?></title>
<meta name="description" content="<?= $esc($desc) ?>">
<meta name="keywords" content="<?= $esc(implode('، ', $c['kw'])) ?>">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="<?= $esc($url) ?>">
<meta name="theme-color" content="#12b3a8">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Therapo">
<meta property="og:locale" content="fa_IR">
<meta property="og:title" content="<?= $esc($title) ?>">
<meta property="og:description" content="<?= $esc($desc) ?>">
<meta property="og:url" content="<?= $esc($url) ?>">
<meta property="og:image" content="<?= $esc($base) ?>/img/og.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/svg+xml" href="appicons/icon.svg">
<link rel="apple-touch-icon" href="appicons/icon-192.png">
<link rel="manifest" href="manifest.json">
<link rel="stylesheet" href="<?= $esc(trapo_asset('auth.css')) ?>">
<link rel="stylesheet" href="css/fonts.css">
<script type="application/ld+json" nonce="<?= $esc($nonce) ?>"><?= json_encode($ld, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG) ?></script>
</head>
<body class="cp" style="--cc:<?= $esc($c['color']) ?>">
<div class="lp-bg" aria-hidden="true"><i></i><i></i><i></i><i></i><span class="lp-bg__grid"></span></div>
<header class="lp-bar">
  <a class="lp-logo" href="./" aria-label="Therapo">
    <svg viewBox="0 0 128 128" width="40" height="40" class="tlogo" aria-hidden="true"><defs><linearGradient id="acg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#58cc02"/><stop offset=".5" stop-color="#12b3a8"/><stop offset="1" stop-color="#8e2c6e"/></linearGradient></defs><rect width="128" height="128" rx="36" fill="url(#acg)"/><path d="M33 50C27 38 27 27 30 17c9 6 17 14 23 23z" fill="#fff"/><path d="M95 50c6-12 6-23 3-33-9 6-17 14-23 23z" fill="#fff"/><ellipse cx="29" cy="84" rx="10" ry="18" fill="#d6f2ec" transform="rotate(18 29 84)"/><ellipse cx="99" cy="84" rx="10" ry="18" fill="#d6f2ec" transform="rotate(-18 99 84)"/><ellipse cx="64" cy="74" rx="38" ry="40" fill="#fff"/><ellipse cx="64" cy="101" rx="19" ry="11" fill="#e3f6f2"/><path d="M57 99q7 4 14 0M57 106q7 4 14 0" stroke="#bfe6df" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="49" cy="64" r="15" fill="#fff" stroke="#8e2c6e" stroke-width="4"/><circle cx="79" cy="64" r="15" fill="#fff" stroke="#8e2c6e" stroke-width="4"/><path d="M60 62q4-3 8 0" stroke="#8e2c6e" stroke-width="4" fill="none" stroke-linecap="round"/><g class="owl-eyes"><ellipse cx="49" cy="65" rx="6.5" ry="7.8" fill="#1d2b3a"/><ellipse cx="79" cy="65" rx="6.5" ry="7.8" fill="#1d2b3a"/><circle cx="51.5" cy="61.5" r="2.6" fill="#fff"/><circle cx="81.5" cy="61.5" r="2.6" fill="#fff"/><circle cx="47" cy="68" r="1.1" fill="#fff"/><circle cx="77" cy="68" r="1.1" fill="#fff"/></g><ellipse cx="37" cy="82" rx="6" ry="3.6" fill="#ff8fab" opacity=".75"/><ellipse cx="91" cy="82" rx="6" ry="3.6" fill="#ff8fab" opacity=".75"/><path d="M58.6 79h10.8c1.3 0 2 1.5 1.2 2.5l-5.4 7c-.6.8-1.8.8-2.4 0l-5.4-7c-.8-1 0-2.5 1.2-2.5z" fill="#ffb020"/><path d="M57.5 91.5q6.5 5 13 0" stroke="#1d2b3a" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M36 86c2 18 14 26 28 26s26-8 28-26" stroke="#12b3a8" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="64" cy="112" r="6" fill="#12b3a8"/><circle cx="64" cy="112" r="2.4" fill="#fff"/><path d="M106 16l2.2 5.3 5.3 2.2-5.3 2.2-2.2 5.3-2.2-5.3-5.3-2.2 5.3-2.2z" fill="#ffd23f"/></svg>
    <b>Therapo</b>
  </a>
  <nav class="lp-nav">
    <a href="./#courses">دوره‌ها</a><a href="course/<?= $esc($c['slug']) ?>#pricing">قیمت</a>
    <a class="lp-cta lp-cta--sm" href="./#join">ورود</a>
  </nav>
</header>
<main>
  <nav class="cp-bc" aria-label="مسیر صفحه"><a href="./">Therapo</a> › <a href="./#courses">دوره‌ها</a> › <span aria-current="page"><?= $esc($c['fa']) ?></span></nav>
  <section class="lp-hero cp-hero">
    <div class="lp-hero__txt">
      <p class="lp-kicker">دوره آنلاین Therapo · <?= $esc($c['en']) ?></p>
      <h1><?= $esc($c['fa']) ?>: آموزش <?= $esc($c['subject']) ?></h1>
      <p class="cp-tag"><?= $esc($c['tagline']) ?></p>
      <p class="lp-lead"><?= $esc($c['about']) ?></p>
      <div class="lp-hero__cta"><a class="lp-cta" href="<?= $esc($join) ?>">ثبت‌نام رایگان و شروع</a><a class="lp-ghost" href="course/<?= $esc($c['slug']) ?>#syllabus">سرفصل‌ها</a></div>
      <ul class="lp-nums"><?php foreach ($c['nums'] as $n): ?><li><b><?= $esc($n[0]) ?></b><span><?= $esc($n[1]) ?></span></li><?php endforeach; ?></ul>
    </div>
    <div class="cp-art"><span class="cp-ring" aria-hidden="true"></span><span class="cp-ring cp-ring--2" aria-hidden="true"></span><span class="lp-spark lp-spark--a" aria-hidden="true">✦</span><span class="lp-spark lp-spark--c" aria-hidden="true">✦</span><img src="img/m-<?= $esc($c['slug']) ?>.svg" width="220" height="275" alt="<?= $esc($c['fa'] . ' — ' . $c['subject']) ?>"></div>
  </section>
  <svg class="lp-ecg" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="lpecg" x1="0" x2="1"><stop offset="0" stop-color="#58cc02"/><stop offset=".5" stop-color="#12b3a8"/><stop offset="1" stop-color="#8e2c6e"/></linearGradient></defs><path d="M0 40 H330 l12 -6 l10 6 h18 l8 10 l14 -46 l14 58 l10 -22 h22 l14 -8 l14 8 H760 l12 -6 l10 6 h18 l8 10 l14 -46 l14 58 l10 -22 h22 l14 -8 l14 8 H1200"/></svg>

  <section class="lp-sec cp-scene"><?= trapo_scene(['yona' => 'ward', 'homa' => 'icu', 'negar' => 'lab', 'termino' => 'class', 'ritma' => 'icu'][$c['slug']] ?? 'ward') ?></section>

  <section class="lp-sec" aria-labelledby="o-t">
    <h2 id="o-t">بعد از این دوره می‌توانی…</h2>
    <ul class="cp-out"><?php foreach ($c['outcomes'] as $o): ?><li><?= $esc($o) ?></li><?php endforeach; ?></ul>
    <p class="cp-aud">👥 <b>مناسب برای:</b> <?= $esc($c['audience']) ?></p>
    <ul class="cp-hl"><?php foreach ($c['highlights'] as $o): ?><li>✨ <?= $esc($o) ?></li><?php endforeach; ?></ul>
  </section>

  <section class="lp-sec" id="syllabus" aria-labelledby="s-t">
    <h2 id="s-t">سرفصل‌ها</h2>
    <p class="lp-sub">هر <?= $c['slug'] === 'termino' ? 'حیطه' : 'دنیا' ?> چند سطح دارد و هر سطح چند درس سه‌دقیقه‌ای؛ در پایان هر دنیا آزمون مرحله و در پایان دوره امتحان نهایی و گواهی.</p>
    <ol class="cp-syl">
      <?php foreach ($c['worlds'] as $i => $w): ?>
      <li><details <?= $i === 0 ? 'open' : '' ?>><summary><b><?= $esc($w['name']) ?></b> <small><?= $esc($w['sub']) ?></small></summary>
        <ul><?php foreach ($w['levels'] as $lv): ?><li><?= $esc($lv) ?></li><?php endforeach; ?></ul></details></li>
      <?php endforeach; ?>
    </ol>
  </section>

  <?php if ($c['tools']): ?>
  <section class="lp-sec" aria-labelledby="t-t">
    <h2 id="t-t">ابزارها و ماشین‌حساب‌های بالینی</h2>
    <ul class="cp-tools"><?php foreach ($c['tools'] as $t): ?><li><span dir="ltr"><?= $esc($t['sym']) ?></span><div><b><?= $esc($t['name']) ?></b><small><?= $esc($t['desc']) ?></small></div></li><?php endforeach; ?></ul>
  </section>
  <?php endif; ?>

  <?= str_replace('href="#join"', 'href="' . $esc($join) . '"', trapo_pricing_html($esc, $c['slug'])) ?>

  <?php $refs = (require TRAPO_ROOT . '/lib/views/refs.php')[$c['slug']] ?? []; if ($refs): ?>
  <section class="lp-sec" id="refs" aria-labelledby="r-t">
    <h2 id="r-t">منابع</h2>
    <p class="lp-sub">منابع و راهنماهای بین‌المللی که دوره <?= $esc($c['fa']) ?> بر پایه آن‌ها ساخته شده است.</p>
    <ol class="cp-refs" dir="ltr" lang="en"><?php foreach ($refs as $r): ?><li><?= $esc($r) ?></li><?php endforeach; ?></ol>
  </section>
  <?php endif; ?>

  <section class="lp-sec" id="faq" aria-labelledby="f-t">
    <h2 id="f-t">سؤال‌های رایج درباره <?= $esc($c['fa']) ?></h2>
    <div class="lp-faq"><?php foreach ($faq as $q): ?><details><summary><?= $esc($q[0]) ?></summary><p><?= $esc($q[1]) ?></p></details><?php endforeach; ?></div>
  </section>

  <section class="lp-sec" aria-labelledby="m-t">
    <h2 id="m-t">دوره‌های دیگر Therapo</h2>
    <div class="cp-more"><?php foreach ($all as $x): if ($x['slug'] === $c['slug']) continue; ?>
      <a class="lp-c cp-mc" href="course/<?= $esc($x['slug']) ?>" style="--cc:<?= $esc($x['color']) ?>"><img src="img/m-<?= $esc($x['slug']) ?>.svg" width="64" height="80" alt="" loading="lazy"><h3><?= $esc($x['fa']) ?> <small><?= $esc($x['subject']) ?></small></h3></a>
    <?php endforeach; ?></div>
  </section>

  <section class="lp-end">
    <h2>همین امروز اولین درس <?= $esc($c['fa']) ?> را شروع کن</h2>
    <a class="lp-cta" href="<?= $esc($join) ?>">ثبت‌نام رایگان و شروع</a>
  </section>
</main>
<?= trapo_footer_html($esc) ?>
<script src="<?= $esc(trapo_asset('lp.js')) ?>"></script>
</body>
</html>
