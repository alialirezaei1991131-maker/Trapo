<?php
/* صفحه معرفی یک دوره؛ متغیرها از public/course.php: $c (seo-courses.php)، $all، $esc، $root، $nonce */
$base = rtrim((string) Cfg::get('base_url', ''), '/');
$url = $base . '/course/' . $c['slug'];
$title = $c['title'];
$desc = $c['desc'];
$join = './?signup=1#join';
$faq = array_merge($c['faq'], [
    ['هزینه این دوره چقدر است؟', 'ثبت‌نام رایگان است و هر روز ' . trapo_fa_num(Hearts::catalog()['free']) . ' قلب رایگان برای درس‌های رایگان داری. برای همه درس‌ها، کیس‌ها، ابزارها و گواهی، اشتراک قلب (از ' . trapo_fa_num(min(array_map(fn($p) => $p['price'][1] ?? PHP_INT_MAX, Hearts::catalog()['plans']))) . ' تومان در ماه)، بسته قلب یا پلن نامحدود می‌خری؛ همان قلب‌ها همه دوره‌ها را باز می‌کنند.'],
    ['گواهی پایان دوره می‌دهد؟', 'بله. با قبولی در امتحان نهایی، گواهی پایان دوره با نام تو و کد پیگیری صادر می‌شود.'],
]);
$ld = ['@context' => 'https://schema.org', '@graph' => [
    ['@type' => 'BreadcrumbList', 'itemListElement' => [
        ['@type' => 'ListItem', 'position' => 1, 'name' => 'تراپو', 'item' => $base . '/'],
        ['@type' => 'ListItem', 'position' => 2, 'name' => 'دوره‌ها', 'item' => $base . '/#courses'],
        ['@type' => 'ListItem', 'position' => 3, 'name' => $c['fa'] . ' · ' . $c['subject'], 'item' => $url]]],
    ['@type' => 'Course', '@id' => $url . '#course', 'name' => $c['fa'] . ' · ' . $c['subject'], 'alternateName' => $c['en'], 'description' => $desc, 'url' => $url, 'inLanguage' => 'fa',
     'provider' => ['@type' => 'EducationalOrganization', 'name' => 'تراپو', 'sameAs' => $base . '/'], 'educationalLevel' => 'Professional', 'audience' => ['@type' => 'EducationalAudience', 'audienceType' => $c['audience']],
     'teaches' => $c['outcomes'], 'keywords' => implode('، ', $c['kw']), 'image' => $base . '/img/og.png', 'isAccessibleForFree' => false,
     'hasCourseInstance' => ['@type' => 'CourseInstance', 'courseMode' => 'online', 'courseWorkload' => 'PT3M'],
     'syllabusSections' => array_map(fn($w) => ['@type' => 'Syllabus', 'name' => $w['name'], 'description' => $w['sub']], $c['worlds']),
     'offers' => trapo_offers($url)],
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
<meta property="og:site_name" content="تراپو">
<meta property="og:locale" content="fa_IR">
<meta property="og:title" content="<?= $esc($title) ?>">
<meta property="og:description" content="<?= $esc($desc) ?>">
<meta property="og:url" content="<?= $esc($url) ?>">
<meta property="og:image" content="<?= $esc($base) ?>/img/og.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/svg+xml" href="appicons/icon.svg">
<link rel="apple-touch-icon" href="appicons/icon-192.png">
<link rel="manifest" href="manifest.json">
<link rel="stylesheet" href="auth.css">
<link rel="stylesheet" href="css/fonts.css">
<script type="application/ld+json" nonce="<?= $esc($nonce) ?>"><?= json_encode($ld, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG) ?></script>
</head>
<body class="cp" style="--cc:<?= $esc($c['color']) ?>">
<header class="lp-bar">
  <a class="lp-logo" href="./" aria-label="تراپو">
    <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true"><defs><linearGradient id="acg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#58cc02"/><stop offset=".5" stop-color="#12b3a8"/><stop offset="1" stop-color="#8e2c6e"/></linearGradient></defs><rect width="64" height="64" rx="18" fill="url(#acg)"/><path d="M32 12c-6 8-12 15-12 22a12 12 0 0 0 24 0c0-7-6-14-12-22z" fill="#fff" opacity=".95"/><path d="M26 35h12M32 29v12" stroke="#12b3a8" stroke-width="4" stroke-linecap="round"/></svg>
    <b>تراپو</b>
  </a>
  <nav class="lp-nav">
    <a href="./#courses">دوره‌ها</a><a href="course/<?= $esc($c['slug']) ?>#pricing">قیمت‌ها</a>
    <a class="lp-cta lp-cta--sm" href="./#join">ورود</a>
  </nav>
</header>
<main>
  <nav class="cp-bc" aria-label="مسیر صفحه"><a href="./">تراپو</a> › <a href="./#courses">دوره‌ها</a> › <span aria-current="page"><?= $esc($c['fa']) ?></span></nav>
  <section class="lp-hero cp-hero">
    <div class="lp-hero__txt">
      <p class="lp-kicker">دوره آنلاین تراپو · <?= $esc($c['en']) ?></p>
      <h1><?= $esc($c['fa']) ?>: آموزش <?= $esc($c['subject']) ?></h1>
      <p class="cp-tag"><?= $esc($c['tagline']) ?></p>
      <p class="lp-lead"><?= $esc($c['about']) ?></p>
      <div class="lp-hero__cta"><a class="lp-cta" href="<?= $esc($join) ?>">ثبت‌نام رایگان و شروع</a><a class="lp-ghost" href="course/<?= $esc($c['slug']) ?>#syllabus">سرفصل‌ها</a></div>
      <ul class="lp-nums"><?php foreach ($c['nums'] as $n): ?><li><b><?= $esc($n[0]) ?></b><span><?= $esc($n[1]) ?></span></li><?php endforeach; ?></ul>
    </div>
    <div class="cp-art"><img src="img/m-<?= $esc($c['slug']) ?>.svg" width="220" height="275" alt="<?= $esc($c['fa'] . ' — ' . $c['subject']) ?>"></div>
  </section>

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

  <?= str_replace('href="#join"', 'href="' . $esc($join) . '"', trapo_pricing_html($esc)) ?>

  <section class="lp-sec" id="faq" aria-labelledby="f-t">
    <h2 id="f-t">سؤال‌های رایج درباره <?= $esc($c['fa']) ?></h2>
    <div class="lp-faq"><?php foreach ($faq as $q): ?><details><summary><?= $esc($q[0]) ?></summary><p><?= $esc($q[1]) ?></p></details><?php endforeach; ?></div>
  </section>

  <section class="lp-sec" aria-labelledby="m-t">
    <h2 id="m-t">دوره‌های دیگر تراپو</h2>
    <div class="cp-more"><?php foreach ($all as $x): if ($x['slug'] === $c['slug']) continue; ?>
      <a class="lp-c cp-mc" href="course/<?= $esc($x['slug']) ?>" style="--cc:<?= $esc($x['color']) ?>"><img src="img/m-<?= $esc($x['slug']) ?>.svg" width="64" height="80" alt="" loading="lazy"><h3><?= $esc($x['fa']) ?> <small><?= $esc($x['subject']) ?></small></h3></a>
    <?php endforeach; ?></div>
  </section>

  <section class="lp-end">
    <h2>همین امروز اولین درس <?= $esc($c['fa']) ?> را شروع کن</h2>
    <a class="lp-cta" href="<?= $esc($join) ?>">ثبت‌نام رایگان و شروع</a>
  </section>
</main>
<footer class="lp-foot"><p>تراپو ابزار آموزشی است و جایگزین قضاوت بالینی یا دستور پزشک نیست.</p><p>© <?= date('Y') ?> تراپو</p></footer>
</body>
</html>
