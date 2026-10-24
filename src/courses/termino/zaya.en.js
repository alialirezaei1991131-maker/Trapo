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
    name: "Zaya", key: 'zaya', title: "Zaya • Terminology of Reproduction, Pregnancy and Childbirth", certCode: 'ZY',
    subject: "Medical terminology of the female and male reproductive systems, pregnancy and childbirth",
    kicker: "🌸 Medical terminology: Reproduction, Pregnancy and Childbirth",
    hello: "Hi, I’m <b>Zaya</b>, a smiling egg cell where every new life begins!",
    disclaimer: "Zaya is an educational tool and does not replace examination, clinical judgement or a physician’s orders.",
    eyes: "Dozens of bilingual figures and teaching pictures, from the ovary, uterus and testis to the menstrual cycle, fertilization, the placenta, the stages of labour, ultrasound and mammography.",
    outcomes: [
      "Break every reproductive word into prefix, root and suffix and say what it means",
      "Show the ovary, tubes, uterus, cervix, vagina and breast on a figure and explain the menstrual cycle",
      "Recognise the testis, epididymis, vas deferens, prostate and the route of sperm",
      "Write fertilization, embryo and fetus, placenta, G and P and the stages of labour with the right terms",
      "Tell apart female and male diseases, pregnancy complications and sexually transmitted infections",
      "Read Pap smears, mammography, amniocentesis, operations, contraceptive methods and chart abbreviations"
    ],
    endText: "Just 5 minutes a day. A few weeks from now you’ll read an obstetrics and gynaecology note like a familiar story.",
    obHello: "Hi! I’m Zaya, a smiling egg cell 🌸 What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “Language of Birth” is the best start; the basic roots and the parts of the system are taught there!",
    demo: () => ({
      q: "The word <b dir=\"ltr\">hysterectomy</b> means…",
      fig: { a: ['female-front'], l: ["Female Reproductive System"] },
      opts: ["removal of the uterus", "incision of the uterus", "inflammation of the uterus", "viewing the uterus"],
      why: `${EA.K.wb('hyster/o', '-ectomy')}<br><b>hyster/o</b> = uterus, <b>-ectomy</b> = removal. So it means <b>removal of the uterus</b>. Start the meaning from the suffix!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ["New Bud", "Curious Egg", "Tube Traveller", "Root Decoder", "Endometrium Guardian", "Cycle Master", "Sperm Guide",
      "Placenta’s Friend", "G and P Counter", "Birth Companion", "STI Detective", "Ultrasound Reader", "Word-Building Master", "Obstetrics Legend", "Terminology Icon"],
    leagueRoles: ["Midwifery student", "Medical student", "Nursing student", "midwife", "labour ward nurse", "Surgical technologist", "gynaecology resident", "reproductive health student", "Lab technologist", "sonographer", "NICU nurse", "urology resident", "Anaesthesia technologist"],
    firstBadge: ['🌸', "First Bud"],
    worldBadges: { lx: ['🧩', "Decoder"], fm: ['🌷', "Cycle Guardian"], ml: ['🔷', "Sperm Guide"], pg: ['🤰', "Birth Companion"], ds: ['🩺', "Disease Detective"], tx: ['🧪', "Test Master"] },
    confetti: ['#B8457A', '#F6B3C6', '#FFC800', '#2E86C1', '#E8913A', '#17A398', '#8E6BD8', '#58CC02'],
    /* ابزارها */
    parseDefault: 'salpingo-oophorectomy',
    parseSamples: ['salpingo-oophorectomy', 'dysmenorrhea', 'cryptorchidism', 'amniocentesis', 'colporrhaphy', 'oligospermia', 'primigravida', 'galactorrhea'],
    ph: { dict: "Search: hyster, uterus, cervix…", roots: "Search: metr, ovary, -rrhea…", abbr: "Search: LMP, prostate, PID…" },
    toolsDisclaimer: "⚕️ Zaya is a learning tool; the dictionary and pregnancy calculator do not replace examination, ultrasound or a physician’s judgement.",
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
    if (!a) return "<p class=\"edd__note\">Choose the date of the first day of the last menstrual period (LMP).</p>";
    const edd = new Date(a.getTime() + 280 * DAY), d = ga();
    const cell = (t, b, s) => `<div class="edd__c"><span>${t}</span><b>${b}</b>${s ? `<small>${s}</small>` : ''}</div>`;
    let gaCell = cell("gestational age", '—', "The visit date is before the LMP.");
    let triCell = '';
    if (isFinite(d) && d >= 0) {
      const w = Math.floor(d / 7), r = d % 7;
      gaCell = cell("gestational age", `${fa(w)} weeks and ${fa(r)} days`, `<bdi dir="ltr">GA ${w}+${r}</bdi>`);
      const tri = w < 14 ? ["first trimester", "organs form; embryo until week 8"] : w < 28 ? ["second trimester", "fetal movement is felt"] : w <= 42 ? ["third trimester", w >= 37 ? "term: birth in this range is normal" : "growth and lung maturation"] : ["post-term", "more than 42 weeks; assessment needed"];
      triCell = cell("Course", tri[0], tri[1]);
    }
    return `<div class="edd__out">${cell("Estimated date of delivery (EDD)", `<bdi dir="ltr">${iso(edd)}</bdi>`, shamsi(edd))}${gaCell}${triCell}</div>`;
  }
  function gpOut() {
    const g = parseInt(st.g, 10), p = parseInt(st.p, 10);
    if (!(g >= 0) || !(p >= 0)) return "<p class=\"edd__note\">For example, Abigail’s record: gravida 2, para 1.</p>";
    if (p > g) return "<p class=\"edd__note\">P cannot be greater than G.</p>";
    const name = g === 0 ? 'nulligravida' : g === 1 ? 'primigravida' : 'multigravida';
    const pn = p === 0 ? 'nullipara' : p === 1 ? 'primipara' : 'multipara';
    return `<p class="edd__note"><bdi dir="ltr">G${g} P${p}</bdi>: she has been pregnant ${fa(g)} times and has had ${fa(p)} births of a viable baby; that is, <bdi dir="ltr">${name}</bdi> and <bdi dir="ltr">${pn}</bdi>.</p>`;
  }
  const field = (key, label, type, ph) => `<label class="edd__in"><span>${label}</span><input type="${type}" data-keep="${key}" data-edd="${key}" value="${EA.ui.esc(st[key] || (key === 'visit' ? todayIso() : ''))}" ${ph ? `placeholder="${ph}"` : ''} ${type === 'number' ? 'inputmode="numeric" min="0" max="20"' : ''} autocomplete="off"></label>`;
  EA.APP.extraTool = {
    id: 'edd', sym: 'EDD', name: "Pregnancy calculator", color: '#B8457A',
    /* برای آزمون: سن بارداری به هفته (کامل) */
    value: () => { const d = ga(); return isFinite(d) && d >= 0 ? Math.floor(d / 7) : 0; },
    pane: () => `<div class="tpane"><p class="muted">By Naegele’s rule: due date = first day of the last menstrual period + 280 days (40 weeks).</p>
    <div class="edd">${field('lmp', "First day of last menstrual period (LMP)", 'date')}${field('visit', "Visit date", 'date')}</div>
    <div class="edd__res" aria-live="polite">${out()}</div>
    ${EA.ui.figCard({ a: ['trimesters'], l: ["trimesters of pregnancy"] })}
    <h4 class="edd__h">G and P in the record</h4>
    <div class="edd">${field('g', "gravida (number of pregnancies)", 'number', '2')}${field('p', "para (number of births)", 'number', '1')}</div>
    <div class="edd__gp" aria-live="polite">${gpOut()}</div>
    <table class="mini"><tr><th>Rule</th><th>Example</th></tr>
      <tr><td>LMP minus 3 months, plus 7 days</td><td><bdi dir="ltr">LMP 2026-01-10 → EDD 2026-10-17</bdi></td></tr>
      <tr><td>Term</td><td>37 to 42 weeks</td></tr>
      <tr><td>Preterm</td><td>before 37 weeks</td></tr></table>
    <p class="muted">The due date is an estimate; only about 5% of babies are born on that exact day. An early pregnancy ultrasound is more accurate.</p></div>`,
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
/* زایا — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از apps/zaya/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["abruptio placentae", "ab-RUP-shee-oh plah-SEN-tee", "Premature separation of the placenta from the uterine wall; an emergency.", "placental abruption", "ds", "dz", []],
["adnexa", "ad-NEK-sah", "Accessory structures of the uterus: the ovaries and uterine tubes.", "ovaries and tubes beside the uterus", "fm", "body", []],
["afterbirth", "AF-ter-berth", "The placenta and membranes expelled after the baby is born.", "placenta and membranes expelled after the baby", "pg", "phys", []],
["amenorrhea", "ah-men-oh-REE-ah", "Absence of menstrual periods (a- = without, men/o = menses, -rrhea = flow).", "absence of periods", "ds", "sx", []],
["amniocentesis", "am-nee-oh-sen-TEE-sis", "Needle removal of amniotic fluid for genetic testing (-centesis = puncture).", "needle sampling of the fluid around the fetus", "tx", "lab", []],
["amnion", "AM-nee-on", "Innermost membrane around the fetus; amniotic sac (amni/o).", "inner membrane holding the fetus (bag of waters)", "pg", "body", []],
["amniotic fluid", "am-nee-OT-ik FLOO-id", "Fluid inside the amnion that cushions and protects the fetus.", "liquid cushioning the fetus", "pg", "body", ["BOW"]],
["androgen", "AN-droh-jen", "Any male sex hormone, such as testosterone (andr/o = male).", "male hormone", "lx", "phys", []],
["andrology", "an-DROL-oh-jee", "Study of the male reproductive system and male health (andr/o = male).", "study of male reproductive health", "lx", "field", []],
["anorchism", "an-OR-kizm", "Absence of one or both testes at birth.", "absence of a testis", "ml", "sx", []],
["anovulation", "an-ov-yoo-LAY-shun", "Absence of ovulation.", "failure to ovulate", "ds", "sx", []],
["antepartum", "an-tee-PAR-tum", "Before childbirth (ante- = before, -partum = birth).", "before labour", "pg", "phys", []],
["Apgar score", "AP-gar skor", "Rating of a newborn at 1 and 5 minutes for heart rate, breathing, muscle tone, reflexes and color (0 to 10).", "newborn rating of colour, pulse, reflex, tone and breathing", "pg", "lab", []],
["areola", "ah-REE-oh-lah", "Dark circular area around the nipple.", "dark ring around the nipple", "fm", "body", []],
["artificial insemination", "ar-tih-FISH-al in-sem-ih-NAY-shun", "Placing sperm into the uterus or vagina with a syringe or catheter.", "placing sperm in the reproductive tract by instrument", "tx", "tx", ["AI"]],
["aspermia", "ay-SPER-mee-ah", "Lack of semen formation or ejaculation.", "absence of semen", "ds", "sx", []],
["azoospermia", "ay-zoh-oh-SPER-mee-ah", "Absence of sperm in the semen.", "absence of sperm", "ds", "sx", []],
["balanitis", "bal-ah-NYE-tis", "Inflammation of the glans penis (balan/o).", "inflammation of the glans penis", "ds", "dz", []],
["Bartholin glands", "BAR-toh-lin glandz", "Two small glands beside the vaginal opening that secrete lubricating mucus.", "mucus glands beside the vaginal opening", "fm", "body", []],
["benign prostatic hyperplasia", "beh-NYNE pros-TAT-ik hye-per-PLAY-zee-ah", "Noncancerous enlargement of the prostate that narrows the urethra.", "non-cancerous enlargement of the prostate", "ds", "dz", ["BPH"]],
["brachytherapy", "brak-ee-THAIR-ah-pee", "Radiation from seeds placed inside or next to a tumor, such as in the prostate.", "internal radiation therapy", "tx", "tx", []],
["breast cancer", "brest KAN-ser", "Malignant tumor of the breast tissue; often found by mammography or breast self-examination.", "malignancy of the mammary gland", "ds", "dz", ["BSE"]],
["breast self-examination", "brest self eg-zam-ih-NAY-shun", "Monthly self-check of the breasts for lumps.", "monthly self-check for breast lumps", "tx", "lab", ["BSE"]],
["breech presentation", "breech prez-en-TAY-shun", "Fetus positioned to be born buttocks or feet first.", "buttocks or feet first at birth", "pg", "sx", []],
["bulbourethral glands", "bul-boh-yoo-REE-thral glandz", "Two small glands below the prostate that secrete mucus; Cowper glands.", "glands below the prostate adding fluid to semen", "ml", "body", []],
["candidiasis", "kan-dih-DYE-ah-sis", "Yeast infection of the vagina with curdy discharge and itching.", "yeast infection", "ds", "inf", []],
["cephalopelvic disproportion", "sef-ah-loh-PEL-vik dis-proh-POR-shun", "Fetal head too large to pass through the mother's pelvis.", "fetal head too large for the pelvis", "ds", "dz", ["CPD"]],
["cervical cancer", "SER-vih-kal KAN-ser", "Malignant tumor of the cervix, usually linked to HPV infection.", "malignancy of the neck of the uterus", "ds", "dz", []],
["cervical dysplasia", "SER-vih-kal dis-PLAY-zee-ah", "Abnormal precancerous cells on the cervix found on a Pap test.", "abnormal precancerous cervical cells", "ds", "dz", ["CIN"]],
["cervicitis", "ser-vih-SYE-tis", "Inflammation of the cervix.", "inflammation of the cervix", "ds", "dz", []],
["cervix", "SER-viks", "Lower narrow neck of the uterus that opens into the vagina (cervic/o = cervix).", "neck of the uterus", "fm", "body", ["Cx"]],
["cesarean section", "seh-ZAIR-ee-an SEK-shun", "Delivery of the baby through incisions in the abdomen and uterus.", "caesarean section", "tx", "tx", ["CS", "C-section"]],
["chancre", "SHANG-ker", "Painless sore at the site of entry of syphilis.", "painless ulcer of syphilis", "ds", "sx", []],
["chancroid", "SHANG-kroyd", "Bacterial STI with painful genital ulcers.", "painful bacterial genital ulcer", "ds", "inf", []],
["chlamydia", "klah-MID-ee-ah", "Common bacterial STI that may cause PID and infertility.", "tiny intracellular bacteria", "ds", "inf", []],
["chorion", "KOR-ee-on", "Outermost membrane around the fetus that helps form the placenta (chori/o).", "outer fetal membrane forming part of the placenta", "pg", "body", []],
["chorionic villus sampling", "kor-ee-ON-ik VIL-us SAM-pling", "Taking a small sample of chorionic villi for genetic testing; done earlier than amniocentesis.", "early placental tissue test for chromosomes", "tx", "lab", ["CVS"]],
["chromosome", "KROH-moh-sohm", "Thread of DNA that carries the genes; humans have 46 chromosomes (23 pairs).", "gene-carrying structure in the nucleus", "pg", "phys", []],
["circumcision", "ser-kum-SIZH-un", "Surgical removal of the foreskin.", "removal of the foreskin", "tx", "tx", []],
["clitoris", "KLIT-oh-ris", "Small sensitive erectile organ at the front of the vulva.", "small sensitive erectile organ of the vulva", "fm", "body", []],
["colostrum", "koh-LOS-trum", "Thin yellow first milk rich in antibodies, made in the first days after birth.", "first milk after birth", "pg", "phys", []],
["colporrhaphy", "kol-POR-ah-fee", "Suture of the vagina to repair a cystocele or rectocele.", "suture repair of the vagina", "tx", "tx", []],
["colposcopy", "kol-POS-koh-pee", "Examination of the vagina and cervix with a magnifying scope (colp/o = vagina).", "magnified viewing of the vagina and cervix", "tx", "lab", []],
["condom", "KON-dom", "Sheath that blocks sperm and helps prevent STIs.", "sheath barrier contraceptive", "tx", "tx", []],
["conization", "kon-ih-ZAY-shun", "Removal of a cone of tissue from the cervix; cone biopsy.", "cone biopsy of the cervix", "tx", "tx", []],
["contraception", "kon-trah-SEP-shun", "Prevention of pregnancy.", "preventing pregnancy", "tx", "tx", []],
["corpora cavernosa", "KOR-por-ah kav-er-NOH-sah", "Two columns of erectile tissue in the penis that fill with blood during erection.", "erectile tissue of the penis", "ml", "body", []],
["corpus luteum", "KOR-pus LOO-tee-um", "Yellow body that forms from the ruptured follicle after ovulation and makes progesterone.", "yellow body making progesterone after ovulation", "fm", "body", []],
["crowning", "KROW-ning", "Appearance of the baby's head at the vaginal opening.", "baby’s head appearing at the vaginal opening", "pg", "phys", []],
["cryptorchidism", "kript-OR-kih-dizm", "Failure of a testis to descend into the scrotum (crypt/o = hidden).", "undescended testis", "ds", "dz", []],
["culdocentesis", "kul-doh-sen-TEE-sis", "Needle aspiration of fluid from the rectouterine pouch (culd/o).", "needle aspiration of fluid behind the uterus", "tx", "lab", []],
["cystocele", "SIS-toh-seel", "Protrusion of the bladder into the vaginal wall (cyst/o = bladder, -cele = hernia).", "bladder sagging into the vagina", "ds", "dz", []],
["diaphragm", "DYE-ah-fram", "Dome-shaped cap placed over the cervix to block sperm.", "dome-shaped barrier over the cervix", "tx", "tx", []],
["digital rectal examination", "DIJ-ih-tal REK-tal eg-zam-ih-NAY-shun", "Feeling the prostate with a gloved finger through the rectum.", "finger examination of the prostate via the rectum", "tx", "lab", ["DRE"]],
["dilation", "dye-LAY-shun", "Widening of the cervix to 10 cm during the first stage of labor.", "opening of the cervix", "pg", "phys", []],
["dilation and curettage", "dye-LAY-shun and kyoo-reh-TAHZH", "Widening the cervix and scraping the uterine lining with a curette.", "widening the cervix and scraping the lining", "tx", "tx", ["D&C"]],
["doula", "DOO-lah", "Trained helper who supports a woman during labor and after birth.", "trained non-medical birth companion", "pg", "field", []],
["Down syndrome", "down SIN-drohm", "Genetic disorder from an extra chromosome 21 (trisomy 21), with intellectual disability and typical features.", "trisomy 21", "ds", "dz", []],
["dysmenorrhea", "dis-men-oh-REE-ah", "Painful menstruation.", "painful periods", "ds", "sx", []],
["dyspareunia", "dis-pah-ROO-nee-ah", "Painful sexual intercourse (pareun/o = intercourse).", "painful intercourse", "ds", "sx", []],
["dystocia", "dis-TOH-see-ah", "Difficult or prolonged labor (-tocia = labor).", "difficult labour", "ds", "sx", []],
["eclampsia", "ee-KLAMP-see-ah", "Seizures in a woman with preeclampsia; a medical emergency.", "seizures in pregnancy", "ds", "dz", []],
["ectopic pregnancy", "ek-TOP-ik PREG-nan-see", "Implantation of the fertilized ovum outside the uterus, usually in the tube (ec- = out, top/o = place).", "implantation outside the uterus", "ds", "dz", []],
["effacement", "eh-FAYS-ment", "Thinning and shortening of the cervix during labor.", "thinning of the cervix", "pg", "phys", []],
["ejaculation", "ee-jak-yoo-LAY-shun", "Ejection of semen from the urethra.", "expulsion of semen", "ml", "phys", []],
["ejaculatory duct", "ee-JAK-yoo-lah-tor-ee dukt", "Short duct formed by the vas deferens and seminal vesicle that opens into the urethra.", "short duct carrying semen into the urethra", "ml", "body", []],
["embryo", "EM-bree-oh", "Developing baby from implantation through the eighth week (embry/o).", "developing young up to week 8", "pg", "phys", []],
["embryonic", "em-bree-ON-ik", "Pertaining to the embryo.", "relating to the embryo", "pg", "phys", []],
["endometrial cancer", "en-doh-MEE-tree-al KAN-ser", "Malignant tumor of the uterine lining; often causes postmenopausal bleeding.", "malignancy of the uterine lining", "ds", "dz", []],
["endometriosis", "en-doh-mee-tree-OH-sis", "Endometrial tissue growing outside the uterus, causing pain and infertility.", "uterine lining tissue growing outside the uterus", "ds", "dz", []],
["endometrium", "en-doh-MEE-tree-um", "Inner lining of the uterus that thickens each month and is shed in menstruation.", "inner lining of the uterus", "fm", "body", []],
["epididymis", "ep-ih-DID-ih-mis", "Coiled tube on the back of each testis where sperm mature and are stored (epididym/o).", "coiled tube on the back of the testis", "ml", "body", []],
["epididymitis", "ep-ih-did-ih-MYE-tis", "Inflammation of the epididymis.", "inflammation of the epididymis", "ds", "dz", []],
["episiotomy", "eh-piz-ee-OT-oh-mee", "Incision of the perineum to widen the vaginal opening during birth (episi/o = vulva).", "surgical cut of the perineum during birth", "tx", "tx", []],
["epispadias", "ep-ih-SPAY-dee-as", "Birth defect in which the urethra opens on the upper side of the penis.", "urethral opening on the upper side of the penis", "ds", "dz", []],
["erectile dysfunction", "ee-REK-tile dis-FUNK-shun", "Inability to achieve or keep an erection; impotence.", "inability to achieve an adequate erection", "ds", "dz", ["ED"]],
["erection", "ee-REK-shun", "Stiffening of the penis as erectile tissue fills with blood.", "stiffening of the penis as it fills with blood", "ml", "phys", []],
["estimated date of delivery", "ES-tih-may-ted dayt ov deh-LIV-er-ee", "Due date: about 280 days (40 weeks) after the first day of the last menstrual period.", "predicted due date", "pg", "lab", ["EDD", "EDC"]],
["estrogen", "ES-troh-jen", "Main female sex hormone made by the ovaries; develops female characteristics and the endometrium (estr/o = female).", "main female sex hormone", "lx", "phys", []],
["fertilization", "fer-tih-lih-ZAY-shun", "Union of a sperm and an ovum, usually in the uterine tube; conception.", "union of sperm and egg", "lx", "phys", []],
["fetal", "FEE-tal", "Pertaining to the fetus.", "relating to the fetus", "pg", "phys", []],
["fetal heart rate", "FEE-tal hart rayt", "Heartbeat of the fetus, normally 110 to 160 beats per minute.", "heartbeat of the unborn baby", "pg", "lab", ["FHR", "FHT"]],
["fetus", "FEE-tus", "Developing baby from the ninth week until birth (fet/o).", "baby", "pg", "phys", []],
["fibrocystic breast disease", "fye-broh-SIS-tik brest dih-ZEEZ", "Benign lumps and cysts in the breast that change with the cycle.", "benign lumpy breast changes", "ds", "dz", []],
["fimbriae", "FIM-bree-ee", "Finger-like ends of the uterine tube that sweep the ovum into the tube.", "finger-like fringes of the tube", "fm", "body", []],
["follicle-stimulating hormone", "FOL-ih-kul STIM-yoo-lay-ting HOR-mohn", "Pituitary hormone that stimulates growth of ovarian follicles and sperm production.", "pituitary hormone that grows ovarian follicles", "lx", "phys", ["FSH"]],
["fundus", "FUN-dus", "Upper rounded part of the uterus above the tubes.", "top of the uterus", "fm", "body", []],
["galactorrhea", "gah-lak-toh-REE-ah", "Milk discharge from the breast not related to nursing (galact/o = milk).", "abnormal milk discharge", "ds", "sx", []],
["gamete", "GAM-eet", "A mature sex cell: ovum (egg) or spermatozoon (sperm); each has 23 chromosomes.", "sex cell", "lx", "phys", []],
["genital", "JEN-ih-tal", "Pertaining to the reproductive organs.", "relating to the reproductive organs", "lx", "body", []],
["genital herpes", "JEN-ih-tal HER-peez", "Viral STI with painful blisters on the genitals; caused by herpes simplex virus.", "HSV infection with painful genital blisters", "ds", "inf", ["HSV"]],
["genital warts", "JEN-ih-tal worts", "Growths on the genitals caused by human papillomavirus; condylomata.", "HPV growths on the genitals", "ds", "inf", ["HPV"]],
["genitalia", "jen-ih-TAY-lee-ah", "The reproductive organs, especially the external ones; also called genitals (genit/o = reproduction).", "sex organs", "lx", "body", []],
["gestation", "jes-TAY-shun", "Period of development from conception to birth, about 40 weeks from the LMP.", "length of pregnancy", "pg", "phys", ["GA"]],
["gestational diabetes", "jes-TAY-shun-al dye-ah-BEE-teez", "High blood sugar that first appears during pregnancy.", "high blood sugar arising in pregnancy", "ds", "dz", []],
["glans penis", "glanz PEE-nis", "Sensitive tip of the penis (balan/o = glans penis).", "head of the penis", "ml", "body", []],
["gonad", "GOH-nad", "A sex gland that makes sex cells and hormones: the ovary in females and the testis in males (gonad/o = sex gland).", "sex gland", "lx", "body", []],
["gonorrhea", "gon-oh-REE-ah", "Bacterial STI with discharge and painful urination (gon/o = seed).", "gonorrhoea", "ds", "inf", ["GC"]],
["gravida", "GRAV-ih-dah", "A pregnant woman; G1, G2 shows the number of pregnancies (grav/i = pregnant).", "number of pregnancies", "pg", "phys", ["G"]],
["gynecologist", "gye-neh-KOL-oh-jist", "Physician who specializes in the female reproductive system.", "women’s health specialist", "lx", "field", []],
["gynecology", "gye-neh-KOL-oh-jee", "Branch of medicine that treats diseases of the female reproductive system (gynec/o = woman).", "study of women’s reproductive health", "lx", "field", ["GYN"]],
["gynecomastia", "gye-neh-koh-MAS-tee-ah", "Enlargement of breast tissue in a male (gynec/o = woman, mast/o = breast).", "breast enlargement in males", "fm", "sx", []],
["herniorrhaphy", "her-nee-OR-ah-fee", "Surgical repair of a hernia (-rrhaphy = suture).", "hernia repair", "tx", "tx", []],
["hormone replacement therapy", "HOR-mohn ree-PLAYS-ment THAIR-ah-pee", "Estrogen with or without progestin to relieve menopausal symptoms.", "estrogen treatment for menopausal symptoms", "tx", "tx", ["HRT"]],
["human chorionic gonadotropin", "HYOO-man kor-ee-ON-ik goh-nad-oh-TROH-pin", "Hormone made by the embryo; its presence in urine or blood is the basis of pregnancy tests.", "pregnancy hormone hCG", "pg", "phys", ["hCG"]],
["human immunodeficiency virus", "HYOO-man im-yoo-noh-deh-FISH-en-see VYE-rus", "Virus spread by blood and sexual contact that causes AIDS.", "virus that causes AIDS", "ds", "inf", ["HIV", "AIDS"]],
["hydrocele", "HYE-droh-seel", "Collection of fluid around the testis in the scrotum (hydr/o = water).", "fluid collection around the testis", "ds", "dz", []],
["hydrosalpinx", "hye-droh-SAL-pinks", "Collection of fluid in a uterine tube (-salpinx = tube).", "fluid-filled fallopian tube", "ds", "dz", []],
["hymen", "HYE-men", "Thin membrane that partly covers the vaginal opening (hymen/o).", "thin membrane at the vaginal opening", "fm", "body", []],
["hyperemesis gravidarum", "hye-per-EM-eh-sis grav-ih-DAR-um", "Severe, persistent vomiting in pregnancy (-emesis = vomiting).", "severe vomiting in pregnancy", "ds", "dz", []],
["hypospadias", "hye-poh-SPAY-dee-as", "Birth defect in which the urethra opens on the underside of the penis.", "urethral opening on the underside of the penis", "ds", "dz", []],
["hysterectomy", "his-ter-EK-toh-mee", "Surgical removal of the uterus (hyster/o = uterus).", "removal of the uterus (hysterectomy)", "lx", "tx", []],
["hysterosalpingography", "his-ter-oh-sal-ping-OG-rah-fee", "X-ray of the uterus and tubes after injecting contrast.", "X-ray of the uterus and tubes with contrast", "tx", "lab", []],
["hysteroscopy", "his-ter-OS-koh-pee", "Visual examination of the inside of the uterus with a scope.", "viewing the uterus with a scope", "tx", "lab", []],
["implantation", "im-plan-TAY-shun", "Embedding of the developing zygote in the endometrium.", "embedding of the blastocyst in the uterine lining", "pg", "phys", []],
["in vitro fertilization", "in VEE-troh fer-tih-lih-ZAY-shun", "Fertilizing ova with sperm in a laboratory dish and transferring the embryo to the uterus.", "fertilization in a laboratory dish", "tx", "tx", ["IVF"]],
["infertility", "in-fer-TIL-ih-tee", "Inability to conceive after a year of regular unprotected intercourse; sterility if permanent.", "inability to conceive", "ds", "dz", []],
["inguinal canal", "ING-gwih-nal kah-NAL", "Passage in the groin through which the testis descends and the spermatic cord passes.", "passage in the groin wall", "ml", "body", []],
["inguinal hernia", "ING-gwih-nal HER-nee-ah", "Protrusion of intestine through the inguinal canal into the groin or scrotum.", "bulge through the groin wall", "ds", "dz", []],
["intrauterine", "in-trah-YOO-ter-in", "Within the uterus.", "within the uterus", "pg", "body", []],
["intrauterine device", "in-trah-YOO-ter-in deh-VYSE", "Small device placed in the uterus to prevent pregnancy.", "contraceptive placed in the womb", "tx", "tx", ["IUD"]],
["karyotype", "KAIR-ee-oh-type", "Picture of a person's chromosomes arranged in pairs, used to find abnormalities (kary/o = nucleus).", "chromosome picture of a cell", "pg", "lab", []],
["labia majora", "LAY-bee-ah mah-JOR-ah", "Two outer folds of skin of the vulva.", "outer lips of the vulva", "fm", "body", []],
["labia minora", "LAY-bee-ah mih-NOR-ah", "Two smaller inner folds of the vulva.", "inner lips of the vulva", "fm", "body", []],
["labor", "LAY-bor", "Process of birth in three stages: dilation, expulsion and placental stage.", "labour", "pg", "phys", []],
["lactation", "lak-TAY-shun", "Production and secretion of milk (lact/o, galact/o = milk).", "breastfeeding", "pg", "phys", []],
["lactiferous ducts", "lak-TIF-er-us dukts", "Ducts that carry milk to the nipple (lact/o = milk).", "milk ducts", "fm", "body", []],
["laparoscopy", "lap-ah-ROS-koh-pee", "Visual examination of the abdomen and pelvis through a small incision (lapar/o = abdomen).", "looking inside the abdomen (laparoscopy)", "tx", "lab", []],
["last menstrual period", "last MEN-stroo-al PEER-ee-od", "First day of the last normal menstrual period, used to date a pregnancy.", "first day of last period", "pg", "lab", ["LMP"]],
["leiomyoma", "lye-oh-mye-OH-mah", "Benign tumor of smooth muscle of the uterus; fibroid.", "benign muscle tumour of the uterus", "ds", "dz", []],
["leukorrhea", "loo-koh-REE-ah", "White or yellowish vaginal discharge (leuk/o = white).", "white vaginal discharge", "ds", "sx", []],
["lochia", "LOH-kee-ah", "Vaginal discharge after childbirth.", "vaginal discharge after birth", "pg", "sx", []],
["lumpectomy", "lump-EK-toh-mee", "Removal of a breast tumor with a small margin of normal tissue.", "removal of a breast lump", "tx", "tx", []],
["luteinizing hormone", "LOO-tee-ih-nye-zing HOR-mohn", "Pituitary hormone that triggers ovulation and testosterone production.", "pituitary hormone that triggers ovulation", "lx", "phys", ["LH"]],
["mammary gland", "MAM-ah-ree gland", "The breast; gland that produces milk (mamm/o, mast/o = breast).", "milk-producing breast tissue", "fm", "body", []],
["mammography", "mam-OG-rah-fee", "X-ray of the breast to find tumors (mamm/o = breast).", "breast X-ray imaging", "tx", "lab", []],
["mammoplasty", "MAM-oh-plas-tee", "Surgical reshaping of the breast (reduction or augmentation).", "reconstructive breast surgery", "tx", "tx", []],
["mastectomy", "mas-TEK-toh-mee", "Surgical removal of a breast.", "removal of the breast", "tx", "tx", []],
["mastitis", "mas-TYE-tis", "Inflammation of the breast (mast/o = breast).", "inflammation of the breast", "lx", "dz", []],
["mastopexy", "MAS-toh-pek-see", "Surgical lifting and fixation of a sagging breast (-pexy = fixation).", "surgical breast lift", "tx", "tx", []],
["menarche", "meh-NAR-kee", "First menstrual period at puberty (-arche = beginning).", "first period", "fm", "phys", []],
["menometrorrhagia", "men-oh-met-roh-RAY-jee-ah", "Heavy bleeding during and between menstrual periods.", "heavy bleeding during and between periods", "ds", "sx", []],
["menopause", "MEN-oh-pawz", "Permanent end of menstrual periods, usually around age 50.", "permanent end of periods", "fm", "phys", []],
["menorrhagia", "men-oh-RAY-jee-ah", "Excessive or prolonged menstrual bleeding (-rrhagia = bursting forth).", "heavy periods", "ds", "sx", []],
["menstrual cycle", "MEN-stroo-al SYE-kul", "Monthly cycle of about 28 days: menstrual, proliferative (follicular), ovulation and secretory (luteal) phases.", "monthly ovarian and uterine cycle", "fm", "phys", []],
["menstruation", "men-stroo-AY-shun", "Monthly shedding of the uterine lining with bleeding (men/o = menses, month).", "monthly shedding of the uterine lining", "lx", "phys", []],
["metrorrhagia", "meh-troh-RAY-jee-ah", "Uterine bleeding between menstrual periods (metr/o = uterus).", "bleeding between periods", "ds", "sx", []],
["multigravida", "mul-tih-GRAV-ih-dah", "Woman who has been pregnant more than once (multi- = many).", "woman pregnant many times", "pg", "phys", []],
["multipara", "mul-TIP-ah-rah", "Woman who has given birth to two or more viable infants.", "woman who has given birth many times", "pg", "phys", []],
["myomectomy", "mye-oh-MEK-toh-mee", "Removal of a fibroid (myoma) while keeping the uterus.", "removal of a fibroid", "tx", "tx", []],
["myometrium", "mye-oh-MEE-tree-um", "Muscular middle layer of the uterine wall.", "muscle of the uterus", "fm", "body", []],
["Naegele rule", "NAY-geh-lee rool", "Way to estimate the due date: LMP minus 3 months plus 7 days (plus one year).", "Naegele’s rule", "pg", "lab", []],
["neonatal", "nee-oh-NAY-tal", "Pertaining to the newborn (neo- = new, nat/o = birth).", "relating to the newborn", "pg", "phys", ["NICU"]],
["neonate", "NEE-oh-nayt", "Newborn infant during the first 4 weeks of life (neo- = new, nat/o = birth).", "newborn", "pg", "phys", ["NB"]],
["neonatology", "nee-oh-nay-TOL-oh-jee", "Branch of medicine that treats newborns (neo- = new, nat/o = birth).", "care of newborns", "lx", "field", []],
["nullipara", "nul-IP-ah-rah", "Woman who has never given birth to a viable infant (nulli- = none).", "woman who has never given birth", "pg", "phys", []],
["obstetrician", "ob-steh-TRISH-un", "Physician who specializes in pregnancy and childbirth.", "doctor specialising in pregnancy and birth", "lx", "field", []],
["obstetrics", "ob-STET-riks", "Branch of medicine that cares for women during pregnancy, childbirth and after birth.", "care in pregnancy and birth", "lx", "field", ["OB"]],
["oligohydramnios", "ol-ih-goh-hye-DRAM-nee-os", "Too little amniotic fluid.", "too little amniotic fluid", "pg", "sx", []],
["oligomenorrhea", "ol-ih-goh-men-oh-REE-ah", "Scanty or infrequent menstrual flow (olig/o = scanty).", "scanty or infrequent periods", "ds", "sx", []],
["oligospermia", "ol-ih-goh-SPER-mee-ah", "Low number of sperm in the semen (olig/o = scanty).", "low sperm count", "ds", "sx", []],
["omphalitis", "om-fah-LYE-tis", "Inflammation of the navel in a newborn (omphal/o = navel).", "inflammation of the navel", "pg", "dz", []],
["oophorectomy", "oh-off-oh-REK-toh-mee", "Surgical removal of an ovary.", "removal of an ovary", "tx", "tx", []],
["oophoritis", "oh-off-oh-RYE-tis", "Inflammation of an ovary (oophor/o = ovary).", "inflammation of an ovary", "lx", "dz", []],
["oral contraceptive", "OR-al kon-trah-SEP-tiv", "Birth control pill of hormones that prevents ovulation.", "birth control pill", "tx", "tx", []],
["orchiectomy", "or-kee-EK-toh-mee", "Surgical removal of a testis; castration if both.", "removal of a testis", "tx", "tx", []],
["orchiopexy", "or-kee-oh-PEK-see", "Surgical fixation of an undescended testis in the scrotum (-pexy = fixation).", "surgical fixation of the testis", "tx", "tx", []],
["orchitis", "or-KYE-tis", "Inflammation of a testis (orchi/o = testis).", "inflammation of a testis", "lx", "dz", []],
["ovarian cyst", "oh-VAIR-ee-an sist", "Fluid-filled sac in or on the ovary.", "fluid-filled sac on the ovary", "ds", "dz", []],
["ovarian follicle", "oh-VAIR-ee-an FOL-ih-kul", "Small sac in the ovary in which an ovum matures; a mature one is a graafian follicle.", "sac in which an egg matures", "fm", "body", []],
["ovary", "OH-vah-ree", "One of two female gonads that make ova, estrogen and progesterone (oophor/o, ovari/o = ovary).", "female gonad", "fm", "body", []],
["ovulation", "ov-yoo-LAY-shun", "Release of a mature ovum from the ovary, about day 14 of the cycle.", "release of an egg", "fm", "phys", []],
["ovum", "OH-vum", "The female sex cell (egg cell); plural ova (ov/o, o/o = egg).", "egg cell", "lx", "phys", []],
["oxytocin", "ok-see-TOH-sin", "Pituitary hormone that makes the uterus contract in labor and releases milk; Pitocin is its drug form (-tocin = labor).", "hormone of labour contractions and milk let-down", "fm", "phys", []],
["Papanicolaou test", "pap-ah-NIK-oh-low test", "Pap smear: cells scraped from the cervix and examined to find cancer and dysplasia.", "Pap smear", "tx", "lab", ["Pap"]],
["para", "PAIR-ah", "Number of pregnancies that ended in a viable birth (P1, P2) (-para = bear, give birth).", "number of births", "pg", "phys", ["P"]],
["parturition", "par-tyoo-RISH-un", "Act of giving birth; labor and delivery (-tocia = labor).", "Childbirth", "pg", "phys", []],
["pelvic examination", "PEL-vik eg-zam-ih-NAY-shun", "Examination of the vagina, cervix and pelvic organs, often with a speculum.", "internal examination of the female organs", "tx", "lab", []],
["pelvic inflammatory disease", "PEL-vik in-FLAM-ah-tor-ee dih-ZEEZ", "Infection of the uterus, tubes and ovaries, often from gonorrhea or chlamydia.", "infection of the uterus, tubes and ovaries", "ds", "dz", ["PID"]],
["pelvic ultrasonography", "PEL-vik ul-trah-son-OG-rah-fee", "Sound-wave imaging of the pelvic organs or the fetus.", "pelvic ultrasound", "tx", "lab", ["US"]],
["pelvimetry", "pel-VIM-eh-tree", "Measurement of the size of the pelvis to see if a baby can pass through.", "measuring the pelvis", "tx", "lab", []],
["penis", "PEE-nis", "Male organ of urination and sexual intercourse (pen/o, phall/o).", "male organ", "ml", "body", []],
["perimenopause", "pair-ih-MEN-oh-pawz", "Years leading up to menopause with irregular periods and hot flashes.", "years leading up to the last period", "fm", "phys", []],
["perimetrium", "pair-ih-MEE-tree-um", "Outer serous layer of the uterus.", "outer layer of the uterus", "fm", "body", []],
["perineum", "pair-ih-NEE-um", "Area between the vaginal opening and the anus (perine/o).", "area between the genitals and anus", "fm", "body", []],
["phimosis", "fye-MOH-sis", "Tight foreskin that cannot be pulled back over the glans.", "tight foreskin", "ds", "dz", []],
["placenta", "plah-SEN-tah", "Organ in the uterus that exchanges oxygen, food and wastes between mother and fetus and makes hormones.", "pairs", "pg", "body", []],
["placenta previa", "plah-SEN-tah PREE-vee-ah", "Placenta attached low in the uterus, near or over the cervix; causes painless bleeding.", "placenta lying over the cervix", "ds", "dz", []],
["polycystic ovary syndrome", "pol-ee-SIS-tik OH-vah-ree SIN-drohm", "Hormonal disorder with many ovarian cysts, irregular periods and excess androgens.", "hormonal disorder with many ovarian cysts", "ds", "dz", ["PCOS"]],
["polyhydramnios", "pol-ee-hye-DRAM-nee-os", "Too much amniotic fluid.", "too much amniotic fluid", "pg", "sx", []],
["postmenopausal", "post-men-oh-PAW-zal", "Occurring after menopause.", "after the last period", "fm", "phys", []],
["postpartum", "post-PAR-tum", "After childbirth.", "after delivery", "pg", "phys", []],
["preeclampsia", "pree-ee-KLAMP-see-ah", "Pregnancy-induced high blood pressure with protein in the urine and swelling.", "pregnancy hypertension with protein in the urine", "ds", "dz", ["PIH"]],
["pregnancy", "PREG-nan-see", "Condition of carrying a developing embryo or fetus; gestation (-cyesis = pregnancy).", "carrying a developing baby", "pg", "phys", []],
["pregnancy test", "PREG-nan-see test", "Test of urine or blood for hCG.", "test for hCG", "tx", "lab", []],
["premature rupture of membranes", "pree-mah-CHUR RUP-chur ov MEM-braynz", "Breaking of the amniotic sac before labor begins.", "waters breaking before labour", "ds", "sx", ["PROM"]],
["premenstrual syndrome", "pree-MEN-stroo-al SIN-drohm", "Physical and emotional symptoms in the days before menstruation.", "symptoms in the days before a period", "ds", "dz", ["PMS"]],
["prenatal", "pree-NAY-tal", "Before birth (pre- = before, nat/o = birth).", "before birth (during pregnancy)", "pg", "phys", []],
["prepuce", "PREE-pyoos", "Fold of skin that covers the glans penis; foreskin.", "foreskin", "ml", "body", []],
["presentation", "prez-en-TAY-shun", "The part of the fetus that comes first into the birth canal, usually the head (cephalic).", "part of the fetus leading into the pelvis", "pg", "phys", []],
["priapism", "PRYE-ah-pizm", "Prolonged, painful erection not caused by sexual desire; an emergency.", "prolonged painful erection", "ds", "dz", []],
["primigravida", "prye-mih-GRAV-ih-dah", "Woman pregnant for the first time (primi- = first).", "woman in her first pregnancy", "pg", "phys", []],
["progesterone", "proh-JES-ter-ohn", "Hormone of the corpus luteum and placenta that prepares and maintains the uterine lining for pregnancy.", "hormone that maintains the uterine lining", "lx", "phys", []],
["prostate cancer", "PROS-tayt KAN-ser", "Malignant tumor of the prostate, common in men over 50; screened with PSA and DRE.", "malignancy of the gland below the bladder", "ds", "dz", []],
["prostate gland", "PROS-tayt gland", "Gland around the urethra below the bladder that adds fluid to semen (prostat/o).", "gland around the start of the male urethra", "ml", "body", []],
["prostate-specific antigen", "PROS-tayt speh-SIF-ik AN-tih-jen", "Blood test used to screen for prostate cancer.", "blood marker of prostate disease", "tx", "lab", ["PSA"]],
["prostatectomy", "pros-tah-TEK-toh-mee", "Surgical removal of all or part of the prostate.", "removal of the prostate", "tx", "tx", []],
["prostatic", "pros-TAT-ik", "Pertaining to the prostate gland.", "of the prostate", "ml", "body", []],
["prostatitis", "pros-tah-TYE-tis", "Inflammation of the prostate gland.", "inflammation of the prostate", "ds", "dz", []],
["puberty", "PYOO-ber-tee", "Period when the sex organs mature and secondary sex characteristics appear.", "stage of sexual maturation", "ml", "phys", []],
["puerperium", "pyoo-er-PEER-ee-um", "About 6 weeks after birth during which the uterus returns to normal size.", "six weeks after childbirth", "pg", "phys", []],
["pyosalpinx", "pye-oh-SAL-pinks", "Pus in a uterine tube (py/o = pus).", "pus in a fallopian tube", "ds", "dz", []],
["rectocele", "REK-toh-seel", "Protrusion of the rectum into the vaginal wall.", "rectum bulging into the vagina", "ds", "dz", []],
["rectouterine pouch", "rek-toh-YOO-ter-in powch", "Space between the uterus and rectum; cul-de-sac (culd/o).", "pouch between the uterus and rectum", "fm", "body", []],
["reproductive system", "ree-proh-DUK-tiv SIS-tem", "The organs that produce sex cells and hormones and allow conception, pregnancy and birth.", "organs that produce offspring", "lx", "body", []],
["retroversion", "ret-roh-VER-zhun", "Abnormal backward tilting of the uterus.", "backward-tilted uterus", "ds", "sx", []],
["Rh incompatibility", "ar-aych in-kom-pat-ih-BIL-ih-tee", "Rh-negative mother makes antibodies against an Rh-positive fetus; causes hemolytic disease of the newborn.", "blood-group conflict between mother and fetus", "ds", "dz", ["HDN"]],
["salpingectomy", "sal-pin-JEK-toh-mee", "Surgical removal of a uterine tube.", "removal of a fallopian tube", "tx", "tx", []],
["salpingitis", "sal-pin-JYE-tis", "Inflammation of a uterine (fallopian) tube (salping/o = tube).", "inflammation of a fallopian tube", "lx", "dz", []],
["salpingo-oophorectomy", "sal-ping-goh-oh-off-oh-REK-toh-mee", "Removal of a uterine tube and ovary; bilateral when both sides (BSO).", "removal of a tube and ovary", "tx", "tx", ["BSO"]],
["scrotum", "SKROH-tum", "Sac of skin that holds the testes outside the body to keep them cooler (osche/o, scrot/o).", "skin pouch holding the testes", "ml", "body", []],
["semen", "SEE-men", "Thick fluid of sperm and gland secretions released at ejaculation (semin/o).", "fluid of sperm and gland secretions", "ml", "phys", []],
["semen analysis", "SEE-men ah-NAL-ih-sis", "Test of sperm count, shape and motility, used in infertility.", "laboratory test of a sperm sample", "tx", "lab", []],
["seminal vesicles", "SEM-ih-nal VES-ih-kulz", "Two glands behind the bladder that add fluid to semen (vesicul/o).", "glands adding fructose-rich fluid to sperm", "ml", "body", []],
["seminiferous tubules", "sem-ih-NIF-er-us TOO-byoolz", "Coiled tubes inside the testis where sperm are made.", "coiled sperm-making tubes of the testis", "ml", "body", []],
["sexually transmitted infection", "SEK-shoo-ah-lee trans-MIT-ed in-FEK-shun", "Infection spread by sexual contact; formerly venereal disease.", "infection passed by sexual contact", "ds", "inf", ["STI", "STD", "VD"]],
["speculum", "SPEK-yoo-lum", "Instrument that holds the vagina open for examination.", "instrument holding the vaginal walls apart", "tx", "lab", []],
["spermatic", "sper-MAT-ik", "Pertaining to sperm.", "relating to sperm", "ml", "phys", []],
["spermatic cord", "sper-MAT-ik kord", "Cord of vas deferens, vessels and nerves that suspends the testis.", "bundle carrying the vas deferens and vessels", "ml", "body", []],
["spermatocele", "SPER-mah-toh-seel", "Cyst of the epididymis containing sperm.", "sperm-filled cyst near the testis", "ds", "dz", []],
["spermatogenesis", "sper-mah-toh-JEN-eh-sis", "Formation of sperm in the seminiferous tubules (-genesis = formation).", "sperm production", "ml", "phys", []],
["spermatozoon", "sper-mah-toh-ZOH-on", "The male sex cell (sperm); plural spermatozoa (spermat/o, sperm/o = sperm).", "male sex cell", "lx", "phys", []],
["spermicide", "SPER-mih-syde", "Agent that kills sperm (-cide = killing).", "chemical that kills sperm", "tx", "tx", []],
["spontaneous abortion", "spon-TAY-nee-us ah-BOR-shun", "Loss of a pregnancy before the fetus can survive; miscarriage.", "miscarriage", "ds", "dz", ["AB"]],
["stillbirth", "STIL-berth", "Birth of a dead fetus after 20 weeks of pregnancy.", "birth of a dead baby after week 20", "ds", "dz", ["SB"]],
["syphilis", "SIF-ih-lis", "Bacterial STI that begins with a painless chancre and can spread to the whole body.", "STI caused by Treponema", "ds", "inf", ["VDRL"]],
["testicular", "tes-TIK-yoo-lar", "Pertaining to the testes.", "relating to the testis", "ml", "body", []],
["testicular cancer", "tes-TIK-yoo-lar KAN-ser", "Malignant tumor of the testis, most common in young men.", "malignancy of the male gonad", "ds", "dz", ["TSE"]],
["testicular torsion", "tes-TIK-yoo-lar TOR-shun", "Twisting of the spermatic cord that cuts off blood to the testis; a surgical emergency.", "twisting of the spermatic cord", "ds", "dz", []],
["testis", "TES-tis", "One of two male gonads in the scrotum that make sperm and testosterone; testicle; plural testes (orchi/o, orchid/o, test/o).", "male gonad", "ml", "body", []],
["testosterone", "tes-TOS-teh-rohn", "Main male sex hormone made by the testes.", "main male hormone", "lx", "phys", []],
["total abdominal hysterectomy", "TOH-tal ab-DOM-ih-nal his-ter-EK-toh-mee", "Removal of the uterus and cervix through an abdominal incision.", "removal of uterus and cervix through the abdomen", "tx", "tx", ["TAH"]],
["toxic shock syndrome", "TOK-sik shok SIN-drohm", "Severe bacterial infection linked to tampon use, with fever, rash and shock.", "toxin illness linked to tampons", "ds", "dz", ["TSS"]],
["transurethral resection of the prostate", "trans-yoo-REE-thral ree-SEK-shun ov the PROS-tayt", "Removal of prostate tissue through the urethra with a resectoscope.", "prostate removal through the urethra", "tx", "tx", ["TURP"]],
["trichomoniasis", "trik-oh-moh-NYE-ah-sis", "STI caused by a protozoan, with frothy vaginal discharge.", "parasitic vaginal infection", "ds", "inf", []],
["trimester", "TRYE-mes-ter", "One of three periods of about 3 months each in pregnancy.", "third of a pregnancy", "pg", "phys", []],
["tubal ligation", "TOO-bal lye-GAY-shun", "Cutting and tying the uterine tubes for permanent sterilization.", "tying the fallopian tubes", "tx", "tx", []],
["umbilical", "um-BIL-ih-kal", "Pertaining to the navel or umbilical cord.", "relating to the navel", "pg", "body", []],
["umbilical cord", "um-BIL-ih-kal kord", "Cord with two arteries and one vein that connects the fetus to the placenta (omphal/o, umbilic/o = navel).", "cord linking fetus and placenta", "pg", "body", []],
["urethra", "yoo-REE-thrah", "Tube that carries urine and, in males, semen out of the body (urethr/o).", "tube carrying urine (and semen) out", "ml", "body", []],
["urologist", "yoo-ROL-oh-jist", "Physician who treats the urinary tract and the male reproductive system.", "urinary tract specialist", "lx", "field", []],
["uterine prolapse", "YOO-ter-in PROH-laps", "Downward displacement of the uterus into the vagina; hysteroptosis.", "womb dropping into the vagina", "ds", "dz", []],
["uterine tube", "YOO-ter-in toob", "Tube that carries the ovum from the ovary to the uterus; also called fallopian tube or oviduct (salping/o = tube).", "tube from ovary to uterus", "fm", "body", []],
["uterus", "YOO-ter-us", "Hollow muscular organ in which the fetus develops; womb (hyster/o, metr/o, uter/o = uterus).", "womb", "fm", "body", []],
["vagina", "vah-JYE-nah", "Muscular canal from the cervix to the outside of the body; birth canal (colp/o, vagin/o = vagina).", "birth canal", "fm", "body", []],
["vaginal birth after cesarean", "VAJ-ih-nal berth AF-ter seh-ZAIR-ee-an", "Normal vaginal delivery in a woman who had a previous C-section.", "vaginal birth after caesarean", "tx", "tx", ["VBAC"]],
["vaginitis", "vaj-ih-NYE-tis", "Inflammation of the vagina; colpitis.", "inflammation of the vagina", "ds", "dz", []],
["varicocele", "VAIR-ih-koh-seel", "Enlarged, twisted veins of the spermatic cord (varic/o = dilated vein).", "dilated veins above the testis", "ds", "dz", []],
["vas deferens", "vas DEF-er-enz", "Duct that carries sperm from the epididymis to the urethra; ductus deferens (vas/o = vessel, duct).", "duct carrying sperm from the epididymis", "ml", "body", []],
["vasectomy", "vah-SEK-toh-mee", "Removal of a segment of each vas deferens for male sterilization.", "cutting the sperm ducts", "tx", "tx", []],
["vasovasostomy", "vas-oh-vah-SOS-toh-mee", "Reconnecting the cut ends of the vas deferens to reverse a vasectomy.", "rejoining the cut vas deferens", "tx", "tx", []],
["vulva", "VUL-vah", "The external female genitalia (vulv/o, episi/o = vulva).", "external female genitals", "fm", "body", []],
["zygote", "ZYE-goht", "The single cell formed when a sperm fertilizes an ovum.", "fertilized egg", "lx", "phys", []]];
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
    ['a-, an-', ['an', 'a'], 'without, not', "without, lacking", '*'],
    ['ante-', ['ante'], 'before', "before", 'pg'],
    ['bi-', ['bi'], 'two, both', "two", 'tx'],
    ['dys-', ['dys'], 'painful, difficult', "painful, difficult", 'ds'],
    ['ec-', ['ec'], 'out, outside', "outside", 'ds'],
    ['endo-', ['endo'], 'within', "within", 'fm'],
    ['epi-', ['epi'], 'upon, above', "on, over", 'ml'],
    ['hyper-', ['hyper'], 'excessive', "excessive", '*'],
    ['hypo-', ['hypo'], 'below, deficient', "below, low", 'ds'],
    ['in-', ['in'], 'not', "not", 'ds'],
    ['intra-', ['intra'], 'within', "within", 'pg'],
    ['multi-', ['multi'], 'many', "many", 'pg'],
    ['neo-', ['neo'], 'new', "new", 'pg'],
    ['nulli-', ['nulli'], 'none', "none", 'pg'],
    ['peri-', ['peri'], 'around', "around", 'fm'],
    ['poly-', ['poly'], 'many, much', "many, much", 'ds'],
    ['post-', ['post'], 'after', "after", 'pg'],
    ['pre-', ['pre'], 'before', "before", 'pg'],
    ['primi-', ['primi'], 'first', "first", 'pg'],
    ['trans-', ['trans'], 'across, through', "through", 'tx'],
    // ریشه‌های عمومی
    ['gynec/o', ['gynec'], 'woman, female', "woman", 'lx'],
    ['andr/o', ['andr'], 'male', "Male", 'lx'],
    ['gonad/o', ['gonad'], 'sex glands', "sex gland", 'lx'],
    ['genit/o', ['genit'], 'reproductive organs', "genitals", 'lx'],
    ['estr/o', ['estr'], 'female', "female", 'lx'],
    ['obstetr/o', ['obstetr'], 'midwife', "pregnancy and childbirth care", 'lx'],
    ['ur/o', ['ur'], 'urine, urinary tract', "urine", 'lx'],
    ['cyst/o', ['cyst'], 'bladder, sac', "bladder, sac", 'ds'],
    ['hydr/o', ['hydr'], 'water', "water", 'ds'],
    ['py/o', ['py'], 'pus', "pus", 'ds'],
    ['leuk/o', ['leuk'], 'white', "white", 'ds'],
    ['olig/o', ['olig'], 'scanty, few', "low", 'ds'],
    ['crypt/o', ['crypt'], 'hidden', "hidden", 'ds'],
    ['varic/o', ['varic'], 'dilated vein', "dilated vein", 'ds'],
    ['my/o', ['my'], 'muscle', "muscle", 'fm'],
    ['lapar/o', ['lapar'], 'abdomen', "abdomen", 'tx'],
    ['culd/o', ['culd'], 'cul-de-sac', "rectouterine pouch", 'tx'],
    ['lei/o', ['lei'], 'smooth', "smooth", 'ds'],
    ['top/o', ['top'], 'place', "Location", 'ds'],
    ['pelv/i, pelv/o', ['pelv'], 'pelvis', "pelvis", 'tx'],
    // زنانه
    ['hyster/o, metr/o, uter/o', ['hyster', 'metr', 'uter'], 'uterus', "uterus", 'lx'],
    ['oophor/o, ovari/o', ['oophor', 'ovari'], 'ovary', "ovary", 'lx'],
    ['o/o, ov/o', ['ov'], 'egg, ovum', "egg cell", 'fm'],
    ['salping/o', ['salping'], 'uterine tube', "fallopian tube", 'lx'],
    ['cervic/o', ['cervic'], 'cervix', "cervix", 'fm'],
    ['colp/o, vagin/o', ['colp', 'vagin'], 'vagina', "birth canal", 'lx'],
    ['vulv/o, episi/o', ['vulv', 'episi'], 'vulva', "vulva", 'fm'],
    ['perine/o', ['perine'], 'perineum', "perineum", 'fm'],
    ['mamm/o, mast/o', ['mamm', 'mast'], 'breast', "breast", 'lx'],
    ['lact/o, galact/o', ['galact', 'lact'], 'milk', "milk", 'pg'],
    ['men/o, menstru/o', ['menstru', 'men'], 'menses, menstruation', "menstruation", 'lx'],
    ['hymen/o', ['hymen'], 'hymen', "hymen", 'fm'],
    ['ovul/o', ['ovul'], 'ovulation', "ovulation", 'fm'],
    // مردانه
    ['orchi/o, orchid/o, test/o', ['orchid', 'orchi', 'orch', 'test'], 'testis', "testis", 'lx'],
    ['testicul/o', ['testicul'], 'testis', "testis", 'ml'],
    ['osche/o, scrot/o', ['osche', 'scrot'], 'scrotum', "scrotum", 'ml'],
    ['epididym/o', ['epididym'], 'epididymis', "epididymis", 'ml'],
    ['vas/o', ['vas'], 'vessel, vas deferens', "duct, vessel", 'ml'],
    ['vesicul/o', ['vesicul'], 'seminal vesicle', "seminal vesicle", 'ml'],
    ['prostat/o', ['prostat'], 'prostate gland', "prostate", 'lx'],
    ['urethr/o', ['urethr'], 'urethra', "urethra", 'ml'],
    ['balan/o', ['balan'], 'glans penis', "glans penis", 'ml'],
    ['pen/o, phall/o', ['pen', 'phall'], 'penis', "penis", 'ml'],
    ['spermat/o, sperm/o', ['spermat', 'sperm'], 'sperm', "sperm", 'lx'],
    ['semin/o', ['semin'], 'semen', "semen", 'ml'],
    // بارداری و زایمان
    ['embry/o', ['embry'], 'embryo', "developing young, weeks 1 to 8", 'pg'],
    ['fet/o', ['fet'], 'fetus', "baby", 'pg'],
    ['amni/o', ['amni'], 'amnion', "amnion", 'pg'],
    ['chori/o', ['chori'], 'chorion', "chorion", 'pg'],
    ['nat/o', ['nat'], 'birth', "birth", 'pg'],
    ['grav/i', ['grav'], 'pregnant', "pregnant", 'pg'],
    ['par/o', ['par'], 'bear, give birth', "to give birth", 'pg'],
    ['omphal/o, umbilic/o', ['omphal', 'umbilic'], 'navel (umbilicus)', "the navel", 'pg'],
    ['toc/o', ['toc'], 'labor, birth', "Childbirth", 'pg'],
    ['kary/o', ['kary'], 'nucleus', "cell’s control centre", 'pg'],
    ['pareun/o', ['pareun'], 'sexual intercourse', "intercourse", 'ds'],
    // پسوندها
    ['-al, -ic, -ar, -ary, -ine, -ile, -ous', ['ary', 'ial', 'ine', 'ile', 'ous', 'ic', 'al', 'ar'], 'pertaining to', "pertaining to", '*'],
    ['-is, -um, -us, -a, -on, -x', ['is', 'um', 'us', 'on', 'x', 'a'], 'noun ending', "noun ending", '*'],
    ['-ia, -y, -ism', ['ism', 'ia', 'y'], 'condition', "condition", '*'],
    ['-ist, -logist', ['logist', 'ist'], 'specialist', "specialist", 'lx'],
    ['-ian', ['ian'], 'specialist', "specialist", 'lx'],
    ['-logy', ['logy'], 'study of', "study of", 'lx'],
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-osis, -iasis', ['iasis', 'osis', 'sis'], 'abnormal condition', "abnormal condition", '*'],
    ['-oma', ['oma'], 'tumor, mass', "tumour, mass", '*'],
    ['-rrhea', ['rrhea'], 'flow, discharge', "flow, discharge", 'ds'],
    ['-rrhagia', ['rrhagia'], 'bursting forth of blood', "bleeding", 'ds'],
    ['-cele', ['cele'], 'hernia, swelling', "hernia, swelling", 'ds'],
    ['-spermia', ['spermia'], 'condition of sperm', "condition of sperm", 'ds'],
    ['-salpinx', ['salpinx'], 'uterine tube', "fallopian tube", 'ds'],
    ['-arche', ['arche'], 'beginning', "beginning", 'fm'],
    ['-genesis', ['genesis'], 'formation, producing', "Build", 'ml'],
    ['-gen', ['gen'], 'producing', "producing", 'lx'],
    ['-cyesis', ['cyesis'], 'pregnancy', "pregnancy", 'pg'],
    ['-gravida', ['gravida'], 'pregnant woman', "a pregnant woman", 'pg'],
    ['-para', ['para'], 'woman who has given birth', "woman who has given birth", 'pg'],
    ['-partum', ['partum'], 'childbirth, labor', "Childbirth", 'pg'],
    ['-tocia', ['tocia'], 'labor, birth', "Childbirth", 'ds'],
    ['-emesis', ['emesis'], 'vomiting', "vomiting", 'ds'],
    ['-plasia', ['plasia'], 'formation, growth', "growth, formation", 'ds'],
    ['-pathy', ['pathy'], 'disease', "disease", 'ds'],
    ['-algia', ['algia'], 'pain', "pain", 'ds'],
    ['-ectomy', ['ectomy'], 'surgical removal', "surgical removal", '*'],
    ['-tomy', ['tomy'], 'incision', "incision", '*'],
    ['-stomy', ['stomy'], 'new opening', "new opening", 'tx'],
    ['-pexy', ['pexy'], 'surgical fixation', "surgical fixation", 'tx'],
    ['-plasty', ['plasty'], 'surgical repair', "surgical repair", 'tx'],
    ['-rrhaphy', ['rrhaphy'], 'suture', "stitch", 'tx'],
    ['-scopy', ['scopy'], 'visual examination', "viewing with an instrument", 'tx'],
    ['-graphy', ['graphy'], 'process of recording', "process of recording", 'tx'],
    ['-centesis', ['centesis'], 'surgical puncture', "puncture to draw fluid", 'tx'],
    ['-metry', ['metry'], 'measurement', "measurement", 'tx'],
    ['-cide', ['cide'], 'killing', "killing", 'tx']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['AB', 'abortion', "end of a pregnancy before viability", 'ds'],
    ['AFP', 'alpha-fetoprotein', "fetal protein measured in pregnancy", 'tx'],
    ['AI', 'artificial insemination', "artificial insemination", 'tx'],
    ['AIDS', 'acquired immunodeficiency syndrome', "late-stage HIV disease", 'ds'],
    ['ART', 'assisted reproductive technology', "methods helping conception", 'tx'],
    ['BOW', 'bag of waters', "amniotic sac", 'pg'],
    ['BPH', 'benign prostatic hyperplasia', "benign prostatic hyperplasia", 'ds'],
    ['BRCA1, BRCA2', 'breast cancer genes 1 and 2', "inherited breast cancer genes", 'ds'],
    ['BSE', 'breast self-examination', "breast self-examination", 'tx'],
    ['BSO', 'bilateral salpingo-oophorectomy', "removal of both tubes and ovaries", 'tx'],
    ['BV', 'bacterial vaginosis', "vaginal bacterial imbalance", 'ds'],
    ['CIN', 'cervical intraepithelial neoplasia', "precancerous change in cervical cells", 'ds'],
    ['CPD', 'cephalopelvic disproportion', "cephalopelvic disproportion", 'ds'],
    ['CS, C-section', 'cesarean section', "caesarean section", 'tx'],
    ['CVS', 'chorionic villus sampling', "chorionic villus sampling", 'tx'],
    ['Cx', 'cervix', "cervix", 'fm'],
    ['D&C', 'dilation and curettage', "dilation and curettage", 'tx'],
    ['DRE', 'digital rectal examination', "digital rectal examination", 'tx'],
    ['DUB', 'dysfunctional uterine bleeding', "abnormal uterine bleeding without a structural cause", 'ds'],
    ['ED', 'erectile dysfunction', "erectile dysfunction", 'ds'],
    ['EDC', 'estimated date of confinement', "estimated date of delivery", 'pg'],
    ['EDD', 'estimated date of delivery', "estimated date of delivery", 'pg'],
    ['FHR', 'fetal heart rate', "fetal heart rate", 'pg'],
    ['FHT', 'fetal heart tones', "fetal heart sounds", 'pg'],
    ['FSH', 'follicle-stimulating hormone', "follicle-stimulating hormone", 'lx'],
    ['G', 'gravida (number of pregnancies)', "number of pregnancies", 'pg'],
    ['GA', 'gestational age', "gestational age", 'pg'],
    ['GC', 'gonococcus (gonorrhea)', "bacterium causing gonorrhoea", 'ds'],
    ['GIFT', 'gamete intrafallopian transfer', "gamete intrafallopian transfer", 'tx'],
    ['GYN', 'gynecology; gynecologist', "gynaecology; gynaecologist", 'lx'],
    ['hCG', 'human chorionic gonadotropin', "hormone detected in pregnancy tests", 'pg'],
    ['HDN', 'hemolytic disease of the newborn', "haemolytic disease of the newborn", 'ds'],
    ['HIV', 'human immunodeficiency virus', "human immunodeficiency virus", 'ds'],
    ['HPV', 'human papillomavirus', "virus causing warts and cervical cancer", 'ds'],
    ['HRT', 'hormone replacement therapy', "hormone replacement therapy", 'tx'],
    ['HSV', 'herpes simplex virus', "virus causing cold sores and genital blisters", 'ds'],
    ['IUD', 'intrauterine device', "intrauterine device", 'tx'],
    ['IUP', 'intrauterine pregnancy', "intrauterine pregnancy", 'pg'],
    ['IVF', 'in vitro fertilization', "in vitro fertilization", 'tx'],
    ['LEEP', 'loop electrosurgical excision procedure', "cutting a cervical sample with a heated wire loop", 'tx'],
    ['LH', 'luteinizing hormone', "luteinizing hormone", 'lx'],
    ['LMP', 'last menstrual period', "first day of last period", 'pg'],
    ['NB', 'newborn', "newborn", 'pg'],
    ['NGU', 'nongonococcal urethritis', "urethritis not caused by gonorrhoea", 'ds'],
    ['NICU', 'neonatal intensive care unit', "neonatal intensive care", 'pg'],
    ['NSVD', 'normal spontaneous vaginal delivery', "normal spontaneous vaginal delivery", 'pg'],
    ['OB', 'obstetrics; obstetrician', "obstetrics; obstetrician", 'lx'],
    ['OB-GYN', 'obstetrics and gynecology', "obstetrics and gynaecology", 'lx'],
    ['P', 'para (number of viable births)', "number of births", 'pg'],
    ['Pap', 'Papanicolaou test', "Pap smear", 'tx'],
    ['PCOS', 'polycystic ovary syndrome', "polycystic ovary syndrome", 'ds'],
    ['PID', 'pelvic inflammatory disease', "pelvic inflammatory disease", 'ds'],
    ['PIH', 'pregnancy-induced hypertension', "high blood pressure caused by pregnancy", 'ds'],
    ['PMS', 'premenstrual syndrome', "premenstrual syndrome", 'ds'],
    ['PROM', 'premature rupture of membranes', "premature rupture of membranes", 'ds'],
    ['PSA', 'prostate-specific antigen', "prostate-specific antigen", 'tx'],
    ['SB', 'stillbirth', "stillbirth", 'ds'],
    ['STD', 'sexually transmitted disease', "sexually transmitted disease", 'ds'],
    ['STI', 'sexually transmitted infection', "sexually transmitted infection", 'ds'],
    ['SVD', 'spontaneous vaginal delivery', "normal spontaneous vaginal delivery", 'pg'],
    ['TAH', 'total abdominal hysterectomy', "total abdominal hysterectomy", 'tx'],
    ['TRAM', 'transverse rectus abdominis muscle (flap)', "breast rebuilt with abdominal muscle tissue", 'tx'],
    ['TSE', 'testicular self-examination', "testicular self-examination", 'tx'],
    ['TSS', 'toxic shock syndrome', "toxic shock syndrome", 'ds'],
    ['TURP', 'transurethral resection of the prostate', "prostate removal through the urethra", 'tx'],
    ['TVH', 'total vaginal hysterectomy', "removal of the uterus through the vagina", 'tx'],
    ['US', 'ultrasound, ultrasonography', "ultrasound scan", 'tx'],
    ['VBAC', 'vaginal birth after cesarean', "vaginal birth after caesarean", 'tx'],
    ['VD', 'venereal disease', "sexually transmitted disease (older term)", 'ds'],
    ['VDRL', 'Venereal Disease Research Laboratory (syphilis test)', "screening blood test for syphilis", 'tx'],
    ['ZIFT', 'zygote intrafallopian transfer', "zygote intrafallopian transfer", 'tx'],
    ['y/o', 'years old', "years old", 'lx']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'body', icon: '🌸', name: "Structures of the reproductive system" },
    { id: 'phys', icon: '🔁', name: "Function, hormones and pregnancy" },
    { id: 'field', icon: '🎓', name: "Specialties and specialists" },
    { id: 'dz', icon: '🩺', name: "Diseases" },
    { id: 'sx', icon: '🔍', name: "Signs" },
    { id: 'inf', icon: '🦠', name: "sexually transmitted infections" },
    { id: 'lab', icon: '🧪', name: "Diagnosis and tests" },
    { id: 'tx', icon: '💊', name: "Treatment, surgery and contraception" }
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
    return svg(360, 268, `${title("The reproductive system: female and male")}
      <rect x="6" y="30" width="170" height="200" rx="16" fill="#fdf0f4"/><rect x="184" y="30" width="170" height="200" rx="16" fill="#eef5fb"/>
      ${fu.b}<clipPath id="${cid}"><rect x="184" y="30" width="170" height="200" rx="16"/></clipPath><g clip-path="url(#${cid})">${m.b}</g>
      ${t(91, 52, 'female', { size: 11, fill: '#a3366a', w: 900 })}${t(269, 52, 'male', { size: 11, fill: '#1f6fa5', w: 900 })}
      ${f(91, 212, "ovary, tube, uterus, vagina", { size: 9, fill: INK, w: 700 })}${f(269, 222, "testis, duct, prostate, penis", { size: 9, fill: INK, w: 700 })}
      ${lab(91, 246, 'gonad: ovary', "female sex gland: ovary", { size: 9.5 })}${lab(269, 246, 'gonad: testis', "male sex gland: testis", { size: 9.5 })}`, "The reproductive system", fu.d + m.d);
  };

  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 18, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 129, fa, { size: 9.5, fill: c })}`;
    return svg(360, 192, `${title("One word = prefix + root + suffix")}
      ${part(8, 54, 'dys', '#1272a3', '#ddf1fb')}${part(68, 66, 'meno', '#b03e5c', '#fde6ec')}${part(140, 74, 'rrhea', '#3f8a05', '#e7f9d8')}
      ${br(8, 62, 'prefix', "prefix: painful", '#1272a3')}${br(68, 134, 'root', "root: menstruation", '#b03e5c')}${br(140, 214, 'suffix', "suffix: flow", '#3f8a05')}
      <rect x="226" y="40" width="126" height="40" rx="10" fill="#f8f6f5"/>${f(289, 57, "painful flow of", { size: 10.5, fill: '#3f8a05', w: 800 })}${f(289, 73, "menstruation", { size: 10.5, fill: INK, w: 800 })}
      <path d="M190 150 C150 176 96 176 44 150" stroke="#b03e5c" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M48 146 l-6 4 l7 3" stroke="#b03e5c" stroke-width="2" fill="none"/>
      ${f(140, 186, "Read the meaning from the end: suffix → prefix → root", { size: 10, fill: '#b03e5c', w: 700 })}`, "The anatomy of a medical word");
  };

  A['root-map-f'] = () => {
    const u = uterusFront(180, 76, 1.02);
    const R = (x1, y1, x2, y2, root, fa, side) => `${pin(x1, y1, x2, y2)}${t(side < 0 ? 8 : x2 + 4, y2 - 2, root, { size: 10.5, anchor: 'start', fill: '#a3366a', w: 900 })}${f(side < 0 ? 8 : x2 + 4, y2 + 12, fa, { size: 9, anchor: 'start', fill: INK })}`;
    return svg(360, 300, `${title("Map of female roots")}
      ${u.b}
      ${R(84, 128, 70, 170, 'oophor/o', "ovary", -1)}${R(160, 92, 70, 60, 'hyster/o, metr/o', "uterus", -1)}
      ${R(270, 84, 276, 48, 'salping/o', "fallopian tube", 1)}${R(180, 190, 236, 214, 'cervic/o', "cervix", 1)}
      ${R(180, 250, 236, 262, 'colp/o, vagin/o', "birth canal", 1)}${R(178, 120, 70, 230, 'endometri/o', "lining of the uterus", -1)}`, "The root map", u.d);
  };

  A['root-map-m'] = () => {
    const m = maleSag(190, 140, 1);
    const R = (x1, y1, x2, y2, root, fa, side) => `${pin(x1, y1, x2, y2)}${t(side < 0 ? 8 : x2 + 4, y2 - 2, root, { size: 10.5, anchor: 'start', fill: '#1f6fa5', w: 900 })}${f(side < 0 ? 8 : x2 + 4, y2 + 12, fa, { size: 9, anchor: 'start', fill: INK })}`;
    return svg(360, 300, `${title("Map of male roots")}
      ${m.b}
      ${R(176, 160, 70, 196, 'prostat/o', "prostate", -1)}${R(140, 258, 70, 278, 'orchi/o, test/o', "testis", -1)}
      ${R(152, 244, 250, 262, 'epididym/o', "epididymis", 1)}${R(196, 160, 250, 188, 'vas/o', "vas deferens", 1)}
      ${R(224, 122, 250, 70, 'vesicul/o', "seminal vesicle", 1)}${R(160, 198, 70, 130, 'urethr/o', "urethra", -1)}${R(160, 110, 70, 60, 'cyst/o', "bladder", -1)}`, "The root map", m.d);
  };

  A.twins = () => {
    const box = (x, y, c, bg, w1, m1, ex, ic) => `<rect x="${x}" y="${y}" width="164" height="86" rx="14" fill="${bg}"/>${t(x + 30, y + 50, ic, { size: 22 })}${t(x + 100, y + 32, w1, { size: 15, fill: c, w: 900 })}${f(x + 100, y + 52, m1, { size: 10.5, fill: INK, w: 800 })}${t(x + 100, y + 72, ex, { size: 9.5, fill: c, w: 800 })}`;
    return svg(360, 236, `${title("Tricky pairs")}
      ${box(10, 32, '#b03e5c', '#fde6ec', '-rrhea', "flow, discharge", 'amenorrhea', '💧')}${box(186, 32, '#c2413a', '#fde6e4', '-rrhagia', "heavy bleeding", 'menorrhagia', '🩸')}
      ${box(10, 126, '#8e6bd8', '#f3eafc', 'gravida', "pregnancies", 'G2', '🤰')}${box(186, 126, '#e8913a', '#fdeee3', 'para', "births", 'P1', '👶')}
      ${f(180, 228, "men/o is menstruation and metr/o is the uterus; one letter, two meanings", { size: 9.5, fill: MUTED, w: 700 })}`, "Look-alike words");
  };

  A.hormones = () => {
    const m = nid();
    return svg(360, 250, `${title("Sex hormones: orders from the pituitary")}
      <ellipse cx="180" cy="62" rx="40" ry="24" fill="#e8d7f7" stroke="#8e6bd8" stroke-width="1.4"/>${lab(180, 58, 'pituitary', "pituitary", { size: 10 })}
      ${arrow(m, 150, 86, 90, 140, '#8e6bd8', 2.4)}${arrow(m, 210, 86, 270, 140, '#8e6bd8', 2.4)}
      ${t(105, 110, 'FSH • LH', { size: 10.5, fill: '#6c4fd0', w: 900, sym: true })}${t(255, 110, 'FSH • LH', { size: 10.5, fill: '#6c4fd0', w: 900, sym: true })}
      <rect x="20" y="146" width="140" height="92" rx="14" fill="#fdf0f4"/><ellipse cx="90" cy="172" rx="26" ry="14" fill="${C.ova}" stroke="${C.ovaLine}"/>
      ${t(90, 200, 'ovary', { size: 10.5, w: 900 })}${t(90, 214, 'estrogen • progesterone', { size: 9, fill: '#a3366a', w: 800 })}${f(90, 229, "estrogen and progesterone", { size: 9, fill: INK })}
      <rect x="200" y="146" width="140" height="92" rx="14" fill="#eef5fb"/><ellipse cx="270" cy="172" rx="16" ry="20" fill="${C.testis}" stroke="${C.testisLine}"/>
      ${t(270, 200, 'testis', { size: 10.5, w: 900 })}${t(270, 214, 'testosterone', { size: 9, fill: '#1f6fa5', w: 800 })}${f(270, 229, "testosterone", { size: 9, fill: INK })}`, "Hormones", marker(m, '#8e6bd8'));
  };

  /* ================= دنیای ۱: دستگاه تناسلی زنانه ================= */
  A['female-front'] = () => {
    const u = uterusFront(180, 78, 1.05);
    return svg(360, 300, `${title("Uterus, tubes and ovaries (front view)")}
      ${u.b}
      ${pin(180, 76, 120, 36)}${lab(80, 34, 'fundus', "top of the uterus", { size: 9.5 })}
      ${pin(296, 82, 300, 46)}${lab(320, 34, 'uterine tube', "fallopian tube", { size: 9.5 })}
      ${pin(310, 128, 324, 162)}${lab(324, 174, 'fimbriae', "fimbriae", { size: 9.5 })}
      ${pin(276, 133, 270, 196)}${lab(276, 208, 'ovary', "ovary", { size: 9.5 })}
      ${pin(180, 120, 92, 206)}${lab(52, 204, 'endometrium', "lining of the uterus", { size: 9.5 })}
      ${pin(150, 140, 92, 170)}${lab(52, 166, 'myometrium', "uterine muscle", { size: 9.5 })}
      ${pin(180, 196, 100, 246)}${lab(60, 244, 'cervix', "cervix", { size: 9.5 })}
      ${pin(180, 262, 240, 270)}${lab(286, 266, 'vagina', "birth canal", { size: 9.5 })}`, "Uterus and adnexa", u.d);
  };

  A['female-sagittal'] = () => {
    const s = femaleSag(180, 174, 1);
    return svg(360, 320, `${title("Side section of the female pelvis (facing left)")}
      ${s.b}
      ${pin(114, 112, 66, 66)}${lab(46, 54, 'ovary', "ovary", { size: 10 })}
      ${pin(196, 120, 226, 50)}${lab(196, 44, 'uterus', "uterus", { size: 10 })}
      ${pin(110, 206, 40, 166)}${lab(48, 150, 'urinary bladder', "bladder", { size: 9.5 })}
      ${pin(72, 238, 40, 262)}${lab(48, 270, 'pubic bone', "pubic bone", { size: 9.5 })}
      ${pin(170, 262, 150, 300)}${lab(132, 300, 'vagina', "birth canal", { size: 9.5 })}
      ${pin(198, 216, 300, 214)}${lab(312, 206, 'cervix', "cervix", { size: 9.5 })}
      ${pin(252, 230, 300, 262)}${lab(312, 270, 'rectum', "the straight final section of the large bowel", { size: 9.5 })}
      ${pin(222, 186, 300, 146)}${lab(306, 128, 'rectouterine pouch', "pouch (cul-de-sac)", { size: 9 })}`, "Section of the female pelvis", s.d);
  };

  A['uterine-wall'] = () => {
    return svg(360, 240, `${title("The three layers of the uterine wall")}
      <rect x="20" y="40" width="200" height="34" fill="#f6c3cf"/><rect x="20" y="74" width="200" height="86" fill="${C.ut2}"/><rect x="20" y="160" width="200" height="40" fill="${C.endo}"/>
      ${[86, 100, 114, 128, 142].map(y => `<path d="M20 ${y} q50 -6 100 0 t100 0" stroke="#c4607d" stroke-width="1.4" fill="none" opacity=".6"/>`).join('')}
      ${[34, 64, 94, 124, 154, 184].map(x => `<path d="M${x} 200 q-4 -14 4 -26 q6 -8 0 -14" stroke="#d07a96" stroke-width="2" fill="none"/>`).join('')}
      <rect x="20" y="200" width="200" height="16" fill="#fff6f8"/>${f(120, 212, "uterine cavity", { size: 9, fill: MUTED })}
      ${pin(210, 56, 240, 56)}${lab(298, 52, 'perimetrium', "outer layer", { size: 10 })}
      ${pin(210, 116, 240, 116)}${lab(298, 112, 'myometrium', "uterine muscle; labour contractions", { size: 10 })}
      ${pin(210, 180, 240, 180)}${lab(298, 176, 'endometrium', "inner lining; shed every month", { size: 10 })}
      ${f(180, 234, "The prefix peri means around, myo muscle and endo inside", { size: 9, fill: MUTED, w: 700 })}`, "Uterine wall");
  };

  A['ovary-cycle'] = () => {
    const m = nid();
    const fol = (x, y, r, k) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff3e3" stroke="${C.ovaLine}" stroke-width="1.2"/>${k ? `<circle cx="${x + r * 0.3}" cy="${y - r * 0.2}" r="${r * 0.3}" fill="#fbd3dd" stroke="${C.utLine}" stroke-width=".8"/>` : ''}`;
    return svg(360, 258, `${title("The ovary: from follicle to corpus luteum")}<g transform="translate(0 18)">
      <ellipse cx="180" cy="120" rx="160" ry="78" fill="${C.ova}" stroke="${C.ovaLine}" stroke-width="1.6"/>
      ${fol(64, 120, 9, 1)}${fol(108, 90, 15, 1)}${fol(168, 70, 24, 1)}
      <path d="M232 52 L246 34" stroke="${C.ovaLine}" stroke-width="2"/>${ovum(258, 30, 9)}
      <ellipse cx="270" cy="128" rx="30" ry="24" fill="#f6d36a" stroke="#c99a1d" stroke-width="1.4"/>
      <ellipse cx="160" cy="160" rx="14" ry="10" fill="#ece3d6" stroke="#b7a68f"/>
      ${curve(m, 'M76 110 C86 98 94 94 100 92', '#a3366a', 1.6)}${curve(m, 'M122 84 C134 76 140 74 146 72', '#a3366a', 1.6)}${curve(m, 'M190 82 C210 96 236 110 246 116', '#a3366a', 1.6)}
      ${lab(80, 166, 'primary follicle', "primary follicle", { size: 9 })}${lab(196, 118, 'graafian follicle', "mature follicle", { size: 9 })}
      ${lab(300, 70, 'ovulation', "ovulation", { size: 9.5, fill: '#a3366a' })}
      ${lab(282, 168, 'corpus luteum', "corpus luteum; progesterone", { size: 9 })}${lab(160, 188, 'corpus albicans', "white scar body after the corpus luteum", { size: 8.5 })}</g>
      ${f(180, 250, "If fertilization does not happen, the corpus luteum breaks down after about 14 days and menstruation begins", { size: 8.8, fill: MUTED, w: 700 })}`, "Ovarian cycle", marker(m, '#a3366a'));
  };

  A['menstrual-cycle'] = () => {
    const X = d => 30 + d * 10.5;
    return svg(360, 262, `${title("The 28-day menstrual cycle")}
      <path d="M${X(0)} 110 C${X(2)} 110 ${X(4)} 120 ${X(5)} 120 C${X(9)} 110 ${X(13)} 92 ${X(14)} 88 C${X(18)} 76 ${X(24)} 64 ${X(26)} 70 C${X(27)} 84 ${X(28)} 104 ${X(28)} 110" fill="none" stroke="${C.ut2}" stroke-width="2"/>
      <path d="M${X(0)} 110 L${X(5)} 120 L${X(5)} 140 L${X(0)} 140Z" fill="#c2413a" opacity=".55"/>
      <path d="M${X(5)} 120 C${X(9)} 110 ${X(13)} 92 ${X(14)} 88 C${X(18)} 76 ${X(24)} 64 ${X(26)} 70 C${X(27)} 84 ${X(28)} 104 ${X(28)} 110 L${X(28)} 140 L${X(5)} 140Z" fill="${C.endo}"/>
      <path d="M${X(0)} 140 H${X(28)}" stroke="${LINE}" stroke-width="1.2"/>
      ${[0, 5, 14, 28].map(d => `<path d="M${X(d)} 140 v5" stroke="${LINE}"/>${t(X(d), 156, String(d), { size: 9, fill: MUTED, sym: true })}`).join('')}
      <path d="M${X(14)} 40 V140" stroke="#a3366a" stroke-width="1.4" stroke-dasharray="4 3"/>${ovum(X(14), 48, 7)}${t(X(14) + 14, 40, 'ovulation', { size: 9.5, fill: '#a3366a', anchor: 'start', w: 900 })}
      ${f(X(14) + 14, 54, "ovulation, day 14", { size: 8.5, anchor: 'start', fill: INK })}
      ${t(X(21), 108, 'endometrium', { size: 9, fill: '#b84e6e', w: 800 })}
      ${[[X(2.5), 'menstrual', "menstruation", '#c2413a'], [X(9.5), 'proliferative', "proliferative (follicular)", '#3d6fd6'], [X(21), 'secretory', "secretory (luteal)", '#17a398']].map(p => `${t(p[0], 184, p[1], { size: 9.5, fill: p[3], w: 900 })}${f(p[0], 198, p[2], { size: 8.5, fill: INK })}`).join('')}
      ${f(180, 226, "FSH grows the follicle; the LH surge triggers ovulation", { size: 9, fill: MUTED, w: 700 })}
      ${f(180, 244, "Estrogen builds the uterine lining and progesterone maintains it", { size: 9, fill: MUTED, w: 700 })}`, "menstrual cycle");
  };

  A.vulva = () => {
    const sh = nid();
    return svg(360, 290, `${title("Female external genitalia (diagram)")}
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
      ${pin(180, 50, 280, 44)}${lab(310, 40, 'mons pubis', "mons pubis", { size: 9 })}
      ${pin(180, 98, 70, 70)}${lab(46, 64, 'clitoris', "clitoris", { size: 9.5 })}
      ${pin(180, 126, 70, 112)}${lab(44, 106, 'urethral orifice', "urinary meatus", { size: 9 })}
      ${pin(180, 160, 70, 160)}${lab(44, 154, 'vaginal orifice', "vaginal opening", { size: 9 })}
      ${pin(200, 140, 290, 110)}${lab(314, 104, 'labia minora', "labia minora", { size: 9 })}
      ${pin(232, 150, 290, 160)}${lab(314, 154, 'labia majora', "labia majora", { size: 9 })}
      ${pin(194, 186, 290, 210)}${lab(314, 206, 'Bartholin glands', "Bartholin glands", { size: 9 })}
      ${pin(180, 240, 70, 240)}${lab(46, 236, 'perineum', "perineum", { size: 9.5 })}${pin(180, 258, 280, 268)}${lab(312, 264, 'anus', "opening at the end of the digestive tract", { size: 9 })}`, "vulva", shadow(sh));
  };

  A.breast = () => {
    const sh = nid();
    return svg(360, 284, `${title("The breast: side section")}
      <path d="M60 40 V250" stroke="${C.boneLine}" stroke-width="6" opacity=".5"/>
      <path d="M70 40 C70 40 70 250 70 250" stroke="#d65a52" stroke-width="12" opacity=".5"/>
      <g filter="url(#${sh})"><path d="M80 50 C200 60 250 110 250 150 C250 196 200 236 80 246Z" fill="#f8e1c8" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      ${[[150, 100], [176, 130], [150, 170], [182, 192], [128, 140]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="14" fill="#f4b0c0" stroke="${C.utLine}" stroke-width="1"/><path d="M${p[0] + 10} ${p[1] + 4} C${p[0] + 40} ${p[1] + (150 - p[1]) * 0.4} 228 148 246 150" stroke="${C.utLine}" stroke-width="1.6" fill="none"/>`).join('')}
      <ellipse cx="250" cy="150" rx="6" ry="14" fill="#c98a6a"/><path d="M244 132 C240 140 240 160 244 168" stroke="#a8735a" stroke-width="5" fill="none"/>
      ${pin(150, 100, 150, 64)}${lab(170, 46, 'lobe (mammary gland)', "milk gland lobe", { size: 9.5 })}
      ${pin(220, 145, 300, 100)}${lab(310, 86, 'lactiferous duct', "milk duct", { size: 9.5 })}
      ${pin(252, 150, 310, 160)}${lab(320, 172, 'nipple', "tip of the breast", { size: 9.5 })}
      ${pin(242, 170, 290, 220)}${lab(310, 226, 'areola', "areola", { size: 9.5 })}
      ${pin(100, 210, 120, 260)}${lab(154, 262, 'adipose tissue', "fatty tissue", { size: 9 })}
      ${t(40, 120, 'ribs', { size: 9, fill: MUTED, anchor: 'middle' })}${f(40, 134, "rib", { size: 8.5 })}`, "breast", shadow(sh));
  };

  /* ================= دنیای ۲: دستگاه تناسلی مردانه ================= */
  A['male-sagittal'] = () => {
    const m = maleSag(190, 150, 1);
    return svg(360, 310, `${title("Side section of the male pelvis (facing left)")}
      ${m.b}
      ${pin(160, 120, 80, 46)}${lab(56, 42, 'urinary bladder', "bladder", { size: 9.5 })}
      ${pin(224, 132, 270, 46)}${lab(300, 42, 'seminal vesicle', "seminal vesicle", { size: 9.5 })}
      ${pin(176, 170, 70, 110)}${lab(46, 102, 'prostate gland', "prostate", { size: 9.5 })}
      ${pin(198, 170, 300, 110)}${lab(310, 100, 'vas deferens', "vas deferens", { size: 9.5 })}
      ${pin(118, 230, 46, 170)}${lab(40, 160, 'urethra', "urethra", { size: 9.5 })}
      ${pin(70, 254, 46, 220)}${lab(40, 210, 'penis', "shaft of the male organ", { size: 9.5 })}
      ${pin(140, 268, 70, 296)}${lab(110, 296, 'testis', "testis", { size: 9.5 })}
      ${pin(154, 262, 280, 262)}${lab(300, 256, 'epididymis', "epididymis", { size: 9.5 })}
      ${pin(162, 282, 280, 296)}${lab(300, 294, 'scrotum', "scrotum", { size: 9 })}
      ${pin(266, 210, 310, 180)}${lab(320, 166, 'rectum', "the straight final section of the large bowel", { size: 9.5 })}`, "Section of the male pelvis", m.d);
  };

  A.testis = () => {
    const sh = nid();
    return svg(360, 280, `${title("Testis and epididymis (section)")}
      <g filter="url(#${sh})"><ellipse cx="160" cy="160" rx="96" ry="100" fill="#f3dccb" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <ellipse cx="150" cy="168" rx="70" ry="82" fill="${C.testis}" stroke="${C.testisLine}" stroke-width="1.6"/>
      ${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${100 + i * 20} ${100 + (i % 2) * 6} q-10 20 0 40 q10 20 0 40 q-10 20 0 34" stroke="#d9876a" stroke-width="2.4" fill="none"/>`).join('')}
      <path d="M210 92 C236 104 238 140 226 170 C216 200 216 228 228 250 C236 264 226 272 214 262" stroke="#c97d62" stroke-width="16" fill="none" stroke-linecap="round"/>
      <path d="M220 96 C234 60 236 40 240 24" stroke="${C.ductLine}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M150 168 L200 120" stroke="#b46a4c" stroke-width="2" stroke-dasharray="3 2"/>
      ${pin(120, 150, 40, 70)}${lab(46, 56, 'seminiferous tubules', "seminiferous tubules", { size: 9.5 })}
      ${pin(232, 200, 290, 210)}${lab(310, 200, 'epididymis', "epididymis: sperm maturation", { size: 9.5 })}
      ${pin(238, 40, 290, 60)}${lab(310, 52, 'vas deferens', "vas deferens", { size: 9.5 })}
      ${pin(90, 230, 60, 262)}${lab(90, 262, 'testis (testicle)', "testis", { size: 9.5 })}
      ${pin(170, 252, 250, 268)}${t(256, 272, "scrotum • the skin pouch for the testes", { size: 9, anchor: 'start' })}`, "testis", shadow(sh));
  };

  A['sperm-path'] = () => {
    const m = nid();
    const S = (x, y, en, fa, c, bg) => `<rect x="${x - 50}" y="${y - 20}" width="100" height="40" rx="12" fill="${bg}"/>${t(x, y - 2, en, { size: 9.5, fill: c, w: 900 })}${f(x, y + 12, fa, { size: 8.5, fill: INK })}`;
    return svg(360, 260, `${title("The route of sperm: from the testis to the outside")}
      ${S(70, 60, 'testis', "testis: production", '#c97d62', '#fdeee3')}${S(180, 60, 'epididymis', "epididymis: maturation", '#c97d62', '#fdeee3')}${S(290, 60, 'vas deferens', "vas deferens", '#1f6fa5', '#eef5fb')}
      ${S(290, 140, 'ejaculatory duct', "ejaculatory duct", '#1f6fa5', '#eef5fb')}${S(180, 140, 'urethra', "urethra", '#1f6fa5', '#eef5fb')}${S(70, 140, 'outside', "out (ejaculation)", '#3f8a05', '#e7f9d8')}
      ${arrow(m, 122, 60, 128, 60, '#a3366a', 2.4)}${arrow(m, 232, 60, 238, 60, '#a3366a', 2.4)}${arrow(m, 290, 82, 290, 118, '#a3366a', 2.4)}${arrow(m, 238, 140, 232, 140, '#a3366a', 2.4)}${arrow(m, 128, 140, 122, 140, '#a3366a', 2.4)}
      <rect x="20" y="186" width="320" height="62" rx="12" fill="#f6f2fd"/>
      ${f(180, 206, "Extra fluid: seminal vesicles, prostate and Cowper glands", { size: 9.5, fill: INK, w: 800 })}
      ${t(180, 226, 'seminal vesicles + prostate + bulbourethral glands = semen', { size: 9, fill: '#6c4fd0', w: 800 })}
      ${f(180, 241, "sperm + the fluid of these glands = semen", { size: 8.5, fill: MUTED })}`, "route of sperm", marker(m, '#a3366a'));
  };

  A['sperm-cell'] = () => {
    return svg(360, 214, `${title("Sperm and egg: two gametes")}
      <g transform="translate(40 96) scale(3)"><ellipse cx="0" cy="0" rx="7" ry="5" fill="${C.duct}" stroke="${C.ductLine}" stroke-width=".6"/><ellipse cx="-1.5" cy="0" rx="4" ry="3" fill="#7fb2e5"/><rect x="7" y="-1.6" width="8" height="3.2" rx="1.4" fill="#e9c27a"/><path d="M15 0 c8 0 8 -5 16 -5 s8 5 16 5 s6 -4 10 -4" stroke="${C.ductLine}" stroke-width=".9" fill="none"/></g>
      ${pin(30, 96, 30, 150)}${lab(40, 162, 'head', "head (DNA)", { size: 9.5 })}${pin(72, 96, 92, 150)}${lab(100, 162, 'midpiece', "midpiece (energy)", { size: 9.5 })}
      ${pin(140, 86, 150, 50)}${lab(150, 40, 'tail (flagellum)', "tail: swimming", { size: 9.5 })}
      ${ovum(290, 100, 34)}${lab(290, 170, 'ovum', "egg: the largest cell", { size: 9.5 })}
      ${f(180, 208, "Each has 23 chromosomes; fertilization completes the full 46", { size: 9, fill: MUTED, w: 700 })}`, "Gametes");
  };

  A['penis-xs'] = () => {
    const sh = nid();
    return svg(360, 250, `${title("Cross-section of the penis")}
      <g filter="url(#${sh})"><ellipse cx="160" cy="130" rx="96" ry="88" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <ellipse cx="160" cy="128" rx="84" ry="76" fill="#f3e2d4"/>
      <ellipse cx="124" cy="110" rx="34" ry="30" fill="#e8a0a6" stroke="#b84e6e" stroke-width="1.4"/><ellipse cx="196" cy="110" rx="34" ry="30" fill="#e8a0a6" stroke="#b84e6e" stroke-width="1.4"/>
      <circle cx="124" cy="110" r="4" fill="${C.art}"/><circle cx="196" cy="110" r="4" fill="${C.art}"/>
      <ellipse cx="160" cy="174" rx="26" ry="20" fill="#f2b7c0" stroke="#b84e6e" stroke-width="1.2"/><circle cx="160" cy="174" r="5" fill="#fff" stroke="${C.ductLine}"/>
      <circle cx="160" cy="66" r="5" fill="${C.vein}"/><circle cx="146" cy="70" r="3.4" fill="${C.art}"/><circle cx="174" cy="70" r="3.4" fill="${C.art}"/>
      ${pin(124, 110, 40, 70)}${lab(44, 56, 'corpora cavernosa', "erectile tissue of the penis", { size: 9.5 })}
      ${pin(170, 182, 260, 220)}${lab(300, 218, 'corpus spongiosum', "corpus spongiosum", { size: 9.5 })}
      ${pin(160, 174, 60, 210)}${lab(46, 214, 'urethra', "urethra", { size: 9.5 })}
      ${pin(160, 66, 260, 40)}${lab(304, 34, 'dorsal vein & arteries', "vein and arteries", { size: 9 })}
      ${f(300, 128, "erection: filling", { size: 9, fill: MUTED })}${f(300, 142, "of the erectile bodies with blood", { size: 9, fill: MUTED })}`, "Section of the penis", shadow(sh));
  };

  /* ================= دنیای ۳: بارداری و زایمان ================= */
  A.fertilization = () => {
    const u = uterusFront(180, 70, 1.05, { vagina: false });
    return svg(360, 260, `${title("fertilization and implantation")}
      ${u.b}
      ${ovum(298, 132, 6)}${sperm(270, 92, 0.6, 160)}${sperm(276, 104, 0.6, 175)}
      <circle cx="252" cy="78" r="7" fill="#fbd3dd" stroke="${C.utLine}"/><circle cx="214" cy="80" r="8" fill="#fbd3dd" stroke="${C.utLine}"/>
      ${[0, 1, 2, 3].map(i => `<circle cx="${210 + (i % 2) * 4}" cy="${78 + Math.floor(i / 2) * 4}" r="2.6" fill="#f4a6b8" stroke="${C.utLine}" stroke-width=".5"/>`).join('')}
      <circle cx="186" cy="104" r="9" fill="#f8c0cf" stroke="${C.utLine}"/>
      <path d="M298 132 C290 110 270 92 252 80 C236 74 222 76 214 80 C200 88 192 96 186 104" stroke="#a3366a" stroke-width="1.6" fill="none" stroke-dasharray="4 3"/>
      ${pin(298, 132, 320, 180)}${lab(320, 192, 'ovulation', "ovulation", { size: 9.5 })}
      ${pin(266, 86, 300, 40)}${lab(316, 34, 'fertilization', "fertilization in the tube", { size: 9.5, fill: '#a3366a' })}
      ${pin(252, 78, 220, 36)}${lab(186, 34, 'zygote', "zygote", { size: 9.5 })}
      ${pin(186, 104, 80, 200)}${lab(70, 212, 'implantation', "implantation in the endometrium (days 6 to 7)", { size: 9.5 })}
      ${f(180, 252, "hCG is secreted by the embryo; the basis of the pregnancy test", { size: 9, fill: MUTED, w: 700 })}`, "fertilization", u.d);
  };

  A['pregnant-uterus'] = () => {
    const sh = nid();
    return svg(360, 300, `${title("The pregnant uterus: fetus, placenta and amniotic sac")}
      <g filter="url(#${sh})"><path d="M180 30 C270 30 300 110 290 170 C282 226 240 262 194 270 L194 292 L166 292 L166 270 C120 262 78 226 70 170 C60 110 90 30 180 30Z" fill="${C.ut}" stroke="${C.utLine}" stroke-width="1.6"/></g>
      <path d="M180 44 C256 44 280 112 272 168 C264 220 228 252 180 256 C132 252 96 220 88 168 C80 112 104 44 180 44Z" fill="${C.fluid}" stroke="#a9c7e4" stroke-width="2"/>
      <path d="M232 50 C268 66 280 100 276 128 C256 116 236 92 226 64Z" fill="${C.plac}" stroke="#8a2d4a" stroke-width="1.2"/>
      <path d="M244 96 C210 110 216 150 190 160" stroke="#c97da0" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M244 96 C210 110 216 150 190 160" stroke="#f2d0e0" stroke-width="2.4" fill="none" stroke-dasharray="4 3"/>
      ${fetus(170, 200, 1.6)}
      ${pin(256, 84, 300, 40)}${lab(316, 34, 'placenta', "pairs", { size: 10 })}
      ${pin(214, 132, 320, 110)}${lab(320, 96, 'umbilical cord', "umbilical cord", { size: 9.5 })}
      ${pin(120, 120, 46, 60)}${lab(46, 46, 'amniotic fluid', "amniotic fluid", { size: 9.5 })}
      ${pin(90, 180, 40, 200)}${lab(40, 212, 'amnion', "amniotic sac", { size: 9.5 })}
      ${pin(160, 236, 90, 280)}${lab(60, 278, 'fetus', "baby", { size: 9.5 })}
      ${pin(180, 284, 270, 284)}${lab(300, 278, 'cervix', "cervix", { size: 9.5 })}`, "pregnant uterus", shadow(sh));
  };

  A.placenta = () => {
    const m = nid(), n = nid();
    return svg(360, 230, `${title("The placenta: exchange between mother and fetus")}
      <rect x="20" y="40" width="150" height="150" rx="16" fill="#fde6e4"/>${lab(95, 60, 'mother', "mother’s blood", { size: 10.5, fill: '#c2413a' })}
      <rect x="190" y="40" width="150" height="150" rx="16" fill="#eef5fb"/>${lab(265, 60, 'fetus', "fetal blood", { size: 10.5, fill: '#1f6fa5' })}
      ${arrow(m, 120, 104, 236, 104, '#c2413a', 2.6)}${f(180, 96, "oxygen and food", { size: 9.5, fill: '#c2413a', w: 800 })}
      ${arrow(n, 236, 150, 120, 150, '#1f6fa5', 2.6)}${f(180, 170, "carbon dioxide and wastes", { size: 9.5, fill: '#1f6fa5', w: 800 })}
      ${f(180, 210, "Maternal and fetal blood do not mix directly; exchange is through the capillary walls", { size: 9, fill: MUTED, w: 700 })}
      ${f(180, 224, "The placenta also makes the hormones hCG, estrogen and progesterone", { size: 9, fill: MUTED, w: 700 })}`, "pairs", marker(m, '#c2413a') + marker(n, '#1f6fa5'));
  };

  A['labor-stages'] = () => {
    const P = (x, en, fa, sub, inner) => `<rect x="${x}" y="34" width="108" height="150" rx="14" fill="#fdf0f4"/>${inner}${lab(x + 54, 204, en, fa, { size: 10 })}${f(x + 54, 232, sub, { size: 8.5 })}`;
    return svg(360, 248, `${title("The three stages of labour")}
      ${P(8, 'stage 1: dilation', "opening of the cervix", "up to 10 cm", `<ellipse cx="62" cy="104" rx="38" ry="52" fill="${C.ut}" stroke="${C.utLine}"/>${fetus(62, 112, 0.9)}<path d="M50 154 h24" stroke="${C.utLine}" stroke-width="3"/>`)}
      ${P(126, 'stage 2: expulsion', "delivery of the baby", "from full dilation to birth", `<ellipse cx="180" cy="90" rx="34" ry="40" fill="${C.ut}" stroke="${C.utLine}"/>${fetus(180, 120, 0.8)}<path d="M164 150 L196 150" stroke="${C.utLine}" stroke-width="3"/>`)}
      ${P(244, 'stage 3: placental', "delivery of the placenta", "placenta and membranes (afterbirth)", `<ellipse cx="298" cy="90" rx="26" ry="32" fill="${C.ut}" stroke="${C.utLine}"/><ellipse cx="298" cy="150" rx="22" ry="12" fill="${C.plac}"/><path d="M298 122 V138" stroke="#c97da0" stroke-width="3"/>`)}`, "stages of labour");
  };

  A.presentations = () => {
    const U = (x, rot, en, fa, c) => `<ellipse cx="${x}" cy="118" rx="52" ry="72" fill="${C.ut}" stroke="${C.utLine}" stroke-width="1.4"/><ellipse cx="${x}" cy="118" rx="44" ry="64" fill="${C.fluid}"/><g transform="rotate(${rot} ${x} 118)">${fetus(x, 128, 1.1)}</g><path d="M${x - 10} 190 h20" stroke="${C.utLine}" stroke-width="4"/>${lab(x, 216, en, fa, { size: 10, fill: c })}`;
    return svg(360, 256, `${title("Fetal presentation: head or buttocks?")}
      ${U(90, 180, 'cephalic (vertex)', "head presentation; normal", '#3f8a05')}${U(270, 0, 'breech', "buttocks presentation", '#c2413a')}
      ${f(180, 250, "The fetal head should face the cervix (downwards)", { size: 9, fill: MUTED, w: 700 })}`, "fetal presentation");
  };

  A.trimesters = () => {
    const X = w => 22 + w * 7.6;
    return svg(360, 200, `${title("Trimesters of pregnancy (40 weeks from the LMP)")}
      <rect x="${X(0)}" y="60" width="${X(14) - X(0)}" height="40" rx="8" fill="#fde6ec"/><rect x="${X(14)}" y="60" width="${X(28) - X(14)}" height="40" rx="8" fill="#fdf3dc"/><rect x="${X(28)}" y="60" width="${X(40) - X(28)}" height="40" rx="8" fill="#e1f6f3"/>
      ${f((X(0) + X(14)) / 2, 85, "first trimester", { size: 10, fill: '#a3366a', w: 800 })}${f((X(14) + X(28)) / 2, 85, "second trimester", { size: 10, fill: '#a87a12', w: 800 })}${f((X(28) + X(40)) / 2, 85, "third trimester", { size: 10, fill: '#0f7a71', w: 800 })}
      ${[0, 8, 14, 28, 37, 40].map(w => `<path d="M${X(w)} 100 v8" stroke="${LINE}"/>${t(X(w), 122, String(w), { size: 9.5, fill: MUTED, sym: true })}`).join('')}
      ${t(X(4), 46, 'embryo', { size: 9.5, fill: '#b84e6e', w: 800 })}${t(X(24), 46, 'fetus', { size: 9.5, fill: '#b84e6e', w: 800 })}
      <path d="M${X(8)} 40 V60" stroke="#b84e6e" stroke-dasharray="3 2"/>
      <rect x="${X(37)}" y="134" width="${X(42) - X(37)}" height="18" rx="5" fill="#bfe8c4"/>${t(X(39.5), 147, 'term', { size: 9, fill: '#3f8a05', w: 900 })}
      ${f(180, 176, "Until week 8 it is an “embryo” and from week 9 a “fetus”", { size: 9.5, fill: INK, w: 700 })}
      ${f(180, 192, "Term: 37 to 42 weeks; before 37 weeks is preterm", { size: 9, fill: MUTED })}`, "trimesters");
  };

  A['gravida-para'] = () => {
    const B = (x, c, bg, big, en, fa) => `<rect x="${x}" y="40" width="160" height="112" rx="16" fill="${bg}"/>${t(x + 80, 84, big, { size: 30, fill: c, w: 900, sym: true })}${t(x + 80, 112, en, { size: 10.5, fill: c, w: 900 })}${f(x + 80, 132, fa, { size: 9.5, fill: INK, w: 700 })}`;
    return svg(360, 230, `${title("G and P: number of pregnancies and births")}
      ${B(12, '#8e6bd8', '#f3eefc', 'G2', 'gravida 2', "pregnant twice")}${B(188, '#e8913a', '#fdeee3', 'P1', 'para 1', "one viable birth")}
      ${f(180, 178, "Abigail’s record: 39 weeks pregnant, G2 and P1", { size: 9.5, fill: INK, w: 800 })}
      ${f(180, 200, "primi- first, multi- many, nulli- none", { size: 9, fill: MUTED, w: 700 })}
      ${f(180, 218, "primigravida: first pregnancy • nullipara: has not given birth", { size: 9, fill: MUTED, w: 700 })}`, "G and P");
  };

  A.apgar = () => {
    const rows = [['A', 'Appearance', "Skin colour"], ['P', 'Pulse', "heart rate"], ['G', 'Grimace', "reflex response"], ['A', 'Activity', "muscle tone"], ['R', 'Respiration', "breathing"]];
    return svg(360, 260, `${title("Newborn Apgar score (0 to 10)")}
      ${rows.map((r, i) => `<rect x="20" y="${36 + i * 38}" width="320" height="32" rx="9" fill="${i % 2 ? '#fdf0f4' : '#fff6f8'}"/><circle cx="42" cy="${52 + i * 38}" r="12" fill="#b8457a"/>${t(42, 56.5 + i * 38, r[0], { size: 12, fill: '#fff', w: 900, sym: true })}${t(64, 56 + i * 38, r[1], { size: 10.5, anchor: 'start', w: 800 })}${f(326, 56 + i * 38, r[2], { size: 9.5, anchor: 'end', fill: INK })}`).join('')}
      ${f(180, 244, "Each item scores 0 to 2, at 1 and 5 minutes after birth. 7 to 10 is normal", { size: 9, fill: MUTED, w: 700 })}`, "Apgar score");
  };

  /* ================= دنیای ۴: بیماری‌ها و عفونت‌های آمیزشی ================= */
  A['menstrual-disorders'] = () => {
    const c2 = (x, y, ic, en, fa, sub, bg) => card(x, y, 108, 92, bg, ic, en, fa, sub);
    return svg(360, 226, `${title("menstrual disorders")}
      ${c2(8, 30, '⛔', 'amenorrhea', "absence of periods", "The prefix a means without", '#f3eefc')}
      ${c2(126, 30, '😣', 'dysmenorrhea', "painful periods", "The prefix dys means painful", '#fdeee3')}
      ${c2(244, 30, '🩸', 'menorrhagia', "heavy bleeding", "The suffix rrhagia: bleeding", '#fde6e4')}
      ${c2(67, 128, '📆', 'metrorrhagia', "bleeding between periods", "The root metr means uterus", '#e2ecfb')}
      ${c2(185, 128, '💧', 'oligomenorrhea', "scanty, infrequent periods", "The root olig means few", '#e1f6f3')}`, "menstrual disorders");
  };

  A['uterine-disorders'] = () => {
    const u = uterusFront(180, 70, 1.05, { vagina: false });
    return svg(360, 260, `${title("Diseases of the uterus and ovary")}
      ${u.b}
      <circle cx="150" cy="96" r="13" fill="#e9b4a0" stroke="#a8735a" stroke-width="1.4"/><circle cx="214" cy="120" r="10" fill="#e9b4a0" stroke="#a8735a" stroke-width="1.4"/>
      <circle cx="292" cy="128" r="16" fill="#e2f1fb" stroke="${C.fluidLine}" stroke-width="1.6"/>
      ${[[70, 150], [84, 162], [112, 170], [250, 172]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3.6" fill="#8e2d4a"/>`).join('')}
      <ellipse cx="180" cy="186" rx="5" ry="8" fill="#d65a7a" stroke="#8a2d4a"/>
      ${pin(150, 96, 60, 52)}${lab(48, 40, 'leiomyoma (fibroid)', "fibroid", { size: 9.5 })}
      ${pin(292, 128, 320, 60)}${lab(318, 46, 'ovarian cyst', "ovarian cyst", { size: 9.5 })}
      ${pin(84, 162, 50, 210)}${lab(54, 222, 'endometriosis', "endometrium outside the uterus", { size: 9.5 })}
      ${pin(180, 186, 260, 224)}${lab(296, 222, 'cervical polyp', "cervical polyp", { size: 9.5 })}`, "diseases of the uterus", u.d);
  };

  A.prolapse = () => {
    const P = (x, en, fa, extra) => `<rect x="${x}" y="34" width="108" height="150" rx="14" fill="#fdf0f4"/>
      <path d="M${x + 28} 54 V170" stroke="${C.muc}" stroke-width="16" stroke-linecap="round"/>
      ${extra}${lab(x + 54, 204, en, fa, { size: 10 })}`;
    return svg(360, 254, `${title("Prolapses: uterus, bladder, rectum")}
      ${P(8, 'uterine prolapse', "uterine prolapse", `<ellipse cx="44" cy="${150}" rx="18" ry="24" fill="${C.ut}" stroke="${C.utLine}"/><path d="M36 80 L44 126" stroke="${C.utLine}" stroke-width="2" stroke-dasharray="3 3"/>${t(78, 90, '↓', { size: 22, fill: '#c2413a' })}`)}
      ${P(126, 'cystocele', "bladder prolapse", `<ellipse cx="184" cy="96" rx="28" ry="24" fill="${C.blad}" stroke="${C.bladLine}"/><path d="M164 112 C150 126 150 140 160 150" fill="${C.blad}" stroke="${C.bladLine}" stroke-width="1.4"/>`)}
      ${P(244, 'rectocele', "bulging of the rectum", `<path d="M320 50 C324 100 322 140 316 176" stroke="${C.rect}" stroke-width="20" fill="none" stroke-linecap="round"/><path d="M306 126 C284 130 280 146 290 156 C298 150 304 142 306 136" fill="${C.rect}" stroke="${C.rectLine}" stroke-width="1.2"/>`)}
      ${f(180, 248, "The suffix -cele means hernia or bulging; treatment: colporrhaphy", { size: 9, fill: MUTED, w: 700 })}`, "Prolapses");
  };

  A['scrotal-disorders'] = () => {
    const S = (x, en, fa, inner) => `<rect x="${x}" y="34" width="80" height="140" rx="14" fill="#eef5fb"/><path d="M${x + 40} 44 V86" stroke="${C.ductLine}" stroke-width="4"/>${inner}${lab(x + 40, 196, en, fa, { size: 9.5 })}`;
    const T = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="17" ry="22" fill="${C.testis}" stroke="${C.testisLine}" stroke-width="1.3"/><path d="M${x + 14} ${y - 14} C${x + 22} ${y - 4} ${x + 22} ${y + 8} ${x + 14} ${y + 16}" stroke="#c97d62" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    return svg(360, 232, `${title("Disorders of the scrotum")}
      ${S(6, 'normal', "normal", T(46, 118))}
      ${S(94, 'hydrocele', "fluid collection", `<ellipse cx="134" cy="122" rx="32" ry="38" fill="${C.fluid}" stroke="${C.fluidLine}" stroke-width="1.4"/>${T(134, 118)}`)}
      ${S(182, 'varicocele', "dilated veins", `${T(222, 130)}${[0, 1, 2].map(i => `<path d="M${214 + i * 6} 60 q-8 10 0 20 q8 10 0 20" stroke="${C.vein}" stroke-width="3" fill="none"/>`).join('')}`)}
      ${S(270, 'torsion', "twisting (emergency)", `<path d="M310 86 c-10 6 10 12 0 18 c-10 6 10 12 0 18" stroke="${C.ductLine}" stroke-width="4" fill="none"/>${T(310, 140).replace(/fill="#f6c7a8"/, 'fill="#c88aa4"')}`)}
      ${f(180, 226, "cryptorchidism: the testis has not reached the scrotum and stays in the inguinal canal", { size: 9, fill: MUTED, w: 700 })}`, "scrotum");
  };

  A.bph = () => {
    const B = (x, big, en, fa, c) => `<ellipse cx="${x}" cy="84" rx="48" ry="40" fill="${C.blad}" stroke="${C.bladLine}" stroke-width="1.4"/>
      <ellipse cx="${x}" cy="${big ? 136 : 128}" rx="${big ? 40 : 26}" ry="${big ? 30 : 20}" fill="${C.pros}" stroke="${C.prosLine}" stroke-width="1.4"/>
      <path d="M${x} 118 V${big ? 196 : 186}" stroke="#fff" stroke-width="${big ? 3 : 7}"/><path d="M${x} 118 V${big ? 196 : 186}" stroke="${C.bladLine}" stroke-width="1" stroke-dasharray="3 2"/>
      ${lab(x, 214, en, fa, { size: 10, fill: c })}`;
    return svg(360, 252, `${title("Benign prostatic hyperplasia (BPH)")}
      ${B(90, false, 'normal prostate', "normal prostate", '#3f8a05')}${B(270, true, 'BPH', "enlarged prostate; narrowed urethra", '#c2413a')}
      ${f(180, 246, "Signs: weak urine stream, night-time urination (nocturia), incomplete emptying; treatment: TURP", { size: 8.8, fill: MUTED, w: 700 })}`, 'BPH');
  };

  A.ectopic = () => {
    const u = uterusFront(180, 70, 1.05, { vagina: false });
    return svg(360, 250, `${title("ectopic pregnancy")}
      ${u.b}
      <circle cx="262" cy="80" r="11" fill="#f2c0cf" stroke="#c2413a" stroke-width="2"/><circle cx="262" cy="80" r="4" fill="#c2413a"/>
      <circle cx="290" cy="134" r="8" fill="#f2c0cf" stroke="#c2413a" stroke-width="1.6"/>
      <circle cx="180" cy="104" r="9" fill="#f8c0cf" stroke="#3f8a05" stroke-width="2"/>
      ${pin(262, 80, 300, 40)}${lab(316, 34, 'tubal pregnancy', "in the tube (most common)", { size: 9.5, fill: '#c2413a' })}
      ${pin(290, 134, 320, 190)}${lab(320, 202, 'ovarian', "on the ovary", { size: 9.5 })}
      ${pin(180, 104, 70, 190)}${lab(60, 202, 'normal implantation', "normal implantation", { size: 9.5, fill: '#3f8a05' })}
      ${f(180, 240, "Risk of a tubal pregnancy: rupture of the tube, bleeding and severe abdominal pain", { size: 9, fill: MUTED, w: 700 })}`, "ectopic pregnancy", u.d);
  };

  A['placenta-problems'] = () => {
    const U = (x, kind, en, fa) => `<ellipse cx="${x}" cy="112" rx="56" ry="74" fill="${C.ut}" stroke="${C.utLine}" stroke-width="1.4"/><ellipse cx="${x}" cy="112" rx="48" ry="66" fill="${C.fluid}"/>${fetus(x, 104, 0.9)}
      ${kind === 'previa' ? `<path d="M${x - 30} 172 C${x - 10} 186 ${x + 10} 186 ${x + 30} 172 L${x + 24} 160 C${x + 8} 170 ${x - 8} 170 ${x - 24} 160Z" fill="${C.plac}"/>` : `<path d="M${x + 30} 54 C${x + 50} 70 ${x + 54} 100 ${x + 50} 120 L${x + 40} 116 C${x + 42} 96 ${x + 38} 76 ${x + 24} 62Z" fill="${C.plac}"/><path d="M${x + 48} 66 C${x + 56} 84 ${x + 58} 104 ${x + 54} 120" stroke="${C.blood}" stroke-width="5" fill="none"/>`}
      <path d="M${x - 8} 186 h16" stroke="${C.utLine}" stroke-width="4"/>${lab(x, 214, en, fa, { size: 10, fill: '#c2413a' })}`;
    return svg(360, 252, `${title("placental problems")}
      ${U(90, 'previa', 'placenta previa', "placenta previa: over the cervix")}${U(270, 'abruptio', 'abruptio placentae', "placental abruption")}
      ${f(180, 246, "Placenta previa: painless bleeding • placental abruption: painful bleeding and an emergency", { size: 8.8, fill: MUTED, w: 700 })}`, "placental problems");
  };

  A.sti = () => {
    const c2 = (x, y, ic, en, fa, sub, bg) => card(x, y, 108, 92, bg, ic, en, fa, sub);
    return svg(360, 226, `${title("Sexually transmitted infections (STIs)")}
      ${c2(8, 30, '🦠', 'chlamydia', "tiny intracellular bacteria", "bacterium; PID and infertility", '#fde6e4')}
      ${c2(126, 30, '🦠', 'gonorrhea', "gonorrhoea (GC)", "bacterium; pus-like discharge", '#fdeee3')}
      ${c2(244, 30, '🦠', 'syphilis', "syphilis", "painless chancre; VDRL", '#fdf3dc')}
      ${c2(8, 128, '🧬', 'genital herpes', "genital herpes", "HSV virus; painful blisters", '#f3eefc')}
      ${c2(126, 128, '🧬', 'HPV', "genital warts", "cervical cancer; vaccine", '#e2ecfb')}
      ${c2(244, 128, '🧬', 'HIV', "human immunodeficiency virus", "leads to AIDS", '#e1f6f3')}`, "sexually transmitted infections");
  };

  /* ================= دنیای ۵: تشخیص، درمان و پیشگیری ================= */
  A['pap-test'] = () => {
    const s = femaleSag(170, 150, 0.85);
    return svg(360, 280, `${title("Pap smear with a speculum")}
      ${s.b}
      <path d="M60 300 L130 222 M74 304 L140 232" stroke="#9aa5ab" stroke-width="6" stroke-linecap="round"/>
      <path d="M150 210 L188 180" stroke="#5b6b73" stroke-width="3"/><path d="M186 176 l8 -4 l-2 8z" fill="#5b6b73"/>
      ${pin(110, 250, 44, 240)}${lab(40, 226, 'speculum', "speculum", { size: 9.5 })}
      ${pin(188, 180, 300, 196)}${lab(310, 204, 'cervix', "cervix", { size: 9.5 })}
      ${pin(170, 196, 280, 250)}${lab(300, 256, 'Pap smear', "sample of cervical cells", { size: 9.5, fill: '#a3366a' })}
      ${f(140, 42, "For early detection of dysplasia and cervical cancer", { size: 9, fill: MUTED, w: 700 })}`, "Pap smear", s.d);
  };

  A.mammography = () => {
    const sh = nid();
    return svg(360, 250, `${title("Mammography: an X-ray of the breast")}
      <rect x="40" y="56" width="150" height="16" rx="5" fill="#cfd8dc" stroke="#77868e"/><rect x="40" y="168" width="150" height="16" rx="5" fill="#cfd8dc" stroke="#77868e"/>
      <g filter="url(#${sh})"><path d="M40 72 C150 72 186 96 186 120 C186 144 150 168 40 168Z" fill="#f8e1c8" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <circle cx="132" cy="112" r="9" fill="#e9b4a0" stroke="#a8735a"/>
      <rect x="226" y="56" width="110" height="128" rx="10" fill="#111"/><path d="M226 72 C300 72 326 96 326 120 C326 144 300 168 226 168Z" fill="#5d646a"/><circle cx="292" cy="112" r="8" fill="#e9eef0"/>
      ${pin(132, 112, 120, 210)}${lab(120, 222, 'tumor', "lump", { size: 9.5 })}${pin(292, 112, 292, 210)}${lab(292, 222, 'mammogram', "image: white mass", { size: 9.5 })}
      ${f(114, 48, "The breast is compressed between two plates", { size: 9, fill: MUTED })}`, "breast X-ray imaging", shadow(sh));
  };

  A.amniocentesis = () => {
    const sh = nid();
    return svg(360, 270, `${title("Amniocentesis: a sample of amniotic fluid")}
      <g filter="url(#${sh})"><ellipse cx="170" cy="160" rx="110" ry="96" fill="${C.ut}" stroke="${C.utLine}" stroke-width="1.6"/></g>
      <ellipse cx="170" cy="160" rx="98" ry="84" fill="${C.fluid}"/>
      ${fetus(150, 178, 1.3)}
      <path d="M210 90 C236 92 254 104 262 120 L246 128 C238 114 226 106 206 102Z" fill="${C.plac}"/>
      <path d="M228 50 L206 120" stroke="#77868e" stroke-width="3"/><rect x="222" y="34" width="16" height="20" rx="3" fill="#cfd8dc" stroke="#77868e" transform="rotate(16 230 44)"/>
      <path d="M304 66 l-28 26" stroke="#5e9fc4" stroke-width="3" stroke-linecap="round"/><rect x="296" y="54" width="30" height="16" rx="5" fill="#e6eef2" stroke="#77868e" transform="rotate(-45 311 62)"/>
      ${pin(226, 54, 300, 100)}${lab(318, 108, 'needle', "needle", { size: 9.5 })}
      ${pin(110, 120, 46, 60)}${lab(50, 46, 'amniotic fluid', "amniotic fluid", { size: 9.5 })}
      ${pin(290, 80, 318, 160)}${lab(320, 172, 'ultrasound', "ultrasound guidance", { size: 9 })}
      ${f(170, 266, "For chromosome testing (such as Down syndrome); usually at weeks 15 to 20", { size: 9, fill: MUTED, w: 700 })}`, "amniocentesis", shadow(sh));
  };

  A['hysterectomy-types'] = () => {
    const k = 0.42;
    const box = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fff" opacity=".8"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="#c2413a" stroke-width="1.6" stroke-dasharray="4 3"/>`;
    const U = cx => uterusFront(cx, 66, k);
    const a = U(62), b = U(180), c = U(298);
    return svg(360, 236, `${title("Removing organs: what is taken out?")}
      ${a.b}${box(43, 60, 38, 60)}
      ${b.b}${box(161, 60, 38, 60)}${box(124, 58, 36, 32)}${box(200, 58, 36, 32)}
      ${c.b}<circle cx="292" cy="78" r="6" fill="#e9b4a0" stroke="#a8735a"/>${box(283, 69, 18, 18)}
      ${lab(62, 172, 'TAH', "removal of the uterus and cervix", { size: 9.5, sym: true })}
      ${lab(180, 172, 'TAH + BSO', "uterus + tubes and ovaries", { size: 9.5, sym: true })}
      ${lab(298, 172, 'myomectomy', "only the fibroid; the uterus stays", { size: 9.5 })}
      ${f(180, 222, "Case Study 16-1: Mrs Naomi had a TAH and BSO after postmenopausal bleeding", { size: 9, fill: MUTED, w: 700 })}`, "Hysterectomy", a.d + b.d + c.d);
  };

  A.sterilization = () => {
    const u = uterusFront(90, 76, 0.62, { vagina: false });
    return svg(360, 240, `${title("Permanent sterilization: women and men")}
      <rect x="8" y="30" width="166" height="170" rx="16" fill="#fdf0f4"/><rect x="186" y="30" width="166" height="170" rx="16" fill="#eef5fb"/>
      ${u.b}
      ${[[44, 82], [136, 82]].map(p => `<path d="M${p[0] - 6} ${p[1] - 8} l12 16 M${p[0] + 6} ${p[1] - 8} l-12 16" stroke="#c2413a" stroke-width="3"/>`).join('')}
      <path d="M244 60 C232 100 236 130 248 150 M300 60 C312 100 308 130 296 150" stroke="${C.ductLine}" stroke-width="5" fill="none"/>
      <ellipse cx="250" cy="166" rx="15" ry="20" fill="${C.testis}" stroke="${C.testisLine}"/><ellipse cx="294" cy="166" rx="15" ry="20" fill="${C.testis}" stroke="${C.testisLine}"/>
      ${[[236, 104], [308, 104]].map(p => `<rect x="${p[0] - 8}" y="${p[1] - 6}" width="16" height="12" fill="#fff"/><path d="M${p[0] - 8} ${p[1] - 6} h16 M${p[0] - 8} ${p[1] + 6} h16" stroke="#c2413a" stroke-width="3"/>`).join('')}
      ${lab(91, 214, 'tubal ligation', "tying the fallopian tubes", { size: 10, fill: '#a3366a' })}${lab(269, 214, 'vasectomy', "cutting the vas deferens", { size: 10, fill: '#1f6fa5' })}`, "sterilization", u.d);
  };

  A.contraception = () => {
    const c2 = (x, y, ic, en, fa, sub, bg) => card(x, y, 108, 92, bg, ic, en, fa, sub);
    return svg(360, 226, `${title("Methods of contraception")}
      ${c2(8, 30, '💊', 'oral contraceptive', "oral contraceptive pill", "stops ovulation", '#fde6ec')}
      ${c2(126, 30, '⚓', 'IUD', "intrauterine device", "sits in the uterus", '#f3eefc')}
      ${c2(244, 30, '🛡️', 'condom', "condom", "prevents STIs too", '#e1f6f3')}
      ${c2(8, 128, '⭕', 'diaphragm', "muscle between chest and abdomen", "over the cervix", '#fdeee3')}
      ${c2(126, 128, '🧴', 'spermicide', "spermicide", "-cide = killing", '#e2ecfb')}
      ${c2(244, 128, '✂️', 'sterilization', "sterilization", "tubal ligation or vasectomy", '#fdf3dc')}`, "contraception");
  };

  A.cesarean = () => {
    const sh = nid();
    return svg(360, 266, `${title("Caesarean section (C-section)")}
      <g filter="url(#${sh})"><path d="M90 40 C60 80 56 160 80 210 L280 210 C304 160 300 80 270 40Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <ellipse cx="180" cy="124" rx="70" ry="64" fill="${C.ut}" stroke="${C.utLine}" stroke-width="1.4"/>
      ${fetus(180, 120, 1.05)}
      <path d="M130 186 Q180 196 230 186" stroke="#c2413a" stroke-width="3" fill="none" stroke-dasharray="6 4"/>
      <path d="M140 164 Q180 172 220 164" stroke="#8a2d4a" stroke-width="2" fill="none" stroke-dasharray="4 3"/>
      ${pin(230, 186, 300, 214)}${lab(296, 226, 'suprapubic incision', "horizontal cut above the pubis", { size: 9 })}
      ${pin(140, 164, 66, 214)}${lab(70, 226, 'lower uterine segment', "incision of the lower uterus", { size: 9 })}
      ${f(180, 258, "Abigail’s record: an emergency caesarean because of CPD and fetal distress", { size: 9, fill: MUTED, w: 700 })}`, "caesarean section", shadow(sh));
  };

  A.turp = () => {
    const sh = nid();
    return svg(360, 240, `${title("TURP: removing the prostate through the urethra")}
      <g filter="url(#${sh})"><ellipse cx="200" cy="80" rx="70" ry="48" fill="${C.blad}" stroke="${C.bladLine}" stroke-width="1.4"/></g>
      <ellipse cx="200" cy="140" rx="46" ry="30" fill="${C.pros}" stroke="${C.prosLine}" stroke-width="1.4"/>
      <path d="M200 118 V230" stroke="#fff" stroke-width="10"/>
      <path d="M200 112 L200 236" stroke="#5b6b73" stroke-width="5"/><path d="M196 112 l4 -10 l4 10z" fill="#5b6b73"/>
      ${[[178, 132], [222, 146], [186, 156]].map(p => `<path d="M${p[0]} ${p[1]} l8 -4 l-2 8z" fill="#e9b4a0" stroke="#b4703c"/>`).join('')}
      ${pin(200, 228, 120, 220)}${lab(70, 216, 'resectoscope', "resectoscope in the urethra", { size: 9.5 })}
      ${pin(240, 140, 300, 160)}${lab(310, 172, 'prostate', "the excess tissue is shaved away", { size: 9 })}
      ${pin(200, 64, 300, 60)}${lab(310, 50, 'bladder', "bladder", { size: 9.5 })}
      ${f(90, 150, "Dexter’s record:", { size: 9, fill: MUTED, w: 700 })}${f(90, 164, "BPH treated with TURP", { size: 9, fill: MUTED, w: 700 })}`, 'TURP', shadow(sh));
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
    id: 'lx', sym: 'Lx', name: "Language of Birth", short: "Language of Birth", sub: "The parts of the reproductive system and how its words are built: roots, prefixes, suffixes and hormones",
    color: '#B8457A', dark: '#8A2D5A', light: '#FBE7EF',
    levels: ["Parts of the reproductive system", "Main roots", "Prefixes and suffixes"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'lx1', title: "Two systems, one goal", icon: '🌸', items: [
          L("Gonads and gametes", `${fig('repro-overview', [], "Female and male reproductive systems")}A ${e('<b>gonad</b>')} (sex gland) makes both sex cells and hormones:<br>• female: ${e('<b>ovary</b>')} → ${e('<b>ovum</b>')}<br>• male: ${e('<b>testis</b>')} → ${e('<b>spermatozoon</b>')}<br>Each of these two cells, called a ${e('gamete')}, has 23 chromosomes, and their union forms a ${e('<b>zygote</b>')}.`),
          L("Specialists", `${tbl([["specialist", "Job"], [e('gynecologist (GYN)'), "Diseases of the female reproductive system"], [e('obstetrician (OB)'), "pregnancy and childbirth"], [e('urologist'), "Male urinary and reproductive system"], [e('neonatologist'), "Newborns"]])}${memo("gynec/o means woman; OB-GYN means “obstetrics and gynaecology”.")}${pearl("In the case study, Dexter went to a urologist for BPH, and Abigail’s obstetrician sent her to theatre for a caesarean.")}`),
          M("Which is the female sex gland?", ['ovary', 'uterus', 'testis', 'placenta'], "The female gonad = the ovary.", null, F('repro-overview', [])),
          M(`Who is a ${e('<b>gynecologist</b>')}?`, ["specialist in diseases of the female reproductive system", "obstetrician", "newborn specialist", "urinary tract specialist"], 'gynec/o + -logist.'),
          T("The egg and sperm each have 23 chromosomes.", true, "Gametes have half the chromosomes."),
          O("Put the steps from gamete to embryo in order", ['ovum and sperm', 'fertilization', 'zygote', 'implantation', 'embryo'], "Fertilization, zygote, implantation, embryo."),
          P("Match each term to its meaning", [['gonad', "sex gland"], ['gamete', "sex cell"], ['zygote', "fertilized egg"], ['ovum', "egg cell"]], "Basic terms."),
          B("The abbreviation ___ means obstetrics and gynaecology.", ['OB-GYN', 'GU', 'GYN-URO'], 'obstetrics and gynecology.'),
          S("Spell the two-word term for the organs of reproduction", 'reproductive system', "reproduction = producing offspring.", 'repro…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: "Sex hormones", icon: '🧪', items: [
          L("The commander: the pituitary", `${fig('hormones', [], "Sex hormones")}The pituitary sends two hormones to the gonads:<br>• ${e('<b>FSH</b>')} (follicle-stimulating hormone): growth of the ovarian follicle and sperm production<br>• ${e('<b>LH</b>')} (luteinizing hormone): ovulation and testosterone production`),
          L("Hormones of the gonads", `${tbl([["Hormone", "producing", "Job"], [e('estrogen'), "ovary", "female characteristics, building the endometrium"], [e('progesterone'), "corpus luteum and placenta", "maintaining the uterine lining for pregnancy"], [e('testosterone'), "testis", "male characteristics, sperm production"]])}${wb('andr/o', '-gen')} → ${e('<b>androgen</b>')}: any male hormone${memo("Pro-gest-erone means “in favour of pregnancy” (pro means for and gest means pregnancy).")}`),
          M("Which hormone triggers ovulation?", ['LH', 'FSH', 'testosterone', 'oxytocin'], "The LH surge around day 14.", null, F('hormones', [])),
          M("The hormone that maintains the uterine lining for pregnancy is…", ['progesterone', 'estrogen', 'testosterone', 'FSH'], "From the corpus luteum and placenta."),
          T("androgen is the term for male hormones.", true, "andr/o = male."),
          W("Build a word meaning “producing male (hormone)”", ['andr/o', '-gen'], ['estr/o', '-logy', 'gynec/o'], 'androgen.'),
          P("Match each hormone to its source", [['estrogen', "ovary"], ['testosterone', "testis"], ['FSH', "pituitary"], ['progesterone', "corpus luteum"]], "The hormones."),
          B("The root ___ means female (as in estrogen).", ['estr/o', 'andr/o', 'gonad/o'], 'estr/o.'),
          S("Spell the term for the main female sex hormone", 'estrogen', 'estr/o + -gen.', 'estro…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: "The anatomy of a word", icon: '🧩', items: [
          L("Word puzzle", `${fig('wordparts', [], "Prefix + root + suffix")}Every word is built from pieces:<br>• <b>root</b>: the main meaning; e.g. ${e('hyster')} means uterus<br>• <b>prefix</b>: at the start of the word; e.g. ${e('dys-')} means painful<br>• <b>suffix</b>: at the end of the word; e.g. ${e('-ectomy')} means removal<br>• <b>combining vowel</b> (usually ${e('o')}): ${e('men/o/rrhea')}`),
          L("The golden rule", `Start the meaning from the <b>suffix</b>, then the <b>prefix</b> and finally the <b>root</b>:<br>${wb('hyster/o', '-ectomy')} → “removal of the uterus”<br>${wb('dys-', 'men/o', '-rrhea')} → “painful flow of menstruation”<br>${wb('salping/o', '-itis')} → “inflammation of the fallopian tube”${memo("If the suffix starts with a vowel, the combining vowel drops: hyster/o + -ectomy becomes hysterectomy.")}`),
          M(`${e('<b>hysterectomy</b>')} means…`, ["removal of the uterus", "incision of the uterus", "inflammation of the uterus", "viewing the uterus"], 'hyster/o + -ectomy.'),
          M(`In ${e('<b>dysmenorrhea</b>')}, which part is the suffix?`, ["-rrhea = flow", "dys- = painful", "men/o = menstruation", "-a = noun"], 'dys + meno + rrhea.', null, F('wordparts', [])),
          T("In salpingitis the combining vowel o has dropped.", true, 'salping + itis.'),
          W("Build a word meaning “inflammation of an ovary”", ['oophor/o', '-itis'], ['hyster/o', '-ectomy', 'dys-'], 'oophoritis.'),
          O("Read the meaning of dysmenorrhea with the golden rule; put the steps in order", ["-rrhea: flow", "dys-: painful", "men/o: menstruation", "result: painful periods"], "Suffix → prefix → root."),
          P("Match each piece to its type", [['dys-', "prefix"], ['hyster/o', "root"], ['-ectomy', "suffix"], ["o in menorrhea", "combining vowel"]], "The pieces."),
          S("Spell the term for removal of the uterus", 'hysterectomy', 'hyster/o + -ectomy.', 'hyster…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'lx4', title: "Female roots", icon: '🗺️', items: [
          L("The root map", `${fig('root-map-f', [], "Female roots")}${tbl([["root", "Meaning"], [e('hyster/o, metr/o, uter/o'), "uterus"], [e('oophor/o, ovari/o'), "ovary"], [e('salping/o'), "fallopian tube"], [e('cervic/o'), "cervix"], [e('colp/o, vagin/o'), "birth canal"], [e('vulv/o, episi/o'), "vulva"]])}`),
          L("Two roots for one organ", `Both Greek and Latin roots are used: ${e('hyster/o')} (Greek) and ${e('uter/o')} (Latin) both mean uterus; ${e('colp/o')} and ${e('vagin/o')} both mean vagina.${memo("oophor/o means “egg-bearer”; oo means egg and phor means carrying.")}${pearl("In Case Study 16-1, Mrs Naomi had a TAH and BSO; that is, total removal of the uterus and removal of both tubes and ovaries (salpingo-oophorectomy).")}`),
          M(`The root ${e('<b>salping/o</b>')} means…`, ["fallopian tube", "ovary", "birth canal", "cervix"], "salpinx = tube.", null, F('root-map-f', [])),
          M("Which root means “vagina”?", ['colp/o', 'cervic/o', 'oophor/o', 'mamm/o'], 'colposcopy.'),
          T("metr/o and hyster/o both mean uterus.", true, "endometrium, hysterectomy."),
          W("Build a word meaning “removal of a fallopian tube and ovary”", ['salping/o', 'oophor/o', '-ectomy'], ['hyster/o', '-itis', 'colp/o'], 'salpingo-oophorectomy.'),
          P("Match each root to its meaning", [['hyster/o', "uterus"], ['oophor/o', "ovary"], ['cervic/o', "cervix"], ['episi/o', "vulva"]], "Female roots."),
          B("The root ___ means breast (as in mammography).", ['mamm/o', 'men/o', 'metr/o'], "mamm/o, mast/o."),
          S("Spell the term for removal of an ovary", 'oophorectomy', 'oophor/o + -ectomy.', 'oopho…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: "Male roots", icon: '🔷', items: [
          L("The root map", `${fig('root-map-m', [], "Male roots")}${tbl([["root", "Meaning"], [e('orchi/o, orchid/o, test/o'), "testis"], [e('osche/o, scrot/o'), "scrotum"], [e('epididym/o'), "epididymis"], [e('vas/o'), "vas deferens"], [e('prostat/o'), "prostate"], [e('balan/o'), "glans penis"]])}`),
          L("Sperm and semen", `• sperm: ${e('spermat/o')} and ${e('sperm/o')}<br>• semen: ${e('semin/o')}<br>• seminal vesicle: ${e('vesicul/o')}<br>${wb('spermat/o', '-genesis')} → ${e('<b>spermatogenesis</b>')}: sperm production${memo("The orchid takes its name from the Greek word for testis; the shape of its root looks like a testis!")}${pearl("In the record, <bdi dir=\"ltr\">“failure of the testes to descend”</bdi> means cryptorchidism and <bdi dir=\"ltr\">“surgical fixation of the testes”</bdi> means orchiopexy.")}`),
          M(`The root ${e('<b>orchi/o</b>')} means…`, ["testis", "prostate", "shaft of the male organ", "seminal vesicle"], "orchitis = inflammation of the testis.", null, F('root-map-m', [])),
          M("Which root means “glans penis”?", ['balan/o', 'vas/o', 'semin/o', 'osche/o'], 'balanitis.'),
          T("vas/o in vasectomy refers to the vas deferens.", true, 'vas deferens.'),
          W("Build a word meaning “inflammation of the prostate”", ['prostat/o', '-itis'], ['orchi/o', '-ectomy', 'balan/o'], 'prostatitis.'),
          P("Match each root to its meaning", [['orchi/o', "testis"], ['prostat/o', "prostate"], ['epididym/o', "epididymis"], ['osche/o', "scrotum"]], "Male roots."),
          B("The root ___ means sperm.", ['spermat/o', 'semin/o', 'vesicul/o'], 'spermatogenesis.'),
          S("Spell the term for inflammation of the testis", 'orchitis', 'orchi/o + -itis.', 'orch…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: "Roots of pregnancy and milk", icon: '🤰', items: [
          L("Pregnancy and birth", `${tbl([["root", "Meaning", "Example"], [e('embry/o'), "embryo", e('embryonic')], [e('fet/o'), "baby", e('fetal')], [e('amni/o'), "amnion", e('amniocentesis')], [e('nat/o'), "birth", e('neonatal')], [e('grav/i'), "pregnant", e('gravida')], [e('par/o'), "to give birth", e('nullipara')]])}`),
          L("Milk and navel", `• milk: ${e('lact/o')} and ${e('galact/o')}; as in ${e('lactation')} and ${e('galactorrhea')}<br>• navel: ${e('omphal/o')} and ${e('umbilic/o')}; as in ${e('umbilical cord')}<br>• birth: ${e('toc/o')}; as in ${e('dystocia')}${memo("galaxy (the Milky Way) shares its root with galact/o; it means milk!")}`),
          M(`The root ${e('<b>nat/o</b>')} means…`, ["birth", "milk", "baby", "the navel"], "prenatal, neonatal."),
          M("Which one means “relating to the fetus”?", ['fetal', 'natal', 'umbilical', 'embryonal'], 'fet/o + -al.'),
          T("galact/o and lact/o both mean milk.", true, "galactorrhea, lactation."),
          W("Build a word meaning “before birth”", ['pre-', 'nat/o', '-al'], ['post-', 'fet/o', '-itis'], 'prenatal.'),
          P("Match each root to its meaning", [['embry/o', "embryo"], ['amni/o', "amnion"], ['omphal/o', "the navel"], ['toc/o', "Childbirth"]], "Pregnancy roots."),
          B("The word ___ means “relating to the newborn”.", ['neonatal', 'prenatal', 'postnatal'], 'neo- + nat/o + -al.'),
          S("Spell the term for milk production and breastfeeding", 'lactation', "lact/o = milk.", 'lact…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'lx7', title: "Birth prefixes", icon: '⏱️', items: [
          L("Time and number", `${tbl([["prefix", "Meaning", "Example"], [e('ante-, pre-'), "before", e('antepartum, prenatal')], [e('post-'), "after", e('postpartum')], [e('primi-'), "first", e('primigravida')], [e('multi-'), "many", e('multipara')], [e('nulli-'), "none", e('nullipara')], [e('neo-'), "new", e('neonate')]])}`),
          L("Place and state", `${tbl([["prefix", "Meaning", "Example"], [e('a-, an-'), "without", e('amenorrhea')], [e('dys-'), "painful, difficult", e('dystocia')], [e('endo-'), "within", e('endometrium')], [e('peri-'), "around", e('perimetrium')], [e('ec-'), "outside", e('ectopic')]])}${memo("Don’t mix up ante and anti: ante means before, as in antepartum; but anti means against, as in antibiotic.")}`),
          M("Which prefix means “none”?", ['nulli-', 'primi-', 'multi-', 'neo-'], "nullipara = has never given birth."),
          M(`${e('<b>postpartum</b>')} means…`, ["after delivery", "before birth", "during labour", "difficult labour"], 'post- + -partum.'),
          T("primigravida means a woman who is pregnant for the first time.", true, 'primi- + -gravida.'),
          W("Build a word meaning “difficult labour”", ['dys-', '-tocia'], ['eu-', '-partum', 'primi-'], 'dystocia.'),
          P("Match each prefix to its meaning", [['ante-', "before"], ['post-', "after"], ['multi-', "many"], ['endo-', "within"]], "The prefixes."),
          B("A pregnancy outside the uterus is an ___ pregnancy.", ['ectopic', 'endotopic', 'antetopic'], "The prefix ec- means out and top/o means place."),
          S("Spell the term for a woman who has never given birth", 'nullipara', 'nulli- + -para.', 'nulli…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: "Birth suffixes", icon: '✂️', items: [
          L("Sign and disease suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-rrhea'), "flow, discharge", e('leukorrhea')], [e('-rrhagia'), "bleeding", e('menorrhagia')], [e('-cele'), "hernia, swelling", e('hydrocele')], [e('-salpinx'), "fallopian tube", e('pyosalpinx')], [e('-spermia'), "condition of sperm", e('oligospermia')], [e('-arche'), "beginning", e('menarche')]])}`),
          L("Pregnancy and surgical suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-cyesis'), "pregnancy", e('pseudocyesis')], [e('-tocia'), "Childbirth", e('dystocia')], [e('-gravida'), "a pregnant woman", e('multigravida')], [e('-para'), "woman who has given birth", e('primipara')], [e('-pexy'), "surgical fixation", e('orchiopexy')], [e('-rrhaphy'), "stitch", e('colporrhaphy')]])}${memo("Remember -pexy as a “peg”: it fixes something in its place.")}`),
          M(`The suffix ${e('<b>-pexy</b>')} means…`, ["surgical fixation", "removal", "stitch", "incision"], 'orchiopexy.'),
          M("Which suffix builds “first menstrual period”?", ['-arche', '-rrhea', '-cyesis', '-para'], 'menarche.'),
          T("-salpinx means fallopian tube; pyosalpinx means pus in the tube.", true, "py/o = pus."),
          W("Build a word meaning “too few sperm”", ['olig/o', '-spermia'], ['a-', '-rrhea', 'hydr/o'], 'oligospermia.'),
          P("Match each suffix to its meaning", [['-rrhaphy', "stitch"], ['-cele', "rupture"], ['-cyesis', "pregnancy"], ['-rrhagia', "bleeding"]], "Suffixes."),
          B("A collection of fluid around the testis is a ___.", ['hydrocele', 'varicocele', 'spermatocele'], 'hydr/o + -cele.'),
          S("Spell the term for the first menstrual period", 'menarche', 'men/o + -arche.', 'menar…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: "Look-alike Traps", icon: '🪤', items: [
          L("One letter, two meanings", `${fig('twins', [], "Tricky pairs")}${vs(['men/o', "menstruation"], ['metr/o', "uterus"])}${vs(['-rrhea', "flow, discharge"], ['-rrhagia', "heavy bleeding"])}`),
          L("Pregnancy or birth?", `${vs(['gravida', "number of pregnancies"], ['para', "number of viable births"])}${vs(['-tomy', "incision"], ['-ectomy', "removal"])}${memo("Remember G with Got pregnant and P with Produced a baby.")}${pearl("In a chart note, the patient is G4 P4; that is, four pregnancies and four live births.")}`),
          M("menorrhagia means…", ["heavy periods", "absence of periods", "bleeding between periods", "painful periods"], 'men/o + -rrhagia.', null, F('twins', [])),
          M("metrorrhagia means…", ["uterine bleeding between periods", "heavy bleeding during periods", "white discharge", "absence of periods"], "metr/o = uterus."),
          T("G3 P2 means she has been pregnant three times and has had two viable births.", true, "Gravida and para."),
          W("Build a word meaning “heavy menstrual bleeding”", ['men/o', '-rrhagia'], ['-rrhea', 'metr/o', 'a-'], 'menorrhagia.'),
          P("Match each term to its meaning", [['amenorrhea', "absence of periods"], ['menorrhagia', "heavy bleeding"], ['leukorrhea', "white discharge"], ['metrorrhagia', "bleeding between periods"]], "The traps."),
          B("Incision of the uterus is ___, but its removal is hysterectomy.", ['hysterotomy', 'hysteropexy', 'hysteroscopy'], "-tomy = incision."),
          S("Spell the term for absence of periods", 'amenorrhea', 'a- + men/o + -rrhea.', 'amen…'),
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
    id: 'fm', sym: 'Fm', name: "Female Reproductive System", short: "Female", sub: "Ovary, fallopian tubes, uterus and cervix, vagina and vulva, breast, the menstrual cycle and menopause",
    color: '#E46A8E', dark: '#B0405F', light: '#FDE6EC',
    levels: ["Internal organs", "External organs and the breast", "Cycle and hormones"],
    gens: EA.genIds('fm'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'fm1', title: "Uterus, tubes and ovaries", icon: '🌷', items: [
          L("Internal organs", `${fig('female-front', [], "Uterus and adnexa")}• ${e('<b>ovary</b>')}: two ovaries; they make eggs, estrogen and progesterone<br>• ${e('<b>uterine tube</b>')}: the fallopian tube; it catches the egg with its finger-like ${e('fimbriae')}; the site of fertilization<br>• ${e('<b>uterus</b>')}: the womb; its top is the ${e('fundus')}, then the body, and its lower end the ${e('cervix')}<br>• ${e('<b>vagina</b>')}: the birth canal`),
          L("Appendages", `The ovaries and tubes together are called the ${e('<b>adnexa</b>')}.${memo("The egg’s route: ovary, fimbriae, fallopian tube, uterus.")}${pearl("In Case Study 16-1, Mrs Naomi’s pathology showed <bdi dir=\"ltr\">“stenosis of the right uterine tube”</bdi>; that is, narrowing of the right fallopian tube.")}`),
          M("Where does fertilization usually take place?", ["fallopian tube", "uterus", "ovary", "birth canal"], 'uterine tube.', null, F('female-front', [])),
          M(`Which part of the uterus is the ${e('<b>fundus</b>')}?`, ["the rounded upper part", "the lower opening", "the inner layer", "the tube"], "The roof of the uterus."),
          T("The ovaries and fallopian tubes are called the adnexa.", true, "The uterine appendages."),
          O("Put the egg’s route in order", ['ovary', 'fimbriae', 'uterine tube', 'uterus'], "From the ovary to the uterus."),
          P("Match each part to its everyday name", [['ovary', "female gland making eggs"], ['uterine tube', "fallopian tube"], ['cervix', "neck of the uterus"], ['fimbriae', "finger-like fringes of the tube"]], "The organs."),
          B("Another name for the uterine tube is the ___ tube.", ['fallopian', 'eustachian', 'Bartholin'], "Fallopian tube."),
          S("Spell the term for the female gonad", 'ovary', 'ovari/o.', 'ova…'),
          N('t2f:fm')
        ]
      },
      {
        id: 'fm2', title: "Wall and position of the uterus", icon: '🧱', items: [
          L("Three layers", `${fig('uterine-wall', [], "Uterine wall")}• ${e('<b>perimetrium</b>')}: the outer layer<br>• ${e('<b>myometrium</b>')}: the muscular layer; labour contractions<br>• ${e('<b>endometrium</b>')}: the inner layer; it thickens every month and is shed in menstruation`),
          L("Position of the uterus", `${fig('uterine-positions', ["Forward and backward tilt of the uterus"], "Positions of the uterus")}The uterus usually tilts forward over the bladder: ${e('anteflexion')} and ${e('anteversion')}. If it tilts backward: ${e('<b>retroversion</b>')} or ${e('retroflexion')}.${pearl("A clinical scenario: Mrs Rosie McConnell has been told she has a <bdi dir=\"ltr\">“retroverted uterus and fibroids”</bdi>; that is, a backward-tilted uterus and fibroids.")}`),
          M("Which is the muscular layer of the uterus?", ['myometrium', 'endometrium', 'perimetrium', 'cervix'], "my/o = muscle.", null, F('uterine-wall', [])),
          M("Which layer is shed in menstruation?", ['endometrium', 'myometrium', 'perimetrium', 'ovary'], "the inner lining"),
          T("retroversion means a backward tilt of the uterus.", true, "retro- = backward.", F('uterine-positions', [])),
          W("Build a word meaning “layer around the uterus”", ['peri-', 'metr/o', '-um'], ['endo-', 'my/o', '-itis'], 'perimetrium.'),
          P("Match each layer to its feature", [['perimetrium', "outer layer"], ['myometrium', "contraction"], ['endometrium', "monthly shedding"], ['anteversion', "forward tilt"]], "The uterine wall."),
          B("A backward-tilted uterus is a ___ uterus.", ['retroverted', 'anteverted', 'prolapsed'], 'retroversion.'),
          S("Spell the term for the inner lining of the uterus", 'endometrium', 'endo- + metr/o + -ium.', 'endom…'),
          N('f2t:fm')
        ]
      },
      {
        id: 'fm3', title: "Side section of the female pelvis", icon: '🔎', items: [
          L("Neighbours", `${fig('female-sagittal', [], "Section of the female pelvis")}The uterus lies between the ${e('<b>urinary bladder</b>')} (in front) and the ${e('<b>rectum</b>')} (behind). The space between the uterus and rectum is called the ${e('<b>rectouterine pouch</b>')} or ${e('cul-de-sac')} (${e('culd/o')}).`),
          L("Cervix and vagina", `${e('<b>cervix</b>')} is the lower part of the uterus and opens into the ${e('vagina')}; its channel is the ${e('cervical canal')}. In labour the cervix thins (${e('effacement')}) and opens (${e('dilation')}).${memo("cervix means “neck”; the neck of the uterus that reaches the vagina.")}${pearl("In a clinical scenario, the doctor ordered a <bdi dir=\"ltr\">“culdoscopy”</bdi> for Mrs Charity Peterson; that is, viewing the rectouterine pouch with a scope.")}`),
          M("Which organ lies in front of the uterus?", ["bladder", "the straight final section of the large bowel", "kidney", "ovary"], 'bladder.', null, F('female-sagittal', [])),
          M("Which space does the root culd/o refer to?", ["rectouterine pouch", "cervix", "fallopian tube", "birth canal"], 'cul-de-sac.'),
          T("The bladder is in front of the uterus and the rectum behind it.", true, "A sagittal section."),
          O("Put the structures in order from front to back", ['pubic bone', 'urinary bladder', 'uterus', 'rectouterine pouch', 'rectum'], "From front to back."),
          P("Match each term to its meaning", [['cul-de-sac', "rectouterine pouch"], ['cervical canal', "passage through the neck of the uterus"], ['rectum', "the straight final section of the large bowel"], ['pubic bone', "bone at the front of the pelvis"]], "Neighbours."),
          B("The abbreviation ___ in a record means cervix.", ['Cx', 'Cs', 'CV'], 'cervix.'),
          S("Spell the term for the neck of the uterus", 'cervix', 'cervic/o.', 'cerv…'),
          N('d2t:fm')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'fm4', title: "Vulva and perineum", icon: '🌺', items: [
          L("External organs", `${fig('vulva', [], "vulva")}The female external ${e('<b>vulva</b>')} or ${e('genitalia')} (${e('vulv/o, episi/o')}):<br>• ${e('labia majora')} and ${e('labia minora')}: the outer and inner lips<br>• ${e('clitoris')}: a small sensitive organ<br>• the urethral opening and the vaginal opening<br>• ${e('hymen')}: a thin membrane at the vaginal opening`),
          L("Glands and perineum", `${e('<b>Bartholin glands</b>')}: two glands beside the vaginal opening that secrete mucus.<br>${e('<b>perineum</b>')}: the area between the vaginal opening and the anus; in labour it is sometimes cut: ${e('episiotomy')}.${memo("episi/o means vulva; an episiotomy is a cut in the perineum to widen the vaginal opening.")}`),
          M("What is the area between the vaginal opening and the anus called?", ['perineum', 'vulva', 'mons pubis', 'labia'], "The perineum.", null, F('vulva', [])),
          M("The glands beside the vaginal opening that make mucus are the…", ['Bartholin glands', 'mammary glands', 'Cowper glands', 'adnexa'], "Bartholin glands."),
          T("vulv/o and episi/o both mean vulva.", true, "vulvitis, episiotomy."),
          W("Build a word meaning “incision of the vulva (perineum)”", ['episi/o', '-tomy'], ['vulv/o', '-itis', 'colp/o'], 'episiotomy.'),
          P("Match each part to its everyday name", [['labia majora', "outer folds of the vulva"], ['labia minora', "inner folds of the vulva"], ['hymen', "thin membrane at the vaginal opening"], ['vulva', "external female genitals"]], "External organs."),
          B("Inflammation of the vulva is ___.", ['vulvitis', 'vaginitis', 'cervicitis'], 'vulv/o + -itis.'),
          S("Spell the term for the area between the vaginal opening and anus", 'perineum', 'perine/o.', 'perin…'),
          N('r2m:fm')
        ]
      },
      {
        id: 'fm5', title: "breast", icon: '🍼', items: [
          L("Structure of the breast", `${fig('breast', [], "breast")}The ${e('<b>mammary gland</b>')} (breast; ${e('mamm/o, mast/o')}) is made of 15 to 20 milk gland lobes, ${e('<b>lactiferous ducts</b>')}, fatty tissue, the ${e('nipple')} and the ${e('<b>areola</b>')}.`),
          L("Milk and disease", `${e('lactation')} (breastfeeding) is driven by the hormones prolactin and oxytocin.<br>${wb('mast/o', '-itis')} → ${e('mastitis')}: inflammation of the breast, often during breastfeeding<br>${wb('gynec/o', 'mast/o', '-ia')} → ${e('gynecomastia')}: breast enlargement in males${memo("mamm/o (Latin) and mast/o (Greek) both mean breast: mammography and mastectomy.")}`),
          M("The ducts that carry milk to the nipple are the…", ['lactiferous ducts', 'uterine tubes', 'seminal ducts', 'Bartholin ducts'], "lact/o = milk.", null, F('breast', [])),
          M(`${e('<b>gynecomastia</b>')} means…`, ["breast enlargement in males", "mastitis", "absence of a breast", "breast cancer"], 'gynec/o + mast/o + -ia.'),
          T("The areola is the dark ring around the nipple.", true, "Areola."),
          W("Build a word meaning “inflammation of the breast”", ['mast/o', '-itis'], ['mamm/o', '-graphy', 'metr/o'], 'mastitis.'),
          P("Match each term to its meaning", [['nipple', "tip of the breast"], ['areola', "pigmented ring around the nipple"], ['lactation', "breastfeeding"], ['mammary gland', "milk-producing gland"]], "The breast."),
          B("The root ___ in mastectomy means breast.", ['mast/o', 'men/o', 'metr/o'], 'mast/o.'),
          S("Spell the term for inflammation of the breast", 'mastitis', 'mast/o + -itis.', 'mast…'),
          N('m2r:fm')
        ]
      },
      {
        id: 'fm6', title: "One patient, one history", icon: '📋', items: [
          L("Reading the Chart", `${pearl("A clinical scenario: Mrs Pamela Kline, aged 40, says she has been pregnant five times, had fluid drawn off during her last pregnancy, has had inflammation of the vagina and cervix, had a hernia of a fallopian tube that was repaired, and has had her uterus, ovaries and tubes removed.")}${tbl([["Phrase", "Medical term"], ["five pregnancies", e('gravida 5')], ["drawing off amniotic fluid", e('amniocentesis')], ["inflammation of the vagina and cervix", e('vaginitis, cervicitis')], ["hernia of a fallopian tube", e('salpingocele')], ["removal of the uterus, ovaries and tubes", e('TAH-BSO')]])}`),
          L("The prefix and suffix tell you the organ’s site", `${wb('cervic/o', '-itis')} → ${e('cervicitis')}<br>${wb('vagin/o', '-itis')} → ${e('vaginitis')} (or ${e('colpitis')})<br>${wb('salping/o', '-cele')} → ${e('salpingocele')}${memo("First find the organ from the root, then the event from the suffix.")}`),
          M("Which one is “inflammation of the cervix”?", ['cervicitis', 'colpitis', 'metritis', 'salpingitis'], 'cervic/o + -itis.'),
          M("How is “pregnant five times” written in a record?", ['gravida 5', 'para 5', 'nullipara', 'primigravida'], "gravida = number of pregnancies."),
          T("colpitis and vaginitis both mean inflammation of the vagina.", true, 'colp/o = vagin/o.'),
          W("Build a word meaning “hernia of a fallopian tube”", ['salping/o', '-cele'], ['oophor/o', '-itis', 'hyster/o'], 'salpingocele.'),
          P("Match each phrase in the record to its term", [["inflammation of the vagina", 'vaginitis'], ["inflammation of the cervix", 'cervicitis'], ["hernia of a fallopian tube", 'salpingocele'], ["drawing off amniotic fluid", 'amniocentesis']], "Pamela Kline’s record."),
          B("Removal of both tubes and ovaries is abbreviated ___.", ['BSO', 'TAH', 'D&C'], 'bilateral salpingo-oophorectomy.'),
          S("Spell the term for inflammation of the vagina", 'vaginitis', 'vagin/o + -itis.', 'vagin…'),
          N('wb:fm')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'fm7', title: "Ovary and ovulation", icon: '🥚', items: [
          L("From follicle to corpus luteum", `${fig('ovary-cycle', [], "Ovarian cycle")}In the ovary an ${e('<b>ovarian follicle</b>')} grows and the mature follicle (${e('graafian follicle')}) ruptures: ${e('<b>ovulation</b>')}. What remains becomes the ${e('<b>corpus luteum</b>')} (yellow body) and makes progesterone.`),
          L("If fertilization does not happen…", `The corpus luteum shrinks after about 14 days and becomes the ${e('corpus albicans')} (white body); progesterone falls and the endometrium is shed.${wb('an-', 'ovul/o', '-ation')} → ${e('anovulation')}: failure to ovulate${memo("luteum means yellow; albicans means white.")}`),
          M("What is the release of an egg from the ovary called?", ['ovulation', 'menstruation', 'implantation', 'fertilization'], "Ovulation.", null, F('ovary-cycle', [])),
          M("Which hormone does the corpus luteum make?", ['progesterone', 'testosterone', 'FSH', 'oxytocin'], 'corpus luteum.'),
          T("anovulation means failure to ovulate.", true, "an- = without."),
          O("Put the ovarian events in order", ['primary follicle', 'graafian follicle', 'ovulation', 'corpus luteum', 'corpus albicans'], "The ovarian cycle."),
          P("Match each term to its meaning", [['ovarian follicle', "sac holding a developing egg"], ['corpus luteum', "yellow body after ovulation"], ['corpus albicans', "white scar body after the corpus luteum"], ['ovulation', "release of the egg"]], "The ovary."),
          B("A mature follicle is called a ___ follicle.", ['graafian', 'Bartholin', 'Cowper'], 'graafian.'),
          S("Spell the term for release of an egg from the ovary", 'ovulation', 'ovul/o + -ation.', 'ovul…'),
          N('t2f:fm')
        ]
      },
      {
        id: 'fm8', title: "menstrual cycle", icon: '📆', items: [
          L("28 days in four steps", `${fig('menstrual-cycle', [], "menstrual cycle")}${tbl([["Stage", "Day", "What happens"], [e('menstrual'), "1 to 5", "shedding of the endometrium and bleeding"], [e('proliferative (follicular)'), "6 to 13", "estrogen builds the endometrium"], [e('ovulation'), "14", "release of the egg"], [e('secretory (luteal)'), "15 to 28", "progesterone keeps the endometrium ready"]])}`),
          L("Terms", `${wb('men/o', '-arche')} → ${e('<b>menarche</b>')}: the first period at puberty<br>${e('<b>menstruation</b>')} (${e('menses')}): monthly bleeding<br>${e('<b>premenstrual syndrome (PMS)</b>')}: physical and emotional symptoms a few days before a period${pearl("A clinical scenario: Mrs Beth Meyers takes a 21-day contraceptive pill and, because she sometimes forgets a pill, has breakthrough bleeding (bleeding between periods).")}`),
          M("On which day of a 28-day cycle does ovulation usually happen?", ["14", "1", "5", "28"], "Mid-cycle.", null, F('menstrual-cycle', [])),
          M("Which hormone dominates in the secretory (luteal) phase?", ['progesterone', 'estrogen', 'testosterone', 'FSH'], "From the corpus luteum."),
          T("menarche means the first period.", true, 'men/o + -arche.'),
          O("Put the phases of the cycle in order", ['menstrual', 'proliferative', 'ovulation', 'secretory'], "From day 1 to 28."),
          P("Match each phase to its days", [['menstrual', "days 1 to 5"], ['proliferative', "days 6 to 13"], ['ovulation', "day 14"], ['secretory', "days 15 to 28"]], "The cycle."),
          B("The abbreviation ___ means premenstrual syndrome.", ['PMS', 'PID', 'TSS'], 'premenstrual syndrome.'),
          S("Spell the term for the monthly uterine bleeding", 'menstruation', 'menstru/o + -ation.', 'menstr…'),
          N('f2t:fm')
        ]
      },
      {
        id: 'fm9', title: "From puberty to menopause", icon: '🌙', items: [
          L("menopause", `${e('<b>menopause</b>')}: the permanent end of periods, usually around age 50. The years before it are called ${e('<b>perimenopause</b>')}, with irregular periods and hot flushes. ${e('<b>postmenopausal</b>')} means after menopause.`),
          L("At the bedside", `${pearl("A clinical scenario: Mrs Heidi Red Feather, aged 47, has night sweats, bleeding between periods, hot flushes and depression; these are signs of perimenopause.")}${pearl("A chart note: a 52-year-old woman whose last period was at 48 was admitted for laparoscopy and D&C with <bdi dir=\"ltr\">“postmenopausal bleeding”</bdi>; bleeding after menopause must be investigated.")}${vs(["perimenopause", "perimenopause<br>the years before menopause"], ["postmenopausal", "postmenopausal<br>after the last period"])}`),
          M("What is the permanent end of periods called?", ['menopause', 'menarche', 'amenorrhea', 'puberty'], "Menopause."),
          M("Mrs Heidi Red Feather’s symptoms point mostly to which stage?", ['perimenopause', 'menarche', 'pregnancy', 'puerperium'], "Hot flushes and irregular periods."),
          T("Postmenopausal bleeding must be investigated.", true, "To rule out endometrial cancer."),
          O("Put the stages of a woman’s reproductive life in order", ['puberty', 'menarche', 'reproductive years', 'perimenopause', 'menopause'], "From puberty to menopause."),
          P("Match each term to its meaning", [['menopause', "permanent end of menstruation"], ['perimenopause', "years leading up to the last period"], ['postmenopausal', "after the last period"], ['HRT', "hormone replacement therapy"]], "Menopause."),
          B("Treatment with estrogen for menopausal symptoms is called ___.", ['HRT', 'IVF', 'TURP'], 'hormone replacement therapy.'),
          S("Spell the term for the permanent end of periods", 'menopause', 'men/o + pause.', 'meno…'),
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
    id: 'ml', sym: 'Ml', name: "Male Reproductive System", short: "Male", sub: "Testis and scrotum, sperm, epididymis and vas deferens, prostate and glands, the penis and puberty",
    color: '#2E86C1', dark: '#1B5F8C', light: '#E3F0FA',
    levels: ["Testis and sperm", "Ducts and glands", "Penis and puberty"],
    gens: EA.genIds('ml'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'ml1', title: "Testis and scrotum", icon: '🫘', items: [
          L("testis", `${fig('testis', [], "Section of the testis")}The ${e('<b>testis</b>')} or ${e('testicle')} (plural ${e('testes')}; roots ${e('orchi/o, orchid/o, test/o')}) is one of two oval glands in the ${e('<b>scrotum</b>')} (${e('scrot/o')}). Inside it, the coiled ${e('<b>seminiferous tubules</b>')} make sperm.`),
          L("The right temperature", `The scrotum lies outside the abdomen so that the testes stay about 2 to 3 degrees cooler than the body; sperm production needs this lower temperature.<br>The ${e('<b>interstitial (Leydig) cells</b>')} between the tubules make ${e('testosterone')}.${memo("orchi/o, as in “orchid”; the Greek name of the plant comes from the shape of its tuber.")}`),
          M("In which part of the testis is sperm made?", ['seminiferous tubules', 'epididymis', 'prostate', 'urethra'], "The seminiferous tubules.", null, F('testis', [])),
          M("Which cells make testosterone?", ['interstitial (Leydig) cells', 'Sertoli cells', 'ovarian follicle', 'corpus luteum'], "The interstitial cells."),
          T("The scrotum keeps the testes cooler than body temperature.", true, "For sperm production."),
          W("Build a word meaning “inflammation of the testis”", ['orchi/o', '-itis'], ['scrot/o', '-ectomy', 'prostat/o'], 'orchitis.'),
          P("Match each term to its meaning", [['testis', "male gland making sperm"], ['scrotum', "skin pouch holding the testes"], ['seminiferous tubules', "sperm-making tubules"], ['interstitial cells', "testosterone-making cells"]], "The testis."),
          B("The root ___ in orchiectomy means testis.", ['orchi/o', 'oophor/o', 'osche/o'], 'orchi/o.'),
          S("Spell the term for the skin pouch holding the testes", 'scrotum', 'scrot/o.', 'scro…'),
          N('t2f:ml')
        ]
      },
      {
        id: 'ml2', title: "Sperm and spermatogenesis", icon: '🐟', items: [
          L("Structure of a sperm", `${fig('sperm-cell', [], "sperm")}A ${e('<b>spermatozoon</b>')} (plural ${e('spermatozoa')}; roots ${e('sperm/o, spermat/o')}) has three parts:<br>• ${e('head')}: the nucleus with 23 chromosomes and the ${e('<b>acrosome</b>')} cap, which holds enzymes for entering the egg<br>• ${e('midpiece')}: mitochondria for energy<br>• ${e('tail (flagellum)')}: the tail for movement`),
          L("spermatogenesis", `${e('<b>spermatogenesis</b>')} starts at puberty and takes about 74 days. Sperm mature in the epididymis and gain the ability to move (${e('motility')}).${wb('spermat/o', '-genesis')} → making sperm${pearl("In Case Study, Ruth checks <bdi dir=\"ltr\">“sperm motility”</bdi>, the movement of sperm, in a sample in the IVF laboratory.")}`),
          M("The cap on the sperm head that holds enzymes for entering the egg is the…", ['acrosome', 'flagellum', 'midpiece', 'nucleus'], "The acrosome.", null, F('sperm-cell', [])),
          M("In which part of the sperm are the mitochondria?", ['midpiece', 'head', 'tail', 'acrosome'], "Supplying energy for the tail."),
          T("spermatogenesis means the making of sperm.", true, 'spermat/o + -genesis.'),
          O("Put the parts of a sperm in order from front to back", ['acrosome', 'head', 'midpiece', 'tail'], "From tip to tail."),
          P("Match each part to its job", [['acrosome', "entering the egg"], ['head', "nucleus and chromosomes"], ['midpiece', "energy"], ['flagellum', "Movement"]], "The sperm."),
          B("The ability of sperm to move is called sperm ___.", ['motility', 'count', 'morphology'], "Motility."),
          S("Spell the term for sperm production", 'spermatogenesis', 'spermat/o + -genesis.', 'spermato…'),
          N('f2t:ml')
        ]
      },
      {
        id: 'ml3', title: "route of sperm", icon: '🛤️', items: [
          L("From the testis to the outside", `${fig('sperm-path', [], "route of sperm")}${e('seminiferous tubules')} → ${e('<b>epididymis</b>')} (maturation and storage) → ${e('<b>vas deferens</b>')} (${e('vas/o')}) → ${e('ejaculatory duct')} → ${e('<b>urethra</b>')}.`),
          L("At the bedside", `${wb('vas/o', '-ectomy')} → ${e('<b>vasectomy</b>')}: cutting and tying the vas deferens to prevent pregnancy.${pearl("In Case Study, Mr Derek, aged 48, had an <bdi dir=\"ltr\">“elective vasectomy”</bdi>, a vasectomy by choice, along with repair of bilateral inguinal hernias.")}${memo("To remember the route: <bdi dir=\"ltr\">“S-E-V-E-U”</bdi>: Seminiferous, Epididymis, Vas, Ejaculatory, Urethra.")}`),
          M("Where do sperm mature and get stored?", ['epididymis', 'prostate', 'urethra', 'seminal vesicle'], "The epididymis.", null, F('sperm-path', [])),
          M("Which duct is cut in a vasectomy?", ['vas deferens', 'urethra', 'ejaculatory duct', 'uterine tube'], 'vas/o.'),
          T("The male urethra carries out both urine and semen.", true, "The urethra is shared."),
          O("Put the route of sperm in order", ['seminiferous tubules', 'epididymis', 'vas deferens', 'ejaculatory duct', 'urethra'], 'S-E-V-E-U.'),
          P("Match each part to its job", [['epididymis', "sperm maturation and storage"], ['vas deferens', "carrying sperm into the pelvis"], ['ejaculatory duct', "entry into the urethra"], ['urethra', "exit of semen and urine"]], "The route."),
          B("Cutting the vas deferens is a ___.", ['vasectomy', 'orchiectomy', 'circumcision'], 'vas/o + -ectomy.'),
          S("Spell the term for the coiled tube where sperm mature", 'epididymis', 'epididym/o.', 'epidid…'),
          N('d2t:ml')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'ml4', title: "Side section of the male pelvis", icon: '🔎', items: [
          L("Neighbours", `${fig('male-sagittal', [], "Section of the male pelvis")}The ${e('<b>prostate gland</b>')} lies below the bladder and surrounds the start of the urethra. The ${e('<b>seminal vesicles</b>')} lie behind the bladder, and the rectum is behind the prostate; that is why the doctor feels the prostate with a ${e('<b>digital rectal examination (DRE)</b>')}.`),
          L("At the bedside", `${pearl("In the case study, on DRE of Mr Dexter, aged 60, the doctor felt an enlarged prostate of about 50 grams, and BPH was suspected.")}${memo("The prostate is like a ring around the urethra; if it enlarges, it narrows the urine stream.")}`),
          M("Where is the prostate relative to the bladder?", ["below the bladder, around the start of the urethra", "above the bladder", "inside the scrotum", "beside the kidney"], "Below the bladder.", null, F('male-sagittal', [])),
          M("Why is the prostate examined through the rectum?", ["because it lies just in front of the rectum", "because it is inside the rectum", "because it cannot be seen from the abdomen", "because it is in the scrotum"], 'DRE.'),
          T("DRE means examining the prostate with a finger through the rectum.", true, 'digital rectal examination.'),
          O("Put the structures in order from front to back", ['pubic bone', 'urinary bladder', 'seminal vesicle', 'rectum'], "From front to back."),
          P("Match each term to its meaning", [['prostate gland', "prostate"], ['seminal vesicle', "gland adding fluid to semen"], ['rectum', "the straight final section of the large bowel"], ['DRE', "digital rectal examination"]], "The male pelvis."),
          B("The root ___ means prostate.", ['prostat/o', 'prostrat/o', 'proct/o'], "prostate, not prostrate."),
          S("Spell the term for the gland around the start of the male urethra", 'prostate', 'prostat/o.', 'prost…'),
          N('r2m:ml')
        ]
      },
      {
        id: 'ml5', title: "Glands and semen", icon: '💧', items: [
          L("Three glands", `${tbl([["gland", "Share of semen"], [e('seminal vesicles'), "about 60%; a sugary fluid (fructose) for sperm energy"], [e('prostate gland'), "about 30%; an alkaline fluid"], [e('bulbourethral (Cowper) glands'), "lubricating mucus before ejaculation"]])}`),
          L("semen", `${e('<b>semen</b>')} (${e('semin/o')}) is a mixture of sperm and the secretions of these glands. ${e('<b>ejaculation</b>')} means expelling semen.${wb('a-', 'sperm/o', '-ia')} → ${e('aspermia')}: absence of semen or sperm<br>${wb('olig/o', 'sperm/o', '-ia')} → ${e('oligospermia')}: a low sperm count${memo("Cowper glands in men are the counterpart of Bartholin glands in women; both are lubricating.")}`),
          M("Which gland provides most of the volume of semen?", ['seminal vesicles', 'prostate', 'Cowper glands', 'testis'], "About 60%."),
          M(`${e('<b>oligospermia</b>')} means…`, ["low sperm count", "absence of semen", "blood in the semen", "orchitis"], "olig/o = few."),
          T("Cowper glands are the counterpart of Bartholin glands in women.", true, "Lubricating glands."),
          W("Build a word meaning “too few sperm”", ['olig/o', 'sperm/o', '-ia'], ['a-', 'orchi/o', '-ectomy'], 'oligospermia.'),
          P("Match each gland to its secretion", [['seminal vesicles', "fructose"], ['prostate', "alkaline fluid"], ['Cowper glands', "lubricating mucus"], ['testis', "sperm"]], "Semen."),
          B("Expelling semen is ___.", ['ejaculation', 'erection', 'ovulation'], "Ejaculation."),
          S("Spell the term for the fluid of sperm and gland secretions", 'semen', 'semin/o.', 'sem…'),
          N('m2r:ml')
        ]
      },
      {
        id: 'ml6', title: "Spermatic cord and inguinal canal", icon: '🪢', items: [
          L("spermatic cord", `${e('<b>spermatic cord</b>')} carries the vas deferens, along with an artery, veins (${e('pampiniform plexus')}), a nerve and the ${e('cremaster')} muscle, from the scrotum to the pelvis. This cord passes through the ${e('<b>inguinal canal</b>')} (groin canal).`),
          L("At the bedside", `Where the cord passes is a weak point in the abdominal wall: an ${e('<b>inguinal hernia</b>')} (groin hernia). Its repair is a ${e('herniorrhaphy')}.${pearl("A clinical scenario: the doctor told Rick Springs that, besides the testicular injury, he might also have a groin hernia.")}${memo("-rrhaphy means suturing; herniorrhaphy means suturing and repairing a hernia.")}`),
          M("Which canal does the spermatic cord pass through?", ['inguinal canal', 'cervical canal', 'urethra', 'femoral canal'], "The groin."),
          M(`${e('<b>herniorrhaphy</b>')} means…`, ["hernia repair by suturing", "orchiectomy", "cutting the vas deferens", "cutting into a hernia"], "-rrhaphy = suturing."),
          T("The spermatic cord contains only the vas deferens.", false, "It also has vessels, a nerve and muscle."),
          O("Put the route of the cord from the testis to the pelvis in order", ['testis', 'spermatic cord', 'inguinal canal', 'pelvic cavity'], "Upwards."),
          P("Match each term to its meaning", [['spermatic cord', "cord holding the vas deferens and vessels"], ['inguinal canal', "groin canal"], ['cremaster', "muscle that raises the testis"], ['herniorrhaphy', "hernia repair"]], "The cord."),
          B("A hernia in the groin is an ___ hernia.", ['inguinal', 'umbilical', 'hiatal'], 'inguin/o.'),
          S("Spell the adjective for the groin", 'inguinal', 'inguin/o + -al.', 'ingu…'),
          N('t2f:ml')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'ml7', title: "The penis", icon: '🧬', items: [
          L("Structure", `${fig('penis-xs', [], "Cross-section of the penis")}The ${e('<b>penis</b>')} (${e('phall/o, pen/o')}) has three columns of erectile tissue:<br>• two ${e('<b>corpora cavernosa</b>')} on top<br>• one ${e('<b>corpus spongiosum</b>')} below, through which the urethra passes and which forms the head (${e('glans penis')})<br>The skin over the head is the ${e('<b>prepuce</b>')} (foreskin).`),
          L("removal of the foreskin", `${e('<b>circumcision</b>')}: removal of the skin over the head of the penis (${e('prepuce')}).${pearl("A clinical scenario: Bob Schaeffer Jr is a newborn, and his father has questions about his circumcision and a diagnosis of bilateral undescended testes.")}${wb('balan/o', '-itis')} → ${e('balanitis')}: inflammation of the glans`),
          M("Through which erectile column does the urethra pass?", ['corpus spongiosum', 'corpus cavernosum', 'corpus luteum', 'glans clitoris'], "The corpus spongiosum.", null, F('penis-xs', [])),
          M("What is removal of the skin over the head of the penis called?", ['circumcision', 'vasectomy', 'orchiectomy', 'balanoplasty'], "Circumcision."),
          T("balan/o means the head of the penis (glans penis).", true, 'balanitis.'),
          W("Build a word meaning “inflammation of the glans penis”", ['balan/o', '-itis'], ['phall/o', '-ectomy', 'orchi/o'], 'balanitis.'),
          P("Match each part to its meaning", [['corpora cavernosa', "two upper erectile columns"], ['corpus spongiosum', "spongy column with the urethra"], ['glans penis', "head of the penis"], ['prepuce', "skin over the head of the penis"]], "The penis."),
          B("Another name for the prepuce is the ___.", ['foreskin', 'frenulum', 'glans'], "Foreskin."),
          S("Spell the term for removal of the foreskin", 'circumcision', 'circum- + cision.', 'circum…'),
          N('f2t:ml')
        ]
      },
      {
        id: 'ml8', title: "Erection and ejaculation", icon: '⚡', items: [
          L("erection", `${e('<b>erection</b>')}: filling of erectile tissue with blood as the arteries dilate; triggered by the parasympathetic nervous system.<br>${e('<b>ejaculation</b>')}: expulsion of semen by contraction of the ducts and muscles; triggered by the sympathetic system.${memo("Remember “Point and Shoot”: P for parasympathetic for erection and S for sympathetic for ejaculation.")}`),
          L("At the bedside", `${e('<b>erectile dysfunction (ED)</b>')} or ${e('impotence')}: inability to achieve an adequate erection.${pearl("In Case Study, Mr Diego, aged 67, with a history of BPH, complained of ED; after psychological (psychogenic) causes were ruled out, a vessel-dilating drug was prescribed.")}${vs(["impotence", "erectile dysfunction<br>inability to achieve an erection"], ["inability to conceive", "infertility<br>failure to achieve pregnancy"])}`),
          M("Which nervous system triggers erection?", ['parasympathetic', 'sympathetic', 'somatic', 'central only'], 'Point.'),
          M("The abbreviation ED means…", ['erectile dysfunction', 'ejaculatory duct', 'estimated delivery', 'endometrial disease'], "inability to achieve an erection"),
          T("Impotence is another name for erectile dysfunction.", true, "Synonyms."),
          O("Put the events in order", ['arousal', 'erection', 'emission', 'ejaculation'], "From stimulation to ejaculation."),
          P("Match each term to its meaning", [['erection', "stiffening of the penis"], ['ejaculation', "release of semen"], ['impotence', "inability to achieve an erection"], ['psychogenic', "of psychological origin"]], "Function."),
          B("ED drugs are often ___.", ['vasodilators', 'diuretics', 'antibiotics'], "Vasodilators."),
          S("Spell the term for the penis filling with blood", 'erection', 'erect + -ion.', 'erec…'),
          N('d2t:ml')
        ]
      },
      {
        id: 'ml9', title: "Puberty and testosterone", icon: '🧔', items: [
          L("testosterone", `${e('<b>testosterone</b>')} is an ${e('androgen')} (the root ${e('andr/o')} means man) that produces the secondary characteristics at ${e('<b>puberty</b>')}: growth of the penis and testes, facial and body hair, a deeper voice and more muscle. ${e('FSH')} stimulates sperm production and ${e('LH')} stimulates testosterone production.`),
          L("At the bedside", `${pearl("A clinical scenario: Mr James Cocoa teaches a health class for teenage boys about the male reproductive system, puberty and testosterone.")}${wb('an-', 'orch/o', '-ism')} → ${e('anorchism')}: absence of the testes<br>${e('hypogonadism')}: underactive sex glands and a lack of testosterone`),
          M("Which group of hormones does testosterone belong to?", ['androgen', 'estrogen', 'progestin', 'gonadotropin'], "andr/o = male."),
          M("Which pituitary hormone stimulates testosterone production?", ['LH', 'FSH', 'prolactin', 'oxytocin'], "It acts on the Leydig cells."),
          T("A deeper voice and facial hair are male secondary sex characteristics.", true, "effect of testosterone"),
          O("Put the hormonal axis in order", ['hypothalamus (GnRH)', 'pituitary (LH, FSH)', 'testis', 'testosterone'], "From the brain to the testis."),
          P("Match each hormone to its job", [['FSH', "stimulating sperm production"], ['LH', "stimulating testosterone production"], ['testosterone', "male secondary characteristics"], ['GnRH', "order from the hypothalamus"]], "The axis."),
          B("The root ___ means man.", ['andr/o', 'gynec/o', 'anthr/o'], 'androgen.'),
          S("Spell the term for the stage of sexual maturation", 'puberty', 'pubert/o.', 'pube…'),
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
    id: 'pg', sym: 'Pg', name: "Pregnancy and Childbirth", short: "Pregnancy", sub: "Fertilization and implantation, embryo and fetus, placenta and membranes, gravida and para, due date, stages of labour, fetal presentation, after birth and the newborn",
    color: '#E8913A', dark: '#B5641A', light: '#FDEEDC',
    levels: ["Fertilization to fetus", "Counting pregnancies", "Labour and the newborn"],
    gens: EA.genIds('pg'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'pg1', title: "fertilization and implantation", icon: '✨', items: [
          L("fertilization", `${fig('fertilization', [], "From fertilization to implantation")}${e('<b>fertilization</b>')} (${e('conception')}): the union of sperm and egg in the outer third of the fallopian tube. The result is a ${e('<b>zygote</b>')}, which divides into a ${e('morula')} and then a ${e('<b>blastocyst</b>')}.`),
          L("implantation", `About 6 to 7 days after fertilization, the blastocyst burrows into the endometrium: ${e('<b>implantation</b>')}. From then on ${e('<b>hCG</b>')} (the pregnancy hormone) is made and turns the pregnancy test positive.${memo("hCG keeps the corpus luteum alive so progesterone continues and no period occurs.")}${pearl("In Case Study 16-2, Ruth works in an IVF laboratory; in GIFT the gametes, and in ZIFT the zygote, are transferred into the fallopian tube.")}`),
          M("Where in the fallopian tube does fertilization usually take place?", ["the outer third (ampulla)", "cervix", "ovary", "birth canal"], 'ampulla.', null, F('fertilization', [])),
          M("Which hormone does a pregnancy test measure?", ['hCG', 'FSH', 'LH', 'prolactin'], 'human chorionic gonadotropin.'),
          T("Implantation takes place about a week after fertilization.", true, "Days 6 to 7."),
          O("Put the events in order", ['fertilization', 'zygote', 'morula', 'blastocyst', 'implantation'], "From fertilization to implantation."),
          P("Match each term to its meaning", [['conception', "fertilization"], ['zygote', "fertilized egg"], ['blastocyst', "hollow ball of cells"], ['implantation', "embryo embedding in the uterine lining"]], "The start of pregnancy."),
          B("Transferring the zygote into the fallopian tube in IVF is called ___.", ['ZIFT', 'GIFT', 'IUD'], 'zygote intrafallopian transfer.'),
          S("Spell the term for the blastocyst embedding in the endometrium", 'implantation', 'in- + plant + -ation.', 'impl…'),
          N('t2f:pg')
        ]
      },
      {
        id: 'pg2', title: "Embryo, fetus and trimesters", icon: '👶', items: [
          L("Embryo and fetus", `${fig('embryo-photos', ["Growth of the embryo in the first weeks"], "embryo")}Until the end of week 8 after fertilization: the ${e('<b>embryo</b>')} (${e('embry/o')}). From week 9 to birth: the ${e('<b>fetus</b>')} (${e('fet/o')}). The organs form in the embryonic period; that is why drugs and infections do the most harm then.`),
          L("trimesters", `${fig('trimesters', [], "trimesters of pregnancy")}Pregnancy lasts about 40 weeks from the ${e('LMP')} and is divided into three parts, each called a ${e('<b>trimester</b>')}.${fig('fetus-photo', ["Fetus in the amniotic sac"], "baby")}${memo("The embryo lasts until week 8 and builds the organs; the fetus starts at week 9 and grows the organs.")}`),
          M("From when is the developing baby called a fetus?", ["from week 9 after fertilization", "from the moment of fertilization", "from week 20", "from birth"], "After the embryonic period.", null, F('trimesters', [])),
          M("Which period is most vulnerable to drugs and infections?", ["the embryonic period", "third trimester", "the newborn period", "after delivery"], "Organ formation."),
          T("A full pregnancy is about 40 weeks from the first day of the last menstrual period.", true, 'LMP.', F('fetus-photo', [])),
          O("Put the stages of development in order", ['zygote', 'embryo', 'fetus', 'neonate'], "From zygote to newborn."),
          P("Match each term to its meaning", [['embryo', "developing baby up to week 8"], ['fetus', "baby"], ['trimester', "three-month period of pregnancy"], ['neonate', "newborn"]], "Growth."),
          B("The root ___ means fetus.", ['fet/o', 'nat/o', 'gravid/o'], 'fetal.'),
          S("Spell the term for the developing baby up to week 8", 'embryo', 'embry/o.', 'emb…'),
          N('f2t:pg')
        ]
      },
      {
        id: 'pg3', title: "Placenta and membranes", icon: '🫓', items: [
          L("pairs", `${fig('placenta', [], "Placenta and umbilical cord")}The ${e('<b>placenta</b>')} (${e('placent/o')}) is the organ of oxygen, food and waste exchange between mother and fetus. The ${e('<b>umbilical cord</b>')} has two arteries and one vein.${memo("The umbilical cord is “two A’s, one V”: two arteries and one vein.")}`),
          L("Membranes and fluid", `${fig('placenta-membranes', ["Placenta and fetal membranes"], "Membranes")}• ${e('<b>amnion</b>')}: the inner membrane; the bag of waters with ${e('amniotic fluid')} (${e('amni/o')})<br>• ${e('<b>chorion</b>')}: the outer membrane that forms part of the placenta (${e('chori/o')})${fig('pregnant-uterus', [], "pregnant uterus")}`),
          M("How many vessels does the umbilical cord have?", ["two arteries and one vein", "one artery and one vein", "two veins and one artery", "one vessel"], "Two A’s, one V.", null, F('placenta', [])),
          M("Which is the inner membrane of the amniotic sac?", ['amnion', 'chorion', 'endometrium', 'placenta'], 'amni/o.', null, F('placenta-membranes', [])),
          T("The chorion is the outermost fetal membrane and helps form the placenta.", true, 'chori/o.'),
          W("Build a word meaning “puncture of the amnion (to draw off fluid)”", ['amni/o', '-centesis'], ['chori/o', '-tomy', 'placent/o'], 'amniocentesis.'),
          P("Match each part to its job", [['placenta', "exchange of substances"], ['umbilical cord', "connecting the fetus to the placenta"], ['amnion', "amniotic sac"], ['chorion', "outer membrane"]], "The placenta."),
          B("The fluid around the fetus is ___ fluid.", ['amniotic', 'cerebrospinal', 'synovial'], 'amni/o.'),
          S("Spell the term for the organ of exchange between mother and fetus", 'placenta', 'placent/o.', 'plac…'),
          N('d2t:pg')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'pg4', title: "Gravida and para", icon: '🔢', items: [
          L("counting", `${fig('gravida-para', [], "Gravida and para")}• ${e('<b>gravida (G)</b>')}: the number of pregnancies, whatever the outcome (the current pregnancy is counted too)<br>• ${e('<b>para (P)</b>')}: the number of births after week 20, alive or stillborn<br>${tbl([["Term", "Meaning"], [e('nulligravida'), "never pregnant"], [e('primigravida'), "pregnant for the first time"], [e('multigravida'), "pregnant several times"], [e('nullipara'), "has had no births"], [e('primipara'), "one birth"], [e('multipara'), "several births"]])}`),
          L("At the bedside", `${pearl("In the case study, Abigail is <bdi dir=\"ltr\">“G2 P1”</bdi>: pregnant for the second time with one previous birth.")}${pearl("In a high-risk OB consultation report, the 23-year-old patient is <bdi dir=\"ltr\">“multigravida, nullipara”</bdi>: pregnant several times (three miscarriages) but has not yet given birth.")}${memo("Gravida comes from gravid (heavy, pregnant); para from parere (to give birth).")}`),
          M("A woman who has had three miscarriages and is now pregnant is gravida what?", ['G4', 'G3', 'G1', 'G0'], "Three miscarriages + the current pregnancy.", null, F('gravida-para', [])),
          M(`${e('<b>nullipara</b>')} means…`, ["a woman who has not given birth", "a woman who has never been pregnant", "a woman who has had one birth", "a postmenopausal woman"], "nulli- = none."),
          T("primigravida means a woman pregnant for the first time.", true, "primi- = first."),
          O("Put the terms in order from fewest to most", ['nulligravida', 'primigravida', 'multigravida'], "None, one, several."),
          P("Match each term to its meaning", [['nulligravida', "never pregnant"], ['primipara', "one birth"], ['multipara', "several births"], ['nullipara', "without births"]], "G and P."),
          B("With two pregnancies and one previous birth, Abigail is ___.", ['G2 P1', 'G1 P2', 'G2 P2'], "Gravida 2, para 1."),
          S("Spell the term for a woman pregnant for the first time", 'primigravida', 'primi- + gravida.', 'primig…'),
          N('m2r:pg')
        ]
      },
      {
        id: 'pg5', title: "Due date", icon: '🗓️', items: [
          L("Naegele’s rule", `${e('<b>LMP</b>')}: first day of the last menstrual period<br>${e('<b>EDD</b>')} (${e('EDC')}): estimated date of delivery<br>${e('<b>Naegele rule</b>')}: add seven days to the LMP, subtract three months and add one year; or simply add 280 days to the LMP.${memo("Example: LMP 1 January → EDD 8 October.")}`),
          L("gestational age", `${e('<b>gestational age (GA)</b>')} is given in weeks and days from the LMP; for example, 36 weeks and 6 days.<br>• ${e('preterm')}: before 37 weeks<br>• ${e('term')}: 37 to 42 weeks<br>• ${e('postterm')}: after 42 weeks${pearl("Open Zaya’s “Pregnancy calculator” tool: enter the LMP and visit date to see the EDD, gestational age and trimester.")}`),
          M("By Naegele’s rule, how many days after the LMP is the EDD?", ["280 days", "266 days", "300 days", "250 days"], "40 weeks."),
          M("What is a baby born at 35 weeks called?", ['preterm', 'term', 'postterm', 'stillborn'], "Before 37 weeks."),
          T("LMP means the last day of the last menstrual period.", false, "Its first day."),
          O("Put the steps of Naegele’s rule in order", ['LMP', '+ 7 days', '− 3 months', '+ 1 year'], "In order."),
          P("Match each abbreviation to its meaning", [['LMP', "first day of last period"], ['EDD', "estimated date of delivery"], ['GA', "gestational age"], ['IUP', "intrauterine pregnancy"]], "The dates."),
          B("A baby born at 39 weeks is ___.", ['term', 'preterm', 'postterm'], "37 to 42."),
          S("Spell the adjective for the duration of pregnancy", 'gestational', 'gestat/o + -ional.', 'gesta…'),
          N('t2f:pg')
        ]
      },
      {
        id: 'pg6', title: "stages of labour", icon: '⏱️', items: [
          L("Three stages", `${fig('labor-stages', [], "stages of labour")}${tbl([["Stage", "From … to"], ["First", "onset of contractions to full opening of the cervix (10 cm)"], ["Second", "full opening to delivery of the baby"], ["Third", "delivery of the baby to delivery of the placenta (afterbirth)"]])}`),
          L("Clinical terms", `• ${e('<b>effacement</b>')}: thinning of the cervix (percentage)<br>• ${e('<b>dilation</b>')}: opening of the cervix (centimetres)<br>• ${e('bloody show')}: bloody discharge at the start of labour<br>• ${e('<b>PROM</b>')}: premature rupture of the membranes<br>• ${e('NSVD')}: normal spontaneous vaginal delivery${pearl("In an OB delivery note, the cervix was 80% thinned (effacement) and 4 cm open (dilation); there was also a bloody show and PROM. Then an NSVD took place, the baby scored Apgar 9/9 and about 300 cc of blood was lost.")}`),
          M("What ends the second stage of labour?", ["delivery of the baby", "delivery of the placenta", "full opening of the cervix", "onset of contractions"], "Birth.", null, F('labor-stages', [])),
          M(`${e('<b>effacement</b>')} means…`, ["thinning of the cervix", "opening of the cervix", "rupture of the membranes", "delivery of the placenta"], "As a percentage."),
          T("In the first stage of labour the cervix opens to 10 cm.", true, "Full dilation."),
          O("Put the events of labour in order", ['contractions', 'full dilation', 'delivery of infant', 'delivery of placenta'], "The three stages."),
          P("Match each abbreviation to its meaning", [['PROM', "premature rupture of membranes"], ['NSVD', "normal vaginal delivery"], ['EBL', "estimated blood loss"], ['FHR', "fetal heart rate"]], "The delivery note."),
          B("The placenta and membranes that come out after the baby are called the ___.", ['afterbirth', 'lochia', 'meconium'], "The third stage."),
          S("Spell the term for opening of the cervix in labour", 'dilation', 'dilat + -ion.', 'dila…'),
          N('f2t:pg')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'pg7', title: "fetal presentation", icon: '🔄', items: [
          L("Which part first?", `${fig('presentations', [], "Fetal presentations")}${e('<b>presentation</b>')}: the part of the fetus that enters the pelvis first.<br>• ${e('<b>cephalic (vertex)</b>')}: the head; normal and most common<br>• ${e('<b>breech</b>')}: the buttocks or feet<br>• ${e('<b>transverse</b>')}: the shoulder; the fetus lies across`),
          L("At the bedside", `${fig('breech-birth', ["Breech presentation"], "Breech delivery")}${pearl("In the case study, Abigail’s fetus was <bdi dir=\"ltr\">“right occiput posterior”</bdi> and the fetal head did not fit the mother’s pelvis (CPD); after fetal distress, an emergency caesarean was done.")}${memo("The root cephal/o means head, and breech means buttocks.")}`),
          M("Which is the most common and normal presentation?", ['cephalic (vertex)', 'breech', 'transverse', 'face'], "Head first.", null, F('presentations', [])),
          M("In a breech presentation, which part enters the pelvis first?", ["the buttocks or feet", "head", "shoulder", "Hand"], "Breech.", null, F('breech-birth', [])),
          T("In a transverse presentation, the fetus lies across the uterus.", true, "Shoulder first."),
          W("Build a word meaning “relating to the head”", ['cephal/o', '-ic'], ['pelv/o', '-ism', 'crani/o'], 'cephalic.'),
          P("Match each presentation to the part that comes first", [['cephalic', "head"], ['breech', "buttocks"], ['transverse', "shoulder"], ['footling breech', "foot"]], "The presentations."),
          B("A mismatch between the fetal head and the mother’s pelvis is ___.", ['CPD', 'PROM', 'IUGR'], 'cephalopelvic disproportion.'),
          S("Spell the term for a buttocks-first presentation", 'breech', "Buttocks first.", 'bre…'),
          N('d2t:pg')
        ]
      },
      {
        id: 'pg8', title: "After birth and breastfeeding", icon: '🤱', items: [
          L("puerperium", `${e('<b>puerperium</b>')} (${e('postpartum')}): about 6 weeks after birth, during which the uterus returns to its former size (${e('involution')}). The bloody vaginal discharge in this period is called ${e('<b>lochia</b>')}.<br>${wb('post-', 'part/o', '-um')} → after birth`),
          L("breastfeeding", `${e('<b>colostrum</b>')}: the first yellow, antibody-rich milk of the first few days<br>${e('prolactin')} makes milk and ${e('<b>oxytocin</b>')} ejects milk and contracts the uterus.${pearl("In the case study, after her caesarean Abigail had rooming-in (staying in the same room as the baby) and breastfed; the oxytocin of breastfeeding also helps the uterus contract.")}`),
          M("What is the bloody vaginal discharge after birth called?", ['lochia', 'leukorrhea', 'colostrum', 'meconium'], "Lochia."),
          M("Which hormone ejects milk and contracts the uterus?", ['oxytocin', 'prolactin', 'estrogen', 'hCG'], "Oxytocin."),
          T("Colostrum is the first milk after birth and is rich in antibodies.", true, "First milk."),
          O("Put the events in order", ['delivery', 'colostrum', 'mature milk', 'involution complete'], "From birth to 6 weeks."),
          P("Match each term to its meaning", [['puerperium', "period after birth"], ['lochia', "discharge after birth"], ['colostrum', "first milk after birth"], ['involution', "return of the uterus"]], "Puerperium."),
          B("The drug Pitocin is a synthetic form of ___.", ['oxytocin', 'prolactin', 'progesterone'], "It stimulates contractions."),
          S("Spell the term meaning “after childbirth”", 'postpartum', 'post- + part/o.', 'postp…'),
          N('m2r:pg')
        ]
      },
      {
        id: 'pg9', title: "The newborn and Apgar", icon: '🍼', items: [
          L("newborn Apgar score", `${fig('apgar', [], "newborn Apgar score")}${e('<b>Apgar score</b>')} at 1 and 5 minutes after birth: five signs, each scoring 0 to 2.${memo("Each letter of APGAR is a sign: Appearance is colour, Pulse is heart rate, Grimace is reflex response, Activity is muscle tone and Respiration is breathing.")}`),
          L("newborn", `${e('<b>neonate</b>')} (${e('neo-, nat/o')}): a baby up to 28 days. ${e('neonatology')} is the branch of newborn care.<br>${e('<b>meconium</b>')}: the newborn’s first dark green stool.${fig('sonogram', ["Ultrasound image of a fetus"], "ultrasound scan")}${pearl("Abigail’s baby and baby both had Apgar 9/9: 9 at one minute and 9 at five minutes; that is, doing well.")}`),
          M("When is the Apgar score usually recorded?", ["at 1 and 5 minutes after birth", "before birth", "on the third day", "in the sixth week"], "Twice.", null, F('apgar', [])),
          M("What is the maximum Apgar score?", ["10", "5", "20", "9"], "5 signs × 2."),
          T("Meconium is the newborn’s first stool.", true, "Dark green."),
          O("Put the letters of APGAR in order", ['Appearance', 'Pulse', 'Grimace', 'Activity', 'Respiration'], "In the order of the name."),
          P("Match each sign to its meaning", [['Appearance', "Skin colour"], ['Pulse', "heart rate"], ['Grimace', "response to stimulation"], ['Respiration', "breathing"]], "Apgar."),
          B("A baby up to 28 days old is called a ___.", ['neonate', 'infant', 'toddler'], 'neo- + nat/o.'),
          S("Spell the term for a newborn up to 28 days", 'neonate', 'neo- + nat/o.', 'neon…'),
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
    id: 'ds', sym: 'Ds', name: "Diseases and Sexually Transmitted Infections", short: "Diseases", sub: "Menstrual disorders, fibroids and uterine prolapse, cancers, diseases of the testis and prostate, ectopic pregnancy and placental problems, sexually transmitted infections",
    color: '#8E6BD8', dark: '#6345A8', light: '#EEE8FB',
    levels: ["women’s diseases", "Diseases of men", "Pregnancy complications and infections"],
    gens: EA.genIds('ds'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'ds1', title: "menstrual disorders", icon: '🩸', items: [
          L("-rrhea and -rrhagia words", `${fig('menstrual-disorders', [], "menstrual disorders")}${tbl([["Term", "Meaning"], [e('amenorrhea'), "absence of periods"], [e('dysmenorrhea'), "painful periods"], [e('menorrhagia'), "very heavy or prolonged periods"], [e('metrorrhagia'), "uterine bleeding between periods"], [e('oligomenorrhea'), "scanty, infrequent periods"]])}`),
          L("At the bedside", `${pearl("A clinical scenario: Mrs Rosie McConnell complains of very heavy (menorrhagia) and painful (dysmenorrhea) periods; the doctor ordered a hysteroscopy and found fibroids.")}${pearl("A clinical scenario: Mrs Jenni Takanado started her periods late, has irregular periods and dyspareunia (pain during intercourse) and is being investigated for infertility.")}${memo("-rrhea is flowing; -rrhagia is bursting forth of blood. menorrhagia means heavy bleeding at the time of a period; metrorrhagia means bleeding from the uterus at the wrong time.")}`),
          M(`${e('<b>dysmenorrhea</b>')} means…`, ["painful periods", "absence of periods", "heavy periods", "bleeding between periods"], "dys- = painful.", null, F('menstrual-disorders', [])),
          M("Uterine bleeding between two periods is…", ['metrorrhagia', 'menorrhagia', 'amenorrhea', 'oligomenorrhea'], "metr/o = uterus."),
          T("amenorrhea means absence of periods.", true, "a- = without."),
          W("Build a word meaning “very heavy menstruation”", ['men/o', '-rrhagia'], ['metr/o', '-rrhea', 'a-'], 'menorrhagia.'),
          P("Match each term to its meaning", [['amenorrhea', "absence of periods"], ['oligomenorrhea', "scanty, infrequent periods"], ['menorrhagia', "heavy periods"], ['dyspareunia', "pain during intercourse"]], "Menstruation."),
          B("Pain during intercourse is ___.", ['dyspareunia', 'dysmenorrhea', 'dysuria'], 'dys- + pareunia.'),
          S("Spell the term for absence of periods", 'amenorrhea', 'a- + men/o + -rrhea.', 'amen…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds2', title: "Uterus, cervix and pelvis", icon: '🔴', items: [
          L("diseases of the uterus", `${fig('uterine-disorders', [], "diseases of the uterus")}• ${e('<b>leiomyoma (fibroid)</b>')}: a benign tumour of the smooth muscle of the uterus<br>• ${e('<b>endometriosis</b>')}: endometrial tissue outside the uterus; pain and infertility<br>• ${e('<b>cervical polyp</b>')}: a benign growth of the cervix${fig('fibroids', ["Fibroids in different parts of the uterus"], "fibroid")}`),
          L("Pelvic infection", `${e('<b>pelvic inflammatory disease (PID)</b>')}: infection of the uterus, tubes and ovaries, often from an ${e('STI')}; it can block the tubes and cause infertility.${fig('cervical-polyp', ["cervical polyp"], "polyp")}${pearl("In Case Study 16-1, Mrs Naomi’s pathology after TAH-BSO showed <bdi dir=\"ltr\">“leiomyomas”</bdi> but <bdi dir=\"ltr\">“no evidence of PID”</bdi>; that is, fibroids but no pelvic infection.")}`),
          M("What tissue is a uterine fibroid made of?", ["smooth muscle of the uterus", "lining of the uterus", "cervix", "ovary"], 'leiomyoma.', null, F('fibroids', [])),
          M("Endometrial tissue outside the uterus is…", ['endometriosis', 'endometritis', 'adenomyosis', 'leiomyoma'], "-osis = condition."),
          T("PID can cause infertility.", true, "Blocked tubes.", F('cervical-polyp', [])),
          W("Build a word meaning “tumour of smooth muscle”", ['lei/o', 'my/o', '-oma'], ['fibr/o', 'metr/o', '-itis'], 'leiomyoma.'),
          P("Match each disease to its description", [['leiomyoma', "benign tumour of uterine muscle"], ['endometriosis', "endometrium outside the uterus"], ['cervical polyp', "growth on the cervix"], ['PID', "Pelvic infection"]], "The uterus."),
          B("Inflammation of the endometrium is ___.", ['endometritis', 'endometriosis', 'myometritis'], '-itis.'),
          S("Spell the scientific term for a uterine fibroid", 'leiomyoma', 'lei/o + my/o + -oma.', 'leio…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds3', title: "Prolapse and cancers", icon: '⬇️', items: [
          L("drooping", `${fig('prolapse', [], "drooping")}${e('<b>uterine prolapse</b>')}: the uterus dropping down into the vagina<br>${e('<b>cystocele</b>')}: the bladder bulging into the front wall of the vagina<br>${e('<b>rectocele</b>')}: the rectum bulging into the back wall of the vagina${fig('cystocele', ["cystocele"], "cystocele")}${fig('uterine-prolapse', ["Degrees of uterine prolapse"], "uterine prolapse")}`),
          L("Cancers", `• ${e('<b>cervical cancer</b>')}: often from ${e('HPV')}; preceded by ${e('<b>dysplasia</b>')} (abnormal cell growth)<br>• ${e('<b>endometrial cancer</b>')}: with postmenopausal bleeding<br>• ${e('<b>breast cancer</b>')}: a mass on mammography; sometimes spreads to the armpit${fig('endometrial-cancer', ["endometrial cancer"], "endometrial cancer")}${fig('mammogram-tumor', ["Mass on mammography"], "breast X-ray imaging")}${pearl("A chart note: a history of <bdi dir=\"ltr\">“simple mastectomy”</bdi> for breast cancer, and now <bdi dir=\"ltr\">“metastases to the axilla, liver and bone”</bdi>.")}`),
          M("The bladder bulging into the vaginal wall is…", ['cystocele', 'rectocele', 'uterine prolapse', 'hydrocele'], "cyst/o = bladder.", null, F('cystocele', [])),
          M("What is the most important cause of cervical cancer?", ['HPV', 'HSV', 'HIV', 'Candida'], "Human papillomavirus."),
          T("Postmenopausal bleeding can be a sign of endometrial cancer.", true, "It must be investigated.", F('endometrial-cancer', [])),
          O("Put the degrees of uterine prolapse in order", ['normal', 'first degree', 'second degree', 'complete prolapse'], "From normal to complete."),
          P("Match each term to its meaning", [['cystocele', "bladder prolapse"], ['rectocele', "rectal bulge"], ['dysplasia', "abnormal cell growth"], ['metastasis', "cancer spreading"]], "Prolapse and cancer."),
          B("A breast mass is seen on ___.", ['mammogram', 'colposcopy', 'cystoscopy'], "Mammography."),
          S("Spell the term for the bladder bulging into the vagina", 'cystocele', 'cyst/o + -cele.', 'cysto…'),
          N('d2t:ds')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'ds4', title: "Testis and scrotum", icon: '🥜', items: [
          L("Diseases of the scrotum", `${fig('scrotal-disorders', [], "Diseases of the scrotum")}• ${e('<b>hydrocele</b>')}: fluid collecting in the scrotum<br>• ${e('<b>varicocele</b>')}: dilated, twisted veins above the testis; a “bag of worms”<br>• ${e('<b>spermatocele</b>')}: a sperm-filled cyst in the epididymis<br>• ${e('<b>testicular torsion</b>')}: twisting of the spermatic cord; an emergency${fig('scrotal-abnormalities', ["Scrotal abnormalities"], "scrotum")}${fig('varicocele', ["varicocele"], "varicocele")}`),
          L("undescended testis", `${e('<b>cryptorchidism</b>')} means the testis has not come down into the scrotum; the root ${e('crypt/o')} means hidden. Treatment: ${e('<b>orchiopexy</b>')} (fixing the testis in the scrotum).${fig('cryptorchidism', ["Routes of an undescended testis"], "Cryptorchidism")}${pearl("In a consult: a 77-year-old man had a <bdi dir=\"ltr\">“history of cryptorchidism, corrected with orchiopexy”</bdi>.")}`),
          M("Fluid collecting in the scrotum is a…", ['hydrocele', 'varicocele', 'spermatocele', 'cystocele'], "hydr/o = water.", null, F('scrotal-abnormalities', [])),
          M("cryptorchidism means…", ["undescended testis", "absence of a testis", "orchitis", "twisting of the testis"], "crypt/o = hidden.", null, F('cryptorchidism', [])),
          T("Testicular torsion is a surgical emergency.", true, "The blood supply to the testis is cut off."),
          W("Build a word meaning “fixation of the testis”", ['orchi/o', '-pexy'], ['orchid/o', '-ectomy', 'vas/o'], 'orchiopexy.'),
          P("Match each disease to its description", [['hydrocele', "fluid in the scrotum"], ['varicocele', "dilated veins"], ['spermatocele', "sperm cyst"], ['torsion', "twisted cord"]], "The scrotum."),
          B("Removal of a testis is ___.", ['orchiectomy', 'orchiopexy', 'vasectomy'], '-ectomy.'),
          S("Spell the scientific term for an undescended testis", 'cryptorchidism', 'crypt/o + orchid/o + -ism.', 'crypt…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds5', title: "prostate", icon: '🌰', items: [
          L("Benign enlargement", `${fig('bph', [], 'BPH')}${e('<b>benign prostatic hyperplasia (BPH)</b>')}: benign enlargement of the prostate in older men; the urethra narrows.<br>Signs: ${e('hesitancy')} (a delayed start of urination), a weak stream, ${e('nocturia')} (night-time urination) and ${e('urinary retention')}.${fig('bph-drawing', ["Narrowing of the urethra as the prostate enlarges"], "enlarged prostate")}`),
          L("At the bedside", `${pearl("In the case study, Mr Dexter, aged 60, had hesitancy. On DRE his prostate was about 50 grams and 120 mL of urine stayed in his bladder. Diagnosis: BPH with BNO (bladder neck obstruction).")}${e('<b>prostatitis</b>')}: inflammation of the prostate<br>${e('<b>prostate cancer</b>')}: with a raised ${e('PSA')} and a nodule on DRE${vs(['BPH', "Benign enlargement"], ['prostate cancer', "malignant tumour"])}`),
          M("What is night-time urination called?", ['nocturia', 'dysuria', 'hematuria', 'polyuria'], "noct/o = night.", null, F('bph-drawing', [])),
          M("Why does the urine stream weaken in BPH?", ["the enlarged prostate narrows the urethra", "the kidney makes no urine", "the bladder ruptures", "the testis enlarges"], "Obstruction.", null, F('bph', [])),
          T("hyperplasia means an increase in the number of cells.", true, 'hyper- + -plasia.'),
          O("Put the events of BPH in order", ['prostate enlarges', 'urethra narrows', 'weak stream', 'urinary retention'], "From cause to complication."),
          P("Match each sign to its meaning", [['hesitancy', "delayed start of urination"], ['nocturia', "bed-wetting"], ['urinary retention', "inability to empty the bladder"], ['dysuria', "painful urination"]], "Signs."),
          B("Inflammation of the prostate is ___.", ['prostatitis', 'prostatism', 'proctitis'], 'prostat/o + -itis.'),
          S("Spell the term for urinating at night", 'nocturia', 'noct/o + -uria.', 'noct…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds6', title: "The penis and male fertility", icon: '🔧', items: [
          L("Urethral anomalies", `${fig('hypospadias', ["Misplaced urethral opening"], "Hypospadias")}• ${e('<b>hypospadias</b>')}: the urethral opening on the underside of the penis<br>• ${e('<b>epispadias</b>')}: the urethral opening on the upper side of the penis<br>• ${e('<b>phimosis</b>')}: a tight foreskin that will not pull back; treatment: circumcision${memo("The prefix hypo- means under and the prefix epi- means upon.")}`),
          L("Inflammations and infertility", `${pearl("A clinical scenario: Jon Meriweather came with inflammation of the glans (balanitis), inflammation of the testis (orchitis) and inflammation of the scrotum, and has a history of prostatitis.")}${e('<b>male infertility</b>')}: often from ${e('oligospermia')} or ${e('azoospermia')} (no sperm in the semen); investigated with a ${e('semen analysis')}.`),
          M("A urethral opening on the underside of the penis is…", ['hypospadias', 'epispadias', 'phimosis', 'priapism'], "hypo- = under.", null, F('hypospadias', [])),
          M("azoospermia means…", ["no sperm in the semen", "too few sperm", "non-moving sperm", "blood in the semen"], 'a- + zo/o + sperm/o.'),
          T("phimosis means a tight foreskin over the head of the penis.", true, "Treatment: circumcision."),
          W("Build a word meaning “inflammation of the testis”", ['orchi/o', '-itis'], ['balan/o', '-cele', 'scrot/o'], 'orchitis.'),
          P("Match each term to its meaning", [['hypospadias', "urethral opening under the penis"], ['epispadias', "urethral opening on top of the penis"], ['phimosis', "tight foreskin"], ['azoospermia', "absence of sperm"]], "The penis."),
          B("The test for male infertility is a ___ analysis.", ['semen', 'urine', 'blood'], "Examining the semen."),
          S("Spell the term for a urethral opening on the underside of the penis", 'hypospadias', 'hypo- + spadias.', 'hypos…'),
          N('wb:ds')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'ds7', title: "Ectopic pregnancy and placental problems", icon: '⚠️', items: [
          L("Ectopic pregnancy", `${fig('ectopic', [], "Ectopic pregnancy")}${e('<b>ectopic pregnancy</b>')}: implantation outside the uterus (the prefix ${e('ec-')} means out and the root ${e('top/o')} means place); more than 95% are in a fallopian tube. A ruptured tube causes life-threatening bleeding.${fig('ectopic-sites', ["Sites of ectopic pregnancy"], "Ectopic sites")}`),
          L("Placental and blood pressure problems", `${fig('placenta-problems', [], "placental problems")}• ${e('<b>placenta previa</b>')}: the placenta over the cervix; painless bleeding<br>• ${e('<b>abruptio placentae</b>')}: early separation of the placenta; painful bleeding<br>• ${e('<b>preeclampsia</b>')}: high blood pressure and protein in the urine after week 20; if seizures occur: ${e('eclampsia')}${fig('placental-abnormalities', ["Abnormal placental positions"], "Placental abnormality")}${pearl("In a high-risk OB consultation: the patient has <bdi dir=\"ltr\">“placenta previa”</bdi> and there is a risk of <bdi dir=\"ltr\">“abruptio”</bdi>; a caesarean is planned once labour starts.")}`),
          M("Where is the most common site of an ectopic pregnancy?", ["fallopian tube", "ovary", "cervix", "abdomen"], 'tubal.', null, F('ectopic-sites', [])),
          M("A placenta lying over the cervix is…", ['placenta previa', 'abruptio placentae', 'placenta accreta', 'preeclampsia'], "previa = going before.", null, F('placental-abnormalities', [])),
          T("Preeclampsia comes with high blood pressure and protein in the urine.", true, "after week 20"),
          O("Put them in order of severity", ['gestational hypertension', 'preeclampsia', 'eclampsia'], "It is more severe with seizures."),
          P("Match each term to its meaning", [['placenta previa', "placenta over the cervix"], ['abruptio placentae', "placental abruption"], ['eclampsia', "seizures in pregnancy"], ['ectopic pregnancy', "pregnancy outside the uterus"]], "The complications."),
          B("A pregnancy in a fallopian tube is an ___ pregnancy.", ['tubal', 'molar', 'multiple'], "The commonest ectopic site."),
          S("Spell the adjective meaning “out of place”", 'ectopic', 'ec- + top/o + -ic.', 'ecto…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds8', title: "Difficult labour and genetics", icon: '🧬', items: [
          L("Pregnancy loss", `• ${e('<b>spontaneous abortion</b>')} (${e('miscarriage')}): loss of a pregnancy before week 20<br>• ${e('<b>stillbirth</b>')}: birth of a dead baby after week 20<br>• ${e('<b>IUFD</b>')}: death of the fetus inside the uterus<br>• ${e('fetal distress')}: signs of oxygen shortage in the fetus${pearl("A clinical exercise: a 27-year-old patient, G II P I; the ultrasound at week 14 and amniocentesis at week 15 were normal, but at week 18 an intrauterine fetal death (IUFD) occurred.")}`),
          L("Chromosomal anomaly", `${fig('down-syndrome', ["Face of a child with Down syndrome"], "Down syndrome")}${e('<b>Down syndrome</b>')} (${e('trisomy 21')}): three copies of chromosome 21; the risk rises with the mother’s age. It is diagnosed by amniocentesis or ${e('CVS')}.${memo("The prefix tri- means three and the suffix -somy means body (chromosome).")}`),
          M("Death of the fetus after week 20 and its delivery is…", ['stillbirth', 'miscarriage', 'ectopic pregnancy', 'preterm birth'], "Stillbirth."),
          M("What anomaly is Down syndrome?", ["three copies of chromosome 21", "a missing X chromosome", "three copies of chromosome 18", "a hormone deficiency"], 'trisomy 21.', null, F('down-syndrome', [])),
          T("miscarriage is the everyday name for spontaneous abortion.", true, "Spontaneous abortion."),
          O("Put them in order of gestational age", ['miscarriage', 'IUFD', 'stillbirth', 'term birth'], "From earlier to later."),
          P("Match each abbreviation to its meaning", [['IUFD', "fetal death inside the uterus"], ['CPD', "cephalopelvic disproportion"], ['PROM', "premature rupture of membranes"], ['CVS', "chorionic villus sampling"]], "Abbreviations."),
          B("Three copies of one chromosome is a ___.", ['trisomy', 'monosomy', 'triploidy'], 'tri- + -somy.'),
          S("Spell the everyday term for spontaneous abortion", 'miscarriage', 'spontaneous abortion.', 'misc…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds9', title: "sexually transmitted infections", icon: '🦠', items: [
          L("The most important STIs", `${fig('sti', [], "sexually transmitted infections")}${tbl([["disease", "Cause", "symptom"], [e('chlamydia'), "bacteria", "often without symptoms; an important cause of PID"], [e('gonorrhea'), "bacteria", "pus-like discharge"], [e('syphilis'), "bacteria", "painless ulcer (chancre)"], [e('genital herpes'), e('HSV‑2'), "painful blisters"], [e('genital warts'), e('HPV'), "warts; risk of cervical cancer"], [e('trichomoniasis'), "parasite", "frothy discharge"]])}`),
          L("At the bedside", `${fig('herpes-drawing', ["Herpes blisters"], "Herpes")}${fig('genital-warts', ["genital warts"], "wart")}${pearl("A case study: a 22-year-old woman came with fever, malaise, dysuria and leukorrhea (white discharge). Her blisters had become ulcers and the lymph nodes in her groin were enlarged; the diagnosis was genital herpes.")}${memo("STI is the same as STD; today we say “infection” because many are symptomless.")}`),
          M("What causes genital warts?", ['HPV', 'HSV-2', 'HIV', 'chlamydia'], "The papillomavirus.", null, F('genital-warts', [])),
          M("What is the painless ulcer of syphilis called?", ['chancre', 'vesicle', 'wart', 'pustule'], "A chancre."),
          T("Genital herpes comes with painful blisters.", true, 'HSV-2.', F('herpes-drawing', [])),
          O("Put the stages of a herpes lesion in order", ['erythema', 'vesicles', 'ulcers', 'crusting'], "From redness to crust."),
          P("Match each disease to its cause", [['genital herpes', 'HSV-2'], ['genital warts', 'HPV'], ['trichomoniasis', "parasite"], ['syphilis', "the Treponema bacterium"]], "The causes."),
          B("A white discharge from the vagina is ___.", ['leukorrhea', 'lochia', 'menorrhea'], 'leuk/o + -rrhea.'),
          S("Spell the term for the STI that causes pus-like discharge", 'gonorrhea', 'gon/o + -rrhea.', 'gono…'),
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
    id: 'tx', sym: 'Tx', name: "Diagnosis, Treatment and Prevention", short: "Diagnosis and Treatment", sub: "Pap smear and colposcopy, mammography and ultrasound, prenatal tests, PSA and biopsy, hysterectomy, TURP, caesarean section, contraception and IVF",
    color: '#17A398', dark: '#0E756C', light: '#DDF5F2',
    levels: ["Tests and imaging", "Operations", "Contraception and fertility"],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'tx1', title: "Pap smear and colposcopy", icon: '🔬', items: [
          L("Pap smear", `${fig('pap-test', [], "Pap smear")}${e('<b>Pap smear (Pap test)</b>')}: taking cells from the cervix with a brush or spatula and examining them under the microscope to find ${e('dysplasia')} and cancer. The doctor holds the vaginal walls open with a ${e('<b>speculum</b>')}.${fig('speculum', ["Vaginal speculum"], "speculum")}`),
          L("colposcopy", `${fig('colposcopy', ["Viewing the cervix under magnification"], "colposcopy")}${wb('colp/o', '-scopy')} → ${e('<b>colposcopy</b>')}: viewing the vagina and cervix under magnification; done if the Pap smear is abnormal.<br>${e('<b>cone biopsy (conization)</b>')}: removing a cone-shaped piece of the cervix.${pearl("In Case Study 16-1, after abnormal Pap smears and cervical dysplasia, Mrs Naomi had a colposcopy and then a D&C with cone biopsy.")}`),
          M("Which part does a Pap smear sample?", ["cervix", "ovary", "fallopian tube", "breast"], 'cervix.', null, F('pap-test', [])),
          M("The instrument that holds the vaginal walls open for examination is a…", ['speculum', 'curette', 'colposcope', 'resectoscope'], "A speculum.", null, F('speculum', [])),
          T("colposcopy means viewing the vagina and cervix under magnification.", true, 'colp/o + -scopy.', F('colposcopy', [])),
          O("Put the steps of cervical investigation in order", ['Pap smear', 'abnormal result', 'colposcopy', 'cone biopsy'], "From screening to sample."),
          P("Match each method to its job", [['Pap smear', "cell screening"], ['colposcopy', "viewing under magnification"], ['cone biopsy', "removing a cone-shaped piece"], ['speculum', "holding the vagina open"]], "The cervix."),
          B("The root ___ in colposcopy means vagina.", ['colp/o', 'col/o', 'culd/o'], 'colp/o = vagin/o.'),
          S("Spell the term for viewing the vagina and cervix under magnification", 'colposcopy', 'colp/o + -scopy.', 'colpo…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: "Mammography and ultrasound", icon: '📡', items: [
          L("breast X-ray imaging", `${fig('mammography', [], "breast X-ray imaging")}${wb('mamm/o', '-graphy')} → ${e('<b>mammography</b>')}: an X-ray of the compressed breast; screening for breast cancer. The image obtained is a ${e('mammogram')}.${fig('mammograms', ["Two mammogram views"], "breast X-ray image")}`),
          L("ultrasound scan", `${e('<b>ultrasonography (sonography)</b>')}: imaging with sound waves; no radiation and safe for the fetus. In a ${e('transvaginal ultrasound')} the probe is inside the vagina.<br>${e('<b>hysterosalpingography (HSG)</b>')}: a contrast X-ray of the uterus and tubes to check that the tubes are open.${pearl("A clinical scenario: both hysteroscopy and hysterosalpingography were ordered for Charity Peterson.")}`),
          M("Which kind of radiation is mammography done with?", ["X-rays", "sound waves", "magnetic field", "visible light"], 'X-ray.', null, F('mammography', [])),
          M("Which method is safer for viewing the fetus?", ['ultrasonography', 'mammography', 'CT scan', 'hysterosalpingography'], "No radiation."),
          T("A mammogram is the image obtained by mammography.", true, "-gram = image.", F('mammograms', [])),
          W("Build a word meaning “X-ray imaging of the uterus and tubes”", ['hyster/o', 'salping/o', '-graphy'], ['mamm/o', '-scopy', 'oophor/o'], 'hysterosalpingography.'),
          P("Match each method to its organ", [['mammography', "breast"], ['hysterosalpingography', "uterus and tubes"], ['transvaginal ultrasound', "uterus and ovaries"], ['hysteroscopy', "within the uterus"]], "Imaging."),
          B("The suffix ___ means the process of recording an image.", ['-graphy', '-gram', '-scope'], 'mammography.'),
          S("Spell the term for X-ray imaging of the breast", 'mammography', 'mamm/o + -graphy.', 'mammo…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: "Prenatal and male tests", icon: '🧪', items: [
          L("before birth", `${fig('amniocentesis', [], "amniocentesis")}• ${e('<b>amniocentesis</b>')}: drawing off amniotic fluid with a needle, usually at weeks 15 to 20; for chromosomes<br>• ${e('<b>chorionic villus sampling (CVS)</b>')}: a sample of the chorionic villi, earlier (weeks 10 to 13)<br>• ${e('FHR monitoring')}: monitoring the fetal heart rate${pearl("In a high-risk OB consultation: <bdi dir=\"ltr\">“amniocentesis at 20 weeks”</bdi> showed a normal result and a male fetus; the FHR was about 130.")}`),
          L("Male tests", `• ${e('<b>PSA</b>')}: prostate-specific antigen in the blood; raised in cancer and BPH<br>• ${e('<b>DRE</b>')}: examination of the rectum with a finger<br>• ${e('<b>prostate biopsy</b>')}: a needle sample of the prostate guided by ultrasound through the rectum (${e('TRUS')})${fig('prostate-biopsy', ["Needle sampling of the prostate"], "Prostate biopsy")}${pearl("In a consult: a nodule was felt on DRE, but the biopsy was negative and the PSA normal; the diagnosis was BPH.")}`),
          M("Which test is done earlier in pregnancy?", ['CVS', 'amniocentesis', 'Apgar', 'Pap smear'], "Weeks 10 to 13.", null, F('amniocentesis', [])),
          M("What is PSA?", ["prostate-specific antigen in the blood", "a finger examination", "a semen sample", "an X-ray of the prostate"], 'prostate-specific antigen.'),
          T("A prostate biopsy is often done with ultrasound guidance through the rectum.", true, 'TRUS.', F('prostate-biopsy', [])),
          O("Put the prostate workup in order", ['PSA and DRE', 'abnormal finding', 'TRUS biopsy', 'pathology report'], "From screening to pathology."),
          P("Match each abbreviation to its meaning", [['PSA', "prostate-specific antigen"], ['DRE', "digital rectal examination"], ['CVS', "sample of chorionic villi"], ['FHR', "fetal heart rate"]], "The tests."),
          B("Drawing off amniotic fluid is ___.", ['amniocentesis', 'amniotomy', 'culdocentesis'], "-centesis = puncture."),
          S("Spell the term for drawing off amniotic fluid with a needle", 'amniocentesis', 'amni/o + -centesis.', 'amnio…'),
          N('d2t:tx')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'tx4', title: "Hysterectomy and curettage", icon: '🏥', items: [
          L("Types of hysterectomy", `${fig('hysterectomy-types', [], "Types of hysterectomy")}${tbl([["Name", "What is removed"], [e('subtotal (partial)'), "the body of the uterus; the cervix stays"], [e('total (TAH)'), "the uterus and cervix"], [e('TAH-BSO'), "the uterus, cervix, both tubes and both ovaries"], [e('radical'), "all of these plus part of the vagina and lymph nodes"]])}${pearl("In Case Study 16-1, after cervical dysplasia and uterine prolapse, Mrs Naomi had a TAH and BSO.")}`),
          L("Curettage", `${fig('d-and-c', ["Widening the cervix and scraping the endometrium"], 'D&C')}${e('<b>D&C (dilation and curettage)</b>')}: widening the cervix and scraping the endometrium with a ${e('curette')}; to investigate abnormal bleeding or after a miscarriage.${wb('salping/o', 'oophor/o', '-ectomy')} → ${e('salpingo-oophorectomy')}`),
          M("What is removed in a TAH-BSO?", ["the uterus, cervix, both tubes and both ovaries", "the uterus only", "the ovaries only", "the cervix only"], 'total abdominal hysterectomy + bilateral salpingo-oophorectomy.', null, F('hysterectomy-types', [])),
          M("The instrument for scraping the endometrium in a D&C is a…", ['curette', 'speculum', 'resectoscope', 'colposcope'], "A curette.", null, F('d-and-c', [])),
          T("In a partial (subtotal) hysterectomy the cervix remains.", true, "Only the body."),
          W("Build a word meaning “removal of the uterus”", ['hyster/o', '-ectomy'], ['metr/o', '-pexy', 'oophor/o'], 'hysterectomy.'),
          P("Match each abbreviation to its meaning", [['TAH', "complete removal of the uterus through the abdomen"], ['BSO', "removal of both tubes and ovaries"], ['D&C', "widening and scraping"], ['TVH', "removal of the uterus through the vagina"]], "The operations."),
          B("Removal of an ovary is ___.", ['oophorectomy', 'orchiectomy', 'salpingectomy'], 'oophor/o.'),
          S("Spell the term for removal of the uterus", 'hysterectomy', 'hyster/o + -ectomy.', 'hyster…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx5', title: "Breast and prostate surgery", icon: '✂️', items: [
          L("Breast surgery", `${fig('mastectomy', ["Mastectomy"], "Mastectomy")}• ${e('<b>lumpectomy</b>')}: removing only the lump<br>• ${e('<b>simple mastectomy</b>')}: removing the whole breast<br>• ${e('<b>radical mastectomy</b>')}: the breast, chest muscle and armpit lymph nodes<br>• ${e('mammoplasty')}: repairing or resizing the breast; ${e('mastopexy')}: lifting the breast${pearl("A clinical scenario: Dr Schaefer explains mammography, lumpectomy, mastectomy, mastopexy and mammoplasty.")}`),
          L('TURP', `${fig('turp', [], 'TURP')}${e('<b>TURP (transurethral resection of the prostate)</b>')}: shaving away an enlarged prostate through the urethra with a ${e('resectoscope')}. Afterwards a ${e('Foley catheter')} is placed.${fig('turp-drawing', ["Shaving the prostate through the urethra"], 'TURP')}${pearl("In the case study: Mr Dexter had a TURP under spinal anaesthesia after being NPO before surgery.")}`),
          M("Removing only a breast lump is…", ['lumpectomy', 'mastectomy', 'mastopexy', 'mammoplasty'], "lump = mass.", null, F('mastectomy', [])),
          M("Which route is used for a TURP?", ["through the urethra", "through the abdomen", "through the rectum", "through the perineum"], 'trans- + urethr/o.', null, F('turp', [])),
          T("mastopexy means lifting and fixing the breast.", true, "-pexy = fixing in place."),
          W("Build a word meaning “repair of the breast”", ['mamm/o', '-plasty'], ['mast/o', '-ectomy', '-pexy'], 'mammoplasty.'),
          P("Match each operation to its meaning", [['lumpectomy', "removing the lump"], ['radical mastectomy', "breast, muscle and nodes"], ['mastopexy', "breast lift"], ['TURP', "Shaving the prostate through the urethra"]], "The operations."),
          B("The instrument for a TURP is the ___.", ['resectoscope', 'colposcope', 'laparoscope'], "A cutting instrument."),
          S("Spell the term for removal of a breast", 'mastectomy', 'mast/o + -ectomy.', 'mastec…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx6', title: "Caesarean section and episiotomy", icon: '🩹', items: [
          L("caesarean section", `${fig('cesarean', [], "caesarean section")}${e('<b>cesarean section (C-section, CS)</b>')}: delivering the baby through a cut in the abdomen and uterus. The skin incision is usually ${e('transverse suprapubic')} (horizontal, above the pubic bone).${pearl("In the case study: because of CPD and fetal distress, Abigail had an emergency C-section under spinal anaesthesia with a transverse suprapubic incision; she then received Pitocin and went to the PACU.")}`),
          L("Helping a vaginal birth", `• ${e('<b>episiotomy</b>')}: a cut in the perineum to widen the vaginal opening<br>• ${e('<b>amniotomy</b>')}: breaking the bag of waters<br>• ${e('induction of labor')}: starting labour with ${e('oxytocin (Pitocin)')}<br>• ${e('VBAC')}: vaginal birth after a caesarean${pearl("An OB delivery note: <bdi dir=\"ltr\">“second-degree midline episiotomy”</bdi> means a second-degree cut in the midline.")}`),
          M("How is the skin incision for a caesarean usually made?", ["horizontal, above the pubic bone", "vertical, from the navel to the breastbone", "on the perineum", "armpit"], 'transverse suprapubic.', null, F('cesarean', [])),
          M("Breaking the bag of waters is…", ['amniotomy', 'amniocentesis', 'episiotomy', 'episiorrhaphy'], "-tomy = incision."),
          T("VBAC means vaginal birth after caesarean.", true, 'vaginal birth after cesarean.'),
          O("Put the steps of a caesarean in order", ['spinal anesthesia', 'skin incision', 'uterine incision', 'delivery of infant', 'closure'], "From anaesthesia to closure."),
          P("Match each term to its meaning", [['episiotomy', "cut in the perineum"], ['amniotomy', "breaking the bag of waters"], ['induction', "starting labour"], ['C-section', "caesarean section"]], "The delivery."),
          B("The drug used to start labour is ___.", ['oxytocin', 'progesterone', 'estrogen'], 'Pitocin.'),
          S("Spell the adjective for delivery through an abdominal incision", ['cesarean', 'caesarean'], 'cesarean section.', 'ces…'),
          N('d2t:tx')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'tx7', title: "contraception", icon: '💊', items: [
          L("Methods", `${fig('contraception', [], "Contraceptive methods")}${e('<b>contraception</b>')} means preventing pregnancy (the prefix ${e('contra-')} means against):<br>• hormonal: the ${e('oral contraceptive (OC)')}, patch, injection, implant<br>• barrier: condom, ${e('diaphragm')}<br>• ${e('<b>IUD</b>')}: a device inside the uterus; copper or hormonal<br>• permanent: ${e('tubal ligation')} and ${e('vasectomy')}${fig('contraceptives', ["Several contraceptive methods"], "Contraceptive devices")}`),
          L('IUD', `${fig('iud', ["An intrauterine device in place"], 'IUD')}An ${e('IUD')} sits in the uterine cavity and works for several years.${pearl("A clinical scenario: Beth Meyers takes a 21-day pill but sometimes forgets it; an IUD or another long-acting method might suit her better.")}${memo("The condom is the only method that also prevents STIs.")}`),
          M("Where does an IUD sit?", ["inside the uterine cavity", "inside the fallopian tube", "over the cervix", "under the skin of the arm"], 'intrauterine.', null, F('iud', [])),
          M("Which method also prevents STIs?", ['condom', 'IUD', 'oral contraceptive', 'tubal ligation'], "A barrier method.", null, F('contraceptives', [])),
          T("contraception means preventing pregnancy.", true, 'contra- + conception.'),
          O("Put them in order from short-acting to permanent", ['condom', 'oral contraceptive', 'IUD', 'tubal ligation'], "Duration of effect."),
          P("Match each method to its group", [['condom', "barrier"], ['oral contraceptive', "hormonal"], ['IUD', "intrauterine"], ['vasectomy', "permanent, male"]], "The methods."),
          B("The abbreviation ___ means oral contraceptive pill.", ['OC', 'OB', 'OD'], 'oral contraceptive.'),
          S("Spell the term for preventing pregnancy", 'contraception', 'contra- + conception.', 'contra…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx8', title: "sterilization", icon: '🔒', items: [
          L("tubal ligation", `${fig('sterilization', [], "sterilization")}${e('<b>tubal ligation</b>')}: tying or cutting the fallopian tubes, often by ${e('laparoscopy')}; the egg cannot reach the uterus.${fig('tubal-ligation', ["tying the fallopian tubes"], "Tying the tubes")}`),
          L("vasectomy", `${e('<b>vasectomy</b>')}: cutting and tying the vas deferens; semen is made without sperm, but erection and ejaculation do not change. Reversing it is a ${e('vasovasostomy')}.${pearl("In a consult: the 77-year-old patient had a <bdi dir=\"ltr\">“vasectomy at age 41”</bdi>.")}${vs(['tubal ligation', "female sterilization"], ['vasectomy', "male sterilization"])}`),
          M("What is tied in a tubal ligation?", ["the fallopian tubes", "cervix", "the vas deferens", "the ovaries"], "The tubules.", null, F('tubal-ligation', [])),
          M("Rejoining the vas deferens is…", ['vasovasostomy', 'vasectomy', 'orchiopexy', 'salpingectomy'], "-stomy = making an opening.", null, F('sterilization', [])),
          T("After a vasectomy ejaculation continues, but the semen has no sperm.", true, "Only the sperm route is closed."),
          W("Build a word meaning “removal of a fallopian tube”", ['salping/o', '-ectomy'], ['vas/o', '-stomy', 'hyster/o'], 'salpingectomy.'),
          P("Match each operation to its meaning", [['tubal ligation', "tying the fallopian tube"], ['vasectomy', "cutting the vas deferens"], ['vasovasostomy', "rejoining the duct"], ['laparoscopy', "looking inside the abdomen"]], "Sterilization."),
          B("Tubal ligation is often done by ___.", ['laparoscopy', 'colposcopy', 'cystoscopy'], "Through the abdomen."),
          S("Spell the term for cutting the vas deferens", 'vasectomy', 'vas/o + -ectomy.', 'vase…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx9', title: "Infertility treatment and hormones", icon: '🧫', items: [
          L("Assisted reproduction", `${e('<b>assisted reproductive technology (ART)</b>')}:<br>• ${e('<b>IVF</b>')}: fertilization in the laboratory and transfer of the embryo to the uterus<br>• ${e('GIFT')}: transfer of gametes to the fallopian tube<br>• ${e('ZIFT')}: transfer of the zygote to the fallopian tube<br>• ${e('ICSI')}: injecting a single sperm into the egg<br>• ${e('IUI')}: injecting sperm into the uterus${pearl("In Case Study 16-2, Ruth helps with <bdi dir=\"ltr\">“transvaginal oocyte retrieval”</bdi>: collecting eggs with a needle through the vagina under ultrasound.")}`),
          L("Hormone therapy", `${e('<b>HRT</b>')}: estrogen (and progesterone) for menopausal symptoms.<br>${e('clomiphene')}: a drug that stimulates ovulation.${pearl("In Case Study 16-1, Mrs Naomi said she had not taken HRT (<bdi dir=\"ltr\">“HRT denied”</bdi>).")}${memo("in vitro means “in glass”; fertilization in a laboratory dish.")}`),
          M("In IVF, where does fertilization take place?", ["in the laboratory", "in the fallopian tube", "in the uterus", "in the ovary"], 'in vitro.'),
          M("Injecting a single sperm into an egg is…", ['ICSI', 'IUI', 'GIFT', 'ZIFT'], 'intracytoplasmic sperm injection.'),
          T("In GIFT the gametes, not the zygote, are transferred to the fallopian tube.", true, 'gamete intrafallopian transfer.'),
          O("Put the steps of IVF in order", ['ovarian stimulation', 'oocyte retrieval', 'fertilization in lab', 'embryo transfer'], "From stimulation to transfer."),
          P("Match each abbreviation to its meaning", [['IVF', "in vitro fertilization"], ['IUI', "injecting sperm into the uterus"], ['ICSI', "injecting sperm into the egg"], ['HRT', "hormone replacement therapy"]], "The treatments."),
          B("Collecting eggs for IVF is oocyte ___.", ['retrieval', 'transfer', 'ligation'], "Retrieving eggs."),
          S("Spell the term for an immature egg cell", 'oocyte', 'o/o + -cyte.', 'ooc…'),
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
    { id: 'lx-0', w: 'lx', lv: 0, name: "Eggy", title: "The cell where life begins", shape: 'ovum', color: '#FBD0DD', acc: ['sparkle'], bio: "The largest cell in the body; each month one is released from the ovary and waits in the fallopian tube." },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Rooty", title: "Master of hyster/o and orchi/o", shape: 'book', color: '#B8457A', acc: ['glasses'], bio: "A living dictionary that breaks every reproductive word into root, prefix and suffix and never mixes up -rrhea and -rrhagia." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Puzzly", title: "King of Prefixes and Suffixes", shape: 'puzzle', color: '#8A2D5A', acc: ['crown'], bio: "Places primi-, multi- and nulli- beside -gravida and -para and reads G2 P1 at a glance." },
    { id: 'fm-0', w: 'fm', lv: 0, name: "Wombie", title: "The nine-month home", shape: 'uterus', color: '#F4A6B8', acc: ['sparkle'], bio: "A hollow muscle the size of a pear that grows many times larger in pregnancy; hyster/o and metr/o are its names." },
    { id: 'fm-1', w: 'fm', lv: 1, name: "Moon Counter", title: "Guardian of the 28-day cycle", shape: 'moon', color: '#E46A8E', acc: ['glasses'], bio: "Counts the days of the cycle: menstruation, proliferation, ovulation on day 14 and the secretory phase." },
    { id: 'fm-2', w: 'fm', lv: 2, name: "Hormone Drop", title: "estrogen and progesterone", shape: 'drop', color: '#C2457A', acc: ['crown'], bio: "Estrogen builds the uterine lining and progesterone keeps it ready for pregnancy." },
    { id: 'ml-0', w: 'ml', lv: 0, name: "Spermy", title: "The speedy swimmer", shape: 'sperm', color: '#9CCBEA', acc: ['sparkle'], bio: "Made in the seminiferous tubules, matured in the epididymis, it swims with its tail all the way to the fallopian tube." },
    { id: 'ml-1', w: 'ml', lv: 1, name: "Acorn", title: "The busy prostate", shape: 'bean', color: '#E8A36B', acc: ['glasses'], bio: "Sits around the urethra below the bladder; if it enlarges (BPH), it narrows the urine stream." },
    { id: 'ml-2', w: 'ml', lv: 2, name: "Testo", title: "The testosterone molecule", shape: 'hex', color: '#2E86C1', acc: ['crown'], bio: "The male hormone made by the testis; sperm production and the changes of puberty in boys depend on it." },
    { id: 'pg-0', w: 'pg', lv: 0, name: "Zygo", title: "The first complete cell", shape: 'bubble', color: '#FDE3C8', acc: ['sparkle'], bio: "Formed by the union of sperm and egg, with 46 chromosomes; 6 to 7 days later it nests in the endometrium." },
    { id: 'pg-1', w: 'pg', lv: 1, name: "Placenty", title: "The bridge between mother and fetus", shape: 'disc', color: '#C2506A', acc: ['glasses'], bio: "Delivers oxygen and food from mother to fetus and makes hCG, estrogen and progesterone." },
    { id: 'pg-2', w: 'pg', lv: 2, name: "Bubba", title: "Apgar 9 out of 10", shape: 'blob', color: '#F3B8A0', acc: ['pacifier', 'crown'], bio: "Gets an Apgar score at minutes 1 and 5; its first milk is colostrum, full of antibodies." },
    { id: 'ds-0', w: 'ds', lv: 0, name: "Antibody", title: "STI Hunter", shape: 'yab', color: '#8E6BD8', acc: ['sparkle'], bio: "Fights chlamydia, gonorrhoea and syphilis and is a fan of the HPV vaccine and condoms." },
    { id: 'ds-1', w: 'ds', lv: 1, name: "Mammo", title: "The X-ray eye", shape: 'xray', color: '#5D646A', acc: ['glasses'], bio: "Finds small breast lumps before they can be felt, and reminds you about monthly BSE too." },
    { id: 'ds-2', w: 'ds', lv: 2, name: "Health Shield", title: "Prevention beats cure", shape: 'shield', color: '#17A398', acc: ['crown'], bio: "Never forgets regular Pap smears, breast and testicular self-examination or PSA screening." },
    { id: 'tx-0', w: 'tx', lv: 0, name: "Sono", title: "The eye inside the womb", shape: 'meter', color: '#3D6FD6', acc: ['sparkle'], bio: "Shows the fetus, placenta and heartbeat with sound waves; safe and radiation-free." },
    { id: 'tx-1', w: 'tx', lv: 1, name: "Zaya Capsule", title: "Pharmacist for women and men", shape: 'capsule', color: '#E8913A', acc: ['glasses'], bio: "Tells the contraceptive pill, HRT and oxytocin apart and knows the right dose." },
    { id: 'tx-2', w: 'tx', lv: 2, name: "Zaya’s Scribe", title: "Master of the obstetrics and gynaecology chart", shape: 'clipboard', color: '#8A2D5A', acc: ['cape', 'crown'], bio: "Reads G, P, LMP, EDD, TAH and TURP at a glance and stays with you from the first visit to delivery." }
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
      id: 'r1', w: 'lx', title: "A history to translate", who: "Pamela Kline, a 40-year-old woman",
      brief: "Mrs Kline has come for her annual visit and tells her history in plain language: she has been pregnant five times; fluid was drawn from the amniotic sac in her last pregnancy; she has had several bouts of inflammation of the vagina and cervix; a hernia of a fallopian tube was repaired; and last year her uterus, both ovaries and both tubes were removed. You must write each phrase in the record with its medical term.",
      chart: [['OB Hx', 'gravida 5; amniocentesis'], ['GYN Hx', 'vaginitis, cervicitis'], ['Surgery', 'salpingocele repair; TAH-BSO']],
      fig: { a: 'wordparts', l: [] },
      steps: [
        M("counting", "How is “pregnant five times” written?", ['gravida 5', 'para 5', 'multipara', 'G1 P5'], "gravida = number of pregnancies."),
        P("Term", "Match each phrase to its medical term", [["inflammation of the vagina", 'vaginitis'], ["inflammation of the cervix", 'cervicitis'], ["hernia of a fallopian tube", 'salpingocele'], ["drawing off amniotic fluid", 'amniocentesis']], "The APPLY scenario."),
        M("abbreviation", "In TAH-BSO, the letter B means…", ["on both sides", "breast", "bladder", "biopsy"], 'bilateral.'),
        P("root", "Match each root to its organ", [['salping/o', "fallopian tube"], ['oophor/o', "ovary"], ['hyster/o', "uterus"], ['cervic/o', "cervix"]], "The roots."),
        T("suffix", "The suffix -cele means hernia or bulge.", true, "salpingocele, cystocele."),
        S("Spelling", "Spell the term for inflammation of the cervix", 'cervicitis', 'cervic/o + -itis.', 'cervi…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: "A note full of abbreviations", who: "Gynaecology clinic note",
      brief: "Clinic note: <bdi dir=\"ltr\">“Pt concerned about TSS and STIs. Has IUD. Pap: Cx inflamed; R/O PID. Hx of D&C. Mother had TAH.”</bdi> A new nurse asks you to rewrite it in full words.",
      chart: [['Concern', 'TSS, STIs'], ['Contraception', 'IUD'], ['Pap', 'Cx inflamed; R/O PID'], ['Hx', 'D&C; mother TAH']],
      fig: { a: 'female-front', l: [] },
      steps: [
        P("abbreviation", "Match each abbreviation to its meaning", [['TSS', "toxic shock syndrome"], ['STI', "sexually transmitted infection"], ['IUD', "intrauterine device"], ['PID', "pelvic inflammatory disease"]], "The note."),
        M("abbreviation", "Cx in <bdi dir=\"ltr\">“Cx inflamed”</bdi> means…", ["cervix", "clitoris", "colon", "sac"], 'cervix.'),
        M("abbreviation", "R/O PID means…", ["rule out pelvic inflammatory disease", "pelvic inflammatory disease confirmed", "treatment of PID", "history of PID"], 'rule out.'),
        P("abbreviation", "Match each operation to its meaning", [['D&C', "widening and scraping"], ['TAH', "complete removal of the uterus through the abdomen"], ['Pap', "cervical cell sample"], ['BSO', "removal of the tubes and ovaries"]], "The operations."),
        T("Meaning", "An IUD is a contraceptive method.", true, 'intrauterine device.'),
        S("Spelling", "Spell the term for the lower opening of the uterus", 'cervix', 'Cx.', 'cerv…')
      ]
    },
    {
      id: 'r3', w: 'lx', title: "The boys’ health class", who: "Mr James Cocoa, health teacher",
      brief: "Mr Cocoa teaches a health class for teenage boys and wants to teach the male roots correctly: testis, scrotum, vas deferens, prostate and urethra, and what testosterone does at puberty.",
      chart: [['Topic', 'male reproductive system'], ['Focus', 'roots: orchi/o, scrot/o, vas/o, prostat/o, urethr/o'], ['Hormone', 'testosterone at puberty']],
      fig: { a: 'root-map-m', l: [] },
      steps: [
        P("root", "Match each root to its organ", [['orchi/o', "testis"], ['scrot/o', "scrotum"], ['vas/o', "the vas deferens"], ['prostat/o', "prostate"]], "The root map."),
        O("Path", "Put the route of sperm in order", ['testis', 'epididymis', 'vas deferens', 'urethra'], "From the testis to the outside."),
        M("Hormone", "Which group does testosterone belong to?", ['androgen', 'estrogen', 'gonadotropin', 'progestin'], "andr/o = male."),
        T("Trap", "prostate and prostrate mean the same thing.", false, "prostrate means lying face down."),
        M("puberty", "Which is not a male secondary sex characteristic?", ["breast growth", "a deeper voice", "facial hair", "more muscle"], "effect of testosterone"),
        S("Spelling", "Spell the term for the male gonad", ['testis', 'testicle'], 'test/o.', 'test…')
      ]
    },
    /* ================= دستگاه تناسلی زنانه ================= */
    {
      id: 'r4', w: 'fm', title: "Hot flushes and night sweats", who: "Heidi Red Feather, a 47-year-old woman",
      brief: "Mrs Red Feather complains of night sweats, hot flushes, irregular periods with bleeding between them, and depression. The doctor says she is probably in the years before menopause and discusses hormone therapy.",
      chart: [['Age', '47'], ['Sx', 'night sweats, hot flashes, irregular menses, depression'], ['Imp', 'perimenopause'], ['Plan', 'discuss HRT']],
      fig: { a: 'menstrual-cycle', l: [] },
      steps: [
        M("diagnosis", "Which stage do these symptoms mostly point to?", ['perimenopause', 'menarche', 'puerperium', 'pregnancy'], "The years before menopause."),
        M("Term", "Uterine bleeding between two periods is…", ['metrorrhagia', 'menorrhagia', 'amenorrhea', 'dysmenorrhea'], 'metr/o.'),
        P("Term", "Match each term to its meaning", [['menopause', "permanent end of menstruation"], ['menarche', "first period"], ['HRT', "hormone replacement therapy"], ['menses', "menstruation"]], "Menopause."),
        T("Hormone", "Falling estrogen causes the hot flushes of menopause.", true, "Declining ovarian function."),
        O("life", "Put the stages in order", ['menarche', 'reproductive years', 'perimenopause', 'menopause'], "From puberty to menopause."),
        S("Spelling", "Spell the term for the years leading up to menopause", 'perimenopause', 'peri- + men/o + pause.', 'peri…')
      ]
    },
    {
      id: 'r5', w: 'fm', title: "Looking inside the pelvis", who: "Charity Peterson, a 34-year-old woman",
      brief: "The doctor has ordered several investigations for Mrs Peterson: hysteroscopy with biopsy, culdoscopy, colposcopy and hysterosalpingography. She asks what each one shows.",
      chart: [['Orders', 'hysteroscopy with biopsy'], ['', 'culdoscopy, colposcopy'], ['', 'hysterosalpingography']],
      fig: { a: 'female-sagittal', l: [] },
      steps: [
        P("Method", "Match each method to the area it views", [['hysteroscopy', "within the uterus"], ['culdoscopy', "rectouterine pouch"], ['colposcopy', "vagina and cervix"], ['hysterosalpingography', "uterus and tubes"]], "The APPLY scenario."),
        M("root", "Which space does culd/o refer to?", ['cul-de-sac', 'cervical canal', 'uterine cavity', 'vaginal fornix'], "The pouch.", null, { a: ['female-sagittal'], l: [] }),
        M("suffix", "What is the difference between -scopy and -graphy?", ["the first is viewing with a scope and the second recording an image", "they are the same", "the first is an incision", "the second is suturing"], "The viewing method."),
        T("Method", "Hysterosalpingography shows whether the fallopian tubes are open.", true, "For infertility."),
        M("root", "colp/o means the same as which root?", ['vagin/o', 'cervic/o', 'hyster/o', 'vulv/o'], "Vagina."),
        S("Spelling", "Spell the term for viewing inside the uterus with a scope", 'hysteroscopy', 'hyster/o + -scopy.', 'hystero…')
      ]
    },
    {
      id: 'r6', w: 'fm', title: "Postmenopausal bleeding", who: "A 52-year-old woman, G4 P4",
      brief: "Chart note: a 52-year-old G4 P4 patient whose last period was at 48 and who takes Premarin was admitted with postmenopausal bleeding. A diagnostic laparoscopy and D&C were planned to rule out a neoplasm. She has a history of simple mastectomy for breast cancer.",
      chart: [['OB', 'G4 P4'], ['CC', 'postmenopausal bleeding'], ['Meds', 'Premarin (estrogen)'], ['Plan', 'laparoscopy, diagnostic D&C; R/O neoplasm'], ['Hx', 'simple mastectomy']],
      fig: { a: 'uterine-wall', l: [] },
      steps: [
        M("counting", "G4 P4 means…", ["four pregnancies and four births", "four miscarriages", "four preterm births", "four sets of twins"], "Gravida and para."),
        M("Cause", "Why is postmenopausal bleeding important?", ["it may be a sign of endometrial cancer", "it is always normal", "it is a sign of pregnancy", "it comes from anaemia"], "Ruling out malignancy."),
        P("Term", "Match each term to its meaning", [['neoplasm', "new growth (tumour)"], ['laparoscopy', "looking inside the abdomen"], ['D&C', "widening and scraping"], ['simple mastectomy', "removal of the whole breast"]], "A chart note."),
        T("drug", "Premarin is an estrogen drug.", true, "Hormone therapy."),
        M("Layer", "Which layer of the uterus does a D&C scrape?", ['endometrium', 'myometrium', 'perimetrium', 'cervix'], "the inner lining", null, { a: ['uterine-wall'], l: [] }),
        S("Spelling", "Spell the adjective meaning “after menopause”", 'postmenopausal', 'post- + men/o + pausal.', 'postm…')
      ]
    },
    /* ================= دستگاه تناسلی مردانه ================= */
    {
      id: 'r7', w: 'ml', title: "Two operations in one session", who: "Derek, a 48-year-old man",
      brief: "Case Study 15-1: Mr Derek came with bulges on both sides of the groin. Diagnosis: bilateral direct inguinal hernias. Along with herniorrhaphy he also asked for an elective vasectomy because he does not want more children.",
      chart: [['Dx', 'bilateral direct inguinal hernias'], ['Procedure', 'bilateral herniorrhaphy'], ['', 'elective vasectomy']],
      fig: { a: 'sperm-path', l: [] },
      steps: [
        M("Site", "inguinal means…", ["groin", "the navel", "scrotum", "perineum"], 'inguin/o.'),
        M("Operation", "herniorrhaphy means…", ["hernia repair by suturing", "cutting into a hernia", "orchiectomy", "tying a duct"], '-rrhaphy.'),
        M("Operation", "In a vasectomy, which duct is cut?", ['vas deferens', 'urethra', 'uterine tube', 'ejaculatory duct'], 'vas/o.', null, { a: ['sperm-path'], l: [] }),
        T("Result", "After a vasectomy the semen has no sperm, but ejaculation continues.", true, "Only the sperm route is closed."),
        P("Term", "Match each term to its meaning", [['bilateral', "on both sides"], ['elective', "by choice"], ['spermatic cord', "cord holding the vas deferens and vessels"], ['inguinal canal', "groin canal"]], 'Case Study 15-1.'),
        S("Spelling", "Spell the term for male sterilization by cutting the duct", 'vasectomy', 'vas/o + -ectomy.', 'vase…')
      ]
    },
    {
      id: 'r8', w: 'ml', title: "The testis that did not come down", who: "Bob Schaeffer Jr, a newborn boy",
      brief: "Bob’s father is worried: the doctor has said both of the baby’s testes are not yet in the scrotum (bilateral cryptorchidism) and a dilated vein was also seen above the testis. The father also has questions about circumcision. In another record, Rick Springs had an orchiectomy for testicular injury after repair of an undescended testis.",
      chart: [['Dx', 'bilateral cryptorchidism; varicocele'], ['Request', 'circumcision'], ['Plan', 'orchiopexy']],
      fig: { a: 'scrotal-disorders', l: [] },
      steps: [
        M("Term", "cryptorchidism means…", ["undescended testis", "orchitis", "absence of a testis", "twisting of the testis"], "crypt/o = hidden.", null, { a: ['cryptorchidism'], l: [] }),
        M("treatment", "What is fixing the testis in the scrotum called?", ['orchiopexy', 'orchiectomy', 'orchitis', 'orchiplasty'], '-pexy.'),
        P("Term", "Match each term to its meaning", [['varicocele', "dilated veins above the testis"], ['circumcision', "removal of the foreskin"], ['orchiectomy', "removal of a testis"], ['bilateral', "on both sides"]], "The APPLY scenarios."),
        T("removal of the foreskin", "In circumcision, the skin over the head of the penis (prepuce) is removed.", true, 'circumcision.'),
        M("root", "Which root means hidden?", ['crypt/o', 'cyst/o', 'orchi/o', 'scrot/o'], 'cryptorchidism.'),
        S("Spelling", "Spell the term for fixing the testis in the scrotum", 'orchiopexy', 'orchi/o + -pexy.', 'orchio…')
      ]
    },
    {
      id: 'r9', w: 'ml', title: "The problem the patient was embarrassed to mention", who: "Diego, a 67-year-old man",
      brief: "Case Study 15-2: Mr Diego, with a history of BPH, said after some hesitation that he has trouble with erections. The doctor investigated and ruled out psychological (psychogenic) causes and prescribed a vessel-dilating drug for erectile dysfunction.",
      chart: [['CC', 'impotence'], ['Hx', 'BPH'], ['Assessment', 'ED, psychogenic causes ruled out'], ['Rx', 'vasodilator ED drug']],
      fig: { a: 'penis-xs', l: [] },
      steps: [
        M("abbreviation", "ED means…", ['erectile dysfunction', 'ejaculatory duct', 'emergency department', 'estimated delivery'], "inability to achieve an erection"),
        M("Term", "psychogenic means…", ["of psychological origin", "of vascular origin", "inherited", "infectious"], 'psych/o + -genic.'),
        M("study of body function", "Erection is the filling of which tissue with blood?", ["corpora cavernosa and corpus spongiosum", "prostate", "epididymis", "seminal vesicle"], "Erectile tissue.", null, { a: ['penis-xs'], l: [] }),
        T("drug", "ED drugs increase blood flow to the penis by dilating the vessels.", true, 'vasodilator.'),
        P("Term", "Match each term to its meaning", [['impotence', "inability to achieve an erection"], ['BPH', "benign prostatic hyperplasia"], ['vasodilator', "widening a vessel"], ['erection', "stiffening of the penis"]], 'Case Study 15-2.'),
        S("Spelling", "Spell the older term for erectile dysfunction", 'impotence', 'im- + potence.', 'impo…')
      ]
    },
    /* ================= بارداری و زایمان ================= */
    {
      id: 'r10', w: 'pg', title: "Emergency caesarean", who: "Abigail, a 29-year-old woman, G2 P1",
      brief: "Case study: Abigail came in labour at 39 weeks. The fetal head did not fit her pelvis (CPD) and the fetus was right occiput posterior. When fetal distress developed, a caesarean was done under spinal anaesthesia with a transverse suprapubic incision. The baby scored Apgar 9/9. After surgery: Pitocin, PACU, rooming-in and breastfeeding.",
      chart: [['OB', 'G2 P1, 39 weeks'], ['Dx', 'CPD, ROP, fetal distress'], ['Procedure', 'emergency C-section, spinal anesthesia'], ['Infant', 'Apgar 9/9']],
      fig: { a: 'cesarean', l: [] },
      steps: [
        M("abbreviation", "CPD means…", ["mismatch between the fetal head and the mother’s pelvis", "premature rupture of membranes", "placenta previa", "preterm labour"], 'cephalopelvic disproportion.'),
        M("counting", "G2 P1 means…", ["two pregnancies and one previous birth", "one pregnancy and two births", "two miscarriages", "twins"], "Gravida and para."),
        M("incision", "How was the skin incision for Abigail’s caesarean made?", ["transverse, above the pubis", "vertical, in the midline", "on the perineum", "vertical, below the navel"], 'transverse suprapubic.', null, { a: ['cesarean'], l: [] }),
        P("Term", "Match each term to its meaning", [['fetal distress', "fetal oxygen shortage"], ['Pitocin', "synthetic oxytocin"], ['PACU', "post-anaesthesia care unit"], ['rooming-in', "keeping the baby in the mother’s room"]], "A case study."),
        T("Apgar score", "Apgar 9/9 means the baby was doing well at one and five minutes.", true, "Close to 10.", { a: ['apgar'], l: [] }),
        S("Spelling", "Spell the term for a baby in its first four weeks", 'neonate', 'neo- + nat/o.', 'neon…')
      ]
    },
    {
      id: 'r11', w: 'pg', title: "A normal delivery note", who: "A 25-year-old woman, G1 P0",
      brief: "OB delivery note: a 25-year-old G1 P0 patient with an IUP at 36 weeks and 6 days came with a bloody show and PROM. Examination: the cervix was 80% thinned (effacement) and 4 cm open (dilation). Under an epidural an NSVD took place, and a second-degree midline episiotomy was repaired. The baby scored Apgar 9/9; EBL 300 cc.",
      chart: [['OB', 'G1 P0 → G1 P1'], ['GA', 'IUP 36 6/7 weeks'], ['Exam', '80% effaced, 4 cm'], ['Delivery', 'NSVD, epidural, 2nd-degree episiotomy'], ['EBL', '300 cc']],
      fig: { a: 'labor-stages', l: [] },
      steps: [
        P("abbreviation", "Match each abbreviation to its meaning", [['IUP', "intrauterine pregnancy"], ['PROM', "premature rupture of membranes"], ['NSVD', "normal vaginal delivery"], ['EBL', "estimated blood loss"]], "A delivery note."),
        M("examination", "80% effacement means…", ["the cervix is 80% thinned", "the cervix is 8 cm open", "80% of the membranes have ruptured", "the fetus has descended 80%"], "Thinning."),
        M("Age", "36 weeks and 6 days means the baby is…", ['preterm', 'term', 'postterm', 'stillborn'], "Before 37 weeks."),
        T("counting", "After this delivery the patient is G1 P1.", true, "One birth."),
        M("incision", "episiotomy means…", ["cut in the perineum", "incision of the uterus", "breaking the bag of waters", "cutting into the abdomen"], 'episi/o + -tomy.'),
        S("Spelling", "Spell the term for thinning of the cervix", 'effacement', 'efface + -ment.', 'effa…')
      ]
    },
    {
      id: 'r12', w: 'pg', title: "High-risk pregnancy", who: "A 23-year-old woman on day 175 of pregnancy",
      brief: "High-risk OB consultation: a 23-year-old multigravida, nullipara with a history of three miscarriages is now 175 days (25 weeks) pregnant. Amniocentesis at week 20 was normal and showed a male fetus. Ultrasound showed placenta previa, and there is a risk of abruptio. FHR about 130. Recommendation: caesarean once labour starts.",
      chart: [['OB', 'multigravida, nullipara; 3 SABs'], ['GA', '175 days'], ['Tests', 'amniocentesis 20 wk: normal male'], ['Dx', 'placenta previa; risk of abruptio'], ['Plan', 'C-section at onset of labor']],
      fig: { a: 'placenta-problems', l: [] },
      steps: [
        M("counting", "multigravida, nullipara means…", ["pregnant several times but no births", "pregnant for the first time", "has had several births", "never pregnant"], 'Per standard references.'),
        M("pairs", "placenta previa means…", ["placenta over the cervix", "placental abruption", "placenta stuck to the muscle", "small placenta"], 'previa.', null, { a: ['placental-abnormalities'], l: [] }),
        M("danger", "Why is vaginal delivery dangerous in placenta previa?", ["the placenta blocks the way out and causes heavy bleeding", "the fetus turns breech", "blood pressure rises", "the baby is born early"], "Bleeding."),
        P("Term", "Match each term to its meaning", [['miscarriage', "spontaneous abortion"], ['abruptio placentae', "placental abruption"], ['FHR', "fetal heart rate"], ['amniocentesis', "drawing off amniotic fluid"]], "The consultation."),
        T("Test", "Amniocentesis can show the sex and chromosomes of the fetus.", true, "Karyotype.", { a: ['amniocentesis'], l: [] }),
        S("Spelling", "Spell the second word of the term for a placenta over the cervix", 'previa', 'placenta …', 'prev…')
      ]
    },
    /* ================= بیماری‌ها و عفونت‌ها ================= */
    {
      id: 'r13', w: 'ds', title: "Blisters that became ulcers", who: "A 22-year-old woman",
      brief: "A case study: a 22-year-old patient came with fever, malaise, painful urination and white vaginal discharge. A few days earlier she had blisters in the genital area that have now become ulcers. Examination: redness and swelling, and enlarged lymph nodes in the groin. Diagnosis: genital herpes.",
      chart: [['Sx', 'fever, malaise, dysuria, leukorrhea'], ['Exam', 'vesicles → ulcers; erythema, edema; inguinal lymphadenopathy'], ['Dx', 'genital herpes (HSV-2)']],
      fig: { a: 'sti', l: [] },
      steps: [
        P("Term", "Match each sign to its meaning", [['malaise', "general unwellness"], ['dysuria', "painful urination"], ['leukorrhea', "white discharge"], ['lymphadenopathy', "lymph node disease"]], 'Case Study.'),
        M("Cause", "What causes genital herpes?", ['HSV-2', 'HPV', 'HIV', 'Treponema'], "Herpes simplex.", null, { a: ['herpes-drawing'], l: [] }),
        O("area of damaged tissue", "Put the changes of the lesion in order", ['erythema', 'vesicles', 'ulcers', 'healing'], "From redness to healing."),
        M("Term", "erythema and edema mean…", ["redness and swelling", "fever and pain", "blisters and ulcers", "itching and discharge"], "erythr/o = red."),
        T("treatment", "Genital herpes is controlled with antiviral treatment, but the virus is not cleared from the body.", true, "It stays dormant."),
        S("Spelling", "Spell the term for white vaginal discharge", 'leukorrhea', 'leuk/o + -rrhea.', 'leuko…')
      ]
    },
    {
      id: 'r14', w: 'ds', title: "Urine that is slow to start", who: "Dexter, a 60-year-old man",
      brief: "A case study: Mr Dexter complains that his urine is slow to start and his stream is weak. On DRE an enlarged prostate of about 50 grams was felt. After voiding, 120 mL of urine remains in his bladder. Diagnosis: BPH with BNO. Plan: TURP.",
      chart: [['CC', 'hesitancy, weak stream'], ['DRE', 'enlarged prostate ~50 g'], ['Residual urine', '120 mL'], ['Dx', 'BPH with BNO'], ['Plan', 'TURP']],
      fig: { a: 'bph', l: [] },
      steps: [
        M("Term", "hesitancy means…", ["delayed start of urination", "excessive urine", "bed-wetting", "blood in the urine"], "Delay."),
        M("abbreviation", "BNO means…", ["bladder neck obstruction", "bladder tumour", "bladder infection", "enlarged kidney"], 'bladder neck obstruction.'),
        T("examination", "DRE means feeling the prostate with a finger through the rectum.", true, 'digital rectal exam.', { a: ['male-sagittal'], l: [] }),
        M("Cause", "What does a residual urine of 120 mL indicate?", ["urinary retention from a blockage", "Kidney infection", "kidney failure", "diabetes"], 'urinary retention.'),
        P("Term", "Match each term to its meaning", [['BPH', "benign prostatic hyperplasia"], ['TURP', "Shaving the prostate through the urethra"], ['hyperplasia', "more cells"], ['benign', "not cancerous"]], 'Case Study.'),
        S("Spelling", "Spell the term for the walnut-sized gland below the bladder", 'prostate', 'prostat/o.', 'prost…')
      ]
    },
    {
      id: 'r15', w: 'ds', title: "Heavy, painful periods", who: "Rosie McConnell, a 38-year-old woman",
      brief: "Mrs McConnell complains of very heavy, painful periods. Hysteroscopy showed that her uterus is tilted backwards (retroverted) and that she has several fibroids. She had preeclampsia in a previous pregnancy. Today her pregnancy test was positive.",
      chart: [['Sx', 'menorrhagia, dysmenorrhea'], ['Hysteroscopy', 'retroverted uterus, fibroids'], ['Hx', 'preeclampsia'], ['Lab', 'positive pregnancy test']],
      fig: { a: 'uterine-disorders', l: [] },
      steps: [
        P("Term", "Match each term to its meaning", [['menorrhagia', "heavy periods"], ['dysmenorrhea', "painful periods"], ['retroverted', "tilted backwards"], ['fibroid', "benign muscle tumour of the uterus"]], "The APPLY scenario."),
        M("fibroid", "What is the scientific name for a fibroid?", ['leiomyoma', 'endometriosis', 'adenomyosis', 'polyp'], "A smooth-muscle tumour.", null, { a: ['fibroids'], l: [] }),
        M("Complication", "What comes with preeclampsia?", ["high blood pressure and protein in the urine", "low blood sugar", "painless bleeding", "fever"], "after week 20"),
        T("Test", "A pregnancy test measures hCG.", true, "The pregnancy hormone."),
        M("Position", "Retroversion of the uterus means…", ["the uterus tilting backwards", "uterine prolapse", "enlargement of the uterus", "a two-horned uterus"], 'retro-.', null, { a: ['uterine-positions'], l: [] }),
        S("Spelling", "Spell the term for painful periods", 'dysmenorrhea', 'dys- + men/o + -rrhea.', 'dysm…')
      ]
    },
    /* ================= تشخیص، درمان و پیشگیری ================= */
    {
      id: 'r16', w: 'tx', title: "From Pap smear to hysterectomy", who: "Naomi, a 60-year-old woman, G2 P2",
      brief: "Case Study 16-1: Mrs Naomi came with postmenopausal bleeding. Her Pap smears had shown cervical dysplasia. After colposcopy, a D&C with cone biopsy was done. She had not taken HRT. Because of the dysplasia and uterine prolapse, a TAH and BSO was performed. Pathology: leiomyomas, narrowing of the right fallopian tube and no PID.",
      chart: [['OB', 'G2 P2'], ['CC', 'postmenopausal bleeding'], ['Tests', 'Pap: cervical dysplasia; colposcopy; D&C with cone biopsy'], ['Surgery', 'TAH and BSO'], ['Path', 'leiomyomas; R tube stenosis; no PID']],
      fig: { a: 'hysterectomy-types', l: [] },
      steps: [
        O("Process", "Put the workup and treatment in order", ['Pap smear', 'colposcopy', 'D&C with cone biopsy', 'TAH and BSO'], 'Case Study 16-1.'),
        M("Term", "cervical dysplasia means…", ["abnormal growth of cervical cells", "advanced cancer", "infection of the cervix", "polyp"], 'dys- + -plasia.', null, { a: ['pap-test'], l: [] }),
        M("surgery", "What is removed in a TAH and BSO?", ["the uterus, cervix, tubes and ovaries", "the uterus only", "the ovaries only", "the cervix only"], "Complete.", null, { a: ['hysterectomy-types'], l: [] }),
        P("Pathology", "Match each finding to its meaning", [['leiomyomas', "fibroids"], ['stenosis', "narrowing"], ['no PID', "no pelvic infection"], ['uterine prolapse', "uterus slipping down into the vagina"]], "The pathology."),
        T("treatment", "<bdi dir=\"ltr\">“HRT denied”</bdi> means the patient has not taken hormone therapy.", true, "denied = said no."),
        S("Spelling", "Spell the term for a magnified view of the cervix", 'colposcopy', 'colp/o + -scopy.', 'colpo…')
      ]
    },
    {
      id: 'r17', w: 'tx', title: "A day in the IVF laboratory", who: "Ruth, a laboratory scientist",
      brief: "Case Study 16-2: Ruth works in an IVF laboratory. Today she is helping with a transvaginal oocyte retrieval, measuring sperm motility and preparing GIFT and ZIFT for two other couples.",
      chart: [['Procedures', 'transvaginal oocyte retrieval'], ['Lab', 'sperm motility'], ['Transfers', 'GIFT, ZIFT, embryo transfer']],
      fig: { a: 'fertilization', l: [] },
      steps: [
        O("Process", "Put the steps of IVF in order", ['ovarian stimulation', 'oocyte retrieval', 'fertilization in lab', 'embryo transfer'], 'IVF.'),
        P("abbreviation", "Match each abbreviation to its meaning", [['IVF', "in vitro fertilization"], ['GIFT', "gamete intrafallopian transfer"], ['ZIFT', "zygote intrafallopian transfer"], ['ICSI', "injecting sperm into the egg"]], 'Case Study 16-2.'),
        M("Term", "transvaginal oocyte retrieval means…", ["collecting eggs through the vagina", "transferring the embryo to the uterus", "injecting sperm into the uterus", "a sample from the cervix"], 'trans- + vagin/o.'),
        M("sperm", "sperm motility means…", ["movement of sperm", "sperm count", "sperm shape", "semen volume"], "Movement.", null, { a: ['sperm-cell'], l: [] }),
        T("Method", "In ZIFT the zygote is transferred to the fallopian tube.", true, 'zygote intrafallopian transfer.'),
        S("Spelling", "Spell the term for an egg cell before it matures", 'oocyte', 'o/o + -cyte.', 'ooc…')
      ]
    },
    {
      id: 'r18', w: 'tx', title: "Night-time urination at 77", who: "A 77-year-old man",
      brief: "A consultation: a 77-year-old patient complains of night-time urination and difficulty ejaculating. As a child he had cryptorchidism, treated with orchiopexy, and at 41 he had a vasectomy. On DRE a nodule was felt, but the biopsy for prostate cancer was negative and the PSA normal. Diagnosis: BPH. Plan: TURP.",
      chart: [['CC', 'nocturia; difficulty releasing semen'], ['Hx', 'cryptorchidism → orchiopexy; vasectomy at 41'], ['Tests', 'DRE: nodules; biopsy negative; PSA normal'], ['Dx', 'BPH'], ['Plan', 'TURP']],
      fig: { a: 'turp', l: [] },
      steps: [
        M("Symptom", "nocturia means…", ["bed-wetting", "painful urination", "blood in the urine", "incontinence"], 'noct/o + -uria.'),
        P("Test", "Match each test to its job", [['DRE', "feeling the prostate"], ['PSA', "prostate antigen in the blood"], ['biopsy', "tissue sample"], ['TRUS', "ultrasound through the rectum"]], "Prostate workup."),
        T("Result", "A negative biopsy and normal PSA favour BPH over cancer.", true, "Not cancerous.", { a: ['prostate-biopsy'], l: [] }),
        M("treatment", "Which route is TURP done through?", ["urethra", "abdomen", "the straight final section of the large bowel", "perineum"], 'transurethral.', null, { a: ['turp-drawing'], l: [] }),
        O("history of", "Put the events of the patient’s life in order", ['cryptorchidism', 'orchiopexy', 'vasectomy', 'BPH'], "From childhood to today."),
        S("Spelling", "Spell the term for night-time urination", 'nocturia', 'noct/o + -uria.', 'noct…')
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
    ['Lx', "The reproductive system in women and men has one goal: making gametes (eggs and sperm) and sex hormones."],
    ['Lx', "Start the meaning from the suffix: salping/o/cele means “hernia of a fallopian tube”."],
    ['Lx', "hyster/o and metr/o both mean uterus; colp/o and vagin/o both mean vagina; oophor/o and ovari/o both mean ovary."],
    ['Lx', "orchi/o, orchid/o and test/o all mean testis; oophor/o is the ovary, so don’t confuse it with orchi/o."],
    ['Lx', "gravida is the number of pregnancies and para the number of births after week 20."],
    ['Lx', "-rrhea is flowing and -rrhagia heavy bleeding; -rrhaphy is suturing."],
    ['Lx', "prostate is the gland; prostrate means lying face down. One extra r changes the meaning."],
    ['Fm', "The layers of the uterus from outside to inside: perimetrium, myometrium, endometrium."],
    ['Fm', "The ovaries and fallopian tubes together are called the adnexa."],
    ['Fm', "In a 28-day cycle ovulation is around day 14; after that the corpus luteum makes progesterone."],
    ['Fm', "menarche is the first period and menopause the last; perimenopause covers the years leading up to menopause."],
    ['Fm', "mamm/o and mast/o both mean breast: mammography and mastectomy."],
    ['Ml', "The route of sperm: seminiferous tubules, epididymis, vas deferens, ejaculatory duct, urethra."],
    ['Ml', "The scrotum keeps the testes about 2 to 3 degrees cooler than the body."],
    ['Ml', "Most of the volume of semen comes from the seminal vesicles, not the prostate."],
    ['Ml', "Point and Shoot: erection is parasympathetic and ejaculation sympathetic."],
    ['Pg', "The embryo lasts until the end of week 8, and the fetus from week 9 until birth."],
    ['Pg', "Naegele’s rule: LMP + 7 days − 3 months + 1 year; or LMP + 280 days."],
    ['Pg', "The umbilical cord has two arteries and one vein."],
    ['Pg', "APGAR: colour, pulse, reflex response, muscle tone and breathing; each 0 to 2."],
    ['Pg', "The first stage of labour lasts until the cervix is fully open, the second until birth and the third until the placenta comes out."],
    ['Ds', "Placenta previa causes painless bleeding and abruptio placentae painful bleeding."],
    ['Ds', "More than 95% of ectopic pregnancies are in a fallopian tube."],
    ['Ds', "hypospadias is a urethral opening under the penis and epispadias on top of it."],
    ['Ds', "HPV causes genital warts and most cervical cancers."],
    ['Ds', "Always investigate postmenopausal bleeding; it may be endometrial cancer."],
    ['Tx', "CVS is done earlier than amniocentesis: weeks 10 to 13 versus 15 to 20."],
    ['Tx', "TAH-BSO means removal of the uterus, cervix, both tubes and both ovaries."],
    ['Tx', "TURP shaves the prostate through the urethra; no skin incision."],
    ['Tx', "The condom is the only contraceptive method that also protects against STIs."],
    ['Tx', "In GIFT the gametes, and in ZIFT the zygote, are transferred to the fallopian tube."]
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
