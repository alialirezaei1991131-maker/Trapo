/* تراپو • ترمینو — حیطه «nafas» (Respiratory System)
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
    name: "Nafas", key: 'nafas', title: "Nafas • Respiratory Terminology", certCode: 'NF',
    subject: "Medical terminology of the respiratory system (nose, pharynx, larynx, trachea, bronchi and lungs)",
    kicker: "🫁 Medical terminology: Nose, Pharynx, Larynx, Trachea and Lungs",
    hello: "Hi, I’m <b>Nafas</b>, a pair of smiling lungs with an oxygen bubble that always follows me around!",
    disclaimer: "Nafas is an educational tool and does not replace examination, clinical judgment or a physician’s orders.",
    eyes: "Dozens of bilingual figures and clinical pictures, from the sinuses and bronchial tree to the alveolus, spirogram, pneumothorax and TB X-rays.",
    outcomes: [
      "Break every respiratory word into prefix, root and suffix and say what it means",
      "Point out the nose, sinuses, pharynx and larynx on a figure and know their diseases",
      "Explain the path of air from the trachea to the alveolus, the lobes of the lungs and the pleura",
      "Write breathing patterns, lung sounds and lung volumes with the right word",
      "Tell asthma, COPD, pneumonia, TB, pneumothorax and other respiratory diseases apart",
      "Read spirometry, ABGs, bronchoscopy, intubation, drugs and chart abbreviations"
    ],
    endText: "Just 5 minutes a day. A few weeks from now you’ll read a lung report like a familiar story.",
    obHello: "Hi! I’m Nafas, a pair of smiling lungs 🫁 What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “Language of Breathing” is the best start; the basic roots and the path of air are taught there!",
    demo: () => ({
      q: "The word <b dir=\"ltr\">tachypnea</b> means…",
      fig: { a: ['breath-patterns'], l: ["Breathing patterns"] },
      opts: ["fast breathing", "slow breathing", "stopped breathing", "shortness of breath"],
      why: `${EA.K.wb('tachy-', '-pnea')}<br><b>tachy-</b> = fast, <b>-pnea</b> = breathing. So it means <b>fast breathing</b>: more than 20 breaths a minute in an adult. Start the meaning from the suffix!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ["Fresh Breath", "Busy Cilium", "Nose Guardian", "Root Decoder", "Larynx Master", "Bronchi Guide", "Alveolus Dweller",
      "Lung Sound Listener", "Spirometry Master", "Asthma Detective", "TB Hunter", "ABG Reader", "Word-Building Master", "Pulmonology Legend", "Terminology Icon"],
    leagueRoles: ["Medical student", "Nursing student", "Anaesthesia technology student", "Anaesthesia technologist", "Respiratory therapist", "Surgical technologist", "ICU nurse", "Internal-medicine resident", "Physiotherapy student", "Radiology technologist", "Emergency nurse", "Midwifery student", "Lab scientist"],
    firstBadge: ['🫁', "First Breath"],
    worldBadges: { lx: ['🧩', "Decoder"], up: ['👃', "Airway Guardian"], lo: ['🌳', "Bronchial Tree Guide"], br: ['🩺', "Lung Listener"], ds: ['🦠', "Disease Hunter"], tx: ['💨', "Spirometry Master"] },
    confetti: ['#2E9BD6', '#F4A6B8', '#FFC800', '#17A398', '#8E6BD8', '#E07A3A', '#3D6FD6', '#58CC02'],
    /* ابزارها */
    parseDefault: 'bronchiectasis',
    parseSamples: ['bronchiectasis', 'hemoptysis', 'thoracentesis', 'tracheostomy', 'pneumoconiosis', 'orthopnea', 'laryngoscopy', 'otorhinolaryngologist'],
    ph: { dict: "Search: pneum, lung, asthma…", roots: "Search: bronch, trachea, -pnea…", abbr: "Search: COPD, oxygen, ABG…" },
    toolsDisclaimer: "⚕️ Nafas is a learning tool; the dictionary and the spirometry, breathing and oxygen interpretations do not replace examination and clinical judgment.",
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
    if (!isFinite(a) || !isFinite(b) || b <= 0) return `<b>—</b><small>Enter FEV1 and FVC in litres, e.g. 2.1 and 3.5</small>`;
    if (a > b) return `<b>?</b><small>FEV1 cannot be larger than FVC; check the numbers.</small>`;
    const r = ratio();
    let msg;
    if (r < 70) msg = "Obstructive pattern: air comes out with difficulty, as in asthma and COPD. Check the response to a bronchodilator.";
    else if (isFinite(p) && p < 80) msg = "Normal ratio but low FVC: a possible restrictive pattern, as in lung fibrosis. Fuller testing is needed.";
    else msg = "The FEV1/FVC ratio is within the normal range.";
    return `<b>${fa(r)}%</b> <span><bdi dir="ltr">FEV1/FVC</bdi> ratio</span><small>${msg}</small>`;
  }
  function rrOut() {
    const n = num(st.rr);
    if (!isFinite(n)) return "<small>Count the breaths in one minute and enter the number.</small>";
    const c = n === 0 ? ['apnea', "Breathing has stopped; emergency!", 'bad'] : n < 12 ? ['bradypnea', "Slow breathing (under 12 a minute)", 'mid'] : n <= 20 ? ['eupnea', "Normal adult breathing (12 to 20)", 'ok'] : ['tachypnea', "Fast breathing (over 20 a minute)", 'mid'];
    return `<b class="tsc--${c[2]}"><bdi dir="ltr">${c[0]}</bdi></b><small>${c[1]}</small>`;
  }
  function spoOut() {
    const n = num(st.spo);
    if (!isFinite(n) || n > 100) return "<small>Enter the pulse oximeter reading (SpO2), between 0 and 100.</small>";
    const c = n >= 95 ? ["normal", "Adequate oxygenation", 'ok'] : n >= 90 ? ["Mild hypoxaemia", "Monitor more closely; supplemental oxygen may be needed.", 'mid'] : ["Severe hypoxaemia", "Inadequate oxygenation; urgent assessment and oxygen therapy.", 'bad'];
    return `<b class="tsc--${c[2]}">${c[0]}</b><small>${c[1]}</small>`;
  }
  const field = (key, label, ph, unit) => `<label class="rom__in"><span>${label}</span><span class="spi__f"><input type="text" inputmode="decimal" dir="ltr" data-keep="${key}" data-spi="${key}" value="${EA.ui.esc(st[key])}" placeholder="${ph}" autocomplete="off"><i>${unit}</i></span></label>`;
  EA.APP.extraTool = {
    id: 'spiro', sym: 'L/s', name: "Spirometry and oxygen", color: '#17A398',
    value: ratio,
    pane: () => `<div class="tpane"><p class="muted">Enter the spirometry report numbers; you’ll see the FEV1/FVC ratio and its pattern.</p>
    <div class="spi">${field('fev', '<bdi dir="ltr">FEV1</bdi>', '2.1', 'L')}${field('fvc', '<bdi dir="ltr">FVC</bdi>', '3.5', 'L')}${field('pred', "FVC % predicted (optional)", '85', '%')}</div>
    <div class="rom__out spi__o" aria-live="polite">${spiroOut()}</div>
    ${EA.ui.figCard({ a: ['spirogram'], l: ["Lung volumes and capacities"] })}
    <h4 class="rom__h">Breathing rate and oxygen saturation</h4>
    <div class="spi">${field('rr', "breaths per minute", '16', '/min')}${field('spo', '<bdi dir="ltr">SpO2</bdi>', '97', '%')}</div>
    <div class="rom__out spi__r" aria-live="polite">${rrOut()}</div>
    <div class="rom__out spi__s" aria-live="polite">${spoOut()}</div>
    <table class="mini"><tr><th>Finding</th><th>Interpretation</th></tr>
      <tr><td><bdi dir="ltr">FEV1/FVC &lt; 70%</bdi></td><td>obstructive pattern (asthma, COPD)</td></tr>
      <tr><td>normal ratio + low <bdi dir="ltr">FVC</bdi></td><td>possible restrictive pattern</td></tr>
      <tr><td>12 to 20 a minute</td><td><bdi dir="ltr">eupnea</bdi></td></tr>
      <tr><td><bdi dir="ltr">SpO2 ≥ 95%</bdi></td><td>normal</td></tr></table>
    <p class="muted">The thresholds are approximate and for learning; the final interpretation rests with the physician and full testing.</p></div>`,
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
/* نَفَس — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از apps/nafas/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["acute respiratory distress syndrome", "ah-KYOOT RES-pih-rah-tor-ee dih-STRES SIN-drohm", "Sudden, severe lung failure from fluid in the alveoli after injury or serious illness.", "sudden severe lung failure in adults", "ds", "dz", ["ARDS"]],
["adenoidectomy", "ad-eh-noyd-EK-toh-mee", "Surgical removal of the adenoids.", "removal of the adenoids", "up", "tx", []],
["adenoiditis", "ad-eh-noyd-EYE-tis", "Inflammation of the adenoids.", "inflammation of the adenoids", "up", "dz", []],
["adenoids", "AD-eh-noydz", "Lymphatic tissue in the nasopharynx; also called pharyngeal tonsil (adenoid/o = adenoids).", "pharyngeal tonsil behind the nose", "up", "body", []],
["alveolar", "al-VEE-oh-lar", "Pertaining to the alveoli.", "relating to the air sacs", "lo", "body", []],
["alveolus", "al-VEE-oh-lus", "Tiny air sac at the end of a bronchiole where gas exchange takes place (plural: alveoli) (alveol/o = alveolus).", "tiny air sac of the lung", "lo", "body", []],
["anoxia", "an-OK-see-ah", "Total lack of oxygen (an- = without).", "complete absence of oxygen", "br", "sx", []],
["anthracosis", "an-thrah-KOH-sis", "Black lung disease from inhaling coal dust (anthrac/o = coal).", "black lung from coal dust", "ds", "dz", []],
["antihistamine", "an-tee-HIS-tah-meen", "Medicine that blocks histamine to relieve allergy symptoms such as sneezing and runny nose.", "drug that blocks histamine", "tx", "tx", []],
["antitussive", "an-tee-TUS-iv", "Medicine that relieves or prevents cough (anti- = against, tuss/i = cough).", "drug that suppresses cough", "tx", "tx", []],
["apex", "AY-peks", "The rounded top of the lung, just above the clavicle.", "rounded top of the lung", "lo", "body", []],
["aphonia", "ah-FOH-nee-ah", "Loss of the voice (a- = without, phon/o = voice, sound).", "loss of voice", "up", "sx", []],
["apnea", "AP-nee-ah", "Temporary absence of breathing (a- = without).", "cessation of breathing", "br", "sx", []],
["arterial blood gases", "ar-TEER-ee-al blud GAS-ez", "Blood test that measures oxygen, carbon dioxide and pH in arterial blood.", "oxygen, CO2 and pH in arterial blood", "tx", "lab", ["ABGs"]],
["asbestosis", "as-bes-TOH-sis", "Lung disease from inhaling asbestos fibers.", "lung disease from inhaled mineral fibres", "ds", "dz", []],
["asphyxia", "as-FIK-see-ah", "Lack of oxygen and buildup of carbon dioxide from blocked breathing; suffocation.", "suffocation", "br", "sx", []],
["aspiration pneumonia", "as-pih-RAY-shun noo-MOH-nee-ah", "Pneumonia caused by inhaling food, liquid or vomit into the lungs.", "lung infection from inhaled food or fluid", "ds", "dz", []],
["asthma", "AZ-mah", "Chronic disease with attacks of airway inflammation, bronchospasm and mucus, causing wheezing, cough and dyspnea.", "reversible airway narrowing with wheeze", "ds", "dz", ["PEFR", "MDI"]],
["atelectasis", "at-eh-LEK-tah-sis", "Collapse of part or all of a lung, or incomplete expansion (atel/o = incomplete, -ectasis = expansion).", "collapse of lung tissue", "ds", "dz", []],
["auscultation", "aws-kul-TAY-shun", "Listening to sounds inside the body, usually with a stethoscope.", "listening with a stethoscope", "br", "lab", []],
["base", "bays", "The broad lower part of the lung that rests on the diaphragm.", "lower part of the lung resting on the diaphragm", "lo", "body", []],
["bradypnea", "brad-ip-NEE-ah", "Abnormally slow breathing (brady- = slow).", "slow breathing", "br", "sx", []],
["bronchial", "BRONG-kee-al", "Pertaining to the bronchi.", "relating to the bronchi", "lo", "body", []],
["bronchial tree", "BRONG-kee-al tree", "The branching airways of the lungs, from the bronchi to the smallest bronchioles.", "branching airways inside the lungs", "lo", "body", []],
["bronchiectasis", "brong-kee-EK-tah-sis", "Permanent widening of the bronchi with weakened walls and mucus buildup (-ectasis = dilation).", "permanent widening of the bronchi", "ds", "dz", []],
["bronchiole", "BRONG-kee-ohl", "Smallest branch of the bronchial tree, ending in the alveoli (bronchiol/o = bronchiole).", "smallest airway branch", "lo", "body", []],
["bronchiolitis", "brong-kee-oh-LYE-tis", "Inflammation of the bronchioles, common in infants.", "inflammation of the bronchioles", "lo", "dz", []],
["bronchitis", "brong-KYE-tis", "Inflammation of the bronchi (bronch/o = bronchus, -itis = inflammation).", "inflammation of the bronchi", "lx", "dz", []],
["bronchodilator", "brong-koh-DYE-lay-tor", "Medicine that relaxes the bronchial muscles and widens the airways, as in an asthma attack.", "widens the airways", "tx", "tx", []],
["bronchogenic carcinoma", "brong-koh-JEN-ik kar-sih-NOH-mah", "Lung cancer that starts in the bronchi; strongly linked to smoking.", "lung cancer arising in the bronchi", "ds", "dz", []],
["bronchopneumonia", "brong-koh-noo-MOH-nee-ah", "Pneumonia in patches around the bronchioles.", "patchy pneumonia around the bronchioles", "ds", "dz", []],
["bronchoscope", "BRONG-koh-skohp", "Lighted, flexible tube used to view the bronchi and take samples.", "flexible tube for viewing the airways", "tx", "lab", []],
["bronchoscopy", "brong-KOS-koh-pee", "Visual examination of the bronchi with a bronchoscope passed through the mouth or nose.", "viewing the airways with a lighted tube", "tx", "lab", ["Bronch"]],
["bronchospasm", "BRONG-koh-spazm", "Sudden narrowing of the bronchi from contraction of their smooth muscle, as in asthma.", "sudden tightening of airway muscle", "lo", "sx", []],
["bronchus", "BRONG-kus", "One of the two main branches of the trachea that enter the lungs (plural: bronchi) (bronch/o, bronchi/o = bronchus).", "main airway branch into a lung", "lo", "body", []],
["carbon dioxide", "KAR-bon dye-OK-side", "Waste gas made by the cells and breathed out through the lungs (capn/o = carbon dioxide).", "waste gas breathed out", "lx", "phys", ["CO2"]],
["cardiopulmonary", "kar-dee-oh-PUL-moh-nair-ee", "Pertaining to the heart and lungs (cardi/o = heart, pulmon/o = lung).", "pertaining to heart and lungs", "lx", "body", ["CPR"]],
["cardiopulmonary resuscitation", "kar-dee-oh-PUL-moh-nair-ee ree-sus-ih-TAY-shun", "Emergency chest compressions and rescue breathing when the heart and breathing stop.", "chest compressions and rescue breaths", "tx", "tx", ["CPR"]],
["carina", "kah-RYE-nah", "Ridge where the trachea divides into the right and left main bronchi.", "ridge where the trachea forks", "lo", "body", []],
["chest X-ray", "chest EKS-ray", "Radiograph of the chest that shows the lungs, heart and ribs.", "plain radiograph of the thorax", "tx", "lab", ["CXR"]],
["Cheyne-Stokes respiration", "chayn stohks res-pih-RAY-shun", "Breathing pattern with cycles of deep, rapid breaths followed by periods of apnea; seen near death or in brain injury.", "cyclic deep then absent breathing", "br", "sx", []],
["chronic bronchitis", "KRON-ik brong-KYE-tis", "Long-term inflammation of the bronchi with a productive cough for months each year.", "long-term airway inflammation with productive cough", "ds", "dz", ["COPD"]],
["chronic obstructive pulmonary disease", "KRON-ik ob-STRUK-tiv PUL-moh-nair-ee dih-ZEEZ", "Progressive lung disease, mainly emphysema and chronic bronchitis, usually from smoking, that blocks airflow out of the lungs.", "chronic obstructive lung disease", "ds", "dz", ["COPD"]],
["cilia", "SIL-ee-ah", "Tiny hairlike projections on the lining of the airways that sweep mucus and trapped particles out.", "tiny hairs sweeping mucus upwards", "up", "body", []],
["clubbing", "KLUB-ing", "Widening and rounding of the fingertips from chronic lack of oxygen.", "widened fingertips", "br", "sx", []],
["continuous positive airway pressure", "kon-TIN-yoo-us POZ-ih-tiv AIR-way PRESH-er", "Machine that blows air through a mask to keep the airway open during sleep; treats sleep apnea.", "steady air pressure keeping the airway open in sleep", "tx", "tx", ["CPAP"]],
["cor pulmonale", "kor pul-moh-NAY-lee", "Enlargement and failure of the right side of the heart from chronic lung disease.", "right-heart failure from lung disease", "ds", "dz", []],
["coryza", "koh-RYE-zah", "The common cold; inflammation of the nasal mucous membrane with runny nose.", "common cold", "up", "dz", []],
["cough", "kawf", "Sudden, forceful expulsion of air from the lungs.", "sudden forceful expulsion of air", "br", "sx", []],
["croup", "kroop", "Viral infection of the larynx and trachea in young children with a barking cough and stridor.", "childhood barking cough with stridor", "up", "dz", []],
["cyanosis", "sye-ah-NOH-sis", "Bluish color of the skin, lips and nail beds from too little oxygen in the blood (cyan/o = blue).", "bluish skin (cyanosis)", "br", "sx", []],
["cystic fibrosis", "SIS-tik fye-BROH-sis", "Inherited disease in which thick, sticky mucus blocks the lungs and pancreas, causing repeated infections.", "inherited disease of thick, sticky mucus", "ds", "dz", ["CF"]],
["decongestant", "dee-kon-JES-tant", "Medicine that reduces swelling of the nasal mucous membrane.", "drug that shrinks swollen nasal lining", "tx", "tx", []],
["deviated septum", "DEE-vee-ay-ted SEP-tum", "Nasal septum that is bent to one side and may block airflow.", "off-centre nasal dividing wall", "up", "dz", []],
["diaphragm", "DYE-ah-fram", "Dome-shaped muscle under the lungs; it contracts and flattens during inspiration (phren/o, diaphragmat/o = diaphragm).", "breathing muscle under the lungs", "lo", "body", []],
["diphtheria", "dif-THEER-ee-ah", "Bacterial infection of the throat that forms a thick membrane which can block the airway.", "throat infection forming a thick membrane", "ds", "dz", ["DPT"]],
["dysphonia", "dis-FOH-nee-ah", "Difficulty speaking or hoarse voice (dys- = difficult, phon/o = voice).", "voice disorder", "up", "sx", []],
["dyspnea", "DISP-nee-ah", "Difficult or labored breathing; shortness of breath (dys- = difficult).", "laboured, difficult breathing", "br", "sx", ["SOB", "DOE"]],
["emphysema", "em-fih-SEE-mah", "Disease in which the alveolar walls are destroyed and the air sacs enlarge, trapping air and reducing gas exchange.", "overinflated, damaged air sacs", "ds", "dz", ["COPD"]],
["endotracheal intubation", "en-doh-TRAY-kee-al in-too-BAY-shun", "Passing a tube through the mouth or nose into the trachea to keep the airway open (endo- = within).", "tube placed through the mouth into the trachea", "tx", "tx", ["ET"]],
["epiglottis", "ep-ih-GLOT-is", "Flap of cartilage that covers the larynx during swallowing so food does not enter the airway (epiglott/o = epiglottis).", "flap covering the larynx when swallowing", "up", "body", []],
["epiglottitis", "ep-ih-glot-EYE-tis", "Inflammation of the epiglottis; it can swell and block the airway, especially in children.", "inflammation of the throat flap over the larynx", "up", "dz", []],
["epistaxis", "ep-ih-STAK-sis", "Nosebleed; also called rhinorrhagia.", "nosebleed", "up", "sx", []],
["ethmoid sinus", "ETH-moyd SYE-nus", "Group of small air cells in the ethmoid bone between the eyes.", "air cells between the eyes", "up", "body", []],
["eupnea", "yoop-NEE-ah", "Normal, easy breathing (eu- = good, normal, -pnea = breathing).", "normal breathing", "br", "phys", []],
["exhalation", "eks-hah-LAY-shun", "Letting air out of the lungs; expiration.", "letting air out of the lungs", "lx", "phys", []],
["expectorant", "ek-SPEK-toh-rant", "Medicine that thins mucus so it can be coughed up more easily.", "drug that helps bring up sputum", "tx", "tx", []],
["expectoration", "ek-spek-toh-RAY-shun", "Coughing up and spitting out sputum.", "coughing up sputum", "br", "sx", []],
["expiration", "eks-pih-RAY-shun", "Breathing out; also called exhalation (ex- = out, spir/o = to breathe).", "the outward phase of breathing", "lx", "phys", []],
["expiratory reserve volume", "eks-PY-rah-tor-ee reh-ZERV VOL-yoom", "Extra air that can be exhaled after a normal breath out.", "extra air forced out after a normal breath out", "br", "phys", ["ERV"]],
["external respiration", "eks-TER-nal res-pih-RAY-shun", "Exchange of oxygen and carbon dioxide between the air in the alveoli and the blood in the pulmonary capillaries.", "gas exchange in the lungs", "lx", "phys", []],
["forced expiratory volume in one second", "forst eks-PY-rah-tor-ee VOL-yoom", "Amount of air forcefully exhaled in the first second; reduced in airway obstruction such as asthma and COPD.", "air blown out in the first second of a forced breath", "br", "phys", ["FEV1"]],
["forced vital capacity", "forst VYE-tal kah-PAS-ih-tee", "Total amount of air breathed out as forcefully and quickly as possible after a deep breath.", "total air blown out hard after a deep breath", "br", "phys", ["FVC"]],
["frontal sinus", "FRUN-tal SYE-nus", "Paranasal sinus in the frontal bone above the eyes.", "air space in the forehead bone", "up", "body", []],
["functional residual capacity", "FUNK-shun-al reh-ZID-yoo-al kah-PAS-ih-tee", "Air remaining in the lungs after a normal exhalation (ERV + RV).", "air left after a normal breath out", "br", "phys", ["FRC"]],
["glottis", "GLOT-is", "The vocal cords and the opening between them.", "vocal cords and the opening between them", "up", "body", []],
["Heimlich maneuver", "HYME-lik mah-NOO-ver", "Quick upward abdominal thrusts to force out an object blocking the airway.", "Heimlich manoeuvre", "tx", "tx", []],
["hemithorax", "hem-ee-THOH-raks", "One side (half) of the chest (hemi- = half).", "one side of the chest", "lo", "body", []],
["hemoptysis", "hee-MOP-tih-sis", "Coughing up blood from the lungs (hem/o = blood, -ptysis = spitting).", "coughing up blood", "br", "sx", []],
["hemothorax", "hee-moh-THOH-raks", "Blood in the pleural cavity.", "blood in the pleural space", "ds", "dz", []],
["hilum", "HYE-lum", "Area on the inner surface of the lung where bronchi, blood vessels and nerves enter.", "root of the lung where vessels enter", "lo", "body", []],
["hypercapnia", "hye-per-KAP-nee-ah", "Too much carbon dioxide in the blood (capn/o = carbon dioxide).", "excess carbon dioxide in the blood", "br", "sx", []],
["hyperpnea", "hye-perp-NEE-ah", "Abnormally deep breathing (hyper- = excessive).", "deep breathing", "br", "sx", []],
["hyperventilation", "hye-per-ven-tih-LAY-shun", "Excessive breathing that lowers carbon dioxide in the blood.", "overbreathing", "br", "sx", []],
["hypopnea", "hye-POP-nee-ah", "Abnormally shallow breathing (hypo- = deficient).", "shallow breathing", "br", "sx", []],
["hypoventilation", "hye-poh-ven-tih-LAY-shun", "Too little breathing, so carbon dioxide builds up in the blood.", "inadequate breathing", "br", "sx", []],
["hypoxemia", "hye-pok-SEE-mee-ah", "Too little oxygen in the blood (-emia = blood condition).", "low blood oxygen", "br", "sx", ["ABGs"]],
["hypoxia", "hye-POK-see-ah", "Too little oxygen in the body tissues (hypo- = deficient, ox/o = oxygen).", "low tissue oxygen", "br", "sx", []],
["influenza", "in-floo-EN-zah", "Contagious viral infection of the respiratory tract with fever, aches and cough.", "seasonal viral fever with aches and cough", "ds", "dz", ["flu"]],
["inhalation", "in-hah-LAY-shun", "Drawing air into the lungs; inspiration.", "drawing air into the lungs", "lx", "phys", []],
["inhaled corticosteroid", "in-HAYLD kor-tih-koh-STAIR-oyd", "Anti-inflammatory medicine breathed into the lungs to prevent asthma attacks.", "steroid breathed into the airways", "tx", "tx", []],
["inspiration", "in-spih-RAY-shun", "Breathing in; also called inhalation (in- = in, spir/o = to breathe).", "the inward phase of breathing", "lx", "phys", []],
["inspiratory capacity", "in-SPY-rah-tor-ee kah-PAS-ih-tee", "Largest amount of air that can be inhaled after a normal exhalation (TV + IRV).", "most air drawn in after a normal breath out", "br", "phys", ["IC"]],
["inspiratory reserve volume", "in-SPY-rah-tor-ee reh-ZERV VOL-yoom", "Extra air that can be inhaled after a normal breath in.", "extra air drawn in after a normal breath in", "br", "phys", ["IRV"]],
["intercostal muscles", "in-ter-KOS-tal MUS-elz", "Muscles between the ribs that help expand and compress the chest during breathing.", "muscles between the ribs", "lo", "body", []],
["intermittent positive pressure breathing", "in-ter-MIT-ent POZ-ih-tiv PRESH-er BREE-thing", "Treatment that delivers air or medicine under pressure to help expand the lungs.", "machine-pushed breaths to expand the lungs", "tx", "tx", ["IPPB"]],
["internal respiration", "in-TER-nal res-pih-RAY-shun", "Exchange of oxygen and carbon dioxide between the blood and the body cells.", "gas exchange in the tissues", "lx", "phys", []],
["intrapleural", "in-trah-PLOO-ral", "Pertaining to within the pleural cavity (intra- = within).", "within the pleural cavity", "lo", "body", []],
["laryngectomy", "lair-in-JEK-toh-mee", "Surgical removal of the larynx, usually for cancer.", "removal of the larynx", "up", "tx", []],
["laryngitis", "lair-in-JYE-tis", "Inflammation of the larynx, often with hoarseness or loss of voice.", "inflammation of the voice box", "up", "dz", []],
["laryngopharynx", "lah-ring-goh-FAIR-inks", "Lowest part of the pharynx, which opens into the larynx and esophagus.", "lowest part of the throat", "up", "body", []],
["laryngoscopy", "lair-in-GOS-koh-pee", "Visual examination of the larynx with a laryngoscope (-scopy = visual examination).", "viewing the voice box with a scope", "up", "lab", []],
["laryngospasm", "lah-RING-goh-spazm", "Sudden spasm of the larynx that closes the airway (-spasm = sudden involuntary contraction).", "sudden closure of the voice box", "up", "sx", []],
["larynx", "LAIR-inks", "The voice box; passage between the pharynx and the trachea that contains the vocal cords (laryng/o = larynx).", "voice box", "up", "body", []],
["lobar pneumonia", "LOH-bar noo-MOH-nee-ah", "Pneumonia that involves an entire lobe of a lung.", "pneumonia of a whole lobe", "ds", "dz", []],
["lobe", "lohb", "Major division of a lung; the right lung has three lobes and the left lung two (lob/o = lobe).", "section of a lung", "lo", "body", ["RUL", "RML", "RLL", "LUL", "LLL"]],
["lobectomy", "loh-BEK-toh-mee", "Surgical removal of a lobe of a lung.", "removal of a lung section", "tx", "tx", []],
["lower respiratory tract", "LOH-er RES-pih-rah-tor-ee trakt", "The trachea, bronchi, bronchioles, alveoli and lungs.", "airways below the larynx", "lx", "body", []],
["lung abscess", "lung AB-ses", "Collection of pus in a cavity in the lung.", "pus-filled cavity in the lung", "ds", "dz", []],
["lungs", "lungz", "The two main organs of breathing in the thoracic cavity (pulmon/o, pneum/o, pneumon/o = lung, air).", "paired breathing organs in the chest", "lo", "body", []],
["maxillary sinus", "MAK-sih-lair-ee SYE-nus", "Largest paranasal sinus, in the maxilla below the eyes.", "largest sinus, in the cheekbone", "up", "body", []],
["mechanical ventilation", "meh-KAN-ih-kal ven-tih-LAY-shun", "Breathing support by a machine (ventilator) that pushes air into the lungs.", "machine breathing for the patient", "tx", "tx", []],
["mediastinal", "mee-dee-ah-STYE-nal", "Pertaining to the mediastinum.", "relating to the mid-chest space", "lo", "body", []],
["mediastinoscopy", "mee-dee-ah-stye-NOS-koh-pee", "Visual examination of the mediastinum through a small incision.", "scope examination of the mid-chest space", "tx", "lab", []],
["mediastinum", "mee-dee-ah-STYE-num", "Space between the lungs that contains the heart, trachea, esophagus and large vessels (mediastin/o = mediastinum).", "space between the lungs", "lo", "body", []],
["mesothelioma", "mez-oh-thee-lee-OH-mah", "Rare cancer of the pleura, usually from asbestos exposure.", "cancer of the pleura, often from asbestos", "ds", "dz", []],
["metered-dose inhaler", "MEE-terd dohs in-HAY-ler", "Handheld device that delivers a measured dose of inhaled medicine.", "hand-held aerosol inhaler", "tx", "tx", ["MDI"]],
["Middle East respiratory syndrome", "MID-l eest RES-pih-rah-tor-ee SIN-drohm", "Viral respiratory illness caused by a coronavirus, first reported in the Middle East.", "severe coronavirus lung infection first seen in Arabia", "ds", "dz", ["MERS"]],
["mucolytic", "myoo-koh-LIT-ik", "Medicine that breaks down and liquefies mucus (muc/o = mucus, -lytic = breaking down).", "drug that breaks down mucus", "tx", "tx", []],
["mucous membrane", "MYOO-kus MEM-brayn", "Lining of the airways that secretes mucus.", "lining that secretes sticky fluid", "up", "body", []],
["mucus", "MYOO-kus", "Sticky fluid secreted by mucous membranes that traps dust and germs (muc/o = mucus).", "sticky secretion trapping dust and germs", "up", "phys", []],
["nares", "NAIR-eez", "The nostrils; external openings of the nose (singular: naris).", "nostrils", "up", "body", []],
["nasal cannula", "NAY-zal KAN-yoo-lah", "Two-pronged plastic tube placed in the nostrils to give oxygen.", "two-pronged tube giving oxygen via the nostrils", "tx", "tx", []],
["nasal cavity", "NAY-zal KAV-ih-tee", "Space inside the nose, divided by the nasal septum and lined with mucous membrane and cilia.", "air space inside the nose", "up", "body", []],
["nasal polyps", "NAY-zal POL-ips", "Soft, benign growths of the nasal mucous membrane that may block the airway.", "soft growths in the nasal lining", "up", "dz", []],
["nasal septum", "NAY-zal SEP-tum", "Wall of cartilage and bone that divides the nasal cavity into right and left halves (sept/o = septum).", "wall dividing the nose", "up", "body", []],
["nasopharynx", "nay-zoh-FAIR-inks", "Upper part of the pharynx, behind the nose; contains the adenoids.", "upper throat behind the nose", "up", "body", []],
["nebulizer", "NEB-yoo-lye-zer", "Device that turns liquid medicine into a fine mist to be inhaled.", "device turning liquid medicine into a mist", "tx", "tx", ["NMT"]],
["nonproductive cough", "non-proh-DUK-tiv kawf", "Dry cough that brings up no sputum.", "dry cough", "br", "sx", []],
["nose", "nohz", "Organ that warms, moistens and filters inhaled air and contains the sense of smell (nas/o, rhin/o = nose).", "organ that warms and filters inhaled air", "up", "body", []],
["obstructive sleep apnea", "ob-STRUK-tiv sleep AP-nee-ah", "Repeated pauses in breathing during sleep because the throat closes; causes snoring and daytime sleepiness.", "obstructive sleep apnoea", "ds", "dz", ["OSA", "CPAP"]],
["oropharynx", "or-oh-FAIR-inks", "Middle part of the pharynx, behind the mouth; contains the palatine tonsils (or/o = mouth).", "throat behind the mouth", "up", "body", []],
["orthopnea", "or-THOP-nee-ah", "Difficulty breathing except in an upright, sitting position (orth/o = straight, upright).", "breathlessness when lying flat", "br", "sx", []],
["otorhinolaryngologist", "oh-toh-rye-noh-lair-in-GOL-oh-jist", "Physician who treats disorders of the ear, nose and throat (ot/o = ear, rhin/o = nose, laryng/o = larynx).", "ear, nose and throat specialist", "lx", "field", ["ENT"]],
["oximeter", "ok-SIM-eh-ter", "Instrument that measures oxygen saturation of the blood.", "device reading blood oxygen saturation", "tx", "lab", []],
["oxygen", "OK-sih-jen", "Gas taken in by breathing and carried by the blood to every cell (ox/o, oxi = oxygen).", "gas essential for cell energy", "lx", "phys", ["O2"]],
["oxygen therapy", "OK-sih-jen THAIR-ah-pee", "Giving extra oxygen through a nasal cannula, mask or ventilator.", "giving extra oxygen", "tx", "tx", ["O2"]],
["palatine tonsils", "PAL-ah-tine TON-silz", "Pair of lymphatic tissue masses at the back of the mouth that help fight infection (tonsill/o = tonsils).", "tonsils of the throat sides", "up", "body", []],
["paranasal sinuses", "pair-ah-NAY-zal SYE-nus-ez", "Air-filled cavities in the skull bones around the nose (frontal, maxillary, ethmoid, sphenoid) that lighten the skull and give resonance to the voice (sinus/o = sinus).", "sinuses around the nose", "up", "body", []],
["parietal pleura", "pah-RYE-eh-tal PLOO-rah", "Outer layer of the pleura that lines the chest wall.", "pleura lining the chest wall", "lo", "body", []],
["peak flow meter", "peek floh MEE-ter", "Small handheld device that measures the fastest rate of exhaled air; used to monitor asthma.", "device measuring maximum breath-out speed", "tx", "lab", ["PEFR"]],
["percussion", "per-KUSH-un", "Tapping on the body surface to judge what lies beneath by the sound produced.", "tapping", "br", "lab", []],
["pertussis", "per-TUS-is", "Whooping cough; bacterial infection with spasms of coughing that end in a whooping inspiration.", "whooping cough", "ds", "dz", ["DPT"]],
["pharyngitis", "fair-in-JYE-tis", "Inflammation of the pharynx; sore throat.", "inflammation of the throat", "up", "dz", []],
["pharynx", "FAIR-inks", "The throat; passage for both air and food, divided into nasopharynx, oropharynx and laryngopharynx (pharyng/o = pharynx).", "throat (pharynx)", "up", "body", []],
["phlegm", "flem", "Thick mucus secreted by the airways.", "thick airway mucus", "br", "sx", []],
["phrenic", "FREN-ik", "Pertaining to the diaphragm.", "relating to the diaphragm", "lo", "body", []],
["phrenic nerve", "FREN-ik nerv", "Nerve that controls the diaphragm (phren/o = diaphragm).", "nerve controlling the diaphragm", "lo", "body", []],
["pleura", "PLOO-rah", "Double membrane that covers the lungs and lines the chest wall (pleur/o = pleura).", "membrane around the lungs", "lo", "body", []],
["pleural", "PLOO-ral", "Pertaining to the pleura.", "relating to the pleura", "lo", "body", []],
["pleural cavity", "PLOO-ral KAV-ih-tee", "Thin space between the visceral and parietal pleura, containing a little lubricating fluid.", "pleural space", "lo", "body", []],
["pleural effusion", "PLOO-ral eh-FYOO-zhun", "Abnormal collection of fluid in the pleural cavity.", "fluid in the pleural space", "ds", "dz", []],
["pleural rub", "PLOO-ral rub", "Grating sound made by inflamed pleural layers rubbing together; also called friction rub.", "grating sound of inflamed pleura", "br", "sx", []],
["pleurectomy", "ploo-REK-toh-mee", "Surgical removal of part of the pleura.", "removal of the pleura", "tx", "tx", []],
["pleurisy", "PLOOR-ih-see", "Inflammation of the pleura, causing sharp pain on breathing; also called pleuritis.", "inflammation of the pleura", "ds", "dz", []],
["pleurodynia", "ploo-roh-DIN-ee-ah", "Pain in the chest wall muscles or pleura (-dynia = pain).", "pleural pain", "br", "sx", []],
["pneumoconiosis", "noo-moh-koh-nee-OH-sis", "Lung disease from inhaling dust, such as coal dust (anthracosis), asbestos (asbestosis) or silica (silicosis) (coni/o = dust).", "lung disease from inhaled dust", "ds", "dz", []],
["pneumonectomy", "noo-moh-NEK-toh-mee", "Surgical removal of an entire lung.", "removal of a whole lung", "tx", "tx", []],
["pneumonia", "noo-MOH-nee-ah", "Inflammation and infection of the lung in which the alveoli fill with fluid and pus (pneumon/o = lung).", "lung infection filling the air sacs", "ds", "dz", ["CXR"]],
["pneumonitis", "noo-moh-NYE-tis", "Inflammation of the lung tissue (pneumon/o = lung).", "inflammation of lung tissue", "lx", "dz", []],
["pneumonomycosis", "noo-moh-noh-my-KOH-sis", "Fungal infection of the lungs (myc/o = fungus).", "fungal lung infection", "ds", "dz", []],
["pneumothorax", "noo-moh-THOH-raks", "Air in the pleural cavity that causes the lung to collapse (pneum/o = air, thorac/o = chest).", "air in the pleural space", "ds", "dz", []],
["polypectomy", "pol-ih-PEK-toh-mee", "Surgical removal of a polyp.", "removal of a polyp", "up", "tx", []],
["polysomnography", "pol-ee-som-NOG-rah-fee", "Sleep study that records breathing, oxygen level, brain waves and movements during sleep (somn/o = sleep).", "sleep study", "tx", "lab", ["OSA"]],
["postural drainage", "POS-cher-al DRAY-nij", "Positioning the patient so gravity helps drain mucus from the lungs.", "positioning to drain mucus by gravity", "tx", "tx", []],
["productive cough", "proh-DUK-tiv kawf", "Cough that brings up sputum.", "cough bringing up sputum", "br", "sx", []],
["pulmonary", "PUL-moh-nair-ee", "Pertaining to the lungs (pulmon/o = lung, -ary = pertaining to).", "of the lungs", "lx", "body", []],
["pulmonary capillaries", "PUL-moh-nair-ee KAP-ih-lair-eez", "Tiny blood vessels around the alveoli where oxygen enters and carbon dioxide leaves the blood.", "tiny vessels around the air sacs", "lo", "body", []],
["pulmonary edema", "PUL-moh-nair-ee eh-DEE-mah", "Fluid in the lung tissue and alveoli, often from heart failure.", "fluid in the lungs", "ds", "dz", []],
["pulmonary embolism", "PUL-moh-nair-ee EM-boh-lizm", "Blockage of a pulmonary artery by a blood clot, usually from the leg veins.", "clot in a lung artery", "ds", "dz", ["PE"]],
["pulmonary fibrosis", "PUL-moh-nair-ee fye-BROH-sis", "Scarring and thickening of lung tissue that makes the lungs stiff.", "scarring and stiffening of lung tissue", "ds", "dz", []],
["pulmonary function test", "PUL-moh-nair-ee FUNK-shun test", "Group of breathing tests that measure lung volumes and airflow.", "group of breathing measurements", "tx", "lab", ["PFT"]],
["pulmonologist", "pul-mon-OL-oh-jist", "Physician who specializes in diseases of the lungs and airways.", "lung specialist", "lx", "field", []],
["pulmonology", "pul-mon-OL-oh-jee", "Branch of medicine that diagnoses and treats diseases of the lungs and airways; also called pulmonary medicine (pulmon/o = lung).", "study of the lungs", "lx", "field", []],
["pulse oximetry", "puls ok-SIM-eh-tree", "Measurement of the oxygen saturation of the blood with a sensor clipped to a finger (ox/i = oxygen, -metry = measurement).", "finger-clip measurement of oxygen saturation", "tx", "lab", []],
["purulent", "PYOOR-yoo-lent", "Containing pus; purulent sputum is yellow or green.", "containing pus", "br", "sx", []],
["pyothorax", "pye-oh-THOH-raks", "Pus in the pleural cavity; also called empyema (py/o = pus).", "pus in the pleural space", "ds", "dz", []],
["rales", "rahlz", "Fine crackling sounds heard on inspiration, from fluid in the alveoli; also called crackles.", "crackles", "br", "sx", []],
["residual volume", "reh-ZID-yoo-al VOL-yoom", "Air left in the lungs after the most forceful exhalation.", "air left after the hardest breath out", "br", "phys", ["RV"]],
["respiration", "res-pih-RAY-shun", "The process of breathing and of exchanging oxygen and carbon dioxide between the air, the blood and the body cells.", "breathing and gas exchange", "lx", "phys", ["R"]],
["respiratory", "RES-pih-rah-tor-ee", "Pertaining to breathing (spir/o = to breathe).", "relating to breathing", "lx", "phys", []],
["respiratory distress syndrome", "RES-pih-rah-tor-ee dih-STRES SIN-drohm", "Breathing failure in premature newborns from lack of surfactant; also called hyaline membrane disease.", "newborn breathing failure from lack of surfactant", "ds", "dz", ["RDS", "IRDS", "HMD"]],
["respiratory rate", "RES-pih-rah-tor-ee rayt", "Number of breaths per minute; about 12 to 20 in a resting adult.", "breaths per minute", "br", "phys", ["R", "TPR"]],
["respiratory system", "RES-pih-rah-tor-ee SIS-tem", "The organs that bring air into and out of the lungs and exchange oxygen and carbon dioxide: nose, pharynx, larynx, trachea, bronchi and lungs.", "organs that move air and exchange gases", "lx", "body", []],
["respiratory therapist", "RES-pih-rah-tor-ee THAIR-ah-pist", "Health professional who treats breathing disorders with oxygen, inhaled medicines, breathing exercises and ventilators.", "professional giving breathing treatments", "lx", "field", ["RRT"]],
["respiratory tract", "RES-pih-rah-tor-ee trakt", "The passageway for air from the nose to the alveoli, divided into an upper and a lower tract.", "airways from nose to alveoli", "lx", "body", []],
["rhinitis", "rye-NYE-tis", "Inflammation of the mucous membrane of the nose (rhin/o = nose).", "inflammation of the nose", "lx", "dz", []],
["rhinoplasty", "RYE-noh-plas-tee", "Surgical repair or reshaping of the nose (-plasty = surgical repair).", "plastic surgery of the nose", "up", "tx", []],
["rhinorrhea", "rye-noh-REE-ah", "Discharge from the nose; runny nose (rhin/o = nose, -rrhea = flow, discharge).", "runny nose", "up", "sx", []],
["rhonchi", "RONG-kye", "Low-pitched rattling or snoring sounds from mucus in the larger airways.", "low snoring sounds from mucus in large airways", "br", "sx", []],
["septoplasty", "SEP-toh-plas-tee", "Surgical repair of a deviated nasal septum.", "surgical repair of the nasal septum", "up", "tx", ["SMR"]],
["severe acute respiratory syndrome", "seh-VEER ah-KYOOT RES-pih-rah-tor-ee SIN-drohm", "Serious viral pneumonia caused by a coronavirus.", "severe coronavirus pneumonia", "ds", "dz", ["SARS"]],
["shortness of breath", "SHORT-nes ov breth", "The feeling of not getting enough air; dyspnea.", "feeling of not getting enough air", "br", "sx", ["SOB"]],
["silicosis", "sil-ih-KOH-sis", "Lung disease from inhaling silica (stone) dust.", "lung disease from stone dust", "ds", "dz", []],
["singultus", "sing-GUL-tus", "Hiccup; involuntary spasm of the diaphragm.", "hiccup", "br", "sx", []],
["sinusitis", "sye-nus-EYE-tis", "Inflammation of the paranasal sinuses.", "inflammation of a sinus", "up", "dz", []],
["sphenoid sinus", "SFEE-noyd SYE-nus", "Paranasal sinus in the sphenoid bone behind the nasal cavity.", "deepest sinus, behind the nose", "up", "body", []],
["spirometer", "spy-ROM-eh-ter", "Instrument that measures the volume of air breathed in and out (-meter = instrument to measure).", "breathing-measurement instrument", "tx", "lab", []],
["spirometry", "spy-ROM-eh-tree", "Measurement of breathing volumes and airflow with a spirometer (spir/o = to breathe, -metry = measurement).", "measuring breathing", "tx", "lab", ["PFT", "FVC", "FEV1"]],
["sputum", "SPYOO-tum", "Mucus or phlegm coughed up from the lungs.", "thick mucus from the airways", "br", "sx", []],
["sputum culture", "SPYOO-tum KUL-cher", "Growing microorganisms from a sputum sample to identify an infection; often with sensitivity testing.", "growing germs from coughed-up phlegm", "tx", "lab", ["C&S"]],
["stridor", "STRYE-dor", "Harsh, high-pitched sound on inspiration from a blocked upper airway (larynx or trachea).", "harsh high-pitched sound on breathing in", "br", "sx", []],
["sudden infant death syndrome", "SUD-en IN-fant deth SIN-drohm", "Unexplained death of an apparently healthy infant during sleep.", "unexplained death of a baby in sleep", "ds", "dz", ["SIDS"]],
["supplemental oxygen", "sup-leh-MEN-tal OK-sih-jen", "Oxygen given in addition to room air.", "extra oxygen above room air", "tx", "tx", ["RA", "O2"]],
["surfactant", "ser-FAK-tant", "Substance that lines the alveoli and keeps them from collapsing; premature babies may lack it.", "film stopping air sacs from collapsing", "lo", "phys", []],
["sweat test", "swet test", "Test that measures salt in sweat to diagnose cystic fibrosis.", "salt measurement of perspiration for cystic fibrosis", "tx", "lab", ["CF"]],
["tachypnea", "tak-ip-NEE-ah", "Abnormally rapid breathing (tachy- = rapid).", "fast breathing", "br", "sx", []],
["thoracalgia", "thoh-rah-KAL-jee-ah", "Chest pain (thorac/o = chest, -algia = pain).", "chest pain", "br", "sx", []],
["thoracentesis", "thoh-rah-sen-TEE-sis", "Surgical puncture of the chest wall with a needle to remove fluid from the pleural cavity (-centesis = surgical puncture).", "drawing fluid from the pleural space", "tx", "lab", []],
["thoracic cavity", "thoh-RAS-ik KAV-ih-tee", "The chest cavity, which holds the lungs, heart and mediastinum (thorac/o = chest).", "chest cavity", "lo", "body", []],
["thoracoscopy", "thoh-rah-KOS-koh-pee", "Visual examination of the chest cavity with a scope.", "scope examination of the chest cavity", "tx", "lab", []],
["thoracostomy", "thoh-rah-KOS-toh-mee", "Surgical opening into the chest to insert a chest tube for drainage of air, blood or fluid.", "inserting a chest tube", "tx", "tx", []],
["thoracotomy", "thoh-rah-KOT-oh-mee", "Surgical incision into the chest wall.", "cutting into the chest", "tx", "tx", []],
["thorax", "THOH-raks", "The chest (thorac/o, pector/o, steth/o = chest).", "the chest", "lo", "body", []],
["throat culture", "throht KUL-cher", "Swabbing the throat to grow and identify bacteria, such as streptococcus.", "swab test for germs in the throat", "tx", "lab", []],
["thyroid cartilage", "THY-royd KAR-tih-lij", "Largest cartilage of the larynx; it forms the Adam's apple.", "Adam’s apple cartilage", "up", "body", []],
["tidal volume", "TYE-dal VOL-yoom", "Amount of air breathed in or out in one normal, quiet breath.", "air moved in one quiet breath", "br", "phys", ["TV"]],
["tonsillectomy", "ton-sih-LEK-toh-mee", "Surgical removal of the tonsils.", "removal of the tonsil", "up", "tx", []],
["tonsillitis", "ton-sih-LYE-tis", "Inflammation of the tonsils.", "tonsil inflammation", "up", "dz", []],
["total lung capacity", "TOH-tal lung kah-PAS-ih-tee", "Total amount of air the lungs can hold after a maximal inspiration.", "all the air the lungs can hold", "br", "phys", ["TLC"]],
["trachea", "TRAY-kee-ah", "The windpipe; tube held open by C-shaped rings of cartilage, from the larynx to the bronchi (trache/o = trachea).", "windpipe", "lo", "body", []],
["tracheal", "TRAY-kee-al", "Pertaining to the trachea.", "relating to the windpipe", "lo", "body", []],
["tracheitis", "tray-kee-EYE-tis", "Inflammation of the trachea (trache/o = trachea).", "inflammation of the windpipe", "lx", "dz", []],
["tracheomalacia", "tray-kee-oh-mah-LAY-shee-ah", "Softening of the cartilage of the trachea, so the airway collapses (-malacia = softening).", "softening of the windpipe", "lo", "dz", []],
["tracheostomy", "tray-kee-OS-toh-mee", "Surgical opening into the trachea through the neck, with a tube to keep it open (-stomy = new opening).", "opening into the windpipe through the neck", "tx", "tx", []],
["tracheotomy", "tray-kee-OT-oh-mee", "Surgical incision into the trachea (-tomy = cutting into).", "cutting into the windpipe", "tx", "tx", []],
["tuberculin skin test", "too-BER-kyoo-lin skin test", "Intradermal injection of PPD to screen for tuberculosis; also called Mantoux test.", "Mantoux skin test for TB", "tx", "lab", ["PPD"]],
["tuberculosis", "too-ber-kyoo-LOH-sis", "Contagious bacterial infection, mainly of the lungs, caused by Mycobacterium tuberculosis.", "contagious bacterial lung infection", "ds", "dz", ["TB", "PPD"]],
["upper respiratory infection", "UP-er RES-pih-rah-tor-ee in-FEK-shun", "Infection of the nose, sinuses or throat, such as the common cold.", "cold-type infection of nose and throat", "up", "dz", ["URI"]],
["upper respiratory tract", "UP-er RES-pih-rah-tor-ee trakt", "The nose, nasal cavity, paranasal sinuses, pharynx and larynx.", "nose, sinuses, pharynx and larynx", "lx", "body", ["URI"]],
["uvula", "YOO-vyoo-lah", "Small, fleshy tissue hanging from the soft palate at the back of the mouth.", "small fleshy flap hanging from the soft palate", "up", "body", []],
["uvulopalatopharyngoplasty", "yoo-vyoo-loh-pal-ah-toh-fah-RING-goh-plas-tee", "Surgery that removes part of the uvula, soft palate and pharynx to treat snoring and obstructive sleep apnea.", "surgery trimming palate and throat for sleep apnoea", "up", "tx", ["UPP", "OSA"]],
["ventilation", "ven-tih-LAY-shun", "Movement of air into and out of the lungs.", "moving air in and out of the lungs", "lx", "phys", []],
["ventilation-perfusion scan", "ven-tih-LAY-shun per-FYOO-zhun skan", "Nuclear medicine scan comparing airflow and blood flow in the lungs; used to find a pulmonary embolism.", "scan comparing airflow and blood flow in the lungs", "tx", "lab", ["VQ"]],
["ventilator", "VEN-tih-lay-tor", "Machine that breathes for a patient who cannot breathe adequately.", "breathing machine", "tx", "tx", []],
["visceral pleura", "VIS-er-al PLOO-rah", "Inner layer of the pleura that covers the surface of the lung.", "pleura covering the lung", "lo", "body", []],
["vital capacity", "VYE-tal kah-PAS-ih-tee", "Largest amount of air that can be breathed out after the deepest possible breath in.", "most air breathed out after the deepest breath in", "br", "phys", ["VC"]],
["vocal cords", "VOH-kal kordz", "Two folds in the larynx that vibrate to produce the voice; also called vocal folds.", "vibrating folds in the voice box", "up", "body", []],
["wheeze", "weez", "High-pitched whistling sound from narrowed airways, as in asthma.", "whistling sound from narrowed airways", "br", "sx", []]];
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
    ['a-, an-', ['an', 'a'], 'without, not', "without, lacking", '*'],
    ['anti-', ['anti'], 'against', "against", 'tx'],
    ['brady-', ['brady'], 'slow', "slow", 'br'],
    ['de-', ['de'], 'removal, lack of', "removal, lack of", 'tx'],
    ['dys-', ['dys'], 'difficult, painful, abnormal', "difficult, painful", 'br'],
    ['endo-', ['endo'], 'within', "within", 'tx'],
    ['eu-', ['eu'], 'good, normal', "good, normal", 'br'],
    ['ex-', ['ex'], 'out', "outside", 'lx'],
    ['hemi-', ['hemi'], 'half', "half", 'lo'],
    ['hyper-', ['hyper'], 'excessive, above normal', "excessive", '*'],
    ['hypo-', ['hypo', 'hyp'], 'deficient, below normal', "below normal", '*'],
    ['in-', ['in'], 'in, into', "in, into", 'lx'],
    ['inter-', ['inter'], 'between', "between", 'lo'],
    ['intra-', ['intra'], 'within', "within", 'lo'],
    ['para-', ['para'], 'beside, near', "beside", 'up'],
    ['poly-', ['poly'], 'many', "many", 'tx'],
    ['tachy-', ['tachy'], 'rapid', "fast", 'br'],
    // ریشه‌ها: ریه و هوا
    ['pulmon/o', ['pulmon'], 'lung', "lung", 'lx'],
    ['pneum/o, pneumon/o', ['pneumon', 'pneum'], 'lung, air', "lung, air", 'lx'],
    ['spir/o', ['spir'], 'to breathe', "to breathe", 'lx'],
    ['ox/o, ox/i', ['oxi', 'ox'], 'oxygen', "oxygen", 'br'],
    ['capn/o', ['capn'], 'carbon dioxide', "carbon dioxide", 'br'],
    ['cardi/o', ['cardi'], 'heart', "heart", 'lx'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', "blood", 'br'],
    ['cyan/o', ['cyan'], 'blue', "blue", 'br'],
    ['py/o', ['py'], 'pus', "pus", 'ds'],
    // ریشه‌ها: مجرای فوقانی
    ['nas/o', ['nas'], 'nose', "nose", 'up'],
    ['rhin/o', ['rhin'], 'nose', "nose", 'lx'],
    ['sinus/o', ['sinus'], 'sinus, cavity', "sinus", 'up'],
    ['sept/o', ['sept'], 'septum (wall)', "septum (wall)", 'up'],
    ['or/o', ['or'], 'mouth', "mouth", 'up'],
    ['pharyng/o', ['pharyng'], 'pharynx (throat)', "throat (pharynx)", 'lx'],
    ['adenoid/o', ['adenoid'], 'adenoids', "adenoid", 'up'],
    ['tonsill/o', ['tonsill'], 'tonsils', "tonsil", 'up'],
    ['uvul/o', ['uvul'], 'uvula', "uvula", 'up'],
    ['palat/o', ['palat'], 'palate', "palate", 'up'],
    ['laryng/o', ['laryng'], 'larynx (voice box)', "voice box", 'lx'],
    ['epiglott/o', ['epiglott'], 'epiglottis', "epiglottis", 'up'],
    ['phon/o', ['phon'], 'voice, sound', "sound", 'up'],
    ['muc/o', ['muc'], 'mucus', "mucus", 'up'],
    ['polyp/o', ['polyp'], 'polyp, small growth', "polyp", 'up'],
    ['ot/o', ['ot'], 'ear', "ear", 'up'],
    // ریشه‌ها: مجرای تحتانی
    ['trache/o', ['trache'], 'trachea (windpipe)', "windpipe", 'lx'],
    ['bronch/o, bronchi/o', ['bronchi', 'bronch'], 'bronchus', "main airway of the lung", 'lx'],
    ['bronchiol/o', ['bronchiol'], 'bronchiole', "bronchiole", 'lo'],
    ['alveol/o', ['alveol'], 'alveolus (air sac)', "air sac", 'lo'],
    ['lob/o', ['lob'], 'lobe', "lobe", 'lo'],
    ['pleur/o', ['pleur'], 'pleura', "pleura", 'lo'],
    ['mediastin/o', ['mediastin'], 'mediastinum', "mediastinum", 'lo'],
    ['thorac/o', ['thorac', 'thorax', 'thora'], 'chest', "the chest", 'lo'],
    ['phren/o', ['phren'], 'diaphragm (also mind)', "muscle between chest and abdomen", 'lo'],
    ['cost/o', ['cost'], 'rib', "rib", 'lo'],
    ['steth/o', ['steth'], 'chest', "chest", 'br'],
    // ریشه‌ها: نشانه، بیماری و درمان
    ['orth/o', ['orth'], 'straight, upright', "straight, upright", 'br'],
    ['tuss/i', ['tuss'], 'cough', "cough", 'tx'],
    ['atel/o', ['atel'], 'incomplete, imperfect', "incomplete", 'ds'],
    ['coni/o', ['coni'], 'dust', "dust", 'ds'],
    ['anthrac/o', ['anthrac'], 'coal', "coal", 'ds'],
    ['silic/o', ['silic'], 'silica (glass, stone)', "silica", 'ds'],
    ['myc/o', ['myc'], 'fungus', "fungus (yeast or mould)", 'ds'],
    ['tubercul/o', ['tubercul'], 'tubercle (small swelling)', "small swelling (tubercle)", 'ds'],
    ['embol/o', ['embol'], 'plug', "clot, plug", 'ds'],
    ['fibr/o', ['fibr'], 'fiber', "Field", 'ds'],
    ['carcin/o', ['carcin'], 'cancer', "cancer", 'ds'],
    ['somn/o', ['somn'], 'sleep', "sleep", 'tx'],
    // پسوندها
    ['-al, -ic, -ous, -ar, -ary, -eal, -ive', ['ary', 'eal', 'ial', 'ive', 'ous', 'ic', 'al', 'ar'], 'pertaining to', "pertaining to", '*'],
    ['-ation, -ion', ['ation', 'ion'], 'process', "process", '*'],
    ['-is, -um, -us, -a, -x', ['is', 'um', 'us', 'a', 'x'], 'noun ending', "noun ending", '*'],
    ['-ia, -y', ['ia', 'y'], 'condition', "condition", '*'],
    ['-ist', ['ist'], 'specialist', "specialist", 'lx'],
    ['-logist', ['logist'], 'specialist in the study of', "specialist", 'lx'],
    ['-logy', ['logy'], 'study of', "study of", 'lx'],
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-osis', ['osis', 'sis'], 'abnormal condition', "abnormal condition", '*'],
    ['-oma', ['oma'], 'tumor, mass', "tumour, mass", '*'],
    ['-genic', ['genic'], 'producing, originating in', "produced by", 'ds'],
    ['-pnea', ['pnea'], 'breathing', "breathing", 'br'],
    ['-oxia', ['oxia'], 'oxygen (condition of)', "oxygen (condition of)", 'br'],
    ['-capnia', ['capnia'], 'carbon dioxide (condition of)', "carbon dioxide (condition of)", 'br'],
    ['-emia', ['emia'], 'blood condition', "blood condition", 'br'],
    ['-ptysis', ['ptysis'], 'spitting', "to spit out", 'br'],
    ['-algia', ['algia'], 'pain', "pain", 'br'],
    ['-dynia', ['dynia'], 'pain', "pain", 'br'],
    ['-phonia', ['phonia'], 'voice, sound', "sound", 'up'],
    ['-spasm', ['spasm'], 'sudden involuntary contraction', "sudden contraction", 'up'],
    ['-rrhea', ['rrhea'], 'flow, discharge', "flow, discharge", 'up'],
    ['-rrhagia', ['rrhagia'], 'bursting forth (of blood)', "bleeding", 'up'],
    ['-malacia', ['malacia'], 'softening', "softening", 'lo'],
    ['-ectasis', ['ectasis'], 'dilation, expansion', "widening, opening", 'ds'],
    ['-scopy', ['scopy'], 'visual examination', "viewing with an instrument", 'tx'],
    ['-scope', ['scope'], 'instrument to view', "instrument to view", 'tx'],
    ['-metry', ['metry'], 'process of measuring', "measurement", 'tx'],
    ['-meter', ['meter'], 'instrument to measure', "measuring instrument", 'tx'],
    ['-graphy', ['graphy'], 'process of recording', "recording process", 'tx'],
    ['-centesis', ['centesis'], 'surgical puncture to remove fluid', "puncture to draw fluid", 'tx'],
    ['-stomy', ['stomy'], 'new opening', "new opening", 'tx'],
    ['-tomy', ['tomy'], 'incision, cutting into', "incision", '*'],
    ['-ectomy', ['ectomy'], 'surgical removal', "surgical removal", '*'],
    ['-plasty', ['plasty'], 'surgical repair', "surgical repair", 'tx'],
    ['-lytic', ['lytic'], 'breaking down', "breaking down", 'tx'],
    ['-therapy', ['therapy'], 'treatment', "treatment", 'tx']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['ABGs', 'arterial blood gases', "arterial blood gases", 'tx'],
    ['ARDS', 'acute respiratory distress syndrome', "acute respiratory distress syndrome", 'ds'],
    ['Bronch', 'bronchoscopy', "bronchoscopy", 'tx'],
    ['C&S', 'culture and sensitivity', "culture and sensitivity", 'tx'],
    ['CF', 'cystic fibrosis', "cystic fibrosis", 'ds'],
    ['CO2', 'carbon dioxide', "carbon dioxide", 'lx'],
    ['COPD', 'chronic obstructive pulmonary disease', "chronic obstructive lung disease", 'ds'],
    ['c/o', 'complains of', "complains of", 'lx'],
    ['CPAP', 'continuous positive airway pressure', "continuous positive airway pressure", 'tx'],
    ['CPR', 'cardiopulmonary resuscitation', "cardiopulmonary resuscitation", 'tx'],
    ['CTA', 'clear to auscultation', "clear to auscultation", 'br'],
    ['CXR', 'chest X-ray', "chest X-ray", 'tx'],
    ['DOE', 'dyspnea on exertion', "shortness of breath on exertion", 'br'],
    ['DPT', 'diphtheria, pertussis, tetanus (vaccine)', "diphtheria, pertussis, tetanus vaccine", 'ds'],
    ['ENT', 'ear, nose and throat', "ear, nose and throat", 'up'],
    ['ERV', 'expiratory reserve volume', "expiratory reserve volume", 'br'],
    ['ET', 'endotracheal (tube)', "endotracheal tube", 'tx'],
    ['FEV1', 'forced expiratory volume in one second', "forced expiratory volume in one second", 'br'],
    ['flu', 'influenza', "influenza", 'ds'],
    ['FRC', 'functional residual capacity', "functional residual capacity", 'br'],
    ['FVC', 'forced vital capacity', "forced vital capacity", 'br'],
    ['HMD', 'hyaline membrane disease', "hyaline membrane disease (newborn RDS)", 'ds'],
    ['IC', 'inspiratory capacity', "inspiratory capacity", 'br'],
    ['IPPB', 'intermittent positive pressure breathing', "intermittent positive pressure breathing", 'tx'],
    ['IRDS', 'infant respiratory distress syndrome', "respiratory distress syndrome of the newborn", 'ds'],
    ['IRV', 'inspiratory reserve volume', "inspiratory reserve volume", 'br'],
    ['LLL', 'left lower lobe', "left lower lobe", 'lo'],
    ['LUL', 'left upper lobe', "left upper lobe", 'lo'],
    ['MDI', 'metered-dose inhaler', "metered-dose inhaler", 'tx'],
    ['MERS', 'Middle East respiratory syndrome', "Middle East respiratory syndrome", 'ds'],
    ['NMT', 'nebulized mist treatment', "nebulised medicine treatment", 'tx'],
    ['O2', 'oxygen', "oxygen", 'lx'],
    ['OSA', 'obstructive sleep apnea', "obstructive sleep apnoea", 'ds'],
    ['per', 'by, through (O2 per nasal cannula)', "by way of", 'tx'],
    ['po', 'by mouth (per os)', "by mouth", 'tx'],
    ['prn', 'as needed (pro re nata)', "as needed", 'tx'],
    ['PE', 'pulmonary embolism', "clot in a lung artery", 'ds'],
    ['PEFR', 'peak expiratory flow rate', "peak expiratory flow rate", 'tx'],
    ['PFT', 'pulmonary function test', "pulmonary function test", 'tx'],
    ['PPD', 'purified protein derivative (tuberculin)', "purified protein derivative (TB test)", 'tx'],
    ['R', 'respiration', "respirations (per minute)", 'br'],
    ['RA', 'room air', "room air (no supplemental oxygen)", 'tx'],
    ['RDS', 'respiratory distress syndrome', "respiratory distress syndrome", 'ds'],
    ['RLL', 'right lower lobe', "right lower lobe", 'lo'],
    ['RML', 'right middle lobe', "right middle lobe", 'lo'],
    ['RRT', 'registered respiratory therapist', "registered respiratory therapist", 'lx'],
    ['RUL', 'right upper lobe', "right upper lobe", 'lo'],
    ['RV', 'residual volume', "residual volume", 'br'],
    ['SARS', 'severe acute respiratory syndrome', "severe acute respiratory syndrome", 'ds'],
    ['SIDS', 'sudden infant death syndrome', "sudden infant death syndrome", 'ds'],
    ['SMR', 'submucous resection (of the nasal septum)', "submucous resection of the septum", 'up'],
    ['SOB', 'shortness of breath', "shortness of breath", 'br'],
    ['TB', 'tuberculosis', "tuberculosis", 'ds'],
    ['TLC', 'total lung capacity', "total lung capacity", 'br'],
    ['TPR', 'temperature, pulse and respiration', "temperature, pulse and respirations", 'br'],
    ['TV', 'tidal volume', "tidal volume", 'br'],
    ['UPP', 'uvulopalatopharyngoplasty', "uvulopalatopharyngoplasty", 'up'],
    ['URI', 'upper respiratory infection', "upper respiratory infection", 'up'],
    ['VC', 'vital capacity', "vital capacity", 'br'],
    ['VQ', 'ventilation-perfusion (scan)', "ventilation-perfusion scan", 'tx']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'body', icon: '🫁', name: "Structures of the respiratory system" },
    { id: 'phys', icon: '🌬️', name: "Physiology, volumes and gases" },
    { id: 'field', icon: '🎓', name: "Specialties and specialists" },
    { id: 'dz', icon: '🦠', name: "Diseases" },
    { id: 'sx', icon: '🔍', name: "Signs and sounds" },
    { id: 'lab', icon: '🧪', name: "Diagnosis and tests" },
    { id: 'tx', icon: '💊', name: "Treatment, drugs and surgery" }
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
    return svg(360, 360, `${title("The respiratory system: the path of air from the nose to the alveoli")}
      ${torso(180, 30)}
      <path d="M160 52 C164 44 196 44 200 56 C202 66 196 72 186 74 L174 74 C164 72 158 62 160 52Z" fill="${C.mucosa}" stroke="${C.lungLine}" stroke-width="1"/>
      <path d="M180 74 V112" stroke="${C.mucosa}" stroke-width="12" stroke-linecap="round"/>
      <rect x="171" y="104" width="18" height="18" rx="6" fill="${C.air2}" stroke="${C.airLine}"/>
      ${lg.b}
      <path d="M92 318 Q180 268 268 318" stroke="${C.muscle}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="306" cy="232" r="26" fill="#fff" stroke="${C.lungLine}" stroke-width="1.4"/>${grape(306, 232, 12, 7)}<path d="M268 246 L282 238" stroke="${C.lungLine}" stroke-dasharray="3 2"/>
      <path d="M22 44 V122 M16 44 H28 M16 122 H28" stroke="#1d77a8" stroke-width="1.6" fill="none"/><g transform="rotate(-90 14 83)">${f(14, 83, "above; toward the head", { size: 9, fill: '#1d77a8', w: 800 })}</g>
      <path d="M22 130 V330 M16 130 H28 M16 330 H28" stroke="#8e4fb0" stroke-width="1.6" fill="none"/><g transform="rotate(-90 14 230)">${f(14, 230, "lower; toward the feet", { size: 9, fill: '#8e4fb0', w: 800 })}</g>
      ${pin(170, 60, 96, 46)}${lab(68, 42, 'nasal cavity', "nasal cavity", { size: 9.5 })}
      ${pin(180, 92, 96, 84)}${lab(68, 80, 'pharynx', "throat (pharynx)", { size: 9.5 })}
      ${pin(178, 112, 96, 122)}${lab(68, 118, 'larynx', "voice box", { size: 9.5 })}
      ${pin(180, 150, 264, 120)}${lab(306, 116, 'trachea', "windpipe", { size: 9.5 })}
      ${pin(194, 198, 264, 168)}${lab(306, 164, 'bronchus', "main airway of the lung", { size: 9.5 })}
      ${pin(306, 232, 306, 274)}${lab(306, 286, 'alveoli', "air sacs", { size: 9.5 })}
      ${pin(130, 250, 70, 230)}${lab(50, 214, 'lung', "lung", { size: 9.5 })}
      ${pin(120, 306, 70, 290)}${lab(52, 274, 'diaphragm', "muscle between chest and abdomen", { size: 9.5 })}`, "The respiratory system", lg.d);
  };

  /* تبادل گاز در آلوئول */
  A['gas-exchange'] = () => {
    const m = nid(), n = nid();
    return svg(360, 240, `${title("gas exchange: oxygen into the blood, carbon dioxide into the air")}
      <circle cx="118" cy="122" r="74" fill="${C.lung}" stroke="${C.lungLine}" stroke-width="2"/>
      <circle cx="118" cy="122" r="64" fill="#fff4f6" opacity=".7"/>
      <path d="M200 30 C230 70 230 170 200 214" stroke="#c94d5b" stroke-width="30" fill="none" stroke-linecap="round" opacity=".18"/>
      <path d="M200 30 C230 70 230 170 200 214" stroke="${C.vein}" stroke-width="22" fill="none" stroke-linecap="round" opacity=".55"/>
      <path d="M215 120 C224 160 220 190 202 214" stroke="${C.art}" stroke-width="22" fill="none" stroke-linecap="round" opacity=".55"/>
      ${[[206, 54], [214, 84], [220, 150], [214, 184]].map((p, i) => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="7" ry="5" fill="${i < 2 ? '#7a62b8' : '#d9443a'}"/>`).join('')}
      ${arrow(m, 140, 100, 196, 120, '#2e9bd6', 3)}${t(160, 96, 'O₂', { size: 13, fill: '#1d77a8', sym: true })}
      ${arrow(n, 198, 74, 146, 84, '#6f7a80', 3)}${t(176, 68, 'CO₂', { size: 13, fill: '#56606a', sym: true })}
      ${lab(100, 120, 'alveolus', "air sac", { size: 11 })}
      ${lab(296, 54, 'pulmonary capillary', "pulmonary capillary", { size: 10, faFill: INK })}
      ${f(296, 96, "oxygen-poor blood (blue)", { size: 9, fill: '#4f7fd1', w: 800 })}${f(296, 196, "oxygen-rich blood (red)", { size: 9, fill: '#c2413a', w: 800 })}
      ${f(100, 234, "external respiration = gas exchange in the lungs", { size: 9.5, fill: INK, w: 700 })}`, "Gas exchange", `${marker(m, '#2e9bd6')}${marker(n, '#6f7a80')}`);
  };

  /* آناتومی یک واژه: endo + trache + al */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 129, fa, { size: 9.5, fill: c })}`;
    return svg(360, 192, `${title("One word = prefix + root + suffix")}
      ${part(10, 66, 'endo', '#1272a3', '#ddf1fb')}${part(82, 96, 'trache', '#b03e5c', '#fde6ec')}${part(184, 46, 'al', '#3f8a05', '#e7f9d8')}
      ${br(10, 76, 'prefix', "prefix: within", '#1272a3')}${br(82, 178, 'root', "root: trachea", '#b03e5c')}${br(184, 230, 'suffix', "suffix: pertaining to", '#3f8a05')}
      <rect x="242" y="40" width="110" height="40" rx="10" fill="#f8f6f5"/>${f(297, 57, "pertaining to", { size: 10.5, fill: '#3f8a05', w: 800 })}${f(297, 73, "within the trachea", { size: 10.5, fill: INK, w: 800 })}
      <path d="M210 150 C160 176 96 176 44 150" stroke="#b03e5c" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M48 146 l-6 4 l7 3" stroke="#b03e5c" stroke-width="2" fill="none"/>
      ${f(140, 186, "Read the meaning from the end: suffix → prefix → root", { size: 10, fill: '#b03e5c', w: 700 })}`, "The anatomy of a medical word");
  };

  /* نقشه ریشه‌ها روی بدن */
  A['root-map'] = () => {
    const lg = lungs(180, 170, 0.85, { tree: false });
    const R = (x1, y1, x2, y2, root, fa, side) => `${pin(x1, y1, x2, y2)}${t(side < 0 ? x2 - 4 : x2 + 4, y2 - 2, root, { size: 11, anchor: side < 0 ? 'end' : 'start', fill: '#1d77a8', w: 900 })}${f(side < 0 ? x2 - 4 : x2 + 4, y2 + 12, fa, { size: 9, anchor: side < 0 ? 'end' : 'start', fill: INK })}`;
    return svg(360, 350, `${title("The root map: one organ, one root")}
      ${torso(180, 30)}
      <path d="M160 52 C164 44 196 44 200 56 C202 66 196 72 186 74 L174 74 C164 72 158 62 160 52Z" fill="${C.mucosa}" stroke="${C.lungLine}"/>
      <path d="M180 74 V112" stroke="${C.mucosa}" stroke-width="12" stroke-linecap="round"/><rect x="171" y="104" width="18" height="18" rx="6" fill="${C.air2}" stroke="${C.airLine}"/>
      ${lg.b}
      <path d="M100 310 Q180 268 260 310" stroke="${C.muscle}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M104 182 C92 230 94 280 112 304" stroke="${C.pleura}" stroke-width="3" fill="none"/>
      ${R(166, 60, 100, 50, 'rhin/o, nas/o', "nose", -1)}${R(180, 90, 100, 92, 'pharyng/o', "throat (pharynx)", -1)}${R(176, 112, 100, 128, 'laryng/o', "voice box", -1)}
      ${R(180, 150, 260, 120, 'trache/o', "windpipe", 1)}${R(192, 196, 260, 168, 'bronch/o', "main airway of the lung", 1)}${R(236, 240, 268, 216, 'pneum/o', "lung (also pulmon/o)", 1)}
      ${R(98, 250, 70, 214, 'pleur/o', "pleura", -1)}${R(124, 300, 70, 270, 'phren/o', "muscle between chest and abdomen", -1)}${R(250, 150, 268, 262, 'thorac/o', "the chest", 1)}`, "The root map", lg.d);
  };

  /* دوقلوهای فریبنده */
  A.twins = () => {
    const box = (x, y, c, bg, w1, m1, ex, ic) => `<rect x="${x}" y="${y}" width="164" height="86" rx="14" fill="${bg}"/>${t(x + 30, y + 50, ic, { size: 22 })}${t(x + 100, y + 32, w1, { size: 15, fill: c, w: 900 })}${f(x + 100, y + 52, m1, { size: 10.5, fill: INK, w: 800 })}${t(x + 100, y + 72, ex, { size: 9.5, fill: c, w: 800 })}`;
    return svg(360, 236, `${title("One letter, two completely different meanings")}
      ${box(10, 32, '#1d77a8', '#e2f2fb', '-pnea', "breathing", 'dyspnea', '🌬️')}${box(186, 32, '#b03e5c', '#fde6ec', '-ptysis', "to spit out", 'hemoptysis', '💦')}
      ${box(10, 126, '#8e4fb0', '#f3eafc', 'laryng/o', "larynx (voice box)", 'laryngitis', '🎤')}${box(186, 126, '#e07a3a', '#fdeee3', 'pharyng/o', "pharynx (throat)", 'pharyngitis', '👅')}
      ${f(180, 228, "Air passes through the pharynx first and then reaches the larynx", { size: 9.5, fill: MUTED, w: 700 })}`, "Look-alike words");
  };

  /* ================= دنیای ۱: تنفس فوقانی ================= */
  A['nasal-sinuses'] = () => {
    const sh = nid();
    return svg(360, 290, `${title("The paranasal sinuses (front view)")}
      <g filter="url(#${sh})"><path d="M180 28 C250 28 286 80 284 146 C282 214 236 268 180 270 C124 268 78 214 76 146 C74 80 110 28 180 28Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <path d="M126 76 C146 52 214 52 234 76 C224 92 136 92 126 76Z" fill="#f6d36a" stroke="#c99a1d" stroke-width="1.2" opacity=".92"/>
      <ellipse cx="140" cy="118" rx="20" ry="11" fill="#fff" stroke="${C.skinLine}"/><ellipse cx="220" cy="118" rx="20" ry="11" fill="#fff" stroke="${C.skinLine}"/><circle cx="140" cy="118" r="6" fill="#4a3426"/><circle cx="220" cy="118" r="6" fill="#4a3426"/>
      ${[[172, 106], [188, 106], [172, 122], [188, 122], [180, 138]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="6.5" fill="#8fd18a" stroke="#3f8a05" stroke-width="1"/>`).join('')}
      <rect x="170" y="88" width="20" height="10" rx="4" fill="#c9a8ea" stroke="#7b5cd6"/>
      <path d="M118 146 C112 176 132 196 164 186 L166 150Z M242 146 C248 176 228 196 196 186 L194 150Z" fill="#f4a36b" stroke="#c96a2a" stroke-width="1.2" opacity=".92"/>
      <path d="M180 120 C176 150 168 176 164 190 C172 200 188 200 196 190 C192 176 184 150 180 120Z" fill="#f2c0a0" stroke="${C.skinLine}"/>
      <path d="M154 228 Q180 242 206 228" stroke="#c96a6a" stroke-width="3" fill="none" stroke-linecap="round"/>
      ${pin(208, 70, 300, 50)}${lab(318, 40, 'frontal', "The forehead", { size: 10 })}
      ${pin(188, 92, 300, 98)}${lab(318, 88, 'sphenoid', "sphenoid (further back)", { size: 10 })}
      ${pin(188, 122, 300, 146)}${lab(318, 136, 'ethmoid', "ethmoid", { size: 10 })}
      ${pin(232, 170, 300, 196)}${lab(318, 186, 'maxillary', "maxillary (largest)", { size: 10 })}
      ${f(180, 284, "paranasal sinuses: air spaces that lighten the skull and make the voice resonate", { size: 9 })}`, "Sinuses", shadow(sh));
  };

  /* مجرای فوقانی در برش ساژیتال */
  A['upper-airway'] = () => {
    const sh = nid();
    const head = 'M206 26 C150 26 118 54 112 92 C110 104 96 110 88 122 C84 128 92 134 100 136 C100 144 98 150 102 154 C98 160 100 166 106 168 C104 178 108 196 120 204 C128 210 140 212 150 220 L156 330 H300 L292 236 C306 206 316 170 314 128 C312 66 270 26 206 26Z';
    return svg(360, 340, `${title("The upper respiratory tract (sagittal section)")}
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
      ${f(262, 132, "nasopharynx", { size: 8.5, anchor: 'start' })}${f(262, 184, "oropharynx", { size: 8.5, anchor: 'start' })}${f(262, 238, "laryngopharynx", { size: 8.5, anchor: 'start' })}
      ${pin(150, 116, 60, 64)}${lab(50, 54, 'nasal cavity', "nasal cavity", { size: 9.5 })}
      ${pin(160, 176, 60, 110)}${lab(46, 100, 'tongue', "tongue", { size: 9.5 })}
      ${pin(236, 112, 250, 60)}${lab(286, 50, 'adenoids', "adenoid", { size: 9.5 })}
      ${pin(214, 170, 60, 160)}${lab(46, 150, 'palatine tonsil', "palatine tonsil", { size: 9.5 })}
      ${pin(212, 210, 60, 210)}${lab(46, 200, 'epiglottis', "epiglottis", { size: 9.5 })}
      ${pin(198, 236, 60, 254)}${lab(46, 244, 'larynx', "voice box", { size: 9.5 })}
      ${pin(200, 300, 60, 300)}${lab(46, 290, 'trachea', "trachea (front)", { size: 9.5 })}
      ${pin(228, 300, 262, 300)}${lab(296, 290, 'esophagus', "oesophagus (back)", { size: 9.5 })}`, "upper respiratory tract", shadow(sh));
  };

  /* حنجره از روبه‌رو */
  A.larynx = () => {
    const g = nid();
    return svg(360, 300, `${title("The larynx from the front: the voice box")}
      <path d="M150 38 C156 22 204 22 210 38 C206 54 196 58 180 58 C164 58 154 54 150 38Z" fill="#e8c26a" stroke="#b8932a" stroke-width="1.3"/>
      <path d="M126 64 C126 54 234 54 234 64 L232 72 L128 72Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3"/>
      <path d="M130 80 L230 80 L222 140 L180 162 L138 140Z" fill="url(#${g})" stroke="${C.airLine}" stroke-width="1.5"/>
      <path d="M180 86 L180 158" stroke="${C.airLine}" stroke-width="1.2" opacity=".6"/><path d="M168 84 L180 98 L192 84" stroke="${C.airLine}" stroke-width="1.6" fill="none"/>
      <path d="M146 170 C146 160 214 160 214 170 L212 188 C200 194 160 194 148 188Z" fill="${C.air}" stroke="${C.airLine}" stroke-width="1.5"/>
      ${tracheaTube(180, 194, 290, 50)}
      ${pin(196, 40, 270, 36)}${lab(300, 30, 'epiglottis', "epiglottis", { size: 10 })}
      ${pin(226, 66, 270, 72)}${lab(300, 66, 'hyoid bone', "U-shaped bone under the tongue", { size: 10 })}
      ${pin(216, 110, 270, 116)}${lab(300, 110, 'thyroid cartilage', "thyroid cartilage", { size: 10 })}
      ${f(300, 140, "(Adam’s apple)", { size: 8.5 })}
      ${pin(208, 178, 270, 178)}${lab(300, 172, 'cricoid cartilage', "ring-shaped cartilage", { size: 10 })}
      ${pin(204, 240, 270, 240)}${lab(300, 234, 'trachea', "windpipe", { size: 10 })}
      ${pin(160, 110, 74, 110)}${lab(56, 104, 'larynx', "larynx: laryng/o", { size: 10 })}
      ${f(70, 260, "C-shaped rings of cartilage", { size: 9 })}${f(70, 274, "keep the trachea open", { size: 9 })}`, "voice box", linear(g, '#d6eefa', '#9ccbe6'));
  };

  /* تارهای صوتی از بالا */
  A['vocal-cords'] = () => {
    const panel = (cx, open) => `<ellipse cx="${cx}" cy="100" rx="66" ry="70" fill="#f1a9a8" stroke="#c96a6a" stroke-width="2"/>
      <ellipse cx="${cx}" cy="100" rx="50" ry="54" fill="#e98f94"/>
      <path d="M${cx - 30} 46 Q${cx} 30 ${cx + 30} 46" stroke="#e8c26a" stroke-width="8" fill="none" stroke-linecap="round"/>
      ${open ? `<path d="M${cx - 4} 58 L${cx - 28} 150 L${cx + 28} 150 L${cx + 4} 58Z" fill="#3b1f2a"/>` : `<path d="M${cx - 2} 58 L${cx - 3} 150 L${cx + 3} 150 L${cx + 2} 58Z" fill="#3b1f2a"/>`}
      <path d="M${cx - 6} 58 L${cx - (open ? 32 : 6)} 150" stroke="#fff" stroke-width="7" stroke-linecap="round"/><path d="M${cx + 6} 58 L${cx + (open ? 32 : 6)} 150" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`;
    return svg(360, 222, `${title("The vocal cords from above (laryngoscope view)")}
      ${panel(92, true)}${panel(268, false)}
      ${lab(92, 190, 'glottis open', "open glottis: breathing", { size: 10.5, fill: '#1d77a8' })}
      ${lab(268, 190, 'glottis closed', "closed glottis: speaking and swallowing", { size: 10.5, fill: '#b03e5c' })}
      ${pin(118, 120, 176, 90)}${t(178, 86, 'vocal cord', { size: 9, anchor: 'start' })}${pin(92, 40, 176, 54)}${t(178, 50, 'epiglottis', { size: 9, anchor: 'start' })}`, "vocal cords");
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
    return svg(360, 220, `${title("Cilia: the airway’s mucus escalator")}
      ${cells}${hairs}
      <path d="M16 78 C80 70 160 86 240 76 C290 70 330 78 346 76 L346 90 L16 92Z" fill="#d8e8a0" opacity=".85"/>
      ${[[60, 82], [130, 80], [200, 84], [270, 80]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="#6b5a3a"/>`).join('')}
      ${arrow(m, 60, 54, 300, 54, '#1d77a8', 3)}${f(180, 44, "mucus and particles are swept towards the throat", { size: 9.5, fill: '#1d77a8', w: 800 })}
      ${lab(60, 196, 'cilia', "cilia", { size: 10.5 })}${lab(180, 196, 'mucus', "sticky mucus", { size: 10.5 })}${lab(300, 196, 'mucous membrane', "Mucous membrane", { size: 10.5 })}`, "cilia", marker(m, '#1d77a8'));
  };

  /* ================= دنیای ۲: تنفس تحتانی ================= */
  A['bronchial-tree'] = () => {
    const tree = [];
    branch(166, 128, Math.PI * 0.66, 46, 9, 4, tree);
    branch(194, 128, Math.PI * 0.34, 46, 9, 4, tree);
    return svg(360, 320, `${title("The bronchial tree: from the trachea to the alveolus")}
      ${tracheaTube(180, 30, 120, 22)}
      <path d="M180 116 L166 128 M180 116 L194 128" stroke="${C.airLine}" stroke-width="12" stroke-linecap="round"/><path d="M180 116 L166 128 M180 116 L194 128" stroke="${C.air}" stroke-width="10" stroke-linecap="round"/>
      ${tree.join('')}
      ${pin(180, 70, 262, 56)}${lab(298, 50, 'trachea', "windpipe", { size: 10 })}
      ${pin(180, 118, 262, 104)}${lab(298, 98, 'carina', "where it forks", { size: 10 })}
      ${pin(152, 152, 70, 120)}${lab(46, 110, 'right main bronchus', "right main bronchus", { size: 9.5 })}
      ${pin(220, 196, 300, 172)}${lab(316, 162, 'bronchi', "bronchi", { size: 10 })}
      ${pin(106, 238, 50, 220)}${lab(40, 196, 'bronchioles', "bronchioles", { size: 10 })}
      ${pin(258, 270, 300, 250)}${lab(316, 240, 'alveoli', "air sacs", { size: 10 })}
      ${f(180, 314, "The right bronchus is shorter, wider and more vertical; foreign bodies enter it more often", { size: 9 })}`, "bronchial tree");
  };

  A['lung-lobes'] = () => {
    const lg = lungs(180, 70, 1.15, { tree: false });
    return svg(360, 300, `${title("The lobes of the lungs: three on the right, two on the left")}
      ${lg.b}
      <path d="M86 128 C110 126 140 120 166 114" stroke="${C.lungLine}" stroke-width="2" fill="none"/>
      <path d="M90 200 C116 172 144 156 168 150" stroke="${C.lungLine}" stroke-width="2" fill="none"/>
      <path d="M272 120 C246 150 214 174 194 196" stroke="${C.lungLine}" stroke-width="2" fill="none"/>
      <path d="M196 170 C214 176 222 196 210 214" fill="#fff" stroke="${C.lungLine}" stroke-width="1"/>
      ${t(128, 102, 'RUL', { size: 12, sym: true, fill: '#b03e5c' })}${t(124, 160, 'RML', { size: 12, sym: true, fill: '#b03e5c' })}${t(128, 226, 'RLL', { size: 12, sym: true, fill: '#b03e5c' })}
      ${t(240, 116, 'LUL', { size: 12, sym: true, fill: '#b03e5c' })}${t(244, 220, 'LLL', { size: 12, sym: true, fill: '#b03e5c' })}
      ${f(70, 30, "right lung", { size: 10, fill: INK, w: 800 })}${f(290, 30, "left lung", { size: 10, fill: INK, w: 800 })}
      ${pin(118, 74, 50, 52)}${lab(36, 44, 'apex', "apex", { size: 9.5 })}
      ${pin(106, 262, 50, 270)}${lab(36, 262, 'base', "Rule", { size: 9.5 })}
      ${pin(208, 196, 316, 268)}${lab(316, 256, 'cardiac notch', "cardiac notch", { size: 9.5 })}
      ${f(180, 296, 'R = right • L = left • U/M/L = upper/middle/lower lobe', { size: 9, fill: MUTED })}`, "Lung lobes", lg.d);
  };

  A.alveoli = () => {
    let net = '';
    const R = rng(8);
    for (let i = 0; i < 26; i++) { const x = 150 + R() * 150, y = 60 + R() * 140; net += `<path d="M${x.toFixed(1)} ${y.toFixed(1)} q${(8 - R() * 16).toFixed(1)} ${(8 - R() * 16).toFixed(1)} ${(14 - R() * 28).toFixed(1)} ${(14 - R() * 28).toFixed(1)}" stroke="${i % 2 ? C.art : C.vein}" stroke-width="1.6" fill="none" opacity=".75"/>`; }
    return svg(360, 250, `${title("Alveoli: where gas is exchanged")}
      ${tracheaTube(110, 34, 110, 12)}
      <path d="M110 108 C120 120 150 120 170 116" stroke="${C.airLine}" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M110 108 C120 120 150 120 170 116" stroke="${C.air}" stroke-width="6" fill="none" stroke-linecap="round"/>
      ${grape(210, 100, 30, 9)}${grape(260, 150, 28, 8)}${grape(200, 170, 24, 7)}
      ${net}
      ${pin(110, 70, 50, 58)}${lab(62, 46, 'terminal bronchiole', "terminal bronchiole", { size: 9.5 })}
      ${pin(240, 82, 306, 52)}${lab(318, 40, 'alveolus', "air sac", { size: 9.5 })}
      ${pin(282, 178, 306, 210)}${lab(318, 198, 'capillaries', "tiny vessels", { size: 9.5 })}
      ${pin(186, 182, 70, 200)}${lab(50, 188, 'surfactant', "anti-sticking layer", { size: 9.5 })}
      ${f(180, 244, "about 300 million alveoli in both lungs", { size: 9.5 })}`, "Alveoli");
  };

  A.pleura = () => {
    const lg = lungs(180, 70, 1, { tree: false, trachea: false });
    let ribs = '';
    for (let i = 0; i < 6; i++) { const y = 70 + i * 32; ribs += `<path d="M60 ${y} C40 ${y + 20} 40 ${y + 40} 56 ${y + 52}" stroke="${C.boneLine}" stroke-width="6" fill="none"/><path d="M300 ${y} C320 ${y + 20} 320 ${y + 40} 304 ${y + 52}" stroke="${C.boneLine}" stroke-width="6" fill="none"/>`; }
    return svg(360, 300, `${title("The pleura: two layers and the space between them")}
      <path d="M60 54 C40 120 40 210 70 262 L290 262 C320 210 320 120 300 54Z" fill="#fdf2f4" stroke="${C.pleura}" stroke-width="3"/>
      ${ribs}
      ${lg.b}
      <path d="M${180 - 6} 84 C150 66 104 80 98 140 C94 190 98 228 112 236" stroke="${C.pleura}" stroke-width="2.4" fill="none" stroke-dasharray="1 0"/>
      <ellipse cx="180" cy="190" rx="22" ry="34" fill="#d9443a" opacity=".8"/>
      <path d="M70 262 Q180 216 290 262" stroke="${C.muscle}" stroke-width="5" fill="none"/>
      ${pin(112, 120, 30, 34)}${t(16, 30, 'visceral pleura', { size: 9.5, anchor: 'start' })}${f(16, 44, "visceral pleura: on the lung", { size: 8.5, anchor: 'start' })}
      ${pin(300, 110, 320, 34)}${t(344, 30, 'parietal pleura', { size: 9.5, anchor: 'end' })}${f(344, 44, "parietal pleura: on the chest wall", { size: 8.5, anchor: 'end' })}
      ${pin(286, 200, 316, 290)}${t(344, 286, 'pleural cavity', { size: 9.5, anchor: 'end' })}
      ${pin(180, 200, 180, 290)}${t(180, 290, 'mediastinum', { size: 9.5 })}
      ${f(70, 290, "the pleural space holds a little fluid", { size: 8.5 })}`, "pleura", lg.d);
  };

  /* ================= دنیای ۳: تهویه و نشانه‌ها ================= */
  A.breathing = () => {
    const m = nid();
    const chest = (cx, ins) => `<path d="M${cx - (ins ? 66 : 56)} 60 C${cx - (ins ? 80 : 68)} 110 ${cx - (ins ? 78 : 66)} 160 ${cx - (ins ? 66 : 56)} 190 L${cx + (ins ? 66 : 56)} 190 C${cx + (ins ? 78 : 66)} 160 ${cx + (ins ? 80 : 68)} 110 ${cx + (ins ? 66 : 56)} 60Z" fill="#fdf2f4" stroke="${C.boneLine}" stroke-width="2"/>
      <ellipse cx="${cx - 24}" cy="${ins ? 128 : 118}" rx="${ins ? 30 : 24}" ry="${ins ? 54 : 44}" fill="${C.lung}" stroke="${C.lungLine}"/><ellipse cx="${cx + 24}" cy="${ins ? 128 : 118}" rx="${ins ? 30 : 24}" ry="${ins ? 54 : 44}" fill="${C.lung}" stroke="${C.lungLine}"/>
      <path d="M${cx - 64} 190 Q${cx} ${ins ? 182 : 150} ${cx + 64} 190" stroke="${C.muscle}" stroke-width="5" fill="none"/>
      ${tracheaTube(cx, 30, 74, 10)}`;
    return svg(360, 250, `${title("Breathing in and out: the diaphragm’s work")}
      ${chest(92, true)}${chest(268, false)}
      ${arrow(m, 92, 8, 92, 30, '#2e9bd6', 3)}${arrow(m, 268, 30, 268, 8, '#6f7a80', 3)}
      
      ${lab(92, 218, 'inspiration', "breathing in: diaphragm down, chest larger", { size: 10.5, fill: '#1d77a8' })}
      ${lab(268, 218, 'expiration', "breathing out: diaphragm up, chest smaller", { size: 10.5, fill: '#56606a' })}`, "Breathing in and out", marker(m, LINE));
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
    return svg(360, 334, `${title("Breathing patterns")}
      ${row(56, 'eupnea', "normal: 12 to 20 a minute", wave(52, 10, 40, 120, 344))}
      ${row(100, 'tachypnea', "fast", wave(96, 9, 18, 120, 344))}
      ${row(144, 'bradypnea', "slow", wave(140, 10, 80, 120, 344))}
      ${row(188, 'hyperpnea', "deep", wave(184, 16, 40, 120, 344))}
      ${row(232, 'apnea', "stopped breathing", wave(228, 10, 40, 120, 344, x => x > 190 && x < 300))}
      ${row(276, 'Cheyne-Stokes', "waxing and waning with periods of apnoea", wave(272, cs, 14, 120, 344))}
      ${f(180, 326, "-pnea = breathing; the prefix tells you the speed or depth", { size: 9.5, fill: INK, w: 700 })}`, "Breathing patterns");
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
    return svg(360, 290, `${title("The spirogram: lung volumes and capacities")}
      <rect x="60" y="${y0}" width="228" height="${H}" fill="#f5fafd" stroke="#d4e6f1"/>
      ${[0, 1, 2, 3, 4, 5, 6].map(v => `<path d="M60 ${Yv(v)} h228" stroke="#e3eef5"/>${t(54, Yv(v) + 3, v + 'L', { size: 8.5, anchor: 'end', sym: true, fill: MUTED })}`).join('')}
      <path d="${d}" stroke="#2e9bd6" stroke-width="2.6" fill="none"/>
      <path d="M60 ${Yv(1.25)} h228" stroke="#b03e5c" stroke-dasharray="4 3"/>
      ${brk(102, 3.0, 2.5, 'TV', "tidal", '#1d77a8')}
      ${brk(150, 5.75, 3.0, 'IRV', "inspiratory reserve", '#17a398')}
      ${brk(222, 2.5, 1.25, 'ERV', "expiratory reserve", '#e07a3a')}
      ${brk(222, 1.25, 0, 'RV', "residual", '#b03e5c')}
      ${brk(292, 5.75, 1.25, 'VC', "vital capacity", '#8e4fb0')}
      ${f(180, 284, "TLC = VC + RV (about 6 litres in an adult)", { size: 9.5, fill: INK, w: 700 })}`, "Spirogram");
  };

  A['lung-sounds'] = () => {
    const cardS = (x, y, ic, en, fa, where, bg) => `<rect x="${x}" y="${y}" width="108" height="98" rx="14" fill="${bg}"/>${t(x + 54, y + 28, ic, { size: 20 })}${t(x + 54, y + 50, en, { size: 11, w: 900 })}${f(x + 54, y + 66, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 54, y + 84, where, { size: 8.5 })}`;
    return svg(360, 246, `${title("Abnormal lung sounds on listening (auscultation)")}
      ${cardS(8, 30, '🎵', 'wheeze', "whistling wheeze", "narrowed airway (asthma)", '#e2f2fb')}
      ${cardS(126, 30, '📢', 'stridor', "harsh sound on breathing in", "blockage of the larynx and trachea", '#fde6ec')}
      ${cardS(244, 30, '🫧', 'rales (crackles)', "fine crackles", "fluid in the alveoli (pneumonia)", '#fdeee3')}
      ${cardS(67, 136, '🥁', 'rhonchi', "low snoring sound", "mucus in a large airway", '#eef6e6')}
      ${cardS(185, 136, '✋', 'pleural rub', "rubbing sound", "inflamed pleura", '#f3eafc')}`, "Lung sounds");
  };

  A.cyanosis = () => {
    const finger = (x, nail, club) => `<path d="M${x - 20} 190 V${club ? 80 : 74} C${x - 20} ${club ? 40 : 46} ${x + 20} ${club ? 40 : 46} ${x + 20} ${club ? 80 : 74} V190Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>${club ? `<ellipse cx="${x}" cy="66" rx="25" ry="26" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>` : ''}<path d="M${x - 13} ${club ? 50 : 56} C${x - 13} ${club ? 40 : 46} ${x + 13} ${club ? 40 : 46} ${x + 13} ${club ? 50 : 56} V${club ? 82 : 80} H${x - 13}Z" fill="${nail}" stroke="#b9849a"/>`;
    return svg(360, 236, `${title("Signs of oxygen shortage in the fingers")}
      ${finger(70, '#f4c2cf', false)}${finger(180, '#8fa6d6', false)}${finger(290, '#a9b6dc', true)}
      ${lab(70, 210, 'normal', "pink nail bed", { size: 10.5, fill: '#3f8a05' })}${lab(180, 210, 'cyanosis', "blueness (cyan/o = blue)", { size: 10.5, fill: '#1f5f9f' })}${lab(290, 210, 'clubbing', "clubbing: long-term oxygen shortage", { size: 10.5, fill: '#8e4fb0' })}`, "Cyanosis and clubbing");
  };

  /* ================= دنیای ۴: بیماری‌ها ================= */
  A['asthma-airway'] = () => {
    const ring = (cx, wall, lumen, mucus, muscle) => `<circle cx="${cx}" cy="104" r="62" fill="#f6c9c4" stroke="#c97a72" stroke-width="2"/>
      ${muscle ? Array.from({ length: 14 }, (_, i) => { const a = i / 14 * Math.PI * 2; return `<path d="M${(cx + Math.cos(a) * 50).toFixed(1)} ${(104 + Math.sin(a) * 50).toFixed(1)} L${(cx + Math.cos(a) * 58).toFixed(1)} ${(104 + Math.sin(a) * 58).toFixed(1)}" stroke="${C.muscle}" stroke-width="5" stroke-linecap="round"/>`; }).join('') : ''}
      <circle cx="${cx}" cy="104" r="${wall}" fill="#f2a6a0" stroke="#c97a72"/>
      <circle cx="${cx}" cy="104" r="${lumen}" fill="#fff"/>
      ${mucus ? `<path d="M${cx - lumen + 2} 104 C${cx - 6} 90 ${cx + 6} 118 ${cx + lumen - 2} 104 C${cx + 4} 110 ${cx - 6} 96 ${cx - lumen + 2} 104Z" fill="#d8e8a0" stroke="#9aaa4a"/>` : ''}`;
    return svg(360, 214, `${title("Asthma: a bronchiole at rest and during an attack")}
      ${ring(92, 44, 34, false, false)}${ring(268, 50, 13, true, true)}
      ${lab(92, 186, 'normal bronchiole', "open channel", { size: 10.5, fill: '#1d77a8' })}
      ${lab(268, 186, 'asthma attack', "bronchospasm + inflammation + mucus", { size: 10.5, fill: '#b03e5c' })}`, "asthma");
  };

  A.copd = () => {
    const normal = Array.from({ length: 10 }, (_, i) => `<circle cx="${40 + (i % 5) * 22}" cy="${80 + Math.floor(i / 5) * 24}" r="11" fill="${C.lung}" stroke="${C.lungLine}"/>`).join('');
    return svg(360, 234, `${title("COPD: emphysema and chronic bronchitis")}
      <rect x="8" y="32" width="164" height="150" rx="14" fill="#fdf2f4"/>
      ${normal}
      <path d="M38 152 C60 136 100 134 150 152 C140 170 60 172 38 152Z" fill="${C.lung}" stroke="${C.lungLine}"/><circle cx="74" cy="152" r="8" fill="#fff" stroke="${C.lungLine}"/><circle cx="114" cy="154" r="10" fill="#fff" stroke="${C.lungLine}"/>
      ${f(90, 58, "top: healthy • bottom: emphysema", { size: 9, fill: INK })}
      <rect x="188" y="32" width="164" height="150" rx="14" fill="#f6f8ee"/>
      <path d="M200 80 H340 V140 H200Z" fill="#f2a6a0" stroke="#c97a72"/><path d="M200 96 H340 V124 H200Z" fill="#fff"/>
      <path d="M200 104 C240 98 260 116 300 106 C320 102 330 112 340 108 V116 C320 120 300 112 260 120 C230 126 214 112 200 116Z" fill="#d8e8a0" stroke="#9aaa4a"/>
      ${[210, 230, 250, 270, 290, 310, 330].map(x => `<path d="M${x} 96 v-6" stroke="#c97a72" stroke-width="1.4"/>`).join('')}
      ${lab(90, 200, 'emphysema', "destruction of the alveolar walls", { size: 10.5, fill: '#b03e5c' })}
      ${lab(270, 200, 'chronic bronchitis', "inflammation and excess mucus in the bronchi", { size: 10.5, fill: '#6b7a2a' })}`, 'COPD');
  };

  A.pneumonia = () => {
    const a = lungs(92, 66, 0.62, { tree: false }), b = lungs(268, 66, 0.62, { tree: false });
    const R = rng(3);
    let spots = '';
    for (let i = 0; i < 14; i++) spots += `<circle cx="${(222 + R() * 92).toFixed(1)}" cy="${(90 + R() * 80).toFixed(1)}" r="${(4 + R() * 4).toFixed(1)}" fill="#c9a23a" opacity=".75"/>`;
    return svg(360, 236, `${title("Lobar pneumonia and bronchopneumonia")}
      ${a.b}${b.b}
      <path d="M44 130 C60 124 80 120 86 120 L86 170 C70 166 50 170 42 172 C40 156 40 140 44 130Z" fill="#c9a23a" opacity=".7"/>
      ${spots}
      ${lab(92, 196, 'lobar pneumonia', "a whole lobe involved", { size: 10.5, fill: '#8a6a1c' })}
      ${lab(268, 196, 'bronchopneumonia', "scattered patches around the bronchioles", { size: 10.5, fill: '#8a6a1c' })}`, "Pneumonia", a.d + b.d);
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
    return svg(360, 308, `${title("Diseases of the pleural space")}
      ${mini(8, 30, 'pneumo', 'pneumothorax', "air → the lung collapses")}
      ${mini(184, 30, 'hemo', 'hemothorax', "blood in the pleural space")}
      ${mini(8, 168, 'pyo', 'pyothorax (empyema)', "pus in the pleural space")}
      ${mini(184, 168, 'eff', 'pleural effusion', "fluid in the pleural space")}`, "Pleural diseases");
  };

  A.atelectasis = () => svg(360, 210, `${title("Atelectasis: collapse of the alveoli")}
      ${grape(92, 100, 34, 9)}
      ${Array.from({ length: 8 }, (_, i) => `<ellipse cx="${236 + (i % 4) * 22}" cy="${86 + Math.floor(i / 4) * 30}" rx="10" ry="3.5" fill="${C.lung2}" stroke="${C.lungLine}"/>`).join('')}
      ${lab(92, 172, 'normal alveoli', "open, air-filled alveoli", { size: 10.5, fill: '#1d77a8' })}
      ${lab(268, 172, 'atelectasis', "atel/o (incomplete) + -ectasis (expansion)", { size: 10.5, fill: '#b03e5c' })}`, "Atelectasis");

  A['sleep-apnea'] = () => {
    const airway = (cx, closed) => `<path d="M${cx - 50} 40 C${cx - 50} 30 ${cx + 50} 30 ${cx + 50} 40 V170 H${cx - 50}Z" fill="${C.skin}" stroke="${C.skinLine}"/>
      <path d="M${cx - 12} 40 V170 M${cx + 12} 40 V170" stroke="${C.lungLine}" stroke-width="2"/>
      <rect x="${cx - 11}" y="40" width="22" height="130" fill="#eef7fd"/>
      ${closed ? `<path d="M${cx - 12} 90 C${cx} 98 ${cx + 6} 108 ${cx + 12} 112 L${cx + 12} 120 C${cx} 116 ${cx - 6} 110 ${cx - 12} 108Z" fill="#e88a94" stroke="#b9576a"/>` : ''}
      <path d="M${cx - 34} 74 C${cx - 24} 84 ${cx - 16} 88 ${cx - 12} 92" stroke="#e88a94" stroke-width="10" stroke-linecap="round" fill="none"/>`;
    return svg(360, 226, `${title("obstructive sleep apnoea")}
      ${airway(92, false)}${airway(268, true)}
      ${lab(92, 196, 'open airway', "open airway", { size: 10.5, fill: '#1d77a8' })}
      ${lab(268, 196, 'obstructive sleep apnea', "the tongue and throat block the way", { size: 10.5, fill: '#b03e5c' })}`, "Sleep apnoea");
  };

  /* ================= دنیای ۵: تشخیص و درمان ================= */
  A.spirometry = () => {
    const X = s => 60 + s * 44, Yv = v => 220 - v * 34;
    const curve = (fvc, fev1) => { let d = `M${X(0)} ${Yv(0)}`; for (let s = 0; s <= 6; s += 0.1) { const k = 1 - Math.exp(-s * (-Math.log(1 - fev1 / fvc))); d += ` L${X(s).toFixed(1)} ${Yv(fvc * k).toFixed(1)}`; } return d; };
    return svg(360, 262, `${title("Spirometry: the volume-time curve")}
      <rect x="60" y="40" width="270" height="180" fill="#f5fafd" stroke="#d4e6f1"/>
      ${[0, 1, 2, 3, 4, 5].map(v => `<path d="M60 ${Yv(v)} h270" stroke="#e3eef5"/>${t(54, Yv(v) + 3, v + 'L', { size: 8.5, anchor: 'end', sym: true, fill: MUTED })}`).join('')}
      ${[0, 1, 2, 3, 4, 5, 6].map(s => t(X(s), 234, s + 's', { size: 8.5, sym: true, fill: MUTED })).join('')}
      <path d="M${X(1)} 40 V220" stroke="#b03e5c" stroke-dasharray="4 3"/>
      <path d="${curve(4.6, 3.8)}" stroke="#2e9bd6" stroke-width="2.8" fill="none"/>
      <path d="${curve(3.5, 2.0)}" stroke="#e07a3a" stroke-width="2.8" fill="none"/>
      ${t(X(1) + 4, 52, 'FEV1', { size: 10, sym: true, anchor: 'start', fill: '#b03e5c' })}
      ${lab(284, 66, 'normal', "normal: ratio about 80%", { size: 9.5, fill: '#1d77a8' })}
      ${lab(284, 130, 'obstructive', "obstructive: ratio under 70%", { size: 9.5, fill: '#c96a2a' })}
      ${f(196, 256, "FEV1 = first-second volume • FVC = total forced exhaled volume", { size: 9.5, fill: INK, w: 700 })}`, "Spirometry");
  };

  A['pulse-ox'] = () => svg(360, 210, `${title("Pulse oximetry: blood oxygen saturation")}
      <path d="M40 120 C40 104 54 96 70 96 H200 C214 96 222 106 222 120 C222 134 214 144 200 144 H70 C54 144 40 136 40 120Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>
      <rect x="150" y="80" width="74" height="80" rx="16" fill="#3d6fd6"/><rect x="160" y="92" width="54" height="34" rx="6" fill="#0f2747"/>
      ${t(187, 115, '98%', { size: 15, sym: true, fill: '#6ff2c5' })}
      <path d="M162 140 l8 0 l4 -8 l4 14 l4 -6 l18 0" stroke="#fff" stroke-width="2" fill="none"/>
      <path d="M224 120 C262 120 270 60 300 60" stroke="#77868e" stroke-width="3" fill="none"/>
      ${lab(298, 100, 'pulse oximeter', "pulse oximeter", { size: 10.5 })}
      ${f(298, 140, "normal SpO2: 95 to 100%", { size: 9.5, fill: '#3f8a05', w: 800 })}${f(298, 158, "under 90%: hypoxaemia", { size: 9.5, fill: '#c2413a', w: 800 })}
      ${f(130, 190, "red light passes through the finger and measures the colour of arterial blood", { size: 9 })}`, "pulse oximetry");

  A.intubation = () => {
    const sh = nid();
    return svg(360, 280, `${title("Intubation into the trachea (endotracheal)")}
      <g filter="url(#${sh})"><path d="M206 26 C150 26 118 54 112 92 C110 104 96 110 88 122 C84 128 92 134 100 136 C100 144 98 150 102 154 C98 160 100 166 106 168 C104 178 108 196 120 204 C128 210 140 212 150 220 L156 276 H300 L292 236 C306 206 316 170 314 128 C312 66 270 26 206 26Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <path d="M114 152 C140 144 186 146 206 160 C208 178 196 192 170 194 C142 194 120 184 114 172Z" fill="#e88a94" stroke="#b9576a"/>
      ${tracheaTube(204, 216, 276, 18)}<path d="M226 230 V276" stroke="#d9a0a0" stroke-width="14"/>
      <path d="M70 150 L104 158 C150 160 196 168 202 200 L204 262" stroke="#7fb6d8" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M70 150 L104 158 C150 160 196 168 202 200 L204 262" stroke="#e8f4fb" stroke-width="3" fill="none" stroke-linecap="round"/>
      <ellipse cx="204" cy="248" rx="11" ry="8" fill="#9fd0f0" stroke="#3f7fbf" opacity=".85"/>
      ${pin(80, 152, 50, 110)}${lab(46, 96, 'ET tube', "endotracheal tube", { size: 10, sym: false })}
      ${pin(214, 248, 290, 250)}${lab(316, 238, 'cuff', "cuff: seals the airway", { size: 9.5 })}
      ${pin(210, 230, 290, 200)}${lab(316, 188, 'trachea', "windpipe", { size: 9.5 })}
      ${pin(228, 262, 290, 274)}${t(306, 278, 'esophagus', { size: 9, anchor: 'start' })}
      ${f(100, 268, "the tube must be in the trachea, not the oesophagus", { size: 9, fill: '#b03e5c', w: 800 })}`, "Intubation", shadow(sh));
  };

  A.tracheostomy = () => svg(360, 240, `${title("Tracheostomy: an airway through the front of the neck")}
      <path d="M110 50 C110 34 250 34 250 50 L262 232 H98Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>
      ${tracheaTube(180, 70, 232, 34)}
      <path d="M150 54 C160 46 200 46 210 54 L204 70 H156Z" fill="${C.air2}" stroke="${C.airLine}"/>
      <rect x="150" y="126" width="60" height="18" rx="9" fill="#e8f4fb" stroke="#3f7fbf" stroke-width="2"/>
      <path d="M118 134 H150 M210 134 H242" stroke="#77868e" stroke-width="3"/><circle cx="180" cy="135" r="6" fill="#fff" stroke="#3f7fbf" stroke-width="2"/>
      ${pin(210, 134, 290, 110)}${lab(306, 98, 'tracheostomy tube', "tracheostomy tube", { size: 9.5 })}
      ${pin(194, 180, 290, 186)}${lab(306, 176, 'trachea', "windpipe", { size: 9.5 })}
      ${pin(160, 60, 70, 60)}${lab(52, 50, 'larynx', "voice box", { size: 9.5 })}
      ${f(70, 150, "-stomy = a new opening", { size: 9, fill: INK })}${f(70, 168, "-tomy = just a cut", { size: 9, fill: INK })}`, "tracheostomy");

  A.thoracentesis = () => {
    const lg = lungs(180, 70, 0.95, { tree: false, trachea: false });
    return svg(360, 270, `${title("Thoracentesis: drawing fluid from the pleural space")}
      <path d="M70 56 C50 120 50 200 80 244 L280 244 C310 200 310 120 290 56Z" fill="#fdf2f4" stroke="${C.pleura}" stroke-width="3"/>
      ${lg.b}
      <path d="M58 196 C80 186 118 188 150 200 L150 236 L76 238 C64 228 60 214 58 196Z" fill="#9fd0f0" opacity=".85"/>
      <path d="M8 206 L70 212" stroke="#77868e" stroke-width="4" stroke-linecap="round"/><path d="M70 212 L96 214" stroke="#9aa9b1" stroke-width="1.6"/>
      <rect x="0" y="198" width="22" height="16" rx="3" fill="#cfd8dc" stroke="#77868e"/>
      ${pin(110, 216, 120, 262)}${t(124, 264, "pleural effusion • pleural fluid", { size: 9.5, anchor: 'start' })}
      ${pin(40, 210, 64, 160)}${lab(64, 138, 'needle', "needle between the ribs", { size: 9.5 })}
      ${f(260, 30, 'thorac/o + ‎-centesis', { size: 9.5, fill: '#1d77a8', w: 800 })}`, "Thoracentesis", lg.d);
  };

  A['oxygen-devices'] = () => {
    const c2 = (x, y, ic, en, fa, sub, bg) => card(x, y, 108, 92, bg, ic, en, fa, sub);
    return svg(360, 222, `${title("Oxygen devices and inhaled medicines")}
      ${c2(8, 30, '👃', 'nasal cannula', "nasal cannula", "low-flow oxygen", '#e2f2fb')}
      ${c2(126, 30, '😷', 'face mask', "oxygen mask", "more oxygen", '#eef6e6')}
      ${c2(244, 30, '💤', 'CPAP', "continuous positive pressure", "Sleep apnoea", '#f3eafc')}
      ${c2(67, 128, '🌫️', 'nebulizer', "nebuliser", "medicine as a mist", '#fdeee3')}
      ${c2(185, 128, '💨', 'MDI', "inhaler", "measured dose", '#fde6ec')}`, "Respiratory devices");
  };

  A['lung-surgery'] = () => {
    const a = lungs(92, 70, 0.62, { tree: false }), b = lungs(268, 70, 0.62, { tree: false });
    return svg(360, 226, `${title("Lung surgery: a lobe or a whole lung")}
      ${a.b}${b.b}
      <path d="M44 124 C60 120 80 118 86 116 L86 182 C66 176 50 178 42 182 C40 160 40 140 44 124Z" fill="#fff" stroke="#c2413a" stroke-width="2" stroke-dasharray="4 3"/>
      <path d="${b.R}" fill="#fff" stroke="#c2413a" stroke-width="2" stroke-dasharray="4 3"/>
      ${lab(92, 202, 'lobectomy', "removing one lobe", { size: 10.5, fill: '#b03e5c' })}
      ${lab(268, 202, 'pneumonectomy', "removing a whole lung", { size: 10.5, fill: '#b03e5c' })}`, "Lung surgery", a.d + b.d);
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
    id: 'lx', sym: 'Lx', name: "Language of Breathing", short: "Language of Breathing", sub: "What the respiratory system does and how its words are built: roots, prefixes, suffixes and the path of air",
    color: '#2E9BD6', dark: '#1F6F9F', light: '#E2F2FB',
    levels: ["The path of air and gas exchange", "Main roots", "Prefixes and suffixes"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: مسیر هوا و تبادل گاز ================= */
      {
        id: 'lx1', title: "From the nose to the alveolus", icon: '🫁', items: [
          L("The path of air", `${fig('resp-overview', [], "The respiratory system")}Air follows this path:<br>nose → pharynx (${e('pharynx')}) → larynx (${e('larynx')}) → trachea (${e('trachea')}) → bronchi (${e('bronchi')}) → bronchioles (${e('bronchioles')}) → air sacs (${e('alveoli')})<br>The nose to the larynx is the ${e('<b>upper respiratory tract</b>')} and the trachea to the alveoli the ${e('<b>lower respiratory tract</b>')}.`),
          L("Specialists", `${tbl([["specialist", "Job"], [e('pulmonologist'), "diseases of the lungs and airways"], [e('otorhinolaryngologist (ENT)'), "ear, nose and throat"], [e('respiratory therapist (RRT)'), "oxygen, inhaled medicines and ventilators"]])}${memo("Remember ENT as “ear first, then nose, then throat”: Ear, Nose, Throat.")}${pearl("In charts, the lung department is written “pulmonary medicine” or “pulmonology”.")}`),
          M("After the larynx, which part does air enter?", ["windpipe (trachea)", "throat (pharynx)", "bronchiole", "oesophagus"], "Larynx → trachea → bronchi.", null, F('resp-overview', [])),
          M(`Who is a ${e('<b>pulmonologist</b>')}?`, ["lung specialist", "ear, nose and throat specialist", "respiratory therapist", "chest surgeon"], "pulmon/o (lung) + -logist."),
          T("The larynx is part of the upper respiratory tract.", true, "The nose, sinuses, pharynx and larynx = the upper tract."),
          O("Put the path of air in order from outside to inside", ['nose', 'pharynx', 'larynx', 'trachea', 'bronchi', 'alveoli'], "Nose, pharynx, larynx, trachea, bronchus, alveolus."),
          P("Match each part to its everyday name", [['pharynx', "throat"], ['larynx', "voice box"], ['trachea', "windpipe"], ['bronchus', "main airway of the lung"]], "The four main stations of air."),
          B("The abbreviation ___ means an ear, nose and throat specialist.", ['ENT', 'URI', 'RRT'], 'ear, nose and throat.'),
          S("Spell the term for the process of breathing and gas exchange", 'respiratory system', "spir/o = to breathe.", 'resp…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: "Breathing in, breathing out and gas exchange", icon: '🌬️', items: [
          L("Three jobs of breathing", `${fig('gas-exchange', [], "Gas exchange in the alveolus")}• ${e('<b>ventilation</b>')}: moving air in and out<br>• ${e('<b>external respiration</b>')}: gas exchange between the alveolus and capillary blood<br>• ${e('<b>internal respiration</b>')}: gas exchange between the blood and the body’s cells<br>Oxygen (${e('O2')}) enters the blood and carbon dioxide (${e('CO2')}) leaves.`),
          L("Breathing in and out", `${fig('breathing', [], "The diaphragm’s work")}${wb('in-', 'spir/o', '-ation')} → breathing in (${e('inhalation')})<br>${wb('ex-', 'spir/o', '-ation')} → breathing out (${e('exhalation')})<br>On breathing in, the diaphragm contracts and flattens and the chest enlarges; on breathing out it relaxes and rises.${memo("Inspiration = In: air comes “in”. Expiration = Exit: air goes “out”.")}`),
          M("What is gas exchange between the alveolus and the blood called?", ['external respiration', 'internal respiration', 'ventilation', 'expiration'], "External respiration, in the lungs.", null, F('gas-exchange', [])),
          M("What does the diaphragm do on breathing in?", ["contracts, flattens and moves down", "relaxes and moves up", "does not change", "bends forwards"], "The chest enlarges and the pressure inside it falls.", null, F('breathing', [])),
          T("Internal respiration means gas exchange between the blood and the body’s cells.", true, "Internal respiration, in the tissues."),
          W("Build a word meaning “breathing out”", ['ex-', 'spir/o', '-ation'], ['in-', 'pneum/o', '-itis'], 'ex- + spir/o + -ation = expiration.'),
          P("Match each term to its meaning", [['inspiration', "inhalation"], ['expiration', "exhalation"], ['ventilation', "moving air in and out of the lungs"], ['CO2', "carbon dioxide"]], "Basic breathing words."),
          B("The root ___ means “to breathe”.", ['spir/o', 'pneum/o', 'pulmon/o'], "respiration, spirometry."),
          S("Spell the term for moving air into and out of the lungs", 'ventilation', "Air moving in and out.", 'venti…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: "The anatomy of a word", icon: '🧩', items: [
          L("A medical word is a puzzle", `${fig('wordparts', [], "Prefix + root + suffix")}Every word is built from parts:<br>• <b>root</b>: the core meaning, such as ${e('trache')} = trachea<br>• <b>prefix</b>: the start of the word, such as ${e('endo-')} = within<br>• <b>suffix</b>: the end of the word, such as ${e('-itis')} = inflammation<br>• <b>combining vowel</b> (usually ${e('o')}): ${e('bronch/o/scopy')}`),
          L("The golden rule", `Start the meaning from the <b>suffix</b>, then the <b>prefix</b> and finally the <b>root</b>:<br>${wb('bronch/o', '-itis')} → “inflammation of a bronchus”<br>${wb('endo-', 'trache/o', '-al')} → “relating to within the trachea”<br>${wb('rhin/o', '-itis')} → “inflammation of the nose”${memo("If the suffix starts with a vowel, the combining vowel is dropped: bronch/o + -itis = bronchitis, not bronchoitis.")}`),
          M(`${e('<b>bronchitis</b>')} means…`, ["inflammation of a bronchus", "tracheitis", "lung inflammation", "narrowing of an airway"], 'bronch/o + -itis.'),
          M(`In ${e('<b>endotracheal</b>')}, which is the prefix?`, ["endo- = within", "-al = relating to", "trache/o = trachea", "tra- = across"], 'endo + trache + al.'),
          T("In rhinitis, the combining vowel o has been dropped.", true, "rhin + itis = inflammation of the nose."),
          W("Build a word meaning “inflammation of the trachea”", ['trache/o', '-itis'], ['bronch/o', '-scopy', 'endo-'], 'trache/o + -itis = tracheitis.'),
          O("Read endotracheal with the golden rule; put the steps in order", ["‎-al: pertaining to", "endo-: within", "trache/o: trachea", "result: relating to within the trachea"], "Suffix → prefix → root."),
          P("Match each piece to its type", [['endo-', "prefix"], ['trache/o', "root"], ['-itis', "suffix"], ["the o in bronchoscopy", "combining vowel"]], "Three parts + a combining vowel."),
          S("Spell the term for inflammation of the nose", 'rhinitis', 'rhin/o + -itis.', 'rhin…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲: ریشه‌های اصلی ================= */
      {
        id: 'lx4', title: "Roots for lung and air", icon: '🎈', items: [
          L("Three roots for the lung", `${tbl([["root", "Meaning", "Example"], [e('pulmon/o'), "lung", e('pulmonary, pulmonologist')], [e('pneum/o, pneumon/o'), "lung; air", e('pneumonia, pneumothorax')], [e('spir/o'), "to breathe", e('spirometry')], [e('ox/o, ox/i'), "oxygen", e('hypoxia, oximeter')], [e('capn/o'), "carbon dioxide", e('hypercapnia')]])}`),
          L("pneum/o has two meanings", `${vs(["pneum/o = air", "pneumothorax: air in the chest"], ["pneumon/o = lung", "pneumonia: inflammation of the lung"])}${wb('cardi/o', 'pulmon/o', '-ary')} → relating to heart and lungs; as in ${e('CPR')}${memo("Pneumatic means air-filled (like a pneumatic tyre); pneum/o also brings air to mind.")}`),
          M("Which root does not mean “lung”?", ['spir/o', 'pulmon/o', 'pneumon/o', 'pneum/o'], "spir/o means to breathe."),
          M(`${e('<b>pneumothorax</b>')} means…`, ["air in the chest cavity", "lung inflammation", "fluid in the lung", "lung tumour"], "pneum/o (air) + thorac/o (chest)."),
          T("Cardiopulmonary means relating to the heart and lungs.", true, 'cardi/o + pulmon/o + -ary.'),
          W("Build a word meaning “relating to the lungs”", ['pulmon/o', '-ary'], ['pneum/o', '-itis', 'spir/o'], 'pulmon/o + -ary = pulmonary.'),
          P("Match each root to its meaning", [['pulmon/o', "lung"], ['spir/o', "to breathe"], ['ox/o', "oxygen"], ['capn/o', "carbon dioxide"]], "Roots for lung and gas."),
          B("Inflammation of lung tissue is called ___.", ['pneumonitis', 'pleuritis', 'pharyngitis'], 'pneumon/o + -itis.'),
          S("Spell the adjective meaning “of the lungs”", 'pulmonary', 'pulmon/o + -ary.', 'pulm…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: "The root map from the nose to the diaphragm", icon: '🗺️', items: [
          L("One organ, one root", `${fig('root-map', [], "The root map")}${tbl([["root", "Meaning"], [e('rhin/o, nas/o'), "nose"], [e('pharyng/o'), "throat (pharynx)"], [e('laryng/o'), "voice box"], [e('trache/o'), "windpipe"], [e('bronch/o, bronchi/o'), "main airway of the lung"], [e('pleur/o'), "pleura"], [e('thorac/o'), "the chest"], [e('phren/o'), "muscle between chest and abdomen"]])}`),
          L("One root, many words", `${e('laryng/o')}: ${e('laryngitis')}, ${e('laryngoscopy')}, ${e('laryngectomy')}<br>${e('thorac/o')}: ${e('thoracotomy')}, ${e('thoracentesis')}, ${e('thoracoscopy')}<br>${e('pleur/o')}: ${e('pleurisy')}, ${e('pleural')}, ${e('pleurodynia')}${memo("phren/o means both the diaphragm and the “mind” (schizophrenia); in the respiratory system it is always the diaphragm.")}`),
          M("Which is the root for “larynx”?", ['laryng/o', 'pharyng/o', 'trache/o', 'rhin/o'], "larynx = voice box.", null, F('root-map', [])),
          M(`Which muscle does the ${e('<b>phrenic nerve</b>')} control?`, ["muscle between chest and abdomen", "intercostal muscles", "voice box", "tongue"], "phren/o = diaphragm."),
          T("thorac/o means chest.", true, "thoracic cavity = chest cavity."),
          W("Build a word meaning “incision into the chest”", ['thorac/o', '-tomy'], ['pleur/o', '-scopy', 'laryng/o'], 'thorac/o + -tomy = thoracotomy.'),
          P("Match each root to its organ", [['rhin/o', "nose"], ['pharyng/o', "throat (pharynx)"], ['pleur/o', "pleura"], ['bronch/o', "main airway of the lung"]], "The root map."),
          B("Inflammation of the pharynx is called ___.", ['pharyngitis', 'laryngitis', 'rhinitis'], 'pharyng/o + -itis.'),
          S("Spell the term for the voice box", 'larynx', 'laryng/o.', 'lar…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: "Colour, blood and pus", icon: '🎨', items: [
          L("Sign roots", `${tbl([["root", "Meaning", "Example"], [e('cyan/o'), "blue", e('cyanosis')], [e('hem/o'), "blood", e('hemoptysis, hemothorax')], [e('py/o'), "pus", e('pyothorax')], [e('muc/o'), "mucus", e('mucolytic')], [e('orth/o'), "straight, upright", e('orthopnea')], [e('tuss/i'), "cough", e('antitussive')]])}`),
          L("Three things in the pleural space", `${wb('pneum/o', 'thorac/o')} → air in the chest<br>${wb('hem/o', 'thorac/o')} → blood in the chest<br>${wb('py/o', 'thorac/o')} → pus in the chest${memo("The first root says “what” and thorax says “where”: air, blood or pus in the chest.")}${pearl("Blue lips and nail beds (cyanosis) mean low blood oxygen; an urgent sign at the bedside.")}`),
          M(`${e('<b>hemoptysis</b>')} means…`, ["coughing up blood", "nosebleed", "blood in the pleural space", "low red blood cells (anaemia)"], "hem/o + -ptysis (spitting)."),
          M("What is pus in the pleural space called?", ['pyothorax', 'hemothorax', 'pneumothorax', 'hydrothorax'], "py/o = pus; its other name is empyema."),
          T("cyan/o means red.", false, "False; cyan/o means blue and bluish."),
          W("Build a word meaning “blood in the chest”", ['hem/o', 'thorac/o'], ['py/o', '-itis', 'pneum/o'], 'hem/o + thorac/o = hemothorax.'),
          P("Match each root to its meaning", [['cyan/o', "bruised"], ['py/o', "pus"], ['tuss/i', "cough"], ['muc/o', "mucus"]], "Sign roots."),
          B("A drug that calms a cough is an ___.", ['antitussive', 'expectorant', 'mucolytic'], 'anti- + tuss/i + -ive.'),
          S("Spell the term for bluish skin from lack of oxygen", 'cyanosis', 'cyan/o + -osis.', 'cyan…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳: پیشوندها و پسوندها ================= */
      {
        id: 'lx7', title: "Breathing prefixes", icon: '⏱️', items: [
          L("Speed, depth and state", `${tbl([["prefix", "Meaning", "Example"], [e('eu-'), "good, normal", e('eupnea')], [e('a-, an-'), "without", e('apnea, anoxia')], [e('dys-'), "difficult", e('dyspnea')], [e('tachy-'), "fast", e('tachypnea')], [e('brady-'), "slow", e('bradypnea')], [e('hyper-'), "excessive", e('hyperpnea, hypercapnia')], [e('hypo-'), "below normal", e('hypoxia')]])}`),
          L("Position prefixes", `${tbl([["prefix", "Meaning", "Example"], [e('endo-'), "within", e('endotracheal')], [e('intra-'), "within", e('intrapleural')], [e('inter-'), "between", e('intercostal')], [e('para-'), "beside", e('paranasal')]])}${vs(['tachy-', "fast: tachypnea"], ['brady-', "slow: bradypnea"])}${memo("A tachometer is a car’s speed needle; tachy- means fast.")}`),
          M(`${e('<b>dyspnea</b>')} means…`, ["difficult breathing, breathlessness", "fast breathing", "stopped breathing", "normal breathing"], 'dys- + -pnea.'),
          M("Which prefix means “normal, good”?", ['eu-', 'dys-', 'a-', 'hyper-'], "eupnea = normal breathing."),
          T("Paranasal sinuses means the sinuses beside the nose.", true, "para- = beside."),
          W("Build a word meaning “within the pleural space”", ['intra-', 'pleur/o', '-al'], ['inter-', 'cost/o', '-itis'], 'intra- + pleur/o + -al = intrapleural.'),
          P("Match each prefix to its meaning", [['tachy-', "fast"], ['brady-', "slow"], ['a-', "without"], ['hypo-', "below normal"]], "Breathing prefixes."),
          B("The muscles between the ribs are called ___ muscles.", ['intercostal', 'intracostal', 'paracostal'], "inter- = between."),
          S("Spell the term for difficult breathing", 'dyspnea', 'dys- + -pnea.', 'dysp…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: "Breathing suffixes", icon: '✂️', items: [
          L("Sign and disease suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-pnea'), "breathing", e('apnea')], [e('-ptysis'), "spitting", e('hemoptysis')], [e('-oxia'), "oxygen (condition of)", e('hypoxia')], [e('-capnia'), "CO2 condition", e('hypercapnia')], [e('-ectasis'), "widening, opening", e('bronchiectasis')], [e('-phonia'), "sound", e('dysphonia')], [e('-spasm'), "sudden contraction", e('bronchospasm')]])}`),
          L("Diagnostic and surgical suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-scopy'), "viewing with an instrument", e('bronchoscopy')], [e('-metry'), "measurement", e('spirometry')], [e('-centesis'), "puncture to draw fluid", e('thoracentesis')], [e('-stomy'), "new opening", e('tracheostomy')], [e('-tomy'), "incision", e('tracheotomy')], [e('-ectomy'), "removal", e('lobectomy')], [e('-plasty'), "repair", e('rhinoplasty')]])}${memo("-stomy makes a new “mouth” (stoma) that stays open; -tomy is just a cut.")}`),
          M(`${e('<b>bronchiectasis</b>')} means…`, ["permanent widening of the bronchi", "narrowing of an airway", "inflammation of a bronchus", "removal of a bronchus"], 'bronchi/o + -ectasis.'),
          M("Which suffix means “making an opening”?", ['‎-stomy', '‎-tomy', '‎-ectomy', '‎-scopy'], "tracheostomy = an opening in the trachea."),
          T("Spirometry means measuring breathing.", true, 'spir/o + -metry.'),
          W("Build a word meaning “viewing a bronchus with an instrument”", ['bronch/o', '-scopy'], ['-stomy', 'trache/o', '-ectasis'], 'bronch/o + -scopy = bronchoscopy.'),
          P("Match each suffix to its meaning", [['-ptysis', "spitting"], ['-capnia', "carbon dioxide (condition of)"], ['-centesis', "drawing fluid with a needle"], ['-phonia', "sound"]], "Breathing suffixes."),
          B("Removal of one lobe of a lung is called ___.", ['lobectomy', 'lobotomy', 'lobostomy'], 'lob/o + -ectomy.'),
          S("Spell the term for measuring breathing", 'spirometry', 'spir/o + -metry.', 'spiro…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: "Look-alike Traps", icon: '🪤', items: [
          L("One letter, a world of difference", `${fig('twins', [], "Look-alike suffixes and roots")}${vs(['‎-pnea', "breathing: dyspnea"], ['‎-ptysis', "spitting: hemoptysis"])}${vs(['laryng/o', "larynx: laryngitis"], ['pharyng/o', "pharynx: pharyngitis"])}`),
          L("Other twins", `${vs(['‎-stomy', "lasting opening: tracheostomy"], ['‎-tomy', "cut: tracheotomy"])}${vs(['pleur/o', "pleura: pleurisy"], ['pulmon/o', "the lung itself: pulmonary"])}${vs(['hypoxia', "lack of oxygen in the tissues"], ['hypoxemia', "lack of oxygen in the blood"])}${memo("-emia means blood: hypoxemia is in the blood, hypoxia in the tissues.")}`),
          M(`What is the difference between ${e('<b>hemoptysis</b>')} and ${e('<b>epistaxis</b>')}?`, ["the first is blood coughed from the lungs, the second blood from the nose", "both are blood from the nose", "both are blood from the lungs", "the first is blood in the pleural space, the second in the stomach"], "-ptysis = spitting; epistaxis = nosebleed."),
          M("What is a lack of oxygen in the blood called?", ['hypoxemia', 'hypoxia', 'hypercapnia', 'anoxia'], 'hypo- + ox/o + -emia.'),
          T("Tracheotomy and tracheostomy mean exactly the same thing.", false, "False; -tomy is just a cut and -stomy a lasting opening with a tube."),
          W("Build a word meaning “lack of oxygen in the blood”", ['hypo-', 'ox/o', '-emia'], ['hyper-', 'capn/o', '-pnea'], 'hypo- + ox/o + -emia = hypoxemia.'),
          P("Match each pair correctly", [['-pnea', "breathing"], ['-ptysis', "spitting"], ['laryng/o', "voice box"], ['pharyng/o', "throat (pharynx)"]], "Deceptive twins."),
          B("Breathlessness only when lying down, eased by sitting up, is called ___.", ['orthopnea', 'eupnea', 'bradypnea'], "orth/o = straight, upright."),
          S("Spell the term for coughing up blood", 'hemoptysis', 'hem/o + -ptysis.', 'hemop…'),
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
    id: 'up', sym: 'Up', name: "Upper Airway", short: "Upper Tract", sub: "The nose, sinuses, pharynx, tonsils and larynx, and their diseases and surgery",
    color: '#E0708C', dark: '#B04A66', light: '#FCE6EC',
    levels: ["Nose and sinuses", "Pharynx and larynx", "Upper airway disease and surgery"],
    gens: EA.genIds('up'),
    lessons: [
      /* ================= سطح ۱: بینی و سینوس‌ها ================= */
      {
        id: 'up1', title: "The nose: the body’s air conditioner", icon: '👃', items: [
          L("What does the nose do?", `The nose <b>warms</b>, <b>moistens</b> and <b>filters</b> the air. Air enters through the ${e('<b>nares</b>')} (nostrils) into the ${e('<b>nasal cavity</b>')}. The ${e('<b>nasal septum</b>')} divides the cavity in two.${wb('nas/o', '-al')} → relating to the nose; another root for nose is ${e('rhin/o')}.`),
          L("Cilia and mucus", `${fig('cilia', [], "Cilia and mucus")}The airway wall is lined by a ${e('<b>mucous membrane</b>')}, which makes ${e('<b>mucus</b>')}. The ${e('<b>cilia</b>')} work like an escalator, sweeping mucus and dust towards the throat.${vs(['mucous', "adjective: mucous membrane"], ['mucus', "noun: the mucus itself"])}${memo("mucous with ou is the adjective (like famous); mucus with u is the substance.")}`),
          M("Which part divides the nasal cavity in two?", ['nasal septum', 'nares', 'cilia', 'uvula'], "sept/o = septum."),
          M("What do cilia do?", ["sweep mucus and particles out", "make mucus", "warm the air", "Gas exchange"], 'mucociliary escalator.', null, F('cilia', [])),
          T("mucus is the noun and mucous the adjective.", true, "The mucous membrane makes mucus."),
          W("Build a word meaning “relating to the nose”", ['nas/o', '-al'], ['rhin/o', '-itis', 'sept/o'], 'nas/o + -al = nasal.'),
          P("Match each part to its job", [['nares', "nostrils"], ['nasal septum', "middle wall"], ['mucous membrane', "mucus-making membrane"], ['cilia', "tiny hairs that sweep the airway"]], "The nose."),
          B("A runny nose is called ___.", ['rhinorrhea', 'rhinitis', 'epistaxis'], 'rhin/o + -rrhea.'),
          S("Spell the noun for the sticky airway secretion", 'mucus', "The noun has no o.", 'muc…'),
          N('t2f:up')
        ]
      },
      {
        id: 'up2', title: "sinuses around the nose", icon: '🎭', items: [
          L("Four pairs of sinuses", `${fig('nasal-sinuses', [], "sinuses around the nose")}The ${e('<b>paranasal sinuses</b>')} are air spaces in the skull bones that lighten the head and make the voice resonate:<br>• ${e('frontal')}: forehead<br>• ${e('maxillary')}: below the eyes; the largest<br>• ${e('ethmoid')}: between the eyes<br>• ${e('sphenoid')}: behind the nasal cavity`),
          L("Sinusitis", `${wb('sinus/o', '-itis')} → inflammation of a sinus; with a blocked nose, facial pain and pus-like discharge.${fig('sinus-xray', [], "Side X-ray of the sinuses")}${memo("para- means “beside”: paranasal = beside the nose.")}${pearl("Maxillary sinus pain sometimes feels like an upper toothache.")}`),
          M("Which is the largest sinus?", ['maxillary', 'frontal', 'ethmoid', 'sphenoid'], "In the upper jawbone.", null, F('nasal-sinuses', [])),
          M(`${e('<b>paranasal</b>')} means…`, ["beside the nose", "inside the nose", "below the nose", "behind the throat"], "para- = beside."),
          T("The ethmoid sinus lies between the eyes.", true, 'ethmoid air cells.'),
          P("Match each sinus to its position", [['frontal', "The forehead"], ['maxillary', "below the eye"], ['ethmoid', "between the eyes"], ['sphenoid', "behind the nasal cavity"]], "Four sinuses."),
          W("Build a word meaning “inflammation of a sinus”", ['sinus/o', '-itis'], ['nas/o', '-plasty', 'rhin/o'], 'sinus/o + -itis = sinusitis.'),
          B("The sinuses make the skull ___.", ["lighter", "heavier", "hard"], "Air spaces."),
          S("Spell the term for inflammation of a sinus", 'sinusitis', 'sinus/o + -itis.', 'sinus…'),
          N('f2t:up')
        ]
      },
      {
        id: 'up3', title: "Nosebleeds, runny nose and polyps", icon: '🩸', items: [
          L("Nasal signs", `${tbl([["Term", "Meaning"], [e('rhinorrhea'), "runny nose"], [e('epistaxis'), "nosebleed (rhinorrhagia)"], [e('rhinitis'), "inflammation of the nasal lining"], [e('coryza'), "common cold"], [e('nasal polyps'), "benign growths of the nasal lining"], [e('deviated septum'), "deviated septum"]])}`),
          L("Repairing the nose", `${wb('rhin/o', '-plasty')} → surgical repair of the nose<br>${wb('sept/o', '-plasty')} → repair of the nasal septum, for a ${e('deviated septum')}<br>${wb('polyp/o', '-ectomy')} → removal of a polyp${pearl("A textbook clinical note: a 45-year-old man with airway obstruction from large polyps in the right nasal cavity; a nasal snare polypectomy was done and pathology reported a low-grade papillary carcinoma.")}`),
          M(`${e('<b>epistaxis</b>')} means…`, ["nosebleed", "runny nose", "sneezing", "coughing up blood"], "Also called rhinorrhagia."),
          M("What is surgery to straighten a bent nasal septum called?", ['septoplasty', 'rhinorrhea', 'polypectomy', 'sinusitis'], 'sept/o + -plasty.'),
          T("Coryza is the ordinary common cold.", true, 'common cold.'),
          W("Build a word meaning “surgical repair of the nose”", ['rhin/o', '-plasty'], ['-rrhea', 'sept/o', '-itis'], 'rhin/o + -plasty = rhinoplasty.'),
          P("Match each term to its meaning", [['rhinorrhea', "runny nose"], ['nasal polyps', "benign growth of the lining"], ['deviated septum', "bent septum"], ['polypectomy', "removal of a polyp"]], "The nose."),
          B("The suffix ___ means flow and discharge.", ['‎-rrhea', '‎-rrhagia', '‎-ptysis'], 'rhinorrhea.'),
          S("Spell the term for a nosebleed", 'epistaxis', "epi- + staxis (dripping).", 'epis…'),
          N('sp:up')
        ]
      },
      /* ================= سطح ۲: حلق و حنجره ================= */
      {
        id: 'up4', title: "The pharynx and tonsils", icon: '👅', items: [
          L("The three parts of the pharynx", `${fig('upper-airway', [], "The upper tract in sagittal section")}The ${e('<b>pharynx</b>')} is the shared passage for air and food:<br>• ${e('nasopharynx')}: behind the nose; home of the ${e('adenoids')}<br>• ${e('oropharynx')}: behind the mouth; home of the ${e('palatine tonsils')}<br>• ${e('laryngopharynx')}: the lowest part; opens into the larynx and oesophagus`),
          L("Tonsils", `${tbl([["tonsil", "Location"], [e('adenoids (pharyngeal tonsil)'), "roof of the nasopharynx"], [e('palatine tonsils'), "both sides of the oropharynx"], [e('lingual tonsils'), "back of the tongue"]])}${wb('tonsill/o', '-itis')} → inflammation of the tonsils<br>${wb('adenoid/o', '-ectomy')} → removal of the adenoids${fig('throat-culture', [], "Throat culture: taking a sample from the tonsil area")}${memo("tonsil has one l, but its root tonsill/o has two: tonsillitis, tonsillectomy.")}`),
          M("In which part of the pharynx are the adenoids?", ['nasopharynx', 'oropharynx', 'laryngopharynx', 'larynx'], 'pharyngeal tonsil.', null, F('upper-airway', [])),
          M(`Where is the ${e('<b>oropharynx</b>')}?`, ["behind the mouth", "behind the nose", "above the larynx", "inside the trachea"], "or/o = mouth."),
          T("The pharynx is a passage for both air and food.", true, "The pharynx is shared."),
          O("Order the parts of the pharynx from top to bottom", ['nasopharynx', 'oropharynx', 'laryngopharynx'], "Nose → mouth → larynx."),
          W("Build a word meaning “removal of the tonsils”", ['tonsill/o', '-ectomy'], ['adenoid/o', '-itis', 'pharyng/o'], 'tonsill/o + -ectomy = tonsillectomy.'),
          P("Match each tonsil to its position", [['adenoids', "nasopharynx"], ['palatine tonsils', "both sides of the oropharynx"], ['lingual tonsils', "back of the tongue"], ['uvula', "hanging from the soft palate"]], "The tonsils and uvula."),
          S("Spell the term for the throat", 'pharynx', 'pharyng/o.', 'phar…'),
          N('d2t:up')
        ]
      },
      {
        id: 'up5', title: "The larynx: the voice box", icon: '🎤', items: [
          L("Structure of the larynx", `${fig('larynx', [], "The larynx from the front")}The ${e('<b>larynx</b>')} lies between the pharynx and trachea and holds the vocal cords. Its largest cartilage is the ${e('<b>thyroid cartilage</b>')}, which forms the “Adam’s apple”. The ${e('<b>epiglottis</b>')} is a flap that covers the larynx during swallowing so food does not enter the airway.`),
          L("vocal cords", `${fig('vocal-cords', [], "The vocal cords from above")}The ${e('<b>vocal cords</b>')} are two folds in the larynx that make sound by vibrating. The space between them, together with the cords, is called the ${e('<b>glottis</b>')}.${fig('vocal-cords-photo', [], "The vocal cords on laryngoscopy")}${memo("epi- means “upon”: the epiglottis sits “upon the glottis” and shuts it like a lid.")}`),
          M("Which part covers the larynx during swallowing?", ['epiglottis', 'uvula', 'thyroid cartilage', 'vocal cords'], 'epi- + glottis.', null, F('larynx', [])),
          M("Which cartilage is the Adam’s apple?", ['thyroid cartilage', 'cricoid cartilage', 'epiglottis', 'hyoid'], "The largest cartilage of the larynx."),
          T("The glottis is open during breathing.", true, "The vocal cords move apart.", F('vocal-cords', [])),
          W("Build a word meaning “inflammation of the epiglottis”", ['epiglott/o', '-itis'], ['laryng/o', '-spasm', 'trache/o'], 'epiglott/o + -itis = epiglottitis.'),
          P("Match each part to its job", [['larynx', "voice box"], ['epiglottis', "flap over the larynx"], ['glottis', "the cords and the space between them"], ['thyroid cartilage', "Adam’s apple"]], "The larynx."),
          B("A sudden contraction of the larynx that closes the airway is ___.", ['laryngospasm', 'laryngitis', 'bronchospasm'], 'laryng/o + -spasm.'),
          S("Spell the term for the flap covering the larynx", 'epiglottis', 'epi- + glottis.', 'epig…'),
          N('m2r:up')
        ]
      },
      {
        id: 'up6', title: "Voice: aphonia and dysphonia", icon: '🔇', items: [
          L("Voice words", `${wb('a-', 'phon/o', '-ia')} → ${e('<b>aphonia</b>')}: loss of voice<br>${wb('dys-', 'phon/o', '-ia')} → ${e('<b>dysphonia</b>')}: hoarse or difficult voice<br>${wb('laryng/o', '-itis')} → inflammation of the larynx, usually with hoarseness`),
          L("Examining the larynx", `${wb('laryng/o', '-scopy')} → viewing the larynx with a ${e('laryngoscope')}<br>${wb('laryng/o', '-ectomy')} → removal of the larynx, mostly for cancer; afterwards the patient breathes through a tracheostomy.${vs(['aphonia', "complete loss of voice"], ['dysphonia', "hoarse, weak voice"])}${pearl("Hoarseness lasting more than three weeks, especially in a smoker, must be checked by laryngoscopy.")}`),
          M(`${e('<b>aphonia</b>')} means…`, ["loss of voice", "hoarse voice", "inflammation of the larynx", "dry cough"], 'a- + phon/o + -ia.'),
          M("What is viewing the larynx with an instrument called?", ['laryngoscopy', 'laryngectomy', 'bronchoscopy', 'rhinoscopy'], 'laryng/o + -scopy.'),
          T("Dysphonia means complete loss of voice.", false, "False; dysphonia is a hoarse voice; complete loss of voice is aphonia."),
          W("Build a word meaning “removal of the larynx”", ['laryng/o', '-ectomy'], ['-scopy', 'pharyng/o', '-itis'], 'laryng/o + -ectomy = laryngectomy.'),
          P("Match each term to its meaning", [['laryngitis', "inflammation of the larynx"], ['aphonia', "voicelessness"], ['dysphonia', "hoarse voice"], ['laryngectomy', "removal of the larynx"]], "Voice and larynx."),
          B("The root ___ means voice.", ['phon/o', 'laryng/o', 'or/o'], "aphonia, dysphonia."),
          S("Spell the term for inflammation of the voice box", 'laryngitis', 'laryng/o + -itis.', 'laryn…'),
          N('t2f:up')
        ]
      },
      /* ================= سطح ۳: بیماری و جراحی فوقانی ================= */
      {
        id: 'up7', title: "Upper tract infections", icon: '🤧', items: [
          L("Inflammations", `${tbl([["Term", "Meaning"], [e('URI'), "infection of the upper respiratory tract, such as a cold"], [e('pharyngitis'), "inflammation of the pharynx; a sore throat"], [e('tonsillitis'), "tonsil inflammation"], [e('adenoiditis'), "inflammation of the adenoids"], [e('epiglottitis'), "inflammation of the epiglottis; risk of airway blockage in a child"], [e('croup'), "croup: a barking cough and stridor in children"]])}`),
          L("throat culture", `To diagnose strep throat, a swab sample is taken from the tonsil area: a ${e('<b>throat culture</b>')}.${pearl("A child with fever, drooling, a muffled voice and sitting forward may have epiglottitis; examining the throat with a tongue depressor is then forbidden, because it can block the airway.")}${memo("Croup sounds like a crowing rooster: a barking, harsh cough.")}`),
          M("A barking cough and stridor in a young child are mostly a sign of what?", ['croup', 'asthma', 'sinusitis', 'pneumonia'], "A viral infection of the larynx and trachea."),
          M("URI means…", ["upper respiratory infection", "urinary infection", "obstructive lung disease", "lung infection"], 'upper respiratory infection.'),
          T("Epiglottitis can block a child’s airway.", true, "An airway emergency."),
          W("Build the term that means “inflammation of the throat (pharynx)”", ['pharyng/o', '-itis'], ['laryng/o', '-ectomy', 'tonsill/o'], 'pharyng/o + -itis = pharyngitis.'),
          P("Match each disease to its description", [['pharyngitis', "sore throat"], ['tonsillitis', "tonsil inflammation"], ['croup', "child’s barking cough"], ['coryza', "common cold"]], "Upper infections."),
          B("Taking a throat swab to look for bacteria is called a ___.", ['throat culture', 'sputum culture', 'sweat test'], "Throat culture."),
          S("Spell the term for inflammation of the tonsils", 'tonsillitis', 'tonsill/o + -itis.', 'tonsil…'),
          N('ab:up')
        ]
      },
      {
        id: 'up8', title: "Snoring and sleep apnoea", icon: '😴', items: [
          L("obstructive sleep apnoea", `${fig('sleep-apnea', [], "obstructive sleep apnoea")}In ${e('<b>obstructive sleep apnea</b>')} (${e('OSA')}) the throat and tongue block the airway during sleep; the patient snores, stops breathing for a few seconds and is sleepy by day.`),
          L("treatment", `• ${e('<b>CPAP</b>')}: a device that blows pressurised air through a mask to keep the airway open<br>• ${e('<b>UPP</b>')} (${e('uvulopalatopharyngoplasty')}): removing part of the uvula, soft palate and pharynx<br>• weight loss and sleeping on one side${wb('uvul/o', 'palat/o', 'pharyng/o', '-plasty')}${pearl("Sleep apnoea is confirmed by polysomnography (a sleep study).")}`),
          M("OSA means…", ["obstructive sleep apnoea", "respiratory distress syndrome", "upper respiratory infection", "residual volume"], 'obstructive sleep apnea.', null, F('sleep-apnea', [])),
          M("Which device keeps the airway open in sleep with positive pressure?", ['CPAP', 'nebulizer', 'spirometer', 'oximeter'], 'continuous positive airway pressure.'),
          T("UPP is surgery on the uvula, palate and pharynx.", true, 'uvulopalatopharyngoplasty.'),
          W("Build the name of the surgery on the uvula, palate and pharynx", ['uvul/o', 'palat/o', 'pharyng/o', '-plasty'], ['laryng/o', '-itis'], 'uvulopalatopharyngoplasty.'),
          P("Match each term to its meaning", [['apnea', "stopped breathing"], ['polysomnography', "sleep study"], ['CPAP', "continuous positive pressure"], ['uvula', "small tissue hanging at the back of the soft palate"]], "Sleep apnoea."),
          B("The root ___ means sleep.", ['somn/o', 'phon/o', 'spir/o'], 'polysomnography.'),
          S("Spell the term for a pause in breathing", 'apnea', 'a- + -pnea.', 'ap…'),
          N('f2t:up')
        ]
      },
      {
        id: 'up9', title: "Upper airway surgery", icon: '🔪', items: [
          L("Removal and repair", `${tbl([["surgery", "Meaning"], [e('tonsillectomy'), "removal of the tonsil"], [e('adenoidectomy'), "removal of the adenoids"], [e('septoplasty / SMR'), "straightening the nasal septum"], [e('rhinoplasty'), "reshaping the nose"], [e('polypectomy'), "removal of a polyp"], [e('laryngectomy'), "removal of the larynx"]])}`),
          L("A story from the sources", `In one of the source exercises, a child with repeated sore throats, difficult and painful swallowing and heavy snoring at night saw the doctor. The doctor recommended removing the tonsils and adenoids (${e('T&A')}).${pearl("After tonsillectomy, bleeding can occur up to about 10 days later; frequent swallowing may be a sign of it.")}`),
          M("What is removal of the adenoids called?", ['adenoidectomy', 'adenoiditis', 'tonsillectomy', 'polypectomy'], 'adenoid/o + -ectomy.'),
          M("SMR is done for which problem?", ["deviated septum", "lung polyp", "laryngeal cancer", "Sinusitis"], 'submucous resection of the septum.'),
          T("Laryngectomy means repair of the larynx.", false, "False; -ectomy = removal."),
          W("Build a word meaning “repair of the nasal septum”", ['sept/o', '-plasty'], ['rhin/o', '-ectomy', 'polyp/o'], 'sept/o + -plasty = septoplasty.'),
          P("Match each operation to its meaning", [['tonsillectomy', "removal of the tonsil"], ['rhinoplasty', "Repairing the nose"], ['polypectomy', "removal of a polyp"], ['laryngectomy', "removal of the larynx"]], "Upper airway surgery."),
          B("The specialist who performs these operations is an ___.", ['otorhinolaryngologist', 'pulmonologist', 'cardiologist'], 'ENT.'),
          S("Spell the term for removal of the tonsils", 'tonsillectomy', 'tonsill/o + -ectomy.', 'tonsill…'),
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
    id: 'lo', sym: 'Lo', name: "Lower Airway", short: "Lower Tract", sub: "The trachea, bronchi, alveoli, lung lobes, pleura, mediastinum and diaphragm",
    color: '#8E6BD8', dark: '#6447B0', light: '#EFE8FB',
    levels: ["The trachea and bronchial tree", "Lungs and alveoli", "Pleura, mediastinum and diaphragm"],
    gens: EA.genIds('lo'),
    lessons: [
      /* ================= سطح ۱: نای و درخت نایژه‌ای ================= */
      {
        id: 'lo1', title: "The trachea: a ringed tube", icon: '🦒', items: [
          L("windpipe", `The ${e('<b>trachea</b>')} is a tube about 12 centimetres long from the larynx into the chest. <b>C-shaped rings of cartilage</b> keep it always open. At the bottom of the trachea, where it forks, is the ${e('<b>carina</b>')}.${wb('trache/o', '-al')} → relating to the trachea`),
          L("Trachea words", `${tbl([["Term", "Meaning"], [e('tracheitis'), "tracheitis"], [e('tracheomalacia'), "softening of the tracheal cartilage"], [e('tracheotomy'), "incision into the windpipe"], [e('tracheostomy'), "a lasting opening in the trachea"], [e('endotracheal'), "inside the trachea"]])}${memo("The tracheal rings are C-shaped and open at the back, so the oesophagus behind the trachea has room during swallowing.")}`),
          M("What keeps the trachea always open?", ["C-shaped rings of cartilage", "the diaphragm muscle", "pleura", "cilia"], 'tracheal cartilage rings.'),
          M("What is the point where the trachea forks called?", ['carina', 'hilum', 'glottis', 'apex'], 'carina.'),
          T("Tracheomalacia means softening of the tracheal cartilage.", true, 'trache/o + -malacia.'),
          W("Build a word meaning “a lasting opening in the trachea”", ['trache/o', '-stomy'], ['-tomy', 'bronch/o', '-itis'], 'trache/o + -stomy = tracheostomy.'),
          P("Match each term to its meaning", [['trachea', "windpipe"], ['carina', "where it forks"], ['tracheal', "relating to the windpipe"], ['tracheitis', "inflammation of the windpipe"]], "The trachea."),
          B("The oesophagus lies ___ the trachea.", ["behind", "in front of", "within"], "That is why the rings are open at the back."),
          S("Spell the term for the windpipe", 'trachea', 'trache/o + -a.', 'trach…'),
          N('t2f:lo')
        ]
      },
      {
        id: 'lo2', title: "bronchial tree", icon: '🌳', items: [
          L("An upside-down tree", `${fig('bronchial-tree', [], "bronchial tree")}The trachea divides into two main ${e('<b>bronchus</b>')} (plural: ${e('bronchi')}); each enters one lung and branches again and again. The smallest branches are the ${e('<b>bronchioles</b>')}, which reach the alveoli.`),
          L("The right bronchus", `The <b>right</b> main bronchus is shorter, wider and more vertical; that is why swallowed foreign bodies and aspiration pneumonia are seen more in the right lung.${fig('bronchiole-photo', [], "A bronchiole and alveoli")}${tbl([["root", "Meaning", "Example"], [e('bronch/o, bronchi/o'), "main airway of the lung", e('bronchitis, bronchiectasis')], [e('bronchiol/o'), "bronchiole", e('bronchiolitis')]])}`),
          M("What are the smallest branches of the bronchial tree called?", ['bronchioles', 'bronchi', 'alveoli', 'carina'], 'bronchiol/o.', null, F('bronchial-tree', [])),
          M("Which bronchus do foreign bodies enter more often?", ["right main bronchus", "left main bronchus", "both equally", "windpipe"], "Shorter, wider and more vertical."),
          T("Bronchiolitis is inflammation of the bronchioles and is common in infants.", true, 'bronchiol/o + -itis.'),
          O("Order the path of air from the trachea to the alveolus", ['trachea', 'main bronchus', 'bronchioles', 'alveoli'], "An upside-down tree."),
          W("Build a word meaning “relating to a bronchus”", ['bronch/o', '-ial'], ['bronchiol/o', '-itis', 'trache/o'], 'bronch/o + -ial = bronchial.'),
          P("Match each term to its meaning", [['bronchus', "main airway of the lung"], ['bronchiole', "smallest airway branch"], ['bronchial tree', "branching airways of the lung"], ['bronchospasm', "sudden contraction of a bronchus"]], "The bronchial tree."),
          S("Spell the term for the smallest airway branch", 'bronchiole', 'bronchiol/o.', 'bronchi…'),
          N('f2t:lo')
        ]
      },
      {
        id: 'lo3', title: "Sudden narrowing of the bronchi", icon: '🌀', items: [
          L("bronchospasm", `The bronchial walls contain smooth muscle. If this muscle suddenly contracts, the airway narrows: ${e('<b>bronchospasm</b>')}. This is what happens in an asthma attack.${fig('asthma-airway', [], "A bronchiole at rest and in an asthma attack")}`),
          L("drug", `A ${e('<b>bronchodilator</b>')} relaxes the smooth muscle and opens the airway, such as a salbutamol inhaler (${e('Proventil')}).${wb('bronch/o', '-spasm')} → sudden contraction of a bronchus${vs(['bronchospasm', "sudden narrowing of a bronchus"], ['bronchodilator', "a drug that opens the bronchi"])}${pearl("In a textbook lung consult report, a 10-year-old boy with asthma improved on Proventil and continuing it was advised “to relieve bronchospasm”.")}`),
          M(`${e('<b>bronchospasm</b>')} means…`, ["sudden contraction of bronchial muscle", "permanent widening of a bronchus", "inflammation of a bronchus", "removal of a bronchus"], 'bronch/o + -spasm.', null, F('asthma-airway', [])),
          M("Which drug opens the bronchi?", ['bronchodilator', 'antitussive', 'decongestant', 'antihistamine'], "dilator = something that widens."),
          T("The bronchial wall contains smooth muscle.", true, 'smooth muscle.'),
          W("Build a word meaning “widening of a bronchus”", ['bronchi/o', '-ectasis'], ['-spasm', 'trache/o', '-itis'], 'bronchi/o + -ectasis = bronchiectasis.'),
          P("Match each term to its meaning", [['bronchospasm', "sudden narrowing"], ['bronchiectasis', "permanent widening"], ['bronchitis', "inflammation of a bronchus"], ['bronchodilator', "widener"]], "The bronchus."),
          B("The suffix ___ means a sudden involuntary contraction.", ['‎-spasm', '‎-ectasis', '‎-stenosis'], "bronchospasm, laryngospasm."),
          S("Spell the term for a sudden tightening of the bronchi", 'bronchospasm', 'bronch/o + -spasm.', 'broncho…'),
          N('d2t:lo')
        ]
      },
      /* ================= سطح ۲: ریه‌ها و آلوئول ================= */
      {
        id: 'lo4', title: "The alveolus: where exchange happens", icon: '🫧', items: [
          L("air sacs", `${fig('alveoli', [], "Alveoli and capillaries")}An ${e('<b>alveolus</b>')} (plural: ${e('alveoli')}) is a tiny air sac at the end of a bronchiole. Its very thin wall is covered with ${e('<b>pulmonary capillaries</b>')}, and this is where oxygen and carbon dioxide are exchanged.`),
          L("surfactant", `A substance called ${e('<b>surfactant</b>')} coats the inside of the alveolus and stops it collapsing. Premature babies often lack enough surfactant and develop ${e('RDS')} (respiratory distress syndrome).${wb('alveol/o', '-ar')} → alveolar${memo("Alveoli are like bunches of grapes at the ends of the bronchial tree’s branches.")}`),
          M("Where does gas exchange take place?", ['alveoli', 'trachea', 'bronchi', 'pharynx'], "A thin wall + capillaries.", null, F('alveoli', [])),
          M(`What does an ${e('<b>surfactant</b>')} do?`, ["stops the alveolus collapsing", "makes mucus", "kills germs", "carries oxygen"], "It lowers surface tension."),
          T("A premature baby may develop RDS because of a lack of surfactant.", true, 'hyaline membrane disease.'),
          W("Build a word meaning “relating to an alveolus”", ['alveol/o', '-ar'], ['bronch/o', '-itis', 'pleur/o'], 'alveol/o + -ar = alveolar.'),
          P("Match each term to its meaning", [['alveolus', "air sac"], ['pulmonary capillaries', "tiny lung vessels around the alveoli"], ['surfactant', "anti-sticking substance"], ['alveoli', "plural of alveolus"]], "The alveolus."),
          B("The plural of alveolus is ___.", ['alveoli', 'alveolus', 'alveolae'], '‎-us ← ‎-i.'),
          S("Spell the term for a tiny air sac of the lung", 'alveolus', 'alveol/o + -us.', 'alve…'),
          N('t2f:lo')
        ]
      },
      {
        id: 'lo5', title: "Lung lobes", icon: '🍃', items: [
          L("Right three, left two", `${fig('lung-lobes', [], "Lung lobes")}The <b>right</b> lung has three lobes: upper, middle and lower (${e("RUL, RML, RLL")}). The <b>left</b> lung has two (${e("LUL, LLL")}), because the heart takes up part of its space (${e('cardiac notch')}).`),
          L("Parts of the lung", `${tbl([["Term", "Meaning"], [e('apex'), "apex; the top of the lung, under the collarbone"], [e('base'), "base; resting on the diaphragm"], [e('hilum'), "hilum; where the bronchus and vessels enter"], [e('lobe'), "lobe"]])}${wb('lob/o', '-ectomy')} → removal of one lobe${pearl("A report saying “CXR revealed fluid in the RUL” means the chest X-ray showed fluid in the right upper lobe.")}`),
          M("How many lobes does the left lung have?", ["two", "three", "one", "four"], "Because of the heart.", null, F('lung-lobes', [])),
          M(`${e('<b>RML</b>')} means…`, ["right middle lobe", "left middle lobe", "right lower lobe", "left upper lobe"], "right middle lobe; only the right lung has a middle lobe."),
          T("The hilum is where the bronchus and vessels enter the lung.", true, "The root of the lung."),
          W("Build a word meaning “removal of a lobe”", ['lob/o', '-ectomy'], ['pneumon/o', '-itis', '-tomy'], 'lob/o + -ectomy = lobectomy.'),
          P("Match each abbreviation to its meaning", [['RUL', "right upper lobe"], ['RLL', "right lower lobe"], ['LUL', "left upper lobe"], ['LLL', "left lower lobe"]], "Five lobes."),
          B("The top of the lung is called the ___.", ['apex', 'base', 'hilum'], "The apex."),
          S("Spell the term for the two breathing organs (plural)", 'lungs', "pulmon/o, pneum/o.", 'lu…'),
          N('ab:lo')
        ]
      },
      {
        id: 'lo6', title: "chest cavity", icon: '📦', items: [
          L("the chest", `The ${e('<b>thorax</b>')} is built from the ribs, breastbone and the muscles between the ribs (${e('intercostal muscles')}) and forms the ${e('<b>thoracic cavity</b>')}, which holds the lungs and heart. Each half of it is a ${e('hemithorax')}.${wb('thorac/o', '-ic')} → relating to the chest`),
          L("Chest words", `${tbl([["Term", "Meaning"], [e('thoracalgia'), "chest pain"], [e('thoracotomy'), "cutting into the chest"], [e('thoracoscopy'), "viewing inside the chest with an instrument"], [e('thoracentesis'), "drawing pleural fluid with a needle"], [e('thoracostomy'), "an opening for a chest tube"]])}${memo("steth/o also means chest: stethoscope = an instrument for examining (listening to) the chest.")}${pearl("In Case Study 12-1, Morgan had earlier had a lobectomy for a sarcoma of the left lung and had a thoracotomy scar on the left hemithorax.")}`),
          M(`${e('<b>hemithorax</b>')} means…`, ["hemithorax", "blood in the chest", "cutting into the chest", "chest pain"], "hemi- = half; not the same as hemo- (blood)!"),
          M("What is an incision into the chest called?", ['thoracotomy', 'thoracentesis', 'thoracoscopy', 'thoracostomy'], 'thorac/o + -tomy.'),
          T("The intercostal muscles take part in breathing.", true, "The intercostal muscles enlarge and shrink the chest."),
          W("Build a word meaning “viewing the chest with an instrument”", ['thorac/o', '-scopy'], ['-tomy', 'pleur/o', '-algia'], 'thorac/o + -scopy = thoracoscopy.'),
          P("Match each term to its meaning", [['thoracalgia', "chest pain"], ['thoracostomy', "an opening for a chest tube"], ['thoracic cavity', "chest cavity"], ['hemithorax', "one half of the chest"]], "The chest."),
          B("The prefix ___ means “half”.", ['hemi-', 'hemo-', 'hyper-'], 'hemithorax.'),
          S("Spell the term for the chest", 'thorax', 'thorac/o.', 'thor…'),
          N('wb:lo')
        ]
      },
      /* ================= سطح ۳: جنب، میان‌سینه و دیافراگم ================= */
      {
        id: 'lo7', title: "pleura", icon: '🎈', items: [
          L("Two layers, one space", `${fig('pleura', [], "pleura")}The ${e('<b>pleura</b>')} is a two-layered membrane around the lung:<br>• ${e('<b>visceral pleura</b>')}: the inner layer, attached to the lung<br>• ${e('<b>parietal pleura</b>')}: the outer layer, on the chest wall<br>Between them is the ${e('<b>pleural cavity</b>')}, with a little slippery fluid.`),
          L("Pleura words", `${wb('pleur/o', '-al')} → pleural; ${e('pleural effusion')} = fluid in the pleural space<br>${wb('intra-', 'pleur/o', '-al')} → within the pleural space<br>${wb('pleur/o', '-dynia')} → pain of the pleura<br>${e('<b>pleurisy</b>')} (${e('pleuritis')}): inflammation of the pleura with sharp pain on breathing${vs(['visceral', "on the organ itself (the lung)"], ['parietal', "on the wall of the cavity"])}`),
          M("Which layer of the pleura is attached to the lung?", ['visceral pleura', 'parietal pleura', 'pleural cavity', 'mediastinum'], "viscera = internal organs.", null, F('pleura', [])),
          M(`${e('<b>pleurisy</b>')} means…`, ["inflammation of the lung lining (pleurisy)", "air in the pleural space", "fluid in the pleural space", "removal of the pleura"], "Also called pleuritis."),
          T("The pleural space normally holds a little slippery fluid.", true, "So the two layers can glide over each other."),
          W("Build a word meaning “pain of the pleura”", ['pleur/o', '-dynia'], ['pulmon/o', '-ectomy', 'thorac/o'], 'pleur/o + -dynia = pleurodynia.'),
          P("Match each term to its meaning", [['visceral pleura', "layer on the lung"], ['parietal pleura', "layer on the wall"], ['pleural cavity', "space between the two layers"], ['pleurectomy', "removal of part of the pleura"]], "The pleura."),
          B("Relating to within the pleural space is ___.", ['intrapleural', 'interpleural', 'extrapleural'], "intra- = within."),
          S("Spell the term for the membrane around the lungs", 'pleura', 'pleur/o.', 'ple…'),
          N('m2r:lo')
        ]
      },
      {
        id: 'lo8', title: "mediastinum", icon: '❤️', items: [
          L("The space between the two lungs", `The ${e('<b>mediastinum</b>')} is the space between the two lungs that holds the heart, trachea, oesophagus, great vessels and lymph nodes.${wb('mediastin/o', '-al')} → relating to the mediastinum<br>${wb('mediastin/o', '-scopy')} → viewing the mediastinum with an instrument through a small incision`),
          L("Why does it matter?", `Enlarged lymph nodes in the mediastinum (${e('mediastinal nodes')}) can be a sign of lung cancer or lymphoma; ${e('mediastinoscopy')} is done to sample them.${pearl("In Case Study 12-1, CT showed abnormal mediastinal nodes, and thoracoscopy, mediastinoscopy and biopsy were planned for Morgan.")}${memo("mediastinum = in the “middle” (media) of the chest.")}`),
          M("Which organ is not in the mediastinum?", ["lung", "heart", "windpipe", "oesophagus"], "The lungs lie on either side of the mediastinum."),
          M(`${e('<b>mediastinoscopy</b>')} means…`, ["viewing the mediastinum with an instrument", "incision into the mediastinum", "inflammation of the mediastinum", "X-ray of the mediastinum"], 'mediastin/o + -scopy.'),
          T("Enlarged lymph nodes in the mediastinum can be a sign of cancer.", true, 'mediastinal nodes.'),
          W("Build a word meaning “relating to the mediastinum”", ['mediastin/o', '-al'], ['-scopy', 'pleur/o', '-itis'], 'mediastin/o + -al = mediastinal.'),
          P("Match each term to its meaning", [['mediastinum', "space between the two lungs"], ['mediastinal', "relating to the space between the lungs"], ['mediastinoscopy', "viewing the mediastinum"], ['hilum', "root of the lung"]], "The mediastinum."),
          B("The heart lies in the ___.", ['mediastinum', 'pleural cavity', 'alveolus'], "Between the two lungs."),
          S("Spell the term for the space between the two lungs", 'mediastinum', 'mediastin/o + -um.', 'media…'),
          N('t2f:lo')
        ]
      },
      {
        id: 'lo9', title: "The diaphragm and phrenic nerve", icon: '🪂', items: [
          L("The main breathing muscle", `${fig('breathing', [], "The diaphragm in breathing in and out")}The ${e('<b>diaphragm</b>')} is a dome-shaped muscle under the lungs. On breathing in it contracts and flattens and draws air in. The ${e('<b>phrenic nerve</b>')} controls it.${wb('phren/o', '-ic')} → relating to the diaphragm`),
          L("Hiccups and nerve damage", `• ${e('<b>singultus</b>')} (hiccup): a sudden involuntary contraction of the diaphragm<br>• damage to the phrenic nerve can paralyse the diaphragm; that is why, in a brachial plexus injury case study, the diaphragm was checked under fluoroscopy.${memo("In Greek, phren/o meant both “diaphragm” and “mind”; the ancients thought thinking happened in the chest!")}`),
          M("Which is the main breathing muscle?", ['diaphragm', 'intercostal muscles', 'pectoralis', 'rectus abdominis'], "The dome under the lungs.", null, F('breathing', [])),
          M("Which nerve controls the diaphragm?", ['phrenic nerve', 'vagus nerve', 'facial nerve', 'sciatic nerve'], "phren/o = diaphragm."),
          T("Singultus is the hiccup.", true, "An involuntary contraction of the diaphragm."),
          W("Build a word meaning “relating to the diaphragm”", ['phren/o', '-ic'], ['thorac/o', '-itis', 'pleur/o'], 'phren/o + -ic = phrenic.'),
          P("Match each term to its meaning", [['diaphragm', "dome-shaped breathing muscle"], ['phrenic nerve', "nerve to the diaphragm"], ['singultus', "hiccup"], ['intercostal muscles', "muscles between the ribs"]], "The diaphragm."),
          O("What happens on breathing in? Put the steps in order", ["the diaphragm contracts and flattens", "the chest volume increases", "the pressure inside the lungs falls", "air enters the lungs"], 'inspiration.'),
          S("Spell the term for the dome-shaped main muscle of breathing", 'diaphragm', "The g is silent.", 'diaph…'),
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
    id: 'br', sym: 'Br', name: "Ventilation and Signs", short: "Signs", sub: "Breathing patterns, oxygen shortage, cough and sputum, lung sounds on auscultation, and lung volumes and capacities",
    color: '#17A398', dark: '#0F7A71', light: '#DDF5F2',
    levels: ["Breathing patterns", "Oxygen, cough and sputum", "Lung sounds and volumes"],
    gens: EA.genIds('br'),
    lessons: [
      /* ================= سطح ۱: الگوهای تنفس ================= */
      {
        id: 'br1', title: "Fast, slow, stopped", icon: '📈', items: [
          L("Breathing rate", `${fig('breath-patterns', [], "Breathing patterns")}${tbl([["Term", "Meaning"], [e('eupnea'), "normal breathing; 12 to 20 a minute in an adult"], [e('tachypnea'), "fast breathing"], [e('bradypnea'), "slow breathing"], [e('apnea'), "temporary stop in breathing"]])}`),
          L("Building the words", `${wb('eu-', '-pnea')} → good, normal breathing<br>${wb('tachy-', '-pnea')} → fast breathing<br>${wb('brady-', '-pnea')} → slow breathing<br>${wb('a-', '-pnea')} → no breathing${pearl("In vital signs, R means the breathing rate per minute; TPR = temperature, pulse, respiration.")}${memo("tachy- like a horse at full gallop: fast. brady- like a dozy sloth: slow.")}`),
          M(`${e('<b>tachypnea</b>')} means…`, ["fast breathing", "slow breathing", "stopped breathing", "deep breathing"], "tachy- = fast.", null, F('breath-patterns', [])),
          M("What is the normal adult breathing rate at rest?", ["12 to 20 a minute", "4 to 8 a minute", "30 to 40 a minute", "60 to 100 a minute"], 'eupnea.'),
          T("Apnea means a temporary stop in breathing.", true, 'a- + -pnea.'),
          W("Build a word meaning “slow breathing”", ['brady-', '-pnea'], ['tachy-', 'eu-', '-ptysis'], 'brady- + -pnea = bradypnea.'),
          P("Match each term to its meaning", [['eupnea', "normal"], ['tachypnea', "fast"], ['bradypnea', "slow"], ['apnea', "stopped"]], "Breathing rate."),
          B("In vital signs, the letter ___ means the breathing rate.", ['R', 'P', 'T'], 'respiration.'),
          S("Spell the term for fast breathing", 'tachypnea', 'tachy- + -pnea.', 'tachy…'),
          N('t2f:br')
        ]
      },
      {
        id: 'br2', title: "Deep, shallow, difficult", icon: '😮‍💨', items: [
          L("Depth and difficulty", `${tbl([["Term", "Meaning"], [e('hyperpnea'), "deep breathing"], [e('hypopnea'), "shallow breathing"], [e('dyspnea'), "difficult breathing, breathlessness (SOB)"], [e('orthopnea'), "breathlessness lying flat; better sitting up"], [e('DOE'), "shortness of breath on exertion"]])}`),
          L("Too much and too little ventilation", `• ${e('<b>hyperventilation</b>')}: overbreathing; blood CO2 falls (for example in anxiety)<br>• ${e('<b>hypoventilation</b>')}: inadequate breathing; CO2 builds up in the blood<br>• ${e('<b>Cheyne-Stokes respiration</b>')}: cycles of deep, fast breathing broken by apnoea; near death or in brain injury${pearl("Orthopnoea is measured by the number of pillows: “three-pillow orthopnea” means the patient can breathe with three pillows.")}`),
          M(`${e('<b>orthopnea</b>')} means…`, ["breathlessness lying flat that eases on sitting up", "fast breathing", "deep breathing", "breathing stopping in sleep"], "orth/o = straight, upright."),
          M("In a chart, SOB means…", ["shortness of breath", "productive cough", "normal breathing", "rubbing sound"], 'shortness of breath.'),
          T("Periods of apnoea are seen in Cheyne-Stokes breathing.", true, "Breathing waxing and waning, with pauses.", F('breath-patterns', [])),
          W("Build a word meaning “deep breathing”", ['hyper-', '-pnea'], ['hypo-', 'dys-', '-capnia'], 'hyper- + -pnea = hyperpnea.'),
          P("Match each term to its meaning", [['hyperpnea', "deep breathing"], ['hypopnea', "shallow breathing"], ['dyspnea', "difficult breathing"], ['DOE', "shortness of breath on exertion"]], "Depth and difficulty."),
          B("Overbreathing that lowers blood CO2 is ___.", ['hyperventilation', 'hypoventilation', 'hypercapnia'], 'hyper- + ventilation.'),
          S("Spell the term for breathlessness when lying flat", 'orthopnea', 'orth/o + -pnea.', 'ortho…'),
          N('f2t:br')
        ]
      },
      {
        id: 'br3', title: "Breathing in and out in action", icon: '🎐', items: [
          L("The mechanics of breathing", `${fig('breathing', [], "Breathing in and out")}In ${e('inspiration')} the diaphragm and intercostal muscles contract, the chest enlarges, the pressure inside the lungs falls and air comes in. In ${e('expiration')} the muscles relax and air goes out.`),
          L("Counting breaths", `To count breathing, count the rise and fall of the chest for one full minute (one breath in + one breath out = one breath).${pearl("In the “Spirometry and oxygen” tool, enter the breathing rate to see eupnea, tachypnea or bradypnea.")}${memo("One breath in + one breath out = one breath; don’t count halves!")}`),
          M("On breathing in, what happens to the pressure inside the lungs?", ["it becomes lower than the outside air", "it becomes higher than the outside air", "it does not change", "it becomes zero"], "Air moves from higher to lower pressure.", null, F('breathing', [])),
          M("One complete breath means…", ["one breath in and one breath out", "only one breath in", "only one breath out", "two breaths in"], 'respiratory cycle.'),
          T("In quiet breathing out, the diaphragm relaxes and rises.", true, "Expiration is mostly passive."),
          O("Order the steps of breathing in", ["the diaphragm contracts", "the chest enlarges", "the pressure inside the lungs falls", "air enters the lungs"], 'inspiration.'),
          P("Match each term to its meaning", [['inspiration', "inhalation"], ['expiration', "exhalation"], ['respiratory rate', "breaths per minute"], ['TPR', "temperature, pulse and respirations"]], "Ventilation."),
          B("The abbreviation ___ means temperature, pulse and respiration.", ['TPR', 'BP', 'SOB'], 'temperature, pulse, respiration.'),
          S("Spell the term for breathing in", 'inspiration', 'in- + spir/o + -ation.', 'insp…'),
          N('d2t:br')
        ]
      },
      /* ================= سطح ۲: اکسیژن، سرفه و خلط ================= */
      {
        id: 'br4', title: "lack of oxygen", icon: '🫥', items: [
          L("Oxygen and CO2 words", `${tbl([["Term", "Meaning"], [e('hypoxia'), "lack of oxygen in the tissues"], [e('hypoxemia'), "lack of oxygen in the blood"], [e('anoxia'), "complete absence of oxygen"], [e('hypercapnia'), "rise in blood CO2"], [e('asphyxia'), "suffocation: lack of O2 and build-up of CO2"]])}`),
          L("Outward signs", `${fig('cyanosis', [], "Cyanosis and clubbing")}• ${e('<b>cyanosis</b>')}: bluish skin, lips and nail beds from lack of oxygen<br>• ${e('<b>clubbing</b>')}: rounding and widening of the fingertips in long-term oxygen shortage${pearl("In a textbook lung consult report: “cyanosis around the lips” and “ABGs indicate hypoxemia” during a severe asthma attack.")}`),
          M(`${e('<b>hypoxemia</b>')} means…`, ["lack of oxygen in the blood", "lack of oxygen in the tissues", "rise in blood CO2", "complete absence of oxygen"], "-emia = blood."),
          M("What is the bluish colour of the lips and nail beds called?", ['cyanosis', 'clubbing', 'pallor', 'jaundice'], "cyan/o = blue.", null, F('cyanosis', [])),
          T("Hypercapnia means too little carbon dioxide in the blood.", false, "False; hyper- = excessive; CO2 is high."),
          W("Build a word meaning “lack of oxygen in the blood”", ['hypo-', 'ox/o', '-emia'], ['hyper-', 'capn/o', '-pnea'], 'hypo- + ox/o + -emia.'),
          P("Match each term to its meaning", [['hypoxia', "lack of tissue oxygen"], ['anoxia', "complete absence of oxygen"], ['hypercapnia', "high CO2 in the blood"], ['clubbing', "widened fingertips"]], "Oxygen."),
          B("The root ___ means carbon dioxide.", ['capn/o', 'ox/o', 'cyan/o'], 'hypercapnia.'),
          S("Spell the term for bluish skin from lack of oxygen", 'cyanosis', 'cyan/o + -osis.', 'cyan…'),
          N('t2f:br')
        ]
      },
      {
        id: 'br5', title: "Cough and sputum", icon: '😷', items: [
          L("Types of cough", `• ${e('<b>productive cough</b>')}: a cough with sputum<br>• ${e('<b>nonproductive cough</b>')}: a dry cough<br>• ${e('<b>sputum</b>')}: material coughed up from the lungs; ${e('phlegm')}: thick mucus<br>• ${e('<b>purulent</b>')}: pus-filled; yellow or green sputum<br>• ${e('<b>expectoration</b>')}: coughing up and spitting out sputum`),
          L("Blood in the sputum", `${wb('hem/o', '-ptysis')} → ${e('<b>hemoptysis</b>')}: coughing blood from the lungs; can be a sign of TB or lung cancer.${vs(['hemoptysis', "blood coughed from the lungs"], ['epistaxis', "blood from the nose"])}${pearl("In textbook Exercise 12-9, a 30-year-old woman came in with “nonproductive cough, dyspnea and fever”: a dry cough and breathlessness.")}`),
          M("What is a cough that brings up sputum called?", ['productive cough', 'nonproductive cough', 'hemoptysis', 'stridor'], "productive = bringing up sputum."),
          M(`${e('<b>purulent sputum</b>')} means…`, ["pus-filled sputum", "coughing up blood", "clear sputum", "dry cough"], "purulent = containing pus."),
          T("Hemoptysis can be a sign of TB or lung cancer.", true, "Blood in the sputum is always investigated."),
          W("Build a word meaning “coughing up blood”", ['hem/o', '-ptysis'], ['-pnea', 'py/o', 'thorac/o'], 'hem/o + -ptysis = hemoptysis.'),
          P("Match each term to its meaning", [['sputum', "thick mucus from the airways"], ['phlegm', "thick, sticky secretion of the throat and chest"], ['expectoration', "spitting out sputum"], ['nonproductive cough', "dry cough"]], "Cough and sputum."),
          B("A drug that thins sputum so it comes up more easily is an ___.", ['expectorant', 'antitussive', 'bronchodilator'], "Expectorant."),
          S("Spell the word for thick mucus coughed up from the airways", 'sputum', "Phlegm from the lungs.", 'spu…'),
          N('f2t:br')
        ]
      },
      {
        id: 'br6', title: "Pain and other signs", icon: '⚡', items: [
          L("chest pain", `${wb('thorac/o', '-algia')} → chest pain<br>${wb('pleur/o', '-dynia')} → pain of the pleura or chest wall muscles<br>Pleuritic pain is sharp and worse on deep breathing in.`),
          L("Other signs", `${tbl([["Term", "Meaning"], [e('singultus'), "hiccup"], [e('bronchospasm'), "Sudden narrowing of the bronchi"], [e('laryngospasm'), "sudden closure of the larynx"], [e('diaphoresis'), "profuse sweating"], [e('SOB'), "shortness of breath"]])}${memo("-algia and -dynia both mean pain; thoracalgia = thoracodynia.")}${pearl("In Case Study 12-1, Morgan was admitted with “chest pain on inspiration, dyspnea and diaphoresis”: chest pain on breathing in, breathlessness and heavy sweating.")}`),
          M(`${e('<b>pleurodynia</b>')} means…`, ["pleural pain", "inflammation of the lung lining (pleurisy)", "fluid in the pleura", "incision of the pleura"], 'pleur/o + -dynia.'),
          M("What is a hiccup in medical language?", ['singultus', 'stridor', 'sputum', 'syncope'], "An involuntary contraction of the diaphragm."),
          T("Pleuritic pain gets worse on deep breathing in.", true, "The inflamed layers rub against each other."),
          W("Build a word meaning “chest pain”", ['thorac/o', '-algia'], ['pleur/o', '-ptysis', '-scopy'], 'thorac/o + -algia = thoracalgia.'),
          P("Match each term to its meaning", [['thoracalgia', "chest pain"], ['diaphoresis', "profuse sweating"], ['laryngospasm', "closure of the larynx"], ['singultus', "hiccup"]], "Signs."),
          B("The two suffixes -algia and ___ both mean pain.", ['‎-dynia', '‎-ptysis', '‎-pnea'], 'pleurodynia.'),
          S("Spell the medical term for hiccups", 'singultus', "A contraction of the diaphragm.", 'sing…'),
          N('sp:br')
        ]
      },
      /* ================= سطح ۳: صداهای ریه و حجم‌ها ================= */
      {
        id: 'br7', title: "Listening to the lungs", icon: '🩺', items: [
          L("Auscultation and percussion", `• ${e('<b>auscultation</b>')}: listening to body sounds with a ${e('stethoscope')}<br>• ${e('<b>percussion</b>')}: tapping on the body and listening to the sound; an air-filled lung sounds drum-like and fluid gives a dull sound (${e('dullness')})<br>${e('<b>CTA</b>')} means “clear to auscultation”: the lungs sound clear and normal.`),
          L("Abnormal sounds", `${fig('lung-sounds', [], "Abnormal lung sounds")}${vs(['wheeze', "a high whistle from a narrowed airway (asthma)"], ['stridor', "a harsh sound on breathing in from blockage of the larynx or trachea"])}${vs(['rales (crackles)', "fine crackles from fluid in the alveoli"], ['rhonchi', "a low snore from mucus in a large airway"])}`),
          M("What is the whistling sound in asthma called?", ['wheeze', 'stridor', 'rales', 'pleural rub'], "From a narrowed airway.", null, F('lung-sounds', [])),
          M("What are the fine crackles on breathing in, heard in pneumonia, called?", ['rales (crackles)', 'rhonchi', 'wheeze', 'stridor'], "Fluid in the alveoli."),
          T("Stridor is the sound of upper airway blockage.", true, "The larynx or trachea; for example in croup."),
          P("Match each sound to its cause", [['wheeze', "narrowed airway"], ['stridor', "blocked larynx"], ['rhonchi', "mucus in a large bronchus"], ['pleural rub', "inflamed pleura"]], "Lung sounds."),
          B("The abbreviation ___ means the lungs are clear to auscultation.", ['CTA', 'CXR', 'SOB'], 'clear to auscultation.'),
          M("In textbook Exercise 12-9, “inspiratory rales” were heard; that means…", ["crackles on breathing in", "wheeze on breathing out", "harsh laryngeal sound", "complete silence of the lung"], "rales = crackles; inspiratory = on breathing in."),
          S("Spell the term for listening to body sounds", 'auscultation', 'listening.', 'ausc…'),
          N('t2f:br')
        ]
      },
      {
        id: 'br8', title: "Lung volumes", icon: '📊', items: [
          L("Four volumes", `${fig('spirogram', [], "Spirogram")}${tbl([["Volume", "Meaning"], [e('TV'), "tidal volume: one quiet breath"], [e('IRV'), "inspiratory reserve volume: extra breath in after a normal breath in"], [e('ERV'), "expiratory reserve volume: extra breath out after a normal breath out"], [e('RV'), "residual volume: air left after the hardest breath out"]])}`),
          L("Capacities = sums of volumes", `${tbl([["Capacity", "Formula"], [e('VC (vital capacity)'), e('IRV + TV + ERV')], [e('TLC (total lung capacity)'), e('VC + RV')], [e('IC (inspiratory capacity)'), e('TV + IRV')], [e('FRC'), e('ERV + RV')]])}${memo("A Volume is single; a Capacity is the sum of several volumes.")}${pearl("In Alison’s case study, spirometry showed a mild fall in vital capacity and a moderate to severe fall in FEV1.")}`),
          M("What is the air moved in one quiet breath?", ['tidal volume', 'vital capacity', 'residual volume', 'total lung capacity'], 'TV.', null, F('spirogram', [])),
          M("Total lung capacity (TLC) equals…", ['VC + RV', 'TV + IRV', 'ERV + RV', 'TV + ERV'], "All the air in the lungs."),
          T("Residual volume cannot be breathed out even with the hardest breath out.", true, 'RV.'),
          P("Match each abbreviation to its meaning", [['TV', "tidal volume"], ['VC', "vital capacity"], ['RV', "residual volume"], ['TLC', "total lung capacity"]], "Volumes and capacities."),
          B("Vital capacity is the sum of IRV, TV and ___.", ['ERV', 'RV', 'FRC'], 'VC = IRV + TV + ERV.'),
          O("Order the volumes from the top of the spirogram to the bottom", ['IRV', 'TV', 'ERV', 'RV'], "Inspiratory reserve, tidal, expiratory reserve, residual."),
          S("Spell the term for the most air breathed out after the deepest breath in", 'vital capacity', 'VC.', 'vital…'),
          N('ab:br')
        ]
      },
      {
        id: 'br9', title: "FEV1 and FVC", icon: '💨', items: [
          L("Breathing out with full force", `${fig('spirometry', [], "The volume-time curve")}• ${e('<b>FVC</b>')} (forced vital capacity): all the air you blow out as hard and fast as possible after a deep breath in<br>• ${e('<b>FEV1</b>')}: the volume that comes out in the <b>first second</b> of that breath out`),
          L("The FEV1/FVC ratio", `In a healthy person about 75 to 80% of the air comes out in the first second. If the ratio is under 70%, air comes out with difficulty: an <b>obstructive pattern</b> (${e('obstructive')}), as in asthma and COPD.${vs(['obstructive', "low FEV1/FVC; asthma, COPD"], ['restrictive', "normal ratio but low total volume; lung fibrosis"])}${pearl("The “Spirometry and oxygen” tool calculates and interprets the FEV1/FVC ratio.")}`),
          M("What is FEV1?", ["forced expiratory volume in the first second", "total lung capacity", "the volume of one quiet breath", "residual air"], 'forced expiratory volume in 1 second.', null, F('spirometry', [])),
          M("What pattern is an FEV1/FVC ratio of 60%?", ["obstructive", "normal", "restrictive", "cannot tell"], "Under 70%."),
          T("In asthma, FEV1 falls.", true, "Air comes out with difficulty."),
          P("Match each abbreviation to its meaning", [['FVC', "forced vital capacity"], ['FEV1', "first-second volume"], ['PFT', "pulmonary function test"], ['PEFR', "peak expiratory flow rate"]], "Spirometry."),
          B("In Alison’s case study, FEV1 after a bronchodilator was 55% of the ___ value.", ["predicted", "residual", "tidal"], 'predicted value.'),
          M("If FEV1 = 2.0 litres and FVC = 4.0 litres, what is the ratio?", ["50%", "80%", "20%", "200%"], "2.0 ÷ 4.0 = 0.5; an obstructive pattern."),
          S("Spell the term for the instrument that measures breathing", 'spirometer', 'spir/o + -meter.', 'spiro…'),
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
    id: 'ds', sym: 'Ds', name: "Respiratory Diseases", short: "Diseases", sub: "Asthma and COPD, pneumonia and TB, cystic fibrosis, pneumothorax and effusion, dust diseases and lung cancer",
    color: '#E07A3A', dark: '#B0561E', light: '#FDEEE3',
    levels: ["Asthma and COPD", "Lung infections", "Pleura, newborns, dust and cancer"],
    gens: EA.genIds('ds'),
    lessons: [
      /* ================= سطح ۱: آسم و COPD ================= */
      {
        id: 'ds1', title: "asthma", icon: '🌬️', items: [
          L("An asthma attack", `${fig('asthma-airway', [], "A bronchiole in an asthma attack")}${e('<b>asthma</b>')} is a chronic disease in which three things happen in the airway during attacks:<br>1. smooth muscle contraction (${e('bronchospasm')})<br>2. inflammation and swelling of the wall<br>3. excess mucus<br>The result: wheezing (${e('wheeze')}), cough and breathlessness.`),
          L("Treatment and monitoring", `• ${e('bronchodilator')} (such as a salbutamol inhaler) to open the airway quickly<br>• ${e('inhaled corticosteroid')} to prevent inflammation<br>• ${e('peak flow meter')} for daily monitoring at home${fig('mdi', [], "An inhaler with a spacer")}${pearl("A textbook lung consult report: a 10-year-old boy with dyspnea, cyanosis around the lips, rhonchi and hypoxemia on ABG; spirometry showed moderate to severe airway obstruction.")}`),
          M("Which of these does not happen in an asthma attack?", ["destruction of the alveolar walls", "bronchial muscle contraction", "inflammation of the wall", "excess mucus"], "Destruction of alveoli belongs to emphysema.", null, F('asthma-airway', [])),
          M("What is the hallmark sound of asthma on auscultation?", ['wheeze', 'stridor', 'pleural rub', 'rales'], "A whistling wheeze."),
          T("A peak flow meter is used to monitor asthma at home.", true, 'PEFR.'),
          P("Match each drug to its job", [['bronchodilator', "opening the bronchi quickly"], ['inhaled corticosteroid', "preventing inflammation"], ['MDI', "measured-dose inhaler"], ['nebulizer', "medicine as a mist"]], "Asthma treatment."),
          B("The abbreviation ___ means peak expiratory flow rate.", ['PEFR', 'PFT', 'FRC'], 'peak expiratory flow rate.'),
          O("Order the events of an asthma attack", ["meeting a trigger", "bronchospasm and inflammation", "narrowed airway and wheeze", "bronchodilator and the airway opening"], "The course of an attack."),
          S("Spell the term for the attack-prone airway disease with wheezing", 'asthma', "The th is silent.", 'ast…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds2', title: "COPD: emphysema and chronic bronchitis", icon: '🚬', items: [
          L("chronic obstructive lung disease", `${fig('copd', [], "Emphysema and chronic bronchitis")}${e('<b>COPD</b>')} is a progressive disease, mostly caused by smoking, that makes it hard to breathe out. It has two main parts:<br>• ${e('<b>emphysema</b>')}: the alveolar walls are destroyed and the sacs enlarge; air gets trapped in the lung.<br>• ${e('<b>chronic bronchitis</b>')}: long-term inflammation of the bronchi with a productive cough for months each year.`),
          L("Complications", `• ${e('<b>bronchiectasis</b>')}: permanent widening of the bronchi with mucus build-up and repeated infections<br>• ${e('<b>cor pulmonale</b>')}: enlargement and failure of the right heart from chronic lung disease<br>• chronic oxygen shortage, clubbing of the fingers${fig('lung-cancer-photo', [], "A smoker’s damaged lung")}${vs(['asthma', "reversible; comes in attacks; often from childhood"], ['COPD', "progressive; permanent; mostly from smoking"])}`),
          M("In which disease are the alveolar walls destroyed?", ['emphysema', 'chronic bronchitis', 'asthma', 'pneumonia'], "Large, inefficient air sacs.", null, F('copd', [])),
          M("COPD means…", ["chronic obstructive lung disease", "acute heart-lung disease", "respiratory distress syndrome", "lung cancer"], 'chronic obstructive pulmonary disease.'),
          T("Cor pulmonale means right heart failure caused by lung disease.", true, "cor = heart, pulmonale = of the lungs."),
          W("Build a word meaning “widening of a bronchus”", ['bronchi/o', '-ectasis'], ['-itis', 'pneum/o', 'atel/o'], 'bronchi/o + -ectasis = bronchiectasis.'),
          P("Match each disease to its feature", [['emphysema', "destruction of the alveoli"], ['chronic bronchitis', "chronic productive cough"], ['bronchiectasis', "permanent widening of a bronchus"], ['cor pulmonale', "right heart failure"]], "COPD and its complications."),
          B("The most important cause of COPD is ___.", ["smoking", "virus", "food allergy"], 'smoking.'),
          S("Spell the term for overinflated, damaged air sacs", 'emphysema', 'ph = f.', 'emph…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds3', title: "Newborns and inherited diseases", icon: '👶', items: [
          L("cystic fibrosis", `${e('<b>cystic fibrosis</b>')} (${e('CF')}) is an inherited disease that makes mucus thick and sticky; the lungs and pancreas become blocked and repeated lung infections follow. It is diagnosed with a ${e('<b>sweat test</b>')} (high salt in sweat).`),
          L("Newborns", `• ${e('<b>RDS</b>')} (${e('IRDS')}, ${e('HMD')}): breathing failure in a premature newborn from lack of surfactant<br>• ${e('<b>SIDS</b>')}: the sudden, unexplained death of an infant in sleep<br>• ${e('<b>ARDS</b>')}: severe, sudden lung failure in an adult after injury or serious illness${pearl("To lower the risk of SIDS, lay the baby on its back and avoid pillows and soft blankets in the cot.")}${memo("In cystic fibrosis the sweat is very salty; in the past a “salty kiss” on a child’s forehead was taken as a sign of the disease.")}`),
          M("The sweat test is for diagnosing which disease?", ['cystic fibrosis', 'asthma', 'tuberculosis', 'pertussis'], 'CF.'),
          M("What causes RDS in a premature newborn?", ["lack of surfactant", "viral infection", "allergy", "a foreign body"], 'hyaline membrane disease.'),
          T("ARDS is a disease of newborns only.", false, "False; ARDS occurs in adults after injury or severe illness."),
          P("Match each abbreviation to its meaning", [['CF', "cystic fibrosis"], ['RDS', "respiratory distress syndrome"], ['SIDS', "sudden infant death"], ['ARDS', "acute respiratory distress"]], "Abbreviations."),
          B("Another name for newborn RDS is ___ disease.", ['hyaline membrane', 'cystic', 'interstitial'], 'HMD.'),
          M("In Case Study 12-2, with which diagnosis was Ella put on a ventilator?", ["refractory ARDS", "mild asthma", "Sinusitis", "croup"], "Refractory ARDS after pneumonia."),
          S("Spell the inherited disease that makes mucus thick and sticky", 'cystic fibrosis', 'cyst/o + fibr/o + -osis.', 'cystic…'),
          N('ab:ds')
        ]
      },
      /* ================= سطح ۲: عفونت‌های ریه ================= */
      {
        id: 'ds4', title: "Pneumonia", icon: '🦠', items: [
          L("Lung inflammation and infection", `${fig('pneumonia', [], "Lobar pneumonia and bronchopneumonia")}In ${e('<b>pneumonia</b>')} the alveoli fill with fluid and pus. Signs: fever, productive cough, breathlessness, crackles (${e('rales')}) and an opaque patch on the ${e('CXR')}.<br>• ${e('lobar pneumonia')}: a whole lobe<br>• ${e('bronchopneumonia')}: scattered patches around the bronchioles<br>• ${e('aspiration pneumonia')}: from inhaling food or vomit`),
          L("From the sources", `${pearl("A textbook chart note transcription: a 43-year-old woman with painful, difficult and rapid breathing, fever, crackles in the lower left chest and purulent sputum; the CXR showed an opaque patch in the left lower lobe. Diagnosis: bacterial pneumonia of the LLL; treatment: IV antibiotics and intubation.")}${wb('pneumon/o', '-ia')} → pneumonia; ${wb('pneumon/o', '-itis')} → inflammation of the lung${vs(['pneumonia', "infection and filling of the alveoli"], ['pneumonitis', "inflammation of lung tissue (not necessarily infectious)"])}`),
          M("Which type of pneumonia involves a whole lobe?", ['lobar pneumonia', 'bronchopneumonia', 'aspiration pneumonia', 'pneumonitis'], "lob/o = lobe.", null, F('pneumonia', [])),
          M("What is pneumonia caused by inhaling food or vomit?", ['aspiration pneumonia', 'lobar pneumonia', 'pneumoconiosis', 'atelectasis'], "aspiration = breathing in foreign material."),
          T("In pneumonia the alveoli fill with fluid and pus.", true, 'consolidation.'),
          W("Build a word meaning “pneumonia around the bronchi”", ['bronch/o', 'pneumon/o', '-ia'], ['lob/o', '-itis', 'pleur/o'], 'broncho + pneumon + ia.'),
          P("Match each finding to its meaning", [['rales', "crackles"], ['purulent sputum', "pus-filled sputum"], ['CXR', "chest X-ray"], ['LLL', "left lower lobe"]], "Pneumonia in the chart."),
          B("The abbreviation ___ means chest X-ray.", ['CXR', 'CTA', 'ABG'], 'chest X-ray.'),
          S("Spell the term for a lung infection filling the air sacs", 'pneumonia', "The first p is silent.", 'pneu…'),
          N('d2t:ds')
        ]
      },
      {
        id: 'ds5', title: "tuberculosis", icon: '🧫', items: [
          L("An old disease, still with us", `${e('<b>tuberculosis</b>')} (${e('TB')}) is a contagious bacterial infection that mostly affects the lungs and spreads by coughing. Signs: a long-lasting cough, ${e('hemoptysis')}, fever, night sweats and weight loss.${fig('tb-lung', [], "Widespread (miliary) TB in a lung section")}`),
          L("diagnosis", `• ${e('<b>tuberculin skin test</b>')} (${e('PPD')}, Mantoux): an intradermal injection, with the hardening read after 48 to 72 hours<br>• ${e('CXR')}: opaque patches, often in the upper lung<br>• sputum culture (${e('sputum culture')})${fig('xray-tb', [], "X-rays of a healthy lung (left) and TB (right)")}${pearl("A patient with suspected TB is kept in a negative-pressure isolation room and staff wear N95 masks.")}`),
          M("The Mantoux skin test screens for which disease?", ['tuberculosis', 'asthma', 'cystic fibrosis', 'pertussis'], 'PPD.'),
          M("Which sign is common in TB?", ["night sweats and hemoptysis", "barking cough", "night-time wheeze with exercise", "runny nose"], "A long-lasting cough, bloody sputum, weight loss.", null, F('xray-tb', [])),
          T("TB spreads from person to person by coughing.", true, 'airborne.'),
          W("Build a word meaning “tuberculosis”", ['tubercul/o', '-osis'], ['-itis', 'myc/o', 'coni/o'], 'tubercul/o + -osis = tuberculosis.'),
          P("Match each term to its meaning", [['TB', "tuberculosis"], ['PPD', "TB skin test"], ['sputum culture', "growing germs from coughed-up mucus"], ['hemoptysis', "coughing up blood"]], "TB."),
          B("A fungal lung infection is called ___.", ['pneumonomycosis', 'pneumoconiosis', 'pneumothorax'], "myc/o = fungus."),
          S("Spell the full name of the disease abbreviated TB", 'tuberculosis', 'tubercul/o + -osis.', 'tuber…'),
          N('wb:ds')
        ]
      },
      {
        id: 'ds6', title: "Influenza, whooping cough and viruses", icon: '🤒', items: [
          L("Contagious infections", `${tbl([["disease", "Feature"], [e('influenza (flu)'), "viral; fever, body aches and cough"], [e('pertussis'), "whooping cough; coughing fits with a “whoop” on breathing in"], [e('diphtheria'), "a thick membrane in the throat that blocks the airway"], [e('SARS'), "severe viral pneumonia (a coronavirus)"], [e('MERS'), "Middle East respiratory syndrome (a coronavirus)"]])}`),
          L("prevention", `The ${e('<b>DPT</b>')} vaccine protects children against diphtheria, whooping cough (${e('pertussis')}) and tetanus. The flu vaccine is repeated every year.${pearl("In infants, whooping cough may show apnoea and cyanosis instead of the “whoop”.")}${memo("pertussis = per (very) + tussis (cough): a very severe cough.")}`),
          M("What is whooping cough called?", ['pertussis', 'diphtheria', 'croup', 'influenza'], 'per + tussis.'),
          M("The DPT vaccine protects against which diseases?", ["diphtheria, whooping cough and tetanus", "diphtheria, pneumonia and TB", "influenza and measles", "TB and hepatitis"], 'diphtheria, pertussis, tetanus.'),
          T("SARS and MERS are both caused by coronaviruses.", true, 'severe acute / Middle East respiratory syndrome.'),
          P("Match each disease to its feature", [['influenza', "viral fever and body aches"], ['pertussis', "coughing fits with a whoop"], ['diphtheria', "thick throat membrane"], ['croup', "child’s barking cough"]], "Contagious infections."),
          B("The common short form for influenza is ___.", ['flu', 'URI', 'TB'], 'influenza.'),
          M("The root tuss/i means…", ["cough", "thick mucus from the airways", "fever", "Throat"], "antitussive = against cough."),
          S("Spell the medical term for whooping cough", 'pertussis', 'per- + tuss/i.', 'pert…'),
          N('f2t:ds')
        ]
      },
      /* ================= سطح ۳: جنب، رگ، غبار و سرطان ================= */
      {
        id: 'ds7', title: "Air, blood, pus and fluid in the pleura", icon: '💧', items: [
          L("Diseases of the pleural space", `${fig('pleural-disorders', [], "Diseases of the pleural space")}${tbl([["Term", "Meaning"], [e('pneumothorax'), "air in the pleural space; the lung collapses"], [e('hemothorax'), "blood in the pleural space"], [e('pyothorax (empyema)'), "pus in the pleural space"], [e('pleural effusion'), "excess fluid in the pleural space"], [e('pleurisy'), "inflammation of the lung lining (pleurisy)"]])}`),
          L("Atelectasis", `${fig('atelectasis', [], "Atelectasis")}${wb('atel/o', '-ectasis')} → ${e('<b>atelectasis</b>')}: collapse of all or part of a lung; for example after surgery when the patient does not breathe deeply, or from the pressure of a pneumothorax or effusion.${pearl("After abdominal surgery, encouraging the patient to breathe deeply and cough (and use an incentive spirometer) prevents atelectasis.")}`),
          M("What is air in the pleural space called?", ['pneumothorax', 'hemothorax', 'pyothorax', 'pleural effusion'], "pneum/o = air.", null, F('pleural-disorders', [])),
          M(`${e('<b>empyema</b>')} is another name for which condition?`, ['pyothorax', 'hemothorax', 'pneumothorax', 'atelectasis'], "Pus in the pleural space."),
          T("Atelectasis means collapse of the lung or its failure to expand fully.", true, "atel/o = incomplete.", F('atelectasis', [])),
          W("Build a word meaning “pus in the chest”", ['py/o', 'thorac/o'], ['hem/o', '-itis', 'pleur/o'], 'py/o + thorac/o = pyothorax.'),
          P("Match each disease to what fills the space", [['pneumothorax', "Air"], ['hemothorax', "blood"], ['pyothorax', "pus"], ['pleural effusion', "liquid"]], "The pleural space."),
          B("Inflammation of the pleura is called ___.", ['pleurisy', 'pleurectomy', 'pleurodynia'], 'pleuritis.'),
          S("Spell the term for collapse of lung tissue", 'atelectasis', 'atel/o + -ectasis.', 'atel…'),
          N('m2r:ds')
        ]
      },
      {
        id: 'ds8', title: "Embolism, oedema and dust diseases", icon: '🏭', items: [
          L("Lung vessels and fluid", `• ${e('<b>pulmonary embolism</b>')} (${e('PE')}): blockage of a lung artery by a clot, usually from the leg veins; sudden breathlessness and chest pain<br>• ${e('<b>pulmonary edema</b>')}: fluid in the lung tissue and alveoli, often from heart failure; crackles and orthopnoea<br>• ${e('pulmonary fibrosis')}: scarring and stiffening of lung tissue`),
          L("Dust diseases", `${wb('pneum/o', 'coni/o', '-osis')} → lung disease from inhaled dust:<br>• ${e('anthracosis')}: coal dust (black lung)<br>• ${e('asbestosis')}: asbestos fibres<br>• ${e('silicosis')}: silica (stone) dust<br>Asbestos also raises the risk of ${e('mesothelioma')} (cancer of the pleura).${memo("coni/o means dust; picture a cone of dust.")}`),
          M("What is a clot that blocks a lung artery called?", ['pulmonary embolism', 'pulmonary edema', 'pneumothorax', 'atelectasis'], 'PE.'),
          M("Which disease is a coal miner most at risk of?", ['anthracosis', 'asbestosis', 'silicosis', 'tuberculosis'], "anthrac/o = coal."),
          T("Mesothelioma is a cancer of the pleura linked with asbestos.", true, "Rare but severe."),
          W("Build a word meaning “dust disease of the lung”", ['pneum/o', 'coni/o', '-osis'], ['anthrac/o', '-itis', 'myc/o'], 'pneumoconiosis.'),
          P("Match each disease to its cause", [['anthracosis', "coal"], ['asbestosis', "asbestos"], ['silicosis', "silica"], ['pulmonary edema', "heart failure"]], "Causes."),
          B("The abbreviation ___ means pulmonary embolism.", ['PE', 'PFT', 'PPD'], 'pulmonary embolism.'),
          S("Spell the term for black lung from coal dust", 'anthracosis', 'anthrac/o + -osis.', 'anthr…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds9', title: "lung cancer", icon: '🎗️', items: [
          L("Bronchogenic carcinoma", `${e('<b>bronchogenic carcinoma</b>')} is a cancer that starts in the bronchi and is strongly linked with smoking. Signs: a long-lasting cough, ${e('hemoptysis')}, weight loss and breathlessness.${wb('bronch/o', '-genic')} → “arising in a bronchus”${fig('xray-lung-cancer', [], "Coloured X-ray: a large lung tumour")}`),
          L("diagnosis and treatment", `Diagnosed with ${e('CXR')} and ${e('CT')}, ${e('bronchoscopy')} and biopsy; treated with ${e('lobectomy')} or ${e('pneumonectomy')}, radiotherapy and chemotherapy.${pearl("Case Study 12-1: Morgan, 68, a smoker for 52 years, had had a lobectomy, radiotherapy and chemotherapy for a giant-cell sarcoma of the left lung and has now returned with pain on breathing in, dyspnea and diaphoresis.")}${vs(['carcinoma', "cancer of lining tissue (bronchus)"], ['sarcoma', "cancer of connective tissue"])}`),
          M("What is the most important risk factor for lung cancer?", ["smoking", "repeated colds", "childhood asthma", "vitamin deficiency"], 'smoking.'),
          M(`${e('<b>bronchogenic</b>')} means…`, ["arising in a bronchus", "inflammation of a bronchus", "widening of a bronchus", "removal of a bronchus"], 'bronch/o + -genic.', null, F('xray-lung-cancer', [])),
          T("Removal of a whole lung is called pneumonectomy.", true, 'pneumon/o + -ectomy.', F('lung-surgery', [])),
          P("Match each term to its meaning", [['bronchogenic carcinoma', "lung cancer from a bronchus"], ['mesothelioma', "cancer of the pleura"], ['lobectomy', "removing one lobe"], ['biopsy', "tissue sample"]], "Lung cancer."),
          B("A cancer that starts in connective tissue is a ___.", ['sarcoma', 'carcinoma', 'adenoma'], 'Morgan: giant cell sarcoma.'),
          M("Which procedure is used to see a tumour inside a bronchus and take a sample?", ['bronchoscopy', 'spirometry', 'pulse oximetry', 'sweat test'], 'bronch/o + -scopy.', null, F('bronchoscopy-view', [], "Bronchoscopic view of the bronchial openings")),
          S("Spell the term for a cancer of lining tissue", 'carcinoma', 'carcin/o + -oma.', 'carci…'),
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
    id: 'tx', sym: 'Tx', name: "Diagnosis and Treatment", short: "Diagnosis and Treatment", sub: "Spirometry, ABG and pulse oximetry, bronchoscopy and thoracentesis, intubation and tracheostomy, oxygen, drugs, lung surgery and chart abbreviations",
    color: '#3D6FD6', dark: '#274FA8', light: '#E4ECFB',
    levels: ["Tests and imaging", "Airway and oxygen", "Drugs, surgery and charts"],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: آزمون‌ها و تصویربرداری ================= */
      {
        id: 'tx1', title: "pulmonary function test", icon: '📉', items: [
          L("Spirometry", `${fig('spirometry', [], "The volume-time curve")}A ${e('<b>PFT</b>')} (pulmonary function test) is a group of breathing tests. The most important is ${e('<b>spirometry</b>')}: the patient blows as hard as possible into a ${e('spirometer')}, and ${e('FVC')}, ${e('FEV1')} and their ratio are measured.${fig('spirometry-test', [], "An exercise spirometry test")}`),
          L("Peak flow", `A ${e('<b>peak flow meter</b>')} is a small hand-held device that measures the ${e('PEFR')} (peak expiratory flow rate); patients with asthma use it at home every day to monitor themselves.${pearl("In the case study of Alison, aged 13, spirometry was done before and after a bronchodilator to obtain respiratory “clearance” for scoliosis surgery.")}${memo("-meter is the instrument (spirometer) and -metry the method (spirometry).")}`),
          M("What is measuring the volume and flow of breathed air called?", ['spirometry', 'oximetry', 'bronchoscopy', 'polysomnography'], 'spir/o + -metry.', null, F('spirometry', [])),
          M("PFT means…", ["pulmonary function test", "pulmonary tuberculosis", "clot in a lung artery", "physical therapy"], 'pulmonary function test.'),
          T("A spirometer is the instrument and spirometry the method of measurement.", true, "-meter and -metry."),
          W("Build a word meaning “an instrument for measuring breathing”", ['spir/o', '-meter'], ['-metry', 'ox/i', '-scope'], 'spir/o + -meter = spirometer.'),
          P("Match each abbreviation to its meaning", [['PFT', "pulmonary function test"], ['PEFR', "peak breath-out speed"], ['FVC', "forced vital capacity"], ['FEV1', "first-second volume"]], "Spirometry."),
          B("A patient with asthma monitors themselves at home with a ___.", ['peak flow meter', 'bronchoscope', 'ventilator'], 'PEFR.'),
          S("Spell the term for measuring breathing", 'spirometry', 'spir/o + -metry.', 'spiro…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: "ABG and pulse oximetry", icon: '🩸', items: [
          L("arterial blood gases", `${e('<b>ABGs</b>')} (arterial blood gases): an arterial blood sample that measures oxygen, carbon dioxide and ${e('pH')}; the most accurate way to measure ${e('hypoxemia')} and ${e('hypercapnia')}. ${e('RA')} means the sample was taken while breathing “room air”.`),
          L("pulse oximetry", `${fig('pulse-ox', [], "pulse oximeter")}${e('<b>pulse oximetry</b>')} shows blood oxygen saturation (${e('SpO2')}) without a needle, using a clip on the finger. Normal: 95 to 100%.${fig('pulse-oximetry', [], "A pulse oximeter at the bedside")}${vs(['ABG', "arterial blood; precise; needs a needle"], ['pulse oximetry', "finger clip; quick; no needle"])}`),
          M("Which test accurately measures blood oxygen, CO2 and pH?", ['ABGs', 'pulse oximetry', 'spirometry', 'CXR'], 'arterial blood gases.'),
          M("What does an SpO2 of 88% mean?", ["hypoxaemia; needs assessment and oxygen", "normal", "hypercapnia", "fast breathing"], "Under 90% = inadequate oxygenation.", null, F('pulse-ox', [])),
          T("RA in an ABG report means the patient was breathing room air.", true, 'room air.'),
          W("Build a word meaning “an instrument for measuring oxygen”", ['ox/i', '-meter'], ['-metry', 'spir/o', 'capn/o'], 'ox/i + -meter = oximeter.'),
          P("Match each term to its meaning", [['ABGs', "arterial blood gases"], ['oximeter', "device measuring oxygen saturation"], ['RA', "room air"], ['hypoxemia', "low blood oxygen"]], "Blood oxygen."),
          B("In textbook Exercise 12-9, the ABG on “room air” showed ___ oxygen.", ["low", "many", "normal"], 'low oxygen content = hypoxemia.'),
          S("Spell the term for the instrument that measures blood oxygen", 'oximeter', 'ox/i + -meter.', 'oxi…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: "Imaging, cultures and tests", icon: '🩻', items: [
          L("Imaging", `${tbl([["Method", "Use"], [e('CXR (chest X-ray)'), "pneumonia, TB, pneumothorax, effusion"], [e('CT'), "tumours and mediastinal nodes"], [e('VQ scan'), "clot in a lung artery"], [e('bronchoscopy'), "viewing the bronchi and taking samples"]])}`),
          L("Cultures and tests", `• ${e('<b>sputum culture</b>')} and ${e('C&S')}: sputum culture and sensitivity<br>• ${e('throat culture')}: throat culture<br>• ${e('PPD')}: TB skin test<br>• ${e('sweat test')}: cystic fibrosis<br>• ${e('polysomnography')}: sleep study for apnoea${pearl("C&S means culture and sensitivity: the germ is grown and tested to see which antibiotic it is sensitive to.")}`),
          M("Which imaging is used to find a pulmonary embolism?", ['VQ scan', 'sweat test', 'spirometry', 'throat culture'], 'ventilation-perfusion scan.'),
          M("C&S means…", ["culture and sensitivity", "Cough and sputum", "chest X-ray", "CT scan"], 'culture and sensitivity.'),
          T("Polysomnography is for diagnosing sleep apnoea.", true, 'poly- + somn/o + -graphy.'),
          W("Build a word meaning “multiple recordings during sleep”", ['poly-', 'somn/o', '-graphy'], ['-metry', 'spir/o', 'hypo-'], 'polysomnography.'),
          P("Match each test to its use", [['CXR', "pneumonia and TB"], ['sweat test', "cystic fibrosis"], ['PPD', "tuberculosis"], ['sputum culture', "finding the germ in sputum"]], "Tests."),
          B("The abbreviation ___ means chest X-ray.", ['CXR', 'CT', 'VQ'], 'chest X-ray.'),
          M("On a CXR, “diffuse infiltrates at the bases of both lungs” means…", ["scattered patches at the bases of both lungs", "air in the pleural space", "a tumour at the apex of the lung", "a completely normal lung"], "bases = bottoms; both = both lungs."),
          N('ab:tx')
        ]
      },
      /* ================= سطح ۲: راه هوایی و اکسیژن ================= */
      {
        id: 'tx4', title: "Looking inside: bronchoscopy and thoracentesis", icon: '🔦', items: [
          L("Respiratory endoscopies", `${tbl([["Method", "Meaning"], [e('laryngoscopy'), "viewing the larynx"], [e('bronchoscopy'), "viewing the bronchi with a lighted tube"], [e('mediastinoscopy'), "viewing the mediastinum"], [e('thoracoscopy'), "viewing inside the chest"]])}${fig('bronchoscopy-view', [], "Bronchoscopic view")}`),
          L("Thoracentesis", `${fig('thoracentesis', [], "Thoracentesis")}${wb('thorac/o', '-centesis')} → ${e('<b>thoracentesis</b>')}: a needle enters the pleural space between the ribs and draws out the fluid (${e('pleural effusion')}); both for diagnosis and to ease breathing.${pearl("In Case Study 12-1, thoracentesis was done for Morgan, but no fluid came out.")}`),
          M("What is viewing the bronchi with a lighted tube called?", ['bronchoscopy', 'thoracentesis', 'spirometry', 'laryngectomy'], 'bronch/o + -scopy.', null, F('bronchoscopy-view', [])),
          M("What is drawing pleural fluid with a needle?", ['thoracentesis', 'thoracotomy', 'thoracoscopy', 'tracheostomy'], "‎-centesis = puncture to draw out fluid.", null, F('thoracentesis', [])),
          T("Mediastinoscopy means viewing the mediastinum with an instrument.", true, 'mediastin/o + -scopy.'),
          W("Build a word meaning “viewing inside the chest with an instrument”", ['thorac/o', '-scopy'], ['-centesis', 'bronch/o', '-tomy'], 'thorac/o + -scopy = thoracoscopy.'),
          P("Match each method to its meaning", [['laryngoscopy', "viewing the larynx"], ['bronchoscopy', "viewing the bronchi"], ['thoracoscopy', "viewing the chest"], ['thoracentesis', "drawing pleural fluid"]], "Diagnostic procedures."),
          B("The instrument for bronchoscopy is the ___.", ['bronchoscope', 'bronchoscopy', 'bronchometer'], "-scope = viewing instrument."),
          S("Spell the term for drawing fluid from the pleural space", 'thoracentesis', 'thorac/o + -centesis.', 'thora…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx5', title: "Intubation and tracheostomy", icon: '🫁', items: [
          L("An artificial airway", `${fig('intubation', [], "Endotracheal intubation")}${e('<b>endotracheal intubation</b>')}: an ${e('ET')} tube enters the trachea through the mouth or nose and its cuff seals the airway so air goes straight to the lungs. The tube must be in the trachea, not the oesophagus.<br>${e('<b>mechanical ventilation</b>')}: a ${e('ventilator')} breathes for the patient through this tube.`),
          L("tracheostomy", `${fig('tracheostomy', [], "tracheostomy")}If a patient needs a ventilator for a long time or the upper airway is blocked, an opening into the trachea is made in the front of the neck: a ${e('<b>tracheostomy</b>')}.${fig('tracheostomy-drawing', [], "A patient with a tracheostomy tube")}${pearl("Case Study 12-2: after a week of failed attempts to wean Ella off the ventilator, the lung specialist raised a permanent tracheostomy.")}`),
          M("What is the tube that enters the trachea through the mouth called?", ['endotracheal tube', 'nasal cannula', 'chest tube', 'nebulizer'], 'ET tube.', null, F('intubation', [])),
          M("What is making a lasting opening into the trachea through the front of the neck?", ['tracheostomy', 'tracheotomy', 'thoracotomy', 'laryngoscopy'], "-stomy = opening."),
          T("In correct intubation, the tube enters the oesophagus.", false, "False; the tube must be in the trachea."),
          W("Build a word meaning “incision into the trachea”", ['trache/o', '-tomy'], ['-stomy', 'thorac/o', 'endo-'], 'trache/o + -tomy = tracheotomy.'),
          P("Match each term to its meaning", [['ventilator', "breathing machine"], ['ET', "endotracheal tube"], ['tracheostomy', "opening into the trachea"], ['mechanical ventilation', "ventilation by machine"]], "The airway."),
          O("Order the steps of intubation", ["open the airway with a laryngoscope", "see the vocal cords", "place the ET tube in the trachea", "inflate the cuff and connect to the ventilator"], "The overall order."),
          S("Spell the term for a lasting opening into the trachea", 'tracheostomy', 'trache/o + -stomy.', 'tracheo…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx6', title: "Oxygen and respiratory devices", icon: '💨', items: [
          L("Ways to give oxygen", `${fig('oxygen-devices', [], "Oxygen devices and inhaled medicines")}• ${e('<b>nasal cannula</b>')}: two plastic prongs in the nose<br>• ${e('face mask')}: a mask for more oxygen<br>• ${e('<b>CPAP</b>')}: continuous positive pressure for sleep apnoea<br>• ${e('<b>IPPB</b>')}: intermittent positive pressure breathing to open the lungs${fig('nasal-cannula', [], "nasal cannula")}`),
          L("Inhaled medicines", `• ${e('<b>MDI</b>')} (metered-dose inhaler): a spray with a set dose; reaches the lungs better with a ${e('spacer')}<br>• ${e('<b>nebulizer</b>')}: turns liquid medicine into a mist; for children and very ill patients${fig('nebulizer-photo', [], "nebuliser")}${pearl("In a textbook case study, an 88-year-old woman with pneumonia received IV antibiotics and IPPB and went home on the third day.")}`),
          M("With which device is oxygen given through two small prongs in the nostrils?", ['nasal cannula', 'CPAP', 'nebulizer', 'ventilator'], "cannula = a small tube.", null, F('oxygen-devices', [])),
          M("Which device turns liquid medicine into a mist?", ['nebulizer', 'MDI', 'spirometer', 'oximeter'], 'NMT = nebulized mist treatment.'),
          T("A spacer helps inhaled medicine reach the lungs better.", true, "With an MDI.", F('mdi', [], "An inhaler with a spacer")),
          P("Match each device to its job", [['CPAP', "Sleep apnoea"], ['IPPB', "opening the lungs with pressure"], ['MDI', "set-dose spray"], ['nasal cannula', "low-flow oxygen"]], "Devices."),
          B("The abbreviation ___ means nebulised medicine treatment.", ['NMT', 'MDI', 'IPPB'], 'nebulized mist treatment.'),
          M("O2 per nasal cannula means…", ["oxygen through a nasal cannula", "carbon dioxide through the mouth", "oxygen by ventilator", "room air"], "per = by way of."),
          S("Spell the term for the device that turns liquid medicine into a mist", 'nebulizer', "nebula = mist.", 'nebu…'),
          N('ab:tx')
        ]
      },
      /* ================= سطح ۳: دارو، جراحی و پرونده ================= */
      {
        id: 'tx7', title: "Respiratory drugs", icon: '💊', items: [
          L("Drugs", `${tbl([["drug", "Job"], [e('bronchodilator'), "widening the bronchi"], [e('inhaled corticosteroid'), "reducing airway inflammation"], [e('antitussive'), "calming a cough"], [e('expectorant'), "thinning sputum so it can be coughed up"], [e('mucolytic'), "breaking down mucus"], [e('decongestant'), "reducing nasal congestion"], [e('antihistamine'), "reducing allergy symptoms"], [e('antibiotic'), "treating bacterial infection"]])}`),
          L("Building drug names", `${wb('anti-', 'tuss/i', '-ive')} → against cough<br>${wb('muc/o', '-lytic')} → mucus-breaking<br>${wb('de-', 'congest', '-ant')} → decongestant${vs(['antitussive', "reduces coughing"], ['expectorant', "makes a productive cough more effective"])}${memo("expectorant comes from ex- + pector (chest): “brings it out of the chest”.")}`),
          M("Which drug calms a cough?", ['antitussive', 'expectorant', 'bronchodilator', 'decongestant'], 'anti- + tuss/i + -ive.'),
          M(`What does an ${e('<b>mucolytic</b>')} do?`, ["breaks down and thins mucus", "widens the bronchi", "stops coughing", "brings down fever"], 'muc/o + -lytic.'),
          T("A bronchodilator narrows the bronchi.", false, "False; it widens them."),
          W("Build a word meaning “mucus-breaking”", ['muc/o', '-lytic'], ['anti-', '-itis', 'tuss/i'], 'muc/o + -lytic = mucolytic.'),
          P("Match each drug to its job", [['expectorant', "drug that loosens mucus for coughing up"], ['decongestant', "drug that clears a blocked nose"], ['antihistamine', "anti-allergy"], ['inhaled corticosteroid', "inhaled anti-inflammatory"]], "Drugs."),
          B("The abbreviation ___ means “as needed” on a prescription.", ['prn', 'po', 'ad lib'], 'pro re nata.'),
          S("Spell the term for a drug that widens the bronchi", 'bronchodilator', 'bronch/o + dilator.', 'broncho…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx8', title: "Lung and chest surgery", icon: '🔪', items: [
          L("Cutting and removing", `${fig('lung-surgery', [], "Lobectomy and pneumonectomy")}${tbl([["surgery", "Meaning"], [e('thoracotomy'), "cutting into the chest"], [e('thoracostomy'), "an opening for a chest tube"], [e('lobectomy'), "removing one lobe"], [e('pneumonectomy'), "removing a whole lung"], [e('pleurectomy'), "removing part of the pleura"]])}`),
          L("Emergencies", `• ${e('<b>CPR</b>')} (cardiopulmonary resuscitation): chest compressions and rescue breaths in cardiac and respiratory arrest<br>• ${e('<b>Heimlich maneuver</b>')}: quick upward thrusts to the abdomen to expel a foreign body from the airway${fig('heimlich', [], "Heimlich manoeuvre")}${pearl("In pneumothorax, a chest tube is placed by thoracostomy so air can escape and the lung can re-expand.")}`),
          M("What is removal of a whole lung called?", ['pneumonectomy', 'lobectomy', 'pleurectomy', 'thoracotomy'], 'pneumon/o + -ectomy.', null, F('lung-surgery', [])),
          M("What is done to expel a foreign body from the airway?", ['Heimlich maneuver', 'thoracentesis', 'spirometry', 'CPAP'], "Upward thrusts to the abdomen."),
          T("Thoracostomy is done to place a chest tube.", true, 'thorac/o + -stomy.'),
          W("Build a word meaning “removal of the pleura”", ['pleur/o', '-ectomy'], ['-tomy', 'lob/o', 'thorac/o'], 'pleur/o + -ectomy = pleurectomy.'),
          P("Match each operation to its meaning", [['lobectomy', "removal of a lobe"], ['thoracotomy', "cutting into the chest"], ['thoracostomy', "chest tube"], ['CPR', "cardiopulmonary resuscitation"]], "Surgery and emergencies."),
          B("The surgeon has planned a ___ for Mr Fritzringer’s lung tumour; only one lobe is removed and both lungs remain.", ['lobectomy', 'pneumonectomy', 'bronchoscopy'], "lob/o + -ectomy; the patient’s worry about having “one lung” is unfounded; that would be a pneumonectomy."),
          S("Spell the term for removal of a lung lobe", 'lobectomy', 'lob/o + -ectomy.', 'lobe…'),
          N('wb:tx')
        ]
      },
      {
        id: 'tx9', title: "Reading a respiratory chart", icon: '📋', items: [
          L("Common abbreviations", `${tbl([["abbreviation", "Meaning"], [e('SOB / DOE'), "breathlessness / on exertion"], [e('CTA'), "clear on auscultation"], [e('CXR'), "chest X-ray"], [e('ABGs'), "arterial blood gases"], [e('COPD'), "chronic obstructive lung disease"], [e('URI'), "upper respiratory infection"], [e('O2 / RA'), "oxygen / room air"], [e('TPR'), "temperature, pulse, respiration"]])}`),
          L("A real note", `${pearl("Textbook Exercise 12-9: “HISTORY: 30-year-old female c/o nonproductive cough, dyspnea and fever of 3 days. PE: T 102°F, R 26, P 108. Tachypnea with mild cyanosis, inspiratory rales. CXR: diffuse infiltrates at the bases of both lungs. ABG on room air: low oxygen. Dx: pneumonia of unknown etiology. Plan: ICU, antibiotics and oxygen by face mask.”")}${memo("c/o means complains of: the patient complains of…")}`),
          M("In the note above, R 26 means…", ["26 breaths a minute; fast breathing", "a heart rate of 26", "a temperature of 26 degrees", "right lung"], "R = respiration; over 20 = tachypnea."),
          M("“c/o nonproductive cough” means…", ["complains of a dry cough", "complains of bloody sputum", "productive cough", "no cough"], 'c/o = complains of.'),
          T("Etiology means the cause of a disease.", true, "pneumonia of unknown etiology = pneumonia of unknown cause."),
          P("Match each part of the note to its meaning", [['tachypnea', "fast breathing"], ['cyanosis', "large bruise"], ['inspiratory rales', "crackles on breathing in"], ['infiltrates', "opaque patches on the X-ray"]], "The clinical note."),
          B("The abbreviation ___ means breathlessness on exertion.", ['DOE', 'SOB', 'COPD'], 'dyspnea on exertion.'),
          O("Order the usual structure of a note", ['History', 'Physical exam', 'Diagnosis', 'Treatment plan'], "History → examination → diagnosis → plan."),
          M("“oxygen by face mask” means…", ["oxygen through a face mask", "oxygen through a nasal cannula", "a CPAP machine", "mechanical ventilation"], 'face mask.'),
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
    { id: 'lx-0', w: 'lx', lv: 0, name: "Breathy", title: "A Pair of Beginner Lungs", shape: 'lungs', color: '#F4A6B8', acc: ['sparkle'], bio: "Breathes more than twenty thousand times a day, giving oxygen to the blood and sending carbon dioxide out." },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Rooty", title: "Master of pulmon/o and pneum/o", shape: 'book', color: '#2E9BD6', acc: ['glasses'], bio: "A living dictionary that breaks every respiratory word into root, prefix and suffix and knows rhin/o to phren/o by heart." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Puzzly", title: "King of Prefixes and Suffixes", shape: 'puzzle', color: '#1F6F9F', acc: ['crown'], bio: "Gets tachy- and brady- right, never mixes up -pnea with -ptysis, and keeps -stomy apart from -tomy." },
    { id: 'up-0', w: 'up', lv: 0, name: "Cilio", title: "The Airway Sweeper", shape: 'hair', color: '#F3B0A6', acc: ['headband'], bio: "One of millions of cilia on the walls of the nose and trachea, sweeping mucus and dust towards the throat like an escalator." },
    { id: 'up-1', w: 'up', lv: 1, name: "Sinusy", title: "The Skull’s Air Bubble", shape: 'bubble', color: '#F6D36A', acc: ['glasses'], bio: "Lives in the maxillary bone; lightens the skull, makes the voice resonate and is afraid of sinusitis." },
    { id: 'up-2', w: 'up', lv: 2, name: "Laryngo", title: "Master of the Vocal Cords", shape: 'mic', color: '#E0708C', acc: ['crown'], bio: "Opens the glottis for breathing and closes it for singing; recognises aphonia and dysphonia from a patient’s voice." },
    { id: 'lo-0', w: 'lo', lv: 0, name: "Ringo", title: "The Ever-Open Trachea", shape: 'ruler', color: '#BFE0F2', acc: ['sparkle'], bio: "Its C-shaped cartilage rings never let it close; at the carina it splits into two bronchi." },
    { id: 'lo-1', w: 'lo', lv: 1, name: "Alveo", title: "The Gas-Exchange Cluster", shape: 'grape', color: '#F8BFCB', acc: ['glasses'], bio: "Three hundred million tiny air sacs that stay open thanks to surfactant and pass oxygen to the capillaries." },
    { id: 'lo-2', w: 'lo', lv: 2, name: "Diaphro", title: "The Champion Dome Muscle", shape: 'shield', color: '#D65A52', acc: ['crown'], bio: "Contracts and flattens with every breath in, drawing air inwards; the phrenic nerve is its commander." },
    { id: 'br-0', w: 'br', lv: 0, name: "Thermo", title: "Guardian of the Vital Signs", shape: 'thermo', color: '#17A398', acc: ['sparkle'], bio: "Counts the TPR: temperature, pulse and respiration; and tells tachypnea from eupnea." },
    { id: 'br-1', w: 'br', lv: 1, name: "Corpuscle", title: "oxygen carrier", shape: 'disc', color: '#D9443A', acc: ['glasses'], bio: "Takes oxygen from the alveolus and delivers it to every cell; if it falls short, the lips turn blue." },
    { id: 'br-2', w: 'br', lv: 2, name: "Spiro", title: "The Lung Volume Gauge", shape: 'dyna', color: '#0F7A71', acc: ['crown'], bio: "Knows TV, VC and TLC, and spots an obstructive pattern with one look at FEV1/FVC." },
    { id: 'ds-0', w: 'ds', lv: 0, name: "Rescue Puff", title: "The Bronchus Opener", shape: 'capsule', color: '#E07A3A', acc: ['sparkle'], bio: "In an asthma attack, one puff calms the bronchospasm and silences the wheeze." },
    { id: 'ds-1', w: 'ds', lv: 1, name: "Antibo", title: "Microbe Hunter", shape: 'yab', color: '#8E6BD8', acc: ['glasses'], bio: "Fights pneumonia, TB and whooping cough, and is a loyal fan of the DPT vaccine." },
    { id: 'ds-2', w: 'ds', lv: 2, name: "Clean Air", title: "Enemy of Smoke and Dust", shape: 'sun', color: '#FFC24B', acc: ['crown'], bio: "Hates cigarettes, asbestos and coal dust; knows where COPD and lung cancer come from." },
    { id: 'tx-0', w: 'tx', lv: 0, name: "Pulse-Oxi", title: "The Smart Finger Clip", shape: 'meter', color: '#3D6FD6', acc: ['sparkle'], bio: "Shows the SpO2 in seconds without a needle; below 90% it sounds the alarm." },
    { id: 'tx-1', w: 'tx', lv: 1, name: "Bronchy", title: "Explorer of the Bronchi", shape: 'glove', color: '#9FD3C7', acc: ['glasses'], bio: "Looks inside the bronchi with a bronchoscope, takes samples and pulls out foreign bodies." },
    { id: 'tx-2', w: 'tx', lv: 2, name: "Lung Scribe", title: "Master of the Respiratory Chart", shape: 'clipboard', color: '#274FA8', acc: ['cape', 'crown'], bio: "Reads SOB, CTA, ABGs and CXR at a glance and follows the patient from intubation to discharge." }
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
      id: 'r1', w: 'lx', title: "Pearson Hospital emergency record", who: "A 43-year-old woman",
      brief: "Her family has brought her to the emergency department. She complains of painful, difficult breathing, rapid breathing and fever. A blood oxygen test shows a very low oxygen level. Listening to the lungs, crackling sounds are heard in the lower left chest. She has plenty of purulent sputum and the chest X-ray shows a large opaque patch in the left lower lobe. You must write each phrase with its medical term.",
      chart: [["1", "painful, difficult breathing"], ["2", "rapid breathing"], ["3", "blood oxygen test"], ["4", "crackling lung sounds"], ["5", "pus-filled sputum"]],
      fig: { a: 'lung-sounds', l: [] },
      steps: [
        M("Term", "Which term is used for “difficult breathing”?", ['dyspnea', 'eupnea', 'apnea', 'orthopnea'], 'dys- + -pnea.'),
        M("Term", "What is “rapid breathing”?", ['tachypnea', 'bradypnea', 'hyperventilation', 'hypopnea'], "tachy- = fast."),
        P("Term", "Match each phrase to its medical term", [["blood oxygen test", 'ABGs'], ["low oxygen in the blood", 'hypoxemia'], ["listening to body sounds", 'auscultation'], ["crackling sound", 'rales (crackles)']], 'Chart Note Transcription.'),
        M("Term", "“Purulent sputum” means…", ['purulent sputum', 'hemoptysis', 'mucus', 'rhinorrhea'], "purulent = pus-filled; sputum = coughed-up phlegm."),
        M("diagnosis", "What is lung inflammation from a bacterial infection in the left lower lobe called?", ['LLL pneumonia', 'RUL pneumonia', 'LLL atelectasis', 'pleurisy'], 'left lower lobe pneumonia.', null, { a: ['pneumonia'], l: [] }),
        S("Spelling", "Spell the term for placing a tube into the trachea", 'intubation', 'endotracheal intubation.', 'intu…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: "The miner’s cough", who: "Mr Adam Boyle, 41",
      brief: "Mr Boyle has worked in a coal mine for twenty years and has also done some building work in old buildings. He comes in with a persistent cough and complains of coughing up blood. He denies a runny nose or nosebleeds. You must write his history with medical terms.",
      chart: [["Occupation", 'coal mining, 20 years'], ['CC', 'persistent cough, coughing up blood'], ['Denies', 'runny nose, nosebleed']],
      fig: { a: 'root-map', l: [] },
      steps: [
        M("Term", "What is “coughing up blood”?", ['hemoptysis', 'epistaxis', 'hematemesis', 'rhinorrhea'], 'hem/o + -ptysis.'),
        P("Term", "Match each phrase to its term", [["runny nose", 'rhinorrhea'], ["nosebleed", 'epistaxis'], ["coughing blood", 'hemoptysis'], ["shortness of breath", 'dyspnea']], "Basic terms."),
        M("danger", "Long work in a coal mine raises the risk of which disease?", ['anthracosis', 'asthma', 'cystic fibrosis', 'croup'], "anthrac/o = coal; black lung."),
        M("danger", "Working in old buildings may have exposed him to which substance?", ["asbestos (asbestosis)", "sea silica", "flower pollen", "chlorine"], "Asbestos in old insulation."),
        M("Test", "Which first test is sensible for coughing up blood?", ["CXR and sputum culture", 'sweat test', 'polysomnography', 'throat culture'], "A chest X-ray and sputum examination."),
        S("Spelling", "Spell the case’s term for coughing up blood", 'hemoptysis', 'hem/o + -ptysis.', 'hemop…')
      ]
    },
    /* ================= تنفس فوقانی ================= */
    {
      id: 'r3', w: 'up', title: "Nasal polyps", who: "45-year-old man",
      brief: "Two years ago he presented with upper airway obstruction from large polyps in the right nasal cavity. A large polypoid mass filled most of the right nasal cavity. A nasal snare polypectomy was done. Pathology reported the nasal growth as a low-grade papillary carcinoma, and a submaxillary lymph node was metastatic carcinoma. A chest X-ray showed pulmonary densities from unresolved pneumonia. The patient died at home after discharge, and no necropsy was performed.",
      chart: [['CC', 'upper airway obstruction'], ['Op', 'polypectomy with nasal snare'], ['Path', 'low-grade papillary carcinoma; metastatic node'], ['CXR', 'pulmonary densities, unresolved pneumonia']],
      fig: { a: 'upper-airway', l: [] },
      steps: [
        M("surgery", "polypectomy means…", ["removal of a polyp", "inflammation of a polyp", "Repairing the nose", "viewing the nose"], 'polyp/o + -ectomy.'),
        M("Location", "nasal cavity means…", ["nasal cavity", "frontal sinus", "nasopharynx", "nostril"], 'nas/o + cavity.'),
        M("Pathology", "Metastatic carcinoma in a lymph node means…", ["cancer has spread to the node from elsewhere", "the node is inflamed", "the tumour is benign", "the node is normal"], "metastasis = spread."),
        M("lung", "pulmonary densities means…", ["dense patches in the lung", "air in the pleura", "large lung volume", "healthy alveoli"], "pulmon/o = lung."),
        P("Term", "Match each term to its meaning", [['hemorrhage', "bleeding"], ['expired', "died"], ['necropsy', "autopsy"], ['submaxillary', "below the upper jaw"]], 'Chart note analysis.'),
        S("Spelling", "Spell the term for removing a polyp", 'polypectomy', 'polyp/o + -ectomy.', 'polyp…')
      ]
    },
    {
      id: 'r4', w: 'up', title: "Jack’s sore throat and snoring", who: "Jack Lamborn, a 7-year-old boy",
      brief: "Jack’s mother says her son has often had a “sore throat”, finds swallowing difficult and painful, and snores heavily at night. The doctor tells them Jack has sinusitis, tonsillitis and pneumonitis.",
      chart: [['Hx', 'recurrent sore throats, painful swallowing, snoring'], ['Dx', 'sinusitis, tonsillitis, pneumonitis']],
      fig: { a: 'upper-airway', l: [] },
      steps: [
        M("Term", "What is a “sore throat”, or inflammation of the pharynx?", ['pharyngitis', 'laryngitis', 'rhinitis', 'bronchitis'], 'pharyng/o + -itis.'),
        P("diagnosis", "Match each diagnosis to its meaning", [['sinusitis', "sinus inflammation"], ['tonsillitis', "tonsil inflammation"], ['pneumonitis', "lung inflammation"], ['adenoiditis', "inflammation of the adenoids"]], "Jack’s diagnoses."),
        M("sleep", "Heavy snoring with pauses in breathing during sleep is a sign of what?", ['obstructive sleep apnea', 'asthma', 'croup', 'pertussis'], "OSA; large tonsils and adenoids."),
        M("treatment", "If the tonsils keep getting infected, which operation is considered?", ['tonsillectomy', 'laryngectomy', 'lobectomy', 'tracheotomy'], 'tonsill/o + -ectomy.'),
        M("specialist", "Which specialist will operate on Jack?", ['ENT (otorhinolaryngologist)', 'pulmonologist', 'cardiologist', 'dermatologist'], "Ear, nose and throat."),
        S("Spelling", "Spell the diagnosis of inflamed tonsils", 'tonsillitis', 'tonsill/o + -itis.', 'tonsil…')
      ]
    },
    /* ================= تنفس تحتانی ================= */
    {
      id: 'r5', w: 'lo', title: "Giant-cell sarcoma of the lung", who: "Morgan, a 68-year-old man",
      brief: "Morgan has been admitted with chest pain on breathing in, breathlessness and heavy sweating. He smoked one and a half packs a day for 52 years and stopped 3 months ago. Three years ago he had a lobectomy, radiotherapy and chemotherapy for a giant-cell sarcoma of the left lung. On examination there is a thoracotomy scar on the left hemithorax, reduced breath sounds and dullness to percussion at the left base. CT showed recurrence of the sarcoma and abnormal mediastinal nodes.",
      chart: [['CC', 'chest pain on inspiration, dyspnea, diaphoresis'], ['Hx', 'L lobectomy, radiation, chemotherapy'], ['PE', 'L thoracotomy scar; dullness at L base'], ['Plan', 'thoracoscopy, mediastinoscopy, biopsy']],
      fig: { a: 'xray-lung-cancer', l: ["lung tumour"] },
      steps: [
        M("root", "The root pulmon in pulmonary means…", ["lung", "the chest", "Air", "breath sound"], 'pulmon/o = lung.'),
        P("Term", "Match each phrase to its term", [["removal of a lobe", 'lobectomy'], ["profuse sweating", 'diaphoresis'], ["cutting into the chest", 'thoracotomy'], ["one half of the chest", 'hemithorax']], 'Case Study 12-1.'),
        M("Method", "thoracoscopy means…", ["viewing inside the chest with an instrument", "drawing pleural fluid", "incision into the windpipe", "chest X-ray"], 'thorac/o + -scopy.'),
        M("Method", "Mediastinoscopy is for viewing which space?", ["space between the two lungs", "pleural space", "voice box", "Sinuses"], 'mediastinum.'),
        T("symptom", "Morgan had no hemoptysis; that is, he was not coughing blood.", true, 'There was no hemoptysis.'),
        S("Spelling", "Spell the term for cutting into the chest", 'thoracotomy', 'thorac/o + -tomy.', 'thoraco…')
      ]
    },
    {
      id: 'r6', w: 'lo', title: "Mr Fritzringer’s worry", who: "Mr Rick Fritzringer, 55",
      brief: "Mr Fritzringer has a lung tumour and has smoked a pack a day for 40 years. The surgeon wants to do a lobectomy and asks you to explain it to the patient. He is worried he will be left with only one lung and will not get enough oxygen.",
      chart: [['Dx', 'lung tumor'], ['Hx', '40 pack-years'], ['Plan', 'lobectomy']],
      fig: { a: 'lung-lobes', l: [] },
      steps: [
        M("surgery", "lobectomy means…", ["removal of one lobe of a lung", "removal of a whole lung", "cutting into the chest", "removal of the pleura"], 'lob/o + -ectomy.'),
        M("Anatomy", "How many lobes does the right lung have?", ["three", "two", "one", "four"], "RUL, RML, RLL."),
        T("Description", "After a lobectomy the patient still has two lungs.", true, "Only one lobe is removed; pneumonectomy is the whole lung."),
        M("Description", "In plain words, what is a lobectomy?", ["removing the part of the lung that holds the tumour", "removing both lungs", "putting a tube into the trachea", "drawing fluid from around the lung"], 'lay terms.'),
        P("Term", "Match each operation to its meaning", [['lobectomy', "removing one lobe"], ['pneumonectomy', "removal of a whole lung"], ['thoracotomy', "cutting into the chest"], ['thoracostomy', "chest tube"]], "Lung surgery."),
        S("Spelling", "Spell the term for removal of a whole lung", 'pneumonectomy', 'pneumon/o + -ectomy.', 'pneumo…')
      ]
    },
    {
      id: 'r7', w: 'lo', title: "A breath that won’t come", who: "Mrs Melony Henshaw, 83",
      brief: "Mrs Henshaw comes in with constant breathlessness (“I can’t catch my breath”), weakness and increasing tiredness. She has a history of thoracotomy and lobectomy. The doctor refers her to a lung specialist.",
      chart: [['CC', 'continuous SOB, weakness, fatigue'], ['Hx', 'thoracotomy, lobectomy'], ['Referral', 'pulmonologist']],
      fig: { a: 'spirogram', l: [] },
      steps: [
        M("abbreviation", "SOB means…", ["shortness of breath", "clear on auscultation", "dry cough", "normal breathing"], 'shortness of breath.'),
        M("specialist", "Who is a pulmonologist?", ["lung specialist", "heart specialist", "general surgeon", "ear, nose and throat specialist"], 'pulmon/o + -logist.'),
        M("Test", "Which tests are sensible to investigate her breathlessness?", ["PFT, ABGs and CXR", "sweat test and PPD", 'throat culture', "polysomnography only"], "Lung function, blood gases and an X-ray."),
        T("history of", "Thoracotomy means an incision into the chest.", true, 'thorac/o + -tomy.'),
        P("Volume", "Match each spirometry abbreviation to its meaning", [['VC', "vital capacity"], ['FEV1', "first-second volume"], ['TLC', "total lung capacity"], ['RV', "residual volume"]], 'PFT.'),
        S("Spelling", "Spell the term for “difficult breathing”", 'dyspnea', 'dys- + -pnea.', 'dysp…')
      ]
    },
    /* ================= تهویه و نشانه‌ها ================= */
    {
      id: 'r8', w: 'br', title: "Ms Lopane’s respiratory assessment", who: "Ms Michelle Lopane, 35",
      brief: "Ms Lopane has come to the urgent care centre so short of breath that she cannot say a few words in a row. In her respiratory assessment the nurse writes: a whistling sound on breathing in, crackling throughout the lungs, and fast, shallow breathing.",
      chart: [["1", 'whistling sound on inspiration'], ["2", 'popping sound throughout lungs'], ["3", 'fast, shallow breathing']],
      fig: { a: 'lung-sounds', l: [] },
      steps: [
        M("sound", "What is the harsh, whistling sound on breathing in from upper airway blockage?", ['stridor', 'rhonchi', 'pleural rub', 'rales'], 'inspiratory high-pitched sound.'),
        M("sound", "What is the crackling sound in the lungs called?", ['rales (crackles)', 'wheeze', 'stridor', 'rhonchi'], 'popping/crackling.'),
        P("Pattern", "Match each description to its term", [["fast breathing", 'tachypnea'], ["shallow breathing", 'hypopnea'], ["difficult breathing", 'dyspnea'], ["stopped breathing", 'apnea']], "Breathing patterns."),
        M("Method", "With which method are these sounds heard?", ['auscultation', 'percussion', 'palpation', 'spirometry'], "Auscultation with a stethoscope."),
        T("emergency department", "Being unable to say a full sentence is a sign of severe breathlessness.", true, 'severe dyspnea.'),
        S("Spelling", "Spell the term for a harsh sound on breathing in", 'stridor', "A harsh sound on breathing in.", 'stri…')
      ]
    },
    {
      id: 'r9', w: 'br', title: "An 88-year-old woman’s pneumonia", who: "An 88-year-old woman",
      brief: "She came to the clinic with breathlessness, dizziness, orthopnoea, fever and cough. Auscultation found crackles over the right bronchus and the CXR showed fluid in the RUL. She was admitted with pneumonia. Vital signs: temperature 102°F, pulse 100 and rapid, respirations 24 and laboured, blood pressure 180/110. She was treated with IV antibiotics and IPPB and discharged on the third day on oral antibiotics.",
      chart: [['CC', 'dyspnea, dizziness, orthopnea, fever, cough'], ['CXR', 'fluid in RUL'], ['VS', 'T 102°F, P 100, R 24 labored, BP 180/110'], ['Tx', 'IV antibiotics, IPPB']],
      fig: { a: 'lung-lobes', l: [] },
      steps: [
        M("symptom", "orthopnea means…", ["breathlessness when lying flat", "fast breathing", "productive cough", "normal breathing"], 'orth/o + -pnea.'),
        M("lobe", "RUL means…", ["right upper lobe", "right lower lobe", "left upper lobe", "right middle lobe"], 'right upper lobe.'),
        M("vital signs", "A breathing rate of 24 a minute means…", ['tachypnea', 'eupnea', 'bradypnea', 'apnea'], "More than 20."),
        P("Term", "Match each term to its meaning", [['auscultation', "listening"], ['crackles', "crackling sounds on inspiration"], ['IPPB', "intermittent positive pressure breathing"], ['CXR', "chest X-ray"]], 'Fremgen case.'),
        T("vital signs", "VS means vital signs: temperature, pulse, respiration and blood pressure.", true, 'vital signs.'),
        S("Spelling", "Spell the diagnosis of an infection filling the air sacs", 'pneumonia', 'pneumon/o + -ia.', 'pneu…')
      ]
    },
    {
      id: 'r10', w: 'br', title: "A dry cough and three days of fever", who: "A 30-year-old woman",
      brief: "She complains of a dry cough, breathlessness and three days of fever; she does not smoke and was previously well. Examination: temperature 102°F, blood pressure 104/65, respirations 26, pulse 108. She has fast breathing with mild cyanosis and inspiratory crackles. The WBC is high, the CXR showed diffuse infiltrates at the bases of both lungs and the ABG on room air showed low oxygen. Diagnosis: pneumonia of unknown cause. Plan: ICU, antibiotics and oxygen by mask.",
      chart: [['c/o', 'nonproductive cough, dyspnea, fever × 3 days'], ['PE', 'T 102°F, R 26, P 108; mild cyanosis; inspiratory rales'], ['CXR', 'diffuse infiltrates, both bases'], ['ABG', 'low O2 on room air']],
      fig: { a: 'cyanosis', l: [] },
      steps: [
        M("examination", "What are the examination findings?", ["fast breathing, cyanosis and crackles on breathing in", "slow breathing, cyanosis and rhonchi on breathing out", "fast heartbeat and wheeze", "normal breathing"], 'Exercise 12-9.'),
        M("Complaint", "What is the patient’s chief complaint?", ["dry cough, breathlessness and fever", "productive cough and fast breathing", "sore throat and hoarse voice", "coughing up blood"], 'nonproductive cough + dyspnea + fever.'),
        M("abbreviation", "c/o means…", ["complains of", "together with", "as needed", "cough"], 'complains of.'),
        M("Blood gas", "ABG “on room air” means…", ["while breathing room air, without supplemental oxygen", "on a ventilator", "through a nasal cannula", "after exercise"], 'RA.'),
        T("diagnosis", "Etiology means the cause of a disease.", true, "unknown etiology = unknown cause."),
        S("Spelling", "Spell the term for bluish skin from lack of oxygen", 'cyanosis', 'cyan/o + -osis.', 'cyan…')
      ]
    },
    /* ================= بیماری‌ها ================= */
    {
      id: 'r11', w: 'ds', title: "Worsening asthma", who: "A 10-year-old boy",
      brief: "Since the age of 7 he has come to the emergency department with breathlessness, cough and wheeze, and the attacks have become more frequent. Now, in the emergency department, he has severe breathlessness, blueness around the lips, prolonged breathing out and a cough with thick phlegm. Auscultation: rhonchi throughout the lungs. The ABG showed hypoxaemia and spirometry moderate to severe airway obstruction on breathing out. He improved with Proventil.",
      chart: [['Reason', 'increasingly severe asthma'], ['PE', 'dyspnea, cyanosis around lips, rhonchi'], ['ABGs', 'hypoxemia'], ['Spirometry', 'moderately severe obstruction']],
      fig: { a: 'asthma-airway', l: [] },
      steps: [
        P("Term", "Match each term in the report to its meaning", [['dyspnea', "shortness of breath"], ['cyanosis', "large bruise"], ['phlegm', "thick, sticky secretion of the throat and chest"], ['rhonchi', "low snoring sound"]], 'Pulmonology Consultation Report.'),
        M("Test", "What did the ABGs show in this patient?", ['hypoxemia', "hypercapnia only", "normal", 'anemia'], "Low blood oxygen."),
        M("Spirometry", "Obstruction on breathing out means the FEV1/FVC is…", ["low", "high", "normal", "zero"], "An obstructive pattern."),
        M("drug", "What is Proventil used to relieve?", ['bronchospasm', "fever", "infection", "skin allergy"], 'bronchodilator.'),
        T("listening", "Auscultation means listening to the lungs with a stethoscope.", true, 'Auscultation revealed rhonchi.'),
        S("Spelling", "Spell the term for the airway tightening that Proventil relieves", 'bronchospasm', 'bronch/o + -spasm.', 'broncho…')
      ]
    },
    {
      id: 'r12', w: 'ds', title: "Alison’s pre-operative breathing test", who: "Alison, a 13-year-old girl",
      brief: "Alison is preparing for scoliosis surgery. She has had mild asthma since the age of 4, with at least one attack a week. She was sent to a lung specialist for respiratory clearance. Spirometry before a bronchodilator showed a mild fall in VC and a moderate to severe fall in FEV1 and FEV1/FVC. After the drug, FEV1 improved slightly and was 55% of the predicted value. The curves were consistent with airflow obstruction.",
      chart: [['Hx', 'mild asthma since age 4'], ['Pre-BD', '↓VC (mild), ↓↓FEV1, ↓FEV1/FVC'], ['Post-BD FEV1', '55% predicted'], ['Plan', 'optimize airflow before OR']],
      fig: { a: 'spirometry', l: [] },
      steps: [
        M("Instrument", "Which device measured Alison’s breathing volumes?", ['spirometer', 'oximeter', 'bronchoscope', 'stethoscope'], 'spir/o + -meter.'),
        M("drug", "What does a bronchodilator do?", ["widens the bronchi", "thins the sputum", "stops coughing", "kills infection"], "Opening the airway."),
        M("Pattern", "A low FEV1/FVC in Alison means…", ["an obstructive pattern", "a restrictive pattern", "a normal lung", "pulmonary fibrosis"], 'airflow obstruction.'),
        P("abbreviation", "Match each abbreviation to its meaning", [['VC', "vital capacity"], ['FEV1', "first-second volume"], ['FVC', "forced vital capacity"], ['OR', "operating room"]], "The spirometry report."),
        T("Instrument", "The FEV1/FVC ratio is calculated in the “Spirometry and oxygen” tool.", true, 'FEV1 ÷ FVC.'),
        S("Spelling", "Spell the test that measured Alison’s breathing volumes", 'spirometry', 'spir/o + -metry.', 'spiro…')
      ]
    },
    {
      id: 'r13', w: 'ds', title: "Susan’s asthma and tonsils", who: "Susan Jones, a 10-year-old girl",
      brief: "Susan has come to the emergency department with an acute asthma attack. She has had tonsillitis three times in the last 5 months, inflaming her upper airway, and came to the emergency department twice last month for asthma attacks. Her doctor is an ENT specialist and surgeon.",
      chart: [['CC', 'acute asthma attack'], ['Hx', 'tonsillitis × 3 in 5 months'], ['Physician', 'ENT surgeon']],
      fig: { a: 'asthma-airway', l: [] },
      steps: [
        M("abbreviation", "ENT means…", ["ear, nose and throat", "endotracheal tube", "distress syndrome", "upper infection"], 'ear, nose and throat.'),
        M("surgery", "Why does it matter that the doctor is a surgeon?", ["a tonsillectomy may be needed", "a lobectomy must be done", "a permanent tracheostomy must be placed", "a pneumonectomy must be done"], "Repeated tonsil infections."),
        M("asthma", "Which sound marks an asthma attack?", ['wheeze', 'stridor', 'pleural rub', 'silence'], "A wheeze."),
        P("Term", "Match each term to its meaning", [['acute', "sudden and short-lived"], ['tonsillitis', "tonsil inflammation"], ['upper respiratory tract', "nose, throat and larynx"], ['inflammation', "redness, heat, swelling and pain"]], "Susan’s history."),
        T("treatment", "An MDI and a nebuliser are both for giving inhaled medicine.", true, 'inhaled medications.'),
        S("Spelling", "Spell Susan’s chronic airway disease", 'asthma', "The th is silent.", 'ast…')
      ]
    },
    /* ================= تشخیص و درمان ================= */
    {
      id: 'r14', w: 'tx', title: "Infiltrate in the left lower lobe", who: "Mr Steven Phillips, 35",
      brief: "Mr Phillips’s chart: “The chest X-ray showed a pneumonic infiltrate in the left lower lobe with a small parapneumonic effusion. Follow-up films first showed progression of the infiltrate and then some improvement. Serial ECGs were consistent with ischaemia or a pericardial process. Lab tests were normal. An ABG was ordered. A sputum culture could not be obtained.”",
      chart: [['CXR', 'pneumonic infiltrate LLL, parapneumonic effusion'], ['ECG', 'serial'], ['ABGs', 'ordered'], ['Sputum culture', 'could not be obtained']],
      fig: { a: 'pleural-disorders', l: [] },
      steps: [
        M("lobe", "LLL means…", ["left lower lobe", "left upper lobe", "right lower lobe", "both left lobes"], 'left lower lobe.'),
        M("finding", "parapneumonic effusion means…", ["fluid in the pleural space next to a pneumonia", "air in the pleura", "blood in the pleura", "tumour of the pleura"], "para- = beside; effusion = fluid."),
        M("Test", "What is a sputum culture for?", ["finding the germ causing the infection", "measuring blood oxygen", "measuring lung volume", "looking at the bronchi"], 'sputum culture (C&S).'),
        P("abbreviation", "Match each abbreviation to its meaning", [['CXR', "chest X-ray"], ['ABGs', "arterial blood gases"], ['C&S', "culture and sensitivity"], ['LLL', "left lower lobe"]], "Phillips’s chart."),
        M("treatment", "If the effusion grows, which procedure draws the fluid out?", ['thoracentesis', 'bronchoscopy', 'spirometry', 'tracheostomy'], 'thorac/o + -centesis.', null, { a: ['thoracentesis'], l: [] }),
        S("Spelling", "Spell the term for fluid collecting in a space such as the pleura", 'effusion', 'pleural effusion.', 'effu…')
      ]
    },
    {
      id: 'r15', w: 'tx', title: "Rewriting a note with abbreviations", who: "A COPD patient",
      brief: "Note: “The patient was admitted with chronic obstructive pulmonary disease and severe breathlessness. Arterial blood gases on admission were abnormal. The family said the patient had been using a nebuliser, a metered-dose inhaler and a continuous positive airway pressure machine at home, without success. Previous pulmonary function tests were abnormal. No history of tuberculosis. Continue monitoring for breathlessness.” You must rewrite it with abbreviations.",
      chart: [['Dx', 'COPD'], ['Sx', 'severe SOB'], ['Home', 'nebulizer, MDI, CPAP'], ['Hx', 'abnormal PFTs; no TB']],
      fig: { a: 'oxygen-devices', l: [] },
      steps: [
        P("abbreviation", "Match each phrase to its abbreviation", [["chronic obstructive lung disease", 'COPD'], ["shortness of breath", 'SOB'], ["arterial blood gases", 'ABGs'], ["pulmonary function test", 'PFT']], "The COPD note."),
        P("abbreviation", "Match each device to its abbreviation", [["metered-dose inhaler", 'MDI'], ["continuous positive airway pressure", 'CPAP'], ["nebulised medicine treatment", 'NMT'], ["tuberculosis", 'TB']], "Devices and diseases."),
        M("disease", "COPD mostly includes which two diseases?", ["Emphysema and chronic bronchitis", "asthma and pneumonia", "TB and cancer", "cystic fibrosis and RDS"], 'emphysema + chronic bronchitis.', null, { a: ['copd'], l: [] }),
        M("Monitoring", "What is used to monitor a patient’s oxygen without a needle?", ['pulse oximetry', 'ABG', 'spirometry', 'bronchoscopy'], "A finger clip."),
        T("abbreviation", "No hx of TB means no history of tuberculosis.", true, 'hx = history.'),
        S("Spelling", "Spell the COPD disease with destroyed air sacs", 'emphysema', 'ph = f.', 'emph…')
      ]
    },
    {
      id: 'r16', w: 'tx', title: "End-stage breathlessness", who: "Ella, a 76-year-old woman",
      brief: "Ella is in the ICU at the end stage of multi-organ failure. She was admitted for bacterial pneumonia that did not improve with antibiotics. She has had COPD for 20 years. Her ABGs were abnormal and refractory ARDS was diagnosed. She was supported with intubation and mechanical ventilation. After a week of failed attempts to wean her off the ventilator, the lung specialist raised a permanent tracheostomy. The family decided not to continue invasive treatment and DNR status was recorded. After the tube and pulse oximeter were removed, her breathing became shallow and of the Cheyne-Stokes type.",
      chart: [['Hx', 'COPD 20 years; bacterial pneumonia'], ['Dx', 'refractory ARDS'], ['Tx', 'endotracheal intubation, mechanical ventilation'], ['Code', 'DNR']],
      fig: { a: 'intubation', l: [] },
      steps: [
        M("abbreviation", "ARDS means…", ["acute respiratory distress syndrome", "chronic obstructive lung disease", "Sleep apnoea", "sudden infant death syndrome"], 'acute respiratory distress syndrome.'),
        M("treatment", "endotracheal intubation means…", ["placing a tube into the trachea through the mouth or nose", "cutting into the trachea through the front of the neck", "drawing pleural fluid", "oxygen by cannula"], 'endo- + trache/o + -al.'),
        M("treatment", "wean from the ventilator means…", ["gradually taking the patient off the breathing machine", "connecting to the machine", "increasing the oxygen", "placing a chest tube"], 'weaning.'),
        M("Pattern", "What is Cheyne-Stokes breathing?", ["cycles of deep, fast breathing with apnoea", "normal breathing", "only slow breathing", "constant wheeze"], "Near death.", null, { a: ['breath-patterns'], l: [] }),
        P("Term", "Match each term to its meaning", [['DNR', "do not resuscitate"], ['ventilator', "breathing machine"], ['tracheostomy', "opening into the trachea"], ['pulse oximeter', "measuring oxygen saturation"]], 'Case Study 12-2.'),
        S("Spelling", "Spell the term for the machine that breathes for a patient", 'ventilator', "The breathing machine.", 'venti…')
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
    ['Lx', "The path of air: nose, pharynx, larynx, trachea, bronchus, bronchiole and finally the alveolus."],
    ['Lx', "pneum/o and pneumon/o refer both to air and to the lung; pulmon/o means only the lung."],
    ['Lx', "-pnea means breathing: eupnea normal, dyspnea difficult, apnea stopped breathing."],
    ['Lx', "spir/o means breathing; a spirometer is a device that measures the volume of breathed air."],
    ['Lx', "ox/o and -oxia refer to oxygen; capn/o and -capnia to carbon dioxide."],
    ['Lx', "-ptysis means spitting: hemoptysis is coughing up blood."],
    ['Lx', "-thorax means chest: pneumothorax is air in the pleural space and hemothorax blood in it."],
    ['Lx', "In pneumonia, the p is written but not pronounced."],
    ['Lx', "Gas exchange happens in the alveoli; the rest of the airway only moves air."],
    ['Up', "rhin/o and nas/o both mean nose; rhinorrhea is a runny nose."],
    ['Up', "Epistaxis is a nosebleed."],
    ['Up', "The pharynx has three parts: the nasopharynx, oropharynx and laryngopharynx."],
    ['Up', "During swallowing the epiglottis covers the larynx so food does not enter the trachea."],
    ['Up', "laryng/o is the larynx; the vocal cords and voice are produced in the larynx."],
    ['Up', "The adenoids are the pharyngeal tonsil, and the palatine tonsils sit on both sides of the throat."],
    ['Up', "In children, croup gives a barking cough and stridor."],
    ['Up', "The cilia of the trachea move mucus and particles upwards like an escalator."],
    ['Lo', "The right lung has three lobes and the left lung two; the heart sits on the left."],
    ['Lo', "At the carina the trachea divides into two main bronchi; the right bronchus is shorter, wider and more vertical."],
    ['Lo', "A swallowed foreign body usually goes into the right main bronchus."],
    ['Lo', "The pleura has two layers: parietal and visceral."],
    ['Lo', "Surfactant keeps the alveolar surface slippery so it does not collapse on breathing out."],
    ['Lo', "The mediastinum is the space between the two lungs and holds the heart, trachea and oesophagus."],
    ['Lo', "The diaphragm is the main muscle of breathing in and moves down as it contracts."],
    ['Br', "The normal adult breathing rate is 12 to 20 breaths a minute."],
    ['Br', "Tachypnea is fast breathing and bradypnea slow breathing."],
    ['Br', "Orthopnea means the patient breathes comfortably only when sitting or standing."],
    ['Br', "A wheeze is the whistling sound of a narrowed airway; stridor is the harsh sound on breathing in with upper airway blockage."],
    ['Br', "Rales, or crackles, are crackling sounds caused by fluid in the alveoli."],
    ['Br', "Cyanosis is a blue colour of the skin and lips from lack of oxygen."],
    ['Br', "Cheyne-Stokes means cycles of deep, fast breathing broken by apnoea."],
    ['Br', "A normal SpO2 is 95 to 100 per cent."],
    ['Ds', "COPD mostly includes emphysema and chronic bronchitis, and smoking is its main cause."],
    ['Ds', "Asthma is reversible airway obstruction: spasm, inflammation and excess mucus."],
    ['Ds', "Pertussis is whooping cough, with bouts of coughing and a “whoop” sound."],
    ['Ds', "Cystic fibrosis (CF) is a genetic disease diagnosed with a sweat test."],
    ['Ds', "Tuberculosis (TB) is screened with the PPD (Mantoux) skin test."],
    ['Ds', "Atelectasis means collapse or incomplete expansion of part of a lung."],
    ['Ds', "Pneumoconiosis is lung disease from dust: anthracosis from coal, asbestosis from asbestos and silicosis from silica."],
    ['Ds', "A pleural effusion is fluid in the pleural space and empyema pus in it."],
    ['Ds', "OSA means breathing stopping in sleep because the upper airway closes."],
    ['Tx', "An FEV1/FVC under 70% means an obstructive pattern."],
    ['Tx', "ABGs are arterial blood gases: PaO2, PaCO2 and pH."],
    ['Tx', "Thoracentesis means drawing pleural fluid with a needle."],
    ['Tx', "Tracheotomy is an incision into the trachea, and tracheostomy making a permanent or temporary opening in it."],
    ['Tx', "Lobectomy is removal of one lobe and pneumonectomy removal of a whole lung."],
    ['Tx', "A bronchodilator widens the bronchi; an expectorant thins sputum and brings it up."],
    ['Tx', "An antitussive suppresses coughing."],
    ['Tx', "CPAP keeps the airway open during sleep with continuous positive pressure."],
    ['Tx', "An MDI is a set-dose inhaler; a spacer is also used for children."],
    ['Tx', "The Heimlich manoeuvre is for expelling a foreign body from the airway."]
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
