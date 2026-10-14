/* تراپو — صفحه ورود و ثبت‌نام (بدون هیچ کد برنامه؛ فقط فرم) */
(function () {
  'use strict';
  var T = {
    fa: { brand: 'تراپو', tag: 'آکادمی بالینی بازی‌وار · یونا، هما، نگار و ترمینو', login: 'ورود', register: 'ثبت‌نام رایگان', name: 'نام و نام خانوادگی (روی گواهی‌ها)',
      loginLbl: 'ایمیل یا شماره موبایل', pass: 'رمز عبور', ref: 'کد معرف (اختیاری)', goLogin: 'ورود', goRegister: 'ساخت حساب و شروع',
      terms: 'با ثبت‌نام، درس اول هر دوره رایگان باز می‌شود. رمز را جایی امن نگه دار.', f1: '📚 درس‌های سه‌دقیقه‌ای، بیمار واقعی‌نما و ماشین‌حساب بالینی',
      f2: '🧩 ترمینو: ۱۵ حیطه ترمینولوژی پزشکی', f3: '🔐 پیشرفتت روی هر دستگاهی که وارد شوی همراهت است',
      foot: 'تراپو ابزار آموزشی است و جایگزین قضاوت بالینی یا دستور پزشک نیست.', gift: null, wait: 'لطفاً صبر کن…', lang: 'English', dir: 'rtl' },
    en: { brand: 'Therapo', tag: 'Game-based clinical academy · Yona, Homa, Negar & Termino', login: 'Sign in', register: 'Create free account', name: 'Full name (printed on certificates)',
      loginLbl: 'Email or mobile number', pass: 'Password', ref: 'Referral code (optional)', goLogin: 'Sign in', goRegister: 'Create account & start',
      terms: 'Signing up unlocks the first lesson of every course for free. Keep your password somewhere safe.', f1: '📚 Three-minute lessons, realistic patients and bedside calculators',
      f2: '🧩 Termino: 15 modules of medical terminology', f3: '🔐 Your progress follows you to every device you sign in on',
      foot: 'Therapo is an educational tool and does not replace clinical judgment or a physician’s orders.', gift: 'You were invited by a friend: your first-purchase discount is saved.', wait: 'Please wait…', lang: 'فارسی', dir: 'ltr' }
  };
  var ERR = {
    bad_login: ['ایمیل یا شماره موبایل معتبر نیست (مثل 09121234567).', 'Enter a valid email or mobile number.'],
    pass_short: ['رمز باید حداقل ۸ نویسه باشد.', 'Password must be at least 8 characters.'],
    pass_weak: ['این رمز خیلی ساده است؛ رمز قوی‌تری انتخاب کن.', 'That password is too simple — choose a stronger one.'],
    bad_name: ['نامت را درست بنویس (۲ تا ۶۰ نویسه).', 'Please enter your name (2–60 characters).'],
    login_taken: ['با این ایمیل یا شماره قبلاً حساب ساخته شده؛ وارد شو.', 'An account already exists for this login — please sign in.'],
    bad_credentials: ['ایمیل/شماره یا رمز درست نیست.', 'Wrong login or password.'],
    account_disabled: ['این حساب غیرفعال است؛ با پشتیبانی تماس بگیر.', 'This account is disabled — contact support.'],
    rate_limited: ['تلاش‌ها زیاد بود؛ چند دقیقه دیگر دوباره امتحان کن.', 'Too many attempts — try again in a few minutes.'],
    origin: ['درخواست نامعتبر؛ صفحه را دوباره باز کن.', 'Invalid request — reload the page.'],
    network: ['اتصال برقرار نشد؛ اینترنت را بررسی کن.', 'Could not connect — check your internet.']
  };
  var lang = 'fa';
  try { var g = JSON.parse(localStorage.getItem('academy_global_state') || '{}'); if (g && g.lang === 'en') lang = 'en'; } catch (e) { /* */ }
  try { if (localStorage.getItem('trp_lang') === 'en') lang = 'en'; } catch (e) { /* */ }
  var mode = 'login';
  var $ = function (s) { return document.querySelector(s); };
  var f = $('.au__f'), err = $('.au__err'), go = $('.au__go');
  var gift0 = $('[data-gift] span') ? $('[data-gift] span').textContent : '';
  if ($('[data-gift]')) mode = 'register';

  function apply() {
    var t = T[lang];
    document.documentElement.lang = lang; document.documentElement.dir = t.dir;
    document.title = (lang === 'en' ? 'Therapo · Sign in' : 'تراپو · ورود');
    document.querySelectorAll('[data-t]').forEach(function (el) { var k = el.dataset.t; if (k === 'gift') { el.textContent = lang === 'en' ? t.gift : gift0; return; } if (t[k] != null) el.textContent = t[k]; });
    $('[data-lang] b').textContent = t.lang;
    document.querySelectorAll('[data-tab]').forEach(function (b) { b.classList.toggle('is-on', b.dataset.tab === mode); b.setAttribute('aria-selected', b.dataset.tab === mode); });
    document.querySelectorAll('[data-only]').forEach(function (el) { el.hidden = el.dataset.only !== mode; });
    go.textContent = mode === 'login' ? t.goLogin : t.goRegister;
    f.pass.autocomplete = mode === 'login' ? 'current-password' : 'new-password';
  }
  function showErr(code) { var e = ERR[code] || ['خطایی پیش آمد؛ دوباره امتحان کن.', 'Something went wrong — please try again.']; err.textContent = lang === 'en' ? e[1] : e[0]; err.hidden = false; }

  document.addEventListener('click', function (e) {
    var tb = e.target.closest('[data-tab]'); if (tb) { mode = tb.dataset.tab; err.hidden = true; apply(); return; }
    if (e.target.closest('[data-lang]')) { lang = lang === 'en' ? 'fa' : 'en'; try { localStorage.setItem('trp_lang', lang); } catch (x) { /* */ } apply(); return; }
    if (e.target.closest('[data-eye]')) { f.pass.type = f.pass.type === 'password' ? 'text' : 'password'; }
  });
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    err.hidden = true;
    var body = { login: f.login.value.trim(), pass: f.pass.value };
    if (mode === 'register') { body.name = f.name.value.trim(); body.ref = f.ref.value.trim(); }
    if (!body.login) return showErr('bad_login');
    if (mode === 'register' && body.pass.length < 8) return showErr('pass_short');
    go.disabled = true; var txt = go.textContent; go.textContent = T[lang].wait;
    fetch('api/?a=' + mode, { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j.ok) {
          try { if (lang === 'en') { var g = JSON.parse(localStorage.getItem('academy_global_state') || '{}') || {}; g.lang = 'en'; localStorage.setItem('academy_global_state', JSON.stringify(g)); } } catch (x) { /* */ }
          location.replace(location.pathname);
          return;
        }
        showErr(j.err);
      })
      .catch(function () { showErr('network'); })
      .then(function () { go.disabled = false; go.textContent = txt; });
  });
  apply();
})();
