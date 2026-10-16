<?php
/* تراپو — بخش «قیمت قلب‌ها» برای صفحه معرفی و صفحه هر دوره (عددها از Hearts::catalog، همان قیمت‌های فروشگاه برنامه) */
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
function trapo_pricing_html(callable $esc): string
{
    $C = Hearts::catalog(); $f = 'trapo_fa_num'; $e = fn($n) => number_format((int) $n);
    $L = fn($fa, $en) => '<span data-l="fa">' . $fa . '</span><span data-l="en" lang="en">' . $en . '</span>';
    $medal = ['🥉', '🥈', '🥇'];
    $h = '<section class="lp-sec lp-price" id="pricing" aria-labelledby="p-t">'
        . '<h2 id="p-t">' . $L('برنامه‌های یادگیری: هر روز با قلب پر جلو برو', 'Learning plans: keep your hearts full, learn every day') . '</h2>'
        . '<p class="lp-sub">' . $L('در تراپو با قلب پیش می‌روی و همان قلب‌ها همه دوره‌ها را باز می‌کنند. هر پاسخ درست ' . $f($C['cost']['right']) . ' قلب، هر پاسخ نادرست ' . $f($C['cost']['wrong']) . ' قلب، هر ابزار بالینی ' . $f($C['cost']['tool']) . ' قلب و هر کیس بالینی ' . $f($C['cost']['round']) . ' قلب. تمرین مرور رایگان است و قلب هم برمی‌گرداند.',
            'At Therapo you move forward with hearts, and they open every course. A correct answer costs ' . $C['cost']['right'] . ', a wrong one ' . $C['cost']['wrong'] . ', each clinical tool ' . $C['cost']['tool'] . ' and each clinical case ' . $C['cost']['round'] . ' hearts. Review practice is free and gives hearts back.') . '</p>'
        . '<div class="lp-plans">'
        . '<article class="lp-plan lp-plan--free"><h3>🆓 ' . $L('رایگان', 'Free') . '</h3><p class="lp-plan__d"><b>' . $f($C['free']) . '</b> ' . $L('قلب در روز', 'hearts a day') . '</p>'
        . '<p class="lp-plan__p"><b>' . $L('۰', '0') . '</b></p><ul><li>' . $L('درس‌های رایگان هر دوره', 'Free lessons of every course') . '</li><li>' . $L('بدون نیاز به کارت بانکی', 'No payment details needed') . '</li></ul>'
        . '<a class="lp-ghost" href="#join" data-go-tab="register">' . $L('ثبت‌نام رایگان', 'Sign up free') . '</a></article>';
    foreach ($C['plans'] as $i => $p) {
        $m1 = $p['price'][1] ?? 0; $m3 = $p['price'][3] ?? 0; $save = $m1 && $m3 ? (int) round((1 - $m3 / ($m1 * 3)) * 100) : 0;
        $h .= '<article class="lp-plan lp-plan--' . $esc($p['id']) . ($i === 1 ? ' is-pop' : '') . '">' . ($i === 1 ? '<span class="lp-plan__b">' . $L('محبوب', 'Popular') . '</span>' : '')
            . '<h3>' . ($medal[$i] ?? '⭐') . ' ' . $L($esc($p['fa']), $esc($p['en'])) . '</h3><p class="lp-plan__d"><b>' . $L($f($p['daily']), (string) $p['daily']) . '</b> ' . $L('قلب در روز', 'hearts a day') . '</p>'
            . '<p class="lp-plan__p"><b>' . $L($f($m1), $e($m1)) . '</b> ' . $L('تومان / ماه', 'Toman / month') . '</p>'
            . '<ul><li>' . $L('سه ماهه: ' . $f($m3) . ' تومان' . ($save > 0 ? ' (' . $f($save) . '٪ ارزان‌تر)' : ''), '3 months: ' . $e($m3) . ' Toman' . ($save > 0 ? " (save $save%)" : '')) . '</li>'
            . '<li>' . $L('همه درس‌ها، کیس‌ها، ابزارها و گواهی', 'Every lesson, case, tool and certificate') . '</li><li>' . $L('سهمیه هر نیمه‌شب دوباره پر می‌شود', 'Refills every midnight') . '</li></ul></article>';
    }
    $h .= '</div><div class="lp-extra">';
    $packs = $C['packs']; ksort($packs);
    $h .= '<article class="lp-x"><h3>🎒 ' . $L('شارژ قلب (بدون تاریخ انقضا)', 'Heart refills (never expire)') . '</h3><ul>';
    foreach ($packs as $n => $pr) $h .= '<li><span>' . $L($f($n) . ' قلب', "$n hearts") . '</span><b>' . $L($f($pr), $e($pr)) . ' ' . $L('تومان', 'Toman') . '</b></li>';
    $h .= '</ul></article>';
    $ult = $C['ultimate']; ksort($ult);
    $h .= '<article class="lp-x lp-x--ult"><h3>♾️ ' . $L('نامحدود: قلب بی‌نهایت و شروع از هر درس', 'Ultimate: unlimited hearts, start anywhere') . '</h3><ul>';
    foreach ($ult as $mo => $pr) $h .= '<li><span>' . $L($f($mo) . ' ماهه', "$mo months") . '</span><b>' . $L($f($pr), $e($pr)) . ' ' . $L('تومان', 'Toman') . '</b></li>';
    $h .= '</ul></article></div>'
        . '<p class="lp-note">' . $L('با قلب، درس‌ها به ترتیب باز می‌شوند؛ با پلن نامحدود از هر درس و هر دنیایی که خواستی شروع کن. پرداخت که تأیید شد، قلب‌ها خودکار به حسابت اضافه می‌شوند.',
            'With hearts, lessons open in order; Ultimate lets you start from any lesson or world. Once your payment is confirmed, the hearts are added to your account automatically.') . '</p>'
        . '</section>';
    return $h;
}
/** پیشنهادهای قیمت برای JSON-LD (ریال = تومان × ۱۰) */
function trapo_offers(string $url): array
{
    $C = Hearts::catalog(); $o = [];
    foreach ($C['plans'] as $p) foreach ($p['price'] as $mo => $pr) $o[] = ['@type' => 'Offer', 'name' => 'اشتراک قلب ' . $p['fa'] . ' · ' . $mo . ' ماه', 'price' => (string) ($pr * 10), 'priceCurrency' => 'IRR', 'category' => 'Subscription', 'url' => $url, 'availability' => 'https://schema.org/InStock'];
    foreach ($C['ultimate'] as $mo => $pr) $o[] = ['@type' => 'Offer', 'name' => 'نامحدود · ' . $mo . ' ماه', 'price' => (string) ($pr * 10), 'priceCurrency' => 'IRR', 'category' => 'Subscription', 'url' => $url, 'availability' => 'https://schema.org/InStock'];
    return $o;
}
