<?php
declare(strict_types=1);

/**
 * پیام همراهان (تبلیغ شرکت‌ها و محصولات) — آماده ولی خاموش. با 'ads' => ['enabled' => true, ...] در config.php روشن می‌شود.
 *  - هرگز وسط درس نشان داده نمی‌شود؛ فقط بعد از برگشتن از درس، هر every_lessons درس یک بار و با فاصله دست‌کم min_gap_min دقیقه
 *  - کاربرانی که قلب خریده‌اند (اشتراک، شارژ یا نامحدود) اگر skip_paid روشن باشد هرگز تبلیغ نمی‌بینند
 *  - هر مورد: id، title، text، img (نشانی تصویر https یا مسیر داخل سایت)، url (https)، cta
 */
final class Ads
{
    public const DEF = ['enabled' => false, 'every_lessons' => 3, 'min_gap_min' => 20, 'skip_paid' => true, 'items' => []];

    public static function forUser(array $u): array
    {
        $c = array_replace(self::DEF, (array) Cfg::get('ads', []));
        if (empty($c['enabled']) || !is_array($c['items']) || !$c['items']) return [];
        if (!empty($c['skip_paid']) && Shop::ownedCourses((int) $u['id'])) return []; // خریداران دوره تبلیغ نمی‌بینند
        $ok = fn($x) => is_string($x) && preg_match('~^(https://[^\s"<>]{4,300}|/?[A-Za-z0-9_\-/]{1,120}\.(png|jpe?g|webp|svg))$~', $x);
        $items = [];
        foreach ($c['items'] as $i) {
            if (!is_array($i) || !$ok($i['url'] ?? '') || !preg_match('~^https://~', (string) $i['url'])) continue;
            $items[] = ['id' => substr(preg_replace('/[^a-z0-9_-]/i', '', (string) ($i['id'] ?? '')), 0, 30), 'title' => mb_substr((string) ($i['title'] ?? ''), 0, 80),
                        'text' => mb_substr((string) ($i['text'] ?? ''), 0, 240), 'img' => $ok($i['img'] ?? '') ? (string) $i['img'] : '', 'url' => (string) $i['url'],
                        'cta' => mb_substr((string) ($i['cta'] ?? 'بیشتر بدانید'), 0, 30)];
        }
        return $items ? ['every' => max(1, (int) $c['every_lessons']), 'gap' => max(1, (int) $c['min_gap_min']), 'items' => $items] : [];
    }
}
