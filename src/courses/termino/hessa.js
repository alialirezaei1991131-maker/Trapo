/* Therapo • ترمینو — حیطه «hessa» (Special Senses: Eyes and Ears)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_hessa;
  D.css = ".va{display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px; margin: 10px 0;}\n.va__in{display: flex; flex-direction: column; gap: 6px; flex: 1 1 130px; min-width: 0; font-weight: 800; color: var(--muted);}\n.va__in input{width: 100%; min-width: 0; font: inherit; font-size: 18px; font-weight: 900; color: var(--text); background: var(--bg); border: 2px solid var(--line); border-radius: 14px; padding: 8px 12px; text-align: left; direction: ltr; font-family: Nunito, system-ui, sans-serif;}\n.va__in input:focus{outline: none; border-color: var(--brand);}\n.va__slash{flex: 0 0 auto; font-size: 26px; color: var(--muted); padding-bottom: 8px; font-family: Arial, system-ui, sans-serif;}\n.va__out{display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 8px; margin: 8px 0 12px;}\n.va__c{padding: 10px 12px; border-radius: 16px; background: color-mix(in srgb, var(--brand) 10%, var(--bg)); border: 2px solid color-mix(in srgb, var(--brand) 35%, var(--line)); min-width: 0;}\n.va__c b{display: block; font-size: 19px; color: var(--brand-t); overflow-wrap: anywhere;}\n.va__c small{display: block; color: var(--muted); font-weight: 700; overflow-wrap: anywhere;}\n.va__c span{display: block; font-weight: 800; margin-bottom: 2px;}\n.va__note{color: var(--muted); font-weight: 700; margin: 0 0 10px;}\n.va__h{margin: 16px 0 4px; font-size: 16px;}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* حِسّا — پیکربندی اپ: هر متن، نام، کلید ذخیره‌سازی، شخصیت و ابزار ویژه‌ای که موتور مشترک (engine/) از اپ می‌خواهد.
 * این فایل پیش از همه ماژول‌ها بارگذاری می‌شود؛ تابع‌ها بعداً و هنگام اجرا صدا زده می‌شوند. */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.APP = {
    name: 'حِسّا', key: 'hessa', title: 'حِسّا • ترمینولوژی حواس ویژه: چشم و گوش', certCode: 'HS',
    subject: 'ترمینولوژی پزشکی حواس ویژه: چشم، بینایی، گوش، شنوایی و تعادل',
    kicker: '👁️ ترمینولوژی پزشکی: چشم و گوش',
    hello: 'سلام، من <b>حِسّا</b> هستم؛ یک کره چشم کنجکاو با دو گوش تیز که همه‌چیز را می‌بیند و می‌شنود!',
    disclaimer: 'حِسّا یک ابزار آموزشی است و جایگزین معاینه چشم و گوش، قضاوت بالینی یا دستور پزشک نیست.',
    eyes: 'ده‌ها شکل دوزبانه و تصویر آموزشی؛ از قرنیه، عدسی و شبکیه تا استخوانچه‌ها، حلزون، چارت اسنلن، ادیوگرام و لوله تهویه گوش.',
    outcomes: [
      'هر واژه چشم و گوش را به پیشوند، ریشه و پسوند بشکنی و معنی‌اش را بگویی',
      'لایه‌های کره چشم، دستگاه اشکی، عضلات چشم و مسیر نور تا مغز را روی شکل نشان دهی',
      'عیب‌های انکساری، آب مروارید، گلوکوم، بیماری‌های شبکیه و پلک را از هم جدا کنی',
      'گوش بیرونی، میانی و درونی، استخوانچه‌ها، حلزون و دستگاه تعادل را بشناسی',
      'انواع اوتیت و کم‌شنوایی، وزوز، سرگیجه و بیماری منیر را با واژه درست بنویسی',
      'چارت اسنلن، تونومتری، ادیومتری، آزمون‌های رینه و وبر، جراحی‌ها و اختصارهای OD، OS و AU را بخوانی'
    ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، گزارش چشم‌پزشکی و ادیومتری را مثل یک داستان آشنا می‌خوانی.',
    obHello: 'سلام! من حِسّا هستم؛ یک کره چشم با دو گوش تیز 👁️ اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان حواس» بهترین شروع است؛ ریشه‌های پایه چشم و گوش آن‌جا یاد داده می‌شوند!',
    demo: () => ({
      q: 'واژه <b dir="ltr">blepharoptosis</b> یعنی…',
      fig: { a: ['lid-disorders'], l: ['بیماری‌های پلک'] },
      opts: ['افتادگی پلک', 'التهاب پلک', 'ترمیم پلک', 'برش پلک'],
      why: `${EA.K.wb('blephar/o', '-ptosis')}<br>ریشه <b dir="ltr">blephar/o</b> یعنی پلک و پسوند <b dir="ltr">-ptosis</b> یعنی افتادگی؛ پس <b>افتادگی پلک</b>. معنی را از پسوند شروع کن!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ['تازه‌بین', 'چشم کنجکاو', 'گوش تیز', 'رمزگشای ریشه‌ها', 'نگهبان قرنیه', 'استاد عدسی', 'دوست شبکیه',
      'نوازنده استخوانچه‌ها', 'راهنمای حلزون', 'نگهبان تعادل', 'کارآگاه اوتیت', 'خواننده اسنلن', 'استاد واژه‌سازی', 'افسانه چشم و گوش', 'اسطوره ترمینولوژی'],
    leagueRoles: ['دانشجوی اپتومتری', 'دانشجوی پزشکی', 'دانشجوی پرستاری', 'شنوایی‌شناس', 'رزیدنت چشم', 'کارشناس بینایی‌سنجی', 'رزیدنت گوش و حلق و بینی', 'کارشناس اتاق عمل', 'دانشجوی شنوایی‌شناسی', 'عینک‌ساز', 'پرستار درمانگاه چشم', 'گفتاردرمانگر', 'کارشناس هوشبری'],
    firstBadge: ['👁️', 'اولین نگاه'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], ey: ['👁️', 'تیزبین'], vd: ['🕶️', 'نگهبان بینایی'], er: ['👂', 'گوش تیز'], hd: ['🩺', 'کارآگاه گوش'], tx: ['🔬', 'استاد آزمون‌ها'] },
    confetti: ['#1E88A8', '#7CC8E0', '#FFC800', '#3B6FD4', '#E8913A', '#17A398', '#8E6BD8', '#D9534F'],
    /* ابزارها */
    parseDefault: 'dacryocystitis',
    parseSamples: ['dacryocystitis', 'blepharoptosis', 'xerophthalmia', 'otopyorrhea', 'presbycusis', 'tympanoplasty', 'achromatopsia', 'keratoplasty'],
    ph: { dict: 'جست‌وجو: retina، قرنیه، otitis…', roots: 'جست‌وجو: kerat، گوش، ‎-opia‎…', abbr: 'جست‌وجو: OD، فشار چشم، AU…' },
    toolsDisclaimer: '⚕️ حِسّا ابزار آموزشی است؛ واژه‌نامه و بینایی‌سنج جای معاینه چشم‌پزشک، شنوایی‌سنجی و قضاوت پزشک را نمی‌گیرند.',
    /* شخصیت: کره چشم سفید با دو گوش کوچک و کلاهک عنبیه — بدنه؛ چشم و دهان را موتور می‌کشد، مرکز چهره cx,cy */
    mascot: (cx, cy) => `
        <path d="M${cx - 40} ${cy - 2} C${cx - 58} ${cy - 18} ${cx - 62} ${cy + 14} ${cx - 48} ${cy + 24} C${cx - 42} ${cy + 28} ${cx - 38} ${cy + 18} ${cx - 40} ${cy + 10}Z" fill="#F6D2B8" stroke="#D9A988" stroke-width="2"/>
        <path d="M${cx + 40} ${cy - 2} C${cx + 58} ${cy - 18} ${cx + 62} ${cy + 14} ${cx + 48} ${cy + 24} C${cx + 42} ${cy + 28} ${cx + 38} ${cy + 18} ${cx + 40} ${cy + 10}Z" fill="#F6D2B8" stroke="#D9A988" stroke-width="2"/>
        <circle cx="${cx}" cy="${cy + 4}" r="42" fill="#FBFDFF" stroke="var(--c)" stroke-width="2.6"/>
        <path d="M${cx - 26} ${cy - 26} C${cx - 14} ${cy - 40} ${cx + 14} ${cy - 40} ${cx + 26} ${cy - 26} C${cx + 14} ${cy - 32} ${cx - 14} ${cy - 32} ${cx - 26} ${cy - 26}Z" fill="#2F8FB0" opacity=".9"/>
        <path d="M${cx - 22} ${cy + 30} C${cx - 10} ${cy + 36} ${cx + 10} ${cy + 36} ${cx + 22} ${cy + 30}" stroke="#E79A9A" stroke-width="1.6" fill="none" opacity=".7"/>
        <path d="M${cx + 28} ${cy - 18} l6 -2 M${cx + 32} ${cy - 8} l7 1" stroke="#E07A6A" stroke-width="1.3" opacity=".55"/>
        <path d="M${cx - 30} ${cy - 10} C${cx - 28} ${cy - 22} ${cx - 20} ${cy - 30} ${cx - 10} ${cy - 32}" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>
        <path class="negar-spark" d="M14 26 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
`
  };

  /* ---------- ابزار ویژه: بینایی‌سنج (کسر اسنلن) و شنوایی‌سنج (آستانه دسی‌بل) ----------
   * حدت اعشاری = صورت ÷ مخرج (20/40 = 0.5)؛ logMAR = log10(مخرج ÷ صورت).
   * درجه‌بندی بینایی دور بر پایه WHO (ICD-11) و درجه کم‌شنوایی بر پایه ASHA؛ اعداد آموزشی‌اند. */
  const st = { num: '20', den: '40', db: '35' };
  const fa = n => EA.fa(n);
  const dec = () => { const a = parseFloat(st.num), b = parseFloat(st.den); return a > 0 && b > 0 ? a / b : NaN; };
  const VA = [[0.5, 'بینایی طبیعی یا نزدیک به طبیعی', 'no impairment'], [0.3, 'کم‌بینایی خفیف', 'mild'], [0.1, 'کم‌بینایی متوسط', 'moderate'],
    [0.05, 'کم‌بینایی شدید', 'severe'], [0, 'نابینایی', 'blindness']];
  const HL = [[15, 'شنوایی طبیعی', 'normal'], [25, 'کم‌شنوایی بسیار خفیف', 'slight'], [40, 'کم‌شنوایی خفیف', 'mild'], [55, 'کم‌شنوایی متوسط', 'moderate'],
    [70, 'کم‌شنوایی متوسط تا شدید', 'moderately severe'], [90, 'کم‌شنوایی شدید', 'severe'], [999, 'کم‌شنوایی عمیق', 'profound']];
  const cell = (tt, b, s) => `<div class="va__c"><span>${tt}</span><b>${b}</b>${s ? `<small>${s}</small>` : ''}</div>`;
  function vaOut() {
    const d = dec();
    if (!isFinite(d)) return '<p class="va__note">صورت و مخرج کسر اسنلن را بنویس؛ مثلاً 20/40 یا 6/12.</p>';
    const lm = Math.log10(1 / d), g = VA.find(r => d >= r[0] - 1e-9) || VA[VA.length - 1];
    const legal = parseFloat(st.num) === 20 && parseFloat(st.den) >= 200;
    return `<div class="va__out">${cell('حدت اعشاری', `<bdi dir="ltr">${d.toFixed(2)}</bdi>`, `<bdi dir="ltr">${EA.ui.esc(st.num)}/${EA.ui.esc(st.den)}</bdi>`)}${cell('logMAR', `<bdi dir="ltr">${lm.toFixed(2)}</bdi>`, 'هرچه کمتر، بهتر؛ صفر یعنی 20/20')}${cell('درجه', g[1], `<bdi dir="ltr">${g[2]}</bdi>`)}</div>
      <p class="va__note">${parseFloat(st.num) === 20 ? `کسی که دید 20/${fa(EA.ui.esc(st.den))} دارد، از ۲۰ فوتی چیزی را می‌بیند که چشم سالم از ${fa(EA.ui.esc(st.den))} فوتی می‌بیند.` : 'در سیستم متری، 6/6 همان 20/20 است.'}${legal ? ' در آمریکا دید 20/200 یا بدتر با بهترین اصلاح «نابینایی قانونی» است.' : ''}</p>`;
  }
  function hlOut() {
    const v = parseFloat(st.db);
    if (!isFinite(v)) return '<p class="va__note">آستانه شنوایی را به دسی‌بل (dB HL) بنویس.</p>';
    const g = HL.find(r => v <= r[0]);
    return `<div class="va__out">${cell('آستانه', `<bdi dir="ltr">${v} dB HL</bdi>`, '')}${cell('درجه کم‌شنوایی', g[1], `<bdi dir="ltr">${g[2]}</bdi>`)}</div>`;
  }
  const field = (key, label, ph) => `<label class="va__in"><span>${label}</span><input type="number" inputmode="decimal" min="0" data-keep="${key}" data-va="${key}" value="${EA.ui.esc(st[key])}" placeholder="${ph}" autocomplete="off"></label>`;
  EA.APP.extraTool = {
    id: 'va', sym: 'VA', name: 'بینایی‌سنج و شنوایی‌سنج', color: '#1E88A8',
    /* برای آزمون: حدت اعشاری × ۱۰۰ */
    value: () => { const d = dec(); return isFinite(d) ? Math.round(d * 100) : 0; },
    pane: () => `<div class="tpane"><p class="muted">کسر اسنلن را بنویس: صورت فاصله آزمون است (۲۰ فوت یا ۶ متر) و مخرج فاصله‌ای که چشم سالم همان ردیف را می‌خواند.</p>
    <div class="va">${field('num', 'صورت (فاصله آزمون)', '20')}<b class="va__slash">/</b>${field('den', 'مخرج (ردیف خوانده‌شده)', '40')}</div>
    <div class="va__res" aria-live="polite">${vaOut()}</div>
    ${EA.ui.figCard({ a: ['snellen-art'], l: ['چارت اسنلن'] })}
    <h4 class="va__h">شنوایی‌سنج: آستانه ادیوگرام</h4>
    <div class="va">${field('db', 'میانگین آستانه شنوایی (dB HL)', '35')}</div>
    <div class="va__hl" aria-live="polite">${hlOut()}</div>
    <table class="mini"><tr><th>آستانه (dB HL)</th><th>درجه</th></tr>
      <tr><td><bdi dir="ltr">-10 – 15</bdi></td><td>طبیعی</td></tr><tr><td><bdi dir="ltr">16 – 25</bdi></td><td>بسیار خفیف</td></tr>
      <tr><td><bdi dir="ltr">26 – 40</bdi></td><td>خفیف</td></tr><tr><td><bdi dir="ltr">41 – 55</bdi></td><td>متوسط</td></tr>
      <tr><td><bdi dir="ltr">56 – 70</bdi></td><td>متوسط تا شدید</td></tr><tr><td><bdi dir="ltr">71 – 90</bdi></td><td>شدید</td></tr><tr><td><bdi dir="ltr">91+</bdi></td><td>عمیق</td></tr></table>
    <p class="muted">درجه‌بندی‌ها آموزشی‌اند؛ تشخیص با معاینه کامل چشم‌پزشک و ادیومتری شنوایی‌شناس است.</p></div>`,
    input: (e, el) => {
      const k = e.target.dataset && e.target.dataset.va;
      if (!k) return false;
      st[k] = e.target.value;
      const set = (s, h) => { const o = el.querySelector(s); if (o) o.innerHTML = h; };
      set('.va__res', vaOut()); set('.va__hl', hlOut());
      return false;
    },
    /* آزمون دود: 20/40 ← حدت اعشاری 0.5 ← ۵۰ */
    test: { fill: [['[data-va="num"]', '20'], ['[data-va="den"]', '40'], ['[data-va="db"]', '48']], expect: 50 }
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
/* حِسّا — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از apps/hessa/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["accommodation", "ah-kom-oh-DAY-shun", "Automatic change in the shape of the lens to focus on near or far objects.", "تطابق", "ey", "phys", ["Acc"]],
["achromatopsia", "ah-kroh-mah-TOP-see-ah", "Color blindness (a- = without, chromat/o = color, -opsia = vision).", "کوررنگی", "vd", "dz", []],
["acoustic", "ah-KOOS-tik", "Pertaining to sound or hearing (acous/o, acoust/o).", "صوتی، شنوایی", "lx", "body", []],
["acoustic neuroma", "ah-KOOS-tik noo-ROH-mah", "Benign tumor of the eighth cranial nerve that causes one-sided hearing loss.", "نوروم آکوستیک", "hd", "dz", []],
["ageusia", "ah-GOO-see-ah", "Loss of the sense of taste (a- = without, geus/o = taste).", "از دست رفتن چشایی", "lx", "sx", []],
["air conduction", "AIR kon-DUK-shun", "Sound carried through the ear canal, eardrum and ossicles to the inner ear.", "هدایت هوایی", "er", "phys", ["AC"]],
["amblyopia", "am-blee-OH-pee-ah", "Dull vision in one eye that is used less; lazy eye (ambly/o = dull).", "تنبلی چشم", "vd", "dz", []],
["anacusis", "an-ah-KYOO-sis", "Total deafness (an- = without).", "ناشنوایی کامل", "hd", "dz", []],
["anisocoria", "an-eye-soh-KOH-ree-ah", "Pupils of unequal size (anis/o = unequal, cor/o = pupil).", "ناهمسانی مردمک‌ها", "vd", "sx", []],
["anosmia", "an-OZ-mee-ah", "Loss of the sense of smell (an- = without, osm/o = smell).", "از دست رفتن بویایی", "lx", "sx", []],
["anterior chamber", "an-TEER-ee-or CHAYM-ber", "Space between the cornea and the iris, filled with aqueous humor.", "اتاق قدامی", "ey", "body", []],
["antibiotic ear drops", "an-tih-bye-OT-ik EER DROPS", "Drops placed in the ear canal to treat bacterial infection.", "قطره آنتی‌بیوتیک گوش", "tx", "tx", []],
["aqueous humor", "AY-kwee-us HYOO-mor", "Watery fluid in the front of the eye between the cornea and lens.", "زلالیه", "ey", "body", []],
["astigmatism", "ah-STIG-mah-tizm", "Blurred vision from an irregular curve of the cornea or lens.", "آستیگماتیسم", "vd", "dz", ["Ast", "AST"]],
["audiogram", "AW-dee-oh-gram", "Graph of the results of a hearing test.", "ادیوگرام", "tx", "lab", []],
["audiologist", "aw-dee-OL-oh-jist", "Specialist who measures hearing and treats hearing impairment.", "شنوایی‌شناس", "lx", "field", []],
["audiology", "aw-dee-OL-oh-jee", "Specialty dealing with hearing and hearing disorders (audi/o = hearing, sound).", "شنوایی‌شناسی", "lx", "field", []],
["audiometer", "aw-dee-OM-eh-ter", "Instrument for measuring hearing.", "ادیومتر", "tx", "lab", []],
["audiometry", "aw-dee-OM-eh-tree", "Measurement of hearing at different pitches and loudness levels.", "ادیومتری (شنوایی‌سنجی)", "tx", "lab", []],
["auditory", "AW-dih-tor-ee", "Pertaining to hearing (audit/o, audi/o).", "شنوایی", "lx", "body", []],
["auditory brainstem response", "AW-dih-tor-ee BRAYN-stem ree-SPONS", "Test of nerve responses of the hearing pathway to sound; also brainstem auditory evoked potentials.", "پاسخ شنوایی ساقه مغز", "tx", "lab", ["ABR", "BAEP"]],
["auditory cortex", "AW-dih-tor-ee KOR-teks", "Area of the temporal lobe that interprets sound.", "قشر شنوایی", "er", "body", []],
["auditory ossicles", "AW-dih-tor-ee OS-ih-kulz", "Three tiny bones of the middle ear: malleus, incus and stapes.", "استخوانچه‌های شنوایی", "er", "body", []],
["aural", "AW-ral", "Pertaining to the ear (aur/o = ear).", "گوشی", "lx", "body", []],
["aural fullness", "AW-ral FUL-nes", "Feeling of pressure or fullness in the ear.", "احساس پری گوش", "hd", "sx", []],
["auricle", "AW-rih-kul", "The visible outer ear; also called pinna (auricul/o, pinn/i).", "لاله گوش", "er", "body", []],
["auricular", "aw-RIK-yoo-lar", "Pertaining to the auricle or ear (auricul/o).", "مربوط به لاله گوش", "er", "body", []],
["auris dextra", "AW-ris DEKS-trah", "Latin for right ear.", "گوش راست", "lx", "body", ["AD"]],
["auris sinistra", "AW-ris sin-IS-trah", "Latin for left ear.", "گوش چپ", "lx", "body", ["AS"]],
["auris uterque", "AW-ris yoo-TER-kweh", "Latin for both ears or each ear.", "هر دو گوش", "lx", "body", ["AU"]],
["barotrauma", "bair-oh-TRAW-mah", "Injury to the ear from a sudden change in air pressure (bar/o = pressure).", "باروتروما", "hd", "dz", []],
["binocular vision", "bye-NOK-yoo-lar VIZH-un", "Use of both eyes together to see one image with depth.", "دید دوچشمی", "ey", "phys", []],
["blepharitis", "blef-ah-RYE-tis", "Inflammation of the eyelid (blephar/o = eyelid).", "التهاب پلک", "lx", "dz", []],
["blepharoplasty", "BLEF-ah-roh-plas-tee", "Surgical repair of the eyelid, e.g. for drooping lids.", "جراحی پلک", "tx", "tx", []],
["blepharoptosis", "blef-ah-rop-TOH-sis", "Drooping of the upper eyelid (-ptosis = drooping).", "افتادگی پلک", "vd", "dz", []],
["blindness", "BLYND-nes", "Loss of useful sight.", "نابینایی", "vd", "dz", []],
["bone conduction", "BOHN kon-DUK-shun", "Sound carried through the bones of the skull directly to the inner ear.", "هدایت استخوانی", "er", "phys", ["BC"]],
["canal of Schlemm", "kah-NAL ov SHLEM", "Channel at the angle of the anterior chamber through which aqueous humor drains.", "کانال شلم", "ey", "body", []],
["canthus", "KAN-thus", "Corner of the eye where the upper and lower eyelids meet; medial or lateral.", "گوشه چشم", "ey", "body", []],
["cataract", "KAT-ah-rakt", "Clouding of the lens that causes gradual loss of vision.", "آب مروارید", "vd", "dz", []],
["cerumen", "seh-ROO-men", "Earwax made by glands in the ear canal; protects the ear.", "جرم گوش", "er", "body", []],
["chalazion", "kah-LAY-zee-on", "Painless cyst of a meibomian gland in the eyelid.", "شالازیون", "vd", "dz", []],
["cholesteatoma", "koh-lee-stee-ah-TOH-mah", "Cyst-like mass of skin cells growing in the middle ear.", "کلستئاتوما", "hd", "dz", []],
["choroid", "KOH-royd", "Vascular layer of the uvea that nourishes the retina (choroid/o).", "مشیمیه", "ey", "body", []],
["ciliary body", "SIL-ee-air-ee BOD-ee", "Part of the uvea whose muscles change the shape of the lens and that makes aqueous humor.", "جسم مژگانی", "ey", "body", []],
["cochlea", "KOK-lee-ah", "Snail-shaped part of the inner ear that contains the organ of hearing (cochle/o).", "حلزون گوش", "er", "body", []],
["cochlear", "KOK-lee-ar", "Pertaining to the cochlea (cochle/o).", "حلزونی", "er", "body", []],
["cochlear implant", "KOK-lee-ar IM-plant", "Device that sends electrical signals straight to the auditory nerve in deep hearing loss.", "کاشت حلزون", "tx", "tx", []],
["color vision test", "KUL-or VIZH-un TEST", "Test with colored dot plates (Ishihara) to detect color blindness.", "آزمون دید رنگی", "tx", "lab", []],
["conductive hearing loss", "kon-DUK-tiv HEER-ing LOS", "Hearing loss when sound cannot pass through the outer or middle ear.", "کم‌شنوایی انتقالی", "hd", "dz", []],
["cones", "KOHNZ", "Retinal receptors that give color and sharp vision in bright light.", "مخروط‌ها", "ey", "phys", []],
["conjunctiva", "kon-junk-TYE-vah", "Thin mucous membrane lining the eyelids and covering the front of the eye (conjunctiv/o).", "ملتحمه", "ey", "body", []],
["conjunctival", "kon-junk-TYE-val", "Pertaining to the conjunctiva (conjunctiv/o).", "ملتحمه‌ای", "ey", "body", []],
["conjunctivitis", "kon-junk-tih-VYE-tis", "Inflammation of the conjunctiva; pinkeye.", "التهاب ملتحمه", "vd", "dz", []],
["convergence", "kon-VER-jens", "Inward turning of both eyes to look at a near object.", "همگرایی", "ey", "phys", []],
["cornea", "KOR-nee-ah", "Clear front part of the outer layer that bends light into the eye (corne/o, kerat/o).", "قرنیه", "ey", "body", []],
["corneal", "KOR-nee-al", "Pertaining to the cornea (corne/o).", "قرنیه‌ای", "ey", "body", []],
["corneal abrasion", "KOR-nee-al ah-BRAY-zhun", "Scratch on the surface of the cornea.", "خراش قرنیه", "vd", "dz", []],
["corrective lenses", "koh-REK-tiv LENZ-ez", "Eyeglasses or contact lenses that correct refractive errors.", "عدسی اصلاحی", "tx", "tx", []],
["dacryoadenitis", "dak-ree-oh-ad-eh-NYE-tis", "Inflammation of the lacrimal gland (aden/o = gland).", "التهاب غده اشکی", "vd", "dz", []],
["dacryocystitis", "dak-ree-oh-sis-TYE-tis", "Inflammation of the lacrimal sac (dacry/o + cyst/o).", "التهاب کیسه اشکی", "vd", "dz", []],
["dacryocystorhinostomy", "dak-ree-oh-sis-toh-rye-NOS-toh-mee", "New opening between the lacrimal sac and the nose to drain tears.", "داکریوسیستورینوستومی", "tx", "tx", []],
["dacryorrhea", "dak-ree-oh-REE-ah", "Excessive discharge of tears (dacry/o = tears).", "اشک‌ریزی زیاد", "lx", "sx", []],
["deafness", "DEF-nes", "Complete or partial loss of hearing.", "ناشنوایی", "hd", "dz", []],
["decibel", "DES-ih-bel", "Unit that measures the loudness (intensity) of sound.", "دسی‌بل", "er", "phys", ["dB"]],
["diabetic retinopathy", "dye-ah-BET-ik ret-ih-NOP-ah-thee", "Damage to retinal blood vessels caused by diabetes (-pathy = disease).", "رتینوپاتی دیابتی", "vd", "dz", []],
["diopter", "dye-OP-ter", "Unit that measures the refractive power of a lens.", "دیوپتر", "ey", "phys", ["D"]],
["diplopia", "dih-PLOH-pee-ah", "Double vision (dipl/o = double, -opia = vision).", "دوبینی", "lx", "sx", []],
["ear irrigation", "EER ir-ih-GAY-shun", "Washing the ear canal with water to remove wax.", "شست‌وشوی گوش", "tx", "tx", []],
["ectropion", "ek-TROH-pee-on", "Eyelid turned outward, away from the eyeball.", "برگشتگی پلک به بیرون", "vd", "dz", []],
["electronystagmography", "ee-lek-troh-nis-tag-MOG-rah-fee", "Recording of eye movements to test the balance system.", "الکترونیستاگموگرافی", "tx", "lab", ["ENG"]],
["emmetropia", "em-eh-TROH-pee-ah", "Normal refraction: light focuses exactly on the retina.", "بینایی طبیعی (امتروپی)", "ey", "phys", ["Em"]],
["entropion", "en-TROH-pee-on", "Eyelid turned inward so lashes rub the eyeball.", "برگشتگی پلک به درون", "vd", "dz", []],
["enucleation", "ee-noo-klee-AY-shun", "Surgical removal of the whole eyeball.", "تخلیه کره چشم", "tx", "tx", []],
["equilibrium", "ee-kwih-LIB-ree-um", "Sense of balance, controlled by the vestibule and semicircular canals.", "تعادل", "er", "phys", []],
["esotropia", "es-oh-TROH-pee-ah", "Strabismus with one eye turning inward; cross-eye (eso- = inward).", "انحراف چشم به داخل", "vd", "dz", ["ET", "ST"]],
["eustachian tube", "yoo-STAY-shun TOOB", "Auditory tube from the middle ear to the nasopharynx that equalizes pressure (salping/o).", "شیپور استاش", "er", "body", []],
["exophthalmos", "eks-off-THAL-mos", "Bulging of the eyeballs, often from thyroid disease.", "بیرون‌زدگی چشم", "vd", "sx", []],
["exotropia", "eks-oh-TROH-pee-ah", "Strabismus with one eye turning outward; walleye (exo- = outward).", "انحراف چشم به خارج", "vd", "dz", ["XT"]],
["external auditory meatus", "eks-TER-nal AW-dih-tor-ee mee-AY-tus", "Ear canal leading from the auricle to the eardrum.", "مجرای شنوایی خارجی", "er", "body", []],
["external ear", "eks-TER-nal EER", "Outer ear: the auricle and the external auditory canal up to the eardrum.", "گوش بیرونی", "er", "body", []],
["extracapsular cataract extraction", "eks-trah-KAP-soo-lar KAT-ah-rakt eks-TRAK-shun", "Removal of the lens leaving the back of its capsule in place.", "خارج کردن آب مروارید خارج‌کپسولی", "tx", "tx", ["ECCE"]],
["extraocular muscles", "eks-trah-OK-yoo-lar MUS-elz", "Six muscles outside the eyeball that move the eye.", "عضلات خارج‌چشمی", "ey", "body", ["EOM"]],
["eye patching", "EYE PACH-ing", "Covering the strong eye to make the lazy eye work harder in amblyopia.", "چشم‌بند درمانی", "tx", "tx", []],
["eyeball", "EYE-bawl", "The globe of the eye, lying in the bony orbit; its wall has three layers.", "کره چشم", "ey", "body", []],
["eyelid", "EYE-lid", "Movable fold that covers and protects the eye; palpebra (blephar/o, palpebr/o).", "پلک", "ey", "body", []],
["fluorescein angiography", "floo-oh-RES-ee-in an-jee-OG-rah-fee", "Photographs of retinal vessels after a dye is injected into a vein.", "آنژیوگرافی فلورسئین", "tx", "lab", ["IVFA"]],
["fovea centralis", "FOH-vee-ah sen-TRAH-lis", "Pit in the center of the macula, packed with cones; point of sharpest vision.", "گودال مرکزی (فووئا)", "ey", "body", []],
["glaucoma", "glaw-KOH-mah", "Disease with raised intraocular pressure that damages the optic nerve and can cause blindness.", "آب سیاه (گلوکوم)", "vd", "dz", ["IOP"]],
["gustation", "gus-TAY-shun", "The sense of taste (gustat/o, geus/o = taste).", "چشایی", "lx", "phys", []],
["hair cells", "HAIR SELZ", "Sensory cells of the cochlea and vestibule that respond to movement of fluid.", "یاخته‌های مویی", "er", "phys", []],
["hearing", "HEER-ing", "Sense that perceives sound; audition.", "شنوایی", "er", "phys", []],
["hearing aid", "HEER-ing AYD", "Device that makes sound louder for a person with hearing loss.", "سمعک", "tx", "tx", []],
["hearing loss", "HEER-ing LOS", "Partial or total inability to hear.", "کم‌شنوایی", "hd", "dz", ["HL"]],
["hemianopia", "hem-ee-ah-NOH-pee-ah", "Blindness in half of the visual field.", "همی‌آنوپی (نیم‌کوری)", "vd", "sx", []],
["hertz", "HERTS", "Unit that measures the frequency (pitch) of sound.", "هرتز", "er", "phys", ["Hz"]],
["hordeolum", "hor-DEE-oh-lum", "Infection of an oil gland at the edge of the eyelid; sty.", "گل‌مژه", "vd", "dz", []],
["hyperacusis", "hye-per-ah-KYOO-sis", "Abnormally sensitive hearing; normal sounds seem too loud.", "پرشنوایی", "hd", "sx", []],
["hyperopia", "hye-per-OH-pee-ah", "Farsightedness: image falls behind the retina, so near objects are blurred.", "دوربینی", "vd", "dz", []],
["impacted cerumen", "im-PAK-ted seh-ROO-men", "Earwax packed in the ear canal, which can block hearing.", "جرم فشرده گوش", "hd", "dz", []],
["incus", "ING-kus", "Anvil; middle ossicle between the malleus and stapes.", "سندانی", "er", "body", []],
["inner ear", "IN-er EER", "Labyrinth in the temporal bone with the cochlea, vestibule and semicircular canals.", "گوش درونی", "er", "body", []],
["intraocular", "in-trah-OK-yoo-lar", "Within the eye (intra- = within).", "داخل چشمی", "ey", "body", []],
["intraocular lens", "in-trah-OK-yoo-lar LENZ", "Artificial lens placed in the eye after cataract removal.", "لنز داخل چشمی", "tx", "tx", ["IOL"]],
["intraocular pressure", "in-trah-OK-yoo-lar PRESH-er", "Pressure of the fluid inside the eye.", "فشار داخل چشم", "tx", "lab", ["IOP"]],
["iridectomy", "ir-ih-DEK-toh-mee", "Removal of part of the iris, often for glaucoma.", "ایریدکتومی", "tx", "tx", []],
["iris", "EYE-ris", "Colored muscular ring that controls the size of the pupil (ir/o, irid/o).", "عنبیه", "ey", "body", []],
["iritis", "eye-RYE-tis", "Inflammation of the iris (ir/o, irid/o = iris).", "التهاب عنبیه", "lx", "dz", []],
["keratitis", "kair-ah-TYE-tis", "Inflammation of the cornea (kerat/o = cornea).", "التهاب قرنیه", "lx", "dz", []],
["keratoplasty", "KAIR-ah-toh-plas-tee", "Surgical repair of the cornea; corneal transplant.", "پیوند قرنیه", "tx", "tx", []],
["labyrinth", "LAB-ih-rinth", "Maze of canals of the inner ear for hearing and balance (labyrinth/o).", "لابیرنت (هزارتو)", "er", "body", []],
["labyrinthectomy", "lab-ih-rin-THEK-toh-mee", "Removal of the labyrinth to stop severe vertigo.", "لابیرنتکتومی", "tx", "tx", []],
["labyrinthitis", "lab-ih-rin-THYE-tis", "Inflammation of the labyrinth, causing vertigo.", "التهاب لابیرنت", "hd", "dz", []],
["lacrimal", "LAK-rih-mal", "Pertaining to tears (lacrim/o).", "اشکی", "ey", "body", []],
["lacrimal apparatus", "LAK-rih-mal ap-ah-RAT-us", "Structures that make and drain tears: gland, canals, sac and nasolacrimal duct.", "دستگاه اشکی", "ey", "body", []],
["lacrimal gland", "LAK-rih-mal GLAND", "Gland above the outer corner of the eye that makes tears (lacrim/o, dacry/o).", "غده اشکی", "ey", "body", []],
["LASIK", "LAY-sik", "Laser-assisted in situ keratomileusis: a laser reshapes the cornea under a flap.", "لیزیک", "tx", "tx", ["LASIK"]],
["lens", "LENZ", "Clear, flexible structure behind the pupil that focuses light on the retina (phac/o, phak/o).", "عدسی", "ey", "body", []],
["macula lutea", "MAK-yoo-lah LOO-tee-ah", "Yellow oval area of the retina around the fovea, used for central vision.", "ماکولا (لکه زرد)", "ey", "body", []],
["macular degeneration", "MAK-yoo-lar dee-jen-er-AY-shun", "Breakdown of the macula with loss of central vision, usually with age.", "دژنراسیون ماکولا", "vd", "dz", ["AMD", "ARMD"]],
["malleus", "MAL-ee-us", "Hammer; first ossicle, attached to the eardrum (malle/o).", "چکشی", "er", "body", []],
["mastoid process", "MAS-toyd PROS-es", "Bony bump of the temporal bone behind the ear, with air cells (mastoid/o).", "زائده ماستوئید", "er", "body", []],
["mastoidal", "mas-TOYD-al", "Pertaining to the mastoid process (mastoid/o).", "ماستوئیدی", "er", "body", []],
["mastoidectomy", "mas-toyd-EK-toh-mee", "Surgical removal of mastoid air cells.", "ماستوئیدکتومی", "tx", "tx", []],
["mastoiditis", "mas-toyd-EYE-tis", "Inflammation of the mastoid air cells.", "التهاب ماستوئید", "hd", "dz", []],
["meibomian gland", "my-BOH-mee-an GLAND", "Oil gland in the eyelid that lubricates the edge of the lid.", "غده میبومین", "ey", "body", []],
["Meniere disease", "men-ee-AIR dih-ZEEZ", "Inner ear disease with attacks of vertigo, tinnitus and hearing loss.", "بیماری منیر", "hd", "dz", []],
["middle ear", "MID-el EER", "Air-filled cavity behind the eardrum that holds the ossicles; tympanic cavity.", "گوش میانی", "er", "body", []],
["miosis", "my-OH-sis", "Constriction of the pupil.", "تنگی مردمک", "vd", "sx", []],
["miotic", "my-OT-ik", "Drug that constricts the pupil; used in glaucoma.", "داروی تنگ‌کننده مردمک", "tx", "tx", []],
["motion sickness", "MOH-shun SIK-nes", "Nausea and dizziness from movement that confuses the balance organs.", "بیماری حرکت", "hd", "dz", []],
["mydriasis", "mih-DRYE-ah-sis", "Dilation of the pupil.", "گشادی مردمک", "vd", "sx", []],
["mydriatic", "mid-ree-AT-ik", "Drug that dilates the pupil for eye examination.", "داروی گشادکننده مردمک", "tx", "tx", []],
["myopia", "my-OH-pee-ah", "Nearsightedness: image falls in front of the retina, so distant objects are blurred.", "نزدیک‌بینی", "vd", "dz", ["MY", "Myop"]],
["myringitis", "mir-in-JYE-tis", "Inflammation of the eardrum; also called tympanitis (myring/o = eardrum).", "التهاب پرده گوش", "lx", "dz", []],
["myringoplasty", "mir-IN-goh-plas-tee", "Surgical repair of the eardrum.", "میرنگوپلاستی", "tx", "tx", []],
["myringotomy", "mir-in-GOT-oh-mee", "Incision of the eardrum to drain fluid, often with tube placement.", "میرنگوتومی (برش پرده گوش)", "tx", "tx", []],
["nasolacrimal duct", "nay-zoh-LAK-rih-mal DUKT", "Duct that carries tears from the lacrimal sac into the nose.", "مجرای اشکی-بینی", "ey", "body", []],
["noise-induced hearing loss", "NOYZ in-DOOST HEER-ing LOS", "Hearing loss caused by long exposure to loud sound.", "کم‌شنوایی ناشی از سروصدا", "hd", "dz", []],
["nyctalopia", "nik-tah-LOH-pee-ah", "Night blindness (nyct/o = night).", "شب‌کوری", "vd", "sx", []],
["nystagmus", "nis-TAG-mus", "Involuntary, rhythmic back-and-forth movement of the eyes.", "نیستاگموس (لرزش چشم)", "vd", "sx", []],
["ocular", "OK-yoo-lar", "Pertaining to the eye (ocul/o = eye).", "چشمی", "lx", "body", []],
["oculodynia", "ok-yoo-loh-DIN-ee-ah", "Pain in the eye (ocul/o = eye, -dynia = pain).", "درد چشم", "lx", "sx", []],
["oculus dexter", "OK-yoo-lus DEKS-ter", "Latin for right eye.", "چشم راست", "lx", "body", ["OD"]],
["oculus sinister", "OK-yoo-lus SIN-is-ter", "Latin for left eye.", "چشم چپ", "lx", "body", ["OS"]],
["oculus uterque", "OK-yoo-lus yoo-TER-kweh", "Latin for both eyes or each eye.", "هر دو چشم", "lx", "body", ["OU"]],
["olfaction", "ol-FAK-shun", "The sense of smell (olfact/o = smell).", "بویایی", "lx", "phys", []],
["ophthalmalgia", "off-thal-MAL-jee-ah", "Pain in the eye; also called ophthalmodynia or oculodynia.", "درد چشم", "lx", "sx", []],
["ophthalmic", "off-THAL-mik", "Pertaining to the eye (ophthalm/o), as in ophthalmic drops.", "چشمی", "ey", "body", []],
["ophthalmologist", "off-thal-MOL-oh-jist", "Physician who diagnoses and treats eye diseases, including surgery.", "چشم‌پزشک", "lx", "field", []],
["ophthalmology", "off-thal-MOL-oh-jee", "Branch of medicine that studies and treats the eye (ophthalm/o = eye).", "چشم‌پزشکی", "lx", "field", ["Ophth"]],
["ophthalmoscope", "off-THAL-moh-skohp", "Lighted instrument for looking at the retina through the pupil.", "افتالموسکوپ", "tx", "lab", []],
["ophthalmoscopy", "off-thal-MOS-koh-pee", "Examination of the inside of the eye with an ophthalmoscope.", "افتالموسکوپی (معاینه ته چشم)", "tx", "lab", []],
["optic", "OP-tik", "Pertaining to the eye or to vision (opt/o).", "بینایی، چشمی", "lx", "body", []],
["optic disc", "OP-tik DISK", "Point where the optic nerve leaves the retina; has no receptors, so it is the blind spot.", "صفحه بینایی (نقطه کور)", "ey", "body", []],
["optic nerve", "OP-tik NERV", "Second cranial nerve; carries visual impulses from the retina to the brain.", "عصب بینایی", "ey", "body", []],
["optician", "op-TISH-un", "Technician who fills eyeglass prescriptions and fits eyewear.", "عینک‌ساز", "lx", "field", []],
["optometrist", "op-TOM-eh-trist", "Doctor of optometry who examines the eyes and prescribes corrective lenses (opt/o = vision, -metry = measurement).", "اپتومتریست (بینایی‌سنج)", "lx", "field", ["OD"]],
["orbit", "OR-bit", "Bony cavity of the skull that holds the eyeball; eye socket.", "حدقه (کاسه چشم)", "ey", "body", []],
["organ of Corti", "OR-gan ov KOR-tee", "Hearing receptor in the cochlea with hair cells that turn vibrations into nerve impulses.", "اندام کورتی", "er", "body", []],
["otalgia", "oh-TAL-jee-ah", "Pain in the ear; earache; also called otodynia.", "گوش‌درد", "lx", "sx", []],
["otic", "OH-tik", "Pertaining to the ear; e.g. otic drops.", "گوشی (داروی گوش)", "tx", "tx", []],
["otitis", "oh-TYE-tis", "Any inflammation of the ear.", "التهاب گوش", "lx", "dz", []],
["otitis externa", "oh-TYE-tis eks-TER-nah", "Inflammation of the outer ear canal; swimmer's ear.", "التهاب گوش بیرونی", "hd", "dz", ["OE"]],
["otitis interna", "oh-TYE-tis in-TER-nah", "Inflammation of the inner ear; labyrinthitis.", "التهاب گوش درونی", "hd", "dz", []],
["otitis media", "oh-TYE-tis MEE-dee-ah", "Inflammation of the middle ear, common in children.", "التهاب گوش میانی", "hd", "dz", ["OM"]],
["otodynia", "oh-toh-DIN-ee-ah", "Pain in the ear (ot/o = ear, -dynia = pain).", "گوش‌درد", "lx", "sx", []],
["otologist", "oh-TOL-oh-jist", "Specialist who diagnoses and treats diseases of the ear.", "متخصص گوش", "lx", "field", []],
["otology", "oh-TOL-oh-jee", "Study of the ear and its diseases (ot/o = ear).", "گوش‌شناسی", "lx", "field", ["Oto"]],
["otoplasty", "OH-toh-plas-tee", "Surgical repair or reshaping of the auricle.", "جراحی لاله گوش", "tx", "tx", []],
["otopyorrhea", "oh-toh-pye-oh-REE-ah", "Discharge of pus from the ear (py/o = pus).", "چرک‌ریزی گوش", "hd", "sx", []],
["otorhinolaryngologist", "oh-toh-rye-noh-lair-in-GOL-oh-jist", "Physician who treats diseases of the ear, nose and throat (ot/o + rhin/o + laryng/o).", "متخصص گوش، حلق و بینی", "lx", "field", ["ENT", "ORL"]],
["otorrhagia", "oh-toh-RAY-jee-ah", "Bleeding from the ear (-rrhagia = bursting forth of blood).", "خونریزی از گوش", "hd", "sx", []],
["otorrhea", "oh-toh-REE-ah", "Discharge from the ear (ot/o = ear, -rrhea = discharge).", "ترشح از گوش", "lx", "sx", []],
["otosclerosis", "oh-toh-skleh-ROH-sis", "Hardening of bone around the stapes so it cannot vibrate; causes conductive hearing loss.", "اتواسکلروز", "hd", "dz", []],
["otoscope", "OH-toh-skohp", "Lighted instrument with lenses for looking into the ear.", "اتوسکوپ", "tx", "lab", []],
["otoscopy", "oh-TOS-koh-pee", "Examination of the ear canal and eardrum with an otoscope.", "اتوسکوپی", "tx", "lab", []],
["oval window", "OH-val WIN-doh", "Opening between the middle and inner ear covered by the base of the stapes.", "دریچه بیضی", "er", "body", []],
["palpebral", "PAL-peh-bral", "Pertaining to the eyelid (palpebr/o).", "پلکی", "ey", "body", []],
["perforated tympanic membrane", "PER-foh-ray-ted tim-PAN-ik MEM-brayn", "Hole or tear in the eardrum.", "پارگی پرده گوش", "hd", "dz", []],
["peripheral vision", "peh-RIF-er-al VIZH-un", "Vision at the outer edges of the visual field.", "دید محیطی", "ey", "phys", []],
["PERRLA", "PER-lah", "Pupils equal, round, reactive to light and accommodation; a normal pupil exam.", "مردمک‌های طبیعی (PERRLA)", "tx", "lab", ["PERRLA"]],
["phacoemulsification", "fak-oh-ee-mul-sih-fih-KAY-shun", "Cataract surgery that breaks up the lens with ultrasound and suctions it out.", "فیکوامولسیفیکاسیون", "tx", "tx", []],
["photophobia", "foh-toh-FOH-bee-ah", "Abnormal sensitivity to or fear of light (phot/o = light, -phobia = fear).", "نورگریزی", "vd", "sx", []],
["photoreceptor", "foh-toh-ree-SEP-tor", "Light-sensitive cell of the retina: a rod or a cone (phot/o = light).", "گیرنده نوری", "ey", "phys", []],
["photorefractive keratectomy", "foh-toh-ree-FRAK-tiv kair-ah-TEK-toh-mee", "Laser removal of corneal tissue from the surface to reshape it.", "PRK (برداشت لیزری سطح قرنیه)", "tx", "tx", ["PRK"]],
["presbycusis", "prez-bih-KYOO-sis", "Gradual hearing loss with age (presby/o = old age, -cusis = hearing).", "پیرگوشی", "hd", "dz", []],
["presbyopia", "prez-bee-OH-pee-ah", "Loss of near focusing with age as the lens hardens (presby/o = old age).", "پیرچشمی", "vd", "dz", []],
["pressure-equalizing tube", "PRESH-er EE-kwah-lye-zing TOOB", "Small tube placed in the eardrum to drain the middle ear and equalize pressure.", "لوله تهویه گوش", "tx", "tx", ["PE tube"]],
["pupil", "PYOO-pil", "Opening in the center of the iris through which light enters (pupill/o, cor/o).", "مردمک", "ey", "body", []],
["pupillary", "PYOO-pih-lair-ee", "Pertaining to the pupil (pupill/o), as in the pupillary reflex.", "مردمکی", "ey", "body", []],
["radial keratotomy", "RAY-dee-al kair-ah-TOT-oh-mee", "Spoke-like cuts in the cornea to flatten it and correct myopia.", "کراتوتومی شعاعی", "tx", "tx", ["RK"]],
["refraction", "ree-FRAK-shun", "Bending of light rays by the cornea and lens to focus an image on the retina.", "انکسار نور", "ey", "phys", []],
["refraction test", "ree-FRAK-shun TEST", "Test that finds the lens power needed to correct vision.", "آزمون انکسار", "tx", "lab", []],
["refractive error", "ree-FRAK-tiv AIR-or", "Defect in focusing light on the retina: myopia, hyperopia, astigmatism or presbyopia.", "عیب انکساری", "vd", "dz", []],
["retina", "RET-ih-nah", "Inner layer of the eye that contains the light receptors, rods and cones (retin/o).", "شبکیه", "ey", "body", []],
["retinal", "RET-ih-nal", "Pertaining to the retina (retin/o).", "شبکیه‌ای", "ey", "body", []],
["retinal detachment", "RET-ih-nal dee-TACH-ment", "Separation of the retina from the choroid; feels like a curtain over vision.", "جداشدگی شبکیه", "vd", "dz", ["RD"]],
["retinitis", "ret-ih-NYE-tis", "Inflammation of the retina (retin/o = retina).", "التهاب شبکیه", "lx", "dz", []],
["retinoblastoma", "ret-ih-noh-blas-TOH-mah", "Malignant tumor of the retina in young children.", "رتینوبلاستوما", "vd", "dz", []],
["retinopathy of prematurity", "ret-ih-NOP-ah-thee ov pree-mah-CHOOR-ih-tee", "Abnormal growth of retinal vessels in premature infants.", "رتینوپاتی نوزاد نارس", "vd", "dz", ["ROP"]],
["Rinne test", "RIN-ee TEST", "Tuning fork test that compares air conduction with bone conduction.", "آزمون رینه", "tx", "lab", []],
["rods", "RODZ", "Retinal receptors that work in dim light and give black-and-white vision.", "استوانه‌ها", "ey", "phys", []],
["round window", "ROWND WIN-doh", "Membrane-covered opening of the cochlea that releases pressure waves.", "دریچه گرد", "er", "body", []],
["sclera", "SKLEER-ah", "Tough white outer layer of the eyeball; the white of the eye (scler/o).", "صلبیه (سفیدی چشم)", "ey", "body", []],
["scleral", "SKLEER-al", "Pertaining to the sclera (scler/o).", "صلبیه‌ای", "ey", "body", []],
["scleral buckling", "SKLEER-al BUK-ling", "Silicone band placed around the sclera to repair retinal detachment.", "باکل اسکلرا", "tx", "tx", []],
["scleritis", "skleh-RYE-tis", "Inflammation of the sclera.", "التهاب صلبیه", "vd", "dz", []],
["scotoma", "skoh-TOH-mah", "Blind spot in the visual field (scot/o = darkness).", "اسکوتوم (نقطه کور)", "vd", "sx", []],
["semicircular canals", "sem-ee-SER-kyoo-lar kah-NALZ", "Three fluid-filled loops of the inner ear that sense head movement for balance.", "مجاری نیم‌دایره", "er", "body", []],
["sensorineural hearing loss", "sen-soh-ree-NOO-ral HEER-ing LOS", "Hearing loss from damage to the cochlea or the auditory nerve.", "کم‌شنوایی حسی-عصبی", "hd", "dz", []],
["sensory receptor", "SEN-soh-ree ree-SEP-tor", "A nerve ending or cell that detects a stimulus such as light, sound, touch or a chemical.", "گیرنده حسی", "lx", "phys", []],
["serous otitis media", "SEER-us oh-TYE-tis MEE-dee-ah", "Middle ear inflammation with watery fluid behind the eardrum.", "اوتیت میانی سروزی", "hd", "dz", ["SOM"]],
["slit lamp", "SLIT LAMP", "Microscope with a narrow beam of light to examine the front of the eye.", "اسلیت‌لمپ", "tx", "lab", []],
["Snellen chart", "SNEL-en CHART", "Chart of letters of decreasing size used to measure visual acuity, e.g. 20/20.", "چارت اسنلن", "tx", "lab", ["VA"]],
["special senses", "SPESH-al SEN-sez", "The senses of sight, hearing, equilibrium, smell and taste, which have their own sense organs in the head.", "حواس ویژه", "lx", "phys", []],
["stapedectomy", "stay-peh-DEK-toh-mee", "Removal of the stapes and replacement with a prosthesis, for otosclerosis.", "استاپدکتومی", "tx", "tx", []],
["stapes", "STAY-peez", "Stirrup; smallest ossicle, fits into the oval window (staped/o).", "رکابی", "er", "body", []],
["strabismus", "strah-BIZ-mus", "Eyes that do not look in the same direction because of muscle imbalance.", "انحراف چشم (استرابیسم)", "vd", "dz", []],
["suppurative otitis media", "SUP-yoo-rah-tiv oh-TYE-tis MEE-dee-ah", "Middle ear infection with pus.", "اوتیت میانی چرکی", "hd", "dz", []],
["tinnitus", "tih-NYE-tus", "Ringing, buzzing or roaring sound in the ears.", "وزوز گوش", "hd", "sx", []],
["tonometry", "toh-NOM-eh-tree", "Measurement of intraocular pressure; screens for glaucoma (ton/o = tension).", "تونومتری (فشارسنجی چشم)", "tx", "lab", ["IOP"]],
["trabeculectomy", "trah-bek-yoo-LEK-toh-mee", "Surgery that makes a new drainage channel for aqueous humor in glaucoma.", "ترابکولکتومی", "tx", "tx", []],
["tuning fork", "TOO-ning FORK", "Two-pronged metal instrument that vibrates to test hearing.", "دیاپازون", "tx", "lab", []],
["tympanic", "tim-PAN-ik", "Pertaining to the eardrum or middle ear (tympan/o).", "مربوط به پرده گوش", "er", "body", []],
["tympanic membrane", "tim-PAN-ik MEM-brayn", "Eardrum; thin membrane between the outer and middle ear that vibrates with sound (myring/o, tympan/o).", "پرده گوش (پرده صماخ)", "er", "body", ["TM"]],
["tympanometry", "tim-pah-NOM-eh-tree", "Measurement of how well the eardrum moves; shows fluid in the middle ear.", "تمپانومتری", "tx", "lab", []],
["tympanoplasty", "tim-pan-oh-PLAS-tee", "Surgical repair of the eardrum and middle ear bones.", "تمپانوپلاستی (ترمیم پرده گوش)", "tx", "tx", []],
["uvea", "YOO-vee-ah", "Pigmented, vascular middle layer of the eye: choroid, ciliary body and iris (uve/o).", "یووئا (لایه میانی چشم)", "ey", "body", []],
["uveitis", "yoo-vee-EYE-tis", "Inflammation of the uvea.", "التهاب یووئا", "vd", "dz", []],
["vertigo", "VER-tih-goh", "Feeling that the room is spinning; loss of balance.", "سرگیجه چرخشی", "hd", "sx", []],
["vestibular", "ves-TIB-yoo-lar", "Pertaining to the vestibule (vestibul/o), the balance organ.", "دهلیزی", "er", "body", []],
["vestibule", "VES-tih-byool", "Central part of the inner ear concerned with balance (vestibul/o).", "دهلیز گوش", "er", "body", []],
["vestibulocochlear nerve", "ves-tib-yoo-loh-KOK-lee-ar NERV", "Eighth cranial nerve; carries hearing and balance impulses to the brain.", "عصب دهلیزی-حلزونی", "er", "body", []],
["visual acuity", "VIZH-oo-al ah-KYOO-ih-tee", "Sharpness of vision, measured with a Snellen chart.", "حدت بینایی", "ey", "phys", ["VA"]],
["visual cortex", "VIZH-oo-al KOR-teks", "Area of the occipital lobe that interprets visual impulses.", "قشر بینایی", "ey", "body", []],
["visual field", "VIZH-oo-al FEELD", "Whole area seen by the eye when it looks straight ahead.", "میدان بینایی", "ey", "phys", ["VF"]],
["visual field test", "VIZH-oo-al FEELD TEST", "Test that maps the area a person can see, including peripheral vision.", "آزمون میدان بینایی", "tx", "lab", ["VF"]],
["vitrectomy", "vih-TREK-toh-mee", "Removal of the vitreous humor.", "ویترکتومی", "tx", "tx", []],
["vitreous humor", "VIT-ree-us HYOO-mor", "Clear jelly that fills the posterior cavity behind the lens (vitre/o = glassy).", "زجاجیه", "ey", "body", []],
["Weber test", "WEB-er TEST", "Tuning fork placed on the top of the head to see in which ear sound is louder.", "آزمون وبر", "tx", "lab", []],
["xerophthalmia", "zeer-off-THAL-mee-ah", "Dry eye from too little tear flow (xer/o = dry).", "خشکی چشم", "vd", "dz", []]];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* حِسّا — داده واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها و دسته‌های واژه (موتور: engine/js/lexicon.js)
 * ریشه‌ها و اختصارها از Total.txt و فصل‌های PDF پیوست (Cohen، Fremgen، Gylys، Ehrlich، Dummies و…) گردآوری و دستی پالایش شده‌اند.
 * دنیاها: lx زبان حواس (همه واژه‌ها) • ey چشم: ساختار و بینایی • vd بیماری‌های چشم • er گوش: شنوایی و تعادل •
 * hd بیماری‌های گوش • tx تشخیص و درمان */
(function (root) {
  const EA = root.EA = root.EA || {};
  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const roots = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', 'بدون، فاقد', '*'],
    ['ambi-', ['ambi'], 'both', 'هر دو', 'lx'],
    ['bi-, bin-', ['bin', 'bi'], 'two, both', 'دو', 'ey'],
    ['dipl-, dipl/o', ['dipl'], 'double', 'دوتایی', 'lx'],
    ['en-', ['en'], 'in, inward', 'درون', 'vd'],
    ['ec-, ex-, exo-', ['exo', 'ex', 'ec'], 'out, outward', 'بیرون', 'vd'],
    ['eso-', ['eso'], 'inward', 'به داخل', 'vd'],
    ['extra-', ['extra'], 'outside', 'بیرون از', 'ey'],
    ['hemi-', ['hemi'], 'half', 'نیم', 'vd'],
    ['hyper-', ['hyper'], 'above, excessive', 'بیش از حد', '*'],
    ['intra-', ['intra'], 'within', 'درون', 'ey'],
    ['micro-', ['micro'], 'small', 'کوچک', 'tx'],
    ['peri-', ['peri'], 'around', 'پیرامون', 'ey'],
    ['semi-', ['semi'], 'half', 'نیم', 'er'],
    ['trans-', ['trans'], 'across, through', 'از میان', 'tx'],
    // ریشه‌های عمومی
    ['aden/o', ['aden'], 'gland', 'غده', 'vd'],
    ['anis/o', ['anis'], 'unequal', 'نابرابر', 'vd'],
    ['bar/o', ['bar'], 'pressure, weight', 'فشار', 'hd'],
    ['chromat/o', ['chromat'], 'color', 'رنگ', 'vd'],
    ['cyst/o', ['cyst'], 'sac, bladder', 'کیسه', 'vd'],
    ['glauc/o', ['glauc'], 'gray, bluish green', 'خاکستری-سبز', 'vd'],
    ['laryng/o', ['laryng'], 'larynx', 'حنجره', 'lx'],
    ['nyct/o', ['nyctal', 'nyct'], 'night', 'شب', 'vd'],
    ['olfact/o, osm/o', ['olfact', 'osm'], 'smell', 'بو', 'lx'],
    ['geus/o, gustat/o', ['gustat', 'geus'], 'taste', 'چشایی', 'lx'],
    ['phot/o', ['phot'], 'light', 'نور', 'vd'],
    ['presby/o', ['presby'], 'old age', 'پیری', 'lx'],
    ['py/o', ['py'], 'pus', 'چرک', 'hd'],
    ['rhin/o', ['rhin'], 'nose', 'بینی', 'lx'],
    ['scot/o', ['scot'], 'darkness', 'تاریکی', 'vd'],
    ['ton/o', ['ton'], 'tension, pressure', 'فشار، کشش', 'tx'],
    ['xer/o', ['xer'], 'dry', 'خشک', 'vd'],
    // چشم
    ['ophthalm/o, ocul/o', ['ophthalm', 'ocul'], 'eye', 'چشم', 'lx'],
    ['opt/o, optic/o', ['optic', 'opt'], 'eye, vision', 'بینایی، چشم', 'lx'],
    ['blephar/o, palpebr/o', ['blephar', 'palpebr'], 'eyelid', 'پلک', 'lx'],
    ['conjunctiv/o', ['conjunctiv'], 'conjunctiva', 'ملتحمه', 'ey'],
    ['corne/o, kerat/o', ['corne', 'kerat'], 'cornea; hard', 'قرنیه؛ سخت', 'lx'],
    ['scler/o', ['scler'], 'sclera; hard', 'صلبیه؛ سخت', 'ey'],
    ['choroid/o', ['choroid'], 'choroid', 'مشیمیه', 'ey'],
    ['cycl/o', ['cycl'], 'ciliary body', 'جسم مژگانی', 'ey'],
    ['uve/o', ['uve'], 'uvea', 'یووئا', 'ey'],
    ['ir/o, irid/o', ['irid', 'ir'], 'iris', 'عنبیه', 'lx'],
    ['cor/o, core/o, pupill/o', ['pupill', 'core', 'cor'], 'pupil', 'مردمک', 'ey'],
    ['phac/o, phak/o', ['phac', 'phak'], 'lens', 'عدسی', 'lx'],
    ['retin/o', ['retin'], 'retina', 'شبکیه', 'lx'],
    ['vitre/o', ['vitre'], 'glassy; vitreous body', 'شیشه‌ای؛ زجاجیه', 'ey'],
    ['dacry/o, lacrim/o', ['dacry', 'lacrim'], 'tears, tear duct', 'اشک', 'lx'],
    ['ambly/o', ['ambly'], 'dull, dim', 'کُند، کم‌سو', 'vd'],
    ['mydr/o', ['mydr'], 'widen, enlarge', 'گشاد شدن', 'vd'],
    ['mi/o', ['mi'], 'smaller, less', 'کوچک‌تر', 'vd'],
    ['nystagm/o', ['nystagm'], 'nodding, involuntary eye movement', 'لرزش چشم', 'vd'],
    // گوش
    ['ot/o, aur/o, auricul/o', ['auricul', 'aur', 'ot'], 'ear', 'گوش', 'lx'],
    ['audi/o, audit/o', ['audit', 'audi'], 'hearing, sound', 'شنوایی', 'lx'],
    ['acous/o, acoust/o, acus/o', ['acoust', 'acous', 'acus'], 'hearing', 'شنوایی', 'lx'],
    ['myring/o, tympan/o', ['myring', 'tympan'], 'eardrum', 'پرده گوش', 'lx'],
    ['staped/o', ['staped'], 'stapes', 'رکابی', 'er'],
    ['malle/o', ['malle'], 'malleus', 'چکشی', 'er'],
    ['incud/o', ['incud'], 'incus', 'سندانی', 'er'],
    ['cochle/o', ['cochle'], 'cochlea', 'حلزون', 'er'],
    ['labyrinth/o', ['labyrinth'], 'labyrinth, inner ear', 'لابیرنت', 'lx'],
    ['vestibul/o', ['vestibul'], 'vestibule', 'دهلیز', 'er'],
    ['mastoid/o', ['mastoid'], 'mastoid process', 'ماستوئید', 'hd'],
    ['salping/o', ['salping'], 'eustachian (auditory) tube', 'شیپور استاش', 'er'],
    ['cerumin/o', ['cerumin'], 'cerumen, earwax', 'جرم گوش', 'er'],
    // پسوندها
    ['-opia, -opsia', ['opsia', 'opia'], 'vision', 'بینایی', 'lx'],
    ['-cusis, -acusis', ['acusis', 'cusis'], 'hearing', 'شنوایی', 'lx'],
    ['-otia', ['otia'], 'ear condition', 'حالت گوش', 'hd'],
    ['-tropia', ['tropia'], 'turning', 'چرخش', 'vd'],
    ['-ptosis', ['ptosis'], 'drooping, prolapse', 'افتادگی', 'vd'],
    ['-phobia', ['phobia'], 'fear, sensitivity', 'ترس، حساسیت', 'vd'],
    ['-osmia', ['osmia'], 'smell', 'بویایی', 'lx'],
    ['-algia, -dynia', ['algia', 'dynia'], 'pain', 'درد', 'lx'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-osis, -iasis', ['iasis', 'osis', 'sis'], 'abnormal condition', 'حالت غیرطبیعی', '*'],
    ['-oma', ['oma'], 'tumor, mass', 'تومور، توده', '*'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', 'vd'],
    ['-rrhea', ['rrhea'], 'flow, discharge', 'ترشح', 'lx'],
    ['-rrhagia', ['rrhagia'], 'bursting forth of blood', 'خونریزی', 'hd'],
    ['-sclerosis', ['sclerosis'], 'hardening', 'سفت شدن', 'hd'],
    ['-logy', ['logy'], 'study of', 'علم، مطالعه', 'lx'],
    ['-logist', ['logist'], 'specialist', 'متخصص', 'lx'],
    ['-ectomy', ['ectomy'], 'surgical removal', 'برداشتن (جراحی)', '*'],
    ['-tomy', ['tomy'], 'incision', 'برش', '*'],
    ['-stomy', ['stomy'], 'new opening', 'ایجاد منفذ', 'tx'],
    ['-plasty', ['plasty'], 'surgical repair', 'ترمیم جراحی', 'tx'],
    ['-scope', ['scope'], 'instrument to view', 'ابزار دیدن', 'tx'],
    ['-scopy', ['scopy'], 'visual examination', 'مشاهده با ابزار', 'tx'],
    ['-meter', ['meter'], 'instrument to measure', 'ابزار اندازه‌گیری', 'tx'],
    ['-metry', ['metry'], 'measurement', 'اندازه‌گیری', 'tx'],
    ['-gram', ['gram'], 'record', 'ثبت، نگاره', 'tx'],
    ['-graphy', ['graphy'], 'process of recording', 'روش ثبت', 'tx'],
    ['-al, -ic, -ar, -ary, -ory, -ous', ['ary', 'ory', 'al', 'ic', 'ar', 'ous'], 'pertaining to', 'مربوط به', '*'],
    ['-ia, -y, -ism', ['ism', 'ia', 'y'], 'condition', 'حالت', '*']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['A, Acc', 'accommodation', 'تطابق', 'ey'],
    ['ABR', 'auditory brainstem response', 'پاسخ شنوایی ساقه مغز', 'tx'],
    ['AC', 'air conduction', 'هدایت هوایی', 'er'],
    ['AD', 'auris dextra (right ear)', 'گوش راست', 'lx'],
    ['AMD, ARMD', 'age-related macular degeneration', 'دژنراسیون ماکولای وابسته به سن', 'vd'],
    ['AS', 'auris sinistra (left ear)', 'گوش چپ', 'lx'],
    ['ASL', 'American Sign Language', 'زبان اشاره آمریکایی', 'hd'],
    ['Ast, AST', 'astigmatism', 'آستیگماتیسم', 'vd'],
    ['AU', 'auris uterque (both ears, each ear)', 'هر دو گوش', 'lx'],
    ['BAEP', 'brainstem auditory evoked potentials', 'پتانسیل برانگیخته شنوایی ساقه مغز', 'tx'],
    ['BC', 'bone conduction', 'هدایت استخوانی', 'er'],
    ['BCVA', 'best corrected visual acuity', 'بهترین حدت بینایی با اصلاح', 'tx'],
    ['cc', 'with correction (glasses or lenses)', 'با عینک یا لنز', 'tx'],
    ['D', 'diopter (lens strength)', 'دیوپتر', 'ey'],
    ['dB', 'decibel', 'دسی‌بل', 'er'],
    ['DVA', 'distance visual acuity', 'حدت بینایی دور', 'tx'],
    ['ECCE', 'extracapsular cataract extraction', 'خارج کردن آب مروارید خارج‌کپسولی', 'tx'],
    ['EENT', 'eyes, ears, nose and throat', 'چشم، گوش، حلق و بینی', 'lx'],
    ['Em, EM', 'emmetropia', 'بینایی طبیعی', 'ey'],
    ['ENG', 'electronystagmography', 'الکترونیستاگموگرافی', 'tx'],
    ['ENT', 'ears, nose and throat', 'گوش، حلق و بینی', 'lx'],
    ['EOM', 'extraocular movements, muscles', 'حرکات یا عضلات خارج‌چشمی', 'ey'],
    ['ERG', 'electroretinography', 'الکترورتینوگرافی', 'tx'],
    ['ET', 'esotropia', 'انحراف چشم به داخل', 'vd'],
    ['FC', 'finger counting', 'شمارش انگشت', 'tx'],
    ['HEENT', 'head, eyes, ears, nose and throat', 'سر، چشم، گوش، حلق و بینی', 'lx'],
    ['HL', 'hearing level; hearing loss', 'سطح شنوایی؛ کم‌شنوایی', 'hd'],
    ['HM', 'hand movements', 'تشخیص حرکت دست', 'tx'],
    ['Hz', 'hertz', 'هرتز', 'er'],
    ['ICCE', 'intracapsular cataract extraction', 'خارج کردن آب مروارید داخل‌کپسولی', 'tx'],
    ['IOL', 'intraocular lens', 'لنز داخل چشمی', 'tx'],
    ['IOP', 'intraocular pressure', 'فشار داخل چشم', 'tx'],
    ['IVFA', 'intravenous fluorescein angiography', 'آنژیوگرافی فلورسئین وریدی', 'tx'],
    ['LASIK', 'laser-assisted in situ keratomileusis', 'لیزیک', 'tx'],
    ['MY, Myop', 'myopia', 'نزدیک‌بینی', 'vd'],
    ['NV', 'near vision', 'دید نزدیک', 'tx'],
    ['OD', 'oculus dexter (right eye); also Doctor of Optometry', 'چشم راست؛ دکترای اپتومتری', 'lx'],
    ['OE', 'otitis externa', 'التهاب گوش بیرونی', 'hd'],
    ['OM', 'otitis media', 'التهاب گوش میانی', 'hd'],
    ['Ophth', 'ophthalmology', 'چشم‌پزشکی', 'lx'],
    ['ORL', 'otorhinolaryngology', 'گوش، حلق و بینی', 'lx'],
    ['OS', 'oculus sinister (left eye)', 'چشم چپ', 'lx'],
    ['Oto', 'otology', 'گوش‌شناسی', 'lx'],
    ['OU', 'oculus uterque (both eyes, each eye)', 'هر دو چشم', 'lx'],
    ['PE tube', 'pressure-equalizing tube', 'لوله تهویه گوش', 'tx'],
    ['PERRLA', 'pupils equal, round, reactive to light and accommodation', 'مردمک‌های برابر، گرد و واکنش‌دار به نور و تطابق', 'tx'],
    ['PORP', 'partial ossicular replacement prosthesis', 'پروتز جایگزین بخشی از استخوانچه‌ها', 'tx'],
    ['PRK', 'photorefractive keratectomy', 'برداشت لیزری سطح قرنیه', 'tx'],
    ['RD', 'retinal detachment', 'جداشدگی شبکیه', 'vd'],
    ['RK', 'radial keratotomy', 'کراتوتومی شعاعی', 'tx'],
    ['ROP', 'retinopathy of prematurity', 'رتینوپاتی نوزاد نارس', 'vd'],
    ['sc', 'without correction', 'بدون عینک یا لنز', 'tx'],
    ['SICS', 'small incision cataract surgery', 'جراحی آب مروارید با برش کوچک', 'tx'],
    ['SLP', 'speech-language pathologist', 'آسیب‌شناس گفتار و زبان', 'hd'],
    ['SOM', 'serous otitis media', 'اوتیت میانی سروزی', 'hd'],
    ['ST', 'speech threshold; esotropia', 'آستانه گفتار؛ انحراف به داخل', 'tx'],
    ['TM', 'tympanic membrane', 'پرده گوش', 'er'],
    ['TORP', 'total ossicular replacement prosthesis', 'پروتز جایگزین کامل استخوانچه‌ها', 'tx'],
    ['TTS', 'temporary threshold shift', 'جابه‌جایی موقت آستانه شنوایی', 'hd'],
    ['VA', 'visual acuity', 'حدت بینایی', 'ey'],
    ['VF', 'visual field', 'میدان بینایی', 'ey'],
    ['XT', 'exotropia', 'انحراف چشم به خارج', 'vd'],
    ['y/o', 'years old', 'ساله', 'lx']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'body', icon: '👁️', name: 'ساختارهای چشم و گوش' },
    { id: 'phys', icon: '🔁', name: 'بینایی، شنوایی و تعادل' },
    { id: 'field', icon: '🎓', name: 'رشته‌ها و متخصصان' },
    { id: 'dz', icon: '🩺', name: 'بیماری‌ها' },
    { id: 'sx', icon: '🔍', name: 'نشانه‌ها' },
    { id: 'lab', icon: '🧪', name: 'معاینه و آزمون' },
    { id: 'tx', icon: '💊', name: 'درمان و جراحی' }
  ];
  const main = { phys: 'Anatomy_and_Physiology' };
  EA.LEX_DATA = { roots, abbr, cats, main, worlds: ['lx', 'ey', 'vd', 'er', 'hd', 'tx'], base: 'lx' };
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
/* حِسّا — شکل‌های آموزشی چشم و گوش (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با الگوی هورمونا و اپ‌های قبلی: زمینه سفید کارت، بافت‌ها با گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی زیر آن)،
 * پیکان‌ها و خط‌های راهنمای خاکستری گرد. پالت: سفیدی صلبیه، آبی فیروزه‌ای عنبیه، قرمز-نارنجی شبکیه و مشیمیه، زرد عصب،
 * کرم استخوان گیجگاهی، پوست هلویی لاله گوش و آبی روشن مایع گوش درونی. همه شکل‌ها شماتیک و آموزشی‌اند.
 * EA.art(کلید) ← رشته SVG؛ EA.ART_KEYS فهرست کلیدهاست (آزمون‌ها بررسی می‌کنند). */
(function (root) {
  const EA = root.EA = root.EA || {};
  let UID = 0;
  const FONT_EN = 'Nunito, Vazirmatn, system-ui, sans-serif', FONT_FA = 'Vazirmatn, Tahoma, sans-serif';
  const INK = '#2b2b2b', MUTED = '#6f7a80', LINE = '#5b6b73';
  /* پالت بافت‌ها */
  const C = {
    scl: '#fbfdff', sclLine: '#9fb3c2', chor: '#a8463c', ret: '#f08a5d', retLine: '#d9653e', vit: '#fdf3ea', aq: '#d8f0fb', aqLine: '#6db4d6',
    iris: '#2f8fb0', iris2: '#1c5f7a', lens: '#e3f1fb', lensLine: '#6f9fc0', nerve: '#f2c94c', nerveLine: '#c9a12c', vessel: '#c2413a',
    skin: '#f6d2b8', skinLine: '#d9a988', lid: '#f2c4a8', bone: '#f3e4c4', boneLine: '#c4a46c', canal: '#f9e1cf', oss: '#efe0b9', ossLine: '#a88a4a',
    lab: '#9fd6ee', labLine: '#3f8fb8', fluid: '#d9effa', muscle: '#d9665a', muscleLine: '#a8433a', tm: '#f5c6b0', tmLine: '#c27a5c',
    brain: '#e9d7ef', brainLine: '#a07ab3', pus: '#f3d36b', red: '#d9443a', blue: '#3b6fd4', spark: '#ffc800'
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

  /* ---------- اجزای پایه ---------- */
  /* کره چشم در برش کناری (رو به چپ: قرنیه سمت چپ، عصب بینایی سمت راست)؛ مرکز cx,cy و شعاع R.
   * خروجی: d (تعریف‌ها)، b (بدنه) و P (نقطه‌های مهم برای خط راهنما) */
  function eyeSag(cx, cy, R, o) {
    const p = o || {}; const cl = nid(), vg = nid(), sh = nid(), ig = nid();
    const xa = cx - R * 0.8, ya = R * 0.6;
    const xi = cx - R * 0.76, xl = cx - R * 0.62;
    const ang = 14 * Math.PI / 180, rr = R - 7.5;
    const dx = cx + rr * Math.cos(ang), dy = cy + rr * Math.sin(ang);
    const nv = p.nerve === false ? '' : `<path d="M${(dx - 3).toFixed(1)} ${(dy - R * 0.13).toFixed(1)} L${(cx + R + 42).toFixed(1)} ${(dy - R * 0.1).toFixed(1)} L${(cx + R + 42).toFixed(1)} ${(dy + R * 0.2).toFixed(1)} L${(dx - 3).toFixed(1)} ${(dy + R * 0.15).toFixed(1)}Z" fill="${C.nerve}" stroke="${C.nerveLine}" stroke-width="1.4"/>
        <path d="M${(dx + 2).toFixed(1)} ${(dy + 1).toFixed(1)} L${(cx + R + 40).toFixed(1)} ${(dy + 2).toFixed(1)}" stroke="${C.vessel}" stroke-width="2"/>`;
    const lensX = p.cloudyLens ? '#cfc8b4' : C.lens;
    return {
      d: `<clipPath id="${cl}"><rect x="${xa}" y="${cy - R - 12}" width="${2 * R + 24}" height="${2 * R + 24}"/></clipPath>${radial(vg, '#fffaf4', C.vit)}${shadow(sh)}${linear(ig, C.iris, C.iris2, true)}`,
      b: `<g filter="url(#${sh})">${nv}
        <g clip-path="url(#${cl})">
          <circle cx="${cx}" cy="${cy}" r="${R}" fill="${C.scl}" stroke="${C.sclLine}" stroke-width="2.2"/>
          <circle cx="${cx}" cy="${cy}" r="${R - 4}" fill="none" stroke="${C.chor}" stroke-width="3.6"/>
          <circle cx="${cx}" cy="${cy}" r="${rr}" fill="url(#${vg})" stroke="${p.retina || C.ret}" stroke-width="3.2"/>
        </g>
        <path d="M${xa} ${cy - ya} Q${cx - R * 1.24} ${cy} ${xa} ${cy + ya}Z" fill="${C.aq}" stroke="${C.aqLine}" stroke-width="1.8" opacity=".95"/>
        <path d="M${xi} ${cy - ya + 3} L${xi} ${cy - R * 0.17} M${xi} ${cy + R * 0.17} L${xi} ${cy + ya - 3}" stroke="url(#${ig})" stroke-width="4.2" stroke-linecap="round"/>
        <ellipse cx="${xi + 7}" cy="${cy - ya + 7}" rx="5" ry="8" fill="${C.chor}" opacity=".85"/><ellipse cx="${xi + 7}" cy="${cy + ya - 7}" rx="5" ry="8" fill="${C.chor}" opacity=".85"/>
        <path d="M${xl} ${cy - R * 0.3} L${xi + 8} ${cy - ya + 12} M${xl} ${cy + R * 0.3} L${xi + 8} ${cy + ya - 12}" stroke="#b9a58c" stroke-width="1" stroke-dasharray="2 2"/>
        <ellipse cx="${xl}" cy="${cy}" rx="${R * 0.14}" ry="${R * 0.34}" fill="${lensX}" stroke="${C.lensLine}" stroke-width="1.5"/>
        <path d="M${xl - R * 0.06} ${cy - R * 0.2} Q${xl - R * 0.1} ${cy} ${xl - R * 0.06} ${cy + R * 0.12}" stroke="#fff" stroke-width="2.4" fill="none" opacity=".8"/>
        <ellipse cx="${cx + rr - 1}" cy="${cy}" rx="3" ry="${R * 0.12}" fill="#f4c04c" opacity=".85"/>
        ${p.vessels === false ? '' : `<path d="M${dx} ${dy} Q${cx + R * 0.55} ${cy - R * 0.5} ${cx + R * 0.1} ${cy - R * 0.82} M${dx} ${dy} Q${cx + R * 0.5} ${cy + R * 0.62} ${cx + R * 0.05} ${cy + R * 0.84}" stroke="${C.vessel}" stroke-width="1.3" fill="none" opacity=".75"/>`}
        <circle cx="${dx}" cy="${dy}" r="3.2" fill="#fff3c2" stroke="${C.nerveLine}" stroke-width="1"/>
        <path d="M${cx - R * 0.42} ${cy - R * 0.68} C${cx - R * 0.15} ${cy - R * 0.86} ${cx + R * 0.2} ${cy - R * 0.86} ${cx + R * 0.45} ${cy - R * 0.7}" stroke="#fff" stroke-width="3" fill="none" opacity=".55" stroke-linecap="round"/>
      </g>`,
      P: {
        cornea: [cx - R * 1.06, cy - R * 0.32], aqueous: [cx - R * 0.88, cy + R * 0.1], iris: [xi, cy - R * 0.4], pupil: [xi, cy], lens: [xl, cy + R * 0.18],
        ciliary: [xi + 7, cy + ya - 7], sclera: [cx + R * 0.1, cy + R - 1], choroid: [cx + R * 0.55, cy - R * 0.79], retina: [cx + R * 0.7, cy + R * 0.62],
        vitreous: [cx + R * 0.05, cy + R * 0.1], fovea: [cx + rr - 1, cy - R * 0.06], disc: [dx, dy], nerve: [cx + R + 28, dy + 3]
      }
    };
  }

  /* چشم از روبه‌رو با پلک‌ها، مژه و ابرو؛ مرکز cx,cy و مقیاس s. medial: کدام سو گوشه داخلی است (۱ = راست تصویر) */
  function eyeFront(cx, cy, s, o) {
    const p = o || {}; const k = s || 1; const ig = nid(), sh = nid(), m = p.medial === -1 ? -1 : 1;
    const X = d => (cx + d * k).toFixed(1), Y = d => (cy + d * k).toFixed(1);
    const ir = 19 * k, gx = cx + (p.gaze || 0) * k;
    const upper = `M${X(-46)} ${Y(2)} C${X(-26)} ${Y(-30)} ${X(22)} ${Y(-32)} ${X(46)} ${Y(m > 0 ? 4 : 0)}`;
    const lower = `C${X(24)} ${Y(22)} ${X(-24)} ${Y(24)} ${X(-46)} ${Y(2)}`;
    const almond = `${upper} ${lower}Z`;
    const clip = nid();
    const lashes = Array.from({ length: 9 }, (_, i) => { const tt = (i + 1) / 10; const x = -46 + 92 * tt, y = -26 * Math.sin(Math.PI * tt) - 1; return `<path d="M${X(x)} ${Y(y)} l${(-2 + 4 * tt) * k} ${-7 * k}" stroke="#3a2c26" stroke-width="${1.3 * k}" stroke-linecap="round"/>`; }).join('');
    return {
      d: `${radial(ig, p.iris1 || '#4fb3d4', p.iris2 || C.iris2)}${shadow(sh)}<clipPath id="${clip}"><path d="${almond}"/></clipPath>`,
      b: `<g filter="url(#${sh})">
        ${p.brow === false ? '' : `<path d="M${X(-50)} ${Y(-40)} C${X(-26)} ${Y(-56)} ${X(22)} ${Y(-56)} ${X(52)} ${Y(-42)}" stroke="#6b4a3a" stroke-width="${6 * k}" fill="none" stroke-linecap="round"/>`}
        <path d="M${X(-60)} ${Y(-6)} C${X(-40)} ${Y(-44)} ${X(40)} ${Y(-46)} ${X(60)} ${Y(-4)} C${X(40)} ${Y(34)} ${X(-40)} ${Y(36)} ${X(-60)} ${Y(-6)}Z" fill="${p.lidColor || C.lid}" stroke="${C.skinLine}" stroke-width="1.2"/>
        <path d="${almond}" fill="${p.sclera || C.scl}" stroke="#b07a62" stroke-width="1.4"/>
        <g clip-path="url(#${clip})"><circle cx="${gx.toFixed(1)}" cy="${Y(0)}" r="${ir.toFixed(1)}" fill="url(#${ig})" stroke="${C.iris2}" stroke-width="1"/>
          <circle cx="${gx.toFixed(1)}" cy="${Y(0)}" r="${((p.pupil || 7.5) * k).toFixed(1)}" fill="${p.pupilFill || '#111'}"/>
          <circle cx="${(gx - 6 * k).toFixed(1)}" cy="${Y(-6)}" r="${(3.2 * k).toFixed(1)}" fill="#fff" opacity=".9"/>
          ${p.redSclera ? `<path d="M${X(-40)} ${Y(2)} l14 -3 M${X(-40)} ${Y(8)} l12 2 M${X(40)} ${Y(4)} l-14 -4 M${X(38)} ${Y(10)} l-12 1" stroke="#d9443a" stroke-width="1.1"/>` : ''}
        </g>
        <path d="${upper}" stroke="#7a4e3c" stroke-width="${2.2 * k}" fill="none"/>
        <ellipse cx="${X(m * 40)}" cy="${Y(3)}" rx="${(4.5 * k).toFixed(1)}" ry="${(3.5 * k).toFixed(1)}" fill="#e98f8f"/>
        ${p.lashes === false ? '' : lashes}
      </g>`,
      P: { iris: [gx + ir * 0.7, cy - ir * 0.7], pupil: [gx, cy], sclera: [cx - m * 32 * k, cy + 4 * k], upper: [cx, cy - 27 * k], lower: [cx, cy + 22 * k], medial: [cx + m * 46 * k, cy + 3 * k], lateral: [cx - m * 46 * k, cy + 2 * k], brow: [cx, cy - 50 * k], lashes: [cx - 10 * k, cy - 34 * k], caruncle: [cx + m * 40 * k, cy + 3 * k] }
    };
  }

  /* حلزون: مارپیچ دو و نیم دور */
  const spiral = (cx, cy, r, turns, c, w) => {
    let d = ''; const n = 60 * (turns || 2.5);
    for (let i = 0; i <= n; i++) { const a = i / 60 * Math.PI * 2, rad = r * (1 - i / (n + 12)); d += (i ? 'L' : 'M') + (cx + Math.cos(a) * rad).toFixed(1) + ' ' + (cy + Math.sin(a) * rad).toFixed(1); }
    return `<path d="${d}" stroke="${c || C.labLine}" stroke-width="${w || 5}" fill="none" stroke-linecap="round"/>`;
  };

  /* گوش در برش تاجی (رو به چپ: لاله سمت چپ، گوش درونی سمت راست)؛ مبدأ ox,oy و مقیاس s (۱ = ۳۲۰×۲۰۰) */
  function earSection(ox, oy, s, o) {
    const p = o || {}; const k = s || 1; const sh = nid(), bg = nid(), cg = nid();
    const X = d => (ox + d * k), Y = d => (oy + d * k);
    const T = `translate(${ox} ${oy}) scale(${k})`;
    const fluid = p.fluid ? `<path d="M126 108 L172 108 L172 150 Q150 158 126 150Z" fill="${p.fluid}" opacity=".85"/>` : '';
    const tm = p.bulge ? `<path d="M120 76 Q138 102 120 132" stroke="${C.tmLine}" stroke-width="3" fill="none"/>` : `<path d="M122 76 Q114 104 122 132" stroke="${C.tmLine}" stroke-width="3" fill="none"/>`;
    return {
      d: `${shadow(sh)}${linear(bg, '#f7ecd4', C.bone, true)}${radial(cg, '#c9ecfa', C.lab)}`,
      b: `<g transform="${T}" filter="url(#${sh})">
        <path d="M70 18 L318 18 L318 196 L70 196 Q84 150 84 104 Q84 58 70 18Z" fill="url(#${bg})" stroke="${C.boneLine}" stroke-width="1.2"/>
        ${[[230, 40], [290, 56], [300, 170], [96, 40], [104, 176], [270, 186], [180, 186], [200, 34]].map(c => `<circle cx="${c[0]}" cy="${c[1]}" r="3" fill="#e2cfa6"/>`).join('')}
        <path d="M60 10 C14 6 2 56 10 104 C16 150 34 186 58 196 C72 200 82 188 76 172 C70 156 50 150 50 128 C50 112 64 112 70 96 C78 74 84 26 60 10Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.5"/>
        <path d="M54 30 C30 30 24 66 30 96" stroke="${C.skinLine}" stroke-width="2" fill="none" opacity=".7"/>
        <path d="M66 92 L122 82 L122 128 L66 120Z" fill="${C.canal}" stroke="${C.skinLine}" stroke-width="1.2"/>
        <path d="M70 100 L118 94 M70 112 L118 116" stroke="#e6c3a6" stroke-width="1" opacity=".8"/>
        <rect x="122" y="62" width="54" height="92" rx="16" fill="#fff6ec" stroke="${C.boneLine}" stroke-width="1.2"/>
        ${fluid}${tm}
        <path d="M168 150 C182 170 206 184 236 196" stroke="${C.boneLine}" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M168 150 C182 170 206 184 236 196" stroke="#fff6ec" stroke-width="9" fill="none" stroke-linecap="round"/>
        ${p.fluid ? `<path d="M170 154 C182 170 204 182 226 192" stroke="${p.fluid}" stroke-width="6" fill="none" stroke-linecap="round" opacity=".7"/>` : ''}
        <path d="M122 82 C130 80 134 86 132 96 L128 112" stroke="${C.ossLine}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M122 82 C130 80 134 86 132 96 L128 112" stroke="${C.oss}" stroke-width="4.4" fill="none" stroke-linecap="round"/>
        <path d="M134 86 C142 80 150 84 148 94 L146 108" stroke="${C.ossLine}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M134 86 C142 80 150 84 148 94 L146 108" stroke="${C.oss}" stroke-width="4.4" fill="none" stroke-linecap="round"/>
        <path d="M146 106 L160 100 M146 112 L160 116 M160 98 L160 118" stroke="${p.stapesFixed ? '#a3672a' : C.ossLine}" stroke-width="${p.stapesFixed ? 4.4 : 3}" fill="none" stroke-linecap="round"/>
        <ellipse cx="190" cy="108" rx="22" ry="17" fill="url(#${cg})" stroke="${C.labLine}" stroke-width="1.4"/>
        <path d="M184 92 C170 60 196 36 214 52 C224 62 214 82 200 92" stroke="${C.labLine}" stroke-width="8" fill="none"/><path d="M184 92 C170 60 196 36 214 52 C224 62 214 82 200 92" stroke="${C.lab}" stroke-width="5" fill="none"/>
        <path d="M204 96 C228 70 252 74 252 92 C252 106 232 112 210 108" stroke="${C.labLine}" stroke-width="8" fill="none"/><path d="M204 96 C228 70 252 74 252 92 C252 106 232 112 210 108" stroke="${C.lab}" stroke-width="5" fill="none"/>
        <path d="M196 92 C196 64 238 52 236 76" stroke="${C.labLine}" stroke-width="7" fill="none" opacity=".75"/>
        <circle cx="232" cy="140" r="26" fill="url(#${cg})" stroke="${C.labLine}" stroke-width="1.4"/>
        ${spiral(232, 140, 21, 2.4, C.labLine, 3)}
        <path d="M250 112 C268 104 290 98 318 92 L318 108 C296 112 276 118 256 126Z" fill="${C.nerve}" stroke="${C.nerveLine}" stroke-width="1.2"/>
        <path d="M60 30 C40 30 34 50 36 70" stroke="#fff" stroke-width="3" fill="none" opacity=".5" stroke-linecap="round"/>
      </g>`,
      P: {
        auricle: [X(26), Y(70)], canal: [X(92), Y(106)], cerumen: [X(84), Y(116)], tm: [X(119), Y(110)], middle: [X(150), Y(140)], malleus: [X(131), Y(92)], incus: [X(146), Y(88)], stapes: [X(156), Y(108)],
        oval: [X(161), Y(106)], vestibule: [X(190), Y(110)], canals: [X(214), Y(52)], cochlea: [X(240), Y(152)], nerve: [X(296), Y(102)], tube: [X(220), Y(190)], mastoid: [X(104), Y(178)], bone: [X(290), Y(176)]
      }
    };
  }

  /* ================= دنیای ۰: زبان حواس ================= */
  A['senses-overview'] = () => {
    const box = (x, y, ic, en, fa, root, bg) => `<rect x="${x}" y="${y}" width="104" height="96" rx="16" fill="${bg}"/>${t(x + 52, y + 32, ic, { size: 24 })}${t(x + 52, y + 54, en, { size: 11, w: 900 })}${f(x + 52, y + 69, fa, { size: 10, fill: INK, w: 800 })}${t(x + 52, y + 85, root, { size: 9, fill: '#1e6f8a', w: 800 })}`;
    return svg(360, 262, `${title('پنج حس و ریشه‌هایشان')}
      ${box(10, 34, '👁️', 'sight', 'بینایی', 'ophthalm/o, ocul/o', '#e4f1fb')}${box(128, 34, '👂', 'hearing', 'شنوایی و تعادل', 'ot/o, audi/o', '#fdecdf')}${box(246, 34, '👃', 'smell', 'بویایی', 'olfact/o, osm/o', '#eef7e6')}
      ${box(69, 138, '👅', 'taste', 'چشایی', 'gustat/o, geus/o', '#fde8ee')}${box(187, 138, '✋', 'touch', 'لامسه', 'skin receptors', '#f1ecfb')}
      ${f(180, 252, 'حواس ویژه اندام اختصاصی در سر دارند؛ چشم و گوش بیشترین واژه‌ها را دارند', { size: 9.5, fill: MUTED, w: 700 })}`, 'پنج حس');
  };

  A['eye-ear-overview'] = () => {
    const e = eyeSag(92, 126, 54, { vessels: false }), r = earSection(184, 80, 0.53);
    return svg(360, 250, `${title('دو اندام حس ویژه: چشم و گوش')}
      <rect x="6" y="32" width="172" height="186" rx="16" fill="#eef6fb"/><rect x="182" y="32" width="172" height="186" rx="16" fill="#fdf2ea"/>
      ${e.b}${r.b}
      ${lab(92, 52, 'eye', 'اندام بینایی', { size: 11, fill: '#1e6f8a' })}${lab(268, 52, 'ear', 'اندام شنوایی و تعادل', { size: 11, fill: '#b5561f' })}
      ${f(92, 206, 'نور را به پیام عصبی تبدیل می‌کند', { size: 9, fill: INK, w: 700 })}${f(268, 206, 'صدا و حرکت سر را حس می‌کند', { size: 9, fill: INK, w: 700 })}
      ${f(180, 240, 'ophthalm/o یعنی چشم و ot/o یعنی گوش', { size: 9.5, fill: MUTED, w: 700 })}`, 'چشم و گوش', e.d + r.d);
  };

  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 18, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 129, fa, { size: 9.5, fill: c })}`;
    return svg(360, 192, `${title('یک واژه، سه قطعه: xer/ophthalm/ia')}
      ${part(8, 50, 'xer', '#1272a3', '#ddf1fb')}${part(64, 104, 'ophthalm', '#b5561f', '#fdeadb')}${part(174, 40, 'ia', '#3f8a05', '#e7f9d8')}
      ${br(8, 58, 'root', 'ریشه: خشک', '#1272a3')}${br(64, 168, 'root', 'ریشه: چشم', '#b5561f')}${br(174, 214, 'suffix', 'پسوند: حالت', '#3f8a05')}
      <rect x="226" y="40" width="126" height="40" rx="10" fill="#f8f6f5"/>${f(289, 57, 'حالتِ خشکیِ', { size: 10.5, fill: '#3f8a05', w: 800 })}${f(289, 73, 'چشم', { size: 10.5, fill: INK, w: 800 })}
      <path d="M194 150 C150 176 96 176 34 150" stroke="#b5561f" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M38 146 l-6 4 l7 3" stroke="#b5561f" stroke-width="2" fill="none"/>
      ${f(150, 186, 'معنی را از پسوند شروع کن، بعد ریشه‌ها را از اول بخوان', { size: 10, fill: '#b5561f', w: 700 })}`, 'آناتومی یک واژه پزشکی');
  };

  A['root-map-eye'] = () => {
    const e = eyeSag(186, 150, 86);
    const R = (pt, x2, y2, root, fa, side) => `${pin(pt[0], pt[1], side < 0 ? x2 + 46 : x2, y2)}${t(side < 0 ? 8 : x2 + 4, y2 - 2, root, { size: 10.5, anchor: side < 0 ? 'start' : 'start', fill: '#1e6f8a', w: 900 })}${f(side < 0 ? 8 : x2 + 4, y2 + 12, fa, { size: 9, anchor: 'start', fill: INK })}`;
    const P = e.P;
    return svg(360, 300, `${title('نقشه ریشه‌های چشم')}
      ${e.b}
      ${R(P.cornea, 70, 56, 'kerat/o, corne/o', 'قرنیه', -1)}${R(P.iris, 70, 104, 'irid/o, ir/o', 'عنبیه', -1)}${R(P.pupil, 70, 160, 'cor/o, pupill/o', 'مردمک', -1)}
      ${R(P.lens, 70, 214, 'phac/o, phak/o', 'عدسی', -1)}${R(P.ciliary, 70, 262, 'cycl/o', 'جسم مژگانی', -1)}
      ${R(P.choroid, 262, 46, 'choroid/o', 'مشیمیه', 1)}${R(P.sclera, 262, 278, 'scler/o', 'صلبیه', 1)}${R(P.retina, 296, 222, 'retin/o', 'شبکیه', 1)}
      ${R(P.vitreous, 290, 126, 'vitre/o', 'زجاجیه', 1)}`, 'نقشه ریشه‌های چشم', e.d);
  };

  A['root-map-ear'] = () => {
    const r = earSection(20, 62, 1);
    const P = r.P;
    const R = (pt, x2, y2, root, fa, anchor) => `${pin(pt[0], pt[1], x2, y2)}${t(x2, y2 - 4, root, { size: 10, anchor: anchor || 'middle', fill: '#b5561f', w: 900 })}${f(x2, y2 + 9, fa, { size: 9, anchor: anchor || 'middle', fill: INK })}`;
    return svg(360, 300, `${title('نقشه ریشه‌های گوش')}
      ${r.b}
      ${R(P.auricle, 40, 46, 'ot/o, aur/o', 'گوش، لاله', 'middle')}${R(P.tm, 128, 46, 'myring/o, tympan/o', 'پرده گوش')}
      ${R(P.stapes, 186, 280, 'staped/o', 'رکابی')}${R(P.canals, 250, 46, 'labyrinth/o', 'لابیرنت')}
      ${R(P.cochlea, 318, 252, 'cochle/o', 'حلزون')}${R(P.vestibule, 334, 120, 'vestibul/o', 'دهلیز', 'end')}
      ${R(P.tube, 252, 284, 'salping/o', 'شیپور استاش')}${R(P.mastoid, 80, 284, 'mastoid/o', 'ماستوئید')}`, 'نقشه ریشه‌های گوش', r.d);
  };

  A.twins = () => {
    const row = (y, a, af, b, bf, note) => `<rect x="10" y="${y}" width="150" height="46" rx="12" fill="#e4f1fb"/><rect x="200" y="${y}" width="150" height="46" rx="12" fill="#fdecdf"/>
      ${t(85, y + 20, a, { size: 11.5, w: 900, fill: '#1e6f8a' })}${f(85, y + 36, af, { size: 9.5, fill: INK })}${t(275, y + 20, b, { size: 11.5, w: 900, fill: '#b5561f' })}${f(275, y + 36, bf, { size: 9.5, fill: INK })}
      <circle cx="180" cy="${y + 23}" r="12" fill="#2b2b2b"/>${t(180, y + 27, 'VS', { size: 8.5, fill: '#fff', w: 900, sym: true })}${note ? f(180, y + 58, note, { size: 8.5, fill: MUTED }) : ''}`;
    return svg(360, 300, `${title('دام‌های همزاد')}
      ${row(30, 'ot/o', 'گوش (otitis)', 'or/o', 'دهان (oral)')}${row(96, 'malleus', 'استخوانچه چکشی', 'malleolus', 'قوزک پا', '')}
      ${row(162, '-opia', 'بینایی (myopia)', '-opsia', 'بینایی (achromatopsia)', 'هر دو یعنی بینایی؛ همزاد هم‌معنی')}${row(232, 'myring/o', 'پرده گوش', 'tympan/o', 'پرده گوش', 'دو ریشه، یک معنی')}`, 'دام‌های همزاد');
  };

  A['od-os-ou'] = () => {
    const L = eyeFront(110, 92, 0.9, { medial: 1 }), Rr = eyeFront(250, 92, 0.9, { medial: -1 });
    const ear = (x, flip) => `<path transform="translate(${x} 212) scale(${flip} 1)" d="M0 -32 C-26 -34 -32 0 -24 22 C-18 36 -4 38 0 28 C4 18 -10 12 -8 0 C-6 -12 6 -12 6 -20 C6 -28 4 -32 0 -32Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>`;
    return svg(360, 290, `${title('راست و چپ در پرونده: چشم و گوش')}
      ${L.b}${Rr.b}
      ${t(110, 140, 'OD', { size: 15, w: 900, fill: '#1e6f8a', sym: true })}${f(110, 156, 'چشم راست بیمار', { size: 9.5, fill: INK })}
      ${t(250, 140, 'OS', { size: 15, w: 900, fill: '#1e6f8a', sym: true })}${f(250, 156, 'چشم چپ بیمار', { size: 9.5, fill: INK })}
      ${ear(96, 1)}${ear(264, -1)}
      ${t(140, 208, 'AD', { size: 14, w: 900, fill: '#b5561f', sym: true })}${f(140, 224, 'گوش راست', { size: 9.5, fill: INK })}
      ${t(220, 208, 'AS', { size: 14, w: 900, fill: '#b5561f', sym: true })}${f(220, 224, 'گوش چپ', { size: 9.5, fill: INK })}
      <rect x="140" y="242" width="80" height="26" rx="13" fill="#eef7e6"/>${t(180, 260, 'OU • AU', { size: 11, w: 900, fill: '#3f8a05', sym: true })}
      ${f(180, 282, 'OU هر دو چشم و AU هر دو گوش؛ راستِ بیمار در تصویر سمت چپ ماست', { size: 9, fill: MUTED, w: 700 })}`, 'اختصارهای راست و چپ', L.d + Rr.d);
  };

  /* ================= دنیای ۱: چشم، ساختار و بینایی ================= */
  /* برچسب با خط راهنما: از نقطه pt به (x,y)؛ side منفی یعنی متن سمت چپ */
  const tag = (pt, x, y, en, fa, side, o) => { const p = o || {}; const a = side < 0 ? 'start' : 'end';
    const tx = side < 0 ? 6 : 354, sz = (p.size || 10) / 10, w = Math.max(en.length * 5.9, fa.length * 4.6) * sz + 8;
    return `${pin(pt[0], pt[1], side < 0 ? tx + w : tx - w, y - 4)}${t(tx, y - 2, en, { size: p.size || 10, anchor: a, w: 800, fill: p.fill || INK })}${f(tx, y + 11, fa, { size: (p.size || 10) - 1, anchor: a, fill: p.faFill })}`; };

  A['eye-section'] = () => {
    const e = eyeSag(168, 156, 84), P = e.P;
    return svg(360, 300, `${title('برش کره چشم')}
      ${e.b}
      ${tag(P.cornea, 70, 56, 'cornea', 'قرنیه', -1)}${tag(P.aqueous, 70, 98, 'aqueous humor', 'زلالیه', -1)}${tag(P.iris, 70, 140, 'iris', 'عنبیه', -1)}
      ${tag(P.pupil, 64, 180, 'pupil', 'مردمک', -1)}${tag(P.lens, 70, 220, 'lens', 'عدسی', -1)}${tag(P.ciliary, 80, 262, 'ciliary body', 'جسم مژگانی', -1)}
      ${tag(P.choroid, 290, 44, 'choroid', 'مشیمیه', 1)}${tag(P.vitreous, 300, 112, 'vitreous humor', 'زجاجیه', 1)}
      ${tag(P.fovea, 312, 150, 'fovea', 'گودال مرکزی', 1)}${tag(P.nerve, 316, 202, 'optic nerve', 'عصب بینایی', 1)}${tag(P.retina, 292, 246, 'retina', 'شبکیه', 1)}${tag(P.sclera, 240, 286, 'sclera', 'صلبیه (سفیدی چشم)', 1)}`, 'برش کره چشم', e.d);
  };

  A['eye-front'] = () => {
    const e = eyeFront(186, 140, 1.55, { medial: 1 }), P = e.P;
    return svg(360, 274, `${title('چشم از روبه‌رو و ساختارهای محافظ')}
      ${e.b}
      ${tag(P.brow, 74, 46, 'eyebrow', 'ابرو', -1)}${tag(P.lashes, 70, 84, 'eyelashes', 'مژه‌ها', -1)}${tag(P.upper, 296, 58, 'upper eyelid', 'پلک بالا', 1)}
      ${tag(P.iris, 300, 104, 'iris', 'عنبیه', 1)}${tag(P.pupil, 300, 186, 'pupil', 'مردمک', 1)}${tag(P.sclera, 80, 150, 'sclera', 'صلبیه', -1)}
      ${tag(P.lateral, 70, 196, 'lateral canthus', 'گوشه بیرونی چشم', -1)}${tag(P.medial, 300, 232, 'medial canthus', 'گوشه درونی چشم', 1)}${tag(P.lower, 150, 238, 'lower eyelid', 'پلک پایین', -1)}
      ${f(180, 268, 'پلک‌ها (palpebrae) و مژه‌ها چشم را می‌پوشانند؛ ملتحمه روی صلبیه و زیر پلک است', { size: 8.5, fill: MUTED, w: 700 })}`, 'چشم از روبه‌رو', e.d);
  };

  A['lacrimal-path'] = () => {
    const e = eyeFront(140, 132, 1.15, { medial: 1, brow: false }), sh = nid(), id = nid();
    return svg(360, 284, `${title('مسیر اشک: از غده تا بینی')}
      <path d="M262 40 C300 60 318 120 312 170 C306 214 290 246 262 256 L248 256 L250 96Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>
      <path d="M262 170 C276 186 280 212 270 238" stroke="${C.skinLine}" stroke-width="1.6" fill="none"/>
      ${e.b}
      <g filter="url(#${sh})"><path d="M66 74 C80 58 112 58 122 72 C116 84 86 88 66 74Z" fill="#f7b3c2" stroke="#c96a80" stroke-width="1.4"/></g>
      ${curve(id, 'M96 92 C120 120 150 134 182 136', '#3b8fd0', 2, true)}
      <path d="M186 134 C198 124 214 118 228 118 M186 142 C198 146 214 146 228 140" stroke="#c96a80" stroke-width="3" fill="none" stroke-linecap="round"/>
      <ellipse cx="236" cy="128" rx="10" ry="16" fill="#f7b3c2" stroke="#c96a80" stroke-width="1.4"/>
      <path d="M236 144 C238 180 246 214 258 236" stroke="#c96a80" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M236 144 C238 180 246 214 258 236" stroke="#f7b3c2" stroke-width="4" fill="none" stroke-linecap="round"/>
      ${[1, 2, 3, 4].map((n, i) => { const pt = [[134, 70], [104, 112], [236, 104], [262, 214]][i]; return `<circle cx="${pt[0]}" cy="${pt[1]}" r="8" fill="#1e88a8"/>${t(pt[0], pt[1] + 3.6, String(n), { size: 9, fill: '#fff', w: 900, sym: true })}`; }).join('')}
      ${lab(56, 44, '1 lacrimal gland', 'غده اشکی: ساخت اشک', { size: 9.5, anchor: 'start' })}${lab(6, 196, '2 tears wash the eye', 'اشک سطح چشم را می‌شوید', { size: 9.5, anchor: 'start' })}
      ${lab(354, 56, '3 lacrimal canals → sac', 'مجاری اشکی ← کیسه اشکی', { size: 9.5, anchor: 'end' })}${lab(6, 240, '4 nasolacrimal duct → nose', 'مجرای اشکی-بینی ← حفره بینی', { size: 9.5, anchor: 'start' })}
      ${f(180, 278, 'ریشه‌های dacry/o و lacrim/o هر دو یعنی اشک', { size: 9, fill: MUTED, w: 700 })}`, 'دستگاه اشکی', e.d + shadow(sh) + marker(id, '#3b8fd0'));
  };

  A['eye-muscles'] = () => {
    const sh = nid(), ig = nid();
    const m = (x1, y1, x2, y2, w) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${C.muscleLine}" stroke-width="${w + 3}" stroke-linecap="round"/><path d="M${x1} ${y1} L${x2} ${y2}" stroke="${C.muscle}" stroke-width="${w}" stroke-linecap="round"/><path d="M${x1} ${y1} L${x2} ${y2}" stroke="#f0a49a" stroke-width="2" stroke-linecap="round" opacity=".7"/>`;
    return svg(360, 304, `${title('شش عضله خارج‌چشمی (چشم راست از روبه‌رو)')}
      <g filter="url(#${sh})" transform="translate(0 14)">
        ${m(180, 92, 180, 44, 22)}${m(180, 208, 180, 256, 22)}${m(232, 150, 300, 150, 22)}${m(128, 150, 60, 150, 22)}
        ${m(218, 108, 262, 64, 12)}<circle cx="270" cy="56" r="9" fill="none" stroke="#9aa6ad" stroke-width="3"/>${m(270, 56, 300, 30, 9)}
        ${m(136, 196, 96, 236, 12)}
        <circle cx="180" cy="150" r="58" fill="${C.scl}" stroke="${C.sclLine}" stroke-width="2"/>
        <circle cx="180" cy="150" r="24" fill="url(#${ig})"/><circle cx="180" cy="150" r="9" fill="#111"/><circle cx="173" cy="143" r="3.5" fill="#fff"/>
      </g>
      ${lab(96, 46, 'superior rectus', 'راست بالایی: نگاه به بالا', { size: 9.5 })}${lab(262, 280, 'inferior rectus', 'راست پایینی: نگاه به پایین', { size: 9.5 })}
      ${lab(312, 190, 'medial rectus', 'راست داخلی: به سمت بینی', { size: 9.5 })}${lab(52, 190, 'lateral rectus', 'راست خارجی: به سمت گیجگاه', { size: 9.5 })}
      ${lab(318, 112, 'superior oblique', 'مایل بالایی (از قرقره)', { size: 9.5 })}${lab(56, 236, 'inferior oblique', 'مایل پایینی', { size: 9.5 })}
      ${t(306, 78, 'trochlea', { size: 8, fill: MUTED })}`, 'عضلات خارج‌چشمی', shadow(sh) + radial(ig, '#4fb3d4', C.iris2));
  };

  A['retina-fundus'] = () => {
    const g = nid(), sh = nid();
    const vessel = (d, c, w) => `<path d="${d}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;
    const rod = x => `<rect x="${x}" y="70" width="7" height="58" rx="3.5" fill="#8fb3d9" stroke="#4f78a8"/><circle cx="${x + 3.5}" cy="136" r="4" fill="#f2c94c" stroke="${C.nerveLine}"/>`;
    const cone = x => `<path d="M${x} 128 L${x + 5} 92 L${x + 10} 128Z" fill="#e88a6a" stroke="#b5562f"/><rect x="${x + 2}" y="128" width="6" height="8" fill="#e88a6a"/><circle cx="${x + 5}" cy="140" r="4" fill="#f2c94c" stroke="${C.nerveLine}"/>`;
    return svg(360, 260, `${title('ته چشم و گیرنده‌های نوری شبکیه')}
      <g filter="url(#${sh})"><circle cx="112" cy="134" r="88" fill="url(#${g})"/></g>
      <circle cx="150" cy="138" r="20" fill="#c9622f" opacity=".45"/><circle cx="150" cy="138" r="4" fill="#8a3a1a"/>
      <circle cx="74" cy="128" r="13" fill="#ffe7a3" stroke="#e8c26a" stroke-width="1.5"/>
      ${vessel('M74 120 C90 92 110 76 150 66', '#a8261f', 3)}${vessel('M74 136 C90 166 112 182 150 196', '#a8261f', 3)}${vessel('M76 118 C70 92 60 70 50 60', '#a8261f', 2.4)}${vessel('M76 138 C70 166 62 186 52 200', '#a8261f', 2.4)}
      ${vessel('M80 124 C100 100 126 92 170 90', '#c2413a', 1.8)}${vessel('M80 132 C102 160 128 172 170 176', '#c2413a', 1.8)}
      ${pin(74, 128, 40, 226)}${lab(40, 238, 'optic disc', 'صفحه بینایی: نقطه کور', { size: 9 })}
      ${pin(150, 138, 236, 230)}${lab(290, 238, 'macula • fovea', 'ماکولا و گودال مرکزی', { size: 9 })}
      ${pin(150, 66, 196, 52)}${lab(214, 46, 'retinal vessels', 'رگ‌های شبکیه', { size: 9 })}
      <rect x="216" y="62" width="138" height="122" rx="14" fill="#f4f7fb"/>
      ${rod(228)}${cone(242)}${rod(258)}${rod(270)}${cone(284)}${rod(300)}${cone(314)}${rod(330)}
      ${lab(250, 158, 'rods', 'نور کم، سیاه‌وسفید', { size: 9.5, fill: '#4f78a8' })}${lab(318, 158, 'cones', 'رنگ و دید دقیق', { size: 9.5, fill: '#b5562f' })}
      ${f(285, 200, 'در گودال مرکزی فقط مخروط‌ها هستند؛', { size: 9, fill: INK, w: 700 })}${f(285, 214, 'برای همین دقیق‌ترین دید را دارد', { size: 9, fill: INK, w: 700 })}`, 'ته چشم', radial(g, '#f6a35e', '#c9542a') + shadow(sh));
  };

  A['visual-pathway'] = () => {
    const sh = nid(), id = nid(), ig = nid();
    const eye = x => `<circle cx="${x}" cy="62" r="24" fill="${C.scl}" stroke="${C.sclLine}" stroke-width="1.6"/><path d="M${x - 14} 44 Q${x} 34 ${x + 14} 44" fill="url(#${ig})"/><path d="M${x - 22} 72 A24 24 0 0 0 ${x + 22} 72" stroke="${C.ret}" stroke-width="3" fill="none"/>`;
    return svg(360, 300, `${title('مسیر بینایی: از چشم تا قشر پس‌سری')}
      <g filter="url(#${sh})"><path d="M60 110 C60 70 300 70 300 110 L300 236 C300 290 60 290 60 236Z" fill="${C.brain}" stroke="${C.brainLine}" stroke-width="1.5" opacity=".75"/></g>
      ${eye(130)}${eye(230)}
      <path d="M130 86 L172 146 L130 196 L100 252 M230 86 L188 146 L230 196 L260 252" stroke="${C.nerve}" stroke-width="7" fill="none" stroke-linejoin="round"/>
      <path d="M130 86 L172 146 L130 196 L100 252 M230 86 L188 146 L230 196 L260 252" stroke="${C.nerveLine}" stroke-width="1" fill="none"/>
      <path d="M172 146 L188 146" stroke="${C.nerve}" stroke-width="10"/>
      <ellipse cx="128" cy="196" rx="11" ry="8" fill="#c7a6e0"/><ellipse cx="232" cy="196" rx="11" ry="8" fill="#c7a6e0"/>
      <path d="M86 236 C100 270 260 270 274 236" stroke="#e86a5a" stroke-width="10" fill="none" opacity=".55" stroke-linecap="round"/>
      ${lab(60, 40, 'eye • retina', 'چشم و شبکیه', { size: 9.5 })}${lab(300, 40, 'eye • retina', 'چشم و شبکیه', { size: 9.5 })}
      ${pin(150, 116, 78, 116)}${lab(40, 112, 'optic nerve', 'عصب بینایی (CN II)', { size: 9 })}
      ${pin(180, 146, 300, 132)}${lab(318, 128, 'optic chiasm', 'کیاسمای بینایی', { size: 9 })}
      ${pin(210, 172, 300, 170)}${lab(318, 166, 'optic tract', 'راه بینایی', { size: 9 })}
      ${pin(128, 196, 60, 196)}${lab(36, 186, 'thalamus', 'تالاموس', { size: 9 })}
      ${lab(180, 254, 'visual cortex • occipital lobe', 'قشر بینایی در لوب پس‌سری', { size: 9.5, fill: '#b5402f' })}
      ${f(180, 294, 'تصویر روی شبکیه وارونه است؛ مغز آن را درست می‌کند', { size: 9, fill: MUTED, w: 700 })}`, 'مسیر بینایی', shadow(sh) + linear(ig, C.iris, C.iris2));
  };

  A['accommodation-art'] = () => {
    const id = nid(), sh = nid();
    const panel = (y, lensRx, rays, en, fa, note) => `
      <circle cx="232" cy="${y}" r="44" fill="${C.vit}" stroke="${C.sclLine}" stroke-width="2"/><path d="M262 ${y - 32} A44 44 0 0 1 262 ${y + 32}" stroke="${C.ret}" stroke-width="3" fill="none"/>
      <ellipse cx="200" cy="${y}" rx="${lensRx}" ry="22" fill="${C.lens}" stroke="${C.lensLine}" stroke-width="1.5"/>
      ${rays}
      ${lab(80, y - 40, en, fa, { size: 9.5 })}${f(80, y + 46, note, { size: 8.5, fill: MUTED })}`;
    const far = `<path d="M20 74 L200 74 L276 94 M20 114 L200 114 L276 94" stroke="#e8a33a" stroke-width="1.8" fill="none"/><text x="14" y="98" font-size="16">🌲</text>`;
    const near = `<path d="M120 196 L200 180 L276 196 M120 196 L200 212 L276 196" stroke="#e8a33a" stroke-width="1.8" fill="none"/><text x="108" y="202" font-size="14">📖</text>`;
    return svg(360, 280, `${title('تطابق: عدسی برای دور و نزدیک')}
      ${panel(94, 7, far, 'far vision', 'دید دور', 'پرتوها موازی؛ عدسی تخت')}
      ${panel(196, 13, near, 'near vision', 'دید نزدیک', 'پرتوها واگرا؛ عدسی گردتر')}
      ${pin(276, 94, 316, 60)}${lab(330, 52, 'retina', 'شبکیه', { size: 9 })}
      ${f(180, 272, 'عضله مژگانی شکل عدسی را تغییر می‌دهد (accommodation)؛ در پیری سخت می‌شود', { size: 8.5, fill: INK, w: 700 })}`, 'تطابق', shadow(sh) + marker(id));
  };

  A['pupil-sizes'] = () => {
    const a = eyeFront(62, 100, 0.66, { pupil: 3.6, brow: false, lashes: false }), b = eyeFront(180, 100, 0.66, { pupil: 7.5, brow: false, lashes: false }), c = eyeFront(298, 100, 0.66, { pupil: 14, brow: false, lashes: false });
    return svg(360, 230, `${title('مردمک در نور زیاد و کم')}
      ${a.b}${b.b}${c.b}
      ${t(62, 52, '☀️', { size: 18 })}${t(298, 52, '🌙', { size: 18 })}
      ${lab(62, 150, 'miosis', 'تنگی مردمک', { size: 10.5, fill: '#1e6f8a' })}${lab(180, 150, 'normal', 'اندازه معمولی', { size: 10.5 })}${lab(298, 150, 'mydriasis', 'گشادی مردمک', { size: 10.5, fill: '#b5561f' })}
      ${f(62, 182, 'نور زیاد', { size: 9, fill: MUTED })}${f(298, 182, 'نور کم یا قطره mydriatic', { size: 9, fill: MUTED })}
      ${f(180, 214, 'عنبیه اندازه مردمک را تنظیم می‌کند؛ مردمک‌های نابرابر یعنی anisocoria', { size: 9, fill: INK, w: 700 })}`, 'اندازه مردمک', a.d + b.d + c.d);
  };

  /* ================= دنیای ۲: بیماری‌های چشم ================= */
  /* چشم ساده برای پرتوها: کره (rx افقی) با عدسی، شبکیه در سمت راست؛ fx محل کانون */
  function rayEye(x, y, rx, fx, o) {
    const p = o || {}; const id = nid();
    const lensX = x - rx + 14, retX = x + rx - 3;
    const rays = (p.astig ? [[-18, fx - 14], [18, fx + 14], [-8, fx], [8, fx]] : [[-18, fx], [-6, fx], [6, fx], [18, fx]]).map(r => `<path d="M${x - rx - 46} ${y + r[0]} L${lensX} ${y + r[0]} L${r[1]} ${y}${r[1] < retX ? ` L${retX} ${y - r[0] * (retX - r[1]) / (r[1] - lensX)}` : ''}" stroke="#e8a33a" stroke-width="1.5" fill="none"/>`).join('');
    return `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="34" fill="${C.vit}" stroke="${C.sclLine}" stroke-width="1.8"/>
      <path d="M${retX - 8} ${y - 26} Q${retX + 4} ${y} ${retX - 8} ${y + 26}" stroke="${C.ret}" stroke-width="3" fill="none"/>
      ${p.lens ? p.lens : ''}<ellipse cx="${lensX}" cy="${y}" rx="6" ry="20" fill="${C.lens}" stroke="${C.lensLine}" stroke-width="1.3"/>
      ${rays}<circle cx="${fx}" cy="${y}" r="3.4" fill="#d9443a"/>`;
  }

  A['refraction-errors'] = () => {
    const box = (x, y, en, fa, note, eye, c) => `<rect x="${x}" y="${y}" width="172" height="134" rx="14" fill="${c}"/>${eye}${lab(x + 86, y + 18, en, fa, { size: 10 })}${f(x + 86, y + 128, note, { size: 8.5, fill: INK, w: 700 })}`;
    return svg(360, 318, `${title('عیب‌های انکساری: نور کجا متمرکز می‌شود؟')}
      ${box(6, 30, 'emmetropia', 'بینایی طبیعی', 'کانون درست روی شبکیه', rayEye(114, 108, 42, 153), '#eef7e6')}
      ${box(182, 30, 'myopia', 'نزدیک‌بینی', 'کره بلند؛ کانون جلوی شبکیه', rayEye(294, 108, 50, 318), '#e4f1fb')}
      ${box(6, 168, 'hyperopia', 'دوربینی', 'کره کوتاه؛ کانون پشت شبکیه', rayEye(112, 246, 34, 160), '#fdecdf')}
      ${box(182, 168, 'astigmatism', 'آستیگماتیسم', 'قرنیه نامنظم؛ چند کانون', rayEye(290, 246, 42, 329, { astig: true }), '#f1ecfb')}
      ${f(180, 314, 'عدسی مقعر (concave) نزدیک‌بینی و عدسی محدب (convex) دوربینی را اصلاح می‌کند', { size: 8.5, fill: MUTED, w: 700 })}`, 'عیب‌های انکساری');
  };

  A['cataract-art'] = () => {
    const e = eyeSag(110, 130, 68, { cloudyLens: true }), fr = eyeFront(282, 108, 0.9, { pupilFill: '#d6d2c6', pupil: 9, brow: false });
    const blur = nid();
    return svg(360, 292, `${title('آب مروارید: کدر شدن عدسی')}
      ${e.b}${fr.b}
      ${pin(e.P.lens[0], e.P.lens[1], 60, 222)}${lab(60, 236, 'cloudy lens', 'عدسی کدر', { size: 9.5 })}
      ${pin(282, 108, 282, 150)}${lab(282, 166, 'opaque pupil', 'مردمک خاکستری-سفید', { size: 9.5 })}
      <rect x="216" y="196" width="132" height="58" rx="10" fill="#dfe8ee"/><g filter="url(#${blur})"><circle cx="252" cy="226" r="14" fill="#e98a3a"/><circle cx="292" cy="222" r="11" fill="#3b6fd4"/><rect x="310" y="208" width="24" height="30" rx="4" fill="#58cc02"/></g>
      ${f(282, 268, 'دید تار، کم‌رنگ و خیرگی در برابر نور', { size: 9, fill: INK, w: 700 })}
      ${f(180, 286, 'درمان: فیکوامولسیفیکاسیون و گذاشتن لنز داخل چشمی (IOL)', { size: 9, fill: MUTED, w: 700 })}`, 'آب مروارید', e.d + fr.d + `<filter id="${blur}"><feGaussianBlur stdDeviation="3.2"/></filter>`);
  };

  A['glaucoma-art'] = () => {
    const id = nid(), id2 = nid(), sh = nid();
    const disc = (x, cup, en, fa) => `<circle cx="${x}" cy="196" r="30" fill="#f2a05e"/><circle cx="${x}" cy="196" r="17" fill="#ffe7a3" stroke="#e8c26a"/><circle cx="${x}" cy="196" r="${cup}" fill="#fff8e0"/>${[-1, 1].map(s => `<path d="M${x} ${196 + s * 6} C${x + 14} ${196 + s * 16} ${x + 22} ${196 + s * 24} ${x + 28} ${196 + s * 30}" stroke="#a8261f" stroke-width="2" fill="none"/>`).join('')}${lab(x, 244, en, fa, { size: 9.5 })}`;
    return svg(360, 268, `${title('گلوکوم: فشار داخل چشم و آسیب عصب بینایی')}
      <g filter="url(#${sh})">
        <path d="M30 40 Q4 100 30 160" stroke="${C.aqLine}" stroke-width="2" fill="${C.aq}"/>
        <path d="M44 56 L44 88 M44 112 L44 144" stroke="${C.iris}" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="66" cy="100" rx="10" ry="30" fill="${C.lens}" stroke="${C.lensLine}"/>
        <ellipse cx="58" cy="56" rx="7" ry="11" fill="${C.chor}" opacity=".8"/>
      </g>
      ${curve(id, 'M62 60 C58 74 52 86 46 98 C40 108 30 108 24 100 C20 92 22 74 32 58', '#2f8fb0', 2)}
      <path d="M30 52 l8 8 M38 52 l-8 8" stroke="#d9443a" stroke-width="3"/>
      ${pin(34, 56, 134, 56)}${lab(196, 50, 'drainage angle', 'زاویه تخلیه و کانال شلم', { size: 9.5 })}
      ${pin(60, 70, 134, 96)}${lab(196, 92, 'aqueous humor', 'زلالیه در اتاق قدامی', { size: 9.5 })}
      <rect x="248" y="112" width="104" height="34" rx="17" fill="#fde2df"/>${t(300, 134, 'IOP ↑', { size: 13, w: 900, fill: '#c2413a', sym: true })}
      ${f(196, 132, 'تخلیه بسته است:', { size: 9.5, fill: '#c2413a', w: 800 })}
      ${disc(90, 6, 'normal optic disc', 'صفحه بینایی سالم')}${disc(250, 14, 'cupped disc', 'گودشدگی صفحه بینایی')}
      ${curve(id2, 'M134 196 L206 196', LINE, 2)}`, 'گلوکوم', shadow(sh) + marker(id, '#2f8fb0') + marker(id2));
  };

  A['amd-art'] = () => {
    const grid = (x, wavy, spot) => { let g = ''; for (let i = 0; i <= 8; i++) { const v = x + i * 14; g += wavy ? `<path d="M${v} 56 Q${v + (i > 2 && i < 6 ? 5 : 0)} 112 ${v} 168" stroke="#555" fill="none"/>` : `<path d="M${v} 56 V168" stroke="#555"/>`; const h = 56 + i * 14; g += wavy ? `<path d="M${x} ${h} Q${x + 56} ${h + (i > 2 && i < 6 ? 5 : 0)} ${x + 112} ${h}" stroke="#555" fill="none"/>` : `<path d="M${x} ${h} H${x + 112}" stroke="#555"/>`; } return `<rect x="${x}" y="56" width="112" height="112" fill="#fff" stroke="#333"/>${g}<circle cx="${x + 56}" cy="112" r="3" fill="#111"/>${spot ? `<circle cx="${x + 56}" cy="112" r="22" fill="#222" opacity=".85" filter="url(#${spot})"/>` : ''}`; };
    const bl = nid();
    return svg(360, 250, `${title('دژنراسیون ماکولا: از دست رفتن دید مرکزی')}
      ${grid(24, false)}${grid(206, true, bl)}
      ${lab(80, 40, 'Amsler grid • normal', 'جدول آمسلر: دید سالم', { size: 9.5 })}${lab(262, 40, 'macular degeneration', 'خط‌های موج‌دار و لکه تیره', { size: 9.5 })}
      ${lab(262, 188, 'central scotoma', 'لکه کور مرکزی', { size: 9.5, fill: '#b5402f' })}
      ${f(180, 222, 'دید محیطی می‌ماند ولی خواندن و دیدن چهره‌ها سخت می‌شود', { size: 9, fill: INK, w: 700 })}
      ${f(180, 240, 'نوع شایع وابسته به سن است: AMD یا ARMD', { size: 9, fill: MUTED, w: 700 })}`, 'دژنراسیون ماکولا', `<filter id="${bl}"><feGaussianBlur stdDeviation="5"/></filter>`);
  };

  A['retinal-detach-art'] = () => {
    const e = eyeSag(150, 140, 92), P = e.P;
    return svg(360, 280, `${title('جداشدگی شبکیه')}
      ${e.b}
      <path d="M214 196 C196 176 184 168 166 170 C150 172 140 186 134 204" stroke="${C.ret}" stroke-width="4" fill="none"/>
      <path d="M214 196 C200 214 170 224 134 204 C140 186 150 172 166 170 C184 168 196 176 214 196Z" fill="#cfe9fb" opacity=".8"/>
      <path d="M198 186 l6 -6" stroke="#c2413a" stroke-width="2.4"/>
      ${pin(200, 184, 300, 222)}${lab(306, 234, 'retinal tear', 'پارگی شبکیه', { size: 9.5 })}
      ${pin(170, 200, 92, 226)}${lab(92, 238, 'detached retina + fluid', 'شبکیه جداشده و مایع زیر آن', { size: 9.5 })}
      <rect x="276" y="40" width="76" height="76" rx="10" fill="#bfe1f3"/><path d="M276 40 h76 v34 C330 60 300 64 276 46Z" fill="#2b2b2b" opacity=".85"/>
      ${f(314, 132, 'مثل پرده‌ای', { size: 9, fill: INK, w: 700 })}${f(314, 146, 'روی دید', { size: 9, fill: INK, w: 700 })}
      ${f(180, 274, 'جرقه نور، مگس‌پران و پرده سیاه: اورژانس؛ درمان با باکل اسکلرا یا لیزر', { size: 8.5, fill: MUTED, w: 700 })}`, 'جداشدگی شبکیه', e.d);
  };

  A['strabismus-art'] = () => {
    const pair = (y, gR, gL, en, fa, note) => { const a = eyeFront(110, y, 0.62, { gaze: gR, brow: false, lashes: false, medial: 1 }), b = eyeFront(220, y, 0.62, { gaze: gL, brow: false, lashes: false, medial: -1 }); return { d: a.d + b.d, b: `${a.b}${b.b}${lab(318, y - 6, en, fa, { size: 9.5 })}${note ? f(318, y + 22, note, { size: 8.5, fill: MUTED }) : ''}` }; };
    const n = pair(68, 0, 0, 'normal', 'هر دو چشم موازی'), es = pair(144, 12, 0, 'esotropia', 'انحراف به داخل', 'ET: cross-eye'), ex = pair(220, -12, 0, 'exotropia', 'انحراف به خارج', 'XT: walleye');
    return svg(360, 280, `${title('استرابیسم: دو چشم هم‌راستا نیستند')}
      ${n.b}${es.b}${ex.b}
      ${t(110, 42, 'OD', { size: 9.5, w: 900, fill: '#1e6f8a', sym: true })}${t(220, 42, 'OS', { size: 9.5, w: 900, fill: '#1e6f8a', sym: true })}
      ${f(180, 272, 'اگر درمان نشود، مغز تصویر چشم منحرف را نادیده می‌گیرد: تنبلی چشم (amblyopia)', { size: 8.5, fill: INK, w: 700 })}`, 'استرابیسم', n.d + es.d + ex.d);
  };

  A['lid-disorders'] = () => {
    const P = [];
    const cell = (cx, cy, opt, extra, en, fa) => { const e = eyeFront(cx, cy, 0.6, Object.assign({ brow: false }, opt)); P.push(e.d); return `${e.b}${extra || ''}${lab(cx, cy + 40, en, fa, { size: 9.5 })}`; };
    return svg(360, 290, `${title('بیماری‌های پلک')}
      ${cell(62, 76, {}, `<circle cx="70" cy="62" r="7" fill="#e86a5a" stroke="#b5402f"/><circle cx="70" cy="60" r="2.4" fill="#ffe08a"/>`, 'hordeolum', 'گل‌مژه: عفونت دردناک لبه پلک')}
      ${cell(180, 76, {}, `<ellipse cx="190" cy="52" rx="9" ry="7" fill="#f2c4a8" stroke="#c98a62"/>`, 'chalazion', 'شالازیون: کیست بی‌درد')}
      ${cell(298, 76, { lashes: false }, `<path d="M270 74 C282 64 316 64 328 76 L328 66 C316 54 282 54 270 66Z" fill="${C.lid}" stroke="${C.skinLine}"/><path d="M270 76 C286 68 312 68 328 78" stroke="#7a4e3c" stroke-width="1.6" fill="none"/>`, 'blepharoptosis', 'افتادگی پلک بالا')}
      ${cell(120, 192, { lashes: false }, `<path d="M94 204 C110 216 132 216 148 204 L146 210 C130 222 110 222 96 210Z" fill="#e8818a"/>`, 'ectropion', 'برگشت پلک به بیرون')}
      ${cell(240, 192, { lashes: false }, `${[0, 1, 2, 3].map(i => `<path d="M${226 + i * 8} 204 l${2} -6" stroke="#3a2c26" stroke-width="1.3"/>`).join('')}`, 'entropion', 'برگشت پلک و مژه به درون')}
      ${f(180, 282, 'ریشه blephar/o یعنی پلک؛ ‎-ptosis‎ یعنی افتادگی', { size: 9, fill: MUTED, w: 700 })}`, 'بیماری‌های پلک', P.join(''));
  };

  A['field-defects'] = () => {
    const cid = nid();
    const fld = (x, y, inner, en, fa) => `<g><clipPath id="${cid + x + y}"><circle cx="${x}" cy="${y}" r="34"/></clipPath><circle cx="${x}" cy="${y}" r="34" fill="#bfe1f3" stroke="#6f9fc0"/><g clip-path="url(#${cid + x + y})">${inner(x, y)}</g><circle cx="${x}" cy="${y}" r="34" fill="none" stroke="#6f9fc0" stroke-width="1.5"/></g>${lab(x, y + 50, en, fa, { size: 9 })}`;
    return svg(360, 290, `${title('میدان بینایی در بیماری‌ها')}
      ${fld(62, 80, () => '<path d="M40 92 l10 -14 l8 8 l12 -18 l14 24z" fill="#58a05a" opacity=".6"/>', 'normal field', 'میدان بینایی سالم')}
      ${fld(180, 80, (x, y) => `<path d="M${x - 40} ${y - 40} h80 v80 h-80Z M${x - 13} ${y} a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0Z" fill="#1d1d1d" fill-rule="evenodd" opacity=".9"/>`, 'tunnel vision', 'دید تونلی در گلوکوم')}
      ${fld(298, 80, (x, y) => `<circle cx="${x}" cy="${y}" r="15" fill="#1d1d1d" opacity=".9"/>`, 'central scotoma', 'لکه کور مرکزی در AMD')}
      ${fld(120, 196, (x, y) => `<rect x="${x}" y="${y - 40}" width="40" height="80" fill="#1d1d1d" opacity=".9"/>`, 'hemianopia', 'نیم‌کوری میدان بینایی')}
      ${fld(240, 196, (x, y) => `<path d="M${x - 40} ${y - 40} h80 v34 C${x + 20} ${y - 18} ${x - 14} ${y - 14} ${x - 40} ${y - 30}Z" fill="#1d1d1d" opacity=".9"/>`, 'curtain', 'پرده در جداشدگی شبکیه')}`, 'میدان بینایی');
  };

  A['eye-infections'] = () => {
    const P = [];
    const cell = (cx, cy, opt, extra, en, fa) => { const e = eyeFront(cx, cy, 0.68, Object.assign({ brow: false }, opt)); P.push(e.d); return `${e.b}${extra || ''}${lab(cx, cy + 42, en, fa, { size: 9.5 })}`; };
    return svg(360, 270, `${title('التهاب و عفونت چشم')}
      ${cell(92, 80, { redSclera: true, sclera: '#fbd9d6' }, '', 'conjunctivitis', 'التهاب ملتحمه (چشم صورتی)')}
      ${cell(268, 80, { lidColor: '#f0a59a' }, `<path d="M228 74 C246 60 290 60 308 76" stroke="#d9443a" stroke-width="2.2" fill="none"/>`, 'blepharitis', 'التهاب لبه پلک')}
      ${cell(92, 190, { medial: 1 }, `<ellipse cx="128" cy="206" rx="11" ry="9" fill="#ee8d7e" stroke="#c2413a" opacity=".9"/>`, 'dacryocystitis', 'التهاب کیسه اشکی')}
      ${cell(268, 190, {}, `<path d="M258 184 l8 6 l-6 6" stroke="#fff" stroke-width="2.4" fill="none"/>`, 'keratitis', 'التهاب قرنیه')}
      ${f(180, 264, 'پسوند ‎-itis‎ یعنی التهاب؛ ریشه، جای التهاب را می‌گوید', { size: 9, fill: MUTED, w: 700 })}`, 'التهاب‌های چشم', P.join(''));
  };

  /* ================= دنیای ۳: گوش، شنوایی و تعادل ================= */
  A['ear-section'] = () => {
    const r = earSection(20, 70, 1), P = r.P;
    const L = (pt, x, y, en, fa, a) => `${pin(pt[0], pt[1], x, y < pt[1] ? y + 6 : y)}${lab(x, y + (y < pt[1] ? -12 : 12), en, fa, { size: 9, anchor: a })}`;
    return svg(360, 322, `${title('سه بخش گوش')}
      <rect x="20" y="30" width="96" height="16" rx="8" fill="#fde3d0"/><rect x="138" y="30" width="56" height="16" rx="8" fill="#fff0d6"/><rect x="200" y="30" width="138" height="16" rx="8" fill="#d6eefa"/>
      ${f(68, 42, 'گوش بیرونی', { size: 9, fill: '#b5561f', w: 800 })}${f(166, 42, 'گوش میانی', { size: 9, fill: '#9a7a2a', w: 800 })}${f(269, 42, 'گوش درونی', { size: 9, fill: '#1e6f8a', w: 800 })}
      ${r.b}
      ${L(P.auricle, 40, 284, 'auricle (pinna)', 'لاله گوش')}${L(P.canal, 58, 70, 'ear canal', 'مجرای شنوایی')}
      ${L(P.tm, 150, 284, 'tympanic membrane', 'پرده گوش')}${L(P.malleus, 120, 70, 'malleus', 'چکشی')}${L(P.incus, 176, 70, 'incus', 'سندانی')}
      ${L(P.stapes, 236, 284, 'stapes', 'رکابی')}${L(P.canals, 268, 70, 'semicircular canals', 'مجاری نیم‌دایره')}
      ${L(P.cochlea, 312, 284, 'cochlea', 'حلزون')}${L(P.nerve, 330, 138, 'CN VIII', 'عصب هشتم', 'end')}`, 'سه بخش گوش', r.d);
  };

  A['ossicle-chain'] = () => {
    const sh = nid(), id = nid();
    const bone = (d) => `<path d="${d}" fill="${C.oss}" stroke="${C.ossLine}" stroke-width="1.6"/>`;
    return svg(360, 260, `${title('استخوانچه‌ها: کوچک‌ترین استخوان‌های بدن')}
      <g filter="url(#${sh})">
        <path d="M60 60 Q40 130 60 200" stroke="${C.tmLine}" stroke-width="6" fill="none"/>
        ${bone('M66 132 C78 128 92 120 100 100 C106 84 112 64 128 60 C148 56 160 72 154 90 C148 106 126 108 114 104 C108 116 96 132 70 140Z')}
        ${bone('M160 74 C172 60 196 62 206 76 C214 90 206 104 196 108 L190 150 C188 158 180 158 180 150 L184 108 C168 104 156 92 160 74Z')}
        ${bone('M190 150 L226 136 L230 146 L198 160Z')}
        ${bone('M226 128 C240 112 268 112 278 128 L278 160 C268 176 240 176 226 160 L232 154 C242 164 262 164 270 154 L270 132 C262 122 242 122 232 134Z')}
        <rect x="276" y="122" width="10" height="44" rx="3" fill="${C.oss}" stroke="${C.ossLine}" stroke-width="1.6"/>
        <ellipse cx="298" cy="144" rx="9" ry="26" fill="${C.lab}" stroke="${C.labLine}" stroke-width="1.4"/>
      </g>
      ${curve(id, 'M20 120 L52 120', '#e8a33a', 2.4)}${t(26, 108, '〰', { size: 14, fill: '#e8a33a' })}
      ${lab(60, 226, 'tympanic membrane', 'پرده گوش', { size: 9.5 })}${lab(118, 40, 'malleus', 'چکشی (hammer)', { size: 10 })}
      ${lab(186, 196, 'incus', 'سندانی (anvil)', { size: 10 })}${lab(252, 96, 'stapes', 'رکابی (stirrup)', { size: 10 })}${lab(322, 196, 'oval window', 'دریچه بیضی', { size: 9.5 })}
      ${f(180, 252, 'لرزش پرده گوش با این زنجیر بزرگ‌تر می‌شود و به دریچه بیضی می‌رسد', { size: 9, fill: MUTED, w: 700 })}`, 'استخوانچه‌ها', shadow(sh) + marker(id, '#e8a33a'));
  };

  A['inner-ear-art'] = () => {
    const sh = nid(), cg = nid();
    const loop = (d) => `<path d="${d}" stroke="${C.labLine}" stroke-width="13" fill="none" stroke-linecap="round"/><path d="${d}" stroke="${C.lab}" stroke-width="9" fill="none" stroke-linecap="round"/>`;
    return svg(360, 296, `${title('گوش درونی: لابیرنت شنوایی و تعادل')}
      <g filter="url(#${sh})" transform="translate(0 20)">
        ${loop('M120 120 C96 70 120 34 150 44 C172 52 168 90 146 112')}
        ${loop('M134 116 C150 70 196 60 204 86 C210 108 180 124 152 122')}
        ${loop('M118 124 C80 120 66 96 80 80 C94 66 116 84 124 108')}
        <ellipse cx="140" cy="136" rx="30" ry="22" fill="url(#${cg})" stroke="${C.labLine}" stroke-width="1.6"/>
        <circle cx="222" cy="176" r="46" fill="url(#${cg})" stroke="${C.labLine}" stroke-width="1.6"/>${spiral(222, 176, 38, 2.5, C.labLine, 5)}
        <path d="M160 140 C176 150 186 156 192 160" stroke="${C.labLine}" stroke-width="16" fill="none"/>
        <path d="M262 150 C290 140 320 128 350 120 L350 138 C324 146 296 158 266 170Z" fill="${C.nerve}" stroke="${C.nerveLine}"/>
        <ellipse cx="112" cy="150" rx="8" ry="11" fill="${C.oss}" stroke="${C.ossLine}"/>
      </g>
      ${pin(180, 84, 262, 62)}${lab(300, 50, 'semicircular canals', 'مجاری نیم‌دایره: چرخش سر', { size: 9.5, fill: '#1e6f8a' })}
      ${pin(140, 160, 60, 220)}${lab(60, 234, 'vestibule', 'دهلیز: تعادل و جاذبه', { size: 9.5 })}
      ${pin(112, 170, 40, 180)}${lab(40, 196, 'oval window', 'دریچه بیضی', { size: 9 })}
      ${lab(222, 262, 'cochlea', 'حلزون: شنوایی', { size: 10, fill: '#1e6f8a' })}
      ${lab(318, 228, 'CN VIII', 'عصب دهلیزی-حلزونی', { size: 9.5 })}
      ${f(180, 290, 'دو بخش، دو کار: حلزون برای شنیدن، دهلیز و مجاری نیم‌دایره برای تعادل', { size: 8.5, fill: MUTED, w: 700 })}`, 'گوش درونی', shadow(sh) + radial(cg, '#d8f2fc', C.lab));
  };

  A['cochlea-corti'] = () => {
    const sh = nid();
    const hair = x => `<rect x="${x}" y="150" width="9" height="30" rx="4" fill="#f6c9a8" stroke="#c98a62"/>${[0, 3, 6].map(d => `<path d="M${x + 1.5 + d} 150 l0 -10" stroke="#8a5a3a" stroke-width="1.2"/>`).join('')}`;
    return svg(360, 280, `${title('اندام کورتی: گیرنده شنوایی در حلزون')}
      <g filter="url(#${sh})">
        <rect x="20" y="40" width="320" height="200" rx="18" fill="#e8f6fc" stroke="${C.labLine}" stroke-width="1.4"/>
        <rect x="40" y="130" width="280" height="60" rx="10" fill="#d0ecf8"/>
        <path d="M40 140 L320 140" stroke="#7aa7c2" stroke-width="5"/>
        ${[70, 104, 138, 172, 206, 240, 274].map(hair).join('')}
        <path d="M60 136 L300 136" stroke="#9b87c6" stroke-width="8" stroke-linecap="round" opacity=".85"/>
        <path d="M40 196 L320 196" stroke="#7aa7c2" stroke-width="5"/>
        ${[90, 140, 190, 240, 290].map(x => `<path d="M${x} 196 C${x} 212 ${x + 10} 220 ${x + 18} 230" stroke="${C.nerveLine}" stroke-width="2" fill="none"/>`).join('')}
      </g>
      ${lab(180, 66, 'cochlear fluid', 'مایع درون حلزون (لرزش)', { size: 9.5 })}<path d="M80 96 Q110 84 140 96 T200 96 T260 96" stroke="#3b8fd0" stroke-width="2" fill="none"/>
      ${lab(312, 118, 'tectorial membrane', 'غشای پوششی', { size: 8.5, anchor: 'end' })}
      ${lab(70, 120, 'hair cells', 'یاخته‌های مویی', { size: 9, anchor: 'start' })}
      ${lab(180, 254, 'cochlear nerve fibers → brain', 'رشته‌های عصب حلزونی به مغز', { size: 9.5 })}
      ${f(180, 276, 'خم شدن موهای این یاخته‌ها، لرزش را به پیام عصبی تبدیل می‌کند', { size: 8.5, fill: MUTED, w: 700 })}`, 'اندام کورتی', shadow(sh));
  };

  A['sound-path-art'] = () => {
    const st = [['🔊', 'sound wave', 'موج صوتی'], ['👂', 'auricle • canal', 'لاله و مجرا'], ['🥁', 'eardrum', 'پرده گوش'], ['🦴', 'ossicles', 'استخوانچه‌ها'],
      ['🪟', 'oval window', 'دریچه بیضی'], ['🐌', 'cochlea', 'حلزون و مایع'], ['⚡', 'CN VIII', 'عصب شنوایی'], ['🧠', 'temporal lobe', 'قشر شنوایی']];
    const id = nid();
    const box = (i) => { const col = i % 4, row = Math.floor(i / 4); const x = row === 0 ? 268 - col * 86 : 14 + col * 86, y = 40 + row * 110; const s = st[i];
      return `<rect x="${x}" y="${y}" width="78" height="86" rx="14" fill="${row ? '#e4f1fb' : '#fdecdf'}"/><circle cx="${x + 14}" cy="${y + 14}" r="9" fill="#1e88a8"/>${t(x + 14, y + 18, String(i + 1), { size: 9, fill: '#fff', w: 900, sym: true })}
        ${t(x + 39, y + 40, s[0], { size: 20 })}${t(x + 39, y + 62, s[1], { size: 9, w: 900 })}${f(x + 39, y + 77, s[2], { size: 9, fill: INK })}`; };
    return svg(360, 270, `${title('مسیر صدا: از هوا تا مغز')}
      ${st.map((_, i) => box(i)).join('')}
      ${[0, 1, 2].map(i => curve(id, `M${266 - i * 86} 83 L${256 - i * 86} 83`, LINE, 2)).join('')}
      ${curve(id, 'M40 128 L40 148', LINE, 2)}
      ${[0, 1, 2].map(i => curve(id, `M${94 + i * 86} 193 L${98 + i * 86} 193`, LINE, 2)).join('')}
      ${f(180, 260, 'هوا ← لرزش جامد ← موج مایع ← پیام عصبی', { size: 9.5, fill: '#b5561f', w: 800 })}`, 'مسیر صدا', marker(id));
  };

  A['balance-art'] = () => {
    const sh = nid();
    const head = (x, tilt) => `<g transform="rotate(${tilt} ${x} 120)"><circle cx="${x}" cy="110" r="38" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>
      <path d="M${x - 16} 150 L${x - 16} 168 L${x + 16} 168 L${x + 16} 150" fill="${C.skin}" stroke="${C.skinLine}"/>
      <circle cx="${x + 18}" cy="114" r="15" fill="none" stroke="${C.labLine}" stroke-width="7"/><path d="M${x + 6} ${116 + tilt / 6} a15 15 0 0 0 26 4" stroke="#3b8fd0" stroke-width="7" fill="none"/></g>`;
    return svg(360, 250, `${title('تعادل: مایع مجاری نیم‌دایره با چرخش سر حرکت می‌کند')}
      <g filter="url(#${sh})">${head(90, 0)}${head(260, 28)}</g>
      ${lab(90, 196, 'head still', 'سر ثابت: مایع آرام', { size: 9.5 })}${lab(260, 196, 'head turns', 'سر می‌چرخد: مایع جابه‌جا می‌شود', { size: 9.5 })}
      ${f(180, 232, 'یاخته‌های مویی حرکت مایع را حس می‌کنند؛ پیام از عصب دهلیزی به مغز می‌رود', { size: 8.5, fill: INK, w: 700 })}
      ${f(180, 246, 'اختلال این بخش: سرگیجه چرخشی (vertigo)', { size: 8.5, fill: MUTED, w: 700 })}`, 'تعادل', shadow(sh));
  };

  A['eustachian-art'] = () => {
    const r = earSection(6, 50, 0.7), sh = nid();
    return svg(360, 250, `${title('شیپور استاش: تنظیم فشار گوش میانی')}
      ${r.b}
      <path d="M262 190 C290 196 316 196 344 188 L344 236 L262 236Z" fill="#f7c1c9" stroke="#c96a80"/>
      ${f(306, 226, 'حلق', { size: 9.5, fill: INK, w: 800 })}
      ${pin(r.P.tube[0], r.P.tube[1], 300, 150)}${lab(306, 132, 'eustachian tube', 'شیپور استاش', { size: 9.5 })}
      ${pin(r.P.middle[0], r.P.middle[1], 130, 220)}${lab(110, 232, 'middle ear air', 'هوای گوش میانی', { size: 9.5 })}
      ${f(300, 56, 'با بلعیدن و خمیازه', { size: 9, fill: INK, w: 700 })}${f(300, 70, 'باز می‌شود.', { size: 9, fill: INK, w: 700 })}${f(300, 88, 'در کودکان کوتاه و افقی است؛', { size: 9, fill: INK, w: 700 })}${f(300, 102, 'عفونت حلق راحت‌تر می‌رسد', { size: 9, fill: INK, w: 700 })}`, 'شیپور استاش', r.d + shadow(sh));
  };

  /* ================= دنیای ۴: بیماری‌های گوش ================= */
  A['otitis-types'] = () => {
    const r = earSection(20, 60, 1);
    const zone = (x, y, w, h, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${c}" opacity=".28"/>`;
    return svg(360, 300, `${title('سه نوع اوتیت بر پایه جای التهاب')}
      ${r.b}
      ${zone(70, 138, 74, 50, '#e8913a')}${zone(140, 118, 60, 100, '#d9443a')}${zone(198, 90, 120, 118, '#8e6bd8')}
      ${lab(80, 44, 'otitis externa (OE)', 'گوش بیرونی؛ گوش شناگر', { size: 9.5, fill: '#b5561f' })}
      ${lab(180, 276, 'otitis media (OM)', 'گوش میانی؛ شایع در کودکان', { size: 9.5, fill: '#b5402f' })}
      ${lab(282, 44, 'otitis interna', 'گوش درونی؛ labyrinthitis', { size: 9.5, fill: '#6345a8' })}`, 'انواع اوتیت', r.d);
  };

  A['otitis-media-art'] = () => {
    const view = (x, en, fa, inner) => `<circle cx="${x}" cy="118" r="62" fill="#3a2a22"/><circle cx="${x}" cy="118" r="54" fill="${inner.bg}" stroke="${inner.ring}" stroke-width="3"/>${inner.b}${lab(x, 202, en, fa, { size: 10 })}`;
    const normal = { bg: '#e9d9cf', ring: '#c9b3a6', b: `<path d="M70 92 L96 124" stroke="#f6eee6" stroke-width="5" stroke-linecap="round"/><path d="M98 126 L112 150 L86 150Z" fill="#fff7ef" opacity=".85"/>` };
    const om = { bg: '#e8826f', ring: '#c2413a', b: `<circle cx="268" cy="118" r="40" fill="#f2a35a" opacity=".55"/><path d="M252 96 L272 120" stroke="#f7d9c9" stroke-width="4" stroke-linecap="round" opacity=".6"/>${[[250, 136], [282, 104], [286, 140]].map(c => `<circle cx="${c[0]}" cy="${c[1]}" r="5" fill="#f3d36b" opacity=".8"/>`).join('')}` };
    return svg(360, 262, `${title('پرده گوش در اتوسکوپی: سالم و اوتیت میانی')}
      ${view(92, 'normal TM', 'پرده سالم، خاکستری-مرواریدی', normal)}${view(268, 'acute otitis media', 'پرده قرمز و برآمده، چرک پشت آن', om)}
      ${f(180, 240, 'نشانه‌ها: otalgia، تب و کم‌شنوایی؛ اگر مزمن شود: myringotomy و لوله PE', { size: 9, fill: INK, w: 700 })}
      ${f(180, 256, 'مایع شفاف پشت پرده: serous otitis media (SOM)', { size: 8.5, fill: MUTED, w: 700 })}`, 'اوتیت میانی');
  };

  A['hearing-loss-types'] = () => {
    const r = earSection(20, 52, 1);
    const block = (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="#fff" stroke="#d9443a" stroke-width="3"/><path d="M${x - 7} ${y - 7} l14 14 M${x + 7} ${y - 7} l-14 14" stroke="#d9443a" stroke-width="3"/>`;
    return svg(360, 300, `${title('دو نوع اصلی کم‌شنوایی')}
      <rect x="20" y="30" width="176" height="20" rx="10" fill="#fdecdf"/><rect x="198" y="30" width="140" height="20" rx="10" fill="#f1ecfb"/>
      ${f(108, 44, 'مسیر انتقال: بیرونی و میانی', { size: 9, fill: '#b5561f', w: 800 })}${f(268, 44, 'حسی-عصبی: حلزون و عصب', { size: 9, fill: '#6345a8', w: 800 })}
      ${r.b}
      ${block(108, 160)}${block(166, 196)}${block(252, 196)}${block(310, 154)}
      ${lab(100, 262, 'conductive', 'کم‌شنوایی انتقالی', { size: 10, fill: '#b5561f' })}${f(100, 290, 'جرم گوش، اوتیت میانی، اتواسکلروز', { size: 8.5, fill: MUTED })}
      ${lab(270, 262, 'sensorineural', 'کم‌شنوایی حسی-عصبی', { size: 10, fill: '#6345a8' })}${f(270, 290, 'پیرگوشی، سروصدا، نوروم آکوستیک', { size: 8.5, fill: MUTED })}`, 'انواع کم‌شنوایی', r.d);
  };

  A['decibel-scale'] = () => {
    const rows = [[0, '🍃', 'breathing', 'تنفس'], [30, '🤫', 'whisper', 'نجوا'], [60, '🗣️', 'conversation', 'گفت‌وگو'], [85, '🚗', 'heavy traffic', 'ترافیک سنگین'],
      [110, '🎸', 'rock concert', 'کنسرت'], [140, '✈️', 'jet engine', 'موتور جت']];
    const y = v => 236 - v * 1.38;
    return svg(360, 260, `${title('بلندی صدا به دسی‌بل (dB)')}
      <rect x="60" y="${y(140)}" width="22" height="${y(0) - y(140)}" rx="11" fill="#eef7e6"/>
      <rect x="60" y="${y(140)}" width="22" height="${y(85) - y(140)}" rx="11" fill="#f9c4bd"/>
      ${rows.map(r => `<path d="M82 ${y(r[0])} H112" stroke="#9aa6ad"/>${t(54, y(r[0]) + 4, String(r[0]), { size: 10, anchor: 'end', w: 900, sym: true })}${t(122, y(r[0]) + 6, r[1], { size: 15, anchor: 'start' })}${t(148, y(r[0]) + 2, r[2], { size: 10, anchor: 'start', w: 800 })}${f(148, y(r[0]) + 14, r[3], { size: 9, anchor: 'start' })}`).join('')}
      <path d="M232 ${y(85)} H344" stroke="#d9443a" stroke-width="2" stroke-dasharray="5 3"/>
      ${f(290, y(85) - 8, 'بالای ۸۵ dB: خطر آسیب', { size: 9, fill: '#c2413a', w: 800 })}${f(290, y(85) + 16, 'گوش‌گیر (earplugs) بزن', { size: 9, fill: '#c2413a', w: 700 })}
      ${f(290, 210, 'صدای بلند و طولانی:', { size: 9, fill: INK, w: 700 })}${f(290, 224, 'کم‌شنوایی ناشی از سروصدا', { size: 9, fill: INK, w: 700 })}`, 'مقیاس دسی‌بل');
  };

  A['otosclerosis-art'] = () => {
    const a = earSection(4, 70, 0.52), b = earSection(182, 70, 0.52, { stapesFixed: true });
    return svg(360, 230, `${title('اتواسکلروز: رکابی در دریچه بیضی قفل می‌شود')}
      ${a.b}${b.b}
      ${lab(88, 54, 'normal stapes', 'رکابی آزاد می‌لرزد', { size: 9.5 })}${lab(266, 54, 'otosclerosis', 'استخوان اضافه رکابی را سفت می‌کند', { size: 9.5, fill: '#a3672a' })}
      <circle cx="${b.P.stapes[0]}" cy="${b.P.stapes[1]}" r="11" fill="none" stroke="#d9443a" stroke-width="2"/>
      ${f(180, 206, 'نتیجه: کم‌شنوایی انتقالی پیش‌رونده', { size: 9.5, fill: INK, w: 800 })}${f(180, 222, 'درمان: stapedectomy و گذاشتن پروتز', { size: 9, fill: MUTED, w: 700 })}`, 'اتواسکلروز', a.d + b.d);
  };

  A['meniere-art'] = () => {
    const c = (x, y, ic, en, fa) => `<rect x="${x}" y="${y}" width="104" height="92" rx="16" fill="#f1ecfb"/>${t(x + 52, y + 32, ic, { size: 22 })}${t(x + 52, y + 56, en, { size: 10, w: 900 })}${f(x + 52, y + 72, fa, { size: 9.5, fill: INK })}`;
    return svg(360, 250, `${title('بیماری منیر: سه نشانه با هم')}
      ${c(10, 40, '🌀', 'vertigo', 'سرگیجه چرخشی')}${c(128, 40, '🔔', 'tinnitus', 'وزوز گوش')}${c(246, 40, '🔇', 'hearing loss', 'کم‌شنوایی نوسانی')}
      <rect x="60" y="150" width="240" height="44" rx="14" fill="#e4f1fb"/>${t(180, 170, 'aural fullness', { size: 10, w: 900 })}${f(180, 186, 'و احساس پری گوش', { size: 9.5, fill: INK })}
      ${f(180, 218, 'علت: مایع بیش از حد در لابیرنت گوش درونی', { size: 9.5, fill: INK, w: 700 })}${f(180, 236, 'حمله‌ها دقیقه‌ها تا ساعت‌ها طول می‌کشند', { size: 9, fill: MUTED, w: 700 })}`, 'بیماری منیر');
  };

  /* ================= دنیای ۵: تشخیص و درمان ================= */
  A['snellen-art'] = () => {
    const sh = nid();
    const rows = [['E', 34, '20/200'], ['F P', 26, '20/100'], ['T O Z', 20, '20/70'], ['L P E D', 16, '20/50'], ['P E C F D', 13, '20/40'], ['E D F C Z P', 11, '20/30'], ['F E L O P Z D', 9, '20/20']];
    let y = 52;
    const body = rows.map(r => { y += r[1] + 10; return `${t(99, y, r[0], { size: r[1], w: 900, sym: true, fill: '#1d1d1d' })}${t(180, y - r[1] / 3, r[2], { size: 9.5, anchor: 'start', w: 800, fill: r[2] === '20/20' ? '#c2413a' : '#5b6b73', sym: true })}`; }).join('');
    return svg(360, 300, `${title('چارت اسنلن: اندازه‌گیری حدت بینایی')}
      <g filter="url(#${sh})"><rect x="24" y="40" width="150" height="240" rx="8" fill="#fff" stroke="#c9d3da" stroke-width="1.5"/></g>
      ${body}<path d="M28 ${y + 6} H170" stroke="#c2413a" stroke-width="1.5"/>
      ${f(296, 80, 'عدد بالا: فاصله آزمون', { size: 9.5, fill: INK, w: 800 })}${f(296, 96, '(۲۰ فوت یا ۶ متر)', { size: 9, fill: MUTED })}
      ${f(296, 124, 'عدد پایین: فاصله‌ای که', { size: 9.5, fill: INK, w: 800 })}${f(296, 140, 'چشم سالم همان ردیف را', { size: 9, fill: MUTED })}${f(296, 154, 'از آن فاصله می‌خواند', { size: 9, fill: MUTED })}
      ${t(296, 196, '20/40', { size: 16, w: 900, fill: '#1e6f8a', sym: true })}${f(296, 214, 'از ۲۰ فوتی چیزی را می‌بیند', { size: 9, fill: INK })}${f(296, 228, 'که چشم سالم از ۴۰ فوتی می‌بیند', { size: 9, fill: INK })}
      ${f(296, 262, 'هر چشم جدا: OD، OS و OU', { size: 9, fill: MUTED, w: 700 })}`, 'چارت اسنلن', shadow(sh));
  };

  A['eye-exam-tools'] = () => {
    const sh = nid();
    const card = (x, en, fa, note, draw) => `<rect x="${x}" y="34" width="110" height="196" rx="16" fill="#eef6fb"/>${draw}${lab(x + 55, 168, en, fa, { size: 9.5 })}${f(x + 55, 204, note[0], { size: 8.5, fill: INK })}${f(x + 55, 218, note[1], { size: 8.5, fill: INK })}`;
    const oph = `<g filter="url(#${sh})"><rect x="54" y="92" width="16" height="58" rx="6" fill="#4a5560"/><rect x="48" y="62" width="28" height="32" rx="8" fill="#2b3a44"/><circle cx="62" cy="76" r="7" fill="#9fd6ee"/><path d="M76 76 L104 70 L104 84Z" fill="#ffe08a" opacity=".8"/></g>`;
    const ton = `<g filter="url(#${sh})"><circle cx="190" cy="98" r="30" fill="${C.scl}" stroke="${C.sclLine}" stroke-width="1.6"/><circle cx="180" cy="98" r="12" fill="${C.iris}"/><circle cx="180" cy="98" r="5" fill="#111"/><rect x="140" y="92" width="26" height="12" rx="4" fill="#6f7a80"/><path d="M128 98 L140 98" stroke="#6f7a80" stroke-width="5"/></g>${t(190, 146, 'IOP 15 mmHg', { size: 9, w: 900, fill: '#1e6f8a', sym: true })}`;
    const slit = `<g filter="url(#${sh})"><rect x="262" y="120" width="70" height="10" rx="4" fill="#9aa6ad"/><rect x="292" y="70" width="10" height="52" fill="#c9d3da"/><rect x="276" y="56" width="44" height="22" rx="8" fill="#e8eef2" stroke="#9aa6ad"/><circle cx="320" cy="67" r="6" fill="#2b3a44"/><path d="M262 66 L276 64 L276 70Z" fill="#ffe08a"/><rect x="250" y="80" width="8" height="40" rx="3" fill="#6f7a80"/></g>`;
    return svg(360, 240, `${title('ابزارهای معاینه چشم')}
      ${card(10, 'ophthalmoscope', 'افتالموسکوپ', ['دیدن شبکیه و', 'صفحه بینایی از مردمک'], oph)}
      ${card(125, 'tonometry', 'تونومتری', ['اندازه‌گیری فشار', 'داخل چشم برای گلوکوم'], ton)}
      ${card(240, 'slit lamp', 'اسلیت‌لمپ', ['میکروسکوپ با نور باریک', 'برای جلوی چشم'], slit)}`, 'ابزارهای معاینه چشم', shadow(sh));
  };

  A['phaco-iol'] = () => {
    const sh = nid();
    const seg = (x, inner) => `<g transform="translate(${x} 0)"><path d="M20 70 Q-4 120 20 170" stroke="${C.aqLine}" stroke-width="2" fill="${C.aq}"/><path d="M28 78 L28 106 M28 134 L28 162" stroke="${C.iris}" stroke-width="5" stroke-linecap="round"/>${inner}</g>`;
    const s1 = seg(16, `<ellipse cx="54" cy="120" rx="16" ry="34" fill="#cfc8b4" stroke="${C.lensLine}" stroke-width="1.5"/><path d="M-6 96 L44 112" stroke="#6f7a80" stroke-width="5" stroke-linecap="round"/>${[0, 1, 2].map(i => `<path d="M${46 + i * 4} ${104 + i * 7} q4 -3 8 0" stroke="#e8a33a" stroke-width="1.6" fill="none"/>`).join('')}`);
    const s2 = seg(130, `<ellipse cx="54" cy="120" rx="16" ry="34" fill="none" stroke="${C.lensLine}" stroke-width="1.5" stroke-dasharray="4 3"/>${[[50, 108], [58, 124], [48, 134]].map(c => `<path d="M${c[0]} ${c[1]} l6 -2 l-1 6z" fill="#cfc8b4"/>`).join('')}<path d="M-6 100 L42 116" stroke="#6f7a80" stroke-width="5" stroke-linecap="round"/>`);
    const s3 = seg(244, `<ellipse cx="54" cy="120" rx="16" ry="34" fill="none" stroke="${C.lensLine}" stroke-width="1.5" stroke-dasharray="4 3"/><ellipse cx="54" cy="120" rx="8" ry="20" fill="${C.lens}" stroke="#3b8fd0" stroke-width="1.6"/><path d="M54 100 C66 88 72 86 76 92 M54 140 C66 152 72 154 76 148" stroke="#3b8fd0" stroke-width="1.8" fill="none"/>`);
    return svg(360, 240, `${title('جراحی آب مروارید: فیکو و لنز داخل چشمی')}
      <g filter="url(#${sh})">${s1}${s2}${s3}</g>
      ${[[70, '1', 'ultrasound probe', 'پروب فراصوت عدسی را خرد می‌کند'], [184, '2', 'suction', 'تکه‌ها مکیده می‌شوند'], [298, '3', 'IOL implant', 'لنز تاشو در کپسول']].map(c => `<circle cx="${c[0]}" cy="44" r="10" fill="#1e88a8"/>${t(c[0], 48, c[1], { size: 10, fill: '#fff', w: 900, sym: true })}${lab(c[0], 196, c[2], c[3], { size: 9 })}`).join('')}
      ${f(180, 234, 'phac/o یعنی عدسی؛ ‎-emulsification‎ یعنی تبدیل به ذره‌های ریز', { size: 9, fill: MUTED, w: 700 })}`, 'فیکو و IOL', shadow(sh));
  };

  A['lasik-art'] = () => {
    const sh = nid();
    const cornea = (x, step) => { const arc = r => `M${x - 50} ${150 - r} Q${x} ${150 - r - 46} ${x + 50} ${150 - r}`;
      const flap = step === 0 ? `<path d="${arc(14)}" stroke="#3b8fd0" stroke-width="5" fill="none"/>` : step === 1 ? `<path d="M${x - 50} ${136} Q${x - 70} ${90} ${x - 36} ${66}" stroke="#3b8fd0" stroke-width="5" fill="none"/>` : `<path d="M${x - 50} ${136} Q${x} ${100} ${x + 50} ${136}" stroke="#3b8fd0" stroke-width="5" fill="none"/>`;
      return `<path d="${arc(0)} L${x + 50} 170 Q${x} 140 ${x - 50} 170Z" fill="${C.aq}" stroke="${C.aqLine}" stroke-width="1.6"/>${step >= 1 ? `<path d="M${x - 40} 136 Q${x} ${step === 2 ? 112 : 104} ${x + 40} 136" stroke="#e86a5a" stroke-width="2" fill="none" stroke-dasharray="${step === 1 ? '3 3' : '0'}"/>` : ''}${flap}${step === 1 ? `<path d="M${x - 6} 40 L${x - 2} 96 M${x + 6} 40 L${x + 2} 96" stroke="#d9443a" stroke-width="3"/>` : ''}`; };
    return svg(360, 240, `${title('لیزیک: شکل دادن دوباره قرنیه')}
      <g filter="url(#${sh})">${cornea(64, 0)}${cornea(180, 1)}${cornea(296, 2)}</g>
      ${[[64, '1', 'corneal flap', 'برش لایه نازک قرنیه'], [180, '2', 'excimer laser', 'لیزر بافت زیرین را می‌تراشد'], [296, '3', 'flap replaced', 'لایه برمی‌گردد']].map(c => `<circle cx="${c[0] - 46}" cy="44" r="10" fill="#1e88a8"/>${t(c[0] - 46, 48, c[1], { size: 10, fill: '#fff', w: 900, sym: true })}${lab(c[0], 196, c[2], c[3], { size: 9 })}`).join('')}
      ${f(180, 234, 'برای نزدیک‌بینی، دوربینی و آستیگماتیسم؛ kerat/o یعنی قرنیه', { size: 9, fill: MUTED, w: 700 })}`, 'لیزیک', shadow(sh));
  };

  A['myringotomy-art'] = () => {
    const r = earSection(4, 52, 0.56, { fluid: '#f3d36b' });
    return svg(360, 250, `${title('میرنگوتومی و لوله تهویه (PE tube)')}
      ${r.b}
      ${lab(96, 40, 'fluid behind eardrum', 'مایع یا چرک در گوش میانی', { size: 9 })}
      <circle cx="270" cy="124" r="70" fill="#3a2a22"/><circle cx="270" cy="124" r="60" fill="#e8c9b8" stroke="#c9a08a" stroke-width="3"/>
      <path d="M244 96 L266 124" stroke="#f6eee6" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="292" cy="146" rx="13" ry="9" fill="#3fbf8f" stroke="#1f8f6a" stroke-width="2"/><ellipse cx="292" cy="146" rx="5" ry="3.4" fill="#1d1d1d"/>
      <path d="M276 166 L310 128" stroke="#c2413a" stroke-width="1.4" stroke-dasharray="3 3"/>
      ${lab(270, 214, 'PE tube in the eardrum', 'لوله تهویه در پرده گوش', { size: 9.5 })}
      ${f(100, 186, '۱. برش کوچک در پرده (myringotomy)', { size: 9, fill: INK, w: 700 })}${f(100, 202, '۲. تخلیه مایع', { size: 9, fill: INK, w: 700 })}${f(100, 218, '۳. گذاشتن لوله برای تهویه', { size: 9, fill: INK, w: 700 })}
      ${f(180, 246, 'myring/o یعنی پرده گوش و ‎-tomy‎ یعنی برش', { size: 9, fill: MUTED, w: 700 })}`, 'میرنگوتومی', r.d);
  };

  A['tuning-fork-art'] = () => {
    const fork = (x, y, rot) => `<g transform="rotate(${rot || 0} ${x} ${y})"><path d="M${x - 6} ${y - 30} L${x - 6} ${y} Q${x} ${y + 6} ${x + 6} ${y} L${x + 6} ${y - 30}" stroke="#7a8a94" stroke-width="3.4" fill="none"/><path d="M${x} ${y + 3} L${x} ${y + 26}" stroke="#7a8a94" stroke-width="3.4"/></g>`;
    const head = x => `<circle cx="${x}" cy="104" r="36" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/><path d="M${x + 30} 96 C${x + 44} 92 ${x + 46} 112 ${x + 32} 116" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>`;
    const face = x => `<circle cx="${x}" cy="104" r="36" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/><path d="M${x - 36} 102 c-8 -4 -8 12 0 10 M${x + 36} 102 c8 -4 8 12 0 10" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>`;
    return svg(360, 312, `${title('آزمون‌های دیاپازون: رینه و وبر')}
      ${head(80)}${fork(118, 128, -25)}${fork(146, 102, 0)}
      ${face(262)}${fork(262, 66, 0)}
      <path d="M222 104 q-6 -6 0 -12 M214 104 q-8 -8 0 -16" stroke="#e8a33a" stroke-width="2" fill="none"/>
      ${lab(96, 160, 'Rinne test', 'رینه: استخوان پشت گوش، بعد جلوی مجرا', { size: 9.5 })}${lab(262, 160, 'Weber test', 'وبر: دیاپازون روی وسط سر', { size: 9.5 })}
      <rect x="10" y="194" width="340" height="96" rx="12" fill="#f4f7fb"/>
      ${f(300, 214, 'وضعیت', { size: 9, fill: INK, w: 900 })}${f(196, 214, 'رینه', { size: 9, fill: INK, w: 900 })}${f(80, 214, 'وبر', { size: 9, fill: INK, w: 900 })}
      ${f(300, 238, 'طبیعی', { size: 9, fill: INK })}${t(196, 238, 'AC > BC', { size: 9.5, w: 800, sym: true })}${f(80, 238, 'وسط سر', { size: 9, fill: INK })}
      ${f(300, 260, 'کم‌شنوایی انتقالی', { size: 9, fill: '#b5561f', w: 800 })}${t(196, 260, 'BC > AC', { size: 9.5, w: 800, sym: true, fill: '#b5561f' })}${f(80, 260, 'به گوش بیمار', { size: 9, fill: '#b5561f' })}
      ${f(300, 282, 'کم‌شنوایی حسی-عصبی', { size: 9, fill: '#6345a8', w: 800 })}${t(196, 282, 'AC > BC', { size: 9.5, w: 800, sym: true, fill: '#6345a8' })}${f(80, 282, 'به گوش سالم', { size: 9, fill: '#6345a8' })}
      ${f(180, 306, 'AC هدایت هوایی و BC هدایت استخوانی است', { size: 8.5, fill: MUTED, w: 700 })}`, 'آزمون‌های دیاپازون');
  };

  A['audiogram-art'] = () => {
    const F = [250, 500, 1000, 2000, 4000, 8000], X = i => 70 + i * 52, Y = db => 62 + db * 1.55;
    const R = [10, 10, 15, 25, 55, 45], Lf = [15, 15, 20, 30, 60, 50];
    let g = `<rect x="${X(0)}" y="${Y(-10)}" width="${X(5) - X(0)}" height="${Y(25) - Y(-10)}" fill="#eef7e6"/>`;
    for (let db = -10; db <= 120; db += 10) g += `<path d="M${X(0)} ${Y(db)} H${X(5)}" stroke="#dde3e7"/>${db % 20 === 0 ? t(X(0) - 6, Y(db) + 3.5, String(db), { size: 8.5, anchor: 'end', sym: true, fill: MUTED }) : ''}`;
    F.forEach((hz, i) => { g += `<path d="M${X(i)} ${Y(-10)} V${Y(120)}" stroke="#dde3e7"/>${t(X(i), Y(-10) - 6, hz >= 1000 ? (hz / 1000) + 'k' : String(hz), { size: 8.5, sym: true, fill: MUTED })}`; });
    const line = (v, c) => `<path d="${v.map((d, i) => (i ? 'L' : 'M') + X(i) + ' ' + Y(d)).join(' ')}" stroke="${c}" stroke-width="1.8" fill="none"/>`;
    const O = R.map((d, i) => `<circle cx="${X(i)}" cy="${Y(d)}" r="5" fill="#fff" stroke="#d9443a" stroke-width="2"/>`).join('');
    const Xs = Lf.map((d, i) => `<path d="M${X(i) - 4.5} ${Y(d) - 4.5} l9 9 M${X(i) + 4.5} ${Y(d) - 4.5} l-9 9" stroke="#3b6fd4" stroke-width="2"/>`).join('');
    return svg(360, 300, `${title('ادیوگرام: شنوایی در هر فرکانس')}
      ${g}${line(R, '#d9443a')}${line(Lf, '#3b6fd4')}${O}${Xs}
      ${t(X(0) - 28, Y(55), 'dB HL', { size: 9, sym: true, w: 800 })}${t(X(0) - 8, Y(-10) - 6, 'Hz', { size: 8.5, w: 800, anchor: 'end', sym: true })}
      ${f(X(4), Y(0) + 2, 'محدوده طبیعی', { size: 8.5, fill: '#3f8a05', w: 800 })}
      ${pin(X(4), Y(55), 300, 250)}${f(258, 262, 'افت در فرکانس‌های بالا: سروصدا یا پیرگوشی', { size: 9, fill: INK, w: 800 })}
      <circle cx="${X(0)}" cy="282" r="5" fill="#fff" stroke="#d9443a" stroke-width="2"/>${f(X(0) + 34, 286, 'گوش راست', { size: 9, fill: INK })}
      <path d="M${X(2) - 4.5} 277.5 l9 9 M${X(2) + 4.5} 277.5 l-9 9" stroke="#3b6fd4" stroke-width="2"/>${f(X(2) + 32, 286, 'گوش چپ', { size: 9, fill: INK })}`, 'ادیوگرام');
  };

  A['hearing-devices'] = () => {
    const sh = nid();
    const ear = x => `<path d="M${x} 60 C${x - 40} 56 ${x - 50} 110 ${x - 40} 150 C${x - 32} 176 ${x - 10} 186 ${x} 176 C${x + 8} 166 ${x - 14} 150 ${x - 10} 128 C${x - 6} 112 ${x + 14} 110 ${x + 14} 92 C${x + 14} 72 ${x + 8} 60 ${x} 60Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.5"/>`;
    return svg(360, 264, `${title('سمعک و کاشت حلزون')}
      <rect x="6" y="32" width="170" height="176" rx="16" fill="#fdf2ea"/><rect x="184" y="32" width="170" height="176" rx="16" fill="#eef6fb"/>
      <g filter="url(#${sh})">${ear(96)}<path d="M110 66 C124 64 128 92 118 112" stroke="#8a96a0" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M116 112 C110 124 96 126 88 118" stroke="#8a96a0" stroke-width="2.4" fill="none"/></g>
      <g filter="url(#${sh})">${ear(268)}<circle cx="300" cy="76" r="13" fill="#3a4a56"/><rect x="278" y="70" width="10" height="44" rx="5" fill="#5b6b73"/>
        <circle cx="236" cy="150" r="18" fill="${C.lab}" stroke="${C.labLine}"/>${spiral(236, 150, 14, 2.2, C.labLine, 2)}<path d="M296 88 C280 120 260 140 242 150" stroke="#e8a33a" stroke-width="2.4" fill="none"/></g>
      ${lab(91, 226, 'hearing aid', 'سمعک: صدا را بلندتر می‌کند', { size: 9.5 })}${lab(269, 226, 'cochlear implant', 'کاشت حلزون: الکترود در حلزون', { size: 9.5 })}
      ${f(180, 258, 'سمعک برای کم‌شنوایی خفیف تا شدید؛ کاشت حلزون برای ناشنوایی حسی-عصبی عمیق', { size: 8, fill: MUTED, w: 700 })}`, 'سمعک و کاشت حلزون', shadow(sh));
  };

  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* حِسّا — دنیای ۰: زبان حواس (پایه همه دنیاها)
 * سطح ۱: حواس و متخصصان • سطح ۲: ریشه‌های چشم و گوش • سطح ۳: پیشوندها، پسوندها و دام‌ها
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: 'زبان حواس', short: 'زبان حواس', sub: 'پنج حس و اندام‌هایشان، متخصصان چشم و گوش، و ساخت واژه‌ها از ریشه، پیشوند و پسوند',
    color: '#1E88A8', dark: '#13627A', light: '#E0F3F9',
    levels: ['حواس و متخصصان', 'ریشه‌های چشم و گوش', 'پیشوندها، پسوندها و دام‌ها'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'lx1', title: 'پنج حس', icon: '✋', items: [
          L('حواس ویژه', `${fig('senses-overview', [], 'پنج حس')}${e('<b>special senses</b>')} اندام اختصاصی در سر دارند: بینایی (چشم)، شنوایی و تعادل (گوش)، بویایی (${e('<b>olfaction</b>')}) و چشایی (${e('<b>gustation</b>')}). لامسه با گیرنده‌های پراکنده در پوست کار می‌کند.`),
          L('گیرنده حسی', `${fig('sense-organs', ['اندام‌های حس'], 'اندام‌های حسی')}هر ${e('<b>sensory receptor</b>')} یک محرک (نور، صدا، مولکول بو یا مزه) را به پیام عصبی تبدیل می‌کند.<br>${wb('an-', 'osm/o', '-ia')} ← ${e('anosmia')}: از دست رفتن بویایی<br>${wb('a-', 'geus/o', '-ia')} ← ${e('ageusia')}: از دست رفتن چشایی${memo('دو حس ویژه، بیشترین واژه‌ها را دارند: چشم و گوش؛ کل این دوره درباره همین دو است.')}`),
          M('اصطلاح پزشکی «بویایی» کدام است؟', ['olfaction', 'gustation', 'audition', 'vision'], 'olfact/o یعنی بو.', null, F('senses-overview', [])),
          M(`${e('<b>ageusia</b>')} یعنی…`, ['از دست رفتن چشایی', 'از دست رفتن بویایی', 'کم‌شنوایی', 'دوبینی'], 'a- یعنی بدون و geus/o یعنی چشایی.'),
          T('گوش هم اندام شنوایی است و هم اندام تعادل.', true, 'دهلیز و مجاری نیم‌دایره.', F('sense-organs', [])),
          W('واژه‌ای بساز به معنی «نبود حس بویایی»', ['an-', 'osm/o', '-ia'], ['ot/o', '-algia', 'dipl-'], 'anosmia.'),
          P('هر حس را به ریشه‌اش وصل کن', [['بینایی', 'ophthalm/o'], ['شنوایی', 'audi/o'], ['بویایی', 'olfact/o'], ['چشایی', 'gustat/o']], 'ریشه‌های پنج حس.'),
          B('اصطلاح پزشکی «چشایی» ___ است.', ['gustation', 'olfaction', 'equilibrium'], 'gustat/o.'),
          S('املای انگلیسی «بویایی» را بنویس', 'olfaction', 'olfact/o + -ion.', 'olfa…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: 'چشم، گوش و متخصصانشان', icon: '👩‍⚕️', items: [
          L('دو اندام، چند متخصص', `${fig('eye-ear-overview', [], 'چشم و گوش')}${tbl([['متخصص', 'کار'], [e('ophthalmologist'), 'پزشک و جراح چشم'], [e('optometrist'), 'معاینه چشم و تجویز عینک'], [e('optician'), 'ساخت و فروش عینک'], [e('audiologist'), 'سنجش و درمان کم‌شنوایی'], [e('otorhinolaryngologist (ENT)'), 'پزشک گوش، حلق و بینی']])}`),
          L('در بالین', `${pearl('در Case Study، پزشک اطفال Kelly را برای «تنبلی چشم» به ophthalmologist ارجاع داد؛ عینکش را optician ساخت.')}${pearl('در گزارش مشاوره، دختر ۸ ساله برای عفونت مزمن گوش میانی به متخصص گوش، حلق و بینی (ENT) فرستاده شد.')}${memo('opt یعنی بینایی: optometrist بینایی را اندازه می‌گیرد (‎-metry‎) و optician عینک می‌سازد.')}`),
          M('کدام متخصص جراحی چشم انجام می‌دهد؟', ['ophthalmologist', 'optometrist', 'optician', 'audiologist'], 'پزشک چشم.', null, F('eye-ear-overview', [])),
          M('اختصار ENT یعنی…', ['گوش، حلق و بینی', 'چشم و گوش', 'اورژانس', 'غدد'], 'ears, nose and throat.'),
          T('optician عینک را می‌سازد و تحویل می‌دهد ولی بیماری چشم را درمان نمی‌کند.', true, 'فن‌ورز عینک.'),
          O('ترتیب درمان Kelly را بچین', ['pediatrician', 'ophthalmologist', 'optician'], 'ارجاع، تشخیص، ساخت عینک.'),
          P('هر متخصص را به کارش وصل کن', [['ophthalmologist', 'پزشک و جراح چشم'], ['optometrist', 'تجویز عینک'], ['audiologist', 'سنجش شنوایی'], ['otologist', 'متخصص گوش']], 'متخصصان.'),
          B('رشته پزشکی چشم ___ است.', ['ophthalmology', 'otology', 'optometry'], 'ophthalm/o + -logy.'),
          S('املای انگلیسی «چشم‌پزشک» را بنویس', 'ophthalmologist', 'ophthalm/o + -logist.', 'ophth…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: 'آناتومی یک واژه', icon: '🧩', items: [
          L('پازل واژه', `${fig('wordparts', [], 'ریشه + ریشه + پسوند')}هر واژه از قطعه‌هایی ساخته می‌شود:<br>• <b>ریشه</b>: معنی اصلی؛ مثل ${e('ot')} یعنی گوش<br>• <b>پیشوند</b>: اول واژه؛ مثل ${e('dipl-')} یعنی دوتایی<br>• <b>پسوند</b>: آخر واژه؛ مثل ${e('-itis')} یعنی التهاب<br>• <b>واکه رابط</b> (معمولاً ${e('o')}): ${e('ot/o/rrhea')}`),
          L('قاعده طلایی', `معنی را از <b>پسوند</b> شروع کن، بعد <b>پیشوند</b> و آخر <b>ریشه</b>:<br>${wb('kerat/o', '-itis')} ← «التهاب قرنیه»<br>${wb('ot/o', '-rrhea')} ← «ترشح از گوش»<br>${wb('dipl-', '-opia')} ← «دوبینی»${memo('اگر پسوند با حرف صدادار شروع شود، واکه رابط حذف می‌شود: ot + -itis می‌شود otitis، نه ototitis.')}`),
          M(`در ${e('<b>otorrhea</b>')}، پسوند کدام است؟`, ['-rrhea', 'ot/o', 'o', '-ea'], '‎-rrhea‎ یعنی ترشح.', null, F('wordparts', [])),
          M(`${e('<b>keratitis</b>')} یعنی…`, ['التهاب قرنیه', 'التهاب عنبیه', 'التهاب پلک', 'التهاب شبکیه'], 'kerat/o یعنی قرنیه.'),
          T('معنی واژه پزشکی معمولاً از پسوند شروع می‌شود.', true, 'قاعده طلایی.'),
          W('واژه‌ای بساز به معنی «التهاب گوش»', ['ot/o', '-itis'], ['ophthalm/o', '-algia', 'dipl-'], 'otitis.'),
          P('هر قطعه را به نوعش وصل کن', [['dipl-', 'پیشوند'], ['retin/o', 'ریشه'], ['-opia', 'پسوند'], ['o', 'واکه رابط']], 'قطعه‌های واژه.'),
          B('«التهاب پلک» ___ است.', ['blepharitis', 'blepharoptosis', 'blepharoplasty'], 'blephar/o + -itis.'),
          S('املای انگلیسی «ترشح از گوش» را بنویس', 'otorrhea', 'ot/o + -rrhea.', 'oto…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'lx4', title: 'ریشه‌های چشم', icon: '👁️', items: [
          L('نقشه ریشه‌ها', `${fig('root-map-eye', [], 'نقشه ریشه‌های چشم')}${tbl([['ریشه', 'معنی'], [e('ophthalm/o, ocul/o'), 'چشم'], [e('kerat/o, corne/o'), 'قرنیه'], [e('irid/o, ir/o'), 'عنبیه'], [e('cor/o, pupill/o'), 'مردمک'], [e('phac/o'), 'عدسی'], [e('retin/o'), 'شبکیه'], [e('scler/o'), 'صلبیه']])}`),
          L('دو ریشه برای یک بخش', `${fig('eye-roots', ['ریشه‌ها روی برش چشم'], 'ریشه‌های چشم')}بسیاری از بخش‌های چشم یک ریشه یونانی و یک ریشه لاتین دارند: ${e('ophthalm/o')} (یونانی) و ${e('ocul/o')} (لاتین) هر دو یعنی چشم.${memo('kerat/o هم قرنیه است و هم «سخت»؛ قرنیه مثل شیشه‌ای محکم جلوی چشم است.')}`),
          M('ریشه «عدسی» کدام است؟', ['phac/o', 'retin/o', 'kerat/o', 'irid/o'], 'phac/o، phak/o.', null, F('root-map-eye', [])),
          M('ریشه ocul/o یعنی…', ['چشم', 'گوش', 'پلک', 'اشک'], 'ocular.'),
          T('kerat/o و corne/o هر دو یعنی قرنیه.', true, 'دو ریشه یک بخش.', F('eye-roots', [])),
          W('واژه‌ای بساز به معنی «التهاب شبکیه»', ['retin/o', '-itis'], ['irid/o', '-ectomy', 'phac/o'], 'retinitis.'),
          P('هر ریشه را به بخش چشم وصل کن', [['irid/o', 'عنبیه'], ['scler/o', 'صلبیه'], ['retin/o', 'شبکیه'], ['cor/o', 'مردمک']], 'ریشه‌ها.'),
          B('ریشه ___ یعنی چشم (یونانی).', ['ophthalm/o', 'ocul/o', 'opt/o'], 'ophthalmology.'),
          S('املای انگلیسی «التهاب عنبیه» را بنویس', 'iritis', 'ir/o + -itis.', 'iri…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: 'ریشه‌های گوش', icon: '👂', items: [
          L('نقشه ریشه‌ها', `${fig('root-map-ear', [], 'نقشه ریشه‌های گوش')}${tbl([['ریشه', 'معنی'], [e('ot/o, aur/o, auricul/o'), 'گوش'], [e('myring/o, tympan/o'), 'پرده گوش'], [e('staped/o'), 'رکابی'], [e('cochle/o'), 'حلزون'], [e('labyrinth/o'), 'گوش درونی'], [e('vestibul/o'), 'دهلیز'], [e('mastoid/o'), 'زائده ماستوئید']])}`),
          L('روی شکل واقعی', `${fig('ear-roots', ['ریشه‌ها روی برش گوش'], 'ریشه‌های گوش')}${memo('myring شبیه ring (حلقه) است؛ پرده گوش یک حلقه کشیده است. tympan هم یعنی طبل.')}${pearl('در Chart Note، بیمار برای tympanoplasty بستری شد؛ یعنی ترمیم پرده گوش.')}`),
          M('ریشه «پرده گوش» کدام است؟', ['myring/o', 'mastoid/o', 'cochle/o', 'aur/o'], 'myring/o و tympan/o.', null, F('root-map-ear', [])),
          M('ریشه staped/o به کدام استخوانچه اشاره دارد؟', ['رکابی', 'چکشی', 'سندانی', 'ماستوئید'], 'stapes.'),
          T('ot/o و aur/o هر دو یعنی گوش.', true, 'ریشه یونانی و لاتین.', F('ear-roots', [])),
          W('واژه‌ای بساز به معنی «ترمیم پرده گوش»', ['tympan/o', '-plasty'], ['ot/o', '-itis', 'staped/o'], 'tympanoplasty.'),
          P('هر ریشه را به بخش گوش وصل کن', [['cochle/o', 'حلزون'], ['vestibul/o', 'دهلیز'], ['labyrinth/o', 'گوش درونی'], ['mastoid/o', 'زائده ماستوئید']], 'ریشه‌ها.'),
          B('التهاب ماستوئید ___ است.', ['mastoiditis', 'myringitis', 'labyrinthitis'], 'mastoid/o + -itis.'),
          S('املای انگلیسی «گوش‌شناسی» را بنویس', 'otology', 'ot/o + -logy.', 'oto…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: 'شنیدن و اشک', icon: '💧', items: [
          L('ریشه‌های شنوایی', `• ${e('audi/o, audit/o')}: شنیدن، صدا؛ مثل ${e('audiology')} و ${e('auditory')}<br>• ${e('acous/o, acus/o')}: شنیدن؛ مثل ${e('acoustic')}<br>• پسوند ${e('-cusis')}: حالت شنوایی؛ مثل ${e('presbycusis')} (پیرگوشی)${memo('audio در زبان روزمره هم یعنی صدا؛ audiometer یعنی شنوایی‌سنج.')}`),
          L('ریشه‌های اشک', `${e('dacry/o')} (یونانی) و ${e('lacrim/o')} (لاتین) هر دو یعنی اشک.<br>${wb('dacry/o', 'cyst/o', '-itis')} ← ${e('dacryocystitis')}: التهاب کیسه اشکی<br>${wb('dacry/o', '-rrhea')} ← ${e('dacryorrhea')}: اشک‌ریزی زیاد${pearl('سناریوی کاربردی: خانم Julie Halbritter چشم قرمز با اشک‌ریزی زیاد و پلک زدن مکرر دارد.')}`),
          M('ریشه‌ای که به معنی «صدا، شنیدن» است…', ['audi/o', 'aur/o', 'opt/o', 'dacry/o'], 'audiology.'),
          M(`${e('<b>dacryocystitis</b>')} یعنی…`, ['التهاب کیسه اشکی', 'اشک‌ریزی', 'التهاب پلک', 'خشکی چشم'], 'dacry/o + cyst/o + -itis.'),
          T('lacrim/o و dacry/o هر دو یعنی اشک.', true, 'لاتین و یونانی.'),
          W('واژه‌ای بساز به معنی «پیرگوشی»', ['presby/o', '-cusis'], ['dipl-', '-opia', 'audi/o'], 'presbycusis.'),
          P('هر واژه را به معنی‌اش وصل کن', [['auditory', 'شنوایی'], ['acoustic', 'صوتی'], ['lacrimal', 'اشکی'], ['dacryorrhea', 'اشک‌ریزی زیاد']], 'ریشه‌ها.'),
          B('شنوایی‌شناسی ___ است.', ['audiology', 'otology', 'acoustics'], 'audi/o + -logy.'),
          S('املای انگلیسی «اشکی» (صفت) را بنویس', 'lacrimal', 'lacrim/o + -al.', 'lacr…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'lx7', title: 'پیشوندها', icon: '⬅️', items: [
          L('پیشوندهای پرکاربرد', `${tbl([['پیشوند', 'معنی', 'مثال'], [e('a-, an-'), 'بدون', e('anacusis')], [e('dipl-'), 'دوتایی', e('diplopia')], [e('eso-'), 'به داخل', e('esotropia')], [e('exo-'), 'به خارج', e('exotropia')], [e('hemi-'), 'نیم', e('hemianopia')], [e('presby-'), 'پیری', e('presbyopia')], [e('intra-'), 'درون', e('intraocular')]])}`),
          L('در بالین', `${wb('eso-', '-tropia')} ← انحراف چشم به داخل<br>${wb('exo-', '-tropia')} ← انحراف چشم به خارج${memo('eso مثل «اِسو» یعنی سمتِ تو، به داخل؛ exo مثل exit یعنی به بیرون.')}${pearl('در Case Study، چشم چپ Kelly به سمت گوشه داخلی چشم (medial canthus) منحرف بود؛ یعنی esotropia.')}`),
          M('پیشوند eso- یعنی…', ['به داخل', 'به خارج', 'دوتایی', 'نیم'], 'esotropia.'),
          M(`${e('<b>hemianopia</b>')} یعنی…`, ['نابینایی در نیمی از میدان بینایی', 'دوبینی', 'شب‌کوری', 'کوررنگی'], 'hemi- یعنی نیم.'),
          T('پیشوند intra- یعنی «درون»؛ مثل intraocular.', true, 'درون چشم.'),
          W('واژه‌ای بساز به معنی «انحراف چشم به خارج»', ['exo-', '-tropia'], ['eso-', '-opia', 'dipl-'], 'exotropia.'),
          P('هر پیشوند را به معنی‌اش وصل کن', [['dipl-', 'دوتایی'], ['hemi-', 'نیم'], ['presby-', 'پیری'], ['an-', 'بدون']], 'پیشوندها.'),
          B('دوبینی ___ است.', ['diplopia', 'hemianopia', 'amblyopia'], 'dipl- + -opia.'),
          S('املای انگلیسی «انحراف چشم به داخل» را بنویس', 'esotropia', 'eso- + -tropia.', 'eso…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: 'پسوندها', icon: '➡️', items: [
          L('پسوندهای حس', `${tbl([['پسوند', 'معنی', 'مثال'], [e('-opia') + '<br>' + e('-opsia'), 'بینایی', e('myopia, achromatopsia')], [e('-cusis'), 'شنوایی', e('presbycusis')], [e('-tropia'), 'چرخش', e('esotropia')], [e('-ptosis'), 'افتادگی', e('blepharoptosis')], [e('-algia') + '<br>' + e('-dynia'), 'درد', e('otalgia, otodynia')], [e('-rrhea'), 'ترشح', e('otorrhea')]])}`),
          L('درد چشم و گوش', `برای درد دو پسوند هم‌معنی داریم: ${e('<b>otalgia</b>')} و ${e('<b>otodynia</b>')} هر دو یعنی گوش‌درد؛ ${e('<b>ophthalmalgia</b>')} و ${e('<b>oculodynia</b>')} هر دو یعنی درد چشم.${pearl('سناریوی کاربردی: در پرونده خانم Kelly Post که ۶۸ سال دارد، نوشته شده oculodynia، mastoiditis و conjunctivitis؛ یعنی درد چشم، التهاب ماستوئید و التهاب ملتحمه.')}`),
          M('پسوند ‎-cusis‎ یعنی…', ['شنوایی', 'بینایی', 'درد', 'افتادگی'], 'presbycusis.'),
          M(`${e('<b>oculodynia</b>')} یعنی…`, ['درد چشم', 'التهاب چشم', 'خشکی چشم', 'دوبینی'], '‎-dynia‎ یعنی درد.'),
          T('‎-opia‎ و ‎-opsia‎ هر دو یعنی بینایی.', true, 'همزاد هم‌معنی.'),
          W('واژه‌ای بساز به معنی «گوش‌درد»', ['ot/o', '-algia'], ['dipl-', '-rrhea', 'ophthalm/o'], 'otalgia.'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-ptosis', 'افتادگی'], ['-tropia', 'چرخش'], ['-rrhea', 'ترشح'], ['-dynia', 'درد']], 'پسوندها.'),
          B('افتادگی پلک ___ است.', ['blepharoptosis', 'blepharitis', 'blepharoplasty'], 'blephar/o + -ptosis.'),
          S('املای انگلیسی «گوش‌درد» را بنویس', ['otalgia', 'otodynia'], 'ot/o + -algia.', 'ota…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: 'دام‌های همزاد و راست و چپ', icon: '⚖️', items: [
          L('دام‌ها', `${fig('twins', [], 'دام‌های همزاد')}${vs(['ot/o', 'گوش؛ مثل otitis'], ['or/o', 'دهان؛ مثل oral'])}${vs(['malleus', 'استخوانچه گوش'], ['malleolus', 'قوزک پا'])}`),
          L('راست و چپ', `${fig('od-os-ou', [], 'اختصارهای راست و چپ')}${tbl([['اختصار', 'لاتین', 'معنی'], [e('OD'), e('oculus dexter'), 'چشم راست'], [e('OS'), e('oculus sinister'), 'چشم چپ'], [e('OU'), e('oculus uterque'), 'هر دو چشم'], [e('AD'), e('auris dextra'), 'گوش راست'], [e('AS'), e('auris sinistra'), 'گوش چپ'], [e('AU'), e('auris uterque'), 'هر دو گوش']])}${memo('dexter یعنی راست (مثل dexterity، چابکی دست راست) و sinister یعنی چپ.')}`),
          M('اختصار OS یعنی…', ['چشم چپ', 'چشم راست', 'هر دو چشم', 'گوش چپ'], 'oculus sinister.', null, F('od-os-ou', [])),
          M('malleolus کجاست؟', ['قوزک پا', 'گوش میانی', 'چشم', 'دهان'], 'malleus در گوش است.'),
          T('AU یعنی هر دو گوش.', true, 'auris uterque.'),
          O('از بالا به پایین ترتیب لاتین را بچین: راست، چپ، هر دو', ['oculus dexter', 'oculus sinister', 'oculus uterque'], 'OD، OS، OU.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['OD', 'چشم راست'], ['AS', 'گوش چپ'], ['OU', 'هر دو چشم'], ['AD', 'گوش راست']], 'راست و چپ.'),
          B('ریشه ___ یعنی دهان، نه گوش.', ['or/o', 'ot/o', 'aur/o'], 'oral.'),
          S('املای انگلیسی «استخوانچه چکشی» را بنویس', 'malleus', 'malle/o.', 'mall…'),
          N('m2r:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* حِسّا — دنیای ۱: چشم، ساختار و بینایی
 * سطح ۱: کره چشم • سطح ۲: ساختارهای محافظ و حرکت • سطح ۳: نور و بینایی */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ey', sym: 'Ey', name: 'چشم: ساختار و بینایی', short: 'چشم', sub: 'لایه‌های کره چشم، قرنیه، عنبیه، عدسی و شبکیه، پلک و دستگاه اشکی، عضلات چشم، انکسار، تطابق و مسیر بینایی',
    color: '#3B6FD4', dark: '#264FA3', light: '#E4ECFB',
    levels: ['کره چشم', 'ساختارهای محافظ و حرکت', 'نور و بینایی'],
    gens: EA.genIds('ey'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'ey1', title: 'سه لایه کره چشم', icon: '🧅', items: [
          L('از بیرون به درون', `${fig('eye-section', [], 'برش کره چشم')}${e('<b>eyeball</b>')} در ${e('<b>orbit</b>')} (حدقه) است و دیواره‌اش سه لایه دارد:<br>• لایه بیرونی (فیبری): ${e('<b>sclera</b>')} (سفیدی چشم) و جلوی آن ${e('<b>cornea</b>')}<br>• لایه میانی (${e('<b>uvea</b>')}): ${e('choroid')}، ${e('ciliary body')} و ${e('iris')}<br>• لایه درونی: ${e('<b>retina</b>')}`),
          L('روی شکل', `${fig('eye-layers', ['سه لایه کره چشم'], 'لایه‌های چشم')}${e('<b>choroid</b>')} پر از رگ است و شبکیه را تغذیه می‌کند. فضای پشت عدسی را ${e('<b>vitreous humor</b>')} (زجاجیه، ژله شفاف) پر می‌کند.${memo('سه لایه مثل پیاز: صلبیه محکم، مشیمیه پررگ و شبکیه حساس به نور.')}`),
          M('سفیدی چشم چه نام دارد؟', ['sclera', 'cornea', 'choroid', 'retina'], 'scler/o یعنی سخت.', null, F('eye-section', [])),
          M('لایه پررگ که شبکیه را تغذیه می‌کند…', ['choroid', 'sclera', 'cornea', 'lens'], 'مشیمیه.'),
          T('uvea شامل مشیمیه، جسم مژگانی و عنبیه است.', true, 'لایه میانی.', F('eye-layers', [])),
          O('لایه‌ها را از بیرون به درون بچین', ['sclera', 'choroid', 'retina', 'vitreous humor'], 'از بیرون به داخل.'),
          P('هر بخش را به لایه‌اش وصل کن', [['sclera', 'لایه بیرونی'], ['choroid', 'لایه میانی'], ['retina', 'لایه درونی'], ['vitreous humor', 'ژله داخل کره']], 'لایه‌ها.'),
          B('حفره استخوانی چشم ___ است.', ['orbit', 'socket bone', 'canthus'], 'حدقه.'),
          S('املای انگلیسی «صلبیه» را بنویس', 'sclera', 'scler/o.', 'scl…'),
          N('t2f:ey')
        ]
      },
      {
        id: 'ey2', title: 'قرنیه، عنبیه، مردمک و عدسی', icon: '🔵', items: [
          L('جلوی چشم', `${fig('eye-labeled', ['ساختارهای کره چشم'], 'کره چشم')}• ${e('<b>cornea</b>')}: پنجره شفاف جلوی چشم؛ بیشترین شکست نور<br>• ${e('<b>iris</b>')}: حلقه رنگی عضلانی<br>• ${e('<b>pupil</b>')}: سوراخ وسط عنبیه<br>• ${e('<b>lens</b>')}: عدسی شفاف پشت مردمک<br>• ${e('<b>aqueous humor</b>')}: مایع آبکی جلوی عدسی`),
          L('مردمک در نور', `${fig('pupil-sizes', [], 'اندازه مردمک')}${fig('iris-pupil', ['عضلات عنبیه'], 'عملکرد عنبیه')}در نور زیاد عضلات حلقوی عنبیه مردمک را تنگ می‌کنند: ${e('<b>miosis</b>')}. در نور کم مردمک گشاد می‌شود: ${e('<b>mydriasis</b>')}.${memo('miosis کوچک (mini)؛ mydriasis بزرگ.')}`),
          M('رنگ چشم مربوط به کدام بخش است؟', ['iris', 'pupil', 'cornea', 'sclera'], 'عنبیه.', null, F('eye-labeled', [])),
          M('تنگ شدن مردمک…', ['miosis', 'mydriasis', 'myopia', 'anisocoria'], 'در نور زیاد.', null, F('pupil-sizes', [])),
          T('مردمک یک سوراخ است، نه یک بافت.', true, 'دریچه ورود نور.', F('iris-pupil', [])),
          O('مسیر نور را بچین', ['cornea', 'aqueous humor', 'pupil', 'lens', 'vitreous humor', 'retina'], 'از جلو به عقب.'),
          P('هر بخش را به کارش وصل کن', [['cornea', 'شکست بیشتر نور'], ['iris', 'تنظیم اندازه مردمک'], ['lens', 'تمرکز دقیق'], ['aqueous humor', 'مایع جلوی عدسی']], 'جلوی چشم.'),
          B('گشاد شدن مردمک ___ است.', ['mydriasis', 'miosis', 'mydriatic'], 'mydr/o.'),
          S('املای انگلیسی «قرنیه» را بنویس', 'cornea', 'corne/o.', 'corn…'),
          N('f2t:ey')
        ]
      },
      {
        id: 'ey3', title: 'شبکیه و عصب بینایی', icon: '🔴', items: [
          L('ته چشم', `${fig('retina-fundus', [], 'ته چشم و گیرنده‌ها')}${e('<b>retina</b>')} دو نوع گیرنده نوری (${e('photoreceptor')}) دارد:<br>• ${e('<b>rods</b>')}: نور کم و دید سیاه‌وسفید<br>• ${e('<b>cones</b>')}: رنگ و دید دقیق<br>${e('<b>macula lutea</b>')} لکه زرد مرکز شبکیه است و ${e('<b>fovea centralis</b>')} در وسط آن، دقیق‌ترین نقطه دید.`),
          L('نقطه کور', `${fig('fundus', ['ته چشم با افتالموسکوپ'], 'ته چشم')}جایی که ${e('<b>optic nerve</b>')} (عصب دوم مغزی) از شبکیه خارج می‌شود، ${e('<b>optic disc</b>')} است؛ گیرنده ندارد پس نقطه کور است.${memo('cones برای color؛ هر دو با c شروع می‌شوند.')}`),
          M('کدام گیرنده رنگ‌ها را تشخیص می‌دهد؟', ['cones', 'rods', 'optic disc', 'choroid'], 'مخروط‌ها.', null, F('retina-fundus', [])),
          M('نقطه کور چشم کجاست؟', ['optic disc', 'fovea', 'macula', 'iris'], 'خروج عصب.', null, F('fundus', [])),
          T('دقیق‌ترین دید در fovea centralis است.', true, 'پر از مخروط.'),
          O('مسیر پیام نور را بچین', ['photoreceptors', 'optic nerve', 'brain'], 'از شبکیه تا مغز.'),
          P('هر بخش را به ویژگی‌اش وصل کن', [['rods', 'دید در نور کم'], ['cones', 'دید رنگی'], ['macula lutea', 'لکه زرد'], ['optic disc', 'نقطه کور']], 'شبکیه.'),
          B('عصب بینایی، عصب مغزی شماره ___ است.', ['II', 'VIII', 'V'], 'CN II.'),
          S('املای انگلیسی «شبکیه» را بنویس', 'retina', 'retin/o.', 'ret…'),
          N('d2t:ey')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'ey4', title: 'پلک، ملتحمه و ابرو', icon: '😉', items: [
          L('ساختارهای محافظ', `${fig('eye-front', [], 'چشم از روبه‌رو')}• ${e('<b>eyelid</b>')} (${e('palpebra')}؛ ${e('blephar/o')}): پلک که چشم را می‌بندد و پخش اشک را کمک می‌کند<br>• ${e('<b>canthus</b>')}: گوشه چشم؛ داخلی (medial) و خارجی (lateral)<br>• ${e('<b>conjunctiva</b>')}: پرده مخاطی نازک روی صلبیه و زیر پلک<br>• ${e('<b>meibomian gland</b>')}: غده روغنی لبه پلک`),
          L('روی شکل', `${fig('eye-accessory', ['ساختارهای جانبی چشم'], 'ساختارهای جانبی')}${pearl('سناریوی کاربردی: پزشک برای آقای Smith جراحی پلک‌های افتاده‌ای را خواست که جلوی دیدش را گرفته بودند؛ یعنی blepharoplasty.')}${memo('canthus مثل «کنج»؛ گوشه چشم.')}`),
          M('پرده مخاطی روی سفیدی چشم و زیر پلک…', ['conjunctiva', 'cornea', 'sclera', 'canthus'], 'ملتحمه.', null, F('eye-front', [])),
          M('ریشه blephar/o یعنی…', ['پلک', 'مژه', 'ابرو', 'اشک'], 'blepharitis.'),
          T('canthus یعنی گوشه چشم، جایی که پلک بالا و پایین به هم می‌رسند.', true, 'داخلی و خارجی.', F('eye-accessory', [])),
          W('واژه‌ای بساز به معنی «التهاب ملتحمه»', ['conjunctiv/o', '-itis'], ['blephar/o', '-ptosis', 'kerat/o'], 'conjunctivitis.'),
          P('هر بخش را به معنی‌اش وصل کن', [['eyelid', 'پلک'], ['canthus', 'گوشه چشم'], ['conjunctiva', 'ملتحمه'], ['meibomian gland', 'غده روغنی پلک']], 'محافظ‌ها.'),
          B('نام لاتین پلک ___ است.', ['palpebra', 'pinna', 'papilla'], 'palpebr/o.'),
          S('املای انگلیسی «ملتحمه» را بنویس', 'conjunctiva', 'conjunctiv/o.', 'conj…'),
          N('t2f:ey')
        ]
      },
      {
        id: 'ey5', title: 'دستگاه اشکی', icon: '😢', items: [
          L('مسیر اشک', `${fig('lacrimal-path', [], 'مسیر اشک')}${e('<b>lacrimal apparatus</b>')}:<br>• ${e('<b>lacrimal gland</b>')}: بالای گوشه بیرونی چشم؛ اشک می‌سازد<br>• اشک سطح چشم را می‌شوید و به گوشه داخلی می‌رود<br>• ${e('lacrimal canals')} و ${e('lacrimal sac')}<br>• ${e('<b>nasolacrimal duct</b>')}: اشک را به بینی می‌برد`),
          L('روی شکل', `${fig('lacrimal', ['ساختارهای محافظ و دستگاه اشکی'], 'دستگاه اشکی')}${memo('وقتی گریه می‌کنی آبریزش بینی هم داری؛ چون مجرای اشکی-بینی اشک را به بینی می‌برد.')}${wb('dacry/o', 'aden/o', '-itis')} ← ${e('dacryoadenitis')}: التهاب غده اشکی`),
          M('اشک در کجا ساخته می‌شود؟', ['lacrimal gland', 'lacrimal sac', 'conjunctiva', 'cornea'], 'غده اشکی.', null, F('lacrimal-path', [])),
          M('کدام مجرا اشک را به بینی می‌برد؟', ['nasolacrimal duct', 'eustachian tube', 'lacrimal gland', 'canthus'], 'naso + lacrimal.'),
          T('غده اشکی بالای گوشه بیرونی (lateral) چشم است.', true, 'زیر پلک بالا.', F('lacrimal', [])),
          O('مسیر اشک را بچین', ['lacrimal gland', 'surface of eye', 'lacrimal canals', 'lacrimal sac', 'nasolacrimal duct'], 'از غده تا بینی.'),
          P('هر بخش را به کارش وصل کن', [['lacrimal gland', 'ساخت اشک'], ['lacrimal sac', 'جمع شدن اشک'], ['nasolacrimal duct', 'تخلیه به بینی'], ['conjunctiva', 'پوشش سطح چشم']], 'دستگاه اشکی.'),
          B('التهاب غده اشکی ___ است.', ['dacryoadenitis', 'dacryocystitis', 'dacryorrhea'], 'aden/o یعنی غده.'),
          S('املای انگلیسی «مجرای اشکی-بینی» را بنویس', 'nasolacrimal duct', 'naso + lacrimal + duct.', 'nasol…'),
          N('f2t:ey')
        ]
      },
      {
        id: 'ey6', title: 'عضلات چشم', icon: '💪', items: [
          L('شش عضله', `${fig('eye-muscles', [], 'عضلات خارج‌چشمی')}شش ${e('<b>extraocular muscles (EOM)</b>')} بیرون از کره چشم‌اند و آن را می‌چرخانند: چهار عضله راست (بالایی، پایینی، داخلی، خارجی) و دو عضله مایل (بالایی و پایینی).`),
          L('روی شکل', `${fig('extraocular-muscles', ['عضلات چشم از کنار و روبه‌رو'], 'عضلات چشم')}${memo('extra یعنی بیرون از؛ extraocular یعنی بیرون از کره چشم.')}${pearl('در معاینه، EOM intact یعنی حرکات چشم در همه جهت‌ها کامل است.')}`),
          M('چند عضله خارج‌چشمی داریم؟', ['شش', 'چهار', 'دو', 'هشت'], 'چهار راست و دو مایل.', null, F('eye-muscles', [])),
          M('عضله‌ای که چشم را به سمت بینی می‌برد…', ['medial rectus', 'lateral rectus', 'superior oblique', 'inferior rectus'], 'medial یعنی سمت داخل.'),
          T('عضلات خارج‌چشمی درون کره چشم هستند.', false, 'بیرون از کره‌اند.', F('extraocular-muscles', [])),
          O('عضلات راست را از بالا ساعتگرد بچین (چشم راست از روبه‌رو)', ['superior rectus', 'medial rectus', 'inferior rectus', 'lateral rectus'], 'بالا، داخل، پایین، خارج.'),
          P('هر عضله را به حرکتش وصل کن', [['superior rectus', 'نگاه به بالا'], ['inferior rectus', 'نگاه به پایین'], ['lateral rectus', 'به سمت گیجگاه'], ['medial rectus', 'به سمت بینی']], 'عضلات.'),
          B('اختصار ___ یعنی حرکات عضلات خارج‌چشمی.', ['EOM', 'ENT', 'EOE'], 'extraocular movements.'),
          S('املای انگلیسی «خارج‌چشمی» را بنویس', 'extraocular', 'extra- + ocul/o + -ar.', 'extra…'),
          N('d2t:ey')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'ey7', title: 'انکسار و تطابق', icon: '🔍', items: [
          L('شکست نور', `${fig('accommodation-art', [], 'تطابق')}${e('<b>refraction</b>')} یعنی خم شدن نور در قرنیه و عدسی تا روی شبکیه متمرکز شود. ${e('<b>emmetropia</b>')} یعنی انکسار طبیعی. قدرت عدسی را با ${e('<b>diopter</b>')} می‌سنجند.`),
          L('تطابق', `${fig('accommodation', ['تطابق برای دید نزدیک'], 'تطابق')}${e('<b>accommodation</b>')}: عضله مژگانی شکل عدسی را تغییر می‌دهد؛ برای دید نزدیک عدسی گردتر می‌شود. ${e('<b>convergence</b>')} یعنی هر دو چشم برای دیدن نزدیک به داخل می‌چرخند.${memo('در پیری عدسی سفت می‌شود و تطابق کم می‌شود: presbyopia.')}`),
          M('خم شدن نور در چشم چه نام دارد؟', ['refraction', 'accommodation', 'convergence', 'emmetropia'], 'انکسار.', null, F('accommodation-art', [])),
          M('برای دیدن نزدیک عدسی چگونه می‌شود؟', ['گردتر', 'تخت‌تر', 'کدر', 'کوچک‌تر و تیره'], 'accommodation.', null, F('accommodation', [])),
          T('emmetropia یعنی انکسار طبیعی؛ تصویر درست روی شبکیه می‌افتد.', true, 'بینایی طبیعی.'),
          O('مراحل دیدن یک مرجع را بچین', ['convergence', 'accommodation', 'focus on retina'], 'همگرایی، تطابق، تمرکز.'),
          P('هر واژه را به معنی‌اش وصل کن', [['refraction', 'انکسار نور'], ['accommodation', 'تطابق'], ['convergence', 'همگرایی'], ['diopter', 'واحد قدرت عدسی']], 'انکسار.'),
          B('اختصار Em یعنی ___.', ['emmetropia', 'emulsion', 'emergency'], 'بینایی طبیعی.'),
          S('املای انگلیسی «تطابق» را بنویس', 'accommodation', 'accommodat + -ion.', 'accom…'),
          N('t2f:ey')
        ]
      },
      {
        id: 'ey8', title: 'مسیر بینایی', icon: '🧠', items: [
          L('از چشم تا مغز', `${fig('visual-pathway', [], 'مسیر بینایی')}${e('optic nerve')} ← ${e('<b>optic chiasm</b>')} (جایی که نیمی از رشته‌ها ضربدری می‌شوند) ← ${e('optic tract')} ← تالاموس ← ${e('<b>visual cortex</b>')} در لوب پس‌سری.`),
          L('تصویر وارونه', `تصویر روی شبکیه وارونه است و مغز آن را درست می‌کند. چون رشته‌ها در کیاسما ضربدری می‌شوند، آسیب یک سمت مغز نیمی از میدان بینایی هر دو چشم را می‌گیرد: ${e('<b>hemianopia</b>')}.${memo('chiasm مثل حرف یونانی χ (کای) است؛ یعنی ضربدر.')}`),
          M('قشر بینایی در کدام لوب مغز است؟', ['لوب پس‌سری', 'لوب پیشانی', 'لوب گیجگاهی', 'مخچه'], 'occipital.', null, F('visual-pathway', [])),
          M('رشته‌های بینایی در کجا ضربدری می‌شوند؟', ['optic chiasm', 'optic disc', 'retina', 'lens'], 'کیاسما.'),
          T('تصویر روی شبکیه وارونه تشکیل می‌شود.', true, 'مغز درستش می‌کند.'),
          O('مسیر بینایی را بچین', ['retina', 'optic nerve', 'optic chiasm', 'optic tract', 'visual cortex'], 'از چشم تا مغز.'),
          P('هر بخش را به معنی‌اش وصل کن', [['optic nerve', 'عصب بینایی'], ['optic chiasm', 'کیاسمای بینایی'], ['visual cortex', 'قشر بینایی'], ['hemianopia', 'نیم‌کوری']], 'مسیر.'),
          B('محل ضربدری شدن رشته‌ها optic ___ است.', ['chiasm', 'disc', 'tract'], 'χ.'),
          S('املای انگلیسی «قشر بینایی» را بنویس', 'visual cortex', 'visual + cortex.', 'visual c…'),
          N('f2t:ey')
        ]
      },
      {
        id: 'ey9', title: 'حدت و میدان بینایی', icon: '🎯', items: [
          L('اندازه‌گیری دید', `• ${e('<b>visual acuity (VA)</b>')}: تیزی دید؛ با چارت اسنلن، مثل ${e('20/20')}<br>• ${e('<b>visual field (VF)</b>')}: همه جایی که چشم بدون حرکت می‌بیند<br>• ${e('<b>peripheral vision</b>')}: دید کناره‌های میدان<br>• ${e('<b>binocular vision</b>')}: دید دوچشمی و درک عمق`),
          L('در بالین', `${pearl('در Discharge Summary آمده است: <bdi dir="ltr">“best corrected visual acuity”</bdi> خانم Serowan در چشم راست 20/70 بود؛ یعنی حتی با عینک فقط 20/70 می‌دید.')}${tbl([['اختصار', 'معنی'], [e('VA'), 'حدت بینایی'], [e('BCVA'), 'بهترین حدت با اصلاح'], [e('cc'), 'با عینک یا لنز'], [e('sc'), 'بدون عینک یا لنز']])}`),
          M('تیزی دید با چه ابزاری سنجیده می‌شود؟', ['Snellen chart', 'otoscope', 'tonometer', 'audiometer'], 'چارت اسنلن.'),
          M('دید کناره‌های میدان بینایی…', ['peripheral vision', 'central vision', 'binocular vision', 'night vision'], 'محیطی.'),
          T('sc یعنی بدون عینک و cc یعنی با عینک.', true, 'sine و cum correction.'),
          O('حدت‌ها را از بهتر به بدتر بچین', ['20/20', '20/40', '20/70', '20/200'], 'مخرج بزرگ‌تر یعنی دید بدتر.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['VA', 'حدت بینایی'], ['VF', 'میدان بینایی'], ['BCVA', 'بهترین حدت با اصلاح'], ['cc', 'با عینک']], 'اختصارها.'),
          B('دید دوچشمی با درک عمق ___ vision است.', ['binocular', 'peripheral', 'monocular'], 'bin- یعنی دو.'),
          S('املای انگلیسی «حدت» (در visual …) را بنویس', 'acuity', 'تیزی.', 'acu…'),
          N('d2t:ey')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* حِسّا — دنیای ۲: بیماری‌های چشم
 * سطح ۱: عیب انکساری و عدسی • سطح ۲: شبکیه، فشار و میدان بینایی • سطح ۳: پلک، عضله و التهاب */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'vd', sym: 'Vd', name: 'بیماری‌های چشم', short: 'بیماری چشم', sub: 'نزدیک‌بینی و دوربینی، آب مروارید، گلوکوم، بیماری‌های شبکیه، استرابیسم و تنبلی چشم، بیماری‌های پلک و التهاب‌های چشم',
    color: '#8E6BD8', dark: '#6345A8', light: '#EEE8FB',
    levels: ['عیب انکساری و عدسی', 'شبکیه، فشار و میدان بینایی', 'پلک، عضله و التهاب'],
    gens: EA.genIds('vd'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'vd1', title: 'عیب‌های انکساری', icon: '👓', items: [
          L('نور کجا می‌افتد؟', `${fig('refraction-errors', [], 'عیب‌های انکساری')}• ${e('<b>myopia</b>')} (نزدیک‌بینی): کره بلند؛ کانون جلوی شبکیه؛ دور تار است<br>• ${e('<b>hyperopia</b>')} (دوربینی): کره کوتاه؛ کانون پشت شبکیه؛ نزدیک تار است<br>• ${e('<b>astigmatism</b>')}: قرنیه نامنظم؛ تصویر کشیده و تار`),
          L('اصلاح با عدسی', `${fig('refractive-errors', ['اصلاح با عدسی مقعر و محدب'], 'اصلاح عیب انکساری')}${fig('astigmatism', ['نزدیک‌بینی، دوربینی و آستیگماتیسم'], 'عیب‌های انکساری')}عدسی مقعر (concave) نزدیک‌بینی و عدسی محدب (convex) دوربینی را اصلاح می‌کند.${pearl('در Case Study، Kelly علاوه بر تنبلی چشم، hyperopia خفیف هم داشت و عینک گرفت.')}`),
          M('در نزدیک‌بینی تصویر کجا می‌افتد؟', ['جلوی شبکیه', 'پشت شبکیه', 'روی شبکیه', 'روی قرنیه'], 'کره بلند.', null, F('refraction-errors', [])),
          M('کدام عدسی دوربینی را اصلاح می‌کند؟', ['محدب (convex)', 'مقعر (concave)', 'استوانه‌ای', 'تیره'], 'جمع‌کننده نور.', null, F('refractive-errors', [])),
          T('آستیگماتیسم از انحنای نامنظم قرنیه یا عدسی است.', true, 'چند کانون.', F('astigmatism', [])),
          W('واژه‌ای بساز به معنی «دوربینی»', ['hyper-', '-opia'], ['dipl-', '-tropia', 'presby/o'], 'hyperopia.'),
          P('هر عیب را به توضیحش وصل کن', [['myopia', 'دور تار'], ['hyperopia', 'نزدیک تار'], ['astigmatism', 'قرنیه نامنظم'], ['emmetropia', 'انکسار طبیعی']], 'انکسار.'),
          B('اختصار MY یعنی ___.', ['myopia', 'mydriasis', 'myringitis'], 'نزدیک‌بینی.'),
          S('املای انگلیسی «نزدیک‌بینی» را بنویس', 'myopia', 'my + -opia.', 'myo…'),
          N('t2f:vd')
        ]
      },
      {
        id: 'vd2', title: 'آب مروارید و پیرچشمی', icon: '🌫️', items: [
          L('آب مروارید', `${fig('cataract-art', [], 'آب مروارید')}${e('<b>cataract</b>')}: کدر شدن عدسی؛ دید کم‌کم تار و کم‌رنگ می‌شود و نور خیره‌کننده است. علت‌ها: پیری، دیابت، آسیب، دارو. درمان: خارج کردن عدسی و گذاشتن لنز مصنوعی.`),
          L('در بالین', `${fig('cataract-photo', ['آب مروارید پیشرفته'], 'آب مروارید')}${fig('visual-disorders', ['دید در بیماری‌های چشم'], 'اختلال‌های بینایی')}${pearl('در Ophthalmology Consultation آمده است: خانم ۷۹ ساله با کاهش تدریجی دید و photophobia آمد؛ معاینه، آب مروارید بزرگ در چشم راست نشان داد.')}${e('<b>presbyopia</b>')}: سفت شدن عدسی با سن و ناتوانی در دید نزدیک.`),
          M('آب مروارید کدر شدن کدام بخش است؟', ['عدسی', 'قرنیه', 'زجاجیه', 'شبکیه'], 'lens.', null, F('cataract-art', [])),
          M('presbyopia معمولاً در چه سنی شروع می‌شود؟', ['حدود ۴۰ سالگی به بعد', 'کودکی', 'نوزادی', 'نوجوانی'], 'پیرچشمی.'),
          T('آب مروارید با عینک درمان قطعی می‌شود.', false, 'درمان قطعی جراحی است.', F('cataract-photo', [])),
          O('روند خانم ۷۹ ساله را بچین', ['blurred vision and photophobia', 'ophthalmoscopy', 'cataract diagnosis', 'phacoemulsification'], 'از شکایت تا درمان.'),
          P('هر واژه را به معنی‌اش وصل کن', [['cataract', 'کدری عدسی'], ['presbyopia', 'پیرچشمی'], ['photophobia', 'نورگریزی'], ['IOL', 'لنز داخل چشمی']], 'عدسی.'),
          B('پیرچشمی ___ است.', ['presbyopia', 'presbycusis', 'myopia'], 'presby/o + -opia.'),
          S('املای انگلیسی «آب مروارید» را بنویس', 'cataract', 'کدری عدسی.', 'cata…'),
          N('f2t:vd')
        ]
      },
      {
        id: 'vd3', title: 'گلوکوم', icon: '⏫', items: [
          L('فشار بالا', `${fig('glaucoma-art', [], 'گلوکوم')}${e('<b>glaucoma</b>')}: زلالیه درست تخلیه نمی‌شود، ${e('<b>intraocular pressure (IOP)</b>')} بالا می‌رود و عصب بینایی آسیب می‌بیند. اغلب بی‌علامت است تا وقتی دید محیطی از بین برود.`),
          L('روی شکل', `${fig('glaucoma', ['جریان زلالیه و آسیب صفحه بینایی'], 'گلوکوم')}${memo('glauc/o یعنی سبز-خاکستری؛ یونانی‌ها رنگ مردمک بیمار را این‌طور می‌دیدند.')}${pearl('سناریوی کاربردی: بیمار می‌پرسد فرق IOP و IOL چیست؛ IOP فشار داخل چشم است و IOL لنز داخل چشمی.')}`),
          M('در گلوکوم کدام عدد بالا می‌رود؟', ['IOP', 'VA', 'dB', 'IOL'], 'فشار داخل چشم.', null, F('glaucoma-art', [])),
          M('گلوکوم درمان‌نشده به کدام بخش آسیب می‌زند؟', ['عصب بینایی', 'عدسی', 'قرنیه', 'پلک'], 'نابینایی دائمی.', null, F('glaucoma', [])),
          T('گلوکوم معمولاً تا آسیب جدی بی‌علامت است.', true, 'غربالگری با تونومتری.'),
          O('رخدادهای گلوکوم را بچین', ['blocked drainage', 'IOP rises', 'optic nerve damage', 'peripheral vision loss'], 'از علت تا عارضه.'),
          P('هر اختصار یا واژه را به معنی‌اش وصل کن', [['IOP', 'فشار داخل چشم'], ['IOL', 'لنز داخل چشمی'], ['aqueous humor', 'زلالیه'], ['canal of Schlemm', 'کانال تخلیه']], 'گلوکوم.'),
          B('بیماری با فشار بالای چشم ___ است.', ['glaucoma', 'cataract', 'keratitis'], 'آب سیاه.'),
          S('املای انگلیسی «آب سیاه» را بنویس', 'glaucoma', 'glauc/o + -oma.', 'glau…'),
          N('d2t:vd')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'vd4', title: 'ماکولا و رتینوپاتی', icon: '🎯', items: [
          L('دید مرکزی', `${fig('amd-art', [], 'دژنراسیون ماکولا')}${e('<b>macular degeneration</b>')} (${e('AMD')}): ماکولا آسیب می‌بیند و دید مرکزی از بین می‌رود؛ خواندن و دیدن چهره سخت می‌شود ولی دید محیطی می‌ماند.`),
          L('رتینوپاتی', `${fig('macular-degeneration', ['ماکولای سالم و آسیب‌دیده'], 'دژنراسیون ماکولا')}${fig('vision-changes', ['دید در آب مروارید، گلوکوم و AMD'], 'تغییرات دید')}${wb('retin/o', '-pathy')} ← ${e('<b>retinopathy</b>')}: بیماری شبکیه<br>• ${e('diabetic retinopathy')}: آسیب رگ‌های شبکیه در دیابت<br>• ${e('retinopathy of prematurity (ROP)')}: در نوزاد نارس`),
          M('در دژنراسیون ماکولا کدام دید از بین می‌رود؟', ['مرکزی', 'محیطی', 'شبانه', 'رنگی'], 'ماکولا مرکز دید است.', null, F('amd-art', [])),
          M('ROP در چه کسانی دیده می‌شود؟', ['نوزادان نارس', 'سالمندان', 'دیابتی‌ها', 'ورزشکاران'], 'retinopathy of prematurity.', null, F('macular-degeneration', [])),
          T('در گلوکوم دید محیطی و در AMD دید مرکزی کم می‌شود.', true, 'دو الگوی متفاوت.', F('vision-changes', [])),
          W('واژه‌ای بساز به معنی «بیماری شبکیه»', ['retin/o', '-pathy'], ['dipl-', '-itis', 'phac/o'], 'retinopathy.'),
          P('هر بیماری را به الگوی دید وصل کن', [['macular degeneration', 'لکه کور مرکزی'], ['glaucoma', 'دید تونلی'], ['cataract', 'دید تار و کم‌رنگ'], ['diabetic retinopathy', 'لکه‌های تیره پراکنده']], 'دید.'),
          B('اختصار ___ یعنی دژنراسیون ماکولای وابسته به سن.', ['AMD', 'ROP', 'RD'], 'ARMD هم نوشته می‌شود.'),
          S('املای انگلیسی «بیماری شبکیه» را بنویس', 'retinopathy', 'retin/o + -pathy.', 'retino…'),
          N('wb:vd')
        ]
      },
      {
        id: 'vd5', title: 'جداشدگی شبکیه و تومور', icon: '🌊', items: [
          L('جداشدگی شبکیه', `${fig('retinal-detach-art', [], 'جداشدگی شبکیه')}${e('<b>retinal detachment (RD)</b>')}: شبکیه از مشیمیه جدا می‌شود. نشانه‌ها: جرقه نور، مگس‌پران و «پرده‌ای» روی دید. اورژانس است؛ درمان با باکل اسکلرا، لیزر یا ویترکتومی.`),
          L('روی شکل‌ها', `${fig('retinal-detachment', ['شبکیه جداشده'], 'جداشدگی شبکیه')}${fig('retinal-detachment-view', ['دید بیمار'], 'دید در جداشدگی')}${fig('retinoblastoma', ['مردمک سفید در رتینوبلاستوما'], 'رتینوبلاستوما')}${e('<b>retinoblastoma</b>')}: تومور بدخیم شبکیه در کودکان کوچک؛ مردمک در عکس سفید دیده می‌شود.`),
          M('اختصار RD یعنی…', ['جداشدگی شبکیه', 'رتینوپاتی دیابتی', 'نقطه کور', 'شبکیه سالم'], 'retinal detachment.', null, F('retinal-detach-art', [])),
          M('رتینوبلاستوما بیشتر در چه کسانی است؟', ['کودکان کوچک', 'سالمندان', 'نوزادان نارس', 'زنان باردار'], 'تومور شبکیه.', null, F('retinoblastoma', [])),
          T('جداشدگی شبکیه اورژانس چشم است.', true, 'خطر نابینایی.', F('retinal-detachment-view', [])),
          O('رخدادها را بچین', ['retinal tear', 'fluid under retina', 'retinal detachment', 'curtain over vision'], 'از پارگی تا علامت.'),
          P('هر واژه را به معنی‌اش وصل کن', [['retinal detachment', 'جداشدگی شبکیه'], ['retinoblastoma', 'تومور شبکیه'], ['scleral buckling', 'باکل اسکلرا'], ['vitrectomy', 'برداشتن زجاجیه']], 'شبکیه.'),
          B('تومور بدخیم شبکیه در کودکان ___ است.', ['retinoblastoma', 'retinopathy', 'retinitis'], '‎-blast‎ یعنی سلول نارس.'),
          S('املای انگلیسی «رتینوبلاستوما» را بنویس', 'retinoblastoma', 'retin/o + blast + -oma.', 'retinob…'),
          N('t2f:vd')
        ]
      },
      {
        id: 'vd6', title: 'نشانه‌های بینایی', icon: '🕶️', items: [
          L('میدان بینایی', `${fig('field-defects', [], 'میدان بینایی در بیماری‌ها')}• ${e('<b>scotoma</b>')}: لکه کور در میدان بینایی (${e('scot/o')} یعنی تاریکی)<br>• ${e('<b>hemianopia</b>')}: کوری نیمی از میدان<br>• ${e('<b>nyctalopia</b>')}: شب‌کوری<br>• ${e('<b>diplopia</b>')}: دوبینی`),
          L('نور و رنگ', `${wb('phot/o', '-phobia')} ← ${e('<b>photophobia</b>')}: حساسیت شدید به نور<br>${wb('a-', 'chromat/o', '-opsia')} ← ${e('<b>achromatopsia</b>')}: کوررنگی<br>${e('<b>anisocoria</b>')}: نابرابری اندازه مردمک‌ها${memo('nyct یعنی شب؛ nyctalopia یعنی ندیدن در شب.')}`),
          M('لکه کور در میدان بینایی…', ['scotoma', 'glaucoma', 'chalazion', 'hordeolum'], 'scot/o + -oma.', null, F('field-defects', [])),
          M(`${e('<b>nyctalopia</b>')} یعنی…`, ['شب‌کوری', 'کوررنگی', 'دوبینی', 'نورگریزی'], 'nyct/o یعنی شب.'),
          T('photophobia یعنی ترس یا حساسیت به نور.', true, 'phot/o + -phobia.'),
          W('واژه‌ای بساز به معنی «حساسیت به نور»', ['phot/o', '-phobia'], ['scot/o', '-opia', 'nyct/o'], 'photophobia.'),
          P('هر نشانه را به معنی‌اش وصل کن', [['diplopia', 'دوبینی'], ['achromatopsia', 'کوررنگی'], ['anisocoria', 'مردمک‌های نابرابر'], ['hemianopia', 'نیم‌کوری']], 'نشانه‌ها.'),
          B('کوررنگی ___ است.', ['achromatopsia', 'nyctalopia', 'hemianopia'], 'a- + chromat/o + -opsia.'),
          S('املای انگلیسی «دوبینی» را بنویس', 'diplopia', 'dipl- + -opia.', 'dipl…'),
          N('f2t:vd')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'vd7', title: 'استرابیسم و تنبلی چشم', icon: '👀', items: [
          L('دو چشم ناهم‌راستا', `${fig('strabismus-art', [], 'استرابیسم')}${e('<b>strabismus</b>')}: عدم هماهنگی عضلات چشم؛ دو چشم به یک نقطه نگاه نمی‌کنند.<br>• ${e('<b>esotropia (ET)</b>')}: انحراف به داخل (cross-eye)<br>• ${e('<b>exotropia (XT)</b>')}: انحراف به خارج (walleye)`),
          L('تنبلی چشم', `${fig('strabismus-drawing', ['ازوتروپیا و اگزوتروپیا'], 'استرابیسم')}${fig('strabismus-photos', ['دو نمونه استرابیسم'], 'استرابیسم')}${e('<b>amblyopia</b>')} (${e('ambly/o')} یعنی کُند): مغز تصویر چشم ضعیف را نادیده می‌گیرد. ${e('<b>nystagmus</b>')}: حرکت لرزشی و غیرارادی چشم.${pearl('در Case Study آمده است: Kelly هفت ساله strabismic amblyopia داشت؛ روی چشم سالمش چشم‌بند گذاشتند تا چشم تنبل قوی شود.')}`),
          M('انحراف چشم به سمت بینی…', ['esotropia', 'exotropia', 'nystagmus', 'amblyopia'], 'eso- یعنی به داخل.', null, F('strabismus-art', [])),
          M('درمان تنبلی چشم Kelly چه بود؟', ['چشم‌بند روی چشم سالم و عینک', 'جراحی قرنیه', 'قطره گشادکننده', 'لیزر شبکیه'], 'patching.', null, F('strabismus-drawing', [])),
          T('nystagmus یعنی حرکت لرزشی و غیرارادی چشم‌ها.', true, 'لرزش چشم.', F('strabismus-photos', [])),
          O('روند Kelly را بچین', ['pediatrician visit', 'referral to ophthalmologist', 'diagnosis of amblyopia', 'patch and glasses', 'improved vision'], 'Case Study.'),
          P('هر واژه را به معنی‌اش وصل کن', [['strabismus', 'ناهم‌راستایی چشم‌ها'], ['amblyopia', 'تنبلی چشم'], ['exotropia', 'انحراف به خارج'], ['nystagmus', 'لرزش چشم']], 'عضله.'),
          B('اختصار XT یعنی ___.', ['exotropia', 'esotropia', 'extraocular'], 'انحراف به خارج.'),
          S('املای انگلیسی «تنبلی چشم» را بنویس', 'amblyopia', 'ambly/o + -opia.', 'ambl…'),
          N('d2t:vd')
        ]
      },
      {
        id: 'vd8', title: 'بیماری‌های پلک', icon: '😑', items: [
          L('پنج بیماری پلک', `${fig('lid-disorders', [], 'بیماری‌های پلک')}• ${e('<b>hordeolum</b>')} (گل‌مژه، sty): عفونت دردناک غده لبه پلک<br>• ${e('<b>chalazion</b>')}: کیست بی‌درد غده میبومین<br>• ${e('<b>blepharoptosis</b>')}: افتادگی پلک بالا<br>• ${e('<b>ectropion</b>')}: برگشت پلک به بیرون<br>• ${e('<b>entropion</b>')}: برگشت پلک به درون`),
          L('در بالین', `${fig('hordeolum', ['گل‌مژه'], 'هوردئولوم')}${pearl('سناریوی کاربردی: خانم Julie Halbritter «برآمدگی قرمز روی پلک» دارد؛ با واژه پزشکی یعنی hordeolum.')}${memo(`پیشوند ${e('ec-')} یعنی بیرون و ${e('en-')} یعنی درون؛ ectropion پلک را به بیرون برمی‌گرداند و entropion به درون.`)}`),
          M('عفونت دردناک لبه پلک…', ['hordeolum', 'chalazion', 'ectropion', 'blepharoptosis'], 'گل‌مژه.', null, F('lid-disorders', [])),
          M('در entropion چه اتفاقی می‌افتد؟', ['پلک و مژه به درون برمی‌گردند', 'پلک به بیرون برمی‌گردد', 'پلک می‌افتد', 'پلک ملتهب می‌شود'], 'en- یعنی درون.'),
          T('chalazion معمولاً بی‌درد است.', true, 'کیست غده میبومین.', F('hordeolum', [])),
          W('واژه‌ای بساز به معنی «افتادگی پلک»', ['blephar/o', '-ptosis'], ['dipl-', '-itis', 'kerat/o'], 'blepharoptosis.'),
          P('هر بیماری را به توضیحش وصل کن', [['hordeolum', 'گل‌مژه'], ['chalazion', 'کیست بی‌درد'], ['ectropion', 'پلک به بیرون'], ['entropion', 'پلک به درون']], 'پلک.'),
          B('نام عامیانه hordeolum ___ است.', ['sty', 'pinkeye', 'walleye'], 'گل‌مژه.'),
          S('املای انگلیسی «گل‌مژه» (نام علمی) را بنویس', 'hordeolum', 'sty.', 'hord…'),
          N('wb:vd')
        ]
      },
      {
        id: 'vd9', title: 'التهاب‌ها و عفونت‌ها', icon: '🔥', items: [
          L('‎-itis‎ در چشم', `${fig('eye-infections', [], 'التهاب‌های چشم')}• ${e('<b>conjunctivitis</b>')} (pinkeye): التهاب ملتحمه؛ چشم قرمز و ترشح<br>• ${e('<b>blepharitis</b>')}: التهاب لبه پلک<br>• ${e('<b>keratitis</b>')}: التهاب قرنیه<br>• ${e('<b>dacryocystitis</b>')}: التهاب کیسه اشکی<br>• ${e('<b>uveitis</b>')}، ${e('iritis')}، ${e('scleritis')}`),
          L('چشم خشک و برآمده', `${wb('xer/o', 'ophthalm/o', '-ia')} ← ${e('<b>xerophthalmia</b>')}: خشکی چشم، مثلاً با لنز تماسی<br>${e('<b>exophthalmos</b>')}: بیرون‌زدگی کره چشم، اغلب در بیماری تیروئید<br>${e('corneal abrasion')}: خراش قرنیه${pearl('سناریوی کاربردی: خانم Kelly Post که ۶۸ سال دارد، در پرونده‌اش conjunctivitis دارد؛ یعنی التهاب ملتحمه.')}`),
          M('نام عامیانه conjunctivitis…', ['pinkeye', 'sty', 'walleye', 'cross-eye'], 'چشم صورتی.', null, F('eye-infections', [])),
          M(`${e('<b>exophthalmos</b>')} یعنی…`, ['بیرون‌زدگی چشم', 'خشکی چشم', 'التهاب قرنیه', 'افتادگی پلک'], 'ex- یعنی بیرون.'),
          T('xerophthalmia یعنی خشکی چشم.', true, 'xer/o یعنی خشک.'),
          W('واژه‌ای بساز به معنی «التهاب کیسه اشکی»', ['dacry/o', 'cyst/o', '-itis'], ['kerat/o', 'blephar/o', '-ptosis'], 'dacryocystitis.'),
          P('هر التهاب را به جایش وصل کن', [['keratitis', 'قرنیه'], ['uveitis', 'یووئا'], ['scleritis', 'صلبیه'], ['blepharitis', 'پلک']], 'التهاب‌ها.'),
          B('خراش سطح قرنیه corneal ___ است.', ['abrasion', 'ulcer', 'ptosis'], 'خراش.'),
          S('املای انگلیسی «التهاب قرنیه» را بنویس', 'keratitis', 'kerat/o + -itis.', 'kera…'),
          N('t2f:vd')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* حِسّا — دنیای ۳: گوش، شنوایی و تعادل
 * سطح ۱: گوش بیرونی و میانی • سطح ۲: گوش درونی • سطح ۳: شنیدن و تعادل */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'er', sym: 'Er', name: 'گوش: شنوایی و تعادل', short: 'گوش', sub: 'لاله و مجرای گوش، پرده گوش و استخوانچه‌ها، شیپور استاش، حلزون و اندام کورتی، مسیر صدا، دسی‌بل و هرتز، و دستگاه تعادل',
    color: '#E8913A', dark: '#B5641A', light: '#FDEEDC',
    levels: ['گوش بیرونی و میانی', 'گوش درونی', 'شنیدن و تعادل'],
    gens: EA.genIds('er'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'er1', title: 'سه بخش گوش', icon: '👂', items: [
          L('بیرونی، میانی، درونی', `${fig('ear-section', [], 'سه بخش گوش')}• ${e('<b>external ear</b>')}: لاله و مجرای شنوایی تا پرده گوش<br>• ${e('<b>middle ear</b>')}: حفره هوادار با سه استخوانچه<br>• ${e('<b>inner ear</b>')}: ${e('labyrinth')} با حلزون، دهلیز و مجاری نیم‌دایره`),
          L('روی شکل', `${fig('ear-labeled', ['گوش بیرونی، میانی و درونی'], 'سه بخش گوش')}${fig('ear-sections', ['ساختارهای گوش'], 'برش گوش')}${memo('بیرونی صدا را جمع می‌کند، میانی آن را بزرگ می‌کند و درونی آن را به پیام عصبی تبدیل می‌کند.')}`),
          M('استخوانچه‌ها در کدام بخش گوش هستند؟', ['middle ear', 'external ear', 'inner ear', 'mastoid'], 'گوش میانی.', null, F('ear-section', [])),
          M('حلزون در کدام بخش است؟', ['inner ear', 'middle ear', 'external ear', 'canal'], 'گوش درونی.', null, F('ear-labeled', [])),
          T('پرده گوش مرز گوش بیرونی و میانی است.', true, 'tympanic membrane.', F('ear-sections', [])),
          O('بخش‌ها را از بیرون به درون بچین', ['external ear', 'tympanic membrane', 'middle ear', 'inner ear'], 'از بیرون به درون.'),
          P('هر بخش را به کارش وصل کن', [['external ear', 'جمع کردن صدا'], ['middle ear', 'بزرگ کردن لرزش'], ['inner ear', 'تبدیل به پیام عصبی'], ['labyrinth', 'هزارتوی گوش درونی']], 'سه بخش.'),
          B('گوش درونی را ___ هم می‌گویند.', ['labyrinth', 'auricle', 'meatus'], 'هزارتو.'),
          S('املای انگلیسی «لابیرنت» را بنویس', 'labyrinth', 'labyrinth/o.', 'laby…'),
          N('t2f:er')
        ]
      },
      {
        id: 'er2', title: 'لاله و مجرای گوش', icon: '🐚', items: [
          L('گوش بیرونی', `• ${e('<b>auricle</b>')} یا ${e('pinna')}: لاله گوش؛ صدا را جمع می‌کند (${e('auricul/o')})<br>• ${e('<b>external auditory meatus</b>')}: مجرای شنوایی خارجی تا پرده گوش<br>• ${e('<b>cerumen</b>')}: جرم گوش (earwax)؛ گرد و حشره را می‌گیرد`),
          L('در بالین', `${pearl('سناریوی تمرینی آمده است: پیش از میرنگوتومی، مجرای گوش از جرم خشک (cerumen) و پوسته تمیز شد.')}${e('<b>aural</b>')} یعنی مربوط به گوش و ${e('<b>auditory</b>')} یعنی مربوط به شنوایی.${memo('واژه meatus یعنی گذرگاه؛ مجرای گوش هم گذرگاه بیرونی صداست.')}`),
          M('نام دیگر auricle کدام است؟', ['pinna', 'meatus', 'cochlea', 'incus'], 'لاله گوش.'),
          M('cerumen چیست؟', ['جرم گوش', 'مایع گوش درونی', 'پرده گوش', 'چرک گوش'], 'earwax.'),
          T('جرم گوش گوش را از گرد و حشره محافظت می‌کند.', true, 'نقش محافظ.'),
          O('مسیر صدا در گوش بیرونی را بچین', ['auricle', 'external auditory meatus', 'tympanic membrane'], 'از بیرون به داخل.'),
          P('هر واژه را به معنی‌اش وصل کن', [['auricle', 'لاله گوش'], ['meatus', 'گذرگاه'], ['cerumen', 'جرم گوش'], ['aural', 'گوشی']], 'گوش بیرونی.'),
          B('جرم گوش را cerumen یا ___ می‌گویند.', ['earwax', 'eardrum', 'earache'], 'موم گوش.'),
          S('املای انگلیسی «جرم گوش» را بنویس', 'cerumen', 'cerumin/o.', 'ceru…'),
          N('f2t:er')
        ]
      },
      {
        id: 'er3', title: 'پرده گوش و استخوانچه‌ها', icon: '🥁', items: [
          L('زنجیره سه‌تایی', `${fig('ossicle-chain', [], 'استخوانچه‌ها')}${e('<b>tympanic membrane (TM)</b>')} با صدا می‌لرزد و لرزش را به سه ${e('<b>auditory ossicles</b>')} می‌دهد:<br>• ${e('<b>malleus</b>')} (چکشی)<br>• ${e('<b>incus</b>')} (سندانی)<br>• ${e('<b>stapes</b>')} (رکابی) که روی ${e('<b>oval window</b>')} می‌نشیند`),
          L('روی شکل', `${fig('ossicles', ['پرده گوش و استخوانچه‌ها'], 'استخوانچه‌ها')}${memo('از بیرون به درون حرف اولشان را پشت هم بخوان: M، I و S؛ یعنی Malleus، Incus و Stapes.')}رکابی کوچک‌ترین استخوان بدن است.`),
          M('کدام استخوانچه به پرده گوش چسبیده است؟', ['malleus', 'incus', 'stapes', 'cochlea'], 'چکشی.', null, F('ossicle-chain', [])),
          M('رکابی روی کدام دریچه می‌نشیند؟', ['oval window', 'round window', 'tympanic membrane', 'eustachian tube'], 'دریچه بیضی.', null, F('ossicles', [])),
          T('stapes کوچک‌ترین استخوان بدن است.', true, 'رکابی.'),
          O('مسیر لرزش را بچین', ['tympanic membrane', 'malleus', 'incus', 'stapes', 'oval window'], 'M-I-S.'),
          P('هر استخوانچه را به نام فارسی‌اش وصل کن', [['malleus', 'چکشی'], ['incus', 'سندانی'], ['stapes', 'رکابی'], ['tympanic membrane', 'پرده گوش']], 'زنجیره.'),
          B('اختصار ___ یعنی پرده گوش.', ['TM', 'TMJ', 'TB'], 'tympanic membrane.'),
          S('املای انگلیسی «رکابی» را بنویس', 'stapes', 'staped/o.', 'stap…'),
          N('d2t:er')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'er4', title: 'شیپور استاش', icon: '🎺', items: [
          L('تنظیم فشار', `${fig('eustachian-art', [], 'شیپور استاش')}${e('<b>eustachian tube</b>')} (auditory tube؛ ${e('salping/o')}) گوش میانی را به حلق وصل می‌کند و فشار هوای دو طرف پرده گوش را برابر می‌کند؛ با بلعیدن و خمیازه باز می‌شود.`),
          L('در کودکان', `در کودکان کوتاه‌تر و افقی‌تر است؛ پس عفونت حلق راحت‌تر به گوش میانی می‌رسد و ${e('otitis media')} شایع است.<br>${e('<b>barotrauma</b>')}: آسیب گوش با تغییر ناگهانی فشار، مثلاً در هواپیما یا غواصی.${memo('salping/o هم لوله رحم است و هم شیپور استاش؛ هر دو «لوله»اند.')}`),
          M('شیپور استاش گوش میانی را به کجا وصل می‌کند؟', ['حلق', 'بینی', 'حلزون', 'مغز'], 'nasopharynx.', null, F('eustachian-art', [])),
          M('چرا اوتیت میانی در کودکان شایع‌تر است؟', ['شیپور استاش کوتاه و افقی است', 'پرده گوش ضخیم است', 'جرم گوش بیشتر است', 'حلزون کوچک است'], 'آناتومی کودک.'),
          T('بلعیدن به باز شدن شیپور استاش کمک می‌کند.', true, 'برابر شدن فشار.'),
          O('مسیر عفونت در کودک را بچین', ['throat infection', 'eustachian tube', 'middle ear', 'otitis media'], 'از حلق تا گوش.'),
          P('هر واژه را به معنی‌اش وصل کن', [['eustachian tube', 'شیپور استاش'], ['barotrauma', 'آسیب فشار'], ['middle ear', 'گوش میانی'], ['pharynx', 'حلق']], 'فشار.'),
          B('آسیب گوش با تغییر فشار ___ است.', ['barotrauma', 'otosclerosis', 'tinnitus'], 'bar/o یعنی فشار.'),
          S('املای انگلیسی «شیپور استاش» را بنویس', 'eustachian tube', 'auditory tube.', 'eust…'),
          N('t2f:er')
        ]
      },
      {
        id: 'er5', title: 'گوش درونی', icon: '🐌', items: [
          L('لابیرنت', `${fig('inner-ear-art', [], 'گوش درونی')}گوش درونی در استخوان گیجگاهی است:<br>• ${e('<b>cochlea</b>')}: حلزون؛ اندام شنوایی<br>• ${e('<b>vestibule</b>')}: دهلیز؛ تعادل و جاذبه<br>• ${e('<b>semicircular canals</b>')}: سه مجرای نیم‌دایره؛ چرخش سر<br>• ${e('<b>vestibulocochlear nerve</b>')}: عصب هشتم مغزی`),
          L('روی شکل', `${fig('inner-ear', ['لابیرنت استخوانی و پرده‌ای'], 'گوش درونی')}${e('oval window')} ورودی لرزش به حلزون است و ${e('<b>round window</b>')} فشار را آزاد می‌کند.${memo('cochlea در لاتین یعنی حلزون صدف‌دار؛ شکلش هم همین است.')}`),
          M('اندام شنوایی در گوش درونی کدام است؟', ['cochlea', 'vestibule', 'semicircular canals', 'malleus'], 'حلزون.', null, F('inner-ear-art', [])),
          M('عصب شنوایی و تعادل کدام عصب مغزی است؟', ['هشتم (CN VIII)', 'دوم (CN II)', 'پنجم', 'هفتم'], 'vestibulocochlear.', null, F('inner-ear', [])),
          T('مجاری نیم‌دایره در شنیدن نقشی ندارند و برای تعادل‌اند.', true, 'چرخش سر.'),
          O('بخش‌های لابیرنت را از دریچه بیضی به سمت جلو بچین', ['oval window', 'vestibule', 'cochlea'], 'ورود لرزش.'),
          P('هر بخش را به کارش وصل کن', [['cochlea', 'شنوایی'], ['vestibule', 'تعادل ایستا'], ['semicircular canals', 'چرخش سر'], ['round window', 'آزادسازی فشار']], 'گوش درونی.'),
          B('عصب هشتم vestibulo___ nerve است.', ['cochlear', 'ocular', 'optic'], 'دهلیزی-حلزونی.'),
          S('املای انگلیسی «حلزون گوش» را بنویس', 'cochlea', 'cochle/o.', 'coch…'),
          N('f2t:er')
        ]
      },
      {
        id: 'er6', title: 'اندام کورتی', icon: '🎹', items: [
          L('گیرنده شنوایی', `${fig('cochlea-corti', [], 'اندام کورتی')}درون حلزون ${e('<b>organ of Corti</b>')} است با ${e('<b>hair cells</b>')} (یاخته‌های مویی). لرزش مایع حلزون موهای این یاخته‌ها را خم می‌کند و پیام عصبی ساخته می‌شود.`),
          L('صدای زیر و بم', `ابتدای حلزون صداهای زیر (فرکانس بالا) و نوک آن صداهای بم را حس می‌کند. سروصدای بلند اول یاخته‌های مویی صداهای زیر را آسیب می‌زند.${memo('Corti را با «کورتی» بخوان؛ گیرنده شنوایی، مثل شبکیه برای چشم.')}`),
          M('گیرنده‌های شنوایی در اندام کورتی چه نام دارند؟', ['hair cells', 'rods', 'cones', 'ossicles'], 'یاخته‌های مویی.', null, F('cochlea-corti', [])),
          M('اندام کورتی در کجاست؟', ['cochlea', 'vestibule', 'middle ear', 'auricle'], 'حلزون.'),
          T('خم شدن موهای یاخته‌های مویی پیام عصبی می‌سازد.', true, 'تبدیل لرزش.'),
          O('از لرزش تا پیام بچین', ['fluid wave', 'hair cells bend', 'nerve impulse', 'cochlear nerve'], 'تبدیل.'),
          P('هر بخش را به معادلش در چشم وصل کن', [['organ of Corti', 'شبکیه'], ['hair cells', 'گیرنده‌های نوری'], ['cochlear nerve', 'عصب بینایی'], ['auditory cortex', 'قشر بینایی']], 'گوش و چشم.'),
          B('گیرنده شنوایی organ of ___ است.', ['Corti', 'Schlemm', 'Bartholin'], 'اندام کورتی.'),
          S('املای انگلیسی «یاخته‌های مویی» را بنویس', 'hair cells', 'hair + cells.', 'hair…'),
          N('d2t:er')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'er7', title: 'مسیر صدا', icon: '🔊', items: [
          L('هشت گام', `${fig('sound-path-art', [], 'مسیر صدا')}موج صوتی ← لاله و مجرا ← پرده گوش ← استخوانچه‌ها ← دریچه بیضی ← مایع حلزون ← یاخته‌های مویی و عصب هشتم ← ${e('<b>auditory cortex</b>')} در لوب گیجگاهی.`),
          L('روی شکل‌ها', `${fig('sound-path', ['مسیر موج صدا در گوش'], 'مسیر صدا')}${fig('auditory-pathway-img', ['مسیر شنوایی تا مغز'], 'مسیر شنوایی')}${memo('صدا سه بار شکل عوض می‌کند: لرزش هوا، لرزش استخوان، موج مایع؛ و در آخر پیام عصبی.')}`),
          M('قشر شنوایی در کدام لوب است؟', ['لوب گیجگاهی', 'لوب پس‌سری', 'لوب پیشانی', 'مخچه'], 'temporal lobe.', null, F('sound-path-art', [])),
          M('پس از استخوانچه‌ها لرزش به کجا می‌رسد؟', ['دریچه بیضی', 'پرده گوش', 'لاله', 'شیپور استاش'], 'oval window.', null, F('sound-path', [])),
          T('در حلزون لرزش به موج مایع تبدیل می‌شود.', true, 'مایع حلزون.', F('auditory-pathway-img', [])),
          O('مسیر صدا را بچین', ['auricle', 'tympanic membrane', 'ossicles', 'cochlea', 'auditory cortex'], 'از بیرون تا مغز.'),
          P('هر بخش را به نوع انتقالش وصل کن', [['ear canal', 'لرزش هوا'], ['ossicles', 'لرزش استخوان'], ['cochlea', 'موج مایع'], ['CN VIII', 'پیام عصبی']], 'تبدیل‌ها.'),
          B('قشر ___ صدا را تفسیر می‌کند.', ['auditory', 'visual', 'motor'], 'شنوایی.'),
          S('املای انگلیسی «شنوایی» (صفت) را بنویس', 'auditory', 'audit/o + -ory.', 'audi…'),
          N('t2f:er')
        ]
      },
      {
        id: 'er8', title: 'دسی‌بل و هدایت صدا', icon: '📢', items: [
          L('بلندی و زیر و بمی', `${fig('decibel-scale', [], 'مقیاس دسی‌بل')}• ${e('<b>decibel (dB)</b>')}: بلندی صدا؛ گفت‌وگو حدود ۶۰ dB<br>• ${e('<b>hertz (Hz)</b>')}: فرکانس یا زیر و بمی صدا<br>صدای بالای ۸۵ dB در درازمدت به شنوایی آسیب می‌زند.`),
          L('هوایی و استخوانی', `• ${e('<b>air conduction (AC)</b>')}: صدا از مجرا، پرده و استخوانچه‌ها<br>• ${e('<b>bone conduction (BC)</b>')}: صدا از استخوان جمجمه مستقیم به گوش درونی<br>در گوش سالم AC قوی‌تر از BC است.${pearl('سناریوی کاربردی: کارفرمای آقای Bob Noel در کارخانه از او خواسته گوش‌گیر بزند؛ چون سروصدای بلند و طولانی کم‌شنوایی می‌آورد.')}`),
          M('واحد بلندی صدا کدام است؟', ['decibel', 'hertz', 'diopter', 'millimeter'], 'dB.', null, F('decibel-scale', [])),
          M('در گوش سالم کدام قوی‌تر است؟', ['هدایت هوایی', 'هدایت استخوانی', 'هر دو برابرند', 'هیچ‌کدام'], 'AC > BC.'),
          T('هرتز زیر و بمی صدا را نشان می‌دهد.', true, 'فرکانس.'),
          O('صداها را از آرام به بلند بچین', ['whisper', 'conversation', 'heavy traffic', 'jet engine'], '۳۰، ۶۰، ۸۵، ۱۴۰ دسی‌بل.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['dB', 'دسی‌بل'], ['Hz', 'هرتز'], ['AC', 'هدایت هوایی'], ['BC', 'هدایت استخوانی']], 'اختصارها.'),
          B('صدای بالای ___ دسی‌بل خطرناک است.', ['۸۵', '۳۰', '۱۰'], 'گوش‌گیر لازم است.'),
          S('املای انگلیسی «دسی‌بل» را بنویس', 'decibel', 'dB.', 'deci…'),
          N('f2t:er')
        ]
      },
      {
        id: 'er9', title: 'تعادل', icon: '🤸', items: [
          L('دستگاه دهلیزی', `${fig('balance-art', [], 'تعادل')}${e('<b>equilibrium</b>')} (تعادل) کار دهلیز و مجاری نیم‌دایره است. با چرخش سر مایع درون مجاری حرکت می‌کند و یاخته‌های مویی آن را حس می‌کنند؛ پیام از عصب دهلیزی به مغز می‌رود.`),
          L('در بالین', `${e('<b>vertigo</b>')}: احساس چرخیدن اتاق؛ نشانه اختلال گوش درونی<br>${e('<b>motion sickness</b>')}: تهوع و سرگیجه وقتی چشم و گوش درونی پیام متفاوت می‌دهند<br>${e('electronystagmography (ENG)')}: ثبت حرکت چشم برای آزمون تعادل${memo('vestibule مثل «سرسرا»ی ورودی خانه است؛ در گوش هم سرسرای لابیرنت است.')}`),
          M('کدام بخش‌ها تعادل را حفظ می‌کنند؟', ['دهلیز و مجاری نیم‌دایره', 'حلزون و پرده گوش', 'لاله و مجرا', 'استخوانچه‌ها'], 'vestibular apparatus.', null, F('balance-art', [])),
          M(`${e('<b>vertigo</b>')} یعنی…`, ['احساس چرخیدن', 'وزوز گوش', 'کم‌شنوایی', 'گوش‌درد'], 'سرگیجه چرخشی.'),
          T('دریازدگی (motion sickness) از ناهماهنگی پیام چشم و گوش درونی است.', true, 'دو پیام متفاوت.'),
          O('مسیر حس چرخش را بچین', ['head turns', 'fluid moves', 'hair cells sense', 'vestibular nerve', 'brain'], 'تعادل.'),
          P('هر واژه را به معنی‌اش وصل کن', [['equilibrium', 'تعادل'], ['vertigo', 'سرگیجه چرخشی'], ['vestibule', 'دهلیز'], ['ENG', 'الکترونیستاگموگرافی']], 'تعادل.'),
          B('اصطلاح پزشکی «تعادل» ___ است.', ['equilibrium', 'audition', 'refraction'], 'balance.'),
          S('املای انگلیسی «دهلیز گوش» را بنویس', 'vestibule', 'vestibul/o.', 'vest…'),
          N('d2t:er')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* حِسّا — دنیای ۴: بیماری‌های گوش
 * سطح ۱: التهاب‌های گوش • سطح ۲: کم‌شنوایی • سطح ۳: وزوز، سرگیجه و تومور */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'hd', sym: 'Hd', name: 'بیماری‌های گوش', short: 'بیماری گوش', sub: 'اوتیت بیرونی، میانی و درونی، ماستوئیدیت، کم‌شنوایی انتقالی و حسی-عصبی، پیرگوشی، اتواسکلروز، وزوز، سرگیجه، بیماری منیر و تومورها',
    color: '#D9534F', dark: '#A8372F', light: '#FBE6E4',
    levels: ['التهاب‌های گوش', 'کم‌شنوایی', 'وزوز، سرگیجه و تومور'],
    gens: EA.genIds('hd'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'hd1', title: 'سه نوع اوتیت', icon: '🔥', items: [
          L('جای التهاب', `${fig('otitis-types', [], 'انواع اوتیت')}${e('<b>otitis</b>')} یعنی التهاب گوش و نامش جای آن را می‌گوید:<br>• ${e('<b>otitis externa (OE)</b>')}: مجرای گوش؛ «گوش شناگر»<br>• ${e('<b>otitis media (OM)</b>')}: گوش میانی؛ شایع در کودکان<br>• ${e('<b>otitis interna</b>')}: گوش درونی؛ همان ${e('labyrinthitis')}`),
          L('نشانه‌ها', `${e('<b>otalgia</b>')}: گوش‌درد<br>${e('<b>otorrhea</b>')}: ترشح از گوش<br>${wb('ot/o', 'py/o', '-rrhea')} ← ${e('otopyorrhea')}: چرک‌ریزی گوش<br>${e('otorrhagia')}: خونریزی از گوش${memo('externa بیرون، media وسط، interna درون؛ مثل سه طبقه.')}`),
          M('«گوش شناگر» کدام است؟', ['otitis externa', 'otitis media', 'otitis interna', 'mastoiditis'], 'مجرای گوش.', null, F('otitis-types', [])),
          M(`${e('<b>otopyorrhea</b>')} یعنی…`, ['چرک‌ریزی گوش', 'خونریزی گوش', 'گوش‌درد', 'وزوز'], 'py/o یعنی چرک.'),
          T('otitis interna همان labyrinthitis است.', true, 'گوش درونی.'),
          W('واژه‌ای بساز به معنی «خونریزی از گوش»', ['ot/o', '-rrhagia'], ['dipl-', '-rrhea', 'myring/o'], 'otorrhagia.'),
          P('هر نوع اوتیت را به جایش وصل کن', [['otitis externa', 'مجرای گوش'], ['otitis media', 'گوش میانی'], ['otitis interna', 'گوش درونی'], ['myringitis', 'پرده گوش']], 'جای التهاب.'),
          B('اختصار ___ یعنی التهاب گوش میانی.', ['OM', 'OE', 'OD'], 'otitis media.'),
          S('املای انگلیسی «ترشح از گوش» را بنویس', 'otorrhea', 'ot/o + -rrhea.', 'oto…'),
          N('t2f:hd')
        ]
      },
      {
        id: 'hd2', title: 'اوتیت میانی', icon: '🧒', items: [
          L('در اتوسکوپ', `${fig('otitis-media-art', [], 'اوتیت میانی')}در ${e('acute otitis media')} پرده گوش قرمز و برآمده است و پشت آن چرک جمع شده (${e('suppurative')}). اگر مایع شفاف باشد: ${e('<b>serous otitis media (SOM)</b>')}.`),
          L('پارگی پرده', `${fig('perforated-tm', ['پرده گوش سوراخ‌شده'], 'پارگی پرده گوش')}فشار چرک ممکن است پرده را پاره کند: ${e('<b>perforated tympanic membrane</b>')}.${pearl('در گزارش مشاوره: دختر ۸ ساله عفونت مزمن گوش میانی چپ داشت؛ پرده چپ برآمده بود و تمپانومتری مایع پشت پرده را نشان داد.')}${pearl('در Chart Note آمده است: خانم ۳۰ ساله mucoserous otitis media داشت؛ یعنی مایع مخاطی-سروزی در گوش میانی.')}`),
          M('در اوتیت میانی حاد پرده گوش چگونه است؟', ['قرمز و برآمده', 'خاکستری و سالم', 'سوراخ همیشگی', 'سفید و صاف'], 'چرک پشت آن.', null, F('otitis-media-art', [])),
          M('اختصار SOM یعنی…', ['اوتیت میانی سروزی', 'اوتیت بیرونی', 'سوراخ پرده', 'جرم گوش'], 'serous otitis media.', null, F('perforated-tm', [])),
          T('اوتیت میانی مزمن می‌تواند باعث کم‌شنوایی شود.', true, 'کم‌شنوایی انتقالی.'),
          O('روند دختر ۸ ساله را بچین', ['recurrent ear infections', 'ENT referral', 'otoscopy and tympanometry', 'myringotomy with PE tube'], 'طبق منابع مرجع.'),
          P('هر واژه را به معنی‌اش وصل کن', [['suppurative', 'چرکی'], ['serous', 'آبکی'], ['mucoserous', 'مخاطی-سروزی'], ['perforated', 'سوراخ‌شده']], 'نوع مایع.'),
          B('التهاب پرده گوش ___ است.', ['myringitis', 'mastoiditis', 'labyrinthitis'], 'myring/o + -itis.'),
          S('املای انگلیسی «سروزی» (صفت) را بنویس', 'serous', 'سرم.', 'ser…'),
          N('f2t:hd')
        ]
      },
      {
        id: 'hd3', title: 'ماستوئید، لابیرنت و جرم گوش', icon: '🦴', items: [
          L('التهاب‌های دیگر', `• ${e('<b>mastoiditis</b>')}: التهاب سلول‌های هوایی زائده ماستوئید پشت گوش؛ عارضه اوتیت میانی<br>• ${e('<b>labyrinthitis</b>')}: التهاب گوش درونی با سرگیجه<br>• ${e('<b>myringitis</b>')}: التهاب پرده گوش`),
          L('جرم و فشار', `${e('<b>impacted cerumen</b>')}: جرم فشرده در مجرا؛ گوش را می‌گیرد و کم‌شنوایی می‌دهد. درمان: شست‌وشوی گوش.<br>${e('<b>barotrauma</b>')}: آسیب گوش با تغییر ناگهانی فشار.${pearl('سناریوی کاربردی: خانم Kelly Post در پرونده mastoiditis دارد؛ یعنی التهاب ماستوئید.')}`),
          M('ماستوئید کجاست؟', ['پشت گوش در استخوان گیجگاهی', 'درون حلزون', 'در لاله', 'در حلق'], 'mastoid process.'),
          M('جرم فشرده گوش چه می‌کند؟', ['مجرا را می‌بندد و کم‌شنوایی می‌دهد', 'عصب را آسیب می‌زند', 'حلزون را می‌شکند', 'سرگیجه شدید می‌دهد'], 'impacted cerumen.'),
          T('labyrinthitis با سرگیجه همراه است.', true, 'گوش درونی.'),
          W('واژه‌ای بساز به معنی «التهاب لابیرنت»', ['labyrinth/o', '-itis'], ['mastoid/o', '-ectomy', 'cochle/o'], 'labyrinthitis.'),
          P('هر بیماری را به جایش وصل کن', [['mastoiditis', 'زائده ماستوئید'], ['labyrinthitis', 'گوش درونی'], ['impacted cerumen', 'مجرای گوش'], ['myringitis', 'پرده گوش']], 'جای بیماری.'),
          B('آسیب گوش با تغییر فشار در هواپیما ___ است.', ['barotrauma', 'otosclerosis', 'presbycusis'], 'bar/o.'),
          S('املای انگلیسی «التهاب ماستوئید» را بنویس', 'mastoiditis', 'mastoid/o + -itis.', 'mast…'),
          N('d2t:hd')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'hd4', title: 'دو نوع کم‌شنوایی', icon: '🔇', items: [
          L('انتقالی یا حسی-عصبی', `${fig('hearing-loss-types', [], 'انواع کم‌شنوایی')}• ${e('<b>conductive hearing loss</b>')}: صدا از گوش بیرونی یا میانی رد نمی‌شود؛ مثل جرم گوش، اوتیت میانی، اتواسکلروز<br>• ${e('<b>sensorineural hearing loss</b>')}: آسیب حلزون یا عصب شنوایی؛ مثل پیرگوشی، سروصدا، نوروم آکوستیک`),
          L('در بالین', `${pearl('در Case Study آمده است: نوازنده ۳۵ ساله که ۲۰ سال بدون گوش‌گیر با سازهای پرصدا کار کرده، کم‌شنوایی دوطرفه پیش‌رونده دارد؛ با آزمون‌های Rinne و Weber کم‌شنوایی متوسط تشخیص داده شد و برای سمعک ارجاع شد.')}${memo('conductive یعنی «رسانش»؛ مسیر رسانش صدا بسته است. sensorineural یعنی حس و عصب آسیب دیده است.')}`),
          M('کم‌شنوایی از جرم گوش کدام نوع است؟', ['انتقالی', 'حسی-عصبی', 'مرکزی', 'روانی'], 'conductive.', null, F('hearing-loss-types', [])),
          M('آسیب حلزون چه نوع کم‌شنوایی می‌دهد؟', ['حسی-عصبی', 'انتقالی', 'مختلط همیشه', 'هیچ'], 'sensorineural.'),
          T('اتواسکلروز کم‌شنوایی انتقالی می‌دهد.', true, 'رکابی قفل است.'),
          O('مسیر صدا را بچین و ببین کجا انتقالی و کجا حسی-عصبی است', ['ear canal', 'middle ear', 'cochlea', 'auditory nerve'], 'دو بخش اول انتقالی، دو بخش آخر حسی-عصبی.'),
          P('هر علت را به نوع کم‌شنوایی وصل کن', [['impacted cerumen', 'انتقالی: بسته شدن مجرا'], ['otitis media', 'انتقالی: مایع گوش میانی'], ['presbycusis', 'حسی-عصبی: پیری حلزون'], ['acoustic neuroma', 'حسی-عصبی: تومور عصب']], 'علت‌ها.'),
          B('اختصار HL در ادیوگرام یعنی hearing ___.', ['level', 'loss', 'lobe'], 'hearing level.'),
          S('املای انگلیسی «حسی-عصبی» را بنویس', 'sensorineural', 'sensory + neural.', 'senso…'),
          N('wb:hd')
        ]
      },
      {
        id: 'hd5', title: 'پیرگوشی و سروصدا', icon: '👴', items: [
          L('کم‌شنوایی با سن', `${e('<b>presbycusis</b>')}: کم‌شنوایی تدریجی با سن؛ اول صداهای زیر از بین می‌روند. ${e('<b>noise-induced hearing loss</b>')}: آسیب یاخته‌های مویی با صدای بلند و طولانی.<br>${wb('an-', '-acusis')} ← ${e('<b>anacusis</b>')}: ناشنوایی کامل`),
          L('شنوایی بیش از حد', `${wb('hyper-', '-acusis')} ← ${e('<b>hyperacusis</b>')}: صداهای معمولی خیلی بلند به نظر می‌رسند.<br>${e('<b>deafness</b>')}: ناشنوایی؛ ارتباط با زبان اشاره (${e('ASL')}) یا کاشت حلزون.${memo('‎-acusis‎ یعنی شنوایی: presby (پیری)، an (بدون)، hyper (زیاد).')}`),
          M('پیرگوشی کدام است؟', ['presbycusis', 'presbyopia', 'anacusis', 'hyperacusis'], 'presby/o + -cusis.'),
          M('ناشنوایی کامل…', ['anacusis', 'hyperacusis', 'tinnitus', 'otalgia'], 'an- یعنی بدون.'),
          T('در پیرگوشی معمولاً اول صداهای زیر (فرکانس بالا) شنیده نمی‌شوند.', true, 'فرکانس بالا.'),
          W('واژه‌ای بساز به معنی «پرشنوایی»', ['hyper-', '-acusis'], ['presby/o', '-opia', 'an-'], 'hyperacusis.'),
          P('هر واژه را به معنی‌اش وصل کن', [['presbycusis', 'پیرگوشی'], ['anacusis', 'ناشنوایی کامل'], ['hyperacusis', 'پرشنوایی'], ['ASL', 'زبان اشاره آمریکایی']], 'شنوایی.'),
          B('علت کم‌شنوایی نوازنده ___ بود.', ['سروصدای بلند', 'عفونت', 'ضربه'], 'noise-induced.'),
          S('املای انگلیسی «پیرگوشی» را بنویس', 'presbycusis', 'presby/o + -cusis.', 'presby…'),
          N('t2f:hd')
        ]
      },
      {
        id: 'hd6', title: 'اتواسکلروز', icon: '🔒', items: [
          L('رکابی قفل‌شده', `${fig('otosclerosis-art', [], 'اتواسکلروز')}${wb('ot/o', '-sclerosis')} ← ${e('<b>otosclerosis</b>')}: استخوان اضافه دور رکابی رشد می‌کند و آن را در دریچه بیضی قفل می‌کند؛ لرزش به گوش درونی نمی‌رسد.`),
          L('درمان', `کم‌شنوایی انتقالی پیش‌رونده می‌دهد. درمان: ${e('<b>stapedectomy</b>')} (برداشتن رکابی و گذاشتن پروتز) یا سمعک.${memo('scler/o یعنی سفت؛ otosclerosis یعنی سفت شدن گوش.')}`),
          M('در اتواسکلروز کدام استخوانچه گیر می‌کند؟', ['stapes', 'malleus', 'incus', 'mastoid'], 'رکابی.', null, F('otosclerosis-art', [])),
          M('درمان جراحی اتواسکلروز…', ['stapedectomy', 'myringotomy', 'mastoidectomy', 'otoplasty'], 'staped/o + -ectomy.'),
          T('اتواسکلروز کم‌شنوایی حسی-عصبی می‌دهد.', false, 'انتقالی است.'),
          O('رخدادها را بچین', ['bone growth around stapes', 'stapes fixed', 'vibration blocked', 'conductive hearing loss'], 'از علت تا نتیجه.'),
          P('هر واژه را به معنی‌اش وصل کن', [['otosclerosis', 'سفت شدن گوش'], ['stapedectomy', 'برداشتن رکابی'], ['prosthesis', 'پروتز'], ['oval window', 'دریچه بیضی']], 'اتواسکلروز.'),
          B('پسوند ___ یعنی سفت شدن.', ['-sclerosis', '-stenosis', '-ptosis'], 'otosclerosis.'),
          S('املای انگلیسی «اتواسکلروز» را بنویس', 'otosclerosis', 'ot/o + -sclerosis.', 'otoscl…'),
          N('f2t:hd')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'hd7', title: 'وزوز و سرگیجه', icon: '🔔', items: [
          L('نشانه‌های گوش درونی', `• ${e('<b>tinnitus</b>')}: صدای زنگ، وزوز یا غرش در گوش<br>• ${e('<b>vertigo</b>')}: احساس چرخیدن اتاق<br>• ${e('<b>aural fullness</b>')}: احساس پری و فشار در گوش<br>• ${e('motion sickness')}: دریازدگی`),
          L('در بالین', `${pearl('در Case Study 8-1 آمده است: آقای George، ۵۵ ساله، سه سال است در گوش چپ کم‌شنوایی، tinnitus و aural fullness دارد.')}${memo('tinnitus از tinnire لاتین یعنی زنگ زدن؛ صدای زنگی که فقط بیمار می‌شنود.')}`),
          M('صدای زنگ در گوش…', ['tinnitus', 'vertigo', 'otalgia', 'otorrhea'], 'وزوز.'),
          M('احساس چرخیدن اتاق…', ['vertigo', 'tinnitus', 'syncope', 'nystagmus'], 'سرگیجه چرخشی.'),
          T('aural fullness یعنی احساس پری در گوش.', true, 'فشار گوش.'),
          O('نشانه‌های George را به ترتیبی که در پرونده آمده بچین', ['hearing loss', 'tinnitus', 'aural fullness'], 'Case Study 8-1.'),
          P('هر نشانه را به معنی‌اش وصل کن', [['tinnitus', 'وزوز گوش'], ['vertigo', 'سرگیجه چرخشی'], ['aural fullness', 'پری گوش'], ['otalgia', 'گوش‌درد']], 'نشانه‌ها.'),
          B('نام فارسی tinnitus ___ است.', ['وزوز گوش', 'گوش‌درد', 'سرگیجه'], 'زنگ گوش.'),
          S('املای انگلیسی «وزوز گوش» را بنویس', 'tinnitus', 'زنگ زدن.', 'tinn…'),
          N('d2t:hd')
        ]
      },
      {
        id: 'hd8', title: 'بیماری منیر', icon: '🌀', items: [
          L('سه‌گانه منیر', `${fig('meniere-art', [], 'بیماری منیر')}${e('<b>Meniere disease</b>')}: مایع بیش از حد در لابیرنت؛ حمله‌های ${e('vertigo')}، ${e('tinnitus')} و کم‌شنوایی نوسانی، همراه با پری گوش.`),
          L('درمان', `در حمله: داروی ضدسرگیجه؛ در درازمدت: رژیم کم‌نمک و ادرارآور. در موارد شدید: ${e('<b>labyrinthectomy</b>')} (برداشتن لابیرنت).${memo('منیر = «سه‌تا با هم»: چرخش، زنگ، کم‌شنوایی.')}`),
          M('کدام سه نشانه با هم در منیر می‌آیند؟', ['سرگیجه، وزوز و کم‌شنوایی', 'تب، درد و ترشح', 'دوبینی، سردرد و تهوع', 'خارش، قرمزی و ورم'], 'سه‌گانه.', null, F('meniere-art', [])),
          M('علت بیماری منیر…', ['مایع بیش از حد در گوش درونی', 'عفونت گوش بیرونی', 'پارگی پرده', 'جرم گوش'], 'لابیرنت.'),
          T('حمله‌های منیر دقیقه‌ها تا ساعت‌ها طول می‌کشند.', true, 'دوره‌ای.'),
          O('یک حمله منیر را بچین', ['aural fullness', 'tinnitus louder', 'vertigo attack', 'recovery'], 'الگوی معمول.'),
          P('هر درمان را به هدفش وصل کن', [['low-salt diet', 'کم کردن مایع'], ['antivertigo drug', 'کاهش سرگیجه'], ['labyrinthectomy', 'برداشتن لابیرنت'], ['hearing aid', 'جبران کم‌شنوایی']], 'درمان.'),
          B('بیماری منیر در گوش ___ است.', ['درونی', 'میانی', 'بیرونی'], 'لابیرنت.'),
          S('املای انگلیسی «برداشتن لابیرنت» را بنویس', 'labyrinthectomy', 'labyrinth/o + -ectomy.', 'labyrinthe…'),
          N('t2f:hd')
        ]
      },
      {
        id: 'hd9', title: 'کلستئاتوما و نوروم آکوستیک', icon: '⚠️', items: [
          L('توده‌های گوش', `• ${e('<b>cholesteatoma</b>')}: توده کیست‌مانند پوستی در گوش میانی؛ اغلب پس از اوتیت مزمن؛ استخوانچه‌ها را می‌خورد<br>• ${e('<b>acoustic neuroma</b>')}: تومور خوش‌خیم عصب هشتم؛ کم‌شنوایی یک‌طرفه، وزوز و عدم تعادل`),
          L('در بالین', `${pearl('در Chart Note آمده است: خانم ۳۰ ساله با اوتیت مزمن، دچار cholesteatoma شد؛ لوله گذاشتند ولی توده بزرگ‌تر شد و برای tympanoplasty بستری شد.')}${pearl('در Case Study 8-1 آمده است: آزمون BAEP در گوش چپ آقای George پاسخی نداشت و MRI یک acoustic neuroma یک‌سانتی‌متری نشان داد.')}`),
          M('کدام تومور روی عصب هشتم است؟', ['acoustic neuroma', 'cholesteatoma', 'retinoblastoma', 'chalazion'], 'neur/o + -oma.'),
          M('کلستئاتوما در کجاست؟', ['گوش میانی', 'حلزون', 'لاله', 'شیپور استاش'], 'توده پوستی.'),
          T('نوروم آکوستیک معمولاً کم‌شنوایی یک‌طرفه می‌دهد.', true, 'یک عصب.'),
          W('واژه‌ای بساز به معنی «برداشتن ماستوئید»', ['mastoid/o', '-ectomy'], ['dipl-', '-itis', 'ot/o'], 'mastoidectomy.'),
          P('هر واژه را به معنی‌اش وصل کن', [['cholesteatoma', 'توده پوستی گوش میانی'], ['acoustic neuroma', 'تومور عصب هشتم'], ['BAEP', 'پتانسیل برانگیخته شنوایی'], ['chronic', 'مزمن']], 'توده‌ها.'),
          B('آزمونی که در George پاسخ گوش چپ را نشان نداد ___ بود.', ['BAEP', 'Snellen', 'IOP'], 'پاسخ ساقه مغز.'),
          S('املای انگلیسی «کلستئاتوما» را بنویس', 'cholesteatoma', 'توده گوش میانی.', 'chole…'),
          N('wb:hd')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* حِسّا — دنیای ۵: تشخیص و درمان
 * سطح ۱: معاینه و آزمون‌های چشم • سطح ۲: جراحی و درمان چشم • سطح ۳: آزمون‌ها و درمان‌های گوش */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'tx', sym: 'Tx', name: 'تشخیص و درمان', short: 'تشخیص و درمان', sub: 'چارت اسنلن، افتالموسکوپی و تونومتری، جراحی آب مروارید، لیزیک، جراحی شبکیه و پلک، اتوسکوپی، آزمون دیاپازون، ادیومتری، میرنگوتومی، سمعک و کاشت حلزون',
    color: '#17A398', dark: '#0E756C', light: '#DDF5F2',
    levels: ['معاینه و آزمون‌های چشم', 'جراحی و درمان چشم', 'آزمون‌ها و درمان‌های گوش'],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'tx1', title: 'چارت اسنلن و دید رنگی', icon: '🔠', items: [
          L('اسنلن', `${fig('snellen-art', [], 'چارت اسنلن')}${e('<b>Snellen chart</b>')} حدت بینایی را می‌سنجد. در کسر ${e('20/40')}، عدد بالا فاصله آزمون (۲۰ فوت) و عدد پایین فاصله‌ای است که چشم سالم همان ردیف را می‌خواند. هر چشم جدا آزموده می‌شود: ${e('OD')}، ${e('OS')} و ${e('OU')}.`),
          L('دید رنگی', `${fig('snellen', ['آزمون با چارت اسنلن'], 'چارت اسنلن')}${fig('ishihara', ['صفحه آزمون ایشی‌هارا'], 'آزمون کوررنگی')}${e('<b>color vision test</b>')} با صفحه‌های نقطه‌ای (Ishihara) کوررنگی را پیدا می‌کند؛ کسی که کوررنگی قرمز-سبز دارد عدد را نمی‌بیند.${pearl('ابزار «بینایی‌سنج» حِسّا را باز کن: کسر اسنلن را بده تا حدت اعشاری و درجه بینایی را ببینی.')}`),
          M('در 20/40، عدد ۲۰ چیست؟', ['فاصله آزمون', 'فاصله چشم سالم', 'درصد بینایی', 'شماره ردیف'], 'صورت کسر.', null, F('snellen-art', [])),
          M('کدام دید بهتر است؟', ['20/20', '20/40', '20/100', '20/200'], 'مخرج کمتر.', null, F('snellen', [])),
          T('آزمون ایشی‌هارا برای تشخیص کوررنگی است.', true, 'صفحه‌های نقطه‌ای.', F('ishihara', [])),
          O('ردیف‌ها را از بالای چارت به پایین بچین', ['20/200', '20/100', '20/40', '20/20'], 'حرف‌ها کوچک‌تر می‌شوند.'),
          P('هر واژه را به معنی‌اش وصل کن', [['Snellen chart', 'چارت حدت بینایی'], ['color vision test', 'آزمون دید رنگی'], ['visual acuity', 'حدت بینایی'], ['OU', 'هر دو چشم']], 'آزمون‌ها.'),
          B('دید 20/20 یعنی بینایی ___.', ['طبیعی', 'ضعیف', 'نابینا'], 'حدت ۱.'),
          S('املای انگلیسی «اسنلن» (نام چارت) را بنویس', 'Snellen', 'Snellen chart.', 'Snel…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: 'ابزارهای معاینه چشم', icon: '🔬', items: [
          L('سه ابزار مهم', `${fig('eye-exam-tools', [], 'ابزارهای معاینه چشم')}• ${e('<b>ophthalmoscopy</b>')}: دیدن شبکیه و صفحه بینایی از مردمک<br>• ${e('<b>tonometry</b>')}: اندازه‌گیری فشار داخل چشم (${e('ton/o')} یعنی فشار)<br>• ${e('<b>slit lamp</b>')}: میکروسکوپ با نور باریک برای جلوی چشم<br>• ${e('<b>fluorescein angiography</b>')}: عکس رنگی رگ‌های شبکیه`),
          L('معاینه مردمک', `${fig('tonometry', ['تونومتری'], 'تونومتری')}${fig('slit-lamp', ['معاینه با اسلیت‌لمپ'], 'اسلیت‌لمپ')}${e('<b>PERRLA</b>')}: مردمک‌ها برابر، گرد و واکنش‌دار به نور و تطابق. برای دیدن ته چشم با قطره ${e('<b>mydriatic</b>')} مردمک را گشاد می‌کنند.${pearl('در Ophthalmology Consultation آمده است: <bdi dir="ltr">“ophthalmoscopy after application of mydriatic drops”</bdi> آب مروارید چشم راست را نشان داد.')}`),
          M('فشار داخل چشم با چه آزمونی سنجیده می‌شود؟', ['tonometry', 'audiometry', 'ophthalmoscopy', 'otoscopy'], 'ton/o + -metry.', null, F('eye-exam-tools', [])),
          M('PERRLA درباره کدام بخش است؟', ['مردمک', 'پلک', 'قرنیه', 'عدسی'], 'pupils equal, round, reactive.', null, F('slit-lamp', [])),
          T('قطره mydriatic مردمک را گشاد می‌کند.', true, 'برای دیدن ته چشم.', F('tonometry', [])),
          W('واژه‌ای بساز به معنی «مشاهده درون چشم با ابزار»', ['ophthalm/o', '-scopy'], ['dipl-', '-logy', 'ton/o'], 'ophthalmoscopy.'),
          P('هر ابزار را به کارش وصل کن', [['ophthalmoscope', 'دیدن شبکیه'], ['tonometer', 'سنجش فشار چشم'], ['slit lamp', 'معاینه جلوی چشم'], ['mydriatic', 'گشاد کردن مردمک']], 'ابزارها.'),
          B('اختصار IVFA یعنی intravenous fluorescein ___.', ['angiography', 'audiometry', 'acuity'], 'عکس رگ‌ها.'),
          S('املای انگلیسی «تونومتری» را بنویس', 'tonometry', 'ton/o + -metry.', 'tono…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: 'درمان گلوکوم و داروهای چشم', icon: '💧', items: [
          L('پایین آوردن فشار', `درمان ${e('glaucoma')} با کم کردن ${e('IOP')}:<br>• قطره‌ها، از جمله ${e('<b>miotic</b>')} (تنگ‌کننده مردمک)<br>• ${e('<b>trabeculectomy</b>')}: ساختن راه تخلیه تازه برای زلالیه<br>• ${e('<b>iridectomy</b>')}: برداشتن بخشی از عنبیه برای باز کردن زاویه`),
          L('یادآوری', `${vs(['miotic', 'تنگ‌کننده مردمک؛ در گلوکوم'], ['mydriatic', 'گشادکننده مردمک؛ برای معاینه'])}${memo('miotic و miosis هر دو با mi (کم، کوچک) شروع می‌شوند.')}`),
          M('در گلوکوم کدام دارو برای مردمک به کار می‌رود؟', ['miotic', 'mydriatic', 'antibiotic', 'anesthetic'], 'تنگ‌کننده.'),
          M(`${e('<b>iridectomy</b>')} یعنی…`, ['برداشتن بخشی از عنبیه', 'برش قرنیه', 'برداشتن عدسی', 'ترمیم پلک'], 'irid/o + -ectomy.'),
          T('ترابکولکتومی راه تازه‌ای برای تخلیه زلالیه می‌سازد.', true, 'کاهش IOP.'),
          W('واژه‌ای بساز به معنی «برداشتن عنبیه»', ['irid/o', '-ectomy'], ['kerat/o', '-plasty', 'phac/o'], 'iridectomy.'),
          P('هر درمان را به هدفش وصل کن', [['miotic', 'تنگ کردن مردمک'], ['trabeculectomy', 'تخلیه زلالیه'], ['iridectomy', 'باز کردن زاویه'], ['mydriatic', 'گشاد کردن برای معاینه']], 'درمان.'),
          B('هدف همه درمان‌های گلوکوم کم کردن ___ است.', ['IOP', 'VA', 'dB'], 'فشار داخل چشم.'),
          S('املای انگلیسی «داروی تنگ‌کننده مردمک» را بنویس', 'miotic', 'mi/o.', 'mio…'),
          N('d2t:tx')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'tx4', title: 'جراحی آب مروارید', icon: '💎', items: [
          L('فیکو و IOL', `${fig('phaco-iol', [], 'فیکو و لنز داخل چشمی')}${e('<b>phacoemulsification</b>')}: عدسی کدر با امواج فراصوت خرد و مکیده می‌شود؛ بعد ${e('<b>intraocular lens (IOL)</b>')} در کپسول گذاشته می‌شود.`),
          L('روی شکل', `${fig('phaco', ['فیکوامولسیفیکاسیون'], 'فیکو')}${fig('cataract-surgery', ['جای لنز مصنوعی'], 'جراحی آب مروارید')}${e('ECCE')}: عدسی برداشته می‌شود و پشت کپسول می‌ماند.${pearl('در Discharge Summary آمده است: برای خانم Serowan <bdi dir="ltr">“ultrasound was used to destroy the cataract”</bdi> و یک prosthetic intraocular lens گذاشته شد؛ روز بعد مرخص شد.')}`),
          M('در فیکو عدسی با چه چیزی خرد می‌شود؟', ['امواج فراصوت', 'لیزر اگزایمر', 'چاقو', 'سرما'], 'ultrasound.', null, F('phaco-iol', [])),
          M('اختصار IOL یعنی…', ['لنز داخل چشمی', 'فشار داخل چشم', 'التهاب عنبیه', 'لنز تماسی'], 'intraocular lens.', null, F('phaco', [])),
          T('در ECCE پشت کپسول عدسی باقی می‌ماند.', true, 'extracapsular.', F('cataract-surgery', [])),
          W('واژه‌ای بساز به معنی «داخل چشمی»', ['intra-', 'ocul/o', '-ar'], ['extra-', 'ophthalm/o', '-ia'], 'intraocular.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['IOL', 'لنز داخل چشمی'], ['ECCE', 'خارج کردن عدسی خارج‌کپسولی'], ['ICCE', 'خارج کردن عدسی داخل‌کپسولی'], ['SICS', 'جراحی آب مروارید با برش کوچک']], 'اختصارها.'),
          B('ریشه phac/o یعنی ___.', ['عدسی', 'قرنیه', 'شبکیه'], 'phacoemulsification.'),
          S('املای انگلیسی «فیکوامولسیفیکاسیون» را بنویس', 'phacoemulsification', 'phac/o + emulsification.', 'phaco…'),
          N('wb:tx')
        ]
      },
      {
        id: 'tx5', title: 'لیزیک و جراحی قرنیه', icon: '✨', items: [
          L('شکل دادن قرنیه', `${fig('lasik-art', [], 'لیزیک')}${e('<b>LASIK</b>')}: لایه نازکی از قرنیه بلند می‌شود، لیزر اگزایمر بافت زیر را می‌تراشد و لایه برمی‌گردد. برای نزدیک‌بینی، دوربینی و آستیگماتیسم.`),
          L('روش‌های دیگر', `${fig('lasik', ['جراحی لیزیک'], 'لیزیک')}• ${e('<b>photorefractive keratectomy (PRK)</b>')}: لیزر سطح قرنیه را برمی‌دارد<br>• ${e('<b>radial keratotomy (RK)</b>')}: برش‌های شعاعی قرنیه<br>• ${e('<b>keratoplasty</b>')}: ترمیم یا پیوند قرنیه${memo(`${e('kerat/o')} در همه این‌ها یعنی قرنیه. پسوند ${e('-ectomy')} یعنی برداشتن، ${e('-tomy')} یعنی برش و ${e('-plasty')} یعنی ترمیم.`)}`),
          M('لیزیک کدام بخش چشم را تغییر می‌دهد؟', ['قرنیه', 'عدسی', 'شبکیه', 'عنبیه'], 'cornea.', null, F('lasik-art', [])),
          M('پیوند قرنیه…', ['keratoplasty', 'keratotomy', 'keratectomy', 'keratitis'], '‎-plasty‎ یعنی ترمیم.', null, F('lasik', [])),
          T('RK با برش‌های شعاعی قرنیه نزدیک‌بینی را اصلاح می‌کند.', true, 'radial keratotomy.'),
          O('گام‌های لیزیک را بچین', ['corneal flap', 'excimer laser', 'flap replaced'], 'سه گام.'),
          P('هر روش را به کارش وصل کن', [['LASIK', 'لیزر زیر لایه قرنیه'], ['PRK', 'لیزر روی سطح قرنیه'], ['RK', 'برش شعاعی'], ['keratoplasty', 'پیوند قرنیه']], 'قرنیه.'),
          B('برش قرنیه ___ است.', ['keratotomy', 'keratectomy', 'keratoplasty'], '‎-tomy‎ یعنی برش.'),
          S('املای انگلیسی «پیوند قرنیه» را بنویس', 'keratoplasty', 'kerat/o + -plasty.', 'kerato…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx6', title: 'جراحی شبکیه، پلک و اشک', icon: '🩹', items: [
          L('شبکیه', `${fig('scleral-buckle', ['باکل اسکلرا برای جداشدگی شبکیه'], 'باکل اسکلرا')}• ${e('<b>scleral buckling</b>')}: نوار سیلیکونی دور صلبیه تا شبکیه به جایش بچسبد<br>• ${e('<b>vitrectomy</b>')}: برداشتن زجاجیه<br>• ${e('<b>enucleation</b>')}: برداشتن کامل کره چشم، مثلاً در رتینوبلاستوما`),
          L('پلک و اشک', `• ${e('<b>blepharoplasty</b>')}: جراحی پلک، مثل پلک افتاده<br>• ${e('<b>dacryocystorhinostomy</b>')}: راه تازه میان کیسه اشکی و بینی<br>• ${e('<b>eye patching</b>')}: چشم‌بند روی چشم سالم در تنبلی چشم${pearl('سناریوی کاربردی: برای پلک‌های افتاده آقای Smith که جلوی دیدش را گرفته بود، blepharoplasty برنامه‌ریزی شد.')}`),
          M('درمان جداشدگی شبکیه با نوار دور صلبیه…', ['scleral buckling', 'vitrectomy', 'keratoplasty', 'iridectomy'], 'باکل.', null, F('scleral-buckle', [])),
          M(`${e('<b>enucleation</b>')} یعنی…`, ['برداشتن کامل کره چشم', 'برداشتن عدسی', 'برداشتن پلک', 'برداشتن زجاجیه'], 'تخلیه.'),
          T('blepharoplasty یعنی جراحی ترمیمی پلک.', true, 'blephar/o + -plasty.'),
          W('واژه‌ای بساز به معنی «ترمیم پلک»', ['blephar/o', '-plasty'], ['dipl-', '-ptosis', 'dacry/o'], 'blepharoplasty.'),
          P('هر جراحی را به هدفش وصل کن', [['scleral buckling', 'جداشدگی شبکیه'], ['vitrectomy', 'برداشتن زجاجیه'], ['dacryocystorhinostomy', 'تخلیه اشک به بینی'], ['eye patching', 'تنبلی چشم']], 'جراحی‌ها.'),
          B('برداشتن زجاجیه ___ است.', ['vitrectomy', 'vasectomy', 'iridectomy'], 'vitre/o + -ectomy.'),
          S('املای انگلیسی «جراحی پلک» را بنویس', 'blepharoplasty', 'blephar/o + -plasty.', 'blepharo…'),
          N('f2t:tx')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'tx7', title: 'معاینه گوش و دیاپازون', icon: '🎵', items: [
          L('اتوسکوپی', `${fig('otoscope', ['اتوسکوپ'], 'اتوسکوپ')}${e('<b>otoscopy</b>')}: دیدن مجرا و پرده گوش با ${e('<b>otoscope</b>')} (چراغ و عدسی). ${e('<b>tympanometry</b>')}: سنجش حرکت پرده گوش؛ مایع گوش میانی را نشان می‌دهد.`),
          L('رینه و وبر', `${fig('tuning-fork-art', [], 'آزمون‌های دیاپازون')}${fig('rinne-weber', ['آزمون رینه و وبر'], 'رینه و وبر')}${e('<b>Rinne test</b>')} هدایت هوایی و استخوانی را مقایسه می‌کند و ${e('<b>Weber test</b>')} دیاپازون را روی وسط سر می‌گذارد. هر دو با ${e('tuning fork')} انجام می‌شوند.`),
          M('ابزار دیدن پرده گوش…', ['otoscope', 'ophthalmoscope', 'audiometer', 'tonometer'], 'ot/o + -scope.', null, F('otoscope', [])),
          M('در کم‌شنوایی انتقالی آزمون رینه چه نشان می‌دهد؟', ['BC > AC', 'AC > BC', 'هر دو صفر', 'AC = BC همیشه'], 'استخوانی بهتر.', null, F('tuning-fork-art', [])),
          T('در آزمون وبر، با کم‌شنوایی انتقالی صدا در گوش بیمار بلندتر شنیده می‌شود.', true, 'لترالیزه به گوش بیمار.', F('rinne-weber', [])),
          W('واژه‌ای بساز به معنی «سنجش پرده گوش»', ['tympan/o', '-metry'], ['ot/o', '-scope', 'audi/o'], 'tympanometry.'),
          P('هر آزمون را به کارش وصل کن', [['otoscopy', 'دیدن پرده گوش'], ['tympanometry', 'حرکت پرده'], ['Rinne test', 'مقایسه AC و BC'], ['Weber test', 'دیاپازون روی سر']], 'آزمون‌ها.'),
          B('ابزار آزمون رینه و وبر ___ fork است.', ['tuning', 'sound', 'hearing'], 'دیاپازون.'),
          S('املای انگلیسی «اتوسکوپی» را بنویس', 'otoscopy', 'ot/o + -scopy.', 'otos…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx8', title: 'ادیومتری', icon: '🎧', items: [
          L('ادیوگرام', `${fig('audiogram-art', [], 'ادیوگرام')}${e('<b>audiometry</b>')} با ${e('<b>audiometer</b>')} آستانه شنوایی را در هر فرکانس (Hz) به دسی‌بل (dB HL) می‌سنجد؛ نتیجه روی ${e('<b>audiogram</b>')} کشیده می‌شود: O گوش راست و X گوش چپ.`),
          L('آزمون‌های عصبی', `${fig('audiometry', ['ادیومتری کودک'], 'ادیومتری')}• ${e('<b>auditory brainstem response</b>')}: پاسخ مسیر عصبی شنوایی به صدا؛ با نام‌های ${e('ABR')} و ${e('BAEP')}<br>• ${e('electronystagmography (ENG)')}: آزمون تعادل${pearl('در Case Study 8-1 آمده است: پوره‌تون George شنوایی طبیعی گوش راست و کم‌شنوایی حسی-عصبی متوسط گوش چپ را نشان داد.')}`),
          M('روی ادیوگرام، X نماد کدام گوش است؟', ['گوش چپ', 'گوش راست', 'هر دو', 'هیچ‌کدام'], 'O راست، X چپ.', null, F('audiogram-art', [])),
          M('ابزار ادیومتری…', ['audiometer', 'otoscope', 'tonometer', 'tuning fork'], 'audi/o + -meter.', null, F('audiometry', [])),
          T('ادیوگرام نمودار شنوایی در فرکانس‌های مختلف است.', true, 'audi/o + -gram.'),
          W('واژه‌ای بساز به معنی «نگاره شنوایی»', ['audi/o', '-gram'], ['dipl-', '-logy', 'ot/o'], 'audiogram.'),
          P('هر واژه را به معنی‌اش وصل کن', [['audiometry', 'سنجش شنوایی'], ['audiometer', 'دستگاه سنجش'], ['audiogram', 'نمودار نتیجه'], ['ABR', 'پاسخ ساقه مغز']], 'ادیومتری.'),
          B('آستانه شنوایی ۴۵ dB یعنی کم‌شنوایی ___.', ['متوسط', 'طبیعی', 'عمیق'], 'بین ۴۱ تا ۵۵.'),
          S('املای انگلیسی «ادیومتری» را بنویس', 'audiometry', 'audi/o + -metry.', 'audiom…'),
          N('wb:tx')
        ]
      },
      {
        id: 'tx9', title: 'جراحی گوش، سمعک و کاشت حلزون', icon: '🦻', items: [
          L('جراحی‌ها', `${fig('myringotomy-art', [], 'میرنگوتومی')}${fig('pe-tube', ['جای لوله تهویه'], 'لوله PE')}• ${e('<b>myringotomy</b>')}: برش پرده گوش برای تخلیه؛ اغلب با ${e('<b>PE tube</b>')}<br>• ${e('<b>tympanoplasty</b>')}: ترمیم پرده و استخوانچه‌ها<br>• ${e('<b>stapedectomy</b>')}، ${e('<b>mastoidectomy</b>')}، ${e('otoplasty')} (جراحی لاله)<br>• ${e('ear irrigation')}: شست‌وشوی جرم گوش`),
          L('سمعک و کاشت', `${fig('hearing-devices', [], 'سمعک و کاشت حلزون')}${fig('cochlear-implant', ['کودک با کاشت حلزون'], 'کاشت حلزون')}${fig('ear-irrigation', ['شست‌وشوی گوش'], 'شست‌وشوی گوش')}${fig('sign-language', ['گفت‌وگو با زبان اشاره'], 'زبان اشاره')}${e('<b>hearing aid</b>')} صدا را بلندتر می‌کند؛ ${e('<b>cochlear implant</b>')} با الکترود در حلزون عصب شنوایی را مستقیم تحریک می‌کند.${pearl('در Operative Report آمده است: <bdi dir="ltr">“bilateral myringotomy with tube insertion”</bdi> برای اوتیت میانی عودکننده انجام شد.')}`),
          M('برش پرده گوش برای تخلیه…', ['myringotomy', 'tympanoplasty', 'mastoidectomy', 'otoplasty'], 'myring/o + -tomy.', null, F('myringotomy-art', [])),
          M('کدام وسیله برای ناشنوایی حسی-عصبی عمیق است؟', ['cochlear implant', 'hearing aid', 'PE tube', 'earplug'], 'کاشت حلزون.', null, F('cochlear-implant', [])),
          T('لوله PE فشار گوش میانی را برابر می‌کند و مایع را تخلیه می‌کند.', true, 'pressure-equalizing.', F('pe-tube', [])),
          W('واژه‌ای بساز به معنی «برش پرده گوش»', ['myring/o', '-tomy'], ['tympan/o', '-plasty', 'staped/o'], 'myringotomy.'),
          P('هر روش را به هدفش وصل کن', [['tympanoplasty', 'ترمیم پرده گوش'], ['stapedectomy', 'درمان اتواسکلروز'], ['mastoidectomy', 'برداشتن ماستوئید'], ['ear irrigation', 'شست‌وشوی جرم']], 'جراحی‌ها.'),
          B('اختصار ASL یعنی American Sign ___.', ['Language', 'Level', 'Lens'], 'زبان اشاره.'),
          S('املای انگلیسی «ترمیم پرده گوش» را بنویس', ['tympanoplasty', 'myringoplasty'], 'tympan/o + -plasty.', 'tympano…'),
          N('t2f:tx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* حِسّا — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. شکل‌ها از کره چشم، اشک، عدسی، گیرنده‌های شبکیه، لاله، حلزون، پرده گوش، چارت اسنلن و ادیومتر الهام گرفته‌اند. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: 'چشمک', title: 'کره کوچک کنجکاو', shape: 'eyeball', color: '#FBFDFF', acc: ['sparkle'], bio: 'یک کره چشم شاد که همه‌چیز را می‌بیند؛ ophthalm/o و ocul/o اسم‌های اویند.' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'ریشه‌یاب', title: 'استاد ot/o و ophthalm/o', shape: 'book', color: '#1E88A8', acc: ['glasses'], bio: 'لغت‌نامه‌ای زنده که هر واژه چشم و گوش را به ریشه، پیشوند و پسوند می‌شکند و ‎-opia‎ را با ‎-acusis‎ قاطی نمی‌کند.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'پازلی', title: 'سلطان پیشوند و پسوند', shape: 'puzzle', color: '#13627A', acc: ['crown'], bio: 'dipl-، presby- و eso- را کنار ‎-opia‎، ‎-tropia‎ و ‎-cusis‎ می‌چیند و واژه تازه می‌سازد.' },
    { id: 'ey-0', w: 'ey', lv: 0, name: 'قطره اشک', title: 'شوینده سطح چشم', shape: 'drop', color: '#9FD6EE', acc: ['sparkle'], bio: 'از غده اشکی می‌آید، سطح چشم را می‌شوید و از مجرای اشکی-بینی به بینی می‌رود؛ dacry/o و lacrim/o نام‌های اویند.' },
    { id: 'ey-1', w: 'ey', lv: 1, name: 'عدسی', title: 'متمرکزکننده نور', shape: 'lens', color: '#CFE9F7', acc: ['glasses'], bio: 'پشت مردمک است و با کمک عضله مژگانی برای دیدن دور و نزدیک شکلش را عوض می‌کند (accommodation).' },
    { id: 'ey-2', w: 'ey', lv: 2, name: 'مخروطی', title: 'گیرنده رنگ‌ها', shape: 'cone', color: '#E88A6A', acc: ['crown'], bio: 'در گودال مرکزی شبکیه زندگی می‌کند و رنگ و دید دقیق را می‌سازد؛ رفیقش استوانه‌ای در نور کم کار می‌کند.' },
    { id: 'vd-0', w: 'vd', lv: 0, name: 'عینکی', title: 'اصلاح‌گر نزدیک‌بینی', shape: 'eyeball', color: '#EAF4FB', acc: ['glasses'], bio: 'عدسی مقعر برای myopia و عدسی محدب برای hyperopia را می‌شناسد و دیوپتر را اندازه می‌گیرد.' },
    { id: 'vd-1', w: 'vd', lv: 1, name: 'مه‌آلود', title: 'یادآور آب مروارید', shape: 'cloud', color: '#D9D4C7', acc: ['sparkle'], bio: 'نشان می‌دهد عدسی کدر شده چطور دید را تار می‌کند؛ با فیکو و IOL دوباره شفاف می‌شود.' },
    { id: 'vd-2', w: 'vd', lv: 2, name: 'سپر بینایی', title: 'نگهبان عصب بینایی', shape: 'shield', color: '#8E6BD8', acc: ['crown'], bio: 'فشار داخل چشم را می‌پاید تا گلوکوم عصب بینایی را آسیب نزند و شبکیه را از جداشدگی حفظ می‌کند.' },
    { id: 'er-0', w: 'er', lv: 0, name: 'لاله', title: 'شکارچی صدا', shape: 'ear', color: '#F6D2B8', acc: ['sparkle'], bio: 'موج‌های صدا را جمع می‌کند و به مجرای شنوایی می‌فرستد؛ auricle و pinna نام‌های اویند.' },
    { id: 'er-1', w: 'er', lv: 1, name: 'حلزونک', title: 'نوازنده یاخته‌های مویی', shape: 'snail', color: '#9FD6EE', acc: ['glasses'], bio: 'حلزون گوش است؛ اندام کورتی درونش لرزش مایع را به پیام عصبی برای عصب هشتم تبدیل می‌کند.' },
    { id: 'er-2', w: 'er', lv: 2, name: 'طبلک', title: 'پرده گوش پرطنین', shape: 'drum', color: '#E8913A', acc: ['crown'], bio: 'با هر صدا می‌لرزد و لرزش را به چکشی، سندانی و رکابی می‌دهد؛ myring/o و tympan/o نام‌های اویند.' },
    { id: 'hd-0', w: 'hd', lv: 0, name: 'زنگوله', title: 'صدای وزوز', shape: 'bell', color: '#F2C94C', acc: ['sparkle'], bio: 'زنگی است که فقط در گوش بیمار می‌زند: tinnitus؛ همراه سرگیجه و کم‌شنوایی نشانه بیماری منیر است.' },
    { id: 'hd-1', w: 'hd', lv: 1, name: 'گوش‌گیر', title: 'محافظ در برابر سروصدا', shape: 'capsule', color: '#F07A5E', acc: ['glasses'], bio: 'بالای ۸۵ دسی‌بل به کمک می‌آید تا کم‌شنوایی ناشی از سروصدا پیش نیاید.' },
    { id: 'hd-2', w: 'hd', lv: 2, name: 'آنتی‌بادی', title: 'شکارچی اوتیت', shape: 'yab', color: '#D9534F', acc: ['crown'], bio: 'با میکروب‌های گوش میانی می‌جنگد و می‌داند چرا شیپور استاش کوتاه کودکان اوتیت را بیشتر می‌کند.' },
    { id: 'tx-0', w: 'tx', lv: 0, name: 'اسنلنی', title: 'چارت حدت بینایی', shape: 'chart', color: '#FFFFFF', acc: ['sparkle'], bio: 'از E بزرگ تا ردیف 20/20 را نشان می‌دهد و کسر بینایی هر چشم را می‌گوید.' },
    { id: 'tx-1', w: 'tx', lv: 1, name: 'ادیومتر', title: 'شنوایی‌سنج دقیق', shape: 'meter', color: '#17A398', acc: ['glasses'], bio: 'آستانه شنوایی را در هر فرکانس به دسی‌بل اندازه می‌گیرد و روی ادیوگرام می‌کشد.' },
    { id: 'tx-2', w: 'tx', lv: 2, name: 'نسخه‌نویس حسّا', title: 'استاد پرونده چشم و گوش', shape: 'clipboard', color: '#13627A', acc: ['cape', 'crown'], bio: 'OD، OS، AU، IOP، PERRLA و PE tube را در یک نگاه می‌خواند و از معاینه تا جراحی همراه است.' }
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
    /* تخمک با تاج سلولی */
    ovum: { fy: 84, top: 26, body: c => `${Array.from({ length: 12 }, (_, i) => { const a = i / 12 * Math.PI * 2; return `<circle cx="${(60 + Math.cos(a) * 52).toFixed(1)}" cy="${(86 + Math.sin(a) * 52).toFixed(1)}" r="9" fill="#FDE3C8" stroke="#E8B48A" stroke-width="1.3"/>`; }).join('')}<circle cx="60" cy="86" r="44" fill="#fff" opacity=".9"/><circle cx="60" cy="86" r="39" fill="${c}" stroke="#D77A96" stroke-width="2"/><path d="M32 66 C38 54 50 50 58 50" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>` },
    /* رحم با لوله‌ها */
    uterus: { fy: 74, top: 30, body: c => `<path d="M30 46 C16 40 6 46 4 58 M90 46 C104 40 114 46 116 58" stroke="#D77A96" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="8" cy="66" rx="8" ry="6" fill="#FDE3C8" stroke="#D79A63"/><ellipse cx="112" cy="66" rx="8" ry="6" fill="#FDE3C8" stroke="#D79A63"/><path d="M26 44 C24 22 96 22 94 44 C92 92 72 116 68 126 L68 146 L52 146 L52 126 C48 116 28 92 26 44Z" fill="${c}" stroke="#B84E6E" stroke-width="2"/><path d="M36 46 C38 36 46 32 54 32" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>` },
    /* اسپرم: سر بیضی و دم موجی */
    sperm: { fy: 70, top: 22, body: c => `<path d="M60 116 C46 126 74 134 60 144 C46 152 70 158 62 164" stroke="#3F87BF" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="50" y="104" width="20" height="16" rx="6" fill="#E9C27A" stroke="#B4903C"/><ellipse cx="60" cy="70" rx="42" ry="40" fill="${c}" stroke="#3F87BF" stroke-width="2.4"/><ellipse cx="58" cy="60" rx="24" ry="20" fill="#fff" opacity=".35"/>` },
    /* مغز: دو نیمکره با شکنج‌ها */
    /* کره چشم: صلبیه سفید با رگ‌های ریز و کلاهک عنبیه */
    eyeball: { fy: 92, top: 30, body: c => `<circle cx="60" cy="90" r="50" fill="${c}" stroke="#9fb3c2" stroke-width="2.5"/><path d="M28 54 C40 36 80 36 92 54 C80 46 40 46 28 54Z" fill="#2F8FB0"/><path d="M104 96 l-12 -2 M102 110 l-12 2 M18 100 l10 -2" stroke="#E07A6A" stroke-width="1.6" opacity=".6"/><path d="M26 76 C28 62 38 52 50 48" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".9"/>` },
    /* لاله گوش */
    ear: { fy: 88, top: 22, body: c => `<path d="M60 22 C18 20 8 70 14 104 C20 132 44 148 62 142 C78 136 74 118 64 110 C56 102 66 92 80 86 C100 76 106 58 100 44 C94 30 80 22 60 22Z" fill="${c}" stroke="#D9A988" stroke-width="2.5"/><path d="M58 36 C34 38 26 66 30 92" stroke="#D9A988" stroke-width="3" fill="none" opacity=".7"/><path d="M40 44 C46 34 56 30 66 30" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".6"/>` },
    /* حلزون گوش */
    snail: { fy: 88, top: 32, body: c => `<circle cx="60" cy="90" r="50" fill="${c}" stroke="#3F8FB8" stroke-width="2.5"/><path d="M60 90 m-40 0 a40 40 0 1 1 80 0 a32 32 0 1 1 -64 0 a24 24 0 1 1 48 0" stroke="#3F8FB8" stroke-width="3" fill="none" opacity=".45"/><path d="M26 68 C32 54 44 46 56 44" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".7"/>` },
    /* طبل (پرده گوش) */
    drum: { fy: 96, top: 40, body: c => `<path d="M20 64 L20 124 Q60 146 100 124 L100 64Z" fill="${c}"/><ellipse cx="60" cy="64" rx="40" ry="14" fill="#F5E6D3" stroke="#C27A5C" stroke-width="2.5"/><path d="M20 80 L40 124 L60 82 L80 124 L100 80" stroke="#fff" stroke-width="3" fill="none" opacity=".55"/><path d="M30 30 L50 58 M92 26 L72 56" stroke="#8B5A2B" stroke-width="5" stroke-linecap="round"/><circle cx="30" cy="30" r="6" fill="#F2C94C"/><circle cx="92" cy="26" r="6" fill="#F2C94C"/>` },
    /* عدسی دوکوژ */
    lens: { fy: 90, top: 28, body: c => `<path d="M60 26 C110 50 110 130 60 152 C10 130 10 50 60 26Z" fill="${c}" stroke="#6F9FC0" stroke-width="2.5"/><path d="M42 56 C34 74 34 96 40 112" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".8"/>` },
    /* گیرنده مخروطی */
    cone: { fy: 96, top: 26, body: c => `<path d="M60 22 L98 120 Q60 136 22 120Z" fill="${c}" stroke="#B5562F" stroke-width="2.5" stroke-linejoin="round"/><rect x="48" y="124" width="24" height="16" rx="6" fill="#F2C94C" stroke="#C9A12C"/><path d="M48 54 L36 100" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".5"/>` },
    /* زنگوله وزوز */
    bell: { fy: 92, top: 26, body: c => `<path d="M60 26 C30 26 24 60 24 88 C24 110 14 118 10 128 H110 C106 118 96 110 96 88 C96 60 90 26 60 26Z" fill="${c}" stroke="#C9A12C" stroke-width="2.5"/><circle cx="60" cy="136" r="9" fill="#C9A12C"/><path d="M8 60 q-6 10 0 20 M112 60 q6 10 0 20" stroke="#C9A12C" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M38 52 C42 42 50 36 58 34" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".6"/>` },
    /* چارت اسنلن */
    chart: { fy: 100, top: 20, body: c => `<rect x="18" y="20" width="84" height="122" rx="10" fill="${c}" stroke="#9AA9B1" stroke-width="2.5"/><text x="60" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" font-size="30" fill="#1d1d1d">E</text><path d="M34 128 H86" stroke="#c2413a" stroke-width="2"/><path d="M38 132 h8 M52 132 h6 M64 132 h8 M78 132 h4" stroke="#555" stroke-width="2.4"/>` },
    brain: { fy: 84, top: 26, body: c => `<path d="M60 30 C46 18 20 22 16 40 C2 46 0 70 10 82 C4 102 18 122 38 120 C46 134 58 132 60 124 C62 132 74 134 82 120 C102 122 116 102 110 82 C120 70 118 46 104 40 C100 22 74 18 60 30Z" fill="${c}" stroke="#C9677F" stroke-width="2"/><path d="M60 32 V122" stroke="#C9677F" stroke-width="2" opacity=".7"/><path d="M22 52 q10 -8 18 0 q8 8 16 -2 M98 52 q-10 -8 -18 0 q-8 8 -16 -2 M14 96 q8 -6 14 2 M106 96 q-8 -6 -14 2" stroke="#C9677F" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/><path d="M20 46 C24 36 32 32 40 32" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>` },
    /* نورون: جسم سلولی با دندریت‌ها و آکسون */
    neuron: { fy: 76, top: 34, body: c => `<path d="M60 112 V146 M60 146 l-10 6 M60 146 l10 6" stroke="#6C4FD0" stroke-width="5" stroke-linecap="round" fill="none"/>${[[24, 40], [96, 40], [10, 84], [110, 84], [40, 22], [80, 22]].map(p => `<path d="M60 76 L${p[0]} ${p[1]}" stroke="#6C4FD0" stroke-width="5" stroke-linecap="round"/><circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#6C4FD0"/>`).join('')}<circle cx="60" cy="78" r="38" fill="${c}" stroke="#6C4FD0" stroke-width="2.5"/><ellipse cx="44" cy="62" rx="9" ry="6" transform="rotate(-30 44 62)" fill="#fff" opacity=".45"/>` },
    /* صاعقه: تکانه عصبی */
    bolt: { fy: 74, top: 22, body: c => `<path d="M74 10 L22 86 H56 L42 146 L100 60 H66 L84 10Z" fill="${c}" stroke="#C99A1D" stroke-width="3" stroke-linejoin="round"/><path d="M70 18 L36 70" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".5"/>` },
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
/* حِسّا — راند بالینی: پرونده‌های چندمرحله‌ای
 * کیس‌ها از مطالعات موردی و تمرین‌های فایل‌های پیوست آمده‌اند: Case Study کتاب Cohen (Kelly’s Amblyopia و Case Study 8-1)،
 * Ophthalmology Consultation، Chart Note Transcription (Pearson) و Case Study نوازنده (Fremgen)، Chart Note کلستئاتوما (Gylys)،
 * Discharge Summary و Operative Report (Ehrlich) و سناریوهای APPLY (Kelly Post، Julie Halbritter، Bob Noel، آقای Smith،
 * کلاس بهداشت، از دست دادن بویایی و IOP در برابر IOL). پرونده r2 تمرین خواندن اختصارهای جدول‌های همین فصل‌هاست.
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان حواس ================= */
    {
      id: 'r1', w: 'lx', title: 'سه واژه در یک پرونده', who: 'Kelly Post، خانم ۶۸ ساله',
      brief: 'در حال مرور پرونده خانم Kelly Post هستی که تازه از مطب رفته است. پزشک سه وضعیت نوشته است: oculodynia، mastoiditis و conjunctivitis. باید هر کدام را به زبان ساده برای بیمار توضیح دهی.',
      chart: [['Age', '68'], ['Dx 1', 'oculodynia'], ['Dx 2', 'mastoiditis'], ['Dx 3', 'conjunctivitis']],
      fig: { a: 'wordparts', l: [] },
      steps: [
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['oculodynia', 'درد چشم'], ['mastoiditis', 'التهاب ماستوئید'], ['conjunctivitis', 'التهاب ملتحمه'], ['otalgia', 'گوش‌درد']], 'سناریوی کاربردی.'),
        M('پسوند', 'پسوند ‎-dynia‎ یعنی…', ['درد', 'التهاب', 'ترشح', 'افتادگی'], 'oculodynia.'),
        M('محل', 'زائده ماستوئید کجاست؟', ['پشت گوش در استخوان گیجگاهی', 'زیر چشم', 'در حلق', 'درون حلزون'], 'mastoid process.', null, { a: ['root-map-ear'], l: [] }),
        T('نام عامیانه', 'conjunctivitis همان «چشم صورتی» (pinkeye) است.', true, 'التهاب ملتحمه.'),
        P('ریشه', 'هر ریشه را به عضوش وصل کن', [['ocul/o', 'چشم'], ['mastoid/o', 'ماستوئید'], ['conjunctiv/o', 'ملتحمه'], ['ot/o', 'گوش']], 'ریشه‌ها.'),
        S('املا', 'املای «التهاب ملتحمه» را بنویس', 'conjunctivitis', 'conjunctiv/o + -itis.', 'conj…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: 'یادداشت معاینه سر و صورت', who: 'یادداشت درمانگاه HEENT',
      brief: 'در پرونده یک بیمار سرپایی این یادداشت آمده است: <bdi dir="ltr">“HEENT: PERRLA, EOM intact. VA OD 20/20, OS 20/40 sc. IOP normal OU. TM intact AU; no otorrhea.”</bdi> دانشجوی تازه‌کار از تو می‌خواهد اختصارها را بازنویسی کنی.',
      chart: [['Eyes', 'PERRLA, EOM intact'], ['VA', 'OD 20/20, OS 20/40 sc'], ['IOP', 'normal OU'], ['Ears', 'TM intact AU; no otorrhea']],
      fig: { a: 'od-os-ou', l: [] },
      steps: [
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['OD', 'چشم راست'], ['OS', 'چشم چپ'], ['OU', 'هر دو چشم'], ['AU', 'هر دو گوش']], 'راست و چپ.'),
        M('اختصار', 'PERRLA یعنی…', ['مردمک‌ها برابر، گرد و واکنش‌دار به نور و تطابق', 'فشار چشم طبیعی', 'حرکات چشم کامل', 'بینایی طبیعی'], 'معاینه مردمک.'),
        M('اختصار', 'sc در <bdi dir="ltr">“OS 20/40 sc”</bdi> یعنی…', ['بدون عینک یا لنز', 'با عینک', 'با قطره', 'بعد از جراحی'], 'sine correction.'),
        T('اختصار', 'EOM intact یعنی حرکات عضلات خارج‌چشمی کامل است.', true, 'extraocular movements.', { a: ['eye-muscles'], l: [] }),
        P('اختصار', 'هر اختصار گوش و چشم را به معنی‌اش وصل کن', [['TM', 'پرده گوش'], ['IOP', 'فشار داخل چشم'], ['VA', 'حدت بینایی'], ['HEENT', 'سر، چشم، گوش، حلق و بینی']], 'یادداشت.'),
        S('املا', 'املای «ترشح از گوش» را بنویس', 'otorrhea', 'ot/o + -rrhea.', 'oto…')
      ]
    },
    {
      id: 'r3', w: 'lx', title: 'وقتی بو نمی‌آید', who: 'یک بیمار فرضی (سناریوی کاربردی)',
      brief: 'سناریوی مرجع از تو می‌پرسد: «حس بویایی‌ات را از دست داده‌ای؛ این چه اثری بر زندگی روزمره‌ات دارد؟» بیمار می‌گوید بوی غذا و دود را نمی‌فهمد و غذا هم بی‌مزه شده است.',
      chart: [['CC', 'loss of smell'], ['Associated', 'food tastes bland'], ['Risk', 'cannot smell smoke or gas']],
      fig: { a: 'senses-overview', l: [] },
      steps: [
        M('واژه', 'اصطلاح پزشکی «از دست رفتن بویایی»…', ['anosmia', 'ageusia', 'anacusis', 'aphasia'], 'an- + osm/o + -ia.'),
        M('واژه', 'چرا غذا بی‌مزه شده است؟', ['بویایی بخش بزرگی از حس طعم است', 'چشایی همیشه از بین رفته', 'گوش آسیب دیده', 'چشم ضعیف شده'], 'بو و مزه با هم کار می‌کنند.'),
        T('خطر', 'کسی که anosmia دارد ممکن است بوی دود یا گاز را حس نکند.', true, 'خطر ایمنی.', { a: ['sense-organs'], l: [] }),
        P('حس', 'هر حس را به اصطلاح پزشکی‌اش وصل کن', [['بویایی', 'olfaction'], ['چشایی', 'gustation'], ['شنوایی', 'audition'], ['تعادل', 'equilibrium']], 'پنج حس.'),
        M('ریشه', 'ریشه olfact/o یعنی…', ['بو', 'مزه', 'صدا', 'نور'], 'olfaction.'),
        S('املا', 'املای «از دست رفتن چشایی» را بنویس', 'ageusia', 'a- + geus/o + -ia.', 'ageu…')
      ]
    },
    /* ================= چشم ================= */
    {
      id: 'r4', w: 'ey', title: 'چشمی که به داخل می‌چرخد', who: 'Kelly، دختر ۷ ساله',
      brief: 'در Case Study آمده است: Kelly که تازه به فرزندی پذیرفته شده، پیش دکتر McLaren (پزشک اطفال) آمده است؛ خانواده نگرانند چون یکی از چشم‌هایش به داخل منحرف به نظر می‌رسد و در مدرسه عقب افتاده است. چشم‌پزشک دید که چشم چپ به سمت medial canthus منحرف است.',
      chart: [['Age', '7 y/o'], ['CC', 'one eye deviates inward'], ['Exam', 'L eye deviates toward medial canthus'], ['Referral', 'ophthalmologist']],
      fig: { a: 'strabismus-art', l: [] },
      steps: [
        M('آناتومی', 'medial canthus کجاست؟', ['گوشه داخلی چشم، سمت بینی', 'گوشه بیرونی چشم', 'وسط پلک بالا', 'پشت کره چشم'], 'canthus یعنی گوشه.', null, { a: ['eye-front'], l: [] }),
        M('واژه', 'انحراف چشم به داخل…', ['esotropia', 'exotropia', 'nystagmus', 'ptosis'], 'eso- یعنی به داخل.'),
        M('متخصص', 'Kelly به کدام متخصص ارجاع شد؟', ['ophthalmologist', 'optician', 'audiologist', 'otologist'], 'چشم‌پزشک.'),
        T('عضله', 'عضله راست داخلی (medial rectus) چشم را به سمت بینی می‌برد.', true, 'medial یعنی داخل.', { a: ['eye-muscles'], l: [] }),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['strabismus', 'ناهم‌راستایی چشم‌ها'], ['medial canthus', 'گوشه داخلی چشم'], ['pediatrician', 'پزشک اطفال'], ['extraocular muscles', 'عضلات خارج‌چشمی']], 'Case Study.'),
        S('املا', 'املای «گوشه چشم» را بنویس', 'canthus', 'کنج.', 'cant…')
      ]
    },
    {
      id: 'r5', w: 'ey', title: 'پلک‌هایی که جلوی دید را گرفته‌اند', who: 'آقای Smith',
      brief: 'سناریوی کاربردی: پزشک در معاینه آقای Smith از دستیار پزشکی می‌خواهد برای پلک‌های افتاده‌اش که جلوی دید را گرفته‌اند، جراحی برنامه‌ریزی کند. دستیار باید نام بیماری و جراحی را درست بنویسد.',
      chart: [['CC', 'droopy upper eyelids'], ['Exam', 'lids obstruct visual field'], ['Plan', 'surgical repair of eyelids']],
      fig: { a: 'lid-disorders', l: [] },
      steps: [
        M('واژه', 'افتادگی پلک بالا…', ['blepharoptosis', 'blepharitis', 'ectropion', 'chalazion'], 'blephar/o + -ptosis.'),
        M('جراحی', 'جراحی که برنامه‌ریزی شد…', ['blepharoplasty', 'blepharotomy', 'keratoplasty', 'iridectomy'], 'blephar/o + -plasty.'),
        P('آناتومی', 'هر بخش را به معنی‌اش وصل کن', [['eyelid', 'پلک'], ['palpebra', 'نام لاتین پلک'], ['eyelashes', 'مژه‌ها'], ['eyebrow', 'ابرو']], 'محافظ‌ها.'),
        T('میدان', 'پلک افتاده ممکن است بخش بالایی میدان بینایی را بپوشاند.', true, 'visual field.', { a: ['eye-accessory'], l: [] }),
        M('پسوند', 'پسوند ‎-ptosis‎ یعنی…', ['افتادگی', 'ترمیم', 'برش', 'التهاب'], 'blepharoptosis.'),
        S('املا', 'املای «افتادگی پلک» را بنویس', 'blepharoptosis', 'blephar/o + -ptosis.', 'blepharop…')
      ]
    },
    {
      id: 'r6', w: 'ey', title: 'کلاس بهداشت: چگونه می‌بینیم؟', who: 'دانش‌آموزان کلاس ششم',
      brief: 'سناریوی کاربردی: قرار است برای کلاس ششم توضیح دهی چطور می‌بینیم؛ از ورود نور به چشم تا رسیدن پیام به مغز.',
      chart: [['Topic', 'how sight occurs'], ['Key terms', 'cornea, lens, retina, optic nerve'], ['Brain', 'visual cortex']],
      fig: { a: 'visual-pathway', l: [] },
      steps: [
        O('مسیر', 'مسیر نور را بچین', ['cornea', 'pupil', 'lens', 'retina', 'optic nerve'], 'از جلو به عقب.'),
        M('گیرنده', 'کدام گیرنده در نور کم کار می‌کند؟', ['rods', 'cones', 'fovea', 'iris'], 'استوانه‌ها.', null, { a: ['retina-fundus'], l: [] }),
        M('مغز', 'پیام بینایی در کدام لوب تفسیر می‌شود؟', ['پس‌سری', 'گیجگاهی', 'پیشانی', 'آهیانه'], 'occipital.'),
        T('تصویر', 'تصویر روی شبکیه وارونه است.', true, 'مغز درستش می‌کند.', { a: ['accommodation-art'], l: [] }),
        P('کار', 'هر بخش را به کارش وصل کن', [['cornea', 'شکست بیشتر نور'], ['iris', 'تنظیم مردمک'], ['lens', 'تمرکز دقیق'], ['retina', 'گیرنده نور']], 'چشم.'),
        S('املا', 'املای «عصب بینایی» (optic …) را بنویس', 'optic nerve', 'CN II.', 'optic n…')
      ]
    },
    /* ================= بیماری‌های چشم ================= */
    {
      id: 'r7', w: 'vd', title: 'پرده‌ای روی چشم راست', who: 'خانم ۷۹ ساله',
      brief: 'در Ophthalmology Consultation آمده است: بیمار ۷۹ ساله در سال گذشته کاهش تدریجی دید و photophobia، بیشتر در چشم راست، داشته و می‌گوید انگار پرده‌ای روی چشم راستش است. همه عمرش برای hyperopia عینک زده است. فشار داخل چشم طبیعی است. ophthalmoscopy پس از قطره mydriatic آب مروارید بزرگ چشم راست را نشان داد. توصیه: فیکوامولسیفیکاسیون و لنز مصنوعی.',
      chart: [['CC', 'progressive loss of vision OD, photophobia'], ['Hx', 'hyperopia, corrective lenses'], ['Exam', 'IOP normal; large opaque cataract OD'], ['Plan', 'phacoemulsification + prosthetic lens']],
      fig: { a: 'cataract-art', l: [] },
      steps: [
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['photophobia', 'حساسیت به نور'], ['hyperopia', 'دوربینی'], ['mydriatic', 'گشادکننده مردمک'], ['cataract', 'کدری عدسی']], 'طبق منابع مرجع.'),
        M('معاینه', 'چرا پیش از ophthalmoscopy قطره mydriatic ریختند؟', ['تا مردمک گشاد شود و ته چشم دیده شود', 'تا فشار چشم کم شود', 'تا درد کم شود', 'تا عفونت درمان شود'], 'گشادی مردمک.', null, { a: ['eye-exam-tools'], l: [] }),
        T('رد کردن', 'فشار داخل چشم طبیعی بود؛ پس گلوکوم مطرح نیست.', true, 'IOP normal.'),
        M('درمان', 'phacoemulsification چه می‌کند؟', ['عدسی کدر را با فراصوت خرد و خارج می‌کند', 'قرنیه را با لیزر می‌تراشد', 'شبکیه را می‌چسباند', 'پلک را ترمیم می‌کند'], 'phac/o یعنی عدسی.', null, { a: ['phaco-iol'], l: [] }),
        M('رد کردن', 'کدام بیماری در گزارش «ندارد» آمده است؟', ['retinopathy، macular degeneration و keratitis', 'cataract', 'hyperopia', 'photophobia'], 'no evidence of.'),
        S('املا', 'املای «آب مروارید» را بنویس', 'cataract', 'کدری عدسی.', 'cata…')
      ]
    },
    {
      id: 'r8', w: 'vd', title: 'برآمدگی قرمز روی پلک', who: 'Julie Halbritter',
      brief: 'سناریوی کاربردی: به عنوان پرستار اطلاعات بیمار تازه، خانم Halbritter، را جمع می‌کنی. او یک برآمدگی قرمز روی پلک دارد و چشم چپش قرمز و ملتهب است، با اشک‌ریزی زیاد و پلک زدن مکرر. نشانه‌ها را با واژه پزشکی بنویس.',
      chart: [['Sx 1', 'reddened lump on eyelid'], ['Sx 2', 'reddened, inflamed left eye'], ['Sx 3', 'excessive tearing and blinking']],
      fig: { a: 'eye-infections', l: [] },
      steps: [
        M('واژه', '«برآمدگی قرمز روی پلک» با واژه پزشکی…', ['hordeolum', 'chalazion', 'cataract', 'ectropion'], 'گل‌مژه.', null, { a: ['hordeolum'], l: [] }),
        M('واژه', '«چشم قرمز و ملتهب»…', ['conjunctivitis', 'keratitis', 'glaucoma', 'uveitis'], 'التهاب ملتحمه.'),
        M('اختصار', 'چشم چپ را چگونه می‌نویسی؟', ['OS', 'OD', 'OU', 'AS'], 'oculus sinister.'),
        T('واژه', 'اشک‌ریزی زیاد را dacryorrhea یا epiphora می‌نویسند.', true, 'dacry/o + -rrhea.'),
        P('واژه', 'هر نشانه را به واژه پزشکی‌اش وصل کن', [['lump on eyelid', 'hordeolum'], ['red, inflamed eye', 'conjunctivitis'], ['excessive tearing', 'dacryorrhea'], ['inflamed eyelid edge', 'blepharitis']], 'سناریوی کاربردی.'),
        S('املا', 'املای «گل‌مژه» (نام علمی) را بنویس', 'hordeolum', 'sty.', 'hord…')
      ]
    },
    {
      id: 'r9', w: 'vd', title: 'IOP یا IOL؟', who: 'بیمار گلوکومی',
      brief: 'سناریوی کاربردی: بیمار در برگه‌اش هم IOP دیده و هم IOL و می‌پرسد فرقشان چیست. چشم‌پزشک گفته فشار چشمش بالاست و باید قطره بزند و سال‌ها بعد شاید برای آب مروارید لنز بگذارد.',
      chart: [['Dx', 'glaucoma; elevated IOP'], ['Plan', 'eye drops; monitor optic disc'], ['Future', 'possible cataract surgery with IOL']],
      fig: { a: 'glaucoma-art', l: [] },
      steps: [
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['IOP', 'فشار داخل چشم'], ['IOL', 'لنز داخل چشمی'], ['VA', 'حدت بینایی'], ['VF', 'میدان بینایی']], 'سناریوی کاربردی.'),
        M('بیماری', 'IOP بالا با کدام بیماری همراه است؟', ['glaucoma', 'cataract', 'myopia', 'conjunctivitis'], 'آب سیاه.'),
        M('آسیب', 'گلوکوم درمان‌نشده به کدام بخش آسیب می‌زند؟', ['عصب بینایی', 'عدسی', 'قرنیه', 'پلک'], 'optic nerve.'),
        T('آزمون', 'فشار داخل چشم با tonometry اندازه‌گیری می‌شود.', true, 'ton/o + -metry.', { a: ['tonometry'], l: [] }),
        M('دید', 'گلوکوم اول کدام دید را می‌گیرد؟', ['محیطی (دید تونلی)', 'مرکزی', 'رنگی', 'شبانه'], 'tunnel vision.', null, { a: ['field-defects'], l: [] }),
        S('املا', 'املای «آب سیاه» را بنویس', 'glaucoma', 'glauc/o + -oma.', 'glau…')
      ]
    },
    /* ================= گوش ================= */
    {
      id: 'r10', w: 'er', title: 'گوش‌گیر در کارخانه', who: 'آقای Bob Noel، کارگر کارخانه',
      brief: 'سناریوی کاربردی: آقای Noel در کارخانه کار می‌کند و کارفرما از او خواسته گوش‌گیر بزند. او نمی‌داند چرا؛ باید برایش توضیح دهی صدای بلند با گوش چه می‌کند.',
      chart: [['Job', 'factory worker'], ['Exposure', 'loud machinery, many hours a day'], ['Advice', 'ear plugs']],
      fig: { a: 'decibel-scale', l: [] },
      steps: [
        M('واحد', 'بلندی صدا با چه واحدی سنجیده می‌شود؟', ['decibel', 'hertz', 'diopter', 'gram'], 'dB.'),
        M('آستانه', 'صدای بالای چند دسی‌بل در درازمدت خطرناک است؟', ['۸۵', '۳۰', '۵۰', '۱۰'], 'ترافیک سنگین.'),
        M('آسیب', 'صدای بلند به کدام یاخته‌ها آسیب می‌زند؟', ['یاخته‌های مویی حلزون', 'استوانه‌های شبکیه', 'یاخته‌های پوست', 'غدد جرم گوش'], 'hair cells.', null, { a: ['cochlea-corti'], l: [] }),
        T('نوع', 'کم‌شنوایی ناشی از سروصدا از نوع حسی-عصبی است.', true, 'آسیب حلزون.'),
        O('مسیر', 'مسیر صدا را تا آسیب بچین', ['loud sound', 'ear canal', 'middle ear', 'cochlea hair cells damaged'], 'صدا تا حلزون.'),
        S('املا', 'املای «دسی‌بل» را بنویس', 'decibel', 'dB.', 'deci…')
      ]
    },
    {
      id: 'r11', w: 'er', title: 'گزارش شنوایی‌سنجی', who: 'George، مرد ۵۵ ساله',
      brief: 'در Case Study 8-1 آمده است: آقای George سه سال است شنوایی گوش چپش کم شده و tinnitus و احساس پری گوش دارد. پوره‌تون: گوش راست طبیعی و گوش چپ کم‌شنوایی حسی-عصبی متوسط. رفلکس آکوستیک contralateral و ipsilateral در گوش چپ نبود. BAEP گوش راست طبیعی و گوش چپ بی‌پاسخ بود.',
      chart: [['CC', 'decreased hearing AS, 3 years'], ['Sx', 'tinnitus, aural fullness'], ['Audiometry', 'moderate SNHL AS; AD normal'], ['BAEP', 'no response AS']],
      fig: { a: 'audiogram-art', l: [] },
      steps: [
        M('اختصار', 'AS یعنی…', ['گوش چپ', 'گوش راست', 'هر دو گوش', 'چشم چپ'], 'auris sinistra.'),
        M('واژه', 'ipsilateral یعنی…', ['هم‌سمت', 'سمت مقابل', 'دوطرفه', 'وسط'], 'ipsi- یعنی همان.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['contralateral', 'سمت مقابل'], ['tinnitus', 'وزوز'], ['aural fullness', 'پری گوش'], ['audiology', 'شنوایی‌شناسی']], 'Case Study 8-1.'),
        M('آزمون', 'BAEP چه چیزی را می‌سنجد؟', ['پاسخ مسیر عصبی شنوایی در ساقه مغز', 'فشار چشم', 'حرکت پرده گوش', 'حدت بینایی'], 'brainstem auditory evoked potentials.'),
        T('فرکانس', 'Hz واحد فرکانس صداست.', true, 'هرتز.', { a: ['audiometry'], l: [] }),
        S('املا', 'املای «شنوایی‌شناسی» را بنویس', 'audiology', 'audi/o + -logy.', 'audio…')
      ]
    },
    {
      id: 'r12', w: 'er', title: 'ترجمه یادداشت به زبان پزشکی', who: 'دختر ۸ ساله',
      brief: 'در Chart Note Transcription (Central General Hospital) آمده است: دختر ۸ ساله را پزشک اطفال برای «عفونت مزمن گوش میانی چپ» به «متخصص گوش، حلق و بینی» فرستاده است. «معاینه چشمی مجرای گوش و پرده گوش در هر دو گوش» نشان داد «پرده بین مجرای گوش و گوش میانی» راست سالم و چپ برآمده است؛ «جرم گوش» زیاد بود. «اندازه‌گیری حرکت پرده گوش» مایع در گوش میانی چپ را نشان داد.',
      chart: [['Referral', 'ENT specialist'], ['Dx', 'chronic left middle ear infection'], ['Tests', 'visual exam of ear; eardrum movement test; hearing tests'], ['Plan', 'left eardrum incision + PE tube']],
      fig: { a: 'ear-section', l: [] },
      steps: [
        P('ترجمه', 'هر عبارت را به واژه پزشکی‌اش وصل کن', [['specialist in ears, nose and throat', 'otorhinolaryngologist'], ['middle ear infection', 'otitis media'], ['both ears', 'AU'], ['earwax', 'cerumen']], 'طبق منابع مرجع.'),
        M('ترجمه', '«معاینه چشمی مجرای گوش و پرده گوش» یعنی…', ['otoscopy', 'audiometry', 'tympanometry', 'ophthalmoscopy'], 'ot/o + -scopy.', null, { a: ['otoscope'], l: [] }),
        M('ترجمه', '«پرده بین مجرای گوش و گوش میانی»…', ['tympanic membrane', 'oval window', 'cochlea', 'auricle'], 'پرده گوش.'),
        M('ترجمه', '«اندازه‌گیری حرکت پرده گوش»…', ['tympanometry', 'audiometry', 'otoscopy', 'tonometry'], 'tympan/o + -metry.'),
        T('درمان', '«برش پرده گوش» همان myringotomy است.', true, 'myring/o + -tomy.', { a: ['myringotomy-art'], l: [] }),
        S('املا', 'املای «جرم گوش» را بنویس', 'cerumen', 'earwax.', 'ceru…')
      ]
    },
    /* ================= بیماری‌های گوش ================= */
    {
      id: 'r13', w: 'hd', title: 'نوازنده‌ای که نمی‌شنود', who: 'مرد ۳۵ ساله، نوازنده',
      brief: 'در Case Study آمده است: نوازنده ۳۵ ساله در درمانگاه EENT از کم‌شنوایی پیش‌رونده در ۱۵ سال گذشته شکایت دارد؛ در محیط شلوغ حرف‌ها را نمی‌فهمد. ۲۰ سال با سازهای پرصدا و بدون گوش‌گیر نواخته است. اتوسکوپی طبیعی، تمپانومتری طبیعی و ادیومتری کاهش دوطرفه شنوایی نشان داد. آزمون‌های Rinne و Weber کم‌شنوایی متوسط را تأیید کردند. برای سمعک ارجاع شد.',
      chart: [['CC', 'progressive hearing loss, 15 years'], ['Hx', 'amplified music, no earplugs'], ['Tests', 'otoscopy, tympanometry normal; audiometry ↓ bilaterally; Rinne, Weber'], ['Plan', 'hearing aid evaluation']],
      fig: { a: 'hearing-loss-types', l: [] },
      steps: [
        M('اختصار', 'EENT یعنی…', ['چشم، گوش، حلق و بینی', 'فقط گوش', 'اورژانس', 'چشم و عصب'], 'eyes, ears, nose and throat.'),
        P('آزمون', 'هر آزمون را به کارش وصل کن', [['otoscopy', 'دیدن پرده گوش'], ['tympanometry', 'حرکت پرده'], ['audiometry', 'سنجش شنوایی'], ['Rinne test', 'مقایسه AC و BC']], 'آزمون‌ها.'),
        M('علت', 'علت احتمالی کم‌شنوایی او…', ['سروصدای بلند و طولانی', 'عفونت گوش', 'جرم گوش', 'ضربه به سر'], 'noise exposure.'),
        T('دوطرفه', 'bilaterally یعنی در هر دو گوش.', true, 'bi- یعنی دو.', { a: ['tuning-fork-art'], l: [] }),
        M('درمان', 'کدام وسیله برایش پیشنهاد شد؟', ['hearing aid', 'cochlear implant', 'PE tube', 'earplug'], 'سمعک.', null, { a: ['hearing-devices'], l: [] }),
        S('املا', 'املای «ادیومتری» را بنویس', 'audiometry', 'audi/o + -metry.', 'audiom…')
      ]
    },
    {
      id: 'r14', w: 'hd', title: 'توده‌ای که بزرگ‌تر می‌شود', who: 'خانم ۳۰ ساله',
      brief: 'در Chart Note آمده است: این خانم ۳۰ ساله را متخصص ENT برای mucoserous otitis media در سمت راست دید. در بیمارستان دچار cholesteatoma شد. برای chronic adhesive otitis media با کلستئاتومای ثانویه لوله گذاشتند؛ پس از عمل حالش بهتر شد ولی توده بزرگ‌تر می‌شود. اکنون برای tympanoplasty راست با بیهوشی عمومی بستری است.',
      chart: [['Dx', 'mucoserous otitis media, right'], ['Complication', 'cholesteatoma'], ['Hx', 'tube for chronic adhesive OM'], ['Plan', 'right tympanoplasty, general anesthesia']],
      fig: { a: 'otitis-media-art', l: [] },
      steps: [
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['chronic', 'مزمن، طولانی'], ['mucoserous', 'مخاطی-سروزی'], ['tympanoplasty', 'ترمیم پرده گوش'], ['postoperatively', 'پس از عمل']], 'Chart Note Analysis.'),
        M('توده', 'cholesteatoma چیست؟', ['توده کیست‌مانند پوستی در گوش میانی', 'تومور عصب هشتم', 'جرم گوش', 'چرک گوش بیرونی'], 'عارضه اوتیت مزمن.'),
        M('اختصار', 'ENT یعنی…', ['گوش، حلق و بینی', 'چشم و گوش', 'اورژانس', 'عصب‌شناسی'], 'ears, nose and throat.'),
        T('جراحی', 'tympanoplasty یعنی ترمیم پرده گوش (و گاه استخوانچه‌ها).', true, 'tympan/o + -plasty.', { a: ['pe-tube'], l: [] }),
        O('روند', 'روند بیمار را بچین', ['mucoserous otitis media', 'cholesteatoma', 'tube insertion', 'tympanoplasty'], 'طبق منابع مرجع.'),
        S('املا', 'املای «ترمیم پرده گوش» را بنویس', 'tympanoplasty', 'tympan/o + -plasty.', 'tympano…')
      ]
    },
    {
      id: 'r15', w: 'hd', title: 'MRI چه نشان داد؟', who: 'George، مرد ۵۵ ساله',
      brief: 'در ادامه Case Study 8-1 آمده است: کم‌شنوایی حسی-عصبی یک‌طرفه گوش چپ، وزوز، پری گوش و نبود پاسخ BAEP در چپ، پزشک را به فکر یک توده انداخت. MRI یک acoustic neuroma یک‌سانتی‌متری نشان داد.',
      chart: [['Sx', 'unilateral SNHL AS, tinnitus, aural fullness'], ['BAEP', 'no response AS'], ['MRI', '1-cm acoustic neuroma']],
      fig: { a: 'inner-ear-art', l: [] },
      steps: [
        M('تومور', 'acoustic neuroma روی کدام عصب است؟', ['عصب هشتم (vestibulocochlear)', 'عصب دوم (optic)', 'عصب پنجم', 'عصب هفتم'], 'CN VIII.'),
        M('نام دیگر', 'نام دیگر acoustic neuroma در منابع مرجع…', ['acoustic neurilemmoma', 'cholesteatoma', 'otosclerosis', 'macular degeneration'], 'Case Study 8-1 Questions.'),
        T('نوع', 'نوروم آکوستیک کم‌شنوایی حسی-عصبی می‌دهد.', true, 'آسیب عصب.', { a: ['hearing-loss-types'], l: [] }),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['unilateral', 'یک‌طرفه'], ['neuroma', 'تومور عصب'], ['MRI', 'تصویربرداری تشدید مغناطیسی'], ['sensorineural', 'حسی-عصبی']], 'تشخیص.'),
        M('ریشه', 'در neuroma، پسوند ‎-oma‎ یعنی…', ['تومور', 'التهاب', 'درد', 'برش'], 'neur/o + -oma.'),
        S('املا', 'املای «حسی-عصبی» را بنویس', 'sensorineural', 'sensory + neural.', 'senso…')
      ]
    },
    /* ================= تشخیص و درمان ================= */
    {
      id: 'r16', w: 'tx', title: 'خلاصه ترخیص: آب مروارید', who: 'خانم Serowan',
      brief: 'در Discharge Summary آمده است: خانم Serowan سال‌ها کاهش پیش‌رونده دید در چشم راست داشت. بهترین حدت بینایی با اصلاح در چشم راست 20/70 بود. در ۲۱ ژوئن آب مروارید با ultrasound خرد شد و prosthetic intraocular lens گذاشته شد. روز اول پس از عمل مرخص شد.',
      chart: [['Admission Dx', 'cataract for extraction'], ['Exam', 'BCVA 20/70 OD'], ['Procedure', 'ultrasound cataract removal + IOL'], ['Discharge', 'postoperative day 1']],
      fig: { a: 'phaco-iol', l: [] },
      steps: [
        M('اختصار', 'BCVA یعنی…', ['بهترین حدت بینایی با اصلاح', 'فشار داخل چشم', 'حدت بینایی بدون عینک', 'میدان بینایی'], 'best corrected visual acuity.'),
        M('اسنلن', '20/70 یعنی…', ['از ۲۰ فوتی چیزی را می‌بیند که چشم سالم از ۷۰ فوتی می‌بیند', 'هفتاد درصد بینایی دارد', 'نابیناست', 'دید طبیعی دارد'], 'کسر اسنلن.', null, { a: ['snellen-art'], l: [] }),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['deteriorating', 'رو به بدتر شدن'], ['ultrasound', 'فراصوت'], ['prosthetic', 'مصنوعی'], ['intraocular lens', 'لنز داخل چشمی']], 'طبق منابع مرجع.'),
        T('روش', 'خرد کردن عدسی با فراصوت همان phacoemulsification است.', true, 'فیکو.', { a: ['cataract-surgery'], l: [] }),
        O('روند', 'روند بیمار را بچین', ['progressive vision loss', 'BCVA 20/70', 'cataract removal', 'IOL insertion', 'discharge'], 'از شکایت تا ترخیص.'),
        S('املا', 'املای «مصنوعی» (prosthetic) را بنویس', 'prosthetic', 'پروتز.', 'prost…')
      ]
    },
    {
      id: 'r17', w: 'tx', title: 'گزارش عمل: لوله در هر دو گوش', who: 'کودک با اوتیت عودکننده',
      brief: 'در Operative Report آمده است: تشخیص پیش از عمل otitis media و پس از عمل recurrent otitis media. بیمار در وضعیت supine با بیهوشی عمومی خوابید. با میکروسکوپ، مجرای گوش راست از جرم پاک شد؛ پرده غیرطبیعی بود و چرک پشتش. myringotomy انجام و چرک مکیده شد و لوله گذاشته شد. سمت چپ هم همین کار انجام شد و مایع آبکی دیده شد.',
      chart: [['Pre-op Dx', 'otitis media'], ['Post-op Dx', 'recurrent otitis media'], ['Procedure', 'bilateral myringotomy with tube insertion'], ['Findings', 'R: pus; L: watery fluid']],
      fig: { a: 'myringotomy-art', l: [] },
      steps: [
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['recurrent', 'عودکننده'], ['bilateral', 'دوطرفه'], ['supine', 'به پشت خوابیده'], ['external auditory meatus', 'مجرای شنوایی خارجی']], 'Operative Report.'),
        M('عمل', 'myringotomy یعنی…', ['برش پرده گوش', 'ترمیم پرده گوش', 'برداشتن رکابی', 'برداشتن ماستوئید'], 'myring/o + -tomy.'),
        M('لوله', 'لوله گذاشته‌شده چه کاری می‌کند؟', ['تخلیه مایع و برابر کردن فشار گوش میانی', 'تقویت صدا', 'تحریک عصب', 'شست‌وشوی جرم'], 'PE tube.', null, { a: ['pe-tube'], l: [] }),
        T('مایع', 'در گوش چپ مایع آبکی (serous) و در گوش راست چرک بود.', true, 'یافته‌ها.'),
        O('گام‌ها', 'گام‌های عمل را بچین', ['general anesthesia', 'clean cerumen', 'myringotomy', 'suction fluid', 'insert tube'], 'روند عمل.'),
        S('املا', 'املای «برش پرده گوش» را بنویس', 'myringotomy', 'myring/o + -tomy.', 'myringo…')
      ]
    },
    {
      id: 'r18', w: 'tx', title: 'چشم‌بند و عینک', who: 'Kelly، دختر ۷ ساله',
      brief: 'در ادامه Case Study آمده است: برای Kelly که amblyopia و hyperopia خفیف دارد، چشم‌پزشک چشم‌بند روی چشم راست (چشم قوی) و عینک تجویز کرد. Kelly روزی ۴ تا ۵ ساعت چشم‌بند زد و عینکی که optician ساخته بود به او کمک کرد بخواند. یک ماه بعد دیدش بهتر شده بود.',
      chart: [['Dx', 'strabismic amblyopia OS; mild hyperopia'], ['Rx', 'patch over OD, glasses'], ['Follow-up', '1 month: improved vision']],
      fig: { a: 'strabismus-art', l: [] },
      steps: [
        M('درمان', 'چرا چشم‌بند روی چشم راست (قوی) گذاشتند؟', ['تا چشم ضعیف مجبور به کار شود', 'تا چشم راست استراحت کند چون بیمار است', 'برای عفونت', 'برای کاهش فشار چشم'], 'eye patching.'),
        M('عینک', 'عینک Kelly را چه کسی ساخت؟', ['optician', 'ophthalmologist', 'audiologist', 'pediatrician'], 'عینک‌ساز.'),
        M('اختصار', 'چشم چپ Kelly را چه می‌نویسند؟', ['OS', 'OD', 'OU', 'AS'], 'oculus sinister.'),
        T('دوربینی', 'hyperopia یعنی دید نزدیک تار است.', true, 'کانون پشت شبکیه.', { a: ['refraction-errors'], l: [] }),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['amblyopia', 'تنبلی چشم'], ['hyperopia', 'دوربینی'], ['eye patching', 'چشم‌بند درمانی'], ['optician', 'عینک‌ساز']], 'Case Study.'),
        S('املا', 'املای «دوربینی» را بنویس', 'hyperopia', 'hyper- + -opia.', 'hyper…')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* حِسّا — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', 'حواس ویژه اندام اختصاصی در سر دارند؛ چشم و گوش بیشترین واژه‌های پزشکی را دارند.'],
    ['Lx', 'ophthalm/o و ocul/o هر دو یعنی چشم؛ ot/o، aur/o و auricul/o هر دو یعنی گوش.'],
    ['Lx', '‎-opia‎ و ‎-opsia‎ یعنی بینایی؛ ‎-cusis‎ یعنی شنوایی.'],
    ['Lx', 'ot/o گوش است و or/o دهان؛ otitis با oral فرق دارد.'],
    ['Lx', 'malleus استخوانچه گوش است و malleolus قوزک پا.'],
    ['Lx', 'OD چشم راست، OS چشم چپ و OU هر دو چشم؛ AD، AS و AU همین‌ها برای گوش‌اند.'],
    ['Lx', 'myring/o و tympan/o هر دو یعنی پرده گوش: myringotomy و tympanoplasty.'],
    ['Ey', 'لایه‌های کره چشم از بیرون به درون: صلبیه، مشیمیه و شبکیه.'],
    ['Ey', 'مخروط‌ها (cones) رنگ را می‌بینند و استوانه‌ها (rods) نور کم را.'],
    ['Ey', 'صفحه بینایی (optic disc) گیرنده ندارد؛ برای همین نقطه کور است.'],
    ['Ey', 'miosis تنگی مردمک است و mydriasis گشادی آن.'],
    ['Ey', 'اشک از غده اشکی می‌آید و از مجرای اشکی-بینی به بینی می‌رود.'],
    ['Ey', 'شش عضله خارج‌چشمی داریم: چهار راست و دو مایل.'],
    ['Vd', 'در نزدیک‌بینی تصویر جلوی شبکیه و در دوربینی پشت شبکیه می‌افتد.'],
    ['Vd', 'آب مروارید کدری عدسی است و آب سیاه (گلوکوم) فشار بالای چشم.'],
    ['Vd', 'گلوکوم اول دید محیطی را می‌گیرد و دژنراسیون ماکولا دید مرکزی را.'],
    ['Vd', 'esotropia انحراف چشم به داخل است و exotropia به خارج.'],
    ['Vd', 'hordeolum (گل‌مژه) دردناک است و chalazion بی‌درد.'],
    ['Vd', 'جرقه نور، مگس‌پران و پرده روی دید: شاید جداشدگی شبکیه باشد؛ اورژانس است.'],
    ['Er', 'ترتیب استخوانچه‌ها از بیرون به درون: Malleus، Incus، Stapes.'],
    ['Er', 'شیپور استاش گوش میانی را به حلق وصل می‌کند و فشار را برابر می‌کند.'],
    ['Er', 'حلزون برای شنیدن است؛ دهلیز و مجاری نیم‌دایره برای تعادل.'],
    ['Er', 'دسی‌بل بلندی صداست و هرتز زیر و بمی آن.'],
    ['Hd', 'otitis externa گوش بیرونی، otitis media گوش میانی و otitis interna گوش درونی است.'],
    ['Hd', 'کم‌شنوایی انتقالی در گوش بیرونی یا میانی است؛ حسی-عصبی در حلزون یا عصب.'],
    ['Hd', 'سه‌گانه بیماری منیر: سرگیجه، وزوز و کم‌شنوایی.'],
    ['Hd', 'presbycusis پیرگوشی است و presbyopia پیرچشمی؛ presby/o یعنی پیری.'],
    ['Tx', 'در کسر اسنلن 20/40، عدد پایین بزرگ‌تر یعنی دید ضعیف‌تر.'],
    ['Tx', 'tonometry فشار چشم را می‌سنجد و audiometry شنوایی را.'],
    ['Tx', 'IOP فشار داخل چشم است و IOL لنز داخل چشمی.'],
    ['Tx', 'در رینه طبیعی هدایت هوایی بهتر از استخوانی است: AC > BC.'],
    ['Tx', 'myringotomy برش پرده گوش است؛ اغلب همراه با لوله PE.']
  ];
  const COLORS = { Lx: '#1E88A8', Ey: '#3B6FD4', Vd: '#8E6BD8', Er: '#E8913A', Hd: '#D9534F', Tx: '#17A398', '': '#1E88A8' };
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
