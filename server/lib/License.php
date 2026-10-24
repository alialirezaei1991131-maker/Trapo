<?php
declare(strict_types=1);

/**
 * کد فعال‌سازی TRP1 (همان قالب برنامه): ۸ بایت داده + ۶۴ بایت امضای Ed25519 روی «داده + شناسه دستگاه».
 * سرور فقط کلید عمومی دارد؛ پس حتی اگر سرور نفوذ شود، کسی نمی‌تواند کد معتبر بسازد.
 */
final class License
{
    private const EPOCH_MS = 1704067200000; // 2024-01-01 UTC
    /** مدت هر کد (همان جدول DUR برنامه)؛ ms = طول به میلی‌ثانیه */
    private const DUR = [0 => [172800000, false, true], 1 => [2592000000, false, false], 2 => [7776000000, false, false],
                         3 => [15552000000, false, false], 4 => [31536000000, false, false], 5 => [0, true, false]];
    public const ALL_MASK = 0xFFFF;

    public static function normDev(string $s): string
    {
        return strtr(preg_replace('/[^0-9A-Z]/', '', strtoupper($s)), ['O' => '0', 'I' => '1', 'L' => '1']);
    }

    /** بررسی کد برای یک شناسه دستگاه؛ ok=false با err: format | sig | ver */
    public static function parse(string $code, string $dev): array
    {
        $s = preg_replace('/[^0-9A-Z]/', '', strtoupper($code));
        if (strlen($s) === 120 && strpos($s, 'TRP1') === 0) $s = substr($s, 4);
        if (strlen($s) !== 116) return ['ok' => false, 'err' => 'format'];
        $all = B32::dec($s, 72);
        if ($all === null) return ['ok' => false, 'err' => 'format'];
        $p = substr($all, 0, 8); $sig = substr($all, 8, 64);
        $msg = 'TRAPO-LIC-1|' . self::normDev($dev) . '|' . bin2hex($p);
        $okSig = false;
        foreach ((array) Cfg::get('license_public_keys', []) as $k) {
            $pk = base64_decode($k, true);
            if ($pk !== false && strlen($pk) === SODIUM_CRYPTO_SIGN_PUBLICKEYBYTES && sodium_crypto_sign_verify_detached($sig, $msg, $pk)) { $okSig = true; break; }
        }
        if (!$okSig) return ['ok' => false, 'err' => 'sig'];
        $b = array_values(unpack('C*', $p));
        if (($b[0] >> 6) !== 3) return ['ok' => false, 'err' => 'ver'];
        $tier = ($b[0] >> 4) & 3; $dur = ($b[0] >> 1) & 7;
        $mask = $tier === 3 ? self::ALL_MASK : ($b[1] | ($b[6] << 8));
        $expMin = ($b[2] << 24) + ($b[3] << 16) + ($b[4] << 8) + $b[5];
        $d = self::DUR[$dur] ?? self::DUR[1];
        $exp = $d[1] ? 0 : self::EPOCH_MS + $expMin * 60000;
        return ['ok' => true, 'tier' => $tier, 'mask' => $mask, 'dur' => $dur, 'exp' => $exp, 'life' => $d[1], 'trial' => $d[2]];
    }

    /** افزودن کد به حساب: امضا باید با شناسه همین حساب بخواند، منقضی نباشد و برای حساب دیگری ثبت نشده باشد */
    public static function redeem(array $u, string $code): array
    {
        Http::limit('redeem|' . $u['id'], 12, 3600);
        $g = self::parse($code, $u['dev_id']);
        if (!$g['ok']) { Http::audit((int) $u['id'], 'redeem_fail', ['err' => $g['err']]); Http::fail('code_' . $g['err']); }
        $nowMs = (int) floor(microtime(true) * 1000);
        if (!$g['life'] && $g['exp'] <= $nowMs) Http::fail('code_expired');
        $norm = preg_replace('/[^0-9A-Z]/', '', strtoupper($code));
        $dup = Db::one('SELECT user_id FROM licenses WHERE code = ?', [$norm]);
        if ($dup) {
            if ((int) $dup['user_id'] === (int) $u['id']) Http::fail('code_already', 409);
            Http::fail('code_used', 409);
        }
        Db::exec('INSERT INTO licenses (user_id, code, tier, mask, dur, exp, life, trial, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [$u['id'], $norm, $g['tier'], $g['mask'], $g['dur'], $g['exp'], $g['life'] ? 1 : 0, $g['trial'] ? 1 : 0, time()]);
        Http::audit((int) $u['id'], 'redeem', ['tier' => $g['tier'], 'mask' => $g['mask']]);
        return $g;
    }

    public static function codes(int $uid): array
    {
        return array_map(fn($r) => $r['code'], Db::all('SELECT code FROM licenses WHERE user_id = ? ORDER BY id', [$uid]));
    }

    /** دسترسی هر دوره (مثل access() برنامه): خرید دائمی ثبت‌شده روی سرور، یا بالاترین سطح میان کدهای فعالی که بیت دوره را دارند */
    public static function access(int $uid, string $course): array
    {
        if (Db::val('SELECT 1 FROM purchases WHERE user_id = ? AND course = ?', [$uid, $course])) return ['tier' => 2, 'life' => true, 'exp' => 0];
        $bits = Shop::bits();
        $bit = (int) ($bits[$course] ?? 0);
        $nowMs = (int) floor(microtime(true) * 1000);
        $tier = 0; $exp = -1; $life = false;
        foreach (Db::all('SELECT tier, mask, exp, life FROM licenses WHERE user_id = ?', [$uid]) as $l) {
            $on = (int) $l['life'] === 1 || (int) $l['exp'] > $nowMs;
            if (!$on) continue;
            if ((int) $l['tier'] !== 3 && !($bit && ((int) $l['mask'] & $bit))) continue;
            $tier = max($tier, (int) $l['tier']);
            if ((int) $l['life'] === 1) $life = true; else $exp = max($exp, (int) $l['exp']);
        }
        return ['tier' => $tier, 'life' => $life, 'exp' => $life ? 0 : $exp];
    }
}
