<?php
declare(strict_types=1);
/*
 * Therapo — API سرور:  /api/?a=<کار>
 * هر درخواست تغییردهنده: فقط POST + Origin همین سایت + سربرگ X-CSRF نشست.
 */
// پوشه برنامه (lib، private، data، config.php) بیرون از وب: کنار پوشه وب، یا در «trapo_app» کنار آن (چیدمان cPanel با .cpanel.yml)
$trapoRoot = dirname(__DIR__, 2);
if (!is_file($trapoRoot . '/lib/bootstrap.php') && is_file($trapoRoot . '/trapo_app/lib/bootstrap.php')) $trapoRoot .= '/trapo_app';
require $trapoRoot . '/lib/bootstrap.php';
Http::securityHeaders();

$a = preg_replace('/[^a-z_]/', '', (string) ($_GET['a'] ?? ''));
$post = ($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST';
$needPost = ['register', 'login', 'logout', 'password', 'redeem', 'progress_put', 'quote', 'order', 'pay',
             'm_login', 'm_logout', 'm_paid', 'm_cancel', 'm_promo_add', 'm_promo_toggle', 'm_grant', 'm_revoke', 'm_paycheck'];
if (in_array($a, $needPost, true) && !$post) Http::fail('method', 405);

/** وضعیت کامل حساب برای برنامه */
function mePayload(array $u, array $s): array
{
    return ['ok' => true, 'user' => ['name' => $u['name'], 'login' => $u['login'], 'dev' => $u['dev_id'], 'ref' => $u['ref_code'], 'since' => (int) $u['created_at']],
            'csrf' => $s['csrf'], 'codes' => License::codes((int) $u['id']), 'owned' => Shop::ownedCourses((int) $u['id']), 'referral' => Shop::referral($u)];
}

try {
    switch ($a) {
        /* ---------- حساب ---------- */
        case 'register': {
            if (!Http::sameOrigin()) Http::fail('origin', 403);
            $b = Http::body();
            $s = Auth::register(Http::str($b, 'login', 120), (string) ($b['pass'] ?? ''), Http::str($b, 'name', 60), Http::str($b, 'ref', 20), Http::str($b, 'contact', 120));
            Http::json(mePayload(Auth::user(), $s));
        }
        case 'login': {
            if (!Http::sameOrigin()) Http::fail('origin', 403);
            $b = Http::body();
            $s = Auth::login(Http::str($b, 'login', 120), (string) ($b['pass'] ?? ''));
            Http::json(mePayload(Auth::user(), $s));
        }
        case 'logout': Auth::requireCsrf(); Auth::logout(); Http::json(['ok' => true]);
        case 'me': {
            $u = Auth::user(); $s = Auth::session();
            if (!$u || !$s) Http::json(['ok' => false, 'err' => 'auth']);
            Http::json(mePayload($u, $s));
        }
        case 'password': { Auth::requireCsrf(); $u = Auth::requireUser(); $b = Http::body(); Auth::changePassword($u, (string) ($b['old'] ?? ''), (string) ($b['new'] ?? '')); Http::json(['ok' => true]); }

        /* ---------- کد فعال‌سازی ---------- */
        case 'redeem': {
            Auth::requireCsrf(); $u = Auth::requireUser(); $b = Http::body();
            $raw = Http::str($b, 'code', 200);
            // کدهای قلب (TRH1) دیگر فروخته نمی‌شوند
            if (strpos(preg_replace('/[^0-9A-Z]/', '', strtoupper($raw)), 'TRH1') === 0) Http::fail('code_heart');
            $g = License::redeem($u, $raw);
            Http::json(['ok' => true, 'grant' => $g, 'codes' => License::codes((int) $u['id'])]);
        }

        /* ---------- فایل‌های رمزنگاری‌شده برنامه ---------- */
        case 'asset': {
            $u = Auth::requireUser(); $s = Auth::session();
            Content::serve($u, $s, (string) ($_GET['f'] ?? ''));
        }

        /* ---------- پیشرفت ---------- */
        case 'progress': { $u = Auth::requireUser(); Http::json(['ok' => true, 'items' => Progress::get($u)]); }
        case 'progress_put': { Auth::requireCsrf(); $u = Auth::requireUser(); $b = Http::body(); Http::json(['ok' => true, 'saved' => Progress::put($u, (array) ($b['items'] ?? []))]); }


        /* ---------- خرید، تخفیف و معرف ---------- */
        case 'quote': { Auth::requireCsrf(); $u = Auth::requireUser(); Http::json(['ok' => true] + Shop::quote($u, Http::body())); }
        case 'order': { Auth::requireCsrf(); $u = Auth::requireUser(); Http::json(['ok' => true] + Shop::createOrder($u, Http::body())); }
        /* پرداخت آنلاین سفارش با زیبال: نشانی درگاه */
        case 'pay': { Auth::requireCsrf(); $u = Auth::requireUser(); $b = Http::body(); Http::json(['ok' => true] + Pay::start($u, Http::str($b, 'order', 20))); }
        case 'orders': { $u = Auth::requireUser(); Http::json(['ok' => true, 'orders' => Shop::myOrders($u)]); }
        case 'referral': { $u = Auth::requireUser(); Http::json(['ok' => true] + Shop::referral($u)); }

        /* ---------- پنل مدیریت سرور ---------- */
        case 'm_login': { if (!Http::sameOrigin()) Http::fail('origin', 403); $b = Http::body(); $s = Manage::login((string) ($b['pass'] ?? '')); Http::json(['ok' => true, 'csrf' => $s['csrf']]); }
        case 'm_me': { $s = Manage::require(); Http::json(['ok' => true, 'csrf' => $s['csrf']]); }
        case 'm_logout': { Auth::requireCsrf('admin'); Auth::logout('admin'); Http::json(['ok' => true]); }
        case 'm_stats': { Manage::require(); Http::json(['ok' => true] + Manage::stats()); }
        case 'm_orders': { Manage::require(); Http::json(['ok' => true, 'orders' => Manage::orders((string) ($_GET['status'] ?? 'pending'))]); }
        case 'm_users': { Manage::require(); Http::json(['ok' => true, 'users' => Manage::users((string) ($_GET['q'] ?? ''))]); }
        case 'm_users_csv': { Manage::require(); Manage::usersCsv(); }
        case 'm_trace': { Manage::require(); $f = Content::wmFind((string) ($_GET['tag'] ?? '')); Http::audit(null, 'm_trace', ['found' => (bool) $f]); Http::json(['ok' => true, 'user' => $f]); }
        /* باز کردن یا بستن دستی یک دوره روی حساب کاربر (هدیه، پرداخت بیرون از سایت، خریداران قبلی) */
        case 'm_grant': { Manage::require(); Auth::requireCsrf('admin'); $b = Http::body(); $uid = (int) ($b['uid'] ?? 0); if (!Db::val('SELECT 1 FROM users WHERE id = ?', [$uid])) Http::fail('no_user', 404); Shop::grant($uid, Http::str($b, 'course', 20), null, 'admin'); Http::json(['ok' => true, 'owned' => Shop::ownedCourses($uid)]); }
        case 'm_revoke': { Manage::require(); Auth::requireCsrf('admin'); $b = Http::body(); $uid = (int) ($b['uid'] ?? 0); Shop::revoke($uid, Http::str($b, 'course', 20)); Http::json(['ok' => true, 'owned' => Shop::ownedCourses($uid)]); }
        case 'm_courses': { Manage::require(); Http::json(['ok' => true, 'courses' => array_map(fn($id) => ['id' => $id, 'fa' => Shop::courseName($id), 'price' => Shop::coursePrice($id)], array_keys(Shop::bits()))]); }
        case 'm_promos': { Manage::require(); Http::json(['ok' => true, 'promos' => Manage::promos()]); }
        case 'm_paid': { Manage::require(); Auth::requireCsrf('admin'); $b = Http::body(); Http::json(['ok' => true] + Shop::markPaid(Http::str($b, 'order', 20), Http::str($b, 'note', 300))); }
        /* کاربر پرداخت کرده ولی به سایت برنگشته: تأیید دوباره با زیبال */
        case 'm_paycheck': { Manage::require(); Auth::requireCsrf('admin'); $b = Http::body(); Http::json(Pay::check(Http::str($b, 'order', 20))); }
        case 'm_cancel': { Manage::require(); Auth::requireCsrf('admin'); $b = Http::body(); Shop::cancel(Http::str($b, 'order', 20)); Http::json(['ok' => true]); }
        case 'm_promo_add': { Manage::require(); Auth::requireCsrf('admin'); Http::json(['ok' => true, 'promo' => Manage::promoAdd(Http::body())]); }
        case 'm_promo_toggle': { Manage::require(); Auth::requireCsrf('admin'); $b = Http::body(); Manage::promoToggle(Http::str($b, 'code', 24)); Http::json(['ok' => true]); }

        default: Http::fail('unknown', 404);
    }
} catch (RuntimeException $e) {
    // خطاهای قابل انتظار (موجودی ناکافی، سفارش نامعتبر …) بدون جزئیات فنی
    Http::fail(preg_match('/^[a-z_]{2,30}$/', $e->getMessage()) ? $e->getMessage() : 'failed', 400);
}
