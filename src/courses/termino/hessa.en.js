/* تراپو • ترمینو — حیطه «hessa» (Special Senses: Eyes and Ears)
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
    name: "Hessa", key: 'hessa', title: "Hessa • Special Senses Terminology: Eye and Ear", certCode: 'HS',
    subject: "Medical terminology of the special senses: eye, vision, ear, hearing and balance",
    kicker: "👁️ Medical terminology: The Eye and Ear",
    hello: "Hi, I’m <b>Hessa</b>, a curious eyeball with two sharp ears who sees and hears everything!",
    disclaimer: "Hessa is a learning tool and does not replace an eye and ear examination, clinical judgement or a physician’s orders.",
    eyes: "Dozens of bilingual figures and teaching images, from the cornea, lens and retina to the ossicles, cochlea, Snellen chart, audiogram and ear ventilation tube.",
    outcomes: [
      "Break every eye and ear word into prefix, root and suffix and say what it means",
      "Point out the layers of the eyeball, the lacrimal apparatus, the eye muscles and the path of light to the brain on a figure",
      "Tell refractive errors, cataract, glaucoma, retinal diseases and eyelid disorders apart",
      "Recognise the outer, middle and inner ear, the ossicles, the cochlea and the balance system",
      "Write the types of otitis and hearing loss, tinnitus, vertigo and Ménière disease with the right terms",
      "Read the Snellen chart, tonometry, audiometry, the Rinne and Weber tests, operations and the abbreviations OD, OS and AU"
    ],
    endText: "Just 5 minutes a day. A few weeks from now you’ll read an eye report or an audiogram like a familiar story.",
    obHello: "Hi! I’m Hessa, an eyeball with two sharp ears 👁️ What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “Language of the Senses” is the best start; the basic eye and ear roots are taught there!",
    demo: () => ({
      q: "The word <b dir=\"ltr\">blepharoptosis</b> means…",
      fig: { a: ['lid-disorders'], l: ["eyelid diseases"] },
      opts: ["drooping eyelid", "inflammation of the eyelid", "eyelid repair", "incision into the eyelid"],
      why: `${EA.K.wb('blephar/o', '-ptosis')}<br>The root <b dir="ltr">blephar/o</b> means eyelid and the suffix <b dir="ltr">-ptosis</b> means drooping; so it means <b>drooping of the eyelid</b>. Start the meaning from the suffix!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ["Fresh Eyes", "Curious Eye", "Sharp Ear", "Root Decoder", "Guardian of the Cornea", "Lens Master", "Friend of the Retina",
      "Ossicle Musician", "Cochlea Guide", "Guardian of Balance", "Otitis Detective", "Snellen Reader", "Word-Building Master", "Eye and Ear Legend", "Terminology Icon"],
    leagueRoles: ["optometry student", "Medical student", "Nursing student", "hearing specialist", "ophthalmology resident", "optometrist", "ENT resident", "Surgical technologist", "audiology student", "optician", "eye clinic nurse", "speech therapist", "Anaesthesia technologist"],
    firstBadge: ['👁️', "First Look"],
    worldBadges: { lx: ['🧩', "Decoder"], ey: ['👁️', "Sharp-Eyed"], vd: ['🕶️', "Guardian of Sight"], er: ['👂', "Sharp Ear"], hd: ['🩺', "Ear Detective"], tx: ['🔬', "Test Master"] },
    confetti: ['#1E88A8', '#7CC8E0', '#FFC800', '#3B6FD4', '#E8913A', '#17A398', '#8E6BD8', '#D9534F'],
    /* ابزارها */
    parseDefault: 'dacryocystitis',
    parseSamples: ['dacryocystitis', 'blepharoptosis', 'xerophthalmia', 'otopyorrhea', 'presbycusis', 'tympanoplasty', 'achromatopsia', 'keratoplasty'],
    ph: { dict: "Search: retina, cornea, otitis…", roots: "Search: kerat, ear, -opia…", abbr: "Search: OD, eye pressure, AU…" },
    toolsDisclaimer: "⚕️ Hessa is a learning tool; the dictionary and vision meter do not replace an ophthalmologist’s examination, audiometry or a physician’s judgement.",
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
  const VA = [[0.5, "Normal or near-normal vision", 'no impairment'], [0.3, "Mild low vision", 'mild'], [0.1, "Moderate low vision", 'moderate'],
    [0.05, "Severe low vision", 'severe'], [0, "blindness", 'blindness']];
  const HL = [[15, "Normal hearing", 'normal'], [25, "Slight hearing loss", 'slight'], [40, "Mild hearing loss", 'mild'], [55, "Moderate hearing loss", 'moderate'],
    [70, "Moderately severe hearing loss", 'moderately severe'], [90, "Severe hearing loss", 'severe'], [999, "Profound hearing loss", 'profound']];
  const cell = (tt, b, s) => `<div class="va__c"><span>${tt}</span><b>${b}</b>${s ? `<small>${s}</small>` : ''}</div>`;
  function vaOut() {
    const d = dec();
    if (!isFinite(d)) return "<p class=\"va__note\">Enter the numerator and denominator of the Snellen fraction, e.g. 20/40 or 6/12.</p>";
    const lm = Math.log10(1 / d), g = VA.find(r => d >= r[0] - 1e-9) || VA[VA.length - 1];
    const legal = parseFloat(st.num) === 20 && parseFloat(st.den) >= 200;
    return `<div class="va__out">${cell("Decimal acuity", `<bdi dir="ltr">${d.toFixed(2)}</bdi>`, `<bdi dir="ltr">${EA.ui.esc(st.num)}/${EA.ui.esc(st.den)}</bdi>`)}${cell('logMAR', `<bdi dir="ltr">${lm.toFixed(2)}</bdi>`, "The lower, the better; zero means 20/20")}${cell("Degree", g[1], `<bdi dir="ltr">${g[2]}</bdi>`)}</div>
      <p class="va__note">${parseFloat(st.num) === 20 ? `Someone with 20/${fa(EA.ui.esc(st.den))} vision sees at 20 feet what a healthy eye sees at ${fa(EA.ui.esc(st.den))} feet.` : "In the metric system, 6/6 is the same as 20/20."}${legal ? " In the US, vision of 20/200 or worse with best correction is “legal blindness”." : ''}</p>`;
  }
  function hlOut() {
    const v = parseFloat(st.db);
    if (!isFinite(v)) return "<p class=\"va__note\">Enter the hearing threshold in decibels (dB HL).</p>";
    const g = HL.find(r => v <= r[0]);
    return `<div class="va__out">${cell("threshold", `<bdi dir="ltr">${v} dB HL</bdi>`, '')}${cell("Degree of hearing loss", g[1], `<bdi dir="ltr">${g[2]}</bdi>`)}</div>`;
  }
  const field = (key, label, ph) => `<label class="va__in"><span>${label}</span><input type="number" inputmode="decimal" min="0" data-keep="${key}" data-va="${key}" value="${EA.ui.esc(st[key])}" placeholder="${ph}" autocomplete="off"></label>`;
  EA.APP.extraTool = {
    id: 'va', sym: 'VA', name: "Vision and hearing meter", color: '#1E88A8',
    /* برای آزمون: حدت اعشاری × ۱۰۰ */
    value: () => { const d = dec(); return isFinite(d) ? Math.round(d * 100) : 0; },
    pane: () => `<div class="tpane"><p class="muted">Enter the Snellen fraction: the numerator is the test distance (20 feet or 6 metres) and the denominator is the distance at which a healthy eye reads the same line.</p>
    <div class="va">${field('num', "Numerator (test distance)", '20')}<b class="va__slash">/</b>${field('den', "Denominator (line read)", '40')}</div>
    <div class="va__res" aria-live="polite">${vaOut()}</div>
    ${EA.ui.figCard({ a: ['snellen-art'], l: ["Snellen chart"] })}
    <h4 class="va__h">Hearing meter: audiogram threshold</h4>
    <div class="va">${field('db', "Average hearing threshold (dB HL)", '35')}</div>
    <div class="va__hl" aria-live="polite">${hlOut()}</div>
    <table class="mini"><tr><th>Threshold (dB HL)</th><th>Degree</th></tr>
      <tr><td><bdi dir="ltr">-10 – 15</bdi></td><td>Normal</td></tr><tr><td><bdi dir="ltr">16 – 25</bdi></td><td>Slight</td></tr>
      <tr><td><bdi dir="ltr">26 – 40</bdi></td><td>Mild</td></tr><tr><td><bdi dir="ltr">41 – 55</bdi></td><td>Moderate</td></tr>
      <tr><td><bdi dir="ltr">56 – 70</bdi></td><td>Moderately severe</td></tr><tr><td><bdi dir="ltr">71 – 90</bdi></td><td>Severe</td></tr><tr><td><bdi dir="ltr">91+</bdi></td><td>Profound</td></tr></table>
    <p class="muted">These grades are for learning; diagnosis rests on a full ophthalmologist’s examination and an audiologist’s audiometry.</p></div>`,
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
/* حِسّا — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از apps/hessa/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["accommodation", "ah-kom-oh-DAY-shun", "Automatic change in the shape of the lens to focus on near or far objects.", "lens adjusting its shape for near vision", "ey", "phys", ["Acc"]],
["achromatopsia", "ah-kroh-mah-TOP-see-ah", "Color blindness (a- = without, chromat/o = color, -opsia = vision).", "colour blindness", "vd", "dz", []],
["acoustic", "ah-KOOS-tik", "Pertaining to sound or hearing (acous/o, acoust/o).", "relating to sound", "lx", "body", []],
["acoustic neuroma", "ah-KOOS-tik noo-ROH-mah", "Benign tumor of the eighth cranial nerve that causes one-sided hearing loss.", "benign tumour of the eighth cranial nerve", "hd", "dz", []],
["ageusia", "ah-GOO-see-ah", "Loss of the sense of taste (a- = without, geus/o = taste).", "loss of taste", "lx", "sx", []],
["air conduction", "AIR kon-DUK-shun", "Sound carried through the ear canal, eardrum and ossicles to the inner ear.", "sound reaching the inner ear through canal and ossicles", "er", "phys", ["AC"]],
["amblyopia", "am-blee-OH-pee-ah", "Dull vision in one eye that is used less; lazy eye (ambly/o = dull).", "lazy eye", "vd", "dz", []],
["anacusis", "an-ah-KYOO-sis", "Total deafness (an- = without).", "complete deafness", "hd", "dz", []],
["anisocoria", "an-eye-soh-KOH-ree-ah", "Pupils of unequal size (anis/o = unequal, cor/o = pupil).", "unequal pupils", "vd", "sx", []],
["anosmia", "an-OZ-mee-ah", "Loss of the sense of smell (an- = without, osm/o = smell).", "loss of smell", "lx", "sx", []],
["anterior chamber", "an-TEER-ee-or CHAYM-ber", "Space between the cornea and the iris, filled with aqueous humor.", "fluid space between cornea and iris", "ey", "body", []],
["antibiotic ear drops", "an-tih-bye-OT-ik EER DROPS", "Drops placed in the ear canal to treat bacterial infection.", "drops against ear infection", "tx", "tx", []],
["aqueous humor", "AY-kwee-us HYOO-mor", "Watery fluid in the front of the eye between the cornea and lens.", "aqueous humour", "ey", "body", []],
["astigmatism", "ah-STIG-mah-tizm", "Blurred vision from an irregular curve of the cornea or lens.", "blurring from an irregularly curved cornea", "vd", "dz", ["Ast", "AST"]],
["audiogram", "AW-dee-oh-gram", "Graph of the results of a hearing test.", "graph of hearing thresholds by frequency", "tx", "lab", []],
["audiologist", "aw-dee-OL-oh-jist", "Specialist who measures hearing and treats hearing impairment.", "hearing specialist", "lx", "field", []],
["audiology", "aw-dee-OL-oh-jee", "Specialty dealing with hearing and hearing disorders (audi/o = hearing, sound).", "study and treatment of hearing disorders", "lx", "field", []],
["audiometer", "aw-dee-OM-eh-ter", "Instrument for measuring hearing.", "device that measures hearing thresholds", "tx", "lab", []],
["audiometry", "aw-dee-OM-eh-tree", "Measurement of hearing at different pitches and loudness levels.", "measuring hearing at each frequency", "tx", "lab", []],
["auditory", "AW-dih-tor-ee", "Pertaining to hearing (audit/o, audi/o).", "relating to the sense of sound", "lx", "body", []],
["auditory brainstem response", "AW-dih-tor-ee BRAYN-stem ree-SPONS", "Test of nerve responses of the hearing pathway to sound; also brainstem auditory evoked potentials.", "nerve pathway response to sound, measured by electrodes", "tx", "lab", ["ABR", "BAEP"]],
["auditory cortex", "AW-dih-tor-ee KOR-teks", "Area of the temporal lobe that interprets sound.", "sound centre in the temporal lobe", "er", "body", []],
["auditory ossicles", "AW-dih-tor-ee OS-ih-kulz", "Three tiny bones of the middle ear: malleus, incus and stapes.", "three tiny bones of the middle ear", "er", "body", []],
["aural", "AW-ral", "Pertaining to the ear (aur/o = ear).", "stethoscope", "lx", "body", []],
["aural fullness", "AW-ral FUL-nes", "Feeling of pressure or fullness in the ear.", "feeling of fullness in the ear", "hd", "sx", []],
["auricle", "AW-rih-kul", "The visible outer ear; also called pinna (auricul/o, pinn/i).", "ear flap", "er", "body", []],
["auricular", "aw-RIK-yoo-lar", "Pertaining to the auricle or ear (auricul/o).", "relating to the outer ear flap", "er", "body", []],
["auris dextra", "AW-ris DEKS-trah", "Latin for right ear.", "right ear", "lx", "body", ["AD"]],
["auris sinistra", "AW-ris sin-IS-trah", "Latin for left ear.", "left ear", "lx", "body", ["AS"]],
["auris uterque", "AW-ris yoo-TER-kweh", "Latin for both ears or each ear.", "both ears", "lx", "body", ["AU"]],
["barotrauma", "bair-oh-TRAW-mah", "Injury to the ear from a sudden change in air pressure (bar/o = pressure).", "ear injury from a pressure change", "hd", "dz", []],
["binocular vision", "bye-NOK-yoo-lar VIZH-un", "Use of both eyes together to see one image with depth.", "two-eyed vision with depth perception", "ey", "phys", []],
["blepharitis", "blef-ah-RYE-tis", "Inflammation of the eyelid (blephar/o = eyelid).", "inflammation of the eyelid", "lx", "dz", []],
["blepharoplasty", "BLEF-ah-roh-plas-tee", "Surgical repair of the eyelid, e.g. for drooping lids.", "eyelid surgery", "tx", "tx", []],
["blepharoptosis", "blef-ah-rop-TOH-sis", "Drooping of the upper eyelid (-ptosis = drooping).", "drooping eyelid", "vd", "dz", []],
["blindness", "BLYND-nes", "Loss of useful sight.", "inability to see", "vd", "dz", []],
["bone conduction", "BOHN kon-DUK-shun", "Sound carried through the bones of the skull directly to the inner ear.", "sound reaching the inner ear through the skull", "er", "phys", ["BC"]],
["canal of Schlemm", "kah-NAL ov SHLEM", "Channel at the angle of the anterior chamber through which aqueous humor drains.", "drainage channel for aqueous humour", "ey", "body", []],
["canthus", "KAN-thus", "Corner of the eye where the upper and lower eyelids meet; medial or lateral.", "corner of the eye", "ey", "body", []],
["cataract", "KAT-ah-rakt", "Clouding of the lens that causes gradual loss of vision.", "clouding of the lens", "vd", "dz", []],
["cerumen", "seh-ROO-men", "Earwax made by glands in the ear canal; protects the ear.", "earwax", "er", "body", []],
["chalazion", "kah-LAY-zee-on", "Painless cyst of a meibomian gland in the eyelid.", "painless cyst of an eyelid oil gland", "vd", "dz", []],
["cholesteatoma", "koh-lee-stee-ah-TOH-mah", "Cyst-like mass of skin cells growing in the middle ear.", "cyst-like skin mass in the middle ear", "hd", "dz", []],
["choroid", "KOH-royd", "Vascular layer of the uvea that nourishes the retina (choroid/o).", "vessel-rich middle layer under the retina", "ey", "body", []],
["ciliary body", "SIL-ee-air-ee BOD-ee", "Part of the uvea whose muscles change the shape of the lens and that makes aqueous humor.", "muscle ring that shapes the lens", "ey", "body", []],
["cochlea", "KOK-lee-ah", "Snail-shaped part of the inner ear that contains the organ of hearing (cochle/o).", "snail-shaped organ of hearing", "er", "body", []],
["cochlear", "KOK-lee-ar", "Pertaining to the cochlea (cochle/o).", "relating to the snail-shaped hearing organ", "er", "body", []],
["cochlear implant", "KOK-lee-ar IM-plant", "Device that sends electrical signals straight to the auditory nerve in deep hearing loss.", "electrode device stimulating the auditory nerve", "tx", "tx", []],
["color vision test", "KUL-or VIZH-un TEST", "Test with colored dot plates (Ishihara) to detect color blindness.", "colour vision test", "tx", "lab", []],
["conductive hearing loss", "kon-DUK-tiv HEER-ing LOS", "Hearing loss when sound cannot pass through the outer or middle ear.", "sound blocked in the outer or middle ear", "hd", "dz", []],
["cones", "KOHNZ", "Retinal receptors that give color and sharp vision in bright light.", "retinal receptors for colour and sharp vision", "ey", "phys", []],
["conjunctiva", "kon-junk-TYE-vah", "Thin mucous membrane lining the eyelids and covering the front of the eye (conjunctiv/o).", "thin membrane over the white of the eye", "ey", "body", []],
["conjunctival", "kon-junk-TYE-val", "Pertaining to the conjunctiva (conjunctiv/o).", "relating to the membrane over the white of the eye", "ey", "body", []],
["conjunctivitis", "kon-junk-tih-VYE-tis", "Inflammation of the conjunctiva; pinkeye.", "pinkeye", "vd", "dz", []],
["convergence", "kon-VER-jens", "Inward turning of both eyes to look at a near object.", "both eyes turning inwards for near vision", "ey", "phys", []],
["cornea", "KOR-nee-ah", "Clear front part of the outer layer that bends light into the eye (corne/o, kerat/o).", "clear window at the front of the eye", "ey", "body", []],
["corneal", "KOR-nee-al", "Pertaining to the cornea (corne/o).", "relating to the eye’s front window", "ey", "body", []],
["corneal abrasion", "KOR-nee-al ah-BRAY-zhun", "Scratch on the surface of the cornea.", "scratch on the eye’s front window", "vd", "dz", []],
["corrective lenses", "koh-REK-tiv LENZ-ez", "Eyeglasses or contact lenses that correct refractive errors.", "glasses or contacts that fix refractive errors", "tx", "tx", []],
["dacryoadenitis", "dak-ree-oh-ad-eh-NYE-tis", "Inflammation of the lacrimal gland (aden/o = gland).", "inflammation of the tear gland", "vd", "dz", []],
["dacryocystitis", "dak-ree-oh-sis-TYE-tis", "Inflammation of the lacrimal sac (dacry/o + cyst/o).", "inflammation of the tear sac", "vd", "dz", []],
["dacryocystorhinostomy", "dak-ree-oh-sis-toh-rye-NOS-toh-mee", "New opening between the lacrimal sac and the nose to drain tears.", "new passage from tear sac to nose", "tx", "tx", []],
["dacryorrhea", "dak-ree-oh-REE-ah", "Excessive discharge of tears (dacry/o = tears).", "excessive tearing", "lx", "sx", []],
["deafness", "DEF-nes", "Complete or partial loss of hearing.", "inability to hear", "hd", "dz", []],
["decibel", "DES-ih-bel", "Unit that measures the loudness (intensity) of sound.", "unit of loudness", "er", "phys", ["dB"]],
["diabetic retinopathy", "dye-ah-BET-ik ret-ih-NOP-ah-thee", "Damage to retinal blood vessels caused by diabetes (-pathy = disease).", "diabetic retina damage", "vd", "dz", []],
["diopter", "dye-OP-ter", "Unit that measures the refractive power of a lens.", "dioptre", "ey", "phys", ["D"]],
["diplopia", "dih-PLOH-pee-ah", "Double vision (dipl/o = double, -opia = vision).", "double vision", "lx", "sx", []],
["ear irrigation", "EER ir-ih-GAY-shun", "Washing the ear canal with water to remove wax.", "washing out earwax", "tx", "tx", []],
["ectropion", "ek-TROH-pee-on", "Eyelid turned outward, away from the eyeball.", "outward turning of the eyelid", "vd", "dz", []],
["electronystagmography", "ee-lek-troh-nis-tag-MOG-rah-fee", "Recording of eye movements to test the balance system.", "recording eye movements to test balance", "tx", "lab", ["ENG"]],
["emmetropia", "em-eh-TROH-pee-ah", "Normal refraction: light focuses exactly on the retina.", "normal vision (emmetropia)", "ey", "phys", ["Em"]],
["entropion", "en-TROH-pee-on", "Eyelid turned inward so lashes rub the eyeball.", "inward turning of the eyelid", "vd", "dz", []],
["enucleation", "ee-noo-klee-AY-shun", "Surgical removal of the whole eyeball.", "removal of the eyeball contents", "tx", "tx", []],
["equilibrium", "ee-kwih-LIB-ree-um", "Sense of balance, controlled by the vestibule and semicircular canals.", "balance", "er", "phys", []],
["esotropia", "es-oh-TROH-pee-ah", "Strabismus with one eye turning inward; cross-eye (eso- = inward).", "inward turning of the eye", "vd", "dz", ["ET", "ST"]],
["eustachian tube", "yoo-STAY-shun TOOB", "Auditory tube from the middle ear to the nasopharynx that equalizes pressure (salping/o).", "tube linking middle ear and throat", "er", "body", []],
["exophthalmos", "eks-off-THAL-mos", "Bulging of the eyeballs, often from thyroid disease.", "bulging eyes", "vd", "sx", []],
["exotropia", "eks-oh-TROH-pee-ah", "Strabismus with one eye turning outward; walleye (exo- = outward).", "outward turning of the eye", "vd", "dz", ["XT"]],
["external auditory meatus", "eks-TER-nal AW-dih-tor-ee mee-AY-tus", "Ear canal leading from the auricle to the eardrum.", "external auditory canal", "er", "body", []],
["external ear", "eks-TER-nal EER", "Outer ear: the auricle and the external auditory canal up to the eardrum.", "ear flap and canal up to the eardrum", "er", "body", []],
["extracapsular cataract extraction", "eks-trah-KAP-soo-lar KAT-ah-rakt eks-TRAK-shun", "Removal of the lens leaving the back of its capsule in place.", "lens removal leaving the back of the capsule", "tx", "tx", ["ECCE"]],
["extraocular muscles", "eks-trah-OK-yoo-lar MUS-elz", "Six muscles outside the eyeball that move the eye.", "six muscles that move the eye", "ey", "body", ["EOM"]],
["eye patching", "EYE PACH-ing", "Covering the strong eye to make the lazy eye work harder in amblyopia.", "patching therapy", "tx", "tx", []],
["eyeball", "EYE-bawl", "The globe of the eye, lying in the bony orbit; its wall has three layers.", "globe of the eye", "ey", "body", []],
["eyelid", "EYE-lid", "Movable fold that covers and protects the eye; palpebra (blephar/o, palpebr/o).", "lid that closes over the eye", "ey", "body", []],
["fluorescein angiography", "floo-oh-RES-ee-in an-jee-OG-rah-fee", "Photographs of retinal vessels after a dye is injected into a vein.", "dye photographs of the retinal vessels", "tx", "lab", ["IVFA"]],
["fovea centralis", "FOH-vee-ah sen-TRAH-lis", "Pit in the center of the macula, packed with cones; point of sharpest vision.", "central pit (fovea)", "ey", "body", []],
["glaucoma", "glaw-KOH-mah", "Disease with raised intraocular pressure that damages the optic nerve and can cause blindness.", "optic nerve damage from high eye pressure", "vd", "dz", ["IOP"]],
["gustation", "gus-TAY-shun", "The sense of taste (gustat/o, geus/o = taste).", "taste", "lx", "phys", []],
["hair cells", "HAIR SELZ", "Sensory cells of the cochlea and vestibule that respond to movement of fluid.", "sound-sensing cells of the inner ear", "er", "phys", []],
["hearing", "HEER-ing", "Sense that perceives sound; audition.", "sense of sound", "er", "phys", []],
["hearing aid", "HEER-ing AYD", "Device that makes sound louder for a person with hearing loss.", "device that amplifies sound", "tx", "tx", []],
["hearing loss", "HEER-ing LOS", "Partial or total inability to hear.", "reduced ability to hear", "hd", "dz", ["HL"]],
["hemianopia", "hem-ee-ah-NOH-pee-ah", "Blindness in half of the visual field.", "blindness in half the visual field", "vd", "sx", []],
["hertz", "HERTS", "Unit that measures the frequency (pitch) of sound.", "unit of sound frequency", "er", "phys", ["Hz"]],
["hordeolum", "hor-DEE-oh-lum", "Infection of an oil gland at the edge of the eyelid; sty.", "stye", "vd", "dz", []],
["hyperacusis", "hye-per-ah-KYOO-sis", "Abnormally sensitive hearing; normal sounds seem too loud.", "ordinary sounds seem too loud", "hd", "sx", []],
["hyperopia", "hye-per-OH-pee-ah", "Farsightedness: image falls behind the retina, so near objects are blurred.", "farsightedness", "vd", "dz", []],
["impacted cerumen", "im-PAK-ted seh-ROO-men", "Earwax packed in the ear canal, which can block hearing.", "impacted earwax", "hd", "dz", []],
["incus", "ING-kus", "Anvil; middle ossicle between the malleus and stapes.", "anvil-shaped middle ossicle", "er", "body", []],
["inner ear", "IN-er EER", "Labyrinth in the temporal bone with the cochlea, vestibule and semicircular canals.", "labyrinth of hearing and balance", "er", "body", []],
["intraocular", "in-trah-OK-yoo-lar", "Within the eye (intra- = within).", "within the eye", "ey", "body", []],
["intraocular lens", "in-trah-OK-yoo-lar LENZ", "Artificial lens placed in the eye after cataract removal.", "artificial lens placed in the eye", "tx", "tx", ["IOL"]],
["intraocular pressure", "in-trah-OK-yoo-lar PRESH-er", "Pressure of the fluid inside the eye.", "fluid pressure inside the eye", "tx", "lab", ["IOP"]],
["iridectomy", "ir-ih-DEK-toh-mee", "Removal of part of the iris, often for glaucoma.", "removal of part of the coloured ring of the eye", "tx", "tx", []],
["iris", "EYE-ris", "Colored muscular ring that controls the size of the pupil (ir/o, irid/o).", "coloured muscular ring around the pupil", "ey", "body", []],
["iritis", "eye-RYE-tis", "Inflammation of the iris (ir/o, irid/o = iris).", "inflammation of the iris", "lx", "dz", []],
["keratitis", "kair-ah-TYE-tis", "Inflammation of the cornea (kerat/o = cornea).", "inflammation of the cornea", "lx", "dz", []],
["keratoplasty", "KAIR-ah-toh-plas-tee", "Surgical repair of the cornea; corneal transplant.", "corneal transplant", "tx", "tx", []],
["labyrinth", "LAB-ih-rinth", "Maze of canals of the inner ear for hearing and balance (labyrinth/o).", "maze of the inner ear", "er", "body", []],
["labyrinthectomy", "lab-ih-rin-THEK-toh-mee", "Removal of the labyrinth to stop severe vertigo.", "removal of the inner ear maze", "tx", "tx", []],
["labyrinthitis", "lab-ih-rin-THYE-tis", "Inflammation of the labyrinth, causing vertigo.", "inflammation of the labyrinth", "hd", "dz", []],
["lacrimal", "LAK-rih-mal", "Pertaining to tears (lacrim/o).", "relating to tears", "ey", "body", []],
["lacrimal apparatus", "LAK-rih-mal ap-ah-RAT-us", "Structures that make and drain tears: gland, canals, sac and nasolacrimal duct.", "tear-making and tear-draining system", "ey", "body", []],
["lacrimal gland", "LAK-rih-mal GLAND", "Gland above the outer corner of the eye that makes tears (lacrim/o, dacry/o).", "tear gland above the outer eye corner", "ey", "body", []],
["LASIK", "LAY-sik", "Laser-assisted in situ keratomileusis: a laser reshapes the cornea under a flap.", "laser reshaping of the cornea under a flap", "tx", "tx", ["LASIK"]],
["lens", "LENZ", "Clear, flexible structure behind the pupil that focuses light on the retina (phac/o, phak/o).", "clear focusing body behind the pupil", "ey", "body", []],
["macula lutea", "MAK-yoo-lah LOO-tee-ah", "Yellow oval area of the retina around the fovea, used for central vision.", "yellow spot of sharp central vision", "ey", "body", []],
["macular degeneration", "MAK-yoo-lar dee-jen-er-AY-shun", "Breakdown of the macula with loss of central vision, usually with age.", "loss of central vision from macula damage", "vd", "dz", ["AMD", "ARMD"]],
["malleus", "MAL-ee-us", "Hammer; first ossicle, attached to the eardrum (malle/o).", "hammer-shaped ossicle", "er", "body", []],
["mastoid process", "MAS-toyd PROS-es", "Bony bump of the temporal bone behind the ear, with air cells (mastoid/o).", "bony bump behind the ear", "er", "body", []],
["mastoidal", "mas-TOYD-al", "Pertaining to the mastoid process (mastoid/o).", "relating to the bone behind the ear", "er", "body", []],
["mastoidectomy", "mas-toyd-EK-toh-mee", "Surgical removal of mastoid air cells.", "removal of mastoid air cells", "tx", "tx", []],
["mastoiditis", "mas-toyd-EYE-tis", "Inflammation of the mastoid air cells.", "inflammation of the bone behind the ear", "hd", "dz", []],
["meibomian gland", "my-BOH-mee-an GLAND", "Oil gland in the eyelid that lubricates the edge of the lid.", "oil gland of the eyelid margin", "ey", "body", []],
["Meniere disease", "men-ee-AIR dih-ZEEZ", "Inner ear disease with attacks of vertigo, tinnitus and hearing loss.", "Ménière disease", "hd", "dz", []],
["middle ear", "MID-el EER", "Air-filled cavity behind the eardrum that holds the ossicles; tympanic cavity.", "air-filled cavity with the ossicles", "er", "body", []],
["miosis", "my-OH-sis", "Constriction of the pupil.", "constriction of the pupil", "vd", "sx", []],
["miotic", "my-OT-ik", "Drug that constricts the pupil; used in glaucoma.", "drug that constricts the pupil", "tx", "tx", []],
["motion sickness", "MOH-shun SIK-nes", "Nausea and dizziness from movement that confuses the balance organs.", "nausea from mismatched eye and balance signals", "hd", "dz", []],
["mydriasis", "mih-DRYE-ah-sis", "Dilation of the pupil.", "dilation of the pupil", "vd", "sx", []],
["mydriatic", "mid-ree-AT-ik", "Drug that dilates the pupil for eye examination.", "drug that dilates the pupil", "tx", "tx", []],
["myopia", "my-OH-pee-ah", "Nearsightedness: image falls in front of the retina, so distant objects are blurred.", "nearsightedness", "vd", "dz", ["MY", "Myop"]],
["myringitis", "mir-in-JYE-tis", "Inflammation of the eardrum; also called tympanitis (myring/o = eardrum).", "inflammation of the eardrum", "lx", "dz", []],
["myringoplasty", "mir-IN-goh-plas-tee", "Surgical repair of the eardrum.", "surgical repair of the eardrum", "tx", "tx", []],
["myringotomy", "mir-in-GOT-oh-mee", "Incision of the eardrum to drain fluid, often with tube placement.", "incision of the eardrum", "tx", "tx", []],
["nasolacrimal duct", "nay-zoh-LAK-rih-mal DUKT", "Duct that carries tears from the lacrimal sac into the nose.", "tear duct to the nose", "ey", "body", []],
["noise-induced hearing loss", "NOYZ in-DOOST HEER-ing LOS", "Hearing loss caused by long exposure to loud sound.", "hair cell damage from loud sound", "hd", "dz", []],
["nyctalopia", "nik-tah-LOH-pee-ah", "Night blindness (nyct/o = night).", "night blindness", "vd", "sx", []],
["nystagmus", "nis-TAG-mus", "Involuntary, rhythmic back-and-forth movement of the eyes.", "involuntary trembling of the eyes", "vd", "sx", []],
["ocular", "OK-yoo-lar", "Pertaining to the eye (ocul/o = eye).", "relating to the eye", "lx", "body", []],
["oculodynia", "ok-yoo-loh-DIN-ee-ah", "Pain in the eye (ocul/o = eye, -dynia = pain).", "Latin-rooted word for eye pain", "lx", "sx", []],
["oculus dexter", "OK-yoo-lus DEKS-ter", "Latin for right eye.", "right eye", "lx", "body", ["OD"]],
["oculus sinister", "OK-yoo-lus SIN-is-ter", "Latin for left eye.", "left eye", "lx", "body", ["OS"]],
["oculus uterque", "OK-yoo-lus yoo-TER-kweh", "Latin for both eyes or each eye.", "both eyes", "lx", "body", ["OU"]],
["olfaction", "ol-FAK-shun", "The sense of smell (olfact/o = smell).", "smell", "lx", "phys", []],
["ophthalmalgia", "off-thal-MAL-jee-ah", "Pain in the eye; also called ophthalmodynia or oculodynia.", "Greek-rooted word for eye pain", "lx", "sx", []],
["ophthalmic", "off-THAL-mik", "Pertaining to the eye (ophthalm/o), as in ophthalmic drops.", "relating to the eye or its medicines", "ey", "body", []],
["ophthalmologist", "off-thal-MOL-oh-jist", "Physician who diagnoses and treats eye diseases, including surgery.", "eye doctor (ophthalmologist)", "lx", "field", []],
["ophthalmology", "off-thal-MOL-oh-jee", "Branch of medicine that studies and treats the eye (ophthalm/o = eye).", "study of the eye (ophthalmology)", "lx", "field", ["Ophth"]],
["ophthalmoscope", "off-THAL-moh-skohp", "Lighted instrument for looking at the retina through the pupil.", "instrument for viewing the back of the eye", "tx", "lab", []],
["ophthalmoscopy", "off-thal-MOS-koh-pee", "Examination of the inside of the eye with an ophthalmoscope.", "viewing the retina through the pupil", "tx", "lab", []],
["optic", "OP-tik", "Pertaining to the eye or to vision (opt/o).", "relating to the eye or vision", "lx", "body", []],
["optic disc", "OP-tik DISK", "Point where the optic nerve leaves the retina; has no receptors, so it is the blind spot.", "blind spot where the nerve leaves the retina", "ey", "body", []],
["optic nerve", "OP-tik NERV", "Second cranial nerve; carries visual impulses from the retina to the brain.", "second cranial nerve, for sight", "ey", "body", []],
["optician", "op-TISH-un", "Technician who fills eyeglass prescriptions and fits eyewear.", "maker of glasses", "lx", "field", []],
["optometrist", "op-TOM-eh-trist", "Doctor of optometry who examines the eyes and prescribes corrective lenses (opt/o = vision, -metry = measurement).", "vision tester who prescribes glasses", "lx", "field", ["OD"]],
["orbit", "OR-bit", "Bony cavity of the skull that holds the eyeball; eye socket.", "bony eye socket", "ey", "body", []],
["organ of Corti", "OR-gan ov KOR-tee", "Hearing receptor in the cochlea with hair cells that turn vibrations into nerve impulses.", "hearing receptor in the cochlea", "er", "body", []],
["otalgia", "oh-TAL-jee-ah", "Pain in the ear; earache; also called otodynia.", "earache built with the -algia suffix", "lx", "sx", []],
["otic", "OH-tik", "Pertaining to the ear; e.g. otic drops.", "relating to the ear", "tx", "tx", []],
["otitis", "oh-TYE-tis", "Any inflammation of the ear.", "ear inflammation", "lx", "dz", []],
["otitis externa", "oh-TYE-tis eks-TER-nah", "Inflammation of the outer ear canal; swimmer's ear.", "inflammation of the outer ear", "hd", "dz", ["OE"]],
["otitis interna", "oh-TYE-tis in-TER-nah", "Inflammation of the inner ear; labyrinthitis.", "inflammation of the inner ear", "hd", "dz", []],
["otitis media", "oh-TYE-tis MEE-dee-ah", "Inflammation of the middle ear, common in children.", "inflammation of the middle ear", "hd", "dz", ["OM"]],
["otodynia", "oh-toh-DIN-ee-ah", "Pain in the ear (ot/o = ear, -dynia = pain).", "earache built with the -dynia suffix", "lx", "sx", []],
["otologist", "oh-TOL-oh-jist", "Specialist who diagnoses and treats diseases of the ear.", "ear specialist", "lx", "field", []],
["otology", "oh-TOL-oh-jee", "Study of the ear and its diseases (ot/o = ear).", "study of the ear", "lx", "field", ["Oto"]],
["otoplasty", "OH-toh-plas-tee", "Surgical repair or reshaping of the auricle.", "surgery of the outer ear flap", "tx", "tx", []],
["otopyorrhea", "oh-toh-pye-oh-REE-ah", "Discharge of pus from the ear (py/o = pus).", "pus discharge from the ear", "hd", "sx", []],
["otorhinolaryngologist", "oh-toh-rye-noh-lair-in-GOL-oh-jist", "Physician who treats diseases of the ear, nose and throat (ot/o + rhin/o + laryng/o).", "ear, nose and throat specialist", "lx", "field", ["ENT", "ORL"]],
["otorrhagia", "oh-toh-RAY-jee-ah", "Bleeding from the ear (-rrhagia = bursting forth of blood).", "bleeding from the ear", "hd", "sx", []],
["otorrhea", "oh-toh-REE-ah", "Discharge from the ear (ot/o = ear, -rrhea = discharge).", "discharge from the ear", "lx", "sx", []],
["otosclerosis", "oh-toh-skleh-ROH-sis", "Hardening of bone around the stapes so it cannot vibrate; causes conductive hearing loss.", "extra bone locking the stapes", "hd", "dz", []],
["otoscope", "OH-toh-skohp", "Lighted instrument with lenses for looking into the ear.", "lighted instrument for viewing the eardrum", "tx", "lab", []],
["otoscopy", "oh-TOS-koh-pee", "Examination of the ear canal and eardrum with an otoscope.", "viewing the ear canal and eardrum", "tx", "lab", []],
["oval window", "OH-val WIN-doh", "Opening between the middle and inner ear covered by the base of the stapes.", "opening where the stapes sits", "er", "body", []],
["palpebral", "PAL-peh-bral", "Pertaining to the eyelid (palpebr/o).", "relating to the eyelid", "ey", "body", []],
["perforated tympanic membrane", "PER-foh-ray-ted tim-PAN-ik MEM-brayn", "Hole or tear in the eardrum.", "perforated eardrum", "hd", "dz", []],
["peripheral vision", "peh-RIF-er-al VIZH-un", "Vision at the outer edges of the visual field.", "vision at the edges of the field", "ey", "phys", []],
["PERRLA", "PER-lah", "Pupils equal, round, reactive to light and accommodation; a normal pupil exam.", "normal pupils (PERRLA)", "tx", "lab", ["PERRLA"]],
["phacoemulsification", "fak-oh-ee-mul-sih-fih-KAY-shun", "Cataract surgery that breaks up the lens with ultrasound and suctions it out.", "breaking up a cataract with ultrasound", "tx", "tx", []],
["photophobia", "foh-toh-FOH-bee-ah", "Abnormal sensitivity to or fear of light (phot/o = light, -phobia = fear).", "sensitivity to light", "vd", "sx", []],
["photoreceptor", "foh-toh-ree-SEP-tor", "Light-sensitive cell of the retina: a rod or a cone (phot/o = light).", "light-sensing cell of the retina", "ey", "phys", []],
["photorefractive keratectomy", "foh-toh-ree-FRAK-tiv kair-ah-TEK-toh-mee", "Laser removal of corneal tissue from the surface to reshape it.", "PRK (laser surface removal of the cornea)", "tx", "tx", ["PRK"]],
["presbycusis", "prez-bih-KYOO-sis", "Gradual hearing loss with age (presby/o = old age, -cusis = hearing).", "age-related hearing loss", "hd", "dz", []],
["presbyopia", "prez-bee-OH-pee-ah", "Loss of near focusing with age as the lens hardens (presby/o = old age).", "age-related farsightedness", "vd", "dz", []],
["pressure-equalizing tube", "PRESH-er EE-kwah-lye-zing TOOB", "Small tube placed in the eardrum to drain the middle ear and equalize pressure.", "ear ventilation tube", "tx", "tx", ["PE tube"]],
["pupil", "PYOO-pil", "Opening in the center of the iris through which light enters (pupill/o, cor/o).", "opening in the centre of the iris", "ey", "body", []],
["pupillary", "PYOO-pih-lair-ee", "Pertaining to the pupil (pupill/o), as in the pupillary reflex.", "relating to the opening in the iris", "ey", "body", []],
["radial keratotomy", "RAY-dee-al kair-ah-TOT-oh-mee", "Spoke-like cuts in the cornea to flatten it and correct myopia.", "spoke-like cuts in the cornea for myopia", "tx", "tx", ["RK"]],
["refraction", "ree-FRAK-shun", "Bending of light rays by the cornea and lens to focus an image on the retina.", "bending of light in the eye", "ey", "phys", []],
["refraction test", "ree-FRAK-shun TEST", "Test that finds the lens power needed to correct vision.", "test to find the right glasses", "tx", "lab", []],
["refractive error", "ree-FRAK-tiv AIR-or", "Defect in focusing light on the retina: myopia, hyperopia, astigmatism or presbyopia.", "focusing fault of the eye", "vd", "dz", []],
["retina", "RET-ih-nah", "Inner layer of the eye that contains the light receptors, rods and cones (retin/o).", "light-sensitive inner layer of the eye", "ey", "body", []],
["retinal", "RET-ih-nal", "Pertaining to the retina (retin/o).", "relating to the light-sensitive layer", "ey", "body", []],
["retinal detachment", "RET-ih-nal dee-TACH-ment", "Separation of the retina from the choroid; feels like a curtain over vision.", "inner eye layer separating from the choroid", "vd", "dz", ["RD"]],
["retinitis", "ret-ih-NYE-tis", "Inflammation of the retina (retin/o = retina).", "inflammation of the retina", "lx", "dz", []],
["retinoblastoma", "ret-ih-noh-blas-TOH-mah", "Malignant tumor of the retina in young children.", "malignant eye tumour of young children", "vd", "dz", []],
["retinopathy of prematurity", "ret-ih-NOP-ah-thee ov pree-mah-CHOOR-ih-tee", "Abnormal growth of retinal vessels in premature infants.", "abnormal eye vessels in premature babies", "vd", "dz", ["ROP"]],
["Rinne test", "RIN-ee TEST", "Tuning fork test that compares air conduction with bone conduction.", "tuning fork test comparing air and bone conduction", "tx", "lab", []],
["rods", "RODZ", "Retinal receptors that work in dim light and give black-and-white vision.", "retinal receptors for dim light", "ey", "phys", []],
["round window", "ROWND WIN-doh", "Membrane-covered opening of the cochlea that releases pressure waves.", "membrane that releases cochlear pressure", "er", "body", []],
["sclera", "SKLEER-ah", "Tough white outer layer of the eyeball; the white of the eye (scler/o).", "white of the eye", "ey", "body", []],
["scleral", "SKLEER-al", "Pertaining to the sclera (scler/o).", "relating to the white of the eye", "ey", "body", []],
["scleral buckling", "SKLEER-al BUK-ling", "Silicone band placed around the sclera to repair retinal detachment.", "scleral buckle", "tx", "tx", []],
["scleritis", "skleh-RYE-tis", "Inflammation of the sclera.", "inflammation of the sclera", "vd", "dz", []],
["scotoma", "skoh-TOH-mah", "Blind spot in the visual field (scot/o = darkness).", "blind spot in the visual field", "vd", "sx", []],
["semicircular canals", "sem-ee-SER-kyoo-lar kah-NALZ", "Three fluid-filled loops of the inner ear that sense head movement for balance.", "three loops that sense head rotation", "er", "body", []],
["sensorineural hearing loss", "sen-soh-ree-NOO-ral HEER-ing LOS", "Hearing loss from damage to the cochlea or the auditory nerve.", "damage to the cochlea or auditory nerve", "hd", "dz", []],
["sensory receptor", "SEN-soh-ree ree-SEP-tor", "A nerve ending or cell that detects a stimulus such as light, sound, touch or a chemical.", "cell that turns a stimulus into a nerve signal", "lx", "phys", []],
["serous otitis media", "SEER-us oh-TYE-tis MEE-dee-ah", "Middle ear inflammation with watery fluid behind the eardrum.", "clear fluid behind the eardrum", "hd", "dz", ["SOM"]],
["slit lamp", "SLIT LAMP", "Microscope with a narrow beam of light to examine the front of the eye.", "microscope with a narrow beam for the front of the eye", "tx", "lab", []],
["Snellen chart", "SNEL-en CHART", "Chart of letters of decreasing size used to measure visual acuity, e.g. 20/20.", "letter chart for visual acuity", "tx", "lab", ["VA"]],
["special senses", "SPESH-al SEN-sez", "The senses of sight, hearing, equilibrium, smell and taste, which have their own sense organs in the head.", "vision, hearing, balance, smell and taste", "lx", "phys", []],
["stapedectomy", "stay-peh-DEK-toh-mee", "Removal of the stapes and replacement with a prosthesis, for otosclerosis.", "removal of the stirrup bone with a prosthesis", "tx", "tx", []],
["stapes", "STAY-peez", "Stirrup; smallest ossicle, fits into the oval window (staped/o).", "stirrup-shaped ossicle", "er", "body", []],
["strabismus", "strah-BIZ-mus", "Eyes that do not look in the same direction because of muscle imbalance.", "misalignment of the eyes (strabismus)", "vd", "dz", []],
["suppurative otitis media", "SUP-yoo-rah-tiv oh-TYE-tis MEE-dee-ah", "Middle ear infection with pus.", "pus behind the eardrum", "hd", "dz", []],
["tinnitus", "tih-NYE-tus", "Ringing, buzzing or roaring sound in the ears.", "ringing in the ears", "hd", "sx", []],
["tonometry", "toh-NOM-eh-tree", "Measurement of intraocular pressure; screens for glaucoma (ton/o = tension).", "measuring eye pressure", "tx", "lab", ["IOP"]],
["trabeculectomy", "trah-bek-yoo-LEK-toh-mee", "Surgery that makes a new drainage channel for aqueous humor in glaucoma.", "new drainage route for glaucoma", "tx", "tx", []],
["tuning fork", "TOO-ning FORK", "Two-pronged metal instrument that vibrates to test hearing.", "vibrating two-pronged hearing test tool", "tx", "lab", []],
["tympanic", "tim-PAN-ik", "Pertaining to the eardrum or middle ear (tympan/o).", "relating to the eardrum", "er", "body", []],
["tympanic membrane", "tim-PAN-ik MEM-brayn", "Eardrum; thin membrane between the outer and middle ear that vibrates with sound (myring/o, tympan/o).", "eardrum (tympanic membrane)", "er", "body", ["TM"]],
["tympanometry", "tim-pah-NOM-eh-tree", "Measurement of how well the eardrum moves; shows fluid in the middle ear.", "measuring eardrum movement", "tx", "lab", []],
["tympanoplasty", "tim-pan-oh-PLAS-tee", "Surgical repair of the eardrum and middle ear bones.", "repair of the eardrum and ossicles", "tx", "tx", []],
["uvea", "YOO-vee-ah", "Pigmented, vascular middle layer of the eye: choroid, ciliary body and iris (uve/o).", "vascular middle layer of the eye", "ey", "body", []],
["uveitis", "yoo-vee-EYE-tis", "Inflammation of the uvea.", "inflammation of the uvea", "vd", "dz", []],
["vertigo", "VER-tih-goh", "Feeling that the room is spinning; loss of balance.", "spinning dizziness", "hd", "sx", []],
["vestibular", "ves-TIB-yoo-lar", "Pertaining to the vestibule (vestibul/o), the balance organ.", "pertaining to an atrium", "er", "body", []],
["vestibule", "VES-tih-byool", "Central part of the inner ear concerned with balance (vestibul/o).", "entrance chamber of the inner ear for balance", "er", "body", []],
["vestibulocochlear nerve", "ves-tib-yoo-loh-KOK-lee-ar NERV", "Eighth cranial nerve; carries hearing and balance impulses to the brain.", "eighth cranial nerve, for hearing and balance", "er", "body", []],
["visual acuity", "VIZH-oo-al ah-KYOO-ih-tee", "Sharpness of vision, measured with a Snellen chart.", "sharpness of vision", "ey", "phys", ["VA"]],
["visual cortex", "VIZH-oo-al KOR-teks", "Area of the occipital lobe that interprets visual impulses.", "sight centre in the occipital lobe", "ey", "body", []],
["visual field", "VIZH-oo-al FEELD", "Whole area seen by the eye when it looks straight ahead.", "whole area seen without moving the eye", "ey", "phys", ["VF"]],
["visual field test", "VIZH-oo-al FEELD TEST", "Test that maps the area a person can see, including peripheral vision.", "mapping the area the eye can see", "tx", "lab", ["VF"]],
["vitrectomy", "vih-TREK-toh-mee", "Removal of the vitreous humor.", "removal of the eye’s clear jelly", "tx", "tx", []],
["vitreous humor", "VIT-ree-us HYOO-mor", "Clear jelly that fills the posterior cavity behind the lens (vitre/o = glassy).", "vitreous body", "ey", "body", []],
["Weber test", "WEB-er TEST", "Tuning fork placed on the top of the head to see in which ear sound is louder.", "tuning fork on the head to compare the ears", "tx", "lab", []],
["xerophthalmia", "zeer-off-THAL-mee-ah", "Dry eye from too little tear flow (xer/o = dry).", "dry eyes", "vd", "dz", []]];
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
    ['a-, an-', ['an', 'a'], 'without, not', "without, lacking", '*'],
    ['ambi-', ['ambi'], 'both', "both", 'lx'],
    ['bi-, bin-', ['bin', 'bi'], 'two, both', "two", 'ey'],
    ['dipl-, dipl/o', ['dipl'], 'double', "two-unit", 'lx'],
    ['en-', ['en'], 'in, inward', "within", 'vd'],
    ['ec-, ex-, exo-', ['exo', 'ex', 'ec'], 'out, outward', "outside", 'vd'],
    ['eso-', ['eso'], 'inward', "inwards", 'vd'],
    ['extra-', ['extra'], 'outside', "outside", 'ey'],
    ['hemi-', ['hemi'], 'half', "half", 'vd'],
    ['hyper-', ['hyper'], 'above, excessive', "excessive", '*'],
    ['intra-', ['intra'], 'within', "within", 'ey'],
    ['micro-', ['micro'], 'small', "small", 'tx'],
    ['peri-', ['peri'], 'around', "around", 'ey'],
    ['semi-', ['semi'], 'half', "half", 'er'],
    ['trans-', ['trans'], 'across, through', "through", 'tx'],
    // ریشه‌های عمومی
    ['aden/o', ['aden'], 'gland', "gland", 'vd'],
    ['anis/o', ['anis'], 'unequal', "not equal", 'vd'],
    ['bar/o', ['bar'], 'pressure, weight', "pressure", 'hd'],
    ['chromat/o', ['chromat'], 'color', "colour", 'vd'],
    ['cyst/o', ['cyst'], 'sac, bladder', "sac", 'vd'],
    ['glauc/o', ['glauc'], 'gray, bluish green', "grey-green", 'vd'],
    ['laryng/o', ['laryng'], 'larynx', "voice box", 'lx'],
    ['nyct/o', ['nyctal', 'nyct'], 'night', "night", 'vd'],
    ['olfact/o, osm/o', ['olfact', 'osm'], 'smell', "smell", 'lx'],
    ['geus/o, gustat/o', ['gustat', 'geus'], 'taste', "taste", 'lx'],
    ['phot/o', ['phot'], 'light', "light", 'vd'],
    ['presby/o', ['presby'], 'old age', "old age", 'lx'],
    ['py/o', ['py'], 'pus', "pus", 'hd'],
    ['rhin/o', ['rhin'], 'nose', "nose", 'lx'],
    ['scot/o', ['scot'], 'darkness', "darkness", 'vd'],
    ['ton/o', ['ton'], 'tension, pressure', "pressure, stretching", 'tx'],
    ['xer/o', ['xer'], 'dry', "dry", 'vd'],
    // چشم
    ['ophthalm/o, ocul/o', ['ophthalm', 'ocul'], 'eye', "eye", 'lx'],
    ['opt/o, optic/o', ['optic', 'opt'], 'eye, vision', "vision, eye", 'lx'],
    ['blephar/o, palpebr/o', ['blephar', 'palpebr'], 'eyelid', "eyelid", 'lx'],
    ['conjunctiv/o', ['conjunctiv'], 'conjunctiva', "conjunctiva", 'ey'],
    ['corne/o, kerat/o', ['corne', 'kerat'], 'cornea; hard', "cornea; hard", 'lx'],
    ['scler/o', ['scler'], 'sclera; hard', "sclera; hard", 'ey'],
    ['choroid/o', ['choroid'], 'choroid', "choroid", 'ey'],
    ['cycl/o', ['cycl'], 'ciliary body', "ciliary body", 'ey'],
    ['uve/o', ['uve'], 'uvea', "uvea", 'ey'],
    ['ir/o, irid/o', ['irid', 'ir'], 'iris', "iris", 'lx'],
    ['cor/o, core/o, pupill/o', ['pupill', 'core', 'cor'], 'pupil', "pupil", 'ey'],
    ['phac/o, phak/o', ['phac', 'phak'], 'lens', "lens", 'lx'],
    ['retin/o', ['retin'], 'retina', "retina", 'lx'],
    ['vitre/o', ['vitre'], 'glassy; vitreous body', "glassy; vitreous", 'ey'],
    ['dacry/o, lacrim/o', ['dacry', 'lacrim'], 'tears, tear duct', "tear", 'lx'],
    ['ambly/o', ['ambly'], 'dull, dim', "dull, dim", 'vd'],
    ['mydr/o', ['mydr'], 'widen, enlarge', "widening", 'vd'],
    ['mi/o', ['mi'], 'smaller, less', "smaller", 'vd'],
    ['nystagm/o', ['nystagm'], 'nodding, involuntary eye movement', "eye tremor", 'vd'],
    // گوش
    ['ot/o, aur/o, auricul/o', ['auricul', 'aur', 'ot'], 'ear', "ear", 'lx'],
    ['audi/o, audit/o', ['audit', 'audi'], 'hearing, sound', "hearing", 'lx'],
    ['acous/o, acoust/o, acus/o', ['acoust', 'acous', 'acus'], 'hearing', "hearing", 'lx'],
    ['myring/o, tympan/o', ['myring', 'tympan'], 'eardrum', "eardrum", 'lx'],
    ['staped/o', ['staped'], 'stapes', "stapes", 'er'],
    ['malle/o', ['malle'], 'malleus', "malleus", 'er'],
    ['incud/o', ['incud'], 'incus', "incus", 'er'],
    ['cochle/o', ['cochle'], 'cochlea', "cochlea", 'er'],
    ['labyrinth/o', ['labyrinth'], 'labyrinth, inner ear', "labyrinth", 'lx'],
    ['vestibul/o', ['vestibul'], 'vestibule', "upper heart chamber", 'er'],
    ['mastoid/o', ['mastoid'], 'mastoid process', "mastoid", 'hd'],
    ['salping/o', ['salping'], 'eustachian (auditory) tube', "Eustachian tube", 'er'],
    ['cerumin/o', ['cerumin'], 'cerumen, earwax', "earwax", 'er'],
    // پسوندها
    ['-opia, -opsia', ['opsia', 'opia'], 'vision', "vision", 'lx'],
    ['-cusis, -acusis', ['acusis', 'cusis'], 'hearing', "hearing", 'lx'],
    ['-otia', ['otia'], 'ear condition', "condition of the ear", 'hd'],
    ['-tropia', ['tropia'], 'turning', "turning around an axis", 'vd'],
    ['-ptosis', ['ptosis'], 'drooping, prolapse', "drooping", 'vd'],
    ['-phobia', ['phobia'], 'fear, sensitivity', "fear, sensitivity", 'vd'],
    ['-osmia', ['osmia'], 'smell', "smell", 'lx'],
    ['-algia, -dynia', ['algia', 'dynia'], 'pain', "pain", 'lx'],
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-osis, -iasis', ['iasis', 'osis', 'sis'], 'abnormal condition', "abnormal condition", '*'],
    ['-oma', ['oma'], 'tumor, mass', "tumour, mass", '*'],
    ['-pathy', ['pathy'], 'disease', "disease", 'vd'],
    ['-rrhea', ['rrhea'], 'flow, discharge', "secrete", 'lx'],
    ['-rrhagia', ['rrhagia'], 'bursting forth of blood', "bleeding", 'hd'],
    ['-sclerosis', ['sclerosis'], 'hardening', "hardening", 'hd'],
    ['-logy', ['logy'], 'study of', "study of", 'lx'],
    ['-logist', ['logist'], 'specialist', "specialist", 'lx'],
    ['-ectomy', ['ectomy'], 'surgical removal', "surgical removal", '*'],
    ['-tomy', ['tomy'], 'incision', "incision", '*'],
    ['-stomy', ['stomy'], 'new opening', "new opening", 'tx'],
    ['-plasty', ['plasty'], 'surgical repair', "surgical repair", 'tx'],
    ['-scope', ['scope'], 'instrument to view', "viewing instrument", 'tx'],
    ['-scopy', ['scopy'], 'visual examination', "viewing with an instrument", 'tx'],
    ['-meter', ['meter'], 'instrument to measure', "measuring instrument", 'tx'],
    ['-metry', ['metry'], 'measurement', "measurement", 'tx'],
    ['-gram', ['gram'], 'record', "record, image", 'tx'],
    ['-graphy', ['graphy'], 'process of recording', "recording process", 'tx'],
    ['-al, -ic, -ar, -ary, -ory, -ous', ['ary', 'ory', 'al', 'ic', 'ar', 'ous'], 'pertaining to', "pertaining to", '*'],
    ['-ia, -y, -ism', ['ism', 'ia', 'y'], 'condition', "condition", '*']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['A, Acc', 'accommodation', "accommodation", 'ey'],
    ['ABR', 'auditory brainstem response', "auditory brainstem response", 'tx'],
    ['AC', 'air conduction', "air conduction", 'er'],
    ['AD', 'auris dextra (right ear)', "right ear", 'lx'],
    ['AMD, ARMD', 'age-related macular degeneration', "age-related macular degeneration", 'vd'],
    ['AS', 'auris sinistra (left ear)', "left ear", 'lx'],
    ['ASL', 'American Sign Language', "American Sign Language", 'hd'],
    ['Ast, AST', 'astigmatism', "astigmatism", 'vd'],
    ['AU', 'auris uterque (both ears, each ear)', "both ears", 'lx'],
    ['BAEP', 'brainstem auditory evoked potentials', "brainstem auditory evoked potential", 'tx'],
    ['BC', 'bone conduction', "bone conduction", 'er'],
    ['BCVA', 'best corrected visual acuity', "best corrected visual acuity", 'tx'],
    ['cc', 'with correction (glasses or lenses)', "with glasses or contact lenses", 'tx'],
    ['D', 'diopter (lens strength)', "dioptre", 'ey'],
    ['dB', 'decibel', "decibel", 'er'],
    ['DVA', 'distance visual acuity', "distance visual acuity", 'tx'],
    ['ECCE', 'extracapsular cataract extraction', "extracapsular cataract extraction", 'tx'],
    ['EENT', 'eyes, ears, nose and throat', "eyes, ears, nose and throat", 'lx'],
    ['Em, EM', 'emmetropia', "normal vision", 'ey'],
    ['ENG', 'electronystagmography', "electronystagmography", 'tx'],
    ['ENT', 'ears, nose and throat', "ear, nose and throat", 'lx'],
    ['EOM', 'extraocular movements, muscles', "extraocular movements or muscles", 'ey'],
    ['ERG', 'electroretinography', "electroretinography", 'tx'],
    ['ET', 'esotropia', "inward turning of the eye", 'vd'],
    ['FC', 'finger counting', "counting fingers", 'tx'],
    ['HEENT', 'head, eyes, ears, nose and throat', "head, eyes, ears, nose and throat", 'lx'],
    ['HL', 'hearing level; hearing loss', "hearing level; hearing loss", 'hd'],
    ['HM', 'hand movements', "hand motion", 'tx'],
    ['Hz', 'hertz', "hertz", 'er'],
    ['ICCE', 'intracapsular cataract extraction', "intracapsular cataract extraction", 'tx'],
    ['IOL', 'intraocular lens', "intraocular lens", 'tx'],
    ['IOP', 'intraocular pressure', "intraocular pressure", 'tx'],
    ['IVFA', 'intravenous fluorescein angiography', "intravenous fluorescein angiography", 'tx'],
    ['LASIK', 'laser-assisted in situ keratomileusis', "LASIK", 'tx'],
    ['MY, Myop', 'myopia', "nearsightedness", 'vd'],
    ['NV', 'near vision', "near vision", 'tx'],
    ['OD', 'oculus dexter (right eye); also Doctor of Optometry', "right eye; Doctor of Optometry", 'lx'],
    ['OE', 'otitis externa', "inflammation of the outer ear", 'hd'],
    ['OM', 'otitis media', "inflammation of the middle ear", 'hd'],
    ['Ophth', 'ophthalmology', "study of the eye (ophthalmology)", 'lx'],
    ['ORL', 'otorhinolaryngology', "ear, nose and throat", 'lx'],
    ['OS', 'oculus sinister (left eye)', "left eye", 'lx'],
    ['Oto', 'otology', "otology", 'lx'],
    ['OU', 'oculus uterque (both eyes, each eye)', "both eyes", 'lx'],
    ['PE tube', 'pressure-equalizing tube', "ear ventilation tube", 'tx'],
    ['PERRLA', 'pupils equal, round, reactive to light and accommodation', "pupils equal, round, reactive to light and accommodation", 'tx'],
    ['PORP', 'partial ossicular replacement prosthesis', "partial ossicular replacement prosthesis", 'tx'],
    ['PRK', 'photorefractive keratectomy', "photorefractive keratectomy", 'tx'],
    ['RD', 'retinal detachment', "retinal detachment", 'vd'],
    ['RK', 'radial keratotomy', "radial keratotomy", 'tx'],
    ['ROP', 'retinopathy of prematurity', "retinopathy of prematurity", 'vd'],
    ['sc', 'without correction', "without glasses or contact lenses", 'tx'],
    ['SICS', 'small incision cataract surgery', "small-incision cataract surgery", 'tx'],
    ['SLP', 'speech-language pathologist', "speech-language pathologist", 'hd'],
    ['SOM', 'serous otitis media', "serous otitis media", 'hd'],
    ['ST', 'speech threshold; esotropia', "speech threshold; esotropia", 'tx'],
    ['TM', 'tympanic membrane', "eardrum", 'er'],
    ['TORP', 'total ossicular replacement prosthesis', "total ossicular replacement prosthesis", 'tx'],
    ['TTS', 'temporary threshold shift', "temporary threshold shift", 'hd'],
    ['VA', 'visual acuity', "visual acuity", 'ey'],
    ['VF', 'visual field', "visual field", 'ey'],
    ['XT', 'exotropia', "outward turning of the eye", 'vd'],
    ['y/o', 'years old', "years old", 'lx']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'body', icon: '👁️', name: "Structures of the eye and ear" },
    { id: 'phys', icon: '🔁', name: "Vision, Hearing and Balance" },
    { id: 'field', icon: '🎓', name: "Specialties and specialists" },
    { id: 'dz', icon: '🩺', name: "Diseases" },
    { id: 'sx', icon: '🔍', name: "Signs" },
    { id: 'lab', icon: '🧪', name: "Examination and Tests" },
    { id: 'tx', icon: '💊', name: "Treatment and Surgery" }
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
    return svg(360, 262, `${title("The five senses and their roots")}
      ${box(10, 34, '👁️', 'sight', "vision", 'ophthalm/o, ocul/o', '#e4f1fb')}${box(128, 34, '👂', 'hearing', "hearing and balance", 'ot/o, audi/o', '#fdecdf')}${box(246, 34, '👃', 'smell', "smell", 'olfact/o, osm/o', '#eef7e6')}
      ${box(69, 138, '👅', 'taste', "taste", 'gustat/o, geus/o', '#fde8ee')}${box(187, 138, '✋', 'touch', "touch", 'skin receptors', '#f1ecfb')}
      ${f(180, 252, "The special senses have dedicated organs in the head; the eye and ear have the most terms", { size: 9.5, fill: MUTED, w: 700 })}`, "The five senses");
  };

  A['eye-ear-overview'] = () => {
    const e = eyeSag(92, 126, 54, { vessels: false }), r = earSection(184, 80, 0.53);
    return svg(360, 250, `${title("Two special sense organs: eye and ear")}
      <rect x="6" y="32" width="172" height="186" rx="16" fill="#eef6fb"/><rect x="182" y="32" width="172" height="186" rx="16" fill="#fdf2ea"/>
      ${e.b}${r.b}
      ${lab(92, 52, 'eye', "organ of vision", { size: 11, fill: '#1e6f8a' })}${lab(268, 52, 'ear', "organ of hearing and balance", { size: 11, fill: '#b5561f' })}
      ${f(92, 206, "turns light into a nerve message", { size: 9, fill: INK, w: 700 })}${f(268, 206, "senses sound and head movement", { size: 9, fill: INK, w: 700 })}
      ${f(180, 240, "ophthalm/o means eye and ot/o means ear", { size: 9.5, fill: MUTED, w: 700 })}`, "Eye and ear", e.d + r.d);
  };

  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 18, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 129, fa, { size: 9.5, fill: c })}`;
    return svg(360, 192, `${title("One word, three pieces: xer/ophthalm/ia")}
      ${part(8, 50, 'xer', '#1272a3', '#ddf1fb')}${part(64, 104, 'ophthalm', '#b5561f', '#fdeadb')}${part(174, 40, 'ia', '#3f8a05', '#e7f9d8')}
      ${br(8, 58, 'root', "root: dry", '#1272a3')}${br(64, 168, 'root', "root: eye", '#b5561f')}${br(174, 214, 'suffix', "suffix: condition", '#3f8a05')}
      <rect x="226" y="40" width="126" height="40" rx="10" fill="#f8f6f5"/>${f(289, 57, "condition of dryness", { size: 10.5, fill: '#3f8a05', w: 800 })}${f(289, 73, "eye", { size: 10.5, fill: INK, w: 800 })}
      <path d="M194 150 C150 176 96 176 34 150" stroke="#b5561f" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M38 146 l-6 4 l7 3" stroke="#b5561f" stroke-width="2" fill="none"/>
      ${f(150, 186, "Start the meaning from the suffix, then read the roots from the beginning", { size: 10, fill: '#b5561f', w: 700 })}`, "The anatomy of a medical word");
  };

  A['root-map-eye'] = () => {
    const e = eyeSag(186, 150, 86);
    const R = (pt, x2, y2, root, fa, side) => `${pin(pt[0], pt[1], side < 0 ? x2 + 46 : x2, y2)}${t(side < 0 ? 8 : x2 + 4, y2 - 2, root, { size: 10.5, anchor: side < 0 ? 'start' : 'start', fill: '#1e6f8a', w: 900 })}${f(side < 0 ? 8 : x2 + 4, y2 + 12, fa, { size: 9, anchor: 'start', fill: INK })}`;
    const P = e.P;
    return svg(360, 300, `${title("Map of eye roots")}
      ${e.b}
      ${R(P.cornea, 70, 56, 'kerat/o, corne/o', "cornea", -1)}${R(P.iris, 70, 104, 'irid/o, ir/o', "iris", -1)}${R(P.pupil, 70, 160, 'cor/o, pupill/o', "pupil", -1)}
      ${R(P.lens, 70, 214, 'phac/o, phak/o', "lens", -1)}${R(P.ciliary, 70, 262, 'cycl/o', "ciliary body", -1)}
      ${R(P.choroid, 262, 46, 'choroid/o', "choroid", 1)}${R(P.sclera, 262, 278, 'scler/o', "sclera", 1)}${R(P.retina, 296, 222, 'retin/o', "retina", 1)}
      ${R(P.vitreous, 290, 126, 'vitre/o', "vitreous body", 1)}`, "Map of eye roots", e.d);
  };

  A['root-map-ear'] = () => {
    const r = earSection(20, 62, 1);
    const P = r.P;
    const R = (pt, x2, y2, root, fa, anchor) => `${pin(pt[0], pt[1], x2, y2)}${t(x2, y2 - 4, root, { size: 10, anchor: anchor || 'middle', fill: '#b5561f', w: 900 })}${f(x2, y2 + 9, fa, { size: 9, anchor: anchor || 'middle', fill: INK })}`;
    return svg(360, 300, `${title("Map of ear roots")}
      ${r.b}
      ${R(P.auricle, 40, 46, 'ot/o, aur/o', "ear, auricle", 'middle')}${R(P.tm, 128, 46, 'myring/o, tympan/o', "eardrum")}
      ${R(P.stapes, 186, 280, 'staped/o', "stapes")}${R(P.canals, 250, 46, 'labyrinth/o', "labyrinth")}
      ${R(P.cochlea, 318, 252, 'cochle/o', "cochlea")}${R(P.vestibule, 334, 120, 'vestibul/o', "upper heart chamber", 'end')}
      ${R(P.tube, 252, 284, 'salping/o', "Eustachian tube")}${R(P.mastoid, 80, 284, 'mastoid/o', "mastoid")}`, "Map of ear roots", r.d);
  };

  A.twins = () => {
    const row = (y, a, af, b, bf, note) => `<rect x="10" y="${y}" width="150" height="46" rx="12" fill="#e4f1fb"/><rect x="200" y="${y}" width="150" height="46" rx="12" fill="#fdecdf"/>
      ${t(85, y + 20, a, { size: 11.5, w: 900, fill: '#1e6f8a' })}${f(85, y + 36, af, { size: 9.5, fill: INK })}${t(275, y + 20, b, { size: 11.5, w: 900, fill: '#b5561f' })}${f(275, y + 36, bf, { size: 9.5, fill: INK })}
      <circle cx="180" cy="${y + 23}" r="12" fill="#2b2b2b"/>${t(180, y + 27, 'VS', { size: 8.5, fill: '#fff', w: 900, sym: true })}${note ? f(180, y + 58, note, { size: 8.5, fill: MUTED }) : ''}`;
    return svg(360, 300, `${title("Look-alike Traps")}
      ${row(30, 'ot/o', "ear (otitis)", 'or/o', "mouth (oral)")}${row(96, 'malleus', "malleus", 'malleolus', "ankle knob", '')}
      ${row(162, '-opia', "vision (myopia)", '-opsia', "vision (achromatopsia)", "Both mean vision; same-meaning twins")}${row(232, 'myring/o', "eardrum", 'tympan/o', "eardrum", "Two roots, one meaning")}`, "Look-alike Traps");
  };

  A['od-os-ou'] = () => {
    const L = eyeFront(110, 92, 0.9, { medial: 1 }), Rr = eyeFront(250, 92, 0.9, { medial: -1 });
    const ear = (x, flip) => `<path transform="translate(${x} 212) scale(${flip} 1)" d="M0 -32 C-26 -34 -32 0 -24 22 C-18 36 -4 38 0 28 C4 18 -10 12 -8 0 C-6 -12 6 -12 6 -20 C6 -28 4 -32 0 -32Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>`;
    return svg(360, 290, `${title("Right and left in the record: eye and ear")}
      ${L.b}${Rr.b}
      ${t(110, 140, 'OD', { size: 15, w: 900, fill: '#1e6f8a', sym: true })}${f(110, 156, "the patient’s right eye", { size: 9.5, fill: INK })}
      ${t(250, 140, 'OS', { size: 15, w: 900, fill: '#1e6f8a', sym: true })}${f(250, 156, "the patient’s left eye", { size: 9.5, fill: INK })}
      ${ear(96, 1)}${ear(264, -1)}
      ${t(140, 208, 'AD', { size: 14, w: 900, fill: '#b5561f', sym: true })}${f(140, 224, "right ear", { size: 9.5, fill: INK })}
      ${t(220, 208, 'AS', { size: 14, w: 900, fill: '#b5561f', sym: true })}${f(220, 224, "left ear", { size: 9.5, fill: INK })}
      <rect x="140" y="242" width="80" height="26" rx="13" fill="#eef7e6"/>${t(180, 260, 'OU • AU', { size: 11, w: 900, fill: '#3f8a05', sym: true })}
      ${f(180, 282, "OU is both eyes and AU both ears; the patient’s right is on our left in the picture", { size: 9, fill: MUTED, w: 700 })}`, "Right and left abbreviations", L.d + Rr.d);
  };

  /* ================= دنیای ۱: چشم، ساختار و بینایی ================= */
  /* برچسب با خط راهنما: از نقطه pt به (x,y)؛ side منفی یعنی متن سمت چپ */
  const tag = (pt, x, y, en, fa, side, o) => { const p = o || {}; const a = side < 0 ? 'start' : 'end';
    const tx = side < 0 ? 6 : 354, sz = (p.size || 10) / 10, w = Math.max(en.length * 5.9, fa.length * 4.6) * sz + 8;
    return `${pin(pt[0], pt[1], side < 0 ? tx + w : tx - w, y - 4)}${t(tx, y - 2, en, { size: p.size || 10, anchor: a, w: 800, fill: p.fill || INK })}${f(tx, y + 11, fa, { size: (p.size || 10) - 1, anchor: a, fill: p.faFill })}`; };

  A['eye-section'] = () => {
    const e = eyeSag(168, 156, 84), P = e.P;
    return svg(360, 300, `${title("Section of the eyeball")}
      ${e.b}
      ${tag(P.cornea, 70, 56, 'cornea', "cornea", -1)}${tag(P.aqueous, 70, 98, 'aqueous humor', "aqueous humour", -1)}${tag(P.iris, 70, 140, 'iris', "iris", -1)}
      ${tag(P.pupil, 64, 180, 'pupil', "pupil", -1)}${tag(P.lens, 70, 220, 'lens', "lens", -1)}${tag(P.ciliary, 80, 262, 'ciliary body', "ciliary body", -1)}
      ${tag(P.choroid, 290, 44, 'choroid', "choroid", 1)}${tag(P.vitreous, 300, 112, 'vitreous humor', "vitreous body", 1)}
      ${tag(P.fovea, 312, 150, 'fovea', "fovea", 1)}${tag(P.nerve, 316, 202, 'optic nerve', "optic nerve", 1)}${tag(P.retina, 292, 246, 'retina', "retina", 1)}${tag(P.sclera, 240, 286, 'sclera', "sclera (white of the eye)", 1)}`, "Section of the eyeball", e.d);
  };

  A['eye-front'] = () => {
    const e = eyeFront(186, 140, 1.55, { medial: 1 }), P = e.P;
    return svg(360, 274, `${title("The eye from the front and its protective structures")}
      ${e.b}
      ${tag(P.brow, 74, 46, 'eyebrow', "eyebrow", -1)}${tag(P.lashes, 70, 84, 'eyelashes', "eyelashes", -1)}${tag(P.upper, 296, 58, 'upper eyelid', "upper eyelid", 1)}
      ${tag(P.iris, 300, 104, 'iris', "iris", 1)}${tag(P.pupil, 300, 186, 'pupil', "pupil", 1)}${tag(P.sclera, 80, 150, 'sclera', "sclera", -1)}
      ${tag(P.lateral, 70, 196, 'lateral canthus', "outer corner of the eye", -1)}${tag(P.medial, 300, 232, 'medial canthus', "inner corner of the eye", 1)}${tag(P.lower, 150, 238, 'lower eyelid', "lower eyelid", -1)}
      ${f(180, 268, "The eyelids (palpebrae) and lashes cover the eye; the conjunctiva lies over the sclera and under the lids", { size: 8.5, fill: MUTED, w: 700 })}`, "The eye from the front", e.d);
  };

  A['lacrimal-path'] = () => {
    const e = eyeFront(140, 132, 1.15, { medial: 1, brow: false }), sh = nid(), id = nid();
    return svg(360, 284, `${title("The path of tears: from the gland to the nose")}
      <path d="M262 40 C300 60 318 120 312 170 C306 214 290 246 262 256 L248 256 L250 96Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>
      <path d="M262 170 C276 186 280 212 270 238" stroke="${C.skinLine}" stroke-width="1.6" fill="none"/>
      ${e.b}
      <g filter="url(#${sh})"><path d="M66 74 C80 58 112 58 122 72 C116 84 86 88 66 74Z" fill="#f7b3c2" stroke="#c96a80" stroke-width="1.4"/></g>
      ${curve(id, 'M96 92 C120 120 150 134 182 136', '#3b8fd0', 2, true)}
      <path d="M186 134 C198 124 214 118 228 118 M186 142 C198 146 214 146 228 140" stroke="#c96a80" stroke-width="3" fill="none" stroke-linecap="round"/>
      <ellipse cx="236" cy="128" rx="10" ry="16" fill="#f7b3c2" stroke="#c96a80" stroke-width="1.4"/>
      <path d="M236 144 C238 180 246 214 258 236" stroke="#c96a80" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M236 144 C238 180 246 214 258 236" stroke="#f7b3c2" stroke-width="4" fill="none" stroke-linecap="round"/>
      ${[1, 2, 3, 4].map((n, i) => { const pt = [[134, 70], [104, 112], [236, 104], [262, 214]][i]; return `<circle cx="${pt[0]}" cy="${pt[1]}" r="8" fill="#1e88a8"/>${t(pt[0], pt[1] + 3.6, String(n), { size: 9, fill: '#fff', w: 900, sym: true })}`; }).join('')}
      ${lab(56, 44, '1 lacrimal gland', "lacrimal gland: makes tears", { size: 9.5, anchor: 'start' })}${lab(6, 196, '2 tears wash the eye', "tears wash the surface of the eye", { size: 9.5, anchor: 'start' })}
      ${lab(354, 56, '3 lacrimal canals → sac', "tear ducts → tear sac", { size: 9.5, anchor: 'end' })}${lab(6, 240, '4 nasolacrimal duct → nose', "nasolacrimal duct → nasal cavity", { size: 9.5, anchor: 'start' })}
      ${f(180, 278, "The roots dacry/o and lacrim/o both mean tear", { size: 9, fill: MUTED, w: 700 })}`, "lacrimal apparatus", e.d + shadow(sh) + marker(id, '#3b8fd0'));
  };

  A['eye-muscles'] = () => {
    const sh = nid(), ig = nid();
    const m = (x1, y1, x2, y2, w) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${C.muscleLine}" stroke-width="${w + 3}" stroke-linecap="round"/><path d="M${x1} ${y1} L${x2} ${y2}" stroke="${C.muscle}" stroke-width="${w}" stroke-linecap="round"/><path d="M${x1} ${y1} L${x2} ${y2}" stroke="#f0a49a" stroke-width="2" stroke-linecap="round" opacity=".7"/>`;
    return svg(360, 304, `${title("The six extraocular muscles (right eye from the front)")}
      <g filter="url(#${sh})" transform="translate(0 14)">
        ${m(180, 92, 180, 44, 22)}${m(180, 208, 180, 256, 22)}${m(232, 150, 300, 150, 22)}${m(128, 150, 60, 150, 22)}
        ${m(218, 108, 262, 64, 12)}<circle cx="270" cy="56" r="9" fill="none" stroke="#9aa6ad" stroke-width="3"/>${m(270, 56, 300, 30, 9)}
        ${m(136, 196, 96, 236, 12)}
        <circle cx="180" cy="150" r="58" fill="${C.scl}" stroke="${C.sclLine}" stroke-width="2"/>
        <circle cx="180" cy="150" r="24" fill="url(#${ig})"/><circle cx="180" cy="150" r="9" fill="#111"/><circle cx="173" cy="143" r="3.5" fill="#fff"/>
      </g>
      ${lab(96, 46, 'superior rectus', "superior rectus: looking up", { size: 9.5 })}${lab(262, 280, 'inferior rectus', "inferior rectus: looking down", { size: 9.5 })}
      ${lab(312, 190, 'medial rectus', "medial rectus: towards the nose", { size: 9.5 })}${lab(52, 190, 'lateral rectus', "lateral rectus: towards the temple", { size: 9.5 })}
      ${lab(318, 112, 'superior oblique', "superior oblique (through the pulley)", { size: 9.5 })}${lab(56, 236, 'inferior oblique', "inferior oblique", { size: 9.5 })}
      ${t(306, 78, 'trochlea', { size: 8, fill: MUTED })}`, "extraocular muscles", shadow(sh) + radial(ig, '#4fb3d4', C.iris2));
  };

  A['retina-fundus'] = () => {
    const g = nid(), sh = nid();
    const vessel = (d, c, w) => `<path d="${d}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;
    const rod = x => `<rect x="${x}" y="70" width="7" height="58" rx="3.5" fill="#8fb3d9" stroke="#4f78a8"/><circle cx="${x + 3.5}" cy="136" r="4" fill="#f2c94c" stroke="${C.nerveLine}"/>`;
    const cone = x => `<path d="M${x} 128 L${x + 5} 92 L${x + 10} 128Z" fill="#e88a6a" stroke="#b5562f"/><rect x="${x + 2}" y="128" width="6" height="8" fill="#e88a6a"/><circle cx="${x + 5}" cy="140" r="4" fill="#f2c94c" stroke="${C.nerveLine}"/>`;
    return svg(360, 260, `${title("The back of the eye and the retina’s photoreceptors")}
      <g filter="url(#${sh})"><circle cx="112" cy="134" r="88" fill="url(#${g})"/></g>
      <circle cx="150" cy="138" r="20" fill="#c9622f" opacity=".45"/><circle cx="150" cy="138" r="4" fill="#8a3a1a"/>
      <circle cx="74" cy="128" r="13" fill="#ffe7a3" stroke="#e8c26a" stroke-width="1.5"/>
      ${vessel('M74 120 C90 92 110 76 150 66', '#a8261f', 3)}${vessel('M74 136 C90 166 112 182 150 196', '#a8261f', 3)}${vessel('M76 118 C70 92 60 70 50 60', '#a8261f', 2.4)}${vessel('M76 138 C70 166 62 186 52 200', '#a8261f', 2.4)}
      ${vessel('M80 124 C100 100 126 92 170 90', '#c2413a', 1.8)}${vessel('M80 132 C102 160 128 172 170 176', '#c2413a', 1.8)}
      ${pin(74, 128, 40, 226)}${lab(40, 238, 'optic disc', "optic disc: the blind spot", { size: 9 })}
      ${pin(150, 138, 236, 230)}${lab(290, 238, 'macula • fovea', "macula and fovea", { size: 9 })}
      ${pin(150, 66, 196, 52)}${lab(214, 46, 'retinal vessels', "retinal vessels", { size: 9 })}
      <rect x="216" y="62" width="138" height="122" rx="14" fill="#f4f7fb"/>
      ${rod(228)}${cone(242)}${rod(258)}${rod(270)}${cone(284)}${rod(300)}${cone(314)}${rod(330)}
      ${lab(250, 158, 'rods', "dim light, black and white", { size: 9.5, fill: '#4f78a8' })}${lab(318, 158, 'cones', "colour and sharp vision", { size: 9.5, fill: '#b5562f' })}
      ${f(285, 200, "the fovea has only cones;", { size: 9, fill: INK, w: 700 })}${f(285, 214, "so it gives the sharpest vision", { size: 9, fill: INK, w: 700 })}`, "Back of the eye", radial(g, '#f6a35e', '#c9542a') + shadow(sh));
  };

  A['visual-pathway'] = () => {
    const sh = nid(), id = nid(), ig = nid();
    const eye = x => `<circle cx="${x}" cy="62" r="24" fill="${C.scl}" stroke="${C.sclLine}" stroke-width="1.6"/><path d="M${x - 14} 44 Q${x} 34 ${x + 14} 44" fill="url(#${ig})"/><path d="M${x - 22} 72 A24 24 0 0 0 ${x + 22} 72" stroke="${C.ret}" stroke-width="3" fill="none"/>`;
    return svg(360, 300, `${title("The visual pathway: from the eye to the occipital cortex")}
      <g filter="url(#${sh})"><path d="M60 110 C60 70 300 70 300 110 L300 236 C300 290 60 290 60 236Z" fill="${C.brain}" stroke="${C.brainLine}" stroke-width="1.5" opacity=".75"/></g>
      ${eye(130)}${eye(230)}
      <path d="M130 86 L172 146 L130 196 L100 252 M230 86 L188 146 L230 196 L260 252" stroke="${C.nerve}" stroke-width="7" fill="none" stroke-linejoin="round"/>
      <path d="M130 86 L172 146 L130 196 L100 252 M230 86 L188 146 L230 196 L260 252" stroke="${C.nerveLine}" stroke-width="1" fill="none"/>
      <path d="M172 146 L188 146" stroke="${C.nerve}" stroke-width="10"/>
      <ellipse cx="128" cy="196" rx="11" ry="8" fill="#c7a6e0"/><ellipse cx="232" cy="196" rx="11" ry="8" fill="#c7a6e0"/>
      <path d="M86 236 C100 270 260 270 274 236" stroke="#e86a5a" stroke-width="10" fill="none" opacity=".55" stroke-linecap="round"/>
      ${lab(60, 40, 'eye • retina', "eye and retina", { size: 9.5 })}${lab(300, 40, 'eye • retina', "eye and retina", { size: 9.5 })}
      ${pin(150, 116, 78, 116)}${lab(40, 112, 'optic nerve', "optic nerve (CN II)", { size: 9 })}
      ${pin(180, 146, 300, 132)}${lab(318, 128, 'optic chiasm', "optic chiasm", { size: 9 })}
      ${pin(210, 172, 300, 170)}${lab(318, 166, 'optic tract', "optic tract", { size: 9 })}
      ${pin(128, 196, 60, 196)}${lab(36, 186, 'thalamus', "thalamus", { size: 9 })}
      ${lab(180, 254, 'visual cortex • occipital lobe', "visual cortex in the occipital lobe", { size: 9.5, fill: '#b5402f' })}
      ${f(180, 294, "The image on the retina is upside down; the brain turns it the right way up", { size: 9, fill: MUTED, w: 700 })}`, "Visual pathway", shadow(sh) + linear(ig, C.iris, C.iris2));
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
    return svg(360, 280, `${title("Accommodation: the lens for far and near")}
      ${panel(94, 7, far, 'far vision', "distance vision", "parallel rays; flat lens")}
      ${panel(196, 13, near, 'near vision', "near vision", "diverging rays; rounder lens")}
      ${pin(276, 94, 316, 60)}${lab(330, 52, 'retina', "retina", { size: 9 })}
      ${f(180, 272, "The ciliary muscle changes the shape of the lens (accommodation); with age the lens stiffens", { size: 8.5, fill: INK, w: 700 })}`, "accommodation", shadow(sh) + marker(id));
  };

  A['pupil-sizes'] = () => {
    const a = eyeFront(62, 100, 0.66, { pupil: 3.6, brow: false, lashes: false }), b = eyeFront(180, 100, 0.66, { pupil: 7.5, brow: false, lashes: false }), c = eyeFront(298, 100, 0.66, { pupil: 14, brow: false, lashes: false });
    return svg(360, 230, `${title("The pupil in bright and dim light")}
      ${a.b}${b.b}${c.b}
      ${t(62, 52, '☀️', { size: 18 })}${t(298, 52, '🌙', { size: 18 })}
      ${lab(62, 150, 'miosis', "constriction of the pupil", { size: 10.5, fill: '#1e6f8a' })}${lab(180, 150, 'normal', "normal size", { size: 10.5 })}${lab(298, 150, 'mydriasis', "dilation of the pupil", { size: 10.5, fill: '#b5561f' })}
      ${f(62, 182, "bright light", { size: 9, fill: MUTED })}${f(298, 182, "dim light or mydriatic drops", { size: 9, fill: MUTED })}
      ${f(180, 214, "The iris adjusts the size of the pupil; unequal pupils are called anisocoria", { size: 9, fill: INK, w: 700 })}`, "Pupil size", a.d + b.d + c.d);
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
    return svg(360, 318, `${title("Refractive errors: where does the light focus?")}
      ${box(6, 30, 'emmetropia', "normal vision", "focus right on the retina", rayEye(114, 108, 42, 153), '#eef7e6')}
      ${box(182, 30, 'myopia', "nearsightedness", "long eyeball; focus in front of the retina", rayEye(294, 108, 50, 318), '#e4f1fb')}
      ${box(6, 168, 'hyperopia', "farsightedness", "short eyeball; focus behind the retina", rayEye(112, 246, 34, 160), '#fdecdf')}
      ${box(182, 168, 'astigmatism', "astigmatism", "irregular cornea; several focal points", rayEye(290, 246, 42, 329, { astig: true }), '#f1ecfb')}
      ${f(180, 314, "A concave lens corrects nearsightedness and a convex lens corrects farsightedness", { size: 8.5, fill: MUTED, w: 700 })}`, "Refractive errors");
  };

  A['cataract-art'] = () => {
    const e = eyeSag(110, 130, 68, { cloudyLens: true }), fr = eyeFront(282, 108, 0.9, { pupilFill: '#d6d2c6', pupil: 9, brow: false });
    const blur = nid();
    return svg(360, 292, `${title("Cataract: clouding of the lens")}
      ${e.b}${fr.b}
      ${pin(e.P.lens[0], e.P.lens[1], 60, 222)}${lab(60, 236, 'cloudy lens', "cloudy lens", { size: 9.5 })}
      ${pin(282, 108, 282, 150)}${lab(282, 166, 'opaque pupil', "grey-white pupil", { size: 9.5 })}
      <rect x="216" y="196" width="132" height="58" rx="10" fill="#dfe8ee"/><g filter="url(#${blur})"><circle cx="252" cy="226" r="14" fill="#e98a3a"/><circle cx="292" cy="222" r="11" fill="#3b6fd4"/><rect x="310" y="208" width="24" height="30" rx="4" fill="#58cc02"/></g>
      ${f(282, 268, "blurred, faded vision and glare in bright light", { size: 9, fill: INK, w: 700 })}
      ${f(180, 286, "Treatment: phacoemulsification and an intraocular lens (IOL)", { size: 9, fill: MUTED, w: 700 })}`, "cataract", e.d + fr.d + `<filter id="${blur}"><feGaussianBlur stdDeviation="3.2"/></filter>`);
  };

  A['glaucoma-art'] = () => {
    const id = nid(), id2 = nid(), sh = nid();
    const disc = (x, cup, en, fa) => `<circle cx="${x}" cy="196" r="30" fill="#f2a05e"/><circle cx="${x}" cy="196" r="17" fill="#ffe7a3" stroke="#e8c26a"/><circle cx="${x}" cy="196" r="${cup}" fill="#fff8e0"/>${[-1, 1].map(s => `<path d="M${x} ${196 + s * 6} C${x + 14} ${196 + s * 16} ${x + 22} ${196 + s * 24} ${x + 28} ${196 + s * 30}" stroke="#a8261f" stroke-width="2" fill="none"/>`).join('')}${lab(x, 244, en, fa, { size: 9.5 })}`;
    return svg(360, 268, `${title("Glaucoma: eye pressure and optic nerve damage")}
      <g filter="url(#${sh})">
        <path d="M30 40 Q4 100 30 160" stroke="${C.aqLine}" stroke-width="2" fill="${C.aq}"/>
        <path d="M44 56 L44 88 M44 112 L44 144" stroke="${C.iris}" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="66" cy="100" rx="10" ry="30" fill="${C.lens}" stroke="${C.lensLine}"/>
        <ellipse cx="58" cy="56" rx="7" ry="11" fill="${C.chor}" opacity=".8"/>
      </g>
      ${curve(id, 'M62 60 C58 74 52 86 46 98 C40 108 30 108 24 100 C20 92 22 74 32 58', '#2f8fb0', 2)}
      <path d="M30 52 l8 8 M38 52 l-8 8" stroke="#d9443a" stroke-width="3"/>
      ${pin(34, 56, 134, 56)}${lab(196, 50, 'drainage angle', "drainage angle and canal of Schlemm", { size: 9.5 })}
      ${pin(60, 70, 134, 96)}${lab(196, 92, 'aqueous humor', "aqueous humour in the anterior chamber", { size: 9.5 })}
      <rect x="248" y="112" width="104" height="34" rx="17" fill="#fde2df"/>${t(300, 134, 'IOP ↑', { size: 13, w: 900, fill: '#c2413a', sym: true })}
      ${f(196, 132, "drainage is blocked:", { size: 9.5, fill: '#c2413a', w: 800 })}
      ${disc(90, 6, 'normal optic disc', "healthy optic disc")}${disc(250, 14, 'cupped disc', "cupping of the optic disc")}
      ${curve(id2, 'M134 196 L206 196', LINE, 2)}`, "Glaucoma", shadow(sh) + marker(id, '#2f8fb0') + marker(id2));
  };

  A['amd-art'] = () => {
    const grid = (x, wavy, spot) => { let g = ''; for (let i = 0; i <= 8; i++) { const v = x + i * 14; g += wavy ? `<path d="M${v} 56 Q${v + (i > 2 && i < 6 ? 5 : 0)} 112 ${v} 168" stroke="#555" fill="none"/>` : `<path d="M${v} 56 V168" stroke="#555"/>`; const h = 56 + i * 14; g += wavy ? `<path d="M${x} ${h} Q${x + 56} ${h + (i > 2 && i < 6 ? 5 : 0)} ${x + 112} ${h}" stroke="#555" fill="none"/>` : `<path d="M${x} ${h} H${x + 112}" stroke="#555"/>`; } return `<rect x="${x}" y="56" width="112" height="112" fill="#fff" stroke="#333"/>${g}<circle cx="${x + 56}" cy="112" r="3" fill="#111"/>${spot ? `<circle cx="${x + 56}" cy="112" r="22" fill="#222" opacity=".85" filter="url(#${spot})"/>` : ''}`; };
    const bl = nid();
    return svg(360, 250, `${title("Macular degeneration: loss of central vision")}
      ${grid(24, false)}${grid(206, true, bl)}
      ${lab(80, 40, 'Amsler grid • normal', "Amsler grid: healthy vision", { size: 9.5 })}${lab(262, 40, 'macular degeneration', "wavy lines and a dark patch", { size: 9.5 })}
      ${lab(262, 188, 'central scotoma', "central blind spot", { size: 9.5, fill: '#b5402f' })}
      ${f(180, 222, "Peripheral vision remains, but reading and recognising faces become hard", { size: 9, fill: INK, w: 700 })}
      ${f(180, 240, "The common type is age-related: AMD or ARMD", { size: 9, fill: MUTED, w: 700 })}`, "macular degeneration", `<filter id="${bl}"><feGaussianBlur stdDeviation="5"/></filter>`);
  };

  A['retinal-detach-art'] = () => {
    const e = eyeSag(150, 140, 92), P = e.P;
    return svg(360, 280, `${title("retinal detachment")}
      ${e.b}
      <path d="M214 196 C196 176 184 168 166 170 C150 172 140 186 134 204" stroke="${C.ret}" stroke-width="4" fill="none"/>
      <path d="M214 196 C200 214 170 224 134 204 C140 186 150 172 166 170 C184 168 196 176 214 196Z" fill="#cfe9fb" opacity=".8"/>
      <path d="M198 186 l6 -6" stroke="#c2413a" stroke-width="2.4"/>
      ${pin(200, 184, 300, 222)}${lab(306, 234, 'retinal tear', "retinal tear", { size: 9.5 })}
      ${pin(170, 200, 92, 226)}${lab(92, 238, 'detached retina + fluid', "detached retina with fluid beneath it", { size: 9.5 })}
      <rect x="276" y="40" width="76" height="76" rx="10" fill="#bfe1f3"/><path d="M276 40 h76 v34 C330 60 300 64 276 46Z" fill="#2b2b2b" opacity=".85"/>
      ${f(314, 132, "like a curtain", { size: 9, fill: INK, w: 700 })}${f(314, 146, "over the vision", { size: 9, fill: INK, w: 700 })}
      ${f(180, 274, "Flashes of light, floaters and a dark curtain: an emergency; treated with a scleral buckle or laser", { size: 8.5, fill: MUTED, w: 700 })}`, "retinal detachment", e.d);
  };

  A['strabismus-art'] = () => {
    const pair = (y, gR, gL, en, fa, note) => { const a = eyeFront(110, y, 0.62, { gaze: gR, brow: false, lashes: false, medial: 1 }), b = eyeFront(220, y, 0.62, { gaze: gL, brow: false, lashes: false, medial: -1 }); return { d: a.d + b.d, b: `${a.b}${b.b}${lab(318, y - 6, en, fa, { size: 9.5 })}${note ? f(318, y + 22, note, { size: 8.5, fill: MUTED }) : ''}` }; };
    const n = pair(68, 0, 0, 'normal', "both eyes parallel"), es = pair(144, 12, 0, 'esotropia', "turning inwards", 'ET: cross-eye'), ex = pair(220, -12, 0, 'exotropia', "turning outwards", 'XT: walleye');
    return svg(360, 280, `${title("Strabismus: the two eyes are not aligned")}
      ${n.b}${es.b}${ex.b}
      ${t(110, 42, 'OD', { size: 9.5, w: 900, fill: '#1e6f8a', sym: true })}${t(220, 42, 'OS', { size: 9.5, w: 900, fill: '#1e6f8a', sym: true })}
      ${f(180, 272, "If untreated, the brain ignores the image from the turned eye: lazy eye (amblyopia)", { size: 8.5, fill: INK, w: 700 })}`, "Strabismus", n.d + es.d + ex.d);
  };

  A['lid-disorders'] = () => {
    const P = [];
    const cell = (cx, cy, opt, extra, en, fa) => { const e = eyeFront(cx, cy, 0.6, Object.assign({ brow: false }, opt)); P.push(e.d); return `${e.b}${extra || ''}${lab(cx, cy + 40, en, fa, { size: 9.5 })}`; };
    return svg(360, 290, `${title("eyelid diseases")}
      ${cell(62, 76, {}, `<circle cx="70" cy="62" r="7" fill="#e86a5a" stroke="#b5402f"/><circle cx="70" cy="60" r="2.4" fill="#ffe08a"/>`, 'hordeolum', "stye: a painful infection of the eyelid margin")}
      ${cell(180, 76, {}, `<ellipse cx="190" cy="52" rx="9" ry="7" fill="#f2c4a8" stroke="#c98a62"/>`, 'chalazion', "chalazion: a painless cyst")}
      ${cell(298, 76, { lashes: false }, `<path d="M270 74 C282 64 316 64 328 76 L328 66 C316 54 282 54 270 66Z" fill="${C.lid}" stroke="${C.skinLine}"/><path d="M270 76 C286 68 312 68 328 78" stroke="#7a4e3c" stroke-width="1.6" fill="none"/>`, 'blepharoptosis', "drooping of the upper eyelid")}
      ${cell(120, 192, { lashes: false }, `<path d="M94 204 C110 216 132 216 148 204 L146 210 C130 222 110 222 96 210Z" fill="#e8818a"/>`, 'ectropion', "eyelid turned outwards")}
      ${cell(240, 192, { lashes: false }, `${[0, 1, 2, 3].map(i => `<path d="M${226 + i * 8} 204 l${2} -6" stroke="#3a2c26" stroke-width="1.3"/>`).join('')}`, 'entropion', "eyelid and lashes turned inwards")}
      ${f(180, 282, "The root blephar/o means eyelid; -ptosis means drooping", { size: 9, fill: MUTED, w: 700 })}`, "eyelid diseases", P.join(''));
  };

  A['field-defects'] = () => {
    const cid = nid();
    const fld = (x, y, inner, en, fa) => `<g><clipPath id="${cid + x + y}"><circle cx="${x}" cy="${y}" r="34"/></clipPath><circle cx="${x}" cy="${y}" r="34" fill="#bfe1f3" stroke="#6f9fc0"/><g clip-path="url(#${cid + x + y})">${inner(x, y)}</g><circle cx="${x}" cy="${y}" r="34" fill="none" stroke="#6f9fc0" stroke-width="1.5"/></g>${lab(x, y + 50, en, fa, { size: 9 })}`;
    return svg(360, 290, `${title("The visual field in disease")}
      ${fld(62, 80, () => '<path d="M40 92 l10 -14 l8 8 l12 -18 l14 24z" fill="#58a05a" opacity=".6"/>', 'normal field', "healthy visual field")}
      ${fld(180, 80, (x, y) => `<path d="M${x - 40} ${y - 40} h80 v80 h-80Z M${x - 13} ${y} a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0Z" fill="#1d1d1d" fill-rule="evenodd" opacity=".9"/>`, 'tunnel vision', "tunnel vision in glaucoma")}
      ${fld(298, 80, (x, y) => `<circle cx="${x}" cy="${y}" r="15" fill="#1d1d1d" opacity=".9"/>`, 'central scotoma', "central blind spot in AMD")}
      ${fld(120, 196, (x, y) => `<rect x="${x}" y="${y - 40}" width="40" height="80" fill="#1d1d1d" opacity=".9"/>`, 'hemianopia', "half-field blindness")}
      ${fld(240, 196, (x, y) => `<path d="M${x - 40} ${y - 40} h80 v34 C${x + 20} ${y - 18} ${x - 14} ${y - 14} ${x - 40} ${y - 30}Z" fill="#1d1d1d" opacity=".9"/>`, 'curtain', "curtain in retinal detachment")}`, "visual field");
  };

  A['eye-infections'] = () => {
    const P = [];
    const cell = (cx, cy, opt, extra, en, fa) => { const e = eyeFront(cx, cy, 0.68, Object.assign({ brow: false }, opt)); P.push(e.d); return `${e.b}${extra || ''}${lab(cx, cy + 42, en, fa, { size: 9.5 })}`; };
    return svg(360, 270, `${title("Inflammation and infection of the eye")}
      ${cell(92, 80, { redSclera: true, sclera: '#fbd9d6' }, '', 'conjunctivitis', "inflammation of the conjunctiva (pink eye)")}
      ${cell(268, 80, { lidColor: '#f0a59a' }, `<path d="M228 74 C246 60 290 60 308 76" stroke="#d9443a" stroke-width="2.2" fill="none"/>`, 'blepharitis', "inflammation of the eyelid margin")}
      ${cell(92, 190, { medial: 1 }, `<ellipse cx="128" cy="206" rx="11" ry="9" fill="#ee8d7e" stroke="#c2413a" opacity=".9"/>`, 'dacryocystitis', "inflammation of the tear sac")}
      ${cell(268, 190, {}, `<path d="M258 184 l8 6 l-6 6" stroke="#fff" stroke-width="2.4" fill="none"/>`, 'keratitis', "inflammation of the cornea")}
      ${f(180, 264, "The suffix -itis means inflammation; the root tells where it is", { size: 9, fill: MUTED, w: 700 })}`, "Eye inflammations", P.join(''));
  };

  /* ================= دنیای ۳: گوش، شنوایی و تعادل ================= */
  A['ear-section'] = () => {
    const r = earSection(20, 70, 1), P = r.P;
    const L = (pt, x, y, en, fa, a) => `${pin(pt[0], pt[1], x, y < pt[1] ? y + 6 : y)}${lab(x, y + (y < pt[1] ? -12 : 12), en, fa, { size: 9, anchor: a })}`;
    return svg(360, 322, `${title("The three parts of the ear")}
      <rect x="20" y="30" width="96" height="16" rx="8" fill="#fde3d0"/><rect x="138" y="30" width="56" height="16" rx="8" fill="#fff0d6"/><rect x="200" y="30" width="138" height="16" rx="8" fill="#d6eefa"/>
      ${f(68, 42, "outer ear", { size: 9, fill: '#b5561f', w: 800 })}${f(166, 42, "middle ear", { size: 9, fill: '#9a7a2a', w: 800 })}${f(269, 42, "inner ear", { size: 9, fill: '#1e6f8a', w: 800 })}
      ${r.b}
      ${L(P.auricle, 40, 284, 'auricle (pinna)', "outer ear")}${L(P.canal, 58, 70, 'ear canal', "ear canal")}
      ${L(P.tm, 150, 284, 'tympanic membrane', "eardrum")}${L(P.malleus, 120, 70, 'malleus', "malleus")}${L(P.incus, 176, 70, 'incus', "incus")}
      ${L(P.stapes, 236, 284, 'stapes', "stapes")}${L(P.canals, 268, 70, 'semicircular canals', "semicircular canals")}
      ${L(P.cochlea, 312, 284, 'cochlea', "cochlea")}${L(P.nerve, 330, 138, 'CN VIII', "eighth nerve", 'end')}`, "The three parts of the ear", r.d);
  };

  A['ossicle-chain'] = () => {
    const sh = nid(), id = nid();
    const bone = (d) => `<path d="${d}" fill="${C.oss}" stroke="${C.ossLine}" stroke-width="1.6"/>`;
    return svg(360, 260, `${title("Ossicles: the smallest bones in the body")}
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
      ${lab(60, 226, 'tympanic membrane', "eardrum", { size: 9.5 })}${lab(118, 40, 'malleus', "malleus (hammer)", { size: 10 })}
      ${lab(186, 196, 'incus', "incus (anvil)", { size: 10 })}${lab(252, 96, 'stapes', "stapes (stirrup)", { size: 10 })}${lab(322, 196, 'oval window', "oval window", { size: 9.5 })}
      ${f(180, 252, "This chain amplifies the vibration of the eardrum and passes it to the oval window", { size: 9, fill: MUTED, w: 700 })}`, "Ossicles", shadow(sh) + marker(id, '#e8a33a'));
  };

  A['inner-ear-art'] = () => {
    const sh = nid(), cg = nid();
    const loop = (d) => `<path d="${d}" stroke="${C.labLine}" stroke-width="13" fill="none" stroke-linecap="round"/><path d="${d}" stroke="${C.lab}" stroke-width="9" fill="none" stroke-linecap="round"/>`;
    return svg(360, 296, `${title("Inner ear: the labyrinth of hearing and balance")}
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
      ${pin(180, 84, 262, 62)}${lab(300, 50, 'semicircular canals', "semicircular canals: head rotation", { size: 9.5, fill: '#1e6f8a' })}
      ${pin(140, 160, 60, 220)}${lab(60, 234, 'vestibule', "vestibule: balance and gravity", { size: 9.5 })}
      ${pin(112, 170, 40, 180)}${lab(40, 196, 'oval window', "oval window", { size: 9 })}
      ${lab(222, 262, 'cochlea', "cochlea: hearing", { size: 10, fill: '#1e6f8a' })}
      ${lab(318, 228, 'CN VIII', "vestibulocochlear nerve", { size: 9.5 })}
      ${f(180, 290, "Two parts, two jobs: the cochlea for hearing, the vestibule and semicircular canals for balance", { size: 8.5, fill: MUTED, w: 700 })}`, "inner ear", shadow(sh) + radial(cg, '#d8f2fc', C.lab));
  };

  A['cochlea-corti'] = () => {
    const sh = nid();
    const hair = x => `<rect x="${x}" y="150" width="9" height="30" rx="4" fill="#f6c9a8" stroke="#c98a62"/>${[0, 3, 6].map(d => `<path d="M${x + 1.5 + d} 150 l0 -10" stroke="#8a5a3a" stroke-width="1.2"/>`).join('')}`;
    return svg(360, 280, `${title("Organ of Corti: the hearing receptor in the cochlea")}
      <g filter="url(#${sh})">
        <rect x="20" y="40" width="320" height="200" rx="18" fill="#e8f6fc" stroke="${C.labLine}" stroke-width="1.4"/>
        <rect x="40" y="130" width="280" height="60" rx="10" fill="#d0ecf8"/>
        <path d="M40 140 L320 140" stroke="#7aa7c2" stroke-width="5"/>
        ${[70, 104, 138, 172, 206, 240, 274].map(hair).join('')}
        <path d="M60 136 L300 136" stroke="#9b87c6" stroke-width="8" stroke-linecap="round" opacity=".85"/>
        <path d="M40 196 L320 196" stroke="#7aa7c2" stroke-width="5"/>
        ${[90, 140, 190, 240, 290].map(x => `<path d="M${x} 196 C${x} 212 ${x + 10} 220 ${x + 18} 230" stroke="${C.nerveLine}" stroke-width="2" fill="none"/>`).join('')}
      </g>
      ${lab(180, 66, 'cochlear fluid', "fluid inside the cochlea (vibration)", { size: 9.5 })}<path d="M80 96 Q110 84 140 96 T200 96 T260 96" stroke="#3b8fd0" stroke-width="2" fill="none"/>
      ${lab(312, 118, 'tectorial membrane', "tectorial membrane", { size: 8.5, anchor: 'end' })}
      ${lab(70, 120, 'hair cells', "hair cells", { size: 9, anchor: 'start' })}
      ${lab(180, 254, 'cochlear nerve fibers → brain', "cochlear nerve fibres to the brain", { size: 9.5 })}
      ${f(180, 276, "Bending of these cells’ hairs turns the vibration into a nerve message", { size: 8.5, fill: MUTED, w: 700 })}`, "organ of Corti", shadow(sh));
  };

  A['sound-path-art'] = () => {
    const st = [['🔊', 'sound wave', "sound wave"], ['👂', 'auricle • canal', "auricle and canal"], ['🥁', 'eardrum', "eardrum"], ['🦴', 'ossicles', "Ossicles"],
      ['🪟', 'oval window', "oval window"], ['🐌', 'cochlea', "cochlea and fluid"], ['⚡', 'CN VIII', "auditory nerve"], ['🧠', 'temporal lobe', "auditory cortex"]];
    const id = nid();
    const box = (i) => { const col = i % 4, row = Math.floor(i / 4); const x = row === 0 ? 268 - col * 86 : 14 + col * 86, y = 40 + row * 110; const s = st[i];
      return `<rect x="${x}" y="${y}" width="78" height="86" rx="14" fill="${row ? '#e4f1fb' : '#fdecdf'}"/><circle cx="${x + 14}" cy="${y + 14}" r="9" fill="#1e88a8"/>${t(x + 14, y + 18, String(i + 1), { size: 9, fill: '#fff', w: 900, sym: true })}
        ${t(x + 39, y + 40, s[0], { size: 20 })}${t(x + 39, y + 62, s[1], { size: 9, w: 900 })}${f(x + 39, y + 77, s[2], { size: 9, fill: INK })}`; };
    return svg(360, 270, `${title("The path of sound: from air to brain")}
      ${st.map((_, i) => box(i)).join('')}
      ${[0, 1, 2].map(i => curve(id, `M${266 - i * 86} 83 L${256 - i * 86} 83`, LINE, 2)).join('')}
      ${curve(id, 'M40 128 L40 148', LINE, 2)}
      ${[0, 1, 2].map(i => curve(id, `M${94 + i * 86} 193 L${98 + i * 86} 193`, LINE, 2)).join('')}
      ${f(180, 260, "air → solid vibration → fluid wave → nerve message", { size: 9.5, fill: '#b5561f', w: 800 })}`, "Path of sound", marker(id));
  };

  A['balance-art'] = () => {
    const sh = nid();
    const head = (x, tilt) => `<g transform="rotate(${tilt} ${x} 120)"><circle cx="${x}" cy="110" r="38" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>
      <path d="M${x - 16} 150 L${x - 16} 168 L${x + 16} 168 L${x + 16} 150" fill="${C.skin}" stroke="${C.skinLine}"/>
      <circle cx="${x + 18}" cy="114" r="15" fill="none" stroke="${C.labLine}" stroke-width="7"/><path d="M${x + 6} ${116 + tilt / 6} a15 15 0 0 0 26 4" stroke="#3b8fd0" stroke-width="7" fill="none"/></g>`;
    return svg(360, 250, `${title("Balance: the fluid in the semicircular canals moves when the head turns")}
      <g filter="url(#${sh})">${head(90, 0)}${head(260, 28)}</g>
      ${lab(90, 196, 'head still', "head still: fluid at rest", { size: 9.5 })}${lab(260, 196, 'head turns', "head turns: fluid shifts", { size: 9.5 })}
      ${f(180, 232, "Hair cells sense the fluid movement; the message travels along the vestibular nerve to the brain", { size: 8.5, fill: INK, w: 700 })}
      ${f(180, 246, "A disorder here: spinning dizziness (vertigo)", { size: 8.5, fill: MUTED, w: 700 })}`, "balance", shadow(sh));
  };

  A['eustachian-art'] = () => {
    const r = earSection(6, 50, 0.7), sh = nid();
    return svg(360, 250, `${title("Eustachian tube: equalising middle ear pressure")}
      ${r.b}
      <path d="M262 190 C290 196 316 196 344 188 L344 236 L262 236Z" fill="#f7c1c9" stroke="#c96a80"/>
      ${f(306, 226, "throat (pharynx)", { size: 9.5, fill: INK, w: 800 })}
      ${pin(r.P.tube[0], r.P.tube[1], 300, 150)}${lab(306, 132, 'eustachian tube', "Eustachian tube", { size: 9.5 })}
      ${pin(r.P.middle[0], r.P.middle[1], 130, 220)}${lab(110, 232, 'middle ear air', "middle ear air", { size: 9.5 })}
      ${f(300, 56, "with swallowing and yawning", { size: 9, fill: INK, w: 700 })}${f(300, 70, "it opens.", { size: 9, fill: INK, w: 700 })}${f(300, 88, "In children it is short and horizontal;", { size: 9, fill: INK, w: 700 })}${f(300, 102, "throat infections reach it more easily", { size: 9, fill: INK, w: 700 })}`, "Eustachian tube", r.d + shadow(sh));
  };

  /* ================= دنیای ۴: بیماری‌های گوش ================= */
  A['otitis-types'] = () => {
    const r = earSection(20, 60, 1);
    const zone = (x, y, w, h, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${c}" opacity=".28"/>`;
    return svg(360, 300, `${title("Three types of otitis by the site of inflammation")}
      ${r.b}
      ${zone(70, 138, 74, 50, '#e8913a')}${zone(140, 118, 60, 100, '#d9443a')}${zone(198, 90, 120, 118, '#8e6bd8')}
      ${lab(80, 44, 'otitis externa (OE)', "outer ear; swimmer’s ear", { size: 9.5, fill: '#b5561f' })}
      ${lab(180, 276, 'otitis media (OM)', "middle ear; common in children", { size: 9.5, fill: '#b5402f' })}
      ${lab(282, 44, 'otitis interna', "inner ear; labyrinthitis", { size: 9.5, fill: '#6345a8' })}`, "Types of otitis", r.d);
  };

  A['otitis-media-art'] = () => {
    const view = (x, en, fa, inner) => `<circle cx="${x}" cy="118" r="62" fill="#3a2a22"/><circle cx="${x}" cy="118" r="54" fill="${inner.bg}" stroke="${inner.ring}" stroke-width="3"/>${inner.b}${lab(x, 202, en, fa, { size: 10 })}`;
    const normal = { bg: '#e9d9cf', ring: '#c9b3a6', b: `<path d="M70 92 L96 124" stroke="#f6eee6" stroke-width="5" stroke-linecap="round"/><path d="M98 126 L112 150 L86 150Z" fill="#fff7ef" opacity=".85"/>` };
    const om = { bg: '#e8826f', ring: '#c2413a', b: `<circle cx="268" cy="118" r="40" fill="#f2a35a" opacity=".55"/><path d="M252 96 L272 120" stroke="#f7d9c9" stroke-width="4" stroke-linecap="round" opacity=".6"/>${[[250, 136], [282, 104], [286, 140]].map(c => `<circle cx="${c[0]}" cy="${c[1]}" r="5" fill="#f3d36b" opacity=".8"/>`).join('')}` };
    return svg(360, 262, `${title("The eardrum on otoscopy: healthy and in otitis media")}
      ${view(92, 'normal TM', "healthy eardrum, pearly grey", normal)}${view(268, 'acute otitis media', "red, bulging eardrum with pus behind it", om)}
      ${f(180, 240, "Signs: otalgia, fever and hearing loss; if chronic: myringotomy and a PE tube", { size: 9, fill: INK, w: 700 })}
      ${f(180, 256, "clear fluid behind the eardrum: serous otitis media (SOM)", { size: 8.5, fill: MUTED, w: 700 })}`, "Otitis media");
  };

  A['hearing-loss-types'] = () => {
    const r = earSection(20, 52, 1);
    const block = (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="#fff" stroke="#d9443a" stroke-width="3"/><path d="M${x - 7} ${y - 7} l14 14 M${x + 7} ${y - 7} l-14 14" stroke="#d9443a" stroke-width="3"/>`;
    return svg(360, 300, `${title("Two main types of hearing loss")}
      <rect x="20" y="30" width="176" height="20" rx="10" fill="#fdecdf"/><rect x="198" y="30" width="140" height="20" rx="10" fill="#f1ecfb"/>
      ${f(108, 44, "the conducting path: outer and middle ear", { size: 9, fill: '#b5561f', w: 800 })}${f(268, 44, "sensorineural: cochlea and nerve", { size: 9, fill: '#6345a8', w: 800 })}
      ${r.b}
      ${block(108, 160)}${block(166, 196)}${block(252, 196)}${block(310, 154)}
      ${lab(100, 262, 'conductive', "conductive hearing loss", { size: 10, fill: '#b5561f' })}${f(100, 290, "earwax, otitis media, otosclerosis", { size: 8.5, fill: MUTED })}
      ${lab(270, 262, 'sensorineural', "sensorineural hearing loss", { size: 10, fill: '#6345a8' })}${f(270, 290, "age-related hearing loss, noise, acoustic neuroma", { size: 8.5, fill: MUTED })}`, "Types of hearing loss", r.d);
  };

  A['decibel-scale'] = () => {
    const rows = [[0, '🍃', 'breathing', "breathing"], [30, '🤫', 'whisper', "whisper"], [60, '🗣️', 'conversation', "conversation"], [85, '🚗', 'heavy traffic', "heavy traffic"],
      [110, '🎸', 'rock concert', "concert"], [140, '✈️', 'jet engine', "jet engine"]];
    const y = v => 236 - v * 1.38;
    return svg(360, 260, `${title("Loudness in decibels (dB)")}
      <rect x="60" y="${y(140)}" width="22" height="${y(0) - y(140)}" rx="11" fill="#eef7e6"/>
      <rect x="60" y="${y(140)}" width="22" height="${y(85) - y(140)}" rx="11" fill="#f9c4bd"/>
      ${rows.map(r => `<path d="M82 ${y(r[0])} H112" stroke="#9aa6ad"/>${t(54, y(r[0]) + 4, String(r[0]), { size: 10, anchor: 'end', w: 900, sym: true })}${t(122, y(r[0]) + 6, r[1], { size: 15, anchor: 'start' })}${t(148, y(r[0]) + 2, r[2], { size: 10, anchor: 'start', w: 800 })}${f(148, y(r[0]) + 14, r[3], { size: 9, anchor: 'start' })}`).join('')}
      <path d="M232 ${y(85)} H344" stroke="#d9443a" stroke-width="2" stroke-dasharray="5 3"/>
      ${f(290, y(85) - 8, "above 85 dB: risk of damage", { size: 9, fill: '#c2413a', w: 800 })}${f(290, y(85) + 16, "wear earplugs", { size: 9, fill: '#c2413a', w: 700 })}
      ${f(290, 210, "loud, prolonged noise:", { size: 9, fill: INK, w: 700 })}${f(290, 224, "noise-induced hearing loss", { size: 9, fill: INK, w: 700 })}`, "The decibel scale");
  };

  A['otosclerosis-art'] = () => {
    const a = earSection(4, 70, 0.52), b = earSection(182, 70, 0.52, { stapesFixed: true });
    return svg(360, 230, `${title("Otosclerosis: the stapes locks in the oval window")}
      ${a.b}${b.b}
      ${lab(88, 54, 'normal stapes', "stapes vibrates freely", { size: 9.5 })}${lab(266, 54, 'otosclerosis', "extra bone stiffens the stapes", { size: 9.5, fill: '#a3672a' })}
      <circle cx="${b.P.stapes[0]}" cy="${b.P.stapes[1]}" r="11" fill="none" stroke="#d9443a" stroke-width="2"/>
      ${f(180, 206, "Result: progressive conductive hearing loss", { size: 9.5, fill: INK, w: 800 })}${f(180, 222, "Treatment: stapedectomy and a prosthesis", { size: 9, fill: MUTED, w: 700 })}`, "otosclerosis", a.d + b.d);
  };

  A['meniere-art'] = () => {
    const c = (x, y, ic, en, fa) => `<rect x="${x}" y="${y}" width="104" height="92" rx="16" fill="#f1ecfb"/>${t(x + 52, y + 32, ic, { size: 22 })}${t(x + 52, y + 56, en, { size: 10, w: 900 })}${f(x + 52, y + 72, fa, { size: 9.5, fill: INK })}`;
    return svg(360, 250, `${title("Ménière disease: three signs together")}
      ${c(10, 40, '🌀', 'vertigo', "spinning dizziness")}${c(128, 40, '🔔', 'tinnitus', "ringing in the ears")}${c(246, 40, '🔇', 'hearing loss', "fluctuating hearing loss")}
      <rect x="60" y="150" width="240" height="44" rx="14" fill="#e4f1fb"/>${t(180, 170, 'aural fullness', { size: 10, w: 900 })}${f(180, 186, "and a feeling of fullness in the ear", { size: 9.5, fill: INK })}
      ${f(180, 218, "Cause: too much fluid in the labyrinth of the inner ear", { size: 9.5, fill: INK, w: 700 })}${f(180, 236, "Attacks last minutes to hours", { size: 9, fill: MUTED, w: 700 })}`, "Ménière disease");
  };

  /* ================= دنیای ۵: تشخیص و درمان ================= */
  A['snellen-art'] = () => {
    const sh = nid();
    const rows = [['E', 34, '20/200'], ['F P', 26, '20/100'], ['T O Z', 20, '20/70'], ['L P E D', 16, '20/50'], ['P E C F D', 13, '20/40'], ['E D F C Z P', 11, '20/30'], ['F E L O P Z D', 9, '20/20']];
    let y = 52;
    const body = rows.map(r => { y += r[1] + 10; return `${t(99, y, r[0], { size: r[1], w: 900, sym: true, fill: '#1d1d1d' })}${t(180, y - r[1] / 3, r[2], { size: 9.5, anchor: 'start', w: 800, fill: r[2] === '20/20' ? '#c2413a' : '#5b6b73', sym: true })}`; }).join('');
    return svg(360, 300, `${title("Snellen chart: measuring visual acuity")}
      <g filter="url(#${sh})"><rect x="24" y="40" width="150" height="240" rx="8" fill="#fff" stroke="#c9d3da" stroke-width="1.5"/></g>
      ${body}<path d="M28 ${y + 6} H170" stroke="#c2413a" stroke-width="1.5"/>
      ${f(296, 80, "top number: test distance", { size: 9.5, fill: INK, w: 800 })}${f(296, 96, "(20 feet or 6 metres)", { size: 9, fill: MUTED })}
      ${f(296, 124, "bottom number: the distance from which", { size: 9.5, fill: INK, w: 800 })}${f(296, 140, "a healthy eye reads", { size: 9, fill: MUTED })}${f(296, 154, "the same line", { size: 9, fill: MUTED })}
      ${t(296, 196, '20/40', { size: 16, w: 900, fill: '#1e6f8a', sym: true })}${f(296, 214, "sees at 20 feet what", { size: 9, fill: INK })}${f(296, 228, "a healthy eye sees at 40 feet", { size: 9, fill: INK })}
      ${f(296, 262, "Each eye separately: OD, OS and OU", { size: 9, fill: MUTED, w: 700 })}`, "Snellen chart", shadow(sh));
  };

  A['eye-exam-tools'] = () => {
    const sh = nid();
    const card = (x, en, fa, note, draw) => `<rect x="${x}" y="34" width="110" height="196" rx="16" fill="#eef6fb"/>${draw}${lab(x + 55, 168, en, fa, { size: 9.5 })}${f(x + 55, 204, note[0], { size: 8.5, fill: INK })}${f(x + 55, 218, note[1], { size: 8.5, fill: INK })}`;
    const oph = `<g filter="url(#${sh})"><rect x="54" y="92" width="16" height="58" rx="6" fill="#4a5560"/><rect x="48" y="62" width="28" height="32" rx="8" fill="#2b3a44"/><circle cx="62" cy="76" r="7" fill="#9fd6ee"/><path d="M76 76 L104 70 L104 84Z" fill="#ffe08a" opacity=".8"/></g>`;
    const ton = `<g filter="url(#${sh})"><circle cx="190" cy="98" r="30" fill="${C.scl}" stroke="${C.sclLine}" stroke-width="1.6"/><circle cx="180" cy="98" r="12" fill="${C.iris}"/><circle cx="180" cy="98" r="5" fill="#111"/><rect x="140" y="92" width="26" height="12" rx="4" fill="#6f7a80"/><path d="M128 98 L140 98" stroke="#6f7a80" stroke-width="5"/></g>${t(190, 146, 'IOP 15 mmHg', { size: 9, w: 900, fill: '#1e6f8a', sym: true })}`;
    const slit = `<g filter="url(#${sh})"><rect x="262" y="120" width="70" height="10" rx="4" fill="#9aa6ad"/><rect x="292" y="70" width="10" height="52" fill="#c9d3da"/><rect x="276" y="56" width="44" height="22" rx="8" fill="#e8eef2" stroke="#9aa6ad"/><circle cx="320" cy="67" r="6" fill="#2b3a44"/><path d="M262 66 L276 64 L276 70Z" fill="#ffe08a"/><rect x="250" y="80" width="8" height="40" rx="3" fill="#6f7a80"/></g>`;
    return svg(360, 240, `${title("Eye examination instruments")}
      ${card(10, 'ophthalmoscope', "ophthalmoscope", ["seeing the retina and", "optic disc through the pupil"], oph)}
      ${card(125, 'tonometry', "tonometry", ["measuring pressure", "inside the eye, for glaucoma"], ton)}
      ${card(240, 'slit lamp', "slit lamp", ["microscope with a narrow beam", "for the front of the eye"], slit)}`, "Eye examination instruments", shadow(sh));
  };

  A['phaco-iol'] = () => {
    const sh = nid();
    const seg = (x, inner) => `<g transform="translate(${x} 0)"><path d="M20 70 Q-4 120 20 170" stroke="${C.aqLine}" stroke-width="2" fill="${C.aq}"/><path d="M28 78 L28 106 M28 134 L28 162" stroke="${C.iris}" stroke-width="5" stroke-linecap="round"/>${inner}</g>`;
    const s1 = seg(16, `<ellipse cx="54" cy="120" rx="16" ry="34" fill="#cfc8b4" stroke="${C.lensLine}" stroke-width="1.5"/><path d="M-6 96 L44 112" stroke="#6f7a80" stroke-width="5" stroke-linecap="round"/>${[0, 1, 2].map(i => `<path d="M${46 + i * 4} ${104 + i * 7} q4 -3 8 0" stroke="#e8a33a" stroke-width="1.6" fill="none"/>`).join('')}`);
    const s2 = seg(130, `<ellipse cx="54" cy="120" rx="16" ry="34" fill="none" stroke="${C.lensLine}" stroke-width="1.5" stroke-dasharray="4 3"/>${[[50, 108], [58, 124], [48, 134]].map(c => `<path d="M${c[0]} ${c[1]} l6 -2 l-1 6z" fill="#cfc8b4"/>`).join('')}<path d="M-6 100 L42 116" stroke="#6f7a80" stroke-width="5" stroke-linecap="round"/>`);
    const s3 = seg(244, `<ellipse cx="54" cy="120" rx="16" ry="34" fill="none" stroke="${C.lensLine}" stroke-width="1.5" stroke-dasharray="4 3"/><ellipse cx="54" cy="120" rx="8" ry="20" fill="${C.lens}" stroke="#3b8fd0" stroke-width="1.6"/><path d="M54 100 C66 88 72 86 76 92 M54 140 C66 152 72 154 76 148" stroke="#3b8fd0" stroke-width="1.8" fill="none"/>`);
    return svg(360, 240, `${title("Cataract surgery: phaco and an intraocular lens")}
      <g filter="url(#${sh})">${s1}${s2}${s3}</g>
      ${[[70, '1', 'ultrasound probe', "an ultrasound probe breaks up the lens"], [184, '2', 'suction', "the fragments are suctioned out"], [298, '3', 'IOL implant', "a foldable lens in the capsule"]].map(c => `<circle cx="${c[0]}" cy="44" r="10" fill="#1e88a8"/>${t(c[0], 48, c[1], { size: 10, fill: '#fff', w: 900, sym: true })}${lab(c[0], 196, c[2], c[3], { size: 9 })}`).join('')}
      ${f(180, 234, "phac/o means lens; -emulsification means breaking into tiny particles", { size: 9, fill: MUTED, w: 700 })}`, "Phaco and IOL", shadow(sh));
  };

  A['lasik-art'] = () => {
    const sh = nid();
    const cornea = (x, step) => { const arc = r => `M${x - 50} ${150 - r} Q${x} ${150 - r - 46} ${x + 50} ${150 - r}`;
      const flap = step === 0 ? `<path d="${arc(14)}" stroke="#3b8fd0" stroke-width="5" fill="none"/>` : step === 1 ? `<path d="M${x - 50} ${136} Q${x - 70} ${90} ${x - 36} ${66}" stroke="#3b8fd0" stroke-width="5" fill="none"/>` : `<path d="M${x - 50} ${136} Q${x} ${100} ${x + 50} ${136}" stroke="#3b8fd0" stroke-width="5" fill="none"/>`;
      return `<path d="${arc(0)} L${x + 50} 170 Q${x} 140 ${x - 50} 170Z" fill="${C.aq}" stroke="${C.aqLine}" stroke-width="1.6"/>${step >= 1 ? `<path d="M${x - 40} 136 Q${x} ${step === 2 ? 112 : 104} ${x + 40} 136" stroke="#e86a5a" stroke-width="2" fill="none" stroke-dasharray="${step === 1 ? '3 3' : '0'}"/>` : ''}${flap}${step === 1 ? `<path d="M${x - 6} 40 L${x - 2} 96 M${x + 6} 40 L${x + 2} 96" stroke="#d9443a" stroke-width="3"/>` : ''}`; };
    return svg(360, 240, `${title("LASIK: reshaping the cornea")}
      <g filter="url(#${sh})">${cornea(64, 0)}${cornea(180, 1)}${cornea(296, 2)}</g>
      ${[[64, '1', 'corneal flap', "cutting a thin corneal flap"], [180, '2', 'excimer laser', "the laser reshapes the tissue beneath"], [296, '3', 'flap replaced', "the flap is laid back"]].map(c => `<circle cx="${c[0] - 46}" cy="44" r="10" fill="#1e88a8"/>${t(c[0] - 46, 48, c[1], { size: 10, fill: '#fff', w: 900, sym: true })}${lab(c[0], 196, c[2], c[3], { size: 9 })}`).join('')}
      ${f(180, 234, "For nearsightedness, farsightedness and astigmatism; kerat/o means cornea", { size: 9, fill: MUTED, w: 700 })}`, "LASIK", shadow(sh));
  };

  A['myringotomy-art'] = () => {
    const r = earSection(4, 52, 0.56, { fluid: '#f3d36b' });
    return svg(360, 250, `${title("Myringotomy and ventilation tube (PE tube)")}
      ${r.b}
      ${lab(96, 40, 'fluid behind eardrum', "fluid or pus in the middle ear", { size: 9 })}
      <circle cx="270" cy="124" r="70" fill="#3a2a22"/><circle cx="270" cy="124" r="60" fill="#e8c9b8" stroke="#c9a08a" stroke-width="3"/>
      <path d="M244 96 L266 124" stroke="#f6eee6" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="292" cy="146" rx="13" ry="9" fill="#3fbf8f" stroke="#1f8f6a" stroke-width="2"/><ellipse cx="292" cy="146" rx="5" ry="3.4" fill="#1d1d1d"/>
      <path d="M276 166 L310 128" stroke="#c2413a" stroke-width="1.4" stroke-dasharray="3 3"/>
      ${lab(270, 214, 'PE tube in the eardrum', "ventilation tube in the eardrum", { size: 9.5 })}
      ${f(100, 186, "1. a small cut in the eardrum (myringotomy)", { size: 9, fill: INK, w: 700 })}${f(100, 202, "2. draining the fluid", { size: 9, fill: INK, w: 700 })}${f(100, 218, "3. placing a tube for ventilation", { size: 9, fill: INK, w: 700 })}
      ${f(180, 246, "myring/o means eardrum and -tomy means incision", { size: 9, fill: MUTED, w: 700 })}`, "Myringotomy", r.d);
  };

  A['tuning-fork-art'] = () => {
    const fork = (x, y, rot) => `<g transform="rotate(${rot || 0} ${x} ${y})"><path d="M${x - 6} ${y - 30} L${x - 6} ${y} Q${x} ${y + 6} ${x + 6} ${y} L${x + 6} ${y - 30}" stroke="#7a8a94" stroke-width="3.4" fill="none"/><path d="M${x} ${y + 3} L${x} ${y + 26}" stroke="#7a8a94" stroke-width="3.4"/></g>`;
    const head = x => `<circle cx="${x}" cy="104" r="36" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/><path d="M${x + 30} 96 C${x + 44} 92 ${x + 46} 112 ${x + 32} 116" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>`;
    const face = x => `<circle cx="${x}" cy="104" r="36" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/><path d="M${x - 36} 102 c-8 -4 -8 12 0 10 M${x + 36} 102 c8 -4 8 12 0 10" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>`;
    return svg(360, 312, `${title("Tuning fork tests: Rinne and Weber")}
      ${head(80)}${fork(118, 128, -25)}${fork(146, 102, 0)}
      ${face(262)}${fork(262, 66, 0)}
      <path d="M222 104 q-6 -6 0 -12 M214 104 q-8 -8 0 -16" stroke="#e8a33a" stroke-width="2" fill="none"/>
      ${lab(96, 160, 'Rinne test', "Rinne: on the bone behind the ear, then beside the canal", { size: 9.5 })}${lab(262, 160, 'Weber test', "Weber: tuning fork on the middle of the head", { size: 9.5 })}
      <rect x="10" y="194" width="340" height="96" rx="12" fill="#f4f7fb"/>
      ${f(300, 214, "Position", { size: 9, fill: INK, w: 900 })}${f(196, 214, "Rinne", { size: 9, fill: INK, w: 900 })}${f(80, 214, "Weber", { size: 9, fill: INK, w: 900 })}
      ${f(300, 238, "normal", { size: 9, fill: INK })}${t(196, 238, 'AC > BC', { size: 9.5, w: 800, sym: true })}${f(80, 238, "middle of the head", { size: 9, fill: INK })}
      ${f(300, 260, "conductive hearing loss", { size: 9, fill: '#b5561f', w: 800 })}${t(196, 260, 'BC > AC', { size: 9.5, w: 800, sym: true, fill: '#b5561f' })}${f(80, 260, "to the affected ear", { size: 9, fill: '#b5561f' })}
      ${f(300, 282, "sensorineural hearing loss", { size: 9, fill: '#6345a8', w: 800 })}${t(196, 282, 'AC > BC', { size: 9.5, w: 800, sym: true, fill: '#6345a8' })}${f(80, 282, "to the healthy ear", { size: 9, fill: '#6345a8' })}
      ${f(180, 306, "AC is air conduction and BC is bone conduction", { size: 8.5, fill: MUTED, w: 700 })}`, "Tuning fork tests");
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
    return svg(360, 300, `${title("Audiogram: hearing at each frequency")}
      ${g}${line(R, '#d9443a')}${line(Lf, '#3b6fd4')}${O}${Xs}
      ${t(X(0) - 28, Y(55), 'dB HL', { size: 9, sym: true, w: 800 })}${t(X(0) - 8, Y(-10) - 6, 'Hz', { size: 8.5, w: 800, anchor: 'end', sym: true })}
      ${f(X(4), Y(0) + 2, "normal range", { size: 8.5, fill: '#3f8a05', w: 800 })}
      ${pin(X(4), Y(55), 300, 250)}${f(258, 262, "high-frequency drop: noise or age-related hearing loss", { size: 9, fill: INK, w: 800 })}
      <circle cx="${X(0)}" cy="282" r="5" fill="#fff" stroke="#d9443a" stroke-width="2"/>${f(X(0) + 34, 286, "right ear", { size: 9, fill: INK })}
      <path d="M${X(2) - 4.5} 277.5 l9 9 M${X(2) + 4.5} 277.5 l-9 9" stroke="#3b6fd4" stroke-width="2"/>${f(X(2) + 32, 286, "left ear", { size: 9, fill: INK })}`, "audiogram");
  };

  A['hearing-devices'] = () => {
    const sh = nid();
    const ear = x => `<path d="M${x} 60 C${x - 40} 56 ${x - 50} 110 ${x - 40} 150 C${x - 32} 176 ${x - 10} 186 ${x} 176 C${x + 8} 166 ${x - 14} 150 ${x - 10} 128 C${x - 6} 112 ${x + 14} 110 ${x + 14} 92 C${x + 14} 72 ${x + 8} 60 ${x} 60Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.5"/>`;
    return svg(360, 264, `${title("Hearing aid and cochlear implant")}
      <rect x="6" y="32" width="170" height="176" rx="16" fill="#fdf2ea"/><rect x="184" y="32" width="170" height="176" rx="16" fill="#eef6fb"/>
      <g filter="url(#${sh})">${ear(96)}<path d="M110 66 C124 64 128 92 118 112" stroke="#8a96a0" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M116 112 C110 124 96 126 88 118" stroke="#8a96a0" stroke-width="2.4" fill="none"/></g>
      <g filter="url(#${sh})">${ear(268)}<circle cx="300" cy="76" r="13" fill="#3a4a56"/><rect x="278" y="70" width="10" height="44" rx="5" fill="#5b6b73"/>
        <circle cx="236" cy="150" r="18" fill="${C.lab}" stroke="${C.labLine}"/>${spiral(236, 150, 14, 2.2, C.labLine, 2)}<path d="M296 88 C280 120 260 140 242 150" stroke="#e8a33a" stroke-width="2.4" fill="none"/></g>
      ${lab(91, 226, 'hearing aid', "hearing aid: makes sound louder", { size: 9.5 })}${lab(269, 226, 'cochlear implant', "cochlear implant: an electrode in the cochlea", { size: 9.5 })}
      ${f(180, 258, "A hearing aid for mild to severe hearing loss; a cochlear implant for profound sensorineural deafness", { size: 8, fill: MUTED, w: 700 })}`, "Hearing aid and cochlear implant", shadow(sh));
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
    id: 'lx', sym: 'Lx', name: "Language of the Senses", short: "Language of the Senses", sub: "The five senses and their organs, eye and ear specialists, and building words from root, prefix and suffix",
    color: '#1E88A8', dark: '#13627A', light: '#E0F3F9',
    levels: ["Senses and Specialists", "Eye and Ear Roots", "Prefixes, suffixes and traps"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'lx1', title: "The five senses", icon: '✋', items: [
          L("special senses", `${fig('senses-overview', [], "The five senses")}The ${e('<b>special senses</b>')} have dedicated organs in the head: vision (eye), hearing and balance (ear), smell (${e('<b>olfaction</b>')}) and taste (${e('<b>gustation</b>')}). Touch works through receptors scattered in the skin.`),
          L("sensory receptor", `${fig('sense-organs', ["Sense organs"], "Sensory organs")}Each ${e('<b>sensory receptor</b>')} turns a stimulus (light, sound, an odour or taste molecule) into a nerve message.<br>${wb('an-', 'osm/o', '-ia')} → ${e('anosmia')}: loss of smell<br>${wb('a-', 'geus/o', '-ia')} → ${e('ageusia')}: loss of taste${memo("Two special senses have the most terms: the eye and the ear; this whole course is about these two.")}`),
          M("What is the medical term for “sense of smell”?", ['olfaction', 'gustation', 'audition', 'vision'], "olfact/o means smell.", null, F('senses-overview', [])),
          M(`${e('<b>ageusia</b>')} means…`, ["loss of taste", "loss of smell", "hearing loss", "double vision"], "a- means without and geus/o means taste."),
          T("The ear is both the organ of hearing and the organ of balance.", true, "The vestibule and semicircular canals.", F('sense-organs', [])),
          W("Build a word meaning “absence of the sense of smell”", ['an-', 'osm/o', '-ia'], ['ot/o', '-algia', 'dipl-'], 'anosmia.'),
          P("Match each sense to its root", [["vision", 'ophthalm/o'], ["hearing", 'audi/o'], ["smell", 'olfact/o'], ["taste", 'gustat/o']], "Roots of the five senses."),
          B("The medical term for “sense of taste” is ___.", ['gustation', 'olfaction', 'equilibrium'], 'gustat/o.'),
          S("Spell the medical term for the sense of smell", 'olfaction', 'olfact/o + -ion.', 'olfa…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: "Eye, Ear and Their Specialists", icon: '👩‍⚕️', items: [
          L("Two organs, several specialists", `${fig('eye-ear-overview', [], "Eye and ear")}${tbl([["specialist", "Job"], [e('ophthalmologist'), "eye physician and surgeon"], [e('optometrist'), "examining the eyes and prescribing glasses"], [e('optician'), "making and selling glasses"], [e('audiologist'), "measuring and treating hearing loss"], [e('otorhinolaryngologist (ENT)'), "ear, nose and throat physician"]])}`),
          L("At the bedside", `${pearl("In the Case Study, the paediatrician referred Kelly to an ophthalmologist for “lazy eye”; an optician made her glasses.")}${pearl("In a consultation report, an 8-year-old girl was sent to an ear, nose and throat (ENT) specialist for a chronic middle ear infection.")}${memo("opt means vision: an optometrist measures (-metry) vision and an optician makes glasses.")}`),
          M("Which specialist performs eye surgery?", ['ophthalmologist', 'optometrist', 'optician', 'audiologist'], "The eye physician.", null, F('eye-ear-overview', [])),
          M("The abbreviation ENT means…", ["ear, nose and throat", "Eye and ear", "emergency department", "glands"], 'ears, nose and throat.'),
          T("An optician makes and dispenses glasses but does not treat eye disease.", true, "A spectacles technician."),
          O("Put Kelly’s treatment in order", ['pediatrician', 'ophthalmologist', 'optician'], "Referral, diagnosis, making the glasses."),
          P("Match each specialist to their work", [['ophthalmologist', "eye physician and surgeon"], ['optometrist', "prescribing glasses"], ['audiologist', "measuring hearing"], ['otologist', "ear specialist"]], "Specialists."),
          B("The medical specialty of the eye is ___.", ['ophthalmology', 'otology', 'optometry'], 'ophthalm/o + -logy.'),
          S("Spell the term for a physician who treats eye diseases", 'ophthalmologist', 'ophthalm/o + -logist.', 'ophth…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: "The anatomy of a word", icon: '🧩', items: [
          L("Word puzzle", `${fig('wordparts', [], "root + root + suffix")}Every word is built from pieces:<br>• <b>Root</b>: the core meaning; e.g. ${e('ot')} means ear<br>• <b>Prefix</b>: at the start of the word; e.g. ${e('dipl-')} means double<br>• <b>Suffix</b>: at the end of the word; e.g. ${e('-itis')} means inflammation<br>• <b>Combining vowel</b> (usually ${e('o')}): ${e('ot/o/rrhea')}`),
          L("The golden rule", `Start the meaning from the <b>suffix</b>, then the <b>prefix</b>, and finally the <b>root</b>:<br>${wb('kerat/o', '-itis')} → “inflammation of the cornea”<br>${wb('ot/o', '-rrhea')} → “discharge from the ear”<br>${wb('dipl-', '-opia')} → “double vision”${memo("If the suffix begins with a vowel, the combining vowel is dropped: ot + -itis becomes otitis, not ototitis.")}`),
          M(`In ${e('<b>otorrhea</b>')}, which part is the suffix?`, ['-rrhea', 'ot/o', 'o', '-ea'], "-rrhea means discharge.", null, F('wordparts', [])),
          M(`${e('<b>keratitis</b>')} means…`, ["inflammation of the cornea", "inflammation of the iris", "inflammation of the eyelid", "inflammation of the retina"], "kerat/o means cornea."),
          T("The meaning of a medical word usually starts from the suffix.", true, "The golden rule."),
          W("Build a word meaning “inflammation of the ear”", ['ot/o', '-itis'], ['ophthalm/o', '-algia', 'dipl-'], 'otitis.'),
          P("Match each piece to its type", [['dipl-', "prefix"], ['retin/o', "root"], ['-opia', "suffix"], ['o', "combining vowel"]], "The word parts."),
          B("“Inflammation of the eyelid” is ___.", ['blepharitis', 'blepharoptosis', 'blepharoplasty'], 'blephar/o + -itis.'),
          S("Spell the term for discharge from the ear", 'otorrhea', 'ot/o + -rrhea.', 'oto…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'lx4', title: "Eye Roots", icon: '👁️', items: [
          L("The root map", `${fig('root-map-eye', [], "Map of eye roots")}${tbl([["root", "Meaning"], [e('ophthalm/o, ocul/o'), "eye"], [e('kerat/o, corne/o'), "cornea"], [e('irid/o, ir/o'), "iris"], [e('cor/o, pupill/o'), "pupil"], [e('phac/o'), "lens"], [e('retin/o'), "retina"], [e('scler/o'), "sclera"]])}`),
          L("Two roots for one part", `${fig('eye-roots', ["Roots on a section of the eye"], "Eye Roots")}Many parts of the eye have a Greek root and a Latin root: ${e('ophthalm/o')} (Greek) and ${e('ocul/o')} (Latin) both mean eye.${memo("kerat/o means both cornea and “hard”; the cornea is like a tough window at the front of the eye.")}`),
          M("Which is the root for “lens”?", ['phac/o', 'retin/o', 'kerat/o', 'irid/o'], "phac/o, phak/o.", null, F('root-map-eye', [])),
          M("The root ocul/o means…", ["eye", "ear", "eyelid", "tear"], 'ocular.'),
          T("kerat/o and corne/o both mean cornea.", true, "Two roots, one part.", F('eye-roots', [])),
          W("Build a word meaning “inflammation of the retina”", ['retin/o', '-itis'], ['irid/o', '-ectomy', 'phac/o'], 'retinitis.'),
          P("Match each root to its part of the eye", [['irid/o', "iris"], ['scler/o', "sclera"], ['retin/o', "retina"], ['cor/o', "pupil"]], "The roots."),
          B("The root ___ means eye (Greek).", ['ophthalm/o', 'ocul/o', 'opt/o'], 'ophthalmology.'),
          S("Spell the term for inflammation of the iris", 'iritis', 'ir/o + -itis.', 'iri…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: "Ear Roots", icon: '👂', items: [
          L("The root map", `${fig('root-map-ear', [], "Map of ear roots")}${tbl([["root", "Meaning"], [e('ot/o, aur/o, auricul/o'), "ear"], [e('myring/o, tympan/o'), "eardrum"], [e('staped/o'), "stapes"], [e('cochle/o'), "cochlea"], [e('labyrinth/o'), "inner ear"], [e('vestibul/o'), "upper heart chamber"], [e('mastoid/o'), "mastoid process"]])}`),
          L("On a real figure", `${fig('ear-roots', ["Roots on a section of the ear"], "Ear Roots")}${memo("myring looks like ring; the eardrum is a stretched ring. tympan means drum.")}${pearl("In the Chart Note, the patient was admitted for tympanoplasty, that is, repair of the eardrum.")}`),
          M("Which is the root for “eardrum”?", ['myring/o', 'mastoid/o', 'cochle/o', 'aur/o'], "myring/o and tympan/o.", null, F('root-map-ear', [])),
          M("Which ossicle does the root staped/o refer to?", ["stapes", "malleus", "incus", "mastoid"], 'stapes.'),
          T("ot/o and aur/o both mean ear.", true, "Greek and Latin roots.", F('ear-roots', [])),
          W("Build a word meaning “repair of the eardrum”", ['tympan/o', '-plasty'], ['ot/o', '-itis', 'staped/o'], 'tympanoplasty.'),
          P("Match each root to its part of the ear", [['cochle/o', "cochlea"], ['vestibul/o', "upper heart chamber"], ['labyrinth/o', "inner ear"], ['mastoid/o', "mastoid process"]], "The roots."),
          B("Inflammation of the mastoid is ___.", ['mastoiditis', 'myringitis', 'labyrinthitis'], 'mastoid/o + -itis.'),
          S("Spell the term for the study of the ear", 'otology', 'ot/o + -logy.', 'oto…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: "Hearing and tears", icon: '💧', items: [
          L("Roots of hearing", `• ${e('audi/o, audit/o')}: hearing, sound; e.g. ${e('audiology')} and ${e('auditory')}<br>• ${e('acous/o, acus/o')}: hearing; e.g. ${e('acoustic')}<br>• the suffix ${e('-cusis')}: condition of hearing; e.g. ${e('presbycusis')} (age-related hearing loss)${memo("In everyday language, audio also means sound; an audiometer is a hearing meter.")}`),
          L("Roots of tears", `${e('dacry/o')} (Greek) and ${e('lacrim/o')} (Latin) both mean tear.<br>${wb('dacry/o', 'cyst/o', '-itis')} → ${e('dacryocystitis')}: inflammation of the tear sac<br>${wb('dacry/o', '-rrhea')} → ${e('dacryorrhea')}: excessive tearing${pearl("A clinical scenario: Mrs Julie Halbritter has a red eye with excessive tearing and frequent blinking.")}`),
          M("The root meaning “sound, hearing” is…", ['audi/o', 'aur/o', 'opt/o', 'dacry/o'], 'audiology.'),
          M(`${e('<b>dacryocystitis</b>')} means…`, ["inflammation of the tear sac", "tearing", "inflammation of the eyelid", "dry eyes"], 'dacry/o + cyst/o + -itis.'),
          T("lacrim/o and dacry/o both mean tear.", true, "Latin and Greek."),
          W("Build a word meaning “age-related hearing loss”", ['presby/o', '-cusis'], ['dipl-', '-opia', 'audi/o'], 'presbycusis.'),
          P("Match each term to its meaning", [['auditory', "hearing"], ['acoustic', "relating to sound"], ['lacrimal', "relating to tears"], ['dacryorrhea', "excessive tearing"]], "The roots."),
          B("The study of hearing is ___.", ['audiology', 'otology', 'acoustics'], 'audi/o + -logy.'),
          S("Spell the adjective meaning relating to tears", 'lacrimal', 'lacrim/o + -al.', 'lacr…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'lx7', title: "Prefixes", icon: '⬅️', items: [
          L("Common prefixes", `${tbl([["prefix", "Meaning", "Example"], [e('a-, an-'), "without", e('anacusis')], [e('dipl-'), "two-unit", e('diplopia')], [e('eso-'), "inwards", e('esotropia')], [e('exo-'), "outwards", e('exotropia')], [e('hemi-'), "half", e('hemianopia')], [e('presby-'), "old age", e('presbyopia')], [e('intra-'), "within", e('intraocular')]])}`),
          L("At the bedside", `${wb('eso-', '-tropia')} → turning of the eye inwards<br>${wb('exo-', '-tropia')} → turning of the eye outwards${memo("eso- means inwards, towards you; exo- is like exit, meaning outwards.")}${pearl("In the Case Study, Kelly’s left eye turned towards the inner corner of the eye (medial canthus); that is, esotropia.")}`),
          M("The prefix eso- means…", ["inwards", "outwards", "two-unit", "half"], 'esotropia.'),
          M(`${e('<b>hemianopia</b>')} means…`, ["blindness in half the visual field", "double vision", "night blindness", "colour blindness"], "hemi- means half."),
          T("The prefix intra- means “within”, as in intraocular.", true, "Within the eye."),
          W("Build a word meaning “outward turning of the eye”", ['exo-', '-tropia'], ['eso-', '-opia', 'dipl-'], 'exotropia.'),
          P("Match each prefix to its meaning", [['dipl-', "two-unit"], ['hemi-', "half"], ['presby-', "old age"], ['an-', "without"]], "The prefixes."),
          B("Double vision is ___.", ['diplopia', 'hemianopia', 'amblyopia'], 'dipl- + -opia.'),
          S("Spell the term for inward turning of the eye", 'esotropia', 'eso- + -tropia.', 'eso…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: "Suffixes", icon: '➡️', items: [
          L("Sense Suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-opia') + '<br>' + e('-opsia'), "vision", e('myopia, achromatopsia')], [e('-cusis'), "hearing", e('presbycusis')], [e('-tropia'), "turning around an axis", e('esotropia')], [e('-ptosis'), "drooping", e('blepharoptosis')], [e('-algia') + '<br>' + e('-dynia'), "pain", e('otalgia, otodynia')], [e('-rrhea'), "secrete", e('otorrhea')]])}`),
          L("Eye and ear pain", `There are two same-meaning suffixes for pain: ${e('<b>otalgia</b>')} and ${e('<b>otodynia</b>')} both mean earache; ${e('<b>ophthalmalgia</b>')} and ${e('<b>oculodynia</b>')} both mean eye pain.${pearl("A clinical scenario: the record of 68-year-old Mrs Kelly Post reads oculodynia, mastoiditis and conjunctivitis; that is, eye pain, inflammation of the mastoid and inflammation of the conjunctiva.")}`),
          M("The suffix -cusis means…", ["hearing", "vision", "pain", "drooping"], 'presbycusis.'),
          M(`${e('<b>oculodynia</b>')} means…`, ["eye pain", "eye inflammation", "dry eyes", "double vision"], "-dynia means pain."),
          T("-opia and -opsia both mean vision.", true, "Same-meaning twins."),
          W("Build the term that means “earache”", ['ot/o', '-algia'], ['dipl-', '-rrhea', 'ophthalm/o'], 'otalgia.'),
          P("Match each suffix to its meaning", [['-ptosis', "drooping"], ['-tropia', "turning around an axis"], ['-rrhea', "secrete"], ['-dynia', "pain"]], "Suffixes."),
          B("Drooping of the eyelid is ___.", ['blepharoptosis', 'blepharitis', 'blepharoplasty'], 'blephar/o + -ptosis.'),
          S("Spell the term for earache ending in -algia", ['otalgia', 'otodynia'], 'ot/o + -algia.', 'ota…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: "Look-alike Traps and Right and Left", icon: '⚖️', items: [
          L("Traps", `${fig('twins', [], "Look-alike Traps")}${vs(['ot/o', "ear; as in otitis"], ['or/o', "mouth; as in oral"])}${vs(['malleus', "ear ossicle"], ['malleolus', "ankle knob"])}`),
          L("right and left", `${fig('od-os-ou', [], "Right and left abbreviations")}${tbl([["abbreviation", "Latin", "Meaning"], [e('OD'), e('oculus dexter'), "right eye"], [e('OS'), e('oculus sinister'), "left eye"], [e('OU'), e('oculus uterque'), "both eyes"], [e('AD'), e('auris dextra'), "right ear"], [e('AS'), e('auris sinistra'), "left ear"], [e('AU'), e('auris uterque'), "both ears"]])}${memo("dexter means right (as in dexterity, the skill of the right hand) and sinister means left.")}`),
          M("The abbreviation OS means…", ["left eye", "right eye", "both eyes", "left ear"], 'oculus sinister.', null, F('od-os-ou', [])),
          M("Where is the malleolus?", ["ankle knob", "middle ear", "eye", "mouth"], "The malleus is in the ear."),
          T("AU means both ears.", true, 'auris uterque.'),
          O("Put the Latin terms in order from top to bottom: right, left, both", ['oculus dexter', 'oculus sinister', 'oculus uterque'], "OD, OS, OU."),
          P("Match each abbreviation to its meaning", [['OD', "right eye"], ['AS', "left ear"], ['OU', "both eyes"], ['AD', "right ear"]], "Right and left."),
          B("The root ___ means mouth, not ear.", ['or/o', 'ot/o', 'aur/o'], 'oral.'),
          S("Spell the name of the hammer-shaped ossicle", 'malleus', 'malle/o.', 'mall…'),
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
    id: 'ey', sym: 'Ey', name: "The Eye: Structure and Vision", short: "Eye", sub: "Layers of the eyeball, cornea, iris, lens and retina, eyelids and lacrimal apparatus, eye muscles, refraction, accommodation and the visual pathway",
    color: '#3B6FD4', dark: '#264FA3', light: '#E4ECFB',
    levels: ["eyeball", "Protective Structures and Movement", "Light and Vision"],
    gens: EA.genIds('ey'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'ey1', title: "The Three Layers of the Eyeball", icon: '🧅', items: [
          L("From outside in", `${fig('eye-section', [], "Section of the eyeball")}The ${e('<b>eyeball</b>')} sits in the ${e('<b>orbit</b>')} (eye socket), and its wall has three layers:<br>• outer (fibrous) layer: the ${e('<b>sclera</b>')} (white of the eye) and, in front, the ${e('<b>cornea</b>')}<br>• middle layer (${e('<b>uvea</b>')}): the ${e('choroid')}, ${e('ciliary body')} and ${e('iris')}<br>• inner layer: the ${e('<b>retina</b>')}`),
          L("On the figure", `${fig('eye-layers', ["The Three Layers of the Eyeball"], "Layers of the eye")}The ${e('<b>choroid</b>')} is full of vessels and nourishes the retina. The space behind the lens is filled by the ${e('<b>vitreous humor</b>')} (a clear jelly).${memo("Three layers like an onion: the tough sclera, the vessel-rich choroid and the light-sensitive retina.")}`),
          M("What is the white of the eye called?", ['sclera', 'cornea', 'choroid', 'retina'], "scler/o means hard.", null, F('eye-section', [])),
          M("The vessel-rich layer that nourishes the retina is…", ['choroid', 'sclera', 'cornea', 'lens'], "The choroid."),
          T("The uvea includes the choroid, ciliary body and iris.", true, "The middle layer.", F('eye-layers', [])),
          O("Put the layers in order from outside in", ['sclera', 'choroid', 'retina', 'vitreous humor'], "From outside in."),
          P("Match each part to its layer", [['sclera', "outer layer"], ['choroid', "middle layer"], ['retina', "the inner layer"], ['vitreous humor', "jelly inside the eyeball"]], "Layers."),
          B("The bony cavity of the eye is the ___.", ['orbit', 'socket bone', 'canthus'], "The eye socket."),
          S("Spell the term for the white of the eye", 'sclera', 'scler/o.', 'scl…'),
          N('t2f:ey')
        ]
      },
      {
        id: 'ey2', title: "Cornea, Iris, Pupil and Lens", icon: '🔵', items: [
          L("The front of the eye", `${fig('eye-labeled', ["Structures of the eyeball"], "eyeball")}• ${e('<b>cornea</b>')}: the clear window at the front of the eye; bends light the most<br>• ${e('<b>iris</b>')}: the coloured muscular ring<br>• ${e('<b>pupil</b>')}: the hole in the centre of the iris<br>• ${e('<b>lens</b>')}: the clear lens behind the pupil<br>• ${e('<b>aqueous humor</b>')}: the watery fluid in front of the lens`),
          L("The pupil in light", `${fig('pupil-sizes', [], "Pupil size")}${fig('iris-pupil', ["Iris muscles"], "How the iris works")}In bright light the circular muscles of the iris narrow the pupil: ${e('<b>miosis</b>')}. In dim light the pupil widens: ${e('<b>mydriasis</b>')}.${memo("miosis is small (mini); mydriasis is big.")}`),
          M("Which part gives the eye its colour?", ['iris', 'pupil', 'cornea', 'sclera'], "The iris.", null, F('eye-labeled', [])),
          M("Narrowing of the pupil…", ['miosis', 'mydriasis', 'myopia', 'anisocoria'], "In bright light.", null, F('pupil-sizes', [])),
          T("The pupil is an opening, not a tissue.", true, "The gateway for light.", F('iris-pupil', [])),
          O("Put the path of light in order", ['cornea', 'aqueous humor', 'pupil', 'lens', 'vitreous humor', 'retina'], "From front to back."),
          P("Match each part to its job", [['cornea', "bends light the most"], ['iris', "adjusts pupil size"], ['lens', "fine focusing"], ['aqueous humor', "fluid in front of the lens"]], "The front of the eye."),
          B("Widening of the pupil is ___.", ['mydriasis', 'miosis', 'mydriatic'], 'mydr/o.'),
          S("Spell the term for the clear window at the front of the eye", 'cornea', 'corne/o.', 'corn…'),
          N('f2t:ey')
        ]
      },
      {
        id: 'ey3', title: "Retina and Optic Nerve", icon: '🔴', items: [
          L("Back of the eye", `${fig('retina-fundus', [], "The back of the eye and its receptors")}The ${e('<b>retina</b>')} has two kinds of light receptor (${e('photoreceptor')}):<br>• ${e('<b>rods</b>')}: dim light and black-and-white vision<br>• ${e('<b>cones</b>')}: colour and sharp vision<br>The ${e('<b>macula lutea</b>')} is the yellow spot in the centre of the retina, and the ${e('<b>fovea centralis</b>')} in its middle is the sharpest point of vision.`),
          L("The blind spot", `${fig('fundus', ["The back of the eye through an ophthalmoscope"], "Back of the eye")}Where the ${e('<b>optic nerve</b>')} (the second cranial nerve) leaves the retina is the ${e('<b>optic disc</b>')}; it has no receptors, so it is the blind spot.${memo("cones are for colour; both start with c.")}`),
          M("Which receptors detect colours?", ['cones', 'rods', 'optic disc', 'choroid'], "The cones.", null, F('retina-fundus', [])),
          M("Where is the eye’s blind spot?", ['optic disc', 'fovea', 'macula', 'iris'], "Where the nerve leaves.", null, F('fundus', [])),
          T("The sharpest vision is at the fovea centralis.", true, "Packed with cones."),
          O("Put the path of the light message in order", ['photoreceptors', 'optic nerve', 'brain'], "From the retina to the brain."),
          P("Match each part to its feature", [['rods', "vision in dim light"], ['cones', "colour vision"], ['macula lutea', "yellow spot"], ['optic disc', "The blind spot"]], "The retina."),
          B("The optic nerve is cranial nerve number ___.", ['II', 'VIII', 'V'], 'CN II.'),
          S("Spell the term for the light-sensitive inner layer of the eye", 'retina', 'retin/o.', 'ret…'),
          N('d2t:ey')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'ey4', title: "Eyelid, Conjunctiva and Eyebrow", icon: '😉', items: [
          L("Protective structures", `${fig('eye-front', [], "The eye from the front")}• ${e('<b>eyelid</b>')} (${e('palpebra')}; ${e('blephar/o')}): the lid that closes the eye and helps spread tears<br>• ${e('<b>canthus</b>')}: the corner of the eye; inner (medial) and outer (lateral)<br>• ${e('<b>conjunctiva</b>')}: a thin mucous membrane over the sclera and under the lid<br>• ${e('<b>meibomian gland</b>')}: the oil gland of the eyelid margin`),
          L("On the figure", `${fig('eye-accessory', ["Accessory structures of the eye"], "Accessory structures")}${pearl("A clinical scenario: the doctor ordered surgery on Mr Smith’s drooping eyelids, which were blocking his vision; that is, blepharoplasty.")}${memo("canthus is the corner of the eye.")}`),
          M("The mucous membrane over the white of the eye and under the lid is…", ['conjunctiva', 'cornea', 'sclera', 'canthus'], "The conjunctiva.", null, F('eye-front', [])),
          M("The root blephar/o means…", ["eyelid", "eyelash", "eyebrow", "tear"], 'blepharitis.'),
          T("canthus means the corner of the eye, where the upper and lower lids meet.", true, "Inner and outer.", F('eye-accessory', [])),
          W("Build a word meaning “inflammation of the conjunctiva”", ['conjunctiv/o', '-itis'], ['blephar/o', '-ptosis', 'kerat/o'], 'conjunctivitis.'),
          P("Match each part to its meaning", [['eyelid', "lid that closes the eye"], ['canthus', "corner of the eye"], ['conjunctiva', "membrane over the white of the eye"], ['meibomian gland', "oil gland of the eyelid"]], "Protectors."),
          B("The Latin name for eyelid is ___.", ['palpebra', 'pinna', 'papilla'], 'palpebr/o.'),
          S("Spell the term for the thin membrane over the white of the eye", 'conjunctiva', 'conjunctiv/o.', 'conj…'),
          N('t2f:ey')
        ]
      },
      {
        id: 'ey5', title: "lacrimal apparatus", icon: '😢', items: [
          L("The Path of Tears", `${fig('lacrimal-path', [], "The Path of Tears")}The ${e('<b>lacrimal apparatus</b>')}:<br>• ${e('<b>lacrimal gland</b>')}: above the outer corner of the eye; makes tears<br>• tears wash the surface of the eye and flow to the inner corner<br>• ${e('lacrimal canals')} and ${e('lacrimal sac')}<br>• ${e('<b>nasolacrimal duct</b>')}: carries tears to the nose`),
          L("On the figure", `${fig('lacrimal', ["Protective structures and the lacrimal apparatus"], "lacrimal apparatus")}${memo("When you cry your nose runs too, because the nasolacrimal duct carries tears into the nose.")}${wb('dacry/o', 'aden/o', '-itis')} → ${e('dacryoadenitis')}: inflammation of the tear gland`),
          M("Where are tears made?", ['lacrimal gland', 'lacrimal sac', 'conjunctiva', 'cornea'], "The lacrimal gland.", null, F('lacrimal-path', [])),
          M("Which duct carries tears to the nose?", ['nasolacrimal duct', 'eustachian tube', 'lacrimal gland', 'canthus'], 'naso + lacrimal.'),
          T("The lacrimal gland is above the outer (lateral) corner of the eye.", true, "Under the upper lid.", F('lacrimal', [])),
          O("Put the path of tears in order", ['lacrimal gland', 'surface of eye', 'lacrimal canals', 'lacrimal sac', 'nasolacrimal duct'], "From the gland to the nose."),
          P("Match each part to its job", [['lacrimal gland', "making tears"], ['lacrimal sac', "collecting tears"], ['nasolacrimal duct', "draining into the nose"], ['conjunctiva', "coating the surface of the eye"]], "The lacrimal apparatus."),
          B("Inflammation of the tear gland is ___.", ['dacryoadenitis', 'dacryocystitis', 'dacryorrhea'], "aden/o means gland."),
          S("Spell the term for the duct that carries tears into the nose", 'nasolacrimal duct', 'naso + lacrimal + duct.', 'nasol…'),
          N('f2t:ey')
        ]
      },
      {
        id: 'ey6', title: "Eye Muscles", icon: '💪', items: [
          L("Six muscles", `${fig('eye-muscles', [], "extraocular muscles")}The six ${e('<b>extraocular muscles (EOM)</b>')} lie outside the eyeball and rotate it: four rectus muscles (superior, inferior, medial, lateral) and two oblique muscles (superior and inferior).`),
          L("On the figure", `${fig('extraocular-muscles', ["Eye muscles from the side and front"], "Eye Muscles")}${memo("extra means outside; extraocular means outside the eyeball.")}${pearl("In an examination, EOM intact means eye movements are full in all directions.")}`),
          M("How many extraocular muscles are there?", ["six", "four", "two", "eight"], "Four rectus and two oblique.", null, F('eye-muscles', [])),
          M("The muscle that turns the eye towards the nose is…", ['medial rectus', 'lateral rectus', 'superior oblique', 'inferior rectus'], "medial means towards the middle."),
          T("The extraocular muscles are inside the eyeball.", false, "They are outside the eyeball.", F('extraocular-muscles', [])),
          O("Put the rectus muscles in clockwise order from the top (right eye from the front)", ['superior rectus', 'medial rectus', 'inferior rectus', 'lateral rectus'], "Up, in, down, out."),
          P("Match each muscle to its movement", [['superior rectus', "looking up"], ['inferior rectus', "looking down"], ['lateral rectus', "towards the temple"], ['medial rectus', "towards the nose"]], "Muscles."),
          B("The abbreviation ___ means extraocular movements.", ['EOM', 'ENT', 'EOE'], 'extraocular movements.'),
          S("Spell the adjective meaning outside the eyeball", 'extraocular', 'extra- + ocul/o + -ar.', 'extra…'),
          N('d2t:ey')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'ey7', title: "Refraction and Accommodation", icon: '🔍', items: [
          L("Bending of light", `${fig('accommodation-art', [], "accommodation")}${e('<b>refraction</b>')} means the bending of light by the cornea and lens so that it focuses on the retina. ${e('<b>emmetropia</b>')} means normal refraction. Lens power is measured in units called ${e('<b>diopter</b>')}.`),
          L("accommodation", `${fig('accommodation', ["Accommodation for near vision"], "accommodation")}${e('<b>accommodation</b>')}: the ciliary muscle changes the shape of the lens; for near vision the lens becomes rounder. ${e('<b>convergence</b>')} means both eyes turn inwards to look at something near.${memo("With age the lens stiffens and accommodation decreases: presbyopia.")}`),
          M("What is the bending of light in the eye called?", ['refraction', 'accommodation', 'convergence', 'emmetropia'], "Refraction.", null, F('accommodation-art', [])),
          M("What happens to the lens for near vision?", ["it becomes rounder", "it becomes flatter", "turbid", "it becomes smaller and darker"], 'accommodation.', null, F('accommodation', [])),
          T("emmetropia means normal refraction; the image falls right on the retina.", true, "Normal vision."),
          O("Put the steps of looking at a book in order", ['convergence', 'accommodation', 'focus on retina'], "Convergence, accommodation, focus."),
          P("Match each term to its meaning", [['refraction', "bending of light"], ['accommodation', "lens adjusting for near vision"], ['convergence', "both eyes turning in for near"], ['diopter', "unit of lens power"]], "Refraction."),
          B("The abbreviation Em means ___.", ['emmetropia', 'emulsion', 'emergency'], "Normal vision."),
          S("Spell the term for the lens adjusting for near vision", 'accommodation', 'accommodat + -ion.', 'accom…'),
          N('t2f:ey')
        ]
      },
      {
        id: 'ey8', title: "Visual pathway", icon: '🧠', items: [
          L("From Eye to Brain", `${fig('visual-pathway', [], "Visual pathway")}${e('optic nerve')} → ${e('<b>optic chiasm</b>')} (where half the fibres cross over) → ${e('optic tract')} → thalamus → ${e('<b>visual cortex</b>')} in the occipital lobe.`),
          L("An upside-down image", `The image on the retina is upside down and the brain turns it the right way up. Because the fibres cross at the chiasm, damage to one side of the brain takes away half the visual field of both eyes: ${e('<b>hemianopia</b>')}.${memo("chiasm is like the Greek letter χ (chi); that is, a cross.")}`),
          M("In which lobe of the brain is the visual cortex?", ["occipital lobe", "frontal lobe", "temporal lobe", "cerebellum"], 'occipital.', null, F('visual-pathway', [])),
          M("Where do the visual fibres cross?", ['optic chiasm', 'optic disc', 'retina', 'lens'], "At the chiasm."),
          T("The image on the retina forms upside down.", true, "The brain corrects it."),
          O("Put the visual pathway in order", ['retina', 'optic nerve', 'optic chiasm', 'optic tract', 'visual cortex'], "From the eye to the brain."),
          P("Match each part to its meaning", [['optic nerve', "second cranial nerve"], ['optic chiasm', "crossing point of the visual fibres"], ['visual cortex', "sight centre in the occipital lobe"], ['hemianopia', "half blindness"]], "The route."),
          B("The place where the fibres cross is the optic ___.", ['chiasm', 'disc', 'tract'], 'χ.'),
          S("Spell the term for the brain area in the occipital lobe that processes sight", 'visual cortex', 'visual + cortex.', 'visual c…'),
          N('f2t:ey')
        ]
      },
      {
        id: 'ey9', title: "Visual Acuity and Field", icon: '🎯', items: [
          L("Measuring vision", `• ${e('<b>visual acuity (VA)</b>')}: sharpness of vision; measured with the Snellen chart, e.g. ${e('20/20')}<br>• ${e('<b>visual field (VF)</b>')}: everything the eye sees without moving<br>• ${e('<b>peripheral vision</b>')}: vision at the edges of the field<br>• ${e('<b>binocular vision</b>')}: two-eyed vision and depth perception`),
          L("At the bedside", `${pearl("The Discharge Summary says: Mrs Serowan’s <bdi dir=\"ltr\">“best corrected visual acuity”</bdi> in the right eye was 20/70; that is, even with glasses she saw only 20/70.")}${tbl([["abbreviation", "Meaning"], [e('VA'), "visual acuity"], [e('BCVA'), "best corrected acuity"], [e('cc'), "with glasses or contact lenses"], [e('sc'), "without glasses or contact lenses"]])}`),
          M("With what instrument is sharpness of vision measured?", ['Snellen chart', 'otoscope', 'tonometer', 'audiometer'], "The Snellen chart."),
          M("Vision at the edges of the visual field…", ['peripheral vision', 'central vision', 'binocular vision', 'night vision'], "Peripheral."),
          T("sc means without glasses and cc means with glasses.", true, "sine and cum correction."),
          O("Put the acuities in order from best to worst", ['20/20', '20/40', '20/70', '20/200'], "A larger denominator means worse vision."),
          P("Match each abbreviation to its meaning", [['VA', "visual acuity"], ['VF', "visual field"], ['BCVA', "best corrected acuity"], ['cc', "with glasses"]], "Abbreviations."),
          B("Two-eyed vision with depth perception is ___ vision.", ['binocular', 'peripheral', 'monocular'], "bin- means two."),
          S("Spell the word for sharpness in “visual …”", 'acuity', "Sharpness.", 'acu…'),
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
    id: 'vd', sym: 'Vd', name: "Eye Diseases", short: "Eye Disease", sub: "Nearsightedness and farsightedness, cataract, glaucoma, retinal diseases, strabismus and lazy eye, eyelid diseases and eye inflammations",
    color: '#8E6BD8', dark: '#6345A8', light: '#EEE8FB',
    levels: ["Refractive Errors and the Lens", "Retina, Pressure and Visual Field", "Eyelid, Muscle and Inflammation"],
    gens: EA.genIds('vd'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'vd1', title: "Refractive errors", icon: '👓', items: [
          L("Where does the light fall?", `${fig('refraction-errors', [], "Refractive errors")}• ${e('<b>myopia</b>')} (nearsightedness): long eyeball; focus in front of the retina; distance is blurred<br>• ${e('<b>hyperopia</b>')} (farsightedness): short eyeball; focus behind the retina; near is blurred<br>• ${e('<b>astigmatism</b>')}: irregular cornea; the image is stretched and blurred`),
          L("Correcting with lenses", `${fig('refractive-errors', ["Correction with concave and convex lenses"], "Correcting refractive errors")}${fig('astigmatism', ["Nearsightedness, farsightedness and astigmatism"], "Refractive errors")}A concave lens corrects nearsightedness and a convex lens corrects farsightedness.${pearl("In the Case Study, besides lazy eye, Kelly also had mild hyperopia and was given glasses.")}`),
          M("In nearsightedness, where does the image fall?", ["in front of the retina", "behind the retina", "on the retina", "on the cornea"], "A long eyeball.", null, F('refraction-errors', [])),
          M("Which lens corrects farsightedness?", ["convex", "concave", "cylindrical", "tinted"], "It converges light.", null, F('refractive-errors', [])),
          T("Astigmatism comes from irregular curvature of the cornea or lens.", true, "Several focal points.", F('astigmatism', [])),
          W("Build a word meaning “farsightedness”", ['hyper-', '-opia'], ['dipl-', '-tropia', 'presby/o'], 'hyperopia.'),
          P("Match each error to its description", [['myopia', "distance blurred"], ['hyperopia', "near blurred"], ['astigmatism', "irregular cornea"], ['emmetropia', "normal refraction"]], "Refraction."),
          B("The abbreviation MY means ___.", ['myopia', 'mydriasis', 'myringitis'], "Nearsightedness."),
          S("Spell the term for nearsightedness", 'myopia', 'my + -opia.', 'myo…'),
          N('t2f:vd')
        ]
      },
      {
        id: 'vd2', title: "Cataract and Presbyopia", icon: '🌫️', items: [
          L("cataract", `${fig('cataract-art', [], "cataract")}${e('<b>cataract</b>')}: clouding of the lens; vision gradually becomes blurred and faded and light is dazzling. Causes: ageing, diabetes, injury, medicines. Treatment: removing the lens and inserting an artificial lens.`),
          L("At the bedside", `${fig('cataract-photo', ["Advanced cataract"], "cataract")}${fig('visual-disorders', ["Vision in eye diseases"], "Visual disorders")}${pearl("The Ophthalmology Consultation says: a 79-year-old woman came with gradually decreasing vision and photophobia; examination showed a large cataract in the right eye.")}${e('<b>presbyopia</b>')}: stiffening of the lens with age and inability to see near.`),
          M("A cataract is clouding of which part?", ["lens", "cornea", "vitreous body", "retina"], 'lens.', null, F('cataract-art', [])),
          M("At what age does presbyopia usually begin?", ["from about age 40 onwards", "childhood", "infancy", "adolescence"], "Age-related farsightedness."),
          T("A cataract is cured with glasses.", false, "The definitive treatment is surgery.", F('cataract-photo', [])),
          O("Put the course of the 79-year-old woman in order", ['blurred vision and photophobia', 'ophthalmoscopy', 'cataract diagnosis', 'phacoemulsification'], "From complaint to treatment."),
          P("Match each term to its meaning", [['cataract', "clouding of the lens"], ['presbyopia', "age-related farsightedness"], ['photophobia', "sensitivity to light"], ['IOL', "intraocular lens"]], "The lens."),
          B("Age-related farsightedness is ___.", ['presbyopia', 'presbycusis', 'myopia'], 'presby/o + -opia.'),
          S("Spell the term for clouding of the lens", 'cataract', "Clouding of the lens.", 'cata…'),
          N('f2t:vd')
        ]
      },
      {
        id: 'vd3', title: "Glaucoma", icon: '⏫', items: [
          L("High pressure", `${fig('glaucoma-art', [], "Glaucoma")}${e('<b>glaucoma</b>')}: the aqueous humour does not drain properly, ${e('<b>intraocular pressure (IOP)</b>')} rises and the optic nerve is damaged. It is often symptomless until peripheral vision is lost.`),
          L("On the figure", `${fig('glaucoma', ["Aqueous flow and optic disc damage"], "Glaucoma")}${memo("glauc/o means grey-green; this is how the Greeks saw the colour of the patient’s pupil.")}${pearl("A clinical scenario: a patient asks the difference between IOP and IOL; IOP is intraocular pressure and IOL is an intraocular lens.")}`),
          M("Which number rises in glaucoma?", ['IOP', 'VA', 'dB', 'IOL'], "The pressure inside the eye.", null, F('glaucoma-art', [])),
          M("Which part does untreated glaucoma damage?", ["optic nerve", "lens", "cornea", "eyelid"], "Permanent blindness.", null, F('glaucoma', [])),
          T("Glaucoma is usually symptomless until serious damage occurs.", true, "Screening with tonometry."),
          O("Put the events of glaucoma in order", ['blocked drainage', 'IOP rises', 'optic nerve damage', 'peripheral vision loss'], "From cause to complication."),
          P("Match each abbreviation or term to its meaning", [['IOP', "intraocular pressure"], ['IOL', "intraocular lens"], ['aqueous humor', "aqueous humour"], ['canal of Schlemm', "drainage canal"]], "Glaucoma."),
          B("The disease with high eye pressure is ___.", ['glaucoma', 'cataract', 'keratitis'], "Glaucoma."),
          S("Spell the term for optic nerve damage from high eye pressure", 'glaucoma', 'glauc/o + -oma.', 'glau…'),
          N('d2t:vd')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'vd4', title: "Macula and Retinopathy", icon: '🎯', items: [
          L("Central vision", `${fig('amd-art', [], "macular degeneration")}${e('<b>macular degeneration</b>')} (${e('AMD')}): the macula is damaged and central vision is lost; reading and recognising faces become hard, but peripheral vision remains.`),
          L("Retinopathy", `${fig('macular-degeneration', ["Healthy and damaged macula"], "macular degeneration")}${fig('vision-changes', ["Vision in cataract, glaucoma and AMD"], "Changes in vision")}${wb('retin/o', '-pathy')} → ${e('<b>retinopathy</b>')}: disease of the retina<br>• ${e('diabetic retinopathy')}: damage to the retinal vessels in diabetes<br>• ${e('retinopathy of prematurity (ROP)')}: in premature babies`),
          M("Which vision is lost in macular degeneration?", ["central", "peripheral", "at night", "coloured"], "The macula is the centre of vision.", null, F('amd-art', [])),
          M("In whom is ROP seen?", ["premature babies", "older adults", "people with diabetes", "athletes"], 'retinopathy of prematurity.', null, F('macular-degeneration', [])),
          T("In glaucoma peripheral vision is reduced, and in AMD central vision.", true, "Two different patterns.", F('vision-changes', [])),
          W("Build a word meaning “disease of the retina”", ['retin/o', '-pathy'], ['dipl-', '-itis', 'phac/o'], 'retinopathy.'),
          P("Match each disease to its pattern of vision", [['macular degeneration', "central blind spot"], ['glaucoma', "tunnel vision"], ['cataract', "blurred, faded vision"], ['diabetic retinopathy', "scattered dark spots"]], "Vision."),
          B("The abbreviation ___ means age-related macular degeneration.", ['AMD', 'ROP', 'RD'], "It is also written ARMD."),
          S("Spell the term for any disease of the retina", 'retinopathy', 'retin/o + -pathy.', 'retino…'),
          N('wb:vd')
        ]
      },
      {
        id: 'vd5', title: "Retinal Detachment and Tumour", icon: '🌊', items: [
          L("retinal detachment", `${fig('retinal-detach-art', [], "retinal detachment")}${e('<b>retinal detachment (RD)</b>')}: the retina separates from the choroid. Signs: flashes of light, floaters and a “curtain” over the vision. It is an emergency; treated with a scleral buckle, laser or vitrectomy.`),
          L("On the figures", `${fig('retinal-detachment', ["Detached retina"], "retinal detachment")}${fig('retinal-detachment-view', ["The patient’s view"], "Vision in detachment")}${fig('retinoblastoma', ["White pupil in retinoblastoma"], "retinoblastoma")}${e('<b>retinoblastoma</b>')}: a malignant tumour of the retina in young children; the pupil looks white in photos.`),
          M("The abbreviation RD means…", ["retinal detachment", "diabetic retina damage", "The blind spot", "healthy retina"], 'retinal detachment.', null, F('retinal-detach-art', [])),
          M("In whom is retinoblastoma most common?", ["young children", "older adults", "premature babies", "pregnant women"], "A tumour of the retina.", null, F('retinoblastoma', [])),
          T("Retinal detachment is an eye emergency.", true, "Risk of blindness.", F('retinal-detachment-view', [])),
          O("Put the events in order", ['retinal tear', 'fluid under retina', 'retinal detachment', 'curtain over vision'], "From tear to symptom."),
          P("Match each term to its meaning", [['retinal detachment', "retina separating from the choroid"], ['retinoblastoma', "retinal tumour"], ['scleral buckling', "scleral buckle"], ['vitrectomy', "removal of the vitreous"]], "The retina."),
          B("A malignant retinal tumour in children is ___.", ['retinoblastoma', 'retinopathy', 'retinitis'], "-blast means immature cell."),
          S("Spell the term for a malignant retinal tumour of young children", 'retinoblastoma', 'retin/o + blast + -oma.', 'retinob…'),
          N('t2f:vd')
        ]
      },
      {
        id: 'vd6', title: "Visual Signs", icon: '🕶️', items: [
          L("visual field", `${fig('field-defects', [], "The visual field in disease")}• ${e('<b>scotoma</b>')}: a blind spot in the visual field (${e('scot/o')} means darkness)<br>• ${e('<b>hemianopia</b>')}: blindness in half the field<br>• ${e('<b>nyctalopia</b>')}: night blindness<br>• ${e('<b>diplopia</b>')}: double vision`),
          L("Light and colour", `${wb('phot/o', '-phobia')} → ${e('<b>photophobia</b>')}: extreme sensitivity to light<br>${wb('a-', 'chromat/o', '-opsia')} → ${e('<b>achromatopsia</b>')}: colour blindness<br>${e('<b>anisocoria</b>')}: unequal pupil size${memo("nyct means night; nyctalopia means not seeing at night.")}`),
          M("A blind spot in the visual field…", ['scotoma', 'glaucoma', 'chalazion', 'hordeolum'], 'scot/o + -oma.', null, F('field-defects', [])),
          M(`${e('<b>nyctalopia</b>')} means…`, ["night blindness", "colour blindness", "double vision", "sensitivity to light"], "nyct/o means night."),
          T("photophobia means fear of or sensitivity to light.", true, 'phot/o + -phobia.'),
          W("Build a word meaning “sensitivity to light”", ['phot/o', '-phobia'], ['scot/o', '-opia', 'nyct/o'], 'photophobia.'),
          P("Match each sign to its meaning", [['diplopia', "double vision"], ['achromatopsia', "colour blindness"], ['anisocoria', "unequal pupils"], ['hemianopia', "half blindness"]], "Signs."),
          B("Colour blindness is ___.", ['achromatopsia', 'nyctalopia', 'hemianopia'], 'a- + chromat/o + -opsia.'),
          S("Spell the term for seeing two images of one object", 'diplopia', 'dipl- + -opia.', 'dipl…'),
          N('f2t:vd')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'vd7', title: "Strabismus and Lazy Eye", icon: '👀', items: [
          L("Two misaligned eyes", `${fig('strabismus-art', [], "Strabismus")}${e('<b>strabismus</b>')}: lack of coordination of the eye muscles; the two eyes do not look at the same point.<br>• ${e('<b>esotropia (ET)</b>')}: turning inwards (cross-eye)<br>• ${e('<b>exotropia (XT)</b>')}: turning outwards (walleye)`),
          L("lazy eye", `${fig('strabismus-drawing', ["Esotropia and exotropia"], "Strabismus")}${fig('strabismus-photos', ["Two examples of strabismus"], "Strabismus")}${e('<b>amblyopia</b>')} (${e('ambly/o')} means dull): the brain ignores the image from the weaker eye. ${e('<b>nystagmus</b>')}: involuntary trembling movement of the eye.${pearl("The Case Study says: 7-year-old Kelly had strabismic amblyopia; a patch was placed over her healthy eye to strengthen the lazy eye.")}`),
          M("Turning of the eye towards the nose…", ['esotropia', 'exotropia', 'nystagmus', 'amblyopia'], "eso- means inwards.", null, F('strabismus-art', [])),
          M("What was the treatment for Kelly’s lazy eye?", ["a patch over the healthy eye and glasses", "corneal surgery", "dilating drops", "retinal laser"], 'patching.', null, F('strabismus-drawing', [])),
          T("nystagmus means involuntary trembling movement of the eyes.", true, "Eye tremor.", F('strabismus-photos', [])),
          O("Put Kelly’s course in order", ['pediatrician visit', 'referral to ophthalmologist', 'diagnosis of amblyopia', 'patch and glasses', 'improved vision'], 'Case Study.'),
          P("Match each term to its meaning", [['strabismus', "misalignment of the eyes"], ['amblyopia', "lazy eye"], ['exotropia', "turning outwards"], ['nystagmus', "eye tremor"]], "Muscle."),
          B("The abbreviation XT means ___.", ['exotropia', 'esotropia', 'extraocular'], "Turning outwards."),
          S("Spell the term for lazy eye", 'amblyopia', 'ambly/o + -opia.', 'ambl…'),
          N('d2t:vd')
        ]
      },
      {
        id: 'vd8', title: "eyelid diseases", icon: '😑', items: [
          L("Five eyelid diseases", `${fig('lid-disorders', [], "eyelid diseases")}• ${e('<b>hordeolum</b>')} (stye): a painful infection of a gland on the eyelid margin<br>• ${e('<b>chalazion</b>')}: a painless cyst of a meibomian gland<br>• ${e('<b>blepharoptosis</b>')}: drooping of the upper eyelid<br>• ${e('<b>ectropion</b>')}: eyelid turned outwards<br>• ${e('<b>entropion</b>')}: eyelid turned inwards`),
          L("At the bedside", `${fig('hordeolum', ["stye"], "hordeolum")}${pearl("A clinical scenario: Mrs Julie Halbritter has a “red bump on the eyelid”; in medical terms, a hordeolum.")}${memo(`The prefix ${e('ec-')} means out and ${e('en-')} means in; ectropion turns the eyelid outwards and entropion turns it inwards.`)}`),
          M("A painful infection of the eyelid margin…", ['hordeolum', 'chalazion', 'ectropion', 'blepharoptosis'], "A stye.", null, F('lid-disorders', [])),
          M("What happens in entropion?", ["the eyelid and lashes turn inwards", "the eyelid turns outwards", "the eyelid droops", "the eyelid becomes inflamed"], "en- means in."),
          T("A chalazion is usually painless.", true, "A cyst of a meibomian gland.", F('hordeolum', [])),
          W("Build a word meaning “drooping of the eyelid”", ['blephar/o', '-ptosis'], ['dipl-', '-itis', 'kerat/o'], 'blepharoptosis.'),
          P("Match each disease to its description", [['hordeolum', "stye"], ['chalazion', "painless cyst"], ['ectropion', "eyelid outwards"], ['entropion', "eyelid inwards"]], "Eyelid."),
          B("The common name for a hordeolum is a ___.", ['sty', 'pinkeye', 'walleye'], "A stye."),
          S("Spell the medical name for a stye", 'hordeolum', 'sty.', 'hord…'),
          N('wb:vd')
        ]
      },
      {
        id: 'vd9', title: "Inflammations and Infections", icon: '🔥', items: [
          L("-itis in the eye", `${fig('eye-infections', [], "Eye inflammations")}• ${e('<b>conjunctivitis</b>')} (pinkeye): inflammation of the conjunctiva; red eye and discharge<br>• ${e('<b>blepharitis</b>')}: inflammation of the eyelid margin<br>• ${e('<b>keratitis</b>')}: inflammation of the cornea<br>• ${e('<b>dacryocystitis</b>')}: inflammation of the tear sac<br>• ${e('<b>uveitis</b>')}, ${e('iritis')}, ${e('scleritis')}`),
          L("Dry and bulging eyes", `${wb('xer/o', 'ophthalm/o', '-ia')} → ${e('<b>xerophthalmia</b>')}: dryness of the eye, for example with contact lenses<br>${e('<b>exophthalmos</b>')}: bulging of the eyeball, often in thyroid disease<br>${e('corneal abrasion')}: a scratch on the cornea${pearl("A clinical scenario: the record of 68-year-old Mrs Kelly Post lists conjunctivitis; that is, inflammation of the conjunctiva.")}`),
          M("The common name for conjunctivitis…", ['pinkeye', 'sty', 'walleye', 'cross-eye'], "Pinkeye.", null, F('eye-infections', [])),
          M(`${e('<b>exophthalmos</b>')} means…`, ["bulging eyes", "dry eyes", "inflammation of the cornea", "drooping eyelid"], "ex- means out."),
          T("xerophthalmia means dryness of the eye.", true, "xer/o means dry."),
          W("Build a word meaning “inflammation of the tear sac”", ['dacry/o', 'cyst/o', '-itis'], ['kerat/o', 'blephar/o', '-ptosis'], 'dacryocystitis.'),
          P("Match each inflammation to its site", [['keratitis', "cornea"], ['uveitis', "uvea"], ['scleritis', "sclera"], ['blepharitis', "eyelid"]], "The inflammations."),
          B("A scratch on the surface of the cornea is a corneal ___.", ['abrasion', 'ulcer', 'ptosis'], "A scratch."),
          S("Spell the term for inflammation of the cornea", 'keratitis', 'kerat/o + -itis.', 'kera…'),
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
    id: 'er', sym: 'Er', name: "The Ear: Hearing and Balance", short: "Ear", sub: "Auricle and ear canal, eardrum and ossicles, Eustachian tube, cochlea and organ of Corti, the path of sound, decibels and hertz, and the balance system",
    color: '#E8913A', dark: '#B5641A', light: '#FDEEDC',
    levels: ["Outer and Middle Ear", "inner ear", "Hearing and Balance"],
    gens: EA.genIds('er'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'er1', title: "The three parts of the ear", icon: '👂', items: [
          L("Outer, Middle, Inner", `${fig('ear-section', [], "The three parts of the ear")}• ${e('<b>external ear</b>')}: the auricle and ear canal up to the eardrum<br>• ${e('<b>middle ear</b>')}: an air-filled cavity with three ossicles<br>• ${e('<b>inner ear</b>')}: the ${e('labyrinth')}, with the cochlea, vestibule and semicircular canals`),
          L("On the figure", `${fig('ear-labeled', ["Outer, middle and inner ear"], "The three parts of the ear")}${fig('ear-sections', ["Structures of the ear"], "section of the ear")}${memo("The outer ear collects sound, the middle ear amplifies it and the inner ear turns it into a nerve message.")}`),
          M("In which part of the ear are the ossicles?", ['middle ear', 'external ear', 'inner ear', 'mastoid'], "The middle ear.", null, F('ear-section', [])),
          M("In which part is the cochlea?", ['inner ear', 'middle ear', 'external ear', 'canal'], "The inner ear.", null, F('ear-labeled', [])),
          T("The eardrum is the border between the outer and middle ear.", true, 'tympanic membrane.', F('ear-sections', [])),
          O("Put the parts in order from outside in", ['external ear', 'tympanic membrane', 'middle ear', 'inner ear'], "From outside in."),
          P("Match each part to its job", [['external ear', "collecting sound"], ['middle ear', "amplifying the vibration"], ['inner ear', "turning it into a nerve message"], ['labyrinth', "maze of the inner ear"]], "Three parts."),
          B("The inner ear is also called the ___.", ['labyrinth', 'auricle', 'meatus'], "The maze."),
          S("Spell the term for the maze-like inner ear", 'labyrinth', 'labyrinth/o.', 'laby…'),
          N('t2f:er')
        ]
      },
      {
        id: 'er2', title: "Auricle and Ear Canal", icon: '🐚', items: [
          L("outer ear", `• ${e('<b>auricle</b>')} or ${e('pinna')}: the ear flap; collects sound (${e('auricul/o')})<br>• ${e('<b>external auditory meatus</b>')}: the external auditory canal up to the eardrum<br>• ${e('<b>cerumen</b>')}: earwax; traps dust and insects`),
          L("At the bedside", `${pearl("An Exercise scenario: before the myringotomy, the ear canal was cleaned of dry wax (cerumen) and debris.")}${e('<b>aural</b>')} means relating to the ear and ${e('<b>auditory</b>')} means relating to hearing.${memo("The word meatus means passage; the ear canal is the outer passage of sound.")}`),
          M("What is another name for the auricle?", ['pinna', 'meatus', 'cochlea', 'incus'], "The ear flap."),
          M("What is cerumen?", ["earwax", "inner ear fluid", "eardrum", "pus from the ear"], 'earwax.'),
          T("Earwax protects the ear from dust and insects.", true, "A protective role."),
          O("Put the path of sound through the outer ear in order", ['auricle', 'external auditory meatus', 'tympanic membrane'], "From outside in."),
          P("Match each term to its meaning", [['auricle', "outer ear"], ['meatus', "passage"], ['cerumen', "earwax"], ['aural', "stethoscope"]], "The outer ear."),
          B("Earwax is called cerumen or ear ___.", ['earwax', 'eardrum', 'earache'], "Wax."),
          S("Spell the medical term for earwax", 'cerumen', 'cerumin/o.', 'ceru…'),
          N('f2t:er')
        ]
      },
      {
        id: 'er3', title: "Eardrum and Ossicles", icon: '🥁', items: [
          L("A chain of three", `${fig('ossicle-chain', [], "Ossicles")}The ${e('<b>tympanic membrane (TM)</b>')} vibrates with sound and passes the vibration to the three ${e('<b>auditory ossicles</b>')}:<br>• ${e('<b>malleus</b>')} (hammer)<br>• ${e('<b>incus</b>')} (anvil)<br>• ${e('<b>stapes</b>')} (stirrup), which sits on the ${e('<b>oval window</b>')}`),
          L("On the figure", `${fig('ossicles', ["Eardrum and Ossicles"], "Ossicles")}${memo("Read their first letters from outside in: M, I and S; that is, Malleus, Incus and Stapes.")}The stapes is the smallest bone in the body.`),
          M("Which ossicle is attached to the eardrum?", ['malleus', 'incus', 'stapes', 'cochlea'], "The malleus.", null, F('ossicle-chain', [])),
          M("Which window does the stapes sit on?", ['oval window', 'round window', 'tympanic membrane', 'eustachian tube'], "The oval window.", null, F('ossicles', [])),
          T("The stapes is the smallest bone in the body.", true, "The stirrup."),
          O("Put the path of vibration in order", ['tympanic membrane', 'malleus', 'incus', 'stapes', 'oval window'], 'M-I-S.'),
          P("Match each ossicle to its everyday name", [['malleus', "hammer"], ['incus', "anvil"], ['stapes', "stirrup"], ['tympanic membrane', "eardrum"]], "The chain."),
          B("The abbreviation ___ means eardrum.", ['TM', 'TMJ', 'TB'], 'tympanic membrane.'),
          S("Spell the name of the stirrup-shaped ossicle", 'stapes', 'staped/o.', 'stap…'),
          N('d2t:er')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'er4', title: "Eustachian tube", icon: '🎺', items: [
          L("Equalising pressure", `${fig('eustachian-art', [], "Eustachian tube")}The ${e('<b>eustachian tube</b>')} (auditory tube; ${e('salping/o')}) connects the middle ear to the throat and equalises the air pressure on both sides of the eardrum; it opens with swallowing and yawning.`),
          L("In children", `In children it is shorter and more horizontal, so throat infections reach the middle ear more easily and ${e('otitis media')} is common.<br>${e('<b>barotrauma</b>')}: ear injury from a sudden change in pressure, for example on a plane or when diving.${memo("salping/o is both the uterine tube and the Eustachian tube; both are “tubes”.")}`),
          M("What does the Eustachian tube connect the middle ear to?", ["throat (pharynx)", "nose", "cochlea", "brain"], 'nasopharynx.', null, F('eustachian-art', [])),
          M("Why is otitis media more common in children?", ["the Eustachian tube is short and horizontal", "the eardrum is thick", "there is more earwax", "the cochlea is small"], "A child’s anatomy."),
          T("Swallowing helps open the Eustachian tube.", true, "Equalising pressure."),
          O("Put the path of infection in a child in order", ['throat infection', 'eustachian tube', 'middle ear', 'otitis media'], "From throat to ear."),
          P("Match each term to its meaning", [['eustachian tube', "tube to the throat"], ['barotrauma', "pressure injury"], ['middle ear', "air-filled cavity with the ossicles"], ['pharynx', "throat"]], "Pressure."),
          B("Ear injury from a change in pressure is ___.", ['barotrauma', 'otosclerosis', 'tinnitus'], "bar/o means pressure."),
          S("Spell the name of the tube connecting the middle ear to the throat", 'eustachian tube', 'auditory tube.', 'eust…'),
          N('t2f:er')
        ]
      },
      {
        id: 'er5', title: "inner ear", icon: '🐌', items: [
          L("labyrinth", `${fig('inner-ear-art', [], "inner ear")}The inner ear lies in the temporal bone:<br>• ${e('<b>cochlea</b>')}: the organ of hearing<br>• ${e('<b>vestibule</b>')}: balance and gravity<br>• ${e('<b>semicircular canals</b>')}: three canals; head rotation<br>• ${e('<b>vestibulocochlear nerve</b>')}: the eighth cranial nerve`),
          L("On the figure", `${fig('inner-ear', ["Bony and membranous labyrinth"], "inner ear")}The ${e('oval window')} is the entrance for vibration into the cochlea, and the ${e('<b>round window</b>')} releases the pressure.${memo("cochlea is Latin for snail shell, and that is its shape.")}`),
          M("Which is the organ of hearing in the inner ear?", ['cochlea', 'vestibule', 'semicircular canals', 'malleus'], "The cochlea.", null, F('inner-ear-art', [])),
          M("Which cranial nerve is the nerve of hearing and balance?", ["the eighth (CN VIII)", "the second (CN II)", "the fifth", "the seventh"], 'vestibulocochlear.', null, F('inner-ear', [])),
          T("The semicircular canals play no part in hearing; they are for balance.", true, "Head rotation."),
          O("Put the parts of the labyrinth in order from the oval window onwards", ['oval window', 'vestibule', 'cochlea'], "vibration in"),
          P("Match each part to its job", [['cochlea', "hearing"], ['vestibule', "static balance"], ['semicircular canals', "head rotation"], ['round window', "pressure release"]], "The inner ear."),
          B("The eighth nerve is the vestibulo___ nerve.", ['cochlear', 'ocular', 'optic'], "Vestibulocochlear."),
          S("Spell the term for the snail-shaped organ of hearing", 'cochlea', 'cochle/o.', 'coch…'),
          N('f2t:er')
        ]
      },
      {
        id: 'er6', title: "organ of Corti", icon: '🎹', items: [
          L("The Hearing Receptor", `${fig('cochlea-corti', [], "organ of Corti")}Inside the cochlea is the ${e('<b>organ of Corti</b>')} with its ${e('<b>hair cells</b>')}. Vibration of the cochlear fluid bends the hairs of these cells and a nerve message is produced.`),
          L("High and low sounds", `The base of the cochlea senses high-pitched (high-frequency) sounds and its tip senses low-pitched sounds. Loud noise damages the hair cells for high sounds first.${memo("The organ of Corti is the hearing receptor, like the retina for the eye.")}`),
          M("What are the hearing receptors in the organ of Corti called?", ['hair cells', 'rods', 'cones', 'ossicles'], "Hair cells.", null, F('cochlea-corti', [])),
          M("Where is the organ of Corti?", ['cochlea', 'vestibule', 'middle ear', 'auricle'], "The cochlea."),
          T("Bending of the hair cells’ hairs produces a nerve message.", true, "Turning vibration into a signal."),
          O("Put the steps from vibration to message in order", ['fluid wave', 'hair cells bend', 'nerve impulse', 'cochlear nerve'], "Conversion."),
          P("Match each part to its counterpart in the eye", [['organ of Corti', "retina"], ['hair cells', "photoreceptors"], ['cochlear nerve', "optic nerve"], ['auditory cortex', "visual cortex"]], "Ear and eye."),
          B("The hearing receptor is the organ of ___.", ['Corti', 'Schlemm', 'Bartholin'], "The organ of Corti."),
          S("Spell the term for the sensory cells of the cochlea", 'hair cells', 'hair + cells.', 'hair…'),
          N('d2t:er')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'er7', title: "Path of sound", icon: '🔊', items: [
          L("Eight steps", `${fig('sound-path-art', [], "Path of sound")}Sound wave → auricle and canal → eardrum → ossicles → oval window → cochlear fluid → hair cells and the eighth nerve → ${e('<b>auditory cortex</b>')} in the temporal lobe.`),
          L("On the figures", `${fig('sound-path', ["The path of a sound wave through the ear"], "Path of sound")}${fig('auditory-pathway-img', ["The hearing pathway to the brain"], "Hearing pathway")}${memo("Sound changes form three times: air vibration, bone vibration, fluid wave; and finally a nerve message.")}`),
          M("In which lobe is the auditory cortex?", ["temporal lobe", "occipital lobe", "frontal lobe", "cerebellum"], 'temporal lobe.', null, F('sound-path-art', [])),
          M("After the ossicles, where does the vibration go?", ["oval window", "eardrum", "auricle", "Eustachian tube"], 'oval window.', null, F('sound-path', [])),
          T("In the cochlea the vibration becomes a fluid wave.", true, "Cochlear fluid.", F('auditory-pathway-img', [])),
          O("Put the path of sound in order", ['auricle', 'tympanic membrane', 'ossicles', 'cochlea', 'auditory cortex'], "From outside to the brain."),
          P("Match each part to its type of transmission", [['ear canal', "air vibration"], ['ossicles', "bone vibration"], ['cochlea', "fluid wave"], ['CN VIII', "nerve message"]], "Conversions."),
          B("The ___ cortex interprets sound.", ['auditory', 'visual', 'motor'], "Auditory."),
          S("Spell the adjective meaning relating to hearing", 'auditory', 'audit/o + -ory.', 'audi…'),
          N('t2f:er')
        ]
      },
      {
        id: 'er8', title: "Decibels and Sound Conduction", icon: '📢', items: [
          L("Loudness and pitch", `${fig('decibel-scale', [], "The decibel scale")}• ${e('<b>decibel (dB)</b>')}: loudness of sound; conversation is about 60 dB<br>• ${e('<b>hertz (Hz)</b>')}: frequency or pitch of sound<br>Long-term sound above 85 dB damages hearing.`),
          L("Air and bone", `• ${e('<b>air conduction (AC)</b>')}: sound through the canal, eardrum and ossicles<br>• ${e('<b>bone conduction (BC)</b>')}: sound through the skull bone directly to the inner ear<br>In a healthy ear, AC is stronger than BC.${pearl("A clinical scenario: Mr Bob Noel’s employer at the factory has asked him to wear earplugs, because loud, prolonged noise causes hearing loss.")}`),
          M("Which is the unit of loudness?", ['decibel', 'hertz', 'diopter', 'millimeter'], 'dB.', null, F('decibel-scale', [])),
          M("In a healthy ear, which is stronger?", ["air conduction", "bone conduction", "both are equal", "neither"], 'AC > BC.'),
          T("Hertz shows the pitch of sound.", true, "Frequency."),
          O("Put the sounds in order from quiet to loud", ['whisper', 'conversation', 'heavy traffic', 'jet engine'], "30, 60, 85, 140 decibels."),
          P("Match each abbreviation to its meaning", [['dB', "decibel"], ['Hz', "hertz"], ['AC', "air conduction"], ['BC', "bone conduction"]], "Abbreviations."),
          B("Sound above ___ decibels is dangerous.", ["85", "30", "10"], "Earplugs are needed."),
          S("Spell the unit of loudness", 'decibel', 'dB.', 'deci…'),
          N('f2t:er')
        ]
      },
      {
        id: 'er9', title: "balance", icon: '🤸', items: [
          L("The Vestibular System", `${fig('balance-art', [], "balance")}${e('<b>equilibrium</b>')} (balance) is the job of the vestibule and semicircular canals. When the head turns, the fluid in the canals moves and the hair cells sense it; the message travels along the vestibular nerve to the brain.`),
          L("At the bedside", `${e('<b>vertigo</b>')}: a feeling that the room is spinning; a sign of inner ear disorder<br>${e('<b>motion sickness</b>')}: nausea and dizziness when the eyes and inner ear send different messages<br>${e('electronystagmography (ENG)')}: recording eye movements to test balance${memo("A vestibule is like the entrance hall of a house; in the ear it is the entrance hall of the labyrinth.")}`),
          M("Which parts maintain balance?", ["the vestibule and semicircular canals", "the cochlea and eardrum", "auricle and canal", "Ossicles"], 'vestibular apparatus.', null, F('balance-art', [])),
          M(`${e('<b>vertigo</b>')} means…`, ["spinning sensation", "ringing in the ears", "hearing loss", "earache"], "Spinning dizziness."),
          T("Motion sickness comes from a mismatch between messages from the eyes and inner ear.", true, "Two different messages."),
          O("Put the path of sensing rotation in order", ['head turns', 'fluid moves', 'hair cells sense', 'vestibular nerve', 'brain'], "Balance."),
          P("Match each term to its meaning", [['equilibrium', "balance"], ['vertigo', "spinning dizziness"], ['vestibule', "upper heart chamber"], ['ENG', "electronystagmography"]], "Balance."),
          B("The medical term for “balance” is ___.", ['equilibrium', 'audition', 'refraction'], 'balance.'),
          S("Spell the term for the entrance chamber of the inner ear", 'vestibule', 'vestibul/o.', 'vest…'),
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
    id: 'hd', sym: 'Hd', name: "Ear Diseases", short: "Ear Disease", sub: "Otitis externa, media and interna, mastoiditis, conductive and sensorineural hearing loss, presbycusis, otosclerosis, tinnitus, vertigo, Ménière disease and tumours",
    color: '#D9534F', dark: '#A8372F', light: '#FBE6E4',
    levels: ["Ear Inflammations", "hearing loss", "Tinnitus, Vertigo and Tumours"],
    gens: EA.genIds('hd'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'hd1', title: "Three types of otitis", icon: '🔥', items: [
          L("Site of inflammation", `${fig('otitis-types', [], "Types of otitis")}${e('<b>otitis</b>')} means inflammation of the ear, and its name tells where it is:<br>• ${e('<b>otitis externa (OE)</b>')}: the ear canal; “swimmer’s ear”<br>• ${e('<b>otitis media (OM)</b>')}: the middle ear; common in children<br>• ${e('<b>otitis interna</b>')}: the inner ear; the same as ${e('labyrinthitis')}`),
          L("Signs", `${e('<b>otalgia</b>')}: earache<br>${e('<b>otorrhea</b>')}: discharge from the ear<br>${wb('ot/o', 'py/o', '-rrhea')} → ${e('otopyorrhea')}: pus discharge from the ear<br>${e('otorrhagia')}: bleeding from the ear${memo("externa outside, media middle, interna inside; like three floors.")}`),
          M("Which is “swimmer’s ear”?", ['otitis externa', 'otitis media', 'otitis interna', 'mastoiditis'], "The ear canal.", null, F('otitis-types', [])),
          M(`${e('<b>otopyorrhea</b>')} means…`, ["pus discharge from the ear", "ear bleeding", "earache", "tinnitus"], "py/o means pus."),
          T("Otitis interna is the same as labyrinthitis.", true, "The inner ear."),
          W("Build a word meaning “bleeding from the ear”", ['ot/o', '-rrhagia'], ['dipl-', '-rrhea', 'myring/o'], 'otorrhagia.'),
          P("Match each type of otitis to its site", [['otitis externa', "ear canal"], ['otitis media', "middle ear"], ['otitis interna', "inner ear"], ['myringitis', "eardrum"]], "Site of inflammation."),
          B("The abbreviation ___ means inflammation of the middle ear.", ['OM', 'OE', 'OD'], 'otitis media.'),
          S("Spell the term for discharge from the ear", 'otorrhea', 'ot/o + -rrhea.', 'oto…'),
          N('t2f:hd')
        ]
      },
      {
        id: 'hd2', title: "Otitis media", icon: '🧒', items: [
          L("On the otoscope", `${fig('otitis-media-art', [], "Otitis media")}In ${e('acute otitis media')} the eardrum is red and bulging, and pus has collected behind it (${e('suppurative')}). If the fluid is clear: ${e('<b>serous otitis media (SOM)</b>')}.`),
          L("Perforated eardrum", `${fig('perforated-tm', ["Perforated eardrum"], "perforated eardrum")}The pressure of the pus may burst the eardrum: ${e('<b>perforated tympanic membrane</b>')}.${pearl("In a consultation report: an 8-year-old girl had a chronic left middle ear infection; the left eardrum was bulging and tympanometry showed fluid behind it.")}${pearl("The Chart Note says: a 30-year-old woman had mucoserous otitis media; that is, mucous and serous fluid in the middle ear.")}`),
          M("What does the eardrum look like in acute otitis media?", ["red and bulging", "grey and healthy", "permanently perforated", "white and flat"], "Pus behind it.", null, F('otitis-media-art', [])),
          M("The abbreviation SOM means…", ["serous otitis media", "outer ear otitis", "hole in the eardrum", "earwax"], 'serous otitis media.', null, F('perforated-tm', [])),
          T("Chronic otitis media can cause hearing loss.", true, "Conductive hearing loss."),
          O("Put the 8-year-old girl’s course in order", ['recurrent ear infections', 'ENT referral', 'otoscopy and tympanometry', 'myringotomy with PE tube'], 'Per standard references.'),
          P("Match each term to its meaning", [['suppurative', "containing pus"], ['serous', "watery"], ['mucoserous', "mucous and serous"], ['perforated', "with a hole"]], "Type of fluid."),
          B("Inflammation of the eardrum is ___.", ['myringitis', 'mastoiditis', 'labyrinthitis'], 'myring/o + -itis.'),
          S("Spell the adjective for watery fluid like serum", 'serous', "Serum.", 'ser…'),
          N('f2t:hd')
        ]
      },
      {
        id: 'hd3', title: "Mastoid, Labyrinth and Earwax", icon: '🦴', items: [
          L("Other inflammations", `• ${e('<b>mastoiditis</b>')}: inflammation of the air cells of the mastoid process behind the ear; a complication of otitis media<br>• ${e('<b>labyrinthitis</b>')}: inflammation of the inner ear with vertigo<br>• ${e('<b>myringitis</b>')}: inflammation of the eardrum`),
          L("Wax and pressure", `${e('<b>impacted cerumen</b>')}: packed wax in the canal; blocks the ear and causes hearing loss. Treatment: ear irrigation.<br>${e('<b>barotrauma</b>')}: ear injury from a sudden change in pressure.${pearl("A clinical scenario: Mrs Kelly Post has mastoiditis in her record; that is, inflammation of the mastoid.")}`),
          M("Where is the mastoid?", ["behind the ear in the temporal bone", "inside the cochlea", "in the auricle", "in the throat"], 'mastoid process.'),
          M("What does impacted earwax do?", ["it blocks the canal and causes hearing loss", "it damages the nerve", "it breaks the cochlea", "it causes severe vertigo"], 'impacted cerumen.'),
          T("Labyrinthitis comes with vertigo.", true, "The inner ear."),
          W("Build a word meaning “inflammation of the labyrinth”", ['labyrinth/o', '-itis'], ['mastoid/o', '-ectomy', 'cochle/o'], 'labyrinthitis.'),
          P("Match each disease to its site", [['mastoiditis', "mastoid process"], ['labyrinthitis', "inner ear"], ['impacted cerumen', "ear canal"], ['myringitis', "eardrum"]], "Site of disease."),
          B("Ear injury from a change in pressure on a plane is ___.", ['barotrauma', 'otosclerosis', 'presbycusis'], 'bar/o.'),
          S("Spell the term for inflammation of the bone behind the ear", 'mastoiditis', 'mastoid/o + -itis.', 'mast…'),
          N('d2t:hd')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'hd4', title: "Two Types of Hearing Loss", icon: '🔇', items: [
          L("Conductive or sensorineural", `${fig('hearing-loss-types', [], "Types of hearing loss")}• ${e('<b>conductive hearing loss</b>')}: sound does not pass through the outer or middle ear; e.g. earwax, otitis media, otosclerosis<br>• ${e('<b>sensorineural hearing loss</b>')}: damage to the cochlea or auditory nerve; e.g. presbycusis, noise, acoustic neuroma`),
          L("At the bedside", `${pearl("The Case Study says: a 35-year-old musician who has played loud instruments for 20 years without earplugs has progressive hearing loss in both ears; Rinne and Weber tests showed moderate hearing loss, and he was referred for a hearing aid.")}${memo("conductive means “conducting”; the path that conducts sound is blocked. sensorineural means the sense organ and nerve are damaged.")}`),
          M("Which type is hearing loss from earwax?", ["conductive", "sensorineural", "central", "mental"], 'conductive.', null, F('hearing-loss-types', [])),
          M("What type of hearing loss does cochlear damage cause?", ["sensorineural", "conductive", "always mixed", "none"], 'sensorineural.'),
          T("Otosclerosis causes conductive hearing loss.", true, "The stapes is locked."),
          O("Put the path of sound in order and see where it is conductive and where sensorineural", ['ear canal', 'middle ear', 'cochlea', 'auditory nerve'], "The first two parts are conductive, the last two sensorineural."),
          P("Match each cause to its type of hearing loss", [['impacted cerumen', "conductive: blocked canal"], ['otitis media', "conductive: middle ear fluid"], ['presbycusis', "sensorineural: ageing cochlea"], ['acoustic neuroma', "sensorineural: nerve tumour"]], "Causes."),
          B("The abbreviation HL on an audiogram means hearing ___.", ['level', 'loss', 'lobe'], 'hearing level.'),
          S("Spell the term for hearing loss from cochlea or nerve damage", 'sensorineural', 'sensory + neural.', 'senso…'),
          N('wb:hd')
        ]
      },
      {
        id: 'hd5', title: "Presbycusis and Noise", icon: '👴', items: [
          L("Hearing loss with age", `${e('<b>presbycusis</b>')}: gradual hearing loss with age; high-pitched sounds go first. ${e('<b>noise-induced hearing loss</b>')}: damage to hair cells from loud, prolonged sound.<br>${wb('an-', '-acusis')} → ${e('<b>anacusis</b>')}: complete deafness`),
          L("Excessive hearing", `${wb('hyper-', '-acusis')} → ${e('<b>hyperacusis</b>')}: ordinary sounds seem far too loud.<br>${e('<b>deafness</b>')}: loss of hearing; communication through sign language (${e('ASL')}) or a cochlear implant.${memo("-acusis means hearing: presby (old age), an (without), hyper (excessive).")}`),
          M("Which is presbycusis?", ['presbycusis', 'presbyopia', 'anacusis', 'hyperacusis'], 'presby/o + -cusis.'),
          M("Complete deafness…", ['anacusis', 'hyperacusis', 'tinnitus', 'otalgia'], "an- means without."),
          T("In presbycusis, high-pitched (high-frequency) sounds are usually the first to go.", true, "High frequency."),
          W("Build a word meaning “excessive sensitivity to sound”", ['hyper-', '-acusis'], ['presby/o', '-opia', 'an-'], 'hyperacusis.'),
          P("Match each term to its meaning", [['presbycusis', "age-related hearing loss"], ['anacusis', "complete deafness"], ['hyperacusis', "ordinary sounds seem too loud"], ['ASL', "American Sign Language"]], "Auditory."),
          B("The cause of a musician’s hearing loss was ___.", ["loud noise", "infection", "a blow"], 'noise-induced.'),
          S("Spell the term for hearing loss of old age", 'presbycusis', 'presby/o + -cusis.', 'presby…'),
          N('t2f:hd')
        ]
      },
      {
        id: 'hd6', title: "otosclerosis", icon: '🔒', items: [
          L("A locked stapes", `${fig('otosclerosis-art', [], "otosclerosis")}${wb('ot/o', '-sclerosis')} → ${e('<b>otosclerosis</b>')}: extra bone grows around the stapes and locks it in the oval window; vibration does not reach the inner ear.`),
          L("treatment", `It causes progressive conductive hearing loss. Treatment: ${e('<b>stapedectomy</b>')} (removing the stapes and inserting a prosthesis) or a hearing aid.${memo("scler/o means hard; otosclerosis means hardening in the ear.")}`),
          M("In otosclerosis, which ossicle gets stuck?", ['stapes', 'malleus', 'incus', 'mastoid'], "The stirrup.", null, F('otosclerosis-art', [])),
          M("The surgical treatment for otosclerosis…", ['stapedectomy', 'myringotomy', 'mastoidectomy', 'otoplasty'], 'staped/o + -ectomy.'),
          T("Otosclerosis causes sensorineural hearing loss.", false, "It is conductive."),
          O("Put the events in order", ['bone growth around stapes', 'stapes fixed', 'vibration blocked', 'conductive hearing loss'], "From cause to result."),
          P("Match each term to its meaning", [['otosclerosis', "hardening in the ear"], ['stapedectomy', "removing the stapes"], ['prosthesis', "artificial replacement part"], ['oval window', "opening where the stapes sits"]], "Otosclerosis."),
          B("The suffix ___ means hardening.", ['-sclerosis', '-stenosis', '-ptosis'], 'otosclerosis.'),
          S("Spell the term for abnormal bone locking the stapes", 'otosclerosis', 'ot/o + -sclerosis.', 'otoscl…'),
          N('f2t:hd')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'hd7', title: "Tinnitus and Vertigo", icon: '🔔', items: [
          L("Inner ear signs", `• ${e('<b>tinnitus</b>')}: ringing, buzzing or roaring in the ear<br>• ${e('<b>vertigo</b>')}: a feeling that the room is spinning<br>• ${e('<b>aural fullness</b>')}: a feeling of fullness and pressure in the ear<br>• ${e('motion sickness')}: travel sickness`),
          L("At the bedside", `${pearl("Case Study says: Mr George, 55, has had hearing loss, tinnitus and aural fullness in his left ear for three years.")}${memo("tinnitus comes from the Latin tinnire, to ring; a ringing that only the patient hears.")}`),
          M("A ringing sound in the ear…", ['tinnitus', 'vertigo', 'otalgia', 'otorrhea'], "Tinnitus."),
          M("A feeling that the room is spinning…", ['vertigo', 'tinnitus', 'syncope', 'nystagmus'], "Spinning dizziness."),
          T("aural fullness means a feeling of fullness in the ear.", true, "Ear pressure."),
          O("Put George’s symptoms in the order given in the record", ['hearing loss', 'tinnitus', 'aural fullness'], 'Case Study 8-1.'),
          P("Match each sign to its meaning", [['tinnitus', "ringing in the ears"], ['vertigo', "spinning dizziness"], ['aural fullness', "ear fullness"], ['otalgia', "earache"]], "Signs."),
          B("The everyday name for tinnitus is ___.", ["ringing in the ears", "earache", "dizziness"], "Ringing in the ear."),
          S("Spell the term for ringing in the ears", 'tinnitus', "To ring.", 'tinn…'),
          N('d2t:hd')
        ]
      },
      {
        id: 'hd8', title: "Ménière disease", icon: '🌀', items: [
          L("The Ménière triad", `${fig('meniere-art', [], "Ménière disease")}${e('<b>Meniere disease</b>')}: too much fluid in the labyrinth; attacks of ${e('vertigo')}, ${e('tinnitus')} and fluctuating hearing loss, with ear fullness.`),
          L("treatment", `During an attack: an anti-vertigo drug; long term: a low-salt diet and diuretics. In severe cases: ${e('<b>labyrinthectomy</b>')} (removal of the labyrinth).${memo("Ménière = “three together”: spinning, ringing, hearing loss.")}`),
          M("Which three signs come together in Ménière disease?", ["vertigo, tinnitus and hearing loss", "fever, pain and discharge", "double vision, headache and nausea", "itching, redness and swelling"], "The triad.", null, F('meniere-art', [])),
          M("The cause of Ménière disease…", ["too much fluid in the inner ear", "an infection of the outer ear", "Perforated eardrum", "earwax"], "The labyrinth."),
          T("Ménière attacks last minutes to hours.", true, "Episodic."),
          O("Put a Ménière attack in order", ['aural fullness', 'tinnitus louder', 'vertigo attack', 'recovery'], "The usual pattern."),
          P("Match each treatment to its aim", [['low-salt diet', "reducing fluid"], ['antivertigo drug', "reducing vertigo"], ['labyrinthectomy', "removing the labyrinth"], ['hearing aid', "compensating for hearing loss"]], "Treatment."),
          B("Ménière disease is in the ___ ear.", ["inner", "in the middle", "outer"], "The labyrinth."),
          S("Spell the term for surgical removal of the labyrinth", 'labyrinthectomy', 'labyrinth/o + -ectomy.', 'labyrinthe…'),
          N('t2f:hd')
        ]
      },
      {
        id: 'hd9', title: "Cholesteatoma and Acoustic Neuroma", icon: '⚠️', items: [
          L("Ear masses", `• ${e('<b>cholesteatoma</b>')}: a cyst-like skin mass in the middle ear, often after chronic otitis; it erodes the ossicles<br>• ${e('<b>acoustic neuroma</b>')}: a benign tumour of the eighth nerve; one-sided hearing loss, tinnitus and imbalance`),
          L("At the bedside", `${pearl("The Chart Note says: a 30-year-old woman with chronic otitis developed a cholesteatoma; tubes were placed but the mass grew, and she was admitted for tympanoplasty.")}${pearl("Case Study says: the BAEP test showed no response in Mr George’s left ear, and MRI showed a 1-cm acoustic neuroma.")}`),
          M("Which tumour is on the eighth nerve?", ['acoustic neuroma', 'cholesteatoma', 'retinoblastoma', 'chalazion'], 'neur/o + -oma.'),
          M("Where is a cholesteatoma?", ["middle ear", "cochlea", "auricle", "Eustachian tube"], "A skin mass."),
          T("An acoustic neuroma usually causes one-sided hearing loss.", true, "One nerve."),
          W("Build a word meaning “removal of the mastoid”", ['mastoid/o', '-ectomy'], ['dipl-', '-itis', 'ot/o'], 'mastoidectomy.'),
          P("Match each term to its meaning", [['cholesteatoma', "skin mass of the middle ear"], ['acoustic neuroma', "tumour of the eighth nerve"], ['BAEP', "auditory evoked potential"], ['chronic', "long-lasting"]], "Masses."),
          B("The test that showed no response in George’s left ear was the ___.", ['BAEP', 'Snellen', 'IOP'], "The brainstem response."),
          S("Spell the term for a cyst-like skin mass in the middle ear", 'cholesteatoma', "A middle ear mass.", 'chole…'),
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
    id: 'tx', sym: 'Tx', name: "Diagnosis and Treatment", short: "Diagnosis and Treatment", sub: "Snellen chart, ophthalmoscopy and tonometry, cataract surgery, LASIK, retinal and eyelid surgery, otoscopy, tuning fork tests, audiometry, myringotomy, hearing aids and cochlear implants",
    color: '#17A398', dark: '#0E756C', light: '#DDF5F2',
    levels: ["Eye Examination and Tests", "Eye Surgery and Treatment", "Ear Tests and Treatments"],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'tx1', title: "Snellen Chart and Colour Vision", icon: '🔠', items: [
          L("Snellen", `${fig('snellen-art', [], "Snellen chart")}The ${e('<b>Snellen chart</b>')} measures visual acuity. In the fraction ${e('20/40')}, the top number is the test distance (20 feet) and the bottom number is the distance at which a healthy eye reads the same line. Each eye is tested separately: ${e('OD')}, ${e('OS')} and ${e('OU')}.`),
          L("colour vision", `${fig('snellen', ["Testing with a Snellen chart"], "Snellen chart")}${fig('ishihara', ["An Ishihara test plate"], "Colour blindness test")}A ${e('<b>color vision test</b>')} with dot plates (Ishihara) detects colour blindness; someone with red-green colour blindness cannot see the number.${pearl("Open Hessa’s “Vision meter” tool: enter a Snellen fraction to see the decimal acuity and the grade of vision.")}`),
          M("In 20/40, what is the number 20?", ["the test distance", "the healthy-eye distance", "the percentage of vision", "the line number"], "The numerator.", null, F('snellen-art', [])),
          M("Which vision is better?", ['20/20', '20/40', '20/100', '20/200'], "The smaller denominator.", null, F('snellen', [])),
          T("The Ishihara test is used to detect colour blindness.", true, "Dot plates.", F('ishihara', [])),
          O("Put the lines in order from the top of the chart to the bottom", ['20/200', '20/100', '20/40', '20/20'], "The letters get smaller."),
          P("Match each term to its meaning", [['Snellen chart', "visual acuity chart"], ['color vision test', "colour vision test"], ['visual acuity', "sharpness of vision"], ['OU', "both eyes"]], "Tests."),
          B("20/20 vision means ___ vision.", ["normal", "poor", "blind"], "Acuity of 1."),
          S("Spell the name of the letter chart for testing acuity", 'Snellen', 'Snellen chart.', 'Snel…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: "Eye examination instruments", icon: '🔬', items: [
          L("Three important instruments", `${fig('eye-exam-tools', [], "Eye examination instruments")}• ${e('<b>ophthalmoscopy</b>')}: viewing the retina and optic disc through the pupil<br>• ${e('<b>tonometry</b>')}: measuring the pressure inside the eye (${e('ton/o')} means pressure)<br>• ${e('<b>slit lamp</b>')}: a microscope with a narrow beam for the front of the eye<br>• ${e('<b>fluorescein angiography</b>')}: colour images of the retinal vessels`),
          L("Pupil examination", `${fig('tonometry', ["tonometry"], "tonometry")}${fig('slit-lamp', ["Slit-lamp examination"], "slit lamp")}${e('<b>PERRLA</b>')}: pupils equal, round and reactive to light and accommodation. To see the back of the eye, the pupil is dilated with ${e('<b>mydriatic</b>')} drops.${pearl("The Ophthalmology Consultation says: <bdi dir=\"ltr\">“ophthalmoscopy after application of mydriatic drops”</bdi> showed a cataract in the right eye.")}`),
          M("With which test is the pressure inside the eye measured?", ['tonometry', 'audiometry', 'ophthalmoscopy', 'otoscopy'], 'ton/o + -metry.', null, F('eye-exam-tools', [])),
          M("PERRLA is about which part?", ["pupil", "eyelid", "cornea", "lens"], 'pupils equal, round, reactive.', null, F('slit-lamp', [])),
          T("Mydriatic drops dilate the pupil.", true, "To see the back of the eye.", F('tonometry', [])),
          W("Build a word meaning “viewing inside the eye with an instrument”", ['ophthalm/o', '-scopy'], ['dipl-', '-logy', 'ton/o'], 'ophthalmoscopy.'),
          P("Match each instrument to its job", [['ophthalmoscope', "seeing the retina"], ['tonometer', "measuring eye pressure"], ['slit lamp', "examining the front of the eye"], ['mydriatic', "dilating the pupil"]], "Instruments."),
          B("The abbreviation IVFA means intravenous fluorescein ___.", ['angiography', 'audiometry', 'acuity'], "Images of the vessels."),
          S("Spell the term for measuring pressure inside the eye", 'tonometry', 'ton/o + -metry.', 'tono…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: "Glaucoma Treatment and Eye Drugs", icon: '💧', items: [
          L("Lowering the pressure", `Treating ${e('glaucoma')} by lowering ${e('IOP')}:<br>• drops, including a ${e('<b>miotic</b>')} (pupil-constricting drug)<br>• ${e('<b>trabeculectomy</b>')}: making a new drainage route for the aqueous humour<br>• ${e('<b>iridectomy</b>')}: removing part of the iris to open the angle`),
          L("Reminder", `${vs(['miotic', "pupil-constricting; in glaucoma"], ['mydriatic', "pupil-dilating; for examination"])}${memo("miotic and miosis both begin with mi (less, small).")}`),
          M("In glaucoma, which drug is used on the pupil?", ['miotic', 'mydriatic', 'antibiotic', 'anesthetic'], "A constrictor."),
          M(`${e('<b>iridectomy</b>')} means…`, ["removing part of the iris", "cutting the cornea", "removing the lens", "eyelid repair"], 'irid/o + -ectomy.'),
          T("A trabeculectomy makes a new route to drain the aqueous humour.", true, "Lowering IOP."),
          W("Build a word meaning “removal of the iris”", ['irid/o', '-ectomy'], ['kerat/o', '-plasty', 'phac/o'], 'iridectomy.'),
          P("Match each treatment to its aim", [['miotic', "constricting the pupil"], ['trabeculectomy', "draining aqueous humour"], ['iridectomy', "opening the angle"], ['mydriatic', "dilating for examination"]], "Treatment."),
          B("The aim of all glaucoma treatments is to lower ___.", ['IOP', 'VA', 'dB'], "The pressure inside the eye."),
          S("Spell the term for a pupil-constricting drug", 'miotic', 'mi/o.', 'mio…'),
          N('d2t:tx')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'tx4', title: "Cataract Surgery", icon: '💎', items: [
          L("Phaco and IOL", `${fig('phaco-iol', [], "Phaco and intraocular lens")}${e('<b>phacoemulsification</b>')}: the cloudy lens is broken up with ultrasound waves and suctioned out; then an ${e('<b>intraocular lens (IOL)</b>')} is placed in the capsule.`),
          L("On the figure", `${fig('phaco', ["phacoemulsification"], "Phaco")}${fig('cataract-surgery', ["Position of the artificial lens"], "Cataract Surgery")}${e('ECCE')}: the lens is removed and the back of the capsule remains.${pearl("The Discharge Summary says: for Mrs Serowan, <bdi dir=\"ltr\">“ultrasound was used to destroy the cataract”</bdi> and a prosthetic intraocular lens was inserted; she was discharged the next day.")}`),
          M("In phaco, what breaks up the lens?", ["ultrasound waves", "an excimer laser", "a knife", "cold"], 'ultrasound.', null, F('phaco-iol', [])),
          M("The abbreviation IOL means…", ["intraocular lens", "intraocular pressure", "inflammation of the iris", "contact lens"], 'intraocular lens.', null, F('phaco', [])),
          T("In ECCE the back of the lens capsule remains.", true, 'extracapsular.', F('cataract-surgery', [])),
          W("Build a word meaning “within the eye”", ['intra-', 'ocul/o', '-ar'], ['extra-', 'ophthalm/o', '-ia'], 'intraocular.'),
          P("Match each abbreviation to its meaning", [['IOL', "intraocular lens"], ['ECCE', "extracapsular lens extraction"], ['ICCE', "intracapsular lens extraction"], ['SICS', "small-incision cataract surgery"]], "Abbreviations."),
          B("The root phac/o means ___.", ["lens", "cornea", "retina"], 'phacoemulsification.'),
          S("Spell the term for breaking up a cataract with ultrasound", 'phacoemulsification', 'phac/o + emulsification.', 'phaco…'),
          N('wb:tx')
        ]
      },
      {
        id: 'tx5', title: "LASIK and Corneal Surgery", icon: '✨', items: [
          L("Reshaping the cornea", `${fig('lasik-art', [], "LASIK")}${e('<b>LASIK</b>')}: a thin flap of cornea is lifted, an excimer laser reshapes the tissue beneath and the flap is laid back. For nearsightedness, farsightedness and astigmatism.`),
          L("Other methods", `${fig('lasik', ["LASIK surgery"], "LASIK")}• ${e('<b>photorefractive keratectomy (PRK)</b>')}: the laser removes the surface of the cornea<br>• ${e('<b>radial keratotomy (RK)</b>')}: radial cuts in the cornea<br>• ${e('<b>keratoplasty</b>')}: repair or transplant of the cornea${memo(`${e('kerat/o')} in all of these means cornea. The suffix ${e('-ectomy')} means removal, ${e('-tomy')} means incision and ${e('-plasty')} means repair.`)}`),
          M("Which part of the eye does LASIK change?", ["cornea", "lens", "retina", "iris"], 'cornea.', null, F('lasik-art', [])),
          M("Corneal transplant…", ['keratoplasty', 'keratotomy', 'keratectomy', 'keratitis'], "-plasty means repair.", null, F('lasik', [])),
          T("RK corrects nearsightedness with radial cuts in the cornea.", true, 'radial keratotomy.'),
          O("Put the steps of LASIK in order", ['corneal flap', 'excimer laser', 'flap replaced'], "The three steps."),
          P("Match each method to its job", [['LASIK', "laser beneath the corneal flap"], ['PRK', "laser on the corneal surface"], ['RK', "radial cuts"], ['keratoplasty', "corneal transplant"]], "The cornea."),
          B("Incision of the cornea is ___.", ['keratotomy', 'keratectomy', 'keratoplasty'], "-tomy means incision."),
          S("Spell the term for a corneal transplant", 'keratoplasty', 'kerat/o + -plasty.', 'kerato…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx6', title: "Retina, Eyelid and Tear Surgery", icon: '🩹', items: [
          L("retina", `${fig('scleral-buckle', ["Scleral buckle for retinal detachment"], "scleral buckle")}• ${e('<b>scleral buckling</b>')}: a silicone band around the sclera so the retina reattaches<br>• ${e('<b>vitrectomy</b>')}: removing the vitreous<br>• ${e('<b>enucleation</b>')}: complete removal of the eyeball, e.g. in retinoblastoma`),
          L("Eyelid and tears", `• ${e('<b>blepharoplasty</b>')}: eyelid surgery, e.g. for a drooping lid<br>• ${e('<b>dacryocystorhinostomy</b>')}: a new passage between the tear sac and the nose<br>• ${e('<b>eye patching</b>')}: a patch over the healthy eye in lazy eye${pearl("A clinical scenario: blepharoplasty was planned for Mr Smith’s drooping eyelids, which were blocking his vision.")}`),
          M("Treating retinal detachment with a band around the sclera…", ['scleral buckling', 'vitrectomy', 'keratoplasty', 'iridectomy'], "A buckle.", null, F('scleral-buckle', [])),
          M(`${e('<b>enucleation</b>')} means…`, ["complete removal of the eyeball", "removing the lens", "removal of the eyelid", "removal of the vitreous"], "Removal."),
          T("blepharoplasty means reconstructive surgery of the eyelid.", true, 'blephar/o + -plasty.'),
          W("Build a word meaning “repair of the eyelid”", ['blephar/o', '-plasty'], ['dipl-', '-ptosis', 'dacry/o'], 'blepharoplasty.'),
          P("Match each operation to its aim", [['scleral buckling', "retinal detachment"], ['vitrectomy', "removal of the vitreous"], ['dacryocystorhinostomy', "draining tears to the nose"], ['eye patching', "lazy eye"]], "The operations."),
          B("Removal of the vitreous is ___.", ['vitrectomy', 'vasectomy', 'iridectomy'], 'vitre/o + -ectomy.'),
          S("Spell the term for plastic surgery of the eyelid", 'blepharoplasty', 'blephar/o + -plasty.', 'blepharo…'),
          N('f2t:tx')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'tx7', title: "Ear Examination and Tuning Forks", icon: '🎵', items: [
          L("otoscopy", `${fig('otoscope', ["otoscope"], "otoscope")}${e('<b>otoscopy</b>')}: viewing the canal and eardrum with an ${e('<b>otoscope</b>')} (light and lens). ${e('<b>tympanometry</b>')}: measuring the movement of the eardrum; it shows middle ear fluid.`),
          L("Rinne and Weber", `${fig('tuning-fork-art', [], "Tuning fork tests")}${fig('rinne-weber', ["Rinne and Weber tests"], "Rinne and Weber")}The ${e('<b>Rinne test</b>')} compares air and bone conduction, and the ${e('<b>Weber test</b>')} places the tuning fork on the middle of the head. Both are done with a ${e('tuning fork')}.`),
          M("The instrument for viewing the eardrum…", ['otoscope', 'ophthalmoscope', 'audiometer', 'tonometer'], 'ot/o + -scope.', null, F('otoscope', [])),
          M("In conductive hearing loss, what does the Rinne test show?", ['BC > AC', 'AC > BC', "both zero", "AC = BC always"], "Bone is better.", null, F('tuning-fork-art', [])),
          T("In the Weber test with conductive hearing loss, the sound is heard louder in the affected ear.", true, "Lateralises to the affected ear.", F('rinne-weber', [])),
          W("Build a word meaning “measuring the eardrum”", ['tympan/o', '-metry'], ['ot/o', '-scope', 'audi/o'], 'tympanometry.'),
          P("Match each test to its job", [['otoscopy', "seeing the eardrum"], ['tympanometry', "eardrum movement"], ['Rinne test', "comparing AC and BC"], ['Weber test', "tuning fork on the head"]], "Tests."),
          B("The instrument for the Rinne and Weber tests is a ___ fork.", ['tuning', 'sound', 'hearing'], "A tuning fork."),
          S("Spell the term for examining the ear with a lighted instrument", 'otoscopy', 'ot/o + -scopy.', 'otos…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx8', title: "Audiometry", icon: '🎧', items: [
          L("audiogram", `${fig('audiogram-art', [], "audiogram")}${e('<b>audiometry</b>')} uses an ${e('<b>audiometer</b>')} to measure the hearing threshold at each frequency (Hz) in decibels (dB HL); the result is plotted on an ${e('<b>audiogram</b>')}: O for the right ear and X for the left.`),
          L("Nerve tests", `${fig('audiometry', ["Audiometry in a child"], "Audiometry")}• ${e('<b>auditory brainstem response</b>')}: the response of the hearing nerve pathway to sound; also called ${e('ABR')} and ${e('BAEP')}<br>• ${e('electronystagmography (ENG)')}: a balance test${pearl("Case Study says: George’s pure-tone test showed normal hearing in the right ear and moderate sensorineural hearing loss in the left.")}`),
          M("On an audiogram, X is the symbol for which ear?", ["left ear", "right ear", "both", "neither"], "O right, X left.", null, F('audiogram-art', [])),
          M("The instrument for audiometry…", ['audiometer', 'otoscope', 'tonometer', 'tuning fork'], 'audi/o + -meter.', null, F('audiometry', [])),
          T("An audiogram is a graph of hearing at different frequencies.", true, 'audi/o + -gram.'),
          W("Build a word meaning “record of hearing”", ['audi/o', '-gram'], ['dipl-', '-logy', 'ot/o'], 'audiogram.'),
          P("Match each term to its meaning", [['audiometry', "measuring hearing"], ['audiometer', "measuring device"], ['audiogram', "chart of the result"], ['ABR', "brainstem response"]], "Audiometry."),
          B("A hearing threshold of 45 dB means ___ hearing loss.", ["moderate", "normal", "deep"], "Between 41 and 55."),
          S("Spell the term for measuring hearing", 'audiometry', 'audi/o + -metry.', 'audiom…'),
          N('wb:tx')
        ]
      },
      {
        id: 'tx9', title: "Ear Surgery, Hearing Aids and Cochlear Implants", icon: '🦻', items: [
          L("Operations", `${fig('myringotomy-art', [], "Myringotomy")}${fig('pe-tube', ["Position of the ventilation tube"], "PE tube")}• ${e('<b>myringotomy</b>')}: cutting the eardrum to drain fluid; often with a ${e('<b>PE tube</b>')}<br>• ${e('<b>tympanoplasty</b>')}: repairing the eardrum and ossicles<br>• ${e('<b>stapedectomy</b>')}, ${e('<b>mastoidectomy</b>')}, ${e('otoplasty')} (surgery of the ear flap)<br>• ${e('ear irrigation')}: washing out earwax`),
          L("Hearing aids and implants", `${fig('hearing-devices', [], "Hearing aid and cochlear implant")}${fig('cochlear-implant', ["A child with a cochlear implant"], "cochlear implant")}${fig('ear-irrigation', ["ear irrigation"], "ear irrigation")}${fig('sign-language', ["Talking in sign language"], "Sign language")}A ${e('<b>hearing aid</b>')} makes sound louder; a ${e('<b>cochlear implant</b>')} stimulates the auditory nerve directly with an electrode in the cochlea.${pearl("The Operative Report says: <bdi dir=\"ltr\">“bilateral myringotomy with tube insertion”</bdi> was performed for recurrent otitis media.")}`),
          M("Cutting the eardrum to drain fluid…", ['myringotomy', 'tympanoplasty', 'mastoidectomy', 'otoplasty'], 'myring/o + -tomy.', null, F('myringotomy-art', [])),
          M("Which device is for profound sensorineural deafness?", ['cochlear implant', 'hearing aid', 'PE tube', 'earplug'], "A cochlear implant.", null, F('cochlear-implant', [])),
          T("A PE tube equalises middle ear pressure and drains fluid.", true, 'pressure-equalizing.', F('pe-tube', [])),
          W("Build a word meaning “incision of the eardrum”", ['myring/o', '-tomy'], ['tympan/o', '-plasty', 'staped/o'], 'myringotomy.'),
          P("Match each procedure to its aim", [['tympanoplasty', "repairing the eardrum"], ['stapedectomy', "treating otosclerosis"], ['mastoidectomy', "removing the mastoid"], ['ear irrigation', "washing out wax"]], "The operations."),
          B("The abbreviation ASL means American Sign ___.", ['Language', 'Level', 'Lens'], "Sign language."),
          S("Spell the term for surgical repair of the eardrum", ['tympanoplasty', 'myringoplasty'], 'tympan/o + -plasty.', 'tympano…'),
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
    { id: 'lx-0', w: 'lx', lv: 0, name: "Winky", title: "The Curious Little Globe", shape: 'eyeball', color: '#FBFDFF', acc: ['sparkle'], bio: "A happy eyeball who sees everything; ophthalm/o and ocul/o are his names." },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Rooty", title: "Master of ot/o and ophthalm/o", shape: 'book', color: '#1E88A8', acc: ['glasses'], bio: "A living dictionary that breaks every eye and ear word into root, prefix and suffix and never mixes up -opia and -acusis." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Puzzly", title: "King of Prefixes and Suffixes", shape: 'puzzle', color: '#13627A', acc: ['crown'], bio: "Puts dipl-, presby- and eso- beside -opia, -tropia and -cusis and builds new words." },
    { id: 'ey-0', w: 'ey', lv: 0, name: "Tearly", title: "The Eye Surface Washer", shape: 'drop', color: '#9FD6EE', acc: ['sparkle'], bio: "Comes from the lacrimal gland, washes the surface of the eye and flows down the nasolacrimal duct to the nose; dacry/o and lacrim/o are her names." },
    { id: 'ey-1', w: 'ey', lv: 1, name: "Lensy", title: "The Light Focuser", shape: 'lens', color: '#CFE9F7', acc: ['glasses'], bio: "Sits behind the pupil and, with the help of the ciliary muscle, changes shape for far and near vision (accommodation)." },
    { id: 'ey-2', w: 'ey', lv: 2, name: "Coney", title: "The Colour Receptor", shape: 'cone', color: '#E88A6A', acc: ['crown'], bio: "Lives in the fovea of the retina and creates colour and sharp vision; her friend the rod works in dim light." },
    { id: 'vd-0', w: 'vd', lv: 0, name: "Specs", title: "The Myopia Corrector", shape: 'eyeball', color: '#EAF4FB', acc: ['glasses'], bio: "Knows the concave lens for myopia and the convex lens for hyperopia, and measures dioptres." },
    { id: 'vd-1', w: 'vd', lv: 1, name: "Misty", title: "The Cataract Reminder", shape: 'cloud', color: '#D9D4C7', acc: ['sparkle'], bio: "Shows how a cloudy lens blurs vision; with phaco and an IOL it becomes clear again." },
    { id: 'vd-2', w: 'vd', lv: 2, name: "Visor", title: "Guardian of the Optic Nerve", shape: 'shield', color: '#8E6BD8', acc: ['crown'], bio: "Watches the pressure inside the eye so glaucoma cannot damage the optic nerve, and protects the retina from detachment." },
    { id: 'er-0', w: 'er', lv: 0, name: "Pinna", title: "The Sound Catcher", shape: 'ear', color: '#F6D2B8', acc: ['sparkle'], bio: "Collects sound waves and sends them down the ear canal; auricle and pinna are her names." },
    { id: 'er-1', w: 'er', lv: 1, name: "Snaily", title: "The Hair Cell Musician", shape: 'snail', color: '#9FD6EE', acc: ['glasses'], bio: "The cochlea of the ear; the organ of Corti inside turns fluid vibration into a nerve message for the eighth nerve." },
    { id: 'er-2', w: 'er', lv: 2, name: "Drummy", title: "The Resonant Eardrum", shape: 'drum', color: '#E8913A', acc: ['crown'], bio: "Vibrates with every sound and passes the vibration to the malleus, incus and stapes; myring/o and tympan/o are his names." },
    { id: 'hd-0', w: 'hd', lv: 0, name: "Jingle", title: "The Ringing Sound", shape: 'bell', color: '#F2C94C', acc: ['sparkle'], bio: "A bell that rings only in the patient’s ear: tinnitus; with vertigo and hearing loss, it is a sign of Ménière disease." },
    { id: 'hd-1', w: 'hd', lv: 1, name: "Plugsy", title: "The Noise Protector", shape: 'capsule', color: '#F07A5E', acc: ['glasses'], bio: "Comes to help above 85 decibels so that noise-induced hearing loss does not develop." },
    { id: 'hd-2', w: 'hd', lv: 2, name: "Anti", title: "The Otitis Hunter", shape: 'yab', color: '#D9534F', acc: ['crown'], bio: "Fights middle ear germs and knows why children’s short Eustachian tube makes otitis more common." },
    { id: 'tx-0', w: 'tx', lv: 0, name: "Snelly", title: "visual acuity chart", shape: 'chart', color: '#FFFFFF', acc: ['sparkle'], bio: "Shows everything from the big E to the 20/20 line and tells the vision fraction of each eye." },
    { id: 'tx-1', w: 'tx', lv: 1, name: "Audio", title: "The Precise Hearing Meter", shape: 'meter', color: '#17A398', acc: ['glasses'], bio: "Measures the hearing threshold at each frequency in decibels and plots it on the audiogram." },
    { id: 'tx-2', w: 'tx', lv: 2, name: "Scripty", title: "Master of the Eye and Ear Record", shape: 'clipboard', color: '#13627A', acc: ['cape', 'crown'], bio: "Reads OD, OS, AU, IOP, PERRLA and PE tube at a glance and stays with the patient from examination to surgery." }
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
      id: 'r1', w: 'lx', title: "Three terms in one record", who: "Kelly Post, a 68-year-old woman",
      brief: "You are reviewing the record of Mrs Kelly Post, who has just left the clinic. The doctor has written three conditions: oculodynia, mastoiditis and conjunctivitis. You need to explain each of them to the patient in plain language.",
      chart: [['Age', '68'], ['Dx 1', 'oculodynia'], ['Dx 2', 'mastoiditis'], ['Dx 3', 'conjunctivitis']],
      fig: { a: 'wordparts', l: [] },
      steps: [
        P("Term", "Match each term to its meaning", [['oculodynia', "eye pain"], ['mastoiditis', "inflammation of the bone behind the ear"], ['conjunctivitis', "pinkeye"], ['otalgia', "earache"]], "A clinical scenario."),
        M("suffix", "The suffix -dynia means…", ["pain", "inflammation", "secrete", "drooping"], 'oculodynia.'),
        M("Site", "Where is the mastoid process?", ["behind the ear in the temporal bone", "below the eye", "in the throat", "inside the cochlea"], 'mastoid process.', null, { a: ['root-map-ear'], l: [] }),
        T("Common name", "Conjunctivitis is the same as “pinkeye”.", true, "Inflammation of the conjunctiva."),
        P("root", "Match each root to its organ", [['ocul/o', "eye"], ['mastoid/o', "mastoid"], ['conjunctiv/o', "conjunctiva"], ['ot/o', "ear"]], "The roots."),
        S("Spelling", "Write the medical term for pinkeye", 'conjunctivitis', 'conjunctiv/o + -itis.', 'conj…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: "A head and face examination note", who: "HEENT clinic note",
      brief: "An outpatient’s record contains this note: <bdi dir=\"ltr\">“HEENT: PERRLA, EOM intact. VA OD 20/20, OS 20/40 sc. IOP normal OU. TM intact AU; no otorrhea.”</bdi> A new student asks you to write out the abbreviations in full.",
      chart: [['Eyes', 'PERRLA, EOM intact'], ['VA', 'OD 20/20, OS 20/40 sc'], ['IOP', 'normal OU'], ['Ears', 'TM intact AU; no otorrhea']],
      fig: { a: 'od-os-ou', l: [] },
      steps: [
        P("abbreviation", "Match each abbreviation to its meaning", [['OD', "right eye"], ['OS', "left eye"], ['OU', "both eyes"], ['AU', "both ears"]], "Right and left."),
        M("abbreviation", "PERRLA means…", ["pupils equal, round and reactive to light and accommodation", "normal eye pressure", "full eye movements", "normal vision"], "Pupil examination."),
        M("abbreviation", "sc in <bdi dir=\"ltr\">“OS 20/40 sc”</bdi> means…", ["without glasses or contact lenses", "with glasses", "with drops", "after surgery"], 'sine correction.'),
        T("abbreviation", "EOM intact means the extraocular muscle movements are full.", true, 'extraocular movements.', { a: ['eye-muscles'], l: [] }),
        P("abbreviation", "Match each ear and eye abbreviation to its meaning", [['TM', "eardrum"], ['IOP', "intraocular pressure"], ['VA', "visual acuity"], ['HEENT', "head, eyes, ears, nose and throat"]], "The note."),
        S("Spelling", "Write the term for fluid draining from the ear", 'otorrhea', 'ot/o + -rrhea.', 'oto…')
      ]
    },
    {
      id: 'r3', w: 'lx', title: "When nothing smells", who: "A hypothetical patient (a clinical scenario)",
      brief: "The standard reference’s scenario asks you: “You have lost your sense of smell; how does this affect your daily life?” The patient says they cannot smell food or smoke and that food has become tasteless.",
      chart: [['CC', 'loss of smell'], ['Associated', 'food tastes bland'], ['Risk', 'cannot smell smoke or gas']],
      fig: { a: 'senses-overview', l: [] },
      steps: [
        M("Term", "The medical term for “loss of smell”…", ['anosmia', 'ageusia', 'anacusis', 'aphasia'], 'an- + osm/o + -ia.'),
        M("Term", "Why has food become tasteless?", ["smell is a large part of the sense of flavour", "taste is always lost", "the ear is damaged", "the eye has weakened"], "Smell and taste work together."),
        T("danger", "Someone with anosmia may not smell smoke or gas.", true, "A safety risk.", { a: ['sense-organs'], l: [] }),
        P("sensation", "Match each sense to its medical term", [["smell", 'olfaction'], ["taste", 'gustation'], ["hearing", 'audition'], ["balance", 'equilibrium']], "The five senses."),
        M("root", "The root olfact/o means…", ["smell", "taste", "sound", "light"], 'olfaction.'),
        S("Spelling", "Spell the term for loss of taste", 'ageusia', 'a- + geus/o + -ia.', 'ageu…')
      ]
    },
    /* ================= چشم ================= */
    {
      id: 'r4', w: 'ey', title: "An eye that turns inwards", who: "Kelly, a 7-year-old girl",
      brief: "The Case Study says: Kelly, who has just been adopted, has come to see Dr McLaren (a paediatrician); her family are worried because one of her eyes seems to turn inwards and she has fallen behind at school. The ophthalmologist saw that the left eye turned towards the medial canthus.",
      chart: [['Age', '7 y/o'], ['CC', 'one eye deviates inward'], ['Exam', 'L eye deviates toward medial canthus'], ['Referral', 'ophthalmologist']],
      fig: { a: 'strabismus-art', l: [] },
      steps: [
        M("Anatomy", "Where is the medial canthus?", ["the inner corner of the eye, on the nose side", "outer corner of the eye", "the middle of the upper eyelid", "the back of the eyeball"], "canthus means corner.", null, { a: ['eye-front'], l: [] }),
        M("Term", "Turning of the eye inwards…", ['esotropia', 'exotropia', 'nystagmus', 'ptosis'], "eso- means inwards."),
        M("specialist", "To which specialist was Kelly referred?", ['ophthalmologist', 'optician', 'audiologist', 'otologist'], "An ophthalmologist."),
        T("muscle", "The medial rectus muscle turns the eye towards the nose.", true, "medial means towards the middle.", { a: ['eye-muscles'], l: [] }),
        P("Term", "Match each term to its meaning", [['strabismus', "misalignment of the eyes"], ['medial canthus', "inner corner of the eye"], ['pediatrician', "paediatrician"], ['extraocular muscles', "six muscles that move the eye"]], 'Case Study.'),
        S("Spelling", "Spell the term for the corner of the eye", 'canthus', "A corner.", 'cant…')
      ]
    },
    {
      id: 'r5', w: 'ey', title: "Eyelids that block the view", who: "Mr Smith",
      brief: "A clinical scenario: while examining Mr Smith, the doctor asks the medical assistant to schedule surgery for his drooping eyelids, which are blocking his vision. The assistant must write the name of the condition and the operation correctly.",
      chart: [['CC', 'droopy upper eyelids'], ['Exam', 'lids obstruct visual field'], ['Plan', 'surgical repair of eyelids']],
      fig: { a: 'lid-disorders', l: [] },
      steps: [
        M("Term", "Drooping of the upper eyelid…", ['blepharoptosis', 'blepharitis', 'ectropion', 'chalazion'], 'blephar/o + -ptosis.'),
        M("surgery", "The operation that was scheduled…", ['blepharoplasty', 'blepharotomy', 'keratoplasty', 'iridectomy'], 'blephar/o + -plasty.'),
        P("Anatomy", "Match each part to its meaning", [['eyelid', "lid that closes the eye"], ['palpebra', "Latin name for eyelid"], ['eyelashes', "hairs on the lid margin"], ['eyebrow', "hair above the eye"]], "Protectors."),
        T("Field", "A drooping eyelid can cover the upper part of the visual field.", true, 'visual field.', { a: ['eye-accessory'], l: [] }),
        M("suffix", "The suffix -ptosis means…", ["drooping", "repair", "incision", "inflammation"], 'blepharoptosis.'),
        S("Spelling", "Spell the term for a drooping eyelid", 'blepharoptosis', 'blephar/o + -ptosis.', 'blepharop…')
      ]
    },
    {
      id: 'r6', w: 'ey', title: "Health class: how do we see?", who: "Sixth-grade pupils",
      brief: "A clinical scenario: you are to explain to a sixth-grade class how we see, from light entering the eye to the message reaching the brain.",
      chart: [['Topic', 'how sight occurs'], ['Key terms', 'cornea, lens, retina, optic nerve'], ['Brain', 'visual cortex']],
      fig: { a: 'visual-pathway', l: [] },
      steps: [
        O("Path", "Put the path of light in order", ['cornea', 'pupil', 'lens', 'retina', 'optic nerve'], "From front to back."),
        M("receptor", "Which receptors work in dim light?", ['rods', 'cones', 'fovea', 'iris'], "The rods.", null, { a: ['retina-fundus'], l: [] }),
        M("brain", "In which lobe is the visual message interpreted?", ["back of the head", "temporal", "The forehead", "parietal"], 'occipital.'),
        T("image", "The image on the retina is upside down.", true, "The brain corrects it.", { a: ['accommodation-art'], l: [] }),
        P("Job", "Match each part to its job", [['cornea', "bends light the most"], ['iris', "adjusting the pupil"], ['lens', "fine focusing"], ['retina', "light receptor"]], "The eye."),
        S("Spelling", "Complete the spelling of the nerve of sight: optic …", 'optic nerve', 'CN II.', 'optic n…')
      ]
    },
    /* ================= بیماری‌های چشم ================= */
    {
      id: 'r7', w: 'vd', title: "A curtain over the right eye", who: "A 79-year-old woman",
      brief: "The Ophthalmology Consultation says: over the past year the 79-year-old patient has had gradually decreasing vision and photophobia, mostly in the right eye, and says it is as if there is a curtain over her right eye. She has worn glasses for hyperopia all her life. Her intraocular pressure is normal. Ophthalmoscopy after mydriatic drops showed a large cataract in the right eye. Recommendation: phacoemulsification and an artificial lens.",
      chart: [['CC', 'progressive loss of vision OD, photophobia'], ['Hx', 'hyperopia, corrective lenses'], ['Exam', 'IOP normal; large opaque cataract OD'], ['Plan', 'phacoemulsification + prosthetic lens']],
      fig: { a: 'cataract-art', l: [] },
      steps: [
        P("Term", "Match each term to its meaning", [['photophobia', "sensitivity to light"], ['hyperopia', "farsightedness"], ['mydriatic', "pupil dilator"], ['cataract', "clouding of the lens"]], 'Per standard references.'),
        M("examination", "Why were mydriatic drops put in before ophthalmoscopy?", ["to dilate the pupil so the back of the eye could be seen", "to lower the eye pressure", "to reduce pain", "to treat an infection"], "Pupil dilation.", null, { a: ['eye-exam-tools'], l: [] }),
        T("Ruling out", "The intraocular pressure was normal, so glaucoma is not suspected.", true, 'IOP normal.'),
        M("treatment", "What does phacoemulsification do?", ["it breaks up the cloudy lens with ultrasound and removes it", "it reshapes the cornea with a laser", "it reattaches the retina", "it repairs the eyelid"], "phac/o means lens.", null, { a: ['phaco-iol'], l: [] }),
        M("Ruling out", "Which conditions does the report say are absent?", ["retinopathy, macular degeneration and keratitis", 'cataract', 'hyperopia', 'photophobia'], 'no evidence of.'),
        S("Spelling", "Write the term for her clouded lens", 'cataract', "Clouding of the lens.", 'cata…')
      ]
    },
    {
      id: 'r8', w: 'vd', title: "A red bump on the eyelid", who: 'Julie Halbritter',
      brief: "A clinical scenario: as a nurse you are taking the details of a new patient, Mrs Halbritter. She has a red bump on her eyelid, and her left eye is red and inflamed, with excessive tearing and frequent blinking. Write the signs in medical terms.",
      chart: [['Sx 1', 'reddened lump on eyelid'], ['Sx 2', 'reddened, inflamed left eye'], ['Sx 3', 'excessive tearing and blinking']],
      fig: { a: 'eye-infections', l: [] },
      steps: [
        M("Term", "“A red bump on the eyelid” in medical terms…", ['hordeolum', 'chalazion', 'cataract', 'ectropion'], "A stye.", null, { a: ['hordeolum'], l: [] }),
        M("Term", "“A red, inflamed eye”…", ['conjunctivitis', 'keratitis', 'glaucoma', 'uveitis'], "Inflammation of the conjunctiva."),
        M("abbreviation", "How do you write “left eye”?", ['OS', 'OD', 'OU', 'AS'], 'oculus sinister.'),
        T("Term", "Excessive tearing is written dacryorrhea or epiphora.", true, 'dacry/o + -rrhea.'),
        P("Term", "Match each sign to its medical term", [['lump on eyelid', 'hordeolum'], ['red, inflamed eye', 'conjunctivitis'], ['excessive tearing', 'dacryorrhea'], ['inflamed eyelid edge', 'blepharitis']], "A clinical scenario."),
        S("Spelling", "Write the scientific term for the red bump on her eyelid", 'hordeolum', 'sty.', 'hord…')
      ]
    },
    {
      id: 'r9', w: 'vd', title: "IOP or IOL?", who: "A glaucoma patient",
      brief: "A clinical scenario: a patient has seen both IOP and IOL on their form and asks what the difference is. The ophthalmologist said their eye pressure is high and they must use drops, and years later may need a lens for a cataract.",
      chart: [['Dx', 'glaucoma; elevated IOP'], ['Plan', 'eye drops; monitor optic disc'], ['Future', 'possible cataract surgery with IOL']],
      fig: { a: 'glaucoma-art', l: [] },
      steps: [
        P("abbreviation", "Match each abbreviation to its meaning", [['IOP', "intraocular pressure"], ['IOL', "intraocular lens"], ['VA', "visual acuity"], ['VF', "visual field"]], "A clinical scenario."),
        M("disease", "High IOP goes with which disease?", ['glaucoma', 'cataract', 'myopia', 'conjunctivitis'], "Glaucoma."),
        M("damage", "Which part does untreated glaucoma damage?", ["optic nerve", "lens", "cornea", "eyelid"], 'optic nerve.'),
        T("Test", "Intraocular pressure is measured with tonometry.", true, 'ton/o + -metry.', { a: ['tonometry'], l: [] }),
        M("Vision", "Which vision does glaucoma take first?", ["peripheral (tunnel vision)", "central", "coloured", "at night"], 'tunnel vision.', null, { a: ['field-defects'], l: [] }),
        S("Spelling", "Write the term for the disease of raised eye pressure", 'glaucoma', 'glauc/o + -oma.', 'glau…')
      ]
    },
    /* ================= گوش ================= */
    {
      id: 'r10', w: 'er', title: "Earplugs at the factory", who: "Mr Bob Noel, a factory worker",
      brief: "A clinical scenario: Mr Noel works in a factory and his employer has asked him to wear earplugs. He does not know why; you need to explain what loud noise does to the ear.",
      chart: [['Job', 'factory worker'], ['Exposure', 'loud machinery, many hours a day'], ['Advice', 'ear plugs']],
      fig: { a: 'decibel-scale', l: [] },
      steps: [
        M("unit", "In what unit is loudness measured?", ['decibel', 'hertz', 'diopter', 'gram'], 'dB.'),
        M("threshold", "Above how many decibels is long-term sound dangerous?", ["85", "30", "50", "10"], "Heavy traffic."),
        M("damage", "Which cells does loud noise damage?", ["the hair cells of the cochlea", "the rods of the retina", "skin cells", "earwax glands"], 'hair cells.', null, { a: ['cochlea-corti'], l: [] }),
        T("Type", "Noise-induced hearing loss is sensorineural.", true, "Cochlear damage."),
        O("Path", "Put the path of sound up to the damage in order", ['loud sound', 'ear canal', 'middle ear', 'cochlea hair cells damaged'], "Sound to the cochlea."),
        S("Spelling", "Write the unit used to measure loudness", 'decibel', 'dB.', 'deci…')
      ]
    },
    {
      id: 'r11', w: 'er', title: "A hearing test report", who: "George, a 55-year-old man",
      brief: "Case Study says: for three years Mr George’s hearing in his left ear has decreased, and he has tinnitus and a feeling of fullness in the ear. Pure tone: right ear normal and left ear moderate sensorineural hearing loss. The contralateral and ipsilateral acoustic reflexes were absent in the left ear. BAEP was normal in the right ear and showed no response in the left.",
      chart: [['CC', 'decreased hearing AS, 3 years'], ['Sx', 'tinnitus, aural fullness'], ['Audiometry', 'moderate SNHL AS; AD normal'], ['BAEP', 'no response AS']],
      fig: { a: 'audiogram-art', l: [] },
      steps: [
        M("abbreviation", "AS means…", ["left ear", "right ear", "both ears", "left eye"], 'auris sinistra.'),
        M("Term", "ipsilateral means…", ["on the same side", "on the opposite side", "on both sides", "in the middle"], "ipsi- means same."),
        P("Term", "Match each term to its meaning", [['contralateral', "on the opposite side"], ['tinnitus', "ringing in the ear"], ['aural fullness', "ear fullness"], ['audiology', "study of hearing"]], 'Case Study 8-1.'),
        M("Test", "What does BAEP measure?", ["the response of the hearing nerve pathway in the brainstem", "eye pressure", "eardrum movement", "visual acuity"], 'brainstem auditory evoked potentials.'),
        T("frequency", "Hz is the unit of sound frequency.", true, "Hertz.", { a: ['audiometry'], l: [] }),
        S("Spelling", "Spell the term for the study of hearing", 'audiology', 'audi/o + -logy.', 'audio…')
      ]
    },
    {
      id: 'r12', w: 'er', title: "Translating a note into medical language", who: "An 8-year-old girl",
      brief: "The Chart Note Transcription (Central General Hospital) says: the paediatrician sent an 8-year-old girl to an “ear, nose and throat specialist” for a “chronic infection of the left middle ear”. “Visual examination of the ear canal and eardrum in both ears” showed the “membrane between the ear canal and middle ear” was healthy on the right and bulging on the left; there was a lot of “earwax”. “Measurement of eardrum movement” showed fluid in the left middle ear.",
      chart: [['Referral', 'ENT specialist'], ['Dx', 'chronic left middle ear infection'], ['Tests', 'visual exam of ear; eardrum movement test; hearing tests'], ['Plan', 'left eardrum incision + PE tube']],
      fig: { a: 'ear-section', l: [] },
      steps: [
        P("Translation", "Match each phrase to its medical term", [['specialist in ears, nose and throat', 'otorhinolaryngologist'], ['middle ear infection', 'otitis media'], ['both ears', 'AU'], ['earwax', 'cerumen']], 'Per standard references.'),
        M("Translation", "“Visual examination of the ear canal and eardrum” means…", ['otoscopy', 'audiometry', 'tympanometry', 'ophthalmoscopy'], 'ot/o + -scopy.', null, { a: ['otoscope'], l: [] }),
        M("Translation", "“The membrane between the ear canal and middle ear”…", ['tympanic membrane', 'oval window', 'cochlea', 'auricle'], "The eardrum."),
        M("Translation", "“Measurement of eardrum movement”…", ['tympanometry', 'audiometry', 'otoscopy', 'tonometry'], 'tympan/o + -metry.'),
        T("treatment", "“Incision of the eardrum” is myringotomy.", true, 'myring/o + -tomy.', { a: ['myringotomy-art'], l: [] }),
        S("Spelling", "Write the medical term for the earwax in this report", 'cerumen', 'earwax.', 'ceru…')
      ]
    },
    /* ================= بیماری‌های گوش ================= */
    {
      id: 'r13', w: 'hd', title: "A musician who cannot hear", who: "A 35-year-old man, a musician",
      brief: "The Case Study says: a 35-year-old musician at the EENT clinic complains of progressive hearing loss over the past 15 years; he cannot follow speech in noisy places. He has played loud instruments for 20 years without earplugs. Otoscopy and tympanometry were normal, and audiometry showed hearing loss in both ears. Rinne and Weber tests confirmed moderate hearing loss. He was referred for a hearing aid.",
      chart: [['CC', 'progressive hearing loss, 15 years'], ['Hx', 'amplified music, no earplugs'], ['Tests', 'otoscopy, tympanometry normal; audiometry ↓ bilaterally; Rinne, Weber'], ['Plan', 'hearing aid evaluation']],
      fig: { a: 'hearing-loss-types', l: [] },
      steps: [
        M("abbreviation", "EENT means…", ["eyes, ears, nose and throat", "ear only", "emergency department", "eye and nerve"], 'eyes, ears, nose and throat.'),
        P("Test", "Match each test to its job", [['otoscopy', "seeing the eardrum"], ['tympanometry', "eardrum movement"], ['audiometry', "measuring hearing"], ['Rinne test', "comparing AC and BC"]], "Tests."),
        M("Cause", "The likely cause of his hearing loss…", ["loud, prolonged noise", "an ear infection", "earwax", "head injury"], 'noise exposure.'),
        T("on both sides", "bilaterally means in both ears.", true, "bi- means two.", { a: ['tuning-fork-art'], l: [] }),
        M("treatment", "Which device was recommended for him?", ['hearing aid', 'cochlear implant', 'PE tube', 'earplug'], "A hearing aid.", null, { a: ['hearing-devices'], l: [] }),
        S("Spelling", "Write the term for the hearing test that showed loss in both ears", 'audiometry', 'audi/o + -metry.', 'audiom…')
      ]
    },
    {
      id: 'r14', w: 'hd', title: "A mass that keeps growing", who: "A 30-year-old woman",
      brief: "The Chart Note says: this 30-year-old woman was seen by an ENT specialist for mucoserous otitis media on the right. In hospital she developed a cholesteatoma. Tubes were placed for chronic adhesive otitis media with secondary cholesteatoma; she improved after the operation, but the mass is growing. She is now admitted for a right tympanoplasty under general anaesthesia.",
      chart: [['Dx', 'mucoserous otitis media, right'], ['Complication', 'cholesteatoma'], ['Hx', 'tube for chronic adhesive OM'], ['Plan', 'right tympanoplasty, general anesthesia']],
      fig: { a: 'otitis-media-art', l: [] },
      steps: [
        P("Term", "Match each term to its meaning", [['chronic', "long-lasting"], ['mucoserous', "mucous and serous"], ['tympanoplasty', "repairing the eardrum"], ['postoperatively', "after surgery"]], 'Chart Note Analysis.'),
        M("lump", "What is a cholesteatoma?", ["a cyst-like skin mass in the middle ear", "tumour of the eighth nerve", "earwax", "pus of the outer ear"], "A complication of chronic otitis."),
        M("abbreviation", "ENT means…", ["ear, nose and throat", "Eye and ear", "emergency department", "neurology"], 'ears, nose and throat.'),
        T("surgery", "tympanoplasty means repair of the eardrum (and sometimes the ossicles).", true, 'tympan/o + -plasty.', { a: ['pe-tube'], l: [] }),
        O("Process", "Put the patient’s course in order", ['mucoserous otitis media', 'cholesteatoma', 'tube insertion', 'tympanoplasty'], 'Per standard references.'),
        S("Spelling", "Write the operation she was admitted for: repair of the eardrum", 'tympanoplasty', 'tympan/o + -plasty.', 'tympano…')
      ]
    },
    {
      id: 'r15', w: 'hd', title: "What did the MRI show?", who: "George, a 55-year-old man",
      brief: "Continuing Case Study: one-sided sensorineural hearing loss in the left ear, tinnitus, ear fullness and no BAEP response on the left made the doctor think of a mass. MRI showed a 1-cm acoustic neuroma.",
      chart: [['Sx', 'unilateral SNHL AS, tinnitus, aural fullness'], ['BAEP', 'no response AS'], ['MRI', '1-cm acoustic neuroma']],
      fig: { a: 'inner-ear-art', l: [] },
      steps: [
        M("tumour", "Which nerve is an acoustic neuroma on?", ["the eighth nerve (vestibulocochlear)", "the second nerve (optic)", "the fifth nerve", "the seventh nerve"], 'CN VIII.'),
        M("Other name", "Another name for acoustic neuroma in the standard reference…", ['acoustic neurilemmoma', 'cholesteatoma', 'otosclerosis', 'macular degeneration'], 'Case Study 8-1 Questions.'),
        T("Type", "An acoustic neuroma causes sensorineural hearing loss.", true, "Nerve damage.", { a: ['hearing-loss-types'], l: [] }),
        P("Term", "Match each term to its meaning", [['unilateral', "on one side"], ['neuroma', "nerve tumour"], ['MRI', "magnetic resonance imaging"], ['sensorineural', "damage to the cochlea or nerve"]], "Diagnosis."),
        M("root", "In neuroma, the suffix -oma means…", ["tumour", "inflammation", "pain", "incision"], 'neur/o + -oma.'),
        S("Spelling", "Write the type of hearing loss George has (sense organ and nerve)", 'sensorineural', 'sensory + neural.', 'senso…')
      ]
    },
    /* ================= تشخیص و درمان ================= */
    {
      id: 'r16', w: 'tx', title: "Discharge summary: cataract", who: "Mrs Serowan",
      brief: "The Discharge Summary says: Mrs Serowan had progressive loss of vision in her right eye for years. Her best corrected visual acuity in the right eye was 20/70. On 21 June the cataract was broken up with ultrasound and a prosthetic intraocular lens was inserted. She was discharged on the first day after the operation.",
      chart: [['Admission Dx', 'cataract for extraction'], ['Exam', 'BCVA 20/70 OD'], ['Procedure', 'ultrasound cataract removal + IOL'], ['Discharge', 'postoperative day 1']],
      fig: { a: 'phaco-iol', l: [] },
      steps: [
        M("abbreviation", "BCVA means…", ["best corrected visual acuity", "intraocular pressure", "visual acuity without glasses", "visual field"], 'best corrected visual acuity.'),
        M("Snellen", "20/70 means…", ["she sees at 20 feet what a healthy eye sees at 70 feet", "she has seventy per cent of her vision", "she is blind", "she has normal vision"], "The Snellen fraction.", null, { a: ['snellen-art'], l: [] }),
        P("Term", "Match each term to its meaning", [['deteriorating', "getting worse"], ['ultrasound', "high-frequency sound waves"], ['prosthetic', "artificial"], ['intraocular lens', "artificial lens inside the eye"]], 'Per standard references.'),
        T("Method", "Breaking up the lens with ultrasound is phacoemulsification.", true, "Phaco.", { a: ['cataract-surgery'], l: [] }),
        O("Process", "Put the patient’s course in order", ['progressive vision loss', 'BCVA 20/70', 'cataract removal', 'IOL insertion', 'discharge'], "From complaint to discharge."),
        S("Spelling", "Spell the word meaning artificial in “… intraocular lens”", 'prosthetic', "A prosthesis.", 'prost…')
      ]
    },
    {
      id: 'r17', w: 'tx', title: "Operative report: tubes in both ears", who: "A child with recurrent otitis",
      brief: "The Operative Report says: the preoperative diagnosis was otitis media and the postoperative diagnosis recurrent otitis media. The patient lay supine under general anaesthesia. Under the microscope the right ear canal was cleared of wax; the eardrum was abnormal with pus behind it. A myringotomy was performed, the pus was suctioned and a tube was inserted. The same was done on the left, where watery fluid was found.",
      chart: [['Pre-op Dx', 'otitis media'], ['Post-op Dx', 'recurrent otitis media'], ['Procedure', 'bilateral myringotomy with tube insertion'], ['Findings', 'R: pus; L: watery fluid']],
      fig: { a: 'myringotomy-art', l: [] },
      steps: [
        P("Term", "Match each term to its meaning", [['recurrent', "recurring"], ['bilateral', "on both sides"], ['supine', "lying on the back"], ['external auditory meatus', "external auditory canal"]], 'Operative Report.'),
        M("Operation", "myringotomy means…", ["incision of the eardrum", "repairing the eardrum", "removing the stapes", "removing the mastoid"], 'myring/o + -tomy.'),
        M("the tube", "What does the inserted tube do?", ["drains fluid and equalises middle ear pressure", "amplifies sound", "stimulates the nerve", "washing out wax"], 'PE tube.', null, { a: ['pe-tube'], l: [] }),
        T("liquid", "There was watery (serous) fluid in the left ear and pus in the right.", true, "The findings."),
        O("Steps", "Put the steps of the operation in order", ['general anesthesia', 'clean cerumen', 'myringotomy', 'suction fluid', 'insert tube'], "The operation."),
        S("Spelling", "Write the term for the incision made in each eardrum", 'myringotomy', 'myring/o + -tomy.', 'myringo…')
      ]
    },
    {
      id: 'r18', w: 'tx', title: "Eye patch and glasses", who: "Kelly, a 7-year-old girl",
      brief: "Continuing the Case Study: for Kelly, who has amblyopia and mild hyperopia, the ophthalmologist prescribed a patch over the right (strong) eye and glasses. Kelly wore the patch 4 to 5 hours a day, and the glasses made by the optician helped her read. A month later her vision had improved.",
      chart: [['Dx', 'strabismic amblyopia OS; mild hyperopia'], ['Rx', 'patch over OD, glasses'], ['Follow-up', '1 month: improved vision']],
      fig: { a: 'strabismus-art', l: [] },
      steps: [
        M("treatment", "Why was the patch put on the right (strong) eye?", ["to force the weak eye to work", "to rest the right eye because it is diseased", "for an infection", "to lower eye pressure"], 'eye patching.'),
        M("glasses", "Who made Kelly’s glasses?", ['optician', 'ophthalmologist', 'audiologist', 'pediatrician'], "The optician."),
        M("abbreviation", "How is Kelly’s left eye written?", ['OS', 'OD', 'OU', 'AS'], 'oculus sinister.'),
        T("farsightedness", "hyperopia means near vision is blurred.", true, "Focus behind the retina.", { a: ['refraction-errors'], l: [] }),
        P("Term", "Match each term to its meaning", [['amblyopia', "lazy eye"], ['hyperopia', "farsightedness"], ['eye patching', "patching therapy"], ['optician', "maker of glasses"]], 'Case Study.'),
        S("Spelling", "Spell the term for farsightedness", 'hyperopia', 'hyper- + -opia.', 'hyper…')
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
    ['Lx', "The special senses have dedicated organs in the head; the eye and ear have the most medical terms."],
    ['Lx', "ophthalm/o and ocul/o both mean eye; ot/o, aur/o and auricul/o all mean ear."],
    ['Lx', "-opia and -opsia mean vision; -cusis means hearing."],
    ['Lx', "ot/o is ear and or/o is mouth; otitis is different from oral."],
    ['Lx', "The malleus is an ear ossicle and the malleolus is the ankle bone."],
    ['Lx', "OD is the right eye, OS the left eye and OU both eyes; AD, AS and AU are the same for the ears."],
    ['Lx', "myring/o and tympan/o both mean eardrum: myringotomy and tympanoplasty."],
    ['Ey', "The layers of the eyeball from outside in: sclera, choroid and retina."],
    ['Ey', "Cones see colour and rods see in dim light."],
    ['Ey', "The optic disc has no receptors; that is why it is the blind spot."],
    ['Ey', "miosis is narrowing of the pupil and mydriasis is widening."],
    ['Ey', "Tears come from the lacrimal gland and drain through the nasolacrimal duct into the nose."],
    ['Ey', "There are six extraocular muscles: four rectus and two oblique."],
    ['Vd', "In nearsightedness the image falls in front of the retina, and in farsightedness behind it."],
    ['Vd', "A cataract is clouding of the lens; glaucoma is high pressure in the eye."],
    ['Vd', "Glaucoma takes peripheral vision first, and macular degeneration takes central vision."],
    ['Vd', "esotropia is inward turning of the eye and exotropia outward."],
    ['Vd', "A hordeolum (stye) is painful and a chalazion is painless."],
    ['Vd', "Flashes of light, floaters and a curtain over the vision: possibly retinal detachment; it is an emergency."],
    ['Er', "The order of the ossicles from outside in: Malleus, Incus, Stapes."],
    ['Er', "The Eustachian tube connects the middle ear to the throat and equalises the pressure."],
    ['Er', "The cochlea is for hearing; the vestibule and semicircular canals are for balance."],
    ['Er', "The decibel measures loudness and the hertz measures pitch."],
    ['Hd', "Otitis externa is the outer ear, otitis media the middle ear and otitis interna the inner ear."],
    ['Hd', "Conductive hearing loss is in the outer or middle ear; sensorineural is in the cochlea or nerve."],
    ['Hd', "The Ménière triad: vertigo, tinnitus and hearing loss."],
    ['Hd', "presbycusis is age-related hearing loss and presbyopia age-related farsightedness; presby/o means old age."],
    ['Tx', "In the Snellen fraction 20/40, a larger bottom number means weaker vision."],
    ['Tx', "Tonometry measures eye pressure and audiometry measures hearing."],
    ['Tx', "IOP is intraocular pressure and IOL is an intraocular lens."],
    ['Tx', "In a normal Rinne test, air conduction is better than bone conduction: AC > BC."],
    ['Tx', "A myringotomy is an incision of the eardrum, often with a PE tube."]
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
