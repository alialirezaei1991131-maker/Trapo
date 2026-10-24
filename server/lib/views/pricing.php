<?php
/* تراپو — بخش «قیمت دوره‌ها» و پانویس صفحه معرفی و صفحه هر دوره (عددها از Shop::catalog، همان قیمت‌هایی که سرور حساب می‌کند) */
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
function trapo_footer_html(callable $esc): string
{
    $E = Shop::enamad();
    $L = fn($fa, $en) => '<span data-l="fa">' . $fa . '</span><span data-l="en" lang="en">' . $en . '</span>';
    $y = str_replace('٬', '', trapo_fa_num(Manage::jyear())); // سال بدون جداکننده هزارگان
    $badge = $E['id'] && $E['code'] ? '<a class="lp-enamad" referrerpolicy="origin" target="_blank" rel="noopener" href="https://trustseal.enamad.ir/?id=' . $esc($E['id']) . '&amp;Code=' . $esc($E['code']) . '" title="نماد اعتماد الکترونیکی">'
        . '<img referrerpolicy="origin" src="https://trustseal.enamad.ir/logo.aspx?id=' . $esc($E['id']) . '&amp;Code=' . $esc($E['code']) . '" alt="نماد اعتماد الکترونیکی" width="125" height="136" loading="lazy" style="cursor:pointer" code="' . $esc($E['code']) . '"></a>' : '';
    return '<footer class="lp-foot"><div class="lp-foot__in"><div class="lp-foot__t">'
        . '<p data-t="foot">تراپو ابزار آموزشی است و جایگزین قضاوت بالینی یا دستور پزشک نیست.</p>'
        . '<p class="lp-foot__c">© ' . $L($y, date('Y')) . ' ' . $L('تمامی حقوق مادی و معنوی این سایت متعلق به تراپو است و هرگونه کپی‌برداری از محتوا پیگرد قانونی دارد.', 'Therapo — all rights reserved. Copying any part of the content is prohibited.') . '</p>'
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
