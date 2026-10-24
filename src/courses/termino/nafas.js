/* Therapo • ترمینو — حیطه «nafas» (Respiratory System)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_nafas;
  D.css = ".spi{display: flex; flex-wrap: wrap; gap: 10px; margin: 10px 0;}\n.spi .rom__in{flex: 1 1 140px;}\n.spi__f{display: flex; align-items: center; gap: 6px; min-width: 0;}\n.spi__f i{flex-shrink: 0; font-style: normal; font-weight: 800; color: var(--muted); font-family: Arial, Helvetica, sans-serif; direction: ltr;}\n.rom__in{display: flex; flex-direction: column; gap: 6px; min-width: 0; font-weight: 800; color: var(--muted);}\n.rom__in input{width: 100%; min-width: 0; font: inherit; font-size: 20px; font-weight: 900; color: var(--text); background: var(--bg); border: 2px solid var(--line); border-radius: 14px; padding: 8px 12px; text-align: left; font-family: Nunito, system-ui, sans-serif;}\n.rom__in input:focus{outline: none; border-color: #17a398;}\n.rom__out{display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 10px; padding: 12px 16px; border-radius: 16px; background: color-mix(in srgb, #17a398 12%, var(--bg)); border: 2px solid color-mix(in srgb, #17a398 40%, var(--line)); margin-bottom: 12px;}\n.rom__out b{font-size: 24px; color: #17a398;}\n.rom__out small{flex-basis: 100%; color: var(--muted); font-weight: 700;}\n.rom__h{margin: 16px 0 4px; font-size: 16px;}\n.tsc--ok{color: #46a302 !important;}\n.tsc--mid{color: #e5a500 !important;}\n.tsc--bad{color: #c2413a !important;}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* نَفَس — پیکربندی اپ: هر متن، نام، کلید ذخیره‌سازی، شخصیت و ابزار ویژه‌ای که موتور مشترک (engine/) از اپ می‌خواهد.
 * این فایل پیش از همه ماژول‌ها بارگذاری می‌شود؛ تابع‌ها بعداً و هنگام اجرا صدا زده می‌شوند. */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.APP = {
    name: 'نَفَس', key: 'nafas', title: 'نَفَس • ترمینولوژی دستگاه تنفس', certCode: 'NF',
    subject: 'ترمینولوژی پزشکی دستگاه تنفس (بینی، حلق، حنجره، نای، نایژه‌ها و ریه‌ها)',
    kicker: '🫁 ترمینولوژی پزشکی: بینی، حلق، حنجره، نای و ریه‌ها',
    hello: 'سلام، من <b>نَفَس</b> هستم؛ یک جفت ریه خندان با یک حباب اکسیژن که همیشه دنبالم می‌آید!',
    disclaimer: 'نَفَس یک ابزار آموزشی است و جایگزین معاینه، قضاوت بالینی یا دستور پزشک نیست.',
    eyes: 'ده‌ها شکل دوزبانه و تصویر بالینی؛ از سینوس‌ها و درخت نایژه‌ای تا آلوئول، اسپیروگرام، پنوموتوراکس و رادیوگرافی سل.',
    outcomes: [
      'هر واژه تنفسی را به پیشوند، ریشه و پسوند بشکنی و معنی‌اش را بگویی',
      'بینی، سینوس‌ها، حلق و حنجره را روی شکل نشان دهی و بیماری‌هایشان را بشناسی',
      'مسیر هوا از نای تا آلوئول، لوب‌های ریه و پرده جنب را توضیح دهی',
      'الگوهای تنفس، صداهای ریه و حجم‌های ریوی را با واژه درست بنویسی',
      'آسم، COPD، پنومونی، سل، پنوموتوراکس و دیگر بیماری‌های تنفسی را از هم جدا کنی',
      'اسپیرومتری، ABG، برونکوسکوپی، اینتوباسیون، داروها و اختصارهای پرونده را بخوانی'
    ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، گزارش ریه را مثل یک داستان آشنا می‌خوانی.',
    obHello: 'سلام! من نَفَس هستم؛ یک جفت ریه خندان 🫁 اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان تنفس» بهترین شروع است؛ ریشه‌های پایه و مسیر هوا آن‌جا یاد داده می‌شوند!',
    demo: () => ({
      q: 'واژه <b dir="ltr">tachypnea</b> یعنی…',
      fig: { a: ['breath-patterns'], l: ['الگوهای تنفس'] },
      opts: ['تنفس تند', 'تنفس کند', 'قطع تنفس', 'تنگی نفس'],
      why: `${EA.K.wb('tachy-', '-pnea')}<br><b>tachy-</b> = تند، <b>-pnea</b> = تنفس. پس <b>تنفس تند</b>؛ بیش از ۲۰ بار در دقیقه در بزرگسال. معنی را از پسوند شروع کن!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ['نفس تازه', 'مژک کوشا', 'نگهبان بینی', 'رمزگشای ریشه‌ها', 'استاد حنجره', 'راهنمای نایژه‌ها', 'ساکن آلوئول',
      'شنونده صداهای ریه', 'استاد اسپیرومتری', 'کارآگاه آسم', 'شکارچی سل', 'خواننده ABG', 'استاد واژه‌سازی', 'افسانه پالمونولوژی', 'اسطوره ترمینولوژی'],
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'دانشجوی هوشبری', 'کارشناس هوشبری', 'درمانگر تنفسی', 'کارشناس اتاق عمل', 'پرستار ICU', 'رزیدنت داخلی', 'دانشجوی فیزیوتراپی', 'کارشناس رادیولوژی', 'پرستار اورژانس', 'دانشجوی مامایی', 'کارشناس علوم آزمایشگاهی'],
    firstBadge: ['🫁', 'اولین نفس'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], up: ['👃', 'نگهبان راه هوایی'], lo: ['🌳', 'راهنمای درخت نایژه'], br: ['🩺', 'شنونده ریه'], ds: ['🦠', 'شکارچی بیماری'], tx: ['💨', 'استاد اسپیرومتری'] },
    confetti: ['#2E9BD6', '#F4A6B8', '#FFC800', '#17A398', '#8E6BD8', '#E07A3A', '#3D6FD6', '#58CC02'],
    /* ابزارها */
    parseDefault: 'bronchiectasis',
    parseSamples: ['bronchiectasis', 'hemoptysis', 'thoracentesis', 'tracheostomy', 'pneumoconiosis', 'orthopnea', 'laryngoscopy', 'otorhinolaryngologist'],
    ph: { dict: 'جست‌وجو: pneum، ریه، asthma…', roots: 'جست‌وجو: bronch، نای، ‎-pnea‎…', abbr: 'جست‌وجو: COPD، اکسیژن، ABG…' },
    toolsDisclaimer: '⚕️ نَفَس ابزار آموزشی است؛ واژه‌نامه و تفسیر اسپیرومتری، تنفس و اکسیژن جای معاینه و قضاوت بالینی را نمی‌گیرند.',
    /* شخصیت: یک جفت ریه با نای و حباب اکسیژن (بدنه؛ چشم و دهان را موتور می‌کشد، مرکز چهره cx,cy) */
    mascot: (cx, cy) => `
        <rect x="${cx - 6}" y="10" width="12" height="34" rx="6" fill="var(--c)"/>
        ${[16, 23, 30, 37].map(y => `<path d="M${cx - 6} ${y} h12" stroke="#fff" stroke-width="2.2" opacity=".55"/>`).join('')}
        <path d="M${cx} 42 C${cx - 8} 48 ${cx - 14} 50 ${cx - 20} 56 M${cx} 42 C${cx + 8} 48 ${cx + 14} 50 ${cx + 20} 56" stroke="var(--c)" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M${cx - 3} 52 C${cx - 22} 34 ${cx - 50} 46 ${cx - 50} 84 C${cx - 50} 116 ${cx - 46} 136 ${cx - 26} 138 C${cx - 10} 140 ${cx - 2} 128 ${cx - 2} 110 Z" fill="#F4A6B8" stroke="#D97890" stroke-width="2"/>
        <path d="M${cx + 3} 52 C${cx + 22} 34 ${cx + 50} 46 ${cx + 50} 84 C${cx + 50} 116 ${cx + 46} 136 ${cx + 26} 138 C${cx + 10} 140 ${cx + 2} 128 ${cx + 2} 110 Z" fill="#F4A6B8" stroke="#D97890" stroke-width="2"/>
        <path d="M${cx - 40} 70 C${cx - 38} 56 ${cx - 30} 50 ${cx - 22} 50" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>
        <path d="M${cx - 46} 112 q10 4 16 -2 M${cx + 46} 112 q-10 4 -16 -2" stroke="#D97890" stroke-width="1.6" fill="none" opacity=".7"/>
        <g transform="translate(${cx + 46} 28)"><circle r="12" fill="#E3F4FC" stroke="var(--c)" stroke-width="2.5"/><text x="0" y="4.5" font-size="11" font-weight="900" text-anchor="middle" fill="var(--c)" font-family="Arial, sans-serif">O₂</text></g>
        <circle cx="${cx + 30}" cy="12" r="4" fill="#E3F4FC" stroke="var(--c)" stroke-width="1.5"/>
        <path class="negar-spark" d="M14 26 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
`
  };

  /* ---------- ابزار ویژه: تفسیر اسپیرومتری، تعداد تنفس و اشباع اکسیژن ----------
   * آستانه‌ها: FEV1/FVC کمتر از ۷۰٪ = الگوی انسدادی؛ FVC کمتر از ۸۰٪ پیش‌بینی با نسبت طبیعی = احتمال الگوی تحدیدی؛
   * تعداد تنفس بزرگسال در استراحت ۱۲ تا ۲۰ در دقیقه؛ SpO2 طبیعی ۹۵ تا ۱۰۰٪. اعداد آموزشی و تقریبی‌اند. */
  const st = { fev: '', fvc: '', pred: '', rr: '', spo: '' };
  const fa = n => EA.fa(n);
  const num = v => { const n = EA.parseNum(v); return isFinite(n) && n >= 0 ? n : NaN; };
  const ratio = () => { const a = num(st.fev), b = num(st.fvc); return isFinite(a) && isFinite(b) && b > 0 ? Math.round(a / b * 100) : 0; };
  function spiroOut() {
    const a = num(st.fev), b = num(st.fvc), p = num(st.pred);
    if (!isFinite(a) || !isFinite(b) || b <= 0) return `<b>—</b><small>FEV1 و FVC را به لیتر وارد کن؛ مثلاً ‎2.1‎ و ‎3.5‎</small>`;
    if (a > b) return `<b>؟</b><small>FEV1 نمی‌تواند از FVC بیشتر باشد؛ اعداد را بررسی کن.</small>`;
    const r = ratio();
    let msg;
    if (r < 70) msg = 'الگوی انسدادی (obstructive): هوا به‌سختی بیرون می‌آید؛ مثل آسم و COPD. پاسخ به bronchodilator بررسی شود.';
    else if (isFinite(p) && p < 80) msg = 'نسبت طبیعی ولی FVC کم: احتمال الگوی تحدیدی (restrictive)؛ مثل فیبروز ریه. نیاز به آزمون‌های کامل‌تر.';
    else msg = 'نسبت FEV1/FVC در محدوده طبیعی است.';
    return `<b>${fa(r)}٪</b> <span>نسبت <bdi dir="ltr">FEV1/FVC</bdi></span><small>${msg}</small>`;
  }
  function rrOut() {
    const n = num(st.rr);
    if (!isFinite(n)) return '<small>تعداد تنفس در یک دقیقه را بشمار و وارد کن.</small>';
    const c = n === 0 ? ['apnea', 'قطع تنفس؛ اورژانس!', 'bad'] : n < 12 ? ['bradypnea', 'تنفس کند (کمتر از ۱۲ بار در دقیقه)', 'mid'] : n <= 20 ? ['eupnea', 'تنفس طبیعی بزرگسال (۱۲ تا ۲۰ بار)', 'ok'] : ['tachypnea', 'تنفس تند (بیش از ۲۰ بار در دقیقه)', 'mid'];
    return `<b class="tsc--${c[2]}"><bdi dir="ltr">${c[0]}</bdi></b><small>${c[1]}</small>`;
  }
  function spoOut() {
    const n = num(st.spo);
    if (!isFinite(n) || n > 100) return '<small>عدد پالس‌اکسیمتر (SpO2) را وارد کن؛ بین ۰ تا ۱۰۰.</small>';
    const c = n >= 95 ? ['طبیعی', 'اکسیژن‌رسانی کافی', 'ok'] : n >= 90 ? ['هیپوکسمی خفیف', 'پایش دقیق‌تر؛ شاید اکسیژن کمکی لازم شود.', 'mid'] : ['هیپوکسمی شدید', 'اکسیژن‌رسانی ناکافی؛ ارزیابی فوری و اکسیژن‌درمانی.', 'bad'];
    return `<b class="tsc--${c[2]}">${c[0]}</b><small>${c[1]}</small>`;
  }
  const field = (key, label, ph, unit) => `<label class="rom__in"><span>${label}</span><span class="spi__f"><input type="text" inputmode="decimal" dir="ltr" data-keep="${key}" data-spi="${key}" value="${EA.ui.esc(st[key])}" placeholder="${ph}" autocomplete="off"><i>${unit}</i></span></label>`;
  EA.APP.extraTool = {
    id: 'spiro', sym: 'L/s', name: 'اسپیرومتری و اکسیژن', color: '#17A398',
    value: ratio,
    pane: () => `<div class="tpane"><p class="muted">عددهای گزارش اسپیرومتری را بنویس؛ نسبت FEV1/FVC و الگوی آن را می‌بینی.</p>
    <div class="spi">${field('fev', '<bdi dir="ltr">FEV1</bdi>', '2.1', 'L')}${field('fvc', '<bdi dir="ltr">FVC</bdi>', '3.5', 'L')}${field('pred', 'FVC ٪ پیش‌بینی (اختیاری)', '85', '%')}</div>
    <div class="rom__out spi__o" aria-live="polite">${spiroOut()}</div>
    ${EA.ui.figCard({ a: ['spirogram'], l: ['حجم‌ها و ظرفیت‌های ریه'] })}
    <h4 class="rom__h">تعداد تنفس و اشباع اکسیژن</h4>
    <div class="spi">${field('rr', 'تعداد تنفس در دقیقه', '16', '/min')}${field('spo', '<bdi dir="ltr">SpO2</bdi>', '97', '%')}</div>
    <div class="rom__out spi__r" aria-live="polite">${rrOut()}</div>
    <div class="rom__out spi__s" aria-live="polite">${spoOut()}</div>
    <table class="mini"><tr><th>یافته</th><th>تفسیر</th></tr>
      <tr><td><bdi dir="ltr">FEV1/FVC &lt; 70%</bdi></td><td>الگوی انسدادی (آسم، COPD)</td></tr>
      <tr><td>نسبت طبیعی + <bdi dir="ltr">FVC</bdi> کم</td><td>احتمال الگوی تحدیدی</td></tr>
      <tr><td>۱۲ تا ۲۰ بار در دقیقه</td><td><bdi dir="ltr">eupnea</bdi></td></tr>
      <tr><td><bdi dir="ltr">SpO2 ≥ 95%</bdi></td><td>طبیعی</td></tr></table>
    <p class="muted">آستانه‌ها آموزشی و تقریبی‌اند؛ تفسیر نهایی با پزشک و آزمون‌های کامل است.</p></div>`,
    /* تایپ: فقط بخش خروجی به‌روز می‌شود تا فوکوس ورودی از دست نرود */
    input: (e, el) => {
      const k = e.target.dataset && e.target.dataset.spi;
      if (!k) return false;
      st[k] = e.target.value;
      const set = (s, h) => { const o = el.querySelector(s); if (o) o.innerHTML = h; };
      set('.spi__o', spiroOut()); set('.spi__r', rrOut()); set('.spi__s', spoOut());
      return false;
    },
    /* برای آزمون دود: ۲٫۱ لیتر از ۳٫۵ لیتر = ۶۰٪ (انسدادی) */
    test: { fill: [['[data-spi="fev"]', '2.1'], ['[data-spi="fvc"]', '3.5'], ['[data-spi="rr"]', '26'], ['[data-spi="spo"]', '88']], expect: 60 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
/* موتور — هسته: فضای نام، متن‌ها، رقم فارسی و سازنده‌های کوتاه محتوا
 * این فایل پیش از همه بارگذاری می‌شود؛ هم در مرورگر و هم در Node (برای آزمون‌ها).
 * زبان رابط فارسی است و واژه‌های پزشکی همیشه انگلیسی و چپ‌به‌راست می‌مانند.
 *   EA.T(fa)          متن رابط (برای سازگاری با موتور نگار، آرگومان دوم نادیده گرفته می‌شود)
 *   EA.fa(n, d)       عدد با رقم فارسی
 *   EA.en(s)          تکه انگلیسی جدا و چپ‌به‌راست درون متن فارسی
 * سازنده‌های محتوا (EA.K):
 *   L(عنوان، متن)                       کارت آموزشی
 *   M(سؤال، گزینه‌ها، چرا، پرونده، شکل)  چندگزینه‌ای — گزینه اول درست است و در اجرا به‌هم می‌ریزد
 *   T(جمله، درست/غلط، چرا، شکل)         درست یا نادرست
 *   B(جمله با ___، گزینه‌ها، چرا)        جای خالی — گزینه اول درست است
 *   O(سؤال، مراحل به ترتیب درست، چرا)     مرتب‌سازی
 *   P(سؤال، جفت‌ها، چرا)                 جفت‌کردن
 *   S(سؤال، پاسخ یا پاسخ‌ها، چرا، راهنما)  املای واژه: کاربر واژه انگلیسی را تایپ می‌کند
 *   W(سؤال، اجزا به ترتیب، اجزای انحرافی، چرا) واژه‌سازی: ساختن واژه از ریشه‌ها
 *   N(شناسه مولد)                        سؤال تازه از واژه‌نامه در هر بار
 *   F(کلید شکل یا آرایه، برچسب‌ها، توضیح)  شکل SVG درون سؤال؛ fig(...) همان شکل را درون کارت آموزشی می‌گذارد */
(function (root) {
  const EA = root.EA = root.EA || {};
  /* نام، کلید و متن‌های هر اپ در config.js آن اپ (پیش از هسته بارگذاری می‌شود) */
  EA.APP = EA.APP || { name: 'App', key: 'app', title: 'App' };

  /* ---------- اعداد ---------- */
  function fa(n, d) {
    if (typeof n !== 'number' || !isFinite(n)) return String(n);
    const dd = d == null ? 1 : d;
    return n.toLocaleString(EA.lang === 'en' ? 'en-US' : 'fa-IR', { maximumFractionDigits: dd, useGrouping: false });
  }
  function toEn(s) {
    return String(s)
      .replace(/[۰-۹]/g, c => String(c.charCodeAt(0) - 1776))
      .replace(/[٠-٩]/g, c => String(c.charCodeAt(0) - 1632))
      .replace(/[٫,/]/g, '.')
      .replace(/[−–]/g, '-')
      .replace(/[^\d.\-]/g, '');
  }
  function parseNum(s) {
    const t = toEn(s);
    if (!t || t === '.' || t === '-') return NaN;
    return parseFloat(t);
  }
  const round = (x, d) => { const p = Math.pow(10, d || 0); return Math.round(x * p) / p; };
  EA.fa = fa; EA.num = fa; EA.toEn = toEn; EA.parseNum = parseNum; EA.round = round;

  /* ---------- تصویرها ----------
   * در نسخه ساخته‌شده، build.js همه تصویرهای src/img را به‌صورت داده در EA.IMG می‌گذارد؛
   * در حالت توسعه نشانی فایل برگردانده می‌شود. EA.IMG_USED کلیدهایی است که محتوا به کار برده. */
  EA.IMG = EA.IMG || {};
  EA.IMG_USED = EA.IMG_USED || new Set();
  EA.img = k => { EA.IMG_USED.add(k); return EA.IMG[k] || ('img/' + k + '.webp'); };

  /** واژه انگلیسی درون متن فارسی: جدا و چپ‌به‌راست */
  EA.en = s => `<bdi class="en" dir="ltr">${s}</bdi>`;
  /* متن دوزبانه: هر تکه لاتین را در <bdi dir="ltr"> می‌گذاریم تا در جمله فارسی جابه‌جا نشود.
   * تکه‌های لاتینی که با فاصله، «,»، «+»، «=»، «:»، «/»، «→»، «↔» یا «×» به هم چسبیده‌اند یک تکه‌اند
   * (vertebra → vertebrae، PET / SPECT، C1–C7)؛ ولی «،» و «•» فارسی جداکننده فهرست راست‌به‌چپ است.
   * پرانتزی که جفتش درون تکه نیست بیرون از bdi می‌ماند تا در متن فارسی درست قرینه شود. */
  const BI_TOK = "\\(?-?[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ0-9²⁺⁻\\/\\-.+–°'’]*\\)?", BI_TOK2 = "\\(?-?[A-Za-zÀ-ÖØ-öø-ÿ0-9][A-Za-zÀ-ÖØ-öø-ÿ0-9²⁺⁻\\/\\-.+–°'’]*\\)?";
  const BI_RUN = new RegExp(`(?<![&#\\w])${BI_TOK}(?:(?:\\s*(?:[,+=:\\/→↔×]|&amp;|&)\\s*|\\s+)${BI_TOK2})*`, 'g');
  const biSeg = b => { const t = b.trim(); if (!t || !/[A-Za-z0-9]/.test(t)) return b; return b.match(/^\s*/)[0] + `<bdi dir="ltr">${t}</bdi>` + b.match(/\s*$/)[0]; };
  const biWrap = m => {
    /* نقطه، ویرگول و دونقطه پایانی مال جمله فارسی است، نه واژه لاتین */
    const tail = (m.match(/[.,:]+$/) || [''])[0];
    if (tail && !/\b[A-Za-z]\.[A-Za-z]\.$/.test(m)) return biWrap(m.slice(0, -tail.length)) + tail;
    const open = [], bad = new Set();
    for (let i = 0; i < m.length; i++) { if (m[i] === '(') open.push(i); else if (m[i] === ')') { if (open.length) open.pop(); else bad.add(i); } }
    open.forEach(i => bad.add(i));
    if (!bad.size) return `<bdi dir="ltr">${m}</bdi>`;
    let out = '', buf = '';
    for (let i = 0; i < m.length; i++) { if (bad.has(i)) { out += biSeg(buf) + m[i]; buf = ''; } else buf += m[i]; }
    return out + biSeg(buf);
  };
  /* اختصار یا نماد علمی: حروف بزرگ و رقم (BCC، SPF، I&D، UVA، C&S، Na+) ← کلاس sym با فونت Arial */
  const SYM = /^\(?[A-Z][A-Za-z0-9]*(?:[&+\/\-][A-Za-z0-9]*)*\)?$/;
  EA.isSym = t => SYM.test(t) && /[A-Z].*[A-Z0-9&]|^[A-Z]$/.test(t);
  /** تکه‌ای که همه اجزایش اختصار یا عدد است (SPF 30، T3 / T4) */
  const symRun = t => { const p = t.replace(/&amp;/g, '&').split(/\s+/).filter(Boolean); return p.some(EA.isSym) && p.every(x => EA.isSym(x) || /^[\d.,%°×\/–-]+$/.test(x)); };
  EA.bi = s => {
    let depth = 0;
    const out = String(s).split(/(<[^>]+>)/).map(x => {
      if (x.startsWith('<')) { if (/^<bdi\b/i.test(x)) depth++; else if (/^<\/bdi>/i.test(x)) depth--; return x; }
      /* نشانه LRM دیگر لازم نیست (خود bdi جهت را نگه می‌دارد) و پیوستن تکه‌ها را می‌شکند */
      return depth ? x : x.replace(/\u200e/g, '').replace(BI_RUN, biWrap);
    }).join('');
    /* تکه‌های کوتاه لاتین (مثل ‎-scopy) نباید سر خط از خط تیره بشکنند */
    /* nowrap جلوی شکستن خط در فاصله بعدی را هم می‌گیرد؛ فاصله صفرعرض (U+200B) آن فرصت را برمی‌گرداند.
     * <wbr> نه: در Chromium، <wbr> پس از bdi درون سلول جدول (با فونت بارگذاری‌شده) چیدمان را قفل می‌کند. */
    return out.replace(/<bdi dir="ltr">([^<]{1,40})<\/bdi>(?=(\s?))/g, (m, t, sp) => {
      const sym = symRun(t), short = !/\s/.test(t) && t.length <= 26;
      if (!sym && !short) return m;
      return `<bdi dir="ltr" class="${[short ? 'nw' : '', sym ? 'sym' : ''].filter(Boolean).join(' ')}">${t}</bdi>${short && sp ? '\u200b' : ''}`;
    });
  };

  /* ---------- سازنده‌های محتوا ---------- */
  const fig = (ks, ls, capTxt) => ({ a: ks, l: ls, cap: capTxt });
  EA.K = {
    L: (title, body) => ({ t: 'learn', title, body }),
    M: (q, opts, why, kase, f) => ({ t: 'mcq', q, opts, why, case: kase, fig: f }),
    T: (q, a, why, f) => ({ t: 'tf', q, a, why, fig: f }),
    B: (q, opts, why) => ({ t: 'fill', q, opts, why }),
    O: (q, steps, why) => ({ t: 'order', q, steps, why }),
    P: (q, pairs, why) => ({ t: 'match', q, pairs, why }),
    S: (q, ans, why, hint) => ({ t: 'spell', q, ans: [].concat(ans), why, hint }),
    W: (q, parts, extra, why) => ({ t: 'build', q, parts, extra: extra || [], why }),
    N: gen => ({ t: 'num', gen }),
    F: fig,
    /** جدول کوچک؛ ردیف اول سرستون است */
    tbl: rows => '<table class="mini">' + rows.map((r, i) => '<tr>' + r.map(c => (i ? `<td>${c}</td>` : `<th>${c}</th>`)).join('') + '</tr>').join('') + '</table>',
    /** شکل درون کارت آموزشی (در زمان نمایش ساخته می‌شود) */
    fig: (ks, ls, capTxt) => `<!--fig:${encodeURIComponent(JSON.stringify(fig(ks, ls, capTxt)))}-->`,
    /** واژه با ساختار رنگی: wb('erythr/o','cyt','-penia') */
    wb: (...parts) => `<span class="wb" dir="ltr">${parts.map(p => `<b class="wb__p wb__p--${p.endsWith('-') ? 'pre' : p.startsWith('-') ? 'suf' : 'root'}">${p}</b>`).join('<i>+</i>')}</span>`,
    en: s => EA.en(s),
    /** جعبه «ترفند حفظ»: یک تصویر ذهنی یا قلاب حافظه */
    memo: s => `<div class="memo"><b class="memo__h">🧠 ترفند حفظ</b>${EA.bi(s)}</div>`,
    /** جعبه «در بالین»: کاربرد واقعی همان واژه در بخش و آزمایشگاه */
    pearl: s => `<div class="pearl"><b class="pearl__h">🩺 در بالین</b>${EA.bi(s)}</div>`,
    /** مقایسه دو مفهوم شبیه: vs(['عنوان', 'توضیح'], ['عنوان', 'توضیح']) */
    vs: (a, b) => `<div class="vs"><div class="vs__c"><b>${a[0]}</b><span>${EA.bi(a[1])}</span></div><i class="vs__x">VS</i><div class="vs__c vs__c--b"><b>${b[0]}</b><span>${EA.bi(b[1])}</span></div></div>`
  };
  EA.worlds = EA.worlds || [];

  /* ساختار دوره: هر دنیا ۳ سطح × ۳ درس؛ آزمون مرحله در پایان هر دنیا و امتحان نهایی پس از همه */
  EA.PER_LEVEL = 3;
  EA.exam = {
    checkpoint: { count: 12, gens: 4, pass: 0.7 },
    final: { perWorld: 6, gensPerWorld: 2, pass: 0.8, minutes: 25 }
  };

  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* نَفَس — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از apps/nafas/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["acute respiratory distress syndrome", "ah-KYOOT RES-pih-rah-tor-ee dih-STRES SIN-drohm", "Sudden, severe lung failure from fluid in the alveoli after injury or serious illness.", "سندروم دیسترس تنفسی حاد", "ds", "dz", ["ARDS"]],
["adenoidectomy", "ad-eh-noyd-EK-toh-mee", "Surgical removal of the adenoids.", "برداشتن آدنوئید", "up", "tx", []],
["adenoiditis", "ad-eh-noyd-EYE-tis", "Inflammation of the adenoids.", "التهاب آدنوئید", "up", "dz", []],
["adenoids", "AD-eh-noydz", "Lymphatic tissue in the nasopharynx; also called pharyngeal tonsil (adenoid/o = adenoids).", "لوزه سوم (آدنوئید)", "up", "body", []],
["alveolar", "al-VEE-oh-lar", "Pertaining to the alveoli.", "آلوئولی", "lo", "body", []],
["alveolus", "al-VEE-oh-lus", "Tiny air sac at the end of a bronchiole where gas exchange takes place (plural: alveoli) (alveol/o = alveolus).", "کیسه هوایی (آلوئول)", "lo", "body", []],
["anoxia", "an-OK-see-ah", "Total lack of oxygen (an- = without).", "فقدان کامل اکسیژن", "br", "sx", []],
["anthracosis", "an-thrah-KOH-sis", "Black lung disease from inhaling coal dust (anthrac/o = coal).", "سیاه‌ریه (آنتراکوز)", "ds", "dz", []],
["antihistamine", "an-tee-HIS-tah-meen", "Medicine that blocks histamine to relieve allergy symptoms such as sneezing and runny nose.", "آنتی‌هیستامین", "tx", "tx", []],
["antitussive", "an-tee-TUS-iv", "Medicine that relieves or prevents cough (anti- = against, tuss/i = cough).", "داروی ضدسرفه", "tx", "tx", []],
["apex", "AY-peks", "The rounded top of the lung, just above the clavicle.", "رأس ریه", "lo", "body", []],
["aphonia", "ah-FOH-nee-ah", "Loss of the voice (a- = without, phon/o = voice, sound).", "فقدان صدا (آفونی)", "up", "sx", []],
["apnea", "AP-nee-ah", "Temporary absence of breathing (a- = without).", "قطع تنفس (آپنه)", "br", "sx", []],
["arterial blood gases", "ar-TEER-ee-al blud GAS-ez", "Blood test that measures oxygen, carbon dioxide and pH in arterial blood.", "گازهای خون شریانی", "tx", "lab", ["ABGs"]],
["asbestosis", "as-bes-TOH-sis", "Lung disease from inhaling asbestos fibers.", "آزبستوز", "ds", "dz", []],
["asphyxia", "as-FIK-see-ah", "Lack of oxygen and buildup of carbon dioxide from blocked breathing; suffocation.", "خفگی", "br", "sx", []],
["aspiration pneumonia", "as-pih-RAY-shun noo-MOH-nee-ah", "Pneumonia caused by inhaling food, liquid or vomit into the lungs.", "پنومونی آسپیراسیون", "ds", "dz", []],
["asthma", "AZ-mah", "Chronic disease with attacks of airway inflammation, bronchospasm and mucus, causing wheezing, cough and dyspnea.", "آسم", "ds", "dz", ["PEFR", "MDI"]],
["atelectasis", "at-eh-LEK-tah-sis", "Collapse of part or all of a lung, or incomplete expansion (atel/o = incomplete, -ectasis = expansion).", "روی هم خوابیدن ریه (آتلکتازی)", "ds", "dz", []],
["auscultation", "aws-kul-TAY-shun", "Listening to sounds inside the body, usually with a stethoscope.", "سمع (گوش دادن با گوشی)", "br", "lab", []],
["base", "bays", "The broad lower part of the lung that rests on the diaphragm.", "قاعده ریه", "lo", "body", []],
["bradypnea", "brad-ip-NEE-ah", "Abnormally slow breathing (brady- = slow).", "تنفس کند", "br", "sx", []],
["bronchial", "BRONG-kee-al", "Pertaining to the bronchi.", "نایژه‌ای", "lo", "body", []],
["bronchial tree", "BRONG-kee-al tree", "The branching airways of the lungs, from the bronchi to the smallest bronchioles.", "درخت نایژه‌ای", "lo", "body", []],
["bronchiectasis", "brong-kee-EK-tah-sis", "Permanent widening of the bronchi with weakened walls and mucus buildup (-ectasis = dilation).", "گشادی نایژه (برونشکتازی)", "ds", "dz", []],
["bronchiole", "BRONG-kee-ohl", "Smallest branch of the bronchial tree, ending in the alveoli (bronchiol/o = bronchiole).", "نایژک (برونشیول)", "lo", "body", []],
["bronchiolitis", "brong-kee-oh-LYE-tis", "Inflammation of the bronchioles, common in infants.", "التهاب نایژک", "lo", "dz", []],
["bronchitis", "brong-KYE-tis", "Inflammation of the bronchi (bronch/o = bronchus, -itis = inflammation).", "التهاب نایژه (برونشیت)", "lx", "dz", []],
["bronchodilator", "brong-koh-DYE-lay-tor", "Medicine that relaxes the bronchial muscles and widens the airways, as in an asthma attack.", "گشادکننده نایژه", "tx", "tx", []],
["bronchogenic carcinoma", "brong-koh-JEN-ik kar-sih-NOH-mah", "Lung cancer that starts in the bronchi; strongly linked to smoking.", "سرطان ریه (برونکوژنیک)", "ds", "dz", []],
["bronchopneumonia", "brong-koh-noo-MOH-nee-ah", "Pneumonia in patches around the bronchioles.", "برونکوپنومونی", "ds", "dz", []],
["bronchoscope", "BRONG-koh-skohp", "Lighted, flexible tube used to view the bronchi and take samples.", "برونکوسکوپ", "tx", "lab", []],
["bronchoscopy", "brong-KOS-koh-pee", "Visual examination of the bronchi with a bronchoscope passed through the mouth or nose.", "برونکوسکوپی", "tx", "lab", ["Bronch"]],
["bronchospasm", "BRONG-koh-spazm", "Sudden narrowing of the bronchi from contraction of their smooth muscle, as in asthma.", "اسپاسم نایژه", "lo", "sx", []],
["bronchus", "BRONG-kus", "One of the two main branches of the trachea that enter the lungs (plural: bronchi) (bronch/o, bronchi/o = bronchus).", "نایژه (برونش)", "lo", "body", []],
["carbon dioxide", "KAR-bon dye-OK-side", "Waste gas made by the cells and breathed out through the lungs (capn/o = carbon dioxide).", "دی‌اکسید کربن", "lx", "phys", ["CO2"]],
["cardiopulmonary", "kar-dee-oh-PUL-moh-nair-ee", "Pertaining to the heart and lungs (cardi/o = heart, pulmon/o = lung).", "قلبی-ریوی", "lx", "body", ["CPR"]],
["cardiopulmonary resuscitation", "kar-dee-oh-PUL-moh-nair-ee ree-sus-ih-TAY-shun", "Emergency chest compressions and rescue breathing when the heart and breathing stop.", "احیای قلبی-ریوی", "tx", "tx", ["CPR"]],
["carina", "kah-RYE-nah", "Ridge where the trachea divides into the right and left main bronchi.", "کارینا (محل دوشاخه شدن نای)", "lo", "body", []],
["chest X-ray", "chest EKS-ray", "Radiograph of the chest that shows the lungs, heart and ribs.", "عکس قفسه سینه", "tx", "lab", ["CXR"]],
["Cheyne-Stokes respiration", "chayn stohks res-pih-RAY-shun", "Breathing pattern with cycles of deep, rapid breaths followed by periods of apnea; seen near death or in brain injury.", "تنفس شاین-استوکس", "br", "sx", []],
["chronic bronchitis", "KRON-ik brong-KYE-tis", "Long-term inflammation of the bronchi with a productive cough for months each year.", "برونشیت مزمن", "ds", "dz", ["COPD"]],
["chronic obstructive pulmonary disease", "KRON-ik ob-STRUK-tiv PUL-moh-nair-ee dih-ZEEZ", "Progressive lung disease, mainly emphysema and chronic bronchitis, usually from smoking, that blocks airflow out of the lungs.", "بیماری انسدادی مزمن ریه", "ds", "dz", ["COPD"]],
["cilia", "SIL-ee-ah", "Tiny hairlike projections on the lining of the airways that sweep mucus and trapped particles out.", "مژک‌ها", "up", "body", []],
["clubbing", "KLUB-ing", "Widening and rounding of the fingertips from chronic lack of oxygen.", "چماقی شدن انگشتان", "br", "sx", []],
["continuous positive airway pressure", "kon-TIN-yoo-us POZ-ih-tiv AIR-way PRESH-er", "Machine that blows air through a mask to keep the airway open during sleep; treats sleep apnea.", "فشار مثبت مداوم راه هوایی", "tx", "tx", ["CPAP"]],
["cor pulmonale", "kor pul-moh-NAY-lee", "Enlargement and failure of the right side of the heart from chronic lung disease.", "قلب ریوی", "ds", "dz", []],
["coryza", "koh-RYE-zah", "The common cold; inflammation of the nasal mucous membrane with runny nose.", "سرماخوردگی (زکام)", "up", "dz", []],
["cough", "kawf", "Sudden, forceful expulsion of air from the lungs.", "سرفه", "br", "sx", []],
["croup", "kroop", "Viral infection of the larynx and trachea in young children with a barking cough and stridor.", "خروسک", "up", "dz", []],
["cyanosis", "sye-ah-NOH-sis", "Bluish color of the skin, lips and nail beds from too little oxygen in the blood (cyan/o = blue).", "کبودی (سیانوز)", "br", "sx", []],
["cystic fibrosis", "SIS-tik fye-BROH-sis", "Inherited disease in which thick, sticky mucus blocks the lungs and pancreas, causing repeated infections.", "فیبروز سیستیک", "ds", "dz", ["CF"]],
["decongestant", "dee-kon-JES-tant", "Medicine that reduces swelling of the nasal mucous membrane.", "ضداحتقان", "tx", "tx", []],
["deviated septum", "DEE-vee-ay-ted SEP-tum", "Nasal septum that is bent to one side and may block airflow.", "انحراف تیغه بینی", "up", "dz", []],
["diaphragm", "DYE-ah-fram", "Dome-shaped muscle under the lungs; it contracts and flattens during inspiration (phren/o, diaphragmat/o = diaphragm).", "پرده دیافراگم", "lo", "body", []],
["diphtheria", "dif-THEER-ee-ah", "Bacterial infection of the throat that forms a thick membrane which can block the airway.", "دیفتری", "ds", "dz", ["DPT"]],
["dysphonia", "dis-FOH-nee-ah", "Difficulty speaking or hoarse voice (dys- = difficult, phon/o = voice).", "اختلال صدا (دیسفونی)", "up", "sx", []],
["dyspnea", "DISP-nee-ah", "Difficult or labored breathing; shortness of breath (dys- = difficult).", "تنگی نفس", "br", "sx", ["SOB", "DOE"]],
["emphysema", "em-fih-SEE-mah", "Disease in which the alveolar walls are destroyed and the air sacs enlarge, trapping air and reducing gas exchange.", "آمفیزم", "ds", "dz", ["COPD"]],
["endotracheal intubation", "en-doh-TRAY-kee-al in-too-BAY-shun", "Passing a tube through the mouth or nose into the trachea to keep the airway open (endo- = within).", "لوله‌گذاری داخل نای (اینتوباسیون)", "tx", "tx", ["ET"]],
["epiglottis", "ep-ih-GLOT-is", "Flap of cartilage that covers the larynx during swallowing so food does not enter the airway (epiglott/o = epiglottis).", "اپی‌گلوت (برچاکنای)", "up", "body", []],
["epiglottitis", "ep-ih-glot-EYE-tis", "Inflammation of the epiglottis; it can swell and block the airway, especially in children.", "التهاب اپی‌گلوت", "up", "dz", []],
["epistaxis", "ep-ih-STAK-sis", "Nosebleed; also called rhinorrhagia.", "خون‌دماغ", "up", "sx", []],
["ethmoid sinus", "ETH-moyd SYE-nus", "Group of small air cells in the ethmoid bone between the eyes.", "سینوس اتموئید", "up", "body", []],
["eupnea", "yoop-NEE-ah", "Normal, easy breathing (eu- = good, normal, -pnea = breathing).", "تنفس طبیعی", "br", "phys", []],
["exhalation", "eks-hah-LAY-shun", "Letting air out of the lungs; expiration.", "بازدم", "lx", "phys", []],
["expectorant", "ek-SPEK-toh-rant", "Medicine that thins mucus so it can be coughed up more easily.", "خلط‌آور", "tx", "tx", []],
["expectoration", "ek-spek-toh-RAY-shun", "Coughing up and spitting out sputum.", "خلط آوردن", "br", "sx", []],
["expiration", "eks-pih-RAY-shun", "Breathing out; also called exhalation (ex- = out, spir/o = to breathe).", "بازدم (اکسپیراسیون)", "lx", "phys", []],
["expiratory reserve volume", "eks-PY-rah-tor-ee reh-ZERV VOL-yoom", "Extra air that can be exhaled after a normal breath out.", "حجم ذخیره بازدمی", "br", "phys", ["ERV"]],
["external respiration", "eks-TER-nal res-pih-RAY-shun", "Exchange of oxygen and carbon dioxide between the air in the alveoli and the blood in the pulmonary capillaries.", "تنفس خارجی (تبادل در ریه)", "lx", "phys", []],
["forced expiratory volume in one second", "forst eks-PY-rah-tor-ee VOL-yoom", "Amount of air forcefully exhaled in the first second; reduced in airway obstruction such as asthma and COPD.", "حجم بازدمی با فشار در ثانیه اول", "br", "phys", ["FEV1"]],
["forced vital capacity", "forst VYE-tal kah-PAS-ih-tee", "Total amount of air breathed out as forcefully and quickly as possible after a deep breath.", "ظرفیت حیاتی با فشار", "br", "phys", ["FVC"]],
["frontal sinus", "FRUN-tal SYE-nus", "Paranasal sinus in the frontal bone above the eyes.", "سینوس پیشانی", "up", "body", []],
["functional residual capacity", "FUNK-shun-al reh-ZID-yoo-al kah-PAS-ih-tee", "Air remaining in the lungs after a normal exhalation (ERV + RV).", "ظرفیت باقیمانده عملی", "br", "phys", ["FRC"]],
["glottis", "GLOT-is", "The vocal cords and the opening between them.", "گلوت (چاکنای)", "up", "body", []],
["Heimlich maneuver", "HYME-lik mah-NOO-ver", "Quick upward abdominal thrusts to force out an object blocking the airway.", "مانور هایملیک", "tx", "tx", []],
["hemithorax", "hem-ee-THOH-raks", "One side (half) of the chest (hemi- = half).", "نیمه قفسه سینه", "lo", "body", []],
["hemoptysis", "hee-MOP-tih-sis", "Coughing up blood from the lungs (hem/o = blood, -ptysis = spitting).", "خلط خونی (هموپتزی)", "br", "sx", []],
["hemothorax", "hee-moh-THOH-raks", "Blood in the pleural cavity.", "هموتوراکس (خون در فضای جنب)", "ds", "dz", []],
["hilum", "HYE-lum", "Area on the inner surface of the lung where bronchi, blood vessels and nerves enter.", "ناف ریه (هیلوم)", "lo", "body", []],
["hypercapnia", "hye-per-KAP-nee-ah", "Too much carbon dioxide in the blood (capn/o = carbon dioxide).", "افزایش دی‌اکسید کربن خون", "br", "sx", []],
["hyperpnea", "hye-perp-NEE-ah", "Abnormally deep breathing (hyper- = excessive).", "تنفس عمیق", "br", "sx", []],
["hyperventilation", "hye-per-ven-tih-LAY-shun", "Excessive breathing that lowers carbon dioxide in the blood.", "تنفس بیش از حد (هایپرونتیلاسیون)", "br", "sx", []],
["hypopnea", "hye-POP-nee-ah", "Abnormally shallow breathing (hypo- = deficient).", "تنفس سطحی", "br", "sx", []],
["hypoventilation", "hye-poh-ven-tih-LAY-shun", "Too little breathing, so carbon dioxide builds up in the blood.", "تنفس ناکافی", "br", "sx", []],
["hypoxemia", "hye-pok-SEE-mee-ah", "Too little oxygen in the blood (-emia = blood condition).", "کمبود اکسیژن خون (هیپوکسمی)", "br", "sx", ["ABGs"]],
["hypoxia", "hye-POK-see-ah", "Too little oxygen in the body tissues (hypo- = deficient, ox/o = oxygen).", "کمبود اکسیژن بافت (هیپوکسی)", "br", "sx", []],
["influenza", "in-floo-EN-zah", "Contagious viral infection of the respiratory tract with fever, aches and cough.", "آنفلوآنزا", "ds", "dz", ["flu"]],
["inhalation", "in-hah-LAY-shun", "Drawing air into the lungs; inspiration.", "دم", "lx", "phys", []],
["inhaled corticosteroid", "in-HAYLD kor-tih-koh-STAIR-oyd", "Anti-inflammatory medicine breathed into the lungs to prevent asthma attacks.", "کورتیکواستروئید استنشاقی", "tx", "tx", []],
["inspiration", "in-spih-RAY-shun", "Breathing in; also called inhalation (in- = in, spir/o = to breathe).", "دم (اینسپیراسیون)", "lx", "phys", []],
["inspiratory capacity", "in-SPY-rah-tor-ee kah-PAS-ih-tee", "Largest amount of air that can be inhaled after a normal exhalation (TV + IRV).", "ظرفیت دمی", "br", "phys", ["IC"]],
["inspiratory reserve volume", "in-SPY-rah-tor-ee reh-ZERV VOL-yoom", "Extra air that can be inhaled after a normal breath in.", "حجم ذخیره دمی", "br", "phys", ["IRV"]],
["intercostal muscles", "in-ter-KOS-tal MUS-elz", "Muscles between the ribs that help expand and compress the chest during breathing.", "عضلات بین‌دنده‌ای", "lo", "body", []],
["intermittent positive pressure breathing", "in-ter-MIT-ent POZ-ih-tiv PRESH-er BREE-thing", "Treatment that delivers air or medicine under pressure to help expand the lungs.", "تنفس با فشار مثبت متناوب", "tx", "tx", ["IPPB"]],
["internal respiration", "in-TER-nal res-pih-RAY-shun", "Exchange of oxygen and carbon dioxide between the blood and the body cells.", "تنفس داخلی (تبادل در بافت)", "lx", "phys", []],
["intrapleural", "in-trah-PLOO-ral", "Pertaining to within the pleural cavity (intra- = within).", "درون‌جنبی", "lo", "body", []],
["laryngectomy", "lair-in-JEK-toh-mee", "Surgical removal of the larynx, usually for cancer.", "برداشتن حنجره", "up", "tx", []],
["laryngitis", "lair-in-JYE-tis", "Inflammation of the larynx, often with hoarseness or loss of voice.", "التهاب حنجره (لارنژیت)", "up", "dz", []],
["laryngopharynx", "lah-ring-goh-FAIR-inks", "Lowest part of the pharynx, which opens into the larynx and esophagus.", "حلق حنجره‌ای", "up", "body", []],
["laryngoscopy", "lair-in-GOS-koh-pee", "Visual examination of the larynx with a laryngoscope (-scopy = visual examination).", "حنجره‌بینی (لارنگوسکوپی)", "up", "lab", []],
["laryngospasm", "lah-RING-goh-spazm", "Sudden spasm of the larynx that closes the airway (-spasm = sudden involuntary contraction).", "اسپاسم حنجره", "up", "sx", []],
["larynx", "LAIR-inks", "The voice box; passage between the pharynx and the trachea that contains the vocal cords (laryng/o = larynx).", "حنجره", "up", "body", []],
["lobar pneumonia", "LOH-bar noo-MOH-nee-ah", "Pneumonia that involves an entire lobe of a lung.", "پنومونی لوبی", "ds", "dz", []],
["lobe", "lohb", "Major division of a lung; the right lung has three lobes and the left lung two (lob/o = lobe).", "لوب ریه", "lo", "body", ["RUL", "RML", "RLL", "LUL", "LLL"]],
["lobectomy", "loh-BEK-toh-mee", "Surgical removal of a lobe of a lung.", "برداشتن لوب ریه", "tx", "tx", []],
["lower respiratory tract", "LOH-er RES-pih-rah-tor-ee trakt", "The trachea, bronchi, bronchioles, alveoli and lungs.", "مجرای تنفسی تحتانی", "lx", "body", []],
["lung abscess", "lung AB-ses", "Collection of pus in a cavity in the lung.", "آبسه ریه", "ds", "dz", []],
["lungs", "lungz", "The two main organs of breathing in the thoracic cavity (pulmon/o, pneum/o, pneumon/o = lung, air).", "ریه‌ها", "lo", "body", []],
["maxillary sinus", "MAK-sih-lair-ee SYE-nus", "Largest paranasal sinus, in the maxilla below the eyes.", "سینوس فک بالا (ماگزیلاری)", "up", "body", []],
["mechanical ventilation", "meh-KAN-ih-kal ven-tih-LAY-shun", "Breathing support by a machine (ventilator) that pushes air into the lungs.", "تهویه مکانیکی", "tx", "tx", []],
["mediastinal", "mee-dee-ah-STYE-nal", "Pertaining to the mediastinum.", "میان‌سینه‌ای", "lo", "body", []],
["mediastinoscopy", "mee-dee-ah-stye-NOS-koh-pee", "Visual examination of the mediastinum through a small incision.", "مدیاستینوسکوپی", "tx", "lab", []],
["mediastinum", "mee-dee-ah-STYE-num", "Space between the lungs that contains the heart, trachea, esophagus and large vessels (mediastin/o = mediastinum).", "میان‌سینه (مدیاستن)", "lo", "body", []],
["mesothelioma", "mez-oh-thee-lee-OH-mah", "Rare cancer of the pleura, usually from asbestos exposure.", "مزوتلیوما (سرطان پرده جنب)", "ds", "dz", []],
["metered-dose inhaler", "MEE-terd dohs in-HAY-ler", "Handheld device that delivers a measured dose of inhaled medicine.", "اسپری استنشاقی (افشانه)", "tx", "tx", ["MDI"]],
["Middle East respiratory syndrome", "MID-l eest RES-pih-rah-tor-ee SIN-drohm", "Viral respiratory illness caused by a coronavirus, first reported in the Middle East.", "سندروم تنفسی خاورمیانه", "ds", "dz", ["MERS"]],
["mucolytic", "myoo-koh-LIT-ik", "Medicine that breaks down and liquefies mucus (muc/o = mucus, -lytic = breaking down).", "مخاط‌شکن (موکولیتیک)", "tx", "tx", []],
["mucous membrane", "MYOO-kus MEM-brayn", "Lining of the airways that secretes mucus.", "غشای مخاطی", "up", "body", []],
["mucus", "MYOO-kus", "Sticky fluid secreted by mucous membranes that traps dust and germs (muc/o = mucus).", "مخاط (موکوس)", "up", "phys", []],
["nares", "NAIR-eez", "The nostrils; external openings of the nose (singular: naris).", "سوراخ‌های بینی", "up", "body", []],
["nasal cannula", "NAY-zal KAN-yoo-lah", "Two-pronged plastic tube placed in the nostrils to give oxygen.", "کانولای بینی", "tx", "tx", []],
["nasal cavity", "NAY-zal KAV-ih-tee", "Space inside the nose, divided by the nasal septum and lined with mucous membrane and cilia.", "حفره بینی", "up", "body", []],
["nasal polyps", "NAY-zal POL-ips", "Soft, benign growths of the nasal mucous membrane that may block the airway.", "پولیپ بینی", "up", "dz", []],
["nasal septum", "NAY-zal SEP-tum", "Wall of cartilage and bone that divides the nasal cavity into right and left halves (sept/o = septum).", "تیغه بینی", "up", "body", []],
["nasopharynx", "nay-zoh-FAIR-inks", "Upper part of the pharynx, behind the nose; contains the adenoids.", "حلق بینی", "up", "body", []],
["nebulizer", "NEB-yoo-lye-zer", "Device that turns liquid medicine into a fine mist to be inhaled.", "نبولایزر (دستگاه بخور دارویی)", "tx", "tx", ["NMT"]],
["nonproductive cough", "non-proh-DUK-tiv kawf", "Dry cough that brings up no sputum.", "سرفه خشک", "br", "sx", []],
["nose", "nohz", "Organ that warms, moistens and filters inhaled air and contains the sense of smell (nas/o, rhin/o = nose).", "بینی", "up", "body", []],
["obstructive sleep apnea", "ob-STRUK-tiv sleep AP-nee-ah", "Repeated pauses in breathing during sleep because the throat closes; causes snoring and daytime sleepiness.", "آپنه انسدادی خواب", "ds", "dz", ["OSA", "CPAP"]],
["oropharynx", "or-oh-FAIR-inks", "Middle part of the pharynx, behind the mouth; contains the palatine tonsils (or/o = mouth).", "حلق دهانی", "up", "body", []],
["orthopnea", "or-THOP-nee-ah", "Difficulty breathing except in an upright, sitting position (orth/o = straight, upright).", "تنگی نفس در حالت خوابیده (ارتوپنه)", "br", "sx", []],
["otorhinolaryngologist", "oh-toh-rye-noh-lair-in-GOL-oh-jist", "Physician who treats disorders of the ear, nose and throat (ot/o = ear, rhin/o = nose, laryng/o = larynx).", "متخصص گوش، حلق و بینی", "lx", "field", ["ENT"]],
["oximeter", "ok-SIM-eh-ter", "Instrument that measures oxygen saturation of the blood.", "اکسیمتر", "tx", "lab", []],
["oxygen", "OK-sih-jen", "Gas taken in by breathing and carried by the blood to every cell (ox/o, oxi = oxygen).", "اکسیژن", "lx", "phys", ["O2"]],
["oxygen therapy", "OK-sih-jen THAIR-ah-pee", "Giving extra oxygen through a nasal cannula, mask or ventilator.", "اکسیژن‌درمانی", "tx", "tx", ["O2"]],
["palatine tonsils", "PAL-ah-tine TON-silz", "Pair of lymphatic tissue masses at the back of the mouth that help fight infection (tonsill/o = tonsils).", "لوزه‌های کامی", "up", "body", []],
["paranasal sinuses", "pair-ah-NAY-zal SYE-nus-ez", "Air-filled cavities in the skull bones around the nose (frontal, maxillary, ethmoid, sphenoid) that lighten the skull and give resonance to the voice (sinus/o = sinus).", "سینوس‌های اطراف بینی", "up", "body", []],
["parietal pleura", "pah-RYE-eh-tal PLOO-rah", "Outer layer of the pleura that lines the chest wall.", "پرده جنب جداری", "lo", "body", []],
["peak flow meter", "peek floh MEE-ter", "Small handheld device that measures the fastest rate of exhaled air; used to monitor asthma.", "اوج‌جریان‌سنج (پیک‌فلومتر)", "tx", "lab", ["PEFR"]],
["percussion", "per-KUSH-un", "Tapping on the body surface to judge what lies beneath by the sound produced.", "دق (ضربه زدن)", "br", "lab", []],
["pertussis", "per-TUS-is", "Whooping cough; bacterial infection with spasms of coughing that end in a whooping inspiration.", "سیاه‌سرفه", "ds", "dz", ["DPT"]],
["pharyngitis", "fair-in-JYE-tis", "Inflammation of the pharynx; sore throat.", "التهاب حلق (فارنژیت)", "up", "dz", []],
["pharynx", "FAIR-inks", "The throat; passage for both air and food, divided into nasopharynx, oropharynx and laryngopharynx (pharyng/o = pharynx).", "حلق", "up", "body", []],
["phlegm", "flem", "Thick mucus secreted by the airways.", "بلغم", "br", "sx", []],
["phrenic", "FREN-ik", "Pertaining to the diaphragm.", "دیافراگمی", "lo", "body", []],
["phrenic nerve", "FREN-ik nerv", "Nerve that controls the diaphragm (phren/o = diaphragm).", "عصب فرنیک", "lo", "body", []],
["pleura", "PLOO-rah", "Double membrane that covers the lungs and lines the chest wall (pleur/o = pleura).", "پرده جنب (پلور)", "lo", "body", []],
["pleural", "PLOO-ral", "Pertaining to the pleura.", "جنبی", "lo", "body", []],
["pleural cavity", "PLOO-ral KAV-ih-tee", "Thin space between the visceral and parietal pleura, containing a little lubricating fluid.", "فضای جنب", "lo", "body", []],
["pleural effusion", "PLOO-ral eh-FYOO-zhun", "Abnormal collection of fluid in the pleural cavity.", "افیوژن جنب (مایع در فضای جنب)", "ds", "dz", []],
["pleural rub", "PLOO-ral rub", "Grating sound made by inflamed pleural layers rubbing together; also called friction rub.", "صدای مالش پرده جنب", "br", "sx", []],
["pleurectomy", "ploo-REK-toh-mee", "Surgical removal of part of the pleura.", "برداشتن پرده جنب", "tx", "tx", []],
["pleurisy", "PLOOR-ih-see", "Inflammation of the pleura, causing sharp pain on breathing; also called pleuritis.", "التهاب پرده جنب (پلوریت)", "ds", "dz", []],
["pleurodynia", "ploo-roh-DIN-ee-ah", "Pain in the chest wall muscles or pleura (-dynia = pain).", "درد پرده جنب", "br", "sx", []],
["pneumoconiosis", "noo-moh-koh-nee-OH-sis", "Lung disease from inhaling dust, such as coal dust (anthracosis), asbestos (asbestosis) or silica (silicosis) (coni/o = dust).", "بیماری غباری ریه (پنوموکونیوز)", "ds", "dz", []],
["pneumonectomy", "noo-moh-NEK-toh-mee", "Surgical removal of an entire lung.", "برداشتن کامل ریه", "tx", "tx", []],
["pneumonia", "noo-MOH-nee-ah", "Inflammation and infection of the lung in which the alveoli fill with fluid and pus (pneumon/o = lung).", "ذات‌الریه (پنومونی)", "ds", "dz", ["CXR"]],
["pneumonitis", "noo-moh-NYE-tis", "Inflammation of the lung tissue (pneumon/o = lung).", "التهاب ریه (پنومونیت)", "lx", "dz", []],
["pneumonomycosis", "noo-moh-noh-my-KOH-sis", "Fungal infection of the lungs (myc/o = fungus).", "عفونت قارچی ریه", "ds", "dz", []],
["pneumothorax", "noo-moh-THOH-raks", "Air in the pleural cavity that causes the lung to collapse (pneum/o = air, thorac/o = chest).", "پنوموتوراکس (هوا در فضای جنب)", "ds", "dz", []],
["polypectomy", "pol-ih-PEK-toh-mee", "Surgical removal of a polyp.", "برداشتن پولیپ", "up", "tx", []],
["polysomnography", "pol-ee-som-NOG-rah-fee", "Sleep study that records breathing, oxygen level, brain waves and movements during sleep (somn/o = sleep).", "مطالعه خواب (پلی‌سومنوگرافی)", "tx", "lab", ["OSA"]],
["postural drainage", "POS-cher-al DRAY-nij", "Positioning the patient so gravity helps drain mucus from the lungs.", "تخلیه وضعیتی", "tx", "tx", []],
["productive cough", "proh-DUK-tiv kawf", "Cough that brings up sputum.", "سرفه خلط‌دار", "br", "sx", []],
["pulmonary", "PUL-moh-nair-ee", "Pertaining to the lungs (pulmon/o = lung, -ary = pertaining to).", "ریوی", "lx", "body", []],
["pulmonary capillaries", "PUL-moh-nair-ee KAP-ih-lair-eez", "Tiny blood vessels around the alveoli where oxygen enters and carbon dioxide leaves the blood.", "مویرگ‌های ریوی", "lo", "body", []],
["pulmonary edema", "PUL-moh-nair-ee eh-DEE-mah", "Fluid in the lung tissue and alveoli, often from heart failure.", "ادم ریه", "ds", "dz", []],
["pulmonary embolism", "PUL-moh-nair-ee EM-boh-lizm", "Blockage of a pulmonary artery by a blood clot, usually from the leg veins.", "آمبولی ریه", "ds", "dz", ["PE"]],
["pulmonary fibrosis", "PUL-moh-nair-ee fye-BROH-sis", "Scarring and thickening of lung tissue that makes the lungs stiff.", "فیبروز ریه", "ds", "dz", []],
["pulmonary function test", "PUL-moh-nair-ee FUNK-shun test", "Group of breathing tests that measure lung volumes and airflow.", "آزمون عملکرد ریه", "tx", "lab", ["PFT"]],
["pulmonologist", "pul-mon-OL-oh-jist", "Physician who specializes in diseases of the lungs and airways.", "متخصص ریه", "lx", "field", []],
["pulmonology", "pul-mon-OL-oh-jee", "Branch of medicine that diagnoses and treats diseases of the lungs and airways; also called pulmonary medicine (pulmon/o = lung).", "ریه‌شناسی (پالمونولوژی)", "lx", "field", []],
["pulse oximetry", "puls ok-SIM-eh-tree", "Measurement of the oxygen saturation of the blood with a sensor clipped to a finger (ox/i = oxygen, -metry = measurement).", "پالس‌اکسیمتری", "tx", "lab", []],
["purulent", "PYOOR-yoo-lent", "Containing pus; purulent sputum is yellow or green.", "چرکی", "br", "sx", []],
["pyothorax", "pye-oh-THOH-raks", "Pus in the pleural cavity; also called empyema (py/o = pus).", "چرک در فضای جنب (آمپیم)", "ds", "dz", []],
["rales", "rahlz", "Fine crackling sounds heard on inspiration, from fluid in the alveoli; also called crackles.", "کراکل (رال)", "br", "sx", []],
["residual volume", "reh-ZID-yoo-al VOL-yoom", "Air left in the lungs after the most forceful exhalation.", "حجم باقیمانده", "br", "phys", ["RV"]],
["respiration", "res-pih-RAY-shun", "The process of breathing and of exchanging oxygen and carbon dioxide between the air, the blood and the body cells.", "تنفس", "lx", "phys", ["R"]],
["respiratory", "RES-pih-rah-tor-ee", "Pertaining to breathing (spir/o = to breathe).", "تنفسی", "lx", "phys", []],
["respiratory distress syndrome", "RES-pih-rah-tor-ee dih-STRES SIN-drohm", "Breathing failure in premature newborns from lack of surfactant; also called hyaline membrane disease.", "سندروم دیسترس تنفسی نوزاد", "ds", "dz", ["RDS", "IRDS", "HMD"]],
["respiratory rate", "RES-pih-rah-tor-ee rayt", "Number of breaths per minute; about 12 to 20 in a resting adult.", "تعداد تنفس در دقیقه", "br", "phys", ["R", "TPR"]],
["respiratory system", "RES-pih-rah-tor-ee SIS-tem", "The organs that bring air into and out of the lungs and exchange oxygen and carbon dioxide: nose, pharynx, larynx, trachea, bronchi and lungs.", "دستگاه تنفس", "lx", "body", []],
["respiratory therapist", "RES-pih-rah-tor-ee THAIR-ah-pist", "Health professional who treats breathing disorders with oxygen, inhaled medicines, breathing exercises and ventilators.", "درمانگر تنفسی", "lx", "field", ["RRT"]],
["respiratory tract", "RES-pih-rah-tor-ee trakt", "The passageway for air from the nose to the alveoli, divided into an upper and a lower tract.", "مجرای تنفسی", "lx", "body", []],
["rhinitis", "rye-NYE-tis", "Inflammation of the mucous membrane of the nose (rhin/o = nose).", "التهاب بینی (رینیت)", "lx", "dz", []],
["rhinoplasty", "RYE-noh-plas-tee", "Surgical repair or reshaping of the nose (-plasty = surgical repair).", "جراحی ترمیمی بینی (رینوپلاستی)", "up", "tx", []],
["rhinorrhea", "rye-noh-REE-ah", "Discharge from the nose; runny nose (rhin/o = nose, -rrhea = flow, discharge).", "آبریزش بینی", "up", "sx", []],
["rhonchi", "RONG-kye", "Low-pitched rattling or snoring sounds from mucus in the larger airways.", "رونکای", "br", "sx", []],
["septoplasty", "SEP-toh-plas-tee", "Surgical repair of a deviated nasal septum.", "جراحی تیغه بینی", "up", "tx", ["SMR"]],
["severe acute respiratory syndrome", "seh-VEER ah-KYOOT RES-pih-rah-tor-ee SIN-drohm", "Serious viral pneumonia caused by a coronavirus.", "سندروم حاد تنفسی شدید", "ds", "dz", ["SARS"]],
["shortness of breath", "SHORT-nes ov breth", "The feeling of not getting enough air; dyspnea.", "کوتاهی نفس", "br", "sx", ["SOB"]],
["silicosis", "sil-ih-KOH-sis", "Lung disease from inhaling silica (stone) dust.", "سیلیکوز", "ds", "dz", []],
["singultus", "sing-GUL-tus", "Hiccup; involuntary spasm of the diaphragm.", "سکسکه", "br", "sx", []],
["sinusitis", "sye-nus-EYE-tis", "Inflammation of the paranasal sinuses.", "التهاب سینوس (سینوزیت)", "up", "dz", []],
["sphenoid sinus", "SFEE-noyd SYE-nus", "Paranasal sinus in the sphenoid bone behind the nasal cavity.", "سینوس اسفنوئید", "up", "body", []],
["spirometer", "spy-ROM-eh-ter", "Instrument that measures the volume of air breathed in and out (-meter = instrument to measure).", "اسپیرومتر (تنفس‌سنج)", "tx", "lab", []],
["spirometry", "spy-ROM-eh-tree", "Measurement of breathing volumes and airflow with a spirometer (spir/o = to breathe, -metry = measurement).", "اسپیرومتری (تنفس‌سنجی)", "tx", "lab", ["PFT", "FVC", "FEV1"]],
["sputum", "SPYOO-tum", "Mucus or phlegm coughed up from the lungs.", "خلط", "br", "sx", []],
["sputum culture", "SPYOO-tum KUL-cher", "Growing microorganisms from a sputum sample to identify an infection; often with sensitivity testing.", "کشت خلط", "tx", "lab", ["C&S"]],
["stridor", "STRYE-dor", "Harsh, high-pitched sound on inspiration from a blocked upper airway (larynx or trachea).", "استریدور (صدای خشن دم)", "br", "sx", []],
["sudden infant death syndrome", "SUD-en IN-fant deth SIN-drohm", "Unexplained death of an apparently healthy infant during sleep.", "سندروم مرگ ناگهانی شیرخوار", "ds", "dz", ["SIDS"]],
["supplemental oxygen", "sup-leh-MEN-tal OK-sih-jen", "Oxygen given in addition to room air.", "اکسیژن کمکی", "tx", "tx", ["RA", "O2"]],
["surfactant", "ser-FAK-tant", "Substance that lines the alveoli and keeps them from collapsing; premature babies may lack it.", "سورفکتانت", "lo", "phys", []],
["sweat test", "swet test", "Test that measures salt in sweat to diagnose cystic fibrosis.", "تست عرق", "tx", "lab", ["CF"]],
["tachypnea", "tak-ip-NEE-ah", "Abnormally rapid breathing (tachy- = rapid).", "تنفس تند", "br", "sx", []],
["thoracalgia", "thoh-rah-KAL-jee-ah", "Chest pain (thorac/o = chest, -algia = pain).", "درد قفسه سینه", "br", "sx", []],
["thoracentesis", "thoh-rah-sen-TEE-sis", "Surgical puncture of the chest wall with a needle to remove fluid from the pleural cavity (-centesis = surgical puncture).", "کشیدن مایع جنب (توراسنتز)", "tx", "lab", []],
["thoracic cavity", "thoh-RAS-ik KAV-ih-tee", "The chest cavity, which holds the lungs, heart and mediastinum (thorac/o = chest).", "حفره قفسه سینه", "lo", "body", []],
["thoracoscopy", "thoh-rah-KOS-koh-pee", "Visual examination of the chest cavity with a scope.", "توراکوسکوپی", "tx", "lab", []],
["thoracostomy", "thoh-rah-KOS-toh-mee", "Surgical opening into the chest to insert a chest tube for drainage of air, blood or fluid.", "گذاشتن لوله سینه (توراکوستومی)", "tx", "tx", []],
["thoracotomy", "thoh-rah-KOT-oh-mee", "Surgical incision into the chest wall.", "برش قفسه سینه (توراکوتومی)", "tx", "tx", []],
["thorax", "THOH-raks", "The chest (thorac/o, pector/o, steth/o = chest).", "قفسه سینه", "lo", "body", []],
["throat culture", "throht KUL-cher", "Swabbing the throat to grow and identify bacteria, such as streptococcus.", "کشت گلو", "tx", "lab", []],
["thyroid cartilage", "THY-royd KAR-tih-lij", "Largest cartilage of the larynx; it forms the Adam's apple.", "غضروف تیروئید (سیب آدم)", "up", "body", []],
["tidal volume", "TYE-dal VOL-yoom", "Amount of air breathed in or out in one normal, quiet breath.", "حجم جاری", "br", "phys", ["TV"]],
["tonsillectomy", "ton-sih-LEK-toh-mee", "Surgical removal of the tonsils.", "برداشتن لوزه", "up", "tx", []],
["tonsillitis", "ton-sih-LYE-tis", "Inflammation of the tonsils.", "التهاب لوزه", "up", "dz", []],
["total lung capacity", "TOH-tal lung kah-PAS-ih-tee", "Total amount of air the lungs can hold after a maximal inspiration.", "ظرفیت کل ریه", "br", "phys", ["TLC"]],
["trachea", "TRAY-kee-ah", "The windpipe; tube held open by C-shaped rings of cartilage, from the larynx to the bronchi (trache/o = trachea).", "نای", "lo", "body", []],
["tracheal", "TRAY-kee-al", "Pertaining to the trachea.", "نایی", "lo", "body", []],
["tracheitis", "tray-kee-EYE-tis", "Inflammation of the trachea (trache/o = trachea).", "التهاب نای", "lx", "dz", []],
["tracheomalacia", "tray-kee-oh-mah-LAY-shee-ah", "Softening of the cartilage of the trachea, so the airway collapses (-malacia = softening).", "نرمی نای", "lo", "dz", []],
["tracheostomy", "tray-kee-OS-toh-mee", "Surgical opening into the trachea through the neck, with a tube to keep it open (-stomy = new opening).", "تراکئوستومی", "tx", "tx", []],
["tracheotomy", "tray-kee-OT-oh-mee", "Surgical incision into the trachea (-tomy = cutting into).", "برش نای (تراکئوتومی)", "tx", "tx", []],
["tuberculin skin test", "too-BER-kyoo-lin skin test", "Intradermal injection of PPD to screen for tuberculosis; also called Mantoux test.", "تست پوستی سل (مانتو)", "tx", "lab", ["PPD"]],
["tuberculosis", "too-ber-kyoo-LOH-sis", "Contagious bacterial infection, mainly of the lungs, caused by Mycobacterium tuberculosis.", "سل", "ds", "dz", ["TB", "PPD"]],
["upper respiratory infection", "UP-er RES-pih-rah-tor-ee in-FEK-shun", "Infection of the nose, sinuses or throat, such as the common cold.", "عفونت دستگاه تنفس فوقانی", "up", "dz", ["URI"]],
["upper respiratory tract", "UP-er RES-pih-rah-tor-ee trakt", "The nose, nasal cavity, paranasal sinuses, pharynx and larynx.", "مجرای تنفسی فوقانی", "lx", "body", ["URI"]],
["uvula", "YOO-vyoo-lah", "Small, fleshy tissue hanging from the soft palate at the back of the mouth.", "زبان کوچک", "up", "body", []],
["uvulopalatopharyngoplasty", "yoo-vyoo-loh-pal-ah-toh-fah-RING-goh-plas-tee", "Surgery that removes part of the uvula, soft palate and pharynx to treat snoring and obstructive sleep apnea.", "جراحی زبان کوچک، کام و حلق (UPP)", "up", "tx", ["UPP", "OSA"]],
["ventilation", "ven-tih-LAY-shun", "Movement of air into and out of the lungs.", "تهویه", "lx", "phys", []],
["ventilation-perfusion scan", "ven-tih-LAY-shun per-FYOO-zhun skan", "Nuclear medicine scan comparing airflow and blood flow in the lungs; used to find a pulmonary embolism.", "اسکن تهویه-خون‌رسانی", "tx", "lab", ["VQ"]],
["ventilator", "VEN-tih-lay-tor", "Machine that breathes for a patient who cannot breathe adequately.", "دستگاه تنفس مصنوعی (ونتیلاتور)", "tx", "tx", []],
["visceral pleura", "VIS-er-al PLOO-rah", "Inner layer of the pleura that covers the surface of the lung.", "پرده جنب احشایی", "lo", "body", []],
["vital capacity", "VYE-tal kah-PAS-ih-tee", "Largest amount of air that can be breathed out after the deepest possible breath in.", "ظرفیت حیاتی", "br", "phys", ["VC"]],
["vocal cords", "VOH-kal kordz", "Two folds in the larynx that vibrate to produce the voice; also called vocal folds.", "تارهای صوتی", "up", "body", []],
["wheeze", "weez", "High-pitched whistling sound from narrowed airways, as in asthma.", "خس‌خس", "br", "sx", []]];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* نَفَس — داده واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها و دسته‌های واژه (موتور: engine/js/lexicon.js)
 * ریشه‌ها و اختصارها از Total.txt و پنج فصل PDF پیوست (Gylys/Davis، Fremgen، Cohen، Ehrlich، Dummies و…) گردآوری و دستی پالایش شده‌اند.
 * دنیاها: lx زبان تنفس (همه واژه‌ها) • up تنفس فوقانی • lo تنفس تحتانی • br تهویه و نشانه‌ها • ds بیماری‌ها • tx تشخیص و درمان */
(function (root) {
  const EA = root.EA = root.EA || {};
  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const roots = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', 'بدون، فاقد', '*'],
    ['anti-', ['anti'], 'against', 'ضد', 'tx'],
    ['brady-', ['brady'], 'slow', 'کند', 'br'],
    ['de-', ['de'], 'removal, lack of', 'برداشتن، کاهش', 'tx'],
    ['dys-', ['dys'], 'difficult, painful, abnormal', 'دشوار، دردناک', 'br'],
    ['endo-', ['endo'], 'within', 'درون', 'tx'],
    ['eu-', ['eu'], 'good, normal', 'خوب، طبیعی', 'br'],
    ['ex-', ['ex'], 'out', 'بیرون', 'lx'],
    ['hemi-', ['hemi'], 'half', 'نیم', 'lo'],
    ['hyper-', ['hyper'], 'excessive, above normal', 'بیش از حد', '*'],
    ['hypo-', ['hypo', 'hyp'], 'deficient, below normal', 'کمتر از حد', '*'],
    ['in-', ['in'], 'in, into', 'به درون', 'lx'],
    ['inter-', ['inter'], 'between', 'بین', 'lo'],
    ['intra-', ['intra'], 'within', 'درون', 'lo'],
    ['para-', ['para'], 'beside, near', 'کنار', 'up'],
    ['poly-', ['poly'], 'many', 'چند', 'tx'],
    ['tachy-', ['tachy'], 'rapid', 'تند', 'br'],
    // ریشه‌ها: ریه و هوا
    ['pulmon/o', ['pulmon'], 'lung', 'ریه', 'lx'],
    ['pneum/o, pneumon/o', ['pneumon', 'pneum'], 'lung, air', 'ریه، هوا', 'lx'],
    ['spir/o', ['spir'], 'to breathe', 'نفس کشیدن', 'lx'],
    ['ox/o, ox/i', ['oxi', 'ox'], 'oxygen', 'اکسیژن', 'br'],
    ['capn/o', ['capn'], 'carbon dioxide', 'دی‌اکسید کربن', 'br'],
    ['cardi/o', ['cardi'], 'heart', 'قلب', 'lx'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', 'خون', 'br'],
    ['cyan/o', ['cyan'], 'blue', 'آبی، کبود', 'br'],
    ['py/o', ['py'], 'pus', 'چرک', 'ds'],
    // ریشه‌ها: مجرای فوقانی
    ['nas/o', ['nas'], 'nose', 'بینی', 'up'],
    ['rhin/o', ['rhin'], 'nose', 'بینی', 'lx'],
    ['sinus/o', ['sinus'], 'sinus, cavity', 'سینوس', 'up'],
    ['sept/o', ['sept'], 'septum (wall)', 'تیغه', 'up'],
    ['or/o', ['or'], 'mouth', 'دهان', 'up'],
    ['pharyng/o', ['pharyng'], 'pharynx (throat)', 'حلق', 'lx'],
    ['adenoid/o', ['adenoid'], 'adenoids', 'آدنوئید', 'up'],
    ['tonsill/o', ['tonsill'], 'tonsils', 'لوزه', 'up'],
    ['uvul/o', ['uvul'], 'uvula', 'زبان کوچک', 'up'],
    ['palat/o', ['palat'], 'palate', 'کام', 'up'],
    ['laryng/o', ['laryng'], 'larynx (voice box)', 'حنجره', 'lx'],
    ['epiglott/o', ['epiglott'], 'epiglottis', 'اپی‌گلوت', 'up'],
    ['phon/o', ['phon'], 'voice, sound', 'صدا', 'up'],
    ['muc/o', ['muc'], 'mucus', 'مخاط', 'up'],
    ['polyp/o', ['polyp'], 'polyp, small growth', 'پولیپ', 'up'],
    ['ot/o', ['ot'], 'ear', 'گوش', 'up'],
    // ریشه‌ها: مجرای تحتانی
    ['trache/o', ['trache'], 'trachea (windpipe)', 'نای', 'lx'],
    ['bronch/o, bronchi/o', ['bronchi', 'bronch'], 'bronchus', 'نایژه', 'lx'],
    ['bronchiol/o', ['bronchiol'], 'bronchiole', 'نایژک', 'lo'],
    ['alveol/o', ['alveol'], 'alveolus (air sac)', 'کیسه هوایی', 'lo'],
    ['lob/o', ['lob'], 'lobe', 'لوب', 'lo'],
    ['pleur/o', ['pleur'], 'pleura', 'پرده جنب', 'lo'],
    ['mediastin/o', ['mediastin'], 'mediastinum', 'میان‌سینه', 'lo'],
    ['thorac/o', ['thorac', 'thorax', 'thora'], 'chest', 'قفسه سینه', 'lo'],
    ['phren/o', ['phren'], 'diaphragm (also mind)', 'دیافراگم', 'lo'],
    ['cost/o', ['cost'], 'rib', 'دنده', 'lo'],
    ['steth/o', ['steth'], 'chest', 'سینه', 'br'],
    // ریشه‌ها: نشانه، بیماری و درمان
    ['orth/o', ['orth'], 'straight, upright', 'راست، ایستاده', 'br'],
    ['tuss/i', ['tuss'], 'cough', 'سرفه', 'tx'],
    ['atel/o', ['atel'], 'incomplete, imperfect', 'ناقص', 'ds'],
    ['coni/o', ['coni'], 'dust', 'غبار', 'ds'],
    ['anthrac/o', ['anthrac'], 'coal', 'زغال سنگ', 'ds'],
    ['silic/o', ['silic'], 'silica (glass, stone)', 'سیلیس', 'ds'],
    ['myc/o', ['myc'], 'fungus', 'قارچ', 'ds'],
    ['tubercul/o', ['tubercul'], 'tubercle (small swelling)', 'گره کوچک (سل)', 'ds'],
    ['embol/o', ['embol'], 'plug', 'لخته، مسدودکننده', 'ds'],
    ['fibr/o', ['fibr'], 'fiber', 'رشته', 'ds'],
    ['carcin/o', ['carcin'], 'cancer', 'سرطان', 'ds'],
    ['somn/o', ['somn'], 'sleep', 'خواب', 'tx'],
    // پسوندها
    ['-al, -ic, -ous, -ar, -ary, -eal, -ive', ['ary', 'eal', 'ial', 'ive', 'ous', 'ic', 'al', 'ar'], 'pertaining to', 'مربوط به', '*'],
    ['-ation, -ion', ['ation', 'ion'], 'process', 'فرایند', '*'],
    ['-is, -um, -us, -a, -x', ['is', 'um', 'us', 'a', 'x'], 'noun ending', 'پایان اسم', '*'],
    ['-ia, -y', ['ia', 'y'], 'condition', 'حالت', '*'],
    ['-ist', ['ist'], 'specialist', 'متخصص', 'lx'],
    ['-logist', ['logist'], 'specialist in the study of', 'متخصص', 'lx'],
    ['-logy', ['logy'], 'study of', 'علم، مطالعه', 'lx'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-osis', ['osis', 'sis'], 'abnormal condition', 'وضعیت غیرطبیعی', '*'],
    ['-oma', ['oma'], 'tumor, mass', 'تومور، توده', '*'],
    ['-genic', ['genic'], 'producing, originating in', 'ایجادشده از', 'ds'],
    ['-pnea', ['pnea'], 'breathing', 'تنفس', 'br'],
    ['-oxia', ['oxia'], 'oxygen (condition of)', 'حالت اکسیژن', 'br'],
    ['-capnia', ['capnia'], 'carbon dioxide (condition of)', 'حالت دی‌اکسید کربن', 'br'],
    ['-emia', ['emia'], 'blood condition', 'حالت خون', 'br'],
    ['-ptysis', ['ptysis'], 'spitting', 'تف کردن، بیرون انداختن', 'br'],
    ['-algia', ['algia'], 'pain', 'درد', 'br'],
    ['-dynia', ['dynia'], 'pain', 'درد', 'br'],
    ['-phonia', ['phonia'], 'voice, sound', 'صدا', 'up'],
    ['-spasm', ['spasm'], 'sudden involuntary contraction', 'انقباض ناگهانی', 'up'],
    ['-rrhea', ['rrhea'], 'flow, discharge', 'جریان، ترشح', 'up'],
    ['-rrhagia', ['rrhagia'], 'bursting forth (of blood)', 'خونریزی', 'up'],
    ['-malacia', ['malacia'], 'softening', 'نرمی', 'lo'],
    ['-ectasis', ['ectasis'], 'dilation, expansion', 'گشادی، باز شدن', 'ds'],
    ['-scopy', ['scopy'], 'visual examination', 'مشاهده با ابزار', 'tx'],
    ['-scope', ['scope'], 'instrument to view', 'ابزار مشاهده', 'tx'],
    ['-metry', ['metry'], 'process of measuring', 'اندازه‌گیری', 'tx'],
    ['-meter', ['meter'], 'instrument to measure', 'ابزار اندازه‌گیری', 'tx'],
    ['-graphy', ['graphy'], 'process of recording', 'روش ثبت', 'tx'],
    ['-centesis', ['centesis'], 'surgical puncture to remove fluid', 'سوراخ کردن برای کشیدن مایع', 'tx'],
    ['-stomy', ['stomy'], 'new opening', 'ایجاد منفذ', 'tx'],
    ['-tomy', ['tomy'], 'incision, cutting into', 'برش', '*'],
    ['-ectomy', ['ectomy'], 'surgical removal', 'برداشتن (جراحی)', '*'],
    ['-plasty', ['plasty'], 'surgical repair', 'ترمیم جراحی', 'tx'],
    ['-lytic', ['lytic'], 'breaking down', 'تجزیه‌کننده', 'tx'],
    ['-therapy', ['therapy'], 'treatment', 'درمان', 'tx']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['ABGs', 'arterial blood gases', 'گازهای خون شریانی', 'tx'],
    ['ARDS', 'acute respiratory distress syndrome', 'سندروم دیسترس تنفسی حاد', 'ds'],
    ['Bronch', 'bronchoscopy', 'برونکوسکوپی', 'tx'],
    ['C&S', 'culture and sensitivity', 'کشت و آنتی‌بیوگرام', 'tx'],
    ['CF', 'cystic fibrosis', 'فیبروز سیستیک', 'ds'],
    ['CO2', 'carbon dioxide', 'دی‌اکسید کربن', 'lx'],
    ['COPD', 'chronic obstructive pulmonary disease', 'بیماری انسدادی مزمن ریه', 'ds'],
    ['c/o', 'complains of', 'شکایت دارد از', 'lx'],
    ['CPAP', 'continuous positive airway pressure', 'فشار مثبت مداوم راه هوایی', 'tx'],
    ['CPR', 'cardiopulmonary resuscitation', 'احیای قلبی-ریوی', 'tx'],
    ['CTA', 'clear to auscultation', 'سمع ریه پاک و طبیعی', 'br'],
    ['CXR', 'chest X-ray', 'عکس قفسه سینه', 'tx'],
    ['DOE', 'dyspnea on exertion', 'تنگی نفس هنگام فعالیت', 'br'],
    ['DPT', 'diphtheria, pertussis, tetanus (vaccine)', 'واکسن سه‌گانه (دیفتری، سیاه‌سرفه، کزاز)', 'ds'],
    ['ENT', 'ear, nose and throat', 'گوش، حلق و بینی', 'up'],
    ['ERV', 'expiratory reserve volume', 'حجم ذخیره بازدمی', 'br'],
    ['ET', 'endotracheal (tube)', 'لوله داخل نای', 'tx'],
    ['FEV1', 'forced expiratory volume in one second', 'حجم بازدمی با فشار در ثانیه اول', 'br'],
    ['flu', 'influenza', 'آنفلوآنزا', 'ds'],
    ['FRC', 'functional residual capacity', 'ظرفیت باقیمانده عملی', 'br'],
    ['FVC', 'forced vital capacity', 'ظرفیت حیاتی با فشار', 'br'],
    ['HMD', 'hyaline membrane disease', 'بیماری غشای هیالن (RDS نوزاد)', 'ds'],
    ['IC', 'inspiratory capacity', 'ظرفیت دمی', 'br'],
    ['IPPB', 'intermittent positive pressure breathing', 'تنفس با فشار مثبت متناوب', 'tx'],
    ['IRDS', 'infant respiratory distress syndrome', 'سندروم دیسترس تنفسی نوزاد', 'ds'],
    ['IRV', 'inspiratory reserve volume', 'حجم ذخیره دمی', 'br'],
    ['LLL', 'left lower lobe', 'لوب تحتانی ریه چپ', 'lo'],
    ['LUL', 'left upper lobe', 'لوب فوقانی ریه چپ', 'lo'],
    ['MDI', 'metered-dose inhaler', 'اسپری استنشاقی با دوز مشخص', 'tx'],
    ['MERS', 'Middle East respiratory syndrome', 'سندروم تنفسی خاورمیانه', 'ds'],
    ['NMT', 'nebulized mist treatment', 'درمان با بخور دارویی', 'tx'],
    ['O2', 'oxygen', 'اکسیژن', 'lx'],
    ['OSA', 'obstructive sleep apnea', 'آپنه انسدادی خواب', 'ds'],
    ['per', 'by, through (O2 per nasal cannula)', 'از راه، به وسیله', 'tx'],
    ['po', 'by mouth (per os)', 'خوراکی (از راه دهان)', 'tx'],
    ['prn', 'as needed (pro re nata)', 'در صورت نیاز', 'tx'],
    ['PE', 'pulmonary embolism', 'آمبولی ریه', 'ds'],
    ['PEFR', 'peak expiratory flow rate', 'حداکثر سرعت جریان بازدمی', 'tx'],
    ['PFT', 'pulmonary function test', 'آزمون عملکرد ریه', 'tx'],
    ['PPD', 'purified protein derivative (tuberculin)', 'مشتق پروتئینی خالص (تست سل)', 'tx'],
    ['R', 'respiration', 'تنفس (تعداد در دقیقه)', 'br'],
    ['RA', 'room air', 'هوای اتاق (بدون اکسیژن کمکی)', 'tx'],
    ['RDS', 'respiratory distress syndrome', 'سندروم دیسترس تنفسی', 'ds'],
    ['RLL', 'right lower lobe', 'لوب تحتانی ریه راست', 'lo'],
    ['RML', 'right middle lobe', 'لوب میانی ریه راست', 'lo'],
    ['RRT', 'registered respiratory therapist', 'درمانگر تنفسی رسمی', 'lx'],
    ['RUL', 'right upper lobe', 'لوب فوقانی ریه راست', 'lo'],
    ['RV', 'residual volume', 'حجم باقیمانده', 'br'],
    ['SARS', 'severe acute respiratory syndrome', 'سندروم حاد تنفسی شدید', 'ds'],
    ['SIDS', 'sudden infant death syndrome', 'سندروم مرگ ناگهانی شیرخوار', 'ds'],
    ['SMR', 'submucous resection (of the nasal septum)', 'برداشتن زیرمخاطی تیغه بینی', 'up'],
    ['SOB', 'shortness of breath', 'تنگی نفس', 'br'],
    ['TB', 'tuberculosis', 'سل', 'ds'],
    ['TLC', 'total lung capacity', 'ظرفیت کل ریه', 'br'],
    ['TPR', 'temperature, pulse and respiration', 'دما، نبض و تنفس', 'br'],
    ['TV', 'tidal volume', 'حجم جاری', 'br'],
    ['UPP', 'uvulopalatopharyngoplasty', 'جراحی زبان کوچک، کام و حلق', 'up'],
    ['URI', 'upper respiratory infection', 'عفونت دستگاه تنفس فوقانی', 'up'],
    ['VC', 'vital capacity', 'ظرفیت حیاتی', 'br'],
    ['VQ', 'ventilation-perfusion (scan)', 'اسکن تهویه-خون‌رسانی', 'tx']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'body', icon: '🫁', name: 'ساختارهای دستگاه تنفس' },
    { id: 'phys', icon: '🌬️', name: 'فیزیولوژی، حجم‌ها و گازها' },
    { id: 'field', icon: '🎓', name: 'رشته‌ها و متخصصان' },
    { id: 'dz', icon: '🦠', name: 'بیماری‌ها' },
    { id: 'sx', icon: '🔍', name: 'نشانه‌ها و صداها' },
    { id: 'lab', icon: '🧪', name: 'تشخیص و آزمون' },
    { id: 'tx', icon: '💊', name: 'درمان، دارو و جراحی' }
  ];
  const main = { phys: 'Anatomy_and_Physiology' };
  EA.LEX_DATA = { roots, abbr, cats, main, worlds: ['lx', 'up', 'lo', 'br', 'ds', 'tx'], base: 'lx' };
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* موتور واژه‌نامه: تجزیه‌گر واژه، جست‌وجو و مولد سؤال‌ها (مشترک همه اپ‌ها)
 * داده‌ها از EA.TERMS_RAW (data-terms.js) و EA.LEX_DATA (lexdata.js) هر اپ می‌آیند. */
(function (root) {
  const EA = root.EA = root.EA || {};
  /* داده‌ها (ریشه‌ها، اختصارها، دسته‌ها، فهرست دنیاها) از lexdata.js هر اپ می‌آیند */
  const D = EA.LEX_DATA;

  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const ROOTS_RAW = D.roots;
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = D.abbr;
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {
    Anatomy_and_Physiology: 'آناتومی و فیزیولوژی', Pathology_and_Disorders: 'بیماری‌ها و اختلالات',
    Laboratory_and_Diagnostics: 'آزمایشگاه و تشخیص', Pharmacology_and_Treatment: 'درمان، دارو و جراحی'
  };
  /* دسته ریز هر واژه در داده آمده (k)؛ دسته اصلی (c) از روی آن ساخته می‌شود */
  const CATS = D.cats;
  /* هر اپ می‌تواند دسته‌های ریز تازه بسازد و در D.main به یکی از چهار دسته اصلی وصلشان کند */
  const MAIN = Object.assign({ body: 'Anatomy_and_Physiology', cell: 'Anatomy_and_Physiology', field: 'Anatomy_and_Physiology', dz: 'Pathology_and_Disorders', sx: 'Pathology_and_Disorders', lab: 'Laboratory_and_Diagnostics', tx: 'Pharmacology_and_Treatment' }, D.main || {});
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], k: r[5], c: MAIN[r[5]], ab: r[6] || [] }));
  const classify = t => t.k;
  /** معنی کوتاه فارسی: بدون توضیح داخل پرانتز */
  const short = s => String(s).replace(/\s*\([^)]*\)\s*/g, ' ').trim() || s;
  const norm = s => String(s).toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, ' ').trim();
  const byTerm = {};
  TERMS.forEach(t => { byTerm[norm(t.t)] = t; });
  const term = s => byTerm[norm(s)] || null;

  /* ---------- تجزیه‌گر واژه ----------
   * واژه را به پیشوند، ریشه (با واکه رابط o یا i) و پسوند می‌شکند؛ کمترین تعداد تکه برنده است. */
  const STEMS = [];
  ROOTS.forEach(r => r.stems.forEach(s => STEMS.push({ s, r })));
  STEMS.sort((a, b) => b.s.length - a.s.length);
  function analyze(word) {
    const w = norm(word).replace(/[^a-z]/g, '');
    const n = w.length;
    if (!n) return { word: w, parts: [], full: false };
    // best[i] = {cost, prev, piece}
    const best = Array(n + 1).fill(null);
    best[0] = { cost: 0, pre: true };
    for (let i = 0; i < n; i++) {
      const b = best[i]; if (!b) continue;
      const push = (j, cost, piece) => { if (!best[j] || cost < best[j].cost) best[j] = { cost, prev: i, piece, pre: piece.kind === 'prefix' && b.pre }; };
      for (const st of STEMS) {
        if (!w.startsWith(st.s, i)) continue;
        const k = st.r.kind;
        if (k === 'prefix' && !b.pre) continue;
        const j = i + st.s.length;
        /* پسوند هرگز اول واژه نمی‌آید و پسوندهای یکی‌دوحرفی (‎-a، ‎-is) فقط در پایان واژه */
        if (k === 'suffix' && (i === 0 || (st.s.length <= 2 && j < n))) continue;
        push(j, b.cost + 10 + (k === 'suffix' && j < n ? 6 : 0), { text: st.s, r: st.r, kind: k });
        // واکه رابط پس از ریشه: derm + o، derm + a (dermatome)
        if (k === 'root' && j < n && /[oia]/.test(w[j])) push(j + 1, b.cost + 10, { text: st.s + w[j], r: st.r, kind: k });
      }
      // حرف ناشناخته
      push(i + 1, b.cost + 40, { text: w[i], r: null, kind: 'gap' });
    }
    const parts = [];
    for (let j = n; j > 0;) { const b = best[j]; parts.unshift(b.piece); j = b.prev; }
    // حروف ناشناخته پشت سر هم را یکی کن
    const merged = [];
    parts.forEach(p => { const last = merged[merged.length - 1]; if (p.kind === 'gap' && last && last.kind === 'gap') last.text += p.text; else merged.push(Object.assign({}, p)); });
    return { word: w, parts: merged, full: merged.every(p => p.kind !== 'gap') };
  }
  /** شکل نمایشی یک تکه: erythr/o، ‎-penia، pan- */
  function partLabel(p) {
    if (!p.r) return p.text;
    const k = p.r.kind;
    if (k === 'suffix') return '-' + p.text;
    if (k === 'prefix') return p.text + '-';
    const v = p.text.slice(-1), base = p.text.slice(0, -1);
    if (p.r.stems.some(s => s === base) && /[oia]/.test(v)) return base + '/' + v;
    const m = p.r.a.match(new RegExp('\\b' + p.text + '/([oi])\\b'));
    return m ? p.text + '/' + m[1] : p.text;
  }

  /* ---------- جست‌وجو ---------- */
  function search(q, list) {
    const s = norm(q);
    if (!s) return list;
    return list.filter(x => [x.t, x.a, x.fa, x.full, x.en, x.d].some(f => f && norm(f).includes(s)));
  }

  /* ---------- مولد سؤال‌ها ---------- */
  const rnd = a => a[Math.floor(Math.random() * a.length)];
  const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const inW = (x, w) => !w || x.w === w || x.w === '*';
  const E = s => EA.en(s);
  /** گزینه‌های انحرافی یکتا */
  function distract(pool, right, key, n) {
    const seen = new Set([key(right)]);
    const out = [];
    shuffle(pool).forEach(x => { const k = key(x); if (out.length < n && k && !seen.has(k)) { seen.add(k); out.push(x); } });
    return out;
  }
  const good = t => t.fa && t.d && t.t.length < 48;
  const termsOf = w => TERMS.filter(t => (!w || t.w === w) && good(t));
  const defShort = d => { const s = d.split(/(?<=\.)\s/)[0]; return s.length > 170 ? s.slice(0, 167) + '…' : s; };
  const why = t => `${E(`<b>${t.t}</b>`)}${t.p ? ` <small class="pron" dir="ltr">/${t.p}/</small>` : ''} = <b>${t.fa}</b><br><span class="defen" dir="ltr">${defShort(t.d)}</span>`;

  const G = {};
  const WORLDS = D.worlds, BASE = D.base;
  /* دنیای پایه (BASE) از همه واژه‌ها، ریشه‌ها و اختصارها سؤال می‌سازد */
  const rootsOf = w => (w === BASE ? ROOTS : ROOTS.filter(r => inW(r, w)));
  WORLDS.forEach(W => {
    const w = W === BASE ? null : W;
    G['t2f:' + W] = () => {
      const pool = termsOf(w), t = rnd(pool);
      const ds = distract(pool, t, x => short(x.fa), 3);
      return { kind: 'mcq', tag: 'term', q: `معنی ${E(`<b>${t.t}</b>`)} چیست؟`, opts: [t].concat(ds).map(x => x.fa), a: 0, why: why(t) };
    };
    G['f2t:' + W] = () => {
      const pool = termsOf(w), t = rnd(pool);
      const ds = distract(pool, t, x => norm(x.t), 3);
      return { kind: 'mcq', tag: 'term', q: `واژه پزشکی «<b>${t.fa}</b>» کدام است؟`, opts: [t].concat(ds).map(x => E(x.t)), a: 0, why: why(t) };
    };
    G['d2t:' + W] = () => {
      const pool = termsOf(w).filter(x => x.d.length > 25), t = rnd(pool);
      const ds = distract(pool, t, x => norm(x.t), 3);
      const d = defShort(t.d).replace(new RegExp(t.t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig'), '_____');
      return { kind: 'mcq', tag: 'def', q: `این تعریف انگلیسی مربوط به کدام واژه است؟<span class="defq" dir="ltr">${d}</span>`, opts: [t].concat(ds).map(x => E(x.t)), a: 0, why: why(t) };
    };
    G['sp:' + W] = () => {
      const pool = termsOf(w).filter(x => /^[A-Za-z][a-z-]+(?: [a-z-]+)?$/.test(x.t) && x.t.length <= 22), t = rnd(pool);
      return { kind: 'spell', tag: 'spell', q: `املای انگلیسی «<b>${t.fa}</b>» را بنویس`, ans: [t.t], why: why(t), hint: t.p ? `/${t.p}/` : t.t[0] + '…' };
    };
    G['r2m:' + W] = () => {
      const pool = rootsOf(W), r = rnd(pool);
      const ds = distract(ROOTS, r, x => x.fa, 3);
      return { kind: 'mcq', tag: 'root', q: `${r.kind === 'suffix' ? 'پسوند' : r.kind === 'prefix' ? 'پیشوند' : 'ریشه'} ${E(`<b>${r.a}</b>`)} یعنی…`, opts: [r].concat(ds).map(x => x.fa), a: 0, why: `${E(`<b>${r.a}</b>`)} = ${r.fa} <span dir="ltr">(${r.en})</span>${example(r)}` };
    };
    G['m2r:' + W] = () => {
      const pool = rootsOf(W), r = rnd(pool);
      const ds = distract(ROOTS.filter(x => x.kind === r.kind || Math.random() < 0.3), r, x => x.fa, 3);
      return { kind: 'mcq', tag: 'root', q: `کدام جزء واژه یعنی «<b>${r.fa}</b>»؟`, opts: [r].concat(ds).map(x => E(x.a)), a: 0, why: `${E(`<b>${r.a}</b>`)} = ${r.fa} <span dir="ltr">(${r.en})</span>${example(r)}` };
    };
    G['wb:' + W] = () => {
      const pool = buildable(w), x = rnd(pool);
      const used = new Set(x.parts.map(p => p.r.id));
      const extra = shuffle(ROOTS.filter(r => !used.has(r.id) && inW(r, w) && r.w !== '*')).slice(0, 3).map(r => r.kind === 'root' ? r.a.split(',')[0] : r.a.split(',')[0]);
      return { kind: 'build', tag: 'build', q: `واژه‌ای بساز به معنی «<b>${short(x.t.fa)}</b>»`, parts: x.parts.map(partLabel), extra, why: why(x.t) + `<div class="wbx">${x.parts.map(p => `<span><b dir="ltr">${partLabel(p)}</b> ${p.r.fa}</span>`).join('')}</div>` };
    };
    G['ab:' + W] = () => {
      const own = ABBR.filter(a => !w || a.w === w), pool = own.length >= 4 ? own : ABBR, a = rnd(pool);
      const ds = distract(ABBR, a, x => x.fa, 3);
      return { kind: 'mcq', tag: 'abbr', q: `اختصار ${E(`<b>${a.a}</b>`)} یعنی…`, opts: [a].concat(ds).map(x => x.fa), a: 0, why: `${E(`<b>${a.a}</b>`)} = <span dir="ltr">${a.full}</span><br>${a.fa}` };
    };
  });
  /** نمونه واژه برای یک ریشه */
  function example(r) {
    const ex = TERMS.filter(t => /^[a-z]+$/i.test(t.t) && analyze(t.t).parts.some(p => p.r === r)).slice(0, 3);
    return ex.length ? `<br><small>مثال: ${ex.map(t => E(t.t)).join('، ')}</small>` : '';
  }
  const BUILD_CACHE = {};
  function buildable(w) {
    if (BUILD_CACHE[w]) return BUILD_CACHE[w];
    const out = [];
    termsOf(w).forEach(t => {
      if (!/^[a-z]+$/.test(t.t) || t.t.length < 7) return;
      const a = analyze(t.t);
      if (a.full && a.parts.length >= 2 && a.parts.length <= 4 && a.parts.some(p => p.kind === 'root') && new Set(a.parts.map(p => p.r.id)).size === a.parts.length && !a.parts.some(p => p.r.w === '*' && p.r.stems[0].length <= 2 && p.kind !== 'suffix')) out.push({ t, parts: a.parts });
    });
    return (BUILD_CACHE[w] = out);
  }
  EA.gen = Object.assign(EA.gen || {}, G);
  EA.genIds = w => ['t2f', 'f2t', 'd2t', 'sp', 'r2m', 'm2r', 'wb', 'ab'].map(g => g + ':' + w);

  EA.lex = { ROOTS, ABBR, TERMS, CAT_FA, CATS, classify, term, analyze, partLabel, search, short, norm, buildable, defShort, why };
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* نَفَس — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با الگوی هورمونا، درما و اُستئو: زمینه سفید کارت، بافت‌ها با گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی زیر آن)،
 * پیکان‌ها و خط‌های راهنمای خاکستری گرد. پالت: صورتی ریه، آبی آسمانی اکسیژن و راه هوایی، بنفش پرده جنب، قرمز عضله دیافراگم.
 * بدن‌ها به سبک «مانکن آناتومی» (ساده و بی‌جزئیات اضافه) کشیده شده‌اند تا برچسب‌ها خوانا بمانند.
 * EA.art(کلید) ← رشته SVG؛ EA.ART_KEYS فهرست کلیدهاست (آزمون‌ها بررسی می‌کنند). */
(function (root) {
  const EA = root.EA = root.EA || {};
  let UID = 0;
  const FONT_EN = 'Nunito, Vazirmatn, system-ui, sans-serif', FONT_FA = 'Vazirmatn, Tahoma, sans-serif';
  const INK = '#2b2b2b', MUTED = '#6f7a80', LINE = '#5b6b73';
  /* پالت بافت‌ها */
  const C = {
    lung: '#f8bfcb', lung2: '#ec93a7', lungLine: '#c9677f', air: '#d6eefa', air2: '#bfe0f2', airLine: '#5e9fc4',
    mucosa: '#f3b0a6', muscle: '#d65a52', pleura: '#b99be0', bone: '#f3e4c4', bone2: '#e3cc9c', boneLine: '#b8975f',
    skin: '#f6d2b8', skinLine: '#d9a988', art: '#d9443a', vein: '#4f7fd1'
  };
  const nid = () => 'g' + (++UID);

  /* ---------- پایه ---------- */
  function svg(w, h, body, label, defs) {
    return `<svg class="art" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label || ''}" xmlns="http://www.w3.org/2000/svg"><defs>${defs || ''}</defs><rect width="${w}" height="${h}" fill="#fff"/>${body}</svg>`;
  }
  /** متن انگلیسی */
  const t = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${p.size || 11}" font-weight="${p.w || 700}" fill="${p.fill || INK}" text-anchor="${p.anchor || 'middle'}" direction="ltr" font-family="${p.sym ? 'Arial, Helvetica, sans-serif' : FONT_EN}"${p.italic ? ' font-style="italic"' : ''}>${s}</text>`; };
  /** متن فارسی؛ anchor همیشه «دیداری» است (start = لبه چپ متن) */
  const FLIP = { start: 'end', end: 'start', middle: 'middle' };
  /* هر تکه لاتین درون متن فارسی با LRI…PDI جدا می‌شود تا جابه‌جا نشود */
  const LRI = s => String(s).replace(/(?<![&#\w])\(?-?[A-Za-z0-9][A-Za-z0-9\/\-.+–°%]*\)?(?:\s*(?:[=+\/→]|\s)\s*\(?[A-Za-z0-9][A-Za-z0-9\/\-.+–°%]*\)?)*/g, m => '⁦' + m + '⁩');
  const f = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${p.size || 10}" font-weight="${p.w || 600}" fill="${p.fill || MUTED}" text-anchor="${FLIP[p.anchor || 'middle']}" direction="rtl" font-family="${FONT_FA}">${LRI(s)}</text>`; };
  /** برچسب دوزبانه: واژه انگلیسی و زیر آن معنی فارسی (فاصله کافی تا شلوغ نشود) */
  const lab = (x, y, en, fa, o) => { const p = o || {}; return t(x, y, en, { size: p.size || 11, fill: p.fill || INK, anchor: p.anchor, w: 800, sym: p.sym }) + (fa ? f(x, y + (p.gap || 13.5), fa, { size: (p.size || 11) - 1.5, anchor: p.anchor === 'start' ? 'start' : p.anchor === 'end' ? 'end' : 'middle', fill: p.faFill }) : ''); };
  const title = s => f(180, 19, s, { size: 11.5, fill: INK, w: 800 });
  const marker = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0 1 L10 5 L0 9 z" fill="${c || LINE}"/></marker>`;
  const arrow = (id, x1, y1, x2, y2, c, w, dash) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c || LINE}" stroke-width="${w || 2}" fill="none" stroke-linecap="round" marker-end="url(#${id})"${dash ? ' stroke-dasharray="4 3"' : ''}/>`;
  const curve = (id, d, c, w, dash) => `<path d="${d}" stroke="${c || LINE}" stroke-width="${w || 2}" fill="none" stroke-linecap="round" marker-end="url(#${id})"${dash ? ' stroke-dasharray="4 3"' : ''}/>`;
  const linear = (id, c1, c2, vertical) => `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>`;
  const radial = (id, c1, c2) => `<radialGradient id="${id}" cx="50%" cy="50%" r="55%" fx="38%" fy="34%"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></radialGradient>`;
  const shadow = id => `<filter id="${id}" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="2" stdDeviation="2.2" flood-color="#000" flood-opacity=".16"/></filter>`;
  /** خط راهنما با نقطه سر */
  const pin = (x1, y1, x2, y2, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c || '#5b6b73'}" stroke-width="1.1"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="#fff" stroke="${c || '#c2413a'}" stroke-width="1.4"/>`;
  function rng(seed) { let s = seed || 7; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }
  /** کارت رنگی با عنوان دوزبانه */
  const card = (x, y, w, h, bg, ic, en, fa, sub) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${bg}"/>${ic ? t(x + w / 2, y + 28, ic, { size: 22 }) : ''}${t(x + w / 2, y + (ic ? 50 : 24), en, { size: 10.5, w: 900 })}${f(x + w / 2, y + (ic ? 64 : 38), fa, { size: 9.5, fill: INK, w: 700 })}${sub ? f(x + w / 2, y + (ic ? 77 : 51), sub, { size: 8.5 }) : ''}`;

  /* ---------- بدن مانکن (نمای روبه‌رو) ----------
   * outline(cx, top, s) ← مسیر بدن ساده؛ s مقیاس (۱ = قد حدود ۲۶۰) */
  function mannequin(cx, top, s, o) {
    const p = o || {}; const k = s || 1;
    const X = d => (cx + d * k).toFixed(1), Y = d => (top + d * k).toFixed(1);
    const head = `<ellipse cx="${X(0)}" cy="${Y(22)}" rx="${(17 * k).toFixed(1)}" ry="${(21 * k).toFixed(1)}"/>`;
    const body = `<path d="M${X(-8)} ${Y(40)} L${X(-8)} ${Y(48)} C${X(-26)} ${Y(50)} ${X(-40)} ${Y(52)} ${X(-44)} ${Y(64)} L${X(-52)} ${Y(128)} L${X(-56)} ${Y(158)} C${X(-57)} ${Y(166)} ${X(-48)} ${Y(167)} ${X(-47)} ${Y(158)} L${X(-40)} ${Y(122)} L${X(-34)} ${Y(86)} L${X(-30)} ${Y(124)} C${X(-34)} ${Y(140)} ${X(-34)} ${Y(150)} ${X(-30)} ${Y(162)} L${X(-26)} ${Y(222)} L${X(-26)} ${Y(254)} C${X(-34)} ${Y(258)} ${X(-34)} ${Y(264)} ${X(-22)} ${Y(264)} L${X(-12)} ${Y(264)} L${X(-12)} ${Y(222)} L${X(-4)} ${Y(166)} L${X(0)} ${Y(164)} L${X(4)} ${Y(166)} L${X(12)} ${Y(222)} L${X(12)} ${Y(264)} L${X(22)} ${Y(264)} C${X(34)} ${Y(264)} ${X(34)} ${Y(258)} ${X(26)} ${Y(254)} L${X(26)} ${Y(222)} L${X(30)} ${Y(162)} C${X(34)} ${Y(150)} ${X(34)} ${Y(140)} ${X(30)} ${Y(124)} L${X(34)} ${Y(86)} L${X(40)} ${Y(122)} L${X(47)} ${Y(158)} C${X(48)} ${Y(167)} ${X(57)} ${Y(166)} ${X(56)} ${Y(158)} L${X(52)} ${Y(128)} L${X(44)} ${Y(64)} C${X(40)} ${Y(52)} ${X(26)} ${Y(50)} ${X(8)} ${Y(48)} L${X(8)} ${Y(40)} Z"/>`;
    return `<g fill="${p.fill || C.skin}" stroke="${p.line || C.skinLine}" stroke-width="1.3">${head}${body}</g>`;
  }

  const A = {};

  /* ---------- اجزای پایه دستگاه تنفس ---------- */
  /** نای با حلقه‌های غضروفی از y1 تا y2 */
  function tracheaTube(cx, y1, y2, w) {
    const ww = w || 14;
    let r = '';
    for (let y = y1 + 4; y < y2 - 2; y += 7) r += `<path d="M${cx - ww / 2 + 1} ${y} h${ww - 2}" stroke="${C.airLine}" stroke-width="2.2" opacity=".75"/>`;
    return `<rect x="${cx - ww / 2}" y="${y1}" width="${ww}" height="${y2 - y1}" rx="${ww / 2.5}" fill="${C.air}" stroke="${C.airLine}" stroke-width="1.2"/>${r}`;
  }
  /** درخت نایژه‌ای بازگشتی: از (x,y) با زاویه a و طول len */
  function branch(x, y, a, len, w, depth, out) {
    const x2 = x + Math.cos(a) * len, y2 = y + Math.sin(a) * len;
    out.push(`<path d="M${x.toFixed(1)} ${y.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${C.airLine}" stroke-width="${(w + 1.6).toFixed(1)}" stroke-linecap="round"/><path d="M${x.toFixed(1)} ${y.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${C.air}" stroke-width="${w.toFixed(1)}" stroke-linecap="round"/>`);
    if (depth <= 0) { out.push(`<circle cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="${(2.6).toFixed(1)}" fill="${C.lung2}" stroke="${C.lungLine}" stroke-width=".6"/>`); return; }
    branch(x2, y2, a - 0.42, len * 0.72, w * 0.66, depth - 1, out);
    branch(x2, y2, a + 0.42, len * 0.72, w * 0.66, depth - 1, out);
  }
  /** ریه راست (سمت چپ تصویر) و چپ؛ side=-1 ریه راست بیمار */
  const lungPath = (cx, top, s, side) => {
    const X = d => (cx + side * d * s).toFixed(1), Y = d => (top + d * s).toFixed(1);
    return side < 0
      ? `M${X(8)} ${Y(14)} C${X(30)} ${Y(-6)} ${X(74)} ${Y(10)} ${X(80)} ${Y(70)} C${X(86)} ${Y(118)} ${X(82)} ${Y(150)} ${X(70)} ${Y(160)} C${X(52)} ${Y(150)} ${X(28)} ${Y(158)} ${X(8)} ${Y(170)} C${X(4)} ${Y(120)} ${X(4)} ${Y(60)} ${X(8)} ${Y(14)}Z`
      : `M${X(8)} ${Y(14)} C${X(30)} ${Y(-6)} ${X(74)} ${Y(10)} ${X(80)} ${Y(70)} C${X(86)} ${Y(118)} ${X(82)} ${Y(150)} ${X(70)} ${Y(160)} C${X(52)} ${Y(150)} ${X(28)} ${Y(158)} ${X(8)} ${Y(170)} C${X(10)} ${Y(140)} ${X(24)} ${Y(120)} ${X(16)} ${Y(100)} C${X(6)} ${Y(80)} ${X(4)} ${Y(50)} ${X(8)} ${Y(14)}Z`;
  };
  /** دو ریه با نای و نایژه‌ها؛ مرکز cx، بالای ریه top، مقیاس s */
  function lungs(cx, top, s, o) {
    const p = o || {};
    const g = nid(), sh = nid();
    const L = lungPath(cx - 6 * s, top, s, -1), R = lungPath(cx + 6 * s, top, s, 1);
    const tree = [];
    if (p.tree !== false) {
      branch(cx - 12 * s, top + 34 * s, Math.PI * 0.62, 26 * s, 4.6 * s, 3, tree);
      branch(cx + 12 * s, top + 34 * s, Math.PI * 0.38, 26 * s, 4.6 * s, 3, tree);
    }
    return {
      d: `${linear(g, C.lung, C.lung2, true)}${shadow(sh)}`,
      b: `<g filter="url(#${sh})"><path d="${L}" fill="url(#${g})" stroke="${C.lungLine}" stroke-width="1.4"/><path d="${R}" fill="url(#${g})" stroke="${C.lungLine}" stroke-width="1.4"/></g>
        ${p.trachea !== false ? tracheaTube(cx, top - 40 * s, top + 22 * s, 13 * s) : ''}
        <path d="M${cx} ${top + 20 * s} L${cx - 12 * s} ${top + 34 * s} M${cx} ${top + 20 * s} L${cx + 12 * s} ${top + 34 * s}" stroke="${C.airLine}" stroke-width="${6.6 * s}" stroke-linecap="round"/><path d="M${cx} ${top + 20 * s} L${cx - 12 * s} ${top + 34 * s} M${cx} ${top + 20 * s} L${cx + 12 * s} ${top + 34 * s}" stroke="${C.air}" stroke-width="${5 * s}" stroke-linecap="round"/>
        ${tree.join('')}`,
      L, R
    };
  }
  /** خوشه آلوئول */
  const grape = (x, y, r, n) => Array.from({ length: n || 7 }, (_, i) => { const a = i / (n || 7) * Math.PI * 2; return `<circle cx="${(x + Math.cos(a) * r * 0.9).toFixed(1)}" cy="${(y + Math.sin(a) * r * 0.9).toFixed(1)}" r="${(r * 0.62).toFixed(1)}" fill="${C.lung}" stroke="${C.lungLine}" stroke-width=".9"/>`; }).join('') + `<circle cx="${x}" cy="${y}" r="${(r * 0.6).toFixed(1)}" fill="${C.lung2}" stroke="${C.lungLine}" stroke-width=".9"/>`;
  /** پیکر نیم‌تنه با سر (نمای روبه‌رو) */
  const torso = (cx, top) => `<g fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.3"><ellipse cx="${cx}" cy="${top + 34}" rx="30" ry="36"/><path d="M${cx - 14} ${top + 64} V${top + 84} C${cx - 60} ${top + 88} ${cx - 92} ${top + 100} ${cx - 96} ${top + 136} L${cx - 100} ${top + 330} H${cx + 100} L${cx + 96} ${top + 136} C${cx + 92} ${top + 100} ${cx + 60} ${top + 88} ${cx + 14} ${top + 84} V${top + 64}Z"/></g>`;

  /* ================= دنیای پایه: زبان تنفس ================= */
  A['resp-overview'] = () => {
    const lg = lungs(180, 166, 0.95);
    return svg(360, 360, `${title('دستگاه تنفس: مسیر هوا از بینی تا آلوئول')}
      ${torso(180, 30)}
      <path d="M160 52 C164 44 196 44 200 56 C202 66 196 72 186 74 L174 74 C164 72 158 62 160 52Z" fill="${C.mucosa}" stroke="${C.lungLine}" stroke-width="1"/>
      <path d="M180 74 V112" stroke="${C.mucosa}" stroke-width="12" stroke-linecap="round"/>
      <rect x="171" y="104" width="18" height="18" rx="6" fill="${C.air2}" stroke="${C.airLine}"/>
      ${lg.b}
      <path d="M92 318 Q180 268 268 318" stroke="${C.muscle}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="306" cy="232" r="26" fill="#fff" stroke="${C.lungLine}" stroke-width="1.4"/>${grape(306, 232, 12, 7)}<path d="M268 246 L282 238" stroke="${C.lungLine}" stroke-dasharray="3 2"/>
      <path d="M22 44 V122 M16 44 H28 M16 122 H28" stroke="#1d77a8" stroke-width="1.6" fill="none"/><g transform="rotate(-90 14 83)">${f(14, 83, 'فوقانی', { size: 9, fill: '#1d77a8', w: 800 })}</g>
      <path d="M22 130 V330 M16 130 H28 M16 330 H28" stroke="#8e4fb0" stroke-width="1.6" fill="none"/><g transform="rotate(-90 14 230)">${f(14, 230, 'تحتانی', { size: 9, fill: '#8e4fb0', w: 800 })}</g>
      ${pin(170, 60, 96, 46)}${lab(68, 42, 'nasal cavity', 'حفره بینی', { size: 9.5 })}
      ${pin(180, 92, 96, 84)}${lab(68, 80, 'pharynx', 'حلق', { size: 9.5 })}
      ${pin(178, 112, 96, 122)}${lab(68, 118, 'larynx', 'حنجره', { size: 9.5 })}
      ${pin(180, 150, 264, 120)}${lab(306, 116, 'trachea', 'نای', { size: 9.5 })}
      ${pin(194, 198, 264, 168)}${lab(306, 164, 'bronchus', 'نایژه', { size: 9.5 })}
      ${pin(306, 232, 306, 274)}${lab(306, 286, 'alveoli', 'کیسه‌های هوایی', { size: 9.5 })}
      ${pin(130, 250, 70, 230)}${lab(50, 214, 'lung', 'ریه', { size: 9.5 })}
      ${pin(120, 306, 70, 290)}${lab(52, 274, 'diaphragm', 'دیافراگم', { size: 9.5 })}`, 'دستگاه تنفس', lg.d);
  };

  /* تبادل گاز در آلوئول */
  A['gas-exchange'] = () => {
    const m = nid(), n = nid();
    return svg(360, 240, `${title('تبادل گاز: اکسیژن به خون، دی‌اکسید کربن به هوا')}
      <circle cx="118" cy="122" r="74" fill="${C.lung}" stroke="${C.lungLine}" stroke-width="2"/>
      <circle cx="118" cy="122" r="64" fill="#fff4f6" opacity=".7"/>
      <path d="M200 30 C230 70 230 170 200 214" stroke="#c94d5b" stroke-width="30" fill="none" stroke-linecap="round" opacity=".18"/>
      <path d="M200 30 C230 70 230 170 200 214" stroke="${C.vein}" stroke-width="22" fill="none" stroke-linecap="round" opacity=".55"/>
      <path d="M215 120 C224 160 220 190 202 214" stroke="${C.art}" stroke-width="22" fill="none" stroke-linecap="round" opacity=".55"/>
      ${[[206, 54], [214, 84], [220, 150], [214, 184]].map((p, i) => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="7" ry="5" fill="${i < 2 ? '#7a62b8' : '#d9443a'}"/>`).join('')}
      ${arrow(m, 140, 100, 196, 120, '#2e9bd6', 3)}${t(160, 96, 'O₂', { size: 13, fill: '#1d77a8', sym: true })}
      ${arrow(n, 198, 74, 146, 84, '#6f7a80', 3)}${t(176, 68, 'CO₂', { size: 13, fill: '#56606a', sym: true })}
      ${lab(100, 120, 'alveolus', 'کیسه هوایی', { size: 11 })}
      ${lab(296, 54, 'pulmonary capillary', 'مویرگ ریوی', { size: 10, faFill: INK })}
      ${f(296, 96, 'خون کم‌اکسیژن (آبی)', { size: 9, fill: '#4f7fd1', w: 800 })}${f(296, 196, 'خون پراکسیژن (قرمز)', { size: 9, fill: '#c2413a', w: 800 })}
      ${f(100, 234, 'external respiration = تبادل گاز در ریه', { size: 9.5, fill: INK, w: 700 })}`, 'تبادل گاز', `${marker(m, '#2e9bd6')}${marker(n, '#6f7a80')}`);
  };

  /* آناتومی یک واژه: endo + trache + al */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 129, fa, { size: 9.5, fill: c })}`;
    return svg(360, 192, `${title('یک واژه = پیشوند + ریشه + پسوند')}
      ${part(10, 66, 'endo', '#1272a3', '#ddf1fb')}${part(82, 96, 'trache', '#b03e5c', '#fde6ec')}${part(184, 46, 'al', '#3f8a05', '#e7f9d8')}
      ${br(10, 76, 'prefix', 'پیشوند: درون', '#1272a3')}${br(82, 178, 'root', 'ریشه: نای', '#b03e5c')}${br(184, 230, 'suffix', 'پسوند: مربوط به', '#3f8a05')}
      <rect x="242" y="40" width="110" height="40" rx="10" fill="#f8f6f5"/>${f(297, 57, 'مربوط به', { size: 10.5, fill: '#3f8a05', w: 800 })}${f(297, 73, 'درونِ نای', { size: 10.5, fill: INK, w: 800 })}
      <path d="M210 150 C160 176 96 176 44 150" stroke="#b03e5c" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M48 146 l-6 4 l7 3" stroke="#b03e5c" stroke-width="2" fill="none"/>
      ${f(140, 186, 'معنی را از آخر بخوان: پسوند ← پیشوند ← ریشه', { size: 10, fill: '#b03e5c', w: 700 })}`, 'آناتومی یک واژه پزشکی');
  };

  /* نقشه ریشه‌ها روی بدن */
  A['root-map'] = () => {
    const lg = lungs(180, 170, 0.85, { tree: false });
    const R = (x1, y1, x2, y2, root, fa, side) => `${pin(x1, y1, x2, y2)}${t(side < 0 ? x2 - 4 : x2 + 4, y2 - 2, root, { size: 11, anchor: side < 0 ? 'end' : 'start', fill: '#1d77a8', w: 900 })}${f(side < 0 ? x2 - 4 : x2 + 4, y2 + 12, fa, { size: 9, anchor: side < 0 ? 'end' : 'start', fill: INK })}`;
    return svg(360, 350, `${title('نقشه ریشه‌ها: هر عضو، یک ریشه')}
      ${torso(180, 30)}
      <path d="M160 52 C164 44 196 44 200 56 C202 66 196 72 186 74 L174 74 C164 72 158 62 160 52Z" fill="${C.mucosa}" stroke="${C.lungLine}"/>
      <path d="M180 74 V112" stroke="${C.mucosa}" stroke-width="12" stroke-linecap="round"/><rect x="171" y="104" width="18" height="18" rx="6" fill="${C.air2}" stroke="${C.airLine}"/>
      ${lg.b}
      <path d="M100 310 Q180 268 260 310" stroke="${C.muscle}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M104 182 C92 230 94 280 112 304" stroke="${C.pleura}" stroke-width="3" fill="none"/>
      ${R(166, 60, 100, 50, 'rhin/o, nas/o', 'بینی', -1)}${R(180, 90, 100, 92, 'pharyng/o', 'حلق', -1)}${R(176, 112, 100, 128, 'laryng/o', 'حنجره', -1)}
      ${R(180, 150, 260, 120, 'trache/o', 'نای', 1)}${R(192, 196, 260, 168, 'bronch/o', 'نایژه', 1)}${R(236, 240, 268, 216, 'pneum/o', 'ریه (pulmon/o هم)', 1)}
      ${R(98, 250, 70, 214, 'pleur/o', 'پرده جنب', -1)}${R(124, 300, 70, 270, 'phren/o', 'دیافراگم', -1)}${R(250, 150, 268, 262, 'thorac/o', 'قفسه سینه', 1)}`, 'نقشه ریشه‌ها', lg.d);
  };

  /* دوقلوهای فریبنده */
  A.twins = () => {
    const box = (x, y, c, bg, w1, m1, ex, ic) => `<rect x="${x}" y="${y}" width="164" height="86" rx="14" fill="${bg}"/>${t(x + 30, y + 50, ic, { size: 22 })}${t(x + 100, y + 32, w1, { size: 15, fill: c, w: 900 })}${f(x + 100, y + 52, m1, { size: 10.5, fill: INK, w: 800 })}${t(x + 100, y + 72, ex, { size: 9.5, fill: c, w: 800 })}`;
    return svg(360, 236, `${title('یک حرف، دو معنی کاملاً متفاوت')}
      ${box(10, 32, '#1d77a8', '#e2f2fb', '-pnea', 'تنفس', 'dyspnea', '🌬️')}${box(186, 32, '#b03e5c', '#fde6ec', '-ptysis', 'تف کردن، بیرون انداختن', 'hemoptysis', '💦')}
      ${box(10, 126, '#8e4fb0', '#f3eafc', 'laryng/o', 'حنجره (جعبه صدا)', 'laryngitis', '🎤')}${box(186, 126, '#e07a3a', '#fdeee3', 'pharyng/o', 'حلق (گلو)', 'pharyngitis', '👅')}
      ${f(180, 228, 'هوا اول از pharynx می‌گذرد و بعد به larynx می‌رسد', { size: 9.5, fill: MUTED, w: 700 })}`, 'واژه‌های همزاد');
  };

  /* ================= دنیای ۱: تنفس فوقانی ================= */
  A['nasal-sinuses'] = () => {
    const sh = nid();
    return svg(360, 290, `${title('سینوس‌های اطراف بینی (نمای روبه‌رو)')}
      <g filter="url(#${sh})"><path d="M180 28 C250 28 286 80 284 146 C282 214 236 268 180 270 C124 268 78 214 76 146 C74 80 110 28 180 28Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <path d="M126 76 C146 52 214 52 234 76 C224 92 136 92 126 76Z" fill="#f6d36a" stroke="#c99a1d" stroke-width="1.2" opacity=".92"/>
      <ellipse cx="140" cy="118" rx="20" ry="11" fill="#fff" stroke="${C.skinLine}"/><ellipse cx="220" cy="118" rx="20" ry="11" fill="#fff" stroke="${C.skinLine}"/><circle cx="140" cy="118" r="6" fill="#4a3426"/><circle cx="220" cy="118" r="6" fill="#4a3426"/>
      ${[[172, 106], [188, 106], [172, 122], [188, 122], [180, 138]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="6.5" fill="#8fd18a" stroke="#3f8a05" stroke-width="1"/>`).join('')}
      <rect x="170" y="88" width="20" height="10" rx="4" fill="#c9a8ea" stroke="#7b5cd6"/>
      <path d="M118 146 C112 176 132 196 164 186 L166 150Z M242 146 C248 176 228 196 196 186 L194 150Z" fill="#f4a36b" stroke="#c96a2a" stroke-width="1.2" opacity=".92"/>
      <path d="M180 120 C176 150 168 176 164 190 C172 200 188 200 196 190 C192 176 184 150 180 120Z" fill="#f2c0a0" stroke="${C.skinLine}"/>
      <path d="M154 228 Q180 242 206 228" stroke="#c96a6a" stroke-width="3" fill="none" stroke-linecap="round"/>
      ${pin(208, 70, 300, 50)}${lab(318, 40, 'frontal', 'پیشانی', { size: 10 })}
      ${pin(188, 92, 300, 98)}${lab(318, 88, 'sphenoid', 'اسفنوئید (عقب‌تر)', { size: 10 })}
      ${pin(188, 122, 300, 146)}${lab(318, 136, 'ethmoid', 'اتموئید', { size: 10 })}
      ${pin(232, 170, 300, 196)}${lab(318, 186, 'maxillary', 'فک بالا (بزرگ‌ترین)', { size: 10 })}
      ${f(180, 284, 'paranasal sinuses: حفره‌های هوایی که جمجمه را سبک و صدا را پرطنین می‌کنند', { size: 9 })}`, 'سینوس‌ها', shadow(sh));
  };

  /* مجرای فوقانی در برش ساژیتال */
  A['upper-airway'] = () => {
    const sh = nid();
    const head = 'M206 26 C150 26 118 54 112 92 C110 104 96 110 88 122 C84 128 92 134 100 136 C100 144 98 150 102 154 C98 160 100 166 106 168 C104 178 108 196 120 204 C128 210 140 212 150 220 L156 330 H300 L292 236 C306 206 316 170 314 128 C312 66 270 26 206 26Z';
    return svg(360, 340, `${title('مجرای تنفسی فوقانی (برش ساژیتال)')}
      <g filter="url(#${sh})"><path d="${head}" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <path d="M110 104 C140 96 190 94 226 102 L228 128 C190 126 140 128 112 132Z" fill="${C.mucosa}" stroke="${C.lungLine}" stroke-width="1"/>
      <path d="M118 140 L222 136" stroke="${C.bone2}" stroke-width="5" stroke-linecap="round"/>
      <path d="M114 152 C140 144 186 146 206 160 C208 178 196 192 170 194 C142 194 120 184 114 172Z" fill="#e88a94" stroke="#b9576a" stroke-width="1"/>
      <path d="M226 102 C236 104 240 112 240 124 L240 250 L222 250 L222 200 C222 176 222 150 226 128Z" fill="${C.mucosa}" stroke="${C.lungLine}" stroke-width="1"/>
      <ellipse cx="236" cy="112" rx="8" ry="10" fill="#d9879a" stroke="#b9576a"/>
      <ellipse cx="214" cy="170" rx="7" ry="9" fill="#d9879a" stroke="#b9576a"/>
      <path d="M216 196 C210 204 206 212 210 218" stroke="#e8c26a" stroke-width="5" fill="none" stroke-linecap="round"/>
      ${tracheaTube(204, 222, 332, 18)}
      <path d="M226 250 V332" stroke="#d9a0a0" stroke-width="14"/>
      <rect x="194" y="222" width="20" height="26" rx="6" fill="${C.air2}" stroke="${C.airLine}"/>
      <path d="M250 104 h6 V136 h-6 M250 140 h6 V192 h-6 M250 196 h6 V246 h-6" stroke="#1d77a8" stroke-width="1.4" fill="none"/>
      ${t(262, 118, 'nasopharynx', { size: 9.5, anchor: 'start' })}${t(262, 170, 'oropharynx', { size: 9.5, anchor: 'start' })}${t(262, 224, 'laryngopharynx', { size: 9.5, anchor: 'start' })}
      ${f(262, 132, 'حلق بینی', { size: 8.5, anchor: 'start' })}${f(262, 184, 'حلق دهانی', { size: 8.5, anchor: 'start' })}${f(262, 238, 'حلق حنجره‌ای', { size: 8.5, anchor: 'start' })}
      ${pin(150, 116, 60, 64)}${lab(50, 54, 'nasal cavity', 'حفره بینی', { size: 9.5 })}
      ${pin(160, 176, 60, 110)}${lab(46, 100, 'tongue', 'زبان', { size: 9.5 })}
      ${pin(236, 112, 250, 60)}${lab(286, 50, 'adenoids', 'آدنوئید', { size: 9.5 })}
      ${pin(214, 170, 60, 160)}${lab(46, 150, 'palatine tonsil', 'لوزه کامی', { size: 9.5 })}
      ${pin(212, 210, 60, 210)}${lab(46, 200, 'epiglottis', 'اپی‌گلوت', { size: 9.5 })}
      ${pin(198, 236, 60, 254)}${lab(46, 244, 'larynx', 'حنجره', { size: 9.5 })}
      ${pin(200, 300, 60, 300)}${lab(46, 290, 'trachea', 'نای (جلو)', { size: 9.5 })}
      ${pin(228, 300, 262, 300)}${lab(296, 290, 'esophagus', 'مری (عقب)', { size: 9.5 })}`, 'مجرای تنفسی فوقانی', shadow(sh));
  };

  /* حنجره از روبه‌رو */
  A.larynx = () => {
    const g = nid();
    return svg(360, 300, `${title('حنجره از روبه‌رو: جعبه صدا')}
      <path d="M150 38 C156 22 204 22 210 38 C206 54 196 58 180 58 C164 58 154 54 150 38Z" fill="#e8c26a" stroke="#b8932a" stroke-width="1.3"/>
      <path d="M126 64 C126 54 234 54 234 64 L232 72 L128 72Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3"/>
      <path d="M130 80 L230 80 L222 140 L180 162 L138 140Z" fill="url(#${g})" stroke="${C.airLine}" stroke-width="1.5"/>
      <path d="M180 86 L180 158" stroke="${C.airLine}" stroke-width="1.2" opacity=".6"/><path d="M168 84 L180 98 L192 84" stroke="${C.airLine}" stroke-width="1.6" fill="none"/>
      <path d="M146 170 C146 160 214 160 214 170 L212 188 C200 194 160 194 148 188Z" fill="${C.air}" stroke="${C.airLine}" stroke-width="1.5"/>
      ${tracheaTube(180, 194, 290, 50)}
      ${pin(196, 40, 270, 36)}${lab(300, 30, 'epiglottis', 'اپی‌گلوت', { size: 10 })}
      ${pin(226, 66, 270, 72)}${lab(300, 66, 'hyoid bone', 'استخوان لامی', { size: 10 })}
      ${pin(216, 110, 270, 116)}${lab(300, 110, 'thyroid cartilage', 'غضروف تیروئید', { size: 10 })}
      ${f(300, 140, '(سیب آدم)', { size: 8.5 })}
      ${pin(208, 178, 270, 178)}${lab(300, 172, 'cricoid cartilage', 'غضروف انگشتری', { size: 10 })}
      ${pin(204, 240, 270, 240)}${lab(300, 234, 'trachea', 'نای', { size: 10 })}
      ${pin(160, 110, 74, 110)}${lab(56, 104, 'larynx', 'حنجره: laryng/o', { size: 10 })}
      ${f(70, 260, 'حلقه‌های C شکل غضروفی', { size: 9 })}${f(70, 274, 'نای را باز نگه می‌دارند', { size: 9 })}`, 'حنجره', linear(g, '#d6eefa', '#9ccbe6'));
  };

  /* تارهای صوتی از بالا */
  A['vocal-cords'] = () => {
    const panel = (cx, open) => `<ellipse cx="${cx}" cy="100" rx="66" ry="70" fill="#f1a9a8" stroke="#c96a6a" stroke-width="2"/>
      <ellipse cx="${cx}" cy="100" rx="50" ry="54" fill="#e98f94"/>
      <path d="M${cx - 30} 46 Q${cx} 30 ${cx + 30} 46" stroke="#e8c26a" stroke-width="8" fill="none" stroke-linecap="round"/>
      ${open ? `<path d="M${cx - 4} 58 L${cx - 28} 150 L${cx + 28} 150 L${cx + 4} 58Z" fill="#3b1f2a"/>` : `<path d="M${cx - 2} 58 L${cx - 3} 150 L${cx + 3} 150 L${cx + 2} 58Z" fill="#3b1f2a"/>`}
      <path d="M${cx - 6} 58 L${cx - (open ? 32 : 6)} 150" stroke="#fff" stroke-width="7" stroke-linecap="round"/><path d="M${cx + 6} 58 L${cx + (open ? 32 : 6)} 150" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`;
    return svg(360, 222, `${title('تارهای صوتی از بالا (نمای لارنگوسکوپی)')}
      ${panel(92, true)}${panel(268, false)}
      ${lab(92, 190, 'glottis open', 'گلوت باز: نفس کشیدن', { size: 10.5, fill: '#1d77a8' })}
      ${lab(268, 190, 'glottis closed', 'گلوت بسته: حرف زدن و قورت دادن', { size: 10.5, fill: '#b03e5c' })}
      ${pin(118, 120, 176, 90)}${t(178, 86, 'vocal cord', { size: 9, anchor: 'start' })}${pin(92, 40, 176, 54)}${t(178, 50, 'epiglottis', { size: 9, anchor: 'start' })}`, 'تارهای صوتی');
  };

  /* مژک‌ها و پله‌برقی مخاطی */
  A.cilia = () => {
    const m = nid();
    let cells = '', hairs = '';
    for (let i = 0; i < 9; i++) {
      const x = 20 + i * 36;
      cells += `<rect x="${x}" y="110" width="34" height="62" rx="6" fill="#f6c9c4" stroke="#c97a72"/><ellipse cx="${x + 17}" cy="148" rx="7" ry="9" fill="#9b5b8a"/>`;
      for (let k = 0; k < 6; k++) hairs += `<path d="M${x + 4 + k * 5.4} 110 q${i % 2 ? 4 : 6} -10 ${i % 2 ? 2 : 6} -20" stroke="#c97a72" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
    }
    return svg(360, 220, `${title('مژک‌ها: پله‌برقی مخاطی راه هوایی')}
      ${cells}${hairs}
      <path d="M16 78 C80 70 160 86 240 76 C290 70 330 78 346 76 L346 90 L16 92Z" fill="#d8e8a0" opacity=".85"/>
      ${[[60, 82], [130, 80], [200, 84], [270, 80]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="#6b5a3a"/>`).join('')}
      ${arrow(m, 60, 54, 300, 54, '#1d77a8', 3)}${f(180, 44, 'مخاط و ذرات به سمت حلق رانده می‌شوند', { size: 9.5, fill: '#1d77a8', w: 800 })}
      ${lab(60, 196, 'cilia', 'مژک‌ها', { size: 10.5 })}${lab(180, 196, 'mucus', 'مخاط چسبنده', { size: 10.5 })}${lab(300, 196, 'mucous membrane', 'غشای مخاطی', { size: 10.5 })}`, 'مژک‌ها', marker(m, '#1d77a8'));
  };

  /* ================= دنیای ۲: تنفس تحتانی ================= */
  A['bronchial-tree'] = () => {
    const tree = [];
    branch(166, 128, Math.PI * 0.66, 46, 9, 4, tree);
    branch(194, 128, Math.PI * 0.34, 46, 9, 4, tree);
    return svg(360, 320, `${title('درخت نایژه‌ای: از نای تا آلوئول')}
      ${tracheaTube(180, 30, 120, 22)}
      <path d="M180 116 L166 128 M180 116 L194 128" stroke="${C.airLine}" stroke-width="12" stroke-linecap="round"/><path d="M180 116 L166 128 M180 116 L194 128" stroke="${C.air}" stroke-width="10" stroke-linecap="round"/>
      ${tree.join('')}
      ${pin(180, 70, 262, 56)}${lab(298, 50, 'trachea', 'نای', { size: 10 })}
      ${pin(180, 118, 262, 104)}${lab(298, 98, 'carina', 'محل دوشاخه شدن', { size: 10 })}
      ${pin(152, 152, 70, 120)}${lab(46, 110, 'right main bronchus', 'نایژه اصلی راست', { size: 9.5 })}
      ${pin(220, 196, 300, 172)}${lab(316, 162, 'bronchi', 'نایژه‌ها', { size: 10 })}
      ${pin(106, 238, 50, 220)}${lab(40, 196, 'bronchioles', 'نایژک‌ها', { size: 10 })}
      ${pin(258, 270, 300, 250)}${lab(316, 240, 'alveoli', 'کیسه‌های هوایی', { size: 10 })}
      ${f(180, 314, 'نایژه راست کوتاه‌تر، پهن‌تر و عمودی‌تر است؛ جسم خارجی بیشتر وارد آن می‌شود', { size: 9 })}`, 'درخت نایژه‌ای');
  };

  A['lung-lobes'] = () => {
    const lg = lungs(180, 70, 1.15, { tree: false });
    return svg(360, 300, `${title('لوب‌های ریه: راست سه لوب، چپ دو لوب')}
      ${lg.b}
      <path d="M86 128 C110 126 140 120 166 114" stroke="${C.lungLine}" stroke-width="2" fill="none"/>
      <path d="M90 200 C116 172 144 156 168 150" stroke="${C.lungLine}" stroke-width="2" fill="none"/>
      <path d="M272 120 C246 150 214 174 194 196" stroke="${C.lungLine}" stroke-width="2" fill="none"/>
      <path d="M196 170 C214 176 222 196 210 214" fill="#fff" stroke="${C.lungLine}" stroke-width="1"/>
      ${t(128, 102, 'RUL', { size: 12, sym: true, fill: '#b03e5c' })}${t(124, 160, 'RML', { size: 12, sym: true, fill: '#b03e5c' })}${t(128, 226, 'RLL', { size: 12, sym: true, fill: '#b03e5c' })}
      ${t(240, 116, 'LUL', { size: 12, sym: true, fill: '#b03e5c' })}${t(244, 220, 'LLL', { size: 12, sym: true, fill: '#b03e5c' })}
      ${f(70, 30, 'ریه راست', { size: 10, fill: INK, w: 800 })}${f(290, 30, 'ریه چپ', { size: 10, fill: INK, w: 800 })}
      ${pin(118, 74, 50, 52)}${lab(36, 44, 'apex', 'رأس', { size: 9.5 })}
      ${pin(106, 262, 50, 270)}${lab(36, 262, 'base', 'قاعده', { size: 9.5 })}
      ${pin(208, 196, 316, 268)}${lab(316, 256, 'cardiac notch', 'فرورفتگی قلبی', { size: 9.5 })}
      ${f(180, 296, 'R = right • L = left • U/M/L = upper/middle/lower lobe', { size: 9, fill: MUTED })}`, 'لوب‌های ریه', lg.d);
  };

  A.alveoli = () => {
    let net = '';
    const R = rng(8);
    for (let i = 0; i < 26; i++) { const x = 150 + R() * 150, y = 60 + R() * 140; net += `<path d="M${x.toFixed(1)} ${y.toFixed(1)} q${(8 - R() * 16).toFixed(1)} ${(8 - R() * 16).toFixed(1)} ${(14 - R() * 28).toFixed(1)} ${(14 - R() * 28).toFixed(1)}" stroke="${i % 2 ? C.art : C.vein}" stroke-width="1.6" fill="none" opacity=".75"/>`; }
    return svg(360, 250, `${title('آلوئول‌ها: جایگاه تبادل گاز')}
      ${tracheaTube(110, 34, 110, 12)}
      <path d="M110 108 C120 120 150 120 170 116" stroke="${C.airLine}" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M110 108 C120 120 150 120 170 116" stroke="${C.air}" stroke-width="6" fill="none" stroke-linecap="round"/>
      ${grape(210, 100, 30, 9)}${grape(260, 150, 28, 8)}${grape(200, 170, 24, 7)}
      ${net}
      ${pin(110, 70, 50, 58)}${lab(62, 46, 'terminal bronchiole', 'نایژک انتهایی', { size: 9.5 })}
      ${pin(240, 82, 306, 52)}${lab(318, 40, 'alveolus', 'کیسه هوایی', { size: 9.5 })}
      ${pin(282, 178, 306, 210)}${lab(318, 198, 'capillaries', 'مویرگ‌ها', { size: 9.5 })}
      ${pin(186, 182, 70, 200)}${lab(50, 188, 'surfactant', 'لایه ضدچسبیدن', { size: 9.5 })}
      ${f(180, 244, 'حدود ۳۰۰ میلیون آلوئول در هر دو ریه', { size: 9.5 })}`, 'آلوئول‌ها');
  };

  A.pleura = () => {
    const lg = lungs(180, 70, 1, { tree: false, trachea: false });
    let ribs = '';
    for (let i = 0; i < 6; i++) { const y = 70 + i * 32; ribs += `<path d="M60 ${y} C40 ${y + 20} 40 ${y + 40} 56 ${y + 52}" stroke="${C.boneLine}" stroke-width="6" fill="none"/><path d="M300 ${y} C320 ${y + 20} 320 ${y + 40} 304 ${y + 52}" stroke="${C.boneLine}" stroke-width="6" fill="none"/>`; }
    return svg(360, 300, `${title('پرده جنب: دو لایه و فضای میانشان')}
      <path d="M60 54 C40 120 40 210 70 262 L290 262 C320 210 320 120 300 54Z" fill="#fdf2f4" stroke="${C.pleura}" stroke-width="3"/>
      ${ribs}
      ${lg.b}
      <path d="M${180 - 6} 84 C150 66 104 80 98 140 C94 190 98 228 112 236" stroke="${C.pleura}" stroke-width="2.4" fill="none" stroke-dasharray="1 0"/>
      <ellipse cx="180" cy="190" rx="22" ry="34" fill="#d9443a" opacity=".8"/>
      <path d="M70 262 Q180 216 290 262" stroke="${C.muscle}" stroke-width="5" fill="none"/>
      ${pin(112, 120, 30, 34)}${t(16, 30, 'visceral pleura', { size: 9.5, anchor: 'start' })}${f(16, 44, 'جنب احشایی: روی ریه', { size: 8.5, anchor: 'start' })}
      ${pin(300, 110, 320, 34)}${t(344, 30, 'parietal pleura', { size: 9.5, anchor: 'end' })}${f(344, 44, 'جنب جداری: روی دیواره', { size: 8.5, anchor: 'end' })}
      ${pin(286, 200, 316, 290)}${t(344, 286, 'pleural cavity', { size: 9.5, anchor: 'end' })}
      ${pin(180, 200, 180, 290)}${t(180, 290, 'mediastinum', { size: 9.5 })}
      ${f(70, 290, 'فضای جنب کمی مایع دارد', { size: 8.5 })}`, 'پرده جنب', lg.d);
  };

  /* ================= دنیای ۳: تهویه و نشانه‌ها ================= */
  A.breathing = () => {
    const m = nid();
    const chest = (cx, ins) => `<path d="M${cx - (ins ? 66 : 56)} 60 C${cx - (ins ? 80 : 68)} 110 ${cx - (ins ? 78 : 66)} 160 ${cx - (ins ? 66 : 56)} 190 L${cx + (ins ? 66 : 56)} 190 C${cx + (ins ? 78 : 66)} 160 ${cx + (ins ? 80 : 68)} 110 ${cx + (ins ? 66 : 56)} 60Z" fill="#fdf2f4" stroke="${C.boneLine}" stroke-width="2"/>
      <ellipse cx="${cx - 24}" cy="${ins ? 128 : 118}" rx="${ins ? 30 : 24}" ry="${ins ? 54 : 44}" fill="${C.lung}" stroke="${C.lungLine}"/><ellipse cx="${cx + 24}" cy="${ins ? 128 : 118}" rx="${ins ? 30 : 24}" ry="${ins ? 54 : 44}" fill="${C.lung}" stroke="${C.lungLine}"/>
      <path d="M${cx - 64} 190 Q${cx} ${ins ? 182 : 150} ${cx + 64} 190" stroke="${C.muscle}" stroke-width="5" fill="none"/>
      ${tracheaTube(cx, 30, 74, 10)}`;
    return svg(360, 250, `${title('دم و بازدم: کار دیافراگم')}
      ${chest(92, true)}${chest(268, false)}
      ${arrow(m, 92, 8, 92, 30, '#2e9bd6', 3)}${arrow(m, 268, 30, 268, 8, '#6f7a80', 3)}
      
      ${lab(92, 218, 'inspiration', 'دم: دیافراگم پایین، قفسه بزرگ', { size: 10.5, fill: '#1d77a8' })}
      ${lab(268, 218, 'expiration', 'بازدم: دیافراگم بالا، قفسه کوچک', { size: 10.5, fill: '#56606a' })}`, 'دم و بازدم', marker(m, LINE));
  };

  A['breath-patterns'] = () => {
    const wave = (y, amp, per, from, to, flat) => {
      let d = `M${from} ${y}`;
      for (let x = from; x <= to; x += 2) {
        let a = amp;
        if (flat && flat(x)) a = 0;
        if (typeof amp === 'function') a = amp(x);
        d += ` L${x} ${(y - Math.sin((x - from) / per * Math.PI * 2) * a).toFixed(1)}`;
      }
      return `<path d="${d}" stroke="#2e9bd6" stroke-width="2.2" fill="none" stroke-linejoin="round"/>`;
    };
    const row = (y, en, fa, w) => `<rect x="8" y="${y - 22}" width="344" height="40" rx="10" fill="${y % 80 < 40 ? '#f5fafd' : '#fff'}"/>${t(16, y - 4, en, { size: 10.5, anchor: 'start', w: 900, fill: INK })}${f(16, y + 10, fa, { size: 8.5, anchor: 'start' })}${w}`;
    const cs = x => { const k = ((x - 120) % 120 + 120) % 120; return k > 84 ? 0 : 3 + Math.sin(k / 84 * Math.PI) * 10; };
    return svg(360, 334, `${title('الگوهای تنفس')}
      ${row(56, 'eupnea', 'طبیعی: ۱۲ تا ۲۰ در دقیقه', wave(52, 10, 40, 120, 344))}
      ${row(100, 'tachypnea', 'تند', wave(96, 9, 18, 120, 344))}
      ${row(144, 'bradypnea', 'کند', wave(140, 10, 80, 120, 344))}
      ${row(188, 'hyperpnea', 'عمیق', wave(184, 16, 40, 120, 344))}
      ${row(232, 'apnea', 'قطع تنفس', wave(228, 10, 40, 120, 344, x => x > 190 && x < 300))}
      ${row(276, 'Cheyne-Stokes', 'افزایش و کاهش با دوره‌های آپنه', wave(272, cs, 14, 120, 344))}
      ${f(180, 326, '‎-pnea = تنفس؛ پیشوند سرعت یا عمق را می‌گوید', { size: 9.5, fill: INK, w: 700 })}`, 'الگوهای تنفس');
  };

  A.spirogram = () => {
    const y0 = 60, H = 200;
    const Yv = v => y0 + (6 - v) / 6 * H;
    let d = `M70 ${Yv(2.9)}`;
    for (let x = 70; x <= 280; x += 2) {
      let v;
      if (x < 150) v = 2.75 + Math.sin((x - 70) / 40 * Math.PI * 2) * 0.25;
      else if (x < 180) v = 2.75 + (x - 150) / 30 * 3.0;
      else if (x < 215) v = 5.75 - (x - 180) / 35 * 4.5;
      else v = 2.5 + Math.sin((x - 215) / 40 * Math.PI * 2) * 0.25 + Math.min(1, (x - 215) / 20) * 0.25;
      d += ` L${x} ${Yv(v).toFixed(1)}`;
    }
    const brk = (x, v1, v2, en, fa, c) => `<path d="M${x} ${Yv(v1)} h6 V${Yv(v2)} h-6" stroke="${c}" stroke-width="1.6" fill="none"/>${t(x + 10, (Yv(v1) + Yv(v2)) / 2 + 2, en, { size: 10, sym: true, anchor: 'start', fill: c })}${f(x + 10, (Yv(v1) + Yv(v2)) / 2 + 15, fa, { size: 8, anchor: 'start' })}`;
    return svg(360, 290, `${title('اسپیروگرام: حجم‌ها و ظرفیت‌های ریه')}
      <rect x="60" y="${y0}" width="228" height="${H}" fill="#f5fafd" stroke="#d4e6f1"/>
      ${[0, 1, 2, 3, 4, 5, 6].map(v => `<path d="M60 ${Yv(v)} h228" stroke="#e3eef5"/>${t(54, Yv(v) + 3, v + 'L', { size: 8.5, anchor: 'end', sym: true, fill: MUTED })}`).join('')}
      <path d="${d}" stroke="#2e9bd6" stroke-width="2.6" fill="none"/>
      <path d="M60 ${Yv(1.25)} h228" stroke="#b03e5c" stroke-dasharray="4 3"/>
      ${brk(102, 3.0, 2.5, 'TV', 'جاری', '#1d77a8')}
      ${brk(150, 5.75, 3.0, 'IRV', 'ذخیره دمی', '#17a398')}
      ${brk(222, 2.5, 1.25, 'ERV', 'ذخیره بازدمی', '#e07a3a')}
      ${brk(222, 1.25, 0, 'RV', 'باقیمانده', '#b03e5c')}
      ${brk(292, 5.75, 1.25, 'VC', 'ظرفیت حیاتی', '#8e4fb0')}
      ${f(180, 284, 'TLC = VC + RV (حدود ۶ لیتر در بزرگسال)', { size: 9.5, fill: INK, w: 700 })}`, 'اسپیروگرام');
  };

  A['lung-sounds'] = () => {
    const cardS = (x, y, ic, en, fa, where, bg) => `<rect x="${x}" y="${y}" width="108" height="98" rx="14" fill="${bg}"/>${t(x + 54, y + 28, ic, { size: 20 })}${t(x + 54, y + 50, en, { size: 11, w: 900 })}${f(x + 54, y + 66, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 54, y + 84, where, { size: 8.5 })}`;
    return svg(360, 246, `${title('صداهای غیرطبیعی ریه هنگام سمع (auscultation)')}
      ${cardS(8, 30, '🎵', 'wheeze', 'خس‌خس سوت‌مانند', 'راه هوایی تنگ (آسم)', '#e2f2fb')}
      ${cardS(126, 30, '📢', 'stridor', 'صدای خشن دم', 'انسداد حنجره و نای', '#fde6ec')}
      ${cardS(244, 30, '🫧', 'rales (crackles)', 'کراکل ریز', 'مایع در آلوئول (پنومونی)', '#fdeee3')}
      ${cardS(67, 136, '🥁', 'rhonchi', 'خرخر بم', 'مخاط در راه هوایی بزرگ', '#eef6e6')}
      ${cardS(185, 136, '✋', 'pleural rub', 'صدای مالش', 'پرده جنب ملتهب', '#f3eafc')}`, 'صداهای ریه');
  };

  A.cyanosis = () => {
    const finger = (x, nail, club) => `<path d="M${x - 20} 190 V${club ? 80 : 74} C${x - 20} ${club ? 40 : 46} ${x + 20} ${club ? 40 : 46} ${x + 20} ${club ? 80 : 74} V190Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>${club ? `<ellipse cx="${x}" cy="66" rx="25" ry="26" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>` : ''}<path d="M${x - 13} ${club ? 50 : 56} C${x - 13} ${club ? 40 : 46} ${x + 13} ${club ? 40 : 46} ${x + 13} ${club ? 50 : 56} V${club ? 82 : 80} H${x - 13}Z" fill="${nail}" stroke="#b9849a"/>`;
    return svg(360, 236, `${title('نشانه‌های کمبود اکسیژن در انگشتان')}
      ${finger(70, '#f4c2cf', false)}${finger(180, '#8fa6d6', false)}${finger(290, '#a9b6dc', true)}
      ${lab(70, 210, 'normal', 'بستر ناخن صورتی', { size: 10.5, fill: '#3f8a05' })}${lab(180, 210, 'cyanosis', 'کبودی (cyan/o = آبی)', { size: 10.5, fill: '#1f5f9f' })}${lab(290, 210, 'clubbing', 'چماقی: کمبود مزمن اکسیژن', { size: 10.5, fill: '#8e4fb0' })}`, 'سیانوز و چماقی شدن');
  };

  /* ================= دنیای ۴: بیماری‌ها ================= */
  A['asthma-airway'] = () => {
    const ring = (cx, wall, lumen, mucus, muscle) => `<circle cx="${cx}" cy="104" r="62" fill="#f6c9c4" stroke="#c97a72" stroke-width="2"/>
      ${muscle ? Array.from({ length: 14 }, (_, i) => { const a = i / 14 * Math.PI * 2; return `<path d="M${(cx + Math.cos(a) * 50).toFixed(1)} ${(104 + Math.sin(a) * 50).toFixed(1)} L${(cx + Math.cos(a) * 58).toFixed(1)} ${(104 + Math.sin(a) * 58).toFixed(1)}" stroke="${C.muscle}" stroke-width="5" stroke-linecap="round"/>`; }).join('') : ''}
      <circle cx="${cx}" cy="104" r="${wall}" fill="#f2a6a0" stroke="#c97a72"/>
      <circle cx="${cx}" cy="104" r="${lumen}" fill="#fff"/>
      ${mucus ? `<path d="M${cx - lumen + 2} 104 C${cx - 6} 90 ${cx + 6} 118 ${cx + lumen - 2} 104 C${cx + 4} 110 ${cx - 6} 96 ${cx - lumen + 2} 104Z" fill="#d8e8a0" stroke="#9aaa4a"/>` : ''}`;
    return svg(360, 214, `${title('آسم: نایژک در حالت عادی و در حمله')}
      ${ring(92, 44, 34, false, false)}${ring(268, 50, 13, true, true)}
      ${lab(92, 186, 'normal bronchiole', 'مجرای باز', { size: 10.5, fill: '#1d77a8' })}
      ${lab(268, 186, 'asthma attack', 'bronchospasm + التهاب + مخاط', { size: 10.5, fill: '#b03e5c' })}`, 'آسم');
  };

  A.copd = () => {
    const normal = Array.from({ length: 10 }, (_, i) => `<circle cx="${40 + (i % 5) * 22}" cy="${80 + Math.floor(i / 5) * 24}" r="11" fill="${C.lung}" stroke="${C.lungLine}"/>`).join('');
    return svg(360, 234, `${title('COPD: آمفیزم و برونشیت مزمن')}
      <rect x="8" y="32" width="164" height="150" rx="14" fill="#fdf2f4"/>
      ${normal}
      <path d="M38 152 C60 136 100 134 150 152 C140 170 60 172 38 152Z" fill="${C.lung}" stroke="${C.lungLine}"/><circle cx="74" cy="152" r="8" fill="#fff" stroke="${C.lungLine}"/><circle cx="114" cy="154" r="10" fill="#fff" stroke="${C.lungLine}"/>
      ${f(90, 58, 'بالا: سالم • پایین: آمفیزم', { size: 9, fill: INK })}
      <rect x="188" y="32" width="164" height="150" rx="14" fill="#f6f8ee"/>
      <path d="M200 80 H340 V140 H200Z" fill="#f2a6a0" stroke="#c97a72"/><path d="M200 96 H340 V124 H200Z" fill="#fff"/>
      <path d="M200 104 C240 98 260 116 300 106 C320 102 330 112 340 108 V116 C320 120 300 112 260 120 C230 126 214 112 200 116Z" fill="#d8e8a0" stroke="#9aaa4a"/>
      ${[210, 230, 250, 270, 290, 310, 330].map(x => `<path d="M${x} 96 v-6" stroke="#c97a72" stroke-width="1.4"/>`).join('')}
      ${lab(90, 200, 'emphysema', 'تخریب دیواره آلوئول‌ها', { size: 10.5, fill: '#b03e5c' })}
      ${lab(270, 200, 'chronic bronchitis', 'التهاب و مخاط زیاد نایژه', { size: 10.5, fill: '#6b7a2a' })}`, 'COPD');
  };

  A.pneumonia = () => {
    const a = lungs(92, 66, 0.62, { tree: false }), b = lungs(268, 66, 0.62, { tree: false });
    const R = rng(3);
    let spots = '';
    for (let i = 0; i < 14; i++) spots += `<circle cx="${(222 + R() * 92).toFixed(1)}" cy="${(90 + R() * 80).toFixed(1)}" r="${(4 + R() * 4).toFixed(1)}" fill="#c9a23a" opacity=".75"/>`;
    return svg(360, 236, `${title('پنومونی لوبی و برونکوپنومونی')}
      ${a.b}${b.b}
      <path d="M44 130 C60 124 80 120 86 120 L86 170 C70 166 50 170 42 172 C40 156 40 140 44 130Z" fill="#c9a23a" opacity=".7"/>
      ${spots}
      ${lab(92, 196, 'lobar pneumonia', 'کل یک لوب درگیر', { size: 10.5, fill: '#8a6a1c' })}
      ${lab(268, 196, 'bronchopneumonia', 'لکه‌های پراکنده دور نایژک‌ها', { size: 10.5, fill: '#8a6a1c' })}`, 'پنومونی', a.d + b.d);
  };

  A['pleural-disorders'] = () => {
    const mini = (x, y, kind, en, fa) => {
      const id = nid();
      const lungW = kind === 'pneumo' ? 22 : 34;
      const fill = { hemo: '#a3243a', pyo: '#e8c94a', eff: '#9fd0f0' }[kind];
      return `<rect x="${x}" y="${y}" width="168" height="132" rx="14" fill="#fff" stroke="#e5e5e5"/>
        <clipPath id="${id}"><path d="M${x + 30} ${y + 14} C${x + 14} ${y + 50} ${x + 16} ${y + 84} ${x + 30} ${y + 96} H${x + 138} C${x + 152} ${y + 84} ${x + 154} ${y + 50} ${x + 138} ${y + 14}Z"/></clipPath>
        <path d="M${x + 30} ${y + 14} C${x + 14} ${y + 50} ${x + 16} ${y + 84} ${x + 30} ${y + 96} H${x + 138} C${x + 152} ${y + 84} ${x + 154} ${y + 50} ${x + 138} ${y + 14}Z" fill="${kind === 'pneumo' ? '#eef7fd' : '#fdf2f4'}" stroke="${C.pleura}" stroke-width="2"/>
        <ellipse cx="${x + 56}" cy="${y + 56}" rx="${lungW / 1.5}" ry="${kind === 'pneumo' ? 26 : 38}" fill="${C.lung}" stroke="${C.lungLine}"/>
        <ellipse cx="${x + 112}" cy="${y + 56}" rx="22" ry="38" fill="${C.lung}" stroke="${C.lungLine}"/>
        ${fill ? `<g clip-path="url(#${id})"><rect x="${x + 10}" y="${y + 74}" width="64" height="30" fill="${fill}" opacity=".85"/></g>` : `<path d="M${x + 30} ${y + 24} l6 6 M${x + 26} ${y + 50} l7 0" stroke="#2e9bd6" stroke-width="2"/>`}
        ${t(x + 84, y + 110, en, { size: 10, w: 900 })}${f(x + 84, y + 124, fa, { size: 9 })}`;
    };
    return svg(360, 308, `${title('بیماری‌های فضای جنب')}
      ${mini(8, 30, 'pneumo', 'pneumothorax', 'هوا ← ریه روی هم می‌خوابد')}
      ${mini(184, 30, 'hemo', 'hemothorax', 'خون در فضای جنب')}
      ${mini(8, 168, 'pyo', 'pyothorax (empyema)', 'چرک در فضای جنب')}
      ${mini(184, 168, 'eff', 'pleural effusion', 'مایع در فضای جنب')}`, 'بیماری‌های جنب');
  };

  A.atelectasis = () => svg(360, 210, `${title('آتلکتازی: روی هم خوابیدن آلوئول‌ها')}
      ${grape(92, 100, 34, 9)}
      ${Array.from({ length: 8 }, (_, i) => `<ellipse cx="${236 + (i % 4) * 22}" cy="${86 + Math.floor(i / 4) * 30}" rx="10" ry="3.5" fill="${C.lung2}" stroke="${C.lungLine}"/>`).join('')}
      ${lab(92, 172, 'normal alveoli', 'آلوئول‌های باز و پرهوا', { size: 10.5, fill: '#1d77a8' })}
      ${lab(268, 172, 'atelectasis', 'atel/o (ناقص) + ‎-ectasis (باز شدن)', { size: 10.5, fill: '#b03e5c' })}`, 'آتلکتازی');

  A['sleep-apnea'] = () => {
    const airway = (cx, closed) => `<path d="M${cx - 50} 40 C${cx - 50} 30 ${cx + 50} 30 ${cx + 50} 40 V170 H${cx - 50}Z" fill="${C.skin}" stroke="${C.skinLine}"/>
      <path d="M${cx - 12} 40 V170 M${cx + 12} 40 V170" stroke="${C.lungLine}" stroke-width="2"/>
      <rect x="${cx - 11}" y="40" width="22" height="130" fill="#eef7fd"/>
      ${closed ? `<path d="M${cx - 12} 90 C${cx} 98 ${cx + 6} 108 ${cx + 12} 112 L${cx + 12} 120 C${cx} 116 ${cx - 6} 110 ${cx - 12} 108Z" fill="#e88a94" stroke="#b9576a"/>` : ''}
      <path d="M${cx - 34} 74 C${cx - 24} 84 ${cx - 16} 88 ${cx - 12} 92" stroke="#e88a94" stroke-width="10" stroke-linecap="round" fill="none"/>`;
    return svg(360, 226, `${title('آپنه انسدادی خواب')}
      ${airway(92, false)}${airway(268, true)}
      ${lab(92, 196, 'open airway', 'راه هوایی باز', { size: 10.5, fill: '#1d77a8' })}
      ${lab(268, 196, 'obstructive sleep apnea', 'زبان و حلق راه را می‌بندند', { size: 10.5, fill: '#b03e5c' })}`, 'آپنه خواب');
  };

  /* ================= دنیای ۵: تشخیص و درمان ================= */
  A.spirometry = () => {
    const X = s => 60 + s * 44, Yv = v => 220 - v * 34;
    const curve = (fvc, fev1) => { let d = `M${X(0)} ${Yv(0)}`; for (let s = 0; s <= 6; s += 0.1) { const k = 1 - Math.exp(-s * (-Math.log(1 - fev1 / fvc))); d += ` L${X(s).toFixed(1)} ${Yv(fvc * k).toFixed(1)}`; } return d; };
    return svg(360, 262, `${title('اسپیرومتری: منحنی حجم-زمان')}
      <rect x="60" y="40" width="270" height="180" fill="#f5fafd" stroke="#d4e6f1"/>
      ${[0, 1, 2, 3, 4, 5].map(v => `<path d="M60 ${Yv(v)} h270" stroke="#e3eef5"/>${t(54, Yv(v) + 3, v + 'L', { size: 8.5, anchor: 'end', sym: true, fill: MUTED })}`).join('')}
      ${[0, 1, 2, 3, 4, 5, 6].map(s => t(X(s), 234, s + 's', { size: 8.5, sym: true, fill: MUTED })).join('')}
      <path d="M${X(1)} 40 V220" stroke="#b03e5c" stroke-dasharray="4 3"/>
      <path d="${curve(4.6, 3.8)}" stroke="#2e9bd6" stroke-width="2.8" fill="none"/>
      <path d="${curve(3.5, 2.0)}" stroke="#e07a3a" stroke-width="2.8" fill="none"/>
      ${t(X(1) + 4, 52, 'FEV1', { size: 10, sym: true, anchor: 'start', fill: '#b03e5c' })}
      ${lab(284, 66, 'normal', 'طبیعی: نسبت حدود ۸۰٪', { size: 9.5, fill: '#1d77a8' })}
      ${lab(284, 130, 'obstructive', 'انسدادی: نسبت کمتر از ۷۰٪', { size: 9.5, fill: '#c96a2a' })}
      ${f(196, 256, 'FEV1 = حجم ثانیه اول • FVC = کل حجم بازدم با فشار', { size: 9.5, fill: INK, w: 700 })}`, 'اسپیرومتری');
  };

  A['pulse-ox'] = () => svg(360, 210, `${title('پالس‌اکسیمتری: اشباع اکسیژن خون')}
      <path d="M40 120 C40 104 54 96 70 96 H200 C214 96 222 106 222 120 C222 134 214 144 200 144 H70 C54 144 40 136 40 120Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>
      <rect x="150" y="80" width="74" height="80" rx="16" fill="#3d6fd6"/><rect x="160" y="92" width="54" height="34" rx="6" fill="#0f2747"/>
      ${t(187, 115, '98%', { size: 15, sym: true, fill: '#6ff2c5' })}
      <path d="M162 140 l8 0 l4 -8 l4 14 l4 -6 l18 0" stroke="#fff" stroke-width="2" fill="none"/>
      <path d="M224 120 C262 120 270 60 300 60" stroke="#77868e" stroke-width="3" fill="none"/>
      ${lab(298, 100, 'pulse oximeter', 'پالس‌اکسیمتر', { size: 10.5 })}
      ${f(298, 140, 'SpO2 طبیعی: ۹۵ تا ۱۰۰٪', { size: 9.5, fill: '#3f8a05', w: 800 })}${f(298, 158, 'کمتر از ۹۰٪: هیپوکسمی', { size: 9.5, fill: '#c2413a', w: 800 })}
      ${f(130, 190, 'نور قرمز از انگشت می‌گذرد و رنگ خون شریانی را می‌سنجد', { size: 9 })}`, 'پالس‌اکسیمتری');

  A.intubation = () => {
    const sh = nid();
    return svg(360, 280, `${title('اینتوباسیون داخل نای (endotracheal)')}
      <g filter="url(#${sh})"><path d="M206 26 C150 26 118 54 112 92 C110 104 96 110 88 122 C84 128 92 134 100 136 C100 144 98 150 102 154 C98 160 100 166 106 168 C104 178 108 196 120 204 C128 210 140 212 150 220 L156 276 H300 L292 236 C306 206 316 170 314 128 C312 66 270 26 206 26Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <path d="M114 152 C140 144 186 146 206 160 C208 178 196 192 170 194 C142 194 120 184 114 172Z" fill="#e88a94" stroke="#b9576a"/>
      ${tracheaTube(204, 216, 276, 18)}<path d="M226 230 V276" stroke="#d9a0a0" stroke-width="14"/>
      <path d="M70 150 L104 158 C150 160 196 168 202 200 L204 262" stroke="#7fb6d8" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M70 150 L104 158 C150 160 196 168 202 200 L204 262" stroke="#e8f4fb" stroke-width="3" fill="none" stroke-linecap="round"/>
      <ellipse cx="204" cy="248" rx="11" ry="8" fill="#9fd0f0" stroke="#3f7fbf" opacity=".85"/>
      ${pin(80, 152, 50, 110)}${lab(46, 96, 'ET tube', 'لوله داخل نای', { size: 10, sym: false })}
      ${pin(214, 248, 290, 250)}${lab(316, 238, 'cuff', 'بالونک: راه را می‌بندد', { size: 9.5 })}
      ${pin(210, 230, 290, 200)}${lab(316, 188, 'trachea', 'نای', { size: 9.5 })}
      ${pin(228, 262, 290, 274)}${t(306, 278, 'esophagus', { size: 9, anchor: 'start' })}
      ${f(100, 268, 'لوله باید در نای باشد، نه در مری', { size: 9, fill: '#b03e5c', w: 800 })}`, 'اینتوباسیون', shadow(sh));
  };

  A.tracheostomy = () => svg(360, 240, `${title('تراکئوستومی: راه هوایی از جلوی گردن')}
      <path d="M110 50 C110 34 250 34 250 50 L262 232 H98Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>
      ${tracheaTube(180, 70, 232, 34)}
      <path d="M150 54 C160 46 200 46 210 54 L204 70 H156Z" fill="${C.air2}" stroke="${C.airLine}"/>
      <rect x="150" y="126" width="60" height="18" rx="9" fill="#e8f4fb" stroke="#3f7fbf" stroke-width="2"/>
      <path d="M118 134 H150 M210 134 H242" stroke="#77868e" stroke-width="3"/><circle cx="180" cy="135" r="6" fill="#fff" stroke="#3f7fbf" stroke-width="2"/>
      ${pin(210, 134, 290, 110)}${lab(306, 98, 'tracheostomy tube', 'لوله تراکئوستومی', { size: 9.5 })}
      ${pin(194, 180, 290, 186)}${lab(306, 176, 'trachea', 'نای', { size: 9.5 })}
      ${pin(160, 60, 70, 60)}${lab(52, 50, 'larynx', 'حنجره', { size: 9.5 })}
      ${f(70, 150, '‎-stomy = منفذ تازه', { size: 9, fill: INK })}${f(70, 168, '‎-tomy = فقط برش', { size: 9, fill: INK })}`, 'تراکئوستومی');

  A.thoracentesis = () => {
    const lg = lungs(180, 70, 0.95, { tree: false, trachea: false });
    return svg(360, 270, `${title('توراسنتز: کشیدن مایع از فضای جنب')}
      <path d="M70 56 C50 120 50 200 80 244 L280 244 C310 200 310 120 290 56Z" fill="#fdf2f4" stroke="${C.pleura}" stroke-width="3"/>
      ${lg.b}
      <path d="M58 196 C80 186 118 188 150 200 L150 236 L76 238 C64 228 60 214 58 196Z" fill="#9fd0f0" opacity=".85"/>
      <path d="M8 206 L70 212" stroke="#77868e" stroke-width="4" stroke-linecap="round"/><path d="M70 212 L96 214" stroke="#9aa9b1" stroke-width="1.6"/>
      <rect x="0" y="198" width="22" height="16" rx="3" fill="#cfd8dc" stroke="#77868e"/>
      ${pin(110, 216, 120, 262)}${t(124, 264, 'pleural effusion • مایع جنب', { size: 9.5, anchor: 'start' })}
      ${pin(40, 210, 64, 160)}${lab(64, 138, 'needle', 'سوزن بین دنده‌ها', { size: 9.5 })}
      ${f(260, 30, 'thorac/o + ‎-centesis', { size: 9.5, fill: '#1d77a8', w: 800 })}`, 'توراسنتز', lg.d);
  };

  A['oxygen-devices'] = () => {
    const c2 = (x, y, ic, en, fa, sub, bg) => card(x, y, 108, 92, bg, ic, en, fa, sub);
    return svg(360, 222, `${title('دستگاه‌های اکسیژن و داروی استنشاقی')}
      ${c2(8, 30, '👃', 'nasal cannula', 'کانولای بینی', 'اکسیژن کم‌جریان', '#e2f2fb')}
      ${c2(126, 30, '😷', 'face mask', 'ماسک اکسیژن', 'اکسیژن بیشتر', '#eef6e6')}
      ${c2(244, 30, '💤', 'CPAP', 'فشار مثبت مداوم', 'آپنه خواب', '#f3eafc')}
      ${c2(67, 128, '🌫️', 'nebulizer', 'نبولایزر', 'دارو به شکل مه', '#fdeee3')}
      ${c2(185, 128, '💨', 'MDI', 'اسپری استنشاقی', 'دوز اندازه‌گیری‌شده', '#fde6ec')}`, 'دستگاه‌های تنفسی');
  };

  A['lung-surgery'] = () => {
    const a = lungs(92, 70, 0.62, { tree: false }), b = lungs(268, 70, 0.62, { tree: false });
    return svg(360, 226, `${title('جراحی ریه: لوب یا کل ریه')}
      ${a.b}${b.b}
      <path d="M44 124 C60 120 80 118 86 116 L86 182 C66 176 50 178 42 182 C40 160 40 140 44 124Z" fill="#fff" stroke="#c2413a" stroke-width="2" stroke-dasharray="4 3"/>
      <path d="${b.R}" fill="#fff" stroke="#c2413a" stroke-width="2" stroke-dasharray="4 3"/>
      ${lab(92, 202, 'lobectomy', 'برداشتن یک لوب', { size: 10.5, fill: '#b03e5c' })}
      ${lab(268, 202, 'pneumonectomy', 'برداشتن کل یک ریه', { size: 10.5, fill: '#b03e5c' })}`, 'جراحی ریه', a.d + b.d);
  };

  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* نَفَس — دنیای ۰: زبان تنفس (پایه همه دنیاها)
 * پیش از رفتن سراغ بینی و ریه‌ها دو چیز را یاد می‌گیریم: «دستگاه تنفس چه می‌کند» و «واژه‌هایش چطور ساخته می‌شوند».
 * سطح ۱: مسیر هوا و تبادل گاز • سطح ۲: ریشه‌های اصلی • سطح ۳: پیشوندها، پسوندها و دام‌های همزاد
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: 'زبان تنفس', short: 'زبان تنفس', sub: 'دستگاه تنفس چه می‌کند و واژه‌هایش چطور ساخته می‌شوند: ریشه، پیشوند، پسوند و مسیر هوا',
    color: '#2E9BD6', dark: '#1F6F9F', light: '#E2F2FB',
    levels: ['مسیر هوا و تبادل گاز', 'ریشه‌های اصلی', 'پیشوندها و پسوندها'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: مسیر هوا و تبادل گاز ================= */
      {
        id: 'lx1', title: 'از بینی تا آلوئول', icon: '🫁', items: [
          L('مسیر هوا', `${fig('resp-overview', [], 'دستگاه تنفس')}هوا این مسیر را می‌پیماید:<br>بینی ← حلق (${e('pharynx')}) ← حنجره (${e('larynx')}) ← نای (${e('trachea')}) ← نایژه‌ها (${e('bronchi')}) ← نایژک‌ها (${e('bronchioles')}) ← کیسه‌های هوایی (${e('alveoli')})<br>بینی تا حنجره ${e('<b>upper respiratory tract</b>')} (مجرای فوقانی) است و نای تا آلوئول ${e('<b>lower respiratory tract</b>')} (مجرای تحتانی).`),
          L('متخصص‌ها', `${tbl([['متخصص', 'کار'], [e('pulmonologist'), 'بیماری‌های ریه و راه هوایی'], [e('otorhinolaryngologist (ENT)'), 'گوش، حلق و بینی'], [e('respiratory therapist (RRT)'), 'اکسیژن، داروی استنشاقی و دستگاه تنفس مصنوعی']])}${memo('ENT را با «اول گوش، بعد بینی، بعد گلو» به یاد بسپار: Ear، Nose، Throat.')}${pearl('در پرونده، بخش ریه را «pulmonary medicine» یا «pulmonology» می‌نویسند.')}`),
          M('هوا پس از حنجره وارد کدام بخش می‌شود؟', ['نای (trachea)', 'حلق (pharynx)', 'نایژک (bronchiole)', 'مری (esophagus)'], 'حنجره ← نای ← نایژه‌ها.', null, F('resp-overview', [])),
          M(`${e('<b>pulmonologist</b>')} کیست؟`, ['متخصص ریه', 'متخصص گوش و حلق و بینی', 'درمانگر تنفسی', 'جراح قفسه سینه'], 'pulmon/o (ریه) + -logist.'),
          T('حنجره جزو مجرای تنفسی فوقانی است.', true, 'بینی، سینوس‌ها، حلق و حنجره = upper tract.'),
          O('مسیر هوا را از بیرون به درون بچین', ['nose', 'pharynx', 'larynx', 'trachea', 'bronchi', 'alveoli'], 'بینی، حلق، حنجره، نای، نایژه، آلوئول.'),
          P('هر بخش را به نام فارسی‌اش وصل کن', [['pharynx', 'حلق'], ['larynx', 'حنجره'], ['trachea', 'نای'], ['bronchus', 'نایژه']], 'چهار ایستگاه اصلی هوا.'),
          B('اختصار ___ یعنی متخصص گوش، حلق و بینی.', ['ENT', 'URI', 'RRT'], 'ear, nose and throat.'),
          S('املای انگلیسی «دستگاه تنفس» را بنویس', 'respiratory system', 'spir/o = نفس کشیدن.', 'resp…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: 'دم، بازدم و تبادل گاز', icon: '🌬️', items: [
          L('سه کار تنفس', `${fig('gas-exchange', [], 'تبادل گاز در آلوئول')}• ${e('<b>ventilation</b>')} (تهویه): ورود و خروج هوا<br>• ${e('<b>external respiration</b>')}: تبادل گاز بین آلوئول و خون مویرگ<br>• ${e('<b>internal respiration</b>')}: تبادل گاز بین خون و سلول‌های بدن<br>اکسیژن (${e('O2')}) وارد خون می‌شود و دی‌اکسید کربن (${e('CO2')}) بیرون می‌رود.`),
          L('دم و بازدم', `${fig('breathing', [], 'کار دیافراگم')}${wb('in-', 'spir/o', '-ation')} ← دم (${e('inhalation')})<br>${wb('ex-', 'spir/o', '-ation')} ← بازدم (${e('exhalation')})<br>در دم، دیافراگم منقبض و صاف می‌شود و قفسه سینه بزرگ؛ در بازدم شل می‌شود و بالا می‌رود.${memo('Inspiration = In: هوا «تو» می‌آید. Expiration = Exit: هوا «بیرون» می‌رود.')}`),
          M('تبادل گاز بین آلوئول و خون چه نام دارد؟', ['external respiration', 'internal respiration', 'ventilation', 'expiration'], 'تنفس خارجی در ریه.', null, F('gas-exchange', [])),
          M('در دم، دیافراگم چه می‌کند؟', ['منقبض و صاف می‌شود و پایین می‌رود', 'شل می‌شود و بالا می‌رود', 'تغییری نمی‌کند', 'به جلو خم می‌شود'], 'قفسه سینه بزرگ و فشار درون آن کم می‌شود.', null, F('breathing', [])),
          T('internal respiration یعنی تبادل گاز بین خون و سلول‌های بدن.', true, 'تنفس داخلی در بافت‌ها.'),
          W('واژه‌ای بساز به معنی «بازدم»', ['ex-', 'spir/o', '-ation'], ['in-', 'pneum/o', '-itis'], 'ex- + spir/o + -ation = expiration.'),
          P('هر واژه را به معنی‌اش وصل کن', [['inspiration', 'دم'], ['expiration', 'بازدم'], ['ventilation', 'تهویه'], ['CO2', 'دی‌اکسید کربن']], 'واژه‌های پایه تنفس.'),
          B('ریشه ___ یعنی «نفس کشیدن».', ['spir/o', 'pneum/o', 'pulmon/o'], 'respiration، spirometry.'),
          S('املای انگلیسی «تهویه» را بنویس', 'ventilation', 'ورود و خروج هوا.', 'venti…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: 'آناتومی یک واژه', icon: '🧩', items: [
          L('واژه پزشکی یک پازل است', `${fig('wordparts', [], 'پیشوند + ریشه + پسوند')}هر واژه از قطعه‌هایی ساخته می‌شود:<br>• <b>ریشه</b>: معنی اصلی؛ مثل ${e('trache')} = نای<br>• <b>پیشوند</b>: اول واژه؛ مثل ${e('endo-')} = درون<br>• <b>پسوند</b>: آخر واژه؛ مثل ${e('-itis')} = التهاب<br>• <b>واکه رابط</b> (معمولاً ${e('o')}): ${e('bronch/o/scopy')}`),
          L('قاعده طلایی', `معنی را از <b>پسوند</b> شروع کن، بعد <b>پیشوند</b> و آخر <b>ریشه</b>:<br>${wb('bronch/o', '-itis')} ← «التهابِ نایژه»<br>${wb('endo-', 'trache/o', '-al')} ← «مربوط به درونِ نای»<br>${wb('rhin/o', '-itis')} ← «التهابِ بینی»${memo('اگر پسوند با حرف صدادار شروع شود، واکه رابط حذف می‌شود: bronch/o + -itis = bronchitis، نه bronchoitis.')}`),
          M(`${e('<b>bronchitis</b>')} یعنی…`, ['التهاب نایژه', 'التهاب نای', 'التهاب ریه', 'تنگی نایژه'], 'bronch/o + -itis.'),
          M(`در ${e('<b>endotracheal</b>')} پیشوند کدام است؟`, ['endo- = درون', '‎-al = مربوط به', 'trache/o = نای', 'tra- = از میان'], 'endo + trache + al.'),
          T('در rhinitis واکه رابط o حذف شده است.', true, 'rhin + itis = التهاب بینی.'),
          W('واژه‌ای بساز به معنی «التهاب نای»', ['trache/o', '-itis'], ['bronch/o', '-scopy', 'endo-'], 'trache/o + -itis = tracheitis.'),
          O('معنی endotracheal را با قاعده طلایی بخوان؛ ترتیب را بچین', ['‎-al: مربوط به', 'endo-: درون', 'trache/o: نای', 'نتیجه: مربوط به درون نای'], 'پسوند ← پیشوند ← ریشه.'),
          P('هر قطعه را به نوعش وصل کن', [['endo-', 'پیشوند'], ['trache/o', 'ریشه'], ['-itis', 'پسوند'], ['o در bronchoscopy', 'واکه رابط']], 'سه قطعه + واکه رابط.'),
          S('املای انگلیسی «التهاب بینی» را بنویس', 'rhinitis', 'rhin/o + -itis.', 'rhin…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲: ریشه‌های اصلی ================= */
      {
        id: 'lx4', title: 'ریشه‌های ریه و هوا', icon: '🎈', items: [
          L('سه ریشه برای ریه', `${tbl([['ریشه', 'معنی', 'مثال'], [e('pulmon/o'), 'ریه', e('pulmonary, pulmonologist')], [e('pneum/o, pneumon/o'), 'ریه؛ هوا', e('pneumonia, pneumothorax')], [e('spir/o'), 'نفس کشیدن', e('spirometry')], [e('ox/o, ox/i'), 'اکسیژن', e('hypoxia, oximeter')], [e('capn/o'), 'دی‌اکسید کربن', e('hypercapnia')]])}`),
          L('pneum/o دو معنی دارد', `${vs(['pneum/o = هوا', 'pneumothorax: هوا در قفسه سینه'], ['pneumon/o = ریه', 'pneumonia: التهاب ریه'])}${wb('cardi/o', 'pulmon/o', '-ary')} ← قلبی-ریوی؛ مثل ${e('CPR')}${memo('Pneumatic یعنی بادی (مثل لاستیک بادی)؛ pneum/o هم هوا را به یاد می‌آورد.')}`),
          M('کدام ریشه یعنی «ریه» نیست؟', ['spir/o', 'pulmon/o', 'pneumon/o', 'pneum/o'], 'spir/o یعنی نفس کشیدن.'),
          M(`${e('<b>pneumothorax</b>')} یعنی…`, ['هوا در فضای قفسه سینه', 'التهاب ریه', 'مایع در ریه', 'تومور ریه'], 'pneum/o (هوا) + thorac/o (قفسه سینه).'),
          T('cardiopulmonary یعنی مربوط به قلب و ریه.', true, 'cardi/o + pulmon/o + -ary.'),
          W('واژه‌ای بساز به معنی «مربوط به ریه»', ['pulmon/o', '-ary'], ['pneum/o', '-itis', 'spir/o'], 'pulmon/o + -ary = pulmonary.'),
          P('هر ریشه را به معنی‌اش وصل کن', [['pulmon/o', 'ریه'], ['spir/o', 'نفس کشیدن'], ['ox/o', 'اکسیژن'], ['capn/o', 'دی‌اکسید کربن']], 'ریشه‌های ریه و گاز.'),
          B('التهاب بافت ریه را ___ می‌نامند.', ['pneumonitis', 'pleuritis', 'pharyngitis'], 'pneumon/o + -itis.'),
          S('املای انگلیسی «ریوی» را بنویس', 'pulmonary', 'pulmon/o + -ary.', 'pulm…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: 'نقشه ریشه‌ها از بینی تا دیافراگم', icon: '🗺️', items: [
          L('هر عضو یک ریشه', `${fig('root-map', [], 'نقشه ریشه‌ها')}${tbl([['ریشه', 'معنی'], [e('rhin/o, nas/o'), 'بینی'], [e('pharyng/o'), 'حلق'], [e('laryng/o'), 'حنجره'], [e('trache/o'), 'نای'], [e('bronch/o, bronchi/o'), 'نایژه'], [e('pleur/o'), 'پرده جنب'], [e('thorac/o'), 'قفسه سینه'], [e('phren/o'), 'دیافراگم']])}`),
          L('یک ریشه، چند واژه', `${e('laryng/o')}: ${e('laryngitis')}، ${e('laryngoscopy')}، ${e('laryngectomy')}<br>${e('thorac/o')}: ${e('thoracotomy')}، ${e('thoracentesis')}، ${e('thoracoscopy')}<br>${e('pleur/o')}: ${e('pleurisy')}، ${e('pleural')}، ${e('pleurodynia')}${memo('phren/o هم دیافراگم است و هم «ذهن» (schizophrenia)؛ در دستگاه تنفس همیشه دیافراگم است.')}`),
          M('ریشه «حنجره» کدام است؟', ['laryng/o', 'pharyng/o', 'trache/o', 'rhin/o'], 'larynx = حنجره.', null, F('root-map', [])),
          M(`${e('<b>phrenic nerve</b>')} کدام عضله را کنترل می‌کند؟`, ['دیافراگم', 'عضلات بین‌دنده‌ای', 'حنجره', 'زبان'], 'phren/o = دیافراگم.'),
          T('thorac/o یعنی قفسه سینه.', true, 'thoracic cavity = حفره قفسه سینه.'),
          W('واژه‌ای بساز به معنی «برش قفسه سینه»', ['thorac/o', '-tomy'], ['pleur/o', '-scopy', 'laryng/o'], 'thorac/o + -tomy = thoracotomy.'),
          P('هر ریشه را به عضوش وصل کن', [['rhin/o', 'بینی'], ['pharyng/o', 'حلق'], ['pleur/o', 'پرده جنب'], ['bronch/o', 'نایژه']], 'نقشه ریشه‌ها.'),
          B('التهاب حلق را ___ می‌نامند.', ['pharyngitis', 'laryngitis', 'rhinitis'], 'pharyng/o + -itis.'),
          S('املای انگلیسی «حنجره» را بنویس', 'larynx', 'laryng/o.', 'lar…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: 'رنگ، خون و چرک', icon: '🎨', items: [
          L('ریشه‌های نشانه', `${tbl([['ریشه', 'معنی', 'مثال'], [e('cyan/o'), 'آبی، کبود', e('cyanosis')], [e('hem/o'), 'خون', e('hemoptysis, hemothorax')], [e('py/o'), 'چرک', e('pyothorax')], [e('muc/o'), 'مخاط', e('mucolytic')], [e('orth/o'), 'راست، ایستاده', e('orthopnea')], [e('tuss/i'), 'سرفه', e('antitussive')]])}`),
          L('سه چیز در فضای جنب', `${wb('pneum/o', 'thorac/o')} ← هوا در قفسه سینه<br>${wb('hem/o', 'thorac/o')} ← خون در قفسه سینه<br>${wb('py/o', 'thorac/o')} ← چرک در قفسه سینه${memo('ریشه اول می‌گوید «چه چیزی» و thorax می‌گوید «کجا»: هوا، خون یا چرک در قفسه سینه.')}${pearl('کبودی لب و بستر ناخن (cyanosis) یعنی اکسیژن خون کم است؛ یک نشانه فوری در بالین.')}`),
          M(`${e('<b>hemoptysis</b>')} یعنی…`, ['خلط خونی (سرفه کردن خون)', 'خون‌دماغ', 'خون در فضای جنب', 'کم‌خونی'], 'hem/o + -ptysis (تف کردن).'),
          M('چرک در فضای جنب چه نام دارد؟', ['pyothorax', 'hemothorax', 'pneumothorax', 'hydrothorax'], 'py/o = چرک؛ نام دیگرش empyema.'),
          T('cyan/o یعنی سرخ.', false, 'نادرست؛ cyan/o یعنی آبی و کبود.'),
          W('واژه‌ای بساز به معنی «خون در قفسه سینه»', ['hem/o', 'thorac/o'], ['py/o', '-itis', 'pneum/o'], 'hem/o + thorac/o = hemothorax.'),
          P('هر ریشه را به معنی‌اش وصل کن', [['cyan/o', 'کبود'], ['py/o', 'چرک'], ['tuss/i', 'سرفه'], ['muc/o', 'مخاط']], 'ریشه‌های نشانه.'),
          B('دارویی که سرفه را آرام می‌کند ___ است.', ['antitussive', 'expectorant', 'mucolytic'], 'anti- + tuss/i + -ive.'),
          S('املای انگلیسی «کبودی» را بنویس', 'cyanosis', 'cyan/o + -osis.', 'cyan…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳: پیشوندها و پسوندها ================= */
      {
        id: 'lx7', title: 'پیشوندهای تنفس', icon: '⏱️', items: [
          L('سرعت، عمق و حالت', `${tbl([['پیشوند', 'معنی', 'مثال'], [e('eu-'), 'خوب، طبیعی', e('eupnea')], [e('a-, an-'), 'بدون', e('apnea, anoxia')], [e('dys-'), 'دشوار', e('dyspnea')], [e('tachy-'), 'تند', e('tachypnea')], [e('brady-'), 'کند', e('bradypnea')], [e('hyper-'), 'بیش از حد', e('hyperpnea, hypercapnia')], [e('hypo-'), 'کمتر از حد', e('hypoxia')]])}`),
          L('پیشوندهای جا', `${tbl([['پیشوند', 'معنی', 'مثال'], [e('endo-'), 'درون', e('endotracheal')], [e('intra-'), 'درون', e('intrapleural')], [e('inter-'), 'بین', e('intercostal')], [e('para-'), 'کنار', e('paranasal')]])}${vs(['tachy-', 'تند: tachypnea'], ['brady-', 'کند: bradypnea'])}${memo('tachometer عقربه سرعت ماشین است؛ tachy- یعنی تند.')}`),
          M(`${e('<b>dyspnea</b>')} یعنی…`, ['تنفس دشوار، تنگی نفس', 'تنفس تند', 'قطع تنفس', 'تنفس طبیعی'], 'dys- + -pnea.'),
          M('کدام پیشوند یعنی «طبیعی، خوب»؟', ['eu-', 'dys-', 'a-', 'hyper-'], 'eupnea = تنفس طبیعی.'),
          T('paranasal sinuses یعنی سینوس‌های کنار بینی.', true, 'para- = کنار.'),
          W('واژه‌ای بساز به معنی «درون فضای جنب»', ['intra-', 'pleur/o', '-al'], ['inter-', 'cost/o', '-itis'], 'intra- + pleur/o + -al = intrapleural.'),
          P('هر پیشوند را به معنی‌اش وصل کن', [['tachy-', 'تند'], ['brady-', 'کند'], ['a-', 'بدون'], ['hypo-', 'کمتر از حد']], 'پیشوندهای تنفس.'),
          B('عضلات بین دنده‌ها ___ muscles نام دارند.', ['intercostal', 'intracostal', 'paracostal'], 'inter- = بین.'),
          S('املای انگلیسی «تنگی نفس» را بنویس', 'dyspnea', 'dys- + -pnea.', 'dysp…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: 'پسوندهای تنفس', icon: '✂️', items: [
          L('پسوندهای نشانه و بیماری', `${tbl([['پسوند', 'معنی', 'مثال'], [e('-pnea'), 'تنفس', e('apnea')], [e('-ptysis'), 'تف کردن', e('hemoptysis')], [e('-oxia'), 'حالت اکسیژن', e('hypoxia')], [e('-capnia'), 'حالت CO2', e('hypercapnia')], [e('-ectasis'), 'گشادی، باز شدن', e('bronchiectasis')], [e('-phonia'), 'صدا', e('dysphonia')], [e('-spasm'), 'انقباض ناگهانی', e('bronchospasm')]])}`),
          L('پسوندهای تشخیص و جراحی', `${tbl([['پسوند', 'معنی', 'مثال'], [e('-scopy'), 'مشاهده با ابزار', e('bronchoscopy')], [e('-metry'), 'اندازه‌گیری', e('spirometry')], [e('-centesis'), 'سوراخ کردن و کشیدن مایع', e('thoracentesis')], [e('-stomy'), 'ایجاد منفذ', e('tracheostomy')], [e('-tomy'), 'برش', e('tracheotomy')], [e('-ectomy'), 'برداشتن', e('lobectomy')], [e('-plasty'), 'ترمیم', e('rhinoplasty')]])}${memo('-stomy یک «دهان» (stoma) تازه می‌سازد که باز می‌ماند؛ -tomy فقط برش است.')}`),
          M(`${e('<b>bronchiectasis</b>')} یعنی…`, ['گشادی دائمی نایژه‌ها', 'تنگی نایژه', 'التهاب نایژه', 'برداشتن نایژه'], 'bronchi/o + -ectasis.'),
          M('کدام پسوند یعنی «ایجاد منفذ»؟', ['‎-stomy', '‎-tomy', '‎-ectomy', '‎-scopy'], 'tracheostomy = منفذ در نای.'),
          T('spirometry یعنی اندازه‌گیری نفس.', true, 'spir/o + -metry.'),
          W('واژه‌ای بساز به معنی «مشاهده نایژه با ابزار»', ['bronch/o', '-scopy'], ['-stomy', 'trache/o', '-ectasis'], 'bronch/o + -scopy = bronchoscopy.'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-ptysis', 'تف کردن'], ['-capnia', 'حالت دی‌اکسید کربن'], ['-centesis', 'کشیدن مایع با سوزن'], ['-phonia', 'صدا']], 'پسوندهای تنفس.'),
          B('برداشتن یک لوب ریه ___ نام دارد.', ['lobectomy', 'lobotomy', 'lobostomy'], 'lob/o + -ectomy.'),
          S('املای انگلیسی «اسپیرومتری» را بنویس', 'spirometry', 'spir/o + -metry.', 'spiro…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: 'دام‌های همزاد', icon: '🪤', items: [
          L('یک حرف، یک دنیا فرق', `${fig('twins', [], 'پسوندها و ریشه‌های همزاد')}${vs(['‎-pnea', 'تنفس: dyspnea'], ['‎-ptysis', 'تف کردن: hemoptysis'])}${vs(['laryng/o', 'حنجره: laryngitis'], ['pharyng/o', 'حلق: pharyngitis'])}`),
          L('دوقلوهای دیگر', `${vs(['‎-stomy', 'منفذ ماندگار: tracheostomy'], ['‎-tomy', 'برش: tracheotomy'])}${vs(['pleur/o', 'پرده جنب: pleurisy'], ['pulmon/o', 'خود ریه: pulmonary'])}${vs(['hypoxia', 'کمبود اکسیژن در بافت'], ['hypoxemia', 'کمبود اکسیژن در خون'])}${memo('-emia یعنی خون: hypoxemia در خون است، hypoxia در بافت.')}`),
          M(`${e('<b>hemoptysis</b>')} و ${e('<b>epistaxis</b>')} چه فرقی دارند؟`, ['اولی خون از ریه با سرفه، دومی خون از بینی', 'هر دو خون از بینی', 'هر دو خون از ریه', 'اولی خون در فضای جنب، دومی در معده'], '-ptysis = تف کردن؛ epistaxis = خون‌دماغ.'),
          M('کمبود اکسیژن در خون چه نام دارد؟', ['hypoxemia', 'hypoxia', 'hypercapnia', 'anoxia'], 'hypo- + ox/o + -emia.'),
          T('tracheotomy و tracheostomy دقیقاً یک معنی دارند.', false, 'نادرست؛ ‎-tomy فقط برش است و ‎-stomy منفذی ماندگار با لوله.'),
          W('واژه‌ای بساز به معنی «کمبود اکسیژن خون»', ['hypo-', 'ox/o', '-emia'], ['hyper-', 'capn/o', '-pnea'], 'hypo- + ox/o + -emia = hypoxemia.'),
          P('هر جفت را درست وصل کن', [['-pnea', 'تنفس'], ['-ptysis', 'تف کردن'], ['laryng/o', 'حنجره'], ['pharyng/o', 'حلق']], 'دوقلوهای فریبنده.'),
          B('تنگی نفس فقط در حالت خوابیده و بهتر شدن با نشستن را ___ می‌نامند.', ['orthopnea', 'eupnea', 'bradypnea'], 'orth/o = راست، ایستاده.'),
          S('املای انگلیسی «خلط خونی» را بنویس', 'hemoptysis', 'hem/o + -ptysis.', 'hemop…'),
          N('m2r:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نَفَس — دنیای ۱: تنفس فوقانی
 * سطح ۱: بینی و سینوس‌ها • سطح ۲: حلق و حنجره • سطح ۳: بیماری‌ها و جراحی‌های مجرای فوقانی */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'up', sym: 'Up', name: 'تنفس فوقانی', short: 'مجرای فوقانی', sub: 'بینی، سینوس‌ها، حلق، لوزه‌ها و حنجره؛ و بیماری‌ها و جراحی‌هایشان',
    color: '#E0708C', dark: '#B04A66', light: '#FCE6EC',
    levels: ['بینی و سینوس‌ها', 'حلق و حنجره', 'بیماری و جراحی فوقانی'],
    gens: EA.genIds('up'),
    lessons: [
      /* ================= سطح ۱: بینی و سینوس‌ها ================= */
      {
        id: 'up1', title: 'بینی: تهویه‌کننده بدن', icon: '👃', items: [
          L('بینی چه می‌کند؟', `بینی هوا را <b>گرم</b>، <b>مرطوب</b> و <b>تصفیه</b> می‌کند. هوا از ${e('<b>nares</b>')} (سوراخ‌های بینی) وارد ${e('<b>nasal cavity</b>')} (حفره بینی) می‌شود. ${e('<b>nasal septum</b>')} (تیغه بینی) حفره را دو نیمه می‌کند.${wb('nas/o', '-al')} ← مربوط به بینی؛ ریشه دیگر بینی ${e('rhin/o')} است.`),
          L('مژک و مخاط', `${fig('cilia', [], 'مژک‌ها و مخاط')}دیواره راه هوایی را ${e('<b>mucous membrane</b>')} پوشانده که ${e('<b>mucus</b>')} (مخاط) می‌سازد. ${e('<b>cilia</b>')} (مژک‌ها) مثل پله‌برقی، مخاط و گرد و غبار را به سمت حلق می‌رانند.${vs(['mucous', 'صفت: mucous membrane'], ['mucus', 'اسم: خود مخاط'])}${memo('mucous با ou صفت است (مثل famous)؛ mucus با u ماده است.')}`),
          M('کدام بخش حفره بینی را به دو نیمه تقسیم می‌کند؟', ['nasal septum', 'nares', 'cilia', 'uvula'], 'sept/o = تیغه.'),
          M('کار مژک‌ها (cilia) چیست؟', ['راندن مخاط و ذرات به بیرون', 'تولید مخاط', 'گرم کردن هوا', 'تبادل گاز'], 'mucociliary escalator.', null, F('cilia', [])),
          T('mucus اسم است و mucous صفت.', true, 'mucous membrane مخاط (mucus) می‌سازد.'),
          W('واژه‌ای بساز به معنی «مربوط به بینی»', ['nas/o', '-al'], ['rhin/o', '-itis', 'sept/o'], 'nas/o + -al = nasal.'),
          P('هر بخش را به کارش وصل کن', [['nares', 'سوراخ‌های بینی'], ['nasal septum', 'تیغه میانی'], ['mucous membrane', 'غشای مخاط‌ساز'], ['cilia', 'مژک‌های پاک‌کننده']], 'بینی.'),
          B('آبریزش بینی را ___ می‌نامند.', ['rhinorrhea', 'rhinitis', 'epistaxis'], 'rhin/o + -rrhea.'),
          S('املای انگلیسی «مخاط» (اسم) را بنویس', 'mucus', 'اسم بدون o.', 'muc…'),
          N('t2f:up')
        ]
      },
      {
        id: 'up2', title: 'سینوس‌های اطراف بینی', icon: '🎭', items: [
          L('چهار جفت سینوس', `${fig('nasal-sinuses', [], 'سینوس‌های اطراف بینی')}${e('<b>paranasal sinuses</b>')} حفره‌های هوایی در استخوان‌های جمجمه‌اند که سر را سبک و صدا را پرطنین می‌کنند:<br>• ${e('frontal')}: پیشانی<br>• ${e('maxillary')}: زیر چشم؛ بزرگ‌ترین<br>• ${e('ethmoid')}: بین دو چشم<br>• ${e('sphenoid')}: عقب حفره بینی`),
          L('سینوزیت', `${wb('sinus/o', '-itis')} ← التهاب سینوس؛ با گرفتگی بینی، درد صورت و ترشح چرکی.${fig('sinus-xray', [], 'رادیوگرافی نیم‌رخ سینوس‌ها')}${memo('para- یعنی «کنار»: paranasal = کنار بینی.')}${pearl('درد سینوس ماگزیلاری گاهی شبیه دندان‌درد فک بالاست.')}`),
          M('بزرگ‌ترین سینوس کدام است؟', ['maxillary', 'frontal', 'ethmoid', 'sphenoid'], 'در استخوان فک بالا.', null, F('nasal-sinuses', [])),
          M(`${e('<b>paranasal</b>')} یعنی…`, ['کنار بینی', 'درون بینی', 'زیر بینی', 'پشت حلق'], 'para- = کنار.'),
          T('سینوس اتموئید بین دو چشم قرار دارد.', true, 'ethmoid air cells.'),
          P('هر سینوس را به جایش وصل کن', [['frontal', 'پیشانی'], ['maxillary', 'زیر چشم'], ['ethmoid', 'بین دو چشم'], ['sphenoid', 'عقب حفره بینی']], 'چهار سینوس.'),
          W('واژه‌ای بساز به معنی «التهاب سینوس»', ['sinus/o', '-itis'], ['nas/o', '-plasty', 'rhin/o'], 'sinus/o + -itis = sinusitis.'),
          B('سینوس‌ها جمجمه را ___ می‌کنند.', ['سبک', 'سنگین', 'سخت'], 'حفره‌های هوایی.'),
          S('املای انگلیسی «سینوزیت» را بنویس', 'sinusitis', 'sinus/o + -itis.', 'sinus…'),
          N('f2t:up')
        ]
      },
      {
        id: 'up3', title: 'خون‌دماغ، آبریزش و پولیپ', icon: '🩸', items: [
          L('نشانه‌های بینی', `${tbl([['واژه', 'معنی'], [e('rhinorrhea'), 'آبریزش بینی'], [e('epistaxis'), 'خون‌دماغ (rhinorrhagia)'], [e('rhinitis'), 'التهاب مخاط بینی'], [e('coryza'), 'سرماخوردگی (زکام)'], [e('nasal polyps'), 'برآمدگی‌های خوش‌خیم مخاط بینی'], [e('deviated septum'), 'انحراف تیغه بینی']])}`),
          L('ترمیم بینی', `${wb('rhin/o', '-plasty')} ← ترمیم جراحی بینی<br>${wb('sept/o', '-plasty')} ← ترمیم تیغه بینی؛ برای ${e('deviated septum')}<br>${wb('polyp/o', '-ectomy')} ← برداشتن پولیپ${pearl('یادداشت بالینی: مرد ۴۵ ساله با انسداد راه هوایی از پولیپ‌های بزرگ حفره بینی راست؛ با snare بینی polypectomy شد و پاتولوژی کارسینوم پاپیلاری کم‌درجه گزارش کرد.')}`),
          M(`${e('<b>epistaxis</b>')} یعنی…`, ['خون‌دماغ', 'آبریزش بینی', 'عطسه', 'خلط خونی'], 'rhinorrhagia هم می‌گویند.'),
          M('جراحی اصلاح تیغه کج بینی چه نام دارد؟', ['septoplasty', 'rhinorrhea', 'polypectomy', 'sinusitis'], 'sept/o + -plasty.'),
          T('coryza همان سرماخوردگی معمولی است.', true, 'common cold.'),
          W('واژه‌ای بساز به معنی «ترمیم جراحی بینی»', ['rhin/o', '-plasty'], ['-rrhea', 'sept/o', '-itis'], 'rhin/o + -plasty = rhinoplasty.'),
          P('هر واژه را به معنی‌اش وصل کن', [['rhinorrhea', 'آبریزش بینی'], ['nasal polyps', 'برآمدگی خوش‌خیم مخاط'], ['deviated septum', 'انحراف تیغه'], ['polypectomy', 'برداشتن پولیپ']], 'بینی.'),
          B('پسوند ___ یعنی جریان و ترشح.', ['‎-rrhea', '‎-rrhagia', '‎-ptysis'], 'rhinorrhea.'),
          S('املای انگلیسی «خون‌دماغ» را بنویس', 'epistaxis', 'epi- + staxis (چکیدن).', 'epis…'),
          N('sp:up')
        ]
      },
      /* ================= سطح ۲: حلق و حنجره ================= */
      {
        id: 'up4', title: 'حلق و لوزه‌ها', icon: '👅', items: [
          L('سه بخش حلق', `${fig('upper-airway', [], 'مجرای فوقانی در برش ساژیتال')}${e('<b>pharynx</b>')} (حلق) راه مشترک هوا و غذاست:<br>• ${e('nasopharynx')}: پشت بینی؛ جای ${e('adenoids')}<br>• ${e('oropharynx')}: پشت دهان؛ جای ${e('palatine tonsils')}<br>• ${e('laryngopharynx')}: پایین‌ترین بخش؛ به حنجره و مری باز می‌شود`),
          L('لوزه‌ها', `${tbl([['لوزه', 'جا'], [e('adenoids (pharyngeal tonsil)'), 'سقف حلق بینی'], [e('palatine tonsils'), 'دو طرف حلق دهانی'], [e('lingual tonsils'), 'ته زبان']])}${wb('tonsill/o', '-itis')} ← التهاب لوزه<br>${wb('adenoid/o', '-ectomy')} ← برداشتن آدنوئید${fig('throat-culture', [], 'کشت گلو: برداشتن نمونه از ناحیه لوزه')}${memo('tonsil با یک l است ولی ریشه‌اش tonsill/o با دو l: tonsillitis، tonsillectomy.')}`),
          M('آدنوئیدها در کدام بخش حلق‌اند؟', ['nasopharynx', 'oropharynx', 'laryngopharynx', 'larynx'], 'pharyngeal tonsil.', null, F('upper-airway', [])),
          M(`${e('<b>oropharynx</b>')} کجاست؟`, ['پشت دهان', 'پشت بینی', 'بالای حنجره', 'درون نای'], 'or/o = دهان.'),
          T('حلق هم راه هوا است و هم راه غذا.', true, 'pharynx مشترک است.'),
          O('بخش‌های حلق را از بالا به پایین بچین', ['nasopharynx', 'oropharynx', 'laryngopharynx'], 'بینی ← دهان ← حنجره.'),
          W('واژه‌ای بساز به معنی «برداشتن لوزه»', ['tonsill/o', '-ectomy'], ['adenoid/o', '-itis', 'pharyng/o'], 'tonsill/o + -ectomy = tonsillectomy.'),
          P('هر لوزه را به جایش وصل کن', [['adenoids', 'حلق بینی'], ['palatine tonsils', 'دو طرف حلق دهانی'], ['lingual tonsils', 'ته زبان'], ['uvula', 'آویزان از کام نرم']], 'لوزه‌ها و زبان کوچک.'),
          S('املای انگلیسی «حلق» را بنویس', 'pharynx', 'pharyng/o.', 'phar…'),
          N('d2t:up')
        ]
      },
      {
        id: 'up5', title: 'حنجره: جعبه صدا', icon: '🎤', items: [
          L('ساختار حنجره', `${fig('larynx', [], 'حنجره از روبه‌رو')}${e('<b>larynx</b>')} (حنجره) بین حلق و نای است و تارهای صوتی را دارد. بزرگ‌ترین غضروفش ${e('<b>thyroid cartilage</b>')} است که «سیب آدم» را می‌سازد. ${e('<b>epiglottis</b>')} دریچه‌ای است که هنگام قورت دادن حنجره را می‌پوشاند تا غذا وارد راه هوایی نشود.`),
          L('تارهای صوتی', `${fig('vocal-cords', [], 'تارهای صوتی از بالا')}${e('<b>vocal cords</b>')} دو چین در حنجره‌اند؛ با لرزیدن صدا می‌سازند. فضای بینشان و خود تارها ${e('<b>glottis</b>')} نام دارد.${fig('vocal-cords-photo', [], 'تارهای صوتی در لارنگوسکوپی')}${memo('epi- یعنی «روی»: epiglottis «روی گلوت» است و مثل در، آن را می‌بندد.')}`),
          M('کدام بخش هنگام قورت دادن روی حنجره را می‌پوشاند؟', ['epiglottis', 'uvula', 'thyroid cartilage', 'vocal cords'], 'epi- + glottis.', null, F('larynx', [])),
          M('سیب آدم کدام غضروف است؟', ['thyroid cartilage', 'cricoid cartilage', 'epiglottis', 'hyoid'], 'بزرگ‌ترین غضروف حنجره.'),
          T('هنگام نفس کشیدن گلوت باز است.', true, 'تارهای صوتی از هم دور می‌شوند.', F('vocal-cords', [])),
          W('واژه‌ای بساز به معنی «التهاب اپی‌گلوت»', ['epiglott/o', '-itis'], ['laryng/o', '-spasm', 'trache/o'], 'epiglott/o + -itis = epiglottitis.'),
          P('هر بخش را به کارش وصل کن', [['larynx', 'جعبه صدا'], ['epiglottis', 'دریچه روی حنجره'], ['glottis', 'تارها و فضای بینشان'], ['thyroid cartilage', 'سیب آدم']], 'حنجره.'),
          B('انقباض ناگهانی حنجره که راه هوا را می‌بندد ___ است.', ['laryngospasm', 'laryngitis', 'bronchospasm'], 'laryng/o + -spasm.'),
          S('املای انگلیسی «اپی‌گلوت» را بنویس', 'epiglottis', 'epi- + glottis.', 'epig…'),
          N('m2r:up')
        ]
      },
      {
        id: 'up6', title: 'صدا: آفونی و دیسفونی', icon: '🔇', items: [
          L('واژه‌های صدا', `${wb('a-', 'phon/o', '-ia')} ← ${e('<b>aphonia</b>')}: از دست رفتن صدا<br>${wb('dys-', 'phon/o', '-ia')} ← ${e('<b>dysphonia</b>')}: صدای گرفته یا دشوار<br>${wb('laryng/o', '-itis')} ← التهاب حنجره، معمولاً با گرفتگی صدا`),
          L('معاینه حنجره', `${wb('laryng/o', '-scopy')} ← دیدن حنجره با ${e('laryngoscope')}<br>${wb('laryng/o', '-ectomy')} ← برداشتن حنجره، بیشتر برای سرطان؛ پس از آن بیمار با تراکئوستومی نفس می‌کشد.${vs(['aphonia', 'بی‌صدایی کامل'], ['dysphonia', 'صدای گرفته و ضعیف'])}${pearl('خشونت صدای بیش از سه هفته، به‌ویژه در فرد سیگاری، باید با لارنگوسکوپی بررسی شود.')}`),
          M(`${e('<b>aphonia</b>')} یعنی…`, ['از دست رفتن صدا', 'صدای گرفته', 'التهاب حنجره', 'سرفه خشک'], 'a- + phon/o + -ia.'),
          M('دیدن حنجره با ابزار چه نام دارد؟', ['laryngoscopy', 'laryngectomy', 'bronchoscopy', 'rhinoscopy'], 'laryng/o + -scopy.'),
          T('dysphonia یعنی بی‌صدایی کامل.', false, 'نادرست؛ dysphonia صدای گرفته است؛ بی‌صدایی کامل aphonia است.'),
          W('واژه‌ای بساز به معنی «برداشتن حنجره»', ['laryng/o', '-ectomy'], ['-scopy', 'pharyng/o', '-itis'], 'laryng/o + -ectomy = laryngectomy.'),
          P('هر واژه را به معنی‌اش وصل کن', [['laryngitis', 'التهاب حنجره'], ['aphonia', 'بی‌صدایی'], ['dysphonia', 'صدای گرفته'], ['laryngectomy', 'برداشتن حنجره']], 'صدا و حنجره.'),
          B('ریشه ___ یعنی صدا.', ['phon/o', 'laryng/o', 'or/o'], 'aphonia، dysphonia.'),
          S('املای انگلیسی «التهاب حنجره» را بنویس', 'laryngitis', 'laryng/o + -itis.', 'laryn…'),
          N('t2f:up')
        ]
      },
      /* ================= سطح ۳: بیماری و جراحی فوقانی ================= */
      {
        id: 'up7', title: 'عفونت‌های مجرای فوقانی', icon: '🤧', items: [
          L('التهاب‌ها', `${tbl([['واژه', 'معنی'], [e('URI'), 'عفونت دستگاه تنفس فوقانی؛ مثل سرماخوردگی'], [e('pharyngitis'), 'التهاب حلق؛ گلودرد'], [e('tonsillitis'), 'التهاب لوزه'], [e('adenoiditis'), 'التهاب آدنوئید'], [e('epiglottitis'), 'التهاب اپی‌گلوت؛ خطر انسداد راه هوایی در کودک'], [e('croup'), 'خروسک: سرفه پارسی و استریدور در کودکان']])}`),
          L('کشت گلو', `برای تشخیص گلودرد استرپتوکوکی، از ناحیه لوزه با سواپ نمونه می‌گیرند: ${e('<b>throat culture</b>')}.${pearl('کودکی با تب، آبریزش دهان، صدای خفه و نشستن رو به جلو ممکن است epiglottitis داشته باشد؛ در این حالت معاینه حلق با آبسلانگ ممنوع است چون راه هوایی را می‌بندد.')}${memo('croup صدای «خروس» می‌دهد: سرفه پارسی و خشن.')}`),
          M('سرفه پارسی و استریدور در کودک خردسال بیشتر نشانه چیست؟', ['croup', 'asthma', 'sinusitis', 'pneumonia'], 'عفونت ویروسی حنجره و نای.'),
          M('URI یعنی…', ['عفونت دستگاه تنفس فوقانی', 'عفونت ادراری', 'بیماری انسدادی ریه', 'عفونت ریه'], 'upper respiratory infection.'),
          T('epiglottitis می‌تواند راه هوایی کودک را ببندد.', true, 'اورژانس راه هوایی.'),
          W('واژه‌ای بساز به معنی «التهاب حلق»', ['pharyng/o', '-itis'], ['laryng/o', '-ectomy', 'tonsill/o'], 'pharyng/o + -itis = pharyngitis.'),
          P('هر بیماری را به توضیحش وصل کن', [['pharyngitis', 'گلودرد'], ['tonsillitis', 'التهاب لوزه'], ['croup', 'سرفه پارسی کودک'], ['coryza', 'سرماخوردگی']], 'عفونت‌های فوقانی.'),
          B('نمونه‌گیری با سواپ از گلو برای یافتن باکتری ___ نام دارد.', ['throat culture', 'sputum culture', 'sweat test'], 'کشت گلو.'),
          S('املای انگلیسی «التهاب لوزه» را بنویس', 'tonsillitis', 'tonsill/o + -itis.', 'tonsil…'),
          N('ab:up')
        ]
      },
      {
        id: 'up8', title: 'خروپف و آپنه خواب', icon: '😴', items: [
          L('آپنه انسدادی خواب', `${fig('sleep-apnea', [], 'آپنه انسدادی خواب')}در ${e('<b>obstructive sleep apnea</b>')} (${e('OSA')}) هنگام خواب حلق و زبان راه هوا را می‌بندند؛ بیمار خروپف می‌کند، چند ثانیه نفسش قطع می‌شود و روز خواب‌آلود است.`),
          L('درمان', `• ${e('<b>CPAP</b>')}: دستگاهی که با ماسک هوای تحت فشار می‌دمد تا راه هوا باز بماند<br>• ${e('<b>UPP</b>')} (${e('uvulopalatopharyngoplasty')}): برداشتن بخشی از زبان کوچک، کام نرم و حلق<br>• کاهش وزن و خوابیدن به پهلو${wb('uvul/o', 'palat/o', 'pharyng/o', '-plasty')}${pearl('تشخیص قطعی آپنه خواب با polysomnography (مطالعه خواب) است.')}`),
          M('OSA یعنی…', ['آپنه انسدادی خواب', 'سندروم دیسترس تنفسی', 'عفونت تنفسی فوقانی', 'حجم باقیمانده'], 'obstructive sleep apnea.', null, F('sleep-apnea', [])),
          M('کدام دستگاه با فشار مثبت راه هوا را در خواب باز نگه می‌دارد؟', ['CPAP', 'nebulizer', 'spirometer', 'oximeter'], 'continuous positive airway pressure.'),
          T('UPP جراحی روی زبان کوچک، کام و حلق است.', true, 'uvulopalatopharyngoplasty.'),
          W('نام جراحی زبان کوچک، کام و حلق را بساز', ['uvul/o', 'palat/o', 'pharyng/o', '-plasty'], ['laryng/o', '-itis'], 'uvulopalatopharyngoplasty.'),
          P('هر واژه را به معنی‌اش وصل کن', [['apnea', 'قطع تنفس'], ['polysomnography', 'مطالعه خواب'], ['CPAP', 'فشار مثبت مداوم'], ['uvula', 'زبان کوچک']], 'آپنه خواب.'),
          B('ریشه ___ یعنی خواب.', ['somn/o', 'phon/o', 'spir/o'], 'polysomnography.'),
          S('املای انگلیسی «آپنه» را بنویس', 'apnea', 'a- + -pnea.', 'ap…'),
          N('f2t:up')
        ]
      },
      {
        id: 'up9', title: 'جراحی‌های فوقانی', icon: '🔪', items: [
          L('برداشتن و ترمیم', `${tbl([['جراحی', 'معنی'], [e('tonsillectomy'), 'برداشتن لوزه'], [e('adenoidectomy'), 'برداشتن آدنوئید'], [e('septoplasty / SMR'), 'اصلاح تیغه بینی'], [e('rhinoplasty'), 'ترمیم شکل بینی'], [e('polypectomy'), 'برداشتن پولیپ'], [e('laryngectomy'), 'برداشتن حنجره']])}`),
          L('یک داستان از منابع', `در یکی از تمرین‌های منبع، کودکی با گلودردهای مکرر، بلع دشوار و دردناک و خروپف شدید شبانه نزد پزشک آمد. پزشک برداشتن لوزه‌ها و آدنوئیدها (${e('T&A')}) را پیشنهاد کرد.${pearl('پس از tonsillectomy، خونریزی تا حدود ۱۰ روز بعد هم ممکن است رخ دهد؛ بلع مکرر می‌تواند نشانه آن باشد.')}`),
          M('برداشتن آدنوئید چه نام دارد؟', ['adenoidectomy', 'adenoiditis', 'tonsillectomy', 'polypectomy'], 'adenoid/o + -ectomy.'),
          M('SMR برای کدام مشکل انجام می‌شود؟', ['انحراف تیغه بینی', 'پولیپ ریه', 'سرطان حنجره', 'سینوزیت'], 'submucous resection of the septum.'),
          T('laryngectomy یعنی ترمیم حنجره.', false, 'نادرست؛ ‎-ectomy = برداشتن.'),
          W('واژه‌ای بساز به معنی «ترمیم تیغه بینی»', ['sept/o', '-plasty'], ['rhin/o', '-ectomy', 'polyp/o'], 'sept/o + -plasty = septoplasty.'),
          P('هر جراحی را به معنی‌اش وصل کن', [['tonsillectomy', 'برداشتن لوزه'], ['rhinoplasty', 'ترمیم بینی'], ['polypectomy', 'برداشتن پولیپ'], ['laryngectomy', 'برداشتن حنجره']], 'جراحی‌های فوقانی.'),
          B('متخصصی که این جراحی‌ها را انجام می‌دهد ___ است.', ['otorhinolaryngologist', 'pulmonologist', 'cardiologist'], 'ENT.'),
          S('املای انگلیسی «برداشتن لوزه» را بنویس', 'tonsillectomy', 'tonsill/o + -ectomy.', 'tonsill…'),
          N('wb:up')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نَفَس — دنیای ۲: تنفس تحتانی
 * سطح ۱: نای و درخت نایژه‌ای • سطح ۲: ریه‌ها و آلوئول • سطح ۳: پرده جنب، میان‌سینه و دیافراگم */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lo', sym: 'Lo', name: 'تنفس تحتانی', short: 'مجرای تحتانی', sub: 'نای، نایژه‌ها، آلوئول‌ها، لوب‌های ریه، پرده جنب، میان‌سینه و دیافراگم',
    color: '#8E6BD8', dark: '#6447B0', light: '#EFE8FB',
    levels: ['نای و درخت نایژه‌ای', 'ریه‌ها و آلوئول', 'جنب، میان‌سینه و دیافراگم'],
    gens: EA.genIds('lo'),
    lessons: [
      /* ================= سطح ۱: نای و درخت نایژه‌ای ================= */
      {
        id: 'lo1', title: 'نای: لوله حلقه‌دار', icon: '🦒', items: [
          L('نای', `${e('<b>trachea</b>')} (نای) لوله‌ای حدود ۱۲ سانتی‌متری از حنجره تا قفسه سینه است. حلقه‌های <b>C شکل غضروفی</b> آن را همیشه باز نگه می‌دارند. پایین نای، جایی که دوشاخه می‌شود، ${e('<b>carina</b>')} نام دارد.${wb('trache/o', '-al')} ← مربوط به نای`),
          L('واژه‌های نای', `${tbl([['واژه', 'معنی'], [e('tracheitis'), 'التهاب نای'], [e('tracheomalacia'), 'نرمی غضروف نای'], [e('tracheotomy'), 'برش نای'], [e('tracheostomy'), 'منفذ ماندگار در نای'], [e('endotracheal'), 'درون نای']])}${memo('حلقه‌های نای C شکل‌اند و پشتشان باز است تا مری پشت نای هنگام بلع جا داشته باشد.')}`),
          M('چه چیزی نای را همیشه باز نگه می‌دارد؟', ['حلقه‌های C شکل غضروفی', 'عضله دیافراگم', 'پرده جنب', 'مژک‌ها'], 'tracheal cartilage rings.'),
          M('محل دوشاخه شدن نای چه نام دارد؟', ['carina', 'hilum', 'glottis', 'apex'], 'carina.'),
          T('tracheomalacia یعنی نرم شدن غضروف نای.', true, 'trache/o + -malacia.'),
          W('واژه‌ای بساز به معنی «منفذ ماندگار در نای»', ['trache/o', '-stomy'], ['-tomy', 'bronch/o', '-itis'], 'trache/o + -stomy = tracheostomy.'),
          P('هر واژه را به معنی‌اش وصل کن', [['trachea', 'نای'], ['carina', 'محل دوشاخه شدن'], ['tracheal', 'نایی'], ['tracheitis', 'التهاب نای']], 'نای.'),
          B('مری ___ نای قرار دارد.', ['پشت', 'جلوی', 'درون'], 'به همین خاطر حلقه‌ها پشتشان باز است.'),
          S('املای انگلیسی «نای» را بنویس', 'trachea', 'trache/o + -a.', 'trach…'),
          N('t2f:lo')
        ]
      },
      {
        id: 'lo2', title: 'درخت نایژه‌ای', icon: '🌳', items: [
          L('یک درخت وارونه', `${fig('bronchial-tree', [], 'درخت نایژه‌ای')}نای به دو ${e('<b>bronchus</b>')} اصلی (جمع: ${e('bronchi')}) تقسیم می‌شود؛ هر کدام وارد یک ریه می‌شوند و بارها شاخه می‌دهند. کوچک‌ترین شاخه‌ها ${e('<b>bronchioles</b>')} (نایژک‌ها) هستند که به آلوئول‌ها می‌رسند.`),
          L('نایژه راست', `نایژه اصلی <b>راست</b> کوتاه‌تر، پهن‌تر و عمودی‌تر است؛ برای همین جسم خارجی بلعیده‌شده و پنومونی آسپیراسیون بیشتر در ریه راست دیده می‌شود.${fig('bronchiole-photo', [], 'نایژک و آلوئول‌ها')}${tbl([['ریشه', 'معنی', 'مثال'], [e('bronch/o, bronchi/o'), 'نایژه', e('bronchitis, bronchiectasis')], [e('bronchiol/o'), 'نایژک', e('bronchiolitis')]])}`),
          M('کوچک‌ترین شاخه‌های درخت نایژه‌ای چه نام دارند؟', ['bronchioles', 'bronchi', 'alveoli', 'carina'], 'bronchiol/o.', null, F('bronchial-tree', [])),
          M('جسم خارجی بیشتر وارد کدام نایژه می‌شود؟', ['نایژه اصلی راست', 'نایژه اصلی چپ', 'هر دو یکسان', 'نای'], 'کوتاه‌تر، پهن‌تر و عمودی‌تر.'),
          T('bronchiolitis التهاب نایژک‌هاست و در شیرخواران شایع است.', true, 'bronchiol/o + -itis.'),
          O('مسیر هوا را از نای تا آلوئول بچین', ['trachea', 'main bronchus', 'bronchioles', 'alveoli'], 'درخت وارونه.'),
          W('واژه‌ای بساز به معنی «مربوط به نایژه»', ['bronch/o', '-ial'], ['bronchiol/o', '-itis', 'trache/o'], 'bronch/o + -ial = bronchial.'),
          P('هر واژه را به معنی‌اش وصل کن', [['bronchus', 'نایژه'], ['bronchiole', 'نایژک'], ['bronchial tree', 'درخت نایژه‌ای'], ['bronchospasm', 'انقباض ناگهانی نایژه']], 'درخت نایژه‌ای.'),
          S('املای انگلیسی «نایژک» را بنویس', 'bronchiole', 'bronchiol/o.', 'bronchi…'),
          N('f2t:lo')
        ]
      },
      {
        id: 'lo3', title: 'تنگی ناگهانی نایژه', icon: '🌀', items: [
          L('اسپاسم نایژه', `دیواره نایژه‌ها عضله صاف دارد. اگر این عضله ناگهان منقبض شود، راه هوا تنگ می‌شود: ${e('<b>bronchospasm</b>')}. این همان اتفاق حمله آسم است.${fig('asthma-airway', [], 'نایژک عادی و در حمله آسم')}`),
          L('دارو', `${e('<b>bronchodilator</b>')} (گشادکننده نایژه) عضله صاف را شل می‌کند و راه هوا را باز می‌کند؛ مثل اسپری سالبوتامول (${e('Proventil')}).${wb('bronch/o', '-spasm')} ← انقباض ناگهانی نایژه${vs(['bronchospasm', 'تنگ شدن ناگهانی نایژه'], ['bronchodilator', 'دارویی که نایژه را باز می‌کند'])}${pearl('در گزارش مشاوره ریه، پسر ۱۰ ساله آسمی با Proventil بهتر شد و ادامه آن «برای رفع bronchospasm» توصیه شد.')}`),
          M(`${e('<b>bronchospasm</b>')} یعنی…`, ['انقباض ناگهانی عضله نایژه', 'گشادی دائمی نایژه', 'التهاب نایژه', 'برداشتن نایژه'], 'bronch/o + -spasm.', null, F('asthma-airway', [])),
          M('کدام دارو نایژه را باز می‌کند؟', ['bronchodilator', 'antitussive', 'decongestant', 'antihistamine'], 'dilator = گشادکننده.'),
          T('دیواره نایژه عضله صاف دارد.', true, 'smooth muscle.'),
          W('واژه‌ای بساز به معنی «گشادی نایژه»', ['bronchi/o', '-ectasis'], ['-spasm', 'trache/o', '-itis'], 'bronchi/o + -ectasis = bronchiectasis.'),
          P('هر واژه را به معنی‌اش وصل کن', [['bronchospasm', 'تنگی ناگهانی'], ['bronchiectasis', 'گشادی دائمی'], ['bronchitis', 'التهاب نایژه'], ['bronchodilator', 'گشادکننده']], 'نایژه.'),
          B('پسوند ___ یعنی انقباض ناگهانی و غیرارادی.', ['‎-spasm', '‎-ectasis', '‎-stenosis'], 'bronchospasm، laryngospasm.'),
          S('املای انگلیسی «اسپاسم نایژه» را بنویس', 'bronchospasm', 'bronch/o + -spasm.', 'broncho…'),
          N('d2t:lo')
        ]
      },
      /* ================= سطح ۲: ریه‌ها و آلوئول ================= */
      {
        id: 'lo4', title: 'آلوئول: جایگاه تبادل', icon: '🫧', items: [
          L('کیسه‌های هوایی', `${fig('alveoli', [], 'آلوئول‌ها و مویرگ‌ها')}${e('<b>alveolus</b>')} (جمع: ${e('alveoli')}) کیسه هوایی کوچکی در انتهای نایژک است. دیواره بسیار نازکش با ${e('<b>pulmonary capillaries</b>')} (مویرگ‌های ریوی) پوشیده شده و همین‌جا تبادل اکسیژن و دی‌اکسید کربن انجام می‌شود.`),
          L('سورفکتانت', `ماده‌ای به نام ${e('<b>surfactant</b>')} سطح درونی آلوئول را می‌پوشاند و نمی‌گذارد روی هم بخوابد. نوزاد نارس اغلب سورفکتانت کافی ندارد و دچار ${e('RDS')} (سندروم دیسترس تنفسی) می‌شود.${wb('alveol/o', '-ar')} ← آلوئولی${memo('alveoli مثل خوشه انگور در انتهای شاخه‌های درخت نایژه‌اند.')}`),
          M('تبادل گاز در کجا انجام می‌شود؟', ['alveoli', 'trachea', 'bronchi', 'pharynx'], 'دیواره نازک + مویرگ‌ها.', null, F('alveoli', [])),
          M(`${e('<b>surfactant</b>')} چه می‌کند؟`, ['نمی‌گذارد آلوئول روی هم بخوابد', 'مخاط می‌سازد', 'میکروب را می‌کشد', 'اکسیژن حمل می‌کند'], 'کشش سطحی را کم می‌کند.'),
          T('نوزاد نارس ممکن است به خاطر کمبود سورفکتانت دچار RDS شود.', true, 'hyaline membrane disease.'),
          W('واژه‌ای بساز به معنی «مربوط به آلوئول»', ['alveol/o', '-ar'], ['bronch/o', '-itis', 'pleur/o'], 'alveol/o + -ar = alveolar.'),
          P('هر واژه را به معنی‌اش وصل کن', [['alveolus', 'کیسه هوایی'], ['pulmonary capillaries', 'مویرگ‌های ریوی'], ['surfactant', 'ماده ضدچسبیدن'], ['alveoli', 'جمع آلوئول']], 'آلوئول.'),
          B('جمع alveolus ___ است.', ['alveoli', 'alveolus', 'alveolae'], '‎-us ← ‎-i.'),
          S('املای انگلیسی «کیسه هوایی» را بنویس', 'alveolus', 'alveol/o + -us.', 'alve…'),
          N('t2f:lo')
        ]
      },
      {
        id: 'lo5', title: 'لوب‌های ریه', icon: '🍃', items: [
          L('راست سه، چپ دو', `${fig('lung-lobes', [], 'لوب‌های ریه')}ریه <b>راست</b> سه لوب دارد: فوقانی، میانی و تحتانی (${e('RUL، RML، RLL')}). ریه <b>چپ</b> دو لوب دارد (${e('LUL، LLL')})، چون قلب جای بخشی از آن را گرفته است (${e('cardiac notch')}).`),
          L('بخش‌های ریه', `${tbl([['واژه', 'معنی'], [e('apex'), 'رأس؛ بالای ریه زیر ترقوه'], [e('base'), 'قاعده؛ روی دیافراگم'], [e('hilum'), 'ناف ریه؛ ورود نایژه و رگ‌ها'], [e('lobe'), 'لوب']])}${wb('lob/o', '-ectomy')} ← برداشتن یک لوب${pearl('در گزارش «CXR revealed fluid in the RUL» یعنی رادیوگرافی قفسه سینه مایع در لوب فوقانی ریه راست نشان داد.')}`),
          M('ریه چپ چند لوب دارد؟', ['دو', 'سه', 'یک', 'چهار'], 'به خاطر قلب.', null, F('lung-lobes', [])),
          M(`${e('<b>RML</b>')} یعنی…`, ['لوب میانی ریه راست', 'لوب میانی ریه چپ', 'لوب تحتانی راست', 'لوب فوقانی چپ'], 'right middle lobe؛ فقط ریه راست لوب میانی دارد.'),
          T('hilum جایی است که نایژه و رگ‌ها وارد ریه می‌شوند.', true, 'ناف ریه.'),
          W('واژه‌ای بساز به معنی «برداشتن لوب»', ['lob/o', '-ectomy'], ['pneumon/o', '-itis', '-tomy'], 'lob/o + -ectomy = lobectomy.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['RUL', 'لوب فوقانی راست'], ['RLL', 'لوب تحتانی راست'], ['LUL', 'لوب فوقانی چپ'], ['LLL', 'لوب تحتانی چپ']], 'پنج لوب.'),
          B('بالای ریه را ___ می‌نامند.', ['apex', 'base', 'hilum'], 'رأس.'),
          S('املای انگلیسی «ریه‌ها» را بنویس', 'lungs', 'pulmon/o، pneum/o.', 'lu…'),
          N('ab:lo')
        ]
      },
      {
        id: 'lo6', title: 'حفره قفسه سینه', icon: '📦', items: [
          L('قفسه سینه', `${e('<b>thorax</b>')} (قفسه سینه) با دنده‌ها، جناغ و عضلات بین‌دنده‌ای (${e('intercostal muscles')}) ساخته شده و ${e('<b>thoracic cavity</b>')} را می‌سازد که ریه‌ها و قلب در آن‌اند. هر نیمه آن ${e('hemithorax')} است.${wb('thorac/o', '-ic')} ← مربوط به قفسه سینه`),
          L('واژه‌های قفسه سینه', `${tbl([['واژه', 'معنی'], [e('thoracalgia'), 'درد قفسه سینه'], [e('thoracotomy'), 'برش قفسه سینه'], [e('thoracoscopy'), 'دیدن درون قفسه سینه با ابزار'], [e('thoracentesis'), 'کشیدن مایع جنب با سوزن'], [e('thoracostomy'), 'منفذ برای لوله سینه']])}${memo('steth/o هم یعنی سینه: stethoscope = ابزار دیدن (شنیدن) سینه.')}${pearl('در Case Study 12-1، Morgan پیش‌تر برای سارکوم ریه چپ lobectomy شده بود و جای thoracotomy در hemithorax چپ داشت.')}`),
          M(`${e('<b>hemithorax</b>')} یعنی…`, ['نیمه قفسه سینه', 'خون در قفسه سینه', 'برش قفسه سینه', 'درد قفسه سینه'], 'hemi- = نیم؛ با hemo- (خون) فرق دارد!'),
          M('برش قفسه سینه چه نام دارد؟', ['thoracotomy', 'thoracentesis', 'thoracoscopy', 'thoracostomy'], 'thorac/o + -tomy.'),
          T('عضلات بین‌دنده‌ای در تنفس نقش دارند.', true, 'intercostal muscles قفسه را بزرگ و کوچک می‌کنند.'),
          W('واژه‌ای بساز به معنی «دیدن قفسه سینه با ابزار»', ['thorac/o', '-scopy'], ['-tomy', 'pleur/o', '-algia'], 'thorac/o + -scopy = thoracoscopy.'),
          P('هر واژه را به معنی‌اش وصل کن', [['thoracalgia', 'درد قفسه سینه'], ['thoracostomy', 'منفذ برای لوله سینه'], ['thoracic cavity', 'حفره قفسه سینه'], ['hemithorax', 'نیمه قفسه سینه']], 'قفسه سینه.'),
          B('پیشوند ___ یعنی «نیم».', ['hemi-', 'hemo-', 'hyper-'], 'hemithorax.'),
          S('املای انگلیسی «قفسه سینه» را بنویس', 'thorax', 'thorac/o.', 'thor…'),
          N('wb:lo')
        ]
      },
      /* ================= سطح ۳: جنب، میان‌سینه و دیافراگم ================= */
      {
        id: 'lo7', title: 'پرده جنب', icon: '🎈', items: [
          L('دو لایه، یک فضا', `${fig('pleura', [], 'پرده جنب')}${e('<b>pleura</b>')} پرده دولایه دور ریه است:<br>• ${e('<b>visceral pleura</b>')}: لایه درونی، چسبیده به ریه<br>• ${e('<b>parietal pleura</b>')}: لایه بیرونی، روی دیواره قفسه سینه<br>بینشان ${e('<b>pleural cavity</b>')} است با کمی مایع لغزنده.`),
          L('واژه‌های جنب', `${wb('pleur/o', '-al')} ← جنبی؛ ${e('pleural effusion')} = مایع در فضای جنب<br>${wb('intra-', 'pleur/o', '-al')} ← درون فضای جنب<br>${wb('pleur/o', '-dynia')} ← درد پرده جنب<br>${e('<b>pleurisy</b>')} (${e('pleuritis')}): التهاب پرده جنب با درد تیز هنگام نفس${vs(['visceral', 'روی خود اندام (ریه)'], ['parietal', 'روی دیواره حفره'])}`),
          M('لایه پرده جنب که روی ریه چسبیده کدام است؟', ['visceral pleura', 'parietal pleura', 'pleural cavity', 'mediastinum'], 'viscera = اندام‌های درونی.', null, F('pleura', [])),
          M(`${e('<b>pleurisy</b>')} یعنی…`, ['التهاب پرده جنب', 'هوا در فضای جنب', 'مایع در فضای جنب', 'برداشتن پرده جنب'], 'pleuritis هم می‌گویند.'),
          T('فضای جنب به طور طبیعی کمی مایع لغزنده دارد.', true, 'برای لغزیدن دو لایه روی هم.'),
          W('واژه‌ای بساز به معنی «درد پرده جنب»', ['pleur/o', '-dynia'], ['pulmon/o', '-ectomy', 'thorac/o'], 'pleur/o + -dynia = pleurodynia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['visceral pleura', 'لایه روی ریه'], ['parietal pleura', 'لایه روی دیواره'], ['pleural cavity', 'فضای بین دو لایه'], ['pleurectomy', 'برداشتن بخشی از جنب']], 'پرده جنب.'),
          B('مربوط به درون فضای جنب ___ است.', ['intrapleural', 'interpleural', 'extrapleural'], 'intra- = درون.'),
          S('املای انگلیسی «پرده جنب» را بنویس', 'pleura', 'pleur/o.', 'ple…'),
          N('m2r:lo')
        ]
      },
      {
        id: 'lo8', title: 'میان‌سینه', icon: '❤️', items: [
          L('فضای میان دو ریه', `${e('<b>mediastinum</b>')} (میان‌سینه) فضای بین دو ریه است که قلب، نای، مری، رگ‌های بزرگ و غدد لنفاوی در آن‌اند.${wb('mediastin/o', '-al')} ← مربوط به میان‌سینه<br>${wb('mediastin/o', '-scopy')} ← دیدن میان‌سینه با ابزار از برش کوچک`),
          L('چرا مهم است؟', `بزرگ شدن غدد لنفاوی میان‌سینه (${e('mediastinal nodes')}) می‌تواند نشانه سرطان ریه یا لنفوم باشد؛ برای نمونه‌برداری از آن‌ها ${e('mediastinoscopy')} انجام می‌شود.${pearl('در Case Study 12-1، CT غدد غیرطبیعی میان‌سینه را نشان داد و برای Morgan توراکوسکوپی، مدیاستینوسکوپی و بیوپسی برنامه‌ریزی شد.')}${memo('mediastinum = در «میانه» (media) قفسه سینه.')}`),
          M('کدام عضو در میان‌سینه نیست؟', ['ریه', 'قلب', 'نای', 'مری'], 'ریه‌ها دو طرف میان‌سینه‌اند.'),
          M(`${e('<b>mediastinoscopy</b>')} یعنی…`, ['دیدن میان‌سینه با ابزار', 'برش میان‌سینه', 'التهاب میان‌سینه', 'عکس میان‌سینه'], 'mediastin/o + -scopy.'),
          T('غدد لنفاوی بزرگ در میان‌سینه می‌تواند نشانه سرطان باشد.', true, 'mediastinal nodes.'),
          W('واژه‌ای بساز به معنی «مربوط به میان‌سینه»', ['mediastin/o', '-al'], ['-scopy', 'pleur/o', '-itis'], 'mediastin/o + -al = mediastinal.'),
          P('هر واژه را به معنی‌اش وصل کن', [['mediastinum', 'فضای بین دو ریه'], ['mediastinal', 'میان‌سینه‌ای'], ['mediastinoscopy', 'دیدن میان‌سینه'], ['hilum', 'ناف ریه']], 'میان‌سینه.'),
          B('قلب در ___ قرار دارد.', ['mediastinum', 'pleural cavity', 'alveolus'], 'میان دو ریه.'),
          S('املای انگلیسی «میان‌سینه» را بنویس', 'mediastinum', 'mediastin/o + -um.', 'media…'),
          N('t2f:lo')
        ]
      },
      {
        id: 'lo9', title: 'دیافراگم و عصب فرنیک', icon: '🪂', items: [
          L('عضله اصلی تنفس', `${fig('breathing', [], 'دیافراگم در دم و بازدم')}${e('<b>diaphragm</b>')} عضله گنبدی‌شکلی زیر ریه‌هاست. در دم منقبض و صاف می‌شود و هوا را به درون می‌کشد. عصب ${e('<b>phrenic nerve</b>')} آن را کنترل می‌کند.${wb('phren/o', '-ic')} ← مربوط به دیافراگم`),
          L('سکسکه و آسیب عصب', `• ${e('<b>singultus</b>')} (سکسکه): انقباض ناگهانی و غیرارادی دیافراگم<br>• آسیب عصب فرنیک می‌تواند دیافراگم را فلج کند؛ برای همین در Case Study آسیب شبکه بازویی، دیافراگم را زیر فلوروسکوپی بررسی کردند.${memo('phren/o در یونانی هم «دیافراگم» بود و هم «ذهن»؛ قدیمی‌ها فکر می‌کردند فکر در سینه است!')}`),
          M('عضله اصلی تنفس کدام است؟', ['diaphragm', 'intercostal muscles', 'pectoralis', 'rectus abdominis'], 'گنبدی زیر ریه‌ها.', null, F('breathing', [])),
          M('کدام عصب دیافراگم را کنترل می‌کند؟', ['phrenic nerve', 'vagus nerve', 'facial nerve', 'sciatic nerve'], 'phren/o = دیافراگم.'),
          T('singultus همان سکسکه است.', true, 'انقباض غیرارادی دیافراگم.'),
          W('واژه‌ای بساز به معنی «مربوط به دیافراگم»', ['phren/o', '-ic'], ['thorac/o', '-itis', 'pleur/o'], 'phren/o + -ic = phrenic.'),
          P('هر واژه را به معنی‌اش وصل کن', [['diaphragm', 'عضله گنبدی تنفس'], ['phrenic nerve', 'عصب دیافراگم'], ['singultus', 'سکسکه'], ['intercostal muscles', 'عضلات بین‌دنده‌ای']], 'دیافراگم.'),
          O('در دم چه اتفاقی می‌افتد؟ ترتیب را بچین', ['دیافراگم منقبض و صاف می‌شود', 'حجم قفسه سینه بیشتر می‌شود', 'فشار درون ریه کم می‌شود', 'هوا وارد ریه می‌شود'], 'inspiration.'),
          S('املای انگلیسی «دیافراگم» را بنویس', 'diaphragm', 'g بی‌صداست.', 'diaph…'),
          N('f2t:lo')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نَفَس — دنیای ۳: تهویه و نشانه‌ها
 * سطح ۱: الگوهای تنفس • سطح ۲: اکسیژن، سرفه و خلط • سطح ۳: صداهای ریه و حجم‌های ریوی */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'br', sym: 'Br', name: 'تهویه و نشانه‌ها', short: 'نشانه‌ها', sub: 'الگوهای تنفس، کمبود اکسیژن، سرفه و خلط، صداهای ریه هنگام سمع و حجم‌ها و ظرفیت‌های ریه',
    color: '#17A398', dark: '#0F7A71', light: '#DDF5F2',
    levels: ['الگوهای تنفس', 'اکسیژن، سرفه و خلط', 'صداهای ریه و حجم‌ها'],
    gens: EA.genIds('br'),
    lessons: [
      /* ================= سطح ۱: الگوهای تنفس ================= */
      {
        id: 'br1', title: 'تند، کند، قطع', icon: '📈', items: [
          L('سرعت تنفس', `${fig('breath-patterns', [], 'الگوهای تنفس')}${tbl([['واژه', 'معنی'], [e('eupnea'), 'تنفس طبیعی؛ ۱۲ تا ۲۰ بار در دقیقه در بزرگسال'], [e('tachypnea'), 'تنفس تند'], [e('bradypnea'), 'تنفس کند'], [e('apnea'), 'قطع موقت تنفس']])}`),
          L('ساخت واژه‌ها', `${wb('eu-', '-pnea')} ← تنفس خوب و طبیعی<br>${wb('tachy-', '-pnea')} ← تنفس تند<br>${wb('brady-', '-pnea')} ← تنفس کند<br>${wb('a-', '-pnea')} ← بدون تنفس${pearl('در علائم حیاتی، R یعنی تعداد تنفس در دقیقه؛ TPR = temperature, pulse, respiration.')}${memo('tachy مثل تاخت اسب: تند. brady مثل بردبار: آرام و کند.')}`),
          M(`${e('<b>tachypnea</b>')} یعنی…`, ['تنفس تند', 'تنفس کند', 'قطع تنفس', 'تنفس عمیق'], 'tachy- = تند.', null, F('breath-patterns', [])),
          M('تعداد طبیعی تنفس بزرگسال در استراحت چقدر است؟', ['۱۲ تا ۲۰ بار در دقیقه', '۴ تا ۸ بار', '۳۰ تا ۴۰ بار', '۶۰ تا ۱۰۰ بار'], 'eupnea.'),
          T('apnea یعنی قطع موقت تنفس.', true, 'a- + -pnea.'),
          W('واژه‌ای بساز به معنی «تنفس کند»', ['brady-', '-pnea'], ['tachy-', 'eu-', '-ptysis'], 'brady- + -pnea = bradypnea.'),
          P('هر واژه را به معنی‌اش وصل کن', [['eupnea', 'طبیعی'], ['tachypnea', 'تند'], ['bradypnea', 'کند'], ['apnea', 'قطع']], 'سرعت تنفس.'),
          B('در علائم حیاتی، حرف ___ یعنی تعداد تنفس.', ['R', 'P', 'T'], 'respiration.'),
          S('املای انگلیسی «تنفس تند» را بنویس', 'tachypnea', 'tachy- + -pnea.', 'tachy…'),
          N('t2f:br')
        ]
      },
      {
        id: 'br2', title: 'عمیق، سطحی، دشوار', icon: '😮‍💨', items: [
          L('عمق و دشواری', `${tbl([['واژه', 'معنی'], [e('hyperpnea'), 'تنفس عمیق'], [e('hypopnea'), 'تنفس سطحی'], [e('dyspnea'), 'تنفس دشوار، تنگی نفس (SOB)'], [e('orthopnea'), 'تنگی نفس در حالت خوابیده؛ بهتر با نشستن'], [e('DOE'), 'تنگی نفس هنگام فعالیت']])}`),
          L('تهویه زیاد و کم', `• ${e('<b>hyperventilation</b>')}: تنفس بیش از حد؛ CO2 خون پایین می‌آید (مثلاً در اضطراب)<br>• ${e('<b>hypoventilation</b>')}: تنفس ناکافی؛ CO2 در خون جمع می‌شود<br>• ${e('<b>Cheyne-Stokes respiration</b>')}: دوره‌های تنفس عمیق و تند که با آپنه قطع می‌شوند؛ نزدیک مرگ یا در آسیب مغزی${pearl('ارتوپنه را با تعداد بالش می‌سنجند: «three-pillow orthopnea» یعنی بیمار با سه بالش می‌تواند نفس بکشد.')}`),
          M(`${e('<b>orthopnea</b>')} یعنی…`, ['تنگی نفس در حالت خوابیده که با نشستن بهتر می‌شود', 'تنفس تند', 'تنفس عمیق', 'قطع تنفس در خواب'], 'orth/o = راست، ایستاده.'),
          M('SOB در پرونده یعنی…', ['تنگی نفس', 'سرفه خلط‌دار', 'تنفس طبیعی', 'صدای مالش'], 'shortness of breath.'),
          T('در Cheyne-Stokes دوره‌های آپنه دیده می‌شود.', true, 'افزایش و کاهش تنفس با دوره‌های قطع.', F('breath-patterns', [])),
          W('واژه‌ای بساز به معنی «تنفس عمیق»', ['hyper-', '-pnea'], ['hypo-', 'dys-', '-capnia'], 'hyper- + -pnea = hyperpnea.'),
          P('هر واژه را به معنی‌اش وصل کن', [['hyperpnea', 'تنفس عمیق'], ['hypopnea', 'تنفس سطحی'], ['dyspnea', 'تنفس دشوار'], ['DOE', 'تنگی نفس هنگام فعالیت']], 'عمق و دشواری.'),
          B('تنفس بیش از حد که CO2 خون را پایین می‌آورد ___ است.', ['hyperventilation', 'hypoventilation', 'hypercapnia'], 'hyper- + ventilation.'),
          S('املای انگلیسی «ارتوپنه» را بنویس', 'orthopnea', 'orth/o + -pnea.', 'ortho…'),
          N('f2t:br')
        ]
      },
      {
        id: 'br3', title: 'دم و بازدم در عمل', icon: '🎐', items: [
          L('مکانیک تنفس', `${fig('breathing', [], 'دم و بازدم')}در ${e('inspiration')} دیافراگم و عضلات بین‌دنده‌ای منقبض می‌شوند، قفسه سینه بزرگ و فشار درون ریه کم می‌شود و هوا وارد می‌شود. در ${e('expiration')} عضلات شل می‌شوند و هوا بیرون می‌رود.`),
          L('شمارش تنفس', `برای شمردن تنفس، بالا و پایین رفتن قفسه سینه را یک دقیقه کامل بشمار (یک دم + یک بازدم = یک تنفس).${pearl('در ابزار «اسپیرومتری و اکسیژن» عدد تنفس را وارد کن تا eupnea، tachypnea یا bradypnea را ببینی.')}${memo('یک دم + یک بازدم = یک نفس؛ نصفه نشمار!')}`),
          M('در دم، فشار درون ریه چه می‌شود؟', ['کمتر از هوای بیرون می‌شود', 'بیشتر از هوای بیرون می‌شود', 'تغییر نمی‌کند', 'صفر می‌شود'], 'هوا از فشار بیشتر به کمتر می‌رود.', null, F('breathing', [])),
          M('یک تنفس کامل یعنی…', ['یک دم و یک بازدم', 'فقط یک دم', 'فقط یک بازدم', 'دو دم'], 'respiratory cycle.'),
          T('در بازدم آرام، دیافراگم شل می‌شود و بالا می‌رود.', true, 'expiration بیشتر غیرفعال است.'),
          O('مراحل دم را بچین', ['دیافراگم منقبض می‌شود', 'قفسه سینه بزرگ می‌شود', 'فشار درون ریه کم می‌شود', 'هوا وارد ریه می‌شود'], 'inspiration.'),
          P('هر واژه را به معنی‌اش وصل کن', [['inspiration', 'دم'], ['expiration', 'بازدم'], ['respiratory rate', 'تعداد تنفس در دقیقه'], ['TPR', 'دما، نبض و تنفس']], 'تهویه.'),
          B('اختصار ___ یعنی دما، نبض و تنفس.', ['TPR', 'BP', 'SOB'], 'temperature, pulse, respiration.'),
          S('املای انگلیسی «دم» (اینسپیراسیون) را بنویس', 'inspiration', 'in- + spir/o + -ation.', 'insp…'),
          N('d2t:br')
        ]
      },
      /* ================= سطح ۲: اکسیژن، سرفه و خلط ================= */
      {
        id: 'br4', title: 'کمبود اکسیژن', icon: '🫥', items: [
          L('واژه‌های اکسیژن و CO2', `${tbl([['واژه', 'معنی'], [e('hypoxia'), 'کمبود اکسیژن در بافت‌ها'], [e('hypoxemia'), 'کمبود اکسیژن در خون'], [e('anoxia'), 'فقدان کامل اکسیژن'], [e('hypercapnia'), 'افزایش CO2 خون'], [e('asphyxia'), 'خفگی: کمبود O2 و تجمع CO2']])}`),
          L('نشانه‌های بیرونی', `${fig('cyanosis', [], 'کبودی و چماقی شدن')}• ${e('<b>cyanosis</b>')}: کبودی پوست، لب و بستر ناخن از کمبود اکسیژن<br>• ${e('<b>clubbing</b>')}: چماقی و گرد شدن نوک انگشتان در کمبود مزمن اکسیژن${pearl('در گزارش مشاوره ریه: «cyanosis around the lips» و «ABGs indicate hypoxemia» در یک حمله شدید آسم.')}`),
          M(`${e('<b>hypoxemia</b>')} یعنی…`, ['کمبود اکسیژن در خون', 'کمبود اکسیژن در بافت', 'افزایش CO2 خون', 'فقدان کامل اکسیژن'], '‎-emia = خون.'),
          M('کبودی لب و بستر ناخن چه نام دارد؟', ['cyanosis', 'clubbing', 'pallor', 'jaundice'], 'cyan/o = آبی.', null, F('cyanosis', [])),
          T('hypercapnia یعنی کمبود دی‌اکسید کربن در خون.', false, 'نادرست؛ hyper- = بیش از حد؛ CO2 زیاد است.'),
          W('واژه‌ای بساز به معنی «کمبود اکسیژن خون»', ['hypo-', 'ox/o', '-emia'], ['hyper-', 'capn/o', '-pnea'], 'hypo- + ox/o + -emia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['hypoxia', 'کمبود اکسیژن بافت'], ['anoxia', 'فقدان کامل اکسیژن'], ['hypercapnia', 'CO2 زیاد در خون'], ['clubbing', 'چماقی شدن انگشتان']], 'اکسیژن.'),
          B('ریشه ___ یعنی دی‌اکسید کربن.', ['capn/o', 'ox/o', 'cyan/o'], 'hypercapnia.'),
          S('املای انگلیسی «کبودی» را بنویس', 'cyanosis', 'cyan/o + -osis.', 'cyan…'),
          N('t2f:br')
        ]
      },
      {
        id: 'br5', title: 'سرفه و خلط', icon: '😷', items: [
          L('انواع سرفه', `• ${e('<b>productive cough</b>')}: سرفه خلط‌دار<br>• ${e('<b>nonproductive cough</b>')}: سرفه خشک<br>• ${e('<b>sputum</b>')}: خلطی که از ریه بالا می‌آید؛ ${e('phlegm')}: مخاط غلیظ<br>• ${e('<b>purulent</b>')}: چرکی؛ خلط زرد یا سبز<br>• ${e('<b>expectoration</b>')}: بالا آوردن و بیرون انداختن خلط`),
          L('خون در خلط', `${wb('hem/o', '-ptysis')} ← ${e('<b>hemoptysis</b>')}: سرفه کردن خون از ریه؛ می‌تواند نشانه سل یا سرطان ریه باشد.${vs(['hemoptysis', 'خون از ریه با سرفه'], ['epistaxis', 'خون از بینی'])}${pearl('در یک تمرین بالینی، خانم ۳۰ ساله‌ای با «nonproductive cough، dyspnea و تب» آمد؛ یعنی سرفه خشک و تنگی نفس.')}`),
          M('سرفه‌ای که خلط بالا می‌آورد چه نام دارد؟', ['productive cough', 'nonproductive cough', 'hemoptysis', 'stridor'], 'productive = خلط‌دار.'),
          M(`${e('<b>purulent sputum</b>')} یعنی…`, ['خلط چرکی', 'خلط خونی', 'خلط شفاف', 'سرفه خشک'], 'purulent = حاوی چرک.'),
          T('hemoptysis می‌تواند نشانه سل یا سرطان ریه باشد.', true, 'خون در خلط همیشه بررسی می‌شود.'),
          W('واژه‌ای بساز به معنی «سرفه کردن خون»', ['hem/o', '-ptysis'], ['-pnea', 'py/o', 'thorac/o'], 'hem/o + -ptysis = hemoptysis.'),
          P('هر واژه را به معنی‌اش وصل کن', [['sputum', 'خلط'], ['phlegm', 'بلغم'], ['expectoration', 'بیرون انداختن خلط'], ['nonproductive cough', 'سرفه خشک']], 'سرفه و خلط.'),
          B('دارویی که خلط را رقیق می‌کند تا راحت‌تر بالا بیاید ___ است.', ['expectorant', 'antitussive', 'bronchodilator'], 'خلط‌آور.'),
          S('املای انگلیسی «خلط» را بنویس', 'sputum', 'خلط ریه.', 'spu…'),
          N('f2t:br')
        ]
      },
      {
        id: 'br6', title: 'درد و نشانه‌های دیگر', icon: '⚡', items: [
          L('درد قفسه سینه', `${wb('thorac/o', '-algia')} ← درد قفسه سینه<br>${wb('pleur/o', '-dynia')} ← درد پرده جنب یا عضلات دیواره سینه<br>درد پلوریتیک تیز است و با دم عمیق بدتر می‌شود.`),
          L('نشانه‌های دیگر', `${tbl([['واژه', 'معنی'], [e('singultus'), 'سکسکه'], [e('bronchospasm'), 'تنگی ناگهانی نایژه'], [e('laryngospasm'), 'بسته شدن ناگهانی حنجره'], [e('diaphoresis'), 'تعریق شدید'], [e('SOB'), 'تنگی نفس']])}${memo('‎-algia و ‎-dynia هر دو درد هستند؛ thoracalgia = thoracodynia.')}${pearl('Morgan در Case Study 12-1 با «chest pain on inspiration, dyspnea and diaphoresis» بستری شد: درد سینه هنگام دم، تنگی نفس و تعریق شدید.')}`),
          M(`${e('<b>pleurodynia</b>')} یعنی…`, ['درد پرده جنب', 'التهاب پرده جنب', 'مایع در جنب', 'برش جنب'], 'pleur/o + -dynia.'),
          M('سکسکه در زبان پزشکی چیست؟', ['singultus', 'stridor', 'sputum', 'syncope'], 'انقباض غیرارادی دیافراگم.'),
          T('درد پلوریتیک با دم عمیق بدتر می‌شود.', true, 'لایه‌های ملتهب روی هم می‌سایند.'),
          W('واژه‌ای بساز به معنی «درد قفسه سینه»', ['thorac/o', '-algia'], ['pleur/o', '-ptysis', '-scopy'], 'thorac/o + -algia = thoracalgia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['thoracalgia', 'درد قفسه سینه'], ['diaphoresis', 'تعریق شدید'], ['laryngospasm', 'بسته شدن حنجره'], ['singultus', 'سکسکه']], 'نشانه‌ها.'),
          B('دو پسوند ‎-algia و ___ هر دو یعنی درد.', ['‎-dynia', '‎-ptysis', '‎-pnea'], 'pleurodynia.'),
          S('املای انگلیسی «سکسکه» را بنویس', 'singultus', 'انقباض دیافراگم.', 'sing…'),
          N('sp:br')
        ]
      },
      /* ================= سطح ۳: صداهای ریه و حجم‌ها ================= */
      {
        id: 'br7', title: 'گوش دادن به ریه', icon: '🩺', items: [
          L('سمع و دق', `• ${e('<b>auscultation</b>')} (سمع): گوش دادن به صداهای بدن با گوشی (${e('stethoscope')})<br>• ${e('<b>percussion</b>')} (دق): ضربه زدن روی بدن و شنیدن صدا؛ ریه پرهوا صدای طبلی و مایع صدای کدر (${e('dullness')}) می‌دهد<br>${e('<b>CTA</b>')} یعنی «clear to auscultation»: سمع ریه پاک و طبیعی است.`),
          L('صداهای غیرطبیعی', `${fig('lung-sounds', [], 'صداهای غیرطبیعی ریه')}${vs(['wheeze', 'سوت بلند از راه هوایی تنگ (آسم)'], ['stridor', 'صدای خشن دم از انسداد حنجره یا نای'])}${vs(['rales (crackles)', 'کراکل ریز از مایع در آلوئول'], ['rhonchi', 'خرخر بم از مخاط در راه هوایی بزرگ'])}`),
          M('خس‌خس سوت‌مانند در آسم چه نام دارد؟', ['wheeze', 'stridor', 'rales', 'pleural rub'], 'از راه هوایی تنگ.', null, F('lung-sounds', [])),
          M('کراکل ریز هنگام دم در پنومونی چه نام دارد؟', ['rales (crackles)', 'rhonchi', 'wheeze', 'stridor'], 'مایع در آلوئول.'),
          T('stridor صدای انسداد راه هوایی فوقانی است.', true, 'حنجره یا نای؛ مثلاً در خروسک.'),
          P('هر صدا را به علتش وصل کن', [['wheeze', 'راه هوایی تنگ'], ['stridor', 'انسداد حنجره'], ['rhonchi', 'مخاط در نایژه بزرگ'], ['pleural rub', 'پرده جنب ملتهب']], 'صداهای ریه.'),
          B('اختصار ___ یعنی سمع ریه پاک و طبیعی است.', ['CTA', 'CXR', 'SOB'], 'clear to auscultation.'),
          M('در این یادداشت بالینی «inspiratory rales» شنیده شد؛ یعنی…', ['کراکل هنگام دم', 'خس‌خس هنگام بازدم', 'صدای خشن حنجره', 'سکوت کامل ریه'], 'rales = crackles؛ inspiratory = هنگام دم.'),
          S('املای انگلیسی «سمع» را بنویس', 'auscultation', 'listening.', 'ausc…'),
          N('t2f:br')
        ]
      },
      {
        id: 'br8', title: 'حجم‌های ریه', icon: '📊', items: [
          L('چهار حجم', `${fig('spirogram', [], 'اسپیروگرام')}${tbl([['حجم', 'معنی'], [e('TV'), 'حجم جاری: یک نفس آرام'], [e('IRV'), 'حجم ذخیره دمی: دم اضافه پس از دم عادی'], [e('ERV'), 'حجم ذخیره بازدمی: بازدم اضافه پس از بازدم عادی'], [e('RV'), 'حجم باقیمانده: هوای مانده پس از بیشترین بازدم']])}`),
          L('ظرفیت‌ها = جمع حجم‌ها', `${tbl([['ظرفیت', 'فرمول'], [e('VC (vital capacity)'), e('IRV + TV + ERV')], [e('TLC (total lung capacity)'), e('VC + RV')], [e('IC (inspiratory capacity)'), e('TV + IRV')], [e('FRC'), e('ERV + RV')]])}${memo('Volume تکی است؛ Capacity جمع چند حجم است.')}${pearl('در Case Study آلیسون، اسپیرومتری کاهش خفیف vital capacity و کاهش متوسط تا شدید FEV1 را نشان داد.')}`),
          M('هوایی که در یک نفس آرام جابه‌جا می‌شود چیست؟', ['tidal volume', 'vital capacity', 'residual volume', 'total lung capacity'], 'TV.', null, F('spirogram', [])),
          M('ظرفیت کل ریه (TLC) برابر است با…', ['VC + RV', 'TV + IRV', 'ERV + RV', 'TV + ERV'], 'همه هوای ریه.'),
          T('residual volume را حتی با بیشترین بازدم هم نمی‌شود بیرون داد.', true, 'RV.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['TV', 'حجم جاری'], ['VC', 'ظرفیت حیاتی'], ['RV', 'حجم باقیمانده'], ['TLC', 'ظرفیت کل ریه']], 'حجم‌ها و ظرفیت‌ها.'),
          B('ظرفیت حیاتی جمع IRV و TV و ___ است.', ['ERV', 'RV', 'FRC'], 'VC = IRV + TV + ERV.'),
          O('حجم‌ها را از بالای اسپیروگرام به پایین بچین', ['IRV', 'TV', 'ERV', 'RV'], 'ذخیره دمی، جاری، ذخیره بازدمی، باقیمانده.'),
          S('املای انگلیسی «ظرفیت حیاتی» را بنویس', 'vital capacity', 'VC.', 'vital…'),
          N('ab:br')
        ]
      },
      {
        id: 'br9', title: 'FEV1 و FVC', icon: '💨', items: [
          L('بازدم با تمام قدرت', `${fig('spirometry', [], 'منحنی حجم-زمان')}• ${e('<b>FVC</b>')} (forced vital capacity): کل هوایی که پس از یک دم عمیق با بیشترین قدرت و سرعت بیرون می‌دهی<br>• ${e('<b>FEV1</b>')}: حجمی که در <b>ثانیه اول</b> همین بازدم بیرون می‌آید`),
          L('نسبت FEV1/FVC', `در فرد سالم حدود ۷۵ تا ۸۰٪ هوا در ثانیه اول بیرون می‌آید. اگر نسبت کمتر از ۷۰٪ باشد، هوا به‌سختی بیرون می‌رود: <b>الگوی انسدادی</b> (${e('obstructive')})، مثل آسم و COPD.${vs(['obstructive', 'FEV1/FVC کم؛ آسم، COPD'], ['restrictive', 'نسبت طبیعی ولی حجم کل کم؛ فیبروز ریه'])}${pearl('ابزار «اسپیرومتری و اکسیژن» نسبت FEV1/FVC را حساب و تفسیر می‌کند.')}`),
          M('FEV1 چیست؟', ['حجم بازدم با فشار در ثانیه اول', 'کل ظرفیت ریه', 'حجم یک نفس آرام', 'هوای باقیمانده'], 'forced expiratory volume in 1 second.', null, F('spirometry', [])),
          M('نسبت FEV1/FVC برابر ۶۰٪ چه الگویی است؟', ['انسدادی (obstructive)', 'طبیعی', 'تحدیدی (restrictive)', 'نمی‌توان گفت'], 'کمتر از ۷۰٪.'),
          T('در آسم FEV1 کم می‌شود.', true, 'هوا به‌سختی بیرون می‌آید.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['FVC', 'ظرفیت حیاتی با فشار'], ['FEV1', 'حجم ثانیه اول'], ['PFT', 'آزمون عملکرد ریه'], ['PEFR', 'حداکثر سرعت جریان بازدمی']], 'اسپیرومتری.'),
          B('در Case Study آلیسون، FEV1 پس از bronchodilator ۵۵٪ مقدار ___ بود.', ['پیش‌بینی‌شده', 'باقیمانده', 'جاری'], 'predicted value.'),
          M('اگر FEV1 = 2.0 لیتر و FVC = 4.0 لیتر باشد، نسبت چقدر است؟', ['۵۰٪', '۸۰٪', '۲۰٪', '۲۰۰٪'], '2.0 ÷ 4.0 = 0.5؛ الگوی انسدادی.'),
          S('املای انگلیسی «اسپیرومتر» را بنویس', 'spirometer', 'spir/o + -meter.', 'spiro…'),
          N('t2f:br')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نَفَس — دنیای ۴: بیماری‌های تنفسی
 * سطح ۱: بیماری‌های انسدادی (آسم، COPD) • سطح ۲: عفونت‌ها (پنومونی، سل، سیاه‌سرفه) • سطح ۳: جنب، نوزادان، غبار و سرطان */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ds', sym: 'Ds', name: 'بیماری‌های تنفسی', short: 'بیماری‌ها', sub: 'آسم و COPD، پنومونی و سل، فیبروز سیستیک، پنوموتوراکس و افیوژن، بیماری‌های غباری و سرطان ریه',
    color: '#E07A3A', dark: '#B0561E', light: '#FDEEE3',
    levels: ['آسم و COPD', 'عفونت‌های ریه', 'جنب، نوزاد، غبار و سرطان'],
    gens: EA.genIds('ds'),
    lessons: [
      /* ================= سطح ۱: آسم و COPD ================= */
      {
        id: 'ds1', title: 'آسم', icon: '🌬️', items: [
          L('حمله آسم', `${fig('asthma-airway', [], 'نایژک در حمله آسم')}${e('<b>asthma</b>')} بیماری مزمنی است که در حمله‌هایش سه اتفاق در راه هوایی می‌افتد:<br>۱. انقباض عضله صاف (${e('bronchospasm')})<br>۲. التهاب و تورم دیواره<br>۳. ترشح مخاط زیاد<br>نتیجه: خس‌خس (${e('wheeze')})، سرفه و تنگی نفس.`),
          L('درمان و پایش', `• ${e('bronchodilator')} (مثل اسپری سالبوتامول) برای باز کردن سریع راه هوا<br>• ${e('inhaled corticosteroid')} برای پیشگیری از التهاب<br>• ${e('peak flow meter')} برای پایش روزانه در خانه${fig('mdi', [], 'اسپری استنشاقی با اسپیسر')}${pearl('گزارش مشاوره ریه: پسر ۱۰ ساله با dyspnea، cyanosis دور لب، rhonchi و hypoxemia در ABG؛ اسپیرومتری انسداد متوسط تا شدید راه هوایی را نشان داد.')}`),
          M('کدام مورد در حمله آسم رخ نمی‌دهد؟', ['تخریب دیواره آلوئول‌ها', 'انقباض عضله نایژه', 'التهاب دیواره', 'ترشح مخاط زیاد'], 'تخریب آلوئول مال آمفیزم است.', null, F('asthma-airway', [])),
          M('صدای شاخص آسم هنگام سمع چیست؟', ['wheeze', 'stridor', 'pleural rub', 'rales'], 'خس‌خس سوت‌مانند.'),
          T('peak flow meter برای پایش آسم در خانه به کار می‌رود.', true, 'PEFR.'),
          P('هر دارو را به کارش وصل کن', [['bronchodilator', 'باز کردن سریع نایژه'], ['inhaled corticosteroid', 'پیشگیری از التهاب'], ['MDI', 'اسپری با دوز مشخص'], ['nebulizer', 'دارو به شکل مه']], 'درمان آسم.'),
          B('اختصار ___ یعنی حداکثر سرعت جریان بازدمی.', ['PEFR', 'PFT', 'FRC'], 'peak expiratory flow rate.'),
          O('رخدادهای یک حمله آسم را بچین', ['برخورد با محرک', 'bronchospasm و التهاب', 'تنگی راه هوا و wheeze', 'bronchodilator و باز شدن راه هوا'], 'روند حمله.'),
          S('املای انگلیسی «آسم» را بنویس', 'asthma', 'th بی‌صدا.', 'ast…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds2', title: 'COPD: آمفیزم و برونشیت مزمن', icon: '🚬', items: [
          L('بیماری انسدادی مزمن ریه', `${fig('copd', [], 'آمفیزم و برونشیت مزمن')}${e('<b>COPD</b>')} بیماری پیشرونده‌ای است که بیشتر از سیگار ایجاد می‌شود و بیرون رفتن هوا را سخت می‌کند. دو جزء اصلی دارد:<br>• ${e('<b>emphysema</b>')}: دیواره آلوئول‌ها تخریب و کیسه‌ها بزرگ می‌شوند؛ هوا در ریه گیر می‌افتد.<br>• ${e('<b>chronic bronchitis</b>')}: التهاب طولانی نایژه‌ها با سرفه خلط‌دار ماه‌ها در سال.`),
          L('عوارض', `• ${e('<b>bronchiectasis</b>')}: گشادی دائمی نایژه‌ها با تجمع مخاط و عفونت مکرر<br>• ${e('<b>cor pulmonale</b>')}: بزرگ شدن و نارسایی قلب راست از بیماری مزمن ریه<br>• کمبود مزمن اکسیژن، چماقی شدن انگشتان${fig('lung-cancer-photo', [], 'ریه آسیب‌دیده یک فرد سیگاری')}${vs(['asthma', 'برگشت‌پذیر؛ حمله‌ای؛ اغلب از کودکی'], ['COPD', 'پیشرونده؛ دائمی؛ بیشتر از سیگار'])}`),
          M('تخریب دیواره آلوئول‌ها در کدام بیماری است؟', ['emphysema', 'chronic bronchitis', 'asthma', 'pneumonia'], 'کیسه‌های هوایی بزرگ و ناکارآمد.', null, F('copd', [])),
          M('COPD یعنی…', ['بیماری انسدادی مزمن ریه', 'بیماری قلبی-ریوی حاد', 'سندروم دیسترس تنفسی', 'سرطان ریه'], 'chronic obstructive pulmonary disease.'),
          T('cor pulmonale یعنی نارسایی قلب راست به علت بیماری ریه.', true, 'cor = قلب، pulmonale = ریوی.'),
          W('واژه‌ای بساز به معنی «گشادی نایژه»', ['bronchi/o', '-ectasis'], ['-itis', 'pneum/o', 'atel/o'], 'bronchi/o + -ectasis = bronchiectasis.'),
          P('هر بیماری را به ویژگی‌اش وصل کن', [['emphysema', 'تخریب آلوئول‌ها'], ['chronic bronchitis', 'سرفه خلط‌دار مزمن'], ['bronchiectasis', 'گشادی دائمی نایژه'], ['cor pulmonale', 'نارسایی قلب راست']], 'COPD و عوارض.'),
          B('مهم‌ترین علت COPD ___ است.', ['سیگار', 'ویروس', 'آلرژی غذایی'], 'smoking.'),
          S('املای انگلیسی «آمفیزم» را بنویس', 'emphysema', 'ph = f.', 'emph…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds3', title: 'نوزادان و بیماری‌های ارثی', icon: '👶', items: [
          L('فیبروز سیستیک', `${e('<b>cystic fibrosis</b>')} (${e('CF')}) بیماری ارثی است که مخاط را غلیظ و چسبنده می‌کند؛ ریه‌ها و پانکراس مسدود می‌شوند و عفونت‌های ریوی مکرر رخ می‌دهد. تشخیص با ${e('<b>sweat test</b>')} (نمک زیاد در عرق) است.`),
          L('نوزادان', `• ${e('<b>RDS</b>')} (${e('IRDS')}، ${e('HMD')}): نارسایی تنفسی نوزاد نارس از کمبود سورفکتانت<br>• ${e('<b>SIDS</b>')}: مرگ ناگهانی و بی‌دلیل شیرخوار در خواب<br>• ${e('<b>ARDS</b>')}: نارسایی شدید و ناگهانی ریه در بزرگسال پس از آسیب یا بیماری شدید${pearl('برای کاهش خطر SIDS، شیرخوار را به پشت بخوابانید و از بالش و پتوی نرم در تختش پرهیز کنید.')}${memo('در فیبروز سیستیک عرق بسیار شور است؛ در قدیم «بوسه شور» پیشانی کودک را نشانه این بیماری می‌دانستند.')}`),
          M('تست عرق برای تشخیص کدام بیماری است؟', ['cystic fibrosis', 'asthma', 'tuberculosis', 'pertussis'], 'CF.'),
          M('علت RDS در نوزاد نارس چیست؟', ['کمبود سورفکتانت', 'عفونت ویروسی', 'آلرژی', 'جسم خارجی'], 'hyaline membrane disease.'),
          T('ARDS بیماری مخصوص نوزادان است.', false, 'نادرست؛ ARDS در بزرگسالان پس از آسیب یا بیماری شدید رخ می‌دهد.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['CF', 'فیبروز سیستیک'], ['RDS', 'سندروم دیسترس تنفسی'], ['SIDS', 'مرگ ناگهانی شیرخوار'], ['ARDS', 'دیسترس تنفسی حاد']], 'اختصارها.'),
          B('نام دیگر RDS نوزاد ___ disease است.', ['hyaline membrane', 'cystic', 'interstitial'], 'HMD.'),
          M('در Case Study 12-2، Ella با کدام تشخیص به ونتیلاتور وصل شد؟', ['ARDS مقاوم', 'آسم خفیف', 'سینوزیت', 'خروسک'], 'refractory ARDS پس از پنومونی.'),
          S('املای انگلیسی «فیبروز سیستیک» را بنویس', 'cystic fibrosis', 'cyst/o + fibr/o + -osis.', 'cystic…'),
          N('ab:ds')
        ]
      },
      /* ================= سطح ۲: عفونت‌های ریه ================= */
      {
        id: 'ds4', title: 'پنومونی', icon: '🦠', items: [
          L('التهاب و عفونت ریه', `${fig('pneumonia', [], 'پنومونی لوبی و برونکوپنومونی')}در ${e('<b>pneumonia</b>')} آلوئول‌ها پر از مایع و چرک می‌شوند. نشانه‌ها: تب، سرفه خلط‌دار، تنگی نفس، کراکل (${e('rales')}) و لکه کدر در ${e('CXR')}.<br>• ${e('lobar pneumonia')}: کل یک لوب<br>• ${e('bronchopneumonia')}: لکه‌های پراکنده دور نایژک‌ها<br>• ${e('aspiration pneumonia')}: از استنشاق غذا یا استفراغ`),
          L('از منابع', `${pearl('Chart Note Transcription: خانم ۴۳ ساله با تنفس دردناک و دشوار و سریع، تب، کراکل در قفسه سینه چپ پایین و خلط چرکی؛ CXR لکه کدر در لوب تحتانی ریه چپ نشان داد. تشخیص: پنومونی باکتریایی LLL؛ درمان: آنتی‌بیوتیک IV و اینتوباسیون.')}${wb('pneumon/o', '-ia')} ← پنومونی؛ ${wb('pneumon/o', '-itis')} ← التهاب ریه${vs(['pneumonia', 'عفونت و پر شدن آلوئول‌ها'], ['pneumonitis', 'التهاب بافت ریه (نه لزوماً عفونی)'])}`),
          M('کدام نوع پنومونی کل یک لوب را درگیر می‌کند؟', ['lobar pneumonia', 'bronchopneumonia', 'aspiration pneumonia', 'pneumonitis'], 'lob/o = لوب.', null, F('pneumonia', [])),
          M('پنومونی ناشی از استنشاق غذا یا استفراغ چیست؟', ['aspiration pneumonia', 'lobar pneumonia', 'pneumoconiosis', 'atelectasis'], 'aspiration = استنشاق مواد خارجی.'),
          T('در پنومونی آلوئول‌ها پر از مایع و چرک می‌شوند.', true, 'consolidation.'),
          W('واژه‌ای بساز به معنی «پنومونی اطراف نایژه‌ها»', ['bronch/o', 'pneumon/o', '-ia'], ['lob/o', '-itis', 'pleur/o'], 'broncho + pneumon + ia.'),
          P('هر یافته را به معنی‌اش وصل کن', [['rales', 'کراکل'], ['purulent sputum', 'خلط چرکی'], ['CXR', 'عکس قفسه سینه'], ['LLL', 'لوب تحتانی چپ']], 'پنومونی در پرونده.'),
          B('اختصار ___ یعنی عکس قفسه سینه.', ['CXR', 'CTA', 'ABG'], 'chest X-ray.'),
          S('املای انگلیسی «پنومونی» را بنویس', 'pneumonia', 'p اول بی‌صداست.', 'pneu…'),
          N('d2t:ds')
        ]
      },
      {
        id: 'ds5', title: 'سل', icon: '🧫', items: [
          L('بیماری قدیمی، هنوز امروزی', `${e('<b>tuberculosis</b>')} (${e('TB')}) عفونت باکتریایی مسری است که بیشتر ریه را درگیر می‌کند و با سرفه پخش می‌شود. نشانه‌ها: سرفه طولانی، ${e('hemoptysis')}، تب، تعریق شبانه و کاهش وزن.${fig('tb-lung', [], 'سل منتشر (miliary) در برش ریه')}`),
          L('تشخیص', `• ${e('<b>tuberculin skin test</b>')} (${e('PPD')}، مانتو): تزریق داخل‌پوستی و خواندن سفتی پس از ۴۸ تا ۷۲ ساعت<br>• ${e('CXR')}: لکه‌های کدر، اغلب در بالای ریه<br>• کشت خلط (${e('sputum culture')})${fig('xray-tb', [], 'رادیوگرافی ریه سالم (چپ) و سل (راست)')}${pearl('بیمار مشکوک به سل در اتاق ایزوله با فشار منفی نگه داشته می‌شود و کارکنان ماسک N95 می‌زنند.')}`),
          M('تست پوستی مانتو برای غربالگری کدام بیماری است؟', ['tuberculosis', 'asthma', 'cystic fibrosis', 'pertussis'], 'PPD.'),
          M('کدام نشانه در سل شایع است؟', ['تعریق شبانه و hemoptysis', 'سرفه پارسی', 'خس‌خس شبانه با ورزش', 'آبریزش بینی'], 'سرفه طولانی، خلط خونی، کاهش وزن.', null, F('xray-tb', [])),
          T('سل با سرفه از فردی به فرد دیگر منتقل می‌شود.', true, 'airborne.'),
          W('واژه‌ای بساز به معنی «سل»', ['tubercul/o', '-osis'], ['-itis', 'myc/o', 'coni/o'], 'tubercul/o + -osis = tuberculosis.'),
          P('هر واژه را به معنی‌اش وصل کن', [['TB', 'سل'], ['PPD', 'تست پوستی سل'], ['sputum culture', 'کشت خلط'], ['hemoptysis', 'خلط خونی']], 'سل.'),
          B('عفونت قارچی ریه ___ نام دارد.', ['pneumonomycosis', 'pneumoconiosis', 'pneumothorax'], 'myc/o = قارچ.'),
          S('املای انگلیسی «سل» را بنویس', 'tuberculosis', 'tubercul/o + -osis.', 'tuber…'),
          N('wb:ds')
        ]
      },
      {
        id: 'ds6', title: 'آنفلوآنزا، سیاه‌سرفه و ویروس‌ها', icon: '🤒', items: [
          L('عفونت‌های مسری', `${tbl([['بیماری', 'ویژگی'], [e('influenza (flu)'), 'ویروسی؛ تب، درد بدن و سرفه'], [e('pertussis'), 'سیاه‌سرفه؛ حمله‌های سرفه با صدای «هوپ» هنگام دم'], [e('diphtheria'), 'غشای ضخیم در گلو که راه هوا را می‌بندد'], [e('SARS'), 'پنومونی ویروسی شدید (کروناویروس)'], [e('MERS'), 'سندروم تنفسی خاورمیانه (کروناویروس)']])}`),
          L('پیشگیری', `واکسن سه‌گانه ${e('<b>DPT</b>')} کودکان را در برابر دیفتری، سیاه‌سرفه (${e('pertussis')}) و کزاز ایمن می‌کند. واکسن آنفلوآنزا هر سال تکرار می‌شود.${pearl('سیاه‌سرفه در شیرخواران ممکن است به جای «هوپ» با آپنه و کبودی بروز کند.')}${memo('pertussis = per (خیلی) + tussis (سرفه): سرفه خیلی شدید.')}`),
          M('سیاه‌سرفه چه نام دارد؟', ['pertussis', 'diphtheria', 'croup', 'influenza'], 'per + tussis.'),
          M('واکسن DPT در برابر کدام بیماری‌ها است؟', ['دیفتری، سیاه‌سرفه و کزاز', 'دیفتری، پنومونی و سل', 'آنفلوآنزا و سرخک', 'سل و هپاتیت'], 'diphtheria, pertussis, tetanus.'),
          T('SARS و MERS هر دو از کروناویروس‌ها هستند.', true, 'severe acute / Middle East respiratory syndrome.'),
          P('هر بیماری را به ویژگی‌اش وصل کن', [['influenza', 'تب و درد بدن ویروسی'], ['pertussis', 'سرفه‌های حمله‌ای با هوپ'], ['diphtheria', 'غشای ضخیم گلو'], ['croup', 'سرفه پارسی کودک']], 'عفونت‌های مسری.'),
          B('اختصار رایج آنفلوآنزا ___ است.', ['flu', 'URI', 'TB'], 'influenza.'),
          M('ریشه tuss/i یعنی…', ['سرفه', 'خلط', 'تب', 'گلو'], 'antitussive = ضدسرفه.'),
          S('املای انگلیسی «سیاه‌سرفه» را بنویس', 'pertussis', 'per- + tuss/i.', 'pert…'),
          N('f2t:ds')
        ]
      },
      /* ================= سطح ۳: جنب، رگ، غبار و سرطان ================= */
      {
        id: 'ds7', title: 'هوا، خون، چرک و مایع در جنب', icon: '💧', items: [
          L('بیماری‌های فضای جنب', `${fig('pleural-disorders', [], 'بیماری‌های فضای جنب')}${tbl([['واژه', 'معنی'], [e('pneumothorax'), 'هوا در فضای جنب؛ ریه روی هم می‌خوابد'], [e('hemothorax'), 'خون در فضای جنب'], [e('pyothorax (empyema)'), 'چرک در فضای جنب'], [e('pleural effusion'), 'مایع اضافه در فضای جنب'], [e('pleurisy'), 'التهاب پرده جنب']])}`),
          L('آتلکتازی', `${fig('atelectasis', [], 'آتلکتازی')}${wb('atel/o', '-ectasis')} ← ${e('<b>atelectasis</b>')}: روی هم خوابیدن تمام یا بخشی از ریه؛ مثلاً پس از جراحی که بیمار عمیق نفس نمی‌کشد یا از فشار پنوموتوراکس و افیوژن.${pearl('پس از جراحی شکم، تشویق بیمار به نفس عمیق و سرفه (و incentive spirometer) از آتلکتازی پیشگیری می‌کند.')}`),
          M('هوا در فضای جنب چه نام دارد؟', ['pneumothorax', 'hemothorax', 'pyothorax', 'pleural effusion'], 'pneum/o = هوا.', null, F('pleural-disorders', [])),
          M(`${e('<b>empyema</b>')} نام دیگر کدام است؟`, ['pyothorax', 'hemothorax', 'pneumothorax', 'atelectasis'], 'چرک در فضای جنب.'),
          T('atelectasis یعنی روی هم خوابیدن ریه یا باز نشدن کامل آن.', true, 'atel/o = ناقص.', F('atelectasis', [])),
          W('واژه‌ای بساز به معنی «چرک در قفسه سینه»', ['py/o', 'thorac/o'], ['hem/o', '-itis', 'pleur/o'], 'py/o + thorac/o = pyothorax.'),
          P('هر بیماری را به محتوایش وصل کن', [['pneumothorax', 'هوا'], ['hemothorax', 'خون'], ['pyothorax', 'چرک'], ['pleural effusion', 'مایع']], 'فضای جنب.'),
          B('التهاب پرده جنب ___ نام دارد.', ['pleurisy', 'pleurectomy', 'pleurodynia'], 'pleuritis.'),
          S('املای انگلیسی «آتلکتازی» را بنویس', 'atelectasis', 'atel/o + -ectasis.', 'atel…'),
          N('m2r:ds')
        ]
      },
      {
        id: 'ds8', title: 'آمبولی، ادم و بیماری‌های غباری', icon: '🏭', items: [
          L('رگ‌ها و مایع ریه', `• ${e('<b>pulmonary embolism</b>')} (${e('PE')}): بسته شدن سرخرگ ریوی با لخته‌ای که معمولاً از سیاهرگ‌های پا می‌آید؛ تنگی نفس و درد سینه ناگهانی<br>• ${e('<b>pulmonary edema</b>')}: مایع در بافت و آلوئول‌های ریه، اغلب از نارسایی قلب؛ کراکل و ارتوپنه<br>• ${e('pulmonary fibrosis')}: اسکار و سفتی بافت ریه`),
          L('بیماری‌های غباری', `${wb('pneum/o', 'coni/o', '-osis')} ← بیماری ریه از استنشاق غبار:<br>• ${e('anthracosis')}: غبار زغال سنگ (سیاه‌ریه)<br>• ${e('asbestosis')}: الیاف آزبست<br>• ${e('silicosis')}: غبار سیلیس (سنگ)<br>آزبست خطر ${e('mesothelioma')} (سرطان پرده جنب) را هم بالا می‌برد.${memo('coni/o یعنی غبار؛ مثل cone of dust: مخروط گرد و غبار.')}`),
          M('لخته‌ای که سرخرگ ریوی را می‌بندد چه نام دارد؟', ['pulmonary embolism', 'pulmonary edema', 'pneumothorax', 'atelectasis'], 'PE.'),
          M('کارگر معدن زغال سنگ بیشتر در خطر کدام است؟', ['anthracosis', 'asbestosis', 'silicosis', 'tuberculosis'], 'anthrac/o = زغال.'),
          T('mesothelioma سرطان پرده جنب است و با آزبست مرتبط است.', true, 'نادر ولی شدید.'),
          W('واژه‌ای بساز به معنی «بیماری غباری ریه»', ['pneum/o', 'coni/o', '-osis'], ['anthrac/o', '-itis', 'myc/o'], 'pneumoconiosis.'),
          P('هر بیماری را به علتش وصل کن', [['anthracosis', 'زغال سنگ'], ['asbestosis', 'آزبست'], ['silicosis', 'سیلیس'], ['pulmonary edema', 'نارسایی قلب']], 'علت‌ها.'),
          B('اختصار ___ یعنی آمبولی ریه.', ['PE', 'PFT', 'PPD'], 'pulmonary embolism.'),
          S('املای انگلیسی «سیاه‌ریه» را بنویس', 'anthracosis', 'anthrac/o + -osis.', 'anthr…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds9', title: 'سرطان ریه', icon: '🎗️', items: [
          L('کارسینوم برونکوژنیک', `${e('<b>bronchogenic carcinoma</b>')} سرطانی است که از نایژه‌ها شروع می‌شود و به‌شدت با سیگار مرتبط است. نشانه‌ها: سرفه طولانی، ${e('hemoptysis')}، کاهش وزن و تنگی نفس.${wb('bronch/o', '-genic')} ← «ایجادشده در نایژه»${fig('xray-lung-cancer', [], 'رادیوگرافی رنگی: تومور بزرگ ریه')}`),
          L('تشخیص و درمان', `تشخیص با ${e('CXR')} و ${e('CT')}، ${e('bronchoscopy')} و بیوپسی؛ درمان با ${e('lobectomy')} یا ${e('pneumonectomy')}، پرتودرمانی و شیمی‌درمانی.${pearl('Case Study 12-1: Morgan ۶۸ ساله، ۵۲ سال سیگار؛ برای سارکوم سلول غول‌آسای ریه چپ lobectomy، پرتودرمانی و شیمی‌درمانی شده بود و حالا با درد دم، dyspnea و diaphoresis برگشته است.')}${vs(['carcinoma', 'سرطان بافت پوششی (نایژه)'], ['sarcoma', 'سرطان بافت همبند'])}`),
          M('مهم‌ترین عامل خطر سرطان ریه چیست؟', ['سیگار', 'سرماخوردگی مکرر', 'آسم کودکی', 'کمبود ویتامین'], 'smoking.'),
          M(`${e('<b>bronchogenic</b>')} یعنی…`, ['ایجادشده در نایژه', 'التهاب نایژه', 'گشادی نایژه', 'برداشتن نایژه'], 'bronch/o + -genic.', null, F('xray-lung-cancer', [])),
          T('برداشتن کل یک ریه pneumonectomy نام دارد.', true, 'pneumon/o + -ectomy.', F('lung-surgery', [])),
          P('هر واژه را به معنی‌اش وصل کن', [['bronchogenic carcinoma', 'سرطان ریه از نایژه'], ['mesothelioma', 'سرطان پرده جنب'], ['lobectomy', 'برداشتن یک لوب'], ['biopsy', 'نمونه‌برداری']], 'سرطان ریه.'),
          B('سرطانی که از بافت همبند شروع می‌شود ___ است.', ['sarcoma', 'carcinoma', 'adenoma'], 'Morgan: giant cell sarcoma.'),
          M('کدام روش برای دیدن تومور درون نایژه و نمونه‌برداری به کار می‌رود؟', ['bronchoscopy', 'spirometry', 'pulse oximetry', 'sweat test'], 'bronch/o + -scopy.', null, F('bronchoscopy-view', [], 'نمای برونکوسکوپی دهانه نایژه‌ها')),
          S('املای انگلیسی «کارسینوم» را بنویس', 'carcinoma', 'carcin/o + -oma.', 'carci…'),
          N('wb:ds')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نَفَس — دنیای ۵: تشخیص و درمان
 * سطح ۱: آزمون‌ها و تصویربرداری • سطح ۲: راه هوایی و اکسیژن • سطح ۳: دارو، جراحی و پرونده */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'tx', sym: 'Tx', name: 'تشخیص و درمان', short: 'تشخیص و درمان', sub: 'اسپیرومتری، ABG و پالس‌اکسیمتری، برونکوسکوپی و توراسنتز، اینتوباسیون و تراکئوستومی، اکسیژن، داروها، جراحی‌های ریه و اختصارهای پرونده',
    color: '#3D6FD6', dark: '#274FA8', light: '#E4ECFB',
    levels: ['آزمون‌ها و تصویربرداری', 'راه هوایی و اکسیژن', 'دارو، جراحی و پرونده'],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: آزمون‌ها و تصویربرداری ================= */
      {
        id: 'tx1', title: 'آزمون عملکرد ریه', icon: '📉', items: [
          L('اسپیرومتری', `${fig('spirometry', [], 'منحنی حجم-زمان')}${e('<b>PFT</b>')} (pulmonary function test) گروهی از آزمون‌های تنفسی است. مهم‌ترینش ${e('<b>spirometry</b>')} است: بیمار در ${e('spirometer')} با تمام قدرت فوت می‌کند و ${e('FVC')}، ${e('FEV1')} و نسبتشان اندازه گرفته می‌شود.${fig('spirometry-test', [], 'آزمون اسپیرومتری ورزشی')}`),
          L('پیک‌فلو', `${e('<b>peak flow meter</b>')} دستگاه کوچک دستی است که ${e('PEFR')} (حداکثر سرعت بازدم) را می‌سنجد؛ بیماران آسمی هر روز در خانه با آن خودشان را پایش می‌کنند.${pearl('در Case Study آلیسون ۱۳ ساله، اسپیرومتری قبل و بعد از bronchodilator انجام شد تا برای جراحی اسکولیوز «clearance» تنفسی بگیرد.')}${memo('-meter ابزار است (spirometer) و -metry روش (spirometry).')}`),
          M('اندازه‌گیری حجم و جریان هوای تنفس چه نام دارد؟', ['spirometry', 'oximetry', 'bronchoscopy', 'polysomnography'], 'spir/o + -metry.', null, F('spirometry', [])),
          M('PFT یعنی…', ['آزمون عملکرد ریه', 'سل ریوی', 'آمبولی ریه', 'فیزیوتراپی'], 'pulmonary function test.'),
          T('spirometer ابزار و spirometry روش اندازه‌گیری است.', true, '‎-meter و ‎-metry.'),
          W('واژه‌ای بساز به معنی «ابزار اندازه‌گیری نفس»', ['spir/o', '-meter'], ['-metry', 'ox/i', '-scope'], 'spir/o + -meter = spirometer.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['PFT', 'آزمون عملکرد ریه'], ['PEFR', 'حداکثر سرعت بازدم'], ['FVC', 'ظرفیت حیاتی با فشار'], ['FEV1', 'حجم ثانیه اول']], 'اسپیرومتری.'),
          B('بیمار آسمی در خانه با ___ خودش را پایش می‌کند.', ['peak flow meter', 'bronchoscope', 'ventilator'], 'PEFR.'),
          S('املای انگلیسی «اسپیرومتری» را بنویس', 'spirometry', 'spir/o + -metry.', 'spiro…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: 'ABG و پالس‌اکسیمتری', icon: '🩸', items: [
          L('گازهای خون شریانی', `${e('<b>ABGs</b>')} (arterial blood gases): نمونه خون شریانی که اکسیژن، دی‌اکسید کربن و ${e('pH')} را می‌سنجد؛ دقیق‌ترین راه سنجش ${e('hypoxemia')} و ${e('hypercapnia')}. ${e('RA')} یعنی نمونه در حال تنفس «هوای اتاق» گرفته شده است.`),
          L('پالس‌اکسیمتری', `${fig('pulse-ox', [], 'پالس‌اکسیمتر')}${e('<b>pulse oximetry</b>')} بدون سوزن، با گیره‌ای روی انگشت، اشباع اکسیژن خون (${e('SpO2')}) را نشان می‌دهد. طبیعی: ۹۵ تا ۱۰۰٪.${fig('pulse-oximetry', [], 'پالس‌اکسیمتر در بالین')}${vs(['ABG', 'خون شریانی؛ دقیق؛ با سوزن'], ['pulse oximetry', 'گیره انگشت؛ سریع؛ بدون سوزن'])}`),
          M('کدام آزمون اکسیژن، CO2 و pH خون را دقیق اندازه می‌گیرد؟', ['ABGs', 'pulse oximetry', 'spirometry', 'CXR'], 'arterial blood gases.'),
          M('SpO2 برابر ۸۸٪ چه معنایی دارد؟', ['هیپوکسمی؛ نیاز به ارزیابی و اکسیژن', 'طبیعی', 'هایپرکاپنی', 'تنفس تند'], 'کمتر از ۹۰٪ = اکسیژن‌رسانی ناکافی.', null, F('pulse-ox', [])),
          T('RA در گزارش ABG یعنی بیمار هوای اتاق تنفس می‌کرد.', true, 'room air.'),
          W('واژه‌ای بساز به معنی «ابزار سنجش اکسیژن»', ['ox/i', '-meter'], ['-metry', 'spir/o', 'capn/o'], 'ox/i + -meter = oximeter.'),
          P('هر واژه را به معنی‌اش وصل کن', [['ABGs', 'گازهای خون شریانی'], ['oximeter', 'اکسیمتر'], ['RA', 'هوای اتاق'], ['hypoxemia', 'کمبود اکسیژن خون']], 'اکسیژن خون.'),
          B('در این یادداشت بالینی، ABG در «room air» اکسیژن ___ نشان داد.', ['کم', 'زیاد', 'طبیعی'], 'low oxygen content = hypoxemia.'),
          S('املای انگلیسی «اکسیمتر» را بنویس', 'oximeter', 'ox/i + -meter.', 'oxi…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: 'تصویربرداری، کشت و تست‌ها', icon: '🩻', items: [
          L('تصویربرداری', `${tbl([['روش', 'کاربرد'], [e('CXR (chest X-ray)'), 'پنومونی، سل، پنوموتوراکس، افیوژن'], [e('CT'), 'تومور و غدد میان‌سینه'], [e('VQ scan'), 'آمبولی ریه'], [e('bronchoscopy'), 'دیدن نایژه‌ها و نمونه‌برداری']])}`),
          L('کشت و تست‌ها', `• ${e('<b>sputum culture</b>')} و ${e('C&S')}: کشت خلط و آنتی‌بیوگرام<br>• ${e('throat culture')}: کشت گلو<br>• ${e('PPD')}: تست پوستی سل<br>• ${e('sweat test')}: فیبروز سیستیک<br>• ${e('polysomnography')}: مطالعه خواب برای آپنه${pearl('C&S یعنی culture and sensitivity: میکروب را رشد می‌دهند و می‌بینند به کدام آنتی‌بیوتیک حساس است.')}`),
          M('برای یافتن آمبولی ریه کدام تصویربرداری به کار می‌رود؟', ['VQ scan', 'sweat test', 'spirometry', 'throat culture'], 'ventilation-perfusion scan.'),
          M('C&S یعنی…', ['کشت و آنتی‌بیوگرام', 'سرفه و خلط', 'عکس قفسه سینه', 'سی‌تی‌اسکن'], 'culture and sensitivity.'),
          T('polysomnography برای تشخیص آپنه خواب است.', true, 'poly- + somn/o + -graphy.'),
          W('واژه‌ای بساز به معنی «ثبت چندگانه هنگام خواب»', ['poly-', 'somn/o', '-graphy'], ['-metry', 'spir/o', 'hypo-'], 'polysomnography.'),
          P('هر آزمون را به کاربردش وصل کن', [['CXR', 'پنومونی و سل'], ['sweat test', 'فیبروز سیستیک'], ['PPD', 'سل'], ['sputum culture', 'یافتن میکروب خلط']], 'آزمون‌ها.'),
          B('اختصار ___ یعنی عکس قفسه سینه.', ['CXR', 'CT', 'VQ'], 'chest X-ray.'),
          M('در CXR، «diffuse infiltrates at the bases of both lungs» یعنی…', ['لکه‌های پراکنده در قاعده هر دو ریه', 'هوا در فضای جنب', 'تومور در رأس ریه', 'ریه کاملاً طبیعی'], 'bases = قاعده‌ها؛ both = هر دو.'),
          N('ab:tx')
        ]
      },
      /* ================= سطح ۲: راه هوایی و اکسیژن ================= */
      {
        id: 'tx4', title: 'دیدن درون: برونکوسکوپی و توراسنتز', icon: '🔦', items: [
          L('آندوسکوپی‌های تنفسی', `${tbl([['روش', 'معنی'], [e('laryngoscopy'), 'دیدن حنجره'], [e('bronchoscopy'), 'دیدن نایژه‌ها با لوله نوری'], [e('mediastinoscopy'), 'دیدن میان‌سینه'], [e('thoracoscopy'), 'دیدن درون قفسه سینه']])}${fig('bronchoscopy-view', [], 'نمای برونکوسکوپی')}`),
          L('توراسنتز', `${fig('thoracentesis', [], 'توراسنتز')}${wb('thorac/o', '-centesis')} ← ${e('<b>thoracentesis</b>')}: سوزن از بین دنده‌ها وارد فضای جنب می‌شود و مایع (${e('pleural effusion')}) را بیرون می‌کشد؛ هم برای تشخیص و هم برای راحت‌تر نفس کشیدن.${pearl('در Case Study 12-1 توراسنتز برای Morgan انجام شد ولی مایعی بیرون نیامد.')}`),
          M('دیدن نایژه‌ها با لوله نوری چه نام دارد؟', ['bronchoscopy', 'thoracentesis', 'spirometry', 'laryngectomy'], 'bronch/o + -scopy.', null, F('bronchoscopy-view', [])),
          M('کشیدن مایع فضای جنب با سوزن چیست؟', ['thoracentesis', 'thoracotomy', 'thoracoscopy', 'tracheostomy'], '‎-centesis = سوراخ کردن برای کشیدن مایع.', null, F('thoracentesis', [])),
          T('mediastinoscopy یعنی دیدن میان‌سینه با ابزار.', true, 'mediastin/o + -scopy.'),
          W('واژه‌ای بساز به معنی «دیدن درون قفسه سینه با ابزار»', ['thorac/o', '-scopy'], ['-centesis', 'bronch/o', '-tomy'], 'thorac/o + -scopy = thoracoscopy.'),
          P('هر روش را به معنی‌اش وصل کن', [['laryngoscopy', 'دیدن حنجره'], ['bronchoscopy', 'دیدن نایژه‌ها'], ['thoracoscopy', 'دیدن قفسه سینه'], ['thoracentesis', 'کشیدن مایع جنب']], 'روش‌های تشخیصی.'),
          B('ابزار برونکوسکوپی ___ نام دارد.', ['bronchoscope', 'bronchoscopy', 'bronchometer'], '‎-scope = ابزار دیدن.'),
          S('املای انگلیسی «توراسنتز» را بنویس', 'thoracentesis', 'thorac/o + -centesis.', 'thora…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx5', title: 'اینتوباسیون و تراکئوستومی', icon: '🫁', items: [
          L('راه هوایی مصنوعی', `${fig('intubation', [], 'اینتوباسیون داخل نای')}${e('<b>endotracheal intubation</b>')}: لوله ${e('ET')} از دهان یا بینی وارد نای می‌شود و بالونکش راه را می‌بندد تا هوا مستقیم به ریه برسد. لوله باید در نای باشد، نه مری.<br>${e('<b>mechanical ventilation</b>')}: ${e('ventilator')} از راه این لوله برای بیمار نفس می‌کشد.`),
          L('تراکئوستومی', `${fig('tracheostomy', [], 'تراکئوستومی')}اگر بیمار مدت طولانی به ونتیلاتور نیاز داشته باشد یا راه فوقانی بسته باشد، منفذی در جلوی گردن به نای ایجاد می‌کنند: ${e('<b>tracheostomy</b>')}.${fig('tracheostomy-drawing', [], 'بیمار با لوله تراکئوستومی')}${pearl('Case Study 12-2: پس از یک هفته تلاش ناموفق برای جدا کردن Ella از ونتیلاتور، پزشک ریه تراکئوستومی دائمی را مطرح کرد.')}`),
          M('لوله‌ای که از دهان وارد نای می‌شود چه نام دارد؟', ['endotracheal tube', 'nasal cannula', 'chest tube', 'nebulizer'], 'ET tube.', null, F('intubation', [])),
          M('ایجاد منفذ ماندگار در نای از جلوی گردن چیست؟', ['tracheostomy', 'tracheotomy', 'thoracotomy', 'laryngoscopy'], '‎-stomy = منفذ.'),
          T('در اینتوباسیون درست، لوله وارد مری می‌شود.', false, 'نادرست؛ لوله باید در نای باشد.'),
          W('واژه‌ای بساز به معنی «برش نای»', ['trache/o', '-tomy'], ['-stomy', 'thorac/o', 'endo-'], 'trache/o + -tomy = tracheotomy.'),
          P('هر واژه را به معنی‌اش وصل کن', [['ventilator', 'دستگاه تنفس مصنوعی'], ['ET', 'لوله داخل نای'], ['tracheostomy', 'منفذ در نای'], ['mechanical ventilation', 'تهویه با دستگاه']], 'راه هوایی.'),
          O('مراحل اینتوباسیون را بچین', ['باز کردن راه هوایی با لارنگوسکوپ', 'دیدن تارهای صوتی', 'گذاشتن لوله ET در نای', 'باد کردن بالونک و وصل به ونتیلاتور'], 'ترتیب کلی.'),
          S('املای انگلیسی «تراکئوستومی» را بنویس', 'tracheostomy', 'trache/o + -stomy.', 'tracheo…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx6', title: 'اکسیژن و دستگاه‌های تنفسی', icon: '💨', items: [
          L('راه‌های دادن اکسیژن', `${fig('oxygen-devices', [], 'دستگاه‌های اکسیژن و داروی استنشاقی')}• ${e('<b>nasal cannula</b>')}: دو شاخه پلاستیکی در بینی<br>• ${e('face mask')}: ماسک صورت برای اکسیژن بیشتر<br>• ${e('<b>CPAP</b>')}: فشار مثبت مداوم برای آپنه خواب<br>• ${e('<b>IPPB</b>')}: تنفس با فشار مثبت متناوب برای باز کردن ریه${fig('nasal-cannula', [], 'کانولای بینی')}`),
          L('دارو به شکل استنشاق', `• ${e('<b>MDI</b>')} (metered-dose inhaler): اسپری با دوز مشخص؛ با ${e('spacer')} بهتر به ریه می‌رسد<br>• ${e('<b>nebulizer</b>')}: داروی مایع را به مه تبدیل می‌کند؛ برای کودکان و بیماران بدحال${fig('nebulizer-photo', [], 'نبولایزر')}${pearl('در Case Study، خانم ۸۸ ساله با پنومونی، آنتی‌بیوتیک IV و IPPB گرفت و روز سوم مرخص شد.')}`),
          M('اکسیژن با دو شاخه کوچک در سوراخ‌های بینی با چه دستگاهی داده می‌شود؟', ['nasal cannula', 'CPAP', 'nebulizer', 'ventilator'], 'cannula = لوله کوچک.', null, F('oxygen-devices', [])),
          M('کدام دستگاه داروی مایع را به مه تبدیل می‌کند؟', ['nebulizer', 'MDI', 'spirometer', 'oximeter'], 'NMT = nebulized mist treatment.'),
          T('spacer کمک می‌کند داروی اسپری بهتر به ریه برسد.', true, 'با MDI.', F('mdi', [], 'اسپری استنشاقی با اسپیسر')),
          P('هر دستگاه را به کارش وصل کن', [['CPAP', 'آپنه خواب'], ['IPPB', 'باز کردن ریه با فشار'], ['MDI', 'اسپری دوز مشخص'], ['nasal cannula', 'اکسیژن کم‌جریان']], 'دستگاه‌ها.'),
          B('اختصار ___ یعنی درمان با بخور دارویی.', ['NMT', 'MDI', 'IPPB'], 'nebulized mist treatment.'),
          M('O2 per nasal cannula یعنی…', ['اکسیژن از راه کانولای بینی', 'دی‌اکسید کربن از راه دهان', 'اکسیژن با ونتیلاتور', 'هوای اتاق'], 'per = از راه.'),
          S('املای انگلیسی «نبولایزر» را بنویس', 'nebulizer', 'nebula = مه.', 'nebu…'),
          N('ab:tx')
        ]
      },
      /* ================= سطح ۳: دارو، جراحی و پرونده ================= */
      {
        id: 'tx7', title: 'داروهای تنفسی', icon: '💊', items: [
          L('داروها', `${tbl([['دارو', 'کار'], [e('bronchodilator'), 'گشاد کردن نایژه'], [e('inhaled corticosteroid'), 'کاهش التهاب راه هوایی'], [e('antitussive'), 'آرام کردن سرفه'], [e('expectorant'), 'رقیق کردن خلط برای بالا آوردن'], [e('mucolytic'), 'شکستن مخاط'], [e('decongestant'), 'کاهش احتقان بینی'], [e('antihistamine'), 'کاهش نشانه‌های آلرژی'], [e('antibiotic'), 'درمان عفونت باکتریایی']])}`),
          L('واژه‌سازی داروها', `${wb('anti-', 'tuss/i', '-ive')} ← ضدسرفه<br>${wb('muc/o', '-lytic')} ← مخاط‌شکن<br>${wb('de-', 'congest', '-ant')} ← ضداحتقان${vs(['antitussive', 'سرفه را کم می‌کند'], ['expectorant', 'سرفه خلط‌دار را مؤثرتر می‌کند'])}${memo('expectorant از ex- + pector (سینه): «از سینه بیرون می‌آورد».')}`),
          M('دارویی که سرفه را آرام می‌کند چیست؟', ['antitussive', 'expectorant', 'bronchodilator', 'decongestant'], 'anti- + tuss/i + -ive.'),
          M(`${e('<b>mucolytic</b>')} چه می‌کند؟`, ['مخاط را می‌شکند و رقیق می‌کند', 'نایژه را گشاد می‌کند', 'سرفه را قطع می‌کند', 'تب را پایین می‌آورد'], 'muc/o + -lytic.'),
          T('bronchodilator نایژه را تنگ می‌کند.', false, 'نادرست؛ نایژه را گشاد می‌کند.'),
          W('واژه‌ای بساز به معنی «مخاط‌شکن»', ['muc/o', '-lytic'], ['anti-', '-itis', 'tuss/i'], 'muc/o + -lytic = mucolytic.'),
          P('هر دارو را به کارش وصل کن', [['expectorant', 'خلط‌آور'], ['decongestant', 'ضداحتقان'], ['antihistamine', 'ضدآلرژی'], ['inhaled corticosteroid', 'ضدالتهاب استنشاقی']], 'داروها.'),
          B('اختصار ___ یعنی «در صورت نیاز» در نسخه.', ['prn', 'po', 'ad lib'], 'pro re nata.'),
          S('املای انگلیسی «گشادکننده نایژه» را بنویس', 'bronchodilator', 'bronch/o + dilator.', 'broncho…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx8', title: 'جراحی‌های ریه و قفسه سینه', icon: '🔪', items: [
          L('برش و برداشتن', `${fig('lung-surgery', [], 'لوبکتومی و پنومونکتومی')}${tbl([['جراحی', 'معنی'], [e('thoracotomy'), 'برش قفسه سینه'], [e('thoracostomy'), 'منفذ برای لوله سینه (chest tube)'], [e('lobectomy'), 'برداشتن یک لوب'], [e('pneumonectomy'), 'برداشتن کل یک ریه'], [e('pleurectomy'), 'برداشتن بخشی از پرده جنب']])}`),
          L('اورژانس‌ها', `• ${e('<b>CPR</b>')} (احیای قلبی-ریوی): فشردن قفسه سینه و تنفس نجات در ایست قلبی و تنفسی<br>• ${e('<b>Heimlich maneuver</b>')}: فشار سریع رو به بالای شکم برای بیرون انداختن جسم خارجی از راه هوایی${fig('heimlich', [], 'مانور هایملیک')}${pearl('در پنوموتوراکس، با thoracostomy لوله سینه گذاشته می‌شود تا هوا خارج شود و ریه دوباره باز شود.')}`),
          M('برداشتن کل یک ریه چه نام دارد؟', ['pneumonectomy', 'lobectomy', 'pleurectomy', 'thoracotomy'], 'pneumon/o + -ectomy.', null, F('lung-surgery', [])),
          M('برای بیرون انداختن جسم خارجی از راه هوایی کدام کار انجام می‌شود؟', ['Heimlich maneuver', 'thoracentesis', 'spirometry', 'CPAP'], 'فشار رو به بالای شکم.'),
          T('thoracostomy برای گذاشتن لوله سینه انجام می‌شود.', true, 'thorac/o + -stomy.'),
          W('واژه‌ای بساز به معنی «برداشتن پرده جنب»', ['pleur/o', '-ectomy'], ['-tomy', 'lob/o', 'thorac/o'], 'pleur/o + -ectomy = pleurectomy.'),
          P('هر جراحی را به معنی‌اش وصل کن', [['lobectomy', 'برداشتن لوب'], ['thoracotomy', 'برش قفسه سینه'], ['thoracostomy', 'لوله سینه'], ['CPR', 'احیای قلبی-ریوی']], 'جراحی و اورژانس.'),
          B('جراح برای تومور ریه آقای Fritzringer ___ را برنامه‌ریزی کرده است؛ یعنی فقط یک لوب برداشته می‌شود و دو ریه باقی می‌ماند.', ['lobectomy', 'pneumonectomy', 'bronchoscopy'], 'lob/o + -ectomy؛ نگرانی بیمار از «یک ریه» درست نیست، آن pneumonectomy است.'),
          S('املای انگلیسی «برداشتن لوب» را بنویس', 'lobectomy', 'lob/o + -ectomy.', 'lobe…'),
          N('wb:tx')
        ]
      },
      {
        id: 'tx9', title: 'خواندن پرونده تنفسی', icon: '📋', items: [
          L('اختصارهای رایج', `${tbl([['اختصار', 'معنی'], [e('SOB / DOE'), 'تنگی نفس / هنگام فعالیت'], [e('CTA'), 'سمع پاک'], [e('CXR'), 'عکس قفسه سینه'], [e('ABGs'), 'گازهای خون شریانی'], [e('COPD'), 'بیماری انسدادی مزمن ریه'], [e('URI'), 'عفونت تنفسی فوقانی'], [e('O2 / RA'), 'اکسیژن / هوای اتاق'], [e('TPR'), 'دما، نبض، تنفس']])}`),
          L('یک یادداشت واقعی', `${pearl('یادداشت بالینی: «HISTORY: 30-year-old female c/o nonproductive cough, dyspnea and fever of 3 days. PE: T 102°F, R 26, P 108. Tachypnea with mild cyanosis, inspiratory rales. CXR: diffuse infiltrates at the bases of both lungs. ABG on room air: low oxygen. Dx: pneumonia of unknown etiology. Plan: ICU, antibiotics and oxygen by face mask.»')}${memo('c/o یعنی complains of؛ یعنی بیمار از … شکایت دارد.')}`),
          M('در یادداشت بالا R 26 یعنی…', ['۲۶ تنفس در دقیقه؛ تنفس تند', '۲۶ ضربان قلب', 'دمای ۲۶ درجه', 'ریه راست'], 'R = respiration؛ بیش از ۲۰ = tachypnea.'),
          M('«c/o nonproductive cough» یعنی…', ['شکایت از سرفه خشک', 'شکایت از خلط خونی', 'سرفه خلط‌دار', 'بدون سرفه'], 'c/o = complains of.'),
          T('etiology یعنی علت بیماری.', true, 'pneumonia of unknown etiology = پنومونی با علت نامعلوم.'),
          P('هر بخش یادداشت را به معنی‌اش وصل کن', [['tachypnea', 'تنفس تند'], ['cyanosis', 'کبودی'], ['inspiratory rales', 'کراکل هنگام دم'], ['infiltrates', 'لکه‌های کدر در عکس']], 'یادداشت بالینی.'),
          B('اختصار ___ یعنی تنگی نفس هنگام فعالیت.', ['DOE', 'SOB', 'COPD'], 'dyspnea on exertion.'),
          O('ساختار معمول یادداشت را بچین', ['History', 'Physical exam', 'Diagnosis', 'Treatment plan'], 'شرح حال ← معاینه ← تشخیص ← برنامه.'),
          M('«oxygen by face mask» یعنی…', ['اکسیژن با ماسک صورت', 'اکسیژن با کانولای بینی', 'دستگاه CPAP', 'تهویه مکانیکی'], 'face mask.'),
          N('ab:tx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* نَفَس — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. شکل‌ها از دنیای ریه، راه هوایی، نشانه‌ها و درمان تنفسی الهام گرفته‌اند. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: 'نفسک', title: 'یک جفت ریه تازه‌کار', shape: 'lungs', color: '#F4A6B8', acc: ['sparkle'], bio: 'روزی بیش از بیست هزار بار نفس می‌کشد؛ اکسیژن را به خون می‌دهد و دی‌اکسید کربن را بیرون می‌فرستد.' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'ریشه‌یاب', title: 'استاد pulmon/o و pneum/o', shape: 'book', color: '#2E9BD6', acc: ['glasses'], bio: 'لغت‌نامه‌ای زنده که هر واژه تنفسی را به ریشه، پیشوند و پسوند می‌شکند و rhin/o تا phren/o را از حفظ است.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'پازلی', title: 'سلطان پیشوند و پسوند', shape: 'puzzle', color: '#1F6F9F', acc: ['crown'], bio: 'tachy- و brady- را جا می‌اندازد، -pnea و -ptysis را هیچ‌وقت قاطی نمی‌کند و -stomy را از -tomy جدا می‌داند.' },
    { id: 'up-0', w: 'up', lv: 0, name: 'مژکی', title: 'جاروکش راه هوایی', shape: 'hair', color: '#F3B0A6', acc: ['headband'], bio: 'یکی از میلیون‌ها مژک دیواره بینی و نای است که مخاط و گرد و غبار را مثل پله‌برقی به سمت حلق می‌راند.' },
    { id: 'up-1', w: 'up', lv: 1, name: 'سینوسی', title: 'حباب هوای جمجمه', shape: 'bubble', color: '#F6D36A', acc: ['glasses'], bio: 'در استخوان ماگزیلا زندگی می‌کند؛ جمجمه را سبک و صدا را پرطنین می‌کند و از سینوزیت می‌ترسد.' },
    { id: 'up-2', w: 'up', lv: 2, name: 'حنجره‌خوان', title: 'استاد تارهای صوتی', shape: 'mic', color: '#E0708C', acc: ['crown'], bio: 'گلوت را برای نفس باز و برای آواز بسته می‌کند؛ aphonia و dysphonia را از صدای بیمار تشخیص می‌دهد.' },
    { id: 'lo-0', w: 'lo', lv: 0, name: 'حلقه‌دار', title: 'نای همیشه‌باز', shape: 'ruler', color: '#BFE0F2', acc: ['sparkle'], bio: 'حلقه‌های C شکل غضروفی‌اش هیچ‌وقت نمی‌گذارند بسته شود؛ در carina به دو نایژه تقسیم می‌شود.' },
    { id: 'lo-1', w: 'lo', lv: 1, name: 'آلوئولی', title: 'خوشه تبادل گاز', shape: 'grape', color: '#F8BFCB', acc: ['glasses'], bio: 'سیصد میلیون کیسه هوایی کوچک است که با سورفکتانت باز می‌مانند و اکسیژن را به مویرگ‌ها می‌دهند.' },
    { id: 'lo-2', w: 'lo', lv: 2, name: 'دیافراگم', title: 'عضله گنبدی قهرمان', shape: 'shield', color: '#D65A52', acc: ['crown'], bio: 'با هر دم منقبض و صاف می‌شود و هوا را به درون می‌کشد؛ عصب فرنیک فرمانده اوست.' },
    { id: 'br-0', w: 'br', lv: 0, name: 'تب‌سنج', title: 'نگهبان علائم حیاتی', shape: 'thermo', color: '#17A398', acc: ['sparkle'], bio: 'TPR را می‌شمارد: دما، نبض و تنفس؛ و tachypnea را از eupnea جدا می‌کند.' },
    { id: 'br-1', w: 'br', lv: 1, name: 'گلبولی', title: 'حامل اکسیژن', shape: 'disc', color: '#D9443A', acc: ['glasses'], bio: 'اکسیژن را از آلوئول می‌گیرد و به همه سلول‌ها می‌رساند؛ اگر کم بیاورد، لب‌ها کبود می‌شوند.' },
    { id: 'br-2', w: 'br', lv: 2, name: 'اسپیرو', title: 'سنجنده حجم‌های ریه', shape: 'dyna', color: '#0F7A71', acc: ['crown'], bio: 'TV، VC و TLC را می‌شناسد و با یک نگاه به FEV1/FVC الگوی انسدادی را تشخیص می‌دهد.' },
    { id: 'ds-0', w: 'ds', lv: 0, name: 'اسپری نجات', title: 'باز‌کننده نایژه', shape: 'capsule', color: '#E07A3A', acc: ['sparkle'], bio: 'در حمله آسم با یک پاف bronchospasm را آرام می‌کند و خس‌خس را ساکت.' },
    { id: 'ds-1', w: 'ds', lv: 1, name: 'آنتی‌بادی', title: 'شکارچی میکروب', shape: 'yab', color: '#8E6BD8', acc: ['glasses'], bio: 'با پنومونی، سل و سیاه‌سرفه می‌جنگد و طرفدار پر و پا قرص واکسن DPT است.' },
    { id: 'ds-2', w: 'ds', lv: 2, name: 'هوای پاک', title: 'دشمن دود و غبار', shape: 'sun', color: '#FFC24B', acc: ['crown'], bio: 'از سیگار، آزبست و غبار زغال سنگ بیزار است؛ می‌داند COPD و سرطان ریه از کجا می‌آیند.' },
    { id: 'tx-0', w: 'tx', lv: 0, name: 'پالس‌اکسی', title: 'گیره هوشمند انگشت', shape: 'meter', color: '#3D6FD6', acc: ['sparkle'], bio: 'بی‌سوزن و در چند ثانیه SpO2 را نشان می‌دهد؛ زیر ۹۰٪ زنگ خطر را به صدا درمی‌آورد.' },
    { id: 'tx-1', w: 'tx', lv: 1, name: 'دستکش برونکو', title: 'کاوشگر نایژه‌ها', shape: 'glove', color: '#9FD3C7', acc: ['glasses'], bio: 'با برونکوسکوپ درون نایژه‌ها را می‌بیند، نمونه می‌گیرد و جسم خارجی را بیرون می‌آورد.' },
    { id: 'tx-2', w: 'tx', lv: 2, name: 'نسخه‌نویس ریه', title: 'استاد پرونده تنفسی', shape: 'clipboard', color: '#274FA8', acc: ['cape', 'crown'], bio: 'SOB، CTA، ABGs و CXR را در یک نگاه می‌خواند و از اینتوباسیون تا ترخیص بیمار را همراهی می‌کند.' }
  ];

  /* ---------- بدنه‌ها: مسیر، مرکز چهره، ارتفاع بالای سر ---------- */
  function starPath(cx, cy, R, r) {
    let d = '';
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r : R;
      d += (i ? 'L' : 'M') + (cx + rr * Math.cos(a)).toFixed(1) + ' ' + (cy + rr * Math.sin(a)).toFixed(1);
    }
    return d + 'Z';
  }
  function hexPath(cx, cy, R) {
    let d = '';
    for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * Math.PI / 3; d += (i ? 'L' : 'M') + (cx + R * Math.cos(a)).toFixed(1) + ' ' + (cy + R * Math.sin(a)).toFixed(1); }
    return d + 'Z';
  }
  const SHAPES = {
    /* بلوک پوست: اپیدرم، درم و چربی با یک تار مو */
    tile: { fy: 92, top: 36, body: c => `<path d="M74 42 q-2 -16 10 -30" stroke="#5a2e1c" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="14" y="40" width="92" height="104" rx="20" fill="${c}"/><path d="M14 66 q11.5 -8 23 0 t23 0 t23 0 t23 0 V60 a20 20 0 0 0 -20 -20 H34 a20 20 0 0 0 -20 20Z" fill="#000" opacity=".12"/><g fill="#fff2c4" opacity=".75"><circle cx="30" cy="130" r="7"/><circle cx="48" cy="132" r="7"/><circle cx="66" cy="132" r="7"/><circle cx="84" cy="130" r="7"/></g><ellipse cx="34" cy="56" rx="7" ry="4" fill="#fff" opacity=".35"/>` },
    /* فولیکول و پیاز مو */
    hair: { fy: 96, top: 20, body: c => `<path d="M52 36 q-10 -18 -2 -30 M60 34 q0 -20 10 -30 M68 36 q12 -14 6 -28" stroke="#3a2414" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M60 30 C92 30 104 70 100 100 C96 128 80 142 60 142 C40 142 24 128 20 100 C16 70 28 30 60 30Z" fill="${c}"/><ellipse cx="60" cy="134" rx="16" ry="6" fill="#e0675a" opacity=".8"/><ellipse cx="38" cy="58" rx="7" ry="12" transform="rotate(25 38 58)" fill="#fff" opacity=".3"/>` },
    /* سر انگشت با ناخن و هلال */
    nail: { fy: 110, top: 30, body: c => `<path d="M24 146 V68 C24 26 96 26 96 68 V146Z" fill="${c}"/><path d="M38 46 C38 28 82 28 82 46 V78 C82 88 38 88 38 78Z" fill="#fff5ef" stroke="#e3b9a3" stroke-width="2"/><path d="M44 80 Q60 68 76 80" fill="#fff" stroke="#f0d7c9"/><ellipse cx="50" cy="44" rx="5" ry="8" fill="#fff" opacity=".8"/>` },
    /* تاول گنبدی شفاف */
    blister: { fy: 98, top: 40, body: c => `<rect x="4" y="132" width="112" height="12" rx="6" fill="#f2b893"/><path d="M10 136 C10 72 38 40 60 40 C82 40 110 72 110 136Z" fill="${c}" opacity=".92"/><path d="M28 80 C34 62 46 52 58 50" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".7"/>` },
    /* خوشه باکتری */
    grape: { fy: 92, top: 26, body: c => `${[[40, 56], [80, 56], [60, 42], [28, 90], [92, 90], [60, 70], [42, 124], [78, 124], [60, 110], [30, 64], [90, 64]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="19" fill="${c}" stroke="#000" stroke-opacity=".12" stroke-width="2"/>`).join('')}<circle cx="60" cy="92" r="32" fill="${c}"/><ellipse cx="46" cy="42" rx="5" ry="8" fill="#fff" opacity=".4"/>` },
    /* تیوب پماد */
    ointment: { fy: 70, top: 22, body: c => `<rect x="26" y="20" width="68" height="12" rx="3" fill="#C9D2D8"/><path d="M26 26 H94" stroke="#9AA9B1" stroke-width="2" stroke-dasharray="3 3"/><path d="M30 32 H90 L84 128 H36Z" fill="${c}"/><rect x="38" y="98" width="44" height="18" rx="4" fill="#fff" opacity=".75"/><path d="M44 107 h32" stroke="${c}" stroke-width="3" stroke-linecap="round"/><rect x="48" y="128" width="24" height="16" rx="4" fill="#fff" stroke="#C9D2D8" stroke-width="2"/><ellipse cx="42" cy="50" rx="5" ry="12" fill="#fff" opacity=".3"/>` },
    /* خورشید ضدآفتاب */
    sun: { fy: 90, top: 30, body: c => `${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; const x1 = 60 + Math.cos(a) * 46, y1 = 90 + Math.sin(a) * 46, x2 = 60 + Math.cos(a) * 58, y2 = 90 + Math.sin(a) * 58; return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="#F59E0B" stroke-width="7" stroke-linecap="round"/>`; }).join('')}<circle cx="60" cy="90" r="42" fill="${c}"/><ellipse cx="40" cy="70" rx="8" ry="12" transform="rotate(30 40 70)" fill="#fff" opacity=".35"/>` },
    /* چسب زخم */
    bandage: { fy: 88, top: 46, body: c => `<g transform="rotate(-16 60 88)"><rect x="2" y="62" width="116" height="52" rx="26" fill="${c}" stroke="#d9a274" stroke-width="2"/><rect x="36" y="64" width="48" height="48" rx="6" fill="#fff" opacity=".6"/>${[14, 24, 96, 106].map(x => `<circle cx="${x}" cy="80" r="2" fill="#d9a274"/><circle cx="${x}" cy="96" r="2" fill="#d9a274"/>`).join('')}</g>` },
    /* پاکت نامه: هورمون پیام‌رسان */
    envelope: { fy: 102, top: 44, body: c => `<rect x="14" y="46" width="92" height="84" rx="12" fill="${c}"/><path d="M18 52 L60 80 L102 52" stroke="#fff" stroke-width="5" fill="none" stroke-linejoin="round" opacity=".55"/><rect x="14" y="46" width="92" height="84" rx="12" fill="#000" opacity=".06"/>` },
    /* قفل: گیرنده */
    lock: { fy: 96, top: 20, body: c => `<path d="M36 66 V46 a24 24 0 0 1 48 0 V66" stroke="#9AA9B1" stroke-width="11" fill="none"/><rect x="16" y="62" width="88" height="80" rx="16" fill="${c}"/><circle cx="60" cy="132" r="4.5" fill="#000" opacity=".25"/><path d="M26 74 q10 -6 22 -4" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".4"/>` },
    /* نخود: هیپوفیز */
    pea: { fy: 90, top: 40, body: c => `<path d="M60 44 q4 -16 18 -20" stroke="#58A700" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M72 30 q14 -12 26 -4 q-12 10 -26 4z" fill="#58CC02"/><circle cx="60" cy="92" r="50" fill="${c}"/><circle cx="60" cy="96" r="38" fill="#000" opacity=".06"/><ellipse cx="38" cy="66" rx="9" ry="14" transform="rotate(35 38 66)" fill="#fff" opacity=".35"/>` },
    /* خط‌کش: هورمون رشد */
    ruler: { fy: 76, top: 8, body: c => `<rect x="28" y="8" width="64" height="136" rx="14" fill="${c}"/>${[22, 34, 46, 58, 70, 82, 94, 106, 118, 130].map((y, i) => `<path d="M28 ${y} h${i % 2 ? 9 : 15}" stroke="#fff" stroke-width="3" opacity=".6"/>`).join('')}<rect x="28" y="8" width="64" height="136" rx="14" fill="#000" opacity=".05"/>` },
    /* پروانه: تیروئید */
    butterfly: { fy: 88, top: 42, body: c => `<ellipse cx="36" cy="90" rx="30" ry="46" transform="rotate(-14 36 90)" fill="${c}"/><ellipse cx="84" cy="90" rx="30" ry="46" transform="rotate(14 84 90)" fill="${c}"/><rect x="38" y="96" width="44" height="26" rx="12" fill="${c}"/><ellipse cx="60" cy="112" rx="22" ry="10" fill="#000" opacity=".07"/><ellipse cx="26" cy="68" rx="7" ry="13" transform="rotate(20 26 68)" fill="#fff" opacity=".35"/>` },
    /* شش‌ضلعی: کریستال ید */
    hex: { fy: 88, top: 36, body: c => `<path d="${hexPath(60, 90, 52)}" fill="${c}" stroke="${c}" stroke-width="10" stroke-linejoin="round"/><path d="${hexPath(60, 92, 38)}" fill="#000" opacity=".07"/><path d="M28 70 l14 -8" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".4"/>` },
    /* کلاه مثلثی: فوق‌کلیه */
    hat: { fy: 100, top: 30, body: c => `<path d="M12 134 Q60 2 108 134 Z" fill="${c}"/><path d="M34 134 Q60 50 86 134 Z" fill="#000" opacity=".06"/><ellipse cx="60" cy="134" rx="54" ry="10" fill="${c}"/><ellipse cx="60" cy="134" rx="54" ry="10" fill="#000" opacity=".12"/><path d="M40 70 q8 -18 16 -26" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".4"/>` },
    /* نمکدان: آلدوسترون */
    salt: { fy: 98, top: 20, body: c => `<rect x="24" y="50" width="72" height="94" rx="20" fill="#fff" stroke="#d4d9dc" stroke-width="3"/><path d="M24 50 a20 20 0 0 1 20 -24 h32 a20 20 0 0 1 20 24z" fill="${c}"/><g fill="#fff" opacity=".8"><circle cx="48" cy="38" r="3"/><circle cx="60" cy="34" r="3"/><circle cx="72" cy="38" r="3"/></g><path d="M34 62 v40" stroke="#eef2f4" stroke-width="6" stroke-linecap="round"/>` },
    /* جزیره با نخل: جزایر لانگرهانس */
    island: { fy: 110, top: 22, body: c => `<path d="M80 86 C82 60 86 42 92 28" stroke="#8B5A2B" stroke-width="6" fill="none" stroke-linecap="round"/><g fill="${c}"><path d="M92 28 q-26 -10 -40 6 q20 -4 40 -6z"/><path d="M92 28 q24 -12 26 10 q-12 -10 -26 -10z"/><path d="M92 28 q-6 -18 8 -24 q0 14 -8 24z"/></g><ellipse cx="60" cy="114" rx="54" ry="32" fill="#F4D58D"/><ellipse cx="60" cy="140" rx="58" ry="8" fill="${c}" opacity=".45"/><ellipse cx="40" cy="96" rx="9" ry="5" fill="#fff" opacity=".45"/>` },
    /* کلید: انسولین */
    key: { fy: 60, top: 14, body: c => `<rect x="51" y="92" width="18" height="54" rx="6" fill="${c}"/><rect x="66" y="116" width="16" height="9" rx="3" fill="${c}"/><rect x="66" y="132" width="12" height="9" rx="3" fill="${c}"/><circle cx="60" cy="60" r="44" fill="${c}"/><circle cx="60" cy="30" r="7" fill="#fff" opacity=".9"/><circle cx="60" cy="64" r="32" fill="#000" opacity=".05"/>` },
    /* قندسنج */
    meter: { fy: 104, top: 16, body: c => `<rect x="20" y="18" width="80" height="124" rx="18" fill="${c}"/><rect x="31" y="30" width="58" height="40" rx="8" fill="#DFF6E8"/><path d="M38 58 l8 -10 8 6 8 -14 8 8 8 -4" stroke="#1F8A4C" stroke-width="3" fill="none" stroke-linejoin="round"/><rect x="52" y="140" width="16" height="10" rx="2" fill="#fff" stroke="#d4d9dc"/>` },
    /* ماه: ملاتونین */
    moon: { fy: 88, top: 36, body: c => `<circle cx="60" cy="90" r="52" fill="${c}"/><g fill="#000" opacity=".09"><circle cx="34" cy="64" r="8"/><circle cx="90" cy="120" r="10"/><circle cx="84" cy="56" r="5"/></g><path d="M22 92 a38 38 0 0 1 22 -40" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".35"/>` },
    /* قطعه پازل */
    puzzle: { fy: 98, top: 40, body: c => `<path d="M18 52 H46 C40 30 80 30 74 52 H102 V80 C122 74 122 112 102 106 V140 H18 V106 C38 112 38 74 18 80Z" fill="${c}"/><path d="M18 106 C38 112 38 74 18 80 V140 H60 C40 140 24 128 18 106Z" fill="#000" opacity=".08"/><path d="M28 64 q10 -6 22 -4" stroke="#fff" stroke-opacity=".45" stroke-width="5" fill="none" stroke-linecap="round"/>` },
    /* کتاب واژه‌نامه */
    book: { fy: 84, top: 26, body: c => `<rect x="18" y="26" width="86" height="116" rx="10" fill="${c}"/><rect x="18" y="26" width="16" height="116" rx="7" fill="#000" opacity=".18"/><rect x="34" y="124" width="70" height="10" rx="3" fill="#fff" opacity=".9"/><path d="M40 112 h48" stroke="#fff" stroke-opacity=".5" stroke-width="4" stroke-linecap="round"/><text x="70" y="58" font-size="16" font-weight="900" fill="#fff" fill-opacity=".9" text-anchor="middle" font-family="Nunito, system-ui, sans-serif">Aa</text>` },
    /* حباب گفتگو */
    bubble: { fy: 80, top: 28, body: c => `<path d="M60 28 C96 28 112 50 112 78 C112 106 92 124 62 124 C56 124 50 123 45 122 L22 142 L28 116 C14 106 8 94 8 78 C8 50 26 28 60 28Z" fill="${c}"/><ellipse cx="34" cy="54" rx="8" ry="12" transform="rotate(35 34 54)" fill="#fff" opacity=".3"/>` },
    /* گلبول قرمز دوکاو */
    disc: { fy: 84, top: 38, body: c => `<ellipse cx="60" cy="88" rx="52" ry="48" fill="${c}"/><ellipse cx="60" cy="92" rx="30" ry="24" fill="#000" opacity=".1"/><path d="M22 70 A44 40 0 0 1 48 46" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* پلاکت نامنظم */
    platelet: { fy: 88, top: 46, body: c => `<path d="M18 92 C10 62 38 44 62 50 C88 40 112 62 104 90 C114 114 88 136 60 130 C32 138 10 118 18 92Z" fill="${c}"/><g fill="#6E48A6" opacity=".5"><circle cx="34" cy="70" r="3"/><circle cx="92" cy="72" r="3"/><circle cx="40" cy="118" r="3"/><circle cx="88" cy="116" r="2.5"/></g>` },
    /* کیسه خون */
    bag: { fy: 100, top: 26, body: c => `<rect x="54" y="8" width="12" height="22" rx="4" fill="#B7C2C8"/><rect x="18" y="26" width="84" height="116" rx="20" fill="#fff" stroke="#d4d9dc" stroke-width="3"/><path d="M21 66 H99 V122 a17 17 0 0 1 -17 17 H38 a17 17 0 0 1 -17 -17z" fill="${c}"/><path d="M30 40 H70 M30 50 H58" stroke="#d4d9dc" stroke-width="4" stroke-linecap="round"/>` },
    /* گره لنفاوی لوبیایی */
    bean: { fy: 84, top: 36, body: c => `<path d="M26 64 C34 28 98 26 106 64 C112 96 96 136 64 134 C50 133 50 114 38 112 C16 110 18 84 26 64Z" fill="${c}"/><path d="M40 112 C50 114 50 133 64 134" stroke="#000" stroke-opacity=".12" stroke-width="4" fill="none"/><ellipse cx="42" cy="56" rx="7" ry="12" transform="rotate(40 42 56)" fill="#fff" opacity=".35"/>` },
    /* آنتی‌بادی Y شکل */
    yab: { fy: 96, top: 30, body: c => `<g stroke="${c}" stroke-width="22" stroke-linecap="round" fill="none"><path d="M60 140 V100"/><path d="M60 96 L24 40"/><path d="M60 96 L96 40"/></g><g stroke="#fff" stroke-opacity=".35" stroke-width="5" stroke-linecap="round" fill="none"><path d="M22 34 L32 50"/><path d="M98 34 L88 50"/></g><circle cx="60" cy="96" r="32" fill="${c}"/><circle cx="24" cy="36" r="9" fill="#FF9600"/><circle cx="96" cy="36" r="9" fill="#FF9600"/>` },
    /* لنفوسیت با هسته بزرگ */
    lympho: { fy: 88, top: 38, body: c => `<circle cx="60" cy="90" r="52" fill="#A9C8F2"/><circle cx="60" cy="90" r="42" fill="${c}"/><ellipse cx="42" cy="68" rx="8" ry="12" transform="rotate(35 42 68)" fill="#fff" opacity=".3"/>` },
    /* لوله آزمایش */
    tube: { fy: 98, top: 14, body: c => `<rect x="30" y="8" width="60" height="16" rx="6" fill="#9AA9B1"/><path d="M34 24 H86 V112 a26 26 0 0 1 -52 0z" fill="#F4F7F8" stroke="#77868E" stroke-width="3"/><path d="M36 64 H84 V112 a24 24 0 0 1 -48 0z" fill="${c}"/><path d="M42 34 V58" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/>` },
    /* کپسول دارو */
    capsule: { fy: 96, top: 28, body: c => `<rect x="20" y="30" width="80" height="114" rx="40" fill="#fff" stroke="#d4d9dc" stroke-width="3"/><path d="M20 87 V70 a40 40 0 0 1 80 0 V87z" fill="${c}"/><path d="M34 60 a26 26 0 0 1 16 -18" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".6"/>` },
    drop: { fy: 90, top: 14, body: c => `<path d="M60 10 C60 10 14 64 14 96 a46 46 0 0 0 92 0 C106 64 60 10 60 10 Z" fill="${c}"/><ellipse cx="42" cy="58" rx="7" ry="13" transform="rotate(28 42 58)" fill="#fff" opacity=".4"/>` },
    heart: { fy: 72, top: 26, body: c => `<path d="M60 132 C20 104 10 80 10 62 C10 38 30 26 46 30 C54 32 58 38 60 44 C62 38 66 32 74 30 C90 26 110 38 110 62 C110 80 100 104 60 132Z" fill="${c}"/><ellipse cx="34" cy="50" rx="8" ry="11" transform="rotate(-30 34 50)" fill="#fff" opacity=".4"/>` },
    blob: { fy: 86, top: 30, body: c => `<path d="M60 30 C94 30 110 54 108 86 C106 118 88 134 60 134 C32 134 12 118 12 86 C10 54 26 30 60 30Z" fill="${c}"/><ellipse cx="38" cy="54" rx="8" ry="12" transform="rotate(30 38 54)" fill="#fff" opacity=".35"/>` },
    shield: { fy: 82, top: 26, body: c => `<path d="M60 26 L106 42 V80 C106 106 86 124 60 136 C34 124 14 106 14 80 V42Z" fill="${c}"/><path d="M60 26 L106 42 V80 C106 106 86 124 60 136Z" fill="#000" opacity=".1"/><path d="M60 38 L94 50 V80 C94 100 80 114 60 124" stroke="#fff" stroke-opacity=".35" stroke-width="4" fill="none"/>` },
    cloud: { fy: 94, top: 44, body: c => `<path d="M30 128 C8 128 4 100 22 92 C18 66 46 56 58 70 C64 46 100 46 102 76 C122 78 124 108 106 116 C104 126 96 128 90 128 Z" fill="${c}"/><path d="M30 128 C8 128 4 100 22 92 C24 108 40 118 90 128 Z" fill="#000" opacity=".07"/><ellipse cx="72" cy="62" rx="10" ry="5" transform="rotate(-10 72 62)" fill="#fff" opacity=".5"/>` },
    /* تخته یادداشت با گیره */
    clipboard: { fy: 78, top: 18, body: c => `<rect x="20" y="26" width="80" height="116" rx="12" fill="#A0673A"/><rect x="28" y="36" width="64" height="98" rx="6" fill="${c}"/><path d="M38 114 H82 M38 124 H68" stroke="#000" stroke-opacity=".14" stroke-width="4" stroke-linecap="round"/><rect x="42" y="16" width="36" height="20" rx="6" fill="#B7C2C8" stroke="#77868E" stroke-width="3"/>` },
    /* ترازو با صفحه عقربه‌ای */
    scale: { fy: 104, top: 24, body: c => `<rect x="10" y="46" width="100" height="94" rx="24" fill="${c}"/><rect x="10" y="46" width="100" height="94" rx="24" fill="#000" opacity=".06"/><circle cx="60" cy="50" r="25" fill="#fff" stroke="${c}" stroke-width="6"/><path d="M44 50 a16 16 0 0 1 32 0" stroke="#d4d9dc" stroke-width="3" fill="none"/><path d="M60 50 L71 38" stroke="#E5476B" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="50" r="4" fill="#3b1530"/>` },
    /* دستکش معاینه */
    glove: { fy: 100, top: 22, body: c => `<path d="M28 78 C28 60 30 50 38 50 C44 50 46 56 46 64 V38 C46 30 50 26 55 26 C60 26 63 30 63 38 V32 C63 24 67 20 72 20 C77 20 80 24 80 32 V42 C80 36 84 32 89 32 C95 32 98 36 98 44 V100 C98 124 84 138 62 138 C40 138 26 124 24 106 L12 84 C8 76 16 68 23 74 Z" fill="${c}"/><path d="M63 38 V60 M80 42 V62" stroke="#000" stroke-opacity=".1" stroke-width="3" stroke-linecap="round"/><rect x="34" y="132" width="54" height="12" rx="5" fill="#000" opacity=".15"/>` },
    flame: { fy: 102, top: 14, body: c => `<path d="M60 10 C76 38 106 58 106 96 C106 124 86 142 60 142 C34 142 14 124 14 96 C14 70 32 58 40 32 C48 48 52 54 56 56 C58 40 56 26 60 10Z" fill="${c}"/><path d="M60 64 C72 82 86 92 86 110 C86 128 74 138 60 138 C46 138 34 128 34 110 C34 96 48 86 60 64Z" fill="#FFD93D" opacity=".5"/>` },
    /* دماسنج با مخزن */
    thermo: { fy: 108, top: 12, body: c => `<rect x="38" y="10" width="44" height="96" rx="22" fill="#fff" stroke="${c}" stroke-width="6"/><rect x="54" y="38" width="12" height="70" rx="6" fill="#FF6B57"/><path d="M82 34 H72 M82 50 H72 M82 66 H72" stroke="${c}" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="110" r="33" fill="${c}"/><ellipse cx="46" cy="96" rx="6" ry="9" transform="rotate(30 46 96)" fill="#fff" opacity=".35"/>` },
    bone: { fy: 76, top: 10, body: c => `<path d="M38 42 C22 42 20 16 36 14 C42 2 58 8 60 20 C62 8 78 2 84 14 C100 16 98 42 82 42 V106 C98 106 100 132 84 134 C78 146 62 140 60 128 C58 140 42 146 36 134 C20 132 22 106 38 106 Z" fill="${c}" stroke="#D8C6AE" stroke-width="3"/>` },
    /* جمجمه خندان */
    skull: { fy: 82, top: 30, body: c => `<circle cx="60" cy="80" r="48" fill="${c}" stroke="#C9AE7C" stroke-width="2"/><rect x="34" y="108" width="52" height="34" rx="12" fill="${c}" stroke="#C9AE7C" stroke-width="2"/>${[42, 52, 62, 72].map(x => `<rect x="${x}" y="128" width="7" height="12" rx="2" fill="#fff" stroke="#C9AE7C"/>`).join('')}<path d="M56 112 l4 -8 l4 8z" fill="#8a6a3c"/><path d="M30 60 q10 -18 30 -22" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".6"/>` },
    /* مهره با زائده خاری و عرضی */
    vertebra: { fy: 100, top: 24, body: c => `<rect x="52" y="20" width="16" height="44" rx="7" fill="${c}" stroke="#3f6f9f" stroke-width="2"/><rect x="4" y="76" width="112" height="16" rx="8" fill="${c}" stroke="#3f6f9f" stroke-width="2"/><ellipse cx="60" cy="106" rx="46" ry="36" fill="${c}" stroke="#3f6f9f" stroke-width="2"/><ellipse cx="60" cy="72" rx="14" ry="9" fill="#f6d36a" stroke="#c99a1d" stroke-width="1.5"/><path d="M26 98 q8 -14 24 -16" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* فیلم رادیوگرافی با استخوان */
    xray: { fy: 96, top: 18, body: c => `<rect x="12" y="20" width="96" height="124" rx="12" fill="${c}"/><rect x="20" y="28" width="80" height="108" rx="8" fill="#16232f"/><path d="M84 36 l8 -4 l-2 8 M84 36 l-24 96" stroke="#dfe9f2" stroke-width="7" stroke-linecap="round" opacity=".55"/><path d="M58 128 l-8 6 l10 2" stroke="#dfe9f2" stroke-width="5" fill="none" opacity=".55"/><rect x="24" y="32" width="18" height="8" rx="2" fill="#fff" opacity=".5"/>` },
    /* یک جفت ریه با نای */
    lungs: { fy: 94, top: 18, body: c => `<rect x="54" y="8" width="12" height="40" rx="6" fill="#BFE0F2" stroke="#5E9FC4" stroke-width="1.5"/><path d="M57 50 C38 32 10 44 10 84 C10 118 16 140 36 142 C50 144 57 132 57 112Z" fill="${c}" stroke="#C9677F" stroke-width="2"/><path d="M63 50 C82 32 110 44 110 84 C110 118 104 140 84 142 C70 144 63 132 63 112Z" fill="${c}" stroke="#C9677F" stroke-width="2"/><path d="M20 76 C22 60 32 52 42 52" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>` },
    /* میکروفون: حنجره و صدا */
    mic: { fy: 70, top: 16, body: c => `<rect x="52" y="112" width="16" height="26" rx="5" fill="#77868E"/><rect x="34" y="134" width="52" height="10" rx="5" fill="#9AA9B1"/><path d="M28 74 C28 104 92 104 92 74" stroke="#77868E" stroke-width="5" fill="none"/><rect x="26" y="16" width="68" height="96" rx="34" fill="${c}"/>${[34, 46, 58].map(y => `<path d="M34 ${y} h52" stroke="#fff" stroke-width="2" opacity=".35"/>`).join('')}<path d="M38 40 q4 -14 16 -18" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* وزنه کتل‌بل */
    kettle: { fy: 98, top: 22, body: c => `<path d="M36 54 C30 20 90 20 84 54" stroke="${c}" stroke-width="13" fill="none" stroke-linecap="round"/><path d="M36 54 C30 20 90 20 84 54" stroke="#000" stroke-opacity=".18" stroke-width="13" fill="none" stroke-linecap="round"/><circle cx="60" cy="96" r="46" fill="${c}"/><ellipse cx="38" cy="76" rx="8" ry="12" transform="rotate(30 38 76)" fill="#fff" opacity=".35"/>` },
    tooth: { fy: 68, top: 22, body: c => `<path d="M22 48 C22 24 44 18 60 28 C76 18 98 24 98 48 C98 72 92 86 90 106 C88 130 82 142 75 142 C66 142 66 118 60 118 C54 118 54 142 45 142 C38 142 32 130 30 106 C28 86 22 72 22 48Z" fill="${c}" stroke="#E2D2B8" stroke-width="3"/><ellipse cx="38" cy="44" rx="6" ry="10" transform="rotate(25 38 44)" fill="#fff" opacity=".8"/>` },
    carrot: { fy: 68, top: 34, body: c => `<path d="M18 46 C38 32 82 32 102 46 C100 82 76 122 63 144 C60 148 57 148 55 144 C42 122 20 82 18 46Z" fill="${c}"/><path d="M36 82 h12 M72 96 h10 M50 116 h9" stroke="#000" stroke-opacity=".15" stroke-width="3" stroke-linecap="round"/>` },
    /* دینامومتر دستی با صفحه */
    dyna: { fy: 64, top: 16, body: c => `<rect x="44" y="96" width="32" height="48" rx="10" fill="#77868E"/><rect x="30" y="110" width="60" height="11" rx="5" fill="#B7C2C8"/><circle cx="60" cy="62" r="48" fill="${c}"/><circle cx="60" cy="62" r="38" fill="#fff"/><path d="M60 26 v6 M94 62 h-6 M26 62 h6 M84 38 l-4 4 M36 38 l4 4" stroke="#9AA9B1" stroke-width="3" stroke-linecap="round"/>` }
  };

  /* ---------- لوازم ---------- */
  const BEHIND = {
    cape: () => `<path d="M24 72 Q6 124 16 146 L104 146 Q114 124 96 72 Z" fill="#1F9E8F"/><path d="M60 80 L60 146" stroke="#137568" stroke-width="3"/>`,
    halo: (s) => `<ellipse cx="60" cy="${s.top - 16}" rx="26" ry="7" fill="none" stroke="#FFC800" stroke-width="5"/>`
  };
  const FRONT = {
    sparkle: () => ['M18 36 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z', 'M102 110 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z', 'M14 126 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z'].map(d => `<path d="${d}" fill="#FFC800"/>`).join(''),
    headband: s => `<path d="M20 ${s.fy - 22} Q60 ${s.fy - 38} 100 ${s.fy - 22}" stroke="#FF6B57" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M100 ${s.fy - 22} q10 4 14 14 M100 ${s.fy - 22} q12 -2 18 6" stroke="#FF6B57" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    crown: s => { const y = s.top + 6; return `<path d="M38 ${y} L38 ${y - 18} L49 ${y - 8} L60 ${y - 26} L71 ${y - 8} L82 ${y - 18} L82 ${y} Z" fill="#FFC800" stroke="#E5A500" stroke-width="3" stroke-linejoin="round"/><circle cx="60" cy="${y - 7}" r="4" fill="#E8455A"/>`; },
    glasses: s => `<g stroke="#3b1f0e" stroke-width="3.5" fill="#fff" fill-opacity=".25"><circle cx="46" cy="${s.fy}" r="13"/><circle cx="74" cy="${s.fy}" r="13"/></g><path d="M59 ${s.fy} h2" stroke="#3b1f0e" stroke-width="3.5"/>`,
    helmet: s => `<path d="M28 ${s.top + 22} Q60 ${s.top - 22} 92 ${s.top + 22} Z" fill="#9AA9B1" stroke="#77868E" stroke-width="3"/><path d="M60 ${s.top - 2} q-4 -22 14 -28" stroke="#E8455A" stroke-width="8" fill="none" stroke-linecap="round"/>`,
    wizard: s => { const y = s.top + 26; return `<path d="M60 ${y - 60} L92 ${y} H28 Z" fill="#4B2FA0"/><ellipse cx="60" cy="${y}" rx="40" ry="8" fill="#3A2380"/><path d="M58 ${y - 34} l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z M70 ${y - 16} l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5z" fill="#FFC800"/><line x1="100" y1="132" x2="114" y2="96" stroke="#8B5A2B" stroke-width="5" stroke-linecap="round"/><path d="M114 84 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="#FFC800"/>`; },
    antenna: s => `<path d="M46 ${s.top + 6} q-6 -18 -16 -22" stroke="#CC7800" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="29" cy="${s.top - 17}" r="6" fill="#58CC02"/><path d="M74 ${s.top + 6} q6 -18 16 -22" stroke="#CC7800" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="91" cy="${s.top - 17}" r="6" fill="#58CC02"/>`,
    stem: () => `<path d="M60 50 q2 -12 10 -16" stroke="#6b4a12" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M68 36 q14 -10 24 -2 q-12 8 -24 2z" fill="#58CC02"/>`,
    leaves: () => `<path d="M57 38 q-16 -18 -8 -30 q12 10 8 30z M63 38 q2 -24 16 -30 q2 16 -16 30z M60 38 q-3 -26 1 -36 q7 14 -1 36z" fill="#58CC02"/>`,
    pacifier: s => `<rect x="46" y="${s.fy + 14}" width="28" height="12" rx="6" fill="#8FA0FF"/><circle cx="60" cy="${s.fy + 20}" r="7" fill="#5B6CF0" stroke="#fff" stroke-width="2"/>`
  };

  /* ---------- چهره ---------- */
  function face(m, cx, cy) {
    const ink = '#3b1f0e';
    const eyes = m === 'cheer'
      ? `<path d="M${cx - 21} ${cy + 2} Q${cx - 14} ${cy - 8} ${cx - 7} ${cy + 2}" stroke="${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M${cx + 7} ${cy + 2} Q${cx + 14} ${cy - 8} ${cx + 21} ${cy + 2}" stroke="${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`
      : `<g class="yona-eyes"><ellipse cx="${cx - 14}" cy="${cy}" rx="8" ry="10" fill="#fff"/><ellipse cx="${cx + 14}" cy="${cy}" rx="8" ry="10" fill="#fff"/><circle cx="${cx - 13}" cy="${cy + (m === 'think' ? -3 : 2)}" r="4.5" fill="#1d1d1d"/><circle cx="${cx + 15}" cy="${cy + (m === 'think' ? -3 : 2)}" r="4.5" fill="#1d1d1d"/><circle cx="${cx - 11}" cy="${cy - 1}" r="1.6" fill="#fff"/><circle cx="${cx + 17}" cy="${cy - 1}" r="1.6" fill="#fff"/></g>`;
    const my = cy + 18;
    const mouth = {
      happy: `<path d="M${cx - 12} ${my} Q${cx} ${my + 12} ${cx + 12} ${my}" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      cheer: `<path d="M${cx - 14} ${my - 2} Q${cx} ${my + 20} ${cx + 14} ${my - 2} Z" fill="${ink}"/><path d="M${cx - 7} ${my + 7} Q${cx} ${my + 12} ${cx + 7} ${my + 7}" fill="#ff7a9a"/>`,
      sad: `<path d="M${cx - 11} ${my + 8} Q${cx} ${my - 2} ${cx + 11} ${my + 8}" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      wow: `<ellipse cx="${cx}" cy="${my + 3}" rx="6" ry="8" fill="${ink}"/>`,
      think: `<path d="M${cx - 10} ${my + 4} L${cx + 10} ${my + 1}" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>`
    }[m] || '';
    const blush = `<ellipse cx="${cx - 26}" cy="${cy + 14}" rx="6" ry="3.5" fill="#ff7a9a" opacity=".5"/><ellipse cx="${cx + 26}" cy="${cy + 14}" rx="6" ry="3.5" fill="#ff7a9a" opacity=".5"/>`;
    return eyes + blush + mouth;
  }

  const FACE_X = {};
  function draw(c, mood, size, locked) {
    const s = SHAPES[c.shape];
    const m = mood || 'happy';
    const behind = c.acc.filter(a => BEHIND[a]).map(a => BEHIND[a](s)).join('');
    const rest = c.acc.filter(a => FRONT[a]).map(a => FRONT[a](s)).join('');
    const sz = size || 120;
    return `<svg class="char yona--${m}${locked ? ' char--locked' : ''}" viewBox="0 0 120 150" width="${sz}" height="${sz * 1.25}" aria-hidden="true">
      <ellipse cx="60" cy="146" rx="32" ry="4" fill="currentColor" opacity=".12"/>
      <g class="yona-body">${behind}${s.body(c.color)}${face(m, FACE_X[c.shape] || 60, s.fy)}${rest}</g>
    </svg>`;
  }

  /* ---------- پیشرفت ---------- */
  const per = () => EA.PER_LEVEL || 3;
  function levelLessons(w, lv) { return w.lessons.slice(lv * per(), lv * per() + per()); }
  function levelDone(w, lv, s) { const ls = levelLessons(w, lv); return ls.length > 0 && ls.every(l => s.done[l.id]); }
  function levelOfLesson(w, lid) { return Math.floor(w.lessons.findIndex(l => l.id === lid) / per()); }
  /** کاراکترهایی که تازه باز شده‌اند را ثبت می‌کند و برمی‌گرداند */
  function check(s) {
    s.chars = s.chars || {};
    const got = [];
    CHARS.forEach(c => {
      const w = EA.worlds.find(x => x.id === c.w);
      if (!s.chars[c.id] && w && levelDone(w, c.lv, s)) { s.chars[c.id] = Date.now(); got.push(c); }
    });
    return got;
  }
  const byId = id => CHARS.find(c => c.id === id);
  const forLevel = (wid, lv) => CHARS.find(c => c.w === wid && c.lv === lv);

  EA.chars = { list: CHARS, draw, byId, forLevel, check, levelDone, levelLessons, levelOfLesson };
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* نَفَس — راند بالینی: پرونده‌های چندمرحله‌ای
 * کیس‌ها از مطالعات موردی و تمرین‌های فایل‌های پیوست آمده‌اند: Pearson ER Record (Chart Note Transcription)، Pulmonology Consultation Report،
 * Case Study آلیسون (Preoperative Respiratory Testing)، Case Study 12-1 (Giant Cell Sarcoma)، Case Study 12-2 (Terminal Dyspnea)،
 * Gylys Chart Note (nasal polyps)، Exercise 12-9، Case Study خانم ۸۸ ساله با پنومونی، و سناریوهای APPLY (Boyle، Lamborn، Fritzringer،
 * Henshaw، Lopane، Phillips، Susan Jones و یادداشت COPD).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان تنفس ================= */
    {
      id: 'r1', w: 'lx', title: 'ثبت اورژانس بیمارستان پیرسون', who: 'خانم ۴۳ ساله',
      brief: 'خانواده‌اش او را به اورژانس آورده‌اند. از تنفس دردناک و دشوار، تنفس سریع و تب شکایت دارد. آزمایش اکسیژن خون، سطح بسیار پایین اکسیژن را نشان می‌دهد. با گوش دادن به ریه‌ها صدای ترق‌تروق در پایین قفسه سینه چپ شنیده می‌شود. خلط چرکی فراوان دارد و عکس قفسه سینه لکه کدر بزرگی در لوب تحتانی ریه چپ نشان داده است. باید هر عبارت را با واژه پزشکی بنویسی.',
      chart: [['۱', 'تنفس دردناک و دشوار'], ['۲', 'تنفس سریع'], ['۳', 'آزمایش اکسیژن خون'], ['۴', 'صدای ترق‌تروق ریه'], ['۵', 'خلط چرکی']],
      fig: { a: 'lung-sounds', l: [] },
      steps: [
        M('واژه', '«تنفس دشوار» با کدام واژه نوشته می‌شود؟', ['dyspnea', 'eupnea', 'apnea', 'orthopnea'], 'dys- + -pnea.'),
        M('واژه', '«تنفس سریع» چیست؟', ['tachypnea', 'bradypnea', 'hyperventilation', 'hypopnea'], 'tachy- = تند.'),
        P('واژه', 'هر عبارت را به واژه پزشکی‌اش وصل کن', [['آزمایش اکسیژن خون', 'ABGs'], ['اکسیژن کم در خون', 'hypoxemia'], ['گوش دادن به صداهای بدن', 'auscultation'], ['صدای ترق‌تروق', 'rales (crackles)']], 'Chart Note Transcription.'),
        M('واژه', '«خلط چرکی» یعنی…', ['purulent sputum', 'hemoptysis', 'mucus', 'rhinorrhea'], 'purulent = چرکی؛ sputum = خلط.'),
        M('تشخیص', 'التهاب ریه از عفونت باکتریایی در لوب تحتانی چپ چه نام دارد؟', ['LLL pneumonia', 'RUL pneumonia', 'LLL atelectasis', 'pleurisy'], 'left lower lobe pneumonia.', null, { a: ['pneumonia'], l: [] }),
        S('املا', 'املای «لوله‌گذاری» (گذاشتن لوله در نای) را بنویس', 'intubation', 'endotracheal intubation.', 'intu…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: 'سرفه کارگر معدن', who: 'آقای Adam Boyle، ۴۱ ساله',
      brief: 'آقای Boyle بیست سال است در معدن زغال سنگ کار می‌کند و گاهی در ساختمان‌های قدیمی هم بنایی کرده است. با سرفه مداوم آمده و از سرفه کردن خون شکایت دارد. آبریزش بینی و خون‌دماغ را انکار می‌کند. باید شرح حالش را با واژه‌های پزشکی بنویسی.',
      chart: [['شغل', 'coal mining, 20 years'], ['CC', 'persistent cough, coughing up blood'], ['Denies', 'runny nose, nosebleed']],
      fig: { a: 'root-map', l: [] },
      steps: [
        M('واژه', '«سرفه کردن خون» چیست؟', ['hemoptysis', 'epistaxis', 'hematemesis', 'rhinorrhea'], 'hem/o + -ptysis.'),
        P('واژه', 'هر عبارت را به واژه‌اش وصل کن', [['آبریزش بینی', 'rhinorrhea'], ['خون‌دماغ', 'epistaxis'], ['سرفه خون', 'hemoptysis'], ['تنگی نفس', 'dyspnea']], 'واژه‌های پایه.'),
        M('خطر', 'کار طولانی در معدن زغال سنگ خطر کدام بیماری را بالا می‌برد؟', ['anthracosis', 'asthma', 'cystic fibrosis', 'croup'], 'anthrac/o = زغال؛ black lung.'),
        M('خطر', 'کار در ساختمان‌های قدیمی ممکن است او را در معرض کدام ماده قرار داده باشد؟', ['آزبست (asbestosis)', 'سیلیس دریایی', 'گرده گل', 'کلر'], 'asbestos در عایق‌های قدیمی.'),
        M('آزمون', 'کدام آزمون اولیه برای سرفه خونی منطقی است؟', ['CXR و کشت خلط', 'sweat test', 'polysomnography', 'throat culture'], 'عکس قفسه سینه و بررسی خلط.'),
        S('املا', 'املای «خلط خونی» را بنویس', 'hemoptysis', 'hem/o + -ptysis.', 'hemop…')
      ]
    },
    /* ================= تنفس فوقانی ================= */
    {
      id: 'r3', w: 'up', title: 'پولیپ‌های بینی', who: 'مرد ۴۵ ساله',
      brief: 'دو سال پیش به خاطر انسداد راه هوایی فوقانی از پولیپ‌های بزرگ حفره بینی راست مراجعه کرد. توده پولیپی بزرگی بیشتر حفره بینی راست را پر کرده بود. با snare بینی polypectomy شد. پاتولوژی رشد بینی را کارسینوم پاپیلاری کم‌درجه گزارش کرد و غده لنفاوی زیر فک، کارسینوم متاستاتیک بود. عکس قفسه سینه تراکم‌های ریوی ناشی از پنومونی برطرف‌نشده را نشان داد. بیمار پس از ترخیص در خانه فوت کرد و کالبدگشایی انجام نشد.',
      chart: [['CC', 'upper airway obstruction'], ['Op', 'polypectomy with nasal snare'], ['Path', 'low-grade papillary carcinoma; metastatic node'], ['CXR', 'pulmonary densities, unresolved pneumonia']],
      fig: { a: 'upper-airway', l: [] },
      steps: [
        M('جراحی', 'polypectomy یعنی…', ['برداشتن پولیپ', 'التهاب پولیپ', 'ترمیم بینی', 'دیدن بینی'], 'polyp/o + -ectomy.'),
        M('جا', 'nasal cavity یعنی…', ['حفره بینی', 'سینوس پیشانی', 'حلق بینی', 'سوراخ بینی'], 'nas/o + cavity.'),
        M('پاتولوژی', 'metastatic carcinoma در غده لنفاوی یعنی…', ['سرطان از جای دیگر به غده رسیده', 'غده التهاب دارد', 'تومور خوش‌خیم است', 'غده طبیعی است'], 'metastasis = انتشار.'),
        M('ریه', 'pulmonary densities یعنی…', ['لکه‌های متراکم در ریه', 'هوا در جنب', 'حجم ریه زیاد', 'آلوئول‌های سالم'], 'pulmon/o = ریه.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['hemorrhage', 'خونریزی'], ['expired', 'فوت کرد'], ['necropsy', 'کالبدگشایی'], ['submaxillary', 'زیر فک بالا']], 'Chart note analysis.'),
        S('املا', 'املای «پولیپ‌برداری» را بنویس', 'polypectomy', 'polyp/o + -ectomy.', 'polyp…')
      ]
    },
    {
      id: 'r4', w: 'up', title: 'گلودرد و خروپف Jack', who: 'Jack Lamborn، پسر ۷ ساله',
      brief: 'مادر Jack می‌گوید پسرش بارها «گلودرد» داشته، بلعیدنش دشوار و دردناک است و شب‌ها خروپف شدید می‌کند. پزشک به آن‌ها می‌گوید Jack سینوزیت، التهاب لوزه و التهاب ریه دارد.',
      chart: [['Hx', 'recurrent sore throats, painful swallowing, snoring'], ['Dx', 'sinusitis, tonsillitis, pneumonitis']],
      fig: { a: 'upper-airway', l: [] },
      steps: [
        M('واژه', '«گلودرد» یا التهاب حلق چیست؟', ['pharyngitis', 'laryngitis', 'rhinitis', 'bronchitis'], 'pharyng/o + -itis.'),
        P('تشخیص', 'هر تشخیص را به معنی‌اش وصل کن', [['sinusitis', 'التهاب سینوس'], ['tonsillitis', 'التهاب لوزه'], ['pneumonitis', 'التهاب ریه'], ['adenoiditis', 'التهاب آدنوئید']], 'تشخیص‌های Jack.'),
        M('خواب', 'خروپف شدید با قطع‌های تنفسی در خواب نشانه چیست؟', ['obstructive sleep apnea', 'asthma', 'croup', 'pertussis'], 'OSA؛ لوزه و آدنوئید بزرگ.'),
        M('درمان', 'اگر لوزه‌ها بارها عفونت کنند، کدام جراحی مطرح است؟', ['tonsillectomy', 'laryngectomy', 'lobectomy', 'tracheotomy'], 'tonsill/o + -ectomy.'),
        M('متخصص', 'کدام متخصص Jack را جراحی می‌کند؟', ['ENT (otorhinolaryngologist)', 'pulmonologist', 'cardiologist', 'dermatologist'], 'گوش، حلق و بینی.'),
        S('املا', 'املای «التهاب لوزه» را بنویس', 'tonsillitis', 'tonsill/o + -itis.', 'tonsil…')
      ]
    },
    /* ================= تنفس تحتانی ================= */
    {
      id: 'r5', w: 'lo', title: 'سارکوم سلول غول‌آسای ریه', who: 'Morgan، مرد ۶۸ ساله',
      brief: 'Morgan با درد سینه هنگام دم، تنگی نفس و تعریق شدید بستری شده است. ۵۲ سال روزی یک و نیم پاکت سیگار کشیده و ۳ ماه است ترک کرده. سه سال پیش برای سارکوم سلول غول‌آسای ریه چپ lobectomy، پرتودرمانی و شیمی‌درمانی شد. در معاینه جای thoracotomy در hemithorax چپ، کاهش صداهای تنفسی و کدری به دق در قاعده چپ دارد. CT عود سارکوم و غدد غیرطبیعی میان‌سینه را نشان داد.',
      chart: [['CC', 'chest pain on inspiration, dyspnea, diaphoresis'], ['Hx', 'L lobectomy, radiation, chemotherapy'], ['PE', 'L thoracotomy scar; dullness at L base'], ['Plan', 'thoracoscopy, mediastinoscopy, biopsy']],
      fig: { a: 'xray-lung-cancer', l: ['تومور ریه'] },
      steps: [
        M('ریشه', 'ریشه pulmon در pulmonary یعنی…', ['ریه', 'قفسه سینه', 'هوا', 'صدای تنفس'], 'pulmon/o = lung.'),
        P('واژه', 'هر عبارت را به واژه‌اش وصل کن', [['برداشتن لوب', 'lobectomy'], ['تعریق شدید', 'diaphoresis'], ['برش قفسه سینه', 'thoracotomy'], ['نیمه قفسه سینه', 'hemithorax']], 'Case Study 12-1.'),
        M('روش', 'thoracoscopy یعنی…', ['دیدن درون قفسه سینه با ابزار', 'کشیدن مایع جنب', 'برش نای', 'عکس قفسه سینه'], 'thorac/o + -scopy.'),
        M('روش', 'mediastinoscopy برای دیدن کدام فضاست؟', ['فضای بین دو ریه', 'فضای جنب', 'حنجره', 'سینوس‌ها'], 'mediastinum.'),
        T('نشانه', 'Morgan هموپتزی نداشت؛ یعنی خون سرفه نمی‌کرد.', true, 'There was no hemoptysis.'),
        S('املا', 'املای «توراکوتومی» را بنویس', 'thoracotomy', 'thorac/o + -tomy.', 'thoraco…')
      ]
    },
    {
      id: 'r6', w: 'lo', title: 'نگرانی آقای Fritzringer', who: 'آقای Rick Fritzringer، ۵۵ ساله',
      brief: 'آقای Fritzringer تومور ریه دارد و ۴۰ سال روزی یک پاکت سیگار کشیده است. جراح می‌خواهد lobectomy انجام دهد و از تو می‌خواهد آن را برای بیمار توضیح دهی. بیمار نگران است که فقط یک ریه برایش بماند و نتواند اکسیژن کافی بگیرد.',
      chart: [['Dx', 'lung tumor'], ['Hx', '40 pack-years'], ['Plan', 'lobectomy']],
      fig: { a: 'lung-lobes', l: [] },
      steps: [
        M('جراحی', 'lobectomy یعنی…', ['برداشتن یک لوب ریه', 'برداشتن کل ریه', 'برش قفسه سینه', 'برداشتن پرده جنب'], 'lob/o + -ectomy.'),
        M('آناتومی', 'ریه راست چند لوب دارد؟', ['سه', 'دو', 'یک', 'چهار'], 'RUL، RML، RLL.'),
        T('توضیح', 'پس از lobectomy بیمار هنوز دو ریه دارد.', true, 'فقط یک لوب برداشته می‌شود؛ pneumonectomy کل ریه است.'),
        M('توضیح', 'به زبان ساده lobectomy چیست؟', ['برداشتن بخشی از ریه که تومور دارد', 'برداشتن هر دو ریه', 'گذاشتن لوله در نای', 'کشیدن مایع از اطراف ریه'], 'lay terms.'),
        P('واژه', 'هر جراحی را به معنی‌اش وصل کن', [['lobectomy', 'برداشتن یک لوب'], ['pneumonectomy', 'برداشتن کل ریه'], ['thoracotomy', 'برش قفسه سینه'], ['thoracostomy', 'لوله سینه']], 'جراحی‌های ریه.'),
        S('املا', 'املای «برداشتن کل ریه» را بنویس', 'pneumonectomy', 'pneumon/o + -ectomy.', 'pneumo…')
      ]
    },
    {
      id: 'r7', w: 'lo', title: 'نفسی که بالا نمی‌آید', who: 'خانم Melony Henshaw، ۸۳ ساله',
      brief: 'خانم Henshaw با تنگی نفس مداوم («نمی‌توانم نفس بگیرم»)، ضعف و خستگی رو به افزایش آمده است. سابقه thoracotomy و lobectomy دارد. پزشک او را به متخصص ریه ارجاع می‌دهد.',
      chart: [['CC', 'continuous SOB, weakness, fatigue'], ['Hx', 'thoracotomy, lobectomy'], ['Referral', 'pulmonologist']],
      fig: { a: 'spirogram', l: [] },
      steps: [
        M('اختصار', 'SOB یعنی…', ['تنگی نفس', 'سمع پاک', 'سرفه خشک', 'تنفس طبیعی'], 'shortness of breath.'),
        M('متخصص', 'pulmonologist کیست؟', ['متخصص ریه', 'متخصص قلب', 'جراح عمومی', 'متخصص گوش و حلق و بینی'], 'pulmon/o + -logist.'),
        M('آزمون', 'کدام آزمون‌ها برای بررسی تنگی نفس او منطقی است؟', ['PFT، ABGs و CXR', 'sweat test و PPD', 'throat culture', 'polysomnography فقط'], 'عملکرد ریه، گاز خون و عکس.'),
        T('سابقه', 'thoracotomy یعنی برش قفسه سینه.', true, 'thorac/o + -tomy.'),
        P('حجم', 'هر اختصار اسپیرومتری را به معنی‌اش وصل کن', [['VC', 'ظرفیت حیاتی'], ['FEV1', 'حجم ثانیه اول'], ['TLC', 'ظرفیت کل ریه'], ['RV', 'حجم باقیمانده']], 'PFT.'),
        S('املا', 'املای «تنگی نفس» را بنویس', 'dyspnea', 'dys- + -pnea.', 'dysp…')
      ]
    },
    /* ================= تهویه و نشانه‌ها ================= */
    {
      id: 'r8', w: 'br', title: 'ارزیابی تنفسی خانم Lopane', who: 'Ms. Michelle Lopane، ۳۵ ساله',
      brief: 'خانم Lopane به مرکز فوریت‌ها آمده؛ نفسش آن‌قدر تنگ است که نمی‌تواند چند کلمه پشت هم بگوید. پرستار در ارزیابی تنفسی می‌نویسد: صدای سوت‌مانند هنگام دم، صدای ترق‌تروق در سراسر ریه‌ها، و تنفس تند و سطحی.',
      chart: [['۱', 'whistling sound on inspiration'], ['۲', 'popping sound throughout lungs'], ['۳', 'fast, shallow breathing']],
      fig: { a: 'lung-sounds', l: [] },
      steps: [
        M('صدا', 'صدای خشن و سوت‌مانند هنگام دم از انسداد راه فوقانی چیست؟', ['stridor', 'rhonchi', 'pleural rub', 'rales'], 'inspiratory high-pitched sound.'),
        M('صدا', 'صدای ترق‌تروق ریه چه نام دارد؟', ['rales (crackles)', 'wheeze', 'stridor', 'rhonchi'], 'popping/crackling.'),
        P('الگو', 'هر توصیف را به واژه‌اش وصل کن', [['تنفس تند', 'tachypnea'], ['تنفس سطحی', 'hypopnea'], ['تنفس دشوار', 'dyspnea'], ['قطع تنفس', 'apnea']], 'الگوهای تنفس.'),
        M('روش', 'این صداها با کدام روش شنیده می‌شوند؟', ['auscultation', 'percussion', 'palpation', 'spirometry'], 'سمع با گوشی.'),
        T('اورژانس', 'ناتوانی در گفتن جمله کامل نشانه تنگی نفس شدید است.', true, 'severe dyspnea.'),
        S('املا', 'املای «استریدور» را بنویس', 'stridor', 'صدای خشن دم.', 'stri…')
      ]
    },
    {
      id: 'r9', w: 'br', title: 'پنومونی خانم ۸۸ ساله', who: 'خانم ۸۸ ساله',
      brief: 'با تنگی نفس، سرگیجه، ارتوپنه، تب و سرفه به مطب آمده است. سمع ریه کراکل روی نایژه راست نشان داد و CXR مایع در RUL. با تشخیص پنومونی بستری شد. علائم حیاتی: دما ۱۰۲ فارنهایت، نبض ۱۰۰ و سریع، تنفس ۲۴ و دشوار، فشار ۱۸۰/۱۱۰. با آنتی‌بیوتیک IV و IPPB درمان شد و روز سوم با آنتی‌بیوتیک خوراکی مرخص شد.',
      chart: [['CC', 'dyspnea, dizziness, orthopnea, fever, cough'], ['CXR', 'fluid in RUL'], ['VS', 'T 102°F, P 100, R 24 labored, BP 180/110'], ['Tx', 'IV antibiotics, IPPB']],
      fig: { a: 'lung-lobes', l: [] },
      steps: [
        M('نشانه', 'orthopnea یعنی…', ['تنگی نفس در حالت خوابیده', 'تنفس تند', 'سرفه خلط‌دار', 'تنفس طبیعی'], 'orth/o + -pnea.'),
        M('لوب', 'RUL یعنی…', ['لوب فوقانی ریه راست', 'لوب تحتانی ریه راست', 'لوب فوقانی ریه چپ', 'لوب میانی راست'], 'right upper lobe.'),
        M('علائم حیاتی', 'تنفس ۲۴ بار در دقیقه یعنی…', ['tachypnea', 'eupnea', 'bradypnea', 'apnea'], 'بیش از ۲۰.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['auscultation', 'سمع'], ['crackles', 'کراکل'], ['IPPB', 'تنفس با فشار مثبت متناوب'], ['CXR', 'عکس قفسه سینه']], 'یک کیس بالینی.'),
        T('علائم حیاتی', 'VS یعنی علائم حیاتی: دما، نبض، تنفس و فشار خون.', true, 'vital signs.'),
        S('املا', 'املای «پنومونی» را بنویس', 'pneumonia', 'pneumon/o + -ia.', 'pneu…')
      ]
    },
    {
      id: 'r10', w: 'br', title: 'سرفه خشک و تب سه‌روزه', who: 'خانم ۳۰ ساله',
      brief: 'از سرفه خشک، تنگی نفس و تب سه‌روزه شکایت دارد؛ سیگاری نیست و پیش‌تر سالم بوده. معاینه: دما ۱۰۲ فارنهایت، فشار ۱۰۴/۶۵، تنفس ۲۶، نبض ۱۰۸. تنفس تند با سیانوز خفیف و کراکل دمی دارد. WBC بالاست، CXR ارتشاح منتشر در قاعده هر دو ریه نشان داد و ABG در هوای اتاق اکسیژن پایین داشت. تشخیص: پنومونی با علت نامعلوم. برنامه: ICU، آنتی‌بیوتیک و اکسیژن با ماسک.',
      chart: [['c/o', 'nonproductive cough, dyspnea, fever × 3 days'], ['PE', 'T 102°F, R 26, P 108; mild cyanosis; inspiratory rales'], ['CXR', 'diffuse infiltrates, both bases'], ['ABG', 'low O2 on room air']],
      fig: { a: 'cyanosis', l: [] },
      steps: [
        M('معاینه', 'یافته‌های معاینه کدام است؟', ['تنفس تند، کبودی و کراکل هنگام دم', 'تنفس کند، کبودی و رونکای هنگام بازدم', 'ضربان تند و خس‌خس', 'تنفس طبیعی'], 'Exercise 12-9.'),
        M('شکایت', 'شکایت اصلی بیمار چیست؟', ['سرفه خشک، تنگی نفس و تب', 'سرفه خلط‌دار و تنفس تند', 'گلودرد و صدای گرفته', 'خلط خونی'], 'nonproductive cough + dyspnea + fever.'),
        M('اختصار', 'c/o یعنی…', ['شکایت دارد از', 'به همراه', 'در صورت نیاز', 'سرفه'], 'complains of.'),
        M('گاز خون', 'ABG «on room air» یعنی…', ['هنگام تنفس هوای اتاق، بدون اکسیژن کمکی', 'با ونتیلاتور', 'با کانولای بینی', 'پس از ورزش'], 'RA.'),
        T('تشخیص', 'etiology یعنی علت بیماری.', true, 'unknown etiology = علت نامعلوم.'),
        S('املا', 'املای «کبودی» را بنویس', 'cyanosis', 'cyan/o + -osis.', 'cyan…')
      ]
    },
    /* ================= بیماری‌ها ================= */
    {
      id: 'r11', w: 'ds', title: 'آسم رو به شدت', who: 'پسر ۱۰ ساله',
      brief: 'از ۷ سالگی با تنگی نفس، سرفه و خس‌خس به اورژانس می‌آید و حمله‌ها بیشتر شده‌اند. حالا در اورژانس تنگی نفس شدید، کبودی دور لب، بازدم طولانی و سرفه با بلغم غلیظ دارد. سمع: رونکای در سراسر ریه‌ها. ABG هیپوکسمی و اسپیرومتری انسداد متوسط تا شدید راه هوایی در بازدم نشان داد. با Proventil بهتر شد.',
      chart: [['Reason', 'increasingly severe asthma'], ['PE', 'dyspnea, cyanosis around lips, rhonchi'], ['ABGs', 'hypoxemia'], ['Spirometry', 'moderately severe obstruction']],
      fig: { a: 'asthma-airway', l: [] },
      steps: [
        P('واژه', 'هر واژه گزارش را به معنی‌اش وصل کن', [['dyspnea', 'تنگی نفس'], ['cyanosis', 'کبودی'], ['phlegm', 'بلغم'], ['rhonchi', 'خرخر بم']], 'Pulmonology Consultation Report.'),
        M('آزمون', 'ABGs در این بیمار چه نشان داد؟', ['hypoxemia', 'hypercapnia فقط', 'طبیعی', 'anemia'], 'کمبود اکسیژن خون.'),
        M('اسپیرومتری', 'انسداد هنگام بازدم یعنی FEV1/FVC…', ['کم است', 'زیاد است', 'طبیعی است', 'صفر است'], 'الگوی انسدادی.'),
        M('دارو', 'Proventil برای رفع چه چیزی است؟', ['bronchospasm', 'تب', 'عفونت', 'آلرژی پوستی'], 'bronchodilator.'),
        T('سمع', 'auscultation یعنی گوش دادن به ریه‌ها با گوشی.', true, 'Auscultation revealed rhonchi.'),
        S('املا', 'املای «اسپاسم نایژه» را بنویس', 'bronchospasm', 'bronch/o + -spasm.', 'broncho…')
      ]
    },
    {
      id: 'r12', w: 'ds', title: 'آزمون تنفسی پیش از جراحی آلیسون', who: 'آلیسون، دختر ۱۳ ساله',
      brief: 'آلیسون برای جراحی اسکولیوز آماده می‌شود. از ۴ سالگی آسم خفیف دارد و هفته‌ای دست‌کم یک حمله. برای مجوز تنفسی به متخصص ریه فرستاده شد. اسپیرومتری پیش از bronchodilator کاهش خفیف VC و کاهش متوسط تا شدید FEV1 و FEV1/FVC نشان داد. پس از دارو FEV1 کمی بهتر شد و ۵۵٪ مقدار پیش‌بینی‌شده بود. منحنی‌ها با انسداد جریان هوا هم‌خوان بودند.',
      chart: [['Hx', 'mild asthma since age 4'], ['Pre-BD', '↓VC (mild), ↓↓FEV1, ↓FEV1/FVC'], ['Post-BD FEV1', '55% predicted'], ['Plan', 'optimize airflow before OR']],
      fig: { a: 'spirometry', l: [] },
      steps: [
        M('ابزار', 'دستگاهی که حجم‌های تنفسی آلیسون را اندازه گرفت چیست؟', ['spirometer', 'oximeter', 'bronchoscope', 'stethoscope'], 'spir/o + -meter.'),
        M('دارو', 'bronchodilator چه می‌کند؟', ['نایژه‌ها را گشاد می‌کند', 'خلط را رقیق می‌کند', 'سرفه را قطع می‌کند', 'عفونت را می‌کشد'], 'باز کردن راه هوایی.'),
        M('الگو', 'کاهش FEV1/FVC در آلیسون یعنی…', ['الگوی انسدادی', 'الگوی تحدیدی', 'ریه طبیعی', 'فیبروز ریه'], 'airflow obstruction.'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['VC', 'ظرفیت حیاتی'], ['FEV1', 'حجم ثانیه اول'], ['FVC', 'ظرفیت حیاتی با فشار'], ['OR', 'اتاق عمل']], 'گزارش اسپیرومتری.'),
        T('ابزار', 'نسبت FEV1/FVC در ابزار «اسپیرومتری و اکسیژن» حساب می‌شود.', true, 'FEV1 ÷ FVC.'),
        S('املا', 'املای «اسپیرومتری» را بنویس', 'spirometry', 'spir/o + -metry.', 'spiro…')
      ]
    },
    {
      id: 'r13', w: 'ds', title: 'آسم و لوزه‌های Susan', who: 'Susan Jones، دختر ۱۰ ساله',
      brief: 'Susan با حمله حاد آسم به اورژانس آمده است. در ۵ ماه گذشته سه بار tonsillitis داشته که مجرای تنفسی فوقانی‌اش را ملتهب کرده و ماه گذشته دو بار برای حمله آسم به اورژانس آمده است. پزشکش متخصص ENT و جراح است.',
      chart: [['CC', 'acute asthma attack'], ['Hx', 'tonsillitis × 3 in 5 months'], ['Physician', 'ENT surgeon']],
      fig: { a: 'asthma-airway', l: [] },
      steps: [
        M('اختصار', 'ENT یعنی…', ['گوش، حلق و بینی', 'لوله داخل نای', 'سندروم دیسترس', 'عفونت فوقانی'], 'ear, nose and throat.'),
        M('جراحی', 'چرا جراح بودن پزشک مهم است؟', ['ممکن است tonsillectomy لازم شود', 'باید lobectomy کند', 'باید تراکئوستومی دائمی بگذارد', 'باید pneumonectomy کند'], 'عفونت مکرر لوزه.'),
        M('آسم', 'حمله آسم با کدام صدا شناخته می‌شود؟', ['wheeze', 'stridor', 'pleural rub', 'silence'], 'خس‌خس.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['acute', 'ناگهانی و کوتاه‌مدت'], ['tonsillitis', 'التهاب لوزه'], ['upper respiratory tract', 'مجرای تنفسی فوقانی'], ['inflammation', 'التهاب']], 'شرح حال Susan.'),
        T('درمان', 'MDI و nebulizer هر دو برای دادن داروی استنشاقی‌اند.', true, 'inhaled medications.'),
        S('املا', 'املای «آسم» را بنویس', 'asthma', 'th بی‌صدا.', 'ast…')
      ]
    },
    /* ================= تشخیص و درمان ================= */
    {
      id: 'r14', w: 'tx', title: 'ارتشاح لوب تحتانی چپ', who: 'آقای Steven Phillips، ۳۵ ساله',
      brief: 'پرونده آقای Phillips: «عکس قفسه سینه ارتشاح پنومونیک در لوب تحتانی چپ با کمی افیوژن پاراپنومونیک نشان داد. عکس‌های بعدی ابتدا پیشرفت ارتشاح و سپس کمی بهبود را نشان دادند. ECGهای پیاپی با ایسکمی یا روند پریکاردی هم‌خوان بودند. آزمایش‌ها طبیعی بودند. ABG درخواست شد. کشت خلط به دست نیامد.»',
      chart: [['CXR', 'pneumonic infiltrate LLL, parapneumonic effusion'], ['ECG', 'serial'], ['ABGs', 'ordered'], ['Sputum culture', 'could not be obtained']],
      fig: { a: 'pleural-disorders', l: [] },
      steps: [
        M('لوب', 'LLL یعنی…', ['لوب تحتانی ریه چپ', 'لوب فوقانی ریه چپ', 'لوب تحتانی راست', 'دو لوب چپ'], 'left lower lobe.'),
        M('یافته', 'parapneumonic effusion یعنی…', ['مایع در فضای جنب کنار پنومونی', 'هوا در جنب', 'خون در جنب', 'تومور جنب'], 'para- = کنار؛ effusion = مایع.'),
        M('آزمون', 'کشت خلط برای چیست؟', ['یافتن میکروب عامل عفونت', 'سنجش اکسیژن خون', 'اندازه‌گیری حجم ریه', 'دیدن نایژه'], 'sputum culture (C&S).'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['CXR', 'عکس قفسه سینه'], ['ABGs', 'گازهای خون شریانی'], ['C&S', 'کشت و آنتی‌بیوگرام'], ['LLL', 'لوب تحتانی چپ']], 'پرونده Phillips.'),
        M('درمان', 'اگر افیوژن زیاد شود، کدام روش مایع را بیرون می‌کشد؟', ['thoracentesis', 'bronchoscopy', 'spirometry', 'tracheostomy'], 'thorac/o + -centesis.', null, { a: ['thoracentesis'], l: [] }),
        S('املا', 'املای «افیوژن» را بنویس', 'effusion', 'pleural effusion.', 'effu…')
      ]
    },
    {
      id: 'r15', w: 'tx', title: 'بازنویسی یادداشت با اختصار', who: 'بیمار COPD',
      brief: 'یادداشت: «بیمار با بیماری انسدادی مزمن ریه بستری شد و تنگی نفس شدید داشت. گازهای خون شریانی هنگام بستری غیرطبیعی بود. خانواده گفتند بیمار در خانه از نبولایزر، اسپری استنشاقی با دوز مشخص و دستگاه فشار مثبت مداوم راه هوایی استفاده می‌کرده ولی بی‌نتیجه بوده است. آزمون‌های عملکرد ریه قبلی غیرطبیعی بوده‌اند. سابقه سل ندارد. از نظر تنگی نفس پایش ادامه یابد.» باید آن را با اختصار بنویسی.',
      chart: [['Dx', 'COPD'], ['Sx', 'severe SOB'], ['Home', 'nebulizer, MDI, CPAP'], ['Hx', 'abnormal PFTs; no TB']],
      fig: { a: 'oxygen-devices', l: [] },
      steps: [
        P('اختصار', 'هر عبارت را به اختصارش وصل کن', [['بیماری انسدادی مزمن ریه', 'COPD'], ['تنگی نفس', 'SOB'], ['گازهای خون شریانی', 'ABGs'], ['آزمون عملکرد ریه', 'PFT']], 'یادداشت COPD.'),
        P('اختصار', 'هر دستگاه را به اختصارش وصل کن', [['اسپری استنشاقی با دوز مشخص', 'MDI'], ['فشار مثبت مداوم راه هوایی', 'CPAP'], ['درمان با بخور دارویی', 'NMT'], ['سل', 'TB']], 'دستگاه‌ها و بیماری‌ها.'),
        M('بیماری', 'COPD بیشتر شامل کدام دو بیماری است؟', ['آمفیزم و برونشیت مزمن', 'آسم و پنومونی', 'سل و سرطان', 'فیبروز سیستیک و RDS'], 'emphysema + chronic bronchitis.', null, { a: ['copd'], l: [] }),
        M('پایش', 'برای پایش اکسیژن بیمار بدون سوزن از چه استفاده می‌شود؟', ['pulse oximetry', 'ABG', 'spirometry', 'bronchoscopy'], 'گیره انگشت.'),
        T('اختصار', 'No hx of TB یعنی سابقه سل ندارد.', true, 'hx = history.'),
        S('املا', 'املای «آمفیزم» را بنویس', 'emphysema', 'ph = f.', 'emph…')
      ]
    },
    {
      id: 'r16', w: 'tx', title: 'تنگی نفس انتهایی', who: 'Ella، خانم ۷۶ ساله',
      brief: 'Ella در مرحله پایانی نارسایی چندعضوی در ICU است. برای پنومونی باکتریایی بستری شده بود که با آنتی‌بیوتیک بهتر نشد. ۲۰ سال COPD دارد. ABGهایش غیرطبیعی بود و ARDS مقاوم تشخیص داده شد. با اینتوباسیون و تهویه مکانیکی حمایت شد. پس از یک هفته تلاش ناموفق برای جدا کردن از ونتیلاتور، پزشک ریه تراکئوستومی دائمی را مطرح کرد. خانواده تصمیم گرفتند درمان‌های تهاجمی را ادامه ندهند و وضعیت DNR ثبت شد. پس از برداشتن لوله و پالس‌اکسیمتر، تنفسش سطحی و از نوع Cheyne-Stokes شد.',
      chart: [['Hx', 'COPD 20 years; bacterial pneumonia'], ['Dx', 'refractory ARDS'], ['Tx', 'endotracheal intubation, mechanical ventilation'], ['Code', 'DNR']],
      fig: { a: 'intubation', l: [] },
      steps: [
        M('اختصار', 'ARDS یعنی…', ['سندروم دیسترس تنفسی حاد', 'بیماری انسدادی مزمن ریه', 'آپنه خواب', 'سندروم مرگ ناگهانی شیرخوار'], 'acute respiratory distress syndrome.'),
        M('درمان', 'endotracheal intubation یعنی…', ['گذاشتن لوله در نای از راه دهان یا بینی', 'برش نای از جلوی گردن', 'کشیدن مایع جنب', 'اکسیژن با کانولا'], 'endo- + trache/o + -al.'),
        M('درمان', 'wean from the ventilator یعنی…', ['جدا کردن تدریجی از دستگاه تنفس', 'وصل کردن به دستگاه', 'افزایش اکسیژن', 'گذاشتن لوله سینه'], 'weaning.'),
        M('الگو', 'تنفس Cheyne-Stokes چیست؟', ['دوره‌های تنفس عمیق و تند با آپنه', 'تنفس طبیعی', 'تنفس فقط کند', 'خس‌خس مداوم'], 'نزدیک مرگ.', null, { a: ['breath-patterns'], l: [] }),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['DNR', 'احیا نشود'], ['ventilator', 'دستگاه تنفس مصنوعی'], ['tracheostomy', 'منفذ در نای'], ['pulse oximeter', 'سنجش اشباع اکسیژن']], 'Case Study 12-2.'),
        S('املا', 'املای «ونتیلاتور» را بنویس', 'ventilator', 'دستگاه تهویه.', 'venti…')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* نَفَس — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', 'مسیر هوا: بینی، حلق، حنجره، نای، نایژه، نایژک و در پایان آلوئول.'],
    ['Lx', 'pneum/o و pneumon/o هم به هوا اشاره دارند و هم به ریه؛ pulmon/o فقط ریه است.'],
    ['Lx', '‎-pnea یعنی تنفس: eupnea طبیعی، dyspnea دشوار، apnea قطع تنفس.'],
    ['Lx', 'spir/o یعنی تنفس؛ spirometer دستگاه اندازه‌گیری حجم هوای تنفسی است.'],
    ['Lx', 'ox/o و ‎-oxia به اکسیژن اشاره دارند؛ capn/o و ‎-capnia به دی‌اکسید کربن.'],
    ['Lx', '‎-ptysis یعنی تف کردن: hemoptysis سرفه کردن خون است.'],
    ['Lx', '‎-thorax یعنی قفسه سینه: pneumothorax هوا در فضای جنب و hemothorax خون در آن است.'],
    ['Lx', 'در pneumonia حرف p نوشته می‌شود ولی خوانده نمی‌شود.'],
    ['Lx', 'بخش تبادل گاز در آلوئول‌هاست؛ بقیه راه هوایی فقط هوا را جابه‌جا می‌کند.'],
    ['Up', 'rhin/o و nas/o هر دو یعنی بینی؛ rhinorrhea آبریزش بینی است.'],
    ['Up', 'epistaxis همان خون‌دماغ است.'],
    ['Up', 'حلق (pharynx) سه بخش دارد: nasopharynx، oropharynx و laryngopharynx.'],
    ['Up', 'اپی‌گلوت هنگام بلع روی حنجره را می‌پوشاند تا غذا وارد نای نشود.'],
    ['Up', 'laryng/o حنجره است؛ تارهای صوتی و صدا در حنجره ساخته می‌شوند.'],
    ['Up', 'آدنوئید همان لوزه حلقی است و لوزه‌های کامی (palatine) در دو طرف گلو هستند.'],
    ['Up', 'croup در کودکان صدای سرفه پارس‌مانند و stridor می‌دهد.'],
    ['Up', 'مژک‌های نای مانند پله‌برقی، مخاط و ذرات را رو به بالا می‌برند.'],
    ['Lo', 'ریه راست سه لوب دارد و ریه چپ دو لوب؛ جای قلب در سمت چپ است.'],
    ['Lo', 'نای در کارینا به دو نایژه اصلی تقسیم می‌شود؛ نایژه راست کوتاه‌تر، پهن‌تر و عمودی‌تر است.'],
    ['Lo', 'جسم خارجی بلعیده‌شده بیشتر به نایژه اصلی راست می‌رود.'],
    ['Lo', 'پرده جنب دو لایه دارد: جداری (parietal) و احشایی (visceral).'],
    ['Lo', 'surfactant سطح آلوئول را لغزنده نگه می‌دارد تا هنگام بازدم روی هم نخوابد.'],
    ['Lo', 'mediastinum فضای میان دو ریه است و قلب، نای و مری را در خود دارد.'],
    ['Lo', 'دیافراگم مهم‌ترین عضله دم است و با انقباض پایین می‌رود.'],
    ['Br', 'تعداد تنفس طبیعی بزرگسال ۱۲ تا ۲۰ بار در دقیقه است.'],
    ['Br', 'tachypnea تنفس تند است و bradypnea تنفس کند.'],
    ['Br', 'orthopnea یعنی بیمار فقط در حالت نشسته یا ایستاده راحت نفس می‌کشد.'],
    ['Br', 'wheeze صدای سوت‌مانند راه هوایی تنگ است؛ stridor صدای خشن دم در انسداد راه فوقانی.'],
    ['Br', 'rales یا crackles صدای ترق‌تروق ناشی از مایع در آلوئول‌هاست.'],
    ['Br', 'cyanosis رنگ آبی پوست و لب در کمبود اکسیژن است.'],
    ['Br', 'Cheyne-Stokes یعنی دوره‌های تنفس عمیق و تند که با آپنه قطع می‌شود.'],
    ['Br', 'SpO2 طبیعی ۹۵ تا ۱۰۰ درصد است.'],
    ['Ds', 'COPD بیشتر شامل آمفیزم و برونشیت مزمن است و سیگار علت اصلی آن است.'],
    ['Ds', 'آسم انسداد برگشت‌پذیر راه هوایی است: اسپاسم، التهاب و مخاط زیاد.'],
    ['Ds', 'pertussis همان سیاه‌سرفه است با سرفه‌های پشت‌سرهم و صدای «ووپ».'],
    ['Ds', 'فیبروز سیستیک (CF) بیماری ژنتیکی است و با sweat test تشخیص داده می‌شود.'],
    ['Ds', 'سل (TB) با آزمون پوستی PPD (Mantoux) غربال می‌شود.'],
    ['Ds', 'atelectasis یعنی خوابیدن یا باز نشدن بخشی از ریه.'],
    ['Ds', 'pneumoconiosis بیماری ریه از گرد و غبار است: anthracosis زغال، asbestosis آزبست و silicosis سیلیس.'],
    ['Ds', 'pleural effusion مایع در فضای جنب است و empyema چرک در آن.'],
    ['Ds', 'OSA یعنی قطع تنفس در خواب به علت بسته شدن راه هوایی فوقانی.'],
    ['Tx', 'FEV1/FVC کمتر از ۷۰٪ یعنی الگوی انسدادی.'],
    ['Tx', 'ABGs گازهای خون شریانی است: PaO2، PaCO2 و pH.'],
    ['Tx', 'thoracentesis یعنی کشیدن مایع جنب با سوزن.'],
    ['Tx', 'tracheotomy برش نای است و tracheostomy ساختن منفذ دائمی یا موقت در آن.'],
    ['Tx', 'lobectomy برداشتن یک لوب است و pneumonectomy برداشتن کل یک ریه.'],
    ['Tx', 'bronchodilator نایژه را گشاد می‌کند؛ expectorant خلط را رقیق و بیرون می‌آورد.'],
    ['Tx', 'antitussive سرکوب‌کننده سرفه است.'],
    ['Tx', 'CPAP با فشار مثبت مداوم راه هوایی را در خواب باز نگه می‌دارد.'],
    ['Tx', 'MDI اسپری با دوز مشخص است؛ برای کودکان از spacer هم استفاده می‌شود.'],
    ['Tx', 'مانور هایملیچ برای بیرون انداختن جسم خارجی از راه هوایی است.']
  ];
  const COLORS = { Lx: '#2E9BD6', Up: '#E0708C', Lo: '#8E6BD8', Br: '#17A398', Ds: '#E07A3A', Tx: '#3D6FD6', '': '#2E9BD6' };
  let deck = [];
  function next() {
    if (!deck.length) deck = TIPS.map((_, i) => i).sort(() => Math.random() - 0.5);
    return TIPS[deck.pop()];
  }
  function html(t) {
    return `<span class="tip__el" style="--c:${COLORS[t[0]]}">${t[0] || '💡'}</span><span class="tip__t">${t[1]}</span>`;
  }
  /** نکته را در یک عنصر نشان بده و هر چند ثانیه عوضش کن؛ لمس یعنی نکته بعدی */
  function mount(el, ms) {
    if (!el) return;
    const box = el.querySelector('.tip__body') || el;
    const show = () => {
      box.classList.add('is-out');
      setTimeout(() => { box.innerHTML = html(next()); box.classList.remove('is-out'); }, 260);
    };
    box.innerHTML = html(next());
    const id = setInterval(() => { if (!document.body.contains(el)) return clearInterval(id); if (!document.hidden) show(); }, ms || 9000);
    el.addEventListener('click', show);
  }
  EA.tips = { list: TIPS, next, mount, html };
})();
  };
  D.config = function (EA) {
    const M = { id: D.id, bit: D.bit, langs: D.langs, start: D.startWorld, prefix: D.codePrefix, nameFa: D.nameFa, nameEn: D.nameEn, titleFa: D.titleFa, titleEn: D.titleEn,
      unitRun: /([−≈+]?[\d۰-۹][\d۰-۹٫.,]*(?:\s?[×÷=+−-]\s?[\d۰-۹][\d۰-۹٫.,]*)*\s?(?:mg\/dL|g\/dL|mm\/hr|mm Hg|mmHg|\/µL|\/mm³|µL|mg\/L|ng\/mL|kcal|kg|mm|cm|mL|L|°C|bpm|sec|\/min)(?![A-Za-z]))/g,
      mascot: D.mascotFn };
    return window.ACADEMY_COURSES.termino.kit.config(EA, M);
  };
  D.tools = function () {
/* درما — کارت‌های واژه (فلش‌کارت) با جعبه لایتنر
 * روی کارت: واژه انگلیسی و تلفظ؛ پشت کارت: معادل فارسی، تعریف، اجزای واژه و اختصارهای مرتبط.
 * «بلد بودم» کارت را یک خانه جلو می‌برد و «بلد نبودم» به خانه اول برمی‌گرداند؛ کارت‌های خانه‌های پایین‌تر زودتر می‌آیند. */
(function () {
  const EA = window.EA;
  const { sfx, confetti, esc } = EA.ui;
  const fa = n => EA.fa(n);
  const S = () => EA.S.get();
  const L = () => EA.lex;

  /** تلفظ با صدای انگلیسی مرورگر (اگر باشد) */
  function speak(text) {
    try {
      const ss = window.speechSynthesis; if (!ss) return false;
      ss.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US'; u.rate = 0.85;
      const v = ss.getVoices().find(x => /^en(-|_)/i.test(x.lang));
      if (v) u.voice = v;
      ss.speak(u);
      return true;
    } catch (e) { return false; }
  }
  const canSpeak = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

  /** پشت کارت یک واژه؛ در واژه‌نامه هم استفاده می‌شود */
  function back(t) {
    const a = L().analyze(t.t.split(' ')[0]);
    const parts = /^[a-z]+$/i.test(t.t) && a.full && a.parts.length > 1
      ? `<div class="wbx">${a.parts.map(p => `<span><b dir="ltr">${L().partLabel(p)}</b> ${p.r.fa}</span>`).join('')}</div>` : '';
    const ab = t.ab && t.ab.length ? `<div class="tchips">${t.ab.map(x => `<span class="tchip" dir="ltr">${esc(x)}</span>`).join('')}</div>` : '';
    return `<div class="tback"><b class="tback__fa">${t.fa}</b>
      <p class="defen" dir="ltr">${esc(t.d)}</p>${parts}${ab}
      ${t.c ? `<small class="tback__c">${L().CAT_FA[t.c] || t.c}</small>` : ''}</div>`;
  }

  let root = null, D = null;
  function deck(wid, n) {
    const pool = L().TERMS.filter(t => t.fa && t.d && (!wid || t.w === wid));
    const box = id => EA.S.cardBox(id);
    return pool.map(t => ({ t, k: box(t.id) + Math.random() * 1.6 })).sort((a, b) => a.k - b.k).slice(0, n || 15).map(x => x.t);
  }

  function open(wid) {
    const w = wid ? EA.worlds.find(x => x.id === wid) : null;
    D = { wid, list: deck(wid, 15), i: 0, known: 0, flipped: false, start: Date.now() };
    root = document.createElement('div');
    root.className = 'player cards';
    root.style.setProperty('--wc', w ? w.color : 'var(--brand)');
    root.style.setProperty('--wd', w ? w.dark : 'var(--brand-d)');
    root.innerHTML = `<header class="player__top"><button class="iconbtn" data-c="quit" aria-label="خروج">✕</button><div class="pbar"><i></i></div><div class="p-meta"></div></header>
      <div class="player__body"></div><footer class="player__foot"></footer>`;
    document.body.appendChild(root);
    document.body.classList.add('no-scroll');
    root.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    draw();
  }
  function close() {
    if (!root) return;
    document.removeEventListener('keydown', onKey);
    root.remove(); root = null; D = null;
    document.body.classList.remove('no-scroll');
    EA.app.refresh();
  }
  function draw() {
    const t = D.list[D.i];
    root.querySelector('.pbar i').style.width = Math.max(3, D.i / D.list.length * 100) + '%';
    root.querySelector('.p-meta').innerHTML = `<span class="p-count">${fa(D.i + 1)} / ${fa(D.list.length)}</span>`;
    const box = EA.S.cardBox(t.id);
    const w = EA.worlds.find(x => x.id === t.w);
    root.querySelector('.player__body').innerHTML = `<div class="qwrap">
      <div class="fcard ${D.flipped ? 'is-flip' : ''}" data-c="flip" role="button" tabindex="0" aria-label="برگرداندن کارت">
        <div class="fcard__in">
          <div class="fcard__f">
            <span class="fcard__w" style="--wc:${w ? w.color : 'var(--brand)'}">${w ? w.sym : ''}</span>
            <span class="fcard__box" title="خانه لایتنر">${'●'.repeat(box)}${'○'.repeat(5 - box)}</span>
            <b class="fcard__t" dir="ltr">${esc(t.t)}</b>
            ${t.p ? `<span class="pron" dir="ltr">/${esc(t.p)}/</span>` : ''}
            <small class="fcard__h">لمس کن تا معنی را ببینی</small>
          </div>
          <div class="fcard__b"><b class="fcard__t fcard__t--sm" dir="ltr">${esc(t.t)}</b>${back(t)}</div>
        </div>
      </div>
      ${canSpeak() ? `<button class="hintbtn hintbtn--c" data-c="say">🔊 شنیدن تلفظ</button>` : ''}
    </div>`;
    root.querySelector('.player__foot').innerHTML = D.flipped
      ? `<div class="foot__row"><button class="btn btn--red btn--lg" data-c="no">✗ بلد نبودم</button><button class="btn btn--green btn--lg" data-c="yes">✓ بلد بودم</button></div>`
      : `<div class="foot__row"><span class="foot__note">اول در ذهنت معنی را بگو، بعد کارت را برگردان</span><button class="btn btn--wc btn--lg" data-c="flip">برگردان</button></div>`;
  }
  function mark(known) {
    const t = D.list[D.i];
    EA.S.cardMark(t.id, known);
    if (known) { D.known++; sfx('correct'); } else sfx('wrong');
    D.i++; D.flipped = false;
    if (D.i >= D.list.length) return finish();
    draw();
  }
  function finish() {
    const xp = 5 + D.known;
    const ev = EA.S.addXp(xp);
    const badges = EA.S.checkBadges();
    const total = L().TERMS.length, mastered = Object.values(S().cards || {}).filter(b => b >= 4).length;
    root.querySelector('.player__top').classList.add('is-hidden');
    root.querySelector('.player__body').innerHTML = `<div class="res">
      <div class="res__m">${EA.ui.buddy('cheer', 120)}</div>
      <h2 class="res__t">${fa(D.known)} از ${fa(D.list.length)} کارت را بلد بودی!</h2>
      <p class="res__sub">کارت‌های خانه ۴ و ۵ لایتنر: ${fa(mastered)} از ${fa(total)} واژه</p>
      <div class="tiles"><div class="tile tile--xp" style="--d:.2s"><div class="tile__h">امتیاز</div><div class="tile__v">⚡ ${fa(xp)}</div></div></div>
      ${badges.map(b => `<p class="res__combo">${b.icon} نشان تازه: ${b.name}</p>`).join('')}
    </div>`;
    root.querySelector('.player__foot').innerHTML = `<div class="foot__row"><button class="btn btn--ghost" data-c="again">یک دسته دیگر</button><button class="btn btn--brand btn--lg" data-c="quit">ادامه</button></div>`;
    sfx('done'); confetti(80);
    if (ev.some(e => e.type === 'level')) EA.ui.toast('🎉 سطح تازه: ' + EA.S.level().title);
    D.done = true;
  }
  function onClick(e) {
    const b = e.target.closest('[data-c]'); if (!b || !D) return;
    const a = b.dataset.c;
    if (a === 'quit') return close();
    if (a === 'again') { const wid = D.wid; root.remove(); root = null; document.removeEventListener('keydown', onKey); return open(wid); }
    if (a === 'say') { speak(D.list[D.i].t); return; }
    if (D.done) return;
    if (a === 'flip') { D.flipped = !D.flipped; sfx('tap'); draw(); return; }
    if (a === 'yes') return mark(true);
    if (a === 'no') return mark(false);
  }
  function onKey(e) {
    if (!D || D.done) return;
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); D.flipped = !D.flipped; draw(); }
    else if (D.flipped && (e.key === 'ArrowRight' || e.key === '1')) mark(false);
    else if (D.flipped && (e.key === 'ArrowLeft' || e.key === '2')) mark(true);
  }

  EA.cards = { open, back, speak, canSpeak };
})();
/* موتور — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و ابزار ویژه هر اپ (EA.APP.extraTool)
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const A = EA.APP, X = A.extraTool;
  const KEY = A.key + '.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: 'واژه‌نامه', color: '#D9643A' },
    { id: 'parse', sym: '✂', name: 'تجزیه‌گر واژه', color: '#B24E26' },
    { id: 'roots', sym: '-o-', name: 'ریشه‌ها و پسوندها', color: '#1F9E8F' },
    { id: 'abbr', sym: 'BCC', name: 'اختصارها', color: '#1899D6' },
  ].concat(X ? [{ id: X.id, sym: X.sym, name: X.name, color: X.color }] : []);
  let cur = 'dict';
  const st = { q: '', w: '', k: '', parse: A.parseDefault, open: null, limit: 40 };
  try { const v = sessionStorage.getItem(KEY); if (v && TOOLS.some(t => t.id === v)) cur = v; } catch (e) { /* */ }
  const persist = () => { try { sessionStorage.setItem(KEY, cur); } catch (e) { /* */ } };
  const tool = () => TOOLS.find(t => t.id === cur);

  /* ---------- نمای اصلی ---------- */
  function view() {
    const t = tool();
    return `<section class="tools" style="--tc:${t.color}">
      <header class="vhead"><h1>ابزارها</h1><p>واژه‌نامه کامل ${fa(L().TERMS.length)} واژه، ${fa(L().ROOTS.length)} جزء واژه و ${fa(L().ABBR.length)} اختصار؛ همه بدون اینترنت.</p></header>
      <div class="ttabs" role="tablist">${TOOLS.map(x => `<button class="ttab ${x.id === cur ? 'is-on' : ''}" data-tool="${x.id}" style="--tc:${x.color}" role="tab" aria-selected="${x.id === cur}"><span class="ttab__s">${x.sym}</span>${x.name}</button>`).join('')}</div>
      <div class="tcard">${PANES[cur]()}</div>
      <p class="disclaimer">${A.toolsDisclaimer}</p>
    </section>`;
  }

  const worldChips = (sel, all) => `<div class="seg seg--w">${all ? `<button class="seg__b ${!sel ? 'is-on' : ''}" data-tw="">همه</button>` : ''}${EA.worlds.filter(w => L().ABBR.some(a => a.w === w.id)).map(w => `<button class="seg__b ${sel === w.id ? 'is-on' : ''}" data-tw="${w.id}" style="--wc:${w.color}"><span class="wsym wsym--xs" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span> ${w.short || w.name}</button>`).join('')}</div>`;
  const searchBox = ph => `<label class="tsearch"><span aria-hidden="true">🔍</span><input type="search" data-tq value="${esc(st.q)}" placeholder="${ph}" autocomplete="off" spellcheck="false"></label>`;

  /* ---------- واژه‌نامه ---------- */
  function dictList() {
    const fav = EA.S.get().fav || {};
    let list = L().TERMS.filter(t => (!st.w || (st.w === 'fav' ? fav[t.id] : t.w === st.w)) && (!st.k || t.k === st.k));
    list = L().search(st.q, list);
    return list;
  }
  function dictRows() {
    const list = dictList();
    const fav = EA.S.get().fav || {};
    if (!list.length) return `<div class="tres--empty">${EA.ui.mascot('think', 'var(--brand)', 54)}<span>واژه‌ای پیدا نشد. با بخشی از واژه یا معنی فارسی جست‌وجو کن، یا «تجزیه‌گر واژه» را امتحان کن.</span></div>`;
    return `<p class="tcount">${fa(list.length)} واژه</p><ul class="dict">${list.slice(0, st.limit).map(t => {
      const w = EA.worlds.find(x => x.id === t.w);
      const op = st.open === t.id;
      return `<li class="dict__i ${op ? 'is-open' : ''}">
        <button class="dict__h" data-term="${t.id}" aria-expanded="${op}">
          <span class="wsym wsym--xs" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span>
          <span class="dict__t"><b class="en-text">${esc(t.t)}</b><small>${esc(L().short(t.fa))}</small></span>
          <span class="dict__box" title="خانه لایتنر">${'●'.repeat(EA.S.cardBox(t.id))}</span>
        </button>
        ${op ? `<div class="dict__b">${(c => c ? `<span class="kchip kchip--tag"><i>${c.icon}</i>${c.name}</span> ` : '')(L().CATS.find(c => c.id === t.k))}${t.p ? `<span class="pron" dir="ltr">/${esc(t.p)}/</span>` : ''}${EA.cards.back(t)}
          <div class="dict__act">${EA.cards.canSpeak() ? `<button class="btn btn--ghost btn--sm" data-say="${t.id}">🔊 تلفظ</button>` : ''}<button class="btn btn--ghost btn--sm" data-fav="${t.id}">${fav[t.id] ? '★ نشان‌شده' : '☆ نشان کن'}</button><button class="btn btn--ghost btn--sm" data-parse="${esc(t.t)}">✂ تجزیه</button></div></div>` : ''}
      </li>`;
    }).join('')}</ul>${list.length > st.limit ? `<button class="btn btn--ghost btn--block" data-more>نمایش ${fa(Math.min(40, list.length - st.limit))} واژه دیگر</button>` : ''}`;
  }
  const dict = () => `<div class="tpane">${searchBox(A.ph.dict)}
    <div class="seg seg--w"><button class="seg__b ${!st.w ? 'is-on' : ''}" data-tw="">همه</button><button class="seg__b ${st.w === 'fav' ? 'is-on' : ''}" data-tw="fav">★ نشان‌شده‌ها</button>${EA.worlds.filter(w => L().TERMS.some(t => t.w === w.id)).map(w => `<button class="seg__b ${st.w === w.id ? 'is-on' : ''}" data-tw="${w.id}" title="${w.name}"><span class="wsym wsym--xs" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span></button>`).join('')}</div>
    <div class="kchips" role="group" aria-label="دسته واژه">${[{ id: '', icon: '🗂️', name: 'همه دسته‌ها' }].concat(L().CATS).map(c => { const n = c.id ? L().TERMS.filter(t => t.k === c.id && (!st.w || st.w === 'fav' || t.w === st.w)).length : 0; return `<button class="kchip ${st.k === c.id ? 'is-on' : ''}" data-tk="${c.id}"><i>${c.icon}</i>${c.name}${c.id ? `<small>${fa(n)}</small>` : ''}</button>`; }).join('')}</div>
    <div class="tlist">${dictRows()}</div></div>`;

  /* ---------- تجزیه‌گر ---------- */
  function parseOut() {
    const words = String(st.parse || '').trim().split(/\s+/).filter(Boolean).slice(0, 4);
    if (!words.length) return '';
    return words.map(wd => {
      const a = L().analyze(wd);
      if (!a.word) return '';
      const t = L().term(wd) || L().term(st.parse);
      const meaning = a.parts.filter(p => p.r).map(p => p.r.fa.split('،')[0]);
      return `<div class="parse">
        <div class="parse__w" dir="ltr">${a.parts.map(p => `<span class="pp pp--${p.kind}"><b>${p.kind === 'gap' ? esc(p.text) : esc(L().partLabel(p))}</b><small dir="rtl">${p.r ? esc(p.r.fa) : 'ناشناخته'}</small></span>`).join('<i>+</i>')}</div>
        ${a.full ? `<p class="parse__m">معنی تحت‌اللفظی (از آخر به اول بخوان): <b>${meaning.slice().reverse().join(' ← ')}</b></p>` : '<p class="note note--warn">بخشی از این واژه در فهرست ریشه‌ها نیست؛ بخش‌های شناخته‌شده رنگی‌اند.</p>'}
        ${t ? `<div class="parse__t"><b dir="ltr">${esc(t.t)}</b> = ${t.fa}<p class="defen" dir="ltr">${esc(t.d)}</p></div>` : ''}
      </div>`;
    }).join('');
  }
  const SAMPLES = A.parseSamples;
  const parse = () => `<div class="tpane">
    <p class="muted">یک واژه پزشکی بنویس تا به پیشوند، ریشه و پسوند شکسته شود. قاعده طلایی: معنی را از <b>پسوند</b> شروع کن، بعد پیشوند، و آخر ریشه‌ها.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. ${esc(A.parseSamples[1] || A.parseDefault)}"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: 'پیشوند', root: 'ریشه', suffix: 'پسوند' };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox(A.ph.roots)}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]}‌ها <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b class="en-text">${esc(r.a)}</b><span>${esc(r.fa)}</span><small class="en-text">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox(A.ph.abbr)}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>اختصار</th><th>شکل کامل و معنی</th></tr>${list.map(a => `<tr><td><span class="en-text">${esc(a.a)}</span></td><td><span class="en-text abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  const PANES = { dict, parse, roots, abbr };
  if (X) PANES[X.id] = X.pane;

  /* ---------- رویدادها ---------- */
  function redraw(el, keepFocus) {
    /* فوکوس جعبه جست‌وجو، تجزیه‌گر یا هر ورودی data-keep ابزار ویژه پس از بازسازی برمی‌گردد */
    const active = document.activeElement, sel = active && active.matches && (active.matches('[data-tq]') ? '[data-tq]' : active.matches('[data-tp]') ? '[data-tp]' : active.matches('[data-keep]') ? `[data-keep="${active.dataset.keep}"]` : null);
    let pos = 0; try { pos = sel ? active.selectionStart : 0; } catch (e) { /* number input */ }
    el.querySelector('.tcard').innerHTML = PANES[cur]();
    if (keepFocus && sel) { const i = el.querySelector(sel); if (i) { i.focus(); try { i.setSelectionRange(pos, pos); } catch (e) { /* */ } } }
  }
  function bind(el) {
    el.addEventListener('click', e => {
      const tb = e.target.closest('[data-tool]');
      if (tb) { cur = tb.dataset.tool; st.q = ''; st.w = ''; st.k = ''; st.limit = 40; persist(); sfx('select'); EA.app.refresh(); return; }
      const k = e.target.closest('[data-tk]');
      if (k) { st.k = k.dataset.tk; st.limit = 40; sfx('select'); return redraw(el); }
      const w = e.target.closest('[data-tw]');
      if (w) { st.w = w.dataset.tw; st.limit = 40; sfx('select'); return redraw(el); }
      const tm = e.target.closest('[data-term]');
      if (tm) { st.open = st.open === tm.dataset.term ? null : tm.dataset.term; sfx('tap'); return redraw(el); }
      const sy = e.target.closest('[data-say]');
      if (sy) { const t = L().TERMS.find(x => x.id === sy.dataset.say); if (t) EA.cards.speak(t.t); return; }
      const fv = e.target.closest('[data-fav]');
      if (fv) { const s = EA.S.get(); s.fav = s.fav || {}; if (s.fav[fv.dataset.fav]) delete s.fav[fv.dataset.fav]; else s.fav[fv.dataset.fav] = 1; EA.S.save(); sfx('select'); return redraw(el); }
      const pr = e.target.closest('[data-parse]');
      if (pr) { st.parse = pr.dataset.parse; if (cur !== 'parse') { cur = 'parse'; persist(); EA.app.refresh(); } else redraw(el); sfx('select'); return; }
      const rq = e.target.closest('[data-rq]');
      if (rq) { cur = 'dict'; st.q = rq.dataset.rq; st.w = ''; persist(); sfx('select'); EA.app.refresh(); return; }
      if (e.target.closest('[data-more]')) { st.limit += 40; return redraw(el); }
      if (X && X.click && cur === X.id && X.click(e)) { sfx('select'); return redraw(el); }
    });
    el.addEventListener('input', e => {
      if (e.target.matches('[data-tq]')) { st.q = e.target.value; st.limit = 40; redraw(el, true); }
      else if (e.target.matches('[data-tp]')) { st.parse = e.target.value; el.querySelector('.tout').innerHTML = parseOut(); }
      else if (X && X.input && cur === X.id && X.input(e, el)) redraw(el, true);
    });
  }

  EA.tools = { view, bind, TOOLS };
})();
  };
  D.ready = true;
})(window.ACADEMY_SUBCOURSES);
