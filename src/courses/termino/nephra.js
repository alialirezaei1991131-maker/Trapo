/* تراپو • ترمینو — حیطه «nephra» (Urinary System: Kidneys and Urinary Tract)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_nephra;
  D.css = ".kf{display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px; margin: 10px 0;}\n.kf__in{display: flex; flex-direction: column; gap: 6px; flex: 1 1 120px; min-width: 0; font-weight: 800; color: var(--muted);}\n.kf__in input{width: 100%; min-width: 0; font: inherit; font-size: 18px; font-weight: 900; color: var(--text); background: var(--bg); border: 2px solid var(--line); border-radius: 14px; padding: 8px 12px; text-align: left; direction: ltr; font-family: Nunito, system-ui, sans-serif;}\n.kf__in input:focus{outline: none; border-color: var(--brand);}\n.kf__sxs{display: flex; gap: 8px; margin: 10px 0 0; flex-wrap: wrap;}\n.kf__sx{flex: 1 1 100px; font: inherit; font-weight: 900; padding: 9px 12px; border-radius: 14px; border: 2px solid var(--line); background: var(--bg); color: var(--text); cursor: pointer;}\n.kf__sx.is-on{border-color: var(--brand); background: color-mix(in srgb, var(--brand) 14%, var(--bg)); color: var(--brand-t);}\n.kf__out{display: grid; grid-template-columns: repeat(auto-fit, minmax(118px, 1fr)); gap: 8px; margin: 8px 0 10px;}\n.kf__c{--k: var(--brand); padding: 10px 12px; border-radius: 16px; background: color-mix(in srgb, var(--k) 10%, var(--bg)); border: 2px solid color-mix(in srgb, var(--k) 38%, var(--line)); min-width: 0;}\n.kf__c b{display: block; font-size: 19px; color: var(--k); overflow-wrap: anywhere;}\n.kf__c small{display: block; color: var(--muted); font-weight: 700; overflow-wrap: anywhere;}\n.kf__c span{display: block; font-weight: 800; margin-bottom: 2px;}\n.kf__bar{height: 12px; border-radius: 8px; background: var(--line); overflow: hidden; margin: 0 0 8px; direction: ltr;}\n.kf__bar i{display: block; height: 100%; border-radius: 8px;}\n.kf__note{color: var(--muted); font-weight: 700; margin: 0 0 10px;}\n.kf__h{margin: 16px 0 4px; font-size: 16px;}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* نِفرا — پیکربندی اپ: هر متن، نام، کلید ذخیره‌سازی، شخصیت و ابزار ویژه‌ای که موتور مشترک (engine/) از اپ می‌خواهد.
 * این فایل پیش از همه ماژول‌ها بارگذاری می‌شود؛ تابع‌ها بعداً و هنگام اجرا صدا زده می‌شوند. */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.APP = {
    name: 'نِفرا', key: 'nephra', title: 'نِفرا • ترمینولوژی دستگاه ادراری: کلیه و مجاری ادرار', certCode: 'NF',
    subject: 'ترمینولوژی پزشکی دستگاه ادراری: کلیه، نفرون، میزنای، مثانه، پیشابراه و ادرار',
    kicker: '🫘 ترمینولوژی پزشکی: دستگاه ادراری',
    hello: 'سلام، من <b>نِفرا</b> هستم؛ یک کلیه لوبیایی که روزی ۱۸۰ لیتر خون را تصفیه می‌کند و هنوز سرحال است!',
    disclaimer: 'نِفرا یک ابزار آموزشی است و جایگزین معاینه، آزمایش، قضاوت بالینی یا دستور پزشک نیست.',
    eyes: 'ده‌ها شکل دوزبانه و تصویر آموزشی؛ از قشر و مغز کلیه و نفرون تا مثانه، سنگ‌ها، هیدرونفروز، سیستوسکوپی، دیالیز و پیوند کلیه.',
    outcomes: [
      'هر واژه ادراری را به پیشوند، ریشه و پسوند بشکنی و معنی‌اش را بگویی',
      'بخش‌های کلیه و نفرون و سه گام ساخت ادرار را روی شکل نشان دهی',
      'میزنای، مثانه، پیشابراه، اسفنکترها و انواع بی‌اختیاری را از هم جدا کنی',
      'یافته‌های آزمایش ادرار و نشانه‌هایی مثل oliguria، hematuria و pyuria را بخوانی',
      'عفونت ادراری، سنگ، هیدرونفروز، گلومرولونفریت و نارسایی کلیه را با واژه درست بنویسی',
      'KUB، IVP، سیستوسکوپی، سونداژ، دیالیز، ESWL و پیوند کلیه را بشناسی و eGFR را تفسیر کنی'
    ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، برگه آزمایش ادرار و گزارش اورولوژی را مثل یک داستان آشنا می‌خوانی.',
    obHello: 'سلام! من نِفرا هستم؛ یک کلیه لوبیایی خندان 🫘 اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان کلیه» بهترین شروع است؛ ریشه‌های پایه ادراری آن‌جا یاد داده می‌شوند!',
    demo: () => ({
      q: 'واژه <b dir="ltr">nephrolithiasis</b> یعنی…',
      fig: { a: ['stones-sites'], l: ['جای سنگ‌ها در مجاری ادراری'] },
      opts: ['سنگ کلیه', 'التهاب کلیه', 'بزرگی کلیه', 'افتادگی کلیه'],
      why: `${EA.K.wb('nephr/o', 'lith/o', '-iasis')}<br>ریشه <b dir="ltr">nephr/o</b> یعنی کلیه، <b dir="ltr">lith/o</b> یعنی سنگ و پسوند <b dir="ltr">-iasis</b> یعنی حالت؛ پس <b>سنگ کلیه</b>. معنی را از پسوند شروع کن!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ['تازه‌وارد', 'قطره کنجکاو', 'کاشف نفرون', 'رمزگشای ریشه‌ها', 'نگهبان گلومرول', 'استاد لگنچه', 'دوست مثانه',
      'راهنمای میزنای', 'خواننده آزمایش ادرار', 'شکارچی سنگ', 'کارآگاه عفونت', 'استاد دیالیز', 'استاد واژه‌سازی', 'افسانه کلیه', 'اسطوره ترمینولوژی'],
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'رزیدنت اورولوژی', 'پرستار دیالیز', 'رزیدنت نفرولوژی', 'کارشناس آزمایشگاه', 'تکنسین همودیالیز', 'کارشناس رادیولوژی', 'کارشناس اتاق عمل', 'دانشجوی مامایی', 'پرستار بخش پیوند', 'کارشناس تغذیه', 'دستیار پزشک'],
    firstBadge: ['🫘', 'اولین قطره'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], kd: ['🫘', 'کاشف نفرون'], tr: ['💧', 'نگهبان مثانه'], ur: ['🧪', 'خواننده ادرار'], dz: ['🩺', 'کارآگاه کلیه'], tx: ['🔬', 'استاد درمان'] },
    confetti: ['#B0413E', '#E0A526', '#FFC800', '#6D4BC3', '#2B86C5', '#17A398', '#E2683C', '#7CC4EF'],
    /* ابزارها */
    parseDefault: 'pyelonephritis',
    parseSamples: ['pyelonephritis', 'nephrolithiasis', 'glomerulonephritis', 'cystourethrography', 'hydronephrosis', 'ureterostenosis', 'hematuria', 'nephropexy'],
    ph: { dict: 'جست‌وجو: nephron، مثانه، cystitis…', roots: 'جست‌وجو: nephr، ادرار، ‎-uria‎…', abbr: 'جست‌وجو: UTI، اوره، KUB…' },
    toolsDisclaimer: '⚕️ نِفرا ابزار آموزشی است؛ واژه‌نامه و ماشین‌حساب کلیه جای آزمایش، معاینه و قضاوت پزشک را نمی‌گیرند.',
    /* شخصیت: کلیه لوبیایی با قطره آب روی سر — بدنه؛ چشم و دهان را موتور می‌کشد، مرکز چهره cx,cy */
    mascot: (cx, cy) => `
        <path d="M${cx + 24} ${cy + 8} C${cx + 34} ${cy + 22} ${cx + 30} ${cy + 40} ${cx + 38} ${cy + 54}" stroke="#E7C26B" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path transform="translate(${cx - 3} ${cy + 6}) scale(1.22 0.9)" d="M-6 -60 C26 -64 40 -40 38 -18 C36 -8 24 -6 22 0 C24 6 36 8 38 18 C40 40 26 64 -6 60 C-34 56 -44 28 -44 0 C-44 -28 -34 -56 -6 -60Z" fill="#C8574F" stroke="var(--c)" stroke-width="2.4"/>
        <path transform="translate(${cx - 3} ${cy + 6}) scale(1.22 0.9)" d="M-30 -40 C-38 -24 -38 -4 -34 10" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".45"/>
        <path d="M${cx + 8} ${cy - 66} C${cx + 16} ${cy - 54} ${cx + 20} ${cy - 46} ${cx + 20} ${cy - 40} A12 12 0 0 1 ${cx - 4} ${cy - 40} C${cx - 4} ${cy - 46} ${cx} ${cy - 54} ${cx + 8} ${cy - 66}Z" fill="#7CC4EF" stroke="#3E95C9" stroke-width="1.6"/>
        <ellipse cx="${cx + 3}" cy="${cy - 44}" rx="3" ry="5" fill="#fff" opacity=".7"/>
        <path class="negar-spark" d="M14 26 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
`
  };

  /* ---------- ابزار ویژه: ماشین‌حساب کلیه ----------
   * eGFR با فرمول CKD-EPI 2021 (بدون ضریب نژاد) از کراتینین سرم (mg/dL)، سن و جنس:
   * 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^-1.200 × 0.9938^سن × 1.012 (زن)؛ κ = 0.7 زن و 0.9 مرد، α = -0.241 زن و -0.302 مرد.
   * برون‌ده ادرار = حجم ÷ وزن ÷ ساعت (mL/kg/h)؛ کمتر از 0.5 کم‌ادراری، کمتر از ۱۰۰ میلی‌لیتر در ۲۴ ساعت بی‌ادراری.
   * مرحله‌بندی بیماری مزمن کلیه بر پایه KDIGO؛ عددها آموزشی‌اند. */
  const st = { sex: 'f', cr: '1.1', age: '45', wt: '70', vol: '1400', hr: '24' };
  const fa = n => EA.fa(n);
  function egfr() {
    const cr = parseFloat(st.cr), age = parseFloat(st.age);
    if (!(cr > 0) || !(age >= 18)) return NaN;
    const F = st.sex === 'f', k = F ? 0.7 : 0.9, a = F ? -0.241 : -0.302, r = cr / k;
    return 142 * Math.pow(Math.min(r, 1), a) * Math.pow(Math.max(r, 1), -1.2) * Math.pow(0.9938, age) * (F ? 1.012 : 1);
  }
  const STAGES = [[90, 'G1', 'طبیعی یا بالا', '#3f8a05'], [60, 'G2', 'کاهش خفیف', '#7aa70a'], [45, 'G3a', 'کاهش خفیف تا متوسط', '#d4a017'],
    [30, 'G3b', 'کاهش متوسط تا شدید', '#e2683c'], [15, 'G4', 'کاهش شدید', '#d9443a'], [0, 'G5', 'نارسایی کلیه', '#8e2a26']];
  const cell = (tt, b, s, c) => `<div class="kf__c"${c ? ` style="--k:${c}"` : ''}><span>${tt}</span><b>${b}</b>${s ? `<small>${s}</small>` : ''}</div>`;
  const L = s => `<bdi dir="ltr">${s}</bdi>`;
  function gfrOut() {
    const g = egfr();
    if (!isFinite(g)) return '<p class="kf__note">کراتینین سرم (mg/dL) و سن (۱۸ سال یا بیشتر) را بنویس.</p>';
    const s = STAGES.find(x => g >= x[0]);
    const pct = Math.max(2, Math.min(100, g / 120 * 100));
    return `<div class="kf__out">${cell('eGFR', L(Math.round(g)), L('mL/min/1.73 m²'), s[3])}${cell('مرحله', L(s[1]), s[2], s[3])}</div>
      <div class="kf__bar" aria-hidden="true"><i style="width:${pct.toFixed(1)}%;background:${s[3]}"></i></div>
      <p class="kf__note">${s[1] === 'G5' ? 'زیر ۱۵ یعنی نارسایی کلیه؛ مرحله‌ای که اغلب به دیالیز یا پیوند کلیه (ESRD) می‌رسد.' : g < 60 ? 'eGFR کمتر از ۶۰ اگر بیش از سه ماه بماند، یعنی بیماری مزمن کلیه (CKD).' : 'eGFR بالای ۶۰ به‌تنهایی بیماری مزمن کلیه را نشان نمی‌دهد؛ پروتئین ادرار و آسیب کلیه هم مهم‌اند.'}</p>`;
  }
  function uoOut() {
    const v = parseFloat(st.vol), w = parseFloat(st.wt), h = parseFloat(st.hr);
    if (!(v >= 0) || !(w > 0) || !(h > 0)) return '<p class="kf__note">حجم ادرار، وزن و مدت جمع‌آوری را بنویس.</p>';
    const rate = v / w / h, day = v * 24 / h;
    const r = day < 100 ? ['anuria', 'بی‌ادراری', '#8e2a26'] : rate < 0.5 ? ['oliguria', 'کم‌ادراری', '#d9443a'] : day > 3000 ? ['polyuria', 'پرادراری', '#d4a017'] : ['normal output', 'برون‌ده طبیعی', '#3f8a05'];
    return `<div class="kf__out">${cell('برون‌ده', L(rate.toFixed(2)), L('mL/kg/h'))}${cell('در ۲۴ ساعت', L(Math.round(day) + ' mL'), 'طبیعی حدود ۱۰۰۰ تا ۲۰۰۰')}${cell('تفسیر', r[1], L(r[0]), r[2])}</div>`;
  }
  const field = (key, label, ph, step) => `<label class="kf__in"><span>${label}</span><input type="number" inputmode="decimal" min="0"${step ? ` step="${step}"` : ''} data-keep="${key}" data-kf="${key}" value="${EA.ui.esc(st[key])}" placeholder="${ph}" autocomplete="off"></label>`;
  const sexBtn = (v, l) => `<button type="button" class="kf__sx${st.sex === v ? ' is-on' : ''}" data-kfsex="${v}" aria-pressed="${st.sex === v}">${l}</button>`;
  EA.APP.extraTool = {
    id: 'kf', sym: 'GFR', name: 'ماشین‌حساب کلیه', color: '#B0413E',
    /* برای آزمون: eGFR گردشده */
    value: () => { const g = egfr(); return isFinite(g) ? Math.round(g) : 0; },
    pane: () => `<div class="tpane"><p class="muted">eGFR تخمین می‌زند گلومرول‌ها در هر دقیقه چقدر خون را تصفیه می‌کنند. کراتینین سرم، سن و جنس را بنویس.</p>
    <div class="kf__sxs" role="group" aria-label="جنس">${sexBtn('f', 'زن')}${sexBtn('m', 'مرد')}</div>
    <div class="kf">${field('cr', 'کراتینین سرم (mg/dL)', '1.1', '0.1')}${field('age', 'سن (سال)', '45')}</div>
    <div class="kf__res" aria-live="polite">${gfrOut()}</div>
    <table class="mini"><tr><th>مرحله</th><th><bdi dir="ltr">eGFR</bdi></th><th>معنی</th></tr>
      <tr><td><bdi dir="ltr">G1</bdi></td><td><bdi dir="ltr">≥ 90</bdi></td><td>طبیعی یا بالا</td></tr><tr><td><bdi dir="ltr">G2</bdi></td><td><bdi dir="ltr">60 – 89</bdi></td><td>کاهش خفیف</td></tr>
      <tr><td><bdi dir="ltr">G3a</bdi></td><td><bdi dir="ltr">45 – 59</bdi></td><td>خفیف تا متوسط</td></tr><tr><td><bdi dir="ltr">G3b</bdi></td><td><bdi dir="ltr">30 – 44</bdi></td><td>متوسط تا شدید</td></tr>
      <tr><td><bdi dir="ltr">G4</bdi></td><td><bdi dir="ltr">15 – 29</bdi></td><td>کاهش شدید</td></tr><tr><td><bdi dir="ltr">G5</bdi></td><td><bdi dir="ltr">&lt; 15</bdi></td><td>نارسایی کلیه</td></tr></table>
    ${EA.ui.figCard({ a: ['egfr-gauge'], l: ['مراحل بیماری مزمن کلیه'] })}
    <h4 class="kf__h">برون‌ده ادرار</h4>
    <div class="kf">${field('vol', 'حجم ادرار (mL)', '1400')}${field('wt', 'وزن (kg)', '70')}${field('hr', 'مدت (ساعت)', '24')}</div>
    <div class="kf__uo" aria-live="polite">${uoOut()}</div>
    <h4 class="kf__h">مقادیر طبیعی آزمایش ادرار</h4>
    <table class="mini"><tr><th>جزء</th><th>طبیعی</th></tr>
      <tr><td>رنگ</td><td>زرد کاهی تا طلایی، شفاف</td></tr><tr><td>وزن مخصوص <bdi dir="ltr">(SG)</bdi></td><td><bdi dir="ltr">1.001 – 1.030</bdi></td></tr>
      <tr><td><bdi dir="ltr">pH</bdi></td><td><bdi dir="ltr">5.0 – 8.0</bdi></td></tr><tr><td>پروتئین</td><td>منفی تا ناچیز <bdi dir="ltr">(trace)</bdi></td></tr>
      <tr><td>قند و کتون</td><td>منفی</td></tr><tr><td>خون</td><td>منفی</td></tr></table>
    <p class="muted">مرحله‌بندی بر پایه KDIGO و فرمول CKD-EPI 2021 است و برای کودکان، بارداری یا تغییر ناگهانی کراتینین دقیق نیست. تشخیص با پزشک است.</p></div>`,
    click: e => { const b = e.target.closest('[data-kfsex]'); if (!b) return false; st.sex = b.dataset.kfsex; return true; },
    input: (e, el) => {
      const k = e.target.dataset && e.target.dataset.kf;
      if (!k) return false;
      st[k] = e.target.value;
      const set = (s, h) => { const o = el.querySelector(s); if (o) o.innerHTML = h; };
      set('.kf__res', gfrOut()); set('.kf__uo', uoOut());
      return false;
    },
    /* آزمون دود: مرد ۵۰ ساله با کراتینین 1.0 ← eGFR حدود ۹۲ */
    test: { clicks: ['[data-kfsex="m"]'], fill: [['[data-kf="cr"]', '1.0'], ['[data-kf="age"]', '50'], ['[data-kf="vol"]', '300']], expect: 92 }
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
/* نِفرا — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از apps/nephra/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["ACE inhibitor", "ayss in-HIB-ih-ter", "Drug that lowers blood pressure by blocking the angiotensin-converting enzyme.", "مهارکننده ACE", "tx", "tx", ["ACE"]],
["acidosis", "as-ih-DOH-sis", "Excessive acidity of body fluids, as in renal failure.", "اسیدوز", "ur", "sx", []],
["acute renal failure", "ah-KYOOT REE-nal FAYL-yer", "Sudden loss of kidney function from injury, shock, toxins or infection; acute kidney injury.", "نارسایی حاد کلیه", "dz", "dz", ["ARF", "AKI"]],
["acute tubular necrosis", "ah-KYOOT TOO-byoo-lar neh-KROH-sis", "Damage and death of renal tubules from toxins or ischemia, causing oliguria (necr/o = death).", "نکروز حاد لوله‌ای", "dz", "dz", ["ATN"]],
["adrenal gland", "ah-DREE-nal gland", "Endocrine gland that sits on top of each kidney; suprarenal gland.", "غده فوق‌کلیوی", "kd", "body", []],
["afferent arteriole", "AF-er-ent ar-TEER-ee-ohl", "Small artery that carries blood into the glomerulus (afferent = toward).", "سرخرگچه آوران", "kd", "body", []],
["albumin/creatinine ratio", "al-BYOO-min kree-AT-ih-neen RAY-shee-oh", "Urine screening test for early kidney damage, especially in diabetes.", "نسبت آلبومین به کراتینین", "ur", "lab", ["ACR"]],
["albuminuria", "al-byoo-mih-NOO-ree-ah", "Albumin in the urine, typically a sign of kidney disease (albumin/o + -uria).", "آلبومین در ادرار", "ur", "sx", []],
["aldosterone", "al-DOS-ter-ohn", "Adrenal hormone that regulates sodium and potassium excretion by the kidneys.", "آلدوسترون", "kd", "phys", []],
["angiotensin", "an-jee-oh-TEN-sin", "Blood substance, activated by renin, that constricts blood vessels and raises blood pressure.", "آنژیوتانسین", "kd", "phys", []],
["antibiotic", "an-tee-bye-OT-ik", "Drug that kills or inhibits bacteria; used for urinary tract infections, such as ciprofloxacin.", "آنتی‌بیوتیک", "tx", "tx", []],
["anticholinergic", "an-tee-koh-lin-ER-jik", "Drug used to treat overactive bladder.", "آنتی‌کولینرژیک", "tx", "tx", []],
["antidiuretic hormone", "an-tee-dye-yoo-RET-ik HOR-mohn", "Pituitary hormone that makes the kidneys reabsorb water and concentrate the urine.", "هورمون ضدادراری", "kd", "phys", ["ADH"]],
["antispasmodic", "an-tee-spaz-MOD-ik", "Drug that relieves bladder muscle spasms, such as oxybutynin.", "ضداسپاسم", "tx", "tx", []],
["anuresis", "an-yoo-REE-sis", "Lack of urination; retention of urine in the bladder. Compare enuresis.", "ادرار نکردن", "tr", "sx", []],
["anuria", "an-YOO-ree-ah", "Absence of urine formation; complete suppression of urine (an- + -uria).", "قطع ادرار (آنوری)", "ur", "sx", []],
["atresia", "ah-TREE-zee-ah", "Congenital absence or narrowing of a normal opening, such as the ureter or urethra.", "آترزی (بسته‌بودن مادرزادی)", "dz", "dz", []],
["azotemia", "az-oh-TEE-mee-ah", "Excess nitrogenous waste, especially urea, in the blood (azot/o + -emia).", "ازدیاد مواد نیتروژنی خون", "ur", "sx", []],
["azoturia", "az-oh-TOO-ree-ah", "Increased nitrogenous compounds, especially urea, in the urine (azot/o + -uria).", "افزایش مواد نیتروژنی ادرار", "ur", "sx", []],
["bacteriuria", "bak-teer-ee-YOO-ree-ah", "Bacteria in the urine (bacteri/o + -uria).", "باکتری در ادرار", "ur", "sx", []],
["bladder cancer", "BLAD-er KAN-ser", "Cancer of the cells lining the bladder; the key sign is sudden painless hematuria. Linked to smoking.", "سرطان مثانه", "dz", "dz", []],
["bladder neck obstruction", "BLAD-er nek ob-STRUK-shun", "Blockage of the bladder outlet, often from an enlarged prostate.", "انسداد گردن مثانه", "tr", "dz", ["BNO"]],
["blood urea nitrogen", "blud yoo-REE-ah NYE-troh-jen", "Blood test of nitrogenous waste (urea); a rise suggests renal failure.", "نیتروژن اوره خون", "ur", "lab", ["BUN"]],
["caliceal", "kal-ih-SEE-al", "Pertaining to a renal calyx (calic/o + -eal); also spelled calyceal.", "مربوط به کالیس", "kd", "body", []],
["calyx", "KAY-liks", "Cup-like cavity of the renal pelvis that collects urine (cali/o, calic/o; plural calyces or calices).", "کالیس (جام کلیه)", "kd", "body", []],
["casts", "kasts", "Solid molds of renal tubules found in urine, formed from protein or cells.", "سیلندرهای ادراری (کست)", "ur", "lab", []],
["catheter", "KATH-eh-ter", "Flexible tube inserted into the body to move fluids in or out (Greek = a thing let down).", "سوند (کاتتر)", "tx", "tx", []],
["catheterization", "kath-eh-ter-ih-ZAY-shun", "Insertion of a catheter through the urethra into the bladder to withdraw urine or put in dye.", "سونداژ", "tx", "tx", ["cath"]],
["chromaturia", "kroh-mah-TOO-ree-ah", "Abnormal color of the urine (chromat/o + -uria).", "تغییر رنگ ادرار", "ur", "sx", []],
["chronic renal failure", "KRON-ik REE-nal FAYL-yer", "Gradual loss of nephrons and kidney function over time; chronic kidney disease.", "نارسایی مزمن کلیه", "dz", "dz", ["CRF", "CKD"]],
["clean-catch specimen", "kleen kach SPES-ih-men", "Midstream urine sample collected after cleaning the urinary opening, to avoid contamination.", "نمونه ادرار میانی تمیز", "ur", "lab", ["CC"]],
["clearance", "KLEER-ans", "Volume of plasma the kidneys clear of a substance per unit of time; renal plasma clearance.", "کلیرانس (پاک‌سازی)", "kd", "phys", []],
["collecting duct", "koh-LEK-ting dukt", "Tubule that receives urine from several nephrons and carries it to the renal papilla and calyx; collecting tubule.", "مجرای جمع‌کننده", "kd", "body", []],
["condom catheter", "KON-dum KATH-eh-ter", "External rubber sheath catheter with tubing to a leg bag; external urinary drainage.", "سوند کاندومی (خارجی)", "tx", "tx", ["EUD"]],
["continence", "KON-tih-nens", "Ability to control the bladder (or bowels).", "کنترل ادرار (اختیار)", "tr", "phys", []],
["cortical", "KOR-tih-kal", "Pertaining to a cortex, the outer region of an organ such as the kidney (cortic/o + -al).", "قشری", "kd", "body", []],
["creatine", "KREE-ah-teen", "An amino acid compound found in tissues, especially muscle; do not confuse with creatinine.", "کراتین", "lx", "phys", []],
["creatinine", "kree-AT-ih-neen", "Nitrogenous waste of muscle metabolism, cleared by the kidneys; a rising blood level is a sign of renal failure.", "کراتینین", "kd", "phys", ["Cr"]],
["creatinine clearance", "kree-AT-ih-neen KLEER-ans", "Kidney function test comparing creatinine in 24-hour urine with creatinine in blood.", "کلیرانس کراتینین", "ur", "lab", ["CCT"]],
["culture and sensitivity", "KUL-chur and sen-sih-TIV-ih-tee", "Laboratory test that grows bacteria from urine, identifies them and finds which antibiotics work.", "کشت و آنتی‌بیوگرام", "ur", "lab", ["C&S"]],
["cystalgia", "sis-TAL-jee-ah", "Pain in the urinary bladder (cyst/o + -algia).", "درد مثانه", "lx", "sx", []],
["cystectomy", "sis-TEK-toh-mee", "Surgical removal of all or part of the urinary bladder, usually for cancer.", "برداشتن مثانه", "tx", "tx", []],
["cystic", "SIS-tik", "Pertaining to the urinary bladder, the gallbladder or a cyst (cyst/o + -ic).", "مثانه‌ای؛ کیستی", "lx", "body", []],
["cystitis", "sis-TYE-tis", "Inflammation of the urinary bladder, usually from infection (cyst/o + -itis).", "التهاب مثانه (سیستیت)", "lx", "dz", []],
["cystocele", "SIS-toh-seel", "Herniation of the bladder into the vaginal wall; prolapsed bladder (cyst/o + -cele).", "افتادگی مثانه (سیستوسل)", "tr", "dz", []],
["cystogram", "SIS-toh-gram", "X-ray record of the urinary bladder (cyst/o + -gram).", "سیستوگرام", "tx", "lab", []],
["cystography", "sis-TOG-rah-fee", "Process of X-ray imaging of the bladder after dye is placed in it by catheter.", "سیستوگرافی", "tx", "lab", []],
["cystolith", "SIS-toh-lith", "A bladder stone (cyst/o + -lith).", "سنگ مثانه", "dz", "dz", []],
["cystometrography", "sis-toh-meh-TROG-rah-fee", "Study of bladder function that measures bladder pressure as it fills; the tracing is a cystometrogram.", "سیستومتری", "tx", "lab", ["CMG"]],
["cystopexy", "SIS-toh-pek-see", "Surgical fixation of the bladder to the abdominal wall, to correct a cystocele.", "تثبیت مثانه", "tx", "tx", []],
["cystoplasty", "SIS-toh-plas-tee", "Surgical repair of the urinary bladder (cyst/o + -plasty).", "ترمیم مثانه", "tx", "tx", []],
["cystorrhagia", "sis-toh-RAY-jee-ah", "Abnormal bleeding from the urinary bladder (cyst/o + -rrhagia).", "خونریزی مثانه", "tr", "sx", []],
["cystorrhaphy", "sis-TOR-ah-fee", "Suturing of a damaged bladder (cyst/o + -rrhaphy).", "بخیه مثانه", "tx", "tx", []],
["cystoscope", "SIS-toh-skohp", "Lighted instrument passed through the urethra to view the inside of the bladder (cyst/o + -scope).", "سیستوسکوپ", "tx", "lab", []],
["cystoscopy", "sis-TOS-koh-pee", "Visual examination of the bladder with a cystoscope; also used for biopsy and removing tumors or stones.", "سیستوسکوپی", "tx", "lab", ["cysto"]],
["cystostomy", "sis-TOS-toh-mee", "Surgical opening into the bladder through the abdominal wall (cyst/o + -stomy).", "سیستوستومی", "tx", "tx", []],
["cystotomy", "sis-TOT-oh-mee", "Incision into the urinary bladder (cyst/o + -tomy).", "برش مثانه", "tx", "tx", []],
["dehydration", "dee-hye-DRAY-shun", "Excessive loss of body fluid.", "کم‌آبی بدن", "ur", "sx", []],
["detrusor muscle", "deh-TROO-sor MUS-el", "Smooth muscle of the bladder wall that contracts to empty the bladder.", "عضله دترسور", "tr", "body", []],
["diabetes insipidus", "dye-ah-BEE-teez in-SIP-ih-dus", "Lack of antidiuretic hormone causing large amounts of dilute urine and extreme thirst.", "دیابت بی‌مزه", "dz", "dz", []],
["diabetic nephropathy", "dye-ah-BET-ik neh-FROP-ah-thee", "Kidney damage to the glomerular capillaries from long-term high blood sugar.", "نفروپاتی دیابتی", "dz", "dz", []],
["dialysate", "dye-AL-ih-sayt", "Dialysis fluid that draws wastes out of the blood through the membrane.", "مایع دیالیز", "tx", "tx", []],
["dialysis", "dye-AL-ih-sis", "Removal of wastes and excess fluid across a semipermeable membrane when the kidneys fail (dia- + -lysis).", "دیالیز", "tx", "tx", []],
["distal convoluted tubule", "DIS-tal kon-voh-LOOT-ed TOO-byool", "Twisted part of the renal tubule farthest from the glomerular capsule, before the collecting duct.", "لوله پیچیده دور", "kd", "body", []],
["diuresis", "dye-yoo-REE-sis", "Increased formation and excretion of urine.", "افزایش ادرار (دیورز)", "ur", "phys", []],
["diuretic", "dye-yoo-RET-ik", "Drug that increases urine output (water pill), used for edema, heart failure and hypertension, such as furosemide.", "داروی ادرارآور (دیورتیک)", "tx", "tx", []],
["dysuria", "dis-YOO-ree-ah", "Painful or difficult urination (dys- + -uria).", "سوزش و درد ادرار", "ur", "sx", []],
["edema", "eh-DEE-mah", "Abnormal accumulation of fluid in tissue spaces; a sign of kidney failure or nephrotic syndrome.", "ادم (تورم)", "ur", "sx", []],
["efferent arteriole", "EF-er-ent ar-TEER-ee-ohl", "Small artery that carries blood away from the glomerulus (efferent = away from).", "سرخرگچه وابران", "kd", "body", []],
["electrolytes", "ee-LEK-troh-lytes", "Ions in body fluids such as sodium, potassium, chloride and bicarbonate that the kidneys keep in balance.", "الکترولیت‌ها", "kd", "phys", []],
["end-stage renal disease", "end stayj REE-nal dih-ZEEZ", "Final, irreversible stage of kidney failure that requires dialysis or transplantation.", "مرحله پایانی بیماری کلیه", "dz", "dz", ["ESRD"]],
["enuresis", "en-yoo-REE-sis", "Involuntary urination after the age of bladder control, usually at night; bed-wetting (nocturnal enuresis).", "شب‌ادراری", "tr", "sx", []],
["epispadias", "ep-ih-SPAY-dee-as", "Congenital opening of the urethra on the upper (dorsal) surface of the penis.", "اپی‌سپادیاس", "dz", "dz", []],
["erythropoietin", "eh-rith-roh-POY-eh-tin", "Hormone made by the kidneys that stimulates red blood cell production in bone marrow.", "اریتروپویتین", "kd", "phys", ["EPO"]],
["estimated glomerular filtration rate", "ES-tih-may-ted gloh-MAIR-yoo-lar fil-TRAY-shun rayt", "Kidney function estimate calculated from blood creatinine, age and sex.", "میزان تخمینی تصفیه گلومرولی", "ur", "lab", ["eGFR"]],
["excretory urography", "EKS-kreh-tor-ee yoo-ROG-rah-fee", "Injecting dye into the bloodstream and taking X-rays as the kidney excretes it.", "اوروگرافی دفعی", "tx", "lab", ["EU"]],
["external urethral sphincter", "eks-TER-nal yoo-REE-thral SFINK-ter", "Voluntary circular muscle around the urethra under conscious control.", "اسفنکتر خارجی پیشابراه", "tr", "body", []],
["extracorporeal shock wave lithotripsy", "eks-trah-kor-POR-ee-al shok wayv LITH-oh-trip-see", "Breaking up urinary stones with shock waves from outside the body, without surgery.", "سنگ‌شکنی برون‌اندامی", "tx", "tx", ["ESWL"]],
["filtration", "fil-TRAY-shun", "First stage of urine formation: blood pressure pushes fluid out of the glomerulus into the glomerular capsule.", "تصفیه (فیلتراسیون)", "kd", "phys", []],
["Foley catheter", "FOH-lee KATH-eh-ter", "Indwelling urinary catheter held in the bladder by an inflated balloon; retention catheter.", "سوند فولی", "tx", "tx", []],
["fulguration", "ful-gyoo-RAY-shun", "Destruction of tissue with an electric spark, for example to remove a small bladder tumor.", "سوزاندن بافت با جرقه الکتریکی", "tx", "tx", []],
["genitourinary", "jen-ih-toh-YOO-rih-nair-ee", "Pertaining to the genital and urinary organs, which share the urethra in the male (genit/o = genitals, urin/o = urine).", "ادراری-تناسلی", "lx", "body", ["GU"]],
["glomerular", "gloh-MAIR-yoo-lar", "Pertaining to a glomerulus (glomerul/o + -ar).", "گلومرولی", "lx", "body", []],
["glomerular capsule", "gloh-MAIR-yoo-lar KAP-sool", "Double-walled cup around the glomerulus that receives the filtrate; Bowman capsule.", "کپسول بومن", "kd", "body", []],
["glomerular filtrate", "gloh-MAIR-yoo-lar FIL-trayt", "Fluid of water, electrolytes, nutrients and wastes that enters the nephron from the glomerulus.", "مایع تصفیه‌شده گلومرولی", "kd", "phys", []],
["glomerular filtration rate", "gloh-MAIR-yoo-lar fil-TRAY-shun rayt", "Amount of filtrate formed per minute by both kidneys; the best overall measure of kidney function.", "میزان تصفیه گلومرولی", "kd", "phys", ["GFR"]],
["glomerulitis", "gloh-mair-yoo-LYE-tis", "Inflammation of the glomeruli (glomerul/o + -itis).", "التهاب گلومرول", "dz", "dz", []],
["glomerulonephritis", "gloh-mair-yoo-loh-neh-FRYE-tis", "Inflammation of the kidney mainly in the glomeruli, often after a streptococcal infection; Bright disease.", "گلومرولونفریت", "dz", "dz", ["AGN"]],
["glomerulus", "gloh-MAIR-yoo-lus", "Ball of capillaries inside the glomerular capsule where blood is filtered (glomerul/o; plural glomeruli; Latin glomus = ball of yarn).", "گلومرول", "kd", "body", []],
["glycosuria", "glye-koh-SOO-ree-ah", "Sugar (glucose) in the urine, as in diabetes mellitus (glycos/o + -uria); glucosuria.", "قند در ادرار", "ur", "sx", []],
["hematuria", "hee-mah-TOO-ree-ah", "Blood in the urine (hemat/o + -uria).", "خون در ادرار (هماچوری)", "ur", "sx", []],
["hemodialysis", "hee-moh-dye-AL-ih-sis", "Filtering the blood through an artificial kidney machine, usually 4 hours three times a week.", "همودیالیز", "tx", "tx", ["HD"]],
["hesitancy", "HEZ-ih-tan-see", "Weak urine stream with difficulty starting flow, often from an enlarged prostate.", "تأخیر در شروع ادرار", "tr", "sx", []],
["hilum", "HYE-lum", "Indented area on the medial border of the kidney where the renal artery enters and the renal vein and ureter leave.", "ناف کلیه (هیلوم)", "kd", "body", []],
["homeostasis", "hoh-mee-oh-STAY-sis", "State of internal balance that the kidneys help maintain (home/o = sameness, -stasis = standing still).", "هم‌ایستایی (هومئوستاز)", "kd", "phys", []],
["horseshoe kidney", "HORS-shoo KID-nee", "Congenital fusion of the lower poles of the two kidneys into a horseshoe shape.", "کلیه نعل‌اسبی", "dz", "dz", []],
["hydronephrosis", "hye-droh-neh-FROH-sis", "Collection of urine in the renal pelvis caused by obstruction, with distention of the kidney (hydr/o + nephr/o + -osis).", "هیدرونفروز", "dz", "dz", []],
["hydroureter", "hye-droh-yoo-REE-ter", "Distention of the ureter with urine from obstruction.", "اتساع میزنای از ادرار", "dz", "dz", []],
["hyperkalemia", "hye-per-kah-LEE-mee-ah", "Excess potassium in the blood (kal/i = potassium, Latin kalium); can cause dangerous arrhythmias.", "پتاسیم بالای خون", "ur", "sx", []],
["hypernatremia", "hye-per-nah-TREE-mee-ah", "Excess sodium in the blood (natr/o = sodium, Latin natrium).", "سدیم بالای خون", "ur", "sx", []],
["hypokalemia", "hye-poh-kah-LEE-mee-ah", "Low potassium in the blood, for example from diuretics.", "پتاسیم پایین خون", "ur", "sx", []],
["hyponatremia", "hye-poh-nah-TREE-mee-ah", "Low sodium in the blood, for example from water intoxication or kidney failure.", "سدیم پایین خون", "ur", "sx", []],
["hypoproteinemia", "hye-poh-proh-teen-EE-mee-ah", "Low protein in the blood, often from protein loss in urine.", "پروتئین پایین خون", "ur", "sx", []],
["hypospadias", "hye-poh-SPAY-dee-as", "Congenital opening of the male urethra on the undersurface of the penis (hypo- + -spadias = slit).", "هیپوسپادیاس", "dz", "dz", []],
["hypovolemia", "hye-poh-voh-LEE-mee-ah", "Decreased blood volume.", "کاهش حجم خون", "dz", "sx", []],
["ileal conduit", "IL-ee-al KON-doo-it", "Urinary diversion in which the ureters drain into a segment of ileum that opens on the abdomen; ileal bladder, urostomy.", "مجرای ایلئومی", "tx", "tx", []],
["intake and output", "IN-tayk and OWT-put", "Measurement of all fluids taken in and all urine and fluids lost, used to monitor fluid balance.", "جذب و دفع مایعات", "ur", "lab", ["I&O"]],
["internal urethral sphincter", "in-TER-nal yoo-REE-thral SFINK-ter", "Involuntary circular muscle at the entrance to the urethra.", "اسفنکتر داخلی پیشابراه", "tr", "body", []],
["interrenal", "in-ter-REE-nal", "Between the kidneys (inter- + ren/o + -al).", "میان دو کلیه", "lx", "body", []],
["interstitial cystitis", "in-ter-STISH-al sis-TYE-tis", "Chronic inflammation and irritation of the bladder of unknown cause, most common in middle-aged women.", "سیستیت بینابینی", "dz", "dz", []],
["interstitial nephritis", "in-ter-STISH-al neh-FRYE-tis", "Inflammation of the connective tissue between the renal tubules that destroys nephrons.", "نفریت بینابینی", "dz", "dz", []],
["intrarenal", "in-trah-REE-nal", "Within the kidney (intra- + ren/o + -al).", "درون‌کلیوی", "lx", "body", []],
["intravenous pyelography", "in-trah-VEE-nus pye-eh-LOG-rah-fee", "X-rays taken after contrast dye is injected into a vein and excreted by the kidneys; intravenous urography.", "پیلوگرافی وریدی", "tx", "lab", ["IVP", "IVU"]],
["intravesical", "in-trah-VES-ih-kal", "Within the urinary bladder (intra- + vesic/o + -al).", "درون مثانه", "lx", "body", []],
["juxtaglomerular", "juks-tah-glo-MER-yoo-lar", "Near the glomerulus (juxta- = near + glomerul/o + -ar); the juxtaglomerular cells release renin.", "کنار گلومرول", "kd", "body", []],
["kaliuresis", "kay-lee-yoo-REE-sis", "Excretion of potassium in the urine (kali- + -uresis).", "دفع پتاسیم در ادرار", "ur", "phys", []],
["ketonuria", "kee-toh-NOO-ree-ah", "Ketones in the urine, when the body burns fat instead of glucose (keton/o + -uria).", "کتون در ادرار", "ur", "sx", []],
["kidney", "KID-nee", "One of two bean-shaped organs in the lumbar region that filter blood, form urine and balance water, electrolytes and pH (nephr/o, ren/o).", "کلیه", "kd", "body", []],
["kidneys, ureters, bladder", "KID-neez YOO-reh-terz BLAD-er", "Plain X-ray of the abdomen showing the kidneys, ureters and bladder without contrast dye; flat-plate abdomen.", "عکس ساده کلیه، میزنای و مثانه", "tx", "lab", ["KUB"]],
["lithotomy", "lih-THOT-oh-mee", "Incision into an organ to remove a stone (lith/o + -tomy).", "برش برای برداشتن سنگ", "tx", "tx", []],
["lithotripsy", "LITH-oh-trip-see", "Crushing a stone into small pieces that can pass in the urine (lith/o + -tripsy).", "سنگ‌شکنی", "tx", "tx", []],
["meatal", "mee-AY-tal", "Pertaining to a meatus (meat/o + -al).", "مربوط به سوراخ پیشابراه", "lx", "body", []],
["meatotomy", "mee-ah-TOT-oh-mee", "Incision of the urinary meatus to enlarge the opening (meat/o + -tomy).", "برش سوراخ پیشابراه", "tx", "tx", []],
["medullary", "MED-yoo-lair-ee", "Pertaining to a medulla, the inner region of an organ such as the kidney (medull/o + -ary).", "مغزی (بخش درونی)", "kd", "body", []],
["micturition", "mik-too-RISH-un", "The voiding of urine; urination (Latin mictus = a making of water); often misspelled micturation.", "ادرار کردن (میکچوریشن)", "lx", "phys", []],
["micturition reflex", "mik-too-RISH-un REE-fleks", "Contraction of the bladder wall and relaxation of the sphincter in response to rising bladder pressure.", "رفلکس ادرار", "tr", "phys", []],
["natriuresis", "nay-tree-yoo-REE-sis", "Excretion of sodium in the urine (natri- + -uresis).", "دفع سدیم در ادرار", "ur", "phys", []],
["nephralgia", "neh-FRAL-jee-ah", "Pain in the kidney (nephr/o + -algia).", "درد کلیه", "lx", "sx", []],
["nephrectomy", "neh-FREK-toh-mee", "Surgical removal of a kidney (nephr/o + -ectomy).", "برداشتن کلیه (نفرکتومی)", "tx", "tx", []],
["nephric", "NEF-rik", "Pertaining to the kidney (nephr/o + -ic); less common than renal.", "کلیوی", "lx", "body", []],
["nephritis", "neh-FRYE-tis", "Inflammation of the kidney (nephr/o + -itis).", "التهاب کلیه (نفریت)", "lx", "dz", []],
["nephroblastoma", "nef-roh-blas-TOH-mah", "Malignant kidney tumor of children, usually before age 5; Wilms tumor.", "نفروبلاستوم (تومور ویلمز)", "dz", "dz", []],
["nephrogram", "NEF-roh-gram", "X-ray record of the kidney (nephr/o + -gram).", "نفروگرام", "tx", "lab", []],
["nephrolith", "NEF-roh-lith", "A kidney stone (nephr/o + -lith).", "سنگ کلیه", "lx", "dz", []],
["nephrolithiasis", "nef-roh-lih-THYE-ah-sis", "Presence of stones in the kidney; renal calculi (nephr/o + lith/o + -iasis).", "سنگ کلیه (نفرولیتیازیس)", "dz", "dz", []],
["nephrolithotomy", "nef-roh-lih-THOT-oh-mee", "Incision into the kidney to remove a stone; percutaneous nephrolithotomy goes through the skin with an endoscope.", "نفرولیتوتومی", "tx", "tx", []],
["nephrologist", "neh-FROL-oh-jist", "Physician who treats kidney disease and manages dialysis and kidney transplantation.", "متخصص کلیه (نفرولوژیست)", "lx", "field", []],
["nephrology", "neh-FROL-oh-jee", "Branch of internal medicine that studies and treats diseases of the kidney (nephr/o + -logy).", "نفرولوژی (کلیه‌شناسی)", "lx", "field", []],
["nephrolysis", "neh-FROL-ih-sis", "Freeing the kidney from adhesions to other structures (nephr/o + -lysis).", "آزادسازی کلیه از چسبندگی", "tx", "tx", []],
["nephroma", "neh-FROH-mah", "Any tumor of the kidney (nephr/o + -oma).", "تومور کلیه", "dz", "dz", []],
["nephromalacia", "nef-roh-mah-LAY-shee-ah", "Abnormal softening of the kidney (nephr/o + -malacia).", "نرمی کلیه", "dz", "dz", []],
["nephromegaly", "nef-roh-MEG-ah-lee", "Enlargement of the kidney; renomegaly (nephr/o + -megaly).", "بزرگی کلیه", "dz", "sx", []],
["nephron", "NEF-ron", "Microscopic functional unit of the kidney that filters blood and forms urine; more than one million in each kidney.", "نفرون", "kd", "body", []],
["nephron loop", "NEF-ron loop", "U-shaped part of the renal tubule with descending and ascending limbs; loop of Henle.", "قوس هنله", "kd", "body", []],
["nephropathy", "neh-FROP-ah-thee", "Any disease of the kidney (nephr/o + -pathy).", "بیماری کلیه (نفروپاتی)", "lx", "dz", []],
["nephropexy", "NEF-roh-pek-see", "Surgical fixation of a floating kidney (nephr/o + -pexy).", "تثبیت کلیه", "tx", "tx", []],
["nephroptosis", "nef-rop-TOH-sis", "Downward displacement of the kidney; floating kidney (nephr/o + -ptosis).", "افتادگی کلیه", "dz", "dz", []],
["nephrorrhaphy", "nef-ROR-ah-fee", "Suturing of a damaged kidney (nephr/o + -rrhaphy).", "بخیه کلیه", "tx", "tx", []],
["nephrosclerosis", "nef-roh-skleh-ROH-sis", "Hardening of kidney tissue (nephr/o + -sclerosis).", "سفتی کلیه", "dz", "dz", []],
["nephroscopy", "neh-FROS-koh-pee", "Visual examination of the inside of the kidney (nephr/o + -scopy).", "نفروسکوپی", "tx", "lab", []],
["nephrosis", "neh-FROH-sis", "Any noninflammatory disease of the kidney; nephrotic syndrome (nephr/o + -osis).", "نفروز", "dz", "dz", []],
["nephrostomy", "neh-FROS-toh-mee", "Surgical opening into the kidney through the abdominal wall (nephr/o + -stomy).", "نفروستومی", "tx", "tx", []],
["nephrotic syndrome", "neh-FROT-ik SIN-drohm", "Glomerular damage with heavy proteinuria, hypoproteinemia, edema and high blood lipids; nephrosis.", "سندرم نفروتیک", "dz", "dz", ["NS"]],
["nephrotomy", "neh-FROT-oh-mee", "Incision into the kidney (nephr/o + -tomy).", "برش کلیه", "tx", "tx", []],
["nephrotoxic", "nef-roh-TOK-sik", "Poisonous or harmful to the kidney (nephr/o + tox/o + -ic).", "سمی برای کلیه", "lx", "sx", []],
["neurogenic bladder", "noo-roh-JEN-ik BLAD-er", "Bladder dysfunction from a nervous system lesion, such as spinal cord injury or multiple sclerosis.", "مثانه نوروژنیک", "tr", "dz", []],
["nocturia", "nok-TOO-ree-ah", "Excessive urination at night (noct/i + -uria).", "شب‌ادراری مکرر (ناکچوری)", "ur", "sx", []],
["oliguria", "ol-ig-YOO-ree-ah", "Scanty urine production (olig/o + -uria).", "کم‌ادراری", "ur", "sx", []],
["perinephric", "pair-ih-NEF-rik", "Around the kidney (peri- + nephr/o + -ic), as in perinephric fat.", "دور کلیه", "kd", "body", []],
["perinephric fat", "pair-ih-NEF-rik fat", "Fatty tissue around the renal capsule that cushions the kidney; pararenal fat body.", "چربی اطراف کلیه", "kd", "body", []],
["perirenal", "pair-ih-REE-nal", "Around the kidney (peri- + ren/o + -al).", "اطراف کلیه", "lx", "body", []],
["peristalsis", "pair-ih-STAL-sis", "Wavelike muscular contractions that push urine down the ureter.", "حرکات دودی", "tr", "phys", []],
["peritoneal dialysis", "pair-ih-toh-NEE-al dye-AL-ih-sis", "Dialysis using the peritoneum as the membrane: dialysate is put into and drained from the abdominal cavity.", "دیالیز صفاقی", "tx", "tx", ["CAPD", "CCPD", "IPD"]],
["peritubular capillaries", "pair-ih-TOO-byoo-lar KAP-ih-lair-eez", "Capillary bed around the renal tubules that takes back reabsorbed water and nutrients.", "مویرگ‌های دورلوله‌ای", "kd", "body", []],
["polycystic kidney disease", "pol-ee-SIS-tik KID-nee dih-ZEEZ", "Hereditary disease in which many cysts replace kidney tissue, leading to renal failure.", "بیماری کلیه پلی‌کیستیک", "dz", "dz", ["PKD"]],
["polydipsia", "pol-ee-DIP-see-ah", "Excessive thirst (poly- + dips/o + -ia).", "پرنوشی (تشنگی زیاد)", "ur", "sx", []],
["polyuria", "pol-ee-YOO-ree-ah", "Excretion of unusually large amounts of urine, as in diabetes (poly- + -uria).", "پرادراری", "ur", "sx", []],
["postrenal", "pohst-REE-nal", "Behind the kidney (post- + ren/o + -al); also, occurring after the kidney.", "پس‌کلیوی", "lx", "body", []],
["prerenal", "pree-REE-nal", "In front of the kidney (pre- + ren/o + -al); also, occurring before the kidney.", "پیش‌کلیوی", "lx", "body", []],
["prostate gland", "PROS-tayt gland", "Male gland around the urethra just below the bladder; an enlarged prostate can block urine flow.", "غده پروستات", "tr", "body", []],
["proteinuria", "proh-teen-YOO-ree-ah", "Protein, mainly albumin, in the urine (protein/o + -uria).", "پروتئین در ادرار", "ur", "sx", []],
["proximal convoluted tubule", "PROK-sih-mal kon-voh-LOOT-ed TOO-byool", "First twisted part of the renal tubule, nearest the glomerular capsule, where most reabsorption occurs.", "لوله پیچیده نزدیک", "kd", "body", []],
["pyelectasis", "pye-eh-LEK-tah-sis", "Dilation of the renal pelvis (pyel/o + -ectasis).", "گشادی لگنچه", "dz", "dz", []],
["pyelitic", "pye-eh-LIT-ik", "Pertaining to the renal pelvis (pyel/o + -tic).", "مربوط به لگنچه", "lx", "body", []],
["pyelitis", "pye-eh-LYE-tis", "Inflammation of the renal pelvis (pyel/o + -itis).", "التهاب لگنچه کلیه", "lx", "dz", []],
["pyelogram", "PYE-eh-loh-gram", "X-ray record of the renal pelvis (pyel/o + -gram).", "پیلوگرام", "tx", "lab", []],
["pyelolithotomy", "pye-eh-loh-lih-THOT-oh-mee", "Incision into the renal pelvis to remove stones.", "برداشتن سنگ از لگنچه", "tx", "tx", []],
["pyelonephritis", "pye-eh-loh-neh-FRYE-tis", "Inflammation of the renal pelvis and kidney, usually from a bladder infection that ascends the ureter.", "عفونت کلیه (پیلونفریت)", "dz", "dz", []],
["pyeloplasty", "PYE-eh-loh-plas-tee", "Surgical repair of the renal pelvis (pyel/o + -plasty).", "ترمیم لگنچه", "tx", "tx", []],
["pyelotomy", "pye-eh-LOT-oh-mee", "Incision into the renal pelvis (pyel/o + -tomy).", "برش لگنچه", "tx", "tx", []],
["pyuria", "pye-YOO-ree-ah", "Pus in the urine (py/o + -uria).", "چرک در ادرار", "ur", "sx", []],
["reabsorption", "ree-ab-SORP-shun", "Second stage of urine formation: water, electrolytes and nutrients return from the tubule to the blood; tubular reabsorption.", "بازجذب", "kd", "phys", []],
["renal", "REE-nal", "Pertaining to the kidney (ren/o = kidney, -al = pertaining to).", "کلیوی", "lx", "body", []],
["renal angiography", "REE-nal an-jee-OG-rah-fee", "X-ray of the kidney's blood vessels after contrast is injected into the renal artery.", "آنژیوگرافی کلیه", "tx", "lab", []],
["renal artery", "REE-nal AR-ter-ee", "Branch of the abdominal aorta that brings blood to the kidney.", "سرخرگ کلیه", "kd", "body", []],
["renal biopsy", "REE-nal BYE-op-see", "Removal of a small piece of kidney tissue, often by needle under ultrasound, for microscopic study.", "بیوپسی کلیه", "tx", "lab", []],
["renal calculus", "REE-nal KAL-kyoo-lus", "A kidney stone formed from mineral salts such as calcium (Latin calculus = pebble; plural calculi).", "سنگ کلیه", "dz", "dz", []],
["renal capsule", "REE-nal KAP-sool", "Thin fibrous membrane that covers each kidney.", "کپسول کلیه", "kd", "body", []],
["renal cell carcinoma", "REE-nal sel kar-sih-NOH-mah", "Cancer arising from the cells of the kidney tubules; hypernephroma.", "سرطان سلول کلیوی", "dz", "dz", []],
["renal colic", "REE-nal KOL-ik", "Severe radiating pain in the kidney region as a stone passes or blocks the ureter.", "قولنج کلیوی", "dz", "sx", []],
["renal column", "REE-nal KOL-um", "Cortical tissue that extends between the renal pyramids.", "ستون کلیه", "kd", "body", []],
["renal corpuscle", "REE-nal KOR-pus-el", "Blood-filtering part of the nephron: the glomerulus and its glomerular capsule.", "جسمک کلیوی", "kd", "body", []],
["renal cortex", "REE-nal KOR-teks", "The outer region of the kidney, containing parts of the nephrons (cortic/o).", "قشر کلیه", "kd", "body", []],
["renal failure", "REE-nal FAYL-yer", "Loss of the kidneys' ability to filter wastes, causing uremia; may be acute or chronic.", "نارسایی کلیه", "dz", "dz", []],
["renal fascia", "REE-nal FASH-ee-ah", "Thin layer of connective tissue that forms the kidney's outer covering and anchors it.", "فاسیای کلیه", "kd", "body", []],
["renal hypertension", "REE-nal hye-per-TEN-shun", "High blood pressure that results from kidney disease; secondary hypertension.", "فشار خون کلیوی", "dz", "dz", []],
["renal hypoplasia", "REE-nal hye-poh-PLAY-zee-ah", "Underdeveloped kidney (hypo- + -plasia).", "کم‌رشدی کلیه", "dz", "dz", []],
["renal insufficiency", "REE-nal in-suh-FISH-en-see", "Lesser decrease in kidney function with fewer symptoms than renal failure.", "نارسایی خفیف کلیه", "dz", "dz", []],
["renal medulla", "REE-nal meh-DUL-ah", "The inner region of the kidney, containing the renal pyramids (medull/o).", "مغز کلیه", "kd", "body", []],
["renal papilla", "REE-nal pah-PIL-ah", "Tip of a renal pyramid that opens into a calyx.", "پاپی کلیه", "kd", "body", []],
["renal pelvis", "REE-nal PEL-vis", "Funnel-shaped upper end of the ureter that collects urine in the kidney (pyel/o = basin).", "لگنچه کلیه", "kd", "body", []],
["renal pyramid", "REE-nal PEER-ah-mid", "Triangular section of the renal medulla made of nephron loops and collecting ducts.", "هرم کلیه", "kd", "body", []],
["renal transplantation", "REE-nal trans-plan-TAY-shun", "Surgical placement of a donor kidney, usually in the lower abdomen near the iliac vessels.", "پیوند کلیه", "tx", "tx", []],
["renal tubule", "REE-nal TOO-byool", "Tubule of the nephron: proximal convoluted tubule, nephron loop and distal convoluted tubule.", "لوله کلیوی", "kd", "body", []],
["renal vein", "REE-nal vayn", "Vein that returns filtered blood from the kidney to the inferior vena cava.", "سیاهرگ کلیه", "kd", "body", []],
["renin", "REE-nin", "Enzyme made by the kidneys that activates angiotensin to raise blood pressure.", "رنین", "kd", "phys", []],
["renogram", "REE-noh-gram", "Nuclear medicine image that shows kidney function after a radioactive substance is injected; renal scan.", "رنوگرام (اسکن کلیه)", "tx", "lab", []],
["resectoscope", "ree-SEK-toh-skohp", "Endoscope used to cut and remove lesions, as in transurethral resection.", "رزکتوسکوپ", "tx", "tx", []],
["retrograde pyelography", "RET-roh-grayd pye-eh-LOG-rah-fee", "X-ray after dye is injected backward through the urethra or a cystoscope to outline the bladder, ureters and renal pelvis.", "پیلوگرافی رتروگراد", "tx", "lab", ["RP"]],
["retroperitoneal", "ret-roh-pair-ih-toh-NEE-al", "Behind the peritoneum; the location of the kidneys (retro- + peritone/o + -al).", "پشت صفاق", "kd", "body", []],
["rugae", "ROO-jee", "Folds in the mucous lining of the bladder that let it stretch.", "چین‌های مثانه", "tr", "body", []],
["secretion", "seh-KREE-shun", "Third stage of urine formation: tubule cells move wastes such as ammonia, uric acid and hydrogen ions from blood into the tubule.", "ترشح", "kd", "phys", []],
["specific gravity", "speh-SIF-ik GRAV-ih-tee", "Weight of urine compared with water (1.000); normal urine is about 1.001–1.030, higher when concentrated.", "وزن مخصوص ادرار", "ur", "lab", ["SG"]],
["staghorn calculus", "STAG-horn KAL-kyoo-lus", "Large kidney stone that fills the renal pelvis and calyces like a deer's antler.", "سنگ شاخ گوزنی", "dz", "dz", []],
["stress incontinence", "stres in-KON-tih-nens", "Leakage of urine during coughing, sneezing, laughing or exercise.", "بی‌اختیاری استرسی", "tr", "sx", []],
["stricture", "STRIK-chur", "Abnormal narrowing of a passage of the urinary tract.", "تنگی", "dz", "dz", []],
["suprarenal", "soo-prah-REE-nal", "Above the kidney (supra- + ren/o + -al); the adrenal gland is also called the suprarenal gland.", "فوق‌کلیوی", "lx", "body", []],
["transurethral", "tranz-yoo-REE-thral", "Through the urethra (trans- + urethr/o + -al), as in transurethral surgery.", "از راه پیشابراه", "lx", "tx", []],
["trigone", "TRY-gohn", "Triangular area at the base of the bladder marked by the two ureteral openings and the urethral opening (trigon/o).", "مثلث مثانه (تریگون)", "tr", "body", []],
["trigonitis", "try-goh-NYE-tis", "Inflammation of the trigone of the bladder (trigon/o + -itis).", "التهاب مثلث مثانه", "tr", "dz", []],
["turbidity", "ter-BID-ih-tee", "Cloudiness of urine from suspended material; may be a sign of bacteria or pus.", "کدورت ادرار", "ur", "lab", []],
["ultrasonography", "ul-trah-soh-NOG-rah-fee", "Imaging with sound waves to show kidney size, tumors, cysts and obstruction.", "سونوگرافی", "tx", "lab", ["US"]],
["urea", "yoo-REE-ah", "Main nitrogenous waste of protein metabolism, made in the liver and excreted in urine.", "اوره", "kd", "phys", []],
["uremia", "yoo-REE-mee-ah", "Toxic level of urea and other nitrogenous wastes in the blood from renal failure (ur/o + -emia).", "اورمی", "ur", "sx", []],
["ureter", "YOO-reh-ter", "One of two muscular tubes that carry urine from the renal pelvis to the bladder (ureter/o). Two ureters, two e's.", "میزنای (حالب)", "tr", "body", []],
["ureteral", "yoo-REE-ter-al", "Pertaining to the ureter (ureter/o + -al).", "میزنایی", "lx", "body", []],
["ureteral orifice", "yoo-REE-ter-al OR-ih-fis", "Opening of a ureter into the bladder wall.", "دهانه میزنای", "tr", "body", []],
["ureteral stent", "yoo-REE-ter-al stent", "Thin tube placed in the ureter so urine can bypass a blockage from kidney to bladder.", "استنت میزنای", "tx", "tx", []],
["ureterectasis", "yoo-ree-ter-EK-tah-sis", "Dilation of a ureter (ureter/o + -ectasis).", "گشادی میزنای", "tr", "dz", []],
["ureterectomy", "yoo-ree-ter-EK-toh-mee", "Surgical removal of a ureter (ureter/o + -ectomy).", "برداشتن میزنای", "tx", "tx", []],
["ureteritis", "yoo-ree-ter-EYE-tis", "Inflammation of a ureter (ureter/o + -itis).", "التهاب میزنای", "lx", "dz", []],
["ureterocele", "yoo-REE-ter-oh-seel", "Cyst-like bulging of the end of the ureter into the bladder, usually congenital.", "یورتروسل", "dz", "dz", []],
["ureterolith", "yoo-REE-ter-oh-lith", "A stone in the ureter (ureter/o + -lith).", "سنگ میزنای", "dz", "dz", []],
["ureteroplasty", "yoo-REE-ter-oh-plas-tee", "Surgical repair of a ureter (ureter/o + -plasty).", "ترمیم میزنای", "tx", "tx", []],
["ureterorrhagia", "yoo-ree-ter-oh-RAY-jee-ah", "Bleeding from a ureter (ureter/o + -rrhagia).", "خونریزی میزنای", "tr", "sx", []],
["ureterorrhaphy", "yoo-ree-ter-OR-ah-fee", "Suture of a damaged ureter (ureter/o + -rrhaphy).", "بخیه میزنای", "tx", "tx", []],
["ureteroscope", "yoo-REE-ter-oh-skohp", "Instrument to view the inside of the ureter (ureter/o + -scope).", "یورتروسکوپ", "tx", "lab", []],
["ureterostenosis", "yoo-ree-ter-oh-steh-NOH-sis", "Narrowing of a ureter (ureter/o + -stenosis).", "تنگی میزنای", "tr", "dz", []],
["ureterostomy", "yoo-ree-ter-OS-toh-mee", "Surgical opening from a ureter to the skin so urine drains into a bag.", "یورتروستومی", "tx", "tx", []],
["urethra", "yoo-REE-thrah", "Single tube that carries urine from the bladder out of the body; in the male it also carries semen (urethr/o).", "پیشابراه (میزراه)", "tr", "body", []],
["urethral", "yoo-REE-thral", "Pertaining to the urethra (urethr/o + -al).", "پیشابراهی", "lx", "body", []],
["urethralgia", "yoo-ree-THRAL-jee-ah", "Pain in the urethra; urethrodynia (urethr/o + -algia).", "درد پیشابراه", "lx", "sx", []],
["urethritis", "yoo-ree-THRYE-tis", "Inflammation of the urethra, usually from infection (urethr/o + -itis).", "التهاب پیشابراه", "lx", "dz", []],
["urethrocele", "yoo-REE-throh-seel", "Hernia or bulging of the urethra (urethr/o + -cele).", "فتق پیشابراه", "tr", "dz", []],
["urethrocystitis", "yoo-ree-throh-sis-TYE-tis", "Inflammation of the urethra and bladder together.", "التهاب پیشابراه و مثانه", "tr", "dz", []],
["urethropexy", "yoo-REE-throh-pek-see", "Surgical fixation of the urethra to nearby tissue, used for stress incontinence.", "تثبیت پیشابراه", "tx", "tx", []],
["urethroplasty", "yoo-REE-throh-plas-tee", "Surgical repair of the urethra (urethr/o + -plasty).", "ترمیم پیشابراه", "tx", "tx", []],
["urethrorrhagia", "yoo-ree-throh-RAY-jee-ah", "Abnormal bleeding from the urethra (urethr/o + -rrhagia).", "خونریزی پیشابراه", "tr", "sx", []],
["urethrorrhea", "yoo-ree-throh-REE-ah", "Abnormal discharge from the urethra (urethr/o + -rrhea).", "ترشح از پیشابراه", "tr", "sx", []],
["urethroscope", "yoo-REE-throh-skohp", "Instrument to view the inside of the urethra (urethr/o + -scope).", "اورتروسکوپ", "tx", "lab", []],
["urethrostenosis", "yoo-ree-throh-steh-NOH-sis", "Narrowing of the urethra (urethr/o + -stenosis).", "تنگی پیشابراه", "tr", "dz", []],
["urethrotomy", "yoo-ree-THROT-oh-mee", "Incision to enlarge a narrowed urethra (urethr/o + -tomy).", "برش پیشابراه", "tx", "tx", []],
["urge incontinence", "erj in-KON-tih-nens", "Sudden urge that causes urination before reaching a bathroom.", "بی‌اختیاری فوریتی", "tr", "sx", []],
["urgency", "ER-jen-see", "Feeling the need to urinate immediately.", "فوریت ادرار", "tr", "sx", []],
["uric acid", "YOO-rik AS-id", "Nitrogenous waste product of metabolism excreted in urine.", "اسید اوریک", "kd", "phys", []],
["urinalysis", "yoo-rih-NAL-ih-sis", "Physical, chemical and microscopic examination of urine (urin/o + analysis).", "آزمایش ادرار", "ur", "lab", ["UA"]],
["urinary", "YOO-rih-nair-ee", "Pertaining to urine (urin/o + -ary).", "ادراری", "lx", "body", []],
["urinary bladder", "YOO-rih-nair-ee BLAD-er", "Hollow, elastic muscular sac in the pelvis that stores urine (cyst/o, vesic/o).", "مثانه", "tr", "body", []],
["urinary frequency", "YOO-rih-nair-ee FREE-kwen-see", "Need to urinate often without an increase in total daily output; a sign of bladder or urethral inflammation.", "تکرر ادرار", "tr", "sx", []],
["urinary incontinence", "YOO-rih-nair-ee in-KON-tih-nens", "Inability to retain urine; involuntary release of urine.", "بی‌اختیاری ادرار", "tr", "sx", []],
["urinary meatus", "YOO-rih-nair-ee mee-AY-tus", "External opening of the urethra (meat/o).", "سوراخ پیشابراه", "tr", "body", []],
["urinary retention", "YOO-rih-nair-ee ree-TEN-shun", "Inability to empty the bladder completely, often from blockage of the urethra.", "احتباس ادرار", "tr", "sx", []],
["urinary stasis", "YOO-rih-nair-ee STAY-sis", "Stoppage or stagnation of urine flow, which promotes infection and stones.", "ایستایی ادرار", "dz", "sx", []],
["urinary system", "YOO-rih-nair-ee SIS-tem", "The kidneys, ureters, urinary bladder and urethra, which form, store and eliminate urine; also called the renal or excretory system.", "دستگاه ادراری", "lx", "body", []],
["urinary tract infection", "YOO-rih-nair-ee trakt in-FEK-shun", "Infection, usually bacterial (often E. coli), of any part of the urinary tract; more common in women because of the shorter urethra.", "عفونت ادراری", "dz", "dz", ["UTI"]],
["urination", "yoo-rih-NAY-shun", "Release of urine from the bladder; micturition, voiding, uresis.", "ادرار کردن", "tr", "phys", []],
["urine", "YOO-rin", "Fluid formed by the kidneys: about 95% water plus urea, creatinine, salts and pigments (ur/o, urin/o).", "ادرار", "ur", "phys", []],
["urinometer", "yoo-rih-NOM-eh-ter", "Instrument that measures the specific gravity of urine (urin/o + -meter).", "ادرارسنج", "ur", "lab", []],
["urogram", "YOO-roh-gram", "X-ray record of the urinary tract (ur/o + -gram).", "اوروگرام", "tx", "lab", []],
["urogynecologist", "yoo-roh-gye-neh-KOL-oh-jist", "Urologist who treats urinary problems involving the female reproductive system.", "متخصص اوروژنیکولوژی", "lx", "field", []],
["urolith", "YOO-roh-lith", "A stone anywhere in the urinary tract (ur/o + -lith).", "سنگ ادراری", "dz", "dz", []],
["urologist", "yoo-ROL-oh-jist", "Physician who specializes in the urinary system and male reproductive system and performs urologic surgery.", "متخصص اورولوژی", "lx", "field", []],
["urology", "yoo-ROL-oh-jee", "Branch of medicine that diagnoses and treats disorders of the urinary system in both sexes and the male reproductive system (ur/o + -logy).", "اورولوژی", "lx", "field", []],
["uropathy", "yoo-ROP-ah-thee", "Any disease of the urinary tract (ur/o + -pathy).", "بیماری مجاری ادراری", "lx", "dz", []],
["uropenia", "yoo-roh-PEE-nee-ah", "Deficiency of urine (ur/o + -penia).", "کمبود ادرار", "ur", "sx", []],
["urostomy", "yoo-ROS-toh-mee", "Artificial opening in the abdomen through which urine leaves the body.", "اوروستومی", "tx", "tx", []],
["vesical", "VES-ih-kal", "Pertaining to the urinary bladder (vesic/o + -al); do not confuse with vesicle, a blister.", "مثانه‌ای", "lx", "body", []],
["vesicle", "VES-ih-kl", "A small sac containing liquid; a blister. Compare vesical.", "تاول، کیسه کوچک", "lx", "body", []],
["vesicocele", "VES-ih-koh-seel", "Hernia of the urinary bladder; cystocele (vesic/o + -cele).", "فتق مثانه", "tr", "dz", []],
["vesicovaginal fistula", "ves-ih-koh-VAJ-ih-nal FIS-tyoo-lah", "Abnormal passage between the bladder and vagina causing constant leakage of urine.", "فیستول مثانه-واژنی", "tr", "dz", []],
["voiding", "VOYD-ing", "Emptying the bladder; urination.", "تخلیه مثانه", "tr", "phys", []],
["voiding cystourethrography", "VOYD-ing sis-toh-yoo-ree-THROG-rah-fee", "X-ray of the bladder and urethra taken while the patient voids after contrast is put into the bladder.", "سیستواورتروگرافی حین ادرار", "tx", "lab", ["VCUG"]],
["water intoxication", "WAW-ter in-tok-sih-KAY-shun", "Excess water intake or retention that dilutes the blood sodium; hyponatremia.", "مسمومیت با آب", "dz", "dz", []]];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* نِفرا — داده واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها و دسته‌های واژه (موتور: engine/js/lexicon.js)
 * ریشه‌ها و اختصارها از Total.txt و فصل‌های PDF پیوست (Cohen، Fremgen، Gylys، Dummies و…) گردآوری و دستی پالایش شده‌اند.
 * دنیاها: lx زبان کلیه (همه واژه‌ها) • kd کلیه و نفرون • tr مثانه و دفع ادرار • ur ادرار و نشانه‌ها •
 * dz بیماری‌های ادراری • tx تشخیص و درمان */
(function (root) {
  const EA = root.EA = root.EA || {};
  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const roots = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', 'بدون، فاقد', '*'],
    ['anti-', ['anti'], 'against', 'ضد', 'tx'],
    ['dia-', ['dia'], 'through, complete', 'از میان', 'tx'],
    ['dys-', ['dys'], 'painful, difficult', 'دردناک، دشوار', 'ur'],
    ['en-', ['en'], 'in, within', 'درون', 'tr'],
    ['extra-', ['extra'], 'outside of', 'بیرون از', 'tx'],
    ['hyper-', ['hyper'], 'above, excessive', 'بیش از حد', 'ur'],
    ['hypo-', ['hypo'], 'below, deficient', 'کمتر از حد', 'ur'],
    ['in-', ['in'], 'not', 'نه، بدون', 'tr'],
    ['inter-', ['inter'], 'between', 'میان', 'lx'],
    ['intra-', ['intra'], 'within', 'درون', 'lx'],
    ['juxta-', ['juxta'], 'near', 'نزدیک', 'lx'],
    ['peri-', ['peri'], 'around', 'پیرامون', 'lx'],
    ['poly-', ['poly'], 'many, much', 'زیاد', 'ur'],
    ['post-', ['post'], 'after, behind', 'پس', 'lx'],
    ['pre-', ['pre'], 'before, in front of', 'پیش', 'lx'],
    ['retro-', ['retro'], 'backward, behind', 'پشت، رو به عقب', 'kd'],
    ['supra-', ['supra'], 'above', 'بالای', 'lx'],
    ['trans-', ['trans'], 'through, across', 'از میان', 'lx'],
    // ریشه‌های کلیه و مجاری
    ['nephr/o, ren/o', ['nephr', 'ren'], 'kidney', 'کلیه', 'lx'],
    ['glomerul/o', ['glomerul'], 'glomerulus', 'گلومرول', 'lx'],
    ['pyel/o', ['pyel'], 'renal pelvis', 'لگنچه کلیه', 'lx'],
    ['cali/o, calic/o', ['calic', 'cali'], 'calyx', 'کالیس (جام کلیه)', 'kd'],
    ['cortic/o', ['cortic'], 'cortex, outer region', 'قشر', 'kd'],
    ['medull/o', ['medull'], 'medulla, inner region', 'مغز (بخش درونی)', 'kd'],
    ['ureter/o', ['ureter'], 'ureter', 'میزنای', 'lx'],
    ['cyst/o, vesic/o', ['cyst', 'vesic'], 'urinary bladder; sac', 'مثانه؛ کیسه', 'lx'],
    ['trigon/o', ['trigon'], 'trigone', 'مثلث مثانه', 'tr'],
    ['urethr/o', ['urethr'], 'urethra', 'پیشابراه', 'lx'],
    ['meat/o', ['meat'], 'meatus, opening', 'سوراخ، دهانه', 'lx'],
    ['ur/o, urin/o', ['urin', 'ur'], 'urine, urinary tract', 'ادرار، مجاری ادراری', 'lx'],
    ['genit/o', ['genit'], 'genitals', 'اندام تناسلی', 'lx'],
    ['peritone/o', ['peritone'], 'peritoneum', 'صفاق', 'kd'],
    ['corpor/o', ['corpor'], 'body', 'بدن', 'tx'],
    ['ile/o', ['ile'], 'ileum', 'ایلئوم', 'tx'],
    // مواد ادرار و خون
    ['albumin/o', ['albumin'], 'albumin', 'آلبومین', 'ur'],
    ['azot/o', ['azot'], 'nitrogen, nitrogenous waste', 'مواد نیتروژنی', 'ur'],
    ['bacteri/o', ['bacteri'], 'bacteria', 'باکتری', 'ur'],
    ['chromat/o', ['chromat'], 'color', 'رنگ', 'ur'],
    ['dips/o', ['dips'], 'thirst', 'تشنگی', 'ur'],
    ['glyc/o, glycos/o', ['glycos', 'glyc'], 'sugar, glucose', 'قند', 'ur'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', 'خون', 'ur'],
    ['hydr/o', ['hydr'], 'water', 'آب', 'dz'],
    ['kal/i', ['kali', 'kal'], 'potassium', 'پتاسیم', 'ur'],
    ['natr/o, natri-', ['natri', 'natr'], 'sodium', 'سدیم', 'ur'],
    ['keton/o', ['keton'], 'ketones', 'کتون', 'ur'],
    ['lith/o', ['lith'], 'stone, calculus', 'سنگ', 'lx'],
    ['noct/i, noct/o', ['noct'], 'night', 'شب', 'ur'],
    ['olig/o', ['olig'], 'scanty, few', 'کم', 'ur'],
    ['protein/o', ['protein'], 'protein', 'پروتئین', 'ur'],
    ['py/o', ['py'], 'pus', 'چرک', 'ur'],
    // ریشه‌های عمومی
    ['blast/o', ['blast'], 'immature cell, germ', 'سلول نابالغ', 'dz'],
    ['carcin/o', ['carcin'], 'cancer', 'سرطان', 'dz'],
    ['iatr/o', ['iatr'], 'physician, treatment', 'پزشک، درمان', 'tx'],
    ['necr/o', ['necr'], 'death', 'مرگ (بافت)', 'dz'],
    ['neur/o', ['neur'], 'nerve', 'عصب', 'tr'],
    ['scler/o', ['scler'], 'hard', 'سخت', 'dz'],
    ['sten/o', ['sten'], 'narrow', 'تنگ', 'tr'],
    ['tox/o', ['tox'], 'poison', 'سم', 'lx'],
    ['ven/o', ['ven'], 'vein', 'سیاهرگ', 'tx'],
    // پسوندها
    ['-uria', ['uria'], 'urine condition', 'حالت ادرار', 'lx'],
    ['-uresis, -esis', ['uresis', 'esis'], 'urination', 'دفع ادرار', 'ur'],
    ['-emia', ['emia'], 'blood condition', 'حالت خون', 'ur'],
    ['-lith', ['lith'], 'stone', 'سنگ', 'lx'],
    ['-lithiasis', ['lithiasis'], 'condition of stones', 'سنگ‌داشتن', 'dz'],
    ['-iasis, -osis', ['iasis', 'osis', 'sis'], 'abnormal condition', 'حالت غیرطبیعی', '*'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-oma', ['oma'], 'tumor, mass', 'تومور، توده', '*'],
    ['-megaly', ['megaly'], 'enlargement', 'بزرگی', 'dz'],
    ['-malacia', ['malacia'], 'softening', 'نرمی', 'dz'],
    ['-ptosis', ['ptosis'], 'drooping, prolapse', 'افتادگی', 'dz'],
    ['-ectasis, -ectasia', ['ectasis', 'ectasia'], 'dilation, stretching', 'گشادی', 'tr'],
    ['-stenosis', ['stenosis'], 'narrowing', 'تنگی', 'tr'],
    ['-sclerosis', ['sclerosis'], 'hardening', 'سفتی', 'dz'],
    ['-cele', ['cele'], 'hernia, protrusion', 'فتق، بیرون‌زدگی', 'tr'],
    ['-rrhagia', ['rrhagia'], 'bursting forth of blood', 'خونریزی', 'tr'],
    ['-rrhea', ['rrhea'], 'flow, discharge', 'ترشح', 'tr'],
    ['-algia, -dynia', ['algia', 'dynia'], 'pain', 'درد', 'lx'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', 'lx'],
    ['-penia', ['penia'], 'deficiency', 'کمبود', 'ur'],
    ['-spadias', ['spadias'], 'slit, fissure', 'شکاف', 'dz'],
    ['-plasia', ['plasia'], 'formation, development', 'رشد، تشکیل', 'dz'],
    ['-genic', ['genic'], 'producing, originating', 'ایجادکننده', 'tr'],
    ['-logy', ['logy'], 'study of', 'علم، مطالعه', 'lx'],
    ['-logist', ['logist'], 'specialist', 'متخصص', 'lx'],
    ['-ectomy', ['ectomy'], 'surgical removal', 'برداشتن (جراحی)', '*'],
    ['-tomy', ['tomy'], 'incision', 'برش', '*'],
    ['-stomy', ['stomy'], 'new opening', 'ایجاد منفذ', 'tx'],
    ['-pexy', ['pexy'], 'surgical fixation', 'تثبیت (جراحی)', 'tx'],
    ['-plasty', ['plasty'], 'surgical repair', 'ترمیم جراحی', 'tx'],
    ['-rrhaphy', ['rrhaphy'], 'suture', 'بخیه', 'tx'],
    ['-tripsy', ['tripsy'], 'crushing', 'خرد کردن', 'tx'],
    ['-lysis', ['lysis'], 'separation, breakdown', 'جداسازی، تجزیه', 'tx'],
    ['-scope', ['scope'], 'instrument to view', 'ابزار دیدن', 'tx'],
    ['-scopy', ['scopy'], 'visual examination', 'مشاهده با ابزار', 'tx'],
    ['-meter', ['meter'], 'instrument to measure', 'ابزار اندازه‌گیری', 'ur'],
    ['-metry', ['metry'], 'measurement', 'اندازه‌گیری', 'tx'],
    ['-gram', ['gram'], 'record', 'ثبت، نگاره', 'tx'],
    ['-graphy', ['graphy'], 'process of recording', 'روش ثبت', 'tx'],
    ['-al, -ic, -ar, -ary, -eal, -tic, -ous', ['ary', 'eal', 'tic', 'ous', 'al', 'ic', 'ar'], 'pertaining to', 'مربوط به', '*'],
    ['-ia, -y', ['ia', 'y'], 'condition', 'حالت', '*']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['ACE', 'angiotensin-converting enzyme', 'آنزیم مبدل آنژیوتانسین', 'tx'],
    ['ACR', 'albumin/creatinine ratio', 'نسبت آلبومین به کراتینین', 'ur'],
    ['ADH', 'antidiuretic hormone', 'هورمون ضدادراری', 'kd'],
    ['AGN', 'acute glomerulonephritis', 'گلومرولونفریت حاد', 'dz'],
    ['AKI', 'acute kidney injury', 'آسیب حاد کلیه', 'dz'],
    ['ARF', 'acute renal failure', 'نارسایی حاد کلیه', 'dz'],
    ['ATN', 'acute tubular necrosis', 'نکروز حاد لوله‌ای', 'dz'],
    ['BNO', 'bladder neck obstruction', 'انسداد گردن مثانه', 'tr'],
    ['BUN', 'blood urea nitrogen', 'نیتروژن اوره خون', 'ur'],
    ['C&S', 'culture and sensitivity', 'کشت و آنتی‌بیوگرام', 'ur'],
    ['CAPD', 'continuous ambulatory peritoneal dialysis', 'دیالیز صفاقی سرپایی مداوم', 'tx'],
    ['cath', 'catheterization', 'سونداژ', 'tx'],
    ['CC', 'clean-catch urine specimen', 'نمونه ادرار میانی تمیز', 'ur'],
    ['CCPD', 'continuous cyclic peritoneal dialysis', 'دیالیز صفاقی چرخه‌ای شبانه', 'tx'],
    ['CCT', 'creatinine clearance test', 'آزمون کلیرانس کراتینین', 'ur'],
    ['CKD', 'chronic kidney disease', 'بیماری مزمن کلیه', 'dz'],
    ['Cl', 'chloride', 'کلرید', 'kd'],
    ['CMG', 'cystometrography; cystometrogram', 'سیستومتری', 'tx'],
    ['Cr', 'creatinine', 'کراتینین', 'ur'],
    ['CRF', 'chronic renal failure', 'نارسایی مزمن کلیه', 'dz'],
    ['CT', 'computed tomography', 'سی‌تی‌اسکن', 'tx'],
    ['cysto', 'cystoscopy', 'سیستوسکوپی', 'tx'],
    ['eGFR', 'estimated glomerular filtration rate', 'میزان تخمینی تصفیه گلومرولی', 'ur'],
    ['EPO', 'erythropoietin', 'اریتروپویتین', 'kd'],
    ['ESRD', 'end-stage renal disease', 'مرحله پایانی بیماری کلیه', 'dz'],
    ['ESWL', 'extracorporeal shock wave lithotripsy', 'سنگ‌شکنی برون‌اندامی', 'tx'],
    ['EU', 'excretory urography', 'اوروگرافی دفعی', 'tx'],
    ['EUD', 'external urinary drainage', 'تخلیه خارجی ادرار (سوند کاندومی)', 'tx'],
    ['GFR', 'glomerular filtration rate', 'میزان تصفیه گلومرولی', 'kd'],
    ['GU', 'genitourinary', 'ادراری-تناسلی', 'lx'],
    ['H2O', 'water', 'آب', 'kd'],
    ['HCO3', 'bicarbonate', 'بی‌کربنات', 'kd'],
    ['HD', 'hemodialysis', 'همودیالیز', 'tx'],
    ['I&O', 'intake and output', 'جذب و دفع مایعات', 'ur'],
    ['IPD', 'intermittent peritoneal dialysis', 'دیالیز صفاقی متناوب', 'tx'],
    ['IVP', 'intravenous pyelogram, pyelography', 'پیلوگرافی وریدی', 'tx'],
    ['IVU', 'intravenous urography', 'اوروگرافی وریدی', 'tx'],
    ['K', 'potassium', 'پتاسیم', 'ur'],
    ['KUB', 'kidneys, ureters, bladder', 'عکس ساده کلیه، میزنای و مثانه', 'tx'],
    ['mEq', 'milliequivalent', 'میلی‌اکی‌والان', 'ur'],
    ['mL', 'milliliter', 'میلی‌لیتر', 'ur'],
    ['Na', 'sodium', 'سدیم', 'ur'],
    ['NS', 'nephrotic syndrome', 'سندرم نفروتیک', 'dz'],
    ['PEP', 'protein electrophoresis', 'الکتروفورز پروتئین', 'ur'],
    ['pH', 'degree of acidity or alkalinity', 'درجه اسیدی یا قلیایی', 'ur'],
    ['PKD', 'polycystic kidney disease', 'بیماری کلیه پلی‌کیستیک', 'dz'],
    ['RBC', 'red blood cell', 'گلبول قرمز', 'ur'],
    ['RP', 'retrograde pyelogram, pyelography', 'پیلوگرافی رتروگراد', 'tx'],
    ['SG, sp. gr.', 'specific gravity', 'وزن مخصوص', 'ur'],
    ['Tm', 'maximal transport capacity (tubular maximum)', 'حداکثر ظرفیت انتقال لوله‌ای', 'kd'],
    ['TURP', 'transurethral resection of the prostate', 'برداشتن پروستات از راه پیشابراه', 'tx'],
    ['UA, U/A', 'urinalysis', 'آزمایش ادرار', 'ur'],
    ['UC', 'urine culture', 'کشت ادرار', 'ur'],
    ['US', 'ultrasound, ultrasonography', 'سونوگرافی', 'tx'],
    ['UTI', 'urinary tract infection', 'عفونت ادراری', 'dz'],
    ['VCG', 'voiding cystogram', 'سیستوگرام حین ادرار', 'tx'],
    ['VCUG', 'voiding cystourethrography', 'سیستواورتروگرافی حین ادرار', 'tx'],
    ['WBC', 'white blood cell', 'گلبول سفید', 'ur'],
    ['y/o', 'years old', 'ساله', 'lx']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'body', icon: '🫘', name: 'ساختارهای کلیه و مجاری' },
    { id: 'phys', icon: '🔁', name: 'ساخت ادرار و تعادل مایعات' },
    { id: 'field', icon: '🎓', name: 'رشته‌ها و متخصصان' },
    { id: 'dz', icon: '🩺', name: 'بیماری‌ها' },
    { id: 'sx', icon: '🔍', name: 'نشانه‌ها و یافته‌ها' },
    { id: 'lab', icon: '🧪', name: 'آزمایش و تصویربرداری' },
    { id: 'tx', icon: '💊', name: 'درمان، دارو و جراحی' }
  ];
  const main = { phys: 'Anatomy_and_Physiology' };
  EA.LEX_DATA = { roots, abbr, cats, main, worlds: ['lx', 'kd', 'tr', 'ur', 'dz', 'tx'], base: 'lx' };
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
/* نِفرا — شکل‌های آموزشی دستگاه ادراری (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با الگوی هورمونا و اپ‌های قبلی: زمینه سفید کارت، بافت‌ها با گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی زیر آن)،
 * پیکان‌ها و خط‌های راهنمای خاکستری گرد. پالت: زرشکی کلیه، صورتی-نارنجی قشر، هرم‌های تیره مغز، زرد کهربایی لگنچه و ادرار،
 * صورتی مثانه، قرمز سرخرگ و آبی سیاهرگ، قهوه‌ای سنگ‌ها. همه شکل‌ها شماتیک و آموزشی‌اند.
 * EA.art(کلید) ← رشته SVG؛ EA.ART_KEYS فهرست کلیدهاست (آزمون‌ها بررسی می‌کنند). */
(function (root) {
  const EA = root.EA = root.EA || {};
  let UID = 0;
  const FONT_EN = 'Nunito, Vazirmatn, system-ui, sans-serif', FONT_FA = 'Vazirmatn, Tahoma, sans-serif';
  const INK = '#2b2b2b', MUTED = '#6f7a80', LINE = '#5b6b73';
  /* پالت بافت‌ها */
  const C = {
    kid: '#c8574f', kidLine: '#8e2f2a', cortex: '#ec9a8f', cortexLine: '#b8433c', pyr: '#b8433c', pyrLine: '#8e2f2a',
    pel: '#f3d98c', pelLine: '#c9a64a', urine: '#f2c94c', urineLine: '#c9a12c', bl: '#f2b3a6', blLine: '#c26a5c', lumen: '#fde4dc',
    muscle: '#d9665a', art: '#d9443a', artLine: '#9c2a23', vein: '#3b6fd4', veinLine: '#24479a', tube: '#f6dc8f', tubeLine: '#c9a64a',
    skin: '#f6d2b8', skinLine: '#d9a988', stone: '#b08a5a', stoneLine: '#6f522c', pus: '#f3d36b', fluid: '#d9effa', fluidLine: '#6db4d6',
    bone: '#f3e4c4', boneLine: '#c4a46c', adr: '#f2c94c', adrLine: '#c9a12c', green: '#3f8a05', red: '#d9443a', blue: '#3b6fd4', spark: '#ffc800'
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
    return `<g fill="${p.fill || C.skin}" stroke="${p.line || C.skinLine}" stroke-width="1.3"${p.op ? ` opacity="${p.op}"` : ''}>${head}${body}</g>`;
  }

  /* ---------- اجزای پایه ---------- */
  /* کلیه لوبیایی در مختصات محلی: ارتفاع ۱۲۰، پهنا ۸۴، ناف (hilum) رو به +x در (22, 0) */
  const KPATH = 'M-6 -60 C26 -64 40 -40 38 -18 C36 -8 24 -6 22 0 C24 6 36 8 38 18 C40 40 26 64 -6 60 C-34 56 -44 28 -44 0 C-44 -28 -34 -56 -6 -60Z';
  /** تبدیل مختصات محلی به کل شکل؛ flip یعنی ناف رو به چپ */
  const tf = (cx, cy, s, flip) => (x, y) => [+(cx + (flip ? -1 : 1) * x * s).toFixed(1), +(cy + y * s).toFixed(1)];
  const grp = (cx, cy, s, flip, inner) => `<g transform="translate(${cx} ${cy}) scale(${flip ? -s : s} ${s})">${inner}</g>`;
  /** لوله با حاشیه: دو خط روی هم */
  const tube = (d, fill, line, w) => `<path d="${d}" stroke="${line}" stroke-width="${w + 2.4}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="${fill}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  /** کلیه از بیرون: o.vessels سرخرگ و سیاهرگ، o.ureter طول میزنای (محلی)، o.fill رنگ، o.big بزرگ‌شده، o.adrenal غده فوق‌کلیوی */
  function kidney(cx, cy, s, o) {
    const p = o || {}, g = nid(), P = tf(cx, cy, s, p.flip);
    const sw = (2 / s).toFixed(2);
    let inner = '';
    if (p.adrenal) inner += `<path d="M-30 -56 C-26 -78 2 -84 16 -66 C6 -62 -14 -58 -30 -56Z" fill="${C.adr}" stroke="${C.adrLine}" stroke-width="${sw}"/>`;
    if (p.ureter) inner += tube(`M24 4 C40 12 34 36 34 ${60 + p.ureter}`, C.tube, C.tubeLine, 6);
    if (p.vessels) inner += tube('M22 -8 L66 -14', C.art, C.artLine, 6) + tube('M22 -1 L66 0', C.vein, C.veinLine, 7);
    inner += `<path d="${KPATH}" fill="url(#${g})" stroke="${p.line || C.kidLine}" stroke-width="${sw}"/><path d="M-32 -34 C-38 -18 -38 2 -34 16" stroke="#fff" stroke-width="${(5 / s * s).toFixed(1)}" fill="none" stroke-linecap="round" opacity=".35"/>`;
    const defs = `<radialGradient id="${g}" cx="40%" cy="38%" r="70%"><stop offset="0" stop-color="${p.fill2 || '#e07a70'}"/><stop offset="1" stop-color="${p.fill || C.kid}"/></radialGradient>`;
    return { svg: `<defs>${defs}</defs>` + grp(cx, cy, s, p.flip, inner), P: { hilum: P(22, 0), top: P(-6, -60), bottom: P(-6, 60), lateral: P(-44, 0), ureter: P(34, 60 + (p.ureter || 0)), ureterMid: P(36, 36), artery: P(54, -12), vein: P(54, -1), adrenal: P(-8, -70), at: P } };
  }
  /** برش طولی کلیه: قشر، هرم‌ها، کالیس‌ها، لگنچه، ناف، میزنای و رگ‌ها */
  function kidneySection(cx, cy, s, o) {
    const p = o || {}, P = tf(cx, cy, s, p.flip), sw = (1.6 / s).toFixed(2);
    const rad = d => d * Math.PI / 180;
    const E = (cx0, rx, ry, a) => [cx0 + rx * Math.cos(rad(a)), ry * Math.sin(rad(a))];
    const ANG = [-98, -132, -166, 166, 132, 98];
    let pyr = '', cal = '';
    const apex = [];
    ANG.forEach(a => {
      const b1 = E(-4, 36, 52, a - 14), b2 = E(-4, 36, 52, a + 14), ap = E(6, 13, 21, a);
      apex.push(ap);
      pyr += `<path d="M${b1[0].toFixed(1)} ${b1[1].toFixed(1)} Q${E(-4, 38, 54, a)[0].toFixed(1)} ${E(-4, 38, 54, a)[1].toFixed(1)} ${b2[0].toFixed(1)} ${b2[1].toFixed(1)} L${ap[0].toFixed(1)} ${ap[1].toFixed(1)} Z" fill="${p.pyr || C.pyr}" stroke="${C.pyrLine}" stroke-width="${sw}"/>`;
      for (let k = -1; k <= 1; k++) { const q = E(-4, 34, 50, a + k * 7); pyr += `<path d="M${q[0].toFixed(1)} ${q[1].toFixed(1)} L${ap[0].toFixed(1)} ${ap[1].toFixed(1)}" stroke="#fff" stroke-opacity=".28" stroke-width="${(0.8 / s).toFixed(2)}"/>`; }
      cal += `<path d="M${ap[0].toFixed(1)} ${ap[1].toFixed(1)} L16 2" stroke="${C.pelLine}" stroke-width="9" stroke-linecap="round"/>`;
    });
    let calF = '';
    apex.forEach(ap => { calF += `<path d="M${ap[0].toFixed(1)} ${ap[1].toFixed(1)} L16 2" stroke="${p.pel || C.pel}" stroke-width="6.6" stroke-linecap="round"/><circle cx="${ap[0].toFixed(1)}" cy="${ap[1].toFixed(1)}" r="4.6" fill="${p.pel || C.pel}" stroke="${C.pelLine}" stroke-width="${sw}"/>`; });
    const pelvis = `<path d="M8 -12 C18 -12 22 -6 32 -4 L32 9 C22 11 18 16 8 16 C12 8 12 -4 8 -12Z" fill="${p.pel || C.pel}" stroke="${C.pelLine}" stroke-width="${sw}"/>`;
    const ureter = tube(`M30 4 C44 10 38 36 38 ${70 + (p.ureter || 0)}`, p.pel || C.pel, C.pelLine, 6.4);
    const vessels = p.vessels === false ? '' : tube('M22 -10 L70 -18', C.art, C.artLine, 5.4) + tube('M22 -3 L70 -6', C.vein, C.veinLine, 6.4);
    const extra = p.extra || '';
    const inner = `${ureter}<path d="${KPATH}" fill="${p.cortex || C.cortex}" stroke="${C.kidLine}" stroke-width="${(2.2 / s).toFixed(2)}"/>${pyr}${cal}${calF}${pelvis}${vessels}${extra}`;
    const mid = a => { const q = E(-4, 25, 37, a); return P(q[0], q[1]); };
    return { svg: grp(cx, cy, s, p.flip, inner), P: { cortex: P(-38, -26), capsule: P(-43, 14), pyramid: mid(-166), pyramid2: mid(132), papilla: P(apex[3][0], apex[3][1]), calyx: P(apex[4][0], apex[4][1]), calyx2: P(apex[1][0], apex[1][1]), pelvis: P(20, 4), hilum: P(24, 12), ureter: P(38, 50), artery: P(52, -15), vein: P(52, -5), at: P, apex: apex.map(a => P(a[0], a[1])) } };
  }
  /** مثانه برش روبه‌رو: دیواره عضلانی، حفره، دهانه میزنای‌ها، مثلث، گردن، اسفنکترها و پیشابراه. مبدأ = مرکز حفره */
  function bladder(cx, cy, s, o) {
    const p = o || {}, P = tf(cx, cy, s, false), sw = (1.6 / s).toFixed(2);
    const wall = 'M-66 -34 C-68 -84 68 -84 66 -34 C68 2 46 30 16 42 L11 58 L-11 58 L-16 42 C-46 30 -68 2 -66 -34Z';
    const lum = 'M-54 -32 C-56 -70 56 -70 54 -32 C56 -4 38 20 12 30 L0 36 L-12 30 C-38 20 -56 -4 -54 -32Z';
    const ur = x => tube(`M${x * 1.6} -118 C${x * 1.45} -90 ${x * 1.1} -64 ${x * 0.78} -40 L${x * 0.44} 6`, C.tube, C.tubeLine, 6);
    let inner = (p.noUreters ? '' : ur(-30) + ur(30));
    inner += `<path d="${wall}" fill="${p.wall || C.muscle}" stroke="${C.blLine}" stroke-width="${sw}"/>`;
    inner += `<path d="${lum}" fill="${p.lumen || C.lumen}" stroke="${C.blLine}" stroke-width="${(1 / s).toFixed(2)}"/>`;
    if (p.rugae !== false) inner += [-36, -16, 8, 30].map(x => `<path d="M${x - 6} -52 q6 10 0 20 q-6 10 0 20" stroke="${C.blLine}" stroke-opacity=".35" stroke-width="${(1.2 / s).toFixed(2)}" fill="none"/>`).join('');
    if (p.urine) inner += `<path d="M-54 ${p.urine} L54 ${p.urine} C56 -4 38 20 12 30 L0 36 L-12 30 C-38 20 -56 -4 -54 ${p.urine}Z" fill="${C.urine}" opacity=".55"/>`;
    inner += `<path d="M-24 10 L24 10 L0 36Z" fill="#f7c9bd" stroke="${C.blLine}" stroke-dasharray="3 2" stroke-width="${(1 / s).toFixed(2)}"/>`;
    inner += `<ellipse cx="-24" cy="10" rx="4" ry="2.6" fill="#7a2d26"/><ellipse cx="24" cy="10" rx="4" ry="2.6" fill="#7a2d26"/>`;
    inner += tube('M0 36 L0 108', C.tube, C.tubeLine, 7);
    inner += `<rect x="-14" y="50" width="28" height="9" rx="4" fill="#b8433c" opacity=".85"/><rect x="-16" y="80" width="32" height="10" rx="4" fill="#8e2f2a" opacity=".85"/>`;
    return { svg: grp(cx, cy, s, false, inner), P: { wall: P(-62, -10), lumen: P(-30, -20), detrusor: P(56, -48), orifice: P(24, 10), orificeL: P(-24, 10), trigone: P(0, 22), neck: P(0, 46), internal: P(12, 54), external: P(14, 85), urethra: P(0, 100), ureterL: P(-44, -96), ureterR: P(44, -96), meatus: P(0, 108), at: P } };
  }
  /** سنگ نامنظم قهوه‌ای */
  function stone(x, y, r, seed) {
    const R = rng(seed || 3); let d = '';
    for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2, rr = r * (0.72 + R() * 0.4); d += (i ? 'L' : 'M') + (x + rr * Math.cos(a)).toFixed(1) + ' ' + (y + rr * Math.sin(a)).toFixed(1); }
    return `<path d="${d}Z" fill="${C.stone}" stroke="${C.stoneLine}" stroke-width="1.2"/><circle cx="${(x - r * 0.25).toFixed(1)}" cy="${(y - r * 0.3).toFixed(1)}" r="${(r * 0.22).toFixed(1)}" fill="#fff" opacity=".35"/>`;
  }
  /** کلاف مویرگی گلومرول */
  function glom(x, y, r, c, seed) {
    const R = rng(seed || 11); let d = `M${x - r} ${y}`;
    for (let i = 0; i < 14; i++) d += ` Q${(x + (R() - 0.5) * r * 2.2).toFixed(1)} ${(y + (R() - 0.5) * r * 2.2).toFixed(1)} ${(x + (R() - 0.5) * r * 1.6).toFixed(1)} ${(y + (R() - 0.5) * r * 1.6).toFixed(1)}`;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#f7c2b8"/><path d="${d}" stroke="${c || C.art}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  }
  /** نفرون شماتیک بزرگ؛ مبدأ (x, y) گوشه بالا-چپ، o.labels نقاط را برمی‌گرداند */
  function nephron(x, y, s, o) {
    const p = o || {}, k = s || 1, X = d => +(x + d * k).toFixed(1), Y = d => +(y + d * k).toFixed(1);
    const pcT = `M${X(66)} ${Y(56)} C${X(82)} ${Y(70)} ${X(98)} ${Y(40)} ${X(112)} ${Y(56)} C${X(126)} ${Y(72)} ${X(96)} ${Y(86)} ${X(112)} ${Y(98)} C${X(124)} ${Y(106)} ${X(132)} ${Y(96)} ${X(134)} ${Y(110)}`;
    const loop = `M${X(134)} ${Y(110)} L${X(134)} ${Y(232)} C${X(134)} ${Y(258)} ${X(166)} ${Y(258)} ${X(166)} ${Y(232)} L${X(166)} ${Y(112)}`;
    const dcT = `M${X(166)} ${Y(112)} C${X(168)} ${Y(92)} ${X(150)} ${Y(84)} ${X(160)} ${Y(66)} C${X(170)} ${Y(50)} ${X(190)} ${Y(66)} ${X(196)} ${Y(50)} C${X(202)} ${Y(36)} ${X(214)} ${Y(36)} ${X(224)} ${Y(40)}`;
    const cd = `M${X(224)} ${Y(14)} L${X(224)} ${Y(276)}`;
    const w = 8 * k;
    let g = '';
    if (p.capillaries !== false) {
      g += `<path d="M${X(122)} ${Y(124)} C${X(110)} ${Y(170)} ${X(124)} ${Y(210)} ${X(150)} ${Y(266)} C${X(176)} ${Y(210)} ${X(186)} ${Y(170)} ${X(176)} ${Y(124)}" stroke="#e98b80" stroke-width="${2 * k}" fill="none"/>`;
      g += `<path d="M${X(116)} ${Y(140)} C${X(104)} ${Y(186)} ${X(122)} ${Y(226)} ${X(150)} ${Y(276)} C${X(180)} ${Y(226)} ${X(192)} ${Y(186)} ${X(182)} ${Y(140)}" stroke="#8fa9e6" stroke-width="${2 * k}" fill="none"/>`;
    }
    g += tube(`M${X(2)} ${Y(30)} C${X(20)} ${Y(30)} ${X(26)} ${Y(36)} ${X(36)} ${Y(40)}`, C.art, C.artLine, 5 * k);
    g += tube(`M${X(36)} ${Y(56)} C${X(26)} ${Y(62)} ${X(18)} ${Y(70)} ${X(2)} ${Y(70)}`, '#e5675c', C.artLine, 4 * k);
    g += `<circle cx="${X(48)}" cy="${Y(48)}" r="${21 * k}" fill="${C.tube}" stroke="${C.tubeLine}" stroke-width="1.6"/><circle cx="${X(48)}" cy="${Y(48)}" r="${15 * k}" fill="#fff8e6"/>`;
    g += glom(X(48), Y(48), 12 * k, C.art, 5);
    g += tube(pcT, C.tube, C.tubeLine, w) + tube(loop, C.tube, C.tubeLine, w) + tube(dcT, C.tube, C.tubeLine, w) + tube(cd, '#f3cf6e', C.tubeLine, w + 2);
    return { svg: g, P: { glom: [X(48), Y(48)], capsule: [X(34), Y(30)], afferent: [X(14), Y(31)], efferent: [X(14), Y(69)], pct: [X(112), Y(56)], desc: [X(134), Y(180)], asc: [X(166), Y(180)], loop: [X(150), Y(250)], dct: [X(196), Y(50)], cd: [X(224), Y(200)], cap: [X(120), Y(170)], X, Y } };
  }

  const A = {};

  /* ================= lx: زبان کلیه ================= */
  A['system-overview'] = () => {
    const sh = nid();
    const kL = kidney(142, 108, 0.42, { ureter: 0 }), kR = kidney(218, 102, 0.42, { flip: true, ureter: 0, fill2: '#e58a80' });
    const urL = tube('M156 116 C160 150 166 184 172 214', C.tube, C.tubeLine, 3.6), urR = tube('M204 110 C200 150 194 184 188 214', C.tube, C.tubeLine, 3.6);
    const bl = `<path d="M160 212 C158 196 202 196 200 212 C202 230 190 240 180 242 C170 240 158 230 160 212Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.4"/>`;
    const ure = tube('M180 242 L180 262', C.tube, C.tubeLine, 3);
    return svg(360, 300, `${title('دستگاه ادراری: دو کلیه، دو میزنای، یک مثانه، یک پیشابراه')}
      ${mannequin(180, 30, 1.02, { op: 0.55 })}
      ${tube('M180 70 L180 230', '#e8a39b', '#c97b72', 5)}
      <g filter="url(#${sh})">${urL}${urR}${kL.svg}${kR.svg}${bl}${ure}</g>
      ${pin(124, 102, 70, 84)}${lab(46, 66, 'kidney', 'کلیه', { size: 10.5 })}
      ${pin(166, 168, 76, 168)}${lab(46, 150, 'ureter', 'میزنای', { size: 10.5 })}
      ${pin(196, 222, 286, 206)}${lab(314, 188, 'urinary bladder', 'مثانه', { size: 10.5 })}
      ${pin(181, 256, 286, 262)}${lab(314, 248, 'urethra', 'پیشابراه', { size: 10.5 })}
      ${pin(236, 98, 286, 86)}${lab(314, 70, 'renal = nephric', 'کلیوی', { size: 10 })}
      ${f(180, 292, 'کلیه‌ها ادرار می‌سازند؛ بقیه فقط آن را می‌برند، نگه می‌دارند و بیرون می‌ریزند', { size: 9, fill: INK, w: 700 })}`, 'دستگاه ادراری', shadow(sh));
  };

  A['urine-flow'] = () => {
    const m = nid(), sh = nid();
    const box = (x, ic, en, fa, job, c) => `<g filter="url(#${sh})"><rect x="${x}" y="52" width="74" height="132" rx="14" fill="${c}"/></g>${ic}${lab(x + 37, 136, en, fa, { size: 10 })}${f(x + 37, 168, job, { size: 8.4, fill: INK, w: 700 })}`;
    const k = kidney(46, 92, 0.3, {}).svg;
    const u = tube('M128 70 C120 90 136 104 128 124', C.tube, C.tubeLine, 6);
    const b = `<path d="M196 104 C194 80 238 80 236 104 C238 120 226 128 216 130 C206 128 194 120 196 104Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.4"/><path d="M200 104 L232 104 C232 118 222 124 216 125 C210 124 200 118 200 104Z" fill="${C.urine}" opacity=".6"/>`;
    const r = tube('M302 70 L302 124', C.tube, C.tubeLine, 6);
    return svg(360, 236, `${title('مسیر ادرار از ساخت تا بیرون')}
      ${box(9, k, 'kidneys', 'کلیه‌ها', 'تصفیه خون و ساخت ادرار', '#fbe3df')}${box(97, u, 'ureters', 'میزنای‌ها', 'بردن ادرار به مثانه', '#fdf1d5')}
      ${box(181, b, 'bladder', 'مثانه', 'ذخیره ادرار', '#fde6ec')}${box(265, r, 'urethra', 'پیشابراه', 'بیرون ریختن ادرار', '#e6f2fb')}
      ${arrow(m, 84, 118, 95, 118, C.urineLine, 2.4)}${arrow(m, 172, 118, 179, 118, C.urineLine, 2.4)}${arrow(m, 256, 118, 263, 118, C.urineLine, 2.4)}
      ${f(180, 210, 'ureter با دو حرف e دو تاست؛ urethra با یک e یکی است', { size: 9.5, fill: INK, w: 800 })}
      ${f(180, 228, 'ادرار کردن: urination، voiding یا micturition', { size: 9, fill: MUTED })}`, 'مسیر ادرار', marker(m, C.urineLine) + shadow(sh));
  };

  A['wordparts'] = () => {
    const m = nid();
    const piece = (x, w, en, kind, fa, bg, c) => `<rect x="${x}" y="58" width="${w}" height="44" rx="10" fill="${bg}"/>${t(x + w / 2, 86, en, { size: 15, w: 900, fill: c })}<path d="M${x + 4} 112 H${x + w - 4}" stroke="${c}" stroke-width="2"/><path d="M${x + 4} 108 V112 M${x + w - 4} 108 V112" stroke="${c}" stroke-width="2"/>${lab(x + w / 2, 128, kind, fa, { size: 9, fill: c })}`;
    return svg(360, 214, `${title('یک واژه، سه قطعه: pyelonephritis')}
      ${piece(18, 92, 'pyel/o', 'root', 'ریشه: لگنچه', '#fdf1d5', '#a8801f')}${piece(118, 100, 'nephr', 'root', 'ریشه: کلیه', '#fbe3df', '#b0413e')}${piece(226, 116, '-itis', 'suffix', 'پسوند: التهاب', '#e7f5dd', '#3f8a05')}
      ${t(114, 86, '+', { size: 16, w: 900, fill: MUTED })}${t(222, 86, '+', { size: 16, w: 900, fill: MUTED })}
      ${curve(m, 'M284 160 C230 190 120 190 64 162', '#c0563b', 1.8, true)}
      ${f(180, 196, 'معنی را از پسوند بخوان، بعد ریشه‌ها از اول: التهاب لگنچه و کلیه', { size: 9.5, fill: INK, w: 800 })}
      ${f(180, 42, 'واکه رابط o پیش از پسوندی که با حرف صدادار شروع شود حذف می‌شود', { size: 8.6 })}`, 'قطعه‌های واژه', marker(m, '#c0563b'));
  };

  A['root-map'] = () => {
    const ks = kidneySection(96, 118, 0.95, { ureter: 12 });
    const P = ks.P, bl = bladder(258, 168, 0.56, { noUreters: true });
    const B = bl.P;
    return svg(360, 280, `${title('نقشه ریشه‌ها: کلیه تا پیشابراه')}
      ${ks.svg}${tube(`M${P.ureter[0]} ${P.ureter[1] + 30} C150 210 196 120 ${B.ureterL[0] + 6} ${B.ureterL[1] + 50}`, C.pel, C.pelLine, 5)}${bl.svg}
      ${pin(P.cortex[0], P.cortex[1], 18, 40)}${lab(30, 34, 'nephr/o, ren/o', 'کلیه', { size: 9.5, anchor: 'start' })}
      ${pin(P.calyx2[0], P.calyx2[1], 128, 42)}${lab(150, 36, 'cali/o, calic/o', 'کالیس', { size: 9.5, anchor: 'start' })}
      ${pin(P.pelvis[0], P.pelvis[1], 176, 82)}${lab(184, 78, 'pyel/o', 'لگنچه', { size: 9.5, anchor: 'start' })}
      ${pin(P.ureter[0] + 2, P.ureter[1] + 18, 74, 238)}${lab(20, 232, 'ureter/o', 'میزنای', { size: 9.5, anchor: 'start' })}
      ${pin(B.lumen[0], B.lumen[1], 300, 96)}${lab(256, 66, 'cyst/o, vesic/o', 'مثانه', { size: 9.5, anchor: 'start' })}
      ${pin(B.trigone[0], B.trigone[1], 318, 170)}${lab(300, 186, 'trigon/o', 'مثلث مثانه', { size: 9.5, anchor: 'start' })}
      ${pin(B.urethra[0], B.urethra[1] - 4, 210, 228)}${lab(172, 222, 'urethr/o', 'پیشابراه', { size: 9.5, anchor: 'start' })}
      ${pin(B.meatus[0], B.meatus[1], 300, 244)}${lab(292, 258, 'meat/o', 'سوراخ پیشابراه', { size: 9.5, anchor: 'start' })}`, 'نقشه ریشه‌ها');
  };

  A['twins'] = () => {
    const row = (y, a, af, b, bf, bg) => `<rect x="10" y="${y}" width="340" height="44" rx="12" fill="${bg}"/>${lab(96, y + 19, a, af, { size: 10.5 })}<circle cx="180" cy="${y + 22}" r="11" fill="#3a3a3a"/>${t(180, y + 26, 'vs', { size: 9, w: 900, fill: '#fff' })}${lab(264, y + 19, b, bf, { size: 10.5 })}`;
    return svg(360, 296, `${title('دام‌های همزاد دستگاه ادراری')}
      ${row(30, 'ureter (×2)', 'میزنای: کلیه تا مثانه', 'urethra (×1)', 'پیشابراه: مثانه تا بیرون', '#fdf1d5')}
      ${row(80, 'vesical', 'مثانه‌ای (صفت)', 'vesicle', 'تاول (اسم)', '#fbe3df')}
      ${row(130, 'creatinine', 'کراتینین: مواد زائد', 'creatine', 'کراتین: در عضله', '#e6f2fb')}
      ${row(180, 'enuresis', 'شب‌ادراری', 'anuresis', 'ادرار نکردن', '#efe7fb')}
      ${row(230, 'cyst/o', 'مثانه؛ کیسه', 'cyt/o', 'سلول', '#e7f5dd')}
      ${f(180, 288, 'ureter/o (میزنای) را با uter/o (رحم) هم اشتباه نگیر', { size: 9, fill: INK, w: 700 })}`, 'دام‌های همزاد');
  };

  A['position-prefixes'] = () => {
    const m = nid(), k1 = kidney(130, 150, 0.6, { adrenal: true }), k2 = kidney(250, 150, 0.6, { flip: true, adrenal: true });
    return svg(360, 280, `${title('پیشوندهای جا: کجای کلیه؟')}
      <ellipse cx="128" cy="150" rx="46" ry="54" fill="none" stroke="#3b6fd4" stroke-width="1.6" stroke-dasharray="5 4"/>
      ${k1.svg}${k2.svg}
      ${pin(k1.P.adrenal[0], k1.P.adrenal[1], 70, 62)}${lab(54, 42, 'supra-renal', 'بالای کلیه (غده فوق‌کلیوی)', { size: 9.5 })}
      ${pin(84, 168, 46, 206)}${lab(46, 222, 'peri-renal', 'پیرامون کلیه', { size: 9.5, fill: '#24479a' })}
      ${pin(126, 150, 112, 222)}${lab(112, 236, 'intra-renal', 'درون کلیه', { size: 9.5 })}
      ${arrow(m, 168, 150, 206, 150, '#c0563b', 2)}${arrow(m, 206, 150, 168, 150, '#c0563b', 2)}${lab(188, 106, 'inter-renal', 'میان دو کلیه', { size: 9.5, fill: '#c0563b' })}
      ${lab(262, 236, 'pre- / post-', 'جلوی / پشت کلیه', { size: 9.5 })}
      ${f(180, 272, 'پیشوند جا را می‌گوید و ren/o + ‎-al‎ می‌گوید «کلیوی»', { size: 9, fill: INK, w: 700 })}`, 'پیشوندهای جا', marker(m, '#c0563b'));
  };

  A['uria-family'] = () => {
    const items = [['an-', 'anuria', 'بی‌ادراری'], ['olig/o', 'oliguria', 'کم‌ادراری'], ['poly-', 'polyuria', 'پرادراری'], ['noct/i', 'nocturia', 'ادرار شبانه'],
      ['dys-', 'dysuria', 'ادرار دردناک'], ['hemat/o', 'hematuria', 'خون در ادرار'], ['py/o', 'pyuria', 'چرک در ادرار'], ['glycos/o', 'glycosuria', 'قند در ادرار']];
    let g = '';
    items.forEach((it, i) => {
      const a = -Math.PI / 2 + i * Math.PI / 4, x = 180 + Math.cos(a) * 112, y = 152 + Math.sin(a) * 92;
      g += `<path d="M${(180 + Math.cos(a) * 40).toFixed(1)} ${(152 + Math.sin(a) * 34).toFixed(1)} L${(180 + Math.cos(a) * 76).toFixed(1)} ${(152 + Math.sin(a) * 64).toFixed(1)}" stroke="${C.urineLine}" stroke-width="1.6"/>`;
      g += `<rect x="${(x - 48).toFixed(1)}" y="${(y - 22).toFixed(1)}" width="96" height="44" rx="11" fill="#fdf6e1" stroke="#ecd9a0"/>${t(x, y - 6, it[1], { size: 10, w: 900 })}${f(x, y + 9, it[2], { size: 8.8, fill: INK })}${t(x, y + 19, it[0], { size: 7.5, fill: '#a8801f', w: 800 })}`;
    });
    return svg(360, 300, `${title('خانواده ‎-uria‎: حالت ادرار')}
      <ellipse cx="180" cy="152" rx="40" ry="34" fill="${C.urine}" stroke="${C.urineLine}" stroke-width="2"/>${t(180, 150, '-uria', { size: 15, w: 900 })}${f(180, 166, 'حالت ادرار', { size: 9, fill: INK, w: 800 })}
      ${g}`, 'خانواده uria');
  };

  A['specialists'] = () => {
    const sh = nid(), k = kidney(92, 112, 0.42, { vessels: true }).svg, b = bladder(268, 116, 0.42, {}).svg;
    return svg(360, 252, `${title('دو متخصص: کلیه یا مجاری ادراری؟')}
      <g filter="url(#${sh})"><rect x="10" y="32" width="164" height="190" rx="16" fill="#fbe3df"/><rect x="186" y="32" width="164" height="190" rx="16" fill="#e6f2fb"/></g>
      ${k}${b}
      ${lab(92, 176, 'nephrologist', 'متخصص کلیه (داخلی)', { size: 10.5 })}${f(92, 206, 'نارسایی کلیه، دیالیز، پیوند', { size: 8.6, fill: INK })}
      ${lab(268, 176, 'urologist', 'جراح مجاری ادراری', { size: 10.5 })}${f(268, 206, 'سنگ، مثانه، پروستات، جراحی', { size: 8.6, fill: INK })}
      ${f(180, 244, 'nephr/o + ‎-logist‎ و ur/o + ‎-logist‎', { size: 9, fill: MUTED, w: 700 })}`, 'متخصصان', shadow(sh));
  };

  /* ================= kd: کلیه و نفرون ================= */
  A['kidney-location'] = () => {
    const sh = nid(), R = rng(9);
    let gut = '';
    for (let i = 0; i < 9; i++) { const x = 130 + R() * 100, y = 84 + R() * 54; gut += `<ellipse cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" rx="${(14 + R() * 8).toFixed(0)}" ry="${(9 + R() * 5).toFixed(0)}" fill="#f6c9b8" stroke="#d99a86" stroke-width="1"/>`; }
    const kL = kidney(112, 176, 0.36, { flip: true }), kR = kidney(248, 176, 0.36, {});
    return svg(360, 280, `${title('جای کلیه‌ها: پشت صفاق، در برش عرضی شکم')}
      <g filter="url(#${sh})"><ellipse cx="180" cy="148" rx="150" ry="104" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.6"/></g>
      <ellipse cx="180" cy="146" rx="140" ry="94" fill="#fbe3d6"/>
      <path d="M60 156 C70 92 120 56 180 56 C240 56 290 92 300 156 C270 150 240 152 216 160 C200 166 160 166 144 160 C120 152 90 150 60 156Z" fill="#fff6ef" stroke="#3b6fd4" stroke-width="1.6" stroke-dasharray="5 4"/>
      ${gut}
      <rect x="160" y="190" width="40" height="34" rx="8" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.5"/><path d="M180 224 L180 246" stroke="${C.boneLine}" stroke-width="6"/>
      <ellipse cx="180" cy="168" rx="9" ry="9" fill="${C.art}"/><ellipse cx="204" cy="170" rx="11" ry="9" fill="${C.vein}"/>
      ${kL.svg}${kR.svg}
      ${pin(250, 168, 300, 216)}${lab(318, 230, 'kidney', 'کلیه', { size: 10 })}
      ${pin(180, 236, 180, 262)}${t(220, 262, 'vertebra', { size: 9.5, w: 800 })}${f(220, 274, 'مهره', { size: 8.5 })}
      ${pin(270, 98, 306, 60)}${lab(320, 44, 'peritoneum', 'صفاق', { size: 9.5 })}
      ${f(180, 74, 'حفره صفاقی (روده‌ها)', { size: 9, fill: INK, w: 800 })}
      ${pin(98, 190, 50, 232)}${lab(56, 246, 'retroperitoneal', 'پشت صفاق', { size: 9.5, fill: '#24479a' })}
      ${t(180, 46, 'anterior • جلو', { size: 8.5, fill: MUTED })}${t(110, 270, 'posterior • پشت', { size: 8.5, fill: MUTED })}`, 'جای کلیه‌ها', shadow(sh));
  };

  A['kidney-section-art'] = () => {
    const k = kidneySection(150, 150, 1.65, {}), P = k.P;
    return svg(360, 290, `${title('برش طولی کلیه')}
      ${k.svg}
      ${pin(P.capsule[0], P.capsule[1], 30, 214)}${lab(40, 228, 'renal capsule', 'کپسول کلیه', { size: 9.5 })}
      ${pin(P.cortex[0], P.cortex[1], 78, 46)}${lab(48, 40, 'renal cortex', 'قشر', { size: 9.5 })}
      ${pin(P.pyramid[0], P.pyramid[1], 64, 118)}${lab(34, 112, 'medulla', 'مغز کلیه', { size: 9.5 })}
      ${pin(P.pyramid2[0], P.pyramid2[1], 130, 266)}${lab(80, 264, 'renal pyramid', 'هرم', { size: 9.5 })}
      ${pin(P.papilla[0], P.papilla[1], 196, 262)}${lab(202, 262, 'papilla', 'پاپی', { size: 9.5, anchor: 'start' })}
      ${pin(P.calyx2[0], P.calyx2[1], 196, 48)}${lab(202, 40, 'calyx', 'کالیس (جام)', { size: 9.5, anchor: 'start' })}
      ${pin(P.pelvis[0], P.pelvis[1], 282, 160)}${lab(286, 156, 'renal pelvis', 'لگنچه', { size: 9.5, anchor: 'start' })}
      ${pin(P.hilum[0], P.hilum[1] + 4, 282, 204)}${lab(286, 200, 'hilum', 'ناف کلیه', { size: 9.5, anchor: 'start' })}
      ${pin(P.ureter[0], P.ureter[1] + 6, 282, 248)}${lab(286, 244, 'ureter', 'میزنای', { size: 9.5, anchor: 'start' })}
      ${pin(P.artery[0] + 18, P.artery[1] - 3, 262, 58)}${lab(266, 54, 'renal artery', 'سرخرگ کلیه', { size: 9.5, anchor: 'start', fill: '#9c2a23' })}
      ${pin(P.vein[0] + 22, P.vein[1] + 2, 282, 112)}${lab(286, 108, 'renal vein', 'سیاهرگ کلیه', { size: 9.5, anchor: 'start', fill: '#24479a' })}`, 'برش کلیه');
  };

  A['nephron-art'] = () => {
    const n = nephron(96, 30, 0.8, {}), P = n.P;
    const L = (x, y, en, fa, c) => lab(x, y, en, fa, { size: 9, anchor: 'end', fill: c });
    const R = (x, y, en, fa, c) => lab(x, y, en, fa, { size: 9, anchor: 'start', fill: c });
    return svg(360, 300, `${title('نفرون: واحد کار کلیه')}
      ${n.svg}
      ${pin(P.capsule[0], P.capsule[1], 90, 40)}${L(86, 40, 'Bowman capsule', 'کپسول بومن')}
      ${pin(P.afferent[0] + 2, P.afferent[1], 90, 72)}${L(86, 76, 'afferent', 'سرخرگچه آوران', '#9c2a23')}
      ${pin(P.efferent[0] + 2, P.efferent[1], 90, 104)}${L(86, 108, 'efferent', 'سرخرگچه وابران', '#9c2a23')}
      ${pin(P.glom[0], P.glom[1], 90, 140)}${L(86, 144, 'glomerulus', 'گلومرول')}
      ${pin(P.desc[0], P.desc[1], 90, 186)}${L(86, 190, 'descending limb', 'شاخه پایین‌رو')}
      ${pin(P.loop[0], P.loop[1], 90, 236)}${L(86, 240, 'nephron loop', 'قوس هنله')}
      ${pin(P.pct[0], P.pct[1] - 4, 282, 44)}${R(286, 48, 'proximal tubule', 'لوله پیچیده نزدیک')}
      ${pin(P.dct[0], P.dct[1] + 4, 282, 96)}${R(286, 100, 'distal tubule', 'لوله پیچیده دور')}
      ${pin(P.cd[0] + 4, P.cd[1] - 20, 282, 150)}${R(286, 154, 'collecting duct', 'مجرای جمع‌کننده')}
      ${pin(P.asc[0] + 2, P.asc[1] + 20, 282, 206)}${R(286, 210, 'ascending limb', 'شاخه بالارو')}
      ${pin(P.cap[0] - 2, P.cap[1] + 40, 150, 268)}${lab(150, 282, 'peritubular capillaries', 'مویرگ‌های دورلوله‌ای', { size: 9 })}`, 'نفرون');
  };

  A['urine-formation'] = () => {
    const m1 = nid(), m2 = nid(), m3 = nid();
    const n = nephron(30, 36, 0.86, {}), P = n.P;
    const badge = (x, y, l, c) => `<circle cx="${x}" cy="${y}" r="10" fill="${c}"/>${t(x, y + 4, l, { size: 11, w: 900, fill: '#fff' })}`;
    return svg(360, 300, `${title('سه گام ساخت ادرار')}
      ${n.svg}
      ${arrow(m1, P.glom[0] + 4, P.glom[1] - 4, P.capsule[0] + 30, P.capsule[1] - 12, '#d9443a', 2.6)}${badge(P.glom[0] - 2, P.glom[1] - 30, 'A', '#d9443a')}
      ${arrow(m2, P.desc[0] - 2, P.desc[1] - 20, P.cap[0] - 18, P.cap[1] - 12, '#3f8a05', 2.6)}${badge(P.desc[0] - 32, P.desc[1] - 40, 'B', '#3f8a05')}
      ${arrow(m3, P.asc[0] + 24, P.asc[1] + 16, P.asc[0] + 4, P.asc[1] + 6, '#6d4bc3', 2.6)}${badge(P.asc[0] + 36, P.asc[1] + 22, 'C', '#6d4bc3')}
      <rect x="244" y="150" width="110" height="138" rx="12" fill="#f7f4ee"/>
      ${t(254, 174, 'A filtration', { size: 9.5, w: 900, anchor: 'start', fill: '#d9443a' })}${f(346, 188, 'تصفیه در گلومرول', { size: 8.6, anchor: 'end', fill: INK })}
      ${t(254, 216, 'B reabsorption', { size: 9.5, w: 900, anchor: 'start', fill: '#3f8a05' })}${f(346, 230, 'بازجذب به خون', { size: 8.6, anchor: 'end', fill: INK })}
      ${t(254, 258, 'C secretion', { size: 9.5, w: 900, anchor: 'start', fill: '#6d4bc3' })}${f(346, 272, 'ترشح مواد زائد به لوله', { size: 8.6, anchor: 'end', fill: INK })}
      ${pin(P.cd[0] + 4, P.cd[1] + 30, 266, 112)}${lab(296, 96, 'urine', 'ادرار', { size: 10, fill: '#a8801f' })}`, 'سه گام ساخت ادرار', marker(m1, '#d9443a') + marker(m2, '#3f8a05') + marker(m3, '#6d4bc3'));
  };

  A['renal-blood'] = () => {
    const m = nid(), steps = [['aorta', 'آئورت', C.art], ['renal artery', 'سرخرگ کلیه', C.art], ['afferent arteriole', 'سرخرگچه آوران', '#e5675c'], ['glomerulus', 'گلومرول (تصفیه)', '#e98b80'],
      ['efferent arteriole', 'سرخرگچه وابران', '#d983a0'], ['peritubular capillaries', 'مویرگ‌های دورلوله‌ای', '#a58ad8'], ['renal vein', 'سیاهرگ کلیه', C.vein], ['inferior vena cava', 'بزرگ‌سیاهرگ زیرین', '#24479a']];
    let g = '';
    steps.forEach((s, i) => {
      const col = i % 2, row = Math.floor(i / 2), x = col ? 192 : 18, y = 34 + row * 62;
      const xx = row % 2 ? (col ? 18 : 192) : x;
      g += `<rect x="${xx}" y="${y}" width="150" height="46" rx="12" fill="${s[2]}" opacity=".16"/><rect x="${xx}" y="${y}" width="8" height="46" rx="4" fill="${s[2]}"/>${lab(xx + 79, y + 20, s[0], s[1], { size: 9.5 })}`;
    });
    const AR = [[168, 57, 190, 57], [267, 80, 267, 94], [190, 119, 170, 119], [93, 142, 93, 156], [168, 181, 190, 181], [267, 204, 267, 218], [190, 243, 170, 243]];
    return svg(360, 300, `${title('مسیر خون در کلیه')}
      ${g}${AR.map(a => arrow(m, a[0], a[1], a[2], a[3], LINE, 2)).join('')}
      ${f(180, 292, 'خون تصفیه‌شده با سیاهرگ کلیه برمی‌گردد؛ مواد زائد در ادرار می‌مانند', { size: 9, fill: INK, w: 700 })}`, 'مسیر خون در کلیه', marker(m));
  };

  A['kidney-hormones'] = () => {
    const m = nid(), sh = nid(), k = kidney(180, 150, 0.62, { vessels: false, adrenal: true });
    const box = (x, y, w, en, fa, sub, c) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="${w}" height="64" rx="12" fill="#fff" stroke="${c}" stroke-width="1.6"/></g>${lab(x + w / 2, y + 20, en, fa, { size: 9.5, fill: c })}${f(x + w / 2, y + 52, sub, { size: 8.2, fill: INK })}`;
    return svg(360, 300, `${title('کلیه، کارخانه هورمون هم هست')}
      ${k.svg}
      ${box(10, 40, 110, 'renin', 'رنین', '← آنژیوتانسین ← فشار خون بالا', '#b0413e')}
      ${box(240, 40, 110, 'erythropoietin', 'اریتروپویتین', '← مغز استخوان ← گلبول قرمز', '#c0563b')}
      ${box(10, 200, 110, 'ADH', 'هورمون ضدادراری', 'از هیپوفیز: آب را نگه دار', '#2b86c5')}
      ${box(240, 200, 110, 'aldosterone', 'آلدوسترون', 'از غده فوق‌کلیوی: سدیم و پتاسیم', '#a8801f')}
      ${arrow(m, 146, 122, 120, 100, LINE, 1.8)}${arrow(m, 214, 122, 240, 100, LINE, 1.8)}${arrow(m, 120, 220, 144, 186, '#2b86c5', 1.8)}${arrow(m, 240, 220, 196, 112, '#a8801f', 1.8)}
      ${f(180, 290, 'نارسایی کلیه یعنی کم‌خونی (EPO کم) و فشار خون بالا', { size: 9, fill: INK, w: 700 })}`, 'هورمون‌های کلیه', marker(m) + shadow(sh));
  };

  A['homeostasis'] = () => {
    const sh = nid(), k = kidney(180, 88, 0.42, {});
    const pan = (x, en, items, c) => `<path d="M${x - 56} 150 Q${x} 196 ${x + 56} 150Z" fill="${c}" opacity=".22" stroke="${c}"/><path d="M${x} 96 L${x - 52} 150 M${x} 96 L${x + 52} 150" stroke="#8a96a0" stroke-width="1.2"/>${t(x, 140, en, { size: 9.5, w: 900 })}${items}`;
    return svg(360, 280, `${title('هم‌ایستایی: کلیه ترازوی بدن است')}
      <path d="M180 120 L180 250 M140 250 L220 250" stroke="#5b6b73" stroke-width="5" stroke-linecap="round"/><path d="M78 96 L282 96" stroke="#5b6b73" stroke-width="4" stroke-linecap="round"/>
      <g filter="url(#${sh})">${k.svg}</g>
      ${pan(78, 'keep', f(78, 170, 'آب، سدیم، گلوکز', { size: 8.6, fill: INK, w: 700 }), C.green)}
      ${pan(282, 'remove', f(282, 170, 'اوره، کراتینین، اسید اوریک', { size: 8.6, fill: INK, w: 700 }), C.red)}
      ${f(78, 214, 'به خون برمی‌گردد', { size: 9, fill: C.green, w: 800 })}${f(282, 214, 'در ادرار دفع می‌شود', { size: 9, fill: C.red, w: 800 })}
      ${lab(180, 38, 'homeostasis', 'هم‌ایستایی', { size: 10.5 })}
      ${t(110, 266, 'Na⁺ • K⁺ • Cl⁻ • HCO₃⁻', { size: 9.5, sym: true, w: 800 })}${f(268, 270, 'الکترولیت‌ها و pH هم تنظیم می‌شوند', { size: 8.6 })}`, 'هم‌ایستایی', shadow(sh));
  };

  A['glomerulus-zoom'] = () => {
    const m = nid();
    return svg(360, 280, `${title('جسمک کلیوی: صافی خون')}
      ${tube('M10 112 C40 112 64 118 96 126', C.art, C.artLine, 12)}${tube('M96 160 C66 166 40 172 10 172', '#e5675c', C.artLine, 7)}
      <circle cx="140" cy="142" r="62" fill="${C.tube}" stroke="${C.tubeLine}" stroke-width="2"/><circle cx="140" cy="142" r="50" fill="#fff8e6"/>
      ${glom(136, 142, 38, C.art, 4)}
      ${tube('M190 176 C214 192 230 200 262 200 C292 200 300 230 330 236', C.tube, C.tubeLine, 14)}
      ${arrow(m, 176, 136, 186, 118, '#d9443a', 2)}${arrow(m, 168, 168, 190, 172, '#d9443a', 2)}
      ${lab(48, 76, 'afferent', 'آوران (پهن‌تر)', { size: 9.5, fill: '#9c2a23' })}${lab(48, 196, 'efferent', 'وابران (باریک‌تر)', { size: 9.5, fill: '#9c2a23' })}
      ${pin(118, 128, 96, 64)}${lab(96, 46, 'glomerulus', 'کلاف مویرگی', { size: 9.5 })}
      ${pin(196, 120, 238, 64)}${lab(258, 46, 'glomerular capsule', 'کپسول بومن', { size: 9.5 })}
      ${pin(300, 216, 312, 180)}${lab(316, 160, 'filtrate', 'مایع تصفیه‌شده', { size: 9.5, fill: '#a8801f' })}
      <rect x="18" y="226" width="160" height="46" rx="10" fill="#e7f5dd"/>${f(98, 244, 'رد می‌شود: آب، نمک، قند، اوره', { size: 8.6, fill: INK, w: 800 })}${f(98, 262, 'filtrate', { size: 8, fill: MUTED })}
      <rect x="184" y="226" width="160" height="46" rx="10" fill="#fbe3df"/>${f(264, 244, 'رد نمی‌شود: گلبول‌ها و پروتئین', { size: 8.6, fill: INK, w: 800 })}${f(264, 262, 'اگر دیدی: hematuria یا proteinuria', { size: 8, fill: MUTED })}`, 'جسمک کلیوی', marker(m, '#d9443a'));
  };

  /* ================= tr: مثانه و دفع ادرار ================= */
  A['bladder-art'] = () => {
    const b = bladder(186, 160, 1.0, { urine: -6 }), P = b.P;
    const L = (x, y, en, fa, c) => lab(x, y, en, fa, { size: 9, anchor: 'end', fill: c });
    const R = (x, y, en, fa, c) => lab(x, y, en, fa, { size: 9, anchor: 'start', fill: c });
    return svg(360, 290, `${title('مثانه و پیشابراه در برش روبه‌رو')}
      ${b.svg}
      ${pin(P.ureterL[0] + 6, P.ureterL[1] + 24, 118, 52)}${L(114, 54, 'ureter', 'میزنای')}
      ${pin(P.wall[0] + 3, P.wall[1] - 20, 118, 100)}${L(114, 102, 'detrusor muscle', 'عضله دترسور')}
      ${pin(P.lumen[0] - 10, P.lumen[1] - 26, 118, 146)}${L(114, 148, 'rugae', 'چین‌های مخاط')}
      ${pin(P.orificeL[0], P.orificeL[1], 118, 192)}${L(114, 194, 'ureteral orifice', 'دهانه میزنای')}
      ${pin(P.internal[0] - 16, P.internal[1], 118, 238)}${L(114, 240, 'internal sphincter', 'اسفنکتر داخلی (غیرارادی)')}
      ${pin(P.lumen[0] + 60, P.lumen[1] + 14, 262, 98)}${R(266, 100, 'urine', 'ادرار ذخیره‌شده', '#a8801f')}
      ${pin(P.trigone[0] + 8, P.trigone[1], 262, 160)}${R(266, 162, 'trigone', 'مثلث مثانه')}
      ${pin(P.external[0] + 4, P.external[1], 262, 222)}${R(266, 224, 'external sphincter', 'اسفنکتر خارجی (ارادی)')}
      ${pin(P.urethra[0] + 3, P.urethra[1] + 4, 262, 266)}${R(266, 268, 'urethra', 'پیشابراه')}`, 'مثانه');
  };

  A['urethra-compare'] = () => {
    const sh = nid();
    const blad = x => `<path d="M${x - 34} 92 C${x - 36} 58 ${x + 36} 58 ${x + 34} 92 C${x + 36} 112 ${x + 18} 124 ${x} 126 C${x - 18} 124 ${x - 36} 112 ${x - 34} 92Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.6"/>`;
    const ruler = (x, y1, y2, l) => `<path d="M${x} ${y1} V${y2} M${x - 5} ${y1} H${x + 5} M${x - 5} ${y2} H${x + 5}" stroke="#5b6b73" stroke-width="1.3"/>${t(x - 8, (y1 + y2) / 2 + 4, l, { size: 9.5, anchor: 'end', sym: true, w: 800 })}`;
    return svg(360, 300, `${title('پیشابراه زن و مرد')}
      <g filter="url(#${sh})"><rect x="10" y="32" width="164" height="232" rx="16" fill="#fde6ec"/><rect x="186" y="32" width="164" height="232" rx="16" fill="#e6f2fb"/></g>
      ${blad(92)}${tube('M92 126 L92 160', C.tube, C.tubeLine, 7)}${ruler(130, 126, 160, '4 cm')}
      ${blad(268)}<ellipse cx="268" cy="140" rx="20" ry="13" fill="#d9a3c7" stroke="#a46a92"/>${tube('M268 126 L268 176 C268 206 300 206 300 240', C.tube, C.tubeLine, 7)}${ruler(330, 126, 240, '20 cm')}
      ${lab(92, 196, 'female urethra', 'کوتاه: فقط ادرار', { size: 10 })}${f(92, 234, 'عفونت ادراری در زنان شایع‌تر است', { size: 8.4, fill: INK, w: 700 })}
      ${lab(232, 222, 'male urethra', 'بلند: ادرار و مایع منی', { size: 10 })}${pin(286, 142, 316, 98)}${lab(320, 84, 'prostate', 'پروستات', { size: 9 })}
      ${f(180, 288, 'پیشابراه کوتاه یعنی راه کوتاه‌تر میکروب تا مثانه', { size: 9, fill: INK, w: 700 })}`, 'پیشابراه زن و مرد', shadow(sh));
  };

  A['voiding-reflex'] = () => {
    const m = nid();
    const bl = (x, lvl, c) => `<path d="M${x - 40} 150 C${x - 42} ${150 - 24 - lvl} ${x + 42} ${150 - 24 - lvl} ${x + 40} 150 C${x + 42} 174 ${x + 20} 188 ${x} 190 C${x - 20} 188 ${x - 42} 174 ${x - 40} 150Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.6"/><path d="M${x - 34} ${166 - lvl} L${x + 34} ${166 - lvl} C${x + 30} 178 ${x + 16} 184 ${x} 185 C${x - 16} 184 ${x - 30} 178 ${x - 34} ${166 - lvl}Z" fill="${C.urine}" opacity=".7"/>${tube(`M${x} 190 L${x} 214`, C.tube, C.tubeLine, 6)}<rect x="${x - 10}" y="194" width="20" height="6" rx="3" fill="${c}"/>`;
    return svg(360, 300, `${title('رفلکس ادرار: micturition reflex')}
      ${bl(64, 0, '#b8433c')}${bl(180, 20, '#b8433c')}${bl(296, 34, '#3f8a05')}
      ${arrow(m, 108, 160, 134, 160, LINE, 2)}${arrow(m, 224, 160, 250, 160, LINE, 2)}
      ${f(64, 238, 'پر شدن آرام', { size: 9.5, fill: INK, w: 800 })}${f(64, 254, 'اسفنکترها بسته', { size: 8.6 })}
      ${f(180, 238, 'کشش دیواره', { size: 9.5, fill: INK, w: 800 })}${f(180, 254, 'حدود ۳۰۰ تا ۴۰۰ میلی‌لیتر', { size: 8.4 })}
      ${f(296, 238, 'تخلیه', { size: 9.5, fill: INK, w: 800 })}${f(296, 254, 'دترسور منقبض', { size: 8.4 })}${f(296, 268, 'اسفنکتر داخلی شل', { size: 8.4 })}
      ${curve(m, 'M180 104 C180 70 230 54 280 74', '#6d4bc3', 1.8, true)}${lab(180, 48, 'brain / spinal cord', 'مغز و نخاع', { size: 9, fill: '#6d4bc3' })}
      ${f(180, 290, 'اسفنکتر خارجی ارادی است؛ کنترلش بعد از دو سالگی یاد گرفته می‌شود', { size: 8.8, fill: INK, w: 700 })}`, 'رفلکس ادرار', marker(m));
  };

  A['incontinence-types'] = () => {
    const sh = nid();
    const mini = (x, y, fill, extra) => `<path d="M${x - 22} ${y} C${x - 24} ${y - 26} ${x + 24} ${y - 26} ${x + 22} ${y} C${x + 24} ${y + 14} ${x + 12} ${y + 22} ${x} ${y + 24} C${x - 12} ${y + 22} ${x - 24} ${y + 14} ${x - 22} ${y}Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.4"/><path d="M${x - 18} ${y + 2 - fill} L${x + 18} ${y + 2 - fill} C${x + 16} ${y + 14} ${x + 8} ${y + 19} ${x} ${y + 20} C${x - 8} ${y + 19} ${x - 16} ${y + 14} ${x - 18} ${y + 2 - fill}Z" fill="${C.urine}" opacity=".7"/>${tube(`M${x} ${y + 24} L${x} ${y + 36}`, C.tube, C.tubeLine, 4)}${extra || ''}`;
    const drops = (x, y) => [0, 1, 2].map(i => `<path d="M${x + i * 7 - 7} ${y + i * 4} q3 5 0 8 q-3 -3 0 -8z" fill="#5fa8d8"/>`).join('');
    const cardB = (x, y, bg, en, fa, sub, art) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="164" height="118" rx="14" fill="${bg}"/></g>${art}${lab(x + 104, y + 34, en, fa, { size: 9.5 })}${f(x + 104, y + 78, sub, { size: 8.2, fill: INK })}`;
    return svg(360, 302, `${title('مشکلات کنترل ادرار')}
      ${cardB(10, 32, '#fdf1d5', 'stress incontinence', 'بی‌اختیاری استرسی', 'نشت با سرفه، خنده یا ورزش', mini(44, 80, 6, drops(44, 124) + t(44, 50, '💥', { size: 14 })))}
      ${cardB(186, 32, '#fbe3df', 'urge incontinence', 'بی‌اختیاری فوریتی', 'فوریت ناگهانی پیش از رسیدن', mini(220, 80, 10, drops(220, 124) + t(220, 50, '⏱️', { size: 14 })))}
      ${cardB(10, 160, '#e6f2fb', 'urinary retention', 'احتباس ادرار', 'مثانه پر است ولی خالی نمی‌شود', mini(44, 208, 22, `<path d="M36 234 h16" stroke="#8e2f2a" stroke-width="5"/>`))}
      ${cardB(186, 160, '#efe7fb', 'nocturnal enuresis', 'شب‌ادراری', 'ادرار ناخواسته در خواب', mini(220, 208, 12, t(220, 178, '🌙', { size: 14 })))}
      ${f(180, 294, 'پیشوند in- یعنی «نه» و continence یعنی نگه‌داشتن ادرار', { size: 9, fill: MUTED, w: 700 })}`, 'بی‌اختیاری', shadow(sh));
  };

  A['cystocele-art'] = () => {
    const bladderN = `<path d="M70 100 C66 64 136 60 140 96 C142 120 124 136 104 138 C84 138 72 124 70 100Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.6"/>`;
    const bladderC = `<path d="M228 92 C224 58 294 54 298 90 C300 112 290 124 282 136 C276 156 262 166 252 160 C240 152 248 136 236 124 C228 116 228 104 228 92Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.6"/>`;
    const vag = (x, bulge) => `<path d="M${x} 100 C${x + 4} 140 ${x + 2} 180 ${x - 6} 236" stroke="#e7a6b6" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M${x} 100 C${x + 4} 140 ${x + 2} 180 ${x - 6} 236" stroke="#f7cfd9" stroke-width="9" fill="none" stroke-linecap="round"/>${bulge || ''}`;
    return svg(360, 290, `${title('افتادگی مثانه (cystocele)')}
      <rect x="10" y="32" width="164" height="226" rx="16" fill="#f7f4ee"/><rect x="186" y="32" width="164" height="226" rx="16" fill="#fbe3df"/>
      ${vag(134)}${bladderN}${tube('M98 138 C96 170 90 200 84 234', C.tube, C.tubeLine, 5)}
      ${vag(292)}${bladderC}${tube('M246 158 C244 190 240 210 236 234', C.tube, C.tubeLine, 5)}
      ${lab(92, 50, 'normal', 'طبیعی', { size: 10 })}${lab(268, 50, 'cystocele', 'مثانه به دیواره واژن افتاده', { size: 10 })}
      ${pin(100, 90, 40, 168)}${lab(42, 182, 'bladder', 'مثانه', { size: 9 })}${pin(136, 180, 156, 214)}${lab(146, 228, 'vagina', 'واژن', { size: 9 })}
      ${pin(276, 150, 320, 196)}${lab(316, 210, 'bulge', 'برآمدگی', { size: 9 })}
      ${f(180, 280, 'cyst/o + ‎-cele‎؛ درمان: cystopexy (تثبیت مثانه)', { size: 9, fill: INK, w: 700 })}`, 'سیستوسل');
  };

  A['ureter-peristalsis'] = () => {
    const m = nid();
    const wave = `<path d="M160 40 C164 70 156 92 160 118 C164 146 156 170 160 198 C164 222 160 240 162 254" stroke="${C.tubeLine}" stroke-width="18" fill="none" stroke-linecap="round"/><path d="M160 40 C164 70 156 92 160 118 C164 146 156 170 160 198 C164 222 160 240 162 254" stroke="${C.tube}" stroke-width="14" fill="none" stroke-linecap="round"/>`;
    const ring = y => `<ellipse cx="160" cy="${y}" rx="12" ry="4" fill="#b8433c" opacity=".8"/>`;
    return svg(360, 290, `${title('میزنای: موج‌های دودی ادرار را پایین می‌برند')}
      ${wave}${ring(96)}${ring(176)}<ellipse cx="160" cy="136" rx="6" ry="14" fill="${C.urine}" stroke="${C.urineLine}"/>
      <path d="M118 252 C118 236 206 236 206 252 L206 280 L118 280Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.4"/>
      ${arrow(m, 196, 120, 196, 160, '#c0563b', 2.4)}
      ${pin(172, 96, 230, 78)}${lab(276, 72, 'peristalsis', 'انقباض موجی دیواره', { size: 9.5 })}
      ${pin(166, 136, 230, 132)}${lab(276, 130, 'urine bolus', 'توده ادرار', { size: 9.5, fill: '#a8801f' })}
      ${pin(162, 252, 230, 216)}${lab(276, 204, 'ureteral orifice', 'دهانه میزنای', { size: 9.5 })}
      ${lab(70, 60, 'ureter', 'میزنای ۲۵ تا ۳۰ سانتی', { size: 10 })}
      ${f(76, 150, 'هر ۱۰ تا ۳۰ ثانیه', { size: 9, fill: INK, w: 800 })}${f(76, 166, 'یک فوران ادرار', { size: 9, fill: INK, w: 800 })}${f(76, 186, 'به مثانه می‌ریزد', { size: 8.6 })}
      ${f(276, 232, 'مانع برگشت ادرار', { size: 8.4, fill: INK })}`, 'حرکات دودی میزنای', marker(m, '#c0563b'));
  };

  A['tract-narrowing'] = () => {
    const k = kidney(180, 66, 0.4, {}).svg;
    const tag = (x, y, en, fa, c, a) => lab(x, y, en, fa, { size: 9, anchor: a, fill: c });
    return svg(360, 300, `${title('تنگی، گشادی و بیرون‌زدگی در مجاری')}
      ${tube('M194 76 C206 100 186 120 192 150', C.tube, C.tubeLine, 6)}${tube('M192 150 C186 162 194 176 190 196', C.tube, C.tubeLine, 15)}${tube('M190 196 C192 206 190 210 190 214', C.tube, C.tubeLine, 3)}
      ${k}
      <path d="M150 228 C148 206 230 206 228 228 C230 252 206 264 190 266 C172 264 148 252 150 228Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.6"/><circle cx="190" cy="222" r="9" fill="#f7c9bd" stroke="${C.blLine}"/>
      ${tube('M190 266 L190 284', C.tube, C.tubeLine, 2.6)}
      ${pin(190, 212, 92, 196)}${tag(88, 192, 'ureterostenosis', 'تنگی میزنای', '#b0413e', 'end')}
      ${pin(198, 176, 262, 166)}${tag(266, 160, 'ureterectasis', 'گشادی میزنای', '#a8801f', 'start')}
      ${pin(194, 222, 262, 230)}${tag(266, 226, 'ureterocele', 'برآمدگی میزنای در مثانه', '#6d4bc3', 'start')}
      ${pin(190, 280, 92, 270)}${tag(88, 266, 'urethrostenosis', 'تنگی پیشابراه', '#b0413e', 'end')}
      ${pin(210, 246, 262, 280)}${tag(266, 276, 'trigonitis', 'التهاب مثلث', '#c0563b', 'start')}
      ${f(88, 110, '‎-stenosis‎ = تنگی', { size: 9, fill: INK, w: 800, anchor: 'end' })}${f(88, 126, '‎-ectasis‎ = گشادی', { size: 9, fill: INK, w: 800, anchor: 'end' })}${f(88, 142, '‎-cele‎ = بیرون‌زدگی', { size: 9, fill: INK, w: 800, anchor: 'end' })}`, 'تنگی و گشادی');
  };

  /* ================= ur: ادرار و نشانه‌ها ================= */
  const cup = (x, y, w, h, fill, o) => {
    const p = o || {}, g = nid();
    return `<defs>${linear(g, fill, p.fill2 || fill, true)}</defs><path d="M${x} ${y} L${x + w} ${y} L${x + w - 8} ${y + h} L${x + 8} ${y + h}Z" fill="#fff" stroke="#9fb3c2" stroke-width="1.6"/><path d="M${x + 3} ${y + h * (p.level || 0.28)} L${x + w - 3} ${y + h * (p.level || 0.28)} L${x + w - 9} ${y + h - 2} L${x + 9} ${y + h - 2}Z" fill="url(#${g})"${p.cloud ? ' opacity=".85"' : ''}/>${p.cloud ? `<g fill="#fff" opacity=".55">${[0, 1, 2, 3, 4].map(i => `<circle cx="${x + 12 + i * (w - 24) / 4}" cy="${y + h * 0.6 + (i % 2) * 8}" r="3"/>`).join('')}</g>` : ''}<path d="M${x + 6} ${y + 10} L${x + 10} ${y + h - 10}" stroke="#fff" stroke-width="3" opacity=".7"/>`;
  };
  A['urine-composition'] = () => {
    const sh = nid();
    const bar = (x, w, c) => `<rect x="${x}" y="226" width="${w}" height="22" fill="${c}"/>`;
    return svg(360, 300, `${title('ادرار از چه ساخته شده است؟')}
      <g filter="url(#${sh})">${cup(30, 50, 110, 150, '#f8e08a', { fill2: '#eec558' })}</g>
      <rect x="168" y="52" width="180" height="150" rx="14" fill="#fdf6e1"/>
      ${t(180, 76, '95%', { size: 16, w: 900, anchor: 'start', fill: '#2b86c5', sym: true })}${f(336, 76, 'آب', { size: 11, fill: INK, w: 800, anchor: 'end' })}
      ${t(180, 104, '5%', { size: 16, w: 900, anchor: 'start', fill: '#a8801f', sym: true })}${f(336, 104, 'مواد حل‌شده', { size: 11, fill: INK, w: 800, anchor: 'end' })}
      ${f(336, 128, 'اوره، کراتینین، اسید اوریک', { size: 9.5, anchor: 'end', fill: INK })}${f(336, 146, 'نمک‌ها (سدیم، پتاسیم)، رنگدانه', { size: 9.5, anchor: 'end', fill: INK })}
      ${f(336, 170, 'نباید داشته باشد: قند، خون، پروتئین', { size: 9, anchor: 'end', fill: '#b0413e', w: 800 })}${f(336, 188, 'و چرک یا باکتری', { size: 9, anchor: 'end', fill: '#b0413e', w: 800 })}
      <rect x="20" y="226" width="320" height="22" rx="6" fill="#d9effa"/>${bar(324, 16, '#e0a526')}${t(170, 241, 'water 95%', { size: 9.5, w: 800, sym: true })}${t(332, 262, '5%', { size: 9, sym: true, w: 800 })}
      ${f(180, 284, 'حجم روزانه طبیعی حدود ۱۰۰۰ تا ۲۰۰۰ میلی‌لیتر؛ زرد کاهی و شفاف', { size: 9, fill: INK, w: 700 })}`, 'ترکیب ادرار', shadow(sh));
  };

  A['ua-dipstick'] = () => {
    const pads = [['glucose', 'glycosuria', 'قند', '#9ccc65'], ['ketones', 'ketonuria', 'کتون', '#f2a1c0'], ['blood', 'hematuria', 'خون', '#e57368'], ['protein', 'proteinuria', 'پروتئین', '#7fc9b8'],
      ['leukocytes', 'pyuria', 'گلبول سفید', '#c7a3e0'], ['nitrite', 'bacteriuria', 'نیتریت', '#f6b26b'], ['pH', '5.0 – 8.0', 'اسیدی-قلیایی', '#f4d35e'], ['SG', '1.001 – 1.030', 'وزن مخصوص', '#8fb5e6']];
    let g = '';
    pads.forEach((p, i) => {
      const y = 44 + i * 30;
      g += `<rect x="40" y="${y}" width="26" height="22" rx="3" fill="${p[3]}" stroke="#9aa5ab"/>${t(80, y + 15, p[0], { size: 10, w: 800, anchor: 'start' })}${f(214, y + 15, p[2], { size: 9.5, fill: INK, anchor: 'end' })}`;
      g += `<path d="M222 ${y + 11} H236" stroke="#c4cdd3" stroke-width="1.2"/>${t(242, y + 15, p[1], { size: 9.5, w: 800, anchor: 'start', fill: i < 6 ? '#b0413e' : '#2b86c5', sym: i >= 6 })}`;
    });
    return svg(360, 300, `${title('نوار ادرار: هر خانه یک آزمون')}
      <rect x="32" y="34" width="42" height="250" rx="6" fill="#f4f6f8" stroke="#c4cdd3"/>
      ${g}
      ${f(298, 290, 'مثبت شدن هر خانه = یک واژه ‎-uria‎', { size: 9, fill: INK, w: 800 })}`, 'نوار ادرار');
  };

  A['urine-colors'] = () => {
    const cols = [['#fbf3c8', 'pale', 'رقیق'], ['#f6e27a', 'straw', 'طبیعی'], ['#eec43e', 'amber', 'غلیظ'], ['#c98a2a', 'dark', 'کم‌آبی'], ['#d9624f', 'red', 'خون'], ['#e9dcb5', 'cloudy', 'کدر']];
    let g = '';
    cols.forEach((c, i) => { const x = 14 + i * 56; g += cup(x, 60, 48, 110, c[0], { level: 0.24, cloud: c[1] === 'cloudy' }) + lab(x + 24, 192, c[1], c[2], { size: 9.5 }); });
    return svg(360, 280, `${title('رنگ ادرار چه می‌گوید؟')}
      ${g}
      <path d="M22 226 H186" stroke="#e0a526" stroke-width="4" stroke-linecap="round"/>${f(104, 246, 'هرچه غلیظ‌تر، تیره‌تر: آب بیشتر بنوش', { size: 8.8, fill: INK, w: 700 })}
      ${f(266, 232, 'قرمز: hematuria', { size: 9, fill: '#b0413e', w: 800 })}${f(272, 252, 'کدر: pyuria یا bacteriuria', { size: 9, fill: '#a8801f', w: 800 })}
      ${f(180, 274, 'رنگ قهوه‌ای یا سیاه نشانه بیماری جدی است', { size: 8.6 })}`, 'رنگ ادرار');
  };

  A['output-terms'] = () => {
    const X = v => 168 + v / 4000 * 172;
    const rows = [['anuria', 'بی‌ادراری', 0, 100, '#8e2a26', '< 100 mL'], ['oliguria', 'کم‌ادراری', 100, 400, '#d9443a', '< 400 mL'], ['normal', 'طبیعی', 1000, 2000, '#3f8a05', '1000 – 2000'], ['polyuria', 'پرادراری', 3000, 4000, '#d4a017', '> 3000 mL']];
    let g = '';
    rows.forEach((r, i) => {
      const y = 46 + i * 46;
      g += `<rect x="10" y="${y}" width="340" height="38" rx="10" fill="${r[4]}" opacity=".08"/>${lab(70, y + 16, r[0], r[1], { size: 10, fill: r[4] })}`;
      g += `<rect x="${X(r[2])}" y="${y + 9}" width="${Math.max(4, X(r[3]) - X(r[2]))}" height="20" rx="4" fill="${r[4]}" opacity=".85"/>${i === 3 ? t(X(r[2]) - 6, y + 23, r[5], { size: 8.6, sym: true, anchor: 'end', w: 800 }) : t(X(r[3]) + 6, y + 23, r[5], { size: 8.6, sym: true, anchor: 'start', w: 800 })}`;
    });
    let ticks = '';
    [0, 1000, 2000, 3000, 4000].forEach(v => { ticks += `<path d="M${X(v)} 232 V238" stroke="#5b6b73"/>${t(X(v), 250, String(v), { size: 8.5, sym: true, fill: MUTED })}`; });
    return svg(360, 300, `${title('حجم ادرار در ۲۴ ساعت')}
      ${g}<path d="M${X(0)} 232 H${X(4000)}" stroke="#5b6b73" stroke-width="1.4"/>${ticks}${t(110, 250, 'mL / 24 h', { size: 8.6, sym: true, w: 800 })}
      ${f(180, 274, 'nocturia یعنی ادرار زیاد در شب؛ زمانش مهم است، نه حجم کل', { size: 9, fill: INK, w: 700 })}
      ${f(180, 292, 'برون‌ده کمتر از ۰٫۵ میلی‌لیتر به ازای هر کیلوگرم در ساعت = کم‌ادراری', { size: 8.6 })}`, 'حجم ادرار');
  };

  A['sg-scale'] = () => {
    const sh = nid();
    const cyl = (x, lvl, fl, c) => `<rect x="${x}" y="50" width="70" height="190" rx="8" fill="#fff" stroke="#9fb3c2" stroke-width="1.6"/><rect x="${x + 3}" y="80" width="64" height="157" rx="5" fill="${c}"/><g filter="url(#${sh})"><ellipse cx="${x + 35}" cy="${fl + 70}" rx="13" ry="22" fill="#e8eef2" stroke="#8a96a0"/><rect x="${x + 31}" y="${fl - 6}" width="8" height="58" rx="3" fill="#fff" stroke="#8a96a0"/></g>`;
    return svg(360, 290, `${title('وزن مخصوص ادرار با ادرارسنج')}
      ${cyl(40, 0, 52, '#fbf3c8')}${cyl(160, 0, 70, '#eec43e')}
      ${lab(75, 262, 'dilute • 1.005', 'رقیق: شناور پایین‌تر', { size: 9.5 })}${lab(195, 262, 'concentrated • 1.030', 'غلیظ: شناور بالاتر', { size: 9.5 })}
      <rect x="252" y="56" width="98" height="176" rx="12" fill="#f7f4ee"/>
      ${t(301, 80, 'water = 1.000', { size: 9.5, w: 800, sym: true })}${t(301, 108, 'urine', { size: 9.5, w: 800 })}${t(301, 124, '1.001 – 1.030', { size: 9.5, w: 800, sym: true, fill: '#3f8a05' })}
      ${f(301, 150, 'پایین: دیابت بی‌مزه', { size: 8.6, fill: INK })}${f(301, 168, 'یا آب زیاد', { size: 8.6, fill: INK })}${f(301, 194, 'بالا: کم‌آبی', { size: 8.6, fill: INK })}${f(301, 212, 'یا قند و پروتئین', { size: 8.6, fill: INK })}
      ${lab(301, 252, 'urinometer', 'ادرارسنج', { size: 9.5 })}`, 'وزن مخصوص', shadow(sh));
  };

  A['electrolytes'] = () => {
    const cell = (x, y, en, fa, c, sub) => `<rect x="${x}" y="${y}" width="128" height="74" rx="12" fill="${c}" opacity=".16"/><rect x="${x}" y="${y}" width="128" height="74" rx="12" fill="none" stroke="${c}"/>${lab(x + 64, y + 26, en, fa, { size: 10, fill: c })}${f(x + 64, y + 62, sub, { size: 8.2, fill: INK })}`;
    return svg(360, 290, `${title('سدیم و پتاسیم در خون')}
      ${t(140, 52, 'hyper- (زیاد)', { size: 9.5, w: 900 })}${t(276, 52, 'hypo- (کم)', { size: 9.5, w: 900 })}
      ${t(40, 104, 'Na', { size: 18, w: 900, sym: true })}${f(40, 122, 'سدیم', { size: 9, fill: INK })}${f(40, 136, 'natr/o', { size: 8.6 })}
      ${t(40, 194, 'K', { size: 18, w: 900, sym: true })}${f(40, 212, 'پتاسیم', { size: 9, fill: INK })}${f(40, 226, 'kal/i', { size: 8.6 })}
      ${cell(76, 66, 'hypernatremia', 'سدیم بالا', '#d4a017', 'کم‌آبی، استفراغ شدید')}${cell(212, 66, 'hyponatremia', 'سدیم پایین', '#2b86c5', 'مسمومیت با آب، نارسایی')}
      ${cell(76, 156, 'hyperkalemia', 'پتاسیم بالا', '#d9443a', 'نارسایی کلیه؛ آریتمی')}${cell(212, 156, 'hypokalemia', 'پتاسیم پایین', '#6d4bc3', 'دیورتیک‌ها؛ ضعف عضله')}
      ${f(180, 262, 'natrium و kalium نام‌های لاتین سدیم و پتاسیم‌اند؛ برای همین Na و K', { size: 9, fill: INK, w: 700 })}
      ${f(180, 280, 'پسوند ‎-emia‎ یعنی حالت خون', { size: 8.6 })}`, 'الکترولیت‌ها');
  };

  A['uremia-art'] = () => {
    const m = nid(), k = kidney(70, 130, 0.62, { fill: '#9c6a66', fill2: '#b98d88' });
    const R = rng(4);
    let dots = '';
    for (let i = 0; i < 26; i++) dots += `<circle cx="${(166 + R() * 120).toFixed(0)}" cy="${(88 + R() * 70).toFixed(0)}" r="${(2.5 + R() * 2).toFixed(1)}" fill="${i % 3 ? '#a8801f' : '#6d4bc3'}" opacity=".8"/>`;
    return svg(360, 290, `${title('وقتی کلیه از کار می‌افتد: uremia')}
      ${k.svg}${t(70, 210, '✕', { size: 16, w: 900, fill: '#d9443a' })}${lab(70, 228, 'renal failure', 'نارسایی کلیه', { size: 9.5 })}
      ${arrow(m, 112, 122, 146, 122, LINE, 2)}
      <path d="M150 90 C150 70 300 70 300 90 L300 156 C300 176 150 176 150 156Z" fill="#fbe3df" stroke="#d9443a" stroke-width="1.6"/>
      ${dots}
      ${lab(226, 196, 'blood: urea ↑ creatinine ↑', 'اوره و کراتینین در خون بالا', { size: 9.5 })}
      ${f(226, 236, 'azotemia = مواد نیتروژنی در خون', { size: 9, fill: INK, w: 800 })}${f(226, 254, 'uremia = حالت سمی آن', { size: 9, fill: INK, w: 800 })}
      ${f(180, 280, 'نشانه‌ها: خستگی، بی‌اشتهایی، ادم، کم‌خونی، اسیدوز', { size: 8.8 })}
      ${t(196, 104, 'BUN', { size: 9, w: 900, fill: '#6d4bc3', sym: true })}${t(262, 150, 'Cr', { size: 9, w: 900, fill: '#a8801f', sym: true })}`, 'اورمی', marker(m));
  };

  A['clean-catch'] = () => {
    const sh = nid(), m = nid();
    const step = (x, n, ic, fa, sub) => `<g filter="url(#${sh})"><rect x="${x}" y="56" width="78" height="150" rx="14" fill="#fff" stroke="#e5d6a6"/></g><circle cx="${x + 39}" cy="56" r="13" fill="#e0a526"/>${t(x + 39, 61, n, { size: 12, w: 900, fill: '#fff', sym: true })}${t(x + 39, 108, ic, { size: 26 })}${f(x + 39, 150, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 39, 170, sub, { size: 8.4 })}`;
    return svg(360, 280, `${title('نمونه ادرار تمیز و میانی (clean-catch)')}
      ${step(6, '1', '🧼', 'شست‌وشو', 'دهانه پیشابراه')}${step(94, '2', '🚽', 'شروع ادرار', 'اول توی توالت')}${step(182, '3', '🧪', 'وسط ادرار', 'در ظرف استریل')}${step(270, '4', '✅', 'پایان', 'بقیه توی توالت')}
      ${arrow(m, 86, 132, 92, 132, LINE, 2)}${arrow(m, 174, 132, 180, 132, LINE, 2)}${arrow(m, 262, 132, 268, 132, LINE, 2)}
      ${f(180, 236, 'هدف: کمترین آلودگی با میکروب‌های پوست', { size: 9.5, fill: INK, w: 800 })}
      ${f(180, 256, 'اختصار CC با حروف بزرگ؛ cc کوچک یعنی شکایت اصلی بیمار', { size: 8.6 })}`, 'نمونه ادرار تمیز', marker(m) + shadow(sh));
  };

  /* ================= dz: بیماری‌های ادراری ================= */
  /** مسیر کامل یک‌طرفه: کلیه (برش)، میزنای، مثانه و پیشابراه؛ برای شکل‌های بیماری */
  function tract(o) {
    const p = o || {};
    const ks = kidneySection(120, 82, 0.62, Object.assign({ vessels: false, ureter: 0 }, p.k || {}));
    const P = ks.P;
    const ur = `M${P.ureter[0]} ${P.ureter[1]} C${P.ureter[0] + 4} ${P.ureter[1] + 50} ${178} 160 ${184} 206`;
    const bl = bladder(196, 246, 0.42, { noUreters: true, urine: p.urine });
    return { svg: tube(ur, p.uc || C.pel, C.pelLine, p.uw || 4.6) + ks.svg + bl.svg, P, B: bl.P };
  }

  A['uti-ascending'] = () => {
    const m = nid(), tr = tract({}), P = tr.P, B = tr.B;
    const bugs = (x, y, n) => Array.from({ length: n }, (_, i) => `<ellipse cx="${x + (i % 3) * 7}" cy="${y + Math.floor(i / 3) * 6}" rx="3.2" ry="1.8" fill="#3f8a05" transform="rotate(${i * 37} ${x + (i % 3) * 7} ${y + Math.floor(i / 3) * 6})"/>`).join('');
    return svg(360, 300, `${title('عفونت ادراری از پایین بالا می‌رود')}
      ${tr.svg}${bugs(186, 280, 3)}${bugs(186, 236, 6)}${bugs(172, 166, 3)}${bugs(130, 84, 3)}
      ${curve(m, 'M226 286 C262 250 262 190 222 150 C196 124 176 100 152 90', '#3f8a05', 2.2, true)}
      ${pin(196, 290, 270, 284)}${lab(306, 278, 'urethritis', 'التهاب پیشابراه', { size: 9.5, fill: '#b0413e' })}
      ${pin(212, 240, 286, 226)}${lab(306, 214, 'cystitis', 'التهاب مثانه', { size: 9.5, fill: '#b0413e' })}
      ${pin(176, 172, 286, 160)}${lab(306, 150, 'ureteritis', 'التهاب میزنای', { size: 9.5, fill: '#b0413e' })}
      ${pin(P.pelvis[0], P.pelvis[1], 286, 72)}${lab(306, 52, 'pyelonephritis', 'عفونت لگنچه و کلیه', { size: 9.5, fill: '#b0413e' })}
      <rect x="10" y="190" width="132" height="98" rx="12" fill="#e7f5dd"/>
      ${f(76, 210, 'سیستیت: سوزش، تکرر،', { size: 8.6, fill: INK, w: 800 })}${f(76, 226, 'فوریت ادرار', { size: 8.6, fill: INK, w: 800 })}
      ${f(76, 252, 'پیلونفریت: تب، لرز،', { size: 8.6, fill: '#b0413e', w: 800 })}${f(76, 268, 'درد پهلو', { size: 8.6, fill: '#b0413e', w: 800 })}
      ${f(76, 296, 'میکروب شایع: E. coli', { size: 8.4 })}`, 'عفونت ادراری', marker(m, '#3f8a05'));
  };

  A['stones-sites'] = () => {
    const tr = tract({}), P = tr.P, B = tr.B;
    return svg(360, 300, `${title('جای سنگ‌ها در مجاری ادراری')}
      ${tr.svg}${stone(P.calyx[0], P.calyx[1], 6, 2)}${stone(P.pelvis[0] - 2, P.pelvis[1] - 2, 5, 5)}${stone(166, 150, 5.5, 7)}${stone(B.trigone[0] + 6, B.trigone[1] - 10, 6, 9)}${stone(196, 286, 3.6, 11)}
      ${pin(P.calyx[0], P.calyx[1] - 6, 50, 172)}${lab(48, 186, 'nephrolithiasis', 'سنگ کلیه', { size: 9.5, fill: '#6f522c' })}
      ${pin(166, 150, 286, 132)}${lab(306, 120, 'ureterolithiasis', 'سنگ میزنای', { size: 9.5, fill: '#6f522c' })}
      ${pin(B.trigone[0] + 10, B.trigone[1] - 12, 286, 214)}${lab(306, 202, 'cystolithiasis', 'سنگ مثانه', { size: 9.5, fill: '#6f522c' })}
      ${pin(198, 288, 286, 274)}${lab(306, 262, 'urethrolithiasis', 'سنگ پیشابراه', { size: 9.5, fill: '#6f522c' })}
      <rect x="10" y="216" width="150" height="76" rx="12" fill="#fdf1d5"/>
      ${f(85, 236, 'renal colic: درد شدید پهلو', { size: 8.6, fill: INK, w: 800 })}${f(85, 256, 'lith/o = سنگ', { size: 8.6, fill: INK })}${f(85, 276, 'calculus، جمع: calculi', { size: 8.6, fill: INK })}`, 'سنگ‌ها');
  };

  A['hydronephrosis-art'] = () => {
    const m = nid();
    const kN = kidneySection(86, 96, 0.62, { vessels: false });
    const kH = kidneySection(268, 96, 0.7, { vessels: false, flip: true, pel: '#f6e7b2', pyr: '#cc7a72', extra: `<path d="M-2 -40 C24 -30 28 -10 34 -4 L34 10 C28 16 24 34 -2 42 C10 20 12 -16 -2 -40Z" fill="#f6e7b2" stroke="${C.pelLine}" stroke-width="1.6"/>` });
    return svg(360, 300, `${title('هیدرونفروز: ادرار پشت انسداد جمع می‌شود')}
      ${tube(`M${kN.P.ureter[0]} ${kN.P.ureter[1]} C${kN.P.ureter[0] + 2} 210 ${kN.P.ureter[0] - 4} 240 ${kN.P.ureter[0] - 6} 274`, C.pel, C.pelLine, 4)}${kN.svg}
      ${tube(`M${kH.P.ureter[0]} ${kH.P.ureter[1]} C${kH.P.ureter[0] - 6} 170 ${kH.P.ureter[0]} 190 ${kH.P.ureter[0] - 2} 204`, C.pel, C.pelLine, 10)}${tube(`M${kH.P.ureter[0] - 2} 204 C${kH.P.ureter[0] - 4} 230 ${kH.P.ureter[0] - 2} 250 ${kH.P.ureter[0] - 2} 274`, C.pel, C.pelLine, 3)}${kH.svg}
      ${stone(kH.P.ureter[0] - 2, 206, 6.5, 4)}
      ${lab(54, 186, 'normal', 'کلیه و میزنای طبیعی', { size: 9.5 })}
      ${pin(kH.P.pelvis[0], kH.P.pelvis[1], 186, 64)}${lab(176, 46, 'hydronephrosis', 'اتساع لگنچه و کالیس‌ها', { size: 9.5, fill: '#b0413e' })}
      ${pin(kH.P.ureter[0] + 4, 170, 316, 178)}${lab(318, 196, 'hydroureter', 'اتساع میزنای', { size: 9, fill: '#b0413e' })}
      ${pin(kH.P.ureter[0] - 6, 208, 196, 224)}${lab(176, 238, 'stone / stricture', 'سنگ یا تنگی', { size: 9.5, fill: '#6f522c' })}
      ${f(180, 290, 'hydr/o (آب) + nephr/o (کلیه) + ‎-osis‎ (حالت)', { size: 9, fill: INK, w: 700 })}`, 'هیدرونفروز', marker(m));
  };

  A['glomerulo-art'] = () => {
    const unit = (x, inflamed) => `<circle cx="${x}" cy="118" r="54" fill="${C.tube}" stroke="${C.tubeLine}" stroke-width="2"/><circle cx="${x}" cy="118" r="44" fill="#fff8e6"/>${glom(x, 118, 32, inflamed ? '#c0392b' : C.art, inflamed ? 9 : 4)}${inflamed ? `<circle cx="${x}" cy="118" r="34" fill="#ff6b4a" opacity=".22"/>` : ''}${tube(`M${x + 40} 150 C${x + 52} 176 ${x + 46} 206 ${x + 56} 230`, C.tube, C.tubeLine, 12)}`;
    const blood = (x, y) => [0, 1, 2].map(i => `<ellipse cx="${x + i * 8}" cy="${y + (i % 2) * 6}" rx="4" ry="2.6" fill="#d9443a"/>`).join('');
    const prot = (x, y) => [0, 1, 2].map(i => `<circle cx="${x + i * 8}" cy="${y + (i % 2) * 5}" r="2.6" fill="#6d4bc3"/>`).join('');
    return svg(360, 316, `${title('گلومرولونفریت: صافی خراب می‌شود')}
      ${unit(92, false)}${unit(268, true)}
      ${blood(306, 182)}${prot(308, 204)}
      ${lab(92, 252, 'normal glomerulus', 'گلبول و پروتئین رد نمی‌شوند', { size: 9.5 })}
      ${lab(256, 252, 'glomerulonephritis', 'التهاب گلومرول و کلیه', { size: 9.5, fill: '#b0413e' })}
      ${t(222, 284, 'hematuria', { size: 9, w: 800, fill: '#d9443a' })}${t(256, 284, '+', { size: 9, w: 800 })}${t(294, 284, 'proteinuria', { size: 9, w: 800, fill: '#6d4bc3' })}
      ${f(180, 306, 'اغلب پس از عفونت استرپتوکوکی گلو یا پوست؛ با ادم و فشار خون بالا', { size: 8.8, fill: INK, w: 700 })}`, 'گلومرولونفریت');
  };

  A['renal-failure-art'] = () => {
    const sh = nid(), kA = kidney(92, 112, 0.5, {}).svg, kC = kidney(268, 112, 0.42, { fill: '#9c6a66', fill2: '#b98d88' }).svg;
    return svg(360, 300, `${title('نارسایی حاد و مزمن کلیه')}
      <g filter="url(#${sh})"><rect x="10" y="32" width="164" height="222" rx="16" fill="#fdf1d5"/><rect x="186" y="32" width="164" height="222" rx="16" fill="#fbe3df"/></g>
      ${kA}${t(126, 76, '⚡', { size: 16 })}${kC}
      ${lab(92, 186, 'acute renal failure', 'نارسایی حاد: ARF یا AKI', { size: 9.5 })}${f(92, 220, 'ناگهانی: شوک، سم، آسیب', { size: 8.6, fill: INK })}${f(92, 238, 'اغلب برگشت‌پذیر', { size: 8.6, fill: INK })}
      ${lab(268, 186, 'chronic renal failure', 'نارسایی مزمن: CRF یا CKD', { size: 9.5 })}${f(268, 220, 'تدریجی: دیابت، فشار خون', { size: 8.6, fill: INK })}${f(268, 238, 'از دست رفتن نفرون‌ها', { size: 8.6, fill: INK })}
      <rect x="40" y="264" width="280" height="30" rx="10" fill="#8e2a26"/>${f(180, 284, 'مرحله پایانی (ESRD): دیالیز یا پیوند کلیه', { size: 9.5, fill: '#fff', w: 800 })}`, 'نارسایی کلیه', shadow(sh));
  };

  A['polycystic-art'] = () => {
    const kN = kidney(86, 140, 0.68, {}).svg;
    const R = rng(13);
    let cysts = '';
    for (let i = 0; i < 26; i++) { const a = R() * Math.PI * 2, r = R() * 0.85; const x = -6 + Math.cos(a) * 34 * r, y = Math.sin(a) * 52 * r; cysts += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(6 + R() * 7).toFixed(1)}" fill="#f6e7c9" stroke="#b88a7a" stroke-width="1.2" opacity=".95"/>`; }
    const kP = `<g transform="translate(260 140) scale(-1 1) scale(1.1)"><path d="${KPATH}" fill="#c87c70" stroke="${C.kidLine}" stroke-width="1.6"/>${cysts}</g>`;
    return svg(360, 280, `${title('کلیه پلی‌کیستیک')}
      ${kN}${kP}
      ${lab(86, 228, 'normal kidney', 'کلیه طبیعی', { size: 9.5 })}${lab(260, 228, 'polycystic kidney', 'کیست‌های فراوان، کلیه بزرگ', { size: 9.5, fill: '#b0413e' })}
      ${f(180, 268, 'ارثی؛ کیست‌ها کم‌کم بافت کلیه را می‌گیرند و به نارسایی می‌رسد', { size: 8.8, fill: INK, w: 700 })}
      ${f(180, 46, 'poly- (زیاد) + cyst/o (کیسه) + ‎-ic‎', { size: 9, fill: MUTED, w: 700 })}`, 'کلیه پلی‌کیستیک');
  };

  A['kidney-tumors'] = () => {
    const sh = nid(), k1 = kidney(92, 116, 0.56, {}), k2 = kidney(268, 116, 0.56, {});
    const mass = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#f2e3c6" stroke="#a8801f" stroke-width="1.6"/><circle cx="${x - r / 3}" cy="${y - r / 3}" r="${r / 3}" fill="#fff" opacity=".4"/>`;
    return svg(360, 300, `${title('تومورهای کلیه و مثانه')}
      <g filter="url(#${sh})"><rect x="10" y="32" width="164" height="196" rx="16" fill="#e6f2fb"/><rect x="186" y="32" width="164" height="196" rx="16" fill="#fbe3df"/></g>
      ${k1.svg}${mass(84, 98, 16)}${k2.svg}${mass(262, 132, 12)}
      ${lab(92, 186, 'Wilms tumor', 'نفروبلاستوم: کودکان زیر ۵ سال', { size: 9.5 })}
      ${lab(268, 186, 'renal cell carcinoma', 'سرطان سلول کلیوی: بزرگسالان', { size: 9.5 })}
      <rect x="10" y="238" width="340" height="54" rx="14" fill="#fdf1d5"/>
      ${lab(90, 258, 'bladder cancer', 'سرطان مثانه', { size: 9.5 })}${f(254, 258, 'نشانه کلیدی: خون بی‌درد در ادرار', { size: 9, fill: INK, w: 800 })}${f(254, 278, 'سیگار مهم‌ترین عامل خطر است', { size: 8.6 })}`, 'تومورها', shadow(sh));
  };

  A['congenital-art'] = () => {
    const sh = nid();
    const shoe = `<path d="M44 76 C44 52 74 52 76 76 L80 128 C84 144 108 148 112 128 L116 76 C118 52 148 52 148 76 L144 132 C140 168 52 168 48 132Z" fill="${C.kid}" stroke="${C.kidLine}" stroke-width="1.6"/>`;
    const hypo = kidney(208, 108, 0.3, {}).svg + kidney(250, 104, 0.5, { flip: true }).svg;
    const ptosis = kidney(308, 152, 0.36, {}).svg;
    return svg(360, 280, `${title('ناهنجاری‌ها و جابه‌جایی‌های کلیه')}
      <g filter="url(#${sh})">${shoe}</g>
      ${hypo}
      <path d="M284 70 L332 70" stroke="#5b6b73" stroke-dasharray="4 3"/>${f(308, 62, 'جای طبیعی', { size: 8 })}${ptosis}<path d="M308 80 L308 120" stroke="#c0563b" stroke-width="2" stroke-dasharray="4 3"/>
      ${lab(96, 192, 'horseshoe kidney', 'دو کلیه از پایین به هم چسبیده', { size: 9.5 })}
      ${lab(222, 192, 'renal hypoplasia', 'کلیه کوچک و کم‌رشد', { size: 9.5 })}
      ${lab(312, 222, 'nephroptosis', 'افتادگی کلیه', { size: 9 })}
      ${f(180, 260, 'hypo- (کم) + ‎-plasia‎ (رشد)؛ nephr/o + ‎-ptosis‎ (افتادگی)', { size: 9, fill: INK, w: 700 })}`, 'ناهنجاری‌های کلیه', shadow(sh));
  };

  /* ================= tx: تشخیص و درمان ================= */
  /** نقشه کوچک دستگاه ادراری برای کارت‌ها؛ dye: رنگ ماده حاجب روی بخش‌ها */
  function miniTract(x, y, s, dye) {
    const k = s || 1, X = d => +(x + d * k).toFixed(1), Y = d => +(y + d * k).toFixed(1), D = dye || {};
    const kid = (cx, flip) => `<g transform="translate(${X(cx)} ${Y(20)}) scale(${(flip ? -0.24 : 0.24) * k} ${0.24 * k})"><path d="${KPATH}" fill="${D.k ? '#e9eef2' : C.kid}" stroke="${D.k ? '#8a96a0' : C.kidLine}" stroke-width="5"/></g>`;
    const uc = D.u ? '#e9eef2' : C.tube, ul = D.u ? '#8a96a0' : C.tubeLine;
    return tube(`M${X(-12)} ${Y(24)} C${X(-10)} ${Y(50)} ${X(-6)} ${Y(64)} ${X(-4)} ${Y(78)}`, uc, ul, 3 * k) + tube(`M${X(12)} ${Y(24)} C${X(10)} ${Y(50)} ${X(6)} ${Y(64)} ${X(4)} ${Y(78)}`, uc, ul, 3 * k) +
      kid(-20, false) + kid(20, true) +
      `<path d="M${X(-14)} ${Y(84)} C${X(-14)} ${Y(72)} ${X(14)} ${Y(72)} ${X(14)} ${Y(84)} C${X(14)} ${Y(94)} ${X(6)} ${Y(98)} ${X(0)} ${Y(98)} C${X(-6)} ${Y(98)} ${X(-14)} ${Y(94)} ${X(-14)} ${Y(84)}Z" fill="${D.b ? '#e9eef2' : C.bl}" stroke="${D.b ? '#8a96a0' : C.blLine}" stroke-width="1.3"/>` +
      tube(`M${X(0)} ${Y(98)} L${X(0)} ${Y(110)}`, D.r ? '#e9eef2' : C.tube, D.r ? '#8a96a0' : C.tubeLine, 2.4 * k);
  }
  A['imaging-art'] = () => {
    const sh = nid(), m = nid();
    const cardI = (x, y, bg, en, fa, sub, dye, extra) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="168" height="124" rx="14" fill="${bg}"/></g><rect x="${x + 8}" y="${y + 8}" width="64" height="108" rx="8" fill="#2d3a44"/>${miniTract(x + 40, y + 6, 0.9, dye)}${extra || ''}${lab(x + 120, y + 30, en, fa, { size: 10 })}${f(x + 120, y + 76, sub[0], { size: 8.2, fill: INK })}${f(x + 120, y + 92, sub[1], { size: 8.2, fill: INK })}`;
    return svg(360, 296, `${title('تصویربرداری از دستگاه ادراری')}
      ${cardI(8, 32, '#f4f6f8', 'KUB', 'عکس ساده شکم', ['بدون ماده حاجب', 'سنگ‌ها را نشان می‌دهد'], {})}
      ${cardI(184, 32, '#e6f2fb', 'IVP / IVU', 'پیلوگرافی وریدی', ['حاجب در سیاهرگ', 'کلیه آن را دفع می‌کند'], { k: 1, u: 1, b: 1 }, arrow(m, 196, 140, 210, 120, '#e0a526', 2))}
      ${cardI(8, 166, '#fdf1d5', 'RP', 'پیلوگرافی رتروگراد', ['حاجب از پایین', 'با سیستوسکوپ به بالا'], { k: 1, u: 1 }, arrow(m, 48, 276, 48, 240, '#e0a526', 2))}
      ${cardI(184, 166, '#fbe3df', 'VCUG', 'سیستواورتروگرافی', ['حاجب در مثانه', 'عکس هنگام ادرار'], { b: 1, r: 1 })}`, 'تصویربرداری', shadow(sh) + marker(m, '#e0a526'));
  };

  A['cystoscopy-art'] = () => {
    const b = bladder(150, 130, 0.95, { noUreters: true });
    return svg(360, 290, `${title('سیستوسکوپی: دیدن درون مثانه')}
      ${b.svg}
      <path d="M150 140 L150 268" stroke="#4d5b66" stroke-width="7" stroke-linecap="round"/><path d="M150 140 L150 268" stroke="#9aa9b3" stroke-width="3.6" stroke-linecap="round"/>
      <path d="M150 142 L118 104 M150 142 L182 104" stroke="#fff5b0" stroke-width="16" stroke-linecap="round" opacity=".55"/>
      <rect x="138" y="262" width="24" height="16" rx="4" fill="#3a4a56"/><circle cx="150" cy="282" r="7" fill="#2b2b2b" stroke="#9aa9b3" stroke-width="2"/>
      <path d="M162 270 C200 270 214 256 240 256" stroke="#e8a33a" stroke-width="2.6" fill="none"/>
      ${pin(150, 200, 228, 196)}${lab(286, 190, 'cystoscope', 'ابزار دیدن مثانه', { size: 9.5 })}
      ${pin(240, 256, 270, 240)}${lab(304, 234, 'light cord', 'کابل نور', { size: 9 })}
      ${pin(118, 112, 52, 86)}${lab(46, 66, 'bladder lining', 'دیواره مثانه', { size: 9.5 })}
      ${pin(146, 230, 60, 230)}${lab(46, 218, 'urethra', 'پیشابراه', { size: 9.5 })}
      <rect x="226" y="60" width="126" height="100" rx="12" fill="#fdf1d5"/>${f(289, 82, 'کاربردها:', { size: 9, fill: INK, w: 800 })}${f(289, 102, 'دیدن تومور و التهاب', { size: 8.6, fill: INK })}${f(289, 120, 'نمونه‌برداری (biopsy)', { size: 8.6, fill: INK })}${f(289, 138, 'برداشتن سنگ یا پولیپ', { size: 8.6, fill: INK })}`, 'سیستوسکوپی');
  };

  A['catheter-art'] = () => {
    const b = bladder(120, 132, 0.9, { urine: 10, noUreters: true });
    return svg(360, 290, `${title('سونداژ با سوند فولی')}
      ${b.svg}
      <path d="M120 130 L120 250 C120 270 150 274 190 268 L262 252" stroke="#3f8a8a" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="120" cy="140" r="11" fill="#bfe3e8" stroke="#3f8a8a" stroke-width="2"/><circle cx="120" cy="124" r="3" fill="#3f8a8a"/>
      <path d="M262 186 L332 186 L338 262 C338 272 330 276 322 276 L276 276 C268 276 260 272 260 262Z" fill="#fff" stroke="#9fb3c2" stroke-width="1.6"/><path d="M262 224 L336 224 L338 262 C338 272 330 276 322 276 L276 276 C268 276 260 272 260 262Z" fill="${C.urine}" opacity=".75"/>
      ${pin(110, 140, 40, 70)}${lab(46, 50, 'balloon', 'بادکنک نگهدارنده', { size: 9.5 })}
      ${pin(120, 124, 196, 72)}${lab(232, 52, 'drainage eyes', 'سوراخ‌های تخلیه', { size: 9.5 })}
      ${pin(124, 220, 196, 200)}${lab(214, 160, 'Foley catheter', 'سوند فولی (ماندگار)', { size: 9.5 })}
      ${pin(300, 230, 300, 172)}${lab(300, 152, 'drainage bag', 'کیسه ادرار', { size: 9.5 })}
      ${f(60, 282, 'catheterization = cath', { size: 8.6, fill: INK, w: 800 })}`, 'سوند فولی');
  };

  A['hemodialysis-art'] = () => {
    const m = nid(), sh = nid();
    return svg(360, 300, `${title('همودیالیز: کلیه مصنوعی')}
      <g filter="url(#${sh})"><rect x="16" y="64" width="110" height="34" rx="16" fill="${C.skin}" stroke="${C.skinLine}"/></g>
      ${f(62, 176, 'دست بیمار (دسترسی عروقی)', { size: 8.6, fill: INK })}
      ${curve(m, 'M90 72 C120 40 170 40 196 70', C.art, 3)}${curve(m, 'M196 140 C170 170 120 150 96 96', C.vein, 3)}
      <g filter="url(#${sh})"><rect x="184" y="70" width="40" height="72" rx="10" fill="#eef2f5" stroke="#8a96a0" stroke-width="1.6"/></g>${[0, 1, 2, 3, 4].map(i => `<path d="M${190 + i * 7} 76 V136" stroke="#d9443a" stroke-width="2" opacity=".7"/>`).join('')}
      ${lab(204, 162, 'dialyzer', 'صافی (کلیه مصنوعی)', { size: 9.5 })}
      ${curve(m, 'M300 132 C266 132 248 118 228 112', '#2b86c5', 2, true)}${curve(m, 'M228 96 C248 90 266 76 300 76', '#a8801f', 2, true)}
      ${f(310, 150, 'دیالیزیت تازه', { size: 8.4, fill: '#2b86c5', w: 800 })}${f(310, 66, 'دیالیزیت با مواد زائد', { size: 8.4, fill: '#a8801f', w: 800 })}
      <rect x="20" y="194" width="320" height="92" rx="14" fill="#f7f4ee"/>
      <rect x="40" y="206" width="120" height="66" rx="8" fill="#fbe3df"/><rect x="200" y="206" width="120" height="66" rx="8" fill="#e6f2fb"/><path d="M180 202 V276" stroke="#5b6b73" stroke-width="2" stroke-dasharray="3 3"/>
      ${f(100, 222, 'خون', { size: 9, fill: INK, w: 800 })}${f(260, 222, 'مایع دیالیز', { size: 9, fill: INK, w: 800 })}
      ${arrow(m, 130, 246, 222, 246, '#a8801f', 2)}${t(100, 250, 'urea, K⁺', { size: 9, w: 800, sym: true })}${f(180, 290, 'غشای نیمه‌تراوا: مواد زائد از خون به مایع دیالیز می‌روند', { size: 8.4, fill: INK })}`, 'همودیالیز', marker(m) + shadow(sh));
  };

  A['pd-art'] = () => {
    const m = nid();
    return svg(360, 290, `${title('دیالیز صفاقی: صفاق، صافی است')}
      <path d="M110 60 C70 70 64 130 70 180 C76 236 100 262 150 262 C200 262 224 236 230 180 C236 130 230 70 190 60Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.6"/>
      <path d="M96 120 C96 96 204 96 204 120 L204 196 C204 220 96 220 96 196Z" fill="#d9effa" stroke="#3b6fd4" stroke-width="1.6" stroke-dasharray="5 3"/>
      ${[0, 1, 2, 3, 4, 5].map(i => `<ellipse cx="${118 + (i % 3) * 32}" cy="${136 + Math.floor(i / 3) * 40}" rx="14" ry="10" fill="#f6c9b8" stroke="#d99a86"/>`).join('')}
      <path d="M200 170 C230 170 250 150 262 120 L274 70" stroke="#5b6b73" stroke-width="3" fill="none"/>
      <rect x="258" y="30" width="44" height="40" rx="8" fill="#eaf6fd" stroke="#6db4d6"/><rect x="292" y="222" width="52" height="44" rx="8" fill="#f6e7b2" stroke="#c9a64a"/>
      <path d="M262 120 C290 150 312 190 318 222" stroke="#5b6b73" stroke-width="3" fill="none" stroke-dasharray="6 3"/>
      ${arrow(m, 282, 84, 272, 110, '#2b86c5', 2)}${arrow(m, 296, 170, 310, 198, '#a8801f', 2)}
      ${f(250, 44, 'مایع تازه', { size: 8.6, fill: '#2b86c5', w: 800, anchor: 'end' })}${f(286, 248, 'مایع با مواد زائد', { size: 8.6, fill: '#a8801f', w: 800, anchor: 'end' })}
      ${pin(150, 210, 60, 236)}${lab(52, 252, 'peritoneal cavity', 'حفره صفاق', { size: 9.5 })}
      ${pin(240, 160, 330, 140)}${lab(320, 120, 'catheter', 'کاتتر', { size: 9.5 })}
      ${f(150, 284, 'CAPD: چند بار در روز، سرپایی؛ CCPD: شب‌ها با دستگاه', { size: 8.6, fill: INK, w: 700 })}`, 'دیالیز صفاقی', marker(m));
  };

  A['eswl-art'] = () => {
    const k = kidneySection(150, 100, 0.85, { vessels: false });
    let waves = '';
    for (let i = 0; i < 5; i++) waves += `<path d="M${118 - i * 10} ${232 - i * 12} Q150 ${212 - i * 22} ${182 + i * 10} ${232 - i * 12}" stroke="#7cc4ef" stroke-width="2.4" fill="none" opacity="${1 - i * 0.15}"/>`;
    return svg(360, 300, `${title('سنگ‌شکنی برون‌اندامی (ESWL)')}
      <path d="M40 186 C80 176 220 176 260 186" stroke="${C.skinLine}" stroke-width="2" fill="none" stroke-dasharray="6 4"/>${f(30, 176, 'پوست', { size: 8.4, anchor: 'start' })}
      ${k.svg}${stone(k.P.pelvis[0] - 4, k.P.pelvis[1], 7, 3)}
      ${waves}<path d="M110 250 L190 250 L180 276 L120 276Z" fill="#8a96a0" stroke="#5b6b73"/>
      ${pin(150, 268, 238, 262)}${lab(290, 256, 'shock wave generator', 'مولد موج ضربه‌ای', { size: 9 })}
      ${pin(k.P.pelvis[0] - 4, k.P.pelvis[1] - 6, 260, 64)}${lab(298, 50, 'stone', 'سنگ', { size: 9.5, fill: '#6f522c' })}
      ${f(300, 112, 'تکه‌های ریز سنگ', { size: 8.6, fill: INK, w: 800 })}${f(300, 128, 'با ادرار دفع می‌شوند', { size: 8.6, fill: INK, w: 800 })}
      ${f(300, 168, 'extra- (بیرون)', { size: 8.6 })}${f(300, 184, 'corpor/o (بدن)', { size: 8.6 })}${f(300, 200, 'lith/o + ‎-tripsy‎', { size: 8.6 })}`, 'ESWL');
  };

  A['transplant-art'] = () => {
    const kL = kidney(118, 80, 0.32, { fill: '#9c8a88', fill2: '#b9a9a6' }), kR = kidney(242, 80, 0.32, { flip: true, fill: '#9c8a88', fill2: '#b9a9a6' });
    const kNew = kidney(104, 192, 0.42, { flip: true });
    return svg(360, 300, `${title('پیوند کلیه')}
      ${tube('M180 40 L180 150 C180 170 160 186 140 196', '#e5675c', C.artLine, 7)}${tube('M180 150 C180 170 200 186 224 200', '#e5675c', C.artLine, 7)}
      ${kL.svg}${kR.svg}
      ${tube(`M${kNew.P.hilum[0]} ${kNew.P.hilum[1]} C140 196 140 200 150 196`, C.art, C.artLine, 3)}
      ${kNew.svg}
      <path d="M150 244 C148 226 212 226 210 244 C212 262 196 272 180 274 C164 272 148 262 150 244Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.6"/>
      ${tube(`M${kNew.P.ureter[0]} ${kNew.P.ureter[1] - 20} C120 236 140 244 156 244`, C.tube, C.tubeLine, 3.4)}
      ${pin(kL.P.lateral[0] + 6, kL.P.lateral[1], 46, 70)}${lab(46, 52, 'native kidneys', 'کلیه‌های بیمار (می‌مانند)', { size: 9 })}
      ${pin(kNew.P.lateral[0] - 4, kNew.P.lateral[1], 34, 214)}${lab(40, 230, 'donor kidney', 'کلیه اهدایی در لگن', { size: 9.5, fill: '#b0413e' })}
      ${pin(146, 194, 268, 180)}${lab(300, 166, 'iliac vessels', 'رگ‌های ایلیاک', { size: 9 })}
      ${pin(208, 252, 268, 250)}${lab(302, 238, 'bladder', 'مثانه', { size: 9 })}
      ${f(180, 292, 'با یک کلیه سالم هم می‌شود زندگی عادی داشت', { size: 8.8, fill: INK, w: 700 })}`, 'پیوند کلیه');
  };

  A['surgery-suffixes'] = () => {
    const items = [['-ectomy', 'برداشتن', 'nephrectomy', '#b0413e'], ['-tomy', 'برش', 'cystotomy', '#c0563b'], ['-stomy', 'منفذ تازه', 'nephrostomy', '#a8801f'], ['-pexy', 'تثبیت', 'nephropexy', '#3f8a05'],
      ['-plasty', 'ترمیم', 'pyeloplasty', '#2b86c5'], ['-rrhaphy', 'بخیه', 'cystorrhaphy', '#6d4bc3'], ['-lithotomy', 'درآوردن سنگ', 'nephrolithotomy', '#6f522c'], ['-tripsy', 'خرد کردن', 'lithotripsy', '#17a398']];
    let g = '';
    items.forEach((it, i) => {
      const x = 10 + (i % 2) * 174, y = 32 + Math.floor(i / 2) * 62;
      g += `<rect x="${x}" y="${y}" width="166" height="54" rx="12" fill="${it[3]}" opacity=".1"/><rect x="${x}" y="${y}" width="6" height="54" rx="3" fill="${it[3]}"/>`;
      g += `${t(x + 18, y + 22, it[0], { size: 11, w: 900, anchor: 'start', fill: it[3] })}${f(x + 156, y + 22, it[1], { size: 9.5, fill: INK, w: 800, anchor: 'end' })}${t(x + 156, y + 44, it[2], { size: 9, anchor: 'end', fill: MUTED })}`;
    });
    return svg(360, 290, `${title('پسوندهای جراحی روی کلیه و مثانه')}${g}`, 'پسوندهای جراحی');
  };

  A['stent-conduit'] = () => {
    const sh = nid(), k = kidneySection(80, 82, 0.5, { vessels: false });
    return svg(360, 300, `${title('استنت میزنای و مجرای ایلئومی')}
      <g filter="url(#${sh})"><rect x="8" y="32" width="164" height="232" rx="16" fill="#fdf1d5"/><rect x="188" y="32" width="164" height="232" rx="16" fill="#e6f2fb"/></g>
      ${tube(`M${k.P.ureter[0]} ${k.P.ureter[1]} C${k.P.ureter[0] + 2} 150 104 170 104 196`, C.pel, C.pelLine, 7)}${k.svg}
      <path d="M78 80 C70 78 70 90 78 88 L94 90 C${k.P.ureter[0] + 2} 120 ${k.P.ureter[0] - 2} 160 104 198 C96 206 110 212 112 202" stroke="#3b6fd4" stroke-width="2.2" fill="none"/>
      <path d="M80 214 C78 196 130 196 128 214 C130 230 116 238 104 240 C92 238 78 230 80 214Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.4"/>
      ${lab(90, 252, 'ureteral stent', 'لوله‌ای از کلیه تا مثانه', { size: 9.5, fill: '#24479a' })}
      ${tube('M232 70 C236 110 250 140 262 160', C.tube, C.tubeLine, 4)}${tube('M312 70 C308 110 290 140 278 160', C.tube, C.tubeLine, 4)}
      <path d="M244 160 C244 150 300 150 300 160 L300 178 C300 188 244 188 244 178Z" fill="#f6c9b8" stroke="#d99a86" stroke-width="1.6"/>
      <circle cx="320" cy="200" r="10" fill="#e5675c" stroke="#b0413e"/><path d="M300 172 C312 176 316 186 318 192" stroke="#d99a86" stroke-width="6" fill="none"/>
      <rect x="306" y="210" width="30" height="34" rx="8" fill="#f6e7b2" stroke="#c9a64a"/>
      ${pin(272, 168, 220, 210)}${lab(232, 222, 'ileum segment', 'تکه‌ای از روده باریک', { size: 9 })}
      ${f(326, 258, 'کیسه ادرار', { size: 8.4, fill: INK, anchor: 'end' })}
      ${lab(270, 50, 'ileal conduit', 'وقتی مثانه برداشته شده', { size: 9.5, fill: '#24479a' })}`, 'استنت و مجرای ایلئومی', shadow(sh));
  };

  A['egfr-gauge'] = () => {
    const st = [['G1', '≥ 90', '#3f8a05', 'طبیعی'], ['G2', '60–89', '#7aa70a', 'خفیف'], ['G3a', '45–59', '#d4a017', 'خفیف تا متوسط'], ['G3b', '30–44', '#e2683c', 'متوسط تا شدید'], ['G4', '15–29', '#d9443a', 'شدید'], ['G5', '< 15', '#8e2a26', 'نارسایی']];
    let g = '';
    st.forEach((s, i) => {
      const x = 14 + i * 56;
      g += `<rect x="${x}" y="70" width="52" height="${96 - i * 12}" rx="8" fill="${s[2]}" transform="translate(0 ${i * 12})"/>${t(x + 26, 190, s[0], { size: 11, w: 900, sym: true })}${t(x + 26, 206, s[1], { size: 9, sym: true, fill: MUTED, w: 800 })}${f(x + 26, 224, s[3], { size: 8.4, fill: INK })}`;
    });
    return svg(360, 280, `${title('مراحل بیماری مزمن کلیه بر پایه eGFR')}
      ${g}
      ${t(180, 54, 'eGFR (mL/min/1.73 m²)', { size: 9.5, sym: true, w: 800 })}
      ${f(180, 252, 'eGFR زیر ۶۰ بیش از سه ماه = بیماری مزمن کلیه (CKD)', { size: 9, fill: INK, w: 800 })}${f(180, 272, 'G5 = مرحله پایانی (ESRD): دیالیز یا پیوند', { size: 8.8 })}`, 'مراحل CKD');
  };

  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* نِفرا — دنیای ۰: زبان کلیه (پایه همه دنیاها)
 * سطح ۱: دستگاه و متخصصان • سطح ۲: ریشه‌های کلیه و مجاری • سطح ۳: پیشوندها، پسوندها و دام‌ها
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: 'زبان کلیه', short: 'زبان کلیه', sub: 'اندام‌های دستگاه ادراری، اورولوژیست و نفرولوژیست، و ساخت واژه‌ها از ریشه، پیشوند و پسوند',
    color: '#B0413E', dark: '#7E2A28', light: '#FBE9E7',
    levels: ['دستگاه و متخصصان', 'ریشه‌های کلیه و مجاری', 'پیشوندها، پسوندها و دام‌ها'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'lx1', title: 'دستگاه ادراری', icon: '🫘', items: [
          L('چهار اندام', `${fig('system-overview', [], 'دستگاه ادراری')}${e('<b>urinary system</b>')} چهار بخش دارد: دو ${e('<b>kidney</b>')} (کلیه)، دو ${e('<b>ureter</b>')} (میزنای)، یک ${e('<b>urinary bladder</b>')} (مثانه) و یک ${e('<b>urethra</b>')} (پیشابراه). کار اصلی‌اش بیرون بردن اوره، ماده زائد سوخت‌وساز پروتئین، از خون است.`),
          L('مسیر ادرار', `${fig('urine-flow', [], 'از کلیه تا بیرون')}${fig('urinary-organs', ['اندام‌های دستگاه ادراری'], 'اندام‌ها و کارشان')}کلیه ادرار می‌سازد، میزنای آن را به مثانه می‌برد، مثانه نگهش می‌دارد و پیشابراه بیرونش می‌ریزد.${memo('ureter دو e دارد و دو تاست؛ urethra یک e دارد و یکی است.')}`),
          M('کدام اندام ادرار را می‌سازد؟', ['kidney', 'ureter', 'urinary bladder', 'urethra'], 'کلیه خون را تصفیه می‌کند و ادرار می‌سازد.', null, F('urine-flow', [])),
          M('لوله‌ای که ادرار را از مثانه به بیرون می‌برد…', ['urethra', 'ureter', 'renal pelvis', 'calyx'], 'urethra یکی است و ادرار را بیرون می‌برد.'),
          T('هر انسان سالم دو میزنای و یک پیشابراه دارد.', true, 'دو ureter و یک urethra.', F('system-overview', [])),
          O('مسیر ادرار را از ساخت تا بیرون بچین', ['kidney', 'ureter', 'urinary bladder', 'urethra'], 'کلیه، میزنای، مثانه، پیشابراه.'),
          P('هر اندام را به کارش وصل کن', [['kidney', 'تصفیه خون و ساخت ادرار'], ['ureter', 'بردن ادرار به مثانه'], ['urinary bladder', 'ذخیره ادرار'], ['urethra', 'بیرون ریختن ادرار']], 'کار اندام‌ها.'),
          B('ماده زائد اصلی که کلیه از خون برمی‌دارد ___ است.', ['urea', 'glucose', 'albumin'], 'urea از سوخت‌وساز پروتئین در کبد ساخته می‌شود.'),
          S('املای انگلیسی «پیشابراه» را بنویس', 'urethra', 'urethr/o؛ یک e.', 'ure…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: 'اورولوژیست یا نفرولوژیست؟', icon: '👩‍⚕️', items: [
          L('دو متخصص', `${fig('specialists', [], 'دو متخصص')}${tbl([['متخصص', 'کار'], [e('urologist'), 'جراح مجاری ادراری زن و مرد و دستگاه تناسلی مرد: سنگ، مثانه، پروستات'], [e('nephrologist'), 'متخصص داخلی کلیه: نارسایی کلیه، دیالیز و پیوند'], [e('urogynecologist'), 'مشکلات ادراری مربوط به دستگاه تناسلی زنانه']])}`),
          L('ادراری-تناسلی', `در مرد، پیشابراه هم ادرار را می‌برد و هم مایع منی را؛ برای همین گاهی به این دستگاه ${e('<b>genitourinary (GU)</b>')} می‌گویند.${wb('genit/o', 'urin/o', '-ary')} ← ادراری-تناسلی${pearl('در سناریوی کاربردی کتاب، خانم Betty Garble که ۴۶ سال دارد و پنج فرزند به دنیا آورده، در کنترل ادرارش مشکل دارد و پزشک او را به urologist ارجاع داده است.')}${memo('nephr یعنی کلیه؛ پس nephrologist پزشک کلیه است. ur یعنی ادرار؛ urologist پزشک مجاری ادرار.')}`),
          M('بیمار دیالیزی بیشتر زیر نظر کدام متخصص است؟', ['nephrologist', 'urologist', 'cardiologist', 'neurologist'], 'nephr/o یعنی کلیه.', null, F('specialists', [])),
          M('جراحی سنگ مثانه و پروستات کار کدام متخصص است؟', ['urologist', 'nephrologist', 'dermatologist', 'radiologist'], 'urologist جراح مجاری ادراری است.'),
          T('اورولوژیست بیماری‌های دستگاه تناسلی مرد را هم درمان می‌کند.', true, 'چون پیشابراه مرد مشترک است.'),
          W('واژه‌ای بساز به معنی «متخصص کلیه»', ['nephr/o', '-logist'], ['cyst/o', '-itis', 'ur/o'], 'nephrologist.'),
          P('هر واژه را به معنی‌اش وصل کن', [['urology', 'اورولوژی'], ['nephrology', 'کلیه‌شناسی'], ['genitourinary', 'ادراری-تناسلی'], ['urologist', 'متخصص اورولوژی']], 'رشته‌ها.'),
          B('اختصار GU یعنی ___.', ['genitourinary', 'gastrourinary', 'glomerular unit'], 'genit/o + urin/o + ‎-ary‎.'),
          S('املای انگلیسی «متخصص کلیه» را بنویس', 'nephrologist', 'nephr/o + ‎-logist‎.', 'neph…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: 'آناتومی یک واژه', icon: '🧩', items: [
          L('پازل واژه', `${fig('wordparts', [], 'ریشه + ریشه + پسوند')}هر واژه از قطعه‌هایی ساخته می‌شود:<br>• <b>ریشه</b>: معنی اصلی؛ مثل ${e('nephr')} یعنی کلیه<br>• <b>پیشوند</b>: اول واژه؛ مثل ${e('poly-')} یعنی زیاد<br>• <b>پسوند</b>: آخر واژه؛ مثل ${e('-itis')} یعنی التهاب<br>• <b>واکه رابط</b> (معمولاً ${e('o')}): ${e('nephr/o/lith')}`),
          L('قاعده طلایی', `معنی را از <b>پسوند</b> شروع کن، بعد ریشه‌ها را از اول بخوان:<br>${wb('pyel/o', 'nephr/o', '-itis')} ← «التهاب لگنچه و کلیه»<br>${wb('cyst/o', '-scopy')} ← «مشاهده درون مثانه»<br>${wb('nephr/o', '-megaly')} ← «بزرگی کلیه»${memo('اگر پسوند با حرف صدادار شروع شود، واکه رابط حذف می‌شود: nephr + -itis می‌شود nephritis، نه nephroitis.')}`),
          M(`در ${e('<b>cystoscopy</b>')}، پسوند کدام است؟`, ['-scopy', 'cyst/o', 'o', '-copy'], '‎-scopy‎ یعنی مشاهده با ابزار.', null, F('wordparts', [])),
          M(`${e('<b>nephritis</b>')} یعنی…`, ['التهاب کلیه', 'سنگ کلیه', 'بزرگی کلیه', 'افتادگی کلیه'], 'nephr/o + ‎-itis‎.'),
          T('املای درست «التهاب کلیه» nephroitis است.', false, 'پیش از ‎-itis‎ واکه رابط حذف می‌شود: nephritis.'),
          W('واژه‌ای بساز به معنی «التهاب مثانه»', ['cyst/o', '-itis'], ['nephr/o', '-lith', 'poly-'], 'cystitis.'),
          P('هر قطعه را به نوعش وصل کن', [['poly-', 'پیشوند'], ['pyel/o', 'ریشه'], ['-uria', 'پسوند'], ['o', 'واکه رابط']], 'قطعه‌های واژه.'),
          B('«بزرگی کلیه» ___ است.', ['nephromegaly', 'nephrolith', 'nephroptosis'], 'nephr/o + ‎-megaly‎.'),
          S('املای انگلیسی «التهاب کلیه» را بنویس', 'nephritis', 'nephr + ‎-itis‎؛ بی واکه رابط.', 'neph…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'lx4', title: 'ریشه‌های کلیه', icon: '🫘', items: [
          L('نقشه ریشه‌ها', `${fig('root-map', [], 'نقشه ریشه‌ها')}${tbl([['ریشه', 'معنی'], [e('nephr/o, ren/o'), 'کلیه'], [e('glomerul/o'), 'گلومرول'], [e('pyel/o'), 'لگنچه کلیه'], [e('cali/o, calic/o'), 'کالیس (جام)'], [e('cortic/o'), 'قشر'], [e('medull/o'), 'مغز']])}`),
          L('دو ریشه برای کلیه', `${fig('kidney-section', ['برش کلیه با برچسب‌ها'], 'ساختار کلیه')}${e('nephr/o')} یونانی است و بیشتر در نام بیماری و جراحی می‌آید: ${e('nephritis, nephrectomy')}. ${e('ren/o')} لاتین است و بیشتر در صفت‌ها: ${e('renal artery')}.${memo('pyel/o از واژه یونانی pyelos یعنی «تشت» آمده؛ لگنچه کلیه مثل تشت ادرار را جمع می‌کند.')}`),
          M('ریشه «لگنچه کلیه» کدام است؟', ['pyel/o', 'py/o', 'ren/o', 'cyst/o'], 'pyel/o؛ با py/o یعنی چرک اشتباه نشود.', null, F('root-map', [])),
          M('ریشه ren/o یعنی…', ['کلیه', 'مثانه', 'ادرار', 'سنگ'], 'renal = کلیوی.'),
          T('nephr/o و ren/o هر دو یعنی کلیه.', true, 'یونانی و لاتین.', F('kidney-section', [])),
          W('واژه‌ای بساز به معنی «التهاب گلومرول»', ['glomerul/o', '-itis'], ['pyel/o', '-ectomy', 'ren/o'], 'glomerulitis.'),
          P('هر ریشه را به بخش کلیه وصل کن', [['pyel/o', 'لگنچه'], ['calic/o', 'کالیس'], ['glomerul/o', 'گلومرول'], ['cortic/o', 'قشر']], 'ریشه‌ها.'),
          B('صفت «کلیوی» ___ است.', ['renal', 'vesical', 'urethral'], 'ren/o + ‎-al‎.'),
          S('املای انگلیسی «التهاب لگنچه» را بنویس', 'pyelitis', 'pyel/o + ‎-itis‎.', 'pye…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: 'ریشه‌های مجاری', icon: '💧', items: [
          L('از میزنای تا سوراخ', `${tbl([['ریشه', 'معنی'], [e('ureter/o'), 'میزنای'], [e('cyst/o, vesic/o'), 'مثانه'], [e('trigon/o'), 'مثلث مثانه'], [e('urethr/o'), 'پیشابراه'], [e('meat/o'), 'سوراخ، دهانه'], [e('ur/o, urin/o'), 'ادرار، مجاری ادراری']])}`),
          L('دو ریشه برای مثانه', `${e('cyst/o')} یونانی است و ${e('vesic/o')} لاتین؛ هر دو یعنی مثانه.<br>${wb('cyst/o', '-cele')} ← فتق مثانه<br>${wb('intra-', 'vesic/o', '-al')} ← درون مثانه${memo('cyst/o یعنی هر کیسه؛ cystic هم برای مثانه به کار می‌رود، هم کیسه صفرا و هم کیست. از جمله بفهم کدام است.')}`),
          M('ریشه «پیشابراه» کدام است؟', ['urethr/o', 'ureter/o', 'uter/o', 'ur/o'], 'urethr/o؛ ureter/o میزنای است.'),
          M('ریشه vesic/o یعنی…', ['مثانه', 'سیاهرگ', 'کلیه', 'تاول'], 'vesical = مثانه‌ای.'),
          T('meat/o یعنی سوراخ؛ urinary meatus دهانه بیرونی پیشابراه است.', true, 'meatus.'),
          W('واژه‌ای بساز به معنی «سنگ میزنای»', ['ureter/o', '-lith'], ['urethr/o', '-itis', 'cyst/o'], 'ureterolith.'),
          P('هر ریشه را به عضوش وصل کن', [['cyst/o', 'مثانه'], ['ureter/o', 'میزنای'], ['urethr/o', 'پیشابراه'], ['trigon/o', 'مثلث مثانه']], 'ریشه‌های مجاری.'),
          B('برش سوراخ پیشابراه برای گشاد کردنش ___ است.', ['meatotomy', 'cystotomy', 'nephrotomy'], 'meat/o + ‎-tomy‎.'),
          S('املای انگلیسی «التهاب مثانه» را بنویس', 'cystitis', 'cyst/o + ‎-itis‎.', 'cys…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: 'صفت‌ها و جاها', icon: '📍', items: [
          L('صفت‌های مجاری', `${tbl([['اسم', 'صفت'], [e('kidney'), e('renal, nephric')], [e('bladder'), e('cystic, vesical')], [e('ureter'), e('ureteral')], [e('urethra'), e('urethral')], [e('urine'), e('urinary')], [e('meatus'), e('meatal')], [e('renal pelvis'), e('pyelitic')]])}`),
          L('پیشوندهای جا', `${fig('position-prefixes', [], 'کجای کلیه؟')}• ${e('<b>suprarenal</b>')}: بالای کلیه؛ غده فوق‌کلیوی<br>• ${e('<b>perirenal</b>')}: پیرامون کلیه<br>• ${e('<b>intrarenal</b>')}: درون کلیه<br>• ${e('<b>interrenal</b>')}: میان دو کلیه<br>• ${e('<b>transurethral</b>')}: از راه پیشابراه${memo('supra بالاست، peri دور است، intra درون است و inter میان دو چیز؛ trans یعنی از میانش رد شدن.')}`),
          M('غده‌ای که بالای کلیه است را چه می‌نامند؟', ['suprarenal gland', 'perirenal gland', 'intrarenal gland', 'postrenal gland'], 'supra- یعنی بالای.', null, F('position-prefixes', [])),
          M(`${e('<b>intravesical</b>')} یعنی…`, ['درون مثانه', 'بیرون مثانه', 'میان دو کلیه', 'از راه پیشابراه'], 'intra- + vesic/o + ‎-al‎.'),
          T('صفت ureteral به پیشابراه مربوط است.', false, 'ureteral به میزنای مربوط است؛ صفت پیشابراه urethral است.'),
          W('واژه‌ای بساز به معنی «پیرامون کلیه»', ['peri-', 'ren/o', '-al'], ['supra-', 'cyst/o', '-itis'], 'perirenal.'),
          P('هر پیشوند را به معنی‌اش وصل کن', [['supra-', 'بالای'], ['peri-', 'پیرامون'], ['inter-', 'میان'], ['trans-', 'از میان']], 'پیشوندهای جا.'),
          B('جراحی ___ از راه پیشابراه انجام می‌شود.', ['transurethral', 'suprarenal', 'perirenal'], 'trans- + urethr/o + ‎-al‎.'),
          S('املای انگلیسی «کلیوی» را بنویس', 'renal', 'ren/o + ‎-al‎.', 're…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'lx7', title: 'پیشوندهای پرکاربرد', icon: '⬅️', items: [
          L('پیشوندها', `${tbl([['پیشوند', 'معنی', 'مثال'], [e('a-, an-'), 'بدون', e('anuria')], [e('dys-'), 'دردناک، دشوار', e('dysuria')], [e('poly-'), 'زیاد', e('polyuria')], [e('hyper-'), 'بیش از حد', e('hyperkalemia')], [e('hypo-'), 'کم', e('hypospadias')], [e('retro-'), 'پشت، رو به عقب', e('retrograde')], [e('extra-'), 'بیرون از', e('extracorporeal')]])}`),
          L('در بالین', `${fig('uria-family', [], 'خانواده ‎-uria‎')}${wb('an-', '-uria')} ← بی‌ادراری<br>${wb('poly-', '-uria')} ← پرادراری<br>${wb('dys-', '-uria')} ← ادرار دردناک${pearl('در گزارش مشاوره کتاب Fremgen، مرد ۳۶ ساله‌ای با درد پهلوی راست و خون در ادرار پیش اورولوژیست آمده است؛ یعنی hematuria.')}${memo('olig/o مثل «الیگارشی» یعنی کم؛ oliguria یعنی ادرار کم.')}`),
          M('پیشوند dys- یعنی…', ['دردناک، دشوار', 'زیاد', 'بدون', 'پشت'], 'dysuria.'),
          M(`${e('<b>polyuria</b>')} یعنی…`, ['ادرار زیاد', 'ادرار کم', 'ادرار شبانه', 'ادرار دردناک'], 'poly- یعنی زیاد.'),
          T('retro- در retroperitoneal یعنی پشت صفاق.', true, 'کلیه‌ها پشت صفاق‌اند.'),
          W('واژه‌ای بساز به معنی «ادرار دردناک»', ['dys-', '-uria'], ['poly-', 'nephr/o', '-lith'], 'dysuria.'),
          P('هر پیشوند را به معنی‌اش وصل کن', [['an-', 'بدون'], ['poly-', 'زیاد'], ['hypo-', 'کم'], ['extra-', 'بیرون از']], 'پیشوندها.'),
          B('نبود ادرار ___ است.', ['anuria', 'oliguria', 'dysuria'], 'an- + ‎-uria‎.'),
          S('املای انگلیسی «ادرار دردناک» را بنویس', 'dysuria', 'dys- + ‎-uria‎.', 'dys…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: 'پسوندها', icon: '➡️', items: [
          L('پسوندهای ادراری', `${tbl([['پسوند', 'معنی', 'مثال'], [e('-uria'), 'حالت ادرار', e('hematuria')], [e('-lith'), 'سنگ', e('nephrolith')], [e('-lithiasis'), 'سنگ‌داشتن', e('nephrolithiasis')], [e('-tripsy'), 'خرد کردن', e('lithotripsy')], [e('-ptosis'), 'افتادگی', e('nephroptosis')], [e('-megaly'), 'بزرگی', e('nephromegaly')], [e('-pexy'), 'تثبیت', e('nephropexy')]])}`),
          L('سنگ از ریشه تا پسوند', `${e('lith/o')} ریشه سنگ است و ${e('-lith')} پسوندش:<br>${wb('lith/o', '-tripsy')} ← سنگ‌شکنی<br>${wb('cyst/o', '-lith')} ← سنگ مثانه<br>${wb('nephr/o', 'lith/o', '-iasis')} ← سنگ کلیه${memo('ptosis را «توسیس» بخوان؛ p اولش بی‌صداست، مثل pneumonia.')}`),
          M('پسوند ‎-tripsy‎ یعنی…', ['خرد کردن', 'برش', 'تثبیت', 'افتادگی'], 'lithotripsy.'),
          M(`${e('<b>nephroptosis</b>')} یعنی…`, ['افتادگی کلیه', 'بزرگی کلیه', 'سنگ کلیه', 'نرمی کلیه'], 'floating kidney.'),
          T('‎-lith‎ و lith/o هر دو به سنگ اشاره دارند.', true, 'یکی پسوند و یکی ریشه.'),
          W('واژه‌ای بساز به معنی «تثبیت کلیه با جراحی»', ['nephr/o', '-pexy'], ['cyst/o', '-tripsy', 'pyel/o'], 'nephropexy.'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-megaly', 'بزرگی'], ['-ptosis', 'افتادگی'], ['-malacia', 'نرمی'], ['-sclerosis', 'سفتی']], 'پسوندها.'),
          B('سنگ‌شکنی ___ است.', ['lithotripsy', 'lithotomy', 'nephrolith'], 'lith/o + ‎-tripsy‎.'),
          S('املای انگلیسی «بزرگی کلیه» را بنویس', 'nephromegaly', 'nephr/o + ‎-megaly‎.', 'nephro…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: 'دام‌های همزاد', icon: '⚖️', items: [
          L('دام‌ها', `${fig('twins', [], 'دام‌های همزاد')}${vs(['ureter', 'میزنای؛ دو تا؛ کلیه تا مثانه'], ['urethra', 'پیشابراه؛ یکی؛ مثانه تا بیرون'])}${vs(['vesical', 'صفت: مثانه‌ای'], ['vesicle', 'اسم: تاول'])}`),
          L('سه دام دیگر', `${vs(['creatinine', 'ماده زائد؛ در نارسایی کلیه بالا می‌رود'], ['creatine', 'ترکیبی در عضله'])}${vs(['enuresis', 'شب‌ادراری'], ['anuresis', 'ادرار نکردن'])}${memo('cyst/o مثانه است و cyt/o سلول؛ ureter/o میزنای است و uter/o رحم. یک حرف، یک عضو دیگر!')}`),
          M('لوله‌ای که ادرار را از کلیه به مثانه می‌برد…', ['ureter', 'urethra', 'uterus', 'meatus'], 'ureter؛ دو تا.', null, F('twins', [])),
          M(`${e('<b>vesicle</b>')} یعنی…`, ['تاول، کیسه کوچک', 'مثانه‌ای', 'میزنای', 'سنگ'], 'vesical صفت مثانه است.'),
          T('enuresis یعنی ادرار نکردن.', false, 'enuresis شب‌ادراری است؛ ادرار نکردن anuresis است.'),
          O('از بالا به پایین ترتیب اندام‌ها را بچین', ['kidney', 'ureter', 'bladder', 'urethra'], 'مسیر ادرار.'),
          P('هر واژه را به معنی‌اش وصل کن', [['creatinine', 'ماده زائد عضله'], ['cyt/o', 'سلول'], ['uter/o', 'رحم'], ['vesicle', 'تاول']], 'دام‌ها.'),
          B('ماده زائدی که در نارسایی کلیه در خون بالا می‌رود ___ است.', ['creatinine', 'creatine', 'glucose'], 'creatinine.'),
          S('املای انگلیسی «میزنای» را بنویس', 'ureter', 'ureter/o؛ دو e.', 'ure…'),
          N('m2r:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نِفرا — دنیای ۱: کلیه و نفرون
 * سطح ۱: کلیه از بیرون و درون • سطح ۲: نفرون و ساخت ادرار • سطح ۳: خون، هورمون‌ها و هم‌ایستایی */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'kd', sym: 'Kd', name: 'کلیه و نفرون', short: 'کلیه و نفرون', sub: 'جای کلیه، قشر و مغز، کالیس و لگنچه، نفرون و گلومرول، سه گام ساخت ادرار، رگ‌ها و هورمون‌های کلیه',
    color: '#6D4BC3', dark: '#4B2F95', light: '#EFE9FB',
    levels: ['کلیه از بیرون و درون', 'نفرون و ساخت ادرار', 'خون، هورمون‌ها و هم‌ایستایی'],
    gens: EA.genIds('kd'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'kd1', title: 'جای کلیه‌ها', icon: '📍', items: [
          L('پشت صفاق', `${fig('kidney-location', [], 'برش عرضی شکم')}کلیه‌ها دو اندام لوبیایی به اندازه مشت‌اند که در ناحیه کمر، دو طرف ستون مهره، <b>پشت صفاق</b> قرار دارند: ${e('<b>retroperitoneal</b>')}. کلیه چپ کمی بالاتر و بزرگ‌تر از راست است.`),
          L('ناف کلیه', `${fig('kidneys-vessels', ['کلیه‌ها، رگ‌ها و غده فوق‌کلیوی'], 'کلیه‌ها و رگ‌ها')}لبه داخلی هر کلیه فرورفتگی‌ای دارد به نام ${e('<b>hilum</b>')}؛ سرخرگ کلیه از آن وارد و سیاهرگ کلیه و میزنای از آن خارج می‌شوند. روی هر کلیه یک ${e('adrenal gland')} نشسته است.${memo('hilum در لاتین یعنی «چیز کوچک»؛ همان گودی کوچکی که دانه لوبیا هم دارد.')}`),
          M('جای کلیه‌ها نسبت به صفاق…', ['پشت صفاق (retroperitoneal)', 'درون حفره صفاق', 'جلوی روده‌ها', 'درون لگن'], 'retro- یعنی پشت.', null, F('kidney-location', [])),
          M('از کجای کلیه رگ‌ها و میزنای عبور می‌کنند؟', ['hilum', 'cortex', 'papilla', 'capsule'], 'ناف کلیه.'),
          T('کلیه چپ معمولاً کمی بالاتر از کلیه راست است.', true, 'کبد کلیه راست را پایین‌تر نگه می‌دارد.', F('kidneys-vessels', [])),
          W('واژه‌ای بساز به معنی «پشت صفاق»', ['retro-', 'peritone/o', '-al'], ['supra-', 'nephr/o', '-itis'], 'retroperitoneal.'),
          P('هر بخش را به جایش وصل کن', [['hilum', 'گودی داخلی کلیه'], ['adrenal gland', 'روی کلیه'], ['renal capsule', 'پوشش نازک کلیه'], ['perinephric fat', 'چربی دور کلیه']], 'جای بخش‌ها.'),
          B('غده‌ای که روی هر کلیه نشسته ___ است.', ['adrenal gland', 'prostate gland', 'pituitary gland'], 'suprarenal gland.'),
          S('املای انگلیسی «ناف کلیه» را بنویس', 'hilum', 'واژه لاتین.', 'hi…'),
          N('t2f:kd')
        ]
      },
      {
        id: 'kd2', title: 'قشر و مغز', icon: '🔪', items: [
          L('برش طولی', `${fig('kidney-section-art', [], 'برش طولی کلیه')}در برش کلیه دو ناحیه دیده می‌شود: ${e('<b>renal cortex</b>')} (قشر) بیرونی و ${e('<b>renal medulla</b>')} (مغز) درونی. مغز از ${e('<b>renal pyramids</b>')} مثلثی ساخته شده که نوک هرکدام، ${e('renal papilla')}، رو به ناف است.`),
          L('روی شکل کتاب', `${fig('kidney-internal', ['قشر، مغز، هرم و پاپی'], 'ساختار درونی کلیه')}${vs(['cortex', 'بیرونی؛ پوسته؛ جسمک‌های کلیوی'], ['medulla', 'درونی؛ هرم‌ها؛ قوس‌ها و مجاری'])}${memo('medulla در لاتین یعنی مغز استخوان؛ در کلیه، غده فوق‌کلیوی و مغز تیره هم «مغز» داریم. cortex یعنی پوست درخت.')}`),
          M('بخش بیرونی کلیه کدام است؟', ['renal cortex', 'renal medulla', 'renal pelvis', 'calyx'], 'cortex یعنی پوسته.', null, F('kidney-section-art', [])),
          M('ساختارهای مثلثی مغز کلیه…', ['renal pyramids', 'calyces', 'glomeruli', 'rugae'], 'هرم‌های کلیه.'),
          T('نوک هر هرم کلیه رو به ناف است و papilla نام دارد.', true, 'renal papilla.', F('kidney-internal', [])),
          O('از بیرون به درون بچین', ['renal capsule', 'renal cortex', 'renal medulla', 'renal pelvis'], 'کپسول، قشر، مغز، لگنچه.'),
          P('هر بخش را به توضیحش وصل کن', [['renal cortex', 'بخش بیرونی'], ['renal medulla', 'بخش درونی'], ['renal pyramid', 'مثلث مغز'], ['renal papilla', 'نوک هرم']], 'برش کلیه.'),
          B('صفت «مربوط به قشر» ___ است.', ['cortical', 'medullary', 'caliceal'], 'cortic/o + ‎-al‎.'),
          S('املای انگلیسی «مغز کلیه» را بنویس', 'medulla', 'medull/o.', 'med…'),
          N('f2t:kd')
        ]
      },
      {
        id: 'kd3', title: 'کالیس و لگنچه', icon: '🏺', items: [
          L('قیف ادرار', `ادرار از نوک هرم‌ها به ${e('<b>calyx</b>')} (جام؛ جمع: ${e('calyces')}) می‌ریزد. کالیس‌های کوچک به هم می‌پیوندند و ${e('<b>renal pelvis</b>')} قیفی را می‌سازند که در ناف به ${e('ureter')} تبدیل می‌شود.${fig('calyx-stones', ['کالیس‌ها و میزنای'], 'کالیس‌ها')}`),
          L('ریشه‌ها', `${wb('calic/o', '-eal')} ← مربوط به کالیس<br>${wb('pyel/o', '-ectasis')} ← گشادی لگنچه${memo('calyx در یونانی یعنی «جام گل»؛ هر کالیس مثل جامی زیر نوک هرم است.')}`),
          M('بخش قیفی شکل که ادرار کالیس‌ها را جمع می‌کند…', ['renal pelvis', 'renal cortex', 'trigone', 'glomerulus'], 'pyel/o.'),
          M('جمع واژه calyx کدام است؟', ['calyces', 'calyxes', 'calyi', 'calyxa'], 'calyces یا calices.'),
          T('لگنچه کلیه در ناف به میزنای تبدیل می‌شود.', true, 'renal pelvis → ureter.', F('calyx-stones', [])),
          O('مسیر ادرار درون کلیه را بچین', ['renal papilla', 'calyx', 'renal pelvis', 'ureter'], 'پاپی، کالیس، لگنچه، میزنای.'),
          P('هر واژه را به معنی‌اش وصل کن', [['caliceal', 'مربوط به کالیس'], ['pyelitic', 'مربوط به لگنچه'], ['pyelectasis', 'گشادی لگنچه'], ['calyx', 'جام کلیه']], 'کالیس و لگنچه.'),
          B('ریشه «لگنچه» ___ است.', ['pyel/o', 'py/o', 'calic/o'], 'pyel/o.'),
          S('املای انگلیسی «جام کلیه» را بنویس', 'calyx', 'جمعش calyces.', 'cal…'),
          N('d2t:kd')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'kd4', title: 'نفرون', icon: '🔬', items: [
          L('واحد کار کلیه', `${fig('nephron-art', [], 'نفرون')}هر کلیه بیش از یک میلیون ${e('<b>nephron</b>')} دارد. هر نفرون دو بخش دارد:<br>• ${e('<b>renal corpuscle</b>')}: ${e('glomerulus')} (کلاف مویرگی) درون ${e('glomerular capsule')} یا کپسول بومن<br>• ${e('<b>renal tubule</b>')}: لوله‌ای که ادرار را کامل می‌کند`),
          L('روی شکل کتاب', `${fig('nephron-section', ['نفرون در کلیه'], 'جای نفرون در کلیه')}${memo('glomerulus از لاتین glomus یعنی «گلوله کاموا»؛ کلاف درهم مویرگ‌ها همین شکل را دارد.')}${pearl('با یک کلیه سالم هم می‌شود زندگی عادی داشت، چون تعداد نفرون‌ها بیش از نیاز بدن است.')}`),
          M('واحد عملکردی کلیه کدام است؟', ['nephron', 'neuron', 'glomerulus', 'calyx'], 'nephron.', null, F('nephron-art', [])),
          M('کلاف مویرگی درون کپسول بومن…', ['glomerulus', 'tubule', 'papilla', 'medulla'], 'glomerulus.'),
          T('جسمک کلیوی از گلومرول و کپسول بومن ساخته شده است.', true, 'renal corpuscle.'),
          W('واژه‌ای بساز به معنی «مربوط به گلومرول»', ['glomerul/o', '-ar'], ['nephr/o', '-itis', 'pyel/o'], 'glomerular.'),
          P('هر بخش نفرون را به توضیحش وصل کن', [['glomerulus', 'کلاف مویرگی'], ['glomerular capsule', 'کپسول بومن'], ['renal tubule', 'لوله نفرون'], ['renal corpuscle', 'گلومرول و کپسول']], 'نفرون.'),
          B('جمع glomerulus ___ است.', ['glomeruli', 'glomerulus', 'glomerulae'], 'glomeruli.'),
          S('املای انگلیسی «نفرون» را بنویس', 'nephron', 'nephr/o.', 'neph…'),
          N('t2f:kd')
        ]
      },
      {
        id: 'kd5', title: 'لوله‌ها و مجرای جمع‌کننده', icon: '〰️', items: [
          L('مسیر لوله', `${fig('nephron-detail', ['بخش‌های نفرون و مویرگ‌ها'], 'جزئیات نفرون')}پس از کپسول بومن، لوله کلیوی چهار بخش دارد:<br>• ${e('<b>proximal convoluted tubule</b>')}: پیچیده نزدیک<br>• ${e('<b>nephron loop</b>')} یا قوس هنله: شاخه پایین‌رو و بالارو<br>• ${e('<b>distal convoluted tubule</b>')}: پیچیده دور<br>• ${e('<b>collecting duct</b>')}: مجرای جمع‌کننده`),
          L('نزدیک و دور', `${vs(['proximal', 'نزدیک به کپسول بومن؛ بیشترین بازجذب'], ['distal', 'دور از کپسول؛ پیش از مجرای جمع‌کننده'])}${memo('proxim/o یعنی نزدیک و dist/o یعنی دور؛ convoluted یعنی پیچ‌خورده.')}`),
          M('قوس U شکل لوله کلیوی را چه می‌نامند؟', ['nephron loop (loop of Henle)', 'collecting duct', 'glomerulus', 'calyx'], 'loop of Henle.', null, F('nephron-art', [])),
          M('مجرایی که ادرار چند نفرون را جمع می‌کند…', ['collecting duct', 'proximal tubule', 'afferent arteriole', 'ureter'], 'collecting duct.'),
          T('لوله پیچیده نزدیک از مجرای جمع‌کننده دورتر است.', false, 'proximal نزدیک به کپسول بومن است.'),
          O('بخش‌های نفرون را به ترتیب بچین', ['glomerular capsule', 'proximal tubule', 'nephron loop', 'distal tubule', 'collecting duct'], 'مسیر مایع در نفرون.'),
          P('هر بخش را به توضیحش وصل کن', [['proximal tubule', 'پیچیده نزدیک'], ['nephron loop', 'قوس هنله'], ['distal tubule', 'پیچیده دور'], ['collecting duct', 'جمع‌کننده']], 'لوله‌ها.'),
          B('نام دیگر قوس نفرون، قوس ___ است.', ['Henle', 'Bowman', 'Wilms'], 'loop of Henle.'),
          S('املای انگلیسی «مجرای جمع‌کننده» را بنویس', 'collecting duct', 'دو کلمه.', 'coll…'),
          N('m2r:kd')
        ]
      },
      {
        id: 'kd6', title: 'سه گام ساخت ادرار', icon: '🧪', items: [
          L('تصفیه، بازجذب، ترشح', `${fig('urine-formation', [], 'سه گام')}۱. ${e('<b>filtration</b>')}: فشار خون، آب و مواد حل‌شده را از گلومرول به کپسول بومن می‌راند؛ این مایع ${e('glomerular filtrate')} است.<br>۲. ${e('<b>reabsorption</b>')}: آب، قند و نمک‌های لازم از لوله به مویرگ‌های دورلوله‌ای برمی‌گردند.<br>۳. ${e('<b>secretion</b>')}: لوله، آمونیاک، اسید اوریک و یون هیدروژن را از خون به ادرار می‌ریزد.`),
          L('روی شکل کتاب', `${fig('urine-stages', ['تصفیه A، بازجذب B، ترشح C'], 'سه گام ساخت ادرار')}${fig('glomerulus-zoom', [], 'جسمک کلیوی')}${pearl('روزانه حدود ۱۸۰ لیتر مایع از گلومرول‌ها تصفیه می‌شود و حدود ۹۹٪ آب آن بازجذب می‌شود؛ فقط ۱ تا ۲ لیتر ادرار می‌ماند.')}${memo('پیشوند re- یعنی دوباره: reabsorption یعنی دوباره جذب کردن.')}`),
          M('گام اول ساخت ادرار در گلومرول…', ['filtration', 'reabsorption', 'secretion', 'excretion'], 'تصفیه.', null, F('urine-formation', [])),
          M('بازگشت آب و قند از لوله به خون…', ['reabsorption', 'filtration', 'secretion', 'diuresis'], 'بازجذب.'),
          T('در حالت طبیعی گلبول‌ها و پروتئین از گلومرول رد نمی‌شوند.', true, 'مایع تصفیه‌شده نباید سلول و پروتئین داشته باشد.', F('glomerulus-zoom', [])),
          O('سه گام ساخت ادرار را بچین', ['filtration', 'reabsorption', 'secretion'], 'تصفیه، بازجذب، ترشح.'),
          P('هر گام را به جایش وصل کن', [['filtration', 'گلومرول به کپسول'], ['reabsorption', 'لوله به مویرگ'], ['secretion', 'مویرگ به لوله'], ['glomerular filtrate', 'مایع درون نفرون']], 'سه گام.'),
          B('مایعی که از گلومرول وارد نفرون می‌شود ___ است.', ['glomerular filtrate', 'dialysate', 'plasma clearance'], 'filtrate.'),
          S('املای انگلیسی «بازجذب» را بنویس', 'reabsorption', 're- + absorption.', 'reab…'),
          N('t2f:kd')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'kd7', title: 'مسیر خون در کلیه', icon: '🩸', items: [
          L('از آئورت تا بزرگ‌سیاهرگ', `${fig('renal-blood', [], 'مسیر خون')}${e('<b>renal artery</b>')} از آئورت شکمی جدا می‌شود. شاخه‌هایش به ${e('<b>afferent arteriole</b>')} می‌رسند که خون را به گلومرول می‌آورد؛ ${e('<b>efferent arteriole</b>')} خون را از گلومرول می‌برد و به ${e('peritubular capillaries')} می‌رساند. خون تصفیه‌شده با ${e('renal vein')} به بزرگ‌سیاهرگ زیرین برمی‌گردد.`),
          L('روی شکل کتاب', `${fig('kidney-blood', ['سرخرگ و سیاهرگ کلیه'], 'رگ‌های کلیه')}${fig('nephron-blood', ['سرخرگچه‌ها، گلومرول و مویرگ‌ها'], 'خون‌رسانی نفرون')}${vs(['afferent', 'آوران؛ به سوی گلومرول'], ['efferent', 'وابران؛ دور از گلومرول'])}${memo('afferent با a مثل arrive است: می‌رسد. efferent با e مثل exit: خارج می‌شود.')}`),
          M('سرخرگچه‌ای که خون را به گلومرول می‌آورد…', ['afferent arteriole', 'efferent arteriole', 'renal vein', 'peritubular capillary'], 'afferent = آوران.', null, F('renal-blood', [])),
          M('سیاهرگ کلیه به کجا می‌ریزد؟', ['inferior vena cava', 'abdominal aorta', 'renal artery', 'ureter'], 'بزرگ‌سیاهرگ زیرین.'),
          T('سرخرگ کلیه شاخه‌ای از آئورت شکمی است.', true, 'renal artery.', F('kidney-blood', [])),
          O('مسیر خون را بچین', ['renal artery', 'afferent arteriole', 'glomerulus', 'efferent arteriole', 'renal vein'], 'مسیر خون در کلیه.'),
          P('هر رگ را به کارش وصل کن', [['afferent arteriole', 'به سوی گلومرول'], ['efferent arteriole', 'دور از گلومرول'], ['peritubular capillaries', 'دور لوله‌ها'], ['renal vein', 'بازگشت خون']], 'رگ‌ها.'),
          B('مویرگ‌های دور لوله‌ها مواد بازجذب‌شده را می‌گیرند: ___ capillaries.', ['peritubular', 'perirenal', 'glomerular'], 'peri- + tubule.'),
          S('املای انگلیسی «سیاهرگ کلیه» را بنویس', 'renal vein', 'دو کلمه.', 'ren…'),
          N('f2t:kd')
        ]
      },
      {
        id: 'kd8', title: 'هورمون‌های کلیه', icon: '✉️', items: [
          L('کلیه، غده هم هست', `${fig('kidney-hormones', [], 'هورمون‌ها و کلیه')}• ${e('<b>renin</b>')}: آنزیمی از کلیه که ${e('angiotensin')} را فعال می‌کند و فشار خون را بالا می‌برد<br>• ${e('<b>erythropoietin (EPO)</b>')}: مغز استخوان را به ساختن گلبول قرمز وامی‌دارد<br>• ${e('<b>antidiuretic hormone (ADH)</b>')}: از هیپوفیز؛ کلیه را به نگه‌داشتن آب وامی‌دارد<br>• ${e('<b>aldosterone</b>')}: از غده فوق‌کلیوی؛ سدیم و پتاسیم را تنظیم می‌کند`),
          L('در بالین', `${pearl('داروهای ACE inhibitor با مهار ساخت آنژیوتانسین فشار خون را پایین می‌آورند.')}${pearl('در نارسایی کلیه، EPO کم می‌شود و بیمار کم‌خون می‌شود.')}${memo('anti-diuretic یعنی ضد ادرار: ADH ادرار را کم و غلیظ می‌کند.')}`),
          M('هورمونی که ساخت گلبول قرمز را زیاد می‌کند…', ['erythropoietin', 'renin', 'aldosterone', 'antidiuretic hormone'], 'EPO.', null, F('kidney-hormones', [])),
          M('آنزیمی از کلیه که فشار خون را بالا می‌برد…', ['renin', 'urea', 'creatinine', 'insulin'], 'renin → angiotensin.'),
          T('ADH باعث می‌شود ادرار بیشتر و رقیق‌تر شود.', false, 'ADH آب را بازجذب می‌کند؛ ادرار کم و غلیظ می‌شود.'),
          O('زنجیره بالا رفتن فشار خون را بچین', ['renin', 'angiotensin', 'vessel constriction'], 'رنین، آنژیوتانسین، تنگی رگ.'),
          P('هر هورمون را به کارش وصل کن', [['renin', 'فعال کردن آنژیوتانسین'], ['erythropoietin', 'ساخت گلبول قرمز'], ['antidiuretic hormone', 'نگه‌داشتن آب'], ['aldosterone', 'تنظیم سدیم و پتاسیم']], 'هورمون‌ها.'),
          B('کم‌خونی در نارسایی کلیه از کمبود ___ است.', ['EPO', 'ADH', 'renin'], 'erythropoietin.'),
          S('املای انگلیسی «رنین» را بنویس', 'renin', 'آنزیم کلیه.', 're…'),
          N('m2r:kd')
        ]
      },
      {
        id: 'kd9', title: 'هم‌ایستایی و GFR', icon: '⚖️', items: [
          L('ترازوی بدن', `${fig('homeostasis', [], 'هم‌ایستایی')}کلیه‌ها ${e('<b>homeostasis</b>')} را نگه می‌دارند: آب، ${e('electrolytes')} مثل سدیم و پتاسیم، و pH خون را میزان می‌کنند و ${e('urea')}، ${e('creatinine')} و ${e('uric acid')} را دفع می‌کنند.${fig('water-balance', ['آب ورودی و خروجی روزانه'], 'تعادل آب بدن')}`),
          L('سنجش کار کلیه', `${e('<b>glomerular filtration rate (GFR)</b>')} یعنی حجم مایعی که همه گلومرول‌ها در هر دقیقه تصفیه می‌کنند؛ بهترین شاخص کار کلیه. ${e('clearance')} حجم پلاسمایی است که در هر دقیقه از یک ماده پاک می‌شود.${pearl('در ابزار «ماشین‌حساب کلیه» می‌توانی eGFR را از کراتینین، سن و جنس حساب کنی.')}${memo('home/o یعنی همان و ‎-stasis‎ یعنی ایستادن: homeostasis یعنی «همان‌طور ماندن».')}`),
          M('بهترین شاخص کار کلی کلیه…', ['glomerular filtration rate', 'specific gravity', 'urine color', 'blood pressure'], 'GFR.', null, F('homeostasis', [])),
          M('ماده زائد سوخت‌وساز عضله که کلیه دفع می‌کند…', ['creatinine', 'glucose', 'albumin', 'renin'], 'creatinine.'),
          T('حدود ۶۰٪ آب خروجی روزانه بدن از راه ادرار است.', true, 'حدود ۱۵۰۰ از ۲۵۰۰ میلی‌لیتر.', F('water-balance', [])),
          W('واژه‌ای بساز به معنی «مربوط به بخش درونی کلیه (مغز)»', ['medull/o', '-ary'], ['cortic/o', '-itis', 'ren/o'], 'medullary.'),
          P('هر مفهوم را به معنی‌اش وصل کن', [['homeostasis', 'هم‌ایستایی'], ['electrolytes', 'یون‌های بدن'], ['clearance', 'پاک‌سازی پلاسما'], ['uric acid', 'ماده زائد']], 'تعادل.'),
          B('اختصار GFR یعنی ___.', ['glomerular filtration rate', 'general fluid ratio', 'glucose filtration rate'], 'GFR.'),
          S('املای انگلیسی «هم‌ایستایی» را بنویس', 'homeostasis', 'home/o + ‎-stasis‎.', 'home…'),
          N('d2t:kd')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نِفرا — دنیای ۲: مثانه و دفع ادرار
 * سطح ۱: میزنای و مثانه • سطح ۲: پیشابراه و ادرار کردن • سطح ۳: اختلال‌های دفع و ساختار */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'tr', sym: 'Tr', name: 'مثانه و دفع ادرار', short: 'مثانه و دفع', sub: 'میزنای و حرکات دودی، مثانه و مثلث آن، اسفنکترها، پیشابراه زن و مرد، رفلکس ادرار، بی‌اختیاری و احتباس',
    color: '#2B86C5', dark: '#1B5E8E', light: '#E6F2FB',
    levels: ['میزنای و مثانه', 'پیشابراه و ادرار کردن', 'اختلال‌های دفع و ساختار'],
    gens: EA.genIds('tr'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'tr1', title: 'میزنای', icon: '〰️', items: [
          L('لوله‌های عضلانی', `${fig('ureter-peristalsis', [], 'حرکات دودی میزنای')}هر ${e('<b>ureter</b>')} لوله عضلانی باریکی است که از لگنچه کلیه تا مثانه می‌رود. ${e('<b>peristalsis</b>')} یا انقباض موجی دیواره، ادرار را پایین می‌راند و هر ۱۰ تا ۳۰ ثانیه فورانی از ادرار وارد مثانه می‌شود.`),
          L('دهانه میزنای', `${fig('urinary-system', ['کلیه‌ها، میزنای‌ها و مثانه'], 'دستگاه ادراری')}ادرار از ${e('<b>ureteral orifice</b>')} وارد مثانه می‌شود. این دهانه با انقباض مثانه بسته می‌شود تا ادرار به میزنای برنگردد. میزنای چپ کمی بلندتر است، چون کلیه چپ بالاتر است.${memo('پیشوند peri- یعنی دور و stalsis یعنی فشردن: peristalsis فشردن دوره‌ای دور تا دور لوله است.')}`),
          M('حرکت موجی که ادرار را در میزنای پایین می‌برد…', ['peristalsis', 'micturition', 'reabsorption', 'filtration'], 'peristalsis.', null, F('ureter-peristalsis', [])),
          M('ادرار از کجا وارد مثانه می‌شود؟', ['ureteral orifice', 'urinary meatus', 'hilum', 'papilla'], 'دهانه میزنای.'),
          T('میزنای چپ کمی بلندتر از میزنای راست است.', true, 'چون کلیه چپ بالاتر است.', F('urinary-system', [])),
          W('واژه‌ای بساز به معنی «التهاب میزنای»', ['ureter/o', '-itis'], ['urethr/o', '-lith', 'cyst/o'], 'ureteritis.'),
          P('هر واژه را به معنی‌اش وصل کن', [['ureter', 'میزنای'], ['ureteral', 'میزنایی'], ['peristalsis', 'حرکات دودی'], ['ureteral orifice', 'دهانه میزنای']], 'میزنای.'),
          B('صفت «میزنایی» ___ است.', ['ureteral', 'urethral', 'urinary'], 'ureter/o + ‎-al‎.'),
          S('املای انگلیسی «حرکات دودی» را بنویس', 'peristalsis', 'peri- + stalsis.', 'peri…'),
          N('t2f:tr')
        ]
      },
      {
        id: 'tr2', title: 'مثانه', icon: '🎈', items: [
          L('انبار کشسان', `${fig('bladder-art', [], 'مثانه در برش')}${e('<b>urinary bladder</b>')} کیسه‌ای عضلانی و کشسان در لگن است. دیواره‌اش عضله صاف ${e('<b>detrusor</b>')} دارد و مخاط درونش چین‌هایی به نام ${e('<b>rugae</b>')} دارد که اجازه می‌دهند مثانه کش بیاید.`),
          L('روی شکل کتاب', `${fig('bladder-wall', ['میزنای، مثانه، اسفنکترها و پیشابراه'], 'دیواره مثانه')}مثانه بزرگسال وقتی حدود ۳۰۰ تا ۴۰۰ میلی‌لیتر ادرار دارد، میل به ادرار کردن را می‌فرستد و شب‌ها می‌تواند تا حدود یک لیتر نگه دارد.${memo('rugae را با «چین‌های آکاردئون» به خاطر بسپار؛ وقتی مثانه پر می‌شود، چین‌ها باز می‌شوند.')}`),
          M('عضله دیواره مثانه کدام است؟', ['detrusor muscle', 'external sphincter', 'diaphragm', 'psoas'], 'detrusor.', null, F('bladder-art', [])),
          M('چین‌های مخاط مثانه را چه می‌نامند؟', ['rugae', 'calyces', 'villi', 'papillae'], 'rugae.'),
          T('مثانه یک کیسه عضلانی کشسان در لگن است.', true, 'urinary bladder.', F('bladder-wall', [])),
          W('واژه‌ای بساز به معنی «درد مثانه»', ['cyst/o', '-algia'], ['nephr/o', '-itis', 'ureter/o'], 'cystalgia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['urinary bladder', 'مثانه'], ['detrusor muscle', 'عضله دیواره مثانه'], ['rugae', 'چین‌های مخاط'], ['vesical', 'مثانه‌ای']], 'مثانه.'),
          B('خونریزی از مثانه ___ است.', ['cystorrhagia', 'cystalgia', 'cystocele'], 'cyst/o + ‎-rrhagia‎.'),
          S('املای انگلیسی «مثانه» (دو کلمه) را بنویس', 'urinary bladder', 'urinary + bladder.', 'urin…'),
          N('f2t:tr')
        ]
      },
      {
        id: 'tr3', title: 'مثلث و اسفنکترها', icon: '🔺', items: [
          L('مثلث مثانه', `${fig('bladder-trigone', ['مثلث مثانه و اسفنکترها'], 'مثلث مثانه')}${e('<b>trigone</b>')} ناحیه مثلثی کف مثانه است که سه گوشه‌اش دو دهانه میزنای و دهانه پیشابراه است. ثبات این مثلث جلوی برگشت ادرار به میزنای را می‌گیرد.`),
          L('دو اسفنکتر', `${vs(['internal urethral sphincter', 'داخلی؛ غیرارادی؛ در گردن مثانه'], ['external urethral sphincter', 'خارجی؛ ارادی؛ زیر کنترل ما'])}${pearl('در سناریوی کاربردی کتاب، از تو می‌پرسند کدام ساختار خروج ادرار را کنترل می‌کند؛ پاسخ اسفنکتر خارجی پیشابراه است.')}${memo('trigone با tri یعنی سه: سه سوراخ، سه گوشه.')}`),
          M('ناحیه مثلثی کف مثانه…', ['trigone', 'hilum', 'meatus', 'rugae'], 'trigon/o.', null, F('bladder-trigone', [])),
          M('کدام اسفنکتر ارادی است؟', ['external urethral sphincter', 'internal urethral sphincter', 'pyloric sphincter', 'detrusor'], 'خارجی ارادی است.'),
          T('اسفنکتر داخلی پیشابراه زیر کنترل ارادی ماست.', false, 'داخلی غیرارادی است؛ خارجی ارادی.'),
          W('واژه‌ای بساز به معنی «التهاب مثلث مثانه»', ['trigon/o', '-itis'], ['ureter/o', '-cele', 'nephr/o'], 'trigonitis.'),
          P('هر بخش را به ویژگی‌اش وصل کن', [['trigone', 'سه سوراخ کف مثانه'], ['internal sphincter', 'غیرارادی'], ['external sphincter', 'ارادی'], ['detrusor', 'منقبض می‌شود']], 'مثلث و اسفنکترها.'),
          B('سه گوشه trigone دو دهانه میزنای و دهانه ___ است.', ['urethra', 'kidney', 'calyx'], 'دهانه پیشابراه.'),
          S('املای انگلیسی «مثلث مثانه» را بنویس', 'trigone', 'trigon/o.', 'tri…'),
          N('d2t:tr')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'tr4', title: 'پیشابراه', icon: '🚪', items: [
          L('زن و مرد', `${fig('urethra-compare', [], 'پیشابراه زن و مرد')}${e('<b>urethra</b>')} ادرار را از مثانه بیرون می‌برد و دهانه بیرونی‌اش ${e('<b>urinary meatus</b>')} است.<br>• در زن حدود ۴ سانتی‌متر و فقط برای ادرار<br>• در مرد حدود ۲۰ سانتی‌متر؛ از میان ${e('prostate gland')} می‌گذرد و مایع منی را هم می‌برد`),
          L('روی شکل کتاب', `${fig('urethra-sexes', ['پیشابراه مرد و زن'], 'پیشابراه زن و مرد')}${pearl('عفونت ادراری در زنان شایع‌تر است، چون پیشابراه کوتاه‌تر است و دهانه‌اش به مقعد نزدیک‌تر.')}${memo('meatus یعنی گذرگاه یا دهانه؛ urinary meatus دهانه بیرونی پیشابراه است.')}`),
          M('دهانه بیرونی پیشابراه را چه می‌نامند؟', ['urinary meatus', 'ureteral orifice', 'hilum', 'trigone'], 'meat/o.', null, F('urethra-compare', [])),
          M('چرا عفونت ادراری در زنان شایع‌تر است؟', ['پیشابراه کوتاه‌تر است', 'مثانه بزرگ‌تر است', 'کلیه‌ها پایین‌ترند', 'میزنای بلندتر است'], 'میکروب راه کوتاه‌تری تا مثانه دارد.'),
          T('پیشابراه مرد از میان پروستات می‌گذرد.', true, 'برای همین بزرگی پروستات جریان ادرار را کم می‌کند.', F('urethra-sexes', [])),
          W('واژه‌ای بساز به معنی «التهاب پیشابراه»', ['urethr/o', '-itis'], ['ureter/o', '-lith', 'meat/o'], 'urethritis.'),
          P('هر واژه را به معنی‌اش وصل کن', [['urethra', 'پیشابراه'], ['urinary meatus', 'سوراخ پیشابراه'], ['prostate gland', 'پروستات'], ['urethral', 'پیشابراهی']], 'پیشابراه.'),
          B('درد پیشابراه ___ است.', ['urethralgia', 'urethritis', 'urethrocele'], 'urethr/o + ‎-algia‎.'),
          S('املای انگلیسی «سوراخ پیشابراه» (meatus) را بنویس', 'meatus', 'meat/o.', 'mea…'),
          N('m2r:tr')
        ]
      },
      {
        id: 'tr5', title: 'ادرار کردن', icon: '🚽', items: [
          L('سه نام برای یک کار', `${fig('voiding-reflex', [], 'رفلکس ادرار')}${e('<b>micturition</b>')}، ${e('<b>urination</b>')} و ${e('<b>voiding</b>')} همه یعنی خالی کردن مثانه. وقتی مثانه پر می‌شود، ${e('micturition reflex')} عضله دترسور را منقبض و اسفنکتر داخلی را شل می‌کند؛ اسفنکتر خارجی با اراده ما باز می‌شود.`),
          L('کنترل ادرار', `${e('<b>continence</b>')} یعنی توانایی نگه‌داشتن ادرار؛ کودکان معمولاً بعد از دو سالگی کنترل اسفنکتر خارجی را یاد می‌گیرند.${memo('micturition از لاتین mictus یعنی «آب ساختن»؛ اغلب به اشتباه micturation نوشته می‌شود.')}`),
          M('اصطلاح علمی ادرار کردن…', ['micturition', 'peristalsis', 'reabsorption', 'diuresis'], 'micturition.', null, F('voiding-reflex', [])),
          M('در رفلکس ادرار کدام منقبض می‌شود؟', ['detrusor muscle', 'internal sphincter', 'external sphincter', 'ureter'], 'دترسور منقبض و اسفنکتر داخلی شل می‌شود.'),
          T('املای درست واژه micturition است، نه micturation.', true, 'دام املایی رایج.'),
          O('رفلکس ادرار را بچین', ['bladder fills', 'stretch signal', 'detrusor contracts', 'urine leaves'], 'پر شدن، پیام کشش، انقباض، تخلیه.'),
          P('هر واژه را به معنی‌اش وصل کن', [['micturition', 'ادرار کردن'], ['voiding', 'تخلیه مثانه'], ['continence', 'نگه‌داشتن ادرار'], ['micturition reflex', 'رفلکس ادرار']], 'ادرار کردن.'),
          B('توانایی کنترل ادرار ___ است.', ['continence', 'incontinence', 'retention'], 'continence.'),
          S('املای انگلیسی «ادرار کردن» (micturition) را بنویس', 'micturition', 'دام املایی: ‎-ition‎.', 'mict…'),
          N('t2f:tr')
        ]
      },
      {
        id: 'tr6', title: 'بی‌اختیاری', icon: '💦', items: [
          L('انواع بی‌اختیاری', `${fig('incontinence-types', [], 'مشکلات کنترل ادرار')}${e('<b>urinary incontinence</b>')} یعنی ناتوانی در نگه‌داشتن ادرار:<br>• ${e('<b>stress incontinence</b>')}: نشت ادرار با سرفه، عطسه، خنده یا ورزش<br>• ${e('<b>urge incontinence</b>')}: فوریت ناگهانی و نشت پیش از رسیدن به دستشویی<br>• ${e('<b>enuresis</b>')}: شب‌ادراری پس از سنی که کنترل باید یاد گرفته شود`),
          L('در بالین', `${pearl('در مطالعهٔ موردی کتاب Cohen، خانمی ۵۲ ساله به نام Jade به stress incontinence دچار است و دیگر نمی‌تواند راحت ورزش کند. برای بررسی، نمونه clean-catch، سیستومتری (CMG) و cystoscopy انجام شد و با تزریق سلول‌های بنیادی عضله، کنترل ادرارش ۹۵٪ بهتر شد.')}${memo('پیشوند in- یعنی نه: incontinence یعنی نتوانستن نگه‌داشتن.')}`),
          M('نشت ادرار هنگام سرفه و عطسه…', ['stress incontinence', 'urge incontinence', 'urinary retention', 'anuria'], 'stress incontinence.', null, F('incontinence-types', [])),
          M(`${e('<b>enuresis</b>')} یعنی…`, ['شب‌ادراری', 'ادرار نکردن', 'ادرار دردناک', 'خون در ادرار'], 'nocturnal enuresis.'),
          T('Jade به خاطر نشت ادرار هنگام ورزش، stress incontinence دارد.', true, 'فشار روی مثانه هنگام فعالیت.'),
          O('بررسی Jade را به ترتیب بچین', ['urologic history', 'clean-catch specimen', 'cystometrography', 'stem cell injection'], 'شرح حال، نمونه، سیستومتری، درمان.'),
          P('هر نوع را به توضیحش وصل کن', [['stress incontinence', 'نشت با سرفه'], ['urge incontinence', 'فوریت ناگهانی'], ['enuresis', 'شب‌ادراری'], ['continence', 'کنترل کامل']], 'بی‌اختیاری.'),
          B('اختصار CMG یعنی ___.', ['cystometrography', 'cystography', 'computed myelography'], 'سنجش فشار مثانه.'),
          S('املای انگلیسی «بی‌اختیاری» را بنویس', 'incontinence', 'in- + continence.', 'incon…'),
          N('f2t:tr')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'tr7', title: 'احتباس و انسداد', icon: '🚧', items: [
          L('مثانه پر، جریان کم', `• ${e('<b>urinary retention</b>')}: مثانه کامل خالی نمی‌شود؛ اغلب از انسداد<br>• ${e('<b>bladder neck obstruction (BNO)</b>')}: انسداد گردن مثانه، اغلب از بزرگی پروستات<br>• ${e('<b>hesitancy</b>')}: جریان ضعیف و دیر شروع شدن ادرار<br>• ${e('<b>neurogenic bladder</b>')}: اختلال مثانه از آسیب عصبی مثل ضایعه نخاع`),
          L('تکرر و فوریت', `${vs(['urinary frequency', 'دفعات زیاد ادرار بی‌آنکه حجم کل زیاد شود'], ['urgency', 'نیاز فوری به ادرار کردن'])}${pearl('در سناریوی کاربردی کتاب، خانم Kim Cardsheen از اسپاسم مثانه و احتباس ادرار شکایت دارد؛ داروی antispasmodic اسپاسم را کم می‌کند.')}${memo('neur/o یعنی عصب و ‎-genic‎ یعنی ایجادشده: neurogenic bladder مثانه‌ای است که مشکلش از عصب است.')}`),
          M('مثانه‌ای که کامل خالی نمی‌شود…', ['urinary retention', 'urinary incontinence', 'polyuria', 'enuresis'], 'retention.'),
          M('علت شایع انسداد گردن مثانه در مردان…', ['بزرگی پروستات', 'سنگ کلیه', 'دیابت', 'کم‌آبی'], 'BNO.'),
          T('neurogenic bladder از آسیب دستگاه عصبی ایجاد می‌شود.', true, 'مثل آسیب نخاع یا MS.'),
          W('واژه‌ای بساز به معنی «ایجادشده از عصب»', ['neur/o', '-genic'], ['nephr/o', '-itis', 'cyst/o'], 'neurogenic.'),
          P('هر نشانه را به معنی‌اش وصل کن', [['hesitancy', 'دیر شروع شدن ادرار'], ['urgency', 'نیاز فوری'], ['urinary frequency', 'دفعات زیاد'], ['urinary retention', 'خالی نشدن مثانه']], 'نشانه‌ها.'),
          B('اختصار BNO یعنی ___.', ['bladder neck obstruction', 'bilateral nephric outflow', 'blood nitrogen output'], 'انسداد گردن مثانه.'),
          S('املای انگلیسی «احتباس» را بنویس', 'retention', 'urinary retention.', 'rete…'),
          N('m2r:tr')
        ]
      },
      {
        id: 'tr8', title: 'تنگی، گشادی و بیرون‌زدگی', icon: '↔️', items: [
          L('سه پسوند شکل', `${fig('tract-narrowing', [], 'تنگی و گشادی')}• ${e('-stenosis')} = تنگی: ${e('<b>ureterostenosis</b>')}، ${e('<b>urethrostenosis</b>')}<br>• ${e('-ectasis')} = گشادی: ${e('<b>ureterectasis</b>')}<br>• ${e('-cele')} = بیرون‌زدگی: ${e('<b>ureterocele</b>')}، ${e('<b>urethrocele</b>')}`),
          L('روی شکل کتاب', `${fig('ureterocele', ['برآمدگی انتهای میزنای در مثانه'], 'یورتروسل')}${e('ureterocele')} برآمدگی کیست‌مانند انتهای میزنای در مثانه است که جریان را می‌بندد و ادرار را به میزنای و لگنچه برمی‌گرداند.${memo('stenosis مثل «استن» تنگ است؛ ectasis مثل «اکستند» باز و گشاد.')}`),
          M('تنگی پیشابراه…', ['urethrostenosis', 'ureterectasis', 'urethrocele', 'urethritis'], 'urethr/o + ‎-stenosis‎.', null, F('tract-narrowing', [])),
          M(`${e('<b>ureterectasis</b>')} یعنی…`, ['گشادی میزنای', 'تنگی میزنای', 'سنگ میزنای', 'برداشتن میزنای'], '‎-ectasis‎ یعنی گشادی.'),
          T('ureterocele برآمدگی انتهای میزنای درون مثانه است.', true, '‎-cele‎ یعنی بیرون‌زدگی.', F('ureterocele', [])),
          W('واژه‌ای بساز به معنی «تنگی میزنای»', ['ureter/o', '-stenosis'], ['urethr/o', '-ectasis', 'cyst/o'], 'ureterostenosis.'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-stenosis', 'تنگی'], ['-ectasis', 'گشادی'], ['-cele', 'بیرون‌زدگی'], ['-rrhagia', 'خونریزی']], 'پسوندها.'),
          B('بیرون‌زدگی پیشابراه ___ است.', ['urethrocele', 'urethrostenosis', 'urethrorrhea'], 'urethr/o + ‎-cele‎.'),
          S('املای انگلیسی «تنگی پیشابراه» را بنویس', 'urethrostenosis', 'urethr/o + ‎-stenosis‎.', 'urethro…'),
          N('t2f:tr')
        ]
      },
      {
        id: 'tr9', title: 'افتادگی و فیستول', icon: '⬇️', items: [
          L('افتادگی مثانه', `${fig('cystocele-art', [], 'سیستوسل')}${e('<b>cystocele</b>')} یا ${e('vesicocele')} یعنی بیرون‌زدن مثانه به دیواره واژن، وقتی بافت نگهدارنده سست شده باشد (پس از زایمان یا با افزایش سن). درمانش ${e('cystopexy')}، یعنی تثبیت مثانه با جراحی است.${fig('cystocele', ['مثانه، رحم و واژن'], 'سیستوسل در برش')}`),
          L('فیستول', `${fig('vesicovaginal', ['راه غیرطبیعی بین مثانه و واژن'], 'فیستول مثانه-واژنی')}${e('<b>vesicovaginal fistula</b>')} راه غیرطبیعی بین مثانه و واژن است که ادرار مدام از آن نشت می‌کند.${memo('fistula در لاتین یعنی «لوله»؛ یک تونل اضافه بین دو عضو.')}`),
          M('بیرون‌زدن مثانه به دیواره واژن…', ['cystocele', 'cystolith', 'cystitis', 'cystalgia'], 'cyst/o + ‎-cele‎.', null, F('cystocele-art', [])),
          M('درمان جراحی سیستوسل…', ['cystopexy', 'cystectomy', 'nephropexy', 'lithotripsy'], 'تثبیت مثانه.'),
          T('vesicocele همان cystocele است.', true, 'vesic/o و cyst/o هر دو مثانه‌اند.', F('cystocele', [])),
          W('واژه‌ای بساز به معنی «فتق مثانه» (با ریشه لاتین)', ['vesic/o', '-cele'], ['cyst/o', '-pexy', 'urethr/o'], 'vesicocele.'),
          P('هر واژه را به معنی‌اش وصل کن', [['cystocele', 'افتادگی مثانه'], ['cystopexy', 'تثبیت مثانه'], ['vesicovaginal fistula', 'راه مثانه به واژن'], ['urethrocystitis', 'التهاب پیشابراه و مثانه']], 'افتادگی و فیستول.'),
          B('ترشح غیرطبیعی از پیشابراه ___ است.', ['urethrorrhea', 'urethrorrhagia', 'urethralgia'], 'urethr/o + ‎-rrhea‎.'),
          S('املای انگلیسی «افتادگی مثانه» را بنویس', 'cystocele', 'cyst/o + ‎-cele‎.', 'cysto…'),
          N('d2t:tr')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نِفرا — دنیای ۳: ادرار و نشانه‌ها
 * سطح ۱: ادرار و آزمایش آن • سطح ۲: حجم و دفع ادرار • سطح ۳: ادرار غیرطبیعی و خون */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ur', sym: 'Ur', name: 'ادرار و نشانه‌ها', short: 'ادرار و نشانه‌ها', sub: 'ترکیب و رنگ ادرار، آزمایش ادرار، وزن مخصوص، حجم ادرار، نشانه‌های ‎-uria‎، اوره و کراتینین، سدیم و پتاسیم',
    color: '#C99A06', dark: '#8F6D03', light: '#FDF6E1',
    levels: ['ادرار و آزمایش آن', 'حجم و دفع ادرار', 'ادرار غیرطبیعی و خون'],
    gens: EA.genIds('ur'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'ur1', title: 'ادرار طبیعی', icon: '💛', items: [
          L('ترکیب ادرار', `${fig('urine-composition', [], 'ترکیب ادرار')}${e('<b>urine</b>')} حدود ۹۵٪ آب است و بقیه‌اش اوره، کراتینین، اسید اوریک، نمک‌ها و رنگدانه. ادرار در کلیه و مثانه استریل است. حجم روزانه طبیعی حدود ۱۰۰۰ تا ۲۰۰۰ میلی‌لیتر است.`),
          L('رنگ ادرار', `${fig('urine-colors', [], 'رنگ ادرار')}ادرار طبیعی زرد کاهی تا طلایی و شفاف است. ادرار زرد تیره یعنی غلیظ است و ممکن است نشانه کم‌آبی باشد؛ قهوه‌ای یا سیاه نشانه بیماری جدی است.${memo('ur/o و urin/o هر دو یعنی ادرار؛ ‎-uria‎ هم از همین ریشه آمده است.')}`),
          M('بیشترین جزء ادرار…', ['آب', 'اوره', 'پروتئین', 'قند'], 'حدود ۹۵٪.', null, F('urine-composition', [])),
          M('ادرار زرد تیره و غلیظ بیشتر نشانه چیست؟', ['کم‌آبی', 'عفونت قطعی', 'دیابت', 'سنگ کلیه'], 'dehydration.'),
          T('ادرار سالم درون مثانه استریل است.', true, 'هنگام گذر از پیشابراه ممکن است آلوده شود.', F('urine-colors', [])),
          W('واژه‌ای بساز به معنی «تغییر رنگ ادرار»', ['chromat/o', '-uria'], ['hemat/o', '-emia', 'py/o'], 'chromaturia.'),
          P('هر جزء را به وضعیتش وصل کن', [['water', 'حدود ۹۵٪'], ['urea', 'ماده زائد اصلی'], ['glucose', 'نباید باشد'], ['blood', 'نشانه بیماری']], 'ترکیب ادرار.'),
          B('صفت «ادراری» ___ است.', ['urinary', 'urethral', 'ureteral'], 'urin/o + ‎-ary‎.'),
          S('املای انگلیسی «ادرار» را بنویس', 'urine', 'urin/o.', 'ur…'),
          N('t2f:ur')
        ]
      },
      {
        id: 'ur2', title: 'آزمایش ادرار', icon: '🧪', items: [
          L('سه بخش آزمایش', `${fig('ua-dipstick', [], 'نوار ادرار')}${e('<b>urinalysis (UA)</b>')} سه بخش دارد:<br>۱. <b>فیزیکی</b>: رنگ، کدورت (${e('turbidity')}) و وزن مخصوص<br>۲. <b>شیمیایی</b>: pH، قند، کتون، خون، پروتئین با نوار<br>۳. <b>میکروسکوپی</b>: سلول‌ها، کریستال‌ها و ${e('casts')}`),
          L('در بالین', `${pearl('در برگه آزمایش ادرار آقای James Delgado که ۵۵ سال دارد، ادرار «hazy» بود، خون 2+، لکوسیت 2+، گلبول سفید ۲۰ تا ۵۰ در هر میدان و باکتری 2+؛ یعنی عفونت ادراری.')}${memo('cast قالب است؛ سلول‌ها یا پروتئین درون لوله کلیه قالب می‌گیرند و در ادرار دیده می‌شوند.')}`),
          M('اختصار UA یعنی…', ['urinalysis', 'urine acid', 'uric analysis', 'ultrasound'], 'urinalysis.', null, F('ua-dipstick', [])),
          M('قالب‌های لوله کلیه در ادرار را چه می‌نامند؟', ['casts', 'calculi', 'crystals', 'rugae'], 'casts.'),
          T('کدر بودن ادرار ممکن است نشانه وجود باکتری یا چرک باشد.', true, 'turbidity.'),
          O('سه بخش آزمایش ادرار را بچین', ['physical', 'chemical', 'microscopic'], 'فیزیکی، شیمیایی، میکروسکوپی.'),
          P('هر یافته را به بخش آزمایشش وصل کن', [['color', 'فیزیکی'], ['glucose', 'شیمیایی'], ['casts', 'میکروسکوپی'], ['turbidity', 'کدورت']], 'آزمایش ادرار.'),
          B('آزمایش ادرار ___ است.', ['urinalysis', 'urography', 'urometer'], 'urin/o + analysis.'),
          S('املای انگلیسی «آزمایش ادرار» را بنویس', 'urinalysis', 'urin/o + analysis.', 'urina…'),
          N('f2t:ur')
        ]
      },
      {
        id: 'ur3', title: 'نمونه تمیز و وزن مخصوص', icon: '🧫', items: [
          L('نمونه و کشت', `${fig('clean-catch', [], 'نمونه تمیز')}${e('<b>clean-catch specimen</b>')} نمونه ادرار میانی است که پس از شستن دهانه پیشابراه گرفته می‌شود. ${e('<b>culture and sensitivity (C&S)</b>')} میکروب را رشد می‌دهد، نامش را پیدا می‌کند و آنتی‌بیوتیک مؤثر را تعیین می‌کند.`),
          L('وزن مخصوص', `${fig('sg-scale', [], 'وزن مخصوص')}${e('<b>specific gravity (SG)</b>')} سنگینی ادرار نسبت به آب (1.000) است و با ${e('urinometer')} سنجیده می‌شود. طبیعی حدود ${e('1.001–1.030')}؛ ادرار غلیظ SG بالاتر دارد.${memo('اختصار CC با حروف بزرگ یعنی نمونه تمیز؛ cc کوچک یعنی شکایت اصلی بیمار.')}`),
          M('نمونه ادرار میانی پس از شست‌وشو…', ['clean-catch specimen', 'catheter specimen', '24-hour urine', 'random sample'], 'clean-catch.', null, F('clean-catch', [])),
          M('ابزار سنجش وزن مخصوص ادرار…', ['urinometer', 'cystoscope', 'audiometer', 'tonometer'], 'urin/o + ‎-meter‎.'),
          T('ادرار غلیظ وزن مخصوص کمتری دارد.', false, 'غلیظ‌تر یعنی SG بالاتر.', F('sg-scale', [])),
          W('واژه‌ای بساز به معنی «ابزار سنجش ادرار»', ['urin/o', '-meter'], ['cyst/o', '-scope', 'nephr/o'], 'urinometer.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['CC', 'نمونه تمیز'], ['C&S', 'کشت و آنتی‌بیوگرام'], ['SG', 'وزن مخصوص'], ['UC', 'کشت ادرار']], 'اختصارها.'),
          B('وزن مخصوص آب خالص ___ است.', ['1.000', '1.030', '1.010'], 'ادرار کمی سنگین‌تر است.'),
          S('املای انگلیسی «ادرارسنج» را بنویس', 'urinometer', 'urin/o + ‎-meter‎.', 'urino…'),
          N('d2t:ur')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'ur4', title: 'حجم ادرار', icon: '📏', items: [
          L('کم، زیاد، هیچ', `${fig('output-terms', [], 'حجم ادرار')}• ${e('<b>anuria</b>')}: نبود ادرار (کمتر از ۱۰۰ میلی‌لیتر در روز)<br>• ${e('<b>oliguria</b>')}: ادرار کم<br>• ${e('<b>polyuria</b>')}: ادرار زیاد، مثل دیابت<br>• ${e('<b>diuresis</b>')}: افزایش ساخت و دفع ادرار`),
          L('ادرارآور', `${e('<b>diuretic</b>')} ماده یا دارویی است که دیورز ایجاد می‌کند؛ کافئین هم اثر ادرارآور دارد. ${e('anuresis')} یعنی ادرار نکردن با وجود ساخته شدن ادرار.${pearl('در ابزار «ماشین‌حساب کلیه»، برون‌ده کمتر از ۰٫۵ میلی‌لیتر به ازای هر کیلوگرم در ساعت کم‌ادراری حساب می‌شود.')}${memo('olig/o یعنی کم و poly- یعنی زیاد؛ an- یعنی هیچ.')}`),
          M('نبود کامل ساخت ادرار…', ['anuria', 'oliguria', 'polyuria', 'nocturia'], 'an- + ‎-uria‎.', null, F('output-terms', [])),
          M('ادرار زیاد در دیابت…', ['polyuria', 'oliguria', 'dysuria', 'pyuria'], 'poly- + ‎-uria‎.'),
          T('دیورتیک‌ها حجم ادرار را زیاد می‌کنند.', true, 'diuretic.'),
          W('واژه‌ای بساز به معنی «ادرار کم»', ['olig/o', '-uria'], ['poly-', 'hemat/o', '-emia'], 'oliguria.'),
          P('هر واژه را به معنی‌اش وصل کن', [['anuria', 'بی‌ادراری'], ['oliguria', 'کم‌ادراری'], ['polyuria', 'پرادراری'], ['diuresis', 'افزایش دفع ادرار']], 'حجم ادرار.'),
          B('دارویی که ادرار را زیاد می‌کند ___ است.', ['diuretic', 'antibiotic', 'antispasmodic'], 'diuretic.'),
          S('املای انگلیسی «کم‌ادراری» را بنویس', 'oliguria', 'olig/o + ‎-uria‎.', 'olig…'),
          N('t2f:ur')
        ]
      },
      {
        id: 'ur5', title: 'شب، درد و تشنگی', icon: '🌙', items: [
          L('سه نشانه', `• ${e('<b>nocturia</b>')}: ادرار زیاد یا مکرر در شب (${e('noct/i')} = شب)<br>• ${e('<b>dysuria</b>')}: ادرار دردناک یا دشوار، مثل سیستیت<br>• ${e('<b>polydipsia</b>')}: تشنگی زیاد (${e('dips/o')} = تشنگی)، اغلب همراه polyuria`),
          L('در بالین', `${pearl('در سناریوی کاربردی کتاب، خانم Jana Smith که برای ماراتن تمرین می‌کند و آب و غذای کمی خورده، از ادرار دردناک، ادرار کم و تشنگی شکایت دارد؛ یعنی dysuria، oliguria و polydipsia. در آزمایشش کتون به مقدار ناچیز هم دیده شد.')}${memo('nocturnal یعنی شبانه؛ nocturia ادرار شبانه است.')}`),
          M('ادرار مکرر در شب…', ['nocturia', 'enuresis', 'polyuria', 'anuria'], 'noct/i + ‎-uria‎.'),
          M(`${e('<b>polydipsia</b>')} یعنی…`, ['تشنگی زیاد', 'ادرار زیاد', 'گرسنگی زیاد', 'خستگی زیاد'], 'poly- + dips/o + ‎-ia‎.'),
          T('dysuria یعنی ادرار دردناک یا دشوار.', true, 'dys- + ‎-uria‎.'),
          W('واژه‌ای بساز به معنی «تشنگی زیاد»', ['poly-', 'dips/o', '-ia'], ['olig/o', '-uria', 'noct/i'], 'polydipsia.'),
          P('هر نشانه Jana Smith را به واژه‌اش وصل کن', [['painful urination', 'dysuria'], ['scanty urine', 'oliguria'], ['thirst', 'polydipsia'], ['night urination', 'nocturia']], 'نشانه‌ها.'),
          B('ادرار دردناک ___ است.', ['dysuria', 'nocturia', 'pyuria'], 'dys- + ‎-uria‎.'),
          S('املای انگلیسی «ادرار شبانه» را بنویس', 'nocturia', 'noct/i + ‎-uria‎.', 'noct…'),
          N('m2r:ur')
        ]
      },
      {
        id: 'ur6', title: 'خون و چرک در ادرار', icon: '🩸', items: [
          L('ادرار قرمز یا کدر', `• ${e('<b>hematuria</b>')}: خون در ادرار (${e('hemat/o')} = خون)<br>• ${e('<b>pyuria</b>')}: چرک در ادرار (${e('py/o')} = چرک)<br>• ${e('<b>bacteriuria</b>')}: باکتری در ادرار<br>• ${e('<b>chromaturia</b>')}: تغییر رنگ ادرار`),
          L('در بالین', `${pearl('در تمرین پرونده یکی از فصل‌های پیوست، خانم Heather که ۴۰ سال دارد، با تکرر، ادرار دردناک و خون در ادرار آمده است؛ ادرارش کدر و بدبو بود و باکتری داشت: hematuria و bacteriuria.')}${vs(['pyuria', 'py/o = چرک'], ['pyelitis', 'pyel/o = لگنچه'])}${memo('hem یعنی خون؛ hematuria یعنی ادرار خونی. pyuria چرک ادرار است، نه لگنچه!')}`),
          M('خون در ادرار…', ['hematuria', 'pyuria', 'bacteriuria', 'albuminuria'], 'hemat/o + ‎-uria‎.'),
          M(`${e('<b>pyuria</b>')} یعنی…`, ['چرک در ادرار', 'التهاب لگنچه', 'خون در ادرار', 'ادرار زیاد'], 'py/o = چرک.'),
          T('py/o و pyel/o یک معنی دارند.', false, 'py/o چرک است و pyel/o لگنچه.'),
          W('واژه‌ای بساز به معنی «باکتری در ادرار»', ['bacteri/o', '-uria'], ['py/o', '-emia', 'hemat/o'], 'bacteriuria.'),
          P('هر واژه را به معنی‌اش وصل کن', [['hematuria', 'خون در ادرار'], ['pyuria', 'چرک در ادرار'], ['bacteriuria', 'باکتری در ادرار'], ['chromaturia', 'تغییر رنگ ادرار']], 'ادرار غیرطبیعی.'),
          B('ادرار کدر با گلبول سفید زیاد یعنی ___.', ['pyuria', 'glycosuria', 'ketonuria'], 'چرک در ادرار.'),
          S('املای انگلیسی «خون در ادرار» را بنویس', 'hematuria', 'hemat/o + ‎-uria‎.', 'hema…'),
          N('t2f:ur')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'ur7', title: 'قند، کتون و پروتئین', icon: '🍬', items: [
          L('آنچه نباید در ادرار باشد', `• ${e('<b>glycosuria</b>')}: قند در ادرار؛ مثل دیابت کنترل‌نشده<br>• ${e('<b>ketonuria</b>')}: کتون در ادرار؛ وقتی بدن به جای قند چربی می‌سوزاند (دیابت، گرسنگی)<br>• ${e('<b>proteinuria</b>')}: پروتئین در ادرار؛ آسیب گلومرول<br>• ${e('<b>albuminuria</b>')}: آلبومین در ادرار؛ نشانه بیماری کلیه`),
          L('در بالین', `${pearl('در سناریوی کاربردی کتاب، Brad Leighton پسری ۱۱ ساله با دیابت نوجوانی است و پزشک آزمایش ادرار را برای استون، کتون، قند، وزن مخصوص و pH خواسته است.')}${memo('glyc/o و glycos/o یعنی قند؛ مثل glucose.')}`),
          M('قند در ادرار…', ['glycosuria', 'ketonuria', 'proteinuria', 'pyuria'], 'glycos/o + ‎-uria‎.'),
          M('کتون در ادرار بیشتر در کدام حالت دیده می‌شود؟', ['دیابت کنترل‌نشده یا گرسنگی', 'سنگ کلیه', 'سیستیت', 'بزرگی پروستات'], 'سوختن چربی.'),
          T('proteinuria می‌تواند نشانه آسیب گلومرول باشد.', true, 'گلومرول سالم پروتئین را رد نمی‌کند.'),
          W('واژه‌ای بساز به معنی «پروتئین در ادرار»', ['protein/o', '-uria'], ['glycos/o', '-emia', 'keton/o'], 'proteinuria.'),
          P('هر واژه را به معنی‌اش وصل کن', [['glycosuria', 'قند در ادرار'], ['ketonuria', 'کتون در ادرار'], ['albuminuria', 'آلبومین در ادرار'], ['proteinuria', 'پروتئین در ادرار']], 'ادرار غیرطبیعی.'),
          B('آلبومین در ادرار ___ است.', ['albuminuria', 'azoturia', 'glycosuria'], 'albumin/o + ‎-uria‎.'),
          S('املای انگلیسی «قند در ادرار» را بنویس', 'glycosuria', 'glycos/o + ‎-uria‎.', 'glyco…'),
          N('f2t:ur')
        ]
      },
      {
        id: 'ur8', title: 'مواد زائد در خون', icon: '☠️', items: [
          L('ازوتمی و اورمی', `${fig('uremia-art', [], 'اورمی')}• ${e('<b>azotemia</b>')}: ازدیاد مواد نیتروژنی، به‌ویژه اوره، در خون (${e('azot/o')})<br>• ${e('<b>uremia</b>')}: حالت سمی ناشی از تجمع اوره و مواد زائد در نارسایی کلیه<br>• ${e('<b>azoturia</b>')}: افزایش مواد نیتروژنی در ادرار`),
          L('آزمایش‌های خون', `${tbl([['آزمایش', 'چه می‌سنجد'], [e('BUN'), 'نیتروژن اوره خون'], [e('creatinine clearance'), 'مقایسه کراتینین ادرار ۲۴ ساعته با خون'], [e('eGFR'), 'تخمین تصفیه گلومرولی از کراتینین'], [e('ACR'), 'نسبت آلبومین به کراتینین ادرار']])}${memo('azote نام فرانسوی نیتروژن است؛ azot/o یعنی مواد نیتروژنی.')}`),
          M('تجمع سمی اوره در خون در نارسایی کلیه…', ['uremia', 'hematuria', 'glycosuria', 'diuresis'], 'ur/o + ‎-emia‎.', null, F('uremia-art', [])),
          M('اختصار BUN یعنی…', ['blood urea nitrogen', 'bladder urine nitrate', 'basic urinary nitrogen', 'blood uric number'], 'نیتروژن اوره خون.'),
          T('azotemia یعنی مواد نیتروژنی زیاد در ادرار.', false, 'azotemia در خون است؛ در ادرار azoturia.'),
          W('واژه‌ای بساز به معنی «مواد نیتروژنی در خون»', ['azot/o', '-emia'], ['ur/o', '-uria', 'hemat/o'], 'azotemia.'),
          P('هر آزمایش را به کارش وصل کن', [['BUN', 'اوره خون'], ['eGFR', 'تخمین کار گلومرول'], ['ACR', 'آلبومین ادرار در دیابت'], ['creatinine clearance', 'کراتینین ادرار و خون']], 'آزمایش‌ها.'),
          B('اختصار eGFR یعنی ___ glomerular filtration rate.', ['estimated', 'effective', 'excretory'], 'تخمینی.'),
          S('املای انگلیسی «اورمی» را بنویس', 'uremia', 'ur/o + ‎-emia‎.', 'ure…'),
          N('m2r:ur')
        ]
      },
      {
        id: 'ur9', title: 'الکترولیت‌ها و مایعات', icon: '🧂', items: [
          L('سدیم و پتاسیم', `${fig('electrolytes', [], 'الکترولیت‌ها')}ریشهٔ ${e('natr/o')} از ${e('natrium')} (سدیم) و ریشهٔ ${e('kal/i')} از ${e('kalium')} (پتاسیم) آمده است:<br>• ${e('<b>hypernatremia</b>')} و ${e('<b>hyponatremia</b>')}: سدیم بالا و پایین خون<br>• ${e('<b>hyperkalemia</b>')} و ${e('<b>hypokalemia</b>')}: پتاسیم بالا و پایین؛ هر دو آریتمی قلبی می‌دهند`),
          L('آب و پروتئین', `• ${e('<b>edema</b>')}: تجمع مایع در بافت‌ها؛ در نارسایی کلیه و سندرم نفروتیک<br>• ${e('<b>dehydration</b>')}: کم‌آبی بدن<br>• ${e('<b>acidosis</b>')}: اسیدی شدن مایعات بدن<br>• ${e('<b>hypoproteinemia</b>')}: پروتئین کم خون${pearl('دیورتیک‌ها پتاسیم را هم دفع می‌کنند؛ برای همین گاهی مکمل پتاسیم (K) تجویز می‌شود.')}${memo('Na و K نمادهای شیمیایی‌اند؛ از نام لاتین natrium و kalium.')}`),
          M('پتاسیم بالای خون…', ['hyperkalemia', 'hypernatremia', 'hypokalemia', 'hyponatremia'], 'hyper- + kal/i + ‎-emia‎.', null, F('electrolytes', [])),
          M('تجمع مایع در بافت‌ها…', ['edema', 'dehydration', 'acidosis', 'uremia'], 'edema.'),
          T('نماد شیمیایی سدیم Na است، از نام لاتین natrium.', true, 'natr/o.'),
          W('واژه‌ای بساز به معنی «سدیم پایین خون»', ['hypo-', 'natr/o', '-emia'], ['hyper-', 'kal/i', '-uria'], 'hyponatremia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['hypernatremia', 'سدیم بالا'], ['hypokalemia', 'پتاسیم پایین'], ['natriuresis', 'دفع سدیم در ادرار'], ['kaliuresis', 'دفع پتاسیم در ادرار']], 'الکترولیت‌ها.'),
          B('اسیدی شدن مایعات بدن ___ است.', ['acidosis', 'alkalosis', 'ketonuria'], '‎-osis‎ = حالت.'),
          S('املای انگلیسی «پتاسیم بالای خون» را بنویس', 'hyperkalemia', 'hyper- + kal/i + ‎-emia‎.', 'hyperk…'),
          N('d2t:ur')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نِفرا — دنیای ۴: بیماری‌های ادراری
 * سطح ۱: عفونت و التهاب • سطح ۲: سنگ و نارسایی • سطح ۳: کیست، ناهنجاری و تومور */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'dz', sym: 'Dz', name: 'بیماری‌های ادراری', short: 'بیماری‌ها', sub: 'عفونت ادراری و پیلونفریت، گلومرولونفریت و سندرم نفروتیک، سنگ و هیدرونفروز، نارسایی کلیه، کلیه پلی‌کیستیک و تومورها',
    color: '#E2683C', dark: '#A94420', light: '#FDEBE3',
    levels: ['عفونت و التهاب', 'سنگ و نارسایی', 'کیست، ناهنجاری و تومور'],
    gens: EA.genIds('dz'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'dz1', title: 'عفونت ادراری', icon: '🦠', items: [
          L('از پایین به بالا', `${fig('uti-ascending', [], 'عفونت بالارونده')}${e('<b>urinary tract infection (UTI)</b>')} معمولاً با باکتری‌های روده مثل E. coli از پیشابراه شروع می‌شود و به مثانه (${e('cystitis')}) و گاهی به کلیه می‌رسد. در زنان شایع‌تر است، چون پیشابراه کوتاه‌تر است.`),
          L('نشانه‌ها', `نشانه‌های سیستیت: ${e('dysuria')}، تکرر (${e('frequency')}) و فوریت (${e('urgency')})، گاهی ${e('hematuria')}. سوند ادراری در بیمارستان خطر عفونت را بالا می‌برد.${pearl('غشای مخاطی از سوراخ پیشابراه تا کلیه پیوسته است؛ برای همین هرگز نباید یک عفونت ساده مثانه را نادیده گرفت.')}${memo('التهاب مثانه یعنی cystitis و التهاب پیشابراه یعنی urethritis؛ هر دو با پسوند ‎-itis‎ ساخته می‌شوند.')}`),
          M('شایع‌ترین میکروب عفونت ادراری…', ['E. coli', 'استرپتوکوک', 'ویروس', 'قارچ'], 'باکتری روده.', null, F('uti-ascending', [])),
          M('التهاب مثانه…', ['cystitis', 'nephritis', 'pyelitis', 'urethritis'], 'cyst/o + ‎-itis‎.'),
          T('عفونت ادراری در زنان شایع‌تر است.', true, 'پیشابراه کوتاه‌تر و نزدیک به مقعد.'),
          O('مسیر عفونت بالارونده را بچین', ['urethra', 'bladder', 'ureter', 'kidney'], 'پیشابراه، مثانه، میزنای، کلیه.'),
          P('هر التهاب را به جایش وصل کن', [['urethritis', 'پیشابراه'], ['cystitis', 'مثانه'], ['ureteritis', 'میزنای'], ['pyelonephritis', 'لگنچه و کلیه']], 'التهاب‌ها.'),
          B('اختصار UTI یعنی ___ tract infection.', ['urinary', 'ureteral', 'uterine'], 'عفونت ادراری.'),
          S('املای انگلیسی «التهاب پیشابراه» را بنویس', 'urethritis', 'urethr/o + ‎-itis‎.', 'ureth…'),
          N('t2f:dz')
        ]
      },
      {
        id: 'dz2', title: 'پیلونفریت', icon: '🔥', items: [
          L('عفونت کلیه', `${e('<b>pyelonephritis</b>')} التهاب لگنچه و کلیه است که معمولاً از سیستیت درمان‌نشده بالا می‌رود.${tbl([['', e('cystitis'), e('pyelonephritis')], ['جا', 'مثانه؛ سطحی', 'لگنچه و کلیه'], ['نشانه', 'سوزش، تکرر، فوریت', 'تب، لرز، درد پهلو'], ['آزمایش', 'pyuria، bacteriuria', 'به‌علاوه گلبول سفید خون بالا']])}`),
          L('در بالین', `${pearl('در Case Study کتاب Fremgen آمده است: خانمی ۳۲ ساله با تب، لرز، فوریت، تکرر، ادرار دردناک و خون در ادرار آمد. ادرارش کدر و بدبو بود. آزمایش ادرار pyuria و bacteriuria نشان داد و تشخیص acute pyelonephritis ناشی از cystitis بود.')}${memo('در pyelonephritis سه قطعه هست: pyel/o لگنچه، nephr/o کلیه و ‎-itis‎ التهاب؛ سه قطعه، یک بیماری.')}`),
          M('التهاب لگنچه و کلیه…', ['pyelonephritis', 'glomerulonephritis', 'cystitis', 'nephrosis'], 'pyel/o + nephr/o + ‎-itis‎.'),
          M('کدام نشانه بیشتر به پیلونفریت اشاره دارد تا سیستیت؟', ['تب و درد پهلو', 'سوزش ادرار', 'تکرر ادرار', 'فوریت ادرار'], 'درگیری کلیه.'),
          T('پیلونفریت اغلب از عفونت مثانه‌ای که بالا رفته ایجاد می‌شود.', true, 'عفونت بالارونده.'),
          W('واژه‌ای بساز به معنی «التهاب لگنچه و کلیه»', ['pyel/o', 'nephr/o', '-itis'], ['cyst/o', '-lith', 'glomerul/o'], 'pyelonephritis.'),
          P('هر یافته را به معنی‌اش وصل کن', [['pyuria', 'چرک در ادرار'], ['bacteriuria', 'باکتری در ادرار'], ['flank pain', 'درد پهلو'], ['urgency', 'فوریت ادرار']], 'یافته‌ها.'),
          B('عفونت فقط لگنچه کلیه ___ است.', ['pyelitis', 'pyuria', 'nephritis'], 'pyel/o + ‎-itis‎.'),
          S('املای انگلیسی «پیلونفریت» را بنویس', 'pyelonephritis', 'pyel/o + nephr/o + ‎-itis‎.', 'pyelo…'),
          N('f2t:dz')
        ]
      },
      {
        id: 'dz3', title: 'گلومرولونفریت و نفروز', icon: '🧶', items: [
          L('صافی ملتهب', `${fig('glomerulo-art', [], 'گلومرولونفریت')}${e('<b>glomerulonephritis</b>')} التهاب کلیه به‌ویژه گلومرول‌هاست که اغلب پس از عفونت استرپتوکوکی گلو یا پوست، یا با لوپوس، پیش می‌آید. نشانه‌ها: فشار خون بالا، ادم، ${e('oliguria')}، ${e('hematuria')} و ${e('proteinuria')}.`),
          L('سندرم نفروتیک', `${e('<b>nephrotic syndrome</b>')} یا ${e('nephrosis')}: گلومرول بیش از حد نفوذپذیر می‌شود و پروتئین زیادی از ادرار می‌رود؛ نتیجه‌اش ${e('hypoproteinemia')}، ادم و چربی بالای خون است. ${e('interstitial nephritis')} التهاب بافت میان لوله‌هاست.${memo('در glomerulonephritis ترتیب ریشه‌ها از ریز به درشت است: اول glomerul/o (گلومرول)، بعد nephr/o (کلیه) و در آخر ‎-itis‎.')}`),
          M('التهاب گلومرول‌ها و کلیه…', ['glomerulonephritis', 'pyelonephritis', 'cystitis', 'urethritis'], 'Bright disease.', null, F('glomerulo-art', [])),
          M('ویژگی اصلی سندرم نفروتیک…', ['پروتئین زیاد در ادرار', 'سنگ کلیه', 'چرک در ادرار', 'ادرار زیاد'], 'proteinuria.'),
          T('گلومرولونفریت اغلب پس از عفونت استرپتوکوکی ایجاد می‌شود.', true, 'واکنش ایمنی.'),
          W('واژه‌ای بساز به معنی «التهاب گلومرول و کلیه»', ['glomerul/o', 'nephr/o', '-itis'], ['pyel/o', '-lith', 'cyst/o'], 'glomerulonephritis.'),
          P('هر یافته را به معنی‌اش وصل کن', [['proteinuria', 'پروتئین در ادرار'], ['hypoproteinemia', 'پروتئین کم خون'], ['edema', 'تورم'], ['hematuria', 'خون در ادرار']], 'یافته‌ها.'),
          B('نام دیگر سندرم نفروتیک ___ است.', ['nephrosis', 'nephritis', 'nephroma'], 'nephr/o + ‎-osis‎.'),
          S('املای انگلیسی «سندرم نفروتیک» را بنویس', 'nephrotic syndrome', 'دو کلمه.', 'nephro…'),
          N('d2t:dz')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'dz4', title: 'سنگ‌ها', icon: '🪨', items: [
          L('جای سنگ‌ها', `${fig('stones-sites', [], 'جای سنگ‌ها')}${e('<b>calculus</b>')} (جمع: ${e('calculi')}) سنگی از نمک‌های معدنی مثل کلسیم است:<br>• ${e('<b>nephrolithiasis</b>')}: سنگ کلیه<br>• ${e('<b>ureterolith</b>')}: سنگ میزنای<br>• ${e('<b>cystolith</b>')}: سنگ مثانه<br>علت‌ها: کم‌آبی، عفونت، ${e('urinary stasis')} و اختلال سوخت‌وساز.`),
          L('روی شکل و عکس', `${fig('stones-tract', ['سنگ در کلیه، میزنای، مثانه و پیشابراه'], 'سنگ‌ها در مسیر ادرار')}${fig('staghorn', ['سنگ شاخ گوزنی در کلیه'], 'سنگ شاخ گوزنی')}${e('staghorn calculus')} سنگ بزرگی است که لگنچه و کالیس‌ها را پر می‌کند.${memo('calculus در لاتین یعنی سنگ‌ریزه؛ واژه حساب (calculate) هم از شمردن با سنگ‌ریزه آمده است.')}`),
          M('سنگ کلیه…', ['nephrolithiasis', 'nephroptosis', 'nephromegaly', 'nephrosis'], 'nephr/o + lith/o + ‎-iasis‎.', null, F('stones-sites', [])),
          M('جمع واژه calculus…', ['calculi', 'calculuses', 'calcula', 'calculae'], 'calculi.'),
          T('سنگ شاخ گوزنی لگنچه و کالیس‌ها را پر می‌کند.', true, 'staghorn calculus.', F('staghorn', [])),
          W('واژه‌ای بساز به معنی «سنگ مثانه»', ['cyst/o', '-lith'], ['nephr/o', '-tripsy', 'pyel/o'], 'cystolith.'),
          P('هر سنگ را به جایش وصل کن', [['nephrolith', 'کلیه'], ['ureterolith', 'میزنای'], ['cystolith', 'مثانه'], ['urolith', 'هر جای مجاری ادراری']], 'جای سنگ‌ها.'),
          B('ایستایی ادرار که سنگ و عفونت می‌سازد ___ است.', ['urinary stasis', 'urinary frequency', 'diuresis'], 'stasis.'),
          S('املای انگلیسی «سنگ کلیه» (بیماری) را بنویس', 'nephrolithiasis', 'nephr/o + lith/o + ‎-iasis‎.', 'nephroli…'),
          N('t2f:dz')
        ]
      },
      {
        id: 'dz5', title: 'قولنج و هیدرونفروز', icon: '💥', items: [
          L('انسداد', `${fig('hydronephrosis-art', [], 'هیدرونفروز')}وقتی سنگ یا تنگی (${e('stricture')}) میزنای را می‌بندد:<br>• ${e('<b>renal colic</b>')}: درد شدید و موجی پهلو<br>• ${e('<b>hydroureter</b>')}: اتساع میزنای از ادرار<br>• ${e('<b>hydronephrosis</b>')}: جمع شدن ادرار در لگنچه و کالیس‌ها و اتساع کلیه`),
          L('روی شکل کتاب', `${fig('hydronephrosis', ['هیدرونفروز، هیدرویورتر و تنگی'], 'هیدرونفروز')}${pearl('در تمرین پرونده یکی از فصل‌های پیوست، مردی ۶۵ ساله با درد شکم و سنگ کلیه، هیدرویورتر و هیدرونفروز راست داشت؛ کلیه راستش کوچک و زخمی (hypoplastic) بود و برای nephrectomy بستری شد.')}${memo('hydr/o یعنی آب: hydronephrosis یعنی «کلیه آب‌گرفته».')}`),
          M('جمع شدن ادرار در لگنچه از انسداد…', ['hydronephrosis', 'nephrosis', 'nephroptosis', 'pyelitis'], 'hydr/o + nephr/o + ‎-osis‎.', null, F('hydronephrosis-art', [])),
          M('درد شدید پهلو هنگام عبور سنگ…', ['renal colic', 'cystalgia', 'dysuria', 'urgency'], 'renal colic.'),
          T('hydroureter یعنی اتساع میزنای از ادرار پشت انسداد.', true, 'hydr/o + ureter.', F('hydronephrosis', [])),
          O('رخدادهای انسداد میزنای را بچین', ['stone blocks ureter', 'hydroureter', 'hydronephrosis', 'kidney damage'], 'انسداد، اتساع میزنای، اتساع کلیه، آسیب.'),
          P('هر واژه را به معنی‌اش وصل کن', [['stricture', 'تنگی'], ['renal colic', 'قولنج کلیوی'], ['hydroureter', 'اتساع میزنای'], ['hydronephrosis', 'اتساع کلیه']], 'انسداد.'),
          B('گشادی لگنچه کلیه ___ است.', ['pyelectasis', 'pyelitis', 'pyeloplasty'], 'pyel/o + ‎-ectasis‎.'),
          S('املای انگلیسی «هیدرونفروز» را بنویس', 'hydronephrosis', 'hydr/o + nephr/o + ‎-osis‎.', 'hydro…'),
          N('m2r:dz')
        ]
      },
      {
        id: 'dz6', title: 'نارسایی کلیه', icon: '⚠️', items: [
          L('حاد و مزمن', `${fig('renal-failure-art', [], 'نارسایی حاد و مزمن')}• ${e('<b>acute renal failure (ARF)</b>')} یا ${e('AKI')}: از دست رفتن ناگهانی کار کلیه با شوک، سم یا آسیب؛ اگر لوله‌ها بمیرند ${e('acute tubular necrosis (ATN)')}<br>• ${e('<b>chronic renal failure (CRF)</b>')} یا ${e('CKD')}: از دست رفتن تدریجی نفرون‌ها<br>• ${e('<b>end-stage renal disease (ESRD)</b>')}: مرحله پایانی؛ دیالیز یا پیوند`),
          L('پیامدها', `کم‌آبی در آغاز، بعد ادم، فشار خون بالا، کم‌خونی (کمبود EPO)، اسیدوز، پتاسیم بالا و ${e('uremia')}. ${e('renal insufficiency')} کاهش خفیف‌تر کار کلیه است.${pearl('در ابزار «ماشین‌حساب کلیه»، eGFR زیر ۱۵ یعنی مرحله G5 یا نارسایی کلیه.')}${memo('necr/o یعنی مرگ: acute tubular necrosis یعنی مرگ ناگهانی لوله‌های کلیه.')}`),
          M('مرحله پایانی و برگشت‌ناپذیر نارسایی کلیه…', ['ESRD', 'ARF', 'UTI', 'BNO'], 'end-stage renal disease.', null, F('renal-failure-art', [])),
          M('کم‌خونی در نارسایی مزمن کلیه به چه علت است؟', ['کمبود اریتروپویتین', 'زیادی رنین', 'کمبود ADH', 'زیادی اوره در ادرار'], 'EPO کم.'),
          T('نارسایی حاد کلیه ناگهانی است و گاهی برگشت‌پذیر.', true, 'ARF یا AKI.'),
          O('سیر نارسایی مزمن را بچین', ['renal insufficiency', 'chronic renal failure', 'end-stage renal disease', 'dialysis or transplant'], 'از خفیف تا درمان جایگزین.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['ARF', 'نارسایی حاد'], ['CRF', 'نارسایی مزمن'], ['ATN', 'نکروز حاد لوله‌ای'], ['ESRD', 'مرحله پایانی']], 'اختصارها.'),
          B('اختصار CKD یعنی chronic ___ disease.', ['kidney', 'kalium', 'ketone'], 'بیماری مزمن کلیه.'),
          S('املای انگلیسی «نارسایی کلیه» را بنویس', 'renal failure', 'دو کلمه.', 'renal…'),
          N('t2f:dz')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'dz7', title: 'دیابت، فشار خون و کلیه', icon: '🩺', items: [
          L('دشمنان آرام کلیه', `• ${e('<b>diabetic nephropathy</b>')}: آسیب مویرگ‌های گلومرول از قند بالای طولانی<br>• ${e('<b>renal hypertension</b>')}: فشار خون بالا ناشی از بیماری کلیه<br>• ${e('<b>nephrosclerosis</b>')}: سفت شدن بافت کلیه<br>• ${e('<b>diabetes insipidus</b>')}: کمبود ADH؛ ادرار زیاد و رقیق و تشنگی شدید`),
          L('در بالین', `${pearl('در سناریوی کاربردی کتاب، خانم Jocelyn Workus که ۲۵ سال دارد، دیابت دارد و کلیه‌هایش آسیب دیده‌اند. در پرونده‌اش nephromegaly، nephritis، uremia، anuria و trigonitis نوشته شده و در فهرست انتظار پیوند کلیه است.')}${vs(['diabetes mellitus', 'دیابت قندی؛ قند در ادرار'], ['diabetes insipidus', 'دیابت بی‌مزه؛ ADH کم'])}${memo('insipidus یعنی بی‌مزه؛ قدیم‌ها ادرار را می‌چشیدند و ادرار این بیماران شیرین نبود!')}`),
          M('آسیب کلیه از دیابت…', ['diabetic nephropathy', 'diabetes insipidus', 'nephroptosis', 'pyelitis'], 'nephr/o + ‎-pathy‎.'),
          M('دیابت بی‌مزه از کمبود کدام هورمون است؟', ['ADH', 'EPO', 'renin', 'insulin'], 'antidiuretic hormone.'),
          T('بیماری کلیه می‌تواند فشار خون را بالا ببرد.', true, 'renal hypertension.'),
          W('واژه‌ای بساز به معنی «سفتی کلیه»', ['nephr/o', '-sclerosis'], ['cyst/o', '-malacia', 'pyel/o'], 'nephrosclerosis.'),
          P('هر واژه پرونده Jocelyn را به معنی‌اش وصل کن', [['nephromegaly', 'بزرگی کلیه'], ['nephritis', 'التهاب کلیه'], ['anuria', 'بی‌ادراری'], ['trigonitis', 'التهاب مثلث مثانه']], 'پرونده.'),
          B('نرمی غیرطبیعی کلیه ___ است.', ['nephromalacia', 'nephromegaly', 'nephrosclerosis'], 'nephr/o + ‎-malacia‎.'),
          S('املای انگلیسی «بیماری کلیه» (nephropathy) را بنویس', 'nephropathy', 'nephr/o + ‎-pathy‎.', 'nephro…'),
          N('f2t:dz')
        ]
      },
      {
        id: 'dz8', title: 'کیست و ناهنجاری', icon: '🫧', items: [
          L('کلیه پلی‌کیستیک', `${fig('polycystic-art', [], 'کلیه پلی‌کیستیک')}${e('<b>polycystic kidney disease (PKD)</b>')} بیماری ارثی است که کیست‌های فراوان کم‌کم بافت کلیه را می‌گیرند و به نارسایی می‌رسد.${fig('polycystic-photo', ['کلیه پلی‌کیستیک: سطح و برش'], 'کلیه پلی‌کیستیک')}`),
          L('ناهنجاری‌ها', `${fig('congenital-art', [], 'ناهنجاری‌های کلیه')}• ${e('<b>horseshoe kidney</b>')}: دو کلیه از پایین به هم چسبیده<br>• ${e('<b>renal hypoplasia</b>')}: کلیه کم‌رشد<br>• ${e('<b>nephroptosis</b>')}: افتادگی کلیه (floating kidney)<br>• ${e('<b>hypospadias</b>')} و ${e('<b>epispadias</b>')}: دهانه پیشابراه در زیر یا روی آلت؛ مادرزادی و با جراحی درمان‌شدنی<br>• ${e('atresia')}: بسته یا تنگ بودن مادرزادی یک دهانه${memo('پیشوند hypo- یعنی زیر و epi- یعنی روی: hypospadias دهانه زیرین است و epispadias دهانه رویی.')}`),
          M('بیماری ارثی با کیست‌های فراوان در کلیه…', ['polycystic kidney disease', 'horseshoe kidney', 'nephroptosis', 'hydronephrosis'], 'PKD.', null, F('polycystic-drawing', ['کلیه پلی‌کیستیک و برش آن'])),
          M('دو کلیه که از قطب پایین به هم چسبیده‌اند…', ['horseshoe kidney', 'renal hypoplasia', 'nephromegaly', 'ureterocele'], 'نعل اسبی.', null, F('horseshoe-kidney', ['کلیه نعل‌اسبی'])),
          T('hypospadias یعنی دهانه پیشابراه روی سطح بالایی آلت است.', false, 'hypospadias زیرین است؛ رویی epispadias است.'),
          W('واژه‌ای بساز به معنی «افتادگی کلیه»', ['nephr/o', '-ptosis'], ['cyst/o', '-megaly', 'ren/o'], 'nephroptosis.'),
          P('هر ناهنجاری را به معنی‌اش وصل کن', [['horseshoe kidney', 'کلیه نعل‌اسبی'], ['renal hypoplasia', 'کلیه کم‌رشد'], ['epispadias', 'دهانه رویی پیشابراه'], ['atresia', 'بسته بودن مادرزادی']], 'ناهنجاری‌ها.'),
          B('بزرگی کلیه ___ است.', ['nephromegaly', 'nephromalacia', 'nephroptosis'], 'nephr/o + ‎-megaly‎.'),
          S('املای انگلیسی «پلی‌کیستیک» را بنویس', 'polycystic', 'poly- + cyst/o + ‎-ic‎.', 'poly…'),
          N('d2t:dz')
        ]
      },
      {
        id: 'dz9', title: 'تومورها', icon: '🎗️', items: [
          L('تومور کلیه و مثانه', `${fig('kidney-tumors', [], 'تومورها')}• ${e('<b>Wilms tumor</b>')} یا ${e('<b>nephroblastoma</b>')}: تومور بدخیم کلیه در کودکان زیر ۵ سال<br>• ${e('<b>renal cell carcinoma</b>')}: سرطان سلول‌های لوله کلیه در بزرگسالان؛ ${e('hypernephroma')}<br>• ${e('<b>bladder cancer</b>')}: سرطان مثانه؛ نشانه کلیدی خون بی‌درد در ادرار؛ سیگار عامل خطر مهم است<br>• ${e('nephroma')}: هر تومور کلیه`),
          L('روی عکس', `${fig('kidney-cancer', ['کلیه برداشته‌شده با تومور'], 'سرطان کلیه')}${fig('bladder-tumor', ['تومور مثانه از دید سیستوسکوپ'], 'تومور مثانه در سیستوسکوپی')}${memo('blast/o یعنی سلول نابالغ؛ nephroblastoma توموری از سلول‌های نابالغ کلیه کودک است.')}`),
          M('تومور بدخیم کلیه در کودکان…', ['Wilms tumor', 'renal cell carcinoma', 'bladder cancer', 'cystolith'], 'nephroblastoma.', null, F('kidney-tumors', [])),
          M('نشانه کلیدی سرطان مثانه…', ['خون بی‌درد در ادرار', 'تب و لرز', 'ادرار زیاد', 'درد پهلو هنگام سنگ'], 'painless hematuria.'),
          T('سیگار عامل خطر مهم سرطان مثانه است.', true, 'به‌همراه مواد شیمیایی شغلی.', F('bladder-tumor', [])),
          W('واژه‌ای بساز به معنی «تومور کلیه»', ['nephr/o', '-oma'], ['cyst/o', '-itis', 'pyel/o'], 'nephroma.'),
          P('هر تومور را به ویژگی‌اش وصل کن', [['Wilms tumor', 'کودکان'], ['renal cell carcinoma', 'بزرگسالان، لوله کلیه'], ['bladder cancer', 'خون بی‌درد'], ['nephroma', 'هر تومور کلیه']], 'تومورها.'),
          B('نام دیگر تومور ویلمز ___ است.', ['nephroblastoma', 'nephrolith', 'nephrosclerosis'], 'blast/o.'),
          S('املای انگلیسی «نفروبلاستوم» را بنویس', 'nephroblastoma', 'nephr/o + blast/o + ‎-oma‎.', 'nephrob…'),
          N('m2r:dz')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نِفرا — دنیای ۵: تشخیص و درمان
 * سطح ۱: تصویربرداری و آندوسکوپی • سطح ۲: سونداژ، دیالیز و سنگ‌شکنی • سطح ۳: جراحی، پیوند و دارو */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'tx', sym: 'Tx', name: 'تشخیص و درمان', short: 'تشخیص و درمان', sub: 'KUB، IVP و پیلوگرافی، سیستوسکوپی، سونداژ، همودیالیز و دیالیز صفاقی، سنگ‌شکنی، جراحی‌های کلیه و مثانه، پیوند و داروها',
    color: '#17A398', dark: '#0E6E66', light: '#E2F6F3',
    levels: ['تصویربرداری و آندوسکوپی', 'سونداژ، دیالیز و سنگ‌شکنی', 'جراحی، پیوند و دارو'],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'tx1', title: 'عکس با و بی ماده حاجب', icon: '🩻', items: [
          L('چهار عکس', `${fig('imaging-art', [], 'تصویربرداری')}• ${e('<b>KUB</b>')}: عکس ساده شکم از کلیه، میزنای و مثانه، بدون ماده حاجب<br>• ${e('<b>IVP / IVU</b>')}: حاجب در سیاهرگ تزریق و از کلیه دفع می‌شود<br>• ${e('<b>retrograde pyelography (RP)</b>')}: حاجب از پایین با سیستوسکوپ به میزنای و لگنچه<br>• ${e('<b>VCUG</b>')}: حاجب در مثانه و عکس هنگام ادرار کردن`),
          L('روی تصویر', `${fig('iv-urogram', ['لگنچه‌ها، میزنای‌ها و مثانه در اوروگرام وریدی'], 'اوروگرام وریدی')}${fig('retrograde-xray', ['پیلوگرام رتروگراد'], 'پیلوگرام رتروگراد')}${memo('پیشوند retro- یعنی رو به عقب؛ در RP حاجب برخلاف جریان ادرار، از پایین به بالا می‌رود.')}`),
          M('عکسی که حاجب را از سیاهرگ می‌دهد…', ['intravenous pyelography', 'retrograde pyelography', 'KUB', 'cystoscopy'], 'IVP.', null, F('imaging-art', [])),
          M('عکس ساده شکم بدون حاجب…', ['KUB', 'IVP', 'VCUG', 'RP'], 'flat-plate abdomen.'),
          T('در VCUG عکس هنگام ادرار کردن گرفته می‌شود.', true, 'voiding cystourethrography.', F('iv-urogram', [])),
          W('واژه‌ای بساز به معنی «عکس‌برداری از لگنچه»', ['pyel/o', '-graphy'], ['cyst/o', '-scope', 'nephr/o'], 'pyelography.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['KUB', 'کلیه، میزنای، مثانه'], ['IVP', 'پیلوگرافی وریدی'], ['RP', 'پیلوگرافی رتروگراد'], ['VCUG', 'عکس هنگام ادرار']], 'تصویربرداری.'),
          B('اختصار IVU یعنی intravenous ___.', ['urography', 'ureteroscopy', 'urinalysis'], 'اوروگرافی وریدی.'),
          S('املای انگلیسی «رتروگراد» را بنویس', 'retrograde', 'retro- + grade.', 'retro…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: 'نگاره‌ها و اسکن', icon: '📷', items: [
          L('‎-gram‎ و ‎-graphy‎', `${tbl([['واژه', 'معنی'], [e('cystogram'), 'نگاره مثانه'], [e('nephrogram'), 'نگاره کلیه'], [e('pyelogram'), 'نگاره لگنچه'], [e('urogram'), 'نگاره مجاری ادراری'], [e('renogram'), 'اسکن هسته‌ای کار کلیه'], [e('renal angiography'), 'عکس رگ‌های کلیه']])}`),
          L('سونوگرافی و بیوپسی', `${e('<b>ultrasonography (US)</b>')} با امواج صوتی اندازه کلیه، کیست، تومور و انسداد را نشان می‌دهد؛ پیش از آن بیمار آب زیادی می‌نوشد تا مثانه پر شود. ${e('<b>renal biopsy</b>')} نمونه‌برداری با سوزن زیر هدایت سونوگرافی است.${fig('urogram-xray', ['کلیه‌ها و میزنای‌ها در اوروگرام'], 'اوروگرام دفعی')}${memo('پسوند ‎-gram‎ خود عکس است و ‎-graphy‎ روش گرفتنش.')}`),
          M('نگاره کلیه…', ['nephrogram', 'cystogram', 'pyelogram', 'renogram'], 'nephr/o + ‎-gram‎.'),
          M('روش تصویربرداری با امواج صوتی…', ['ultrasonography', 'cystography', 'urography', 'angiography'], 'US.'),
          T('‎-gram‎ یعنی خود تصویر و ‎-graphy‎ یعنی روش ثبت آن.', true, 'record و recording.', F('urogram-xray', [])),
          W('واژه‌ای بساز به معنی «نگاره مثانه»', ['cyst/o', '-gram'], ['nephr/o', '-scopy', 'pyel/o'], 'cystogram.'),
          P('هر واژه را به معنی‌اش وصل کن', [['cystogram', 'نگاره مثانه'], ['pyelogram', 'نگاره لگنچه'], ['renogram', 'اسکن کار کلیه'], ['renal biopsy', 'نمونه‌برداری کلیه']], 'نگاره‌ها.'),
          B('اختصار US یعنی ___.', ['ultrasonography', 'urinary scan', 'urethral stent'], 'سونوگرافی.'),
          S('املای انگلیسی «سونوگرافی» را بنویس', 'ultrasonography', 'ultra + son/o + ‎-graphy‎.', 'ultra…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: 'سیستوسکوپی و سیستومتری', icon: '🔭', items: [
          L('دیدن درون مثانه', `${fig('cystoscopy-art', [], 'سیستوسکوپی')}${e('<b>cystoscope</b>')} ابزار نوری است که از پیشابراه وارد مثانه می‌شود. ${e('<b>cystoscopy</b>')} برای دیدن تومور و التهاب، نمونه‌برداری و برداشتن سنگ و پولیپ است. ابزارهای مشابه: ${e('urethroscope')}، ${e('ureteroscope')} و ${e('nephroscopy')}.`),
          L('روی شکل کتاب', `${fig('cystoscopy', ['سیستوسکوپ در پیشابراه و مثانه'], 'سیستوسکوپی')}${e('<b>cystometrography (CMG)</b>')} کار مثانه را می‌سنجد: مثانه پر و فشار دیواره ثبت می‌شود؛ نگاره‌اش ${e('cystometrogram')} است.${memo('پسوند ‎-scope‎ ابزار است و ‎-scopy‎ کار با آن؛ cystoscope را در دست می‌گیرند و cystoscopy را انجام می‌دهند.')}`),
          M('ابزار دیدن درون مثانه…', ['cystoscope', 'cystoscopy', 'urinometer', 'nephroscope'], '‎-scope‎ = ابزار.', null, F('cystoscopy-art', [])),
          M('آزمونی که فشار مثانه را هنگام پر شدن می‌سنجد…', ['cystometrography', 'cystography', 'urinalysis', 'renogram'], 'CMG.'),
          T('سیستوسکوپی برای نمونه‌برداری و برداشتن سنگ هم به کار می‌رود.', true, 'cysto.', F('cystoscopy', [])),
          W('واژه‌ای بساز به معنی «ابزار دیدن میزنای»', ['ureter/o', '-scope'], ['cyst/o', '-graphy', 'urethr/o'], 'ureteroscope.'),
          P('هر ابزار یا روش را به کارش وصل کن', [['cystoscopy', 'دیدن مثانه'], ['urethroscope', 'ابزار دیدن پیشابراه'], ['nephroscopy', 'دیدن درون کلیه'], ['cystometrography', 'سنجش فشار مثانه']], 'آندوسکوپی.'),
          B('اختصار cysto یعنی ___.', ['cystoscopy', 'cystitis', 'cystocele'], 'سیستوسکوپی.'),
          S('املای انگلیسی «سیستوسکوپی» را بنویس', 'cystoscopy', 'cyst/o + ‎-scopy‎.', 'cysto…'),
          N('d2t:tx')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'tx4', title: 'سونداژ', icon: '🧷', items: [
          L('سوند ادراری', `${fig('catheter-art', [], 'سوند فولی')}${e('<b>catheter</b>')} لوله انعطاف‌پذیری است برای بیرون آوردن یا وارد کردن مایع. ${e('<b>catheterization (cath)</b>')} گذاشتن سوند از پیشابراه به مثانه است. ${e('<b>Foley catheter</b>')} سوند ماندگار با بادکنکی است که آن را در مثانه نگه می‌دارد.`),
          L('روی شکل کتاب', `${fig('foley-female', ['سوند فولی در مثانه زن'], 'سوند فولی')}${fig('catheter-bag', ['تخلیه کیسه ادرار'], 'کیسه سوند')}${e('condom catheter')} سوند خارجی با غلاف و کیسه پاست. با سوند، ${e('intake and output (I&O)')} دقیق ثبت می‌شود.${memo('catheter در یونانی یعنی «چیزی که پایین فرستاده می‌شود»؛ سوند ادرار را پایین می‌فرستد.')}`),
          M('سوند ماندگار با بادکنک…', ['Foley catheter', 'condom catheter', 'ureteral stent', 'cystoscope'], 'Foley.', null, F('catheter-art', [])),
          M('اختصار cath یعنی…', ['catheterization', 'cathartic', 'cystoscopy', 'calculus'], 'سونداژ.'),
          T('سوند ادراری خطر عفونت ادراری را کم می‌کند.', false, 'سوند خطر UTI را بالا می‌برد.', F('catheter-female', ['سوند در مثانه زن و یک سوند جدا'])),
          O('مراحل سونداژ را بچین', ['clean the meatus', 'insert catheter', 'inflate balloon', 'drain urine'], 'تمیز کردن، گذاشتن، باد کردن، تخلیه.'),
          P('هر واژه را به معنی‌اش وصل کن', [['catheter', 'سوند'], ['Foley catheter', 'سوند ماندگار'], ['condom catheter', 'سوند خارجی'], ['I&O', 'جذب و دفع مایعات']], 'سونداژ.'),
          B('اختصار EUD یعنی external urinary ___.', ['drainage', 'dialysis', 'device'], 'تخلیه خارجی ادرار.'),
          S('املای انگلیسی «سونداژ» را بنویس', 'catheterization', 'catheter + ‎-ization‎؛ دام املایی cathaterization.', 'cathe…'),
          N('m2r:tx')
        ]
      },
      {
        id: 'tx5', title: 'همودیالیز', icon: '🫀', items: [
          L('کلیه مصنوعی', `${fig('hemodialysis-art', [], 'همودیالیز')}${e('<b>dialysis</b>')} یعنی گذر مواد از غشای نیمه‌تراوا. در ${e('<b>hemodialysis (HD)</b>')} خون بیمار از دستگاه دیالیز می‌گذرد و مایع ${e('dialysate')}، اوره و پتاسیم اضافه را بیرون می‌کشد؛ معمولاً ۴ ساعت، سه بار در هفته.`),
          L('روی تصویر', `${fig('hemodialysis', ['دستگاه همودیالیز و خطوط خون'], 'همودیالیز')}${fig('hemodialysis-photo', ['بیمار هنگام همودیالیز'], 'بیمار دیالیزی')}${pearl('تکنسین همودیالیز پیش و پس از دیالیز وزن و علائم حیاتی بیمار را ثبت می‌کند و دستگاه را می‌پاید.')}${memo('پیشوند dia- یعنی از میان و ‎-lysis‎ یعنی جدا کردن: جدا کردن مواد از میان یک غشا.')}`),
          M('پاک کردن خون با دستگاه کلیه مصنوعی…', ['hemodialysis', 'peritoneal dialysis', 'lithotripsy', 'catheterization'], 'hem/o + dialysis.', null, F('hemodialysis-art', [])),
          M('مایع دیالیز را چه می‌نامند؟', ['dialysate', 'filtrate', 'urine', 'plasma'], 'dialysate.'),
          T('همودیالیز معمولاً سه بار در هفته انجام می‌شود.', true, 'حدود ۴ ساعت هر بار.', F('hemodialysis', [])),
          O('مسیر خون در همودیالیز را بچین', ['patient artery', 'blood line', 'dialyzer', 'back to vein'], 'از بیمار به دستگاه و برگشت.'),
          P('هر واژه را به معنی‌اش وصل کن', [['dialysis', 'گذر از غشا'], ['hemodialysis', 'دیالیز خون'], ['dialysate', 'مایع دیالیز'], ['HD', 'همودیالیز']], 'دیالیز.'),
          B('غشای دیالیز ___ است؛ بعضی مواد را رد می‌کند.', ['semipermeable', 'impermeable', 'calcified'], 'نیمه‌تراوا.'),
          S('املای انگلیسی «همودیالیز» را بنویس', 'hemodialysis', 'hem/o + dialysis.', 'hemo…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx6', title: 'دیالیز صفاقی', icon: '🧴', items: [
          L('صفاق، صافی است', `${fig('pd-art', [], 'دیالیز صفاقی')}در ${e('<b>peritoneal dialysis</b>')} مایع دیالیز با کاتتر وارد حفره صفاق می‌شود، چند ساعت می‌ماند تا مواد زائد از خون به آن بروند، بعد بیرون کشیده می‌شود. صفاق نقش غشای دیالیز را دارد.`),
          L('انواع', `${tbl([['اختصار', 'معنی'], [e('CAPD'), 'دیالیز صفاقی سرپایی مداوم؛ چند بار در روز'], [e('CCPD'), 'دیالیز صفاقی چرخه‌ای؛ شب‌ها با دستگاه'], [e('IPD'), 'دیالیز صفاقی متناوب']])}${fig('peritoneal-dialysis', ['ورود و خروج مایع دیالیز'], 'دیالیز صفاقی')}${memo('peritone/o یعنی صفاق؛ peritoneal dialysis یعنی دیالیز با صفاق.')}`),
          M('در دیالیز صفاقی چه چیزی نقش غشا را دارد؟', ['peritoneum', 'dialyzer', 'glomerulus', 'bladder'], 'صفاق.', null, F('pd-art', [])),
          M('دیالیز صفاقی که بیمار در طول روز و سرپایی انجام می‌دهد…', ['CAPD', 'CCPD', 'HD', 'ESWL'], 'continuous ambulatory.'),
          T('CCPD بیشتر شب‌ها با دستگاه انجام می‌شود.', true, 'continuous cyclic.', F('peritoneal-dialysis', [])),
          O('یک دور دیالیز صفاقی را بچین', ['fill cavity with dialysate', 'dwell several hours', 'drain used fluid'], 'پر کردن، ماندن، تخلیه.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['CAPD', 'سرپایی مداوم'], ['CCPD', 'چرخه‌ای شبانه'], ['IPD', 'متناوب'], ['HD', 'همودیالیز']], 'انواع دیالیز.'),
          B('صفت «صفاقی» ___ است.', ['peritoneal', 'perirenal', 'peritubular'], 'peritone/o + ‎-al‎.'),
          S('املای انگلیسی «صفاقی» را بنویس', 'peritoneal', 'peritone/o + ‎-al‎.', 'perit…'),
          N('f2t:tx')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'tx7', title: 'سنگ‌شکنی و برداشتن سنگ', icon: '🔨', items: [
          L('بی‌برش یا با برش', `${fig('eswl-art', [], 'سنگ‌شکنی برون‌اندامی')}• ${e('<b>lithotripsy</b>')}: خرد کردن سنگ تا با ادرار دفع شود<br>• ${e('<b>extracorporeal shock wave lithotripsy (ESWL)</b>')}: امواج ضربه‌ای از بیرون بدن؛ بدون جراحی<br>• ${e('<b>lithotomy</b>')}: برش برای درآوردن سنگ<br>• ${e('<b>nephrolithotomy</b>')}: درآوردن سنگ از کلیه؛ نوع percutaneous از راه پوست با آندوسکوپ`),
          L('روی شکل کتاب', `${fig('eswl-machine', ['تخت و دستگاه سنگ‌شکنی'], 'دستگاه ESWL')}${fig('ureteral-stent', ['استنت از کلیه تا مثانه'], 'استنت میزنای')}${fig('lithotripsy-bag', ['موج از کیسه آب به کلیه می‌رسد'], 'سنگ‌شکنی با کیسه آب')}${e('ureteral stent')} لوله نازکی در میزنای است تا ادرار از کنار انسداد رد شود.${memo('پیشوند extra- (بیرون) + corpor/o (بدن) + ‎-eal‎: extracorporeal یعنی بیرون از بدن.')}`),
          M('سنگ‌شکنی با موج از بیرون بدن…', ['ESWL', 'lithotomy', 'nephrectomy', 'cystoscopy'], 'extracorporeal.', null, F('eswl-art', [])),
          M('برش کلیه برای درآوردن سنگ…', ['nephrolithotomy', 'nephropexy', 'nephrostomy', 'nephrorrhaphy'], 'nephr/o + lith/o + ‎-tomy‎.'),
          T('ESWL به برش جراحی نیاز ندارد.', true, 'noninvasive.', F('eswl-beam', ['پرتو متمرکز روی سنگ کلیه'])),
          W('واژه‌ای بساز به معنی «خرد کردن سنگ»', ['lith/o', '-tripsy'], ['nephr/o', '-tomy', 'cyst/o'], 'lithotripsy.'),
          P('هر روش را به معنی‌اش وصل کن', [['lithotripsy', 'خرد کردن سنگ'], ['lithotomy', 'برش برای سنگ'], ['pyelolithotomy', 'سنگ از لگنچه'], ['ureteral stent', 'لوله در میزنای']], 'درمان سنگ.'),
          B('پس از سنگ‌شکنی، ادرار را ___ می‌کنند تا تکه‌ها پیدا شوند.', ['strain', 'heat', 'freeze'], 'صاف کردن ادرار.'),
          S('املای انگلیسی «سنگ‌شکنی» را بنویس', 'lithotripsy', 'lith/o + ‎-tripsy‎؛ دام املایی lithotripsey.', 'litho…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx8', title: 'جراحی کلیه و مثانه', icon: '🩹', items: [
          L('پسوندهای جراحی', `${fig('surgery-suffixes', [], 'پسوندهای جراحی')}${e('nephrectomy')} برداشتن کلیه، ${e('nephrostomy')} منفذ از کلیه به پوست، ${e('pyeloplasty')} ترمیم لگنچه، ${e('cystectomy')} برداشتن مثانه، ${e('cystopexy')} تثبیت مثانه و ${e('meatotomy')} برش سوراخ پیشابراه برای گشاد کردن آن.`),
          L('وقتی مثانه نیست', `${fig('stent-conduit', [], 'استنت و مجرای ایلئومی')}${fig('ileal-conduit', ['میزنای‌ها به تکه‌ای از ایلئوم وصل شده‌اند'], 'مجرای ایلئومی')}پس از ${e('cystectomy')}، میزنای‌ها را به تکه‌ای از ایلئوم وصل می‌کنند که روی شکم باز می‌شود: ${e('<b>ileal conduit</b>')} یا ${e('urostomy')}.${memo('سه پسوند شبیه هم: ‎-tomy‎ یعنی برش، ‎-ectomy‎ یعنی برداشتن و ‎-stomy‎ یعنی دهانه تازه؛ حرف‌های e و s فرق‌ساز هستند.')}`),
          M('برداشتن کلیه…', ['nephrectomy', 'nephrotomy', 'nephrostomy', 'nephropexy'], '‎-ectomy‎.', null, F('surgery-suffixes', [])),
          M('منفذ مصنوعی شکم برای خروج ادرار…', ['urostomy', 'cystotomy', 'urethropexy', 'lithotomy'], 'ur/o + ‎-stomy‎.'),
          T('nephropexy یعنی تثبیت کلیه‌ای که افتاده است.', true, '‎-pexy‎ = تثبیت.'),
          W('واژه‌ای بساز به معنی «ترمیم لگنچه»', ['pyel/o', '-plasty'], ['nephr/o', '-ectomy', 'cyst/o'], 'pyeloplasty.'),
          P('هر جراحی را به معنی‌اش وصل کن', [['cystectomy', 'برداشتن مثانه'], ['cystopexy', 'تثبیت مثانه'], ['nephrorrhaphy', 'بخیه کلیه'], ['meatotomy', 'برش سوراخ پیشابراه']], 'جراحی‌ها.'),
          B('ایجاد منفذ در مثانه از دیواره شکم ___ است.', ['cystostomy', 'cystotomy', 'cystectomy'], 'cyst/o + ‎-stomy‎.'),
          S('املای انگلیسی «برداشتن کلیه» را بنویس', 'nephrectomy', 'nephr/o + ‎-ectomy‎.', 'neph…'),
          N('m2r:tx')
        ]
      },
      {
        id: 'tx9', title: 'پیوند و داروها', icon: '💊', items: [
          L('پیوند کلیه', `${fig('transplant-art', [], 'پیوند کلیه')}در ${e('<b>renal transplantation</b>')} کلیه اهدایی در پایین شکم، کنار رگ‌های ایلیاک، گذاشته و میزنایش به مثانه وصل می‌شود؛ کلیه‌های بیمار معمولاً سر جایشان می‌مانند.${fig('renal-transplant', ['کلیه پیوندی و کلیه‌های بیمار'], 'جای کلیه پیوندی')}`),
          L('داروها', `${tbl([['دارو', 'کار'], [e('antibiotic'), 'درمان عفونت ادراری؛ مثل ciprofloxacin'], [e('diuretic'), 'افزایش ادرار؛ مثل furosemide'], [e('antispasmodic'), 'کاهش اسپاسم مثانه؛ مثل oxybutynin'], [e('anticholinergic'), 'درمان مثانه بیش‌فعال'], [e('ACE inhibitor'), 'پایین آوردن فشار خون']])}${memo('پیشوند anti- یعنی ضد: antibiotic ضد میکروب، antispasmodic ضد اسپاسم.')}`),
          M('کلیه پیوندی معمولاً کجا گذاشته می‌شود؟', ['پایین شکم کنار رگ‌های ایلیاک', 'جای کلیه بیمار', 'پشت مثانه', 'زیر دیافراگم'], 'iliac fossa.', null, F('transplant-iliac', ['کلیه پیوندی و رگ‌های ایلیاک'])),
          M('دارویی که اسپاسم مثانه را کم می‌کند…', ['antispasmodic', 'diuretic', 'antibiotic', 'ACE inhibitor'], 'oxybutynin.'),
          T('در پیوند کلیه، کلیه‌های بیمار همیشه برداشته می‌شوند.', false, 'معمولاً سر جایشان می‌مانند.', F('renal-transplant', [])),
          O('مراحل پیوند کلیه را بچین', ['find a matching donor', 'place kidney near iliac vessels', 'connect ureter to bladder', 'follow-up'], 'اهدا، جاگذاری، اتصال، پیگیری.'),
          P('هر دارو را به کارش وصل کن', [['antibiotic', 'عفونت ادراری'], ['diuretic', 'افزایش ادرار'], ['antispasmodic', 'اسپاسم مثانه'], ['ACE inhibitor', 'فشار خون']], 'داروها.'),
          B('داروی ادرارآور معروف furosemide یک ___ است.', ['diuretic', 'antibiotic', 'antispasmodic'], 'water pill.'),
          S('املای انگلیسی «ادرارآور» را بنویس', 'diuretic', 'دام املایی: diuritic نیست.', 'diur…'),
          N('t2f:tx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* نِفرا — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. شکل‌ها از کلیه، گلومرول، لوله کلیوی، قطره ادرار، مثانه، ظرف نمونه، سنگ و دیالیز الهام گرفته‌اند. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: 'نِفری', title: 'کلیه لوبیایی کنجکاو', shape: 'kidney', color: '#C8574F', acc: ['sparkle'], bio: 'یک کلیه شاد که روزی حدود ۱۸۰ لیتر خون را تصفیه می‌کند؛ nephr/o و ren/o نام‌های اویند.' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'ریشه‌یاب', title: 'استاد nephr/o و cyst/o', shape: 'book', color: '#B0413E', acc: ['glasses'], bio: 'لغت‌نامه‌ای زنده که هر واژه ادراری را به ریشه، پیشوند و پسوند می‌شکند و ureter را با urethra قاطی نمی‌کند.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'پازلی', title: 'سلطان پسوند ‎-uria‎', shape: 'puzzle', color: '#7E2A28', acc: ['crown'], bio: 'an-، olig/o و poly- را کنار ‎-uria‎، ‎-lith‎ و ‎-tripsy‎ می‌چیند و واژه تازه می‌سازد.' },
    { id: 'kd-0', w: 'kd', lv: 0, name: 'گلومرولی', title: 'کلاف صافی خون', shape: 'glom', color: '#F6DC8F', acc: ['sparkle'], bio: 'کلاف مویرگی درون کپسول بومن؛ آب، نمک و اوره را از خون رد می‌کند ولی گلبول و پروتئین را نگه می‌دارد.' },
    { id: 'kd-1', w: 'kd', lv: 1, name: 'لوله‌ای', title: 'قهرمان بازجذب', shape: 'tube', color: '#F2C94C', acc: ['glasses'], bio: 'از لوله پیچیده نزدیک تا قوس هنله، بیشتر آب و قند را به خون برمی‌گرداند تا بدن خشک نشود.' },
    { id: 'kd-2', w: 'kd', lv: 2, name: 'پیک EPO', title: 'نامه‌رسان مغز استخوان', shape: 'envelope', color: '#D9443A', acc: ['crown'], bio: 'اریتروپویتین را از کلیه به مغز استخوان می‌برد تا گلبول قرمز بسازد؛ رفیقش رنین فشار خون را بالا می‌برد.' },
    { id: 'tr-0', w: 'tr', lv: 0, name: 'قطره زرد', title: 'مسافر میزنای', shape: 'drop', color: '#F2C94C', acc: ['sparkle'], bio: 'با موج‌های دودی میزنای پایین می‌رود و هر ۱۰ تا ۳۰ ثانیه به مثانه می‌ریزد.' },
    { id: 'tr-1', w: 'tr', lv: 1, name: 'مثانه‌جان', title: 'انبار کشسان ادرار', shape: 'bladder', color: '#F2B3A6', acc: ['glasses'], bio: 'با چین‌های rugae کش می‌آید و حدود ۳۰۰ تا ۴۰۰ میلی‌لیتر که شد، با عضله دترسور پیام تخلیه می‌دهد.' },
    { id: 'tr-2', w: 'tr', lv: 2, name: 'قفل اسفنکتر', title: 'نگهبان کنترل ادرار', shape: 'lock', color: '#8E2F2A', acc: ['crown'], bio: 'اسفنکتر خارجی ارادی است؛ اگر ضعیف شود بی‌اختیاری استرسی پیش می‌آید.' },
    { id: 'ur-0', w: 'ur', lv: 0, name: 'ظرف نمونه', title: 'شکارچی نمونه تمیز', shape: 'cup', color: '#F6E27A', acc: ['sparkle'], bio: 'فقط ادرار وسط جریان را می‌گیرد (clean-catch) تا میکروب‌های پوست آزمایش را خراب نکنند.' },
    { id: 'ur-1', w: 'ur', lv: 1, name: 'نوار رنگی', title: 'خواننده آزمایش ادرار', shape: 'ruler', color: '#9CCC65', acc: ['glasses'], bio: 'هر خانه‌اش یک آزمون است: قند، کتون، خون، پروتئین، pH و وزن مخصوص؛ مثبت شدن هر خانه یک ‎-uria‎ است.' },
    { id: 'ur-2', w: 'ur', lv: 2, name: 'ترازوی الکترولیت', title: 'نگهبان سدیم و پتاسیم', shape: 'scale', color: '#2B86C5', acc: ['crown'], bio: 'hypernatremia و hypokalemia را از هم جدا می‌کند و می‌داند کلیه چطور pH خون را میزان نگه می‌دارد.' },
    { id: 'dz-0', w: 'dz', lv: 0, name: 'سنگ‌ریزه', title: 'دردسرساز لگنچه', shape: 'stone', color: '#B08A5A', acc: ['sparkle'], bio: 'سنگ کلیه‌ای از نمک‌های کلسیم که با گیر کردن در میزنای قولنج کلیوی و هیدرونفروز می‌سازد.' },
    { id: 'dz-1', w: 'dz', lv: 1, name: 'آنتی‌بادی', title: 'شکارچی E. coli', shape: 'yab', color: '#3F8A05', acc: ['glasses'], bio: 'با میکروب‌هایی می‌جنگد که از پیشابراه بالا می‌روند تا سیستیت به پیلونفریت نرسد.' },
    { id: 'dz-2', w: 'dz', lv: 2, name: 'سپر نفرون', title: 'نگهبان صافی کلیه', shape: 'shield', color: '#6D4BC3', acc: ['crown'], bio: 'گلومرول‌ها را از دیابت و فشار خون بالا حفظ می‌کند تا کار به نارسایی مزمن کلیه نکشد.' },
    { id: 'tx-0', w: 'tx', lv: 0, name: 'دیالیزگر', title: 'کلیه مصنوعی', shape: 'capsule', color: '#17A398', acc: ['sparkle'], bio: 'خون را از غشای نیمه‌تراوا رد می‌کند تا اوره و پتاسیم اضافه به مایع دیالیز بروند.' },
    { id: 'tx-1', w: 'tx', lv: 1, name: 'eGFR‌سنج', title: 'حسابگر کار کلیه', shape: 'meter', color: '#2B86C5', acc: ['glasses'], bio: 'از کراتینین، سن و جنس، eGFR را حساب می‌کند و مرحله بیماری مزمن کلیه را از G1 تا G5 می‌گوید.' },
    { id: 'tx-2', w: 'tx', lv: 2, name: 'نسخه‌نویس نِفرا', title: 'استاد پرونده اورولوژی', shape: 'clipboard', color: '#7E2A28', acc: ['cape', 'crown'], bio: 'UA، KUB، IVP، ESWL و CAPD را در یک نگاه می‌خواند و از آزمایش ادرار تا پیوند کلیه همراه است.' }
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
    dyna: { fy: 64, top: 16, body: c => `<rect x="44" y="96" width="32" height="48" rx="10" fill="#77868E"/><rect x="30" y="110" width="60" height="11" rx="5" fill="#B7C2C8"/><circle cx="60" cy="62" r="48" fill="${c}"/><circle cx="60" cy="62" r="38" fill="#fff"/><path d="M60 26 v6 M94 62 h-6 M26 62 h6 M84 38 l-4 4 M36 38 l4 4" stroke="#9AA9B1" stroke-width="3" stroke-linecap="round"/>` },
    /* کلیه لوبیایی با ناف رو به راست و دم میزنای */
    kidney: { fy: 90, top: 34, body: c => `<path d="M76 98 C86 112 84 130 92 146" stroke="#E7C26B" stroke-width="7" fill="none" stroke-linecap="round"/><path transform="translate(54 92) scale(1.02 0.94)" d="M-6 -60 C26 -64 40 -40 38 -18 C36 -8 24 -6 22 0 C24 6 36 8 38 18 C40 40 26 64 -6 60 C-34 56 -44 28 -44 0 C-44 -28 -34 -56 -6 -60Z" fill="${c}"/><path d="M22 62 C16 78 16 98 20 112" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".35"/>` },
    /* مثانه بادکنکی با ادرار، دو میزنای و پیشابراه */
    bladder: { fy: 78, top: 30, body: c => `<path d="M34 34 C32 20 30 12 28 4 M86 34 C88 20 90 12 92 4" stroke="#E7C26B" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M60 128 V146" stroke="#E7C26B" stroke-width="8" stroke-linecap="round"/><path d="M18 74 C16 30 104 30 102 74 C104 108 80 128 60 130 C40 128 16 108 18 74Z" fill="${c}"/><path d="M22 96 C30 116 46 126 60 126 C74 126 90 116 98 96Z" fill="#F2C94C" opacity=".75"/><ellipse cx="38" cy="54" rx="7" ry="11" transform="rotate(28 38 54)" fill="#fff" opacity=".4"/>` },
    /* سنگ نامنظم */
    stone: { fy: 88, top: 42, body: c => `<path d="M30 54 L58 40 L88 48 L106 76 L100 112 L74 136 L40 132 L16 108 L14 74Z" fill="${c}" stroke="#6F522C" stroke-width="3" stroke-linejoin="round"/><path d="M40 60 L52 54" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".4"/><circle cx="86" cy="118" r="3" fill="#6F522C" opacity=".5"/><circle cx="30" cy="96" r="2.5" fill="#6F522C" opacity=".5"/>` },
    /* ظرف نمونه ادرار با درپوش */
    cup: { fy: 86, top: 34, body: c => `<rect x="20" y="36" width="80" height="14" rx="5" fill="#E05A4F"/><path d="M24 50 H96 L90 144 H30Z" fill="#fff" stroke="#9fb3c2" stroke-width="3"/><path d="M27 104 H93 L90 141 H30Z" fill="${c}"/><path d="M34 60 L38 132" stroke="#fff" stroke-width="5" opacity=".7"/>` },
    /* کلاف گلومرول درون کپسول بومن */
    glom: { fy: 92, top: 38, body: c => `<circle cx="60" cy="94" r="52" fill="${c}"/><circle cx="60" cy="94" r="42" fill="#FFF8E6"/><path d="M28 94 C30 66 60 60 64 80 C68 100 44 104 50 84 C56 64 92 72 88 96 C84 118 56 122 50 108 C44 92 76 92 74 110 C72 128 40 126 34 110" stroke="#E07A70" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/><path d="M8 70 C18 66 26 72 30 80" stroke="#D9443A" stroke-width="7" fill="none" stroke-linecap="round"/>` },
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

  const FACE_X = { kidney: 52 };
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
/* نِفرا — راند بالینی: پرونده‌های چندمرحله‌ای
 * کیس‌ها از مطالعات موردی و تمرین‌های فایل‌های پیوست آمده‌اند: Case Study کتاب Cohen (بی‌اختیاری استرسی Jade، Case Study 14-1
 * سنگ کلیه Helen و Case Study 14-2 نارسایی کلیه Adrien)، Case Study، Discharge Summary و Chart Note Transcription کتاب Fremgen،
 * Chart Note سیستیت کتاب Gylys، تمرین‌های پرونده فصل‌های دیگر (مرد ۶۵ ساله با هیدرونفروز، Heather با سنگ مثانه، Mr. Chavez)
 * و سناریوهای کاربردی (Betty Garble، Mark Grey، Harvey Mews، Brad Leighton، Jana Smith و گزارش آزمایش ادرار James Delgado).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان کلیه ================= */
    {
      id: 'r1', w: 'lx', title: 'ارجاع به اورولوژیست', who: 'Betty Garble، خانم ۴۶ ساله',
      brief: 'در سناریوی کاربردی کتاب، پزشک خانواده خانم Betty Garble را که پنج فرزند به دنیا آورده، به اورولوژیست ارجاع داده است، چون در کنترل ادرارش مشکل دارد. باید به او توضیح دهی اورولوژیست کیست و کدام ساختار خروج ادرار را کنترل می‌کند.',
      chart: [['Age', '46'], ['CC', 'trouble controlling urine'], ['Referral', 'urologist']],
      fig: { a: 'specialists', l: [] },
      steps: [
        M('متخصص', 'urologist کیست؟', ['متخصص بیماری‌های مجاری ادراری و دستگاه تناسلی مرد', 'متخصص کلیه و دیالیز', 'متخصص زنان', 'متخصص اعصاب'], 'ur/o + ‎-logist‎.'),
        M('واژه', 'اصطلاح پزشکی «ناتوانی در نگه‌داشتن ادرار»…', ['incontinence', 'retention', 'anuria', 'dysuria'], 'urinary incontinence.'),
        M('ساختار', 'کدام ساختار خروج ارادی ادرار را کنترل می‌کند؟', ['external urethral sphincter', 'internal urethral sphincter', 'trigone', 'detrusor muscle'], 'اسفنکتر خارجی ارادی است.', null, { a: ['bladder-art'], l: [] }),
        T('زایمان', 'زایمان‌های متعدد می‌تواند بافت نگهدارنده لگن را سست کند و بی‌اختیاری استرسی بدهد.', true, 'stress incontinence.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['urology', 'اورولوژی'], ['continence', 'کنترل ادرار'], ['incontinence', 'بی‌اختیاری'], ['urologist', 'متخصص اورولوژی']], 'سناریوی کاربردی کتاب.'),
        S('املا', 'املای «بی‌اختیاری» را بنویس', 'incontinence', 'in- + continence.', 'incon…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: 'پرونده‌ای پر از واژه', who: 'Harvey Mews، مرد ۹۰ ساله',
      brief: 'در سناریوی کاربردی کتاب، داری پرونده کاغذی آقای Harvey Mews را وارد پرونده الکترونیک می‌کنی. در آن نوشته شده: renogram، cystitis، diabetes، hemodialysis، KUB، cystoscopy، cystourethrogram و cystotomy. باید روش‌ها، تصویربرداری‌ها و بیماری‌ها را از هم جدا کنی.',
      chart: [['Age', '90'], ['Dx', 'cystitis, diabetes'], ['Imaging', 'renogram, KUB, cystourethrogram'], ['Procedures', 'hemodialysis, cystoscopy, cystotomy']],
      fig: { a: 'wordparts', l: [] },
      steps: [
        P('دسته', 'هر واژه را به دسته‌اش وصل کن', [['renogram', 'تصویربرداری'], ['cystitis', 'بیماری'], ['hemodialysis', 'درمان'], ['cystoscopy', 'آندوسکوپی']], 'دسته‌بندی.'),
        M('پسوند', 'پسوند ‎-tomy‎ در cystotomy یعنی…', ['برش', 'برداشتن', 'دیدن', 'ثبت'], 'cystotomy = برش مثانه.'),
        M('اختصار', 'KUB یعنی…', ['kidneys, ureters, bladder', 'kidney urine balance', 'kidney ultrasound', 'kidney urea blood'], 'عکس ساده شکم.', null, { a: ['imaging-art'], l: [] }),
        T('واژه', 'cystourethrogram نگاره مثانه و پیشابراه است.', true, 'cyst/o + urethr/o + ‎-gram‎.'),
        M('ریشه', 'ریشه ren/o در renogram یعنی…', ['کلیه', 'مثانه', 'ادرار', 'لگنچه'], 'renogram = اسکن کلیه.'),
        S('املا', 'املای «التهاب مثانه» را بنویس', 'cystitis', 'cyst/o + ‎-itis‎.', 'cys…')
      ]
    },
    {
      id: 'r3', w: 'lx', title: 'بازنویسی با اختصار', who: 'یادداشت پرونده (سناریوی کاربردی کتاب)',
      brief: 'در سناریوی کاربردی کتاب این یادداشت آمده است: «بیمار عفونت‌های مکرر مجاری ادراری دارد که با آزمایش ادرار ثابت شده و سابقه سنگ‌شکنی برون‌اندامی برای سنگ کلیه دارد. سیستواورتروگرام حین ادرار، پیلوگرام رتروگراد، عکس کلیه-میزنای-مثانه و پیلوگرام وریدی انجام شده است.» باید آن را با اختصارها بازنویسی کنی.',
      chart: [['Hx', 'frequent infections, stones'], ['Tests', 'urinalysis, four imaging studies'], ['Plan', 'refer back to urologist']],
      fig: { a: 'imaging-art', l: [] },
      steps: [
        P('اختصار', 'هر عبارت را به اختصارش وصل کن', [['urinary tract infection', 'UTI'], ['urinalysis', 'UA'], ['extracorporeal shock wave lithotripsy', 'ESWL'], ['voiding cystourethrogram', 'VCUG']], 'اختصارها.'),
        P('اختصار', 'هر تصویربرداری را به اختصارش وصل کن', [['retrograde pyelogram', 'RP'], ['kidneys, ureters, bladder', 'KUB'], ['intravenous pyelogram', 'IVP'], ['voiding cystogram', 'VCG']], 'تصویربرداری‌ها.'),
        M('تفاوت', 'در کدام عکس حاجب از سیاهرگ داده می‌شود؟', ['IVP', 'RP', 'VCUG', 'KUB'], 'intravenous.'),
        T('اختصار', 'ESWL به برش جراحی نیاز ندارد.', true, 'extracorporeal.', { a: ['eswl-art'], l: [] }),
        M('واژه', 'lithotripsy یعنی…', ['خرد کردن سنگ', 'برش برای سنگ', 'سنگ کلیه', 'عکس سنگ'], 'lith/o + ‎-tripsy‎.'),
        S('املا', 'املای «آزمایش ادرار» را بنویس', 'urinalysis', 'urin/o + analysis.', 'urina…')
      ]
    },
    /* ================= کلیه و نفرون ================= */
    {
      id: 'r4', w: 'kd', title: 'کلاس سوم: کلیه چطور کار می‌کند؟', who: 'کلاس آقای Mark Grey',
      brief: 'در سناریوی کاربردی کتاب، آقای Mark Grey معلم کلاس سوم از تو خواسته ساختار و کار کلیه را برای بچه‌ها توضیح دهی: کلیه از چه بخش‌هایی ساخته شده، ادرار چه دارد و چه مسیری می‌رود.',
      chart: [['Audience', 'third-grade class'], ['Topic', 'kidney structure and function'], ['Questions', 'parts, urine, flow']],
      fig: { a: 'kidney-section-art', l: [] },
      steps: [
        M('بخش', 'بخش بیرونی کلیه را چه می‌نامند؟', ['cortex', 'medulla', 'pelvis', 'hilum'], 'renal cortex.', null, { a: ['kidney-section-art'], l: [] }),
        M('واحد', 'کوچک‌ترین واحد سازنده ادرار…', ['nephron', 'calyx', 'ureter', 'pyramid'], 'بیش از یک میلیون در هر کلیه.'),
        T('ادرار', 'ادرار حدود ۹۵٪ آب است.', true, 'به‌علاوه اوره، نمک و مواد زائد.'),
        O('مسیر', 'مسیر ادرار را برای بچه‌ها بچین', ['nephron', 'calyx', 'renal pelvis', 'ureter', 'bladder', 'urethra'], 'از نفرون تا بیرون.'),
        P('واژه', 'هر بخش را به توضیح ساده‌اش وصل کن', [['glomerulus', 'صافی خون'], ['renal pelvis', 'قیف جمع‌کننده'], ['ureter', 'لوله به مثانه'], ['bladder', 'کیسه نگه‌دارنده']], 'زبان ساده.'),
        S('املا', 'املای «نفرون» را بنویس', 'nephron', 'nephr/o.', 'neph…')
      ]
    },
    {
      id: 'r5', w: 'kd', title: 'دنبال کردن جریان', who: 'تمرین «Follow the Flow» کتاب Cohen',
      brief: 'در تمرین مرور کتاب Cohen باید مسیر ساخت و حرکت ادرار را از رسیدن خون به گلومرول تا بیرون رفتن از پیشابراه مرتب کنی و هر گام را به بخش نفرون وصل کنی.',
      chart: [['Start', 'blood flows through glomerulus'], ['Middle', 'filtrate, reabsorption, collecting ducts'], ['End', 'urethra']],
      fig: { a: 'urine-formation', l: [] },
      steps: [
        O('جریان', 'گام‌ها را به ترتیب بچین', ['blood enters glomerulus', 'filtrate enters nephron', 'tubular reabsorption', 'urine to collecting ducts', 'renal pelvis to ureters', 'bladder to urethra'], 'ترتیب کتاب.'),
        M('گام', 'بازگشت آب و مواد مغذی به خون در کدام بخش است؟', ['peritubular capillaries', 'glomerular capsule', 'urethra', 'calyx'], 'بازجذب.'),
        M('رگ', 'سرخرگچه‌ای که خون را از گلومرول می‌برد…', ['efferent arteriole', 'afferent arteriole', 'renal vein', 'aorta'], 'وابران.', null, { a: ['renal-blood'], l: [] }),
        T('هورمون', 'ADH بازجذب آب را زیاد می‌کند و ادرار را غلیظ می‌کند.', true, 'antidiuretic hormone.'),
        P('گام', 'هر گام را به جایش وصل کن', [['filtration', 'گلومرول'], ['reabsorption', 'لوله به مویرگ'], ['secretion', 'مویرگ به لوله'], ['storage', 'مثانه']], 'جای گام‌ها.'),
        S('املا', 'املای «گلومرول» را بنویس', 'glomerulus', 'glomerul/o.', 'glom…')
      ]
    },
    {
      id: 'r6', w: 'kd', title: 'کراتین یا کراتینین؟', who: 'Mr. Chavez، بیمار بستری',
      brief: 'در تمرین واژه‌های همزاد یکی از فصل‌های پیوست، آقای Chavez با گلومرولونفریت بستری شده و آزمایش‌هایش سطح غیرطبیعی یکی از مواد زائد ادرار را نشان داده است. باید واژه درست را انتخاب کنی و بفهمی این ماده درباره کار کلیه چه می‌گوید.',
      chart: [['Dx', 'glomerulonephritis'], ['Lab', 'abnormal urinary creatinine'], ['Concern', 'kidney function']],
      fig: { a: 'glomerulo-art', l: [] },
      steps: [
        M('دام', 'در پرونده باید کدام نوشته شود؟', ['creatinine', 'creatine', 'keratin', 'creatinase'], 'creatinine ماده زائد است.'),
        M('معنی', 'creatinine از کجا می‌آید؟', ['سوخت‌وساز عضله', 'سوخت‌وساز چربی', 'کبد', 'گلبول قرمز'], 'waste of muscle metabolism.'),
        T('کار کلیه', 'بالا رفتن کراتینین خون نشانه کاهش کار کلیه است.', true, 'نشانه نارسایی.'),
        M('شاخص', 'کدام عدد از کراتینین، سن و جنس کار کلیه را تخمین می‌زند؟', ['eGFR', 'SG', 'pH', 'BUN'], 'estimated GFR.', null, { a: ['egfr-gauge'], l: [] }),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['glomerulonephritis', 'التهاب گلومرول و کلیه'], ['creatinine', 'ماده زائد عضله'], ['creatine', 'ترکیب عضله'], ['clearance', 'پاک‌سازی پلاسما']], 'دام‌ها.'),
        S('املا', 'املای «کراتینین» را بنویس', 'creatinine', 'دو n.', 'creat…')
      ]
    },
    /* ================= مثانه و دفع ادرار ================= */
    {
      id: 'r7', w: 'tr', title: 'بی‌اختیاری هنگام گلف', who: 'Jade، خانم ۵۲ ساله',
      brief: 'در Case Study کتاب Cohen آمده است: Jade زنی ۵۲ ساله با سابقه stress incontinence است که به خاطر نشت ادرار هنگام فشار جسمی، ورزش را کم کرده است. برای ورود به یک پژوهش بالینی، نمونه clean-catch، سیستومتری (CMG) و cystoscopy انجام داد و دو هفته دفترچه ادرار نوشت. سلول‌های عضله رانش کشت و دور پیشابراه تزریق شد و یک سال بعد ۹۵٪ بهبود داشت.',
      chart: [['Age', '52'], ['Dx', 'stress incontinence'], ['Tests', 'clean-catch, CMG, cystoscopy'], ['Tx', 'muscle stem cell injection']],
      fig: { a: 'incontinence-types', l: [] },
      steps: [
        M('واژه', 'نشت ادرار هنگام سرفه، ورزش یا فشار…', ['stress incontinence', 'urge incontinence', 'enuresis', 'urinary retention'], 'stress.'),
        M('آزمون', 'سیستومتری (CMG) چه می‌سنجد؟', ['فشار مثانه هنگام پر شدن', 'رنگ ادرار', 'اندازه کلیه', 'قند خون'], 'cystometrography.'),
        T('نشانه', 'nocturia یعنی ادرار کردن در شب.', true, 'در شرح حال Jade پرسیده شد.'),
        O('روند', 'روند Jade را به ترتیب بچین', ['urologic history', 'clean-catch and CMG', 'stem cell injection', 'follow-up at 3 months'], 'از بررسی تا پیگیری.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['urgency', 'فوریت ادرار'], ['frequency', 'تکرر ادرار'], ['cystoscopy', 'دیدن درون مثانه'], ['sphincter', 'عضله حلقوی']], 'Case Study.'),
        S('املا', 'املای «سیستوسکوپی» را بنویس', 'cystoscopy', 'cyst/o + ‎-scopy‎.', 'cysto…')
      ]
    },
    {
      id: 'r8', w: 'tr', title: 'انسداد گردن مثانه', who: 'مرد بستری با درد پهلوی راست',
      brief: 'در Discharge Summary کتاب Fremgen آمده است: مردی با سابقه عفونت‌های مکرر مثانه با درد شدید پهلوی راست و خون در ادرار بستری شد. آزمایش ادرار نمونه تمیز، hematuria و pyuria بدون albuminuria نشان داد. در cystoscopy سیستیت مزمن و انسداد مادرزادی گردن مثانه دیده شد. بیمار را سونداژ کردند تا مثانه کامل خالی شود.',
      chart: [['Admit Dx', 'right side pain, hematuria'], ['Final Dx', 'pyelonephritis R kidney; chronic cystitis'], ['Finding', 'bladder neck obstruction'], ['Tx', 'catheterization, antibiotics, fluids']],
      fig: { a: 'bladder-art', l: [] },
      steps: [
        M('اختصار', 'BNO یعنی…', ['bladder neck obstruction', 'bilateral nephric outflow', 'bladder nerve output', 'blood nitrogen oxide'], 'انسداد گردن مثانه.'),
        M('درمان', 'چرا بیمار را سونداژ کردند؟', ['تا مثانه کامل خالی شود', 'برای عکس رنگی', 'برای تزریق دارو به کلیه', 'برای سنگ‌شکنی'], 'رفع احتباس.', null, { a: ['catheter-art'], l: [] }),
        T('یافته', 'pyuria یعنی چرک در ادرار.', true, 'py/o + ‎-uria‎.'),
        M('علت', 'علت احتمالی سیستیت مزمن این بیمار…', ['انسداد گردن مثانه', 'سنگ کلیه چپ', 'دیابت', 'کم‌آبی'], 'ادرار راکد عفونت می‌آورد.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['hematuria', 'خون در ادرار'], ['albuminuria', 'آلبومین در ادرار'], ['catheterization', 'سونداژ'], ['chronic cystitis', 'التهاب مزمن مثانه']], 'Discharge Summary.'),
        S('املا', 'املای «سونداژ» را بنویس', 'catheterization', 'catheter + ‎-ization‎.', 'cathe…')
      ]
    },
    {
      id: 'r9', w: 'tr', title: 'بی‌اختیاری موقت', who: 'خانم ۵۰ ساله',
      brief: 'در Chart Note کتاب Gylys آمده است: خانمی ۵۰ ساله از ۱۰ روز پس از سیستوسکوپی درد منتشر لگن و اسپاسم مثانه دارد و در آن سیستوسکوپی سیستیت شدید دیده شده بود. او شبی سه تا چهار بار ادرار می‌کند و تکرر و فوریت دارد. سابقه پرادراری، خون در ادرار و بی‌اختیاری دارد. نتیجه پزشک: بی‌اختیاری ناشی از سیستیت و موقت است.',
      chart: [['Age', '50'], ['Sx', 'nocturia ×3–4, frequency, urgency'], ['Hx', 'polyuria, hematuria, incontinence'], ['Impression', 'incontinence from cystitis, temporary']],
      fig: { a: 'incontinence-types', l: [] },
      steps: [
        P('نشانه', 'هر نشانه را به واژه‌اش وصل کن', [['night urination', 'nocturia'], ['excessive urination', 'polyuria'], ['blood in urine', 'hematuria'], ['loss of bladder control', 'incontinence']], 'Chart Note.'),
        M('علت', 'علت بی‌اختیاری این بیمار چیست؟', ['سیستیت', 'سنگ کلیه', 'آسیب نخاع', 'پروستات'], 'impression.'),
        T('پیش‌آگهی', 'پزشک بی‌اختیاری را موقت دانسته است.', true, 'temporary in nature.'),
        M('واژه', 'urgency یعنی…', ['نیاز فوری به ادرار', 'ادرار زیاد', 'ادرار شبانه', 'ادرار دردناک'], 'urgency.'),
        M('آزمون', 'سیستیت در کدام روش دیده شد؟', ['cystoscopy', 'KUB', 'renogram', 'urinalysis'], 'دیدن مستقیم مثانه.', null, { a: ['cystoscopy-art'], l: [] }),
        S('املا', 'املای «ادرار شبانه» را بنویس', 'nocturia', 'noct/i + ‎-uria‎.', 'noct…')
      ]
    },
    /* ================= ادرار و نشانه‌ها ================= */
    {
      id: 'r10', w: 'ur', title: 'برگه آزمایش ادرار', who: 'James Delgado، مرد ۵۵ ساله در اورژانس',
      brief: 'در برگه نمونه آزمایش ادرار یکی از فصل‌های پیوست، ادرار تمیز آقای James Delgado زرد و کدر (hazy) است. وزن مخصوص 1.018، قند طبیعی، خون 2+، pH برابر 5.0، پروتئین ناچیز، نیتریت منفی، لکوسیت 2+، گلبول سفید ۲۰ تا ۵۰ و باکتری 2+ گزارش شده است.',
      chart: [['Appearance', 'yellow, hazy'], ['SG', '1.018'], ['Blood / Leukocytes', '2+ / 2+'], ['WBC', '20–50 /HPF'], ['Bacteria', '2+']],
      fig: { a: 'ua-dipstick', l: [] },
      steps: [
        M('تفسیر', 'این الگو بیشتر به چه اشاره دارد؟', ['عفونت ادراری', 'دیابت', 'کم‌آبی ساده', 'ادرار طبیعی'], 'گلبول سفید و باکتری بالا.'),
        T('وزن مخصوص', 'وزن مخصوص 1.018 در محدوده طبیعی است.', true, '1.001 تا 1.030.', { a: ['sg-scale'], l: [] }),
        P('یافته', 'هر یافته را به واژه‌اش وصل کن', [['blood 2+', 'hematuria'], ['leukocytes 2+', 'pyuria'], ['bacteria 2+', 'bacteriuria'], ['hazy', 'turbidity']], 'یافته‌ها.'),
        M('گام بعد', 'برای پیدا کردن میکروب و آنتی‌بیوتیک مناسب چه آزمایشی لازم است؟', ['culture and sensitivity', 'KUB', 'cystoscopy', 'renogram'], 'C&S.'),
        M('نمونه', 'چرا نمونه به روش clean-catch گرفته شد؟', ['تا آلودگی کم شود', 'تا ادرار غلیظ شود', 'برای اندازه‌گیری حجم', 'برای عکس رنگی'], 'نمونه میانی تمیز.', null, { a: ['clean-catch'], l: [] }),
        S('املا', 'املای «باکتری در ادرار» را بنویس', 'bacteriuria', 'bacteri/o + ‎-uria‎.', 'bacteri…')
      ]
    },
    {
      id: 'r11', w: 'ur', title: 'دیابت و نوار ادرار', who: 'Brad Leighton، پسر ۱۱ ساله',
      brief: 'در سناریوی کاربردی کتاب، Brad Leighton پسری ۱۱ ساله با دیابت نوجوانی است. پزشک آزمایش ادرار را برای استون، کتون، قند، وزن مخصوص و pH خواسته است. باید معنی هر آزمون را بدانی و بگویی قند به‌طور طبیعی در ادرار هست یا نه.',
      chart: [['Age', '11'], ['Dx', 'juvenile diabetes'], ['Order', 'UA: acetone, ketones, glucose, SG, pH']],
      fig: { a: 'ua-dipstick', l: [] },
      steps: [
        T('قند', 'در ادرار طبیعی قند وجود ندارد.', true, 'glucose: none.'),
        M('واژه', 'قند در ادرار…', ['glycosuria', 'ketonuria', 'hematuria', 'pyuria'], 'glycos/o + ‎-uria‎.'),
        M('کتون', 'کتون در ادرار یعنی بدن…', ['به جای قند چربی می‌سوزاند', 'آب زیادی نوشیده', 'عفونت دارد', 'سنگ دارد'], 'ketonuria.'),
        M('وزن مخصوص', 'وزن مخصوص چه چیزی را نشان می‌دهد؟', ['غلظت مواد حل‌شده در ادرار', 'رنگ ادرار', 'تعداد باکتری', 'حجم روزانه'], 'specific gravity.', null, { a: ['sg-scale'], l: [] }),
        P('آزمون', 'هر آزمون را به معنی‌اش وصل کن', [['glucose', 'قند'], ['ketones', 'کتون'], ['pH', 'اسیدی یا قلیایی'], ['SG', 'وزن مخصوص']], 'نوار ادرار.'),
        S('املا', 'املای «کتون در ادرار» را بنویس', 'ketonuria', 'keton/o + ‎-uria‎.', 'keto…')
      ]
    },
    {
      id: 'r12', w: 'ur', title: 'دونده تشنه', who: 'Jana Smith، دونده ماراتن',
      brief: 'در سناریوی کاربردی کتاب، خانم Jana Smith که برای ماراتن تمرین می‌کند و پیش از دویدن آب و غذای کمی خورده، از ادرار دردناک، ادرار کم و تشنگی شکایت دارد. در آزمایشش قند منفی، کتون و استون ناچیز، گلبول سفید زیاد و گلبول قرمز مثبت است.',
      chart: [['Sx', 'painful, scanty urine; thirst'], ['Glucose', 'negative'], ['Ketones / acetone', 'trace'], ['WBC', 'large'], ['RBC', 'positive']],
      fig: { a: 'output-terms', l: [] },
      steps: [
        P('نشانه', 'هر نشانه را به واژه‌اش وصل کن', [['painful urination', 'dysuria'], ['scanty urine', 'oliguria'], ['thirst', 'polydipsia'], ['red cells in urine', 'hematuria']], 'نشانه‌ها.'),
        M('کتون', 'علت احتمالی کتون ناچیز در این بیمار…', ['گرسنگی و ورزش سنگین', 'دیابت قطعی', 'سنگ کلیه', 'نارسایی کلیه'], 'سوختن چربی.'),
        T('اولویت', 'گلبول سفید زیاد در ادرار باید از نظر عفونت بررسی شود.', true, 'pyuria.'),
        M('حجم', 'oliguria یعنی…', ['ادرار کم', 'ادرار زیاد', 'بی‌ادراری', 'ادرار شبانه'], 'olig/o + ‎-uria‎.', null, { a: ['output-terms'], l: [] }),
        M('توصیه', 'توصیه مناسب برای کم‌آبی…', ['نوشیدن مایعات کافی', 'دیورتیک', 'قطع غذا', 'ورزش بیشتر'], 'جبران مایعات.'),
        S('املا', 'املای «تشنگی زیاد» را بنویس', 'polydipsia', 'poly- + dips/o + ‎-ia‎.', 'polyd…')
      ]
    },
    /* ================= بیماری‌های ادراری ================= */
    {
      id: 'r13', w: 'dz', title: 'تب، لرز و سوزش ادرار', who: 'خانم ۳۲ ساله در مطب اورولوژی',
      brief: 'در Case Study کتاب Fremgen آمده است: خانمی ۳۲ ساله با تب، لرز و خستگی آمده و از فوریت، تکرر، ادرار دردناک و خون در ادرار می‌گوید. ادرارش کدر و بدبوست. پزشک آزمایش ادرار نمونه تمیز، کشت و آنتی‌بیوگرام و عکس KUB خواست. آزمایش ادرار pyuria، bacteriuria و pH کمی اسیدی نشان داد و تشخیص acute pyelonephritis ناشی از cystitis بود. آنتی‌بیوتیک و نوشیدن دو لیتر آب در روز تجویز شد.',
      chart: [['Age', '32'], ['Sx', 'fever, chills, urgency, frequency, dysuria, hematuria'], ['UA', 'pyuria, bacteriuria'], ['Dx', 'acute pyelonephritis from cystitis'], ['Tx', 'antibiotic, push fluids']],
      fig: { a: 'uti-ascending', l: [] },
      steps: [
        M('تشخیص', 'دو عفونت این بیمار کدام‌اند؟', ['cystitis و pyelonephritis', 'urethritis و nephrosis', 'cystitis و nephrolithiasis', 'pyelitis و glomerulonephritis'], 'مثانه و کلیه.'),
        M('مسیر', 'کدام عفونت باعث دیگری شد؟', ['سیستیت به کلیه بالا رفت', 'پیلونفریت به مثانه پایین آمد', 'هر دو جدا بودند', 'از خون آمد'], 'عفونت بالارونده.', null, { a: ['uti-ascending'], l: [] }),
        P('نشانه', 'هر نشانه را به واژه‌اش وصل کن', [['painful urination', 'dysuria'], ['blood in urine', 'hematuria'], ['pus in urine', 'pyuria'], ['need to urinate often', 'frequency']], 'Case Study.'),
        T('آزمون', 'KUB عکس ساده بدون ماده حاجب است.', true, 'kidneys, ureters, bladder.'),
        O('روند', 'روند کار را بچین', ['history and symptoms', 'clean-catch UA and C&S', 'KUB', 'antibiotic and fluids'], 'از شرح حال تا درمان.'),
        S('املا', 'املای «پیلونفریت» را بنویس', 'pyelonephritis', 'pyel/o + nephr/o + ‎-itis‎.', 'pyelo…')
      ]
    },
    {
      id: 'r14', w: 'dz', title: 'سنگ شاخ گوزنی', who: 'Helen، خانم ۴۸ ساله',
      brief: 'در Case Study 14-1 کتاب Cohen آمده است: Helen خانمی ۴۸ ساله با درد شدید پهلوی راست است که با مسکن آرام نمی‌شود. سه ماه عفونت مزمن ادراری داشته و شش ماه است برای پوکی استخوان مکمل کلسیم می‌خورد. اوروگرام وریدی یک staghorn calculus راست نشان داد. سنگ میزنای با لیزر خرد شد، یک سوند رتروگراد گذاشتند و percutaneous nephrolithotomy انجام شد. هنگام ترخیص گفتند یک هفته ادرارش را صاف کند.',
      chart: [['Age', '48'], ['CC', 'severe right flank pain'], ['Hx', 'chronic UTI; calcium supplements'], ['Imaging', 'IV urogram: right staghorn calculus'], ['Tx', 'laser lithotripsy, percutaneous nephrolithotomy']],
      fig: { a: 'stones-sites', l: [] },
      steps: [
        M('سنگ', 'staghorn calculus چیست؟', ['سنگ بزرگی که لگنچه و کالیس‌ها را پر می‌کند', 'سنگ مثانه', 'سنگ کیسه صفرا', 'سنگ کوچک پیشابراه'], 'شاخ گوزنی.', null, { a: ['stones-sites'], l: [] }),
        M('واژه', 'percutaneous یعنی…', ['از راه پوست', 'زیر پوست', 'روی سطح', 'با سوند'], 'per- + cutane/o.'),
        M('درمان', 'nephrolithotomy یعنی…', ['برش کلیه برای درآوردن سنگ', 'خرد کردن سنگ با موج', 'برداشتن کلیه', 'تثبیت کلیه'], 'nephr/o + lith/o + ‎-tomy‎.'),
        T('خطر', 'مصرف مکمل کلسیم برای کسی که سنگ‌ساز است می‌تواند مشکل‌ساز باشد.', true, 'stone former.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['lithotripsy', 'خرد کردن سنگ'], ['hematuria', 'خون در ادرار'], ['nocturia', 'ادرار شبانه'], ['IV urogram', 'عکس رنگی وریدی']], 'Case Study 14-1.'),
        S('املا', 'املای «سنگ‌شکنی» را بنویس', 'lithotripsy', 'lith/o + ‎-tripsy‎.', 'litho…')
      ]
    },
    {
      id: 'r15', w: 'dz', title: 'کلیه آب‌گرفته', who: 'مرد ۶۵ ساله',
      brief: 'در تمرین پرونده یکی از فصل‌های پیوست، مردی ۶۵ ساله با درد شکمی که دو سال می‌آید و می‌رود بستری شد. سنگ کلیه داشت. اوروگرافی کار ضعیف کلیه راست را با کلیه‌ای کوچک و زخمی (hypoplastic) نشان داد. در cystoscopy و MRI کلیه راست جای نامناسبی داشت و یک تنگی در یک‌سوم پایینی میزنای دیده شد. تشخیص پذیرش: hydroureter و hydronephrosis راست؛ برای nephrectomy بستری شد.',
      chart: [['Age', '65'], ['Admit Dx', 'right hydroureter and hydronephrosis'], ['Findings', 'renal calculi, hypoplastic scarred kidney, distal ureteral stricture'], ['Plan', 'nephrectomy']],
      fig: { a: 'hydronephrosis-art', l: [] },
      steps: [
        M('واژه', 'hydronephrosis یعنی…', ['جمع شدن ادرار و اتساع لگنچه از انسداد', 'التهاب کلیه', 'سنگ کلیه', 'کلیه کوچک'], 'hydr/o + nephr/o + ‎-osis‎.', null, { a: ['hydronephrosis-art'], l: [] }),
        M('واژه', 'stricture یعنی…', ['تنگی', 'گشادی', 'سنگ', 'التهاب'], 'narrowing.'),
        T('واژه', 'hypoplastic kidney یعنی کلیه کم‌رشد.', true, 'hypo- + ‎-plasia‎.'),
        M('درمان', 'nephrectomy یعنی…', ['برداشتن کلیه', 'برش کلیه', 'تثبیت کلیه', 'ترمیم لگنچه'], 'nephr/o + ‎-ectomy‎.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['hydroureter', 'اتساع میزنای'], ['distal', 'دور از مرکز'], ['urography', 'عکس مجاری ادراری'], ['renal calculi', 'سنگ‌های کلیه']], 'پرونده.'),
        S('املا', 'املای «هیدرونفروز» را بنویس', 'hydronephrosis', 'hydr/o + nephr/o + ‎-osis‎.', 'hydro…')
      ]
    },
    /* ================= تشخیص و درمان ================= */
    {
      id: 'r16', w: 'tx', title: 'سنگ در میزنای راست', who: 'مرد ۳۶ ساله',
      brief: 'در Chart Note Transcription کتاب Fremgen آمده است: مردی ۳۶ ساله با درد پهلوی راست و خون در ادرار پیش متخصص مجاری ادراری آمد. سابقه عفونت مثانه داشت. آزمایش ادرار نمونه تمیز، خون بدون چرک نشان داد. در عکسی که با تزریق حاجب به مثانه گرفته شد، رنگ در میزنای راست فقط تا نیمه بالا رفت. تشخیص سنگ میزنای راست بود؛ با امواج صوتی سنگ خرد شد و تکه‌ها دفع شدند.',
      chart: [['Age', '36'], ['CC', 'right flank pain, hematuria'], ['Imaging', 'retrograde pyelogram: right ureter fills halfway'], ['Dx', 'right ureterolith'], ['Tx', 'ESWL']],
      fig: { a: 'eswl-art', l: [] },
      steps: [
        P('بازنویسی', 'هر عبارت را به واژه پزشکی‌اش وصل کن', [['specialist of urinary diseases', 'urologist'], ['blood in the urine', 'hematuria'], ['bladder infection', 'cystitis'], ['stone in the ureter', 'ureterolith']], 'Chart Note.'),
        M('عکس', 'عکسی که حاجب از مثانه به بالا می‌رود…', ['retrograde pyelogram', 'intravenous pyelogram', 'KUB', 'renogram'], 'retro- = رو به عقب.', null, { a: ['imaging-art'], l: [] }),
        M('درمان', 'سنگ‌شکنی با موج از بیرون بدن…', ['ESWL', 'nephrectomy', 'cystostomy', 'meatotomy'], 'extracorporeal shock wave lithotripsy.'),
        T('یافته', 'در آزمایش این بیمار pyuria دیده نشد.', true, 'خون بود ولی چرک نه.'),
        P('بازنویسی', 'هر عبارت دیگر را به واژه‌اش وصل کن', [['technique for uncontaminated sample', 'clean-catch specimen'], ['laboratory analysis of urine', 'urinalysis'], ['pus in the urine', 'pyuria'], ['kidney stones', 'nephrolithiasis']], 'بازنویسی.'),
        S('املا', 'املای «سنگ میزنای» را بنویس', 'ureterolith', 'ureter/o + ‎-lith‎.', 'uretero…')
      ]
    },
    {
      id: 'r17', w: 'tx', title: 'دیالیز تا پیوند', who: 'Adrien، دانشجوی ۲۰ ساله',
      brief: 'در Case Study 14-2 کتاب Cohen آمده است: Adrien دانشجوی ۲۰ ساله‌ای است که از ۷ سالگی گلومرولونفریت مزمن دارد و ۱۶ ماه است در خانه CAPD انجام می‌دهد و منتظر پیوند کلیه است. با درد قفسه سینه، تنگی نفس و oliguria به اورژانس آمد. BUN و کراتینین بسیار بالا و هموگلوبین ۸٫۲ بود. تشخیص: ESRD، افزایش حجم مایعات و اسیدوز متابولیک. برای همودیالیز فرستاده شد و تختی در بخش پیوند برایش رزرو شد.',
      chart: [['Age', '20'], ['Hx', 'chronic glomerulonephritis since age 7; CAPD 16 months'], ['Labs', 'BUN, creatinine high; Hgb 8.2'], ['Dx', 'ESRD, fluid overload, metabolic acidosis'], ['Plan', 'hemodialysis; transplant list']],
      fig: { a: 'hemodialysis-art', l: [] },
      steps: [
        M('اختصار', 'CAPD یعنی…', ['دیالیز صفاقی سرپایی مداوم', 'همودیالیز شبانه', 'پیوند کلیه', 'سنگ‌شکنی'], 'continuous ambulatory peritoneal dialysis.', null, { a: ['pd-art'], l: [] }),
        M('دیالیز', 'گذر خون از دستگاه و برگشت آن به بیمار…', ['hemodialysis', 'CAPD', 'arteriovenous transplant', 'GFR'], 'Case Study 14-2.'),
        M('واژه', 'oliguria یعنی…', ['ادرار کم', 'ادرار زیاد', 'ادرار دردناک', 'ادرار شبانه'], 'olig/o + ‎-uria‎.'),
        T('کم‌خونی', 'هموگلوبین پایین Adrien با کمبود اریتروپویتین در نارسایی کلیه جور است.', true, 'EPO.', { a: ['kidney-hormones'], l: [] }),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['ESRD', 'مرحله پایانی بیماری کلیه'], ['BUN', 'نیتروژن اوره خون'], ['CAPD', 'دیالیز صفاقی سرپایی'], ['ED', 'اورژانس']], 'اختصارها.'),
        S('املا', 'املای «همودیالیز» را بنویس', 'hemodialysis', 'hem/o + dialysis.', 'hemo…')
      ]
    },
    {
      id: 'r18', w: 'tx', title: 'سنگ‌های مثانه', who: 'Heather، خانم ۴۰ ساله',
      brief: 'در تمرین پرونده یکی از فصل‌های پیوست، Heather خانمی ۴۰ ساله با تکرر، ادرار دردناک، خون در ادرار، درد پایین شکم، تب خفیف و خستگی پیش متخصص مجاری ادراری آمد. آزمایش ادرار و عکس کلیه، میزنای و مثانه گرفته شد. ادرار کدر و بدبو بود و گلبول قرمز داشت؛ چند سنگ کوچک در مثانه دیده شد. تشخیص عفونت ادراری و سنگ مثانه بود. آنتی‌بیوتیک گرفت و برای درآوردن سنگ‌ها سیستوسکوپی شد.',
      chart: [['Age', '40'], ['Sx', 'frequency, dysuria, hematuria, low abdominal pain'], ['Tests', 'UA, KUB'], ['Dx', 'UTI; bladder calculi'], ['Tx', 'antibiotic; cystoscopic stone removal']],
      fig: { a: 'cystoscopy-art', l: [] },
      steps: [
        P('بازنویسی', 'هر عبارت را به واژه پزشکی‌اش وصل کن', [['painful urination', 'dysuria'], ['blood in urine', 'hematuria'], ['laboratory reading of urine', 'urinalysis'], ['X-ray of kidneys, ureters, bladder', 'KUB']], 'تمرین پرونده.'),
        M('سنگ', 'سنگ مثانه…', ['cystolith', 'nephrolith', 'ureterolith', 'urethrolith'], 'cyst/o + ‎-lith‎.', null, { a: ['stones-sites'], l: [] }),
        M('دارو', 'دارویی که باکتری را از بین می‌برد…', ['antibiotic', 'diuretic', 'antispasmodic', 'ACE inhibitor'], 'antibiotic.'),
        M('روش', 'روشی که با ابزار از راه پیشابراه سنگ مثانه را درمی‌آورد…', ['cystoscopy', 'nephrectomy', 'ESWL از پهلو', 'renogram'], 'cystoscopy.'),
        T('واژه', 'calculi جمع calculus است.', true, 'سنگ‌ها.'),
        S('املا', 'املای «سنگ مثانه» را بنویس', 'cystolith', 'cyst/o + ‎-lith‎.', 'cysto…')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* نِفرا — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', 'دستگاه ادراری: دو کلیه، دو میزنای، یک مثانه و یک پیشابراه.'],
    ['Lx', 'nephr/o و ren/o هر دو یعنی کلیه؛ cyst/o و vesic/o هر دو یعنی مثانه.'],
    ['Lx', 'ureter دو e دارد و دو تاست؛ urethra یک e دارد و یکی است.'],
    ['Lx', 'pyel/o لگنچه کلیه است و py/o چرک؛ pyelitis با pyuria فرق دارد.'],
    ['Lx', 'vesical صفت مثانه است و vesicle یعنی تاول.'],
    ['Lx', 'nephrologist پزشک کلیه است و urologist جراح مجاری ادراری.'],
    ['Kd', 'کلیه‌ها پشت صفاق‌اند: retroperitoneal.'],
    ['Kd', 'قشر بیرونی کلیه cortex است و مغز درونی آن medulla با هرم‌هایش.'],
    ['Kd', 'نفرون واحد کار کلیه است؛ هر کلیه بیش از یک میلیون نفرون دارد.'],
    ['Kd', 'سه گام ساخت ادرار: تصفیه، بازجذب و ترشح.'],
    ['Kd', 'afferent خون را به گلومرول می‌آورد و efferent آن را می‌برد.'],
    ['Kd', 'کلیه رنین می‌سازد که فشار خون را بالا می‌برد و EPO که گلبول قرمز می‌سازد.'],
    ['Tr', 'مثلث مثانه (trigone) میان دو دهانه میزنای و دهانه پیشابراه است.'],
    ['Tr', 'اسفنکتر داخلی پیشابراه غیرارادی و اسفنکتر خارجی ارادی است.'],
    ['Tr', 'micturition، urination و voiding همه یعنی ادرار کردن.'],
    ['Tr', 'stress incontinence نشت با سرفه است و urge incontinence نشت با فوریت ناگهانی.'],
    ['Tr', '‎-stenosis‎ تنگی، ‎-ectasis‎ گشادی و ‎-cele‎ بیرون‌زدگی است.'],
    ['Ur', 'ادرار حدود ۹۵٪ آب است و روزانه ۱ تا ۲ لیتر ساخته می‌شود.'],
    ['Ur', 'anuria بی‌ادراری، oliguria کم‌ادراری و polyuria پرادراری است.'],
    ['Ur', 'hematuria خون در ادرار، pyuria چرک و glycosuria قند در ادرار است.'],
    ['Ur', 'وزن مخصوص طبیعی ادرار حدود 1.001 تا 1.030 است.'],
    ['Ur', 'azotemia و uremia یعنی انباشت اوره و مواد نیتروژنی در خون.'],
    ['Ur', 'Na از natrium و K از kalium آمده‌اند: hyponatremia و hyperkalemia.'],
    ['Dz', 'عفونت ادراری از پیشابراه بالا می‌رود؛ در زنان شایع‌تر است.'],
    ['Dz', 'سیستیت سوزش و تکرر می‌دهد؛ پیلونفریت تب و درد پهلو.'],
    ['Dz', 'سنگ یا تنگی میزنای ادرار را پس می‌زند و هیدرونفروز می‌سازد.'],
    ['Dz', 'ESRD مرحله پایانی نارسایی کلیه است؛ درمانش دیالیز یا پیوند.'],
    ['Dz', 'Wilms tumor تومور کلیه کودکان است؛ خون بی‌درد در ادرار نشانه سرطان مثانه.'],
    ['Tx', 'KUB بدون حاجب است؛ در IVP حاجب در سیاهرگ تزریق می‌شود.'],
    ['Tx', 'ESWL سنگ را با موج از بیرون بدن می‌شکند؛ بدون برش.'],
    ['Tx', 'همودیالیز خون را از دستگاه رد می‌کند؛ در دیالیز صفاقی صفاق صافی است.'],
    ['Tx', '‎-ectomy‎ برداشتن، ‎-tomy‎ برش، ‎-stomy‎ منفذ تازه و ‎-pexy‎ تثبیت است.']
  ];
  const COLORS = { Lx: '#B0413E', Kd: '#6D4BC3', Tr: '#2B86C5', Ur: '#C99A06', Dz: '#E2683C', Tx: '#17A398', '': '#B0413E' };
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
