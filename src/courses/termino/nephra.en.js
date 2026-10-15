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
    name: "Nephra", key: 'nephra', title: "Nephra • Urinary Terminology: Kidneys and Urinary Tract", certCode: 'NF',
    subject: "Medical terminology of the urinary system: kidney, nephron, ureter, bladder, urethra and urine",
    kicker: "🫘 Medical terminology: The Urinary System",
    hello: "Hi, I’m <b>Nephra</b>, a bean-shaped kidney that filters 180 litres of blood a day and is still full of energy!",
    disclaimer: "Nephra is an educational tool and does not replace examination, testing, clinical judgement or a physician’s orders.",
    eyes: "Dozens of bilingual figures and teaching pictures, from the renal cortex and medulla and the nephron to the bladder, stones, hydronephrosis, cystoscopy, dialysis and kidney transplant.",
    outcomes: [
      "Break every urinary word into prefix, root and suffix and say what it means",
      "Show the parts of the kidney and nephron and the three steps of urine formation on a figure",
      "Tell apart the ureter, bladder, urethra, sphincters and the types of incontinence",
      "Read urinalysis findings and signs such as oliguria, hematuria and pyuria",
      "Write urinary infection, stones, hydronephrosis, glomerulonephritis and kidney failure with the right term",
      "Recognise KUB, IVP, cystoscopy, catheterization, dialysis, ESWL and kidney transplant, and interpret eGFR"
    ],
    endText: "Just 5 minutes a day. A few weeks from now you’ll read a urinalysis sheet and a urology report like a familiar story.",
    obHello: "Hi! I’m Nephra, a smiling bean-shaped kidney 🫘 What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “Language of the Kidney” is the best start; the basic urinary roots are taught there!",
    demo: () => ({
      q: "The word <b dir=\"ltr\">nephrolithiasis</b> means…",
      fig: { a: ['stones-sites'], l: ["Where stones form in the urinary tract"] },
      opts: ["kidney stone", "kidney inflammation", "enlarged kidney", "drooping of the kidney"],
      why: `${EA.K.wb('nephr/o', 'lith/o', '-iasis')}<br>The root <b dir="ltr">nephr/o</b> means kidney, <b dir="ltr">lith/o</b> means stone and the suffix <b dir="ltr">-iasis</b> means condition; so it means <b>kidney stones</b>. Start the meaning from the suffix!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ["Newcomer", "Curious Droplet", "Nephron Explorer", "Root Decoder", "Glomerulus Guardian", "Master of the Renal Pelvis", "Bladder’s Friend",
      "Ureter Guide", "Urinalysis Reader", "Stone Hunter", "Infection Detective", "Dialysis Master", "Word-Building Master", "Kidney Legend", "Terminology Icon"],
    leagueRoles: ["Medical student", "Nursing student", "urology resident", "dialysis nurse", "nephrology resident", "Lab technologist", "haemodialysis technician", "Radiology technologist", "Surgical technologist", "Midwifery student", "transplant ward nurse", "dietitian", "physician assistant"],
    firstBadge: ['🫘', "First Drop"],
    worldBadges: { lx: ['🧩', "Decoder"], kd: ['🫘', "Nephron Explorer"], tr: ['💧', "Bladder Guardian"], ur: ['🧪', "Urine Reader"], dz: ['🩺', "Kidney Detective"], tx: ['🔬', "Treatment Master"] },
    confetti: ['#B0413E', '#E0A526', '#FFC800', '#6D4BC3', '#2B86C5', '#17A398', '#E2683C', '#7CC4EF'],
    /* ابزارها */
    parseDefault: 'pyelonephritis',
    parseSamples: ['pyelonephritis', 'nephrolithiasis', 'glomerulonephritis', 'cystourethrography', 'hydronephrosis', 'ureterostenosis', 'hematuria', 'nephropexy'],
    ph: { dict: "Search: nephron, bladder, cystitis…", roots: "Search: nephr, urine, -uria…", abbr: "Search: UTI, urea, KUB…" },
    toolsDisclaimer: "⚕️ Nephra is a learning tool; the dictionary and kidney calculator do not replace tests, examination or a physician’s judgement.",
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
  const STAGES = [[90, 'G1', "normal or high", '#3f8a05'], [60, 'G2', "mildly decreased", '#7aa70a'], [45, 'G3a', "mildly to moderately decreased", '#d4a017'],
    [30, 'G3b', "moderately to severely decreased", '#e2683c'], [15, 'G4', "severely decreased", '#d9443a'], [0, 'G5', "kidney failure", '#8e2a26']];
  const cell = (tt, b, s, c) => `<div class="kf__c"${c ? ` style="--k:${c}"` : ''}><span>${tt}</span><b>${b}</b>${s ? `<small>${s}</small>` : ''}</div>`;
  const L = s => `<bdi dir="ltr">${s}</bdi>`;
  function gfrOut() {
    const g = egfr();
    if (!isFinite(g)) return "<p class=\"kf__note\">Enter serum creatinine (mg/dL) and age (18 years or older).</p>";
    const s = STAGES.find(x => g >= x[0]);
    const pct = Math.max(2, Math.min(100, g / 120 * 100));
    return `<div class="kf__out">${cell('eGFR', L(Math.round(g)), L('mL/min/1.73 m²'), s[3])}${cell("Stage", L(s[1]), s[2], s[3])}</div>
      <div class="kf__bar" aria-hidden="true"><i style="width:${pct.toFixed(1)}%;background:${s[3]}"></i></div>
      <p class="kf__note">${s[1] === 'G5' ? "Below 15 means kidney failure, the stage that often leads to dialysis or kidney transplant (ESRD)." : g < 60 ? "An eGFR below 60 that lasts more than three months means chronic kidney disease (CKD)." : "An eGFR above 60 does not by itself rule out chronic kidney disease; urine protein and kidney damage also matter."}</p>`;
  }
  function uoOut() {
    const v = parseFloat(st.vol), w = parseFloat(st.wt), h = parseFloat(st.hr);
    if (!(v >= 0) || !(w > 0) || !(h > 0)) return "<p class=\"kf__note\">Enter urine volume, body weight and collection time.</p>";
    const rate = v / w / h, day = v * 24 / h;
    const r = day < 100 ? ['anuria', "no urine", '#8e2a26'] : rate < 0.5 ? ['oliguria', "scanty urine", '#d9443a'] : day > 3000 ? ['polyuria', "excessive urination", '#d4a017'] : ['normal output', "normal output", '#3f8a05'];
    return `<div class="kf__out">${cell("Output", L(rate.toFixed(2)), L('mL/kg/h'))}${cell("Per 24 hours", L(Math.round(day) + ' mL'), "normal about 1000 to 2000")}${cell("Interpretation", r[1], L(r[0]), r[2])}</div>`;
  }
  const field = (key, label, ph, step) => `<label class="kf__in"><span>${label}</span><input type="number" inputmode="decimal" min="0"${step ? ` step="${step}"` : ''} data-keep="${key}" data-kf="${key}" value="${EA.ui.esc(st[key])}" placeholder="${ph}" autocomplete="off"></label>`;
  const sexBtn = (v, l) => `<button type="button" class="kf__sx${st.sex === v ? ' is-on' : ''}" data-kfsex="${v}" aria-pressed="${st.sex === v}">${l}</button>`;
  EA.APP.extraTool = {
    id: 'kf', sym: 'GFR', name: "Kidney calculator", color: '#B0413E',
    /* برای آزمون: eGFR گردشده */
    value: () => { const g = egfr(); return isFinite(g) ? Math.round(g) : 0; },
    pane: () => `<div class="tpane"><p class="muted">eGFR estimates how much blood the glomeruli filter each minute. Enter serum creatinine, age and sex.</p>
    <div class="kf__sxs" role="group" aria-label="Sex">${sexBtn('f', "woman")}${sexBtn('m', "Male")}</div>
    <div class="kf">${field('cr', "Serum creatinine (mg/dL)", '1.1', '0.1')}${field('age', "Age (years)", '45')}</div>
    <div class="kf__res" aria-live="polite">${gfrOut()}</div>
    <table class="mini"><tr><th>Stage</th><th><bdi dir="ltr">eGFR</bdi></th><th>Meaning</th></tr>
      <tr><td><bdi dir="ltr">G1</bdi></td><td><bdi dir="ltr">≥ 90</bdi></td><td>normal or high</td></tr><tr><td><bdi dir="ltr">G2</bdi></td><td><bdi dir="ltr">60 – 89</bdi></td><td>mildly decreased</td></tr>
      <tr><td><bdi dir="ltr">G3a</bdi></td><td><bdi dir="ltr">45 – 59</bdi></td><td>mild to moderate</td></tr><tr><td><bdi dir="ltr">G3b</bdi></td><td><bdi dir="ltr">30 – 44</bdi></td><td>moderate to severe</td></tr>
      <tr><td><bdi dir="ltr">G4</bdi></td><td><bdi dir="ltr">15 – 29</bdi></td><td>severely decreased</td></tr><tr><td><bdi dir="ltr">G5</bdi></td><td><bdi dir="ltr">&lt; 15</bdi></td><td>kidney failure</td></tr></table>
    ${EA.ui.figCard({ a: ['egfr-gauge'], l: ["Stages of chronic kidney disease"] })}
    <h4 class="kf__h">Urine output</h4>
    <div class="kf">${field('vol', "Urine volume (mL)", '1400')}${field('wt', "Weight (kg)", '70')}${field('hr', "Duration (hours)", '24')}</div>
    <div class="kf__uo" aria-live="polite">${uoOut()}</div>
    <h4 class="kf__h">Normal urinalysis values</h4>
    <table class="mini"><tr><th>Component</th><th>Normal</th></tr>
      <tr><td>Colour</td><td>straw to golden yellow, clear</td></tr><tr><td>Specific gravity <bdi dir="ltr">(SG)</bdi></td><td><bdi dir="ltr">1.001 – 1.030</bdi></td></tr>
      <tr><td><bdi dir="ltr">pH</bdi></td><td><bdi dir="ltr">5.0 – 8.0</bdi></td></tr><tr><td>Protein</td><td>negative to slight <bdi dir="ltr">(trace)</bdi></td></tr>
      <tr><td>Glucose and ketones</td><td>negative</td></tr><tr><td>Blood</td><td>negative</td></tr></table>
    <p class="muted">Staging is based on KDIGO and the CKD-EPI 2021 equation and is not accurate for children, pregnancy or a sudden change in creatinine. Diagnosis is for the physician.</p></div>`,
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
    memo: s => `<div class="memo"><b class="memo__h">🧠 Memory trick</b>${EA.bi(s)}</div>`,
    /** جعبه «در بالین»: کاربرد واقعی همان واژه در بخش و آزمایشگاه */
    pearl: s => `<div class="pearl"><b class="pearl__h">🩺 At the bedside</b>${EA.bi(s)}</div>`,
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
  EA.TERMS_RAW = [["ACE inhibitor", "ayss in-HIB-ih-ter", "Drug that lowers blood pressure by blocking the angiotensin-converting enzyme.", "blood-pressure drug blocking ACE", "tx", "tx", ["ACE"]],
["acidosis", "as-ih-DOH-sis", "Excessive acidity of body fluids, as in renal failure.", "excess acid in body fluids", "ur", "sx", []],
["acute renal failure", "ah-KYOOT REE-nal FAYL-yer", "Sudden loss of kidney function from injury, shock, toxins or infection; acute kidney injury.", "sudden loss of kidney function", "dz", "dz", ["ARF", "AKI"]],
["acute tubular necrosis", "ah-KYOOT TOO-byoo-lar neh-KROH-sis", "Damage and death of renal tubules from toxins or ischemia, causing oliguria (necr/o = death).", "sudden death of kidney tubule cells", "dz", "dz", ["ATN"]],
["adrenal gland", "ah-DREE-nal gland", "Endocrine gland that sits on top of each kidney; suprarenal gland.", "gland sitting on top of each kidney", "kd", "body", []],
["afferent arteriole", "AF-er-ent ar-TEER-ee-ohl", "Small artery that carries blood into the glomerulus (afferent = toward).", "small vessel carrying blood into the glomerulus", "kd", "body", []],
["albumin/creatinine ratio", "al-BYOO-min kree-AT-ih-neen RAY-shee-oh", "Urine screening test for early kidney damage, especially in diabetes.", "albumin-to-creatinine ratio", "ur", "lab", ["ACR"]],
["albuminuria", "al-byoo-mih-NOO-ree-ah", "Albumin in the urine, typically a sign of kidney disease (albumin/o + -uria).", "albumin in the urine", "ur", "sx", []],
["aldosterone", "al-DOS-ter-ohn", "Adrenal hormone that regulates sodium and potassium excretion by the kidneys.", "adrenal hormone regulating sodium and potassium", "kd", "phys", []],
["angiotensin", "an-jee-oh-TEN-sin", "Blood substance, activated by renin, that constricts blood vessels and raises blood pressure.", "hormone that narrows vessels and raises blood pressure", "kd", "phys", []],
["antibiotic", "an-tee-bye-OT-ik", "Drug that kills or inhibits bacteria; used for urinary tract infections, such as ciprofloxacin.", "bacteria-killing drug", "tx", "tx", []],
["anticholinergic", "an-tee-koh-lin-ER-jik", "Drug used to treat overactive bladder.", "drug that blocks acetylcholine and relaxes the bladder", "tx", "tx", []],
["antidiuretic hormone", "an-tee-dye-yoo-RET-ik HOR-mohn", "Pituitary hormone that makes the kidneys reabsorb water and concentrate the urine.", "pituitary hormone that makes the kidney keep water", "kd", "phys", ["ADH"]],
["antispasmodic", "an-tee-spaz-MOD-ik", "Drug that relieves bladder muscle spasms, such as oxybutynin.", "drug that relieves muscle spasm", "tx", "tx", []],
["anuresis", "an-yoo-REE-sis", "Lack of urination; retention of urine in the bladder. Compare enuresis.", "failure to pass urine", "tr", "sx", []],
["anuria", "an-YOO-ree-ah", "Absence of urine formation; complete suppression of urine (an- + -uria).", "complete absence of urine output", "ur", "sx", []],
["atresia", "ah-TREE-zee-ah", "Congenital absence or narrowing of a normal opening, such as the ureter or urethra.", "congenital closure of a passage", "dz", "dz", []],
["azotemia", "az-oh-TEE-mee-ah", "Excess nitrogenous waste, especially urea, in the blood (azot/o + -emia).", "excess nitrogenous waste in the blood", "ur", "sx", []],
["azoturia", "az-oh-TOO-ree-ah", "Increased nitrogenous compounds, especially urea, in the urine (azot/o + -uria).", "increased nitrogenous compounds in the urine", "ur", "sx", []],
["bacteriuria", "bak-teer-ee-YOO-ree-ah", "Bacteria in the urine (bacteri/o + -uria).", "bacteria in the urine", "ur", "sx", []],
["bladder cancer", "BLAD-er KAN-ser", "Cancer of the cells lining the bladder; the key sign is sudden painless hematuria. Linked to smoking.", "malignancy of the urine-storing sac", "dz", "dz", []],
["bladder neck obstruction", "BLAD-er nek ob-STRUK-shun", "Blockage of the bladder outlet, often from an enlarged prostate.", "blockage where the bladder joins the urethra", "tr", "dz", ["BNO"]],
["blood urea nitrogen", "blud yoo-REE-ah NYE-troh-jen", "Blood test of nitrogenous waste (urea); a rise suggests renal failure.", "blood test of nitrogenous waste", "ur", "lab", ["BUN"]],
["caliceal", "kal-ih-SEE-al", "Pertaining to a renal calyx (calic/o + -eal); also spelled calyceal.", "relating to a calyx", "kd", "body", []],
["calyx", "KAY-liks", "Cup-like cavity of the renal pelvis that collects urine (cali/o, calic/o; plural calyces or calices).", "cup collecting urine from a pyramid tip", "kd", "body", []],
["casts", "kasts", "Solid molds of renal tubules found in urine, formed from protein or cells.", "tube-shaped particles in the urine", "ur", "lab", []],
["catheter", "KATH-eh-ter", "Flexible tube inserted into the body to move fluids in or out (Greek = a thing let down).", "thin flexible tube", "tx", "tx", []],
["catheterization", "kath-eh-ter-ih-ZAY-shun", "Insertion of a catheter through the urethra into the bladder to withdraw urine or put in dye.", "passing a tube into the bladder", "tx", "tx", ["cath"]],
["chromaturia", "kroh-mah-TOO-ree-ah", "Abnormal color of the urine (chromat/o + -uria).", "abnormal urine colour", "ur", "sx", []],
["chronic renal failure", "KRON-ik REE-nal FAYL-yer", "Gradual loss of nephrons and kidney function over time; chronic kidney disease.", "chronic kidney failure", "dz", "dz", ["CRF", "CKD"]],
["clean-catch specimen", "kleen kach SPES-ih-men", "Midstream urine sample collected after cleaning the urinary opening, to avoid contamination.", "clean-catch midstream specimen", "ur", "lab", ["CC"]],
["clearance", "KLEER-ans", "Volume of plasma the kidneys clear of a substance per unit of time; renal plasma clearance.", "rate at which a substance is removed from the blood", "kd", "phys", []],
["collecting duct", "koh-LEK-ting dukt", "Tubule that receives urine from several nephrons and carries it to the renal papilla and calyx; collecting tubule.", "tube gathering urine from many nephrons", "kd", "body", []],
["condom catheter", "KON-dum KATH-eh-ter", "External rubber sheath catheter with tubing to a leg bag; external urinary drainage.", "external sheath catheter for men", "tx", "tx", ["EUD"]],
["continence", "KON-tih-nens", "Ability to control the bladder (or bowels).", "ability to control urination", "tr", "phys", []],
["cortical", "KOR-tih-kal", "Pertaining to a cortex, the outer region of an organ such as the kidney (cortic/o + -al).", "relating to the outer layer", "kd", "body", []],
["creatine", "KREE-ah-teen", "An amino acid compound found in tissues, especially muscle; do not confuse with creatinine.", "hard protein of skin, hair and nails", "lx", "phys", []],
["creatinine", "kree-AT-ih-neen", "Nitrogenous waste of muscle metabolism, cleared by the kidneys; a rising blood level is a sign of renal failure.", "muscle waste product cleared by the kidneys", "kd", "phys", ["Cr"]],
["creatinine clearance", "kree-AT-ih-neen KLEER-ans", "Kidney function test comparing creatinine in 24-hour urine with creatinine in blood.", "test comparing urine and blood creatinine", "ur", "lab", ["CCT"]],
["culture and sensitivity", "KUL-chur and sen-sih-TIV-ih-tee", "Laboratory test that grows bacteria from urine, identifies them and finds which antibiotics work.", "growing the microbe and testing antibiotics", "ur", "lab", ["C&S"]],
["cystalgia", "sis-TAL-jee-ah", "Pain in the urinary bladder (cyst/o + -algia).", "pain in the bladder", "lx", "sx", []],
["cystectomy", "sis-TEK-toh-mee", "Surgical removal of all or part of the urinary bladder, usually for cancer.", "removal of the bladder", "tx", "tx", []],
["cystic", "SIS-tik", "Pertaining to the urinary bladder, the gallbladder or a cyst (cyst/o + -ic).", "relating to the bladder or a cyst", "lx", "body", []],
["cystitis", "sis-TYE-tis", "Inflammation of the urinary bladder, usually from infection (cyst/o + -itis).", "inflammation of the bladder", "lx", "dz", []],
["cystocele", "SIS-toh-seel", "Herniation of the bladder into the vaginal wall; prolapsed bladder (cyst/o + -cele).", "bladder bulging into the vagina", "tr", "dz", []],
["cystogram", "SIS-toh-gram", "X-ray record of the urinary bladder (cyst/o + -gram).", "X-ray image of the bladder", "tx", "lab", []],
["cystography", "sis-TOG-rah-fee", "Process of X-ray imaging of the bladder after dye is placed in it by catheter.", "X-ray imaging of the bladder with dye", "tx", "lab", []],
["cystolith", "SIS-toh-lith", "A bladder stone (cyst/o + -lith).", "bladder stone", "dz", "dz", []],
["cystometrography", "sis-toh-meh-TROG-rah-fee", "Study of bladder function that measures bladder pressure as it fills; the tracing is a cystometrogram.", "cystometry", "tx", "lab", ["CMG"]],
["cystopexy", "SIS-toh-pek-see", "Surgical fixation of the bladder to the abdominal wall, to correct a cystocele.", "fixation of the bladder", "tx", "tx", []],
["cystoplasty", "SIS-toh-plas-tee", "Surgical repair of the urinary bladder (cyst/o + -plasty).", "surgical repair of the bladder", "tx", "tx", []],
["cystorrhagia", "sis-toh-RAY-jee-ah", "Abnormal bleeding from the urinary bladder (cyst/o + -rrhagia).", "bleeding from the bladder", "tr", "sx", []],
["cystorrhaphy", "sis-TOR-ah-fee", "Suturing of a damaged bladder (cyst/o + -rrhaphy).", "suturing of the bladder", "tx", "tx", []],
["cystoscope", "SIS-toh-skohp", "Lighted instrument passed through the urethra to view the inside of the bladder (cyst/o + -scope).", "instrument for viewing the bladder", "tx", "lab", []],
["cystoscopy", "sis-TOS-koh-pee", "Visual examination of the bladder with a cystoscope; also used for biopsy and removing tumors or stones.", "looking inside the bladder with a scope", "tx", "lab", ["cysto"]],
["cystostomy", "sis-TOS-toh-mee", "Surgical opening into the bladder through the abdominal wall (cyst/o + -stomy).", "opening from the bladder through the abdominal wall", "tx", "tx", []],
["cystotomy", "sis-TOT-oh-mee", "Incision into the urinary bladder (cyst/o + -tomy).", "incision into the bladder", "tx", "tx", []],
["dehydration", "dee-hye-DRAY-shun", "Excessive loss of body fluid.", "loss of body water", "ur", "sx", []],
["detrusor muscle", "deh-TROO-sor MUS-el", "Smooth muscle of the bladder wall that contracts to empty the bladder.", "smooth muscle of the bladder wall", "tr", "body", []],
["diabetes insipidus", "dye-ah-BEE-teez in-SIP-ih-dus", "Lack of antidiuretic hormone causing large amounts of dilute urine and extreme thirst.", "lack of ADH with copious dilute urine", "dz", "dz", []],
["diabetic nephropathy", "dye-ah-BET-ik neh-FROP-ah-thee", "Kidney damage to the glomerular capillaries from long-term high blood sugar.", "kidney damage from diabetes", "dz", "dz", []],
["dialysate", "dye-AL-ih-sayt", "Dialysis fluid that draws wastes out of the blood through the membrane.", "fluid that draws wastes out in dialysis", "tx", "tx", []],
["dialysis", "dye-AL-ih-sis", "Removal of wastes and excess fluid across a semipermeable membrane when the kidneys fail (dia- + -lysis).", "blood filtering through a membrane", "tx", "tx", []],
["distal convoluted tubule", "DIS-tal kon-voh-LOOT-ed TOO-byool", "Twisted part of the renal tubule farthest from the glomerular capsule, before the collecting duct.", "far coiled part of the nephron tubule", "kd", "body", []],
["diuresis", "dye-yoo-REE-sis", "Increased formation and excretion of urine.", "increased urine output", "ur", "phys", []],
["diuretic", "dye-yoo-RET-ik", "Drug that increases urine output (water pill), used for edema, heart failure and hypertension, such as furosemide.", "drug that increases urine output", "tx", "tx", []],
["dysuria", "dis-YOO-ree-ah", "Painful or difficult urination (dys- + -uria).", "burning and pain on urination", "ur", "sx", []],
["edema", "eh-DEE-mah", "Abnormal accumulation of fluid in tissue spaces; a sign of kidney failure or nephrotic syndrome.", "swelling", "ur", "sx", []],
["efferent arteriole", "EF-er-ent ar-TEER-ee-ohl", "Small artery that carries blood away from the glomerulus (efferent = away from).", "small vessel carrying blood out of the glomerulus", "kd", "body", []],
["electrolytes", "ee-LEK-troh-lytes", "Ions in body fluids such as sodium, potassium, chloride and bicarbonate that the kidneys keep in balance.", "sodium, potassium and other body ions", "kd", "phys", []],
["end-stage renal disease", "end stayj REE-nal dih-ZEEZ", "Final, irreversible stage of kidney failure that requires dialysis or transplantation.", "final stage of kidney failure needing dialysis or transplant", "dz", "dz", ["ESRD"]],
["enuresis", "en-yoo-REE-sis", "Involuntary urination after the age of bladder control, usually at night; bed-wetting (nocturnal enuresis).", "bed-wetting", "tr", "sx", []],
["epispadias", "ep-ih-SPAY-dee-as", "Congenital opening of the urethra on the upper (dorsal) surface of the penis.", "urethral opening on the upper side of the penis", "dz", "dz", []],
["erythropoietin", "eh-rith-roh-POY-eh-tin", "Hormone made by the kidneys that stimulates red blood cell production in bone marrow.", "kidney hormone for red cells", "kd", "phys", ["EPO"]],
["estimated glomerular filtration rate", "ES-tih-may-ted gloh-MAIR-yoo-lar fil-TRAY-shun rayt", "Kidney function estimate calculated from blood creatinine, age and sex.", "filtering capacity worked out from creatinine, age and sex", "ur", "lab", ["eGFR"]],
["excretory urography", "EKS-kreh-tor-ee yoo-ROG-rah-fee", "Injecting dye into the bloodstream and taking X-rays as the kidney excretes it.", "X-ray of the urinary tract after IV contrast", "tx", "lab", ["EU"]],
["external urethral sphincter", "eks-TER-nal yoo-REE-thral SFINK-ter", "Voluntary circular muscle around the urethra under conscious control.", "voluntary outer urethral muscle ring", "tr", "body", []],
["extracorporeal shock wave lithotripsy", "eks-trah-kor-POR-ee-al shok wayv LITH-oh-trip-see", "Breaking up urinary stones with shock waves from outside the body, without surgery.", "stone crushing with waves from outside the body", "tx", "tx", ["ESWL"]],
["filtration", "fil-TRAY-shun", "First stage of urine formation: blood pressure pushes fluid out of the glomerulus into the glomerular capsule.", "passing fluid through a filter", "kd", "phys", []],
["Foley catheter", "FOH-lee KATH-eh-ter", "Indwelling urinary catheter held in the bladder by an inflated balloon; retention catheter.", "indwelling tube held by a balloon", "tx", "tx", []],
["fulguration", "ful-gyoo-RAY-shun", "Destruction of tissue with an electric spark, for example to remove a small bladder tumor.", "destroying tissue with an electric spark", "tx", "tx", []],
["genitourinary", "jen-ih-toh-YOO-rih-nair-ee", "Pertaining to the genital and urinary organs, which share the urethra in the male (genit/o = genitals, urin/o = urine).", "genital and urinary", "lx", "body", ["GU"]],
["glomerular", "gloh-MAIR-yoo-lar", "Pertaining to a glomerulus (glomerul/o + -ar).", "relating to the capillary tuft of the nephron", "lx", "body", []],
["glomerular capsule", "gloh-MAIR-yoo-lar KAP-sool", "Double-walled cup around the glomerulus that receives the filtrate; Bowman capsule.", "Bowman capsule", "kd", "body", []],
["glomerular filtrate", "gloh-MAIR-yoo-lar FIL-trayt", "Fluid of water, electrolytes, nutrients and wastes that enters the nephron from the glomerulus.", "fluid filtered out of the glomerulus", "kd", "phys", []],
["glomerular filtration rate", "gloh-MAIR-yoo-lar fil-TRAY-shun rayt", "Amount of filtrate formed per minute by both kidneys; the best overall measure of kidney function.", "volume filtered by the glomeruli each minute", "kd", "phys", ["GFR"]],
["glomerulitis", "gloh-mair-yoo-LYE-tis", "Inflammation of the glomeruli (glomerul/o + -itis).", "inflammation of the glomerulus", "dz", "dz", []],
["glomerulonephritis", "gloh-mair-yoo-loh-neh-FRYE-tis", "Inflammation of the kidney mainly in the glomeruli, often after a streptococcal infection; Bright disease.", "inflammation of the kidney filters", "dz", "dz", ["AGN"]],
["glomerulus", "gloh-MAIR-yoo-lus", "Ball of capillaries inside the glomerular capsule where blood is filtered (glomerul/o; plural glomeruli; Latin glomus = ball of yarn).", "kidney capillary tuft (glomerulus)", "kd", "body", []],
["glycosuria", "glye-koh-SOO-ree-ah", "Sugar (glucose) in the urine, as in diabetes mellitus (glycos/o + -uria); glucosuria.", "sugar in the urine", "ur", "sx", []],
["hematuria", "hee-mah-TOO-ree-ah", "Blood in the urine (hemat/o + -uria).", "blood in the urine", "ur", "sx", []],
["hemodialysis", "hee-moh-dye-AL-ih-sis", "Filtering the blood through an artificial kidney machine, usually 4 hours three times a week.", "filtering the blood by machine", "tx", "tx", ["HD"]],
["hesitancy", "HEZ-ih-tan-see", "Weak urine stream with difficulty starting flow, often from an enlarged prostate.", "delay in starting the urine stream", "tr", "sx", []],
["hilum", "HYE-lum", "Indented area on the medial border of the kidney where the renal artery enters and the renal vein and ureter leave.", "notch where vessels enter the kidney", "kd", "body", []],
["homeostasis", "hoh-mee-oh-STAY-sis", "State of internal balance that the kidneys help maintain (home/o = sameness, -stasis = standing still).", "keeping the internal environment stable", "kd", "phys", []],
["horseshoe kidney", "HORS-shoo KID-nee", "Congenital fusion of the lower poles of the two kidneys into a horseshoe shape.", "two kidneys fused at their lower poles", "dz", "dz", []],
["hydronephrosis", "hye-droh-neh-FROH-sis", "Collection of urine in the renal pelvis caused by obstruction, with distention of the kidney (hydr/o + nephr/o + -osis).", "kidney swollen with trapped urine", "dz", "dz", []],
["hydroureter", "hye-droh-yoo-REE-ter", "Distention of the ureter with urine from obstruction.", "ureter swollen with urine", "dz", "dz", []],
["hyperkalemia", "hye-per-kah-LEE-mee-ah", "Excess potassium in the blood (kal/i = potassium, Latin kalium); can cause dangerous arrhythmias.", "high blood potassium", "ur", "sx", []],
["hypernatremia", "hye-per-nah-TREE-mee-ah", "Excess sodium in the blood (natr/o = sodium, Latin natrium).", "high blood sodium", "ur", "sx", []],
["hypokalemia", "hye-poh-kah-LEE-mee-ah", "Low potassium in the blood, for example from diuretics.", "low blood potassium", "ur", "sx", []],
["hyponatremia", "hye-poh-nah-TREE-mee-ah", "Low sodium in the blood, for example from water intoxication or kidney failure.", "low blood sodium", "ur", "sx", []],
["hypoproteinemia", "hye-poh-proh-teen-EE-mee-ah", "Low protein in the blood, often from protein loss in urine.", "low blood protein", "ur", "sx", []],
["hypospadias", "hye-poh-SPAY-dee-as", "Congenital opening of the male urethra on the undersurface of the penis (hypo- + -spadias = slit).", "urethral opening on the underside of the penis", "dz", "dz", []],
["hypovolemia", "hye-poh-voh-LEE-mee-ah", "Decreased blood volume.", "decreased blood volume", "dz", "sx", []],
["ileal conduit", "IL-ee-al KON-doo-it", "Urinary diversion in which the ureters drain into a segment of ileum that opens on the abdomen; ileal bladder, urostomy.", "urine diversion through a piece of small bowel", "tx", "tx", []],
["intake and output", "IN-tayk and OWT-put", "Measurement of all fluids taken in and all urine and fluids lost, used to monitor fluid balance.", "record of fluids taken in and passed out", "ur", "lab", ["I&O"]],
["internal urethral sphincter", "in-TER-nal yoo-REE-thral SFINK-ter", "Involuntary circular muscle at the entrance to the urethra.", "involuntary inner urethral muscle ring", "tr", "body", []],
["interrenal", "in-ter-REE-nal", "Between the kidneys (inter- + ren/o + -al).", "between the kidneys", "lx", "body", []],
["interstitial cystitis", "in-ter-STISH-al sis-TYE-tis", "Chronic inflammation and irritation of the bladder of unknown cause, most common in middle-aged women.", "chronic bladder wall inflammation without infection", "dz", "dz", []],
["interstitial nephritis", "in-ter-STISH-al neh-FRYE-tis", "Inflammation of the connective tissue between the renal tubules that destroys nephrons.", "inflammation of the tissue between the kidney tubules", "dz", "dz", []],
["intrarenal", "in-trah-REE-nal", "Within the kidney (intra- + ren/o + -al).", "within the kidney", "lx", "body", []],
["intravenous pyelography", "in-trah-VEE-nus pye-eh-LOG-rah-fee", "X-rays taken after contrast dye is injected into a vein and excreted by the kidneys; intravenous urography.", "X-ray of the renal pelvis after IV contrast", "tx", "lab", ["IVP", "IVU"]],
["intravesical", "in-trah-VES-ih-kal", "Within the urinary bladder (intra- + vesic/o + -al).", "within the bladder", "lx", "body", []],
["juxtaglomerular", "juks-tah-glo-MER-yoo-lar", "Near the glomerulus (juxta- = near + glomerul/o + -ar); the juxtaglomerular cells release renin.", "beside the glomerulus", "kd", "body", []],
["kaliuresis", "kay-lee-yoo-REE-sis", "Excretion of potassium in the urine (kali- + -uresis).", "potassium loss in the urine", "ur", "phys", []],
["ketonuria", "kee-toh-NOO-ree-ah", "Ketones in the urine, when the body burns fat instead of glucose (keton/o + -uria).", "ketones in the urine", "ur", "sx", []],
["kidney", "KID-nee", "One of two bean-shaped organs in the lumbar region that filter blood, form urine and balance water, electrolytes and pH (nephr/o, ren/o).", "bean-shaped organ that filters blood", "kd", "body", []],
["kidneys, ureters, bladder", "KID-neez YOO-reh-terz BLAD-er", "Plain X-ray of the abdomen showing the kidneys, ureters and bladder without contrast dye; flat-plate abdomen.", "plain X-ray of kidneys, ureters and bladder", "tx", "lab", ["KUB"]],
["lithotomy", "lih-THOT-oh-mee", "Incision into an organ to remove a stone (lith/o + -tomy).", "incision to remove a stone", "tx", "tx", []],
["lithotripsy", "LITH-oh-trip-see", "Crushing a stone into small pieces that can pass in the urine (lith/o + -tripsy).", "stone crushing", "tx", "tx", []],
["meatal", "mee-AY-tal", "Pertaining to a meatus (meat/o + -al).", "relating to the urethral opening", "lx", "body", []],
["meatotomy", "mee-ah-TOT-oh-mee", "Incision of the urinary meatus to enlarge the opening (meat/o + -tomy).", "incision of the urethral opening", "tx", "tx", []],
["medullary", "MED-yoo-lair-ee", "Pertaining to a medulla, the inner region of an organ such as the kidney (medull/o + -ary).", "relating to the inner part", "kd", "body", []],
["micturition", "mik-too-RISH-un", "The voiding of urine; urination (Latin mictus = a making of water); often misspelled micturation.", "the act of passing urine", "lx", "phys", []],
["micturition reflex", "mik-too-RISH-un REE-fleks", "Contraction of the bladder wall and relaxation of the sphincter in response to rising bladder pressure.", "automatic bladder-emptying response", "tr", "phys", []],
["natriuresis", "nay-tree-yoo-REE-sis", "Excretion of sodium in the urine (natri- + -uresis).", "sodium loss in the urine", "ur", "phys", []],
["nephralgia", "neh-FRAL-jee-ah", "Pain in the kidney (nephr/o + -algia).", "kidney pain", "lx", "sx", []],
["nephrectomy", "neh-FREK-toh-mee", "Surgical removal of a kidney (nephr/o + -ectomy).", "removal of a kidney", "tx", "tx", []],
["nephric", "NEF-rik", "Pertaining to the kidney (nephr/o + -ic); less common than renal.", "of the kidney; Greek-derived adjective", "lx", "body", []],
["nephritis", "neh-FRYE-tis", "Inflammation of the kidney (nephr/o + -itis).", "inflammation of the kidney", "lx", "dz", []],
["nephroblastoma", "nef-roh-blas-TOH-mah", "Malignant kidney tumor of children, usually before age 5; Wilms tumor.", "childhood kidney cancer (Wilms tumour)", "dz", "dz", []],
["nephrogram", "NEF-roh-gram", "X-ray record of the kidney (nephr/o + -gram).", "X-ray image of the kidney", "tx", "lab", []],
["nephrolith", "NEF-roh-lith", "A kidney stone (nephr/o + -lith).", "a single kidney stone", "lx", "dz", []],
["nephrolithiasis", "nef-roh-lih-THYE-ah-sis", "Presence of stones in the kidney; renal calculi (nephr/o + lith/o + -iasis).", "condition of having kidney stones", "dz", "dz", []],
["nephrolithotomy", "nef-roh-lih-THOT-oh-mee", "Incision into the kidney to remove a stone; percutaneous nephrolithotomy goes through the skin with an endoscope.", "incision into the kidney to remove a stone", "tx", "tx", []],
["nephrologist", "neh-FROL-oh-jist", "Physician who treats kidney disease and manages dialysis and kidney transplantation.", "kidney specialist", "lx", "field", []],
["nephrology", "neh-FROL-oh-jee", "Branch of internal medicine that studies and treats diseases of the kidney (nephr/o + -logy).", "study of the kidney and its diseases", "lx", "field", []],
["nephrolysis", "neh-FROL-ih-sis", "Freeing the kidney from adhesions to other structures (nephr/o + -lysis).", "freeing the kidney from adhesions", "tx", "tx", []],
["nephroma", "neh-FROH-mah", "Any tumor of the kidney (nephr/o + -oma).", "tumour of the kidney", "dz", "dz", []],
["nephromalacia", "nef-roh-mah-LAY-shee-ah", "Abnormal softening of the kidney (nephr/o + -malacia).", "softening of the kidney", "dz", "dz", []],
["nephromegaly", "nef-roh-MEG-ah-lee", "Enlargement of the kidney; renomegaly (nephr/o + -megaly).", "enlarged kidney", "dz", "sx", []],
["nephron", "NEF-ron", "Microscopic functional unit of the kidney that filters blood and forms urine; more than one million in each kidney.", "working unit of the kidney", "kd", "body", []],
["nephron loop", "NEF-ron loop", "U-shaped part of the renal tubule with descending and ascending limbs; loop of Henle.", "loop of Henle", "kd", "body", []],
["nephropathy", "neh-FROP-ah-thee", "Any disease of the kidney (nephr/o + -pathy).", "kidney disease", "lx", "dz", []],
["nephropexy", "NEF-roh-pek-see", "Surgical fixation of a floating kidney (nephr/o + -pexy).", "fixing a floating kidney", "tx", "tx", []],
["nephroptosis", "nef-rop-TOH-sis", "Downward displacement of the kidney; floating kidney (nephr/o + -ptosis).", "drooping of the kidney", "dz", "dz", []],
["nephrorrhaphy", "nef-ROR-ah-fee", "Suturing of a damaged kidney (nephr/o + -rrhaphy).", "suturing of the kidney", "tx", "tx", []],
["nephrosclerosis", "nef-roh-skleh-ROH-sis", "Hardening of kidney tissue (nephr/o + -sclerosis).", "hardening of the kidney", "dz", "dz", []],
["nephroscopy", "neh-FROS-koh-pee", "Visual examination of the inside of the kidney (nephr/o + -scopy).", "viewing inside the kidney with an endoscope", "tx", "lab", []],
["nephrosis", "neh-FROH-sis", "Any noninflammatory disease of the kidney; nephrotic syndrome (nephr/o + -osis).", "degenerative kidney disease", "dz", "dz", []],
["nephrostomy", "neh-FROS-toh-mee", "Surgical opening into the kidney through the abdominal wall (nephr/o + -stomy).", "opening from the kidney through the abdominal wall", "tx", "tx", []],
["nephrotic syndrome", "neh-FROT-ik SIN-drohm", "Glomerular damage with heavy proteinuria, hypoproteinemia, edema and high blood lipids; nephrosis.", "heavy urine protein loss with oedema", "dz", "dz", ["NS"]],
["nephrotomy", "neh-FROT-oh-mee", "Incision into the kidney (nephr/o + -tomy).", "incision into the kidney", "tx", "tx", []],
["nephrotoxic", "nef-roh-TOK-sik", "Poisonous or harmful to the kidney (nephr/o + tox/o + -ic).", "poisonous to the kidney", "lx", "sx", []],
["neurogenic bladder", "noo-roh-JEN-ik BLAD-er", "Bladder dysfunction from a nervous system lesion, such as spinal cord injury or multiple sclerosis.", "bladder dysfunction from nerve damage", "tr", "dz", []],
["nocturia", "nok-TOO-ree-ah", "Excessive urination at night (noct/i + -uria).", "frequent urination at night", "ur", "sx", []],
["oliguria", "ol-ig-YOO-ree-ah", "Scanty urine production (olig/o + -uria).", "scanty urine", "ur", "sx", []],
["perinephric", "pair-ih-NEF-rik", "Around the kidney (peri- + nephr/o + -ic), as in perinephric fat.", "around the kidney", "kd", "body", []],
["perinephric fat", "pair-ih-NEF-rik fat", "Fatty tissue around the renal capsule that cushions the kidney; pararenal fat body.", "fat around the kidney", "kd", "body", []],
["perirenal", "pair-ih-REE-nal", "Around the kidney (peri- + ren/o + -al).", "surrounding the kidney", "lx", "body", []],
["peristalsis", "pair-ih-STAL-sis", "Wavelike muscular contractions that push urine down the ureter.", "wave-like contractions", "tr", "phys", []],
["peritoneal dialysis", "pair-ih-toh-NEE-al dye-AL-ih-sis", "Dialysis using the peritoneum as the membrane: dialysate is put into and drained from the abdominal cavity.", "dialysis using the abdominal lining as filter", "tx", "tx", ["CAPD", "CCPD", "IPD"]],
["peritubular capillaries", "pair-ih-TOO-byoo-lar KAP-ih-lair-eez", "Capillary bed around the renal tubules that takes back reabsorbed water and nutrients.", "capillaries surrounding the tubules", "kd", "body", []],
["polycystic kidney disease", "pol-ee-SIS-tik KID-nee dih-ZEEZ", "Hereditary disease in which many cysts replace kidney tissue, leading to renal failure.", "inherited condition with many kidney cysts", "dz", "dz", ["PKD"]],
["polydipsia", "pol-ee-DIP-see-ah", "Excessive thirst (poly- + dips/o + -ia).", "excessive thirst", "ur", "sx", []],
["polyuria", "pol-ee-YOO-ree-ah", "Excretion of unusually large amounts of urine, as in diabetes (poly- + -uria).", "excessive urination", "ur", "sx", []],
["postrenal", "pohst-REE-nal", "Behind the kidney (post- + ren/o + -al); also, occurring after the kidney.", "after the kidney", "lx", "body", []],
["prerenal", "pree-REE-nal", "In front of the kidney (pre- + ren/o + -al); also, occurring before the kidney.", "before the kidney", "lx", "body", []],
["prostate gland", "PROS-tayt gland", "Male gland around the urethra just below the bladder; an enlarged prostate can block urine flow.", "male gland around the urethra below the bladder", "tr", "body", []],
["proteinuria", "proh-teen-YOO-ree-ah", "Protein, mainly albumin, in the urine (protein/o + -uria).", "protein in the urine", "ur", "sx", []],
["proximal convoluted tubule", "PROK-sih-mal kon-voh-LOOT-ed TOO-byool", "First twisted part of the renal tubule, nearest the glomerular capsule, where most reabsorption occurs.", "near coiled part of the nephron tubule", "kd", "body", []],
["pyelectasis", "pye-eh-LEK-tah-sis", "Dilation of the renal pelvis (pyel/o + -ectasis).", "dilation of the renal pelvis", "dz", "dz", []],
["pyelitic", "pye-eh-LIT-ik", "Pertaining to the renal pelvis (pyel/o + -tic).", "relating to the renal pelvis", "lx", "body", []],
["pyelitis", "pye-eh-LYE-tis", "Inflammation of the renal pelvis (pyel/o + -itis).", "inflammation of the renal pelvis", "lx", "dz", []],
["pyelogram", "PYE-eh-loh-gram", "X-ray record of the renal pelvis (pyel/o + -gram).", "X-ray image of the renal pelvis", "tx", "lab", []],
["pyelolithotomy", "pye-eh-loh-lih-THOT-oh-mee", "Incision into the renal pelvis to remove stones.", "removal of a stone from the renal pelvis", "tx", "tx", []],
["pyelonephritis", "pye-eh-loh-neh-FRYE-tis", "Inflammation of the renal pelvis and kidney, usually from a bladder infection that ascends the ureter.", "kidney infection", "dz", "dz", []],
["pyeloplasty", "PYE-eh-loh-plas-tee", "Surgical repair of the renal pelvis (pyel/o + -plasty).", "repair of the renal pelvis", "tx", "tx", []],
["pyelotomy", "pye-eh-LOT-oh-mee", "Incision into the renal pelvis (pyel/o + -tomy).", "incision into the renal pelvis", "tx", "tx", []],
["pyuria", "pye-YOO-ree-ah", "Pus in the urine (py/o + -uria).", "pus in the urine", "ur", "sx", []],
["reabsorption", "ree-ab-SORP-shun", "Second stage of urine formation: water, electrolytes and nutrients return from the tubule to the blood; tubular reabsorption.", "return of water and solutes to the blood", "kd", "phys", []],
["renal", "REE-nal", "Pertaining to the kidney (ren/o = kidney, -al = pertaining to).", "kidney-related; Latin-derived adjective", "lx", "body", []],
["renal angiography", "REE-nal an-jee-OG-rah-fee", "X-ray of the kidney's blood vessels after contrast is injected into the renal artery.", "X-ray of the kidney’s blood vessels", "tx", "lab", []],
["renal artery", "REE-nal AR-ter-ee", "Branch of the abdominal aorta that brings blood to the kidney.", "vessel bringing blood to the kidney", "kd", "body", []],
["renal biopsy", "REE-nal BYE-op-see", "Removal of a small piece of kidney tissue, often by needle under ultrasound, for microscopic study.", "kidney biopsy", "tx", "lab", []],
["renal calculus", "REE-nal KAL-kyoo-lus", "A kidney stone formed from mineral salts such as calcium (Latin calculus = pebble; plural calculi).", "stone formed in the kidney", "dz", "dz", []],
["renal capsule", "REE-nal KAP-sool", "Thin fibrous membrane that covers each kidney.", "thin fibrous covering of the kidney", "kd", "body", []],
["renal cell carcinoma", "REE-nal sel kar-sih-NOH-mah", "Cancer arising from the cells of the kidney tubules; hypernephroma.", "adult cancer of kidney tubule cells", "dz", "dz", []],
["renal colic", "REE-nal KOL-ik", "Severe radiating pain in the kidney region as a stone passes or blocks the ureter.", "severe flank pain from a passing stone", "dz", "sx", []],
["renal column", "REE-nal KOL-um", "Cortical tissue that extends between the renal pyramids.", "strip of cortex between the pyramids", "kd", "body", []],
["renal corpuscle", "REE-nal KOR-pus-el", "Blood-filtering part of the nephron: the glomerulus and its glomerular capsule.", "glomerulus with its Bowman capsule", "kd", "body", []],
["renal cortex", "REE-nal KOR-teks", "The outer region of the kidney, containing parts of the nephrons (cortic/o).", "outer layer of the kidney", "kd", "body", []],
["renal failure", "REE-nal FAYL-yer", "Loss of the kidneys' ability to filter wastes, causing uremia; may be acute or chronic.", "kidney failure", "dz", "dz", []],
["renal fascia", "REE-nal FASH-ee-ah", "Thin layer of connective tissue that forms the kidney's outer covering and anchors it.", "fibrous sheath anchoring the kidney", "kd", "body", []],
["renal hypertension", "REE-nal hye-per-TEN-shun", "High blood pressure that results from kidney disease; secondary hypertension.", "high blood pressure caused by kidney disease", "dz", "dz", []],
["renal hypoplasia", "REE-nal hye-poh-PLAY-zee-ah", "Underdeveloped kidney (hypo- + -plasia).", "underdeveloped kidney", "dz", "dz", []],
["renal insufficiency", "REE-nal in-suh-FISH-en-see", "Lesser decrease in kidney function with fewer symptoms than renal failure.", "mild kidney failure", "dz", "dz", []],
["renal medulla", "REE-nal meh-DUL-ah", "The inner region of the kidney, containing the renal pyramids (medull/o).", "inner part of the kidney with the pyramids", "kd", "body", []],
["renal papilla", "REE-nal pah-PIL-ah", "Tip of a renal pyramid that opens into a calyx.", "tip of a pyramid opening into a calyx", "kd", "body", []],
["renal pelvis", "REE-nal PEL-vis", "Funnel-shaped upper end of the ureter that collects urine in the kidney (pyel/o = basin).", "funnel collecting urine from the calyces", "kd", "body", []],
["renal pyramid", "REE-nal PEER-ah-mid", "Triangular section of the renal medulla made of nephron loops and collecting ducts.", "cone-shaped tissue in the medulla", "kd", "body", []],
["renal transplantation", "REE-nal trans-plan-TAY-shun", "Surgical placement of a donor kidney, usually in the lower abdomen near the iliac vessels.", "kidney transplant", "tx", "tx", []],
["renal tubule", "REE-nal TOO-byool", "Tubule of the nephron: proximal convoluted tubule, nephron loop and distal convoluted tubule.", "tube of the nephron", "kd", "body", []],
["renal vein", "REE-nal vayn", "Vein that returns filtered blood from the kidney to the inferior vena cava.", "vessel draining blood from the kidney", "kd", "body", []],
["renin", "REE-nin", "Enzyme made by the kidneys that activates angiotensin to raise blood pressure.", "kidney enzyme that raises blood pressure", "kd", "phys", []],
["renogram", "REE-noh-gram", "Nuclear medicine image that shows kidney function after a radioactive substance is injected; renal scan.", "nuclear scan of kidney function", "tx", "lab", []],
["resectoscope", "ree-SEK-toh-skohp", "Endoscope used to cut and remove lesions, as in transurethral resection.", "instrument for cutting through the urethra", "tx", "tx", []],
["retrograde pyelography", "RET-roh-grayd pye-eh-LOG-rah-fee", "X-ray after dye is injected backward through the urethra or a cystoscope to outline the bladder, ureters and renal pelvis.", "contrast X-ray from below via a cystoscope", "tx", "lab", ["RP"]],
["retroperitoneal", "ret-roh-pair-ih-toh-NEE-al", "Behind the peritoneum; the location of the kidneys (retro- + peritone/o + -al).", "behind the peritoneum", "kd", "body", []],
["rugae", "ROO-jee", "Folds in the mucous lining of the bladder that let it stretch.", "folds of the bladder lining", "tr", "body", []],
["secretion", "seh-KREE-shun", "Third stage of urine formation: tubule cells move wastes such as ammonia, uric acid and hydrogen ions from blood into the tubule.", "secrete", "kd", "phys", []],
["specific gravity", "speh-SIF-ik GRAV-ih-tee", "Weight of urine compared with water (1.000); normal urine is about 1.001–1.030, higher when concentrated.", "density of urine compared with water", "ur", "lab", ["SG"]],
["staghorn calculus", "STAG-horn KAL-kyoo-lus", "Large kidney stone that fills the renal pelvis and calyces like a deer's antler.", "large antler-shaped stone filling the pelvis", "dz", "dz", []],
["stress incontinence", "stres in-KON-tih-nens", "Leakage of urine during coughing, sneezing, laughing or exercise.", "leaking with coughing or exertion", "tr", "sx", []],
["stricture", "STRIK-chur", "Abnormal narrowing of a passage of the urinary tract.", "narrowing", "dz", "dz", []],
["suprarenal", "soo-prah-REE-nal", "Above the kidney (supra- + ren/o + -al); the adrenal gland is also called the suprarenal gland.", "adrenal", "lx", "body", []],
["transurethral", "tranz-yoo-REE-thral", "Through the urethra (trans- + urethr/o + -al), as in transurethral surgery.", "through the urethra", "lx", "tx", []],
["trigone", "TRY-gohn", "Triangular area at the base of the bladder marked by the two ureteral openings and the urethral opening (trigon/o).", "triangular area of the bladder floor", "tr", "body", []],
["trigonitis", "try-goh-NYE-tis", "Inflammation of the trigone of the bladder (trigon/o + -itis).", "inflammation of the trigone", "tr", "dz", []],
["turbidity", "ter-BID-ih-tee", "Cloudiness of urine from suspended material; may be a sign of bacteria or pus.", "cloudy urine", "ur", "lab", []],
["ultrasonography", "ul-trah-soh-NOG-rah-fee", "Imaging with sound waves to show kidney size, tumors, cysts and obstruction.", "ultrasound scan", "tx", "lab", ["US"]],
["urea", "yoo-REE-ah", "Main nitrogenous waste of protein metabolism, made in the liver and excreted in urine.", "main nitrogenous waste from protein", "kd", "phys", []],
["uremia", "yoo-REE-mee-ah", "Toxic level of urea and other nitrogenous wastes in the blood from renal failure (ur/o + -emia).", "toxic waste build-up in the blood", "ur", "sx", []],
["ureter", "YOO-reh-ter", "One of two muscular tubes that carry urine from the renal pelvis to the bladder (ureter/o). Two ureters, two e's.", "tube carrying urine from kidney to bladder", "tr", "body", []],
["ureteral", "yoo-REE-ter-al", "Pertaining to the ureter (ureter/o + -al).", "relating to the ureter", "lx", "body", []],
["ureteral orifice", "yoo-REE-ter-al OR-ih-fis", "Opening of a ureter into the bladder wall.", "opening of a ureter into the bladder", "tr", "body", []],
["ureteral stent", "yoo-REE-ter-al stent", "Thin tube placed in the ureter so urine can bypass a blockage from kidney to bladder.", "tube keeping the ureter open", "tx", "tx", []],
["ureterectasis", "yoo-ree-ter-EK-tah-sis", "Dilation of a ureter (ureter/o + -ectasis).", "widening of the ureter", "tr", "dz", []],
["ureterectomy", "yoo-ree-ter-EK-toh-mee", "Surgical removal of a ureter (ureter/o + -ectomy).", "removal of a ureter", "tx", "tx", []],
["ureteritis", "yoo-ree-ter-EYE-tis", "Inflammation of a ureter (ureter/o + -itis).", "inflammation of a ureter", "lx", "dz", []],
["ureterocele", "yoo-REE-ter-oh-seel", "Cyst-like bulging of the end of the ureter into the bladder, usually congenital.", "bulge of the ureter end into the bladder", "dz", "dz", []],
["ureterolith", "yoo-REE-ter-oh-lith", "A stone in the ureter (ureter/o + -lith).", "stone in the ureter", "dz", "dz", []],
["ureteroplasty", "yoo-REE-ter-oh-plas-tee", "Surgical repair of a ureter (ureter/o + -plasty).", "repair of a ureter", "tx", "tx", []],
["ureterorrhagia", "yoo-ree-ter-oh-RAY-jee-ah", "Bleeding from a ureter (ureter/o + -rrhagia).", "bleeding from a ureter", "tr", "sx", []],
["ureterorrhaphy", "yoo-ree-ter-OR-ah-fee", "Suture of a damaged ureter (ureter/o + -rrhaphy).", "suturing of a ureter", "tx", "tx", []],
["ureteroscope", "yoo-REE-ter-oh-skohp", "Instrument to view the inside of the ureter (ureter/o + -scope).", "instrument for viewing the ureter", "tx", "lab", []],
["ureterostenosis", "yoo-ree-ter-oh-steh-NOH-sis", "Narrowing of a ureter (ureter/o + -stenosis).", "narrowing of a ureter", "tr", "dz", []],
["ureterostomy", "yoo-ree-ter-OS-toh-mee", "Surgical opening from a ureter to the skin so urine drains into a bag.", "opening from a ureter to the skin", "tx", "tx", []],
["urethra", "yoo-REE-thrah", "Single tube that carries urine from the bladder out of the body; in the male it also carries semen (urethr/o).", "tube carrying urine out of the bladder", "tr", "body", []],
["urethral", "yoo-REE-thral", "Pertaining to the urethra (urethr/o + -al).", "relating to the urethra", "lx", "body", []],
["urethralgia", "yoo-ree-THRAL-jee-ah", "Pain in the urethra; urethrodynia (urethr/o + -algia).", "pain in the urethra", "lx", "sx", []],
["urethritis", "yoo-ree-THRYE-tis", "Inflammation of the urethra, usually from infection (urethr/o + -itis).", "inflammation of the urethra", "lx", "dz", []],
["urethrocele", "yoo-REE-throh-seel", "Hernia or bulging of the urethra (urethr/o + -cele).", "bulging of the urethra", "tr", "dz", []],
["urethrocystitis", "yoo-ree-throh-sis-TYE-tis", "Inflammation of the urethra and bladder together.", "inflammation of the urethra and bladder", "tr", "dz", []],
["urethropexy", "yoo-REE-throh-pek-see", "Surgical fixation of the urethra to nearby tissue, used for stress incontinence.", "fixation of the urethra", "tx", "tx", []],
["urethroplasty", "yoo-REE-throh-plas-tee", "Surgical repair of the urethra (urethr/o + -plasty).", "repair of the urethra", "tx", "tx", []],
["urethrorrhagia", "yoo-ree-throh-RAY-jee-ah", "Abnormal bleeding from the urethra (urethr/o + -rrhagia).", "bleeding from the urethra", "tr", "sx", []],
["urethrorrhea", "yoo-ree-throh-REE-ah", "Abnormal discharge from the urethra (urethr/o + -rrhea).", "discharge from the urethra", "tr", "sx", []],
["urethroscope", "yoo-REE-throh-skohp", "Instrument to view the inside of the urethra (urethr/o + -scope).", "instrument for viewing the urethra", "tx", "lab", []],
["urethrostenosis", "yoo-ree-throh-steh-NOH-sis", "Narrowing of the urethra (urethr/o + -stenosis).", "narrowing of the urethra", "tr", "dz", []],
["urethrotomy", "yoo-ree-THROT-oh-mee", "Incision to enlarge a narrowed urethra (urethr/o + -tomy).", "incision of the urethra", "tx", "tx", []],
["urge incontinence", "erj in-KON-tih-nens", "Sudden urge that causes urination before reaching a bathroom.", "leaking with sudden need to void", "tr", "sx", []],
["urgency", "ER-jen-see", "Feeling the need to urinate immediately.", "sudden need to void immediately", "tr", "sx", []],
["uric acid", "YOO-rik AS-id", "Nitrogenous waste product of metabolism excreted in urine.", "waste product of purine breakdown", "kd", "phys", []],
["urinalysis", "yoo-rih-NAL-ih-sis", "Physical, chemical and microscopic examination of urine (urin/o + analysis).", "physical, chemical and microscopic urine test", "ur", "lab", ["UA"]],
["urinary", "YOO-rih-nair-ee", "Pertaining to urine (urin/o + -ary).", "relating to urine", "lx", "body", []],
["urinary bladder", "YOO-rih-nair-ee BLAD-er", "Hollow, elastic muscular sac in the pelvis that stores urine (cyst/o, vesic/o).", "sac that stores urine", "tr", "body", []],
["urinary frequency", "YOO-rih-nair-ee FREE-kwen-see", "Need to urinate often without an increase in total daily output; a sign of bladder or urethral inflammation.", "frequent urination", "tr", "sx", []],
["urinary incontinence", "YOO-rih-nair-ee in-KON-tih-nens", "Inability to retain urine; involuntary release of urine.", "inability to hold urine", "tr", "sx", []],
["urinary meatus", "YOO-rih-nair-ee mee-AY-tus", "External opening of the urethra (meat/o).", "outer opening of the urethra", "tr", "body", []],
["urinary retention", "YOO-rih-nair-ee ree-TEN-shun", "Inability to empty the bladder completely, often from blockage of the urethra.", "inability to empty the bladder", "tr", "sx", []],
["urinary stasis", "YOO-rih-nair-ee STAY-sis", "Stoppage or stagnation of urine flow, which promotes infection and stones.", "stagnation of urine flow", "dz", "sx", []],
["urinary system", "YOO-rih-nair-ee SIS-tem", "The kidneys, ureters, urinary bladder and urethra, which form, store and eliminate urine; also called the renal or excretory system.", "kidneys, ureters, bladder and urethra", "lx", "body", []],
["urinary tract infection", "YOO-rih-nair-ee trakt in-FEK-shun", "Infection, usually bacterial (often E. coli), of any part of the urinary tract; more common in women because of the shorter urethra.", "urinary infection", "dz", "dz", ["UTI"]],
["urination", "yoo-rih-NAY-shun", "Release of urine from the bladder; micturition, voiding, uresis.", "passing urine", "tr", "phys", []],
["urine", "YOO-rin", "Fluid formed by the kidneys: about 95% water plus urea, creatinine, salts and pigments (ur/o, urin/o).", "fluid excreted by the kidneys", "ur", "phys", []],
["urinometer", "yoo-rih-NOM-eh-ter", "Instrument that measures the specific gravity of urine (urin/o + -meter).", "instrument measuring urine density", "ur", "lab", []],
["urogram", "YOO-roh-gram", "X-ray record of the urinary tract (ur/o + -gram).", "X-ray image of the urinary tract", "tx", "lab", []],
["urogynecologist", "yoo-roh-gye-neh-KOL-oh-jist", "Urologist who treats urinary problems involving the female reproductive system.", "specialist in female bladder and pelvic floor problems", "lx", "field", []],
["urolith", "YOO-roh-lith", "A stone anywhere in the urinary tract (ur/o + -lith).", "urinary stone", "dz", "dz", []],
["urologist", "yoo-ROL-oh-jist", "Physician who specializes in the urinary system and male reproductive system and performs urologic surgery.", "urinary tract specialist", "lx", "field", []],
["urology", "yoo-ROL-oh-jee", "Branch of medicine that diagnoses and treats disorders of the urinary system in both sexes and the male reproductive system (ur/o + -logy).", "surgical specialty of the urinary tract", "lx", "field", []],
["uropathy", "yoo-ROP-ah-thee", "Any disease of the urinary tract (ur/o + -pathy).", "any disease of the urinary tract", "lx", "dz", []],
["uropenia", "yoo-roh-PEE-nee-ah", "Deficiency of urine (ur/o + -penia).", "deficiency of urine", "ur", "sx", []],
["urostomy", "yoo-ROS-toh-mee", "Artificial opening in the abdomen through which urine leaves the body.", "opening on the abdomen through which urine leaves", "tx", "tx", []],
["vesical", "VES-ih-kal", "Pertaining to the urinary bladder (vesic/o + -al); do not confuse with vesicle, a blister.", "relating to the bladder", "lx", "body", []],
["vesicle", "VES-ih-kl", "A small sac containing liquid; a blister. Compare vesical.", "blister, small sac", "lx", "body", []],
["vesicocele", "VES-ih-koh-seel", "Hernia of the urinary bladder; cystocele (vesic/o + -cele).", "hernia of the bladder", "tr", "dz", []],
["vesicovaginal fistula", "ves-ih-koh-VAJ-ih-nal FIS-tyoo-lah", "Abnormal passage between the bladder and vagina causing constant leakage of urine.", "abnormal passage between bladder and vagina", "tr", "dz", []],
["voiding", "VOYD-ing", "Emptying the bladder; urination.", "emptying the bladder", "tr", "phys", []],
["voiding cystourethrography", "VOYD-ing sis-toh-yoo-ree-THROG-rah-fee", "X-ray of the bladder and urethra taken while the patient voids after contrast is put into the bladder.", "bladder X-ray taken while passing urine", "tx", "lab", ["VCUG"]],
["water intoxication", "WAW-ter in-tok-sih-KAY-shun", "Excess water intake or retention that dilutes the blood sodium; hyponatremia.", "low blood sodium from excess water", "dz", "dz", []]];
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
    ['a-, an-', ['an', 'a'], 'without, not', "without, lacking", '*'],
    ['anti-', ['anti'], 'against', "against", 'tx'],
    ['dia-', ['dia'], 'through, complete', "through", 'tx'],
    ['dys-', ['dys'], 'painful, difficult', "painful, difficult", 'ur'],
    ['en-', ['en'], 'in, within', "within", 'tr'],
    ['extra-', ['extra'], 'outside of', "outside", 'tx'],
    ['hyper-', ['hyper'], 'above, excessive', "excessive", 'ur'],
    ['hypo-', ['hypo'], 'below, deficient', "below normal", 'ur'],
    ['in-', ['in'], 'not', "not, without", 'tr'],
    ['inter-', ['inter'], 'between', "between", 'lx'],
    ['intra-', ['intra'], 'within', "within", 'lx'],
    ['juxta-', ['juxta'], 'near', "near", 'lx'],
    ['peri-', ['peri'], 'around', "around", 'lx'],
    ['poly-', ['poly'], 'many, much', "many", 'ur'],
    ['post-', ['post'], 'after, behind', "after", 'lx'],
    ['pre-', ['pre'], 'before, in front of', "before", 'lx'],
    ['retro-', ['retro'], 'backward, behind', "behind, backward", 'kd'],
    ['supra-', ['supra'], 'above', "above", 'lx'],
    ['trans-', ['trans'], 'through, across', "through", 'lx'],
    // ریشه‌های کلیه و مجاری
    ['nephr/o, ren/o', ['nephr', 'ren'], 'kidney', "kidney", 'lx'],
    ['glomerul/o', ['glomerul'], 'glomerulus', "kidney capillary tuft (glomerulus)", 'lx'],
    ['pyel/o', ['pyel'], 'renal pelvis', "renal pelvis", 'lx'],
    ['cali/o, calic/o', ['calic', 'cali'], 'calyx', "calyx (cup of the kidney)", 'kd'],
    ['cortic/o', ['cortic'], 'cortex, outer region', "cortex", 'kd'],
    ['medull/o', ['medull'], 'medulla, inner region', "medulla (inner part)", 'kd'],
    ['ureter/o', ['ureter'], 'ureter', "ureter", 'lx'],
    ['cyst/o, vesic/o', ['cyst', 'vesic'], 'urinary bladder; sac', "bladder; sac", 'lx'],
    ['trigon/o', ['trigon'], 'trigone', "trigone", 'tr'],
    ['urethr/o', ['urethr'], 'urethra', "urethra", 'lx'],
    ['meat/o', ['meat'], 'meatus, opening', "opening", 'lx'],
    ['ur/o, urin/o', ['urin', 'ur'], 'urine, urinary tract', "urine, urinary tract", 'lx'],
    ['genit/o', ['genit'], 'genitals', "genitals", 'lx'],
    ['peritone/o', ['peritone'], 'peritoneum', "peritoneum", 'kd'],
    ['corpor/o', ['corpor'], 'body', "body", 'tx'],
    ['ile/o', ['ile'], 'ileum', "ileum", 'tx'],
    // مواد ادرار و خون
    ['albumin/o', ['albumin'], 'albumin', "albumin", 'ur'],
    ['azot/o', ['azot'], 'nitrogen, nitrogenous waste', "nitrogenous waste", 'ur'],
    ['bacteri/o', ['bacteri'], 'bacteria', "bacteria", 'ur'],
    ['chromat/o', ['chromat'], 'color', "colour", 'ur'],
    ['dips/o', ['dips'], 'thirst', "thirst", 'ur'],
    ['glyc/o, glycos/o', ['glycos', 'glyc'], 'sugar, glucose', "sugar", 'ur'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', "blood", 'ur'],
    ['hydr/o', ['hydr'], 'water', "water", 'dz'],
    ['kal/i', ['kali', 'kal'], 'potassium', "potassium", 'ur'],
    ['natr/o, natri-', ['natri', 'natr'], 'sodium', "Sodium", 'ur'],
    ['keton/o', ['keton'], 'ketones', "ketones", 'ur'],
    ['lith/o', ['lith'], 'stone, calculus', "stone", 'lx'],
    ['noct/i, noct/o', ['noct'], 'night', "night", 'ur'],
    ['olig/o', ['olig'], 'scanty, few', "low", 'ur'],
    ['protein/o', ['protein'], 'protein', "building-block nutrient", 'ur'],
    ['py/o', ['py'], 'pus', "pus", 'ur'],
    // ریشه‌های عمومی
    ['blast/o', ['blast'], 'immature cell, germ', "immature cell", 'dz'],
    ['carcin/o', ['carcin'], 'cancer', "cancer", 'dz'],
    ['iatr/o', ['iatr'], 'physician, treatment', "physician, treatment", 'tx'],
    ['necr/o', ['necr'], 'death', "death (of tissue)", 'dz'],
    ['neur/o', ['neur'], 'nerve', "nerve", 'tr'],
    ['scler/o', ['scler'], 'hard', "hard", 'dz'],
    ['sten/o', ['sten'], 'narrow', "narrow", 'tr'],
    ['tox/o', ['tox'], 'poison', "poison", 'lx'],
    ['ven/o', ['ven'], 'vein', "vein", 'tx'],
    // پسوندها
    ['-uria', ['uria'], 'urine condition', "condition of urine", 'lx'],
    ['-uresis, -esis', ['uresis', 'esis'], 'urination', "urination", 'ur'],
    ['-emia', ['emia'], 'blood condition', "blood condition", 'ur'],
    ['-lith', ['lith'], 'stone', "stone", 'lx'],
    ['-lithiasis', ['lithiasis'], 'condition of stones', "having stones", 'dz'],
    ['-iasis, -osis', ['iasis', 'osis', 'sis'], 'abnormal condition', "abnormal condition", '*'],
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-oma', ['oma'], 'tumor, mass', "tumour, mass", '*'],
    ['-megaly', ['megaly'], 'enlargement', "enlargement", 'dz'],
    ['-malacia', ['malacia'], 'softening', "softening", 'dz'],
    ['-ptosis', ['ptosis'], 'drooping, prolapse', "drooping", 'dz'],
    ['-ectasis, -ectasia', ['ectasis', 'ectasia'], 'dilation, stretching', "widening", 'tr'],
    ['-stenosis', ['stenosis'], 'narrowing', "narrowing", 'tr'],
    ['-sclerosis', ['sclerosis'], 'hardening', "hardening", 'dz'],
    ['-cele', ['cele'], 'hernia, protrusion', "hernia, protrusion", 'tr'],
    ['-rrhagia', ['rrhagia'], 'bursting forth of blood', "bleeding", 'tr'],
    ['-rrhea', ['rrhea'], 'flow, discharge', "secrete", 'tr'],
    ['-algia, -dynia', ['algia', 'dynia'], 'pain', "pain", 'lx'],
    ['-pathy', ['pathy'], 'disease', "disease", 'lx'],
    ['-penia', ['penia'], 'deficiency', "deficiency", 'ur'],
    ['-spadias', ['spadias'], 'slit, fissure', "split", 'dz'],
    ['-plasia', ['plasia'], 'formation, development', "growth, formation", 'dz'],
    ['-genic', ['genic'], 'producing, originating', "producing", 'tr'],
    ['-logy', ['logy'], 'study of', "study of", 'lx'],
    ['-logist', ['logist'], 'specialist', "specialist", 'lx'],
    ['-ectomy', ['ectomy'], 'surgical removal', "surgical removal", '*'],
    ['-tomy', ['tomy'], 'incision', "incision", '*'],
    ['-stomy', ['stomy'], 'new opening', "new opening", 'tx'],
    ['-pexy', ['pexy'], 'surgical fixation', "surgical fixation", 'tx'],
    ['-plasty', ['plasty'], 'surgical repair', "surgical repair", 'tx'],
    ['-rrhaphy', ['rrhaphy'], 'suture', "stitch", 'tx'],
    ['-tripsy', ['tripsy'], 'crushing', "crushing", 'tx'],
    ['-lysis', ['lysis'], 'separation, breakdown', "separation, breakdown", 'tx'],
    ['-scope', ['scope'], 'instrument to view', "viewing instrument", 'tx'],
    ['-scopy', ['scopy'], 'visual examination', "viewing with an instrument", 'tx'],
    ['-meter', ['meter'], 'instrument to measure', "measuring instrument", 'ur'],
    ['-metry', ['metry'], 'measurement', "measurement", 'tx'],
    ['-gram', ['gram'], 'record', "record, image", 'tx'],
    ['-graphy', ['graphy'], 'process of recording', "recording process", 'tx'],
    ['-al, -ic, -ar, -ary, -eal, -tic, -ous', ['ary', 'eal', 'tic', 'ous', 'al', 'ic', 'ar'], 'pertaining to', "pertaining to", '*'],
    ['-ia, -y', ['ia', 'y'], 'condition', "condition", '*']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['ACE', 'angiotensin-converting enzyme', "angiotensin-converting enzyme", 'tx'],
    ['ACR', 'albumin/creatinine ratio', "albumin-to-creatinine ratio", 'ur'],
    ['ADH', 'antidiuretic hormone', "antidiuretic hormone", 'kd'],
    ['AGN', 'acute glomerulonephritis', "sudden inflammation of the glomeruli", 'dz'],
    ['AKI', 'acute kidney injury', "sudden kidney damage", 'dz'],
    ['ARF', 'acute renal failure', "sudden loss of kidney function", 'dz'],
    ['ATN', 'acute tubular necrosis', "acute tubular necrosis", 'dz'],
    ['BNO', 'bladder neck obstruction', "bladder neck obstruction", 'tr'],
    ['BUN', 'blood urea nitrogen', "blood urea nitrogen", 'ur'],
    ['C&S', 'culture and sensitivity', "culture and sensitivity", 'ur'],
    ['CAPD', 'continuous ambulatory peritoneal dialysis', "daytime home exchanges of abdominal dialysis fluid", 'tx'],
    ['cath', 'catheterization', "catheterization", 'tx'],
    ['CC', 'clean-catch urine specimen', "clean-catch midstream specimen", 'ur'],
    ['CCPD', 'continuous cyclic peritoneal dialysis', "machine-run abdominal dialysis overnight", 'tx'],
    ['CCT', 'creatinine clearance test', "test of how fast creatinine is cleared", 'ur'],
    ['CKD', 'chronic kidney disease', "long-term loss of kidney function", 'dz'],
    ['Cl', 'chloride', "salt-forming blood electrolyte", 'kd'],
    ['CMG', 'cystometrography; cystometrogram', "cystometry", 'tx'],
    ['Cr', 'creatinine', "creatinine", 'ur'],
    ['CRF', 'chronic renal failure', "chronic kidney failure", 'dz'],
    ['CT', 'computed tomography', "CT scan", 'tx'],
    ['cysto', 'cystoscopy', "cystoscopy", 'tx'],
    ['eGFR', 'estimated glomerular filtration rate', "estimated glomerular filtration rate", 'ur'],
    ['EPO', 'erythropoietin', "kidney hormone for red cells", 'kd'],
    ['ESRD', 'end-stage renal disease', "end-stage renal disease", 'dz'],
    ['ESWL', 'extracorporeal shock wave lithotripsy', "extracorporeal shock wave lithotripsy", 'tx'],
    ['EU', 'excretory urography', "excretory urography", 'tx'],
    ['EUD', 'external urinary drainage', "external urine drainage (sheath catheter)", 'tx'],
    ['GFR', 'glomerular filtration rate', "glomerular filtration rate", 'kd'],
    ['GU', 'genitourinary', "genital and urinary", 'lx'],
    ['H2O', 'water', "water", 'kd'],
    ['HCO3', 'bicarbonate', "blood buffer base", 'kd'],
    ['HD', 'hemodialysis', "filtering the blood by machine", 'tx'],
    ['I&O', 'intake and output', "fluid intake and output", 'ur'],
    ['IPD', 'intermittent peritoneal dialysis', "abdominal dialysis done at intervals", 'tx'],
    ['IVP', 'intravenous pyelogram, pyelography', "intravenous pyelography", 'tx'],
    ['IVU', 'intravenous urography', "X-ray of the urinary tract after IV contrast", 'tx'],
    ['K', 'potassium', "potassium", 'ur'],
    ['KUB', 'kidneys, ureters, bladder', "plain X-ray of kidneys, ureters and bladder", 'tx'],
    ['mEq', 'milliequivalent', "unit of electrolyte concentration", 'ur'],
    ['mL', 'milliliter', "millilitres", 'ur'],
    ['Na', 'sodium', "Sodium", 'ur'],
    ['NS', 'nephrotic syndrome', "nephrotic syndrome", 'dz'],
    ['PEP', 'protein electrophoresis', "separating proteins in an electric field", 'ur'],
    ['pH', 'degree of acidity or alkalinity', "acidity or alkalinity", 'ur'],
    ['PKD', 'polycystic kidney disease', "polycystic kidney disease", 'dz'],
    ['RBC', 'red blood cell', "red blood cell", 'ur'],
    ['RP', 'retrograde pyelogram, pyelography', "retrograde pyelography", 'tx'],
    ['SG, sp. gr.', 'specific gravity', "specific gravity", 'ur'],
    ['Tm', 'maximal transport capacity (tubular maximum)', "maximum tubular transport capacity", 'kd'],
    ['TURP', 'transurethral resection of the prostate', "prostate removal through the urethra", 'tx'],
    ['UA, U/A', 'urinalysis', "urinalysis", 'ur'],
    ['UC', 'urine culture', "urine culture", 'ur'],
    ['US', 'ultrasound, ultrasonography', "ultrasound scan", 'tx'],
    ['UTI', 'urinary tract infection', "urinary infection", 'dz'],
    ['VCG', 'voiding cystogram', "bladder X-ray taken while voiding", 'tx'],
    ['VCUG', 'voiding cystourethrography', "voiding cystourethrography", 'tx'],
    ['WBC', 'white blood cell', "white blood cell", 'ur'],
    ['y/o', 'years old', "years old", 'lx']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'body', icon: '🫘', name: "Structures of the kidney and urinary tract" },
    { id: 'phys', icon: '🔁', name: "Urine formation and fluid balance" },
    { id: 'field', icon: '🎓', name: "Specialties and specialists" },
    { id: 'dz', icon: '🩺', name: "Diseases" },
    { id: 'sx', icon: '🔍', name: "Signs and findings" },
    { id: 'lab', icon: '🧪', name: "Tests and imaging" },
    { id: 'tx', icon: '💊', name: "Treatment, drugs and surgery" }
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
    Anatomy_and_Physiology: "Anatomy and physiology", Pathology_and_Disorders: "Diseases and disorders",
    Laboratory_and_Diagnostics: "Laboratory and diagnosis", Pharmacology_and_Treatment: "Treatment, drugs and surgery"
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
      return { kind: 'mcq', tag: 'term', q: `What does ${E(`<b>${t.t}</b>`)} mean?`, opts: [t].concat(ds).map(x => x.fa), a: 0, why: why(t) };
    };
    G['f2t:' + W] = () => {
      const pool = termsOf(w), t = rnd(pool);
      const ds = distract(pool, t, x => norm(x.t), 3);
      return { kind: 'mcq', tag: 'term', q: `Which medical term means “<b>${t.fa}</b>”?`, opts: [t].concat(ds).map(x => E(x.t)), a: 0, why: why(t) };
    };
    G['d2t:' + W] = () => {
      const pool = termsOf(w).filter(x => x.d.length > 25), t = rnd(pool);
      const ds = distract(pool, t, x => norm(x.t), 3);
      const d = defShort(t.d).replace(new RegExp(t.t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig'), '_____');
      return { kind: 'mcq', tag: 'def', q: `Which term does this definition describe?<span class="defq" dir="ltr">${d}</span>`, opts: [t].concat(ds).map(x => E(x.t)), a: 0, why: why(t) };
    };
    G['sp:' + W] = () => {
      const pool = termsOf(w).filter(x => /^[A-Za-z][a-z-]+(?: [a-z-]+)?$/.test(x.t) && x.t.length <= 22), t = rnd(pool);
      return { kind: 'spell', tag: 'spell', q: `Spell the term for “<b>${t.fa}</b>”`, ans: [t.t], why: why(t), hint: t.p ? `/${t.p}/` : t.t[0] + '…' };
    };
    G['r2m:' + W] = () => {
      const pool = rootsOf(W), r = rnd(pool);
      const ds = distract(ROOTS, r, x => x.fa, 3);
      return { kind: 'mcq', tag: 'root', q: `The ${r.kind === 'suffix' ? "suffix" : r.kind === 'prefix' ? "prefix" : "root"} ${E(`<b>${r.a}</b>`)} means…`, opts: [r].concat(ds).map(x => x.fa), a: 0, why: `${E(`<b>${r.a}</b>`)} = ${r.fa} <span dir="ltr">(${r.en})</span>${example(r)}` };
    };
    G['m2r:' + W] = () => {
      const pool = rootsOf(W), r = rnd(pool);
      const ds = distract(ROOTS.filter(x => x.kind === r.kind || Math.random() < 0.3), r, x => x.fa, 3);
      return { kind: 'mcq', tag: 'root', q: `Which word part means “<b>${r.fa}</b>”?`, opts: [r].concat(ds).map(x => E(x.a)), a: 0, why: `${E(`<b>${r.a}</b>`)} = ${r.fa} <span dir="ltr">(${r.en})</span>${example(r)}` };
    };
    G['wb:' + W] = () => {
      const pool = buildable(w), x = rnd(pool);
      const used = new Set(x.parts.map(p => p.r.id));
      const extra = shuffle(ROOTS.filter(r => !used.has(r.id) && inW(r, w) && r.w !== '*')).slice(0, 3).map(r => r.kind === 'root' ? r.a.split(',')[0] : r.a.split(',')[0]);
      return { kind: 'build', tag: 'build', q: `Build the term that means “<b>${short(x.t.fa)}</b>”`, parts: x.parts.map(partLabel), extra, why: why(x.t) + `<div class="wbx">${x.parts.map(p => `<span><b dir="ltr">${partLabel(p)}</b> ${p.r.fa}</span>`).join('')}</div>` };
    };
    G['ab:' + W] = () => {
      const own = ABBR.filter(a => !w || a.w === w), pool = own.length >= 4 ? own : ABBR, a = rnd(pool);
      const ds = distract(ABBR, a, x => x.fa, 3);
      return { kind: 'mcq', tag: 'abbr', q: `The abbreviation ${E(`<b>${a.a}</b>`)} means…`, opts: [a].concat(ds).map(x => x.fa), a: 0, why: `${E(`<b>${a.a}</b>`)} = <span dir="ltr">${a.full}</span><br>${a.fa}` };
    };
  });
  /** نمونه واژه برای یک ریشه */
  function example(r) {
    const ex = TERMS.filter(t => /^[a-z]+$/i.test(t.t) && analyze(t.t).parts.some(p => p.r === r)).slice(0, 3);
    return ex.length ? `<br><small>Example: ${ex.map(t => E(t.t)).join(", ")}</small>` : '';
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
  const f = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${p.size || 10}" font-weight="${p.w || 600}" fill="${p.fill || MUTED}" text-anchor="${(p.anchor || 'middle')}" direction="ltr" font-family="${FONT_EN}">${LRI(s)}</text>`; };
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
    return svg(360, 300, `${title("The urinary system: two kidneys, two ureters, one bladder, one urethra")}
      ${mannequin(180, 30, 1.02, { op: 0.55 })}
      ${tube('M180 70 L180 230', '#e8a39b', '#c97b72', 5)}
      <g filter="url(#${sh})">${urL}${urR}${kL.svg}${kR.svg}${bl}${ure}</g>
      ${pin(124, 102, 70, 84)}${lab(46, 66, 'kidney', "kidney", { size: 10.5 })}
      ${pin(166, 168, 76, 168)}${lab(46, 150, 'ureter', "ureter", { size: 10.5 })}
      ${pin(196, 222, 286, 206)}${lab(314, 188, 'urinary bladder', "bladder", { size: 10.5 })}
      ${pin(181, 256, 286, 262)}${lab(314, 248, 'urethra', "urethra", { size: 10.5 })}
      ${pin(236, 98, 286, 86)}${lab(314, 70, 'renal = nephric', "of the kidney", { size: 10 })}
      ${f(180, 292, "The kidneys make urine; the rest only carry it, store it and let it out", { size: 9, fill: INK, w: 700 })}`, "urinary system", shadow(sh));
  };

  A['urine-flow'] = () => {
    const m = nid(), sh = nid();
    const box = (x, ic, en, fa, job, c) => `<g filter="url(#${sh})"><rect x="${x}" y="52" width="74" height="132" rx="14" fill="${c}"/></g>${ic}${lab(x + 37, 136, en, fa, { size: 10 })}${f(x + 37, 168, job, { size: 8.4, fill: INK, w: 700 })}`;
    const k = kidney(46, 92, 0.3, {}).svg;
    const u = tube('M128 70 C120 90 136 104 128 124', C.tube, C.tubeLine, 6);
    const b = `<path d="M196 104 C194 80 238 80 236 104 C238 120 226 128 216 130 C206 128 194 120 196 104Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.4"/><path d="M200 104 L232 104 C232 118 222 124 216 125 C210 124 200 118 200 104Z" fill="${C.urine}" opacity=".6"/>`;
    const r = tube('M302 70 L302 124', C.tube, C.tubeLine, 6);
    return svg(360, 236, `${title("The route of urine from formation to exit")}
      ${box(9, k, 'kidneys', "The kidneys", "filter blood and make urine", '#fbe3df')}${box(97, u, 'ureters', "The ureters", "carry urine to the bladder", '#fdf1d5')}
      ${box(181, b, 'bladder', "bladder", "stores urine", '#fde6ec')}${box(265, r, 'urethra', "urethra", "lets urine out", '#e6f2fb')}
      ${arrow(m, 84, 118, 95, 118, C.urineLine, 2.4)}${arrow(m, 172, 118, 179, 118, C.urineLine, 2.4)}${arrow(m, 256, 118, 263, 118, C.urineLine, 2.4)}
      ${f(180, 210, "ureter has two e’s and there are two; urethra has one e and there is one", { size: 9.5, fill: INK, w: 800 })}
      ${f(180, 228, "Passing urine: urination, voiding or micturition", { size: 9, fill: MUTED })}`, "Route of urine", marker(m, C.urineLine) + shadow(sh));
  };

  A['wordparts'] = () => {
    const m = nid();
    const piece = (x, w, en, kind, fa, bg, c) => `<rect x="${x}" y="58" width="${w}" height="44" rx="10" fill="${bg}"/>${t(x + w / 2, 86, en, { size: 15, w: 900, fill: c })}<path d="M${x + 4} 112 H${x + w - 4}" stroke="${c}" stroke-width="2"/><path d="M${x + 4} 108 V112 M${x + w - 4} 108 V112" stroke="${c}" stroke-width="2"/>${lab(x + w / 2, 128, kind, fa, { size: 9, fill: c })}`;
    return svg(360, 214, `${title("One word, three pieces: pyelonephritis")}
      ${piece(18, 92, 'pyel/o', 'root', "root: renal pelvis", '#fdf1d5', '#a8801f')}${piece(118, 100, 'nephr', 'root', "root: kidney", '#fbe3df', '#b0413e')}${piece(226, 116, '-itis', 'suffix', "suffix: inflammation", '#e7f5dd', '#3f8a05')}
      ${t(114, 86, '+', { size: 16, w: 900, fill: MUTED })}${t(222, 86, '+', { size: 16, w: 900, fill: MUTED })}
      ${curve(m, 'M284 160 C230 190 120 190 64 162', '#c0563b', 1.8, true)}
      ${f(180, 196, "Read the meaning from the suffix, then the roots from the start: inflammation of the renal pelvis and kidney", { size: 9.5, fill: INK, w: 800 })}
      ${f(180, 42, "The combining vowel o drops before a suffix that starts with a vowel", { size: 8.6 })}`, "Word pieces", marker(m, '#c0563b'));
  };

  A['root-map'] = () => {
    const ks = kidneySection(96, 118, 0.95, { ureter: 12 });
    const P = ks.P, bl = bladder(258, 168, 0.56, { noUreters: true });
    const B = bl.P;
    return svg(360, 280, `${title("Root map: kidney to urethra")}
      ${ks.svg}${tube(`M${P.ureter[0]} ${P.ureter[1] + 30} C150 210 196 120 ${B.ureterL[0] + 6} ${B.ureterL[1] + 50}`, C.pel, C.pelLine, 5)}${bl.svg}
      ${pin(P.cortex[0], P.cortex[1], 18, 40)}${lab(30, 34, 'nephr/o, ren/o', "kidney", { size: 9.5, anchor: 'start' })}
      ${pin(P.calyx2[0], P.calyx2[1], 128, 42)}${lab(150, 36, 'cali/o, calic/o', "calyx", { size: 9.5, anchor: 'start' })}
      ${pin(P.pelvis[0], P.pelvis[1], 176, 82)}${lab(184, 78, 'pyel/o', "renal pelvis", { size: 9.5, anchor: 'start' })}
      ${pin(P.ureter[0] + 2, P.ureter[1] + 18, 74, 238)}${lab(20, 232, 'ureter/o', "ureter", { size: 9.5, anchor: 'start' })}
      ${pin(B.lumen[0], B.lumen[1], 300, 96)}${lab(256, 66, 'cyst/o, vesic/o', "bladder", { size: 9.5, anchor: 'start' })}
      ${pin(B.trigone[0], B.trigone[1], 318, 170)}${lab(300, 186, 'trigon/o', "trigone", { size: 9.5, anchor: 'start' })}
      ${pin(B.urethra[0], B.urethra[1] - 4, 210, 228)}${lab(172, 222, 'urethr/o', "urethra", { size: 9.5, anchor: 'start' })}
      ${pin(B.meatus[0], B.meatus[1], 300, 244)}${lab(292, 258, 'meat/o', "urinary meatus", { size: 9.5, anchor: 'start' })}`, "The root map");
  };

  A['twins'] = () => {
    const row = (y, a, af, b, bf, bg) => `<rect x="10" y="${y}" width="340" height="44" rx="12" fill="${bg}"/>${lab(96, y + 19, a, af, { size: 10.5 })}<circle cx="180" cy="${y + 22}" r="11" fill="#3a3a3a"/>${t(180, y + 26, 'vs', { size: 9, w: 900, fill: '#fff' })}${lab(264, y + 19, b, bf, { size: 10.5 })}`;
    return svg(360, 296, `${title("Look-alike traps in the urinary system")}
      ${row(30, 'ureter (×2)', "ureter: kidney to bladder", 'urethra (×1)', "urethra: bladder to the outside", '#fdf1d5')}
      ${row(80, 'vesical', "relating to the bladder (adjective)", 'vesicle', "blister (noun)", '#fbe3df')}
      ${row(130, 'creatinine', "creatinine: waste product", 'creatine', "creatine: in muscle", '#e6f2fb')}
      ${row(180, 'enuresis', "bed-wetting", 'anuresis', "failure to pass urine", '#efe7fb')}
      ${row(230, 'cyst/o', "bladder; sac", 'cyt/o', "cell", '#e7f5dd')}
      ${f(180, 288, "Don’t confuse ureter/o (ureter) with uter/o (uterus) either", { size: 9, fill: INK, w: 700 })}`, "Look-alike Traps");
  };

  A['position-prefixes'] = () => {
    const m = nid(), k1 = kidney(130, 150, 0.6, { adrenal: true }), k2 = kidney(250, 150, 0.6, { flip: true, adrenal: true });
    return svg(360, 280, `${title("Position prefixes: where on the kidney?")}
      <ellipse cx="128" cy="150" rx="46" ry="54" fill="none" stroke="#3b6fd4" stroke-width="1.6" stroke-dasharray="5 4"/>
      ${k1.svg}${k2.svg}
      ${pin(k1.P.adrenal[0], k1.P.adrenal[1], 70, 62)}${lab(54, 42, 'supra-renal', "above the kidney (adrenal gland)", { size: 9.5 })}
      ${pin(84, 168, 46, 206)}${lab(46, 222, 'peri-renal', "around the kidney", { size: 9.5, fill: '#24479a' })}
      ${pin(126, 150, 112, 222)}${lab(112, 236, 'intra-renal', "inside the kidney", { size: 9.5 })}
      ${arrow(m, 168, 150, 206, 150, '#c0563b', 2)}${arrow(m, 206, 150, 168, 150, '#c0563b', 2)}${lab(188, 106, 'inter-renal', "between the kidneys", { size: 9.5, fill: '#c0563b' })}
      ${lab(262, 236, 'pre- / post-', "in front of / behind the kidney", { size: 9.5 })}
      ${f(180, 272, "The prefix gives the position, and ren/o + -al says “renal”", { size: 9, fill: INK, w: 700 })}`, "Position prefixes", marker(m, '#c0563b'));
  };

  A['uria-family'] = () => {
    const items = [['an-', 'anuria', "no urine"], ['olig/o', 'oliguria', "scanty urine"], ['poly-', 'polyuria', "excessive urination"], ['noct/i', 'nocturia', "night-time urination"],
      ['dys-', 'dysuria', "painful urination"], ['hemat/o', 'hematuria', "blood in the urine"], ['py/o', 'pyuria', "pus in the urine"], ['glycos/o', 'glycosuria', "sugar in the urine"]];
    let g = '';
    items.forEach((it, i) => {
      const a = -Math.PI / 2 + i * Math.PI / 4, x = 180 + Math.cos(a) * 112, y = 152 + Math.sin(a) * 92;
      g += `<path d="M${(180 + Math.cos(a) * 40).toFixed(1)} ${(152 + Math.sin(a) * 34).toFixed(1)} L${(180 + Math.cos(a) * 76).toFixed(1)} ${(152 + Math.sin(a) * 64).toFixed(1)}" stroke="${C.urineLine}" stroke-width="1.6"/>`;
      g += `<rect x="${(x - 48).toFixed(1)}" y="${(y - 22).toFixed(1)}" width="96" height="44" rx="11" fill="#fdf6e1" stroke="#ecd9a0"/>${t(x, y - 6, it[1], { size: 10, w: 900 })}${f(x, y + 9, it[2], { size: 8.8, fill: INK })}${t(x, y + 19, it[0], { size: 7.5, fill: '#a8801f', w: 800 })}`;
    });
    return svg(360, 300, `${title("The -uria family: states of the urine")}
      <ellipse cx="180" cy="152" rx="40" ry="34" fill="${C.urine}" stroke="${C.urineLine}" stroke-width="2"/>${t(180, 150, '-uria', { size: 15, w: 900 })}${f(180, 166, "condition of urine", { size: 9, fill: INK, w: 800 })}
      ${g}`, "The uria family");
  };

  A['specialists'] = () => {
    const sh = nid(), k = kidney(92, 112, 0.42, { vessels: true }).svg, b = bladder(268, 116, 0.42, {}).svg;
    return svg(360, 252, `${title("Two specialists: kidney or urinary tract?")}
      <g filter="url(#${sh})"><rect x="10" y="32" width="164" height="190" rx="16" fill="#fbe3df"/><rect x="186" y="32" width="164" height="190" rx="16" fill="#e6f2fb"/></g>
      ${k}${b}
      ${lab(92, 176, 'nephrologist', "kidney physician (internal medicine)", { size: 10.5 })}${f(92, 206, "kidney failure, dialysis, transplant", { size: 8.6, fill: INK })}
      ${lab(268, 176, 'urologist', "urinary tract surgeon", { size: 10.5 })}${f(268, 206, "stones, bladder, prostate, surgery", { size: 8.6, fill: INK })}
      ${f(180, 244, "nephr/o + -logist and ur/o + -logist", { size: 9, fill: MUTED, w: 700 })}`, "Specialists", shadow(sh));
  };

  /* ================= kd: کلیه و نفرون ================= */
  A['kidney-location'] = () => {
    const sh = nid(), R = rng(9);
    let gut = '';
    for (let i = 0; i < 9; i++) { const x = 130 + R() * 100, y = 84 + R() * 54; gut += `<ellipse cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" rx="${(14 + R() * 8).toFixed(0)}" ry="${(9 + R() * 5).toFixed(0)}" fill="#f6c9b8" stroke="#d99a86" stroke-width="1"/>`; }
    const kL = kidney(112, 176, 0.36, { flip: true }), kR = kidney(248, 176, 0.36, {});
    return svg(360, 280, `${title("Where the kidneys lie: behind the peritoneum, in a cross-section of the abdomen")}
      <g filter="url(#${sh})"><ellipse cx="180" cy="148" rx="150" ry="104" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.6"/></g>
      <ellipse cx="180" cy="146" rx="140" ry="94" fill="#fbe3d6"/>
      <path d="M60 156 C70 92 120 56 180 56 C240 56 290 92 300 156 C270 150 240 152 216 160 C200 166 160 166 144 160 C120 152 90 150 60 156Z" fill="#fff6ef" stroke="#3b6fd4" stroke-width="1.6" stroke-dasharray="5 4"/>
      ${gut}
      <rect x="160" y="190" width="40" height="34" rx="8" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.5"/><path d="M180 224 L180 246" stroke="${C.boneLine}" stroke-width="6"/>
      <ellipse cx="180" cy="168" rx="9" ry="9" fill="${C.art}"/><ellipse cx="204" cy="170" rx="11" ry="9" fill="${C.vein}"/>
      ${kL.svg}${kR.svg}
      ${pin(250, 168, 300, 216)}${lab(318, 230, 'kidney', "kidney", { size: 10 })}
      ${pin(180, 236, 180, 262)}${t(220, 262, 'vertebra', { size: 9.5, w: 800 })}${f(220, 274, "spinal bone", { size: 8.5 })}
      ${pin(270, 98, 306, 60)}${lab(320, 44, 'peritoneum', "peritoneum", { size: 9.5 })}
      ${f(180, 74, "peritoneal cavity (intestines)", { size: 9, fill: INK, w: 800 })}
      ${pin(98, 190, 50, 232)}${lab(56, 246, 'retroperitoneal', "behind the peritoneum", { size: 9.5, fill: '#24479a' })}
      ${t(180, 46, "anterior • front", { size: 8.5, fill: MUTED })}${t(110, 270, "posterior • back", { size: 8.5, fill: MUTED })}`, "Position of the kidneys", shadow(sh));
  };

  A['kidney-section-art'] = () => {
    const k = kidneySection(150, 150, 1.65, {}), P = k.P;
    return svg(360, 290, `${title("Lengthwise section of the kidney")}
      ${k.svg}
      ${pin(P.capsule[0], P.capsule[1], 30, 214)}${lab(40, 228, 'renal capsule', "renal capsule", { size: 9.5 })}
      ${pin(P.cortex[0], P.cortex[1], 78, 46)}${lab(48, 40, 'renal cortex', "cortex", { size: 9.5 })}
      ${pin(P.pyramid[0], P.pyramid[1], 64, 118)}${lab(34, 112, 'medulla', "renal medulla", { size: 9.5 })}
      ${pin(P.pyramid2[0], P.pyramid2[1], 130, 266)}${lab(80, 264, 'renal pyramid', "cone of the medulla", { size: 9.5 })}
      ${pin(P.papilla[0], P.papilla[1], 196, 262)}${lab(202, 262, 'papilla', "pyramid tip", { size: 9.5, anchor: 'start' })}
      ${pin(P.calyx2[0], P.calyx2[1], 196, 48)}${lab(202, 40, 'calyx', "collecting cup", { size: 9.5, anchor: 'start' })}
      ${pin(P.pelvis[0], P.pelvis[1], 282, 160)}${lab(286, 156, 'renal pelvis', "renal pelvis", { size: 9.5, anchor: 'start' })}
      ${pin(P.hilum[0], P.hilum[1] + 4, 282, 204)}${lab(286, 200, 'hilum', "notch of the kidney", { size: 9.5, anchor: 'start' })}
      ${pin(P.ureter[0], P.ureter[1] + 6, 282, 248)}${lab(286, 244, 'ureter', "ureter", { size: 9.5, anchor: 'start' })}
      ${pin(P.artery[0] + 18, P.artery[1] - 3, 262, 58)}${lab(266, 54, 'renal artery', "renal artery", { size: 9.5, anchor: 'start', fill: '#9c2a23' })}
      ${pin(P.vein[0] + 22, P.vein[1] + 2, 282, 112)}${lab(286, 108, 'renal vein', "renal vein", { size: 9.5, anchor: 'start', fill: '#24479a' })}`, "incision into the kidney");
  };

  A['nephron-art'] = () => {
    const n = nephron(96, 30, 0.8, {}), P = n.P;
    const L = (x, y, en, fa, c) => lab(x, y, en, fa, { size: 9, anchor: 'end', fill: c });
    const R = (x, y, en, fa, c) => lab(x, y, en, fa, { size: 9, anchor: 'start', fill: c });
    return svg(360, 300, `${title("The nephron: the kidney’s working unit")}
      ${n.svg}
      ${pin(P.capsule[0], P.capsule[1], 90, 40)}${L(86, 40, 'Bowman capsule', "Bowman capsule")}
      ${pin(P.afferent[0] + 2, P.afferent[1], 90, 72)}${L(86, 76, 'afferent', "afferent arteriole", '#9c2a23')}
      ${pin(P.efferent[0] + 2, P.efferent[1], 90, 104)}${L(86, 108, 'efferent', "efferent arteriole", '#9c2a23')}
      ${pin(P.glom[0], P.glom[1], 90, 140)}${L(86, 144, 'glomerulus', "kidney capillary tuft (glomerulus)")}
      ${pin(P.desc[0], P.desc[1], 90, 186)}${L(86, 190, 'descending limb', "downward limb")}
      ${pin(P.loop[0], P.loop[1], 90, 236)}${L(86, 240, 'nephron loop', "loop of Henle")}
      ${pin(P.pct[0], P.pct[1] - 4, 282, 44)}${R(286, 48, 'proximal tubule', "proximal convoluted tubule")}
      ${pin(P.dct[0], P.dct[1] + 4, 282, 96)}${R(286, 100, 'distal tubule', "distal convoluted tubule")}
      ${pin(P.cd[0] + 4, P.cd[1] - 20, 282, 150)}${R(286, 154, 'collecting duct', "collecting duct")}
      ${pin(P.asc[0] + 2, P.asc[1] + 20, 282, 206)}${R(286, 210, 'ascending limb', "upward limb")}
      ${pin(P.cap[0] - 2, P.cap[1] + 40, 150, 268)}${lab(150, 282, 'peritubular capillaries', "peritubular capillaries", { size: 9 })}`, "nephron");
  };

  A['urine-formation'] = () => {
    const m1 = nid(), m2 = nid(), m3 = nid();
    const n = nephron(30, 36, 0.86, {}), P = n.P;
    const badge = (x, y, l, c) => `<circle cx="${x}" cy="${y}" r="10" fill="${c}"/>${t(x, y + 4, l, { size: 11, w: 900, fill: '#fff' })}`;
    return svg(360, 300, `${title("Three steps of urine formation")}
      ${n.svg}
      ${arrow(m1, P.glom[0] + 4, P.glom[1] - 4, P.capsule[0] + 30, P.capsule[1] - 12, '#d9443a', 2.6)}${badge(P.glom[0] - 2, P.glom[1] - 30, 'A', '#d9443a')}
      ${arrow(m2, P.desc[0] - 2, P.desc[1] - 20, P.cap[0] - 18, P.cap[1] - 12, '#3f8a05', 2.6)}${badge(P.desc[0] - 32, P.desc[1] - 40, 'B', '#3f8a05')}
      ${arrow(m3, P.asc[0] + 24, P.asc[1] + 16, P.asc[0] + 4, P.asc[1] + 6, '#6d4bc3', 2.6)}${badge(P.asc[0] + 36, P.asc[1] + 22, 'C', '#6d4bc3')}
      <rect x="244" y="150" width="110" height="138" rx="12" fill="#f7f4ee"/>
      ${t(254, 174, 'A filtration', { size: 9.5, w: 900, anchor: 'start', fill: '#d9443a' })}${f(346, 188, "filtration in the glomerulus", { size: 8.6, anchor: 'end', fill: INK })}
      ${t(254, 216, 'B reabsorption', { size: 9.5, w: 900, anchor: 'start', fill: '#3f8a05' })}${f(346, 230, "reabsorption into the blood", { size: 8.6, anchor: 'end', fill: INK })}
      ${t(254, 258, 'C secretion', { size: 9.5, w: 900, anchor: 'start', fill: '#6d4bc3' })}${f(346, 272, "secretion of wastes into the tubule", { size: 8.6, anchor: 'end', fill: INK })}
      ${pin(P.cd[0] + 4, P.cd[1] + 30, 266, 112)}${lab(296, 96, 'urine', "urine", { size: 10, fill: '#a8801f' })}`, "Three steps of urine formation", marker(m1, '#d9443a') + marker(m2, '#3f8a05') + marker(m3, '#6d4bc3'));
  };

  A['renal-blood'] = () => {
    const m = nid(), steps = [['aorta', "aorta", C.art], ['renal artery', "renal artery", C.art], ['afferent arteriole', "afferent arteriole", '#e5675c'], ['glomerulus', "glomerulus (filtration)", '#e98b80'],
      ['efferent arteriole', "efferent arteriole", '#d983a0'], ['peritubular capillaries', "peritubular capillaries", '#a58ad8'], ['renal vein', "renal vein", C.vein], ['inferior vena cava', "inferior vena cava", '#24479a']];
    let g = '';
    steps.forEach((s, i) => {
      const col = i % 2, row = Math.floor(i / 2), x = col ? 192 : 18, y = 34 + row * 62;
      const xx = row % 2 ? (col ? 18 : 192) : x;
      g += `<rect x="${xx}" y="${y}" width="150" height="46" rx="12" fill="${s[2]}" opacity=".16"/><rect x="${xx}" y="${y}" width="8" height="46" rx="4" fill="${s[2]}"/>${lab(xx + 79, y + 20, s[0], s[1], { size: 9.5 })}`;
    });
    const AR = [[168, 57, 190, 57], [267, 80, 267, 94], [190, 119, 170, 119], [93, 142, 93, 156], [168, 181, 190, 181], [267, 204, 267, 218], [190, 243, 170, 243]];
    return svg(360, 300, `${title("Blood flow in the kidney")}
      ${g}${AR.map(a => arrow(m, a[0], a[1], a[2], a[3], LINE, 2)).join('')}
      ${f(180, 292, "Filtered blood returns through the renal vein; the wastes stay in the urine", { size: 9, fill: INK, w: 700 })}`, "Blood flow in the kidney", marker(m));
  };

  A['kidney-hormones'] = () => {
    const m = nid(), sh = nid(), k = kidney(180, 150, 0.62, { vessels: false, adrenal: true });
    const box = (x, y, w, en, fa, sub, c) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="${w}" height="64" rx="12" fill="#fff" stroke="${c}" stroke-width="1.6"/></g>${lab(x + w / 2, y + 20, en, fa, { size: 9.5, fill: c })}${f(x + w / 2, y + 52, sub, { size: 8.2, fill: INK })}`;
    return svg(360, 300, `${title("The kidney is a hormone factory too")}
      ${k.svg}
      ${box(10, 40, 110, 'renin', "renin", "→ angiotensin → high blood pressure", '#b0413e')}
      ${box(240, 40, 110, 'erythropoietin', "kidney hormone for red cells", "→ bone marrow → red blood cells", '#c0563b')}
      ${box(10, 200, 110, 'ADH', "antidiuretic hormone", "from the pituitary: hold on to water", '#2b86c5')}
      ${box(240, 200, 110, 'aldosterone', "aldosterone", "from the adrenal gland: sodium and potassium", '#a8801f')}
      ${arrow(m, 146, 122, 120, 100, LINE, 1.8)}${arrow(m, 214, 122, 240, 100, LINE, 1.8)}${arrow(m, 120, 220, 144, 186, '#2b86c5', 1.8)}${arrow(m, 240, 220, 196, 112, '#a8801f', 1.8)}
      ${f(180, 290, "Kidney failure means anaemia (low EPO) and high blood pressure", { size: 9, fill: INK, w: 700 })}`, "Kidney hormones", marker(m) + shadow(sh));
  };

  A['homeostasis'] = () => {
    const sh = nid(), k = kidney(180, 88, 0.42, {});
    const pan = (x, en, items, c) => `<path d="M${x - 56} 150 Q${x} 196 ${x + 56} 150Z" fill="${c}" opacity=".22" stroke="${c}"/><path d="M${x} 96 L${x - 52} 150 M${x} 96 L${x + 52} 150" stroke="#8a96a0" stroke-width="1.2"/>${t(x, 140, en, { size: 9.5, w: 900 })}${items}`;
    return svg(360, 280, `${title("Homeostasis: the kidney is the body’s balance")}
      <path d="M180 120 L180 250 M140 250 L220 250" stroke="#5b6b73" stroke-width="5" stroke-linecap="round"/><path d="M78 96 L282 96" stroke="#5b6b73" stroke-width="4" stroke-linecap="round"/>
      <g filter="url(#${sh})">${k.svg}</g>
      ${pan(78, 'keep', f(78, 170, "water, sodium, glucose", { size: 8.6, fill: INK, w: 700 }), C.green)}
      ${pan(282, 'remove', f(282, 170, "urea, creatinine, uric acid", { size: 8.6, fill: INK, w: 700 }), C.red)}
      ${f(78, 214, "returned to the blood", { size: 9, fill: C.green, w: 800 })}${f(282, 214, "excreted in the urine", { size: 9, fill: C.red, w: 800 })}
      ${lab(180, 38, 'homeostasis', "keeping the body’s balance", { size: 10.5 })}
      ${t(110, 266, 'Na⁺ • K⁺ • Cl⁻ • HCO₃⁻', { size: 9.5, sym: true, w: 800 })}${f(268, 270, "Electrolytes and pH are also regulated", { size: 8.6 })}`, "keeping the body’s balance", shadow(sh));
  };

  A['glomerulus-zoom'] = () => {
    const m = nid();
    return svg(360, 280, `${title("The renal corpuscle: the blood filter")}
      ${tube('M10 112 C40 112 64 118 96 126', C.art, C.artLine, 12)}${tube('M96 160 C66 166 40 172 10 172', '#e5675c', C.artLine, 7)}
      <circle cx="140" cy="142" r="62" fill="${C.tube}" stroke="${C.tubeLine}" stroke-width="2"/><circle cx="140" cy="142" r="50" fill="#fff8e6"/>
      ${glom(136, 142, 38, C.art, 4)}
      ${tube('M190 176 C214 192 230 200 262 200 C292 200 300 230 330 236', C.tube, C.tubeLine, 14)}
      ${arrow(m, 176, 136, 186, 118, '#d9443a', 2)}${arrow(m, 168, 168, 190, 172, '#d9443a', 2)}
      ${lab(48, 76, 'afferent', "afferent (wider)", { size: 9.5, fill: '#9c2a23' })}${lab(48, 196, 'efferent', "efferent (narrower)", { size: 9.5, fill: '#9c2a23' })}
      ${pin(118, 128, 96, 64)}${lab(96, 46, 'glomerulus', "capillary tuft", { size: 9.5 })}
      ${pin(196, 120, 238, 64)}${lab(258, 46, 'glomerular capsule', "Bowman capsule", { size: 9.5 })}
      ${pin(300, 216, 312, 180)}${lab(316, 160, 'filtrate', "filtered fluid", { size: 9.5, fill: '#a8801f' })}
      <rect x="18" y="226" width="160" height="46" rx="10" fill="#e7f5dd"/>${f(98, 244, "passes through: water, salt, sugar, urea", { size: 8.6, fill: INK, w: 800 })}${f(98, 262, 'filtrate', { size: 8, fill: MUTED })}
      <rect x="184" y="226" width="160" height="46" rx="10" fill="#fbe3df"/>${f(264, 244, "does not pass: blood cells and protein", { size: 8.6, fill: INK, w: 800 })}${f(264, 262, "If you see them: hematuria or proteinuria", { size: 8, fill: MUTED })}`, "renal corpuscle", marker(m, '#d9443a'));
  };

  /* ================= tr: مثانه و دفع ادرار ================= */
  A['bladder-art'] = () => {
    const b = bladder(186, 160, 1.0, { urine: -6 }), P = b.P;
    const L = (x, y, en, fa, c) => lab(x, y, en, fa, { size: 9, anchor: 'end', fill: c });
    const R = (x, y, en, fa, c) => lab(x, y, en, fa, { size: 9, anchor: 'start', fill: c });
    return svg(360, 290, `${title("Bladder and urethra in front section")}
      ${b.svg}
      ${pin(P.ureterL[0] + 6, P.ureterL[1] + 24, 118, 52)}${L(114, 54, 'ureter', "ureter")}
      ${pin(P.wall[0] + 3, P.wall[1] - 20, 118, 100)}${L(114, 102, 'detrusor muscle', "detrusor muscle")}
      ${pin(P.lumen[0] - 10, P.lumen[1] - 26, 118, 146)}${L(114, 148, 'rugae', "folds of the lining")}
      ${pin(P.orificeL[0], P.orificeL[1], 118, 192)}${L(114, 194, 'ureteral orifice', "ureteral orifice")}
      ${pin(P.internal[0] - 16, P.internal[1], 118, 238)}${L(114, 240, 'internal sphincter', "internal sphincter (involuntary)")}
      ${pin(P.lumen[0] + 60, P.lumen[1] + 14, 262, 98)}${R(266, 100, 'urine', "stored urine", '#a8801f')}
      ${pin(P.trigone[0] + 8, P.trigone[1], 262, 160)}${R(266, 162, 'trigone', "trigone")}
      ${pin(P.external[0] + 4, P.external[1], 262, 222)}${R(266, 224, 'external sphincter', "external sphincter (voluntary)")}
      ${pin(P.urethra[0] + 3, P.urethra[1] + 4, 262, 266)}${R(266, 268, 'urethra', "urethra")}`, "bladder");
  };

  A['urethra-compare'] = () => {
    const sh = nid();
    const blad = x => `<path d="M${x - 34} 92 C${x - 36} 58 ${x + 36} 58 ${x + 34} 92 C${x + 36} 112 ${x + 18} 124 ${x} 126 C${x - 18} 124 ${x - 36} 112 ${x - 34} 92Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.6"/>`;
    const ruler = (x, y1, y2, l) => `<path d="M${x} ${y1} V${y2} M${x - 5} ${y1} H${x + 5} M${x - 5} ${y2} H${x + 5}" stroke="#5b6b73" stroke-width="1.3"/>${t(x - 8, (y1 + y2) / 2 + 4, l, { size: 9.5, anchor: 'end', sym: true, w: 800 })}`;
    return svg(360, 300, `${title("Female and male urethra")}
      <g filter="url(#${sh})"><rect x="10" y="32" width="164" height="232" rx="16" fill="#fde6ec"/><rect x="186" y="32" width="164" height="232" rx="16" fill="#e6f2fb"/></g>
      ${blad(92)}${tube('M92 126 L92 160', C.tube, C.tubeLine, 7)}${ruler(130, 126, 160, '4 cm')}
      ${blad(268)}<ellipse cx="268" cy="140" rx="20" ry="13" fill="#d9a3c7" stroke="#a46a92"/>${tube('M268 126 L268 176 C268 206 300 206 300 240', C.tube, C.tubeLine, 7)}${ruler(330, 126, 240, '20 cm')}
      ${lab(92, 196, 'female urethra', "short: urine only", { size: 10 })}${f(92, 234, "Urinary infection is more common in women", { size: 8.4, fill: INK, w: 700 })}
      ${lab(232, 222, 'male urethra', "long: urine and semen", { size: 10 })}${pin(286, 142, 316, 98)}${lab(320, 84, 'prostate', "prostate", { size: 9 })}
      ${f(180, 288, "A short urethra means a shorter route for microbes to the bladder", { size: 9, fill: INK, w: 700 })}`, "Female and male urethra", shadow(sh));
  };

  A['voiding-reflex'] = () => {
    const m = nid();
    const bl = (x, lvl, c) => `<path d="M${x - 40} 150 C${x - 42} ${150 - 24 - lvl} ${x + 42} ${150 - 24 - lvl} ${x + 40} 150 C${x + 42} 174 ${x + 20} 188 ${x} 190 C${x - 20} 188 ${x - 42} 174 ${x - 40} 150Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.6"/><path d="M${x - 34} ${166 - lvl} L${x + 34} ${166 - lvl} C${x + 30} 178 ${x + 16} 184 ${x} 185 C${x - 16} 184 ${x - 30} 178 ${x - 34} ${166 - lvl}Z" fill="${C.urine}" opacity=".7"/>${tube(`M${x} 190 L${x} 214`, C.tube, C.tubeLine, 6)}<rect x="${x - 10}" y="194" width="20" height="6" rx="3" fill="${c}"/>`;
    return svg(360, 300, `${title("Voiding reflex: micturition reflex")}
      ${bl(64, 0, '#b8433c')}${bl(180, 20, '#b8433c')}${bl(296, 34, '#3f8a05')}
      ${arrow(m, 108, 160, 134, 160, LINE, 2)}${arrow(m, 224, 160, 250, 160, LINE, 2)}
      ${f(64, 238, "slow filling", { size: 9.5, fill: INK, w: 800 })}${f(64, 254, "sphincters closed", { size: 8.6 })}
      ${f(180, 238, "wall stretching", { size: 9.5, fill: INK, w: 800 })}${f(180, 254, "about 300 to 400 mL", { size: 8.4 })}
      ${f(296, 238, "emptying", { size: 9.5, fill: INK, w: 800 })}${f(296, 254, "detrusor contracts", { size: 8.4 })}${f(296, 268, "internal sphincter relaxes", { size: 8.4 })}
      ${curve(m, 'M180 104 C180 70 230 54 280 74', '#6d4bc3', 1.8, true)}${lab(180, 48, 'brain / spinal cord', "the brain and spinal cord", { size: 9, fill: '#6d4bc3' })}
      ${f(180, 290, "The external sphincter is voluntary; control of it is learned after age two", { size: 8.8, fill: INK, w: 700 })}`, "micturition reflex", marker(m));
  };

  A['incontinence-types'] = () => {
    const sh = nid();
    const mini = (x, y, fill, extra) => `<path d="M${x - 22} ${y} C${x - 24} ${y - 26} ${x + 24} ${y - 26} ${x + 22} ${y} C${x + 24} ${y + 14} ${x + 12} ${y + 22} ${x} ${y + 24} C${x - 12} ${y + 22} ${x - 24} ${y + 14} ${x - 22} ${y}Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.4"/><path d="M${x - 18} ${y + 2 - fill} L${x + 18} ${y + 2 - fill} C${x + 16} ${y + 14} ${x + 8} ${y + 19} ${x} ${y + 20} C${x - 8} ${y + 19} ${x - 16} ${y + 14} ${x - 18} ${y + 2 - fill}Z" fill="${C.urine}" opacity=".7"/>${tube(`M${x} ${y + 24} L${x} ${y + 36}`, C.tube, C.tubeLine, 4)}${extra || ''}`;
    const drops = (x, y) => [0, 1, 2].map(i => `<path d="M${x + i * 7 - 7} ${y + i * 4} q3 5 0 8 q-3 -3 0 -8z" fill="#5fa8d8"/>`).join('');
    const cardB = (x, y, bg, en, fa, sub, art) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="164" height="118" rx="14" fill="${bg}"/></g>${art}${lab(x + 104, y + 34, en, fa, { size: 9.5 })}${f(x + 104, y + 78, sub, { size: 8.2, fill: INK })}`;
    return svg(360, 302, `${title("Problems with bladder control")}
      ${cardB(10, 32, '#fdf1d5', 'stress incontinence', "stress incontinence", "leaking with coughing, laughing or exercise", mini(44, 80, 6, drops(44, 124) + t(44, 50, '💥', { size: 14 })))}
      ${cardB(186, 32, '#fbe3df', 'urge incontinence', "urge incontinence", "sudden urgency before reaching the toilet", mini(220, 80, 10, drops(220, 124) + t(220, 50, '⏱️', { size: 14 })))}
      ${cardB(10, 160, '#e6f2fb', 'urinary retention', "urinary retention", "the bladder is full but does not empty", mini(44, 208, 22, `<path d="M36 234 h16" stroke="#8e2f2a" stroke-width="5"/>`))}
      ${cardB(186, 160, '#efe7fb', 'nocturnal enuresis', "bed-wetting", "unwanted urination during sleep", mini(220, 208, 12, t(220, 178, '🌙', { size: 14 })))}
      ${f(180, 294, "The prefix in- means “not”, and continence means holding urine", { size: 9, fill: MUTED, w: 700 })}`, "incontinence", shadow(sh));
  };

  A['cystocele-art'] = () => {
    const bladderN = `<path d="M70 100 C66 64 136 60 140 96 C142 120 124 136 104 138 C84 138 72 124 70 100Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.6"/>`;
    const bladderC = `<path d="M228 92 C224 58 294 54 298 90 C300 112 290 124 282 136 C276 156 262 166 252 160 C240 152 248 136 236 124 C228 116 228 104 228 92Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.6"/>`;
    const vag = (x, bulge) => `<path d="M${x} 100 C${x + 4} 140 ${x + 2} 180 ${x - 6} 236" stroke="#e7a6b6" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M${x} 100 C${x + 4} 140 ${x + 2} 180 ${x - 6} 236" stroke="#f7cfd9" stroke-width="9" fill="none" stroke-linecap="round"/>${bulge || ''}`;
    return svg(360, 290, `${title("bladder prolapse (cystocele)")}
      <rect x="10" y="32" width="164" height="226" rx="16" fill="#f7f4ee"/><rect x="186" y="32" width="164" height="226" rx="16" fill="#fbe3df"/>
      ${vag(134)}${bladderN}${tube('M98 138 C96 170 90 200 84 234', C.tube, C.tubeLine, 5)}
      ${vag(292)}${bladderC}${tube('M246 158 C244 190 240 210 236 234', C.tube, C.tubeLine, 5)}
      ${lab(92, 50, 'normal', "normal", { size: 10 })}${lab(268, 50, 'cystocele', "bladder sagging against the vaginal wall", { size: 10 })}
      ${pin(100, 90, 40, 168)}${lab(42, 182, 'bladder', "bladder", { size: 9 })}${pin(136, 180, 156, 214)}${lab(146, 228, 'vagina', "birth canal", { size: 9 })}
      ${pin(276, 150, 320, 196)}${lab(316, 210, 'bulge', "bulge", { size: 9 })}
      ${f(180, 280, "cyst/o + -cele; treatment: cystopexy (fixation of the bladder)", { size: 9, fill: INK, w: 700 })}`, "cystocele");
  };

  A['ureter-peristalsis'] = () => {
    const m = nid();
    const wave = `<path d="M160 40 C164 70 156 92 160 118 C164 146 156 170 160 198 C164 222 160 240 162 254" stroke="${C.tubeLine}" stroke-width="18" fill="none" stroke-linecap="round"/><path d="M160 40 C164 70 156 92 160 118 C164 146 156 170 160 198 C164 222 160 240 162 254" stroke="${C.tube}" stroke-width="14" fill="none" stroke-linecap="round"/>`;
    const ring = y => `<ellipse cx="160" cy="${y}" rx="12" ry="4" fill="#b8433c" opacity=".8"/>`;
    return svg(360, 290, `${title("Ureter: peristaltic waves carry urine down")}
      ${wave}${ring(96)}${ring(176)}<ellipse cx="160" cy="136" rx="6" ry="14" fill="${C.urine}" stroke="${C.urineLine}"/>
      <path d="M118 252 C118 236 206 236 206 252 L206 280 L118 280Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.4"/>
      ${arrow(m, 196, 120, 196, 160, '#c0563b', 2.4)}
      ${pin(172, 96, 230, 78)}${lab(276, 72, 'peristalsis', "wave-like contraction of the wall", { size: 9.5 })}
      ${pin(166, 136, 230, 132)}${lab(276, 130, 'urine bolus', "pocket of urine", { size: 9.5, fill: '#a8801f' })}
      ${pin(162, 252, 230, 216)}${lab(276, 204, 'ureteral orifice', "ureteral orifice", { size: 9.5 })}
      ${lab(70, 60, 'ureter', "ureter 25 to 30 cm long", { size: 10 })}
      ${f(76, 150, "every 10 to 30 seconds", { size: 9, fill: INK, w: 800 })}${f(76, 166, "a spurt of urine", { size: 9, fill: INK, w: 800 })}${f(76, 186, "empties into the bladder", { size: 8.6 })}
      ${f(276, 232, "prevents urine flowing back", { size: 8.4, fill: INK })}`, "Peristalsis of the ureter", marker(m, '#c0563b'));
  };

  A['tract-narrowing'] = () => {
    const k = kidney(180, 66, 0.4, {}).svg;
    const tag = (x, y, en, fa, c, a) => lab(x, y, en, fa, { size: 9, anchor: a, fill: c });
    return svg(360, 300, `${title("Narrowing, widening and bulging in the urinary tract")}
      ${tube('M194 76 C206 100 186 120 192 150', C.tube, C.tubeLine, 6)}${tube('M192 150 C186 162 194 176 190 196', C.tube, C.tubeLine, 15)}${tube('M190 196 C192 206 190 210 190 214', C.tube, C.tubeLine, 3)}
      ${k}
      <path d="M150 228 C148 206 230 206 228 228 C230 252 206 264 190 266 C172 264 148 252 150 228Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.6"/><circle cx="190" cy="222" r="9" fill="#f7c9bd" stroke="${C.blLine}"/>
      ${tube('M190 266 L190 284', C.tube, C.tubeLine, 2.6)}
      ${pin(190, 212, 92, 196)}${tag(88, 192, 'ureterostenosis', "narrowing of a ureter", '#b0413e', 'end')}
      ${pin(198, 176, 262, 166)}${tag(266, 160, 'ureterectasis', "widening of the ureter", '#a8801f', 'start')}
      ${pin(194, 222, 262, 230)}${tag(266, 226, 'ureterocele', "bulge of the ureter into the bladder", '#6d4bc3', 'start')}
      ${pin(190, 280, 92, 270)}${tag(88, 266, 'urethrostenosis', "narrowing of the urethra", '#b0413e', 'end')}
      ${pin(210, 246, 262, 280)}${tag(266, 276, 'trigonitis', "inflamed trigone", '#c0563b', 'start')}
      ${f(88, 110, "-stenosis = narrowing", { size: 9, fill: INK, w: 800, anchor: 'end' })}${f(88, 126, "-ectasis = widening", { size: 9, fill: INK, w: 800, anchor: 'end' })}${f(88, 142, "-cele = bulging", { size: 9, fill: INK, w: 800, anchor: 'end' })}`, "Narrowing and Widening");
  };

  /* ================= ur: ادرار و نشانه‌ها ================= */
  const cup = (x, y, w, h, fill, o) => {
    const p = o || {}, g = nid();
    return `<defs>${linear(g, fill, p.fill2 || fill, true)}</defs><path d="M${x} ${y} L${x + w} ${y} L${x + w - 8} ${y + h} L${x + 8} ${y + h}Z" fill="#fff" stroke="#9fb3c2" stroke-width="1.6"/><path d="M${x + 3} ${y + h * (p.level || 0.28)} L${x + w - 3} ${y + h * (p.level || 0.28)} L${x + w - 9} ${y + h - 2} L${x + 9} ${y + h - 2}Z" fill="url(#${g})"${p.cloud ? ' opacity=".85"' : ''}/>${p.cloud ? `<g fill="#fff" opacity=".55">${[0, 1, 2, 3, 4].map(i => `<circle cx="${x + 12 + i * (w - 24) / 4}" cy="${y + h * 0.6 + (i % 2) * 8}" r="3"/>`).join('')}</g>` : ''}<path d="M${x + 6} ${y + 10} L${x + 10} ${y + h - 10}" stroke="#fff" stroke-width="3" opacity=".7"/>`;
  };
  A['urine-composition'] = () => {
    const sh = nid();
    const bar = (x, w, c) => `<rect x="${x}" y="226" width="${w}" height="22" fill="${c}"/>`;
    return svg(360, 300, `${title("What is urine made of?")}
      <g filter="url(#${sh})">${cup(30, 50, 110, 150, '#f8e08a', { fill2: '#eec558' })}</g>
      <rect x="168" y="52" width="180" height="150" rx="14" fill="#fdf6e1"/>
      ${t(180, 76, '95%', { size: 16, w: 900, anchor: 'start', fill: '#2b86c5', sym: true })}${f(336, 76, "water", { size: 11, fill: INK, w: 800, anchor: 'end' })}
      ${t(180, 104, '5%', { size: 16, w: 900, anchor: 'start', fill: '#a8801f', sym: true })}${f(336, 104, "dissolved substances", { size: 11, fill: INK, w: 800, anchor: 'end' })}
      ${f(336, 128, "urea, creatinine, uric acid", { size: 9.5, anchor: 'end', fill: INK })}${f(336, 146, "salts (sodium, potassium), pigment", { size: 9.5, anchor: 'end', fill: INK })}
      ${f(336, 170, "should not contain: sugar, blood, protein", { size: 9, anchor: 'end', fill: '#b0413e', w: 800 })}${f(336, 188, "or pus or bacteria", { size: 9, anchor: 'end', fill: '#b0413e', w: 800 })}
      <rect x="20" y="226" width="320" height="22" rx="6" fill="#d9effa"/>${bar(324, 16, '#e0a526')}${t(170, 241, 'water 95%', { size: 9.5, w: 800, sym: true })}${t(332, 262, '5%', { size: 9, sym: true, w: 800 })}
      ${f(180, 284, "Normal daily volume about 1000 to 2000 mL; straw-yellow and clear", { size: 9, fill: INK, w: 700 })}`, "Composition of urine", shadow(sh));
  };

  A['ua-dipstick'] = () => {
    const pads = [['glucose', 'glycosuria', "sugar", '#9ccc65'], ['ketones', 'ketonuria', "ketones", '#f2a1c0'], ['blood', 'hematuria', "blood", '#e57368'], ['protein', 'proteinuria', "building-block nutrient", '#7fc9b8'],
      ['leukocytes', 'pyuria', "white blood cell", '#c7a3e0'], ['nitrite', 'bacteriuria', "nitrite test", '#f6b26b'], ['pH', '5.0 – 8.0', "acid–base", '#f4d35e'], ['SG', '1.001 – 1.030', "specific gravity", '#8fb5e6']];
    let g = '';
    pads.forEach((p, i) => {
      const y = 44 + i * 30;
      g += `<rect x="40" y="${y}" width="26" height="22" rx="3" fill="${p[3]}" stroke="#9aa5ab"/>${t(80, y + 15, p[0], { size: 10, w: 800, anchor: 'start' })}${f(214, y + 15, p[2], { size: 9.5, fill: INK, anchor: 'end' })}`;
      g += `<path d="M222 ${y + 11} H236" stroke="#c4cdd3" stroke-width="1.2"/>${t(242, y + 15, p[1], { size: 9.5, w: 800, anchor: 'start', fill: i < 6 ? '#b0413e' : '#2b86c5', sym: i >= 6 })}`;
    });
    return svg(360, 300, `${title("The urine dipstick: each square is one test")}
      <rect x="32" y="34" width="42" height="250" rx="6" fill="#f4f6f8" stroke="#c4cdd3"/>
      ${g}
      ${f(298, 290, "A positive square = an -uria word", { size: 9, fill: INK, w: 800 })}`, "Urine dipstick");
  };

  A['urine-colors'] = () => {
    const cols = [['#fbf3c8', 'pale', "dilute"], ['#f6e27a', 'straw', "normal"], ['#eec43e', 'amber', "concentrated"], ['#c98a2a', 'dark', "dehydration"], ['#d9624f', 'red', "blood"], ['#e9dcb5', 'cloudy', "turbid"]];
    let g = '';
    cols.forEach((c, i) => { const x = 14 + i * 56; g += cup(x, 60, 48, 110, c[0], { level: 0.24, cloud: c[1] === 'cloudy' }) + lab(x + 24, 192, c[1], c[2], { size: 9.5 }); });
    return svg(360, 280, `${title("What does urine colour tell you?")}
      ${g}
      <path d="M22 226 H186" stroke="#e0a526" stroke-width="4" stroke-linecap="round"/>${f(104, 246, "The more concentrated, the darker: drink more water", { size: 8.8, fill: INK, w: 700 })}
      ${f(266, 232, "red: hematuria", { size: 9, fill: '#b0413e', w: 800 })}${f(272, 252, "cloudy: pyuria or bacteriuria", { size: 9, fill: '#a8801f', w: 800 })}
      ${f(180, 274, "Brown or black urine is a sign of serious disease", { size: 8.6 })}`, "Urine colour");
  };

  A['output-terms'] = () => {
    const X = v => 168 + v / 4000 * 172;
    const rows = [['anuria', "no urine", 0, 100, '#8e2a26', '< 100 mL'], ['oliguria', "scanty urine", 100, 400, '#d9443a', '< 400 mL'], ['normal', "normal", 1000, 2000, '#3f8a05', '1000 – 2000'], ['polyuria', "excessive urination", 3000, 4000, '#d4a017', '> 3000 mL']];
    let g = '';
    rows.forEach((r, i) => {
      const y = 46 + i * 46;
      g += `<rect x="10" y="${y}" width="340" height="38" rx="10" fill="${r[4]}" opacity=".08"/>${lab(70, y + 16, r[0], r[1], { size: 10, fill: r[4] })}`;
      g += `<rect x="${X(r[2])}" y="${y + 9}" width="${Math.max(4, X(r[3]) - X(r[2]))}" height="20" rx="4" fill="${r[4]}" opacity=".85"/>${i === 3 ? t(X(r[2]) - 6, y + 23, r[5], { size: 8.6, sym: true, anchor: 'end', w: 800 }) : t(X(r[3]) + 6, y + 23, r[5], { size: 8.6, sym: true, anchor: 'start', w: 800 })}`;
    });
    let ticks = '';
    [0, 1000, 2000, 3000, 4000].forEach(v => { ticks += `<path d="M${X(v)} 232 V238" stroke="#5b6b73"/>${t(X(v), 250, String(v), { size: 8.5, sym: true, fill: MUTED })}`; });
    return svg(360, 300, `${title("Urine volume over 24 hours")}
      ${g}<path d="M${X(0)} 232 H${X(4000)}" stroke="#5b6b73" stroke-width="1.4"/>${ticks}${t(110, 250, 'mL / 24 h', { size: 8.6, sym: true, w: 800 })}
      ${f(180, 274, "nocturia means passing a lot of urine at night; the timing matters, not the total volume", { size: 9, fill: INK, w: 700 })}
      ${f(180, 292, "Output below 0.5 mL per kilogram per hour = scanty urine", { size: 8.6 })}`, "Urine volume");
  };

  A['sg-scale'] = () => {
    const sh = nid();
    const cyl = (x, lvl, fl, c) => `<rect x="${x}" y="50" width="70" height="190" rx="8" fill="#fff" stroke="#9fb3c2" stroke-width="1.6"/><rect x="${x + 3}" y="80" width="64" height="157" rx="5" fill="${c}"/><g filter="url(#${sh})"><ellipse cx="${x + 35}" cy="${fl + 70}" rx="13" ry="22" fill="#e8eef2" stroke="#8a96a0"/><rect x="${x + 31}" y="${fl - 6}" width="8" height="58" rx="3" fill="#fff" stroke="#8a96a0"/></g>`;
    return svg(360, 290, `${title("Urine specific gravity with a urinometer")}
      ${cyl(40, 0, 52, '#fbf3c8')}${cyl(160, 0, 70, '#eec43e')}
      ${lab(75, 262, 'dilute • 1.005', "dilute: floats lower", { size: 9.5 })}${lab(195, 262, 'concentrated • 1.030', "concentrated: floats higher", { size: 9.5 })}
      <rect x="252" y="56" width="98" height="176" rx="12" fill="#f7f4ee"/>
      ${t(301, 80, 'water = 1.000', { size: 9.5, w: 800, sym: true })}${t(301, 108, 'urine', { size: 9.5, w: 800 })}${t(301, 124, '1.001 – 1.030', { size: 9.5, w: 800, sym: true, fill: '#3f8a05' })}
      ${f(301, 150, "low: diabetes insipidus", { size: 8.6, fill: INK })}${f(301, 168, "or too much water", { size: 8.6, fill: INK })}${f(301, 194, "high: dehydration", { size: 8.6, fill: INK })}${f(301, 212, "or sugar and protein", { size: 8.6, fill: INK })}
      ${lab(301, 252, 'urinometer', "instrument measuring urine density", { size: 9.5 })}`, "specific gravity", shadow(sh));
  };

  A['electrolytes'] = () => {
    const cell = (x, y, en, fa, c, sub) => `<rect x="${x}" y="${y}" width="128" height="74" rx="12" fill="${c}" opacity=".16"/><rect x="${x}" y="${y}" width="128" height="74" rx="12" fill="none" stroke="${c}"/>${lab(x + 64, y + 26, en, fa, { size: 10, fill: c })}${f(x + 64, y + 62, sub, { size: 8.2, fill: INK })}`;
    return svg(360, 290, `${title("Sodium and potassium in the blood")}
      ${t(140, 52, "hyper- (high)", { size: 9.5, w: 900 })}${t(276, 52, "hypo- (low)", { size: 9.5, w: 900 })}
      ${t(40, 104, 'Na', { size: 18, w: 900, sym: true })}${f(40, 122, "Sodium", { size: 9, fill: INK })}${f(40, 136, 'natr/o', { size: 8.6 })}
      ${t(40, 194, 'K', { size: 18, w: 900, sym: true })}${f(40, 212, "potassium", { size: 9, fill: INK })}${f(40, 226, 'kal/i', { size: 8.6 })}
      ${cell(76, 66, 'hypernatremia', "high sodium", '#d4a017', "dehydration, severe vomiting")}${cell(212, 66, 'hyponatremia', "low sodium", '#2b86c5', "water intoxication, organ failure")}
      ${cell(76, 156, 'hyperkalemia', "high potassium", '#d9443a', "kidney failure; arrhythmia")}${cell(212, 156, 'hypokalemia', "low potassium", '#6d4bc3', "diuretics; muscle weakness")}
      ${f(180, 262, "natrium and kalium are the Latin names for sodium and potassium; hence Na and K", { size: 9, fill: INK, w: 700 })}
      ${f(180, 280, "The suffix -emia means a condition of the blood", { size: 8.6 })}`, "electrolytes");
  };

  A['uremia-art'] = () => {
    const m = nid(), k = kidney(70, 130, 0.62, { fill: '#9c6a66', fill2: '#b98d88' });
    const R = rng(4);
    let dots = '';
    for (let i = 0; i < 26; i++) dots += `<circle cx="${(166 + R() * 120).toFixed(0)}" cy="${(88 + R() * 70).toFixed(0)}" r="${(2.5 + R() * 2).toFixed(1)}" fill="${i % 3 ? '#a8801f' : '#6d4bc3'}" opacity=".8"/>`;
    return svg(360, 290, `${title("When the kidneys fail: uremia")}
      ${k.svg}${t(70, 210, '✕', { size: 16, w: 900, fill: '#d9443a' })}${lab(70, 228, 'renal failure', "kidney failure", { size: 9.5 })}
      ${arrow(m, 112, 122, 146, 122, LINE, 2)}
      <path d="M150 90 C150 70 300 70 300 90 L300 156 C300 176 150 176 150 156Z" fill="#fbe3df" stroke="#d9443a" stroke-width="1.6"/>
      ${dots}
      ${lab(226, 196, 'blood: urea ↑ creatinine ↑', "urea and creatinine high in the blood", { size: 9.5 })}
      ${f(226, 236, "azotemia = nitrogenous waste in the blood", { size: 9, fill: INK, w: 800 })}${f(226, 254, "uremia = its toxic state", { size: 9, fill: INK, w: 800 })}
      ${f(180, 280, "Signs: fatigue, loss of appetite, oedema, anaemia, acidosis", { size: 8.8 })}
      ${t(196, 104, 'BUN', { size: 9, w: 900, fill: '#6d4bc3', sym: true })}${t(262, 150, 'Cr', { size: 9, w: 900, fill: '#a8801f', sym: true })}`, "uremia", marker(m));
  };

  A['clean-catch'] = () => {
    const sh = nid(), m = nid();
    const step = (x, n, ic, fa, sub) => `<g filter="url(#${sh})"><rect x="${x}" y="56" width="78" height="150" rx="14" fill="#fff" stroke="#e5d6a6"/></g><circle cx="${x + 39}" cy="56" r="13" fill="#e0a526"/>${t(x + 39, 61, n, { size: 12, w: 900, fill: '#fff', sym: true })}${t(x + 39, 108, ic, { size: 26 })}${f(x + 39, 150, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 39, 170, sub, { size: 8.4 })}`;
    return svg(360, 280, `${title("Clean midstream urine sample (clean-catch)")}
      ${step(6, '1', '🧼', "washing", "urethral opening")}${step(94, '2', '🚽', "start urinating", "first part into the toilet")}${step(182, '3', '🧪', "mid-stream", "into a sterile cup")}${step(270, '4', '✅', "finish", "the rest into the toilet")}
      ${arrow(m, 86, 132, 92, 132, LINE, 2)}${arrow(m, 174, 132, 180, 132, LINE, 2)}${arrow(m, 262, 132, 268, 132, LINE, 2)}
      ${f(180, 236, "Goal: the least contamination with skin microbes", { size: 9.5, fill: INK, w: 800 })}
      ${f(180, 256, "The abbreviation CC is in capitals; lowercase cc means the patient’s chief complaint", { size: 8.6 })}`, "Clean urine sample", marker(m) + shadow(sh));
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
    return svg(360, 300, `${title("Urinary infection climbs from below")}
      ${tr.svg}${bugs(186, 280, 3)}${bugs(186, 236, 6)}${bugs(172, 166, 3)}${bugs(130, 84, 3)}
      ${curve(m, 'M226 286 C262 250 262 190 222 150 C196 124 176 100 152 90', '#3f8a05', 2.2, true)}
      ${pin(196, 290, 270, 284)}${lab(306, 278, 'urethritis', "inflammation of the urethra", { size: 9.5, fill: '#b0413e' })}
      ${pin(212, 240, 286, 226)}${lab(306, 214, 'cystitis', "bladder inflammation", { size: 9.5, fill: '#b0413e' })}
      ${pin(176, 172, 286, 160)}${lab(306, 150, 'ureteritis', "inflammation of a ureter", { size: 9.5, fill: '#b0413e' })}
      ${pin(P.pelvis[0], P.pelvis[1], 286, 72)}${lab(306, 52, 'pyelonephritis', "infection of the renal pelvis and kidney", { size: 9.5, fill: '#b0413e' })}
      <rect x="10" y="190" width="132" height="98" rx="12" fill="#e7f5dd"/>
      ${f(76, 210, "cystitis: burning, frequency,", { size: 8.6, fill: INK, w: 800 })}${f(76, 226, "urgency", { size: 8.6, fill: INK, w: 800 })}
      ${f(76, 252, "pyelonephritis: fever, chills,", { size: 8.6, fill: '#b0413e', w: 800 })}${f(76, 268, "Flank Pain", { size: 8.6, fill: '#b0413e', w: 800 })}
      ${f(76, 296, "common microbe: E. coli", { size: 8.4 })}`, "urinary infection", marker(m, '#3f8a05'));
  };

  A['stones-sites'] = () => {
    const tr = tract({}), P = tr.P, B = tr.B;
    return svg(360, 300, `${title("Where stones form in the urinary tract")}
      ${tr.svg}${stone(P.calyx[0], P.calyx[1], 6, 2)}${stone(P.pelvis[0] - 2, P.pelvis[1] - 2, 5, 5)}${stone(166, 150, 5.5, 7)}${stone(B.trigone[0] + 6, B.trigone[1] - 10, 6, 9)}${stone(196, 286, 3.6, 11)}
      ${pin(P.calyx[0], P.calyx[1] - 6, 50, 172)}${lab(48, 186, 'nephrolithiasis', "kidney stone", { size: 9.5, fill: '#6f522c' })}
      ${pin(166, 150, 286, 132)}${lab(306, 120, 'ureterolithiasis', "stone in the ureter", { size: 9.5, fill: '#6f522c' })}
      ${pin(B.trigone[0] + 10, B.trigone[1] - 12, 286, 214)}${lab(306, 202, 'cystolithiasis', "bladder stone", { size: 9.5, fill: '#6f522c' })}
      ${pin(198, 288, 286, 274)}${lab(306, 262, 'urethrolithiasis', "stone in the urethra", { size: 9.5, fill: '#6f522c' })}
      <rect x="10" y="216" width="150" height="76" rx="12" fill="#fdf1d5"/>
      ${f(85, 236, "renal colic: severe flank pain", { size: 8.6, fill: INK, w: 800 })}${f(85, 256, "lith/o = stone", { size: 8.6, fill: INK })}${f(85, 276, "calculus, plural: calculi", { size: 8.6, fill: INK })}`, "Stones");
  };

  A['hydronephrosis-art'] = () => {
    const m = nid();
    const kN = kidneySection(86, 96, 0.62, { vessels: false });
    const kH = kidneySection(268, 96, 0.7, { vessels: false, flip: true, pel: '#f6e7b2', pyr: '#cc7a72', extra: `<path d="M-2 -40 C24 -30 28 -10 34 -4 L34 10 C28 16 24 34 -2 42 C10 20 12 -16 -2 -40Z" fill="#f6e7b2" stroke="${C.pelLine}" stroke-width="1.6"/>` });
    return svg(360, 300, `${title("Hydronephrosis: urine builds up behind a blockage")}
      ${tube(`M${kN.P.ureter[0]} ${kN.P.ureter[1]} C${kN.P.ureter[0] + 2} 210 ${kN.P.ureter[0] - 4} 240 ${kN.P.ureter[0] - 6} 274`, C.pel, C.pelLine, 4)}${kN.svg}
      ${tube(`M${kH.P.ureter[0]} ${kH.P.ureter[1]} C${kH.P.ureter[0] - 6} 170 ${kH.P.ureter[0]} 190 ${kH.P.ureter[0] - 2} 204`, C.pel, C.pelLine, 10)}${tube(`M${kH.P.ureter[0] - 2} 204 C${kH.P.ureter[0] - 4} 230 ${kH.P.ureter[0] - 2} 250 ${kH.P.ureter[0] - 2} 274`, C.pel, C.pelLine, 3)}${kH.svg}
      ${stone(kH.P.ureter[0] - 2, 206, 6.5, 4)}
      ${lab(54, 186, 'normal', "normal kidney and ureter", { size: 9.5 })}
      ${pin(kH.P.pelvis[0], kH.P.pelvis[1], 186, 64)}${lab(176, 46, 'hydronephrosis', "swelling of the pelvis and calyces", { size: 9.5, fill: '#b0413e' })}
      ${pin(kH.P.ureter[0] + 4, 170, 316, 178)}${lab(318, 196, 'hydroureter', "swollen ureter", { size: 9, fill: '#b0413e' })}
      ${pin(kH.P.ureter[0] - 6, 208, 196, 224)}${lab(176, 238, 'stone / stricture', "stone or narrowing", { size: 9.5, fill: '#6f522c' })}
      ${f(180, 290, "hydr/o (water) + nephr/o (kidney) + -osis (condition)", { size: 9, fill: INK, w: 700 })}`, "hydronephrosis", marker(m));
  };

  A['glomerulo-art'] = () => {
    const unit = (x, inflamed) => `<circle cx="${x}" cy="118" r="54" fill="${C.tube}" stroke="${C.tubeLine}" stroke-width="2"/><circle cx="${x}" cy="118" r="44" fill="#fff8e6"/>${glom(x, 118, 32, inflamed ? '#c0392b' : C.art, inflamed ? 9 : 4)}${inflamed ? `<circle cx="${x}" cy="118" r="34" fill="#ff6b4a" opacity=".22"/>` : ''}${tube(`M${x + 40} 150 C${x + 52} 176 ${x + 46} 206 ${x + 56} 230`, C.tube, C.tubeLine, 12)}`;
    const blood = (x, y) => [0, 1, 2].map(i => `<ellipse cx="${x + i * 8}" cy="${y + (i % 2) * 6}" rx="4" ry="2.6" fill="#d9443a"/>`).join('');
    const prot = (x, y) => [0, 1, 2].map(i => `<circle cx="${x + i * 8}" cy="${y + (i % 2) * 5}" r="2.6" fill="#6d4bc3"/>`).join('');
    return svg(360, 316, `${title("Glomerulonephritis: the filter breaks down")}
      ${unit(92, false)}${unit(268, true)}
      ${blood(306, 182)}${prot(308, 204)}
      ${lab(92, 252, 'normal glomerulus', "blood cells and protein leak through", { size: 9.5 })}
      ${lab(256, 252, 'glomerulonephritis', "inflammation of the glomeruli and kidney", { size: 9.5, fill: '#b0413e' })}
      ${t(222, 284, 'hematuria', { size: 9, w: 800, fill: '#d9443a' })}${t(256, 284, '+', { size: 9, w: 800 })}${t(294, 284, 'proteinuria', { size: 9, w: 800, fill: '#6d4bc3' })}
      ${f(180, 306, "Often after a streptococcal throat or skin infection; with oedema and high blood pressure", { size: 8.8, fill: INK, w: 700 })}`, "glomerulonephritis");
  };

  A['renal-failure-art'] = () => {
    const sh = nid(), kA = kidney(92, 112, 0.5, {}).svg, kC = kidney(268, 112, 0.42, { fill: '#9c6a66', fill2: '#b98d88' }).svg;
    return svg(360, 300, `${title("Acute and chronic kidney failure")}
      <g filter="url(#${sh})"><rect x="10" y="32" width="164" height="222" rx="16" fill="#fdf1d5"/><rect x="186" y="32" width="164" height="222" rx="16" fill="#fbe3df"/></g>
      ${kA}${t(126, 76, '⚡', { size: 16 })}${kC}
      ${lab(92, 186, 'acute renal failure', "Acute failure: ARF or AKI", { size: 9.5 })}${f(92, 220, "sudden: shock, toxins, injury", { size: 8.6, fill: INK })}${f(92, 238, "often reversible", { size: 8.6, fill: INK })}
      ${lab(268, 186, 'chronic renal failure', "Chronic failure: CRF or CKD", { size: 9.5 })}${f(268, 220, "gradual: diabetes, high blood pressure", { size: 8.6, fill: INK })}${f(268, 238, "loss of nephrons", { size: 8.6, fill: INK })}
      <rect x="40" y="264" width="280" height="30" rx="10" fill="#8e2a26"/>${f(180, 284, "End stage (ESRD): dialysis or kidney transplant", { size: 9.5, fill: '#fff', w: 800 })}`, "kidney failure", shadow(sh));
  };

  A['polycystic-art'] = () => {
    const kN = kidney(86, 140, 0.68, {}).svg;
    const R = rng(13);
    let cysts = '';
    for (let i = 0; i < 26; i++) { const a = R() * Math.PI * 2, r = R() * 0.85; const x = -6 + Math.cos(a) * 34 * r, y = Math.sin(a) * 52 * r; cysts += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(6 + R() * 7).toFixed(1)}" fill="#f6e7c9" stroke="#b88a7a" stroke-width="1.2" opacity=".95"/>`; }
    const kP = `<g transform="translate(260 140) scale(-1 1) scale(1.1)"><path d="${KPATH}" fill="#c87c70" stroke="${C.kidLine}" stroke-width="1.6"/>${cysts}</g>`;
    return svg(360, 280, `${title("polycystic kidney")}
      ${kN}${kP}
      ${lab(86, 228, 'normal kidney', "healthy kidney", { size: 9.5 })}${lab(260, 228, 'polycystic kidney', "many cysts, enlarged kidney", { size: 9.5, fill: '#b0413e' })}
      ${f(180, 268, "Inherited; the cysts gradually replace kidney tissue and lead to failure", { size: 8.8, fill: INK, w: 700 })}
      ${f(180, 46, "poly- (many) + cyst/o (sac) + -ic", { size: 9, fill: MUTED, w: 700 })}`, "polycystic kidney");
  };

  A['kidney-tumors'] = () => {
    const sh = nid(), k1 = kidney(92, 116, 0.56, {}), k2 = kidney(268, 116, 0.56, {});
    const mass = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#f2e3c6" stroke="#a8801f" stroke-width="1.6"/><circle cx="${x - r / 3}" cy="${y - r / 3}" r="${r / 3}" fill="#fff" opacity=".4"/>`;
    return svg(360, 300, `${title("Tumours of the kidney and bladder")}
      <g filter="url(#${sh})"><rect x="10" y="32" width="164" height="196" rx="16" fill="#e6f2fb"/><rect x="186" y="32" width="164" height="196" rx="16" fill="#fbe3df"/></g>
      ${k1.svg}${mass(84, 98, 16)}${k2.svg}${mass(262, 132, 12)}
      ${lab(92, 186, 'Wilms tumor', "nephroblastoma: children under 5", { size: 9.5 })}
      ${lab(268, 186, 'renal cell carcinoma', "renal cell carcinoma: adults", { size: 9.5 })}
      <rect x="10" y="238" width="340" height="54" rx="14" fill="#fdf1d5"/>
      ${lab(90, 258, 'bladder cancer', "bladder cancer", { size: 9.5 })}${f(254, 258, "key sign: painless blood in the urine", { size: 9, fill: INK, w: 800 })}${f(254, 278, "Smoking is the most important risk factor", { size: 8.6 })}`, "Tumours", shadow(sh));
  };

  A['congenital-art'] = () => {
    const sh = nid();
    const shoe = `<path d="M44 76 C44 52 74 52 76 76 L80 128 C84 144 108 148 112 128 L116 76 C118 52 148 52 148 76 L144 132 C140 168 52 168 48 132Z" fill="${C.kid}" stroke="${C.kidLine}" stroke-width="1.6"/>`;
    const hypo = kidney(208, 108, 0.3, {}).svg + kidney(250, 104, 0.5, { flip: true }).svg;
    const ptosis = kidney(308, 152, 0.36, {}).svg;
    return svg(360, 280, `${title("Kidney anomalies and displacements")}
      <g filter="url(#${sh})">${shoe}</g>
      ${hypo}
      <path d="M284 70 L332 70" stroke="#5b6b73" stroke-dasharray="4 3"/>${f(308, 62, "normal position", { size: 8 })}${ptosis}<path d="M308 80 L308 120" stroke="#c0563b" stroke-width="2" stroke-dasharray="4 3"/>
      ${lab(96, 192, 'horseshoe kidney', "two kidneys joined at the lower ends", { size: 9.5 })}
      ${lab(222, 192, 'renal hypoplasia', "small, underdeveloped kidney", { size: 9.5 })}
      ${lab(312, 222, 'nephroptosis', "drooping of the kidney", { size: 9 })}
      ${f(180, 260, "hypo- (under) + -plasia (growth); nephr/o + -ptosis (drooping)", { size: 9, fill: INK, w: 700 })}`, "Kidney anomalies", shadow(sh));
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
    return svg(360, 296, `${title("Imaging the urinary system")}
      ${cardI(8, 32, '#f4f6f8', 'KUB', "plain abdominal X-ray", ["no contrast", "shows stones"], {})}
      ${cardI(184, 32, '#e6f2fb', 'IVP / IVU', "intravenous pyelography", ["contrast into a vein", "the kidney excretes it"], { k: 1, u: 1, b: 1 }, arrow(m, 196, 140, 210, 120, '#e0a526', 2))}
      ${cardI(8, 166, '#fdf1d5', 'RP', "retrograde pyelography", ["contrast from below", "up through a cystoscope"], { k: 1, u: 1 }, arrow(m, 48, 276, 48, 240, '#e0a526', 2))}
      ${cardI(184, 166, '#fbe3df', 'VCUG', "bladder and urethra X-ray", ["contrast in the bladder", "X-ray while voiding"], { b: 1, r: 1 })}`, "Imaging", shadow(sh) + marker(m, '#e0a526'));
  };

  A['cystoscopy-art'] = () => {
    const b = bladder(150, 130, 0.95, { noUreters: true });
    return svg(360, 290, `${title("Cystoscopy: looking inside the bladder")}
      ${b.svg}
      <path d="M150 140 L150 268" stroke="#4d5b66" stroke-width="7" stroke-linecap="round"/><path d="M150 140 L150 268" stroke="#9aa9b3" stroke-width="3.6" stroke-linecap="round"/>
      <path d="M150 142 L118 104 M150 142 L182 104" stroke="#fff5b0" stroke-width="16" stroke-linecap="round" opacity=".55"/>
      <rect x="138" y="262" width="24" height="16" rx="4" fill="#3a4a56"/><circle cx="150" cy="282" r="7" fill="#2b2b2b" stroke="#9aa9b3" stroke-width="2"/>
      <path d="M162 270 C200 270 214 256 240 256" stroke="#e8a33a" stroke-width="2.6" fill="none"/>
      ${pin(150, 200, 228, 196)}${lab(286, 190, 'cystoscope', "instrument for viewing the bladder", { size: 9.5 })}
      ${pin(240, 256, 270, 240)}${lab(304, 234, 'light cord', "light cable", { size: 9 })}
      ${pin(118, 112, 52, 86)}${lab(46, 66, 'bladder lining', "bladder wall", { size: 9.5 })}
      ${pin(146, 230, 60, 230)}${lab(46, 218, 'urethra', "urethra", { size: 9.5 })}
      <rect x="226" y="60" width="126" height="100" rx="12" fill="#fdf1d5"/>${f(289, 82, "Uses:", { size: 9, fill: INK, w: 800 })}${f(289, 102, "seeing tumours and inflammation", { size: 8.6, fill: INK })}${f(289, 120, "taking a sample (biopsy)", { size: 8.6, fill: INK })}${f(289, 138, "removing stones or polyps", { size: 8.6, fill: INK })}`, "cystoscopy");
  };

  A['catheter-art'] = () => {
    const b = bladder(120, 132, 0.9, { urine: 10, noUreters: true });
    return svg(360, 290, `${title("Catheterization with a Foley catheter")}
      ${b.svg}
      <path d="M120 130 L120 250 C120 270 150 274 190 268 L262 252" stroke="#3f8a8a" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="120" cy="140" r="11" fill="#bfe3e8" stroke="#3f8a8a" stroke-width="2"/><circle cx="120" cy="124" r="3" fill="#3f8a8a"/>
      <path d="M262 186 L332 186 L338 262 C338 272 330 276 322 276 L276 276 C268 276 260 272 260 262Z" fill="#fff" stroke="#9fb3c2" stroke-width="1.6"/><path d="M262 224 L336 224 L338 262 C338 272 330 276 322 276 L276 276 C268 276 260 272 260 262Z" fill="${C.urine}" opacity=".75"/>
      ${pin(110, 140, 40, 70)}${lab(46, 50, 'balloon', "retaining balloon", { size: 9.5 })}
      ${pin(120, 124, 196, 72)}${lab(232, 52, 'drainage eyes', "drainage holes", { size: 9.5 })}
      ${pin(124, 220, 196, 200)}${lab(214, 160, 'Foley catheter', "Foley catheter (indwelling)", { size: 9.5 })}
      ${pin(300, 230, 300, 172)}${lab(300, 152, 'drainage bag', "urine bag", { size: 9.5 })}
      ${f(60, 282, 'catheterization = cath', { size: 8.6, fill: INK, w: 800 })}`, "Foley catheter");
  };

  A['hemodialysis-art'] = () => {
    const m = nid(), sh = nid();
    return svg(360, 300, `${title("Haemodialysis: the artificial kidney")}
      <g filter="url(#${sh})"><rect x="16" y="64" width="110" height="34" rx="16" fill="${C.skin}" stroke="${C.skinLine}"/></g>
      ${f(62, 176, "patient’s arm (vascular access)", { size: 8.6, fill: INK })}
      ${curve(m, 'M90 72 C120 40 170 40 196 70', C.art, 3)}${curve(m, 'M196 140 C170 170 120 150 96 96', C.vein, 3)}
      <g filter="url(#${sh})"><rect x="184" y="70" width="40" height="72" rx="10" fill="#eef2f5" stroke="#8a96a0" stroke-width="1.6"/></g>${[0, 1, 2, 3, 4].map(i => `<path d="M${190 + i * 7} 76 V136" stroke="#d9443a" stroke-width="2" opacity=".7"/>`).join('')}
      ${lab(204, 162, 'dialyzer', "filter (artificial kidney)", { size: 9.5 })}
      ${curve(m, 'M300 132 C266 132 248 118 228 112', '#2b86c5', 2, true)}${curve(m, 'M228 96 C248 90 266 76 300 76', '#a8801f', 2, true)}
      ${f(310, 150, "fresh dialysate", { size: 8.4, fill: '#2b86c5', w: 800 })}${f(310, 66, "dialysate with wastes", { size: 8.4, fill: '#a8801f', w: 800 })}
      <rect x="20" y="194" width="320" height="92" rx="14" fill="#f7f4ee"/>
      <rect x="40" y="206" width="120" height="66" rx="8" fill="#fbe3df"/><rect x="200" y="206" width="120" height="66" rx="8" fill="#e6f2fb"/><path d="M180 202 V276" stroke="#5b6b73" stroke-width="2" stroke-dasharray="3 3"/>
      ${f(100, 222, "blood", { size: 9, fill: INK, w: 800 })}${f(260, 222, "dialysate", { size: 9, fill: INK, w: 800 })}
      ${arrow(m, 130, 246, 222, 246, '#a8801f', 2)}${t(100, 250, 'urea, K⁺', { size: 9, w: 800, sym: true })}${f(180, 290, "Semipermeable membrane: wastes move from the blood into the dialysis fluid", { size: 8.4, fill: INK })}`, "filtering the blood by machine", marker(m) + shadow(sh));
  };

  A['pd-art'] = () => {
    const m = nid();
    return svg(360, 290, `${title("Peritoneal dialysis: the peritoneum is the filter")}
      <path d="M110 60 C70 70 64 130 70 180 C76 236 100 262 150 262 C200 262 224 236 230 180 C236 130 230 70 190 60Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.6"/>
      <path d="M96 120 C96 96 204 96 204 120 L204 196 C204 220 96 220 96 196Z" fill="#d9effa" stroke="#3b6fd4" stroke-width="1.6" stroke-dasharray="5 3"/>
      ${[0, 1, 2, 3, 4, 5].map(i => `<ellipse cx="${118 + (i % 3) * 32}" cy="${136 + Math.floor(i / 3) * 40}" rx="14" ry="10" fill="#f6c9b8" stroke="#d99a86"/>`).join('')}
      <path d="M200 170 C230 170 250 150 262 120 L274 70" stroke="#5b6b73" stroke-width="3" fill="none"/>
      <rect x="258" y="30" width="44" height="40" rx="8" fill="#eaf6fd" stroke="#6db4d6"/><rect x="292" y="222" width="52" height="44" rx="8" fill="#f6e7b2" stroke="#c9a64a"/>
      <path d="M262 120 C290 150 312 190 318 222" stroke="#5b6b73" stroke-width="3" fill="none" stroke-dasharray="6 3"/>
      ${arrow(m, 282, 84, 272, 110, '#2b86c5', 2)}${arrow(m, 296, 170, 310, 198, '#a8801f', 2)}
      ${f(250, 44, "fresh fluid", { size: 8.6, fill: '#2b86c5', w: 800, anchor: 'end' })}${f(286, 248, "fluid with wastes", { size: 8.6, fill: '#a8801f', w: 800, anchor: 'end' })}
      ${pin(150, 210, 60, 236)}${lab(52, 252, 'peritoneal cavity', "Peritoneal cavity", { size: 9.5 })}
      ${pin(240, 160, 330, 140)}${lab(320, 120, 'catheter', "Catheter", { size: 9.5 })}
      ${f(150, 284, "CAPD: several times a day, walking around; CCPD: at night with a machine", { size: 8.6, fill: INK, w: 700 })}`, "peritoneal dialysis", marker(m));
  };

  A['eswl-art'] = () => {
    const k = kidneySection(150, 100, 0.85, { vessels: false });
    let waves = '';
    for (let i = 0; i < 5; i++) waves += `<path d="M${118 - i * 10} ${232 - i * 12} Q150 ${212 - i * 22} ${182 + i * 10} ${232 - i * 12}" stroke="#7cc4ef" stroke-width="2.4" fill="none" opacity="${1 - i * 0.15}"/>`;
    return svg(360, 300, `${title("Extracorporeal shock wave lithotripsy (ESWL)")}
      <path d="M40 186 C80 176 220 176 260 186" stroke="${C.skinLine}" stroke-width="2" fill="none" stroke-dasharray="6 4"/>${f(30, 176, "skin", { size: 8.4, anchor: 'start' })}
      ${k.svg}${stone(k.P.pelvis[0] - 4, k.P.pelvis[1], 7, 3)}
      ${waves}<path d="M110 250 L190 250 L180 276 L120 276Z" fill="#8a96a0" stroke="#5b6b73"/>
      ${pin(150, 268, 238, 262)}${lab(290, 256, 'shock wave generator', "shock wave generator", { size: 9 })}
      ${pin(k.P.pelvis[0] - 4, k.P.pelvis[1] - 6, 260, 64)}${lab(298, 50, 'stone', "stone", { size: 9.5, fill: '#6f522c' })}
      ${f(300, 112, "tiny stone fragments", { size: 8.6, fill: INK, w: 800 })}${f(300, 128, "passed in the urine", { size: 8.6, fill: INK, w: 800 })}
      ${f(300, 168, "extra- (outside)", { size: 8.6 })}${f(300, 184, "corpor/o (body)", { size: 8.6 })}${f(300, 200, 'lith/o + ‎-tripsy‎', { size: 8.6 })}`, 'ESWL');
  };

  A['transplant-art'] = () => {
    const kL = kidney(118, 80, 0.32, { fill: '#9c8a88', fill2: '#b9a9a6' }), kR = kidney(242, 80, 0.32, { flip: true, fill: '#9c8a88', fill2: '#b9a9a6' });
    const kNew = kidney(104, 192, 0.42, { flip: true });
    return svg(360, 300, `${title("kidney transplant")}
      ${tube('M180 40 L180 150 C180 170 160 186 140 196', '#e5675c', C.artLine, 7)}${tube('M180 150 C180 170 200 186 224 200', '#e5675c', C.artLine, 7)}
      ${kL.svg}${kR.svg}
      ${tube(`M${kNew.P.hilum[0]} ${kNew.P.hilum[1]} C140 196 140 200 150 196`, C.art, C.artLine, 3)}
      ${kNew.svg}
      <path d="M150 244 C148 226 212 226 210 244 C212 262 196 272 180 274 C164 272 148 262 150 244Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.6"/>
      ${tube(`M${kNew.P.ureter[0]} ${kNew.P.ureter[1] - 20} C120 236 140 244 156 244`, C.tube, C.tubeLine, 3.4)}
      ${pin(kL.P.lateral[0] + 6, kL.P.lateral[1], 46, 70)}${lab(46, 52, 'native kidneys', "diseased kidneys (left in place)", { size: 9 })}
      ${pin(kNew.P.lateral[0] - 4, kNew.P.lateral[1], 34, 214)}${lab(40, 230, 'donor kidney', "donor kidney in the pelvis", { size: 9.5, fill: '#b0413e' })}
      ${pin(146, 194, 268, 180)}${lab(300, 166, 'iliac vessels', "iliac blood vessels", { size: 9 })}
      ${pin(208, 252, 268, 250)}${lab(302, 238, 'bladder', "bladder", { size: 9 })}
      ${f(180, 292, "A person can live a normal life with one healthy kidney", { size: 8.8, fill: INK, w: 700 })}`, "kidney transplant");
  };

  A['surgery-suffixes'] = () => {
    const items = [['-ectomy', "removal", 'nephrectomy', '#b0413e'], ['-tomy', "incision", 'cystotomy', '#c0563b'], ['-stomy', "new opening", 'nephrostomy', '#a8801f'], ['-pexy', "surgical fixation", 'nephropexy', '#3f8a05'],
      ['-plasty', "repair", 'pyeloplasty', '#2b86c5'], ['-rrhaphy', "stitch", 'cystorrhaphy', '#6d4bc3'], ['-lithotomy', "removing a stone", 'nephrolithotomy', '#6f522c'], ['-tripsy', "crushing", 'lithotripsy', '#17a398']];
    let g = '';
    items.forEach((it, i) => {
      const x = 10 + (i % 2) * 174, y = 32 + Math.floor(i / 2) * 62;
      g += `<rect x="${x}" y="${y}" width="166" height="54" rx="12" fill="${it[3]}" opacity=".1"/><rect x="${x}" y="${y}" width="6" height="54" rx="3" fill="${it[3]}"/>`;
      g += `${t(x + 18, y + 22, it[0], { size: 11, w: 900, anchor: 'start', fill: it[3] })}${f(x + 156, y + 22, it[1], { size: 9.5, fill: INK, w: 800, anchor: 'end' })}${t(x + 156, y + 44, it[2], { size: 9, anchor: 'end', fill: MUTED })}`;
    });
    return svg(360, 290, `${title("Surgical suffixes on the kidney and bladder")}${g}`, "Surgical suffixes");
  };

  A['stent-conduit'] = () => {
    const sh = nid(), k = kidneySection(80, 82, 0.5, { vessels: false });
    return svg(360, 300, `${title("Ureteral stent and ileal conduit")}
      <g filter="url(#${sh})"><rect x="8" y="32" width="164" height="232" rx="16" fill="#fdf1d5"/><rect x="188" y="32" width="164" height="232" rx="16" fill="#e6f2fb"/></g>
      ${tube(`M${k.P.ureter[0]} ${k.P.ureter[1]} C${k.P.ureter[0] + 2} 150 104 170 104 196`, C.pel, C.pelLine, 7)}${k.svg}
      <path d="M78 80 C70 78 70 90 78 88 L94 90 C${k.P.ureter[0] + 2} 120 ${k.P.ureter[0] - 2} 160 104 198 C96 206 110 212 112 202" stroke="#3b6fd4" stroke-width="2.2" fill="none"/>
      <path d="M80 214 C78 196 130 196 128 214 C130 230 116 238 104 240 C92 238 78 230 80 214Z" fill="${C.bl}" stroke="${C.blLine}" stroke-width="1.4"/>
      ${lab(90, 252, 'ureteral stent', "tube from kidney to bladder", { size: 9.5, fill: '#24479a' })}
      ${tube('M232 70 C236 110 250 140 262 160', C.tube, C.tubeLine, 4)}${tube('M312 70 C308 110 290 140 278 160', C.tube, C.tubeLine, 4)}
      <path d="M244 160 C244 150 300 150 300 160 L300 178 C300 188 244 188 244 178Z" fill="#f6c9b8" stroke="#d99a86" stroke-width="1.6"/>
      <circle cx="320" cy="200" r="10" fill="#e5675c" stroke="#b0413e"/><path d="M300 172 C312 176 316 186 318 192" stroke="#d99a86" stroke-width="6" fill="none"/>
      <rect x="306" y="210" width="30" height="34" rx="8" fill="#f6e7b2" stroke="#c9a64a"/>
      ${pin(272, 168, 220, 210)}${lab(232, 222, 'ileum segment', "a piece of small intestine", { size: 9 })}
      ${f(326, 258, "urine bag", { size: 8.4, fill: INK, anchor: 'end' })}
      ${lab(270, 50, 'ileal conduit', "when the bladder has been removed", { size: 9.5, fill: '#24479a' })}`, "Stent and ileal conduit", shadow(sh));
  };

  A['egfr-gauge'] = () => {
    const st = [['G1', '≥ 90', '#3f8a05', "normal"], ['G2', '60–89', '#7aa70a', "mild"], ['G3a', '45–59', '#d4a017', "mild to moderate"], ['G3b', '30–44', '#e2683c', "moderate to severe"], ['G4', '15–29', '#d9443a', "severe"], ['G5', '< 15', '#8e2a26', "failure"]];
    let g = '';
    st.forEach((s, i) => {
      const x = 14 + i * 56;
      g += `<rect x="${x}" y="70" width="52" height="${96 - i * 12}" rx="8" fill="${s[2]}" transform="translate(0 ${i * 12})"/>${t(x + 26, 190, s[0], { size: 11, w: 900, sym: true })}${t(x + 26, 206, s[1], { size: 9, sym: true, fill: MUTED, w: 800 })}${f(x + 26, 224, s[3], { size: 8.4, fill: INK })}`;
    });
    return svg(360, 280, `${title("Stages of chronic kidney disease by eGFR")}
      ${g}
      ${t(180, 54, 'eGFR (mL/min/1.73 m²)', { size: 9.5, sym: true, w: 800 })}
      ${f(180, 252, "eGFR below 60 for more than three months = chronic kidney disease (CKD)", { size: 9, fill: INK, w: 800 })}${f(180, 272, "G5 = end stage (ESRD): dialysis or transplant", { size: 8.8 })}`, "CKD stages");
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
    id: 'lx', sym: 'Lx', name: "Language of the Kidney", short: "Language of the Kidney", sub: "The organs of the urinary system, urologists and nephrologists, and building words from roots, prefixes and suffixes",
    color: '#B0413E', dark: '#7E2A28', light: '#FBE9E7',
    levels: ["The system and its specialists", "Roots of the kidney and urinary tract", "Prefixes, suffixes and traps"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'lx1', title: "urinary system", icon: '🫘', items: [
          L("Four organs", `${fig('system-overview', [], "urinary system")}The ${e('<b>urinary system</b>')} has four parts: the ${e('<b>kidney</b>')} (two), the ${e('<b>ureter</b>')} (two), the ${e('<b>urinary bladder</b>')} (one) and the ${e('<b>urethra</b>')} (one). Its main job is removing urea, the waste product of protein metabolism, from the blood.`),
          L("Route of urine", `${fig('urine-flow', [], "From the kidney to the outside")}${fig('urinary-organs', ["Organs of the urinary system"], "The organs and their jobs")}The kidney makes urine, the ureter carries it to the bladder, the bladder stores it and the urethra lets it out.${memo("ureter has two e’s and there are two; urethra has one e and there is one.")}`),
          M("Which organ makes urine?", ['kidney', 'ureter', 'urinary bladder', 'urethra'], "The kidney filters the blood and makes urine.", null, F('urine-flow', [])),
          M("The tube that carries urine from the bladder to the outside is the…", ['urethra', 'ureter', 'renal pelvis', 'calyx'], "There is one urethra, and it carries urine out."),
          T("Every healthy person has two ureters and one urethra.", true, "Two ureters and one urethra.", F('system-overview', [])),
          O("Put the route of urine in order, from formation to exit", ['kidney', 'ureter', 'urinary bladder', 'urethra'], "Kidney, ureter, bladder, urethra."),
          P("Match each organ to its job", [['kidney', "filter blood and make urine"], ['ureter', "carry urine to the bladder"], ['urinary bladder', "stores urine"], ['urethra', "lets urine out"]], "The organs’ jobs."),
          B("The main waste product the kidney removes from the blood is ___.", ['urea', 'glucose', 'albumin'], "urea is made in the liver from protein metabolism."),
          S("Spell the term for the tube carrying urine out of the body", 'urethra', "urethr/o; one e.", 'ure…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: "Urologist or nephrologist?", icon: '👩‍⚕️', items: [
          L("Two specialists", `${fig('specialists', [], "Two specialists")}${tbl([["specialist", "Job"], [e('urologist'), "surgeon of the male and female urinary tract and the male reproductive system: stones, bladder, prostate"], [e('nephrologist'), "internal medicine kidney specialist: kidney failure, dialysis and transplant"], [e('urogynecologist'), "urinary problems related to the female reproductive system"]])}`),
          L("genital and urinary", `In men the urethra carries both urine and semen, which is why this system is sometimes called ${e('<b>genitourinary (GU)</b>')}.${wb('genit/o', 'urin/o', '-ary')} → urinary and genital${pearl("In the textbook’s applied scenario, Mrs Betty Garble, aged 46, who has had five children, has trouble controlling her urine, and her doctor has referred her to a urologist.")}${memo("nephr means kidney, so a nephrologist is a kidney doctor. ur means urine; a urologist is a urinary tract doctor.")}`),
          M("Which specialist mainly looks after a dialysis patient?", ['nephrologist', 'urologist', 'cardiologist', 'neurologist'], "nephr/o means kidney.", null, F('specialists', [])),
          M("Surgery for bladder stones and the prostate is the work of which specialist?", ['urologist', 'nephrologist', 'dermatologist', 'radiologist'], "A urologist is a urinary tract surgeon."),
          T("A urologist also treats diseases of the male reproductive system.", true, "Because the male urethra is shared."),
          W("Build the term that means “kidney specialist”", ['nephr/o', '-logist'], ['cyst/o', '-itis', 'ur/o'], 'nephrologist.'),
          P("Match each term to its meaning", [['urology', "surgical specialty of the urinary tract"], ['nephrology', "study of the kidney"], ['genitourinary', "genital and urinary"], ['urologist', "urinary tract specialist"]], "The specialties."),
          B("The abbreviation GU means ___.", ['genitourinary', 'gastrourinary', 'glomerular unit'], 'genit/o + urin/o + ‎-ary‎.'),
          S("Spell the term for a kidney specialist", 'nephrologist', 'nephr/o + ‎-logist‎.', 'neph…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: "The anatomy of a word", icon: '🧩', items: [
          L("Word puzzle", `${fig('wordparts', [], "root + root + suffix")}Every word is built from pieces:<br>• <b>root</b>: the main meaning; e.g. ${e('nephr')} means kidney<br>• <b>prefix</b>: at the start of the word; e.g. ${e('poly-')} means many<br>• <b>suffix</b>: at the end of the word; e.g. ${e('-itis')} means inflammation<br>• <b>combining vowel</b> (usually ${e('o')}): ${e('nephr/o/lith')}`),
          L("The golden rule", `Start the meaning from the <b>suffix</b>, then read the roots from the start:<br>${wb('pyel/o', 'nephr/o', '-itis')} → “inflammation of the renal pelvis and kidney”<br>${wb('cyst/o', '-scopy')} → “looking inside the bladder”<br>${wb('nephr/o', '-megaly')} → “enlargement of the kidney”${memo("If the suffix starts with a vowel, the combining vowel drops: nephr + -itis becomes nephritis, not nephroitis.")}`),
          M(`In ${e('<b>cystoscopy</b>')}, which part is the suffix?`, ['-scopy', 'cyst/o', 'o', '-copy'], "-scopy means viewing with an instrument.", null, F('wordparts', [])),
          M(`${e('<b>nephritis</b>')} means…`, ["kidney inflammation", "kidney stone", "enlarged kidney", "drooping of the kidney"], 'nephr/o + ‎-itis‎.'),
          T("The correct spelling of “inflammation of the kidney” is nephroitis.", false, "The combining vowel drops before -itis: nephritis."),
          W("Build the term that means “inflammation of the bladder”", ['cyst/o', '-itis'], ['nephr/o', '-lith', 'poly-'], 'cystitis.'),
          P("Match each piece to its type", [['poly-', "prefix"], ['pyel/o', "root"], ['-uria', "suffix"], ['o', "combining vowel"]], "The word parts."),
          B("“Enlargement of the kidney” is ___.", ['nephromegaly', 'nephrolith', 'nephroptosis'], 'nephr/o + ‎-megaly‎.'),
          S("Spell the term for inflammation of the kidney", 'nephritis', "nephr + -itis; no combining vowel.", 'neph…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'lx4', title: "Kidney roots", icon: '🫘', items: [
          L("The root map", `${fig('root-map', [], "The root map")}${tbl([["root", "Meaning"], [e('nephr/o, ren/o'), "kidney"], [e('glomerul/o'), "kidney capillary tuft (glomerulus)"], [e('pyel/o'), "renal pelvis"], [e('cali/o, calic/o'), "collecting cup"], [e('cortic/o'), "cortex"], [e('medull/o'), "brain"]])}`),
          L("Two roots for the kidney", `${fig('kidney-section', ["Labelled section of the kidney"], "Structure of the kidney")}${e('nephr/o')} is Greek and appears mostly in the names of diseases and operations: ${e('nephritis, nephrectomy')}. ${e('ren/o')} is Latin and appears mostly in adjectives: ${e('renal artery')}.${memo("pyel/o comes from the Greek pyelos, “basin”; the renal pelvis collects urine like a basin.")}`),
          M("Which root means “renal pelvis”?", ['pyel/o', 'py/o', 'ren/o', 'cyst/o'], "pyel/o; not to be confused with py/o, meaning pus.", null, F('root-map', [])),
          M("The root ren/o means…", ["kidney", "bladder", "urine", "stone"], "renal = relating to the kidney."),
          T("nephr/o and ren/o both mean kidney.", true, "Greek and Latin.", F('kidney-section', [])),
          W("Build a word meaning “inflammation of the glomeruli”", ['glomerul/o', '-itis'], ['pyel/o', '-ectomy', 'ren/o'], 'glomerulitis.'),
          P("Match each root to the part of the kidney", [['pyel/o', "renal pelvis"], ['calic/o', "calyx"], ['glomerul/o', "kidney capillary tuft (glomerulus)"], ['cortic/o', "cortex"]], "The roots."),
          B("The adjective meaning “relating to the kidney” is ___.", ['renal', 'vesical', 'urethral'], 'ren/o + ‎-al‎.'),
          S("Spell the term for inflammation of the renal pelvis", 'pyelitis', 'pyel/o + ‎-itis‎.', 'pye…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: "Roots of the urinary tract", icon: '💧', items: [
          L("From the ureter to the opening", `${tbl([["root", "Meaning"], [e('ureter/o'), "ureter"], [e('cyst/o, vesic/o'), "bladder"], [e('trigon/o'), "trigone"], [e('urethr/o'), "urethra"], [e('meat/o'), "opening"], [e('ur/o, urin/o'), "urine, urinary tract"]])}`),
          L("Two roots for the bladder", `${e('cyst/o')} is Greek and ${e('vesic/o')} Latin; both mean bladder.<br>${wb('cyst/o', '-cele')} → hernia of the bladder<br>${wb('intra-', 'vesic/o', '-al')} → within the bladder${memo("cyst/o means any sac; cystic is used for the bladder, the gallbladder and a cyst. Work out which from the sentence.")}`),
          M("Which root means “urethra”?", ['urethr/o', 'ureter/o', 'uter/o', 'ur/o'], "urethr/o; ureter/o is the ureter."),
          M("The root vesic/o means…", ["bladder", "vein", "kidney", "blister"], "vesical = relating to the bladder."),
          T("meat/o means opening; the urinary meatus is the outer opening of the urethra.", true, 'meatus.'),
          W("Build a word meaning “stone in the ureter”", ['ureter/o', '-lith'], ['urethr/o', '-itis', 'cyst/o'], 'ureterolith.'),
          P("Match each root to its organ", [['cyst/o', "bladder"], ['ureter/o', "ureter"], ['urethr/o', "urethra"], ['trigon/o', "trigone"]], "Roots of the urinary tract."),
          B("An incision of the urethral opening to widen it is ___.", ['meatotomy', 'cystotomy', 'nephrotomy'], 'meat/o + ‎-tomy‎.'),
          S("Spell the term for inflammation of the bladder", 'cystitis', 'cyst/o + ‎-itis‎.', 'cys…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: "Adjectives and positions", icon: '📍', items: [
          L("Urinary adjectives", `${tbl([["Noun", "Adjective"], [e('kidney'), e('renal, nephric')], [e('bladder'), e('cystic, vesical')], [e('ureter'), e('ureteral')], [e('urethra'), e('urethral')], [e('urine'), e('urinary')], [e('meatus'), e('meatal')], [e('renal pelvis'), e('pyelitic')]])}`),
          L("Position prefixes", `${fig('position-prefixes', [], "Where on the kidney?")}• ${e('<b>suprarenal</b>')}: above the kidney; the adrenal gland<br>• ${e('<b>perirenal</b>')}: around the kidney<br>• ${e('<b>intrarenal</b>')}: inside the kidney<br>• ${e('<b>interrenal</b>')}: between the kidneys<br>• ${e('<b>transurethral</b>')}: through the urethra${memo("supra is above, peri is around, intra is inside and inter is between two things; trans means passing through.")}`),
          M("What is the gland on top of the kidney called?", ['suprarenal gland', 'perirenal gland', 'intrarenal gland', 'postrenal gland'], "supra- means above.", null, F('position-prefixes', [])),
          M(`${e('<b>intravesical</b>')} means…`, ["within the bladder", "outside the bladder", "between the kidneys", "through the urethra"], 'intra- + vesic/o + ‎-al‎.'),
          T("The adjective ureteral relates to the urethra.", false, "ureteral relates to the ureter; the adjective for the urethra is urethral."),
          W("Build a word meaning “around the kidney”", ['peri-', 'ren/o', '-al'], ['supra-', 'cyst/o', '-itis'], 'perirenal.'),
          P("Match each prefix to its meaning", [['supra-', "above"], ['peri-', "around"], ['inter-', "between"], ['trans-', "through"]], "Position prefixes."),
          B("A ___ operation is done through the urethra.", ['transurethral', 'suprarenal', 'perirenal'], 'trans- + urethr/o + ‎-al‎.'),
          S("Spell the Latin adjective meaning “pertaining to the kidney”", 'renal', 'ren/o + ‎-al‎.', 're…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'lx7', title: "Common prefixes", icon: '⬅️', items: [
          L("Prefixes", `${tbl([["prefix", "Meaning", "Example"], [e('a-, an-'), "without", e('anuria')], [e('dys-'), "painful, difficult", e('dysuria')], [e('poly-'), "many", e('polyuria')], [e('hyper-'), "excessive", e('hyperkalemia')], [e('hypo-'), "low", e('hypospadias')], [e('retro-'), "behind, backward", e('retrograde')], [e('extra-'), "outside", e('extracorporeal')]])}`),
          L("At the bedside", `${fig('uria-family', [], "The -uria family")}${wb('an-', '-uria')} → no urine<br>${wb('poly-', '-uria')} → excessive urine<br>${wb('dys-', '-uria')} → painful urination${pearl("In a consultation report in Fremgen’s textbook, a 36-year-old man came to the urologist with right flank pain and blood in his urine; that is, hematuria.")}${memo("olig/o, as in “oligarchy”, means few; oliguria means scanty urine.")}`),
          M("The prefix dys- means…", ["painful, difficult", "many", "without", "behind"], 'dysuria.'),
          M(`${e('<b>polyuria</b>')} means…`, ["excessive urine", "little urine", "night-time urination", "painful urination"], "poly- means many."),
          T("retro- in retroperitoneal means behind the peritoneum.", true, "The kidneys are behind the peritoneum."),
          W("Build a word meaning “painful urination”", ['dys-', '-uria'], ['poly-', 'nephr/o', '-lith'], 'dysuria.'),
          P("Match each prefix to its meaning", [['an-', "without"], ['poly-', "many"], ['hypo-', "low"], ['extra-', "outside"]], "The prefixes."),
          B("Absence of urine is ___.", ['anuria', 'oliguria', 'dysuria'], 'an- + ‎-uria‎.'),
          S("Spell the term for painful urination", 'dysuria', 'dys- + ‎-uria‎.', 'dys…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: "Suffixes", icon: '➡️', items: [
          L("Urinary suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-uria'), "condition of urine", e('hematuria')], [e('-lith'), "stone", e('nephrolith')], [e('-lithiasis'), "having stones", e('nephrolithiasis')], [e('-tripsy'), "crushing", e('lithotripsy')], [e('-ptosis'), "drooping", e('nephroptosis')], [e('-megaly'), "enlargement", e('nephromegaly')], [e('-pexy'), "surgical fixation", e('nephropexy')]])}`),
          L("Stone, from root to suffix", `${e('lith/o')} is the root for stone and ${e('-lith')} its suffix:<br>${wb('lith/o', '-tripsy')} → crushing stones<br>${wb('cyst/o', '-lith')} → bladder stone<br>${wb('nephr/o', 'lith/o', '-iasis')} → kidney stones${memo("Read ptosis as “TOH-sis”; the p at the start is silent, as in pneumonia.")}`),
          M("The suffix -tripsy means…", ["crushing", "incision", "surgical fixation", "drooping"], 'lithotripsy.'),
          M(`${e('<b>nephroptosis</b>')} means…`, ["drooping of the kidney", "enlarged kidney", "kidney stone", "softening of the kidney"], 'floating kidney.'),
          T("-lith and lith/o both refer to stones.", true, "One is a suffix and one a root."),
          W("Build a word meaning “surgical fixation of the kidney”", ['nephr/o', '-pexy'], ['cyst/o', '-tripsy', 'pyel/o'], 'nephropexy.'),
          P("Match each suffix to its meaning", [['-megaly', "enlargement"], ['-ptosis', "drooping"], ['-malacia', "softening"], ['-sclerosis', "hardening"]], "Suffixes."),
          B("Crushing stones is ___.", ['lithotripsy', 'lithotomy', 'nephrolith'], 'lith/o + ‎-tripsy‎.'),
          S("Spell the term for enlargement of the kidney", 'nephromegaly', 'nephr/o + ‎-megaly‎.', 'nephro…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: "Look-alike Traps", icon: '⚖️', items: [
          L("Traps", `${fig('twins', [], "Look-alike Traps")}${vs(['ureter', "ureter; two of them; kidney to bladder"], ['urethra', "urethra; one; bladder to the outside"])}${vs(['vesical', "adjective: relating to the bladder"], ['vesicle', "noun: blister"])}`),
          L("Three more traps", `${vs(['creatinine', "waste product; rises in kidney failure"], ['creatine', "a compound in muscle"])}${vs(['enuresis', "bed-wetting"], ['anuresis', "failure to pass urine"])}${memo("cyst/o is the bladder and cyt/o a cell; ureter/o is the ureter and uter/o the uterus. One letter, a different organ!")}`),
          M("The tube that carries urine from the kidney to the bladder is the…", ['ureter', 'urethra', 'uterus', 'meatus'], "ureter; there are two.", null, F('twins', [])),
          M(`${e('<b>vesicle</b>')} means…`, ["blister, small sac", "relating to the bladder", "ureter", "stone"], "vesical is the adjective for the bladder."),
          T("enuresis means failure to pass urine.", false, "enuresis is bedwetting; failure to pass urine is anuresis."),
          O("Put the organs in order from top to bottom", ['kidney', 'ureter', 'bladder', 'urethra'], "The route of urine."),
          P("Match each term to its meaning", [['creatinine', "muscle waste product"], ['cyt/o', "cell"], ['uter/o', "uterus"], ['vesicle', "blister"]], "The traps."),
          B("The waste product that rises in the blood in kidney failure is ___.", ['creatinine', 'creatine', 'glucose'], 'creatinine.'),
          S("Spell the term for the tube from kidney to bladder", 'ureter', "ureter/o; two e’s.", 'ure…'),
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
    id: 'kd', sym: 'Kd', name: "Kidney and Nephron", short: "Kidney and Nephron", sub: "Where the kidney lies, cortex and medulla, calyces and renal pelvis, the nephron and glomerulus, the three steps of urine formation, and the kidney’s vessels and hormones",
    color: '#6D4BC3', dark: '#4B2F95', light: '#EFE9FB',
    levels: ["The kidney outside and inside", "The nephron and urine formation", "Blood, hormones and homeostasis"],
    gens: EA.genIds('kd'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'kd1', title: "Position of the kidneys", icon: '📍', items: [
          L("behind the peritoneum", `${fig('kidney-location', [], "Cross-section of the abdomen")}The kidneys are two bean-shaped organs the size of a fist, in the lower back on either side of the spine, <b>behind the peritoneum</b>: ${e('<b>retroperitoneal</b>')}. The left kidney is slightly higher and larger than the right.`),
          L("notch of the kidney", `${fig('kidneys-vessels', ["Kidneys, vessels and adrenal gland"], "Kidneys and vessels")}The inner edge of each kidney has a notch called the ${e('<b>hilum</b>')}; the renal artery enters there and the renal vein and ureter leave. An ${e('adrenal gland')} sits on top of each kidney.${memo("In Latin, hilum means “a little thing”: the small dip that a bean also has.")}`),
          M("The position of the kidneys relative to the peritoneum…", ["behind the peritoneum (retroperitoneal)", "inside the peritoneal cavity", "in front of the intestines", "inside the pelvis"], "retro- means behind.", null, F('kidney-location', [])),
          M("Where on the kidney do the vessels and ureter pass?", ['hilum', 'cortex', 'papilla', 'capsule'], "The notch of the kidney."),
          T("The left kidney is usually slightly higher than the right kidney.", true, "The liver keeps the right kidney lower.", F('kidneys-vessels', [])),
          W("Build the term that means “behind the peritoneum”", ['retro-', 'peritone/o', '-al'], ['supra-', 'nephr/o', '-itis'], 'retroperitoneal.'),
          P("Match each part to its location", [['hilum', "inner dip of the kidney"], ['adrenal gland', "on top of the kidney"], ['renal capsule', "thin covering of the kidney"], ['perinephric fat', "fat around the kidney"]], "Where the parts are."),
          B("The gland sitting on top of each kidney is the ___.", ['adrenal gland', 'prostate gland', 'pituitary gland'], 'suprarenal gland.'),
          S("Spell the term for the notch on the kidney’s inner edge", 'hilum', "A Latin word.", 'hi…'),
          N('t2f:kd')
        ]
      },
      {
        id: 'kd2', title: "Cortex and medulla", icon: '🔪', items: [
          L("Lengthwise section", `${fig('kidney-section-art', [], "Lengthwise section of the kidney")}A section of the kidney shows two regions: the outer ${e('<b>renal cortex</b>')} and the inner ${e('<b>renal medulla</b>')}. The medulla is made of triangular ${e('<b>renal pyramids</b>')}, whose tips, the ${e('renal papilla')}, point towards the hilum.`),
          L("On the textbook figure", `${fig('kidney-internal', ["Cortex, medulla, pyramid and papilla"], "Internal structure of the kidney")}${vs(['cortex', "outer; the rind; renal corpuscles"], ['medulla', "inner; pyramids; loops and ducts"])}${memo("In Latin, medulla means bone marrow; the adrenal gland and the brainstem also have a “medulla”. cortex means tree bark.")}`),
          M("Which is the outer part of the kidney?", ['renal cortex', 'renal medulla', 'renal pelvis', 'calyx'], "cortex means rind.", null, F('kidney-section-art', [])),
          M("The triangular structures of the renal medulla are the…", ['renal pyramids', 'calyces', 'glomeruli', 'rugae'], "The renal pyramids."),
          T("The tip of each renal pyramid points towards the hilum and is called the papilla.", true, 'renal papilla.', F('kidney-internal', [])),
          O("Put them in order from outside to inside", ['renal capsule', 'renal cortex', 'renal medulla', 'renal pelvis'], "Capsule, cortex, medulla, renal pelvis."),
          P("Match each part to its description", [['renal cortex', "outer part"], ['renal medulla', "inner part"], ['renal pyramid', "triangle of the medulla"], ['renal papilla', "tip of the pyramid"]], "The kidney section."),
          B("The adjective meaning “relating to the cortex” is ___.", ['cortical', 'medullary', 'caliceal'], 'cortic/o + ‎-al‎.'),
          S("Spell the term for the inner part of the kidney", 'medulla', 'medull/o.', 'med…'),
          N('f2t:kd')
        ]
      },
      {
        id: 'kd3', title: "Calyces and renal pelvis", icon: '🏺', items: [
          L("The urine funnel", `Urine drips from the pyramid tips into a ${e('<b>calyx</b>')} (cup; plural ${e('calyces')}). The small calyces join to form the funnel-shaped ${e('<b>renal pelvis</b>')}, which becomes the ${e('ureter')} at the hilum.${fig('calyx-stones', ["Calyces and ureter"], "The calyces")}`),
          L("Roots", `${wb('calic/o', '-eal')} → relating to a calyx<br>${wb('pyel/o', '-ectasis')} → dilation of the renal pelvis${memo("In Greek, calyx means “the cup of a flower”; each calyx is like a cup under a pyramid tip.")}`),
          M("The funnel-shaped part that collects urine from the calyces is the…", ['renal pelvis', 'renal cortex', 'trigone', 'glomerulus'], 'pyel/o.'),
          M("What is the plural of calyx?", ['calyces', 'calyxes', 'calyi', 'calyxa'], "calyces or calices."),
          T("The renal pelvis becomes the ureter at the hilum.", true, 'renal pelvis → ureter.', F('calyx-stones', [])),
          O("Put the route of urine inside the kidney in order", ['renal papilla', 'calyx', 'renal pelvis', 'ureter'], "Papilla, calyx, renal pelvis, ureter."),
          P("Match each term to its meaning", [['caliceal', "relating to a calyx"], ['pyelitic', "relating to the renal pelvis"], ['pyelectasis', "dilation of the renal pelvis"], ['calyx', "cup of the kidney"]], "Calyx and renal pelvis."),
          B("The root for “renal pelvis” is ___.", ['pyel/o', 'py/o', 'calic/o'], 'pyel/o.'),
          S("Spell the term for the cup that collects urine from a pyramid", 'calyx', "Plural: calyces.", 'cal…'),
          N('d2t:kd')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'kd4', title: "nephron", icon: '🔬', items: [
          L("The kidney’s working unit", `${fig('nephron-art', [], "nephron")}Each kidney contains more than a million working units, each a ${e('<b>nephron</b>')}. Every nephron has two parts:<br>• ${e('<b>renal corpuscle</b>')}: the ${e('glomerulus')} (capillary tuft) inside the ${e('glomerular capsule')}, or Bowman capsule<br>• ${e('<b>renal tubule</b>')}: a tube that completes the urine`),
          L("On the textbook figure", `${fig('nephron-section', ["Nephron in the kidney"], "Where the nephron sits in the kidney")}${memo("glomerulus comes from the Latin glomus, “ball of yarn”; the tangled tuft of capillaries has just that shape.")}${pearl("A person can live a normal life with one healthy kidney, because there are more nephrons than the body needs.")}`),
          M("What is the functional unit of the kidney?", ['nephron', 'neuron', 'glomerulus', 'calyx'], 'nephron.', null, F('nephron-art', [])),
          M("The capillary tuft inside Bowman capsule is the…", ['glomerulus', 'tubule', 'papilla', 'medulla'], 'glomerulus.'),
          T("The renal corpuscle is made of the glomerulus and Bowman capsule.", true, 'renal corpuscle.'),
          W("Build a word meaning “relating to a glomerulus”", ['glomerul/o', '-ar'], ['nephr/o', '-itis', 'pyel/o'], 'glomerular.'),
          P("Match each part of the nephron to its description", [['glomerulus', "capillary tuft"], ['glomerular capsule', "Bowman capsule"], ['renal tubule', "tube of the nephron"], ['renal corpuscle', "glomerulus and capsule"]], "The nephron."),
          B("The plural of glomerulus is ___.", ['glomeruli', 'glomerulus', 'glomerulae'], 'glomeruli.'),
          S("Spell the term for the kidney’s working unit", 'nephron', 'nephr/o.', 'neph…'),
          N('t2f:kd')
        ]
      },
      {
        id: 'kd5', title: "Tubules and collecting duct", icon: '〰️', items: [
          L("Route of the tubule", `${fig('nephron-detail', ["Nephron parts and capillaries"], "Nephron in detail")}After Bowman capsule, the renal tubule has four parts:<br>• ${e('<b>proximal convoluted tubule</b>')}: the near coiled part<br>• ${e('<b>nephron loop</b>')}, or loop of Henle: descending and ascending limbs<br>• ${e('<b>distal convoluted tubule</b>')}: the far coiled part<br>• ${e('<b>collecting duct</b>')}: the gathering duct`),
          L("Near and far", `${vs(['proximal', "close to Bowman capsule; most reabsorption"], ['distal', "far from the capsule; before the collecting duct"])}${memo("proxim/o means near and dist/o far; convoluted means twisted.")}`),
          M("What is the U-shaped loop of the renal tubule called?", ['nephron loop (loop of Henle)', 'collecting duct', 'glomerulus', 'calyx'], 'loop of Henle.', null, F('nephron-art', [])),
          M("The duct that gathers urine from several nephrons is the…", ['collecting duct', 'proximal tubule', 'afferent arteriole', 'ureter'], 'collecting duct.'),
          T("The proximal convoluted tubule is farther from the collecting duct.", false, "Proximal is close to Bowman capsule."),
          O("Put the parts of the nephron in order", ['glomerular capsule', 'proximal tubule', 'nephron loop', 'distal tubule', 'collecting duct'], "The path of fluid through the nephron."),
          P("Match each part to its description", [['proximal tubule', "near coiled tube"], ['nephron loop', "loop of Henle"], ['distal tubule', "far coiled tube"], ['collecting duct', "gathering duct"]], "The tubules."),
          B("Another name for the nephron loop is the loop of ___.", ['Henle', 'Bowman', 'Wilms'], 'loop of Henle.'),
          S("Spell the term for the duct that gathers urine from many nephrons", 'collecting duct', "Two words.", 'coll…'),
          N('m2r:kd')
        ]
      },
      {
        id: 'kd6', title: "Three steps of urine formation", icon: '🧪', items: [
          L("Filtration, reabsorption, secretion", `${fig('urine-formation', [], "Three steps")}1. ${e('<b>filtration</b>')}: blood pressure pushes water and dissolved substances from the glomerulus into Bowman capsule; this fluid is the ${e('glomerular filtrate')}.<br>2. ${e('<b>reabsorption</b>')}: water, sugar and needed salts return from the tubule to the peritubular capillaries.<br>3. ${e('<b>secretion</b>')}: the tubule moves ammonia, uric acid and hydrogen ions from the blood into the urine.`),
          L("On the textbook figure", `${fig('urine-stages', ["filtration A, reabsorption B, secretion C"], "Three steps of urine formation")}${fig('glomerulus-zoom', [], "renal corpuscle")}${pearl("About 180 litres of fluid are filtered by the glomeruli each day and about 99% of the water is reabsorbed; only 1 to 2 litres of urine remain.")}${memo("The prefix re- means again: reabsorption means absorbing again.")}`),
          M("The first step of urine formation, in the glomerulus, is…", ['filtration', 'reabsorption', 'secretion', 'excretion'], "Filtration.", null, F('urine-formation', [])),
          M("The return of water and sugar from the tubule to the blood is…", ['reabsorption', 'filtration', 'secretion', 'diuresis'], "Reabsorption."),
          T("Normally, blood cells and protein do not pass through the glomerulus.", true, "The filtered fluid should contain no cells or protein.", F('glomerulus-zoom', [])),
          O("Put the three steps of urine formation in order", ['filtration', 'reabsorption', 'secretion'], "Filtration, reabsorption, secretion."),
          P("Match each step to where it happens", [['filtration', "glomerulus to capsule"], ['reabsorption', "tubule to capillary"], ['secretion', "capillary to tubule"], ['glomerular filtrate', "fluid inside the nephron"]], "The three steps."),
          B("The fluid that enters the nephron from the glomerulus is ___.", ['glomerular filtrate', 'dialysate', 'plasma clearance'], 'filtrate.'),
          S("Spell the term for the return of water and solutes to the blood", 'reabsorption', 're- + absorption.', 'reab…'),
          N('t2f:kd')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'kd7', title: "Blood flow in the kidney", icon: '🩸', items: [
          L("From the aorta to the vena cava", `${fig('renal-blood', [], "The path of blood")}The ${e('<b>renal artery</b>')} branches off the abdominal aorta. Its branches reach the ${e('<b>afferent arteriole</b>')}, which brings blood to the glomerulus; the ${e('<b>efferent arteriole</b>')} takes blood away from the glomerulus to the ${e('peritubular capillaries')}. The filtered blood returns to the inferior vena cava through the ${e('renal vein')}.`),
          L("On the textbook figure", `${fig('kidney-blood', ["Renal artery and vein"], "Kidney vessels")}${fig('nephron-blood', ["Arterioles, glomerulus and capillaries"], "Blood supply of the nephron")}${vs(['afferent', "afferent; towards the glomerulus"], ['efferent', "efferent; away from the glomerulus"])}${memo("afferent with an a as in arrive: it comes in. efferent with an e as in exit: it goes out.")}`),
          M("The arteriole that brings blood to the glomerulus is the…", ['afferent arteriole', 'efferent arteriole', 'renal vein', 'peritubular capillary'], "afferent = carrying towards.", null, F('renal-blood', [])),
          M("Where does the renal vein drain?", ['inferior vena cava', 'abdominal aorta', 'renal artery', 'ureter'], "The inferior vena cava."),
          T("The renal artery is a branch of the abdominal aorta.", true, 'renal artery.', F('kidney-blood', [])),
          O("Put the route of blood in order", ['renal artery', 'afferent arteriole', 'glomerulus', 'efferent arteriole', 'renal vein'], "The route of blood in the kidney."),
          P("Match each vessel to its job", [['afferent arteriole', "towards the glomerulus"], ['efferent arteriole', "away from the glomerulus"], ['peritubular capillaries', "around the tubules"], ['renal vein', "return of blood"]], "The vessels."),
          B("The capillaries around the tubules take up reabsorbed substances: ___ capillaries.", ['peritubular', 'perirenal', 'glomerular'], 'peri- + tubule.'),
          S("Spell the term for the vessel draining blood from the kidney", 'renal vein', "Two words.", 'ren…'),
          N('f2t:kd')
        ]
      },
      {
        id: 'kd8', title: "Kidney hormones", icon: '✉️', items: [
          L("The kidney is a gland too", `${fig('kidney-hormones', [], "Hormones and the kidney")}• ${e('<b>renin</b>')}: an enzyme from the kidney that activates ${e('angiotensin')} and raises blood pressure<br>• ${e('<b>erythropoietin (EPO)</b>')}: drives the bone marrow to make red blood cells<br>• ${e('<b>antidiuretic hormone (ADH)</b>')}: from the pituitary; makes the kidney hold on to water<br>• ${e('<b>aldosterone</b>')}: from the adrenal gland; regulates sodium and potassium`),
          L("At the bedside", `${pearl("ACE inhibitor drugs lower blood pressure by blocking the formation of angiotensin.")}${pearl("In kidney failure, EPO falls and the patient becomes anaemic.")}${memo("anti-diuretic means against urine: ADH makes urine scanty and concentrated.")}`),
          M("The hormone that increases red blood cell production is…", ['erythropoietin', 'renin', 'aldosterone', 'antidiuretic hormone'], 'EPO.', null, F('kidney-hormones', [])),
          M("The enzyme from the kidney that raises blood pressure is…", ['renin', 'urea', 'creatinine', 'insulin'], 'renin → angiotensin.'),
          T("ADH makes urine more plentiful and more dilute.", false, "ADH reabsorbs water; the urine becomes scanty and concentrated."),
          O("Put the chain that raises blood pressure in order", ['renin', 'angiotensin', 'vessel constriction'], "Renin, angiotensin, narrowing of vessels."),
          P("Match each hormone to its job", [['renin', "activating angiotensin"], ['erythropoietin', "making red blood cells"], ['antidiuretic hormone', "holding on to water"], ['aldosterone', "regulating sodium and potassium"]], "The hormones."),
          B("Anaemia in kidney failure comes from a lack of ___.", ['EPO', 'ADH', 'renin'], 'erythropoietin.'),
          S("Spell the term for the kidney enzyme that raises blood pressure", 'renin', "A kidney enzyme.", 're…'),
          N('m2r:kd')
        ]
      },
      {
        id: 'kd9', title: "Homeostasis and GFR", icon: '⚖️', items: [
          L("The body’s balance", `${fig('homeostasis', [], "keeping the body’s balance")}The kidneys maintain ${e('<b>homeostasis</b>')}: they adjust water, ${e('electrolytes')} such as sodium and potassium, and blood pH, and they excrete ${e('urea')}, ${e('creatinine')} and ${e('uric acid')}.${fig('water-balance', ["Daily water intake and output"], "Body water balance")}`),
          L("Measuring kidney function", `${e('<b>glomerular filtration rate (GFR)</b>')} is the volume of fluid that all the glomeruli filter each minute; the best measure of kidney function. ${e('clearance')} is the volume of plasma cleared of a substance each minute.${pearl("In the “Kidney calculator” tool you can work out eGFR from creatinine, age and sex.")}${memo("home/o means same and -stasis means standing: homeostasis means “staying the same”.")}`),
          M("The best measure of overall kidney function is…", ['glomerular filtration rate', 'specific gravity', 'urine color', 'blood pressure'], 'GFR.', null, F('homeostasis', [])),
          M("The muscle metabolism waste product that the kidney excretes is…", ['creatinine', 'glucose', 'albumin', 'renin'], 'creatinine.'),
          T("About 60% of the body’s daily water output is through urine.", true, "About 1500 of 2500 mL.", F('water-balance', [])),
          W("Build a word meaning “relating to the inner part of the kidney (medulla)”", ['medull/o', '-ary'], ['cortic/o', '-itis', 'ren/o'], 'medullary.'),
          P("Match each concept to its meaning", [['homeostasis', "keeping the body’s balance"], ['electrolytes', "body ions"], ['clearance', "clearing of plasma"], ['uric acid', "waste product"]], "Balance."),
          B("The abbreviation GFR means ___.", ['glomerular filtration rate', 'general fluid ratio', 'glucose filtration rate'], 'GFR.'),
          S("Spell the term for keeping the internal environment stable", 'homeostasis', 'home/o + ‎-stasis‎.', 'home…'),
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
    id: 'tr', sym: 'Tr', name: "The Bladder and Voiding", short: "Bladder and voiding", sub: "The ureter and peristalsis, the bladder and its trigone, the sphincters, the female and male urethra, the voiding reflex, incontinence and retention",
    color: '#2B86C5', dark: '#1B5E8E', light: '#E6F2FB',
    levels: ["Ureter and bladder", "Urethra and voiding", "Disorders of voiding and structure"],
    gens: EA.genIds('tr'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'tr1', title: "ureter", icon: '〰️', items: [
          L("Muscular tubes", `${fig('ureter-peristalsis', [], "Peristalsis of the ureter")}Each ${e('<b>ureter</b>')} is a narrow muscular tube running from the renal pelvis to the bladder. ${e('<b>peristalsis</b>')}, the wave-like contraction of its wall, pushes urine down, and every 10 to 30 seconds a spurt of urine enters the bladder.`),
          L("ureteral orifice", `${fig('urinary-system', ["Kidneys, ureters and bladder"], "urinary system")}Urine enters the bladder through the ${e('<b>ureteral orifice</b>')}. This opening is closed when the bladder contracts so that urine does not flow back into the ureter. The left ureter is slightly longer, because the left kidney is higher.${memo("The prefix peri- means around and stalsis means squeezing: peristalsis is rhythmic squeezing all around the tube.")}`),
          M("The wave-like movement that carries urine down the ureter is…", ['peristalsis', 'micturition', 'reabsorption', 'filtration'], 'peristalsis.', null, F('ureter-peristalsis', [])),
          M("Where does urine enter the bladder?", ['ureteral orifice', 'urinary meatus', 'hilum', 'papilla'], "The ureteral orifice."),
          T("The left ureter is slightly longer than the right ureter.", true, "Because the left kidney is higher.", F('urinary-system', [])),
          W("Build a word meaning “inflammation of a ureter”", ['ureter/o', '-itis'], ['urethr/o', '-lith', 'cyst/o'], 'ureteritis.'),
          P("Match each term to its meaning", [['ureter', "tube from kidney to bladder"], ['ureteral', "relating to the ureter"], ['peristalsis', "wave-like contractions"], ['ureteral orifice', "opening of the kidney tube into the bladder"]], "The ureter."),
          B("The adjective meaning “relating to the ureter” is ___.", ['ureteral', 'urethral', 'urinary'], 'ureter/o + ‎-al‎.'),
          S("Spell the term for the wave-like contractions of the ureter", 'peristalsis', 'peri- + stalsis.', 'peri…'),
          N('t2f:tr')
        ]
      },
      {
        id: 'tr2', title: "bladder", icon: '🎈', items: [
          L("An elastic store", `${fig('bladder-art', [], "The bladder in section")}The ${e('<b>urinary bladder</b>')} is a muscular, elastic sac in the pelvis. Its wall has the smooth muscle ${e('<b>detrusor</b>')}, and its inner lining has folds called ${e('<b>rugae</b>')} that let the bladder stretch.`),
          L("On the textbook figure", `${fig('bladder-wall', ["Ureter, bladder, sphincters and urethra"], "bladder wall")}An adult bladder sends the urge to urinate when it holds about 300 to 400 mL of urine, and at night it can hold up to about a litre.${memo("Remember rugae as “accordion folds”; when the bladder fills, the folds open out.")}`),
          M("What is the muscle of the bladder wall?", ['detrusor muscle', 'external sphincter', 'diaphragm', 'psoas'], 'detrusor.', null, F('bladder-art', [])),
          M("What are the folds of the bladder lining called?", ['rugae', 'calyces', 'villi', 'papillae'], 'rugae.'),
          T("The bladder is an elastic muscular sac in the pelvis.", true, 'urinary bladder.', F('bladder-wall', [])),
          W("Build a word meaning “pain in the bladder”", ['cyst/o', '-algia'], ['nephr/o', '-itis', 'ureter/o'], 'cystalgia.'),
          P("Match each term to its meaning", [['urinary bladder', "bladder"], ['detrusor muscle', "muscle of the bladder wall"], ['rugae', "folds of the lining"], ['vesical', "relating to the bladder"]], "The bladder."),
          B("Bleeding from the bladder is ___.", ['cystorrhagia', 'cystalgia', 'cystocele'], 'cyst/o + ‎-rrhagia‎.'),
          S("Spell the two-word term for the sac that stores urine", 'urinary bladder', 'urinary + bladder.', 'urin…'),
          N('f2t:tr')
        ]
      },
      {
        id: 'tr3', title: "Trigone and sphincters", icon: '🔺', items: [
          L("trigone", `${fig('bladder-trigone', ["Bladder trigone and sphincters"], "trigone")}The ${e('<b>trigone</b>')} is the triangular area of the bladder floor whose three corners are the two ureteral openings and the urethral opening. The stability of this triangle keeps urine from flowing back into the ureters.`),
          L("Two sphincters", `${vs(['internal urethral sphincter', "internal; involuntary; at the bladder neck"], ['external urethral sphincter', "external; voluntary; under our control"])}${pearl("In the textbook’s applied scenario you are asked which structure controls the release of urine; the answer is the external urethral sphincter.")}${memo("trigone, with tri meaning three: three openings, three corners.")}`),
          M("The triangular area of the bladder floor is the…", ['trigone', 'hilum', 'meatus', 'rugae'], 'trigon/o.', null, F('bladder-trigone', [])),
          M("Which sphincter is voluntary?", ['external urethral sphincter', 'internal urethral sphincter', 'pyloric sphincter', 'detrusor'], "The external one is voluntary."),
          T("The internal urethral sphincter is under our voluntary control.", false, "The internal one is involuntary; the external one is voluntary."),
          W("Build a word meaning “inflammation of the trigone”", ['trigon/o', '-itis'], ['ureter/o', '-cele', 'nephr/o'], 'trigonitis.'),
          P("Match each part to its feature", [['trigone', "three openings in the bladder floor"], ['internal sphincter', "involuntary"], ['external sphincter', "voluntary"], ['detrusor', "contracts"]], "Trigone and sphincters."),
          B("The three corners of the trigone are the two ureteral openings and the opening of the ___.", ['urethra', 'kidney', 'calyx'], "The urethral opening."),
          S("Spell the term for the triangular area of the bladder floor", 'trigone', 'trigon/o.', 'tri…'),
          N('d2t:tr')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'tr4', title: "urethra", icon: '🚪', items: [
          L("Women and men", `${fig('urethra-compare', [], "Female and male urethra")}The ${e('<b>urethra</b>')} carries urine out of the bladder, and its outer opening is the ${e('<b>urinary meatus</b>')}.<br>• In women it is about 4 cm long and for urine only<br>• In men it is about 20 cm long; it passes through the ${e('prostate gland')} and also carries semen`),
          L("On the textbook figure", `${fig('urethra-sexes', ["Male and female urethra"], "Female and male urethra")}${pearl("Urinary infection is more common in women because the urethra is shorter and its opening is closer to the anus.")}${memo("meatus means passage or opening; the urinary meatus is the outer opening of the urethra.")}`),
          M("What is the outer opening of the urethra called?", ['urinary meatus', 'ureteral orifice', 'hilum', 'trigone'], 'meat/o.', null, F('urethra-compare', [])),
          M("Why is urinary infection more common in women?", ["the urethra is shorter", "the bladder is larger", "the kidneys are lower", "the ureter is longer"], "Microbes have a shorter route to the bladder."),
          T("The male urethra passes through the prostate.", true, "That is why an enlarged prostate reduces urine flow.", F('urethra-sexes', [])),
          W("Build a word meaning “inflammation of the urethra”", ['urethr/o', '-itis'], ['ureter/o', '-lith', 'meat/o'], 'urethritis.'),
          P("Match each term to its meaning", [['urethra', "tube from bladder to the outside"], ['urinary meatus', "external opening for urine"], ['prostate gland', "prostate"], ['urethral', "relating to the urethra"]], "The urethra."),
          B("Pain in the urethra is ___.", ['urethralgia', 'urethritis', 'urethrocele'], 'urethr/o + ‎-algia‎.'),
          S("Spell the term for an opening or passage, as at the end of the urethra", 'meatus', 'meat/o.', 'mea…'),
          N('m2r:tr')
        ]
      },
      {
        id: 'tr5', title: "passing urine", icon: '🚽', items: [
          L("Three names for one act", `${fig('voiding-reflex', [], "micturition reflex")}${e('<b>micturition</b>')}, ${e('<b>urination</b>')} and ${e('<b>voiding</b>')} all mean emptying the bladder. When the bladder fills, the ${e('micturition reflex')} contracts the detrusor muscle and relaxes the internal sphincter; the external sphincter opens by our will.`),
          L("bladder control", `${e('<b>continence</b>')} means the ability to hold urine; children usually learn to control the external sphincter after age two.${memo("micturition comes from the Latin mictus, “making water”; it is often misspelled micturation.")}`),
          M("The formal term for passing urine is…", ['micturition', 'peristalsis', 'reabsorption', 'diuresis'], 'micturition.', null, F('voiding-reflex', [])),
          M("In the voiding reflex, what contracts?", ['detrusor muscle', 'internal sphincter', 'external sphincter', 'ureter'], "The detrusor contracts and the internal sphincter relaxes."),
          T("The correct spelling is micturition, not micturation.", true, "A common spelling trap."),
          O("Put the voiding reflex in order", ['bladder fills', 'stretch signal', 'detrusor contracts', 'urine leaves'], "Filling, stretch signal, contraction, emptying."),
          P("Match each term to its meaning", [['micturition', "passing urine"], ['voiding', "emptying the bladder"], ['continence', "holding urine"], ['micturition reflex', "automatic bladder-emptying response"]], "Passing urine."),
          B("The ability to control urination is ___.", ['continence', 'incontinence', 'retention'], 'continence.'),
          S("Spell the formal term for passing urine", 'micturition', "Spelling trap: -ition.", 'mict…'),
          N('t2f:tr')
        ]
      },
      {
        id: 'tr6', title: "incontinence", icon: '💦', items: [
          L("Types of incontinence", `${fig('incontinence-types', [], "Problems with bladder control")}${e('<b>urinary incontinence</b>')} means inability to hold urine:<br>• ${e('<b>stress incontinence</b>')}: leaking urine with coughing, sneezing, laughing or exercise<br>• ${e('<b>urge incontinence</b>')}: sudden urgency and leaking before reaching the toilet<br>• ${e('<b>enuresis</b>')}: bedwetting after the age by which control should be learned`),
          L("At the bedside", `${pearl("In a case study in Cohen’s textbook, a 52-year-old woman named Jade has stress incontinence and can no longer exercise comfortably. For assessment, a clean-catch sample, cystometry (CMG) and cystoscopy were done, and after an injection of muscle stem cells her bladder control improved by 95%.")}${memo("The prefix in- means not: incontinence means being unable to hold.")}`),
          M("Leaking urine when coughing and sneezing is…", ['stress incontinence', 'urge incontinence', 'urinary retention', 'anuria'], 'stress incontinence.', null, F('incontinence-types', [])),
          M(`${e('<b>enuresis</b>')} means…`, ["bed-wetting", "failure to pass urine", "painful urination", "blood in the urine"], 'nocturnal enuresis.'),
          T("Because Jade leaks urine during exercise, she has stress incontinence.", true, "Pressure on the bladder during activity."),
          O("Put Jade’s assessment in order", ['urologic history', 'clean-catch specimen', 'cystometrography', 'stem cell injection'], "History, sample, cystometry, treatment."),
          P("Match each type to its description", [['stress incontinence', "leak with coughing"], ['urge incontinence', "sudden urgency"], ['enuresis', "bed-wetting"], ['continence', "full control"]], "Incontinence."),
          B("The abbreviation CMG means ___.", ['cystometrography', 'cystography', 'computed myelography'], "Measuring bladder pressure."),
          S("Spell the term for inability to hold urine", 'incontinence', 'in- + continence.', 'incon…'),
          N('f2t:tr')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'tr7', title: "Retention and obstruction", icon: '🚧', items: [
          L("Full bladder, weak flow", `• ${e('<b>urinary retention</b>')}: the bladder does not empty completely; often from a blockage<br>• ${e('<b>bladder neck obstruction (BNO)</b>')}: blockage at the bladder neck, often from an enlarged prostate<br>• ${e('<b>hesitancy</b>')}: weak flow and a delayed start of urination<br>• ${e('<b>neurogenic bladder</b>')}: bladder dysfunction from nerve damage such as a spinal cord lesion`),
          L("Frequency and urgency", `${vs(['urinary frequency', "urinating often without a larger total volume"], ['urgency', "an immediate need to urinate"])}${pearl("In the textbook’s applied scenario, Mrs Kim Cardsheen complains of bladder spasms and urinary retention; an antispasmodic drug reduces the spasms.")}${memo("neur/o means nerve and -genic means produced by: a neurogenic bladder is a bladder whose problem comes from the nerves.")}`),
          M("A bladder that does not empty completely has…", ['urinary retention', 'urinary incontinence', 'polyuria', 'enuresis'], 'retention.'),
          M("A common cause of bladder neck obstruction in men is…", ["enlarged prostate", "kidney stone", "diabetes", "dehydration"], 'BNO.'),
          T("A neurogenic bladder is caused by damage to the nervous system.", true, "Such as spinal cord injury or MS."),
          W("Build a word meaning “originating from a nerve”", ['neur/o', '-genic'], ['nephr/o', '-itis', 'cyst/o'], 'neurogenic.'),
          P("Match each sign to its meaning", [['hesitancy', "delayed start of urination"], ['urgency', "immediate need"], ['urinary frequency', "frequent voiding"], ['urinary retention', "bladder not emptying"]], "Signs."),
          B("The abbreviation BNO means ___.", ['bladder neck obstruction', 'bilateral nephric outflow', 'blood nitrogen output'], "Bladder neck obstruction."),
          S("Spell the term for holding urine back in the bladder", 'retention', 'urinary retention.', 'rete…'),
          N('m2r:tr')
        ]
      },
      {
        id: 'tr8', title: "Narrowing, widening and bulging", icon: '↔️', items: [
          L("Three shape suffixes", `${fig('tract-narrowing', [], "Narrowing and Widening")}• ${e('-stenosis')} = narrowing: ${e('<b>ureterostenosis</b>')}, ${e('<b>urethrostenosis</b>')}<br>• ${e('-ectasis')} = widening: ${e('<b>ureterectasis</b>')}<br>• ${e('-cele')} = bulging: ${e('<b>ureterocele</b>')}, ${e('<b>urethrocele</b>')}`),
          L("On the textbook figure", `${fig('ureterocele', ["Bulge at the end of the ureter inside the bladder"], "ureterocele")}A ${e('ureterocele')} is a cyst-like bulge at the end of the ureter inside the bladder that blocks the flow and sends urine back into the ureter and renal pelvis.${memo("stenosis sounds like “stern”: tight; ectasis sounds like “extend”: opened wide.")}`),
          M("Narrowing of the urethra is…", ['urethrostenosis', 'ureterectasis', 'urethrocele', 'urethritis'], 'urethr/o + ‎-stenosis‎.', null, F('tract-narrowing', [])),
          M(`${e('<b>ureterectasis</b>')} means…`, ["widening of the ureter", "narrowing of a ureter", "stone in the ureter", "removal of a ureter"], "-ectasis means widening."),
          T("A ureterocele is a bulge at the end of the ureter inside the bladder.", true, "-cele means bulging.", F('ureterocele', [])),
          W("Build a word meaning “narrowing of a ureter”", ['ureter/o', '-stenosis'], ['urethr/o', '-ectasis', 'cyst/o'], 'ureterostenosis.'),
          P("Match each suffix to its meaning", [['-stenosis', "narrowing"], ['-ectasis', "widening"], ['-cele', "bulging"], ['-rrhagia', "bleeding"]], "Suffixes."),
          B("Bulging of the urethra is ___.", ['urethrocele', 'urethrostenosis', 'urethrorrhea'], 'urethr/o + ‎-cele‎.'),
          S("Spell the term for narrowing of the urethra", 'urethrostenosis', 'urethr/o + ‎-stenosis‎.', 'urethro…'),
          N('t2f:tr')
        ]
      },
      {
        id: 'tr9', title: "Prolapse and fistula", icon: '⬇️', items: [
          L("bladder prolapse", `${fig('cystocele-art', [], "cystocele")}${e('<b>cystocele</b>')}, or ${e('vesicocele')}, is the bladder bulging into the vaginal wall when the supporting tissue has weakened (after childbirth or with age). Its treatment is ${e('cystopexy')}, surgical fixation of the bladder.${fig('cystocele', ["Bladder, uterus and vagina"], "Cystocele in section")}`),
          L("Fistula", `${fig('vesicovaginal', ["Abnormal passage between the bladder and vagina"], "vesicovaginal fistula")}A ${e('<b>vesicovaginal fistula</b>')} is an abnormal passage between the bladder and the vagina through which urine leaks constantly.${memo("In Latin, fistula means “pipe”; an extra tunnel between two organs.")}`),
          M("The bladder bulging into the vaginal wall is…", ['cystocele', 'cystolith', 'cystitis', 'cystalgia'], 'cyst/o + ‎-cele‎.', null, F('cystocele-art', [])),
          M("The surgical treatment for a cystocele is…", ['cystopexy', 'cystectomy', 'nephropexy', 'lithotripsy'], "Fixation of the bladder."),
          T("A vesicocele is the same as a cystocele.", true, "vesic/o and cyst/o both mean bladder.", F('cystocele', [])),
          W("Build a word meaning “hernia of the bladder” (with the Latin root)", ['vesic/o', '-cele'], ['cyst/o', '-pexy', 'urethr/o'], 'vesicocele.'),
          P("Match each term to its meaning", [['cystocele', "bladder prolapse"], ['cystopexy', "fixation of the bladder"], ['vesicovaginal fistula', "passage from bladder to vagina"], ['urethrocystitis', "inflammation of the urethra and bladder"]], "Prolapse and fistula."),
          B("Abnormal discharge from the urethra is ___.", ['urethrorrhea', 'urethrorrhagia', 'urethralgia'], 'urethr/o + ‎-rrhea‎.'),
          S("Spell the term for the bladder bulging into the vaginal wall", 'cystocele', 'cyst/o + ‎-cele‎.', 'cysto…'),
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
    id: 'ur', sym: 'Ur', name: "Urine and Signs", short: "Urine and Signs", sub: "Urine composition and colour, urinalysis, specific gravity, urine volume, -uria signs, urea and creatinine, sodium and potassium",
    color: '#C99A06', dark: '#8F6D03', light: '#FDF6E1',
    levels: ["Urine and its testing", "Urine volume and voiding", "Abnormal urine and blood"],
    gens: EA.genIds('ur'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'ur1', title: "Normal urine", icon: '💛', items: [
          L("Composition of urine", `${fig('urine-composition', [], "Composition of urine")}${e('<b>urine</b>')} is about 95% water, and the rest is urea, creatinine, uric acid, salts and pigment. Urine is sterile in the kidney and bladder. The normal daily volume is about 1000 to 2000 mL.`),
          L("Urine colour", `${fig('urine-colors', [], "Urine colour")}Normal urine is straw to golden yellow and clear. Dark yellow urine is concentrated and may be a sign of dehydration; brown or black is a sign of serious disease.${memo("ur/o and urin/o both mean urine; -uria comes from the same root.")}`),
          M("The largest component of urine is…", ["water", "urea", "building-block nutrient", "sugar"], "About 95%.", null, F('urine-composition', [])),
          M("Dark yellow, concentrated urine is mostly a sign of what?", ["dehydration", "definite infection", "diabetes", "kidney stone"], 'dehydration.'),
          T("Healthy urine inside the bladder is sterile.", true, "It may become contaminated as it passes through the urethra.", F('urine-colors', [])),
          W("Build a word meaning “abnormal urine colour”", ['chromat/o', '-uria'], ['hemat/o', '-emia', 'py/o'], 'chromaturia.'),
          P("Match each component to its status", [['water', "about 95%"], ['urea', "main waste product"], ['glucose', "should be absent"], ['blood', "a sign of the disease"]], "Urine composition."),
          B("The adjective meaning “relating to urine” is ___.", ['urinary', 'urethral', 'ureteral'], 'urin/o + ‎-ary‎.'),
          S("Spell the term for the fluid made by the kidneys", 'urine', 'urin/o.', 'ur…'),
          N('t2f:ur')
        ]
      },
      {
        id: 'ur2', title: "urinalysis", icon: '🧪', items: [
          L("Three parts of the test", `${fig('ua-dipstick', [], "Urine dipstick")}A ${e('<b>urinalysis (UA)</b>')} has three parts:<br>1. <b>Physical</b>: colour, cloudiness (${e('turbidity')}) and specific gravity<br>2. <b>Chemical</b>: pH, sugar, ketones, blood and protein with a dipstick<br>3. <b>Microscopic</b>: cells, crystals and ${e('casts')}`),
          L("At the bedside", `${pearl("On the urinalysis sheet of Mr James Delgado, aged 55, the urine was “hazy”, blood 2+, leukocytes 2+, white cells 20 to 50 per field and bacteria 2+; that is, a urinary infection.")}${memo("A cast is a mould; cells or protein take the shape of the kidney tubule and are seen in the urine.")}`),
          M("The abbreviation UA means…", ['urinalysis', 'urine acid', 'uric analysis', 'ultrasound'], 'urinalysis.', null, F('ua-dipstick', [])),
          M("What are the moulds of kidney tubules found in urine called?", ['casts', 'calculi', 'crystals', 'rugae'], 'casts.'),
          T("Cloudy urine may be a sign of bacteria or pus.", true, 'turbidity.'),
          O("Put the three parts of urinalysis in order", ['physical', 'chemical', 'microscopic'], "Physical, chemical, microscopic."),
          P("Match each finding to its part of the test", [['color', "physical"], ['glucose', "chemical"], ['casts', "microscopic"], ['turbidity', "cloudiness"]], "Urinalysis."),
          B("Urine testing is ___.", ['urinalysis', 'urography', 'urometer'], 'urin/o + analysis.'),
          S("Spell the term for laboratory examination of urine", 'urinalysis', 'urin/o + analysis.', 'urina…'),
          N('f2t:ur')
        ]
      },
      {
        id: 'ur3', title: "Clean sample and specific gravity", icon: '🧫', items: [
          L("Sample and culture", `${fig('clean-catch', [], "clean sample")}A ${e('<b>clean-catch specimen</b>')} is a midstream urine sample taken after cleaning the urethral opening. ${e('<b>culture and sensitivity (C&S)</b>')} grows the microbe, identifies it and determines the effective antibiotic.`),
          L("specific gravity", `${fig('sg-scale', [], "specific gravity")}${e('<b>specific gravity (SG)</b>')} is the heaviness of urine compared with water (1.000) and is measured with a ${e('urinometer')}. Normal is about ${e('1.001–1.030')}; concentrated urine has a higher SG.${memo("The abbreviation CC in capitals means clean-catch; lowercase cc means the patient’s chief complaint.")}`),
          M("A midstream urine sample after cleansing is a…", ['clean-catch specimen', 'catheter specimen', '24-hour urine', 'random sample'], 'clean-catch.', null, F('clean-catch', [])),
          M("The instrument for measuring urine specific gravity is a…", ['urinometer', 'cystoscope', 'audiometer', 'tonometer'], 'urin/o + ‎-meter‎.'),
          T("Concentrated urine has a lower specific gravity.", false, "More concentrated means a higher SG.", F('sg-scale', [])),
          W("Build a word meaning “instrument for measuring urine”", ['urin/o', '-meter'], ['cyst/o', '-scope', 'nephr/o'], 'urinometer.'),
          P("Match each abbreviation to its meaning", [['CC', "clean sample"], ['C&S', "culture and sensitivity"], ['SG', "specific gravity"], ['UC', "urine culture"]], "Abbreviations."),
          B("The specific gravity of pure water is ___.", ['1.000', '1.030', '1.010'], "Urine is slightly heavier."),
          S("Spell the term for the instrument measuring urine specific gravity", 'urinometer', 'urin/o + ‎-meter‎.', 'urino…'),
          N('d2t:ur')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'ur4', title: "Urine volume", icon: '📏', items: [
          L("Little, a lot, none", `${fig('output-terms', [], "Urine volume")}• ${e('<b>anuria</b>')}: absence of urine (less than 100 mL a day)<br>• ${e('<b>oliguria</b>')}: scanty urine<br>• ${e('<b>polyuria</b>')}: excessive urine, as in diabetes<br>• ${e('<b>diuresis</b>')}: increased formation and passing of urine`),
          L("Urine-increasing drugs", `${e('<b>diuretic</b>')} is a substance or drug that causes diuresis; caffeine also increases urine. ${e('anuresis')} means not passing urine although urine is being made.${pearl("In the “Kidney calculator” tool, an output below 0.5 mL per kilogram per hour counts as scanty urine.")}${memo("olig/o means few and poly- means many; an- means none.")}`),
          M("Complete absence of urine production is…", ['anuria', 'oliguria', 'polyuria', 'nocturia'], 'an- + ‎-uria‎.', null, F('output-terms', [])),
          M("Excessive urine in diabetes is…", ['polyuria', 'oliguria', 'dysuria', 'pyuria'], 'poly- + ‎-uria‎.'),
          T("Diuretics increase urine volume.", true, 'diuretic.'),
          W("Build a word meaning “scanty urine”", ['olig/o', '-uria'], ['poly-', 'hemat/o', '-emia'], 'oliguria.'),
          P("Match each term to its meaning", [['anuria', "no urine"], ['oliguria', "scanty urine"], ['polyuria', "excessive urination"], ['diuresis', "increased urine output"]], "Urine volume."),
          B("A drug that increases urine is a ___.", ['diuretic', 'antibiotic', 'antispasmodic'], 'diuretic.'),
          S("Spell the term for scanty urine output", 'oliguria', 'olig/o + ‎-uria‎.', 'olig…'),
          N('t2f:ur')
        ]
      },
      {
        id: 'ur5', title: "Night, pain and thirst", icon: '🌙', items: [
          L("Three signs", `• ${e('<b>nocturia</b>')}: a lot of, or frequent, urination at night (${e('noct/i')} = night)<br>• ${e('<b>dysuria</b>')}: painful or difficult urination, as in cystitis<br>• ${e('<b>polydipsia</b>')}: excessive thirst (${e('dips/o')} = thirst), often with polyuria`),
          L("At the bedside", `${pearl("In the textbook’s applied scenario, Ms Jana Smith, who is training for a marathon and has eaten and drunk little, complains of painful urination, scanty urine and thirst; that is, dysuria, oliguria and polydipsia. Her test also showed a trace of ketones.")}${memo("nocturnal means at night; nocturia is night-time urination.")}`),
          M("Frequent urination at night is…", ['nocturia', 'enuresis', 'polyuria', 'anuria'], 'noct/i + ‎-uria‎.'),
          M(`${e('<b>polydipsia</b>')} means…`, ["excessive thirst", "excessive urine", "excessive hunger", "excessive tiredness"], 'poly- + dips/o + ‎-ia‎.'),
          T("dysuria means painful or difficult urination.", true, 'dys- + ‎-uria‎.'),
          W("Build a word meaning “excessive thirst”", ['poly-', 'dips/o', '-ia'], ['olig/o', '-uria', 'noct/i'], 'polydipsia.'),
          P("Match each of Jana Smith’s signs to its term", [['painful urination', 'dysuria'], ['scanty urine', 'oliguria'], ['thirst', 'polydipsia'], ['night urination', 'nocturia']], "Signs."),
          B("Painful urination is ___.", ['dysuria', 'nocturia', 'pyuria'], 'dys- + ‎-uria‎.'),
          S("Spell the term for frequent urination at night", 'nocturia', 'noct/i + ‎-uria‎.', 'noct…'),
          N('m2r:ur')
        ]
      },
      {
        id: 'ur6', title: "Blood and pus in the urine", icon: '🩸', items: [
          L("Red or cloudy urine", `• ${e('<b>hematuria</b>')}: blood in the urine (${e('hemat/o')} = blood)<br>• ${e('<b>pyuria</b>')}: pus in the urine (${e('py/o')} = pus)<br>• ${e('<b>bacteriuria</b>')}: bacteria in the urine<br>• ${e('<b>chromaturia</b>')}: abnormal urine colour`),
          L("At the bedside", `${pearl("In a case exercise in one of the appendix chapters, Ms Heather, aged 40, came with frequency, painful urination and blood in her urine; her urine was cloudy, foul-smelling and contained bacteria: hematuria and bacteriuria.")}${vs(['pyuria', "py/o = pus"], ['pyelitis', "pyel/o = renal pelvis"])}${memo("hem means blood; hematuria means bloody urine. pyuria is pus in the urine, not the renal pelvis!")}`),
          M("Blood in the urine is…", ['hematuria', 'pyuria', 'bacteriuria', 'albuminuria'], 'hemat/o + ‎-uria‎.'),
          M(`${e('<b>pyuria</b>')} means…`, ["pus in the urine", "inflammation of the renal pelvis", "blood in the urine", "excessive urine"], "py/o = pus."),
          T("py/o and pyel/o mean the same thing.", false, "py/o is pus and pyel/o the renal pelvis."),
          W("Build a word meaning “bacteria in the urine”", ['bacteri/o', '-uria'], ['py/o', '-emia', 'hemat/o'], 'bacteriuria.'),
          P("Match each term to its meaning", [['hematuria', "blood in the urine"], ['pyuria', "pus in the urine"], ['bacteriuria', "bacteria in the urine"], ['chromaturia', "abnormal urine colour"]], "Abnormal urine."),
          B("Cloudy urine with many white cells means ___.", ['pyuria', 'glycosuria', 'ketonuria'], "Pus in the urine."),
          S("Spell the term for blood in the urine", 'hematuria', 'hemat/o + ‎-uria‎.', 'hema…'),
          N('t2f:ur')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'ur7', title: "Sugar, ketones and protein", icon: '🍬', items: [
          L("What should not be in urine", `• ${e('<b>glycosuria</b>')}: sugar in the urine; as in uncontrolled diabetes<br>• ${e('<b>ketonuria</b>')}: ketones in the urine; when the body burns fat instead of sugar (diabetes, starvation)<br>• ${e('<b>proteinuria</b>')}: protein in the urine; glomerular damage<br>• ${e('<b>albuminuria</b>')}: albumin in the urine; a sign of kidney disease`),
          L("At the bedside", `${pearl("In the textbook’s applied scenario, Brad Leighton is an 11-year-old boy with juvenile diabetes, and the doctor has ordered a urinalysis for acetone, ketones, sugar, specific gravity and pH.")}${memo("glyc/o and glycos/o mean sugar, as in glucose.")}`),
          M("Sugar in the urine is…", ['glycosuria', 'ketonuria', 'proteinuria', 'pyuria'], 'glycos/o + ‎-uria‎.'),
          M("In which condition are ketones in the urine mostly seen?", ["uncontrolled diabetes or starvation", "kidney stone", "cystitis", "enlarged prostate"], "Fat burning."),
          T("proteinuria can be a sign of glomerular damage.", true, "A healthy glomerulus does not let protein through."),
          W("Build a word meaning “protein in the urine”", ['protein/o', '-uria'], ['glycos/o', '-emia', 'keton/o'], 'proteinuria.'),
          P("Match each term to its meaning", [['glycosuria', "sugar in the urine"], ['ketonuria', "ketones in the urine"], ['albuminuria', "albumin in the urine"], ['proteinuria', "protein in the urine"]], "Abnormal urine."),
          B("Albumin in the urine is ___.", ['albuminuria', 'azoturia', 'glycosuria'], 'albumin/o + ‎-uria‎.'),
          S("Spell the term for sugar in the urine", 'glycosuria', 'glycos/o + ‎-uria‎.', 'glyco…'),
          N('f2t:ur')
        ]
      },
      {
        id: 'ur8', title: "Wastes in the blood", icon: '☠️', items: [
          L("Azotemia and uremia", `${fig('uremia-art', [], "uremia")}• ${e('<b>azotemia</b>')}: excess nitrogenous wastes, especially urea, in the blood (${e('azot/o')})<br>• ${e('<b>uremia</b>')}: the toxic state caused by build-up of urea and wastes in kidney failure<br>• ${e('<b>azoturia</b>')}: increased nitrogenous wastes in the urine`),
          L("Blood tests", `${tbl([["test", "What it measures"], [e('BUN'), "blood urea nitrogen"], [e('creatinine clearance'), "comparing 24-hour urine creatinine with blood creatinine"], [e('eGFR'), "estimating glomerular filtration from creatinine"], [e('ACR'), "urine albumin-to-creatinine ratio"]])}${memo("azote is the French name for nitrogen; azot/o means nitrogenous wastes.")}`),
          M("The toxic build-up of urea in the blood in kidney failure is…", ['uremia', 'hematuria', 'glycosuria', 'diuresis'], 'ur/o + ‎-emia‎.', null, F('uremia-art', [])),
          M("The abbreviation BUN means…", ['blood urea nitrogen', 'bladder urine nitrate', 'basic urinary nitrogen', 'blood uric number'], "Blood urea nitrogen."),
          T("azotemia means a lot of nitrogenous waste in the urine.", false, "azotemia is in the blood; in the urine it is azoturia."),
          W("Build a word meaning “nitrogenous wastes in the blood”", ['azot/o', '-emia'], ['ur/o', '-uria', 'hemat/o'], 'azotemia.'),
          P("Match each test to its purpose", [['BUN', "urea in the blood"], ['eGFR', "estimate of glomerular function"], ['ACR', "urine albumin in diabetes"], ['creatinine clearance', "urine and blood creatinine"]], "The tests."),
          B("The abbreviation eGFR means ___ glomerular filtration rate.", ['estimated', 'effective', 'excretory'], "Estimated."),
          S("Spell the term for toxic waste build-up in the blood in kidney failure", 'uremia', 'ur/o + ‎-emia‎.', 'ure…'),
          N('m2r:ur')
        ]
      },
      {
        id: 'ur9', title: "Electrolytes and fluids", icon: '🧂', items: [
          L("Sodium and potassium", `${fig('electrolytes', [], "electrolytes")}The root ${e('natr/o')} comes from ${e('natrium')} (sodium) and the root ${e('kal/i')} from ${e('kalium')} (potassium):<br>• ${e('<b>hypernatremia</b>')} and ${e('<b>hyponatremia</b>')}: high and low blood sodium<br>• ${e('<b>hyperkalemia</b>')} and ${e('<b>hypokalemia</b>')}: high and low potassium; both cause heart arrhythmias`),
          L("Water and protein", `• ${e('<b>edema</b>')}: fluid build-up in the tissues; in kidney failure and nephrotic syndrome<br>• ${e('<b>dehydration</b>')}: loss of body water<br>• ${e('<b>acidosis</b>')}: body fluids becoming acidic<br>• ${e('<b>hypoproteinemia</b>')}: low blood protein${pearl("Diuretics also remove potassium; that is why a potassium (K) supplement is sometimes prescribed.")}${memo("Na and K are chemical symbols, from the Latin names natrium and kalium.")}`),
          M("High blood potassium is…", ['hyperkalemia', 'hypernatremia', 'hypokalemia', 'hyponatremia'], 'hyper- + kal/i + ‎-emia‎.', null, F('electrolytes', [])),
          M("Fluid build-up in the tissues is…", ['edema', 'dehydration', 'acidosis', 'uremia'], 'edema.'),
          T("The chemical symbol for sodium is Na, from the Latin name natrium.", true, 'natr/o.'),
          W("Build a word meaning “low blood sodium”", ['hypo-', 'natr/o', '-emia'], ['hyper-', 'kal/i', '-uria'], 'hyponatremia.'),
          P("Match each term to its meaning", [['hypernatremia', "high sodium"], ['hypokalemia', "low potassium"], ['natriuresis', "sodium loss in the urine"], ['kaliuresis', "potassium loss in the urine"]], "Electrolytes."),
          B("Body fluids becoming acidic is ___.", ['acidosis', 'alkalosis', 'ketonuria'], "-osis = condition."),
          S("Spell the term for high blood potassium", 'hyperkalemia', 'hyper- + kal/i + ‎-emia‎.', 'hyperk…'),
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
    id: 'dz', sym: 'Dz', name: "Urinary Diseases", short: "Diseases", sub: "Urinary infection and pyelonephritis, glomerulonephritis and nephrotic syndrome, stones and hydronephrosis, kidney failure, polycystic kidney and tumours",
    color: '#E2683C', dark: '#A94420', light: '#FDEBE3',
    levels: ["Infection and inflammation", "Stones and failure", "Cysts, anomalies and tumours"],
    gens: EA.genIds('dz'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'dz1', title: "urinary infection", icon: '🦠', items: [
          L("From the bottom up", `${fig('uti-ascending', [], "Ascending infection")}A ${e('<b>urinary tract infection (UTI)</b>')} usually starts in the urethra with gut bacteria such as E. coli and reaches the bladder (${e('cystitis')}) and sometimes the kidney. It is more common in women because the urethra is shorter.`),
          L("Signs", `Signs of cystitis: ${e('dysuria')}, ${e('frequency')} and ${e('urgency')}, sometimes ${e('hematuria')}. A urinary catheter in hospital raises the risk of infection.${pearl("The mucous membrane is continuous from the urethral opening to the kidney; that is why a simple bladder infection must never be ignored.")}${memo("Inflammation of the bladder is cystitis and inflammation of the urethra is urethritis; both are built with the suffix -itis.")}`),
          M("The commonest microbe in urinary infection is…", ['E. coli', "chain-forming bacterium", "virus", "fungus (yeast or mould)"], "A gut bacterium.", null, F('uti-ascending', [])),
          M("Inflammation of the bladder is…", ['cystitis', 'nephritis', 'pyelitis', 'urethritis'], 'cyst/o + ‎-itis‎.'),
          T("Urinary infection is more common in women.", true, "A shorter urethra, close to the anus."),
          O("Put the route of an ascending infection in order", ['urethra', 'bladder', 'ureter', 'kidney'], "Urethra, bladder, ureter, kidney."),
          P("Match each inflammation to its site", [['urethritis', "urethra"], ['cystitis', "bladder"], ['ureteritis', "ureter"], ['pyelonephritis', "renal pelvis and kidney"]], "The inflammations."),
          B("The abbreviation UTI means ___ tract infection.", ['urinary', 'ureteral', 'uterine'], "Urinary tract infection."),
          S("Spell the term for inflammation of the urethra", 'urethritis', 'urethr/o + ‎-itis‎.', 'ureth…'),
          N('t2f:dz')
        ]
      },
      {
        id: 'dz2', title: "Pyelonephritis", icon: '🔥', items: [
          L("Kidney infection", `${e('<b>pyelonephritis</b>')} is inflammation of the renal pelvis and kidney, usually climbing up from an untreated cystitis.${tbl([['', e('cystitis'), e('pyelonephritis')], ["Location", "bladder; superficial", "renal pelvis and kidney"], ["symptom", "burning, frequency, urgency", "fever, chills, flank pain"], ["test", "pyuria, bacteriuria", "plus a raised white blood cell count"]])}`),
          L("At the bedside", `${pearl("A case study in Fremgen’s textbook: a 32-year-old woman came with fever, chills, urgency, frequency, painful urination and blood in her urine. Her urine was cloudy and foul-smelling. Urinalysis showed pyuria and bacteriuria, and the diagnosis was acute pyelonephritis arising from cystitis.")}${memo("pyelonephritis has three pieces: pyel/o renal pelvis, nephr/o kidney and -itis inflammation; three pieces, one disease.")}`),
          M("Inflammation of the renal pelvis and kidney is…", ['pyelonephritis', 'glomerulonephritis', 'cystitis', 'nephrosis'], 'pyel/o + nephr/o + ‎-itis‎.'),
          M("Which sign points more to pyelonephritis than to cystitis?", ["fever and flank pain", "burning on urination", "frequent urination", "urgency"], "Kidney involvement."),
          T("Pyelonephritis often arises from a bladder infection that has climbed up.", true, "An ascending infection."),
          W("Build a word meaning “inflammation of the renal pelvis and kidney”", ['pyel/o', 'nephr/o', '-itis'], ['cyst/o', '-lith', 'glomerul/o'], 'pyelonephritis.'),
          P("Match each finding to its meaning", [['pyuria', "pus in the urine"], ['bacteriuria', "bacteria in the urine"], ['flank pain', "pain in the side of the back"], ['urgency', "sudden strong need to pass urine"]], "The findings."),
          B("Infection of the renal pelvis alone is ___.", ['pyelitis', 'pyuria', 'nephritis'], 'pyel/o + ‎-itis‎.'),
          S("Spell the term for infection of the renal pelvis and kidney", 'pyelonephritis', 'pyel/o + nephr/o + ‎-itis‎.', 'pyelo…'),
          N('f2t:dz')
        ]
      },
      {
        id: 'dz3', title: "Glomerulonephritis and nephrosis", icon: '🧶', items: [
          L("The inflamed filter", `${fig('glomerulo-art', [], "glomerulonephritis")}${e('<b>glomerulonephritis</b>')} is inflammation of the kidney, especially the glomeruli, often after a streptococcal throat or skin infection, or with lupus. Signs: high blood pressure, oedema, ${e('oliguria')}, ${e('hematuria')} and ${e('proteinuria')}.`),
          L("nephrotic syndrome", `${e('<b>nephrotic syndrome</b>')} or ${e('nephrosis')}: the glomerulus becomes too permeable and a lot of protein is lost in the urine; the result is ${e('hypoproteinemia')}, oedema and high blood lipids. ${e('interstitial nephritis')} is inflammation of the tissue between the tubules.${memo("In glomerulonephritis the roots go from small to large: first glomerul/o (glomerulus), then nephr/o (kidney) and finally -itis.")}`),
          M("Inflammation of the glomeruli and kidney is…", ['glomerulonephritis', 'pyelonephritis', 'cystitis', 'urethritis'], 'Bright disease.', null, F('glomerulo-art', [])),
          M("The main feature of nephrotic syndrome is…", ["a lot of protein in the urine", "kidney stone", "pus in the urine", "excessive urine"], 'proteinuria.'),
          T("Glomerulonephritis often follows a streptococcal infection.", true, "An immune reaction."),
          W("Build a word meaning “inflammation of the glomeruli and kidney”", ['glomerul/o', 'nephr/o', '-itis'], ['pyel/o', '-lith', 'cyst/o'], 'glomerulonephritis.'),
          P("Match each finding to its meaning", [['proteinuria', "protein in the urine"], ['hypoproteinemia', "low blood protein"], ['edema', "swelling"], ['hematuria', "blood in the urine"]], "The findings."),
          B("Another name for nephrotic syndrome is ___.", ['nephrosis', 'nephritis', 'nephroma'], 'nephr/o + ‎-osis‎.'),
          S("Spell the two-word term for heavy protein loss with oedema", 'nephrotic syndrome', "Two words.", 'nephro…'),
          N('d2t:dz')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'dz4', title: "Stones", icon: '🪨', items: [
          L("Where the stones lodge", `${fig('stones-sites', [], "Where the stones lodge")}A ${e('<b>calculus</b>')} (plural ${e('calculi')}) is a stone made of mineral salts such as calcium:<br>• ${e('<b>nephrolithiasis</b>')}: kidney stones<br>• ${e('<b>ureterolith</b>')}: a stone in the ureter<br>• ${e('<b>cystolith</b>')}: a bladder stone<br>Causes: dehydration, infection, ${e('urinary stasis')} and metabolic disorders.`),
          L("On the figure and photo", `${fig('stones-tract', ["Stones in the kidney, ureter, bladder and urethra"], "Stones along the urinary route")}${fig('staghorn', ["Staghorn stone in the kidney"], "staghorn calculus")}A ${e('staghorn calculus')} is a large stone that fills the renal pelvis and calyces.${memo("In Latin, calculus means pebble; the word calculate also comes from counting with pebbles.")}`),
          M("A kidney stone is a…", ['nephrolithiasis', 'nephroptosis', 'nephromegaly', 'nephrosis'], 'nephr/o + lith/o + ‎-iasis‎.', null, F('stones-sites', [])),
          M("The plural of calculus is…", ['calculi', 'calculuses', 'calcula', 'calculae'], 'calculi.'),
          T("A staghorn calculus fills the renal pelvis and calyces.", true, 'staghorn calculus.', F('staghorn', [])),
          W("Build a word meaning “bladder stone”", ['cyst/o', '-lith'], ['nephr/o', '-tripsy', 'pyel/o'], 'cystolith.'),
          P("Match each stone to its location", [['nephrolith', "kidney"], ['ureterolith', "ureter"], ['cystolith', "bladder"], ['urolith', "anywhere in the urinary tract"]], "Stone locations."),
          B("Stagnant urine that causes stones and infection is ___.", ['urinary stasis', 'urinary frequency', 'diuresis'], 'stasis.'),
          S("Spell the term for the disease of kidney stones", 'nephrolithiasis', 'nephr/o + lith/o + ‎-iasis‎.', 'nephroli…'),
          N('t2f:dz')
        ]
      },
      {
        id: 'dz5', title: "Colic and hydronephrosis", icon: '💥', items: [
          L("blockage", `${fig('hydronephrosis-art', [], "hydronephrosis")}When a stone or narrowing (${e('stricture')}) blocks the ureter:<br>• ${e('<b>renal colic</b>')}: severe, wave-like flank pain<br>• ${e('<b>hydroureter</b>')}: the ureter swells with urine<br>• ${e('<b>hydronephrosis</b>')}: urine collects in the renal pelvis and calyces and the kidney swells`),
          L("On the textbook figure", `${fig('hydronephrosis', ["Hydronephrosis, hydroureter and stricture"], "hydronephrosis")}${pearl("In a case exercise in one of the appendix chapters, a 65-year-old man had abdominal pain with a kidney stone, hydroureter and right hydronephrosis; his right kidney was small and scarred (hypoplastic), and he was admitted for nephrectomy.")}${memo("hydr/o means water: hydronephrosis means a “water-logged kidney”.")}`),
          M("Urine collecting in the renal pelvis from a blockage is…", ['hydronephrosis', 'nephrosis', 'nephroptosis', 'pyelitis'], 'hydr/o + nephr/o + ‎-osis‎.', null, F('hydronephrosis-art', [])),
          M("Severe flank pain as a stone passes is…", ['renal colic', 'cystalgia', 'dysuria', 'urgency'], 'renal colic.'),
          T("hydroureter means swelling of the ureter with urine behind a blockage.", true, 'hydr/o + ureter.', F('hydronephrosis', [])),
          O("Put the events of a ureteral blockage in order", ['stone blocks ureter', 'hydroureter', 'hydronephrosis', 'kidney damage'], "Blockage, swollen ureter, swollen kidney, damage."),
          P("Match each term to its meaning", [['stricture', "narrowing"], ['renal colic', "severe wave-like pain from a stone"], ['hydroureter', "swollen ureter"], ['hydronephrosis', "swollen kidney"]], "Obstruction."),
          B("Dilation of the renal pelvis is ___.", ['pyelectasis', 'pyelitis', 'pyeloplasty'], 'pyel/o + ‎-ectasis‎.'),
          S("Spell the term for a kidney swollen with trapped urine", 'hydronephrosis', 'hydr/o + nephr/o + ‎-osis‎.', 'hydro…'),
          N('m2r:dz')
        ]
      },
      {
        id: 'dz6', title: "kidney failure", icon: '⚠️', items: [
          L("Acute and chronic", `${fig('renal-failure-art', [], "Acute and chronic kidney failure")}• ${e('<b>acute renal failure (ARF)</b>')} or ${e('AKI')}: sudden loss of kidney function from shock, toxins or injury; if the tubules die, ${e('acute tubular necrosis (ATN)')}<br>• ${e('<b>chronic renal failure (CRF)</b>')} or ${e('CKD')}: gradual loss of nephrons<br>• ${e('<b>end-stage renal disease (ESRD)</b>')}: the final stage; dialysis or transplant`),
          L("Consequences", `Dehydration at first, then oedema, high blood pressure, anaemia (lack of EPO), acidosis, high potassium and ${e('uremia')}. ${e('renal insufficiency')} is a milder loss of kidney function.${pearl("In the “Kidney calculator” tool, an eGFR below 15 means stage G5, or kidney failure.")}${memo("necr/o means death: acute tubular necrosis means sudden death of the kidney tubules.")}`),
          M("The final, irreversible stage of kidney failure is…", ['ESRD', 'ARF', 'UTI', 'BNO'], 'end-stage renal disease.', null, F('renal-failure-art', [])),
          M("What causes anaemia in chronic kidney failure?", ["lack of erythropoietin", "excess renin", "lack of ADH", "excess urea in the urine"], "Low EPO."),
          T("Acute kidney failure is sudden and sometimes reversible.", true, "ARF or AKI."),
          O("Put the course of chronic failure in order", ['renal insufficiency', 'chronic renal failure', 'end-stage renal disease', 'dialysis or transplant'], "From mild to replacement therapy."),
          P("Match each abbreviation to its meaning", [['ARF', "acute failure"], ['CRF', "chronic failure"], ['ATN', "acute tubular necrosis"], ['ESRD', "end stage"]], "Abbreviations."),
          B("The abbreviation CKD means chronic ___ disease.", ['kidney', 'kalium', 'ketone'], "Chronic kidney disease."),
          S("Spell the two-word term for loss of kidney function", 'renal failure', "Two words.", 'renal…'),
          N('t2f:dz')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'dz7', title: "Diabetes, blood pressure and the kidney", icon: '🩺', items: [
          L("The kidney’s silent enemies", `• ${e('<b>diabetic nephropathy</b>')}: damage to the glomerular capillaries from long-term high blood sugar<br>• ${e('<b>renal hypertension</b>')}: high blood pressure caused by kidney disease<br>• ${e('<b>nephrosclerosis</b>')}: hardening of kidney tissue<br>• ${e('<b>diabetes insipidus</b>')}: lack of ADH; a lot of dilute urine and extreme thirst`),
          L("At the bedside", `${pearl("In the textbook’s applied scenario, Ms Jocelyn Workus, aged 25, has diabetes and her kidneys are damaged. Her record lists nephromegaly, nephritis, uremia, anuria and trigonitis, and she is on the kidney transplant waiting list.")}${vs(['diabetes mellitus', "diabetes mellitus; sugar in the urine"], ['diabetes insipidus', "diabetes insipidus; low ADH"])}${memo("insipidus means tasteless; in the old days urine was tasted, and these patients’ urine was not sweet!")}`),
          M("Kidney damage from diabetes is…", ['diabetic nephropathy', 'diabetes insipidus', 'nephroptosis', 'pyelitis'], 'nephr/o + ‎-pathy‎.'),
          M("A lack of which hormone causes diabetes insipidus?", ['ADH', 'EPO', 'renin', 'insulin'], 'antidiuretic hormone.'),
          T("Kidney disease can raise blood pressure.", true, 'renal hypertension.'),
          W("Build a word meaning “hardening of the kidney”", ['nephr/o', '-sclerosis'], ['cyst/o', '-malacia', 'pyel/o'], 'nephrosclerosis.'),
          P("Match each term in Jocelyn’s record to its meaning", [['nephromegaly', "enlarged kidney"], ['nephritis', "kidney inflammation"], ['anuria', "no urine"], ['trigonitis', "inflammation of the trigone"]], "The record."),
          B("Abnormal softening of the kidney is ___.", ['nephromalacia', 'nephromegaly', 'nephrosclerosis'], 'nephr/o + ‎-malacia‎.'),
          S("Spell the term for any disease of the kidney", 'nephropathy', 'nephr/o + ‎-pathy‎.', 'nephro…'),
          N('f2t:dz')
        ]
      },
      {
        id: 'dz8', title: "Cysts and anomalies", icon: '🫧', items: [
          L("polycystic kidney", `${fig('polycystic-art', [], "polycystic kidney")}${e('<b>polycystic kidney disease (PKD)</b>')} is an inherited disease in which many cysts gradually replace kidney tissue and lead to failure.${fig('polycystic-photo', ["Polycystic kidney: surface and section"], "polycystic kidney")}`),
          L("Anomalies", `${fig('congenital-art', [], "Kidney anomalies")}• ${e('<b>horseshoe kidney</b>')}: two kidneys joined at the lower ends<br>• ${e('<b>renal hypoplasia</b>')}: an underdeveloped kidney<br>• ${e('<b>nephroptosis</b>')}: a drooping kidney (floating kidney)<br>• ${e('<b>hypospadias</b>')} and ${e('<b>epispadias</b>')}: the urethral opening on the underside or upper side of the penis; congenital and treatable with surgery<br>• ${e('atresia')}: congenital closure or narrowing of an opening${memo("The prefix hypo- means under and epi- means upon: hypospadias is the lower opening and epispadias the upper one.")}`),
          M("An inherited disease with many cysts in the kidney is…", ['polycystic kidney disease', 'horseshoe kidney', 'nephroptosis', 'hydronephrosis'], 'PKD.', null, F('polycystic-drawing', ["Polycystic kidney and its section"])),
          M("Two kidneys joined at their lower poles are a…", ['horseshoe kidney', 'renal hypoplasia', 'nephromegaly', 'ureterocele'], "Horseshoe.", null, F('horseshoe-kidney', ["horseshoe kidney"])),
          T("hypospadias means the urethral opening is on the upper surface of the penis.", false, "hypospadias is the lower one; the upper one is epispadias."),
          W("Build a word meaning “drooping of the kidney”", ['nephr/o', '-ptosis'], ['cyst/o', '-megaly', 'ren/o'], 'nephroptosis.'),
          P("Match each anomaly to its meaning", [['horseshoe kidney', "kidneys fused at their lower poles"], ['renal hypoplasia', "underdeveloped kidney"], ['epispadias', "upper urethral opening"], ['atresia', "congenital closure"]], "Anomalies."),
          B("Enlargement of the kidney is ___.", ['nephromegaly', 'nephromalacia', 'nephroptosis'], 'nephr/o + ‎-megaly‎.'),
          S("Spell the term meaning “having many cysts”", 'polycystic', 'poly- + cyst/o + ‎-ic‎.', 'poly…'),
          N('d2t:dz')
        ]
      },
      {
        id: 'dz9', title: "Tumours", icon: '🎗️', items: [
          L("Kidney and bladder tumours", `${fig('kidney-tumors', [], "Tumours")}• ${e('<b>Wilms tumor</b>')} or ${e('<b>nephroblastoma</b>')}: a malignant kidney tumour in children under 5<br>• ${e('<b>renal cell carcinoma</b>')}: cancer of the kidney tubule cells in adults; ${e('hypernephroma')}<br>• ${e('<b>bladder cancer</b>')}: cancer of the bladder; key sign painless blood in the urine; smoking is an important risk factor<br>• ${e('nephroma')}: any kidney tumour`),
          L("On the photo", `${fig('kidney-cancer', ["Removed kidney with a tumour"], "kidney cancer")}${fig('bladder-tumor', ["Bladder tumour seen through a cystoscope"], "Bladder tumour at cystoscopy")}${memo("blast/o means immature cell; a nephroblastoma is a tumour of a child’s immature kidney cells.")}`),
          M("A malignant kidney tumour in children is…", ['Wilms tumor', 'renal cell carcinoma', 'bladder cancer', 'cystolith'], 'nephroblastoma.', null, F('kidney-tumors', [])),
          M("The key sign of bladder cancer is…", ["painless blood in the urine", "fever and chills", "excessive urine", "flank pain with a stone"], 'painless hematuria.'),
          T("Smoking is an important risk factor for bladder cancer.", true, "Along with occupational chemicals.", F('bladder-tumor', [])),
          W("Build a word meaning “tumour of the kidney”", ['nephr/o', '-oma'], ['cyst/o', '-itis', 'pyel/o'], 'nephroma.'),
          P("Match each tumour to its feature", [['Wilms tumor', "children"], ['renal cell carcinoma', "adults, kidney tubule"], ['bladder cancer', "painless blood"], ['nephroma', "any kidney tumour"]], "Tumours."),
          B("Another name for Wilms tumour is ___.", ['nephroblastoma', 'nephrolith', 'nephrosclerosis'], 'blast/o.'),
          S("Spell the term for the childhood kidney tumour of immature cells", 'nephroblastoma', 'nephr/o + blast/o + ‎-oma‎.', 'nephrob…'),
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
    id: 'tx', sym: 'Tx', name: "diagnosis and treatment", short: "diagnosis and treatment", sub: "KUB, IVP and pyelography, cystoscopy, catheterization, haemodialysis and peritoneal dialysis, lithotripsy, kidney and bladder operations, transplant and drugs",
    color: '#17A398', dark: '#0E6E66', light: '#E2F6F3',
    levels: ["Imaging and endoscopy", "Catheterization, dialysis and lithotripsy", "Surgery, transplant and drugs"],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'tx1', title: "X-rays with and without contrast", icon: '🩻', items: [
          L("Four X-rays", `${fig('imaging-art', [], "Imaging")}• ${e('<b>KUB</b>')}: a plain abdominal X-ray of the kidneys, ureters and bladder, without contrast<br>• ${e('<b>IVP / IVU</b>')}: contrast injected into a vein and excreted by the kidney<br>• ${e('<b>retrograde pyelography (RP)</b>')}: contrast from below through a cystoscope into the ureter and renal pelvis<br>• ${e('<b>VCUG</b>')}: contrast in the bladder and X-rays taken while voiding`),
          L("On the image", `${fig('iv-urogram', ["Renal pelves, ureters and bladder on an intravenous urogram"], "Intravenous urogram")}${fig('retrograde-xray', ["Retrograde pyelogram"], "Retrograde pyelogram")}${memo("The prefix retro- means backwards; in RP the contrast travels against the urine flow, from below upwards.")}`),
          M("The X-ray that gives contrast through a vein is…", ['intravenous pyelography', 'retrograde pyelography', 'KUB', 'cystoscopy'], 'IVP.', null, F('imaging-art', [])),
          M("A plain abdominal X-ray without contrast is…", ['KUB', 'IVP', 'VCUG', 'RP'], 'flat-plate abdomen.'),
          T("In VCUG, the X-rays are taken while voiding.", true, 'voiding cystourethrography.', F('iv-urogram', [])),
          W("Build a word meaning “X-ray imaging of the renal pelvis”", ['pyel/o', '-graphy'], ['cyst/o', '-scope', 'nephr/o'], 'pyelography.'),
          P("Match each abbreviation to its meaning", [['KUB', "kidney, ureter, bladder"], ['IVP', "intravenous pyelography"], ['RP', "retrograde pyelography"], ['VCUG', "X-ray while voiding"]], "Imaging."),
          B("The abbreviation IVU means intravenous ___.", ['urography', 'ureteroscopy', 'urinalysis'], "Intravenous urography."),
          S("Spell the term meaning “moving backwards”", 'retrograde', 'retro- + grade.', 'retro…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: "Images and scans", icon: '📷', items: [
          L("-gram and -graphy", `${tbl([["Term", "Meaning"], [e('cystogram'), "image of the bladder"], [e('nephrogram'), "image of the kidney"], [e('pyelogram'), "image of the renal pelvis"], [e('urogram'), "image of the urinary tract"], [e('renogram'), "nuclear scan of kidney function"], [e('renal angiography'), "X-ray of the kidney’s vessels"]])}`),
          L("Ultrasound and biopsy", `${e('<b>ultrasonography (US)</b>')} uses sound waves to show kidney size, cysts, tumours and blockage; beforehand the patient drinks plenty of water to fill the bladder. ${e('<b>renal biopsy</b>')} is sampling with a needle under ultrasound guidance.${fig('urogram-xray', ["Kidneys and ureters on a urogram"], "Excretory urogram")}${memo("The suffix -gram is the image itself and -graphy the method of taking it.")}`),
          M("An image of the kidney is a…", ['nephrogram', 'cystogram', 'pyelogram', 'renogram'], 'nephr/o + ‎-gram‎.'),
          M("The imaging method using sound waves is…", ['ultrasonography', 'cystography', 'urography', 'angiography'], 'US.'),
          T("-gram means the image itself and -graphy the method of recording it.", true, "Record and recording.", F('urogram-xray', [])),
          W("Build a word meaning “image of the bladder”", ['cyst/o', '-gram'], ['nephr/o', '-scopy', 'pyel/o'], 'cystogram.'),
          P("Match each term to its meaning", [['cystogram', "image of the bladder"], ['pyelogram', "image of the renal pelvis"], ['renogram', "kidney function scan"], ['renal biopsy', "kidney tissue sampling"]], "The images."),
          B("The abbreviation US means ___.", ['ultrasonography', 'urinary scan', 'urethral stent'], "Ultrasonography."),
          S("Spell the term for “imaging with sound waves”", 'ultrasonography', 'ultra + son/o + ‎-graphy‎.', 'ultra…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: "Cystoscopy and cystometry", icon: '🔭', items: [
          L("looking inside the bladder", `${fig('cystoscopy-art', [], "cystoscopy")}A ${e('<b>cystoscope</b>')} is an optical instrument passed through the urethra into the bladder. ${e('<b>cystoscopy</b>')} is for seeing tumours and inflammation, taking biopsies and removing stones and polyps. Similar instruments: ${e('urethroscope')}, ${e('ureteroscope')} and ${e('nephroscopy')}.`),
          L("On the textbook figure", `${fig('cystoscopy', ["Cystoscope in the urethra and bladder"], "cystoscopy")}${e('<b>cystometrography (CMG)</b>')} measures bladder function: the bladder is filled and the wall pressure is recorded; its tracing is a ${e('cystometrogram')}.${memo("The suffix -scope is the instrument and -scopy the procedure with it; you hold a cystoscope and perform a cystoscopy.")}`),
          M("The instrument for looking inside the bladder is a…", ['cystoscope', 'cystoscopy', 'urinometer', 'nephroscope'], "-scope = instrument.", null, F('cystoscopy-art', [])),
          M("The test that measures bladder pressure during filling is…", ['cystometrography', 'cystography', 'urinalysis', 'renogram'], 'CMG.'),
          T("Cystoscopy is also used for biopsy and removing stones.", true, 'cysto.', F('cystoscopy', [])),
          W("Build a word meaning “instrument for viewing the ureter”", ['ureter/o', '-scope'], ['cyst/o', '-graphy', 'urethr/o'], 'ureteroscope.'),
          P("Match each instrument or method to its use", [['cystoscopy', "viewing the bladder"], ['urethroscope', "instrument for viewing the urethra"], ['nephroscopy', "looking inside the kidney"], ['cystometrography', "measuring bladder pressure"]], "Endoscopy."),
          B("The abbreviation cysto means ___.", ['cystoscopy', 'cystitis', 'cystocele'], "Cystoscopy."),
          S("Spell the term for looking inside the bladder", 'cystoscopy', 'cyst/o + ‎-scopy‎.', 'cysto…'),
          N('d2t:tx')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'tx4', title: "catheterization", icon: '🧷', items: [
          L("Urinary catheter", `${fig('catheter-art', [], "Foley catheter")}A ${e('<b>catheter</b>')} is a flexible tube for removing or introducing fluid. ${e('<b>catheterization (cath)</b>')} is passing a catheter through the urethra into the bladder. A ${e('<b>Foley catheter</b>')} is an indwelling catheter with a balloon that holds it in the bladder.`),
          L("On the textbook figure", `${fig('foley-female', ["Foley catheter in a female bladder"], "Foley catheter")}${fig('catheter-bag', ["Emptying the urine bag"], "Catheter bag")}A ${e('condom catheter')} is an external catheter with a sheath and leg bag. With a catheter, ${e('intake and output (I&O)')} is recorded accurately.${memo("In Greek, catheter means “something sent down”; a catheter sends urine down.")}`),
          M("An indwelling catheter with a balloon is a…", ['Foley catheter', 'condom catheter', 'ureteral stent', 'cystoscope'], 'Foley.', null, F('catheter-art', [])),
          M("The abbreviation cath means…", ['catheterization', 'cathartic', 'cystoscopy', 'calculus'], "Catheterization."),
          T("A urinary catheter lowers the risk of urinary infection.", false, "A catheter raises the risk of UTI.", F('catheter-female', ["Catheter in a female bladder and a separate catheter"])),
          O("Put the steps of catheterization in order", ['clean the meatus', 'insert catheter', 'inflate balloon', 'drain urine'], "Cleaning, inserting, inflating, draining."),
          P("Match each term to its meaning", [['catheter', "tube for draining fluid"], ['Foley catheter', "indwelling catheter"], ['condom catheter', "external catheter"], ['I&O', "fluid intake and output"]], "Catheterization."),
          B("The abbreviation EUD means external urinary ___.", ['drainage', 'dialysis', 'device'], "External urinary device."),
          S("Spell the term for inserting a tube into the bladder", 'catheterization', "catheter + -ization; spelling trap: cathaterization.", 'cathe…'),
          N('m2r:tx')
        ]
      },
      {
        id: 'tx5', title: "filtering the blood by machine", icon: '🫀', items: [
          L("The artificial kidney", `${fig('hemodialysis-art', [], "filtering the blood by machine")}${e('<b>dialysis</b>')} means the passage of substances through a semipermeable membrane. In ${e('<b>hemodialysis (HD)</b>')} the patient’s blood passes through the dialysis machine and the ${e('dialysate')} draws out urea and excess potassium; usually 4 hours, three times a week.`),
          L("On the image", `${fig('hemodialysis', ["Haemodialysis machine and blood lines"], "filtering the blood by machine")}${fig('hemodialysis-photo', ["Patient during haemodialysis"], "Dialysis patient")}${pearl("The haemodialysis technician records the patient’s weight and vital signs before and after dialysis and watches the machine.")}${memo("The prefix dia- means through and -lysis means separating: separating substances through a membrane.")}`),
          M("Cleaning the blood with an artificial kidney machine is…", ['hemodialysis', 'peritoneal dialysis', 'lithotripsy', 'catheterization'], 'hem/o + dialysis.', null, F('hemodialysis-art', [])),
          M("What is the dialysis fluid called?", ['dialysate', 'filtrate', 'urine', 'plasma'], 'dialysate.'),
          T("Haemodialysis is usually done three times a week.", true, "About 4 hours each time.", F('hemodialysis', [])),
          O("Put the route of blood in haemodialysis in order", ['patient artery', 'blood line', 'dialyzer', 'back to vein'], "From the patient to the machine and back."),
          P("Match each term to its meaning", [['dialysis', "passage through a membrane"], ['hemodialysis', "dialysis of the blood"], ['dialysate', "cleansing fluid used in dialysis"], ['HD', "filtering the blood by machine"]], "Dialysis."),
          B("The dialysis membrane is ___; it lets some substances through.", ['semipermeable', 'impermeable', 'calcified'], "Semipermeable."),
          S("Spell the term for cleaning the blood with an artificial kidney", 'hemodialysis', 'hem/o + dialysis.', 'hemo…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx6', title: "peritoneal dialysis", icon: '🧴', items: [
          L("The peritoneum is the filter", `${fig('pd-art', [], "peritoneal dialysis")}In ${e('<b>peritoneal dialysis</b>')} dialysis fluid enters the peritoneal cavity through a catheter, stays for a few hours while wastes pass into it from the blood, and is then drained out. The peritoneum acts as the dialysis membrane.`),
          L("Types", `${tbl([["abbreviation", "Meaning"], [e('CAPD'), "continuous ambulatory peritoneal dialysis; several times a day"], [e('CCPD'), "cycling peritoneal dialysis; at night with a machine"], [e('IPD'), "abdominal dialysis done at intervals"]])}${fig('peritoneal-dialysis', ["Dialysis fluid in and out"], "peritoneal dialysis")}${memo("peritone/o means peritoneum; peritoneal dialysis means dialysis using the peritoneum.")}`),
          M("In peritoneal dialysis, what acts as the membrane?", ['peritoneum', 'dialyzer', 'glomerulus', 'bladder'], "The peritoneum.", null, F('pd-art', [])),
          M("Peritoneal dialysis that the patient does during the day while walking around is…", ['CAPD', 'CCPD', 'HD', 'ESWL'], 'continuous ambulatory.'),
          T("CCPD is mostly done at night with a machine.", true, 'continuous cyclic.', F('peritoneal-dialysis', [])),
          O("Put one cycle of peritoneal dialysis in order", ['fill cavity with dialysate', 'dwell several hours', 'drain used fluid'], "Filling, dwelling, draining."),
          P("Match each abbreviation to its meaning", [['CAPD', "continuous ambulatory"], ['CCPD', "cycling overnight"], ['IPD', "intermittent"], ['HD', "filtering the blood by machine"]], "Types of dialysis."),
          B("The adjective meaning “relating to the peritoneum” is ___.", ['peritoneal', 'perirenal', 'peritubular'], 'peritone/o + ‎-al‎.'),
          S("Spell the adjective meaning “of the peritoneum”", 'peritoneal', 'peritone/o + ‎-al‎.', 'perit…'),
          N('f2t:tx')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'tx7', title: "Stone crushing and removal", icon: '🔨', items: [
          L("Without or with an incision", `${fig('eswl-art', [], "extracorporeal shock wave lithotripsy")}• ${e('<b>lithotripsy</b>')}: crushing a stone so it passes in the urine<br>• ${e('<b>extracorporeal shock wave lithotripsy (ESWL)</b>')}: shock waves from outside the body; no surgery<br>• ${e('<b>lithotomy</b>')}: an incision to remove a stone<br>• ${e('<b>nephrolithotomy</b>')}: removing a stone from the kidney; the percutaneous type goes through the skin with an endoscope`),
          L("On the textbook figure", `${fig('eswl-machine', ["Lithotripsy table and machine"], "ESWL machine")}${fig('ureteral-stent', ["Stent from kidney to bladder"], "ureteral stent")}${fig('lithotripsy-bag', ["The wave reaches the kidney from a water bag"], "Lithotripsy with a water bag")}A ${e('ureteral stent')} is a thin tube in the ureter that lets urine pass a blockage.${memo("The prefix extra- (outside) + corpor/o (body) + -eal: extracorporeal means outside the body.")}`),
          M("Crushing stones with waves from outside the body is…", ['ESWL', 'lithotomy', 'nephrectomy', 'cystoscopy'], 'extracorporeal.', null, F('eswl-art', [])),
          M("An incision into the kidney to remove a stone is…", ['nephrolithotomy', 'nephropexy', 'nephrostomy', 'nephrorrhaphy'], 'nephr/o + lith/o + ‎-tomy‎.'),
          T("ESWL does not need a surgical incision.", true, 'noninvasive.', F('eswl-beam', ["Focused beam on the kidney stone"])),
          W("Build a word meaning “crushing a stone”", ['lith/o', '-tripsy'], ['nephr/o', '-tomy', 'cyst/o'], 'lithotripsy.'),
          P("Match each method to its meaning", [['lithotripsy', "crushing a stone"], ['lithotomy', "incision for a stone"], ['pyelolithotomy', "stone from the renal pelvis"], ['ureteral stent', "tube in the ureter"]], "Stone treatment."),
          B("After lithotripsy, the urine is ___ to find the fragments.", ['strain', 'heat', 'freeze'], "Straining the urine."),
          S("Spell the term for crushing stones", 'lithotripsy', "lith/o + -tripsy; spelling trap: lithotripsey.", 'litho…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx8', title: "Kidney and bladder surgery", icon: '🩹', items: [
          L("Surgical suffixes", `${fig('surgery-suffixes', [], "Surgical suffixes")}${e('nephrectomy')} is removal of a kidney, ${e('nephrostomy')} an opening from the kidney to the skin, ${e('pyeloplasty')} repair of the renal pelvis, ${e('cystectomy')} removal of the bladder, ${e('cystopexy')} fixation of the bladder and ${e('meatotomy')} an incision of the urethral opening to widen it.`),
          L("When there is no bladder", `${fig('stent-conduit', [], "Stent and ileal conduit")}${fig('ileal-conduit', ["Ureters joined to a piece of ileum"], "ileal conduit")}After a ${e('cystectomy')}, the ureters are joined to a piece of ileum that opens on the abdomen: an ${e('<b>ileal conduit</b>')} or ${e('urostomy')}.${memo("Three similar suffixes: -tomy means incision, -ectomy removal and -stomy a new opening; the letters e and s make the difference.")}`),
          M("Removal of a kidney is…", ['nephrectomy', 'nephrotomy', 'nephrostomy', 'nephropexy'], '‎-ectomy‎.', null, F('surgery-suffixes', [])),
          M("An artificial opening in the abdomen for urine to leave is…", ['urostomy', 'cystotomy', 'urethropexy', 'lithotomy'], 'ur/o + ‎-stomy‎.'),
          T("nephropexy means fixing a kidney that has dropped.", true, "-pexy = fixation."),
          W("Build a word meaning “repair of the renal pelvis”", ['pyel/o', '-plasty'], ['nephr/o', '-ectomy', 'cyst/o'], 'pyeloplasty.'),
          P("Match each operation to its meaning", [['cystectomy', "removal of the bladder"], ['cystopexy', "fixation of the bladder"], ['nephrorrhaphy', "suturing of the kidney"], ['meatotomy', "incision of the urethral opening"]], "The operations."),
          B("Making an opening into the bladder through the abdominal wall is ___.", ['cystostomy', 'cystotomy', 'cystectomy'], 'cyst/o + ‎-stomy‎.'),
          S("Spell the term for removal of a kidney", 'nephrectomy', 'nephr/o + ‎-ectomy‎.', 'neph…'),
          N('m2r:tx')
        ]
      },
      {
        id: 'tx9', title: "Transplant and drugs", icon: '💊', items: [
          L("kidney transplant", `${fig('transplant-art', [], "kidney transplant")}In ${e('<b>renal transplantation</b>')} the donor kidney is placed in the lower abdomen, beside the iliac vessels, and its ureter is joined to the bladder; the patient’s own kidneys usually stay in place.${fig('renal-transplant', ["Transplanted kidney and the patient’s kidneys"], "Site of the transplanted kidney")}`),
          L("Drugs", `${tbl([["drug", "Job"], [e('antibiotic'), "treating urinary infection; e.g. ciprofloxacin"], [e('diuretic'), "increasing urine output; e.g. furosemide"], [e('antispasmodic'), "reducing bladder spasm; e.g. oxybutynin"], [e('anticholinergic'), "treating an overactive bladder"], [e('ACE inhibitor'), "lowering blood pressure"]])}${memo("The prefix anti- means against: antibiotic against microbes, antispasmodic against spasm.")}`),
          M("Where is a transplanted kidney usually placed?", ["lower abdomen beside the iliac vessels", "in place of the patient’s kidney", "behind the bladder", "under the diaphragm"], 'iliac fossa.', null, F('transplant-iliac', ["Transplanted kidney and iliac vessels"])),
          M("A drug that reduces bladder spasm is…", ['antispasmodic', 'diuretic', 'antibiotic', 'ACE inhibitor'], 'oxybutynin.'),
          T("In a kidney transplant, the patient’s own kidneys are always removed.", false, "They usually stay in place.", F('renal-transplant', [])),
          O("Put the steps of a kidney transplant in order", ['find a matching donor', 'place kidney near iliac vessels', 'connect ureter to bladder', 'follow-up'], "Donation, placement, connection, follow-up."),
          P("Match each drug to its job", [['antibiotic', "urinary infection"], ['diuretic', "increasing urine"], ['antispasmodic', "bladder spasm"], ['ACE inhibitor', "blood pressure"]], "Drugs."),
          B("The well-known urine-increasing drug furosemide is a ___.", ['diuretic', 'antibiotic', 'antispasmodic'], 'water pill.'),
          S("Spell the term for a drug that increases urine output", 'diuretic', "Spelling trap: not diuritic.", 'diur…'),
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
    { id: 'lx-0', w: 'lx', lv: 0, name: "Nephry", title: "The curious bean kidney", shape: 'kidney', color: '#C8574F', acc: ['sparkle'], bio: "A happy kidney that filters about 180 litres of blood a day; nephr/o and ren/o are its names." },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Rooty", title: "Master of nephr/o and cyst/o", shape: 'book', color: '#B0413E', acc: ['glasses'], bio: "A living dictionary that breaks every urinary word into root, prefix and suffix and never mixes up ureter and urethra." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Puzzly", title: "King of the -uria suffix", shape: 'puzzle', color: '#7E2A28', acc: ['crown'], bio: "Places an-, olig/o and poly- beside -uria, -lith and -tripsy and builds new words." },
    { id: 'kd-0', w: 'kd', lv: 0, name: "Glomy", title: "The blood-filtering tuft", shape: 'glom', color: '#F6DC8F', acc: ['sparkle'], bio: "The capillary tuft inside Bowman capsule; it lets water, salt and urea out of the blood but keeps back cells and protein." },
    { id: 'kd-1', w: 'kd', lv: 1, name: "Tubey", title: "Reabsorption Champion", shape: 'tube', color: '#F2C94C', acc: ['glasses'], bio: "From the proximal convoluted tubule to the loop of Henle, it returns most of the water and sugar to the blood so the body does not dry out." },
    { id: 'kd-2', w: 'kd', lv: 2, name: "EPO Courier", title: "Messenger to the bone marrow", shape: 'envelope', color: '#D9443A', acc: ['crown'], bio: "Carries erythropoietin from the kidney to the bone marrow to make red blood cells; its friend renin raises blood pressure." },
    { id: 'tr-0', w: 'tr', lv: 0, name: "Yellow Drop", title: "Traveller of the ureter", shape: 'drop', color: '#F2C94C', acc: ['sparkle'], bio: "Rides the peristaltic waves down the ureter and drops into the bladder every 10 to 30 seconds." },
    { id: 'tr-1', w: 'tr', lv: 1, name: "Bladdy", title: "The elastic urine store", shape: 'bladder', color: '#F2B3A6', acc: ['glasses'], bio: "Stretches with its rugae folds and, at about 300 to 400 mL, sends the signal to empty through the detrusor muscle." },
    { id: 'tr-2', w: 'tr', lv: 2, name: "Sphincter Lock", title: "Guardian of bladder control", shape: 'lock', color: '#8E2F2A', acc: ['crown'], bio: "The external sphincter is voluntary; if it weakens, stress incontinence follows." },
    { id: 'ur-0', w: 'ur', lv: 0, name: "Sample Cup", title: "Clean-catch hunter", shape: 'cup', color: '#F6E27A', acc: ['sparkle'], bio: "Catches only the middle of the stream (clean-catch) so skin microbes do not spoil the test." },
    { id: 'ur-1', w: 'ur', lv: 1, name: "Dipstick", title: "Urinalysis Reader", shape: 'ruler', color: '#9CCC65', acc: ['glasses'], bio: "Each square is a test: sugar, ketones, blood, protein, pH and specific gravity; every positive square is an -uria." },
    { id: 'ur-2', w: 'ur', lv: 2, name: "Electrolyte Scales", title: "Guardian of sodium and potassium", shape: 'scale', color: '#2B86C5', acc: ['crown'], bio: "Tells hypernatremia from hypokalemia and knows how the kidney keeps blood pH steady." },
    { id: 'dz-0', w: 'dz', lv: 0, name: "Pebble", title: "Troublemaker of the renal pelvis", shape: 'stone', color: '#B08A5A', acc: ['sparkle'], bio: "A calcium-salt kidney stone that causes renal colic and hydronephrosis when it lodges in the ureter." },
    { id: 'dz-1', w: 'dz', lv: 1, name: "Antibody", title: "E. coli Hunter", shape: 'yab', color: '#3F8A05', acc: ['glasses'], bio: "Fights the microbes climbing up the urethra so cystitis does not become pyelonephritis." },
    { id: 'dz-2', w: 'dz', lv: 2, name: "Nephron Shield", title: "Guardian of the kidney filter", shape: 'shield', color: '#6D4BC3', acc: ['crown'], bio: "Protects the glomeruli from diabetes and high blood pressure so things never reach chronic kidney failure." },
    { id: 'tx-0', w: 'tx', lv: 0, name: "Dialyzer", title: "The artificial kidney", shape: 'capsule', color: '#17A398', acc: ['sparkle'], bio: "Passes blood across a semipermeable membrane so urea and excess potassium move into the dialysis fluid." },
    { id: 'tx-1', w: 'tx', lv: 1, name: "eGFR Meter", title: "Calculator of kidney function", shape: 'meter', color: '#2B86C5', acc: ['glasses'], bio: "Works out eGFR from creatinine, age and sex and names the chronic kidney disease stage from G1 to G5." },
    { id: 'tx-2', w: 'tx', lv: 2, name: "Nephra’s Scribe", title: "Master of the urology chart", shape: 'clipboard', color: '#7E2A28', acc: ['cape', 'crown'], bio: "Reads UA, KUB, IVP, ESWL and CAPD at a glance and stays with you from urinalysis to kidney transplant." }
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
      id: 'r1', w: 'lx', title: "Referral to a urologist", who: "Betty Garble, a 46-year-old woman",
      brief: "In the textbook’s applied scenario, the family doctor has referred Mrs Betty Garble, who has had five children, to a urologist because she has trouble controlling her urine. You must explain to her who a urologist is and which structure controls the release of urine.",
      chart: [['Age', '46'], ['CC', 'trouble controlling urine'], ['Referral', 'urologist']],
      fig: { a: 'specialists', l: [] },
      steps: [
        M("specialist", "Who is a urologist?", ["specialist in diseases of the urinary tract and male reproductive system", "kidney and dialysis specialist", "women’s health specialist", "nerve specialist"], 'ur/o + ‎-logist‎.'),
        M("Term", "The medical term for “inability to hold urine” is…", ['incontinence', 'retention', 'anuria', 'dysuria'], 'urinary incontinence.'),
        M("Structure", "Which structure controls the voluntary release of urine?", ['external urethral sphincter', 'internal urethral sphincter', 'trigone', 'detrusor muscle'], "The external sphincter is voluntary.", null, { a: ['bladder-art'], l: [] }),
        T("Childbirth", "Many births can weaken the supporting tissue of the pelvis and cause stress incontinence.", true, 'stress incontinence.'),
        P("Term", "Match each term to its meaning", [['urology', "surgical specialty of the urinary tract"], ['continence', "bladder control"], ['incontinence', "inability to hold urine"], ['urologist', "urinary tract specialist"]], "The textbook’s applied scenario."),
        S("Spelling", "Spell the medical term for loss of bladder control", 'incontinence', 'in- + continence.', 'incon…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: "A record full of terms", who: "Harvey Mews, a 90-year-old man",
      brief: "In the textbook’s applied scenario, you are entering Mr Harvey Mews’s paper record into the electronic record. It says: renogram, cystitis, diabetes, hemodialysis, KUB, cystoscopy, cystourethrogram and cystotomy. You must sort procedures, imaging and diseases.",
      chart: [['Age', '90'], ['Dx', 'cystitis, diabetes'], ['Imaging', 'renogram, KUB, cystourethrogram'], ['Procedures', 'hemodialysis, cystoscopy, cystotomy']],
      fig: { a: 'wordparts', l: [] },
      steps: [
        P("Category", "Match each term to its category", [['renogram', "Imaging"], ['cystitis', "disease"], ['hemodialysis', "treatment"], ['cystoscopy', "looking inside with a scope (endoscopy)"]], "Sorting."),
        M("suffix", "The suffix -tomy in cystotomy means…", ["incision", "removal", "viewing", "recording"], "cystotomy = incision into the bladder."),
        M("abbreviation", "KUB means…", ['kidneys, ureters, bladder', 'kidney urine balance', 'kidney ultrasound', 'kidney urea blood'], "A plain abdominal X-ray.", null, { a: ['imaging-art'], l: [] }),
        T("Term", "A cystourethrogram is an image of the bladder and urethra.", true, 'cyst/o + urethr/o + ‎-gram‎.'),
        M("root", "The root ren/o in renogram means…", ["kidney", "bladder", "urine", "renal pelvis"], "renogram = kidney scan."),
        S("Spelling", "Spell the term for bladder inflammation", 'cystitis', 'cyst/o + ‎-itis‎.', 'cys…')
      ]
    },
    {
      id: 'r3', w: 'lx', title: "Rewriting with abbreviations", who: "Chart note (the textbook’s applied scenario)",
      brief: "The textbook’s applied scenario contains this note: “The patient has recurrent urinary tract infections confirmed by urinalysis and a history of extracorporeal shock wave lithotripsy for a kidney stone. A voiding cystourethrogram, retrograde pyelogram, kidney-ureter-bladder X-ray and intravenous pyelogram were done.” You must rewrite it with abbreviations.",
      chart: [['Hx', 'frequent infections, stones'], ['Tests', 'urinalysis, four imaging studies'], ['Plan', 'refer back to urologist']],
      fig: { a: 'imaging-art', l: [] },
      steps: [
        P("abbreviation", "Match each phrase to its abbreviation", [['urinary tract infection', 'UTI'], ['urinalysis', 'UA'], ['extracorporeal shock wave lithotripsy', 'ESWL'], ['voiding cystourethrogram', 'VCUG']], "Abbreviations."),
        P("abbreviation", "Match each imaging study to its abbreviation", [['retrograde pyelogram', 'RP'], ['kidneys, ureters, bladder', 'KUB'], ['intravenous pyelogram', 'IVP'], ['voiding cystogram', 'VCG']], "The imaging studies."),
        M("Difference", "In which X-ray is contrast given through a vein?", ['IVP', 'RP', 'VCUG', 'KUB'], 'intravenous.'),
        T("abbreviation", "ESWL does not need a surgical incision.", true, 'extracorporeal.', { a: ['eswl-art'], l: [] }),
        M("Term", "lithotripsy means…", ["crushing a stone", "incision for a stone", "kidney stone", "Stone X-ray"], 'lith/o + ‎-tripsy‎.'),
        S("Spelling", "Spell the term for a urine test", 'urinalysis', 'urin/o + analysis.', 'urina…')
      ]
    },
    /* ================= کلیه و نفرون ================= */
    {
      id: 'r4', w: 'kd', title: "Third grade: how does the kidney work?", who: "Mr Mark Grey’s class",
      brief: "In the textbook’s applied scenario, Mr Mark Grey, a third-grade teacher, has asked you to explain the structure and work of the kidney to the children: what the kidney is made of, what urine contains and which route it takes.",
      chart: [['Audience', 'third-grade class'], ['Topic', 'kidney structure and function'], ['Questions', 'parts, urine, flow']],
      fig: { a: 'kidney-section-art', l: [] },
      steps: [
        M("Section", "What is the outer part of the kidney called?", ['cortex', 'medulla', 'pelvis', 'hilum'], 'renal cortex.', null, { a: ['kidney-section-art'], l: [] }),
        M("unit", "The smallest unit that makes urine is the…", ['nephron', 'calyx', 'ureter', 'pyramid'], "More than a million in each kidney."),
        T("urine", "Urine is about 95% water.", true, "Plus urea, salt and wastes."),
        O("Path", "Put the route of urine in order for the children", ['nephron', 'calyx', 'renal pelvis', 'ureter', 'bladder', 'urethra'], "From the nephron to the outside."),
        P("Term", "Match each part to its simple description", [['glomerulus', "blood filter"], ['renal pelvis', "collecting funnel"], ['ureter', "tube to the bladder"], ['bladder', "holding bag"]], "Plain language."),
        S("Spelling", "Spell the term for the kidney’s filtering unit", 'nephron', 'nephr/o.', 'neph…')
      ]
    },
    {
      id: 'r5', w: 'kd', title: "Following the flow", who: "Cohen’s “Follow the Flow” exercise",
      brief: "In the review exercise in Cohen’s textbook you must put the formation and movement of urine in order, from blood reaching the glomerulus to leaving through the urethra, and link each step to its part of the nephron.",
      chart: [['Start', 'blood flows through glomerulus'], ['Middle', 'filtrate, reabsorption, collecting ducts'], ['End', 'urethra']],
      fig: { a: 'urine-formation', l: [] },
      steps: [
        O("flow", "Put the steps in order", ['blood enters glomerulus', 'filtrate enters nephron', 'tubular reabsorption', 'urine to collecting ducts', 'renal pelvis to ureters', 'bladder to urethra'], "The textbook’s order."),
        M("Step", "In which part do water and nutrients return to the blood?", ['peritubular capillaries', 'glomerular capsule', 'urethra', 'calyx'], "Reabsorption."),
        M("vessel", "The arteriole that carries blood away from the glomerulus is the…", ['efferent arteriole', 'afferent arteriole', 'renal vein', 'aorta'], "Efferent.", null, { a: ['renal-blood'], l: [] }),
        T("Hormone", "ADH increases water reabsorption and concentrates the urine.", true, 'antidiuretic hormone.'),
        P("Step", "Match each step to where it happens", [['filtration', "kidney capillary tuft (glomerulus)"], ['reabsorption', "tubule to capillary"], ['secretion', "capillary to tubule"], ['storage', "bladder"]], "Where the steps happen."),
        S("Spelling", "Spell the term for the capillary tuft in Bowman capsule", 'glomerulus', 'glomerul/o.', 'glom…')
      ]
    },
    {
      id: 'r6', w: 'kd', title: "Creatine or creatinine?", who: "Mr Chavez, an inpatient",
      brief: "In a look-alike words exercise in one of the appendix chapters, Mr Chavez has been admitted with glomerulonephritis, and his tests show an abnormal level of one of the urine waste products. You must choose the right word and work out what this substance says about kidney function.",
      chart: [['Dx', 'glomerulonephritis'], ['Lab', 'abnormal urinary creatinine'], ['Concern', 'kidney function']],
      fig: { a: 'glomerulo-art', l: [] },
      steps: [
        M("Trap", "Which should be written in the record?", ['creatinine', 'creatine', 'keratin', 'creatinase'], "creatinine is a waste product."),
        M("Meaning", "Where does creatinine come from?", ["muscle metabolism", "fat metabolism", "liver", "red blood cell"], 'waste of muscle metabolism.'),
        T("Kidney function", "A rising blood creatinine is a sign of reduced kidney function.", true, "A sign of failure."),
        M("Index", "Which number estimates kidney function from creatinine, age and sex?", ['eGFR', 'SG', 'pH', 'BUN'], 'estimated GFR.', null, { a: ['egfr-gauge'], l: [] }),
        P("Term", "Match each term to its meaning", [['glomerulonephritis', "inflammation of the glomeruli and kidney"], ['creatinine', "muscle waste product"], ['creatine', "muscle compound"], ['clearance', "clearing of plasma"]], "The traps."),
        S("Spelling", "Spell the term for the muscle waste product cleared by the kidneys", 'creatinine', "Two n’s.", 'creat…')
      ]
    },
    /* ================= مثانه و دفع ادرار ================= */
    {
      id: 'r7', w: 'tr', title: "Incontinence on the golf course", who: "Jade, a 52-year-old woman",
      brief: "A case study in Cohen’s textbook: Jade is a 52-year-old woman with a history of stress incontinence who has cut down on exercise because of leaking urine under physical strain. To join a clinical trial she had a clean-catch sample, cystometry (CMG) and cystoscopy and kept a bladder diary for two weeks. Muscle cells from her thigh were cultured and injected around the urethra, and a year later she was 95% better.",
      chart: [['Age', '52'], ['Dx', 'stress incontinence'], ['Tests', 'clean-catch, CMG, cystoscopy'], ['Tx', 'muscle stem cell injection']],
      fig: { a: 'incontinence-types', l: [] },
      steps: [
        M("Term", "Leaking urine when coughing, exercising or straining is…", ['stress incontinence', 'urge incontinence', 'enuresis', 'urinary retention'], 'stress.'),
        M("Test", "What does cystometry (CMG) measure?", ["bladder pressure during filling", "Urine colour", "kidney size", "blood sugar"], 'cystometrography.'),
        T("symptom", "nocturia means urinating at night.", true, "It was asked about in Jade’s history."),
        O("Process", "Put Jade’s course in order", ['urologic history', 'clean-catch and CMG', 'stem cell injection', 'follow-up at 3 months'], "From assessment to follow-up."),
        P("Term", "Match each term to its meaning", [['urgency', "sudden strong need to pass urine"], ['frequency', "frequent urination"], ['cystoscopy', "looking inside the bladder"], ['sphincter', "ring muscle"]], 'Case Study.'),
        S("Spelling", "Spell the term for an endoscopic view of the bladder", 'cystoscopy', 'cyst/o + ‎-scopy‎.', 'cysto…')
      ]
    },
    {
      id: 'r8', w: 'tr', title: "bladder neck obstruction", who: "Inpatient with right flank pain",
      brief: "A discharge summary in Fremgen’s textbook: a man with a history of recurrent bladder infections was admitted with severe right flank pain and blood in his urine. A clean-catch urinalysis showed hematuria and pyuria without albuminuria. Cystoscopy showed chronic cystitis and a congenital bladder neck obstruction. The patient was catheterized so the bladder could empty completely.",
      chart: [['Admit Dx', 'right side pain, hematuria'], ['Final Dx', 'pyelonephritis R kidney; chronic cystitis'], ['Finding', 'bladder neck obstruction'], ['Tx', 'catheterization, antibiotics, fluids']],
      fig: { a: 'bladder-art', l: [] },
      steps: [
        M("abbreviation", "BNO means…", ['bladder neck obstruction', 'bilateral nephric outflow', 'bladder nerve output', 'blood nitrogen oxide'], "Bladder neck obstruction."),
        M("treatment", "Why was the patient catheterized?", ["so the bladder could empty completely", "for a contrast X-ray", "to inject a drug into the kidney", "for lithotripsy"], "Relieving retention.", null, { a: ['catheter-art'], l: [] }),
        T("finding", "pyuria means pus in the urine.", true, 'py/o + ‎-uria‎.'),
        M("Cause", "The likely cause of this patient’s chronic cystitis is…", ["bladder neck obstruction", "a left kidney stone", "diabetes", "dehydration"], "Stagnant urine brings infection."),
        P("Term", "Match each term to its meaning", [['hematuria', "blood in the urine"], ['albuminuria', "albumin in the urine"], ['catheterization', "passing a tube into the bladder"], ['chronic cystitis', "chronic inflammation of the bladder"]], 'Discharge Summary.'),
        S("Spelling", "Spell the term for passing a catheter", 'catheterization', 'catheter + ‎-ization‎.', 'cathe…')
      ]
    },
    {
      id: 'r9', w: 'tr', title: "Temporary incontinence", who: "A 50-year-old woman",
      brief: "A chart note in Gylys’s textbook: a 50-year-old woman has had diffuse pelvic pain and bladder spasms since a cystoscopy 10 days ago, which had shown severe cystitis. She urinates three to four times a night and has frequency and urgency. She has a history of polyuria, hematuria and incontinence. The doctor’s conclusion: the incontinence is caused by the cystitis and is temporary.",
      chart: [['Age', '50'], ['Sx', 'nocturia ×3–4, frequency, urgency'], ['Hx', 'polyuria, hematuria, incontinence'], ['Impression', 'incontinence from cystitis, temporary']],
      fig: { a: 'incontinence-types', l: [] },
      steps: [
        P("symptom", "Match each sign to its term", [['night urination', 'nocturia'], ['excessive urination', 'polyuria'], ['blood in urine', 'hematuria'], ['loss of bladder control', 'incontinence']], 'Chart Note.'),
        M("Cause", "What is causing this patient’s incontinence?", ["cystitis", "kidney stone", "spinal cord injury", "prostate"], 'impression.'),
        T("expected outcome (prognosis)", "The doctor considers the incontinence temporary.", true, 'temporary in nature.'),
        M("Term", "urgency means…", ["an immediate need to urinate", "excessive urine", "night-time urination", "painful urination"], 'urgency.'),
        M("Test", "In which procedure was the cystitis seen?", ['cystoscopy', 'KUB', 'renogram', 'urinalysis'], "Direct viewing of the bladder.", null, { a: ['cystoscopy-art'], l: [] }),
        S("Spelling", "Spell the term for night-time urination", 'nocturia', 'noct/i + ‎-uria‎.', 'noct…')
      ]
    },
    /* ================= ادرار و نشانه‌ها ================= */
    {
      id: 'r10', w: 'ur', title: "The urinalysis sheet", who: "James Delgado, a 55-year-old man in the emergency department",
      brief: "On the sample urinalysis sheet in one of the appendix chapters, Mr James Delgado’s clean-catch urine is yellow and hazy. Specific gravity 1.018, glucose normal, blood 2+, pH 5.0, protein trace, nitrite negative, leukocytes 2+, white cells 20 to 50 and bacteria 2+ are reported.",
      chart: [['Appearance', 'yellow, hazy'], ['SG', '1.018'], ['Blood / Leukocytes', '2+ / 2+'], ['WBC', '20–50 /HPF'], ['Bacteria', '2+']],
      fig: { a: 'ua-dipstick', l: [] },
      steps: [
        M("Interpretation", "What does this pattern mostly point to?", ["urinary infection", "diabetes", "simple dehydration", "Normal urine"], "High white cells and bacteria."),
        T("specific gravity", "A specific gravity of 1.018 is within the normal range.", true, "1.001 to 1.030.", { a: ['sg-scale'], l: [] }),
        P("finding", "Match each finding to its term", [['blood 2+', 'hematuria'], ['leukocytes 2+', 'pyuria'], ['bacteria 2+', 'bacteriuria'], ['hazy', 'turbidity']], "The findings."),
        M("Next step", "Which test is needed to find the microbe and the right antibiotic?", ['culture and sensitivity', 'KUB', 'cystoscopy', 'renogram'], 'C&S.'),
        M("Example", "Why was the sample taken by the clean-catch method?", ["to reduce contamination", "to concentrate the urine", "to measure the volume", "for a contrast X-ray"], "A clean midstream sample.", null, { a: ['clean-catch'], l: [] }),
        S("Spelling", "Spell the term for bacteria in the urine", 'bacteriuria', 'bacteri/o + ‎-uria‎.', 'bacteri…')
      ]
    },
    {
      id: 'r11', w: 'ur', title: "Diabetes and the dipstick", who: "Brad Leighton, an 11-year-old boy",
      brief: "In the textbook’s applied scenario, Brad Leighton is an 11-year-old boy with juvenile diabetes. The doctor has ordered a urinalysis for acetone, ketones, sugar, specific gravity and pH. You must know what each test means and say whether sugar is normally present in urine.",
      chart: [['Age', '11'], ['Dx', 'juvenile diabetes'], ['Order', 'UA: acetone, ketones, glucose, SG, pH']],
      fig: { a: 'ua-dipstick', l: [] },
      steps: [
        T("sugar", "Normal urine contains no sugar.", true, 'glucose: none.'),
        M("Term", "Sugar in the urine is…", ['glycosuria', 'ketonuria', 'hematuria', 'pyuria'], 'glycos/o + ‎-uria‎.'),
        M("ketones", "Ketones in the urine mean the body…", ["is burning fat instead of sugar", "has drunk a lot of water", "has an infection", "has a stone"], 'ketonuria.'),
        M("specific gravity", "What does specific gravity show?", ["the concentration of dissolved substances in urine", "Urine colour", "the number of bacteria", "the daily volume"], 'specific gravity.', null, { a: ['sg-scale'], l: [] }),
        P("Test", "Match each test to its meaning", [['glucose', "sugar"], ['ketones', "acids from fat breakdown"], ['pH', "acidic or alkaline"], ['SG', "specific gravity"]], "The dipstick."),
        S("Spelling", "Spell the term for ketones in the urine", 'ketonuria', 'keton/o + ‎-uria‎.', 'keto…')
      ]
    },
    {
      id: 'r12', w: 'ur', title: "The thirsty runner", who: "Jana Smith, a marathon runner",
      brief: "In the textbook’s applied scenario, Ms Jana Smith, who is training for a marathon and ate and drank little before running, complains of painful urination, scanty urine and thirst. Her test shows negative sugar, trace ketones and acetone, many white cells and positive red cells.",
      chart: [['Sx', 'painful, scanty urine; thirst'], ['Glucose', 'negative'], ['Ketones / acetone', 'trace'], ['WBC', 'large'], ['RBC', 'positive']],
      fig: { a: 'output-terms', l: [] },
      steps: [
        P("symptom", "Match each sign to its term", [['painful urination', 'dysuria'], ['scanty urine', 'oliguria'], ['thirst', 'polydipsia'], ['red cells in urine', 'hematuria']], "Signs."),
        M("ketones", "The likely cause of the trace ketones in this patient is…", ["hunger and hard exercise", "definite diabetes", "kidney stone", "kidney failure"], "Fat burning."),
        T("Priority", "Many white cells in the urine should be checked for infection.", true, 'pyuria.'),
        M("Volume", "oliguria means…", ["little urine", "excessive urine", "no urine", "night-time urination"], 'olig/o + ‎-uria‎.', null, { a: ['output-terms'], l: [] }),
        M("Advice", "Suitable advice for dehydration is…", ["drinking enough fluids", "a diuretic", "stopping food", "more exercise"], "Replacing fluids."),
        S("Spelling", "Spell the term for excessive thirst", 'polydipsia', 'poly- + dips/o + ‎-ia‎.', 'polyd…')
      ]
    },
    /* ================= بیماری‌های ادراری ================= */
    {
      id: 'r13', w: 'dz', title: "Fever, chills and burning urination", who: "A 32-year-old woman at the urology clinic",
      brief: "A case study in Fremgen’s textbook: a 32-year-old woman came with fever, chills and tiredness and reports urgency, frequency, painful urination and blood in her urine. Her urine is cloudy and foul-smelling. The doctor ordered a clean-catch urinalysis, culture and sensitivity and a KUB X-ray. Urinalysis showed pyuria, bacteriuria and a slightly acidic pH, and the diagnosis was acute pyelonephritis arising from cystitis. Antibiotics and drinking two litres of water a day were prescribed.",
      chart: [['Age', '32'], ['Sx', 'fever, chills, urgency, frequency, dysuria, hematuria'], ['UA', 'pyuria, bacteriuria'], ['Dx', 'acute pyelonephritis from cystitis'], ['Tx', 'antibiotic, push fluids']],
      fig: { a: 'uti-ascending', l: [] },
      steps: [
        M("diagnosis", "What are this patient’s two infections?", ["cystitis and pyelonephritis", "urethritis and nephrosis", "cystitis and nephrolithiasis", "pyelitis and glomerulonephritis"], "Bladder and kidney."),
        M("Path", "Which infection caused the other?", ["the cystitis climbed to the kidney", "the pyelonephritis came down to the bladder", "they were separate", "it came from the blood"], "An ascending infection.", null, { a: ['uti-ascending'], l: [] }),
        P("symptom", "Match each sign to its term", [['painful urination', 'dysuria'], ['blood in urine', 'hematuria'], ['pus in urine', 'pyuria'], ['need to urinate often', 'frequency']], 'Case Study.'),
        T("Test", "A KUB is a plain X-ray without contrast.", true, 'kidneys, ureters, bladder.'),
        O("Process", "Put the workflow in order", ['history and symptoms', 'clean-catch UA and C&S', 'KUB', 'antibiotic and fluids'], "From history to treatment."),
        S("Spelling", "Spell the term for inflammation of the renal pelvis and kidney", 'pyelonephritis', 'pyel/o + nephr/o + ‎-itis‎.', 'pyelo…')
      ]
    },
    {
      id: 'r14', w: 'dz', title: "staghorn calculus", who: "Helen, a 48-year-old woman",
      brief: "Case Study 14-1 in Cohen’s textbook: Helen is a 48-year-old woman with severe right flank pain that painkillers do not relieve. She has had a chronic urinary infection for three months and has been taking calcium supplements for osteoporosis for six months. An intravenous urogram showed a right staghorn calculus. The ureteral stone was broken up with a laser, a retrograde catheter was placed and a percutaneous nephrolithotomy was done. At discharge she was told to strain her urine for a week.",
      chart: [['Age', '48'], ['CC', 'severe right flank pain'], ['Hx', 'chronic UTI; calcium supplements'], ['Imaging', 'IV urogram: right staghorn calculus'], ['Tx', 'laser lithotripsy, percutaneous nephrolithotomy']],
      fig: { a: 'stones-sites', l: [] },
      steps: [
        M("stone", "What is a staghorn calculus?", ["a large stone filling the renal pelvis and calyces", "bladder stone", "gallbladder stones", "a small stone in the urethra"], "Antler-shaped.", null, { a: ['stones-sites'], l: [] }),
        M("Term", "percutaneous means…", ["through the skin", "under the skin", "on the surface", "with a catheter"], 'per- + cutane/o.'),
        M("treatment", "nephrolithotomy means…", ["incision into the kidney to remove a stone", "crushing a stone with waves", "removal of the kidney", "fixing a floating kidney"], 'nephr/o + lith/o + ‎-tomy‎.'),
        T("danger", "Taking calcium supplements can be a problem for someone who forms stones.", true, 'stone former.'),
        P("Term", "Match each term to its meaning", [['lithotripsy', "crushing a stone"], ['hematuria', "blood in the urine"], ['nocturia', "night-time urination"], ['IV urogram', "IV contrast X-ray"]], 'Case Study 14-1.'),
        S("Spelling", "Spell the term for crushing a stone", 'lithotripsy', 'lith/o + ‎-tripsy‎.', 'litho…')
      ]
    },
    {
      id: 'r15', w: 'dz', title: "The water-logged kidney", who: "A 65-year-old man",
      brief: "In a case exercise in one of the appendix chapters, a 65-year-old man with abdominal pain that had come and gone for two years was admitted. He had a kidney stone. Urography showed poor function of the right kidney, which was small and scarred (hypoplastic). On cystoscopy and MRI the right kidney was poorly positioned and a stricture was seen in the lower third of the ureter. Admission diagnosis: right hydroureter and hydronephrosis; he was admitted for nephrectomy.",
      chart: [['Age', '65'], ['Admit Dx', 'right hydroureter and hydronephrosis'], ['Findings', 'renal calculi, hypoplastic scarred kidney, distal ureteral stricture'], ['Plan', 'nephrectomy']],
      fig: { a: 'hydronephrosis-art', l: [] },
      steps: [
        M("Term", "hydronephrosis means…", ["urine collecting and the renal pelvis swelling from a blockage", "kidney inflammation", "kidney stone", "small kidney"], 'hydr/o + nephr/o + ‎-osis‎.', null, { a: ['hydronephrosis-art'], l: [] }),
        M("Term", "stricture means…", ["narrowing", "widening", "stone", "inflammation"], 'narrowing.'),
        T("Term", "A hypoplastic kidney is an underdeveloped kidney.", true, 'hypo- + ‎-plasia‎.'),
        M("treatment", "nephrectomy means…", ["removal of the kidney", "incision into the kidney", "fixing a floating kidney", "repair of the renal pelvis"], 'nephr/o + ‎-ectomy‎.'),
        P("Term", "Match each term to its meaning", [['hydroureter', "swollen ureter"], ['distal', "away from the centre"], ['urography', "X-ray of the urinary tract"], ['renal calculi', "kidney stones"]], "The record."),
        S("Spelling", "Spell the term for urine collecting in a dilated renal pelvis", 'hydronephrosis', 'hydr/o + nephr/o + ‎-osis‎.', 'hydro…')
      ]
    },
    /* ================= تشخیص و درمان ================= */
    {
      id: 'r16', w: 'tx', title: "Stone in the right ureter", who: "A 36-year-old man",
      brief: "A chart note transcription in Fremgen’s textbook: a 36-year-old man came to the urinary tract specialist with right flank pain and blood in his urine. He had a history of bladder infection. Clean-catch urinalysis showed blood without pus. On an X-ray taken after injecting contrast into the bladder, the dye rose only halfway up the right ureter. The diagnosis was a right ureteral stone; it was broken up with sound waves and the fragments were passed.",
      chart: [['Age', '36'], ['CC', 'right flank pain, hematuria'], ['Imaging', 'retrograde pyelogram: right ureter fills halfway'], ['Dx', 'right ureterolith'], ['Tx', 'ESWL']],
      fig: { a: 'eswl-art', l: [] },
      steps: [
        P("Rewording", "Match each phrase to its medical term", [['specialist of urinary diseases', 'urologist'], ['blood in the urine', 'hematuria'], ['bladder infection', 'cystitis'], ['stone in the ureter', 'ureterolith']], 'Chart Note.'),
        M("X-ray", "The X-ray in which contrast rises from the bladder upwards is…", ['retrograde pyelogram', 'intravenous pyelogram', 'KUB', 'renogram'], "retro- = backwards.", null, { a: ['imaging-art'], l: [] }),
        M("treatment", "Crushing stones with waves from outside the body is…", ['ESWL', 'nephrectomy', 'cystostomy', 'meatotomy'], 'extracorporeal shock wave lithotripsy.'),
        T("finding", "No pyuria was seen in this patient’s test.", true, "There was blood but no pus."),
        P("Rewording", "Match each other phrase to its term", [['technique for uncontaminated sample', 'clean-catch specimen'], ['laboratory analysis of urine', 'urinalysis'], ['pus in the urine', 'pyuria'], ['kidney stones', 'nephrolithiasis']], "Rewriting."),
        S("Spelling", "Spell the term for a stone in the ureter", 'ureterolith', 'ureter/o + ‎-lith‎.', 'uretero…')
      ]
    },
    {
      id: 'r17', w: 'tx', title: "From dialysis to transplant", who: "Adrien, a 20-year-old student",
      brief: "Case Study 14-2 in Cohen’s textbook: Adrien is a 20-year-old student who has had chronic glomerulonephritis since age 7, has done CAPD at home for 16 months and is waiting for a kidney transplant. He came to the emergency department with chest pain, shortness of breath and oliguria. BUN and creatinine were very high and haemoglobin was 8.2. Diagnosis: ESRD, fluid overload and metabolic acidosis. He was sent for haemodialysis and a bed was reserved for him on the transplant ward.",
      chart: [['Age', '20'], ['Hx', 'chronic glomerulonephritis since age 7; CAPD 16 months'], ['Labs', 'BUN, creatinine high; Hgb 8.2'], ['Dx', 'ESRD, fluid overload, metabolic acidosis'], ['Plan', 'hemodialysis; transplant list']],
      fig: { a: 'hemodialysis-art', l: [] },
      steps: [
        M("abbreviation", "CAPD means…", ["daytime home exchanges of abdominal dialysis fluid", "overnight haemodialysis", "kidney transplant", "stone crushing"], 'continuous ambulatory peritoneal dialysis.', null, { a: ['pd-art'], l: [] }),
        M("blood filtering through a membrane", "Passing blood through a machine and returning it to the patient is…", ['hemodialysis', 'CAPD', 'arteriovenous transplant', 'GFR'], 'Case Study 14-2.'),
        M("Term", "oliguria means…", ["little urine", "excessive urine", "painful urination", "night-time urination"], 'olig/o + ‎-uria‎.'),
        T("low red blood cells (anaemia)", "Adrien’s low haemoglobin fits with a lack of erythropoietin in kidney failure.", true, 'EPO.', { a: ['kidney-hormones'], l: [] }),
        P("abbreviation", "Match each abbreviation to its meaning", [['ESRD', "end-stage renal disease"], ['BUN', "blood urea nitrogen"], ['CAPD', "walk-around abdominal dialysis"], ['ED', "emergency department"]], "Abbreviations."),
        S("Spelling", "Spell the term for dialysis of the blood through a machine", 'hemodialysis', 'hem/o + dialysis.', 'hemo…')
      ]
    },
    {
      id: 'r18', w: 'tx', title: "Bladder stones", who: "Heather, a 40-year-old woman",
      brief: "In a case exercise in one of the appendix chapters, Heather, a 40-year-old woman, came to the urinary tract specialist with frequency, painful urination, blood in her urine, lower abdominal pain, mild fever and tiredness. A urinalysis and a kidney-ureter-bladder X-ray were done. The urine was cloudy, foul-smelling and contained red cells; several small stones were seen in the bladder. The diagnosis was urinary infection and bladder stones. She received antibiotics and had a cystoscopy to remove the stones.",
      chart: [['Age', '40'], ['Sx', 'frequency, dysuria, hematuria, low abdominal pain'], ['Tests', 'UA, KUB'], ['Dx', 'UTI; bladder calculi'], ['Tx', 'antibiotic; cystoscopic stone removal']],
      fig: { a: 'cystoscopy-art', l: [] },
      steps: [
        P("Rewording", "Match each phrase to its medical term", [['painful urination', 'dysuria'], ['blood in urine', 'hematuria'], ['laboratory reading of urine', 'urinalysis'], ['X-ray of kidneys, ureters, bladder', 'KUB']], "Case exercise."),
        M("stone", "A bladder stone is a…", ['cystolith', 'nephrolith', 'ureterolith', 'urethrolith'], 'cyst/o + ‎-lith‎.', null, { a: ['stones-sites'], l: [] }),
        M("drug", "A drug that kills bacteria is an…", ['antibiotic', 'diuretic', 'antispasmodic', 'ACE inhibitor'], 'antibiotic.'),
        M("Method", "The procedure that removes a bladder stone with an instrument through the urethra is…", ['cystoscopy', 'nephrectomy', "ESWL from the side", 'renogram'], 'cystoscopy.'),
        T("Term", "calculi is the plural of calculus.", true, "Stones."),
        S("Spelling", "Spell the term for a bladder stone", 'cystolith', 'cyst/o + ‎-lith‎.', 'cysto…')
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
    ['Lx', "The urinary system: two kidneys, two ureters, one bladder and one urethra."],
    ['Lx', "nephr/o and ren/o both mean kidney; cyst/o and vesic/o both mean bladder."],
    ['Lx', "ureter has two e’s and there are two; urethra has one e and there is one."],
    ['Lx', "pyel/o is the renal pelvis and py/o is pus; pyelitis is different from pyuria."],
    ['Lx', "vesical is the adjective for the bladder and vesicle means blister."],
    ['Lx', "A nephrologist is a kidney physician and a urologist a urinary tract surgeon."],
    ['Kd', "The kidneys are behind the peritoneum: retroperitoneal."],
    ['Kd', "The outer layer of the kidney is the cortex, and the inner part is the medulla with its pyramids."],
    ['Kd', "The nephron is the kidney’s working unit; each kidney has more than a million nephrons."],
    ['Kd', "The three steps of urine formation: filtration, reabsorption and secretion."],
    ['Kd', "The afferent arteriole brings blood to the glomerulus and the efferent arteriole takes it away."],
    ['Kd', "The kidney makes renin, which raises blood pressure, and EPO, which makes red blood cells."],
    ['Tr', "The bladder trigone lies between the two ureteral openings and the urethral opening."],
    ['Tr', "The internal urethral sphincter is involuntary and the external sphincter is voluntary."],
    ['Tr', "micturition, urination and voiding all mean passing urine."],
    ['Tr', "Stress incontinence is leaking with coughing, and urge incontinence is leaking with sudden urgency."],
    ['Tr', "-stenosis is narrowing, -ectasis widening and -cele bulging."],
    ['Ur', "Urine is about 95% water, and 1 to 2 litres are made each day."],
    ['Ur', "anuria is no urine, oliguria scanty urine and polyuria excessive urine."],
    ['Ur', "hematuria is blood in the urine, pyuria pus and glycosuria sugar in the urine."],
    ['Ur', "The normal specific gravity of urine is about 1.001 to 1.030."],
    ['Ur', "azotemia and uremia mean build-up of urea and nitrogenous wastes in the blood."],
    ['Ur', "Na comes from natrium and K from kalium: hyponatremia and hyperkalemia."],
    ['Dz', "Urinary infection climbs up from the urethra; it is more common in women."],
    ['Dz', "Cystitis causes burning and frequency; pyelonephritis causes fever and flank pain."],
    ['Dz', "A stone or stricture in the ureter backs up urine and causes hydronephrosis."],
    ['Dz', "ESRD is the final stage of kidney failure; its treatment is dialysis or transplant."],
    ['Dz', "Wilms tumour is a childhood kidney tumour; painless blood in the urine is a sign of bladder cancer."],
    ['Tx', "A KUB uses no contrast; in IVP contrast is injected into a vein."],
    ['Tx', "ESWL breaks a stone with waves from outside the body; no incision."],
    ['Tx', "Haemodialysis passes blood through a machine; in peritoneal dialysis the peritoneum is the filter."],
    ['Tx', "-ectomy is removal, -tomy incision, -stomy a new opening and -pexy fixation."]
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
    root.innerHTML = `<header class="player__top"><button class="iconbtn" data-c="quit" aria-label="Exit">✕</button><div class="pbar"><i></i></div><div class="p-meta"></div></header>
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
      <div class="fcard ${D.flipped ? 'is-flip' : ''}" data-c="flip" role="button" tabindex="0" aria-label="Flip the card">
        <div class="fcard__in">
          <div class="fcard__f">
            <span class="fcard__w" style="--wc:${w ? w.color : 'var(--brand)'}">${w ? w.sym : ''}</span>
            <span class="fcard__box" title="Leitner box">${'●'.repeat(box)}${'○'.repeat(5 - box)}</span>
            <b class="fcard__t" dir="ltr">${esc(t.t)}</b>
            ${t.p ? `<span class="pron" dir="ltr">/${esc(t.p)}/</span>` : ''}
            <small class="fcard__h">Tap to see the meaning</small>
          </div>
          <div class="fcard__b"><b class="fcard__t fcard__t--sm" dir="ltr">${esc(t.t)}</b>${back(t)}</div>
        </div>
      </div>
      ${canSpeak() ? `<button class="hintbtn hintbtn--c" data-c="say">🔊 Hear the pronunciation</button>` : ''}
    </div>`;
    root.querySelector('.player__foot').innerHTML = D.flipped
      ? `<div class="foot__row"><button class="btn btn--red btn--lg" data-c="no">✗ I didn’t know it</button><button class="btn btn--green btn--lg" data-c="yes">✓ I knew it</button></div>`
      : `<div class="foot__row"><span class="foot__note">Say the meaning in your head first, then flip the card</span><button class="btn btn--wc btn--lg" data-c="flip">Flip</button></div>`;
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
      <h2 class="res__t">You knew ${fa(D.known)} of ${fa(D.list.length)} cards!</h2>
      <p class="res__sub">Cards in Leitner boxes 4 and 5: ${fa(mastered)} of ${fa(total)} terms</p>
      <div class="tiles"><div class="tile tile--xp" style="--d:.2s"><div class="tile__h">XP</div><div class="tile__v">⚡ ${fa(xp)}</div></div></div>
      ${badges.map(b => `<p class="res__combo">${b.icon} New badge: ${b.name}</p>`).join('')}
    </div>`;
    root.querySelector('.player__foot').innerHTML = `<div class="foot__row"><button class="btn btn--ghost" data-c="again">Another set</button><button class="btn btn--brand btn--lg" data-c="quit">Continue</button></div>`;
    sfx('done'); confetti(80);
    if (ev.some(e => e.type === 'level')) EA.ui.toast("🎉 New level:" + EA.S.level().title);
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
    { id: 'dict', sym: 'Aa', name: "Dictionary", color: '#D9643A' },
    { id: 'parse', sym: '✂', name: "Word parser", color: '#B24E26' },
    { id: 'roots', sym: '-o-', name: "Roots and suffixes", color: '#1F9E8F' },
    { id: 'abbr', sym: 'BCC', name: "Abbreviations", color: '#1899D6' },
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
      <header class="vhead"><h1>Tools</h1><p>A full dictionary of ${fa(L().TERMS.length)} terms, ${fa(L().ROOTS.length)} word parts and ${fa(L().ABBR.length)} abbreviations, all offline.</p></header>
      <div class="ttabs" role="tablist">${TOOLS.map(x => `<button class="ttab ${x.id === cur ? 'is-on' : ''}" data-tool="${x.id}" style="--tc:${x.color}" role="tab" aria-selected="${x.id === cur}"><span class="ttab__s">${x.sym}</span>${x.name}</button>`).join('')}</div>
      <div class="tcard">${PANES[cur]()}</div>
      <p class="disclaimer">${A.toolsDisclaimer}</p>
    </section>`;
  }

  const worldChips = (sel, all) => `<div class="seg seg--w">${all ? `<button class="seg__b ${!sel ? 'is-on' : ''}" data-tw="">All</button>` : ''}${EA.worlds.filter(w => L().ABBR.some(a => a.w === w.id)).map(w => `<button class="seg__b ${sel === w.id ? 'is-on' : ''}" data-tw="${w.id}" style="--wc:${w.color}"><span class="wsym wsym--xs" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span> ${w.short || w.name}</button>`).join('')}</div>`;
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
    if (!list.length) return `<div class="tres--empty">${EA.ui.mascot('think', 'var(--brand)', 54)}<span>No term found. Search with part of the word or its meaning, or try the “Word parser”.</span></div>`;
    return `<p class="tcount">${fa(list.length)} terms</p><ul class="dict">${list.slice(0, st.limit).map(t => {
      const w = EA.worlds.find(x => x.id === t.w);
      const op = st.open === t.id;
      return `<li class="dict__i ${op ? 'is-open' : ''}">
        <button class="dict__h" data-term="${t.id}" aria-expanded="${op}">
          <span class="wsym wsym--xs" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span>
          <span class="dict__t"><b class="en-text">${esc(t.t)}</b><small>${esc(L().short(t.fa))}</small></span>
          <span class="dict__box" title="Leitner box">${'●'.repeat(EA.S.cardBox(t.id))}</span>
        </button>
        ${op ? `<div class="dict__b">${(c => c ? `<span class="kchip kchip--tag"><i>${c.icon}</i>${c.name}</span> ` : '')(L().CATS.find(c => c.id === t.k))}${t.p ? `<span class="pron" dir="ltr">/${esc(t.p)}/</span>` : ''}${EA.cards.back(t)}
          <div class="dict__act">${EA.cards.canSpeak() ? `<button class="btn btn--ghost btn--sm" data-say="${t.id}">🔊 Pronounce</button>` : ''}<button class="btn btn--ghost btn--sm" data-fav="${t.id}">${fav[t.id] ? "★ Starred" : "☆ Star"}</button><button class="btn btn--ghost btn--sm" data-parse="${esc(t.t)}">✂ Parse</button></div></div>` : ''}
      </li>`;
    }).join('')}</ul>${list.length > st.limit ? `<button class="btn btn--ghost btn--block" data-more>Show ${fa(Math.min(40, list.length - st.limit))} more terms</button>` : ''}`;
  }
  const dict = () => `<div class="tpane">${searchBox(A.ph.dict)}
    <div class="seg seg--w"><button class="seg__b ${!st.w ? 'is-on' : ''}" data-tw="">All</button><button class="seg__b ${st.w === 'fav' ? 'is-on' : ''}" data-tw="fav">★ Starred</button>${EA.worlds.filter(w => L().TERMS.some(t => t.w === w.id)).map(w => `<button class="seg__b ${st.w === w.id ? 'is-on' : ''}" data-tw="${w.id}" title="${w.name}"><span class="wsym wsym--xs" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span></button>`).join('')}</div>
    <div class="kchips" role="group" aria-label="Term category">${[{ id: '', icon: '🗂️', name: "All categories" }].concat(L().CATS).map(c => { const n = c.id ? L().TERMS.filter(t => t.k === c.id && (!st.w || st.w === 'fav' || t.w === st.w)).length : 0; return `<button class="kchip ${st.k === c.id ? 'is-on' : ''}" data-tk="${c.id}"><i>${c.icon}</i>${c.name}${c.id ? `<small>${fa(n)}</small>` : ''}</button>`; }).join('')}</div>
    <div class="tlist">${dictRows()}</div></div>`;

  /* ---------- تجزیه‌گر ---------- */
  function parseOut() {
    const words = String(st.parse || '').trim().split(/\s+/).filter(Boolean).slice(0, 4);
    if (!words.length) return '';
    return words.map(wd => {
      const a = L().analyze(wd);
      if (!a.word) return '';
      const t = L().term(wd) || L().term(st.parse);
      const meaning = a.parts.filter(p => p.r).map(p => p.r.fa.split(",")[0]);
      return `<div class="parse">
        <div class="parse__w" dir="ltr">${a.parts.map(p => `<span class="pp pp--${p.kind}"><b>${p.kind === 'gap' ? esc(p.text) : esc(L().partLabel(p))}</b><small dir="ltr">${p.r ? esc(p.r.fa) : "unknown"}</small></span>`).join('<i>+</i>')}</div>
        ${a.full ? `<p class="parse__m">Literal meaning (read from the end back to the start): <b>${meaning.slice().reverse().join(' ← ')}</b></p>` : "<p class=\"note note--warn\">Part of this word isn’t in the list of roots; the parts we recognise are coloured.</p>"}
        ${t ? `<div class="parse__t"><b dir="ltr">${esc(t.t)}</b> = ${t.fa}<p class="defen" dir="ltr">${esc(t.d)}</p></div>` : ''}
      </div>`;
    }).join('');
  }
  const SAMPLES = A.parseSamples;
  const parse = () => `<div class="tpane">
    <p class="muted">Type a medical word and it will be broken into prefix, root and suffix. The golden rule: start the meaning from the <b>suffix</b>, then the prefix, and finally the roots.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. ${esc(A.parseSamples[1] || A.parseDefault)}"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: "prefix", root: "root", suffix: "suffix" };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox(A.ph.roots)}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]} list <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b class="en-text">${esc(r.a)}</b><span>${esc(r.fa)}</span><small class="en-text">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox(A.ph.abbr)}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>Abbreviation</th><th>Full form and meaning</th></tr>${list.map(a => `<tr><td><span class="en-text">${esc(a.a)}</span></td><td><span class="en-text abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : "<p class=\"muted\">Nothing found.</p>"}</div>`;
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
