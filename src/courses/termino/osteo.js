/* تراپو • ترمینو — حیطه «osteo» (Musculoskeletal System)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_osteo;
  D.css = ".rom__m{margin: 10px 0;}\n.rom{display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin: 6px 0 10px;}\n.rom__g{width: 160px; height: 100px; flex-shrink: 0;}\n.rom__in{display: flex; flex-direction: column; gap: 6px; flex: 1 1 140px; min-width: 0; font-weight: 800; color: var(--muted);}\n.rom__in input{width: 100%; font: inherit; font-size: 22px; font-weight: 900; color: var(--text); background: var(--bg); border: 2px solid var(--line); border-radius: 14px; padding: 8px 12px; text-align: left; font-family: Nunito, system-ui, sans-serif;}\n.rom__in input:focus{outline: none; border-color: #1e9e8f;}\n.rom__in--t{flex-direction: row; align-items: center; gap: 10px; margin: 8px 0;}\n.rom__in--t span{flex-shrink: 0; font-family: Arial, Helvetica, sans-serif;}\n.rom__out{display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 10px; padding: 12px 16px; border-radius: 16px; background: color-mix(in srgb, #1e9e8f 12%, var(--bg)); border: 2px solid color-mix(in srgb, #1e9e8f 40%, var(--line)); margin-bottom: 12px;}\n.rom__out b{font-size: 26px; color: #1e9e8f;}\n.rom__out small{flex-basis: 100%; color: var(--muted); font-weight: 700;}\n.rom__out--t b{font-size: 20px;}\n.rom__h{margin: 16px 0 4px; font-size: 16px;}\n.tsc--ok{color: #46a302 !important;}\n.tsc--mid{color: #e5a500 !important;}\n.tsc--bad{color: #c2413a !important;}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* اُستئو — پیکربندی اپ: هر متن، نام، کلید ذخیره‌سازی، شخصیت و ابزار ویژه‌ای که موتور مشترک (engine/) از اپ می‌خواهد.
 * این فایل پیش از همه ماژول‌ها بارگذاری می‌شود؛ تابع‌ها بعداً و هنگام اجرا صدا زده می‌شوند. */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.APP = {
    name: 'اُستئو', key: 'osteo', title: 'اُستئو • ترمینولوژی اسکلتی-عضلانی', certCode: 'OS',
    subject: 'ترمینولوژی پزشکی دستگاه اسکلتی-عضلانی (استخوان، مفصل، عضله و تاندون)',
    kicker: '🦴 ترمینولوژی پزشکی: استخوان، مفصل، عضله و تاندون',
    hello: 'سلام، من <b>اُستئو</b> هستم؛ یک استخوان خندان با هدبند ورزشی و یک دمبل کوچک!',
    disclaimer: 'اُستئو یک ابزار آموزشی است و جایگزین معاینه، قضاوت بالینی یا دستور پزشک نیست.',
    eyes: 'ده‌ها شکل دوزبانه و تصویر بالینی؛ از اسکلت و برش استخوان دراز تا رادیوگرافی شکستگی، آرتریت و حرکت‌های مفصل.',
    outcomes: [
      'هر واژه اسکلتی-عضلانی را به پیشوند، ریشه و پسوند بشکنی و معنی‌اش را بگویی',
      'ساختار استخوان، سلول‌های استخوانی و بیماری‌های استخوان را بشناسی',
      'استخوان‌های جمجمه، ستون مهره، قفسه سینه و اندام‌ها را روی اسکلت نشان دهی',
      'انواع مفصل و حرکت‌های مفصل را با واژه درست (فلکشن، ابداکشن…) توصیف کنی',
      'عضلات مهم بدن، نام‌گذاری‌شان و بیماری‌های عضله و تاندون را از هم جدا کنی',
      'انواع شکستگی، تصویربرداری، جراحی‌ها و اختصارهای پرونده ارتوپدی را بخوانی'
    ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، گزارش ارتوپدی را مثل یک داستان آشنا می‌خوانی.',
    obHello: 'سلام! من اُستئو هستم؛ یک استخوان خندان 🦴 اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان استخوان و عضله» بهترین شروع است؛ ریشه‌های پایه و جهت‌های بدن آن‌جا یاد داده می‌شوند!',
    demo: () => ({
      q: 'واژه <b dir="ltr">osteoporosis</b> یعنی…',
      fig: { a: ['osteoporosis'], l: ['استخوان سالم و استخوان پوک'] },
      opts: ['پوکی استخوان', 'نرمی استخوان', 'التهاب استخوان', 'تومور استخوان'],
      why: `${EA.K.wb('oste/o', '-porosis')}<br><b>oste/o</b> = استخوان، <b>-porosis</b> = متخلخل. پس <b>پوکی استخوان</b>؛ استخوانی سوراخ‌سوراخ و شکننده که با یک زمین‌خوردن ساده می‌شکند. معنی را از پسوند شروع کن!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ['سلول تازه', 'استئوبلاست کنجکاو', 'غضروف‌شناس جوان', 'نگهبان مفصل', 'رمزگشای ریشه‌ها', 'نقشه‌خوان اسکلت', 'استاد ستون مهره',
      'کارآگاه حرکت', 'قهرمان عضله', 'شکارچی شکستگی', 'خواننده رادیوگرافی', 'کارآگاه آرتریت', 'استاد واژه‌سازی', 'افسانه ارتوپدی', 'اسطوره ترمینولوژی'],
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'دانشجوی فیزیوتراپی', 'کارشناس فیزیوتراپی', 'دانشجوی کاردرمانی', 'کارشناس رادیولوژی', 'دانشجوی تکنولوژی پرتوشناسی', 'رزیدنت ارتوپدی', 'دانشجوی تربیت‌بدنی', 'مربی ورزش', 'کارشناس اتاق عمل', 'پرستار ارتوپدی', 'دانشجوی مامایی'],
    firstBadge: ['🦴', 'اولین استخوان'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], bn: ['🦴', 'استخوان‌شناس'], sk: ['💀', 'نقشه‌خوان اسکلت'], jt: ['🦵', 'استاد مفاصل'], mu: ['💪', 'قهرمان عضله'], fx: ['🩻', 'کارآگاه شکستگی'] },
    confetti: ['#C2413A', '#E9D8B4', '#FFC800', '#3F7FBF', '#1E9E8F', '#D64F6E', '#7B5CD6', '#58CC02'],
    /* ابزارها */
    parseDefault: 'osteomyelitis',
    parseSamples: ['osteomyelitis', 'spondylolisthesis', 'arthroscopy', 'myasthenia', 'chondromalacia', 'rhabdomyolysis', 'intervertebral', 'tenorrhaphy'],
    ph: { dict: 'جست‌وجو: oste، زانو، fracture…', roots: 'جست‌وجو: arthr، مهره، ‎-desis‎…', abbr: 'جست‌وجو: ORIF، شکستگی، ROM…' },
    toolsDisclaimer: '⚕️ اُستئو ابزار آموزشی است؛ واژه‌نامه، گونیومتر و تفسیر T-score جای معاینه و قضاوت بالینی را نمی‌گیرند.',
    /* شخصیت: استخوان خندان با هدبند و دمبل (بدنه؛ چشم و دهان را موتور می‌کشد، مرکز چهره cx,cy) */
    mascot: (cx, cy) => `
        <g fill="#F3E4C4">
          <circle cx="${cx - 26}" cy="34" r="19"/><circle cx="${cx + 26}" cy="34" r="19"/>
          <circle cx="${cx - 26}" cy="124" r="18"/><circle cx="${cx + 26}" cy="124" r="18"/>
          <rect x="${cx - 36}" y="36" width="72" height="88" rx="22"/>
        </g>
        <path d="M${cx + 30} 44 C${cx + 38} 70 ${cx + 38} 98 ${cx + 30} 122 Q${cx + 44} 128 ${cx + 40} 138 Q${cx + 50} 120 ${cx + 44} 110 C${cx + 46} 90 ${cx + 46} 66 ${cx + 44} 48 Q${cx + 52} 34 ${cx + 40} 22 Q${cx + 42} 36 ${cx + 30} 44Z" fill="#D9C092" opacity=".55"/>
        <path d="M${cx - 30} 40 Q${cx - 36} 30 ${cx - 30} 22" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".7"/>
        <path d="M${cx - 26} 58 V108" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".45"/>
        <path d="M${cx - 44} 44 Q${cx} 32 ${cx + 44} 44 L${cx + 44} 54 Q${cx} 42 ${cx - 44} 54Z" fill="var(--c)"/>
        <path d="M${cx + 42} 46 q12 2 16 12 M${cx + 42} 50 q14 -4 20 4" stroke="var(--c)" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <g transform="translate(${cx + 34} 132) rotate(-18)"><rect x="-13" y="-2.5" width="26" height="5" rx="2.5" fill="#6f7a80"/><rect x="-17" y="-8" width="7" height="16" rx="2.5" fill="var(--c)"/><rect x="10" y="-8" width="7" height="16" rx="2.5" fill="var(--c)"/></g>
        <path class="negar-spark" d="M104 70 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
`
  };

  /* ---------- ابزار ویژه: گونیومتر (دامنه حرکت) و تفسیر T-score تراکم استخوان ----------
   * مقادیر مرجع ROM تقریبی‌اند (جدول AAOS)؛ کتاب‌ها چند درجه با هم فرق دارند. */
  const ROM = [
    ['shAbd', 'ابداکشن شانه', 'shoulder abduction', 180], ['shFlex', 'فلکشن شانه', 'shoulder flexion', 180],
    ['elbow', 'فلکشن آرنج', 'elbow flexion', 150], ['pron', 'پرونیشن ساعد', 'forearm pronation', 80],
    ['sup', 'سوپینیشن ساعد', 'forearm supination', 80], ['wrist', 'فلکشن مچ دست', 'wrist flexion', 80],
    ['hip', 'فلکشن ران', 'hip flexion', 120], ['knee', 'فلکشن زانو', 'knee flexion', 135],
    ['dorsi', 'دورسی‌فلکشن مچ پا', 'ankle dorsiflexion', 20], ['plant', 'پلانتارفلکشن مچ پا', 'plantar flexion', 50]
  ];
  const st = { m: 'knee', v: '', t: '' };
  const fa = n => EA.fa(n);
  const cur = () => ROM.find(r => r[0] === st.m);
  const deg = () => { const n = EA.parseNum(st.v); return isFinite(n) && n >= 0 ? Math.min(n, 360) : NaN; };
  const romPct = () => { const n = deg(); return isFinite(n) ? Math.round(n / cur()[3] * 100) : 0; };
  /* کمان گونیومتر: مقدار مرجع خاکستری، اندازه بیمار رنگی */
  function arc() {
    const r = cur(), n = deg(), max = Math.max(r[3], isFinite(n) ? n : 0, 1);
    const sc = 180 / Math.max(180, max);
    const pt = a => { const t = Math.PI - a * sc * Math.PI / 180; return [(80 + Math.cos(t) * 62).toFixed(1), (84 - Math.sin(t) * 62).toFixed(1)]; };
    const path = a => { const p = pt(a); return `M18 84 A62 62 0 0 1 ${p[0]} ${p[1]}`; };
    const ref = pt(r[3]), me = isFinite(n) ? pt(n) : null;
    return `<svg class="rom__g" viewBox="0 0 160 100" role="img" aria-label="${r[1]}">
      <path d="M14 84 H146" stroke="var(--line2)" stroke-width="3" stroke-linecap="round"/>
      <path d="${path(r[3])}" stroke="var(--line2)" stroke-width="10" fill="none" stroke-linecap="round" opacity=".7"/>
      ${me && n > 0 ? `<path d="${path(n)}" stroke="#1E9E8F" stroke-width="10" fill="none" stroke-linecap="round"/>` : ''}
      <path d="M80 84 L${ref[0]} ${ref[1]}" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/>
      ${me ? `<path d="M80 84 L${me[0]} ${me[1]}" stroke="#C2413A" stroke-width="3.5" stroke-linecap="round"/>` : ''}
      <circle cx="80" cy="84" r="6" fill="#C2413A"/><circle cx="80" cy="84" r="2.5" fill="#fff"/>
    </svg>`;
  }
  function romOut() {
    const r = cur(), n = deg(), p = romPct();
    if (!isFinite(n)) return `<b>—</b> <span>مقدار مرجع: <bdi dir="ltr">${r[3]}°</bdi></span><small>زاویه اندازه‌گیری‌شده با گونیومتر را وارد کن</small>`;
    const msg = p >= 90 ? 'دامنه حرکت تقریباً کامل (full ROM)' : p >= 60 ? 'محدودیت نسبی دامنه حرکت' : 'محدودیت شدید؛ نیاز به ارزیابی و فیزیوتراپی';
    return `<b>${fa(p)}٪</b> <span>از دامنه طبیعی (<bdi dir="ltr">${fa(n)}° / ${r[3]}°</bdi>)</span><small>${msg}</small>`;
  }
  const tVal = () => { const n = EA.parseNum(st.t); return isFinite(n) ? n : NaN; };
  function tOut() {
    const n = tVal();
    if (!isFinite(n)) return '<small>T-score گزارش DXA را وارد کن؛ مثلاً ‎-2.7‎</small>';
    const c = n >= -1 ? ['طبیعی', 'تراکم استخوان در محدوده طبیعی است.', 'ok'] : n > -2.5 ? ['استئوپنی (osteopenia)', 'توده استخوان کمتر از طبیعی است ولی هنوز پوکی استخوان نیست.', 'mid'] : ['پوکی استخوان (osteoporosis)', 'خطر شکستگی بالاست؛ درمان دارویی، کلسیم و ویتامین D و پیشگیری از زمین‌خوردن.', 'bad'];
    return `<b class="tsc--${c[2]}">${c[0]}</b><small>${c[1]}</small>`;
  }
  EA.APP.extraTool = {
    id: 'rom', sym: '°', name: 'گونیومتر و تراکم استخوان', color: '#1E9E8F',
    value: romPct,
    pane: () => `<div class="tpane"><p class="muted">حرکت را انتخاب کن و زاویه اندازه‌گیری‌شده را بنویس؛ درصد دامنه طبیعی و تفسیرش را می‌بینی.</p>
    <div class="seg rom__m">${ROM.map(r => `<button class="seg__b ${st.m === r[0] ? 'is-on' : ''}" data-rom="${r[0]}">${r[1]}</button>`).join('')}</div>
    <div class="rom">
      ${arc()}
      <label class="rom__in"><span><bdi dir="ltr">${cur()[2]}</bdi></span><input type="text" inputmode="decimal" dir="ltr" data-keep="romv" data-romv value="${EA.ui.esc(st.v)}" placeholder="°" autocomplete="off"></label>
    </div>
    <div class="rom__out" aria-live="polite">${romOut()}</div>
    <h4 class="rom__h">تفسیر T-score (سنجش تراکم استخوان، <bdi dir="ltr">DXA</bdi>)</h4>
    <label class="rom__in rom__in--t"><span>T-score</span><input type="text" inputmode="decimal" dir="ltr" data-keep="tsc" data-tsc value="${EA.ui.esc(st.t)}" placeholder="-2.5" autocomplete="off"></label>
    <div class="rom__out rom__out--t" aria-live="polite">${tOut()}</div>
    ${EA.ui.figCard({ a: ['tscore', 'goniometer'], l: ['مقیاس T-score', 'اندازه‌گیری با گونیومتر'] })}
    <table class="mini"><tr><th>T-score</th><th>تفسیر</th></tr>
      <tr><td><bdi dir="ltr">≥ -1.0</bdi></td><td>طبیعی</td></tr>
      <tr><td><bdi dir="ltr">-1.0 تا -2.5</bdi></td><td>استئوپنی (کمبود توده استخوان)</td></tr>
      <tr><td><bdi dir="ltr">≤ -2.5</bdi></td><td>پوکی استخوان</td></tr></table>
    <p class="muted">مقادیر مرجع دامنه حرکت تقریبی‌اند و در منابع مختلف چند درجه فرق دارند.</p></div>`,
    /* کلیک درون ابزار؛ اگر رسیدگی شد true برگردان تا موتور دوباره بکشد */
    click: e => { const b = e.target.closest('[data-rom]'); if (!b) return false; st.m = b.dataset.rom; return true; },
    /* تایپ: فقط بخش خروجی و کمان به‌روز می‌شود تا فوکوس ورودی از دست نرود */
    input: (e, el) => {
      if (e.target.matches('[data-romv]')) { st.v = e.target.value; const o = el.querySelector('.rom__out'), g = el.querySelector('.rom__g'); if (o) o.innerHTML = romOut(); if (g) g.outerHTML = arc(); }
      else if (e.target.matches('[data-tsc]')) { st.t = e.target.value; const o = el.querySelector('.rom__out--t'); if (o) o.innerHTML = tOut(); }
      return false;
    },
    /* برای آزمون دود: انتخاب نمونه و مقدار مورد انتظار (۹۰ درجه از ۱۳۵ = ۶۷٪) */
    test: { clicks: ['[data-rom="knee"]'], fill: [['[data-romv]', '90'], ['[data-tsc]', '-2.7']], expect: 67 }
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
/* اُستئو — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از apps/osteo/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["abduction", "ab-DUK-shun", "Moving a limb away from the midline of the body (ab- = away from, duct/o = to bring).", "دور کردن (ابداکشن)", "jt", "mv", ["ROM"]],
["acetabulum", "as-eh-TAB-yoo-lum", "Deep socket in the hip bone into which the head of the femur fits (acetabul/o = acetabulum).", "حفره استابولوم (کاسه مفصل ران)", "sk", "body", []],
["Achilles tendon", "ah-KIL-eez TEN-don", "The strongest tendon of the body; it attaches the calf muscles to the calcaneus; also called calcaneal tendon.", "تاندون آشیل", "mu", "mus", []],
["achondroplasia", "ay-kon-droh-PLAY-zee-ah", "Inherited disorder of cartilage growth that causes short limbs (dwarfism) (a- = without, chondr/o = cartilage, -plasia = formation).", "آکندروپلازی (کوتولگی ارثی)", "bn", "dz", []],
["acromion", "ah-KROH-mee-on", "Outward projection of the scapula that forms the highest point of the shoulder.", "زائده آخرمی (نوک شانه)", "sk", "body", []],
["adduction", "ah-DUK-shun", "Moving a limb toward the midline of the body (ad- = toward, duct/o = to bring).", "نزدیک کردن (اداکشن)", "jt", "mv", ["ROM"]],
["allograft", "AL-oh-graft", "Graft taken from another person, such as donor bone (allo- = other).", "پیوند از فرد دیگر (آلوگرافت)", "fx", "tx", []],
["amphiarthrosis", "am-fee-ar-THROH-sis", "Slightly movable cartilaginous joint, such as the pubic symphysis or the joints between vertebrae (amphi- = on both sides).", "مفصل نیمه‌متحرک (غضروفی)", "jt", "body", []],
["amputation", "am-pyoo-TAY-shun", "Surgical or traumatic removal of a limb or part of a limb, such as above the knee or below the elbow.", "قطع عضو", "fx", "tx", ["AK", "BK", "AE", "BE"]],
["analgesic", "an-al-JEE-zik", "Medicine that relieves pain (an- = without, -algesia = sensation of pain).", "مسکن (ضددرد)", "fx", "tx", []],
["ankylosing spondylitis", "ang-kih-LOH-sing spon-dih-LYE-tis", "Chronic inflammation of the vertebrae that slowly fuses them, making the spine stiff (ankyl/o = stiff).", "التهاب مهره‌های چسبنده (اسپوندیلیت آنکیلوزان)", "sk", "dz", []],
["ankylosis", "ang-kih-LOH-sis", "Stiffening and immobility of a joint (ankyl/o = stiff, crooked).", "خشکی و جوش‌خوردگی مفصل (آنکیلوز)", "jt", "sx", []],
["antagonist", "an-TAG-oh-nist", "Muscle that acts opposite to the prime mover, such as the triceps against the biceps.", "عضله مخالف (آنتاگونیست)", "mu", "mus", []],
["anteroposterior", "an-ter-oh-pos-TEER-ee-or", "From the front to the back; an AP X-ray passes through the body from front to back (anter/o = front, poster/o = back).", "قدامی-خلفی (از جلو به عقب)", "lx", "mv", ["AP"]],
["antinuclear antibody", "an-tee-NOO-klee-ar AN-tih-bod-ee", "Antibody against cell nuclei; a positive test suggests lupus or another autoimmune disease.", "آنتی‌بادی ضدهسته", "fx", "lab", ["ANA"]],
["aponeurosis", "ap-oh-noo-ROH-sis", "Broad, flat sheet of tendon that attaches muscle to bone or to another muscle.", "نیام پهن (آپونوروز)", "mu", "mus", []],
["appendicular skeleton", "ap-en-DIK-yoo-lar SKEL-eh-ton", "The 126 bones of the limbs and the shoulder and pelvic girdles that attach them.", "اسکلت ضمیمه‌ای (اندام‌ها)", "sk", "body", []],
["arthralgia", "ar-THRAL-jee-ah", "Joint pain (arthr/o = joint, -algia = pain).", "درد مفصل", "lx", "sx", []],
["arthritis", "ar-THRY-tis", "Inflammation of a joint, usually with pain, swelling and stiffness (arthr/o = joint, -itis = inflammation).", "التهاب مفصل (آرتریت)", "lx", "dz", []],
["arthrocentesis", "ar-throh-sen-TEE-sis", "Surgical puncture of a joint with a needle to remove fluid (-centesis = surgical puncture).", "کشیدن مایع مفصل (آرتروسنتز)", "jt", "lab", []],
["arthrodesis", "ar-throh-DEE-sis", "Surgical fusion of a joint so that it no longer moves (-desis = binding, fusion).", "جوش دادن جراحی مفصل (آرتردز)", "jt", "tx", []],
["arthrogram", "AR-throh-gram", "X-ray record of a joint after injection of contrast dye (-gram = record).", "عکس رنگی مفصل (آرتروگرام)", "jt", "lab", []],
["arthrology", "ar-THROL-oh-jee", "Study of joints (arthr/o = joint, -logy = study of).", "مفصل‌شناسی", "lx", "field", []],
["arthropathy", "ar-THROP-ah-thee", "Any disease of a joint (arthr/o = joint, -pathy = disease).", "بیماری مفصل", "lx", "dz", []],
["arthroplasty", "AR-throh-plas-tee", "Surgical repair or replacement of a joint, such as total hip or total knee replacement (-plasty = surgical repair).", "تعویض یا ترمیم مفصل (آرتروپلاستی)", "jt", "tx", ["THA", "TKA", "THR", "TKR"]],
["arthroscopy", "ar-THROS-koh-pee", "Visual examination inside a joint with a thin lighted instrument (arthroscope) through small incisions (-scopy = visual examination).", "آرتروسکوپی (درون‌بینی مفصل)", "jt", "lab", []],
["arthrotomy", "ar-THROT-oh-mee", "Surgical incision into a joint (-tomy = cutting into).", "برش مفصل", "jt", "tx", []],
["articular", "ar-TIK-yoo-lar", "Pertaining to a joint (articul/o = joint, -ar = pertaining to).", "مفصلی", "lx", "body", []],
["articular cartilage", "ar-TIK-yoo-lar KAR-tih-lij", "Smooth layer of cartilage covering the ends of bones in a synovial joint.", "غضروف مفصلی", "jt", "body", []],
["atlas", "AT-las", "The first cervical vertebra (C1), which supports the skull.", "مهره اطلس (گردنی اول)", "sk", "body", ["C1–C7"]],
["atonia", "ah-TOH-nee-ah", "Lack of normal muscle tone (a- = without, -tonia = tone).", "فقدان تون عضله", "mu", "sx", []],
["atrophy", "AT-roh-fee", "Wasting away or decrease in size of a muscle (a- = without, -trophy = development).", "تحلیل رفتن (آتروفی)", "mu", "sx", []],
["autograft", "AW-toh-graft", "Graft taken from the patient's own body, such as bone from the iliac crest (auto- = self).", "پیوند از بدن خود بیمار (اتوگرافت)", "fx", "tx", []],
["avulsion fracture", "ah-VUL-shun FRAK-cher", "Fracture in which a tendon or ligament pulls off a piece of bone.", "شکستگی کندگی", "fx", "dz", []],
["axial skeleton", "AK-see-al SKEL-eh-ton", "The 80 bones of the central axis of the body: skull, vertebral column, ribs, sternum and hyoid.", "اسکلت محوری", "sk", "body", []],
["axis", "AK-sis", "The second cervical vertebra (C2); the atlas turns on it when the head rotates.", "مهره آسه (گردنی دوم)", "sk", "body", ["C1–C7"]],
["ball-and-socket joint", "bawl and SOK-et joynt", "Synovial joint in which a round head fits into a cup, allowing movement in all directions; e.g. hip and shoulder.", "مفصل گوی و کاسه", "jt", "body", []],
["biceps brachii", "BYE-seps BRAY-kee-eye", "Two-headed muscle on the front of the upper arm that flexes the elbow (bi- = two, brachi/o = arm).", "عضله دوسر بازو", "mu", "mus", []],
["bilateral", "bye-LAT-er-al", "Pertaining to two sides (bi- = two, later/o = side, -al = pertaining to).", "دوطرفه", "lx", "mv", []],
["bisphosphonate", "bis-FOS-foh-nayt", "Medicine that slows bone breakdown by osteoclasts; used for osteoporosis and osteogenesis imperfecta.", "بیس‌فسفونات (داروی پوکی استخوان)", "fx", "tx", []],
["bone graft", "bohn graft", "Transplanting bone tissue to repair a defect or help fusion; may come from the patient (autograft) or a donor (allograft).", "پیوند استخوان", "fx", "tx", []],
["bone scan", "bohn skan", "Nuclear medicine test: a radioactive tracer is injected and collects in areas of high bone activity, such as tumors, infection or fractures.", "اسکن استخوان", "fx", "lab", []],
["brachioradialis", "bray-kee-oh-ray-dee-AL-is", "Forearm muscle that flexes the elbow; named for the arm and the radius.", "عضله بازویی-زند زبرینی", "mu", "mus", []],
["bradykinesia", "brad-ee-kih-NEE-zee-ah", "Abnormally slow movement (brady- = slow, -kinesia = movement).", "کندی حرکت", "mu", "sx", []],
["bunion", "BUN-yun", "Enlargement of the joint at the base of the big toe with the toe bent toward the others (hallux valgus).", "بونیون (کج‌شدن شست پا)", "jt", "dz", []],
["bunionectomy", "bun-yun-EK-toh-mee", "Surgical removal of a bunion.", "برداشتن بونیون", "fx", "tx", []],
["bursa", "BER-sah", "Small fluid-filled sac that reduces friction between a tendon and a bone (plural: bursae) (burs/o = bursa).", "کیسه مفصلی (بورس)", "jt", "body", []],
["bursectomy", "ber-SEK-toh-mee", "Surgical removal of a bursa.", "برداشتن بورس", "jt", "tx", []],
["bursitis", "ber-SYE-tis", "Inflammation of a bursa (burs/o = bursa, -itis = inflammation).", "التهاب بورس", "jt", "dz", []],
["C-reactive protein", "see ree-AK-tiv PROH-teen", "Blood protein that rises when there is inflammation in the body.", "پروتئین واکنشی C", "fx", "lab", ["CRP"]],
["calcaneodynia", "kal-kay-nee-oh-DIN-ee-ah", "Pain in the heel (calcane/o = heel, -dynia = pain).", "درد پاشنه", "sk", "sx", []],
["calcaneus", "kal-KAY-nee-us", "The heel bone; the largest tarsal bone (calcane/o = heel).", "استخوان پاشنه", "sk", "body", []],
["calcium", "KAL-see-um", "Mineral stored in bone that makes it hard; also needed for muscle contraction and blood clotting.", "کلسیم", "bn", "cell", ["Ca"]],
["callus", "KAL-us", "Mass of new bone tissue that forms around a fracture during healing.", "پینه استخوانی (کالوس)", "fx", "cell", []],
["cancellous bone", "KAN-sel-us bohn", "Spongy bone with a lattice of thin plates (trabeculae) filled with red marrow; found in the ends of long bones.", "استخوان اسفنجی", "bn", "body", []],
["cardiac muscle", "KAR-dee-ak MUS-el", "Involuntary, striated muscle of the heart wall; the myocardium.", "عضله قلبی", "mu", "mus", []],
["carpal tunnel release", "KAR-pal TUN-el ree-LEES", "Surgery that cuts the ligament over the carpal tunnel to relieve pressure on the median nerve.", "آزادسازی تونل کارپ", "fx", "tx", ["CTS"]],
["carpal tunnel syndrome", "KAR-pal TUN-el SIN-drohm", "Compression of the median nerve in the wrist, causing numbness, tingling and weakness of the hand.", "سندروم تونل کارپ", "mu", "dz", ["CTS"]],
["carpals", "KAR-palz", "The eight small bones of the wrist (carp/o = wrist).", "استخوان‌های مچ دست", "sk", "body", []],
["carpoptosis", "kar-pop-TOH-sis", "Wrist drop; the hand hangs down because the wrist cannot be extended (carp/o = wrist, -ptosis = drooping).", "افتادگی مچ دست", "sk", "sx", []],
["cartilage", "KAR-tih-lij", "Strong, flexible connective tissue that covers bone ends in joints and forms the nose, ear and rib connections.", "غضروف", "bn", "cell", []],
["cast", "kast", "Rigid covering of plaster or fiberglass that immobilizes a fractured bone while it heals.", "گچ", "fx", "tx", []],
["cervical vertebrae", "SER-vih-kal VER-teh-bree", "The seven vertebrae of the neck, C1 to C7 (cervic/o = neck).", "مهره‌های گردنی", "sk", "body", ["C1–C7"]],
["chiropractor", "KYE-roh-prak-tor", "Health professional who treats back and joint problems by manual adjustment of the spine (chir/o = hand).", "کایروپراکتور (درمانگر دستی ستون مهره)", "lx", "field", []],
["chondral", "KON-dral", "Pertaining to cartilage (chondr/o = cartilage, -al = pertaining to).", "غضروفی", "lx", "body", []],
["chondrectomy", "kon-DREK-toh-mee", "Surgical removal of cartilage.", "برداشتن غضروف", "jt", "tx", []],
["chondrocyte", "KON-droh-site", "Cartilage cell (chondr/o = cartilage, -cyte = cell).", "سلول غضروفی", "bn", "cell", []],
["chondroma", "kon-DROH-mah", "Benign tumor of cartilage (chondr/o = cartilage, -oma = tumor).", "تومور خوش‌خیم غضروف", "bn", "dz", []],
["chondromalacia", "kon-droh-mah-LAY-shee-ah", "Softening of cartilage, especially behind the patella (chondr/o = cartilage, -malacia = softening).", "نرمی غضروف", "jt", "dz", []],
["chondropathy", "kon-DROP-ah-thee", "Any disease of cartilage (chondr/o = cartilage, -pathy = disease).", "بیماری غضروف", "lx", "dz", []],
["chondrosarcoma", "kon-droh-sar-KOH-mah", "Malignant tumor of cartilage (chondr/o = cartilage, sarc/o = flesh, -oma = tumor).", "سرطان غضروف (کندروسارکوم)", "bn", "dz", []],
["circumduction", "ser-kum-DUK-shun", "Moving a limb in a circle so that its end draws a cone (circum- = around).", "حرکت دورانی (سیرکام‌داکشن)", "jt", "mv", []],
["clavicle", "KLAV-ih-kl", "The collarbone, which joins the sternum and the scapula (clavicul/o = clavicle).", "استخوان ترقوه", "sk", "body", []],
["closed fracture", "klohzd FRAK-cher", "Fracture in which the skin is not broken; also called simple fracture.", "شکستگی بسته (ساده)", "fx", "dz", ["Fx"]],
["closed reduction", "klohzd ree-DUK-shun", "Realigning a fractured bone by manipulation without surgery.", "جااندازی بسته (بدون جراحی)", "fx", "tx", []],
["coccygodynia", "kok-sih-goh-DIN-ee-ah", "Pain in the coccyx; tailbone pain (coccyg/o = coccyx, -dynia = pain).", "درد دنبالچه", "sk", "sx", []],
["coccyx", "KOK-siks", "The tailbone; four small fused vertebrae at the end of the spine (coccyg/o = coccyx).", "دنبالچه", "sk", "body", []],
["Colles fracture", "KOL-eez FRAK-cher", "Fracture of the distal radius at the wrist, usually from a fall on an outstretched hand.", "شکستگی کالیس (انتهای رادیوس)", "fx", "dz", []],
["comminuted fracture", "KOM-ih-noo-ted FRAK-cher", "Fracture in which the bone is shattered or crushed into several pieces.", "شکستگی خردشده", "fx", "dz", []],
["compact bone", "KOM-pakt bohn", "Hard, dense outer layer of bone; also called cortical bone.", "استخوان متراکم (قشری)", "bn", "body", []],
["compression fracture", "kom-PRESH-un FRAK-cher", "Fracture in which a bone, usually a vertebra, collapses or is crushed; common in osteoporosis.", "شکستگی فشاری", "fx", "dz", []],
["computed tomography", "kom-PYOO-ted toh-MOG-rah-fee", "Imaging that uses X-rays and a computer to make cross-sectional pictures of the body (tom/o = to cut, section).", "سی‌تی‌اسکن", "fx", "lab", ["CT"]],
["condyle", "KON-dile", "Smooth, rounded knob at the end of a bone that forms a joint.", "کندیل (برجستگی گرد مفصلی)", "bn", "body", []],
["contracture", "kon-TRAK-cher", "Permanent shortening of a muscle or tendon that keeps a joint bent.", "کوتاهی دائم عضله (کنتراکچر)", "mu", "sx", []],
["corticosteroid", "kor-tih-koh-STAIR-oyd", "Hormone-like medicine with a strong anti-inflammatory effect, sometimes injected into a joint.", "کورتیکواستروئید", "fx", "tx", []],
["costal cartilage", "KOS-tal KAR-tih-lij", "Bars of cartilage that join the ribs to the sternum (cost/o = rib).", "غضروف دنده‌ای", "sk", "body", []],
["costectomy", "kos-TEK-toh-mee", "Surgical removal of a rib or part of a rib; a rib resection (cost/o = rib).", "برداشتن دنده", "sk", "tx", []],
["costochondral", "kos-toh-KON-dral", "Pertaining to a rib and its cartilage (cost/o = rib, chondr/o = cartilage).", "دنده‌ای-غضروفی", "sk", "body", []],
["cranium", "KRAY-nee-um", "The bones of the skull that enclose and protect the brain (crani/o = skull).", "جمجمه (کرانیوم)", "sk", "body", []],
["creatine kinase", "KREE-ah-teen KYE-nayz", "Enzyme released into the blood when muscle is damaged; also called creatine phosphokinase.", "آنزیم کراتین کیناز", "mu", "lab", ["CK", "CPK"]],
["deep tendon reflex", "deep TEN-don REE-fleks", "Automatic muscle contraction when its tendon is tapped with a reflex hammer, such as the knee-jerk reflex.", "رفلکس عمقی تاندون", "mu", "lab", ["DTR"]],
["deltoid", "DEL-toyd", "Triangular muscle of the shoulder that abducts the arm; a common site for IM injections.", "عضله دلتوئید (شانه‌ای)", "mu", "mus", ["IM"]],
["densitometry", "den-sih-TOM-eh-tree", "Measurement of bone density (densit/o = density, -metry = process of measuring).", "تراکم‌سنجی استخوان", "fx", "lab", ["BDT"]],
["diaphragm", "DYE-ah-fram", "Dome-shaped muscle that separates the chest from the abdomen; the main muscle of breathing.", "پرده دیافراگم", "mu", "mus", []],
["diaphysis", "dye-AF-ih-sis", "The shaft of a long bone (dia- = through, -physis = growth).", "تنه استخوان دراز (دیافیز)", "bn", "body", []],
["diarthrosis", "dye-ar-THROH-sis", "Freely movable synovial joint, such as the knee, hip or shoulder.", "مفصل متحرک (سینوویال)", "jt", "body", []],
["dislocation", "dis-loh-KAY-shun", "Displacement of a bone from its joint so that the joint surfaces no longer touch.", "دررفتگی", "jt", "dz", []],
["distal", "DIS-tal", "Farther from the point of attachment of a limb to the trunk; e.g. the fingers are distal to the wrist.", "دور (از تنه)", "lx", "mv", []],
["dorsiflexion", "dor-sih-FLEK-shun", "Bending the foot upward at the ankle, toward the shin (dors/o = back).", "خم کردن پا به بالا (دورسی‌فلکشن)", "jt", "mv", []],
["dual-energy x-ray absorptiometry", "DOO-al EN-er-jee EKS-ray ab-sorp-shee-OM-eh-tree", "Low-dose X-ray test that measures bone density to diagnose osteoporosis.", "سنجش تراکم استخوان (دگزا)", "fx", "lab", ["DXA", "BDT"]],
["dyskinesia", "dis-kih-NEE-zee-ah", "Difficult or impaired movement (dys- = difficult, -kinesia = movement).", "اختلال حرکت", "mu", "sx", []],
["dystonia", "dis-TOH-nee-ah", "Abnormal muscle tone, with involuntary twisting movements (dys- = abnormal, -tonia = tone).", "اختلال تون عضله (دیستونی)", "mu", "sx", []],
["electromyography", "ee-lek-troh-my-OG-rah-fee", "Recording of the electrical activity of muscle (electr/o = electricity, -graphy = process of recording).", "نوار عصب و عضله (الکترومیوگرافی)", "mu", "lab", ["EMG"]],
["endosteum", "en-DOSS-tee-um", "Thin membrane that lines the medullary cavity of a bone (endo- = within, oste/o = bone).", "درون‌پوش استخوان (اندوست)", "bn", "body", []],
["epicondyle", "ep-ih-KON-dile", "Projection above or upon a condyle (epi- = upon).", "اپی‌کندیل", "bn", "body", []],
["epiphyseal plate", "ep-ih-FIZ-ee-al playt", "Layer of cartilage between the epiphysis and diaphysis where a long bone grows in length; also called growth plate.", "صفحه رشد (صفحه اپی‌فیزی)", "bn", "body", []],
["epiphysis", "eh-PIF-ih-sis", "The wide end of a long bone, covered with articular cartilage (epi- = upon, -physis = growth).", "سر استخوان دراز (اپی‌فیز)", "bn", "body", []],
["erythrocyte sedimentation rate", "eh-RITH-roh-site sed-ih-men-TAY-shun rayt", "Blood test that measures how fast red blood cells settle; a raised rate shows inflammation.", "سرعت رسوب گلبول قرمز", "fx", "lab", ["ESR"]],
["ethmoid bone", "ETH-moyd bohn", "Light, spongy bone between the eye sockets that forms part of the nasal cavity.", "استخوان غربالی (اتموئید)", "sk", "body", []],
["eversion", "ee-VER-zhun", "Turning the sole of the foot outward (e- = outward, vers/o = to turn).", "چرخش کف پا به خارج", "jt", "mv", []],
["Ewing sarcoma", "YOO-ing sar-KOH-mah", "Malignant tumor of the shaft of long bones, most common in children and teenagers.", "سارکوم یوئینگ", "bn", "dz", []],
["exostosis", "eks-os-TOH-sis", "Benign bony growth on the surface of a bone; a bone spur (ex- = out, oste/o = bone, -osis = condition).", "زائده استخوانی (خار استخوان)", "bn", "dz", []],
["extension", "eks-TEN-shun", "Straightening a joint so that the angle between the bones increases (extens/o = to stretch out).", "باز کردن (اکستنشن)", "jt", "mv", ["ROM"]],
["external fixation", "eks-TER-nal fik-SAY-shun", "Stabilizing a fracture with pins through the skin into the bone, joined by a frame outside the body.", "تثبیت خارجی", "fx", "tx", []],
["external oblique", "eks-TER-nal oh-BLEEK", "Slanted abdominal muscle on the side of the trunk.", "عضله مورب خارجی شکم", "mu", "mus", []],
["false ribs", "fawls ribz", "Rib pairs 8 to 12, which attach to the sternum indirectly or not at all.", "دنده‌های کاذب", "sk", "body", []],
["fascia", "FASH-ee-ah", "Sheet of fibrous connective tissue that covers and separates muscles (fasci/o = fibrous band).", "نیام (فاسیا)", "mu", "mus", []],
["fascicle", "FAS-ih-kl", "Bundle of muscle fibers wrapped in connective tissue.", "دسته تارهای عضلانی", "mu", "mus", []],
["fasciotomy", "fash-ee-OT-oh-mee", "Surgical incision into fascia to relieve pressure on muscles and nerves (fasci/o = fascia, -tomy = cutting into).", "برش نیام (فاسیوتومی)", "fx", "tx", []],
["femur", "FEE-mer", "The thigh bone; the longest and strongest bone of the body (femor/o = femur).", "استخوان ران", "sk", "body", []],
["fibromyalgia", "fye-broh-my-AL-jee-ah", "Chronic disorder with widespread muscle pain, tender points, fatigue and poor sleep (fibr/o = fiber, my/o = muscle, -algia = pain).", "فیبرومیالژی", "mu", "dz", []],
["fibula", "FIB-yoo-lah", "The thin outer bone of the lower leg (fibul/o = fibula).", "استخوان نازک‌نی", "sk", "body", []],
["fissure", "FISH-er", "Narrow, slit-like opening in a bone.", "شکاف استخوانی", "bn", "body", []],
["flat bone", "flat bohn", "Thin, flat bone that protects organs, such as the ribs, sternum, scapula and skull bones.", "استخوان پهن", "bn", "body", []],
["flexion", "FLEK-shun", "Bending a joint so that the angle between the bones decreases (flex/o = to bend).", "خم کردن (فلکشن)", "jt", "mv", ["ROM"]],
["floating ribs", "FLOH-ting ribz", "Rib pairs 11 and 12, which have no attachment to the sternum.", "دنده‌های شناور", "sk", "body", []],
["fontanel", "fon-tah-NEL", "Soft spot of membrane between the skull bones of an infant; closes as the bones grow.", "ملاج (نرمه سر نوزاد)", "sk", "body", []],
["foramen", "for-AY-men", "Opening or hole in a bone through which nerves and blood vessels pass (plural: foramina).", "سوراخ استخوانی", "bn", "body", []],
["fossa", "FOSS-ah", "Shallow depression or cavity in a bone.", "حفره کم‌عمق (گودی)", "bn", "body", []],
["fracture", "FRAK-cher", "A break in a bone.", "شکستگی", "fx", "dz", ["Fx"]],
["frontal bone", "FRUN-tal bohn", "Bone of the forehead and roof of the eye sockets.", "استخوان پیشانی", "sk", "body", []],
["ganglion cyst", "GANG-lee-on sist", "Fluid-filled cyst on a tendon sheath or joint capsule, often on the back of the wrist.", "کیست گانگلیون", "jt", "dz", []],
["gastrocnemius", "gas-trok-NEE-mee-us", "Calf muscle that bends the foot downward (plantar flexion).", "عضله دوقلوی ساق", "mu", "mus", []],
["gliding joint", "GLY-ding joynt", "Synovial joint with flat surfaces that slide over each other; e.g. between the carpals.", "مفصل لغزشی", "jt", "body", []],
["gluteus maximus", "GLOO-tee-us MAK-sih-mus", "The largest muscle of the buttock; it extends the thigh.", "عضله سرینی بزرگ", "mu", "mus", []],
["goniometer", "goh-nee-OM-eh-ter", "Instrument that measures the angle of a joint's range of motion (goni/o = angle, -meter = instrument to measure).", "زاویه‌سنج (گونیومتر)", "jt", "lab", ["ROM"]],
["gout", "gowt", "Painful arthritis caused by uric acid crystals deposited in joints, often the big toe; also called gouty arthritis.", "نقرس", "jt", "dz", []],
["greenstick fracture", "GREEN-stik FRAK-cher", "Incomplete fracture in which the bone bends and breaks on one side only, like a green twig; common in children.", "شکستگی ترکه‌ای (چوب سبز)", "fx", "dz", []],
["hamstrings", "HAM-stringz", "Group of three muscles on the back of the thigh that flex the knee.", "عضلات همسترینگ (پشت ران)", "mu", "mus", []],
["haversian canal", "hah-VER-zhan kah-NAL", "Central channel in compact bone that carries blood vessels and nerves.", "کانال هاورس", "bn", "body", []],
["hemarthrosis", "hem-ar-THROH-sis", "Blood in a joint cavity (hem/o = blood, arthr/o = joint).", "خون در مفصل (همارتروز)", "jt", "sx", []],
["hematopoiesis", "hee-mah-toh-poy-EE-sis", "Formation of blood cells, which takes place in red bone marrow (hemat/o = blood, -poiesis = formation).", "خون‌سازی", "bn", "cell", []],
["hemiparesis", "hem-ee-pah-REE-sis", "Weakness or slight paralysis of one side of the body (-paresis = slight paralysis).", "ضعف نیمه بدن", "mu", "sx", []],
["hemiplegia", "hem-ee-PLEE-jee-ah", "Paralysis of one side of the body (hemi- = half, -plegia = paralysis).", "فلج نیمه بدن", "mu", "sx", []],
["herniated nucleus pulposus", "HER-nee-ay-ted NOO-klee-us pul-POH-sus", "Rupture of an intervertebral disk so that its soft center bulges out and presses on a spinal nerve; a slipped disk.", "فتق دیسک (دیسک بیرون‌زده)", "sk", "dz", ["HNP"]],
["hinge joint", "hinj joynt", "Synovial joint that moves in one plane like a door hinge; e.g. elbow and knee.", "مفصل لولایی", "jt", "body", []],
["humerus", "HYOO-mer-us", "Bone of the upper arm (humer/o = humerus).", "استخوان بازو", "sk", "body", []],
["hydrotherapy", "hye-droh-THAIR-ah-pee", "Treatment with water, such as exercise in a warm pool (hydr/o = water, -therapy = treatment).", "آب‌درمانی", "fx", "tx", []],
["hyoid bone", "HYE-oyd bohn", "U-shaped bone in the neck that supports the tongue; it does not join any other bone.", "استخوان لامی", "sk", "body", []],
["hypercalcemia", "hye-per-kal-SEE-mee-ah", "Excessive calcium in the blood (hyper- = excessive, calc/o = calcium, -emia = blood condition).", "کلسیم بالای خون", "bn", "sx", ["Ca"]],
["hyperextension", "hye-per-eks-TEN-shun", "Extension beyond the normal straight position (hyper- = excessive).", "باز شدن بیش از حد", "jt", "mv", []],
["hyperkinesia", "hye-per-kih-NEE-zee-ah", "Excessive movement; hyperactivity (hyper- = excessive).", "پرتحرکی", "mu", "sx", []],
["hypertrophy", "hye-PER-troh-fee", "Increase in the size of a muscle or organ (hyper- = excessive, -trophy = development).", "بزرگ شدن (هیپرتروفی)", "mu", "sx", []],
["hyperuricemia", "hye-per-yoo-rih-SEE-mee-ah", "Excessive uric acid in the blood; the cause of gout (hyper- = excessive, uric/o = uric acid, -emia = blood condition).", "اسید اوریک بالای خون", "jt", "sx", []],
["ilium", "IL-ee-um", "Upper, wing-shaped part of the hip bone (ili/o = ilium).", "استخوان تهیگاه (ایلیوم)", "sk", "body", []],
["immobilization", "ih-moh-bih-lih-ZAY-shun", "Keeping a body part from moving so that it can heal.", "بی‌حرکت‌سازی", "fx", "tx", []],
["impacted fracture", "im-PAK-ted FRAK-cher", "Fracture in which one bone fragment is driven into the other.", "شکستگی فرورفته در هم", "fx", "dz", []],
["insertion", "in-SER-shun", "Attachment of a muscle to the bone that moves when the muscle contracts.", "محل اتصال متحرک عضله (انتها)", "mu", "mus", []],
["intercostal", "in-ter-KOS-tal", "Pertaining to between the ribs (inter- = between, cost/o = rib, -al = pertaining to).", "بین‌دنده‌ای", "sk", "body", []],
["intervertebral", "in-ter-VER-teh-bral", "Pertaining to between the vertebrae (inter- = between, vertebr/o = vertebra, -al = pertaining to).", "بین‌مهره‌ای", "sk", "body", []],
["intervertebral disk", "in-ter-VER-teh-bral disk", "Pad of fibrocartilage between two vertebrae that cushions the spine.", "دیسک بین‌مهره‌ای", "sk", "body", []],
["intramuscular", "in-trah-MUS-kyoo-lar", "Within a muscle (intra- = within, muscul/o = muscle, -ar = pertaining to); e.g. an IM injection.", "داخل عضلانی", "lx", "tx", ["IM"]],
["inversion", "in-VER-zhun", "Turning the sole of the foot inward (in- = in, vers/o = to turn).", "چرخش کف پا به داخل", "jt", "mv", []],
["involuntary muscle", "in-VOL-un-tair-ee MUS-el", "Muscle not under conscious control, such as smooth and cardiac muscle.", "عضله غیرارادی", "mu", "mus", []],
["irregular bone", "ih-REG-yoo-lar bohn", "Bone with a complex shape, such as a vertebra or facial bone.", "استخوان نامنظم", "bn", "body", []],
["ischium", "ISS-kee-um", "Lower, back part of the hip bone; we sit on it (ischi/o = ischium).", "استخوان نشیمنگاهی (ایسکیوم)", "sk", "body", []],
["joint", "joynt", "Place where two or more bones meet; also called an articulation.", "مفصل", "jt", "body", []],
["joint capsule", "joynt KAP-sool", "Sac of fibrous tissue that surrounds a synovial joint.", "کپسول مفصلی", "jt", "body", []],
["juvenile rheumatoid arthritis", "JOO-veh-nile ROO-mah-toyd ar-THRY-tis", "Rheumatoid arthritis that begins in childhood.", "آرتریت روماتوئید نوجوانان", "jt", "dz", ["JRA"]],
["kinesiology", "kih-nee-see-OL-oh-jee", "Study of movement of the body and its muscles (kinesi/o = movement, -logy = study of).", "حرکت‌شناسی (کینزیولوژی)", "lx", "field", []],
["kyphosis", "kye-FOH-sis", "Exaggerated outward curve of the thoracic spine; humpback (kyph/o = hump).", "قوز پشت (کیفوز)", "sk", "dz", []],
["lamina", "LAM-ih-nah", "Flat part of the vertebral arch between the spinous and transverse processes (lamin/o = lamina).", "لامینا (تیغه مهره)", "sk", "body", []],
["laminectomy", "lam-ih-NEK-toh-mee", "Surgical removal of the lamina of a vertebra to relieve pressure on the spinal cord or nerves (-ectomy = removal).", "برداشتن لامینای مهره (لامینکتومی)", "sk", "tx", []],
["lateral", "LAT-er-al", "Toward the side, away from the midline of the body (later/o = side).", "خارجی (به سمت پهلو)", "lx", "mv", []],
["lateral epicondylitis", "LAT-er-al ep-ih-kon-dih-LYE-tis", "Inflammation of the tendons at the outer elbow from overuse; tennis elbow.", "آرنج تنیس‌بازان", "mu", "dz", []],
["latissimus dorsi", "lah-TIS-ih-mus DOR-sye", "Broad muscle of the back that extends and adducts the arm.", "عضله پشتی پهن", "mu", "mus", []],
["ligament", "LIG-ah-ment", "Strong band of fibrous tissue that connects bone to bone and stabilizes a joint (ligament/o = ligament).", "رباط", "jt", "body", []],
["long bone", "lawng bohn", "Bone longer than it is wide, with a shaft and two ends, such as the femur and humerus.", "استخوان دراز", "bn", "body", []],
["lordosis", "lor-DOH-sis", "Exaggerated inward curve of the lumbar spine; swayback (lord/o = bent backward).", "گودی بیش از حد کمر (لوردوز)", "sk", "dz", []],
["lumbar vertebrae", "LUM-bar VER-teh-bree", "The five large vertebrae of the lower back, L1 to L5 (lumb/o = loin, lower back).", "مهره‌های کمری", "sk", "body", ["L1–L5"]],
["lumbosacral", "lum-boh-SAY-kral", "Pertaining to the lumbar vertebrae and the sacrum.", "کمری-خاجی", "sk", "body", []],
["Lyme disease", "lime dih-ZEEZ", "Infection caused by bacteria spread by tick bites; causes a rash, fever and later arthritis.", "بیماری لایم", "jt", "dz", []],
["magnetic resonance imaging", "mag-NET-ik REZ-oh-nans IM-ah-jing", "Imaging with a strong magnetic field and radio waves; shows soft tissues such as disks, ligaments and menisci.", "ام‌آرآی (تصویربرداری تشدید مغناطیسی)", "fx", "lab", ["MRI"]],
["malleolus", "mah-LEE-oh-lus", "Rounded bony bump on each side of the ankle; the medial malleolus is on the tibia and the lateral on the fibula.", "قوزک پا", "sk", "body", []],
["malunion", "mal-YOON-yun", "Healing of a fracture in a poor or crooked position.", "بدجوش‌خوردن شکستگی", "fx", "dz", []],
["mandible", "MAN-dih-bl", "The lower jawbone; the only movable bone of the skull (mandibul/o = lower jaw).", "فک پایین (مندیبل)", "sk", "body", []],
["masseter", "mah-SEE-ter", "Strong muscle of the jaw that closes the mouth for chewing.", "عضله جونده (ماستر)", "mu", "mus", []],
["maxilla", "mak-SIL-ah", "The upper jawbone, which holds the upper teeth (maxill/o = upper jaw).", "فک بالا (ماگزیلا)", "sk", "body", []],
["medial", "MEE-dee-al", "Toward the midline of the body (medi/o = middle).", "داخلی (به سمت خط وسط)", "lx", "mv", []],
["medullary cavity", "MED-yoo-lair-ee KAV-ih-tee", "Hollow space inside the shaft of a long bone that contains yellow marrow (medull/o = inner part).", "حفره مغزی استخوان", "bn", "body", []],
["meniscectomy", "men-ih-SEK-toh-mee", "Surgical removal of a torn meniscus of the knee.", "برداشتن منیسک", "jt", "tx", []],
["meniscus", "meh-NIS-kus", "C-shaped pad of cartilage in the knee that cushions the joint (plural: menisci) (menisc/o = meniscus).", "منیسک", "jt", "body", []],
["metacarpals", "met-ah-KAR-palz", "The five bones of the palm of the hand (meta- = beyond, carp/o = wrist).", "استخوان‌های کف دست", "sk", "body", []],
["metaphysis", "meh-TAF-ih-sis", "Flared region of a long bone between the shaft and the end (meta- = beyond, change).", "متافیز", "bn", "body", []],
["metatarsals", "met-ah-TAR-salz", "The five bones of the foot between the ankle and the toes.", "استخوان‌های کف پا", "sk", "body", []],
["muscle biopsy", "MUS-el BYE-op-see", "Removal of a small piece of muscle for microscopic examination.", "نمونه‌برداری از عضله", "mu", "lab", []],
["muscle fiber", "MUS-el FYE-ber", "A single long muscle cell.", "تار عضلانی", "mu", "mus", []],
["muscle tone", "MUS-el tohn", "Slight, steady tension in a resting muscle (ton/o = tone, tension).", "تون عضلانی", "mu", "mus", []],
["muscular", "MUS-kyoo-lar", "Pertaining to muscle (muscul/o = muscle, -ar = pertaining to).", "عضلانی", "lx", "mus", []],
["muscular dystrophy", "MUS-kyoo-lar DIS-troh-fee", "Group of inherited diseases with progressive weakness and wasting of skeletal muscles; Duchenne type affects boys.", "دیستروفی عضلانی", "mu", "dz", ["MD"]],
["muscular system", "MUS-kyoo-lar SIS-tem", "All the muscles of the body; about 600 skeletal muscles move the bones, and smooth and cardiac muscle work inside organs.", "دستگاه عضلانی", "lx", "body", []],
["musculoskeletal system", "mus-kyoo-loh-SKEL-eh-tal SIS-tem", "The bones, joints, cartilage, ligaments, muscles and tendons that support the body and make movement possible.", "دستگاه اسکلتی-عضلانی", "lx", "body", []],
["myalgia", "my-AL-jee-ah", "Muscle pain (my/o = muscle, -algia = pain).", "درد عضله", "lx", "sx", []],
["myasthenia", "my-as-THEE-nee-ah", "Muscle weakness (my/o = muscle, -asthenia = weakness).", "ضعف عضلانی", "mu", "sx", []],
["myasthenia gravis", "my-as-THEE-nee-ah GRAV-is", "Autoimmune disease in which nerve signals do not reach the muscles well, causing severe weakness, drooping eyelids and fatigue.", "میاستنی گراویس", "mu", "dz", []],
["myelogram", "MY-eh-loh-gram", "X-ray of the spinal canal after injection of contrast dye (myel/o = spinal cord, -gram = record).", "عکس رنگی کانال نخاع (میلوگرام)", "fx", "lab", []],
["myeloma", "my-eh-LOH-mah", "Malignant tumor of bone marrow cells (myel/o = bone marrow, -oma = tumor); multiple myeloma destroys bone.", "تومور مغز استخوان (میلوما)", "bn", "dz", []],
["myocardium", "my-oh-KAR-dee-um", "The muscle layer of the heart wall (my/o = muscle, cardi/o = heart).", "ماهیچه قلب (میوکارد)", "mu", "mus", []],
["myology", "my-OL-oh-jee", "Study of muscles (my/o = muscle, -logy = study of).", "عضله‌شناسی", "lx", "field", []],
["myopathy", "my-OP-ah-thee", "Any disease of muscle (my/o = muscle, -pathy = disease).", "بیماری عضله (میوپاتی)", "lx", "dz", []],
["myoplasty", "MY-oh-plas-tee", "Surgical repair of a muscle (my/o = muscle, -plasty = surgical repair).", "ترمیم جراحی عضله", "fx", "tx", []],
["myorrhaphy", "my-OR-ah-fee", "Suture of a muscle (my/o = muscle, -rrhaphy = suture).", "بخیه عضله", "fx", "tx", []],
["myorrhexis", "my-oh-REK-sis", "Rupture of a muscle (my/o = muscle, -rrhexis = rupture).", "پارگی عضله", "mu", "dz", []],
["myositis", "my-oh-SYE-tis", "Inflammation of muscle tissue (myos/o = muscle, -itis = inflammation).", "التهاب عضله (میوزیت)", "lx", "dz", []],
["myotonia", "my-oh-TOH-nee-ah", "Inability of a muscle to relax after contraction (my/o = muscle, -tonia = tone).", "سفتی و دیرشل‌شدن عضله (میوتونی)", "mu", "sx", []],
["necrotizing fasciitis", "NEK-roh-tye-zing fas-ee-EYE-tis", "Rapidly spreading bacterial infection that destroys fascia and muscle; flesh-eating disease.", "فاسیئیت نکروزان", "mu", "dz", ["NF"]],
["nonsteroidal anti-inflammatory drug", "non-STAIR-oyd-al an-tee-in-FLAM-ah-tor-ee drug", "Medicine such as ibuprofen or naproxen that reduces pain, inflammation and swelling without steroids.", "داروی ضدالتهاب غیراستروئیدی", "fx", "tx", ["NSAID"]],
["nonunion", "non-YOON-yun", "Failure of the fragments of a fractured bone to heal together.", "جوش‌نخوردن شکستگی", "fx", "dz", []],
["nucleus pulposus", "NOO-klee-us pul-POH-sus", "Soft, gel-like center of an intervertebral disk.", "هسته ژلاتینی دیسک", "sk", "body", ["HNP"]],
["oblique fracture", "oh-BLEEK FRAK-cher", "Fracture at an angle to the long axis of the bone.", "شکستگی مورب", "fx", "dz", []],
["occipital bone", "ok-SIP-ih-tal bohn", "Bone at the back and base of the skull; it contains the foramen magnum.", "استخوان پس‌سری", "sk", "body", []],
["occupational therapy", "ok-yoo-PAY-shun-al THAIR-ah-pee", "Treatment that helps people regain skills for daily living and work.", "کاردرمانی", "fx", "tx", ["OT", "ADLs"]],
["olecranon", "oh-LEK-rah-non", "Large process at the upper end of the ulna that forms the point of the elbow.", "زائده آرنج (اولکرانون)", "sk", "body", []],
["open fracture", "OH-pen FRAK-cher", "Fracture in which the broken bone pierces the skin; also called compound fracture; high risk of infection.", "شکستگی باز (مرکب)", "fx", "dz", ["Fx"]],
["open reduction internal fixation", "OH-pen ree-DUK-shun in-TER-nal fik-SAY-shun", "Surgery that exposes and realigns a fracture and holds it with plates, screws, rods or pins.", "جااندازی باز و تثبیت داخلی", "fx", "tx", ["ORIF"]],
["orbicularis oculi", "or-bik-yoo-LAIR-is OK-yoo-lye", "Circular muscle around the eye that closes the eyelid.", "عضله حلقوی چشم", "mu", "mus", []],
["origin", "OR-ih-jin", "Attachment of a muscle to the bone that stays still when the muscle contracts.", "مبدأ عضله", "mu", "mus", []],
["orthopedics", "or-thoh-PEE-diks", "Branch of medicine that prevents and treats disorders of bones, joints and muscles (orth/o = straight, ped/o = child).", "ارتوپدی", "lx", "field", ["Ortho"]],
["orthopedist", "or-thoh-PEE-dist", "Physician who specializes in disorders of the musculoskeletal system; an orthopedic surgeon.", "متخصص ارتوپدی", "lx", "field", ["Ortho"]],
["orthosis", "or-THOH-sis", "Brace or splint used to support, align or correct a body part (orth/o = straight).", "ارتز (بریس)", "fx", "tx", []],
["osseous", "OS-ee-us", "Pertaining to bone; bony (osse/o = bone, -ous = pertaining to).", "استخوانی", "lx", "body", []],
["ossification", "os-ih-fih-KAY-shun", "The process of bone formation, in which cartilage is gradually replaced by bone.", "استخوانی‌شدن (استخوان‌سازی)", "bn", "cell", []],
["ostealgia", "os-tee-AL-jee-ah", "Bone pain; also called osteodynia (oste/o = bone, -algia = pain).", "درد استخوان", "lx", "sx", []],
["ostectomy", "os-TEK-toh-mee", "Surgical removal of a bone or part of a bone (-ectomy = removal).", "برداشتن استخوان", "fx", "tx", []],
["osteitis", "os-tee-EYE-tis", "Inflammation of bone (oste/o = bone, -itis = inflammation).", "التهاب استخوان", "lx", "dz", []],
["osteitis deformans", "os-tee-EYE-tis dee-FOR-manz", "Paget disease: bone is broken down and rebuilt too fast, so bones become thick, weak and deformed.", "بیماری پاژه (استئیت دفورمان)", "bn", "dz", []],
["osteoarthritis", "os-tee-oh-ar-THRY-tis", "Degenerative joint disease: wearing away of articular cartilage with pain, stiffness and bone spurs, mostly in weight-bearing joints.", "آرتروز (استئوآرتریت)", "jt", "dz", ["OA", "DJD"]],
["osteoblast", "OS-tee-oh-blast", "Immature bone cell that builds new bone (oste/o = bone, -blast = immature, embryonic).", "سلول استخوان‌ساز (استئوبلاست)", "bn", "cell", []],
["osteoclasia", "os-tee-oh-KLAY-zee-ah", "Surgical breaking of a bone to correct a deformity (-clasia = surgical breaking).", "شکستن جراحی استخوان", "fx", "tx", []],
["osteoclast", "OS-tee-oh-klast", "Large bone cell that breaks down and reabsorbs old bone (-clast = to break).", "سلول استخوان‌خوار (استئوکلاست)", "bn", "cell", []],
["osteocyte", "OS-tee-oh-site", "Mature bone cell that maintains bone tissue (oste/o = bone, -cyte = cell).", "سلول استخوانی بالغ (استئوسیت)", "bn", "cell", []],
["osteogenesis", "os-tee-oh-JEN-eh-sis", "Formation of bone (oste/o = bone, -genesis = producing, forming).", "استخوان‌زایی", "bn", "cell", []],
["osteogenesis imperfecta", "os-tee-oh-JEN-eh-sis im-per-FEK-tah", "Inherited disorder of collagen that makes bones thin and brittle, with many fractures (brittle bone disease).", "استخوان‌سازی ناقص (بیماری استخوان شکننده)", "bn", "dz", ["OI"]],
["osteology", "os-tee-OL-oh-jee", "Study of bones (oste/o = bone, -logy = study of).", "استخوان‌شناسی", "lx", "field", []],
["osteoma", "os-tee-OH-mah", "Benign tumor of bone (oste/o = bone, -oma = tumor).", "تومور خوش‌خیم استخوان (استئوما)", "bn", "dz", []],
["osteomalacia", "os-tee-oh-mah-LAY-shee-ah", "Softening of bones in adults from lack of calcium or vitamin D (-malacia = softening).", "نرمی استخوان", "bn", "dz", []],
["osteomyelitis", "os-tee-oh-my-eh-LYE-tis", "Inflammation of bone and bone marrow, usually from bacterial infection (myel/o = bone marrow).", "التهاب استخوان و مغز استخوان (استئومیلیت)", "bn", "dz", []],
["osteonecrosis", "os-tee-oh-neh-KROH-sis", "Death of bone tissue from loss of blood supply; also called avascular necrosis (necr/o = death).", "مرگ بافت استخوان (استئونکروز)", "bn", "dz", []],
["osteopathy", "os-tee-OP-ah-thee", "Any disease of bone (oste/o = bone, -pathy = disease).", "بیماری استخوان", "lx", "dz", []],
["osteopenia", "os-tee-oh-PEE-nee-ah", "Lower than normal bone mass, less severe than osteoporosis (-penia = deficiency).", "کمبود توده استخوان (استئوپنی)", "bn", "dz", []],
["osteoplasty", "OS-tee-oh-plas-tee", "Surgical repair of bone (-plasty = surgical repair).", "ترمیم جراحی استخوان", "fx", "tx", []],
["osteoporosis", "os-tee-oh-poh-ROH-sis", "Loss of bone mass that makes bones porous and fragile, common in older women; leads to fractures (-porosis = porous).", "پوکی استخوان", "bn", "dz", ["DXA"]],
["osteosarcoma", "os-tee-oh-sar-KOH-mah", "Malignant bone tumor, most common in teenagers, often near the knee (sarc/o = flesh, connective tissue).", "سرطان استخوان (استئوسارکوم)", "bn", "dz", []],
["osteotomy", "os-tee-OT-oh-mee", "Surgical cutting into a bone to correct its alignment (oste/o = bone, -tomy = cutting into).", "برش جراحی استخوان (استئوتومی)", "fx", "tx", []],
["paraplegia", "pair-ah-PLEE-jee-ah", "Paralysis of both legs and the lower body.", "فلج دو پا (پاراپلژی)", "mu", "sx", []],
["parietal bone", "pah-RYE-eh-tal bohn", "One of the two bones that form the top and upper sides of the cranium.", "استخوان آهیانه", "sk", "body", []],
["patella", "pah-TEL-ah", "The kneecap; a sesamoid bone in the tendon of the quadriceps (patell/o = patella).", "کشکک زانو", "sk", "body", []],
["pathologic fracture", "path-oh-LOJ-ik FRAK-cher", "Fracture of a bone weakened by disease, such as osteoporosis or a tumor, often with little force.", "شکستگی پاتولوژیک", "fx", "dz", []],
["pectoral girdle", "PEK-toh-ral GER-dl", "The shoulder girdle: the clavicles and scapulae, which attach the arms to the trunk.", "کمربند شانه‌ای", "sk", "body", []],
["pectoralis major", "pek-toh-RAL-is MAY-jor", "Large fan-shaped chest muscle that flexes and adducts the arm (pector/o = chest).", "عضله سینه‌ای بزرگ", "mu", "mus", []],
["pelvic girdle", "PEL-vik GER-dl", "The two hip bones, which join the sacrum to form the pelvis; each hip bone is made of the fused ilium, ischium and pubis.", "کمربند لگنی", "sk", "body", []],
["periosteum", "pair-ee-OSS-tee-um", "Tough fibrous membrane that covers the outside of bone, except at the joint surfaces (peri- = around, oste/o = bone).", "ضریع (پریوست)", "bn", "body", []],
["phalanges", "fah-LAN-jeez", "Bones of the fingers and toes (singular: phalanx) (phalang/o = phalanges).", "بندهای انگشتان", "sk", "body", []],
["phosphorus", "FOS-for-us", "Mineral stored in bone together with calcium.", "فسفر", "bn", "cell", ["P"]],
["physiatrist", "fiz-ee-AT-rist", "Physician who specializes in physical medicine and rehabilitation of people with musculoskeletal injuries.", "متخصص طب فیزیکی و توان‌بخشی", "lx", "field", []],
["physical therapy", "FIZ-ih-kal THAIR-ah-pee", "Treatment with exercise, heat, cold, water and ultrasound to restore strength and movement.", "فیزیوتراپی", "fx", "tx", ["PT", "US"]],
["pivot joint", "PIV-ot joynt", "Synovial joint that allows rotation around one axis; e.g. between the atlas and axis.", "مفصل محوری (چرخشی)", "jt", "body", []],
["plantar flexion", "PLAN-tar FLEK-shun", "Bending the foot downward at the ankle, as when standing on the toes (plant/o = sole of the foot).", "خم کردن پا به پایین (پلانتارفلکشن)", "jt", "mv", []],
["podiatrist", "poh-DYE-ah-trist", "Specialist in the diagnosis and treatment of disorders of the foot (pod/o = foot, -iatrist = specialist).", "متخصص پا", "lx", "field", []],
["polymyositis", "pol-ee-my-oh-SYE-tis", "Chronic inflammation of many muscles at the same time (poly- = many).", "التهاب چندعضلانی (پلی‌میوزیت)", "mu", "dz", ["CK"]],
["Pott fracture", "pot FRAK-cher", "Fracture of the distal fibula at the ankle, often with injury to the tibia.", "شکستگی پات (مچ پا)", "fx", "dz", []],
["prime mover", "prime MOO-ver", "The muscle mainly responsible for a movement; also called agonist.", "عضله محرک اصلی (آگونیست)", "mu", "mus", []],
["process", "PROS-es", "Any projection or outgrowth of bone where muscles and tendons attach.", "زائده استخوانی", "bn", "body", []],
["pronation", "proh-NAY-shun", "Turning the palm downward or backward.", "رو به پایین چرخاندن کف دست (پرونیشن)", "jt", "mv", []],
["prosthesis", "pros-THEE-sis", "Artificial device that replaces a missing body part, such as an artificial leg or a joint replacement (prosthet/o = addition).", "پروتز (اندام یا مفصل مصنوعی)", "fx", "tx", []],
["proximal", "PROK-sih-mal", "Nearer to the point of attachment of a limb to the trunk; e.g. the elbow is proximal to the wrist.", "نزدیک (به تنه)", "lx", "mv", []],
["pubic symphysis", "PYOO-bik SIM-fih-sis", "Cartilaginous joint where the two pubic bones meet at the front (sym- = together, -physis = growth).", "سمفیز شرمگاهی", "sk", "body", []],
["pubis", "PYOO-bis", "Front part of the hip bone (pub/o = pubis).", "استخوان شرمگاهی (پوبیس)", "sk", "body", []],
["quadriceps femoris", "KWAD-rih-seps FEM-or-is", "Group of four muscles on the front of the thigh that extend the knee (quadri- = four).", "عضله چهارسر ران", "mu", "mus", []],
["quadriplegia", "kwad-rih-PLEE-jee-ah", "Paralysis of all four limbs (quadri- = four, -plegia = paralysis).", "فلج چهار اندام", "mu", "sx", []],
["radiography", "ray-dee-OG-rah-fee", "Making images of bones and other structures with X-rays (radi/o = ray, -graphy = process of recording).", "رادیوگرافی (عکس‌برداری با پرتو ایکس)", "fx", "lab", ["AP"]],
["radius", "RAY-dee-us", "Forearm bone on the thumb side (radi/o = radius).", "استخوان زند زبرین (رادیوس)", "sk", "body", []],
["range of motion", "raynj ov MOH-shun", "The full movement possible at a joint, measured in degrees.", "دامنه حرکت مفصل", "jt", "mv", ["ROM", "PROM"]],
["rectus abdominis", "REK-tus ab-DOM-ih-nis", "Straight, vertical muscle of the front of the abdomen (rect/o = straight).", "عضله راست شکمی", "mu", "mus", []],
["red bone marrow", "red bohn MAIR-oh", "Soft tissue in spongy bone that produces red blood cells, white blood cells and platelets.", "مغز قرمز استخوان", "bn", "body", []],
["reduction", "ree-DUK-shun", "Returning a fractured or dislocated bone to its normal position.", "جااندازی", "fx", "tx", []],
["rehabilitation", "ree-hah-bil-ih-TAY-shun", "Process of restoring function and independence after injury or surgery (habilitat/o = ability).", "توان‌بخشی", "fx", "tx", ["PT", "OT"]],
["rhabdomyolysis", "rab-doh-my-OL-ih-sis", "Breakdown of skeletal muscle that releases muscle proteins into the blood and may damage the kidneys (rhabd/o = rod-shaped, striated; -lysis = breakdown).", "تخریب عضله (رابدومیولیز)", "mu", "dz", ["CK"]],
["rheumatoid arthritis", "ROO-mah-toyd ar-THRY-tis", "Chronic autoimmune disease in which the synovial membrane is inflamed, causing swollen, painful and deformed joints, often in the hands.", "آرتریت روماتوئید", "jt", "dz", ["RA", "RF"]],
["rheumatoid factor", "ROO-mah-toyd FAK-tor", "Antibody found in the blood of most people with rheumatoid arthritis.", "فاکتور روماتوئید", "fx", "lab", ["RF"]],
["rheumatologist", "roo-mah-TOL-oh-jist", "Physician who specializes in arthritis and other diseases of joints and connective tissue.", "متخصص روماتولوژی (روماتولوژیست)", "lx", "field", []],
["rheumatology", "roo-mah-TOL-oh-jee", "Branch of medicine that treats inflammatory and autoimmune diseases of joints, muscles and connective tissue (rheumat/o = watery flow).", "روماتولوژی", "lx", "field", []],
["rickets", "RIK-ets", "Softening and bending of bones in children from lack of vitamin D or calcium; the childhood form of osteomalacia.", "راشیتیسم (نرمی استخوان کودکان)", "bn", "dz", []],
["rotation", "roh-TAY-shun", "Turning a bone around its own axis (rotat/o = to revolve).", "چرخش", "jt", "mv", []],
["rotator cuff", "ROH-tay-tor kuff", "Group of four shoulder muscles and their tendons (supraspinatus, infraspinatus, teres minor, subscapularis) that stabilize and rotate the shoulder.", "روتاتور کاف (عضلات چرخاننده شانه)", "mu", "mus", []],
["rotator cuff tear", "ROH-tay-tor kuff tair", "Tear of one or more rotator cuff tendons, causing shoulder pain and weakness on raising the arm.", "پارگی روتاتور کاف", "mu", "dz", []],
["sacroiliac", "say-kroh-IL-ee-ak", "Pertaining to the sacrum and the ilium; the sacroiliac joint joins the spine to the pelvis.", "خاجی-تهیگاهی", "sk", "body", []],
["sacrum", "SAY-krum", "Triangular bone below the lumbar vertebrae, made of five fused vertebrae (sacr/o = sacrum).", "استخوان خاجی (ساکروم)", "sk", "body", []],
["saddle joint", "SAD-l joynt", "Synovial joint shaped like a saddle; e.g. at the base of the thumb.", "مفصل زینی", "jt", "body", []],
["sartorius", "sar-TOR-ee-us", "Long, narrow thigh muscle; the longest muscle of the body.", "عضله خیاطه", "mu", "mus", []],
["scapula", "SKAP-yoo-lah", "The shoulder blade (scapul/o = scapula).", "استخوان کتف", "sk", "body", []],
["scapulectomy", "skap-yoo-LEK-toh-mee", "Surgical removal of all or part of the scapula.", "برداشتن استخوان کتف", "sk", "tx", []],
["scoliosis", "skoh-lee-OH-sis", "Abnormal sideways (lateral) curvature of the spine (scoli/o = crooked, bent).", "انحراف جانبی ستون مهره (اسکولیوز)", "sk", "dz", ["PSF"]],
["sesamoid bone", "SES-ah-moyd bohn", "Small, round bone that develops inside a tendon, such as the patella.", "استخوان کنجدی", "bn", "body", []],
["shin splints", "shin splints", "Pain along the front of the tibia from overuse of the lower leg muscles, often in runners.", "درد ساق (شین اسپلینت)", "mu", "dz", []],
["short bone", "short bohn", "Cube-shaped bone about as wide as it is long, such as the carpals and tarsals.", "استخوان کوتاه", "bn", "body", []],
["sinus", "SYE-nus", "Air-filled cavity within a bone, such as the paranasal sinuses of the skull.", "سینوس (حفره هوایی)", "bn", "body", []],
["skeletal muscle", "SKEL-eh-tal MUS-el", "Striated, voluntary muscle attached to bones by tendons; it moves the skeleton.", "عضله اسکلتی", "mu", "mus", []],
["skeletal muscle relaxant", "SKEL-eh-tal MUS-el ree-LAK-sant", "Medicine that relieves muscle spasm and tension.", "شل‌کننده عضله اسکلتی", "fx", "tx", []],
["skeletal system", "SKEL-eh-tal SIS-tem", "The 206 bones of the adult body together with cartilage, joints and ligaments.", "دستگاه اسکلتی", "lx", "body", []],
["smooth muscle", "smooth MUS-el", "Involuntary, non-striated muscle in the walls of organs and blood vessels; also called visceral muscle.", "عضله صاف", "mu", "mus", []],
["spasm", "SPAZ-um", "Sudden, involuntary contraction of a muscle; a cramp.", "اسپاسم (گرفتگی ناگهانی)", "mu", "sx", []],
["sphenoid bone", "SFEE-noyd bohn", "Bat-shaped bone at the base of the skull that joins all the other cranial bones.", "استخوان پروانه‌ای (اسفنوئید)", "sk", "body", []],
["spina bifida", "SPY-nah BIF-ih-dah", "Birth defect in which the vertebral arch does not close around the spinal cord.", "شکاف مهره (اسپینا بیفیدا)", "sk", "dz", []],
["spinal fusion", "SPY-nal FYOO-zhun", "Surgery that joins two or more vertebrae with bone graft and metal rods to stop motion between them.", "فیوژن ستون مهره", "fx", "tx", ["PSF"]],
["spinal stenosis", "SPY-nal steh-NOH-sis", "Narrowing of the spinal canal that presses on the spinal cord or nerves.", "تنگی کانال نخاعی", "sk", "dz", []],
["spinous process", "SPY-nus PROS-es", "Bony projection at the back of each vertebra that can be felt along the spine.", "زائده خاری مهره", "sk", "body", []],
["spiral fracture", "SPY-ral FRAK-cher", "Fracture that twists around the bone, caused by a twisting force.", "شکستگی مارپیچی", "fx", "dz", []],
["splint", "splint", "Rigid device that immobilizes an injured limb.", "آتل", "fx", "tx", []],
["spondylitis", "spon-dih-LYE-tis", "Inflammation of the vertebrae (spondyl/o = vertebra, -itis = inflammation).", "التهاب مهره", "sk", "dz", []],
["spondylolisthesis", "spon-dih-loh-lis-THEE-sis", "Forward slipping of one vertebra over the one below it (spondyl/o = vertebra, -listhesis = slipping).", "لغزش مهره (اسپوندیلولیستزیس)", "sk", "dz", []],
["spondylosis", "spon-dih-LOH-sis", "Degeneration and stiffening of the vertebrae and disks (spondyl/o = vertebra, -osis = abnormal condition).", "ساییدگی ستون مهره (اسپوندیلوز)", "sk", "dz", []],
["sprain", "sprayn", "Injury to a ligament from twisting or overstretching a joint, often the ankle.", "پیچ‌خوردگی (آسیب رباط)", "jt", "dz", []],
["sternocleidomastoid", "ster-noh-klye-doh-MAS-toyd", "Neck muscle named for its attachments to the sternum, clavicle and mastoid process; it turns and bends the head.", "عضله جناغی-ترقوه‌ای-پستانی", "mu", "mus", []],
["sternum", "STER-num", "The breastbone; flat bone in the middle of the chest made of the manubrium, body and xiphoid process (stern/o = sternum).", "جناغ سینه", "sk", "body", []],
["strain", "strayn", "Injury to a muscle or tendon from overstretching or overuse.", "کشیدگی عضله", "mu", "dz", []],
["stress fracture", "stres FRAK-cher", "Small crack in a bone from repeated stress rather than a single injury, common in runners.", "شکستگی استرسی (خستگی)", "fx", "dz", []],
["striated", "STRY-ay-ted", "Having stripes; skeletal and cardiac muscle fibers look striped under the microscope.", "مخطط (راه‌راه)", "mu", "mus", []],
["subluxation", "sub-luk-SAY-shun", "Partial or incomplete dislocation of a joint (sub- = under, less than).", "دررفتگی ناقص", "jt", "dz", []],
["subscapular", "sub-SKAP-yoo-lar", "Pertaining to below or beneath the scapula (sub- = under).", "زیرکتفی", "sk", "body", []],
["supination", "soo-pih-NAY-shun", "Turning the palm upward or forward.", "رو به بالا چرخاندن کف دست (سوپینیشن)", "jt", "mv", []],
["suprapatellar", "soo-prah-pah-TEL-ar", "Pertaining to above the patella (supra- = above).", "بالای کشکک", "sk", "body", []],
["suture", "SOO-cher", "Immovable fibrous joint between the bones of the skull.", "درز جمجمه", "sk", "body", []],
["synarthrosis", "sin-ar-THROH-sis", "Immovable fibrous joint, such as a skull suture (syn- = together, arthr/o = joint).", "مفصل ثابت (فیبری)", "jt", "body", []],
["synergist", "SIN-er-jist", "Muscle that helps the prime mover perform a movement (syn- = together).", "عضله کمکی (سینرژیست)", "mu", "mus", []],
["synovectomy", "sin-oh-VEK-toh-mee", "Surgical removal of the synovial membrane of a joint.", "برداشتن پرده سینوویال", "jt", "tx", []],
["synovial fluid", "sih-NOH-vee-al FLOO-id", "Slippery fluid in a synovial joint that lubricates and nourishes the joint.", "مایع مفصلی (سینوویال)", "jt", "body", []],
["synovial joint", "sih-NOH-vee-al joynt", "Freely movable joint enclosed in a capsule lined with synovial membrane and filled with synovial fluid.", "مفصل سینوویال", "jt", "body", []],
["synovial membrane", "sih-NOH-vee-al MEM-brayn", "Membrane lining the joint capsule that secretes synovial fluid (synovi/o = synovial membrane).", "پرده سینوویال", "jt", "body", []],
["synovitis", "sin-oh-VYE-tis", "Inflammation of the synovial membrane (synov/o = synovial membrane).", "التهاب پرده سینوویال", "jt", "dz", []],
["systemic lupus erythematosus", "sis-TEM-ik LOO-pus air-ih-them-ah-TOH-sus", "Chronic autoimmune disease that affects joints, skin, kidneys and other organs; a butterfly rash may appear on the face.", "لوپوس اریتماتوی سیستمیک", "jt", "dz", ["SLE", "ANA"]],
["tarsals", "TAR-salz", "The seven bones of the ankle and heel (tars/o = ankle).", "استخوان‌های مچ پا", "sk", "body", []],
["temporal bone", "TEM-por-al bohn", "One of the two bones at the lower sides of the cranium that contain the ear canal and the mastoid process.", "استخوان گیجگاهی", "sk", "body", []],
["temporomandibular joint", "tem-por-oh-man-DIB-yoo-lar joynt", "Joint between the temporal bone and the mandible that lets the jaw open and close.", "مفصل گیجگاهی-فکی", "sk", "body", ["TMJ"]],
["tendinitis", "ten-dih-NYE-tis", "Inflammation of a tendon (tendin/o = tendon, -itis = inflammation).", "التهاب تاندون (تاندونیت)", "mu", "dz", []],
["tendon", "TEN-don", "Strong cord of fibrous tissue that attaches a muscle to a bone (ten/o, tend/o, tendin/o = tendon).", "تاندون (زردپی)", "mu", "mus", []],
["tenoplasty", "TEN-oh-plas-tee", "Surgical repair of a tendon (ten/o = tendon, -plasty = surgical repair).", "ترمیم جراحی تاندون", "fx", "tx", []],
["tenorrhaphy", "ten-OR-ah-fee", "Suture of a tendon (ten/o = tendon, -rrhaphy = suture).", "بخیه تاندون", "fx", "tx", []],
["tenotomy", "teh-NOT-oh-mee", "Surgical cutting into a tendon (ten/o = tendon, -tomy = cutting into).", "برش تاندون (تنوتومی)", "fx", "tx", []],
["thoracic cage", "thoh-RAS-ik kayj", "The rib cage: 12 pairs of ribs, the sternum and the thoracic vertebrae, which protect the heart and lungs.", "قفسه سینه", "sk", "body", []],
["thoracic vertebrae", "thoh-RAS-ik VER-teh-bree", "The twelve vertebrae of the chest region, T1 to T12, which join the ribs (thorac/o = chest).", "مهره‌های سینه‌ای", "sk", "body", ["T1–T12"]],
["tibia", "TIB-ee-ah", "The shinbone; the larger bone of the lower leg (tibi/o = tibia).", "استخوان درشت‌نی", "sk", "body", []],
["tibialis anterior", "tib-ee-AL-is an-TEER-ee-or", "Muscle on the front of the lower leg that dorsiflexes the foot.", "عضله درشت‌نی قدامی", "mu", "mus", []],
["tophi", "TOH-fye", "Hard deposits of uric acid crystals under the skin around joints in chronic gout (singular: tophus).", "رسوب‌های نقرسی (توفوس)", "jt", "sx", []],
["trabeculae", "trah-BEK-yoo-lee", "Thin bony plates and bars that form the network of spongy bone.", "تیغه‌های استخوان اسفنجی (ترابکول)", "bn", "body", []],
["traction", "TRAK-shun", "Steady pulling force with weights to align and immobilize a fracture or relieve muscle spasm.", "کشش (تراکشن)", "fx", "tx", []],
["transverse fracture", "trans-VERS FRAK-cher", "Complete fracture straight across the bone.", "شکستگی عرضی", "fx", "dz", []],
["transverse process", "trans-VERS PROS-es", "Bony projection on each side of a vertebra.", "زائده عرضی مهره", "sk", "body", []],
["trapezius", "trah-PEE-zee-us", "Large, trapezoid-shaped muscle of the upper back and neck that moves the shoulder and head.", "عضله ذوزنقه‌ای", "mu", "mus", []],
["triceps brachii", "TRY-seps BRAY-kee-eye", "Three-headed muscle on the back of the upper arm that extends the elbow (tri- = three).", "عضله سه‌سر بازو", "mu", "mus", []],
["trochanter", "troh-KAN-ter", "Large, blunt process on the femur below its neck for muscle attachment.", "تروکانتر (برجستگی بزرگ ران)", "bn", "body", []],
["true ribs", "troo ribz", "The first seven pairs of ribs, which attach directly to the sternum by costal cartilage.", "دنده‌های حقیقی", "sk", "body", []],
["tubercle", "TOO-ber-kl", "Small, rounded process on a bone for muscle attachment.", "توبرکل (برجستگی کوچک)", "bn", "body", []],
["tuberosity", "too-ber-OS-ih-tee", "Large, rounded, often rough process on a bone for muscle attachment.", "توبروزیته (برجستگی زبر بزرگ)", "bn", "body", []],
["ulna", "UL-nah", "Forearm bone on the little-finger side (uln/o = ulna).", "استخوان زند زیرین (اولنا)", "sk", "body", []],
["unilateral", "yoo-nih-LAT-er-al", "Pertaining to one side (uni- = one, later/o = side, -al = pertaining to).", "یک‌طرفه", "lx", "mv", []],
["uric acid", "YOO-rik AS-id", "Waste product of the body; a high blood level suggests gout.", "اسید اوریک", "fx", "lab", []],
["vertebra", "VER-teh-brah", "One of the bones of the spinal column (plural: vertebrae) (vertebr/o, spondyl/o = vertebra).", "مهره", "sk", "body", []],
["vertebral column", "VER-teh-bral KOL-um", "The spine: 26 vertebrae separated by intervertebral disks; it protects the spinal cord.", "ستون مهره‌ها", "sk", "body", []],
["vertebroplasty", "VER-teh-broh-plas-tee", "Injection of bone cement into a collapsed vertebra to stabilize it (vertebr/o = vertebra, -plasty = surgical repair).", "ترمیم مهره با سیمان (ورتبروپلاستی)", "sk", "tx", []],
["voluntary muscle", "VOL-un-tair-ee MUS-el", "Muscle under conscious control; skeletal muscle.", "عضله ارادی", "mu", "mus", []],
["xiphoid process", "ZIF-oyd PROS-es", "Small, pointed lower tip of the sternum.", "زائده خنجری جناغ", "sk", "body", []],
["yellow bone marrow", "YEL-oh bohn MAIR-oh", "Fatty marrow that fills the medullary cavity of long bones in adults.", "مغز زرد استخوان", "bn", "body", []],
["zygomatic bone", "zye-goh-MAT-ik bohn", "The cheekbone.", "استخوان گونه", "sk", "body", []]];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* اُستئو — داده واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها و دسته‌های واژه (موتور: engine/js/lexicon.js)
 * ریشه‌ها و اختصارها از total.txt و یازده فصل PDF پیوست (Fremgen، Davis، Cengage، Gylys، Dummies و…) گردآوری و دستی پالایش شده‌اند.
 * دنیاها: lx زبان استخوان و عضله (همه واژه‌ها) • bn استخوان • sk اسکلت • jt مفاصل و حرکت • mu عضلات • fx شکستگی، تشخیص و درمان */
(function (root) {
  const EA = root.EA = root.EA || {};
  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const roots = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', 'بدون، فاقد', '*'],
    ['ab-', ['ab'], 'away from', 'دور از', 'jt'],
    ['ad-', ['ad'], 'toward', 'به سمت', 'jt'],
    ['allo-', ['allo'], 'other, different', 'دیگری', 'fx'],
    ['amphi-', ['amphi'], 'on both sides', 'دو طرف', 'jt'],
    ['auto-', ['auto'], 'self', 'خود', 'fx'],
    ['bi-', ['bi'], 'two', 'دو', 'lx'],
    ['brady-', ['brady'], 'slow', 'کند', 'mu'],
    ['circum-', ['circum'], 'around', 'دور، پیرامون', 'jt'],
    ['dia-', ['dia', 'di'], 'through, complete', 'از میان', 'bn'],
    ['dis-', ['dis'], 'apart, away', 'جدا، دور', 'jt'],
    ['dys-', ['dys'], 'bad, abnormal, difficult', 'بد، غیرطبیعی، دشوار', 'mu'],
    ['e-, ex-', ['ex', 'e'], 'out, outward', 'بیرون', 'bn'],
    ['endo-', ['endo', 'end'], 'within', 'درون', 'bn'],
    ['epi-', ['epi'], 'upon, above', 'روی، بالای', 'bn'],
    ['hemi-', ['hemi'], 'half', 'نیم', 'mu'],
    ['hyper-', ['hyper'], 'excessive, above normal', 'بیش از حد', '*'],
    ['hypo-', ['hypo'], 'under, below, deficient', 'زیر، کمتر از حد', '*'],
    ['in-', ['in'], 'in, into', 'به درون', 'jt'],
    ['inter-', ['inter'], 'between', 'بین', 'sk'],
    ['intra-', ['intra'], 'within', 'درون', 'lx'],
    ['meta-', ['meta'], 'beyond, after, change', 'فراتر، پس از', 'bn'],
    ['para-', ['para'], 'beside, abnormal', 'کنار، غیرطبیعی', 'mu'],
    ['peri-', ['peri'], 'around', 'پیرامون', 'bn'],
    ['poly-', ['poly'], 'many', 'چند', 'mu'],
    ['quadri-', ['quadri'], 'four', 'چهار', 'mu'],
    ['re-', ['re'], 'again, back', 'دوباره', 'fx'],
    ['sub-', ['sub'], 'under, below, less than', 'زیر، کمتر', 'sk'],
    ['supra-', ['supra'], 'above', 'بالای', 'sk'],
    ['syn-, sym-', ['syn', 'sym'], 'together, joined', 'با هم، پیوسته', 'jt'],
    ['tri-', ['tri'], 'three', 'سه', 'mu'],
    ['uni-', ['uni'], 'one', 'یک', 'lx'],
    // ریشه‌ها: سه ستون اصلی
    ['oste/o', ['osse', 'oste', 'ost'], 'bone', 'استخوان', 'lx'],
    ['my/o, myos/o', ['myos', 'my'], 'muscle', 'عضله', 'lx'],
    ['muscul/o', ['muscul'], 'muscle', 'عضله', 'lx'],
    ['arthr/o', ['arthr'], 'joint', 'مفصل', 'lx'],
    ['articul/o', ['articul'], 'joint', 'مفصل', 'lx'],
    ['chondr/o', ['chondr'], 'cartilage', 'غضروف', 'lx'],
    ['orth/o', ['orth'], 'straight', 'راست، صاف', 'lx'],
    ['ped/o', ['ped'], 'child (also foot)', 'کودک (و پا)', 'lx'],
    ['pod/o', ['pod'], 'foot', 'پا', 'lx'],
    ['chir/o', ['chir'], 'hand', 'دست', 'lx'],
    ['rheumat/o', ['rheumat'], 'watery flow (joint disease)', 'جریان آبکی (بیماری مفصل)', 'lx'],
    ['kinesi/o', ['kinesi'], 'movement', 'حرکت', 'lx'],
    ['physi/o', ['physi', 'phys'], 'nature, body', 'طبیعت، بدن', 'lx'],
    ['later/o', ['later'], 'side', 'پهلو، کنار', 'lx'],
    ['medi/o', ['medi'], 'middle', 'میانه', 'lx'],
    ['proxim/o', ['proxim'], 'near', 'نزدیک', 'lx'],
    ['dist/o', ['dist'], 'far', 'دور', 'lx'],
    ['anter/o', ['anter'], 'front', 'جلو', 'lx'],
    ['poster/o', ['poster'], 'back, behind', 'پشت', 'lx'],
    // ریشه‌ها: استخوان
    ['myel/o', ['myel'], 'bone marrow; spinal cord', 'مغز استخوان؛ نخاع', 'bn'],
    ['medull/o', ['medull'], 'inner part (marrow)', 'بخش درونی (مغز)', 'bn'],
    ['cortic/o', ['cortic'], 'outer layer (cortex)', 'لایه بیرونی (قشر)', 'bn'],
    ['calc/o, calci/o', ['calci', 'calc'], 'calcium', 'کلسیم', 'bn'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', 'خون', 'bn'],
    ['necr/o', ['necr'], 'death', 'مرگ', 'bn'],
    ['sarc/o', ['sarc'], 'flesh (connective tissue)', 'گوشت (بافت همبند)', 'bn'],
    ['cyt/o', ['cyt'], 'cell', 'سلول', '*'],
    // ریشه‌ها: جمجمه و ستون مهره
    ['crani/o', ['crani'], 'skull', 'جمجمه', 'sk'],
    ['mandibul/o', ['mandibul'], 'lower jaw (mandible)', 'فک پایین', 'sk'],
    ['maxill/o', ['maxill'], 'upper jaw (maxilla)', 'فک بالا', 'sk'],
    ['cervic/o', ['cervic'], 'neck', 'گردن', 'sk'],
    ['thorac/o', ['thorac'], 'chest', 'قفسه سینه', 'sk'],
    ['lumb/o', ['lumb'], 'lower back, loin', 'کمر', 'sk'],
    ['sacr/o', ['sacr'], 'sacrum', 'استخوان خاجی', 'sk'],
    ['coccyg/o', ['coccyg'], 'coccyx, tailbone', 'دنبالچه', 'sk'],
    ['vertebr/o', ['vertebr'], 'vertebra', 'مهره', 'sk'],
    ['spondyl/o', ['spondyl'], 'vertebra', 'مهره', 'sk'],
    ['spin/o', ['spin'], 'spine, backbone', 'ستون مهره', 'sk'],
    ['lamin/o', ['lamin'], 'lamina (part of a vertebra)', 'لامینا (تیغه مهره)', 'sk'],
    ['kyph/o', ['kyph'], 'hump', 'قوز', 'sk'],
    ['lord/o', ['lord'], 'bent backward, swayback', 'خمیده به عقب (گودی کمر)', 'sk'],
    ['scoli/o', ['scoli'], 'crooked, bent', 'کج، خمیده', 'sk'],
    ['cost/o', ['cost'], 'rib', 'دنده', 'sk'],
    ['stern/o', ['stern'], 'sternum, breastbone', 'جناغ سینه', 'sk'],
    // ریشه‌ها: اندام‌ها
    ['clavicul/o, cleid/o', ['clavicul', 'cleid'], 'clavicle, collarbone', 'ترقوه', 'sk'],
    ['scapul/o', ['scapul'], 'scapula, shoulder blade', 'کتف', 'sk'],
    ['humer/o', ['humer'], 'humerus (upper arm bone)', 'استخوان بازو', 'sk'],
    ['radi/o', ['radi'], 'radius; also ray (X-ray)', 'استخوان رادیوس؛ پرتو', 'sk'],
    ['uln/o', ['uln'], 'ulna', 'استخوان اولنا', 'sk'],
    ['carp/o', ['carp'], 'wrist bones (carpus)', 'مچ دست', 'sk'],
    ['phalang/o', ['phalang'], 'phalanges (finger and toe bones)', 'بندهای انگشت', 'sk'],
    ['pelv/o, pelv/i', ['pelv'], 'pelvis', 'لگن', 'sk'],
    ['ili/o', ['ili'], 'ilium', 'استخوان تهیگاه', 'sk'],
    ['ischi/o', ['ischi'], 'ischium', 'استخوان نشیمنگاهی', 'sk'],
    ['pub/o', ['pub'], 'pubis', 'استخوان شرمگاهی', 'sk'],
    ['acetabul/o', ['acetabul'], 'acetabulum (hip socket)', 'کاسه مفصل ران', 'sk'],
    ['femor/o', ['femor'], 'femur (thigh bone)', 'استخوان ران', 'sk'],
    ['patell/o', ['patell'], 'patella (kneecap)', 'کشکک', 'sk'],
    ['tibi/o', ['tibi'], 'tibia (shinbone)', 'درشت‌نی', 'sk'],
    ['fibul/o, perone/o', ['fibul', 'perone'], 'fibula', 'نازک‌نی', 'sk'],
    ['tars/o', ['tars'], 'ankle bones (tarsus)', 'مچ پا', 'sk'],
    ['calcane/o', ['calcane'], 'heel bone (calcaneus)', 'پاشنه', 'sk'],
    ['mast/o', ['mast'], 'breast (mastoid process)', 'پستان (زائده پستانی)', 'mu'],
    // ریشه‌ها: مفصل و حرکت
    ['synovi/o, synov/o', ['synovi', 'synov'], 'synovial membrane', 'پرده سینوویال', 'jt'],
    ['burs/o', ['burs'], 'bursa (sac of fluid)', 'کیسه مفصلی (بورس)', 'jt'],
    ['ligament/o', ['ligament'], 'ligament', 'رباط', 'jt'],
    ['menisc/o', ['menisc'], 'meniscus (crescent)', 'منیسک (هلالی)', 'jt'],
    ['ankyl/o', ['ankyl'], 'stiff, bent, fused', 'خشک، جوش‌خورده', 'jt'],
    ['flex/o', ['flex'], 'to bend', 'خم کردن', 'jt'],
    ['extens/o', ['extens'], 'to stretch out', 'باز کردن، کشیدن', 'jt'],
    ['duct/o', ['duct'], 'to lead, to bring', 'بردن، کشاندن', 'jt'],
    ['rotat/o', ['rotat'], 'to revolve, turn', 'چرخاندن', 'jt'],
    ['vers/o', ['vers'], 'to turn', 'برگرداندن', 'jt'],
    ['dors/o', ['dors'], 'back (of body or foot)', 'پشت', 'jt'],
    ['plant/o', ['plant'], 'sole of the foot', 'کف پا', 'jt'],
    ['goni/o', ['goni'], 'angle', 'زاویه', 'jt'],
    ['uric/o', ['uric'], 'uric acid', 'اسید اوریک', 'jt'],
    // ریشه‌ها: عضله
    ['fasci/o', ['fasci'], 'fascia (fibrous band)', 'نیام (نوار فیبری)', 'mu'],
    ['ten/o, tend/o, tendin/o', ['tendin', 'tend', 'ten'], 'tendon', 'تاندون', 'mu'],
    ['fibr/o', ['fibr'], 'fiber', 'رشته (فیبر)', 'mu'],
    ['ton/o', ['ton'], 'tone, tension', 'تون، کشش', 'mu'],
    ['rhabd/o', ['rhabd'], 'rod-shaped (striated)', 'میله‌ای (مخطط)', 'mu'],
    ['cardi/o', ['cardi'], 'heart', 'قلب', 'mu'],
    ['brachi/o', ['brachi'], 'arm', 'بازو', 'mu'],
    ['pector/o', ['pector'], 'chest', 'سینه', 'mu'],
    ['erg/o', ['erg'], 'work', 'کار', 'mu'],
    ['electr/o', ['electr'], 'electricity', 'برق', 'mu'],
    // ریشه‌ها: تشخیص و درمان
    ['tom/o', ['tom'], 'to cut, section', 'برش، مقطع', 'fx'],
    ['densit/o', ['densit'], 'density', 'تراکم', 'fx'],
    ['prosthet/o', ['prosthet'], 'addition (artificial part)', 'افزوده (عضو مصنوعی)', 'fx'],
    ['hydr/o', ['hydr'], 'water', 'آب', 'fx'],
    ['therm/o', ['therm'], 'heat', 'گرما', 'fx'],
    ['habilitat/o', ['habilitat'], 'ability', 'توانایی', 'fx'],
    ['alges/o', ['alges'], 'sensation of pain', 'حس درد', 'fx'],
    // پسوندها
    ['-al, -ic, -ous, -ar, -ary, -ac, -eal', ['ary', 'eal', 'ial', 'ior', 'ous', 'ic', 'al', 'ar', 'ac'], 'pertaining to', 'مربوط به', '*'],
    ['-ation, -ion', ['ation', 'ion'], 'process, action', 'فرایند، عمل', '*'],
    ['-is, -um, -us, -a', ['is', 'um', 'us', 'a'], 'noun ending', 'پایان اسم', '*'],
    ['-ia, -y', ['ia', 'y'], 'condition', 'حالت', '*'],
    ['-ics', ['ics'], 'study, practice', 'دانش، رشته', 'lx'],
    ['-ist, -iatrist', ['iatrist', 'ist'], 'specialist', 'متخصص', 'lx'],
    ['-logist', ['logist'], 'specialist in the study of', 'متخصص', 'lx'],
    ['-logy', ['logy'], 'study of', 'علم، مطالعه', 'lx'],
    ['-algia', ['algia'], 'pain', 'درد', '*'],
    ['-dynia', ['dynia'], 'pain', 'درد', 'sk'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-osis', ['osis', 'sis'], 'abnormal condition', 'وضعیت غیرطبیعی', '*'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', '*'],
    ['-oma', ['oma'], 'tumor, mass', 'تومور، توده', '*'],
    ['-oid', ['oid'], 'resembling', 'شبیه به', '*'],
    ['-cyte', ['cyte'], 'cell', 'سلول', '*'],
    ['-blast', ['blast'], 'immature, embryonic (forming) cell', 'سلول نابالغ (سازنده)', 'bn'],
    ['-clast', ['clast'], 'to break (cell that breaks down)', 'شکننده (سلول تخریب‌کننده)', 'bn'],
    ['-genesis', ['genesis'], 'producing, forming', 'تولید، ساختن', 'bn'],
    ['-poiesis', ['poiesis'], 'formation', 'ساختن', 'bn'],
    ['-physis', ['physis'], 'growth', 'رشد', 'bn'],
    ['-porosis', ['porosis'], 'porous, passage', 'متخلخل، سوراخ‌سوراخ', 'bn'],
    ['-penia', ['penia'], 'deficiency, decrease', 'کمبود', 'bn'],
    ['-malacia', ['malacia'], 'softening', 'نرمی', 'bn'],
    ['-plasia', ['plasia'], 'formation, development', 'رشد، شکل‌گیری', 'bn'],
    ['-emia', ['emia'], 'blood condition', 'حالت خون', 'bn'],
    ['-listhesis', ['listhesis'], 'slipping', 'لغزش', 'sk'],
    ['-ptosis', ['ptosis'], 'drooping, falling', 'افتادگی', 'sk'],
    ['-desis', ['desis'], 'binding, surgical fusion', 'جوش دادن (جراحی)', 'jt'],
    ['-centesis', ['centesis'], 'surgical puncture to remove fluid', 'سوراخ کردن برای کشیدن مایع', 'jt'],
    ['-scopy', ['scopy'], 'visual examination', 'مشاهده با ابزار', 'jt'],
    ['-gram', ['gram'], 'record', 'نگاشت، تصویر ثبت‌شده', 'jt'],
    ['-graphy', ['graphy'], 'process of recording', 'روش ثبت تصویر', 'fx'],
    ['-meter', ['meter'], 'instrument to measure', 'ابزار اندازه‌گیری', 'jt'],
    ['-metry', ['metry'], 'process of measuring', 'اندازه‌گیری', 'fx'],
    ['-asthenia', ['asthenia'], 'weakness', 'ضعف', 'mu'],
    ['-trophy', ['trophy'], 'development, nourishment', 'رشد، تغذیه', 'mu'],
    ['-tonia', ['tonia'], 'tone, tension', 'تون، کشش', 'mu'],
    ['-kinesia', ['kinesia'], 'movement', 'حرکت', 'mu'],
    ['-plegia', ['plegia'], 'paralysis', 'فلج', 'mu'],
    ['-paresis', ['paresis'], 'slight paralysis, weakness', 'فلج ناقص، ضعف', 'mu'],
    ['-lysis', ['lysis'], 'breakdown, destruction', 'تجزیه، تخریب', 'mu'],
    ['-rrhexis', ['rrhexis'], 'rupture', 'پارگی', 'mu'],
    ['-ectomy', ['ectomy'], 'excision, surgical removal', 'برداشتن (جراحی)', '*'],
    ['-tomy', ['tomy'], 'incision, cutting into', 'برش', '*'],
    ['-plasty', ['plasty'], 'surgical repair', 'ترمیم جراحی', '*'],
    ['-clasia', ['clasia'], 'surgical breaking', 'شکستن (جراحی)', 'fx'],
    ['-rrhaphy', ['rrhaphy'], 'suture', 'بخیه', 'fx'],
    ['-graft', ['graft'], 'transplantation', 'پیوند', 'fx'],
    ['-therapy', ['therapy'], 'treatment', 'درمان', 'fx']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['ADLs', 'activities of daily living', 'فعالیت‌های روزمره زندگی', 'fx'],
    ['AE', 'above elbow (amputation)', 'بالای آرنج (قطع عضو)', 'fx'],
    ['AK', 'above knee (amputation)', 'بالای زانو (قطع عضو)', 'fx'],
    ['ANA', 'antinuclear antibody', 'آنتی‌بادی ضدهسته', 'jt'],
    ['AP', 'anteroposterior', 'قدامی-خلفی (از جلو به عقب)', 'lx'],
    ['BDT', 'bone density testing', 'سنجش تراکم استخوان', 'bn'],
    ['BE', 'below elbow (amputation)', 'زیر آرنج (قطع عضو)', 'fx'],
    ['BK', 'below knee (amputation)', 'زیر زانو (قطع عضو)', 'fx'],
    ['C1–C7', 'first to seventh cervical vertebrae', 'مهره‌های گردنی اول تا هفتم', 'sk'],
    ['Ca', 'calcium', 'کلسیم', 'bn'],
    ['CK', 'creatine kinase', 'کراتین کیناز (آنزیم عضله)', 'mu'],
    ['CPK', 'creatine phosphokinase', 'کراتین فسفوکیناز (همان CK)', 'mu'],
    ['CRP', 'C-reactive protein', 'پروتئین واکنشی C (نشانگر التهاب)', 'fx'],
    ['CT', 'computed tomography', 'سی‌تی‌اسکن', 'fx'],
    ['CTS', 'carpal tunnel syndrome', 'سندروم تونل کارپ', 'mu'],
    ['DJD', 'degenerative joint disease', 'بیماری دژنراتیو مفصل (آرتروز)', 'jt'],
    ['DTR', 'deep tendon reflex', 'رفلکس عمقی تاندون', 'mu'],
    ['Dx', 'diagnosis', 'تشخیص', 'lx'],
    ['DXA, DEXA', 'dual-energy X-ray absorptiometry', 'سنجش تراکم استخوان با اشعه ایکس دوانرژی (دگزا)', 'bn'],
    ['EMG', 'electromyography', 'نوار عصب و عضله (الکترومیوگرافی)', 'mu'],
    ['ESR', 'erythrocyte sedimentation rate', 'سرعت رسوب گلبول قرمز', 'fx'],
    ['Fx, FX', 'fracture', 'شکستگی', 'fx'],
    ['HNP', 'herniated nucleus pulposus', 'فتق دیسک بین‌مهره‌ای', 'sk'],
    ['Hx', 'history', 'شرح حال، سابقه', 'lx'],
    ['IM', 'intramuscular', 'داخل عضلانی', 'lx'],
    ['JRA', 'juvenile rheumatoid arthritis', 'آرتریت روماتوئید نوجوانان', 'jt'],
    ['L1–L5', 'first to fifth lumbar vertebrae', 'مهره‌های کمری اول تا پنجم', 'sk'],
    ['LE', 'lower extremity', 'اندام تحتانی', 'fx'],
    ['LLE', 'left lower extremity', 'اندام تحتانی چپ', 'fx'],
    ['LUE', 'left upper extremity', 'اندام فوقانی چپ', 'fx'],
    ['MD', 'muscular dystrophy', 'دیستروفی عضلانی', 'mu'],
    ['MRI', 'magnetic resonance imaging', 'ام‌آرآی', 'fx'],
    ['NF', 'necrotizing fasciitis', 'فاسیئیت نکروزان', 'mu'],
    ['NSAID', 'nonsteroidal anti-inflammatory drug', 'داروی ضدالتهاب غیراستروئیدی', 'fx'],
    ['OA', 'osteoarthritis', 'آرتروز (استئوآرتریت)', 'jt'],
    ['OI', 'osteogenesis imperfecta', 'استخوان‌سازی ناقص', 'bn'],
    ['ORIF', 'open reduction internal fixation', 'جااندازی باز و تثبیت داخلی', 'fx'],
    ['Ortho, ortho', 'orthopedics', 'ارتوپدی', 'lx'],
    ['OT', 'occupational therapy', 'کاردرمانی', 'fx'],
    ['P', 'phosphorus', 'فسفر', 'bn'],
    ['post-op', 'postoperative (after surgery)', 'پس از جراحی', 'fx'],
    ['PROM', 'passive range of motion', 'دامنه حرکت غیرفعال (با کمک دیگری)', 'jt'],
    ['PSF', 'posterior spinal fusion', 'فیوژن خلفی ستون مهره', 'sk'],
    ['PT', 'physical therapy', 'فیزیوتراپی', 'fx'],
    ['RA', 'rheumatoid arthritis', 'آرتریت روماتوئید', 'jt'],
    ['RF', 'rheumatoid factor', 'فاکتور روماتوئید', 'jt'],
    ['RLE', 'right lower extremity', 'اندام تحتانی راست', 'fx'],
    ['ROM', 'range of motion', 'دامنه حرکت مفصل', 'jt'],
    ['RUE', 'right upper extremity', 'اندام فوقانی راست', 'fx'],
    ['Rx', 'prescription, treatment', 'نسخه، درمان', 'lx'],
    ['SLE', 'systemic lupus erythematosus', 'لوپوس اریتماتوی سیستمیک', 'jt'],
    ['T1–T12', 'first to twelfth thoracic vertebrae', 'مهره‌های سینه‌ای اول تا دوازدهم', 'sk'],
    ['THA', 'total hip arthroplasty', 'تعویض کامل مفصل ران', 'jt'],
    ['THR', 'total hip replacement', 'تعویض کامل مفصل ران', 'jt'],
    ['TKA', 'total knee arthroplasty', 'تعویض کامل مفصل زانو', 'jt'],
    ['TKR', 'total knee replacement', 'تعویض کامل مفصل زانو', 'jt'],
    ['TMJ', 'temporomandibular joint', 'مفصل گیجگاهی-فکی', 'sk'],
    ['UE', 'upper extremity', 'اندام فوقانی', 'fx'],
    ['US', 'ultrasound', 'سونوگرافی؛ اولتراسوند درمانی', 'fx'],
    ['y/o', 'years old', 'ساله', 'lx']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'body', icon: '🦴', name: 'استخوان‌ها و ساختارها' },
    { id: 'cell', icon: '🧬', name: 'بافت، سلول و مواد معدنی' },
    { id: 'mus', icon: '💪', name: 'عضله‌ها و تاندون‌ها' },
    { id: 'mv', icon: '🔄', name: 'حرکت‌ها و جهت‌ها' },
    { id: 'field', icon: '🎓', name: 'رشته‌ها و متخصصان' },
    { id: 'dz', icon: '🩻', name: 'بیماری‌ها و آسیب‌ها' },
    { id: 'sx', icon: '🔍', name: 'نشانه‌ها' },
    { id: 'lab', icon: '🧪', name: 'تشخیص، تصویربرداری و آزمایش' },
    { id: 'tx', icon: '💊', name: 'درمان، دارو و جراحی' }
  ];
  const main = { mus: 'Anatomy_and_Physiology', mv: 'Anatomy_and_Physiology' };
  EA.LEX_DATA = { roots, abbr, cats, main, worlds: ['lx', 'bn', 'sk', 'jt', 'mu', 'fx'], base: 'lx' };
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
/* اُستئو — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با الگوی هورمونا و درما: زمینه سفید کارت، بافت‌ها با گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی زیر آن)،
 * پیکان‌ها و خط‌های راهنمای خاکستری گرد. پالت: عاج استخوان، قرمز عضله، آبی غضروف، زرد رباط و تاندون.
 * اسکلت و بدن‌ها به سبک «مانکن آناتومی» (ساده و بی‌جزئیات اضافه) کشیده شده‌اند تا برچسب‌ها خوانا بمانند.
 * EA.art(کلید) ← رشته SVG؛ EA.ART_KEYS فهرست کلیدهاست (آزمون‌ها بررسی می‌کنند). */
(function (root) {
  const EA = root.EA = root.EA || {};
  let UID = 0;
  const FONT_EN = 'Nunito, Vazirmatn, system-ui, sans-serif', FONT_FA = 'Vazirmatn, Tahoma, sans-serif';
  const INK = '#2b2b2b', MUTED = '#6f7a80', LINE = '#5b6b73';
  /* پالت بافت‌ها */
  const C = {
    bone: '#f3e4c4', bone2: '#e3cc9c', boneLine: '#b8975f', boneHi: '#fffaf0', spongy: '#ead3a4', compact: '#e9d6ae',
    marrowR: '#d9584f', marrowY: '#f4d27a', cart: '#bfe2f3', cartLine: '#6fb0cf',
    musc: '#d65a52', musc2: '#b8403a', muscL: '#f2a097', tendon: '#f6f0e3', tendonLine: '#cdbf9f',
    lig: '#f1e3b5', ligLine: '#c9ad5c', syn: '#b99be0', fluid: '#dcf0fd', fluidLine: '#8ec5ea',
    skin: '#f6d2b8', skinLine: '#d9a988', nerve: '#e5b31c', art: '#d9443a', vein: '#4f7fd1',
    axial: '#f3dfb0', axialLine: '#b8975f', app: '#cfe3f5', appLine: '#6f97bf', red: '#c2413a', teal: '#1e9e8f'
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

  /* ---------- استخوان ----------
   * استخوان دراز «دمبلی»: مرکز cx، از y1 تا y2، پهنای تنه sw و نیم‌پهنای سرها ew؛ جهت عمودی */
  function bonePath(cx, y1, y2, sw, ew) {
    const h = sw / 2;
    return `M${cx - h} ${y1 + ew * 1.1} C${cx - h} ${y1 + ew * 0.7} ${cx - ew} ${y1 + ew * 0.8} ${cx - ew} ${y1 + ew * 0.3} C${cx - ew} ${y1 - ew * 0.15} ${cx - ew * 0.25} ${y1 - ew * 0.2} ${cx} ${y1 + ew * 0.1} C${cx + ew * 0.25} ${y1 - ew * 0.2} ${cx + ew} ${y1 - ew * 0.15} ${cx + ew} ${y1 + ew * 0.3} C${cx + ew} ${y1 + ew * 0.8} ${cx + h} ${y1 + ew * 0.7} ${cx + h} ${y1 + ew * 1.1}`
      + ` L${cx + h} ${y2 - ew * 1.1} C${cx + h} ${y2 - ew * 0.7} ${cx + ew} ${y2 - ew * 0.8} ${cx + ew} ${y2 - ew * 0.3} C${cx + ew} ${y2 + ew * 0.15} ${cx + ew * 0.25} ${y2 + ew * 0.2} ${cx} ${y2 - ew * 0.1} C${cx - ew * 0.25} ${y2 + ew * 0.2} ${cx - ew} ${y2 + ew * 0.15} ${cx - ew} ${y2 - ew * 0.3} C${cx - ew} ${y2 - ew * 0.8} ${cx - h} ${y2 - ew * 0.7} ${cx - h} ${y2 - ew * 1.1} Z`;
  }
  /** استخوان با سایه و برق؛ چرخش دلخواه حول مرکز */
  function bone(cx, y1, y2, sw, ew, o) {
    const p = o || {};
    const g = nid();
    const rot = p.rot ? ` transform="rotate(${p.rot} ${cx} ${(y1 + y2) / 2})"` : '';
    return { d: linear(g, p.c1 || C.boneHi, p.c2 || C.bone2), b: `<g${rot}><path d="${bonePath(cx, y1, y2, sw, ew)}" fill="url(#${g})" stroke="${p.line || C.boneLine}" stroke-width="1.4"/><path d="M${cx - sw / 2 + 3} ${y1 + ew * 1.4} V${y2 - ew * 1.4}" stroke="#fff" stroke-width="2.4" opacity=".7" stroke-linecap="round"/></g>` };
  }
  /** استخوان ساده به شکل خط ضخیم با لبه (برای اسکلت کامل) */
  const limb = (x1, y1, x2, y2, w, c, line) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${line}" stroke-width="${w + 2.4}" stroke-linecap="round"/><path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
  const knob = (x, y, r, c, line) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" stroke="${line}" stroke-width="1.2"/>`;
  /** بافت اسفنجی: شبکه تیغه‌ها درون یک ناحیه (clip) */
  function spongy(clipD, x, y, w, h, seed, col) {
    const R = rng(seed || 11), id = nid();
    let s = '';
    for (let i = 0; i < Math.round(w * h / 90); i++) {
      const cx = x + R() * w, cy = y + R() * h, rx = 3 + R() * 4, ry = 2 + R() * 3;
      s += `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" transform="rotate(${Math.round(R() * 180)} ${cx.toFixed(1)} ${cy.toFixed(1)})" fill="${col || C.marrowR}" opacity=".75"/>`;
    }
    return { d: `<clipPath id="${id}"><path d="${clipD}"/></clipPath>`, b: `<g clip-path="url(#${id})"><path d="${clipD}" fill="${C.spongy}"/>${s}</g>` };
  }

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

  /* ================= دنیای پایه: زبان استخوان و عضله ================= */
  /* اجزای دستگاه حرکتی روی یک زانوی ساده */
  A['msk-parts'] = () => {
    const fm = bone(150, 34, 118, 34, 30), tb = bone(150, 140, 262, 32, 30);
    const sh = nid(), m = nid();
    return svg(360, 300, `${title('دستگاه حرکتی: استخوان، غضروف، مفصل، رباط، عضله و تاندون')}
      <g filter="url(#${sh})">${fm.b}${tb.b}</g>
      <path d="M118 112 Q150 128 182 112" stroke="${C.cartLine}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M118 112 Q150 128 182 112" stroke="${C.cart}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M120 146 Q150 138 180 146" stroke="${C.cartLine}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M120 146 Q150 138 180 146" stroke="${C.cart}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M114 98 C104 120 104 140 116 160" stroke="${C.ligLine}" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M114 98 C104 120 104 140 116 160" stroke="${C.lig}" stroke-width="6.5" fill="none" stroke-linecap="round"/>
      <path d="M110 90 C96 118 96 146 112 172 M190 90 C204 118 204 146 188 172" stroke="#9a86c9" stroke-width="1.6" stroke-dasharray="4 3" fill="none"/>
      <path d="M176 36 C204 40 214 70 206 100 C204 108 200 112 196 114 L188 114 C186 96 182 66 170 40 Z" fill="url(#${m})" stroke="${C.musc2}" stroke-width="1.2"/>
      <path d="M182 50 C192 60 196 80 194 100 M176 46 C186 60 188 80 186 104" stroke="#fff" stroke-width="1.2" opacity=".45" fill="none"/>
      <path d="M190 112 L198 122" stroke="${C.tendonLine}" stroke-width="8" stroke-linecap="round"/><path d="M190 112 L198 122" stroke="${C.tendon}" stroke-width="5.5" stroke-linecap="round"/>
      <ellipse cx="200" cy="130" rx="9" ry="12" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.4"/>
      <path d="M200 142 L184 168" stroke="${C.tendonLine}" stroke-width="8" stroke-linecap="round"/><path d="M200 142 L184 168" stroke="${C.tendon}" stroke-width="5.5" stroke-linecap="round"/>
      ${pin(150, 60, 262, 50)}${lab(298, 46, 'bone', 'استخوان • oste/o', { size: 10.5 })}
      ${pin(160, 120, 262, 92)}${lab(298, 88, 'cartilage', 'غضروف • chondr/o', { size: 10.5 })}
      ${pin(182, 130, 262, 134)}${lab(298, 130, 'joint', 'مفصل • arthr/o', { size: 10.5 })}
      ${pin(204, 70, 262, 176)}${lab(298, 172, 'muscle', 'عضله • my/o', { size: 10.5 })}
      ${pin(194, 156, 262, 218)}${lab(298, 214, 'tendon', 'تاندون • ten/o', { size: 10.5 })}
      ${pin(106, 130, 62, 130)}${lab(50, 108, 'ligament', 'رباط', { size: 10.5 })}
      ${f(56, 150, 'استخوان به استخوان', { size: 8.5 })}
      ${f(180, 292, 'تاندون: عضله به استخوان • رباط: استخوان به استخوان', { size: 9.5, fill: INK, w: 700 })}`,
      'اجزای دستگاه اسکلتی-عضلانی', `${fm.d}${tb.d}${shadow(sh)}${linear(m, C.muscL, C.musc2)}`);
  };

  /* کارهای اسکلت و عضله */
  A['skel-functions'] = () => svg(360, 214, `${title('اسکلت و عضله با هم شش کار اصلی دارند')}
      ${card(8, 32, 108, 84, '#f8efdc', '🧍', 'support', 'تکیه‌گاه و شکل بدن', '')}
      ${card(126, 32, 108, 84, '#e6f0fb', '🛡️', 'protection', 'محافظت', 'جمجمه از مغز، دنده از قلب')}
      ${card(244, 32, 108, 84, '#fde8e6', '🏃', 'movement', 'حرکت', 'استخوان اهرم، عضله نیرو')}
      ${card(8, 124, 108, 84, '#fbe3e3', '🩸', 'hematopoiesis', 'خون‌سازی', 'در مغز قرمز استخوان')}
      ${card(126, 124, 108, 84, '#eef6e6', '🧂', 'mineral storage', 'ذخیره مواد معدنی', 'کلسیم و فسفر')}
      ${card(244, 124, 108, 84, '#fff1d9', '🔥', 'heat production', 'تولید گرما', 'کار عضله‌ها')}`, 'کارهای دستگاه اسکلتی-عضلانی');

  /* آناتومی یک واژه: inter + vertebr + al */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 129, fa, { size: 9.5, fill: c })}`;
    return svg(360, 192, `${title('یک واژه = پیشوند + ریشه + پسوند')}
      ${part(10, 66, 'inter', '#1272a3', '#ddf1fb')}${part(82, 100, 'vertebr', '#a8352f', '#fbe7e3')}${part(188, 46, 'al', '#3f8a05', '#e7f9d8')}
      ${br(10, 76, 'prefix', 'پیشوند: بین', '#1272a3')}${br(82, 182, 'root', 'ریشه: مهره', '#a8352f')}${br(188, 234, 'suffix', 'پسوند: مربوط به', '#3f8a05')}
      <rect x="246" y="40" width="106" height="40" rx="10" fill="#f8f6f5"/>${f(299, 57, 'مربوط به', { size: 10.5, fill: '#3f8a05', w: 800 })}${f(299, 73, 'بینِ مهره‌ها', { size: 10.5, fill: INK, w: 800 })}
      <path d="M214 150 C160 176 96 176 44 150" stroke="#a8352f" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M48 146 l-6 4 l7 3" stroke="#a8352f" stroke-width="2" fill="none"/>
      ${f(140, 186, 'معنی را از آخر بخوان: پسوند ← پیشوند ← ریشه', { size: 10, fill: '#a8352f', w: 700 })}`, 'آناتومی یک واژه پزشکی');
  };

  /* شش ریشه پایه */
  A['root-trio'] = () => {
    const tile = (x, y, ic, root, fa, ex, bg, c) => `<rect x="${x}" y="${y}" width="108" height="84" rx="14" fill="${bg}"/>${t(x + 54, y + 28, ic, { size: 21 })}${t(x + 54, y + 50, root, { size: 13, w: 900, fill: c })}${f(x + 54, y + 64, fa, { size: 10, fill: INK, w: 800 })}${t(x + 54, y + 78, ex, { size: 9, fill: MUTED })}`;
    return svg(360, 220, `${title('شش ریشه پایه دستگاه حرکتی')}
      ${tile(8, 32, '🦴', 'oste/o', 'استخوان', 'osteitis', '#f8efdc', '#8a6a2c')}
      ${tile(126, 32, '💪', 'my/o', 'عضله', 'myalgia', '#fde8e6', '#a8352f')}
      ${tile(244, 32, '🦵', 'arthr/o', 'مفصل', 'arthritis', '#ddf4f1', '#137568')}
      ${tile(8, 126, '🧊', 'chondr/o', 'غضروف', 'chondroma', '#e3f1fa', '#1565c0')}
      ${tile(126, 126, '🪢', 'ten/o', 'تاندون', 'tenotomy', '#f6f1e6', '#8a6a2c')}
      ${tile(244, 126, '🧵', 'myel/o', 'مغز استخوان', 'osteomyelitis', '#f3eafc', '#6a3fb0')}`, 'ریشه‌های پایه');
  };

  /* جهت‌های بدن روی یک مانکن */
  A.directions = () => {
    const a = nid(), b = nid();
    return svg(360, 336, `${title('جهت‌ها: نزدیک و دور، داخلی و خارجی')}
      ${mannequin(180, 30, 1)}
      <path d="M180 30 V300" stroke="#9aa9b1" stroke-width="1.4" stroke-dasharray="5 4"/>${f(180, 312, 'خط چین: خط وسط بدن (midline)', { size: 9 })}
      ${arrow(a, 128, 92, 112, 176, '#1e9e8f', 2.6)}${arrow(a, 112, 176, 128, 92, '#1e9e8f', 2.6)}
      ${lab(80, 104, 'proximal', 'نزدیک به تنه', { size: 10, fill: '#137568' })}${lab(80, 178, 'distal', 'دور از تنه', { size: 10, fill: '#137568' })}
      ${arrow(b, 196, 150, 226, 150, '#c2413a', 2.6)}${lab(296, 140, 'lateral', 'خارجی: دور از خط وسط', { size: 10, fill: '#a8352f' })}
      ${arrow(b, 226, 172, 196, 172, '#3f7fbf', 2.6)}${lab(296, 184, 'medial', 'داخلی: به سمت خط وسط', { size: 10, fill: '#1f5f9f' })}
            <circle cx="152" cy="240" r="6" fill="#c2413a" opacity=".8"/><circle cx="208" cy="240" r="6" fill="#c2413a" opacity=".8"/>${f(180, 330, 'هر دو زانو درگیر = bilateral (دوطرفه)؛ فقط یکی = unilateral', { size: 9.5, fill: '#5b3fb0', w: 700 })}`,
      'جهت‌های آناتومیک', `${marker(a, '#1e9e8f')}${marker(b, '#5b6b73')}`);
  };

  /* دوقلوهای فریبنده */
  A.twins = () => {
    const box = (x, y, c, bg, w1, m1, ex, ic) => `<rect x="${x}" y="${y}" width="164" height="86" rx="14" fill="${bg}"/>${t(x + 30, y + 50, ic, { size: 22 })}${t(x + 100, y + 32, w1, { size: 15, fill: c, w: 900 })}${f(x + 100, y + 52, m1, { size: 10.5, fill: INK, w: 800 })}${t(x + 100, y + 72, ex, { size: 9.5, fill: c, w: 800 })}`;
    return svg(360, 236, `${title('یک حرف، دو معنی کاملاً متفاوت')}
      ${box(10, 32, '#a8352f', '#fde8e6', 'my/o', 'عضله', 'myalgia', '💪')}${box(186, 32, '#6a3fb0', '#f3eafc', 'myel/o', 'مغز استخوان؛ نخاع', 'osteomyelitis', '🧵')}
      ${box(10, 126, '#8a6a2c', '#f8efdc', 'ilium', 'استخوان لگن', 'ili/o', '🦴')}${box(186, 126, '#3f8a05', '#eef6e6', 'ileum', 'روده باریک (گوارش)', 'ile/o', '🌀')}
      ${f(180, 228, 'ilium با i مال لگن است؛ ileum با e مال روده (eat = خوردن)', { size: 9.5, fill: MUTED, w: 700 })}`, 'واژه‌های همزاد');
  };

  /* ================= دنیای ۱: استخوان ================= */
  /* سه سلول استخوان */
  A['bone-cells'] = () => {
    const g = nid();
    const matrix = (x) => `<rect x="${x}" y="40" width="104" height="120" rx="12" fill="${C.compact}"/>${[0, 1, 2, 3, 4].map(i => `<path d="M${x + 6} ${60 + i * 22} q24 -6 48 0 t48 0" stroke="${C.bone2}" stroke-width="1.4" fill="none"/>`).join('')}`;
    return svg(360, 214, `${title('سه سلول استخوان: سازنده، نگهبان، تخریب‌کننده')}
      ${matrix(8)}${matrix(128)}${matrix(248)}
      ${[0, 1, 2, 3].map(i => `<path d="M${18 + i * 22} 160 v-28 a10 10 0 0 1 20 0 v28z" fill="#8fc7e8" stroke="#3f7fbf" stroke-width="1.2"/><circle cx="${28 + i * 22}" cy="140" r="4" fill="#3f6fa0"/>`).join('')}
      ${[0, 1, 2].map(i => `<circle cx="${30 + i * 26}" cy="${118 - i * 6}" r="3" fill="${C.bone2}"/>`).join('')}
      <ellipse cx="180" cy="100" rx="22" ry="14" fill="#fff8ea" stroke="${C.boneLine}" stroke-width="1.2"/>
      <path d="M180 100 m-14 0 l-26 -12 M180 100 m14 0 l28 -10 M180 100 m-6 10 l-14 26 M180 100 m8 10 l16 26 M180 100 m0 -12 l2 -30" stroke="#a46a3b" stroke-width="1.6" fill="none"/>
      <ellipse cx="180" cy="100" rx="15" ry="9" fill="#e5a46b"/><circle cx="180" cy="100" r="4.5" fill="#7a3f1b"/>
      <path d="M248 160 V100 C270 88 290 120 316 104 C334 96 352 108 352 120 V160 Z" fill="${C.compact}"/>
      <path d="M262 120 C262 92 330 88 336 116 C340 136 326 146 300 146 C278 146 262 140 262 120Z" fill="url(#${g})" stroke="#8a4fb0" stroke-width="1.4"/>
      ${[[280, 112], [294, 106], [308, 112], [322, 118], [300, 126]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#5a2f84"/>`).join('')}
      <path d="M268 140 q6 6 12 0 t12 0 t12 0 t12 0 t12 0" stroke="#8a4fb0" stroke-width="1.6" fill="none"/>
      ${lab(60, 180, 'osteoblast', 'استخوان‌ساز', { size: 10.5, fill: '#1f5f9f' })}
      ${lab(180, 180, 'osteocyte', 'سلول بالغ استخوان', { size: 10.5, fill: '#8a5a20' })}
      ${lab(300, 180, 'osteoclast', 'استخوان‌خوار', { size: 10.5, fill: '#6a3fb0' })}`,
      'سلول‌های استخوان', radial(g, '#e9d5fb', '#b48ae0'));
  };

  /* آناتومی استخوان دراز (برش طولی) */
  A['long-bone'] = () => {
    const cx = 150, y1 = 40, y2 = 400, sw = 46, ew = 40;
    const outer = bonePath(cx, y1, y2, sw, ew);
    const top = `M${cx - ew + 2} ${y1 + 12} C${cx - ew} ${y1 - 4} ${cx - 10} ${y1 - 6} ${cx} ${y1 + 10} C${cx + 10} ${y1 - 6} ${cx + ew} ${y1 - 4} ${cx + ew - 2} ${y1 + 12} L${cx + ew - 6} ${y1 + 52} L${cx + sw / 2 - 6} ${y1 + 82} L${cx - sw / 2 + 6} ${y1 + 82} L${cx - ew + 6} ${y1 + 52} Z`;
    const bot = `M${cx - ew + 2} ${y2 - 12} C${cx - ew} ${y2 + 4} ${cx - 10} ${y2 + 6} ${cx} ${y2 - 10} C${cx + 10} ${y2 + 6} ${cx + ew} ${y2 + 4} ${cx + ew - 2} ${y2 - 12} L${cx + ew - 6} ${y2 - 52} L${cx + sw / 2 - 6} ${y2 - 82} L${cx - sw / 2 + 6} ${y2 - 82} L${cx - ew + 6} ${y2 - 52} Z`;
    const sp1 = spongy(top, cx - ew, y1 - 6, ew * 2, 92, 5), sp2 = spongy(bot, cx - ew, y2 - 86, ew * 2, 92, 9);
    const g = nid(), sh = nid();
    return svg(360, 440, `${title('آناتومی استخوان دراز (برش طولی)')}
      <g filter="url(#${sh})"><path d="${outer}" fill="url(#${g})" stroke="#e58a8a" stroke-width="3"/></g>
      ${sp1.b}${sp2.b}
      <rect x="${cx - sw / 2 + 7}" y="${y1 + 86}" width="${sw - 14}" height="${y2 - y1 - 172}" rx="6" fill="${C.marrowY}" stroke="#d9a93a" stroke-width="1"/>
      <path d="M${cx - ew + 8} ${y1 + 56} Q${cx} ${y1 + 50} ${cx + ew - 8} ${y1 + 56}" stroke="#f6f0e3" stroke-width="3.5" fill="none"/>
      <path d="M${cx - ew + 8} ${y2 - 56} Q${cx} ${y2 - 50} ${cx + ew - 8} ${y2 - 56}" stroke="#f6f0e3" stroke-width="3.5" fill="none"/>
      <path d="M${cx - ew + 4} ${y1 + 10} C${cx - ew + 4} ${y1 - 2} ${cx - 10} ${y1 - 2} ${cx} ${y1 + 12} C${cx + 10} ${y1 - 2} ${cx + ew - 4} ${y1 - 2} ${cx + ew - 4} ${y1 + 10}" stroke="${C.cartLine}" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M${cx - ew + 4} ${y1 + 10} C${cx - ew + 4} ${y1 - 2} ${cx - 10} ${y1 - 2} ${cx} ${y1 + 12} C${cx + 10} ${y1 - 2} ${cx + ew - 4} ${y1 - 2} ${cx + ew - 4} ${y1 + 10}" stroke="${C.cart}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M${cx - 18} ${y1 + 210} q-10 12 0 24" stroke="${C.art}" stroke-width="2.4" fill="none"/><path d="M${cx - sw / 2} ${y1 + 216} h10" stroke="${C.art}" stroke-width="2.4"/>
      <path d="M18 ${y1} V${y1 + 60} M12 ${y1} H24 M12 ${y1 + 60} H24" stroke="#a8352f" stroke-width="1.6" fill="none"/>${lab(66, y1 + 26, 'epiphysis', 'سر استخوان', { size: 10, fill: '#a8352f' })}
      <path d="M18 ${y1 + 116} V${y2 - 116} M12 ${y1 + 116} H24 M12 ${y2 - 116} H24" stroke="#1f5f9f" stroke-width="1.6" fill="none"/>${lab(66, 222, 'diaphysis', 'تنه استخوان', { size: 10, fill: '#1f5f9f' })}
      <path d="M18 ${y2 - 60} V${y2} M12 ${y2 - 60} H24 M12 ${y2} H24" stroke="#a8352f" stroke-width="1.6" fill="none"/>${lab(66, y2 - 34, 'epiphysis', 'سر پایینی', { size: 10, fill: '#a8352f' })}
      ${pin(cx + 20, y1 + 6, 222, 46)}${lab(290, 42, 'articular cartilage', 'غضروف مفصلی', { size: 9.5 })}
      ${pin(cx + 16, y1 + 54, 222, 86)}${lab(290, 82, 'epiphyseal line', 'خط رشد (صفحه رشد بسته)', { size: 9.5 })}
      ${pin(cx + 10, y1 + 30, 222, 126)}${lab(290, 122, 'spongy bone', 'استخوان اسفنجی + مغز قرمز', { size: 9.5 })}
      ${pin(cx + sw / 2 - 1, y1 + 100, 222, 166)}${lab(290, 162, 'metaphysis', 'متافیز', { size: 9.5 })}
      ${pin(cx + sw / 2 - 3, 230, 222, 210)}${lab(290, 206, 'compact bone', 'استخوان متراکم (قشری)', { size: 9.5 })}
      ${pin(cx + 6, 250, 222, 252)}${lab(290, 248, 'medullary cavity', 'حفره مغزی: مغز زرد', { size: 9.5 })}
      ${pin(cx + sw / 2 + 1, 290, 222, 296)}${lab(290, 292, 'periosteum', 'ضریع: پوشش بیرونی', { size: 9.5 })}
      ${pin(cx - 18, y1 + 222, 222, 338)}${lab(290, 334, 'nutrient artery', 'سرخرگ تغذیه‌کننده', { size: 9.5 })}`,
      'آناتومی استخوان دراز', `${linear(g, C.compact, C.bone2)}${shadow(sh)}${sp1.d}${sp2.d}`);
  };

  /* استخوان متراکم و اسفنجی */
  A['bone-tissue'] = () => {
    const osteon = (cx, cy) => `${[22, 17, 12, 7].map((r, i) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${i % 2 ? C.compact : '#f5e8cc'}" stroke="${C.bone2}" stroke-width="1"/>`).join('')}<circle cx="${cx}" cy="${cy}" r="4" fill="#fff"/><circle cx="${cx - 1.5}" cy="${cy}" r="1.6" fill="${C.art}"/><circle cx="${cx + 1.5}" cy="${cy}" r="1.6" fill="${C.vein}"/>`;
    const clip = 'M200 40 H352 V176 H200 Z';
    const sp = spongy(clip, 200, 40, 152, 136, 21);
    let tr = '';
    const R = rng(4);
    for (let i = 0; i < 28; i++) { const x = 200 + R() * 152, y = 40 + R() * 136, a = R() * 180; tr += `<path d="M${(x - 14).toFixed(1)} ${y.toFixed(1)} h28" stroke="${C.bone}" stroke-width="5" stroke-linecap="round" transform="rotate(${a.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`; }
    return svg(360, 226, `${title('دو نوع بافت استخوان')}
      <rect x="8" y="40" width="160" height="136" rx="12" fill="${C.compact}"/>
      ${osteon(50, 82)}${osteon(110, 74)}${osteon(146, 128)}${osteon(64, 140)}
      ${sp.b}<g>${tr}</g><rect x="200" y="40" width="152" height="136" rx="12" fill="none" stroke="${C.bone2}" stroke-width="2"/>
      ${pin(110, 74, 96, 30, '#1f5f9f')}${t(100, 30, 'haversian canal', { size: 9.5, anchor: 'start', fill: '#1f5f9f' })}
      ${lab(88, 194, 'compact bone', 'متراکم: لایه بیرونی سخت (استئون‌ها)', { size: 10.5 })}
      ${lab(276, 194, 'cancellous (spongy) bone', 'اسفنجی: تیغه‌ها + مغز قرمز', { size: 10.5 })}`, 'استخوان متراکم و اسفنجی', sp.d);
  };

  /* پنج شکل استخوان */
  A['bone-shapes'] = () => {
    const lb = bone(52, 46, 152, 12, 13), g = nid();
    return svg(360, 244, `${title('پنج شکل استخوان')}
      <rect x="8" y="32" width="88" height="200" rx="14" fill="#f8efdc"/>${lb.b}${lab(52, 186, 'long', 'دراز: ران، بازو', { size: 10.5 })}
      <rect x="104" y="32" width="120" height="96" rx="14" fill="#eef6e6"/>
      <g fill="url(#${g})" stroke="${C.boneLine}" stroke-width="1.3"><rect x="126" y="50" width="22" height="20" rx="6"/><rect x="152" y="46" width="20" height="24" rx="6"/><rect x="176" y="52" width="24" height="18" rx="6"/></g>${lab(164, 92, 'short', 'کوتاه: مچ دست و پا', { size: 10.5 })}
      <rect x="232" y="32" width="120" height="96" rx="14" fill="#e6f0fb"/>
      <path d="M252 48 L320 44 C330 60 318 80 296 92 C286 76 266 62 252 48Z" fill="url(#${g})" stroke="${C.boneLine}" stroke-width="1.3"/>${lab(292, 106, 'flat', 'پهن: کتف، جناغ، جمجمه', { size: 10.5 })}
      <rect x="104" y="136" width="120" height="96" rx="14" fill="#fde8e6"/>
      <g fill="url(#${g})" stroke="${C.boneLine}" stroke-width="1.3"><ellipse cx="164" cy="168" rx="18" ry="12"/><path d="M152 176 L140 184 M176 176 L188 184 M164 180 V196" stroke-width="5" stroke="${C.boneLine}"/><path d="M152 176 L140 184 M176 176 L188 184 M164 180 V196" stroke-width="3" stroke="${C.bone}"/></g>${lab(164, 210, 'irregular', 'نامنظم: مهره', { size: 10.5 })}
      <rect x="232" y="136" width="120" height="96" rx="14" fill="#f3eafc"/>
      <ellipse cx="292" cy="170" rx="14" ry="18" fill="url(#${g})" stroke="${C.boneLine}" stroke-width="1.3"/><path d="M292 146 V152 M292 188 V196" stroke="${C.tendonLine}" stroke-width="6" stroke-linecap="round"/>${lab(292, 210, 'sesamoid', 'کنجدی: کشکک (در تاندون)', { size: 10.5 })}`,
      'شکل‌های استخوان', `${lb.d}${linear(g, C.boneHi, C.bone2)}`);
  };

  /* برجستگی‌ها و فرورفتگی‌های استخوان ران */
  A['bone-markings'] = () => {
    const g = nid(), sh = nid();
    const femur = `M120 60 C108 48 112 30 128 28 C144 26 152 40 146 52 L156 62 C170 58 184 56 196 56 C206 58 210 70 202 78 L188 86 C184 100 180 120 180 140 L178 252 C178 266 186 272 196 280 C206 292 200 310 186 312 C176 314 170 306 164 300 C158 306 150 314 138 312 C122 310 118 292 128 280 C138 272 146 266 146 252 L150 140 C150 112 146 92 138 80 C132 74 126 68 120 60Z`;
    return svg(360, 330, `${title('نشانه‌های استخوان ران: برجستگی‌ها')}
      <g filter="url(#${sh})"><path d="${femur}" fill="url(#${g})" stroke="${C.boneLine}" stroke-width="1.5"/></g>
      <path d="M134 74 C142 66 150 62 156 62" stroke="${C.boneLine}" stroke-width="1" fill="none"/>
      <path d="M182 108 q8 -2 10 6" stroke="${C.boneLine}" stroke-width="2" fill="none"/>
      ${pin(128, 40, 64, 40)}${lab(40, 36, 'head', 'سر', { size: 10 })}
      ${pin(140, 64, 64, 82)}${lab(40, 78, 'neck', 'گردن', { size: 10 })}
      ${pin(198, 64, 262, 52)}${lab(304, 48, 'greater trochanter', 'تروکانتر بزرگ', { size: 9.5 })}
      ${pin(186, 112, 262, 104)}${lab(304, 100, 'lesser trochanter', 'تروکانتر کوچک', { size: 9.5 })}
      ${pin(164, 190, 262, 170)}${lab(304, 166, 'shaft (diaphysis)', 'تنه', { size: 9.5 })}
      ${pin(194, 282, 262, 248)}${lab(304, 244, 'lateral epicondyle', 'اپی‌کندیل خارجی', { size: 9.5 })}
      ${pin(188, 304, 262, 296)}${lab(304, 292, 'lateral condyle', 'کندیل خارجی', { size: 9.5 })}
      ${pin(132, 300, 64, 300)}${lab(40, 296, 'medial condyle', 'کندیل داخلی', { size: 9.5 })}
      ${pin(130, 282, 64, 250)}${lab(40, 246, 'medial epicondyle', 'اپی‌کندیل داخلی', { size: 9.5 })}
      ${f(48, 150, 'فرورفتگی‌ها:', { size: 9.5, fill: INK, w: 800 })}${f(48, 166, 'foramen سوراخ', { size: 9 })}${f(48, 180, 'fossa گودی', { size: 9 })}${f(48, 194, 'fissure شکاف', { size: 9 })}${f(48, 208, 'sinus حفره هوایی', { size: 9 })}`,
      'نشانه‌های استخوان', `${linear(g, C.boneHi, C.bone2)}${shadow(sh)}`);
  };

  /* صفحه رشد: کودک در برابر بزرگسال */
  A['growth-plate'] = () => {
    const kid = bone(100, 44, 184, 22, 22), adult = bone(260, 40, 200, 24, 24);
    return svg(360, 246, `${title('صفحه رشد: کودک در برابر بزرگسال')}
      ${kid.b}${adult.b}
      <path d="M80 82 Q100 76 120 82" stroke="#3f7fbf" stroke-width="5" fill="none"/><path d="M80 146 Q100 152 120 146" stroke="#3f7fbf" stroke-width="5" fill="none"/>
      <path d="M238 82 Q260 76 282 82" stroke="${C.boneLine}" stroke-width="1.6" stroke-dasharray="3 2" fill="none"/><path d="M238 158 Q260 164 282 158" stroke="${C.boneLine}" stroke-width="1.6" stroke-dasharray="3 2" fill="none"/>
      ${pin(118, 82, 150, 70, '#3f7fbf')}${t(152, 66, 'epiphyseal plate', { size: 9.5, anchor: 'start', fill: '#1f5f9f' })}
      ${pin(280, 82, 300, 40)}${t(300, 34, 'epiphyseal line', { size: 9.5, anchor: 'middle', fill: '#8a5a20' })}
      ${lab(100, 210, 'child', 'کودک: صفحه غضروفی باز؛ استخوان دراز می‌شود', { size: 10.5, fill: '#1f5f9f' })}
      ${lab(260, 226, 'adult', 'بزرگسال: صفحه بسته و استخوانی شده', { size: 10.5 })}`, 'صفحه رشد', `${kid.d}${adult.d}`);
  };

  /* پوکی استخوان: سه درجه */
  A.osteoporosis = () => {
    const panel = (cx, n, w, col, en, fa, c) => {
      const R = rng(n * 7), id = nid();
      let s = '';
      for (let i = 0; i < n; i++) { const x = cx - 46 + R() * 92, y = 46 + R() * 92, a = R() * 180; s += `<path d="M${(x - 12).toFixed(1)} ${y.toFixed(1)} h24" stroke="${col}" stroke-width="${w}" stroke-linecap="round" transform="rotate(${a.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`; }
      return { d: `<clipPath id="${id}"><circle cx="${cx}" cy="92" r="50"/></clipPath>`, b: `<circle cx="${cx}" cy="92" r="52" fill="#fbe9e4" stroke="${C.boneLine}" stroke-width="2"/><g clip-path="url(#${id})">${s}</g>${lab(cx, 166, en, fa, { size: 10.5, fill: c })}` };
    };
    const p1 = panel(62, 70, 6, C.bone2, 'normal', 'تیغه‌های ضخیم', '#3f8a05'), p2 = panel(180, 42, 4, C.bone2, 'osteopenia', 'کمی کم‌توده', '#a36b00'), p3 = panel(298, 22, 2.6, C.bone2, 'osteoporosis', 'سوراخ‌سوراخ و شکننده', '#a8352f');
    return svg(360, 200, `${title('از استخوان سالم تا پوکی استخوان (بزرگ‌نمایی استخوان اسفنجی)')}${p1.b}${p2.b}${p3.b}
      ${f(180, 194, 'تشخیص با سنجش تراکم استخوان (DXA) و عدد T-score', { size: 9.5 })}`, 'پوکی استخوان', p1.d + p2.d + p3.d);
  };

  /* ================= دنیای ۲: اسکلت ================= */
  /** اسکلت کامل از روبه‌رو؛ محوری عاجی، ضمیمه‌ای آبی کم‌رنگ */
  function skeleton(cx, top, o) {
    const p = o || {};
    const ax = p.mono ? C.bone : C.axial, axL = C.boneLine, ap = p.mono ? C.bone : C.app, apL = p.mono ? C.boneLine : C.appLine;
    const X = d => cx + d, Y = d => top + d;
    let s = '';
    /* جمجمه و فک */
    s += `<ellipse cx="${X(0)}" cy="${Y(26)}" rx="23" ry="26" fill="${ax}" stroke="${axL}" stroke-width="1.3"/>`;
    s += `<path d="M${X(-15)} ${Y(40)} Q${X(-16)} ${Y(62)} ${X(0)} ${Y(64)} Q${X(16)} ${Y(62)} ${X(15)} ${Y(40)}" fill="${ax}" stroke="${axL}" stroke-width="1.3"/>`;
    s += `<ellipse cx="${X(-9)}" cy="${Y(28)}" rx="6" ry="7" fill="#5a4630"/><ellipse cx="${X(9)}" cy="${Y(28)}" rx="6" ry="7" fill="#5a4630"/><path d="M${X(0)} ${Y(36)} l-3 7 h6z" fill="#5a4630"/>`;
    s += `<path d="M${X(-9)} ${Y(52)} H${X(9)}" stroke="${axL}" stroke-width="1" stroke-dasharray="2 1.5"/>`;
    /* ستون مهره */
    for (let i = 0; i < 24; i++) { const y = Y(68 + i * 6.4); const w = 6 + Math.min(i, 18) * 0.25; s += `<rect x="${(X(-w / 2)).toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="5" rx="1.6" fill="${ax}" stroke="${axL}" stroke-width=".8"/>`; }
    /* دنده‌ها و جناغ */
    for (let i = 0; i < 10; i++) {
      const y = Y(86 + i * 7.2), wd = 30 + Math.sin(Math.min(i, 7) / 7 * Math.PI * 0.8) * 10 - (i > 7 ? (i - 7) * 6 : 0);
      [-1, 1].forEach(sg => { s += `<path d="M${X(sg * 4)} ${y} C${X(sg * (wd + 2))} ${y - 4} ${X(sg * (wd + 6))} ${y + 10} ${X(sg * (wd - 2))} ${y + 16}" stroke="${axL}" stroke-width="3.6" fill="none" stroke-linecap="round"/><path d="M${X(sg * 4)} ${y} C${X(sg * (wd + 2))} ${y - 4} ${X(sg * (wd + 6))} ${y + 10} ${X(sg * (wd - 2))} ${y + 16}" stroke="${ax}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`; });
    }
    s += `<rect x="${X(-4.5)}" y="${Y(80)}" width="9" height="52" rx="4" fill="${ax}" stroke="${axL}" stroke-width="1.1"/>`;
    /* لگن و خاجی */
    const pel = `M${X(0)} ${Y(222)} C${X(-14)} ${Y(212)} ${X(-34)} ${Y(208)} ${X(-40)} ${Y(222)} C${X(-44)} ${Y(238)} ${X(-34)} ${Y(254)} ${X(-20)} ${Y(258)} C${X(-12)} ${Y(260)} ${X(-6)} ${Y(254)} ${X(0)} ${Y(254)} C${X(6)} ${Y(254)} ${X(12)} ${Y(260)} ${X(20)} ${Y(258)} C${X(34)} ${Y(254)} ${X(44)} ${Y(238)} ${X(40)} ${Y(222)} C${X(34)} ${Y(208)} ${X(14)} ${Y(212)} ${X(0)} ${Y(222)}Z`;
    s += `<path d="${pel}" fill="${ap}" stroke="${apL}" stroke-width="1.3"/><ellipse cx="${X(-15)}" cy="${Y(246)}" rx="6" ry="5" fill="#fff"/><ellipse cx="${X(15)}" cy="${Y(246)}" rx="6" ry="5" fill="#fff"/>`;
    s += `<path d="M${X(-9)} ${Y(222)} L${X(9)} ${Y(222)} L${X(0)} ${Y(246)}Z" fill="${ax}" stroke="${axL}" stroke-width="1.1"/>`;
    /* اندام‌ها (قرینه) */
    [-1, 1].forEach(sg => {
      const x = d => X(sg * d);
      s += limb(x(5), Y(76), x(34), Y(72), 4, ap, apL);                       /* ترقوه */
      s += knob(x(38), Y(78), 6, ap, apL);
      s += limb(x(40), Y(82), x(50), Y(150), 6, ap, apL);                     /* بازو */
      s += limb(x(50), Y(154), x(58), Y(214), 3.4, ap, apL) + limb(x(54), Y(154), x(63), Y(212), 3.4, ap, apL); /* زند زبرین و زیرین */
      s += `<ellipse cx="${x(61)}" cy="${Y(220)}" rx="6" ry="5" fill="${ap}" stroke="${apL}" stroke-width="1"/>`; /* مچ */
      [0, 1, 2, 3].forEach(k => { s += limb(x(57 + k * 3), Y(225), x(56 + k * 4.4), Y(246), 1.8, ap, apL); });
      s += limb(x(55), Y(224), x(50), Y(236), 1.8, ap, apL);
      s += knob(x(19), Y(258), 6.5, ap, apL);
      s += limb(x(20), Y(262), x(24), Y(344), 7, ap, apL);                    /* ران */
      s += `<ellipse cx="${x(24)}" cy="${Y(350)}" rx="5.5" ry="6.5" fill="${ap}" stroke="${apL}" stroke-width="1.1"/>`; /* کشکک */
      s += limb(x(23), Y(358), x(22), Y(436), 5.5, ap, apL) + limb(x(30), Y(360), x(30), Y(434), 2.4, ap, apL); /* درشت‌نی و نازک‌نی */
      s += `<path d="M${x(18)} ${Y(440)} L${x(34)} ${Y(440)} L${x(38)} ${Y(452)} L${x(14)} ${Y(452)}Z" fill="${ap}" stroke="${apL}" stroke-width="1.1" stroke-linejoin="round"/>`;
    });
    return s;
  }
  A.skeleton = () => {
    const cx = 180, top = 26;
    const L = (x1, y1, x2, y2, en, fa, side) => `${pin(x1, y1, x2, y2)}${lab(side < 0 ? x2 - 4 : x2 + 4, y2 - 3, en, fa, { size: 9.5, anchor: side < 0 ? 'end' : 'start' })}`;
    return svg(360, 500, `${title('اسکلت: ۲۰۶ استخوان (محوری و ضمیمه‌ای)')}${skeleton(cx, top)}
      ${L(160, 50, 84, 46, 'cranium', 'جمجمه', -1)}${L(172, 84, 84, 88, 'mandible', 'فک پایین', -1)}
      ${L(150, 101, 84, 126, 'clavicle', 'ترقوه', -1)}${L(132, 140, 84, 170, 'humerus', 'استخوان بازو', -1)}
      ${L(125, 210, 84, 214, 'radius / ulna', 'زند زبرین و زیرین', -1)}${L(119, 246, 84, 256, 'carpals', 'مچ دست', -1)}
      ${L(122, 268, 84, 296, 'phalanges', 'بندهای انگشت', -1)}${L(158, 320, 84, 338, 'femur', 'استخوان ران', -1)}
      ${L(156, 376, 84, 380, 'patella', 'کشکک', -1)}${L(158, 420, 84, 422, 'tibia', 'درشت‌نی', -1)}
      ${L(206, 120, 276, 100, 'sternum', 'جناغ', 1)}${L(214, 142, 276, 142, 'ribs', 'دنده‌ها', 1)}
      ${L(180, 184, 276, 184, 'vertebral column', 'ستون مهره', 1)}${L(214, 266, 276, 226, 'pelvis', 'لگن', 1)}
      ${L(180, 262, 276, 268, 'sacrum', 'استخوان خاجی', 1)}${L(210, 420, 276, 404, 'fibula', 'نازک‌نی', 1)}
      ${L(206, 472, 276, 452, 'tarsals', 'مچ پا', 1)}
      <rect x="112" y="476" width="12" height="10" rx="3" fill="${C.axial}" stroke="${C.axialLine}"/>${f(130, 485, 'محوری (۸۰)', { size: 9, anchor: 'start', fill: INK })}
      <rect x="206" y="476" width="12" height="10" rx="3" fill="${C.app}" stroke="${C.appLine}"/>${f(224, 485, 'ضمیمه‌ای (۱۲۶)', { size: 9, anchor: 'start', fill: INK })}`, 'اسکلت انسان');
  };

  /* جمجمه از نیم‌رخ */
  A.skull = () => {
    const cl = nid(), sh = nid();
    const out = 'M86 150 C70 110 92 52 160 40 C230 30 292 64 298 124 C302 156 288 180 268 192 L250 200 L236 196 L226 214 L176 214 L160 236 L118 236 C106 222 104 206 98 196 L84 192 C76 186 80 174 86 168 Z';
    const reg = (d, c) => `<path d="${d}" fill="${c}" stroke="#8a7a5c" stroke-width="1.1" stroke-linejoin="round"/>`;
    return svg(360, 290, `${title('جمجمه از نیم‌رخ: استخوان‌های سر و صورت')}
      <g filter="url(#${sh})"><path d="${out}" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.6"/></g>
      <g clip-path="url(#${cl})">
        ${reg('M60 30 H170 L178 92 L150 126 L132 140 L60 150Z', '#f6c9a8')}
        ${reg('M170 30 H262 L252 120 L188 124 L178 92Z', '#cfe3f5')}
        ${reg('M262 30 H320 V220 L252 196 L252 120Z', '#d8ecc8')}
        ${reg('M188 124 L252 120 L252 196 L226 200 L200 178 L186 150Z', '#f6e3a0')}
        ${reg('M150 126 L178 92 L188 124 L186 150 L166 158 L148 148Z', '#e3cdf3')}
      </g>
      <ellipse cx="128" cy="118" rx="22" ry="20" fill="#4d3e2a"/>
      ${reg('M100 140 C120 132 150 140 164 160 C150 176 120 178 106 168 Z', '#f8d7d7')}
      ${reg('M150 146 C170 150 186 160 190 176 C178 186 160 180 150 172Z', '#fbe0c0')}
      ${reg('M96 152 L104 150 L110 166 L100 168Z', '#c9e6e0')}
      ${reg('M104 196 C106 208 112 222 120 236 L160 236 L176 214 L226 214 L236 196 L230 186 C220 200 196 202 176 200 L150 204 L118 200Z', '#f2b9b0')}
      <path d="M118 196 v12 M130 198 v12 M142 199 v12 M154 200 v12" stroke="#fff" stroke-width="4"/>
      <circle cx="246" cy="164" r="7" fill="#4d3e2a"/>
      <path d="M178 92 L188 124 M170 30 L178 92 M252 120 L262 30" stroke="#8a7a5c" stroke-width="1.4" stroke-dasharray="3 2" fill="none"/>
      ${pin(120, 70, 50, 56)}${lab(40, 44, 'frontal', 'پیشانی', { size: 9.5 })}
      ${pin(214, 66, 214, 30)}${t(240, 32, 'parietal • آهیانه', { size: 9.5 })}
      ${pin(282, 120, 322, 92)}${lab(330, 74, 'occipital', 'پس‌سری', { size: 9.5 })}
      ${pin(226, 156, 322, 150)}${lab(330, 132, 'temporal', 'گیجگاهی', { size: 9.5 })}
      ${pin(166, 132, 210, 100)}${t(212, 98, 'sphenoid', { size: 9, anchor: 'start' })}
      ${pin(100, 158, 40, 150)}${lab(36, 130, 'nasal', 'بینی', { size: 9.5 })}
      ${pin(120, 160, 40, 196)}${lab(36, 178, 'maxilla', 'فک بالا', { size: 9.5 })}
      ${pin(172, 170, 220, 252)}${lab(244, 258, 'zygomatic', 'گونه', { size: 9.5 })}
      ${pin(140, 226, 100, 262)}${lab(80, 266, 'mandible', 'فک پایین (متحرک)', { size: 9.5 })}
      ${pin(178, 92, 230, 76, '#8a7a5c')}${t(232, 80, 'suture', { size: 9, anchor: 'start', fill: '#8a7a5c' })}
      ${f(312, 210, 'سوراخ گوش', { size: 8.5 })}`, 'جمجمه', `<clipPath id="${cl}"><path d="${out}"/></clipPath>${shadow(sh)}`);
  };

  /* ستون مهره از نیم‌رخ */
  A.spine = () => {
    const reg = [['C', 7, '#f6c453', 'cervical', 'گردنی', 'C1–C7'], ['T', 12, '#7fb2e5', 'thoracic', 'سینه‌ای', 'T1–T12'], ['L', 5, '#8fd18a', 'lumbar', 'کمری', 'L1–L5']];
    const xAt = y => 170 + 18 * Math.sin((y - 40) / 360 * Math.PI * 2.1 + 0.4);
    let y = 40, s = '', labels = '';
    reg.forEach((r, ri) => {
      const y0 = y;
      for (let i = 0; i < r[1]; i++) {
        const h = ri === 0 ? 8 : ri === 1 ? 10 : 14, w = ri === 0 ? 16 : ri === 1 ? 20 : 26;
        const x = xAt(y + h / 2);
        s += `<rect x="${(x - w / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${w}" height="${h}" rx="3" fill="${r[2]}" stroke="#6b5a3a" stroke-width=".9"/><path d="M${(x + w / 2).toFixed(1)} ${(y + h / 2).toFixed(1)} l${ri === 2 ? 12 : 9} ${ri === 1 ? 5 : 2}" stroke="${r[2]}" stroke-width="${ri === 2 ? 6 : 4}" stroke-linecap="round"/>`;
        y += h + 2.4;
      }
      labels += `<path d="M232 ${y0} h6 V${y - 3} h-6" stroke="#6b5a3a" stroke-width="1.3" fill="none"/>${lab(246, (y0 + y) / 2 - 6, `${r[3]} (${r[5]})`, `${r[4]}: ${EA.fa ? EA.fa(r[1]) : r[1]} مهره`, { size: 10, anchor: 'start' })}`;
    });
    const sx = xAt(y + 20);
    s += `<path d="M${sx - 16} ${y} L${sx + 16} ${y + 4} L${sx + 4} ${y + 52} Z" fill="#c9a8ea" stroke="#6b5a3a" stroke-width="1"/>`;
    s += `<path d="M${sx + 2} ${y + 54} q2 10 -4 18" stroke="#f2a4b8" stroke-width="7" stroke-linecap="round" fill="none"/>`;
    labels += `${pin(sx, y + 22, 238, y + 22)}${lab(246, y + 18, 'sacrum', 'خاجی: ۵ مهره جوش‌خورده', { size: 10, anchor: 'start' })}${pin(sx - 1, y + 66, 238, y + 70)}${lab(246, y + 66, 'coccyx', 'دنبالچه', { size: 10, anchor: 'start' })}`;
    return svg(360, y + 100, `${title('ستون مهره: ۲۶ استخوان از نیم‌رخ')}${s}${labels}
      ${f(70, 76, 'قوس گردنی ↶', { size: 9 })}${f(70, 170, 'قوس سینه‌ای ↷', { size: 9 })}${f(70, 268, 'قوس کمری ↶', { size: 9 })}
      ${pin(170, 46, 110, 40)}${t(108, 44, 'atlas C1', { size: 9, anchor: 'end' })}${pin(171, 57, 110, 56)}${t(108, 60, 'axis C2', { size: 9, anchor: 'end' })}
      ${f(90, y + 92, 'جلو (anterior) ← • → پشت (posterior)', { size: 9 })}`, 'ستون مهره');
  };

  /* مهره از بالا */
  A.vertebra = () => {
    const sh = nid(), g = nid();
    return svg(360, 250, `${title('یک مهره کمری از بالا')}
      <g filter="url(#${sh})" fill="url(#${g})" stroke="${C.boneLine}" stroke-width="1.5">
        <path d="M180 132 L150 142 L104 132 C96 128 96 120 104 118 L146 120 L156 106 L170 96 C176 92 184 92 190 96 L204 106 L214 120 L256 118 C264 120 264 128 256 132 L210 142 L180 132Z"/>
        <path d="M168 104 L174 60 C176 52 184 52 186 60 L192 104 Z"/>
        <ellipse cx="180" cy="190" rx="62" ry="44"/>
        <path d="M150 150 C146 160 148 170 152 176 M210 150 C214 160 212 170 208 176" stroke-width="10" stroke="${C.boneLine}" fill="none"/>
        <path d="M150 150 C146 160 148 170 152 176 M210 150 C214 160 212 170 208 176" stroke-width="7.5" stroke="${C.bone}" fill="none"/>
      </g>
      <ellipse cx="180" cy="134" rx="24" ry="20" fill="#fff" stroke="${C.boneLine}" stroke-width="1.2"/>
      <ellipse cx="180" cy="134" rx="13" ry="11" fill="#f6d36a" stroke="#c99a1d" stroke-width="1.2"/>
      ${pin(180, 74, 250, 52)}${lab(296, 48, 'spinous process', 'زائده خاری (پشت)', { size: 9.5 })}
      ${pin(250, 124, 300, 150)}${lab(312, 146, 'transverse process', 'زائده عرضی', { size: 9.5 })}
      ${pin(198, 108, 252, 80)}${t(254, 84, 'lamina', { size: 9.5, anchor: 'start' })}
      ${pin(180, 134, 90, 72)}${lab(70, 54, 'vertebral foramen', 'سوراخ مهره (محل نخاع)', { size: 9.5 })}
      ${pin(152, 164, 74, 150)}${lab(56, 136, 'pedicle', 'پایه مهره', { size: 9.5 })}
      ${pin(180, 206, 290, 206)}${lab(312, 198, 'vertebral body', 'تنه مهره (جلو)', { size: 9.5 })}
      ${f(180, 246, 'نخاع از سوراخ مهره می‌گذرد؛ لامینکتومی یعنی برداشتن لامینا برای آزاد کردن آن', { size: 9 })}`,
      'مهره', `${shadow(sh)}${linear(g, C.boneHi, C.bone2, true)}`);
  };

  /* دیسک سالم و فتق دیسک */
  A['disk-herniation'] = () => {
    const disk = (cx, hern) => `<ellipse cx="${cx}" cy="110" rx="62" ry="50" fill="#e9eef6" stroke="#7a8ea8" stroke-width="2"/>
      ${[52, 44, 36].map(r => `<ellipse cx="${cx}" cy="110" rx="${r}" ry="${r * 0.8}" fill="none" stroke="#b9c6d8" stroke-width="1.4"/>`).join('')}
      ${hern ? `<path d="M${cx - 10} 104 C${cx} 98 ${cx + 20} 106 ${cx + 26} 130 C${cx + 30} 148 ${cx + 30} 162 ${cx + 22} 172 C${cx + 12} 166 ${cx + 10} 150 ${cx + 6} 134 C${cx - 6} 128 ${cx - 16} 118 ${cx - 10} 104Z" fill="#7cc3f0" stroke="#2f7fbf" stroke-width="1.4"/>` : `<ellipse cx="${cx}" cy="108" rx="20" ry="15" fill="#7cc3f0" stroke="#2f7fbf" stroke-width="1.4"/>`}
      <path d="M${cx - 30} 176 C${cx - 22} 168 ${cx + 22} 168 ${cx + 30} 176 L${cx + 26} 196 H${cx - 26}Z" fill="${C.bone}" stroke="${C.boneLine}"/>
      <ellipse cx="${cx}" cy="186" rx="12" ry="8" fill="#f6d36a" stroke="#c99a1d"/>
      <path d="M${cx + 10} 186 C${cx + 26} 186 ${cx + 40} 194 ${cx + 56} 206" stroke="${C.nerve}" stroke-width="5" fill="none" stroke-linecap="round"/>
      ${hern ? `<circle cx="${cx + 30}" cy="190" r="10" fill="none" stroke="#c2413a" stroke-width="2.4" stroke-dasharray="3 2"/>` : ''}`;
    return svg(360, 262, `${title('دیسک بین‌مهره‌ای: سالم و فتق‌شده (نمای بالا)')}
      ${disk(90, false)}${disk(266, true)}
      ${pin(90, 108, 46, 40)}${lab(56, 32, 'nucleus pulposus', 'هسته ژلاتینی', { size: 9.5 })}
      ${pin(140, 96, 150, 40)}${lab(170, 32, 'annulus fibrosus', 'حلقه فیبری', { size: 9.5 })}
      ${pin(272, 140, 320, 46)}${t(316, 42, 'HNP', { size: 11, sym: true, fill: '#a8352f' })}
      ${lab(90, 226, 'normal disk', 'دیسک سالم', { size: 10.5, fill: '#1f5f9f' })}
      ${lab(266, 226, 'herniated disk', 'هسته بیرون زده و ریشه عصب را فشار می‌دهد', { size: 10.5, fill: '#a8352f' })}`, 'فتق دیسک');
  };

  /* قفسه سینه */
  A.ribcage = () => {
    let r = '';
    for (let i = 0; i < 12; i++) {
      const y = 62 + i * 15, w = 52 + Math.sin(Math.min(i, 8) / 8 * Math.PI * 0.75) * 46 - (i > 8 ? (i - 8) * 14 : 0);
      const c = i < 7 ? '#f3dfb0' : i < 10 ? '#cfe3f5' : '#f6c9c4';
      const line = i < 7 ? C.boneLine : i < 10 ? C.appLine : '#c97a72';
      [-1, 1].forEach(sg => {
        const x0 = 180 + sg * 8, xe = 180 + sg * (i < 7 ? 22 : i < 10 ? 30 + (i - 7) * 2 : w - 8);
        r += `<path d="M${x0} ${y - 6} C${180 + sg * (w + 14)} ${y - 18} ${180 + sg * (w + 10)} ${y + 24} ${xe} ${y + 18 + (i > 9 ? -6 : 0)}" stroke="${line}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M${x0} ${y - 6} C${180 + sg * (w + 14)} ${y - 18} ${180 + sg * (w + 10)} ${y + 24} ${xe} ${y + 18 + (i > 9 ? -6 : 0)}" stroke="${c}" stroke-width="4.8" fill="none" stroke-linecap="round"/>`;
        if (i < 10) r += `<path d="M${xe} ${y + 18} L${180 + sg * (i < 7 ? 12 : 16)} ${i < 7 ? y + 14 : 168 + (i - 7) * 2}" stroke="${C.cart}" stroke-width="4" stroke-linecap="round"/>`;
      });
    }
    return svg(360, 300, `${title('قفسه سینه: جناغ و ۱۲ جفت دنده')}
      <rect x="174" y="44" width="12" height="232" rx="4" fill="${C.bone2}" opacity=".5"/>
      ${r}
      <path d="M168 50 H192 L188 76 H172Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3"/>
      <rect x="171" y="78" width="18" height="86" rx="6" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3"/>
      <path d="M174 166 H186 L180 184Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3"/>
      ${pin(192, 58, 300, 40)}${lab(320, 36, 'manubrium', 'دسته جناغ', { size: 9.5 })}
      ${pin(189, 120, 300, 80)}${lab(320, 76, 'sternum (body)', 'تنه جناغ', { size: 9.5 })}
      ${pin(182, 180, 300, 196)}${lab(320, 192, 'xiphoid process', 'زائده خنجری', { size: 9.5 })}
      ${pin(207, 105, 300, 128)}${lab(320, 124, 'costal cartilage', 'غضروف دنده‌ای', { size: 9.5, fill: '#1f6f9f' })}
      ${lab(8, 90, 'true ribs 1–7', 'حقیقی: مستقیم به جناغ', { size: 9.5, fill: '#8a6a2c', anchor: 'start' })}
      ${lab(8, 196, 'false ribs 8–12', 'دنده‌های کاذب', { size: 9.5, fill: '#1f5f9f', anchor: 'start' })}
      ${lab(8, 250, 'floating ribs 11–12', 'شناور: بی‌اتصال به جناغ', { size: 9.5, fill: '#a8352f', anchor: 'start' })}`, 'قفسه سینه');
  };

  /* استخوان‌های اندام فوقانی */
  A['arm-bones'] = () => {
    const hu = bone(150, 64, 210, 16, 15), ra = bone(140, 214, 330, 9, 9, { rot: -3 }), ul = bone(168, 208, 326, 9, 10, { rot: 3 });
    let hand = '';
    [[132, 344], [146, 340], [160, 340], [174, 344]].forEach(p => { hand += `<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="${C.bone}" stroke="${C.boneLine}"/>`; });
    [[122, 352, 112, 384], [136, 352, 132, 392], [150, 352, 150, 396], [164, 352, 168, 394], [178, 352, 186, 386]].forEach((q, i) => { hand += limb(q[0], q[1], q[2], q[3], 4.2, C.bone, C.boneLine) + limb(q[2], q[3] + 4, q[2] + (i ? (i - 2) * 2 : -8), q[3] + (i ? 30 : 18), 3.4, C.bone, C.boneLine); });
    return svg(360, 440, `${title('استخوان‌های شانه، بازو، ساعد و دست')}
      <path d="M116 46 C140 38 172 40 196 52" stroke="${C.boneLine}" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M116 46 C140 38 172 40 196 52" stroke="${C.bone}" stroke-width="6.5" fill="none" stroke-linecap="round"/>
      <path d="M186 50 L236 60 L222 132 Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3" stroke-linejoin="round" opacity=".9"/>
      <path d="M182 54 C196 46 208 50 212 58" stroke="${C.boneLine}" stroke-width="5" fill="none" stroke-linecap="round"/>
      ${hu.b}${ra.b}${ul.b}${hand}
      <path d="M160 208 C164 196 176 196 178 206" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.2"/>
      ${pin(120, 46, 60, 40)}${lab(46, 36, 'clavicle', 'ترقوه', { size: 9.5 })}
      ${pin(226, 92, 290, 92)}${lab(312, 88, 'scapula', 'کتف', { size: 9.5 })}
      ${pin(206, 56, 290, 46)}${lab(312, 42, 'acromion', 'نوک شانه', { size: 9.5 })}
      ${pin(150, 140, 60, 140)}${lab(40, 136, 'humerus', 'بازو', { size: 9.5 })}
      ${pin(172, 206, 290, 196)}${lab(312, 192, 'olecranon', 'زائده آرنج', { size: 9.5 })}
      ${pin(138, 272, 60, 272)}${lab(40, 262, 'radius', 'زند زبرین (شست)', { size: 9.5 })}
      ${pin(170, 268, 290, 268)}${lab(318, 264, 'ulna', 'زند زیرین', { size: 9.5 })}
      ${pin(174, 344, 290, 336)}${lab(312, 332, 'carpals (8)', 'مچ دست', { size: 9.5 })}
      ${pin(136, 372, 60, 360)}${lab(40, 356, 'metacarpals (5)', 'کف دست', { size: 9.5 })}
      ${pin(170, 410, 290, 404)}${lab(312, 400, 'phalanges (14)', 'بندهای انگشت', { size: 9.5 })}`, 'استخوان‌های اندام فوقانی', hu.d + ra.d + ul.d);
  };

  /* لگن از روبه‌رو */
  A.pelvis = () => {
    const sh = nid();
    return svg(360, 280, `${title('لگن: تهیگاه، نشیمنگاهی و شرمگاهی')}
      <g filter="url(#${sh})" stroke="${C.boneLine}" stroke-width="1.4" stroke-linejoin="round">
        <path d="M168 70 C140 44 92 40 66 60 C50 74 56 104 70 126 C82 144 100 152 116 160 L150 130 C156 110 160 90 168 70Z" fill="#f6c9a8"/>
        <path d="M192 70 C220 44 268 40 294 60 C310 74 304 104 290 126 C278 144 260 152 244 160 L210 130 C204 110 200 90 192 70Z" fill="#f6c9a8"/>
        <path d="M116 160 C108 176 104 196 112 214 C120 230 140 232 150 222 L146 196Z" fill="#cfe3f5"/>
        <path d="M244 160 C252 176 256 196 248 214 C240 230 220 232 210 222 L214 196Z" fill="#cfe3f5"/>
        <path d="M150 130 C160 150 168 170 176 186 L176 214 L150 222 L146 196 C150 180 150 160 150 130Z" fill="#d8ecc8"/>
        <path d="M210 130 C200 150 192 170 184 186 L184 214 L210 222 L214 196 C210 180 210 160 210 130Z" fill="#d8ecc8"/>
        <path d="M164 70 L196 70 L194 118 L180 138 L166 118Z" fill="#e3cdf3"/>
      </g>
      <ellipse cx="128" cy="168" rx="17" ry="16" fill="#8a6a3c" opacity=".35"/><ellipse cx="232" cy="168" rx="17" ry="16" fill="#8a6a3c" opacity=".35"/>
      <ellipse cx="150" cy="200" rx="10" ry="14" fill="#fff"/><ellipse cx="210" cy="200" rx="10" ry="14" fill="#fff"/>
      <rect x="176" y="186" width="8" height="30" rx="3" fill="${C.cart}" stroke="${C.cartLine}"/>
      <path d="M180 140 q2 10 -2 16" stroke="#f2a4b8" stroke-width="6" stroke-linecap="round" fill="none"/>
      ${pin(90, 80, 40, 60)}${lab(36, 44, 'ilium', 'تهیگاه', { size: 9.5 })}
      ${pin(180, 92, 180, 34)}${t(212, 36, 'sacrum • خاجی', { size: 9.5 })}
      ${pin(128, 168, 46, 150)}${lab(40, 132, 'acetabulum', 'کاسه مفصل ران', { size: 9.5 })}
      ${pin(118, 214, 48, 228)}${lab(42, 244, 'ischium', 'نشیمنگاهی', { size: 9.5 })}
      ${pin(164, 182, 300, 196)}${lab(318, 178, 'pubis', 'شرمگاهی', { size: 9.5 })}
      ${pin(180, 210, 290, 248)}${lab(306, 244, 'pubic symphysis', 'سمفیز (غضروفی)', { size: 9.5 })}
      ${pin(246, 120, 300, 112)}${lab(318, 94, 'iliac crest', 'ستیغ تهیگاه', { size: 9.5 })}`, 'لگن', shadow(sh));
  };

  /* استخوان‌های اندام تحتانی */
  A['leg-bones'] = () => {
    const fe = bone(150, 40, 214, 18, 17, { rot: 4 }), ti = bone(150, 236, 392, 15, 16), fi = bone(178, 242, 388, 6, 7);
    return svg(360, 460, `${title('استخوان‌های ران، ساق و پا')}
      ${fe.b}${ti.b}${fi.b}
      <ellipse cx="160" cy="222" rx="11" ry="13" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.4"/>
      <path d="M118 410 C118 398 140 394 160 400 L176 404 C190 404 194 418 186 424 L130 428 C118 428 114 420 118 410Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3"/>
      <path d="M118 420 C110 420 106 430 116 434 L134 432" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3"/>
      ${[0, 1, 2, 3, 4].map(i => limb(176 + i * 2, 406 + i * 4, 214 + i * 2, 410 + i * 6, 3.4, C.bone, C.boneLine) + limb(218 + i * 2, 410 + i * 6, 234 + i, 412 + i * 7, 3, C.bone, C.boneLine)).join('')}
      ${pin(150, 48, 60, 48)}${lab(40, 44, 'femur', 'استخوان ران', { size: 9.5 })}
      ${pin(162, 222, 290, 210)}${lab(312, 206, 'patella', 'کشکک', { size: 9.5 })}
      ${pin(148, 320, 60, 320)}${lab(40, 316, 'tibia', 'درشت‌نی', { size: 9.5 })}
      ${pin(178, 316, 290, 300)}${lab(312, 296, 'fibula', 'نازک‌نی', { size: 9.5 })}
      ${pin(184, 384, 290, 358)}${lab(312, 354, 'lateral malleolus', 'قوزک خارجی', { size: 9.5 })}
      ${pin(140, 386, 60, 370)}${lab(40, 366, 'medial malleolus', 'قوزک داخلی', { size: 9.5 })}
      ${pin(118, 428, 60, 430)}${lab(40, 426, 'calcaneus', 'پاشنه', { size: 9.5 })}
      ${pin(150, 404, 140, 452)}${t(108, 452, 'tarsals • مچ پا', { size: 9.5 })}
      ${pin(204, 416, 290, 410)}${lab(312, 406, 'metatarsals', 'کف پا', { size: 9.5 })}
      ${pin(236, 424, 290, 446)}${lab(312, 442, 'phalanges', 'انگشتان', { size: 9.5 })}`, 'استخوان‌های اندام تحتانی', fe.d + ti.d + fi.d);
  };

  /* انحناهای غیرطبیعی ستون مهره */
  A['spine-curves'] = () => {
    const fig = (x, d, en, fa, c, back) => `<ellipse cx="${x + (back ? 0 : 4)}" cy="46" rx="13" ry="15" fill="${C.skin}" stroke="${C.skinLine}"/>
      <path d="${d}" stroke="${C.boneLine}" stroke-width="9" fill="none" stroke-linecap="round"/><path d="${d}" stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="5 1.6"/>
      ${lab(x, 206, en, fa, { size: 10, fill: INK })}`;
    return svg(360, 252, `${title('انحناهای ستون مهره: طبیعی و غیرطبیعی')}
      ${fig(46, 'M48 64 C40 90 54 110 52 130 C50 150 40 162 46 186', 'normal', 'طبیعی (نیم‌رخ)', '#e3cc9c')}
      ${fig(134, 'M136 64 C126 80 160 110 150 140 C144 160 128 168 134 186', 'kyphosis', 'قوز پشت', '#7fb2e5')}
      ${fig(222, 'M224 64 C216 90 232 112 230 126 C228 150 206 162 222 186', 'lordosis', 'گودی کمر', '#8fd18a')}
      ${fig(310, 'M310 64 C330 90 290 110 300 134 C308 152 324 164 310 186', 'scoliosis', 'انحراف جانبی (پشت)', '#f2a4b8', true)}
      ${f(180, 246, 'kyph/o = قوز • lord/o = خمیده به عقب • scoli/o = کج', { size: 9.5, fill: MUTED })}`, 'انحناهای ستون مهره');
  };

  /* ================= دنیای ۳: مفاصل و حرکت ================= */
  /* سه نوع مفصل از نظر حرکت و بافت */
  A['joint-types'] = () => {
    const p1 = `<path d="M18 70 C40 52 80 50 104 66 L104 150 L18 150Z" fill="${C.bone}" stroke="${C.boneLine}"/><path d="M18 104 l10 -8 l10 10 l10 -10 l10 10 l10 -10 l10 10 l10 -10 l10 8" stroke="#8a7a5c" stroke-width="2.2" fill="none"/><path d="M18 104 L104 104" stroke="${C.bone}" stroke-width="0"/>`;
    const p2 = `<rect x="138" y="52" width="84" height="36" rx="8" fill="${C.bone}" stroke="${C.boneLine}"/><rect x="142" y="92" width="76" height="20" rx="8" fill="${C.cart}" stroke="${C.cartLine}"/><ellipse cx="180" cy="102" rx="16" ry="6" fill="#7cc3f0"/><rect x="138" y="116" width="84" height="36" rx="8" fill="${C.bone}" stroke="${C.boneLine}"/>`;
    const p3 = `<path d="M262 50 h60 v34 c0 14 -14 20 -30 20 c-16 0 -30 -6 -30 -20z" fill="${C.bone}" stroke="${C.boneLine}"/><path d="M262 154 h60 v-30 c0 -10 -14 -14 -30 -14 c-16 0 -30 4 -30 14z" fill="${C.bone}" stroke="${C.boneLine}"/>
      <path d="M266 96 c8 8 44 8 52 0 M266 118 c8 -6 44 -6 52 0" stroke="${C.cart}" stroke-width="5" fill="none"/><rect x="262" y="100" width="60" height="16" fill="${C.fluid}" opacity=".7"/><path d="M256 80 C246 100 246 120 256 140 M328 80 C338 100 338 120 328 140" stroke="${C.syn}" stroke-width="3" fill="none"/>`;
    return svg(360, 214, `${title('سه نوع مفصل: ثابت، نیمه‌متحرک، متحرک')}
      <rect x="8" y="34" width="106" height="126" rx="12" fill="#f8f4ec"/>${p1}
      <rect x="127" y="34" width="106" height="126" rx="12" fill="#eef6fb"/>${p2}
      <rect x="246" y="34" width="106" height="126" rx="12" fill="#f4effb"/>${p3}
      ${lab(61, 176, 'synarthrosis', 'ثابت: درز جمجمه', { size: 10 })}${lab(180, 176, 'amphiarthrosis', 'نیمه‌متحرک: دیسک، سمفیز', { size: 10 })}${lab(299, 176, 'diarthrosis', 'متحرک: سینوویال (زانو)', { size: 10 })}
      ${f(61, 206, 'فیبری', { size: 9, fill: '#8a6a2c', w: 800 })}${f(180, 206, 'غضروفی', { size: 9, fill: '#1f6f9f', w: 800 })}${f(299, 206, 'سینوویال', { size: 9, fill: '#6a3fb0', w: 800 })}`, 'انواع مفصل');
  };

  /* مفصل سینوویال با همه اجزا */
  A['synovial-joint'] = () => {
    const tb = nid(), sh = nid();
    return svg(360, 320, `${title('مفصل سینوویال (متحرک) و اجزای آن')}
      <g filter="url(#${sh})">
        <path d="M120 30 H200 V120 C200 146 182 156 160 156 C138 156 120 146 120 120Z" fill="url(#${tb})" stroke="${C.boneLine}" stroke-width="1.5"/>
        <path d="M120 300 H200 V206 C200 190 182 182 160 182 C138 182 120 190 120 206Z" fill="url(#${tb})" stroke="${C.boneLine}" stroke-width="1.5"/>
      </g>
      <path d="M96 116 C88 150 88 190 96 222 L224 222 C232 190 232 150 224 116Z" fill="${C.fluid}" opacity=".85"/>
      <path d="M122 132 C130 150 190 150 198 132 L198 120 C198 146 182 156 160 156 C138 156 122 146 122 120Z" fill="${C.cart}" stroke="${C.cartLine}"/>
      <path d="M122 200 C130 188 190 188 198 200 L198 206 C198 192 182 184 160 184 C138 184 122 192 122 206Z" fill="${C.cart}" stroke="${C.cartLine}"/>
      <path d="M124 176 C136 168 150 170 160 176 C170 170 184 168 196 176 L194 182 C184 178 170 180 160 184 C150 180 136 178 126 182Z" fill="#9fd3c7" stroke="#3a9c86"/>
      <path d="M118 100 C100 120 94 160 100 200 C102 216 110 226 120 236" stroke="${C.syn}" stroke-width="4" fill="none"/>
      <path d="M202 100 C220 120 226 160 220 200 C218 216 210 226 200 236" stroke="${C.syn}" stroke-width="4" fill="none"/>
      <path d="M112 92 C88 116 82 162 90 208 C92 222 104 236 118 244 M208 92 C232 116 238 162 230 208 C228 222 216 236 202 244" stroke="#8a7a5c" stroke-width="3" fill="none"/>
      <path d="M244 90 C252 130 252 200 242 248" stroke="${C.ligLine}" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M244 90 C252 130 252 200 242 248" stroke="${C.lig}" stroke-width="6.5" fill="none" stroke-linecap="round"/>
      <ellipse cx="78" cy="152" rx="11" ry="20" fill="#fde2b8" stroke="#d9a93a"/>
      <path d="M62 60 C64 100 66 120 70 136" stroke="${C.tendonLine}" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M62 60 C64 100 66 120 70 136" stroke="${C.tendon}" stroke-width="5.5" fill="none" stroke-linecap="round"/>
      ${pin(180, 136, 256, 112)}${lab(260, 106, 'articular cartilage', 'غضروف مفصلی', { size: 9, anchor: 'start' })}
      ${pin(170, 166, 256, 152)}${lab(260, 146, 'joint cavity', 'حفره + مایع سینوویال', { size: 9, anchor: 'start' })}
      ${pin(182, 177, 256, 192)}${lab(260, 186, 'meniscus', 'منیسک', { size: 9, anchor: 'start' })}
      ${pin(222, 200, 256, 228)}${lab(260, 222, 'synovial membrane', 'پرده سینوویال', { size: 9, fill: '#6a3fb0', anchor: 'start' })}
      ${pin(248, 130, 256, 72)}${lab(260, 66, 'ligament', 'رباط', { size: 9, anchor: 'start' })}
      ${pin(232, 222, 256, 268)}${lab(260, 262, 'joint capsule', 'کپسول مفصلی', { size: 9, anchor: 'start' })}
      ${pin(78, 160, 44, 196)}${lab(40, 208, 'bursa', 'کیسه بورس', { size: 9.5 })}
      ${pin(64, 80, 34, 60)}${lab(32, 44, 'tendon', 'تاندون', { size: 9.5 })}
      ${f(160, 316, 'مایع سینوویال مفصل را روان می‌کند؛ بورس اصطکاک تاندون را کم می‌کند', { size: 9 })}`,
      'مفصل سینوویال', `${linear(tb, C.boneHi, C.bone2, true)}${shadow(sh)}`);
  };

  /* انواع مفصل سینوویال */
  A['synovial-kinds'] = () => {
    const B = C.bone, L = C.boneLine;
    const box = (x, y, en, fa, ex, body) => `<rect x="${x}" y="${y}" width="108" height="98" rx="14" fill="#f4f8fb"/>${body}${lab(x + 54, y + 62, en, fa, { size: 9.5 })}${f(x + 54, y + 90, ex, { size: 8.5, fill: '#1e9e8f', w: 800 })}`;
    return svg(360, 248, `${title('شکل مفصل، نوع حرکت را تعیین می‌کند')}
      ${box(8, 30, 'ball-and-socket', 'گوی و کاسه', 'ران، شانه', `<path d="M30 40 C30 72 86 72 86 40" fill="${B}" stroke="${L}" stroke-width="1.4"/><circle cx="58" cy="44" r="14" fill="${B}" stroke="${L}" stroke-width="1.4"/><path d="M58 58 L64 70" stroke="${L}" stroke-width="10" stroke-linecap="round"/><path d="M58 58 L64 70" stroke="${B}" stroke-width="8" stroke-linecap="round"/>`)}
      ${box(126, 30, 'hinge', 'لولایی', 'آرنج، زانو', `<rect x="148" y="38" width="64" height="16" rx="8" fill="${B}" stroke="${L}"/><path d="M162 54 v12 h36 v-12" fill="${B}" stroke="${L}"/><circle cx="180" cy="46" r="4" fill="${L}"/>`)}
      ${box(244, 30, 'pivot', 'محوری (چرخشی)', 'اطلس و آسه', `<rect x="290" y="36" width="12" height="34" rx="5" fill="${B}" stroke="${L}"/><ellipse cx="296" cy="50" rx="24" ry="8" fill="none" stroke="${L}" stroke-width="5"/><ellipse cx="296" cy="50" rx="24" ry="8" fill="none" stroke="${B}" stroke-width="3"/>`)}
      ${box(67, 136, 'saddle', 'زینی', 'قاعده شست', `<path d="M90 166 C104 152 130 152 144 166 L144 176 H90Z" fill="${B}" stroke="${L}"/><path d="M96 160 C110 172 124 172 138 160 L138 146 H96Z" fill="${B}" stroke="${L}"/>`)}
      ${box(185, 136, 'gliding', 'لغزشی', 'بین مچ‌ها', `<rect x="206" y="146" width="30" height="24" rx="6" fill="${B}" stroke="${L}"/><rect x="238" y="148" width="30" height="24" rx="6" fill="${B}" stroke="${L}"/><path d="M226 178 h22" stroke="#1e9e8f" stroke-width="2"/>`)}`, 'انواع مفصل سینوویال');
  };

  /** بازو و ساعد ساده با زاویه آرنج */
  function armAt(sx, sy, ang, c) {
    const ex = sx, ey = sy + 70, a = ang * Math.PI / 180;
    const hx = ex + Math.sin(a) * 64, hy = ey + Math.cos(a) * 64;
    return { b: `<path d="M${sx} ${sy} L${ex} ${ey} L${hx.toFixed(1)} ${hy.toFixed(1)}" stroke="${C.skinLine}" stroke-width="20" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M${sx} ${sy} L${ex} ${ey} L${hx.toFixed(1)} ${hy.toFixed(1)}" stroke="${c || C.skin}" stroke-width="17" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`, ex, ey, hx, hy };
  }
  /* خم و راست کردن */
  A['flex-ext'] = () => {
    const m = nid();
    const e1 = armAt(70, 40, 0), e2 = armAt(220, 40, 130);
    return svg(360, 232, `${title('فلکشن و اکستنشن آرنج')}
      ${e1.b}${e2.b}
      <path d="M86 112 A20 20 0 0 1 86 150" stroke="#3f7fbf" stroke-width="2" fill="none"/>${t(96, 136, '180°', { size: 10, anchor: 'start', fill: '#1f5f9f' })}
      <path d="M220 130 A22 22 0 0 0 240 100" stroke="#c2413a" stroke-width="2" fill="none"/>
      ${curve(m, 'M300 166 C320 120 300 80 270 66', '#c2413a', 2.2)}
      ${lab(80, 196, 'extension', 'باز کردن: زاویه زیاد می‌شود', { size: 10.5, fill: '#1f5f9f' })}
      ${lab(256, 196, 'flexion', 'خم کردن: زاویه کم می‌شود', { size: 10.5, fill: '#a8352f' })}
      ${f(180, 226, 'hyperextension = باز شدن بیش از حد طبیعی', { size: 9 })}`, 'فلکشن و اکستنشن', marker(m, '#c2413a'));
  };

  /* ابداکشن، اداکشن، چرخش و حرکت دورانی */
  A['abd-add'] = () => {
    const m = nid(), n = nid();
    const fig = mannequin(110, 34, 0.8, { fill: C.skin });
    return svg(360, 260, `${title('دور و نزدیک کردن، چرخش و حرکت دورانی')}
      ${fig}
      <path d="M140 76 L196 52" stroke="${C.skinLine}" stroke-width="13" stroke-linecap="round" opacity=".55"/><path d="M140 76 L196 52" stroke="${C.skin}" stroke-width="10.5" stroke-linecap="round" opacity=".8"/>
      ${curve(m, 'M158 152 C186 132 198 102 196 72', '#c2413a', 2.4)}${curve(n, 'M206 70 C214 104 200 136 168 158', '#3f7fbf', 2.4, true)}
      ${lab(232, 92, 'abduction', 'دور کردن از خط وسط (ab-)', { size: 10, fill: '#a8352f', anchor: 'start' })}
      ${lab(232, 140, 'adduction', 'نزدیک کردن به خط وسط (ad-)', { size: 10, fill: '#1f5f9f', anchor: 'start' })}
      <ellipse cx="290" cy="208" rx="30" ry="9" fill="none" stroke="#7b5cd6" stroke-width="2" stroke-dasharray="4 3"/><path d="M290 172 L270 206 M290 172 L310 206" stroke="#7b5cd6" stroke-width="1.4"/>
      ${lab(290, 236, 'circumduction', 'حرکت دورانی (مخروطی)', { size: 10, fill: '#5b3fb0' })}
      ${f(110, 252, 'rotation = چرخش استخوان به دور محور خودش', { size: 9 })}`, 'ابداکشن و اداکشن', `${marker(m, '#c2413a')}${marker(n, '#3f7fbf')}`);
  };

  /* پرونیشن و سوپینیشن */
  A['pron-sup'] = () => {
    const hand = (x, palmUp) => `<rect x="${x - 14}" y="48" width="28" height="70" rx="12" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.3"/>
      <path d="M${x - 22} 118 C${x - 26} 150 ${x + 26} 150 ${x + 22} 118 Z" fill="${palmUp ? '#fbe0cc' : '#efc1a0'}" stroke="${C.skinLine}" stroke-width="1.3"/>
      ${[-14, -5, 4, 13].map(d => `<rect x="${x + d - 4}" y="140" width="8" height="${d === -14 || d === 13 ? 18 : 24}" rx="4" fill="${palmUp ? '#fbe0cc' : '#efc1a0'}" stroke="${C.skinLine}"/>`).join('')}
      ${palmUp ? `<path d="M${x - 10} 126 q10 8 20 0" stroke="#d9a988" fill="none"/>` : `<rect x="${x - 10}" y="150" width="5" height="5" rx="1.5" fill="#fff" opacity=".8"/><rect x="${x + 1}" y="156" width="5" height="5" rx="1.5" fill="#fff" opacity=".8"/>`}`;
    return svg(360, 214, `${title('پرونیشن و سوپینیشن ساعد')}
      ${hand(90, true)}${hand(270, false)}
      
      ${lab(90, 190, 'supination', 'کف دست رو به بالا', { size: 10.5, fill: '#1e9e8f' })}${lab(270, 34, 'pronation', 'کف دست رو به پایین', { size: 10.5, fill: '#a8352f' })}
      ${f(180, 108, 'رادیوس روی اولنا می‌چرخد', { size: 9.5 })}${f(180, 124, '«سوپ را در کف دست نگه دار»', { size: 9, fill: '#1e9e8f', w: 700 })}`, 'پرونیشن و سوپینیشن');
  };

  /* حرکت‌های مچ پا */
  A['foot-moves'] = () => {
    const m = nid();
    const foot = (x, y, ang) => `<g transform="rotate(${ang} ${x} ${y})"><rect x="${x - 10}" y="${y - 70}" width="20" height="72" rx="9" fill="${C.skin}" stroke="${C.skinLine}"/><path d="M${x - 12} ${y - 4} C${x - 14} ${y + 14} ${x + 54} ${y + 14} ${x + 60} ${y + 4} C${x + 62} ${y - 6} ${x + 30} ${y - 12} ${x + 10} ${y - 12} Z" fill="${C.skin}" stroke="${C.skinLine}"/></g>`;
    const sole = (x, ang, c) => `<g transform="rotate(${ang} ${x} 170)"><rect x="${x - 9}" y="110" width="18" height="44" rx="8" fill="${C.skin}" stroke="${C.skinLine}"/><ellipse cx="${x}" cy="166" rx="16" ry="12" fill="${C.skin}" stroke="${C.skinLine}"/><path d="M${x - 12} 176 h24" stroke="${c}" stroke-width="3"/></g>`;
    return svg(360, 236, `${title('حرکت‌های مچ پا')}
      ${foot(60, 104, -14)}${foot(150, 104, 18)}
      ${curve(m, 'M92 70 C100 60 110 58 118 62', '#1e9e8f', 2)}${curve(m, 'M182 112 C186 124 182 132 176 138', '#c2413a', 2)}
      ${lab(70, 132, 'dorsiflexion', 'پنجه به بالا', { size: 10, fill: '#137568' })}${lab(176, 158, 'plantar flexion', 'پنجه به پایین', { size: 10, fill: '#a8352f' })}
      ${sole(262, -16, '#3f7fbf')}${sole(322, 16, '#c2413a')}
      ${lab(256, 206, 'inversion', 'کف پا به داخل', { size: 10, fill: '#1f5f9f' })}${lab(326, 206, 'eversion', 'کف پا به خارج', { size: 10, fill: '#a8352f' })}`, 'حرکت‌های مچ پا', marker(m, LINE));
  };

  /* آرتروز و آرتریت روماتوئید */
  A.arthritis = () => {
    const j = (x, kind) => {
      const top = `<path d="M${x - 34} 36 H${x + 34} V96 C${x + 34} 112 ${x + 16} 118 ${x} 118 C${x - 16} 118 ${x - 34} 112 ${x - 34} 96Z" fill="${C.bone}" stroke="${C.boneLine}"/>`;
      const bot = `<path d="M${x - 34} 200 H${x + 34} V150 C${x + 34} 138 ${x + 16} 134 ${x} 134 C${x - 16} 134 ${x - 34} 138 ${x - 34} 150Z" fill="${C.bone}" stroke="${C.boneLine}"/>`;
      let extra = '';
      if (kind === 0) extra = `<path d="M${x - 30} 104 C${x - 20} 120 ${x + 20} 120 ${x + 30} 104" stroke="${C.cart}" stroke-width="7" fill="none"/><path d="M${x - 30} 146 C${x - 20} 136 ${x + 20} 136 ${x + 30} 146" stroke="${C.cart}" stroke-width="7" fill="none"/>`;
      if (kind === 1) extra = `<path d="M${x - 30} 106 C${x - 24} 116 ${x - 10} 118 ${x - 4} 118" stroke="${C.cart}" stroke-width="3" fill="none"/><path d="M${x + 30} 144 C${x + 22} 138 ${x + 12} 136 ${x + 6} 136" stroke="${C.cart}" stroke-width="3" fill="none"/><path d="M${x - 34} 100 l-10 6 l10 2 M${x + 34} 146 l10 -4 l-10 -4 M${x + 34} 98 l8 6 l-8 2" fill="${C.bone2}" stroke="${C.boneLine}"/><path d="M${x - 10} 122 h20" stroke="#c2413a" stroke-width="1.4" stroke-dasharray="2 2"/>`;
      if (kind === 2) extra = `<path d="M${x - 30} 104 C${x - 20} 118 ${x + 20} 118 ${x + 30} 104" stroke="${C.cart}" stroke-width="4" fill="none"/><path d="M${x - 46} 92 C${x - 58} 124 ${x - 58} 140 ${x - 44} 162 L${x - 34} 150 L${x - 34} 100Z M${x + 46} 92 C${x + 58} 124 ${x + 58} 140 ${x + 44} 162 L${x + 34} 150 L${x + 34} 100Z" fill="#e88a9a" stroke="#b8405a"/><path d="M${x - 34} 108 l8 4 l-8 4 M${x + 34} 140 l-8 4 l8 4" fill="#fff" stroke="#b8405a"/>`;
      return `<rect x="${x - 34}" y="112" width="68" height="28" fill="${kind === 2 ? '#fde3e8' : C.fluid}"/>${top}${bot}${extra}`;
    };
    return svg(360, 252, `${title('مفصل سالم، آرتروز و آرتریت روماتوئید')}
      ${j(62, 0)}${j(180, 1)}${j(298, 2)}
      ${lab(62, 222, 'normal', 'غضروف صاف و فضای کافی', { size: 10, fill: '#1f5f9f' })}
      ${lab(180, 222, 'osteoarthritis (OA)', 'غضروف ساییده، خار استخوان', { size: 10, fill: '#8a5a20' })}
      ${lab(298, 222, 'rheumatoid arthritis', 'پرده سینوویال ملتهب، خوردگی', { size: 10, fill: '#a8352f' })}`, 'آرتریت');
  };

  /* نقرس در شست پا */
  A['gout-toe'] = () => svg(360, 210, `${title('نقرس: بلورهای اسید اوریک در مفصل شست پا')}
      <path d="M30 150 C30 110 90 96 150 100 C200 104 250 92 290 96 C320 100 330 120 320 136 C312 150 290 154 260 154 L60 166 C40 166 30 160 30 150Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>
      <ellipse cx="270" cy="118" rx="30" ry="24" fill="#e5675e" opacity=".55"/><ellipse cx="270" cy="118" rx="16" ry="12" fill="#c2413a" opacity=".5"/>
      <circle cx="96" cy="120" r="48" fill="#fff" stroke="#c2413a" stroke-width="2"/>
      ${[[-30, -10, 20], [-14, 14, -30], [6, -22, 60], [20, 8, -10], [-6, 0, 40], [10, 24, 80]].map(p => `<path d="M${96 + p[0]} ${120 + p[1]} l14 0" stroke="#e9c46a" stroke-width="3" stroke-linecap="round" transform="rotate(${p[2]} ${96 + p[0]} ${120 + p[1]})"/>`).join('')}
      <path d="M140 108 L240 112" stroke="#c2413a" stroke-width="1.4" stroke-dasharray="4 3"/>
      ${lab(96, 186, 'uric acid crystals', 'بلورهای سوزنی اسید اوریک', { size: 10 })}
      ${lab(278, 180, 'gouty arthritis', 'مفصل داغ، قرمز و دردناک', { size: 10, fill: '#a8352f' })}`, 'نقرس');

  /* ================= دنیای ۴: عضلات ================= */
  /* سه نوع بافت عضله */
  A['muscle-types'] = () => {
    const sk = [0, 1, 2].map(i => `<rect x="14" y="${44 + i * 30}" width="96" height="24" rx="12" fill="${C.musc}" stroke="${C.musc2}"/>${Array.from({ length: 15 }, (_, k) => `<path d="M${20 + k * 6} ${46 + i * 30} v20" stroke="${C.musc2}" stroke-width="1.2" opacity=".6"/>`).join('')}<ellipse cx="${30 + i * 20}" cy="${46 + i * 30}" rx="5" ry="2.4" fill="#6a1f2a"/><ellipse cx="${80 - i * 10}" cy="${66 + i * 30}" rx="5" ry="2.4" fill="#6a1f2a"/>`).join('');
    const sm = [[146, 52], [176, 64], [206, 52], [150, 92], [182, 104], [212, 92], [160, 128], [196, 132]].map(p => `<path d="M${p[0] - 24} ${p[1]} Q${p[0]} ${p[1] - 10} ${p[0] + 24} ${p[1]} Q${p[0]} ${p[1] + 10} ${p[0] - 24} ${p[1]}Z" fill="#f0a6a0" stroke="#c76f68"/><ellipse cx="${p[0]}" cy="${p[1]}" rx="5" ry="2.2" fill="#6a1f2a"/>`).join('');
    const ca = `<path d="M252 50 H346 V70 H316 L300 86 L316 102 H346 V122 H252 V102 H282 L298 86 L282 70 H252Z" fill="${C.musc}" stroke="${C.musc2}"/>${Array.from({ length: 15 }, (_, k) => `<path d="M${256 + k * 6} 52 v16 M${256 + k * 6} 104 v16" stroke="${C.musc2}" stroke-width="1.2" opacity=".6"/>`).join('')}<path d="M300 52 v16 M300 104 v16" stroke="#fff" stroke-width="3"/><ellipse cx="272" cy="60" rx="4.5" ry="2.4" fill="#6a1f2a"/><ellipse cx="326" cy="112" rx="4.5" ry="2.4" fill="#6a1f2a"/><path d="M252 132 H346 V146 H252Z" fill="${C.musc}" stroke="${C.musc2}"/>`;
    return svg(360, 226, `${title('سه نوع بافت عضله')}
      <rect x="6" y="32" width="112" height="128" rx="12" fill="#fdf1f0"/>${sk}
      <rect x="124" y="32" width="112" height="128" rx="12" fill="#fdf6f3"/>${sm}
      <rect x="242" y="32" width="112" height="128" rx="12" fill="#fdf1f0"/>${ca}
      ${lab(62, 178, 'skeletal', 'اسکلتی: مخطط و ارادی', { size: 10.5 })}${lab(180, 178, 'smooth', 'صاف: غیرمخطط و غیرارادی', { size: 10.5 })}${lab(298, 178, 'cardiac', 'قلبی: مخطط و غیرارادی', { size: 10.5 })}
      ${f(62, 212, 'به استخوان', { size: 9, fill: '#a8352f', w: 800 })}${f(180, 212, 'دیواره روده و رگ', { size: 9, fill: '#a8352f', w: 800 })}${f(298, 212, 'دیواره قلب (myocardium)', { size: 9, fill: '#a8352f', w: 800 })}`, 'انواع عضله');
  };

  /* ساختار عضله اسکلتی */
  A['muscle-structure'] = () => {
    const g = nid();
    return svg(360, 244, `${title('از استخوان تا تار عضلانی')}
      <rect x="6" y="70" width="34" height="70" rx="10" fill="${C.bone}" stroke="${C.boneLine}"/>
      <path d="M40 98 L76 100 L76 110 L40 112Z" fill="${C.tendon}" stroke="${C.tendonLine}"/>
      <path d="M76 100 C110 60 190 56 226 86 L226 126 C190 156 110 150 76 110Z" fill="url(#${g})" stroke="${C.musc2}" stroke-width="1.4"/>
      <path d="M72 96 C108 52 194 48 232 82 M72 114 C108 158 194 162 232 130" stroke="#c9c2d6" stroke-width="2.4" fill="none"/>
      <ellipse cx="226" cy="106" rx="14" ry="20" fill="#f6d9d3" stroke="${C.musc2}"/>
      ${[[222, 96], [230, 104], [222, 112], [228, 118], [219, 104]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${C.musc}" stroke="#fff" stroke-width=".8"/>`).join('')}
      <path d="M232 98 L270 62 M232 116 L270 150" stroke="#9aa9b1" stroke-dasharray="3 3"/>
      <circle cx="306" cy="106" r="46" fill="#fbe9e7" stroke="${C.musc2}" stroke-width="1.4"/>
      ${[[292, 90], [316, 86], [300, 112], [326, 112], [286, 122], [312, 132]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="10" fill="${C.musc}" stroke="#fff"/>${[0, 1, 2].map(k => `<circle cx="${p[0] - 4 + k * 4}" cy="${p[1] - 2 + (k % 2) * 4}" r="2" fill="${C.muscL}"/>`).join('')}`).join('')}
      ${pin(22, 90, 22, 54)}${lab(22, 40, 'bone', 'استخوان', { size: 9.5 })}
      ${pin(58, 104, 74, 176)}${lab(74, 190, 'tendon', 'تاندون', { size: 9.5 })}
      ${pin(150, 70, 150, 40)}${lab(186, 38, 'fascia', 'نیام: پوشش عضله', { size: 9.5, anchor: 'start' })}
      ${pin(150, 120, 150, 176)}${lab(150, 190, 'muscle belly', 'تنه عضله', { size: 9.5 })}
      ${pin(230, 104, 236, 196)}${lab(236, 210, 'fascicle', 'دسته تارها', { size: 9.5 })}
      ${pin(316, 86, 318, 176)}${lab(318, 190, 'muscle fiber', 'تار عضلانی (یک سلول)', { size: 9.5 })}`, 'ساختار عضله', linear(g, C.muscL, C.musc2, true));
  };

  /* مبدأ و انتها: دوسر و سه‌سر بازو */
  A['origin-insertion'] = () => {
    const hu = bone(130, 48, 186, 14, 13), m = nid(), g = nid();
    return svg(360, 268, `${title('مبدأ، انتها و عضله مخالف: دوسر و سه‌سر بازو')}
      <path d="M80 36 L150 40 L120 110 Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3" stroke-linejoin="round"/>
      ${hu.b}
      <path d="M134 192 L270 186" stroke="${C.boneLine}" stroke-width="12" stroke-linecap="round"/><path d="M134 192 L270 186" stroke="${C.bone}" stroke-width="9.5" stroke-linecap="round"/>
      <path d="M134 204 L266 200" stroke="${C.boneLine}" stroke-width="9" stroke-linecap="round"/><path d="M134 204 L266 200" stroke="${C.bone}" stroke-width="6.5" stroke-linecap="round"/>
      <path d="M144 60 C176 80 182 140 168 178 L160 186 C150 150 146 100 138 64Z" fill="url(#${g})" stroke="${C.musc2}"/>
      <path d="M144 58 L132 44 M164 180 L178 190" stroke="${C.tendonLine}" stroke-width="5" stroke-linecap="round"/>
      <path d="M118 66 C96 90 94 150 110 186 L120 196 C124 150 124 100 122 70Z" fill="#c76f68" stroke="${C.musc2}" opacity=".9"/>
      ${curve(m, 'M290 160 C300 120 286 90 262 74', '#1e9e8f', 2.4)}${f(318, 64, 'فلکشن آرنج', { size: 9.5, fill: '#137568', w: 800 })}
      ${pin(134, 46, 60, 74)}${lab(46, 64, 'origin', 'مبدأ: سر ثابت', { size: 9.5, fill: '#1f5f9f' })}
      ${pin(178, 190, 200, 236)}${lab(216, 236, 'insertion', 'انتها: روی استخوان متحرک (رادیوس)', { size: 9.5, fill: '#a8352f' })}
      ${pin(172, 120, 232, 120)}${lab(236, 128, 'biceps', 'دوسر: محرک اصلی', { size: 9.5, anchor: 'start' })}
      ${pin(104, 130, 56, 150)}${lab(44, 162, 'triceps', 'سه‌سر: مخالف', { size: 9.5 })}`, 'مبدأ و انتهای عضله', `${hu.d}${marker(m, '#1e9e8f')}${linear(g, C.muscL, C.musc2)}`);
  };

  /** عضلات روی مانکن؛ side = front یا back */
  function muscleBody(side) {
    const cx = 180, top = 34, k = 1.24;
    const X = d => (cx + d * k).toFixed(1), Y = d => (top + d * k).toFixed(1);
    const sym = (fn, c, op) => [-1, 1].map(s => `<path d="${fn(s)}" fill="${c}" stroke="${C.musc2}" stroke-width=".9" opacity="${op || 0.92}"/>`).join('');
    let m = '';
    if (side === 'front') {
      m += sym(s => `M${X(s * 11)} ${Y(36)} L${X(s * 15)} ${Y(40)} L${X(s * 5)} ${Y(52)} L${X(s * 2)} ${Y(50)}Z`, '#e07f78');
      m += sym(s => `M${X(s * 3)} ${Y(54)} L${X(s * 28)} ${Y(54)} C${X(s * 38)} ${Y(58)} ${X(s * 40)} ${Y(64)} ${X(s * 38)} ${Y(70)} C${X(s * 28)} ${Y(80)} ${X(s * 14)} ${Y(84)} ${X(s * 3)} ${Y(82)}Z`, '#d65a52');
      m += sym(s => `M${X(s * 10)} ${Y(86)} L${X(s * 32)} ${Y(86)} L${X(s * 30)} ${Y(122)} L${X(s * 12)} ${Y(146)}Z`, '#e48c84');
      m += `<rect x="${X(-10)}" y="${Y(86)}" width="${(20 * k).toFixed(1)}" height="${(64 * k).toFixed(1)}" rx="6" fill="#d65a52" stroke="${C.musc2}"/>${[100, 114, 128].map(y => `<path d="M${X(-10)} ${Y(y)} H${X(10)}" stroke="${C.musc2}"/>`).join('')}<path d="M${X(0)} ${Y(86)} V${Y(150)}" stroke="${C.musc2}"/>`;
      m += sym(s => `M${X(s * 6)} ${Y(170)} C${X(s * 4)} ${Y(198)} ${X(s * 10)} ${Y(214)} ${X(s * 18)} ${Y(220)} C${X(s * 26)} ${Y(212)} ${X(s * 30)} ${Y(194)} ${X(s * 28)} ${Y(166)}Z`, '#d65a52');
      m += [-1, 1].map(s => `<path d="M${X(s * 30)} ${Y(160)} L${X(s * 8)} ${Y(222)}" stroke="#f0a69e" stroke-width="${(4 * k).toFixed(1)}" stroke-linecap="round"/>`).join('');
      m += sym(s => `M${X(s * 13)} ${Y(226)} L${X(s * 20)} ${Y(226)} L${X(s * 21)} ${Y(252)} L${X(s * 16)} ${Y(252)}Z`, '#d65a52');
      m += [-1, 1].map(s => `<ellipse cx="${X(s * 47)}" cy="${Y(94)}" rx="${(5.5 * k).toFixed(1)}" ry="${(17 * k).toFixed(1)}" transform="rotate(${-s * 7} ${X(s * 47)} ${Y(94)})" fill="#d65a52" stroke="${C.musc2}"/>`).join('');
    } else {
      m += `<path d="M${X(0)} ${Y(36)} L${X(30)} ${Y(54)} L${X(0)} ${Y(108)} L${X(-30)} ${Y(54)}Z" fill="#d65a52" stroke="${C.musc2}"/>`;
      m += sym(s => `M${X(s * 6)} ${Y(100)} L${X(s * 34)} ${Y(74)} C${X(s * 36)} ${Y(96)} ${X(s * 32)} ${Y(116)} ${X(s * 28)} ${Y(126)} L${X(s * 4)} ${Y(130)}Z`, '#e48c84');
      m += [-1, 1].map(s => `<ellipse cx="${X(s * 16)}" cy="${Y(150)}" rx="${(15 * k).toFixed(1)}" ry="${(13 * k).toFixed(1)}" fill="#d65a52" stroke="${C.musc2}"/>`).join('');
      m += sym(s => `M${X(s * 6)} ${Y(168)} C${X(s * 4)} ${Y(196)} ${X(s * 10)} ${Y(214)} ${X(s * 18)} ${Y(220)} C${X(s * 26)} ${Y(212)} ${X(s * 30)} ${Y(194)} ${X(s * 28)} ${Y(168)}Z`, '#e07f78');
      m += [-1, 1].map(s => `<ellipse cx="${X(s * 19)}" cy="${Y(234)}" rx="${(7 * k).toFixed(1)}" ry="${(11 * k).toFixed(1)}" fill="#d65a52" stroke="${C.musc2}"/><path d="M${X(s * 19)} ${Y(244)} V${Y(258)}" stroke="${C.tendonLine}" stroke-width="5" stroke-linecap="round"/><path d="M${X(s * 19)} ${Y(244)} V${Y(258)}" stroke="${C.tendon}" stroke-width="3" stroke-linecap="round"/>`).join('');
      m += [-1, 1].map(s => `<ellipse cx="${X(s * 47)}" cy="${Y(94)}" rx="${(5.5 * k).toFixed(1)}" ry="${(17 * k).toFixed(1)}" transform="rotate(${-s * 7} ${X(s * 47)} ${Y(94)})" fill="#c76f68" stroke="${C.musc2}"/>`).join('');
    }
    m += sym(s => `M${X(s * 26)} ${Y(50)} C${X(s * 44)} ${Y(50)} ${X(s * 50)} ${Y(60)} ${X(s * 48)} ${Y(80)} L${X(s * 41)} ${Y(78)} C${X(s * 40)} ${Y(66)} ${X(s * 34)} ${Y(58)} ${X(s * 26)} ${Y(56)}Z`, '#c94a43');
    return { body: mannequin(cx, top, k, { fill: '#f7dccb' }) + m, X: d => cx + d * k, Y: d => top + d * k };
  }
  A['muscles-front'] = () => {
    const b = muscleBody('front'), X = b.X, Y = b.Y;
    const L = (dx, dy, x2, y2, en, fa, side) => `${pin(X(dx), Y(dy), x2, y2)}${lab(side < 0 ? x2 - 4 : x2 + 4, y2 - 3, en, fa, { size: 9.5, anchor: side < 0 ? 'end' : 'start' })}`;
    return svg(360, 380, `${title('عضلات مهم بدن از جلو')}${b.body}
      ${L(-8, 44, 112, 66, 'sternocleidomastoid', 'جناغی-ترقوه‌ای-پستانی', -1)}${L(-44, 64, 112, 118, 'deltoid', 'دلتوئید (شانه)', -1)}
      ${L(-47, 96, 112, 170, 'biceps brachii', 'دوسر بازو', -1)}${L(-24, 106, 112, 222, 'external oblique', 'مورب خارجی', -1)}
      ${L(-18, 196, 112, 296, 'quadriceps', 'چهارسر ران', -1)}
      ${L(18, 66, 252, 70, 'pectoralis major', 'سینه‌ای بزرگ', 1)}${L(4, 120, 252, 160, 'rectus abdominis', 'راست شکمی', 1)}
      ${L(20, 196, 252, 250, 'sartorius', 'خیاطه', 1)}${L(18, 240, 252, 330, 'tibialis anterior', 'درشت‌نی قدامی', 1)}`, 'عضلات جلوی بدن');
  };
  A['muscles-back'] = () => {
    const b = muscleBody('back'), X = b.X, Y = b.Y;
    const L = (dx, dy, x2, y2, en, fa, side) => `${pin(X(dx), Y(dy), x2, y2)}${lab(side < 0 ? x2 - 4 : x2 + 4, y2 - 3, en, fa, { size: 9.5, anchor: side < 0 ? 'end' : 'start' })}`;
    return svg(360, 380, `${title('عضلات مهم بدن از پشت')}${b.body}
      ${L(-10, 56, 112, 66, 'trapezius', 'ذوزنقه‌ای', -1)}${L(-47, 96, 112, 140, 'triceps brachii', 'سه‌سر بازو', -1)}
      ${L(-16, 150, 112, 210, 'gluteus maximus', 'سرینی بزرگ', -1)}${L(-19, 236, 112, 300, 'gastrocnemius', 'دوقلوی ساق', -1)}
      ${L(44, 64, 252, 70, 'deltoid', 'دلتوئید', 1)}${L(22, 104, 252, 130, 'latissimus dorsi', 'پشتی پهن', 1)}
      ${L(18, 196, 252, 220, 'hamstrings', 'همسترینگ', 1)}${L(19, 252, 252, 320, 'Achilles tendon', 'تاندون آشیل', 1)}`, 'عضلات پشت بدن');
  };

  /* انواع فلج */
  A.paralysis = () => {
    const k = 0.56, top = 36;
    const fig = (cx, clip) => { const id = nid(); return { d: `<clipPath id="${id}">${clip}</clipPath>`, b: `${mannequin(cx, top, k, { fill: '#f2f2f2', line: '#b9c2c8' })}<g clip-path="url(#${id})">${mannequin(cx, top, k, { fill: '#e57373', line: '#b8403a' })}</g>` }; };
    const a = fig(62, `<rect x="62" y="0" width="60" height="200"/>`), b = fig(180, `<rect x="100" y="${top + 124 * k}" width="160" height="200"/>`), c = fig(298, `<rect x="230" y="${top + 46 * k}" width="140" height="200"/>`);
    return svg(360, 248, `${title('فلج: کدام بخش بدن درگیر است؟')}${a.b}${b.b}${c.b}
      ${lab(62, 206, 'hemiplegia', 'فلج نیمه بدن (hemi-)', { size: 10 })}${lab(180, 206, 'paraplegia', 'فلج دو پا و پایین تنه', { size: 10 })}${lab(298, 206, 'quadriplegia', 'فلج چهار اندام (quadri-)', { size: 10 })}
      ${f(180, 242, '‎-plegia = فلج کامل • ‎-paresis = ضعف یا فلج ناقص (hemiparesis)', { size: 9.5, fill: INK, w: 700 })}`, 'انواع فلج', a.d + b.d + c.d);
  };

  /* ================= دنیای ۵: شکستگی، تشخیص و درمان ================= */
  A['fracture-types'] = () => {
    const tile = (i, en, fa, draw) => {
      const x = 6 + (i % 4) * 88, y = 30 + Math.floor(i / 4) * 140;
      const b = bone(x + 42, y + 12, y + 92, 13, 12);
      return { d: b.d, b: `<rect x="${x}" y="${y}" width="84" height="132" rx="12" fill="#f6f4fb"/>${b.b}${draw(x + 42, y + 52)}${lab(x + 42, y + 110, en, fa, { size: 9.5 })}` };
    };
    const gap = (d) => `<path d="${d}" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#c2413a" stroke-width="1" fill="none" opacity=".7"/>`;
    const list = [
      ['closed', 'بسته (ساده)', (cx, cy) => `<rect x="${cx - 22}" y="${cy - 44}" width="44" height="86" rx="18" fill="none" stroke="${C.skinLine}" stroke-width="2"/>${gap(`M${cx - 8} ${cy} L${cx + 8} ${cy + 3}`)}`],
      ['open', 'باز (مرکب)', (cx, cy) => `${gap(`M${cx - 8} ${cy} L${cx + 8} ${cy - 6}`)}<path d="M${cx - 22} ${cy - 10} H${cx + 22}" stroke="${C.skinLine}" stroke-width="2"/><path d="M${cx + 2} ${cy - 6} L${cx + 14} ${cy - 22} L${cx + 6} ${cy - 4}Z" fill="${C.bone}" stroke="${C.boneLine}"/><circle cx="${cx + 14}" cy="${cy - 8}" r="4" fill="#c2413a" opacity=".7"/>`],
      ['greenstick', 'ترکه‌ای (ناقص)', (cx, cy) => gap(`M${cx - 7} ${cy - 2} L${cx + 1} ${cy + 2}`)],
      ['transverse', 'عرضی', (cx, cy) => gap(`M${cx - 8} ${cy} L${cx + 8} ${cy}`)],
      ['oblique', 'مورب', (cx, cy) => gap(`M${cx - 8} ${cy + 10} L${cx + 8} ${cy - 10}`)],
      ['spiral', 'مارپیچی', (cx, cy) => gap(`M${cx - 7} ${cy - 16} C${cx + 12} ${cy - 10} ${cx - 12} ${cy + 2} ${cx + 7} ${cy + 14}`)],
      ['comminuted', 'خردشده', (cx, cy) => `${gap(`M${cx - 8} ${cy - 8} L${cx + 8} ${cy - 2} M${cx - 8} ${cy + 6} L${cx + 8} ${cy + 2} M${cx - 2} ${cy - 6} L${cx + 2} ${cy + 4}`)}<path d="M${cx + 12} ${cy - 2} l6 -3 l-1 6z M${cx - 14} ${cy + 4} l-6 2 l4 4z" fill="${C.bone}" stroke="${C.boneLine}"/>`],
      ['compression', 'فشاری (مهره)', (cx, cy) => `<rect x="${cx - 18}" y="${cy - 40}" width="36" height="20" rx="4" fill="${C.bone}" stroke="${C.boneLine}"/><path d="M${cx - 18} ${cy - 12} L${cx + 18} ${cy - 12} L${cx + 18} ${cy + 6} L${cx - 18} ${cy + 14}Z" fill="${C.bone2}" stroke="#c2413a"/><rect x="${cx - 18}" y="${cy + 22}" width="36" height="20" rx="4" fill="${C.bone}" stroke="${C.boneLine}"/><rect x="${cx - 16}" y="${cy - 18}" width="32" height="5" fill="${C.cart}"/><rect x="${cx - 16}" y="${cy + 15}" width="32" height="5" fill="${C.cart}"/>`]
    ];
    const ts = list.slice(0, 7).map((l, i) => tile(i, l[0], l[1], l[2]));
    const t7 = (() => { const x = 6 + 3 * 88, y = 170; return `<rect x="${x}" y="${y}" width="84" height="132" rx="12" fill="#f6f4fb"/>${list[7][2](x + 42, y + 52)}${lab(x + 42, y + 110, list[7][0], list[7][1], { size: 9.5 })}`; })();
    return svg(360, 310, `${title('انواع شکستگی')}${ts.map(x => x.b).join('')}${t7}`, 'انواع شکستگی', ts.map(x => x.d).join(''));
  };

  /* مراحل جوش‌خوردن شکستگی */
  A['fracture-healing'] = () => {
    const step = (i, en, fa, inner) => {
      const x = 8 + i * 88; const a = bone(x + 40, 40, 96, 16, 13), b = bone(x + 40, 106, 160, 16, 13);
      return { d: a.d + b.d, b: `${a.b}${b.b}${inner(x + 40)}${lab(x + 40, 184, en, fa, { size: 9.5 })}${i < 3 ? `<path d="M${x + 76} 100 h10" stroke="${LINE}" stroke-width="2"/><path d="M${x + 84} 96 l4 4 l-4 4" stroke="${LINE}" stroke-width="2" fill="none"/>` : ''}` };
    };
    const s = [
      step(0, 'hematoma', 'لخته خون', cx => `<ellipse cx="${cx}" cy="101" rx="16" ry="9" fill="#9c2f3f"/>`),
      step(1, 'soft callus', 'پینه نرم (غضروفی)', cx => `<ellipse cx="${cx}" cy="101" rx="17" ry="12" fill="${C.cart}" stroke="${C.cartLine}"/>`),
      step(2, 'bony callus', 'پینه استخوانی', cx => `<ellipse cx="${cx}" cy="101" rx="16" ry="12" fill="${C.spongy}" stroke="${C.boneLine}"/>${[-6, 0, 6].map(d => `<circle cx="${cx + d}" cy="${101 + (d % 4)}" r="2" fill="${C.marrowR}"/>`).join('')}`),
      step(3, 'remodeling', 'بازسازی', cx => `<rect x="${cx - 8}" y="92" width="16" height="18" fill="${C.bone}"/><path d="M${cx - 9} 101 h18" stroke="${C.bone2}" stroke-width="2"/>`)
    ];
    return svg(360, 228, `${title('جوش‌خوردن شکستگی در چند هفته')}${s.map(x => x.b).join('')}
      ${f(180, 222, 'اگر جوش نخورد nonunion، اگر کج جوش بخورد malunion', { size: 9.5 })}`, 'ترمیم شکستگی', s.map(x => x.d).join(''));
  };

  /* روش‌های تثبیت */
  A.fixation = () => {
    const b1 = bone(60, 46, 176, 14, 13), b2 = bone(180, 46, 176, 14, 13), b3 = bone(300, 46, 176, 14, 13);
    const crack = cx => `<path d="M${cx - 7} 112 L${cx + 7} 108" stroke="#fff" stroke-width="3"/><path d="M${cx - 7} 112 L${cx + 7} 108" stroke="#c2413a" stroke-width="1"/>`;
    return svg(360, 236, `${title('بی‌حرکت کردن و تثبیت شکستگی')}
      ${b1.b}${crack(60)}<rect x="34" y="64" width="52" height="96" rx="14" fill="#eef2f6" stroke="#9aa9b1" stroke-width="2" opacity=".92"/>${[76, 92, 108, 124, 140].map(y => `<path d="M36 ${y} h48" stroke="#c9d2d8"/>`).join('')}
      ${b2.b}${crack(180)}<rect x="186" y="74" width="9" height="70" rx="3" fill="#9aa9b1" stroke="#5b6b73"/>${[82, 96, 124, 138].map(y => `<path d="M170 ${y} h28" stroke="#5b6b73" stroke-width="3" stroke-linecap="round"/><circle cx="196" cy="${y}" r="3" fill="#77868e"/>`).join('')}
      ${b3.b}${crack(300)}${[82, 96, 124, 138].map(y => `<path d="M286 ${y} h50" stroke="#5b6b73" stroke-width="2.6"/>`).join('')}<rect x="336" y="70" width="8" height="80" rx="3" fill="#7b5cd6"/>
      ${lab(60, 200, 'cast', 'گچ', { size: 10.5 })}${lab(180, 200, 'ORIF', 'پلاک و پیچ (تثبیت داخلی)', { size: 10.5, sym: true })}${lab(300, 200, 'external fixation', 'تثبیت خارجی', { size: 10.5 })}
      ${f(180, 232, 'جااندازی (reduction) همیشه پیش از تثبیت است', { size: 9.5 })}`, 'روش‌های تثبیت', b1.d + b2.d + b3.d);
  };

  /* تصویربرداری استخوان و مفصل */
  A.imaging = () => svg(360, 214, `${title('تصویربرداری در ارتوپدی: کدام برای چه؟')}
      ${card(8, 30, 108, 84, '#eef2f6', '🩻', 'X-ray', 'رادیوگرافی', 'شکستگی، دررفتگی')}
      ${card(126, 30, 108, 84, '#e6f0fb', '🌀', 'CT', 'برش‌های مقطعی', 'شکستگی پیچیده')}
      ${card(244, 30, 108, 84, '#f3eafc', '🧲', 'MRI', 'بافت نرم', 'دیسک، رباط، منیسک')}
      ${card(67, 122, 108, 84, '#fde8e6', '☢️', 'bone scan', 'اسکن هسته‌ای', 'تومور، عفونت، شکستگی پنهان')}
      ${card(185, 122, 108, 84, '#eef6e6', '📊', 'DXA', 'تراکم استخوان', 'پوکی استخوان')}`, 'تصویربرداری');

  /* مقیاس T-score */
  A.tscore = () => {
    const X = v => 30 + (1 - v) * 60;
    return svg(360, 150, `${title('تفسیر T-score در سنجش تراکم استخوان (DXA)')}
      <rect x="${X(1)}" y="50" width="${X(-1) - X(1)}" height="26" rx="6" fill="#bfe8a0"/>
      <rect x="${X(-1)}" y="50" width="${X(-2.5) - X(-1)}" height="26" fill="#ffe08a"/>
      <rect x="${X(-2.5)}" y="50" width="${X(-4) - X(-2.5)}" height="26" rx="6" fill="#f6a39c"/>
      ${[1, 0, -1, -2, -2.5, -3, -4].map(v => `<path d="M${X(v)} 76 v6" stroke="${INK}"/>${t(X(v), 96, String(v).replace('-', '−'), { size: 10, sym: true })}`).join('')}
      ${lab(X(0), 120, 'normal', 'طبیعی', { size: 10, fill: '#3f8a05' })}${lab(X(-1.75), 120, 'osteopenia', 'کمبود توده استخوان', { size: 10, fill: '#a36b00' })}${lab(X(-3.25), 120, 'osteoporosis', 'پوکی استخوان', { size: 10, fill: '#a8352f' })}`, 'مقیاس T-score');
  };

  /* گونیومتر روی آرنج */
  A.goniometer = () => {
    const e = armAt(120, 36, 115);
    return svg(360, 214, `${title('گونیومتر: اندازه‌گیری زاویه حرکت مفصل (ROM)')}
      ${e.b}
      <circle cx="${e.ex}" cy="${e.ey}" r="30" fill="#ffffff" fill-opacity=".75" stroke="#1e9e8f" stroke-width="2"/>
      ${Array.from({ length: 13 }, (_, i) => { const a = Math.PI / 2 + i * Math.PI / 12; return `<path d="M${(e.ex + Math.cos(a) * 26).toFixed(1)} ${(e.ey - Math.sin(a) * 26).toFixed(1)} L${(e.ex + Math.cos(a) * 30).toFixed(1)} ${(e.ey - Math.sin(a) * 30).toFixed(1)}" stroke="#1e9e8f" stroke-width="1.2"/>`; }).join('')}
      <path d="M${e.ex} ${e.ey} L${e.ex} ${e.ey - 66}" stroke="#1e9e8f" stroke-width="5" stroke-linecap="round" opacity=".8"/>
      <path d="M${e.ex} ${e.ey} L${e.hx} ${e.hy}" stroke="#1e9e8f" stroke-width="5" stroke-linecap="round" opacity=".8"/>
      <circle cx="${e.ex}" cy="${e.ey}" r="4" fill="#c2413a"/>
      ${lab(270, 74, 'goniometer', 'زاویه‌سنج', { size: 11, fill: '#137568' })}
      ${f(270, 118, 'محور روی مفصل،', { size: 9.5, fill: INK })}${f(270, 134, 'یک بازو روی استخوان ثابت،', { size: 9.5, fill: INK })}${f(270, 150, 'بازوی دیگر روی استخوان متحرک', { size: 9.5, fill: INK })}
      ${f(180, 204, 'نتیجه به درجه ثبت می‌شود؛ مثلاً ROM آرنج ۰ تا ۱۵۰ درجه', { size: 9.5 })}`, 'گونیومتر');
  };

  /* سطح قطع عضو */
  A['amputation-levels'] = () => {
    const k = 1.1, cx = 180, top = 30;
    const X = d => cx + d * k, Y = d => top + d * k;
    const cut = (x1, y, x2, ab, en, side) => `<path d="M${X(x1)} ${Y(y)} L${X(x2)} ${Y(y)}" stroke="#c2413a" stroke-width="2.4" stroke-dasharray="5 3"/>${t(side < 0 ? 70 : 290, Y(y) + 4, ab, { size: 12, sym: true, fill: '#a8352f' })}${f(side < 0 ? 70 : 290, Y(y) + 18, en, { size: 9 })}<path d="M${side < 0 ? 92 : 268} ${Y(y)} L${side < 0 ? X(x1) - 4 : X(x2) + 4} ${Y(y)}" stroke="#9aa9b1"/>`;
    return svg(360, 340, `${title('سطح قطع عضو در پرونده')}${mannequin(cx, top, k)}
      ${cut(-52, 96, -38, 'AE', 'بالای آرنج', -1)}${cut(-58, 140, -44, 'BE', 'زیر آرنج', -1)}
      ${cut(4, 196, 32, 'AK', 'بالای زانو', 1)}${cut(10, 236, 28, 'BK', 'زیر زانو', 1)}`, 'سطح قطع عضو');
  };

  /* @@MORE@@ */

  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* اُستئو — دنیای ۰: زبان استخوان و عضله (پایه همه دنیاها)
 * پیش از رفتن سراغ استخوان‌ها و عضله‌ها دو چیز را یاد می‌گیریم: «دستگاه حرکتی چه می‌کند» و «واژه‌هایش چطور ساخته می‌شوند».
 * سطح ۱: دستگاه حرکتی • سطح ۲: ریشه‌های اصلی • سطح ۳: پیشوندها، پسوندها و دام‌های همزاد
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: 'زبان استخوان و عضله', short: 'زبان حرکت', sub: 'دستگاه حرکتی چه می‌کند و واژه‌هایش چطور ساخته می‌شوند: ریشه، پیشوند، پسوند و جهت‌ها',
    color: '#C2413A', dark: '#8E2A25', light: '#FBE7E3',
    levels: ['دستگاه حرکتی', 'ریشه‌های اصلی', 'پیشوندها و پسوندها'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: دستگاه حرکتی ================= */
      {
        id: 'lx1', title: '۲۰۶ استخوان و ۶۰۰ عضله', icon: '🦴', items: [
          L('یک دستگاه، دو تیم', `${fig('msk-parts', [], 'اجزای دستگاه حرکتی')}بدن بزرگسال حدود <b>۲۰۶ استخوان</b> و بیش از <b>۶۰۰ عضله اسکلتی</b> دارد. استخوان‌ها، مفصل‌ها، غضروف‌ها و رباط‌ها <b>دستگاه اسکلتی</b> را می‌سازند و عضله‌ها و تاندون‌ها <b>دستگاه عضلانی</b> را.<br>این دو با هم کار می‌کنند و نامشان یکی می‌شود: ${e('<b>musculoskeletal system</b>')} یا <b>دستگاه اسکلتی-عضلانی</b>.${memo('musculo + skeletal: اول عضله، بعد اسکلت. عضله نیرو می‌دهد و استخوان اهرم است؛ بدون هم حرکتی در کار نیست.')}`),
          L('تاندون یا رباط؟', `دو نوار محکم و سفید که اغلب با هم قاطی می‌شوند:<br>• ${e('<b>tendon</b>')} (تاندون، زردپی): <b>عضله را به استخوان</b> وصل می‌کند.<br>• ${e('<b>ligament</b>')} (رباط): <b>استخوان را به استخوان</b> وصل می‌کند و مفصل را پایدار نگه می‌دارد.<br>• ${e('<b>cartilage</b>')} (غضروف): بالشتک صاف و انعطاف‌پذیر روی سر استخوان‌ها در مفصل.${vs(['tendon', 'عضله به استخوان: تاندون آشیل'], ['ligament', 'استخوان به استخوان: رباط زانو'])}`),
          M('بدن یک بزرگسال حدود چند استخوان دارد؟', ['۲۰۶', '۱۰۶', '۳۰۶', '۶۰۰'], '۲۰۶ استخوان؛ ۶۰۰ تقریباً تعداد عضله‌های اسکلتی است.'),
          T('تاندون استخوان را به استخوان وصل می‌کند.', false, 'نادرست؛ تاندون عضله را به استخوان وصل می‌کند و رباط استخوان را به استخوان.', F('msk-parts', [])),
          M(`${e('<b>musculoskeletal system</b>')} یعنی…`, ['دستگاه اسکلتی-عضلانی', 'فقط دستگاه عضلانی', 'دستگاه عصبی-عضلانی', 'فقط استخوان‌ها'], 'muscul/o (عضله) + skelet/o (اسکلت).'),
          P('هر بخش را به کارش وصل کن', [['tendon', 'عضله به استخوان'], ['ligament', 'استخوان به استخوان'], ['cartilage', 'بالشتک صاف مفصل'], ['muscle', 'تولید نیرو و حرکت']], 'چهار جزء اصلی دستگاه حرکتی.'),
          B('محل به‌هم‌رسیدن دو استخوان را ___ می‌نامند.', ['joint', 'tendon', 'fascia'], 'joint یا articulation یعنی مفصل.'),
          S('املای انگلیسی «رباط» را بنویس', 'ligament', 'استخوان را به استخوان وصل می‌کند.', 'liga…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: 'شش کار اسکلت و عضله', icon: '🛡️', items: [
          L('اسکلت فقط چوب‌بست نیست', `${fig('skel-functions', [], 'کارهای اسکلت و عضله')}دستگاه اسکلتی-عضلانی شش کار اصلی دارد:<br>۱. <b>تکیه‌گاه</b> و شکل بدن<br>۲. <b>محافظت</b>: جمجمه از مغز و قفسه سینه از قلب و ریه<br>۳. <b>حرکت</b>: استخوان اهرم است و عضله نیرو<br>۴. <b>خون‌سازی</b> (${e('hematopoiesis')}) در مغز قرمز استخوان<br>۵. <b>ذخیره مواد معدنی</b>: کلسیم و فسفر<br>۶. <b>تولید گرما</b> با کار عضله‌ها`),
          L('متخصص‌ها را بشناس', `${tbl([['متخصص', 'کار'], [e('orthopedist'), 'استخوان، مفصل و عضله؛ جراح ارتوپد'], [e('rheumatologist'), 'آرتریت و بیماری‌های خودایمنی مفصل'], [e('podiatrist'), 'بیماری‌های پا'], [e('physiatrist'), 'طب فیزیکی و توان‌بخشی'], [e('chiropractor'), 'درمان دستی ستون مهره']])}${memo('orth/o یعنی «راست» و ped/o یعنی «کودک». ارتوپدی در آغاز علمِ صاف کردن استخوان‌های کج کودکان بود.')}${pearl('در پرونده، بخش ارتوپدی را کوتاه Ortho می‌نویسند: «ارجاع به Ortho» یعنی ارجاع به ارتوپد.')}`),
          M('خون‌سازی در کجا انجام می‌شود؟', ['مغز قرمز استخوان', 'مغز زرد استخوان', 'غضروف مفصلی', 'تاندون'], 'hematopoiesis در مغز قرمز استخوان اسفنجی انجام می‌شود؛ مغز زرد بیشتر چربی است.'),
          M('کدام ماده معدنی بیشتر از همه در استخوان ذخیره می‌شود؟', ['کلسیم', 'آهن', 'سدیم', 'ید'], 'کلسیم (Ca) و فسفر (P) استخوان را سخت می‌کنند.'),
          T('عضله‌ها با کار کردن گرمای بدن را تولید می‌کنند.', true, 'درست؛ لرز هم یعنی انقباض‌های سریع عضله برای تولید گرما.'),
          P('هر متخصص را به حوزه‌اش وصل کن', [['orthopedist', 'استخوان و مفصل'], ['rheumatologist', 'آرتریت خودایمنی'], ['podiatrist', 'بیماری‌های پا'], ['physiatrist', 'توان‌بخشی']], 'pod/o = پا؛ rheumat/o = جریان آبکی (بیماری مفصل).'),
          B('علم مطالعه حرکت بدن را ___ می‌نامند.', ['kinesiology', 'myology', 'osteology'], 'kinesi/o = حرکت.'),
          S('املای انگلیسی «ارتوپدی» را بنویس', 'orthopedics', 'orth/o (راست) + ped/o (کودک) + -ics.', 'ortho…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: 'آناتومی یک واژه', icon: '🧩', items: [
          L('واژه پزشکی یک پازل است', `${fig('wordparts', [], 'پیشوند + ریشه + پسوند')}هر واژه پزشکی از چند قطعه ساخته می‌شود:<br>• <b>ریشه</b> (${e('root')}): معنی اصلی؛ مثل ${e('oste')} = استخوان<br>• <b>پیشوند</b> (${e('prefix')}): اول واژه؛ مثل ${e('inter-')} = بین<br>• <b>پسوند</b> (${e('suffix')}): آخر واژه؛ مثل ${e('-itis')} = التهاب<br>• <b>واکه رابط</b> (معمولاً ${e('o')}): ریشه را به قطعه بعدی می‌چسباند: ${e('oste/o/porosis')}`),
          L('قاعده طلایی خواندن', `معنی را از <b>پسوند</b> شروع کن، بعد <b>پیشوند</b> و در آخر <b>ریشه</b>:<br>${wb('arthr/o', '-itis')} ← «التهابِ مفصل»<br>${wb('inter-', 'vertebr/o', '-al')} ← «مربوط به بینِ مهره‌ها»<br>${wb('oste/o', 'arthr/o', '-itis')} ← «التهابِ استخوان و مفصل»${memo('اگر پسوند با حرف صدادار شروع شود، واکه رابط حذف می‌شود: arthr/o + -itis = arthritis، نه arthroitis.')}`),
          M(`در ${e('<b>arthritis</b>')} پسوند کدام است و چه معنی دارد؟`, ['‎-itis = التهاب', '‎-osis = حالت غیرطبیعی', '‎-algia = درد', '‎-pathy = بیماری'], 'arthritis = التهاب مفصل.'),
          M(`${e('<b>osteopathy</b>')} یعنی…`, ['هر بیماری استخوان', 'التهاب استخوان', 'درد استخوان', 'علم استخوان'], 'oste/o + -pathy (بیماری).'),
          T('در arthralgia واکه رابط o حذف شده، چون ‎-algia با حرف صدادار شروع می‌شود.', true, 'درست؛ arthr + algia = درد مفصل.'),
          W('واژه‌ای بساز به معنی «التهاب استخوان»', ['oste/o', '-itis'], ['my/o', '-algia', 'arthr/o'], 'oste/o + -itis = osteitis.'),
          O('معنی intervertebral را با قاعده طلایی بخوان: ترتیب خواندن قطعه‌ها را بچین', ['‎-al: مربوط به', 'inter-: بین', 'vertebr/o: مهره', 'نتیجه: مربوط به بین مهره‌ها'], 'پسوند ← پیشوند ← ریشه.'),
          P('هر قطعه را به نوعش وصل کن', [['inter-', 'پیشوند'], ['vertebr/o', 'ریشه'], ['-al', 'پسوند'], ['o در osteoporosis', 'واکه رابط']], 'سه قطعه اصلی + واکه رابط.'),
          S('املای انگلیسی «التهاب مفصل» را بنویس', 'arthritis', 'arthr/o + -itis.', 'arth…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲: ریشه‌های اصلی ================= */
      {
        id: 'lx4', title: 'سه ستون: استخوان، عضله، مفصل', icon: '🏛️', items: [
          L('سه ریشه‌ای که همه‌جا می‌بینی', `${fig('root-trio', [], 'شش ریشه پایه')}${tbl([['ریشه', 'معنی', 'مثال'], [e('oste/o'), 'استخوان', e('osteitis')], [e('my/o, myos/o, muscul/o'), 'عضله', e('myalgia, myositis')], [e('arthr/o, articul/o'), 'مفصل', e('arthralgia, articular')]])}`),
          L('سه پسوند بیماری روی سه ریشه', `${tbl([['پسوند', 'سه واژه'], [e('-itis') + ' التهاب', e('osteitis, myositis, arthritis')], [e('-algia') + ' درد', e('ostealgia, myalgia, arthralgia')], [e('-pathy') + ' بیماری', e('osteopathy, myopathy, arthropathy')]])}${memo('سه ریشه × سه پسوند: ریشه را عوض کن و پسوند را نگه دار؛ ۹ واژه با هم یاد می‌گیری!')}${pearl('ostealgia را osteodynia هم می‌گویند؛ ‎-algia و ‎-dynia هر دو یعنی درد.')}`),
          M(`${e('<b>myalgia</b>')} یعنی…`, ['درد عضله', 'التهاب عضله', 'ضعف عضله', 'بیماری عضله'], 'my/o (عضله) + -algia (درد).'),
          M('کدام واژه یعنی «التهاب عضله»؟', ['myositis', 'myalgia', 'myopathy', 'osteitis'], 'myos/o + -itis؛ واکه i در myos حفظ شده است.'),
          T('arthropathy یعنی هر بیماری مفصل.', true, 'arthr/o + -pathy.'),
          W('واژه‌ای بساز به معنی «درد مفصل»', ['arthr/o', '-algia'], ['oste/o', '-itis', 'my/o'], 'arthr/o + -algia = arthralgia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['osteitis', 'التهاب استخوان'], ['myopathy', 'بیماری عضله'], ['arthralgia', 'درد مفصل'], ['ostealgia', 'درد استخوان']], 'جدول ۳ در ۳.'),
          B('واژه ___ یعنی «مربوط به مفصل».', ['articular', 'muscular', 'osseous'], 'articul/o + -ar.'),
          S('املای انگلیسی «درد عضله» را بنویس', 'myalgia', 'my/o + -algia.', 'my…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: 'ریشه‌های همراه: غضروف، تاندون، مغز استخوان', icon: '🧵', items: [
          L('ریشه‌های بافت', `${tbl([['ریشه', 'معنی', 'مثال'], [e('chondr/o'), 'غضروف', e('chondroma')], [e('ten/o, tend/o, tendin/o'), 'تاندون', e('tenotomy, tendinitis')], [e('ligament/o'), 'رباط', e('ligamentous')], [e('burs/o'), 'کیسه مفصلی (بورس)', e('bursitis')], [e('fasci/o'), 'نیام (فاسیا)', e('fasciotomy')], [e('synovi/o'), 'پرده سینوویال', e('synovitis')]])}`),
          L('مغز استخوان یا نخاع؟', `${e('<b>myel/o</b>')} دو معنی دارد: <b>مغز استخوان</b> و <b>نخاع</b>. از متن معلوم می‌شود کدام منظور است:<br>${wb('oste/o', 'myel/o', '-itis')} ← التهاب استخوان و <b>مغز استخوان</b><br>${wb('myel/o', '-gram')} ← عکس رنگی کانال <b>نخاع</b>${memo('tendin/o با i در tendinitis می‌آید و ten/o در tenotomy و tenorrhaphy؛ هر سه یعنی تاندون.')}`),
          M(`${e('<b>chondroma</b>')} یعنی…`, ['تومور خوش‌خیم غضروف', 'التهاب غضروف', 'نرمی غضروف', 'برداشتن غضروف'], 'chondr/o (غضروف) + -oma (تومور).'),
          M('کدام ریشه معنی «تاندون» ندارد؟', ['fasci/o', 'ten/o', 'tend/o', 'tendin/o'], 'fasci/o یعنی نیام، پوشش فیبری عضله.'),
          T('در osteomyelitis، myel/o به معنی نخاع است.', false, 'نادرست؛ در این واژه myel/o یعنی مغز استخوان: التهاب استخوان و مغز استخوان.'),
          W('واژه‌ای بساز به معنی «التهاب بورس»', ['burs/o', '-itis'], ['chondr/o', '-oma', 'ten/o'], 'burs/o + -itis = bursitis.'),
          P('هر ریشه را به معنی‌اش وصل کن', [['chondr/o', 'غضروف'], ['burs/o', 'کیسه مفصلی'], ['fasci/o', 'نیام'], ['synovi/o', 'پرده سینوویال']], 'ریشه‌های بافت.'),
          B('التهاب تاندون را ___ می‌نامند.', ['tendinitis', 'tenonitis', 'fasciitis'], 'tendin/o + -itis.'),
          S('املای انگلیسی «التهاب پرده سینوویال» را بنویس', 'synovitis', 'synov/o + -itis.', 'syno…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: 'جهت‌های بدن', icon: '🧭', items: [
          L('نزدیک، دور، داخل، خارج', `${fig('directions', [], 'جهت‌ها روی مانکن')}در ارتوپدی جای هر آسیب را با واژه‌های جهت می‌گویند:<br>• ${e('<b>proximal</b>')}: نزدیک به تنه؛ آرنج نسبت به مچ proximal است.<br>• ${e('<b>distal</b>')}: دور از تنه؛ انگشت‌ها نسبت به مچ distal‌اند.<br>• ${e('<b>medial</b>')}: به سمت خط وسط بدن<br>• ${e('<b>lateral</b>')}: به سمت پهلو، دور از خط وسط`),
          L('یک‌طرفه یا دوطرفه؟', `${wb('bi-', 'later/o', '-al')} ← دوطرفه: «آرتروز <b>bilateral</b> زانوها» یعنی هر دو زانو.<br>${wb('uni-', 'later/o', '-al')} ← یک‌طرفه<br>${wb('anter/o', 'poster/o', '-ior')} ← قدامی-خلفی؛ رادیوگرافی ${e('AP')} پرتو را از جلو به عقب می‌فرستد.${memo('Proximal مثل Proximity (نزدیکی) است؛ Distal مثل Distance (فاصله).')}${pearl('در گزارش رادیوگرافی «AP and lateral views» یعنی یک عکس از جلو و یک عکس از نیم‌رخ.')}`),
          M('کدام جمله درست است؟', ['زانو نسبت به مچ پا proximal است', 'مچ دست نسبت به آرنج proximal است', 'شست نسبت به مچ proximal است', 'انگشت‌ها نسبت به شانه proximal‌اند'], 'زانو به تنه نزدیک‌تر از مچ پاست.', null, F('directions', [])),
          M(`${e('<b>lateral</b>')} یعنی…`, ['به سمت پهلو، دور از خط وسط', 'به سمت خط وسط', 'نزدیک به تنه', 'از جلو به عقب'], 'later/o = پهلو.'),
          T('شکستگی distal radius یعنی شکستگی انتهای رادیوس در نزدیکی مچ.', true, 'distal = دور از تنه؛ سر پایینی رادیوس کنار مچ است (مثل شکستگی کالیس).'),
          P('هر واژه را به معنی‌اش وصل کن', [['proximal', 'نزدیک به تنه'], ['distal', 'دور از تنه'], ['medial', 'به سمت خط وسط'], ['bilateral', 'دوطرفه']], 'چهار واژه جهت.'),
          W('واژه‌ای بساز به معنی «یک‌طرفه»', ['uni-', 'later/o', '-al'], ['bi-', 'medi/o', '-ic'], 'uni- + later/o + -al = unilateral.'),
          B('اختصار ___ یعنی «قدامی-خلفی» در گزارش رادیوگرافی.', ['AP', 'PA', 'LAT'], 'anteroposterior.'),
          S('املای انگلیسی «دوطرفه» را بنویس', 'bilateral', 'bi- + later/o + -al.', 'bila…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳: پیشوندها و پسوندها ================= */
      {
        id: 'lx7', title: 'پیشوندهای جا، عدد و جهت', icon: '📍', items: [
          L('پیشوندهای جا', `${tbl([['پیشوند', 'معنی', 'مثال'], [e('inter-'), 'بین', e('intervertebral, intercostal')], [e('intra-'), 'درون', e('intramuscular')], [e('sub-'), 'زیر', e('subscapular')], [e('supra-'), 'بالای', e('suprapatellar')], [e('peri-'), 'پیرامون', e('periosteum')], [e('epi-'), 'روی', e('epiphysis')]])}`),
          L('پیشوندهای عدد و حرکت', `${tbl([['پیشوند', 'معنی', 'مثال'], [e('uni-, bi-, tri-, quadri-'), 'یک، دو، سه، چهار', e('biceps, quadriceps')], [e('hemi-'), 'نیم', e('hemiplegia')], [e('poly-'), 'چند', e('polymyositis')], [e('ab-'), 'دور از', e('abduction')], [e('ad-'), 'به سمت', e('adduction')]])}${vs(['inter-', 'بین: intercostal = بین دنده‌ها'], ['intra-', 'درون: intramuscular = داخل عضله'])}${memo('biceps دو سر دارد، triceps سه سر و quadriceps چهار سر؛ نام عضله تعداد سرهایش را می‌گوید.')}`),
          M(`${e('<b>intramuscular</b>')} یعنی…`, ['داخل عضله', 'بین عضله‌ها', 'زیر عضله', 'روی عضله'], 'intra- (درون) + muscul/o + -ar. تزریق IM داخل عضله است.'),
          M('کدام پیشوند یعنی «بالای»؟', ['supra-', 'sub-', 'inter-', 'peri-'], 'suprapatellar = بالای کشکک.'),
          T('periosteum پرده‌ای است که دور استخوان را گرفته است.', true, 'peri- (پیرامون) + oste/o + -um.'),
          W('واژه‌ای بساز به معنی «مربوط به بین دنده‌ها»', ['inter-', 'cost/o', '-al'], ['intra-', 'stern/o', '-itis'], 'inter- + cost/o + -al = intercostal.'),
          P('هر پیشوند را به معنی‌اش وصل کن', [['hemi-', 'نیم'], ['quadri-', 'چهار'], ['poly-', 'چند'], ['ab-', 'دور از']], 'پیشوندهای عدد و جهت.'),
          B('عضله سه‌سر بازو ___ نام دارد.', ['triceps', 'biceps', 'quadriceps'], 'tri- = سه.'),
          S('املای انگلیسی «داخل عضلانی» را بنویس', 'intramuscular', 'intra- + muscul/o + -ar.', 'intra…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: 'پسوندهای ویژه دستگاه حرکتی', icon: '✂️', items: [
          L('پسوندهای بیماری و حالت', `${tbl([['پسوند', 'معنی', 'مثال'], [e('-porosis'), 'متخلخل', e('osteoporosis')], [e('-malacia'), 'نرمی', e('osteomalacia')], [e('-asthenia'), 'ضعف', e('myasthenia')], [e('-trophy'), 'رشد، تغذیه', e('atrophy')], [e('-plegia'), 'فلج', e('paraplegia')], [e('-listhesis'), 'لغزش', e('spondylolisthesis')]])}`),
          L('پسوندهای جراحی و سلول', `${tbl([['پسوند', 'معنی', 'مثال'], [e('-blast'), 'سلول سازنده', e('osteoblast')], [e('-clast'), 'شکننده', e('osteoclast')], [e('-desis'), 'جوش دادن', e('arthrodesis')], [e('-centesis'), 'سوراخ کردن و کشیدن مایع', e('arthrocentesis')], [e('-clasia'), 'شکستن (جراحی)', e('osteoclasia')], [e('-rrhaphy'), 'بخیه', e('tenorrhaphy')]])}${memo('blast می‌سازد (Build)، clast خراب می‌کند (Crash). b برای ساختن، c برای شکستن.')}`),
          M(`${e('<b>arthrodesis</b>')} یعنی…`, ['جوش دادن جراحی مفصل', 'کشیدن مایع مفصل', 'برش مفصل', 'تعویض مفصل'], 'arthr/o + -desis (جوش دادن).'),
          M('کدام پسوند یعنی «ضعف»؟', ['‎-asthenia', '‎-trophy', '‎-plegia', '‎-malacia'], 'myasthenia = ضعف عضله.'),
          T('osteoclast سلولی است که استخوان تازه می‌سازد.', false, 'نادرست؛ osteoclast استخوان کهنه را تخریب می‌کند. سازنده osteoblast است.', F('bone-cells', [])),
          W('واژه‌ای بساز به معنی «بخیه تاندون»', ['ten/o', '-rrhaphy'], ['-desis', 'my/o', '-plegia'], 'ten/o + -rrhaphy = tenorrhaphy.'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-malacia', 'نرمی'], ['-plegia', 'فلج'], ['-listhesis', 'لغزش'], ['-centesis', 'سوراخ کردن و کشیدن مایع']], 'پسوندهای ویژه.'),
          B('نرمی استخوان را ___ می‌نامند.', ['osteomalacia', 'osteoporosis', 'osteopenia'], 'oste/o + -malacia.'),
          S('املای انگلیسی «جوش دادن جراحی مفصل» را بنویس', 'arthrodesis', 'arthr/o + -desis.', 'arthro…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: 'دام‌های همزاد', icon: '🪤', items: [
          L('یک حرف، یک دنیا فرق', `${fig('twins', [], 'my/o و myel/o؛ ilium و ileum')}${vs(['my/o', 'عضله: myalgia'], ['myel/o', 'مغز استخوان یا نخاع: myeloma'])}${vs(['ilium', 'استخوان لگن (ili/o)'], ['ileum', 'بخش پایانی روده باریک (ile/o)'])}`),
          L('دوقلوهای دیگر', `${vs(['radi/o', 'استخوان رادیوس، و هم پرتو: radiography'], ['uln/o', 'استخوان اولنا (طرف انگشت کوچک)'])}${vs(['‎-plegia', 'فلج کامل: hemiplegia'], ['‎-paresis', 'ضعف یا فلج ناقص: hemiparesis'])}${vs(['‎-tomy', 'برش: osteotomy'], ['‎-ectomy', 'برداشتن: ostectomy'])}${memo('ilium با i در لگن است (hIp)؛ ileum با e در روده است (Eat).')}`),
          M(`${e('<b>myeloma</b>')} یعنی…`, ['تومور سلول‌های مغز استخوان', 'تومور عضله', 'درد عضله', 'التهاب نخاع'], 'myel/o (مغز استخوان) + -oma؛ با my/o (عضله) فرق دارد.'),
          M('کدام واژه به استخوان لگن مربوط است؟', ['ilium', 'ileum', 'ileus', 'ileitis'], 'ilium با i = لگن؛ بقیه به روده مربوط‌اند.'),
          T('hemiparesis یعنی فلج کامل نیمه بدن.', false, 'نادرست؛ ‎-paresis ضعف یا فلج ناقص است. فلج کامل نیمه بدن hemiplegia است.'),
          M('فرق osteotomy و ostectomy چیست؟', ['اولی برش استخوان، دومی برداشتن استخوان', 'هر دو برداشتن استخوان', 'اولی التهاب، دومی برش', 'اولی ترمیم، دومی شکستن'], '-tomy برش و -ectomy برداشتن است.'),
          P('هر جفت را درست وصل کن', [['my/o', 'عضله'], ['myel/o', 'مغز استخوان'], ['ilium', 'استخوان لگن'], ['ileum', 'روده باریک']], 'دوقلوهای فریبنده.'),
          B('فلج کامل دو پا را ___ می‌نامند.', ['paraplegia', 'paraparesis', 'hemiplegia'], '‎-plegia = فلج کامل.'),
          S('املای انگلیسی «تومور مغز استخوان» را بنویس', 'myeloma', 'myel/o + -oma.', 'myel…'),
          N('m2r:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* اُستئو — دنیای ۱: استخوان
 * سطح ۱: بافت و ساختار استخوان • سطح ۲: شکل و نشانه‌های استخوان • سطح ۳: بیماری‌های استخوان */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'bn', sym: 'Bn', name: 'استخوان', short: 'استخوان', sub: 'سلول‌ها، بافت و ساختار استخوان، شکل‌ها و نشانه‌ها، و بیماری‌هایی مثل پوکی و نرمی استخوان',
    color: '#B07D2E', dark: '#7F5719', light: '#F8EEDC',
    levels: ['بافت و ساختار استخوان', 'شکل و نشانه‌ها', 'بیماری‌های استخوان'],
    gens: EA.genIds('bn'),
    lessons: [
      /* ================= سطح ۱: بافت و ساختار ================= */
      {
        id: 'bn1', title: 'استخوان زنده است', icon: '🧬', items: [
          L('سه سلول، یک کارگاه', `${fig('bone-cells', [], 'سه سلول استخوان')}استخوان بافت زنده‌ای است که همیشه ساخته و تخریب می‌شود:<br>• ${e('<b>osteoblast</b>')}: سلول <b>سازنده</b>؛ بافت تازه می‌سازد.<br>• ${e('<b>osteocyte</b>')}: سلول <b>بالغ</b>؛ در حفره‌ای درون استخوان زندگی می‌کند و بافت را نگه می‌دارد.<br>• ${e('<b>osteoclast</b>')}: سلول <b>تخریب‌کننده</b>؛ بافت کهنه را می‌خورد و کلسیم را به خون برمی‌گرداند.`),
          L('از غضروف تا استخوان', `اسکلت جنین اول از <b>غضروف</b> است و کم‌کم با استخوان جایگزین می‌شود؛ این فرایند ${e('<b>ossification</b>')} (استخوانی‌شدن) یا ${e('<b>osteogenesis</b>')} نام دارد.<br>سختی استخوان از مواد معدنی <b>کلسیم</b> (${e('Ca')}) و <b>فسفر</b> (${e('P')}) است و انعطافش از رشته‌های <b>کلاژن</b>.${memo('blast را با Build (ساختن) به یاد بسپار و clast را با Crash (خراب کردن)؛ cyte هم یعنی سلول ساکن.')}${pearl('در پوکی استخوان کار osteoclastها از osteoblastها جلو می‌زند؛ داروهای bisphosphonate همین osteoclastها را کند می‌کنند.')}`),
          M('کدام سلول استخوان تازه می‌سازد؟', ['osteoblast', 'osteoclast', 'osteocyte', 'chondrocyte'], '‎-blast = سلول سازنده.', null, F('bone-cells', [])),
          M(`${e('<b>osteoclast</b>')} چه می‌کند؟`, ['بافت کهنه استخوان را تخریب و جذب می‌کند', 'بافت تازه می‌سازد', 'غضروف می‌سازد', 'خون می‌سازد'], '‎-clast = شکستن.'),
          T('ossification یعنی جایگزین شدن غضروف با استخوان.', true, 'درست؛ فرایند استخوان‌سازی.'),
          P('هر سلول را به کارش وصل کن', [['osteoblast', 'ساختن استخوان'], ['osteocyte', 'نگهداری بافت'], ['osteoclast', 'تخریب استخوان کهنه'], ['chondrocyte', 'سلول غضروف']], '‎-blast، ‎-cyte، ‎-clast.'),
          W('واژه‌ای بساز به معنی «سلول استخوانی بالغ»', ['oste/o', '-cyte'], ['-blast', 'chondr/o', '-clast'], 'oste/o + -cyte = osteocyte.'),
          B('اختصار ___ یعنی کلسیم.', ['Ca', 'C', 'Cl'], 'Calcium.'),
          S('املای انگلیسی «سلول استخوان‌ساز» را بنویس', 'osteoblast', 'oste/o + -blast.', 'osteob…'),
          N('t2f:bn')
        ]
      },
      {
        id: 'bn2', title: 'آناتومی استخوان دراز', icon: '📏', items: [
          L('سر، گردن و تنه یک استخوان', `${fig('long-bone', [], 'استخوان دراز در برش طولی')}${tbl([['بخش', 'معنی'], [e('diaphysis'), 'تنه استخوان دراز'], [e('epiphysis'), 'سر پهن دو انتها'], [e('metaphysis'), 'ناحیه پهن‌شونده بین تنه و سر'], [e('medullary cavity'), 'حفره درون تنه، پر از مغز زرد'], [e('articular cartilage'), 'غضروف صاف روی سر استخوان در مفصل']])}`),
          L('دو پوشش', `${wb('peri-', 'oste/o', '-um')} ← <b>periosteum</b> (ضریع): پرده فیبری محکم که <b>بیرون</b> استخوان را پوشانده و رگ و عصب دارد. به جز سطح‌های مفصلی همه‌جا هست.<br>${wb('endo-', 'oste/o', '-um')} ← <b>endosteum</b>: پرده نازکی که <b>درون</b> حفره مغزی را پوشانده است.${memo('dia- یعنی «از میان»: diaphysis از میان استخوان می‌گذرد. epi- یعنی «روی»: epiphysis روی دو سرش نشسته است.')}${pearl('درد شدید شکستگی بیشتر از پاره شدن periosteum است، چون پر از عصب است.')}`),
          M('تنه استخوان دراز چه نام دارد؟', ['diaphysis', 'epiphysis', 'metaphysis', 'periosteum'], 'dia- + -physis.', null, F('long-bone', [])),
          M(`${e('<b>periosteum</b>')} کجاست؟`, ['پرده فیبری روی سطح بیرونی استخوان', 'درون حفره مغزی', 'روی سر استخوان در مفصل', 'بین دو مهره'], 'peri- = پیرامون.'),
          T('حفره مغزی تنه استخوان دراز در بزرگسال بیشتر مغز زرد (چربی) دارد.', true, 'yellow marrow در medullary cavity؛ مغز قرمز در استخوان اسفنجی سرهاست.'),
          O('بخش‌های استخوان ران را از بالا به پایین بچین', ['epiphysis بالایی', 'metaphysis', 'diaphysis', 'epiphysis پایینی'], 'سر، ناحیه پهن‌شونده، تنه، سر دیگر.'),
          P('هر بخش را به جایش وصل کن', [['diaphysis', 'تنه'], ['epiphysis', 'سر استخوان'], ['endosteum', 'پوشش درون حفره'], ['articular cartilage', 'سطح مفصلی']], 'آناتومی استخوان دراز.'),
          W('واژه‌ای بساز به معنی «پرده دور استخوان»', ['peri-', 'oste/o', '-um'], ['endo-', '-itis', 'chondr/o'], 'peri- + oste/o + -um = periosteum.'),
          S('املای انگلیسی «تنه استخوان دراز» را بنویس', 'diaphysis', 'dia- + -physis.', 'dia…'),
          N('f2t:bn')
        ]
      },
      {
        id: 'bn3', title: 'متراکم و اسفنجی؛ مغز قرمز و زرد', icon: '🧽', items: [
          L('دو نوع بافت', `${fig('bone-tissue', [], 'استخوان متراکم و اسفنجی')}• ${e('<b>compact bone</b>')} (متراکم یا قشری): لایه بیرونی سخت؛ از استوانه‌هایی به نام <b>osteon</b> ساخته شده که در مرکز هر کدام ${e('<b>haversian canal</b>')} با رگ و عصب است.<br>• ${e('<b>cancellous bone</b>')} (اسفنجی): درون سرهای استخوان؛ شبکه‌ای از تیغه‌های نازک (${e('trabeculae')}) که لابه‌لایش مغز قرمز است.`),
          L('مغز قرمز، مغز زرد', `${fig('bone-section', [], 'برش طولی واقعی استخوان ران')}• ${e('<b>red bone marrow</b>')}: خون‌سازی (${e('hematopoiesis')})؛ گلبول قرمز، سفید و پلاکت.<br>• ${e('<b>yellow bone marrow</b>')}: بیشتر چربی؛ در حفره مغزی تنه استخوان‌های دراز بزرگسال.${wb('hemat/o', '-poiesis')} ← ساختن خون${memo('کانال هاورس مثل لوله آب وسط یک تنه درخت است: حلقه‌ها دورش و رگ‌ها درونش.')}`),
          M('خون‌سازی در کدام بخش انجام می‌شود؟', ['مغز قرمز در استخوان اسفنجی', 'مغز زرد در حفره مغزی', 'استخوان متراکم', 'periosteum'], 'red marrow = hematopoiesis.', null, F('bone-tissue', [])),
          M('تیغه‌های نازک استخوان اسفنجی چه نام دارند؟', ['trabeculae', 'osteons', 'condyles', 'fissures'], 'trabeculae = تیرچه‌های کوچک.'),
          T('استخوان متراکم را cortical bone هم می‌گویند.', true, 'cortic/o = لایه بیرونی (قشر).'),
          P('هر واژه را به معنی‌اش وصل کن', [['compact bone', 'لایه بیرونی سخت'], ['cancellous bone', 'استخوان اسفنجی'], ['haversian canal', 'کانال رگ و عصب در استئون'], ['yellow bone marrow', 'مغز چربی']], 'بافت استخوان.'),
          B('ساختن سلول‌های خون را ___ می‌نامند.', ['hematopoiesis', 'osteogenesis', 'hemarthrosis'], 'hemat/o + -poiesis.'),
          O('خون‌سازی: مسیر را بچین', ['سلول بنیادی در مغز قرمز', 'تقسیم و بلوغ سلول', 'گلبول قرمز، سفید و پلاکت', 'ورود به گردش خون'], 'hematopoiesis در red bone marrow.'),
          S('املای انگلیسی «خون‌سازی» را بنویس', 'hematopoiesis', 'hemat/o + -poiesis.', 'hemato…'),
          N('d2t:bn')
        ]
      },
      /* ================= سطح ۲: شکل و نشانه‌ها ================= */
      {
        id: 'bn4', title: 'پنج شکل استخوان', icon: '🔷', items: [
          L('از روی شکل بشناس', `${fig('bone-shapes', [], 'پنج شکل استخوان')}${tbl([['شکل', 'مثال'], [e('long bone'), 'ران، بازو، درشت‌نی'], [e('short bone'), 'مچ دست و مچ پا'], [e('flat bone'), 'دنده، جناغ، کتف، استخوان‌های جمجمه'], [e('irregular bone'), 'مهره‌ها و استخوان‌های صورت'], [e('sesamoid bone'), 'کشکک زانو (درون تاندون)']])}`),
          L('کنجد درون تاندون', `${e('sesamoid')} یعنی «شبیه دانه کنجد». این استخوان‌های کوچک <b>درون تاندون</b> رشد می‌کنند؛ بزرگ‌ترینشان <b>کشکک</b> (${e('patella')}) درون تاندون عضله چهارسر ران است.${memo('استخوان پهن مثل سپر است: کتف و جمجمه و دنده‌ها از چیزهای مهم زیرشان محافظت می‌کنند.')}${pearl('استخوان‌های پهن مثل جناغ و لگن مغز قرمز فراوان دارند؛ نمونه‌برداری مغز استخوان اغلب از ستیغ تهیگاه (iliac crest) گرفته می‌شود.')}`),
          M('مهره‌ها کدام شکل استخوان‌اند؟', ['irregular', 'long', 'flat', 'sesamoid'], 'شکل پیچیده = نامنظم.', null, F('bone-shapes', [])),
          M('کشکک زانو چه نوع استخوانی است؟', ['sesamoid', 'short', 'flat', 'irregular'], 'درون تاندون عضله چهارسر رشد می‌کند.'),
          T('استخوان‌های مچ دست (carpals) جزو استخوان‌های کوتاه‌اند.', true, 'short bones تقریباً مکعبی‌اند.'),
          P('هر استخوان را به شکلش وصل کن', [['femur', 'long'], ['carpals', 'short'], ['scapula', 'flat'], ['vertebra', 'irregular']], 'پنج شکل.'),
          B('دنده‌ها و جناغ استخوان‌های ___ هستند.', ['flat', 'long', 'sesamoid'], 'flat bones از اندام‌ها محافظت می‌کنند.'),
          M('کدام ویژگی مال استخوان دراز است؟', ['یک تنه و دو سر دارد', 'درون تاندون است', 'تقریباً مکعبی است', 'شکل پیچیده دارد'], 'shaft + two ends.'),
          S('املای انگلیسی «استخوان کنجدی» را بنویس', 'sesamoid bone', 'sesam = کنجد + -oid = شبیه.', 'sesa…'),
          N('sp:bn')
        ]
      },
      {
        id: 'bn5', title: 'برجستگی‌ها: سر، کندیل، تروکانتر', icon: '⛰️', items: [
          L('جای چسبیدن عضله‌ها و مفصل‌ها', `${fig('bone-markings', [], 'نشانه‌های استخوان ران')}${e('<b>process</b>')} نام کلی هر برجستگی استخوان است:<br>• ${e('head')}: سر گرد که در مفصل جا می‌گیرد<br>• ${e('<b>condyle</b>')}: برجستگی گرد و صاف مفصلی<br>• ${e('<b>epicondyle</b>')}: برجستگی بالای کندیل (${e('epi-')} = روی)<br>• ${e('<b>trochanter</b>')}: برجستگی بزرگ ران برای عضله‌ها`),
          L('کوچک و بزرگ', `${tbl([['نشانه', 'معنی'], [e('tubercle'), 'برجستگی کوچک و گرد'], [e('tuberosity'), 'برجستگی بزرگ و زبر'], [e('crest'), 'لبه برجسته؛ مثل ستیغ تهیگاه'], [e('spine'), 'زائده نوک‌تیز']])}${memo('trochanter فقط مال استخوان ران است؛ دو تا دارد: بزرگ (greater) و کوچک (lesser).')}${pearl('«آرنج تنیس‌بازان» التهاب تاندون‌های چسبیده به lateral epicondyle استخوان بازوست؛ برای همین نامش lateral epicondylitis است.')}`),
          M('برجستگی بزرگ زیر گردن استخوان ران چیست؟', ['greater trochanter', 'condyle', 'tubercle', 'fossa'], 'trochanter فقط در ران است.', null, F('bone-markings', [])),
          M(`${e('<b>epicondyle</b>')} یعنی…`, ['برجستگی بالای کندیل', 'حفره زیر کندیل', 'سوراخ استخوان', 'سر استخوان'], 'epi- (روی) + condyle.'),
          T('tuberosity از tubercle بزرگ‌تر و زبرتر است.', true, 'tubercle کوچک و گرد؛ tuberosity بزرگ و زبر.'),
          P('هر نشانه را به معنی‌اش وصل کن', [['condyle', 'برجستگی گرد مفصلی'], ['trochanter', 'برجستگی بزرگ ران'], ['crest', 'لبه برجسته'], ['process', 'هر برجستگی استخوان']], 'برجستگی‌ها.'),
          B('برجستگی گرد و صاف انتهای استخوان که در مفصل شرکت می‌کند ___ نام دارد.', ['condyle', 'foramen', 'fissure'], 'condyle = گره مفصلی.'),
          M('کدام یک «فرورفتگی» است، نه برجستگی؟', ['fossa', 'tubercle', 'trochanter', 'epicondyle'], 'fossa = گودی کم‌عمق.'),
          S('املای انگلیسی «تروکانتر» را بنویس', 'trochanter', 'برجستگی بزرگ ران.', 'troch…'),
          N('t2f:bn')
        ]
      },
      {
        id: 'bn6', title: 'فرورفتگی‌ها و صفحه رشد', icon: '🕳️', items: [
          L('سوراخ، گودی، شکاف', `${tbl([['نشانه', 'معنی', 'مثال'], [e('foramen'), 'سوراخ برای عبور رگ و عصب', e('foramen magnum')], [e('fossa'), 'گودی کم‌عمق', 'حفره روی کتف'], [e('fissure'), 'شکاف باریک', 'شکاف کاسه چشم'], [e('sinus'), 'حفره هوایی درون استخوان', 'سینوس‌های اطراف بینی'], [e('sulcus'), 'شیار', 'شیار روی استخوان بازو']])}`),
          L('صفحه رشد', `${fig('growth-plate', [], 'کودک در برابر بزرگسال')}استخوان دراز در <b>صفحه رشد</b> (${e('epiphyseal plate')}) بلند می‌شود؛ لایه‌ای از غضروف بین سر و تنه. پس از بلوغ این صفحه استخوانی می‌شود و فقط خطی از آن می‌ماند (${e('epiphyseal line')}).${fig('epiphyseal-xray', [], 'رادیوگرافی زانوی نوجوان: صفحه‌های رشد باز')}${pearl('شکستگی‌ای که از صفحه رشد بگذرد در کودک خطرناک است، چون می‌تواند رشد آن استخوان را متوقف کند.')}`),
          M('مغز و نخاع از کدام سوراخ جمجمه به هم می‌رسند؟', ['foramen magnum', 'fossa', 'sinus', 'fissure'], 'foramen = سوراخ؛ magnum = بزرگ.'),
          M('استخوان دراز کودک در کجا بلند می‌شود؟', ['epiphyseal plate', 'medullary cavity', 'periosteum', 'diaphysis'], 'صفحه غضروفی رشد.', null, F('growth-plate', [])),
          T('در بزرگسالان صفحه رشد باز است و استخوان هنوز دراز می‌شود.', false, 'نادرست؛ پس از بلوغ صفحه بسته و به epiphyseal line تبدیل می‌شود.'),
          P('هر نشانه را به معنی‌اش وصل کن', [['foramen', 'سوراخ'], ['fossa', 'گودی کم‌عمق'], ['fissure', 'شکاف باریک'], ['sinus', 'حفره هوایی']], 'فرورفتگی‌ها.'),
          B('حفره‌های هوایی درون استخوان‌های صورت ___ نام دارند.', ['sinuses', 'foramina', 'condyles'], 'paranasal sinuses.'),
          T('در رادیوگرافی، صفحه رشد باز به شکل یک خط تیره بین سر و تنه دیده می‌شود.', true, 'غضروف در عکس تیره‌تر از استخوان است.', F('epiphyseal-xray', [])),
          S('املای انگلیسی «سوراخ استخوانی» را بنویس', 'foramen', 'جمع آن foramina است.', 'fora…'),
          N('sp:bn')
        ]
      },
      /* ================= سطح ۳: بیماری‌های استخوان ================= */
      {
        id: 'bn7', title: 'استخوان شکننده: پوکی و نرمی', icon: '🫥', items: [
          L('پوکی استخوان', `${fig('osteoporosis', [], 'از استخوان سالم تا پوکی')}${wb('oste/o', '-porosis')} ← ${e('<b>osteoporosis</b>')}: توده استخوان کم می‌شود و استخوان <b>متخلخل و شکننده</b> می‌شود؛ بیشتر در زنان پس از یائسگی. شکستگی مچ، لگن و مهره‌ها شایع است.<br>${wb('oste/o', '-penia')} ← ${e('<b>osteopenia</b>')}: توده استخوان کمتر از طبیعی ولی هنوز نه به اندازه پوکی.${fig('osteoporosis-bone', [], 'سر استخوان ران: سالم (چپ) و پوک (راست)')}`),
          L('نرمی استخوان', `${wb('oste/o', '-malacia')} ← ${e('<b>osteomalacia</b>')}: استخوان بزرگسال به خاطر کمبود ویتامین D یا کلسیم <b>نرم</b> می‌شود.<br>همین بیماری در کودک ${e('<b>rickets</b>')} (راشیتیسم) نام دارد: پاها خم می‌شوند و صفحه‌های رشد پهن.${fig('rickets-xray', [], 'راشیتیسم: پهن شدن صفحه رشد زانو')}${vs(['porosis', 'سوراخ‌سوراخ و شکننده (کمبود توده)'], ['malacia', 'نرم و خم‌شونده (کمبود مواد معدنی)'])}${pearl('برای تشخیص پوکی استخوان سنجش تراکم استخوان (DXA) انجام می‌شود؛ T-score مساوی یا کمتر از ‎-2.5‎ یعنی پوکی.')}`),
          M(`${e('<b>osteoporosis</b>')} یعنی…`, ['کاهش توده و متخلخل شدن استخوان', 'نرمی استخوان', 'عفونت استخوان', 'تومور استخوان'], 'oste/o + -porosis (متخلخل).', null, F('osteoporosis', [])),
          M('راشیتیسم بیشتر به کمبود چه چیزی مربوط است؟', ['ویتامین D', 'ویتامین C', 'آهن', 'پروتئین'], 'rickets = osteomalacia کودکان.'),
          T('osteopenia از osteoporosis شدیدتر است.', false, 'نادرست؛ استئوپنی مرحله خفیف‌تر کمبود توده استخوان است.'),
          W('واژه‌ای بساز به معنی «نرمی استخوان»', ['oste/o', '-malacia'], ['-porosis', 'chondr/o', '-penia'], 'oste/o + -malacia = osteomalacia.'),
          P('هر بیماری را به ویژگی‌اش وصل کن', [['osteoporosis', 'متخلخل و شکننده'], ['osteomalacia', 'نرمی در بزرگسال'], ['rickets', 'نرمی در کودک'], ['osteopenia', 'کمبود خفیف توده']], 'بیماری‌های متابولیک استخوان.'),
          B('اختصار ___ نام آزمون سنجش تراکم استخوان است.', ['DXA', 'MRI', 'EMG'], 'dual-energy X-ray absorptiometry.'),
          S('املای انگلیسی «پوکی استخوان» را بنویس', 'osteoporosis', 'oste/o + -porosis.', 'osteop…'),
          N('wb:bn')
        ]
      },
      {
        id: 'bn8', title: 'عفونت و بدشکلی استخوان', icon: '🦠', items: [
          L('عفونت تا مغز استخوان', `${wb('oste/o', 'myel/o', '-itis')} ← ${e('<b>osteomyelitis</b>')}: التهاب استخوان و مغز استخوان، معمولاً از عفونت باکتریایی؛ از راه خون یا از یک زخم باز (مثل زخم پای دیابتی).${fig('osteomyelitis', [], 'استئومیلیت در انگشت پا')}${wb('oste/o', 'necr/o', '-osis')} ← ${e('<b>osteonecrosis</b>')}: مرگ بافت استخوان از قطع خون‌رسانی (${e('avascular necrosis')}).`),
          L('بیماری‌های ساخت استخوان', `• ${e('<b>osteitis deformans</b>')} یا <b>بیماری پاژه</b>: استخوان خیلی سریع تخریب و دوباره ساخته می‌شود؛ ضخیم، ضعیف و بدشکل.${fig('paget-bone', [], 'بیماری پاژه: بافت نامنظم استخوان ران')}• ${e('<b>osteogenesis imperfecta</b>')} (${e('OI')}): بیماری ارثی کلاژن؛ استخوان‌ها نازک و شکننده‌اند و بارها می‌شکنند.<br>• ${e('<b>achondroplasia</b>')}: اختلال ارثی رشد غضروف؛ اندام‌ها کوتاه می‌مانند.${fig('oi-xray', [], 'OI: استخوان‌های نازک و شکسته')}`),
          M(`${e('<b>osteomyelitis</b>')} یعنی…`, ['التهاب استخوان و مغز استخوان', 'تومور مغز استخوان', 'التهاب عضله', 'نرمی استخوان'], 'oste/o + myel/o + -itis.', null, F('osteomyelitis', [])),
          M('نام دیگر بیماری پاژه چیست؟', ['osteitis deformans', 'osteogenesis imperfecta', 'osteomalacia', 'achondroplasia'], 'deformans = بدشکل‌کننده.'),
          T('osteogenesis imperfecta یک بیماری ارثی است که استخوان‌ها را شکننده می‌کند.', true, 'brittle bone disease؛ نقص در کلاژن.', F('oi-xray', [])),
          W('واژه‌ای بساز به معنی «مرگ بافت استخوان»', ['oste/o', 'necr/o', '-osis'], ['myel/o', '-itis', 'sarc/o'], 'oste/o + necr/o + -osis = osteonecrosis.'),
          P('هر بیماری را به توضیحش وصل کن', [['osteomyelitis', 'عفونت استخوان و مغز'], ['osteonecrosis', 'مرگ بافت از قطع خون'], ['achondroplasia', 'کوتاهی ارثی اندام'], ['osteitis deformans', 'بیماری پاژه']], 'عفونت و بدشکلی.'),
          B('در کلمه achondroplasia، پیشوند ___ یعنی «بدون».', ['a-', 'an-', 'dys-'], 'a- + chondr/o + -plasia: نبود رشد درست غضروف.'),
          S('املای انگلیسی «استئومیلیت» را بنویس', 'osteomyelitis', 'oste/o + myel/o + -itis.', 'osteom…'),
          N('r2m:bn')
        ]
      },
      {
        id: 'bn9', title: 'تومورهای استخوان و غضروف', icon: '🎯', items: [
          L('خوش‌خیم یا بدخیم؟', `${tbl([['واژه', 'معنی'], [e('osteoma'), 'تومور خوش‌خیم استخوان'], [e('exostosis'), 'خار استخوانی خوش‌خیم روی سطح'], [e('chondroma'), 'تومور خوش‌خیم غضروف'], [e('osteosarcoma'), 'سرطان استخوان؛ بیشتر نوجوانان، نزدیک زانو'], [e('chondrosarcoma'), 'سرطان غضروف'], [e('Ewing sarcoma'), 'سرطان تنه استخوان‌های دراز در کودکان']])}`),
          L('سارکوم یعنی چه؟', `${wb('oste/o', 'sarc/o', '-oma')} ← <b>osteosarcoma</b><br>${e('sarc/o')} یعنی «گوشت» و به بافت همبند اشاره دارد. هر تومور بدخیمی که از استخوان، غضروف یا عضله شروع شود <b>سارکوم</b> نام دارد؛ سرطان‌های بافت پوششی <b>کارسینوم</b>اند.${wb('myel/o', '-oma')} ← <b>myeloma</b>: سرطان سلول‌های مغز استخوان که استخوان را سوراخ‌سوراخ می‌کند.${memo('-oma به‌تنهایی معمولاً خوش‌خیم است؛ اگر sarc یا carcin پیش از آن بیاید، بدخیم است.')}${pearl('اسکن استخوان (bone scan) نقطه‌های پرفعالیت استخوان، مثل تومور و متاستاز، را تیره‌تر نشان می‌دهد.')}${fig('bone-scan', [], 'اسکن هسته‌ای کل استخوان‌ها')}`),
          M(`${e('<b>osteosarcoma</b>')} یعنی…`, ['تومور بدخیم استخوان', 'تومور خوش‌خیم استخوان', 'التهاب استخوان', 'خار استخوانی'], 'sarc/o = بافت همبند؛ sarcoma = بدخیم.'),
          M('کدام تومور خوش‌خیم است؟', ['chondroma', 'chondrosarcoma', 'Ewing sarcoma', 'osteosarcoma'], 'بدون sarc = معمولاً خوش‌خیم.'),
          T('exostosis یک برآمدگی استخوانی خوش‌خیم روی سطح استخوان است.', true, 'ex- (بیرون) + ost/o + -osis = خار استخوان.'),
          W('واژه‌ای بساز به معنی «سرطان غضروف»', ['chondr/o', 'sarc/o', '-oma'], ['oste/o', '-itis', 'myel/o'], 'chondr/o + sarc/o + -oma = chondrosarcoma.'),
          P('هر تومور را به توضیحش وصل کن', [['osteoma', 'خوش‌خیم استخوان'], ['osteosarcoma', 'بدخیم استخوان'], ['myeloma', 'سرطان مغز استخوان'], ['exostosis', 'خار استخوانی']], 'تومورها.'),
          B('کلسیم بالای خون را ___ می‌نامند؛ در متاستاز استخوان دیده می‌شود.', ['hypercalcemia', 'hypocalcemia', 'hyperuricemia'], 'hyper- + calc/o + -emia.'),
          S('املای انگلیسی «سرطان استخوان» را بنویس', 'osteosarcoma', 'oste/o + sarc/o + -oma.', 'osteos…'),
          N('m2r:bn')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* اُستئو — دنیای ۲: اسکلت
 * سطح ۱: اسکلت محوری، جمجمه و صورت • سطح ۲: ستون مهره و قفسه سینه • سطح ۳: اندام‌ها و لگن */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'sk', sym: 'Sk', name: 'اسکلت', short: 'اسکلت', sub: 'نام استخوان‌ها از جمجمه تا انگشت پا: جمجمه، ستون مهره، قفسه سینه، اندام‌ها و لگن',
    color: '#3F7FBF', dark: '#285A8C', light: '#E3EEF9',
    levels: ['جمجمه و اسکلت محوری', 'ستون مهره و قفسه سینه', 'اندام‌ها و لگن'],
    gens: EA.genIds('sk'),
    lessons: [
      /* ================= سطح ۱: جمجمه و اسکلت محوری ================= */
      {
        id: 'sk1', title: 'محوری و ضمیمه‌ای', icon: '🧍', items: [
          L('دو بخش اسکلت', `${fig('skeleton', [], 'اسکلت: محوری (عاجی) و ضمیمه‌ای (آبی)')}• ${e('<b>axial skeleton</b>')} (محوری، ۸۰ استخوان): محور میانی بدن؛ جمجمه، ستون مهره، دنده‌ها، جناغ و استخوان لامی.<br>• ${e('<b>appendicular skeleton</b>')} (ضمیمه‌ای، ۱۲۶ استخوان): اندام‌ها و دو کمربند شانه و لگن که آن‌ها را به تنه وصل می‌کنند.`),
          L('کمربندها', `• ${e('<b>pectoral girdle</b>')} (کمربند شانه): ترقوه‌ها و کتف‌ها<br>• ${e('<b>pelvic girdle</b>')} (کمربند لگن): دو استخوان لگن که هر کدام از جوش خوردن ${e('ilium')}، ${e('ischium')} و ${e('pubis')} ساخته شده‌اند.${memo('appendicular از appendage یعنی «زائده‌ای که آویزان است»: دست‌ها و پاها به تنه آویزان‌اند.')}${pearl('۸۰ + ۱۲۶ = ۲۰۶؛ نوزاد حدود ۳۰۰ استخوان دارد که بعضی‌شان بعداً به هم جوش می‌خورند.')}`),
          M('کدام استخوان جزو اسکلت محوری است؟', ['sternum', 'femur', 'clavicle', 'scapula'], 'جناغ در محور میانی است؛ ترقوه و کتف جزو کمربند شانه‌اند.', null, F('skeleton', [])),
          M('اسکلت ضمیمه‌ای چند استخوان دارد؟', ['۱۲۶', '۸۰', '۲۰۶', '۳۳'], '۸۰ محوری + ۱۲۶ ضمیمه‌ای = ۲۰۶.'),
          T('کمربند لگن جزو اسکلت محوری است.', false, 'نادرست؛ pelvic girdle جزو اسکلت ضمیمه‌ای است (ولی sacrum محوری است).'),
          P('هر بخش را به استخوان‌هایش وصل کن', [['axial skeleton', 'جمجمه، ستون مهره و دنده‌ها'], ['appendicular skeleton', 'اندام‌ها و کمربندها'], ['pectoral girdle', 'ترقوه و کتف'], ['pelvic girdle', 'تهیگاه، نشیمنگاهی و شرمگاهی']], 'محوری = محور میانی؛ ضمیمه‌ای = اندام‌ها.'),
          B('ترقوه‌ها و کتف‌ها ___ را می‌سازند.', ['pectoral girdle', 'pelvic girdle', 'thoracic cage'], 'pector/o = سینه.'),
          M('استخوان لامی (hyoid) چه ویژگی‌ای دارد؟', ['به هیچ استخوان دیگری مفصل نمی‌شود', 'متحرک‌ترین استخوان جمجمه است', 'بخشی از ستون مهره است', 'در کمربند شانه است'], 'U شکل در گردن؛ زبان را نگه می‌دارد.'),
          S('املای انگلیسی «اسکلت محوری» را بنویس', 'axial skeleton', 'axis = محور.', 'axi…'),
          N('t2f:sk')
        ]
      },
      {
        id: 'sk2', title: 'جمجمه: خانه مغز', icon: '💀', items: [
          L('هشت استخوان جمجمه', `${fig('skull', [], 'جمجمه از نیم‌رخ')}${tbl([['استخوان', 'جا'], [e('frontal'), 'پیشانی'], [e('parietal (2)'), 'سقف و دو طرف بالا'], [e('temporal (2)'), 'دو طرف پایین؛ مجرای گوش'], [e('occipital'), 'پشت و کف جمجمه'], [e('sphenoid'), 'کف جمجمه؛ پروانه‌ای'], [e('ethmoid'), 'بین دو کاسه چشم']])}`),
          L('درز و ملاج', `استخوان‌های جمجمه با مفصل‌های ثابت به نام ${e('<b>suture</b>')} (درز) به هم دوخته شده‌اند.<br>در نوزاد بین این استخوان‌ها نقطه‌های نرمی هست به نام ${e('<b>fontanel</b>')} (ملاج) که کم‌کم بسته می‌شوند.${wb('crani/o', '-um')} ← <b>cranium</b>: جمجمه${memo('temporal از tempus یعنی «زمان»: موی شقیقه زودتر از همه‌جا سفید می‌شود و گذر زمان را نشان می‌دهد.')}${fig('skull-xray', [], 'رادیوگرافی رنگی جمجمه از نیم‌رخ')}`),
          M('کدام استخوان پشت جمجمه است؟', ['occipital', 'frontal', 'temporal', 'ethmoid'], 'occipital = پس‌سری.', null, F('skull', [])),
          M(`${e('<b>fontanel</b>')} چیست؟`, ['نقطه نرم بین استخوان‌های جمجمه نوزاد', 'درز جمجمه بزرگسال', 'سوراخ بزرگ کف جمجمه', 'حفره هوایی پیشانی'], 'ملاج در ماه‌های اول زندگی بسته می‌شود.'),
          T('استخوان گیجگاهی (temporal) مجرای گوش را در خود دارد.', true, 'مجرای شنوایی در temporal bone است.'),
          P('هر استخوان را به جایش وصل کن', [['frontal', 'پیشانی'], ['parietal', 'سقف جمجمه'], ['occipital', 'پشت سر'], ['sphenoid', 'کف جمجمه']], 'استخوان‌های جمجمه.'),
          B('مفصل ثابت بین استخوان‌های جمجمه ___ نام دارد.', ['suture', 'symphysis', 'fontanel'], 'suture = درز.'),
          M('تعداد استخوان‌های parietal چندتاست؟', ['دو', 'یک', 'چهار', 'شش'], 'یک جفت؛ چپ و راست.'),
          S('املای انگلیسی «جمجمه» را بنویس', 'cranium', 'crani/o + -um.', 'cran…'),
          N('f2t:sk')
        ]
      },
      {
        id: 'sk3', title: 'صورت و فک', icon: '😁', items: [
          L('استخوان‌های صورت', `${tbl([['استخوان', 'معنی'], [e('mandible'), 'فک پایین؛ تنها استخوان متحرک جمجمه'], [e('maxilla'), 'فک بالا؛ دندان‌های بالا'], [e('zygomatic'), 'گونه'], [e('nasal'), 'تیغه بالای بینی'], [e('lacrimal'), 'گوشه داخلی چشم'], [e('vomer'), 'تیغه میانی بینی']])}`),
          L('مفصل فک', `فک پایین با استخوان گیجگاهی مفصل می‌شود: ${e('<b>temporomandibular joint</b>')} یا ${e('<b>TMJ</b>')}.${wb('mandibul/o', '-ar')} ← مربوط به فک پایین<br>${wb('maxill/o', '-ary')} ← مربوط به فک بالا${memo('Mandible با M از Move: فک پایین حرکت می‌کند. Maxilla با X مثل «ثابت» در بالای دهان.')}${pearl('در Case Study، خانم Susan برای بیماری دژنراتیو مفصل TMJ (DJD) آرتروپلاستی شد؛ بخش بیمار سر کندیل فک پایین را برداشتند.')}`),
          M('تنها استخوان متحرک جمجمه کدام است؟', ['mandible', 'maxilla', 'zygomatic', 'vomer'], 'فک پایین برای جویدن و حرف زدن حرکت می‌کند.'),
          M(`${e('<b>TMJ</b>')} یعنی…`, ['مفصل گیجگاهی-فکی', 'مفصل بین مهره‌ها', 'مفصل شانه', 'درز جمجمه'], 'temporomandibular joint.'),
          T('استخوان گونه zygomatic نام دارد.', true, 'zygomatic bone = cheekbone.'),
          P('هر استخوان را به جایش وصل کن', [['mandible', 'فک پایین'], ['maxilla', 'فک بالا'], ['zygomatic', 'گونه'], ['lacrimal', 'گوشه داخلی چشم']], 'استخوان‌های صورت.'),
          W('واژه‌ای بساز به معنی «مربوط به فک پایین»', ['mandibul/o', '-ar'], ['maxill/o', '-itis', 'crani/o'], 'mandibul/o + -ar = mandibular.'),
          B('فک بالا ___ نام دارد.', ['maxilla', 'mandible', 'mastoid'], 'maxill/o.'),
          S('املای انگلیسی «فک پایین» را بنویس', 'mandible', 'mandibul/o.', 'mand…'),
          N('d2t:sk')
        ]
      },
      /* ================= سطح ۲: ستون مهره و قفسه سینه ================= */
      {
        id: 'sk4', title: 'ستون مهره: ۲۶ حلقه', icon: '🐍', items: [
          L('پنج ناحیه', `${fig('spine', [], 'ستون مهره از نیم‌رخ')}${tbl([['ناحیه', 'تعداد', 'اختصار'], [e('cervical'), '۷ (گردن)', e('C1–C7')], [e('thoracic'), '۱۲ (سینه)', e('T1–T12')], [e('lumbar'), '۵ (کمر)', e('L1–L5')], [e('sacrum'), '۵ جوش‌خورده', e('S1–S5')], [e('coccyx'), '۴ جوش‌خورده', '']])}`),
          L('اطلس و آسه', `دو مهره اول گردن نام ویژه دارند:<br>• ${e('<b>atlas</b>')} (${e('C1')}): جمجمه را نگه می‌دارد؛ مثل اطلس که در اسطوره زمین را روی شانه داشت.<br>• ${e('<b>axis</b>')} (${e('C2')}): اطلس روی آن می‌چرخد و سر به چپ و راست می‌چرخد.${memo('صبحانه ساعت ۷، ناهار ساعت ۱۲، شام ساعت ۵: ۷ گردنی، ۱۲ سینه‌ای، ۵ کمری.')}${fig('cervical-xray', [], 'رادیوگرافی مهره‌های گردنی')}`),
          M('مهره‌های کمری چندتا هستند؟', ['۵', '۷', '۱۲', '۴'], 'L1 تا L5.', null, F('spine', [])),
          M(`${e('<b>atlas</b>')} کدام مهره است؟`, ['اولین مهره گردنی (C1)', 'دومین مهره گردنی', 'آخرین مهره سینه‌ای', 'اولین مهره کمری'], 'جمجمه را نگه می‌دارد.'),
          T('دنده‌ها به مهره‌های سینه‌ای (thoracic) وصل می‌شوند.', true, 'T1 تا T12 با ۱۲ جفت دنده مفصل می‌شوند.'),
          O('نواحی ستون مهره را از بالا به پایین بچین', ['cervical', 'thoracic', 'lumbar', 'sacrum', 'coccyx'], 'گردن، سینه، کمر، خاجی، دنبالچه.'),
          P('هر ناحیه را به تعداد مهره‌اش وصل کن', [['cervical', '۷'], ['thoracic', '۱۲'], ['lumbar', '۵'], ['coccyx', '۴ جوش‌خورده']], '۷، ۱۲، ۵.'),
          B('اختصار L4 یعنی چهارمین مهره ___.', ['کمری', 'گردنی', 'سینه‌ای'], 'L = lumbar.'),
          S('املای انگلیسی «دنبالچه» را بنویس', 'coccyx', 'coccyg/o.', 'cocc…'),
          N('ab:sk')
        ]
      },
      {
        id: 'sk5', title: 'مهره، دیسک و قفسه سینه', icon: '⭕', items: [
          L('یک مهره از بالا', `${fig('vertebra', [], 'مهره کمری از بالا')}${tbl([['بخش', 'معنی'], [e('vertebral body'), 'تنه مهره؛ بخش جلویی و وزن‌بر'], [e('vertebral foramen'), 'سوراخ مهره؛ گذرگاه نخاع'], [e('lamina'), 'تیغه پشتی کمان مهره'], [e('spinous process'), 'زائده خاری؛ برجستگی‌های پشت'], [e('transverse process'), 'زائده عرضی؛ دو طرف']])}بین تنه مهره‌ها بالشتکی از غضروف فیبری است: ${e('<b>intervertebral disk</b>')}؛ مرکز ژله‌ای آن ${e('<b>nucleus pulposus</b>')} نام دارد.`),
          L('قفسه سینه', `${fig('ribcage', [], 'قفسه سینه از جلو')}جناغ (${e('<b>sternum</b>')}) سه بخش دارد: دسته (${e('manubrium')})، تنه و زائده خنجری (${e('xiphoid process')}).<br>• ${e('<b>true ribs</b>')} (۱ تا ۷): مستقیم با غضروف دنده‌ای به جناغ وصل‌اند.<br>• ${e('<b>false ribs</b>')} (۸ تا ۱۲): غیرمستقیم یا اصلاً به جناغ نمی‌رسند.<br>• ${e('<b>floating ribs</b>')} (۱۱ و ۱۲): جلویشان آزاد است.${wb('inter-', 'cost/o', '-al')} ← بین دنده‌ها${pearl('در احیای قلبی-ریوی (CPR)، فشار روی نیمه پایینی جناغ داده می‌شود؛ فشار روی xiphoid می‌تواند آن را بشکند.')}`),
          M('نخاع از کدام بخش مهره می‌گذرد؟', ['vertebral foramen', 'vertebral body', 'spinous process', 'transverse process'], 'foramen = سوراخ.', null, F('vertebra', [])),
          M('دنده‌های حقیقی کدام‌اند؟', ['دنده‌های ۱ تا ۷', 'دنده‌های ۸ تا ۱۰', 'دنده‌های ۱۱ و ۱۲', 'همه ۱۲ جفت'], 'true ribs مستقیم به جناغ می‌رسند.', null, F('ribcage', [])),
          T('برجستگی‌هایی که روی پشت لمس می‌کنی spinous process هستند.', true, 'زائده‌های خاری.'),
          W('واژه‌ای بساز به معنی «برداشتن دنده»', ['cost/o', '-ectomy'], ['stern/o', '-itis', 'lamin/o'], 'cost/o + -ectomy = costectomy.'),
          P('هر بخش را به معنی‌اش وصل کن', [['lamina', 'تیغه پشتی کمان مهره'], ['nucleus pulposus', 'مرکز ژله‌ای دیسک'], ['xiphoid process', 'نوک پایینی جناغ'], ['floating ribs', 'دنده‌های شناور']], 'مهره و قفسه سینه.'),
          B('ریشه ___ یعنی دنده.', ['cost/o', 'stern/o', 'thorac/o'], 'costal = دنده‌ای.'),
          S('املای انگلیسی «بین‌مهره‌ای» را بنویس', 'intervertebral', 'inter- + vertebr/o + -al.', 'interv…'),
          N('wb:sk')
        ]
      },
      {
        id: 'sk6', title: 'بیماری‌های ستون مهره', icon: '〰️', items: [
          L('سه انحنای غیرطبیعی', `${fig('spine-curves', [], 'انحناهای ستون مهره')}${tbl([['واژه', 'ریشه', 'معنی'], [e('kyphosis'), e('kyph/o') + ' = قوز', 'قوز بیش از حد پشت (سینه‌ای)'], [e('lordosis'), e('lord/o') + ' = خمیده به عقب', 'گودی بیش از حد کمر'], [e('scoliosis'), e('scoli/o') + ' = کج', 'انحراف جانبی ستون مهره']])}${pearl('در Case Study، Rachel ۱۵ ساله برای اسکولیوز ایدیوپاتیک نوجوانی فیوژن خلفی ستون مهره (PSF) با میله و قلاب شد.')}`),
          L('دیسک، لغزش و التهاب', `${fig('disk-herniation', [], 'فتق دیسک')}• ${e('<b>herniated nucleus pulposus</b>')} (${e('HNP')}): مرکز دیسک بیرون می‌زند و ریشه عصب را فشار می‌دهد؛ «دیسک کمر».<br>• ${wb('spondyl/o', '-listhesis')} ← لغزش یک مهره روی مهره زیرین<br>• ${e('<b>spondylosis</b>')}: ساییدگی مهره‌ها و دیسک‌ها<br>• ${e('<b>ankylosing spondylitis</b>')}: التهاب مزمنی که مهره‌ها را به هم جوش می‌دهد<br>• ${e('<b>spina bifida</b>')}: بسته نشدن کمان مهره در جنین${fig('spondylolisthesis-xray', [], 'لغزش مهره L4 روی L5')}${memo('spondyl/o و vertebr/o هر دو یعنی مهره؛ بیماری‌ها بیشتر با spondyl/o و آناتومی بیشتر با vertebr/o ساخته می‌شوند.')}`),
          M(`${e('<b>scoliosis</b>')} یعنی…`, ['انحراف جانبی ستون مهره', 'قوز پشت', 'گودی بیش از حد کمر', 'لغزش مهره'], 'scoli/o = کج.', null, F('spine-curves', [])),
          M('بیرون زدن هسته ژله‌ای دیسک چه نام دارد؟', ['herniated nucleus pulposus', 'spondylolisthesis', 'spinal stenosis', 'spina bifida'], 'HNP؛ ریشه عصب را فشار می‌دهد.', null, F('disk-herniation', [])),
          T('kyphosis یعنی گودی بیش از حد ناحیه کمر.', false, 'نادرست؛ kyphosis قوز پشت است. گودی کمر lordosis است.'),
          W('واژه‌ای بساز به معنی «التهاب مهره»', ['spondyl/o', '-itis'], ['scoli/o', '-listhesis', 'lord/o'], 'spondyl/o + -itis = spondylitis.'),
          P('هر بیماری را به توضیحش وصل کن', [['spondylolisthesis', 'لغزش مهره'], ['spondylosis', 'ساییدگی مهره‌ها'], ['ankylosing spondylitis', 'جوش خوردن التهابی مهره‌ها'], ['spina bifida', 'بسته نشدن کمان مهره']], 'بیماری‌های ستون مهره.'),
          M('برای آزاد کردن نخاع یا ریشه عصب، کدام بخش مهره را برمی‌دارند؟', ['lamina (laminectomy)', 'vertebral body', 'transverse process', 'coccyx'], 'laminectomy = برداشتن لامینا.', null, F('ankylosing-xray', [], 'اسپوندیلیت آنکیلوزان: پل‌های استخوانی بین مهره‌ها')),
          S('املای انگلیسی «انحراف جانبی ستون مهره» را بنویس', 'scoliosis', 'scoli/o + -osis.', 'scol…'),
          N('t2f:sk')
        ]
      },
      /* ================= سطح ۳: اندام‌ها و لگن ================= */
      {
        id: 'sk7', title: 'شانه، بازو و دست', icon: '🖐️', items: [
          L('از ترقوه تا انگشت', `${fig('arm-bones', [], 'استخوان‌های اندام فوقانی')}${tbl([['استخوان', 'معنی'], [e('clavicle'), 'ترقوه'], [e('scapula'), 'کتف؛ نوکش acromion'], [e('humerus'), 'بازو'], [e('radius'), 'زند زبرین؛ سمت شست'], [e('ulna'), 'زند زیرین؛ سمت انگشت کوچک؛ olecranon نوک آرنج است'], [e('carpals (8)'), 'مچ دست'], [e('metacarpals (5)'), 'کف دست'], [e('phalanges (14)'), 'بندهای انگشت']])}`),
          L('رادیوس یا اولنا؟', `کف دستت را رو به بالا بگیر: استخوانی که در امتداد <b>شست</b> است ${e('radius')} است و استخوان سمت <b>انگشت کوچک</b> ${e('ulna')}.${wb('meta-', 'carp/o', '-al')} ← کف دست: «پس از مچ»${memo('Radius مثل Rotate: هنگام چرخاندن ساعد، رادیوس دور اولنا می‌چرخد.')}${pearl('شکستگی کالیس (Colles fracture) شکستگی انتهای رادیوس در مچ است؛ معمولاً با افتادن روی دست باز.')}`),
          M('استخوان سمت شست ساعد کدام است؟', ['radius', 'ulna', 'humerus', 'fibula'], 'radius = زند زبرین.', null, F('arm-bones', [])),
          M(`${e('<b>olecranon</b>')} کجاست؟`, ['نوک آرنج روی اولنا', 'نوک شانه روی کتف', 'سر استخوان بازو', 'قوزک پا'], 'برجستگی‌ای که روی آن تکیه می‌دهی.'),
          T('مچ دست ۸ استخوان کوچک (carpals) دارد.', true, 'هشت استخوان کوتاه در دو ردیف.'),
          P('هر استخوان را به جایش وصل کن', [['clavicle', 'ترقوه'], ['scapula', 'کتف'], ['humerus', 'بازو'], ['metacarpals', 'کف دست']], 'اندام فوقانی.'),
          M('افتادگی مچ دست (wrist drop) با کدام واژه نوشته می‌شود؟', ['carpoptosis', 'carpitis', 'carpectomy', 'metacarpal'], 'carp/o + -ptosis (افتادگی).'),
          B('بالاترین نقطه شانه، زائده ___ از کتف است.', ['acromion', 'olecranon', 'xiphoid'], 'acromion = نوک شانه.'),
          S('املای انگلیسی «استخوان بازو» را بنویس', 'humerus', 'humer/o + -us.', 'hum…'),
          N('t2f:sk')
        ]
      },
      {
        id: 'sk8', title: 'لگن و کمربند لگنی', icon: '🦋', items: [
          L('سه استخوان در یکی', `${fig('pelvis', [], 'لگن از جلو')}هر استخوان لگن از جوش خوردن سه استخوان ساخته شده:<br>• ${e('<b>ilium</b>')} (تهیگاه): بال‌های بالایی؛ لبه‌اش ${e('iliac crest')}<br>• ${e('<b>ischium</b>')} (نشیمنگاهی): پایین و پشت؛ روی آن می‌نشینیم<br>• ${e('<b>pubis</b>')} (شرمگاهی): جلو؛ دو استخوان شرمگاهی در ${e('pubic symphysis')} به هم می‌رسند.`),
          L('کاسه مفصل ران', `جایی که هر سه استخوان به هم می‌رسند، کاسه‌ای عمیق است به نام ${e('<b>acetabulum</b>')}؛ سر استخوان ران درون آن قرار می‌گیرد و مفصل ران را می‌سازد.<br>${wb('sacr/o', 'ili/o', '-ac')} ← <b>sacroiliac</b>: مفصل بین خاجی و تهیگاه<br>${wb('lumb/o', 'sacr/o', '-al')} ← <b>lumbosacral</b>: کمری-خاجی${memo('acetabulum در لاتین یعنی «کاسه سرکه»؛ کاسه‌ای که گوی ران درونش می‌چرخد.')}${fig('hip-replacement', [], 'رادیوگرافی تعویض کامل مفصل ران')}`),
          M('سر استخوان ران در کدام حفره قرار می‌گیرد؟', ['acetabulum', 'glenoid fossa', 'foramen magnum', 'iliac crest'], 'acetabulum = کاسه مفصل ران.', null, F('pelvis', [])),
          M('هنگام نشستن روی کدام استخوان تکیه می‌کنیم؟', ['ischium', 'ilium', 'pubis', 'sacrum'], 'ischi/o = نشیمنگاهی.'),
          T('مفصل sacroiliac بین استخوان خاجی و تهیگاه است.', true, 'sacr/o + ili/o + -ac.'),
          W('واژه‌ای بساز به معنی «کمری-خاجی»', ['lumb/o', 'sacr/o', '-al'], ['ili/o', 'pub/o', '-itis'], 'lumb/o + sacr/o + -al = lumbosacral.'),
          P('هر استخوان را به جایش وصل کن', [['ilium', 'بال بالایی لگن'], ['ischium', 'پایین و پشت'], ['pubis', 'جلو'], ['sacrum', 'پشت لگن، بین دو تهیگاه']], 'کمربند لگنی.'),
          B('مفصل غضروفی جلوی لگن ___ نام دارد.', ['pubic symphysis', 'sacroiliac joint', 'acetabulum'], 'sym- (با هم) + -physis.'),
          S('املای انگلیسی «کاسه مفصل ران» را بنویس', 'acetabulum', 'acetabul/o + -um.', 'aceta…'),
          N('m2r:sk')
        ]
      },
      {
        id: 'sk9', title: 'ران، ساق و پا', icon: '🦶', items: [
          L('از ران تا انگشت پا', `${fig('leg-bones', [], 'استخوان‌های اندام تحتانی')}${tbl([['استخوان', 'معنی'], [e('femur'), 'ران؛ بلندترین و محکم‌ترین استخوان'], [e('patella'), 'کشکک'], [e('tibia'), 'درشت‌نی؛ استخوان وزن‌بر ساق'], [e('fibula'), 'نازک‌نی؛ بیرون ساق'], [e('malleolus'), 'قوزک‌های دو طرف مچ پا'], [e('tarsals (7)'), 'مچ پا؛ بزرگ‌ترینش calcaneus (پاشنه)'], [e('metatarsals (5)'), 'کف پا']])}`),
          L('واژه‌های درد و حالت', `${wb('calcane/o', '-dynia')} ← درد پاشنه<br>${wb('supra-', 'patell/o', '-ar')} ← بالای کشکک<br>${wb('femor/o', '-al')} ← مربوط به ران؛ ${e('femoral artery')} سرخرگ ران است.${memo('tibia ضخیم و Tough است و در داخل؛ fibula باریک مثل Fiber است و در بیرون.')}${pearl('قوزک داخلی (medial malleolus) سر پایینی درشت‌نی است و قوزک خارجی سر پایینی نازک‌نی.')}`),
          M('بلندترین استخوان بدن کدام است؟', ['femur', 'tibia', 'humerus', 'fibula'], 'استخوان ران.', null, F('leg-bones', [])),
          M(`${e('<b>calcaneus</b>')} یعنی…`, ['استخوان پاشنه', 'کشکک', 'قوزک', 'استخوان کف پا'], 'بزرگ‌ترین استخوان مچ پا.'),
          T('fibula استخوان اصلی وزن‌بر ساق است.', false, 'نادرست؛ tibia وزن را تحمل می‌کند. fibula نازک‌تر و بیرونی است.'),
          W('واژه‌ای بساز به معنی «درد پاشنه»', ['calcane/o', '-dynia'], ['patell/o', '-itis', 'tars/o'], 'calcane/o + -dynia = calcaneodynia.'),
          O('استخوان‌ها را از لگن تا انگشت پا بچین', ['femur', 'tibia', 'tarsals', 'metatarsals', 'phalanges'], 'ران، ساق، مچ، کف، انگشت.'),
          P('هر استخوان را به نامش وصل کن', [['patella', 'کشکک'], ['tibia', 'درشت‌نی'], ['malleolus', 'قوزک'], ['metatarsals', 'کف پا']], 'اندام تحتانی.'),
          S('املای انگلیسی «کشکک زانو» را بنویس', 'patella', 'patell/o + -a.', 'pate…'),
          N('sp:sk')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* اُستئو — دنیای ۳: مفاصل و حرکت
 * سطح ۱: انواع مفصل و مفصل سینوویال • سطح ۲: حرکت‌های مفصل • سطح ۳: بیماری‌ها، تشخیص و جراحی مفصل */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'jt', sym: 'Jt', name: 'مفاصل و حرکت', short: 'مفاصل', sub: 'انواع مفصل، اجزای مفصل سینوویال، واژه‌های حرکت (فلکشن، ابداکشن…) و آرتریت، دررفتگی و جراحی مفصل',
    color: '#1E9E8F', dark: '#137568', light: '#DDF4F1',
    levels: ['انواع مفصل', 'حرکت‌های مفصل', 'بیماری و جراحی مفصل'],
    gens: EA.genIds('jt'),
    lessons: [
      /* ================= سطح ۱: انواع مفصل ================= */
      {
        id: 'jt1', title: 'ثابت، نیمه‌متحرک، متحرک', icon: '🔗', items: [
          L('سه نوع مفصل', `${fig('joint-types', [], 'سه نوع مفصل')}مفصل (${e('joint')} یا ${e('articulation')}) جایی است که دو استخوان به هم می‌رسند:<br>• ${e('<b>synarthrosis</b>')}: <b>ثابت</b> و فیبری؛ مثل درزهای جمجمه<br>• ${e('<b>amphiarthrosis</b>')}: <b>نیمه‌متحرک</b> و غضروفی؛ مثل دیسک بین مهره‌ها و سمفیز شرمگاهی<br>• ${e('<b>diarthrosis</b>')}: <b>متحرک</b> و سینوویال؛ مثل زانو، شانه و ران`),
          L('رمزگشایی نام‌ها', `${wb('syn-', 'arthr/o', '-osis')} ← «مفصلِ با هم بسته» = ثابت<br>${wb('amphi-', 'arthr/o', '-osis')} ← «مفصلِ دو طرفه» = کمی حرکت از دو سو<br>${wb('dia-', 'arthr/o', '-osis')} ← «مفصلِ از میان باز» = آزاد${memo('S-A-D به ترتیب حرکت: Synarthrosis (ساکن)، Amphiarthrosis (اندکی)، Diarthrosis (دائم در حرکت).')}`),
          M('مفصل‌های زانو و شانه از کدام نوع‌اند؟', ['diarthrosis (سینوویال)', 'synarthrosis (فیبری)', 'amphiarthrosis (غضروفی)', 'suture'], 'مفصل متحرک.', null, F('joint-types', [])),
          M(`${e('<b>synarthrosis</b>')} یعنی…`, ['مفصل ثابت', 'مفصل متحرک', 'مفصل نیمه‌متحرک', 'التهاب مفصل'], 'syn- (با هم، بسته) + arthr/o + -osis.'),
          T('سمفیز شرمگاهی یک مفصل نیمه‌متحرک غضروفی است.', true, 'amphiarthrosis.'),
          P('هر مفصل را به نوعش وصل کن', [['درز جمجمه', 'synarthrosis'], ['دیسک بین مهره‌ها', 'amphiarthrosis'], ['زانو', 'diarthrosis']], 'ثابت، نیمه‌متحرک، متحرک.'),
          B('مفصل متحرک را ___ هم می‌نامند.', ['synovial joint', 'fibrous joint', 'suture'], 'diarthrosis = synovial joint.'),
          W('واژه‌ای بساز به معنی «مفصل نیمه‌متحرک»', ['amphi-', 'arthr/o', '-osis'], ['syn-', '-itis', 'chondr/o'], 'amphi- + arthr/o + -osis.'),
          S('املای انگلیسی «مفصل» را بنویس', 'joint', 'نام دیگرش articulation است.', 'jo…'),
          N('t2f:jt')
        ]
      },
      {
        id: 'jt2', title: 'درون یک مفصل سینوویال', icon: '💧', items: [
          L('اجزای مفصل متحرک', `${fig('synovial-joint', [], 'مفصل سینوویال و اجزای آن')}${tbl([['جزء', 'کار'], [e('articular cartilage'), 'روکش صاف سر استخوان‌ها'], [e('joint capsule'), 'کیسه فیبری دور مفصل'], [e('synovial membrane'), 'پوشش درونی کپسول؛ مایع می‌سازد'], [e('synovial fluid'), 'روغن مفصل'], [e('ligament'), 'رباط؛ استخوان را به استخوان می‌بندد'], [e('meniscus'), 'بالشتک هلالی غضروفی زانو'], [e('bursa'), 'کیسه مایع برای کم کردن اصطکاک تاندون']])}`),
          L('زانو از نزدیک', `${tbl([['ریشه', 'معنی', 'مثال'], [e('synovi/o, synov/o'), 'پرده سینوویال', e('synovitis')], [e('burs/o'), 'بورس', e('bursitis')], [e('menisc/o'), 'منیسک', e('meniscectomy')], [e('ligament/o'), 'رباط', e('ligamentous')]])}${memo('synovial از syn (با) + ovum (تخم‌مرغ): مایع مفصل شبیه سفیده تخم‌مرغ لیز و چسبناک است.')}${pearl('آسیب منیسک زانو در ورزشکاران شایع است؛ با MRI یا آرتروسکوپی دیده می‌شود.')}${fig('meniscus-tear', [], 'نمای آرتروسکوپی پارگی منیسک زانو')}`),
          M('کدام جزء مایع مفصلی می‌سازد؟', ['synovial membrane', 'articular cartilage', 'ligament', 'meniscus'], 'پرده سینوویال.', null, F('synovial-joint', [])),
          M(`${e('<b>bursa</b>')} چیست؟`, ['کیسه کوچک پر از مایع برای کم کردن اصطکاک', 'غضروف هلالی زانو', 'نوار فیبری بین دو استخوان', 'روکش سر استخوان'], 'burs/o = کیسه.'),
          T('منیسک (meniscus) یک بالشتک غضروفی هلالی در زانوست.', true, 'C شکل؛ ضربه‌گیر.'),
          P('هر جزء را به کارش وصل کن', [['articular cartilage', 'روکش صاف سر استخوان'], ['synovial fluid', 'روان‌کننده مفصل'], ['joint capsule', 'کیسه فیبری دور مفصل'], ['ligament', 'بستن استخوان به استخوان']], 'مفصل سینوویال.'),
          W('واژه‌ای بساز به معنی «برداشتن منیسک»', ['menisc/o', '-ectomy'], ['burs/o', '-itis', 'synov/o'], 'menisc/o + -ectomy = meniscectomy.'),
          B('التهاب پرده سینوویال را ___ می‌نامند.', ['synovitis', 'bursitis', 'tendinitis'], 'synov/o + -itis.'),
          S('املای انگلیسی «منیسک» را بنویس', 'meniscus', 'جمع آن menisci است.', 'meni…'),
          N('f2t:jt')
        ]
      },
      {
        id: 'jt3', title: 'گوی، لولا، محور', icon: '⚙️', items: [
          L('شکل مفصل، حرکت را تعیین می‌کند', `${fig('synovial-kinds', [], 'انواع مفصل سینوویال')}${tbl([['نوع', 'حرکت', 'مثال'], [e('ball-and-socket'), 'در همه جهت‌ها', 'ران، شانه'], [e('hinge'), 'فقط خم و راست', 'آرنج، زانو'], [e('pivot'), 'چرخش دور یک محور', 'اطلس روی آسه'], [e('saddle'), 'دو جهت', 'قاعده شست'], [e('gliding'), 'لغزش سطح‌ها', 'بین استخوان‌های مچ']])}`),
          L('مفصل مصنوعی', `مفصل ران یک <b>گوی و کاسه</b> است: سر ران (گوی) درون ${e('acetabulum')} (کاسه).<br>وقتی آرتروز این مفصل را از کار بیندازد، با ${e('<b>arthroplasty</b>')} یک گوی و کاسه فلزی و پلاستیکی جایش می‌گذارند: ${e('THA')} یا ${e('THR')}.${fig('hip-prosthesis', [], 'پروتز مفصل ران: گوی فلزی در کاسه')}${memo('hinge = لولای در: فقط باز و بسته می‌شود؛ آرنج و زانو هم همین‌طور.')}`),
          M('مفصل شانه از کدام نوع است؟', ['ball-and-socket', 'hinge', 'pivot', 'gliding'], 'حرکت در همه جهت‌ها.', null, F('synovial-kinds', [])),
          M('چرخش سر به چپ و راست در کدام مفصل انجام می‌شود؟', ['pivot (اطلس و آسه)', 'hinge', 'saddle', 'ball-and-socket'], 'اطلس روی دندانه آسه می‌چرخد.'),
          T('آرنج یک مفصل لولایی (hinge) است.', true, 'فقط فلکشن و اکستنشن.'),
          P('هر مفصل را به نوعش وصل کن', [['ران', 'ball-and-socket'], ['زانو', 'hinge'], ['قاعده شست', 'saddle'], ['بین مچ‌ها', 'gliding']], 'انواع سینوویال.'),
          B('اختصار ___ یعنی تعویض کامل مفصل ران.', ['THR', 'TKR', 'ORIF'], 'total hip replacement.'),
          M('کدام مفصل دامنه حرکت بیشتری دارد؟', ['ball-and-socket', 'hinge', 'pivot', 'suture'], 'حرکت در همه صفحه‌ها.'),
          S('املای انگلیسی «مفصل لولایی» را بنویس', 'hinge joint', 'hinge = لولا.', 'hin…'),
          N('ab:jt')
        ]
      },
      /* ================= سطح ۲: حرکت‌ها ================= */
      {
        id: 'jt4', title: 'خم کن، باز کن', icon: '💪', items: [
          L('فلکشن و اکستنشن', `${fig('flex-ext', [], 'فلکشن و اکستنشن آرنج')}• ${e('<b>flexion</b>')}: خم کردن؛ زاویه بین دو استخوان <b>کم</b> می‌شود.<br>• ${e('<b>extension</b>')}: باز کردن؛ زاویه <b>زیاد</b> می‌شود.<br>• ${e('<b>hyperextension</b>')}: باز شدن بیش از حد طبیعی، مثل خم کردن سر به عقب.${wb('flex/o', '-ion')} ← عمل خم کردن${fig('move-flexion', [], 'فلکشن، اکستنشن و هایپراکستنشن گردن')}`),
          L('حرکت‌های مچ پا', `${fig('foot-moves', [], 'حرکت‌های مچ پا')}• ${e('<b>dorsiflexion</b>')}: پنجه به سمت ساق، بالا (${e('dors/o')} = پشت پا)<br>• ${e('<b>plantar flexion</b>')}: پنجه به پایین، مثل ایستادن روی پنجه (${e('plant/o')} = کف پا)${memo('Plantar مثل Plant: پا را در زمین می‌کاری (پنجه پایین). Dorsi مثل Dolphin: باله پشتی بالا می‌آید.')}${pearl('در آزمون wake-up حین جراحی ستون مهره (Case Study 6-2) دورسی‌فلکشن سلامت عضله tibialis anterior و پلانتارفلکشن سلامت gastrocnemius را نشان داد.')}`),
          M('خم کردن آرنج چه نام دارد؟', ['flexion', 'extension', 'abduction', 'rotation'], 'زاویه کم می‌شود.', null, F('flex-ext', [])),
          M('ایستادن روی پنجه پا کدام حرکت است؟', ['plantar flexion', 'dorsiflexion', 'eversion', 'inversion'], 'plant/o = کف پا.', null, F('foot-moves', [])),
          T('در extension زاویه بین دو استخوان بیشتر می‌شود.', true, 'باز کردن مفصل.'),
          W('واژه‌ای بساز به معنی «باز شدن بیش از حد»', ['hyper-', 'extens/o', '-ion'], ['flex/o', 'ab-', '-itis'], 'hyper- + extens/o + -ion = hyperextension.'),
          P('هر حرکت را به توضیحش وصل کن', [['flexion', 'کم شدن زاویه'], ['extension', 'زیاد شدن زاویه'], ['dorsiflexion', 'پنجه پا به بالا'], ['plantar flexion', 'پنجه پا به پایین']], 'خم و راست.'),
          B('نگاه کردن به سقف با بردن سر به عقب ___ گردن است.', ['hyperextension', 'flexion', 'rotation'], 'باز شدن بیش از حد طبیعی.'),
          S('املای انگلیسی «خم کردن» را بنویس', 'flexion', 'flex/o + -ion.', 'flex…'),
          N('d2t:jt')
        ]
      },
      {
        id: 'jt5', title: 'دور و نزدیک، چرخش', icon: '🔄', items: [
          L('ابداکشن و اداکشن', `${fig('abd-add', [], 'ابداکشن، اداکشن و حرکت دورانی')}${wb('ab-', 'duct/o', '-ion')} ← ${e('<b>abduction</b>')}: بردن اندام <b>دور از</b> خط وسط بدن<br>${wb('ad-', 'duct/o', '-ion')} ← ${e('<b>adduction</b>')}: آوردن اندام <b>به سمت</b> خط وسط${fig('move-abduction', [], 'ابداکشن و اداکشن شانه')}`),
          L('چرخش و دوران', `• ${e('<b>rotation</b>')}: چرخیدن استخوان به دور محور خودش؛ مثل «نه» گفتن با سر<br>• ${e('<b>circumduction</b>')}: حرکت دایره‌ای اندام که انتهایش یک مخروط رسم می‌کند (${e('circum-')} = دور)${vs(['abduction', 'AB = Away: دور از بدن'], ['adduction', 'AD = ADD: به بدن اضافه کن'])}${pearl('در Case Study 6-1 آقای Michael نمی‌توانست بازوی راستش را بدون درد ابداکت کند؛ MRI پارگی کامل روتاتور کاف را نشان داد.')}`),
          M('بالا بردن بازو از کنار بدن به سمت بیرون چه نام دارد؟', ['abduction', 'adduction', 'flexion', 'pronation'], 'ab- = دور از.', null, F('abd-add', [])),
          M(`${e('<b>circumduction</b>')} یعنی…`, ['حرکت دایره‌ای اندام', 'چرخش دور محور خود', 'نزدیک کردن به خط وسط', 'خم کردن'], 'circum- = دور.'),
          T('adduction یعنی آوردن اندام به سمت خط وسط بدن.', true, 'ad- = به سمت.'),
          W('واژه‌ای بساز به معنی «دور کردن از خط وسط»', ['ab-', 'duct/o', '-ion'], ['ad-', 'flex/o', 'circum-'], 'ab- + duct/o + -ion = abduction.'),
          P('هر حرکت را به مثالش وصل کن', [['abduction', 'باز کردن پاها در پرش ستاره'], ['adduction', 'جمع کردن دست‌ها کنار بدن'], ['rotation', 'تکان دادن سر برای «نه»'], ['circumduction', 'چرخاندن بازو مثل پروانه‌شنا']], 'چهار حرکت.'),
          B('ریشه ___ یعنی «بردن، کشاندن».', ['duct/o', 'flex/o', 'vers/o'], 'abduction و adduction.'),
          S('املای انگلیسی «نزدیک کردن به خط وسط» را بنویس', 'adduction', 'ad- + duct/o + -ion.', 'add…'),
          N('wb:jt')
        ]
      },
      {
        id: 'jt6', title: 'چرخش‌های ویژه و ROM', icon: '📐', items: [
          L('کف دست و کف پا', `${fig('pron-sup', [], 'پرونیشن و سوپینیشن')}• ${e('<b>supination</b>')}: کف دست رو به <b>بالا</b> (یا رو به جلو)<br>• ${e('<b>pronation</b>')}: کف دست رو به <b>پایین</b> (یا رو به عقب)<br>• ${e('<b>inversion</b>')}: کف پا به <b>داخل</b><br>• ${e('<b>eversion</b>')}: کف پا به <b>خارج</b>${memo('Supination: کاسه «سوپ» را در کف دست نگه می‌داری. Pronation: «پرو»اِ زمین را لمس می‌کنی.')}`),
          L('دامنه حرکت', `${e('<b>range of motion</b>')} (${e('ROM')}): بیشترین حرکت ممکن در یک مفصل، به <b>درجه</b>.<br>با ${e('<b>goniometer</b>')} (${e('goni/o')} = زاویه) اندازه گرفته می‌شود. ${e('PROM')} یعنی دامنه حرکت <b>غیرفعال</b>؛ درمانگر اندام را حرکت می‌دهد.${fig('goniometer', [], 'گونیومتر روی آرنج')}${pearl('در یادداشت پیگیری ارتوپدی: «Extension of left knee: 20 degrees short of full ROM» یعنی زانو ۲۰ درجه کمتر از حد کامل باز می‌شود. ابزار «گونیومتر» همین را حساب می‌کند.')}`),
          M('کف دست رو به بالا چه حرکتی است؟', ['supination', 'pronation', 'inversion', 'eversion'], 'سوپ در کف دست!', null, F('pron-sup', [])),
          M(`${e('<b>ROM</b>')} در پرونده یعنی…`, ['دامنه حرکت مفصل', 'رادیوگرافی مفصل', 'آرتریت روماتوئید', 'جااندازی مفصل'], 'range of motion.'),
          T('eversion یعنی چرخاندن کف پا به سمت داخل.', false, 'نادرست؛ eversion به خارج است و inversion به داخل.'),
          P('هر حرکت را به توضیحش وصل کن', [['pronation', 'کف دست رو به پایین'], ['supination', 'کف دست رو به بالا'], ['inversion', 'کف پا به داخل'], ['eversion', 'کف پا به خارج']], 'چرخش‌های ویژه.'),
          W('واژه‌ای بساز به معنی «ابزار اندازه‌گیری زاویه»', ['goni/o', '-meter'], ['-metry', 'flex/o', 'arthr/o'], 'goni/o + -meter = goniometer.'),
          B('دامنه حرکتی که درمانگر اندام بیمار را حرکت می‌دهد ___ نام دارد.', ['PROM', 'ROM', 'TKR'], 'passive range of motion.'),
          M('گونیومتر چه چیزی را اندازه می‌گیرد؟', ['زاویه حرکت مفصل', 'تراکم استخوان', 'قدرت عضله', 'مایع مفصل'], 'goni/o = زاویه.', null, F('goniometer-finger', [], 'گونیومتر روی مفصل انگشت')),
          N('sp:jt')
        ]
      },
      /* ================= سطح ۳: بیماری و جراحی مفصل ================= */
      {
        id: 'jt7', title: 'آرتروز، روماتوئید، نقرس', icon: '🔥', items: [
          L('دو آرتریت بزرگ', `${fig('arthritis', [], 'مفصل سالم، آرتروز و روماتوئید')}${vs(['osteoarthritis (OA)', 'ساییدگی غضروف با سن و وزن؛ خار استخوان؛ زانو و ران؛ نام دیگر DJD'], ['rheumatoid arthritis (RA)', 'خودایمنی؛ پرده سینوویال ملتهب؛ مفصل‌های کوچک دست دوطرفه؛ RF مثبت'])}${fig('ra-hands', [], 'آرتریت روماتوئید پیشرفته: تورم و انحراف انگشتان')}`),
          L('نقرس و دیگران', `• ${e('<b>gout</b>')} (نقرس): بلورهای <b>اسید اوریک</b> در مفصل، اغلب شست پا؛ علتش ${e('hyperuricemia')}. رسوب‌های سفت زیر پوست ${e('tophi')} نام دارند.<br>• ${e('<b>ankylosis</b>')}: خشکی و جوش‌خوردگی مفصل<br>• ${e('JRA')}: آرتریت روماتوئید نوجوانان${fig('gout-hands', [], 'تغییر شکل دست‌ها با رسوب اسید اوریک (توفوس)')}${pearl('در Case Study خانم Mary Pearl ۶۰ ساله با تورم و درد مفصل‌های آرنج، مچ و دست، ESR بالا داشت؛ تشخیص حمله حاد RA بود و NSAID و فیزیوتراپی گرفت.')}`),
          M('کدام بیماری خودایمنی است و پرده سینوویال را ملتهب می‌کند؟', ['rheumatoid arthritis', 'osteoarthritis', 'gout', 'bursitis'], 'RA؛ آزمایش RF.', null, F('ra-early', [], 'آرتریت روماتوئید زودرس: تورم مفصل‌های بند انگشتان')),
          M('اختصار DJD نام دیگر کدام بیماری است؟', ['osteoarthritis', 'rheumatoid arthritis', 'gout', 'Lyme disease'], 'degenerative joint disease.'),
          T('نقرس از رسوب بلورهای اسید اوریک در مفصل ایجاد می‌شود.', true, 'gouty arthritis؛ اغلب شست پا.', F('gout-toe', [])),
          W('واژه‌ای بساز به معنی «اسید اوریک بالای خون»', ['hyper-', 'uric/o', '-emia'], ['hypo-', 'arthr/o', '-itis'], 'hyper- + uric/o + -emia = hyperuricemia.'),
          P('هر بیماری را به ویژگی‌اش وصل کن', [['OA', 'ساییدگی غضروف'], ['RA', 'خودایمنی دوطرفه'], ['gout', 'بلور اسید اوریک'], ['ankylosis', 'خشکی و جوش‌خوردگی مفصل']], 'آرتریت‌ها.'),
          B('رسوب‌های سفت اسید اوریک زیر پوست ___ نام دارند.', ['tophi', 'bunions', 'ganglia'], 'مفرد: tophus.'),
          S('املای انگلیسی «آرتروز» را بنویس', 'osteoarthritis', 'oste/o + arthr/o + -itis.', 'osteoa…'),
          N('t2f:jt')
        ]
      },
      {
        id: 'jt8', title: 'دررفتگی، پیچ‌خوردگی و کیست', icon: '🤕', items: [
          L('آسیب‌های مفصل', `${tbl([['واژه', 'معنی'], [e('dislocation'), 'دررفتگی: سطح‌های مفصلی کاملاً از هم جدا'], [e('subluxation'), 'دررفتگی ناقص'], [e('sprain'), 'پیچ‌خوردگی: آسیب رباط؛ اغلب مچ پا'], [e('bursitis'), 'التهاب بورس'], [e('hemarthrosis'), 'خون در حفره مفصل'], [e('chondromalacia'), 'نرمی غضروف، اغلب پشت کشکک']])}${vs(['sprain', 'رباط آسیب دیده (استخوان به استخوان)'], ['strain', 'عضله یا تاندون کشیده شده'])}`),
          L('برآمدگی‌ها و عفونت', `• ${e('<b>ganglion cyst</b>')}: کیست پر از مایع روی غلاف تاندون یا کپسول، اغلب پشت مچ<br>• ${e('<b>bunion</b>')} (${e('hallux valgus')}): بزرگ شدن مفصل قاعده شست پا با کج شدن شست<br>• ${e('<b>Lyme disease</b>')}: عفونت باکتریایی با نیش کنه؛ بعدها آرتریت<br>• ${e('<b>SLE</b>')}: لوپوس؛ بیماری خودایمنی مفصل، پوست و کلیه؛ آزمایش ${e('ANA')}${fig('bunion', [], 'بونیون شست پا')}${fig('ganglion', [], 'کیست گانگلیون مچ')}`),
          M('آسیب رباط در اثر پیچ خوردن مفصل چه نام دارد؟', ['sprain', 'strain', 'subluxation', 'bursitis'], 'sprain = رباط؛ strain = عضله یا تاندون.'),
          M(`${e('<b>subluxation</b>')} یعنی…`, ['دررفتگی ناقص مفصل', 'دررفتگی کامل', 'شکستگی', 'جوش‌خوردگی مفصل'], 'sub- = کمتر از.'),
          T('hemarthrosis یعنی خونریزی در حفره مفصل.', true, 'hem/o + arthr/o + -osis.'),
          W('واژه‌ای بساز به معنی «نرمی غضروف»', ['chondr/o', '-malacia'], ['oste/o', '-porosis', 'burs/o'], 'chondr/o + -malacia = chondromalacia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['dislocation', 'دررفتگی کامل'], ['ganglion cyst', 'کیست مایع روی مچ'], ['bunion', 'برآمدگی قاعده شست پا'], ['Lyme disease', 'عفونت با نیش کنه']], 'آسیب‌ها و بیماری‌ها.'),
          B('نام دیگر بونیون ___ است.', ['hallux valgus', 'talipes', 'genu varum'], 'hallux = شست پا.'),
          S('املای انگلیسی «دررفتگی» را بنویس', 'dislocation', 'dis- = جدا.', 'dis…'),
          N('f2t:jt')
        ]
      },
      {
        id: 'jt9', title: 'نگاه به درون و تعمیر مفصل', icon: '🔧', items: [
          L('تشخیص', `${tbl([['روش', 'معنی'], [e('arthroscopy'), 'دیدن درون مفصل با دوربین باریک از برش کوچک'], [e('arthrocentesis'), 'کشیدن مایع مفصل با سوزن'], [e('arthrogram'), 'عکس مفصل پس از تزریق ماده حاجب'], [e('RF'), 'آزمایش خون برای آرتریت روماتوئید'], [e('ANA'), 'آزمایش خون برای لوپوس']])}${fig('nuclear-knee', [], 'اسکن هسته‌ای زانو: نواحی فعال آرتریت')}`),
          L('جراحی', `${tbl([['جراحی', 'معنی'], [e('arthroplasty'), 'تعویض یا ترمیم مفصل؛ THA، TKA'], [e('arthrodesis'), 'جوش دادن مفصل'], [e('arthrotomy'), 'برش مفصل'], [e('synovectomy'), 'برداشتن پرده سینوویال'], [e('meniscectomy'), 'برداشتن منیسک پاره'], [e('bursectomy'), 'برداشتن بورس']])}${pearl('در خلاصه ترخیص: مرد ۶۸ ساله با آرتروز دوطرفه زانو، TKR راست شد؛ بعد از جراحی PT برای راه رفتن با واکر و OT برای ADLs گرفت.')}`),
          M('دیدن درون مفصل با دوربین چه نام دارد؟', ['arthroscopy', 'arthrocentesis', 'arthrodesis', 'arthrogram'], 'arthr/o + -scopy.'),
          M('کشیدن مایع مفصل با سوزن چیست؟', ['arthrocentesis', 'arthroplasty', 'arthrotomy', 'synovectomy'], '‎-centesis = سوراخ کردن برای کشیدن مایع.'),
          T('TKA یعنی تعویض کامل مفصل زانو.', true, 'total knee arthroplasty؛ همان TKR.'),
          W('واژه‌ای بساز به معنی «جوش دادن جراحی مفصل»', ['arthr/o', '-desis'], ['-centesis', 'synov/o', '-plasty'], 'arthr/o + -desis = arthrodesis.'),
          P('هر روش را به معنی‌اش وصل کن', [['arthroplasty', 'تعویض مفصل'], ['arthrotomy', 'برش مفصل'], ['synovectomy', 'برداشتن پرده سینوویال'], ['arthrogram', 'عکس مفصل با ماده حاجب']], 'تشخیص و جراحی.'),
          O('مسیر بیمار آرتروز شدید زانو را بچین', ['درد و تورم و محدودیت حرکت', 'رادیوگرافی: آرتروز شدید', 'TKR (تعویض کامل زانو)', 'فیزیوتراپی و راه رفتن با واکر'], 'از خلاصه ترخیص.'),
          S('املای انگلیسی «آرتروسکوپی» را بنویس', 'arthroscopy', 'arthr/o + -scopy.', 'arthros…'),
          N('m2r:jt')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* اُستئو — دنیای ۴: عضلات
 * سطح ۱: بافت و ساختار عضله • سطح ۲: عضلات مهم بدن • سطح ۳: نشانه‌ها، بیماری‌ها و تشخیص عضله */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'mu', sym: 'Mu', name: 'عضلات', short: 'عضلات', sub: 'سه نوع بافت عضله، مبدأ و انتها، نام‌گذاری و عضلات مهم بدن، ضعف و فلج، دیستروفی و آسیب‌های تاندون',
    color: '#D64F6E', dark: '#A23350', light: '#FBE3E9',
    levels: ['بافت و ساختار عضله', 'عضلات مهم بدن', 'بیماری و تشخیص عضله'],
    gens: EA.genIds('mu'),
    lessons: [
      /* ================= سطح ۱: بافت و ساختار ================= */
      {
        id: 'mu1', title: 'سه نوع عضله', icon: '💪', items: [
          L('اسکلتی، صاف، قلبی', `${fig('muscle-types', [], 'سه نوع بافت عضله')}${tbl([['نوع', 'ظاهر', 'کنترل', 'جا'], [e('skeletal'), 'مخطط', 'ارادی', 'متصل به استخوان'], [e('smooth'), 'صاف (بی‌خط)', 'غیرارادی', 'دیواره روده، رگ، مثانه'], [e('cardiac'), 'مخطط و شاخه‌دار', 'غیرارادی', 'دیواره قلب']])}`),
          L('واژه‌های بافت عضله', `• ${e('<b>striated</b>')}: مخطط، راه‌راه زیر میکروسکوپ<br>• ${e('<b>voluntary</b>')}: ارادی؛ ${e('involuntary')}: غیرارادی<br>• ${e('smooth muscle')} را ${e('visceral')} (احشایی) هم می‌گویند.<br>${wb('my/o', 'cardi/o', '-um')} ← ${e('<b>myocardium</b>')}: عضله قلب${memo('قلب «مخطط» است مثل عضله اسکلتی، ولی «غیرارادی» مثل عضله صاف؛ یک ترکیب ویژه.')}`),
          M('کدام عضله هم مخطط و هم غیرارادی است؟', ['cardiac', 'skeletal', 'smooth', 'visceral'], 'عضله قلبی.', null, F('muscle-types', [])),
          M('عضله دیواره روده از کدام نوع است؟', ['smooth', 'skeletal', 'cardiac', 'striated'], 'عضله صاف یا احشایی.'),
          T('عضله اسکلتی ارادی است و با تاندون به استخوان وصل می‌شود.', true, 'skeletal = striated, voluntary.'),
          P('هر عضله را به ویژگی‌اش وصل کن', [['skeletal', 'ارادی و مخطط'], ['smooth', 'غیرارادی و صاف'], ['cardiac', 'غیرارادی و مخطط'], ['myocardium', 'عضله دیواره قلب']], 'سه نوع عضله.'),
          W('واژه‌ای بساز به معنی «عضله قلب»', ['my/o', 'cardi/o', '-um'], ['-itis', 'muscul/o', 'fasci/o'], 'my/o + cardi/o + -um = myocardium.'),
          B('عضله‌ای که زیر میکروسکوپ راه‌راه دیده می‌شود ___ است.', ['striated', 'smooth', 'visceral'], 'striated = مخطط.'),
          S('املای انگلیسی «عضله اسکلتی» را بنویس', 'skeletal muscle', 'skelet/o + -al.', 'skel…'),
          N('t2f:mu')
        ]
      },
      {
        id: 'mu2', title: 'از تاندون تا تار', icon: '🪢', items: [
          L('ساختار عضله اسکلتی', `${fig('muscle-structure', [], 'از استخوان تا تار عضلانی')}• ${e('<b>muscle fiber</b>')}: یک سلول بلند عضله<br>• ${e('<b>fascicle</b>')}: دسته‌ای از تارها<br>• ${e('<b>fascia</b>')}: نیام؛ پوشش فیبری دور عضله<br>• ${e('<b>tendon</b>')}: طناب فیبری که عضله را به استخوان می‌بندد<br>• ${e('<b>aponeurosis</b>')}: تاندون پهن و صفحه‌ای`),
          L('مبدأ و انتها', `${fig('origin-insertion', [], 'دوسر و سه‌سر بازو')}هر عضله دو سر اتصال دارد:<br>• ${e('<b>origin</b>')} (مبدأ): روی استخوانی که <b>ثابت</b> می‌ماند<br>• ${e('<b>insertion</b>')} (انتها): روی استخوانی که <b>حرکت می‌کند</b><br>عضله‌ای که حرکت را انجام می‌دهد ${e('prime mover')} (${e('agonist')})، عضله مخالف ${e('antagonist')} و عضله کمکی ${e('synergist')} نام دارد.${fig('muscles-work', [], 'کار گروهی عضلات بازو')}${memo('عضله همیشه انتها را به سمت مبدأ می‌کشد؛ هیچ عضله‌ای «هل» نمی‌دهد.')}`),
          M('محل اتصال عضله روی استخوان ثابت چه نام دارد؟', ['origin', 'insertion', 'fascia', 'aponeurosis'], 'مبدأ.', null, F('origin-insertion', [])),
          M('وقتی دوسر بازو آرنج را خم می‌کند، سه‌سر بازو چه نقشی دارد؟', ['antagonist (مخالف)', 'prime mover', 'synergist', 'origin'], 'triceps باید شل شود.'),
          T('fascicle دسته‌ای از تارهای عضلانی است.', true, 'fascicle = دسته کوچک.'),
          O('ساختار را از کوچک به بزرگ بچین', ['muscle fiber', 'fascicle', 'muscle', 'muscle group'], 'تار ← دسته ← عضله ← گروه عضلانی.'),
          P('هر واژه را به معنی‌اش وصل کن', [['fascia', 'پوشش فیبری عضله'], ['aponeurosis', 'تاندون پهن'], ['synergist', 'عضله کمکی'], ['insertion', 'اتصال روی استخوان متحرک']], 'ساختار و نقش عضله.'),
          B('تاندون عضله را به ___ وصل می‌کند.', ['استخوان', 'عضله دیگر', 'پوست'], 'tendon: muscle-to-bone.'),
          S('املای انگلیسی «نیام» را بنویس', 'fascia', 'fasci/o + -a.', 'fas…'),
          N('f2t:mu')
        ]
      },
      {
        id: 'mu3', title: 'نام‌گذاری عضلات', icon: '🏷️', items: [
          L('نام عضله یک کارت شناسایی است', `${tbl([['ملاک', 'مثال و معنی'], ['اندازه', e('gluteus maximus') + ': بزرگ‌ترین'], ['شکل', e('deltoid') + ': سه‌گوش؛ ' + e('trapezius') + ': ذوزنقه‌ای'], ['جهت تارها', e('rectus') + ': راست؛ ' + e('oblique') + ': مورب'], ['تعداد سر', e('biceps, triceps, quadriceps') + ': ۲، ۳ و ۴ سر'], ['جا', e('tibialis anterior') + ': جلوی درشت‌نی'], ['کار', e('flexor, extensor, adductor')], ['مبدأ و انتها', e('sternocleidomastoid')]])}`),
          L('چند نمونه رمزگشایی', `${wb('stern/o', 'cleid/o', 'mast/o', '-oid')} ← عضله‌ای که از جناغ و ترقوه به زائده پستانی جمجمه می‌رود.<br>${e('<b>rectus abdominis</b>')} ← عضله «راست» شکم<br>${e('<b>brachioradialis</b>')} ← از بازو (${e('brachi/o')}) به رادیوس${memo('deltoid از حرف یونانی Δ (دلتا): عضله شانه سه‌گوش است.')}`),
          M('نام deltoid از چه ملاکی گرفته شده است؟', ['شکل (سه‌گوش)', 'تعداد سر', 'جهت تارها', 'کار'], 'Δ = دلتا.'),
          M(`${e('<b>quadriceps</b>')} یعنی عضله‌ای با…`, ['چهار سر', 'دو سر', 'سه سر', 'تارهای مورب'], 'quadri- = چهار.'),
          T('rectus یعنی تارهای عضله راست و موازی با محور بدن‌اند.', true, 'rectus = straight.'),
          P('هر نام را به ملاکش وصل کن', [['gluteus maximus', 'اندازه'], ['external oblique', 'جهت تارها'], ['tibialis anterior', 'جا'], ['adductor longus', 'کار و اندازه']], 'هفت ملاک.'),
          W('نام عضله‌ای را بساز که از جناغ، ترقوه و زائده پستانی می‌گذرد', ['stern/o', 'cleid/o', 'mast/o', '-oid'], ['cost/o', '-itis'], 'sternocleidomastoid.'),
          B('عضله سه‌سر پشت بازو ___ brachii است.', ['triceps', 'biceps', 'quadriceps'], 'tri- = سه.'),
          S('املای انگلیسی «دلتوئید» را بنویس', 'deltoid', 'delta + -oid.', 'del…'),
          N('wb:mu')
        ]
      },
      /* ================= سطح ۲: عضلات مهم بدن ================= */
      {
        id: 'mu4', title: 'سر، گردن و تنه', icon: '🧑', items: [
          L('عضلات جلوی بدن', `${fig('muscles-front', [], 'عضلات مهم از جلو')}${tbl([['عضله', 'کار'], [e('masseter'), 'بستن دهان برای جویدن'], [e('orbicularis oculi'), 'بستن پلک'], [e('sternocleidomastoid'), 'چرخاندن و خم کردن سر'], [e('pectoralis major'), 'نزدیک کردن و خم کردن بازو'], [e('rectus abdominis'), 'خم کردن تنه؛ «شش‌تکه»'], [e('external oblique'), 'چرخاندن تنه']])}`),
          L('عضلات پشت و تنفس', `${fig('muscles-back', [], 'عضلات مهم از پشت')}• ${e('<b>trapezius</b>')}: ذوزنقه‌ای پشت گردن و شانه<br>• ${e('<b>latissimus dorsi</b>')}: پهن‌ترین عضله پشت؛ بازو را پایین و عقب می‌کشد<br>• ${e('<b>diaphragm</b>')}: عضله گنبدی زیر ریه؛ اصلی‌ترین عضله تنفس<br>• ${e('intercostal muscles')}: عضلات بین دنده‌ای${memo('orbicularis از orbit (مدار): عضله‌ای که دایره‌وار دور چشم یا دهان می‌چرخد.')}`),
          M('اصلی‌ترین عضله تنفس کدام است؟', ['diaphragm', 'pectoralis major', 'rectus abdominis', 'trapezius'], 'گنبدی بین قفسه سینه و شکم.'),
          M('کدام عضله فک را برای جویدن می‌بندد؟', ['masseter', 'orbicularis oculi', 'sternocleidomastoid', 'deltoid'], 'masseter = جونده.'),
          T('latissimus dorsi یک عضله پهن در پشت است.', true, 'latissimus = پهن‌ترین، dorsi = پشت.', F('muscles-back', [])),
          P('هر عضله را به جایش وصل کن', [['pectoralis major', 'سینه'], ['rectus abdominis', 'جلوی شکم'], ['trapezius', 'پشت گردن و شانه'], ['orbicularis oculi', 'دور چشم']], 'عضلات تنه و سر.'),
          B('عضله‌ای که سر را می‌چرخاند و از جناغ و ترقوه شروع می‌شود ___ است.', ['sternocleidomastoid', 'trapezius', 'masseter'], 'نامش از مبدأ و انتها آمده است.'),
          M('ریشه pector/o در pectoralis major یعنی…', ['سینه', 'پشت', 'شکم', 'گردن'], 'pector/o = chest.', null, F('muscles-front', [])),
          S('املای انگلیسی «دیافراگم» را بنویس', 'diaphragm', 'g بی‌صداست.', 'diaph…'),
          N('d2t:mu')
        ]
      },
      {
        id: 'mu5', title: 'شانه و بازو', icon: '🏋️', items: [
          L('عضلات اندام فوقانی', `${tbl([['عضله', 'کار'], [e('deltoid'), 'ابداکشن بازو؛ جای تزریق IM'], [e('biceps brachii'), 'فلکشن آرنج و سوپینیشن ساعد'], [e('triceps brachii'), 'اکستنشن آرنج'], [e('brachioradialis'), 'فلکشن آرنج'], [e('flexor / extensor carpi'), 'خم و باز کردن مچ']])}${pearl('تزریق عضلانی (IM) در بزرگسالان اغلب در deltoid، vastus lateralis (بیرون ران) یا ناحیه ventrogluteal انجام می‌شود.')}`),
          L('روتاتور کاف', `${e('<b>rotator cuff</b>')} چهار عضله و تاندون است که سر بازو را در کاسه کتف نگه می‌دارند و می‌چرخانند: ${e('<b>S</b>upraspinatus')}، ${e('<b>I</b>nfraspinatus')}، ${e('<b>T</b>eres minor')}، ${e('<b>S</b>ubscapularis')}.<br>پارگی آن (${e('rotator cuff tear')}) درد شانه و ضعف در بالا بردن بازو می‌دهد.${memo('SITS: چهار عضله‌ای که روی سر بازو «می‌نشینند» (sit).')}${pearl('در Case Study 6-1، آقای Michael با سابقه دررفتگی شانه، پارگی کامل روتاتور کاف داشت و جراحی Bankart برای پایداری مفصل انجام شد.')}`),
          M('عضله‌ای که آرنج را باز (اکستند) می‌کند کدام است؟', ['triceps brachii', 'biceps brachii', 'brachioradialis', 'deltoid'], 'سه‌سر پشت بازو.'),
          M('روتاتور کاف چند عضله دارد؟', ['چهار', 'دو', 'سه', 'شش'], 'SITS.'),
          T('deltoid یکی از جاهای رایج تزریق عضلانی است.', true, 'IM injection site.'),
          P('هر عضله را به کارش وصل کن', [['deltoid', 'ابداکشن بازو'], ['biceps brachii', 'فلکشن آرنج'], ['triceps brachii', 'اکستنشن آرنج'], ['rotator cuff', 'پایداری و چرخش شانه']], 'عضلات اندام فوقانی.'),
          W('واژه‌ای بساز به معنی «زیر کتف»', ['sub-', 'scapul/o', '-ar'], ['supra-', 'brachi/o', '-itis'], 'sub- + scapul/o + -ar = subscapular.'),
          B('ریشه ___ یعنی بازو.', ['brachi/o', 'carp/o', 'pector/o'], 'biceps brachii.'),
          S('املای انگلیسی «دوسر بازو» را بنویس', 'biceps brachii', 'bi- = دو، brachi/o = بازو.', 'biceps…'),
          N('ab:mu')
        ]
      },
      {
        id: 'mu6', title: 'ران، ساق و پا', icon: '🏃', items: [
          L('عضلات اندام تحتانی', `${tbl([['عضله', 'کار'], [e('gluteus maximus'), 'اکستنشن ران؛ بزرگ‌ترین عضله باسن'], [e('quadriceps femoris'), 'اکستنشن زانو؛ چهار سر جلوی ران'], [e('hamstrings'), 'فلکشن زانو؛ سه عضله پشت ران'], [e('sartorius'), 'بلندترین عضله بدن؛ خیاطه'], [e('gastrocnemius'), 'پلانتارفلکشن؛ عضله دوقلوی ساق'], [e('tibialis anterior'), 'دورسی‌فلکشن پا']])}`),
          L('تاندون آشیل', `عضلات ساق با ${e('<b>Achilles tendon</b>')} (تاندون پاشنه) به استخوان پاشنه (${e('calcaneus')}) می‌چسبند؛ محکم‌ترین تاندون بدن.${memo('sartorius از sartor یعنی «خیاط»: خیاط‌ها چهارزانو می‌نشستند و این عضله همان حرکت را می‌دهد.')}${pearl('رفلکس زانو (knee-jerk) با ضربه به تاندون کشکک انجام می‌شود و عضله چهارسر منقبض می‌شود؛ یک DTR.')}`),
          M('کدام عضله زانو را باز (اکستند) می‌کند؟', ['quadriceps femoris', 'hamstrings', 'gastrocnemius', 'sartorius'], 'چهارسر جلوی ران.'),
          M('بلندترین عضله بدن کدام است؟', ['sartorius', 'gluteus maximus', 'quadriceps femoris', 'latissimus dorsi'], 'خیاطه.'),
          T('تاندون آشیل عضلات ساق را به استخوان پاشنه وصل می‌کند.', true, 'calcaneal tendon.'),
          P('هر عضله را به کارش وصل کن', [['hamstrings', 'فلکشن زانو'], ['gastrocnemius', 'پلانتارفلکشن'], ['tibialis anterior', 'دورسی‌فلکشن'], ['gluteus maximus', 'اکستنشن ران']], 'عضلات اندام تحتانی.'),
          B('عضله دوقلوی ساق ___ نام دارد.', ['gastrocnemius', 'soleus', 'sartorius'], 'gastr/o = شکم (برآمدگی ساق).'),
          M('دویدن سریع گاهی به آسیب کدام گروه پشت ران می‌انجامد؟', ['hamstrings', 'quadriceps', 'deltoid', 'rotator cuff'], 'کشیدگی همسترینگ در دونده‌ها شایع است.', null, F('muscles-back', [])),
          S('املای انگلیسی «همسترینگ» را بنویس', 'hamstrings', 'سه عضله پشت ران.', 'ham…'),
          N('t2f:mu')
        ]
      },
      /* ================= سطح ۳: بیماری و تشخیص عضله ================= */
      {
        id: 'mu7', title: 'ضعف، تحلیل و تون', icon: '📉', items: [
          L('نشانه‌های عضله', `${tbl([['واژه', 'معنی'], [e('myasthenia'), 'ضعف عضله'], [e('atrophy'), 'تحلیل و کوچک شدن عضله'], [e('hypertrophy'), 'بزرگ شدن عضله'], [e('dystonia'), 'تون غیرطبیعی با حرکات پیچشی'], [e('myotonia'), 'شل نشدن عضله پس از انقباض'], [e('spasm'), 'انقباض ناگهانی و غیرارادی'], [e('contracture'), 'کوتاهی دائمی عضله یا تاندون']])}`),
          L('واژه‌های حرکت', `${wb('brady-', '-kinesia')} ← کندی حرکت (مثلاً در پارکینسون)<br>${wb('dys-', '-kinesia')} ← اختلال حرکت<br>${wb('hyper-', '-kinesia')} ← پرتحرکی<br>${wb('a-', '-trophy')} ← «بدون رشد» = تحلیل${vs(['atrophy', 'کوچک شدن؛ مثلاً پس از گچ گرفتن'], ['hypertrophy', 'بزرگ شدن؛ مثلاً با ورزش قدرتی'])}${pearl('در Case Study، Thomas پس از آسیب شبکه بازویی، atrophy عضلات supraspinatus، infraspinatus و deltoid داشت.')}`),
          M(`${e('<b>atrophy</b>')} یعنی…`, ['تحلیل و کوچک شدن عضله', 'بزرگ شدن عضله', 'ضعف عضله', 'گرفتگی عضله'], 'a- + -trophy.'),
          M('کندی حرکت را چه می‌نامند؟', ['bradykinesia', 'dyskinesia', 'hyperkinesia', 'dystonia'], 'brady- = کند.'),
          T('myotonia یعنی عضله پس از انقباض دیر شل می‌شود.', true, 'my/o + -tonia.'),
          W('واژه‌ای بساز به معنی «ضعف عضله»', ['my/o', '-asthenia'], ['-trophy', 'dys-', '-tonia'], 'my/o + -asthenia = myasthenia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['hypertrophy', 'بزرگ شدن عضله'], ['dystonia', 'تون غیرطبیعی'], ['spasm', 'انقباض ناگهانی'], ['contracture', 'کوتاهی دائمی']], 'نشانه‌های عضله.'),
          B('نبود تون عضله را ___ می‌نامند.', ['atonia', 'dystonia', 'myotonia'], 'a- + -tonia.'),
          S('املای انگلیسی «کندی حرکت» را بنویس', 'bradykinesia', 'brady- + -kinesia.', 'brady…'),
          N('wb:mu')
        ]
      },
      {
        id: 'mu8', title: 'بیماری‌ها و آسیب‌های عضله', icon: '🩹', items: [
          L('بیماری‌های عضله', `• ${e('<b>muscular dystrophy</b>')} (${e('MD')}): گروهی از بیماری‌های ارثی با ضعف و تحلیل پیشرونده عضلات؛ نوع Duchenne در پسران.<br>• ${e('<b>myasthenia gravis</b>')}: خودایمنی؛ پیام عصب به عضله نمی‌رسد؛ ضعف شدید و افتادن پلک.<br>• ${e('<b>fibromyalgia</b>')}: درد منتشر عضلات، نقاط حساس و خستگی.<br>• ${e('<b>polymyositis</b>')}: التهاب هم‌زمان چند عضله.<br>• ${e('<b>rhabdomyolysis</b>')}: تخریب عضله اسکلتی؛ پروتئین عضله وارد خون می‌شود و کلیه را آسیب می‌زند.`),
          L('آسیب‌های عضله و تاندون', `${tbl([['واژه', 'معنی'], [e('strain'), 'کشیدگی عضله یا تاندون'], [e('tendinitis'), 'التهاب تاندون'], [e('lateral epicondylitis'), 'آرنج تنیس‌بازان'], [e('carpal tunnel syndrome'), 'فشار روی عصب مدیان در مچ؛ گزگز و بی‌حسی'], [e('shin splints'), 'درد جلوی ساق در دونده‌ها'], [e('necrotizing fasciitis'), 'عفونت شدید نیام و عضله']])}${fig('carpal-tunnel', [], 'تونل کارپ: تاندون‌ها و عصب مدیان در مچ')}${pearl('در خلاصه ترخیص، پسر ۷ ساله‌ای از ۳-۴ سالگی ضعف عضلانی داشت؛ بیوپسی عضله دیستروفی عضلانی را تأیید کرد.')}`),
          M('کدام بیماری ارثی است و با ضعف پیشرونده عضله در پسران همراه است؟', ['muscular dystrophy (Duchenne)', 'fibromyalgia', 'myasthenia gravis', 'tendinitis'], 'MD؛ نوع Duchenne.'),
          M(`${e('<b>rhabdomyolysis</b>')} یعنی…`, ['تخریب عضله اسکلتی', 'التهاب چند عضله', 'ضعف خودایمنی عضله', 'پارگی تاندون'], 'rhabd/o + my/o + -lysis.'),
          T('سندروم تونل کارپ از فشار روی عصب مدیان در مچ ایجاد می‌شود.', true, 'CTS؛ گزگز شست تا انگشت حلقه.', F('carpal-tunnel', [])),
          W('واژه‌ای بساز به معنی «درد عضله و بافت فیبری»', ['fibr/o', 'my/o', '-algia'], ['-itis', 'poly-', 'ten/o'], 'fibr/o + my/o + -algia = fibromyalgia.'),
          P('هر بیماری را به توضیحش وصل کن', [['myasthenia gravis', 'ضعف خودایمنی و افتادن پلک'], ['polymyositis', 'التهاب چند عضله'], ['strain', 'کشیدگی عضله'], ['lateral epicondylitis', 'آرنج تنیس‌بازان']], 'بیماری‌ها و آسیب‌ها.'),
          B('پارگی عضله را ___ می‌نامند.', ['myorrhexis', 'myorrhaphy', 'myoplasty'], '‎-rrhexis = پارگی؛ ‎-rrhaphy = بخیه.'),
          S('املای انگلیسی «التهاب تاندون» را بنویس', 'tendinitis', 'tendin/o + -itis.', 'tendi…'),
          N('f2t:mu')
        ]
      },
      {
        id: 'mu9', title: 'فلج و آزمون‌های عضله', icon: '🔌', items: [
          L('فلج کامل یا ناقص', `${fig('paralysis', [], 'انواع فلج')}${tbl([['واژه', 'معنی'], [e('hemiplegia'), 'فلج یک طرف بدن'], [e('paraplegia'), 'فلج دو پا و پایین تنه'], [e('quadriplegia'), 'فلج چهار اندام'], [e('hemiparesis'), 'ضعف یا فلج ناقص یک طرف']])}${vs(['‎-plegia', 'فلج کامل'], ['‎-paresis', 'فلج ناقص، ضعف'])}`),
          L('آزمون‌های عضله', `${tbl([['آزمون', 'کار'], [e('EMG'), 'ثبت فعالیت الکتریکی عضله'], [e('CK / CPK'), 'آنزیمی که با آسیب عضله در خون بالا می‌رود'], [e('muscle biopsy'), 'نمونه‌برداری از عضله برای میکروسکوپ'], [e('DTR'), 'رفلکس عمقی تاندون با چکش رفلکس']])}${wb('electr/o', 'my/o', '-graphy')} ← ثبت برق عضله${pearl('در Case Study، Thomas برای آسیب شبکه بازویی EMG و مطالعه هدایت عصب انجام داد.')}`),
          M('فلج دو پا و پایین تنه چه نام دارد؟', ['paraplegia', 'hemiplegia', 'quadriplegia', 'hemiparesis'], 'para- + -plegia.', null, F('paralysis', [])),
          M('کدام آزمایش خون آسیب عضله را نشان می‌دهد؟', ['CK (creatine kinase)', 'RF', 'ESR', 'ANA'], 'CK یا CPK.'),
          T('EMG فعالیت الکتریکی عضله را ثبت می‌کند.', true, 'electromyography.'),
          W('واژه‌ای بساز به معنی «فلج چهار اندام»', ['quadri-', '-plegia'], ['hemi-', '-paresis', 'para-'], 'quadri- + -plegia = quadriplegia.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['EMG', 'نوار عصب و عضله'], ['CK', 'آنزیم عضله'], ['DTR', 'رفلکس عمقی تاندون'], ['MD', 'دیستروفی عضلانی']], 'اختصارهای عضله.'),
          B('ضعف نیمه بدن (نه فلج کامل) ___ نام دارد.', ['hemiparesis', 'hemiplegia', 'paraplegia'], '‎-paresis = ضعف.'),
          S('املای انگلیسی «فلج نیمه بدن» را بنویس', 'hemiplegia', 'hemi- + -plegia.', 'hemi…'),
          N('m2r:mu')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* اُستئو — دنیای ۵: شکستگی، تشخیص و درمان
 * سطح ۱: انواع شکستگی و ترمیم • سطح ۲: تصویربرداری، آزمایش و پرونده ارتوپدی • سطح ۳: جراحی، دارو و توان‌بخشی */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'fx', sym: 'Fx', name: 'شکستگی، تشخیص و درمان', short: 'شکستگی و درمان', sub: 'انواع شکستگی و جوش خوردن، رادیوگرافی تا DXA، جااندازی و ORIF، قطع عضو و پروتز، دارو، فیزیوتراپی و اختصارهای پرونده',
    color: '#7B5CD6', dark: '#5B3FB0', light: '#ECE6FB',
    levels: ['شکستگی و ترمیم', 'تشخیص و پرونده', 'جراحی، دارو و توان‌بخشی'],
    gens: EA.genIds('fx'),
    lessons: [
      /* ================= سطح ۱: شکستگی و ترمیم ================= */
      {
        id: 'fx1', title: 'بسته، باز، ترکه‌ای', icon: '💥', items: [
          L('اولین سؤال: پوست سالم است؟', `${fig('fracture-types', [], 'انواع شکستگی')}• ${e('<b>closed fracture</b>')} (بسته، ساده): پوست سالم است.<br>• ${e('<b>open fracture</b>')} (باز، مرکب): استخوان شکسته از پوست بیرون زده؛ خطر عفونت بالاست.<br>• ${e('<b>greenstick fracture</b>')}: شکستگی <b>ناقص</b>؛ استخوان مثل ترکه سبز خم می‌شود و فقط یک طرفش می‌شکند. در کودکان شایع است.<br>در پرونده شکستگی را کوتاه ${e('Fx')} می‌نویسند.`),
          L('شکل خط شکستگی', `${tbl([['نوع', 'خط شکستگی'], [e('transverse'), 'عرضی؛ صاف و عمود بر تنه'], [e('oblique'), 'مورب؛ با زاویه'], [e('spiral'), 'مارپیچی؛ از نیروی پیچشی'], [e('comminuted'), 'خردشده؛ چند تکه']])}${fig('xray-oblique', [], 'رادیوگرافی: شکستگی مورب درشت‌نی')}${memo('compound یعنی «ترکیبی»: شکستگی + زخم پوست = open fracture.')}${pearl('شکستگی مارپیچی در کودک خردسال بدون سابقه واضح، ممکن است نشانه کودک‌آزاری باشد و باید گزارش شود.')}`),
          M('در کدام شکستگی استخوان از پوست بیرون زده است؟', ['open (compound)', 'closed (simple)', 'greenstick', 'impacted'], 'compound = شکستگی + زخم.', null, F('fracture-types', [])),
          M('شکستگی ناقص که در کودکان شایع است کدام است؟', ['greenstick', 'comminuted', 'transverse', 'spiral'], 'مثل ترکه سبز.'),
          T('شکستگی مارپیچی معمولاً از نیروی پیچشی ایجاد می‌شود.', true, 'spiral = پیچشی.'),
          P('هر شکستگی را به خطش وصل کن', [['transverse', 'عرضی'], ['oblique', 'مورب'], ['spiral', 'مارپیچی'], ['comminuted', 'چندتکه']], 'شکل خط شکستگی.'),
          M('این رادیوگرافی کدام شکستگی را نشان می‌دهد؟', ['transverse (عرضی) در رادیوس و اولنا', 'greenstick', 'compression', 'Colles'], 'خط صاف و عمود بر تنه هر دو استخوان ساعد.', null, F('xray-transverse', [], 'رادیوگرافی ساعد')),
          B('اختصار ___ یعنی شکستگی.', ['Fx', 'Dx', 'Rx'], 'fracture.'),
          S('املای انگلیسی «شکستگی» را بنویس', 'fracture', 'fract = شکستن.', 'frac…'),
          N('t2f:fx')
        ]
      },
      {
        id: 'fx2', title: 'شکستگی‌های نام‌دار', icon: '📛', items: [
          L('شکستگی‌های ویژه', `${tbl([['نوع', 'معنی'], [e('compression'), 'فشاری؛ له شدن مهره، اغلب در پوکی استخوان'], [e('impacted'), 'یک تکه درون تکه دیگر فرو رفته'], [e('Colles'), 'انتهای رادیوس در مچ؛ افتادن روی دست باز'], [e('Pott'), 'انتهای نازک‌نی در مچ پا'], [e('pathologic'), 'در استخوانی که بیماری ضعیفش کرده'], [e('stress'), 'ترک ریز از فشار تکراری؛ دونده‌ها'], [e('avulsion'), 'تاندون یا رباط تکه‌ای استخوان را می‌کَند']])}`),
          L('شکستگی پاتولوژیک', `${fig('xray-colles', [], 'شکستگی کالیس: انتهای رادیوس')}اگر استخوان با نیروی خیلی کم بشکند، به بیماری زمینه‌ای فکر کن: پوکی استخوان، تومور، استئومیلیت یا OI. این ${e('<b>pathologic fracture</b>')} است.${pearl('در گزارش مشاوره بیمارستان پیرسون: خانم ۸۲ ساله با پوکی استخوان پس از لیز خوردن روی یخ، شکستگی خردشده گردن ران چپ داشت و تعویض مفصل ران شد. سال‌ها پیش هم شکستگی کالیس داشته است.')}`),
          M('شکستگی انتهای رادیوس با افتادن روی دست باز چه نام دارد؟', ['Colles fracture', 'Pott fracture', 'stress fracture', 'avulsion fracture'], 'شکستگی مچ دست.', null, F('xray-colles', [])),
          M('شکستگی مهره در پوکی استخوان معمولاً از کدام نوع است؟', ['compression', 'greenstick', 'spiral', 'avulsion'], 'مهره له می‌شود.'),
          T('شکستگی پاتولوژیک در استخوانی رخ می‌دهد که بیماری آن را ضعیف کرده است.', true, 'مثلاً تومور یا پوکی استخوان.'),
          P('هر شکستگی را به توضیحش وصل کن', [['Pott', 'انتهای نازک‌نی در مچ پا'], ['stress', 'ترک از فشار تکراری'], ['avulsion', 'کنده شدن تکه استخوان با تاندون'], ['impacted', 'فرورفتن دو تکه در هم']], 'شکستگی‌های ویژه.'),
          B('شکستگی ___ در دونده‌ها و سربازان شایع است.', ['stress', 'Colles', 'compression'], 'فشار تکراری.'),
          M('در گزارش «comminuted fracture of the femoral neck» استخوان چگونه شکسته است؟', ['خرد و چندتکه در گردن ران', 'فقط ترک خورده', 'مارپیچی در تنه ران', 'بدون جابه‌جایی در کشکک'], 'comminuted = خردشده؛ femoral neck = گردن ران.'),
          S('املای انگلیسی «خردشده» (نوع شکستگی) را بنویس', 'comminuted', 'دو m و یک n.', 'commi…'),
          N('f2t:fx')
        ]
      },
      {
        id: 'fx3', title: 'جوش خوردن و جااندازی', icon: '🩼', items: [
          L('بدن چطور استخوان را جوش می‌دهد', `${fig('fracture-healing', [], 'مراحل جوش خوردن')}۱. لخته خون (${e('hematoma')}) در محل شکستگی<br>۲. پینه نرم غضروفی<br>۳. پینه استخوانی (${e('<b>callus</b>')})<br>۴. بازسازی (${e('remodeling')}) تا استخوان شکل اولش را بگیرد<br>اگر جوش نخورد ${e('<b>nonunion</b>')} و اگر کج جوش بخورد ${e('<b>malunion</b>')} است.`),
          L('جااندازی و تثبیت', `${fig('fixation', [], 'گچ، ORIF و تثبیت خارجی')}• ${e('<b>reduction</b>')}: برگرداندن استخوان به جای درست؛ ${e('closed reduction')} بدون برش و ${e('open reduction')} با جراحی.<br>• ${e('<b>ORIF</b>')}: جااندازی باز و تثبیت داخلی با پلاک، پیچ یا میله<br>• ${e('external fixation')}: پین‌های داخل استخوان و قاب بیرون بدن<br>• ${e('traction')}: کشش با وزنه؛ ${e('cast')} (گچ) و ${e('splint')} (آتل) برای بی‌حرکت‌سازی${pearl('یادداشت پیگیری ارتوپدی: خانم ۷۶ ساله پس از ORIF شکستگی سوپراکندیلار ران چپ؛ زخم خوب جوش خورده و «fixation in place, mild osteopenia».')}`),
          M('بافت تازه‌ای که دور شکستگی ساخته می‌شود چه نام دارد؟', ['callus', 'hematoma', 'cast', 'splint'], 'پینه استخوانی.', null, F('fracture-healing', [])),
          M(`${e('<b>ORIF</b>')} یعنی…`, ['جااندازی باز و تثبیت داخلی', 'جااندازی بسته با گچ', 'تثبیت خارجی با قاب', 'کشش با وزنه'], 'open reduction internal fixation.', null, F('fixation', [])),
          T('malunion یعنی شکستگی اصلاً جوش نخورده است.', false, 'نادرست؛ malunion یعنی کج جوش خوردن. جوش نخوردن nonunion است.'),
          O('مراحل جوش خوردن شکستگی را بچین', ['hematoma', 'soft callus', 'bony callus', 'remodeling'], 'لخته ← پینه نرم ← پینه استخوانی ← بازسازی.'),
          P('هر روش را به توضیحش وصل کن', [['closed reduction', 'جااندازی بدون برش'], ['traction', 'کشش با وزنه'], ['splint', 'آتل'], ['external fixation', 'پین و قاب بیرونی']], 'روش‌های درمان شکستگی.'),
          B('برگرداندن استخوان شکسته به جای درست ___ نام دارد.', ['reduction', 'fixation', 'traction'], 're- + duct/o + -ion.'),
          S('املای انگلیسی «پینه استخوانی» را بنویس', 'callus', 'دو l.', 'cal…'),
          N('d2t:fx')
        ]
      },
      /* ================= سطح ۲: تشخیص و پرونده ================= */
      {
        id: 'fx4', title: 'تصویربرداری', icon: '🩻', items: [
          L('کدام عکس برای چه؟', `${fig('imaging', [], 'روش‌های تصویربرداری')}${tbl([['روش', 'کاربرد'], [e('radiography (X-ray)'), 'شکستگی و دررفتگی'], [e('CT'), 'برش‌های مقطعی؛ شکستگی پیچیده'], [e('MRI'), 'بافت نرم: دیسک، رباط، منیسک'], [e('bone scan'), 'تومور، عفونت، شکستگی پنهان'], [e('DXA'), 'تراکم استخوان و پوکی'], [e('myelogram'), 'کانال نخاع با ماده حاجب']])}`),
          L('واژه‌سازی تصویربرداری', `${wb('radi/o', '-graphy')} ← روش عکس‌برداری با پرتو<br>${wb('tom/o', '-graphy')} ← تصویر برش‌به‌برش (${e('CT')} = ${e('computed tomography')})<br>${wb('densit/o', '-metry')} ← اندازه‌گیری تراکم<br>${wb('myel/o', '-gram')} ← عکس کانال نخاع${fig('mri-disc', [], 'MRI ستون کمری: فتق دیسک')}${vs(['‎-graphy', 'روش ثبت تصویر'], ['‎-gram', 'خود تصویر ثبت‌شده'])}`),
          M('برای دیدن پارگی منیسک یا فتق دیسک کدام روش بهتر است؟', ['MRI', 'X-ray', 'DXA', 'EMG'], 'MRI بافت نرم را خوب نشان می‌دهد.', null, F('mri-disc', [])),
          M('تراکم استخوان با کدام آزمون سنجیده می‌شود؟', ['DXA', 'CT', 'arthrogram', 'myelogram'], 'dual-energy X-ray absorptiometry.', null, F('imaging', [])),
          T('در bone scan ماده رادیواکتیو در نواحی پرفعالیت استخوان جمع می‌شود.', true, 'اسکن هسته‌ای.', F('bone-scan', [])),
          W('واژه‌ای بساز به معنی «روش عکس‌برداری با پرتو»', ['radi/o', '-graphy'], ['-gram', 'tom/o', 'myel/o'], 'radi/o + -graphy = radiography.'),
          P('هر روش را به کاربردش وصل کن', [['X-ray', 'شکستگی'], ['MRI', 'دیسک و رباط'], ['DXA', 'پوکی استخوان'], ['myelogram', 'کانال نخاع']], 'تصویربرداری.'),
          B('تصویر ثبت‌شده با پسوند ___ ساخته می‌شود؛ مثل myelogram.', ['‎-gram', '‎-graphy', '‎-scopy'], '‎-gram = record.'),
          S('املای انگلیسی «رادیوگرافی» را بنویس', 'radiography', 'radi/o + -graphy.', 'radio…'),
          N('ab:fx')
        ]
      },
      {
        id: 'fx5', title: 'آزمایش خون و T-score', icon: '🧪', items: [
          L('آزمایش‌های التهاب و آرتریت', `${tbl([['آزمایش', 'معنی'], [e('ESR'), 'سرعت رسوب گلبول قرمز؛ بالا = التهاب'], [e('CRP'), 'پروتئین واکنشی C؛ بالا = التهاب'], [e('RF'), 'فاکتور روماتوئید؛ در بیشتر بیماران RA'], [e('ANA'), 'آنتی‌بادی ضدهسته؛ لوپوس'], [e('uric acid'), 'بالا در نقرس'], [e('Ca'), 'کلسیم خون'], [e('CK'), 'آنزیم عضله']])}`),
          L('تفسیر T-score', `${fig('tscore', [], 'مقیاس T-score')}گزارش ${e('DXA')} تراکم استخوان را با میانگین یک بزرگسال جوان سالم مقایسه می‌کند:<br>• ${e('≥ -1.0')}: طبیعی<br>• ${e('-1.0')} تا ${e('-2.5')}: ${e('osteopenia')}<br>• ${e('≤ -2.5')}: ${e('osteoporosis')}${pearl('ابزار «گونیومتر و تراکم استخوان» در بخش ابزارها T-score را برایت تفسیر می‌کند.')}`),
          M('بالا بودن ESR و CRP نشانه چیست؟', ['التهاب در بدن', 'پوکی استخوان', 'آسیب عضله', 'کمبود کلسیم'], 'نشانگرهای التهاب.'),
          M('T-score برابر ‎-2.8‎ یعنی…', ['پوکی استخوان', 'استئوپنی', 'طبیعی', 'نرمی استخوان'], '≤ -2.5 = osteoporosis.', null, F('tscore', [])),
          T('RF بیشتر در بیماران آرتریت روماتوئید مثبت است.', true, 'rheumatoid factor.'),
          P('هر آزمایش را به بیماری‌اش وصل کن', [['RF', 'آرتریت روماتوئید'], ['ANA', 'لوپوس'], ['uric acid', 'نقرس'], ['CK', 'آسیب عضله']], 'آزمایش‌های ارتوپدی و روماتولوژی.'),
          M('T-score برابر ‎-1.6‎ چه تفسیری دارد؟', ['استئوپنی', 'پوکی استخوان', 'طبیعی', 'شکستگی'], 'بین ‎-1‎ و ‎-2.5‎.'),
          B('سرعت رسوب گلبول قرمز با اختصار ___ نوشته می‌شود.', ['ESR', 'CRP', 'RBC'], 'erythrocyte sedimentation rate.'),
          S('املای انگلیسی «تراکم‌سنجی» را بنویس', 'densitometry', 'densit/o + -metry.', 'densi…'),
          N('wb:fx')
        ]
      },
      {
        id: 'fx6', title: 'اختصارهای پرونده ارتوپدی', icon: '📋', items: [
          L('اندام‌ها و قطع عضو', `${fig('amputation-levels', [], 'سطح قطع عضو')}${tbl([['اختصار', 'معنی'], [e('UE / LE'), 'اندام فوقانی / تحتانی'], [e('RUE, LUE'), 'اندام فوقانی راست، چپ'], [e('RLE, LLE'), 'اندام تحتانی راست، چپ'], [e('AE / BE'), 'بالای / زیر آرنج'], [e('AK / BK'), 'بالای / زیر زانو']])}`),
          L('اختصارهای رایج', `${tbl([['اختصار', 'معنی'], [e('ROM'), 'دامنه حرکت'], [e('ORIF'), 'جااندازی باز و تثبیت داخلی'], [e('THA / TKA'), 'تعویض کامل ران / زانو'], [e('HNP'), 'فتق دیسک'], [e('NSAID'), 'ضدالتهاب غیراستروئیدی'], [e('PT / OT'), 'فیزیوتراپی / کاردرمانی'], [e('ADLs'), 'فعالیت‌های روزمره زندگی'], [e('post-op'), 'پس از جراحی']])}${memo('A یعنی Above (بالا) و B یعنی Below (پایین)؛ E یعنی Elbow (آرنج) و K یعنی Knee (زانو). فقط چهار حرف و چهار ترکیب!')}`),
          M(`${e('<b>BK amputation</b>')} یعنی…`, ['قطع عضو زیر زانو', 'قطع عضو بالای زانو', 'قطع عضو زیر آرنج', 'شکستگی زانو'], 'below knee.', null, F('amputation-levels', [])),
          M(`${e('<b>RLE</b>')} یعنی…`, ['اندام تحتانی راست', 'اندام فوقانی راست', 'اندام تحتانی چپ', 'آرنج راست'], 'right lower extremity.'),
          T('ADLs یعنی فعالیت‌های روزمره مثل لباس پوشیدن و غذا خوردن.', true, 'activities of daily living.', F('ot-adl', [], 'کاردرمانی: تمرین فعالیت‌های روزمره')),
          P('هر اختصار را به معنی‌اش وصل کن', [['AE', 'بالای آرنج'], ['LUE', 'اندام فوقانی چپ'], ['post-op', 'پس از جراحی'], ['PT', 'فیزیوتراپی']], 'اختصارهای پرونده.'),
          O('یادداشت پیگیری را به ترتیب معمول بچین', ['CC: شکایت اصلی', 'HPI: شرح بیماری فعلی', 'Exam: معاینه و ROM', 'IMP: برداشت و برنامه'], 'ساختار یادداشت بالینی.'),
          B('«Flexion of left knee greater than 90 degrees» یعنی ___ زانوی چپ بیش از ۹۰ درجه است.', ['خم شدن', 'باز شدن', 'چرخش'], 'flexion = خم کردن.'),
          M('در «C5–C6 HNP» مشکل کجاست؟', ['فتق دیسک بین مهره‌های گردنی ۵ و ۶', 'شکستگی مهره‌های کمری', 'آرتروز زانو', 'دررفتگی شانه'], 'C = cervical؛ HNP = herniated nucleus pulposus.'),
          N('ab:fx')
        ]
      },
      /* ================= سطح ۳: جراحی، دارو و توان‌بخشی ================= */
      {
        id: 'fx7', title: 'جراحی استخوان', icon: '🔪', items: [
          L('برش، برداشتن، ترمیم', `${tbl([['جراحی', 'معنی'], [e('osteotomy'), 'برش استخوان برای اصلاح زاویه'], [e('ostectomy'), 'برداشتن استخوان یا بخشی از آن'], [e('osteoplasty'), 'ترمیم جراحی استخوان'], [e('osteoclasia'), 'شکستن جراحی استخوان برای اصلاح بدشکلی'], [e('laminectomy'), 'برداشتن لامینای مهره'], [e('spinal fusion'), 'جوش دادن مهره‌ها با پیوند و میله'], [e('bunionectomy'), 'برداشتن بونیون']])}`),
          L('پیوند، پروتز، ارتز', `• ${e('<b>bone graft</b>')}: پیوند استخوان؛ ${e('autograft')} از خود بیمار (مثلاً تهیگاه) و ${e('allograft')} از اهداکننده<br>• ${e('<b>amputation</b>')}: قطع عضو<br>• ${e('<b>prosthesis</b>')}: عضو یا مفصل مصنوعی (${e('prosthet/o')} = افزوده)<br>• ${e('<b>orthosis</b>')}: بریس یا آتل برای نگه داشتن و اصلاح (${e('orth/o')} = راست)${vs(['prosthesis', 'جایگزین عضو از دست‌رفته'], ['orthosis', 'نگه‌دارنده و اصلاح‌کننده عضو موجود'])}${pearl('در Case Study 5-2، Cooper ۳ ساله با OI برای شکستگی ران ORIF با میله داخل کانال مغزی (IM rodding) و گچ لگنی (hip spica) شد.')}`),
          M(`${e('<b>osteotomy</b>')} یعنی…`, ['برش جراحی استخوان', 'برداشتن استخوان', 'ترمیم استخوان', 'شکستن استخوان'], '‎-tomy = برش.'),
          M('پیوند استخوان از خود بیمار چه نام دارد؟', ['autograft', 'allograft', 'prosthesis', 'orthosis'], 'auto- = خود.'),
          T('orthosis عضو از دست رفته را جایگزین می‌کند.', false, 'نادرست؛ جایگزین prosthesis است. orthosis بریس نگه‌دارنده است.'),
          W('واژه‌ای بساز به معنی «شکستن جراحی استخوان»', ['oste/o', '-clasia'], ['-clast', '-plasty', 'ten/o'], 'oste/o + -clasia = osteoclasia.'),
          P('هر جراحی را به معنی‌اش وصل کن', [['ostectomy', 'برداشتن استخوان'], ['osteoplasty', 'ترمیم استخوان'], ['spinal fusion', 'جوش دادن مهره‌ها'], ['allograft', 'پیوند از اهداکننده']], 'جراحی استخوان.'),
          B('پای مصنوعی یک ___ است.', ['prosthesis', 'orthosis', 'splint'], 'prosthet/o = افزوده.'),
          S('املای انگلیسی «پروتز» را بنویس', 'prosthesis', 'جمع آن prostheses است.', 'prost…'),
          N('t2f:fx')
        ]
      },
      {
        id: 'fx8', title: 'جراحی عضله و تاندون', icon: '🧵', items: [
          L('بخیه، برش، ترمیم', `${tbl([['جراحی', 'معنی'], [e('myoplasty'), 'ترمیم جراحی عضله'], [e('myorrhaphy'), 'بخیه عضله'], [e('tenorrhaphy'), 'بخیه تاندون'], [e('tenotomy'), 'برش تاندون'], [e('tenoplasty'), 'ترمیم تاندون'], [e('fasciotomy'), 'برش نیام برای کم کردن فشار'], [e('carpal tunnel release'), 'برش رباط مچ برای آزاد کردن عصب مدیان']])}${vs(['‎-rrhaphy', 'بخیه'], ['‎-rrhexis', 'پارگی'])}`),
          L('چرا نیام را می‌بُرند؟', `گاهی پس از شکستگی یا له‌شدگی، فشار درون یک کمپارتمان عضلانی آن‌قدر بالا می‌رود که خون‌رسانی قطع می‌شود. جراح با ${e('<b>fasciotomy</b>')} نیام را باز می‌کند تا فشار آزاد شود.${wb('fasci/o', '-tomy')} ← برش نیام${memo('دو r در rrhaphy و rrhexis و rrhea: پسوندهای «جاری‌شدن» و «دوختن» با دو r نوشته می‌شوند.')}`),
          M(`${e('<b>tenorrhaphy</b>')} یعنی…`, ['بخیه تاندون', 'برش تاندون', 'پارگی تاندون', 'التهاب تاندون'], 'ten/o + -rrhaphy.'),
          M('برای آزاد کردن فشار عضلات، کدام جراحی انجام می‌شود؟', ['fasciotomy', 'myorrhaphy', 'tenoplasty', 'arthrodesis'], 'برش نیام.'),
          T('myoplasty یعنی ترمیم جراحی عضله.', true, 'my/o + -plasty.'),
          W('واژه‌ای بساز به معنی «برش تاندون»', ['ten/o', '-tomy'], ['-rrhaphy', 'my/o', 'fasci/o'], 'ten/o + -tomy = tenotomy.'),
          P('هر جراحی را به معنی‌اش وصل کن', [['myorrhaphy', 'بخیه عضله'], ['tenoplasty', 'ترمیم تاندون'], ['fasciotomy', 'برش نیام'], ['carpal tunnel release', 'آزادسازی عصب مدیان']], 'جراحی عضله و تاندون.'),
          B('بخیه عضله ___ نام دارد.', ['myorrhaphy', 'myorrhexis', 'myotomy'], '‎-rrhaphy = بخیه.'),
          S('املای انگلیسی «بخیه تاندون» را بنویس', 'tenorrhaphy', 'ten/o + -rrhaphy؛ دو r.', 'teno…'),
          N('r2m:fx')
        ]
      },
      {
        id: 'fx9', title: 'دارو و توان‌بخشی', icon: '💊', items: [
          L('داروها', `${tbl([['دارو', 'کار'], [e('NSAID'), 'کاهش درد، التهاب و تورم؛ ایبوپروفن، ناپروکسن'], [e('analgesic'), 'مسکن (ضددرد)'], [e('skeletal muscle relaxant'), 'شل کردن عضله و رفع اسپاسم'], [e('corticosteroid'), 'ضدالتهاب قوی؛ گاهی تزریق داخل مفصل'], [e('bisphosphonate'), 'کند کردن استئوکلاست‌ها در پوکی استخوان'], ['کلسیم و ویتامین D', 'پیشگیری و درمان پوکی و نرمی استخوان']])}`),
          L('توان‌بخشی', `• ${e('<b>physical therapy</b>')} (${e('PT')}): ورزش درمانی، گرما، سرما، آب و اولتراسوند برای بازگشت قدرت و حرکت<br>• ${e('<b>occupational therapy</b>')} (${e('OT')}): بازگرداندن مهارت‌های روزمره (${e('ADLs')}) و کار<br>• ${e('<b>hydrotherapy</b>')}: ورزش در آب گرم<br>• ${e('<b>rehabilitation</b>')}: کل فرایند بازگشت توانایی پس از آسیب یا جراحی${fig('us-therapy', [], 'اولتراسوند درمانی در فیزیوتراپی')}${pearl('در یادداشت فیزیوتراپی، درمان «گرمای مرطوب و اولتراسوند روی ستون گردنی و ۴۵ دقیقه تمرین درمانی» بود؛ بیمار تاندونیت روتاتور کاف داشت.')}`),
          M('NSAID چه دارویی است؟', ['ضدالتهاب غیراستروئیدی', 'شل‌کننده عضله', 'آنتی‌بیوتیک', 'کورتیکواستروئید'], 'nonsteroidal anti-inflammatory drug.'),
          M('کدام دارو برای پوکی استخوان استئوکلاست‌ها را کند می‌کند؟', ['bisphosphonate', 'NSAID', 'muscle relaxant', 'analgesic'], 'کاهش تخریب استخوان.'),
          T('کاردرمانی (OT) بر بازگرداندن فعالیت‌های روزمره زندگی تمرکز دارد.', true, 'ADLs.'),
          W('واژه‌ای بساز به معنی «درمان با آب»', ['hydr/o', '-therapy'], ['therm/o', '-graphy', 'my/o'], 'hydr/o + -therapy = hydrotherapy.'),
          P('هر درمان را به کارش وصل کن', [['analgesic', 'رفع درد'], ['skeletal muscle relaxant', 'رفع اسپاسم عضله'], ['physical therapy', 'ورزش و حرکت‌درمانی'], ['occupational therapy', 'مهارت‌های روزمره']], 'دارو و توان‌بخشی.'),
          B('پیشوند ___ در analgesic یعنی «بدون».', ['an-', 'anti-', 'ana-'], 'an- + alges/o (حس درد) + -ic.'),
          S('املای انگلیسی «توان‌بخشی» را بنویس', 'rehabilitation', 're- + habilitat/o + -ion.', 'rehab…'),
          N('f2t:fx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* اُستئو — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. شکل‌ها از دنیای استخوان، مفصل، عضله و درمان ارتوپدی الهام گرفته‌اند. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: 'استخوانک', title: 'ستون بدن', shape: 'bone', color: '#F3E4C4', acc: ['sparkle'], bio: 'یکی از ۲۰۶ استخوان بدن است؛ اهرم حرکت، سپر اندام‌ها، انبار کلسیم و کارخانه خون. با عضله‌ها تیم اسکلتی-عضلانی را می‌سازد.' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'ریشه‌یاب', title: 'استاد oste/o و my/o', shape: 'book', color: '#C2413A', acc: ['glasses'], bio: 'لغت‌نامه‌ای زنده که هر واژه را به ریشه، پیشوند و پسوند می‌شکند و arthr/o و chondr/o و ten/o را از حفظ است.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'پازلی', title: 'سلطان پیشوند و پسوند', shape: 'puzzle', color: '#8E2A25', acc: ['crown'], bio: 'inter- و supra- را جا می‌اندازد، -desis و -rrhaphy را می‌چسباند و هیچ‌وقت my/o را با myel/o قاطی نمی‌کند.' },
    { id: 'bn-0', w: 'bn', lv: 0, name: 'بلاستو', title: 'استخوان‌ساز سخت‌کوش', shape: 'blob', color: '#8FC7E8', acc: ['headband'], bio: 'یک استئوبلاست پرانرژی که روز و شب بافت تازه می‌سازد؛ رقیب همیشگی‌اش استئوکلاست است که بافت کهنه را می‌خورد.' },
    { id: 'bn-1', w: 'bn', lv: 1, name: 'کلسیمو', title: 'کریستال سختی', shape: 'hex', color: '#E9E1CC', acc: ['glasses'], bio: 'بلور کلسیم و فسفر است و استخوان را سخت نگه می‌دارد. وقتی ویتامین D کم باشد، جایش خالی می‌شود و استخوان نرم.' },
    { id: 'bn-2', w: 'bn', lv: 2, name: 'مغز قرمز', title: 'کارخانه خون', shape: 'drop', color: '#D9584F', acc: ['crown'], bio: 'در استخوان اسفنجی زندگی می‌کند و هر ثانیه میلیون‌ها گلبول قرمز می‌سازد؛ hematopoiesis کار اوست.' },
    { id: 'sk-0', w: 'sk', lv: 0, name: 'جمجمو', title: 'نگهبان مغز', shape: 'skull', color: '#F3E4C4', acc: ['sparkle'], bio: 'هشت استخوان جمجمه را با درزها به هم دوخته و فقط فک پایینش را تکان می‌دهد. از frontal تا occipital را می‌شناسد.' },
    { id: 'sk-1', w: 'sk', lv: 1, name: 'مهره‌ای', title: 'ستون استوار', shape: 'vertebra', color: '#7FB2E5', acc: ['glasses'], bio: 'یکی از ۲۶ مهره ستون است و نخاع را در سوراخش پناه می‌دهد؛ ۷ گردنی، ۱۲ سینه‌ای و ۵ کمری را از حفظ است.' },
    { id: 'sk-2', w: 'sk', lv: 2, name: 'قفسه', title: 'سپر قلب و ریه', shape: 'shield', color: '#F6C9A8', acc: ['crown'], bio: 'دوازده جفت دنده و یک جناغ است؛ دنده‌های حقیقی، کاذب و شناورش را خوب می‌شناسد و از قلب و ریه محافظت می‌کند.' },
    { id: 'jt-0', w: 'jt', lv: 0, name: 'سینوویا', title: 'روغن مفصل', shape: 'drop', color: '#8EC5EA', acc: ['sparkle'], bio: 'قطره‌ای از مایع سینوویال است که زانو و شانه را روان نگه می‌دارد تا غضروف‌ها بی‌صدا روی هم بلغزند.' },
    { id: 'jt-1', w: 'jt', lv: 1, name: 'زاویه‌سنج', title: 'گونیومتر دقیق', shape: 'dyna', color: '#1E9E8F', acc: ['glasses'], bio: 'فلکشن، اکستنشن، ابداکشن و پرونیشن را به درجه اندازه می‌گیرد و هر ROM را در پرونده می‌نویسد.' },
    { id: 'jt-2', w: 'jt', lv: 2, name: 'دستکش جراح', title: 'استاد آرتروسکوپی', shape: 'glove', color: '#9FD3C7', acc: ['crown'], bio: 'با یک برش کوچک درون زانو را می‌بیند، منیسک پاره را برمی‌دارد و اگر لازم باشد مفصل را با TKA عوض می‌کند.' },
    { id: 'mu-0', w: 'mu', lv: 0, name: 'کتل‌بل', title: 'مربی عضله اسکلتی', shape: 'kettle', color: '#D64F6E', acc: ['headband'], bio: 'عاشق hypertrophy است و از atrophy می‌ترسد. می‌داند عضله فقط می‌کشد، هیچ‌وقت هل نمی‌دهد.' },
    { id: 'mu-1', w: 'mu', lv: 1, name: 'دلتا', title: 'عضله سه‌گوش شانه', shape: 'hat', color: '#E07F78', acc: ['glasses'], bio: 'دلتوئید است؛ بازو را ابداکت می‌کند و جای محبوب تزریق عضلانی است. نامش را از حرف Δ گرفته است.' },
    { id: 'mu-2', w: 'mu', lv: 2, name: 'آشیل', title: 'تاندون تیزپا', shape: 'flame', color: '#FF7A45', acc: ['crown'], bio: 'محکم‌ترین تاندون بدن است و عضله دوقلو را به پاشنه وصل می‌کند؛ هر پلانتارفلکشن با کمک اوست.' },
    { id: 'fx-0', w: 'fx', lv: 0, name: 'گچی', title: 'نگهبان شکستگی', shape: 'bandage', color: '#EEF2F6', acc: ['sparkle'], bio: 'شکستگی بسته را بی‌حرکت نگه می‌دارد تا callus جوش بخورد. greenstick و spiral را از روی خطشان می‌شناسد.' },
    { id: 'fx-1', w: 'fx', lv: 1, name: 'رادیو', title: 'کارآگاه تصویربرداری', shape: 'xray', color: '#3F7FBF', acc: ['glasses'], bio: 'از X-ray و CT تا MRI و DXA؛ هر شکستگی پنهان و هر دیسک بیرون‌زده را پیدا می‌کند و T-score را تفسیر می‌کند.' },
    { id: 'fx-2', w: 'fx', lv: 2, name: 'پرونده‌خوان', title: 'استاد ORIF و توان‌بخشی', shape: 'clipboard', color: '#7B5CD6', acc: ['cape', 'crown'], bio: 'ORIF و THA و BK را در یک نگاه می‌خواند و بیمار را تا فیزیوتراپی و بازگشت به ADLs همراهی می‌کند.' }
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
/* اُستئو — راند بالینی: پرونده‌های چندمرحله‌ای
 * کیس‌ها از مطالعات موردی و گزارش‌های فایل‌های پیوست آمده‌اند: Thomas's Brachial Plexus Injury، Case Study 6-1 (Rotator Cuff Tear)،
 * Case Study 6-2 (Wake-Up Test)، Rachel's Idiopathic Adolescent Scoliosis، Case Study 5-1 (TMJ Arthroplasty)، Case Study 5-2 (Osteogenesis Imperfecta)،
 * Discharge Summary (muscular dystrophy و TKA)، Pearson Consultation Report (hip fracture)، Mary Pearl (RA)، Orthopedic Follow-up Note (ORIF)،
 * Degenerative Intervertebral Disk Disease، Physical Therapy Progress Note و تمرین‌های بازنویسی Nicole Young و Janet Connolly.
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان استخوان و عضله ================= */
    {
      id: 'r1', w: 'lx', title: 'شرح حال خانم Young', who: 'Nicole Young، خانم ۷۶ ساله',
      brief: 'پرستار شرح حال می‌گیرد: «در جوانی موقع بسکتبال چند بار رباط مچ پای چپم آسیب دید. بعدها همان مچ پیچ خورد و گفتند تاندونش ملتهب شده. پارسال از دوچرخه افتادم و شانه راستم نیمه دررفت. پارسال هم گفتند تراکم استخوانم کم است.» باید آن را با واژه‌های پزشکی بازنویسی کنی.',
      chart: [['۱', 'آسیب مکرر رباط مچ پای چپ'], ['۲', 'التهاب تاندون'], ['۳', 'دررفتگی ناقص شانه راست'], ['۴', 'کاهش تراکم استخوان']],
      fig: { a: 'msk-parts', l: [] },
      steps: [
        M('واژه', 'آسیب رباط در اثر پیچ خوردن مچ پا چه نام دارد؟', ['sprain', 'strain', 'fracture', 'bursitis'], 'sprain = آسیب رباط؛ strain = عضله یا تاندون.'),
        M('واژه', '«تاندون ملتهب» با کدام واژه نوشته می‌شود؟', ['tendinitis', 'tenotomy', 'myositis', 'synovitis'], 'tendin/o + -itis.'),
        M('واژه', '«شانه نیمه دررفته» یعنی…', ['subluxation of the right shoulder', 'dislocation of the left shoulder', 'fracture of the right humerus', 'rotator cuff tear'], 'sub- = کمتر از؛ دررفتگی ناقص.'),
        M('واژه', 'کاهش تراکم استخوان که هنوز پوکی کامل نیست چه نام دارد؟', ['osteopenia', 'osteoporosis', 'osteomalacia', 'osteitis'], 'oste/o + -penia (کمبود).'),
        P('جهت', 'هر بخش شرح حال را به واژه جهت وصل کن', [['مچ پای چپ', 'left'], ['شانه راست', 'right'], ['فقط یک شانه', 'unilateral'], ['هر دو مچ', 'bilateral']], 'جهت‌ها در پرونده.'),
        S('املا', 'املای «دررفتگی ناقص» را بنویس', 'subluxation', 'sub- + luxation.', 'subl…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: 'درد ران خانم Connolly', who: 'Janet Connolly، خانم ۴۸ ساله',
      brief: 'خانم Connolly از درد ران چپ، هم در حرکت و هم در استراحت، شکایت دارد. پای چپش به بیرون چرخیده است و وقتی مچ پا به بالا خم می‌شود درد دارد. باید یافته‌ها را با واژه‌ها و اختصارهای پزشکی بنویسی.',
      chart: [['شکایت', 'درد ران چپ'], ['معاینه', 'چرخش پا به بیرون'], ['درد', 'هنگام خم کردن مچ پا به بالا'], ['اندام', 'LLE']],
      fig: { a: 'directions', l: [] },
      steps: [
        M('اختصار', 'اندام درگیر با کدام اختصار نوشته می‌شود؟', ['LLE', 'RLE', 'LUE', 'RUE'], 'left lower extremity.'),
        M('حرکت', '«خم کردن مچ پا به بالا» چه نام دارد؟', ['dorsiflexion', 'plantar flexion', 'eversion', 'abduction'], 'پنجه به سمت ساق.', null, { a: ['foot-moves'], l: [] }),
        M('حرکت', '«چرخش پا به بیرون» با کدام واژه نوشته می‌شود؟', ['lateral (external) rotation', 'medial rotation', 'adduction', 'circumduction'], 'lateral = دور از خط وسط.'),
        M('واژه', 'استخوان ران چه نام دارد؟', ['femur', 'tibia', 'fibula', 'humerus'], 'femor/o = ران؛ «درد ران» = femoral pain.'),
        T('واژه', 'درد مفصل را arthralgia و درد عضله را myalgia می‌نامند.', true, '-algia = درد.'),
        S('املا', 'املای «دورسی‌فلکشن» را بنویس', 'dorsiflexion', 'dors/o + flex/o + -ion.', 'dorsi…')
      ]
    },
    /* ================= استخوان ================= */
    {
      id: 'r3', w: 'bn', title: 'پانزدهمین شکستگی Cooper', who: 'Cooper، پسر ۳ ساله',
      brief: 'Cooper به بیماری استخوان‌سازی ناقص (OI) نوع III مبتلاست و از تولد ۱۵ شکستگی دست و پا داشته است. این بار هنگام ایستادن در واکر ران چپش چرخید و شکست. کوتاه‌قد است و هر دو پایش خمیده است. هر دو ماه انفوزیون bisphosphonate می‌گیرد.',
      chart: [['Dx', 'osteogenesis imperfecta type III'], ['شکستگی', 'left femur'], ['دارو', 'bisphosphonate q2 months'], ['جراحی', 'ORIF + IM rodding + hip spica']],
      fig: { a: 'oi-xray', l: ['استخوان‌های نازک و شکسته در OI'] },
      steps: [
        M('بیماری', 'OI چه بیماری‌ای است؟', ['بیماری ارثی کلاژن با استخوان‌های شکننده', 'عفونت استخوان', 'سرطان استخوان', 'نرمی استخوان از کمبود ویتامین D'], 'brittle bone disease.'),
        M('دارو', 'bisphosphonate چه می‌کند؟', ['تخریب استخوان به دست استئوکلاست‌ها را کند می‌کند', 'استخوان را نرم می‌کند', 'عفونت را درمان می‌کند', 'درد را فقط کم می‌کند'], 'استخوان کمتر جذب می‌شود.'),
        M('جراحی', 'ORIF یعنی…', ['جااندازی باز و تثبیت داخلی', 'جااندازی بسته', 'تثبیت خارجی', 'قطع عضو'], 'open reduction internal fixation.'),
        M('جراحی', 'IM rodding یعنی میله‌گذاری در…', ['کانال مغزی استخوان (intramedullary)', 'داخل عضله', 'زیر پوست', 'مفصل ران'], 'intra- + medull/o: درون حفره مغزی.'),
        T('شکستگی', 'شکستگی‌ای که در استخوانِ ضعیف‌شده از بیماری رخ دهد، pathologic fracture است.', true, 'در OI استخوان با نیروی کم می‌شکند.'),
        S('املا', 'املای «استخوان ران» را بنویس', 'femur', 'femor/o.', 'fem…')
      ]
    },
    {
      id: 'r4', w: 'bn', title: 'افتادن روی یخ', who: 'خانم ۸۲ ساله در اورژانس',
      brief: 'خانمی ۸۲ ساله پس از افتادن روی یخ با درد شدید ران چپ آمده است. دو سال پیش مچ دستش شکسته و گچ گرفته بودند. متخصص استخوان بر اساس عکس کم‌دوز تراکم استخوان، پوکی متوسط تشخیص داده بود. حالا ران را خم نگه می‌دارد و نمی‌تواند آن را صاف کند.',
      chart: [['Hx', 'Colles fracture, cast'], ['BDT', 'moderate osteoporosis'], ['درد', '8/10, left hip'], ['Dx', 'comminuted fracture, left femoral neck']],
      fig: { a: 'osteoporosis', l: [] },
      steps: [
        M('واژه', '«متخصصی که بیماری‌های استخوان را درمان می‌کند» کیست؟', ['orthopedist', 'rheumatologist', 'podiatrist', 'chiropractor'], 'orthopedic surgeon.'),
        M('واژه', '«استخوان‌های متخلخل» چه نام دارد؟', ['osteoporosis', 'osteomalacia', 'osteomyelitis', 'osteoma'], 'oste/o + -porosis.'),
        M('تشخیص', '«عکس کم‌دوز برای تراکم استخوان» کدام است؟', ['DXA (dual-energy X-ray absorptiometry)', 'MRI', 'bone scan', 'CT'], 'BDT با DXA.'),
        P('حرکت', 'هر توصیف را به واژه‌اش وصل کن', [['ران خم‌شده', 'flexion'], ['حرکت به سمت صاف شدن', 'extension'], ['استخوان خردشده', 'comminuted'], ['بی‌حرکت کردن با گچ', 'cast']], 'Chart Note Transcription.'),
        M('درمان', '«کار گذاشتن مفصل مصنوعی ران» چه نام دارد؟', ['total hip arthroplasty (THA)', 'arthrodesis', 'osteotomy', 'ORIF'], 'arthr/o + -plasty.', null, { a: ['hip-prosthesis'], l: ['پروتز مفصل ران'] }),
        S('املا', 'املای «پوکی استخوان» را بنویس', 'osteoporosis', 'oste/o + -porosis.', 'osteop…')
      ]
    },
    /* ================= اسکلت ================= */
    {
      id: 'r5', w: 'sk', title: 'اسکولیوز Rachel', who: 'Rachel، دختر ۱۵ ساله',
      brief: 'چهار سال پیش Rachel برای اسکولیوز ایدیوپاتیک نوجوانی فیوژن خلفی ستون مهره (PSF) با قلاب‌ها و دو میله شد. پیوند استخوان از خار خلفی-فوقانی تهیگاه راستش گرفته شد. حالا کتف راستش برجسته است، دنده‌ها نامتقارن‌اند و درد میانه و پایین کمر دارد. CT اسکولیوز چرخشی و زاویه‌دار شدن دنده‌ها را نشان داد.',
      chart: [['Hx', 'PSF T4–L2 for idiopathic adolescent scoliosis'], ['PE', 'prominent right scapula, rib asymmetry'], ['CT', 'rotatory scoliosis'], ['Plan', 'osteotomies, rib resections, partial scapulectomy']],
      fig: { a: 'spine-curves', l: [] },
      steps: [
        M('بیماری', 'scoliosis یعنی…', ['انحراف جانبی ستون مهره', 'قوز پشت', 'گودی کمر', 'لغزش مهره'], 'scoli/o = کج.'),
        M('اختصار', 'PSF یعنی…', ['posterior spinal fusion', 'partial spinal fracture', 'proximal scapular fixation', 'pelvic stress fracture'], 'جوش دادن مهره‌ها از پشت.'),
        M('پیوند', 'پیوند استخوان از تهیگاه خود بیمار چه نام دارد؟', ['autograft', 'allograft', 'prosthesis', 'orthosis'], 'auto- = خود.'),
        P('جراحی', 'هر جراحی برنامه را به معنی‌اش وصل کن', [['osteotomy', 'برش استخوان'], ['rib resection', 'برداشتن بخشی از دنده (costectomy)'], ['partial scapulectomy', 'برداشتن بخشی از کتف'], ['spinal fusion', 'جوش دادن مهره‌ها']], 'جراحی‌های Rachel.'),
        M('محدوده', 'T4 تا L2 یعنی از…', ['چهارمین مهره سینه‌ای تا دومین مهره کمری', 'چهارمین مهره گردنی تا دومین کمری', 'چهارمین دنده تا دومین مهره', 'چهارمین مهره کمری تا دومین خاجی'], 'T = thoracic، L = lumbar.', null, { a: ['spine'], l: [] }),
        S('املا', 'املای «اسکولیوز» را بنویس', 'scoliosis', 'scoli/o + -osis.', 'scol…')
      ]
    },
    {
      id: 'r6', w: 'sk', title: 'گزارش رادیولوژی ستون کمری', who: 'بیمار با کمردرد مزمن',
      brief: 'گزارش: «Anteroposterior and lateral views of the lumbar spine… The L5-S1 intervertebral disk space contains a slight shadow of decreased density. Slight narrowing of the L3-4 and L4-5 spaces. Bilateral laminectomies at L5-S1. Slight hypertrophic lipping of L4. The sacroiliac joint spaces are well preserved.»',
      chart: [['Views', 'AP and lateral'], ['Disk', 'L5-S1 degenerative'], ['Surgery', 'bilateral laminectomies'], ['SI joints', 'preserved']],
      fig: { a: 'mri-disc', l: ['MRI ستون کمری'] },
      steps: [
        M('جهت', 'anteroposterior یعنی…', ['از جلو به عقب', 'از عقب به جلو', 'از پهلو', 'از بالا به پایین'], 'anter/o + poster/o.'),
        M('واژه', 'intervertebral یعنی…', ['بین مهره‌ها', 'درون مهره', 'زیر مهره', 'روی مهره'], 'inter- + vertebr/o + -al.'),
        M('جراحی', 'bilateral laminectomies یعنی…', ['برداشتن لامینا در هر دو طرف', 'برداشتن دیسک یک طرف', 'جوش دادن دو مهره', 'برش دو دنده'], 'bi- = دو؛ lamin/o + -ectomy.'),
        M('واژه', 'sacroiliac مربوط به کدام دو استخوان است؟', ['خاجی و تهیگاه', 'کمری و خاجی', 'دنبالچه و تهیگاه', 'ران و تهیگاه'], 'sacr/o + ili/o.', null, { a: ['pelvis'], l: [] }),
        T('واژه', 'hypertrophic یعنی مربوط به بزرگ شدن یک ساختار.', true, 'hyper- + -trophic.'),
        S('املا', 'املای «کمری-خاجی» را بنویس', 'lumbosacral', 'lumb/o + sacr/o + -al.', 'lumbo…')
      ]
    },
    {
      id: 'r7', w: 'sk', title: 'آرتروپلاستی TMJ خانم Susan', who: 'Susan، معلم ۳۸ ساله',
      brief: 'Susan پس از تصادف رانندگی از درد مزمن فک، گردن و گوش راست رنج می‌برد. CT بیماری دژنراتیو مفصل (DJD) در TMJ راست را تأیید کرد. درمان محافظه‌کارانه با پلاک دندانی، NSAID و تزریق استروئید جواب نداد. جراح دهان بخشی از سر کندیل فک پایین را برداشت (condylectomy).',
      chart: [['Dx', 'DJD of right TMJ'], ['Tx', 'bite plate, NSAIDs, steroid injections'], ['Op', 'arthroplasty of right TMJ, high condylectomy'], ['EBL', '50 mL']],
      fig: { a: 'skull', l: [] },
      steps: [
        M('اختصار', 'TMJ یعنی…', ['مفصل گیجگاهی-فکی', 'مفصل شانه', 'مفصل بین مهره‌ها', 'درز جمجمه'], 'temporomandibular joint.'),
        M('اختصار', 'DJD نام دیگر کدام بیماری است؟', ['osteoarthritis', 'rheumatoid arthritis', 'gout', 'osteomyelitis'], 'degenerative joint disease.'),
        M('جراحی', 'condylectomy یعنی…', ['برداشتن کندیل', 'برش مفصل', 'ترمیم کندیل', 'جوش دادن مفصل'], '‎-ectomy = برداشتن.'),
        M('استخوان', 'کندیل برداشته‌شده مال کدام استخوان است؟', ['mandible', 'maxilla', 'temporal', 'zygomatic'], 'mandibular condyle.'),
        T('اختصار', 'NSAID داروی ضدالتهاب غیراستروئیدی است.', true, 'nonsteroidal anti-inflammatory drug.'),
        S('املا', 'املای «آرتروپلاستی» را بنویس', 'arthroplasty', 'arthr/o + -plasty.', 'arthrop…')
      ]
    },
    /* ================= مفاصل و حرکت ================= */
    {
      id: 'r8', w: 'jt', title: 'حمله حاد روماتوئید', who: 'Mary Pearl، خانم ۶۰ ساله',
      brief: 'خانم Pearl با تورم، خشکی و درد مفصل‌ها، به‌ویژه در آرنج، مچ و دست‌ها آمده است. اسکن استخوان التهاب حاد در چند مفصل با آسیب غضروف مفصلی نشان داد و آزمایش ESR التهاب قابل‌توجه را تأیید کرد. تشخیص: حمله حاد آرتریت روماتوئید. درمان: NSAID و فیزیوتراپی با آب‌درمانی و تمرین درمانی.',
      chart: [['CC', 'swelling, stiffness, arthralgia'], ['Bone scan', 'acute inflammation, damaged articular cartilage'], ['ESR', 'elevated'], ['Dx', 'acute episode of RA']],
      fig: { a: 'ra-hands', l: ['آرتریت روماتوئید پیشرفته'] },
      steps: [
        M('نشانه', 'arthralgia یعنی…', ['درد مفصل', 'التهاب مفصل', 'خشکی مفصل', 'تورم مفصل'], 'arthr/o + -algia.'),
        M('آزمایش', 'ESR چه چیزی را نشان می‌دهد؟', ['میزان التهاب در بدن', 'تراکم استخوان', 'آسیب عضله', 'اسید اوریک'], 'erythrocyte sedimentation rate.'),
        M('بیماری', 'آرتریت روماتوئید چه نوع بیماری‌ای است؟', ['خودایمنی با التهاب پرده سینوویال', 'ساییدگی غضروف با سن', 'رسوب اسید اوریک', 'عفونت باکتریایی مفصل'], 'autoimmune; synovitis.', null, { a: ['ra-deformity'], l: ['تغییر شکل دست در آرتریت روماتوئید'] }),
        P('درمان', 'هر درمان را به معنی‌اش وصل کن', [['NSAID', 'ضدالتهاب غیراستروئیدی'], ['hydrotherapy', 'آب‌درمانی'], ['therapeutic exercise', 'تمرین درمانی'], ['PT', 'فیزیوتراپی']], 'برنامه درمان.'),
        T('دوره', 'acute یعنی شروع ناگهانی و دوره کوتاه؛ برخلاف chronic.', true, 'حمله حاد در یک بیماری مزمن.'),
        S('املا', 'املای «روماتوئید» را بنویس', 'rheumatoid', 'rheumat/o + -oid.', 'rheu…')
      ]
    },
    {
      id: 'r9', w: 'jt', title: 'تعویض زانوی راست', who: 'مرد ۶۸ ساله',
      brief: 'از دبیرستان که هنگام فوتبال زانوهایش آسیب دید، گاه‌به‌گاه درد و تورم زانو داشت. در دهه پنجاه زندگی و کار روی بتن بدتر شد. درد و تورم دائمی خواب و فعالیتش را مختل کرده و با عصا راه می‌رود. رادیوگرافی آرتروز شدید دوطرفه نشان داد و برای TKR زانوی راست بستری شد.',
      chart: [['Admitting Dx', 'osteoarthritis bilateral knees'], ['Op', 'right TKA'], ['Post-op', 'PT gait training with walker; OT for ADLs'], ['Day 5', 'ambulates 150 ft']],
      fig: { a: 'arthritis', l: [] },
      steps: [
        M('تشخیص', 'osteoarthritis bilateral knees یعنی…', ['آرتروز هر دو زانو', 'آرتریت روماتوئید یک زانو', 'شکستگی هر دو زانو', 'التهاب بورس زانو'], 'bi- = دو.'),
        M('جراحی', 'TKA یعنی…', ['تعویض کامل مفصل زانو', 'تعویض کامل مفصل ران', 'آرتروسکوپی زانو', 'جوش دادن زانو'], 'total knee arthroplasty = TKR.'),
        P('توان‌بخشی', 'هر اختصار را به معنی‌اش وصل کن', [['PT', 'فیزیوتراپی'], ['OT', 'کاردرمانی'], ['ADLs', 'فعالیت‌های روزمره'], ['post-op', 'پس از جراحی']], 'خلاصه ترخیص.'),
        O('روند', 'روند بیمار را به ترتیب بچین', ['آسیب زانو در جوانی', 'بدتر شدن درد و تورم', 'رادیوگرافی: آرتروز شدید', 'TKR زانوی راست', 'راه رفتن با واکر و ترخیص'], 'از خلاصه ترخیص.'),
        M('حرکت', 'ambulate یعنی…', ['راه رفتن', 'خم کردن زانو', 'چرخیدن در تخت', 'ایستادن روی پنجه'], 'ambul/o = راه رفتن.'),
        S('املا', 'املای «آرتروز» را بنویس', 'osteoarthritis', 'oste/o + arthr/o + -itis.', 'osteoa…')
      ]
    },
    {
      id: 'r10', w: 'jt', title: 'یادداشت فیزیوتراپی', who: 'مرد میانسال کارمند',
      brief: 'شکایت اصلی: درد گردن با محدودیت حرکت و درد شانه راست با محدودیت ROM. درمان امروز: گرمای مرطوب و اولتراسوند روی ستون گردنی و ۴۵ دقیقه تمرین درمانی. فلکشن، اکستنشن و چرخش گردن بهتر شده، ولی شانه راست در فلکشن و ابداکشن، به‌ویژه ابداکشن مقاومتی، درد دارد؛ تاندونیت روتاتور کاف، احتمالاً از گیرافتادگی.',
      chart: [['CC', 'cervical neck pain; right shoulder pain'], ['Tx', 'moist heat, US, therapeutic exercise'], ['Neck', 'flexion, extension, rotation improved'], ['Shoulder', 'rotator cuff tendonitis']],
      fig: { a: 'us-therapy', l: ['اولتراسوند درمانی'] },
      steps: [
        M('حرکت', 'بالا بردن بازو از کنار بدن چه نام دارد؟', ['abduction', 'adduction', 'flexion', 'pronation'], 'ab- = دور از.', null, { a: ['abd-add'], l: [] }),
        M('اختصار', 'ROM یعنی…', ['دامنه حرکت', 'رادیوگرافی', 'آرتریت روماتوئید', 'جااندازی'], 'range of motion.'),
        M('واژه', 'tendonitis یعنی…', ['التهاب تاندون', 'پارگی تاندون', 'برش تاندون', 'بخیه تاندون'], 'tendinitis هم نوشته می‌شود.'),
        P('حرکت', 'هر حرکت گردن را به توضیحش وصل کن', [['flexion', 'خم کردن سر به جلو'], ['extension', 'برگرداندن سر به حالت راست'], ['rotation', 'چرخاندن سر به چپ و راست'], ['hyperextension', 'بردن سر به عقب']], 'حرکت‌های گردن.'),
        M('اختصار', 'US در این یادداشت یعنی…', ['ultrasound (اولتراسوند درمانی)', 'upper spine', 'ulnar surface', 'unilateral shoulder'], 'ultrasound.'),
        S('املا', 'املای «گردنی» را بنویس', 'cervical', 'cervic/o + -al.', 'cerv…')
      ]
    },
    /* ================= عضلات ================= */
    {
      id: 'r11', w: 'mu', title: 'آسیب شبکه بازویی Thomas', who: 'Thomas، پسر ۱۶ ساله',
      brief: 'Thomas در یک حادثه لاکراس آسیب شدید شبکه بازویی راست دید و دستش «بی‌جان» شد. نه حس دارد و نه حرکت. عضلات supraspinatus، infraspinatus و deltoid تحلیل رفته‌اند و شانه نیمه دررفته است. ROM ران، زانو و مچ پا کامل است. برایش EMG، مطالعه هدایت عصب و SSEP درخواست شد؛ احتمال پیوند عضله gracilis هم هست.',
      chart: [['Dx', 'R brachial plexus injury, middle trunk (C7)'], ['PE', 'atrophy of supraspinatus, infraspinatus, deltoid'], ['Shoulder', 'subluxation'], ['Tests', 'EMG, NCS, SSEPs']],
      fig: { a: 'muscles-back', l: [] },
      steps: [
        M('نشانه', 'atrophy یعنی…', ['تحلیل و کوچک شدن عضله', 'بزرگ شدن عضله', 'گرفتگی عضله', 'التهاب عضله'], 'a- + -trophy.'),
        M('آزمون', 'EMG یعنی…', ['ثبت فعالیت الکتریکی عضله', 'تصویربرداری مغناطیسی', 'آزمایش آنزیم عضله', 'اسکن استخوان'], 'electromyography.'),
        M('عضله', 'supraspinatus و infraspinatus جزو کدام گروه‌اند؟', ['rotator cuff', 'hamstrings', 'quadriceps', 'abdominal muscles'], 'SITS.'),
        M('مفصل', 'subluxation of the shoulder یعنی…', ['دررفتگی ناقص شانه', 'شکستگی شانه', 'التهاب شانه', 'خشکی شانه'], 'sub- = ناقص.'),
        T('اختصار', 'R/O در پرونده یعنی «رد کردن» (rule out) یک تشخیص.', true, 'R/O phrenic nerve injury.'),
        S('املا', 'املای «تحلیل عضله» را بنویس', 'atrophy', 'a- + -trophy.', 'atro…')
      ]
    },
    {
      id: 'r12', w: 'mu', title: 'ضعف عضلانی یک کودک', who: 'پسر ۷ ساله',
      brief: 'از ۳ تا ۴ سالگی ضعف عضلانی داشته است. بیوپسی عضله تخریب تارهای عضلانی را تأیید کرد و تشخیص دیستروفی عضلانی گذاشته شد. هنوز راه می‌رود و چهار ماه است دارو می‌گیرد. در معاینه، ضعف عضلات پروگزیمال، هیپرتروفی و کوتاهی تاندون آشیل دارد.',
      chart: [['Dx', 'muscular dystrophy'], ['Bx', 'degeneration of muscle fibers'], ['PE', 'proximal weakness; Achilles shortening'], ['IV', 'blood samples over 24 h']],
      fig: { a: 'muscle-structure', l: [] },
      steps: [
        M('بیماری', 'muscular dystrophy چیست؟', ['بیماری ارثی با ضعف و تحلیل پیشرونده عضله', 'التهاب خودایمنی عضله', 'عفونت عضله', 'پارگی عضله'], 'MD؛ نوع Duchenne در پسران.'),
        M('تشخیص', 'biopsy یعنی…', ['برداشتن نمونه بافت برای میکروسکوپ', 'عکس‌برداری', 'آزمایش خون', 'نوار عضله'], 'bi/o + -opsy.'),
        M('جهت', 'proximal muscle weakness یعنی ضعف عضلات…', ['نزدیک به تنه (شانه و ران)', 'دور از تنه (دست و پا)', 'یک طرف بدن', 'صورت'], 'proximal = نزدیک به تنه.'),
        M('تاندون', 'تاندون آشیل کدام عضله را به پاشنه وصل می‌کند؟', ['gastrocnemius', 'quadriceps', 'biceps', 'deltoid'], 'calcaneal tendon.'),
        T('واژه', 'hypertrophy یعنی کوچک شدن عضله.', false, 'نادرست؛ hypertrophy بزرگ شدن است.'),
        S('املا', 'املای «دیستروفی» را بنویس', 'dystrophy', 'dys- + -trophy.', 'dys…')
      ]
    },
    {
      id: 'r13', w: 'mu', title: 'پارگی روتاتور کاف', who: 'Michael، مدیر ۵۶ ساله',
      brief: 'Michael که در دانشگاه فوتبال بازی می‌کرد، با درد مکرر شانه نزد ارتوپد آمده است. حتی پس از ۶ ماه فیزیوتراپی و NSAID نمی‌تواند بازوی راستش را بدون درد ابداکت کند. ۳۵ سال پیش شانه‌اش دررفته بود. MRI پارگی کامل روتاتور کاف را تأیید کرد و جراح عمل Bankart را پیشنهاد داد.',
      chart: [['CC', 'recurrent R shoulder pain'], ['Hx', 'shoulder dislocation 35 years ago'], ['MRI', 'complete rotator cuff tear'], ['Plan', 'Bankart procedure; PT after 3 weeks']],
      fig: { a: 'origin-insertion', l: [] },
      steps: [
        M('حرکت', 'abduct یعنی…', ['بردن بازو دور از خط وسط', 'آوردن بازو به سمت بدن', 'خم کردن آرنج', 'چرخاندن کف دست'], 'ab- = دور از.'),
        M('تصویربرداری', 'چرا برای پارگی روتاتور کاف MRI خواسته شد؟', ['MRI بافت نرم مثل تاندون را خوب نشان می‌دهد', 'MRI فقط استخوان را نشان می‌دهد', 'ارزان‌ترین روش است', 'تراکم استخوان را می‌سنجد'], 'تاندون = بافت نرم.'),
        P('عضله', 'هر عضله روتاتور کاف را به جایش وصل کن', [['supraspinatus', 'بالای خار کتف'], ['infraspinatus', 'زیر خار کتف'], ['teres minor', 'گرد کوچک'], ['subscapularis', 'سطح جلویی کتف']], 'SITS: چهار عضله روتاتور کاف.'),
        M('جراحی', 'در جراحی، تاندون subscapularis «proximal to its insertion» بریده شد؛ یعنی…', ['کمی نزدیک‌تر به تنه از محل اتصالش', 'دقیقاً روی محل اتصال', 'در مبدأ عضله', 'روی استخوان بازو'], 'proximal = نزدیک به تنه.'),
        M('اختصار', 'PT پس از جراحی یعنی…', ['فیزیوتراپی', 'پروتز', 'آزمایش خون', 'کاردرمانی'], 'physical therapy.'),
        S('املا', 'املای «دررفتگی» را بنویس', 'dislocation', 'dis- + location.', 'dislo…')
      ]
    },
    /* ================= شکستگی، تشخیص و درمان ================= */
    {
      id: 'r14', w: 'fx', title: 'پیگیری ORIF ران', who: 'خانم ۷۶ ساله',
      brief: 'یادداشت پیگیری ارتوپدی: بیمار پس از ORIF شکستگی سوپراکندیلار ران چپ برای پیگیری آمده است. رادیوگرافی: تثبیت سر جایش است، استئوپنی خفیف دارد و از جراحی تغییر مهمی نکرده است. زخم خوب جوش خورده. اکستنشن زانوی چپ ۲۰ درجه کمتر از ROM کامل است و فلکشن بیش از ۹۰ درجه.',
      chart: [['CC', 'post-op follow-up, L femur fracture'], ['X-ray', 'fixation in place, mild osteopenia'], ['Exam', 'extension 20° short of full ROM; flexion > 90°'], ['IMP', 'improving; follow-up in 6 weeks']],
      fig: { a: 'fixation', l: [] },
      steps: [
        M('اختصار', 'CC در یادداشت یعنی…', ['شکایت اصلی (chief complaint)', 'گچ کامل', 'سی‌تی‌اسکن', 'کلسیم'], 'chief complaint.'),
        M('جراحی', 'ORIF یعنی…', ['جااندازی باز و تثبیت داخلی', 'جااندازی بسته با گچ', 'تعویض کامل مفصل', 'کشش با وزنه'], 'open reduction internal fixation.'),
        M('محل', 'supracondylar یعنی…', ['بالای کندیل‌ها', 'زیر کندیل‌ها', 'بین کندیل‌ها', 'روی کندیل‌ها'], 'supra- = بالای.', null, { a: ['bone-markings'], l: [] }),
        M('یافته', 'mild osteopenia یعنی…', ['کاهش خفیف توده استخوان', 'پوکی شدید استخوان', 'عفونت استخوان', 'شکستگی جدید'], 'oste/o + -penia.'),
        M('ROM', '«Extension 20° short of full ROM» یعنی…', ['زانو ۲۰ درجه کمتر از حد کامل باز می‌شود', 'زانو ۲۰ درجه خم می‌شود', 'زانو کاملاً باز می‌شود', 'زانو ۲۰ درجه بیش از حد باز می‌شود'], 'محدودیت اکستنشن.', null, { a: ['goniometer'], l: [] }),
        S('املا', 'املای «پس از جراحی» را بنویس (یک واژه)', 'postoperative', 'post- + operative.', 'post…')
      ]
    },
    {
      id: 'r15', w: 'fx', title: 'آزمون بیداری در جراحی ستون مهره', who: 'Lynn، بیمار فیوژن ستون مهره',
      brief: 'در طول جراحی فیوژن ستون مهره Lynn، پتانسیل‌های برانگیخته حسی-پیکری (SSEP) پایش شد. پس از گذاشتن پیچ‌های پدیکل، قلاب‌ها و میله‌ها، بیهوشی را سبک کردند و از او خواستند پاهایش را حرکت دهد. دورسی‌فلکشن سلامت tibialis anterior، پلانتارفلکشن سلامت gastrocnemius، فلکشن زانو همسترینگ و اکستنشن زانو چهارسر را تأیید کرد.',
      chart: [['Monitoring', 'SSEPs; electrodes in quadriceps, tibialis anterior, gastrocnemius'], ['Wake-up test', 'all muscle groups moved'], ['Recovery', 'PACU']],
      fig: { a: 'muscles-front', l: [] },
      steps: [
        P('عضله', 'هر حرکت را به عضله‌ای که سلامتش را نشان داد وصل کن', [['dorsiflexion', 'tibialis anterior'], ['plantar flexion', 'gastrocnemius'], ['knee flexion', 'hamstrings'], ['knee extension', 'quadriceps']], 'Case Study 6-2.'),
        M('جراحی', 'spinal fusion یعنی…', ['جوش دادن مهره‌ها به هم', 'برداشتن دیسک', 'برش نخاع', 'برداشتن لامینا'], 'fusion = جوش.'),
        M('حرکت', 'تکان دادن انگشتان پا به سمت بالا کدام حرکت است؟', ['dorsiflexion', 'plantar flexion', 'eversion', 'inversion'], 'dors/o = پشت پا.'),
        M('محل', 'L2 تا L4 کدام مهره‌ها هستند؟', ['دومین تا چهارمین مهره کمری', 'گردنی', 'سینه‌ای', 'خاجی'], 'L = lumbar.'),
        T('اختصار', 'PACU بخش مراقبت پس از بیهوشی است.', true, 'postanesthesia care unit.'),
        S('املا', 'املای «همسترینگ» را بنویس', 'hamstrings', 'سه عضله پشت ران.', 'ham…')
      ]
    },
    {
      id: 'r16', w: 'fx', title: 'زمین خوردن روی دست باز', who: 'خانم ۶۴ ساله',
      brief: 'خانمی در حیاط سُر خورده و با دست باز روی زمین افتاده است. مچ دست راستش متورم و تغییر شکل یافته (شبیه «چنگال») است. رادیوگرافی AP و نیم‌رخ مچ گرفته می‌شود. پس از تشخیص، جااندازی بسته و گچ انجام می‌شود و برای سنجش تراکم استخوان ارجاع می‌شود.',
      chart: [['Hx', 'FOOSH (fall on outstretched hand)'], ['X-ray', 'distal radius fracture with dorsal displacement'], ['Tx', 'closed reduction, cast'], ['Plan', 'DXA referral']],
      fig: { a: 'xray-colles', l: ['شکستگی کالیس'] },
      steps: [
        M('شکستگی', 'شکستگی انتهای رادیوس با افتادن روی دست باز چه نام دارد؟', ['Colles fracture', 'Pott fracture', 'greenstick fracture', 'compression fracture'], 'Colles.'),
        M('جهت', 'distal radius یعنی…', ['انتهای رادیوس نزدیک مچ', 'ابتدای رادیوس نزدیک آرنج', 'تنه رادیوس', 'اولنا'], 'distal = دور از تنه.'),
        M('درمان', 'closed reduction یعنی…', ['جااندازی بدون برش جراحی', 'جااندازی با جراحی', 'تثبیت با پلاک', 'قطع عضو'], 'بسته = بدون برش.'),
        M('تشخیص', 'چرا او را برای DXA فرستادند؟', ['شکستگی با نیروی کم در زن مسن ممکن است نشانه پوکی استخوان باشد', 'برای دیدن رباط‌ها', 'برای آزمایش عضله', 'برای تشخیص نقرس'], 'fragility fracture.'),
        T('تصویربرداری', 'AP و lateral یعنی دو عکس از جلو و از نیم‌رخ.', true, 'دو نما برای دیدن جابه‌جایی.'),
        S('املا', 'املای «رادیوس» را بنویس', 'radius', 'radi/o.', 'rad…')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* اُستئو — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', 'بدن بزرگسال ۲۰۶ استخوان و بیش از ۶۰۰ عضله اسکلتی دارد.'],
    ['Lx', 'تاندون عضله را به استخوان وصل می‌کند و رباط استخوان را به استخوان.'],
    ['Lx', 'معنی را از پسوند شروع کن: inter/vertebr/al یعنی «مربوط به بینِ مهره‌ها».'],
    ['Lx', 'oste/o استخوان، my/o عضله، arthr/o مفصل، chondr/o غضروف و ten/o تاندون است.'],
    ['Lx', 'my/o یعنی عضله ولی myel/o یعنی مغز استخوان یا نخاع.'],
    ['Lx', 'ilium با i استخوان لگن است؛ ileum با e بخشی از روده.'],
    ['Lx', 'proximal نزدیک به تنه است و distal دور از تنه.'],
    ['Lx', '‎-plegia فلج کامل است و ‎-paresis ضعف یا فلج ناقص.'],
    ['Lx', 'orthopedics از orth/o (راست) و ped/o (کودک): صاف کردن استخوان کودکان.'],
    ['Bn', 'osteoblast می‌سازد (Build)، osteoclast خراب می‌کند (Crash).'],
    ['Bn', 'خون‌سازی (hematopoiesis) در مغز قرمز استخوان اسفنجی انجام می‌شود.'],
    ['Bn', 'diaphysis تنه استخوان دراز است و epiphysis دو سر آن.'],
    ['Bn', 'periosteum پرده بیرونی استخوان است و پر از عصب؛ برای همین شکستگی این‌قدر درد دارد.'],
    ['Bn', 'کشکک بزرگ‌ترین استخوان کنجدی (sesamoid) است و درون تاندون چهارسر رشد می‌کند.'],
    ['Bn', 'T-score مساوی یا کمتر از ‎-2.5‎ در DXA یعنی پوکی استخوان.'],
    ['Bn', 'راشیتیسم (rickets) همان نرمی استخوان (osteomalacia) در کودکان است.'],
    ['Bn', 'sarcoma بدخیمی بافت همبند است: osteosarcoma در استخوان و chondrosarcoma در غضروف.'],
    ['Sk', 'ستون مهره: ۷ گردنی، ۱۲ سینه‌ای، ۵ کمری؛ مثل صبحانه ساعت ۷، ناهار ۱۲ و شام ۵.'],
    ['Sk', 'atlas (C1) سر را نگه می‌دارد و روی axis (C2) می‌چرخد.'],
    ['Sk', 'mandible تنها استخوان متحرک جمجمه است.'],
    ['Sk', 'radius سمت شست است و ulna سمت انگشت کوچک.'],
    ['Sk', 'دنده‌های ۱ تا ۷ حقیقی‌اند، ۸ تا ۱۲ کاذب و ۱۱ و ۱۲ شناور.'],
    ['Sk', 'هر استخوان لگن از جوش خوردن ilium، ischium و pubis ساخته شده است.'],
    ['Sk', 'kyphosis قوز پشت است، lordosis گودی کمر و scoliosis انحراف جانبی.'],
    ['Sk', 'femur بلندترین و محکم‌ترین استخوان بدن است.'],
    ['Jt', 'synarthrosis ثابت است، amphiarthrosis نیمه‌متحرک و diarthrosis متحرک.'],
    ['Jt', 'abduction دور از خط وسط است (AB مثل Away) و adduction به سمت آن.'],
    ['Jt', 'supination: کاسه «سوپ» را در کف دست نگه می‌داری.'],
    ['Jt', 'OA ساییدگی غضروف است؛ RA بیماری خودایمنی پرده سینوویال.'],
    ['Jt', 'نقرس از رسوب بلورهای اسید اوریک است و اغلب از شست پا شروع می‌شود.'],
    ['Jt', 'sprain آسیب رباط است و strain آسیب عضله یا تاندون.'],
    ['Jt', '‎-desis یعنی جوش دادن و ‎-centesis یعنی سوراخ کردن برای کشیدن مایع.'],
    ['Jt', 'THA و THR هر دو تعویض کامل مفصل ران‌اند؛ TKA و TKR زانو.'],
    ['Mu', 'عضله اسکلتی مخطط و ارادی است؛ صاف غیرارادی؛ قلبی مخطط و غیرارادی.'],
    ['Mu', 'origin روی استخوان ثابت است و insertion روی استخوان متحرک.'],
    ['Mu', 'deltoid از حرف Δ نام گرفته است و جای رایج تزریق IM است.'],
    ['Mu', 'روتاتور کاف چهار عضله دارد: SITS.'],
    ['Mu', 'sartorius بلندترین عضله بدن است و تاندون آشیل محکم‌ترین تاندون.'],
    ['Mu', 'atrophy یعنی تحلیل عضله و hypertrophy بزرگ شدن آن.'],
    ['Mu', 'CK یا CPK آنزیمی است که با آسیب عضله در خون بالا می‌رود.'],
    ['Fx', 'شکستگی باز (compound) یعنی استخوان از پوست بیرون زده است.'],
    ['Fx', 'شکستگی ترکه‌ای (greenstick) ناقص است و در کودکان شایع.'],
    ['Fx', 'شکستگی کالیس (Colles) شکستگی انتهای رادیوس با افتادن روی دست باز است.'],
    ['Fx', 'ORIF یعنی جااندازی باز و تثبیت داخلی با پلاک، پیچ یا میله.'],
    ['Fx', 'malunion یعنی کج جوش خوردن؛ nonunion یعنی جوش نخوردن.'],
    ['Fx', 'AK و BK بالای و زیر زانو؛ AE و BE بالای و زیر آرنج.'],
    ['Fx', 'prosthesis جایگزین عضو است؛ orthosis نگه‌دارنده عضو موجود.'],
    ['Fx', '‎-rrhaphy یعنی بخیه و ‎-rrhexis یعنی پارگی.'],
    ['Fx', 'MRI برای بافت نرم (دیسک، رباط، منیسک) بهتر است و X-ray برای شکستگی.']
  ];
  const COLORS = { Lx: '#C2413A', Bn: '#B07D2E', Sk: '#3F7FBF', Jt: '#1E9E8F', Mu: '#D64F6E', Fx: '#7B5CD6', '': '#C2413A' };
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
