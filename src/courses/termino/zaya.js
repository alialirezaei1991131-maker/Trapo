/* تراپو • ترمینو — حیطه «zaya» (Reproductive System, Pregnancy and Childbirth)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_zaya;
  D.css = ".edd{display: flex; flex-wrap: wrap; gap: 10px; margin: 10px 0;}\n.edd__in{display: flex; flex-direction: column; gap: 6px; flex: 1 1 150px; min-width: 0; font-weight: 800; color: var(--muted);}\n.edd__in input{width: 100%; min-width: 0; font: inherit; font-size: 18px; font-weight: 900; color: var(--text); background: var(--bg); border: 2px solid var(--line); border-radius: 14px; padding: 8px 12px; text-align: left; direction: ltr; font-family: Nunito, system-ui, sans-serif;}\n.edd__in input:focus{outline: none; border-color: var(--brand);}\n.edd__out{display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; margin: 8px 0 12px;}\n.edd__c{padding: 10px 12px; border-radius: 16px; background: color-mix(in srgb, var(--brand) 10%, var(--bg)); border: 2px solid color-mix(in srgb, var(--brand) 35%, var(--line)); min-width: 0;}\n.edd__c b{display: block; font-size: 20px; color: var(--brand-t); overflow-wrap: anywhere;}\n.edd__c small{display: block; color: var(--muted); font-weight: 700; overflow-wrap: anywhere;}\n.edd__c span{display: block; font-weight: 800; margin-bottom: 2px;}\n.edd__note{color: var(--muted); font-weight: 700; margin: 0 0 10px;}\n.edd__h{margin: 16px 0 4px; font-size: 16px;}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* زایا — پیکربندی اپ: هر متن، نام، کلید ذخیره‌سازی، شخصیت و ابزار ویژه‌ای که موتور مشترک (engine/) از اپ می‌خواهد.
 * این فایل پیش از همه ماژول‌ها بارگذاری می‌شود؛ تابع‌ها بعداً و هنگام اجرا صدا زده می‌شوند. */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.APP = {
    name: 'زایا', key: 'zaya', title: 'زایا • ترمینولوژی دستگاه تولیدمثل، بارداری و زایمان', certCode: 'ZY',
    subject: 'ترمینولوژی پزشکی دستگاه تولیدمثل زنانه و مردانه، بارداری و زایمان',
    kicker: '🌸 ترمینولوژی پزشکی: تولیدمثل، بارداری و زایمان',
    hello: 'سلام، من <b>زایا</b> هستم؛ یک سلول تخمک خندان که هر زندگی تازه از آن شروع می‌شود!',
    disclaimer: 'زایا یک ابزار آموزشی است و جایگزین معاینه، قضاوت بالینی یا دستور پزشک نیست.',
    eyes: 'ده‌ها شکل دوزبانه و تصویر آموزشی؛ از تخمدان، رحم و بیضه تا چرخه قاعدگی، لقاح، جفت، مراحل زایمان، سونوگرافی و ماموگرافی.',
    outcomes: [
      'هر واژه تولیدمثلی را به پیشوند، ریشه و پسوند بشکنی و معنی‌اش را بگویی',
      'تخمدان، لوله‌ها، رحم، دهانه رحم، واژن و پستان را روی شکل نشان دهی و چرخه قاعدگی را توضیح دهی',
      'بیضه، اپیدیدیم، مجرای دفران، پروستات و مسیر اسپرم را بشناسی',
      'لقاح، رویان و جنین، جفت، G و P و مراحل زایمان را با واژه درست بنویسی',
      'بیماری‌های زنانه و مردانه، عوارض بارداری و عفونت‌های آمیزشی را از هم جدا کنی',
      'پاپ‌اسمیر، ماموگرافی، آمنیوسنتز، جراحی‌ها، روش‌های پیشگیری و اختصارهای پرونده را بخوانی'
    ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، یادداشت زنان و زایمان را مثل یک داستان آشنا می‌خوانی.',
    obHello: 'سلام! من زایا هستم؛ یک سلول تخمک خندان 🌸 اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان زایش» بهترین شروع است؛ ریشه‌های پایه و بخش‌های دستگاه آن‌جا یاد داده می‌شوند!',
    demo: () => ({
      q: 'واژه <b dir="ltr">hysterectomy</b> یعنی…',
      fig: { a: ['female-front'], l: ['دستگاه تناسلی زنانه'] },
      opts: ['برداشتن رحم', 'برش رحم', 'التهاب رحم', 'مشاهده رحم'],
      why: `${EA.K.wb('hyster/o', '-ectomy')}<br><b>hyster/o</b> = رحم، <b>-ectomy</b> = برداشتن. پس <b>برداشتن رحم</b>. معنی را از پسوند شروع کن!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ['جوانه تازه', 'تخمک کنجکاو', 'رهنورد لوله رحم', 'رمزگشای ریشه‌ها', 'نگهبان آندومتر', 'استاد چرخه', 'راهنمای اسپرم',
      'دوست جفت', 'شمارنده G و P', 'همراه زایمان', 'کارآگاه STI', 'خواننده سونوگرافی', 'استاد واژه‌سازی', 'افسانه زنان و زایمان', 'اسطوره ترمینولوژی'],
    leagueRoles: ['دانشجوی مامایی', 'دانشجوی پزشکی', 'دانشجوی پرستاری', 'ماما', 'پرستار زایشگاه', 'کارشناس اتاق عمل', 'رزیدنت زنان', 'دانشجوی بهداشت باروری', 'کارشناس آزمایشگاه', 'کارشناس سونوگرافی', 'پرستار NICU', 'رزیدنت اورولوژی', 'کارشناس هوشبری'],
    firstBadge: ['🌸', 'اولین جوانه'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], fm: ['🌷', 'نگهبان چرخه'], ml: ['🔷', 'راهنمای اسپرم'], pg: ['🤰', 'همراه زایمان'], ds: ['🩺', 'کارآگاه بیماری'], tx: ['🧪', 'استاد آزمون‌ها'] },
    confetti: ['#B8457A', '#F6B3C6', '#FFC800', '#2E86C1', '#E8913A', '#17A398', '#8E6BD8', '#58CC02'],
    /* ابزارها */
    parseDefault: 'salpingo-oophorectomy',
    parseSamples: ['salpingo-oophorectomy', 'dysmenorrhea', 'cryptorchidism', 'amniocentesis', 'colporrhaphy', 'oligospermia', 'primigravida', 'galactorrhea'],
    ph: { dict: 'جست‌وجو: hyster، رحم، cervix…', roots: 'جست‌وجو: metr، تخمدان، ‎-rrhea‎…', abbr: 'جست‌وجو: LMP، پروستات، PID…' },
    toolsDisclaimer: '⚕️ زایا ابزار آموزشی است؛ واژه‌نامه و ماشین‌حساب بارداری جای معاینه، سونوگرافی و قضاوت پزشک را نمی‌گیرند.',
    /* شخصیت: سلول تخمک با تاج سلول‌های فولیکولی (corona radiata) — بدنه؛ چشم و دهان را موتور می‌کشد، مرکز چهره cx,cy */
    mascot: (cx, cy) => `
        ${Array.from({ length: 13 }, (_, i) => { const a = i / 14 * Math.PI * 2; return `<circle cx="${(cx + Math.cos(a) * 48).toFixed(1)}" cy="${(cy + 4 + Math.sin(a) * 48).toFixed(1)}" r="8" fill="#FDE3C8" stroke="#E8B48A" stroke-width="1.4"/>`; }).join('')}
        <circle cx="${cx}" cy="${cy + 4}" r="41" fill="#FFFFFF" opacity=".9"/>
        <circle cx="${cx}" cy="${cy + 4}" r="37" fill="#FBD0DD" stroke="var(--c)" stroke-width="2.4"/>
        <path d="M${cx - 30} ${cy - 18} C${cx - 24} ${cy - 30} ${cx - 12} ${cy - 34} ${cx - 2} ${cy - 34}" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".6"/>
        <path class="negar-spark" d="M14 26 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
`
  };

  /* ---------- ابزار ویژه: ماشین‌حساب بارداری (قاعده نگله) ----------
   * تاریخ زایمان = LMP + ۲۸۰ روز (همان «منهای ۳ ماه، به‌علاوه ۷ روز، به‌علاوه یک سال»).
   * سن بارداری = فاصله تاریخ مراجعه تا LMP؛ سه‌ماهه: زیر ۱۴ هفته اول، ۱۴ تا ۲۷ دوم، از ۲۸ به بعد سوم. اعداد آموزشی‌اند. */
  const pad = n => String(n).padStart(2, '0');
  const iso = d => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
  const todayIso = () => { const n = new Date(); return `${n.getFullYear()}-${pad(n.getMonth() + 1)}-${pad(n.getDate())}`; };
  const st = { lmp: '', visit: '', g: '', p: '' };
  const fa = n => EA.fa(n);
  const parse = s => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || '').trim()); return m ? new Date(Date.UTC(+m[1], +m[2] - 1, +m[3])) : null; };
  const DAY = 864e5;
  const ga = () => { const a = parse(st.lmp), b = parse(st.visit || todayIso()); return a && b ? Math.round((b - a) / DAY) : NaN; };
  const shamsi = d => { try { return d.toLocaleDateString('fa-IR-u-ca-persian', { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' }); } catch (e) { return ''; } };
  function out() {
    const a = parse(st.lmp);
    if (!a) return '<p class="edd__note">تاریخ اولین روز آخرین قاعدگی (LMP) را انتخاب کن.</p>';
    const edd = new Date(a.getTime() + 280 * DAY), d = ga();
    const cell = (t, b, s) => `<div class="edd__c"><span>${t}</span><b>${b}</b>${s ? `<small>${s}</small>` : ''}</div>`;
    let gaCell = cell('سن بارداری', '—', 'تاریخ مراجعه پیش از LMP است.');
    let triCell = '';
    if (isFinite(d) && d >= 0) {
      const w = Math.floor(d / 7), r = d % 7;
      gaCell = cell('سن بارداری', `${fa(w)} هفته و ${fa(r)} روز`, `<bdi dir="ltr">GA ${w}+${r}</bdi>`);
      const tri = w < 14 ? ['سه‌ماهه اول', 'شکل‌گیری اندام‌ها؛ رویان تا هفته ۸'] : w < 28 ? ['سه‌ماهه دوم', 'حرکت جنین حس می‌شود'] : w <= 42 ? ['سه‌ماهه سوم', w >= 37 ? 'ترم: زایمان در این بازه طبیعی است' : 'رشد و آماده شدن ریه‌ها'] : ['پس از موعد', 'بیش از ۴۲ هفته؛ ارزیابی لازم است'];
      triCell = cell('دوره', tri[0], tri[1]);
    }
    return `<div class="edd__out">${cell('تاریخ تخمینی زایمان (EDD)', `<bdi dir="ltr">${iso(edd)}</bdi>`, shamsi(edd))}${gaCell}${triCell}</div>`;
  }
  function gpOut() {
    const g = parseInt(st.g, 10), p = parseInt(st.p, 10);
    if (!(g >= 0) || !(p >= 0)) return '<p class="edd__note">مثلاً پرونده Abigail: gravida 2، para 1.</p>';
    if (p > g) return '<p class="edd__note">P نمی‌تواند از G بیشتر باشد.</p>';
    const name = g === 0 ? 'nulligravida' : g === 1 ? 'primigravida' : 'multigravida';
    const pn = p === 0 ? 'nullipara' : p === 1 ? 'primipara' : 'multipara';
    return `<p class="edd__note"><bdi dir="ltr">G${g} P${p}</bdi>: ${fa(g)} بار باردار شده و ${fa(p)} زایمان با نوزاد زنده‌ماندنی داشته است؛ یعنی <bdi dir="ltr">${name}</bdi> و <bdi dir="ltr">${pn}</bdi>.</p>`;
  }
  const field = (key, label, type, ph) => `<label class="edd__in"><span>${label}</span><input type="${type}" data-keep="${key}" data-edd="${key}" value="${EA.ui.esc(st[key] || (key === 'visit' ? todayIso() : ''))}" ${ph ? `placeholder="${ph}"` : ''} ${type === 'number' ? 'inputmode="numeric" min="0" max="20"' : ''} autocomplete="off"></label>`;
  EA.APP.extraTool = {
    id: 'edd', sym: 'EDD', name: 'ماشین‌حساب بارداری', color: '#B8457A',
    /* برای آزمون: سن بارداری به هفته (کامل) */
    value: () => { const d = ga(); return isFinite(d) && d >= 0 ? Math.floor(d / 7) : 0; },
    pane: () => `<div class="tpane"><p class="muted">با قاعده نگله: تاریخ زایمان = اولین روز آخرین قاعدگی + ۲۸۰ روز (۴۰ هفته).</p>
    <div class="edd">${field('lmp', 'اولین روز آخرین قاعدگی (LMP)', 'date')}${field('visit', 'تاریخ مراجعه', 'date')}</div>
    <div class="edd__res" aria-live="polite">${out()}</div>
    ${EA.ui.figCard({ a: ['trimesters'], l: ['سه‌ماهه‌های بارداری'] })}
    <h4 class="edd__h">G و P در پرونده</h4>
    <div class="edd">${field('g', 'gravida (تعداد بارداری)', 'number', '2')}${field('p', 'para (تعداد زایمان)', 'number', '1')}</div>
    <div class="edd__gp" aria-live="polite">${gpOut()}</div>
    <table class="mini"><tr><th>قاعده</th><th>مثال</th></tr>
      <tr><td>LMP منهای ۳ ماه، به‌علاوه ۷ روز</td><td><bdi dir="ltr">LMP 2026-01-10 → EDD 2026-10-17</bdi></td></tr>
      <tr><td>ترم (term)</td><td>۳۷ تا ۴۲ هفته</td></tr>
      <tr><td>نارس (preterm)</td><td>پیش از ۳۷ هفته</td></tr></table>
    <p class="muted">تاریخ زایمان تخمینی است؛ فقط حدود ۵٪ نوزادان دقیقاً در همان روز به دنیا می‌آیند. سونوگرافی اول بارداری دقیق‌تر است.</p></div>`,
    input: (e, el) => {
      const k = e.target.dataset && e.target.dataset.edd;
      if (!k) return false;
      st[k] = e.target.value;
      const set = (s, h) => { const o = el.querySelector(s); if (o) o.innerHTML = h; };
      set('.edd__res', out()); set('.edd__gp', gpOut());
      return false;
    },
    /* آزمون دود: از ۱ ژانویه تا ۱۲ مارس ۲۰۲۶ = ۷۰ روز = ۱۰ هفته */
    test: { fill: [['[data-edd="lmp"]', '2026-01-01'], ['[data-edd="visit"]', '2026-03-12'], ['[data-edd="g"]', '2'], ['[data-edd="p"]', '1']], expect: 10 }
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
/* زایا — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از apps/zaya/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["abruptio placentae", "ab-RUP-shee-oh plah-SEN-tee", "Premature separation of the placenta from the uterine wall; an emergency.", "جدا شدن زودرس جفت", "ds", "dz", []],
["adnexa", "ad-NEK-sah", "Accessory structures of the uterus: the ovaries and uterine tubes.", "ضمائم رحم", "fm", "body", []],
["afterbirth", "AF-ter-berth", "The placenta and membranes expelled after the baby is born.", "جفت و پرده‌ها پس از زایمان", "pg", "phys", []],
["amenorrhea", "ah-men-oh-REE-ah", "Absence of menstrual periods (a- = without, men/o = menses, -rrhea = flow).", "نبود قاعدگی", "ds", "sx", []],
["amniocentesis", "am-nee-oh-sen-TEE-sis", "Needle removal of amniotic fluid for genetic testing (-centesis = puncture).", "آمنیوسنتز", "tx", "lab", []],
["amnion", "AM-nee-on", "Innermost membrane around the fetus; amniotic sac (amni/o).", "آمنیون (کیسه آب)", "pg", "body", []],
["amniotic fluid", "am-nee-OT-ik FLOO-id", "Fluid inside the amnion that cushions and protects the fetus.", "مایع آمنیوتیک", "pg", "body", ["BOW"]],
["androgen", "AN-droh-jen", "Any male sex hormone, such as testosterone (andr/o = male).", "آندروژن (هورمون مردانه)", "lx", "phys", []],
["andrology", "an-DROL-oh-jee", "Study of the male reproductive system and male health (andr/o = male).", "آندرولوژی (مردان)", "lx", "field", []],
["anorchism", "an-OR-kizm", "Absence of one or both testes at birth.", "نبود بیضه", "ml", "sx", []],
["anovulation", "an-ov-yoo-LAY-shun", "Absence of ovulation.", "تخمک‌گذاری نکردن", "ds", "sx", []],
["antepartum", "an-tee-PAR-tum", "Before childbirth (ante- = before, -partum = birth).", "پیش از زایمان", "pg", "phys", []],
["Apgar score", "AP-gar skor", "Rating of a newborn at 1 and 5 minutes for heart rate, breathing, muscle tone, reflexes and color (0 to 10).", "نمره آپگار", "pg", "lab", []],
["areola", "ah-REE-oh-lah", "Dark circular area around the nipple.", "هاله پستان", "fm", "body", []],
["artificial insemination", "ar-tih-FISH-al in-sem-ih-NAY-shun", "Placing sperm into the uterus or vagina with a syringe or catheter.", "تلقیح مصنوعی", "tx", "tx", ["AI"]],
["aspermia", "ay-SPER-mee-ah", "Lack of semen formation or ejaculation.", "نبود منی", "ds", "sx", []],
["azoospermia", "ay-zoh-oh-SPER-mee-ah", "Absence of sperm in the semen.", "نبود اسپرم", "ds", "sx", []],
["balanitis", "bal-ah-NYE-tis", "Inflammation of the glans penis (balan/o).", "التهاب حشفه", "ds", "dz", []],
["Bartholin glands", "BAR-toh-lin glandz", "Two small glands beside the vaginal opening that secrete lubricating mucus.", "غدد بارتولن", "fm", "body", []],
["benign prostatic hyperplasia", "beh-NYNE pros-TAT-ik hye-per-PLAY-zee-ah", "Noncancerous enlargement of the prostate that narrows the urethra.", "بزرگی خوش‌خیم پروستات", "ds", "dz", ["BPH"]],
["brachytherapy", "brak-ee-THAIR-ah-pee", "Radiation from seeds placed inside or next to a tumor, such as in the prostate.", "پرتودرمانی داخلی", "tx", "tx", []],
["breast cancer", "brest KAN-ser", "Malignant tumor of the breast tissue; often found by mammography or breast self-examination.", "سرطان پستان", "ds", "dz", ["BSE"]],
["breast self-examination", "brest self eg-zam-ih-NAY-shun", "Monthly self-check of the breasts for lumps.", "خودآزمایی پستان", "tx", "lab", ["BSE"]],
["breech presentation", "breech prez-en-TAY-shun", "Fetus positioned to be born buttocks or feet first.", "نمایش بریچ (باسن‌جلو)", "pg", "sx", []],
["bulbourethral glands", "bul-boh-yoo-REE-thral glandz", "Two small glands below the prostate that secrete mucus; Cowper glands.", "غدد بولبویورترال (کوپر)", "ml", "body", []],
["candidiasis", "kan-dih-DYE-ah-sis", "Yeast infection of the vagina with curdy discharge and itching.", "عفونت قارچی (کاندیدیازیس)", "ds", "inf", []],
["cephalopelvic disproportion", "sef-ah-loh-PEL-vik dis-proh-POR-shun", "Fetal head too large to pass through the mother's pelvis.", "عدم تناسب سر جنین و لگن", "ds", "dz", ["CPD"]],
["cervical cancer", "SER-vih-kal KAN-ser", "Malignant tumor of the cervix, usually linked to HPV infection.", "سرطان دهانه رحم", "ds", "dz", []],
["cervical dysplasia", "SER-vih-kal dis-PLAY-zee-ah", "Abnormal precancerous cells on the cervix found on a Pap test.", "دیسپلازی دهانه رحم", "ds", "dz", ["CIN"]],
["cervicitis", "ser-vih-SYE-tis", "Inflammation of the cervix.", "التهاب دهانه رحم", "ds", "dz", []],
["cervix", "SER-viks", "Lower narrow neck of the uterus that opens into the vagina (cervic/o = cervix).", "دهانه رحم (سرویکس)", "fm", "body", ["Cx"]],
["cesarean section", "seh-ZAIR-ee-an SEK-shun", "Delivery of the baby through incisions in the abdomen and uterus.", "سزارین", "tx", "tx", ["CS", "C-section"]],
["chancre", "SHANG-ker", "Painless sore at the site of entry of syphilis.", "شانکر", "ds", "sx", []],
["chancroid", "SHANG-kroyd", "Bacterial STI with painful genital ulcers.", "شانکروئید", "ds", "inf", []],
["chlamydia", "klah-MID-ee-ah", "Common bacterial STI that may cause PID and infertility.", "کلامیدیا", "ds", "inf", []],
["chorion", "KOR-ee-on", "Outermost membrane around the fetus that helps form the placenta (chori/o).", "کوریون", "pg", "body", []],
["chorionic villus sampling", "kor-ee-ON-ik VIL-us SAM-pling", "Taking a small sample of chorionic villi for genetic testing; done earlier than amniocentesis.", "نمونه‌برداری از پرزهای جفتی", "tx", "lab", ["CVS"]],
["chromosome", "KROH-moh-sohm", "Thread of DNA that carries the genes; humans have 46 chromosomes (23 pairs).", "کروموزوم", "pg", "phys", []],
["circumcision", "ser-kum-SIZH-un", "Surgical removal of the foreskin.", "ختنه", "tx", "tx", []],
["clitoris", "KLIT-oh-ris", "Small sensitive erectile organ at the front of the vulva.", "کلیتوریس", "fm", "body", []],
["colostrum", "koh-LOS-trum", "Thin yellow first milk rich in antibodies, made in the first days after birth.", "آغوز", "pg", "phys", []],
["colporrhaphy", "kol-POR-ah-fee", "Suture of the vagina to repair a cystocele or rectocele.", "ترمیم واژن (کولپورافی)", "tx", "tx", []],
["colposcopy", "kol-POS-koh-pee", "Examination of the vagina and cervix with a magnifying scope (colp/o = vagina).", "کولپوسکوپی", "tx", "lab", []],
["condom", "KON-dom", "Sheath that blocks sperm and helps prevent STIs.", "کاندوم", "tx", "tx", []],
["conization", "kon-ih-ZAY-shun", "Removal of a cone of tissue from the cervix; cone biopsy.", "مخروط‌برداری دهانه رحم", "tx", "tx", []],
["contraception", "kon-trah-SEP-shun", "Prevention of pregnancy.", "پیشگیری از بارداری", "tx", "tx", []],
["corpora cavernosa", "KOR-por-ah kav-er-NOH-sah", "Two columns of erectile tissue in the penis that fill with blood during erection.", "اجسام غاری", "ml", "body", []],
["corpus luteum", "KOR-pus LOO-tee-um", "Yellow body that forms from the ruptured follicle after ovulation and makes progesterone.", "جسم زرد", "fm", "body", []],
["crowning", "KROW-ning", "Appearance of the baby's head at the vaginal opening.", "دیده شدن سر نوزاد", "pg", "phys", []],
["cryptorchidism", "kript-OR-kih-dizm", "Failure of a testis to descend into the scrotum (crypt/o = hidden).", "بیضه نزول‌نکرده", "ds", "dz", []],
["culdocentesis", "kul-doh-sen-TEE-sis", "Needle aspiration of fluid from the rectouterine pouch (culd/o).", "کولدوسنتز", "tx", "lab", []],
["cystocele", "SIS-toh-seel", "Protrusion of the bladder into the vaginal wall (cyst/o = bladder, -cele = hernia).", "سیستوسل (افتادگی مثانه)", "ds", "dz", []],
["diaphragm", "DYE-ah-fram", "Dome-shaped cap placed over the cervix to block sperm.", "دیافراگم ضدبارداری", "tx", "tx", []],
["digital rectal examination", "DIJ-ih-tal REK-tal eg-zam-ih-NAY-shun", "Feeling the prostate with a gloved finger through the rectum.", "معاینه انگشتی رکتوم", "tx", "lab", ["DRE"]],
["dilation", "dye-LAY-shun", "Widening of the cervix to 10 cm during the first stage of labor.", "باز شدن دهانه رحم (دیلاتاسیون)", "pg", "phys", []],
["dilation and curettage", "dye-LAY-shun and kyoo-reh-TAHZH", "Widening the cervix and scraping the uterine lining with a curette.", "دیلاتاسیون و کورتاژ", "tx", "tx", ["D&C"]],
["doula", "DOO-lah", "Trained helper who supports a woman during labor and after birth.", "دولا (همراه زایمان)", "pg", "field", []],
["Down syndrome", "down SIN-drohm", "Genetic disorder from an extra chromosome 21 (trisomy 21), with intellectual disability and typical features.", "سندروم داون", "ds", "dz", []],
["dysmenorrhea", "dis-men-oh-REE-ah", "Painful menstruation.", "قاعدگی دردناک", "ds", "sx", []],
["dyspareunia", "dis-pah-ROO-nee-ah", "Painful sexual intercourse (pareun/o = intercourse).", "مقاربت دردناک", "ds", "sx", []],
["dystocia", "dis-TOH-see-ah", "Difficult or prolonged labor (-tocia = labor).", "زایمان دشوار", "ds", "sx", []],
["eclampsia", "ee-KLAMP-see-ah", "Seizures in a woman with preeclampsia; a medical emergency.", "اکلامپسی (تشنج بارداری)", "ds", "dz", []],
["ectopic pregnancy", "ek-TOP-ik PREG-nan-see", "Implantation of the fertilized ovum outside the uterus, usually in the tube (ec- = out, top/o = place).", "حاملگی خارج رحمی", "ds", "dz", []],
["effacement", "eh-FAYS-ment", "Thinning and shortening of the cervix during labor.", "نازک شدن دهانه رحم", "pg", "phys", []],
["ejaculation", "ee-jak-yoo-LAY-shun", "Ejection of semen from the urethra.", "انزال", "ml", "phys", []],
["ejaculatory duct", "ee-JAK-yoo-lah-tor-ee dukt", "Short duct formed by the vas deferens and seminal vesicle that opens into the urethra.", "مجرای انزالی", "ml", "body", []],
["embryo", "EM-bree-oh", "Developing baby from implantation through the eighth week (embry/o).", "رویان (جنین اولیه)", "pg", "phys", []],
["embryonic", "em-bree-ON-ik", "Pertaining to the embryo.", "رویانی", "pg", "phys", []],
["endometrial cancer", "en-doh-MEE-tree-al KAN-ser", "Malignant tumor of the uterine lining; often causes postmenopausal bleeding.", "سرطان آندومتر", "ds", "dz", []],
["endometriosis", "en-doh-mee-tree-OH-sis", "Endometrial tissue growing outside the uterus, causing pain and infertility.", "آندومتریوز", "ds", "dz", []],
["endometrium", "en-doh-MEE-tree-um", "Inner lining of the uterus that thickens each month and is shed in menstruation.", "آندومتر (پوشش درونی رحم)", "fm", "body", []],
["epididymis", "ep-ih-DID-ih-mis", "Coiled tube on the back of each testis where sperm mature and are stored (epididym/o).", "اپیدیدیم (بربیضه)", "ml", "body", []],
["epididymitis", "ep-ih-did-ih-MYE-tis", "Inflammation of the epididymis.", "التهاب اپیدیدیم", "ds", "dz", []],
["episiotomy", "eh-piz-ee-OT-oh-mee", "Incision of the perineum to widen the vaginal opening during birth (episi/o = vulva).", "اپی‌زیوتومی", "tx", "tx", []],
["epispadias", "ep-ih-SPAY-dee-as", "Birth defect in which the urethra opens on the upper side of the penis.", "اپی‌اسپادیاس", "ds", "dz", []],
["erectile dysfunction", "ee-REK-tile dis-FUNK-shun", "Inability to achieve or keep an erection; impotence.", "اختلال نعوظ", "ds", "dz", ["ED"]],
["erection", "ee-REK-shun", "Stiffening of the penis as erectile tissue fills with blood.", "نعوظ", "ml", "phys", []],
["estimated date of delivery", "ES-tih-may-ted dayt ov deh-LIV-er-ee", "Due date: about 280 days (40 weeks) after the first day of the last menstrual period.", "تاریخ تخمینی زایمان", "pg", "lab", ["EDD", "EDC"]],
["estrogen", "ES-troh-jen", "Main female sex hormone made by the ovaries; develops female characteristics and the endometrium (estr/o = female).", "استروژن", "lx", "phys", []],
["fertilization", "fer-tih-lih-ZAY-shun", "Union of a sperm and an ovum, usually in the uterine tube; conception.", "لقاح", "lx", "phys", []],
["fetal", "FEE-tal", "Pertaining to the fetus.", "جنینی", "pg", "phys", []],
["fetal heart rate", "FEE-tal hart rayt", "Heartbeat of the fetus, normally 110 to 160 beats per minute.", "ضربان قلب جنین", "pg", "lab", ["FHR", "FHT"]],
["fetus", "FEE-tus", "Developing baby from the ninth week until birth (fet/o).", "جنین", "pg", "phys", []],
["fibrocystic breast disease", "fye-broh-SIS-tik brest dih-ZEEZ", "Benign lumps and cysts in the breast that change with the cycle.", "بیماری فیبروکیستیک پستان", "ds", "dz", []],
["fimbriae", "FIM-bree-ee", "Finger-like ends of the uterine tube that sweep the ovum into the tube.", "فیمبریا (زوائد انگشتی لوله)", "fm", "body", []],
["follicle-stimulating hormone", "FOL-ih-kul STIM-yoo-lay-ting HOR-mohn", "Pituitary hormone that stimulates growth of ovarian follicles and sperm production.", "هورمون محرک فولیکول", "lx", "phys", ["FSH"]],
["fundus", "FUN-dus", "Upper rounded part of the uterus above the tubes.", "فوندوس (سقف رحم)", "fm", "body", []],
["galactorrhea", "gah-lak-toh-REE-ah", "Milk discharge from the breast not related to nursing (galact/o = milk).", "ترشح شیر غیرطبیعی", "ds", "sx", []],
["gamete", "GAM-eet", "A mature sex cell: ovum (egg) or spermatozoon (sperm); each has 23 chromosomes.", "یاخته جنسی (گامت)", "lx", "phys", []],
["genital", "JEN-ih-tal", "Pertaining to the reproductive organs.", "تناسلی", "lx", "body", []],
["genital herpes", "JEN-ih-tal HER-peez", "Viral STI with painful blisters on the genitals; caused by herpes simplex virus.", "تبخال تناسلی", "ds", "inf", ["HSV"]],
["genital warts", "JEN-ih-tal worts", "Growths on the genitals caused by human papillomavirus; condylomata.", "زگیل تناسلی", "ds", "inf", ["HPV"]],
["genitalia", "jen-ih-TAY-lee-ah", "The reproductive organs, especially the external ones; also called genitals (genit/o = reproduction).", "اندام‌های تناسلی", "lx", "body", []],
["gestation", "jes-TAY-shun", "Period of development from conception to birth, about 40 weeks from the LMP.", "دوره بارداری", "pg", "phys", ["GA"]],
["gestational diabetes", "jes-TAY-shun-al dye-ah-BEE-teez", "High blood sugar that first appears during pregnancy.", "دیابت بارداری", "ds", "dz", []],
["glans penis", "glanz PEE-nis", "Sensitive tip of the penis (balan/o = glans penis).", "حشفه (سر آلت)", "ml", "body", []],
["gonad", "GOH-nad", "A sex gland that makes sex cells and hormones: the ovary in females and the testis in males (gonad/o = sex gland).", "غده جنسی (گناد)", "lx", "body", []],
["gonorrhea", "gon-oh-REE-ah", "Bacterial STI with discharge and painful urination (gon/o = seed).", "سوزاک (گنوره)", "ds", "inf", ["GC"]],
["gravida", "GRAV-ih-dah", "A pregnant woman; G1, G2 shows the number of pregnancies (grav/i = pregnant).", "گراویدا (تعداد بارداری)", "pg", "phys", ["G"]],
["gynecologist", "gye-neh-KOL-oh-jist", "Physician who specializes in the female reproductive system.", "متخصص زنان", "lx", "field", []],
["gynecology", "gye-neh-KOL-oh-jee", "Branch of medicine that treats diseases of the female reproductive system (gynec/o = woman).", "زنان (ژنیکولوژی)", "lx", "field", ["GYN"]],
["gynecomastia", "gye-neh-koh-MAS-tee-ah", "Enlargement of breast tissue in a male (gynec/o = woman, mast/o = breast).", "بزرگ شدن پستان در مردان", "fm", "sx", []],
["herniorrhaphy", "her-nee-OR-ah-fee", "Surgical repair of a hernia (-rrhaphy = suture).", "ترمیم فتق", "tx", "tx", []],
["hormone replacement therapy", "HOR-mohn ree-PLAYS-ment THAIR-ah-pee", "Estrogen with or without progestin to relieve menopausal symptoms.", "هورمون‌درمانی جایگزین", "tx", "tx", ["HRT"]],
["human chorionic gonadotropin", "HYOO-man kor-ee-ON-ik goh-nad-oh-TROH-pin", "Hormone made by the embryo; its presence in urine or blood is the basis of pregnancy tests.", "هورمون HCG (هورمون بارداری)", "pg", "phys", ["hCG"]],
["human immunodeficiency virus", "HYOO-man im-yoo-noh-deh-FISH-en-see VYE-rus", "Virus spread by blood and sexual contact that causes AIDS.", "ویروس نقص ایمنی (HIV)", "ds", "inf", ["HIV", "AIDS"]],
["hydrocele", "HYE-droh-seel", "Collection of fluid around the testis in the scrotum (hydr/o = water).", "هیدروسل (آب‌آوردگی بیضه)", "ds", "dz", []],
["hydrosalpinx", "hye-droh-SAL-pinks", "Collection of fluid in a uterine tube (-salpinx = tube).", "آب‌آوردگی لوله رحم", "ds", "dz", []],
["hymen", "HYE-men", "Thin membrane that partly covers the vaginal opening (hymen/o).", "پرده بکارت", "fm", "body", []],
["hyperemesis gravidarum", "hye-per-EM-eh-sis grav-ih-DAR-um", "Severe, persistent vomiting in pregnancy (-emesis = vomiting).", "استفراغ شدید بارداری", "ds", "dz", []],
["hypospadias", "hye-poh-SPAY-dee-as", "Birth defect in which the urethra opens on the underside of the penis.", "هیپوسپادیاس", "ds", "dz", []],
["hysterectomy", "his-ter-EK-toh-mee", "Surgical removal of the uterus (hyster/o = uterus).", "برداشتن رحم (هیسترکتومی)", "lx", "tx", []],
["hysterosalpingography", "his-ter-oh-sal-ping-OG-rah-fee", "X-ray of the uterus and tubes after injecting contrast.", "هیستروسالپنگوگرافی", "tx", "lab", []],
["hysteroscopy", "his-ter-OS-koh-pee", "Visual examination of the inside of the uterus with a scope.", "هیستروسکوپی", "tx", "lab", []],
["implantation", "im-plan-TAY-shun", "Embedding of the developing zygote in the endometrium.", "لانه‌گزینی", "pg", "phys", []],
["in vitro fertilization", "in VEE-troh fer-tih-lih-ZAY-shun", "Fertilizing ova with sperm in a laboratory dish and transferring the embryo to the uterus.", "لقاح آزمایشگاهی (IVF)", "tx", "tx", ["IVF"]],
["infertility", "in-fer-TIL-ih-tee", "Inability to conceive after a year of regular unprotected intercourse; sterility if permanent.", "ناباروری", "ds", "dz", []],
["inguinal canal", "ING-gwih-nal kah-NAL", "Passage in the groin through which the testis descends and the spermatic cord passes.", "کانال اینگوینال (کشاله ران)", "ml", "body", []],
["inguinal hernia", "ING-gwih-nal HER-nee-ah", "Protrusion of intestine through the inguinal canal into the groin or scrotum.", "فتق اینگوینال", "ds", "dz", []],
["intrauterine", "in-trah-YOO-ter-in", "Within the uterus.", "درون رحم", "pg", "body", []],
["intrauterine device", "in-trah-YOO-ter-in deh-VYSE", "Small device placed in the uterus to prevent pregnancy.", "آی‌یودی (وسیله داخل رحمی)", "tx", "tx", ["IUD"]],
["karyotype", "KAIR-ee-oh-type", "Picture of a person's chromosomes arranged in pairs, used to find abnormalities (kary/o = nucleus).", "کاریوتایپ", "pg", "lab", []],
["labia majora", "LAY-bee-ah mah-JOR-ah", "Two outer folds of skin of the vulva.", "لب‌های بزرگ", "fm", "body", []],
["labia minora", "LAY-bee-ah mih-NOR-ah", "Two smaller inner folds of the vulva.", "لب‌های کوچک", "fm", "body", []],
["labor", "LAY-bor", "Process of birth in three stages: dilation, expulsion and placental stage.", "درد زایمان (لیبر)", "pg", "phys", []],
["lactation", "lak-TAY-shun", "Production and secretion of milk (lact/o, galact/o = milk).", "شیردهی", "pg", "phys", []],
["lactiferous ducts", "lak-TIF-er-us dukts", "Ducts that carry milk to the nipple (lact/o = milk).", "مجاری شیری", "fm", "body", []],
["laparoscopy", "lap-ah-ROS-koh-pee", "Visual examination of the abdomen and pelvis through a small incision (lapar/o = abdomen).", "لاپاراسکوپی", "tx", "lab", []],
["last menstrual period", "last MEN-stroo-al PEER-ee-od", "First day of the last normal menstrual period, used to date a pregnancy.", "اولین روز آخرین قاعدگی", "pg", "lab", ["LMP"]],
["leiomyoma", "lye-oh-mye-OH-mah", "Benign tumor of smooth muscle of the uterus; fibroid.", "فیبروم رحم (لیومیوم)", "ds", "dz", []],
["leukorrhea", "loo-koh-REE-ah", "White or yellowish vaginal discharge (leuk/o = white).", "ترشح سفید واژن", "ds", "sx", []],
["lochia", "LOH-kee-ah", "Vaginal discharge after childbirth.", "ترشحات پس از زایمان (لوشیا)", "pg", "sx", []],
["lumpectomy", "lump-EK-toh-mee", "Removal of a breast tumor with a small margin of normal tissue.", "برداشتن توده پستان", "tx", "tx", []],
["luteinizing hormone", "LOO-tee-ih-nye-zing HOR-mohn", "Pituitary hormone that triggers ovulation and testosterone production.", "هورمون لوتئینی‌کننده", "lx", "phys", ["LH"]],
["mammary gland", "MAM-ah-ree gland", "The breast; gland that produces milk (mamm/o, mast/o = breast).", "غده پستان", "fm", "body", []],
["mammography", "mam-OG-rah-fee", "X-ray of the breast to find tumors (mamm/o = breast).", "ماموگرافی", "tx", "lab", []],
["mammoplasty", "MAM-oh-plas-tee", "Surgical reshaping of the breast (reduction or augmentation).", "جراحی ترمیمی پستان", "tx", "tx", []],
["mastectomy", "mas-TEK-toh-mee", "Surgical removal of a breast.", "برداشتن پستان", "tx", "tx", []],
["mastitis", "mas-TYE-tis", "Inflammation of the breast (mast/o = breast).", "التهاب پستان", "lx", "dz", []],
["mastopexy", "MAS-toh-pek-see", "Surgical lifting and fixation of a sagging breast (-pexy = fixation).", "بالا کشیدن پستان", "tx", "tx", []],
["menarche", "meh-NAR-kee", "First menstrual period at puberty (-arche = beginning).", "اولین قاعدگی", "fm", "phys", []],
["menometrorrhagia", "men-oh-met-roh-RAY-jee-ah", "Heavy bleeding during and between menstrual periods.", "خونریزی شدید حین و بین قاعدگی", "ds", "sx", []],
["menopause", "MEN-oh-pawz", "Permanent end of menstrual periods, usually around age 50.", "یائسگی", "fm", "phys", []],
["menorrhagia", "men-oh-RAY-jee-ah", "Excessive or prolonged menstrual bleeding (-rrhagia = bursting forth).", "خونریزی شدید قاعدگی", "ds", "sx", []],
["menstrual cycle", "MEN-stroo-al SYE-kul", "Monthly cycle of about 28 days: menstrual, proliferative (follicular), ovulation and secretory (luteal) phases.", "چرخه قاعدگی", "fm", "phys", []],
["menstruation", "men-stroo-AY-shun", "Monthly shedding of the uterine lining with bleeding (men/o = menses, month).", "قاعدگی", "lx", "phys", []],
["metrorrhagia", "meh-troh-RAY-jee-ah", "Uterine bleeding between menstrual periods (metr/o = uterus).", "خونریزی بین قاعدگی‌ها", "ds", "sx", []],
["multigravida", "mul-tih-GRAV-ih-dah", "Woman who has been pregnant more than once (multi- = many).", "زن چندباردار", "pg", "phys", []],
["multipara", "mul-TIP-ah-rah", "Woman who has given birth to two or more viable infants.", "زن چندزا", "pg", "phys", []],
["myomectomy", "mye-oh-MEK-toh-mee", "Removal of a fibroid (myoma) while keeping the uterus.", "برداشتن فیبروم", "tx", "tx", []],
["myometrium", "mye-oh-MEE-tree-um", "Muscular middle layer of the uterine wall.", "میومتر (عضله رحم)", "fm", "body", []],
["Naegele rule", "NAY-geh-lee rool", "Way to estimate the due date: LMP minus 3 months plus 7 days (plus one year).", "قاعده نگله", "pg", "lab", []],
["neonatal", "nee-oh-NAY-tal", "Pertaining to the newborn (neo- = new, nat/o = birth).", "مربوط به نوزاد", "pg", "phys", ["NICU"]],
["neonate", "NEE-oh-nayt", "Newborn infant during the first 4 weeks of life (neo- = new, nat/o = birth).", "نوزاد", "pg", "phys", ["NB"]],
["neonatology", "nee-oh-nay-TOL-oh-jee", "Branch of medicine that treats newborns (neo- = new, nat/o = birth).", "نوزادان (نئوناتولوژی)", "lx", "field", []],
["nullipara", "nul-IP-ah-rah", "Woman who has never given birth to a viable infant (nulli- = none).", "زن نزاییده", "pg", "phys", []],
["obstetrician", "ob-steh-TRISH-un", "Physician who specializes in pregnancy and childbirth.", "متخصص زایمان", "lx", "field", []],
["obstetrics", "ob-STET-riks", "Branch of medicine that cares for women during pregnancy, childbirth and after birth.", "مامایی (زایمان)", "lx", "field", ["OB"]],
["oligohydramnios", "ol-ih-goh-hye-DRAM-nee-os", "Too little amniotic fluid.", "کمی مایع آمنیوتیک", "pg", "sx", []],
["oligomenorrhea", "ol-ih-goh-men-oh-REE-ah", "Scanty or infrequent menstrual flow (olig/o = scanty).", "قاعدگی کم یا دیرهنگام", "ds", "sx", []],
["oligospermia", "ol-ih-goh-SPER-mee-ah", "Low number of sperm in the semen (olig/o = scanty).", "کم‌بودن اسپرم", "ds", "sx", []],
["omphalitis", "om-fah-LYE-tis", "Inflammation of the navel in a newborn (omphal/o = navel).", "التهاب ناف", "pg", "dz", []],
["oophorectomy", "oh-off-oh-REK-toh-mee", "Surgical removal of an ovary.", "برداشتن تخمدان", "tx", "tx", []],
["oophoritis", "oh-off-oh-RYE-tis", "Inflammation of an ovary (oophor/o = ovary).", "التهاب تخمدان", "lx", "dz", []],
["oral contraceptive", "OR-al kon-trah-SEP-tiv", "Birth control pill of hormones that prevents ovulation.", "قرص ضدبارداری", "tx", "tx", []],
["orchiectomy", "or-kee-EK-toh-mee", "Surgical removal of a testis; castration if both.", "برداشتن بیضه", "tx", "tx", []],
["orchiopexy", "or-kee-oh-PEK-see", "Surgical fixation of an undescended testis in the scrotum (-pexy = fixation).", "تثبیت بیضه (ارکیوپکسی)", "tx", "tx", []],
["orchitis", "or-KYE-tis", "Inflammation of a testis (orchi/o = testis).", "التهاب بیضه", "lx", "dz", []],
["ovarian cyst", "oh-VAIR-ee-an sist", "Fluid-filled sac in or on the ovary.", "کیست تخمدان", "ds", "dz", []],
["ovarian follicle", "oh-VAIR-ee-an FOL-ih-kul", "Small sac in the ovary in which an ovum matures; a mature one is a graafian follicle.", "فولیکول تخمدان", "fm", "body", []],
["ovary", "OH-vah-ree", "One of two female gonads that make ova, estrogen and progesterone (oophor/o, ovari/o = ovary).", "تخمدان", "fm", "body", []],
["ovulation", "ov-yoo-LAY-shun", "Release of a mature ovum from the ovary, about day 14 of the cycle.", "تخمک‌گذاری", "fm", "phys", []],
["ovum", "OH-vum", "The female sex cell (egg cell); plural ova (ov/o, o/o = egg).", "تخمک", "lx", "phys", []],
["oxytocin", "ok-see-TOH-sin", "Pituitary hormone that makes the uterus contract in labor and releases milk; Pitocin is its drug form (-tocin = labor).", "اکسی‌توسین", "fm", "phys", []],
["Papanicolaou test", "pap-ah-NIK-oh-low test", "Pap smear: cells scraped from the cervix and examined to find cancer and dysplasia.", "پاپ‌اسمیر", "tx", "lab", ["Pap"]],
["para", "PAIR-ah", "Number of pregnancies that ended in a viable birth (P1, P2) (-para = bear, give birth).", "پارا (تعداد زایمان)", "pg", "phys", ["P"]],
["parturition", "par-tyoo-RISH-un", "Act of giving birth; labor and delivery (-tocia = labor).", "زایمان", "pg", "phys", []],
["pelvic examination", "PEL-vik eg-zam-ih-NAY-shun", "Examination of the vagina, cervix and pelvic organs, often with a speculum.", "معاینه لگن", "tx", "lab", []],
["pelvic inflammatory disease", "PEL-vik in-FLAM-ah-tor-ee dih-ZEEZ", "Infection of the uterus, tubes and ovaries, often from gonorrhea or chlamydia.", "بیماری التهابی لگن", "ds", "dz", ["PID"]],
["pelvic ultrasonography", "PEL-vik ul-trah-son-OG-rah-fee", "Sound-wave imaging of the pelvic organs or the fetus.", "سونوگرافی لگن", "tx", "lab", ["US"]],
["pelvimetry", "pel-VIM-eh-tree", "Measurement of the size of the pelvis to see if a baby can pass through.", "لگن‌سنجی", "tx", "lab", []],
["penis", "PEE-nis", "Male organ of urination and sexual intercourse (pen/o, phall/o).", "آلت تناسلی مرد", "ml", "body", []],
["perimenopause", "pair-ih-MEN-oh-pawz", "Years leading up to menopause with irregular periods and hot flashes.", "پیش‌یائسگی", "fm", "phys", []],
["perimetrium", "pair-ih-MEE-tree-um", "Outer serous layer of the uterus.", "پریمتر (لایه بیرونی رحم)", "fm", "body", []],
["perineum", "pair-ih-NEE-um", "Area between the vaginal opening and the anus (perine/o).", "پرینه (میان‌دوراه)", "fm", "body", []],
["phimosis", "fye-MOH-sis", "Tight foreskin that cannot be pulled back over the glans.", "تنگی پوست ختنه‌گاه", "ds", "dz", []],
["placenta", "plah-SEN-tah", "Organ in the uterus that exchanges oxygen, food and wastes between mother and fetus and makes hormones.", "جفت", "pg", "body", []],
["placenta previa", "plah-SEN-tah PREE-vee-ah", "Placenta attached low in the uterus, near or over the cervix; causes painless bleeding.", "جفت سرراهی", "ds", "dz", []],
["polycystic ovary syndrome", "pol-ee-SIS-tik OH-vah-ree SIN-drohm", "Hormonal disorder with many ovarian cysts, irregular periods and excess androgens.", "سندروم تخمدان پلی‌کیستیک", "ds", "dz", ["PCOS"]],
["polyhydramnios", "pol-ee-hye-DRAM-nee-os", "Too much amniotic fluid.", "زیادی مایع آمنیوتیک", "pg", "sx", []],
["postmenopausal", "post-men-oh-PAW-zal", "Occurring after menopause.", "پس از یائسگی", "fm", "phys", []],
["postpartum", "post-PAR-tum", "After childbirth.", "پس از زایمان", "pg", "phys", []],
["preeclampsia", "pree-ee-KLAMP-see-ah", "Pregnancy-induced high blood pressure with protein in the urine and swelling.", "پره‌اکلامپسی", "ds", "dz", ["PIH"]],
["pregnancy", "PREG-nan-see", "Condition of carrying a developing embryo or fetus; gestation (-cyesis = pregnancy).", "بارداری", "pg", "phys", []],
["pregnancy test", "PREG-nan-see test", "Test of urine or blood for hCG.", "آزمایش بارداری", "tx", "lab", []],
["premature rupture of membranes", "pree-mah-CHUR RUP-chur ov MEM-braynz", "Breaking of the amniotic sac before labor begins.", "پارگی زودرس کیسه آب", "ds", "sx", ["PROM"]],
["premenstrual syndrome", "pree-MEN-stroo-al SIN-drohm", "Physical and emotional symptoms in the days before menstruation.", "سندروم پیش از قاعدگی", "ds", "dz", ["PMS"]],
["prenatal", "pree-NAY-tal", "Before birth (pre- = before, nat/o = birth).", "پیش از تولد", "pg", "phys", []],
["prepuce", "PREE-pyoos", "Fold of skin that covers the glans penis; foreskin.", "پوست ختنه‌گاه (پره‌پوس)", "ml", "body", []],
["presentation", "prez-en-TAY-shun", "The part of the fetus that comes first into the birth canal, usually the head (cephalic).", "نمایش جنین", "pg", "phys", []],
["priapism", "PRYE-ah-pizm", "Prolonged, painful erection not caused by sexual desire; an emergency.", "پریاپیسم (نعوظ طولانی)", "ds", "dz", []],
["primigravida", "prye-mih-GRAV-ih-dah", "Woman pregnant for the first time (primi- = first).", "زن نخست‌باردار", "pg", "phys", []],
["progesterone", "proh-JES-ter-ohn", "Hormone of the corpus luteum and placenta that prepares and maintains the uterine lining for pregnancy.", "پروژسترون", "lx", "phys", []],
["prostate cancer", "PROS-tayt KAN-ser", "Malignant tumor of the prostate, common in men over 50; screened with PSA and DRE.", "سرطان پروستات", "ds", "dz", []],
["prostate gland", "PROS-tayt gland", "Gland around the urethra below the bladder that adds fluid to semen (prostat/o).", "غده پروستات", "ml", "body", []],
["prostate-specific antigen", "PROS-tayt speh-SIF-ik AN-tih-jen", "Blood test used to screen for prostate cancer.", "آنتی‌ژن اختصاصی پروستات", "tx", "lab", ["PSA"]],
["prostatectomy", "pros-tah-TEK-toh-mee", "Surgical removal of all or part of the prostate.", "برداشتن پروستات", "tx", "tx", []],
["prostatic", "pros-TAT-ik", "Pertaining to the prostate gland.", "پروستاتی", "ml", "body", []],
["prostatitis", "pros-tah-TYE-tis", "Inflammation of the prostate gland.", "التهاب پروستات", "ds", "dz", []],
["puberty", "PYOO-ber-tee", "Period when the sex organs mature and secondary sex characteristics appear.", "بلوغ", "ml", "phys", []],
["puerperium", "pyoo-er-PEER-ee-um", "About 6 weeks after birth during which the uterus returns to normal size.", "دوره نفاس", "pg", "phys", []],
["pyosalpinx", "pye-oh-SAL-pinks", "Pus in a uterine tube (py/o = pus).", "چرک در لوله رحم", "ds", "dz", []],
["rectocele", "REK-toh-seel", "Protrusion of the rectum into the vaginal wall.", "رکتوسل", "ds", "dz", []],
["rectouterine pouch", "rek-toh-YOO-ter-in powch", "Space between the uterus and rectum; cul-de-sac (culd/o).", "بن‌بست رحمی-رکتومی (کول‌دوساک)", "fm", "body", []],
["reproductive system", "ree-proh-DUK-tiv SIS-tem", "The organs that produce sex cells and hormones and allow conception, pregnancy and birth.", "دستگاه تولیدمثل", "lx", "body", []],
["retroversion", "ret-roh-VER-zhun", "Abnormal backward tilting of the uterus.", "رحم برگشته به عقب", "ds", "sx", []],
["Rh incompatibility", "ar-aych in-kom-pat-ih-BIL-ih-tee", "Rh-negative mother makes antibodies against an Rh-positive fetus; causes hemolytic disease of the newborn.", "ناسازگاری Rh", "ds", "dz", ["HDN"]],
["salpingectomy", "sal-pin-JEK-toh-mee", "Surgical removal of a uterine tube.", "برداشتن لوله رحم", "tx", "tx", []],
["salpingitis", "sal-pin-JYE-tis", "Inflammation of a uterine (fallopian) tube (salping/o = tube).", "التهاب لوله رحم", "lx", "dz", []],
["salpingo-oophorectomy", "sal-ping-goh-oh-off-oh-REK-toh-mee", "Removal of a uterine tube and ovary; bilateral when both sides (BSO).", "برداشتن لوله و تخمدان", "tx", "tx", ["BSO"]],
["scrotum", "SKROH-tum", "Sac of skin that holds the testes outside the body to keep them cooler (osche/o, scrot/o).", "کیسه بیضه", "ml", "body", []],
["semen", "SEE-men", "Thick fluid of sperm and gland secretions released at ejaculation (semin/o).", "منی", "ml", "phys", []],
["semen analysis", "SEE-men ah-NAL-ih-sis", "Test of sperm count, shape and motility, used in infertility.", "آزمایش مایع منی", "tx", "lab", []],
["seminal vesicles", "SEM-ih-nal VES-ih-kulz", "Two glands behind the bladder that add fluid to semen (vesicul/o).", "کیسه‌های منی", "ml", "body", []],
["seminiferous tubules", "sem-ih-NIF-er-us TOO-byoolz", "Coiled tubes inside the testis where sperm are made.", "لوله‌های اسپرم‌ساز", "ml", "body", []],
["sexually transmitted infection", "SEK-shoo-ah-lee trans-MIT-ed in-FEK-shun", "Infection spread by sexual contact; formerly venereal disease.", "عفونت آمیزشی", "ds", "inf", ["STI", "STD", "VD"]],
["speculum", "SPEK-yoo-lum", "Instrument that holds the vagina open for examination.", "اسپکولوم", "tx", "lab", []],
["spermatic", "sper-MAT-ik", "Pertaining to sperm.", "مربوط به اسپرم", "ml", "phys", []],
["spermatic cord", "sper-MAT-ik kord", "Cord of vas deferens, vessels and nerves that suspends the testis.", "طناب اسپرماتیک", "ml", "body", []],
["spermatocele", "SPER-mah-toh-seel", "Cyst of the epididymis containing sperm.", "کیست اسپرم (اسپرماتوسل)", "ds", "dz", []],
["spermatogenesis", "sper-mah-toh-JEN-eh-sis", "Formation of sperm in the seminiferous tubules (-genesis = formation).", "اسپرم‌سازی", "ml", "phys", []],
["spermatozoon", "sper-mah-toh-ZOH-on", "The male sex cell (sperm); plural spermatozoa (spermat/o, sperm/o = sperm).", "اسپرم (یاخته جنسی نر)", "lx", "phys", []],
["spermicide", "SPER-mih-syde", "Agent that kills sperm (-cide = killing).", "اسپرم‌کش", "tx", "tx", []],
["spontaneous abortion", "spon-TAY-nee-us ah-BOR-shun", "Loss of a pregnancy before the fetus can survive; miscarriage.", "سقط خودبه‌خودی", "ds", "dz", ["AB"]],
["stillbirth", "STIL-berth", "Birth of a dead fetus after 20 weeks of pregnancy.", "مرده‌زایی", "ds", "dz", ["SB"]],
["syphilis", "SIF-ih-lis", "Bacterial STI that begins with a painless chancre and can spread to the whole body.", "سیفلیس", "ds", "inf", ["VDRL"]],
["testicular", "tes-TIK-yoo-lar", "Pertaining to the testes.", "بیضه‌ای", "ml", "body", []],
["testicular cancer", "tes-TIK-yoo-lar KAN-ser", "Malignant tumor of the testis, most common in young men.", "سرطان بیضه", "ds", "dz", ["TSE"]],
["testicular torsion", "tes-TIK-yoo-lar TOR-shun", "Twisting of the spermatic cord that cuts off blood to the testis; a surgical emergency.", "پیچ‌خوردگی بیضه", "ds", "dz", []],
["testis", "TES-tis", "One of two male gonads in the scrotum that make sperm and testosterone; testicle; plural testes (orchi/o, orchid/o, test/o).", "بیضه", "ml", "body", []],
["testosterone", "tes-TOS-teh-rohn", "Main male sex hormone made by the testes.", "تستوسترون", "lx", "phys", []],
["total abdominal hysterectomy", "TOH-tal ab-DOM-ih-nal his-ter-EK-toh-mee", "Removal of the uterus and cervix through an abdominal incision.", "هیسترکتومی کامل شکمی", "tx", "tx", ["TAH"]],
["toxic shock syndrome", "TOK-sik shok SIN-drohm", "Severe bacterial infection linked to tampon use, with fever, rash and shock.", "سندروم شوک سمی", "ds", "dz", ["TSS"]],
["transurethral resection of the prostate", "trans-yoo-REE-thral ree-SEK-shun ov the PROS-tayt", "Removal of prostate tissue through the urethra with a resectoscope.", "برداشتن پروستات از راه پیشابراه", "tx", "tx", ["TURP"]],
["trichomoniasis", "trik-oh-moh-NYE-ah-sis", "STI caused by a protozoan, with frothy vaginal discharge.", "تریکومونیازیس", "ds", "inf", []],
["trimester", "TRYE-mes-ter", "One of three periods of about 3 months each in pregnancy.", "سه‌ماهه بارداری", "pg", "phys", []],
["tubal ligation", "TOO-bal lye-GAY-shun", "Cutting and tying the uterine tubes for permanent sterilization.", "بستن لوله‌ها", "tx", "tx", []],
["umbilical", "um-BIL-ih-kal", "Pertaining to the navel or umbilical cord.", "نافی", "pg", "body", []],
["umbilical cord", "um-BIL-ih-kal kord", "Cord with two arteries and one vein that connects the fetus to the placenta (omphal/o, umbilic/o = navel).", "بند ناف", "pg", "body", []],
["urethra", "yoo-REE-thrah", "Tube that carries urine and, in males, semen out of the body (urethr/o).", "پیشابراه", "ml", "body", []],
["urologist", "yoo-ROL-oh-jist", "Physician who treats the urinary tract and the male reproductive system.", "متخصص اورولوژی", "lx", "field", []],
["uterine prolapse", "YOO-ter-in PROH-laps", "Downward displacement of the uterus into the vagina; hysteroptosis.", "افتادگی رحم", "ds", "dz", []],
["uterine tube", "YOO-ter-in toob", "Tube that carries the ovum from the ovary to the uterus; also called fallopian tube or oviduct (salping/o = tube).", "لوله رحم (لوله فالوپ)", "fm", "body", []],
["uterus", "YOO-ter-us", "Hollow muscular organ in which the fetus develops; womb (hyster/o, metr/o, uter/o = uterus).", "رحم", "fm", "body", []],
["vagina", "vah-JYE-nah", "Muscular canal from the cervix to the outside of the body; birth canal (colp/o, vagin/o = vagina).", "واژن", "fm", "body", []],
["vaginal birth after cesarean", "VAJ-ih-nal berth AF-ter seh-ZAIR-ee-an", "Normal vaginal delivery in a woman who had a previous C-section.", "زایمان طبیعی پس از سزارین", "tx", "tx", ["VBAC"]],
["vaginitis", "vaj-ih-NYE-tis", "Inflammation of the vagina; colpitis.", "التهاب واژن", "ds", "dz", []],
["varicocele", "VAIR-ih-koh-seel", "Enlarged, twisted veins of the spermatic cord (varic/o = dilated vein).", "واریکوسل", "ds", "dz", []],
["vas deferens", "vas DEF-er-enz", "Duct that carries sperm from the epididymis to the urethra; ductus deferens (vas/o = vessel, duct).", "مجرای دفران", "ml", "body", []],
["vasectomy", "vah-SEK-toh-mee", "Removal of a segment of each vas deferens for male sterilization.", "وازکتومی", "tx", "tx", []],
["vasovasostomy", "vas-oh-vah-SOS-toh-mee", "Reconnecting the cut ends of the vas deferens to reverse a vasectomy.", "برگرداندن وازکتومی", "tx", "tx", []],
["vulva", "VUL-vah", "The external female genitalia (vulv/o, episi/o = vulva).", "فرج (ولو)", "fm", "body", []],
["zygote", "ZYE-goht", "The single cell formed when a sperm fertilizes an ovum.", "تخم (زیگوت)", "lx", "phys", []]];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* زایا — داده واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها و دسته‌های واژه (موتور: engine/js/lexicon.js)
 * ریشه‌ها و اختصارها از Total.txt و فصل‌های PDF پیوست (Cohen، Gylys، Fremgen، Dummies و…) گردآوری و دستی پالایش شده‌اند.
 * دنیاها: lx زبان زایش (همه واژه‌ها) • fm زنانه • ml مردانه • pg بارداری و زایمان • ds بیماری‌ها و عفونت‌های آمیزشی • tx تشخیص، درمان و پیشگیری */
(function (root) {
  const EA = root.EA = root.EA || {};
  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const roots = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', 'بدون، فاقد', '*'],
    ['ante-', ['ante'], 'before', 'پیش از', 'pg'],
    ['bi-', ['bi'], 'two, both', 'دو', 'tx'],
    ['dys-', ['dys'], 'painful, difficult', 'دردناک، دشوار', 'ds'],
    ['ec-', ['ec'], 'out, outside', 'بیرون', 'ds'],
    ['endo-', ['endo'], 'within', 'درون', 'fm'],
    ['epi-', ['epi'], 'upon, above', 'روی', 'ml'],
    ['hyper-', ['hyper'], 'excessive', 'بیش از حد', '*'],
    ['hypo-', ['hypo'], 'below, deficient', 'زیر، کم', 'ds'],
    ['in-', ['in'], 'not', 'نا-', 'ds'],
    ['intra-', ['intra'], 'within', 'درون', 'pg'],
    ['multi-', ['multi'], 'many', 'چند', 'pg'],
    ['neo-', ['neo'], 'new', 'نو', 'pg'],
    ['nulli-', ['nulli'], 'none', 'هیچ', 'pg'],
    ['peri-', ['peri'], 'around', 'پیرامون', 'fm'],
    ['poly-', ['poly'], 'many, much', 'چند، زیاد', 'ds'],
    ['post-', ['post'], 'after', 'پس از', 'pg'],
    ['pre-', ['pre'], 'before', 'پیش از', 'pg'],
    ['primi-', ['primi'], 'first', 'نخست', 'pg'],
    ['trans-', ['trans'], 'across, through', 'از میان', 'tx'],
    // ریشه‌های عمومی
    ['gynec/o', ['gynec'], 'woman, female', 'زن', 'lx'],
    ['andr/o', ['andr'], 'male', 'مرد', 'lx'],
    ['gonad/o', ['gonad'], 'sex glands', 'غده جنسی', 'lx'],
    ['genit/o', ['genit'], 'reproductive organs', 'اندام تناسلی', 'lx'],
    ['estr/o', ['estr'], 'female', 'زنانه', 'lx'],
    ['obstetr/o', ['obstetr'], 'midwife', 'مامایی', 'lx'],
    ['ur/o', ['ur'], 'urine, urinary tract', 'ادرار', 'lx'],
    ['cyst/o', ['cyst'], 'bladder, sac', 'مثانه، کیسه', 'ds'],
    ['hydr/o', ['hydr'], 'water', 'آب', 'ds'],
    ['py/o', ['py'], 'pus', 'چرک', 'ds'],
    ['leuk/o', ['leuk'], 'white', 'سفید', 'ds'],
    ['olig/o', ['olig'], 'scanty, few', 'کم', 'ds'],
    ['crypt/o', ['crypt'], 'hidden', 'پنهان', 'ds'],
    ['varic/o', ['varic'], 'dilated vein', 'سیاهرگ گشاد', 'ds'],
    ['my/o', ['my'], 'muscle', 'عضله', 'fm'],
    ['lapar/o', ['lapar'], 'abdomen', 'شکم', 'tx'],
    ['culd/o', ['culd'], 'cul-de-sac', 'بن‌بست رحمی-رکتومی', 'tx'],
    ['lei/o', ['lei'], 'smooth', 'صاف', 'ds'],
    ['top/o', ['top'], 'place', 'جا', 'ds'],
    ['pelv/i, pelv/o', ['pelv'], 'pelvis', 'لگن', 'tx'],
    // زنانه
    ['hyster/o, metr/o, uter/o', ['hyster', 'metr', 'uter'], 'uterus', 'رحم', 'lx'],
    ['oophor/o, ovari/o', ['oophor', 'ovari'], 'ovary', 'تخمدان', 'lx'],
    ['o/o, ov/o', ['ov'], 'egg, ovum', 'تخمک', 'fm'],
    ['salping/o', ['salping'], 'uterine tube', 'لوله رحم', 'lx'],
    ['cervic/o', ['cervic'], 'cervix', 'دهانه رحم', 'fm'],
    ['colp/o, vagin/o', ['colp', 'vagin'], 'vagina', 'واژن', 'lx'],
    ['vulv/o, episi/o', ['vulv', 'episi'], 'vulva', 'فرج', 'fm'],
    ['perine/o', ['perine'], 'perineum', 'پرینه', 'fm'],
    ['mamm/o, mast/o', ['mamm', 'mast'], 'breast', 'پستان', 'lx'],
    ['lact/o, galact/o', ['galact', 'lact'], 'milk', 'شیر', 'pg'],
    ['men/o, menstru/o', ['menstru', 'men'], 'menses, menstruation', 'قاعدگی', 'lx'],
    ['hymen/o', ['hymen'], 'hymen', 'پرده بکارت', 'fm'],
    ['ovul/o', ['ovul'], 'ovulation', 'تخمک‌گذاری', 'fm'],
    // مردانه
    ['orchi/o, orchid/o, test/o', ['orchid', 'orchi', 'orch', 'test'], 'testis', 'بیضه', 'lx'],
    ['testicul/o', ['testicul'], 'testis', 'بیضه', 'ml'],
    ['osche/o, scrot/o', ['osche', 'scrot'], 'scrotum', 'کیسه بیضه', 'ml'],
    ['epididym/o', ['epididym'], 'epididymis', 'اپیدیدیم', 'ml'],
    ['vas/o', ['vas'], 'vessel, vas deferens', 'مجرا، رگ', 'ml'],
    ['vesicul/o', ['vesicul'], 'seminal vesicle', 'کیسه منی', 'ml'],
    ['prostat/o', ['prostat'], 'prostate gland', 'پروستات', 'lx'],
    ['urethr/o', ['urethr'], 'urethra', 'پیشابراه', 'ml'],
    ['balan/o', ['balan'], 'glans penis', 'حشفه', 'ml'],
    ['pen/o, phall/o', ['pen', 'phall'], 'penis', 'آلت مردانه', 'ml'],
    ['spermat/o, sperm/o', ['spermat', 'sperm'], 'sperm', 'اسپرم', 'lx'],
    ['semin/o', ['semin'], 'semen', 'منی', 'ml'],
    // بارداری و زایمان
    ['embry/o', ['embry'], 'embryo', 'رویان', 'pg'],
    ['fet/o', ['fet'], 'fetus', 'جنین', 'pg'],
    ['amni/o', ['amni'], 'amnion', 'آمنیون', 'pg'],
    ['chori/o', ['chori'], 'chorion', 'کوریون', 'pg'],
    ['nat/o', ['nat'], 'birth', 'تولد', 'pg'],
    ['grav/i', ['grav'], 'pregnant', 'باردار', 'pg'],
    ['par/o', ['par'], 'bear, give birth', 'زاییدن', 'pg'],
    ['omphal/o, umbilic/o', ['omphal', 'umbilic'], 'navel (umbilicus)', 'ناف', 'pg'],
    ['toc/o', ['toc'], 'labor, birth', 'زایمان', 'pg'],
    ['kary/o', ['kary'], 'nucleus', 'هسته', 'pg'],
    ['pareun/o', ['pareun'], 'sexual intercourse', 'آمیزش', 'ds'],
    // پسوندها
    ['-al, -ic, -ar, -ary, -ine, -ile, -ous', ['ary', 'ial', 'ine', 'ile', 'ous', 'ic', 'al', 'ar'], 'pertaining to', 'مربوط به', '*'],
    ['-is, -um, -us, -a, -on, -x', ['is', 'um', 'us', 'on', 'x', 'a'], 'noun ending', 'پایان اسم', '*'],
    ['-ia, -y, -ism', ['ism', 'ia', 'y'], 'condition', 'حالت', '*'],
    ['-ist, -logist', ['logist', 'ist'], 'specialist', 'متخصص', 'lx'],
    ['-ian', ['ian'], 'specialist', 'متخصص', 'lx'],
    ['-logy', ['logy'], 'study of', 'علم، مطالعه', 'lx'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-osis, -iasis', ['iasis', 'osis', 'sis'], 'abnormal condition', 'وضعیت غیرطبیعی', '*'],
    ['-oma', ['oma'], 'tumor, mass', 'تومور، توده', '*'],
    ['-rrhea', ['rrhea'], 'flow, discharge', 'جریان، ترشح', 'ds'],
    ['-rrhagia', ['rrhagia'], 'bursting forth of blood', 'خونریزی', 'ds'],
    ['-cele', ['cele'], 'hernia, swelling', 'فتق، تورم', 'ds'],
    ['-spermia', ['spermia'], 'condition of sperm', 'حالت اسپرم', 'ds'],
    ['-salpinx', ['salpinx'], 'uterine tube', 'لوله رحم', 'ds'],
    ['-arche', ['arche'], 'beginning', 'آغاز', 'fm'],
    ['-genesis', ['genesis'], 'formation, producing', 'ساخت', 'ml'],
    ['-gen', ['gen'], 'producing', 'سازنده', 'lx'],
    ['-cyesis', ['cyesis'], 'pregnancy', 'بارداری', 'pg'],
    ['-gravida', ['gravida'], 'pregnant woman', 'زن باردار', 'pg'],
    ['-para', ['para'], 'woman who has given birth', 'زن زاییده', 'pg'],
    ['-partum', ['partum'], 'childbirth, labor', 'زایمان', 'pg'],
    ['-tocia', ['tocia'], 'labor, birth', 'زایمان', 'ds'],
    ['-emesis', ['emesis'], 'vomiting', 'استفراغ', 'ds'],
    ['-plasia', ['plasia'], 'formation, growth', 'رشد، شکل‌گیری', 'ds'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', 'ds'],
    ['-algia', ['algia'], 'pain', 'درد', 'ds'],
    ['-ectomy', ['ectomy'], 'surgical removal', 'برداشتن (جراحی)', '*'],
    ['-tomy', ['tomy'], 'incision', 'برش', '*'],
    ['-stomy', ['stomy'], 'new opening', 'ایجاد منفذ', 'tx'],
    ['-pexy', ['pexy'], 'surgical fixation', 'تثبیت جراحی', 'tx'],
    ['-plasty', ['plasty'], 'surgical repair', 'ترمیم جراحی', 'tx'],
    ['-rrhaphy', ['rrhaphy'], 'suture', 'بخیه', 'tx'],
    ['-scopy', ['scopy'], 'visual examination', 'مشاهده با ابزار', 'tx'],
    ['-graphy', ['graphy'], 'process of recording', 'روش ثبت تصویر', 'tx'],
    ['-centesis', ['centesis'], 'surgical puncture', 'سوراخ کردن برای کشیدن مایع', 'tx'],
    ['-metry', ['metry'], 'measurement', 'اندازه‌گیری', 'tx'],
    ['-cide', ['cide'], 'killing', 'کشنده', 'tx']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['AB', 'abortion', 'سقط', 'ds'],
    ['AFP', 'alpha-fetoprotein', 'آلفافیتوپروتئین', 'tx'],
    ['AI', 'artificial insemination', 'تلقیح مصنوعی', 'tx'],
    ['AIDS', 'acquired immunodeficiency syndrome', 'سندروم نقص ایمنی اکتسابی', 'ds'],
    ['ART', 'assisted reproductive technology', 'فناوری کمک‌باروری', 'tx'],
    ['BOW', 'bag of waters', 'کیسه آب', 'pg'],
    ['BPH', 'benign prostatic hyperplasia', 'بزرگی خوش‌خیم پروستات', 'ds'],
    ['BRCA1, BRCA2', 'breast cancer genes 1 and 2', 'ژن‌های سرطان پستان', 'ds'],
    ['BSE', 'breast self-examination', 'خودآزمایی پستان', 'tx'],
    ['BSO', 'bilateral salpingo-oophorectomy', 'برداشتن دوطرفه لوله و تخمدان', 'tx'],
    ['BV', 'bacterial vaginosis', 'واژینوز باکتریایی', 'ds'],
    ['CIN', 'cervical intraepithelial neoplasia', 'نئوپلازی داخل‌اپیتلیال دهانه رحم', 'ds'],
    ['CPD', 'cephalopelvic disproportion', 'عدم تناسب سر و لگن', 'ds'],
    ['CS, C-section', 'cesarean section', 'سزارین', 'tx'],
    ['CVS', 'chorionic villus sampling', 'نمونه‌برداری از پرزهای جفتی', 'tx'],
    ['Cx', 'cervix', 'دهانه رحم', 'fm'],
    ['D&C', 'dilation and curettage', 'دیلاتاسیون و کورتاژ', 'tx'],
    ['DRE', 'digital rectal examination', 'معاینه انگشتی رکتوم', 'tx'],
    ['DUB', 'dysfunctional uterine bleeding', 'خونریزی ناکارآمد رحم', 'ds'],
    ['ED', 'erectile dysfunction', 'اختلال نعوظ', 'ds'],
    ['EDC', 'estimated date of confinement', 'تاریخ تخمینی زایمان', 'pg'],
    ['EDD', 'estimated date of delivery', 'تاریخ تخمینی زایمان', 'pg'],
    ['FHR', 'fetal heart rate', 'ضربان قلب جنین', 'pg'],
    ['FHT', 'fetal heart tones', 'صدای قلب جنین', 'pg'],
    ['FSH', 'follicle-stimulating hormone', 'هورمون محرک فولیکول', 'lx'],
    ['G', 'gravida (number of pregnancies)', 'تعداد بارداری‌ها', 'pg'],
    ['GA', 'gestational age', 'سن بارداری', 'pg'],
    ['GC', 'gonococcus (gonorrhea)', 'گنوکوک (سوزاک)', 'ds'],
    ['GIFT', 'gamete intrafallopian transfer', 'انتقال گامت به لوله رحم', 'tx'],
    ['GYN', 'gynecology; gynecologist', 'زنان؛ متخصص زنان', 'lx'],
    ['hCG', 'human chorionic gonadotropin', 'هورمون HCG بارداری', 'pg'],
    ['HDN', 'hemolytic disease of the newborn', 'بیماری همولیتیک نوزاد', 'ds'],
    ['HIV', 'human immunodeficiency virus', 'ویروس نقص ایمنی', 'ds'],
    ['HPV', 'human papillomavirus', 'ویروس پاپیلومای انسانی', 'ds'],
    ['HRT', 'hormone replacement therapy', 'هورمون‌درمانی جایگزین', 'tx'],
    ['HSV', 'herpes simplex virus', 'ویروس هرپس سیمپلکس', 'ds'],
    ['IUD', 'intrauterine device', 'وسیله داخل رحمی', 'tx'],
    ['IUP', 'intrauterine pregnancy', 'بارداری داخل رحمی', 'pg'],
    ['IVF', 'in vitro fertilization', 'لقاح آزمایشگاهی', 'tx'],
    ['LEEP', 'loop electrosurgical excision procedure', 'برداشت حلقه‌ای الکتریکی دهانه رحم', 'tx'],
    ['LH', 'luteinizing hormone', 'هورمون لوتئینی‌کننده', 'lx'],
    ['LMP', 'last menstrual period', 'اولین روز آخرین قاعدگی', 'pg'],
    ['NB', 'newborn', 'نوزاد', 'pg'],
    ['NGU', 'nongonococcal urethritis', 'التهاب پیشابراه غیرسوزاکی', 'ds'],
    ['NICU', 'neonatal intensive care unit', 'مراقبت ویژه نوزادان', 'pg'],
    ['NSVD', 'normal spontaneous vaginal delivery', 'زایمان طبیعی خودبه‌خودی', 'pg'],
    ['OB', 'obstetrics; obstetrician', 'مامایی؛ متخصص زایمان', 'lx'],
    ['OB-GYN', 'obstetrics and gynecology', 'زنان و زایمان', 'lx'],
    ['P', 'para (number of viable births)', 'تعداد زایمان‌ها', 'pg'],
    ['Pap', 'Papanicolaou test', 'پاپ‌اسمیر', 'tx'],
    ['PCOS', 'polycystic ovary syndrome', 'سندروم تخمدان پلی‌کیستیک', 'ds'],
    ['PID', 'pelvic inflammatory disease', 'بیماری التهابی لگن', 'ds'],
    ['PIH', 'pregnancy-induced hypertension', 'فشار خون بارداری', 'ds'],
    ['PMS', 'premenstrual syndrome', 'سندروم پیش از قاعدگی', 'ds'],
    ['PROM', 'premature rupture of membranes', 'پارگی زودرس کیسه آب', 'ds'],
    ['PSA', 'prostate-specific antigen', 'آنتی‌ژن اختصاصی پروستات', 'tx'],
    ['SB', 'stillbirth', 'مرده‌زایی', 'ds'],
    ['STD', 'sexually transmitted disease', 'بیماری آمیزشی', 'ds'],
    ['STI', 'sexually transmitted infection', 'عفونت آمیزشی', 'ds'],
    ['SVD', 'spontaneous vaginal delivery', 'زایمان طبیعی خودبه‌خودی', 'pg'],
    ['TAH', 'total abdominal hysterectomy', 'هیسترکتومی کامل شکمی', 'tx'],
    ['TRAM', 'transverse rectus abdominis muscle (flap)', 'فلپ عضله راست شکمی', 'tx'],
    ['TSE', 'testicular self-examination', 'خودآزمایی بیضه', 'tx'],
    ['TSS', 'toxic shock syndrome', 'سندروم شوک سمی', 'ds'],
    ['TURP', 'transurethral resection of the prostate', 'برداشتن پروستات از راه پیشابراه', 'tx'],
    ['TVH', 'total vaginal hysterectomy', 'هیسترکتومی کامل واژینال', 'tx'],
    ['US', 'ultrasound, ultrasonography', 'سونوگرافی', 'tx'],
    ['VBAC', 'vaginal birth after cesarean', 'زایمان طبیعی پس از سزارین', 'tx'],
    ['VD', 'venereal disease', 'بیماری آمیزشی (قدیمی)', 'ds'],
    ['VDRL', 'Venereal Disease Research Laboratory (syphilis test)', 'آزمایش سیفلیس', 'tx'],
    ['ZIFT', 'zygote intrafallopian transfer', 'انتقال زیگوت به لوله رحم', 'tx'],
    ['y/o', 'years old', 'ساله', 'lx']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'body', icon: '🌸', name: 'ساختارهای دستگاه تولیدمثل' },
    { id: 'phys', icon: '🔁', name: 'کار، هورمون و بارداری' },
    { id: 'field', icon: '🎓', name: 'رشته‌ها و متخصصان' },
    { id: 'dz', icon: '🩺', name: 'بیماری‌ها' },
    { id: 'sx', icon: '🔍', name: 'نشانه‌ها' },
    { id: 'inf', icon: '🦠', name: 'عفونت‌های آمیزشی' },
    { id: 'lab', icon: '🧪', name: 'تشخیص و آزمون' },
    { id: 'tx', icon: '💊', name: 'درمان، جراحی و پیشگیری' }
  ];
  const main = { phys: 'Anatomy_and_Physiology', inf: 'Pathology_and_Disorders' };
  EA.LEX_DATA = { roots, abbr, cats, main, worlds: ['lx', 'fm', 'ml', 'pg', 'ds', 'tx'], base: 'lx' };
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
/* زایا — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با الگوی هورمونا و اپ‌های قبلی: زمینه سفید کارت، بافت‌ها با گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی زیر آن)،
 * پیکان‌ها و خط‌های راهنمای خاکستری گرد. پالت: صورتی رحم و مخاط، کرم-هلویی تخمدان و تخمک، آبی مجرای مردانه، زرد ادرار و مثانه، کرم استخوان لگن.
 * همه شکل‌ها شماتیک و آموزشی‌اند (نقاشی، نه عکس).
 * EA.art(کلید) ← رشته SVG؛ EA.ART_KEYS فهرست کلیدهاست (آزمون‌ها بررسی می‌کنند). */
(function (root) {
  const EA = root.EA = root.EA || {};
  let UID = 0;
  const FONT_EN = 'Nunito, Vazirmatn, system-ui, sans-serif', FONT_FA = 'Vazirmatn, Tahoma, sans-serif';
  const INK = '#2b2b2b', MUTED = '#6f7a80', LINE = '#5b6b73';
  /* پالت بافت‌ها */
  const C = {
    ut: '#f4a6b8', ut2: '#e07894', utLine: '#b84e6e', endo: '#fbd3dd', muc: '#f7c1c9', ova: '#fde3c8', ovaLine: '#d79a63',
    duct: '#9ccbea', ductLine: '#3f87bf', testis: '#f6c7a8', testisLine: '#c98a62', pros: '#e8a36b', prosLine: '#b4703c',
    blad: '#fbe7a6', bladLine: '#c9a530', rect: '#d9a48a', rectLine: '#a8735a', bone: '#f3e4c4', boneLine: '#b8975f',
    skin: '#f6d2b8', skinLine: '#d9a988', blood: '#b3262e', art: '#d9443a', vein: '#4f7fd1', fluid: '#cfe9fb', fluidLine: '#5e9fc4',
    fetus: '#f3b8a0', fetusLine: '#c97d62', plac: '#c2506a', spark: '#ffc800'
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
  /* رحم، لوله‌ها و تخمدان‌ها از روبه‌رو؛ مرکز cx، بالای رحم top، مقیاس s */
  function uterusFront(cx, top, s, o) {
    const p = o || {}; const k = s || 1; const g = nid(), sh = nid();
    const T = `translate(${cx} ${top}) scale(${k})`;
    const tube = side => `<path d="M${side * 30} 16 C${side * 60} 0 ${side * 92} -6 ${side * 112} 8 C${side * 124} 18 ${side * 128} 30 ${side * 124} 40" stroke="${C.utLine}" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M${side * 30} 16 C${side * 60} 0 ${side * 92} -6 ${side * 112} 8 C${side * 124} 18 ${side * 128} 30 ${side * 124} 40" stroke="${C.ut}" stroke-width="6" fill="none" stroke-linecap="round"/>${[-10, -3, 4, 11].map(d => `<path d="M${side * 124} 40 l${side * (d * 0.5)} 12" stroke="${C.utLine}" stroke-width="2.4" stroke-linecap="round"/>`).join('')}`;
    const ovary = side => `<ellipse cx="${side * 92}" cy="52" rx="22" ry="13" fill="${C.ova}" stroke="${C.ovaLine}" stroke-width="1.4"/>${[[-8, -3], [4, 3], [10, -4]].map(c => `<circle cx="${side * 92 + c[0]}" cy="${52 + c[1]}" r="3.4" fill="#fff6ea" stroke="${C.ovaLine}" stroke-width=".8"/>`).join('')}<path d="M${side * 34} 30 L${side * 72} 48" stroke="${C.utLine}" stroke-width="2" opacity=".6"/>`;
    return {
      d: `${linear(g, C.ut, C.ut2, true)}${shadow(sh)}`,
      b: `<g transform="${T}" filter="url(#${sh})">
        ${p.vagina === false ? '' : `<path d="M-15 120 L-17 196 Q0 202 17 196 L15 120Z" fill="${C.muc}" stroke="${C.utLine}" stroke-width="1.4"/><path d="M0 124 V194" stroke="${C.utLine}" stroke-width="1.2" opacity=".5" stroke-dasharray="3 3"/>`}
        ${tube(-1)}${tube(1)}${ovary(-1)}${ovary(1)}
        <path d="M-36 14 C-38 -8 38 -8 36 14 C34 60 18 92 13 104 L13 126 L-13 126 L-13 104 C-18 92 -34 60 -36 14Z" fill="url(#${g})" stroke="${C.utLine}" stroke-width="1.6"/>
        ${p.cavity === false ? '' : `<path d="M-22 18 L22 18 L3 84 L-3 84Z" fill="${C.endo}" stroke="${C.utLine}" stroke-width="1"/><path d="M0 84 V124" stroke="${C.utLine}" stroke-width="2"/>`}
        <path d="M-28 22 C-28 10 -18 4 -8 4" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".5"/>
      </g>`
    };
  }
  /* مقطع ساجیتال زنانه (رو به چپ): مثانه، رحم خم‌شده به جلو، واژن، رکتوم و استخوان شرمگاهی */
  function femaleSag(cx, cy, s) {
    const k = s || 1; const sh = nid();
    return {
      d: shadow(sh),
      b: `<g transform="translate(${cx} ${cy}) scale(${k})">
        <path d="M-150 -120 C-150 -40 -140 40 -110 110 L120 110 C150 40 150 -60 140 -120Z" fill="${C.skin}" opacity=".45"/>
        <g filter="url(#${sh})">
        <path d="M70 -110 C78 -40 80 30 66 106" stroke="${C.rectLine}" stroke-width="28" fill="none" stroke-linecap="round"/><path d="M70 -110 C78 -40 80 30 66 106" stroke="${C.rect}" stroke-width="24" fill="none" stroke-linecap="round"/>
        <ellipse cx="-70" cy="32" rx="38" ry="30" fill="${C.blad}" stroke="${C.bladLine}" stroke-width="1.4"/>
        <path d="M-74 60 C-80 80 -88 96 -96 110" stroke="${C.bladLine}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <ellipse cx="-110" cy="64" rx="14" ry="22" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3" transform="rotate(-20 -110 64)"/>
        <path d="M18 48 C8 72 -6 94 -26 112" stroke="${C.utLine}" stroke-width="20" fill="none" stroke-linecap="round"/><path d="M18 48 C8 72 -6 94 -26 112" stroke="${C.muc}" stroke-width="16" fill="none" stroke-linecap="round"/>
        <path d="M-4 -6 C-42 -40 -38 -78 -10 -84 C18 -90 42 -60 38 -24 C36 4 32 28 24 52 L10 46 C10 26 6 10 -4 -6Z" fill="${C.ut}" stroke="${C.utLine}" stroke-width="1.6"/>
        <path d="M-6 -40 C4 -54 22 -50 24 -30 C26 -10 22 14 16 38" stroke="${C.endo}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M-10 -84 C-30 -92 -52 -86 -60 -70" stroke="${C.utLine}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <ellipse cx="-66" cy="-62" rx="14" ry="9" fill="${C.ova}" stroke="${C.ovaLine}"/>
        </g></g>`
    };
  }
  /* مقطع ساجیتال مردانه (رو به چپ): مثانه، پروستات، کیسه منی، مجرای دفران، پیشابراه، آلت، بیضه و رکتوم */
  function maleSag(cx, cy, s) {
    const k = s || 1; const sh = nid();
    return {
      d: shadow(sh),
      b: `<g transform="translate(${cx} ${cy}) scale(${k})">
        <path d="M-150 -120 C-150 -40 -140 30 -120 80 C-140 100 -150 130 -140 150 L130 150 C150 60 150 -60 140 -120Z" fill="${C.skin}" opacity=".45"/>
        <g filter="url(#${sh})">
        <path d="M80 -110 C88 -40 90 30 76 120" stroke="${C.rectLine}" stroke-width="28" fill="none" stroke-linecap="round"/><path d="M80 -110 C88 -40 90 30 76 120" stroke="${C.rect}" stroke-width="24" fill="none" stroke-linecap="round"/>
        <ellipse cx="-30" cy="-30" rx="44" ry="36" fill="${C.blad}" stroke="${C.bladLine}" stroke-width="1.4"/>
        <ellipse cx="34" cy="-18" rx="12" ry="22" fill="#e9c27a" stroke="#b4903c" transform="rotate(20 34 -18)"/>
        <ellipse cx="-14" cy="20" rx="24" ry="18" fill="${C.pros}" stroke="${C.prosLine}" stroke-width="1.4"/>
        <ellipse cx="-90" cy="40" rx="12" ry="20" fill="${C.bone}" stroke="${C.boneLine}" transform="rotate(-20 -90 40)"/>
        <path d="M-14 2 C-16 30 -24 52 -44 66 C-70 82 -96 92 -128 108" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M-46 62 C-70 74 -98 88 -132 104 C-140 116 -132 126 -122 122 C-90 108 -62 96 -38 82Z" fill="${C.testis}" stroke="${C.testisLine}" stroke-width="1.4"/>
        <path d="M-14 4 C-16 30 -24 52 -44 66 C-70 82 -96 92 -128 108" stroke="${C.ductLine}" stroke-width="2" fill="none" stroke-dasharray="4 3"/>
        <path d="M-60 92 C-74 104 -76 132 -56 140 C-36 146 -26 126 -32 108 C-36 96 -48 88 -60 92Z" fill="${C.testis}" stroke="${C.testisLine}" stroke-width="1.4"/>
        <ellipse cx="-50" cy="118" rx="14" ry="17" fill="#f3b48c" stroke="${C.testisLine}"/>
        <path d="M-38 104 C-30 112 -30 126 -38 132" stroke="#c97d62" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M-36 106 C-20 80 -6 50 6 20 C14 0 24 -10 30 -2" stroke="${C.ductLine}" stroke-width="3.4" fill="none"/>
        </g></g>`
    };
  }
  /* سلول اسپرم */
  const sperm = (x, y, sc, rot) => `<g transform="translate(${x} ${y}) rotate(${rot || 0}) scale(${sc || 1})"><ellipse cx="0" cy="0" rx="7" ry="5" fill="${C.duct}" stroke="${C.ductLine}" stroke-width="1"/><path d="M7 0 h6 c8 0 8 -5 16 -5 s8 5 16 5 s8 -5 14 -5" stroke="${C.ductLine}" stroke-width="1.6" fill="none"/></g>`;
  /* تخمک با تاج سلولی */
  const ovum = (x, y, r) => `${Array.from({ length: 12 }, (_, i) => { const a = i / 12 * Math.PI * 2; return `<circle cx="${(x + Math.cos(a) * r * 1.22).toFixed(1)}" cy="${(y + Math.sin(a) * r * 1.22).toFixed(1)}" r="${(r * 0.2).toFixed(1)}" fill="${C.ova}" stroke="${C.ovaLine}" stroke-width=".8"/>`; }).join('')}<circle cx="${x}" cy="${y}" r="${r}" fill="#fbd3dd" stroke="#fff" stroke-width="${(r * 0.12).toFixed(1)}"/><circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${C.utLine}" stroke-width="1"/><circle cx="${x - r * 0.15}" cy="${y - r * 0.1}" r="${(r * 0.28).toFixed(1)}" fill="#e07894" opacity=".7"/>`;
  /* جنین ساده در وضعیت جنینی */
  const fetus = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k || 1})"><path d="M-6 -30 C-34 -30 -40 6 -26 24 C-14 40 14 40 20 22 C26 4 14 -4 6 -2 C10 -14 6 -28 -6 -30Z" fill="${C.fetus}" stroke="${C.fetusLine}" stroke-width="1.4"/><circle cx="-6" cy="-40" r="16" fill="${C.fetus}" stroke="${C.fetusLine}" stroke-width="1.4"/><path d="M-20 4 C-12 12 -2 12 4 6" stroke="${C.fetusLine}" stroke-width="2" fill="none"/><path d="M8 26 C14 34 22 32 26 26" stroke="${C.fetusLine}" stroke-width="2" fill="none"/></g>`;

  /* ================= دنیای پایه: زبان زایش ================= */
  A['repro-overview'] = () => {
    const fu = uterusFront(90, 64, 0.55), m = maleSag(270, 128, 0.5), cid = nid();
    return svg(360, 268, `${title('دستگاه تولیدمثل: زنانه و مردانه')}
      <rect x="6" y="30" width="170" height="200" rx="16" fill="#fdf0f4"/><rect x="184" y="30" width="170" height="200" rx="16" fill="#eef5fb"/>
      ${fu.b}<clipPath id="${cid}"><rect x="184" y="30" width="170" height="200" rx="16"/></clipPath><g clip-path="url(#${cid})">${m.b}</g>
      ${t(91, 52, 'female', { size: 11, fill: '#a3366a', w: 900 })}${t(269, 52, 'male', { size: 11, fill: '#1f6fa5', w: 900 })}
      ${f(91, 212, 'تخمدان، لوله، رحم، واژن', { size: 9, fill: INK, w: 700 })}${f(269, 222, 'بیضه، مجرا، پروستات، آلت', { size: 9, fill: INK, w: 700 })}
      ${lab(91, 246, 'gonad: ovary', 'غده جنسی زن: تخمدان', { size: 9.5 })}${lab(269, 246, 'gonad: testis', 'غده جنسی مرد: بیضه', { size: 9.5 })}`, 'دستگاه تولیدمثل', fu.d + m.d);
  };

  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 18, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 129, fa, { size: 9.5, fill: c })}`;
    return svg(360, 192, `${title('یک واژه = پیشوند + ریشه + پسوند')}
      ${part(8, 54, 'dys', '#1272a3', '#ddf1fb')}${part(68, 66, 'meno', '#b03e5c', '#fde6ec')}${part(140, 74, 'rrhea', '#3f8a05', '#e7f9d8')}
      ${br(8, 62, 'prefix', 'پیشوند: دردناک', '#1272a3')}${br(68, 134, 'root', 'ریشه: قاعدگی', '#b03e5c')}${br(140, 214, 'suffix', 'پسوند: جریان', '#3f8a05')}
      <rect x="226" y="40" width="126" height="40" rx="10" fill="#f8f6f5"/>${f(289, 57, 'جریانِ دردناکِ', { size: 10.5, fill: '#3f8a05', w: 800 })}${f(289, 73, 'قاعدگی', { size: 10.5, fill: INK, w: 800 })}
      <path d="M190 150 C150 176 96 176 44 150" stroke="#b03e5c" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M48 146 l-6 4 l7 3" stroke="#b03e5c" stroke-width="2" fill="none"/>
      ${f(140, 186, 'معنی را از آخر بخوان: پسوند ← پیشوند ← ریشه', { size: 10, fill: '#b03e5c', w: 700 })}`, 'آناتومی یک واژه پزشکی');
  };

  A['root-map-f'] = () => {
    const u = uterusFront(180, 76, 1.02);
    const R = (x1, y1, x2, y2, root, fa, side) => `${pin(x1, y1, x2, y2)}${t(side < 0 ? 8 : x2 + 4, y2 - 2, root, { size: 10.5, anchor: 'start', fill: '#a3366a', w: 900 })}${f(side < 0 ? 8 : x2 + 4, y2 + 12, fa, { size: 9, anchor: 'start', fill: INK })}`;
    return svg(360, 300, `${title('نقشه ریشه‌های زنانه')}
      ${u.b}
      ${R(84, 128, 70, 170, 'oophor/o', 'تخمدان', -1)}${R(160, 92, 70, 60, 'hyster/o, metr/o', 'رحم', -1)}
      ${R(270, 84, 276, 48, 'salping/o', 'لوله رحم', 1)}${R(180, 190, 236, 214, 'cervic/o', 'دهانه رحم', 1)}
      ${R(180, 250, 236, 262, 'colp/o, vagin/o', 'واژن', 1)}${R(178, 120, 70, 230, 'endometri/o', 'آندومتر', -1)}`, 'نقشه ریشه‌ها', u.d);
  };

  A['root-map-m'] = () => {
    const m = maleSag(190, 140, 1);
    const R = (x1, y1, x2, y2, root, fa, side) => `${pin(x1, y1, x2, y2)}${t(side < 0 ? 8 : x2 + 4, y2 - 2, root, { size: 10.5, anchor: 'start', fill: '#1f6fa5', w: 900 })}${f(side < 0 ? 8 : x2 + 4, y2 + 12, fa, { size: 9, anchor: 'start', fill: INK })}`;
    return svg(360, 300, `${title('نقشه ریشه‌های مردانه')}
      ${m.b}
      ${R(176, 160, 70, 196, 'prostat/o', 'پروستات', -1)}${R(140, 258, 70, 278, 'orchi/o, test/o', 'بیضه', -1)}
      ${R(152, 244, 250, 262, 'epididym/o', 'اپیدیدیم', 1)}${R(196, 160, 250, 188, 'vas/o', 'مجرای دفران', 1)}
      ${R(224, 122, 250, 70, 'vesicul/o', 'کیسه منی', 1)}${R(160, 198, 70, 130, 'urethr/o', 'پیشابراه', -1)}${R(160, 110, 70, 60, 'cyst/o', 'مثانه', -1)}`, 'نقشه ریشه‌ها', m.d);
  };

  A.twins = () => {
    const box = (x, y, c, bg, w1, m1, ex, ic) => `<rect x="${x}" y="${y}" width="164" height="86" rx="14" fill="${bg}"/>${t(x + 30, y + 50, ic, { size: 22 })}${t(x + 100, y + 32, w1, { size: 15, fill: c, w: 900 })}${f(x + 100, y + 52, m1, { size: 10.5, fill: INK, w: 800 })}${t(x + 100, y + 72, ex, { size: 9.5, fill: c, w: 800 })}`;
    return svg(360, 236, `${title('جفت‌های فریبنده')}
      ${box(10, 32, '#b03e5c', '#fde6ec', '-rrhea', 'جریان، ترشح', 'amenorrhea', '💧')}${box(186, 32, '#c2413a', '#fde6e4', '-rrhagia', 'خونریزی شدید', 'menorrhagia', '🩸')}
      ${box(10, 126, '#8e6bd8', '#f3eafc', 'gravida', 'تعداد بارداری', 'G2', '🤰')}${box(186, 126, '#e8913a', '#fdeee3', 'para', 'تعداد زایمان', 'P1', '👶')}
      ${f(180, 228, 'men/o قاعدگی است و metr/o رحم؛ یک حرف، دو معنی', { size: 9.5, fill: MUTED, w: 700 })}`, 'واژه‌های همزاد');
  };

  A.hormones = () => {
    const m = nid();
    return svg(360, 250, `${title('هورمون‌های جنسی: فرمان از هیپوفیز')}
      <ellipse cx="180" cy="62" rx="40" ry="24" fill="#e8d7f7" stroke="#8e6bd8" stroke-width="1.4"/>${lab(180, 58, 'pituitary', 'هیپوفیز', { size: 10 })}
      ${arrow(m, 150, 86, 90, 140, '#8e6bd8', 2.4)}${arrow(m, 210, 86, 270, 140, '#8e6bd8', 2.4)}
      ${t(105, 110, 'FSH • LH', { size: 10.5, fill: '#6c4fd0', w: 900, sym: true })}${t(255, 110, 'FSH • LH', { size: 10.5, fill: '#6c4fd0', w: 900, sym: true })}
      <rect x="20" y="146" width="140" height="92" rx="14" fill="#fdf0f4"/><ellipse cx="90" cy="172" rx="26" ry="14" fill="${C.ova}" stroke="${C.ovaLine}"/>
      ${t(90, 200, 'ovary', { size: 10.5, w: 900 })}${t(90, 214, 'estrogen • progesterone', { size: 9, fill: '#a3366a', w: 800 })}${f(90, 229, 'استروژن و پروژسترون', { size: 9, fill: INK })}
      <rect x="200" y="146" width="140" height="92" rx="14" fill="#eef5fb"/><ellipse cx="270" cy="172" rx="16" ry="20" fill="${C.testis}" stroke="${C.testisLine}"/>
      ${t(270, 200, 'testis', { size: 10.5, w: 900 })}${t(270, 214, 'testosterone', { size: 9, fill: '#1f6fa5', w: 800 })}${f(270, 229, 'تستوسترون', { size: 9, fill: INK })}`, 'هورمون‌ها', marker(m, '#8e6bd8'));
  };

  /* ================= دنیای ۱: دستگاه تناسلی زنانه ================= */
  A['female-front'] = () => {
    const u = uterusFront(180, 78, 1.05);
    return svg(360, 300, `${title('رحم، لوله‌ها و تخمدان‌ها (نمای روبه‌رو)')}
      ${u.b}
      ${pin(180, 76, 120, 36)}${lab(80, 34, 'fundus', 'فوندوس (سقف رحم)', { size: 9.5 })}
      ${pin(296, 82, 300, 46)}${lab(320, 34, 'uterine tube', 'لوله رحم', { size: 9.5 })}
      ${pin(310, 128, 324, 162)}${lab(324, 174, 'fimbriae', 'فیمبریا', { size: 9.5 })}
      ${pin(276, 133, 270, 196)}${lab(276, 208, 'ovary', 'تخمدان', { size: 9.5 })}
      ${pin(180, 120, 92, 206)}${lab(52, 204, 'endometrium', 'آندومتر', { size: 9.5 })}
      ${pin(150, 140, 92, 170)}${lab(52, 166, 'myometrium', 'عضله رحم', { size: 9.5 })}
      ${pin(180, 196, 100, 246)}${lab(60, 244, 'cervix', 'دهانه رحم', { size: 9.5 })}
      ${pin(180, 262, 240, 270)}${lab(286, 266, 'vagina', 'واژن', { size: 9.5 })}`, 'رحم و ضمائم', u.d);
  };

  A['female-sagittal'] = () => {
    const s = femaleSag(180, 174, 1);
    return svg(360, 320, `${title('مقطع کناری لگن زن (رو به چپ)')}
      ${s.b}
      ${pin(114, 112, 66, 66)}${lab(46, 54, 'ovary', 'تخمدان', { size: 10 })}
      ${pin(196, 120, 226, 50)}${lab(196, 44, 'uterus', 'رحم', { size: 10 })}
      ${pin(110, 206, 40, 166)}${lab(48, 150, 'urinary bladder', 'مثانه', { size: 9.5 })}
      ${pin(72, 238, 40, 262)}${lab(48, 270, 'pubic bone', 'استخوان شرمگاهی', { size: 9.5 })}
      ${pin(170, 262, 150, 300)}${lab(132, 300, 'vagina', 'واژن', { size: 9.5 })}
      ${pin(198, 216, 300, 214)}${lab(312, 206, 'cervix', 'دهانه رحم', { size: 9.5 })}
      ${pin(252, 230, 300, 262)}${lab(312, 270, 'rectum', 'راست‌روده', { size: 9.5 })}
      ${pin(222, 186, 300, 146)}${lab(306, 128, 'rectouterine pouch', 'بن‌بست (cul-de-sac)', { size: 9 })}`, 'مقطع لگن زن', s.d);
  };

  A['uterine-wall'] = () => {
    return svg(360, 240, `${title('سه لایه دیواره رحم')}
      <rect x="20" y="40" width="200" height="34" fill="#f6c3cf"/><rect x="20" y="74" width="200" height="86" fill="${C.ut2}"/><rect x="20" y="160" width="200" height="40" fill="${C.endo}"/>
      ${[86, 100, 114, 128, 142].map(y => `<path d="M20 ${y} q50 -6 100 0 t100 0" stroke="#c4607d" stroke-width="1.4" fill="none" opacity=".6"/>`).join('')}
      ${[34, 64, 94, 124, 154, 184].map(x => `<path d="M${x} 200 q-4 -14 4 -26 q6 -8 0 -14" stroke="#d07a96" stroke-width="2" fill="none"/>`).join('')}
      <rect x="20" y="200" width="200" height="16" fill="#fff6f8"/>${f(120, 212, 'حفره رحم', { size: 9, fill: MUTED })}
      ${pin(210, 56, 240, 56)}${lab(298, 52, 'perimetrium', 'لایه بیرونی', { size: 10 })}
      ${pin(210, 116, 240, 116)}${lab(298, 112, 'myometrium', 'عضله رحم؛ انقباض زایمان', { size: 10 })}
      ${pin(210, 180, 240, 180)}${lab(298, 176, 'endometrium', 'پوشش درونی؛ هر ماه می‌ریزد', { size: 10 })}
      ${f(180, 234, 'پیشوند peri یعنی پیرامون، myo عضله و endo درون', { size: 9, fill: MUTED, w: 700 })}`, 'دیواره رحم');
  };

  A['ovary-cycle'] = () => {
    const m = nid();
    const fol = (x, y, r, k) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff3e3" stroke="${C.ovaLine}" stroke-width="1.2"/>${k ? `<circle cx="${x + r * 0.3}" cy="${y - r * 0.2}" r="${r * 0.3}" fill="#fbd3dd" stroke="${C.utLine}" stroke-width=".8"/>` : ''}`;
    return svg(360, 258, `${title('تخمدان: از فولیکول تا جسم زرد')}<g transform="translate(0 18)">
      <ellipse cx="180" cy="120" rx="160" ry="78" fill="${C.ova}" stroke="${C.ovaLine}" stroke-width="1.6"/>
      ${fol(64, 120, 9, 1)}${fol(108, 90, 15, 1)}${fol(168, 70, 24, 1)}
      <path d="M232 52 L246 34" stroke="${C.ovaLine}" stroke-width="2"/>${ovum(258, 30, 9)}
      <ellipse cx="270" cy="128" rx="30" ry="24" fill="#f6d36a" stroke="#c99a1d" stroke-width="1.4"/>
      <ellipse cx="160" cy="160" rx="14" ry="10" fill="#ece3d6" stroke="#b7a68f"/>
      ${curve(m, 'M76 110 C86 98 94 94 100 92', '#a3366a', 1.6)}${curve(m, 'M122 84 C134 76 140 74 146 72', '#a3366a', 1.6)}${curve(m, 'M190 82 C210 96 236 110 246 116', '#a3366a', 1.6)}
      ${lab(80, 166, 'primary follicle', 'فولیکول اولیه', { size: 9 })}${lab(196, 118, 'graafian follicle', 'فولیکول بالغ', { size: 9 })}
      ${lab(300, 70, 'ovulation', 'تخمک‌گذاری', { size: 9.5, fill: '#a3366a' })}
      ${lab(282, 168, 'corpus luteum', 'جسم زرد؛ پروژسترون', { size: 9 })}${lab(160, 188, 'corpus albicans', 'جسم سفید', { size: 8.5 })}</g>
      ${f(180, 250, 'اگر لقاح نشود، جسم زرد پس از حدود ۱۴ روز از بین می‌رود و قاعدگی شروع می‌شود', { size: 8.8, fill: MUTED, w: 700 })}`, 'چرخه تخمدان', marker(m, '#a3366a'));
  };

  A['menstrual-cycle'] = () => {
    const X = d => 30 + d * 10.5;
    return svg(360, 262, `${title('چرخه قاعدگی ۲۸ روزه')}
      <path d="M${X(0)} 110 C${X(2)} 110 ${X(4)} 120 ${X(5)} 120 C${X(9)} 110 ${X(13)} 92 ${X(14)} 88 C${X(18)} 76 ${X(24)} 64 ${X(26)} 70 C${X(27)} 84 ${X(28)} 104 ${X(28)} 110" fill="none" stroke="${C.ut2}" stroke-width="2"/>
      <path d="M${X(0)} 110 L${X(5)} 120 L${X(5)} 140 L${X(0)} 140Z" fill="#c2413a" opacity=".55"/>
      <path d="M${X(5)} 120 C${X(9)} 110 ${X(13)} 92 ${X(14)} 88 C${X(18)} 76 ${X(24)} 64 ${X(26)} 70 C${X(27)} 84 ${X(28)} 104 ${X(28)} 110 L${X(28)} 140 L${X(5)} 140Z" fill="${C.endo}"/>
      <path d="M${X(0)} 140 H${X(28)}" stroke="${LINE}" stroke-width="1.2"/>
      ${[0, 5, 14, 28].map(d => `<path d="M${X(d)} 140 v5" stroke="${LINE}"/>${t(X(d), 156, String(d), { size: 9, fill: MUTED, sym: true })}`).join('')}
      <path d="M${X(14)} 40 V140" stroke="#a3366a" stroke-width="1.4" stroke-dasharray="4 3"/>${ovum(X(14), 48, 7)}${t(X(14) + 14, 40, 'ovulation', { size: 9.5, fill: '#a3366a', anchor: 'start', w: 900 })}
      ${f(X(14) + 14, 54, 'تخمک‌گذاری، روز ۱۴', { size: 8.5, anchor: 'start', fill: INK })}
      ${t(X(21), 108, 'endometrium', { size: 9, fill: '#b84e6e', w: 800 })}
      ${[[X(2.5), 'menstrual', 'قاعدگی', '#c2413a'], [X(9.5), 'proliferative', 'تکثیری (فولیکولی)', '#3d6fd6'], [X(21), 'secretory', 'ترشحی (لوتئال)', '#17a398']].map(p => `${t(p[0], 184, p[1], { size: 9.5, fill: p[3], w: 900 })}${f(p[0], 198, p[2], { size: 8.5, fill: INK })}`).join('')}
      ${f(180, 226, 'FSH فولیکول را رشد می‌دهد؛ اوج LH تخمک‌گذاری را راه می‌اندازد', { size: 9, fill: MUTED, w: 700 })}
      ${f(180, 244, 'استروژن پوشش رحم را می‌سازد و پروژسترون آن را نگه می‌دارد', { size: 9, fill: MUTED, w: 700 })}`, 'چرخه قاعدگی');
  };

  A.vulva = () => {
    const sh = nid();
    return svg(360, 290, `${title('اندام تناسلی خارجی زن (شماتیک)')}
      <g filter="url(#${sh})">
      <path d="M180 34 C130 34 104 60 104 98 C104 150 130 210 180 236 C230 210 256 150 256 98 C256 60 230 34 180 34Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>
      <path d="M180 74 C150 80 140 120 146 160 C150 190 164 214 180 222 C196 214 210 190 214 160 C220 120 210 80 180 74Z" fill="#f2b7a6" stroke="${C.skinLine}" stroke-width="1.2"/>
      <path d="M180 92 C164 100 160 128 164 160 C166 180 172 196 180 204 C188 196 194 180 196 160 C200 128 196 100 180 92Z" fill="${C.muc}" stroke="${C.utLine}" stroke-width="1.2"/>
      </g>
      <ellipse cx="180" cy="98" rx="5" ry="7" fill="#e07894" stroke="${C.utLine}"/>
      <circle cx="180" cy="126" r="3" fill="#b84e6e"/>
      <ellipse cx="180" cy="160" rx="9" ry="16" fill="#c2506a" opacity=".75"/>
      <circle cx="166" cy="186" r="3" fill="#fff" stroke="${C.utLine}"/><circle cx="194" cy="186" r="3" fill="#fff" stroke="${C.utLine}"/>
      <circle cx="180" cy="258" r="7" fill="#c98a6a" stroke="${C.skinLine}"/>
      <path d="M180 228 V250" stroke="${C.skinLine}" stroke-dasharray="3 3"/>
      ${pin(180, 50, 280, 44)}${lab(310, 40, 'mons pubis', 'برجستگی شرمگاهی', { size: 9 })}
      ${pin(180, 98, 70, 70)}${lab(46, 64, 'clitoris', 'کلیتوریس', { size: 9.5 })}
      ${pin(180, 126, 70, 112)}${lab(44, 106, 'urethral orifice', 'سوراخ پیشابراه', { size: 9 })}
      ${pin(180, 160, 70, 160)}${lab(44, 154, 'vaginal orifice', 'دهانه واژن', { size: 9 })}
      ${pin(200, 140, 290, 110)}${lab(314, 104, 'labia minora', 'لب‌های کوچک', { size: 9 })}
      ${pin(232, 150, 290, 160)}${lab(314, 154, 'labia majora', 'لب‌های بزرگ', { size: 9 })}
      ${pin(194, 186, 290, 210)}${lab(314, 206, 'Bartholin glands', 'غدد بارتولن', { size: 9 })}
      ${pin(180, 240, 70, 240)}${lab(46, 236, 'perineum', 'پرینه', { size: 9.5 })}${pin(180, 258, 280, 268)}${lab(312, 264, 'anus', 'مقعد', { size: 9 })}`, 'فرج', shadow(sh));
  };

  A.breast = () => {
    const sh = nid();
    return svg(360, 284, `${title('پستان: مقطع کناری')}
      <path d="M60 40 V250" stroke="${C.boneLine}" stroke-width="6" opacity=".5"/>
      <path d="M70 40 C70 40 70 250 70 250" stroke="#d65a52" stroke-width="12" opacity=".5"/>
      <g filter="url(#${sh})"><path d="M80 50 C200 60 250 110 250 150 C250 196 200 236 80 246Z" fill="#f8e1c8" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      ${[[150, 100], [176, 130], [150, 170], [182, 192], [128, 140]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="14" fill="#f4b0c0" stroke="${C.utLine}" stroke-width="1"/><path d="M${p[0] + 10} ${p[1] + 4} C${p[0] + 40} ${p[1] + (150 - p[1]) * 0.4} 228 148 246 150" stroke="${C.utLine}" stroke-width="1.6" fill="none"/>`).join('')}
      <ellipse cx="250" cy="150" rx="6" ry="14" fill="#c98a6a"/><path d="M244 132 C240 140 240 160 244 168" stroke="#a8735a" stroke-width="5" fill="none"/>
      ${pin(150, 100, 150, 64)}${lab(170, 46, 'lobe (mammary gland)', 'لوب غده شیری', { size: 9.5 })}
      ${pin(220, 145, 300, 100)}${lab(310, 86, 'lactiferous duct', 'مجرای شیری', { size: 9.5 })}
      ${pin(252, 150, 310, 160)}${lab(320, 172, 'nipple', 'نوک پستان', { size: 9.5 })}
      ${pin(242, 170, 290, 220)}${lab(310, 226, 'areola', 'هاله', { size: 9.5 })}
      ${pin(100, 210, 120, 260)}${lab(154, 262, 'adipose tissue', 'بافت چربی', { size: 9 })}
      ${t(40, 120, 'ribs', { size: 9, fill: MUTED, anchor: 'middle' })}${f(40, 134, 'دنده', { size: 8.5 })}`, 'پستان', shadow(sh));
  };

  /* ================= دنیای ۲: دستگاه تناسلی مردانه ================= */
  A['male-sagittal'] = () => {
    const m = maleSag(190, 150, 1);
    return svg(360, 310, `${title('مقطع کناری لگن مرد (رو به چپ)')}
      ${m.b}
      ${pin(160, 120, 80, 46)}${lab(56, 42, 'urinary bladder', 'مثانه', { size: 9.5 })}
      ${pin(224, 132, 270, 46)}${lab(300, 42, 'seminal vesicle', 'کیسه منی', { size: 9.5 })}
      ${pin(176, 170, 70, 110)}${lab(46, 102, 'prostate gland', 'پروستات', { size: 9.5 })}
      ${pin(198, 170, 300, 110)}${lab(310, 100, 'vas deferens', 'مجرای دفران', { size: 9.5 })}
      ${pin(118, 230, 46, 170)}${lab(40, 160, 'urethra', 'پیشابراه', { size: 9.5 })}
      ${pin(70, 254, 46, 220)}${lab(40, 210, 'penis', 'آلت', { size: 9.5 })}
      ${pin(140, 268, 70, 296)}${lab(110, 296, 'testis', 'بیضه', { size: 9.5 })}
      ${pin(154, 262, 280, 262)}${lab(300, 256, 'epididymis', 'اپیدیدیم', { size: 9.5 })}
      ${pin(162, 282, 280, 296)}${lab(300, 294, 'scrotum', 'کیسه بیضه', { size: 9 })}
      ${pin(266, 210, 310, 180)}${lab(320, 166, 'rectum', 'راست‌روده', { size: 9.5 })}`, 'مقطع لگن مرد', m.d);
  };

  A.testis = () => {
    const sh = nid();
    return svg(360, 280, `${title('بیضه و اپیدیدیم (برش)')}
      <g filter="url(#${sh})"><ellipse cx="160" cy="160" rx="96" ry="100" fill="#f3dccb" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <ellipse cx="150" cy="168" rx="70" ry="82" fill="${C.testis}" stroke="${C.testisLine}" stroke-width="1.6"/>
      ${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${100 + i * 20} ${100 + (i % 2) * 6} q-10 20 0 40 q10 20 0 40 q-10 20 0 34" stroke="#d9876a" stroke-width="2.4" fill="none"/>`).join('')}
      <path d="M210 92 C236 104 238 140 226 170 C216 200 216 228 228 250 C236 264 226 272 214 262" stroke="#c97d62" stroke-width="16" fill="none" stroke-linecap="round"/>
      <path d="M220 96 C234 60 236 40 240 24" stroke="${C.ductLine}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M150 168 L200 120" stroke="#b46a4c" stroke-width="2" stroke-dasharray="3 2"/>
      ${pin(120, 150, 40, 70)}${lab(46, 56, 'seminiferous tubules', 'لوله‌های اسپرم‌ساز', { size: 9.5 })}
      ${pin(232, 200, 290, 210)}${lab(310, 200, 'epididymis', 'اپیدیدیم: بلوغ اسپرم', { size: 9.5 })}
      ${pin(238, 40, 290, 60)}${lab(310, 52, 'vas deferens', 'مجرای دفران', { size: 9.5 })}
      ${pin(90, 230, 60, 262)}${lab(90, 262, 'testis (testicle)', 'بیضه', { size: 9.5 })}
      ${pin(170, 252, 250, 268)}${t(256, 272, 'scrotum • کیسه بیضه', { size: 9, anchor: 'start' })}`, 'بیضه', shadow(sh));
  };

  A['sperm-path'] = () => {
    const m = nid();
    const S = (x, y, en, fa, c, bg) => `<rect x="${x - 50}" y="${y - 20}" width="100" height="40" rx="12" fill="${bg}"/>${t(x, y - 2, en, { size: 9.5, fill: c, w: 900 })}${f(x, y + 12, fa, { size: 8.5, fill: INK })}`;
    return svg(360, 260, `${title('مسیر اسپرم: از بیضه تا بیرون')}
      ${S(70, 60, 'testis', 'بیضه: ساخت', '#c97d62', '#fdeee3')}${S(180, 60, 'epididymis', 'اپیدیدیم: بلوغ', '#c97d62', '#fdeee3')}${S(290, 60, 'vas deferens', 'مجرای دفران', '#1f6fa5', '#eef5fb')}
      ${S(290, 140, 'ejaculatory duct', 'مجرای انزالی', '#1f6fa5', '#eef5fb')}${S(180, 140, 'urethra', 'پیشابراه', '#1f6fa5', '#eef5fb')}${S(70, 140, 'outside', 'بیرون (انزال)', '#3f8a05', '#e7f9d8')}
      ${arrow(m, 122, 60, 128, 60, '#a3366a', 2.4)}${arrow(m, 232, 60, 238, 60, '#a3366a', 2.4)}${arrow(m, 290, 82, 290, 118, '#a3366a', 2.4)}${arrow(m, 238, 140, 232, 140, '#a3366a', 2.4)}${arrow(m, 128, 140, 122, 140, '#a3366a', 2.4)}
      <rect x="20" y="186" width="320" height="62" rx="12" fill="#f6f2fd"/>
      ${f(180, 206, 'مایع کمکی: کیسه‌های منی، پروستات و غدد کوپر', { size: 9.5, fill: INK, w: 800 })}
      ${t(180, 226, 'seminal vesicles + prostate + bulbourethral glands = semen', { size: 9, fill: '#6c4fd0', w: 800 })}
      ${f(180, 241, 'اسپرم + مایع این غدد = منی', { size: 8.5, fill: MUTED })}`, 'مسیر اسپرم', marker(m, '#a3366a'));
  };

  A['sperm-cell'] = () => {
    return svg(360, 214, `${title('اسپرم و تخمک: دو گامت')}
      <g transform="translate(40 96) scale(3)"><ellipse cx="0" cy="0" rx="7" ry="5" fill="${C.duct}" stroke="${C.ductLine}" stroke-width=".6"/><ellipse cx="-1.5" cy="0" rx="4" ry="3" fill="#7fb2e5"/><rect x="7" y="-1.6" width="8" height="3.2" rx="1.4" fill="#e9c27a"/><path d="M15 0 c8 0 8 -5 16 -5 s8 5 16 5 s6 -4 10 -4" stroke="${C.ductLine}" stroke-width=".9" fill="none"/></g>
      ${pin(30, 96, 30, 150)}${lab(40, 162, 'head', 'سر (DNA)', { size: 9.5 })}${pin(72, 96, 92, 150)}${lab(100, 162, 'midpiece', 'بخش میانی (انرژی)', { size: 9.5 })}
      ${pin(140, 86, 150, 50)}${lab(150, 40, 'tail (flagellum)', 'دم: شنا', { size: 9.5 })}
      ${ovum(290, 100, 34)}${lab(290, 170, 'ovum', 'تخمک: بزرگ‌ترین سلول', { size: 9.5 })}
      ${f(180, 208, 'هر دو ۲۳ کروموزوم دارند؛ با لقاح ۴۶ کروموزوم کامل می‌شود', { size: 9, fill: MUTED, w: 700 })}`, 'گامت‌ها');
  };

  A['penis-xs'] = () => {
    const sh = nid();
    return svg(360, 250, `${title('برش عرضی آلت')}
      <g filter="url(#${sh})"><ellipse cx="160" cy="130" rx="96" ry="88" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <ellipse cx="160" cy="128" rx="84" ry="76" fill="#f3e2d4"/>
      <ellipse cx="124" cy="110" rx="34" ry="30" fill="#e8a0a6" stroke="#b84e6e" stroke-width="1.4"/><ellipse cx="196" cy="110" rx="34" ry="30" fill="#e8a0a6" stroke="#b84e6e" stroke-width="1.4"/>
      <circle cx="124" cy="110" r="4" fill="${C.art}"/><circle cx="196" cy="110" r="4" fill="${C.art}"/>
      <ellipse cx="160" cy="174" rx="26" ry="20" fill="#f2b7c0" stroke="#b84e6e" stroke-width="1.2"/><circle cx="160" cy="174" r="5" fill="#fff" stroke="${C.ductLine}"/>
      <circle cx="160" cy="66" r="5" fill="${C.vein}"/><circle cx="146" cy="70" r="3.4" fill="${C.art}"/><circle cx="174" cy="70" r="3.4" fill="${C.art}"/>
      ${pin(124, 110, 40, 70)}${lab(44, 56, 'corpora cavernosa', 'اجسام غاری', { size: 9.5 })}
      ${pin(170, 182, 260, 220)}${lab(300, 218, 'corpus spongiosum', 'جسم اسفنجی', { size: 9.5 })}
      ${pin(160, 174, 60, 210)}${lab(46, 214, 'urethra', 'پیشابراه', { size: 9.5 })}
      ${pin(160, 66, 260, 40)}${lab(304, 34, 'dorsal vein & arteries', 'سیاهرگ و سرخرگ‌ها', { size: 9 })}
      ${f(300, 128, 'نعوظ: پر شدن', { size: 9, fill: MUTED })}${f(300, 142, 'اجسام غاری از خون', { size: 9, fill: MUTED })}`, 'برش آلت', shadow(sh));
  };

  /* ================= دنیای ۳: بارداری و زایمان ================= */
  A.fertilization = () => {
    const u = uterusFront(180, 70, 1.05, { vagina: false });
    return svg(360, 260, `${title('لقاح و لانه‌گزینی')}
      ${u.b}
      ${ovum(298, 132, 6)}${sperm(270, 92, 0.6, 160)}${sperm(276, 104, 0.6, 175)}
      <circle cx="252" cy="78" r="7" fill="#fbd3dd" stroke="${C.utLine}"/><circle cx="214" cy="80" r="8" fill="#fbd3dd" stroke="${C.utLine}"/>
      ${[0, 1, 2, 3].map(i => `<circle cx="${210 + (i % 2) * 4}" cy="${78 + Math.floor(i / 2) * 4}" r="2.6" fill="#f4a6b8" stroke="${C.utLine}" stroke-width=".5"/>`).join('')}
      <circle cx="186" cy="104" r="9" fill="#f8c0cf" stroke="${C.utLine}"/>
      <path d="M298 132 C290 110 270 92 252 80 C236 74 222 76 214 80 C200 88 192 96 186 104" stroke="#a3366a" stroke-width="1.6" fill="none" stroke-dasharray="4 3"/>
      ${pin(298, 132, 320, 180)}${lab(320, 192, 'ovulation', 'تخمک‌گذاری', { size: 9.5 })}
      ${pin(266, 86, 300, 40)}${lab(316, 34, 'fertilization', 'لقاح در لوله', { size: 9.5, fill: '#a3366a' })}
      ${pin(252, 78, 220, 36)}${lab(186, 34, 'zygote', 'زیگوت', { size: 9.5 })}
      ${pin(186, 104, 80, 200)}${lab(70, 212, 'implantation', 'لانه‌گزینی در آندومتر (روز ۶ تا ۷)', { size: 9.5 })}
      ${f(180, 252, 'hCG از رویان ترشح می‌شود؛ اساس آزمایش بارداری', { size: 9, fill: MUTED, w: 700 })}`, 'لقاح', u.d);
  };

  A['pregnant-uterus'] = () => {
    const sh = nid();
    return svg(360, 300, `${title('رحم باردار: جنین، جفت و کیسه آب')}
      <g filter="url(#${sh})"><path d="M180 30 C270 30 300 110 290 170 C282 226 240 262 194 270 L194 292 L166 292 L166 270 C120 262 78 226 70 170 C60 110 90 30 180 30Z" fill="${C.ut}" stroke="${C.utLine}" stroke-width="1.6"/></g>
      <path d="M180 44 C256 44 280 112 272 168 C264 220 228 252 180 256 C132 252 96 220 88 168 C80 112 104 44 180 44Z" fill="${C.fluid}" stroke="#a9c7e4" stroke-width="2"/>
      <path d="M232 50 C268 66 280 100 276 128 C256 116 236 92 226 64Z" fill="${C.plac}" stroke="#8a2d4a" stroke-width="1.2"/>
      <path d="M244 96 C210 110 216 150 190 160" stroke="#c97da0" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M244 96 C210 110 216 150 190 160" stroke="#f2d0e0" stroke-width="2.4" fill="none" stroke-dasharray="4 3"/>
      ${fetus(170, 200, 1.6)}
      ${pin(256, 84, 300, 40)}${lab(316, 34, 'placenta', 'جفت', { size: 10 })}
      ${pin(214, 132, 320, 110)}${lab(320, 96, 'umbilical cord', 'بند ناف', { size: 9.5 })}
      ${pin(120, 120, 46, 60)}${lab(46, 46, 'amniotic fluid', 'مایع آمنیوتیک', { size: 9.5 })}
      ${pin(90, 180, 40, 200)}${lab(40, 212, 'amnion', 'کیسه آب', { size: 9.5 })}
      ${pin(160, 236, 90, 280)}${lab(60, 278, 'fetus', 'جنین', { size: 9.5 })}
      ${pin(180, 284, 270, 284)}${lab(300, 278, 'cervix', 'دهانه رحم', { size: 9.5 })}`, 'رحم باردار', shadow(sh));
  };

  A.placenta = () => {
    const m = nid(), n = nid();
    return svg(360, 230, `${title('جفت: تبادل بین مادر و جنین')}
      <rect x="20" y="40" width="150" height="150" rx="16" fill="#fde6e4"/>${lab(95, 60, 'mother', 'خون مادر', { size: 10.5, fill: '#c2413a' })}
      <rect x="190" y="40" width="150" height="150" rx="16" fill="#eef5fb"/>${lab(265, 60, 'fetus', 'خون جنین', { size: 10.5, fill: '#1f6fa5' })}
      ${arrow(m, 120, 104, 236, 104, '#c2413a', 2.6)}${f(180, 96, 'اکسیژن و غذا', { size: 9.5, fill: '#c2413a', w: 800 })}
      ${arrow(n, 236, 150, 120, 150, '#1f6fa5', 2.6)}${f(180, 170, 'دی‌اکسید کربن و مواد زائد', { size: 9.5, fill: '#1f6fa5', w: 800 })}
      ${f(180, 210, 'خون مادر و جنین مستقیم مخلوط نمی‌شوند؛ تبادل از دیواره مویرگ‌هاست', { size: 9, fill: MUTED, w: 700 })}
      ${f(180, 224, 'جفت هورمون hCG، استروژن و پروژسترون هم می‌سازد', { size: 9, fill: MUTED, w: 700 })}`, 'جفت', marker(m, '#c2413a') + marker(n, '#1f6fa5'));
  };

  A['labor-stages'] = () => {
    const P = (x, en, fa, sub, inner) => `<rect x="${x}" y="34" width="108" height="150" rx="14" fill="#fdf0f4"/>${inner}${lab(x + 54, 204, en, fa, { size: 10 })}${f(x + 54, 232, sub, { size: 8.5 })}`;
    return svg(360, 248, `${title('سه مرحله زایمان')}
      ${P(8, 'stage 1: dilation', 'باز شدن دهانه رحم', 'تا ۱۰ سانتی‌متر', `<ellipse cx="62" cy="104" rx="38" ry="52" fill="${C.ut}" stroke="${C.utLine}"/>${fetus(62, 112, 0.9)}<path d="M50 154 h24" stroke="${C.utLine}" stroke-width="3"/>`)}
      ${P(126, 'stage 2: expulsion', 'خروج نوزاد', 'از کامل شدن دیلاتاسیون تا تولد', `<ellipse cx="180" cy="90" rx="34" ry="40" fill="${C.ut}" stroke="${C.utLine}"/>${fetus(180, 120, 0.8)}<path d="M164 150 L196 150" stroke="${C.utLine}" stroke-width="3"/>`)}
      ${P(244, 'stage 3: placental', 'خروج جفت', 'جفت و پرده‌ها (afterbirth)', `<ellipse cx="298" cy="90" rx="26" ry="32" fill="${C.ut}" stroke="${C.utLine}"/><ellipse cx="298" cy="150" rx="22" ry="12" fill="${C.plac}"/><path d="M298 122 V138" stroke="#c97da0" stroke-width="3"/>`)}`, 'مراحل زایمان');
  };

  A.presentations = () => {
    const U = (x, rot, en, fa, c) => `<ellipse cx="${x}" cy="118" rx="52" ry="72" fill="${C.ut}" stroke="${C.utLine}" stroke-width="1.4"/><ellipse cx="${x}" cy="118" rx="44" ry="64" fill="${C.fluid}"/><g transform="rotate(${rot} ${x} 118)">${fetus(x, 128, 1.1)}</g><path d="M${x - 10} 190 h20" stroke="${C.utLine}" stroke-width="4"/>${lab(x, 216, en, fa, { size: 10, fill: c })}`;
    return svg(360, 256, `${title('نمایش جنین: سر یا باسن؟')}
      ${U(90, 180, 'cephalic (vertex)', 'نمایش سر؛ طبیعی', '#3f8a05')}${U(270, 0, 'breech', 'نمایش باسن', '#c2413a')}
      ${f(180, 250, 'سر جنین باید رو به دهانه رحم (پایین) باشد', { size: 9, fill: MUTED, w: 700 })}`, 'نمایش جنین');
  };

  A.trimesters = () => {
    const X = w => 22 + w * 7.6;
    return svg(360, 200, `${title('سه‌ماهه‌های بارداری (۴۰ هفته از LMP)')}
      <rect x="${X(0)}" y="60" width="${X(14) - X(0)}" height="40" rx="8" fill="#fde6ec"/><rect x="${X(14)}" y="60" width="${X(28) - X(14)}" height="40" rx="8" fill="#fdf3dc"/><rect x="${X(28)}" y="60" width="${X(40) - X(28)}" height="40" rx="8" fill="#e1f6f3"/>
      ${f((X(0) + X(14)) / 2, 85, 'سه‌ماهه اول', { size: 10, fill: '#a3366a', w: 800 })}${f((X(14) + X(28)) / 2, 85, 'سه‌ماهه دوم', { size: 10, fill: '#a87a12', w: 800 })}${f((X(28) + X(40)) / 2, 85, 'سه‌ماهه سوم', { size: 10, fill: '#0f7a71', w: 800 })}
      ${[0, 8, 14, 28, 37, 40].map(w => `<path d="M${X(w)} 100 v8" stroke="${LINE}"/>${t(X(w), 122, String(w), { size: 9.5, fill: MUTED, sym: true })}`).join('')}
      ${t(X(4), 46, 'embryo', { size: 9.5, fill: '#b84e6e', w: 800 })}${t(X(24), 46, 'fetus', { size: 9.5, fill: '#b84e6e', w: 800 })}
      <path d="M${X(8)} 40 V60" stroke="#b84e6e" stroke-dasharray="3 2"/>
      <rect x="${X(37)}" y="134" width="${X(42) - X(37)}" height="18" rx="5" fill="#bfe8c4"/>${t(X(39.5), 147, 'term', { size: 9, fill: '#3f8a05', w: 900 })}
      ${f(180, 176, 'تا هفته ۸ «رویان» (embryo) و از هفته ۹ «جنین» (fetus)', { size: 9.5, fill: INK, w: 700 })}
      ${f(180, 192, 'ترم: ۳۷ تا ۴۲ هفته؛ پیش از ۳۷ هفته نارس (preterm)', { size: 9, fill: MUTED })}`, 'سه‌ماهه‌ها');
  };

  A['gravida-para'] = () => {
    const B = (x, c, bg, big, en, fa) => `<rect x="${x}" y="40" width="160" height="112" rx="16" fill="${bg}"/>${t(x + 80, 84, big, { size: 30, fill: c, w: 900, sym: true })}${t(x + 80, 112, en, { size: 10.5, fill: c, w: 900 })}${f(x + 80, 132, fa, { size: 9.5, fill: INK, w: 700 })}`;
    return svg(360, 230, `${title('G و P: تعداد بارداری و زایمان')}
      ${B(12, '#8e6bd8', '#f3eefc', 'G2', 'gravida 2', 'دو بار باردار شده')}${B(188, '#e8913a', '#fdeee3', 'P1', 'para 1', 'یک زایمان زنده‌ماندنی')}
      ${f(180, 178, 'پرونده Abigail: هفته ۳۹ بارداری، با G2 و P1', { size: 9.5, fill: INK, w: 800 })}
      ${f(180, 200, 'primi- نخستین، multi- چند، nulli- هیچ', { size: 9, fill: MUTED, w: 700 })}
      ${f(180, 218, 'primigravida: نخست‌باردار • nullipara: نزاییده', { size: 9, fill: MUTED, w: 700 })}`, 'G و P');
  };

  A.apgar = () => {
    const rows = [['A', 'Appearance', 'رنگ پوست'], ['P', 'Pulse', 'ضربان قلب'], ['G', 'Grimace', 'پاسخ رفلکسی'], ['A', 'Activity', 'تون عضله'], ['R', 'Respiration', 'تنفس']];
    return svg(360, 260, `${title('نمره آپگار نوزاد (۰ تا ۱۰)')}
      ${rows.map((r, i) => `<rect x="20" y="${36 + i * 38}" width="320" height="32" rx="9" fill="${i % 2 ? '#fdf0f4' : '#fff6f8'}"/><circle cx="42" cy="${52 + i * 38}" r="12" fill="#b8457a"/>${t(42, 56.5 + i * 38, r[0], { size: 12, fill: '#fff', w: 900, sym: true })}${t(64, 56 + i * 38, r[1], { size: 10.5, anchor: 'start', w: 800 })}${f(326, 56 + i * 38, r[2], { size: 9.5, anchor: 'end', fill: INK })}`).join('')}
      ${f(180, 244, 'هر مورد ۰ تا ۲؛ در دقیقه ۱ و ۵ پس از تولد. ۷ تا ۱۰ طبیعی است', { size: 9, fill: MUTED, w: 700 })}`, 'آپگار');
  };

  /* ================= دنیای ۴: بیماری‌ها و عفونت‌های آمیزشی ================= */
  A['menstrual-disorders'] = () => {
    const c2 = (x, y, ic, en, fa, sub, bg) => card(x, y, 108, 92, bg, ic, en, fa, sub);
    return svg(360, 226, `${title('اختلال‌های قاعدگی')}
      ${c2(8, 30, '⛔', 'amenorrhea', 'نبود قاعدگی', 'پیشوند a یعنی بدون', '#f3eefc')}
      ${c2(126, 30, '😣', 'dysmenorrhea', 'قاعدگی دردناک', 'پیشوند dys یعنی دردناک', '#fdeee3')}
      ${c2(244, 30, '🩸', 'menorrhagia', 'خونریزی شدید', 'پسوند rrhagia: خونریزی', '#fde6e4')}
      ${c2(67, 128, '📆', 'metrorrhagia', 'خونریزی بین دوره‌ها', 'ریشه metr یعنی رحم', '#e2ecfb')}
      ${c2(185, 128, '💧', 'oligomenorrhea', 'قاعدگی کم و دیر', 'ریشه olig یعنی کم', '#e1f6f3')}`, 'اختلال‌های قاعدگی');
  };

  A['uterine-disorders'] = () => {
    const u = uterusFront(180, 70, 1.05, { vagina: false });
    return svg(360, 260, `${title('بیماری‌های رحم و تخمدان')}
      ${u.b}
      <circle cx="150" cy="96" r="13" fill="#e9b4a0" stroke="#a8735a" stroke-width="1.4"/><circle cx="214" cy="120" r="10" fill="#e9b4a0" stroke="#a8735a" stroke-width="1.4"/>
      <circle cx="292" cy="128" r="16" fill="#e2f1fb" stroke="${C.fluidLine}" stroke-width="1.6"/>
      ${[[70, 150], [84, 162], [112, 170], [250, 172]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3.6" fill="#8e2d4a"/>`).join('')}
      <ellipse cx="180" cy="186" rx="5" ry="8" fill="#d65a7a" stroke="#8a2d4a"/>
      ${pin(150, 96, 60, 52)}${lab(48, 40, 'leiomyoma (fibroid)', 'فیبروم', { size: 9.5 })}
      ${pin(292, 128, 320, 60)}${lab(318, 46, 'ovarian cyst', 'کیست تخمدان', { size: 9.5 })}
      ${pin(84, 162, 50, 210)}${lab(54, 222, 'endometriosis', 'آندومتر بیرون از رحم', { size: 9.5 })}
      ${pin(180, 186, 260, 224)}${lab(296, 222, 'cervical polyp', 'پولیپ دهانه رحم', { size: 9.5 })}`, 'بیماری‌های رحم', u.d);
  };

  A.prolapse = () => {
    const P = (x, en, fa, extra) => `<rect x="${x}" y="34" width="108" height="150" rx="14" fill="#fdf0f4"/>
      <path d="M${x + 28} 54 V170" stroke="${C.muc}" stroke-width="16" stroke-linecap="round"/>
      ${extra}${lab(x + 54, 204, en, fa, { size: 10 })}`;
    return svg(360, 254, `${title('افتادگی‌ها: رحم، مثانه، راست‌روده')}
      ${P(8, 'uterine prolapse', 'افتادگی رحم', `<ellipse cx="44" cy="${150}" rx="18" ry="24" fill="${C.ut}" stroke="${C.utLine}"/><path d="M36 80 L44 126" stroke="${C.utLine}" stroke-width="2" stroke-dasharray="3 3"/>${t(78, 90, '↓', { size: 22, fill: '#c2413a' })}`)}
      ${P(126, 'cystocele', 'افتادگی مثانه', `<ellipse cx="184" cy="96" rx="28" ry="24" fill="${C.blad}" stroke="${C.bladLine}"/><path d="M164 112 C150 126 150 140 160 150" fill="${C.blad}" stroke="${C.bladLine}" stroke-width="1.4"/>`)}
      ${P(244, 'rectocele', 'بیرون‌زدگی راست‌روده', `<path d="M320 50 C324 100 322 140 316 176" stroke="${C.rect}" stroke-width="20" fill="none" stroke-linecap="round"/><path d="M306 126 C284 130 280 146 290 156 C298 150 304 142 306 136" fill="${C.rect}" stroke="${C.rectLine}" stroke-width="1.2"/>`)}
      ${f(180, 248, 'پسوند ‎-cele‎ یعنی فتق یا بیرون‌زدگی؛ درمان: colporrhaphy', { size: 9, fill: MUTED, w: 700 })}`, 'افتادگی‌ها');
  };

  A['scrotal-disorders'] = () => {
    const S = (x, en, fa, inner) => `<rect x="${x}" y="34" width="80" height="140" rx="14" fill="#eef5fb"/><path d="M${x + 40} 44 V86" stroke="${C.ductLine}" stroke-width="4"/>${inner}${lab(x + 40, 196, en, fa, { size: 9.5 })}`;
    const T = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="17" ry="22" fill="${C.testis}" stroke="${C.testisLine}" stroke-width="1.3"/><path d="M${x + 14} ${y - 14} C${x + 22} ${y - 4} ${x + 22} ${y + 8} ${x + 14} ${y + 16}" stroke="#c97d62" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    return svg(360, 232, `${title('اختلال‌های کیسه بیضه')}
      ${S(6, 'normal', 'طبیعی', T(46, 118))}
      ${S(94, 'hydrocele', 'آب‌آوردگی', `<ellipse cx="134" cy="122" rx="32" ry="38" fill="${C.fluid}" stroke="${C.fluidLine}" stroke-width="1.4"/>${T(134, 118)}`)}
      ${S(182, 'varicocele', 'سیاهرگ‌های گشاد', `${T(222, 130)}${[0, 1, 2].map(i => `<path d="M${214 + i * 6} 60 q-8 10 0 20 q8 10 0 20" stroke="${C.vein}" stroke-width="3" fill="none"/>`).join('')}`)}
      ${S(270, 'torsion', 'پیچ‌خوردگی (اورژانس)', `<path d="M310 86 c-10 6 10 12 0 18 c-10 6 10 12 0 18" stroke="${C.ductLine}" stroke-width="4" fill="none"/>${T(310, 140).replace(/fill="#f6c7a8"/, 'fill="#c88aa4"')}`)}
      ${f(180, 226, 'cryptorchidism: بیضه به کیسه نرسیده و در کانال اینگوینال مانده است', { size: 9, fill: MUTED, w: 700 })}`, 'کیسه بیضه');
  };

  A.bph = () => {
    const B = (x, big, en, fa, c) => `<ellipse cx="${x}" cy="84" rx="48" ry="40" fill="${C.blad}" stroke="${C.bladLine}" stroke-width="1.4"/>
      <ellipse cx="${x}" cy="${big ? 136 : 128}" rx="${big ? 40 : 26}" ry="${big ? 30 : 20}" fill="${C.pros}" stroke="${C.prosLine}" stroke-width="1.4"/>
      <path d="M${x} 118 V${big ? 196 : 186}" stroke="#fff" stroke-width="${big ? 3 : 7}"/><path d="M${x} 118 V${big ? 196 : 186}" stroke="${C.bladLine}" stroke-width="1" stroke-dasharray="3 2"/>
      ${lab(x, 214, en, fa, { size: 10, fill: c })}`;
    return svg(360, 252, `${title('بزرگی خوش‌خیم پروستات (BPH)')}
      ${B(90, false, 'normal prostate', 'پروستات طبیعی', '#3f8a05')}${B(270, true, 'BPH', 'پروستات بزرگ؛ پیشابراه تنگ', '#c2413a')}
      ${f(180, 246, 'نشانه‌ها: جریان ادرار ضعیف، تکرر شبانه (nocturia)، تخلیه ناکامل؛ درمان: TURP', { size: 8.8, fill: MUTED, w: 700 })}`, 'BPH');
  };

  A.ectopic = () => {
    const u = uterusFront(180, 70, 1.05, { vagina: false });
    return svg(360, 250, `${title('حاملگی خارج رحمی')}
      ${u.b}
      <circle cx="262" cy="80" r="11" fill="#f2c0cf" stroke="#c2413a" stroke-width="2"/><circle cx="262" cy="80" r="4" fill="#c2413a"/>
      <circle cx="290" cy="134" r="8" fill="#f2c0cf" stroke="#c2413a" stroke-width="1.6"/>
      <circle cx="180" cy="104" r="9" fill="#f8c0cf" stroke="#3f8a05" stroke-width="2"/>
      ${pin(262, 80, 300, 40)}${lab(316, 34, 'tubal pregnancy', 'در لوله (شایع‌ترین)', { size: 9.5, fill: '#c2413a' })}
      ${pin(290, 134, 320, 190)}${lab(320, 202, 'ovarian', 'روی تخمدان', { size: 9.5 })}
      ${pin(180, 104, 70, 190)}${lab(60, 202, 'normal implantation', 'لانه‌گزینی طبیعی', { size: 9.5, fill: '#3f8a05' })}
      ${f(180, 240, 'خطر حاملگی در لوله: پارگی لوله، خونریزی و درد شدید شکم', { size: 9, fill: MUTED, w: 700 })}`, 'حاملگی خارج رحمی', u.d);
  };

  A['placenta-problems'] = () => {
    const U = (x, kind, en, fa) => `<ellipse cx="${x}" cy="112" rx="56" ry="74" fill="${C.ut}" stroke="${C.utLine}" stroke-width="1.4"/><ellipse cx="${x}" cy="112" rx="48" ry="66" fill="${C.fluid}"/>${fetus(x, 104, 0.9)}
      ${kind === 'previa' ? `<path d="M${x - 30} 172 C${x - 10} 186 ${x + 10} 186 ${x + 30} 172 L${x + 24} 160 C${x + 8} 170 ${x - 8} 170 ${x - 24} 160Z" fill="${C.plac}"/>` : `<path d="M${x + 30} 54 C${x + 50} 70 ${x + 54} 100 ${x + 50} 120 L${x + 40} 116 C${x + 42} 96 ${x + 38} 76 ${x + 24} 62Z" fill="${C.plac}"/><path d="M${x + 48} 66 C${x + 56} 84 ${x + 58} 104 ${x + 54} 120" stroke="${C.blood}" stroke-width="5" fill="none"/>`}
      <path d="M${x - 8} 186 h16" stroke="${C.utLine}" stroke-width="4"/>${lab(x, 214, en, fa, { size: 10, fill: '#c2413a' })}`;
    return svg(360, 252, `${title('مشکلات جفت')}
      ${U(90, 'previa', 'placenta previa', 'جفت سرراهی: روی دهانه رحم')}${U(270, 'abruptio', 'abruptio placentae', 'جدا شدن زودرس جفت')}
      ${f(180, 246, 'جفت سرراهی: خونریزی بی‌درد • جدا شدن جفت: خونریزی دردناک و اورژانس', { size: 8.8, fill: MUTED, w: 700 })}`, 'مشکلات جفت');
  };

  A.sti = () => {
    const c2 = (x, y, ic, en, fa, sub, bg) => card(x, y, 108, 92, bg, ic, en, fa, sub);
    return svg(360, 226, `${title('عفونت‌های آمیزشی (STI)')}
      ${c2(8, 30, '🦠', 'chlamydia', 'کلامیدیا', 'باکتری؛ PID و ناباروری', '#fde6e4')}
      ${c2(126, 30, '🦠', 'gonorrhea', 'سوزاک (GC)', 'باکتری؛ ترشح چرکی', '#fdeee3')}
      ${c2(244, 30, '🦠', 'syphilis', 'سیفلیس', 'شانکر بی‌درد؛ VDRL', '#fdf3dc')}
      ${c2(8, 128, '🧬', 'genital herpes', 'تبخال تناسلی', 'ویروس HSV؛ تاول دردناک', '#f3eefc')}
      ${c2(126, 128, '🧬', 'HPV', 'زگیل تناسلی', 'سرطان دهانه رحم؛ واکسن', '#e2ecfb')}
      ${c2(244, 128, '🧬', 'HIV', 'ویروس نقص ایمنی', 'منجر به AIDS', '#e1f6f3')}`, 'عفونت‌های آمیزشی');
  };

  /* ================= دنیای ۵: تشخیص، درمان و پیشگیری ================= */
  A['pap-test'] = () => {
    const s = femaleSag(170, 150, 0.85);
    return svg(360, 280, `${title('پاپ‌اسمیر با اسپکولوم')}
      ${s.b}
      <path d="M60 300 L130 222 M74 304 L140 232" stroke="#9aa5ab" stroke-width="6" stroke-linecap="round"/>
      <path d="M150 210 L188 180" stroke="#5b6b73" stroke-width="3"/><path d="M186 176 l8 -4 l-2 8z" fill="#5b6b73"/>
      ${pin(110, 250, 44, 240)}${lab(40, 226, 'speculum', 'اسپکولوم', { size: 9.5 })}
      ${pin(188, 180, 300, 196)}${lab(310, 204, 'cervix', 'دهانه رحم', { size: 9.5 })}
      ${pin(170, 196, 280, 250)}${lab(300, 256, 'Pap smear', 'نمونه سلول‌های دهانه رحم', { size: 9.5, fill: '#a3366a' })}
      ${f(140, 42, 'برای یافتن زودهنگام دیسپلازی و سرطان دهانه رحم', { size: 9, fill: MUTED, w: 700 })}`, 'پاپ‌اسمیر', s.d);
  };

  A.mammography = () => {
    const sh = nid();
    return svg(360, 250, `${title('ماموگرافی: عکس اشعه ایکس پستان')}
      <rect x="40" y="56" width="150" height="16" rx="5" fill="#cfd8dc" stroke="#77868e"/><rect x="40" y="168" width="150" height="16" rx="5" fill="#cfd8dc" stroke="#77868e"/>
      <g filter="url(#${sh})"><path d="M40 72 C150 72 186 96 186 120 C186 144 150 168 40 168Z" fill="#f8e1c8" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <circle cx="132" cy="112" r="9" fill="#e9b4a0" stroke="#a8735a"/>
      <rect x="226" y="56" width="110" height="128" rx="10" fill="#111"/><path d="M226 72 C300 72 326 96 326 120 C326 144 300 168 226 168Z" fill="#5d646a"/><circle cx="292" cy="112" r="8" fill="#e9eef0"/>
      ${pin(132, 112, 120, 210)}${lab(120, 222, 'tumor', 'توده', { size: 9.5 })}${pin(292, 112, 292, 210)}${lab(292, 222, 'mammogram', 'تصویر: توده سفید', { size: 9.5 })}
      ${f(114, 48, 'پستان بین دو صفحه فشرده می‌شود', { size: 9, fill: MUTED })}`, 'ماموگرافی', shadow(sh));
  };

  A.amniocentesis = () => {
    const sh = nid();
    return svg(360, 270, `${title('آمنیوسنتز: نمونه مایع آمنیوتیک')}
      <g filter="url(#${sh})"><ellipse cx="170" cy="160" rx="110" ry="96" fill="${C.ut}" stroke="${C.utLine}" stroke-width="1.6"/></g>
      <ellipse cx="170" cy="160" rx="98" ry="84" fill="${C.fluid}"/>
      ${fetus(150, 178, 1.3)}
      <path d="M210 90 C236 92 254 104 262 120 L246 128 C238 114 226 106 206 102Z" fill="${C.plac}"/>
      <path d="M228 50 L206 120" stroke="#77868e" stroke-width="3"/><rect x="222" y="34" width="16" height="20" rx="3" fill="#cfd8dc" stroke="#77868e" transform="rotate(16 230 44)"/>
      <path d="M304 66 l-28 26" stroke="#5e9fc4" stroke-width="3" stroke-linecap="round"/><rect x="296" y="54" width="30" height="16" rx="5" fill="#e6eef2" stroke="#77868e" transform="rotate(-45 311 62)"/>
      ${pin(226, 54, 300, 100)}${lab(318, 108, 'needle', 'سوزن', { size: 9.5 })}
      ${pin(110, 120, 46, 60)}${lab(50, 46, 'amniotic fluid', 'مایع آمنیوتیک', { size: 9.5 })}
      ${pin(290, 80, 318, 160)}${lab(320, 172, 'ultrasound', 'هدایت با سونوگرافی', { size: 9 })}
      ${f(170, 266, 'برای آزمایش کروموزوم (مثل سندروم داون)؛ معمولاً هفته ۱۵ تا ۲۰', { size: 9, fill: MUTED, w: 700 })}`, 'آمنیوسنتز', shadow(sh));
  };

  A['hysterectomy-types'] = () => {
    const k = 0.42;
    const box = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fff" opacity=".8"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="#c2413a" stroke-width="1.6" stroke-dasharray="4 3"/>`;
    const U = cx => uterusFront(cx, 66, k);
    const a = U(62), b = U(180), c = U(298);
    return svg(360, 236, `${title('برداشتن اندام‌ها: چه چیزی حذف می‌شود؟')}
      ${a.b}${box(43, 60, 38, 60)}
      ${b.b}${box(161, 60, 38, 60)}${box(124, 58, 36, 32)}${box(200, 58, 36, 32)}
      ${c.b}<circle cx="292" cy="78" r="6" fill="#e9b4a0" stroke="#a8735a"/>${box(283, 69, 18, 18)}
      ${lab(62, 172, 'TAH', 'برداشتن رحم و دهانه', { size: 9.5, sym: true })}
      ${lab(180, 172, 'TAH + BSO', 'رحم + لوله‌ها و تخمدان‌ها', { size: 9.5, sym: true })}
      ${lab(298, 172, 'myomectomy', 'فقط فیبروم؛ رحم می‌ماند', { size: 9.5 })}
      ${f(180, 222, 'Case Study 16-1: خانم Naomi پس از خونریزی دوران یائسگی TAH و BSO شد', { size: 9, fill: MUTED, w: 700 })}`, 'هیسترکتومی', a.d + b.d + c.d);
  };

  A.sterilization = () => {
    const u = uterusFront(90, 76, 0.62, { vagina: false });
    return svg(360, 240, `${title('عقیم‌سازی دائمی: زنان و مردان')}
      <rect x="8" y="30" width="166" height="170" rx="16" fill="#fdf0f4"/><rect x="186" y="30" width="166" height="170" rx="16" fill="#eef5fb"/>
      ${u.b}
      ${[[44, 82], [136, 82]].map(p => `<path d="M${p[0] - 6} ${p[1] - 8} l12 16 M${p[0] + 6} ${p[1] - 8} l-12 16" stroke="#c2413a" stroke-width="3"/>`).join('')}
      <path d="M244 60 C232 100 236 130 248 150 M300 60 C312 100 308 130 296 150" stroke="${C.ductLine}" stroke-width="5" fill="none"/>
      <ellipse cx="250" cy="166" rx="15" ry="20" fill="${C.testis}" stroke="${C.testisLine}"/><ellipse cx="294" cy="166" rx="15" ry="20" fill="${C.testis}" stroke="${C.testisLine}"/>
      ${[[236, 104], [308, 104]].map(p => `<rect x="${p[0] - 8}" y="${p[1] - 6}" width="16" height="12" fill="#fff"/><path d="M${p[0] - 8} ${p[1] - 6} h16 M${p[0] - 8} ${p[1] + 6} h16" stroke="#c2413a" stroke-width="3"/>`).join('')}
      ${lab(91, 214, 'tubal ligation', 'بستن لوله‌های رحم', { size: 10, fill: '#a3366a' })}${lab(269, 214, 'vasectomy', 'بریدن مجرای دفران', { size: 10, fill: '#1f6fa5' })}`, 'عقیم‌سازی', u.d);
  };

  A.contraception = () => {
    const c2 = (x, y, ic, en, fa, sub, bg) => card(x, y, 108, 92, bg, ic, en, fa, sub);
    return svg(360, 226, `${title('روش‌های پیشگیری از بارداری')}
      ${c2(8, 30, '💊', 'oral contraceptive', 'قرص ضدبارداری', 'مهار تخمک‌گذاری', '#fde6ec')}
      ${c2(126, 30, '⚓', 'IUD', 'وسیله داخل رحمی', 'در رحم قرار می‌گیرد', '#f3eefc')}
      ${c2(244, 30, '🛡️', 'condom', 'کاندوم', 'پیشگیری از STI هم', '#e1f6f3')}
      ${c2(8, 128, '⭕', 'diaphragm', 'دیافراگم', 'روی دهانه رحم', '#fdeee3')}
      ${c2(126, 128, '🧴', 'spermicide', 'اسپرم‌کش', '‎-cide‎ = کشنده', '#e2ecfb')}
      ${c2(244, 128, '✂️', 'sterilization', 'عقیم‌سازی', 'بستن لوله یا وازکتومی', '#fdf3dc')}`, 'پیشگیری از بارداری');
  };

  A.cesarean = () => {
    const sh = nid();
    return svg(360, 266, `${title('سزارین (C-section)')}
      <g filter="url(#${sh})"><path d="M90 40 C60 80 56 160 80 210 L280 210 C304 160 300 80 270 40Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <ellipse cx="180" cy="124" rx="70" ry="64" fill="${C.ut}" stroke="${C.utLine}" stroke-width="1.4"/>
      ${fetus(180, 120, 1.05)}
      <path d="M130 186 Q180 196 230 186" stroke="#c2413a" stroke-width="3" fill="none" stroke-dasharray="6 4"/>
      <path d="M140 164 Q180 172 220 164" stroke="#8a2d4a" stroke-width="2" fill="none" stroke-dasharray="4 3"/>
      ${pin(230, 186, 300, 214)}${lab(296, 226, 'suprapubic incision', 'برش افقی بالای شرمگاه', { size: 9 })}
      ${pin(140, 164, 66, 214)}${lab(70, 226, 'lower uterine segment', 'برش بخش پایینی رحم', { size: 9 })}
      ${f(180, 258, 'پرونده Abigail: به علت CPD و دیسترس جنین، سزارین اورژانسی شد', { size: 9, fill: MUTED, w: 700 })}`, 'سزارین', shadow(sh));
  };

  A.turp = () => {
    const sh = nid();
    return svg(360, 240, `${title('TURP: برداشتن پروستات از راه پیشابراه')}
      <g filter="url(#${sh})"><ellipse cx="200" cy="80" rx="70" ry="48" fill="${C.blad}" stroke="${C.bladLine}" stroke-width="1.4"/></g>
      <ellipse cx="200" cy="140" rx="46" ry="30" fill="${C.pros}" stroke="${C.prosLine}" stroke-width="1.4"/>
      <path d="M200 118 V230" stroke="#fff" stroke-width="10"/>
      <path d="M200 112 L200 236" stroke="#5b6b73" stroke-width="5"/><path d="M196 112 l4 -10 l4 10z" fill="#5b6b73"/>
      ${[[178, 132], [222, 146], [186, 156]].map(p => `<path d="M${p[0]} ${p[1]} l8 -4 l-2 8z" fill="#e9b4a0" stroke="#b4703c"/>`).join('')}
      ${pin(200, 228, 120, 220)}${lab(70, 216, 'resectoscope', 'رزکتوسکوپ در پیشابراه', { size: 9.5 })}
      ${pin(240, 140, 300, 160)}${lab(310, 172, 'prostate', 'بافت اضافه تراشیده می‌شود', { size: 9 })}
      ${pin(200, 64, 300, 60)}${lab(310, 50, 'bladder', 'مثانه', { size: 9.5 })}
      ${f(90, 150, 'پرونده Dexter:', { size: 9, fill: MUTED, w: 700 })}${f(90, 164, 'درمان BPH با TURP', { size: 9, fill: MUTED, w: 700 })}`, 'TURP', shadow(sh));
  };

  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* زایا — دنیای ۰: زبان زایش (پایه همه دنیاها)
 * سطح ۱: بخش‌های دستگاه تولیدمثل • سطح ۲: ریشه‌های اصلی • سطح ۳: پیشوندها، پسوندها و دام‌های همزاد
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: 'زبان زایش', short: 'زبان زایش', sub: 'دستگاه تولیدمثل چه بخش‌هایی دارد و واژه‌هایش چطور ساخته می‌شوند: ریشه، پیشوند، پسوند و هورمون‌ها',
    color: '#B8457A', dark: '#8A2D5A', light: '#FBE7EF',
    levels: ['بخش‌های دستگاه تولیدمثل', 'ریشه‌های اصلی', 'پیشوندها و پسوندها'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'lx1', title: 'دو دستگاه، یک هدف', icon: '🌸', items: [
          L('گنادها و گامت‌ها', `${fig('repro-overview', [], 'دستگاه تولیدمثل زنانه و مردانه')}${e('<b>gonad</b>')} (غده جنسی) هم یاخته جنسی می‌سازد و هم هورمون:<br>• زن: ${e('<b>ovary</b>')} (تخمدان) ← ${e('<b>ovum</b>')} (تخمک)<br>• مرد: ${e('<b>testis</b>')} (بیضه) ← ${e('<b>spermatozoon</b>')} (اسپرم)<br>این دو ${e('gamete')} هر کدام ۲۳ کروموزوم دارند و از پیوندشان ${e('<b>zygote</b>')} ساخته می‌شود.`),
          L('متخصص‌ها', `${tbl([['متخصص', 'کار'], [e('gynecologist (GYN)'), 'بیماری‌های دستگاه تناسلی زنانه'], [e('obstetrician (OB)'), 'بارداری و زایمان'], [e('urologist'), 'دستگاه ادراری و تناسلی مردانه'], [e('neonatologist'), 'نوزادان']])}${memo('gynec/o یعنی زن؛ OB-GYN یعنی «زنان و زایمان».')}${pearl('در Case Study، Dexter برای BPH پیش urologist رفت و Abigail را obstetrician برای سزارین به اتاق عمل فرستاد.')}`),
          M('غده جنسی زنانه کدام است؟', ['ovary', 'uterus', 'testis', 'placenta'], 'gonad زن = تخمدان.', null, F('repro-overview', [])),
          M(`${e('<b>gynecologist</b>')} کیست؟`, ['متخصص بیماری‌های دستگاه تناسلی زنانه', 'متخصص زایمان', 'متخصص نوزادان', 'متخصص اورولوژی'], 'gynec/o + -logist.'),
          T('تخمک و اسپرم هر کدام ۲۳ کروموزوم دارند.', true, 'گامت‌ها نیمه‌کروموزوم دارند.'),
          O('از گامت تا رویان را بچین', ['ovum and sperm', 'fertilization', 'zygote', 'implantation', 'embryo'], 'لقاح، تخم، لانه‌گزینی، رویان.'),
          P('هر واژه را به معنی‌اش وصل کن', [['gonad', 'غده جنسی'], ['gamete', 'یاخته جنسی'], ['zygote', 'تخم'], ['ovum', 'تخمک']], 'واژه‌های پایه.'),
          B('اختصار ___ یعنی زنان و زایمان.', ['OB-GYN', 'GU', 'GYN-URO'], 'obstetrics and gynecology.'),
          S('املای انگلیسی «دستگاه تولیدمثل» را بنویس', 'reproductive system', 'reproduction = تولیدمثل.', 'repro…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: 'هورمون‌های جنسی', icon: '🧪', items: [
          L('فرمانده: هیپوفیز', `${fig('hormones', [], 'هورمون‌های جنسی')}هیپوفیز دو هورمون به گنادها می‌فرستد:<br>• ${e('<b>FSH</b>')} (follicle-stimulating hormone): رشد فولیکول تخمدان و اسپرم‌سازی<br>• ${e('<b>LH</b>')} (luteinizing hormone): تخمک‌گذاری و ساخت تستوسترون`),
          L('هورمون‌های گنادها', `${tbl([['هورمون', 'سازنده', 'کار'], [e('estrogen'), 'تخمدان', 'ویژگی‌های زنانه، ساخت آندومتر'], [e('progesterone'), 'جسم زرد و جفت', 'نگه‌داشتن پوشش رحم برای بارداری'], [e('testosterone'), 'بیضه', 'ویژگی‌های مردانه، اسپرم‌سازی']])}${wb('andr/o', '-gen')} ← ${e('<b>androgen</b>')}: هر هورمون مردانه${memo('Pro-gest-erone یعنی «به سود بارداری» (بخش pro یعنی برای و gest یعنی بارداری).')}`),
          M('کدام هورمون تخمک‌گذاری را راه می‌اندازد؟', ['LH', 'FSH', 'testosterone', 'oxytocin'], 'اوج LH حدود روز ۱۴.', null, F('hormones', [])),
          M('هورمونی که پوشش رحم را برای بارداری نگه می‌دارد…', ['progesterone', 'estrogen', 'testosterone', 'FSH'], 'از جسم زرد و جفت.'),
          T('androgen به هورمون‌های مردانه گفته می‌شود.', true, 'andr/o = مرد.'),
          W('واژه‌ای بساز به معنی «سازنده (هورمون) مردانه»', ['andr/o', '-gen'], ['estr/o', '-logy', 'gynec/o'], 'androgen.'),
          P('هر هورمون را به سازنده‌اش وصل کن', [['estrogen', 'تخمدان'], ['testosterone', 'بیضه'], ['FSH', 'هیپوفیز'], ['progesterone', 'جسم زرد']], 'هورمون‌ها.'),
          B('ریشه ___ یعنی زنانه (مثل estrogen).', ['estr/o', 'andr/o', 'gonad/o'], 'estr/o.'),
          S('املای انگلیسی «استروژن» را بنویس', 'estrogen', 'estr/o + -gen.', 'estro…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: 'آناتومی یک واژه', icon: '🧩', items: [
          L('پازل واژه', `${fig('wordparts', [], 'پیشوند + ریشه + پسوند')}هر واژه از قطعه‌هایی ساخته می‌شود:<br>• <b>ریشه</b>: معنی اصلی؛ مثل ${e('hyster')} یعنی رحم<br>• <b>پیشوند</b>: اول واژه؛ مثل ${e('dys-')} یعنی دردناک<br>• <b>پسوند</b>: آخر واژه؛ مثل ${e('-ectomy')} یعنی برداشتن<br>• <b>واکه رابط</b> (معمولاً ${e('o')}): ${e('men/o/rrhea')}`),
          L('قاعده طلایی', `معنی را از <b>پسوند</b> شروع کن، بعد <b>پیشوند</b> و آخر <b>ریشه</b>:<br>${wb('hyster/o', '-ectomy')} ← «برداشتنِ رحم»<br>${wb('dys-', 'men/o', '-rrhea')} ← «جریانِ دردناکِ قاعدگی»<br>${wb('salping/o', '-itis')} ← «التهابِ لوله رحم»${memo('اگر پسوند با حرف صدادار شروع شود، واکه رابط حذف می‌شود: hyster/o + -ectomy می‌شود hysterectomy.')}`),
          M(`${e('<b>hysterectomy</b>')} یعنی…`, ['برداشتن رحم', 'برش رحم', 'التهاب رحم', 'مشاهده رحم'], 'hyster/o + -ectomy.'),
          M(`در ${e('<b>dysmenorrhea</b>')} پسوند کدام است؟`, ['‎-rrhea‎ = جریان', 'dys- = دردناک', 'men/o = قاعدگی', '‎-a‎ = اسم'], 'dys + meno + rrhea.', null, F('wordparts', [])),
          T('در salpingitis واکه رابط o حذف شده است.', true, 'salping + itis.'),
          W('واژه‌ای بساز به معنی «التهاب تخمدان»', ['oophor/o', '-itis'], ['hyster/o', '-ectomy', 'dys-'], 'oophoritis.'),
          O('معنی dysmenorrhea را با قاعده طلایی بخوان؛ ترتیب را بچین', ['‎-rrhea‎: جریان', 'dys-: دردناک', 'men/o: قاعدگی', 'نتیجه: قاعدگی دردناک'], 'پسوند ← پیشوند ← ریشه.'),
          P('هر قطعه را به نوعش وصل کن', [['dys-', 'پیشوند'], ['hyster/o', 'ریشه'], ['-ectomy', 'پسوند'], ['o در menorrhea', 'واکه رابط']], 'قطعه‌ها.'),
          S('املای انگلیسی «برداشتن رحم» را بنویس', 'hysterectomy', 'hyster/o + -ectomy.', 'hyster…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'lx4', title: 'ریشه‌های زنانه', icon: '🗺️', items: [
          L('نقشه ریشه‌ها', `${fig('root-map-f', [], 'ریشه‌های زنانه')}${tbl([['ریشه', 'معنی'], [e('hyster/o, metr/o, uter/o'), 'رحم'], [e('oophor/o, ovari/o'), 'تخمدان'], [e('salping/o'), 'لوله رحم'], [e('cervic/o'), 'دهانه رحم'], [e('colp/o, vagin/o'), 'واژن'], [e('vulv/o, episi/o'), 'فرج']])}`),
          L('دو ریشه برای یک عضو', `ریشه یونانی و لاتین هر دو به کار می‌روند: ${e('hyster/o')} (یونانی) و ${e('uter/o')} (لاتین) هر دو یعنی رحم؛ ${e('colp/o')} و ${e('vagin/o')} هر دو یعنی واژن.${memo('oophor/o یعنی «حامل تخمک»؛ بخش oo یعنی تخم و بخش phor یعنی حمل کردن.')}${pearl('در Case Study 16-1 برای خانم Naomi عمل TAH و BSO انجام شد؛ یعنی برداشتن کامل رحم و برداشتن دوطرفه لوله و تخمدان (salpingo-oophorectomy).')}`),
          M(`ریشه ${e('<b>salping/o</b>')} یعنی…`, ['لوله رحم', 'تخمدان', 'واژن', 'دهانه رحم'], 'salpinx = لوله.', null, F('root-map-f', [])),
          M('کدام ریشه یعنی «واژن»؟', ['colp/o', 'cervic/o', 'oophor/o', 'mamm/o'], 'colposcopy.'),
          T('metr/o و hyster/o هر دو یعنی رحم.', true, 'endometrium، hysterectomy.'),
          W('واژه‌ای بساز به معنی «برداشتن لوله رحم و تخمدان»', ['salping/o', 'oophor/o', '-ectomy'], ['hyster/o', '-itis', 'colp/o'], 'salpingo-oophorectomy.'),
          P('هر ریشه را به معنی‌اش وصل کن', [['hyster/o', 'رحم'], ['oophor/o', 'تخمدان'], ['cervic/o', 'دهانه رحم'], ['episi/o', 'فرج']], 'ریشه‌های زنانه.'),
          B('ریشه ___ یعنی پستان (مثل mammography).', ['mamm/o', 'men/o', 'metr/o'], 'mamm/o، mast/o.'),
          S('املای انگلیسی «برداشتن تخمدان» را بنویس', 'oophorectomy', 'oophor/o + -ectomy.', 'oopho…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: 'ریشه‌های مردانه', icon: '🔷', items: [
          L('نقشه ریشه‌ها', `${fig('root-map-m', [], 'ریشه‌های مردانه')}${tbl([['ریشه', 'معنی'], [e('orchi/o, orchid/o, test/o'), 'بیضه'], [e('osche/o, scrot/o'), 'کیسه بیضه'], [e('epididym/o'), 'اپیدیدیم'], [e('vas/o'), 'مجرای دفران'], [e('prostat/o'), 'پروستات'], [e('balan/o'), 'حشفه']])}`),
          L('اسپرم و منی', `• اسپرم: ${e('spermat/o')} و ${e('sperm/o')}<br>• منی: ${e('semin/o')}<br>• کیسه منی: ${e('vesicul/o')}<br>${wb('spermat/o', '-genesis')} ← ${e('<b>spermatogenesis</b>')}: اسپرم‌سازی${memo('orchid (ارکیده) از واژه یونانی بیضه آمده؛ شکل ریشه‌اش شبیه بیضه است!')}${pearl('در پرونده، <bdi dir="ltr">“failure of the testes to descend”</bdi> یعنی cryptorchidism و <bdi dir="ltr">“surgical fixation of the testes”</bdi> یعنی orchiopexy.')}`),
          M(`ریشه ${e('<b>orchi/o</b>')} یعنی…`, ['بیضه', 'پروستات', 'آلت', 'کیسه منی'], 'orchitis = التهاب بیضه.', null, F('root-map-m', [])),
          M('کدام ریشه یعنی «حشفه»؟', ['balan/o', 'vas/o', 'semin/o', 'osche/o'], 'balanitis.'),
          T('vas/o در vasectomy به مجرای دفران اشاره دارد.', true, 'vas deferens.'),
          W('واژه‌ای بساز به معنی «التهاب پروستات»', ['prostat/o', '-itis'], ['orchi/o', '-ectomy', 'balan/o'], 'prostatitis.'),
          P('هر ریشه را به معنی‌اش وصل کن', [['orchi/o', 'بیضه'], ['prostat/o', 'پروستات'], ['epididym/o', 'اپیدیدیم'], ['osche/o', 'کیسه بیضه']], 'ریشه‌های مردانه.'),
          B('ریشه ___ یعنی اسپرم.', ['spermat/o', 'semin/o', 'vesicul/o'], 'spermatogenesis.'),
          S('املای انگلیسی «التهاب بیضه» را بنویس', 'orchitis', 'orchi/o + -itis.', 'orch…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: 'ریشه‌های بارداری و شیر', icon: '🤰', items: [
          L('بارداری و تولد', `${tbl([['ریشه', 'معنی', 'مثال'], [e('embry/o'), 'رویان', e('embryonic')], [e('fet/o'), 'جنین', e('fetal')], [e('amni/o'), 'آمنیون', e('amniocentesis')], [e('nat/o'), 'تولد', e('neonatal')], [e('grav/i'), 'باردار', e('gravida')], [e('par/o'), 'زاییدن', e('nullipara')]])}`),
          L('شیر و ناف', `• شیر: ${e('lact/o')} و ${e('galact/o')}؛ مثل ${e('lactation')} و ${e('galactorrhea')}<br>• ناف: ${e('omphal/o')} و ${e('umbilic/o')}؛ مثل ${e('umbilical cord')}<br>• زایمان: ${e('toc/o')}؛ مثل ${e('dystocia')}${memo('galaxy (کهکشان راه شیری) با galact/o هم‌ریشه است؛ یعنی شیر!')}`),
          M(`ریشه ${e('<b>nat/o</b>')} یعنی…`, ['تولد', 'شیر', 'جنین', 'ناف'], 'prenatal، neonatal.'),
          M('«مربوط به جنین» کدام است؟', ['fetal', 'natal', 'umbilical', 'embryonal'], 'fet/o + -al.'),
          T('galact/o و lact/o هر دو یعنی شیر.', true, 'galactorrhea، lactation.'),
          W('واژه‌ای بساز به معنی «پیش از تولد»', ['pre-', 'nat/o', '-al'], ['post-', 'fet/o', '-itis'], 'prenatal.'),
          P('هر ریشه را به معنی‌اش وصل کن', [['embry/o', 'رویان'], ['amni/o', 'آمنیون'], ['omphal/o', 'ناف'], ['toc/o', 'زایمان']], 'ریشه‌های بارداری.'),
          B('واژه ___ یعنی «مربوط به نوزاد».', ['neonatal', 'prenatal', 'postnatal'], 'neo- + nat/o + -al.'),
          S('املای انگلیسی «شیردهی» را بنویس', 'lactation', 'lact/o = شیر.', 'lact…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'lx7', title: 'پیشوندهای زایش', icon: '⏱️', items: [
          L('زمان و تعداد', `${tbl([['پیشوند', 'معنی', 'مثال'], [e('ante-, pre-'), 'پیش از', e('antepartum, prenatal')], [e('post-'), 'پس از', e('postpartum')], [e('primi-'), 'نخستین', e('primigravida')], [e('multi-'), 'چند', e('multipara')], [e('nulli-'), 'هیچ', e('nullipara')], [e('neo-'), 'نو', e('neonate')]])}`),
          L('جا و حالت', `${tbl([['پیشوند', 'معنی', 'مثال'], [e('a-, an-'), 'بدون', e('amenorrhea')], [e('dys-'), 'دردناک، دشوار', e('dystocia')], [e('endo-'), 'درون', e('endometrium')], [e('peri-'), 'پیرامون', e('perimetrium')], [e('ec-'), 'بیرون', e('ectopic')]])}${memo('ante و anti را قاطی نکن: ante یعنی پیش از، مثل antepartum؛ ولی anti یعنی ضد، مثل antibiotic.')}`),
          M('پیشوند «هیچ» کدام است؟', ['nulli-', 'primi-', 'multi-', 'neo-'], 'nullipara = نزاییده.'),
          M(`${e('<b>postpartum</b>')} یعنی…`, ['پس از زایمان', 'پیش از زایمان', 'حین زایمان', 'زایمان دشوار'], 'post- + -partum.'),
          T('primigravida یعنی زنی که برای نخستین بار باردار است.', true, 'primi- + -gravida.'),
          W('واژه‌ای بساز به معنی «زایمان دشوار»', ['dys-', '-tocia'], ['eu-', '-partum', 'primi-'], 'dystocia.'),
          P('هر پیشوند را به معنی‌اش وصل کن', [['ante-', 'پیش از'], ['post-', 'پس از'], ['multi-', 'چند'], ['endo-', 'درون']], 'پیشوندها.'),
          B('بارداری بیرون از رحم ___ pregnancy است.', ['ectopic', 'endotopic', 'antetopic'], 'پیشوند ec- یعنی بیرون و top/o یعنی جا.'),
          S('املای انگلیسی «زن نزاییده» را بنویس', 'nullipara', 'nulli- + -para.', 'nulli…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: 'پسوندهای زایش', icon: '✂️', items: [
          L('پسوندهای نشانه و بیماری', `${tbl([['پسوند', 'معنی', 'مثال'], [e('-rrhea'), 'جریان، ترشح', e('leukorrhea')], [e('-rrhagia'), 'خونریزی', e('menorrhagia')], [e('-cele'), 'فتق، تورم', e('hydrocele')], [e('-salpinx'), 'لوله رحم', e('pyosalpinx')], [e('-spermia'), 'حالت اسپرم', e('oligospermia')], [e('-arche'), 'آغاز', e('menarche')]])}`),
          L('پسوندهای بارداری و جراحی', `${tbl([['پسوند', 'معنی', 'مثال'], [e('-cyesis'), 'بارداری', e('pseudocyesis')], [e('-tocia'), 'زایمان', e('dystocia')], [e('-gravida'), 'زن باردار', e('multigravida')], [e('-para'), 'زن زاییده', e('primipara')], [e('-pexy'), 'تثبیت', e('orchiopexy')], [e('-rrhaphy'), 'بخیه', e('colporrhaphy')]])}${memo('-pexy را با «پِگ» (گیره) به یاد بسپار: چیزی را سر جایش ثابت می‌کند.')}`),
          M(`پسوند ${e('<b>-pexy</b>')} یعنی…`, ['تثبیت جراحی', 'برداشتن', 'بخیه', 'برش'], 'orchiopexy.'),
          M('«اولین قاعدگی» با کدام پسوند ساخته می‌شود؟', ['-arche', '-rrhea', '-cyesis', '-para'], 'menarche.'),
          T('-salpinx یعنی لوله رحم؛ pyosalpinx یعنی چرک در لوله.', true, 'py/o = چرک.'),
          W('واژه‌ای بساز به معنی «کمی اسپرم»', ['olig/o', '-spermia'], ['a-', '-rrhea', 'hydr/o'], 'oligospermia.'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-rrhaphy', 'بخیه'], ['-cele', 'فتق'], ['-cyesis', 'بارداری'], ['-rrhagia', 'خونریزی']], 'پسوندها.'),
          B('تجمع آب دور بیضه ___ است.', ['hydrocele', 'varicocele', 'spermatocele'], 'hydr/o + -cele.'),
          S('املای انگلیسی «اولین قاعدگی» را بنویس', 'menarche', 'men/o + -arche.', 'menar…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: 'دام‌های همزاد', icon: '🪤', items: [
          L('یک حرف، دو معنی', `${fig('twins', [], 'جفت‌های فریبنده')}${vs(['men/o', 'قاعدگی'], ['metr/o', 'رحم'])}${vs(['-rrhea', 'جریان، ترشح'], ['-rrhagia', 'خونریزی شدید'])}`),
          L('بارداری یا زایمان؟', `${vs(['gravida', 'تعداد بارداری‌ها'], ['para', 'تعداد زایمان‌های زنده‌ماندنی'])}${vs(['-tomy', 'برش'], ['-ectomy', 'برداشتن'])}${memo('حرف G را با Got pregnant (باردار شد) و حرف P را با Produced a baby (بچه به دنیا آورد) به خاطر بسپار.')}${pearl('در Chart Note، بیمار G4 P4 است؛ یعنی چهار بارداری و چهار زایمان زنده.')}`),
          M('menorrhagia یعنی…', ['خونریزی شدید قاعدگی', 'نبود قاعدگی', 'خونریزی بین قاعدگی‌ها', 'قاعدگی دردناک'], 'men/o + -rrhagia.', null, F('twins', [])),
          M('metrorrhagia یعنی…', ['خونریزی رحم بین قاعدگی‌ها', 'خونریزی شدید هنگام قاعدگی', 'ترشح سفید', 'نبود قاعدگی'], 'metr/o = رحم.'),
          T('G3 P2 یعنی سه بار باردار شده و دو زایمان زنده‌ماندنی داشته است.', true, 'gravida و para.'),
          W('واژه‌ای بساز به معنی «خونریزی شدید قاعدگی»', ['men/o', '-rrhagia'], ['-rrhea', 'metr/o', 'a-'], 'menorrhagia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['amenorrhea', 'نبود قاعدگی'], ['menorrhagia', 'خونریزی شدید'], ['leukorrhea', 'ترشح سفید'], ['metrorrhagia', 'خونریزی بین دوره‌ها']], 'دام‌ها.'),
          B('برش رحم ___ است ولی برداشتن آن hysterectomy.', ['hysterotomy', 'hysteropexy', 'hysteroscopy'], '‎-tomy‎ = برش.'),
          S('املای انگلیسی «نبود قاعدگی» را بنویس', 'amenorrhea', 'a- + men/o + -rrhea.', 'amen…'),
          N('m2r:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* زایا — دنیای ۱: دستگاه تناسلی زنانه
 * سطح ۱: اندام‌های درونی • سطح ۲: اندام‌های بیرونی و پستان • سطح ۳: چرخه و هورمون‌ها */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'fm', sym: 'Fm', name: 'دستگاه تناسلی زنانه', short: 'زنانه', sub: 'تخمدان، لوله‌های رحم، رحم و دهانه آن، واژن و فرج، پستان، چرخه قاعدگی و یائسگی',
    color: '#E46A8E', dark: '#B0405F', light: '#FDE6EC',
    levels: ['اندام‌های درونی', 'اندام‌های بیرونی و پستان', 'چرخه و هورمون‌ها'],
    gens: EA.genIds('fm'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'fm1', title: 'رحم، لوله‌ها و تخمدان‌ها', icon: '🌷', items: [
          L('اندام‌های درونی', `${fig('female-front', [], 'رحم و ضمائم')}• ${e('<b>ovary</b>')}: دو تخمدان؛ تخمک، استروژن و پروژسترون می‌سازند<br>• ${e('<b>uterine tube</b>')}: لوله رحم (فالوپ)؛ با ${e('fimbriae')} انگشتی تخمک را می‌گیرد؛ محل لقاح<br>• ${e('<b>uterus</b>')}: رحم؛ بالای آن ${e('fundus')}، بدنه و پایین آن ${e('cervix')}<br>• ${e('<b>vagina</b>')}: کانال زایمان`),
          L('ضمائم', `تخمدان‌ها و لوله‌ها را با هم ${e('<b>adnexa</b>')} (ضمائم رحم) می‌گویند.${memo('مسیر تخمک: تخمدان، فیمبریا، لوله رحم، رحم.')}${pearl('در Case Study 16-1، پاتولوژی خانم Naomi <bdi dir="ltr">“stenosis of the right uterine tube”</bdi> را نشان داد؛ یعنی تنگی لوله رحم راست.')}`),
          M('لقاح معمولاً در کجا رخ می‌دهد؟', ['لوله رحم', 'رحم', 'تخمدان', 'واژن'], 'uterine tube.', null, F('female-front', [])),
          M(`${e('<b>fundus</b>')} کدام بخش رحم است؟`, ['بخش بالایی و گرد', 'دهانه پایینی', 'لایه درونی', 'لوله'], 'سقف رحم.'),
          T('تخمدان‌ها و لوله‌های رحم را adnexa می‌نامند.', true, 'ضمائم رحم.'),
          O('مسیر تخمک را بچین', ['ovary', 'fimbriae', 'uterine tube', 'uterus'], 'از تخمدان تا رحم.'),
          P('هر بخش را به نام فارسی‌اش وصل کن', [['ovary', 'تخمدان'], ['uterine tube', 'لوله رحم'], ['cervix', 'دهانه رحم'], ['fimbriae', 'زوائد انگشتی لوله']], 'اندام‌ها.'),
          B('نام دیگر uterine tube، ___ tube است.', ['fallopian', 'eustachian', 'Bartholin'], 'لوله فالوپ.'),
          S('املای انگلیسی «تخمدان» را بنویس', 'ovary', 'ovari/o.', 'ova…'),
          N('t2f:fm')
        ]
      },
      {
        id: 'fm2', title: 'دیواره و جایگاه رحم', icon: '🧱', items: [
          L('سه لایه', `${fig('uterine-wall', [], 'دیواره رحم')}• ${e('<b>perimetrium</b>')}: لایه بیرونی<br>• ${e('<b>myometrium</b>')}: لایه عضلانی؛ انقباض‌های زایمان<br>• ${e('<b>endometrium</b>')}: لایه درونی؛ هر ماه ضخیم می‌شود و در قاعدگی می‌ریزد`),
          L('جایگاه رحم', `${fig('uterine-positions', ['خم شدن رحم به جلو و عقب'], 'جایگاه‌های رحم')}رحم معمولاً روی مثانه به جلو خم است: ${e('anteflexion')} و ${e('anteversion')}. اگر به عقب خم شود: ${e('<b>retroversion</b>')} یا ${e('retroflexion')}.${pearl('سناریوی APPLY: به خانم Rosie McConnell گفته‌اند <bdi dir="ltr">“retroverted uterus and fibroids”</bdi> دارد؛ یعنی رحم برگشته به عقب و فیبروم.')}`),
          M('لایه عضلانی رحم کدام است؟', ['myometrium', 'endometrium', 'perimetrium', 'cervix'], 'my/o = عضله.', null, F('uterine-wall', [])),
          M('کدام لایه در قاعدگی می‌ریزد؟', ['endometrium', 'myometrium', 'perimetrium', 'ovary'], 'پوشش درونی.'),
          T('retroversion یعنی خم شدن رحم به عقب.', true, 'retro- = عقب.', F('uterine-positions', [])),
          W('واژه‌ای بساز به معنی «لایه پیرامون رحم»', ['peri-', 'metr/o', '-um'], ['endo-', 'my/o', '-itis'], 'perimetrium.'),
          P('هر لایه را به ویژگی‌اش وصل کن', [['perimetrium', 'لایه بیرونی'], ['myometrium', 'انقباض'], ['endometrium', 'ریزش ماهانه'], ['anteversion', 'خم به جلو']], 'دیواره رحم.'),
          B('رحم برگشته به عقب ___ uterus است.', ['retroverted', 'anteverted', 'prolapsed'], 'retroversion.'),
          S('املای انگلیسی «آندومتر» را بنویس', 'endometrium', 'endo- + metr/o + -ium.', 'endom…'),
          N('f2t:fm')
        ]
      },
      {
        id: 'fm3', title: 'مقطع کناری لگن زن', icon: '🔎', items: [
          L('همسایه‌ها', `${fig('female-sagittal', [], 'مقطع لگن زن')}رحم بین ${e('<b>urinary bladder</b>')} (جلو) و ${e('<b>rectum</b>')} (عقب) است. فضای بین رحم و راست‌روده ${e('<b>rectouterine pouch</b>')} یا ${e('cul-de-sac')} نام دارد (${e('culd/o')}).`),
          L('دهانه رحم و واژن', `${e('<b>cervix</b>')} پایین رحم است و به ${e('vagina')} باز می‌شود؛ مجرای آن ${e('cervical canal')} است. در زایمان دهانه رحم نازک (${e('effacement')}) و باز (${e('dilation')}) می‌شود.${memo('cervix یعنی «گردن»؛ گردن رحم که به واژن می‌رسد.')}${pearl('در یک سناریوی بالینی، پزشک برای خانم Charity Peterson <bdi dir="ltr">“culdoscopy”</bdi> خواست؛ یعنی مشاهده بن‌بست رحمی-رکتومی با اسکوپ.')}`),
          M('کدام عضو جلوی رحم قرار دارد؟', ['مثانه', 'راست‌روده', 'کلیه', 'تخمدان'], 'bladder.', null, F('female-sagittal', [])),
          M('ریشه culd/o به کدام فضا اشاره دارد؟', ['بن‌بست رحمی-رکتومی', 'دهانه رحم', 'لوله رحم', 'واژن'], 'cul-de-sac.'),
          T('مثانه جلوی رحم و راست‌روده پشت آن است.', true, 'مقطع ساجیتال.'),
          O('ساختارها را از جلو به عقب بچین', ['pubic bone', 'urinary bladder', 'uterus', 'rectouterine pouch', 'rectum'], 'از جلو به عقب.'),
          P('هر واژه را به معنی‌اش وصل کن', [['cul-de-sac', 'بن‌بست رحمی-رکتومی'], ['cervical canal', 'مجرای دهانه رحم'], ['rectum', 'راست‌روده'], ['pubic bone', 'استخوان شرمگاهی']], 'همسایه‌ها.'),
          B('اختصار ___ در پرونده یعنی دهانه رحم.', ['Cx', 'Cs', 'CV'], 'cervix.'),
          S('املای انگلیسی «دهانه رحم» را بنویس', 'cervix', 'cervic/o.', 'cerv…'),
          N('d2t:fm')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'fm4', title: 'فرج و پرینه', icon: '🌺', items: [
          L('اندام بیرونی', `${fig('vulva', [], 'فرج')}${e('<b>vulva</b>')} یا ${e('genitalia')} بیرونی زن (${e('vulv/o, episi/o')}):<br>• ${e('labia majora')} و ${e('labia minora')}: لب‌های بزرگ و کوچک<br>• ${e('clitoris')}: اندام کوچک حساس<br>• سوراخ پیشابراه و دهانه واژن<br>• ${e('hymen')}: پرده بکارت`),
          L('غدد و پرینه', `${e('<b>Bartholin glands</b>')}: دو غده کنار دهانه واژن که مخاط ترشح می‌کنند.<br>${e('<b>perineum</b>')}: ناحیه بین دهانه واژن و مقعد؛ در زایمان گاهی برش ${e('episiotomy')} می‌خورد.${memo('episi/o یعنی فرج؛ episiotomy برش پرینه برای گشاد کردن دهانه واژن است.')}`),
          M('ناحیه بین دهانه واژن و مقعد چه نام دارد؟', ['perineum', 'vulva', 'mons pubis', 'labia'], 'پرینه.', null, F('vulva', [])),
          M('غدد کنار دهانه واژن که مخاط می‌سازند…', ['Bartholin glands', 'mammary glands', 'Cowper glands', 'adnexa'], 'غدد بارتولن.'),
          T('vulv/o و episi/o هر دو یعنی فرج.', true, 'vulvitis، episiotomy.'),
          W('واژه‌ای بساز به معنی «برش فرج (پرینه)»', ['episi/o', '-tomy'], ['vulv/o', '-itis', 'colp/o'], 'episiotomy.'),
          P('هر بخش را به نام فارسی‌اش وصل کن', [['labia majora', 'لب‌های بزرگ'], ['labia minora', 'لب‌های کوچک'], ['hymen', 'پرده بکارت'], ['vulva', 'فرج']], 'اندام بیرونی.'),
          B('التهاب فرج ___ است.', ['vulvitis', 'vaginitis', 'cervicitis'], 'vulv/o + -itis.'),
          S('املای انگلیسی «پرینه» را بنویس', 'perineum', 'perine/o.', 'perin…'),
          N('r2m:fm')
        ]
      },
      {
        id: 'fm5', title: 'پستان', icon: '🍼', items: [
          L('ساختار پستان', `${fig('breast', [], 'پستان')}${e('<b>mammary gland</b>')} (پستان؛ ${e('mamm/o, mast/o')}) از ۱۵ تا ۲۰ لوب غده شیری، ${e('<b>lactiferous ducts</b>')} (مجاری شیری)، بافت چربی، ${e('nipple')} و ${e('<b>areola</b>')} (هاله) ساخته شده است.`),
          L('شیر و بیماری', `${e('lactation')} (شیردهی) با هورمون پرولاکتین و اکسی‌توسین انجام می‌شود.<br>${wb('mast/o', '-itis')} ← ${e('mastitis')}: التهاب پستان، اغلب در شیردهی<br>${wb('gynec/o', 'mast/o', '-ia')} ← ${e('gynecomastia')}: بزرگ شدن پستان در مردان${memo('mamm/o (لاتین) و mast/o (یونانی) هر دو پستان‌اند: mammography و mastectomy.')}`),
          M('مجاری که شیر را به نوک پستان می‌برند…', ['lactiferous ducts', 'uterine tubes', 'seminal ducts', 'Bartholin ducts'], 'lact/o = شیر.', null, F('breast', [])),
          M(`${e('<b>gynecomastia</b>')} یعنی…`, ['بزرگ شدن پستان در مردان', 'التهاب پستان', 'نبود پستان', 'سرطان پستان'], 'gynec/o + mast/o + -ia.'),
          T('areola هاله تیره دور نوک پستان است.', true, 'هاله.'),
          W('واژه‌ای بساز به معنی «التهاب پستان»', ['mast/o', '-itis'], ['mamm/o', '-graphy', 'metr/o'], 'mastitis.'),
          P('هر واژه را به معنی‌اش وصل کن', [['nipple', 'نوک پستان'], ['areola', 'هاله'], ['lactation', 'شیردهی'], ['mammary gland', 'غده پستان']], 'پستان.'),
          B('ریشه ___ در mastectomy یعنی پستان.', ['mast/o', 'men/o', 'metr/o'], 'mast/o.'),
          S('املای انگلیسی «التهاب پستان» را بنویس', 'mastitis', 'mast/o + -itis.', 'mast…'),
          N('m2r:fm')
        ]
      },
      {
        id: 'fm6', title: 'یک بیمار، یک تاریخچه', icon: '📋', items: [
          L('خواندن پرونده', `${pearl('سناریوی APPLY: خانم Pamela Kline، ۴۰ ساله، می‌گوید پنج بار باردار شده، از آخرین بارداری مایع کشیده‌اند، التهاب واژن و دهانه رحم داشته، فتق لوله رحم داشته که ترمیم شده و رحم، تخمدان‌ها و لوله‌هایش برداشته شده است.')}${tbl([['عبارت', 'واژه پزشکی'], ['پنج بارداری', e('gravida 5')], ['کشیدن مایع آمنیوتیک', e('amniocentesis')], ['التهاب واژن و دهانه رحم', e('vaginitis, cervicitis')], ['فتق لوله رحم', e('salpingocele')], ['برداشتن رحم، تخمدان‌ها و لوله‌ها', e('TAH-BSO')]])}`),
          L('پیشوند و پسوند جای عضو را می‌گویند', `${wb('cervic/o', '-itis')} ← ${e('cervicitis')}<br>${wb('vagin/o', '-itis')} ← ${e('vaginitis')} (یا ${e('colpitis')})<br>${wb('salping/o', '-cele')} ← ${e('salpingocele')}${memo('اول عضو را از ریشه پیدا کن، بعد اتفاق را از پسوند.')}`),
          M('«التهاب دهانه رحم» کدام است؟', ['cervicitis', 'colpitis', 'metritis', 'salpingitis'], 'cervic/o + -itis.'),
          M('«پنج بار باردار شده» در پرونده چگونه نوشته می‌شود؟', ['gravida 5', 'para 5', 'nullipara', 'primigravida'], 'gravida = تعداد بارداری.'),
          T('colpitis و vaginitis هر دو یعنی التهاب واژن.', true, 'colp/o = vagin/o.'),
          W('واژه‌ای بساز به معنی «فتق لوله رحم»', ['salping/o', '-cele'], ['oophor/o', '-itis', 'hyster/o'], 'salpingocele.'),
          P('هر عبارت پرونده را به واژه‌اش وصل کن', [['التهاب واژن', 'vaginitis'], ['التهاب دهانه رحم', 'cervicitis'], ['فتق لوله رحم', 'salpingocele'], ['کشیدن مایع آمنیوتیک', 'amniocentesis']], 'پرونده Pamela Kline.'),
          B('برداشتن دوطرفه لوله و تخمدان را اختصاراً ___ می‌نویسند.', ['BSO', 'TAH', 'D&C'], 'bilateral salpingo-oophorectomy.'),
          S('املای انگلیسی «التهاب واژن» را بنویس', 'vaginitis', 'vagin/o + -itis.', 'vagin…'),
          N('wb:fm')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'fm7', title: 'تخمدان و تخمک‌گذاری', icon: '🥚', items: [
          L('از فولیکول تا جسم زرد', `${fig('ovary-cycle', [], 'چرخه تخمدان')}در تخمدان ${e('<b>ovarian follicle</b>')} رشد می‌کند و فولیکول بالغ (${e('graafian follicle')}) پاره می‌شود: ${e('<b>ovulation</b>')}. باقی‌مانده آن ${e('<b>corpus luteum</b>')} (جسم زرد) می‌شود و پروژسترون می‌سازد.`),
          L('اگر لقاح نشود…', `جسم زرد پس از حدود ۱۴ روز تحلیل می‌رود و به ${e('corpus albicans')} (جسم سفید) تبدیل می‌شود؛ پروژسترون کم و آندومتر ریزش می‌کند.${wb('an-', 'ovul/o', '-ation')} ← ${e('anovulation')}: تخمک‌گذاری نکردن${memo('luteum یعنی زرد؛ albicans یعنی سفید.')}`),
          M('آزاد شدن تخمک از تخمدان چه نام دارد؟', ['ovulation', 'menstruation', 'implantation', 'fertilization'], 'تخمک‌گذاری.', null, F('ovary-cycle', [])),
          M('جسم زرد چه هورمونی می‌سازد؟', ['progesterone', 'testosterone', 'FSH', 'oxytocin'], 'corpus luteum.'),
          T('anovulation یعنی تخمک‌گذاری نکردن.', true, 'an- = بدون.'),
          O('رخدادهای تخمدان را بچین', ['primary follicle', 'graafian follicle', 'ovulation', 'corpus luteum', 'corpus albicans'], 'چرخه تخمدان.'),
          P('هر واژه را به معنی‌اش وصل کن', [['ovarian follicle', 'فولیکول تخمدان'], ['corpus luteum', 'جسم زرد'], ['corpus albicans', 'جسم سفید'], ['ovulation', 'تخمک‌گذاری']], 'تخمدان.'),
          B('فولیکول بالغ را ___ follicle می‌گویند.', ['graafian', 'Bartholin', 'Cowper'], 'graafian.'),
          S('املای انگلیسی «تخمک‌گذاری» را بنویس', 'ovulation', 'ovul/o + -ation.', 'ovul…'),
          N('t2f:fm')
        ]
      },
      {
        id: 'fm8', title: 'چرخه قاعدگی', icon: '📆', items: [
          L('۲۸ روز در چهار گام', `${fig('menstrual-cycle', [], 'چرخه قاعدگی')}${tbl([['مرحله', 'روز', 'چه می‌شود'], [e('menstrual'), '۱ تا ۵', 'ریزش آندومتر و خونریزی'], [e('proliferative (follicular)'), '۶ تا ۱۳', 'استروژن آندومتر را می‌سازد'], [e('ovulation'), '۱۴', 'آزاد شدن تخمک'], [e('secretory (luteal)'), '۱۵ تا ۲۸', 'پروژسترون آندومتر را آماده نگه می‌دارد']])}`),
          L('واژه‌ها', `${wb('men/o', '-arche')} ← ${e('<b>menarche</b>')}: اولین قاعدگی در بلوغ<br>${e('<b>menstruation</b>')} (${e('menses')}): خونریزی ماهانه<br>${e('<b>premenstrual syndrome (PMS)</b>')}: علائم جسمی و روانی چند روز پیش از قاعدگی${pearl('سناریوی APPLY: خانم Beth Meyers قرص ضدبارداری ۲۱ روزه مصرف می‌کند و چون گاهی قرص را فراموش می‌کند، breakthrough bleeding (خونریزی بین دوره) دارد.')}`),
          M('تخمک‌گذاری در چرخه ۲۸ روزه معمولاً روز چندم است؟', ['۱۴', '۱', '۵', '۲۸'], 'وسط چرخه.', null, F('menstrual-cycle', [])),
          M('کدام هورمون در مرحله ترشحی (لوتئال) غالب است؟', ['progesterone', 'estrogen', 'testosterone', 'FSH'], 'از جسم زرد.'),
          T('menarche یعنی اولین قاعدگی.', true, 'men/o + -arche.'),
          O('مرحله‌های چرخه را بچین', ['menstrual', 'proliferative', 'ovulation', 'secretory'], 'از روز ۱ تا ۲۸.'),
          P('هر مرحله را به روزش وصل کن', [['menstrual', 'روز ۱ تا ۵'], ['proliferative', 'روز ۶ تا ۱۳'], ['ovulation', 'روز ۱۴'], ['secretory', 'روز ۱۵ تا ۲۸']], 'چرخه.'),
          B('اختصار ___ یعنی سندروم پیش از قاعدگی.', ['PMS', 'PID', 'TSS'], 'premenstrual syndrome.'),
          S('املای انگلیسی «قاعدگی» را بنویس', 'menstruation', 'menstru/o + -ation.', 'menstr…'),
          N('f2t:fm')
        ]
      },
      {
        id: 'fm9', title: 'از بلوغ تا یائسگی', icon: '🌙', items: [
          L('یائسگی', `${e('<b>menopause</b>')}: پایان دائمی قاعدگی، معمولاً حدود ۵۰ سالگی. سال‌های پیش از آن ${e('<b>perimenopause</b>')} نام دارد با قاعدگی نامنظم و گرگرفتگی. ${e('<b>postmenopausal</b>')} یعنی پس از یائسگی.`),
          L('در بالین', `${pearl('سناریوی APPLY: خانم Heidi Red Feather، ۴۷ ساله، با تعریق شبانه، خونریزی بین قاعدگی‌ها، گرگرفتگی و افسردگی آمده است؛ این‌ها نشانه‌های perimenopause هستند.')}${pearl('Chart Note: خانم ۵۲ ساله‌ای که آخرین قاعدگی‌اش در ۴۸ سالگی بوده، با <bdi dir="ltr">“postmenopausal bleeding”</bdi> برای laparoscopy و D&C بستری شد؛ خونریزی پس از یائسگی باید بررسی شود.')}${vs(['پیش‌یائسگی', 'perimenopause<br>سال‌های پیش از یائسگی'], ['پس از یائسگی', 'postmenopausal<br>پس از آخرین قاعدگی'])}`),
          M('پایان دائمی قاعدگی چه نام دارد؟', ['menopause', 'menarche', 'amenorrhea', 'puberty'], 'یائسگی.'),
          M('علائم خانم Heidi Red Feather بیشتر نشانه کدام دوره است؟', ['perimenopause', 'menarche', 'pregnancy', 'puerperium'], 'گرگرفتگی و قاعدگی نامنظم.'),
          T('خونریزی پس از یائسگی (postmenopausal bleeding) باید بررسی شود.', true, 'رد سرطان آندومتر.'),
          O('مراحل زندگی باروری زن را بچین', ['puberty', 'menarche', 'reproductive years', 'perimenopause', 'menopause'], 'از بلوغ تا یائسگی.'),
          P('هر واژه را به معنی‌اش وصل کن', [['menopause', 'یائسگی'], ['perimenopause', 'پیش‌یائسگی'], ['postmenopausal', 'پس از یائسگی'], ['HRT', 'هورمون‌درمانی جایگزین']], 'یائسگی.'),
          B('درمان با استروژن برای علائم یائسگی را ___ می‌گویند.', ['HRT', 'IVF', 'TURP'], 'hormone replacement therapy.'),
          S('املای انگلیسی «یائسگی» را بنویس', 'menopause', 'men/o + pause.', 'meno…'),
          N('r2m:fm')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* زایا — دنیای ۲: دستگاه تناسلی مردانه
 * سطح ۱: بیضه و اسپرم • سطح ۲: مجاری و غدد • سطح ۳: آلت و بلوغ */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ml', sym: 'Ml', name: 'دستگاه تناسلی مردانه', short: 'مردانه', sub: 'بیضه و کیسه بیضه، اسپرم، اپیدیدیم و مجرای وابران، پروستات و غدد، آلت تناسلی و بلوغ',
    color: '#2E86C1', dark: '#1B5F8C', light: '#E3F0FA',
    levels: ['بیضه و اسپرم', 'مجاری و غدد', 'آلت و بلوغ'],
    gens: EA.genIds('ml'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'ml1', title: 'بیضه و کیسه بیضه', icon: '🫘', items: [
          L('بیضه', `${fig('testis', [], 'برش بیضه')}${e('<b>testis</b>')} یا ${e('testicle')} (جمع: ${e('testes')}؛ ریشه‌ها ${e('orchi/o, orchid/o, test/o')}) دو غده بیضی‌شکل در ${e('<b>scrotum</b>')} (کیسه بیضه؛ ${e('scrot/o')}) است. درون آن لوله‌های پیچ‌درپیچ ${e('<b>seminiferous tubules</b>')} اسپرم می‌سازند.`),
          L('دمای مناسب', `کیسه بیضه بیرون از شکم است تا دمای بیضه حدود ۲ تا ۳ درجه کمتر از بدن بماند؛ اسپرم‌سازی به این دمای کمتر نیاز دارد.<br>سلول‌های ${e('<b>interstitial (Leydig) cells</b>')} میان لوله‌ها ${e('testosterone')} می‌سازند.${memo('orchi/o مثل «ارکیده»؛ ریشه یونانی گیاه از شکل غده‌اش آمده است.')}`),
          M('اسپرم در کدام بخش بیضه ساخته می‌شود؟', ['seminiferous tubules', 'epididymis', 'prostate', 'urethra'], 'لوله‌های منی‌ساز.', null, F('testis', [])),
          M('تستوسترون را کدام سلول‌ها می‌سازند؟', ['interstitial (Leydig) cells', 'Sertoli cells', 'ovarian follicle', 'corpus luteum'], 'سلول‌های بینابینی.'),
          T('کیسه بیضه دمای بیضه را کمتر از دمای بدن نگه می‌دارد.', true, 'برای اسپرم‌سازی.'),
          W('واژه‌ای بساز به معنی «التهاب بیضه»', ['orchi/o', '-itis'], ['scrot/o', '-ectomy', 'prostat/o'], 'orchitis.'),
          P('هر واژه را به معنی‌اش وصل کن', [['testis', 'بیضه'], ['scrotum', 'کیسه بیضه'], ['seminiferous tubules', 'لوله‌های منی‌ساز'], ['interstitial cells', 'سلول‌های سازنده تستوسترون']], 'بیضه.'),
          B('ریشه ___ در orchiectomy یعنی بیضه.', ['orchi/o', 'oophor/o', 'osche/o'], 'orchi/o.'),
          S('املای انگلیسی «کیسه بیضه» را بنویس', 'scrotum', 'scrot/o.', 'scro…'),
          N('t2f:ml')
        ]
      },
      {
        id: 'ml2', title: 'اسپرم و اسپرم‌سازی', icon: '🐟', items: [
          L('ساختار اسپرم', `${fig('sperm-cell', [], 'اسپرم')}${e('<b>spermatozoon</b>')} (جمع: ${e('spermatozoa')}؛ ریشه‌ها ${e('sperm/o, spermat/o')}) سه بخش دارد:<br>• ${e('head')}: هسته با ۲۳ کروموزوم و کلاهک ${e('<b>acrosome</b>')} که آنزیم نفوذ به تخمک دارد<br>• ${e('midpiece')}: میتوکندری‌ها برای انرژی<br>• ${e('tail (flagellum)')}: دم برای حرکت`),
          L('اسپرم‌سازی', `${e('<b>spermatogenesis</b>')} از بلوغ آغاز می‌شود و حدود ۷۴ روز طول می‌کشد. اسپرم‌ها در اپیدیدیم بالغ می‌شوند و توانایی حرکت (${e('motility')}) پیدا می‌کنند.${wb('spermat/o', '-genesis')} ← ساخت اسپرم${pearl('در Case Study 16-2، Ruth در آزمایشگاه IVF <bdi dir="ltr">“sperm motility”</bdi> یعنی تحرک اسپرم را در نمونه بررسی می‌کند.')}`),
          M('کلاهک سر اسپرم که آنزیم نفوذ به تخمک دارد…', ['acrosome', 'flagellum', 'midpiece', 'nucleus'], 'آکروزوم.', null, F('sperm-cell', [])),
          M('میتوکندری‌های اسپرم در کدام بخش هستند؟', ['midpiece', 'head', 'tail', 'acrosome'], 'تأمین انرژی دم.'),
          T('spermatogenesis یعنی ساخته شدن اسپرم.', true, 'spermat/o + -genesis.'),
          O('بخش‌های اسپرم را از جلو به عقب بچین', ['acrosome', 'head', 'midpiece', 'tail'], 'از نوک تا دم.'),
          P('هر بخش را به کارش وصل کن', [['acrosome', 'نفوذ به تخمک'], ['head', 'هسته و کروموزوم‌ها'], ['midpiece', 'انرژی'], ['flagellum', 'حرکت']], 'اسپرم.'),
          B('توانایی حرکت اسپرم را sperm ___ می‌گویند.', ['motility', 'count', 'morphology'], 'تحرک.'),
          S('املای انگلیسی «اسپرم‌سازی» را بنویس', 'spermatogenesis', 'spermat/o + -genesis.', 'spermato…'),
          N('f2t:ml')
        ]
      },
      {
        id: 'ml3', title: 'مسیر اسپرم', icon: '🛤️', items: [
          L('از بیضه تا بیرون', `${fig('sperm-path', [], 'مسیر اسپرم')}${e('seminiferous tubules')} ← ${e('<b>epididymis</b>')} (اپیدیدیم؛ بلوغ و ذخیره) ← ${e('<b>vas deferens</b>')} (مجرای وابران؛ ${e('vas/o')}) ← ${e('ejaculatory duct')} ← ${e('<b>urethra</b>')} (پیشابراه).`),
          L('در بالین', `${wb('vas/o', '-ectomy')} ← ${e('<b>vasectomy</b>')}: بریدن و بستن مجرای وابران برای جلوگیری از بارداری.${pearl('در Case Study 15-1، آقای Derek، ۴۸ ساله، همراه با ترمیم فتق اینگوینال دوطرفه، <bdi dir="ltr">“elective vasectomy”</bdi> یعنی وازکتومی انتخابی هم انجام داد.')}${memo('برای حفظ مسیر: <bdi dir="ltr">“S-E-V-E-U”</bdi>: Seminiferous، Epididymis، Vas، Ejaculatory، Urethra.')}`),
          M('اسپرم کجا بالغ و ذخیره می‌شود؟', ['epididymis', 'prostate', 'urethra', 'seminal vesicle'], 'اپیدیدیم.', null, F('sperm-path', [])),
          M('در وازکتومی کدام مجرا بریده می‌شود؟', ['vas deferens', 'urethra', 'ejaculatory duct', 'uterine tube'], 'vas/o.'),
          T('پیشابراه مرد هم ادرار و هم منی را بیرون می‌برد.', true, 'urethra مشترک است.'),
          O('مسیر اسپرم را بچین', ['seminiferous tubules', 'epididymis', 'vas deferens', 'ejaculatory duct', 'urethra'], 'S-E-V-E-U.'),
          P('هر بخش را به کارش وصل کن', [['epididymis', 'بلوغ و ذخیره اسپرم'], ['vas deferens', 'انتقال اسپرم به لگن'], ['ejaculatory duct', 'ورود به پیشابراه'], ['urethra', 'خروج منی و ادرار']], 'مسیر.'),
          B('بریدن مجرای وابران ___ است.', ['vasectomy', 'orchiectomy', 'circumcision'], 'vas/o + -ectomy.'),
          S('املای انگلیسی «اپیدیدیم» را بنویس', 'epididymis', 'epididym/o.', 'epidid…'),
          N('d2t:ml')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'ml4', title: 'مقطع کناری لگن مرد', icon: '🔎', items: [
          L('همسایه‌ها', `${fig('male-sagittal', [], 'مقطع لگن مرد')}${e('<b>prostate gland</b>')} زیر مثانه است و ابتدای پیشابراه را دور می‌زند. ${e('<b>seminal vesicles</b>')} پشت مثانه‌اند و راست‌روده پشت پروستات است؛ برای همین پزشک با ${e('<b>digital rectal examination (DRE)</b>')} پروستات را لمس می‌کند.`),
          L('در بالین', `${pearl('در Case Study، پزشک در DRE آقای Dexter، ۶۰ ساله، پروستاتی حدود ۵۰ گرمی و بزرگ لمس کرد و تشخیص BPH مطرح شد.')}${memo('پروستات مثل حلقه‌ای دور پیشابراه است؛ اگر بزرگ شود جریان ادرار را تنگ می‌کند.')}`),
          M('پروستات نسبت به مثانه کجاست؟', ['زیر مثانه، دور ابتدای پیشابراه', 'بالای مثانه', 'درون کیسه بیضه', 'کنار کلیه'], 'زیر مثانه.', null, F('male-sagittal', [])),
          M('چرا پروستات را از راه راست‌روده معاینه می‌کنند؟', ['چون درست جلوی راست‌روده قرار دارد', 'چون درون راست‌روده است', 'چون از شکم دیده نمی‌شود', 'چون در کیسه بیضه است'], 'DRE.'),
          T('DRE یعنی معاینه پروستات با انگشت از راه راست‌روده.', true, 'digital rectal examination.'),
          O('ساختارها را از جلو به عقب بچین', ['pubic bone', 'urinary bladder', 'seminal vesicle', 'rectum'], 'از جلو به عقب.'),
          P('هر واژه را به معنی‌اش وصل کن', [['prostate gland', 'پروستات'], ['seminal vesicle', 'کیسه منی'], ['rectum', 'راست‌روده'], ['DRE', 'معاینه انگشتی راست‌روده']], 'لگن مرد.'),
          B('ریشه ___ یعنی پروستات.', ['prostat/o', 'prostrat/o', 'proct/o'], 'prostate نه prostrate.'),
          S('املای انگلیسی «پروستات» را بنویس', 'prostate', 'prostat/o.', 'prost…'),
          N('r2m:ml')
        ]
      },
      {
        id: 'ml5', title: 'غدد و منی', icon: '💧', items: [
          L('سه غده', `${tbl([['غده', 'سهم در منی'], [e('seminal vesicles'), 'حدود ۶۰٪؛ مایع قندی (فروکتوز) برای انرژی اسپرم'], [e('prostate gland'), 'حدود ۳۰٪؛ مایع قلیایی'], [e('bulbourethral (Cowper) glands'), 'مخاط روان‌کننده پیش از انزال']])}`),
          L('منی', `${e('<b>semen</b>')} (${e('semin/o')}) مخلوط اسپرم و ترشح این غدد است. ${e('<b>ejaculation</b>')} یعنی بیرون ریختن منی.${wb('a-', 'sperm/o', '-ia')} ← ${e('aspermia')}: نبود منی یا اسپرم<br>${wb('olig/o', 'sperm/o', '-ia')} ← ${e('oligospermia')}: کمی تعداد اسپرم${memo('غدد Cowper در مرد همتای غدد Bartholin در زن هستند؛ هر دو روان‌کننده‌اند.')}`),
          M('بیشترین حجم منی از کدام غده است؟', ['seminal vesicles', 'prostate', 'Cowper glands', 'testis'], 'حدود ۶۰٪.'),
          M(`${e('<b>oligospermia</b>')} یعنی…`, ['کمی تعداد اسپرم', 'نبود منی', 'خون در منی', 'التهاب بیضه'], 'olig/o = کم.'),
          T('غدد Cowper همتای غدد Bartholin در زن هستند.', true, 'غدد روان‌کننده.'),
          W('واژه‌ای بساز به معنی «کمی اسپرم»', ['olig/o', 'sperm/o', '-ia'], ['a-', 'orchi/o', '-ectomy'], 'oligospermia.'),
          P('هر غده را به ترشحش وصل کن', [['seminal vesicles', 'فروکتوز'], ['prostate', 'مایع قلیایی'], ['Cowper glands', 'مخاط روان‌کننده'], ['testis', 'اسپرم']], 'منی.'),
          B('بیرون ریختن منی ___ است.', ['ejaculation', 'erection', 'ovulation'], 'انزال.'),
          S('املای انگلیسی «منی» را بنویس', 'semen', 'semin/o.', 'sem…'),
          N('m2r:ml')
        ]
      },
      {
        id: 'ml6', title: 'طناب اسپرماتیک و کانال اینگوینال', icon: '🪢', items: [
          L('طناب اسپرماتیک', `${e('<b>spermatic cord</b>')} مجرای وابران را همراه با سرخرگ، سیاهرگ‌ها (${e('pampiniform plexus')})، عصب و عضله ${e('cremaster')} از کیسه بیضه به لگن می‌برد. این طناب از ${e('<b>inguinal canal</b>')} (کانال کشاله ران) می‌گذرد.`),
          L('در بالین', `جای عبور طناب نقطه ضعیف دیواره شکم است: ${e('<b>inguinal hernia</b>')} (فتق کشاله ران). ترمیم آن ${e('herniorrhaphy')} است.${pearl('سناریوی APPLY: پزشک به Rick Springs گفت شاید علاوه بر آسیب بیضه، فتق کشاله ران هم داشته باشد.')}${memo('-rrhaphy یعنی دوختن؛ herniorrhaphy یعنی دوختن و ترمیم فتق.')}`),
          M('طناب اسپرماتیک از کدام کانال می‌گذرد؟', ['inguinal canal', 'cervical canal', 'urethra', 'femoral canal'], 'کشاله ران.'),
          M(`${e('<b>herniorrhaphy</b>')} یعنی…`, ['ترمیم فتق با دوختن', 'برداشتن بیضه', 'بریدن مجرای وابران', 'برش فتق'], '-rrhaphy = دوختن.'),
          T('طناب اسپرماتیک فقط شامل مجرای وابران است.', false, 'رگ‌ها، عصب و عضله هم دارد.'),
          O('مسیر طناب را از بیضه به لگن بچین', ['testis', 'spermatic cord', 'inguinal canal', 'pelvic cavity'], 'رو به بالا.'),
          P('هر واژه را به معنی‌اش وصل کن', [['spermatic cord', 'طناب اسپرماتیک'], ['inguinal canal', 'کانال کشاله ران'], ['cremaster', 'عضله بالابرنده بیضه'], ['herniorrhaphy', 'ترمیم فتق']], 'طناب.'),
          B('فتق در کشاله ران ___ hernia است.', ['inguinal', 'umbilical', 'hiatal'], 'inguin/o.'),
          S('املای انگلیسی «کشاله ران» (صفت) را بنویس', 'inguinal', 'inguin/o + -al.', 'ingu…'),
          N('t2f:ml')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'ml7', title: 'آلت تناسلی', icon: '🧬', items: [
          L('ساختار', `${fig('penis-xs', [], 'برش عرضی آلت')}${e('<b>penis</b>')} (${e('phall/o, pen/o')}) سه ستون بافت نعوظی دارد:<br>• دو ${e('<b>corpora cavernosa</b>')} در بالا<br>• یک ${e('<b>corpus spongiosum</b>')} در پایین که پیشابراه از آن می‌گذرد و سر آلت (${e('glans penis')}) را می‌سازد<br>پوست روی سر آلت ${e('<b>prepuce</b>')} (foreskin) است.`),
          L('ختنه', `${e('<b>circumcision</b>')}: برداشتن پوست روی سر آلت (${e('prepuce')}).${pearl('سناریوی APPLY: Bob Schaeffer Jr نوزاد است و پدرش برای ختنه او و تشخیص بیضه نزول‌نکرده دوطرفه سؤال دارد.')}${wb('balan/o', '-itis')} ← ${e('balanitis')}: التهاب سر آلت`),
          M('پیشابراه از کدام ستون نعوظی می‌گذرد؟', ['corpus spongiosum', 'corpus cavernosum', 'corpus luteum', 'glans clitoris'], 'جسم اسفنجی.', null, F('penis-xs', [])),
          M('برداشتن پوست روی سر آلت چه نام دارد؟', ['circumcision', 'vasectomy', 'orchiectomy', 'balanoplasty'], 'ختنه.'),
          T('balan/o یعنی سر آلت (glans penis).', true, 'balanitis.'),
          W('واژه‌ای بساز به معنی «التهاب سر آلت»', ['balan/o', '-itis'], ['phall/o', '-ectomy', 'orchi/o'], 'balanitis.'),
          P('هر بخش را به معنی‌اش وصل کن', [['corpora cavernosa', 'دو ستون نعوظی بالایی'], ['corpus spongiosum', 'ستون اسفنجی با پیشابراه'], ['glans penis', 'سر آلت'], ['prepuce', 'پوست روی سر آلت']], 'آلت.'),
          B('نام دیگر prepuce ___ است.', ['foreskin', 'frenulum', 'glans'], 'پوست ختنه‌گاه.'),
          S('املای انگلیسی «ختنه» را بنویس', 'circumcision', 'circum- + cision.', 'circum…'),
          N('f2t:ml')
        ]
      },
      {
        id: 'ml8', title: 'نعوظ و انزال', icon: '⚡', items: [
          L('نعوظ', `${e('<b>erection</b>')}: پر شدن بافت نعوظی از خون با اتساع سرخرگ‌ها؛ با پیام دستگاه عصبی پاراسمپاتیک.<br>${e('<b>ejaculation</b>')}: بیرون راندن منی با انقباض مجاری و عضلات؛ با پیام سمپاتیک.${memo('جمله Point and Shoot را به خاطر بسپار: حرف P یعنی پاراسمپاتیک برای نعوظ و حرف S یعنی سمپاتیک برای انزال.')}`),
          L('در بالین', `${e('<b>erectile dysfunction (ED)</b>')} یا ${e('impotence')}: ناتوانی در نعوظ کافی.${pearl('در Case Study 15-2، آقای Diego، ۶۷ ساله با سابقه BPH، از ED شکایت داشت؛ پس از رد علت‌های روانی (psychogenic)، داروی گشادکننده رگ تجویز شد.')}${vs(['ناتوانی جنسی', 'erectile dysfunction<br>ناتوانی در نعوظ'], ['نازایی', 'infertility<br>ناتوانی در باروری'])}`),
          M('نعوظ با پیام کدام دستگاه عصبی است؟', ['parasympathetic', 'sympathetic', 'somatic', 'central only'], 'Point.'),
          M('اختصار ED یعنی…', ['erectile dysfunction', 'ejaculatory duct', 'estimated delivery', 'endometrial disease'], 'ناتوانی در نعوظ.'),
          T('impotence نام دیگر erectile dysfunction است.', true, 'هم‌معنی.'),
          O('رخدادها را بچین', ['arousal', 'erection', 'emission', 'ejaculation'], 'از تحریک تا انزال.'),
          P('هر واژه را به معنی‌اش وصل کن', [['erection', 'نعوظ'], ['ejaculation', 'انزال'], ['impotence', 'ناتوانی جنسی'], ['psychogenic', 'با منشأ روانی']], 'عملکرد.'),
          B('داروهای ED اغلب ___ هستند.', ['vasodilators', 'diuretics', 'antibiotics'], 'گشادکننده رگ.'),
          S('املای انگلیسی «نعوظ» را بنویس', 'erection', 'erect + -ion.', 'erec…'),
          N('d2t:ml')
        ]
      },
      {
        id: 'ml9', title: 'بلوغ و تستوسترون', icon: '🧔', items: [
          L('تستوسترون', `${e('<b>testosterone</b>')} یک ${e('androgen')} است (ریشه ${e('andr/o')} یعنی مرد) که در بلوغ (${e('<b>puberty</b>')}) صفات ثانویه را می‌سازد: رشد آلت و بیضه، موی صورت و بدن، بم شدن صدا و افزایش عضله. ${e('FSH')} اسپرم‌سازی و ${e('LH')} ساخت تستوسترون را تحریک می‌کند.`),
          L('در بالین', `${pearl('سناریوی APPLY: آقای James Cocoa برای کلاس بهداشت پسران نوجوان درباره دستگاه تناسلی مردانه، بلوغ و تستوسترون درس می‌دهد.')}${wb('an-', 'orch/o', '-ism')} ← ${e('anorchism')}: نبود بیضه<br>${e('hypogonadism')}: کم‌کاری غدد جنسی و کمبود تستوسترون`),
          M('تستوسترون در کدام گروه هورمون‌هاست؟', ['androgen', 'estrogen', 'progestin', 'gonadotropin'], 'andr/o = مرد.'),
          M('کدام هورمون هیپوفیز ساخت تستوسترون را تحریک می‌کند؟', ['LH', 'FSH', 'prolactin', 'oxytocin'], 'روی سلول‌های Leydig.'),
          T('صدای بم و موی صورت از صفات ثانویه جنسی مردانه است.', true, 'اثر تستوسترون.'),
          O('محور هورمونی را بچین', ['hypothalamus (GnRH)', 'pituitary (LH, FSH)', 'testis', 'testosterone'], 'از مغز تا بیضه.'),
          P('هر هورمون را به کارش وصل کن', [['FSH', 'تحریک اسپرم‌سازی'], ['LH', 'تحریک ساخت تستوسترون'], ['testosterone', 'صفات ثانویه مردانه'], ['GnRH', 'فرمان هیپوتالاموس']], 'محور.'),
          B('ریشه ___ یعنی مرد.', ['andr/o', 'gynec/o', 'anthr/o'], 'androgen.'),
          S('املای انگلیسی «بلوغ» را بنویس', 'puberty', 'pubert/o.', 'pube…'),
          N('m2r:ml')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* زایا — دنیای ۳: بارداری و زایمان
 * سطح ۱: لقاح تا جنین • سطح ۲: شمارش بارداری • سطح ۳: زایمان و نوزاد */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'pg', sym: 'Pg', name: 'بارداری و زایمان', short: 'بارداری', sub: 'لقاح و لانه‌گزینی، رویان و جنین، جفت و پرده‌ها، گراویدا و پارا، تاریخ زایمان، مراحل زایمان، نمایش جنین، پس از زایمان و نوزاد',
    color: '#E8913A', dark: '#B5641A', light: '#FDEEDC',
    levels: ['لقاح تا جنین', 'شمارش بارداری', 'زایمان و نوزاد'],
    gens: EA.genIds('pg'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'pg1', title: 'لقاح و لانه‌گزینی', icon: '✨', items: [
          L('لقاح', `${fig('fertilization', [], 'از لقاح تا لانه‌گزینی')}${e('<b>fertilization</b>')} (${e('conception')}): پیوند اسپرم و تخمک در یک‌سوم بیرونی لوله رحم. حاصل آن ${e('<b>zygote</b>')} است که با تقسیم به ${e('morula')} و سپس ${e('<b>blastocyst</b>')} تبدیل می‌شود.`),
          L('لانه‌گزینی', `حدود روز ۶ تا ۷ پس از لقاح، بلاستوسیست در آندومتر فرو می‌رود: ${e('<b>implantation</b>')}. از این پس ${e('<b>hCG</b>')} (هورمون بارداری) ساخته می‌شود و تست بارداری را مثبت می‌کند.${memo('hCG جسم زرد را زنده نگه می‌دارد تا پروژسترون ادامه یابد و قاعدگی نشود.')}${pearl('در Case Study 16-2، Ruth در آزمایشگاه IVF کار می‌کند؛ در GIFT گامت‌ها و در ZIFT زیگوت به لوله رحم منتقل می‌شوند.')}`),
          M('لقاح معمولاً در کجای لوله رحم رخ می‌دهد؟', ['یک‌سوم بیرونی (آمپول)', 'دهانه رحم', 'تخمدان', 'واژن'], 'ampulla.', null, F('fertilization', [])),
          M('تست بارداری کدام هورمون را می‌سنجد؟', ['hCG', 'FSH', 'LH', 'prolactin'], 'human chorionic gonadotropin.'),
          T('لانه‌گزینی حدود یک هفته پس از لقاح انجام می‌شود.', true, 'روز ۶ تا ۷.'),
          O('رخدادها را بچین', ['fertilization', 'zygote', 'morula', 'blastocyst', 'implantation'], 'از لقاح تا لانه‌گزینی.'),
          P('هر واژه را به معنی‌اش وصل کن', [['conception', 'لقاح'], ['zygote', 'تخم'], ['blastocyst', 'توده توخالی سلولی'], ['implantation', 'لانه‌گزینی']], 'آغاز بارداری.'),
          B('انتقال زیگوت به لوله رحم در IVF را ___ می‌گویند.', ['ZIFT', 'GIFT', 'IUD'], 'zygote intrafallopian transfer.'),
          S('املای انگلیسی «لانه‌گزینی» را بنویس', 'implantation', 'in- + plant + -ation.', 'impl…'),
          N('t2f:pg')
        ]
      },
      {
        id: 'pg2', title: 'رویان، جنین و سه‌ماهه‌ها', icon: '👶', items: [
          L('رویان و جنین', `${fig('embryo-photos', ['رشد رویان در هفته‌های نخست'], 'رویان')}تا پایان هفته ۸ پس از لقاح: ${e('<b>embryo</b>')} (رویان؛ ${e('embry/o')}). از هفته ۹ تا تولد: ${e('<b>fetus</b>')} (جنین؛ ${e('fet/o')}). اندام‌ها در دوره رویانی شکل می‌گیرند؛ برای همین داروها و عفونت‌ها در این دوره بیشترین آسیب را دارند.`),
          L('سه‌ماهه‌ها', `${fig('trimesters', [], 'سه‌ماهه‌های بارداری')}بارداری حدود ۴۰ هفته از ${e('LMP')} است و به سه ${e('<b>trimester</b>')} تقسیم می‌شود.${fig('fetus-photo', ['جنین در کیسه آمنیون'], 'جنین')}${memo('embryo تا هفته ۸ است و اندام‌ها را می‌سازد؛ fetus از هفته ۹ است و اندام‌ها را رشد می‌دهد.')}`),
          M('جنین از چه زمانی fetus نامیده می‌شود؟', ['از هفته ۹ پس از لقاح', 'از لحظه لقاح', 'از هفته ۲۰', 'از تولد'], 'پس از دوره رویانی.', null, F('trimesters', [])),
          M('کدام دوره بیشتر در برابر داروها و عفونت‌ها آسیب‌پذیر است؟', ['دوره رویانی', 'سه‌ماهه سوم', 'دوره نوزادی', 'پس از زایمان'], 'ساخته شدن اندام‌ها.'),
          T('بارداری کامل حدود ۴۰ هفته از اولین روز آخرین قاعدگی است.', true, 'LMP.', F('fetus-photo', [])),
          O('مراحل رشد را بچین', ['zygote', 'embryo', 'fetus', 'neonate'], 'از تخم تا نوزاد.'),
          P('هر واژه را به معنی‌اش وصل کن', [['embryo', 'رویان'], ['fetus', 'جنین'], ['trimester', 'سه‌ماهه'], ['neonate', 'نوزاد']], 'رشد.'),
          B('ریشه ___ یعنی جنین.', ['fet/o', 'nat/o', 'gravid/o'], 'fetal.'),
          S('املای انگلیسی «رویان» را بنویس', 'embryo', 'embry/o.', 'emb…'),
          N('f2t:pg')
        ]
      },
      {
        id: 'pg3', title: 'جفت و پرده‌ها', icon: '🫓', items: [
          L('جفت', `${fig('placenta', [], 'جفت و بند ناف')}${e('<b>placenta</b>')} (${e('placent/o')}) اندام اکسیژن، غذا و تبادل مواد زائد بین مادر و جنین است. ${e('<b>umbilical cord</b>')} (بند ناف) دو سرخرگ و یک سیاهرگ دارد.${memo('بند ناف «دو آ، یک و»: دو artery و یک vein.')}`),
          L('پرده‌ها و مایع', `${fig('placenta-membranes', ['جفت و پرده‌های جنینی'], 'پرده‌ها')}• ${e('<b>amnion</b>')}: پرده درونی؛ کیسه آب با ${e('amniotic fluid')} (${e('amni/o')})<br>• ${e('<b>chorion</b>')}: پرده بیرونی که بخشی از جفت را می‌سازد (${e('chori/o')})${fig('pregnant-uterus', [], 'رحم باردار')}`),
          M('بند ناف چند رگ دارد؟', ['دو سرخرگ و یک سیاهرگ', 'یک سرخرگ و یک سیاهرگ', 'دو سیاهرگ و یک سرخرگ', 'یک رگ'], 'دو آ، یک و.', null, F('placenta', [])),
          M('پرده درونی کیسه آب کدام است؟', ['amnion', 'chorion', 'endometrium', 'placenta'], 'amni/o.', null, F('placenta-membranes', [])),
          T('chorion بیرونی‌ترین پرده جنینی است و در ساخت جفت شرکت دارد.', true, 'chori/o.'),
          W('واژه‌ای بساز به معنی «سوراخ کردن کیسه آمنیون (برای کشیدن مایع)»', ['amni/o', '-centesis'], ['chori/o', '-tomy', 'placent/o'], 'amniocentesis.'),
          P('هر بخش را به کارش وصل کن', [['placenta', 'تبادل مواد'], ['umbilical cord', 'اتصال جنین به جفت'], ['amnion', 'کیسه آب'], ['chorion', 'پرده بیرونی']], 'جفت.'),
          B('مایع دور جنین ___ fluid است.', ['amniotic', 'cerebrospinal', 'synovial'], 'amni/o.'),
          S('املای انگلیسی «جفت» را بنویس', 'placenta', 'placent/o.', 'plac…'),
          N('d2t:pg')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'pg4', title: 'گراویدا و پارا', icon: '🔢', items: [
          L('شمارش', `${fig('gravida-para', [], 'گراویدا و پارا')}• ${e('<b>gravida (G)</b>')}: تعداد بارداری‌ها، صرف‌نظر از نتیجه (بارداری فعلی هم شمرده می‌شود)<br>• ${e('<b>para (P)</b>')}: تعداد زایمان‌ها پس از هفته ۲۰، زنده یا مرده<br>${tbl([['واژه', 'معنی'], [e('nulligravida'), 'هرگز باردار نشده'], [e('primigravida'), 'بار اول باردار'], [e('multigravida'), 'چند بار باردار'], [e('nullipara'), 'هیچ زایمانی نداشته'], [e('primipara'), 'یک زایمان'], [e('multipara'), 'چند زایمان']])}`),
          L('در بالین', `${pearl('در Case Study، Abigail <bdi dir="ltr">“G2 P1”</bdi> است: بار دوم باردار و یک زایمان قبلی دارد.')}${pearl('در گزارش مشاوره High-Risk OB، بیمار ۲۳ ساله <bdi dir="ltr">“multigravida, nullipara”</bdi> است: چند بار باردار شده (سه سقط) ولی هنوز زایمانی نداشته است.')}${memo('Gravida از gravid (سنگین، باردار)؛ Para از parere (زاییدن).')}`),
          M('زنی که سه بار سقط داشته و اکنون باردار است، گراویدای چند است؟', ['G4', 'G3', 'G1', 'G0'], 'سه سقط + بارداری فعلی.', null, F('gravida-para', [])),
          M(`${e('<b>nullipara</b>')} یعنی…`, ['زنی که زایمانی نداشته', 'زنی که هرگز باردار نشده', 'زنی که یک زایمان داشته', 'زن یائسه'], 'nulli- = هیچ.'),
          T('primigravida یعنی زنی که برای اولین بار باردار است.', true, 'primi- = اول.'),
          O('واژه‌ها را از کم به زیاد بچین', ['nulligravida', 'primigravida', 'multigravida'], 'هیچ، یک، چند.'),
          P('هر واژه را به معنی‌اش وصل کن', [['nulligravida', 'هرگز باردار نشده'], ['primipara', 'یک زایمان'], ['multipara', 'چند زایمان'], ['nullipara', 'بدون زایمان']], 'G و P.'),
          B('Abigail با دو بارداری و یک زایمان قبلی ___ است.', ['G2 P1', 'G1 P2', 'G2 P2'], 'گراویدا ۲، پارا ۱.'),
          S('املای انگلیسی «زن باردار برای اولین بار» را بنویس', 'primigravida', 'primi- + gravida.', 'primig…'),
          N('m2r:pg')
        ]
      },
      {
        id: 'pg5', title: 'تاریخ زایمان', icon: '🗓️', items: [
          L('قاعده نگله', `${e('<b>LMP</b>')}: اولین روز آخرین قاعدگی<br>${e('<b>EDD</b>')} (${e('EDC')}): تاریخ تخمینی زایمان<br>${e('<b>Naegele rule</b>')}: به LMP هفت روز اضافه کن، سه ماه کم کن و یک سال اضافه کن؛ یا به سادگی ۲۸۰ روز به LMP اضافه کن.${memo('مثال: LMP یکم ژانویه ← EDD هشتم اکتبر.')}`),
          L('سن بارداری', `${e('<b>gestational age (GA)</b>')} از LMP به هفته و روز گفته می‌شود؛ مثلاً ۳۶ هفته و ۶ روز.<br>• ${e('preterm')}: پیش از ۳۷ هفته<br>• ${e('term')}: ۳۷ تا ۴۲ هفته<br>• ${e('postterm')}: پس از ۴۲ هفته${pearl('ابزار «ماشین‌حساب بارداری» زایا را باز کن: LMP و تاریخ ویزیت را بده تا EDD، سن بارداری و سه‌ماهه را ببینی.')}`),
          M('بر پایه قاعده نگله، EDD چند روز پس از LMP است؟', ['۲۸۰ روز', '۲۶۶ روز', '۳۰۰ روز', '۲۵۰ روز'], '۴۰ هفته.'),
          M('نوزاد ۳۵ هفته‌ای چه نام دارد؟', ['preterm', 'term', 'postterm', 'stillborn'], 'پیش از ۳۷ هفته.'),
          T('LMP یعنی آخرین روز آخرین قاعدگی.', false, 'اولین روز آن.'),
          O('گام‌های قاعده نگله را بچین', ['LMP', '+ 7 days', '− 3 months', '+ 1 year'], 'به ترتیب.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['LMP', 'اولین روز آخرین قاعدگی'], ['EDD', 'تاریخ تخمینی زایمان'], ['GA', 'سن بارداری'], ['IUP', 'بارداری داخل رحمی']], 'تاریخ‌ها.'),
          B('نوزاد ۳۹ هفته‌ای ___ است.', ['term', 'preterm', 'postterm'], '۳۷ تا ۴۲.'),
          S('املای انگلیسی «سن بارداری» (صفت) را بنویس', 'gestational', 'gestat/o + -ional.', 'gesta…'),
          N('t2f:pg')
        ]
      },
      {
        id: 'pg6', title: 'مراحل زایمان', icon: '⏱️', items: [
          L('سه مرحله', `${fig('labor-stages', [], 'مراحل زایمان')}${tbl([['مرحله', 'از … تا'], ['اول', 'آغاز انقباض‌ها تا باز شدن کامل دهانه رحم (۱۰ cm)'], ['دوم', 'باز شدن کامل تا خروج نوزاد'], ['سوم', 'خروج نوزاد تا خروج جفت (afterbirth)']])}`),
          L('واژه‌های بالینی', `• ${e('<b>effacement</b>')}: نازک شدن دهانه رحم (درصد)<br>• ${e('<b>dilation</b>')}: باز شدن دهانه رحم (سانتی‌متر)<br>• ${e('bloody show')}: ترشح خونی آغاز زایمان<br>• ${e('<b>PROM</b>')}: پارگی زودرس پرده‌ها<br>• ${e('NSVD')}: زایمان طبیعی خودبه‌خودی واژینال${pearl('در OB Delivery Note، دهانه رحم ۸۰٪ نازک شده (effacement) و ۴ سانتی‌متر باز (dilation) بود؛ bloody show و PROM هم داشت. بعد NSVD انجام شد، نوزاد Apgar 9/9 گرفت و حدود ۳۰۰ cc خون از دست رفت.')}`),
          M('مرحله دوم زایمان با چه چیزی تمام می‌شود؟', ['خروج نوزاد', 'خروج جفت', 'باز شدن کامل دهانه رحم', 'آغاز انقباض'], 'تولد.', null, F('labor-stages', [])),
          M(`${e('<b>effacement</b>')} یعنی…`, ['نازک شدن دهانه رحم', 'باز شدن دهانه رحم', 'پارگی پرده‌ها', 'خروج جفت'], 'به درصد.'),
          T('در مرحله اول زایمان دهانه رحم تا ۱۰ سانتی‌متر باز می‌شود.', true, 'dilation کامل.'),
          O('رخدادهای زایمان را بچین', ['contractions', 'full dilation', 'delivery of infant', 'delivery of placenta'], 'سه مرحله.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['PROM', 'پارگی زودرس پرده‌ها'], ['NSVD', 'زایمان طبیعی واژینال'], ['EBL', 'خون از دست رفته تخمینی'], ['FHR', 'ضربان قلب جنین']], 'برگه زایمان.'),
          B('جفت و پرده‌هایی که پس از نوزاد بیرون می‌آیند ___ نام دارند.', ['afterbirth', 'lochia', 'meconium'], 'مرحله سوم.'),
          S('املای انگلیسی «باز شدن» (دهانه رحم) را بنویس', 'dilation', 'dilat + -ion.', 'dila…'),
          N('f2t:pg')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'pg7', title: 'نمایش جنین', icon: '🔄', items: [
          L('کدام بخش اول؟', `${fig('presentations', [], 'نمایش‌های جنین')}${e('<b>presentation</b>')}: بخشی از جنین که اول وارد لگن می‌شود.<br>• ${e('<b>cephalic (vertex)</b>')}: سر؛ طبیعی و شایع‌ترین<br>• ${e('<b>breech</b>')}: باسن یا پاها<br>• ${e('<b>transverse</b>')}: شانه، جنین افقی`),
          L('در بالین', `${fig('breech-birth', ['نمایش بریچ'], 'زایمان بریچ')}${pearl('در Case Study، جنین Abigail <bdi dir="ltr">“right occiput posterior”</bdi> بود و سر جنین با لگن مادر تناسب نداشت (CPD)؛ پس از fetal distress، سزارین اورژانسی انجام شد.')}${memo('ریشه cephal/o یعنی سر و breech یعنی باسن.')}`),
          M('شایع‌ترین و طبیعی‌ترین نمایش کدام است؟', ['cephalic (vertex)', 'breech', 'transverse', 'face'], 'سر اول.', null, F('presentations', [])),
          M('در نمایش breech کدام بخش اول وارد لگن می‌شود؟', ['باسن یا پاها', 'سر', 'شانه', 'دست'], 'بریچ.', null, F('breech-birth', [])),
          T('در نمایش transverse جنین افقی در رحم قرار دارد.', true, 'شانه اول.'),
          W('واژه‌ای بساز به معنی «مربوط به سر»', ['cephal/o', '-ic'], ['pelv/o', '-ism', 'crani/o'], 'cephalic.'),
          P('هر نمایش را به بخش اول وصل کن', [['cephalic', 'سر'], ['breech', 'باسن'], ['transverse', 'شانه'], ['footling breech', 'پا']], 'نمایش‌ها.'),
          B('عدم تناسب سر جنین و لگن مادر ___ است.', ['CPD', 'PROM', 'IUGR'], 'cephalopelvic disproportion.'),
          S('املای انگلیسی «نمایش بریچ» را بنویس', 'breech', 'باسن اول.', 'bre…'),
          N('d2t:pg')
        ]
      },
      {
        id: 'pg8', title: 'پس از زایمان و شیردهی', icon: '🤱', items: [
          L('دوره نفاس', `${e('<b>puerperium</b>')} (${e('postpartum')}): حدود ۶ هفته پس از زایمان که رحم به اندازه پیشین برمی‌گردد (${e('involution')}). ترشح خونی واژن در این دوره ${e('<b>lochia</b>')} نام دارد.<br>${wb('post-', 'part/o', '-um')} ← پس از زایمان`),
          L('شیردهی', `${e('<b>colostrum</b>')}: اولین شیر زرد و پرپادتن چند روز اول<br>${e('prolactin')} شیر را می‌سازد و ${e('<b>oxytocin</b>')} شیر را بیرون می‌راند و رحم را منقبض می‌کند.${pearl('در Case Study، Abigail پس از سزارین rooming-in (هم‌اتاقی با نوزاد) و breast-feeding داشت؛ اکسی‌توسین شیردهی به جمع شدن رحم هم کمک می‌کند.')}`),
          M('ترشح خونی واژن پس از زایمان چه نام دارد؟', ['lochia', 'leukorrhea', 'colostrum', 'meconium'], 'لوکیا.'),
          M('کدام هورمون شیر را بیرون می‌راند و رحم را منقبض می‌کند؟', ['oxytocin', 'prolactin', 'estrogen', 'hCG'], 'اکسی‌توسین.'),
          T('colostrum اولین شیر پس از زایمان و سرشار از پادتن است.', true, 'آغوز.'),
          O('رخدادها را بچین', ['delivery', 'colostrum', 'mature milk', 'involution complete'], 'از زایمان تا ۶ هفته.'),
          P('هر واژه را به معنی‌اش وصل کن', [['puerperium', 'دوره پس از زایمان'], ['lochia', 'ترشح پس از زایمان'], ['colostrum', 'آغوز'], ['involution', 'بازگشت رحم']], 'نفاس.'),
          B('داروی Pitocin شکل ساختگی ___ است.', ['oxytocin', 'prolactin', 'progesterone'], 'تحریک انقباض.'),
          S('املای انگلیسی «پس از زایمان» را بنویس', 'postpartum', 'post- + part/o.', 'postp…'),
          N('m2r:pg')
        ]
      },
      {
        id: 'pg9', title: 'نوزاد و آپگار', icon: '🍼', items: [
          L('نمره آپگار', `${fig('apgar', [], 'نمره آپگار')}${e('<b>Apgar score</b>')} در دقیقه ۱ و ۵ پس از تولد: پنج نشانه، هر کدام ۰ تا ۲ امتیاز.${memo('هر حرف APGAR یک نشانه است: Appearance یعنی رنگ، Pulse یعنی نبض، Grimace یعنی واکنش، Activity یعنی تون عضله و Respiration یعنی تنفس.')}`),
          L('نوزاد', `${e('<b>neonate</b>')} (${e('neo-, nat/o')}): نوزاد تا ۲۸ روز. ${e('neonatology')} شاخه مراقبت نوزادان است.<br>${e('<b>meconium</b>')}: اولین مدفوع سبز تیره نوزاد.${fig('sonogram', ['تصویر سونوگرافی جنین'], 'سونوگرافی')}${pearl('Abigail و نوزاد هر دو Apgar 9/9 داشتند: ۹ در دقیقه یک و ۹ در دقیقه پنج؛ یعنی حال خوب.')}`),
          M('نمره آپگار معمولاً چه زمانی ثبت می‌شود؟', ['دقیقه ۱ و ۵ پس از تولد', 'پیش از زایمان', 'روز سوم', 'هفته ششم'], 'دو بار.', null, F('apgar', [])),
          M('حداکثر نمره آپگار چند است؟', ['۱۰', '۵', '۲۰', '۹'], '۵ نشانه × ۲.'),
          T('meconium اولین مدفوع نوزاد است.', true, 'سبز تیره.'),
          O('حروف APGAR را بچین', ['Appearance', 'Pulse', 'Grimace', 'Activity', 'Respiration'], 'به ترتیب نام.'),
          P('هر نشانه را به معنی‌اش وصل کن', [['Appearance', 'رنگ پوست'], ['Pulse', 'ضربان قلب'], ['Grimace', 'واکنش به تحریک'], ['Respiration', 'تنفس']], 'آپگار.'),
          B('نوزاد تا ۲۸ روز ___ نام دارد.', ['neonate', 'infant', 'toddler'], 'neo- + nat/o.'),
          S('املای انگلیسی «نوزاد» را بنویس', 'neonate', 'neo- + nat/o.', 'neon…'),
          N('t2f:pg')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* زایا — دنیای ۴: بیماری‌ها و عفونت‌های آمیزشی
 * سطح ۱: بیماری‌های زنان • سطح ۲: بیماری‌های مردان • سطح ۳: عوارض بارداری و عفونت‌های آمیزشی */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ds', sym: 'Ds', name: 'بیماری‌ها و عفونت‌های آمیزشی', short: 'بیماری‌ها', sub: 'اختلال‌های قاعدگی، فیبروم و افتادگی رحم، سرطان‌ها، بیماری‌های بیضه و پروستات، بارداری خارج رحمی و مشکلات جفت، عفونت‌های آمیزشی',
    color: '#8E6BD8', dark: '#6345A8', light: '#EEE8FB',
    levels: ['بیماری‌های زنان', 'بیماری‌های مردان', 'عوارض بارداری و عفونت‌ها'],
    gens: EA.genIds('ds'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'ds1', title: 'اختلال‌های قاعدگی', icon: '🩸', items: [
          L('واژه‌های -rrhea و -rrhagia', `${fig('menstrual-disorders', [], 'اختلال‌های قاعدگی')}${tbl([['واژه', 'معنی'], [e('amenorrhea'), 'نبود قاعدگی'], [e('dysmenorrhea'), 'قاعدگی دردناک'], [e('menorrhagia'), 'قاعدگی بسیار زیاد یا طولانی'], [e('metrorrhagia'), 'خونریزی رحم بین قاعدگی‌ها'], [e('oligomenorrhea'), 'قاعدگی کم و دیر به دیر']])}`),
          L('در بالین', `${pearl('سناریوی APPLY: خانم Rosie McConnell از قاعدگی بسیار زیاد (menorrhagia) و دردناک (dysmenorrhea) شکایت دارد؛ پزشک hysteroscopy خواست و فیبروم پیدا کرد.')}${pearl('سناریوی APPLY: خانم Jenni Takanado دیر قاعده شده، قاعدگی نامنظم و dyspareunia (درد هنگام آمیزش) دارد و برای infertility بررسی می‌شود.')}${memo('-rrhea جاری شدن است؛ -rrhagia فوران خون. menorrhagia یعنی خون زیاد در زمان قاعدگی؛ metrorrhagia یعنی خون از رحم در زمان نابجا.')}`),
          M(`${e('<b>dysmenorrhea</b>')} یعنی…`, ['قاعدگی دردناک', 'نبود قاعدگی', 'قاعدگی زیاد', 'خونریزی بین قاعدگی‌ها'], 'dys- = دردناک.', null, F('menstrual-disorders', [])),
          M('خونریزی رحم بین دو قاعدگی…', ['metrorrhagia', 'menorrhagia', 'amenorrhea', 'oligomenorrhea'], 'metr/o = رحم.'),
          T('amenorrhea یعنی نبود قاعدگی.', true, 'a- = بدون.'),
          W('واژه‌ای بساز به معنی «قاعدگی بسیار زیاد»', ['men/o', '-rrhagia'], ['metr/o', '-rrhea', 'a-'], 'menorrhagia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['amenorrhea', 'نبود قاعدگی'], ['oligomenorrhea', 'قاعدگی کم و دیر'], ['menorrhagia', 'قاعدگی زیاد'], ['dyspareunia', 'درد هنگام آمیزش']], 'قاعدگی.'),
          B('درد هنگام آمیزش ___ است.', ['dyspareunia', 'dysmenorrhea', 'dysuria'], 'dys- + pareunia.'),
          S('املای انگلیسی «نبود قاعدگی» را بنویس', 'amenorrhea', 'a- + men/o + -rrhea.', 'amen…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds2', title: 'رحم، دهانه رحم و لگن', icon: '🔴', items: [
          L('بیماری‌های رحم', `${fig('uterine-disorders', [], 'بیماری‌های رحم')}• ${e('<b>leiomyoma (fibroid)</b>')}: تومور خوش‌خیم عضله صاف رحم<br>• ${e('<b>endometriosis</b>')}: بافت آندومتر بیرون از رحم؛ درد و نازایی<br>• ${e('<b>cervical polyp</b>')}: زائده خوش‌خیم دهانه رحم${fig('fibroids', ['فیبروم‌ها در جاهای مختلف رحم'], 'فیبروم')}`),
          L('عفونت لگن', `${e('<b>pelvic inflammatory disease (PID)</b>')}: عفونت رحم، لوله‌ها و تخمدان‌ها، اغلب از ${e('STI')}؛ ممکن است لوله‌ها را ببندد و نازایی بدهد.${fig('cervical-polyp', ['پولیپ دهانه رحم'], 'پولیپ')}${pearl('در Case Study 16-1، پاتولوژی خانم Naomi پس از TAH-BSO <bdi dir="ltr">“leiomyomas”</bdi> را نشان داد ولی <bdi dir="ltr">“no evidence of PID”</bdi>؛ یعنی فیبروم بود ولی عفونت لگن نه.')}`),
          M('فیبروم رحم از چه بافتی است؟', ['عضله صاف رحم', 'آندومتر', 'دهانه رحم', 'تخمدان'], 'leiomyoma.', null, F('fibroids', [])),
          M('بافت آندومتر بیرون از رحم…', ['endometriosis', 'endometritis', 'adenomyosis', 'leiomyoma'], '-osis = حالت.'),
          T('PID ممکن است باعث نازایی شود.', true, 'بسته شدن لوله‌ها.', F('cervical-polyp', [])),
          W('واژه‌ای بساز به معنی «تومور عضله صاف»', ['lei/o', 'my/o', '-oma'], ['fibr/o', 'metr/o', '-itis'], 'leiomyoma.'),
          P('هر بیماری را به توضیحش وصل کن', [['leiomyoma', 'تومور خوش‌خیم عضله رحم'], ['endometriosis', 'آندومتر بیرون رحم'], ['cervical polyp', 'زائده دهانه رحم'], ['PID', 'عفونت لگن']], 'رحم.'),
          B('التهاب آندومتر ___ است.', ['endometritis', 'endometriosis', 'myometritis'], '-itis.'),
          S('املای انگلیسی «فیبروم رحم» (نام علمی) را بنویس', 'leiomyoma', 'lei/o + my/o + -oma.', 'leio…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds3', title: 'افتادگی و سرطان‌ها', icon: '⬇️', items: [
          L('افتادگی', `${fig('prolapse', [], 'افتادگی')}${e('<b>uterine prolapse</b>')}: پایین افتادن رحم به درون واژن<br>${e('<b>cystocele</b>')}: برآمدگی مثانه به دیواره جلویی واژن<br>${e('<b>rectocele</b>')}: برآمدگی راست‌روده به دیواره پشتی واژن${fig('cystocele', ['سیستوسل'], 'سیستوسل')}${fig('uterine-prolapse', ['درجه‌های افتادگی رحم'], 'افتادگی رحم')}`),
          L('سرطان‌ها', `• ${e('<b>cervical cancer</b>')}: اغلب از ${e('HPV')}؛ پیش از آن ${e('<b>dysplasia</b>')} (رشد نابجای سلول)<br>• ${e('<b>endometrial cancer</b>')}: با خونریزی پس از یائسگی<br>• ${e('<b>breast cancer</b>')}: توده در ماموگرافی؛ گاهی متاستاز به زیر بغل${fig('endometrial-cancer', ['سرطان آندومتر'], 'سرطان آندومتر')}${fig('mammogram-tumor', ['توده در ماموگرافی'], 'ماموگرافی')}${pearl('Chart Note: سابقه <bdi dir="ltr">“simple mastectomy”</bdi> برای سرطان پستان، و اکنون <bdi dir="ltr">“metastases to the axilla, liver and bone”</bdi>.')}`),
          M('برآمدگی مثانه به دیواره واژن…', ['cystocele', 'rectocele', 'uterine prolapse', 'hydrocele'], 'cyst/o = مثانه.', null, F('cystocele', [])),
          M('مهم‌ترین علت سرطان دهانه رحم کدام است؟', ['HPV', 'HSV', 'HIV', 'Candida'], 'ویروس پاپیلومای انسانی.'),
          T('خونریزی پس از یائسگی می‌تواند نشانه سرطان آندومتر باشد.', true, 'باید بررسی شود.', F('endometrial-cancer', [])),
          O('درجه‌های افتادگی رحم را بچین', ['normal', 'first degree', 'second degree', 'complete prolapse'], 'از طبیعی تا کامل.'),
          P('هر واژه را به معنی‌اش وصل کن', [['cystocele', 'افتادگی مثانه'], ['rectocele', 'افتادگی راست‌روده'], ['dysplasia', 'رشد نابجای سلول'], ['metastasis', 'گسترش سرطان']], 'افتادگی و سرطان.'),
          B('توده پستان در ___ دیده می‌شود.', ['mammogram', 'colposcopy', 'cystoscopy'], 'ماموگرافی.'),
          S('املای انگلیسی «سیستوسل» را بنویس', 'cystocele', 'cyst/o + -cele.', 'cysto…'),
          N('d2t:ds')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'ds4', title: 'بیضه و کیسه بیضه', icon: '🥜', items: [
          L('بیماری‌های کیسه بیضه', `${fig('scrotal-disorders', [], 'بیماری‌های کیسه بیضه')}• ${e('<b>hydrocele</b>')}: جمع شدن مایع در کیسه بیضه<br>• ${e('<b>varicocele</b>')}: سیاهرگ‌های گشاد و پیچ‌خورده بالای بیضه؛ «کیسه کرم»<br>• ${e('<b>spermatocele</b>')}: کیست پر از اسپرم در اپیدیدیم<br>• ${e('<b>testicular torsion</b>')}: پیچ خوردن طناب اسپرماتیک؛ اورژانس${fig('scrotal-abnormalities', ['ناهنجاری‌های کیسه بیضه'], 'کیسه بیضه')}${fig('varicocele', ['واریکوسل'], 'واریکوسل')}`),
          L('بیضه نزول‌نکرده', `${e('<b>cryptorchidism</b>')} یعنی بیضه به کیسه پایین نیامده است؛ ریشه ${e('crypt/o')} یعنی پنهان. درمان: ${e('<b>orchiopexy</b>')} (ثابت کردن بیضه در کیسه).${fig('cryptorchidism', ['مسیرهای بیضه نزول‌نکرده'], 'کریپتورکیدیسم')}${pearl('در Consult: آقای ۷۷ ساله <bdi dir="ltr">“history of cryptorchidism, corrected with orchiopexy”</bdi> داشت.')}`),
          M('جمع شدن مایع در کیسه بیضه…', ['hydrocele', 'varicocele', 'spermatocele', 'cystocele'], 'hydr/o = آب.', null, F('scrotal-abnormalities', [])),
          M('cryptorchidism یعنی…', ['بیضه نزول‌نکرده', 'نبود بیضه', 'التهاب بیضه', 'پیچ خوردن بیضه'], 'crypt/o = پنهان.', null, F('cryptorchidism', [])),
          T('testicular torsion یک اورژانس جراحی است.', true, 'خون بیضه قطع می‌شود.'),
          W('واژه‌ای بساز به معنی «ثابت کردن بیضه»', ['orchi/o', '-pexy'], ['orchid/o', '-ectomy', 'vas/o'], 'orchiopexy.'),
          P('هر بیماری را به توضیحش وصل کن', [['hydrocele', 'مایع در کیسه'], ['varicocele', 'سیاهرگ‌های گشاد'], ['spermatocele', 'کیست اسپرم'], ['torsion', 'پیچ خوردن طناب']], 'کیسه بیضه.'),
          B('برداشتن بیضه ___ است.', ['orchiectomy', 'orchiopexy', 'vasectomy'], '-ectomy.'),
          S('املای انگلیسی «بیضه نزول‌نکرده» (نام علمی) را بنویس', 'cryptorchidism', 'crypt/o + orchid/o + -ism.', 'crypt…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds5', title: 'پروستات', icon: '🌰', items: [
          L('بزرگی خوش‌خیم', `${fig('bph', [], 'BPH')}${e('<b>benign prostatic hyperplasia (BPH)</b>')}: بزرگ شدن خوش‌خیم پروستات در مردان مسن؛ پیشابراه تنگ می‌شود.<br>نشانه‌ها: ${e('hesitancy')} (دیر شروع شدن ادرار)، جریان ضعیف، ${e('nocturia')} (شب‌ادراری) و ${e('urinary retention')} (احتباس ادرار).${fig('bph-drawing', ['تنگ شدن پیشابراه با بزرگی پروستات'], 'بزرگی پروستات')}`),
          L('در بالین', `${pearl('در Case Study، آقای Dexter، ۶۰ ساله، hesitancy داشت. در DRE پروستاتش حدود ۵۰ گرم بود و ۱۲۰ mL ادرار در مثانه‌اش باقی می‌ماند. تشخیص: BPH with BNO (انسداد گردن مثانه).')}${e('<b>prostatitis</b>')}: التهاب پروستات<br>${e('<b>prostate cancer</b>')}: با ${e('PSA')} بالا و ندول در DRE${vs(['BPH', 'بزرگی خوش‌خیم'], ['prostate cancer', 'تومور بدخیم'])}`),
          M('شب‌ادراری چه نام دارد؟', ['nocturia', 'dysuria', 'hematuria', 'polyuria'], 'noct/o = شب.', null, F('bph-drawing', [])),
          M('در BPH چرا جریان ادرار ضعیف می‌شود؟', ['پروستات بزرگ پیشابراه را تنگ می‌کند', 'کلیه ادرار نمی‌سازد', 'مثانه پاره می‌شود', 'بیضه بزرگ می‌شود'], 'انسداد.', null, F('bph', [])),
          T('hyperplasia یعنی افزایش تعداد سلول‌ها.', true, 'hyper- + -plasia.'),
          O('رخدادهای BPH را بچین', ['prostate enlarges', 'urethra narrows', 'weak stream', 'urinary retention'], 'از علت تا عارضه.'),
          P('هر نشانه را به معنی‌اش وصل کن', [['hesitancy', 'دیر شروع شدن ادرار'], ['nocturia', 'شب‌ادراری'], ['urinary retention', 'احتباس ادرار'], ['dysuria', 'ادرار دردناک']], 'نشانه‌ها.'),
          B('التهاب پروستات ___ است.', ['prostatitis', 'prostatism', 'proctitis'], 'prostat/o + -itis.'),
          S('املای انگلیسی «شب‌ادراری» را بنویس', 'nocturia', 'noct/o + -uria.', 'noct…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds6', title: 'آلت و باروری مردانه', icon: '🔧', items: [
          L('ناهنجاری‌های پیشابراه', `${fig('hypospadias', ['جای نابجای سوراخ پیشابراه'], 'هایپوسپادیاس')}• ${e('<b>hypospadias</b>')}: سوراخ پیشابراه در زیر آلت<br>• ${e('<b>epispadias</b>')}: سوراخ پیشابراه در روی آلت<br>• ${e('<b>phimosis</b>')}: تنگی پوست سر آلت که عقب نمی‌رود؛ درمان: ختنه${memo('پیشوند hypo- یعنی زیر و پیشوند epi- یعنی روی.')}`),
          L('التهاب‌ها و نازایی', `${pearl('سناریوی APPLY: Jon Meriweather با التهاب سر آلت (balanitis)، التهاب بیضه (orchitis) و التهاب کیسه بیضه آمده و سابقه prostatitis دارد.')}${e('<b>male infertility</b>')}: اغلب از ${e('oligospermia')} یا ${e('azoospermia')} (نبود اسپرم در منی)؛ بررسی با ${e('semen analysis')}.`),
          M('سوراخ پیشابراه در زیر آلت…', ['hypospadias', 'epispadias', 'phimosis', 'priapism'], 'hypo- = زیر.', null, F('hypospadias', [])),
          M('azoospermia یعنی…', ['نبود اسپرم در منی', 'کمی اسپرم', 'اسپرم بی‌تحرک', 'خون در منی'], 'a- + zo/o + sperm/o.'),
          T('phimosis یعنی تنگی پوست روی سر آلت.', true, 'درمان: ختنه.'),
          W('واژه‌ای بساز به معنی «التهاب بیضه»', ['orchi/o', '-itis'], ['balan/o', '-cele', 'scrot/o'], 'orchitis.'),
          P('هر واژه را به معنی‌اش وصل کن', [['hypospadias', 'سوراخ پیشابراه زیر آلت'], ['epispadias', 'سوراخ پیشابراه روی آلت'], ['phimosis', 'تنگی پوست سر آلت'], ['azoospermia', 'نبود اسپرم']], 'آلت.'),
          B('آزمایش برای نازایی مردانه ___ analysis است.', ['semen', 'urine', 'blood'], 'بررسی منی.'),
          S('املای انگلیسی «هایپوسپادیاس» را بنویس', 'hypospadias', 'hypo- + spadias.', 'hypos…'),
          N('wb:ds')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'ds7', title: 'خارج رحمی و مشکلات جفت', icon: '⚠️', items: [
          L('بارداری خارج رحمی', `${fig('ectopic', [], 'بارداری خارج رحمی')}${e('<b>ectopic pregnancy</b>')}: لانه‌گزینی بیرون از رحم (پیشوند ${e('ec-')} یعنی بیرون و ریشه ${e('top/o')} یعنی جا)؛ بیش از ۹۵٪ در لوله رحم. پارگی لوله خونریزی کشنده می‌دهد.${fig('ectopic-sites', ['جاهای بارداری خارج رحمی'], 'جاهای خارج رحمی')}`),
          L('مشکلات جفت و فشار خون', `${fig('placenta-problems', [], 'مشکلات جفت')}• ${e('<b>placenta previa</b>')}: جفت روی دهانه رحم؛ خونریزی بی‌درد<br>• ${e('<b>abruptio placentae</b>')}: جدا شدن زودرس جفت؛ خونریزی دردناک<br>• ${e('<b>preeclampsia</b>')}: فشار خون بالا و پروتئین در ادرار پس از هفته ۲۰؛ اگر تشنج بیاید: ${e('eclampsia')}${fig('placental-abnormalities', ['جایگاه‌های نابجای جفت'], 'ناهنجاری جفت')}${pearl('در مشاوره High-Risk OB: بیمار <bdi dir="ltr">“placenta previa”</bdi> دارد و خطر <bdi dir="ltr">“abruptio”</bdi> هست؛ قرار شد با شروع زایمان سزارین شود.')}`),
          M('شایع‌ترین جای بارداری خارج رحمی کجاست؟', ['لوله رحم', 'تخمدان', 'دهانه رحم', 'شکم'], 'tubal.', null, F('ectopic-sites', [])),
          M('جفتی که روی دهانه رحم قرار گرفته…', ['placenta previa', 'abruptio placentae', 'placenta accreta', 'preeclampsia'], 'previa = جلوتر.', null, F('placental-abnormalities', [])),
          T('preeclampsia با فشار خون بالا و پروتئین در ادرار همراه است.', true, 'پس از هفته ۲۰.'),
          O('شدت را بچین', ['gestational hypertension', 'preeclampsia', 'eclampsia'], 'با تشنج شدیدتر است.'),
          P('هر واژه را به معنی‌اش وصل کن', [['placenta previa', 'جفت روی دهانه رحم'], ['abruptio placentae', 'جدا شدن زودرس جفت'], ['eclampsia', 'تشنج بارداری'], ['ectopic pregnancy', 'بارداری خارج رحمی']], 'عوارض.'),
          B('بارداری در لوله رحم ___ pregnancy است.', ['tubal', 'molar', 'multiple'], 'شایع‌ترین ectopic.'),
          S('املای انگلیسی «خارج رحمی» (صفت) را بنویس', 'ectopic', 'ec- + top/o + -ic.', 'ecto…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds8', title: 'زایمان دشوار و ژنتیک', icon: '🧬', items: [
          L('از دست رفتن بارداری', `• ${e('<b>spontaneous abortion</b>')} (${e('miscarriage')}): از دست رفتن بارداری پیش از هفته ۲۰<br>• ${e('<b>stillbirth</b>')}: تولد نوزاد مرده پس از هفته ۲۰<br>• ${e('<b>IUFD</b>')}: مرگ جنین درون رحم<br>• ${e('fetal distress')}: نشانه‌های کمبود اکسیژن جنین${pearl('یک تمرین بالینی: بیمار ۲۷ ساله G II P I؛ سونوگرافی هفته ۱۴ و آمنیوسنتز هفته ۱۵ طبیعی بود، ولی در هفته ۱۸ مرگ جنین درون رحم (IUFD) رخ داد.')}`),
          L('ناهنجاری کروموزومی', `${fig('down-syndrome', ['چهره کودک مبتلا به سندروم داون'], 'سندروم داون')}${e('<b>Down syndrome</b>')} (${e('trisomy 21')}): سه نسخه از کروموزوم ۲۱؛ خطرش با سن مادر بالا می‌رود. با آمنیوسنتز یا ${e('CVS')} تشخیص داده می‌شود.${memo('پیشوند tri- یعنی سه و پسوند -somy یعنی جسم (کروموزوم).')}`),
          M('مرگ جنین پس از هفته ۲۰ و تولد او…', ['stillbirth', 'miscarriage', 'ectopic pregnancy', 'preterm birth'], 'مرده‌زایی.'),
          M('سندروم داون چه ناهنجاری‌ای است؟', ['سه نسخه از کروموزوم ۲۱', 'نبود یک کروموزوم X', 'سه نسخه از کروموزوم ۱۸', 'کمبود هورمون'], 'trisomy 21.', null, F('down-syndrome', [])),
          T('miscarriage نام عامیانه spontaneous abortion است.', true, 'سقط خودبه‌خودی.'),
          O('به ترتیب سن بارداری بچین', ['miscarriage', 'IUFD', 'stillbirth', 'term birth'], 'از زودتر به دیرتر.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['IUFD', 'مرگ جنین درون رحم'], ['CPD', 'عدم تناسب سر و لگن'], ['PROM', 'پارگی زودرس پرده‌ها'], ['CVS', 'نمونه‌برداری از پرزهای کوریون']], 'اختصارها.'),
          B('سه نسخه از یک کروموزوم ___ است.', ['trisomy', 'monosomy', 'triploidy'], 'tri- + -somy.'),
          S('املای انگلیسی «سقط» (عامیانه) را بنویس', 'miscarriage', 'spontaneous abortion.', 'misc…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds9', title: 'عفونت‌های آمیزشی', icon: '🦠', items: [
          L('مهم‌ترین STIها', `${fig('sti', [], 'عفونت‌های آمیزشی')}${tbl([['بیماری', 'عامل', 'نشانه'], [e('chlamydia'), 'باکتری', 'اغلب بی‌علامت؛ علت مهم PID'], [e('gonorrhea'), 'باکتری', 'ترشح چرکی'], [e('syphilis'), 'باکتری', 'زخم بی‌درد (chancre)'], [e('genital herpes'), e('HSV‑2'), 'تاول‌های دردناک'], [e('genital warts'), e('HPV'), 'زگیل؛ خطر سرطان دهانه رحم'], [e('trichomoniasis'), 'انگل', 'ترشح کف‌آلود']])}`),
          L('در بالین', `${fig('herpes-drawing', ['تاول‌های هرپس'], 'هرپس')}${fig('genital-warts', ['زگیل تناسلی'], 'زگیل')}${pearl('در Case Study: خانم ۲۲ ساله با تب، بی‌حالی، dysuria و leukorrhea (ترشح سفید) آمد. تاول‌هایش زخم شده بود و غدد لنفاوی کشاله رانش بزرگ بود؛ تشخیص genital herpes بود.')}${memo('STI همان STD است؛ امروز «عفونت» می‌گویند چون بسیاری بی‌علامت‌اند.')}`),
          M('عامل زگیل تناسلی کدام است؟', ['HPV', 'HSV-2', 'HIV', 'chlamydia'], 'ویروس پاپیلوما.', null, F('genital-warts', [])),
          M('زخم بی‌درد سیفلیس چه نام دارد؟', ['chancre', 'vesicle', 'wart', 'pustule'], 'شانکر.'),
          T('genital herpes با تاول‌های دردناک همراه است.', true, 'HSV-2.', F('herpes-drawing', [])),
          O('مراحل ضایعه هرپس را بچین', ['erythema', 'vesicles', 'ulcers', 'crusting'], 'از قرمزی تا دلمه.'),
          P('هر بیماری را به عاملش وصل کن', [['genital herpes', 'HSV-2'], ['genital warts', 'HPV'], ['trichomoniasis', 'انگل'], ['syphilis', 'باکتری ترپونما']], 'عامل‌ها.'),
          B('ترشح سفید از واژن ___ است.', ['leukorrhea', 'lochia', 'menorrhea'], 'leuk/o + -rrhea.'),
          S('املای انگلیسی «سوزاک» را بنویس', 'gonorrhea', 'gon/o + -rrhea.', 'gono…'),
          N('wb:ds')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* زایا — دنیای ۵: تشخیص، درمان و پیشگیری
 * سطح ۱: آزمایش‌ها و تصویربرداری • سطح ۲: جراحی‌ها • سطح ۳: پیشگیری از بارداری و درمان نازایی */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'tx', sym: 'Tx', name: 'تشخیص، درمان و پیشگیری', short: 'تشخیص و درمان', sub: 'پاپ اسمیر و کولپوسکوپی، ماموگرافی و سونوگرافی، آزمایش‌های پیش از تولد، PSA و بیوپسی، هیسترکتومی، TURP، سزارین، پیشگیری از بارداری و IVF',
    color: '#17A398', dark: '#0E756C', light: '#DDF5F2',
    levels: ['آزمایش‌ها و تصویربرداری', 'جراحی‌ها', 'پیشگیری و باروری'],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'tx1', title: 'پاپ اسمیر و کولپوسکوپی', icon: '🔬', items: [
          L('پاپ اسمیر', `${fig('pap-test', [], 'پاپ اسمیر')}${e('<b>Pap smear (Pap test)</b>')}: برداشتن سلول از دهانه رحم با برس یا کاردک و بررسی زیر میکروسکوپ برای یافتن ${e('dysplasia')} و سرطان. پزشک با ${e('<b>speculum</b>')} دیواره واژن را باز نگه می‌دارد.${fig('speculum', ['اسپکولوم واژینال'], 'اسپکولوم')}`),
          L('کولپوسکوپی', `${fig('colposcopy', ['دیدن دهانه رحم با بزرگ‌نمایی'], 'کولپوسکوپی')}${wb('colp/o', '-scopy')} ← ${e('<b>colposcopy</b>')}: دیدن واژن و دهانه رحم با بزرگ‌نمایی؛ اگر پاپ غیرطبیعی باشد.<br>${e('<b>cone biopsy (conization)</b>')}: برداشتن تکه مخروطی از دهانه رحم.${pearl('در Case Study 16-1، خانم Naomi پس از Pap smears غیرطبیعی و cervical dysplasia، colposcopy و سپس D&C همراه با cone biopsy انجام داد.')}`),
          M('پاپ اسمیر از کدام بخش نمونه می‌گیرد؟', ['دهانه رحم', 'تخمدان', 'لوله رحم', 'پستان'], 'cervix.', null, F('pap-test', [])),
          M('ابزاری که دیواره واژن را برای معاینه باز نگه می‌دارد…', ['speculum', 'curette', 'colposcope', 'resectoscope'], 'اسپکولوم.', null, F('speculum', [])),
          T('colposcopy یعنی دیدن واژن و دهانه رحم با بزرگ‌نمایی.', true, 'colp/o + -scopy.', F('colposcopy', [])),
          O('گام‌های بررسی دهانه رحم را بچین', ['Pap smear', 'abnormal result', 'colposcopy', 'cone biopsy'], 'از غربالگری تا نمونه.'),
          P('هر روش را به کارش وصل کن', [['Pap smear', 'غربالگری سلولی'], ['colposcopy', 'دیدن با بزرگ‌نمایی'], ['cone biopsy', 'برداشتن تکه مخروطی'], ['speculum', 'باز نگه داشتن واژن']], 'دهانه رحم.'),
          B('ریشه ___ در colposcopy یعنی واژن.', ['colp/o', 'col/o', 'culd/o'], 'colp/o = vagin/o.'),
          S('املای انگلیسی «کولپوسکوپی» را بنویس', 'colposcopy', 'colp/o + -scopy.', 'colpo…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: 'ماموگرافی و سونوگرافی', icon: '📡', items: [
          L('ماموگرافی', `${fig('mammography', [], 'ماموگرافی')}${wb('mamm/o', '-graphy')} ← ${e('<b>mammography</b>')}: عکس اشعه ایکس از پستان فشرده‌شده؛ غربالگری سرطان پستان. تصویر حاصل ${e('mammogram')} است.${fig('mammograms', ['دو نمای ماموگرام'], 'ماموگرام')}`),
          L('سونوگرافی', `${e('<b>ultrasonography (sonography)</b>')}: تصویر با امواج صوتی؛ بدون اشعه و بی‌خطر برای جنین. در ${e('transvaginal ultrasound')} پروب درون واژن است.<br>${e('<b>hysterosalpingography (HSG)</b>')}: عکس رنگی از رحم و لوله‌ها برای بررسی باز بودن لوله‌ها.${pearl('سناریوی APPLY: برای Charity Peterson هم hysteroscopy و هم hysterosalpingography درخواست شد.')}`),
          M('ماموگرافی با کدام پرتو انجام می‌شود؟', ['اشعه ایکس', 'امواج صوتی', 'میدان مغناطیسی', 'نور مرئی'], 'X-ray.', null, F('mammography', [])),
          M('کدام روش برای دیدن جنین بی‌خطرتر است؟', ['ultrasonography', 'mammography', 'CT scan', 'hysterosalpingography'], 'بدون اشعه.'),
          T('mammogram تصویر به‌دست‌آمده از mammography است.', true, '-gram = تصویر.', F('mammograms', [])),
          W('واژه‌ای بساز به معنی «عکس‌برداری از رحم و لوله‌ها»', ['hyster/o', 'salping/o', '-graphy'], ['mamm/o', '-scopy', 'oophor/o'], 'hysterosalpingography.'),
          P('هر روش را به اندامش وصل کن', [['mammography', 'پستان'], ['hysterosalpingography', 'رحم و لوله‌ها'], ['transvaginal ultrasound', 'رحم و تخمدان‌ها'], ['hysteroscopy', 'درون رحم']], 'تصویربرداری.'),
          B('پسوند ___ یعنی فرایند ثبت تصویر.', ['-graphy', '-gram', '-scope'], 'mammography.'),
          S('املای انگلیسی «ماموگرافی» را بنویس', 'mammography', 'mamm/o + -graphy.', 'mammo…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: 'آزمایش‌های پیش از تولد و مردانه', icon: '🧪', items: [
          L('پیش از تولد', `${fig('amniocentesis', [], 'آمنیوسنتز')}• ${e('<b>amniocentesis</b>')}: کشیدن مایع آمنیوتیک با سوزن، معمولاً هفته ۱۵ تا ۲۰؛ برای کروموزوم‌ها<br>• ${e('<b>chorionic villus sampling (CVS)</b>')}: نمونه از پرزهای کوریون، زودتر (هفته ۱۰ تا ۱۳)<br>• ${e('FHR monitoring')}: پایش ضربان قلب جنین${pearl('در مشاوره High-Risk OB: <bdi dir="ltr">“amniocentesis at 20 weeks”</bdi> نتیجه طبیعی و جنین پسر نشان داد؛ FHR حدود ۱۳۰ بود.')}`),
          L('آزمایش‌های مردانه', `• ${e('<b>PSA</b>')}: آنتی‌ژن اختصاصی پروستات در خون؛ بالا رفتنش در سرطان و BPH<br>• ${e('<b>DRE</b>')}: معاینه انگشتی راست‌روده<br>• ${e('<b>prostate biopsy</b>')}: نمونه سوزنی از پروستات با راهنمای سونوگرافی از راه راست‌روده (${e('TRUS')})${fig('prostate-biopsy', ['نمونه‌برداری سوزنی از پروستات'], 'بیوپسی پروستات')}${pearl('در Consult: در DRE ندول لمس شد، ولی بیوپسی منفی و PSA طبیعی بود؛ تشخیص BPH.')}`),
          M('کدام آزمایش زودتر در بارداری انجام می‌شود؟', ['CVS', 'amniocentesis', 'Apgar', 'Pap smear'], 'هفته ۱۰ تا ۱۳.', null, F('amniocentesis', [])),
          M('PSA چیست؟', ['آنتی‌ژن اختصاصی پروستات در خون', 'معاینه انگشتی', 'نمونه منی', 'عکس پروستات'], 'prostate-specific antigen.'),
          T('بیوپسی پروستات اغلب با راهنمای سونوگرافی از راه راست‌روده انجام می‌شود.', true, 'TRUS.', F('prostate-biopsy', [])),
          O('بررسی پروستات را بچین', ['PSA and DRE', 'abnormal finding', 'TRUS biopsy', 'pathology report'], 'از غربالگری تا پاتولوژی.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['PSA', 'آنتی‌ژن اختصاصی پروستات'], ['DRE', 'معاینه انگشتی راست‌روده'], ['CVS', 'نمونه پرزهای کوریون'], ['FHR', 'ضربان قلب جنین']], 'آزمایش‌ها.'),
          B('کشیدن مایع آمنیوتیک ___ است.', ['amniocentesis', 'amniotomy', 'culdocentesis'], '-centesis = سوراخ کردن.'),
          S('املای انگلیسی «آمنیوسنتز» را بنویس', 'amniocentesis', 'amni/o + -centesis.', 'amnio…'),
          N('d2t:tx')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'tx4', title: 'هیسترکتومی و کورتاژ', icon: '🏥', items: [
          L('انواع هیسترکتومی', `${fig('hysterectomy-types', [], 'انواع هیسترکتومی')}${tbl([['نام', 'چه برداشته می‌شود'], [e('subtotal (partial)'), 'بدنه رحم؛ دهانه می‌ماند'], [e('total (TAH)'), 'رحم و دهانه رحم'], [e('TAH-BSO'), 'رحم، دهانه، هر دو لوله و هر دو تخمدان'], [e('radical'), 'همه به‌علاوه بخشی از واژن و غدد لنفاوی']])}${pearl('در Case Study 16-1، خانم Naomi پس از دیسپلازی دهانه رحم و افتادگی رحم، عمل TAH و BSO انجام شد.')}`),
          L('کورتاژ', `${fig('d-and-c', ['گشاد کردن دهانه رحم و تراشیدن آندومتر'], 'D&C')}${e('<b>D&C (dilation and curettage)</b>')}: گشاد کردن دهانه رحم و تراشیدن آندومتر با ${e('curette')}؛ برای تشخیص خونریزی غیرطبیعی یا پس از سقط.${wb('salping/o', 'oophor/o', '-ectomy')} ← ${e('salpingo-oophorectomy')}`),
          M('در TAH-BSO چه برداشته می‌شود؟', ['رحم، دهانه رحم، هر دو لوله و هر دو تخمدان', 'فقط رحم', 'فقط تخمدان‌ها', 'فقط دهانه رحم'], 'total abdominal hysterectomy + bilateral salpingo-oophorectomy.', null, F('hysterectomy-types', [])),
          M('ابزار تراشیدن آندومتر در D&C…', ['curette', 'speculum', 'resectoscope', 'colposcope'], 'کورت.', null, F('d-and-c', [])),
          T('در هیسترکتومی ناقص (subtotal) دهانه رحم باقی می‌ماند.', true, 'فقط بدنه.'),
          W('واژه‌ای بساز به معنی «برداشتن رحم»', ['hyster/o', '-ectomy'], ['metr/o', '-pexy', 'oophor/o'], 'hysterectomy.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['TAH', 'برداشتن کامل رحم از راه شکم'], ['BSO', 'برداشتن دوطرفه لوله و تخمدان'], ['D&C', 'گشاد کردن و تراشیدن'], ['TVH', 'برداشتن رحم از راه واژن']], 'جراحی‌ها.'),
          B('برداشتن تخمدان ___ است.', ['oophorectomy', 'orchiectomy', 'salpingectomy'], 'oophor/o.'),
          S('املای انگلیسی «برداشتن رحم» را بنویس', 'hysterectomy', 'hyster/o + -ectomy.', 'hyster…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx5', title: 'جراحی پستان و پروستات', icon: '✂️', items: [
          L('جراحی پستان', `${fig('mastectomy', ['ماستکتومی'], 'ماستکتومی')}• ${e('<b>lumpectomy</b>')}: برداشتن فقط توده<br>• ${e('<b>simple mastectomy</b>')}: برداشتن کل پستان<br>• ${e('<b>radical mastectomy</b>')}: پستان، عضله سینه و غدد لنفاوی زیر بغل<br>• ${e('mammoplasty')}: ترمیم یا تغییر اندازه پستان؛ ${e('mastopexy')}: بالا کشیدن پستان${pearl('سناریوی APPLY: دکتر Schaefer درباره mammography، lumpectomy، mastectomy، mastopexy و mammoplasty توضیح می‌دهد.')}`),
          L('TURP', `${fig('turp', [], 'TURP')}${e('<b>TURP (transurethral resection of the prostate)</b>')}: تراشیدن پروستات بزرگ از راه پیشابراه با ${e('resectoscope')}. پس از عمل ${e('Foley catheter')} گذاشته می‌شود.${fig('turp-drawing', ['تراشیدن پروستات از راه پیشابراه'], 'TURP')}${pearl('در Case Study: آقای Dexter با spinal anesthesia و NPO پیش از عمل، TURP شد.')}`),
          M('برداشتن فقط توده پستان…', ['lumpectomy', 'mastectomy', 'mastopexy', 'mammoplasty'], 'lump = توده.', null, F('mastectomy', [])),
          M('TURP از چه راهی انجام می‌شود؟', ['از راه پیشابراه', 'از راه شکم', 'از راه راست‌روده', 'از راه پرینه'], 'trans- + urethr/o.', null, F('turp', [])),
          T('mastopexy یعنی بالا کشیدن و ثابت کردن پستان.', true, '-pexy = ثابت کردن.'),
          W('واژه‌ای بساز به معنی «ترمیم پستان»', ['mamm/o', '-plasty'], ['mast/o', '-ectomy', '-pexy'], 'mammoplasty.'),
          P('هر عمل را به معنی‌اش وصل کن', [['lumpectomy', 'برداشتن توده'], ['radical mastectomy', 'پستان، عضله و غدد'], ['mastopexy', 'بالا کشیدن پستان'], ['TURP', 'تراشیدن پروستات از راه پیشابراه']], 'جراحی‌ها.'),
          B('ابزار TURP ___ است.', ['resectoscope', 'colposcope', 'laparoscope'], 'برش‌دهنده.'),
          S('املای انگلیسی «ماستکتومی» را بنویس', 'mastectomy', 'mast/o + -ectomy.', 'mastec…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx6', title: 'سزارین و اپی‌زیاتومی', icon: '🩹', items: [
          L('سزارین', `${fig('cesarean', [], 'سزارین')}${e('<b>cesarean section (C-section, CS)</b>')}: بیرون آوردن نوزاد با برش شکم و رحم. برش پوست اغلب ${e('transverse suprapubic')} (افقی بالای استخوان شرمگاهی) است.${pearl('در Case Study: Abigail به‌علت CPD و fetal distress، C-section اورژانسی با spinal anesthesia و برش عرضی بالای شرمگاهی شد؛ سپس Pitocin گرفت و به PACU رفت.')}`),
          L('کمک به زایمان واژینال', `• ${e('<b>episiotomy</b>')}: برش پرینه برای گشاد کردن دهانه واژن<br>• ${e('<b>amniotomy</b>')}: پاره کردن کیسه آب<br>• ${e('induction of labor')}: القای زایمان با ${e('oxytocin (Pitocin)')}<br>• ${e('VBAC')}: زایمان واژینال پس از سزارین${pearl('OB Delivery Note: <bdi dir="ltr">“second-degree midline episiotomy”</bdi> یعنی برش میانی درجه دو.')}`),
          M('برش پوست در سزارین معمولاً چگونه است؟', ['افقی بالای استخوان شرمگاهی', 'عمودی از ناف تا جناغ', 'روی پرینه', 'زیر بغل'], 'transverse suprapubic.', null, F('cesarean', [])),
          M('پاره کردن کیسه آب…', ['amniotomy', 'amniocentesis', 'episiotomy', 'episiorrhaphy'], '-tomy = برش.'),
          T('VBAC یعنی زایمان واژینال پس از سزارین.', true, 'vaginal birth after cesarean.'),
          O('گام‌های سزارین را بچین', ['spinal anesthesia', 'skin incision', 'uterine incision', 'delivery of infant', 'closure'], 'از بی‌حسی تا بستن.'),
          P('هر واژه را به معنی‌اش وصل کن', [['episiotomy', 'برش پرینه'], ['amniotomy', 'پاره کردن کیسه آب'], ['induction', 'القای زایمان'], ['C-section', 'سزارین']], 'زایمان.'),
          B('داروی القای زایمان ___ است.', ['oxytocin', 'progesterone', 'estrogen'], 'Pitocin.'),
          S('املای انگلیسی «سزارین» (صفت) را بنویس', ['cesarean', 'caesarean'], 'cesarean section.', 'ces…'),
          N('d2t:tx')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'tx7', title: 'پیشگیری از بارداری', icon: '💊', items: [
          L('روش‌ها', `${fig('contraception', [], 'روش‌های پیشگیری')}${e('<b>contraception</b>')} یعنی پیشگیری از بارداری (پیشوند ${e('contra-')} یعنی ضد):<br>• هورمونی: ${e('oral contraceptive (OC)')}، چسب، تزریق، کاشت<br>• سدی: کاندوم، ${e('diaphragm')}<br>• ${e('<b>IUD</b>')}: وسیله داخل رحمی؛ مسی یا هورمونی<br>• دائمی: ${e('tubal ligation')} و ${e('vasectomy')}${fig('contraceptives', ['چند روش پیشگیری'], 'وسایل پیشگیری')}`),
          L('IUD', `${fig('iud', ['وسیله داخل رحمی در جای خود'], 'IUD')}${e('IUD')} در حفره رحم قرار می‌گیرد و چند سال کار می‌کند.${pearl('سناریوی APPLY: Beth Meyers قرص ۲۱ روزه مصرف می‌کند ولی گاهی فراموش می‌کند؛ ممکن است IUD یا روش طولانی‌اثر برایش مناسب‌تر باشد.')}${memo('کاندوم تنها روشی است که از STI هم پیشگیری می‌کند.')}`),
          M('IUD در کجا قرار می‌گیرد؟', ['درون حفره رحم', 'درون لوله رحم', 'روی دهانه رحم', 'زیر پوست بازو'], 'intrauterine.', null, F('iud', [])),
          M('کدام روش از STI هم پیشگیری می‌کند؟', ['condom', 'IUD', 'oral contraceptive', 'tubal ligation'], 'روش سدی.', null, F('contraceptives', [])),
          T('contraception یعنی پیشگیری از بارداری.', true, 'contra- + conception.'),
          O('از کوتاه‌اثر به دائمی بچین', ['condom', 'oral contraceptive', 'IUD', 'tubal ligation'], 'مدت اثر.'),
          P('هر روش را به گروهش وصل کن', [['condom', 'سدی'], ['oral contraceptive', 'هورمونی'], ['IUD', 'داخل رحمی'], ['vasectomy', 'دائمی مردانه']], 'روش‌ها.'),
          B('اختصار ___ یعنی قرص ضدبارداری خوراکی.', ['OC', 'OB', 'OD'], 'oral contraceptive.'),
          S('املای انگلیسی «پیشگیری از بارداری» را بنویس', 'contraception', 'contra- + conception.', 'contra…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx8', title: 'عقیم‌سازی', icon: '🔒', items: [
          L('بستن لوله‌ها', `${fig('sterilization', [], 'عقیم‌سازی')}${e('<b>tubal ligation</b>')}: بستن یا بریدن لوله‌های رحم، اغلب با ${e('laparoscopy')}؛ تخمک به رحم نمی‌رسد.${fig('tubal-ligation', ['بستن لوله‌های رحم'], 'بستن لوله')}`),
          L('وازکتومی', `${e('<b>vasectomy</b>')}: بریدن و بستن مجرای وابران؛ منی بدون اسپرم ساخته می‌شود ولی نعوظ و انزال تغییری نمی‌کند. بازگرداندن آن ${e('vasovasostomy')} است.${pearl('در Consult: بیمار ۷۷ ساله <bdi dir="ltr">“vasectomy at age 41”</bdi> داشت.')}${vs(['tubal ligation', 'عقیم‌سازی زن'], ['vasectomy', 'عقیم‌سازی مرد'])}`),
          M('در tubal ligation چه چیزی بسته می‌شود؟', ['لوله‌های رحم', 'دهانه رحم', 'مجرای وابران', 'تخمدان‌ها'], 'لوله‌ها.', null, F('tubal-ligation', [])),
          M('وصل دوباره مجرای وابران…', ['vasovasostomy', 'vasectomy', 'orchiopexy', 'salpingectomy'], '-stomy = ایجاد دهانه.', null, F('sterilization', [])),
          T('پس از وازکتومی انزال ادامه دارد ولی منی اسپرم ندارد.', true, 'فقط مسیر اسپرم بسته است.'),
          W('واژه‌ای بساز به معنی «برداشتن لوله رحم»', ['salping/o', '-ectomy'], ['vas/o', '-stomy', 'hyster/o'], 'salpingectomy.'),
          P('هر عمل را به معنی‌اش وصل کن', [['tubal ligation', 'بستن لوله رحم'], ['vasectomy', 'بریدن مجرای وابران'], ['vasovasostomy', 'وصل دوباره مجرا'], ['laparoscopy', 'دیدن درون شکم']], 'عقیم‌سازی.'),
          B('بستن لوله رحم اغلب با ___ انجام می‌شود.', ['laparoscopy', 'colposcopy', 'cystoscopy'], 'از راه شکم.'),
          S('املای انگلیسی «وازکتومی» را بنویس', 'vasectomy', 'vas/o + -ectomy.', 'vase…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx9', title: 'درمان نازایی و هورمون‌ها', icon: '🧫', items: [
          L('کمک باروری', `${e('<b>assisted reproductive technology (ART)</b>')}:<br>• ${e('<b>IVF</b>')}: لقاح در آزمایشگاه و انتقال رویان به رحم<br>• ${e('GIFT')}: انتقال گامت‌ها به لوله رحم<br>• ${e('ZIFT')}: انتقال زیگوت به لوله رحم<br>• ${e('ICSI')}: تزریق یک اسپرم به تخمک<br>• ${e('IUI')}: تزریق اسپرم به درون رحم${pearl('در Case Study 16-2، Ruth در <bdi dir="ltr">“transvaginal oocyte retrieval”</bdi> کمک می‌کند: برداشتن تخمک‌ها با سوزن از راه واژن زیر سونوگرافی.')}`),
          L('هورمون‌درمانی', `${e('<b>HRT</b>')}: استروژن (و پروژسترون) برای علائم یائسگی.<br>${e('clomiphene')}: دارویی که تخمک‌گذاری را تحریک می‌کند.${pearl('در Case Study 16-1، خانم Naomi گفت HRT نگرفته است (<bdi dir="ltr">“HRT denied”</bdi>).')}${memo('in vitro یعنی «در شیشه»؛ لقاح در ظرف آزمایشگاه.')}`),
          M('در IVF لقاح کجا رخ می‌دهد؟', ['در آزمایشگاه', 'در لوله رحم', 'در رحم', 'در تخمدان'], 'in vitro.'),
          M('تزریق یک اسپرم به درون تخمک…', ['ICSI', 'IUI', 'GIFT', 'ZIFT'], 'intracytoplasmic sperm injection.'),
          T('در GIFT گامت‌ها، نه زیگوت، به لوله رحم منتقل می‌شوند.', true, 'gamete intrafallopian transfer.'),
          O('گام‌های IVF را بچین', ['ovarian stimulation', 'oocyte retrieval', 'fertilization in lab', 'embryo transfer'], 'از تحریک تا انتقال.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['IVF', 'لقاح آزمایشگاهی'], ['IUI', 'تزریق اسپرم به رحم'], ['ICSI', 'تزریق اسپرم به تخمک'], ['HRT', 'هورمون‌درمانی جایگزین']], 'درمان‌ها.'),
          B('برداشتن تخمک‌ها برای IVF، oocyte ___ است.', ['retrieval', 'transfer', 'ligation'], 'گرفتن تخمک.'),
          S('املای انگلیسی «تخمک» (یاخته نابالغ) را بنویس', 'oocyte', 'o/o + -cyte.', 'ooc…'),
          N('wb:tx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* زایا — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. شکل‌ها از دنیای تخمک و اسپرم، رحم، چرخه قاعدگی، بارداری و پیشگیری الهام گرفته‌اند. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: 'تخمکی', title: 'سلول آغاز زندگی', shape: 'ovum', color: '#FBD0DD', acc: ['sparkle'], bio: 'بزرگ‌ترین سلول بدن است؛ هر ماه یکی از تخمدان آزاد می‌شود و در لوله رحم منتظر می‌ماند.' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'ریشه‌یاب', title: 'استاد hyster/o و orchi/o', shape: 'book', color: '#B8457A', acc: ['glasses'], bio: 'لغت‌نامه‌ای زنده که هر واژه تولیدمثلی را به ریشه، پیشوند و پسوند می‌شکند و ‎-rrhea‎ را با ‎-rrhagia‎ قاطی نمی‌کند.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'پازلی', title: 'سلطان پیشوند و پسوند', shape: 'puzzle', color: '#8A2D5A', acc: ['crown'], bio: 'primi-، multi- و nulli- را کنار ‎-gravida‎ و ‎-para‎ می‌چیند و G2 P1 را در یک نگاه می‌خواند.' },
    { id: 'fm-0', w: 'fm', lv: 0, name: 'رحمک', title: 'خانه نُه‌ماهه', shape: 'uterus', color: '#F4A6B8', acc: ['sparkle'], bio: 'عضله‌ای توخالی به اندازه یک گلابی است که در بارداری چند برابر بزرگ می‌شود؛ hyster/o و metr/o نام‌های اویند.' },
    { id: 'fm-1', w: 'fm', lv: 1, name: 'ماه‌شمار', title: 'نگهبان چرخه ۲۸ روزه', shape: 'moon', color: '#E46A8E', acc: ['glasses'], bio: 'روزهای چرخه را می‌شمارد: قاعدگی، تکثیر، تخمک‌گذاری در روز ۱۴ و مرحله ترشحی.' },
    { id: 'fm-2', w: 'fm', lv: 2, name: 'قطره هورمون', title: 'استروژن و پروژسترون', shape: 'drop', color: '#C2457A', acc: ['crown'], bio: 'استروژن پوشش رحم را می‌سازد و پروژسترون آن را برای بارداری نگه می‌دارد.' },
    { id: 'ml-0', w: 'ml', lv: 0, name: 'اسپرمی', title: 'شناگر پرشتاب', shape: 'sperm', color: '#9CCBEA', acc: ['sparkle'], bio: 'در لوله‌های اسپرم‌ساز ساخته می‌شود، در اپیدیدیم بالغ می‌شود و با دمش تا لوله رحم شنا می‌کند.' },
    { id: 'ml-1', w: 'ml', lv: 1, name: 'بلوطی', title: 'پروستات پرکار', shape: 'bean', color: '#E8A36B', acc: ['glasses'], bio: 'دور پیشابراه زیر مثانه است؛ اگر بزرگ شود (BPH) جریان ادرار را تنگ می‌کند.' },
    { id: 'ml-2', w: 'ml', lv: 2, name: 'تستو', title: 'مولکول تستوسترون', shape: 'hex', color: '#2E86C1', acc: ['crown'], bio: 'هورمون مردانه‌ای است که بیضه می‌سازد؛ اسپرم‌سازی و ویژگی‌های بلوغ پسران به او وابسته است.' },
    { id: 'pg-0', w: 'pg', lv: 0, name: 'زیگوتی', title: 'اولین سلول کامل', shape: 'bubble', color: '#FDE3C8', acc: ['sparkle'], bio: 'از پیوند اسپرم و تخمک ساخته می‌شود و ۴۶ کروموزوم دارد؛ ۶ تا ۷ روز بعد در آندومتر لانه می‌کند.' },
    { id: 'pg-1', w: 'pg', lv: 1, name: 'جفتی', title: 'پل مادر و جنین', shape: 'disc', color: '#C2506A', acc: ['glasses'], bio: 'اکسیژن و غذا را از مادر به جنین می‌رساند و hCG، استروژن و پروژسترون می‌سازد.' },
    { id: 'pg-2', w: 'pg', lv: 2, name: 'نوزادک', title: 'آپگار ۹ از ۱۰', shape: 'blob', color: '#F3B8A0', acc: ['pacifier', 'crown'], bio: 'در دقیقه ۱ و ۵ نمره آپگار می‌گیرد؛ اولین شیرش آغوز است، پر از آنتی‌بادی.' },
    { id: 'ds-0', w: 'ds', lv: 0, name: 'آنتی‌بادی', title: 'شکارچی STI', shape: 'yab', color: '#8E6BD8', acc: ['sparkle'], bio: 'با کلامیدیا، سوزاک و سیفلیس می‌جنگد و طرفدار واکسن HPV و کاندوم است.' },
    { id: 'ds-1', w: 'ds', lv: 1, name: 'ماموگراف', title: 'چشم اشعه ایکس', shape: 'xray', color: '#5D646A', acc: ['glasses'], bio: 'توده‌های کوچک پستان را پیش از لمس شدن پیدا می‌کند؛ BSE را هم ماهانه یادآوری می‌کند.' },
    { id: 'ds-2', w: 'ds', lv: 2, name: 'سپر سلامت', title: 'پیشگیری بهتر از درمان', shape: 'shield', color: '#17A398', acc: ['crown'], bio: 'پاپ‌اسمیر منظم، خودآزمایی پستان و بیضه و غربالگری PSA را فراموش نمی‌کند.' },
    { id: 'tx-0', w: 'tx', lv: 0, name: 'سونو', title: 'بیننده درون رحم', shape: 'meter', color: '#3D6FD6', acc: ['sparkle'], bio: 'با امواج صوتی جنین، جفت و ضربان قلب را نشان می‌دهد؛ بی‌خطر و بدون اشعه.' },
    { id: 'tx-1', w: 'tx', lv: 1, name: 'کپسول زایا', title: 'داروشناس زنان و مردان', shape: 'capsule', color: '#E8913A', acc: ['glasses'], bio: 'قرص ضدبارداری، HRT و اکسی‌توسین را از هم جدا می‌کند و دوز درست را می‌داند.' },
    { id: 'tx-2', w: 'tx', lv: 2, name: 'نسخه‌نویس زایا', title: 'استاد پرونده زنان و زایمان', shape: 'clipboard', color: '#8A2D5A', acc: ['cape', 'crown'], bio: 'G، P، LMP، EDD، TAH و TURP را در یک نگاه می‌خواند و از اولین ویزیت تا زایمان همراه است.' }
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
/* زایا — راند بالینی: پرونده‌های چندمرحله‌ای
 * کیس‌ها از مطالعات موردی و تمرین‌های فایل‌های پیوست آمده‌اند: Case Study کتاب Cohen (Abigail، Dexter)، Case Study 16-1 (Naomi)،
 * Case Study 16-2 (Ruth)، Case Study 15-1 (Derek)، Case Study 15-2 (Diego)، Exercise 15-9، Chart Note کتاب Gylys،
 * High-Risk OB Consultation و Case Study تبخال تناسلی (Fremgen)، Consultation کتاب Pearson، OB Delivery Note (Ehrlich)
 * و سناریوهای APPLY (Pamela Kline، Jenni Takanado، Heidi Red Feather، Charity Peterson، Rosie McConnell، Bob Schaeffer Jr،
 * Rick Springs، James Cocoa و یادداشت اختصارها).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان زایش ================= */
    {
      id: 'r1', w: 'lx', title: 'تاریخچه‌ای که باید ترجمه شود', who: 'Pamela Kline، خانم ۴۰ ساله',
      brief: 'خانم Kline برای ویزیت سالانه آمده و تاریخچه‌اش را به زبان ساده می‌گوید: پنج بار باردار شده؛ در آخرین بارداری از کیسه آب مایع کشیده‌اند؛ چند بار التهاب واژن و دهانه رحم داشته؛ فتق لوله رحمش ترمیم شده و سال گذشته رحم، دو تخمدان و دو لوله‌اش برداشته شده است. باید هر عبارت را با واژه پزشکی در پرونده بنویسی.',
      chart: [['OB Hx', 'gravida 5; amniocentesis'], ['GYN Hx', 'vaginitis, cervicitis'], ['Surgery', 'salpingocele repair; TAH-BSO']],
      fig: { a: 'wordparts', l: [] },
      steps: [
        M('شمارش', '«پنج بار باردار شده» چگونه نوشته می‌شود؟', ['gravida 5', 'para 5', 'multipara', 'G1 P5'], 'gravida = تعداد بارداری.'),
        P('واژه', 'هر عبارت را به واژه پزشکی‌اش وصل کن', [['التهاب واژن', 'vaginitis'], ['التهاب دهانه رحم', 'cervicitis'], ['فتق لوله رحم', 'salpingocele'], ['کشیدن مایع آمنیوتیک', 'amniocentesis']], 'سناریوی APPLY.'),
        M('اختصار', 'در TAH-BSO حرف B یعنی…', ['دوطرفه', 'پستان', 'مثانه', 'بیوپسی'], 'bilateral.'),
        P('ریشه', 'هر ریشه را به عضوش وصل کن', [['salping/o', 'لوله رحم'], ['oophor/o', 'تخمدان'], ['hyster/o', 'رحم'], ['cervic/o', 'دهانه رحم']], 'ریشه‌ها.'),
        T('پسوند', 'پسوند ‎-cele‎ یعنی فتق یا برآمدگی.', true, 'salpingocele، cystocele.'),
        S('املا', 'املای «التهاب دهانه رحم» را بنویس', 'cervicitis', 'cervic/o + -itis.', 'cervi…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: 'یادداشت پر از اختصار', who: 'یادداشت درمانگاه زنان',
      brief: 'یادداشت درمانگاه: <bdi dir="ltr">“Pt concerned about TSS and STIs. Has IUD. Pap: Cx inflamed; R/O PID. Hx of D&C. Mother had TAH.”</bdi> پرستار تازه‌کار از تو می‌خواهد آن را با واژه‌های کامل بازنویسی کنی.',
      chart: [['Concern', 'TSS, STIs'], ['Contraception', 'IUD'], ['Pap', 'Cx inflamed; R/O PID'], ['Hx', 'D&C; mother TAH']],
      fig: { a: 'female-front', l: [] },
      steps: [
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['TSS', 'سندروم شوک سمی'], ['STI', 'عفونت آمیزشی'], ['IUD', 'وسیله داخل رحمی'], ['PID', 'بیماری التهابی لگن']], 'یادداشت.'),
        M('اختصار', 'Cx در <bdi dir="ltr">“Cx inflamed”</bdi> یعنی…', ['دهانه رحم', 'کلیتوریس', 'کولون', 'کیسه'], 'cervix.'),
        M('اختصار', 'R/O PID یعنی…', ['بیماری التهابی لگن رد شود', 'بیماری التهابی لگن تأیید شد', 'درمان PID', 'سابقه PID'], 'rule out.'),
        P('اختصار', 'هر عمل را به معنی‌اش وصل کن', [['D&C', 'گشاد کردن و تراشیدن'], ['TAH', 'برداشتن کامل رحم از راه شکم'], ['Pap', 'نمونه سلولی دهانه رحم'], ['BSO', 'برداشتن لوله‌ها و تخمدان‌ها']], 'جراحی‌ها.'),
        T('معنی', 'IUD یک روش پیشگیری از بارداری است.', true, 'intrauterine device.'),
        S('املا', 'املای «دهانه رحم» را بنویس', 'cervix', 'Cx.', 'cerv…')
      ]
    },
    {
      id: 'r3', w: 'lx', title: 'کلاس بهداشت پسران', who: 'آقای James Cocoa، معلم بهداشت',
      brief: 'آقای Cocoa برای پسران نوجوان کلاس بهداشت دارد و می‌خواهد ریشه‌های مردانه را درست درس بدهد: بیضه، کیسه بیضه، مجرای وابران، پروستات و پیشابراه؛ و این‌که تستوسترون در بلوغ چه می‌کند.',
      chart: [['Topic', 'male reproductive system'], ['Focus', 'roots: orchi/o, scrot/o, vas/o, prostat/o, urethr/o'], ['Hormone', 'testosterone at puberty']],
      fig: { a: 'root-map-m', l: [] },
      steps: [
        P('ریشه', 'هر ریشه را به عضوش وصل کن', [['orchi/o', 'بیضه'], ['scrot/o', 'کیسه بیضه'], ['vas/o', 'مجرای وابران'], ['prostat/o', 'پروستات']], 'نقشه ریشه‌ها.'),
        O('مسیر', 'مسیر اسپرم را بچین', ['testis', 'epididymis', 'vas deferens', 'urethra'], 'از بیضه تا بیرون.'),
        M('هورمون', 'تستوسترون در کدام گروه است؟', ['androgen', 'estrogen', 'gonadotropin', 'progestin'], 'andr/o = مرد.'),
        T('دام', 'prostate و prostrate یک معنی دارند.', false, 'prostrate یعنی دمر افتاده.'),
        M('بلوغ', 'کدام از صفات ثانویه مردانه نیست؟', ['رشد پستان', 'بم شدن صدا', 'موی صورت', 'افزایش عضله'], 'اثر تستوسترون.'),
        S('املا', 'املای «بیضه» را بنویس', ['testis', 'testicle'], 'test/o.', 'test…')
      ]
    },
    /* ================= دستگاه تناسلی زنانه ================= */
    {
      id: 'r4', w: 'fm', title: 'گرگرفتگی و تعریق شبانه', who: 'Heidi Red Feather، خانم ۴۷ ساله',
      brief: 'خانم Red Feather از تعریق شبانه، گرگرفتگی، قاعدگی نامنظم با خونریزی بین دوره‌ها و افسردگی شکایت دارد. پزشک می‌گوید احتمالاً در دوره پیش از یائسگی است و درباره هورمون‌درمانی صحبت می‌کند.',
      chart: [['Age', '47'], ['Sx', 'night sweats, hot flashes, irregular menses, depression'], ['Imp', 'perimenopause'], ['Plan', 'discuss HRT']],
      fig: { a: 'menstrual-cycle', l: [] },
      steps: [
        M('تشخیص', 'این علائم بیشتر نشانه کدام دوره‌اند؟', ['perimenopause', 'menarche', 'puerperium', 'pregnancy'], 'پیش از یائسگی.'),
        M('واژه', 'خونریزی رحم بین دو قاعدگی…', ['metrorrhagia', 'menorrhagia', 'amenorrhea', 'dysmenorrhea'], 'metr/o.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['menopause', 'یائسگی'], ['menarche', 'اولین قاعدگی'], ['HRT', 'هورمون‌درمانی جایگزین'], ['menses', 'قاعدگی']], 'یائسگی.'),
        T('هورمون', 'کاهش استروژن علت گرگرفتگی یائسگی است.', true, 'کم‌کاری تخمدان.'),
        O('زندگی', 'دوره‌ها را بچین', ['menarche', 'reproductive years', 'perimenopause', 'menopause'], 'از بلوغ تا یائسگی.'),
        S('املا', 'املای «پیش‌یائسگی» را بنویس', 'perimenopause', 'peri- + men/o + pause.', 'peri…')
      ]
    },
    {
      id: 'r5', w: 'fm', title: 'دیدن درون لگن', who: 'Charity Peterson، خانم ۳۴ ساله',
      brief: 'پزشک برای خانم Peterson چند بررسی خواسته است: hysteroscopy همراه با biopsy، culdoscopy، colposcopy و hysterosalpingography. او می‌پرسد هر کدام چه چیزی را نشان می‌دهد.',
      chart: [['Orders', 'hysteroscopy with biopsy'], ['', 'culdoscopy, colposcopy'], ['', 'hysterosalpingography']],
      fig: { a: 'female-sagittal', l: [] },
      steps: [
        P('روش', 'هر روش را به جایی که می‌بیند وصل کن', [['hysteroscopy', 'درون رحم'], ['culdoscopy', 'بن‌بست رحمی-رکتومی'], ['colposcopy', 'واژن و دهانه رحم'], ['hysterosalpingography', 'رحم و لوله‌ها']], 'سناریوی APPLY.'),
        M('ریشه', 'culd/o به کدام فضا اشاره دارد؟', ['cul-de-sac', 'cervical canal', 'uterine cavity', 'vaginal fornix'], 'بن‌بست.', null, { a: ['female-sagittal'], l: [] }),
        M('پسوند', 'تفاوت ‎-scopy‎ با ‎-graphy‎ چیست؟', ['اولی دیدن با اسکوپ است و دومی ثبت تصویر', 'هر دو یکی‌اند', 'اولی برش است', 'دومی دوختن است'], 'روش دیدن.'),
        T('روش', 'hysterosalpingography باز بودن لوله‌های رحم را نشان می‌دهد.', true, 'برای نازایی.'),
        M('ریشه', 'colp/o هم‌معنی کدام ریشه است؟', ['vagin/o', 'cervic/o', 'hyster/o', 'vulv/o'], 'واژن.'),
        S('املا', 'املای «دیدن درون رحم با اسکوپ» را بنویس', 'hysteroscopy', 'hyster/o + -scopy.', 'hystero…')
      ]
    },
    {
      id: 'r6', w: 'fm', title: 'خونریزی پس از یائسگی', who: 'خانم ۵۲ ساله، G4 P4',
      brief: 'Chart Note: بیمار ۵۲ ساله G4 P4 که آخرین قاعدگی‌اش در ۴۸ سالگی بوده و Premarin مصرف می‌کند، با postmenopausal bleeding بستری شد. برای رد neoplasm، laparoscopy و D&C تشخیصی برنامه‌ریزی شد. سابقه simple mastectomy برای سرطان پستان دارد.',
      chart: [['OB', 'G4 P4'], ['CC', 'postmenopausal bleeding'], ['Meds', 'Premarin (estrogen)'], ['Plan', 'laparoscopy, diagnostic D&C; R/O neoplasm'], ['Hx', 'simple mastectomy']],
      fig: { a: 'uterine-wall', l: [] },
      steps: [
        M('شمارش', 'G4 P4 یعنی…', ['چهار بارداری و چهار زایمان', 'چهار سقط', 'چهار زایمان زودرس', 'چهار فرزند دوقلو'], 'گراویدا و پارا.'),
        M('علت', 'چرا خونریزی پس از یائسگی مهم است؟', ['ممکن است نشانه سرطان آندومتر باشد', 'همیشه طبیعی است', 'نشانه بارداری است', 'از کم‌خونی است'], 'رد بدخیمی.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['neoplasm', 'رشد تازه (تومور)'], ['laparoscopy', 'دیدن درون شکم'], ['D&C', 'گشاد کردن و تراشیدن'], ['simple mastectomy', 'برداشتن کل پستان']], 'Chart Note.'),
        T('دارو', 'Premarin یک داروی استروژنی است.', true, 'هورمون‌درمانی.'),
        M('لایه', 'D&C کدام لایه رحم را می‌تراشد؟', ['endometrium', 'myometrium', 'perimetrium', 'cervix'], 'پوشش درونی.', null, { a: ['uterine-wall'], l: [] }),
        S('املا', 'املای «پس از یائسگی» (صفت) را بنویس', 'postmenopausal', 'post- + men/o + pausal.', 'postm…')
      ]
    },
    /* ================= دستگاه تناسلی مردانه ================= */
    {
      id: 'r7', w: 'ml', title: 'دو عمل در یک جلسه', who: 'Derek، مرد ۴۸ ساله',
      brief: 'Case Study 15-1: آقای Derek با برآمدگی در دو طرف کشاله ران آمد. تشخیص: bilateral direct inguinal hernias. او همراه با herniorrhaphy، vasectomy انتخابی هم خواست چون دیگر فرزند نمی‌خواهد.',
      chart: [['Dx', 'bilateral direct inguinal hernias'], ['Procedure', 'bilateral herniorrhaphy'], ['', 'elective vasectomy']],
      fig: { a: 'sperm-path', l: [] },
      steps: [
        M('محل', 'inguinal یعنی…', ['کشاله ران', 'ناف', 'کیسه بیضه', 'پرینه'], 'inguin/o.'),
        M('عمل', 'herniorrhaphy یعنی…', ['ترمیم فتق با دوختن', 'برش فتق', 'برداشتن بیضه', 'بستن مجرا'], '-rrhaphy.'),
        M('عمل', 'در vasectomy کدام مجرا بریده می‌شود؟', ['vas deferens', 'urethra', 'uterine tube', 'ejaculatory duct'], 'vas/o.', null, { a: ['sperm-path'], l: [] }),
        T('نتیجه', 'پس از وازکتومی منی بدون اسپرم است ولی انزال ادامه دارد.', true, 'فقط مسیر اسپرم بسته است.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['bilateral', 'دوطرفه'], ['elective', 'انتخابی'], ['spermatic cord', 'طناب اسپرماتیک'], ['inguinal canal', 'کانال کشاله ران']], 'Case Study 15-1.'),
        S('املا', 'املای «بریدن مجرای وابران» را بنویس', 'vasectomy', 'vas/o + -ectomy.', 'vase…')
      ]
    },
    {
      id: 'r8', w: 'ml', title: 'بیضه‌ای که پایین نیامد', who: 'Bob Schaeffer Jr، نوزاد پسر',
      brief: 'پدر Bob نگران است: پزشک گفته هر دو بیضه نوزاد هنوز در کیسه نیستند (bilateral cryptorchidism) و یک سیاهرگ گشاد هم بالای بیضه دیده شده است. پدر درباره ختنه هم سؤال دارد. در پرونده دیگری، Rick Springs پس از ترمیم بیضه نزول‌نکرده، به‌علت آسیب بیضه orchiectomy شد.',
      chart: [['Dx', 'bilateral cryptorchidism; varicocele'], ['Request', 'circumcision'], ['Plan', 'orchiopexy']],
      fig: { a: 'scrotal-disorders', l: [] },
      steps: [
        M('واژه', 'cryptorchidism یعنی…', ['بیضه نزول‌نکرده', 'التهاب بیضه', 'نبود بیضه', 'پیچ خوردن بیضه'], 'crypt/o = پنهان.', null, { a: ['cryptorchidism'], l: [] }),
        M('درمان', 'ثابت کردن بیضه در کیسه چه نام دارد؟', ['orchiopexy', 'orchiectomy', 'orchitis', 'orchiplasty'], '-pexy.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['varicocele', 'سیاهرگ‌های گشاد بالای بیضه'], ['circumcision', 'ختنه'], ['orchiectomy', 'برداشتن بیضه'], ['bilateral', 'دوطرفه']], 'سناریوهای APPLY.'),
        T('ختنه', 'در ختنه پوست روی سر آلت (prepuce) برداشته می‌شود.', true, 'circumcision.'),
        M('ریشه', 'کدام ریشه یعنی پنهان؟', ['crypt/o', 'cyst/o', 'orchi/o', 'scrot/o'], 'cryptorchidism.'),
        S('املا', 'املای «ثابت کردن بیضه» را بنویس', 'orchiopexy', 'orchi/o + -pexy.', 'orchio…')
      ]
    },
    {
      id: 'r9', w: 'ml', title: 'مشکلی که بیمار از گفتنش شرم داشت', who: 'Diego، مرد ۶۷ ساله',
      brief: 'Case Study 15-2: آقای Diego با سابقه BPH، پس از مدتی تردید گفت در نعوظ مشکل دارد. پزشک علت‌های روانی (psychogenic) را بررسی و رد کرد و داروی گشادکننده رگ برای erectile dysfunction تجویز کرد.',
      chart: [['CC', 'impotence'], ['Hx', 'BPH'], ['Assessment', 'ED, psychogenic causes ruled out'], ['Rx', 'vasodilator ED drug']],
      fig: { a: 'penis-xs', l: [] },
      steps: [
        M('اختصار', 'ED یعنی…', ['erectile dysfunction', 'ejaculatory duct', 'emergency department', 'estimated delivery'], 'ناتوانی در نعوظ.'),
        M('واژه', 'psychogenic یعنی…', ['با منشأ روانی', 'با منشأ عروقی', 'ارثی', 'عفونی'], 'psych/o + -genic.'),
        M('فیزیولوژی', 'نعوظ با پر شدن کدام بافت از خون است؟', ['corpora cavernosa و corpus spongiosum', 'پروستات', 'اپیدیدیم', 'کیسه منی'], 'بافت نعوظی.', null, { a: ['penis-xs'], l: [] }),
        T('دارو', 'داروهای ED با گشاد کردن رگ‌ها جریان خون آلت را بیشتر می‌کنند.', true, 'vasodilator.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['impotence', 'ناتوانی جنسی'], ['BPH', 'بزرگی خوش‌خیم پروستات'], ['vasodilator', 'گشادکننده رگ'], ['erection', 'نعوظ']], 'Case Study 15-2.'),
        S('املا', 'املای «ناتوانی جنسی» (هم‌معنی ED) را بنویس', 'impotence', 'im- + potence.', 'impo…')
      ]
    },
    /* ================= بارداری و زایمان ================= */
    {
      id: 'r10', w: 'pg', title: 'سزارین اورژانسی', who: 'Abigail، خانم ۲۹ ساله، G2 P1',
      brief: 'Case Study: Abigail در هفته ۳۹ با درد زایمان آمد. سر جنین با لگن او تناسب نداشت (CPD) و جنین در وضعیت right occiput posterior بود. با بروز fetal distress، زیر spinal anesthesia و با برش عرضی بالای شرمگاهی سزارین شد. نوزاد Apgar 9/9 گرفت. پس از عمل Pitocin، PACU، rooming-in و breast-feeding.',
      chart: [['OB', 'G2 P1, 39 weeks'], ['Dx', 'CPD, ROP, fetal distress'], ['Procedure', 'emergency C-section, spinal anesthesia'], ['Infant', 'Apgar 9/9']],
      fig: { a: 'cesarean', l: [] },
      steps: [
        M('اختصار', 'CPD یعنی…', ['عدم تناسب سر جنین و لگن مادر', 'پارگی زودرس پرده‌ها', 'جفت سرراهی', 'زایمان زودرس'], 'cephalopelvic disproportion.'),
        M('شمارش', 'G2 P1 یعنی…', ['دو بارداری و یک زایمان قبلی', 'یک بارداری و دو زایمان', 'دو سقط', 'دوقلو'], 'گراویدا و پارا.'),
        M('برش', 'برش پوست سزارین Abigail چگونه بود؟', ['عرضی بالای شرمگاهی', 'عمودی میانی', 'روی پرینه', 'زیر ناف عمودی'], 'transverse suprapubic.', null, { a: ['cesarean'], l: [] }),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['fetal distress', 'کمبود اکسیژن جنین'], ['Pitocin', 'اکسی‌توسین ساختگی'], ['PACU', 'بخش مراقبت پس از بیهوشی'], ['rooming-in', 'هم‌اتاقی با نوزاد']], 'Case Study.'),
        T('آپگار', 'Apgar 9/9 یعنی نوزاد در دقیقه یک و پنج حال خوبی داشت.', true, 'نزدیک به ۱۰.', { a: ['apgar'], l: [] }),
        S('املا', 'املای «نوزاد» را بنویس', 'neonate', 'neo- + nat/o.', 'neon…')
      ]
    },
    {
      id: 'r11', w: 'pg', title: 'برگه زایمان طبیعی', who: 'خانم ۲۵ ساله، G1 P0',
      brief: 'OB Delivery Note: بیمار ۲۵ ساله G1 P0 با IUP در ۳۶ هفته و ۶ روز، با bloody show و PROM آمد. معاینه: دهانه رحم ۸۰٪ نازک (effacement) و ۴ سانتی‌متر باز (dilation) بود. با epidural، NSVD انجام شد و second-degree midline episiotomy ترمیم شد. نوزاد Apgar 9/9؛ EBL 300 cc.',
      chart: [['OB', 'G1 P0 → G1 P1'], ['GA', 'IUP 36 6/7 weeks'], ['Exam', '80% effaced, 4 cm'], ['Delivery', 'NSVD, epidural, 2nd-degree episiotomy'], ['EBL', '300 cc']],
      fig: { a: 'labor-stages', l: [] },
      steps: [
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['IUP', 'بارداری داخل رحمی'], ['PROM', 'پارگی زودرس پرده‌ها'], ['NSVD', 'زایمان طبیعی واژینال'], ['EBL', 'خون از دست رفته تخمینی']], 'Delivery Note.'),
        M('معاینه', '80% effacement یعنی…', ['دهانه رحم ۸۰٪ نازک شده', 'دهانه رحم ۸ سانتی‌متر باز است', '۸۰٪ پرده‌ها پاره شده', 'جنین ۸۰٪ پایین آمده'], 'نازک شدن.'),
        M('سن', '۳۶ هفته و ۶ روز یعنی نوزاد…', ['preterm', 'term', 'postterm', 'stillborn'], 'پیش از ۳۷ هفته.'),
        T('شمارش', 'پس از این زایمان، بیمار G1 P1 است.', true, 'یک زایمان.'),
        M('برش', 'episiotomy یعنی…', ['برش پرینه', 'برش رحم', 'پاره کردن کیسه آب', 'برش شکم'], 'episi/o + -tomy.'),
        S('املا', 'املای «نازک شدن دهانه رحم» را بنویس', 'effacement', 'efface + -ment.', 'effa…')
      ]
    },
    {
      id: 'r12', w: 'pg', title: 'بارداری پرخطر', who: 'خانم ۲۳ ساله در روز ۱۷۵ بارداری',
      brief: 'High-Risk OB Consultation: بیمار ۲۳ ساله multigravida, nullipara با سابقه سه miscarriage است و اکنون ۱۷۵ روز (۲۵ هفته) از بارداری‌اش می‌گذرد. amniocentesis در هفته ۲۰ طبیعی و جنین پسر بود. سونوگرافی placenta previa نشان داد و خطر abruptio هست. FHR حدود ۱۳۰. توصیه: سزارین با شروع زایمان.',
      chart: [['OB', 'multigravida, nullipara; 3 SABs'], ['GA', '175 days'], ['Tests', 'amniocentesis 20 wk: normal male'], ['Dx', 'placenta previa; risk of abruptio'], ['Plan', 'C-section at onset of labor']],
      fig: { a: 'placenta-problems', l: [] },
      steps: [
        M('شمارش', 'multigravida, nullipara یعنی…', ['چند بار باردار شده ولی زایمانی نداشته', 'بار اول باردار است', 'چند زایمان داشته', 'هرگز باردار نشده'], 'طبق منابع مرجع.'),
        M('جفت', 'placenta previa یعنی…', ['جفت روی دهانه رحم', 'جدا شدن زودرس جفت', 'جفت چسبیده به عضله', 'جفت کوچک'], 'previa.', null, { a: ['placental-abnormalities'], l: [] }),
        M('خطر', 'چرا زایمان واژینال در placenta previa خطرناک است؟', ['جفت جلوی راه خروج است و خونریزی شدید می‌دهد', 'جنین بریچ می‌شود', 'فشار خون بالا می‌رود', 'نوزاد زودرس می‌شود'], 'خونریزی.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['miscarriage', 'سقط خودبه‌خودی'], ['abruptio placentae', 'جدا شدن زودرس جفت'], ['FHR', 'ضربان قلب جنین'], ['amniocentesis', 'کشیدن مایع آمنیوتیک']], 'مشاوره.'),
        T('آزمون', 'آمنیوسنتز می‌تواند جنسیت و کروموزوم‌های جنین را نشان دهد.', true, 'کاریوتایپ.', { a: ['amniocentesis'], l: [] }),
        S('املا', 'املای «جفت سرراهی» (واژه دوم) را بنویس', 'previa', 'placenta …', 'prev…')
      ]
    },
    /* ================= بیماری‌ها و عفونت‌ها ================= */
    {
      id: 'r13', w: 'ds', title: 'تاول‌هایی که زخم شدند', who: 'خانم ۲۲ ساله',
      brief: 'Case Study: بیمار ۲۲ ساله با تب، بی‌حالی (malaise)، ادرار دردناک و ترشح سفید واژن آمد. چند روز پیش تاول‌هایی در ناحیه تناسلی داشت که اکنون زخم شده‌اند. معاینه: قرمزی و ورم، و بزرگی غدد لنفاوی کشاله ران. تشخیص: genital herpes.',
      chart: [['Sx', 'fever, malaise, dysuria, leukorrhea'], ['Exam', 'vesicles → ulcers; erythema, edema; inguinal lymphadenopathy'], ['Dx', 'genital herpes (HSV-2)']],
      fig: { a: 'sti', l: [] },
      steps: [
        P('واژه', 'هر نشانه را به معنی‌اش وصل کن', [['malaise', 'بی‌حالی'], ['dysuria', 'ادرار دردناک'], ['leukorrhea', 'ترشح سفید'], ['lymphadenopathy', 'بیماری غدد لنفاوی']], 'Case Study.'),
        M('عامل', 'عامل genital herpes کدام است؟', ['HSV-2', 'HPV', 'HIV', 'Treponema'], 'هرپس سیمپلکس.', null, { a: ['herpes-drawing'], l: [] }),
        O('ضایعه', 'تغییر ضایعه را بچین', ['erythema', 'vesicles', 'ulcers', 'healing'], 'از قرمزی تا بهبود.'),
        M('واژه', 'erythema و edema یعنی…', ['قرمزی و ورم', 'تب و درد', 'تاول و زخم', 'خارش و ترشح'], 'erythr/o = قرمز.'),
        T('درمان', 'هرپس تناسلی با درمان ضدویروس کنترل می‌شود ولی ویروس از بدن پاک نمی‌شود.', true, 'نهفته می‌ماند.'),
        S('املا', 'املای «ترشح سفید واژن» را بنویس', 'leukorrhea', 'leuk/o + -rrhea.', 'leuko…')
      ]
    },
    {
      id: 'r14', w: 'ds', title: 'ادراری که دیر شروع می‌شود', who: 'Dexter، مرد ۶۰ ساله',
      brief: 'Case Study: آقای Dexter از دیر شروع شدن ادرار و جریان ضعیف شکایت دارد. در DRE پروستاتی حدود ۵۰ گرم و بزرگ لمس شد. پس از ادرار، ۱۲۰ mL ادرار در مثانه باقی می‌ماند. تشخیص: BPH with BNO. برنامه: TURP.',
      chart: [['CC', 'hesitancy, weak stream'], ['DRE', 'enlarged prostate ~50 g'], ['Residual urine', '120 mL'], ['Dx', 'BPH with BNO'], ['Plan', 'TURP']],
      fig: { a: 'bph', l: [] },
      steps: [
        M('واژه', 'hesitancy یعنی…', ['دیر شروع شدن ادرار', 'ادرار زیاد', 'شب‌ادراری', 'خون در ادرار'], 'تأخیر.'),
        M('اختصار', 'BNO یعنی…', ['انسداد گردن مثانه', 'تومور مثانه', 'عفونت مثانه', 'بزرگی کلیه'], 'bladder neck obstruction.'),
        T('معاینه', 'DRE یعنی لمس پروستات با انگشت از راه راست‌روده.', true, 'digital rectal exam.', { a: ['male-sagittal'], l: [] }),
        M('علت', 'ادرار باقی‌مانده ۱۲۰ mL نشانه چیست؟', ['احتباس ادرار به‌علت انسداد', 'عفونت کلیه', 'نارسایی کلیه', 'دیابت'], 'urinary retention.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['BPH', 'بزرگی خوش‌خیم پروستات'], ['TURP', 'تراشیدن پروستات از راه پیشابراه'], ['hyperplasia', 'افزایش تعداد سلول‌ها'], ['benign', 'خوش‌خیم']], 'Case Study.'),
        S('املا', 'املای «پروستات» را بنویس', 'prostate', 'prostat/o.', 'prost…')
      ]
    },
    {
      id: 'r15', w: 'ds', title: 'قاعدگی سنگین و دردناک', who: 'Rosie McConnell، خانم ۳۸ ساله',
      brief: 'خانم McConnell از قاعدگی بسیار زیاد و دردناک شکایت دارد. hysteroscopy نشان داد رحمش به عقب برگشته (retroverted) و چند fibroid دارد. در بارداری قبلی preeclampsia داشته است. تست بارداری امروز مثبت شد.',
      chart: [['Sx', 'menorrhagia, dysmenorrhea'], ['Hysteroscopy', 'retroverted uterus, fibroids'], ['Hx', 'preeclampsia'], ['Lab', 'positive pregnancy test']],
      fig: { a: 'uterine-disorders', l: [] },
      steps: [
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['menorrhagia', 'قاعدگی زیاد'], ['dysmenorrhea', 'قاعدگی دردناک'], ['retroverted', 'برگشته به عقب'], ['fibroid', 'فیبروم']], 'سناریوی APPLY.'),
        M('فیبروم', 'نام علمی fibroid کدام است؟', ['leiomyoma', 'endometriosis', 'adenomyosis', 'polyp'], 'تومور عضله صاف.', null, { a: ['fibroids'], l: [] }),
        M('عارضه', 'preeclampsia با چه همراه است؟', ['فشار خون بالا و پروتئین در ادرار', 'قند خون پایین', 'خونریزی بی‌درد', 'تب'], 'پس از هفته ۲۰.'),
        T('آزمون', 'تست بارداری hCG را می‌سنجد.', true, 'هورمون بارداری.'),
        M('جایگاه', 'retroversion رحم یعنی…', ['خم شدن رحم به عقب', 'افتادگی رحم', 'بزرگی رحم', 'رحم دوشاخ'], 'retro-.', null, { a: ['uterine-positions'], l: [] }),
        S('املا', 'املای «قاعدگی دردناک» را بنویس', 'dysmenorrhea', 'dys- + men/o + -rrhea.', 'dysm…')
      ]
    },
    /* ================= تشخیص، درمان و پیشگیری ================= */
    {
      id: 'r16', w: 'tx', title: 'از پاپ اسمیر تا هیسترکتومی', who: 'Naomi، خانم ۶۰ ساله، G2 P2',
      brief: 'Case Study 16-1: خانم Naomi با خونریزی پس از یائسگی آمد. پاپ اسمیرهایش dysplasia دهانه رحم نشان داده بود. پس از colposcopy، D&C همراه با cone biopsy انجام شد. HRT نگرفته بود. به‌علت دیسپلازی و افتادگی رحم، عمل TAH و BSO انجام شد. پاتولوژی: leiomyomas، تنگی لوله رحم راست و بدون PID.',
      chart: [['OB', 'G2 P2'], ['CC', 'postmenopausal bleeding'], ['Tests', 'Pap: cervical dysplasia; colposcopy; D&C with cone biopsy'], ['Surgery', 'TAH and BSO'], ['Path', 'leiomyomas; R tube stenosis; no PID']],
      fig: { a: 'hysterectomy-types', l: [] },
      steps: [
        O('روند', 'روند بررسی و درمان را بچین', ['Pap smear', 'colposcopy', 'D&C with cone biopsy', 'TAH and BSO'], 'Case Study 16-1.'),
        M('واژه', 'cervical dysplasia یعنی…', ['رشد نابجای سلول‌های دهانه رحم', 'سرطان پیشرفته', 'عفونت دهانه رحم', 'پولیپ'], 'dys- + -plasia.', null, { a: ['pap-test'], l: [] }),
        M('جراحی', 'در TAH and BSO چه برداشته می‌شود؟', ['رحم، دهانه رحم، لوله‌ها و تخمدان‌ها', 'فقط رحم', 'فقط تخمدان‌ها', 'فقط دهانه رحم'], 'کامل.', null, { a: ['hysterectomy-types'], l: [] }),
        P('پاتولوژی', 'هر یافته را به معنی‌اش وصل کن', [['leiomyomas', 'فیبروم‌ها'], ['stenosis', 'تنگی'], ['no PID', 'بدون عفونت لگن'], ['uterine prolapse', 'افتادگی رحم']], 'پاتولوژی.'),
        T('درمان', '<bdi dir="ltr">“HRT denied”</bdi> یعنی بیمار هورمون‌درمانی نگرفته است.', true, 'denied = رد کرد.'),
        S('املا', 'املای «کولپوسکوپی» را بنویس', 'colposcopy', 'colp/o + -scopy.', 'colpo…')
      ]
    },
    {
      id: 'r17', w: 'tx', title: 'یک روز در آزمایشگاه IVF', who: 'Ruth، کارشناس آزمایشگاه',
      brief: 'Case Study 16-2: Ruth در آزمایشگاه IVF کار می‌کند. امروز در transvaginal oocyte retrieval کمک می‌کند، تحرک اسپرم (sperm motility) را می‌سنجد و برای دو زوج دیگر GIFT و ZIFT آماده می‌کند.',
      chart: [['Procedures', 'transvaginal oocyte retrieval'], ['Lab', 'sperm motility'], ['Transfers', 'GIFT, ZIFT, embryo transfer']],
      fig: { a: 'fertilization', l: [] },
      steps: [
        O('روند', 'گام‌های IVF را بچین', ['ovarian stimulation', 'oocyte retrieval', 'fertilization in lab', 'embryo transfer'], 'IVF.'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['IVF', 'لقاح آزمایشگاهی'], ['GIFT', 'انتقال گامت به لوله رحم'], ['ZIFT', 'انتقال زیگوت به لوله رحم'], ['ICSI', 'تزریق اسپرم به تخمک']], 'Case Study 16-2.'),
        M('واژه', 'transvaginal oocyte retrieval یعنی…', ['برداشتن تخمک‌ها از راه واژن', 'انتقال رویان به رحم', 'تزریق اسپرم به رحم', 'نمونه از دهانه رحم'], 'trans- + vagin/o.'),
        M('اسپرم', 'sperm motility یعنی…', ['تحرک اسپرم', 'تعداد اسپرم', 'شکل اسپرم', 'حجم منی'], 'حرکت.', null, { a: ['sperm-cell'], l: [] }),
        T('روش', 'در ZIFT زیگوت به لوله رحم منتقل می‌شود.', true, 'zygote intrafallopian transfer.'),
        S('املا', 'املای «تخمک نابالغ» را بنویس', 'oocyte', 'o/o + -cyte.', 'ooc…')
      ]
    },
    {
      id: 'r18', w: 'tx', title: 'شب‌ادراری در ۷۷ سالگی', who: 'مرد ۷۷ ساله',
      brief: 'Consultation: بیمار ۷۷ ساله از شب‌ادراری و دشواری در خروج منی شکایت دارد. در کودکی cryptorchidism داشته که با orchiopexy درمان شده و در ۴۱ سالگی vasectomy کرده است. در DRE ندول لمس شد ولی biopsy برای سرطان پروستات منفی و PSA طبیعی بود. تشخیص: BPH. برنامه: TURP.',
      chart: [['CC', 'nocturia; difficulty releasing semen'], ['Hx', 'cryptorchidism → orchiopexy; vasectomy at 41'], ['Tests', 'DRE: nodules; biopsy negative; PSA normal'], ['Dx', 'BPH'], ['Plan', 'TURP']],
      fig: { a: 'turp', l: [] },
      steps: [
        M('علامت', 'nocturia یعنی…', ['شب‌ادراری', 'ادرار دردناک', 'خون در ادرار', 'بی‌اختیاری'], 'noct/o + -uria.'),
        P('آزمون', 'هر آزمون را به کارش وصل کن', [['DRE', 'لمس پروستات'], ['PSA', 'آنتی‌ژن پروستات در خون'], ['biopsy', 'نمونه بافت'], ['TRUS', 'سونوگرافی از راه راست‌روده']], 'بررسی پروستات.'),
        T('نتیجه', 'بیوپسی منفی و PSA طبیعی به نفع BPH است تا سرطان.', true, 'خوش‌خیم.', { a: ['prostate-biopsy'], l: [] }),
        M('درمان', 'TURP از کدام راه انجام می‌شود؟', ['پیشابراه', 'شکم', 'راست‌روده', 'پرینه'], 'transurethral.', null, { a: ['turp-drawing'], l: [] }),
        O('سابقه', 'رخدادهای زندگی بیمار را بچین', ['cryptorchidism', 'orchiopexy', 'vasectomy', 'BPH'], 'از کودکی تا امروز.'),
        S('املا', 'املای «شب‌ادراری» را بنویس', 'nocturia', 'noct/o + -uria.', 'noct…')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* زایا — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', 'دستگاه تولیدمثل در زن و مرد یک هدف دارد: ساختن گامت (تخمک و اسپرم) و هورمون‌های جنسی.'],
    ['Lx', 'معنی را از پسوند شروع کن: salping/o/cele یعنی «فتق لوله رحم».'],
    ['Lx', 'hyster/o و metr/o هر دو رحم‌اند؛ colp/o و vagin/o هر دو واژن؛ oophor/o و ovari/o هر دو تخمدان.'],
    ['Lx', 'orchi/o، orchid/o و test/o همه یعنی بیضه؛ oophor/o تخمدان است، با orchi/o اشتباه نکن.'],
    ['Lx', 'gravida شمار بارداری‌هاست و para شمار زایمان‌ها پس از هفته ۲۰.'],
    ['Lx', '‎-rrhea‎ جاری شدن است و ‎-rrhagia‎ خونریزی شدید؛ ‎-rrhaphy‎ دوختن است.'],
    ['Lx', 'prostate یعنی پروستات؛ prostrate یعنی دمر افتاده. یک r اضافه معنی را عوض می‌کند.'],
    ['Fm', 'لایه‌های رحم از بیرون به درون: perimetrium، myometrium، endometrium.'],
    ['Fm', 'تخمدان‌ها و لوله‌های رحم را با هم adnexa (ضمائم رحم) می‌گویند.'],
    ['Fm', 'تخمک‌گذاری در چرخه ۲۸ روزه حدود روز ۱۴ است؛ پس از آن جسم زرد پروژسترون می‌سازد.'],
    ['Fm', 'menarche اولین قاعدگی است و menopause آخرین؛ perimenopause سال‌های بین این دو را تا یائسگی می‌گوید.'],
    ['Fm', 'mamm/o و mast/o هر دو پستان‌اند: mammography و mastectomy.'],
    ['Ml', 'مسیر اسپرم: seminiferous tubules، epididymis، vas deferens، ejaculatory duct، urethra.'],
    ['Ml', 'کیسه بیضه دمای بیضه را حدود ۲ تا ۳ درجه پایین‌تر از بدن نگه می‌دارد.'],
    ['Ml', 'بیشترین حجم منی از seminal vesicles است، نه از پروستات.'],
    ['Ml', 'Point and Shoot: نعوظ با پاراسمپاتیک و انزال با سمپاتیک.'],
    ['Pg', 'embryo تا پایان هفته ۸ است و fetus از هفته ۹ تا تولد.'],
    ['Pg', 'قاعده نگله: LMP + ۷ روز − ۳ ماه + ۱ سال؛ یا LMP + ۲۸۰ روز.'],
    ['Pg', 'بند ناف دو سرخرگ و یک سیاهرگ دارد.'],
    ['Pg', 'APGAR: رنگ، نبض، واکنش، تون عضله و تنفس؛ هر کدام ۰ تا ۲.'],
    ['Pg', 'مرحله اول زایمان تا باز شدن کامل دهانه رحم، دوم تا تولد و سوم تا خروج جفت است.'],
    ['Ds', 'placenta previa خونریزی بی‌درد می‌دهد و abruptio placentae خونریزی دردناک.'],
    ['Ds', 'بیش از ۹۵٪ بارداری‌های خارج رحمی در لوله رحم‌اند.'],
    ['Ds', 'hypospadias سوراخ پیشابراه زیر آلت است و epispadias روی آن.'],
    ['Ds', 'HPV علت زگیل تناسلی و بیشتر سرطان‌های دهانه رحم است.'],
    ['Ds', 'خونریزی پس از یائسگی را همیشه بررسی کن؛ ممکن است سرطان آندومتر باشد.'],
    ['Tx', 'CVS زودتر از آمنیوسنتز انجام می‌شود: هفته ۱۰ تا ۱۳ در برابر ۱۵ تا ۲۰.'],
    ['Tx', 'TAH-BSO یعنی برداشتن رحم، دهانه رحم، هر دو لوله و هر دو تخمدان.'],
    ['Tx', 'TURP پروستات را از راه پیشابراه می‌تراشد؛ بدون برش پوست.'],
    ['Tx', 'کاندوم تنها روش پیشگیری از بارداری است که از STI هم محافظت می‌کند.'],
    ['Tx', 'در GIFT گامت‌ها و در ZIFT زیگوت به لوله رحم منتقل می‌شوند.']
  ];
  const COLORS = { Lx: '#B8457A', Fm: '#E46A8E', Ml: '#2E86C1', Pg: '#E8913A', Ds: '#8E6BD8', Tx: '#17A398', '': '#B8457A' };
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
