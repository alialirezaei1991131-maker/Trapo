<?php
declare(strict_types=1);

/**
 * جایزه‌های قلب (قلب هدیه؛ مثل بقیه قلب‌ها خرج می‌شود ولی محتوای پولی دوره‌ها را باز نمی‌کند)
 *  - کامل کردن پروفایل: رشته، مقطع، ایمیل و شماره موبایل
 *  - پیوستن به کانال تلگرام و صفحه اینستاگرام (نشانی‌ها در config.php؛ اگر خالی باشد نشان داده نمی‌شود)
 *  - دعوت دوست: دوست تازه قلب خوش‌آمد می‌گیرد؛ معرف وقتی دوستش اولین درس را تمام کرد قلب می‌گیرد (نه با ثبت‌نام،
 *    تا ساختن حساب جعلی سودی نداشته باشد) و وقتی دوستش خرید کرد قلب بیشتر
 * هر جایزه برای هر حساب فقط یک بار ثبت می‌شود (جدول rewards).
 */
final class Rewards
{
    public const DEF = ['profile' => 20, 'telegram' => 5, 'instagram' => 5, 'welcome_ref' => 10, 'invite_join' => 10, 'invite_buy' => 30, 'invite_month_max' => 10,
                        'social' => ['telegram' => '', 'instagram' => '']];
    public const FIELDS = ['medicine' => ['پزشکی', 'Medicine'], 'nursing' => ['پرستاری', 'Nursing'], 'midwifery' => ['مامایی', 'Midwifery'], 'pharmacy' => ['داروسازی', 'Pharmacy'],
        'nutrition' => ['تغذیه', 'Nutrition'], 'anesthesia' => ['هوشبری و اتاق عمل', 'Anaesthesia & OR'], 'lab' => ['علوم آزمایشگاهی', 'Laboratory science'],
        'paramed' => ['سایر رشته‌های پیراپزشکی', 'Other allied health'], 'records' => ['مدارک پزشکی', 'Health records'], 'other' => ['سایر', 'Other']];
    public const DEGREES = ['bsc' => ['دانشجوی کارشناسی', 'Undergraduate student'], 'msc' => ['دانشجوی ارشد', 'Master’s student'], 'md' => ['دانشجوی دکترا / پزشکی عمومی', 'Doctoral / MD student'],
        'intern' => ['انترن', 'Intern'], 'resident' => ['رزیدنت', 'Resident'], 'grad' => ['فارغ‌التحصیل', 'Graduate'], 'staff' => ['کادر درمان', 'Healthcare staff'], 'faculty' => ['عضو هیئت علمی', 'Faculty']];

    public static function cfg(): array
    {
        $c = (array) Cfg::get('rewards', []);
        $d = array_replace(self::DEF, array_intersect_key($c, self::DEF));
        $d['social'] = array_replace(self::DEF['social'], (array) ($c['social'] ?? []));
        foreach ($d['social'] as $k => $u) if (!preg_match('~^https://[^\s"<>]{4,200}$~', (string) $u)) $d['social'][$k] = '';
        return $d;
    }
    /** یک بار برای همیشه؛ true اگر همین حالا داده شد */
    public static function once(int $uid, string $kind, int $hearts): bool
    {
        $done = Db::tx(function () use ($uid, $kind, $hearts) {
            if (Db::val('SELECT 1 FROM rewards WHERE user_id = ? AND kind = ?', [$uid, $kind])) return false;
            Db::exec('INSERT INTO rewards (user_id, kind, hearts, created_at) VALUES (?, ?, ?, ?)', [$uid, $kind, $hearts, time()]);
            return true;
        });
        if ($done && $hearts > 0) { Hearts::addGift($uid, $hearts); Http::audit($uid, 'reward', ['kind' => $kind, 'hearts' => $hearts]); }
        return $done;
    }
    private static function has(int $uid, string $kind): bool { return (bool) Db::val('SELECT 1 FROM rewards WHERE user_id = ? AND kind = ?', [$uid, $kind]); }

    /** وضعیت برای برنامه */
    public static function state(array $u): array
    {
        $C = self::cfg(); $uid = (int) $u['id'];
        $u = Db::one('SELECT * FROM users WHERE id = ?', [$uid]) ?: $u;
        [$email, $mobile] = self::contacts($u);
        $month = (int) Db::val("SELECT COUNT(*) FROM rewards WHERE user_id = ? AND kind LIKE 'inv_join:%' AND created_at > ?", [$uid, time() - 30 * 86400]);
        $soc = [];
        foreach ($C['social'] as $k => $url) if ($url !== '') $soc[$k] = ['url' => $url, 'h' => (int) $C[$k], 'done' => self::has($uid, 'social:' . $k)];
        return ['profile' => ['field' => $u['field'] ?? null, 'degree' => $u['degree'] ?? null, 'email' => $email, 'mobile' => $mobile, 'h' => (int) $C['profile'], 'done' => self::has($uid, 'profile')],
                'social' => $soc, 'invite' => ['join' => (int) $C['invite_join'], 'buy' => (int) $C['invite_buy'], 'welcome' => (int) $C['welcome_ref'], 'month' => $month, 'max' => (int) $C['invite_month_max'],
                'total' => (int) Db::val("SELECT COALESCE(SUM(hearts), 0) FROM rewards WHERE user_id = ? AND kind LIKE 'inv_%'", [$uid])],
                'fields' => self::FIELDS, 'degrees' => self::DEGREES];
    }
    /** ایمیل و موبایل حساب (یکی ورود است و دیگری راه تماس دوم) */
    private static function contacts(array $u): array
    {
        $e = ''; $m = '';
        foreach ([(string) $u['login'], (string) ($u['contact'] ?? '')] as $x) {
            if ($x === '') continue;
            if (strpos($x, '@') !== false) { if ($e === '') $e = $x; } elseif ($m === '') $m = $x;
        }
        return [$e, $m];
    }

    /** ذخیره پروفایل؛ اگر کامل شد جایزه یک‌باره */
    public static function saveProfile(array $u, array $b): array
    {
        $uid = (int) $u['id'];
        $u = Db::one('SELECT * FROM users WHERE id = ?', [$uid]);
        $field = (string) ($b['field'] ?? ''); $degree = (string) ($b['degree'] ?? '');
        if ($field !== '' && !isset(self::FIELDS[$field])) throw new RuntimeException('bad_field');
        if ($degree !== '' && !isset(self::DEGREES[$degree])) throw new RuntimeException('bad_degree');
        [$email, $mobile] = self::contacts($u);
        $loginIsMail = strpos((string) $u['login'], '@') !== false;
        // راه تماس دومِ حساب = همان که ورود نیست (ایمیل یا موبایل)
        $want = trim((string) ($b[$loginIsMail ? 'mobile' : 'email'] ?? ''));
        if ($want !== '') {
            $n = Auth::normLogin($want);
            if ($n === '' || (strpos($n, '@') !== false) !== !$loginIsMail) throw new RuntimeException($loginIsMail ? 'bad_mobile' : 'bad_email');
            $k = Auth::identityKey($n);
            if ($k !== (string) ($u['contact_key'] ?? '') && $k !== (string) ($u['login_key'] ?? '')) {
                if (Auth::identityTaken($k)) throw new RuntimeException('contact_taken');
                Db::exec('UPDATE users SET contact = ?, contact_key = ? WHERE id = ?', [$n, $k, $uid]);
            }
        }
        Db::exec('UPDATE users SET field = ?, degree = ? WHERE id = ?', [$field !== '' ? $field : null, $degree !== '' ? $degree : null, $uid]);
        $u = Db::one('SELECT * FROM users WHERE id = ?', [$uid]);
        [$email, $mobile] = self::contacts($u);
        $got = 0;
        if ($u['field'] && $u['degree'] && $email !== '' && $mobile !== '' && self::once($uid, 'profile', (int) self::cfg()['profile'])) $got = (int) self::cfg()['profile'];
        return ['got' => $got, 'rewards' => self::state($u), 'wallet' => Hearts::state($uid)];
    }

    /** کانال‌ها: اول «باز کردن» ثبت می‌شود، دست‌کم ۸ ثانیه بعد جایزه (پیوستن را نمی‌شود از بیرون بررسی کرد) */
    public static function socialOpen(array $u, string $net): void
    {
        if (!isset(self::cfg()['social'][$net]) || self::cfg()['social'][$net] === '') throw new RuntimeException('bad_social');
        $uid = (int) $u['id'];
        if (!Db::val('SELECT 1 FROM rewards WHERE user_id = ? AND kind = ?', [$uid, 'open:' . $net])) Db::exec('INSERT INTO rewards (user_id, kind, hearts, created_at) VALUES (?, ?, 0, ?)', [$uid, 'open:' . $net, time()]);
    }
    public static function socialClaim(array $u, string $net): array
    {
        $C = self::cfg(); $uid = (int) $u['id'];
        if (!isset($C['social'][$net]) || $C['social'][$net] === '') throw new RuntimeException('bad_social');
        $at = (int) Db::val('SELECT created_at FROM rewards WHERE user_id = ? AND kind = ?', [$uid, 'open:' . $net]);
        if (!$at || time() - $at < 8) throw new RuntimeException('social_wait');
        $got = self::once($uid, 'social:' . $net, (int) $C[$net]) ? (int) $C[$net] : 0;
        return ['got' => $got, 'rewards' => self::state($u), 'wallet' => Hearts::state($uid)];
    }

    /** دوستی که با کد معرف ثبت‌نام کرد: قلب خوش‌آمد */
    public static function onRegister(int $uid, ?int $referrer): void
    {
        if ($referrer) self::once($uid, 'welcome_ref', (int) self::cfg()['welcome_ref']);
    }
    /** دوست دعوت‌شده اولین درسش را تمام کرد: جایزه معرف (حداکثر invite_month_max بار در ۳۰ روز) */
    public static function onLessons(int $uid): void
    {
        $ref = (int) Db::val('SELECT referred_by FROM users WHERE id = ?', [$uid]);
        if (!$ref || self::has($ref, 'inv_join:' . $uid)) return;
        $C = self::cfg();
        $month = (int) Db::val("SELECT COUNT(*) FROM rewards WHERE user_id = ? AND kind LIKE 'inv_join:%' AND created_at > ?", [$ref, time() - 30 * 86400]);
        if ($month >= (int) $C['invite_month_max']) return;
        self::once($ref, 'inv_join:' . $uid, (int) $C['invite_join']);
    }
    /** دوست دعوت‌شده اولین خریدش را پرداخت کرد */
    public static function onPaid(int $uid): void
    {
        $ref = (int) Db::val('SELECT referred_by FROM users WHERE id = ?', [$uid]);
        if ($ref) self::once($ref, 'inv_buy:' . $uid, (int) self::cfg()['invite_buy']);
    }
}
