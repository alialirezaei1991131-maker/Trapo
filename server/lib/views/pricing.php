<?php
/* Therapo — بخش «قیمت دوره‌ها» و پانویس صفحه معرفی و صفحه هر دوره (عددها از Shop::catalog، همان قیمت‌هایی که سرور حساب می‌کند) */
/** نشانی فایل ثابت با نسخه (زمان فایل)؛ بعد از هر به‌روزرسانی مرورگر و Service Worker حتماً فایل تازه را می‌گیرند */
function trapo_asset(string $f): string
{
    $t = @filemtime(dirname((string) ($_SERVER['SCRIPT_FILENAME'] ?? __FILE__)) . '/' . $f);
    return $f . ($t ? '?v=' . base_convert((string) $t, 10, 36) : '');
}
function trapo_fa_num($n): string
{
    return strtr(number_format((int) $n), ['0' => '۰', '1' => '۱', '2' => '۲', '3' => '۳', '4' => '۴', '5' => '۵', '6' => '۶', '7' => '۷', '8' => '۸', '9' => '۹', ',' => '٬']);
}
/** فهرست دوره‌ها برای صفحه‌های سایت: [شناسه، نام، نام انگلیسی، موضوع، موضوع انگلیسی، رنگ] */
function trapo_course_list(): array
{
    return [
        ['yona', 'یونا', 'Yona', 'اصلاح اختلالات الکترولیت', 'Electrolyte disorders', '#58cc02'],
        ['homa', 'هما', 'Homa', 'تفسیر گاز خون و اسید-باز', 'Blood gas & acid–base', '#e5484d'],
        ['negar', 'نگار', 'Negar', 'معاینه فیزیکی تغذیه‌محور (NFPE)', 'Nutrition-focused physical exam', '#8e2c6e'],
        ['termino', 'ترمینو', 'Termino', 'ترمینولوژی پزشکی در ۱۵ حیطه', 'Medical terminology · 15 modules', '#4b4fc4'],
        ['ritma', 'ریتما', 'Ritma', 'تفسیر نوار قلب (ECG)', 'ECG interpretation', '#d7263d'],
    ];
}
/** بخش «قیمت دوره‌ها»: هر دوره یک بار خرید، دسترسی دائمی (عددها همان Shop::catalog است که سرور با آن سفارش را حساب می‌کند) */
function trapo_pricing_html(callable $esc, ?string $only = null): string
{
    $P = Shop::catalog(); $B = Shop::bundle(); $f = 'trapo_fa_num'; $e = fn($n) => number_format((int) $n);
    $L = fn($fa, $en) => '<span data-l="fa">' . $fa . '</span><span data-l="en" lang="en">' . $en . '</span>';
    $list = array_values(array_filter(trapo_course_list(), fn($c) => $only === null || $c[0] === $only));
    $h = '<section class="lp-sec lp-price" id="pricing" aria-labelledby="p-t">'
        . '<h2 id="p-t">' . ($only ? $L('قیمت دوره: یک بار بخر، برای همیشه یاد بگیر', 'Price: buy once, learn for good') : $L('قیمت دوره‌ها: یک بار بخر، برای همیشه یاد بگیر', 'Course prices: buy once, learn for good')) . '</h2>'
        . '<p class="lp-sub">' . $L('درس اول هر دوره رایگان است تا ببینی چه شکلی است. اگر خوشت آمد، دوره را یک بار می‌خری و همه درس‌ها، کیس‌ها، ابزارها، امتحان نهایی و گواهی آن برای همیشه روی حسابت باز می‌ماند؛ بدون اشتراک ماهانه و بدون محدودیت.',
            'The first lesson of every course is free so you can see what it’s like. If you like it, buy the course once and every lesson, case, tool, the final exam and the certificate stay open on your account for good — no monthly subscription, no limits.') . '</p>'
        . '<div class="lp-plans">';
    if (!$only) $h .= '<article class="lp-plan lp-plan--free"><h3>🆓 ' . $L('درس اول هر دوره', 'First lesson of every course') . '</h3><p class="lp-plan__p"><b>' . $L('رایگان', 'Free') . '</b></p>'
        . '<ul><li>' . $L('بدون نیاز به کارت بانکی', 'No payment details needed') . '</li><li>' . $L('پیشرفت روزانه و زنجیره', 'Daily progress and streaks') . '</li></ul>'
        . '<a class="lp-ghost" href="#join" data-go-tab="register">' . $L('ثبت‌نام رایگان', 'Sign up free') . '</a></article>';
    foreach ($list as $c) {
        $pr = (int) ($P[$c[0]] ?? 0);
        $h .= '<article class="lp-plan" style="--pc:' . $esc($c[5]) . '">'
            . '<h3>' . $L($esc($c[1]), $esc($c[2])) . ' <small>' . $L($esc($c[3]), $esc($c[4])) . '</small></h3>'
            . '<p class="lp-plan__p"><b>' . $L($f($pr), $e($pr)) . '</b> ' . $L('تومان', 'Toman') . '</p>'
            . '<ul><li>' . $L('دسترسی دائمی', 'Lifetime access') . '</li><li>' . $L('همه درس‌ها، کیس‌ها و ابزارها', 'Every lesson, case and tool') . '</li><li>' . $L('امتحان نهایی و گواهی', 'Final exam & certificate') . '</li></ul></article>';
    }
    $h .= '</div>';
    if (!$only) {
        $steps = [];
        foreach ($B as $n => $k) if ($n > 1 && $k < 1) $steps[] = [(int) $n, (int) round((1 - $k) * 100)];
        if ($steps) {
            $h .= '<div class="lp-extra"><article class="lp-x"><h3>🎁 ' . $L('خرید هم‌زمان چند دوره، ارزان‌تر', 'Buy several courses together and save') . '</h3><ul>';
            foreach ($steps as $s) $h .= '<li><span>' . $L($f($s[0]) . ' دوره', $s[0] . ' courses') . '</span><b>' . $L($f($s[1]) . '٪ تخفیف', $s[1] . '% off') . '</b></li>';
            $h .= '</ul></article></div>';
        }
    }
    $h .= '<p class="lp-note">' . $L('خرید ساده است: در برنامه «خرید دوره» را بزن، پیام آماده سفارش را با یک دکمه در تلگرام، بله یا ایمیل برای ما بفرست و پس از پرداخت، دوره خودکار روی حسابت باز می‌شود.',
            'Buying is simple: tap “Buy course” in the app, send us the ready-made order message on Telegram, Bale or email with one tap, and once paid the course opens on your account automatically.') . '</p>'
        . '</section>';
    return $h;
}
/** پانویس همه صفحه‌های سایت: هشدار آموزشی، حقوق محفوظ و نماد اعتماد الکترونیکی (اینماد) */
/** نوار «پشتیبانی و پرداخت»: تلگرام، بله و ایمیل پشتیبان */
function trapo_contact_html(callable $esc): string
{
    $C = Shop::contact();
    $ic = [
        'telegram' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.4 3.6 2.9 10.8c-1 .4-1 1.8.1 2.1l4.6 1.4 1.8 5.6c.3.8 1.3 1 1.9.4l2.6-2.5 4.6 3.4c.7.5 1.7.1 1.9-.7l3.1-14.9c.2-1.1-.9-2-1.9-1.6Zm-3.6 3.9-8 7.3-.3 3.3-1.4-4.5 9.2-6.4c.4-.3.8.1.5.3Z"/></svg>',
        'bale' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5c-5.5 0-10 4-10 9 0 2.6 1.2 4.9 3.2 6.6L4.6 21c-.2.6.4 1.1 1 .9l3.6-1.6c.9.2 1.8.3 2.8.3 5.5 0 10-4 10-9s-4.5-9.1-10-9.1Zm-4.5 10.6a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm4.5 0a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm4.5 0a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Z"/></svg>',
        'email' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4.5h16c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-11c0-1.1.9-2 2-2Zm.4 2 7.6 5.7 7.6-5.7H4.4Zm15.6 2-7.4 5.5c-.4.3-.8.3-1.2 0L4 8.5v9h16v-9Z"/></svg>',
    ];
    $web = fn($v, $base) => preg_match('~^https?://~i', $v) ? $v : $base . ltrim($v, '@');
    $at = fn($v) => preg_match('~^https?://~i', $v) ? $v : '@' . ltrim($v, '@');
    $out = '';
    if ($C['telegram']) $out .= '<a class="lp-ct lp-ct--telegram" href="' . $esc($web($C['telegram'], 'https://t.me/')) . '" target="_blank" rel="noopener" title="Telegram">' . $ic['telegram'] . '<bdi dir="ltr">' . $esc($at($C['telegram'])) . '</bdi></a>';
    if ($C['bale']) $out .= '<a class="lp-ct lp-ct--bale" href="' . $esc($web($C['bale'], 'https://ble.ir/')) . '" target="_blank" rel="noopener" title="Bale">' . $ic['bale'] . '<bdi dir="ltr">' . $esc($at($C['bale'])) . '</bdi></a>';
    if ($C['email']) $out .= '<a class="lp-ct lp-ct--email" href="mailto:' . $esc($C['email']) . '" title="Email">' . $ic['email'] . '<bdi dir="ltr">' . $esc($C['email']) . '</bdi></a>';
    return $out === '' ? '' : '<div class="lp-foot__ct"><span>💬 <span data-l="fa">پشتیبانی و پرداخت</span><span data-l="en" lang="en">Support &amp; payment</span></span>' . $out . '</div>';
}
function trapo_footer_html(callable $esc): string
{
    $E = Shop::enamad();
    $L = fn($fa, $en) => '<span data-l="fa">' . $fa . '</span><span data-l="en" lang="en">' . $en . '</span>';
    $y = str_replace('٬', '', trapo_fa_num(Manage::jyear())); // سال بدون جداکننده هزارگان
    $badge = $E['id'] && $E['code'] ? '<a class="lp-enamad" referrerpolicy="origin" target="_blank" rel="noopener" href="https://trustseal.enamad.ir/?id=' . $esc($E['id']) . '&amp;Code=' . $esc($E['code']) . '" title="نماد اعتماد الکترونیکی">'
        . '<img referrerpolicy="origin" src="https://trustseal.enamad.ir/logo.aspx?id=' . $esc($E['id']) . '&amp;Code=' . $esc($E['code']) . '" alt="نماد اعتماد الکترونیکی" width="125" height="136" loading="lazy" style="cursor:pointer" code="' . $esc($E['code']) . '"></a>' : '';
    return '<footer class="lp-foot"><div class="lp-foot__in"><div class="lp-foot__t">'
        . '<p data-t="foot">Therapo ابزار آموزشی است و جایگزین قضاوت بالینی یا دستور پزشک نیست.</p>'
        . '<p class="lp-foot__c">© ' . $L($y, date('Y')) . ' ' . $L('تمامی حقوق مادی و معنوی این سایت متعلق به Therapo است و هرگونه کپی‌برداری از محتوا پیگرد قانونی دارد.', 'Therapo — all rights reserved. Copying any part of the content is prohibited.') . '</p>'
        . trapo_contact_html($esc)
        . '<nav class="lp-foot__nav"><a href="./#courses">' . $L('دوره‌ها', 'Courses') . '</a><a href="./#pricing">' . $L('قیمت‌ها', 'Prices') . '</a><a href="./#faq">' . $L('سؤال‌های رایج', 'FAQ') . '</a></nav>'
        . '</div>' . $badge . '</div></footer>';
}
/** پیشنهادهای قیمت برای JSON-LD (ریال = تومان × ۱۰): خرید دائمی هر دوره */
function trapo_offers(string $url, ?string $course = null): array
{
    $o = [];
    foreach (Shop::catalog() as $id => $pr) {
        if ($course !== null && $id !== $course) continue;
        $o[] = ['@type' => 'Offer', 'name' => Shop::courseName($id) . ' · دسترسی دائمی', 'price' => (string) ($pr * 10), 'priceCurrency' => 'IRR', 'category' => 'Purchase', 'url' => $url, 'availability' => 'https://schema.org/InStock'];
    }
    return $o;
}
