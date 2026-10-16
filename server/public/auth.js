/* تراپو — صفحه معرفی، ورود و ثبت‌نام (بدون هیچ کد برنامه؛ فقط فرم)
 * متن فارسی همان متن خود صفحه است (برای موتورهای جست‌وجو)؛ نسخه انگلیسی از EN می‌آید. */
(function () {
  'use strict';
  var EN = {
    brand: 'Therapo', navCourses: 'Courses', navPrice: 'Pricing', navFaq: 'FAQ', install: 'Install app', login: 'Sign in', register: 'Create free account',
    kicker: 'Clinical training academy · for students and healthcare staff',
    h1: 'Learn clinical skills with three-minute lessons and realistic patients',
    lead: 'Electrolyte correction, blood gas interpretation, the nutrition-focused exam and medical terminology — short, interactive and practical for the ward, on-call and exams. With a completion certificate.',
    ctaStart: 'Sign up free & start', ctaCourses: 'See the courses',
    nCourses: 'specialist courses', nLessons: 'short lessons', nQ: 'questions & steps', nCases: 'clinical cases',
    joinT: 'Start free', tag: 'Sign up in under a minute · first lessons of every course free',
    name: 'Full name (printed on certificates)', loginLbl: 'Email or mobile number', contactLbl: 'Second contact: mobile or email (optional)',
    pass: 'Password', ref: 'Referral code (optional)', goLogin: 'Sign in', goRegister: 'Create account & start',
    terms: 'Signing up unlocks the first lesson of every course for free. One account per email or mobile number — keep your password somewhere safe.',
    gift: 'You were invited by a friend: your first-purchase discount is saved.',
    kicked: 'Your account was opened on another device, so this one was signed out. Each account stays open on a limited number of devices at once.',
    cT: 'Four courses, one clear path', cS: 'Each course has worlds and levels: a few three-minute lessons a day, realistic patients, clinical tools and calculators, then a final exam and certificate.',
    for: 'For', wT: 'Why Therapo?',
    w1t: '⏱️ Three-minute lessons', w1: 'Fits between shifts or on the way — a little every day, consistently.',
    w2t: '🏥 Realistic patients', w2: '272 clinical cases with labs, blood gases and images — like a ward round.',
    w3t: '🧮 Clinical tools & calculators', w3: '22 tools: sodium deficit, potassium and magnesium dosing, anion gap, P/F and more.',
    w4t: '🚨 Combined ICU cases', w4: 'Critically ill patients who need electrolytes, blood gases and nutrition at once.',
    w5t: '🎓 Completion certificate', w5: 'Pass the final exam to get a certificate with your name and a tracking code.',
    w6t: '📱 On every device', w6: 'Phone, tablet, laptop — installable like an app, with progress tied to your account.',
    sT: 'Start in three steps', s1: 'Sign up free (email or mobile number).', s2: 'Pick your course and start the free lessons.', s3: 'Buying hearts (a daily plan, a pack or Ultimate) unlocks every lesson, case, tool and certificate.',
    fT: 'Frequently asked questions', endT: 'Start your first lesson today',
    foot: 'Therapo is an educational tool and does not replace clinical judgment or a physician’s orders.', wait: 'Please wait…'
  };
  var FA_WAIT = 'لطفاً صبر کن…', FA_GO_REG = 'ساخت حساب و شروع';
  var ERR = {
    bad_login: ['ایمیل یا شماره موبایل معتبر نیست (مثل 09121234567).', 'Enter a valid email or mobile number.'],
    bad_contact: ['راه تماس دوم معتبر نیست؛ یک ایمیل یا شماره موبایل درست بنویس یا خالی بگذار.', 'The second contact is not a valid email or mobile number — fix it or leave it empty.'],
    pass_short: ['رمز باید حداقل ۸ نویسه باشد.', 'Password must be at least 8 characters.'],
    pass_weak: ['این رمز خیلی ساده است؛ رمز قوی‌تری انتخاب کن.', 'That password is too simple — choose a stronger one.'],
    bad_name: ['نامت را درست بنویس (۲ تا ۶۰ نویسه).', 'Please enter your name (2–60 characters).'],
    login_taken: ['با این ایمیل یا شماره قبلاً حساب ساخته شده؛ از «ورود» وارد همان حساب شو (اگر رمز را فراموش کرده‌ای، با پشتیبانی تماس بگیر).', 'An account already exists for this email or number — please sign in to it (contact support if you forgot the password).'],
    contact_taken: ['این ایمیل یا شماره متعلق به حساب دیگری است؛ با همان حساب وارد شو.', 'That email or number belongs to another account — sign in to that account instead.'],
    bad_credentials: ['ایمیل/شماره یا رمز درست نیست.', 'Wrong login or password.'],
    account_disabled: ['این حساب غیرفعال است؛ با پشتیبانی تماس بگیر.', 'This account is disabled — contact support.'],
    rate_limited: ['تلاش‌ها زیاد بود؛ چند دقیقه دیگر دوباره امتحان کن.', 'Too many attempts — try again in a few minutes.'],
    origin: ['درخواست نامعتبر؛ صفحه را دوباره باز کن.', 'Invalid request — reload the page.'],
    network: ['اتصال برقرار نشد؛ اینترنت را بررسی کن.', 'Could not connect — check your internet.']
  };
  // فونت‌ها بعد از نمایش صفحه (فایل بزرگ فونت جلوی نمایش سریع صفحه را نمی‌گیرد)
  var fl = document.createElement('link'); fl.rel = 'stylesheet'; fl.href = 'css/fonts.css'; document.head.appendChild(fl);
  // نصب به‌صورت اپ
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(function () { /* */ });

  var lang = 'fa';
  try { var g = JSON.parse(localStorage.getItem('academy_global_state') || '{}'); if (g && g.lang === 'en') lang = 'en'; } catch (e) { /* */ }
  try { if (localStorage.getItem('trp_lang') === 'en') lang = 'en'; else if (localStorage.getItem('trp_lang') === 'fa') lang = 'fa'; } catch (e) { /* */ }
  var mode = 'login';
  var $ = function (s) { return document.querySelector(s); };
  var f = $('.au__f'), err = $('.au__err'), go = $('.au__go');
  if ($('[data-gift]') || /[?&]signup=1/.test(location.search)) mode = 'register';
  var FA = [];
  document.querySelectorAll('[data-t]').forEach(function (el) { FA.push([el, el.innerHTML]); });
  var titles = { fa: document.title, en: 'Therapo | Clinical training in electrolytes, blood gases, clinical nutrition and medical terminology' };

  function apply() {
    document.documentElement.lang = lang; document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.title = titles[lang];
    FA.forEach(function (x) { var k = x[0].dataset.t; if (lang === 'en' && EN[k] != null) x[0].textContent = EN[k]; else x[0].innerHTML = x[1]; });
    $('[data-lang] b').textContent = lang === 'en' ? 'فارسی' : 'English';
    document.querySelectorAll('[data-tab]').forEach(function (b) { b.classList.toggle('is-on', b.dataset.tab === mode); b.setAttribute('aria-selected', b.dataset.tab === mode); });
    document.querySelectorAll('[data-only]').forEach(function (el) { el.hidden = el.dataset.only !== mode; });
    go.textContent = mode === 'login' ? (lang === 'en' ? EN.goLogin : 'ورود') : (lang === 'en' ? EN.goRegister : FA_GO_REG);
    f.pass.autocomplete = mode === 'login' ? 'current-password' : 'new-password';
    contactLabel();
  }
  /** راه تماس دوم: اگر ورود با ایمیل است شماره موبایل بخواه، و برعکس */
  function contactLabel() {
    var el = $('[data-contact-lbl]'); if (!el) return;
    var v = f.login.value.trim(), mail = v.indexOf('@') >= 0, tel = /^[+۰-۹0-9\s-]{6,}$/.test(v);
    el.textContent = mail ? (lang === 'en' ? 'Mobile number (optional)' : 'شماره موبایل (اختیاری)')
      : tel ? (lang === 'en' ? 'Email (optional)' : 'ایمیل (اختیاری)')
      : (lang === 'en' ? EN.contactLbl : 'شماره موبایل یا ایمیل دوم (اختیاری)');
    f.contact.type = mail ? 'tel' : tel ? 'email' : 'text';
    f.contact.inputMode = mail ? 'tel' : 'email';
  }
  function showErr(code) { var e = ERR[code] || ['خطایی پیش آمد؛ دوباره امتحان کن.', 'Something went wrong — please try again.']; err.textContent = lang === 'en' ? e[1] : e[0]; err.hidden = false; }

  document.addEventListener('click', function (e) {
    var tb = e.target.closest('[data-tab]'); if (tb) { mode = tb.dataset.tab; err.hidden = true; apply(); return; }
    var gt = e.target.closest('[data-go-tab]');
    if (gt) { e.preventDefault(); mode = gt.dataset.goTab; err.hidden = true; apply(); var j = $('#join'); if (j) j.scrollIntoView({ behavior: 'smooth', block: 'start' }); setTimeout(function () { (mode === 'register' ? f.name : f.login).focus({ preventScroll: true }); }, 450); return; }
    if (e.target.closest('[data-lang]')) { lang = lang === 'en' ? 'fa' : 'en'; try { localStorage.setItem('trp_lang', lang); } catch (x) { /* */ } apply(); return; }
    if (e.target.closest('[data-eye]')) { f.pass.type = f.pass.type === 'password' ? 'text' : 'password'; }
    if (e.target.closest('[data-install]')) install();
  });
  f.login.addEventListener('input', contactLabel);
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    err.hidden = true;
    var body = { login: f.login.value.trim(), pass: f.pass.value };
    if (mode === 'register') { body.name = f.name.value.trim(); body.ref = f.ref.value.trim(); body.contact = f.contact.value.trim(); }
    if (!body.login) return showErr('bad_login');
    if (mode === 'register' && body.pass.length < 8) return showErr('pass_short');
    go.disabled = true; var txt = go.textContent; go.textContent = lang === 'en' ? EN.wait : FA_WAIT;
    fetch('api/?a=' + mode, { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j.ok) {
          try { var g = JSON.parse(localStorage.getItem('academy_global_state') || '{}') || {}; g.lang = lang; localStorage.setItem('academy_global_state', JSON.stringify(g)); } catch (x) { /* */ }
          location.replace(location.pathname);
          return;
        }
        showErr(j.err);
      })
      .catch(function () { showErr('network'); })
      .then(function () { go.disabled = false; go.textContent = txt; });
  });

  /* دکمه «نصب اپ»: کروم/اج/سامسونگ با پنجره نصب خود مرورگر؛ آیفون و آیپد با راهنمای «Add to Home Screen» */
  var bip = null, btn = $('[data-install]');
  var standalone = function () { try { return matchMedia('(display-mode: standalone)').matches || navigator.standalone === true; } catch (x) { return false; } };
  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var show = function () { if (btn) btn.hidden = standalone() || !(bip || ios); };
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); bip = e; show(); });
  window.addEventListener('appinstalled', function () { bip = null; show(); });
  function install() {
    if (bip) { bip.prompt(); bip.userChoice.then(function () { bip = null; show(); }); return; }
    alert(lang === 'en' ? 'iPhone / iPad: open this page in Safari, tap Share (square with an up arrow), then “Add to Home Screen”.'
      : 'آیفون و آیپد: این صفحه را در Safari باز کن، دکمه اشتراک‌گذاری (مربع با فلش رو به بالا) را بزن و بعد «Add to Home Screen».');
  }
  show();
  apply();
})();
