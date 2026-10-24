/* Therapo • ترمینو — حیطه «osteo» (Musculoskeletal System)
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
    name: "Osteo", key: 'osteo', title: "Osteo • Musculoskeletal Terminology", certCode: 'OS',
    subject: "Medical terminology of the musculoskeletal system (bones, joints, muscles and tendons)",
    kicker: "🦴 Medical terminology: Bones, Joints, Muscles and Tendons",
    hello: "Hi, I’m <b>Osteo</b>, a smiling bone with a sports headband and a little dumbbell!",
    disclaimer: "Osteo is an educational tool and does not replace examination, clinical judgment or a physician’s orders.",
    eyes: "Dozens of bilingual figures and clinical pictures, from the skeleton and a cut long bone to fracture X-rays, arthritis and joint movements.",
    outcomes: [
      "Break every musculoskeletal word into prefix, root and suffix and give its meaning",
      "Know bone structure, bone cells and bone diseases",
      "Point out the bones of the skull, spine, chest and limbs on the skeleton",
      "Describe the types of joint and joint movements with the right word (flexion, abduction…)",
      "Tell apart the major muscles of the body, how they are named, and diseases of muscles and tendons",
      "Read fracture types, imaging, surgeries and the abbreviations of an orthopaedic chart"
    ],
    endText: "Just 5 minutes a day. A few weeks from now you’ll read an orthopaedic report like a familiar story.",
    obHello: "Hi! I’m Osteo, a smiling bone 🦴 What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “The Language of Bone and Muscle” is the best start; the basic roots and body directions are taught there!",
    demo: () => ({
      q: "The word <b dir=\"ltr\">osteoporosis</b> means…",
      fig: { a: ['osteoporosis'], l: ["Healthy bone and porous bone"] },
      opts: ["porous, brittle bones", "softening of bone", "bone inflammation", "bone tumour"],
      why: `${EA.K.wb('oste/o', '-porosis')}<br><b>oste/o</b> = bone, <b>-porosis</b> = porous. So it is <b>porous bone</b>: a bone full of holes and fragile, which breaks with a simple fall. Start the meaning from the suffix!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ["New Cell", "Curious Osteoblast", "Junior Cartilage Expert", "Guardian of the Joint", "Root Decoder", "Skeleton Map Reader", "Master of the Spine",
      "Movement Detective", "Muscle Champion", "Fracture Hunter", "Radiograph Reader", "Arthritis Detective", "Word-Building Master", "Orthopaedics Legend", "Terminology Icon"],
    leagueRoles: ["Medical student", "Nursing student", "Physiotherapy student", "Physiotherapist", "Occupational therapy student", "Radiology technologist", "Radiologic technology student", "Orthopaedic resident", "Physical education student", "Fitness coach", "Surgical technologist", "Orthopaedic nurse", "Midwifery student"],
    firstBadge: ['🦴', "First Bone"],
    worldBadges: { lx: ['🧩', "Decoder"], bn: ['🦴', "Bone Expert"], sk: ['💀', "Skeleton Map Reader"], jt: ['🦵', "Master of Joints"], mu: ['💪', "Muscle Champion"], fx: ['🩻', "Fracture Detective"] },
    confetti: ['#C2413A', '#E9D8B4', '#FFC800', '#3F7FBF', '#1E9E8F', '#D64F6E', '#7B5CD6', '#58CC02'],
    /* ابزارها */
    parseDefault: 'osteomyelitis',
    parseSamples: ['osteomyelitis', 'spondylolisthesis', 'arthroscopy', 'myasthenia', 'chondromalacia', 'rhabdomyolysis', 'intervertebral', 'tenorrhaphy'],
    ph: { dict: "Search: oste, knee, fracture…", roots: "Search: arthr, vertebra, -desis…", abbr: "Search: ORIF, fracture, ROM…" },
    toolsDisclaimer: "⚕️ Osteo is a learning tool; the dictionary, goniometer and T-score interpretation do not replace examination and clinical judgment.",
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
    ['shAbd', "Shoulder abduction", 'shoulder abduction', 180], ['shFlex', "Shoulder flexion", 'shoulder flexion', 180],
    ['elbow', "Elbow flexion", 'elbow flexion', 150], ['pron', "Forearm pronation", 'forearm pronation', 80],
    ['sup', "Forearm supination", 'forearm supination', 80], ['wrist', "Wrist flexion", 'wrist flexion', 80],
    ['hip', "Hip flexion", 'hip flexion', 120], ['knee', "Knee flexion", 'knee flexion', 135],
    ['dorsi', "Ankle dorsiflexion", 'ankle dorsiflexion', 20], ['plant', "Ankle plantar flexion", 'plantar flexion', 50]
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
    if (!isFinite(n)) return `<b>—</b> <span>Reference value: <bdi dir="ltr">${r[3]}°</bdi></span><small>Enter the angle measured with the goniometer</small>`;
    const msg = p >= 90 ? "Nearly full range of motion (full ROM)" : p >= 60 ? "Partly limited range of motion" : "Severely limited; needs assessment and physiotherapy";
    return `<b>${fa(p)}%</b> <span>of the normal range (<bdi dir="ltr">${fa(n)}° / ${r[3]}°</bdi>)</span><small>${msg}</small>`;
  }
  const tVal = () => { const n = EA.parseNum(st.t); return isFinite(n) ? n : NaN; };
  function tOut() {
    const n = tVal();
    if (!isFinite(n)) return "<small>Enter the T-score from the DXA report, for example ‎-2.7‎</small>";
    const c = n >= -1 ? ["normal", "Bone density is within the normal range.", 'ok'] : n > -2.5 ? ["Osteopenia", "Bone mass is below normal but not yet osteoporosis.", 'mid'] : ["Osteoporosis", "High fracture risk; drug treatment, calcium and vitamin D, and fall prevention.", 'bad'];
    return `<b class="tsc--${c[2]}">${c[0]}</b><small>${c[1]}</small>`;
  }
  EA.APP.extraTool = {
    id: 'rom', sym: '°', name: "Goniometer and bone density", color: '#1E9E8F',
    value: romPct,
    pane: () => `<div class="tpane"><p class="muted">Choose a movement and type the measured angle; you will see the percentage of the normal range and what it means.</p>
    <div class="seg rom__m">${ROM.map(r => `<button class="seg__b ${st.m === r[0] ? 'is-on' : ''}" data-rom="${r[0]}">${r[1]}</button>`).join('')}</div>
    <div class="rom">
      ${arc()}
      <label class="rom__in"><span><bdi dir="ltr">${cur()[2]}</bdi></span><input type="text" inputmode="decimal" dir="ltr" data-keep="romv" data-romv value="${EA.ui.esc(st.v)}" placeholder="°" autocomplete="off"></label>
    </div>
    <div class="rom__out" aria-live="polite">${romOut()}</div>
    <h4 class="rom__h">T-score interpretation (bone density scan, <bdi dir="ltr">DXA</bdi>)</h4>
    <label class="rom__in rom__in--t"><span>T-score</span><input type="text" inputmode="decimal" dir="ltr" data-keep="tsc" data-tsc value="${EA.ui.esc(st.t)}" placeholder="-2.5" autocomplete="off"></label>
    <div class="rom__out rom__out--t" aria-live="polite">${tOut()}</div>
    ${EA.ui.figCard({ a: ['tscore', 'goniometer'], l: ["T-score scale", "Measuring with a goniometer"] })}
    <table class="mini"><tr><th>T-score</th><th>Interpretation</th></tr>
      <tr><td><bdi dir="ltr">≥ -1.0</bdi></td><td>normal</td></tr>
      <tr><td><bdi dir="ltr">-1.0 to -2.5</bdi></td><td>osteopenia (low bone mass)</td></tr>
      <tr><td><bdi dir="ltr">≤ -2.5</bdi></td><td>osteoporosis</td></tr></table>
    <p class="muted">Reference values for range of motion are approximate and differ by a few degrees between textbooks.</p></div>`,
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
/* اُستئو — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از apps/osteo/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["abduction", "ab-DUK-shun", "Moving a limb away from the midline of the body (ab- = away from, duct/o = to bring).", "moving away from the midline", "jt", "mv", ["ROM"]],
["acetabulum", "as-eh-TAB-yoo-lum", "Deep socket in the hip bone into which the head of the femur fits (acetabul/o = acetabulum).", "hip socket", "sk", "body", []],
["Achilles tendon", "ah-KIL-eez TEN-don", "The strongest tendon of the body; it attaches the calf muscles to the calcaneus; also called calcaneal tendon.", "heel cord", "mu", "mus", []],
["achondroplasia", "ay-kon-droh-PLAY-zee-ah", "Inherited disorder of cartilage growth that causes short limbs (dwarfism) (a- = without, chondr/o = cartilage, -plasia = formation).", "inherited dwarfism", "bn", "dz", []],
["acromion", "ah-KROH-mee-on", "Outward projection of the scapula that forms the highest point of the shoulder.", "tip of the shoulder blade", "sk", "body", []],
["adduction", "ah-DUK-shun", "Moving a limb toward the midline of the body (ad- = toward, duct/o = to bring).", "moving toward the midline", "jt", "mv", ["ROM"]],
["allograft", "AL-oh-graft", "Graft taken from another person, such as donor bone (allo- = other).", "graft from a donor", "fx", "tx", []],
["amphiarthrosis", "am-fee-ar-THROH-sis", "Slightly movable cartilaginous joint, such as the pubic symphysis or the joints between vertebrae (amphi- = on both sides).", "slightly movable joint", "jt", "body", []],
["amputation", "am-pyoo-TAY-shun", "Surgical or traumatic removal of a limb or part of a limb, such as above the knee or below the elbow.", "removal of a limb", "fx", "tx", ["AK", "BK", "AE", "BE"]],
["analgesic", "an-al-JEE-zik", "Medicine that relieves pain (an- = without, -algesia = sensation of pain).", "painkiller", "fx", "tx", []],
["ankylosing spondylitis", "ang-kih-LOH-sing spon-dih-LYE-tis", "Chronic inflammation of the vertebrae that slowly fuses them, making the spine stiff (ankyl/o = stiff).", "inflammatory fusing spine disease", "sk", "dz", []],
["ankylosis", "ang-kih-LOH-sis", "Stiffening and immobility of a joint (ankyl/o = stiff, crooked).", "stiffening and fusion of a joint", "jt", "sx", []],
["antagonist", "an-TAG-oh-nist", "Muscle that acts opposite to the prime mover, such as the triceps against the biceps.", "muscle that opposes another", "mu", "mus", []],
["anteroposterior", "an-ter-oh-pos-TEER-ee-or", "From the front to the back; an AP X-ray passes through the body from front to back (anter/o = front, poster/o = back).", "front to back", "lx", "mv", ["AP"]],
["antinuclear antibody", "an-tee-NOO-klee-ar AN-tih-bod-ee", "Antibody against cell nuclei; a positive test suggests lupus or another autoimmune disease.", "blood marker for lupus", "fx", "lab", ["ANA"]],
["aponeurosis", "ap-oh-noo-ROH-sis", "Broad, flat sheet of tendon that attaches muscle to bone or to another muscle.", "flat sheet-like tendon", "mu", "mus", []],
["appendicular skeleton", "ap-en-DIK-yoo-lar SKEL-eh-ton", "The 126 bones of the limbs and the shoulder and pelvic girdles that attach them.", "bones of the limbs and girdles", "sk", "body", []],
["arthralgia", "ar-THRAL-jee-ah", "Joint pain (arthr/o = joint, -algia = pain).", "joint pain", "lx", "sx", []],
["arthritis", "ar-THRY-tis", "Inflammation of a joint, usually with pain, swelling and stiffness (arthr/o = joint, -itis = inflammation).", "joint inflammation (arthritis)", "lx", "dz", []],
["arthrocentesis", "ar-throh-sen-TEE-sis", "Surgical puncture of a joint with a needle to remove fluid (-centesis = surgical puncture).", "drawing fluid from a joint", "jt", "lab", []],
["arthrodesis", "ar-throh-DEE-sis", "Surgical fusion of a joint so that it no longer moves (-desis = binding, fusion).", "surgical fusion of a joint", "jt", "tx", []],
["arthrogram", "AR-throh-gram", "X-ray record of a joint after injection of contrast dye (-gram = record).", "contrast X-ray of a joint", "jt", "lab", []],
["arthrology", "ar-THROL-oh-jee", "Study of joints (arthr/o = joint, -logy = study of).", "study of joints", "lx", "field", []],
["arthropathy", "ar-THROP-ah-thee", "Any disease of a joint (arthr/o = joint, -pathy = disease).", "joint disease", "lx", "dz", []],
["arthroplasty", "AR-throh-plas-tee", "Surgical repair or replacement of a joint, such as total hip or total knee replacement (-plasty = surgical repair).", "joint replacement or repair", "jt", "tx", ["THA", "TKA", "THR", "TKR"]],
["arthroscopy", "ar-THROS-koh-pee", "Visual examination inside a joint with a thin lighted instrument (arthroscope) through small incisions (-scopy = visual examination).", "looking inside a joint with a scope", "jt", "lab", []],
["arthrotomy", "ar-THROT-oh-mee", "Surgical incision into a joint (-tomy = cutting into).", "cutting into a joint", "jt", "tx", []],
["articular", "ar-TIK-yoo-lar", "Pertaining to a joint (articul/o = joint, -ar = pertaining to).", "pertaining to a joint", "lx", "body", []],
["articular cartilage", "ar-TIK-yoo-lar KAR-tih-lij", "Smooth layer of cartilage covering the ends of bones in a synovial joint.", "smooth cartilage on bone ends", "jt", "body", []],
["atlas", "AT-las", "The first cervical vertebra (C1), which supports the skull.", "first neck vertebra", "sk", "body", ["C1–C7"]],
["atonia", "ah-TOH-nee-ah", "Lack of normal muscle tone (a- = without, -tonia = tone).", "lack of muscle tone", "mu", "sx", []],
["atrophy", "AT-roh-fee", "Wasting away or decrease in size of a muscle (a- = without, -trophy = development).", "wasting away", "mu", "sx", []],
["autograft", "AW-toh-graft", "Graft taken from the patient's own body, such as bone from the iliac crest (auto- = self).", "graft from the patient’s own body", "fx", "tx", []],
["avulsion fracture", "ah-VUL-shun FRAK-cher", "Fracture in which a tendon or ligament pulls off a piece of bone.", "bone chip pulled off by a tendon", "fx", "dz", []],
["axial skeleton", "AK-see-al SKEL-eh-ton", "The 80 bones of the central axis of the body: skull, vertebral column, ribs, sternum and hyoid.", "skull, spine, ribs and sternum", "sk", "body", []],
["axis", "AK-sis", "The second cervical vertebra (C2); the atlas turns on it when the head rotates.", "second neck vertebra", "sk", "body", ["C1–C7"]],
["ball-and-socket joint", "bawl and SOK-et joynt", "Synovial joint in which a round head fits into a cup, allowing movement in all directions; e.g. hip and shoulder.", "joint moving in all directions", "jt", "body", []],
["biceps brachii", "BYE-seps BRAY-kee-eye", "Two-headed muscle on the front of the upper arm that flexes the elbow (bi- = two, brachi/o = arm).", "biceps of the arm", "mu", "mus", []],
["bilateral", "bye-LAT-er-al", "Pertaining to two sides (bi- = two, later/o = side, -al = pertaining to).", "on both sides", "lx", "mv", []],
["bisphosphonate", "bis-FOS-foh-nayt", "Medicine that slows bone breakdown by osteoclasts; used for osteoporosis and osteogenesis imperfecta.", "drug for osteoporosis", "fx", "tx", []],
["bone graft", "bohn graft", "Transplanting bone tissue to repair a defect or help fusion; may come from the patient (autograft) or a donor (allograft).", "bone transplant", "fx", "tx", []],
["bone scan", "bohn skan", "Nuclear medicine test: a radioactive tracer is injected and collects in areas of high bone activity, such as tumors, infection or fractures.", "nuclear scan of active bone", "fx", "lab", []],
["brachioradialis", "bray-kee-oh-ray-dee-AL-is", "Forearm muscle that flexes the elbow; named for the arm and the radius.", "forearm muscle that bends the elbow", "mu", "mus", []],
["bradykinesia", "brad-ee-kih-NEE-zee-ah", "Abnormally slow movement (brady- = slow, -kinesia = movement).", "slow movement", "mu", "sx", []],
["bunion", "BUN-yun", "Enlargement of the joint at the base of the big toe with the toe bent toward the others (hallux valgus).", "bump at the base of the big toe", "jt", "dz", []],
["bunionectomy", "bun-yun-EK-toh-mee", "Surgical removal of a bunion.", "removal of a bunion", "fx", "tx", []],
["bursa", "BER-sah", "Small fluid-filled sac that reduces friction between a tendon and a bone (plural: bursae) (burs/o = bursa).", "fluid sac that cushions a joint", "jt", "body", []],
["bursectomy", "ber-SEK-toh-mee", "Surgical removal of a bursa.", "removal of a bursa", "jt", "tx", []],
["bursitis", "ber-SYE-tis", "Inflammation of a bursa (burs/o = bursa, -itis = inflammation).", "inflammation of a bursa", "jt", "dz", []],
["C-reactive protein", "see ree-AK-tiv PROH-teen", "Blood protein that rises when there is inflammation in the body.", "blood marker of inflammation", "fx", "lab", ["CRP"]],
["calcaneodynia", "kal-kay-nee-oh-DIN-ee-ah", "Pain in the heel (calcane/o = heel, -dynia = pain).", "heel pain", "sk", "sx", []],
["calcaneus", "kal-KAY-nee-us", "The heel bone; the largest tarsal bone (calcane/o = heel).", "heel bone", "sk", "body", []],
["calcium", "KAL-see-um", "Mineral stored in bone that makes it hard; also needed for muscle contraction and blood clotting.", "mineral that hardens bone", "bn", "cell", ["Ca"]],
["callus", "KAL-us", "Mass of new bone tissue that forms around a fracture during healing.", "new bone at a healing fracture", "fx", "cell", []],
["cancellous bone", "KAN-sel-us bohn", "Spongy bone with a lattice of thin plates (trabeculae) filled with red marrow; found in the ends of long bones.", "spongy bone", "bn", "body", []],
["cardiac muscle", "KAR-dee-ak MUS-el", "Involuntary, striated muscle of the heart wall; the myocardium.", "heart muscle tissue", "mu", "mus", []],
["carpal tunnel release", "KAR-pal TUN-el ree-LEES", "Surgery that cuts the ligament over the carpal tunnel to relieve pressure on the median nerve.", "surgery to free the median nerve", "fx", "tx", ["CTS"]],
["carpal tunnel syndrome", "KAR-pal TUN-el SIN-drohm", "Compression of the median nerve in the wrist, causing numbness, tingling and weakness of the hand.", "pinched nerve at the wrist", "mu", "dz", ["CTS"]],
["carpals", "KAR-palz", "The eight small bones of the wrist (carp/o = wrist).", "wrist bones", "sk", "body", []],
["carpoptosis", "kar-pop-TOH-sis", "Wrist drop; the hand hangs down because the wrist cannot be extended (carp/o = wrist, -ptosis = drooping).", "wrist drop", "sk", "sx", []],
["cartilage", "KAR-tih-lij", "Strong, flexible connective tissue that covers bone ends in joints and forms the nose, ear and rib connections.", "firm shock-absorbing connective tissue", "bn", "cell", []],
["cast", "kast", "Rigid covering of plaster or fiberglass that immobilizes a fractured bone while it heals.", "rigid shell that holds a fracture still", "fx", "tx", []],
["cervical vertebrae", "SER-vih-kal VER-teh-bree", "The seven vertebrae of the neck, C1 to C7 (cervic/o = neck).", "neck vertebrae", "sk", "body", ["C1–C7"]],
["chiropractor", "KYE-roh-prak-tor", "Health professional who treats back and joint problems by manual adjustment of the spine (chir/o = hand).", "spinal manipulation practitioner", "lx", "field", []],
["chondral", "KON-dral", "Pertaining to cartilage (chondr/o = cartilage, -al = pertaining to).", "pertaining to cartilage", "lx", "body", []],
["chondrectomy", "kon-DREK-toh-mee", "Surgical removal of cartilage.", "removal of cartilage", "jt", "tx", []],
["chondrocyte", "KON-droh-site", "Cartilage cell (chondr/o = cartilage, -cyte = cell).", "cartilage cell", "bn", "cell", []],
["chondroma", "kon-DROH-mah", "Benign tumor of cartilage (chondr/o = cartilage, -oma = tumor).", "benign cartilage tumour", "bn", "dz", []],
["chondromalacia", "kon-droh-mah-LAY-shee-ah", "Softening of cartilage, especially behind the patella (chondr/o = cartilage, -malacia = softening).", "softening of cartilage", "jt", "dz", []],
["chondropathy", "kon-DROP-ah-thee", "Any disease of cartilage (chondr/o = cartilage, -pathy = disease).", "cartilage disease", "lx", "dz", []],
["chondrosarcoma", "kon-droh-sar-KOH-mah", "Malignant tumor of cartilage (chondr/o = cartilage, sarc/o = flesh, -oma = tumor).", "cancer of cartilage", "bn", "dz", []],
["circumduction", "ser-kum-DUK-shun", "Moving a limb in a circle so that its end draws a cone (circum- = around).", "circular movement", "jt", "mv", []],
["clavicle", "KLAV-ih-kl", "The collarbone, which joins the sternum and the scapula (clavicul/o = clavicle).", "collarbone", "sk", "body", []],
["closed fracture", "klohzd FRAK-cher", "Fracture in which the skin is not broken; also called simple fracture.", "fracture without a skin wound", "fx", "dz", ["Fx"]],
["closed reduction", "klohzd ree-DUK-shun", "Realigning a fractured bone by manipulation without surgery.", "setting a bone without surgery", "fx", "tx", []],
["coccygodynia", "kok-sih-goh-DIN-ee-ah", "Pain in the coccyx; tailbone pain (coccyg/o = coccyx, -dynia = pain).", "tailbone pain", "sk", "sx", []],
["coccyx", "KOK-siks", "The tailbone; four small fused vertebrae at the end of the spine (coccyg/o = coccyx).", "tailbone", "sk", "body", []],
["Colles fracture", "KOL-eez FRAK-cher", "Fracture of the distal radius at the wrist, usually from a fall on an outstretched hand.", "fracture of the end of the radius", "fx", "dz", []],
["comminuted fracture", "KOM-ih-noo-ted FRAK-cher", "Fracture in which the bone is shattered or crushed into several pieces.", "shattered fracture", "fx", "dz", []],
["compact bone", "KOM-pakt bohn", "Hard, dense outer layer of bone; also called cortical bone.", "dense outer bone", "bn", "body", []],
["compression fracture", "kom-PRESH-un FRAK-cher", "Fracture in which a bone, usually a vertebra, collapses or is crushed; common in osteoporosis.", "crushed vertebra fracture", "fx", "dz", []],
["computed tomography", "kom-PYOO-ted toh-MOG-rah-fee", "Imaging that uses X-rays and a computer to make cross-sectional pictures of the body (tom/o = to cut, section).", "CT scan", "fx", "lab", ["CT"]],
["condyle", "KON-dile", "Smooth, rounded knob at the end of a bone that forms a joint.", "rounded knob on a bone end", "bn", "body", []],
["contracture", "kon-TRAK-cher", "Permanent shortening of a muscle or tendon that keeps a joint bent.", "permanent shortening of a muscle", "mu", "sx", []],
["corticosteroid", "kor-tih-koh-STAIR-oyd", "Hormone-like medicine with a strong anti-inflammatory effect, sometimes injected into a joint.", "steroid anti-inflammatory drug", "fx", "tx", []],
["costal cartilage", "KOS-tal KAR-tih-lij", "Bars of cartilage that join the ribs to the sternum (cost/o = rib).", "rib cartilage", "sk", "body", []],
["costectomy", "kos-TEK-toh-mee", "Surgical removal of a rib or part of a rib; a rib resection (cost/o = rib).", "removal of a rib", "sk", "tx", []],
["costochondral", "kos-toh-KON-dral", "Pertaining to a rib and its cartilage (cost/o = rib, chondr/o = cartilage).", "pertaining to rib and cartilage", "sk", "body", []],
["cranium", "KRAY-nee-um", "The bones of the skull that enclose and protect the brain (crani/o = skull).", "skull", "sk", "body", []],
["creatine kinase", "KREE-ah-teen KYE-nayz", "Enzyme released into the blood when muscle is damaged; also called creatine phosphokinase.", "enzyme released by damaged muscle", "mu", "lab", ["CK", "CPK"]],
["deep tendon reflex", "deep TEN-don REE-fleks", "Automatic muscle contraction when its tendon is tapped with a reflex hammer, such as the knee-jerk reflex.", "jerk when a tendon is tapped", "mu", "lab", ["DTR"]],
["deltoid", "DEL-toyd", "Triangular muscle of the shoulder that abducts the arm; a common site for IM injections.", "shoulder muscle", "mu", "mus", ["IM"]],
["densitometry", "den-sih-TOM-eh-tree", "Measurement of bone density (densit/o = density, -metry = process of measuring).", "bone density measurement", "fx", "lab", ["BDT"]],
["diaphragm", "DYE-ah-fram", "Dome-shaped muscle that separates the chest from the abdomen; the main muscle of breathing.", "breathing muscle under the lungs", "mu", "mus", []],
["diaphysis", "dye-AF-ih-sis", "The shaft of a long bone (dia- = through, -physis = growth).", "shaft of a long bone", "bn", "body", []],
["diarthrosis", "dye-ar-THROH-sis", "Freely movable synovial joint, such as the knee, hip or shoulder.", "freely movable joint", "jt", "body", []],
["dislocation", "dis-loh-KAY-shun", "Displacement of a bone from its joint so that the joint surfaces no longer touch.", "displaced joint", "jt", "dz", []],
["distal", "DIS-tal", "Farther from the point of attachment of a limb to the trunk; e.g. the fingers are distal to the wrist.", "farther from the trunk", "lx", "mv", []],
["dorsiflexion", "dor-sih-FLEK-shun", "Bending the foot upward at the ankle, toward the shin (dors/o = back).", "bending the foot upward", "jt", "mv", []],
["dual-energy x-ray absorptiometry", "DOO-al EN-er-jee EKS-ray ab-sorp-shee-OM-eh-tree", "Low-dose X-ray test that measures bone density to diagnose osteoporosis.", "bone density scan", "fx", "lab", ["DXA", "BDT"]],
["dyskinesia", "dis-kih-NEE-zee-ah", "Difficult or impaired movement (dys- = difficult, -kinesia = movement).", "difficult movement", "mu", "sx", []],
["dystonia", "dis-TOH-nee-ah", "Abnormal muscle tone, with involuntary twisting movements (dys- = abnormal, -tonia = tone).", "abnormal muscle tone", "mu", "sx", []],
["electromyography", "ee-lek-troh-my-OG-rah-fee", "Recording of the electrical activity of muscle (electr/o = electricity, -graphy = process of recording).", "recording of muscle electrical activity", "mu", "lab", ["EMG"]],
["endosteum", "en-DOSS-tee-um", "Thin membrane that lines the medullary cavity of a bone (endo- = within, oste/o = bone).", "membrane lining the marrow cavity", "bn", "body", []],
["epicondyle", "ep-ih-KON-dile", "Projection above or upon a condyle (epi- = upon).", "projection above a condyle", "bn", "body", []],
["epiphyseal plate", "ep-ih-FIZ-ee-al playt", "Layer of cartilage between the epiphysis and diaphysis where a long bone grows in length; also called growth plate.", "growth plate", "bn", "body", []],
["epiphysis", "eh-PIF-ih-sis", "The wide end of a long bone, covered with articular cartilage (epi- = upon, -physis = growth).", "end of a long bone", "bn", "body", []],
["erythrocyte sedimentation rate", "eh-RITH-roh-site sed-ih-men-TAY-shun rayt", "Blood test that measures how fast red blood cells settle; a raised rate shows inflammation.", "blood test of inflammation", "fx", "lab", ["ESR"]],
["ethmoid bone", "ETH-moyd bohn", "Light, spongy bone between the eye sockets that forms part of the nasal cavity.", "sieve-like bone between the eyes", "sk", "body", []],
["eversion", "ee-VER-zhun", "Turning the sole of the foot outward (e- = outward, vers/o = to turn).", "turning the sole outward", "jt", "mv", []],
["Ewing sarcoma", "YOO-ing sar-KOH-mah", "Malignant tumor of the shaft of long bones, most common in children and teenagers.", "bone cancer of children", "bn", "dz", []],
["exostosis", "eks-os-TOH-sis", "Benign bony growth on the surface of a bone; a bone spur (ex- = out, oste/o = bone, -osis = condition).", "bony outgrowth", "bn", "dz", []],
["extension", "eks-TEN-shun", "Straightening a joint so that the angle between the bones increases (extens/o = to stretch out).", "straightening a joint", "jt", "mv", ["ROM"]],
["external fixation", "eks-TER-nal fik-SAY-shun", "Stabilizing a fracture with pins through the skin into the bone, joined by a frame outside the body.", "pins held by a frame outside the body", "fx", "tx", []],
["external oblique", "eks-TER-nal oh-BLEEK", "Slanted abdominal muscle on the side of the trunk.", "outer slanting abdominal muscle", "mu", "mus", []],
["false ribs", "fawls ribz", "Rib pairs 8 to 12, which attach to the sternum indirectly or not at all.", "ribs not joined directly to the sternum", "sk", "body", []],
["fascia", "FASH-ee-ah", "Sheet of fibrous connective tissue that covers and separates muscles (fasci/o = fibrous band).", "fibrous band around muscles", "mu", "mus", []],
["fascicle", "FAS-ih-kl", "Bundle of muscle fibers wrapped in connective tissue.", "bundle of muscle fibres", "mu", "mus", []],
["fasciotomy", "fash-ee-OT-oh-mee", "Surgical incision into fascia to relieve pressure on muscles and nerves (fasci/o = fascia, -tomy = cutting into).", "cutting into fascia", "fx", "tx", []],
["femur", "FEE-mer", "The thigh bone; the longest and strongest bone of the body (femor/o = femur).", "thigh bone", "sk", "body", []],
["fibromyalgia", "fye-broh-my-AL-jee-ah", "Chronic disorder with widespread muscle pain, tender points, fatigue and poor sleep (fibr/o = fiber, my/o = muscle, -algia = pain).", "widespread muscle pain", "mu", "dz", []],
["fibula", "FIB-yoo-lah", "The thin outer bone of the lower leg (fibul/o = fibula).", "thin lower-leg bone", "sk", "body", []],
["fissure", "FISH-er", "Narrow, slit-like opening in a bone.", "narrow slit in a bone", "bn", "body", []],
["flat bone", "flat bohn", "Thin, flat bone that protects organs, such as the ribs, sternum, scapula and skull bones.", "thin, plate-like bone", "bn", "body", []],
["flexion", "FLEK-shun", "Bending a joint so that the angle between the bones decreases (flex/o = to bend).", "bending a joint", "jt", "mv", ["ROM"]],
["floating ribs", "FLOH-ting ribz", "Rib pairs 11 and 12, which have no attachment to the sternum.", "ribs with free front ends", "sk", "body", []],
["fontanel", "fon-tah-NEL", "Soft spot of membrane between the skull bones of an infant; closes as the bones grow.", "soft spot of a baby’s skull", "sk", "body", []],
["foramen", "for-AY-men", "Opening or hole in a bone through which nerves and blood vessels pass (plural: foramina).", "opening in a bone", "bn", "body", []],
["fossa", "FOSS-ah", "Shallow depression or cavity in a bone.", "shallow depression", "bn", "body", []],
["fracture", "FRAK-cher", "A break in a bone.", "break in a bone", "fx", "dz", ["Fx"]],
["frontal bone", "FRUN-tal bohn", "Bone of the forehead and roof of the eye sockets.", "forehead bone", "sk", "body", []],
["ganglion cyst", "GANG-lee-on sist", "Fluid-filled cyst on a tendon sheath or joint capsule, often on the back of the wrist.", "fluid cyst on a tendon", "jt", "dz", []],
["gastrocnemius", "gas-trok-NEE-mee-us", "Calf muscle that bends the foot downward (plantar flexion).", "calf muscle", "mu", "mus", []],
["gliding joint", "GLY-ding joynt", "Synovial joint with flat surfaces that slide over each other; e.g. between the carpals.", "joint whose surfaces slide", "jt", "body", []],
["gluteus maximus", "GLOO-tee-us MAK-sih-mus", "The largest muscle of the buttock; it extends the thigh.", "largest buttock muscle", "mu", "mus", []],
["goniometer", "goh-nee-OM-eh-ter", "Instrument that measures the angle of a joint's range of motion (goni/o = angle, -meter = instrument to measure).", "joint-angle measuring instrument", "jt", "lab", ["ROM"]],
["gout", "gowt", "Painful arthritis caused by uric acid crystals deposited in joints, often the big toe; also called gouty arthritis.", "uric acid arthritis", "jt", "dz", []],
["greenstick fracture", "GREEN-stik FRAK-cher", "Incomplete fracture in which the bone bends and breaks on one side only, like a green twig; common in children.", "incomplete bending fracture", "fx", "dz", []],
["hamstrings", "HAM-stringz", "Group of three muscles on the back of the thigh that flex the knee.", "back-of-thigh muscles", "mu", "mus", []],
["haversian canal", "hah-VER-zhan kah-NAL", "Central channel in compact bone that carries blood vessels and nerves.", "central channel of an osteon", "bn", "body", []],
["hemarthrosis", "hem-ar-THROH-sis", "Blood in a joint cavity (hem/o = blood, arthr/o = joint).", "blood in a joint", "jt", "sx", []],
["hematopoiesis", "hee-mah-toh-poy-EE-sis", "Formation of blood cells, which takes place in red bone marrow (hemat/o = blood, -poiesis = formation).", "blood cell formation", "bn", "cell", []],
["hemiparesis", "hem-ee-pah-REE-sis", "Weakness or slight paralysis of one side of the body (-paresis = slight paralysis).", "weakness of one side of the body", "mu", "sx", []],
["hemiplegia", "hem-ee-PLEE-jee-ah", "Paralysis of one side of the body (hemi- = half, -plegia = paralysis).", "paralysis of one side", "mu", "sx", []],
["herniated nucleus pulposus", "HER-nee-ay-ted NOO-klee-us pul-POH-sus", "Rupture of an intervertebral disk so that its soft center bulges out and presses on a spinal nerve; a slipped disk.", "slipped disc", "sk", "dz", ["HNP"]],
["hinge joint", "hinj joynt", "Synovial joint that moves in one plane like a door hinge; e.g. elbow and knee.", "joint that bends one way like a door", "jt", "body", []],
["humerus", "HYOO-mer-us", "Bone of the upper arm (humer/o = humerus).", "upper arm bone", "sk", "body", []],
["hydrotherapy", "hye-droh-THAIR-ah-pee", "Treatment with water, such as exercise in a warm pool (hydr/o = water, -therapy = treatment).", "water therapy", "fx", "tx", []],
["hyoid bone", "HYE-oyd bohn", "U-shaped bone in the neck that supports the tongue; it does not join any other bone.", "U-shaped bone under the tongue", "sk", "body", []],
["hypercalcemia", "hye-per-kal-SEE-mee-ah", "Excessive calcium in the blood (hyper- = excessive, calc/o = calcium, -emia = blood condition).", "high blood calcium", "bn", "sx", ["Ca"]],
["hyperextension", "hye-per-eks-TEN-shun", "Extension beyond the normal straight position (hyper- = excessive).", "over-straightening", "jt", "mv", []],
["hyperkinesia", "hye-per-kih-NEE-zee-ah", "Excessive movement; hyperactivity (hyper- = excessive).", "excessive movement", "mu", "sx", []],
["hypertrophy", "hye-PER-troh-fee", "Increase in the size of a muscle or organ (hyper- = excessive, -trophy = development).", "enlargement", "mu", "sx", []],
["hyperuricemia", "hye-per-yoo-rih-SEE-mee-ah", "Excessive uric acid in the blood; the cause of gout (hyper- = excessive, uric/o = uric acid, -emia = blood condition).", "high blood uric acid", "jt", "sx", []],
["ilium", "IL-ee-um", "Upper, wing-shaped part of the hip bone (ili/o = ilium).", "upper hip bone", "sk", "body", []],
["immobilization", "ih-moh-bih-lih-ZAY-shun", "Keeping a body part from moving so that it can heal.", "keeping a part still", "fx", "tx", []],
["impacted fracture", "im-PAK-ted FRAK-cher", "Fracture in which one bone fragment is driven into the other.", "fracture with ends driven together", "fx", "dz", []],
["insertion", "in-SER-shun", "Attachment of a muscle to the bone that moves when the muscle contracts.", "moving attachment of a muscle", "mu", "mus", []],
["intercostal", "in-ter-KOS-tal", "Pertaining to between the ribs (inter- = between, cost/o = rib, -al = pertaining to).", "between the ribs", "sk", "body", []],
["intervertebral", "in-ter-VER-teh-bral", "Pertaining to between the vertebrae (inter- = between, vertebr/o = vertebra, -al = pertaining to).", "between vertebrae", "sk", "body", []],
["intervertebral disk", "in-ter-VER-teh-bral disk", "Pad of fibrocartilage between two vertebrae that cushions the spine.", "cushion between vertebrae", "sk", "body", []],
["intramuscular", "in-trah-MUS-kyoo-lar", "Within a muscle (intra- = within, muscul/o = muscle, -ar = pertaining to); e.g. an IM injection.", "into a muscle", "lx", "tx", ["IM"]],
["inversion", "in-VER-zhun", "Turning the sole of the foot inward (in- = in, vers/o = to turn).", "turning the sole inward", "jt", "mv", []],
["involuntary muscle", "in-VOL-un-tair-ee MUS-el", "Muscle not under conscious control, such as smooth and cardiac muscle.", "muscle not under conscious control", "mu", "mus", []],
["irregular bone", "ih-REG-yoo-lar bohn", "Bone with a complex shape, such as a vertebra or facial bone.", "bone of complex shape", "bn", "body", []],
["ischium", "ISS-kee-um", "Lower, back part of the hip bone; we sit on it (ischi/o = ischium).", "sitting bone", "sk", "body", []],
["joint", "joynt", "Place where two or more bones meet; also called an articulation.", "place where bones meet", "jt", "body", []],
["joint capsule", "joynt KAP-sool", "Sac of fibrous tissue that surrounds a synovial joint.", "fibrous sac around a synovial joint", "jt", "body", []],
["juvenile rheumatoid arthritis", "JOO-veh-nile ROO-mah-toyd ar-THRY-tis", "Rheumatoid arthritis that begins in childhood.", "childhood rheumatoid arthritis", "jt", "dz", ["JRA"]],
["kinesiology", "kih-nee-see-OL-oh-jee", "Study of movement of the body and its muscles (kinesi/o = movement, -logy = study of).", "study of movement", "lx", "field", []],
["kyphosis", "kye-FOH-sis", "Exaggerated outward curve of the thoracic spine; humpback (kyph/o = hump).", "hunchback (kyphosis)", "sk", "dz", []],
["lamina", "LAM-ih-nah", "Flat part of the vertebral arch between the spinous and transverse processes (lamin/o = lamina).", "flat plate of a vertebral arch", "sk", "body", []],
["laminectomy", "lam-ih-NEK-toh-mee", "Surgical removal of the lamina of a vertebra to relieve pressure on the spinal cord or nerves (-ectomy = removal).", "removal of a vertebral lamina", "sk", "tx", []],
["lateral", "LAT-er-al", "Toward the side, away from the midline of the body (later/o = side).", "toward the side", "lx", "mv", []],
["lateral epicondylitis", "LAT-er-al ep-ih-kon-dih-LYE-tis", "Inflammation of the tendons at the outer elbow from overuse; tennis elbow.", "tennis elbow", "mu", "dz", []],
["latissimus dorsi", "lah-TIS-ih-mus DOR-sye", "Broad muscle of the back that extends and adducts the arm.", "broad back muscle", "mu", "mus", []],
["ligament", "LIG-ah-ment", "Strong band of fibrous tissue that connects bone to bone and stabilizes a joint (ligament/o = ligament).", "band joining bone to bone", "jt", "body", []],
["long bone", "lawng bohn", "Bone longer than it is wide, with a shaft and two ends, such as the femur and humerus.", "bone with a shaft and two ends", "bn", "body", []],
["lordosis", "lor-DOH-sis", "Exaggerated inward curve of the lumbar spine; swayback (lord/o = bent backward).", "swayback", "sk", "dz", []],
["lumbar vertebrae", "LUM-bar VER-teh-bree", "The five large vertebrae of the lower back, L1 to L5 (lumb/o = loin, lower back).", "lower-back vertebrae", "sk", "body", ["L1–L5"]],
["lumbosacral", "lum-boh-SAY-kral", "Pertaining to the lumbar vertebrae and the sacrum.", "lower back and sacrum", "sk", "body", []],
["Lyme disease", "lime dih-ZEEZ", "Infection caused by bacteria spread by tick bites; causes a rash, fever and later arthritis.", "tick-borne bacterial infection", "jt", "dz", []],
["magnetic resonance imaging", "mag-NET-ik REZ-oh-nans IM-ah-jing", "Imaging with a strong magnetic field and radio waves; shows soft tissues such as disks, ligaments and menisci.", "MRI (magnetic resonance imaging)", "fx", "lab", ["MRI"]],
["malleolus", "mah-LEE-oh-lus", "Rounded bony bump on each side of the ankle; the medial malleolus is on the tibia and the lateral on the fibula.", "ankle knob", "sk", "body", []],
["malunion", "mal-YOON-yun", "Healing of a fracture in a poor or crooked position.", "fracture healed out of line", "fx", "dz", []],
["mandible", "MAN-dih-bl", "The lower jawbone; the only movable bone of the skull (mandibul/o = lower jaw).", "lower jaw", "sk", "body", []],
["masseter", "mah-SEE-ter", "Strong muscle of the jaw that closes the mouth for chewing.", "chewing muscle", "mu", "mus", []],
["maxilla", "mak-SIL-ah", "The upper jawbone, which holds the upper teeth (maxill/o = upper jaw).", "upper jaw", "sk", "body", []],
["medial", "MEE-dee-al", "Toward the midline of the body (medi/o = middle).", "toward the midline", "lx", "mv", []],
["medullary cavity", "MED-yoo-lair-ee KAV-ih-tee", "Hollow space inside the shaft of a long bone that contains yellow marrow (medull/o = inner part).", "marrow cavity", "bn", "body", []],
["meniscectomy", "men-ih-SEK-toh-mee", "Surgical removal of a torn meniscus of the knee.", "removal of a knee cartilage", "jt", "tx", []],
["meniscus", "meh-NIS-kus", "C-shaped pad of cartilage in the knee that cushions the joint (plural: menisci) (menisc/o = meniscus).", "knee cartilage pad", "jt", "body", []],
["metacarpals", "met-ah-KAR-palz", "The five bones of the palm of the hand (meta- = beyond, carp/o = wrist).", "hand bones", "sk", "body", []],
["metaphysis", "meh-TAF-ih-sis", "Flared region of a long bone between the shaft and the end (meta- = beyond, change).", "flared part between shaft and end", "bn", "body", []],
["metatarsals", "met-ah-TAR-salz", "The five bones of the foot between the ankle and the toes.", "foot bones", "sk", "body", []],
["muscle biopsy", "MUS-el BYE-op-see", "Removal of a small piece of muscle for microscopic examination.", "sample of muscle for the microscope", "mu", "lab", []],
["muscle fiber", "MUS-el FYE-ber", "A single long muscle cell.", "muscle cell", "mu", "mus", []],
["muscle tone", "MUS-el tohn", "Slight, steady tension in a resting muscle (ton/o = tone, tension).", "slight constant tension of resting muscle", "mu", "mus", []],
["muscular", "MUS-kyoo-lar", "Pertaining to muscle (muscul/o = muscle, -ar = pertaining to).", "muscle", "lx", "mus", []],
["muscular dystrophy", "MUS-kyoo-lar DIS-troh-fee", "Group of inherited diseases with progressive weakness and wasting of skeletal muscles; Duchenne type affects boys.", "inherited muscle wasting", "mu", "dz", ["MD"]],
["muscular system", "MUS-kyoo-lar SIS-tem", "All the muscles of the body; about 600 skeletal muscles move the bones, and smooth and cardiac muscle work inside organs.", "all the skeletal muscles", "lx", "body", []],
["musculoskeletal system", "mus-kyoo-loh-SKEL-eh-tal SIS-tem", "The bones, joints, cartilage, ligaments, muscles and tendons that support the body and make movement possible.", "bones, joints and muscles", "lx", "body", []],
["myalgia", "my-AL-jee-ah", "Muscle pain (my/o = muscle, -algia = pain).", "muscle pain", "lx", "sx", []],
["myasthenia", "my-as-THEE-nee-ah", "Muscle weakness (my/o = muscle, -asthenia = weakness).", "muscle weakness", "mu", "sx", []],
["myasthenia gravis", "my-as-THEE-nee-ah GRAV-is", "Autoimmune disease in which nerve signals do not reach the muscles well, causing severe weakness, drooping eyelids and fatigue.", "autoimmune muscle weakness", "mu", "dz", []],
["myelogram", "MY-eh-loh-gram", "X-ray of the spinal canal after injection of contrast dye (myel/o = spinal cord, -gram = record).", "contrast X-ray of the spinal canal", "fx", "lab", []],
["myeloma", "my-eh-LOH-mah", "Malignant tumor of bone marrow cells (myel/o = bone marrow, -oma = tumor); multiple myeloma destroys bone.", "bone marrow tumour", "bn", "dz", []],
["myocardium", "my-oh-KAR-dee-um", "The muscle layer of the heart wall (my/o = muscle, cardi/o = heart).", "heart muscle", "mu", "mus", []],
["myology", "my-OL-oh-jee", "Study of muscles (my/o = muscle, -logy = study of).", "study of muscles", "lx", "field", []],
["myopathy", "my-OP-ah-thee", "Any disease of muscle (my/o = muscle, -pathy = disease).", "muscle disease", "lx", "dz", []],
["myoplasty", "MY-oh-plas-tee", "Surgical repair of a muscle (my/o = muscle, -plasty = surgical repair).", "surgical repair of a muscle", "fx", "tx", []],
["myorrhaphy", "my-OR-ah-fee", "Suture of a muscle (my/o = muscle, -rrhaphy = suture).", "suturing a muscle", "fx", "tx", []],
["myorrhexis", "my-oh-REK-sis", "Rupture of a muscle (my/o = muscle, -rrhexis = rupture).", "rupture of a muscle", "mu", "dz", []],
["myositis", "my-oh-SYE-tis", "Inflammation of muscle tissue (myos/o = muscle, -itis = inflammation).", "muscle inflammation", "lx", "dz", []],
["myotonia", "my-oh-TOH-nee-ah", "Inability of a muscle to relax after contraction (my/o = muscle, -tonia = tone).", "slow muscle relaxation", "mu", "sx", []],
["necrotizing fasciitis", "NEK-roh-tye-zing fas-ee-EYE-tis", "Rapidly spreading bacterial infection that destroys fascia and muscle; flesh-eating disease.", "flesh-eating infection", "mu", "dz", ["NF"]],
["nonsteroidal anti-inflammatory drug", "non-STAIR-oyd-al an-tee-in-FLAM-ah-tor-ee drug", "Medicine such as ibuprofen or naproxen that reduces pain, inflammation and swelling without steroids.", "painkiller that reduces swelling, not a steroid", "fx", "tx", ["NSAID"]],
["nonunion", "non-YOON-yun", "Failure of the fragments of a fractured bone to heal together.", "fracture that fails to heal", "fx", "dz", []],
["nucleus pulposus", "NOO-klee-us pul-POH-sus", "Soft, gel-like center of an intervertebral disk.", "gel centre of a disc", "sk", "body", ["HNP"]],
["oblique fracture", "oh-BLEEK FRAK-cher", "Fracture at an angle to the long axis of the bone.", "slanting fracture", "fx", "dz", []],
["occipital bone", "ok-SIP-ih-tal bohn", "Bone at the back and base of the skull; it contains the foramen magnum.", "back-of-skull bone", "sk", "body", []],
["occupational therapy", "ok-yoo-PAY-shun-al THAIR-ah-pee", "Treatment that helps people regain skills for daily living and work.", "retraining for daily living and work", "fx", "tx", ["OT", "ADLs"]],
["olecranon", "oh-LEK-rah-non", "Large process at the upper end of the ulna that forms the point of the elbow.", "point of the elbow", "sk", "body", []],
["open fracture", "OH-pen FRAK-cher", "Fracture in which the broken bone pierces the skin; also called compound fracture; high risk of infection.", "fracture breaking the skin", "fx", "dz", ["Fx"]],
["open reduction internal fixation", "OH-pen ree-DUK-shun in-TER-nal fik-SAY-shun", "Surgery that exposes and realigns a fracture and holds it with plates, screws, rods or pins.", "open reduction and internal fixation", "fx", "tx", ["ORIF"]],
["orbicularis oculi", "or-bik-yoo-LAIR-is OK-yoo-lye", "Circular muscle around the eye that closes the eyelid.", "circular eye muscle", "mu", "mus", []],
["origin", "OR-ih-jin", "Attachment of a muscle to the bone that stays still when the muscle contracts.", "fixed attachment of a muscle", "mu", "mus", []],
["orthopedics", "or-thoh-PEE-diks", "Branch of medicine that prevents and treats disorders of bones, joints and muscles (orth/o = straight, ped/o = child).", "bone and joint medicine", "lx", "field", ["Ortho"]],
["orthopedist", "or-thoh-PEE-dist", "Physician who specializes in disorders of the musculoskeletal system; an orthopedic surgeon.", "bone and joint specialist", "lx", "field", ["Ortho"]],
["orthosis", "or-THOH-sis", "Brace or splint used to support, align or correct a body part (orth/o = straight).", "brace", "fx", "tx", []],
["osseous", "OS-ee-us", "Pertaining to bone; bony (osse/o = bone, -ous = pertaining to).", "bony", "lx", "body", []],
["ossification", "os-ih-fih-KAY-shun", "The process of bone formation, in which cartilage is gradually replaced by bone.", "bone formation", "bn", "cell", []],
["ostealgia", "os-tee-AL-jee-ah", "Bone pain; also called osteodynia (oste/o = bone, -algia = pain).", "bone pain", "lx", "sx", []],
["ostectomy", "os-TEK-toh-mee", "Surgical removal of a bone or part of a bone (-ectomy = removal).", "removal of bone", "fx", "tx", []],
["osteitis", "os-tee-EYE-tis", "Inflammation of bone (oste/o = bone, -itis = inflammation).", "bone inflammation", "lx", "dz", []],
["osteitis deformans", "os-tee-EYE-tis dee-FOR-manz", "Paget disease: bone is broken down and rebuilt too fast, so bones become thick, weak and deformed.", "Paget disease of bone", "bn", "dz", []],
["osteoarthritis", "os-tee-oh-ar-THRY-tis", "Degenerative joint disease: wearing away of articular cartilage with pain, stiffness and bone spurs, mostly in weight-bearing joints.", "wear-and-tear joint disease (osteoarthritis)", "jt", "dz", ["OA", "DJD"]],
["osteoblast", "OS-tee-oh-blast", "Immature bone cell that builds new bone (oste/o = bone, -blast = immature, embryonic).", "bone-forming cell", "bn", "cell", []],
["osteoclasia", "os-tee-oh-KLAY-zee-ah", "Surgical breaking of a bone to correct a deformity (-clasia = surgical breaking).", "surgical breaking of a bone", "fx", "tx", []],
["osteoclast", "OS-tee-oh-klast", "Large bone cell that breaks down and reabsorbs old bone (-clast = to break).", "bone-dissolving cell", "bn", "cell", []],
["osteocyte", "OS-tee-oh-site", "Mature bone cell that maintains bone tissue (oste/o = bone, -cyte = cell).", "mature bone cell", "bn", "cell", []],
["osteogenesis", "os-tee-oh-JEN-eh-sis", "Formation of bone (oste/o = bone, -genesis = producing, forming).", "production of bone tissue", "bn", "cell", []],
["osteogenesis imperfecta", "os-tee-oh-JEN-eh-sis im-per-FEK-tah", "Inherited disorder of collagen that makes bones thin and brittle, with many fractures (brittle bone disease).", "brittle bone disease", "bn", "dz", ["OI"]],
["osteology", "os-tee-OL-oh-jee", "Study of bones (oste/o = bone, -logy = study of).", "study of bones", "lx", "field", []],
["osteoma", "os-tee-OH-mah", "Benign tumor of bone (oste/o = bone, -oma = tumor).", "benign bone tumour", "bn", "dz", []],
["osteomalacia", "os-tee-oh-mah-LAY-shee-ah", "Softening of bones in adults from lack of calcium or vitamin D (-malacia = softening).", "softening of bone", "bn", "dz", []],
["osteomyelitis", "os-tee-oh-my-eh-LYE-tis", "Inflammation of bone and bone marrow, usually from bacterial infection (myel/o = bone marrow).", "infection of bone and marrow", "bn", "dz", []],
["osteonecrosis", "os-tee-oh-neh-KROH-sis", "Death of bone tissue from loss of blood supply; also called avascular necrosis (necr/o = death).", "death of bone tissue", "bn", "dz", []],
["osteopathy", "os-tee-OP-ah-thee", "Any disease of bone (oste/o = bone, -pathy = disease).", "bone disease", "lx", "dz", []],
["osteopenia", "os-tee-oh-PEE-nee-ah", "Lower than normal bone mass, less severe than osteoporosis (-penia = deficiency).", "low bone mass", "bn", "dz", []],
["osteoplasty", "OS-tee-oh-plas-tee", "Surgical repair of bone (-plasty = surgical repair).", "surgical repair of bone", "fx", "tx", []],
["osteoporosis", "os-tee-oh-poh-ROH-sis", "Loss of bone mass that makes bones porous and fragile, common in older women; leads to fractures (-porosis = porous).", "porous, brittle bones", "bn", "dz", ["DXA"]],
["osteosarcoma", "os-tee-oh-sar-KOH-mah", "Malignant bone tumor, most common in teenagers, often near the knee (sarc/o = flesh, connective tissue).", "bone cancer", "bn", "dz", []],
["osteotomy", "os-tee-OT-oh-mee", "Surgical cutting into a bone to correct its alignment (oste/o = bone, -tomy = cutting into).", "surgical cut into bone", "fx", "tx", []],
["paraplegia", "pair-ah-PLEE-jee-ah", "Paralysis of both legs and the lower body.", "paralysis of both legs", "mu", "sx", []],
["parietal bone", "pah-RYE-eh-tal bohn", "One of the two bones that form the top and upper sides of the cranium.", "side-of-skull bone", "sk", "body", []],
["patella", "pah-TEL-ah", "The kneecap; a sesamoid bone in the tendon of the quadriceps (patell/o = patella).", "kneecap", "sk", "body", []],
["pathologic fracture", "path-oh-LOJ-ik FRAK-cher", "Fracture of a bone weakened by disease, such as osteoporosis or a tumor, often with little force.", "fracture through diseased bone", "fx", "dz", []],
["pectoral girdle", "PEK-toh-ral GER-dl", "The shoulder girdle: the clavicles and scapulae, which attach the arms to the trunk.", "shoulder girdle", "sk", "body", []],
["pectoralis major", "pek-toh-RAL-is MAY-jor", "Large fan-shaped chest muscle that flexes and adducts the arm (pector/o = chest).", "large chest muscle", "mu", "mus", []],
["pelvic girdle", "PEL-vik GER-dl", "The two hip bones, which join the sacrum to form the pelvis; each hip bone is made of the fused ilium, ischium and pubis.", "ring of hip bones", "sk", "body", []],
["periosteum", "pair-ee-OSS-tee-um", "Tough fibrous membrane that covers the outside of bone, except at the joint surfaces (peri- = around, oste/o = bone).", "membrane covering bone", "bn", "body", []],
["phalanges", "fah-LAN-jeez", "Bones of the fingers and toes (singular: phalanx) (phalang/o = phalanges).", "finger and toe bones", "sk", "body", []],
["phosphorus", "FOS-for-us", "Mineral stored in bone together with calcium.", "mineral stored with calcium in bone", "bn", "cell", ["P"]],
["physiatrist", "fiz-ee-AT-rist", "Physician who specializes in physical medicine and rehabilitation of people with musculoskeletal injuries.", "rehabilitation physician", "lx", "field", []],
["physical therapy", "FIZ-ih-kal THAIR-ah-pee", "Treatment with exercise, heat, cold, water and ultrasound to restore strength and movement.", "exercise and physical treatment for movement", "fx", "tx", ["PT", "US"]],
["pivot joint", "PIV-ot joynt", "Synovial joint that allows rotation around one axis; e.g. between the atlas and axis.", "joint that rotates around an axis", "jt", "body", []],
["plantar flexion", "PLAN-tar FLEK-shun", "Bending the foot downward at the ankle, as when standing on the toes (plant/o = sole of the foot).", "pointing the foot down", "jt", "mv", []],
["podiatrist", "poh-DYE-ah-trist", "Specialist in the diagnosis and treatment of disorders of the foot (pod/o = foot, -iatrist = specialist).", "foot specialist", "lx", "field", []],
["polymyositis", "pol-ee-my-oh-SYE-tis", "Chronic inflammation of many muscles at the same time (poly- = many).", "inflammation of many muscles", "mu", "dz", ["CK"]],
["Pott fracture", "pot FRAK-cher", "Fracture of the distal fibula at the ankle, often with injury to the tibia.", "ankle fracture", "fx", "dz", []],
["prime mover", "prime MOO-ver", "The muscle mainly responsible for a movement; also called agonist.", "main muscle performing a movement", "mu", "mus", []],
["process", "PROS-es", "Any projection or outgrowth of bone where muscles and tendons attach.", "bony projection", "bn", "body", []],
["pronation", "proh-NAY-shun", "Turning the palm downward or backward.", "turning the palm down", "jt", "mv", []],
["prosthesis", "pros-THEE-sis", "Artificial device that replaces a missing body part, such as an artificial leg or a joint replacement (prosthet/o = addition).", "artificial body part", "fx", "tx", []],
["proximal", "PROK-sih-mal", "Nearer to the point of attachment of a limb to the trunk; e.g. the elbow is proximal to the wrist.", "nearer to the trunk", "lx", "mv", []],
["pubic symphysis", "PYOO-bik SIM-fih-sis", "Cartilaginous joint where the two pubic bones meet at the front (sym- = together, -physis = growth).", "joint at the front of the pelvis", "sk", "body", []],
["pubis", "PYOO-bis", "Front part of the hip bone (pub/o = pubis).", "front pelvic bone", "sk", "body", []],
["quadriceps femoris", "KWAD-rih-seps FEM-or-is", "Group of four muscles on the front of the thigh that extend the knee (quadri- = four).", "front thigh muscle", "mu", "mus", []],
["quadriplegia", "kwad-rih-PLEE-jee-ah", "Paralysis of all four limbs (quadri- = four, -plegia = paralysis).", "paralysis of all four limbs", "mu", "sx", []],
["radiography", "ray-dee-OG-rah-fee", "Making images of bones and other structures with X-rays (radi/o = ray, -graphy = process of recording).", "X-ray imaging", "fx", "lab", ["AP"]],
["radius", "RAY-dee-us", "Forearm bone on the thumb side (radi/o = radius).", "thumb-side forearm bone", "sk", "body", []],
["range of motion", "raynj ov MOH-shun", "The full movement possible at a joint, measured in degrees.", "full extent of joint movement", "jt", "mv", ["ROM", "PROM"]],
["rectus abdominis", "REK-tus ab-DOM-ih-nis", "Straight, vertical muscle of the front of the abdomen (rect/o = straight).", "straight abdominal muscle", "mu", "mus", []],
["red bone marrow", "red bohn MAIR-oh", "Soft tissue in spongy bone that produces red blood cells, white blood cells and platelets.", "blood-forming marrow", "bn", "body", []],
["reduction", "ree-DUK-shun", "Returning a fractured or dislocated bone to its normal position.", "setting a bone", "fx", "tx", []],
["rehabilitation", "ree-hah-bil-ih-TAY-shun", "Process of restoring function and independence after injury or surgery (habilitat/o = ability).", "restoring ability after injury", "fx", "tx", ["PT", "OT"]],
["rhabdomyolysis", "rab-doh-my-OL-ih-sis", "Breakdown of skeletal muscle that releases muscle proteins into the blood and may damage the kidneys (rhabd/o = rod-shaped, striated; -lysis = breakdown).", "breakdown of muscle tissue", "mu", "dz", ["CK"]],
["rheumatoid arthritis", "ROO-mah-toyd ar-THRY-tis", "Chronic autoimmune disease in which the synovial membrane is inflamed, causing swollen, painful and deformed joints, often in the hands.", "autoimmune joint inflammation", "jt", "dz", ["RA", "RF"]],
["rheumatoid factor", "ROO-mah-toyd FAK-tor", "Antibody found in the blood of most people with rheumatoid arthritis.", "blood marker for RA", "fx", "lab", ["RF"]],
["rheumatologist", "roo-mah-TOL-oh-jist", "Physician who specializes in arthritis and other diseases of joints and connective tissue.", "joint and connective tissue specialist", "lx", "field", []],
["rheumatology", "roo-mah-TOL-oh-jee", "Branch of medicine that treats inflammatory and autoimmune diseases of joints, muscles and connective tissue (rheumat/o = watery flow).", "study of joint and connective tissue disease", "lx", "field", []],
["rickets", "RIK-ets", "Softening and bending of bones in children from lack of vitamin D or calcium; the childhood form of osteomalacia.", "childhood bone softening", "bn", "dz", []],
["rotation", "roh-TAY-shun", "Turning a bone around its own axis (rotat/o = to revolve).", "turning around an axis", "jt", "mv", []],
["rotator cuff", "ROH-tay-tor kuff", "Group of four shoulder muscles and their tendons (supraspinatus, infraspinatus, teres minor, subscapularis) that stabilize and rotate the shoulder.", "shoulder-turning muscles", "mu", "mus", []],
["rotator cuff tear", "ROH-tay-tor kuff tair", "Tear of one or more rotator cuff tendons, causing shoulder pain and weakness on raising the arm.", "torn shoulder muscles", "mu", "dz", []],
["sacroiliac", "say-kroh-IL-ee-ak", "Pertaining to the sacrum and the ilium; the sacroiliac joint joins the spine to the pelvis.", "pertaining to the sacrum and ilium", "sk", "body", []],
["sacrum", "SAY-krum", "Triangular bone below the lumbar vertebrae, made of five fused vertebrae (sacr/o = sacrum).", "triangular bone at the base of the spine", "sk", "body", []],
["saddle joint", "SAD-l joynt", "Synovial joint shaped like a saddle; e.g. at the base of the thumb.", "joint shaped like a saddle", "jt", "body", []],
["sartorius", "sar-TOR-ee-us", "Long, narrow thigh muscle; the longest muscle of the body.", "longest thigh muscle", "mu", "mus", []],
["scapula", "SKAP-yoo-lah", "The shoulder blade (scapul/o = scapula).", "shoulder blade", "sk", "body", []],
["scapulectomy", "skap-yoo-LEK-toh-mee", "Surgical removal of all or part of the scapula.", "removal of the shoulder blade", "sk", "tx", []],
["scoliosis", "skoh-lee-OH-sis", "Abnormal sideways (lateral) curvature of the spine (scoli/o = crooked, bent).", "sideways curve of the spine", "sk", "dz", ["PSF"]],
["sesamoid bone", "SES-ah-moyd bohn", "Small, round bone that develops inside a tendon, such as the patella.", "bone formed inside a tendon", "bn", "body", []],
["shin splints", "shin splints", "Pain along the front of the tibia from overuse of the lower leg muscles, often in runners.", "pain along the shin", "mu", "dz", []],
["short bone", "short bohn", "Cube-shaped bone about as wide as it is long, such as the carpals and tarsals.", "cube-shaped bone", "bn", "body", []],
["sinus", "SYE-nus", "Air-filled cavity within a bone, such as the paranasal sinuses of the skull.", "air-filled cavity in a bone", "bn", "body", []],
["skeletal muscle", "SKEL-eh-tal MUS-el", "Striated, voluntary muscle attached to bones by tendons; it moves the skeleton.", "muscle that moves the skeleton", "mu", "mus", []],
["skeletal muscle relaxant", "SKEL-eh-tal MUS-el ree-LAK-sant", "Medicine that relieves muscle spasm and tension.", "drug that relaxes skeletal muscle", "fx", "tx", []],
["skeletal system", "SKEL-eh-tal SIS-tem", "The 206 bones of the adult body together with cartilage, joints and ligaments.", "bones and their connections", "lx", "body", []],
["smooth muscle", "smooth MUS-el", "Involuntary, non-striated muscle in the walls of organs and blood vessels; also called visceral muscle.", "involuntary muscle of organ walls", "mu", "mus", []],
["spasm", "SPAZ-um", "Sudden, involuntary contraction of a muscle; a cramp.", "sudden involuntary contraction", "mu", "sx", []],
["sphenoid bone", "SFEE-noyd bohn", "Bat-shaped bone at the base of the skull that joins all the other cranial bones.", "butterfly-shaped skull bone", "sk", "body", []],
["spina bifida", "SPY-nah BIF-ih-dah", "Birth defect in which the vertebral arch does not close around the spinal cord.", "split spine at birth", "sk", "dz", []],
["spinal fusion", "SPY-nal FYOO-zhun", "Surgery that joins two or more vertebrae with bone graft and metal rods to stop motion between them.", "surgical joining of vertebrae", "fx", "tx", ["PSF"]],
["spinal stenosis", "SPY-nal steh-NOH-sis", "Narrowing of the spinal canal that presses on the spinal cord or nerves.", "narrowing of the spinal canal", "sk", "dz", []],
["spinous process", "SPY-nus PROS-es", "Bony projection at the back of each vertebra that can be felt along the spine.", "spiny back projection of a vertebra", "sk", "body", []],
["spiral fracture", "SPY-ral FRAK-cher", "Fracture that twists around the bone, caused by a twisting force.", "twisting fracture", "fx", "dz", []],
["splint", "splint", "Rigid device that immobilizes an injured limb.", "rigid support for an injured limb", "fx", "tx", []],
["spondylitis", "spon-dih-LYE-tis", "Inflammation of the vertebrae (spondyl/o = vertebra, -itis = inflammation).", "inflammation of the vertebrae", "sk", "dz", []],
["spondylolisthesis", "spon-dih-loh-lis-THEE-sis", "Forward slipping of one vertebra over the one below it (spondyl/o = vertebra, -listhesis = slipping).", "forward slipping of a vertebra", "sk", "dz", []],
["spondylosis", "spon-dih-LOH-sis", "Degeneration and stiffening of the vertebrae and disks (spondyl/o = vertebra, -osis = abnormal condition).", "degeneration of the spine", "sk", "dz", []],
["sprain", "sprayn", "Injury to a ligament from twisting or overstretching a joint, often the ankle.", "ligament injury", "jt", "dz", []],
["sternocleidomastoid", "ster-noh-klye-doh-MAS-toyd", "Neck muscle named for its attachments to the sternum, clavicle and mastoid process; it turns and bends the head.", "neck muscle that turns the head", "mu", "mus", []],
["sternum", "STER-num", "The breastbone; flat bone in the middle of the chest made of the manubrium, body and xiphoid process (stern/o = sternum).", "breastbone", "sk", "body", []],
["strain", "strayn", "Injury to a muscle or tendon from overstretching or overuse.", "overstretched muscle or tendon", "mu", "dz", []],
["stress fracture", "stres FRAK-cher", "Small crack in a bone from repeated stress rather than a single injury, common in runners.", "fracture from repeated stress", "fx", "dz", []],
["striated", "STRY-ay-ted", "Having stripes; skeletal and cardiac muscle fibers look striped under the microscope.", "striped", "mu", "mus", []],
["subluxation", "sub-luk-SAY-shun", "Partial or incomplete dislocation of a joint (sub- = under, less than).", "partial dislocation", "jt", "dz", []],
["subscapular", "sub-SKAP-yoo-lar", "Pertaining to below or beneath the scapula (sub- = under).", "below the shoulder blades", "sk", "body", []],
["supination", "soo-pih-NAY-shun", "Turning the palm upward or forward.", "turning the palm up", "jt", "mv", []],
["suprapatellar", "soo-prah-pah-TEL-ar", "Pertaining to above the patella (supra- = above).", "above the kneecap", "sk", "body", []],
["suture", "SOO-cher", "Immovable fibrous joint between the bones of the skull.", "fixed joint between skull bones", "sk", "body", []],
["synarthrosis", "sin-ar-THROH-sis", "Immovable fibrous joint, such as a skull suture (syn- = together, arthr/o = joint).", "immovable joint", "jt", "body", []],
["synergist", "SIN-er-jist", "Muscle that helps the prime mover perform a movement (syn- = together).", "helper muscle", "mu", "mus", []],
["synovectomy", "sin-oh-VEK-toh-mee", "Surgical removal of the synovial membrane of a joint.", "removal of the joint lining", "jt", "tx", []],
["synovial fluid", "sih-NOH-vee-al FLOO-id", "Slippery fluid in a synovial joint that lubricates and nourishes the joint.", "joint lubricating fluid", "jt", "body", []],
["synovial joint", "sih-NOH-vee-al joynt", "Freely movable joint enclosed in a capsule lined with synovial membrane and filled with synovial fluid.", "joint with a fluid-filled cavity", "jt", "body", []],
["synovial membrane", "sih-NOH-vee-al MEM-brayn", "Membrane lining the joint capsule that secretes synovial fluid (synovi/o = synovial membrane).", "membrane lining a joint", "jt", "body", []],
["synovitis", "sin-oh-VYE-tis", "Inflammation of the synovial membrane (synov/o = synovial membrane).", "inflammation of the joint lining", "jt", "dz", []],
["systemic lupus erythematosus", "sis-TEM-ik LOO-pus air-ih-them-ah-TOH-sus", "Chronic autoimmune disease that affects joints, skin, kidneys and other organs; a butterfly rash may appear on the face.", "whole-body lupus", "jt", "dz", ["SLE", "ANA"]],
["tarsals", "TAR-salz", "The seven bones of the ankle and heel (tars/o = ankle).", "ankle bones", "sk", "body", []],
["temporal bone", "TEM-por-al bohn", "One of the two bones at the lower sides of the cranium that contain the ear canal and the mastoid process.", "bone at the side of the skull", "sk", "body", []],
["temporomandibular joint", "tem-por-oh-man-DIB-yoo-lar joynt", "Joint between the temporal bone and the mandible that lets the jaw open and close.", "jaw joint", "sk", "body", ["TMJ"]],
["tendinitis", "ten-dih-NYE-tis", "Inflammation of a tendon (tendin/o = tendon, -itis = inflammation).", "inflammation of a tendon", "mu", "dz", []],
["tendon", "TEN-don", "Strong cord of fibrous tissue that attaches a muscle to a bone (ten/o, tend/o, tendin/o = tendon).", "cord joining muscle to bone", "mu", "mus", []],
["tenoplasty", "TEN-oh-plas-tee", "Surgical repair of a tendon (ten/o = tendon, -plasty = surgical repair).", "surgical repair of a tendon", "fx", "tx", []],
["tenorrhaphy", "ten-OR-ah-fee", "Suture of a tendon (ten/o = tendon, -rrhaphy = suture).", "suturing a tendon", "fx", "tx", []],
["tenotomy", "teh-NOT-oh-mee", "Surgical cutting into a tendon (ten/o = tendon, -tomy = cutting into).", "cutting into a tendon", "fx", "tx", []],
["thoracic cage", "thoh-RAS-ik kayj", "The rib cage: 12 pairs of ribs, the sternum and the thoracic vertebrae, which protect the heart and lungs.", "the chest", "sk", "body", []],
["thoracic vertebrae", "thoh-RAS-ik VER-teh-bree", "The twelve vertebrae of the chest region, T1 to T12, which join the ribs (thorac/o = chest).", "chest vertebrae", "sk", "body", ["T1–T12"]],
["tibia", "TIB-ee-ah", "The shinbone; the larger bone of the lower leg (tibi/o = tibia).", "shinbone", "sk", "body", []],
["tibialis anterior", "tib-ee-AL-is an-TEER-ee-or", "Muscle on the front of the lower leg that dorsiflexes the foot.", "front shin muscle", "mu", "mus", []],
["tophi", "TOH-fye", "Hard deposits of uric acid crystals under the skin around joints in chronic gout (singular: tophus).", "gout crystal deposits", "jt", "sx", []],
["trabeculae", "trah-BEK-yoo-lee", "Thin bony plates and bars that form the network of spongy bone.", "thin plates of spongy bone", "bn", "body", []],
["traction", "TRAK-shun", "Steady pulling force with weights to align and immobilize a fracture or relieve muscle spasm.", "pulling force on a limb", "fx", "tx", []],
["transverse fracture", "trans-VERS FRAK-cher", "Complete fracture straight across the bone.", "fracture straight across the bone", "fx", "dz", []],
["transverse process", "trans-VERS PROS-es", "Bony projection on each side of a vertebra.", "side projection of a vertebra", "sk", "body", []],
["trapezius", "trah-PEE-zee-us", "Large, trapezoid-shaped muscle of the upper back and neck that moves the shoulder and head.", "upper back and neck muscle", "mu", "mus", []],
["triceps brachii", "TRY-seps BRAY-kee-eye", "Three-headed muscle on the back of the upper arm that extends the elbow (tri- = three).", "three-headed arm muscle (triceps)", "mu", "mus", []],
["trochanter", "troh-KAN-ter", "Large, blunt process on the femur below its neck for muscle attachment.", "large knob at the top of the femur", "bn", "body", []],
["true ribs", "troo ribz", "The first seven pairs of ribs, which attach directly to the sternum by costal cartilage.", "ribs joined directly to the sternum", "sk", "body", []],
["tubercle", "TOO-ber-kl", "Small, rounded process on a bone for muscle attachment.", "small rounded bump", "bn", "body", []],
["tuberosity", "too-ber-OS-ih-tee", "Large, rounded, often rough process on a bone for muscle attachment.", "large rough bump", "bn", "body", []],
["ulna", "UL-nah", "Forearm bone on the little-finger side (uln/o = ulna).", "little-finger-side forearm bone", "sk", "body", []],
["unilateral", "yoo-nih-LAT-er-al", "Pertaining to one side (uni- = one, later/o = side, -al = pertaining to).", "on one side", "lx", "mv", []],
["uric acid", "YOO-rik AS-id", "Waste product of the body; a high blood level suggests gout.", "waste product that forms gout crystals", "fx", "lab", []],
["vertebra", "VER-teh-brah", "One of the bones of the spinal column (plural: vertebrae) (vertebr/o, spondyl/o = vertebra).", "spinal bone", "sk", "body", []],
["vertebral column", "VER-teh-bral KOL-um", "The spine: 26 vertebrae separated by intervertebral disks; it protects the spinal cord.", "the spine", "sk", "body", []],
["vertebroplasty", "VER-teh-broh-plas-tee", "Injection of bone cement into a collapsed vertebra to stabilize it (vertebr/o = vertebra, -plasty = surgical repair).", "injecting cement into a vertebra", "sk", "tx", []],
["voluntary muscle", "VOL-un-tair-ee MUS-el", "Muscle under conscious control; skeletal muscle.", "muscle under conscious control", "mu", "mus", []],
["xiphoid process", "ZIF-oyd PROS-es", "Small, pointed lower tip of the sternum.", "lower tip of the breastbone", "sk", "body", []],
["yellow bone marrow", "YEL-oh bohn MAIR-oh", "Fatty marrow that fills the medullary cavity of long bones in adults.", "fatty marrow", "bn", "body", []],
["zygomatic bone", "zye-goh-MAT-ik bohn", "The cheekbone.", "cheekbone", "sk", "body", []]];
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
    ['a-, an-', ['an', 'a'], 'without, not', "without, lacking", '*'],
    ['ab-', ['ab'], 'away from', "away from", 'jt'],
    ['ad-', ['ad'], 'toward', "toward", 'jt'],
    ['allo-', ['allo'], 'other, different', "other", 'fx'],
    ['amphi-', ['amphi'], 'on both sides', "on both sides", 'jt'],
    ['auto-', ['auto'], 'self', "self", 'fx'],
    ['bi-', ['bi'], 'two', "two", 'lx'],
    ['brady-', ['brady'], 'slow', "slow", 'mu'],
    ['circum-', ['circum'], 'around', "around", 'jt'],
    ['dia-', ['dia', 'di'], 'through, complete', "through", 'bn'],
    ['dis-', ['dis'], 'apart, away', "apart, away", 'jt'],
    ['dys-', ['dys'], 'bad, abnormal, difficult', "bad, abnormal, difficult", 'mu'],
    ['e-, ex-', ['ex', 'e'], 'out, outward', "outside", 'bn'],
    ['endo-', ['endo', 'end'], 'within', "within", 'bn'],
    ['epi-', ['epi'], 'upon, above', "upon, above", 'bn'],
    ['hemi-', ['hemi'], 'half', "half", 'mu'],
    ['hyper-', ['hyper'], 'excessive, above normal', "excessive", '*'],
    ['hypo-', ['hypo'], 'under, below, deficient', "below, less than normal", '*'],
    ['in-', ['in'], 'in, into', "in, into", 'jt'],
    ['inter-', ['inter'], 'between', "between", 'sk'],
    ['intra-', ['intra'], 'within', "within", 'lx'],
    ['meta-', ['meta'], 'beyond, after, change', "beyond, after", 'bn'],
    ['para-', ['para'], 'beside, abnormal', "beside, abnormal", 'mu'],
    ['peri-', ['peri'], 'around', "around", 'bn'],
    ['poly-', ['poly'], 'many', "many", 'mu'],
    ['quadri-', ['quadri'], 'four', "four", 'mu'],
    ['re-', ['re'], 'again, back', "again", 'fx'],
    ['sub-', ['sub'], 'under, below, less than', "under, less", 'sk'],
    ['supra-', ['supra'], 'above', "above", 'sk'],
    ['syn-, sym-', ['syn', 'sym'], 'together, joined', "together, joined", 'jt'],
    ['tri-', ['tri'], 'three', "three", 'mu'],
    ['uni-', ['uni'], 'one', "one", 'lx'],
    // ریشه‌ها: سه ستون اصلی
    ['oste/o', ['osse', 'oste', 'ost'], 'bone', "bone", 'lx'],
    ['my/o, myos/o', ['myos', 'my'], 'muscle', "muscle", 'lx'],
    ['muscul/o', ['muscul'], 'muscle', "muscle", 'lx'],
    ['arthr/o', ['arthr'], 'joint', "joint", 'lx'],
    ['articul/o', ['articul'], 'joint', "joint", 'lx'],
    ['chondr/o', ['chondr'], 'cartilage', "firm shock-absorbing connective tissue", 'lx'],
    ['orth/o', ['orth'], 'straight', "straight, upright", 'lx'],
    ['ped/o', ['ped'], 'child (also foot)', "child (also foot)", 'lx'],
    ['pod/o', ['pod'], 'foot', "foot", 'lx'],
    ['chir/o', ['chir'], 'hand', "Hand", 'lx'],
    ['rheumat/o', ['rheumat'], 'watery flow (joint disease)', "watery flow (joint disease)", 'lx'],
    ['kinesi/o', ['kinesi'], 'movement', "Movement", 'lx'],
    ['physi/o', ['physi', 'phys'], 'nature, body', "nature, body", 'lx'],
    ['later/o', ['later'], 'side', "side", 'lx'],
    ['medi/o', ['medi'], 'middle', "middle", 'lx'],
    ['proxim/o', ['proxim'], 'near', "near", 'lx'],
    ['dist/o', ['dist'], 'far', "far", 'lx'],
    ['anter/o', ['anter'], 'front', "front", 'lx'],
    ['poster/o', ['poster'], 'back, behind', "behind", 'lx'],
    // ریشه‌ها: استخوان
    ['myel/o', ['myel'], 'bone marrow; spinal cord', "bone marrow; spinal cord", 'bn'],
    ['medull/o', ['medull'], 'inner part (marrow)', "inner part (medulla)", 'bn'],
    ['cortic/o', ['cortic'], 'outer layer (cortex)', "outer layer (cortex)", 'bn'],
    ['calc/o, calci/o', ['calci', 'calc'], 'calcium', "calcium", 'bn'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', "blood", 'bn'],
    ['necr/o', ['necr'], 'death', "death", 'bn'],
    ['sarc/o', ['sarc'], 'flesh (connective tissue)', "flesh (connective tissue)", 'bn'],
    ['cyt/o', ['cyt'], 'cell', "cell", '*'],
    // ریشه‌ها: جمجمه و ستون مهره
    ['crani/o', ['crani'], 'skull', "skull", 'sk'],
    ['mandibul/o', ['mandibul'], 'lower jaw (mandible)', "lower jaw", 'sk'],
    ['maxill/o', ['maxill'], 'upper jaw (maxilla)', "upper jaw", 'sk'],
    ['cervic/o', ['cervic'], 'neck', "neck", 'sk'],
    ['thorac/o', ['thorac'], 'chest', "the chest", 'sk'],
    ['lumb/o', ['lumb'], 'lower back, loin', "lower back", 'sk'],
    ['sacr/o', ['sacr'], 'sacrum', "sacrum", 'sk'],
    ['coccyg/o', ['coccyg'], 'coccyx, tailbone', "tailbone", 'sk'],
    ['vertebr/o', ['vertebr'], 'vertebra', "spinal bone", 'sk'],
    ['spondyl/o', ['spondyl'], 'vertebra', "spinal bone", 'sk'],
    ['spin/o', ['spin'], 'spine, backbone', "The spine", 'sk'],
    ['lamin/o', ['lamin'], 'lamina (part of a vertebra)', "flat plate of a vertebral arch", 'sk'],
    ['kyph/o', ['kyph'], 'hump', "hump", 'sk'],
    ['lord/o', ['lord'], 'bent backward, swayback', "bent backward (swayback)", 'sk'],
    ['scoli/o', ['scoli'], 'crooked, bent', "crooked, bent", 'sk'],
    ['cost/o', ['cost'], 'rib', "rib", 'sk'],
    ['stern/o', ['stern'], 'sternum, breastbone', "breastbone", 'sk'],
    // ریشه‌ها: اندام‌ها
    ['clavicul/o, cleid/o', ['clavicul', 'cleid'], 'clavicle, collarbone', "collarbone", 'sk'],
    ['scapul/o', ['scapul'], 'scapula, shoulder blade', "shoulder blade", 'sk'],
    ['humer/o', ['humer'], 'humerus (upper arm bone)', "upper arm bone", 'sk'],
    ['radi/o', ['radi'], 'radius; also ray (X-ray)', "radius bone; ray", 'sk'],
    ['uln/o', ['uln'], 'ulna', "ulna", 'sk'],
    ['carp/o', ['carp'], 'wrist bones (carpus)', "the wrist", 'sk'],
    ['phalang/o', ['phalang'], 'phalanges (finger and toe bones)', "Finger bones", 'sk'],
    ['pelv/o, pelv/i', ['pelv'], 'pelvis', "pelvis", 'sk'],
    ['ili/o', ['ili'], 'ilium', "ilium", 'sk'],
    ['ischi/o', ['ischi'], 'ischium', "ischium", 'sk'],
    ['pub/o', ['pub'], 'pubis', "pubic bone", 'sk'],
    ['acetabul/o', ['acetabul'], 'acetabulum (hip socket)', "hip socket", 'sk'],
    ['femor/o', ['femor'], 'femur (thigh bone)', "thigh bone", 'sk'],
    ['patell/o', ['patell'], 'patella (kneecap)', "kneecap", 'sk'],
    ['tibi/o', ['tibi'], 'tibia (shinbone)', "shinbone", 'sk'],
    ['fibul/o, perone/o', ['fibul', 'perone'], 'fibula', "fibula", 'sk'],
    ['tars/o', ['tars'], 'ankle bones (tarsus)', "ankle bones", 'sk'],
    ['calcane/o', ['calcane'], 'heel bone (calcaneus)', "the heel", 'sk'],
    ['mast/o', ['mast'], 'breast (mastoid process)', "breast-like (mastoid process)", 'mu'],
    // ریشه‌ها: مفصل و حرکت
    ['synovi/o, synov/o', ['synovi', 'synov'], 'synovial membrane', "membrane lining a joint", 'jt'],
    ['burs/o', ['burs'], 'bursa (sac of fluid)', "fluid sac that cushions a joint", 'jt'],
    ['ligament/o', ['ligament'], 'ligament', "band joining bone to bone", 'jt'],
    ['menisc/o', ['menisc'], 'meniscus (crescent)', "meniscus (crescent)", 'jt'],
    ['ankyl/o', ['ankyl'], 'stiff, bent, fused', "stiff, fused", 'jt'],
    ['flex/o', ['flex'], 'to bend', "bending a joint", 'jt'],
    ['extens/o', ['extens'], 'to stretch out', "to stretch, pull", 'jt'],
    ['duct/o', ['duct'], 'to lead, to bring', "to lead, bring", 'jt'],
    ['rotat/o', ['rotat'], 'to revolve, turn', "rotating", 'jt'],
    ['vers/o', ['vers'], 'to turn', "to turn", 'jt'],
    ['dors/o', ['dors'], 'back (of body or foot)', "behind", 'jt'],
    ['plant/o', ['plant'], 'sole of the foot', "sole of the foot", 'jt'],
    ['goni/o', ['goni'], 'angle', "Angle", 'jt'],
    ['uric/o', ['uric'], 'uric acid', "uric acid", 'jt'],
    // ریشه‌ها: عضله
    ['fasci/o', ['fasci'], 'fascia (fibrous band)', "fascia (fibrous band)", 'mu'],
    ['ten/o, tend/o, tendin/o', ['tendin', 'tend', 'ten'], 'tendon', "tendon", 'mu'],
    ['fibr/o', ['fibr'], 'fiber', "fibre", 'mu'],
    ['ton/o', ['ton'], 'tone, tension', "tone, tension", 'mu'],
    ['rhabd/o', ['rhabd'], 'rod-shaped (striated)', "rod-shaped (striated)", 'mu'],
    ['cardi/o', ['cardi'], 'heart', "heart", 'mu'],
    ['brachi/o', ['brachi'], 'arm', "arm", 'mu'],
    ['pector/o', ['pector'], 'chest', "chest", 'mu'],
    ['erg/o', ['erg'], 'work', "Job", 'mu'],
    ['electr/o', ['electr'], 'electricity', "electricity", 'mu'],
    // ریشه‌ها: تشخیص و درمان
    ['tom/o', ['tom'], 'to cut, section', "to cut, section", 'fx'],
    ['densit/o', ['densit'], 'density', "density", 'fx'],
    ['prosthet/o', ['prosthet'], 'addition (artificial part)', "addition (artificial part)", 'fx'],
    ['hydr/o', ['hydr'], 'water', "water", 'fx'],
    ['therm/o', ['therm'], 'heat', "heat", 'fx'],
    ['habilitat/o', ['habilitat'], 'ability', "ability", 'fx'],
    ['alges/o', ['alges'], 'sensation of pain', "sensation of pain", 'fx'],
    // پسوندها
    ['-al, -ic, -ous, -ar, -ary, -ac, -eal', ['ary', 'eal', 'ial', 'ior', 'ous', 'ic', 'al', 'ar', 'ac'], 'pertaining to', "pertaining to", '*'],
    ['-ation, -ion', ['ation', 'ion'], 'process, action', "process, action", '*'],
    ['-is, -um, -us, -a', ['is', 'um', 'us', 'a'], 'noun ending', "noun ending", '*'],
    ['-ia, -y', ['ia', 'y'], 'condition', "condition", '*'],
    ['-ics', ['ics'], 'study, practice', "study, practice", 'lx'],
    ['-ist, -iatrist', ['iatrist', 'ist'], 'specialist', "specialist", 'lx'],
    ['-logist', ['logist'], 'specialist in the study of', "specialist", 'lx'],
    ['-logy', ['logy'], 'study of', "study of", 'lx'],
    ['-algia', ['algia'], 'pain', "pain", '*'],
    ['-dynia', ['dynia'], 'pain', "pain", 'sk'],
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-osis', ['osis', 'sis'], 'abnormal condition', "abnormal condition", '*'],
    ['-pathy', ['pathy'], 'disease', "disease", '*'],
    ['-oma', ['oma'], 'tumor, mass', "tumour, mass", '*'],
    ['-oid', ['oid'], 'resembling', "resembling", '*'],
    ['-cyte', ['cyte'], 'cell', "cell", '*'],
    ['-blast', ['blast'], 'immature, embryonic (forming) cell', "immature (forming) cell", 'bn'],
    ['-clast', ['clast'], 'to break (cell that breaks down)', "breaking (destroying cell)", 'bn'],
    ['-genesis', ['genesis'], 'producing, forming', "producing, forming", 'bn'],
    ['-poiesis', ['poiesis'], 'formation', "formation", 'bn'],
    ['-physis', ['physis'], 'growth', "Growth", 'bn'],
    ['-porosis', ['porosis'], 'porous, passage', "porous, full of holes", 'bn'],
    ['-penia', ['penia'], 'deficiency, decrease', "deficiency", 'bn'],
    ['-malacia', ['malacia'], 'softening', "softening", 'bn'],
    ['-plasia', ['plasia'], 'formation, development', "growth, formation", 'bn'],
    ['-emia', ['emia'], 'blood condition', "blood condition", 'bn'],
    ['-listhesis', ['listhesis'], 'slipping', "slipping", 'sk'],
    ['-ptosis', ['ptosis'], 'drooping, falling', "drooping", 'sk'],
    ['-desis', ['desis'], 'binding, surgical fusion', "surgical fusion", 'jt'],
    ['-centesis', ['centesis'], 'surgical puncture to remove fluid', "puncture to draw fluid", 'jt'],
    ['-scopy', ['scopy'], 'visual examination', "viewing with an instrument", 'jt'],
    ['-gram', ['gram'], 'record', "record, image", 'jt'],
    ['-graphy', ['graphy'], 'process of recording', "process of recording", 'fx'],
    ['-meter', ['meter'], 'instrument to measure', "measuring instrument", 'jt'],
    ['-metry', ['metry'], 'process of measuring', "measurement", 'fx'],
    ['-asthenia', ['asthenia'], 'weakness', "weakness", 'mu'],
    ['-trophy', ['trophy'], 'development, nourishment', "growth, nourishment", 'mu'],
    ['-tonia', ['tonia'], 'tone, tension', "tone, tension", 'mu'],
    ['-kinesia', ['kinesia'], 'movement', "Movement", 'mu'],
    ['-plegia', ['plegia'], 'paralysis', "paralysis", 'mu'],
    ['-paresis', ['paresis'], 'slight paralysis, weakness', "slight paralysis, weakness", 'mu'],
    ['-lysis', ['lysis'], 'breakdown, destruction', "breakdown, destruction", 'mu'],
    ['-rrhexis', ['rrhexis'], 'rupture', "rupture", 'mu'],
    ['-ectomy', ['ectomy'], 'excision, surgical removal', "surgical removal", '*'],
    ['-tomy', ['tomy'], 'incision, cutting into', "incision", '*'],
    ['-plasty', ['plasty'], 'surgical repair', "surgical repair", '*'],
    ['-clasia', ['clasia'], 'surgical breaking', "surgical breaking", 'fx'],
    ['-rrhaphy', ['rrhaphy'], 'suture', "stitch", 'fx'],
    ['-graft', ['graft'], 'transplantation', "transplant", 'fx'],
    ['-therapy', ['therapy'], 'treatment', "treatment", 'fx']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['ADLs', 'activities of daily living', "activities of daily living", 'fx'],
    ['AE', 'above elbow (amputation)', "above the elbow (amputation)", 'fx'],
    ['AK', 'above knee (amputation)', "above the knee (amputation)", 'fx'],
    ['ANA', 'antinuclear antibody', "antinuclear antibody", 'jt'],
    ['AP', 'anteroposterior', "front to back", 'lx'],
    ['BDT', 'bone density testing', "bone mineral density", 'bn'],
    ['BE', 'below elbow (amputation)', "below the elbow (amputation)", 'fx'],
    ['BK', 'below knee (amputation)', "below the knee (amputation)", 'fx'],
    ['C1–C7', 'first to seventh cervical vertebrae', "cervical vertebrae 1 to 7", 'sk'],
    ['Ca', 'calcium', "calcium", 'bn'],
    ['CK', 'creatine kinase', "creatine kinase (muscle enzyme)", 'mu'],
    ['CPK', 'creatine phosphokinase', "creatine phosphokinase (same as CK)", 'mu'],
    ['CRP', 'C-reactive protein', "C-reactive protein (inflammation marker)", 'fx'],
    ['CT', 'computed tomography', "CT scan", 'fx'],
    ['CTS', 'carpal tunnel syndrome', "carpal tunnel syndrome", 'mu'],
    ['DJD', 'degenerative joint disease', "degenerative joint disease (osteoarthritis)", 'jt'],
    ['DTR', 'deep tendon reflex', "deep tendon reflex", 'mu'],
    ['Dx', 'diagnosis', "diagnosis", 'lx'],
    ['DXA, DEXA', 'dual-energy X-ray absorptiometry', "dual-energy X-ray absorptiometry (DXA)", 'bn'],
    ['EMG', 'electromyography', "recording of muscle electrical activity", 'mu'],
    ['ESR', 'erythrocyte sedimentation rate', "erythrocyte sedimentation rate", 'fx'],
    ['Fx, FX', 'fracture', "fracture", 'fx'],
    ['HNP', 'herniated nucleus pulposus', "herniated intervertebral disc", 'sk'],
    ['Hx', 'history', "history", 'lx'],
    ['IM', 'intramuscular', "intramuscularly", 'lx'],
    ['JRA', 'juvenile rheumatoid arthritis', "childhood rheumatoid arthritis", 'jt'],
    ['L1–L5', 'first to fifth lumbar vertebrae', "lumbar vertebrae 1 to 5", 'sk'],
    ['LE', 'lower extremity', "lower limb", 'fx'],
    ['LLE', 'left lower extremity', "left lower extremity", 'fx'],
    ['LUE', 'left upper extremity', "left upper extremity", 'fx'],
    ['MD', 'muscular dystrophy', "inherited muscle wasting", 'mu'],
    ['MRI', 'magnetic resonance imaging', "MRI scan", 'fx'],
    ['NF', 'necrotizing fasciitis', "flesh-eating infection", 'mu'],
    ['NSAID', 'nonsteroidal anti-inflammatory drug', "non-steroidal anti-inflammatory drug", 'fx'],
    ['OA', 'osteoarthritis', "wear-and-tear joint disease (osteoarthritis)", 'jt'],
    ['OI', 'osteogenesis imperfecta', "osteogenesis imperfecta", 'bn'],
    ['ORIF', 'open reduction internal fixation', "open reduction and internal fixation", 'fx'],
    ['Ortho, ortho', 'orthopedics', "bone and joint medicine", 'lx'],
    ['OT', 'occupational therapy', "occupational therapy", 'fx'],
    ['P', 'phosphorus', "phosphorus", 'bn'],
    ['post-op', 'postoperative (after surgery)', "after surgery", 'fx'],
    ['PROM', 'passive range of motion', "passive range of motion (moved by someone else)", 'jt'],
    ['PSF', 'posterior spinal fusion', "posterior spinal fusion", 'sk'],
    ['PT', 'physical therapy', "physical therapy", 'fx'],
    ['RA', 'rheumatoid arthritis', "autoimmune joint inflammation", 'jt'],
    ['RF', 'rheumatoid factor', "rheumatoid factor", 'jt'],
    ['RLE', 'right lower extremity', "right lower extremity", 'fx'],
    ['ROM', 'range of motion', "range of motion", 'jt'],
    ['RUE', 'right upper extremity', "right upper extremity", 'fx'],
    ['Rx', 'prescription, treatment', "prescription, treatment", 'lx'],
    ['SLE', 'systemic lupus erythematosus', "whole-body lupus", 'jt'],
    ['T1–T12', 'first to twelfth thoracic vertebrae', "thoracic vertebrae 1 to 12", 'sk'],
    ['THA', 'total hip arthroplasty', "total hip replacement", 'jt'],
    ['THR', 'total hip replacement', "total hip replacement", 'jt'],
    ['TKA', 'total knee arthroplasty', "total knee replacement", 'jt'],
    ['TKR', 'total knee replacement', "total knee replacement", 'jt'],
    ['TMJ', 'temporomandibular joint', "jaw joint", 'sk'],
    ['UE', 'upper extremity', "upper limb", 'fx'],
    ['US', 'ultrasound', "ultrasound; therapeutic ultrasound", 'fx'],
    ['y/o', 'years old', "years old", 'lx']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'body', icon: '🦴', name: "Bones and structures" },
    { id: 'cell', icon: '🧬', name: "Tissue, cells and minerals" },
    { id: 'mus', icon: '💪', name: "Muscles and tendons" },
    { id: 'mv', icon: '🔄', name: "Movements and directions" },
    { id: 'field', icon: '🎓', name: "Specialties and specialists" },
    { id: 'dz', icon: '🩻', name: "Diseases and injuries" },
    { id: 'sx', icon: '🔍', name: "Signs" },
    { id: 'lab', icon: '🧪', name: "Diagnosis, imaging and tests" },
    { id: 'tx', icon: '💊', name: "Treatment, drugs and surgery" }
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
    return svg(360, 300, `${title("The locomotor system: bone, cartilage, joint, ligament, muscle and tendon")}
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
      ${pin(150, 60, 262, 50)}${lab(298, 46, 'bone', "bone • oste/o", { size: 10.5 })}
      ${pin(160, 120, 262, 92)}${lab(298, 88, 'cartilage', "cartilage • chondr/o", { size: 10.5 })}
      ${pin(182, 130, 262, 134)}${lab(298, 130, 'joint', "joint • arthr/o", { size: 10.5 })}
      ${pin(204, 70, 262, 176)}${lab(298, 172, 'muscle', "muscle • my/o", { size: 10.5 })}
      ${pin(194, 156, 262, 218)}${lab(298, 214, 'tendon', "tendon • ten/o", { size: 10.5 })}
      ${pin(106, 130, 62, 130)}${lab(50, 108, 'ligament', "band joining bone to bone", { size: 10.5 })}
      ${f(56, 150, "bone to bone", { size: 8.5 })}
      ${f(180, 292, "tendon: muscle to bone • ligament: bone to bone", { size: 9.5, fill: INK, w: 700 })}`,
      "Parts of the musculoskeletal system", `${fm.d}${tb.d}${shadow(sh)}${linear(m, C.muscL, C.musc2)}`);
  };

  /* کارهای اسکلت و عضله */
  A['skel-functions'] = () => svg(360, 214, `${title("The skeleton and muscles together have six main jobs")}
      ${card(8, 32, 108, 84, '#f8efdc', '🧍', 'support', "support and body shape", '')}
      ${card(126, 32, 108, 84, '#e6f0fb', '🛡️', 'protection', "protection", "the skull guards the brain, the ribs the heart")}
      ${card(244, 32, 108, 84, '#fde8e6', '🏃', 'movement', "Movement", "bone is the lever, muscle the force")}
      ${card(8, 124, 108, 84, '#fbe3e3', '🩸', 'hematopoiesis', "blood cell formation", "in the red bone marrow")}
      ${card(126, 124, 108, 84, '#eef6e6', '🧂', 'mineral storage', "mineral storage", "calcium and phosphorus")}
      ${card(244, 124, 108, 84, '#fff1d9', '🔥', 'heat production', "heat production", "work of the muscles")}`, "Jobs of the musculoskeletal system");

  /* آناتومی یک واژه: inter + vertebr + al */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 129, fa, { size: 9.5, fill: c })}`;
    return svg(360, 192, `${title("One word = prefix + root + suffix")}
      ${part(10, 66, 'inter', '#1272a3', '#ddf1fb')}${part(82, 100, 'vertebr', '#a8352f', '#fbe7e3')}${part(188, 46, 'al', '#3f8a05', '#e7f9d8')}
      ${br(10, 76, 'prefix', "prefix: between", '#1272a3')}${br(82, 182, 'root', "root: vertebra", '#a8352f')}${br(188, 234, 'suffix', "suffix: pertaining to", '#3f8a05')}
      <rect x="246" y="40" width="106" height="40" rx="10" fill="#f8f6f5"/>${f(299, 57, "pertaining to", { size: 10.5, fill: '#3f8a05', w: 800 })}${f(299, 73, "between the vertebrae", { size: 10.5, fill: INK, w: 800 })}
      <path d="M214 150 C160 176 96 176 44 150" stroke="#a8352f" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M48 146 l-6 4 l7 3" stroke="#a8352f" stroke-width="2" fill="none"/>
      ${f(140, 186, "Read the meaning from the end: suffix → prefix → root", { size: 10, fill: '#a8352f', w: 700 })}`, "The anatomy of a medical word");
  };

  /* شش ریشه پایه */
  A['root-trio'] = () => {
    const tile = (x, y, ic, root, fa, ex, bg, c) => `<rect x="${x}" y="${y}" width="108" height="84" rx="14" fill="${bg}"/>${t(x + 54, y + 28, ic, { size: 21 })}${t(x + 54, y + 50, root, { size: 13, w: 900, fill: c })}${f(x + 54, y + 64, fa, { size: 10, fill: INK, w: 800 })}${t(x + 54, y + 78, ex, { size: 9, fill: MUTED })}`;
    return svg(360, 220, `${title("Six basic roots of the locomotor system")}
      ${tile(8, 32, '🦴', 'oste/o', "bone", 'osteitis', '#f8efdc', '#8a6a2c')}
      ${tile(126, 32, '💪', 'my/o', "muscle", 'myalgia', '#fde8e6', '#a8352f')}
      ${tile(244, 32, '🦵', 'arthr/o', "joint", 'arthritis', '#ddf4f1', '#137568')}
      ${tile(8, 126, '🧊', 'chondr/o', "firm shock-absorbing connective tissue", 'chondroma', '#e3f1fa', '#1565c0')}
      ${tile(126, 126, '🪢', 'ten/o', "tendon", 'tenotomy', '#f6f1e6', '#8a6a2c')}
      ${tile(244, 126, '🧵', 'myel/o', "bone marrow", 'osteomyelitis', '#f3eafc', '#6a3fb0')}`, "Basic roots");
  };

  /* جهت‌های بدن روی یک مانکن */
  A.directions = () => {
    const a = nid(), b = nid();
    return svg(360, 336, `${title("Directions: proximal and distal, medial and lateral")}
      ${mannequin(180, 30, 1)}
      <path d="M180 30 V300" stroke="#9aa9b1" stroke-width="1.4" stroke-dasharray="5 4"/>${f(180, 312, "dashed line: the midline of the body", { size: 9 })}
      ${arrow(a, 128, 92, 112, 176, '#1e9e8f', 2.6)}${arrow(a, 112, 176, 128, 92, '#1e9e8f', 2.6)}
      ${lab(80, 104, 'proximal', "nearer the trunk", { size: 10, fill: '#137568' })}${lab(80, 178, 'distal', "farther from the trunk", { size: 10, fill: '#137568' })}
      ${arrow(b, 196, 150, 226, 150, '#c2413a', 2.6)}${lab(296, 140, 'lateral', "lateral: away from the midline", { size: 10, fill: '#a8352f' })}
      ${arrow(b, 226, 172, 196, 172, '#3f7fbf', 2.6)}${lab(296, 184, 'medial', "medial: toward the midline", { size: 10, fill: '#1f5f9f' })}
            <circle cx="152" cy="240" r="6" fill="#c2413a" opacity=".8"/><circle cx="208" cy="240" r="6" fill="#c2413a" opacity=".8"/>${f(180, 330, "both knees involved = bilateral; only one = unilateral", { size: 9.5, fill: '#5b3fb0', w: 700 })}`,
      "Anatomical directions", `${marker(a, '#1e9e8f')}${marker(b, '#5b6b73')}`);
  };

  /* دوقلوهای فریبنده */
  A.twins = () => {
    const box = (x, y, c, bg, w1, m1, ex, ic) => `<rect x="${x}" y="${y}" width="164" height="86" rx="14" fill="${bg}"/>${t(x + 30, y + 50, ic, { size: 22 })}${t(x + 100, y + 32, w1, { size: 15, fill: c, w: 900 })}${f(x + 100, y + 52, m1, { size: 10.5, fill: INK, w: 800 })}${t(x + 100, y + 72, ex, { size: 9.5, fill: c, w: 800 })}`;
    return svg(360, 236, `${title("One letter, two completely different meanings")}
      ${box(10, 32, '#a8352f', '#fde8e6', 'my/o', "muscle", 'myalgia', '💪')}${box(186, 32, '#6a3fb0', '#f3eafc', 'myel/o', "bone marrow; spinal cord", 'osteomyelitis', '🧵')}
      ${box(10, 126, '#8a6a2c', '#f8efdc', 'ilium', "hip bone", 'ili/o', '🦴')}${box(186, 126, '#3f8a05', '#eef6e6', 'ileum', "small intestine (digestion)", 'ile/o', '🌀')}
      ${f(180, 228, "ilium with i belongs to the hip; ileum with e belongs to the gut (e for eat)", { size: 9.5, fill: MUTED, w: 700 })}`, "Look-alike words");
  };

  /* ================= دنیای ۱: استخوان ================= */
  /* سه سلول استخوان */
  A['bone-cells'] = () => {
    const g = nid();
    const matrix = (x) => `<rect x="${x}" y="40" width="104" height="120" rx="12" fill="${C.compact}"/>${[0, 1, 2, 3, 4].map(i => `<path d="M${x + 6} ${60 + i * 22} q24 -6 48 0 t48 0" stroke="${C.bone2}" stroke-width="1.4" fill="none"/>`).join('')}`;
    return svg(360, 214, `${title("Three bone cells: builder, keeper, destroyer")}
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
      ${lab(60, 180, 'osteoblast', "bone builder", { size: 10.5, fill: '#1f5f9f' })}
      ${lab(180, 180, 'osteocyte', "mature bone cell", { size: 10.5, fill: '#8a5a20' })}
      ${lab(300, 180, 'osteoclast', "bone eater", { size: 10.5, fill: '#6a3fb0' })}`,
      "Bone cells", radial(g, '#e9d5fb', '#b48ae0'));
  };

  /* آناتومی استخوان دراز (برش طولی) */
  A['long-bone'] = () => {
    const cx = 150, y1 = 40, y2 = 400, sw = 46, ew = 40;
    const outer = bonePath(cx, y1, y2, sw, ew);
    const top = `M${cx - ew + 2} ${y1 + 12} C${cx - ew} ${y1 - 4} ${cx - 10} ${y1 - 6} ${cx} ${y1 + 10} C${cx + 10} ${y1 - 6} ${cx + ew} ${y1 - 4} ${cx + ew - 2} ${y1 + 12} L${cx + ew - 6} ${y1 + 52} L${cx + sw / 2 - 6} ${y1 + 82} L${cx - sw / 2 + 6} ${y1 + 82} L${cx - ew + 6} ${y1 + 52} Z`;
    const bot = `M${cx - ew + 2} ${y2 - 12} C${cx - ew} ${y2 + 4} ${cx - 10} ${y2 + 6} ${cx} ${y2 - 10} C${cx + 10} ${y2 + 6} ${cx + ew} ${y2 + 4} ${cx + ew - 2} ${y2 - 12} L${cx + ew - 6} ${y2 - 52} L${cx + sw / 2 - 6} ${y2 - 82} L${cx - sw / 2 + 6} ${y2 - 82} L${cx - ew + 6} ${y2 - 52} Z`;
    const sp1 = spongy(top, cx - ew, y1 - 6, ew * 2, 92, 5), sp2 = spongy(bot, cx - ew, y2 - 86, ew * 2, 92, 9);
    const g = nid(), sh = nid();
    return svg(360, 440, `${title("Anatomy of a long bone (lengthwise section)")}
      <g filter="url(#${sh})"><path d="${outer}" fill="url(#${g})" stroke="#e58a8a" stroke-width="3"/></g>
      ${sp1.b}${sp2.b}
      <rect x="${cx - sw / 2 + 7}" y="${y1 + 86}" width="${sw - 14}" height="${y2 - y1 - 172}" rx="6" fill="${C.marrowY}" stroke="#d9a93a" stroke-width="1"/>
      <path d="M${cx - ew + 8} ${y1 + 56} Q${cx} ${y1 + 50} ${cx + ew - 8} ${y1 + 56}" stroke="#f6f0e3" stroke-width="3.5" fill="none"/>
      <path d="M${cx - ew + 8} ${y2 - 56} Q${cx} ${y2 - 50} ${cx + ew - 8} ${y2 - 56}" stroke="#f6f0e3" stroke-width="3.5" fill="none"/>
      <path d="M${cx - ew + 4} ${y1 + 10} C${cx - ew + 4} ${y1 - 2} ${cx - 10} ${y1 - 2} ${cx} ${y1 + 12} C${cx + 10} ${y1 - 2} ${cx + ew - 4} ${y1 - 2} ${cx + ew - 4} ${y1 + 10}" stroke="${C.cartLine}" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M${cx - ew + 4} ${y1 + 10} C${cx - ew + 4} ${y1 - 2} ${cx - 10} ${y1 - 2} ${cx} ${y1 + 12} C${cx + 10} ${y1 - 2} ${cx + ew - 4} ${y1 - 2} ${cx + ew - 4} ${y1 + 10}" stroke="${C.cart}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M${cx - 18} ${y1 + 210} q-10 12 0 24" stroke="${C.art}" stroke-width="2.4" fill="none"/><path d="M${cx - sw / 2} ${y1 + 216} h10" stroke="${C.art}" stroke-width="2.4"/>
      <path d="M18 ${y1} V${y1 + 60} M12 ${y1} H24 M12 ${y1 + 60} H24" stroke="#a8352f" stroke-width="1.6" fill="none"/>${lab(66, y1 + 26, 'epiphysis', "end of the bone", { size: 10, fill: '#a8352f' })}
      <path d="M18 ${y1 + 116} V${y2 - 116} M12 ${y1 + 116} H24 M12 ${y2 - 116} H24" stroke="#1f5f9f" stroke-width="1.6" fill="none"/>${lab(66, 222, 'diaphysis', "shaft of the bone", { size: 10, fill: '#1f5f9f' })}
      <path d="M18 ${y2 - 60} V${y2} M12 ${y2 - 60} H24 M12 ${y2} H24" stroke="#a8352f" stroke-width="1.6" fill="none"/>${lab(66, y2 - 34, 'epiphysis', "lower end", { size: 10, fill: '#a8352f' })}
      ${pin(cx + 20, y1 + 6, 222, 46)}${lab(290, 42, 'articular cartilage', "smooth cartilage on bone ends", { size: 9.5 })}
      ${pin(cx + 16, y1 + 54, 222, 86)}${lab(290, 82, 'epiphyseal line', "growth line (closed growth plate)", { size: 9.5 })}
      ${pin(cx + 10, y1 + 30, 222, 126)}${lab(290, 122, 'spongy bone', "spongy bone + red marrow", { size: 9.5 })}
      ${pin(cx + sw / 2 - 1, y1 + 100, 222, 166)}${lab(290, 162, 'metaphysis', "flared part between shaft and end", { size: 9.5 })}
      ${pin(cx + sw / 2 - 3, 230, 222, 210)}${lab(290, 206, 'compact bone', "dense outer bone", { size: 9.5 })}
      ${pin(cx + 6, 250, 222, 252)}${lab(290, 248, 'medullary cavity', "marrow cavity: yellow marrow", { size: 9.5 })}
      ${pin(cx + sw / 2 + 1, 290, 222, 296)}${lab(290, 292, 'periosteum', "periosteum: outer covering", { size: 9.5 })}
      ${pin(cx - 18, y1 + 222, 222, 338)}${lab(290, 334, 'nutrient artery', "nutrient artery", { size: 9.5 })}`,
      "Anatomy of a long bone", `${linear(g, C.compact, C.bone2)}${shadow(sh)}${sp1.d}${sp2.d}`);
  };

  /* استخوان متراکم و اسفنجی */
  A['bone-tissue'] = () => {
    const osteon = (cx, cy) => `${[22, 17, 12, 7].map((r, i) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${i % 2 ? C.compact : '#f5e8cc'}" stroke="${C.bone2}" stroke-width="1"/>`).join('')}<circle cx="${cx}" cy="${cy}" r="4" fill="#fff"/><circle cx="${cx - 1.5}" cy="${cy}" r="1.6" fill="${C.art}"/><circle cx="${cx + 1.5}" cy="${cy}" r="1.6" fill="${C.vein}"/>`;
    const clip = 'M200 40 H352 V176 H200 Z';
    const sp = spongy(clip, 200, 40, 152, 136, 21);
    let tr = '';
    const R = rng(4);
    for (let i = 0; i < 28; i++) { const x = 200 + R() * 152, y = 40 + R() * 136, a = R() * 180; tr += `<path d="M${(x - 14).toFixed(1)} ${y.toFixed(1)} h28" stroke="${C.bone}" stroke-width="5" stroke-linecap="round" transform="rotate(${a.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`; }
    return svg(360, 226, `${title("Two kinds of bone tissue")}
      <rect x="8" y="40" width="160" height="136" rx="12" fill="${C.compact}"/>
      ${osteon(50, 82)}${osteon(110, 74)}${osteon(146, 128)}${osteon(64, 140)}
      ${sp.b}<g>${tr}</g><rect x="200" y="40" width="152" height="136" rx="12" fill="none" stroke="${C.bone2}" stroke-width="2"/>
      ${pin(110, 74, 96, 30, '#1f5f9f')}${t(100, 30, 'haversian canal', { size: 9.5, anchor: 'start', fill: '#1f5f9f' })}
      ${lab(88, 194, 'compact bone', "compact: hard outer layer (osteons)", { size: 10.5 })}
      ${lab(276, 194, 'cancellous (spongy) bone', "spongy: thin plates + red marrow", { size: 10.5 })}`, "Compact and spongy bone", sp.d);
  };

  /* پنج شکل استخوان */
  A['bone-shapes'] = () => {
    const lb = bone(52, 46, 152, 12, 13), g = nid();
    return svg(360, 244, `${title("Five bone shapes")}
      <rect x="8" y="32" width="88" height="200" rx="14" fill="#f8efdc"/>${lb.b}${lab(52, 186, 'long', "long: femur, humerus", { size: 10.5 })}
      <rect x="104" y="32" width="120" height="96" rx="14" fill="#eef6e6"/>
      <g fill="url(#${g})" stroke="${C.boneLine}" stroke-width="1.3"><rect x="126" y="50" width="22" height="20" rx="6"/><rect x="152" y="46" width="20" height="24" rx="6"/><rect x="176" y="52" width="24" height="18" rx="6"/></g>${lab(164, 92, 'short', "short: wrist and ankle", { size: 10.5 })}
      <rect x="232" y="32" width="120" height="96" rx="14" fill="#e6f0fb"/>
      <path d="M252 48 L320 44 C330 60 318 80 296 92 C286 76 266 62 252 48Z" fill="url(#${g})" stroke="${C.boneLine}" stroke-width="1.3"/>${lab(292, 106, 'flat', "flat: scapula, sternum, skull", { size: 10.5 })}
      <rect x="104" y="136" width="120" height="96" rx="14" fill="#fde8e6"/>
      <g fill="url(#${g})" stroke="${C.boneLine}" stroke-width="1.3"><ellipse cx="164" cy="168" rx="18" ry="12"/><path d="M152 176 L140 184 M176 176 L188 184 M164 180 V196" stroke-width="5" stroke="${C.boneLine}"/><path d="M152 176 L140 184 M176 176 L188 184 M164 180 V196" stroke-width="3" stroke="${C.bone}"/></g>${lab(164, 210, 'irregular', "irregular: vertebra", { size: 10.5 })}
      <rect x="232" y="136" width="120" height="96" rx="14" fill="#f3eafc"/>
      <ellipse cx="292" cy="170" rx="14" ry="18" fill="url(#${g})" stroke="${C.boneLine}" stroke-width="1.3"/><path d="M292 146 V152 M292 188 V196" stroke="${C.tendonLine}" stroke-width="6" stroke-linecap="round"/>${lab(292, 210, 'sesamoid', "sesamoid: kneecap (in a tendon)", { size: 10.5 })}`,
      "Bone shapes", `${lb.d}${linear(g, C.boneHi, C.bone2)}`);
  };

  /* برجستگی‌ها و فرورفتگی‌های استخوان ران */
  A['bone-markings'] = () => {
    const g = nid(), sh = nid();
    const femur = `M120 60 C108 48 112 30 128 28 C144 26 152 40 146 52 L156 62 C170 58 184 56 196 56 C206 58 210 70 202 78 L188 86 C184 100 180 120 180 140 L178 252 C178 266 186 272 196 280 C206 292 200 310 186 312 C176 314 170 306 164 300 C158 306 150 314 138 312 C122 310 118 292 128 280 C138 272 146 266 146 252 L150 140 C150 112 146 92 138 80 C132 74 126 68 120 60Z`;
    return svg(360, 330, `${title("Landmarks of the femur: projections")}
      <g filter="url(#${sh})"><path d="${femur}" fill="url(#${g})" stroke="${C.boneLine}" stroke-width="1.5"/></g>
      <path d="M134 74 C142 66 150 62 156 62" stroke="${C.boneLine}" stroke-width="1" fill="none"/>
      <path d="M182 108 q8 -2 10 6" stroke="${C.boneLine}" stroke-width="2" fill="none"/>
      ${pin(128, 40, 64, 40)}${lab(40, 36, 'head', "head", { size: 10 })}
      ${pin(140, 64, 64, 82)}${lab(40, 78, 'neck', "neck", { size: 10 })}
      ${pin(198, 64, 262, 52)}${lab(304, 48, 'greater trochanter', "greater trochanter", { size: 9.5 })}
      ${pin(186, 112, 262, 104)}${lab(304, 100, 'lesser trochanter', "lesser trochanter", { size: 9.5 })}
      ${pin(164, 190, 262, 170)}${lab(304, 166, 'shaft (diaphysis)', "shaft", { size: 9.5 })}
      ${pin(194, 282, 262, 248)}${lab(304, 244, 'lateral epicondyle', "lateral epicondyle", { size: 9.5 })}
      ${pin(188, 304, 262, 296)}${lab(304, 292, 'lateral condyle', "lateral condyle", { size: 9.5 })}
      ${pin(132, 300, 64, 300)}${lab(40, 296, 'medial condyle', "medial condyle", { size: 9.5 })}
      ${pin(130, 282, 64, 250)}${lab(40, 246, 'medial epicondyle', "medial epicondyle", { size: 9.5 })}
      ${f(48, 150, "Depressions:", { size: 9.5, fill: INK, w: 800 })}${f(48, 166, "foramen opening", { size: 9 })}${f(48, 180, "fossa hollow", { size: 9 })}${f(48, 194, "fissure slit", { size: 9 })}${f(48, 208, "sinus air space", { size: 9 })}`,
      "Bone landmarks", `${linear(g, C.boneHi, C.bone2)}${shadow(sh)}`);
  };

  /* صفحه رشد: کودک در برابر بزرگسال */
  A['growth-plate'] = () => {
    const kid = bone(100, 44, 184, 22, 22), adult = bone(260, 40, 200, 24, 24);
    return svg(360, 246, `${title("Growth plate: child versus adult")}
      ${kid.b}${adult.b}
      <path d="M80 82 Q100 76 120 82" stroke="#3f7fbf" stroke-width="5" fill="none"/><path d="M80 146 Q100 152 120 146" stroke="#3f7fbf" stroke-width="5" fill="none"/>
      <path d="M238 82 Q260 76 282 82" stroke="${C.boneLine}" stroke-width="1.6" stroke-dasharray="3 2" fill="none"/><path d="M238 158 Q260 164 282 158" stroke="${C.boneLine}" stroke-width="1.6" stroke-dasharray="3 2" fill="none"/>
      ${pin(118, 82, 150, 70, '#3f7fbf')}${t(152, 66, 'epiphyseal plate', { size: 9.5, anchor: 'start', fill: '#1f5f9f' })}
      ${pin(280, 82, 300, 40)}${t(300, 34, 'epiphyseal line', { size: 9.5, anchor: 'middle', fill: '#8a5a20' })}
      ${lab(100, 210, 'child', "child: open cartilage plate; the bone lengthens", { size: 10.5, fill: '#1f5f9f' })}
      ${lab(260, 226, 'adult', "adult: plate closed and turned to bone", { size: 10.5 })}`, "Growth plate", `${kid.d}${adult.d}`);
  };

  /* پوکی استخوان: سه درجه */
  A.osteoporosis = () => {
    const panel = (cx, n, w, col, en, fa, c) => {
      const R = rng(n * 7), id = nid();
      let s = '';
      for (let i = 0; i < n; i++) { const x = cx - 46 + R() * 92, y = 46 + R() * 92, a = R() * 180; s += `<path d="M${(x - 12).toFixed(1)} ${y.toFixed(1)} h24" stroke="${col}" stroke-width="${w}" stroke-linecap="round" transform="rotate(${a.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`; }
      return { d: `<clipPath id="${id}"><circle cx="${cx}" cy="92" r="50"/></clipPath>`, b: `<circle cx="${cx}" cy="92" r="52" fill="#fbe9e4" stroke="${C.boneLine}" stroke-width="2"/><g clip-path="url(#${id})">${s}</g>${lab(cx, 166, en, fa, { size: 10.5, fill: c })}` };
    };
    const p1 = panel(62, 70, 6, C.bone2, 'normal', "thick plates", '#3f8a05'), p2 = panel(180, 42, 4, C.bone2, 'osteopenia', "slightly low mass", '#a36b00'), p3 = panel(298, 22, 2.6, C.bone2, 'osteoporosis', "full of holes and fragile", '#a8352f');
    return svg(360, 200, `${title("From healthy bone to osteoporosis (magnified spongy bone)")}${p1.b}${p2.b}${p3.b}
      ${f(180, 194, "Diagnosed with a bone density scan (DXA) and the T-score", { size: 9.5 })}`, "porous, brittle bones", p1.d + p2.d + p3.d);
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
    return svg(360, 500, `${title("The skeleton: 206 bones (axial and appendicular)")}${skeleton(cx, top)}
      ${L(160, 50, 84, 46, 'cranium', "skull", -1)}${L(172, 84, 84, 88, 'mandible', "lower jaw", -1)}
      ${L(150, 101, 84, 126, 'clavicle', "collarbone", -1)}${L(132, 140, 84, 170, 'humerus', "upper arm bone", -1)}
      ${L(125, 210, 84, 214, 'radius / ulna', "radius and ulna", -1)}${L(119, 246, 84, 256, 'carpals', "the wrist", -1)}
      ${L(122, 268, 84, 296, 'phalanges', "Finger bones", -1)}${L(158, 320, 84, 338, 'femur', "thigh bone", -1)}
      ${L(156, 376, 84, 380, 'patella', "kneecap", -1)}${L(158, 420, 84, 422, 'tibia', "shinbone", -1)}
      ${L(206, 120, 276, 100, 'sternum', "breastbone", 1)}${L(214, 142, 276, 142, 'ribs', "ribs", 1)}
      ${L(180, 184, 276, 184, 'vertebral column', "The spine", 1)}${L(214, 266, 276, 226, 'pelvis', "pelvis", 1)}
      ${L(180, 262, 276, 268, 'sacrum', "sacrum", 1)}${L(210, 420, 276, 404, 'fibula', "fibula", 1)}
      ${L(206, 472, 276, 452, 'tarsals', "ankle bones", 1)}
      <rect x="112" y="476" width="12" height="10" rx="3" fill="${C.axial}" stroke="${C.axialLine}"/>${f(130, 485, "axial (80)", { size: 9, anchor: 'start', fill: INK })}
      <rect x="206" y="476" width="12" height="10" rx="3" fill="${C.app}" stroke="${C.appLine}"/>${f(224, 485, "appendicular (126)", { size: 9, anchor: 'start', fill: INK })}`, "The human skeleton");
  };

  /* جمجمه از نیم‌رخ */
  A.skull = () => {
    const cl = nid(), sh = nid();
    const out = 'M86 150 C70 110 92 52 160 40 C230 30 292 64 298 124 C302 156 288 180 268 192 L250 200 L236 196 L226 214 L176 214 L160 236 L118 236 C106 222 104 206 98 196 L84 192 C76 186 80 174 86 168 Z';
    const reg = (d, c) => `<path d="${d}" fill="${c}" stroke="#8a7a5c" stroke-width="1.1" stroke-linejoin="round"/>`;
    return svg(360, 290, `${title("The skull from the side: bones of the head and face")}
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
      ${pin(120, 70, 50, 56)}${lab(40, 44, 'frontal', "The forehead", { size: 9.5 })}
      ${pin(214, 66, 214, 30)}${t(240, 32, "parietal", { size: 9.5 })}
      ${pin(282, 120, 322, 92)}${lab(330, 74, 'occipital', "back of the head", { size: 9.5 })}
      ${pin(226, 156, 322, 150)}${lab(330, 132, 'temporal', "temporal", { size: 9.5 })}
      ${pin(166, 132, 210, 100)}${t(212, 98, 'sphenoid', { size: 9, anchor: 'start' })}
      ${pin(100, 158, 40, 150)}${lab(36, 130, 'nasal', "nose", { size: 9.5 })}
      ${pin(120, 160, 40, 196)}${lab(36, 178, 'maxilla', "upper jaw", { size: 9.5 })}
      ${pin(172, 170, 220, 252)}${lab(244, 258, 'zygomatic', "cheek", { size: 9.5 })}
      ${pin(140, 226, 100, 262)}${lab(80, 266, 'mandible', "mandible (movable)", { size: 9.5 })}
      ${pin(178, 92, 230, 76, '#8a7a5c')}${t(232, 80, 'suture', { size: 9, anchor: 'start', fill: '#8a7a5c' })}
      ${f(312, 210, "ear canal", { size: 8.5 })}`, "skull", `<clipPath id="${cl}"><path d="${out}"/></clipPath>${shadow(sh)}`);
  };

  /* ستون مهره از نیم‌رخ */
  A.spine = () => {
    const reg = [['C', 7, '#f6c453', 'cervical', "cervical", 'C1–C7'], ['T', 12, '#7fb2e5', 'thoracic', "of the chest", 'T1–T12'], ['L', 5, '#8fd18a', 'lumbar', "lower back", 'L1–L5']];
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
      labels += `<path d="M232 ${y0} h6 V${y - 3} h-6" stroke="#6b5a3a" stroke-width="1.3" fill="none"/>${lab(246, (y0 + y) / 2 - 6, `${r[3]} (${r[5]})`, `${r[4]}: ${EA.fa ? EA.fa(r[1]) : r[1]} vertebrae`, { size: 10, anchor: 'start' })}`;
    });
    const sx = xAt(y + 20);
    s += `<path d="M${sx - 16} ${y} L${sx + 16} ${y + 4} L${sx + 4} ${y + 52} Z" fill="#c9a8ea" stroke="#6b5a3a" stroke-width="1"/>`;
    s += `<path d="M${sx + 2} ${y + 54} q2 10 -4 18" stroke="#f2a4b8" stroke-width="7" stroke-linecap="round" fill="none"/>`;
    labels += `${pin(sx, y + 22, 238, y + 22)}${lab(246, y + 18, 'sacrum', "sacral: 5 fused vertebrae", { size: 10, anchor: 'start' })}${pin(sx - 1, y + 66, 238, y + 70)}${lab(246, y + 66, 'coccyx', "tailbone", { size: 10, anchor: 'start' })}`;
    return svg(360, y + 100, `${title("The spine: 26 bones seen from the side")}${s}${labels}
      ${f(70, 76, "cervical curve ↶", { size: 9 })}${f(70, 170, "thoracic curve ↷", { size: 9 })}${f(70, 268, "lumbar curve ↶", { size: 9 })}
      ${pin(170, 46, 110, 40)}${t(108, 44, 'atlas C1', { size: 9, anchor: 'end' })}${pin(171, 57, 110, 56)}${t(108, 60, 'axis C2', { size: 9, anchor: 'end' })}
      ${f(90, y + 92, "front (anterior) ← • → back (posterior)", { size: 9 })}`, "The spine");
  };

  /* مهره از بالا */
  A.vertebra = () => {
    const sh = nid(), g = nid();
    return svg(360, 250, `${title("A lumbar vertebra from above")}
      <g filter="url(#${sh})" fill="url(#${g})" stroke="${C.boneLine}" stroke-width="1.5">
        <path d="M180 132 L150 142 L104 132 C96 128 96 120 104 118 L146 120 L156 106 L170 96 C176 92 184 92 190 96 L204 106 L214 120 L256 118 C264 120 264 128 256 132 L210 142 L180 132Z"/>
        <path d="M168 104 L174 60 C176 52 184 52 186 60 L192 104 Z"/>
        <ellipse cx="180" cy="190" rx="62" ry="44"/>
        <path d="M150 150 C146 160 148 170 152 176 M210 150 C214 160 212 170 208 176" stroke-width="10" stroke="${C.boneLine}" fill="none"/>
        <path d="M150 150 C146 160 148 170 152 176 M210 150 C214 160 212 170 208 176" stroke-width="7.5" stroke="${C.bone}" fill="none"/>
      </g>
      <ellipse cx="180" cy="134" rx="24" ry="20" fill="#fff" stroke="${C.boneLine}" stroke-width="1.2"/>
      <ellipse cx="180" cy="134" rx="13" ry="11" fill="#f6d36a" stroke="#c99a1d" stroke-width="1.2"/>
      ${pin(180, 74, 250, 52)}${lab(296, 48, 'spinous process', "spinous process (back)", { size: 9.5 })}
      ${pin(250, 124, 300, 150)}${lab(312, 146, 'transverse process', "transverse process", { size: 9.5 })}
      ${pin(198, 108, 252, 80)}${t(254, 84, 'lamina', { size: 9.5, anchor: 'start' })}
      ${pin(180, 134, 90, 72)}${lab(70, 54, 'vertebral foramen', "vertebral foramen (spinal cord)", { size: 9.5 })}
      ${pin(152, 164, 74, 150)}${lab(56, 136, 'pedicle', "pedicle", { size: 9.5 })}
      ${pin(180, 206, 290, 206)}${lab(312, 198, 'vertebral body', "vertebral body (front)", { size: 9.5 })}
      ${f(180, 246, "The spinal cord passes through the vertebral foramen; a laminectomy removes the lamina to free it", { size: 9 })}`,
      "spinal bone", `${shadow(sh)}${linear(g, C.boneHi, C.bone2, true)}`);
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
    return svg(360, 262, `${title("Intervertebral disc: healthy and herniated (top view)")}
      ${disk(90, false)}${disk(266, true)}
      ${pin(90, 108, 46, 40)}${lab(56, 32, 'nucleus pulposus', "nucleus pulposus", { size: 9.5 })}
      ${pin(140, 96, 150, 40)}${lab(170, 32, 'annulus fibrosus', "annulus fibrosus", { size: 9.5 })}
      ${pin(272, 140, 320, 46)}${t(316, 42, 'HNP', { size: 11, sym: true, fill: '#a8352f' })}
      ${lab(90, 226, 'normal disk', "healthy disc", { size: 10.5, fill: '#1f5f9f' })}
      ${lab(266, 226, 'herniated disk', "the nucleus bulges out and presses on a nerve root", { size: 10.5, fill: '#a8352f' })}`, "Herniated disc");
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
    return svg(360, 300, `${title("The rib cage: the sternum and 12 pairs of ribs")}
      <rect x="174" y="44" width="12" height="232" rx="4" fill="${C.bone2}" opacity=".5"/>
      ${r}
      <path d="M168 50 H192 L188 76 H172Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3"/>
      <rect x="171" y="78" width="18" height="86" rx="6" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3"/>
      <path d="M174 166 H186 L180 184Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3"/>
      ${pin(192, 58, 300, 40)}${lab(320, 36, 'manubrium', "manubrium", { size: 9.5 })}
      ${pin(189, 120, 300, 80)}${lab(320, 76, 'sternum (body)', "body of the sternum", { size: 9.5 })}
      ${pin(182, 180, 300, 196)}${lab(320, 192, 'xiphoid process', "xiphoid process", { size: 9.5 })}
      ${pin(207, 105, 300, 128)}${lab(320, 124, 'costal cartilage', "rib cartilage", { size: 9.5, fill: '#1f6f9f' })}
      ${lab(8, 90, 'true ribs 1–7', "true: directly to the sternum", { size: 9.5, fill: '#8a6a2c', anchor: 'start' })}
      ${lab(8, 196, 'false ribs 8–12', "ribs not joined directly to the sternum", { size: 9.5, fill: '#1f5f9f', anchor: 'start' })}
      ${lab(8, 250, 'floating ribs 11–12', "floating: not attached to the sternum", { size: 9.5, fill: '#a8352f', anchor: 'start' })}`, "the chest");
  };

  /* استخوان‌های اندام فوقانی */
  A['arm-bones'] = () => {
    const hu = bone(150, 64, 210, 16, 15), ra = bone(140, 214, 330, 9, 9, { rot: -3 }), ul = bone(168, 208, 326, 9, 10, { rot: 3 });
    let hand = '';
    [[132, 344], [146, 340], [160, 340], [174, 344]].forEach(p => { hand += `<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="${C.bone}" stroke="${C.boneLine}"/>`; });
    [[122, 352, 112, 384], [136, 352, 132, 392], [150, 352, 150, 396], [164, 352, 168, 394], [178, 352, 186, 386]].forEach((q, i) => { hand += limb(q[0], q[1], q[2], q[3], 4.2, C.bone, C.boneLine) + limb(q[2], q[3] + 4, q[2] + (i ? (i - 2) * 2 : -8), q[3] + (i ? 30 : 18), 3.4, C.bone, C.boneLine); });
    return svg(360, 440, `${title("Bones of the shoulder, arm, forearm and hand")}
      <path d="M116 46 C140 38 172 40 196 52" stroke="${C.boneLine}" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M116 46 C140 38 172 40 196 52" stroke="${C.bone}" stroke-width="6.5" fill="none" stroke-linecap="round"/>
      <path d="M186 50 L236 60 L222 132 Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3" stroke-linejoin="round" opacity=".9"/>
      <path d="M182 54 C196 46 208 50 212 58" stroke="${C.boneLine}" stroke-width="5" fill="none" stroke-linecap="round"/>
      ${hu.b}${ra.b}${ul.b}${hand}
      <path d="M160 208 C164 196 176 196 178 206" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.2"/>
      ${pin(120, 46, 60, 40)}${lab(46, 36, 'clavicle', "collarbone", { size: 9.5 })}
      ${pin(226, 92, 290, 92)}${lab(312, 88, 'scapula', "shoulder blade", { size: 9.5 })}
      ${pin(206, 56, 290, 46)}${lab(312, 42, 'acromion', "acromion", { size: 9.5 })}
      ${pin(150, 140, 60, 140)}${lab(40, 136, 'humerus', "arm", { size: 9.5 })}
      ${pin(172, 206, 290, 196)}${lab(312, 192, 'olecranon', "olecranon", { size: 9.5 })}
      ${pin(138, 272, 60, 272)}${lab(40, 262, 'radius', "radius (thumb side)", { size: 9.5 })}
      ${pin(170, 268, 290, 268)}${lab(318, 264, 'ulna', "ulna", { size: 9.5 })}
      ${pin(174, 344, 290, 336)}${lab(312, 332, 'carpals (8)', "the wrist", { size: 9.5 })}
      ${pin(136, 372, 60, 360)}${lab(40, 356, 'metacarpals (5)', "in the palm", { size: 9.5 })}
      ${pin(170, 410, 290, 404)}${lab(312, 400, 'phalanges (14)', "Finger bones", { size: 9.5 })}`, "Bones of the upper limb", hu.d + ra.d + ul.d);
  };

  /* لگن از روبه‌رو */
  A.pelvis = () => {
    const sh = nid();
    return svg(360, 280, `${title("The pelvis: ilium, ischium and pubis")}
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
      ${pin(90, 80, 40, 60)}${lab(36, 44, 'ilium', "ilium", { size: 9.5 })}
      ${pin(180, 92, 180, 34)}${t(212, 36, "sacrum", { size: 9.5 })}
      ${pin(128, 168, 46, 150)}${lab(40, 132, 'acetabulum', "hip socket", { size: 9.5 })}
      ${pin(118, 214, 48, 228)}${lab(42, 244, 'ischium', "ischium", { size: 9.5 })}
      ${pin(164, 182, 300, 196)}${lab(318, 178, 'pubis', "above the pubic bone", { size: 9.5 })}
      ${pin(180, 210, 290, 248)}${lab(306, 244, 'pubic symphysis', "symphysis (cartilage)", { size: 9.5 })}
      ${pin(246, 120, 300, 112)}${lab(318, 94, 'iliac crest', "iliac crest", { size: 9.5 })}`, "pelvis", shadow(sh));
  };

  /* استخوان‌های اندام تحتانی */
  A['leg-bones'] = () => {
    const fe = bone(150, 40, 214, 18, 17, { rot: 4 }), ti = bone(150, 236, 392, 15, 16), fi = bone(178, 242, 388, 6, 7);
    return svg(360, 460, `${title("Bones of the thigh, leg and foot")}
      ${fe.b}${ti.b}${fi.b}
      <ellipse cx="160" cy="222" rx="11" ry="13" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.4"/>
      <path d="M118 410 C118 398 140 394 160 400 L176 404 C190 404 194 418 186 424 L130 428 C118 428 114 420 118 410Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3"/>
      <path d="M118 420 C110 420 106 430 116 434 L134 432" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3"/>
      ${[0, 1, 2, 3, 4].map(i => limb(176 + i * 2, 406 + i * 4, 214 + i * 2, 410 + i * 6, 3.4, C.bone, C.boneLine) + limb(218 + i * 2, 410 + i * 6, 234 + i, 412 + i * 7, 3, C.bone, C.boneLine)).join('')}
      ${pin(150, 48, 60, 48)}${lab(40, 44, 'femur', "thigh bone", { size: 9.5 })}
      ${pin(162, 222, 290, 210)}${lab(312, 206, 'patella', "kneecap", { size: 9.5 })}
      ${pin(148, 320, 60, 320)}${lab(40, 316, 'tibia', "shinbone", { size: 9.5 })}
      ${pin(178, 316, 290, 300)}${lab(312, 296, 'fibula', "fibula", { size: 9.5 })}
      ${pin(184, 384, 290, 358)}${lab(312, 354, 'lateral malleolus', "lateral malleolus", { size: 9.5 })}
      ${pin(140, 386, 60, 370)}${lab(40, 366, 'medial malleolus', "medial malleolus", { size: 9.5 })}
      ${pin(118, 428, 60, 430)}${lab(40, 426, 'calcaneus', "the heel", { size: 9.5 })}
      ${pin(150, 404, 140, 452)}${t(108, 452, "tarsals", { size: 9.5 })}
      ${pin(204, 416, 290, 410)}${lab(312, 406, 'metatarsals', "sole of the foot", { size: 9.5 })}
      ${pin(236, 424, 290, 446)}${lab(312, 442, 'phalanges', "phalanges", { size: 9.5 })}`, "Bones of the lower limb", fe.d + ti.d + fi.d);
  };

  /* انحناهای غیرطبیعی ستون مهره */
  A['spine-curves'] = () => {
    const fig = (x, d, en, fa, c, back) => `<ellipse cx="${x + (back ? 0 : 4)}" cy="46" rx="13" ry="15" fill="${C.skin}" stroke="${C.skinLine}"/>
      <path d="${d}" stroke="${C.boneLine}" stroke-width="9" fill="none" stroke-linecap="round"/><path d="${d}" stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="5 1.6"/>
      ${lab(x, 206, en, fa, { size: 10, fill: INK })}`;
    return svg(360, 252, `${title("Curves of the spine: normal and abnormal")}
      ${fig(46, 'M48 64 C40 90 54 110 52 130 C50 150 40 162 46 186', 'normal', "normal (side view)", '#e3cc9c')}
      ${fig(134, 'M136 64 C126 80 160 110 150 140 C144 160 128 168 134 186', 'kyphosis', "hunchback", '#7fb2e5')}
      ${fig(222, 'M224 64 C216 90 232 112 230 126 C228 150 206 162 222 186', 'lordosis', "swayback", '#8fd18a')}
      ${fig(310, 'M310 64 C330 90 290 110 300 134 C308 152 324 164 310 186', 'scoliosis', "sideways curve (back view)", '#f2a4b8', true)}
      ${f(180, 246, "kyph/o = hump • lord/o = bent backward • scoli/o = crooked", { size: 9.5, fill: MUTED })}`, "Curves of the spine");
  };

  /* ================= دنیای ۳: مفاصل و حرکت ================= */
  /* سه نوع مفصل از نظر حرکت و بافت */
  A['joint-types'] = () => {
    const p1 = `<path d="M18 70 C40 52 80 50 104 66 L104 150 L18 150Z" fill="${C.bone}" stroke="${C.boneLine}"/><path d="M18 104 l10 -8 l10 10 l10 -10 l10 10 l10 -10 l10 10 l10 -10 l10 8" stroke="#8a7a5c" stroke-width="2.2" fill="none"/><path d="M18 104 L104 104" stroke="${C.bone}" stroke-width="0"/>`;
    const p2 = `<rect x="138" y="52" width="84" height="36" rx="8" fill="${C.bone}" stroke="${C.boneLine}"/><rect x="142" y="92" width="76" height="20" rx="8" fill="${C.cart}" stroke="${C.cartLine}"/><ellipse cx="180" cy="102" rx="16" ry="6" fill="#7cc3f0"/><rect x="138" y="116" width="84" height="36" rx="8" fill="${C.bone}" stroke="${C.boneLine}"/>`;
    const p3 = `<path d="M262 50 h60 v34 c0 14 -14 20 -30 20 c-16 0 -30 -6 -30 -20z" fill="${C.bone}" stroke="${C.boneLine}"/><path d="M262 154 h60 v-30 c0 -10 -14 -14 -30 -14 c-16 0 -30 4 -30 14z" fill="${C.bone}" stroke="${C.boneLine}"/>
      <path d="M266 96 c8 8 44 8 52 0 M266 118 c8 -6 44 -6 52 0" stroke="${C.cart}" stroke-width="5" fill="none"/><rect x="262" y="100" width="60" height="16" fill="${C.fluid}" opacity=".7"/><path d="M256 80 C246 100 246 120 256 140 M328 80 C338 100 338 120 328 140" stroke="${C.syn}" stroke-width="3" fill="none"/>`;
    return svg(360, 214, `${title("Three kinds of joint: immovable, slightly movable, freely movable")}
      <rect x="8" y="34" width="106" height="126" rx="12" fill="#f8f4ec"/>${p1}
      <rect x="127" y="34" width="106" height="126" rx="12" fill="#eef6fb"/>${p2}
      <rect x="246" y="34" width="106" height="126" rx="12" fill="#f4effb"/>${p3}
      ${lab(61, 176, 'synarthrosis', "immovable: skull suture", { size: 10 })}${lab(180, 176, 'amphiarthrosis', "slightly movable: disc, symphysis", { size: 10 })}${lab(299, 176, 'diarthrosis', "freely movable: synovial (knee)", { size: 10 })}
      ${f(61, 206, "fibrous", { size: 9, fill: '#8a6a2c', w: 800 })}${f(180, 206, "pertaining to cartilage", { size: 9, fill: '#1f6f9f', w: 800 })}${f(299, 206, "synovial", { size: 9, fill: '#6a3fb0', w: 800 })}`, "Types of joint");
  };

  /* مفصل سینوویال با همه اجزا */
  A['synovial-joint'] = () => {
    const tb = nid(), sh = nid();
    return svg(360, 320, `${title("A synovial (freely movable) joint and its parts")}
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
      ${pin(180, 136, 256, 112)}${lab(260, 106, 'articular cartilage', "smooth cartilage on bone ends", { size: 9, anchor: 'start' })}
      ${pin(170, 166, 256, 152)}${lab(260, 146, 'joint cavity', "cavity + synovial fluid", { size: 9, anchor: 'start' })}
      ${pin(182, 177, 256, 192)}${lab(260, 186, 'meniscus', "knee cartilage pad", { size: 9, anchor: 'start' })}
      ${pin(222, 200, 256, 228)}${lab(260, 222, 'synovial membrane', "membrane lining a joint", { size: 9, fill: '#6a3fb0', anchor: 'start' })}
      ${pin(248, 130, 256, 72)}${lab(260, 66, 'ligament', "band joining bone to bone", { size: 9, anchor: 'start' })}
      ${pin(232, 222, 256, 268)}${lab(260, 262, 'joint capsule', "joint capsule", { size: 9, anchor: 'start' })}
      ${pin(78, 160, 44, 196)}${lab(40, 208, 'bursa', "bursa", { size: 9.5 })}
      ${pin(64, 80, 34, 60)}${lab(32, 44, 'tendon', "tendon", { size: 9.5 })}
      ${f(160, 316, "Synovial fluid lubricates the joint; a bursa reduces tendon friction", { size: 9 })}`,
      "freely movable joint", `${linear(tb, C.boneHi, C.bone2, true)}${shadow(sh)}`);
  };

  /* انواع مفصل سینوویال */
  A['synovial-kinds'] = () => {
    const B = C.bone, L = C.boneLine;
    const box = (x, y, en, fa, ex, body) => `<rect x="${x}" y="${y}" width="108" height="98" rx="14" fill="#f4f8fb"/>${body}${lab(x + 54, y + 62, en, fa, { size: 9.5 })}${f(x + 54, y + 90, ex, { size: 8.5, fill: '#1e9e8f', w: 800 })}`;
    return svg(360, 248, `${title("The shape of a joint decides the kind of movement")}
      ${box(8, 30, 'ball-and-socket', "ball and socket", "hip, shoulder", `<path d="M30 40 C30 72 86 72 86 40" fill="${B}" stroke="${L}" stroke-width="1.4"/><circle cx="58" cy="44" r="14" fill="${B}" stroke="${L}" stroke-width="1.4"/><path d="M58 58 L64 70" stroke="${L}" stroke-width="10" stroke-linecap="round"/><path d="M58 58 L64 70" stroke="${B}" stroke-width="8" stroke-linecap="round"/>`)}
      ${box(126, 30, 'hinge', "hinge", "elbow, knee", `<rect x="148" y="38" width="64" height="16" rx="8" fill="${B}" stroke="${L}"/><path d="M162 54 v12 h36 v-12" fill="${B}" stroke="${L}"/><circle cx="180" cy="46" r="4" fill="${L}"/>`)}
      ${box(244, 30, 'pivot', "pivot", "atlas and axis", `<rect x="290" y="36" width="12" height="34" rx="5" fill="${B}" stroke="${L}"/><ellipse cx="296" cy="50" rx="24" ry="8" fill="none" stroke="${L}" stroke-width="5"/><ellipse cx="296" cy="50" rx="24" ry="8" fill="none" stroke="${B}" stroke-width="3"/>`)}
      ${box(67, 136, 'saddle', "saddle", "base of the thumb", `<path d="M90 166 C104 152 130 152 144 166 L144 176 H90Z" fill="${B}" stroke="${L}"/><path d="M96 160 C110 172 124 172 138 160 L138 146 H96Z" fill="${B}" stroke="${L}"/>`)}
      ${box(185, 136, 'gliding', "gliding", "between the wrist bones", `<rect x="206" y="146" width="30" height="24" rx="6" fill="${B}" stroke="${L}"/><rect x="238" y="148" width="30" height="24" rx="6" fill="${B}" stroke="${L}"/><path d="M226 178 h22" stroke="#1e9e8f" stroke-width="2"/>`)}`, "Types of synovial joint");
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
    return svg(360, 232, `${title("Flexion and extension of the elbow")}
      ${e1.b}${e2.b}
      <path d="M86 112 A20 20 0 0 1 86 150" stroke="#3f7fbf" stroke-width="2" fill="none"/>${t(96, 136, '180°', { size: 10, anchor: 'start', fill: '#1f5f9f' })}
      <path d="M220 130 A22 22 0 0 0 240 100" stroke="#c2413a" stroke-width="2" fill="none"/>
      ${curve(m, 'M300 166 C320 120 300 80 270 66', '#c2413a', 2.2)}
      ${lab(80, 196, 'extension', "extension: the angle increases", { size: 10.5, fill: '#1f5f9f' })}
      ${lab(256, 196, 'flexion', "flexion: the angle decreases", { size: 10.5, fill: '#a8352f' })}
      ${f(180, 226, "hyperextension = extending beyond the normal", { size: 9 })}`, "Flexion and extension", marker(m, '#c2413a'));
  };

  /* ابداکشن، اداکشن، چرخش و حرکت دورانی */
  A['abd-add'] = () => {
    const m = nid(), n = nid();
    const fig = mannequin(110, 34, 0.8, { fill: C.skin });
    return svg(360, 260, `${title("Abduction and adduction, rotation and circumduction")}
      ${fig}
      <path d="M140 76 L196 52" stroke="${C.skinLine}" stroke-width="13" stroke-linecap="round" opacity=".55"/><path d="M140 76 L196 52" stroke="${C.skin}" stroke-width="10.5" stroke-linecap="round" opacity=".8"/>
      ${curve(m, 'M158 152 C186 132 198 102 196 72', '#c2413a', 2.4)}${curve(n, 'M206 70 C214 104 200 136 168 158', '#3f7fbf', 2.4, true)}
      ${lab(232, 92, 'abduction', "moving away from the midline (ab-)", { size: 10, fill: '#a8352f', anchor: 'start' })}
      ${lab(232, 140, 'adduction', "moving toward the midline (ad-)", { size: 10, fill: '#1f5f9f', anchor: 'start' })}
      <ellipse cx="290" cy="208" rx="30" ry="9" fill="none" stroke="#7b5cd6" stroke-width="2" stroke-dasharray="4 3"/><path d="M290 172 L270 206 M290 172 L310 206" stroke="#7b5cd6" stroke-width="1.4"/>
      ${lab(290, 236, 'circumduction', "circular movement (cone-shaped)", { size: 10, fill: '#5b3fb0' })}
      ${f(110, 252, "rotation = turning a bone around its own axis", { size: 9 })}`, "Abduction and adduction", `${marker(m, '#c2413a')}${marker(n, '#3f7fbf')}`);
  };

  /* پرونیشن و سوپینیشن */
  A['pron-sup'] = () => {
    const hand = (x, palmUp) => `<rect x="${x - 14}" y="48" width="28" height="70" rx="12" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.3"/>
      <path d="M${x - 22} 118 C${x - 26} 150 ${x + 26} 150 ${x + 22} 118 Z" fill="${palmUp ? '#fbe0cc' : '#efc1a0'}" stroke="${C.skinLine}" stroke-width="1.3"/>
      ${[-14, -5, 4, 13].map(d => `<rect x="${x + d - 4}" y="140" width="8" height="${d === -14 || d === 13 ? 18 : 24}" rx="4" fill="${palmUp ? '#fbe0cc' : '#efc1a0'}" stroke="${C.skinLine}"/>`).join('')}
      ${palmUp ? `<path d="M${x - 10} 126 q10 8 20 0" stroke="#d9a988" fill="none"/>` : `<rect x="${x - 10}" y="150" width="5" height="5" rx="1.5" fill="#fff" opacity=".8"/><rect x="${x + 1}" y="156" width="5" height="5" rx="1.5" fill="#fff" opacity=".8"/>`}`;
    return svg(360, 214, `${title("Pronation and supination of the forearm")}
      ${hand(90, true)}${hand(270, false)}
      
      ${lab(90, 190, 'supination', "palm facing up", { size: 10.5, fill: '#1e9e8f' })}${lab(270, 34, 'pronation', "palm facing down", { size: 10.5, fill: '#a8352f' })}
      ${f(180, 108, "The radius rotates over the ulna", { size: 9.5 })}${f(180, 124, "“Hold a bowl of soup in your palm”", { size: 9, fill: '#1e9e8f', w: 700 })}`, "Pronation and supination");
  };

  /* حرکت‌های مچ پا */
  A['foot-moves'] = () => {
    const m = nid();
    const foot = (x, y, ang) => `<g transform="rotate(${ang} ${x} ${y})"><rect x="${x - 10}" y="${y - 70}" width="20" height="72" rx="9" fill="${C.skin}" stroke="${C.skinLine}"/><path d="M${x - 12} ${y - 4} C${x - 14} ${y + 14} ${x + 54} ${y + 14} ${x + 60} ${y + 4} C${x + 62} ${y - 6} ${x + 30} ${y - 12} ${x + 10} ${y - 12} Z" fill="${C.skin}" stroke="${C.skinLine}"/></g>`;
    const sole = (x, ang, c) => `<g transform="rotate(${ang} ${x} 170)"><rect x="${x - 9}" y="110" width="18" height="44" rx="8" fill="${C.skin}" stroke="${C.skinLine}"/><ellipse cx="${x}" cy="166" rx="16" ry="12" fill="${C.skin}" stroke="${C.skinLine}"/><path d="M${x - 12} 176 h24" stroke="${c}" stroke-width="3"/></g>`;
    return svg(360, 236, `${title("Ankle movements")}
      ${foot(60, 104, -14)}${foot(150, 104, 18)}
      ${curve(m, 'M92 70 C100 60 110 58 118 62', '#1e9e8f', 2)}${curve(m, 'M182 112 C186 124 182 132 176 138', '#c2413a', 2)}
      ${lab(70, 132, 'dorsiflexion', "toes up", { size: 10, fill: '#137568' })}${lab(176, 158, 'plantar flexion', "toes down", { size: 10, fill: '#a8352f' })}
      ${sole(262, -16, '#3f7fbf')}${sole(322, 16, '#c2413a')}
      ${lab(256, 206, 'inversion', "sole turned in", { size: 10, fill: '#1f5f9f' })}${lab(326, 206, 'eversion', "sole turned out", { size: 10, fill: '#a8352f' })}`, "Ankle movements", marker(m, LINE));
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
    return svg(360, 252, `${title("Healthy joint, osteoarthritis and rheumatoid arthritis")}
      ${j(62, 0)}${j(180, 1)}${j(298, 2)}
      ${lab(62, 222, 'normal', "smooth cartilage and enough space", { size: 10, fill: '#1f5f9f' })}
      ${lab(180, 222, 'osteoarthritis (OA)', "worn cartilage, bone spurs", { size: 10, fill: '#8a5a20' })}
      ${lab(298, 222, 'rheumatoid arthritis', "inflamed synovial lining, erosion", { size: 10, fill: '#a8352f' })}`, "Arthritis");
  };

  /* نقرس در شست پا */
  A['gout-toe'] = () => svg(360, 210, `${title("Gout: uric acid crystals in the big-toe joint")}
      <path d="M30 150 C30 110 90 96 150 100 C200 104 250 92 290 96 C320 100 330 120 320 136 C312 150 290 154 260 154 L60 166 C40 166 30 160 30 150Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>
      <ellipse cx="270" cy="118" rx="30" ry="24" fill="#e5675e" opacity=".55"/><ellipse cx="270" cy="118" rx="16" ry="12" fill="#c2413a" opacity=".5"/>
      <circle cx="96" cy="120" r="48" fill="#fff" stroke="#c2413a" stroke-width="2"/>
      ${[[-30, -10, 20], [-14, 14, -30], [6, -22, 60], [20, 8, -10], [-6, 0, 40], [10, 24, 80]].map(p => `<path d="M${96 + p[0]} ${120 + p[1]} l14 0" stroke="#e9c46a" stroke-width="3" stroke-linecap="round" transform="rotate(${p[2]} ${96 + p[0]} ${120 + p[1]})"/>`).join('')}
      <path d="M140 108 L240 112" stroke="#c2413a" stroke-width="1.4" stroke-dasharray="4 3"/>
      ${lab(96, 186, 'uric acid crystals', "needle-shaped uric acid crystals", { size: 10 })}
      ${lab(278, 180, 'gouty arthritis', "hot, red, painful joint", { size: 10, fill: '#a8352f' })}`, "uric acid arthritis");

  /* ================= دنیای ۴: عضلات ================= */
  /* سه نوع بافت عضله */
  A['muscle-types'] = () => {
    const sk = [0, 1, 2].map(i => `<rect x="14" y="${44 + i * 30}" width="96" height="24" rx="12" fill="${C.musc}" stroke="${C.musc2}"/>${Array.from({ length: 15 }, (_, k) => `<path d="M${20 + k * 6} ${46 + i * 30} v20" stroke="${C.musc2}" stroke-width="1.2" opacity=".6"/>`).join('')}<ellipse cx="${30 + i * 20}" cy="${46 + i * 30}" rx="5" ry="2.4" fill="#6a1f2a"/><ellipse cx="${80 - i * 10}" cy="${66 + i * 30}" rx="5" ry="2.4" fill="#6a1f2a"/>`).join('');
    const sm = [[146, 52], [176, 64], [206, 52], [150, 92], [182, 104], [212, 92], [160, 128], [196, 132]].map(p => `<path d="M${p[0] - 24} ${p[1]} Q${p[0]} ${p[1] - 10} ${p[0] + 24} ${p[1]} Q${p[0]} ${p[1] + 10} ${p[0] - 24} ${p[1]}Z" fill="#f0a6a0" stroke="#c76f68"/><ellipse cx="${p[0]}" cy="${p[1]}" rx="5" ry="2.2" fill="#6a1f2a"/>`).join('');
    const ca = `<path d="M252 50 H346 V70 H316 L300 86 L316 102 H346 V122 H252 V102 H282 L298 86 L282 70 H252Z" fill="${C.musc}" stroke="${C.musc2}"/>${Array.from({ length: 15 }, (_, k) => `<path d="M${256 + k * 6} 52 v16 M${256 + k * 6} 104 v16" stroke="${C.musc2}" stroke-width="1.2" opacity=".6"/>`).join('')}<path d="M300 52 v16 M300 104 v16" stroke="#fff" stroke-width="3"/><ellipse cx="272" cy="60" rx="4.5" ry="2.4" fill="#6a1f2a"/><ellipse cx="326" cy="112" rx="4.5" ry="2.4" fill="#6a1f2a"/><path d="M252 132 H346 V146 H252Z" fill="${C.musc}" stroke="${C.musc2}"/>`;
    return svg(360, 226, `${title("Three types of muscle tissue")}
      <rect x="6" y="32" width="112" height="128" rx="12" fill="#fdf1f0"/>${sk}
      <rect x="124" y="32" width="112" height="128" rx="12" fill="#fdf6f3"/>${sm}
      <rect x="242" y="32" width="112" height="128" rx="12" fill="#fdf1f0"/>${ca}
      ${lab(62, 178, 'skeletal', "skeletal: striated and voluntary", { size: 10.5 })}${lab(180, 178, 'smooth', "smooth: non-striated and involuntary", { size: 10.5 })}${lab(298, 178, 'cardiac', "cardiac: striated and involuntary", { size: 10.5 })}
      ${f(62, 212, "to bone", { size: 9, fill: '#a8352f', w: 800 })}${f(180, 212, "walls of the gut and vessels", { size: 9, fill: '#a8352f', w: 800 })}${f(298, 212, "wall of the heart (myocardium)", { size: 9, fill: '#a8352f', w: 800 })}`, "Types of muscle");
  };

  /* ساختار عضله اسکلتی */
  A['muscle-structure'] = () => {
    const g = nid();
    return svg(360, 244, `${title("From bone to muscle fibre")}
      <rect x="6" y="70" width="34" height="70" rx="10" fill="${C.bone}" stroke="${C.boneLine}"/>
      <path d="M40 98 L76 100 L76 110 L40 112Z" fill="${C.tendon}" stroke="${C.tendonLine}"/>
      <path d="M76 100 C110 60 190 56 226 86 L226 126 C190 156 110 150 76 110Z" fill="url(#${g})" stroke="${C.musc2}" stroke-width="1.4"/>
      <path d="M72 96 C108 52 194 48 232 82 M72 114 C108 158 194 162 232 130" stroke="#c9c2d6" stroke-width="2.4" fill="none"/>
      <ellipse cx="226" cy="106" rx="14" ry="20" fill="#f6d9d3" stroke="${C.musc2}"/>
      ${[[222, 96], [230, 104], [222, 112], [228, 118], [219, 104]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${C.musc}" stroke="#fff" stroke-width=".8"/>`).join('')}
      <path d="M232 98 L270 62 M232 116 L270 150" stroke="#9aa9b1" stroke-dasharray="3 3"/>
      <circle cx="306" cy="106" r="46" fill="#fbe9e7" stroke="${C.musc2}" stroke-width="1.4"/>
      ${[[292, 90], [316, 86], [300, 112], [326, 112], [286, 122], [312, 132]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="10" fill="${C.musc}" stroke="#fff"/>${[0, 1, 2].map(k => `<circle cx="${p[0] - 4 + k * 4}" cy="${p[1] - 2 + (k % 2) * 4}" r="2" fill="${C.muscL}"/>`).join('')}`).join('')}
      ${pin(22, 90, 22, 54)}${lab(22, 40, 'bone', "bone", { size: 9.5 })}
      ${pin(58, 104, 74, 176)}${lab(74, 190, 'tendon', "tendon", { size: 9.5 })}
      ${pin(150, 70, 150, 40)}${lab(186, 38, 'fascia', "fascia: the muscle’s covering", { size: 9.5, anchor: 'start' })}
      ${pin(150, 120, 150, 176)}${lab(150, 190, 'muscle belly', "muscle belly", { size: 9.5 })}
      ${pin(230, 104, 236, 196)}${lab(236, 210, 'fascicle', "fascicle", { size: 9.5 })}
      ${pin(316, 86, 318, 176)}${lab(318, 190, 'muscle fiber', "muscle fibre (one cell)", { size: 9.5 })}`, "Muscle structure", linear(g, C.muscL, C.musc2, true));
  };

  /* مبدأ و انتها: دوسر و سه‌سر بازو */
  A['origin-insertion'] = () => {
    const hu = bone(130, 48, 186, 14, 13), m = nid(), g = nid();
    return svg(360, 268, `${title("Origin, insertion and opposing muscle: biceps and triceps")}
      <path d="M80 36 L150 40 L120 110 Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.3" stroke-linejoin="round"/>
      ${hu.b}
      <path d="M134 192 L270 186" stroke="${C.boneLine}" stroke-width="12" stroke-linecap="round"/><path d="M134 192 L270 186" stroke="${C.bone}" stroke-width="9.5" stroke-linecap="round"/>
      <path d="M134 204 L266 200" stroke="${C.boneLine}" stroke-width="9" stroke-linecap="round"/><path d="M134 204 L266 200" stroke="${C.bone}" stroke-width="6.5" stroke-linecap="round"/>
      <path d="M144 60 C176 80 182 140 168 178 L160 186 C150 150 146 100 138 64Z" fill="url(#${g})" stroke="${C.musc2}"/>
      <path d="M144 58 L132 44 M164 180 L178 190" stroke="${C.tendonLine}" stroke-width="5" stroke-linecap="round"/>
      <path d="M118 66 C96 90 94 150 110 186 L120 196 C124 150 124 100 122 70Z" fill="#c76f68" stroke="${C.musc2}" opacity=".9"/>
      ${curve(m, 'M290 160 C300 120 286 90 262 74', '#1e9e8f', 2.4)}${f(318, 64, "Elbow flexion", { size: 9.5, fill: '#137568', w: 800 })}
      ${pin(134, 46, 60, 74)}${lab(46, 64, 'origin', "origin: fixed end", { size: 9.5, fill: '#1f5f9f' })}
      ${pin(178, 190, 200, 236)}${lab(216, 236, 'insertion', "insertion: on the moving bone (radius)", { size: 9.5, fill: '#a8352f' })}
      ${pin(172, 120, 232, 120)}${lab(236, 128, 'biceps', "biceps: prime mover", { size: 9.5, anchor: 'start' })}
      ${pin(104, 130, 56, 150)}${lab(44, 162, 'triceps', "triceps: antagonist", { size: 9.5 })}`, "Origin and insertion of a muscle", `${hu.d}${marker(m, '#1e9e8f')}${linear(g, C.muscL, C.musc2)}`);
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
    return svg(360, 380, `${title("Major muscles of the body from the front")}${b.body}
      ${L(-8, 44, 112, 66, 'sternocleidomastoid', "sternocleidomastoid", -1)}${L(-44, 64, 112, 118, 'deltoid', "deltoid (shoulder)", -1)}
      ${L(-47, 96, 112, 170, 'biceps brachii', "biceps brachii", -1)}${L(-24, 106, 112, 222, 'external oblique', "external oblique", -1)}
      ${L(-18, 196, 112, 296, 'quadriceps', "quadriceps", -1)}
      ${L(18, 66, 252, 70, 'pectoralis major', "pectoralis major", 1)}${L(4, 120, 252, 160, 'rectus abdominis', "rectus abdominis", 1)}
      ${L(20, 196, 252, 250, 'sartorius', "sartorius", 1)}${L(18, 240, 252, 330, 'tibialis anterior', "tibialis anterior", 1)}`, "Muscles of the front of the body");
  };
  A['muscles-back'] = () => {
    const b = muscleBody('back'), X = b.X, Y = b.Y;
    const L = (dx, dy, x2, y2, en, fa, side) => `${pin(X(dx), Y(dy), x2, y2)}${lab(side < 0 ? x2 - 4 : x2 + 4, y2 - 3, en, fa, { size: 9.5, anchor: side < 0 ? 'end' : 'start' })}`;
    return svg(360, 380, `${title("Major muscles of the body from the back")}${b.body}
      ${L(-10, 56, 112, 66, 'trapezius', "trapezius", -1)}${L(-47, 96, 112, 140, 'triceps brachii', "triceps brachii", -1)}
      ${L(-16, 150, 112, 210, 'gluteus maximus', "gluteus maximus", -1)}${L(-19, 236, 112, 300, 'gastrocnemius', "gastrocnemius", -1)}
      ${L(44, 64, 252, 70, 'deltoid', "deltoid", 1)}${L(22, 104, 252, 130, 'latissimus dorsi', "latissimus dorsi", 1)}
      ${L(18, 196, 252, 220, 'hamstrings', "hamstrings", 1)}${L(19, 252, 252, 320, 'Achilles tendon', "heel cord", 1)}`, "Muscles of the back of the body");
  };

  /* انواع فلج */
  A.paralysis = () => {
    const k = 0.56, top = 36;
    const fig = (cx, clip) => { const id = nid(); return { d: `<clipPath id="${id}">${clip}</clipPath>`, b: `${mannequin(cx, top, k, { fill: '#f2f2f2', line: '#b9c2c8' })}<g clip-path="url(#${id})">${mannequin(cx, top, k, { fill: '#e57373', line: '#b8403a' })}</g>` }; };
    const a = fig(62, `<rect x="62" y="0" width="60" height="200"/>`), b = fig(180, `<rect x="100" y="${top + 124 * k}" width="160" height="200"/>`), c = fig(298, `<rect x="230" y="${top + 46 * k}" width="140" height="200"/>`);
    return svg(360, 248, `${title("Paralysis: which part of the body is involved?")}${a.b}${b.b}${c.b}
      ${lab(62, 206, 'hemiplegia', "paralysis of one side (hemi-)", { size: 10 })}${lab(180, 206, 'paraplegia', "paralysis of both legs and lower body", { size: 10 })}${lab(298, 206, 'quadriplegia', "paralysis of all four limbs (quadri-)", { size: 10 })}
      ${f(180, 242, "‎-plegia = complete paralysis • ‎-paresis = weakness or partial paralysis (hemiparesis)", { size: 9.5, fill: INK, w: 700 })}`, "Types of paralysis", a.d + b.d + c.d);
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
      ['closed', "closed (simple)", (cx, cy) => `<rect x="${cx - 22}" y="${cy - 44}" width="44" height="86" rx="18" fill="none" stroke="${C.skinLine}" stroke-width="2"/>${gap(`M${cx - 8} ${cy} L${cx + 8} ${cy + 3}`)}`],
      ['open', "open (compound)", (cx, cy) => `${gap(`M${cx - 8} ${cy} L${cx + 8} ${cy - 6}`)}<path d="M${cx - 22} ${cy - 10} H${cx + 22}" stroke="${C.skinLine}" stroke-width="2"/><path d="M${cx + 2} ${cy - 6} L${cx + 14} ${cy - 22} L${cx + 6} ${cy - 4}Z" fill="${C.bone}" stroke="${C.boneLine}"/><circle cx="${cx + 14}" cy="${cy - 8}" r="4" fill="#c2413a" opacity=".7"/>`],
      ['greenstick', "greenstick (incomplete)", (cx, cy) => gap(`M${cx - 7} ${cy - 2} L${cx + 1} ${cy + 2}`)],
      ['transverse', "transverse", (cx, cy) => gap(`M${cx - 8} ${cy} L${cx + 8} ${cy}`)],
      ['oblique', "oblique", (cx, cy) => gap(`M${cx - 8} ${cy + 10} L${cx + 8} ${cy - 10}`)],
      ['spiral', "spiral", (cx, cy) => gap(`M${cx - 7} ${cy - 16} C${cx + 12} ${cy - 10} ${cx - 12} ${cy + 2} ${cx + 7} ${cy + 14}`)],
      ['comminuted', "comminuted", (cx, cy) => `${gap(`M${cx - 8} ${cy - 8} L${cx + 8} ${cy - 2} M${cx - 8} ${cy + 6} L${cx + 8} ${cy + 2} M${cx - 2} ${cy - 6} L${cx + 2} ${cy + 4}`)}<path d="M${cx + 12} ${cy - 2} l6 -3 l-1 6z M${cx - 14} ${cy + 4} l-6 2 l4 4z" fill="${C.bone}" stroke="${C.boneLine}"/>`],
      ['compression', "compression (vertebra)", (cx, cy) => `<rect x="${cx - 18}" y="${cy - 40}" width="36" height="20" rx="4" fill="${C.bone}" stroke="${C.boneLine}"/><path d="M${cx - 18} ${cy - 12} L${cx + 18} ${cy - 12} L${cx + 18} ${cy + 6} L${cx - 18} ${cy + 14}Z" fill="${C.bone2}" stroke="#c2413a"/><rect x="${cx - 18}" y="${cy + 22}" width="36" height="20" rx="4" fill="${C.bone}" stroke="${C.boneLine}"/><rect x="${cx - 16}" y="${cy - 18}" width="32" height="5" fill="${C.cart}"/><rect x="${cx - 16}" y="${cy + 15}" width="32" height="5" fill="${C.cart}"/>`]
    ];
    const ts = list.slice(0, 7).map((l, i) => tile(i, l[0], l[1], l[2]));
    const t7 = (() => { const x = 6 + 3 * 88, y = 170; return `<rect x="${x}" y="${y}" width="84" height="132" rx="12" fill="#f6f4fb"/>${list[7][2](x + 42, y + 52)}${lab(x + 42, y + 110, list[7][0], list[7][1], { size: 9.5 })}`; })();
    return svg(360, 310, `${title("Types of fracture")}${ts.map(x => x.b).join('')}${t7}`, "Types of fracture", ts.map(x => x.d).join(''));
  };

  /* مراحل جوش‌خوردن شکستگی */
  A['fracture-healing'] = () => {
    const step = (i, en, fa, inner) => {
      const x = 8 + i * 88; const a = bone(x + 40, 40, 96, 16, 13), b = bone(x + 40, 106, 160, 16, 13);
      return { d: a.d + b.d, b: `${a.b}${b.b}${inner(x + 40)}${lab(x + 40, 184, en, fa, { size: 9.5 })}${i < 3 ? `<path d="M${x + 76} 100 h10" stroke="${LINE}" stroke-width="2"/><path d="M${x + 84} 96 l4 4 l-4 4" stroke="${LINE}" stroke-width="2" fill="none"/>` : ''}` };
    };
    const s = [
      step(0, 'hematoma', "blood clot", cx => `<ellipse cx="${cx}" cy="101" rx="16" ry="9" fill="#9c2f3f"/>`),
      step(1, 'soft callus', "soft callus (cartilage)", cx => `<ellipse cx="${cx}" cy="101" rx="17" ry="12" fill="${C.cart}" stroke="${C.cartLine}"/>`),
      step(2, 'bony callus', "bony callus", cx => `<ellipse cx="${cx}" cy="101" rx="16" ry="12" fill="${C.spongy}" stroke="${C.boneLine}"/>${[-6, 0, 6].map(d => `<circle cx="${cx + d}" cy="${101 + (d % 4)}" r="2" fill="${C.marrowR}"/>`).join('')}`),
      step(3, 'remodeling', "reconstruction", cx => `<rect x="${cx - 8}" y="92" width="16" height="18" fill="${C.bone}"/><path d="M${cx - 9} 101 h18" stroke="${C.bone2}" stroke-width="2"/>`)
    ];
    return svg(360, 228, `${title("A fracture heals in a few weeks")}${s.map(x => x.b).join('')}
      ${f(180, 222, "If it does not heal, nonunion; if it heals crooked, malunion", { size: 9.5 })}`, "Fracture healing", s.map(x => x.d).join(''));
  };

  /* روش‌های تثبیت */
  A.fixation = () => {
    const b1 = bone(60, 46, 176, 14, 13), b2 = bone(180, 46, 176, 14, 13), b3 = bone(300, 46, 176, 14, 13);
    const crack = cx => `<path d="M${cx - 7} 112 L${cx + 7} 108" stroke="#fff" stroke-width="3"/><path d="M${cx - 7} 112 L${cx + 7} 108" stroke="#c2413a" stroke-width="1"/>`;
    return svg(360, 236, `${title("Immobilising and fixing a fracture")}
      ${b1.b}${crack(60)}<rect x="34" y="64" width="52" height="96" rx="14" fill="#eef2f6" stroke="#9aa9b1" stroke-width="2" opacity=".92"/>${[76, 92, 108, 124, 140].map(y => `<path d="M36 ${y} h48" stroke="#c9d2d8"/>`).join('')}
      ${b2.b}${crack(180)}<rect x="186" y="74" width="9" height="70" rx="3" fill="#9aa9b1" stroke="#5b6b73"/>${[82, 96, 124, 138].map(y => `<path d="M170 ${y} h28" stroke="#5b6b73" stroke-width="3" stroke-linecap="round"/><circle cx="196" cy="${y}" r="3" fill="#77868e"/>`).join('')}
      ${b3.b}${crack(300)}${[82, 96, 124, 138].map(y => `<path d="M286 ${y} h50" stroke="#5b6b73" stroke-width="2.6"/>`).join('')}<rect x="336" y="70" width="8" height="80" rx="3" fill="#7b5cd6"/>
      ${lab(60, 200, 'cast', "rigid cast", { size: 10.5 })}${lab(180, 200, 'ORIF', "plate and screws (internal fixation)", { size: 10.5, sym: true })}${lab(300, 200, 'external fixation', "external fixation", { size: 10.5 })}
      ${f(180, 232, "Reduction always comes before fixation", { size: 9.5 })}`, "Fixation methods", b1.d + b2.d + b3.d);
  };

  /* تصویربرداری استخوان و مفصل */
  A.imaging = () => svg(360, 214, `${title("Imaging in orthopaedics: which one for what?")}
      ${card(8, 30, 108, 84, '#eef2f6', '🩻', 'X-ray', "Radiography", "fracture, dislocation")}
      ${card(126, 30, 108, 84, '#e6f0fb', '🌀', 'CT', "cross-sectional slices", "complex fracture")}
      ${card(244, 30, 108, 84, '#f3eafc', '🧲', 'MRI', "soft tissue", "disc, ligament, meniscus")}
      ${card(67, 122, 108, 84, '#fde8e6', '☢️', 'bone scan', "radioactive tracer imaging", "tumour, infection, hidden fracture")}
      ${card(185, 122, 108, 84, '#eef6e6', '📊', 'DXA', "bone density", "porous, brittle bones")}`, "Imaging");

  /* مقیاس T-score */
  A.tscore = () => {
    const X = v => 30 + (1 - v) * 60;
    return svg(360, 150, `${title("Interpreting the T-score in bone density testing (DXA)")}
      <rect x="${X(1)}" y="50" width="${X(-1) - X(1)}" height="26" rx="6" fill="#bfe8a0"/>
      <rect x="${X(-1)}" y="50" width="${X(-2.5) - X(-1)}" height="26" fill="#ffe08a"/>
      <rect x="${X(-2.5)}" y="50" width="${X(-4) - X(-2.5)}" height="26" rx="6" fill="#f6a39c"/>
      ${[1, 0, -1, -2, -2.5, -3, -4].map(v => `<path d="M${X(v)} 76 v6" stroke="${INK}"/>${t(X(v), 96, String(v).replace('-', '−'), { size: 10, sym: true })}`).join('')}
      ${lab(X(0), 120, 'normal', "normal", { size: 10, fill: '#3f8a05' })}${lab(X(-1.75), 120, 'osteopenia', "low bone mass", { size: 10, fill: '#a36b00' })}${lab(X(-3.25), 120, 'osteoporosis', "porous, brittle bones", { size: 10, fill: '#a8352f' })}`, "T-score scale");
  };

  /* گونیومتر روی آرنج */
  A.goniometer = () => {
    const e = armAt(120, 36, 115);
    return svg(360, 214, `${title("Goniometer: measuring the angle of joint motion (ROM)")}
      ${e.b}
      <circle cx="${e.ex}" cy="${e.ey}" r="30" fill="#ffffff" fill-opacity=".75" stroke="#1e9e8f" stroke-width="2"/>
      ${Array.from({ length: 13 }, (_, i) => { const a = Math.PI / 2 + i * Math.PI / 12; return `<path d="M${(e.ex + Math.cos(a) * 26).toFixed(1)} ${(e.ey - Math.sin(a) * 26).toFixed(1)} L${(e.ex + Math.cos(a) * 30).toFixed(1)} ${(e.ey - Math.sin(a) * 30).toFixed(1)}" stroke="#1e9e8f" stroke-width="1.2"/>`; }).join('')}
      <path d="M${e.ex} ${e.ey} L${e.ex} ${e.ey - 66}" stroke="#1e9e8f" stroke-width="5" stroke-linecap="round" opacity=".8"/>
      <path d="M${e.ex} ${e.ey} L${e.hx} ${e.hy}" stroke="#1e9e8f" stroke-width="5" stroke-linecap="round" opacity=".8"/>
      <circle cx="${e.ex}" cy="${e.ey}" r="4" fill="#c2413a"/>
      ${lab(270, 74, 'goniometer', "angle meter", { size: 11, fill: '#137568' })}
      ${f(270, 118, "pivot over the joint,", { size: 9.5, fill: INK })}${f(270, 134, "one arm along the fixed bone,", { size: 9.5, fill: INK })}${f(270, 150, "the other arm along the moving bone", { size: 9.5, fill: INK })}
      ${f(180, 204, "The result is recorded in degrees; for example, elbow ROM 0 to 150 degrees", { size: 9.5 })}`, "Goniometer");
  };

  /* سطح قطع عضو */
  A['amputation-levels'] = () => {
    const k = 1.1, cx = 180, top = 30;
    const X = d => cx + d * k, Y = d => top + d * k;
    const cut = (x1, y, x2, ab, en, side) => `<path d="M${X(x1)} ${Y(y)} L${X(x2)} ${Y(y)}" stroke="#c2413a" stroke-width="2.4" stroke-dasharray="5 3"/>${t(side < 0 ? 70 : 290, Y(y) + 4, ab, { size: 12, sym: true, fill: '#a8352f' })}${f(side < 0 ? 70 : 290, Y(y) + 18, en, { size: 9 })}<path d="M${side < 0 ? 92 : 268} ${Y(y)} L${side < 0 ? X(x1) - 4 : X(x2) + 4} ${Y(y)}" stroke="#9aa9b1"/>`;
    return svg(360, 340, `${title("Amputation level in the chart")}${mannequin(cx, top, k)}
      ${cut(-52, 96, -38, 'AE', "above the elbow", -1)}${cut(-58, 140, -44, 'BE', "below the elbow", -1)}
      ${cut(4, 196, 32, 'AK', "above the knee", 1)}${cut(10, 236, 28, 'BK', "below the knee", 1)}`, "Amputation level");
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
    id: 'lx', sym: 'Lx', name: "The Language of Bone and Muscle", short: "Language of Movement", sub: "What the locomotor system does and how its words are built: roots, prefixes, suffixes and directions",
    color: '#C2413A', dark: '#8E2A25', light: '#FBE7E3',
    levels: ["The locomotor system", "Main roots", "Prefixes and suffixes"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: دستگاه حرکتی ================= */
      {
        id: 'lx1', title: "206 Bones and 600 Muscles", icon: '🦴', items: [
          L("One system, two teams", `${fig('msk-parts', [], "Parts of the locomotor system")}An adult body has about <b>206 bones</b> and more than <b>600 skeletal muscles</b>. Bones, joints, cartilage and ligaments make up the <b>skeletal system</b>, and muscles and tendons the <b>muscular system</b>.<br>The two work together and share one name: the ${e('<b>musculoskeletal system</b>')}, or <b>musculoskeletal system</b>.${memo("musculo + skeletal: muscle first, then skeleton. Muscle provides the force and bone is the lever; without each other there is no movement.")}`),
          L("Tendon or ligament?", `Two strong white bands that are often confused:<br>• ${e('<b>tendon</b>')}: joins <b>muscle to bone</b>.<br>• ${e('<b>ligament</b>')}: joins <b>bone to bone</b> and keeps the joint stable.<br>• ${e('<b>cartilage</b>')}: a smooth, flexible cushion on the ends of bones in a joint.${vs(['tendon', "muscle to bone: the Achilles tendon"], ['ligament', "bone to bone: knee ligament"])}`),
          M("About how many bones does an adult body have?", ["206", "106", "306", "600"], "206 bones; 600 is roughly the number of skeletal muscles."),
          T("A tendon joins bone to bone.", false, "False; a tendon joins muscle to bone and a ligament joins bone to bone.", F('msk-parts', [])),
          M(`${e('<b>musculoskeletal system</b>')} means…`, ["bones, joints and muscles", "the muscular system only", "the neuromuscular system", "bones only"], "muscul/o (muscle) + skelet/o (skeleton)."),
          P("Match each part to its job", [['tendon', "muscle to bone"], ['ligament', "bone to bone"], ['cartilage', "smooth joint cushion"], ['muscle', "producing force and movement"]], "The four main parts of the locomotor system."),
          B("The place where two bones meet is called a ___.", ['joint', 'tendon', 'fascia'], "joint or articulation."),
          S("Spell the term for the band joining bone to bone", 'ligament', "It joins bone to bone.", 'liga…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: "Six Jobs of Bone and Muscle", icon: '🛡️', items: [
          L("The skeleton is more than scaffolding", `${fig('skel-functions', [], "Jobs of bone and muscle")}The musculoskeletal system has six main jobs:<br>1. <b>Support</b> and body shape<br>2. <b>Protection</b>: the skull guards the brain and the rib cage the heart and lungs<br>3. <b>Movement</b>: bone is the lever and muscle the force<br>4. <b>Blood cell formation</b> (${e('hematopoiesis')}) in the red bone marrow<br>5. <b>Mineral storage</b>: calcium and phosphorus<br>6. <b>Heat production</b> through muscle work`),
          L("Know the specialists", `${tbl([["specialist", "Job"], [e('orthopedist'), "bones, joints and muscles; orthopaedic surgeon"], [e('rheumatologist'), "arthritis and autoimmune joint diseases"], [e('podiatrist'), "diseases of the foot"], [e('physiatrist'), "physical medicine and rehabilitation"], [e('chiropractor'), "manual treatment of the spine"]])}${memo("orth/o means “straight” and ped/o “child”. Orthopaedics began as the science of straightening children’s crooked bones.")}${pearl("In a chart, the orthopaedic department is shortened to Ortho: “referral to Ortho” means referral to an orthopaedist.")}`),
          M("Where does blood cell formation take place?", ["red bone marrow", "yellow bone marrow", "smooth cartilage on bone ends", "tendon"], "Hematopoiesis takes place in the red marrow of spongy bone; yellow marrow is mostly fat."),
          M("Which mineral is stored in bone more than any other?", ["calcium", "Iron", "Sodium", "Iodine"], "Calcium (Ca) and phosphorus (P) make bone hard."),
          T("Muscles produce body heat by working.", true, "True; shivering is rapid muscle contraction to produce heat."),
          P("Match each specialist to their field", [['orthopedist', "bones and joints"], ['rheumatologist', "autoimmune arthritis"], ['podiatrist', "diseases of the foot"], ['physiatrist', "rehabilitation"]], "pod/o = foot; rheumat/o = watery flow (joint disease)."),
          B("The study of body movement is called ___.", ['kinesiology', 'myology', 'osteology'], "kinesi/o = movement."),
          S("Spell the term for the branch of medicine for bones and joints", 'orthopedics', "orth/o (straight) + ped/o (child) + -ics.", 'ortho…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: "The anatomy of a word", icon: '🧩', items: [
          L("A medical word is a puzzle", `${fig('wordparts', [], "Prefix + root + suffix")}Every medical word is built from a few pieces:<br>• the <b>root</b> (${e('root')}): the core meaning, such as ${e('oste')} = bone<br>• the <b>prefix</b> (${e('prefix')}): at the start of the word, such as ${e('inter-')} = between<br>• the <b>suffix</b> (${e('suffix')}): at the end of the word, such as ${e('-itis')} = inflammation<br>• the <b>combining vowel</b> (usually ${e('o')}): joins the root to the next piece: ${e('oste/o/porosis')}`),
          L("The golden rule of reading", `Start the meaning from the <b>suffix</b>, then the <b>prefix</b>, and finally the <b>root</b>:<br>${wb('arthr/o', '-itis')} → “inflammation of a joint”<br>${wb('inter-', 'vertebr/o', '-al')} → “pertaining to between the vertebrae”<br>${wb('oste/o', 'arthr/o', '-itis')} → “inflammation of bone and joint”${memo("If the suffix starts with a vowel, the combining vowel is dropped: arthr/o + -itis = arthritis, not arthroitis.")}`),
          M(`In ${e('<b>arthritis</b>')}, which is the suffix and what does it mean?`, ["‎-itis = inflammation", "‎-osis = abnormal condition", "‎-algia = pain", "‎-pathy = disease"], "arthritis = inflammation of a joint."),
          M(`${e('<b>osteopathy</b>')} means…`, ["any bone disease", "bone inflammation", "bone pain", "study of bones"], "oste/o + -pathy (disease)."),
          T("In arthralgia the combining vowel o is dropped because ‎-algia starts with a vowel.", true, "True; arthr + algia = joint pain."),
          W("Build a word meaning “inflammation of bone”", ['oste/o', '-itis'], ['my/o', '-algia', 'arthr/o'], 'oste/o + -itis = osteitis.'),
          O("Read intervertebral with the golden rule: put the pieces in reading order", ["‎-al: pertaining to", "inter-: between", "vertebr/o: vertebra", "result: pertaining to between the vertebrae"], "Suffix → prefix → root."),
          P("Match each piece to its type", [['inter-', "prefix"], ['vertebr/o', "root"], ['-al', "suffix"], ["the o in osteoporosis", "combining vowel"]], "Three main pieces + the combining vowel."),
          S("Spell the term for inflammation of a joint", 'arthritis', 'arthr/o + -itis.', 'arth…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲: ریشه‌های اصلی ================= */
      {
        id: 'lx4', title: "Three Pillars: Bone, Muscle, Joint", icon: '🏛️', items: [
          L("Three roots you’ll see everywhere", `${fig('root-trio', [], "Six basic roots")}${tbl([["root", "Meaning", "Example"], [e('oste/o'), "bone", e('osteitis')], [e('my/o, myos/o, muscul/o'), "muscle", e('myalgia, myositis')], [e('arthr/o, articul/o'), "joint", e('arthralgia, articular')]])}`),
          L("Three disease suffixes on three roots", `${tbl([["suffix", "Three words"], [e('-itis') + " inflammation", e('osteitis, myositis, arthritis')], [e('-algia') + " pain", e('ostealgia, myalgia, arthralgia')], [e('-pathy') + " disease", e('osteopathy, myopathy, arthropathy')]])}${memo("Three roots × three suffixes: change the root and keep the suffix; you learn 9 words at once!")}${pearl("Ostealgia is also called osteodynia; ‎-algia and ‎-dynia both mean pain.")}`),
          M(`${e('<b>myalgia</b>')} means…`, ["muscle pain", "muscle inflammation", "muscle weakness", "muscle disease"], "my/o (muscle) + -algia (pain)."),
          M("Which word means “inflammation of a muscle”?", ['myositis', 'myalgia', 'myopathy', 'osteitis'], "myos/o + -itis; the vowel in myos is kept."),
          T("Arthropathy means any joint disease.", true, 'arthr/o + -pathy.'),
          W("Build a word meaning “joint pain”", ['arthr/o', '-algia'], ['oste/o', '-itis', 'my/o'], 'arthr/o + -algia = arthralgia.'),
          P("Match each term to its meaning", [['osteitis', "bone inflammation"], ['myopathy', "muscle disease"], ['arthralgia', "joint pain"], ['ostealgia', "bone pain"]], "The 3 × 3 table."),
          B("The word ___ means “pertaining to a joint”.", ['articular', 'muscular', 'osseous'], 'articul/o + -ar.'),
          S("Spell the term for muscle pain", 'myalgia', 'my/o + -algia.', 'my…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: "Companion Roots: Cartilage, Tendon, Marrow", icon: '🧵', items: [
          L("Tissue roots", `${tbl([["root", "Meaning", "Example"], [e('chondr/o'), "firm shock-absorbing connective tissue", e('chondroma')], [e('ten/o, tend/o, tendin/o'), "tendon", e('tenotomy, tendinitis')], [e('ligament/o'), "band joining bone to bone", e('ligamentous')], [e('burs/o'), "fluid sac that cushions a joint", e('bursitis')], [e('fasci/o'), "fibrous band around muscles", e('fasciotomy')], [e('synovi/o'), "membrane lining a joint", e('synovitis')]])}`),
          L("Bone marrow or spinal cord?", `${e('<b>myel/o</b>')} has two meanings: <b>bone marrow</b> and <b>spinal cord</b>. The context tells you which:<br>${wb('oste/o', 'myel/o', '-itis')} → inflammation of bone and <b>bone marrow</b><br>${wb('myel/o', '-gram')} → contrast X-ray of the <b>spinal</b> canal${memo("tendin/o, with i, appears in tendinitis, and ten/o in tenotomy and tenorrhaphy; all three mean tendon.")}`),
          M(`${e('<b>chondroma</b>')} means…`, ["benign cartilage tumour", "inflammation of cartilage", "softening of cartilage", "removal of cartilage"], "chondr/o (cartilage) + -oma (tumour)."),
          M("Which root does not mean “tendon”?", ['fasci/o', 'ten/o', 'tend/o', 'tendin/o'], "fasci/o means fascia, the fibrous covering of a muscle."),
          T("In osteomyelitis, myel/o means spinal cord.", false, "False; in this word myel/o means bone marrow: inflammation of bone and bone marrow."),
          W("Build a word meaning “inflammation of a bursa”", ['burs/o', '-itis'], ['chondr/o', '-oma', 'ten/o'], 'burs/o + -itis = bursitis.'),
          P("Match each root to its meaning", [['chondr/o', "firm shock-absorbing connective tissue"], ['burs/o', "joint sac"], ['fasci/o', "fascia"], ['synovi/o', "membrane lining a joint"]], "Tissue roots."),
          B("Inflammation of a tendon is called ___.", ['tendinitis', 'tenonitis', 'fasciitis'], 'tendin/o + -itis.'),
          S("Spell the term for inflammation of the joint lining", 'synovitis', 'synov/o + -itis.', 'syno…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: "Directions on the body", icon: '🧭', items: [
          L("Proximal, Distal, Medial, Lateral", `${fig('directions', [], "Directions on a mannequin")}In orthopaedics the site of every injury is given with direction words:<br>• ${e('<b>proximal</b>')}: near the trunk; the elbow is proximal to the wrist.<br>• ${e('<b>distal</b>')}: far from the trunk; the fingers are distal to the wrist.<br>• ${e('<b>medial</b>')}: toward the midline of the body<br>• ${e('<b>lateral</b>')}: toward the side, away from the midline`),
          L("One side or both?", `${wb('bi-', 'later/o', '-al')} → both sides: “<b>bilateral</b> osteoarthritis of the knees” means both knees.<br>${wb('uni-', 'later/o', '-al')} → one side<br>${wb('anter/o', 'poster/o', '-ior')} → front to back; an ${e('AP')} radiograph sends the beam from front to back.${memo("Proximal as in proximity (nearness); distal as in distance.")}${pearl("In a radiology report, “AP and lateral views” means one image from the front and one from the side.")}`),
          M("Which sentence is correct?", ["The knee is proximal to the ankle", "The wrist is proximal to the elbow", "The thumb is proximal to the wrist", "The fingers are proximal to the shoulder"], "The knee is closer to the trunk than the ankle.", null, F('directions', [])),
          M(`${e('<b>lateral</b>')} means…`, ["toward the side, away from the midline", "toward the midline", "nearer the trunk", "from front to back"], "later/o = side."),
          T("A distal radius fracture is a fracture of the end of the radius near the wrist.", true, "distal = far from the trunk; the lower end of the radius is next to the wrist (as in a Colles fracture)."),
          P("Match each term to its meaning", [['proximal', "nearer the trunk"], ['distal', "farther from the trunk"], ['medial', "toward the midline"], ['bilateral', "on both sides"]], "Four direction words."),
          W("Build the term that means “on one side”", ['uni-', 'later/o', '-al'], ['bi-', 'medi/o', '-ic'], 'uni- + later/o + -al = unilateral.'),
          B("The abbreviation ___ means “anteroposterior” in a radiology report.", ['AP', 'PA', 'LAT'], 'anteroposterior.'),
          S("Spell the term for “on both sides”", 'bilateral', 'bi- + later/o + -al.', 'bila…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳: پیشوندها و پسوندها ================= */
      {
        id: 'lx7', title: "Prefixes of Place, Number and Direction", icon: '📍', items: [
          L("Position prefixes", `${tbl([["prefix", "Meaning", "Example"], [e('inter-'), "between", e('intervertebral, intercostal')], [e('intra-'), "within", e('intramuscular')], [e('sub-'), "below", e('subscapular')], [e('supra-'), "above", e('suprapatellar')], [e('peri-'), "around", e('periosteum')], [e('epi-'), "on, over", e('epiphysis')]])}`),
          L("Prefixes of number and movement", `${tbl([["prefix", "Meaning", "Example"], [e('uni-, bi-, tri-, quadri-'), "One, two, three, four", e('biceps, quadriceps')], [e('hemi-'), "half", e('hemiplegia')], [e('poly-'), "many", e('polymyositis')], [e('ab-'), "away from", e('abduction')], [e('ad-'), "toward", e('adduction')]])}${vs(['inter-', "between: intercostal = between the ribs"], ['intra-', "within: intramuscular = into a muscle"])}${memo("The biceps has two heads, the triceps three and the quadriceps four; a muscle’s name tells you how many heads it has.")}`),
          M(`${e('<b>intramuscular</b>')} means…`, ["into the muscle", "between muscles", "under a muscle", "on a muscle"], "intra- (within) + muscul/o + -ar. An IM injection goes into a muscle."),
          M("Which prefix means “above”?", ['supra-', 'sub-', 'inter-', 'peri-'], "suprapatellar = above the kneecap."),
          T("The periosteum is a membrane that surrounds the bone.", true, "peri- (around) + oste/o + -um."),
          W("Build a word meaning “pertaining to between the ribs”", ['inter-', 'cost/o', '-al'], ['intra-', 'stern/o', '-itis'], 'inter- + cost/o + -al = intercostal.'),
          P("Match each prefix to its meaning", [['hemi-', "half"], ['quadri-', "four"], ['poly-', "many"], ['ab-', "away from"]], "Prefixes of number and direction."),
          B("The three-headed arm muscle is called the ___.", ['triceps', 'biceps', 'quadriceps'], "tri- = three."),
          S("Spell the term for within a muscle", 'intramuscular', 'intra- + muscul/o + -ar.', 'intra…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: "Suffixes Special to the Locomotor System", icon: '✂️', items: [
          L("Suffixes of disease and condition", `${tbl([["suffix", "Meaning", "Example"], [e('-porosis'), "porous", e('osteoporosis')], [e('-malacia'), "softening", e('osteomalacia')], [e('-asthenia'), "weakness", e('myasthenia')], [e('-trophy'), "growth, nourishment", e('atrophy')], [e('-plegia'), "paralysis", e('paraplegia')], [e('-listhesis'), "slipping", e('spondylolisthesis')]])}`),
          L("Surgery and cell suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-blast'), "forming cell", e('osteoblast')], [e('-clast'), "breaking", e('osteoclast')], [e('-desis'), "fusing", e('arthrodesis')], [e('-centesis'), "puncture to draw fluid", e('arthrocentesis')], [e('-clasia'), "surgical breaking", e('osteoclasia')], [e('-rrhaphy'), "stitch", e('tenorrhaphy')]])}${memo("A blast builds (Build), a clast breaks down (Crash): b for building, c for crashing.")}`),
          M(`${e('<b>arthrodesis</b>')} means…`, ["surgical fusion of a joint", "drawing fluid from a joint", "cutting into a joint", "joint replacement"], "arthr/o + -desis (fusion)."),
          M("Which suffix means “weakness”?", ['‎-asthenia', '‎-trophy', '‎-plegia', '‎-malacia'], "myasthenia = muscle weakness."),
          T("An osteoclast is a cell that builds new bone.", false, "False; an osteoclast breaks down old bone. The builder is the osteoblast.", F('bone-cells', [])),
          W("Build a word meaning “suture of a tendon”", ['ten/o', '-rrhaphy'], ['-desis', 'my/o', '-plegia'], 'ten/o + -rrhaphy = tenorrhaphy.'),
          P("Match each suffix to its meaning", [['-malacia', "softening"], ['-plegia', "paralysis"], ['-listhesis', "slipping"], ['-centesis', "puncture to draw fluid"]], "Special suffixes."),
          B("Softening of bone is called ___.", ['osteomalacia', 'osteoporosis', 'osteopenia'], 'oste/o + -malacia.'),
          S("Spell the term for surgical fusion of a joint", 'arthrodesis', 'arthr/o + -desis.', 'arthro…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: "Look-alike Traps", icon: '🪤', items: [
          L("One letter, a world of difference", `${fig('twins', [], "my/o and myel/o; ilium and ileum")}${vs(['my/o', "muscle: myalgia"], ['myel/o', "bone marrow or spinal cord: myeloma"])}${vs(['ilium', "hip bone (ili/o)"], ['ileum', "last part of the small intestine (ile/o)"])}`),
          L("Other twins", `${vs(['radi/o', "the radius bone, and also rays: radiography"], ['uln/o', "the ulna (little-finger side)"])}${vs(['‎-plegia', "complete paralysis: hemiplegia"], ['‎-paresis', "weakness or partial paralysis: hemiparesis"])}${vs(['‎-tomy', "cutting: osteotomy"], ['‎-ectomy', "removal: ostectomy"])}${memo("ilium with i is in the hip (hIp); ileum with e is in the gut (Eat).")}`),
          M(`${e('<b>myeloma</b>')} means…`, ["tumour of bone marrow cells", "muscle tumour", "muscle pain", "inflammation of the spinal cord"], "myel/o (bone marrow) + -oma; different from my/o (muscle)."),
          M("Which word relates to the hip bone?", ['ilium', 'ileum', 'ileus', 'ileitis'], "ilium with i = hip; the others relate to the gut."),
          T("Hemiparesis means complete paralysis of one side of the body.", false, "False; ‎-paresis is weakness or partial paralysis. Complete paralysis of one side is hemiplegia."),
          M("What is the difference between osteotomy and ostectomy?", ["The first is cutting bone, the second removing bone", "Both are removal of bone", "The first is inflammation, the second incision", "The first is repair, the second breaking"], "-tomy is incision and -ectomy removal."),
          P("Match each pair correctly", [['my/o', "muscle"], ['myel/o', "bone marrow"], ['ilium', "hip bone"], ['ileum', "small intestine"]], "Deceptive twins."),
          B("Complete paralysis of both legs is called ___.", ['paraplegia', 'paraparesis', 'hemiplegia'], "‎-plegia = complete paralysis."),
          S("Spell the term for a tumour of bone marrow cells", 'myeloma', 'myel/o + -oma.', 'myel…'),
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
    id: 'bn', sym: 'Bn', name: "Bone", short: "Bone", sub: "Bone cells, tissue and structure, shapes and landmarks, and diseases such as osteoporosis and osteomalacia",
    color: '#B07D2E', dark: '#7F5719', light: '#F8EEDC',
    levels: ["Bone tissue and structure", "Shapes and landmarks", "Bone diseases"],
    gens: EA.genIds('bn'),
    lessons: [
      /* ================= سطح ۱: بافت و ساختار ================= */
      {
        id: 'bn1', title: "Bone Is Alive", icon: '🧬', items: [
          L("Three cells, one workshop", `${fig('bone-cells', [], "Three bone cells")}Bone is a living tissue that is always being built and broken down:<br>• ${e('<b>osteoblast</b>')}: the <b>building</b> cell; it makes new tissue.<br>• ${e('<b>osteocyte</b>')}: the <b>mature</b> cell; it lives in a small space inside the bone and maintains the tissue.<br>• ${e('<b>osteoclast</b>')}: the <b>destroying</b> cell; it eats old tissue and returns calcium to the blood.`),
          L("From cartilage to bone", `The fetal skeleton is made of <b>cartilage</b> at first and is gradually replaced by bone; this process is called ${e('<b>ossification</b>')} or ${e('<b>osteogenesis</b>')}.<br>Bone’s hardness comes from the minerals <b>calcium</b> (${e('Ca')}) and <b>phosphorus</b> (${e('P')}) and its flexibility from <b>collagen</b> fibres.${memo("Remember blast with Build and clast with Crash; cyte means a resident cell.")}${pearl("In osteoporosis the osteoclasts outpace the osteoblasts; bisphosphonate drugs slow these osteoclasts down.")}`),
          M("Which cell makes new bone?", ['osteoblast', 'osteoclast', 'osteocyte', 'chondrocyte'], "‎-blast = forming cell.", null, F('bone-cells', [])),
          M(`What does an ${e('<b>osteoclast</b>')} do?`, ["It breaks down and absorbs old bone tissue", "It makes new tissue", "It makes cartilage", "It makes blood"], "‎-clast = breaking."),
          T("Ossification means cartilage being replaced by bone.", true, "True; the process of bone formation."),
          P("Match each cell to its job", [['osteoblast', "building bone"], ['osteocyte', "maintaining tissue"], ['osteoclast', "breaking down old bone"], ['chondrocyte', "cartilage cell"]], "‎-blast, ‎-cyte, ‎-clast."),
          W("Build a word meaning “mature bone cell”", ['oste/o', '-cyte'], ['-blast', 'chondr/o', '-clast'], 'oste/o + -cyte = osteocyte.'),
          B("The abbreviation ___ means calcium.", ['Ca', 'C', 'Cl'], 'Calcium.'),
          S("Spell the term for a bone-forming cell", 'osteoblast', 'oste/o + -blast.', 'osteob…'),
          N('t2f:bn')
        ]
      },
      {
        id: 'bn2', title: "Anatomy of a long bone", icon: '📏', items: [
          L("The Head, Neck and Shaft of a Bone", `${fig('long-bone', [], "A long bone in lengthwise section")}${tbl([["Section", "Meaning"], [e('diaphysis'), "shaft of a long bone"], [e('epiphysis'), "the wide ends"], [e('metaphysis'), "the flaring region between the shaft and the end"], [e('medullary cavity'), "the cavity in the shaft, full of yellow marrow"], [e('articular cartilage'), "smooth cartilage on the bone end in a joint"]])}`),
          L("Two coverings", `${wb('peri-', 'oste/o', '-um')} → <b>periosteum</b>: a tough fibrous membrane covering the <b>outside</b> of the bone, with vessels and nerves. It is everywhere except the joint surfaces.<br>${wb('endo-', 'oste/o', '-um')} → <b>endosteum</b>: a thin membrane lining the <b>inside</b> of the marrow cavity.${memo("dia- means “through”: the diaphysis runs through the bone. epi- means “upon”: the epiphyses sit upon its two ends.")}${pearl("Most of the severe pain of a fracture comes from the torn periosteum, because it is full of nerves.")}`),
          M("What is the shaft of a long bone called?", ['diaphysis', 'epiphysis', 'metaphysis', 'periosteum'], 'dia- + -physis.', null, F('long-bone', [])),
          M(`Where is the ${e('<b>periosteum</b>')}?`, ["A fibrous membrane on the outer surface of the bone", "Inside the marrow cavity", "On the end of the bone in a joint", "Between two vertebrae"], "peri- = around."),
          T("In adults, the marrow cavity of a long bone’s shaft holds mostly yellow marrow (fat).", true, "Yellow marrow is in the medullary cavity; red marrow is in the spongy bone of the ends."),
          O("Put the parts of the femur in order from top to bottom", ["upper epiphysis", 'metaphysis', 'diaphysis', "lower epiphysis"], "End, flaring region, shaft, the other end."),
          P("Match each part to its location", [['diaphysis', "shaft"], ['epiphysis', "end of the bone"], ['endosteum', "lining of the cavity"], ['articular cartilage', "joint surface"]], "Anatomy of a long bone."),
          W("Build a word meaning “membrane around the bone”", ['peri-', 'oste/o', '-um'], ['endo-', '-itis', 'chondr/o'], 'peri- + oste/o + -um = periosteum.'),
          S("Spell the term for the shaft of a long bone", 'diaphysis', 'dia- + -physis.', 'dia…'),
          N('f2t:bn')
        ]
      },
      {
        id: 'bn3', title: "Compact and Spongy; Red and Yellow Marrow", icon: '🧽', items: [
          L("Two kinds of tissue", `${fig('bone-tissue', [], "Compact and spongy bone")}• ${e('<b>compact bone</b>')} (dense or cortical): the hard outer layer, made of cylinders called <b>osteons</b>, each with a ${e('<b>haversian canal</b>')} carrying vessels and nerves at its centre.<br>• ${e('<b>cancellous bone</b>')} (spongy): inside the ends of bones; a network of thin plates (${e('trabeculae')}) with red marrow between them.`),
          L("Red marrow, yellow marrow", `${fig('bone-section', [], "A real lengthwise section of the femur")}• ${e('<b>red bone marrow</b>')}: blood formation (${e('hematopoiesis')}); red cells, white cells and platelets.<br>• ${e('<b>yellow bone marrow</b>')}: mostly fat; in the marrow cavity of adult long bones.${wb('hemat/o', '-poiesis')} → making blood${memo("A haversian canal is like a water pipe running through a tree trunk: rings around it and vessels inside.")}`),
          M("Where does blood formation take place?", ["Red marrow in spongy bone", "Yellow marrow in the marrow cavity", "Compact bone", 'periosteum'], 'red marrow = hematopoiesis.', null, F('bone-tissue', [])),
          M("What are the thin plates of spongy bone called?", ['trabeculae', 'osteons', 'condyles', 'fissures'], "trabeculae = little beams."),
          T("Compact bone is also called cortical bone.", true, "cortic/o = outer layer (cortex)."),
          P("Match each term to its meaning", [['compact bone', "hard outer layer"], ['cancellous bone', "spongy bone"], ['haversian canal', "vessel and nerve canal in an osteon"], ['yellow bone marrow', "fatty marrow"]], "Bone tissue."),
          B("Making blood cells is called ___.", ['hematopoiesis', 'osteogenesis', 'hemarthrosis'], 'hemat/o + -poiesis.'),
          O("Blood formation: put the path in order", ["A stem cell in the red marrow", "The cell divides and matures", "Red cells, white cells and platelets", "Entry into the bloodstream"], "Hematopoiesis in the red bone marrow."),
          S("Spell the term for blood cell formation", 'hematopoiesis', 'hemat/o + -poiesis.', 'hemato…'),
          N('d2t:bn')
        ]
      },
      /* ================= سطح ۲: شکل و نشانه‌ها ================= */
      {
        id: 'bn4', title: "Five bone shapes", icon: '🔷', items: [
          L("Recognise It by Its Shape", `${fig('bone-shapes', [], "Five bone shapes")}${tbl([["shape, form", "Example"], [e('long bone'), "femur, humerus, tibia"], [e('short bone'), "wrist and ankle"], [e('flat bone'), "ribs, sternum, scapula, skull bones"], [e('irregular bone'), "vertebrae and facial bones"], [e('sesamoid bone'), "kneecap (inside a tendon)"]])}`),
          L("A sesame seed inside a tendon", `${e('sesamoid')} means “like a sesame seed”. These small bones grow <b>inside a tendon</b>; the largest is the <b>kneecap</b> (${e('patella')}), inside the tendon of the quadriceps.${memo("A flat bone is like a shield: the scapula, skull and ribs protect the important things beneath them.")}${pearl("Flat bones such as the sternum and pelvis have plenty of red marrow; bone marrow samples are often taken from the iliac crest.")}`),
          M("What shape of bone are the vertebrae?", ['irregular', 'long', 'flat', 'sesamoid'], "Complex shape = irregular.", null, F('bone-shapes', [])),
          M("What kind of bone is the kneecap?", ['sesamoid', 'short', 'flat', 'irregular'], "It grows inside the tendon of the quadriceps."),
          T("The wrist bones (carpals) are short bones.", true, "Short bones are roughly cube-shaped."),
          P("Match each bone to its shape", [['femur', 'long'], ['carpals', 'short'], ['scapula', 'flat'], ['vertebra', 'irregular']], "Five shapes."),
          B("The ribs and sternum are ___ bones.", ['flat', 'long', 'sesamoid'], "Flat bones protect organs."),
          M("Which feature belongs to a long bone?", ["It has a shaft and two ends", "It lies inside a tendon", "It is roughly cube-shaped", "It has a complex shape"], 'shaft + two ends.'),
          S("Spell the term for a bone that grows inside a tendon", 'sesamoid bone', "sesam = sesame + -oid = like.", 'sesa…'),
          N('sp:bn')
        ]
      },
      {
        id: 'bn5', title: "Projections: Head, Condyle, Trochanter", icon: '⛰️', items: [
          L("Where muscles and joints attach", `${fig('bone-markings', [], "Landmarks of the femur")}${e('<b>process</b>')} is the general name for any bony projection:<br>• ${e('head')}: a rounded end that fits into a joint<br>• ${e('<b>condyle</b>')}: a rounded, smooth joint knob<br>• ${e('<b>epicondyle</b>')}: a projection above a condyle (${e('epi-')} = upon)<br>• ${e('<b>trochanter</b>')}: a large projection of the femur for muscles`),
          L("Small and large", `${tbl([["symptom", "Meaning"], [e('tubercle'), "small, rounded bump"], [e('tuberosity'), "large, rough bump"], [e('crest'), "raised ridge; such as the iliac crest"], [e('spine'), "sharp projection"]])}${memo("A trochanter belongs only to the femur; it has two: greater and lesser.")}${pearl("“Tennis elbow” is inflammation of the tendons attached to the lateral epicondyle of the humerus; that is why it is called lateral epicondylitis.")}`),
          M("What is the large projection below the neck of the femur?", ['greater trochanter', 'condyle', 'tubercle', 'fossa'], "A trochanter is found only on the femur.", null, F('bone-markings', [])),
          M(`${e('<b>epicondyle</b>')} means…`, ["projection above a condyle", "hollow below a condyle", "hole in a bone", "end of the bone"], "epi- (upon) + condyle."),
          T("A tuberosity is larger and rougher than a tubercle.", true, "A tubercle is small and round; a tuberosity large and rough."),
          P("Match each sign to its meaning", [['condyle', "rounded joint knob"], ['trochanter', "large knob of the femur"], ['crest', "raised ridge"], ['process', "any bony projection"]], "Projections."),
          B("The rounded, smooth knob at the end of a bone that takes part in a joint is called a ___.", ['condyle', 'foramen', 'fissure'], "condyle = joint knob."),
          M("Which one is a “depression”, not a projection?", ['fossa', 'tubercle', 'trochanter', 'epicondyle'], "fossa = shallow hollow."),
          S("Spell the term for the large knob at the top of the femur", 'trochanter', "Large projection of the femur.", 'troch…'),
          N('t2f:bn')
        ]
      },
      {
        id: 'bn6', title: "Depressions and the Growth Plate", icon: '🕳️', items: [
          L("Hole, hollow, slit", `${tbl([["symptom", "Meaning", "Example"], [e('foramen'), "a hole for vessels and nerves to pass through", e('foramen magnum')], [e('fossa'), "shallow hollow", "hollow on the scapula"], [e('fissure'), "narrow slit", "slit in the eye socket"], [e('sinus'), "air-filled cavity inside a bone", "sinuses around the nose"], [e('sulcus'), "groove", "groove on the humerus"]])}`),
          L("Growth plate", `${fig('growth-plate', [], "Child versus adult")}A long bone grows in length at the <b>growth plate</b> (${e('epiphyseal plate')}), a layer of cartilage between the end and the shaft. After puberty this plate turns to bone and only a line remains (${e('epiphyseal line')}).${fig('epiphyseal-xray', [], "X-ray of a teenager’s knee: open growth plates")}${pearl("A fracture through the growth plate is dangerous in a child, because it can stop that bone from growing.")}`),
          M("Through which opening of the skull do the brain and spinal cord meet?", ['foramen magnum', 'fossa', 'sinus', 'fissure'], "foramen = hole; magnum = large."),
          M("Where does a child’s long bone grow in length?", ['epiphyseal plate', 'medullary cavity', 'periosteum', 'diaphysis'], "The cartilage growth plate.", null, F('growth-plate', [])),
          T("In adults the growth plate is open and the bone is still lengthening.", false, "False; after puberty the plate closes and becomes the epiphyseal line."),
          P("Match each sign to its meaning", [['foramen', "hole"], ['fossa', "shallow hollow"], ['fissure', "narrow slit"], ['sinus', "air space"]], "Depressions."),
          B("The air spaces inside the facial bones are called ___.", ['sinuses', 'foramina', 'condyles'], 'paranasal sinuses.'),
          T("On an X-ray an open growth plate appears as a dark line between the end and the shaft.", true, "Cartilage looks darker than bone on an X-ray.", F('epiphyseal-xray', [])),
          S("Spell the term for an opening in a bone", 'foramen', "Its plural is foramina.", 'fora…'),
          N('sp:bn')
        ]
      },
      /* ================= سطح ۳: بیماری‌های استخوان ================= */
      {
        id: 'bn7', title: "Fragile Bone: Osteoporosis and Osteomalacia", icon: '🫥', items: [
          L("porous, brittle bones", `${fig('osteoporosis', [], "From healthy bone to osteoporosis")}${wb('oste/o', '-porosis')} → ${e('<b>osteoporosis</b>')}: bone mass decreases and the bone becomes <b>porous and fragile</b>; mostly in women after menopause. Fractures of the wrist, hip and vertebrae are common.<br>${wb('oste/o', '-penia')} → ${e('<b>osteopenia</b>')}: bone mass below normal but not yet as low as osteoporosis.${fig('osteoporosis-bone', [], "Head of the femur: healthy (left) and porous (right)")}`),
          L("softening of bone", `${wb('oste/o', '-malacia')} → ${e('<b>osteomalacia</b>')}: an adult’s bones become <b>soft</b> because of a lack of vitamin D or calcium.<br>In a child the same disease is called ${e('<b>rickets</b>')}: the legs bow and the growth plates widen.${fig('rickets-xray', [], "Rickets: widened growth plate at the knee")}${vs(['porosis', "full of holes and fragile (low mass)"], ['malacia', "soft and bendable (lack of minerals)"])}${pearl("Osteoporosis is diagnosed with a bone density scan (DXA); a T-score of ‎-2.5‎ or lower means osteoporosis.")}`),
          M(`${e('<b>osteoporosis</b>')} means…`, ["loss of bone mass and porous bone", "softening of bone", "bone infection", "bone tumour"], "oste/o + -porosis (porous).", null, F('osteoporosis', [])),
          M("Rickets is mostly related to a lack of what?", ["vitamin D", "vitamin C", "Iron", "building-block nutrient"], "rickets = osteomalacia in children."),
          T("Osteopenia is more severe than osteoporosis.", false, "False; osteopenia is the milder stage of low bone mass."),
          W("Build a word meaning “softening of bone”", ['oste/o', '-malacia'], ['-porosis', 'chondr/o', '-penia'], 'oste/o + -malacia = osteomalacia.'),
          P("Match each disease to its feature", [['osteoporosis', "porous and fragile"], ['osteomalacia', "softening in an adult"], ['rickets', "softening in a child"], ['osteopenia', "mildly low mass"]], "Metabolic bone diseases."),
          B("The abbreviation ___ is the name of the bone density test.", ['DXA', 'MRI', 'EMG'], 'dual-energy X-ray absorptiometry.'),
          S("Spell the term for porous, brittle bones", 'osteoporosis', 'oste/o + -porosis.', 'osteop…'),
          N('wb:bn')
        ]
      },
      {
        id: 'bn8', title: "Bone Infection and Deformity", icon: '🦠', items: [
          L("Infection down to the marrow", `${wb('oste/o', 'myel/o', '-itis')} → ${e('<b>osteomyelitis</b>')}: inflammation of bone and bone marrow, usually from a bacterial infection; through the blood or from an open wound (such as a diabetic foot ulcer).${fig('osteomyelitis', [], "Osteomyelitis of a toe")}${wb('oste/o', 'necr/o', '-osis')} → ${e('<b>osteonecrosis</b>')}: death of bone tissue from loss of blood supply (${e('avascular necrosis')}).`),
          L("Diseases of bone formation", `• ${e('<b>osteitis deformans</b>')} or <b>Paget disease</b>: bone is broken down and rebuilt too fast; thick, weak and deformed.${fig('paget-bone', [], "Paget disease: irregular bone tissue of the femur")}• ${e('<b>osteogenesis imperfecta</b>')} (${e('OI')}): an inherited collagen disease; the bones are thin and brittle and break again and again.<br>• ${e('<b>achondroplasia</b>')}: an inherited disorder of cartilage growth; the limbs stay short.${fig('oi-xray', [], "OI: thin, broken bones")}`),
          M(`${e('<b>osteomyelitis</b>')} means…`, ["inflammation of bone and bone marrow", "tumour of bone marrow", "muscle inflammation", "softening of bone"], 'oste/o + myel/o + -itis.', null, F('osteomyelitis', [])),
          M("What is another name for Paget disease?", ['osteitis deformans', 'osteogenesis imperfecta', 'osteomalacia', 'achondroplasia'], "deformans = deforming."),
          T("Osteogenesis imperfecta is an inherited disease that makes the bones brittle.", true, "Brittle bone disease; a defect in collagen.", F('oi-xray', [])),
          W("Build a word meaning “death of bone tissue”", ['oste/o', 'necr/o', '-osis'], ['myel/o', '-itis', 'sarc/o'], 'oste/o + necr/o + -osis = osteonecrosis.'),
          P("Match each disease to its description", [['osteomyelitis', "infection of bone and marrow"], ['osteonecrosis', "tissue death from loss of blood supply"], ['achondroplasia', "inherited short limbs"], ['osteitis deformans', "Paget disease"]], "Infection and deformity."),
          B("In the word achondroplasia, the prefix ___ means “without”.", ['a-', 'an-', 'dys-'], "a- + chondr/o + -plasia: lack of normal cartilage growth."),
          S("Spell the term for infection of bone and marrow", 'osteomyelitis', 'oste/o + myel/o + -itis.', 'osteom…'),
          N('r2m:bn')
        ]
      },
      {
        id: 'bn9', title: "Bone and Cartilage Tumours", icon: '🎯', items: [
          L("Benign or Malignant?", `${tbl([["Term", "Meaning"], [e('osteoma'), "benign bone tumour"], [e('exostosis'), "benign bony spur on the surface"], [e('chondroma'), "benign cartilage tumour"], [e('osteosarcoma'), "bone cancer; mostly teenagers, near the knee"], [e('chondrosarcoma'), "cartilage cancer"], [e('Ewing sarcoma'), "cancer of the shaft of long bones in children"]])}`),
          L("What does sarcoma mean?", `${wb('oste/o', 'sarc/o', '-oma')} → <b>osteosarcoma</b><br>${e('sarc/o')} means “flesh” and refers to connective tissue. Any malignant tumour that starts in bone, cartilage or muscle is called a <b>sarcoma</b>; cancers of epithelial tissue are <b>carcinomas</b>.${wb('myel/o', '-oma')} → <b>myeloma</b>: a cancer of bone marrow cells that riddles the bone with holes.${memo("-oma on its own is usually benign; if sarc or carcin comes before it, it is malignant.")}${pearl("A bone scan shows highly active spots of bone, such as tumours and metastases, as darker areas.")}${fig('bone-scan', [], "Nuclear scan of all the bones")}`),
          M(`${e('<b>osteosarcoma</b>')} means…`, ["malignant bone tumour", "benign bone tumour", "bone inflammation", "bony spur"], "sarc/o = connective tissue; sarcoma = malignant."),
          M("Which tumour is benign?", ['chondroma', 'chondrosarcoma', 'Ewing sarcoma', 'osteosarcoma'], "Without sarc = usually benign."),
          T("An exostosis is a benign bony bump on the surface of a bone.", true, "ex- (out) + ost/o + -osis = a bone spur."),
          W("Build a word meaning “cartilage cancer”", ['chondr/o', 'sarc/o', '-oma'], ['oste/o', '-itis', 'myel/o'], 'chondr/o + sarc/o + -oma = chondrosarcoma.'),
          P("Match each tumour to its description", [['osteoma', "benign, of bone"], ['osteosarcoma', "malignant, of bone"], ['myeloma', "bone marrow cancer"], ['exostosis', "bony spur"]], "Tumours."),
          B("High blood calcium is called ___; it is seen in bone metastases.", ['hypercalcemia', 'hypocalcemia', 'hyperuricemia'], 'hyper- + calc/o + -emia.'),
          S("Spell the term for bone cancer", 'osteosarcoma', 'oste/o + sarc/o + -oma.', 'osteos…'),
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
    id: 'sk', sym: 'Sk', name: "Skeleton", short: "Skeleton", sub: "The names of the bones from skull to toe: skull, spine, chest, limbs and pelvis",
    color: '#3F7FBF', dark: '#285A8C', light: '#E3EEF9',
    levels: ["Skull and axial skeleton", "Spine and chest", "Limbs and pelvis"],
    gens: EA.genIds('sk'),
    lessons: [
      /* ================= سطح ۱: جمجمه و اسکلت محوری ================= */
      {
        id: 'sk1', title: "Axial and Appendicular", icon: '🧍', items: [
          L("The two parts of the skeleton", `${fig('skeleton', [], "The skeleton: axial (ivory) and appendicular (blue)")}• ${e('<b>axial skeleton</b>')} (80 bones): the central axis of the body; the skull, spine, ribs, sternum and hyoid bone.<br>• ${e('<b>appendicular skeleton</b>')} (126 bones): the limbs and the two girdles, shoulder and pelvis, that attach them to the trunk.`),
          L("Girdles", `• ${e('<b>pectoral girdle</b>')} (shoulder girdle): the clavicles and scapulae<br>• ${e('<b>pelvic girdle</b>')} (pelvic girdle): two hip bones, each made of fused ${e('ilium')}, ${e('ischium')} and ${e('pubis')}.${memo("appendicular comes from appendage, “something that hangs on”: the arms and legs hang from the trunk.")}${pearl("80 + 126 = 206; a newborn has about 300 bones, some of which fuse together later.")}`),
          M("Which bone belongs to the axial skeleton?", ['sternum', 'femur', 'clavicle', 'scapula'], "The sternum is on the central axis; the clavicle and scapula belong to the shoulder girdle.", null, F('skeleton', [])),
          M("How many bones does the appendicular skeleton have?", ["126", "80", "206", "33"], "80 axial + 126 appendicular = 206."),
          T("The pelvic girdle is part of the axial skeleton.", false, "False; the pelvic girdle belongs to the appendicular skeleton (but the sacrum is axial)."),
          P("Match each part to its bones", [['axial skeleton', "skull, spine and ribs"], ['appendicular skeleton', "limbs and girdles"], ['pectoral girdle', "clavicle and scapula"], ['pelvic girdle', "ilium, ischium and pubis"]], "Axial = the central axis; appendicular = the limbs."),
          B("The clavicles and scapulae make up the ___.", ['pectoral girdle', 'pelvic girdle', 'thoracic cage'], "pector/o = chest."),
          M("What is special about the hyoid bone?", ["It does not join any other bone", "It is the most movable bone of the skull", "It is part of the spine", "It is in the shoulder girdle"], "U-shaped, in the neck; it supports the tongue."),
          S("Spell the term for the skull, spine and rib cage together", 'axial skeleton', "axis = axis.", 'axi…'),
          N('t2f:sk')
        ]
      },
      {
        id: 'sk2', title: "The Skull: Home of the Brain", icon: '💀', items: [
          L("The eight bones of the cranium", `${fig('skull', [], "The skull from the side")}${tbl([["bone", "Location"], [e('frontal'), "The forehead"], [e('parietal (2)'), "the roof and upper sides"], [e('temporal (2)'), "the lower sides; the ear canal"], [e('occipital'), "the back and floor of the skull"], [e('sphenoid'), "floor of the skull; butterfly-shaped"], [e('ethmoid'), "between the two eye sockets"]])}`),
          L("Sutures and fontanels", `The skull bones are stitched together by immovable joints called ${e('<b>suture</b>')}.<br>In a newborn there are soft spots between these bones called ${e('<b>fontanel</b>')}, which close gradually.${wb('crani/o', '-um')} → <b>cranium</b>: the skull${memo("temporal comes from tempus, “time”: the hair at the temples turns grey first and shows the passing of time.")}${fig('skull-xray', [], "Coloured X-ray of the skull from the side")}`),
          M("Which bone is at the back of the skull?", ['occipital', 'frontal', 'temporal', 'ethmoid'], "occipital = back of the head.", null, F('skull', [])),
          M(`What is ${e('<b>fontanel</b>')}?`, ["soft spot between a newborn’s skull bones", "adult skull suture", "large opening in the floor of the skull", "frontal air sinus"], "The fontanels close in the first months of life."),
          T("The temporal bone contains the ear canal.", true, "The auditory canal is in the temporal bone."),
          P("Match each bone to its location", [['frontal', "The forehead"], ['parietal', "roof of the skull"], ['occipital', "back of the head"], ['sphenoid', "floor of the skull"]], "The bones of the skull."),
          B("The immovable joint between skull bones is called a ___.", ['suture', 'symphysis', 'fontanel'], "suture = seam."),
          M("How many parietal bones are there?", ["two", "one", "four", "six"], "One pair; left and right."),
          S("Spell the term for the skull", 'cranium', 'crani/o + -um.', 'cran…'),
          N('f2t:sk')
        ]
      },
      {
        id: 'sk3', title: "Face and Jaw", icon: '😁', items: [
          L("Bones of the face", `${tbl([["bone", "Meaning"], [e('mandible'), "lower jaw; the only movable bone of the skull"], [e('maxilla'), "upper jaw; the upper teeth"], [e('zygomatic'), "cheek"], [e('nasal'), "bridge of the nose"], [e('lacrimal'), "inner corner of the eye"], [e('vomer'), "the middle partition of the nose"]])}`),
          L("The jaw joint", `The lower jaw joins the temporal bone: the ${e('<b>temporomandibular joint</b>')} or ${e('<b>TMJ</b>')}.${wb('mandibul/o', '-ar')} → pertaining to the lower jaw<br>${wb('maxill/o', '-ary')} → pertaining to the upper jaw${memo("Mandible: M for Move; the lower jaw moves. Maxilla, with its x, stays fixed above the mouth.")}${pearl("In the standard reference’s case study, Susan had arthroplasty for degenerative joint disease of the TMJ (DJD); the diseased head of the mandibular condyle was removed.")}`),
          M("Which is the only movable bone of the skull?", ['mandible', 'maxilla', 'zygomatic', 'vomer'], "The lower jaw moves for chewing and speaking."),
          M(`${e('<b>TMJ</b>')} means…`, ["jaw joint", "joint between vertebrae", "shoulder joint", "fixed joint between skull bones"], 'temporomandibular joint.'),
          T("The cheekbone is called the zygomatic bone.", true, 'zygomatic bone = cheekbone.'),
          P("Match each bone to its location", [['mandible', "lower jaw"], ['maxilla', "upper jaw"], ['zygomatic', "cheek"], ['lacrimal', "inner corner of the eye"]], "Bones of the face."),
          W("Build a word meaning “pertaining to the lower jaw”", ['mandibul/o', '-ar'], ['maxill/o', '-itis', 'crani/o'], 'mandibul/o + -ar = mandibular.'),
          B("The upper jaw is called the ___.", ['maxilla', 'mandible', 'mastoid'], 'maxill/o.'),
          S("Spell the term for the lower jaw", 'mandible', 'mandibul/o.', 'mand…'),
          N('d2t:sk')
        ]
      },
      /* ================= سطح ۲: ستون مهره و قفسه سینه ================= */
      {
        id: 'sk4', title: "The Spine: 26 Links", icon: '🐍', items: [
          L("Five regions", `${fig('spine', [], "The spine from the side")}${tbl([["Region", "Number", "abbreviation"], [e('cervical'), "7 (neck)", e('C1–C7')], [e('thoracic'), "12 (chest)", e('T1–T12')], [e('lumbar'), "5 (lower back)", e('L1–L5')], [e('sacrum'), "5 fused", e('S1–S5')], [e('coccyx'), "4 fused", '']])}`),
          L("atlas and axis", `The first two neck vertebrae have special names:<br>• ${e('<b>atlas</b>')} (${e('C1')}): holds up the skull, like Atlas who held the world on his shoulders in the myth.<br>• ${e('<b>axis</b>')} (${e('C2')}): the atlas pivots on it and the head turns left and right.${memo("Breakfast at 7, lunch at 12, dinner at 5: 7 cervical, 12 thoracic, 5 lumbar.")}${fig('cervical-xray', [], "X-ray of the cervical vertebrae")}`),
          M("How many lumbar vertebrae are there?", ["5", "7", "12", "4"], "L1 to L5.", null, F('spine', [])),
          M(`Which vertebra is the ${e('<b>atlas</b>')}?`, ["The first cervical vertebra (C1)", "The second cervical vertebra", "The last thoracic vertebra", "The first lumbar vertebra"], "It holds up the skull."),
          T("The ribs attach to the thoracic vertebrae.", true, "T1 to T12 join the 12 pairs of ribs."),
          O("Put the regions of the spine in order from top to bottom", ['cervical', 'thoracic', 'lumbar', 'sacrum', 'coccyx'], "Neck, chest, lower back, sacrum, coccyx."),
          P("Match each region to its number of vertebrae", [['cervical', "7"], ['thoracic', "12"], ['lumbar', "5"], ['coccyx', "4 fused"]], "7, 12, 5."),
          B("The abbreviation L4 means the fourth ___ vertebra.", ["lower back", "cervical", "of the chest"], 'L = lumbar.'),
          S("Spell the term for the tailbone", 'coccyx', 'coccyg/o.', 'cocc…'),
          N('ab:sk')
        ]
      },
      {
        id: 'sk5', title: "Vertebra, Disc and Rib Cage", icon: '⭕', items: [
          L("A vertebra from above", `${fig('vertebra', [], "A lumbar vertebra from above")}${tbl([["Section", "Meaning"], [e('vertebral body'), "vertebral body; the front, weight-bearing part"], [e('vertebral foramen'), "vertebral foramen; the passage of the spinal cord"], [e('lamina'), "the back plate of the vertebral arch"], [e('spinous process'), "spinous process; the bumps along the back"], [e('transverse process'), "transverse process; on both sides"]])}Between the vertebral bodies is a cushion of fibrocartilage: the ${e('<b>intervertebral disk</b>')}; its jelly-like centre is called the ${e('<b>nucleus pulposus</b>')}.`),
          L("the chest", `${fig('ribcage', [], "The rib cage from the front")}The breastbone (${e('<b>sternum</b>')}) has three parts: the handle (${e('manubrium')}), the body and the ${e('xiphoid process')}.<br>• ${e('<b>true ribs</b>')} (1 to 7): joined directly to the sternum by costal cartilage.<br>• ${e('<b>false ribs</b>')} (8 to 12): reach the sternum indirectly or not at all.<br>• ${e('<b>floating ribs</b>')} (11 and 12): their front ends are free.${wb('inter-', 'cost/o', '-al')} → between the ribs${pearl("In cardiopulmonary resuscitation (CPR), pressure is applied to the lower half of the sternum; pressing on the xiphoid can break it.")}`),
          M("Through which part of a vertebra does the spinal cord pass?", ['vertebral foramen', 'vertebral body', 'spinous process', 'transverse process'], "foramen = opening.", null, F('vertebra', [])),
          M("Which are the true ribs?", ["Ribs 1 to 7", "Ribs 8 to 10", "Ribs 11 and 12", "All 12 pairs"], "True ribs reach the sternum directly.", null, F('ribcage', [])),
          T("The bumps you feel along the back are the spinous processes.", true, "The spinous processes."),
          W("Build a word meaning “removal of a rib”", ['cost/o', '-ectomy'], ['stern/o', '-itis', 'lamin/o'], 'cost/o + -ectomy = costectomy.'),
          P("Match each part to its meaning", [['lamina', "the back plate of the vertebral arch"], ['nucleus pulposus', "jelly centre of the disc"], ['xiphoid process', "lower tip of the sternum"], ['floating ribs', "ribs with free front ends"]], "Vertebra and rib cage."),
          B("The root ___ means rib.", ['cost/o', 'stern/o', 'thorac/o'], "costal = pertaining to the ribs."),
          S("Spell the term for between the vertebrae", 'intervertebral', 'inter- + vertebr/o + -al.', 'interv…'),
          N('wb:sk')
        ]
      },
      {
        id: 'sk6', title: "Diseases of the Spine", icon: '〰️', items: [
          L("Three abnormal curves", `${fig('spine-curves', [], "Curves of the spine")}${tbl([["Term", "root", "Meaning"], [e('kyphosis'), e('kyph/o') + " = hump", "excessive rounding of the upper back"], [e('lordosis'), e('lord/o') + " = bent backward", "excessive inward curve of the lower back"], [e('scoliosis'), e('scoli/o') + " = crooked", "sideways curve of the spine"]])}${pearl("In the standard reference’s case study, 15-year-old Rachel had a posterior spinal fusion (PSF) with rods and hooks for adolescent idiopathic scoliosis.")}`),
          L("Disc, slipping and inflammation", `${fig('disk-herniation', [], "Herniated disc")}• ${e('<b>herniated nucleus pulposus</b>')} (${e('HNP')}): the centre of the disc bulges out and presses on a nerve root; a “slipped disc”.<br>• ${wb('spondyl/o', '-listhesis')} → one vertebra slipping over the one below<br>• ${e('<b>spondylosis</b>')}: wear of the vertebrae and discs<br>• ${e('<b>ankylosing spondylitis</b>')}: a chronic inflammation that fuses the vertebrae<br>• ${e('<b>spina bifida</b>')}: the vertebral arch fails to close in the fetus${fig('spondylolisthesis-xray', [], "L4 slipping over L5")}${memo("spondyl/o and vertebr/o both mean vertebra; disease words are mostly built with spondyl/o and anatomy words with vertebr/o.")}`),
          M(`${e('<b>scoliosis</b>')} means…`, ["sideways curve of the spine", "hunchback", "excessive inward curve of the lower back", "slipped vertebra"], "scoli/o = crooked.", null, F('spine-curves', [])),
          M("What is the bulging of the disc’s jelly centre called?", ['herniated nucleus pulposus', 'spondylolisthesis', 'spinal stenosis', 'spina bifida'], "HNP; it presses on a nerve root.", null, F('disk-herniation', [])),
          T("Kyphosis means an excessive inward curve of the lower back.", false, "False; kyphosis is a hunched upper back. The lower-back curve is lordosis."),
          W("Build a word meaning “inflammation of the vertebrae”", ['spondyl/o', '-itis'], ['scoli/o', '-listhesis', 'lord/o'], 'spondyl/o + -itis = spondylitis.'),
          P("Match each disease to its description", [['spondylolisthesis', "slipped vertebra"], ['spondylosis', "wear of the vertebrae"], ['ankylosing spondylitis', "inflammatory fusion of the vertebrae"], ['spina bifida', "failure of the vertebral arch to close"]], "Diseases of the spine."),
          M("Which part of a vertebra is removed to free the spinal cord or a nerve root?", ['lamina (laminectomy)', 'vertebral body', 'transverse process', 'coccyx'], "laminectomy = removal of the lamina.", null, F('ankylosing-xray', [], "Ankylosing spondylitis: bony bridges between the vertebrae")),
          S("Spell the term for a sideways curve of the spine", 'scoliosis', 'scoli/o + -osis.', 'scol…'),
          N('t2f:sk')
        ]
      },
      /* ================= سطح ۳: اندام‌ها و لگن ================= */
      {
        id: 'sk7', title: "Shoulder, Arm and Hand", icon: '🖐️', items: [
          L("From the collarbone to the fingers", `${fig('arm-bones', [], "Bones of the upper limb")}${tbl([["bone", "Meaning"], [e('clavicle'), "collarbone"], [e('scapula'), "shoulder blade; its tip is the acromion"], [e('humerus'), "arm"], [e('radius'), "radius; thumb side"], [e('ulna'), "ulna; little-finger side; the olecranon is the point of the elbow"], [e('carpals (8)'), "the wrist"], [e('metacarpals (5)'), "in the palm"], [e('phalanges (14)'), "Finger bones"]])}`),
          L("Radius or ulna?", `Hold your palm facing up: the bone in line with the <b>thumb</b> is the ${e('radius')} and the bone on the <b>little-finger</b> side the ${e('ulna')}.${wb('meta-', 'carp/o', '-al')} → the palm: “after the wrist”${memo("Radius as in Rotate: when the forearm turns, the radius rotates around the ulna.")}${pearl("A Colles fracture is a fracture of the end of the radius at the wrist, usually from falling on an outstretched hand.")}`),
          M("Which forearm bone is on the thumb side?", ['radius', 'ulna', 'humerus', 'fibula'], "radius = the thumb-side forearm bone.", null, F('arm-bones', [])),
          M(`Where is the ${e('<b>olecranon</b>')}?`, ["point of the elbow on the ulna", "tip of the shoulder on the scapula", "head of the humerus", "ankle knob"], "The bump you lean on."),
          T("The wrist has 8 small bones (carpals).", true, "Eight short bones in two rows."),
          P("Match each bone to its location", [['clavicle', "collarbone"], ['scapula', "shoulder blade"], ['humerus', "arm"], ['metacarpals', "in the palm"]], "The upper limb."),
          M("Which term is written for wrist drop?", ['carpoptosis', 'carpitis', 'carpectomy', 'metacarpal'], "carp/o + -ptosis (drooping)."),
          B("The highest point of the shoulder is the ___ process of the scapula.", ['acromion', 'olecranon', 'xiphoid'], "acromion = tip of the shoulder."),
          S("Spell the name of the upper arm bone", 'humerus', 'humer/o + -us.', 'hum…'),
          N('t2f:sk')
        ]
      },
      {
        id: 'sk8', title: "Pelvis and Pelvic Girdle", icon: '🦋', items: [
          L("Three bones in one", `${fig('pelvis', [], "The pelvis from the front")}Each hip bone is made of three fused bones:<br>• ${e('<b>ilium</b>')}: the upper wings; its edge is the ${e('iliac crest')}<br>• ${e('<b>ischium</b>')}: lower and at the back; we sit on it<br>• ${e('<b>pubis</b>')}: at the front; the two pubic bones meet at the ${e('pubic symphysis')}.`),
          L("hip socket", `Where all three bones meet there is a deep socket called the ${e('<b>acetabulum</b>')}; the head of the femur sits in it and forms the hip joint.<br>${wb('sacr/o', 'ili/o', '-ac')} → <b>sacroiliac</b>: the joint between the sacrum and ilium<br>${wb('lumb/o', 'sacr/o', '-al')} → <b>lumbosacral</b>: lumbar and sacral${memo("acetabulum means “vinegar cup” in Latin: a cup in which the ball of the thigh turns.")}${fig('hip-replacement', [], "X-ray of a total hip replacement")}`),
          M("In which socket does the head of the femur sit?", ['acetabulum', 'glenoid fossa', 'foramen magnum', 'iliac crest'], "acetabulum = hip socket.", null, F('pelvis', [])),
          M("Which bone do we rest on when sitting?", ['ischium', 'ilium', 'pubis', 'sacrum'], "ischi/o = ischium."),
          T("The sacroiliac joint lies between the sacrum and the ilium.", true, 'sacr/o + ili/o + -ac.'),
          W("Build a word meaning “lumbar and sacral”", ['lumb/o', 'sacr/o', '-al'], ['ili/o', 'pub/o', '-itis'], 'lumb/o + sacr/o + -al = lumbosacral.'),
          P("Match each bone to its location", [['ilium', "upper wing of the pelvis"], ['ischium', "lower and at the back"], ['pubis', "front"], ['sacrum', "back of the pelvis, between the two ilia"]], "The pelvic girdle."),
          B("The cartilage joint at the front of the pelvis is called the ___.", ['pubic symphysis', 'sacroiliac joint', 'acetabulum'], "sym- (together) + -physis."),
          S("Spell the term for the hip socket", 'acetabulum', 'acetabul/o + -um.', 'aceta…'),
          N('m2r:sk')
        ]
      },
      {
        id: 'sk9', title: "Thigh, Leg and Foot", icon: '🦶', items: [
          L("From the thigh to the toes", `${fig('leg-bones', [], "Bones of the lower limb")}${tbl([["bone", "Meaning"], [e('femur'), "thighbone; the longest and strongest bone"], [e('patella'), "kneecap"], [e('tibia'), "shinbone; the weight-bearing bone of the leg"], [e('fibula'), "fibula; outer leg"], [e('malleolus'), "the knobs on either side of the ankle"], [e('tarsals (7)'), "ankle bones; the largest is the calcaneus (heel)"], [e('metatarsals (5)'), "sole of the foot"]])}`),
          L("Words of pain and condition", `${wb('calcane/o', '-dynia')} → heel pain<br>${wb('supra-', 'patell/o', '-ar')} → above the kneecap<br>${wb('femor/o', '-al')} → pertaining to the femur; the ${e('femoral artery')} is the artery of the thigh.${memo("The tibia is thick and Tough and on the inside; the fibula is thin like a Fibre and on the outside.")}${pearl("The medial malleolus is the lower end of the tibia and the lateral malleolus the lower end of the fibula.")}`),
          M("Which is the longest bone in the body?", ['femur', 'tibia', 'humerus', 'fibula'], "The thighbone.", null, F('leg-bones', [])),
          M(`${e('<b>calcaneus</b>')} means…`, ["heel bone", "kneecap", "ankle knob", "foot bone"], "The largest ankle bone."),
          T("The fibula is the main weight-bearing bone of the leg.", false, "False; the tibia bears the weight. The fibula is thinner and on the outside."),
          W("Build a word meaning “heel pain”", ['calcane/o', '-dynia'], ['patell/o', '-itis', 'tars/o'], 'calcane/o + -dynia = calcaneodynia.'),
          O("Put the bones in order from the pelvis to the toes", ['femur', 'tibia', 'tarsals', 'metatarsals', 'phalanges'], "Thigh, leg, ankle, foot, toes."),
          P("Match each bone to its name", [['patella', "kneecap"], ['tibia', "shinbone"], ['malleolus', "ankle knob"], ['metatarsals', "sole of the foot"]], "The lower limb."),
          S("Spell the term for the kneecap", 'patella', 'patell/o + -a.', 'pate…'),
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
    id: 'jt', sym: 'Jt', name: "Joints and Movement", short: "Joints", sub: "Types of joint, parts of a synovial joint, movement words (flexion, abduction…) and arthritis, dislocation and joint surgery",
    color: '#1E9E8F', dark: '#137568', light: '#DDF4F1',
    levels: ["Types of joint", "joint movements", "Joint disease and surgery"],
    gens: EA.genIds('jt'),
    lessons: [
      /* ================= سطح ۱: انواع مفصل ================= */
      {
        id: 'jt1', title: "Immovable, Slightly Movable, Freely Movable", icon: '🔗', items: [
          L("Three types of joint", `${fig('joint-types', [], "Three types of joint")}A joint (${e('joint')} or ${e('articulation')}) is where two bones meet:<br>• ${e('<b>synarthrosis</b>')}: <b>immovable</b> and fibrous; such as the skull sutures<br>• ${e('<b>amphiarthrosis</b>')}: <b>slightly movable</b> and cartilaginous; such as the discs between the vertebrae and the pubic symphysis<br>• ${e('<b>diarthrosis</b>')}: <b>freely movable</b> and synovial; such as the knee, shoulder and hip`),
          L("Decoding the names", `${wb('syn-', 'arthr/o', '-osis')} → “joint bound together” = immovable<br>${wb('amphi-', 'arthr/o', '-osis')} → “joint on both sides” = a little movement both ways<br>${wb('dia-', 'arthr/o', '-osis')} → “joint open through” = free${memo("S-A-D in order of movement: Synarthrosis (Still), Amphiarthrosis (A little), Diarthrosis (Do move).")}`),
          M("What type of joint are the knee and shoulder?", ["diarthrosis (synovial)", "synarthrosis (fibrous)", "amphiarthrosis (cartilaginous)", 'suture'], "A freely movable joint.", null, F('joint-types', [])),
          M(`${e('<b>synarthrosis</b>')} means…`, ["immovable joint", "freely movable joint", "slightly movable joint", "joint inflammation"], "syn- (together, bound) + arthr/o + -osis."),
          T("The pubic symphysis is a slightly movable cartilaginous joint.", true, 'amphiarthrosis.'),
          P("Match each joint to its type", [["fixed joint between skull bones", 'synarthrosis'], ["intervertebral disc", 'amphiarthrosis'], ["knee", 'diarthrosis']], "Immovable, slightly movable, freely movable."),
          B("A freely movable joint is also called a ___.", ['synovial joint', 'fibrous joint', 'suture'], 'diarthrosis = synovial joint.'),
          W("Build a word meaning “slightly movable joint”", ['amphi-', 'arthr/o', '-osis'], ['syn-', '-itis', 'chondr/o'], 'amphi- + arthr/o + -osis.'),
          S("Spell the term for the place where two bones meet", 'joint', "Its other name is articulation.", 'jo…'),
          N('t2f:jt')
        ]
      },
      {
        id: 'jt2', title: "Inside a Synovial Joint", icon: '💧', items: [
          L("Parts of a freely movable joint", `${fig('synovial-joint', [], "A synovial joint and its parts")}${tbl([["Part", "Job"], [e('articular cartilage'), "smooth covering of the bone ends"], [e('joint capsule'), "fibrous sac around the joint"], [e('synovial membrane'), "inner lining of the capsule; makes the fluid"], [e('synovial fluid'), "the joint’s oil"], [e('ligament'), "ligament; ties bone to bone"], [e('meniscus'), "crescent-shaped cartilage pad of the knee"], [e('bursa'), "fluid sac that reduces tendon friction"]])}`),
          L("The knee up close", `${tbl([["root", "Meaning", "Example"], [e('synovi/o, synov/o'), "membrane lining a joint", e('synovitis')], [e('burs/o'), "bursa", e('bursitis')], [e('menisc/o'), "knee cartilage pad", e('meniscectomy')], [e('ligament/o'), "band joining bone to bone", e('ligamentous')]])}${memo("synovial comes from syn (with) + ovum (egg): joint fluid is slippery and sticky like egg white.")}${pearl("Meniscus injuries of the knee are common in athletes; they are seen with MRI or arthroscopy.")}${fig('meniscus-tear', [], "Arthroscopic view of a torn knee meniscus")}`),
          M("Which part makes the joint fluid?", ['synovial membrane', 'articular cartilage', 'ligament', 'meniscus'], "The synovial membrane.", null, F('synovial-joint', [])),
          M(`What is ${e('<b>bursa</b>')}?`, ["small fluid-filled sac that reduces friction", "crescent-shaped knee cartilage", "fibrous band between two bones", "covering of the bone end"], "burs/o = sac."),
          T("The meniscus is a crescent-shaped cartilage cushion in the knee.", true, "C-shaped; a shock absorber."),
          P("Match each part to its job", [['articular cartilage', "smooth covering of the bone end"], ['synovial fluid', "joint lubricant"], ['joint capsule', "fibrous sac around the joint"], ['ligament', "tying bone to bone"]], "The synovial joint."),
          W("Build a word meaning “removal of a meniscus”", ['menisc/o', '-ectomy'], ['burs/o', '-itis', 'synov/o'], 'menisc/o + -ectomy = meniscectomy.'),
          B("Inflammation of the synovial membrane is called ___.", ['synovitis', 'bursitis', 'tendinitis'], 'synov/o + -itis.'),
          S("Spell the term for the crescent-shaped cartilage pad of the knee", 'meniscus', "Its plural is menisci.", 'meni…'),
          N('f2t:jt')
        ]
      },
      {
        id: 'jt3', title: "Ball, Hinge, Pivot", icon: '⚙️', items: [
          L("The shape of a joint decides the movement", `${fig('synovial-kinds', [], "Types of synovial joint")}${tbl([["Type", "Movement", "Example"], [e('ball-and-socket'), "in all directions", "hip, shoulder"], [e('hinge'), "only bending and straightening", "elbow, knee"], [e('pivot'), "turning around an axis", "the atlas on the axis"], [e('saddle'), "two directions", "base of the thumb"], [e('gliding'), "surfaces sliding", "between the wrist bones"]])}`),
          L("The artificial joint", `The hip joint is a <b>ball and socket</b>: the head of the femur (the ball) sits in the ${e('acetabulum')} (the socket).<br>When osteoarthritis disables this joint, ${e('<b>arthroplasty</b>')} replaces it with a metal and plastic ball and socket: a ${e('THA')} or ${e('THR')}.${fig('hip-prosthesis', [], "Hip prosthesis: a metal ball in the socket")}${memo("hinge = a door hinge: it only opens and closes; so do the elbow and knee.")}`),
          M("What type of joint is the shoulder?", ['ball-and-socket', 'hinge', 'pivot', 'gliding'], "Movement in all directions.", null, F('synovial-kinds', [])),
          M("In which joint does the head turn left and right?", ["pivot (atlas and axis)", 'hinge', 'saddle', 'ball-and-socket'], "The atlas turns on the peg of the axis."),
          T("The elbow is a hinge joint.", true, "Only flexion and extension."),
          P("Match each joint to its type", [["thigh", 'ball-and-socket'], ["knee", 'hinge'], ["base of the thumb", 'saddle'], ["between the wrist bones", 'gliding']], "Synovial types."),
          B("The abbreviation ___ means total hip replacement.", ['THR', 'TKR', 'ORIF'], 'total hip replacement.'),
          M("Which joint has the greatest range of motion?", ['ball-and-socket', 'hinge', 'pivot', 'suture'], "Movement in all planes."),
          S("Spell the term for a joint that moves like a door", 'hinge joint', "hinge = a door hinge.", 'hin…'),
          N('ab:jt')
        ]
      },
      /* ================= سطح ۲: حرکت‌ها ================= */
      {
        id: 'jt4', title: "Bend It, Straighten It", icon: '💪', items: [
          L("Flexion and extension", `${fig('flex-ext', [], "Flexion and extension of the elbow")}• ${e('<b>flexion</b>')}: bending; the angle between two bones <b>decreases</b>.<br>• ${e('<b>extension</b>')}: straightening; the angle <b>increases</b>.<br>• ${e('<b>hyperextension</b>')}: extending beyond normal, such as tipping the head back.${wb('flex/o', '-ion')} → the act of bending${fig('move-flexion', [], "Flexion, extension and hyperextension of the neck")}`),
          L("Ankle movements", `${fig('foot-moves', [], "Ankle movements")}• ${e('<b>dorsiflexion</b>')}: toes toward the shin, upward (${e('dors/o')} = back of the foot)<br>• ${e('<b>plantar flexion</b>')}: toes pointing down, like standing on tiptoe (${e('plant/o')} = sole of the foot)${memo("Plantar as in plant: you plant your foot in the ground (toes down). Dorsi as in dolphin: the dorsal fin rises up.")}${pearl("In the wake-up test during spinal surgery (Case Study 6-2), dorsiflexion showed the tibialis anterior was working and plantar flexion the gastrocnemius.")}`),
          M("What is bending the elbow called?", ['flexion', 'extension', 'abduction', 'rotation'], "The angle decreases.", null, F('flex-ext', [])),
          M("Which movement is standing on tiptoe?", ['plantar flexion', 'dorsiflexion', 'eversion', 'inversion'], "plant/o = sole of the foot.", null, F('foot-moves', [])),
          T("In extension the angle between two bones increases.", true, "Straightening a joint."),
          W("Build a word meaning “extending beyond normal”", ['hyper-', 'extens/o', '-ion'], ['flex/o', 'ab-', '-itis'], 'hyper- + extens/o + -ion = hyperextension.'),
          P("Match each movement to its description", [['flexion', "angle decreases"], ['extension', "angle increases"], ['dorsiflexion', "toes up"], ['plantar flexion', "toes down"]], "Bending and straightening."),
          B("Looking at the ceiling by tipping the head back is ___ of the neck.", ['hyperextension', 'flexion', 'rotation'], "Extending beyond normal."),
          S("Spell the term for bending a joint", 'flexion', 'flex/o + -ion.', 'flex…'),
          N('d2t:jt')
        ]
      },
      {
        id: 'jt5', title: "Away, Toward and Rotation", icon: '🔄', items: [
          L("Abduction and adduction", `${fig('abd-add', [], "Abduction, adduction and circumduction")}${wb('ab-', 'duct/o', '-ion')} → ${e('<b>abduction</b>')}: moving a limb <b>away from</b> the midline of the body<br>${wb('ad-', 'duct/o', '-ion')} → ${e('<b>adduction</b>')}: bringing a limb <b>toward</b> the midline${fig('move-abduction', [], "Abduction and adduction of the shoulder")}`),
          L("Rotation and circling", `• ${e('<b>rotation</b>')}: a bone turning around its own axis; like shaking your head “no”<br>• ${e('<b>circumduction</b>')}: a circular movement of a limb whose end traces a cone (${e('circum-')} = around)${vs(['abduction', "AB = Away: away from the body"], ['adduction', "AD = ADD: add it to the body"])}${pearl("In Case Study 6-1, Michael could not abduct his right arm without pain; MRI showed a complete tear of the rotator cuff.")}`),
          M("What is raising the arm outward from the side of the body called?", ['abduction', 'adduction', 'flexion', 'pronation'], "ab- = away from.", null, F('abd-add', [])),
          M(`${e('<b>circumduction</b>')} means…`, ["circular movement of a limb", "turning around its own axis", "moving toward the midline", "bending a joint"], "circum- = around."),
          T("Adduction means bringing a limb toward the midline of the body.", true, "ad- = toward."),
          W("Build a word meaning “moving away from the midline”", ['ab-', 'duct/o', '-ion'], ['ad-', 'flex/o', 'circum-'], 'ab- + duct/o + -ion = abduction.'),
          P("Match each movement to its example", [['abduction', "spreading the legs in a star jump"], ['adduction', "bringing the arms to the sides"], ['rotation', "shaking the head for “no”"], ['circumduction', "swinging the arm round like butterfly stroke"]], "Four movements."),
          B("The root ___ means “to lead, bring”.", ['duct/o', 'flex/o', 'vers/o'], "abduction and adduction."),
          S("Spell the term for moving toward the midline", 'adduction', 'ad- + duct/o + -ion.', 'add…'),
          N('wb:jt')
        ]
      },
      {
        id: 'jt6', title: "Special Turns and ROM", icon: '📐', items: [
          L("Palm and sole", `${fig('pron-sup', [], "Pronation and supination")}• ${e('<b>supination</b>')}: palm facing <b>up</b> (or forward)<br>• ${e('<b>pronation</b>')}: palm facing <b>down</b> (or backward)<br>• ${e('<b>inversion</b>')}: sole turned <b>in</b><br>• ${e('<b>eversion</b>')}: sole turned <b>out</b>${memo("Supination: you hold a bowl of “soup” in your palm. Pronation: your palm lies “prone” on the ground.")}`),
          L("range of motion", `${e('<b>range of motion</b>')} (${e('ROM')}): the greatest possible movement in a joint, in <b>degrees</b>.<br>It is measured with a ${e('<b>goniometer</b>')} (${e('goni/o')} = angle). ${e('PROM')} means <b>passive</b> range of motion; the therapist moves the limb.${fig('goniometer', [], "Goniometer on the elbow")}${pearl("In an orthopaedic follow-up note: “Extension of left knee: 20 degrees short of full ROM” means the knee straightens 20 degrees less than fully. The “goniometer” tool calculates exactly this.")}`),
          M("What movement is the palm facing up?", ['supination', 'pronation', 'inversion', 'eversion'], "Soup in the palm!", null, F('pron-sup', [])),
          M(`${e('<b>ROM</b>')} in a chart means…`, ["range of motion", "X-ray of a joint", "autoimmune joint inflammation", "setting a joint"], 'range of motion.'),
          T("Eversion means turning the sole inward.", false, "False; eversion is outward and inversion inward."),
          P("Match each movement to its description", [['pronation', "palm facing down"], ['supination', "palm facing up"], ['inversion', "sole turned in"], ['eversion', "sole turned out"]], "Special turns."),
          W("Build a word meaning “angle-measuring instrument”", ['goni/o', '-meter'], ['-metry', 'flex/o', 'arthr/o'], 'goni/o + -meter = goniometer.'),
          B("Range of motion in which the therapist moves the patient’s limb is called ___.", ['PROM', 'ROM', 'TKR'], 'passive range of motion.'),
          M("What does a goniometer measure?", ["The angle of joint motion", "bone density", "Muscle strength", "Joint fluid"], "goni/o = angle.", null, F('goniometer-finger', [], "Goniometer on a finger joint")),
          N('sp:jt')
        ]
      },
      /* ================= سطح ۳: بیماری و جراحی مفصل ================= */
      {
        id: 'jt7', title: "Osteoarthritis, Rheumatoid, Gout", icon: '🔥', items: [
          L("The two big arthritides", `${fig('arthritis', [], "Healthy joint, osteoarthritis and rheumatoid arthritis")}${vs(['osteoarthritis (OA)', "wear of cartilage with age and weight; bone spurs; knee and hip; also called DJD"], ['rheumatoid arthritis (RA)', "autoimmune; inflamed synovial lining; small hand joints on both sides; RF positive"])}${fig('ra-hands', [], "Advanced rheumatoid arthritis: swelling and deviation of the fingers")}`),
          L("Gout and others", `• ${e('<b>gout</b>')}: <b>uric acid</b> crystals in a joint, often the big toe; caused by ${e('hyperuricemia')}. Hard deposits under the skin are called ${e('tophi')}.<br>• ${e('<b>ankylosis</b>')}: stiffening and fusion of a joint<br>• ${e('JRA')}: juvenile rheumatoid arthritis${fig('gout-hands', [], "Deformed hands with uric acid deposits (tophi)")}${pearl("In a case study, 60-year-old Mary Pearl had painful swelling of the elbow, wrist and hand joints and a high ESR; the diagnosis was an acute flare of RA, and she received NSAIDs and physical therapy.")}`),
          M("Which disease is autoimmune and inflames the synovial membrane?", ['rheumatoid arthritis', 'osteoarthritis', 'gout', 'bursitis'], "RA; the RF test.", null, F('ra-early', [], "Early rheumatoid arthritis: swollen finger joints")),
          M("The abbreviation DJD is another name for which disease?", ['osteoarthritis', 'rheumatoid arthritis', 'gout', 'Lyme disease'], 'degenerative joint disease.'),
          T("Gout is caused by uric acid crystals deposited in a joint.", true, "Gouty arthritis; often the big toe.", F('gout-toe', [])),
          W("Build a word meaning “high blood uric acid”", ['hyper-', 'uric/o', '-emia'], ['hypo-', 'arthr/o', '-itis'], 'hyper- + uric/o + -emia = hyperuricemia.'),
          P("Match each disease to its feature", [['OA', "wear of cartilage"], ['RA', "autoimmune, both sides"], ['gout', "uric acid crystal"], ['ankylosis', "stiffening and fusion of a joint"]], "Arthritides."),
          B("Hard uric acid deposits under the skin are called ___.", ['tophi', 'bunions', 'ganglia'], "Singular: tophus."),
          S("Spell the term for wear-and-tear joint disease", 'osteoarthritis', 'oste/o + arthr/o + -itis.', 'osteoa…'),
          N('t2f:jt')
        ]
      },
      {
        id: 'jt8', title: "Dislocation, Sprain and Cysts", icon: '🤕', items: [
          L("Joint injuries", `${tbl([["Term", "Meaning"], [e('dislocation'), "dislocation: the joint surfaces completely separated"], [e('subluxation'), "partial dislocation"], [e('sprain'), "sprain: ligament injury; often the ankle"], [e('bursitis'), "inflammation of a bursa"], [e('hemarthrosis'), "blood in the joint cavity"], [e('chondromalacia'), "softening of cartilage, often behind the kneecap"]])}${vs(['sprain', "injured ligament (bone to bone)"], ['strain', "overstretched muscle or tendon"])}`),
          L("Bumps and infection", `• ${e('<b>ganglion cyst</b>')}: a fluid-filled cyst on a tendon sheath or joint capsule, often on the back of the wrist<br>• ${e('<b>bunion</b>')} (${e('hallux valgus')}): enlargement of the joint at the base of the big toe, with the toe turned in<br>• ${e('<b>Lyme disease</b>')}: a bacterial infection from a tick bite; later arthritis<br>• ${e('<b>SLE</b>')}: lupus; an autoimmune disease of the joints, skin and kidneys; the ${e('ANA')} test${fig('bunion', [], "Bunion of the big toe")}${fig('ganglion', [], "Ganglion cyst of the wrist")}`),
          M("What is a ligament injury from twisting a joint called?", ['sprain', 'strain', 'subluxation', 'bursitis'], "sprain = ligament; strain = muscle or tendon."),
          M(`${e('<b>subluxation</b>')} means…`, ["partial dislocation of a joint", "complete dislocation", "fracture", "fusion of a joint"], "sub- = less than."),
          T("Hemarthrosis means bleeding into the joint cavity.", true, 'hem/o + arthr/o + -osis.'),
          W("Build a word meaning “softening of cartilage”", ['chondr/o', '-malacia'], ['oste/o', '-porosis', 'burs/o'], 'chondr/o + -malacia = chondromalacia.'),
          P("Match each term to its meaning", [['dislocation', "complete loss of joint contact"], ['ganglion cyst', "fluid cyst on the wrist"], ['bunion', "bump at the base of the big toe"], ['Lyme disease', "infection from a tick bite"]], "Injuries and diseases."),
          B("Another name for a bunion is ___.", ['hallux valgus', 'talipes', 'genu varum'], "hallux = big toe."),
          S("Spell the term for complete separation of joint surfaces", 'dislocation', "dis- = apart.", 'dis…'),
          N('f2t:jt')
        ]
      },
      {
        id: 'jt9', title: "Looking Inside and Repairing a Joint", icon: '🔧', items: [
          L("diagnosis", `${tbl([["Method", "Meaning"], [e('arthroscopy'), "viewing inside a joint with a thin camera through a small incision"], [e('arthrocentesis'), "drawing joint fluid with a needle"], [e('arthrogram'), "joint X-ray after injecting contrast"], [e('RF'), "blood test for rheumatoid arthritis"], [e('ANA'), "blood test for lupus"]])}${fig('nuclear-knee', [], "Nuclear scan of the knee: active areas of arthritis")}`),
          L("surgery", `${tbl([["surgery", "Meaning"], [e('arthroplasty'), "joint replacement or repair; THA, TKA"], [e('arthrodesis'), "surgical fusion of a joint"], [e('arthrotomy'), "cutting into a joint"], [e('synovectomy'), "removal of the joint lining"], [e('meniscectomy'), "removing a torn meniscus"], [e('bursectomy'), "removal of a bursa"]])}${pearl("In the standard reference’s discharge summary: a 68-year-old man with bilateral knee osteoarthritis had a right TKR; after surgery he had PT for walking with a walker and OT for ADLs.")}`),
          M("What is viewing inside a joint with a camera called?", ['arthroscopy', 'arthrocentesis', 'arthrodesis', 'arthrogram'], 'arthr/o + -scopy.'),
          M("What is drawing joint fluid with a needle?", ['arthrocentesis', 'arthroplasty', 'arthrotomy', 'synovectomy'], "‎-centesis = puncture to draw out fluid."),
          T("TKA means total knee replacement.", true, "total knee arthroplasty; the same as TKR."),
          W("Build a word meaning “surgical fusion of a joint”", ['arthr/o', '-desis'], ['-centesis', 'synov/o', '-plasty'], 'arthr/o + -desis = arthrodesis.'),
          P("Match each method to its meaning", [['arthroplasty', "joint replacement"], ['arthrotomy', "cutting into a joint"], ['synovectomy', "removal of the joint lining"], ['arthrogram', "joint X-ray with contrast"]], "Diagnosis and surgery."),
          O("Put the path of a patient with severe knee osteoarthritis in order", ["Pain, swelling and limited movement", "X-ray: severe osteoarthritis", "TKR (total knee replacement)", "Physical therapy and walking with a walker"], "From the standard reference’s discharge summary."),
          S("Spell the term for looking inside a joint with a scope", 'arthroscopy', 'arthr/o + -scopy.', 'arthros…'),
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
    id: 'mu', sym: 'Mu', name: "Muscles", short: "Muscles", sub: "The three types of muscle tissue, origin and insertion, how muscles are named and the major muscles of the body, weakness and paralysis, dystrophy and tendon injuries",
    color: '#D64F6E', dark: '#A23350', light: '#FBE3E9',
    levels: ["Muscle tissue and structure", "Major muscles of the body", "Muscle disease and diagnosis"],
    gens: EA.genIds('mu'),
    lessons: [
      /* ================= سطح ۱: بافت و ساختار ================= */
      {
        id: 'mu1', title: "Three types of muscle", icon: '💪', items: [
          L("Skeletal, Smooth, Cardiac", `${fig('muscle-types', [], "Three types of muscle tissue")}${tbl([["Type", "Appearance", "Control", "Location"], [e('skeletal'), "striated", "voluntary", "attached to bone"], [e('smooth'), "smooth (unstriped)", "involuntary", "walls of the gut, vessels, bladder"], [e('cardiac'), "striated and branching", "involuntary", "heart wall"]])}`),
          L("Words for muscle tissue", `• ${e('<b>striated</b>')}: striped under the microscope<br>• ${e('<b>voluntary</b>')}: under conscious control; ${e('involuntary')}: not under conscious control<br>• ${e('smooth muscle')} is also called ${e('visceral')}.<br>${wb('my/o', 'cardi/o', '-um')} → ${e('<b>myocardium</b>')}: heart muscle${memo("The heart is “striated” like skeletal muscle but “involuntary” like smooth muscle; a special combination.")}`),
          M("Which muscle is both striated and involuntary?", ['cardiac', 'skeletal', 'smooth', 'visceral'], "Cardiac muscle.", null, F('muscle-types', [])),
          M("What type is the muscle of the intestinal wall?", ['smooth', 'skeletal', 'cardiac', 'striated'], "Smooth or visceral muscle."),
          T("Skeletal muscle is voluntary and attaches to bone by tendons.", true, 'skeletal = striated, voluntary.'),
          P("Match each muscle to its feature", [['skeletal', "voluntary and striated"], ['smooth', "involuntary, without stripes"], ['cardiac', "involuntary and striated"], ['myocardium', "muscle of the heart wall"]], "Three types of muscle."),
          W("Build a word meaning “heart muscle”", ['my/o', 'cardi/o', '-um'], ['-itis', 'muscul/o', 'fasci/o'], 'my/o + cardi/o + -um = myocardium.'),
          B("A muscle that looks striped under the microscope is ___.", ['striated', 'smooth', 'visceral'], "striated = striped."),
          S("Spell the term for muscle that moves the skeleton", 'skeletal muscle', 'skelet/o + -al.', 'skel…'),
          N('t2f:mu')
        ]
      },
      {
        id: 'mu2', title: "From Tendon to Fibre", icon: '🪢', items: [
          L("Structure of skeletal muscle", `${fig('muscle-structure', [], "From bone to muscle fibre")}• ${e('<b>muscle fiber</b>')}: one long muscle cell<br>• ${e('<b>fascicle</b>')}: a bundle of fibres<br>• ${e('<b>fascia</b>')}: the fibrous covering around a muscle<br>• ${e('<b>tendon</b>')}: a fibrous cord that ties muscle to bone<br>• ${e('<b>aponeurosis</b>')}: a flat, sheet-like tendon`),
          L("Origin and insertion", `${fig('origin-insertion', [], "Biceps and triceps of the arm")}Every muscle has two attachments:<br>• ${e('<b>origin</b>')}: on the bone that stays <b>still</b><br>• ${e('<b>insertion</b>')}: on the bone that <b>moves</b><br>The muscle that performs the movement is the ${e('prime mover')} (${e('agonist')}), the opposing muscle the ${e('antagonist')} and the helper the ${e('synergist')}.${fig('muscles-work', [], "Teamwork of the arm muscles")}${memo("A muscle always pulls the insertion toward the origin; no muscle ever “pushes”.")}`),
          M("What is the attachment of a muscle to the fixed bone called?", ['origin', 'insertion', 'fascia', 'aponeurosis'], "The origin.", null, F('origin-insertion', [])),
          M("When the biceps bends the elbow, what role does the triceps play?", ["antagonist (opposing)", 'prime mover', 'synergist', 'origin'], "The triceps must relax."),
          T("A fascicle is a bundle of muscle fibres.", true, "fascicle = little bundle."),
          O("Put the structures in order from small to large", ['muscle fiber', 'fascicle', 'muscle', 'muscle group'], "Fibre → fascicle → muscle → muscle group."),
          P("Match each term to its meaning", [['fascia', "fibrous covering of a muscle"], ['aponeurosis', "flat tendon"], ['synergist', "helper muscle"], ['insertion', "attachment on the moving bone"]], "Muscle structure and roles."),
          B("A tendon joins muscle to ___.", ["bone", "another muscle", "skin"], 'tendon: muscle-to-bone.'),
          S("Spell the term for the fibrous covering around a muscle", 'fascia', 'fasci/o + -a.', 'fas…'),
          N('f2t:mu')
        ]
      },
      {
        id: 'mu3', title: "How Muscles Are Named", icon: '🏷️', items: [
          L("A muscle’s name is its ID card", `${tbl([["Criterion", "Example and meaning"], ["measure", e('gluteus maximus') + ": largest"], ["shape, form", e('deltoid') + ": triangular; " + e('trapezius') + ": trapezoid"], ["Fibre direction", e('rectus') + ": straight; " + e('oblique') + ": slanting"], ["Number of heads", e('biceps, triceps, quadriceps') + ": 2, 3 and 4 heads"], ["Location", e('tibialis anterior') + ": front of the tibia"], ["Job", e('flexor, extensor, adductor')], ["Origin and insertion", e('sternocleidomastoid')]])}`),
          L("Some decoded examples", `${wb('stern/o', 'cleid/o', 'mast/o', '-oid')} → a muscle running from the sternum and clavicle to the mastoid process of the skull.<br>${e('<b>rectus abdominis</b>')} → the “straight” muscle of the abdomen<br>${e('<b>brachioradialis</b>')} → from the arm (${e('brachi/o')}) to the radius${memo("deltoid comes from the Greek letter Δ (delta): the shoulder muscle is triangular.")}`),
          M("What criterion does the name deltoid come from?", ["Shape (triangular)", "Number of heads", "Fibre direction", "Job"], "Δ = delta."),
          M(`${e('<b>quadriceps</b>')} means a muscle with…`, ["four heads", "two heads", "three heads", "slanting fibres"], "quadri- = four."),
          T("rectus means the muscle fibres are straight and parallel to the body’s axis.", true, 'rectus = straight.'),
          P("Match each name to its criterion", [['gluteus maximus', "measure"], ['external oblique', "Fibre direction"], ['tibialis anterior', "Location"], ['adductor longus', "action and size"]], "Seven criteria."),
          W("Build the name of the muscle that runs from the sternum and clavicle to the mastoid process", ['stern/o', 'cleid/o', 'mast/o', '-oid'], ['cost/o', '-itis'], 'sternocleidomastoid.'),
          B("The three-headed muscle at the back of the arm is the ___ brachii.", ['triceps', 'biceps', 'quadriceps'], "tri- = three."),
          S("Spell the term for the triangular shoulder muscle", 'deltoid', 'delta + -oid.', 'del…'),
          N('wb:mu')
        ]
      },
      /* ================= سطح ۲: عضلات مهم بدن ================= */
      {
        id: 'mu4', title: "Head, Neck and Trunk", icon: '🧑', items: [
          L("Muscles of the front of the body", `${fig('muscles-front', [], "Major muscles from the front")}${tbl([["muscle", "Job"], [e('masseter'), "closing the mouth to chew"], [e('orbicularis oculi'), "closing the eyelid"], [e('sternocleidomastoid'), "turning and bending the head"], [e('pectoralis major'), "bringing the arm in and bending it"], [e('rectus abdominis'), "bending the trunk; the “six-pack”"], [e('external oblique'), "turning the trunk"]])}`),
          L("Back and breathing muscles", `${fig('muscles-back', [], "Major muscles from the back")}• ${e('<b>trapezius</b>')}: the trapezoid at the back of the neck and shoulders<br>• ${e('<b>latissimus dorsi</b>')}: the broadest muscle of the back; pulls the arm down and back<br>• ${e('<b>diaphragm</b>')}: the dome-shaped muscle under the lungs; the main muscle of breathing<br>• ${e('intercostal muscles')}: the muscles between the ribs${memo("orbicularis comes from orbit: a muscle that circles round the eye or mouth.")}`),
          M("Which is the main muscle of breathing?", ['diaphragm', 'pectoralis major', 'rectus abdominis', 'trapezius'], "The dome between the chest and abdomen."),
          M("Which muscle closes the jaw for chewing?", ['masseter', 'orbicularis oculi', 'sternocleidomastoid', 'deltoid'], "masseter = chewer."),
          T("The latissimus dorsi is a broad muscle of the back.", true, "latissimus = broadest, dorsi = of the back.", F('muscles-back', [])),
          P("Match each muscle to where it is found", [['pectoralis major', "chest"], ['rectus abdominis', "front of the abdomen"], ['trapezius', "back of the neck and shoulders"], ['orbicularis oculi', "around the eye"]], "Muscles of the trunk and head."),
          B("The muscle that turns the head and starts at the sternum and clavicle is the ___.", ['sternocleidomastoid', 'trapezius', 'masseter'], "Its name comes from its origin and insertion."),
          M("The root pector/o in pectoralis major means…", ["chest", "behind", "abdomen", "neck"], 'pector/o = chest.', null, F('muscles-front', [])),
          S("Spell the term for the dome-shaped main muscle of breathing", 'diaphragm', "The g is silent.", 'diaph…'),
          N('d2t:mu')
        ]
      },
      {
        id: 'mu5', title: "Shoulder and Arm", icon: '🏋️', items: [
          L("Muscles of the upper limb", `${tbl([["muscle", "Job"], [e('deltoid'), "raises the arm sideways; an IM injection site"], [e('biceps brachii'), "bends the elbow and turns the forearm up"], [e('triceps brachii'), "straightens the elbow"], [e('brachioradialis'), "Elbow flexion"], [e('flexor / extensor carpi'), "bends and straightens the wrist"]])}${pearl("In adults, intramuscular (IM) injections are often given in the deltoid, the vastus lateralis (outer thigh) or the ventrogluteal area.")}`),
          L("The rotator cuff", `The ${e('<b>rotator cuff</b>')} is four muscles and tendons that hold the head of the humerus in the shoulder socket and rotate it: ${e('<b>S</b>upraspinatus')}, ${e('<b>I</b>nfraspinatus')}, ${e('<b>T</b>eres minor')}, ${e('<b>S</b>ubscapularis')}.<br>A tear (${e('rotator cuff tear')}) causes shoulder pain and weakness in raising the arm.${memo("SITS: the four muscles that “sit” on the head of the humerus.")}${pearl("In Case Study 6-1, Michael, with a history of shoulder dislocation, had a complete rotator cuff tear, and a Bankart repair was done to stabilise the joint.")}`),
          M("Which muscle straightens (extends) the elbow?", ['triceps brachii', 'biceps brachii', 'brachioradialis', 'deltoid'], "The triceps at the back of the arm."),
          M("How many muscles make up the rotator cuff?", ["four", "two", "three", "six"], 'SITS.'),
          T("The deltoid is a common site for intramuscular injections.", true, 'IM injection site.'),
          P("Match each muscle to its action", [['deltoid', "raising the arm sideways"], ['biceps brachii', "Elbow flexion"], ['triceps brachii', "straightens the elbow"], ['rotator cuff', "stabilising and rotating the shoulder"]], "Muscles of the upper limb."),
          W("Build a word meaning “below the scapula”", ['sub-', 'scapul/o', '-ar'], ['supra-', 'brachi/o', '-itis'], 'sub- + scapul/o + -ar = subscapular.'),
          B("The root ___ means arm.", ['brachi/o', 'carp/o', 'pector/o'], 'biceps brachii.'),
          S("Spell the name of the two-headed arm muscle", 'biceps brachii', "bi- = two, brachi/o = arm.", 'biceps…'),
          N('ab:mu')
        ]
      },
      {
        id: 'mu6', title: "Thigh, Leg and Foot", icon: '🏃', items: [
          L("Muscles of the lower limb", `${tbl([["muscle", "Job"], [e('gluteus maximus'), "extends the hip; the largest buttock muscle"], [e('quadriceps femoris'), "extends the knee; the four heads at the front of the thigh"], [e('hamstrings'), "bends the knee; the three muscles at the back of the thigh"], [e('sartorius'), "the longest muscle of the body; the tailor’s muscle"], [e('gastrocnemius'), "plantar flexion; the calf muscle"], [e('tibialis anterior'), "dorsiflexion of the foot"]])}`),
          L("heel cord", `The calf muscles attach to the heel bone (${e('calcaneus')}) by the ${e('<b>Achilles tendon</b>')}, the strongest tendon in the body.${memo("sartorius comes from sartor, “tailor”: tailors sat cross-legged, and this muscle produces that very movement.")}${pearl("The knee reflex (knee-jerk) is tested by tapping the patellar tendon, which makes the quadriceps contract; it is a DTR.")}`),
          M("Which muscle straightens (extends) the knee?", ['quadriceps femoris', 'hamstrings', 'gastrocnemius', 'sartorius'], "The quadriceps at the front of the thigh."),
          M("Which is the longest muscle in the body?", ['sartorius', 'gluteus maximus', 'quadriceps femoris', 'latissimus dorsi'], "The sartorius."),
          T("The Achilles tendon joins the calf muscles to the heel bone.", true, 'calcaneal tendon.'),
          P("Match each muscle to its action", [['hamstrings', "Knee flexion"], ['gastrocnemius', "plantar flexion"], ['tibialis anterior', "dorsiflexion"], ['gluteus maximus', "hip extension"]], "Muscles of the lower limb."),
          B("The calf muscle is called the ___.", ['gastrocnemius', 'soleus', 'sartorius'], "gastr/o = belly (the bulge of the calf)."),
          M("Sprinting sometimes injures which group at the back of the thigh?", ['hamstrings', 'quadriceps', 'deltoid', 'rotator cuff'], "Hamstring strains are common in runners.", null, F('muscles-back', [])),
          S("Spell the name of the back-of-thigh muscle group", 'hamstrings', "The three muscles at the back of the thigh.", 'ham…'),
          N('t2f:mu')
        ]
      },
      /* ================= سطح ۳: بیماری و تشخیص عضله ================= */
      {
        id: 'mu7', title: "Weakness, Wasting and Tone", icon: '📉', items: [
          L("Muscle signs", `${tbl([["Term", "Meaning"], [e('myasthenia'), "muscle weakness"], [e('atrophy'), "wasting and shrinking of a muscle"], [e('hypertrophy'), "enlargement of a muscle"], [e('dystonia'), "abnormal tone with twisting movements"], [e('myotonia'), "failure of a muscle to relax after contracting"], [e('spasm'), "sudden involuntary contraction"], [e('contracture'), "permanent shortening of a muscle or tendon"]])}`),
          L("Movement words", `${wb('brady-', '-kinesia')} → slow movement (for example in Parkinson disease)<br>${wb('dys-', '-kinesia')} → difficult movement<br>${wb('hyper-', '-kinesia')} → excessive movement<br>${wb('a-', '-trophy')} → “without nourishment” = wasting${vs(['atrophy', "shrinking; for example after wearing a cast"], ['hypertrophy', "enlarging; for example with strength training"])}${pearl("In a case study, after a brachial plexus injury Thomas had atrophy of the supraspinatus, infraspinatus and deltoid.")}`),
          M(`${e('<b>atrophy</b>')} means…`, ["wasting and shrinking of a muscle", "enlargement of a muscle", "muscle weakness", "muscle cramp"], 'a- + -trophy.'),
          M("What is slow movement called?", ['bradykinesia', 'dyskinesia', 'hyperkinesia', 'dystonia'], "brady- = slow."),
          T("Myotonia means the muscle is slow to relax after contracting.", true, 'my/o + -tonia.'),
          W("Build a word meaning “muscle weakness”", ['my/o', '-asthenia'], ['-trophy', 'dys-', '-tonia'], 'my/o + -asthenia = myasthenia.'),
          P("Match each term to its meaning", [['hypertrophy', "enlargement of a muscle"], ['dystonia', "abnormal tone"], ['spasm', "sudden contraction"], ['contracture', "permanent shortening"]], "Muscle signs."),
          B("Absence of muscle tone is called ___.", ['atonia', 'dystonia', 'myotonia'], 'a- + -tonia.'),
          S("Spell the term for slow movement", 'bradykinesia', 'brady- + -kinesia.', 'brady…'),
          N('wb:mu')
        ]
      },
      {
        id: 'mu8', title: "Muscle Diseases and Injuries", icon: '🩹', items: [
          L("Muscle diseases", `• ${e('<b>muscular dystrophy</b>')} (${e('MD')}): a group of inherited diseases with progressive weakness and wasting of the muscles; the Duchenne type affects boys.<br>• ${e('<b>myasthenia gravis</b>')}: autoimmune; nerve signals do not reach the muscle; severe weakness and drooping eyelids.<br>• ${e('<b>fibromyalgia</b>')}: widespread muscle pain, tender points and fatigue.<br>• ${e('<b>polymyositis</b>')}: inflammation of several muscles at once.<br>• ${e('<b>rhabdomyolysis</b>')}: breakdown of skeletal muscle; muscle protein enters the blood and damages the kidneys.`),
          L("Muscle and tendon injuries", `${tbl([["Term", "Meaning"], [e('strain'), "overstretched muscle or tendon"], [e('tendinitis'), "tendon inflammation"], [e('lateral epicondylitis'), "tennis elbow"], [e('carpal tunnel syndrome'), "pressure on the median nerve at the wrist; tingling and numbness"], [e('shin splints'), "pain at the front of the shin in runners"], [e('necrotizing fasciitis'), "severe infection of fascia and muscle"]])}${fig('carpal-tunnel', [], "Carpal tunnel: the tendons and median nerve at the wrist")}${pearl("In the standard reference’s discharge summary, a 7-year-old boy had had muscle weakness since age 3 to 4; a muscle biopsy confirmed muscular dystrophy.")}`),
          M("Which disease is inherited and causes progressive muscle weakness in boys?", ['muscular dystrophy (Duchenne)', 'fibromyalgia', 'myasthenia gravis', 'tendinitis'], "MD; the Duchenne type."),
          M(`${e('<b>rhabdomyolysis</b>')} means…`, ["breakdown of skeletal muscle", "inflammation of several muscles", "autoimmune muscle weakness", "torn tendon"], 'rhabd/o + my/o + -lysis.'),
          T("Carpal tunnel syndrome is caused by pressure on the median nerve at the wrist.", true, "CTS; tingling from the thumb to the ring finger.", F('carpal-tunnel', [])),
          W("Build a word meaning “pain of muscle and fibrous tissue”", ['fibr/o', 'my/o', '-algia'], ['-itis', 'poly-', 'ten/o'], 'fibr/o + my/o + -algia = fibromyalgia.'),
          P("Match each disease to its description", [['myasthenia gravis', "autoimmune weakness and drooping eyelids"], ['polymyositis', "inflammation of several muscles"], ['strain', "overstretched muscle or tendon"], ['lateral epicondylitis', "tennis elbow"]], "Diseases and injuries."),
          B("Rupture of a muscle is called ___.", ['myorrhexis', 'myorrhaphy', 'myoplasty'], "‎-rrhexis = rupture; ‎-rrhaphy = suture."),
          S("Spell the term for inflammation of a tendon", 'tendinitis', 'tendin/o + -itis.', 'tendi…'),
          N('f2t:mu')
        ]
      },
      {
        id: 'mu9', title: "Paralysis and Muscle Tests", icon: '🔌', items: [
          L("Complete or partial paralysis", `${fig('paralysis', [], "Types of paralysis")}${tbl([["Term", "Meaning"], [e('hemiplegia'), "paralysis of one side of the body"], [e('paraplegia'), "paralysis of both legs and lower body"], [e('quadriplegia'), "paralysis of all four limbs"], [e('hemiparesis'), "weakness or partial paralysis of one side"]])}${vs(['‎-plegia', "complete paralysis"], ['‎-paresis', "slight paralysis, weakness"])}`),
          L("Muscle tests", `${tbl([["Test", "Job"], [e('EMG'), "recording the muscle’s electrical activity"], [e('CK / CPK'), "an enzyme that rises in the blood with muscle damage"], [e('muscle biopsy'), "taking a muscle sample for the microscope"], [e('DTR'), "deep tendon reflex with a reflex hammer"]])}${wb('electr/o', 'my/o', '-graphy')} → recording the muscle’s electricity${pearl("In a case study, Thomas had an EMG and nerve conduction study for a brachial plexus injury.")}`),
          M("What is paralysis of both legs and the lower body called?", ['paraplegia', 'hemiplegia', 'quadriplegia', 'hemiparesis'], 'para- + -plegia.', null, F('paralysis', [])),
          M("Which blood test shows muscle damage?", ['CK (creatine kinase)', 'RF', 'ESR', 'ANA'], "CK or CPK."),
          T("An EMG records the electrical activity of muscle.", true, 'electromyography.'),
          W("Build a word meaning “paralysis of all four limbs”", ['quadri-', '-plegia'], ['hemi-', '-paresis', 'para-'], 'quadri- + -plegia = quadriplegia.'),
          P("Match each abbreviation to its meaning", [['EMG', "electromyography"], ['CK', "muscle enzyme"], ['DTR', "deep tendon reflex"], ['MD', "inherited muscle wasting"]], "Muscle abbreviations."),
          B("Weakness of one side of the body (not complete paralysis) is called ___.", ['hemiparesis', 'hemiplegia', 'paraplegia'], "‎-paresis = weakness."),
          S("Spell the term for paralysis of one side of the body", 'hemiplegia', 'hemi- + -plegia.', 'hemi…'),
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
    id: 'fx', sym: 'Fx', name: "Fractures, Diagnosis and Treatment", short: "Fractures and Treatment", sub: "Types of fracture and healing, X-ray to DXA, reduction and ORIF, amputation and prostheses, drugs, physiotherapy and chart abbreviations",
    color: '#7B5CD6', dark: '#5B3FB0', light: '#ECE6FB',
    levels: ["Fractures and healing", "Diagnosis and charts", "Surgery, drugs and rehabilitation"],
    gens: EA.genIds('fx'),
    lessons: [
      /* ================= سطح ۱: شکستگی و ترمیم ================= */
      {
        id: 'fx1', title: "Closed, Open, Greenstick", icon: '💥', items: [
          L("The first question: is the skin intact?", `${fig('fracture-types', [], "Types of fracture")}• ${e('<b>closed fracture</b>')} (closed, simple): the skin is intact.<br>• ${e('<b>open fracture</b>')} (open, compound): the broken bone has come through the skin; high risk of infection.<br>• ${e('<b>greenstick fracture</b>')}: an <b>incomplete</b> fracture; the bone bends like a green twig and breaks on one side only. Common in children.<br>In a chart a fracture is abbreviated ${e('Fx')}.`),
          L("Shape of the fracture line", `${tbl([["Type", "Fracture line"], [e('transverse'), "transverse; straight across, at right angles to the shaft"], [e('oblique'), "oblique; at an angle"], [e('spiral'), "spiral; from a twisting force"], [e('comminuted'), "comminuted; several pieces"]])}${fig('xray-oblique', [], "X-ray: oblique fracture of the tibia")}${memo("compound means “combined”: fracture + skin wound = an open fracture.")}${pearl("A spiral fracture in a young child with no clear history may be a sign of child abuse and must be reported.")}`),
          M("In which fracture has the bone come through the skin?", ['open (compound)', 'closed (simple)', 'greenstick', 'impacted'], "compound = fracture + wound.", null, F('fracture-types', [])),
          M("Which incomplete fracture is common in children?", ['greenstick', 'comminuted', 'transverse', 'spiral'], "Like a green twig."),
          T("A spiral fracture is usually caused by a twisting force.", true, "spiral = twisting."),
          P("Match each fracture to its line", [['transverse', "straight across the bone"], ['oblique', "at a slant"], ['spiral', "twisting around the bone"], ['comminuted', "several pieces"]], "Shape of the fracture line."),
          M("Which fracture does this X-ray show?", ["transverse, in the radius and ulna", 'greenstick', 'compression', 'Colles'], "A straight line at right angles to the shaft of both forearm bones.", null, F('xray-transverse', [], "X-ray of the forearm")),
          B("The abbreviation ___ means fracture.", ['Fx', 'Dx', 'Rx'], 'fracture.'),
          S("Spell the term for a broken bone", 'fracture', "fract = to break.", 'frac…'),
          N('t2f:fx')
        ]
      },
      {
        id: 'fx2', title: "Named Fractures", icon: '📛', items: [
          L("Special fractures", `${tbl([["Type", "Meaning"], [e('compression'), "compression; a crushed vertebra, often in osteoporosis"], [e('impacted'), "one piece driven into the other"], [e('Colles'), "end of the radius at the wrist; falling on an outstretched hand"], [e('Pott'), "end of the fibula at the ankle"], [e('pathologic'), "in a bone weakened by disease"], [e('stress'), "a hairline crack from repeated stress; runners"], [e('avulsion'), "a tendon or ligament pulls off a piece of bone"]])}`),
          L("fracture through diseased bone", `${fig('xray-colles', [], "Colles fracture: the end of the radius")}If a bone breaks with very little force, think of an underlying disease: osteoporosis, tumour, osteomyelitis or OI. This is a ${e('<b>pathologic fracture</b>')}.${pearl("In a consultation report from City Hospital: an 82-year-old woman with osteoporosis slipped on ice and had a comminuted fracture of the left femoral neck and a hip replacement. Years earlier she had also had a Colles fracture.")}`),
          M("What is a fracture of the end of the radius from falling on an outstretched hand called?", ['Colles fracture', 'Pott fracture', 'stress fracture', 'avulsion fracture'], "A wrist fracture.", null, F('xray-colles', [])),
          M("What type is a vertebral fracture in osteoporosis usually?", ['compression', 'greenstick', 'spiral', 'avulsion'], "The vertebra is crushed."),
          T("A pathologic fracture occurs in a bone weakened by disease.", true, "For example a tumour or osteoporosis."),
          P("Match each fracture to its description", [['Pott', "end of the fibula at the ankle"], ['stress', "crack from repeated loading"], ['avulsion', "bone chip pulled off with a tendon"], ['impacted', "two pieces driven into each other"]], "Special fractures."),
          B("A ___ fracture is common in runners and soldiers.", ['stress', 'Colles', 'compression'], "Repeated stress."),
          M("In the report “comminuted fracture of the femoral neck”, how is the bone broken?", ["Shattered into several pieces at the neck of the femur", "Only cracked", "Spiral, in the shaft of the femur", "Undisplaced, in the kneecap"], "comminuted = shattered; femoral neck = neck of the femur."),
          S("Spell the term for a fracture shattered into several pieces", 'comminuted', "Two m’s and one n.", 'commi…'),
          N('f2t:fx')
        ]
      },
      {
        id: 'fx3', title: "Healing and Reduction", icon: '🩼', items: [
          L("How the body heals a bone", `${fig('fracture-healing', [], "Stages of healing")}1. A blood clot (${e('hematoma')}) at the fracture site<br>2. A soft cartilage callus<br>3. A bony callus (${e('<b>callus</b>')})<br>4. Remodelling (${e('remodeling')}) until the bone regains its shape<br>If it does not heal it is a ${e('<b>nonunion</b>')}, and if it heals crooked a ${e('<b>malunion</b>')}.`),
          L("Reduction and fixation", `${fig('fixation', [], "Cast, ORIF and external fixation")}• ${e('<b>reduction</b>')}: returning the bone to its correct position; ${e('closed reduction')} without an incision and ${e('open reduction')} with surgery.<br>• ${e('<b>ORIF</b>')}: open reduction and internal fixation with a plate, screws or a rod<br>• ${e('external fixation')}: pins in the bone and a frame outside the body<br>• ${e('traction')}: pulling with weights; a ${e('cast')} and a ${e('splint')} for immobilisation${pearl("Orthopaedic follow-up note: a 76-year-old woman after ORIF of a left supracondylar femur fracture; the wound has healed well, with “fixation in place, mild osteopenia”.")}`),
          M("What is the new tissue formed around a fracture called?", ['callus', 'hematoma', 'cast', 'splint'], "The bony callus.", null, F('fracture-healing', [])),
          M(`${e('<b>ORIF</b>')} means…`, ["open reduction and internal fixation", "Closed reduction with a cast", "External fixation with a frame", "Traction with weights"], 'open reduction internal fixation.', null, F('fixation', [])),
          T("Malunion means the fracture has not healed at all.", false, "False; malunion means healing crooked. Failure to heal is nonunion."),
          O("Put the stages of fracture healing in order", ['hematoma', 'soft callus', 'bony callus', 'remodeling'], "Clot → soft callus → bony callus → remodelling."),
          P("Match each method to its description", [['closed reduction', "reduction without an incision"], ['traction', "pulling with weights"], ['splint', "rigid support for an injured limb"], ['external fixation', "pins and an external frame"]], "Methods of treating fractures."),
          B("Returning a broken bone to its correct position is called ___.", ['reduction', 'fixation', 'traction'], 're- + duct/o + -ion.'),
          S("Spell the term for the new bone formed at a healing fracture", 'callus', "Two l’s.", 'cal…'),
          N('d2t:fx')
        ]
      },
      /* ================= سطح ۲: تشخیص و پرونده ================= */
      {
        id: 'fx4', title: "Imaging", icon: '🩻', items: [
          L("Which Image for What?", `${fig('imaging', [], "Imaging methods")}${tbl([["Method", "Use"], [e('radiography (X-ray)'), "fracture and dislocation"], [e('CT'), "cross-sectional slices; complex fractures"], [e('MRI'), "soft tissue: disc, ligament, meniscus"], [e('bone scan'), "tumour, infection, hidden fracture"], [e('DXA'), "bone density and osteoporosis"], [e('myelogram'), "spinal canal with contrast"]])}`),
          L("Building imaging words", `${wb('radi/o', '-graphy')} → the method of imaging with rays<br>${wb('tom/o', '-graphy')} → slice-by-slice imaging (${e('CT')} = ${e('computed tomography')})<br>${wb('densit/o', '-metry')} → measuring density<br>${wb('myel/o', '-gram')} → image of the spinal canal${fig('mri-disc', [], "MRI of the lumbar spine: herniated disc")}${vs(['‎-graphy', "process of recording"], ['‎-gram', "the recorded image itself"])}`),
          M("Which method is best for seeing a torn meniscus or a herniated disc?", ['MRI', 'X-ray', 'DXA', 'EMG'], "MRI shows soft tissue well.", null, F('mri-disc', [])),
          M("Which test measures bone density?", ['DXA', 'CT', 'arthrogram', 'myelogram'], 'dual-energy X-ray absorptiometry.', null, F('imaging', [])),
          T("In a bone scan the radioactive material collects in highly active areas of bone.", true, "A nuclear scan.", F('bone-scan', [])),
          W("Build a word meaning “the method of imaging with rays”", ['radi/o', '-graphy'], ['-gram', 'tom/o', 'myel/o'], 'radi/o + -graphy = radiography.'),
          P("Match each method to its use", [['X-ray', "fracture"], ['MRI', "disc and ligament"], ['DXA', "porous, brittle bones"], ['myelogram', "spinal canal"]], "Imaging."),
          B("A recorded image is built with the suffix ___, as in myelogram.", ['‎-gram', '‎-graphy', '‎-scopy'], '‎-gram = record.'),
          S("Spell the term for imaging with X-rays", 'radiography', 'radi/o + -graphy.', 'radio…'),
          N('ab:fx')
        ]
      },
      {
        id: 'fx5', title: "Blood Tests and the T-score", icon: '🧪', items: [
          L("Tests for inflammation and arthritis", `${tbl([["test", "Meaning"], [e('ESR'), "erythrocyte sedimentation rate; high = inflammation"], [e('CRP'), "C-reactive protein; high = inflammation"], [e('RF'), "rheumatoid factor; in most RA patients"], [e('ANA'), "antinuclear antibody; lupus"], [e('uric acid'), "high in gout"], [e('Ca'), "blood calcium"], [e('CK'), "muscle enzyme"]])}`),
          L("Interpreting the T-score", `${fig('tscore', [], "T-score scale")}The ${e('DXA')} report compares bone density with the average of a healthy young adult:<br>• ${e('≥ -1.0')}: normal<br>• ${e('-1.0')} to ${e('-2.5')}: ${e('osteopenia')}<br>• ${e('≤ -2.5')}: ${e('osteoporosis')}${pearl("The “Goniometer and bone density” tool in the Tools section interprets the T-score for you.")}`),
          M("What do a high ESR and CRP indicate?", ["Inflammation in the body", "porous, brittle bones", "Muscle damage", "Calcium deficiency"], "Markers of inflammation."),
          M("A T-score of ‎-2.8‎ means…", ["porous, brittle bones", "Osteopenia", "normal", "softening of bone"], '≤ -2.5 = osteoporosis.', null, F('tscore', [])),
          T("RF is positive in most patients with rheumatoid arthritis.", true, 'rheumatoid factor.'),
          P("Match each test to its disease", [['RF', "autoimmune joint inflammation"], ['ANA', "lupus"], ['uric acid', "gout"], ['CK', "Muscle damage"]], "Orthopaedic and rheumatology tests."),
          M("How is a T-score of ‎-1.6‎ interpreted?", ["Osteopenia", "porous, brittle bones", "normal", "fracture"], "Between ‎-1‎ and ‎-2.5‎."),
          B("The erythrocyte sedimentation rate is abbreviated ___.", ['ESR', 'CRP', 'RBC'], 'erythrocyte sedimentation rate.'),
          S("Spell the term for measuring density", 'densitometry', 'densit/o + -metry.', 'densi…'),
          N('wb:fx')
        ]
      },
      {
        id: 'fx6', title: "Orthopaedic Chart Abbreviations", icon: '📋', items: [
          L("Limbs and amputations", `${fig('amputation-levels', [], "Amputation level")}${tbl([["abbreviation", "Meaning"], [e('UE / LE'), "upper / lower extremity"], [e('RUE, LUE'), "right, left upper extremity"], [e('RLE, LLE'), "right, left lower extremity"], [e('AE / BE'), "above / below the elbow"], [e('AK / BK'), "above / below the knee"]])}`),
          L("Common abbreviations", `${tbl([["abbreviation", "Meaning"], [e('ROM'), "range of motion"], [e('ORIF'), "open reduction and internal fixation"], [e('THA / TKA'), "total hip / knee replacement"], [e('HNP'), "Herniated disc"], [e('NSAID'), "non-steroidal anti-inflammatory drug"], [e('PT / OT'), "physical therapy / occupational therapy"], [e('ADLs'), "activities of daily living"], [e('post-op'), "after surgery"]])}${memo("A means Above and B means Below; E means Elbow and K means Knee. Just four letters and four combinations!")}`),
          M(`${e('<b>BK amputation</b>')} means…`, ["below-knee amputation", "above-knee amputation", "below-elbow amputation", "knee fracture"], 'below knee.', null, F('amputation-levels', [])),
          M(`${e('<b>RLE</b>')} means…`, ["right lower extremity", "right upper extremity", "left lower extremity", "right elbow"], 'right lower extremity.'),
          T("ADLs means everyday activities such as dressing and eating.", true, 'activities of daily living.', F('ot-adl', [], "occupational therapy: practising daily activities")),
          P("Match each abbreviation to its meaning", [['AE', "above the elbow"], ['LUE', "left upper extremity"], ['post-op', "after surgery"], ['PT', "physical therapy"]], "Chart abbreviations."),
          O("Put a follow-up note in its usual order", ["CC: chief complaint", "HPI: history of present illness", "Exam: examination and ROM", "IMP: impression and plan"], "The structure of a clinical note."),
          B("“Flexion of left knee greater than 90 degrees” means the ___ of the left knee is over 90 degrees.", ["bending", "straightening", "turning around an axis"], "flexion = bending."),
          M("In “C5–C6 HNP”, where is the problem?", ["A herniated disc between cervical vertebrae 5 and 6", "A fracture of the lumbar vertebrae", "Osteoarthritis of the knee", "A dislocated shoulder"], "C = cervical; HNP = herniated nucleus pulposus."),
          N('ab:fx')
        ]
      },
      /* ================= سطح ۳: جراحی، دارو و توان‌بخشی ================= */
      {
        id: 'fx7', title: "Bone Surgery", icon: '🔪', items: [
          L("Cutting, removing, repairing", `${tbl([["surgery", "Meaning"], [e('osteotomy'), "cutting a bone to correct its angle"], [e('ostectomy'), "removing a bone or part of it"], [e('osteoplasty'), "surgical repair of bone"], [e('osteoclasia'), "surgically breaking a bone to correct a deformity"], [e('laminectomy'), "removing the lamina of a vertebra"], [e('spinal fusion'), "fusing vertebrae with a graft and rods"], [e('bunionectomy'), "removal of a bunion"]])}`),
          L("Graft, prosthesis, orthosis", `• ${e('<b>bone graft</b>')}: a bone transplant; an ${e('autograft')} from the patient (for example the ilium) and an ${e('allograft')} from a donor<br>• ${e('<b>amputation</b>')}: removal of a limb<br>• ${e('<b>prosthesis</b>')}: an artificial limb or joint (${e('prosthet/o')} = addition)<br>• ${e('<b>orthosis</b>')}: a brace or splint to hold and correct (${e('orth/o')} = straight)${vs(['prosthesis', "replaces a lost body part"], ['orthosis', "supports and corrects an existing part"])}${pearl("In Case Study 5-2, 3-year-old Cooper with OI had ORIF of a femur fracture with a rod in the marrow canal (IM rodding) and a hip spica cast.")}`),
          M(`${e('<b>osteotomy</b>')} means…`, ["surgical cutting of bone", "removal of bone", "repair of bone", "Breaking of a bone"], "‎-tomy = cutting."),
          M("What is a bone graft from the patient’s own body called?", ['autograft', 'allograft', 'prosthesis', 'orthosis'], "auto- = self."),
          T("An orthosis replaces a lost body part.", false, "False; the replacement is a prosthesis. An orthosis is a supporting brace."),
          W("Build a word meaning “surgical breaking of a bone”", ['oste/o', '-clasia'], ['-clast', '-plasty', 'ten/o'], 'oste/o + -clasia = osteoclasia.'),
          P("Match each operation to its meaning", [['ostectomy', "removal of bone"], ['osteoplasty', "repair of bone"], ['spinal fusion', "fusing vertebrae"], ['allograft', "graft from a donor"]], "Bone surgery."),
          B("An artificial leg is a ___.", ['prosthesis', 'orthosis', 'splint'], "prosthet/o = addition."),
          S("Spell the term for an artificial body part", 'prosthesis', "Its plural is prostheses.", 'prost…'),
          N('t2f:fx')
        ]
      },
      {
        id: 'fx8', title: "Muscle and Tendon Surgery", icon: '🧵', items: [
          L("Suture, incision, repair", `${tbl([["surgery", "Meaning"], [e('myoplasty'), "surgical repair of a muscle"], [e('myorrhaphy'), "suturing a muscle"], [e('tenorrhaphy'), "suturing a tendon"], [e('tenotomy'), "cutting a tendon"], [e('tenoplasty'), "repairing a tendon"], [e('fasciotomy'), "cutting the fascia to relieve pressure"], [e('carpal tunnel release'), "cutting the wrist ligament to free the median nerve"]])}${vs(['‎-rrhaphy', "stitch"], ['‎-rrhexis', "rupture"])}`),
          L("Why is the fascia cut?", `Sometimes after a fracture or crush injury, the pressure inside a muscle compartment rises so high that the blood supply is cut off. With a ${e('<b>fasciotomy</b>')} the surgeon opens the fascia to release the pressure.${wb('fasci/o', '-tomy')} → cutting the fascia${memo("The double r in rrhaphy, rrhexis and rrhea: the suffixes for “flowing” and “sewing” are written with two r’s.")}`),
          M(`${e('<b>tenorrhaphy</b>')} means…`, ["suturing a tendon", "cutting a tendon", "torn tendon", "tendon inflammation"], 'ten/o + -rrhaphy.'),
          M("Which operation is done to relieve pressure on the muscles?", ['fasciotomy', 'myorrhaphy', 'tenoplasty', 'arthrodesis'], "Cutting the fascia."),
          T("Myoplasty means surgical repair of a muscle.", true, 'my/o + -plasty.'),
          W("Build a word meaning “cutting a tendon”", ['ten/o', '-tomy'], ['-rrhaphy', 'my/o', 'fasci/o'], 'ten/o + -tomy = tenotomy.'),
          P("Match each operation to its meaning", [['myorrhaphy', "suturing a muscle"], ['tenoplasty', "repairing a tendon"], ['fasciotomy', "cutting the fascia"], ['carpal tunnel release', "freeing the median nerve"]], "Muscle and tendon surgery."),
          B("Suturing a muscle is called ___.", ['myorrhaphy', 'myorrhexis', 'myotomy'], "‎-rrhaphy = suture."),
          S("Spell the term for suturing a tendon", 'tenorrhaphy', "ten/o + -rrhaphy; two r’s.", 'teno…'),
          N('r2m:fx')
        ]
      },
      {
        id: 'fx9', title: "Drugs and Rehabilitation", icon: '💊', items: [
          L("Drugs", `${tbl([["drug", "Job"], [e('NSAID'), "reduces pain, inflammation and swelling; ibuprofen, naproxen"], [e('analgesic'), "painkiller"], [e('skeletal muscle relaxant'), "relaxes muscles and relieves spasm"], [e('corticosteroid'), "strong anti-inflammatory; sometimes injected into a joint"], [e('bisphosphonate'), "slows osteoclasts in osteoporosis"], ["calcium and vitamin D", "prevents and treats osteoporosis and osteomalacia"]])}`),
          L("rehabilitation", `• ${e('<b>physical therapy</b>')} (${e('PT')}): exercise, heat, cold, water and ultrasound to restore strength and movement<br>• ${e('<b>occupational therapy</b>')} (${e('OT')}): restoring daily skills (${e('ADLs')}) and work<br>• ${e('<b>hydrotherapy</b>')}: exercise in warm water<br>• ${e('<b>rehabilitation</b>')}: the whole process of regaining ability after injury or surgery${fig('us-therapy', [], "Therapeutic ultrasound in physiotherapy")}${pearl("In the standard reference’s physiotherapy note, the treatment was “moist heat and ultrasound to the cervical spine and 45 minutes of therapeutic exercise”; the patient had rotator cuff tendinitis.")}`),
          M("What kind of drug is an NSAID?", ["non-steroidal anti-inflammatory drug", "A muscle relaxant", "bacteria-killing drug", "steroid anti-inflammatory drug"], 'nonsteroidal anti-inflammatory drug.'),
          M("Which drug slows osteoclasts in osteoporosis?", ['bisphosphonate', 'NSAID', 'muscle relaxant', 'analgesic'], "It reduces bone breakdown."),
          T("Occupational therapy (OT) focuses on restoring activities of daily living.", true, 'ADLs.'),
          W("Build a word meaning “treatment with water”", ['hydr/o', '-therapy'], ['therm/o', '-graphy', 'my/o'], 'hydr/o + -therapy = hydrotherapy.'),
          P("Match each treatment to its job", [['analgesic', "pain relief"], ['skeletal muscle relaxant', "relief of muscle spasm"], ['physical therapy', "exercise and movement therapy"], ['occupational therapy', "daily skills"]], "Drugs and rehabilitation."),
          B("In analgesic, the prefix ___ means “without”.", ['an-', 'anti-', 'ana-'], "an- + alges/o (sensation of pain) + -ic."),
          S("Spell the term for restoring ability after injury", 'rehabilitation', 're- + habilitat/o + -ion.', 'rehab…'),
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
    { id: 'lx-0', w: 'lx', lv: 0, name: "Boney", title: "Pillar of the Body", shape: 'bone', color: '#F3E4C4', acc: ['sparkle'], bio: "One of the body’s 206 bones: a lever for movement, a shield for organs, a calcium store and a blood factory. Together with the muscles it makes up the musculoskeletal team." },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Rooty", title: "Master of oste/o and my/o", shape: 'book', color: '#C2413A', acc: ['glasses'], bio: "A living dictionary that breaks every word into root, prefix and suffix and knows arthr/o, chondr/o and ten/o by heart." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Puzzly", title: "King of Prefixes and Suffixes", shape: 'puzzle', color: '#8E2A25', acc: ['crown'], bio: "Puts inter- and supra- in place, attaches -desis and -rrhaphy, and never mixes up my/o and myel/o." },
    { id: 'bn-0', w: 'bn', lv: 0, name: "Blasto", title: "The Hard-Working Bone Builder", shape: 'blob', color: '#8FC7E8', acc: ['headband'], bio: "A lively osteoblast that builds new tissue day and night; its eternal rival is the osteoclast, which eats old tissue." },
    { id: 'bn-1', w: 'bn', lv: 1, name: "Calci", title: "The Crystal of Hardness", shape: 'hex', color: '#E9E1CC', acc: ['glasses'], bio: "A crystal of calcium and phosphorus that keeps bone hard. When vitamin D is low, its place empties and the bone softens." },
    { id: 'bn-2', w: 'bn', lv: 2, name: "Marrowy", title: "The Blood Factory", shape: 'drop', color: '#D9584F', acc: ['crown'], bio: "Lives in spongy bone and makes millions of red cells every second; hematopoiesis is its job." },
    { id: 'sk-0', w: 'sk', lv: 0, name: "Skully", title: "Guardian of the Brain", shape: 'skull', color: '#F3E4C4', acc: ['sparkle'], bio: "Stitches the eight skull bones together with sutures and moves only its lower jaw. Knows them all, from frontal to occipital." },
    { id: 'sk-1', w: 'sk', lv: 1, name: "Verty", title: "The Steady Column", shape: 'vertebra', color: '#7FB2E5', acc: ['glasses'], bio: "One of the spine’s 26 vertebrae, sheltering the spinal cord in its opening; knows 7 cervical, 12 thoracic and 5 lumbar by heart." },
    { id: 'sk-2', w: 'sk', lv: 2, name: "Cagey", title: "Shield of the Heart and Lungs", shape: 'shield', color: '#F6C9A8', acc: ['crown'], bio: "Twelve pairs of ribs and one sternum; knows its true, false and floating ribs well and protects the heart and lungs." },
    { id: 'jt-0', w: 'jt', lv: 0, name: "Synovia", title: "The Joint’s Oil", shape: 'drop', color: '#8EC5EA', acc: ['sparkle'], bio: "A drop of synovial fluid that keeps the knee and shoulder slippery so the cartilage glides silently." },
    { id: 'jt-1', w: 'jt', lv: 1, name: "Goni", title: "The Precise Goniometer", shape: 'dyna', color: '#1E9E8F', acc: ['glasses'], bio: "Measures flexion, extension, abduction and pronation in degrees and writes every ROM in the chart." },
    { id: 'jt-2', w: 'jt', lv: 2, name: "Scopey", title: "Master of Arthroscopy", shape: 'glove', color: '#9FD3C7', acc: ['crown'], bio: "Sees inside the knee through a small incision, removes a torn meniscus and, if needed, replaces the joint with a TKA." },
    { id: 'mu-0', w: 'mu', lv: 0, name: "Kettle", title: "The Skeletal Muscle Coach", shape: 'kettle', color: '#D64F6E', acc: ['headband'], bio: "Loves hypertrophy and fears atrophy. Knows that muscle only pulls and never pushes." },
    { id: 'mu-1', w: 'mu', lv: 1, name: "Delta", title: "The Triangular Shoulder Muscle", shape: 'hat', color: '#E07F78', acc: ['glasses'], bio: "The deltoid; abducts the arm and is a favourite site for intramuscular injections. It takes its name from the letter Δ." },
    { id: 'mu-2', w: 'mu', lv: 2, name: "Achilles", title: "The Swift-Footed Tendon", shape: 'flame', color: '#FF7A45', acc: ['crown'], bio: "The strongest tendon in the body, joining the calf muscle to the heel; every plantar flexion happens with its help." },
    { id: 'fx-0', w: 'fx', lv: 0, name: "Casty", title: "Guardian of the Fracture", shape: 'bandage', color: '#EEF2F6', acc: ['sparkle'], bio: "Keeps a closed fracture still so the callus can join it. Knows greenstick and spiral fractures by their lines." },
    { id: 'fx-1', w: 'fx', lv: 1, name: "Rayo", title: "The Imaging Detective", shape: 'xray', color: '#3F7FBF', acc: ['glasses'], bio: "From X-ray and CT to MRI and DXA, finds every hidden fracture and bulging disc and interprets the T-score." },
    { id: 'fx-2', w: 'fx', lv: 2, name: "Charty", title: "Master of ORIF and Rehabilitation", shape: 'clipboard', color: '#7B5CD6', acc: ['cape', 'crown'], bio: "Reads ORIF, THA and BK at a glance and accompanies the patient through physiotherapy and back to ADLs." }
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
      id: 'r1', w: 'lx', title: "Mrs Young’s History", who: "Nicole Young, a 76-year-old woman",
      brief: "The nurse takes her history: “When I was young I injured the ligaments of my left ankle several times playing basketball. Later the same ankle twisted and they said the tendon was inflamed. Last year I fell off my bike and partly dislocated my right shoulder. Last year they also said my bone density was low.” You must rewrite it in medical terms.",
      chart: [["1", "repeated ligament injury of the left ankle"], ["2", "tendon inflammation"], ["3", "partial dislocation of the right shoulder"], ["4", "low bone density"]],
      fig: { a: 'msk-parts', l: [] },
      steps: [
        M("Term", "What is a ligament injury from twisting the ankle called?", ['sprain', 'strain', 'fracture', 'bursitis'], "sprain = ligament injury; strain = muscle or tendon."),
        M("Term", "Which word is written for “an inflamed tendon”?", ['tendinitis', 'tenotomy', 'myositis', 'synovitis'], 'tendin/o + -itis.'),
        M("Term", "“A partly dislocated shoulder” means…", ['subluxation of the right shoulder', 'dislocation of the left shoulder', 'fracture of the right humerus', 'rotator cuff tear'], "sub- = less than; a partial dislocation."),
        M("Term", "What is low bone density that is not yet full osteoporosis called?", ['osteopenia', 'osteoporosis', 'osteomalacia', 'osteitis'], "oste/o + -penia (deficiency)."),
        P("Direction", "Match each part of the history to its direction word", [["left ankle", 'left'], ["right shoulder", 'right'], ["only one shoulder", 'unilateral'], ["both ankles", 'bilateral']], "Directions in the chart."),
        S("Spelling", "Spell the term for partial dislocation", 'subluxation', 'sub- + luxation.', 'subl…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: "Mrs Connolly’s Hip Pain", who: "Janet Connolly, a 48-year-old woman",
      brief: "Mrs Connolly complains of left hip pain, both on movement and at rest. Her left leg is turned outward, and it hurts when the ankle is bent upward. You must write the findings with medical terms and abbreviations.",
      chart: [["Complaint", "left hip pain"], ["examination", "leg turned outward"], ["pain", "when the ankle is bent upward"], ["organ", 'LLE']],
      fig: { a: 'directions', l: [] },
      steps: [
        M("abbreviation", "Which abbreviation is written for the affected limb?", ['LLE', 'RLE', 'LUE', 'RUE'], 'left lower extremity.'),
        M("Movement", "What is “bending the ankle upward” called?", ['dorsiflexion', 'plantar flexion', 'eversion', 'abduction'], "Toes toward the shin.", null, { a: ['foot-moves'], l: [] }),
        M("Movement", "Which word is written for “leg turned outward”?", ['lateral (external) rotation', 'medial rotation', 'adduction', 'circumduction'], "lateral = away from the midline."),
        M("Term", "What is the thighbone called?", ['femur', 'tibia', 'fibula', 'humerus'], "femor/o = thigh; “thigh pain” = femoral pain."),
        T("Term", "Joint pain is called arthralgia and muscle pain myalgia.", true, "-algia = pain."),
        S("Spelling", "Spell the term for bending the foot upward", 'dorsiflexion', 'dors/o + flex/o + -ion.', 'dorsi…')
      ]
    },
    /* ================= استخوان ================= */
    {
      id: 'r3', w: 'bn', title: "Cooper’s Fifteenth Fracture", who: "Cooper, a 3-year-old boy",
      brief: "Cooper has osteogenesis imperfecta (OI) type III and has had 15 fractures of his arms and legs since birth. This time, while standing in his walker, his left thigh twisted and broke. He is short and both his legs are bowed. He receives a bisphosphonate infusion every two months.",
      chart: [['Dx', 'osteogenesis imperfecta type III'], ["fracture", 'left femur'], ["drug", 'bisphosphonate q2 months'], ["surgery", 'ORIF + IM rodding + hip spica']],
      fig: { a: 'oi-xray', l: ["Thin, broken bones in OI"] },
      steps: [
        M("disease", "What kind of disease is OI?", ["An inherited collagen disease with brittle bones", "bone infection", "Bone cancer", "Bone softening from lack of vitamin D"], 'brittle bone disease.'),
        M("drug", "What does a bisphosphonate do?", ["It slows the breakdown of bone by osteoclasts", "It softens the bone", "It treats infection", "It only reduces pain"], "Less bone is absorbed."),
        M("surgery", "ORIF means…", ["open reduction and internal fixation", "closed reduction", "external fixation", "removal of a limb"], 'open reduction internal fixation.'),
        M("surgery", "IM rodding means placing a rod in…", ["the marrow canal of the bone (intramedullary)", "into the muscle", "under the skin", "the hip joint"], "intra- + medull/o: inside the marrow cavity."),
        T("fracture", "A fracture that occurs in a bone weakened by disease is a pathologic fracture.", true, "In OI the bone breaks with little force."),
        S("Spelling", "Spell the term for the thighbone", 'femur', 'femor/o.', 'fem…')
      ]
    },
    {
      id: 'r4', w: 'bn', title: "A Fall on the Ice", who: "An 82-year-old woman in the emergency department",
      brief: "An 82-year-old woman has come in with severe left hip pain after a fall on the ice. Two years ago she broke her wrist and had a cast. A bone specialist had diagnosed moderate osteoporosis on a low-dose bone density X-ray. Now she holds her thigh bent and cannot straighten it.",
      chart: [['Hx', 'Colles fracture, cast'], ['BDT', 'moderate osteoporosis'], ["pain", '8/10, left hip'], ['Dx', 'comminuted fracture, left femoral neck']],
      fig: { a: 'osteoporosis', l: [] },
      steps: [
        M("Term", "Who is “the specialist who treats bone diseases”?", ['orthopedist', 'rheumatologist', 'podiatrist', 'chiropractor'], 'orthopedic surgeon.'),
        M("Term", "What are “porous bones” called?", ['osteoporosis', 'osteomalacia', 'osteomyelitis', 'osteoma'], 'oste/o + -porosis.'),
        M("diagnosis", "Which is the “low-dose X-ray for bone density”?", ['DXA (dual-energy X-ray absorptiometry)', 'MRI', 'bone scan', 'CT'], "BDT with DXA."),
        P("Movement", "Match each description to its term", [["bent thigh", 'flexion'], ["movement toward straightening", 'extension'], ["shattered bone", 'comminuted'], ["immobilising with a cast", 'cast']], 'Chart Note Transcription.'),
        M("treatment", "What is “putting in an artificial hip joint” called?", ['total hip arthroplasty (THA)', 'arthrodesis', 'osteotomy', 'ORIF'], 'arthr/o + -plasty.', null, { a: ['hip-prosthesis'], l: ["Hip prosthesis"] }),
        S("Spelling", "Spell the term for porous, fragile bone", 'osteoporosis', 'oste/o + -porosis.', 'osteop…')
      ]
    },
    /* ================= اسکلت ================= */
    {
      id: 'r5', w: 'sk', title: "Rachel’s Scoliosis", who: "Rachel, a 15-year-old girl",
      brief: "Four years ago Rachel had a posterior spinal fusion (PSF) with hooks and two rods for adolescent idiopathic scoliosis. The bone graft was taken from her right posterior superior iliac spine. Now her right scapula sticks out, her ribs are asymmetrical and she has mid and lower back pain. CT showed rotational scoliosis and angled ribs.",
      chart: [['Hx', 'PSF T4–L2 for idiopathic adolescent scoliosis'], ['PE', 'prominent right scapula, rib asymmetry'], ['CT', 'rotatory scoliosis'], ['Plan', 'osteotomies, rib resections, partial scapulectomy']],
      fig: { a: 'spine-curves', l: [] },
      steps: [
        M("disease", "scoliosis means…", ["sideways curve of the spine", "hunchback", "swayback", "slipped vertebra"], "scoli/o = crooked."),
        M("abbreviation", "PSF means…", ['posterior spinal fusion', 'partial spinal fracture', 'proximal scapular fixation', 'pelvic stress fracture'], "Fusing the vertebrae from the back."),
        M("transplant", "What is a bone graft from the patient’s own ilium called?", ['autograft', 'allograft', 'prosthesis', 'orthosis'], "auto- = self."),
        P("surgery", "Match each planned operation to its meaning", [['osteotomy', "cutting bone"], ['rib resection', "removing part of a rib (costectomy)"], ['partial scapulectomy', "removing part of the scapula"], ['spinal fusion', "fusing vertebrae"]], "Rachel’s operations."),
        M("Extent", "T4 to L2 means from the…", ["fourth thoracic vertebra to the second lumbar vertebra", "fourth cervical vertebra to the second lumbar", "fourth rib to the second vertebra", "fourth lumbar vertebra to the second sacral"], "T = thoracic, L = lumbar.", null, { a: ['spine'], l: [] }),
        S("Spelling", "Spell the term for a sideways curve of the spine", 'scoliosis', 'scoli/o + -osis.', 'scol…')
      ]
    },
    {
      id: 'r6', w: 'sk', title: "Radiology Report of the Lumbar Spine", who: "A patient with chronic low back pain",
      brief: "Report: “Anteroposterior and lateral views of the lumbar spine… The L5-S1 intervertebral disk space contains a slight shadow of decreased density. Slight narrowing of the L3-4 and L4-5 spaces. Bilateral laminectomies at L5-S1. Slight hypertrophic lipping of L4. The sacroiliac joint spaces are well preserved.”",
      chart: [['Views', 'AP and lateral'], ['Disk', 'L5-S1 degenerative'], ['Surgery', 'bilateral laminectomies'], ['SI joints', 'preserved']],
      fig: { a: 'mri-disc', l: ["MRI of the lumbar spine"] },
      steps: [
        M("Direction", "anteroposterior means…", ["from front to back", "from back to front", "from the side", "from top to bottom"], 'anter/o + poster/o.'),
        M("Term", "intervertebral means…", ["between the vertebrae", "inside a vertebra", "under a vertebra", "on a vertebra"], 'inter- + vertebr/o + -al.'),
        M("surgery", "bilateral laminectomies means…", ["removal of the lamina on both sides", "removal of a disc on one side", "fusing two vertebrae", "cutting two ribs"], "bi- = two; lamin/o + -ectomy."),
        M("Term", "Which two bones does sacroiliac refer to?", ["sacrum and ilium", "lumbar and sacrum", "coccyx and ilium", "femur and ilium"], 'sacr/o + ili/o.', null, { a: ['pelvis'], l: [] }),
        T("Term", "Hypertrophic means relating to the enlargement of a structure.", true, 'hyper- + -trophic.'),
        S("Spelling", "Spell the term for lumbar and sacral together", 'lumbosacral', 'lumb/o + sacr/o + -al.', 'lumbo…')
      ]
    },
    {
      id: 'r7', w: 'sk', title: "Susan’s TMJ Arthroplasty", who: "Susan, a 38-year-old teacher",
      brief: "After a car accident, Susan has suffered chronic pain of the jaw, neck and right ear. CT confirmed degenerative joint disease (DJD) of the right TMJ. Conservative treatment with a dental splint, NSAIDs and steroid injections did not work. An oral surgeon removed part of the head of the mandibular condyle (condylectomy).",
      chart: [['Dx', 'DJD of right TMJ'], ['Tx', 'bite plate, NSAIDs, steroid injections'], ['Op', 'arthroplasty of right TMJ, high condylectomy'], ['EBL', '50 mL']],
      fig: { a: 'skull', l: [] },
      steps: [
        M("abbreviation", "TMJ means…", ["jaw joint", "shoulder joint", "joint between vertebrae", "fixed joint between skull bones"], 'temporomandibular joint.'),
        M("abbreviation", "DJD is another name for which disease?", ['osteoarthritis', 'rheumatoid arthritis', 'gout', 'osteomyelitis'], 'degenerative joint disease.'),
        M("surgery", "condylectomy means…", ["removal of a condyle", "cutting into a joint", "repair of a condyle", "surgical fusion of a joint"], "‎-ectomy = removal."),
        M("bone", "The removed condyle belongs to which bone?", ['mandible', 'maxilla', 'temporal', 'zygomatic'], 'mandibular condyle.'),
        T("abbreviation", "An NSAID is a non-steroidal anti-inflammatory drug.", true, 'nonsteroidal anti-inflammatory drug.'),
        S("Spelling", "Spell the term for surgical repair or replacement of a joint", 'arthroplasty', 'arthr/o + -plasty.', 'arthrop…')
      ]
    },
    /* ================= مفاصل و حرکت ================= */
    {
      id: 'r8', w: 'jt', title: "An Acute Rheumatoid Flare", who: "Mary Pearl, a 60-year-old woman",
      brief: "Mrs Pearl has come in with swelling, stiffness and pain in her joints, especially the elbows, wrists and hands. A bone scan showed acute inflammation in several joints with damage to the articular cartilage, and an ESR test confirmed significant inflammation. Diagnosis: an acute flare of rheumatoid arthritis. Treatment: NSAIDs and physiotherapy with hydrotherapy and therapeutic exercise.",
      chart: [['CC', 'swelling, stiffness, arthralgia'], ['Bone scan', 'acute inflammation, damaged articular cartilage'], ['ESR', 'elevated'], ['Dx', 'acute episode of RA']],
      fig: { a: 'ra-hands', l: ["Advanced rheumatoid arthritis"] },
      steps: [
        M("symptom", "arthralgia means…", ["joint pain", "joint inflammation", "joint stiffness", "joint swelling"], 'arthr/o + -algia.'),
        M("test", "What does the ESR show?", ["The degree of inflammation in the body", "bone density", "Muscle damage", "uric acid"], 'erythrocyte sedimentation rate.'),
        M("disease", "What kind of disease is rheumatoid arthritis?", ["Autoimmune, with inflammation of the synovial membrane", "Wear of cartilage with age", "Uric acid deposits", "Bacterial infection of a joint"], 'autoimmune; synovitis.', null, { a: ['ra-deformity'], l: ["Hand deformity in rheumatoid arthritis"] }),
        P("treatment", "Match each treatment to its meaning", [['NSAID', "non-steroidal anti-inflammatory drug"], ['hydrotherapy', "water therapy"], ['therapeutic exercise', "treatment by planned exercises"], ['PT', "physical therapy"]], "The treatment plan."),
        T("Course", "Acute means sudden onset and a short course, unlike chronic.", true, "An acute flare of a chronic disease."),
        S("Spelling", "Spell the adjective in the name of autoimmune joint arthritis", 'rheumatoid', 'rheumat/o + -oid.', 'rheu…')
      ]
    },
    {
      id: 'r9', w: 'jt', title: "Right Knee Replacement", who: "A 68-year-old man",
      brief: "Since injuring his knees playing football in high school, he has had occasional knee pain and swelling. In his fifties, working on concrete made it worse. Constant pain and swelling now disturb his sleep and activity, and he walks with a cane. X-rays showed severe bilateral osteoarthritis, and he was admitted for a right TKR.",
      chart: [['Admitting Dx', 'osteoarthritis bilateral knees'], ['Op', 'right TKA'], ['Post-op', 'PT gait training with walker; OT for ADLs'], ['Day 5', 'ambulates 150 ft']],
      fig: { a: 'arthritis', l: [] },
      steps: [
        M("diagnosis", "osteoarthritis bilateral knees means…", ["osteoarthritis of both knees", "rheumatoid arthritis of one knee", "fracture of both knees", "knee bursitis"], "bi- = two."),
        M("surgery", "TKA means…", ["total knee replacement", "total hip replacement", "knee arthroscopy", "knee fusion"], 'total knee arthroplasty = TKR.'),
        P("rehabilitation", "Match each abbreviation to its meaning", [['PT', "physical therapy"], ['OT', "occupational therapy"], ['ADLs', "daily activities"], ['post-op', "after surgery"]], "The discharge summary."),
        O("Process", "Put the patient’s course in order", ["Knee injury when young", "Worsening pain and swelling", "X-ray: severe osteoarthritis", "Right TKR", "Walking with a walker and discharge"], "From the discharge summary."),
        M("Movement", "ambulate means…", ["to walk", "to bend the knee", "to turn in bed", "to stand on tiptoe"], "ambul/o = to walk."),
        S("Spelling", "Spell the term for wear-and-tear disease of bone and joint", 'osteoarthritis', 'oste/o + arthr/o + -itis.', 'osteoa…')
      ]
    },
    {
      id: 'r10', w: 'jt', title: "A Physiotherapy Note", who: "A middle-aged office worker",
      brief: "Chief complaint: neck pain with limited movement and right shoulder pain with limited ROM. Today’s treatment: moist heat and ultrasound to the cervical spine and 45 minutes of therapeutic exercise. Neck flexion, extension and rotation have improved, but the right shoulder hurts in flexion and abduction, especially resisted abduction; rotator cuff tendinitis, probably from impingement.",
      chart: [['CC', 'cervical neck pain; right shoulder pain'], ['Tx', 'moist heat, US, therapeutic exercise'], ['Neck', 'flexion, extension, rotation improved'], ['Shoulder', 'rotator cuff tendonitis']],
      fig: { a: 'us-therapy', l: ["Therapeutic ultrasound"] },
      steps: [
        M("Movement", "What is raising the arm out from the side of the body called?", ['abduction', 'adduction', 'flexion', 'pronation'], "ab- = away from.", null, { a: ['abd-add'], l: [] }),
        M("abbreviation", "ROM means…", ["range of motion", "Radiography", "autoimmune joint inflammation", "setting a bone"], 'range of motion.'),
        M("Term", "tendonitis means…", ["tendon inflammation", "torn tendon", "cutting a tendon", "suturing a tendon"], "It is also spelled tendinitis."),
        P("Movement", "Match each neck movement to its description", [['flexion', "bending the head forward"], ['extension', "bringing the head back upright"], ['rotation', "turning the head left and right"], ['hyperextension', "tipping the head back"]], "Neck movements."),
        M("abbreviation", "In this note, US means…", ["ultrasound (therapeutic ultrasound)", 'upper spine', 'ulnar surface', 'unilateral shoulder'], 'ultrasound.'),
        S("Spelling", "Spell the term for pertaining to the neck", 'cervical', 'cervic/o + -al.', 'cerv…')
      ]
    },
    /* ================= عضلات ================= */
    {
      id: 'r11', w: 'mu', title: "Thomas’s Brachial Plexus Injury", who: "Thomas, a 16-year-old boy",
      brief: "Thomas suffered a severe right brachial plexus injury in a lacrosse accident and his arm went “limp”. It has neither sensation nor movement. The supraspinatus, infraspinatus and deltoid have wasted and the shoulder is partly dislocated. ROM of the hip, knee and ankle is full. An EMG, nerve conduction study and SSEP were ordered; a gracilis muscle transfer is also possible.",
      chart: [['Dx', 'R brachial plexus injury, middle trunk (C7)'], ['PE', 'atrophy of supraspinatus, infraspinatus, deltoid'], ['Shoulder', 'subluxation'], ['Tests', 'EMG, NCS, SSEPs']],
      fig: { a: 'muscles-back', l: [] },
      steps: [
        M("symptom", "atrophy means…", ["wasting and shrinking of a muscle", "enlargement of a muscle", "muscle cramp", "muscle inflammation"], 'a- + -trophy.'),
        M("Test", "EMG means…", ["recording the muscle’s electrical activity", "magnetic imaging", "a muscle enzyme test", "radioactive bone scan"], 'electromyography.'),
        M("muscle", "The supraspinatus and infraspinatus belong to which group?", ['rotator cuff', 'hamstrings', 'quadriceps', 'abdominal muscles'], 'SITS.'),
        M("joint", "subluxation of the shoulder means…", ["partial dislocation of the shoulder", "fracture of the shoulder", "inflammation of the shoulder", "stiffness of the shoulder"], "sub- = partial."),
        T("abbreviation", "R/O in a chart means to “rule out” a diagnosis.", true, 'R/O phrenic nerve injury.'),
        S("Spelling", "Spell the term for muscle wasting", 'atrophy', 'a- + -trophy.', 'atro…')
      ]
    },
    {
      id: 'r12', w: 'mu', title: "A Child’s Muscle Weakness", who: "A 7-year-old boy",
      brief: "He has had muscle weakness since age 3 to 4. A muscle biopsy confirmed destruction of muscle fibres and muscular dystrophy was diagnosed. He still walks and has been on medication for four months. On examination he has proximal muscle weakness, hypertrophy and a short Achilles tendon.",
      chart: [['Dx', 'muscular dystrophy'], ['Bx', 'degeneration of muscle fibers'], ['PE', 'proximal weakness; Achilles shortening'], ['IV', 'blood samples over 24 h']],
      fig: { a: 'muscle-structure', l: [] },
      steps: [
        M("disease", "What is muscular dystrophy?", ["An inherited disease with progressive weakness and wasting of muscle", "Autoimmune inflammation of muscle", "Muscle infection", "rupture of a muscle"], "MD; the Duchenne type in boys."),
        M("diagnosis", "biopsy means…", ["removing a tissue sample for the microscope", "taking an X-ray", "a blood test", "a muscle tracing"], 'bi/o + -opsy.'),
        M("Direction", "proximal muscle weakness means weakness of the muscles…", ["near the trunk (shoulders and thighs)", "far from the trunk (hands and feet)", "on one side of the body", "of the face"], "proximal = near the trunk."),
        M("tendon", "The Achilles tendon joins which muscle to the heel?", ['gastrocnemius', 'quadriceps', 'biceps', 'deltoid'], 'calcaneal tendon.'),
        T("Term", "Hypertrophy means a muscle getting smaller.", false, "False; hypertrophy means enlargement."),
        S("Spelling", "Spell the term for progressive wasting from poor nourishment", 'dystrophy', 'dys- + -trophy.', 'dys…')
      ]
    },
    {
      id: 'r13', w: 'mu', title: "torn shoulder muscles", who: "Michael, a 56-year-old manager",
      brief: "Michael, who played football at university, has come to the orthopaedist with recurring shoulder pain. Even after 6 months of physiotherapy and NSAIDs he cannot abduct his right arm without pain. His shoulder dislocated 35 years ago. MRI confirmed a complete rotator cuff tear, and the surgeon suggested a Bankart repair.",
      chart: [['CC', 'recurrent R shoulder pain'], ['Hx', 'shoulder dislocation 35 years ago'], ['MRI', 'complete rotator cuff tear'], ['Plan', 'Bankart procedure; PT after 3 weeks']],
      fig: { a: 'origin-insertion', l: [] },
      steps: [
        M("Movement", "abduct means…", ["to move the arm away from the midline", "to bring the arm toward the body", "to bend the elbow", "to turn the palm"], "ab- = away from."),
        M("Imaging", "Why was an MRI ordered for the rotator cuff tear?", ["MRI shows soft tissue such as tendons well", "MRI shows only bone", "It is the cheapest method", "It measures bone density"], "Tendon = soft tissue."),
        P("muscle", "Match each rotator cuff muscle to its location", [['supraspinatus', "above the spine of the scapula"], ['infraspinatus', "below the spine of the scapula"], ['teres minor', "small round muscle"], ['subscapularis', "front surface of the scapula"]], "SITS: the four rotator cuff muscles."),
        M("surgery", "In surgery, the subscapularis tendon was cut “proximal to its insertion”, which means…", ["slightly closer to the trunk than its attachment", "exactly at the attachment", "at the muscle’s origin", "on the humerus"], "proximal = near the trunk."),
        M("abbreviation", "PT after surgery means…", ["physical therapy", "prosthesis", "a blood test", "occupational therapy"], 'physical therapy.'),
        S("Spelling", "Spell the term for complete separation of joint surfaces", 'dislocation', 'dis- + location.', 'dislo…')
      ]
    },
    /* ================= شکستگی، تشخیص و درمان ================= */
    {
      id: 'r14', w: 'fx', title: "Hip ORIF Follow-up", who: "A 76-year-old woman",
      brief: "Orthopaedic follow-up note: the patient has come for follow-up after ORIF of a left supracondylar femur fracture. X-ray: the fixation is in place, she has mild osteopenia and nothing significant has changed since surgery. The wound has healed well. Extension of the left knee is 20 degrees short of full ROM and flexion is over 90 degrees.",
      chart: [['CC', 'post-op follow-up, L femur fracture'], ['X-ray', 'fixation in place, mild osteopenia'], ['Exam', 'extension 20° short of full ROM; flexion > 90°'], ['IMP', 'improving; follow-up in 6 weeks']],
      fig: { a: 'fixation', l: [] },
      steps: [
        M("abbreviation", "CC in the note means…", ["chief complaint", "full cast", "CT scan", "calcium"], 'chief complaint.'),
        M("surgery", "ORIF means…", ["open reduction and internal fixation", "Closed reduction with a cast", "total joint replacement", "Traction with weights"], 'open reduction internal fixation.'),
        M("Site", "supracondylar means…", ["above the condyles", "below the condyles", "between the condyles", "on the condyles"], "supra- = above.", null, { a: ['bone-markings'], l: [] }),
        M("finding", "mild osteopenia means…", ["a mild decrease in bone mass", "severe osteoporosis", "bone infection", "a new fracture"], 'oste/o + -penia.'),
        M('ROM', "“Extension 20° short of full ROM” means…", ["the knee straightens 20 degrees less than fully", "the knee bends 20 degrees", "the knee straightens fully", "the knee straightens 20 degrees too far"], "Limited extension.", null, { a: ['goniometer'], l: [] }),
        S("Spelling", "Spell the one-word term for after surgery", 'postoperative', 'post- + operative.', 'post…')
      ]
    },
    {
      id: 'r15', w: 'fx', title: "The Wake-up Test in Spinal Surgery", who: "Lynn, a spinal fusion patient",
      brief: "During Lynn’s spinal fusion surgery, somatosensory evoked potentials (SSEP) were monitored. After the pedicle screws, hooks and rods were placed, the anaesthesia was lightened and she was asked to move her legs. Dorsiflexion confirmed the tibialis anterior was working, plantar flexion the gastrocnemius, knee flexion the hamstrings and knee extension the quadriceps.",
      chart: [['Monitoring', 'SSEPs; electrodes in quadriceps, tibialis anterior, gastrocnemius'], ['Wake-up test', 'all muscle groups moved'], ['Recovery', 'PACU']],
      fig: { a: 'muscles-front', l: [] },
      steps: [
        P("muscle", "Match each movement to the muscle it showed was working", [['dorsiflexion', 'tibialis anterior'], ['plantar flexion', 'gastrocnemius'], ['knee flexion', 'hamstrings'], ['knee extension', 'quadriceps']], 'Case Study 6-2.'),
        M("surgery", "spinal fusion means…", ["joining vertebrae together", "removing a disc", "cutting the spinal cord", "removing the lamina"], "fusion = joining."),
        M("Movement", "Which movement is lifting the toes upward?", ['dorsiflexion', 'plantar flexion', 'eversion', 'inversion'], "dors/o = back of the foot."),
        M("Site", "Which vertebrae are L2 to L4?", ["the second to fourth lumbar vertebrae", "cervical", "of the chest", "lowest back, over the sacrum"], 'L = lumbar.'),
        T("abbreviation", "The PACU is the post-anaesthesia care unit.", true, 'postanesthesia care unit.'),
        S("Spelling", "Spell the name of the back-of-thigh muscle group", 'hamstrings', "The three muscles at the back of the thigh.", 'ham…')
      ]
    },
    {
      id: 'r16', w: 'fx', title: "A Fall on an Outstretched Hand", who: "A 64-year-old woman",
      brief: "A woman slipped in the yard and fell on her outstretched hand. Her right wrist is swollen and deformed (“dinner-fork” shape). AP and lateral wrist X-rays are taken. After diagnosis, a closed reduction and cast are done and she is referred for bone density testing.",
      chart: [['Hx', 'FOOSH (fall on outstretched hand)'], ['X-ray', 'distal radius fracture with dorsal displacement'], ['Tx', 'closed reduction, cast'], ['Plan', 'DXA referral']],
      fig: { a: 'xray-colles', l: ["Colles fracture"] },
      steps: [
        M("fracture", "What is a fracture of the end of the radius from falling on an outstretched hand called?", ['Colles fracture', 'Pott fracture', 'greenstick fracture', 'compression fracture'], 'Colles.'),
        M("Direction", "distal radius means…", ["the end of the radius near the wrist", "the start of the radius near the elbow", "the shaft of the radius", "the ulna"], "distal = far from the trunk."),
        M("treatment", "closed reduction means…", ["setting without a surgical incision", "setting with surgery", "fixation with a plate", "removal of a limb"], "closed = without an incision."),
        M("diagnosis", "Why was she sent for DXA?", ["A low-force fracture in an older woman may be a sign of osteoporosis", "To see the ligaments", "To test the muscles", "To diagnose gout"], 'fragility fracture.'),
        T("Imaging", "AP and lateral means two images, from the front and from the side.", true, "Two views to see any displacement."),
        S("Spelling", "Spell the name of the thumb-side forearm bone", 'radius', 'radi/o.', 'rad…')
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
    ['Lx', "An adult body has 206 bones and more than 600 skeletal muscles."],
    ['Lx', "A tendon attaches muscle to bone and a ligament attaches bone to bone."],
    ['Lx', "Start the meaning from the suffix: inter/vertebr/al means “pertaining to between the vertebrae”."],
    ['Lx', "oste/o is bone, my/o muscle, arthr/o joint, chondr/o cartilage and ten/o tendon."],
    ['Lx', "my/o means muscle but myel/o means bone marrow or spinal cord."],
    ['Lx', "ilium with i is the hip bone; ileum with e is part of the gut."],
    ['Lx', "Proximal is near the trunk and distal far from the trunk."],
    ['Lx', "‎-plegia is complete paralysis and ‎-paresis weakness or partial paralysis."],
    ['Lx', "orthopedics comes from orth/o (straight) and ped/o (child): straightening children’s bones."],
    ['Bn', "An osteoblast builds (Build), an osteoclast breaks down (Crash)."],
    ['Bn', "Blood formation (hematopoiesis) takes place in the red marrow of spongy bone."],
    ['Bn', "The diaphysis is the shaft of a long bone and the epiphyses its two ends."],
    ['Bn', "The periosteum is the outer membrane of bone and full of nerves; that is why a fracture hurts so much."],
    ['Bn', "The kneecap is the largest sesamoid bone and grows inside the quadriceps tendon."],
    ['Bn', "A T-score of ‎-2.5‎ or lower on DXA means osteoporosis."],
    ['Bn', "Rickets is osteomalacia in children."],
    ['Bn', "A sarcoma is a malignancy of connective tissue: osteosarcoma in bone and chondrosarcoma in cartilage."],
    ['Sk', "The spine: 7 cervical, 12 thoracic, 5 lumbar; like breakfast at 7, lunch at 12 and dinner at 5."],
    ['Sk', "The atlas (C1) holds the head and turns on the axis (C2)."],
    ['Sk', "The mandible is the only movable bone of the skull."],
    ['Sk', "The radius is on the thumb side and the ulna on the little-finger side."],
    ['Sk', "Ribs 1 to 7 are true, 8 to 12 false, and 11 and 12 floating."],
    ['Sk', "Each hip bone is made of the fused ilium, ischium and pubis."],
    ['Sk', "Kyphosis is a hunched back, lordosis a swayback and scoliosis a sideways curve."],
    ['Sk', "The femur is the longest and strongest bone in the body."],
    ['Jt', "Synarthrosis is immovable, amphiarthrosis slightly movable and diarthrosis freely movable."],
    ['Jt', "Abduction is away from the midline (AB as in Away) and adduction toward it."],
    ['Jt', "Supination: you hold a bowl of “soup” in your palm."],
    ['Jt', "OA is wear of cartilage; RA an autoimmune disease of the synovial membrane."],
    ['Jt', "Gout comes from deposits of uric acid crystals and often starts in the big toe."],
    ['Jt', "A sprain is a ligament injury and a strain a muscle or tendon injury."],
    ['Jt', "‎-desis means fusion and ‎-centesis puncture to draw fluid."],
    ['Jt', "THA and THR are both total hip replacement; TKA and TKR the knee."],
    ['Mu', "Skeletal muscle is striated and voluntary; smooth involuntary; cardiac striated and involuntary."],
    ['Mu', "The origin is on the fixed bone and the insertion on the moving bone."],
    ['Mu', "The deltoid is named after the letter Δ and is a common IM injection site."],
    ['Mu', "The rotator cuff has four muscles: SITS."],
    ['Mu', "The sartorius is the longest muscle in the body and the Achilles tendon the strongest tendon."],
    ['Mu', "Atrophy means muscle wasting and hypertrophy enlargement."],
    ['Mu', "CK or CPK is an enzyme that rises in the blood with muscle damage."],
    ['Fx', "An open (compound) fracture means the bone has come through the skin."],
    ['Fx', "A greenstick fracture is incomplete and common in children."],
    ['Fx', "A Colles fracture is a fracture of the end of the radius from falling on an outstretched hand."],
    ['Fx', "ORIF means open reduction and internal fixation with a plate, screws or a rod."],
    ['Fx', "Malunion means healing crooked; nonunion means failing to heal."],
    ['Fx', "AK and BK above and below the knee; AE and BE above and below the elbow."],
    ['Fx', "A prosthesis replaces a body part; an orthosis supports an existing one."],
    ['Fx', "‎-rrhaphy means suture and ‎-rrhexis rupture."],
    ['Fx', "MRI is better for soft tissue (disc, ligament, meniscus) and X-ray for fractures."]
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
