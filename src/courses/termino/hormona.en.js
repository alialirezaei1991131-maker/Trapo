/* تراپو • ترمینو — حیطه «hormona» (Endocrine System)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_hormona;
  D.css = "[lang=\"fa\"]{font-family: Vazirmatn, Tahoma, system-ui, sans-serif;}\ntable.mini td .en-text, table.mini td[dir=\"ltr\"]{overflow-wrap: anywhere;}\n.vs__c bdi.nw, table.mini bdi.nw, .wbx bdi.nw, .match bdi.nw, .chip bdi.nw, .opt bdi.nw, .rcard2 bdi.nw, .dict__t bdi.nw{white-space: normal; overflow-wrap: anywhere;}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* هورمونا — هسته: فضای نام، متن‌ها، رقم فارسی و سازنده‌های کوتاه محتوا
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
  EA.APP = { name: "Hormona", key: 'hormona', title: "Hormona • Endocrine Terminology" };

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
  EA.bi = s => {
    let depth = 0;
    const out = String(s).split(/(<[^>]+>)/).map(x => {
      if (x.startsWith('<')) { if (/^<bdi\b/i.test(x)) depth++; else if (/^<\/bdi>/i.test(x)) depth--; return x; }
      /* نشانه LRM دیگر لازم نیست (خود bdi جهت را نگه می‌دارد) و پیوستن تکه‌ها را می‌شکند */
      return depth ? x : x.replace(/\u200e/g, '').replace(BI_RUN, biWrap);
    }).join('');
    /* تکه‌های کوتاه لاتین (مثل ‎-scopy) نباید سر خط از خط تیره بشکنند */
    /* nowrap جلوی شکستن خط در فاصله بعدی را هم می‌گیرد؛ <wbr> آن فرصت را برمی‌گرداند */
    return out.replace(/<bdi dir="ltr">([^<\s]{1,26})<\/bdi>(?=(\s?))/g, (_, t, sp) => `<bdi dir="ltr" class="nw">${t}</bdi>${sp ? '<wbr>' : ''}`);
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
(function (root) {
  const EA = root.EA = root.EA || {};
  const fa = (n, d) => EA.fa(n, d);
  EA.APP = {
    name: "Hormona", key: 'hormona', title: "Hormona • Endocrine Terminology", certCode: 'HM',
    subject: "Medical terminology of the endocrine system (glands and hormones)",
    kicker: "🦋 Medical terminology: The Endocrine System, Glands and Hormones",
    hello: "Hi, I’m <b>Hormona</b>;",
    landP: () => `Hi, I’m <b>Hormona</b>, a hormone molecule with a golden key that unlocks every target cell! Here you don’t memorise words; you <b>decode</b> them: you learn the roots, prefixes and suffixes and read every new word yourself. ${fa(EA.lex.TERMS.length)} terms with pronunciation and meaning, ${fa(Object.keys(EA.IMG).length + EA.ART_KEYS.length)} pictures and teaching figures, and ${fa(EA.rounds.length)} clinical cases and Leitner cards are waiting for you.`,
    disclaimer: "Hormona is a learning tool and does not replace clinical judgement, a physician’s orders or a laboratory reference.",
    eyes: "Dozens of bilingual figures and clinical pictures, from the map of the glands and negative feedback to goitre, acromegaly and Cushing syndrome.",
    outcomes: [
          "Break every endocrine word into prefix, root and suffix and say what it means",
          "Show the location of each gland, its hormones and their target tissues on a body map",
          "Explain the hypothalamus–pituitary axis and negative feedback",
          "Recognise thyroid, parathyroid and adrenal diseases by “too much or too little” hormone",
          "Describe the types of diabetes, blood sugar tests, complications and treatments with the right terms",
          "Read lab sheets, abbreviations, operations and endocrine drugs in a patient record"
        ],
    endText: "Just 5 minutes a day. A few weeks from now you’ll read gland and hormone terms like your mother tongue.",
    obHello: "Hi! I’m Hormona, the hormone molecule that holds the key to every cell 🔑 What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “Language of Hormones” is the best start; the overview of the system and the basic roots are taught there!",
    demo: () => ({
    q: "The word <b dir=\"ltr\">hypoglycemia</b> means…",
    fig: { a: ['glucose-balance'], l: ['insulin ↓ • glucagon ↑'] },
    opts: ["low blood sugar", "high blood sugar", "sugar in the urine", "lack of insulin"],
    why: `${EA.K.wb('hypo-', 'glyc/o', '-emia')}<br><b>hypo-</b> = below normal, <b>glyc/o</b> = sugar, <b>-emia</b> = condition of the blood. So it means <b>low blood sugar</b>, the drop that comes with too much insulin or with hunger. Start the meaning from the suffix!`
  }),
    titles: ["New Messenger", "Curious Receptor", "Young Key", "Homeostasis Guardian", "Root Decoder", "Negative Feedback Master", "Hyper and Hypo Hunter",
    "Pituitary Conductor", "Guardian of the Neck Butterfly", "Calcium Master", "Adrenal Commander", "Diabetes Detective", "Word-Building Master", "Endocrinology Legend", "Terminology Icon"],
    leagueRoles: ["Medical student", "Nursing student", "Lab-science student", "Lab scientist", "Nutrition student", "ICU nurse", "Clinical dietitian", "Internal-medicine resident", "Midwifery student", "Pharmacy student", "Surgical technologist", "endocrine ward nurse", "diabetes educator"],
    firstBadge: ['📨', "First Message"],
    worldBadges: { lx: ['🧩', "Decoder"], hp: ['👑', "Pituitary Commander"], th: ['🦋', "Butterfly Guardian"], ad: ['🎩', "King of Stress"], pa: ['🔑', "Keeper of the Sugar Key"], dx: ['🔬', "Hormone Detective"] },
    confetti: ['#6C3FD1', '#0FA3A3', '#FFC800', '#1E88E5', '#8E44D9', '#E8892B', '#D94F7B', '#58CC02'],
    obRoles: [["Medical student", ''], ["nursing or midwifery student", ''], ["lab sciences", ''], ["nutrition", ''], ["nurse or physician", ''], ["other", '']],
    /* شخصیت کامل (نسل قدیم: کل تابع رسم در ui خود دوره بود) */
    mascotFull: function (mood, color, size) {
    const c = color || 'var(--brand)';
    const m = mood || 'happy';
    const ink = '#3a0d16';
    const cx = 58, cy = 74;
    const my = cy + 19;
    const mouths = {
      happy: `<path d="M${cx - 11} ${my} Q${cx} ${my + 11} ${cx + 11} ${my}" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      cheer: `<path d="M${cx - 13} ${my - 3} Q${cx} ${my + 20} ${cx + 13} ${my - 3} Z" fill="${ink}"/><path d="M${cx - 6} ${my + 7} Q${cx} ${my + 11} ${cx + 6} ${my + 7}" fill="#ff8a9a"/>`,
      sad: `<path d="M${cx - 10} ${my + 7} Q${cx} ${my - 3} ${cx + 10} ${my + 7}" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      wow: `<ellipse cx="${cx}" cy="${my + 3}" rx="6" ry="8" fill="${ink}"/>`,
      think: `<path d="M${cx - 9} ${my + 4} L${cx + 9} ${my + 1}" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>`
    };
    const brows = m === 'think' ? `<path d="M${cx - 21} ${cy - 15} L${cx - 9} ${cy - 11}" stroke="${ink}" stroke-width="3.5" stroke-linecap="round"/><path d="M${cx + 8} ${cy - 13} L${cx + 21} ${cy - 15}" stroke="${ink}" stroke-width="3.5" stroke-linecap="round"/>`
      : m === 'sad' ? `<path d="M${cx - 21} ${cy - 11} L${cx - 9} ${cy - 15}" stroke="${ink}" stroke-width="3.5" stroke-linecap="round"/><path d="M${cx + 9} ${cy - 15} L${cx + 21} ${cy - 11}" stroke="${ink}" stroke-width="3.5" stroke-linecap="round"/>` : '';
    const tear = m === 'sad' ? `<path d="M${cx + 22} ${cy + 8} q4 8 0 12 q-4 -4 0 -12z" fill="#8fdcff"/>` : '';
    const eyes = m === 'cheer'
      ? `<path d="M${cx - 20} ${cy + 2} Q${cx - 13} ${cy - 8} ${cx - 6} ${cy + 2}" stroke="${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M${cx + 6} ${cy + 2} Q${cx + 13} ${cy - 8} ${cx + 20} ${cy + 2}" stroke="${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`
      : `<g class="yona-eyes"><ellipse cx="${cx - 13}" cy="${cy}" rx="8" ry="10" fill="#fff"/><ellipse cx="${cx + 13}" cy="${cy}" rx="8" ry="10" fill="#fff"/><circle cx="${cx - (m === 'think' ? 10 : 12)}" cy="${cy + (m === 'think' ? -3 : 2)}" r="4.6" fill="#1d1d1d"/><circle cx="${cx + (m === 'think' ? 16 : 14)}" cy="${cy + (m === 'think' ? -3 : 2)}" r="4.6" fill="#1d1d1d"/><circle cx="${cx - 10}" cy="${cy - 1}" r="1.7" fill="#fff"/><circle cx="${cx + 16}" cy="${cy - 1}" r="1.7" fill="#fff"/></g>`;
    return `<svg class="yona hormona yona--${m}" viewBox="0 0 120 150" width="${size || 120}" height="${(size || 120) * 1.25}" aria-hidden="true" style="--c:${c}">
      <ellipse cx="60" cy="144" rx="32" ry="5" fill="currentColor" opacity=".12"/>
      <g class="yona-body">
        <path d="M98.7 97.5 L58.0 121.0 L17.3 97.5 L17.3 50.5 L58.0 27.0 L98.7 50.5Z" fill="var(--c)" stroke="var(--c)" stroke-width="12" stroke-linejoin="round"/>
        <path d="M98.7 97.5 L58.0 121.0 L17.3 97.5 L17.3 50.5 L58.0 27.0 L98.7 50.5Z" fill="#000" opacity=".1" stroke="#000" stroke-opacity=".1" stroke-width="12" stroke-linejoin="round"/>
        <path d="M96.1 93.0 L58.0 115.0 L19.9 93.0 L19.9 49.0 L58.0 27.0 L96.1 49.0Z" fill="var(--c)" stroke="var(--c)" stroke-width="10" stroke-linejoin="round"/>
        <path d="M82.2 92.0 L58.0 106.0 L33.8 92.0 L33.8 64.0 L58.0 50.0 L82.2 64.0Z" fill="#000" opacity=".08" stroke="#000" stroke-opacity=".08" stroke-width="8" stroke-linejoin="round"/>
        <path d="M${cx - 36} ${cy - 22} L${cx - 14} ${cy - 40}" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>
        <g transform="translate(86 96) rotate(-30)"><circle cx="8" cy="8" r="8" fill="#FFC800" stroke="#fff" stroke-width="2.5"/><circle cx="8" cy="8" r="3" fill="#fff"/><path d="M15 8 h20 M29 8 v7 M23 8 v5" stroke="#FFC800" stroke-width="5" stroke-linecap="round"/></g>
        <path class="negar-spark" d="M100 18 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
        ${brows}${eyes}
        <ellipse cx="${cx - 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/><ellipse cx="${cx + 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/>
        ${mouths[m] || mouths.happy}${tear}
      </g>
    </svg>`;
  }
  };
})(window);
/* هورمونا — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/merge_data.py از data/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["acidosis", "ass-ih-DOH-sis", "Increased acidity (reduced alkalinity) of the blood and body fluids.", "excess acid in body fluids", "pa", "Pathology_and_Disorders", []],
["acromegaly", "ak-roh-MEG-ah-lee", "Enlargement of the bones of the hands, feet, jaw and face caused by excess growth hormone after puberty (acr/o = extremities, -megaly = enlargement).", "enlarged hands, feet and face in adults", "hp", "Pathology_and_Disorders", []],
["Adam's apple", "AD-amz AP-el", "The prominence on the front of the neck formed by the thyroid cartilage.", "bulge of the thyroid cartilage at the front of the neck", "th", "Anatomy_and_Physiology", []],
["Addison disease", "AD-ih-son dih-ZEEZ", "Hypofunction of the adrenal cortex with low cortisol and aldosterone: weakness, weight loss, low blood pressure, hypoglycemia and bronze skin.", "chronic failure of the adrenal cortex", "ad", "Pathology_and_Disorders", []],
["adenectomy", "ad-eh-NEK-toh-mee", "Surgical removal (excision) of a gland.", "removal of a gland", "lx", "Pharmacology_and_Treatment", []],
["adenitis", "ad-eh-NY-tis", "Inflammation of a gland.", "inflammation of a gland", "lx", "Pathology_and_Disorders", []],
["adenocarcinoma", "ad-eh-noh-kar-sih-NOH-mah", "A cancerous tumor of a gland.", "cancer of glandular tissue", "lx", "Pathology_and_Disorders", []],
["adenogenous", "ad-eh-NOJ-eh-nus", "Originating in a gland.", "of glandular origin", "lx", "Anatomy_and_Physiology", []],
["adenohypophysis", "AD-eh-noh-high-POF-ih-sis", "The anterior lobe of the pituitary gland, which makes GH, TSH, ACTH, FSH, LH and prolactin.", "front lobe of the pituitary", "hp", "Anatomy_and_Physiology", []],
["adenohypophysitis", "AD-eh-noh-high-pof-ih-SY-tis", "Inflammation of the anterior pituitary, often related to pregnancy.", "inflammation of the anterior pituitary", "hp", "Pathology_and_Disorders", []],
["adenoma", "ad-eh-NOH-mah", "A benign (noncancerous) tumor of glandular tissue; a common cause of hypersecretion.", "benign gland tumour", "lx", "Pathology_and_Disorders", []],
["adenomectomy", "ad-eh-noh-MEK-toh-mee", "Surgical removal of an adenoma, such as a pituitary tumor.", "removal of a gland tumour", "hp", "Pharmacology_and_Treatment", []],
["adenopathy", "ad-eh-NOP-ah-thee", "Any disease of a gland (often used for enlarged lymph nodes).", "any disease of a gland", "lx", "Pathology_and_Disorders", []],
["adenotomy", "ad-eh-NOT-oh-mee", "Incision into a gland.", "incision into a gland", "lx", "Pharmacology_and_Treatment", []],
["adrenal", "ah-DREE-nal", "Pertaining to the adrenal glands.", "gland sitting on top of each kidney", "ad", "Anatomy_and_Physiology", []],
["adrenal cortex", "ah-DREE-nal KOR-teks", "The outer region of the adrenal gland that secretes corticosteroids (cortex = bark).", "outer layer of the suprarenal gland", "ad", "Anatomy_and_Physiology", []],
["adrenal feminization", "ah-DREE-nal fem-ih-nih-ZAY-shun", "Female secondary sex characteristics in a male caused by excess adrenal estrogen.", "feminization caused by the adrenal glands", "ad", "Pathology_and_Disorders", []],
["adrenal glands", "ah-DREE-nal GLANDZ", "Two triangular glands on top of the kidneys, each with an outer cortex and an inner medulla (ad- = near, ren/o = kidney).", "pair of glands on top of the kidneys", "ad", "Anatomy_and_Physiology", []],
["adrenal insufficiency", "ah-DREE-nal in-suh-FISH-en-see", "Inadequate secretion of adrenal cortex hormones; Addison disease.", "too little cortisol from the suprarenal glands", "ad", "Pathology_and_Disorders", []],
["adrenal medulla", "ah-DREE-nal meh-DULL-ah", "The inner region of the adrenal gland that secretes epinephrine and norepinephrine (medulla = marrow).", "inner part of the adrenal gland", "ad", "Anatomy_and_Physiology", []],
["adrenal virilism", "ah-DREE-nal VIR-ih-lizm", "Male secondary sex characteristics in a female caused by excess adrenal androgens.", "masculinization caused by the adrenal glands", "ad", "Pathology_and_Disorders", []],
["adrenalectomy", "ah-dree-nal-EK-toh-mee", "Surgical removal of one or both adrenal glands.", "removal of an adrenal gland", "ad", "Pharmacology_and_Treatment", []],
["adrenaline", "ah-DREN-ah-lin", "Epinephrine.", "fight-or-flight hormone of the adrenal medulla", "ad", "Anatomy_and_Physiology", []],
["adrenalitis", "ah-dree-nal-EYE-tis", "Inflammation of one or both adrenal glands.", "inflammation of an adrenal gland", "ad", "Pathology_and_Disorders", []],
["adrenergic", "ad-ren-ER-jik", "Activated by or related to epinephrine (adrenaline).", "activated by epinephrine", "ad", "Anatomy_and_Physiology", []],
["adrenocortical", "ah-dree-noh-KOR-tih-kal", "Pertaining to the adrenal cortex.", "relating to the adrenal cortex", "ad", "Anatomy_and_Physiology", []],
["adrenocorticotropic hormone", "ah-dree-noh-kor-tih-koh-TROH-pik HOR-mohn", "Anterior pituitary hormone that stimulates the adrenal cortex to secrete cortisol.", "pituitary hormone that drives the adrenal cortex", "hp", "Anatomy_and_Physiology", ["ACTH"]],
["adrenogenital syndrome", "ah-dree-noh-JEN-ih-tal SIN-drohm", "Overproduction of adrenal androgens causing masculinization; congenital or from an adrenal tumor.", "adrenal disorder causing abnormal sex development", "ad", "Pathology_and_Disorders", []],
["adrenomegaly", "ah-dree-noh-MEG-ah-lee", "Enlargement of one or both adrenal glands.", "enlargement of the adrenal glands", "ad", "Pathology_and_Disorders", []],
["adrenopathy", "ad-ren-OP-ah-thee", "Any disease of the adrenal glands; adrenalopathy.", "adrenal disease", "ad", "Pathology_and_Disorders", []],
["aldosterone", "al-DOS-ter-ohn", "Mineralocorticoid that makes the kidneys keep sodium and water and excrete potassium.", "adrenal hormone that keeps sodium and loses potassium", "ad", "Anatomy_and_Physiology", []],
["alpha cells", "AL-fah SELZ", "Islet cells that produce glucagon.", "islet cells that make glucagon", "pa", "Anatomy_and_Physiology", []],
["amenorrhea", "ay-men-oh-REE-ah", "Absence of menstrual periods in a woman of reproductive age.", "absence of periods", "dx", "Pathology_and_Disorders", []],
["amino acid hormone", "ah-MEE-noh AS-id HOR-mohn", "A hormone made of amino acids (proteins and protein-like compounds), such as insulin and epinephrine.", "hormone made of amino acids", "lx", "Anatomy_and_Physiology", []],
["androgen", "AN-droh-jen", "A male hormone, such as testosterone, made by the testes and the adrenal cortex (andr/o = male, -gen = producing).", "male sex hormone", "ad", "Anatomy_and_Physiology", []],
["anorexia", "an-oh-REK-see-ah", "Lack or loss of appetite for food.", "loss of appetite", "lx", "Pathology_and_Disorders", []],
["antidiabetics", "an-tee-dye-ah-BET-iks", "Drugs that help control blood sugar in diabetes.", "antidiabetic drugs", "pa", "Pharmacology_and_Treatment", []],
["antidiuretic hormone", "an-tee-dye-yoo-RET-ik HOR-mohn", "Hormone made in the hypothalamus and released by the posterior pituitary that makes the kidneys reabsorb water; vasopressin.", "pituitary hormone that makes the kidneys save water", "hp", "Anatomy_and_Physiology", ["ADH"]],
["antihyperglycemic", "an-tee-high-per-gly-SEE-mik", "A drug that lowers high blood sugar.", "lowering high blood sugar", "pa", "Pharmacology_and_Treatment", []],
["antihypoglycemic", "an-tee-high-poh-gly-SEE-mik", "An agent that raises low blood sugar.", "raising low blood sugar", "pa", "Pharmacology_and_Treatment", []],
["antithyroid agents", "an-tee-THIGH-royd AY-jents", "Drugs that block thyroid hormone production in hyperthyroidism, such as methimazole and propylthiouracil.", "antithyroid drugs", "th", "Pharmacology_and_Treatment", []],
["aquaretics", "ak-wah-RET-iks", "Drugs that increase water excretion without losing sodium, used to treat hyponatremia (aqua = water).", "drugs that remove water but keep sodium", "dx", "Pharmacology_and_Treatment", []],
["basal metabolic rate", "BAY-sal met-ah-BOL-ik RAYT", "The minimum rate of metabolism needed to support body functions at rest; set mainly by thyroid hormone.", "basal metabolism", "th", "Anatomy_and_Physiology", ["BMR"]],
["beta cells", "BAY-tah SELZ", "Islet cells that produce insulin.", "islet cells that make insulin", "pa", "Anatomy_and_Physiology", []],
["blood serum test", "BLUD SEER-um TEST", "Blood test measuring hormones, electrolytes, calcium and glucose to evaluate endocrine glands.", "lab measurement on the fluid part of blood", "dx", "Laboratory_and_Diagnostics", []],
["blood sugar", "BLUD SHUG-ar", "The level of glucose in the blood; blood glucose.", "amount of glucose circulating in the blood", "pa", "Laboratory_and_Diagnostics", ["BS"]],
["bolus", "BOH-lus", "A single large dose of a drug, such as a mealtime insulin dose.", "single concentrated dose", "pa", "Pharmacology_and_Treatment", []],
["buffalo hump", "BUF-ah-loh HUMP", "A fat deposit on the upper back seen in Cushing syndrome.", "fat pad between the shoulders in excess cortisol", "ad", "Pathology_and_Disorders", []],
["cachexia", "kah-KEK-see-ah", "Severe wasting, malnutrition and emaciation, seen in some pituitary diseases.", "severe wasting", "hp", "Pathology_and_Disorders", []],
["calcitonin", "kal-sih-TOH-nin", "Thyroid hormone that lowers blood calcium by moving calcium into bone.", "thyroid hormone that lowers blood calcium", "th", "Anatomy_and_Physiology", ["CT"]],
["calcium", "KAL-see-um", "Mineral needed for bones, muscles and nerves; its blood level is set by PTH and calcitonin.", "mineral for bones, nerves and muscles", "th", "Anatomy_and_Physiology", []],
["catecholamines", "kat-eh-KOH-lah-meenz", "Adrenal medulla hormones (epinephrine and norepinephrine) released in response to stress.", "adrenaline-type hormones of the adrenal medulla", "ad", "Anatomy_and_Physiology", []],
["chemical thyroidectomy", "KEM-ih-kal thigh-royd-EK-toh-mee", "Destroying thyroid cells with a large dose of radioactive iodine instead of surgery.", "destroying the thyroid with radioactive iodine", "th", "Pharmacology_and_Treatment", []],
["circadian rhythm", "ser-KAY-dee-an RITH-um", "The 24-hour body clock that governs wakefulness and sleep.", "daily body rhythm", "dx", "Anatomy_and_Physiology", []],
["colloid", "KOL-oyd", "The jellylike fluid in the tiny sacs (follicles) of the thyroid where thyroid hormones are stored.", "gel inside thyroid follicles", "th", "Anatomy_and_Physiology", []],
["computed tomography", "kom-PYOO-ted toh-MOG-rah-fee", "Cross-sectional X-ray imaging of the pituitary, adrenals and other organs; CT or CAT scan.", "CT scan", "dx", "Laboratory_and_Diagnostics", []],
["congenital", "kon-JEN-ih-tal", "Existing at birth.", "present at birth", "lx", "Pathology_and_Disorders", []],
["congenital adrenal hyperplasia", "kon-JEN-ih-tal ah-DREE-nal high-per-PLAY-zhah", "Inherited enzyme defect that lowers cortisol and raises androgens, causing virilization in girls and early puberty in boys.", "inborn enlargement of the adrenal cortex from an enzyme defect", "ad", "Pathology_and_Disorders", ["CAH"]],
["congenital hypothyroidism", "kon-JEN-ih-tal high-poh-THIGH-royd-izm", "Lack of thyroid hormone from birth that arrests physical and mental growth; formerly called cretinism.", "underactive thyroid present from birth", "th", "Pathology_and_Disorders", []],
["Conn syndrome", "KON SIN-drohm", "Hyperaldosteronism caused by an adrenal tumor.", "excess aldosterone from an adrenal tumour", "ad", "Pathology_and_Disorders", []],
["convulsions", "kon-VUL-shunz", "Involuntary muscle contractions; a sign of disorders of calcium metabolism.", "seizure", "th", "Pathology_and_Disorders", []],
["corpus luteum", "KOR-pus LOO-tee-um", "The yellow body formed from a ruptured ovarian follicle; it secretes progesterone.", "ovarian structure that makes progesterone after ovulation", "dx", "Anatomy_and_Physiology", []],
["corticosteroids", "kor-tih-koh-STER-oydz", "Steroid hormones of the adrenal cortex: glucocorticoids, mineralocorticoids and sex hormones; also used as anti-inflammatory drugs.", "anti-inflammatory steroid drugs", "ad", "Anatomy_and_Physiology", []],
["cortisol", "KOR-tih-sol", "The main glucocorticoid; it helps the body cope with stress, raises blood glucose and inhibits inflammation; hydrocortisone.", "main adrenal stress hormone", "ad", "Anatomy_and_Physiology", []],
["craniopharyngioma", "kray-nee-oh-fah-rin-jee-OH-mah", "A benign tumor near the pituitary gland (crani/o = skull, pharyng/o = pharynx, -oma = tumor).", "tumour near the pituitary from embryonic tissue", "hp", "Pathology_and_Disorders", []],
["cretinism", "KREE-tin-izm", "Old term for congenital hypothyroidism.", "stunted growth from infant hypothyroidism (old name)", "th", "Pathology_and_Disorders", []],
["Cushing disease", "KUSH-ing dih-ZEEZ", "Cushing syndrome caused by excess ACTH from a pituitary tumor.", "excess cortisol from a pituitary tumour", "ad", "Pathology_and_Disorders", []],
["Cushing syndrome", "KUSH-ing SIN-drohm", "Condition caused by excess cortisol: moon face, buffalo hump, truncal obesity, purple striae, hirsutism and hypertension.", "signs of long-term excess cortisol from any cause", "ad", "Pathology_and_Disorders", []],
["diabetes insipidus", "dye-ah-BEE-teez in-SIP-ih-dus", "Disorder caused by insufficient ADH, producing large amounts of very dilute urine and excessive thirst (insipidus = tasteless).", "large volumes of dilute urine from lack of ADH", "hp", "Pathology_and_Disorders", ["DI"]],
["diabetes mellitus", "dye-ah-BEE-teez MEL-ih-tus", "Disorder of glucose metabolism from lack of insulin or resistance to it, causing hyperglycemia and glycosuria (mellitus = honey-sweet).", "high blood sugar from lack of insulin or its action", "pa", "Pathology_and_Disorders", ["DM"]],
["diabetic coma", "dye-ah-BET-ik KOH-mah", "Unconsciousness caused by severe uncontrolled diabetes.", "unconsciousness from very high blood sugar", "pa", "Pathology_and_Disorders", []],
["diabetic nephropathy", "dye-ah-BET-ik neh-FROP-ah-thee", "Kidney damage from diabetes that may lead to kidney failure and dialysis.", "kidney damage from diabetes", "pa", "Pathology_and_Disorders", []],
["diabetic neuropathy", "dye-ah-BET-ik noo-ROP-ah-thee", "Nerve damage from diabetes causing loss of sensation, numbness or tingling.", "diabetic nerve damage", "pa", "Pathology_and_Disorders", []],
["diabetic retinopathy", "dye-ah-BET-ik ret-ih-NOP-ah-thee", "Damage to the blood vessels of the retina from diabetes, which may lead to blindness.", "diabetic retina damage", "pa", "Pathology_and_Disorders", []],
["diaphoresis", "dye-ah-foh-REE-sis", "Profuse sweating; often seen in hypoglycemia.", "profuse sweating", "pa", "Pathology_and_Disorders", []],
["ductless gland", "DUKT-less GLAND", "Another name for an endocrine gland; it has no duct and secretes directly into the blood.", "gland that secretes straight into the blood", "lx", "Anatomy_and_Physiology", []],
["dwarfism", "DWORF-izm", "Abnormally short stature, for example from lack of growth hormone in childhood.", "short stature", "hp", "Pathology_and_Disorders", []],
["edema", "eh-DEE-mah", "Excess fluid in body tissues causing swelling.", "fluid swelling of tissue", "lx", "Pathology_and_Disorders", []],
["electrolytes", "ee-LEK-troh-lyts", "Mineral salts such as sodium, potassium and calcium in blood and tissues that conduct electricity.", "charged minerals in body fluids, such as Na and K", "ad", "Anatomy_and_Physiology", []],
["emaciation", "ee-may-see-AY-shun", "Excessive leanness; a wasted condition.", "extreme thinness", "pa", "Pathology_and_Disorders", []],
["endocrine", "EN-doh-krin", "Pertaining to a ductless gland that secretes hormones directly into the bloodstream (endo- = within, crin/o = to secrete).", "secreting into the blood (endocrine)", "lx", "Anatomy_and_Physiology", []],
["endocrine gland", "EN-doh-krin GLAND", "A ductless gland that releases its hormones directly into the blood.", "gland secreting into the blood", "lx", "Anatomy_and_Physiology", []],
["endocrinologist", "en-doh-krih-NOL-oh-jist", "A physician who specializes in diagnosing and treating endocrine disorders.", "hormone specialist", "lx", "Anatomy_and_Physiology", []],
["endocrinology", "en-doh-krih-NOL-oh-jee", "The branch of medicine dealing with the endocrine glands and hormone disorders.", "study of hormone glands", "lx", "Anatomy_and_Physiology", []],
["endocrinopathy", "en-doh-krih-NOP-ah-thee", "Any disease of the endocrine glands.", "endocrine disease", "lx", "Pathology_and_Disorders", []],
["epinephrine", "ep-ih-NEF-rin", "Adrenal medulla hormone that raises heart rate, blood pressure, breathing and blood glucose in stress; adrenaline (epi- = upon, nephr/o = kidney).", "American name of the fight-or-flight hormone", "ad", "Anatomy_and_Physiology", []],
["estradiol", "es-trah-DYE-ol", "The most potent estrogen; measured in blood to evaluate ovarian function.", "main and most potent oestrogen", "dx", "Laboratory_and_Diagnostics", []],
["estrogen", "ES-troh-jen", "Female sex hormone that develops female characteristics and regulates the menstrual cycle (estr/o = female).", "female sex hormone from the ovaries", "dx", "Anatomy_and_Physiology", []],
["estrogen receptor test", "ES-troh-jen ree-SEP-tor TEST", "Test of a cancer's response to estrogen that shows whether hormonal treatment will help.", "estrogen receptor assay", "dx", "Laboratory_and_Diagnostics", []],
["euthyroid", "yoo-THIGH-royd", "Having a normally functioning thyroid gland (eu- = good, normal).", "normal thyroid function", "th", "Anatomy_and_Physiology", []],
["exocrine gland", "EK-soh-krin GLAND", "A gland that delivers its secretions through a duct onto the skin or into a body cavity, such as sweat and salivary glands.", "gland secreting through a duct", "lx", "Anatomy_and_Physiology", []],
["exophthalmic goiter", "ek-sof-THAL-mik GOY-ter", "Goiter with protruding eyeballs; Graves disease.", "exophthalmic goitre", "th", "Pathology_and_Disorders", []],
["exophthalmos", "ek-sof-THAL-mos", "Abnormal protrusion of the eyeballs caused by swelling behind the eyes, as in Graves disease (ex- = outward, ophthalm/o = eye).", "bulging eyes", "th", "Pathology_and_Disorders", []],
["fasting blood sugar", "FAS-ting BLUD SHUG-ar", "Blood glucose measured after fasting at least 8 hours; 126 mg/dL or higher suggests diabetes.", "glucose measured after 8 hours without food", "pa", "Laboratory_and_Diagnostics", ["FBS", "FBG", "FPG"]],
["fight-or-flight response", "FYT or FLYT ree-SPONS", "The body's rapid reaction to danger driven by epinephrine and norepinephrine.", "body’s alarm reaction to danger", "ad", "Anatomy_and_Physiology", []],
["follicle-stimulating hormone", "FOL-ih-kl STIM-yoo-lay-ting HOR-mohn", "Gonadotropin that stimulates growth of ovarian follicles (eggs) in females and sperm production in males.", "pituitary hormone that ripens eggs and sperm", "hp", "Anatomy_and_Physiology", ["FSH"]],
["free thyroxine index", "FREE thigh-ROK-sin IN-deks", "A value calculated from T4 and T3 uptake to diagnose thyroid dysfunction.", "estimate of unbound T4", "th", "Laboratory_and_Diagnostics", ["FTI", "T7"]],
["galactorrhea", "gah-lak-toh-REE-ah", "Secretion of milk not related to nursing, for example from excess prolactin (galact/o = milk, -rrhea = flow).", "abnormal milk secretion", "hp", "Pathology_and_Disorders", []],
["gametes", "GAM-eets", "Reproductive sex cells: ova in females and sperm in males.", "sex cells: egg and sperm", "dx", "Anatomy_and_Physiology", []],
["gestational diabetes mellitus", "jes-TAY-shun-al dye-ah-BEE-teez MEL-ih-tus", "Glucose intolerance that first appears during pregnancy and usually disappears after delivery.", "high blood sugar first appearing in pregnancy", "pa", "Pathology_and_Disorders", ["GDM"]],
["gigantism", "JYE-gan-tizm", "Abnormal overgrowth of the whole body caused by excess growth hormone before puberty; also giantism.", "excessive height from childhood GH excess", "hp", "Pathology_and_Disorders", []],
["gland", "GLAND", "An organized group of cells that functions as a secretory or excretory organ (Latin glans, acorn).", "organ that makes and releases substances", "lx", "Anatomy_and_Physiology", []],
["glucagon", "GLOO-kah-gon", "Alpha-cell hormone that makes the liver release glucose, raising blood glucose.", "pancreatic hormone that raises blood sugar", "pa", "Anatomy_and_Physiology", []],
["glucocorticoids", "gloo-koh-KOR-tih-koydz", "Adrenal cortex hormones, mainly cortisol, that regulate glucose metabolism and reduce inflammation.", "adrenal hormones such as cortisol that raise sugar", "ad", "Anatomy_and_Physiology", []],
["glucogenesis", "gloo-koh-JEN-eh-sis", "Production of glucose.", "glucose production", "pa", "Anatomy_and_Physiology", []],
["glucometer", "gloo-KOM-eh-ter", "A home device for measuring blood glucose from a finger stick.", "blood glucose meter", "pa", "Laboratory_and_Diagnostics", []],
["gluconeogenesis", "gloo-koh-nee-oh-JEN-eh-sis", "Making new glucose from non-carbohydrate sources such as amino acids and fat.", "making new glucose", "pa", "Anatomy_and_Physiology", []],
["glucose", "GLOO-kohs", "A simple sugar; the main fuel of body cells (Greek gleukos = sweetness).", "the body’s main sugar fuel", "pa", "Anatomy_and_Physiology", []],
["glucose tolerance test", "GLOO-kohs TOL-er-ans TEST", "Blood glucose measured at intervals after drinking a glucose load; 200 mg/dL or higher at 2 hours indicates diabetes.", "sugar drink then timed blood tests", "pa", "Laboratory_and_Diagnostics", ["GTT", "OGTT"]],
["glucosuria", "gloo-koh-SOO-ree-ah", "Glucose in the urine; glycosuria.", "glucose in the urine", "pa", "Pathology_and_Disorders", []],
["glycated hemoglobin", "GLY-kay-ted HEE-moh-gloh-bin", "Test of glucose bound to hemoglobin that reflects average blood glucose over the previous 2 to 3 months; A1c.", "glycated haemoglobin (A1c)", "pa", "Laboratory_and_Diagnostics", ["HbA1c", "A1c"]],
["glycogen", "GLY-koh-jen", "The storage form of glucose in the liver and muscles.", "stored form of glucose", "pa", "Anatomy_and_Physiology", []],
["glycogenesis", "gly-koh-JEN-eh-sis", "Formation of glycogen from glucose, promoted by insulin.", "forming glycogen", "pa", "Anatomy_and_Physiology", []],
["glycogenolysis", "gly-koh-jeh-NOL-ih-sis", "Breakdown of glycogen to form glucose, promoted by glucagon.", "breakdown of glycogen", "pa", "Anatomy_and_Physiology", []],
["glycolysis", "gly-KOL-ih-sis", "Breakdown of sugar (glucose) to release energy.", "breakdown of glucose", "pa", "Anatomy_and_Physiology", []],
["glycosuria", "gly-koh-SOO-ree-ah", "Glucose in the urine.", "sugar in the urine", "pa", "Pathology_and_Disorders", []],
["goiter", "GOY-ter", "Enlargement of the thyroid gland, seen as swelling in the front of the neck.", "goitre", "th", "Pathology_and_Disorders", []],
["gonadocorticoids", "goh-nad-oh-KOR-tih-koydz", "Sex hormones (androgens and estrogens) secreted in small amounts by the adrenal cortex.", "sex hormones made by the adrenal cortex", "ad", "Anatomy_and_Physiology", []],
["gonadotropins", "goh-nad-oh-TROH-pinz", "Pituitary hormones (FSH and LH) that stimulate the gonads.", "pituitary hormones that stimulate the ovaries and testes", "hp", "Anatomy_and_Physiology", []],
["gonads", "GOH-nadz", "The sex glands (ovaries and testes) that produce gametes and sex hormones.", "sex glands: ovaries and testes", "dx", "Anatomy_and_Physiology", []],
["Graves disease", "GRAYVZ dih-ZEEZ", "Autoimmune disorder in which antibodies stimulate the thyroid, causing hyperthyroidism, goiter and exophthalmos; diffuse toxic goiter.", "autoimmune overactive thyroid with bulging eyes", "th", "Pathology_and_Disorders", []],
["growth hormone", "GROHTH HOR-mohn", "Anterior pituitary hormone that stimulates growth of bones, muscles and other tissues; somatotropin.", "pituitary hormone for body growth", "hp", "Anatomy_and_Physiology", ["GH", "hGH"]],
["gynecomastia", "gy-neh-koh-MAS-tee-ah", "Development of breast tissue in a male (gynec/o = female, mast/o = breast).", "breast enlargement in males", "ad", "Pathology_and_Disorders", []],
["Hashimoto thyroiditis", "hah-shee-MOH-toh thigh-roy-DYE-tis", "Chronic autoimmune (lymphocytic) thyroiditis; the most common cause of hypothyroidism.", "autoimmune underactive thyroid", "th", "Pathology_and_Disorders", []],
["hirsutism", "HER-soo-tizm", "Excessive hair growth, especially male-pattern hair growth in a female.", "excessive hair growth", "ad", "Pathology_and_Disorders", []],
["homeostasis", "hoh-mee-oh-STAY-sis", "The tendency of the body to keep a stable internal environment regardless of outside changes (home/o = same, -stasis = standing still).", "stable internal balance", "lx", "Anatomy_and_Physiology", []],
["hormone", "HOR-mohn", "A chemical messenger secreted by an endocrine gland into the blood that regulates the activity of target cells (Greek hormon, to set in motion).", "chemical messenger carried in the blood", "lx", "Anatomy_and_Physiology", []],
["hormone replacement therapy", "HOR-mohn ree-PLAYS-ment THER-ah-pee", "Giving natural or synthetic hormones to replace deficient ones, as pills, injections or skin patches.", "giving back a missing hormone", "dx", "Pharmacology_and_Treatment", ["HRT"]],
["human chorionic gonadotropin", "HYOO-man kor-ee-ON-ik goh-nad-oh-TROH-pin", "Placental hormone that keeps the ovary producing estrogen and progesterone in early pregnancy.", "placental hormone detected in pregnancy tests", "dx", "Anatomy_and_Physiology", ["HCG"]],
["human growth hormone therapy", "HYOO-man GROHTH HOR-mohn THER-ah-pee", "Giving growth hormone (somatropin) to children with abnormally short stature.", "injections for short stature from GH lack", "dx", "Pharmacology_and_Treatment", []],
["humoral", "HYOO-mor-al", "Relating to body fluids, especially substances such as hormones carried in the blood.", "relating to body fluids", "lx", "Anatomy_and_Physiology", []],
["hydrocortisone", "high-droh-KOR-tih-zohn", "Cortisol; also a medication.", "medicinal form of cortisol", "ad", "Anatomy_and_Physiology", []],
["hyperadrenalism", "high-per-ah-DREE-nal-izm", "Overactivity of the adrenal glands, usually from a tumor.", "overactive suprarenal glands", "ad", "Pathology_and_Disorders", []],
["hyperaldosteronism", "high-per-al-DOS-ter-ohn-izm", "Excess aldosterone causing sodium retention, potassium loss and hypertension; aldosteronism.", "too much aldosterone", "ad", "Pathology_and_Disorders", []],
["hypercalcemia", "high-per-kal-SEE-mee-ah", "Abnormally high calcium in the blood.", "high blood calcium", "th", "Pathology_and_Disorders", []],
["hyperglycemia", "high-per-gly-SEE-mee-ah", "Abnormally high glucose in the blood; the main sign of diabetes mellitus.", "high blood sugar", "pa", "Pathology_and_Disorders", []],
["hypergonadism", "high-per-GOH-nad-izm", "Excessive secretion of sex hormones by the gonads.", "overactive sex glands", "dx", "Pathology_and_Disorders", []],
["hyperinsulinism", "high-per-IN-suh-lin-izm", "Excess insulin in the blood, causing hypoglycemia.", "excess insulin", "pa", "Pathology_and_Disorders", []],
["hyperkalemia", "high-per-kah-LEE-mee-ah", "Excess potassium in the blood (kal/i = potassium).", "high blood potassium", "ad", "Pathology_and_Disorders", []],
["hypernatremia", "high-per-nah-TREE-mee-ah", "High sodium in the blood.", "high blood sodium", "ad", "Pathology_and_Disorders", []],
["hyperparathyroidism", "high-per-pair-ah-THIGH-royd-izm", "Excessive secretion of PTH, usually from a tumor, causing hypercalcemia, bone loss and kidney stones.", "too much PTH and high calcium", "th", "Pathology_and_Disorders", ["PHPT"]],
["hyperpigmentation", "high-per-pig-men-TAY-shun", "Darkening of the skin, such as the bronze skin of Addison disease.", "darkening of the skin", "ad", "Pathology_and_Disorders", []],
["hyperpituitarism", "high-per-pih-TOO-ih-tah-rizm", "Hypersecretion of one or more pituitary hormones.", "overactive master gland", "hp", "Pathology_and_Disorders", []],
["hyperprolactinemia", "high-per-proh-lak-tih-NEE-mee-ah", "Higher than normal prolactin in the blood, causing milk secretion in women who are not pregnant or nursing.", "high blood prolactin", "hp", "Pathology_and_Disorders", []],
["hypersecretion", "HY-per-seh-KREE-shun", "Excessive hormone production by an endocrine gland; often caused by a tumor.", "oversecretion", "lx", "Pathology_and_Disorders", []],
["hypertension", "high-per-TEN-shun", "High blood pressure.", "high blood pressure", "ad", "Pathology_and_Disorders", ["HTN"]],
["hyperthyroidism", "high-per-THIGH-royd-izm", "Excessive secretion of thyroid hormones; overactive thyroid with weight loss, rapid heartbeat and heat intolerance.", "overactive thyroid", "th", "Pathology_and_Disorders", []],
["hypoadrenalism", "high-poh-ah-DREE-nal-izm", "Underactivity of the adrenal glands; Addison disease.", "underactive suprarenal glands", "ad", "Pathology_and_Disorders", []],
["hypocalcemia", "high-poh-kal-SEE-mee-ah", "Abnormally low calcium in the blood; it may cause tetany.", "low blood calcium", "th", "Pathology_and_Disorders", []],
["hypoglycemia", "high-poh-gly-SEE-mee-ah", "Abnormally low glucose in the blood, causing shakiness, sweating, hunger and confusion.", "low blood sugar", "pa", "Pathology_and_Disorders", []],
["hypoglycemic", "high-poh-gly-SEE-mik", "A drug that lowers blood glucose.", "blood-sugar-lowering", "pa", "Pharmacology_and_Treatment", []],
["hypogonadism", "high-poh-GOH-nad-izm", "Deficient secretion of sex hormones by the gonads.", "underactive sex glands", "dx", "Pathology_and_Disorders", []],
["hypokalemia", "high-poh-kah-LEE-mee-ah", "Low potassium in the blood.", "low blood potassium", "ad", "Pathology_and_Disorders", []],
["hyponatremia", "high-poh-nah-TREE-mee-ah", "Low sodium in the blood (natr/o = sodium).", "low blood sodium", "ad", "Pathology_and_Disorders", []],
["hypoparathyroidism", "high-poh-pair-ah-THIGH-royd-izm", "Deficient PTH secretion causing hypocalcemia and tetany.", "too little PTH and low calcium", "th", "Pathology_and_Disorders", []],
["hypophysectomy", "high-pof-ih-SEK-toh-mee", "Surgical removal of the pituitary gland.", "surgical removal of the pituitary", "hp", "Pharmacology_and_Treatment", []],
["hypophysial", "high-poh-FIZ-ee-al", "Pertaining to the pituitary gland; also spelled hypophyseal.", "relating to the pituitary", "hp", "Anatomy_and_Physiology", []],
["hypophysis", "high-POF-ih-sis", "The pituitary gland (hypo- = below, physis = growing), so named because it develops below the hypothalamus.", "pituitary", "hp", "Anatomy_and_Physiology", []],
["hypophysitis", "high-pof-ih-SY-tis", "Inflammation of the pituitary gland.", "inflammation of the pituitary", "hp", "Pathology_and_Disorders", []],
["hypopituitarism", "high-poh-pih-TOO-ih-tah-rizm", "Hyposecretion of one or more pituitary hormones, often from a tumor or injury.", "underactive master gland", "hp", "Pathology_and_Disorders", []],
["hyposecretion", "HY-poh-seh-KREE-shun", "Deficient hormone production by an endocrine gland; usually treated with hormone replacement.", "undersecretion", "lx", "Pathology_and_Disorders", []],
["hypothalamus", "high-poh-THAL-ah-mus", "Part of the brain below the thalamus that controls the pituitary gland and maintains homeostasis; link between the nervous and endocrine systems.", "brain area above the pituitary that controls it", "hp", "Anatomy_and_Physiology", []],
["hypothyroidism", "high-poh-THIGH-royd-izm", "Deficient secretion of thyroid hormones; underactive thyroid with fatigue, weight gain and cold intolerance.", "underactive thyroid", "th", "Pathology_and_Disorders", []],
["impaired fasting glucose", "im-PAIRD FAS-ting GLOO-kohs", "Fasting blood glucose above normal but below the diabetes range; prediabetes.", "fasting sugar 100 to 125, a prediabetes state", "pa", "Pathology_and_Disorders", ["IFG"]],
["impaired glucose tolerance", "im-PAIRD GLOO-kohs TOL-er-ans", "Blood glucose above normal after a glucose load but below the diabetes range; prediabetes.", "2-hour sugar 140 to 199, a prediabetes state", "pa", "Pathology_and_Disorders", ["IGT"]],
["infundibulum", "in-fun-DIB-yoo-lum", "The stalk that connects the pituitary gland to the hypothalamus.", "pituitary stalk", "hp", "Anatomy_and_Physiology", []],
["inhibiting factor", "in-HIB-ih-ting FAK-tor", "A hypothalamic hormone that prevents the pituitary from secreting one of its hormones.", "hypothalamic signal that stops a pituitary hormone", "hp", "Anatomy_and_Physiology", []],
["insular", "IN-suh-lar", "Pertaining to the pancreatic islets (insul/o = island).", "relating to the pancreatic islets", "pa", "Anatomy_and_Physiology", []],
["insulin", "IN-suh-lin", "Beta-cell hormone that moves glucose into cells and lowers blood glucose; also the main drug for type 1 diabetes.", "pancreatic hormone that lowers blood sugar", "pa", "Anatomy_and_Physiology", []],
["insulin pump", "IN-suh-lin PUMP", "A small device that delivers insulin continuously under the skin, with extra doses before meals.", "small device giving continuous hormone under the skin", "pa", "Pharmacology_and_Treatment", ["CSII"]],
["insulin resistance", "IN-suh-lin ree-ZIS-tans", "Reduced response of body cells to insulin, the starting point of type 2 diabetes.", "cells respond poorly to the sugar-lowering hormone", "pa", "Pathology_and_Disorders", []],
["insulin shock", "IN-suh-lin SHOK", "Severe hypoglycemia from an overdose of insulin: tremor, sweating, rapid heartbeat, hunger and confusion.", "severe hypoglycaemia from too much of the hormone", "pa", "Pathology_and_Disorders", []],
["insulinoma", "in-suh-lin-OH-mah", "Tumor of the islet cells that secretes excess insulin, causing hypoglycemia.", "insulin-secreting tumour", "pa", "Pathology_and_Disorders", []],
["interstitial cell-stimulating hormone", "in-ter-STISH-al SEL STIM-yoo-lay-ting HOR-mohn", "Name for LH in the male; it stimulates testosterone secretion.", "hormone stimulating testicular interstitial cells", "hp", "Anatomy_and_Physiology", ["ICSH"]],
["iodine", "EYE-oh-dine", "A mineral obtained from food and iodized salt that the thyroid needs to make T3 and T4.", "element needed to make thyroid hormones", "th", "Anatomy_and_Physiology", []],
["islet transplantation", "EYE-let trans-plan-TAY-shun", "Transfer of healthy insulin-secreting islet cells into a patient with diabetes.", "islet cell transplant", "pa", "Pharmacology_and_Treatment", []],
["islets of Langerhans", "EYE-lets of LAHNG-er-hahnz", "Clusters of endocrine cells in the pancreas that secrete insulin and glucagon; pancreatic islets.", "hormone-making cell clusters of the pancreas", "pa", "Anatomy_and_Physiology", []],
["isthmus", "IS-mus", "The narrow strip of tissue that connects the right and left lobes of the thyroid.", "narrow band joining the thyroid lobes", "th", "Anatomy_and_Physiology", []],
["ketoacidosis", "kee-toh-ass-ih-DOH-sis", "Acidosis caused by excess ketone bodies in uncontrolled diabetes; a medical emergency; diabetic ketoacidosis.", "acid build-up from fat breakdown without insulin", "pa", "Pathology_and_Disorders", ["DKA"]],
["ketones", "KEE-tohnz", "Acidic waste products (ketone bodies) made when the body burns fat instead of glucose.", "ketone bodies", "pa", "Anatomy_and_Physiology", []],
["ketosis", "kee-TOH-sis", "Accumulation of ketone bodies in the body, as in uncontrolled diabetes or starvation.", "ketone build-up in the body", "pa", "Pathology_and_Disorders", []],
["lactogenic hormone", "lak-toh-JEN-ik HOR-mohn", "Another name for prolactin.", "milk-producing hormone", "hp", "Anatomy_and_Physiology", ["LTH"]],
["laparoscopic adrenalectomy", "lap-ah-roh-SKOP-ik ah-dree-nal-EK-toh-mee", "Removal of an adrenal gland through small abdominal incisions using an endoscope (lapar/o = abdomen).", "keyhole removal of a suprarenal gland", "ad", "Pharmacology_and_Treatment", []],
["levothyroxine", "lee-voh-thigh-ROK-seen", "Synthetic thyroxine used as thyroid replacement in hypothyroidism or after thyroidectomy.", "synthetic T4 tablet", "th", "Pharmacology_and_Treatment", []],
["lobectomy", "loh-BEK-toh-mee", "Removal of a lobe of an organ, such as one lobe of the thyroid.", "removing one lobe", "th", "Pharmacology_and_Treatment", []],
["luteinizing hormone", "LOO-tee-ih-nye-zing HOR-mohn", "Gonadotropin that triggers ovulation and formation of the corpus luteum in females and testosterone secretion in males.", "pituitary hormone that triggers ovulation and testosterone", "hp", "Anatomy_and_Physiology", ["LH"]],
["macrosomia", "mak-roh-SOH-mee-ah", "An abnormally large body, such as a large newborn of a mother with diabetes (macro- = large, somat/o = body).", "large birth weight", "pa", "Pathology_and_Disorders", []],
["magnetic resonance imaging", "mag-NET-ik REZ-oh-nans IM-ah-jing", "Imaging with radio waves and a magnet that detects tumors precisely, for example in the pituitary.", "scan using magnets and radio waves", "dx", "Laboratory_and_Diagnostics", ["MRI"]],
["master gland", "MAS-ter GLAND", "Nickname of the pituitary gland, because its hormones regulate many other endocrine glands.", "nickname of the pituitary", "hp", "Anatomy_and_Physiology", []],
["melanocyte-stimulating hormone", "meh-LAN-oh-site STIM-yoo-lay-ting HOR-mohn", "Pituitary hormone that stimulates melanocytes to make melanin, darkening the skin.", "pituitary hormone that darkens the skin", "hp", "Anatomy_and_Physiology", ["MSH"]],
["melatonin", "mel-ah-TOH-nin", "Pineal hormone, secreted in darkness, that regulates the sleep–wake (circadian) rhythm.", "pineal hormone of sleep and darkness", "dx", "Anatomy_and_Physiology", []],
["metabolic syndrome", "met-ah-BOL-ik SIN-drohm", "Insulin resistance with obesity, high triglycerides, low HDL and hypertension; syndrome X.", "belly fat, high pressure, high sugar and abnormal lipids together", "pa", "Pathology_and_Disorders", []],
["metabolism", "meh-TAB-oh-lizm", "The sum of all chemical and physical processes in living cells that provide energy and build new material.", "all the chemical reactions of the body", "lx", "Anatomy_and_Physiology", []],
["metformin", "met-FOR-min", "Oral antidiabetic (brand Glucophage) that lowers glucose in type 2 diabetes.", "tablet that reduces insulin resistance", "pa", "Pharmacology_and_Treatment", []],
["methimazole", "meth-IM-ah-zohl", "Antithyroid drug (brand Tapazole) that stops the thyroid from making too much hormone.", "drug that blocks thyroid hormone production", "th", "Pharmacology_and_Treatment", []],
["mineralocorticoids", "min-er-al-oh-KOR-tih-koydz", "Adrenal cortex hormones, mainly aldosterone, that regulate sodium, potassium and water balance.", "adrenal hormones such as aldosterone that control salt", "ad", "Anatomy_and_Physiology", []],
["moon face", "MOON FAYS", "A round, full face caused by excess cortisol.", "round, puffy face in excess cortisol", "ad", "Pathology_and_Disorders", []],
["multiple endocrine neoplasia", "MUL-tih-pel EN-doh-krin nee-oh-PLAY-zhah", "A hereditary disorder causing tumors in several endocrine glands.", "inherited tumours of several hormone glands", "dx", "Pathology_and_Disorders", ["MEN"]],
["myxedema", "mik-seh-DEE-mah", "Advanced hypothyroidism in adults with dry, waxy swelling of the face and skin (myx/o = mucus, -edema = swelling).", "myxoedema", "th", "Pathology_and_Disorders", []],
["negative feedback", "NEG-ah-tiv FEED-bak", "A control loop in which a rising hormone level inhibits further secretion of that hormone.", "hormone excess switches off its own production", "lx", "Anatomy_and_Physiology", []],
["neurohormone", "NOO-roh-hor-mohn", "A hormone produced by nerve cells, such as ADH and oxytocin made by the hypothalamus.", "hormone made by nerve cells", "hp", "Anatomy_and_Physiology", []],
["neurohypophysis", "NOO-roh-high-POF-ih-sis", "The posterior lobe of the pituitary gland, which stores and releases ADH and oxytocin made in the hypothalamus.", "back lobe of the pituitary", "hp", "Anatomy_and_Physiology", []],
["noradrenaline", "nor-ah-DREN-ah-lin", "Norepinephrine.", "vessel-tightening partner of adrenaline", "ad", "Anatomy_and_Physiology", []],
["norepinephrine", "nor-ep-ih-NEF-rin", "Adrenal medulla hormone that mainly constricts blood vessels and raises blood pressure; noradrenaline.", "American name of the vessel-tightening partner hormone", "ad", "Anatomy_and_Physiology", []],
["NPH insulin", "NPH IN-suh-lin", "Neutral protamine Hagedorn: an intermediate-acting insulin.", "intermediate-acting cloudy insulin", "pa", "Pharmacology_and_Treatment", ["NPH"]],
["obesity", "oh-BEE-sih-tee", "An abnormal amount of fat in the body.", "excess body fat with BMI of 30 or more", "pa", "Pathology_and_Disorders", []],
["oral hypoglycemic agents", "OR-al high-poh-gly-SEE-mik AY-jents", "Drugs taken by mouth to lower blood glucose in type 2 diabetes, such as metformin and glipizide.", "oral glucose-lowering drugs", "pa", "Pharmacology_and_Treatment", []],
["osteoporosis", "os-tee-oh-poh-ROH-sis", "Loss of bone density; a risk of long-term corticosteroid use and Cushing syndrome.", "porous, brittle bones", "ad", "Pathology_and_Disorders", []],
["ovarian", "oh-VAIR-ee-an", "Pertaining to the ovary.", "relating to the ovary", "dx", "Anatomy_and_Physiology", []],
["ovaries", "OH-vah-reez", "Female gonads in the pelvic cavity that produce ova, estrogen and progesterone.", "female sex glands", "dx", "Anatomy_and_Physiology", []],
["oxytocin", "ok-see-TOH-sin", "Posterior pituitary hormone that stimulates uterine contractions during labor and milk ejection during breastfeeding.", "hormone of labour contractions and milk let-down", "hp", "Anatomy_and_Physiology", ["OXT"]],
["pancreas", "PAN-kree-as", "Organ behind the stomach with digestive (exocrine) and hormonal (endocrine) functions.", "organ behind the stomach with endocrine islets", "pa", "Anatomy_and_Physiology", []],
["pancreatectomy", "pan-kree-ah-TEK-toh-mee", "Surgical removal of all or part of the pancreas.", "surgical removal of the pancreas", "pa", "Pharmacology_and_Treatment", []],
["pancreatic", "pan-kree-AT-ik", "Pertaining to the pancreas.", "relating to the pancreas", "pa", "Anatomy_and_Physiology", []],
["pancreatitis", "pan-kree-ah-TYE-tis", "Inflammation of the pancreas, most often from alcoholism or gallstones.", "inflammation of the pancreas", "pa", "Pathology_and_Disorders", []],
["pancreatotomy", "pan-kree-ah-TOT-oh-mee", "Incision into the pancreas.", "surgical incision into the pancreas", "pa", "Pharmacology_and_Treatment", []],
["panhypopituitarism", "pan-high-poh-pih-TOO-ih-tah-rizm", "Deficiency of all pituitary hormones, affecting the thyroid, adrenal cortex and gonads.", "total pituitary failure", "hp", "Pathology_and_Disorders", []],
["parathormone", "pair-ah-THOR-mohn", "Parathyroid hormone.", "another name for PTH", "th", "Anatomy_and_Physiology", ["PTH"]],
["parathyroid glands", "pair-ah-THIGH-royd GLANDZ", "Four small oval glands on the posterior surface of the thyroid that secrete parathyroid hormone (para- = beside).", "four small glands behind the thyroid", "th", "Anatomy_and_Physiology", []],
["parathyroid hormone", "pair-ah-THIGH-royd HOR-mohn", "Hormone that raises blood calcium by releasing calcium from bone, saving it in the kidney and activating vitamin D.", "hormone that raises blood calcium", "th", "Anatomy_and_Physiology", ["PTH"]],
["parathyroidal", "pair-ah-thigh-ROYD-al", "Pertaining to the parathyroid glands.", "relating to the parathyroids", "th", "Anatomy_and_Physiology", []],
["parathyroidectomy", "pair-ah-thigh-royd-EK-toh-mee", "Surgical removal of one or more parathyroid glands.", "removal of a parathyroid gland", "th", "Pharmacology_and_Treatment", []],
["perioral", "per-ee-OR-al", "Around the mouth; perioral numbness is a sign of low calcium.", "around the mouth", "th", "Anatomy_and_Physiology", []],
["peripheral neuropathy", "per-IF-er-al noo-ROP-ah-thee", "Nerve damage in the hands and lower legs, as a result of diabetes mellitus.", "damage to nerves of the limbs", "pa", "Pathology_and_Disorders", []],
["pheochromocytoma", "fee-oh-kroh-moh-sy-TOH-mah", "Usually benign tumor of the adrenal medulla that secretes excess epinephrine and norepinephrine, causing severe hypertension, headache and sweating (phe/o = dusky).", "adrenal medulla tumour causing attacks of high pressure", "ad", "Pathology_and_Disorders", []],
["pineal gland", "PIN-ee-al GLAND", "A small pine cone–shaped gland deep in the brain that secretes melatonin (pineal = like a pine cone).", "small brain gland that makes melatonin", "dx", "Anatomy_and_Physiology", []],
["pinealectomy", "pin-ee-ah-LEK-toh-mee", "Surgical removal of the pineal gland.", "removal of the pineal gland", "dx", "Pharmacology_and_Treatment", []],
["pituitarism", "pih-TOO-ih-tah-rizm", "Any disorder of pituitary function.", "pituitary dysfunction", "hp", "Pathology_and_Disorders", []],
["pituitary adenoma", "pih-TOO-ih-tair-ee ad-eh-NOH-mah", "A benign glandular tumor of the pituitary, often secreting GH, ACTH or prolactin.", "benign tumour of the master gland", "hp", "Pathology_and_Disorders", []],
["pituitary apoplexy", "pih-TOO-ih-tair-ee AP-oh-plek-see", "Sudden hemorrhage into a pituitary tumor causing severe headache, visual loss and sometimes loss of consciousness.", "sudden bleeding into a pituitary tumour", "hp", "Pathology_and_Disorders", []],
["pituitary dwarfism", "pih-TOO-ih-tair-ee DWORF-izm", "Growth hormone deficiency in childhood producing a very short but normally proportioned person.", "short stature from GH lack", "hp", "Pathology_and_Disorders", []],
["pituitary gland", "pih-TOO-ih-tair-ee GLAND", "A pea-sized gland at the base of the brain that secretes hormones controlling many other glands; the master gland.", "pea-sized master gland under the brain", "hp", "Anatomy_and_Physiology", []],
["polycystic ovary syndrome", "pol-ee-SIS-tik OH-vah-ree SIN-drohm", "Hyperandrogenism in women with absent ovulation, irregular periods, acne, excess hair and metabolic syndrome.", "irregular periods, excess androgen and many follicles", "dx", "Pathology_and_Disorders", ["PCOS"]],
["polydipsia", "pol-ee-DIP-see-ah", "Excessive thirst; a sign of diabetes mellitus or diabetes insipidus.", "excessive thirst", "hp", "Pathology_and_Disorders", []],
["polyphagia", "pol-ee-FAY-jee-ah", "Excessive hunger; a sign of uncontrolled diabetes mellitus.", "excessive hunger", "pa", "Pathology_and_Disorders", []],
["polyuria", "pol-ee-YOO-ree-ah", "Excessive urination; a sign of diabetes mellitus or diabetes insipidus.", "excessive urination", "hp", "Pathology_and_Disorders", []],
["postprandial blood sugar", "post-PRAN-dee-al BLUD SHUG-ar", "Blood glucose measured about 2 hours after a meal (post- = after, -prandial = meal).", "blood sugar after a meal", "pa", "Laboratory_and_Diagnostics", []],
["potassium", "poh-TAS-ee-um", "The main electrolyte inside the cells; excreted by the kidney under aldosterone.", "electrolyte K, vital for heart rhythm", "ad", "Anatomy_and_Physiology", ["K+"]],
["prednisone", "PRED-nih-sohn", "Synthetic corticosteroid with strong anti-inflammatory action; long-term use can cause Cushing-like effects and osteoporosis.", "synthetic cortisol-like drug", "ad", "Pharmacology_and_Treatment", []],
["progesterone", "proh-JES-ter-ohn", "Hormone of the corpus luteum that prepares the uterus for pregnancy and helps maintain it.", "pregnancy-supporting hormone of the corpus luteum", "dx", "Anatomy_and_Physiology", []],
["prolactin", "proh-LAK-tin", "Anterior pituitary hormone that stimulates breast development and milk production (pro- = before, lact/o = milk).", "pituitary hormone that makes milk", "hp", "Anatomy_and_Physiology", ["PRL", "LTH"]],
["prostaglandins", "pros-tah-GLAN-dinz", "Hormone-like substances made by many cells that affect uterine contractions, blood pressure, clotting and inflammation.", "local hormone-like fatty substances", "lx", "Anatomy_and_Physiology", []],
["protein-bound iodine test", "PROH-teen BOWND EYE-oh-dine TEST", "Blood test that measures thyroxine through the iodine bound to blood proteins.", "old blood test of thyroid function", "th", "Laboratory_and_Diagnostics", ["PBI"]],
["radioactive iodine therapy", "ray-dee-oh-AK-tiv EYE-oh-dine THER-ah-pee", "Treatment with radioactive iodine (I-131) to destroy overactive thyroid tissue or a thyroid tumor.", "swallowed radio-iodine that destroys thyroid tissue", "th", "Pharmacology_and_Treatment", ["RAI", "131I"]],
["radioactive iodine uptake", "ray-dee-oh-AK-tiv EYE-oh-dine UP-tayk", "Test that measures how much radioactive iodine the thyroid absorbs from the blood.", "how much radio-iodine the thyroid takes up", "th", "Laboratory_and_Diagnostics", ["RAIU"]],
["radioimmunoassay", "ray-dee-oh-im-yoo-noh-AS-ay", "A method of measuring tiny amounts of hormones in plasma using radioactively labeled hormones and antibodies.", "antibody lab method that measures hormones", "dx", "Laboratory_and_Diagnostics", ["RIA"]],
["receptor", "ree-SEP-tor", "A site on the cell membrane or inside the cell to which a hormone attaches, like a key in a lock.", "molecule on a cell that a hormone binds to", "lx", "Anatomy_and_Physiology", []],
["Recklinghausen disease", "REK-ling-how-zen dih-ZEEZ", "Bone degeneration caused by excess parathyroid hormone.", "bone disease from hyperparathyroidism", "th", "Pathology_and_Disorders", []],
["releasing factor", "ree-LEE-sing FAK-tor", "A hypothalamic hormone that stimulates the pituitary to secrete one of its hormones.", "hypothalamic signal that starts a pituitary hormone", "hp", "Anatomy_and_Physiology", ["RH"]],
["renal calculi", "REE-nal KAL-kyoo-lye", "Kidney stones; a complication of high blood calcium.", "kidney stones", "th", "Pathology_and_Disorders", []],
["renin", "REE-nin", "A hormone secreted by the kidneys that raises blood pressure.", "kidney enzyme that starts the aldosterone chain", "ad", "Anatomy_and_Physiology", []],
["seasonal affective disorder", "SEE-zon-al ah-FEK-tiv dis-OR-der", "A winter mood disorder with sleepiness, depression and overeating, related to melatonin and light.", "winter depression linked to melatonin", "dx", "Pathology_and_Disorders", ["SAD"]],
["sella turcica", "SEL-ah TUR-sih-kah", "The saddle-shaped depression in the sphenoid bone that holds the pituitary gland (\"Turkish saddle\").", "saddle-shaped bony seat of the pituitary", "hp", "Anatomy_and_Physiology", []],
["serum cortisol", "SEER-um KOR-tih-sol", "Cortisol measured in blood or saliva to evaluate adrenal disease.", "blood level of the stress hormone", "ad", "Laboratory_and_Diagnostics", []],
["serum potassium", "SEER-um poh-TAS-ee-um", "Blood potassium level, used to detect adrenal tumors that cause potassium loss.", "blood level of K", "ad", "Laboratory_and_Diagnostics", []],
["Simmonds disease", "SIM-ondz dih-ZEEZ", "Hypofunction of the anterior pituitary (panhypopituitarism), usually after infarction; pituitary cachexia.", "total failure of the pituitary", "hp", "Pathology_and_Disorders", []],
["simple goiter", "SIM-pel GOY-ter", "A nontoxic goiter caused by dietary iodine deficiency.", "simple goitre (iodine deficiency)", "th", "Pathology_and_Disorders", []],
["sodium", "SOH-dee-um", "The main electrolyte outside the cells; kept in the body by aldosterone.", "electrolyte Na that holds water in the body", "ad", "Anatomy_and_Physiology", ["Na+"]],
["somatotropin", "soh-mat-oh-TROH-pin", "Growth hormone (somat/o = body, -tropin = stimulating).", "another name for growth hormone", "hp", "Anatomy_and_Physiology", ["STH"]],
["sphenoid bone", "SFEE-noyd BOHN", "The bone at the base of the skull that houses the pituitary gland.", "butterfly-shaped skull bone", "hp", "Anatomy_and_Physiology", []],
["steroid hormone", "STER-oyd HOR-mohn", "A hormone made from lipids (cholesterol); includes the sex hormones and the adrenal cortex hormones.", "hormone built from cholesterol", "lx", "Anatomy_and_Physiology", []],
["steroids", "STER-oydz", "Complex substances made from cholesterol; as drugs they control inflammation but can be abused for muscle growth.", "cortisol-like anti-inflammatory drugs", "dx", "Pharmacology_and_Treatment", []],
["striae", "STRY-ee", "Purple or red stretch marks on the skin, as in Cushing syndrome.", "stretch marks", "ad", "Pathology_and_Disorders", []],
["subcutaneous", "sub-kyoo-TAY-nee-us", "Beneath the skin; insulin is injected into subcutaneous tissue.", "under the skin", "pa", "Pharmacology_and_Treatment", []],
["suprarenal glands", "soo-prah-REE-nal GLANDZ", "Adrenal glands (supra- = above, ren/o = kidney).", "glands above the kidneys", "ad", "Anatomy_and_Physiology", []],
["sympathomimetic", "sim-pah-thoh-mih-MET-ik", "Imitating the action of the sympathetic nervous system, as epinephrine does in stress.", "drug that mimics adrenaline", "ad", "Anatomy_and_Physiology", []],
["syndrome", "SIN-drohm", "A group of signs and symptoms that together present the clinical picture of a disease (syn- = together, -drome = running).", "group of signs that occur together", "lx", "Pathology_and_Disorders", []],
["syndrome of inappropriate ADH", "SIN-drohm of in-ah-PROH-pree-et ADH", "Hypersecretion of antidiuretic hormone causing excessive water retention and low blood sodium.", "excess ADH with water retention and low sodium", "hp", "Pathology_and_Disorders", ["SIADH"]],
["T cells", "TEE SELZ", "Lymphocytes that mature in the thymus and direct immune responses.", "T lymphocytes", "dx", "Anatomy_and_Physiology", []],
["target cell", "TAR-get SEL", "A cell that has receptors for a specific hormone and responds to it.", "cell that has the receptor for a hormone", "lx", "Anatomy_and_Physiology", []],
["target tissue", "TAR-get TISH-oo", "The specific tissue or organ on which a hormone acts; also called target organ.", "tissue a hormone acts on", "lx", "Anatomy_and_Physiology", []],
["testes", "TES-teez", "Male gonads in the scrotum that produce sperm and testosterone; testicles (singular testis).", "male sex glands", "dx", "Anatomy_and_Physiology", []],
["testicular", "tes-TIK-yoo-lar", "Pertaining to the testes.", "relating to the testis", "dx", "Anatomy_and_Physiology", []],
["testosterone", "tes-TOS-ter-ohn", "The main male sex hormone; it develops male characteristics and regulates sperm production.", "main male sex hormone", "dx", "Anatomy_and_Physiology", []],
["tetany", "TET-ah-nee", "Nerve irritability and painful muscle spasms, especially of the wrists and ankles, caused by low blood calcium.", "painful muscle spasms", "th", "Pathology_and_Disorders", []],
["tetraiodothyronine", "teh-trah-eye-oh-doh-THIGH-roh-neen", "Thyroxine; tetra- = four iodine atoms.", "T4, thyroid hormone with four iodines", "th", "Anatomy_and_Physiology", ["T4"]],
["thymectomy", "thigh-MEK-toh-mee", "Surgical removal of the thymus, for example in myasthenia gravis or a thymoma.", "removal of the thymus", "dx", "Pharmacology_and_Treatment", []],
["thymic", "THIGH-mik", "Pertaining to the thymus gland.", "relating to the thymus", "dx", "Anatomy_and_Physiology", []],
["thymitis", "thigh-MY-tis", "Inflammation of the thymus gland.", "inflammation of the thymus", "dx", "Pathology_and_Disorders", []],
["thymoma", "thigh-MOH-mah", "A tumor of the thymus gland.", "tumour of the thymus", "dx", "Pathology_and_Disorders", []],
["thymosin", "THIGH-moh-sin", "Thymus hormone that aids the development of T cells.", "thymus hormone that matures T cells", "dx", "Anatomy_and_Physiology", []],
["thymus gland", "THIGH-mus GLAND", "A gland in the mediastinum behind the sternum that secretes thymosin and helps T cells mature; large in childhood and shrinks with age.", "chest gland that trains T cells", "dx", "Anatomy_and_Physiology", []],
["thyroaplasia", "thigh-roh-ah-PLAY-zee-ah", "Congenital failure of the thyroid to develop, with low thyroid output.", "failure of the thyroid to develop", "th", "Pathology_and_Disorders", []],
["thyroid carcinoma", "THIGH-royd kar-sih-NOH-mah", "Cancer of the thyroid gland.", "thyroid cancer", "th", "Pathology_and_Disorders", []],
["thyroid cartilage", "THIGH-royd KAR-tih-lij", "The large cartilage covering the larynx above the thyroid gland; it forms the Adam's apple.", "shield-shaped cartilage of the larynx", "th", "Anatomy_and_Physiology", []],
["thyroid echography", "THIGH-royd eh-KOG-rah-fee", "Ultrasound of the thyroid that helps tell a solid nodule from a cyst.", "thyroid ultrasound", "th", "Laboratory_and_Diagnostics", []],
["thyroid function test", "THIGH-royd FUNK-shun TEST", "Blood test measuring T3, T4 and TSH to evaluate thyroid function.", "blood tests of TSH, T4 and T3", "th", "Laboratory_and_Diagnostics", ["TFT"]],
["thyroid gland", "THIGH-royd GLAND", "Butterfly-shaped gland in the neck below the larynx that secretes T3, T4 and calcitonin (Greek thyreos = shield).", "butterfly-shaped gland in the neck", "th", "Anatomy_and_Physiology", []],
["thyroid nodule", "THIGH-royd NOD-yool", "A solid or fluid-filled lump within the thyroid; most are benign.", "lump within the thyroid", "th", "Pathology_and_Disorders", []],
["thyroid replacement hormone", "THIGH-royd ree-PLAYS-ment HOR-mohn", "Thyroid hormone given for hypothyroidism or after thyroidectomy.", "tablet that replaces missing T4", "th", "Pharmacology_and_Treatment", []],
["thyroid scan", "THIGH-royd SKAN", "Imaging of the thyroid after giving radioactive iodine, to find nodules or tumors.", "image of the thyroid after radio-iodine", "th", "Laboratory_and_Diagnostics", []],
["thyroid storm", "THIGH-royd STORM", "A sudden, life-threatening flare of thyrotoxicosis in untreated or poorly treated hyperthyroidism; thyroid crisis.", "life-threatening crisis of thyroid overactivity", "th", "Pathology_and_Disorders", []],
["thyroid-stimulating hormone", "THIGH-royd STIM-yoo-lay-ting HOR-mohn", "Anterior pituitary hormone that stimulates the thyroid gland to make T3 and T4; thyrotropin.", "pituitary hormone that drives the thyroid", "hp", "Anatomy_and_Physiology", ["TSH"]],
["thyroidal", "thigh-ROYD-al", "Pertaining to the thyroid gland.", "relating to the thyroid", "th", "Anatomy_and_Physiology", []],
["thyroidectomy", "thigh-royd-EK-toh-mee", "Surgical removal of the thyroid gland.", "removal of the thyroid", "th", "Pharmacology_and_Treatment", []],
["thyroiditis", "thigh-roy-DYE-tis", "Inflammation of the thyroid gland.", "inflammation of the thyroid", "th", "Pathology_and_Disorders", []],
["thyrolytic", "thigh-roh-LIT-ik", "Destroying thyroid tissue.", "destroying thyroid tissue", "th", "Pharmacology_and_Treatment", []],
["thyromegaly", "thigh-roh-MEG-ah-lee", "Enlargement of the thyroid gland.", "enlarged thyroid", "th", "Pathology_and_Disorders", []],
["thyroparathyroidectomy", "thigh-roh-pair-ah-thigh-royd-EK-toh-mee", "Removal of the thyroid and parathyroid glands.", "removal of thyroid and parathyroids", "th", "Pharmacology_and_Treatment", []],
["thyrotherapy", "thigh-roh-THER-ah-pee", "Treatment with thyroid preparations.", "treatment with thyroid preparations", "th", "Pharmacology_and_Treatment", []],
["thyrotomy", "thigh-ROT-oh-mee", "Incision into the thyroid gland (or surgical division of the thyroid cartilage).", "incision into the thyroid", "th", "Pharmacology_and_Treatment", []],
["thyrotoxic", "thigh-roh-TOK-sik", "Having excessive amounts of thyroid hormones (toxic/o = poison).", "poisoned by thyroid hormone", "th", "Pathology_and_Disorders", []],
["thyrotoxicosis", "thigh-roh-tok-sih-KOH-sis", "Condition from marked overproduction of thyroid hormone: rapid heart rate, tremor, sweating, anxiety and weight loss.", "thyroid hormone poisoning", "th", "Pathology_and_Disorders", []],
["thyrotropin", "thigh-ROT-roh-pin", "Thyroid-stimulating hormone.", "another name for TSH", "hp", "Anatomy_and_Physiology", ["TSH"]],
["thyroxine", "thigh-ROK-sin", "The main thyroid hormone, containing four iodine atoms; it increases cell metabolism (also spelled thyroxin).", "main thyroid hormone, T4", "th", "Anatomy_and_Physiology", ["T4"]],
["thyroxine-binding globulin", "thigh-ROK-sin BYN-ding GLOB-yoo-lin", "The main blood protein that carries thyroxine.", "blood protein that carries T4", "th", "Anatomy_and_Physiology", ["TBG"]],
["total calcium", "TOH-tal KAL-see-um", "Blood test of calcium to detect parathyroid and bone disorders.", "bound plus free calcium in blood", "dx", "Laboratory_and_Diagnostics", []],
["toxic goiter", "TOK-sik GOY-ter", "A goiter that secretes excess hormone and causes hyperthyroidism.", "toxic goitre", "th", "Pathology_and_Disorders", []],
["toxicologist", "toks-ih-KOL-oh-jist", "A specialist in poisons and their effects on the body.", "poison specialist", "dx", "Anatomy_and_Physiology", []],
["transsphenoidal hypophysectomy", "trans-sfee-NOY-dal high-pof-ih-SEK-toh-mee", "Minimally invasive removal of a pituitary tumor through the nasal cavity and the sphenoid sinus.", "removal of the pituitary through the nose", "hp", "Pharmacology_and_Treatment", []],
["triiodothyronine", "try-eye-oh-doh-THIGH-roh-neen", "Thyroid hormone with three iodine atoms that regulates metabolism, growth and body temperature.", "T3, active thyroid hormone with three iodines", "th", "Anatomy_and_Physiology", ["T3"]],
["tropic hormone", "TROH-pik HOR-mohn", "A hormone that stimulates another endocrine gland to secrete its own hormones (TSH, ACTH, FSH, LH).", "hormone that stimulates another gland", "hp", "Anatomy_and_Physiology", []],
["type 1 diabetes mellitus", "TYP WUN dye-ah-BEE-teez MEL-ih-tus", "Autoimmune destruction of beta cells with absent insulin; abrupt onset, usually in children; needs daily insulin; insulin-dependent diabetes.", "autoimmune loss of insulin, usually in the young", "pa", "Pathology_and_Disorders", ["T1DM", "IDDM"]],
["type 2 diabetes mellitus", "TYP TOO dye-ah-BEE-teez MEL-ih-tus", "Insulin resistance with relative insulin deficiency; gradual onset, usually in overweight adults; non-insulin-dependent diabetes.", "insulin resistance, usually in adults", "pa", "Pathology_and_Disorders", ["T2DM", "NIDDM"]],
["ulceration", "ul-ser-AY-shun", "Formation of an open, non-healing sore on the skin or a mucous membrane.", "formation of an ulcer", "pa", "Pathology_and_Disorders", []],
["ultrasound", "UL-trah-sownd", "Imaging with sound waves that identifies thyroid, adrenal and pancreatic masses.", "imaging with sound waves", "dx", "Laboratory_and_Diagnostics", []],
["urine calcium", "YOO-rin KAL-see-um", "Calcium measured in urine to evaluate parathyroid disease.", "amount of calcium in a 24-hour urine", "dx", "Laboratory_and_Diagnostics", []],
["urine sugar", "YOO-rin SHUG-ar", "Test for glucose and ketones in the urine.", "urine glucose", "pa", "Laboratory_and_Diagnostics", []],
["uterine inertia", "YOO-ter-in in-ER-shah", "Loss of uterine muscle contraction during labor, as in oxytocin deficiency.", "weak or absent contractions in labour", "hp", "Pathology_and_Disorders", []],
["vasopressin", "vay-soh-PRES-in", "Antidiuretic hormone; it also constricts blood vessels and raises blood pressure.", "another name for ADH", "hp", "Anatomy_and_Physiology", ["ADH"]],
["virilism", "VIR-ih-lizm", "Development of male characteristics (deep voice, facial hair, muscle bulk) in a female or early in a boy, from excess androgens; virilization.", "male features in a woman", "ad", "Pathology_and_Disorders", []]];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* هورمونا — واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها، تجزیه‌گر واژه و مولد سؤال‌ها
 * واژه‌ها از data-terms.js (ساخته‌شده از data/terms.py) می‌آیند؛
 * ریشه‌ها و اختصارها از هشت فصل منبع گردآوری و دستی پالایش شده‌اند تا تکراری و ناهمسان نباشند.
 * دنیاها: lx زبان هورمون‌ها (همه واژه‌ها) • hp هیپوتالاموس و هیپوفیز • th تیروئید و پاراتیروئید • ad فوق‌کلیه • pa پانکراس و دیابت • dx غدد دیگر، تشخیص و درمان • * عمومی */
(function (root) {
  const EA = root.EA = root.EA || {};

  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const ROOTS_RAW = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', "without, lacking", '*'],
    ['ad-', ['ad'], 'toward, near', "near, towards", 'ad'],
    ['anti-', ['anti'], 'against', "against", '*'],
    ['dys-', ['dys'], 'bad, difficult', "bad, difficult", '*'],
    ['endo-', ['endo'], 'within, inner', "within", 'lx'],
    ['epi-', ['epi'], 'upon, above', "upon, above", 'ad'],
    ['eu-', ['eu'], 'good, normal', "good, normal", 'th'],
    ['ex-, exo-', ['exo', 'ex'], 'outside, outward', "out, outside", 'lx'],
    ['hemi-', ['hemi'], 'half', "half", 'th'],
    ['hyper-', ['hyper'], 'excessive, above normal', "excessive, above normal", '*'],
    ['hypo-', ['hypo', 'hyp'], 'below, deficient', "below, less than normal", '*'],
    ['macro-', ['macro'], 'large', "large", 'pa'],
    ['nor-', ['nor'], 'chemical prefix (parent compound)', "chemical prefix", 'ad'],
    ['pan-', ['pan'], 'all', "all", 'hp'],
    ['para-', ['para'], 'beside, near', "beside, near", 'th'],
    ['poly-', ['poly'], 'many, much', "much, many", 'pa'],
    ['post-', ['post'], 'after', "after", 'pa'],
    ['pro-', ['pro'], 'before, for', "before, for", 'dx'],
    ['supra-', ['supra'], 'above', "above", 'ad'],
    ['syn-', ['syn'], 'together', "together", 'lx'],
    ['tetra-', ['tetra'], 'four', "four", 'th'],
    ['trans-', ['trans'], 'across, through', "through", 'hp'],
    ['tri-', ['tri'], 'three', "three", 'th'],
    // ریشه‌ها: کلیات و غدد
    ['aden/o', ['aden'], 'gland', "gland", 'lx'],
    ['crin/o', ['crin'], 'to secrete', "to secrete", 'lx'],
    ['endocrin/o', ['endocrin'], 'endocrine glands', "endocrine glands", 'lx'],
    ['home/o', ['homeo', 'home'], 'same, unchanging', "same, constant", 'lx'],
    ['hypophys/o', ['hypophysi', 'hypophys'], 'pituitary gland (hypophysis)', "pituitary", 'hp'],
    ['pituitar/o, pituit/o', ['pituitar', 'pituit'], 'pituitary gland', "pituitary", 'hp'],
    ['thalam/o', ['thalam'], 'thalamus (inner chamber)', "thalamus", 'hp'],
    ['thyr/o, thyroid/o', ['thyroid', 'thyr'], 'thyroid gland (shield)', "thyroid (shield)", 'th'],
    ['parathyr/o, parathyroid/o', ['parathyroid', 'parathyr'], 'parathyroid glands', "parathyroid", 'th'],
    ['adren/o, adrenal/o', ['adrenal', 'adren'], 'adrenal glands', "adrenal glands", 'ad'],
    ['cortic/o', ['cortic', 'cortis', 'cort'], 'cortex (outer layer, bark)', "cortex (outer layer)", 'ad'],
    ['pancreat/o', ['pancreat'], 'pancreas', "pancreas", 'pa'],
    ['insul/o', ['insulin', 'insul'], 'island (pancreatic islets)', "islet (pancreatic islets)", 'pa'],
    ['thym/o', ['thym'], 'thymus gland', "thymus", 'dx'],
    ['pineal/o', ['pineal', 'pine'], 'pineal gland (pine cone)', "pineal gland", 'dx'],
    ['gonad/o', ['gonad'], 'sex glands (gonads)', "gonads", 'dx'],
    ['ovari/o, oophor/o', ['ovari', 'oophor'], 'ovary', "ovary", 'dx'],
    ['orchi/o, testicul/o', ['testicul', 'orchid', 'orchi'], 'testis', "testis", 'dx'],
    // ریشه‌ها: مواد و املاح
    ['calc/o, calc/i', ['calci', 'calc'], 'calcium', "calcium", 'th'],
    ['iod/o', ['iodo', 'iod'], 'iodine', "Iodine", 'th'],
    ['kal/i', ['kal'], 'potassium', "potassium", 'ad'],
    ['natr/o', ['natr'], 'sodium', "Sodium", 'ad'],
    ['mineral/o', ['mineral'], 'minerals, electrolytes', "minerals, electrolytes", 'ad'],
    ['gluc/o', ['gluc'], 'glucose, sugar', "glucose, sugar", 'pa'],
    ['glyc/o, glycos/o', ['glycos', 'glyc'], 'sugar', "sugar", 'pa'],
    ['glycogen/o', ['glycogen'], 'glycogen (stored sugar)', "glycogen (stored sugar)", 'pa'],
    ['ket/o', ['keto', 'ket'], 'ketone bodies', "ketone bodies", 'pa'],
    ['toxic/o', ['toxic', 'tox'], 'poison', "poison", 'th'],
    // ریشه‌ها: بدن، جنس و نشانه‌ها
    ['acr/o', ['acr'], 'extremities, height', "extremities (hands, feet, face)", 'hp'],
    ['somat/o', ['somat', 'soma'], 'body', "body", 'hp'],
    ['lact/o, galact/o', ['galact', 'lact'], 'milk', "milk", 'hp'],
    ['melan/o', ['melan'], 'black, dark', "black, dark", 'hp'],
    ['lute/o', ['lute'], 'yellow', "yellow", 'hp'],
    ['neur/o', ['neur'], 'nerve', "nerve", 'hp'],
    ['crani/o', ['crani'], 'skull', "skull", 'hp'],
    ['pharyng/o', ['pharyng'], 'pharynx (throat)', "throat (pharynx)", 'hp'],
    ['vas/o', ['vaso', 'vas'], 'vessel', "vessel", 'hp'],
    ['ophthalm/o', ['ophthalm'], 'eye', "eye", 'th'],
    ['myx/o', ['myx'], 'mucus', "mucus", 'th'],
    ['lob/o', ['lob'], 'lobe', "lobe", 'th'],
    ['nephr/o, ren/o', ['nephr', 'ren'], 'kidney', "kidney", 'ad'],
    ['andr/o', ['andr'], 'male', "man, male", 'ad'],
    ['estr/o', ['estr'], 'female', "female", 'dx'],
    ['gynec/o', ['gynec'], 'female, woman', "woman", 'ad'],
    ['mast/o', ['mast'], 'breast', "breast", 'ad'],
    ['hirsut/o', ['hirsut'], 'hairy', "hairy", 'ad'],
    ['viril/o', ['viril'], 'masculine', "Male", 'ad'],
    ['phe/o', ['pheo', 'phe'], 'dusky, brown', "dark, brown", 'ad'],
    ['chrom/o', ['chrom'], 'color', "colour", 'ad'],
    ['lapar/o', ['lapar'], 'abdomen', "abdomen", 'ad'],
    ['retin/o', ['retin'], 'retina', "retina", 'pa'],
    ['cyt/o', ['cyt'], 'cell', "cell", '*'],
    ['carcin/o', ['carcin'], 'cancer', "cancer", '*'],
    ['path/o', ['path'], 'disease', "disease", '*'],
    ['radi/o', ['radi'], 'radiation, ray', "radiation", 'dx'],
    ['immun/o', ['immun'], 'immune, protection', "immune, protection", 'dx'],
    // پسوندها
    ['-al, -ic, -ar, -ary, -an', ['ary', 'eal', 'ial', 'ic', 'al', 'ar', 'an'], 'pertaining to', "pertaining to", '*'],
    ['-crine', ['crine'], 'secreting', "secreting", 'lx'],
    ['-dipsia', ['dipsia'], 'thirst', "thirst", 'hp'],
    ['-drome', ['drome'], 'running', "running (together)", 'lx'],
    ['-ectomy', ['ectomy'], 'excision, surgical removal', "surgical removal", '*'],
    ['-edema', ['edema'], 'swelling', "swelling", 'th'],
    ['-emia', ['emia'], 'blood condition', "blood condition", '*'],
    ['-emic', ['emic'], 'pertaining to a blood condition', "blood condition", 'pa'],
    ['-gen, -genic', ['genic', 'gen'], 'producing; that which produces', "producing", 'lx'],
    ['-genesis', ['genesis'], 'production, formation', "production, formation", 'pa'],
    ['-graphy', ['graphy'], 'process of recording', "process of recording an image", 'dx'],
    ['-ine, -in, -one', ['ine', 'in', 'one'], 'chemical substance (hormone name ending)', "chemical substance (hormone name ending)", 'lx'],
    ['-ism', ['ism'], 'condition, state of', "condition, state", '*'],
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-logist', ['logist'], 'specialist', "specialist", 'lx'],
    ['-logy', ['logy'], 'study of', "study of", 'lx'],
    ['-lysis, -lytic', ['lysis', 'lytic'], 'breakdown, destruction', "breakdown, destruction", 'pa'],
    ['-megaly', ['megaly'], 'enlargement', "enlargement", '*'],
    ['-meter', ['meter'], 'instrument to measure', "measuring instrument", 'pa'],
    ['-oid', ['oids', 'oid'], 'resembling', "resembling", '*'],
    ['-oma', ['oma'], 'tumor', "tumour", '*'],
    ['-osis, -sis', ['osis', 'sis'], 'abnormal condition', "condition (abnormal)", '*'],
    ['-pathy', ['pathy'], 'disease', "disease", '*'],
    ['-phagia', ['phagia'], 'eating, swallowing', "eating", 'pa'],
    ['-plasia', ['plasia'], 'formation, development', "formation, development", 'ad'],
    ['-prandial', ['prandial'], 'pertaining to a meal', "relating to a meal", 'pa'],
    ['-rrhea', ['rrhea'], 'flow, discharge', "flow, discharge", 'hp'],
    ['-scopic, -scopy', ['scopic', 'scopy'], 'visual examination', "viewing (visual examination)", 'ad'],
    ['-stasis', ['stasis'], 'standing still, stable', "staying constant", 'lx'],
    ['-therapy', ['therapy'], 'treatment', "treatment", 'dx'],
    ['-tomy', ['tomy'], 'incision, cutting into', "incision", '*'],
    ['-tropin, -tropic', ['trophin', 'tropin', 'trophic', 'tropic'], 'stimulating (nourishing)', "stimulating (nourishing)", 'hp'],
    ['-uria', ['uria'], 'urine condition', "urine condition", 'pa'],
    ['-y, -ia', ['y', 'ia'], 'condition, process', "condition, process", '*']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    ['A1c, HbA1c', 'glycated hemoglobin (hemoglobin A1c)', "glycated haemoglobin: average sugar over 2 to 3 months", 'pa'],
    ['ACTH', 'adrenocorticotropic hormone', "adrenocorticotropic hormone", 'hp'],
    ['ADA', 'American Diabetes Association', "American Diabetes Association", 'pa'],
    ['ADH', 'antidiuretic hormone (vasopressin)', "pituitary hormone that holds water (vasopressin)", 'hp'],
    ['BMR', 'basal metabolic rate', "basal metabolism", 'th'],
    ['BS', 'blood sugar', "blood sugar", 'pa'],
    ['CAH', 'congenital adrenal hyperplasia', "congenital adrenal hyperplasia", 'ad'],
    ['CSII', 'continuous subcutaneous insulin infusion', "continuous insulin infusion under the skin (pump)", 'pa'],
    ['CT', 'calcitonin', "calcitonin", 'th'],
    ['DI', 'diabetes insipidus', "diabetes insipidus", 'hp'],
    ['DKA', 'diabetic ketoacidosis', "diabetic ketoacidosis", 'pa'],
    ['DM', 'diabetes mellitus', "diabetes mellitus", 'pa'],
    ['FBG', 'fasting blood glucose', "fasting blood sugar", 'pa'],
    ['FBS', 'fasting blood sugar', "fasting blood sugar", 'pa'],
    ['FPG', 'fasting plasma glucose', "fasting plasma glucose", 'pa'],
    ['FSH', 'follicle-stimulating hormone', "follicle-stimulating hormone", 'hp'],
    ['FTI, T7', 'free thyroxine index', "free thyroxine index", 'th'],
    ['GDM', 'gestational diabetes mellitus', "gestational diabetes", 'pa'],
    ['GH, hGH', 'growth hormone (human growth hormone)', "growth hormone", 'hp'],
    ['GTT', 'glucose tolerance test', "glucose tolerance test", 'pa'],
    ['HCG', 'human chorionic gonadotropin', "human chorionic gonadotropin", 'dx'],
    ['HRT', 'hormone replacement therapy', "hormone replacement therapy", 'dx'],
    ['HTN', 'hypertension', "high blood pressure", 'ad'],
    ['131I', 'iodine-131 (radioactive iodine)', "iodine-131 (radioactive iodine)", 'th'],
    ['ICSH', 'interstitial cell-stimulating hormone', "hormone stimulating interstitial cells (LH in men)", 'hp'],
    ['IDDM', 'insulin-dependent diabetes mellitus (type 1)', "insulin-dependent diabetes (type 1)", 'pa'],
    ['IFG', 'impaired fasting glucose', "impaired fasting glucose", 'pa'],
    ['IGT', 'impaired glucose tolerance', "impaired glucose tolerance", 'pa'],
    ['K+', 'potassium', "potassium", 'ad'],
    ['LH', 'luteinizing hormone', "luteinizing hormone", 'hp'],
    ['LTH', 'lactogenic hormone (prolactin)', "milk-producing hormone (prolactin)", 'hp'],
    ['MEN', 'multiple endocrine neoplasia', "multiple endocrine neoplasia", 'dx'],
    ['MRI', 'magnetic resonance imaging', "magnetic resonance imaging", 'dx'],
    ['MSH', 'melanocyte-stimulating hormone', "melanocyte-stimulating hormone", 'hp'],
    ['Na+', 'sodium', "Sodium", 'ad'],
    ['NIDDM', 'non-insulin-dependent diabetes mellitus (type 2)', "non-insulin-dependent diabetes (type 2)", 'pa'],
    ['NPH', 'neutral protamine Hagedorn (insulin)', "intermediate-acting insulin", 'pa'],
    ['OGTT', 'oral glucose tolerance test', "oral glucose tolerance test", 'pa'],
    ['OXT', 'oxytocin', "oxytocin", 'hp'],
    ['PBI', 'protein-bound iodine', "protein-bound iodine", 'th'],
    ['PCOS', 'polycystic ovary syndrome', "polycystic ovary syndrome", 'dx'],
    ['PHPT', 'primary hyperparathyroidism', "primary hyperparathyroidism", 'th'],
    ['PRL', 'prolactin', "prolactin", 'hp'],
    ['PTH', 'parathyroid hormone (parathormone)', "parathyroid hormone (parathormone)", 'th'],
    ['RAI', 'radioactive iodine', "radioactive iodine", 'th'],
    ['RAIU', 'radioactive iodine uptake', "radioactive iodine uptake", 'th'],
    ['RH', 'releasing hormone', "releasing hormone (hypothalamus)", 'hp'],
    ['RIA', 'radioimmunoassay', "radioimmunoassay", 'dx'],
    ['SAD', 'seasonal affective disorder', "seasonal affective disorder", 'dx'],
    ['SIADH', 'syndrome of inappropriate antidiuretic hormone', "syndrome of inappropriate ADH", 'hp'],
    ['STH', 'somatotropic hormone (growth hormone)', "somatotropic hormone (growth hormone)", 'hp'],
    ['T1DM', 'type 1 diabetes mellitus', "type 1 diabetes", 'pa'],
    ['T2DM', 'type 2 diabetes mellitus', "type 2 diabetes", 'pa'],
    ['T3', 'triiodothyronine', "triiodothyronine", 'th'],
    ['T4', 'thyroxine (tetraiodothyronine)', "thyroxine (tetraiodothyronine)", 'th'],
    ['TBG', 'thyroxine-binding globulin', "thyroxine-binding globulin", 'th'],
    ['TFT', 'thyroid function test', "thyroid function test", 'th'],
    ['TSH', 'thyroid-stimulating hormone', "thyroid-stimulating hormone", 'hp'],
    ['TSH-RH', 'thyroid-stimulating hormone–releasing hormone', "TSH-releasing hormone", 'hp'],
    ['WNL', 'within normal limits', "within normal limits", 'dx'],
    ['PMHx', 'past medical history', "past medical history", 'dx'],
    ['ROS', 'review of systems', "review of systems", 'dx']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {
    Anatomy_and_Physiology: "Anatomy and physiology", Pathology_and_Disorders: "Diseases and disorders",
    Laboratory_and_Diagnostics: "Laboratory and diagnosis", Pharmacology_and_Treatment: "Treatment, drugs and surgery"
  };
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], c: r[5], ab: r[6] || [] }));
  /* ---------- دسته‌بندی واژه‌ها ----------
   * دسته اصلی هر واژه در داده آمده (آناتومی، بیماری، آزمایش، درمان)؛ اینجا ریزتر می‌شود:
   * آناتومی ← «غدد و ساختارها» یا «هورمون‌ها و مواد»؛ بیماری ← «بیماری‌ها» یا «نشانه‌ها و یافته‌ها». */
  const CATS = [
    { id: 'body', icon: '🫀', name: "Glands and structures" },
    { id: 'cell', icon: '🧬', name: "Hormones and substances" },
    { id: 'field', icon: '🎓', name: "Specialties and specialists" },
    { id: 'dz', icon: '🦠', name: "Diseases" },
    { id: 'sx', icon: '🌡️', name: "Signs and findings" },
    { id: 'lab', icon: '🧪', name: "Tests and imaging" },
    { id: 'tx', icon: '💊', name: "Treatment, drugs and surgery" }
  ];
  const FIELD = /(logy|logist)$/;
  const HOR = /(hormone|tropin|ine$|in$|one$|oids?$|olone|steroid|factor|glucose|glycogen|ketones|electrolytes|sodium|potassium|calcium|iodine|colloid|prostaglandins|gametes|t cells|renin|gonadotropins|catecholamines)/;
  const SX = /(uria$|dipsia|phagia|emia$|exophthalmos|hirsutism|edema$|moon face|buffalo hump|striae|tetany|convulsions|hyperpigmentation|galactorrhea|gynecomastia|cachexia|anorexia|amenorrhea|diaphoresis|emaciation|obesity|ulceration|macrosomia|virilism|feminization|hypertension|thyromegaly|adrenomegaly)/;
  /* استثناهایی که قاعده‌ها اشتباه می‌گیرند */
  const CAT_FIX = { 'insulin pump': 'tx', 'NPH insulin': 'tx', 'thyroxine-binding globulin': 'cell', 'target cell': 'body', 'beta cells': 'body', 'alpha cells': 'body', 'interstitial cell-stimulating hormone': 'cell', 'insulin': 'cell', 'humoral': 'body', 'master gland': 'body' };
  function classify(t) {
    const n = t.t.toLowerCase();
    if (CAT_FIX[t.t]) return CAT_FIX[t.t];
    if (FIELD.test(n)) return 'field';
    if (t.c === 'Laboratory_and_Diagnostics') return 'lab';
    if (t.c === 'Pharmacology_and_Treatment') return 'tx';
    if (t.c === 'Pathology_and_Disorders') return SX.test(n) ? 'sx' : 'dz';
    return HOR.test(n) ? 'cell' : 'body';
  }
  TERMS.forEach(t => { t.k = classify(t); });
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
        push(j, b.cost + 10, { text: st.s, r: st.r, kind: k });
        // واکه رابط پس از ریشه: hem + o
        if (k === 'root' && j < n && /[oi]/.test(w[j])) push(j + 1, b.cost + 10, { text: st.s + w[j], r: st.r, kind: k });
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
    if (p.r.stems.some(s => s === base) && /[oi]/.test(v)) return base + '/' + v;
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
  const WORLDS = ['lx', 'hp', 'th', 'ad', 'pa', 'dx'];
  /* دنیای lx (زبان هورمون‌ها) از همه واژه‌ها، ریشه‌ها و اختصارها سؤال می‌سازد */
  const rootsOf = w => (w === 'lx' ? ROOTS : ROOTS.filter(r => inW(r, w)));
  WORLDS.forEach(W => {
    const w = W === 'lx' ? null : W;
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
      const pool = ABBR.filter(a => !w || a.w === w), a = rnd(pool);
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
      if (a.full && a.parts.length >= 2 && a.parts.length <= 4 && a.parts.some(p => p.kind === 'root') && !a.parts.some(p => p.r.w === '*' && p.r.stems[0].length <= 2 && p.kind !== 'suffix')) out.push({ t, parts: a.parts });
    });
    return (BUILD_CACHE[w] = out);
  }
  EA.gen = Object.assign(EA.gen || {}, G);
  EA.genIds = w => ['t2f', 'f2t', 'd2t', 'sp', 'r2m', 'm2r', 'wb', 'ab'].map(g => g + ':' + w);

  EA.lex = { ROOTS, ABBR, TERMS, CAT_FA, CATS, classify, term, analyze, partLabel, search, short, norm, buildable, defShort, why };
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* هورمونا — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با الگوی ایمنا (پروژه خون، لنف و ایمنی): زمینه سفید کارت، غدد با گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی زیر آن)،
 * پیکان‌های خاکستری گرد و رنگ هر دنیا برای تأکید. بدن‌ها به سبک «مانکن آناتومی» (سطح صاف و بی‌جزئیات) کشیده شده‌اند.
 * EA.art(کلید) ← رشته SVG؛ EA.ART_KEYS فهرست کلیدهاست (آزمون‌ها بررسی می‌کنند). */
(function (root) {
  const EA = root.EA = root.EA || {};
  let UID = 0;
  const FONT_EN = 'Nunito, Vazirmatn, system-ui, sans-serif', FONT_FA = 'Vazirmatn, Tahoma, sans-serif';
  const INK = '#2b2b2b', MUTED = '#6f7a80', LINE = '#5b6b73';

  /* ---------- پایه ---------- */
  function svg(w, h, body, label, defs) {
    return `<svg class="art" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label || ''}" xmlns="http://www.w3.org/2000/svg"><defs>${defs || ''}</defs><rect width="${w}" height="${h}" fill="#fff"/>${body}</svg>`;
  }
  /** متن انگلیسی */
  const t = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${p.size || 11}" font-weight="${p.w || 700}" fill="${p.fill || INK}" text-anchor="${p.anchor || 'middle'}" direction="ltr" font-family="${FONT_EN}"${p.italic ? ' font-style="italic"' : ''}>${s}</text>`; };
  /** متن فارسی */
  /* در direction=rtl معنای start/end برعکس می‌شود؛ اینجا anchor همیشه «دیداری» است (start = لبه چپ متن) */
  const FLIP = { start: 'end', end: 'start', middle: 'middle' };
  /* در متن فارسی، هر تکه لاتین (با پرانتز و نشانه‌های میانش) با LRI…PDI جدا می‌شود تا جابه‌جا نشود */
  const LRI = s => String(s).replace(/(?<![&#\w])\(?[A-Za-z][A-Za-z0-9\/\-.+–°]*\)?(?:\s*(?:[=+\/→]|\s)\s*\(?[A-Za-z0-9][A-Za-z0-9\/\-.+–°]*\)?)*/g, m => '\u2066' + m + '\u2069');
  const f = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${p.size || 10}" font-weight="${p.w || 600}" fill="${p.fill || MUTED}" text-anchor="${(p.anchor || 'middle')}" direction="ltr" font-family="${FONT_EN}">${LRI(s)}</text>`; };
  /** برچسب دوزبانه */
  const lab = (x, y, en, fa, o) => { const p = o || {}; return t(x, y, en, { size: p.size || 11, fill: p.fill || INK, anchor: p.anchor, w: 800 }) + (fa ? f(x, y + (p.gap || 13), fa, { size: (p.size || 11) - 1.5, anchor: p.anchor === 'start' ? 'start' : p.anchor === 'end' ? 'end' : 'middle', fill: p.faFill }) : ''); };
  const marker = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0 1 L10 5 L0 9 z" fill="${c || LINE}"/></marker>`;
  const arrow = (id, x1, y1, x2, y2, c, w, dash) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c || LINE}" stroke-width="${w || 2}" fill="none" stroke-linecap="round" marker-end="url(#${id})"${dash ? ' stroke-dasharray="4 3"' : ''}/>`;
  const curve = (id, d, c, w, dash) => `<path d="${d}" stroke="${c || LINE}" stroke-width="${w || 2}" fill="none" stroke-linecap="round" marker-end="url(#${id})"${dash ? ' stroke-dasharray="4 3"' : ''}/>`;
  const radial = (id, c1, c2, fx) => `<radialGradient id="${id}" cx="50%" cy="50%" r="55%" fx="${fx || '38%'}" fy="${fx || '34%'}"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></radialGradient>`;
  const linear = (id, c1, c2, vertical) => `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>`;
  const shadow = id => `<filter id="${id}" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="2" stdDeviation="2.2" flood-color="#000" flood-opacity=".16"/></filter>`;
  const pill = (x, y, w, h, fill, stroke) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.min(h / 2, 12)}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="1.5"` : ''}/>`;
  /** دانه‌های پراکنده درون دایره (با بذر ثابت تا هر بار یکسان رسم شود) */
  function dots(cx, cy, r, n, color, size, seed) {
    let s = seed || 7, out = '';
    const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    for (let i = 0; i < n; i++) {
      const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * r;
      out += `<circle cx="${(cx + Math.cos(a) * d).toFixed(1)}" cy="${(cy + Math.sin(a) * d).toFixed(1)}" r="${(size * (0.75 + rnd() * 0.5)).toFixed(2)}" fill="${color}"/>`;
    }
    return out;
  }


  /* ---------- شکل‌های پایه بدن و غدد (سبک مانکن آناتومی: سطح صاف، بی‌جزئیات، سایه نرم) ---------- */
  const SKIN1 = '#eef2f6', SKIN2 = '#cfd8e2', SKIN_LINE = '#aebccb';
  /** بدن مانکن خنثی (سر، گردن، تنه) برای نقشه غدد؛ هیچ جزئیات تناسلی یا سینه ندارد */
  function mannequin(g, sh) {
    return `<g filter="url(#${sh})"><path d="M180 16 c22 0 36 16 36 40 c0 18 -8 32 -20 40 v14 c26 6 50 14 62 30 c8 12 10 30 10 52 v66 c0 14 -6 24 -16 30 l-6 104 h-132 l-6 -104 c-10 -6 -16 -16 -16 -30 v-66 c0 -22 2 -40 10 -52 c12 -16 36 -24 62 -30 v-14 c-12 -8 -20 -22 -20 -40 c0 -24 14 -40 36 -40z" fill="url(#${g})" stroke="${SKIN_LINE}" stroke-width="1.5"/></g>`;
  }
  /** غده تیروئید پروانه‌ای (مرکز cx,cy؛ مقیاس s) */
  function thyroidShape(cx, cy, s, g) {
    return `<path d="M${cx} ${cy + 4 * s} c${-4 * s} ${-2 * s} ${-8 * s} ${-2 * s} ${-12 * s} ${2 * s} c${-6 * s} ${-14 * s} ${-16 * s} ${-16 * s} ${-20 * s} ${-6 * s} c${-4 * s} ${10 * s} ${0} ${22 * s} ${10 * s} ${24 * s} c${6 * s} ${1 * s} ${10 * s} ${-2 * s} ${12 * s} ${-6 * s} c${4 * s} ${3 * s} ${12 * s} ${3 * s} ${16 * s} 0 c${2 * s} ${4 * s} ${6 * s} ${7 * s} ${12 * s} ${6 * s} c${10 * s} ${-2 * s} ${14 * s} ${-14 * s} ${10 * s} ${-24 * s} c${-4 * s} ${-10 * s} ${-14 * s} ${-8 * s} ${-20 * s} ${6 * s} c${-4 * s} ${-4 * s} ${-8 * s} ${-4 * s} ${-12 * s} ${-2 * s}z" fill="url(#${g})" stroke="#b9473d" stroke-width="${1.2 * s}"/>`;
  }
  /** کلیه با کلاهک فوق‌کلیه */
  function kidneyAdrenal(cx, cy, s, gk, ga, flip) {
    const k = flip ? -1 : 1;
    return `<g transform="translate(${cx} ${cy}) scale(${k * s} ${s})"><path d="M-10 -26 c14 -10 30 0 30 26 c0 26 -16 36 -30 26 c-6 -4 -4 -14 2 -18 c6 -4 6 -12 0 -16 c-6 -4 -8 -14 -2 -18z" fill="url(#${gk})" stroke="#8d3a33" stroke-width="1.4"/><path d="M-12 -24 c2 -14 14 -20 26 -16 c6 2 10 8 8 14 c-12 -6 -24 -4 -34 2z" fill="url(#${ga})" stroke="#c98a12" stroke-width="1.2"/></g>`;
  }

  const A = {};

  /* ================= دنیای پایه: زبان هورمون‌ها ================= */
  /* آناتومی یک واژه: hyper + thyroid + ism */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 128, fa, { size: 9.5, fill: c })}`;
    return svg(360, 190, `${f(180, 22, "One word = prefix + root + suffix", { size: 11, fill: INK, w: 700 })}
      ${part(10, 74, 'hyper', '#1272a3', '#ddf1fb')}${part(90, 94, 'thyroid', '#7a3fd1', '#efe6fb')}${part(190, 56, 'ism', '#3f8a05', '#e7f9d8')}
      ${br(10, 84, 'prefix', "prefix: excessive", '#1272a3')}${br(90, 184, 'root', "root: thyroid", '#7a3fd1')}${br(190, 246, 'suffix', "suffix: condition", '#3f8a05')}
      <rect x="258" y="40" width="94" height="40" rx="10" fill="#f8f6f5"/>${f(305, 58, "condition of", { size: 10.5, fill: '#3f8a05', w: 800 })}${f(305, 74, "excessive thyroid activity", { size: 10.5, fill: INK, w: 800 })}
      <path d="M232 150 C170 176 100 176 46 150" stroke="#7a3fd1" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M50 146 l-6 4 l7 3" stroke="#7a3fd1" stroke-width="2" fill="none"/>
      ${f(140, 184, "Read the meaning from the end: suffix → prefix → root", { size: 10, fill: '#7a3fd1', w: 700 })}`, "The anatomy of a medical word");
  };

  /* غده برون‌ریز و درون‌ریز */
  A['endo-exo'] = () => {
    const a = 'm' + (++UID), g1 = 'g' + (++UID), g2 = 'g' + (++UID), sh = 'g' + (++UID);
    return svg(360, 220, `
      <rect x="10" y="10" width="164" height="200" rx="14" fill="#f4f9ff"/><rect x="186" y="10" width="164" height="200" rx="14" fill="#fbf4ff"/>
      ${lab(92, 32, 'exocrine gland', "Exocrine gland: with a duct", { size: 12, fill: '#1272a3' })}
      <rect x="22" y="58" width="140" height="16" rx="4" fill="#f3d6c4"/>${f(92, 70, "skin surface", { size: 9, fill: '#8a5a3a' })}
      <path d="M92 74 v54" stroke="#6aa9d8" stroke-width="7" stroke-linecap="round"/>
      <g filter="url(#${sh})"><circle cx="92" cy="148" r="26" fill="url(#${g1})" stroke="#4f8fc0" stroke-width="1.5"/></g>${dots(92, 148, 18, 14, '#ffffff', 2.2, 4)}
      <path d="M92 96 l0 -18" stroke="#1272a3" stroke-width="2" marker-end="url(#${a})"/>
      ${f(92, 192, "secretion out through a duct", { size: 10, fill: '#1272a3', w: 700 })}${f(92, 204, "like sweat and salivary glands", { size: 9 })}
      ${lab(268, 32, 'endocrine gland', "Endocrine gland: no duct", { size: 12, fill: '#7a3fd1' })}
      <path d="M200 70 C240 62 300 62 340 70" stroke="#d64a4a" stroke-width="16" fill="none" stroke-linecap="round" opacity=".85"/>${f(318, 94, "blood capillary", { size: 9, fill: '#b23a3a' })}
      <g filter="url(#${sh})"><circle cx="268" cy="148" r="26" fill="url(#${g2})" stroke="#8b5bd6" stroke-width="1.5"/></g>
      ${[[252, 126], [268, 116], [284, 126]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#ffb000" stroke="#c98200"/>`).join('')}
      <path d="M268 112 L268 82" stroke="#7a3fd1" stroke-width="2" stroke-dasharray="3 3" marker-end="url(#${a})"/>
      ${f(268, 192, "the hormone goes straight into the blood", { size: 10, fill: '#7a3fd1', w: 700 })}${f(268, 204, "endo- inside + crin/o secrete", { size: 9 })}`,
      "Exocrine and endocrine glands", `${marker(a)}${radial(g1, '#d9ecfb', '#8fbde3')}${radial(g2, '#efe4fd', '#b996ec')}${shadow(sh)}`);
  };

  /* نقشه غدد درون‌ریز روی مانکن */
  A['body-map'] = () => {
    const g = 'g' + (++UID), sh = 'g' + (++UID), gt = 'g' + (++UID), gk = 'g' + (++UID), ga = 'g' + (++UID), gp = 'g' + (++UID);
    const L = (x1, y1, x2, y2, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c || '#8a97a3'}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.2" fill="${c || '#8a97a3'}"/>`;
    return svg(360, 378, `${mannequin(g, sh)}
      <ellipse cx="180" cy="48" rx="24" ry="20" fill="#f6eefc" stroke="#d4c2ef"/>
      <ellipse cx="176" cy="56" rx="7" ry="5" fill="#b48ce8"/><circle cx="178" cy="68" r="5.5" fill="#8e44d9" stroke="#fff" stroke-width="1"/><ellipse cx="192" cy="50" rx="4.5" ry="3.5" fill="#6c7bd9"/>
      ${thyroidShape(180, 116, 0.8, gt)}
      <circle cx="170" cy="118" r="2.6" fill="#f2c94c" stroke="#b58a00"/><circle cx="190" cy="118" r="2.6" fill="#f2c94c" stroke="#b58a00"/>
      <path d="M168 138 c4 -6 20 -6 24 0 c6 12 2 30 -12 34 c-14 -4 -18 -22 -12 -34z" fill="#f4b6a0" stroke="#c97b62" stroke-width="1.2"/>
      ${kidneyAdrenal(146, 222, 0.75, gk, ga, true)}${kidneyAdrenal(214, 222, 0.75, gk, ga, false)}
      <path d="M150 204 c18 -10 50 -12 70 -4 c6 3 4 10 -2 10 c-20 -2 -40 4 -58 6 c-8 1 -14 -8 -10 -12z" fill="url(#${gp})" stroke="#c9845a" stroke-width="1.2"/>
      <ellipse cx="160" cy="292" rx="9" ry="6" fill="#f3a6c3" stroke="#c46b8f"/><ellipse cx="200" cy="292" rx="9" ry="6" fill="#f3a6c3" stroke="#c46b8f"/>
      ${L(176, 56, 96, 30)}${lab(56, 26, 'hypothalamus', "hypothalamus", { size: 10 })}
      ${L(178, 68, 96, 66)}${lab(56, 64, 'pituitary', "pituitary", { size: 10 })}
      ${L(192, 50, 266, 34)}${lab(306, 30, 'pineal', "pineal gland", { size: 10 })}
      ${L(196, 112, 266, 92)}${lab(306, 88, 'thyroid', "thyroid", { size: 10 })}
      ${L(190, 118, 266, 128)}${lab(306, 124, 'parathyroids', "parathyroids (behind the thyroid)", { size: 10 })}
      ${L(168, 150, 96, 128)}${lab(56, 124, 'thymus', "thymus", { size: 10 })}
      ${L(212, 206, 266, 182)}${lab(306, 178, 'pancreas', "pancreas (islets)", { size: 10 })}
      ${L(150, 206, 96, 190)}${lab(56, 186, 'adrenal glands', "adrenals", { size: 10 })}
      ${L(146, 232, 96, 248, '#b5524a')}${lab(56, 244, 'kidney', "kidney (for orientation)", { size: 9.5, fill: MUTED })}
      ${L(200, 292, 266, 280)}${lab(306, 276, 'gonads', "gonads: ovary or testis", { size: 10 })}
      ${f(180, 370, "Anatomy mannequin: where the endocrine glands sit in the body", { size: 10 })}`, "map of the endocrine glands",
      `${linear(g, SKIN1, SKIN2, true)}${shadow(sh)}${radial(gt, '#f6a89c', '#d65f52')}${radial(gk, '#d87a70', '#a8473f')}${linear(ga, '#ffd97a', '#f0a92c', true)}${linear(gp, '#ffd2b5', '#f1a578', true)}`);
  };

  /* قفل و کلید: هورمون و گیرنده */
  A['lock-key'] = () => {
    const g = 'g' + (++UID), sh = 'g' + (++UID), a = 'm' + (++UID);
    return svg(360, 222, `
      <path d="M14 40 C60 34 100 34 146 40" stroke="#d64a4a" stroke-width="18" fill="none" stroke-linecap="round" opacity=".8"/>${f(80, 70, "bloodstream", { size: 9.5, fill: '#b23a3a' })}
      ${[[40, 40, '#ffb000'], [80, 38, '#2bb3a3'], [118, 40, '#ffb000']].map(p => `<rect x="${p[0] - 6}" y="${p[1] - 6}" width="12" height="12" rx="3" fill="${p[2]}" stroke="#fff"/>`).join('')}
      <path d="M126 52 C170 70 190 90 214 108" stroke="${LINE}" stroke-width="2" fill="none" marker-end="url(#${a})" stroke-dasharray="4 3"/>
      <g filter="url(#${sh})"><ellipse cx="270" cy="128" rx="78" ry="58" fill="url(#${g})" stroke="#8b5bd6" stroke-width="1.5"/></g>
      <ellipse cx="282" cy="140" rx="22" ry="18" fill="#b28ae6" opacity=".6"/>${f(282, 144, "cell’s control centre", { size: 9, fill: '#fff', w: 800 })}
      <path d="M208 92 h16 v-10 h16 v10 h0" stroke="#7a3fd1" stroke-width="5" fill="none" stroke-linejoin="round"/>
      <rect x="218" y="70" width="12" height="12" rx="3" fill="#ffb000" stroke="#c98200"/>
      <path d="M318 86 h14 l0 10 h-14z" fill="none" stroke="#7a3fd1" stroke-width="5"/>
      <rect x="330" y="96" width="12" height="12" rx="3" fill="#2bb3a3" stroke="#1d8075" opacity=".9"/>${t(336, 124, '✕', { size: 13, fill: '#c8243f', w: 900 })}
      ${lab(196, 40, 'receptor', "receptor", { size: 10.5, fill: '#7a3fd1' })}${lab(80, 108, 'hormone', "hormone = key", { size: 10.5, fill: '#c98200' })}
      ${lab(270, 202, 'target cell', "target cell", { size: 11, fill: '#5a2bb0' })}
      ${f(250, 18, "only the matching key opens the lock", { size: 10, fill: INK, w: 700 })}`, "Hormone and receptor",
      `${radial(g, '#f6effe', '#d6c1f3')}${shadow(sh)}${marker(a)}`);
  };

  /* بازخورد منفی: محور هیپوتالاموس، هیپوفیز، تیروئید */
  A.feedback = () => {
    const a = 'm' + (++UID), r = 'm' + (++UID);
    const box = (x, y, w, en, fa, c, bg) => `<rect x="${x}" y="${y}" width="${w}" height="42" rx="12" fill="${bg}" stroke="${c}" stroke-width="1.5"/>${lab(x + w / 2, y + 18, en, fa, { size: 11, fill: c })}`;
    return svg(360, 300, `
      ${box(30, 14, 150, 'hypothalamus', "hypothalamus", '#6a2fb0', '#f3ecfd')}
      ${box(30, 104, 150, 'anterior pituitary', "anterior pituitary", '#8e44d9', '#f0e6fb')}
      ${box(30, 194, 150, 'thyroid gland', "thyroid", '#0b7b7b', '#ddf5f4')}
      ${arrow(a, 105, 58, 105, 100, '#3f8a05', 2.4)}${pill(112, 70, 70, 20, '#e7f9d8')}${t(147, 84, 'TRH (+)', { size: 10.5, fill: '#3f8a05', w: 900 })}
      ${arrow(a, 105, 148, 105, 190, '#3f8a05', 2.4)}${pill(112, 160, 70, 20, '#e7f9d8')}${t(147, 174, 'TSH (+)', { size: 10.5, fill: '#3f8a05', w: 900 })}
      ${arrow(a, 105, 238, 105, 270, '#0b7b7b', 2.4)}${pill(60, 272, 90, 22, '#ddf5f4')}${t(105, 287, 'T3, T4', { size: 11.5, fill: '#0b7b7b', w: 900 })}
      ${curve(r, 'M152 282 C252 282 252 40 184 34', '#c8243f', 2.2, true)}${curve(r, 'M152 282 C214 280 220 130 184 124', '#c8243f', 2.2, true)}
      <circle cx="236" cy="150" r="15" fill="#fde3e7" stroke="#c8243f"/>${t(236, 155, '−', { size: 18, fill: '#c8243f', w: 900 })}
      ${f(306, 168, "Too much hormone?", { size: 10, fill: '#c8243f', w: 800 })}${f(306, 182, "switches off the", { size: 9.5 })}${f(306, 195, "order to secrete", { size: 9.5 })}
      ${f(306, 236, "like a thermostat", { size: 10, fill: INK, w: 800 })}${f(306, 250, "negative feedback", { size: 9.5 })}`, "negative feedback", `${marker(a, '#3f8a05')}${marker(r, '#c8243f')}`);
  };

  /* ترشح بیش از حد و کمتر از حد */
  A['hyper-hypo'] = () => {
    const g = 'g' + (++UID);
    return svg(360, 210, `
      <rect x="40" y="20" width="300" height="160" rx="12" fill="#fafafa" stroke="#eee"/>
      <rect x="40" y="76" width="300" height="48" fill="#e7f9d8"/>${f(312, 104, "normal", { size: 10, fill: '#3f8a05', w: 800 })}
      <rect x="40" y="20" width="300" height="56" rx="12" fill="#fde3e7" opacity=".7"/><rect x="40" y="124" width="300" height="56" rx="12" fill="#e2efff" opacity=".8"/>
      <path d="M50 100 C90 100 100 96 120 92 C150 80 160 40 190 38 C214 36 220 70 238 104 C254 136 270 160 296 158 C316 156 324 120 332 104" stroke="url(#${g})" stroke-width="4" fill="none" stroke-linecap="round"/>
      ${lab(102, 42, 'hypersecretion', "oversecretion: hyper-", { size: 11, fill: '#a31b33' })}
      ${lab(110, 148, 'hyposecretion', "undersecretion: hypo-", { size: 11, fill: '#1565c0' })}
      ${t(28, 52, '↑', { size: 16, fill: '#a31b33', w: 900 })}${t(28, 158, '↓', { size: 16, fill: '#1565c0', w: 900 })}
      ${f(190, 200, "Most gland diseases = too much or too little of one hormone", { size: 10.5, fill: INK, w: 700 })}`, "Oversecretion and undersecretion", linear(g, '#7a3fd1', '#1e88e5'));
  };

  /* ================= هیپوتالاموس و هیپوفیز ================= */
  A.pituitary = () => {
    const g = 'g' + (++UID), ga = 'g' + (++UID), gn = 'g' + (++UID), sh = 'g' + (++UID), gb = 'g' + (++UID);
    return svg(360, 262, `
      <path d="M20 20 C120 6 240 6 340 20 L340 96 C260 88 220 90 196 100 L160 100 C136 90 100 88 20 96Z" fill="url(#${g})" stroke="#d4c2ef"/>
      ${f(70, 50, "brain", { size: 11, fill: '#8a6fb8', w: 800 })}
      <path d="M140 96 C150 70 210 70 220 96Z" fill="#c9a6f2" stroke="#8e44d9" stroke-width="1.5"/>
      <path d="M172 96 C172 114 176 124 180 134 L188 134 C190 124 192 112 192 96Z" fill="#d8bff5" stroke="#8e44d9" stroke-width="1.3"/>
      <path d="M96 186 C96 150 130 140 150 150 C170 158 210 158 230 150 C250 140 284 150 284 186 C284 214 250 224 190 224 C130 224 96 214 96 186Z" fill="url(#${gb})" stroke="#c7b39a" stroke-width="1.5"/>
      <g filter="url(#${sh})"><path d="M130 170 C130 146 176 138 184 150 L186 214 C160 216 130 204 130 170Z" fill="url(#${ga})" stroke="#a24d7c" stroke-width="1.4"/>
      <path d="M186 150 C196 138 240 146 240 172 C240 202 214 214 188 214Z" fill="url(#${gn})" stroke="#6a55b8" stroke-width="1.4"/></g>
      ${[160, 172, 184].map((x, i) => `<path d="M${x - 2} 92 C${x + 6} 118 ${196 + i * 8} 130 ${206 + i * 8} 160" stroke="#6a2fb0" stroke-width="1.3" fill="none" stroke-dasharray="3 2"/>`).join('')}
      ${lab(250, 44, 'hypothalamus', "hypothalamus", { size: 10.5, fill: '#5a2bb0' })}<path d="M212 82 L238 60" stroke="#8a97a3" stroke-width="1.2"/>
      <path d="M194 118 L262 104" stroke="#8a97a3" stroke-width="1.2"/>${lab(304, 100, 'infundibulum', "pituitary stalk", { size: 10 })}
      ${lab(62, 120, 'adenohypophysis', "anterior lobe", { size: 10, fill: '#a24d7c' })}<path d="M96 132 L146 166" stroke="#a24d7c" stroke-width="1.2"/>
      ${lab(306, 140, 'neurohypophysis', "posterior lobe", { size: 10, fill: '#5a49a8' })}<path d="M276 150 L230 176" stroke="#5a49a8" stroke-width="1.2"/>
      ${lab(190, 240, 'sella turcica', "sella turcica in the sphenoid bone", { size: 10, fill: '#8a6a3c' })}
      ${f(76, 222, "← front", { size: 9.5 })}${f(310, 222, "back →", { size: 9.5 })}`, "Pituitary gland and hypothalamus",
      `${linear(g, '#f8f2fe', '#ece0fb', true)}${radial(ga, '#f8c4d6', '#d77aa1')}${radial(gn, '#d9d2f6', '#9d8ce0')}${shadow(sh)}${linear(gb, '#f6ecdc', '#e3d1b4', true)}`);
  };

  /* هورمون‌های هیپوفیز و بافت‌های هدف */
  A['pit-targets'] = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID), ga = 'g' + (++UID), gn = 'g' + (++UID);
    const T = (x, y, hor, en, fa, c, mk) => `${arrow(mk, 180 + (x - 180) * 0.28, 150 + (y - 150) * 0.28, 180 + (x - 180) * 0.7, 150 + (y - 150) * 0.7, c, 2)}${pill(x - 30, y - 30, 60, 18, c === '#7a3fd1' ? '#efe6fb' : '#fde7f0')}${t(x, y - 17, hor, { size: 10.5, fill: c, w: 900 })}${lab(x, y + 2, en, fa, { size: 9.5 })}`;
    return svg(360, 300, `
      <circle cx="180" cy="150" r="34" fill="#faf6ff" stroke="#e3d6f6"/>
      <path d="M150 150 C150 128 176 122 180 132 L180 176 C162 178 150 168 150 150Z" fill="url(#${ga})" stroke="#a24d7c"/>
      <path d="M180 132 C188 120 212 128 212 150 C212 170 196 178 180 176Z" fill="url(#${gn})" stroke="#6a55b8"/>
      ${t(166, 156, 'A', { size: 11, fill: '#fff', w: 900 })}${t(196, 156, 'P', { size: 11, fill: '#fff', w: 900 })}
      ${T(180, 40, 'GH', 'bone, muscle', "bone and muscle", '#c2185b', a)}
      ${T(300, 70, 'TSH', 'thyroid', "thyroid", '#c2185b', a)}
      ${T(326, 168, 'ACTH', 'adrenal cortex', "adrenal cortex", '#c2185b', a)}
      ${T(270, 262, 'FSH, LH', 'ovary / testis', "ovary / testis", '#c2185b', a)}
      ${T(150, 270, 'PRL', 'mammary glands', "mammary glands", '#c2185b', a)}
      ${T(44, 220, 'MSH', 'skin', "skin (pigment)", '#c2185b', a)}
      ${T(40, 112, 'ADH', 'kidney', "kidney (water reabsorption)", '#7a3fd1', b)}
      ${T(82, 38, 'OXT', 'uterus, breast', "uterus, breast", '#7a3fd1', b)}
      ${f(300, 290, "— anterior (A)", { size: 9.5, fill: '#c2185b', w: 800 })}${f(80, 290, "— posterior (P)", { size: 9.5, fill: '#7a3fd1', w: 800 })}`, "Pituitary hormones and target organs",
      `${marker(a, '#c2185b')}${marker(b, '#7a3fd1')}${radial(ga, '#f8c4d6', '#d77aa1')}${radial(gn, '#d9d2f6', '#9d8ce0')}`);
  };

  /* رشد: طبیعی، غول‌پیکری، کوتاه‌قدی، آکرومگالی (سیلوئت مانکن) */
  A.growth = () => {
    const g = 'g' + (++UID);
    const fig = (x, h, w, c, hand) => {
      const s = h / 150, y0 = 210 - h;
      return `<g transform="translate(${x} ${y0}) scale(${w * s} ${s})"><circle cx="0" cy="14" r="13" fill="${c}"/><path d="M-14 32 h28 c8 0 12 6 12 14 v40 h-8 v-36 h-2 v96 h-12 v-56 h-4 v56 h-12 v-96 h-2 v36 h-8 v-40 c0 -8 4 -14 12 -14z" fill="${c}"/>${hand ? `<circle cx="-24" cy="88" r="7" fill="${c}"/><circle cx="24" cy="88" r="7" fill="${c}"/><ellipse cx="-10" cy="150" rx="8" ry="4" fill="${c}"/><ellipse cx="10" cy="150" rx="8" ry="4" fill="${c}"/><path d="M-8 22 q8 10 16 0" fill="${c}" stroke="${c}" stroke-width="5"/>` : ''}</g>`;
    };
    return svg(360, 270, `
      <path d="M10 210 H350" stroke="#ddd" stroke-width="2"/>
      ${fig(52, 128, 1, '#9fb3c8')}${fig(130, 184, 1, '#7a3fd1')}${fig(214, 72, 1, '#1e88e5')}${fig(298, 128, 1.15, '#e8892b', true)}
      ${lab(52, 232, 'normal', "normal growth", { size: 10.5, fill: '#5a6b7c' })}
      ${lab(130, 232, 'gigantism', "too much GH before puberty", { size: 10.5, fill: '#5a2bb0' })}
      ${lab(214, 232, 'dwarfism', "too little GH in childhood", { size: 10.5, fill: '#1565c0' })}
      ${lab(298, 232, 'acromegaly', "too much GH after puberty", { size: 10.5, fill: '#b8651a' })}
      ${f(298, 64, "hands, feet and jaw", { size: 9.5, fill: '#b8651a', w: 800 })}${f(298, 76, "enlarge", { size: 9.5, fill: '#b8651a' })}
      ${f(180, 262, "When the excess of growth hormone happens decides the type of disease", { size: 10.5, fill: INK, w: 700 })}`, "Growth hormone disorders", linear(g, '#fff', '#fff'));
  };

  /* ADH: دیابت بی‌مزه و SIADH */
  A.adh = () => {
    const gk = 'g' + (++UID);
    const kid = (x) => `<path d="M${x - 16} 70 c20 -16 44 -2 44 30 c0 32 -22 46 -44 32 c-10 -6 -6 -18 2 -22 c8 -4 8 -14 0 -18 c-8 -4 -12 -16 -2 -22z" fill="url(#${gk})" stroke="#8d3a33" stroke-width="1.4"/>`;
    const drop = (x, y, s) => `<path d="M${x} ${y - 9 * s} C${x} ${y - 9 * s} ${x - 6 * s} ${y - 1 * s} ${x - 6 * s} ${y + 3 * s} a${6 * s} ${6 * s} 0 0 0 ${12 * s} 0 C${x + 6 * s} ${y - 1 * s} ${x} ${y - 9 * s} ${x} ${y - 9 * s}z" fill="#4fb3f0"/>`;
    return svg(360, 240, `
      <rect x="10" y="10" width="164" height="220" rx="14" fill="#f2f8ff"/><rect x="186" y="10" width="164" height="220" rx="14" fill="#fff6ec"/>
      ${lab(92, 30, 'diabetes insipidus', "Low ADH", { size: 11.5, fill: '#1565c0' })}${kid(84)}
      ${[0, 1, 2, 3, 4].map(i => drop(70 + i * 9, 160 + (i % 2) * 10, 1)).join('')}${[0, 1, 2].map(i => drop(64 + i * 14, 184, 1.1)).join('')}
      ${f(92, 208, "a lot of dilute urine (polyuria)", { size: 9.5, fill: '#1565c0', w: 700 })}${f(92, 221, "+ severe thirst (polydipsia)", { size: 9.5 })}
      ${lab(268, 30, 'SIADH', "High, inappropriate ADH", { size: 11.5, fill: '#b8651a' })}${kid(260)}
      ${drop(268, 168, 1)}
      <path d="M244 100 c-20 -10 -30 10 -24 22" stroke="#4fb3f0" stroke-width="3" fill="none"/>${f(268, 192, "water is retained in the body", { size: 9.5, fill: '#b8651a', w: 700 })}${f(268, 205, "blood sodium becomes diluted and low", { size: 9.5 })}${f(268, 218, '(hyponatremia)', { size: 9.5 })}`,
      "Diabetes insipidus and SIADH", radial(gk, '#d87a70', '#a8473f'));
  };

  /* ================= تیروئید و پاراتیروئید ================= */
  A.thyroid = () => {
    const gt = 'g' + (++UID), gc = 'g' + (++UID), sh = 'g' + (++UID), gb = 'g' + (++UID);
    return svg(360, 260, `
      <rect x="160" y="28" width="40" height="214" rx="16" fill="url(#${gb})" stroke="#9fb6c6"/>
      ${[120, 140, 160, 180, 200, 220].map(y => `<path d="M162 ${y} h36" stroke="#a9c1cf" stroke-width="5" stroke-linecap="round"/>`).join('')}
      <path d="M150 34 h60 l-6 40 c-8 10 -40 10 -48 0z" fill="url(#${gc})" stroke="#7fa3bd" stroke-width="1.4"/><path d="M180 44 v26" stroke="#7fa3bd"/>
      <g filter="url(#${sh})">${thyroidShape(180, 120, 2.1, gt)}</g>
      ${lab(296, 52, 'thyroid cartilage', "thyroid cartilage = Adam’s apple", { size: 10 })}<path d="M210 54 L252 52" stroke="#8a97a3" stroke-width="1.2"/>
      ${lab(296, 104, 'left lobe', "left lobe", { size: 10.5 })}<path d="M222 112 L262 104" stroke="#8a97a3" stroke-width="1.2"/>
      ${lab(64, 104, 'right lobe', "right lobe", { size: 10.5 })}<path d="M136 112 L98 104" stroke="#8a97a3" stroke-width="1.2"/>
      ${lab(64, 164, 'isthmus', "isthmus (joins the two lobes)", { size: 10.5 })}<path d="M170 138 L104 160" stroke="#8a97a3" stroke-width="1.2"/>
      ${lab(296, 200, 'trachea', "windpipe", { size: 10.5 })}<path d="M200 200 L262 198" stroke="#8a97a3" stroke-width="1.2"/>
      ${f(180, 252, "Front view: the butterfly-shaped thyroid in front of the trachea", { size: 10 })}`, "thyroid gland",
      `${radial(gt, '#f8b0a4', '#d65f52')}${linear(gc, '#e9f2f8', '#c6d9e6', true)}${shadow(sh)}${linear(gb, '#eef5f9', '#d6e5ee')}`);
  };

  /* پاراتیروئیدها: نمای پشت */
  A.parathyroid = () => {
    const gt = 'g' + (++UID), sh = 'g' + (++UID), gp = 'g' + (++UID);
    return svg(360, 220, `
      <rect x="164" y="38" width="32" height="172" rx="14" fill="#f1e3d4" stroke="#d2b79c"/>${f(180, 206, "oesophagus", { size: 9 })}
      <g filter="url(#${sh})">${thyroidShape(180, 106, 2.2, gt)}</g>
      ${[[132, 82], [132, 130], [228, 82], [228, 130]].map(p => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="9" ry="7" fill="url(#${gp})" stroke="#b58a00" stroke-width="1.4"/>`).join('')}
      ${lab(56, 80, 'superior', "superior parathyroid", { size: 10 })}<path d="M122 82 L92 80" stroke="#8a97a3"/>
      ${lab(56, 132, 'inferior', "inferior parathyroid", { size: 10 })}<path d="M122 130 L92 132" stroke="#8a97a3"/>
      ${lab(304, 104, 'PTH', "parathyroid hormone", { size: 11, fill: '#b58a00' })}<path d="M238 104 L274 104" stroke="#8a97a3"/>
      ${f(180, 26, "Back view: four small glands on the thyroid", { size: 10, fill: INK, w: 700 })}`, "parathyroid glands",
      `${radial(gt, '#f8b0a4', '#d65f52')}${shadow(sh)}${radial(gp, '#ffe58a', '#f2b705')}`);
  };

  /* تعادل کلسیم: PTH و کلسی‌تونین */
  A.calcium = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID);
    const bone = (x, y) => `<path d="M${x - 40} ${y - 8} a8 8 0 1 1 6 -12 h68 a8 8 0 1 1 6 12 a8 8 0 1 1 -6 12 h-68 a8 8 0 1 1 -6 -12z" fill="#fbf3e4" stroke="#cdb48c" stroke-width="1.6"/>`;
    return svg(360, 230, `
      ${bone(80, 120)}${lab(80, 150, 'bone', "bone: the calcium store", { size: 10.5, fill: '#8a6a3c' })}
      <rect x="230" y="96" width="110" height="40" rx="20" fill="#fde3e3" stroke="#d64a4a"/>${lab(285, 112, 'blood Ca', "blood calcium", { size: 11, fill: '#a31b33' })}
      ${curve(a, 'M124 104 C160 60 200 60 234 98', '#b58a00', 3)}${pill(138, 44, 84, 22, '#fff4cc')}${t(180, 60, 'PTH ↑ Ca', { size: 11, fill: '#8a6500', w: 900 })}
      ${curve(b, 'M234 134 C200 176 160 176 124 136', '#0b7b7b', 3)}${pill(128, 176, 104, 22, '#ddf5f4')}${t(180, 192, 'calcitonin ↓ Ca', { size: 11, fill: '#0b7b7b', w: 900 })}
      ${f(180, 30, "parathyroid: moves calcium from bone into the blood", { size: 9.5, fill: '#8a6500', w: 700 })}
      ${f(180, 218, "thyroid: moves calcium from the blood into bone", { size: 9.5, fill: '#0b7b7b', w: 700 })}`, "calcium balance", `${marker(a, '#b58a00')}${marker(b, '#0b7b7b')}`);
  };

  /* T4 و T3: تعداد ید */
  A.iodine = () => {
    const ring = (x, y) => `<path d="M${x} ${y - 16} l14 8 v16 l-14 8 l-14 -8 v-16z" fill="#fff" stroke="#0b7b7b" stroke-width="2"/>`;
    /* اتم ید: حرف I با فونت Arial تا خط عمودی‌اش واضح باشد و با صفر اشتباه نشود */
    const I = (x, y) => `<circle cx="${x}" cy="${y}" r="9.5" fill="#7a3fd1" stroke="#fff" stroke-width="1.5"/><text x="${x}" y="${y + 4.5}" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle" direction="ltr" font-family="Arial, Helvetica, sans-serif">I</text>`;
    return svg(360, 200, `
      <rect x="10" y="10" width="164" height="180" rx="14" fill="#f4fbfb"/><rect x="186" y="10" width="164" height="180" rx="14" fill="#f4fbfb"/>
      ${t(92, 36, 'T4 = thyroxine', { size: 12.5, fill: '#0b7b7b', w: 900 })}${ring(70, 96)}${ring(118, 96)}<path d="M84 96 h20" stroke="#0b7b7b" stroke-width="2"/>
      ${I(52, 70)}${I(80, 66)}${I(108, 66)}${I(136, 70)}
      ${f(92, 142, "tetra- = four iodines", { size: 10.5, fill: '#7a3fd1', w: 800 })}${f(92, 160, "more plentiful, a storage form", { size: 9.5 })}
      ${t(268, 36, 'T3 = triiodothyronine', { size: 12, fill: '#0b7b7b', w: 900 })}${ring(246, 96)}${ring(294, 96)}<path d="M260 96 h20" stroke="#0b7b7b" stroke-width="2"/>
      ${I(228, 70)}${I(256, 66)}${I(312, 70)}
      ${f(268, 142, "tri- = three iodines", { size: 10.5, fill: '#7a3fd1', w: 800 })}${f(268, 160, "more active and potent", { size: 9.5 })}
      ${f(180, 186, "Without enough iodine, thyroid hormone cannot be made → goitre", { size: 9.5, fill: INK, w: 700 })}`, "Thyroxine and triiodothyronine");
  };

  /* پرکاری و کم‌کاری تیروئید */
  A['thyroid-compare'] = () => {
    const row = (y, a, b) => `${f(96, y, a, { size: 10.5, fill: INK })}${f(264, y, b, { size: 10.5, fill: INK })}`;
    return svg(360, 250, `
      <rect x="10" y="10" width="166" height="230" rx="14" fill="#fff1ec"/><rect x="184" y="10" width="166" height="230" rx="14" fill="#eef5ff"/>
      ${lab(93, 32, 'hyperthyroidism', "Overactive: a fast engine", { size: 11.5, fill: '#c2410c' })}${lab(267, 32, 'hypothyroidism', "Underactive: a slow engine", { size: 11.5, fill: '#1565c0' })}
      ${t(93, 82, '🔥', { size: 22 })}${t(267, 82, '❄️', { size: 22 })}
      ${row(108, "weight loss", "weight gain")}${row(130, "fast heartbeat (tachycardia)", "slow beat")}${row(152, "heat intolerance, sweating", "cold intolerance")}${row(174, "restlessness, insomnia", "tiredness, slowness")}${row(196, "exophthalmos, goitre", "dry skin, myxedema")}
      ${f(93, 226, "example: Graves", { size: 10, fill: '#c2410c', w: 800 })}${f(267, 226, "example: Hashimoto", { size: 10, fill: '#1565c0', w: 800 })}`, "Hyperthyroidism and hypothyroidism");
  };

  /* ================= فوق‌کلیه ================= */
  A.adrenal = () => {
    const gk = 'g' + (++UID), ga = 'g' + (++UID), sh = 'g' + (++UID), gc = 'g' + (++UID), gm = 'g' + (++UID);
    return svg(360, 250, `
      <g filter="url(#${sh})">${kidneyAdrenal(80, 140, 2.2, gk, ga, false)}</g>
      ${lab(80, 230, 'kidney + adrenal', "The adrenal: a cap on the kidney", { size: 10.5 })}
      <path d="M118 74 C150 60 170 60 196 72" stroke="${LINE}" stroke-width="1.6" fill="none" stroke-dasharray="4 3"/>
      <g filter="url(#${sh})"><path d="M206 190 L270 40 L342 190 Z" fill="url(#${gc})" stroke="#c98a12" stroke-width="2" stroke-linejoin="round"/>
      <path d="M232 174 L270 86 L316 174 Z" fill="url(#${gm})" stroke="#a5531c" stroke-width="1.5" stroke-linejoin="round"/></g>
      ${t(270, 158, 'medulla', { size: 11, fill: '#fff', w: 900 })}${f(270, 172, "centre", { size: 9.5, fill: '#fff' })}
      ${lab(270, 26, "cortex = outer layer", "cortisol, aldosterone, androgens", { size: 10.5, fill: '#9a6200' })}
      ${f(274, 212, "medulla: epinephrine and norepinephrine", { size: 10, fill: '#a5531c', w: 800 })}${f(274, 228, "The cortex is like tree bark, the medulla like its core", { size: 9.5 })}`,
      "adrenal gland",
      `${radial(gk, '#d87a70', '#a8473f')}${linear(ga, '#ffd97a', '#f0a92c', true)}${shadow(sh)}${linear(gc, '#ffe7a3', '#f4b844', true)}${linear(gm, '#e58b4b', '#b85d22', true)}`);
  };

  /* سه خانواده هورمون قشر: نمک، قند، جنس */
  A['cortex-zones'] = () => {
    const band = (y, h, c, bg, en, fa, ex) => `<rect x="20" y="${y}" width="320" height="${h}" rx="12" fill="${bg}" stroke="${c}"/>${t(36, y + 22, en, { size: 12, fill: c, w: 900, anchor: 'start' })}${f(324, y + 22, fa, { size: 11, fill: c, w: 800, anchor: 'end' })}${f(180, y + 42, ex, { size: 10, fill: INK })}`;
    return svg(360, 240, `${f(180, 22, "The adrenal cortex makes three “S”s", { size: 11.5, fill: INK, w: 800 })}
      ${band(34, 54, '#0b7b7b', '#e2f6f4', 'Salt • mineralocorticoids', "salt", "aldosterone: keeps sodium and water, gets rid of potassium")}
      ${band(96, 54, '#b8651a', '#fdefdc', 'Sugar • glucocorticoids', "sugar", "cortisol: raises blood sugar, anti-inflammatory, copes with stress")}
      ${band(158, 54, '#a8345b', '#fbe6ee', 'Sex • gonadocorticoids', "sex", "androgens: secondary sex characteristics (in small amounts)")}
      ${f(180, 230, "all are made from cholesterol → corticosteroids", { size: 10, fill: MUTED })}`, "Hormones of the adrenal cortex");
  };

  /* استرس و اپی‌نفرین */
  A.stress = () => {
    const g = 'g' + (++UID);
    const it = (x, y, ic, fa) => `<circle cx="${x}" cy="${y}" r="22" fill="#fff4e6" stroke="#e8892b"/>${t(x, y + 7, ic, { size: 18 })}${f(x, y + 40, fa, { size: 9.5, fill: INK, w: 700 })}`;
    return svg(360, 250, `
      <path d="M180 92 L198 60 L188 60 L204 30 L168 70 L180 70 Z" fill="url(#${g})" stroke="#b8651a" stroke-width="1.2"/>
      ${lab(180, 112, 'epinephrine', "epinephrine (adrenaline)", { size: 11.5, fill: '#b8651a' })}
      ${it(44, 60, '❤️', "heart rate ↑")}${it(316, 60, '🩸', "blood pressure ↑")}${it(44, 168, '🫁', "breathing ↑")}${it(316, 168, '🍬', "blood sugar ↑")}${it(180, 164, '👁️', "pupils dilated")}
      ${f(180, 238, "fight-or-flight response", { size: 10.5, fill: '#b8651a', w: 800 })}`, "Epinephrine and stress", linear(g, '#ffd36b', '#f08a1a', true));
  };

  /* کوشینگ و آدیسون */
  A['cushing-addison'] = () => {
    const face = (x, c, round) => round
      ? `<ellipse cx="${x}" cy="88" rx="40" ry="38" fill="${c}" stroke="#c9a27c"/><circle cx="${x - 14}" cy="82" r="3.5" fill="#5b4636"/><circle cx="${x + 14}" cy="82" r="3.5" fill="#5b4636"/><path d="M${x - 10} 104 q10 6 20 0" stroke="#5b4636" stroke-width="2.4" fill="none"/><ellipse cx="${x - 24}" cy="98" rx="8" ry="5" fill="#f08a8a" opacity=".55"/><ellipse cx="${x + 24}" cy="98" rx="8" ry="5" fill="#f08a8a" opacity=".55"/>`
      : `<ellipse cx="${x}" cy="88" rx="27" ry="37" fill="${c}" stroke="#7a5a3c"/><path d="M${x - 18} 98 q4 6 8 4 M${x + 18} 98 q-4 6 -8 4" stroke="#7a5a3c" stroke-width="1.4" fill="none" opacity=".6"/><circle cx="${x - 10}" cy="76" r="3.2" fill="#2f2219"/><circle cx="${x + 10}" cy="76" r="3.2" fill="#2f2219"/><path d="M${x - 8} 102 q8 -4 16 0" stroke="#2f2219" stroke-width="2.2" fill="none"/>`;
    return svg(360, 250, `
      <rect x="10" y="10" width="166" height="230" rx="14" fill="#fff4e8"/><rect x="184" y="10" width="166" height="230" rx="14" fill="#f3f0ee"/>
      ${lab(93, 30, 'Cushing syndrome', "too much cortisol", { size: 11.5, fill: '#b8651a' })}${face(93, '#f6d3b5', true)}
      ${["moon face", "buffalo hump", "trunk obesity + striae", "blood sugar and pressure ↑"].map((s, i) => f(93, 150 + i * 20, s, { size: 10, fill: INK })).join('')}
      ${lab(267, 30, 'Addison disease', "too little cortisol and aldosterone", { size: 11.5, fill: '#6b4a2c' })}${face(267, '#b98a62', false)}
      ${["bronzed skin (hyperpigmentation)", "weakness and weight loss", "blood pressure and sugar ↓", "sodium ↓, potassium ↑"].map((s, i) => f(267, 150 + i * 20, s, { size: 10, fill: INK })).join('')}`, "Cushing syndrome and Addison disease");
  };

  /* ================= پانکراس و دیابت ================= */
  A.pancreas = () => {
    const gp = 'g' + (++UID), sh = 'g' + (++UID), gi = 'g' + (++UID), a = 'm' + (++UID);
    return svg(360, 250, `
      <path d="M20 150 C20 120 40 108 60 112 C56 140 60 170 52 196 C34 196 20 176 20 150Z" fill="#e7c1a0" stroke="#c49773"/>${f(40, 214, "duodenum", { size: 9, fill: '#8a6a3c' })}
      <g filter="url(#${sh})"><path d="M56 126 C90 100 150 112 190 104 C220 98 250 84 268 94 C282 102 278 120 262 124 C230 132 200 140 160 150 C120 160 84 160 60 156Z" fill="url(#${gp})" stroke="#c9845a" stroke-width="1.5"/></g>
      <path d="M62 138 C110 132 170 126 256 106" stroke="#d9a07a" stroke-width="3" fill="none"/>${lab(150, 186, 'pancreatic duct', "duct: digestive enzymes (exocrine)", { size: 9.5, fill: '#9a5a2c' })}<path d="M150 172 L150 132" stroke="#9a5a2c" stroke-width="1.2" stroke-dasharray="3 2"/>
      <circle cx="200" cy="124" r="6" fill="none" stroke="#7a3fd1" stroke-width="2"/>
      ${curve(a, 'M206 120 C240 80 262 70 276 62', '#7a3fd1', 1.6, true)}
      <circle cx="306" cy="74" r="46" fill="#fdf6f0" stroke="#7a3fd1" stroke-width="2"/>
      <circle cx="306" cy="74" r="26" fill="url(#${gi})" stroke="#9a7ad8"/>
      ${dots(306, 74, 22, 16, '#1e88e5', 3.6, 3)}${dots(306, 74, 22, 7, '#e8892b', 3.6, 9)}
      ${lab(306, 138, 'islet of Langerhans', "islet: hormones (endocrine)", { size: 9.5, fill: '#5a2bb0' })}
      <circle cx="244" cy="166" r="5" fill="#1e88e5"/>${f(296, 170, "beta cell: insulin", { size: 10, fill: '#1565c0', w: 800 })}
      <circle cx="244" cy="188" r="5" fill="#e8892b"/>${f(296, 192, "alpha cell: glucagon", { size: 10, fill: '#b8651a', w: 800 })}
      ${lab(180, 234, 'pancreas', "The pancreas behind the stomach: both exocrine and endocrine", { size: 10.5 })}`, "Pancreas and islets of Langerhans",
      `${linear(gp, '#ffd8bf', '#f0a780', true)}${shadow(sh)}${radial(gi, '#f6effe', '#dcccf5')}${marker(a, '#7a3fd1')}`);
  };

  /* الاکلنگ قند: انسولین و گلوکاگون */
  A['glucose-balance'] = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID);
    return svg(360, 250, `
      <path d="M180 142 L170 164 H190 Z" fill="#cfd8e2" stroke="#9fb0c0"/>
      <rect x="40" y="124" width="280" height="12" rx="6" fill="#7a3fd1" transform="rotate(-4 180 130)"/>
      <rect x="44" y="84" width="96" height="38" rx="12" fill="#e3f0ff" stroke="#1e88e5" transform="rotate(-4 180 130)"/>${t(92, 108, 'insulin', { size: 12.5, fill: '#1565c0', w: 900 })}
      <rect x="220" y="76" width="96" height="38" rx="12" fill="#fff1df" stroke="#e8892b" transform="rotate(-4 180 130)"/>${t(268, 98, 'glucagon', { size: 12.5, fill: '#b8651a', w: 900 })}
      ${f(92, 154, "lowers blood sugar", { size: 10, fill: '#1565c0', w: 700 })}${f(268, 146, "raises blood sugar", { size: 10, fill: '#b8651a', w: 700 })}
      <rect x="40" y="190" width="100" height="40" rx="12" fill="#fff" stroke="#ccc"/>${lab(90, 206, 'glucose', "glucose (blood)", { size: 10.5 })}
      <rect x="220" y="190" width="100" height="40" rx="12" fill="#fff" stroke="#ccc"/>${lab(270, 206, 'glycogen', "glycogen (liver)", { size: 10.5 })}
      ${curve(a, 'M140 198 C170 182 190 182 218 198', '#1565c0', 2)}${t(180, 180, 'glycogenesis', { size: 9.5, fill: '#1565c0' })}
      ${curve(b, 'M218 224 C190 240 170 240 142 224', '#b8651a', 2)}${t(180, 248, 'glycogenolysis', { size: 9.5, fill: '#b8651a' })}
      ${f(180, 30, "Two opposing hormones = the blood sugar seesaw", { size: 11, fill: INK, w: 800 })}${f(180, 48, "beta cell: insulin • alpha cell: glucagon", { size: 9.5 })}`, "Insulin and glucagon",
      `${marker(a, '#1565c0')}${marker(b, '#b8651a')}`);
  };

  /* دیابت نوع ۱ و ۲: کلید و قفل */
  A['dm-types'] = () => {
    const cellC = (x, c) => `<ellipse cx="${x}" cy="128" rx="62" ry="46" fill="${c}" stroke="#9fb0c0"/>`;
    const lock = (x, y, c) => `<rect x="${x - 10}" y="${y}" width="20" height="16" rx="3" fill="${c}"/><path d="M${x - 6} ${y} v-6 a6 6 0 0 1 12 0 v6" stroke="${c}" stroke-width="3" fill="none"/>`;
    const key = (x, y, c) => `<circle cx="${x}" cy="${y}" r="7" fill="none" stroke="${c}" stroke-width="3"/><path d="M${x + 7} ${y} h18 m-6 0 v6 m-6 -6 v5" stroke="${c}" stroke-width="3" fill="none"/>`;
    return svg(360, 240, `
      <rect x="10" y="10" width="166" height="220" rx="14" fill="#f2f6ff"/><rect x="184" y="10" width="166" height="220" rx="14" fill="#fff6ec"/>
      ${lab(93, 30, 'type 1 DM', "No key", { size: 12, fill: '#1565c0' })}${cellC(93, '#eef3f8')}${lock(93, 94, '#7a3fd1')}
      ${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${62 + (i % 3) * 30}" cy="${128 + Math.floor(i / 3) * 22}" r="6" fill="#f2b705"/>`).join('')}
      ${f(93, 190, "the β cells are destroyed", { size: 9.5, fill: INK })}${f(93, 204, "zero insulin → insulin injections", { size: 9.5, fill: '#1565c0', w: 800 })}${f(93, 218, "usually children, sudden onset", { size: 9 })}
      ${lab(267, 30, 'type 2 DM', "The key is there, the lock is stiff", { size: 12, fill: '#b8651a' })}${cellC(267, '#eef3f8')}${lock(267, 94, '#9fb0c0')}${key(232, 70, '#1e88e5')}${t(300, 76, '✕', { size: 14, fill: '#c8243f', w: 900 })}
      ${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${236 + (i % 3) * 30}" cy="${128 + Math.floor(i / 3) * 22}" r="6" fill="#f2b705"/>`).join('')}
      ${f(267, 190, "insulin resistance", { size: 9.5, fill: INK })}${f(267, 204, "diet, exercise, oral drugs", { size: 9.5, fill: '#b8651a', w: 800 })}${f(267, 218, "usually overweight adults, gradual", { size: 9 })}`, "Type 1 and type 2 diabetes");
  };

  /* سه P دیابت */
  A['three-p'] = () => {
    const c = (x, ic, en, fa, sub) => `<circle cx="${x}" cy="76" r="38" fill="#f2f6ff" stroke="#1e88e5" stroke-width="2"/>${t(x, 88, ic, { size: 30 })}${lab(x, 136, en, fa, { size: 11.5, fill: '#1565c0' })}${f(x, 168, sub, { size: 9.5 })}`;
    return svg(360, 200, `${c(62, '🚽', 'polyuria', "excessive urination", "-uria = urine")}${c(180, '🥤', 'polydipsia', "excessive drinking", "-dipsia = thirst")}${c(298, '🍽️', 'polyphagia', "overeating", "-phagia = eating")}
      ${f(180, 192, "poly- = much • the three classic signs of diabetes mellitus", { size: 10, fill: INK, w: 700 })}`, "Three classic signs of diabetes");
  };

  /* عوارض مزمن دیابت */
  A['dm-complications'] = () => {
    const it = (x, y, ic, en, fa) => `<circle cx="${x}" cy="${y}" r="26" fill="#fff" stroke="#1e88e5" stroke-width="2"/>${t(x, y + 8, ic, { size: 22 })}${lab(x, y + 44, en, fa, { size: 10 })}`;
    return svg(360, 260, `${[[70, 52], [290, 52], [70, 186], [290, 186]].map(p => `<path d="M180 128 L${p[0]} ${p[1]}" stroke="#bcd3ef" stroke-width="3"/>`).join('')}
      <circle cx="180" cy="128" r="40" fill="#e3f0ff" stroke="#1565c0" stroke-width="2"/>${t(180, 124, 'DM', { size: 18, fill: '#1565c0', w: 900 })}${f(180, 142, "high sugar", { size: 10, fill: '#1565c0' })}
      ${it(70, 52, '👁️', 'retinopathy', "retinal damage, blindness")}${it(290, 52, '🫘', 'nephropathy', "kidney damage, dialysis")}${it(70, 186, '🦶', 'neuropathy', "numbness, foot ulcers")}${it(290, 186, '🫀', 'vascular', "stroke, hardening of the arteries")}`, "chronic complications of diabetes");
  };

  /* آزمون‌های تشخیص دیابت */
  A['glucose-tests'] = () => {
    const bar = (y, en, fa, norm, pre, dm, unit) => `${lab(70, y + 4, en, fa, { size: 10.5 })}<rect x="130" y="${y - 10}" width="70" height="22" fill="#e7f9d8"/><rect x="200" y="${y - 10}" width="70" height="22" fill="#fff4cc"/><rect x="270" y="${y - 10}" width="74" height="22" fill="#fde3e7"/>${t(165, y + 5, norm, { size: 10, fill: '#3f8a05', w: 800 })}${t(235, y + 5, pre, { size: 10, fill: '#8a6500', w: 800 })}${t(307, y + 5, dm, { size: 10, fill: '#a31b33', w: 800 })}${t(344, y + 22, unit, { size: 8.5, fill: MUTED, anchor: 'end' })}`;
    return svg(360, 230, `
      ${f(165, 24, "normal", { size: 10.5, fill: '#3f8a05', w: 800 })}${f(235, 24, "prediabetes", { size: 10.5, fill: '#8a6500', w: 800 })}${f(307, 24, "diabetes", { size: 10.5, fill: '#a31b33', w: 800 })}
      ${bar(58, 'FBS / FPG', "fasting sugar", '&lt;100', '100–125', '≥126', 'mg/dL')}
      ${bar(116, '2-h OGTT', "two hours after glucose", '&lt;140', '140–199', '≥200', 'mg/dL')}
      ${bar(174, 'HbA1c', "3-month average", '&lt;5.7', '5.7–6.4', '≥6.5', '%')}
      ${f(180, 222, "IFG and IGT = the prediabetes stage", { size: 9.5, fill: MUTED })}`, "Diagnostic criteria for diabetes");
  };

  /* ================= غدد دیگر، تشخیص و درمان ================= */
  /* ساعت ملاتونین */
  A['pineal-clock'] = () => {
    const g = 'g' + (++UID);
    return svg(360, 210, `
      <rect x="20" y="30" width="160" height="140" fill="#fff8df"/><rect x="180" y="30" width="160" height="140" fill="#e6e8fb"/>
      ${t(100, 54, '☀️', { size: 18 })}${t(260, 54, '🌙', { size: 18 })}
      <path d="M20 150 C80 152 140 150 180 120 C210 90 230 60 260 58 C290 58 310 90 340 140" stroke="url(#${g})" stroke-width="4" fill="none" stroke-linecap="round"/>
      ${lab(250, 140, 'melatonin ↑', "darkness: high melatonin and sleep", { size: 10.5, fill: '#3a3f9e' })}
      ${lab(96, 96, 'melatonin ↓', "light: low melatonin and wakefulness", { size: 10.5, fill: '#8a6500' })}
      <path d="M20 170 H340" stroke="#ccc"/>${t(20, 186, '6', { size: 9, fill: MUTED })}${t(180, 186, '18', { size: 9, fill: MUTED })}${t(340, 186, '6', { size: 9, fill: MUTED })}
      ${f(180, 204, "circadian rhythm: the body’s 24-hour clock", { size: 10.5, fill: INK, w: 700 })}`, "Melatonin and the circadian rhythm", linear(g, '#f2b705', '#3a3f9e'));
  };

  /* تیموس در قفسه سینه (مانکن) */
  A.thymus = () => {
    const g = 'g' + (++UID), sh = 'g' + (++UID), gt = 'g' + (++UID), gl = 'g' + (++UID);
    return svg(360, 240, `
      <g filter="url(#${sh})"><path d="M90 30 C130 20 230 20 270 30 C300 38 312 70 312 120 C312 180 300 220 280 230 H80 C60 220 48 180 48 120 C48 70 60 38 90 30Z" fill="url(#${g})" stroke="${SKIN_LINE}"/></g>
      <path d="M100 70 C76 90 72 150 84 200 C110 206 140 200 150 190 C152 150 150 100 140 72 C128 60 112 60 100 70Z" fill="url(#${gl})" opacity=".8"/>
      <path d="M260 70 C284 90 288 150 276 200 C250 206 220 200 210 190 C208 150 210 100 220 72 C232 60 248 60 260 70Z" fill="url(#${gl})" opacity=".8"/>
      <path d="M176 34 v40" stroke="#b9c9d6" stroke-width="10" stroke-linecap="round"/>
      <path d="M150 166 C150 140 180 132 200 140 C222 150 226 182 206 196 C190 206 160 202 150 166Z" fill="#e57373" opacity=".85"/>
      <path d="M160 80 C150 100 152 128 168 140 C176 134 178 120 180 104 C182 120 186 134 194 140 C210 128 212 100 200 80 C190 72 170 72 160 80Z" fill="url(#${gt})" stroke="#c9845a" stroke-width="1.4"/>
      ${lab(320 - 6, 96, 'thymus', "thymus: behind the breastbone", { size: 10.5, fill: '#a8345b', anchor: 'end' })}<path d="M200 100 L238 100" stroke="#8a97a3"/>
      ${lab(180, 222, 'heart', "heart", { size: 9.5, fill: '#b23a3a' })}${lab(70, 222, 'lung', "lung", { size: 9.5, fill: MUTED })}
      ${f(180, 16, "large in childhood, small and fatty in adulthood", { size: 10, fill: INK, w: 700 })}`, "chest gland that trains T cells",
      `${linear(g, SKIN1, SKIN2, true)}${shadow(sh)}${linear(gt, '#ffd9c6', '#f2a37f', true)}${linear(gl, '#f6d6dc', '#e9aeb9', true)}`);
  };

  /* غدد جنسی و گنادوتروپین‌ها */
  A.gonads = () => {
    const a = 'm' + (++UID);
    return svg(360, 230, `
      <rect x="130" y="14" width="100" height="40" rx="14" fill="#f0e6fb" stroke="#8e44d9"/>${lab(180, 30, 'pituitary', "pituitary: FSH and LH", { size: 10.5, fill: '#6a2fb0' })}
      ${arrow(a, 160, 56, 92, 100, '#8e44d9', 2.2)}${arrow(a, 200, 56, 268, 100, '#8e44d9', 2.2)}
      <rect x="14" y="104" width="160" height="112" rx="14" fill="#fbe6ee"/><rect x="186" y="104" width="160" height="112" rx="14" fill="#e3f0ff"/>
      <ellipse cx="94" cy="134" rx="22" ry="14" fill="#f3a6c3" stroke="#c46b8f"/>${dots(94, 134, 12, 6, '#fff', 2.4, 5)}
      ${lab(94, 168, 'ovaries', "the ovaries", { size: 11, fill: '#a8345b' })}${t(94, 200, 'estrogen • progesterone', { size: 9.5, fill: INK, w: 700 })}
      <ellipse cx="266" cy="134" rx="16" ry="20" fill="#9fc5f0" stroke="#4f8fc0"/>
      ${lab(266, 168, 'testes', "testes", { size: 11, fill: '#1565c0' })}${t(266, 200, 'testosterone', { size: 9.5, fill: INK, w: 700 })}`, "gonads", marker(a, '#8e44d9'));
  };

  /* نقشه جراحی‌ها: هر غده + -ectomy */
  A.surgery = () => {
    const row = (y, ic, w, fa) => `<rect x="20" y="${y}" width="320" height="30" rx="10" fill="#f8f6fc"/>${t(40, y + 21, ic, { size: 15 })}${t(64, y + 20, w, { size: 11.5, fill: '#5a2bb0', w: 900, anchor: 'start' })}${f(326, y + 20, fa, { size: 10, fill: INK, anchor: 'end' })}`;
    return svg(360, 270, `${f(180, 18, "gland name + -ectomy = removal of that gland", { size: 11, fill: INK, w: 800 })}
      ${row(30, '🧠', 'hypophysectomy', "pituitary")}${row(64, '🦋', 'thyroidectomy', "thyroid")}${row(98, '🟡', 'parathyroidectomy', "parathyroid")}
      ${row(132, '🛡️', 'thymectomy', "thymus")}${row(166, '🎩', 'adrenalectomy', "adrenal")}${row(200, '🐟', 'pancreatectomy', "pancreas")}${row(234, '🌲', 'pinealectomy', "pineal")}`, "Endocrine surgery");
  };

  /* ---------- عکس‌های برچسب‌دار: تصویر ترمیم‌شده (inpainting) + برچسب دوزبانه ---------- */
  const IMG = (k, x, y, w, h) => `<image href="${EA.img ? EA.img(k) : 'img/' + k + '.webp'}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet"/>`;
  const pin = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="#5b6b73" stroke-width="1.1"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="#fff" stroke="#c8243f" stroke-width="1.4"/>`;
  /* نشانه‌های سندرم کوشینگ روی تصویر مانکن‌شده */
  A['cushing-signs'] = () => svg(360, 300, `${IMG('cushing-signs', 130, 6, 100, 284)}
    ${pin(186, 14, 252, 18)}${lab(306, 16, 'thinning hair', "thinning hair", { size: 9.5 })}
    ${pin(203, 40, 252, 52)}${lab(306, 52, 'moon face', "moon face", { size: 9.5 })}
    ${pin(193, 72, 252, 90)}${lab(306, 88, 'hirsutism', "excess facial and body hair", { size: 9.5 })}
    ${pin(198, 128, 252, 132)}${lab(306, 130, 'purple striae', "purple stretch marks", { size: 9.5 })}
    ${pin(212, 146, 252, 174)}${lab(306, 172, 'pendulous abdomen', "pendulous abdomen", { size: 9.5 })}
    ${pin(163, 35, 108, 22)}${lab(56, 20, 'buffalo hump', "buffalo hump", { size: 9.5 })}
    ${pin(176, 56, 108, 64)}${lab(56, 62, 'fat pad', "fat above the collarbone", { size: 9.5 })}
    ${pin(147, 130, 108, 116)}${lab(56, 114, 'slow healing', "slow wound healing", { size: 9.5 })}
    ${pin(163, 190, 108, 168)}${lab(56, 166, 'easy bruising', "easy bruising", { size: 9.5 })}
    ${pin(170, 222, 108, 222)}${lab(56, 220, 'thin limbs', "thin arms and legs", { size: 9.5 })}
    ${f(306, 270, "Teaching image with a", { size: 9, fill: MUTED })}${f(306, 283, "smooth mannequin surface", { size: 9, fill: MUTED })}`, "Signs of Cushing syndrome");
  /* برش میکروسکوپی پانکراس */
  A['islet-histology'] = () => svg(360, 236, `<rect x="56" y="8" width="248" height="208" rx="10" fill="#f6f0fb"/>${IMG('islet-histology', 60, 12, 240, 200)}
    <ellipse cx="146" cy="128" rx="30" ry="26" fill="none" stroke="#ffd34d" stroke-width="2.5" stroke-dasharray="5 3"/>
    ${pin(118, 132, 40, 150)}${lab(30, 168, 'islet', "islet (endocrine)", { size: 9.5, fill: '#8a6500' })}
    ${pin(262, 52, 322, 40)}${lab(330, 58, 'acinar cells', "digestive cells", { size: 9.5, anchor: 'middle' })}
    ${f(180, 230, "A pale islet among the cells that make digestive enzymes", { size: 9.5, fill: MUTED })}`, "Microscopic section of the pancreas");

  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* هورمونا — دنیای ۰: زبان هورمون‌ها (پایه همه دنیاها)
 * پیش از رفتن سراغ تک‌تک غدد، دو چیز را یاد می‌گیریم: «دستگاه درون‌ریز چطور کار می‌کند» و «واژه‌هایش چطور ساخته می‌شوند».
 * سطح ۱: پیام‌رسان‌ها، گیرنده‌ها، بازخورد و نقشه غدد • سطح ۲: قطعه‌های واژه، ریشه‌های غدد و پیشوندها • سطح ۳: پسوندها و دام‌های همزاد.
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: "Language of Hormones", short: "Basics", sub: "Chemical messengers, the map of the glands and the code of word-building: roots, prefixes, suffixes and look-alike traps",
    color: '#4F5BD5', dark: '#3540A8', light: '#E3E6FB',
    levels: ["Chemical messengers", "Puzzle pieces", "Like a pro"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: پیام‌رسان‌های شیمیایی ================= */
      {
        id: 'lx1', title: "The body’s messengers", icon: '📨', items: [
          L("Two command systems", `The body has two “messaging systems” for coordinating its organs:${vs(["nervous system", "electrical message, in a fraction of a second, through nerves"], ["endocrine system", "chemical message (hormone), slower but longer-lasting, through the blood"])}The ${e('endocrine system')} regulates growth, metabolism, water and salt balance, the stress response and reproduction.${memo("A nerve is like a “text message”: instant and brief. A hormone is like a “letter by post”: it arrives later, but its effect lasts hours or days.")}`),
          L("Hormone means “setting in motion”", `${e('<b>hormone</b>')} comes from the Greek word ${e('hormon')}, meaning “to arouse, to set in motion”.<br>A hormone is a <b>chemical messenger</b> that:<br>• is made in a <b>gland</b> (${e('gland')});<br>• goes straight into the <b>blood</b>;<br>• acts on a <b>target cell</b> elsewhere in the body.${pearl("Hormones have strong effects even in tiny amounts; that is why laboratories measure them with very sensitive methods such as radioimmunoassay (RIA).")}`),
          M("How does a hormone reach its target organ?", ["through the bloodstream", "through a duct", "through the nerves", "through the digestive tract"], "An endocrine gland has no duct and releases its hormone straight into the blood."),
          L("Endocrine or exocrine?", `${wb('endo-', 'crin/o')} → <b>endocrine</b>: “secreting inwards” (into the blood)<br>${wb('exo-', 'crin/o')} → <b>exocrine</b>: “secreting outwards” (through a duct)${fig('endo-exo', '', "An endocrine gland has no duct; that is why it is also called a ductless gland.")}${memo("The prefix endo means inside, as in endoscopy (looking inside the body). The prefix exo means outside, as in exit.")}`),
          P("Match each gland to its type", [["gland that makes sweat", "exocrine: sweat through a duct to the skin"], ["thyroid gland", "endocrine: T4 into the blood"], ["salivary gland", "exocrine: saliva through a duct into the mouth"], ["adrenal gland", "endocrine: adrenaline into the blood"]], "Sweat and salivary glands send their secretion out through ducts; the thyroid and adrenal release hormones into the blood."),
          T("The pancreas is both an endocrine and an exocrine gland.", true, "True. The islets of Langerhans release insulin and glucagon into the blood (endocrine); the rest of the pancreas sends digestive enzymes through a duct into the intestine (exocrine)."),
          B("A gland that has no duct and releases its secretion into the blood is an ___ gland.", ["secreting into the blood (endocrine)", "secreting through a duct (exocrine)", "salivary"], 'endocrine gland = ductless gland.'),
          M(`${e('<b>endocrinology</b>')} means…`, ["study of the endocrine glands and hormones", "gland specialist", "disease of a gland", "removal of a gland"], "endocrin/o (endocrine glands) + -logy (study). The specialist in this field is an endocrinologist."),
          W("Build a word meaning “specialist in endocrine glands”", ['endocrin/o', '-logist'], ['-logy', 'aden/o', '-pathy'], 'endocrin/o + -logist = endocrinologist.'),
          S("Spell the term for a chemical messenger carried in the blood", 'hormone', "hormone; plural hormones.", 'hor…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: "Lock, key and thermostat", icon: '🔑', items: [
          L("Target cell and receptor", `A hormone in the blood reaches every part of the body but acts only on cells that have a <b>receptor</b> for it (${e('receptor')}). These cells are <b>target cells</b> (${e('target cell')}), and together they make up the <b>target tissue</b> (${e('target tissue')}).${fig('lock-key', '', "The hormone is like a key and the receptor like a lock; only the matching key opens the lock.")}`),
          M("Why does TSH act only on the thyroid, even though it reaches the whole body?", ["because only thyroid cells have TSH receptors", "because TSH is secreted only in the neck", "because it travels to the thyroid through a duct", "because other cells destroy it"], "The specific receptor decides the target cell."),
          L("Homeostasis: a stable balance", `${wb('home/o', '-stasis')} → ${e('<b>homeostasis</b>')}: “staying the same”.<br>The main job of the endocrine system is to keep the body’s internal environment constant: temperature, blood sugar, calcium, water and salt, and blood pressure.<br><br>${e('<b>metabolism</b>')} is the sum of all the chemical reactions in cells that produce energy.${memo("Remember home/o as in “homogeneous”: always alike and the same.")}`),
          T("Homeostasis means keeping the body’s internal environment constant, however much the outside changes.", true, "True; for example, body temperature stays around 37 degrees whether the weather is cold or hot."),
          L("Negative feedback: the body’s thermostat", `Most hormones are controlled by <b>negative feedback</b> (${e('negative feedback')}): when the hormone level rises, it <b>switches off</b> the order for more secretion itself.${fig('feedback', '', "The hypothalamus commands the pituitary and the pituitary the thyroid; high T3 and T4 inhibit both upper steps.")}${memo("Just like a heater with a thermostat: when the room warms up, the heater switches off; when it cools, it switches on again.")}`),
          O("Put the steps of thyroid negative feedback in order", ["the hypothalamus secretes TRH", "the anterior pituitary makes TSH", "the thyroid secretes T3 and T4", "high T3 and T4 inhibit the secretion of TRH and TSH"], "The “hypothalamus → pituitary → thyroid” axis is closed by negative feedback."),
          M("In negative feedback, what happens when the hormone level rises?", ["secretion of that hormone falls", "its secretion increases", "the receptors are destroyed", "the gland enlarges"], "High output switches off the input; the result is balance."),
          B("The site on a cell that a hormone attaches to is called a ___.", ["receptor", "duct", "gland"], "A receptor is like a lock that opens only with its own hormone key."),
          S("Spell the term for a stable internal balance", 'homeostasis', "home/o (same) + -stasis (staying constant).", 'homeo…'),
          N('d2t:lx')
        ]
      },
      {
        id: 'lx3', title: "map of the endocrine glands", icon: '🗺️', items: [
          L("Where are the endocrine glands?", `The endocrine glands are spread throughout the body:${fig('body-map', '', "From head to pelvis: hypothalamus, pituitary, pineal, thyroid, parathyroids, thymus, adrenals, pancreas and gonads.")}`),
          L("Central and peripheral glands", `${tbl([["Group", "glands", "Note"], ["central (in the brain)", "hypothalamus, pituitary", "command the other glands"], ["peripheral", "thyroid, parathyroid, adrenal, pineal", "their only job is making hormones"], ["dual-purpose", "pancreas, thymus, ovary, testis", "they make hormones and also do another job"]])}${pearl("Even the heart makes hormones: the atria secrete ANP, which helps lower blood pressure. The kidney also makes renin and erythropoietin.")}`),
          M("Which gland is called the “master gland”?", ["pituitary", "thyroid", "thymus", "pancreas"], "Pituitary hormones regulate the work of many other glands; the pituitary itself is under the command of the hypothalamus.", null, F('body-map')),
          P("Match each gland to its location", [["thyroid", "front of the neck, below the larynx"], ["adrenal", "on top of the kidneys"], ["pituitary", "under the brain, in the sella turcica"], ["thymus", "behind the breastbone, above the heart"], ["pancreas", "behind the stomach"]]),
          T("The parathyroid glands lie on the back surface of the thyroid.", true, "True; para- means “beside”. They are usually four small glands."),
          M("Which organ is “dual-purpose”, making hormones and also doing another job in the body?", ["pancreas", "thyroid", "parathyroid", "pineal"], "The pancreas also makes digestive enzymes. The thyroid, parathyroid and pineal make only hormones."),
          L("Glands and their hormones", `${tbl([["gland", "Main hormones"], ["pituitary", "GH, TSH, ACTH, FSH, LH, PRL, ADH, oxytocin"], ["thyroid", "T3, T4, calcitonin"], ["parathyroid", 'PTH'], ["adrenal", "cortisol, aldosterone, epinephrine"], ["pancreas", "insulin, glucagon"], ["pineal", "melatonin"], ["thymus", "thymus hormone that matures T cells"], ["gonads", "estrogen, progesterone, testosterone"]])}${memo("This table is the treasure map of the whole course; each world opens one of its rows.")}`),
          P("Match each hormone to its gland", [['insulin', "pancreas"], ['melatonin', "pineal"], ['cortisol', "adrenal"], ['thymosin', "thymus"], ['calcitonin', "thyroid"]]),
          S("Spell the one-word name of the master gland", 'pituitary', "pituitary; careful: pi-TU-i-tary (two i’s).", 'pitu…'),
          N('f2t:lx')
        ]
      },

      /* ================= سطح ۲: قطعه‌های پازل ================= */
      {
        id: 'lx4', title: "The anatomy of a word", icon: '🧩', items: [
          L("Every medical word is a puzzle", `Most medical words are built from a few fixed pieces:<br>• <b>prefix</b> (${e('prefix')}) at the start: ${e('hyper-')} = excessive<br>• <b>root</b> (${e('root')}) in the middle: ${e('thyroid')} = thyroid<br>• <b>suffix</b> (${e('suffix')}) at the end: ${e('-ism')} = condition${fig('wordparts', '', "hyperthyroidism: condition of excessive thyroid activity = overactive thyroid.")}`),
          L("The combining vowel o", `A root is usually joined to the next piece with a <b>combining vowel</b> (mostly o). Root + vowel is called the <b>combining form</b> (${e('combining form')}) and is written with a slash: ${e('thyr/o')}, ${e('adren/o')}.<br><br>Golden rule: if the suffix starts with a <b>vowel</b>, the o drops:<br>• ${e('thyr/o + -itis')} → <b>thyroiditis</b> (not thyrooitis)<br>• ${e('thyr/o + -megaly')} → <b>thyromegaly</b> (the o stays)${memo("The o is like “glue”: it is needed between two consonants; when the suffix itself starts with a vowel, the glue is extra.")}`),
          M(`In the word ${e('<b>adrenalitis</b>')}, why is there no o?`, ["because the suffix -itis starts with a vowel", "because adrenal is a prefix", "because the o is always dropped", "because the word is Latin"], "adrenal/o + -itis: the suffix starts with i, so no o is needed."),
          L("Read the meaning from the end", `To find the meaning, <b>start from the suffix</b>, then the prefix, and read the root last:<br>${wb('hypo-', 'glyc/o', '-emia')} → “condition of the blood” + “low” + “sugar” = <b>low blood sugar</b><br>${wb('adren/o', '-megaly')} → “enlargement of” + “adrenal”<br>${wb('pancreat/o', '-itis')} → “inflammation of” + “pancreas”${memo("First ask “what happened?” (suffix), then “how much?” (prefix) and finally “where?” (root).")}`),
          P("Match each piece to its type", [['hyper-', "prefix"], ['thyr/o', "root plus combining vowel"], ['-ism', "suffix"], ["the o in glyc/o", "combining vowel"]]),
          O(`Arrange the parts of ${e('hypoglycemia')} in writing order`, ['hypo-', 'glyc/o', '-emia'], "hypo- (low) + glyc/o (sugar) + -emia (blood condition). Written from left to right; interpreted from the end."),
          T(`In ${e('thyromegaly')} the o stays, because the suffix -megaly starts with a consonant.`, true, "True; thyr + o + megaly."),
          B("In the word hyperthyroidism, the piece ___ is the prefix.", ['hyper-', 'thyroid', '-ism'], "hyper- = excessive; thyroid is the root and -ism the suffix."),
          W("Build a word meaning “inflammation of the pancreas”", ['pancreat/o', '-itis'], ['-oma', 'aden/o', '-megaly'], 'pancreat/o + -itis = pancreatitis.'),
          S("Spell the term for an overactive thyroid", 'hyperthyroidism', 'hyper- + thyroid + -ism.', 'hyper…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx5', title: "Gland roots", icon: '🏷️', items: [
          L("One root per gland", `${tbl([["root", "Meaning", "Example"], [e('aden/o'), "gland (any gland)", e('adenoma')], [e('adren/o, adrenal/o'), "adrenal gland", e('adrenalectomy')], [e('thyr/o, thyroid/o'), "thyroid", e('thyroiditis')], [e('parathyr/o'), "parathyroid", e('parathyroidectomy')], [e('hypophys/o, pituitar/o'), "pituitary", e('hypophysectomy')], [e('pancreat/o'), "pancreas", e('pancreatitis')], [e('thym/o'), "thymus", e('thymoma')], [e('gonad/o'), "gonads", e('gonadotropin')]])}${memo("thyr/o means “shield”: the thyroid cartilage looks like a Greek warrior’s shield.")}`),
          L("Two dangerous pairs", `${vs(['aden/o', "any gland: adenoma, adenitis"], ['adren/o', "only the adrenal gland: adrenomegaly"])}${vs(['thyr/o', "thyroid in the neck"], ['thym/o', "thymus in the chest"])}${memo(`${e('adren')} = ${e('ad')} (near) + ${e('ren')} (kidney): the gland “near the kidney”. One extra r changes the meaning from “any gland” to “adrenal”!`)}`),
          M(`${e('<b>adenoma</b>')} means…`, ["benign tumour of a gland", "adrenal tumour", "inflammation of a gland", "thyromegaly"], "aden/o (gland) + -oma (tumour); it can be in any gland."),
          M(`Which organ is removed in an ${e('<b>adrenalectomy</b>')}?`, ["adrenal gland", "any gland", "kidney", "thyroid"], "adrenal/o = adrenal; -ectomy = removal."),
          T(`${e('thymectomy')} means removal of the thyroid.`, false, "False; thym/o is the thymus. Removal of the thyroid is thyroidectomy."),
          P("Match each root to its gland", [['pancreat/o', "pancreas"], ['hypophys/o', "pituitary"], ['thym/o', "thymus"], ['adren/o', "adrenal"], ['gonad/o', "gonads"]]),
          L("Two names for the pituitary", `The pituitary has two roots:<br>• ${e('hypophys/o')}: from ${e('hypo')} (under) + ${e('physis')} (growth), because it grows <b>under</b> the hypothalamus → <b>hypophysectomy</b><br>• ${e('pituitar/o')}: from the Latin ${e('pituita')} (phlegm), because the ancients thought it made nasal mucus! → <b>hypopituitarism</b>${pearl("In operation reports you usually see hypophysectomy, and in describing disease hypopituitarism; both refer to the same gland.")}`),
          B("The root ___, like pituitar/o, means pituitary.", ['hypophys/o', 'hypothalam/o', 'thyr/o'], "hypophysis is another name for the pituitary gland."),
          W("Build a word meaning “removal of the pituitary”", ['hypophys/o', '-ectomy'], ['pituitar/o', '-tomy', '-itis'], 'hypophys/o + -ectomy = hypophysectomy.'),
          S("Spell the term for a benign gland tumour", 'adenoma', 'aden/o + -oma.', 'aden…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx6', title: "Twin prefixes", icon: '👯', items: [
          L("Most gland diseases: too much or too little", `Almost every gland disease comes either from <b>too much</b> secretion or from <b>too little</b>:${fig('hyper-hypo', '', "Hypersecretion usually comes from a tumour and is treated with surgery or drugs; hyposecretion usually with replacement hormone.")}${vs(['hyper-', "excessive, above normal: hyperthyroidism"], ['hypo-', "below normal, under: hypothyroidism"])}${memo(`Remember ${e('hypo')} with “hippo”: always <b>under</b> water. ${e('hyper')} is like a “hypermarket”: more than enough!`)}`),
          M(`${e('<b>hypoglycemia</b>')} means…`, ["low blood sugar", "high blood sugar", "sugar in the urine", "excessive thirst"], "hypo- (low) + glyc/o (sugar) + -emia (blood condition)."),
          L("Other common prefixes", `${tbl([["prefix", "Meaning", "Example"], [e('eu-'), "good, normal", e('euthyroid')], [e('pan-'), "all", e('panhypopituitarism')], [e('poly-'), "many", e('polyuria')], [e('para-'), "beside", e('parathyroid')], [e('supra-'), "above", e('suprarenal')], [e('epi-'), "on, over", e('epinephrine')], [e('ex-, exo-'), "outside", e('exophthalmos')], [e('anti-'), "against", e('antidiuretic')]])}`),
          P("Match each prefix to its meaning", [['eu-', "normal"], ['pan-', "all"], ['para-', "beside"], ['supra-', "above"], ['poly-', "many"]]),
          M(`The patient is ${e('<b>euthyroid</b>')}. That means…`, ["the thyroid works normally", "the thyroid is overactive", "the thyroid is underactive", "there is no thyroid"], "eu- = good, normal. For example, after treatment the patient becomes “euthyroid”."),
          T(`${e('suprarenal')} and ${e('adrenal')} both mean the gland that sits on (beside) the kidney.`, true, "True; supra- (above) and ad- (near) + ren/o (kidney). epinephrine says the same with the Greek root nephr/o."),
          L("Three prefixes in one word", `${wb('pan-', 'hypo-', 'pituitar/o', '-ism')} → <b>panhypopituitarism</b><br>Read from the end: “condition” + “all” + “underactivity” + “pituitary” = underactivity of <b>all</b> the pituitary hormones.${pearl("In a patient with a large pituitary tumour or bleeding after childbirth, all the axes (thyroid, adrenal, gonads) may shut down at once.")}`),
          B("In exophthalmos, the prefix ___ means “out”.", ['ex-', 'eu-', 'epi-'], "ex- (out) + ophthalm/o (eye): bulging of the eyes."),
          W("Build a word meaning “underactivity of all pituitary hormones”", ['pan-', 'hypo-', 'pituitar/o', '-ism'], ['hyper-', 'poly-', '-itis'], 'pan- + hypo- + pituitar/o + -ism = panhypopituitarism.'),
          N('m2r:lx')
        ]
      },

      /* ================= سطح ۳: مثل یک حرفه‌ای ================= */
      {
        id: 'lx7', title: "Suffixes for diseases and symptoms", icon: '🌡️', items: [
          L("Everyday suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-ism'), "condition, state", e('hypothyroidism')], [e('-itis'), "inflammation", e('thyroiditis')], [e('-oma'), "tumour", e('insulinoma')], [e('-megaly'), "enlargement", e('acromegaly')], [e('-pathy'), "disease", e('adrenopathy')], [e('-osis'), "condition (abnormal)", e('ketosis')]])}${memo("-ism is just “condition”, not a specific disease; the prefix hyper- or hypo- decides what kind of condition.")}`),
          L("Three fluid suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-emia'), "blood condition", e('hypercalcemia')], [e('-uria'), "urine condition", e('glycosuria')], [e('-dipsia'), "thirst", e('polydipsia')]])}And the roots for chemicals in the blood:<br>${e('calc/o')} calcium • ${e('kal/i')} potassium • ${e('natr/o')} sodium • ${e('gluc/o, glyc/o')} sugar${memo(`${e('kal')} comes from kalium (the Latin name for potassium, symbol K) and ${e('natr')} from natrium (symbol Na). Know the chemical symbol and you know the root!`)}`),
          M(`${e('<b>hyponatremia</b>')} means…`, ["low blood sodium", "high blood potassium", "low blood calcium", "low blood sugar"], "hypo- + natr/o (sodium) + -emia."),
          P("Match each root to its substance", [['calc/o', "calcium"], ['kal/i', "potassium"], ['natr/o', "Sodium"], ['glyc/o', "sugar"], ['iod/o', "Iodine"]]),
          M(`${e('<b>glycosuria</b>')} means…`, ["sugar in the urine", "sugar in the blood", "excessive urine", "excessive thirst"], "glycos/o (sugar) + -uria (urine condition)."),
          T(`${e('hyperkalemia')} means high blood calcium.`, false, "False; kal/i is potassium. High blood calcium is hypercalcemia. Don’t mix these two words up!"),
          B("polydipsia means excessive ___.", ["thirst", "urine", "hunger"], "poly- (much) + -dipsia (thirst). Excessive urine is polyuria."),
          O(`Put the pieces of ${e('hypercalcemia')} in order`, ['hyper-', 'calc/o', '-emia'], "hyper- (excessive) + calc/o (calcium) + -emia (blood condition)."),
          W("Build a word meaning “high blood potassium”", ['hyper-', 'kal/i', '-emia'], ['hypo-', 'calc/o', 'natr/o'], 'hyper- + kal/i + -emia = hyperkalemia.'),
          S("Spell the term for “excessive urination”", 'polyuria', 'poly- + -uria.', 'poly…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: "Hormone and surgical suffixes", icon: '🔪', items: [
          L("Suffixes you see in hormone names", `${tbl([["suffix", "Meaning", "Example"], [e('-tropin / -tropic'), "stimulating (another gland)", e("thyrotropin, gonadotropic")], [e('-gen'), "producing", e("androgen, estrogen")], [e("-ine, -in, -one"), "chemical", e("thyroxine, insulin, aldosterone")], [e('-genesis'), "Build", e('glycogenesis')], [e('-lysis'), "breakdown", e('glycogenolysis')]])}${memo(`Picture ${e('-tropin')} as a “troupe” that puts on a show for another gland to get it working.`)}`),
          M(`A ${e('<b>gonadotropin</b>')} is a hormone that…`, ["stimulates the sex glands", "is made by the sex glands", "lowers blood sugar", "inhibits the thyroid gland"], "gonad/o (sex glands) + -tropin (stimulating): like FSH and LH."),
          T(`${e('androgen')} means “producing male (characteristics)”.`, true, "True; andr/o (man) + -gen (producer), like testosterone. estr/o + -gen = estrogen, the female hormone."),
          L("Cutting or removing?", `The two surgical suffixes that get mixed up most:${vs(['-tomy', "cutting: thyrotomy (incision of the thyroid)"], ['-ectomy', "removing: thyroidectomy (removal of the thyroid)"])}${memo(`${e('ec-')} is Greek for “out”: ${e('ec + tomy')} = cut and <b>take out</b>. Without ec it is just a cut.`)}${pearl("After an endocrine gland is removed, its hormone must be replaced for life; for example, levothyroxine tablets after thyroidectomy.")}`),
          M(`${e('<b>pancreatectomy</b>')} means…`, ["pancreatectomy", "pancreatotomy", "inflammation of the pancreas", "pancreatic tumour"], "pancreat/o + -ectomy. Incision of the pancreas is pancreatotomy."),
          P("Match each suffix to its meaning", [['-ectomy', "removal"], ['-tomy', "incision"], ['-logy', "study of"], ['-logist', "specialist"], ['-genesis', "formation, production"]]),
          B("Making glycogen from glucose is called glycogen___.", ['esis', 'olysis', 'emia'], "glycogenesis = making glycogen; glycogenolysis = breaking down glycogen."),
          M("Which word means “breakdown of glycogen into glucose”?", ['glycogenolysis', 'glycogenesis', 'gluconeogenesis', 'glycosuria'], "glycogen/o + -lysis (breakdown). Glucagon does this in the liver."),
          W("Build a word meaning “removal of an adrenal gland”", ['adrenal/o', '-ectomy'], ['-tomy', 'aden/o', '-megaly'], 'adrenal/o + -ectomy = adrenalectomy.'),
          S("Spell the term for removal of the thyroid", 'thyroidectomy', 'thyroid/o + -ectomy.', 'thyroid…'),
          N('sp:lx')
        ]
      },
      {
        id: 'lx9', title: "Look-alike Traps", icon: '🎯', items: [
          L("Three sweet “gl”s", `Three similar words that swap places in exams:${tbl([["Term", "What is it?", "Role"], [e('glucose'), "simple sugar", "Cell fuel"], [e('glycogen'), "stored sugar", "sugar store in the liver and muscle"], [e('glucagon'), "Hormone", "releasing sugar from glycogen"]])}${memo(`${e('glucaGON')}: when sugar has “gone”, glucagon brings it back. ${e('glycoGEN')}: “generating” and storing sugar.`)}`),
          M("Which one is a hormone?", ['glucagon', 'glucose', 'glycogen', 'glycosuria'], "glucagon is the hormone of the pancreatic alpha cells; glucose is sugar and glycogen the stored form of sugar."),
          L("More look-alikes", `${tbl([["Look-alike 1", "Look-alike 2"], [e('hypercalcemia') + " high calcium", e('hyperkalemia') + " high potassium"], [e('polyuria') + " excessive urination", e('polyurea') + " a plastic (industrial coating)!"], [e('pancreas') + " a body organ", e('pancrease') + " the name of a drug"], [e('glycogenesis') + " making glycogen", e('glucogenesis') + " making glucose"]])}`),
          T(`${e('polyurea')} is one of the signs of diabetes.`, false, "False; the sign of diabetes is polyuria (excessive urination). Polyurea is an industrial polymer! One letter changes the meaning completely."),
          L("Two diabetes, two different worlds", `In Greek ${e('diabetes')} means “siphon, passing through”; a reference to excessive urine.${vs(['diabetes mellitus', "mellitus = honeyed; sweet urine from sugar; an insulin problem"], ['diabetes insipidus', "insipidus = tasteless; dilute urine; lack of ADH"])}${pearl("Both come with excessive urination and thirst, but their causes are completely different. When just “diabetes” is said, it almost always means diabetes mellitus.")}`),
          M("Which diabetes is caused by a lack of antidiuretic hormone (ADH)?", ['diabetes insipidus', 'diabetes mellitus', 'gestational diabetes', 'type 2 diabetes'], "insipidus (tasteless): a lot of dilute urine, without sugar."),
          L("Eponyms", `Some diseases are named after the person who described them: ${e('Graves disease')}, ${e('Addison disease')}, ${e('Cushing syndrome')}, ${e('Hashimoto thyroiditis')}.<br>Today they are mostly written without the possessive “’s” (Addison disease), because the patient did not “catch” the disease from Addison; Addison “discovered” it.${memo("Root analysis does not work for these names; link each to a picture: Graves → bulging eyes, Cushing → moon face, Addison → bronzed skin.")}`),
          P("Match each name to its hallmark sign", [['Graves disease', "bulging eyes"], ['Cushing syndrome', "moon face"], ['Addison disease', "bronzed skin"], ['Hashimoto thyroiditis', "autoimmune underactive thyroid"]]),
          L("Latin singular and plural", `${tbl([["Singular", "Plural"], [e('testis'), e('testes')], [e('ovary'), e('ovaries')], [e('islet'), e('islets')], [e('cortex'), e('cortices')]])}${pearl("In reports you will read “bilateral testes descended” or “adrenal cortices”; know the Latin plurals so you don’t get confused.")}`),
          S("Spell the term for the alpha-cell hormone that raises blood sugar", 'glucagon', "gluc/o + agon; careful: one c, and it ends in -gon.", 'gluca…'),
          N('ab:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* هورمونا — دنیای ۱: هیپوتالاموس و هیپوفیز
 * منابع: فصل‌های Endocrine System پیوست (Pituitary and hypothalamus، Pituitary Disorders، Box 9-4)
 * سطح ۱: فرمانده و ارکستر • سطح ۲: هورمون‌های هیپوفیز • سطح ۳: اختلال‌های هیپوفیز
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'hp', sym: 'Hp', name: "Hypothalamus and Pituitary", short: "pituitary", sub: "The brain’s commanders, stimulating hormones, growth hormone, ADH and pituitary disorders",
    color: '#8E44D9', dark: '#6A2FB0', light: '#F0E6FB',
    levels: ["The commander and the orchestra", "Pituitary hormones", "Pituitary disorders"],
    gens: EA.genIds('hp'),
    lessons: [
      /* ================= سطح ۱: فرمانده و ارکستر ================= */
      {
        id: 'hp1', title: "The hypothalamus: bridge between nerve and hormone", icon: '🌉', items: [
          L("The conductor’s conductor", `${e('<b>hypothalamus</b>')} is a small part of the brain <b>below the thalamus</b>:<br>${wb('hypo-', 'thalam/o', '-us')} → “below the thalamus”<br>The hypothalamus is both part of the nervous system and an endocrine gland; it senses the state of the body and gives orders to the pituitary.${memo("If the pituitary is the “conductor” of the glands, the hypothalamus is the “composer” who hands the conductor the score.")}`),
          L("Two kinds of order", `The hypothalamus controls the anterior pituitary with two kinds of hormone:${vs(['releasing factor', "releasing factor: “secrete!”, like TRH"], ['inhibiting factor', "inhibiting factor: “don’t secrete!”"])}In addition, it makes two <b>neurohormones</b> (${e('neurohormone')}): ${e('ADH')} and ${e('oxytocin')}. These two are <b>stored</b> in the posterior pituitary and released from there.`),
          M("Where are ADH and oxytocin made?", ["in the hypothalamus", "in the anterior pituitary", "in the kidney", "in the thyroid"], "They are made in the hypothalamus and stored and released in the posterior pituitary. A common exam trap!"),
          T("The hypothalamus belongs to both the nervous system and the endocrine system.", true, "True; it is made of neurons, but it also secretes hormones."),
          L("What does the hypothalamus regulate?", `Body temperature, thirst and water balance, hunger, blood pressure and heart rate, the sleep cycle and the stress response.${pearl("A head injury or surgery near the hypothalamus can disrupt all the hormonal axes; for example, a patient may suddenly pass huge amounts of urine (diabetes insipidus).")}`),
          B("A hormone from the hypothalamus that tells the pituitary “secrete” is called a ___ factor.", ["releasing", "inhibiting", "antidiuretic"], "releasing factor (RH); its opposite is an inhibiting factor."),
          P("Match each term to its meaning", [['hypothalamus', "part of the brain below the thalamus"], ['neurohormone', "a hormone made by a neuron"], ['releasing factor', "order to secrete"], ['inhibiting factor', "order to stop secreting"]]),
          M(`The prefix ${e('hypo-')} in hypothalamus means…`, ["below", "underactive", "excessive", "beside"], "Here hypo- means “below” (position), not “too little”."),
          S("Spell the term for the brain region below the thalamus", 'hypothalamus', 'hypo- + thalam/o + -us.', 'hypotha…'),
          N('t2f:hp')
        ]
      },
      {
        id: 'hp2', title: "The pituitary: the master gland", icon: '👑', items: [
          L("A pea in a Turkish saddle", `The ${e('<b>pituitary gland</b>')} or ${e('<b>hypophysis</b>')} is a gland the size of a <b>pea</b> that hangs from the hypothalamus by a stalk (${e('infundibulum')}) and sits in a bony hollow called the <b>Turkish saddle</b> (${e('sella turcica')}) in the sphenoid bone.${fig('pituitary', '', "The pituitary has two lobes: anterior (adenohypophysis) and posterior (neurohypophysis).")}`),
          L("Two lobes, two worlds", `${vs(['adenohypophysis', "anterior lobe; aden/o = gland: it makes its own hormones (GH, TSH, ACTH, FSH, LH, PRL)"], ['neurohypophysis', "posterior lobe; neur/o = nerve: it only stores and releases hypothalamic hormones (ADH, oxytocin)"])}${memo("The anterior lobe is the “factory”; the posterior lobe is the “warehouse”.")}`),
          M("What is the posterior lobe of the pituitary called?", ['neurohypophysis', 'adenohypophysis', 'infundibulum', 'sella turcica'], "neur/o (nerve) + hypophysis; it is really an extension of the hypothalamus’s nerve tissue.", null, F('pituitary')),
          T("The sella turcica is a gland that makes growth hormone.", false, "False; the sella turcica is the bony hollow in which the pituitary sits."),
          P("Match each part to its description", [['adenohypophysis', "anterior lobe, the hormone factory"], ['neurohypophysis', "posterior lobe, the store for ADH and oxytocin"], ['infundibulum', "stalk connecting to the hypothalamus"], ['sella turcica', "bony seat of the pituitary"]]),
          L("Why the “master gland”?", `Many anterior lobe hormones switch on other glands: the thyroid, adrenal cortex, ovary and testis. That is why the pituitary is called the <b>master gland</b>.${pearl("A pituitary tumour usually shows on a skull X-ray or MRI as an “enlarged sella turcica”.")}`),
          B("In size, the pituitary is like a ___.", ["pea", "walnut", "apple"], "A pea-sized gland; even so, it commands most of the glands."),
          M(`${e('<b>hypophysial</b>')} means…`, ["relating to the pituitary", "hypophysectomy", "hypophysitis", "hypopituitarism"], "hypophysi/o + -al (relating to); sometimes written hypophyseal."),
          W("Build a word meaning “inflammation of the pituitary”", ['hypophys/o', '-itis'], ['-ectomy', 'pituitar/o', '-oma'], 'hypophys/o + -itis = hypophysitis.'),
          S("Spell the scientific name of the pituitary gland", 'hypophysis', "hypo- (below) + physis (growth).", 'hypoph…'),
          N('r2m:hp')
        ]
      },
      {
        id: 'hp3', title: "Stimulating hormones (-tropin)", icon: '🎛️', items: [
          L("Hormones that switch on another gland", `The suffix ${e('-tropin')} (noun) or ${e('-tropic')} (adjective) means “stimulating”. The tropic hormones of the pituitary:${tbl([["Hormone", "Full name", "Target"], [e('TSH'), e('thyroid-stimulating hormone'), "thyroid"], [e('ACTH'), e('adrenocorticotropic hormone'), "adrenal cortex"], [e('FSH'), e('follicle-stimulating hormone'), "ovarian follicle, sperm production"], [e('LH'), e('luteinizing hormone'), "ovulation, testosterone"]])}${memo("The name gives the address: thyroid-stimulating = stimulates the thyroid; adreno-cortico-tropic = stimulates the adrenal cortex.")}`),
          M(`Which gland does ${e('<b>ACTH</b>')} stimulate?`, ["adrenal cortex", "the adrenal medulla", "thyroid", "ovary"], "adreno (adrenal) + cortico (cortex) + tropic (stimulating) → cortisol secretion."),
          O(`Put the pieces of ${e('adrenocorticotropic')} in order`, ['adren/o', 'cortic/o', '-tropic'], "adren/o (adrenal) + cortic/o (cortex) + -tropic (stimulating)."),
          L("Gonadotropins", `${e('FSH')} and ${e('LH')} together are called ${e('<b>gonadotropins</b>')} (${e('gonad/o')} = sex glands).<br>• In women: FSH stimulates growth of the follicle (egg), and LH stimulates ovulation and formation of the <b>corpus luteum</b> (${e('lute/o')} = yellow → luteinizing).<br>• In men: FSH stimulates sperm production, and LH (also called ${e('ICSH')} in men) stimulates testosterone secretion.`),
          T("FSH and LH are both gonadotropins.", true, "True; both stimulate the sex glands (gonads)."),
          M(`What does ${e('LH')} do in women?`, ["ovulation and formation of the corpus luteum", "milk production", "uterine contraction", "high blood sugar"], "luteinizing = making yellow; it turns the ruptured follicle into the corpus luteum."),
          P("Match each abbreviation to its full name", [['TSH', 'thyroid-stimulating hormone'], ['ACTH', 'adrenocorticotropic hormone'], ['FSH', 'follicle-stimulating hormone'], ['LH', 'luteinizing hormone'], ['ICSH', 'interstitial cell-stimulating hormone']]),
          B("Another name for TSH is thyro___.", ['tropin', 'xine', 'toxicosis'], "thyrotropin = thyroid stimulator."),
          W("Build a word meaning “hormone stimulating the sex glands”", ['gonad/o', '-tropin'], ['thyr/o', '-gen', 'andr/o'], 'gonad/o + -tropin = gonadotropin.'),
          S("Spell the abbreviation for the hormone that stimulates the adrenal cortex", 'ACTH', 'adrenocorticotropic hormone.', 'AC…'),
          N('ab:hp')
        ]
      },

      /* ================= سطح ۲: هورمون‌های هیپوفیز ================= */
      {
        id: 'hp4', title: "Growth hormone, prolactin and MSH", icon: '📏', items: [
          L("growth hormone", `${e('<b>growth hormone</b>')} (${e('GH')}) or ${e('<b>somatotropin</b>')}:<br>${wb('somat/o', '-tropin')} → “body stimulator”<br>It stimulates the growth of bones, muscles and most tissues and is secreted mostly at the <b>start of deep sleep</b>.${memo("The old belief that “children grow in their sleep” has a scientific basis!")}${pearl("Today GH is made by genetic engineering and prescribed for short children with GH deficiency (human growth hormone therapy).")}`),
          M(`${e('<b>somatotropin</b>')} is another name for which hormone?`, ["growth hormone", "prolactin", "oxytocin", "melatonin"], "somat/o (body) + -tropin (stimulating) = growth hormone. Its other abbreviation is STH."),
          L("Prolactin: the milk hormone", `${wb('pro-', 'lact/o', '-in')} → ${e('<b>prolactin</b>')} (${e('PRL')})<br>“For milk”: it stimulates breast growth and milk <b>production</b> after birth. Its other name is ${e('lactogenic hormone')} (${e('LTH')}).${vs(['prolactin', "makes milk (anterior lobe)"], ['oxytocin', "ejects milk (posterior lobe)"])}`),
          T("Prolactin ejects milk from the breast.", false, "False; prolactin “makes” milk. Ejecting milk (milk let-down) is the job of oxytocin."),
          L("MSH: skin colour", `${e('<b>melanocyte-stimulating hormone</b>')} (${e('MSH')}) stimulates skin melanocytes to make the pigment melanin (${e('melan/o')} = black).${pearl("In Addison disease the patient’s skin darkens (bronzes), because the pituitary makes a lot of ACTH and MSH-like hormones to make up for the lack of cortisol.")}`),
          P("Match each hormone to its effect", [['GH', "bone and muscle growth"], ['PRL', "milk production"], ['MSH', "skin pigment"], ['TSH', "thyroid stimulation"]]),
          M("Which anterior pituitary hormone is not “tropic”, meaning it does not stimulate another gland?", ["prolactin", 'TSH', 'ACTH', 'FSH'], "Prolactin (and MSH) act directly on tissue (breast, skin), not on another gland."),
          B("The prefix pro- and root lact/o in prolactin mean “for ___”.", ["milk", "Growth", "sleep"], "lact/o and galact/o both mean milk."),
          W("Build a word meaning “growth hormone” (body stimulator)", ['somat/o', '-tropin'], ['gonad/o', '-gen', 'thyr/o'], 'somat/o + -tropin = somatotropin.'),
          S("Spell the term for the hormone that makes breast milk", 'prolactin', 'pro- + lact/o + -in.', 'prola…'),
          N('f2t:hp')
        ]
      },
      {
        id: 'hp5', title: "The posterior pituitary: ADH and oxytocin", icon: '💧', items: [
          L("antidiuretic hormone", `${wb('anti-', 'diuret', '-ic')} → ${e('<b>antidiuretic hormone</b>')} (${e('ADH')})<br>“Against excessive urine”: it tells the kidney tubules to <b>reabsorb water</b>, so the urine becomes scantier and more concentrated.<br>Its other name is ${e('<b>vasopressin</b>')}, because it narrows the vessels and raises blood pressure (${e('vas/o')} = vessel).${memo("ADH is like a “dam”: it holds water back in the body.")}`),
          M("What effect does ADH have on the kidney?", ["it increases water reabsorption and urine falls", "it increases water loss", "it increases sugar loss", "it stops urine production"], "anti-diuretic = against excessive urine; water stays in the body."),
          T("Vasopressin and ADH are the same hormone.", true, "True; vasopressin is the name that refers to its vessel-narrowing effect."),
          L("Oxytocin: swift birth", `${e('<b>oxytocin</b>')} (${e('OXT')}), from the Greek ${e('oxytokos')}, “swift birth”:<br>• it stimulates uterine contractions during labour;<br>• it ejects milk from the breast (${e('milk let-down')}).${pearl("In the delivery room, synthetic oxytocin is given to induce labour or control bleeding after birth. A lack of it can contribute to uterine inertia (the uterus stops contracting).")}`),
          P("Match each hormone to its target and effect", [['ADH', "kidney: water reabsorption"], ['oxytocin', "uterus: contraction in labour"], ['vasopressin', "vessels: narrowing"], ['prolactin', "breast: milk production"]]),
          M("Which hormone plays a part in both labour and breastfeeding?", ['oxytocin', 'ADH', 'GH', 'TSH'], "Uterine contraction and milk let-down are both the work of oxytocin."),
          M("In this figure, which two hormones are released from the posterior lobe (P)?", ["ADH and OXT", "GH and PRL", "TSH and ACTH", "FSH and LH"], "The posterior lobe releases only these two hypothalamic hormones.", null, F('pit-targets')),
          B("Antidiuretic hormone is abbreviated ___.", ['ADH', 'ACTH', 'OXT'], 'antidiuretic hormone = ADH.'),
          S("Spell the term for the hormone of labour contractions and milk let-down", 'oxytocin', "oxy (swift) + tocin (birth).", 'oxy…'),
          N('d2t:hp')
        ]
      },
      {
        id: 'hp6', title: "Table of pituitary hormones", icon: '📋', items: [
          L("All at a glance", `${fig('pit-targets', '', "Six hormones from the anterior lobe (A) and two from the posterior lobe (P); each arrow reaches a target tissue.")}`),
          L("Synonymous abbreviations", `Some hormones have two names and two abbreviations:${tbl([["Hormone", "Abbreviations"], ["growth hormone", e("GH, hGH, STH (somatotropic hormone)")], ["prolactin", e("PRL, LTH (lactogenic hormone)")], ["LH in men", e('ICSH')], ['ADH', e('vasopressin')], ["oxytocin", e('OXT')]])}${memo("For exams, learn each hormone as “abbreviation + target”; for example, “ACTH → adrenal”.")}`),
          P("Match each abbreviation to its meaning", [['STH', "growth hormone"], ['LTH', "prolactin"], ['OXT', "oxytocin"], ['MSH', "melanocyte-stimulating"], ['ICSH', "LH in men"]]),
          M("Which hormone is not made in the anterior pituitary?", ['ADH', 'TSH', 'GH', 'PRL'], "ADH is made by the hypothalamus and released by the posterior pituitary."),
          M(`A lab sheet says “${e('TSH: 0.05 mIU/L')} (low)”. Where is this hormone secreted from?`, ["anterior pituitary", "thyroid", "hypothalamus", "posterior pituitary"], "TSH is a pituitary hormone, even though it is measured to assess the thyroid. A low TSH usually means an overactive thyroid (negative feedback)."),
          T("The tropic hormones are made only in the anterior lobe of the pituitary.", true, "True; TSH, ACTH, FSH and LH all come from the adenohypophysis."),
          O("Put the route of ADH in order", ["made in the hypothalamus", "travelling down the pituitary stalk", "stored in the posterior pituitary", "released into the blood and acting on the kidney"], "ADH is a neurohormone: made in a neuron, stored in the neurohypophysis."),
          B("The hormones that include FSH and LH are called ___.", ["gonadotropins", "steroid anti-inflammatory drug", "catecholamines"], 'gonadotropins.'),
          M("Which pair is correct?", ["PRL → breast", "ACTH → thyroid", "TSH → adrenal", "OXT → kidney"], "PRL acts on the mammary glands. The other pairs are mixed up."),
          N('ab:hp')
        ]
      },

      /* ================= سطح ۳: اختلال‌های هیپوفیز ================= */
      {
        id: 'hp7', title: "Growth hormone: too much or too little", icon: '🧍', items: [
          L("Timing decides the type of disease", `${fig('growth', '', "If GH is high before the bone growth plates close, height increases; after that, only the extremities and face enlarge.")}${tbl([["condition", "time", "Result"], [e('gigantism'), "too much GH before puberty", "very tall, with almost normal proportions"], [e('acromegaly'), "too much GH after puberty", "enlarged hands, feet, jaw and face"], [e('dwarfism'), "too little GH in childhood", "short, with normal proportions"]])}`),
          L("Acromegaly", `${wb('acr/o', '-megaly')} → ${e('<b>acromegaly</b>')}: “enlargement of the extremities”<br>The hands and feet, lower jaw, nose, lips and brows enlarge. The usual cause: a <b>pituitary adenoma</b>.${fig(['acromegaly-drawing', 'acromegaly-hands'], ["Front and profile views: enlarged jaw and nose", "Broad, thick hands"], "Acromegaly is usually diagnosed at 30 to 40, after years of excess GH.")}${memo("acr/o, as in “acrobat”: someone who walks on the “tips” of their toes; it means the tips and ends of the body.")}`),
          M("A 40-year-old man says his ring no longer fits and his shoes feel tight; his lower jaw has also come forward. The most likely diagnosis?", ['acromegaly', 'gigantism', 'dwarfism', 'myxedema'], "Excess GH in an adult → enlarged extremities and face = acromegaly.", [["Age", "40 years"], ["Complaint", "ring and shoes getting tight"], ["examination", "large lower jaw, broad hands"]]),
          L("Gigantism and short stature", `${e('<b>gigantism</b>')} (${e('giantism')}): excess GH in childhood; height may exceed 2 metres 40 centimetres.<br>${e('<b>pituitary dwarfism</b>')}: too little GH in childhood; very short but with normal body proportions.${fig(['gigantism-twins', 'giant-dwarf'], ["Identical twins: one with gigantism", "Gigantism, normal height and short stature"], "The difference between the two identical twin brothers comes only from excess GH secretion in one of them.")}`),
          T("In pituitary dwarfism the body proportions are distorted.", false, "False; height is short but proportions are normal. Short stature with abnormal proportions more often has a genetic cause or congenital hypothyroidism."),
          P("Match each condition to its cause", [['gigantism', "too much GH before puberty"], ['acromegaly', "too much GH after puberty"], ['pituitary dwarfism', "too little GH in childhood"]]),
          M("What is the treatment for a short child with GH deficiency?", ["growth hormone (somatropin) before the growth plates close", "hypophysectomy", "radioactive iodine", "insulin"], "While the bones are still growing (checked with a wrist X-ray), GH increases final height."),
          B("The word acromegaly is built from acr/o, meaning ___, and -megaly, meaning enlargement.", ["extremities", "gland", "body"], "acr/o = extremities (hands, feet, face)."),
          W("Build a word meaning “enlargement of the extremities”", ['acr/o', '-megaly'], ['somat/o', '-itis', 'aden/o'], 'acr/o + -megaly = acromegaly.'),
          S("Spell the term for excessive height from childhood GH excess", 'gigantism', 'gigant + -ism.', 'gigan…'),
          N('t2f:hp')
        ]
      },
      {
        id: 'hp8', title: "ADH: diabetes insipidus and SIADH", icon: '🚰', items: [
          L("Low ADH: diabetes insipidus", `${e('<b>diabetes insipidus</b>')} (${e('DI')}): the posterior pituitary does not release enough ADH (usually after a head injury, surgery or a tumour).<br>The kidney cannot hold on to water → large volumes of <b>dilute, tasteless</b> urine (${e('insipidus')} = tasteless).<br>Two main signs: ${e('polyuria')} (excessive urination) and ${e('polydipsia')} (excessive thirst).${fig('adh', '', "Low ADH: water is lost. High ADH (SIADH): water is retained and blood sodium becomes diluted.")}`),
          M("Which combination best describes diabetes insipidus?", ["low ADH, a lot of dilute urine, severe thirst", "low insulin, sugar in the urine", "high ADH, water retention", "high cortisol, moon face"], "DI = lack of ADH; dilute urine without sugar."),
          L("High ADH: SIADH", `${e('<b>syndrome of inappropriate ADH</b>')} (${e('SIADH')}): ADH is secreted beyond need and “inappropriately”.<br>Water is retained, the blood is diluted and sodium falls: ${e('<b>hyponatremia</b>')}.${pearl("“Aquaretic” drugs such as tolvaptan increase water loss without much sodium loss and are used to treat hyponatremia from SIADH.")}`),
          P("Match each condition to its description", [['diabetes insipidus', "low ADH, a lot of urine"], ['SIADH', "high ADH, water retention"], ['polyuria', "excessive urine"], ['polydipsia', "excessive thirst"], ['hyponatremia', "low blood sodium"]]),
          T("In diabetes insipidus, the urine is full of sugar.", false, "False; the urine is dilute and sugar-free. Sugar in the urine (glycosuria) is a sign of diabetes mellitus."),
          M("After a severe head injury, Mrs Marcy passes more than 8 litres of dilute urine a day and is constantly thirsty. Which part is probably damaged?", ["the hypothalamus or posterior pituitary", "pancreas", "adrenal cortex", "thyroid"], "Making or releasing ADH is disrupted → diabetes insipidus.", [["history of", "head injury"], ["urine", "8 litres a day, dilute"], ["blood sugar", "normal"]]),
          B("In SIADH, blood sodium becomes ___.", ["low", "many", "normal"], "Excess water dilutes the sodium → hyponatremia."),
          M("Which drug treats diabetes insipidus?", ["vasopressin (a synthetic form of ADH)", 'insulin', 'levothyroxine', 'methimazole'], "We replace the missing hormone."),
          W("Build a word meaning “excessive thirst”", ['poly-', '-dipsia'], ['-uria', 'hypo-', '-phagia'], 'poly- + -dipsia = polydipsia.'),
          S("Spell the word meaning “tasteless” in the name of ADH-deficiency diabetes", 'insipidus', "insipidus = tasteless.", 'insip…'),
          N('sp:hp')
        ]
      },
      {
        id: 'hp9', title: "Pituitary tumours, failure and surgery", icon: '🧠', items: [
          L("Overactive and underactive pituitary", `${vs(['hyperpituitarism', "oversecretion of one or more hormones; often from an adenoma"], ['hypopituitarism', "undersecretion of one or more hormones; from a tumour, injury or loss of blood supply"])}${e('<b>panhypopituitarism</b>')}: a lack of <b>all</b> the pituitary hormones. Its old name is ${e('Simmonds disease')}, and it comes with severe wasting (${e('cachexia')}), tiredness and loss of sexual characteristics.`),
          M("A patient presents with underactive thyroid, adrenal and sex glands all at once. Where is the main problem?", ["panhypopituitarism (complete pituitary failure)", 'Hashimoto thyroiditis', 'Addison disease', 'diabetes mellitus'], "When all the axes are switched off together, suspect the commander (the pituitary)."),
          L("Pituitary tumours", `${tbl([["Term", "Meaning"], [e('pituitary adenoma'), "benign glandular tumour; often makes GH, ACTH or prolactin"], [e('craniopharyngioma'), "benign tumour near the pituitary (crani/o skull + pharyng/o throat)"], [e('pituitary apoplexy'), "sudden bleeding into a tumour: severe headache and blurred vision"], [e('hyperprolactinemia'), "high prolactin → abnormal milk secretion (galactorrhea)"]])}${pearl("A pituitary tumour presses on the crossing of the optic nerves; that is why the patient may first see an eye doctor.")}`),
          M(`In which condition is ${e('<b>galactorrhea</b>')} seen?`, ["raised prolactin (hyperprolactinemia)", "lack of ADH", "raised GH", "lack of TSH"], "galact/o (milk) + -rrhea (flow): milk secretion without pregnancy or breastfeeding."),
          L("Surgery through the nose", `${e('<b>hypophysectomy</b>')} means removal of the pituitary. Today most tumours are removed by ${e('<b>transsphenoidal hypophysectomy</b>')}:<br>${wb('trans-', 'sphenoid', '-al')} → “through the sphenoid sinus”<br>The surgeon reaches the sella turcica through the nose (or under the upper lip) and the sphenoid sinus, without opening the brain.`),
          O("Put the diagnosis and treatment of acromegaly in order", ["clinical suspicion: enlarged hands and face", "blood test: high GH", "MRI: pituitary adenoma", 'transsphenoidal adenomectomy'], "From signs to tests, imaging and then surgery."),
          T("Cushing disease means high cortisol caused by a pituitary tumour making a lot of ACTH.", true, "True; Cushing “disease” has a pituitary origin; Cushing “syndrome” is high cortisol from any cause."),
          P("Match each term to its meaning", [['hypophysectomy', "hypophysectomy"], ['hypophysitis', "hypophysitis"], ['adenomectomy', "removal of a gland tumour"], ['pituitary apoplexy', "sudden bleeding into the pituitary"]]),
          W("Build a word meaning “underactivity of the pituitary”", ['hypo-', 'pituitar/o', '-ism'], ['hyper-', 'pan-', '-itis'], 'hypo- + pituitar/o + -ism = hypopituitarism.'),
          S("Spell the term for removal of the pituitary", 'hypophysectomy', 'hypophys/o + -ectomy.', 'hypophys…'),
          N('wb:hp')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* هورمونا — دنیای ۲: تیروئید و پاراتیروئید
 * منابع: فصل‌های Endocrine System پیوست (Thyroid، Parathyroid، Graves disease، Case Study Jasmine و Beth)
 * سطح ۱: پروانه گردن • سطح ۲: پرکار، کم‌کار، گواتر • سطح ۳: کلسیم، آزمایش و درمان
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'th', sym: 'Th', name: "Thyroid and Parathyroid", short: "thyroid", sub: "The butterfly of the neck, T3 and T4, iodine, calcium, overactivity and underactivity, goitre, tests and surgery",
    color: '#0FA3A3', dark: '#0B7B7B', light: '#DDF5F4',
    levels: ["The butterfly of the neck", "Overactive, underactive, goitre", "Calcium, tests and treatment"],
    gens: EA.genIds('th'),
    lessons: [
      /* ================= سطح ۱: پروانه گردن ================= */
      {
        id: 'th1', title: "Thyroid anatomy", icon: '🦋', items: [
          L("A butterfly in front of the trachea", `The ${e('<b>thyroid gland</b>')} is a butterfly-shaped gland at the front of the neck, below the larynx and on either side of the trachea:<br>• two <b>lobes</b> (${e('lobe')}), right and left;<br>• a narrow band called the <b>isthmus</b> (${e('isthmus')}) joining the two lobes;<br>• above it, the <b>thyroid cartilage</b>, which forms the bump of the “Adam’s apple” (${e("Adam's apple")}).${fig('thyroid', '', "The patient’s right lobe is on your left in the figure, as when you face the patient.")}`),
          L("Why “thyroid”?", `${wb('thyr/o', '-oid')} → “shield-like”<br>The Greeks saw the cartilage in front of the larynx as a warrior’s <b>shield</b> and named the gland beneath it the same way.${memo("thyr/o = shield; the thyroid protects your neck like a shield and drives the body’s metabolic engine.")}`),
          M("What is the part joining the two thyroid lobes called?", ['isthmus', 'infundibulum', 'cortex', 'medulla'], "isthmus means a narrow neck of land; a narrow band over the front of the trachea.", null, F('thyroid')),
          T("The Adam’s apple is the thyroid gland.", false, "False; the Adam’s apple is the bump of the thyroid cartilage (part of the larynx). The thyroid gland is lower, on either side of the trachea."),
          L("Inside the thyroid", `The thyroid is made of tiny sacs called <b>follicles</b>, filled with a jelly-like fluid called <b>colloid</b> (${e('colloid')}). Hormones are stored in the colloid until they are needed in the blood.${pearl("The thyroid weighs only about 30 grams but affects almost every cell in the body.")}`),
          P("Match each part to its description", [['isthmus', "band joining the two lobes"], ['thyroid cartilage', "shield cartilage of the larynx"], ['colloid', "hormone-storing fluid"], ['lobe', "each half of the butterfly"]]),
          B("The thyroid lies on either side of the ___.", ["windpipe", "oesophagus", "heart"], "In front of and on either side of the trachea, below the larynx."),
          M(`${e('<b>thyroidal</b>')} means…`, ["relating to the thyroid", "removal of the thyroid", "thyroiditis", "thyromegaly"], "thyroid/o + -al (relating to)."),
          S("Spell the term for the band joining the two thyroid lobes", 'isthmus', "isthmus; the th in the middle is silent: IS-mus.", 'isth…'),
          N('r2m:th')
        ]
      },
      {
        id: 'th2', title: "T3, T4 and iodine", icon: '⚙️', items: [
          L("The hormones of the metabolic engine", `The thyroid makes two main hormones that set the rate of <b>metabolism</b> in all cells:${fig('iodine', '', "The number in the abbreviation is the number of iodine atoms: T4 has four, T3 three.")}${tbl([["abbreviation", "Name", "Note"], [e('T4'), e('thyroxine') + ' / ' + e('tetraiodothyronine'), "more plentiful"], [e('T3'), e('triiodothyronine'), "more active"]])}`),
          L("Iodine: the raw material", `${e('iod/o')} = iodine. The thyroid takes iodine from the blood and uses it to make T3 and T4. Sources of iodine: seafood, dairy products and <b>iodized salt</b>.${pearl("In the past, iodine deficiency was common in areas far from the sea and created a “goitre belt”. Adding iodine to salt has almost solved this problem in most countries, including Iran.")}`),
          M(`What does the 4 in ${e('T4')} stand for?`, ["four iodine atoms", "four parathyroid glands", "four lobes", "a four-hour lifespan"], "tetra- = four; tri- = three."),
          O(`Put the pieces of ${e('triiodothyronine')} in order`, ['tri-', 'iod/o', 'thyronine'], "tri- (three) + iod/o (iodine) + thyronine (the base compound of thyroid hormone, ending in -ine)."),
          L("basal metabolism", `${e('<b>basal metabolic rate</b>')} (${e('BMR')}): the least energy the body uses at rest. Thyroid hormone is the BMR’s “accelerator pedal”:<br>• heat production and body temperature<br>• heart rate<br>• growth and brain development in children<br>In the blood, ${e('T4')} and ${e('T3')} are mostly bound to a protein called ${e('TBG')} (${e('thyroxine-binding globulin')}).${memo("Picture the thyroid as the body’s “thermostat and accelerator”: too much and the engine runs fast and hot; too little and it runs slow and cold.")}`),
          T("Without enough iodine, the thyroid cannot make T3 and T4.", true, "True; iodine is part of the structure of these hormones."),
          L("calcitonin", `The thyroid also has a third hormone: ${e('<b>calcitonin</b>')} (${e('CT')}). When blood calcium rises, calcitonin moves calcium into <b>bone</b> and <b>lowers</b> blood calcium.${wb('calc/i', 'ton', '-in')}${memo("calci-TONE-in: it “tones down” calcium.")}`),
          P("Match each hormone to its job", [['T4', "the main, plentiful thyroid hormone"], ['T3', "the more active form, three iodines"], ['calcitonin', "lowering blood calcium"], ['TSH', "stimulating the thyroid from the pituitary"]]),
          B("The abbreviation BMR means basal ___ rate.", ["metabolic", "sugar", "pressure"], 'basal metabolic rate.'),
          S("Spell the term for the main thyroid hormone (T4)", ['thyroxine', 'thyroxin'], "thyroxine (and sometimes thyroxin).", 'thyrox…'),
          N('ab:th')
        ]
      },
      {
        id: 'th3', title: "Parathyroid and calcium", icon: '🦴', items: [
          L("Four small seeds behind the butterfly", `${wb('para-', 'thyroid')} → ${e('<b>parathyroid glands</b>')}: “beside the thyroid”<br>Usually <b>four</b> small glands (two upper, two lower) on the <b>back</b> surface of the thyroid that make only one hormone: ${e('<b>parathyroid hormone</b>')} (${e('PTH')}) or ${e('parathormone')}.${fig('parathyroid', '', "Back view: the superior and inferior parathyroids.")}`),
          L("PTH and calcitonin: a seesaw", `${fig('calcium', '', "PTH brings calcium from bone into the blood; calcitonin does the opposite.")}When blood calcium is low, PTH raises it in three ways:<br>1. releasing calcium from <b>bone</b><br>2. keeping calcium in the <b>kidney</b><br>3. activating <b>vitamin D</b> to absorb calcium from the gut${memo("PTH = “Pull The calcium High”: pull the calcium up!")}`),
          M("When blood calcium falls, which hormone is secreted?", ['PTH', 'calcitonin', 'thyroxine', 'insulin'], "PTH raises blood calcium; calcitonin lowers it.", null, F('calcium')),
          T("Calcitonin and PTH have the same effect on blood calcium.", false, "False; their effects are opposite: PTH raises calcium and calcitonin lowers it."),
          L("Why does calcium matter?", `Calcium is not only for bone; muscles need it to contract, nerves to send signals and the blood to clot.${pearl("Because the parathyroids are attached to the thyroid, they may be damaged in thyroid surgery. After a thyroidectomy, the nurse watches for signs of low calcium: tingling around the mouth and fingers and muscle spasms.")}`),
          P("Match each term to its meaning", [['parathyroid', "beside the thyroid"], ['parathormone', "parathyroid hormone"], ['calc/o', "calcium"], ['calcitonin', "calcium-lowering hormone"]]),
          M("The prefix para- in parathyroid means…", ["beside", "many", "below", "all"], "para- = beside, near."),
          B("There are usually ___ parathyroid glands.", ["four", "two", "six"], "Two pairs, upper and lower; sometimes 4 to 6."),
          W("Build a word meaning “removal of the parathyroids”", ['parathyroid/o', '-ectomy'], ['thyroid/o', '-tomy', '-itis'], 'parathyroid/o + -ectomy = parathyroidectomy.'),
          S("Spell the term for the thyroid hormone that lowers blood calcium", 'calcitonin', 'calci- + ton + -in.', 'calci…'),
          N('t2f:th')
        ]
      },

      /* ================= سطح ۲: پرکار، کم‌کار، گواتر ================= */
      {
        id: 'th4', title: "The overactive thyroid", icon: '🔥', items: [
          L("An engine running fast", `${e('<b>hyperthyroidism</b>')}: oversecretion of thyroid hormones.<br>${fig('thyroid-compare', '', "Whatever is “high and fast” in hyperthyroidism is “low and slow” in hypothyroidism.")}${e('<b>thyrotoxicosis</b>')} (${e('thyr/o')} + ${e('toxic/o')} poison + ${e('-osis')}): a state in which the body is “poisoned” by thyroid hormone: palpitations, hand tremor, sweating, restlessness and weight loss.`),
          L("Graves disease", `${e('<b>Graves disease</b>')} is the commonest cause of hyperthyroidism: an <b>autoimmune</b> disease in which antibodies act like TSH and keep the thyroid switched on.<br>Three hallmark signs: an overactive thyroid, a <b>goitre</b> and ${e('<b>exophthalmos</b>')} (bulging eyes).${fig(['graves-eyes', 'graves-drawing'], ["Bulging eyes in Graves disease", "Teaching view of exophthalmos"], "Swelling of the tissue behind the eyeball pushes the eyes forward.")}`),
          M(`${e('<b>exophthalmos</b>')} means…`, ["bulging of the eyeball", "eye inflammation", "dry eyes", "blurred vision"], "ex- (out) + ophthalm/o (eye).", null, F('graves-woman')),
          M("Jasmine, a 35-year-old teacher, has been restless for months, cannot sleep at night, cannot tolerate heat, has lost weight and her eyes bulge. Her thyroid is enlarged. The most likely diagnosis?", ['Graves disease', 'Hashimoto thyroiditis', 'myxedema', 'Addison disease'], "Hyperthyroidism + goitre + exophthalmos = Graves.", [["Patient", "Jasmine, 35 years old"], ["Complaint", "restlessness, insomnia, sweating"], ["examination", "exophthalmos, enlarged thyroid, tachycardia"], ["test", "high T3 and T4"]]),
          L("thyroid storm", `${e('<b>thyroid storm</b>')} (${e('thyroid crisis')}): a sudden, dangerous flare-up of thyrotoxicosis in an untreated patient, usually after illness, infection or injury: high fever, very fast heartbeat and agitation.${pearl("Thyroid storm is a medical emergency, and the patient must be admitted to hospital immediately.")}`),
          T("In hyperthyroidism, the patient usually cannot tolerate cold and gains weight.", false, "False; these are signs of hypothyroidism. In hyperthyroidism, the patient cannot tolerate heat and loses weight."),
          P("Match each term to its meaning", [['thyrotoxicosis', "thyroid hormone poisoning"], ['exophthalmos', "bulging eyes"], ['tachycardia', "fast heartbeat"], ['thyroid storm', "sudden, dangerous worsening"]]),
          B("The commonest cause of hyperthyroidism is ___ disease.", ["Graves", "Addison", "Hashimoto"], 'Graves disease (diffuse toxic goiter).'),
          W("Build a word meaning “thyroid poisoning”", ['thyr/o', 'toxic/o', '-osis'], ['-itis', 'hyper-', '-megaly'], 'thyr/o + toxic/o + -osis = thyrotoxicosis.'),
          S("Spell the term for bulging of the eyes", 'exophthalmos', "ex- + ophthalm/o + -os; watch the phth.", 'exoph…'),
          N('d2t:th')
        ]
      },
      {
        id: 'th5', title: "The underactive thyroid", icon: '❄️', items: [
          L("An engine running slow", `${e('<b>hypothyroidism</b>')}: undersecretion of thyroid hormone. Everything slows down: tiredness, sleepiness, weight gain, cold intolerance, dry skin, hair loss, constipation and a slow heartbeat.<br>The commonest cause: ${e('<b>Hashimoto thyroiditis</b>')}, an <b>autoimmune</b> inflammation of the thyroid that gradually destroys its tissue.${memo("Graves and Hashimoto are both autoimmune but opposites: Graves “steps on the accelerator”, Hashimoto “hits the brakes”.")}`),
          L("Myxedema: advanced hypothyroidism", `${e('<b>myxedema</b>')} (${e('myx/o')} mucus + ${e('-edema')} swelling): severe hypothyroidism in adults with dry, waxy swelling of the face, puffy eyelids, thick lips and nose, and slow movement and speech.${fig('myxedema', "Puffy, expressionless face in myxedema", "With hormone treatment, this appearance gradually reverses.")}`),
          M("Which autoimmune disease is the commonest cause of hypothyroidism?", ['Hashimoto thyroiditis', 'Graves disease', 'Cushing syndrome', 'diabetes insipidus'], "Hashimoto = chronic lymphocytic thyroiditis."),
          L("Congenital hypothyroidism", `${e('<b>congenital hypothyroidism</b>')} (old name: ${e('cretinism')}): lack of thyroid hormone from birth. Untreated, the child’s physical and mental growth stops: a large protruding tongue, a puffy face and delayed development.${fig('cretinism-infant', "Baby with congenital hypothyroidism", "With early screening and treatment, the child grows completely normally.")}${pearl("That is why, in Iran and many other countries, a blood sample is taken from the heel of every newborn in the first days of life (newborn TSH screening).")}`),
          T("If congenital hypothyroidism is diagnosed and treated early, the child can grow normally.", true, "True; treatment with synthetic thyroxine prevents the damage."),
          M("What is the modern name for cretinism?", ['congenital hypothyroidism', 'myxedema', 'Graves disease', 'thyroid storm'], "congenital + hypothyroidism."),
          L("Normal thyroid", `${e('<b>euthyroid</b>')} (${e('eu-')} = good, normal): a patient whose thyroid works normally. The aim of treatment, in both hyperthyroidism and hypothyroidism, is to make the patient euthyroid.`),
          P("Match each condition to its description", [['myxedema', "severe hypothyroidism in an adult"], ['congenital hypothyroidism', "hypothyroidism from birth"], ['Hashimoto thyroiditis', "autoimmune inflammation of the thyroid"], ['euthyroid', "Normal thyroid"]]),
          B("Waxy facial swelling in severe adult hypothyroidism is called ___.", ['myxedema', 'exophthalmos', 'tetany'], "myx/o (mucus) + -edema (swelling)."),
          W("Build a word meaning “underactive thyroid”", ['hypo-', 'thyroid/o', '-ism'], ['hyper-', '-itis', 'para-'], 'hypo- + thyroid/o + -ism = hypothyroidism.'),
          S("Spell the term for waxy facial swelling in severe adult hypothyroidism", 'myxedema', 'myx/o + -edema.', 'myx…'),
          N('f2t:th')
        ]
      },
      {
        id: 'th6', title: "Goitre and nodules", icon: '🔵', items: [
          L("Goitre: an enlarged thyroid", `${e('<b>goiter</b>')} (from the Latin ${e('guttur')} = throat) means enlargement of the thyroid, seen as a swelling at the front of the neck. Its other scientific name is ${e('<b>thyromegaly</b>')}.<br>A goitre is only a “sign”, and thyroid function may be high, low or normal.${fig(['iodine-goiter', 'large-goiter'], ["Goitre from iodine deficiency", "A very large goitre"], "A simple goitre usually comes from iodine deficiency in the diet.")}`),
          L("Types of goitre", `${tbl([["Type", "Description"], [e('simple (nontoxic) goiter'), "from iodine deficiency; thyroid function usually normal"], [e('toxic goiter'), "a goitre that makes too much hormone → hyperthyroidism"], [e('diffuse toxic goiter'), "another name for Graves"], [e('nodular goiter'), "nodular goitre"]])}${fig(['diffuse-goiter', 'nodular-goiter'], ["Small diffuse goitre (Graves)", "Large nodular goitre"], '')}`),
          M("Which statement about goitre is correct?", ["a goitre means an enlarged thyroid and may come with overactivity, underactivity or normal function", "a goitre is always a sign of cancer", "a goitre is seen only in hyperthyroidism", "a goitre means inflammation of the parathyroid"], "Goitre describes the gland’s “size”, not its “function”."),
          L("Thyroid nodule", `${e('<b>thyroid nodule</b>')}: a solid or fluid-filled lump inside the thyroid. Most nodules are <b>benign</b> (such as an ${e('adenoma')}), but they are investigated to rule out ${e('thyroid carcinoma')} (thyroid cancer).${pearl("Thyroid ultrasound (thyroid echography) tells a solid nodule from a fluid cyst; a thyroid scan shows whether a nodule is “cold” or “hot”.")}`),
          T(`${e('thyromegaly')} and ${e('goiter')} both mean enlargement of the thyroid.`, true, "True; thyr/o + -megaly."),
          P("Match each type of goitre to its description", [['simple goiter', "iodine deficiency"], ['toxic goiter', "with hyperthyroidism"], ['nodular goiter', "lumpy"], ['thyroid carcinoma', "thyroid cancer"]]),
          M("What is the commonest cause of simple goitre worldwide?", ["iodine deficiency in the diet", "a pituitary tumour", "Calcium deficiency", "too much insulin"], "Without iodine, the thyroid enlarges to compensate."),
          B("Inflammation of the thyroid is called thyroid___.", ['itis', 'ectomy', 'megaly'], 'thyroid/o + -itis = thyroiditis.'),
          W("Build a word meaning “enlargement of the thyroid”", ['thyr/o', '-megaly'], ['-itis', 'aden/o', 'acr/o'], 'thyr/o + -megaly = thyromegaly.'),
          S("Spell the term for an enlarged thyroid gland", ['goiter', 'goitre'], "goiter (goitre in British English).", 'goi…'),
          N('wb:th')
        ]
      },

      /* ================= سطح ۳: کلسیم، آزمایش و درمان ================= */
      {
        id: 'th7', title: "Parathyroid disorders", icon: '⚡', items: [
          L("Too much PTH: bones and stones", `${e('<b>hyperparathyroidism</b>')}: oversecretion of PTH, usually from a parathyroid <b>adenoma</b>.<br>Calcium is pulled out of bone → ${e('<b>hypercalcemia</b>')}, thinning and pain of the bones, and <b>kidney stones</b> (${e('renal calculi')}).<br>The severe form of the bone damage is called ${e('Recklinghausen disease')}.${memo("For hyperparathyroidism: “Bones, Stones, Groans”; painful bones, kidney stones and groaning from abdominal pain.")}`),
          L("Too little PTH: tetany", `${e('<b>hypoparathyroidism</b>')}: low PTH → ${e('<b>hypocalcemia</b>')} (low blood calcium).<br>Low calcium makes nerves and muscles “irritable”: tingling around the mouth (${e('perioral')}) and fingers, and ${e('<b>tetany</b>')}, painful muscle spasms, especially sharp bending of the wrists and feet, and even seizures (${e('convulsions')}).${pearl("The commonest cause of hypoparathyroidism is accidental damage to or removal of the parathyroids in thyroid surgery; treatment: calcium (such as calcium gluconate) and vitamin D.")}`),
          M("A day after thyroid surgery, a patient complains of tingling around the mouth and fingers, and the hands cramp. What has happened?", ["hypocalcaemia from damage to the parathyroids", "hypercalcaemia", "thyroid storm", "lack of ADH"], "Tetany and perioral numbness = low calcium → hypoparathyroidism.", [["surgery", "thyroidectomy yesterday"], ["Complaint", "tingling around the mouth and fingers"], ["examination", "wrist spasm"], ["serum calcium", "down"]]),
          P("Match each condition to its sign", [['hyperparathyroidism', "kidney stones and bone pain"], ['hypoparathyroidism', "tetany and tingling"], ['hypercalcemia', "high blood calcium"], ['hypocalcemia', "low blood calcium"]]),
          T("Tetany is a sign of high blood calcium.", false, "False; tetany is a sign of “low” blood calcium (hypocalcemia)."),
          M("What is the commonest cause of primary hyperparathyroidism (PHPT)?", ["a benign adenoma of one parathyroid", "iodine deficiency", "Vitamin D deficiency", "removal of the thyroid"], "PHPT = primary hyperparathyroidism. The secondary form is seen mostly in chronic kidney failure."),
          B("High blood calcium is called hyper___emia.", ['calc', 'kal', 'natr'], "hypercalcemia; don’t confuse it with hyperkalemia (potassium)."),
          O(`Put the pieces of ${e('hypoparathyroidism')} in order`, ['hypo-', 'parathyroid/o', '-ism'], "hypo- (low) + parathyroid/o + -ism (condition)."),
          W("Build a word meaning “low blood calcium”", ['hypo-', 'calc/o', '-emia'], ['hyper-', 'kal/i', '-uria'], 'hypo- + calc/o + -emia = hypocalcemia.'),
          S("Spell the term for painful muscle spasms from low calcium", 'tetany', "tetany: spasm from low calcium (don’t confuse it with tetanus, lockjaw).", 'teta…'),
          N('sp:th')
        ]
      },
      {
        id: 'th8', title: "Thyroid tests and imaging", icon: '🔬', items: [
          L("Blood tests", `${tbl([["test", "What does it measure?"], [e('TFT (thyroid function test)'), "levels of T3, T4 and TSH"], [e('TSH'), "the most sensitive screening test"], [e("free T4, FTI (T7)"), "free thyroxine index"], [e('TBG'), "the thyroxine-carrying protein"], [e('PBI'), "protein-bound iodine (an old way of measuring T4)"], [e('RIA'), "a very sensitive method of measuring hormones with radioactive materials"]])}`),
          L("Read TSH the other way round!", `Because of <b>negative feedback</b>, TSH usually moves opposite to the thyroid hormones:${vs(["overactive thyroid", "T3 and T4 high → TSH low"], ["underactive thyroid", "T3 and T4 low → TSH high"])}${memo("TSH is like “the pituitary’s shout”: the lazier the thyroid, the louder the pituitary shouts (higher TSH).")}`),
          M("In primary hypothyroidism (such as Hashimoto), what is the TSH level?", ["up", "down", "normal", "zero"], "Low T4 stimulates the pituitary to make more TSH."),
          L("Imaging", `${tbl([["Method", "Use"], [e('RAIU (radioactive iodine uptake)'), "how much radioactive iodine the thyroid absorbs (overactive: a lot)"], [e('thyroid scan'), "image of the thyroid after radioactive iodine: nodules and tumours"], [e('thyroid echography'), "ultrasound: whether a nodule is solid or cystic"]])}${pearl("Diagnostic radioactive iodine is a very small dose, but it is not done in pregnancy.")}`),
          P("Match each test to its use", [['RAIU', "amount of iodine uptake"], ['thyroid scan', "image of nodules and tumours"], ['thyroid echography', "telling a solid nodule from a cyst"], ['TFT', "levels of T3, T4 and TSH"]]),
          T("In hyperthyroidism from Graves, radioactive iodine uptake (RAIU) is usually high.", true, "True; an overactive gland swallows a lot of iodine to make hormone."),
          M(`What is ${e('<b>radioimmunoassay</b>')}?`, ["measuring tiny amounts of hormone with antibodies and a radioactive label", "surgery with radiation", "imaging with sound", "treatment with iodine"], "radi/o (radiation) + immun/o (immunity) + assay (measurement) = RIA."),
          B("The abbreviation for the radioactive iodine uptake test is ___.", ['RAIU', 'RIA', 'TFT'], 'radioactive iodine uptake.'),
          M(`A lab result reads: “${e('TSH')} low, ${e('free T4')} high”. Which does this pattern favour?`, ["overactive thyroid", "underactive thyroid", "Normal thyroid", "Calcium deficiency"], "High T4 has lowered TSH through negative feedback."),
          N('ab:th')
        ]
      },
      {
        id: 'th9', title: "Thyroid surgery and drugs", icon: '💊', items: [
          L("Operations", `${tbl([["Term", "Meaning"], [e('thyroidectomy'), "removal of the thyroid (total or partial)"], [e('lobectomy'), "removing one lobe"], [e('thyrotomy'), "incision of the thyroid (or thyroid cartilage)"], [e('parathyroidectomy'), "parathyroidectomy"], [e('thyroparathyroidectomy'), "removal of the thyroid and parathyroids"]])}${pearl("Today thyroidectomy is also done by minimally invasive and even robotic methods through the armpit, so no scar is left on the neck.")}`),
          M(`In thyroid surgery, ${e('<b>lobectomy</b>')} means…`, ["removal of one of the two lobes", "removal of the whole thyroid", "incision of the isthmus", "removal of the parathyroids"], "lob/o (lobe) + -ectomy."),
          L("Three ways to treat hyperthyroidism", `${tbl([["Method", "Example"], ["antithyroid drug", e('methimazole (Tapazole)') + ", " + e('propylthiouracil')], ["radioactive iodine", e("RAI, I-131") + ": “chemical thyroidectomy”"], ["surgery", e('thyroidectomy')]])}${memo("Three ways, three words: “pill, iodine, blade”.")}`),
          M("Jasmine (a Graves patient) was given Tapazole to control her hyperthyroidism. Which class is this drug in?", ["antithyroid drug", "thyroid replacement hormone", "steroid anti-inflammatory drug", "blood-sugar-lowering"], "methimazole (Tapazole) blocks the making of thyroid hormone."),
          T("After total removal of the thyroid, the patient must take thyroid hormone for life.", true, "True; with levothyroxine (synthetic T4)."),
          L("Treating hypothyroidism", `Hypothyroidism is treated with <b>replacement hormone</b>: ${e('<b>levothyroxine</b>')} (synthetic T4) or ${e('liothyronine')} (synthetic T3).${pearl("Levothyroxine is usually taken in the morning on an empty stomach with water; the doctor adjusts the dose by the TSH.")}`),
          P("Match each drug or treatment to its use", [['levothyroxine', "underactive thyroid"], ['methimazole', "overactive thyroid"], ['radioactive iodine therapy', "destroying overactive tissue or tumour"], ['calcium gluconate', "low calcium after surgery"]]),
          B("Destroying the thyroid with radioactive iodine instead of surgery is called ___ thyroidectomy.", ["chemical", "laparoscopic", "robotic"], 'chemical thyroidectomy.'),
          W("Build a word meaning “removal of the thyroid and parathyroids”", ['thyr/o', 'parathyroid/o', '-ectomy'], ['-tomy', 'thym/o', '-itis'], 'thyr/o + parathyroid/o + -ectomy = thyroparathyroidectomy.'),
          S("Spell the name of synthetic T4", 'levothyroxine', 'levo + thyroxine.', 'levo…'),
          N('t2f:th')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* هورمونا — دنیای ۳: غدد فوق‌کلیه
 * منابع: فصل‌های Endocrine System پیوست (Adrenals، Cushing، Addison، Pheochromocytoma، Chart note Cushing)
 * سطح ۱: کلاهی روی کلیه • سطح ۲: پرکاری قشر • سطح ۳: کم‌کاری، تومور و درمان
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ad', sym: 'Ad', name: "Adrenal Glands", short: "adrenal", sub: "Cortex and medulla, cortisol, aldosterone, adrenaline, Cushing, Addison and adrenal tumours",
    color: '#E8892B', dark: '#B8651A', light: '#FDEBD7',
    levels: ["A cap on the kidney", "Overactive cortex", "Underactivity, tumours and treatment"],
    gens: EA.genIds('ad'),
    lessons: [
      /* ================= سطح ۱: کلاهی روی کلیه ================= */
      {
        id: 'ad1', title: "Two glands in one", icon: '🎩', items: [
          L("cap of the kidney", `The ${e('<b>adrenal glands</b>')} are two triangular glands that sit like <b>caps</b> on each kidney:<br>${wb('ad-', 'ren/o', '-al')} → “near the kidney”<br>${wb('supra-', 'ren/o', '-al')} → ${e('suprarenal')}: “above the kidney”${fig('adrenal', '', "Each adrenal has two parts that are really two separate glands with different hormones.")}${memo("adrenal and suprarenal mean the same thing; one is built with ad- (near) and the other with supra- (above).")}`),
          L("Cortex and medulla", `${vs(['adrenal cortex', "outer cortex (cortex = tree bark): steroid hormones"], ['adrenal medulla', "inner centre (medulla = marrow): epinephrine and norepinephrine"])}${pearl("In anatomy, cortex always means the outer layer (as in the cortex of the kidney or brain) and medulla the central part. This rule works for every organ.")}`),
          M("What is the outer part of the adrenal gland called?", ['adrenal cortex', 'adrenal medulla', 'renal pelvis', 'capsule only'], "cortex = tree bark; the outer layer.", null, F('adrenal')),
          T(`${e('epinephrine')} and ${e('adrenaline')} are the same hormone, and both mean “on the kidney”.`, true, "True; epi- (upon) + nephr/o (kidney) is Greek and ad- + ren/o Latin. Neither has anything to do with how the kidney works; they only give its position!"),
          P("Match each term to its meaning", [['adrenal', "near the kidney"], ['suprarenal', "above the kidney"], ['cortex', "outer layer"], ['medulla', "central part"]]),
          M("Which roots both mean “kidney”?", ["ren/o and nephr/o", "aden/o and adren/o", "cortic/o and medull/o", "calc/o and kal/i"], "ren/o is Latin and nephr/o Greek."),
          B("Another name for the adrenal glands is the ___ glands.", ['suprarenal', 'parathyroid', 'pineal'], "supra- (above) + ren/o (kidney) + -al."),
          W("Build a word meaning “enlargement of the adrenals”", ['adren/o', '-megaly'], ['aden/o', '-itis', 'ren/o'], 'adren/o + -megaly = adrenomegaly.'),
          S("Spell the adjective for the glands on the kidneys", 'adrenal', 'ad- + ren/o + -al.', 'adre…'),
          N('r2m:ad')
        ]
      },
      {
        id: 'ad2', title: "The adrenal cortex: salt, sugar, sex", icon: '🧂', items: [
          L("Three families of hormone", `All the hormones of the cortex are made from <b>cholesterol</b> and together are called ${e('<b>corticosteroids</b>')}:${fig('cortex-zones', '', "Salt (mineralocorticoids), sugar (glucocorticoids) and sex (gonadocorticoids).")}${memo("The adrenal cortex makes three “S”s: Salt, Sugar, Sex.")}`),
          L("Cortisol: the stress hormone", `${e('<b>cortisol</b>')} (or ${e('hydrocortisone')}) is the most important ${e('glucocorticoid')}:<br>• it raises blood sugar (${e('gluc/o')});<br>• it releases fat and protein for energy;<br>• it suppresses inflammation and the immune response;<br>• it helps the body cope with stress.${pearl("Because cortisol is a strong anti-inflammatory, its drug forms (such as prednisone) are prescribed for asthma, rheumatoid arthritis and autoimmune diseases.")}`),
          M("Which hormone is the most important glucocorticoid?", ['cortisol', 'aldosterone', 'epinephrine', 'androgen'], "gluco (sugar) + cortic (cortex) + oid: cortisol raises blood sugar."),
          L("Aldosterone: the salt hormone", `${e('<b>aldosterone</b>')} is the most important ${e('mineralocorticoid')} and acts on the kidney:<br>• it keeps <b>sodium</b> (${e('Na+')}) and water;<br>• it gets rid of <b>potassium</b> (${e('K+')});<br>• so it keeps blood volume and blood pressure up.${memo("Aldosterone is “salt-loving”: it keeps sodium and throws out potassium.")}`),
          T("Aldosterone keeps potassium in the body and gets rid of sodium.", false, "False; it is the other way round: it keeps sodium and gets rid of potassium."),
          L("gonadocorticoids", `In both women and men, the adrenal cortex also makes a <b>small</b> amount of sex hormone, mostly ${e('<b>androgen</b>')} (${e('andr/o')} = man, ${e('-gen')} = producer), which plays a part in body hair growth and secondary characteristics.`),
          P("Match each family to its example hormone", [['glucocorticoids', 'cortisol'], ['mineralocorticoids', 'aldosterone'], ['gonadocorticoids', 'androgens'], ['catecholamines', 'epinephrine']]),
          M("Which hormone stimulates the adrenal cortex to make cortisol?", ["ACTH from the pituitary", "TSH from the pituitary", "ADH from the hypothalamus", "insulin from the pancreas"], 'adreno-cortico-tropic hormone.'),
          B("The word mineralocorticoid is built from mineral/o, meaning ___.", ["minerals, electrolytes", "sugar", "Male"], "Aldosterone regulates the electrolytes (sodium and potassium)."),
          S("Spell the term for the adrenal salt hormone", 'aldosterone', "ald + ster + -one (chemical suffix).", 'aldo…'),
          N('t2f:ad')
        ]
      },
      {
        id: 'ad3', title: "The medulla: fight or flight", icon: '⚡', items: [
          L("The hormones of the moment of danger", `The adrenal medulla makes two hormones of the ${e('<b>catecholamine</b>')} family:<br>• ${e('<b>epinephrine</b>')} (${e('adrenaline')})<br>• ${e('<b>norepinephrine</b>')} (${e('noradrenaline')})<br>Together with the sympathetic nervous system, these hormones prepare the body for <b>fight or flight</b> (${e('fight-or-flight')}).${fig('stress', '', "Within seconds: a faster heart, higher pressure, quicker breathing, more blood sugar and wider pupils.")}`),
          M("Which hormone is responsible for the “fight-or-flight” response?", ['epinephrine', 'cortisol', 'aldosterone', 'insulin'], "Epinephrine is released from the adrenal medulla within seconds."),
          L("sympathomimetic", `${wb('sympath/o', 'mimet', '-ic')} → ${e('<b>sympathomimetic</b>')}: “imitating the sympathetic system”<br>${e('<b>adrenergic</b>')}: “activated by adrenaline”; drugs that act like adrenaline are called adrenergic.${pearl("In anaphylaxis or cardiac arrest, the first drug is an injection of epinephrine: the same hormone the body makes itself in danger.")}`),
          P("Match each hormone to its main effect", [['epinephrine', "raising heart rate and blood sugar"], ['norepinephrine', "narrowing vessels and raising pressure"], ['cortisol', "coping with long-term stress"], ['aldosterone', "keeping sodium"]]),
          T("The hormones of the adrenal medulla are steroids.", false, "False; catecholamines are made from an amino acid. The hormones of the “cortex” are steroids."),
          M("What is the prefix nor- in norepinephrine?", ["a chemical prefix; the more basic form of the molecule", "it means “normal”", "it means “without”", "it means “much”"], "In chemistry, nor- marks the simpler (parent) form of a compound."),
          O("Put the events of a sudden fright in order", ["seeing danger", "stimulation of sympathetic nerves", "release of epinephrine from the medulla", "raising heart rate and blood sugar"], "The nerve switches on the medulla; the hormone prepares the body."),
          B("Epinephrine and norepinephrine together are called ___.", ["catecholamines", "anti-inflammatory steroid drugs", "Gonadotropins"], 'catecholamines.'),
          W("Build a word meaning “epinephrine” (upon the kidney)", ['epi-', 'nephr/o', '-ine'], ['supra-', 'ren/o', '-al'], 'epi- + nephr/o + -ine = epinephrine.'),
          S("Spell the term for the adrenal medulla’s fight-or-flight hormone", 'epinephrine', 'epi- + nephr/o + -ine.', 'epine…'),
          N('d2t:ad')
        ]
      },

      /* ================= سطح ۲: پرکاری قشر ================= */
      {
        id: 'ad4', title: "Cushing syndrome", icon: '🌕', items: [
          L("Too much cortisol", `${e('<b>Cushing syndrome</b>')}: the set of signs caused by too much cortisol, from any cause.${fig('cushing-signs', '', "Teaching image with a smooth mannequin surface: the signs of too much cortisol from head to toe.")}${tbl([["symptom", "English"], ["round, full face", e('moon face')], ["fat behind the neck", e('buffalo hump')], ["trunk obesity, thin arms and legs", e('truncal obesity')], ["purple stretch marks", e('purple striae')], ["excess hair", e('hirsutism')], ["high blood sugar and pressure", e('hyperglycemia, hypertension')]])}`),
          L("Syndrome or disease?", `${vs(['Cushing syndrome', "too much cortisol from any cause; commonest cause: long-term steroid medication"], ['Cushing disease', "too much cortisol caused by a pituitary tumour making a lot of ACTH"])}${memo("Every “Cushing disease” is a “Cushing syndrome”, but not every syndrome is the disease. “Disease” = origin in the pituitary.")}`),
          M("What is the commonest cause of Cushing syndrome?", ["long-term use of corticosteroid drugs", "a pituitary tumour", "iodine deficiency", "pancreatic tumour"], "Long-term steroid treatment (for example for asthma or arthritis) is the commonest cause."),
          M("A 56-year-old woman presents with trunk obesity, a round face, excess facial hair, swollen legs and osteoporosis. Her cortisol level is high, and CT shows a mass in the right adrenal cortex. Diagnosis?", ["Cushing syndrome from an adrenal adenoma", 'Addison disease', 'pheochromocytoma', 'Graves disease'], "High cortisol + an adrenal cortex mass = Cushing syndrome of adrenal origin. Treatment: adrenalectomy.", [["Age", "56 years old"], ["Signs", "obesity, moon face, hirsutism, edema"], ["cortisol", "up"], ['CT', "adenoma in the right adrenal cortex"]]),
          T("In Cushing syndrome, the arms and legs are usually thin but the trunk is obese.", true, "True; cortisol moves fat to the trunk and face and wastes the limb muscles."),
          L("On examination", `${fig('cushing-face', "Red moon face with excess facial hair", "On examination: a round, full face, red cheeks and excess hair on the chin and upper lip.")}${pearl("A patient with drug-induced Cushing must not stop the steroid suddenly, because their adrenal gland is “asleep” and acute adrenal failure may follow. The drug must be tapered gradually.")}`),
          P("Match each sign to its meaning", [['moon face', "moon face"], ['buffalo hump', "fatty hump behind the neck"], ['striae', "stretch marks on the skin"], ['hirsutism', "excessive hair in women"]]),
          B("Cushing of pituitary tumour origin is called Cushing ___.", ["disease", "syndrome", "storm"], 'Cushing disease.'),
          S("Spell the term for excessive male-pattern hair in women", 'hirsutism', "hirsut (hairy) + -ism.", 'hirsu…'),
          N('f2t:ad')
        ]
      },
      {
        id: 'ad5', title: "Aldosterone and electrolytes", icon: '⚖️', items: [
          L("electrolytes", `${e('<b>electrolytes</b>')}: mineral salts in the blood and tissues that conduct electricity: sodium, potassium, calcium.${tbl([["root", "substance", "symbol"], [e('natr/o'), "Sodium", e('Na+')], [e('kal/i'), "potassium", e('K+')], [e('calc/o'), "calcium", e('Ca')]])}${memo("Na = natrium, K = kalium: the chemical symbol gives away the medical root.")}`),
          L("Too much aldosterone", `${e('<b>hyperaldosteronism</b>')} (${e('aldosteronism')}): too much aldosterone → sodium and water are retained and potassium is lost:<br>• ${e('hypertension')} (high blood pressure)<br>• ${e('hypokalemia')} (low potassium): muscle weakness and cramps<br>If its cause is an adrenal tumour, it is called ${e('<b>Conn syndrome</b>')}.`),
          M("Which finding is expected in Conn syndrome?", ["high blood pressure and low potassium", "low blood pressure and high potassium", "low blood sugar", "high blood calcium"], "Too much aldosterone: sodium and water stay, potassium is lost."),
          L("Word-building with electrolytes", `${tbl([["Term", "Meaning"], [e('hypernatremia'), "high blood sodium"], [e('hyponatremia'), "low blood sodium"], [e('hyperkalemia'), "high blood potassium"], [e('hypokalemia'), "low blood potassium"]])}${pearl("Potassium is vital for the heart; severe hyperkalaemia can disturb the heart rhythm. In Addison disease (lack of aldosterone) potassium rises.")}`),
          P("Match each term to its meaning", [['hyperkalemia', "high blood potassium"], ['hypokalemia', "low blood potassium"], ['hyponatremia', "low blood sodium"], ['hypernatremia', "high blood sodium"]]),
          T("In aldosterone deficiency, blood potassium rises.", true, "True; without aldosterone the kidney does not get rid of potassium → hyperkalemia (for example in Addison disease)."),
          M(`Why is ${e('<b>serum potassium</b>')} measured in assessing the adrenals?`, ["to find tumours that make the body lose a lot of potassium", "to measure iodine", "to measure sugar", "to measure calcium"], "An aldosterone-producing tumour → low serum potassium."),
          B("kal/i means ___ and natr/o means sodium.", ["potassium", "calcium", "sugar"], "kalium = potassium."),
          W("Build a word meaning “low blood potassium”", ['hypo-', 'kal/i', '-emia'], ['hyper-', 'natr/o', 'calc/o'], 'hypo- + kal/i + -emia = hypokalemia.'),
          S("Spell the term for the blood salts that conduct electricity", 'electrolytes', 'electr/o + lyt + -es.', 'electro…'),
          N('wb:ad')
        ]
      },
      {
        id: 'ad6', title: "Androgens and sex characteristics", icon: '🧔', items: [
          L("Too much androgen", `If the adrenal cortex makes too much androgen:<br>• ${e('<b>hirsutism</b>')}: excess hair in a male pattern in a woman (face, chest)<br>• ${e('<b>virilism</b>')} (${e('virilization')}): appearance of male characteristics (deep voice, large muscles, facial hair) in a woman, or early puberty in a boy.<br>${e('viril/o')} = male; ${e('hirsut/o')} = hairy.${memo("Remember viril with “virile” (manly, strong) and hirsute with “hairy”.")}`),
          L("Congenital syndromes", `${e('<b>adrenogenital syndrome</b>')}: overproduction of adrenal androgen that causes “masculinization”.<br>Its commonest congenital cause is ${e('<b>congenital adrenal hyperplasia</b>')} (${e('CAH')}): an inherited lack of an enzyme → low cortisol, high androgen.${pearl("A baby girl with CAH may have ambiguous external genitalia; that is why newborn screening in some countries includes CAH.")}`),
          M(`${e('<b>virilism</b>')} means…`, ["appearance of male characteristics in a woman or early puberty in a boy", "breast enlargement in a male", "absence of periods", "lack of body hair"], "viril/o = male; cause: too much androgen."),
          L("The opposite: feminization", `${e('<b>adrenal feminization</b>')}: appearance of female characteristics in a man because of too much adrenal estrogen.<br>One of its signs is ${e('<b>gynecomastia</b>')}: growth of breast tissue in a man.<br>${wb('gynec/o', 'mast/o', '-ia')} → “condition of a woman’s breast”${fig('gynecomastia', "breast enlargement in a male", "Gynaecomastia can also come from hormonal imbalance, drugs or liver disease.")}`),
          P("Match each term to its meaning", [['hirsutism', "excess male-pattern hair"], ['virilism', "male characteristics in a woman"], ['gynecomastia', "breast growth in a man"], ['adrenogenital syndrome', "too much adrenal androgen"]]),
          T(`In ${e('gynecomastia')}, the root mast/o means breast.`, true, "True; gynec/o (woman) + mast/o (breast) + -ia (condition)."),
          M("Which is correct for the abbreviation CAH?", ['congenital adrenal hyperplasia', 'chronic adrenal hypofunction', 'cortisol and aldosterone hormone', 'calcium and hormone'], "Congenital adrenal hyperplasia."),
          B("Growth of breast tissue in a man is called ___.", ['gynecomastia', 'galactorrhea', 'hirsutism'], 'gynec/o + mast/o + -ia.'),
          W("Build a word meaning “breast enlargement in a man” (condition of a woman’s breast)", ['gynec/o', 'mast/o', '-ia'], ['andr/o', '-gen', '-itis'], 'gynec/o + mast/o + -ia = gynecomastia.'),
          S("Spell the term for development of male characteristics in a woman", ['virilism', 'virilization'], 'viril/o + -ism.', 'viri…'),
          N('m2r:ad')
        ]
      },

      /* ================= سطح ۳: کم‌کاری، تومور و درمان ================= */
      {
        id: 'ad7', title: "Addison disease", icon: '🫥', items: [
          L("too little cortisol and aldosterone", `${e('<b>Addison disease</b>')} (${e('adrenal insufficiency')} or ${e('hypoadrenalism')}): underactivity of the adrenal cortex, mostly from <b>autoimmune</b> destruction.${fig('cushing-addison', '', "Cushing and Addison are the two opposite poles of cortisol.")}${tbl([["deficiency of", "Result"], ["cortisol", "weakness, tiredness, weight loss, low blood sugar"], ["aldosterone", "low blood pressure, low sodium, high potassium, dehydration"], ["(high ACTH)", "bronzed darkening of the skin: hyperpigmentation"]])}`),
          M("Which combination most favours Addison disease?", ["weakness, low blood pressure, bronzed skin and high potassium", "trunk obesity, moon face and high pressure", "bulging eyes and goitre", "excessive urine and sugar in the urine"], "Lack of cortisol and aldosterone with darkened skin.", null, F('cushing-addison')),
          T("In Addison disease, the skin darkens because the pituitary makes a lot of ACTH.", true, "True; ACTH and MSH are made from the same parent molecule, and high ACTH also stimulates the melanocytes."),
          L("treatment", `The missing hormones are replaced: ${e('hydrocortisone')} (or cortisone) in place of cortisol and a mineralocorticoid in place of aldosterone, with enough salt.${pearl("A patient with Addison disease needs a higher steroid dose under stress (infection, surgery, an accident); otherwise an “Addisonian crisis” with a severe drop in blood pressure may follow. They should always carry a medical alert card.")}`),
          P("Match each term to its meaning", [['hypoadrenalism', "hypoadrenalism"], ['hyperadrenalism', "hyperadrenalism"], ['adrenal insufficiency', "adrenal insufficiency"], ['hyperpigmentation', "darkening of the skin"]]),
          M("In Addison disease, besides cortisol, a lack of which hormone lowers blood pressure?", ['aldosterone', 'epinephrine', 'insulin', 'calcitonin'], "Without aldosterone, sodium and water are lost → dehydration and a drop in pressure."),
          O("Put the consequences of aldosterone deficiency in order", ["low aldosterone", "loss of sodium and water through the kidney", "decreased blood volume", "drop in blood pressure and dizziness"], "The chain salt → water → volume → pressure."),
          B("Underactivity of the adrenal cortex, named after its discoverer, is ___ disease.", ["Addison", "Cushing", "Graves"], "Thomas Addison, an English physician."),
          W("Build a word meaning “underactivity of the adrenals”", ['hypo-', 'adrenal/o', '-ism'], ['hyper-', 'aden/o', '-itis'], 'hypo- + adrenal/o + -ism = hypoadrenalism.'),
          S("Spell the surname of the doctor who described adrenal insufficiency", 'Addison', "Addison disease; with a double d.", 'Add…'),
          N('t2f:ad')
        ]
      },
      {
        id: 'ad8', title: "Adrenal tumours and diseases", icon: '🎯', items: [
          L("pheochromocytoma", `${e('<b>pheochromocytoma</b>')}: a usually benign tumour of the adrenal <b>medulla</b> that makes a lot of epinephrine and norepinephrine.<br>${wb('phe/o', 'chrom/o', 'cyt/o', '-oma')} → “tumour of cells that stain dark”<br>Its signs come in attacks: <b>very high blood pressure</b>, severe headache, palpitations and sweating.${memo("The three “P”s of pheo: Pressure, Pain (headache), Perspiration + Palpitation.")}`),
          M("A young man has sudden attacks of severe headache, sweating, palpitations and blood pressure of 220. Which tumour is suspected?", ['pheochromocytoma', 'insulinoma', 'thymoma', 'craniopharyngioma'], "A tumour of the adrenal medulla with too much catecholamine."),
          T("Pheochromocytoma arises from the adrenal cortex and makes a lot of aldosterone.", false, "False; it arises from the “medulla” and makes catecholamines. An aldosterone-producing tumour causes Conn syndrome."),
          L("General adrenal terms", `${tbl([["Term", "Meaning"], [e('adrenomegaly'), "enlargement of the adrenal glands"], [e('adrenalitis'), "inflammation of an adrenal gland"], [e('adrenopathy'), "any adrenal disease (adrenalopathy)"], [e('hyperadrenalism'), "adrenal overactivity, often from a tumour"], [e('adenocarcinoma'), "glandular cancer"]])}`),
          P("Match each term to its meaning", [['adrenomegaly', "enlargement of the adrenal glands"], ['adrenalitis', "inflammation of an adrenal gland"], ['adrenopathy', "adrenal disease"], ['pheochromocytoma', "medullary tumour"]]),
          M(`The suffix ${e('-oma')} in pheochromocytoma means…`, ["tumour", "inflammation", "enlargement", "disease"], '-oma = tumor.'),
          B("The tumour of the adrenal medulla that raises blood pressure very high is called ___.", ['pheochromocytoma', 'insulinoma', 'adenoma of pituitary'], 'phe/o + chrom/o + cyt/o + -oma.'),
          O(`Put the pieces of ${e('pheochromocytoma')} in order`, ['phe/o', 'chrom/o', 'cyt/o', '-oma'], "dark + colour + cell + tumour."),
          W("Build a word meaning “inflammation of an adrenal gland”", ['adrenal/o', '-itis'], ['aden/o', '-oma', 'ren/o'], 'adrenal/o + -itis = adrenalitis.'),
          S("Spell the term for the adrenal medulla tumour that causes very high blood pressure", 'pheochromocytoma', 'pheo + chromo + cyt + oma.', 'pheo…'),
          N('sp:ad')
        ]
      },
      {
        id: 'ad9', title: "Tests, surgery and drugs", icon: '🏥', items: [
          L("Adrenal tests", `${tbl([["test", "Use"], [e('serum cortisol'), "cortisol in blood or saliva: Cushing or Addison"], [e('ACTH'), "telling a pituitary origin from an adrenal one"], [e('serum potassium'), "potassium-wasting tumours"], ["urine catecholamines", "pheochromocytoma"], [e('CT / MRI'), "finding an adrenal mass"]])}`),
          M("To tell “Cushing disease” (pituitary) from an “adrenal tumour”, which hormone is measured?", ['ACTH', 'TSH', 'insulin', 'PTH'], "In Cushing disease ACTH is high; with an adrenal tumour ACTH is low (negative feedback)."),
          L("surgery", `${e('<b>adrenalectomy</b>')}: removal of one or both adrenals.<br>${e('<b>laparoscopic adrenalectomy</b>')}: through several small abdominal incisions with a camera (${e('lapar/o')} = abdomen, ${e('-scopic')} = viewing).${pearl("After both adrenals are removed, the patient must take replacement cortisol and mineralocorticoid for life.")}`),
          M(`${e('<b>laparoscopic</b>')} means…`, ["relating to viewing inside the abdomen with a camera", "large chest incision", "imaging with radiation", "removal of the kidney"], "lapar/o (abdomen) + -scopic (examination by viewing)."),
          L("Corticosteroid drugs", `${e('<b>corticosteroids</b>')} such as ${e('prednisone')} and ${e('hydrocortisone')}:<br>• replacement therapy in Addison disease;<br>• strong anti-inflammatories in asthma, rheumatoid arthritis and autoimmune diseases.<br>Side effects of long-term use: Cushing signs, ${e('osteoporosis')} (bone thinning), high blood sugar and weakened immunity.${memo("Steroids are like a “powerful firefighter”: they put out the fire of inflammation, but if they stay in the house all the time, the house ends up soaked and ruined!")}`),
          P("Match each item to its use", [['prednisone', "strong anti-inflammatory"], ['hydrocortisone', "replacing cortisol in Addison disease"], ['adrenalectomy', "removal of an adrenal gland"], ['serum cortisol', "measuring cortisol"]]),
          T("Long-term corticosteroid use can cause osteoporosis.", true, "True; one of the important side effects of long-term steroid treatment."),
          B("Removing an adrenal gland with a camera through the abdomen is ___ adrenalectomy.", ["laparoscopic", "chemical", "transsphenoidal"], 'laparoscopic adrenalectomy.'),
          W("Build a word meaning “removal of an adrenal gland”", ['adrenal/o', '-ectomy'], ['-tomy', 'nephr/o', '-scopic'], 'adrenal/o + -ectomy = adrenalectomy.'),
          S("Spell the term for the adrenal cortex anti-inflammatory hormones (plural)", 'corticosteroids', 'cortic/o + steroid + -s.', 'cortico…'),
          N('ab:ad')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* هورمونا — دنیای ۴: پانکراس و دیابت
 * منابع: فصل‌های Endocrine System پیوست (Pancreas، Diabetes mellitus، Discharge Summary، Kelly Post، Maria، Infected Foot)
 * سطح ۱: جزایر شیرین • سطح ۲: دیابت شیرین • سطح ۳: عوارض و درمان
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'pa', sym: 'Pa', name: "The Pancreas and Diabetes", short: "diabetes", sub: "Islets of Langerhans, insulin and glucagon, types of diabetes, blood sugar tests, complications and treatment",
    color: '#1E88E5', dark: '#1565C0', light: '#DDEEFD',
    levels: ["The sweet islands", "diabetes mellitus", "Complications and treatment"],
    gens: EA.genIds('pa'),
    lessons: [
      /* ================= سطح ۱: جزایر شیرین ================= */
      {
        id: 'pa1', title: "The dual-purpose pancreas", icon: '🏝️', items: [
          L("Both digestion and hormones", `The ${e('<b>pancreas</b>')} is a long organ behind the stomach (from the Greek for “all flesh”):${vs(["exocrine part", "sends digestive enzymes through a duct to the duodenum"], ["endocrine part", "the islets of Langerhans: release insulin and glucagon into the blood"])}${fig('pancreas', '', "The islets of Langerhans are like small islands in a sea of digestive cells.")}`),
          L("islets of Langerhans", `The ${e('<b>islets of Langerhans</b>')} (${e('pancreatic islets')}) are small clusters of endocrine cells in the pancreas, discovered by Paul Langerhans, a German pathologist.<br>${e('insul/o')} = island → ${e('<b>insulin</b>')} is the “island” hormone.${tbl([["cell", "Hormone", "Effect on blood sugar"], [e('beta (β) cells'), 'insulin', "lowers it ⬇"], [e('alpha (α) cells'), 'glucagon', "raises it ⬆"]])}${fig('islet-histology', '', "In a microscopic section, a pale islet is seen among the digestive cells.")}${memo("B for Beta and for “Bring down”: the beta cell brings sugar down. A for Alpha and “Add”: the alpha cell adds sugar.")}`),
          M("In which cells is insulin made?", ["the beta cells of the islets of Langerhans", "the alpha cells of the islets", "the digestive cells of the pancreas", "liver cells"], "β cells → insulin; α cells → glucagon.", null, F('pancreas')),
          T("The pancreas is the only organ with both exocrine and endocrine work.", false, "False; the ovaries, testes and even the kidney and heart also have dual roles. The pancreas is the best-known example."),
          P("Match each part to its job", [['beta cells', "making insulin"], ['alpha cells', "making glucagon"], ['pancreatic duct', "carrying digestive enzymes"], ['islets of Langerhans', "endocrine part of the pancreas"]]),
          M(`${e('<b>insular</b>')} means…`, ["relating to the pancreatic islets", "inflammation of the pancreas", "resistant to insulin", "lack of insulin"], "insul/o (island) + -ar (relating to)."),
          B("The root insul/o in insulin means ___.", ["island", "sugar", "gland"], "insula = island; because it is secreted by the islets of Langerhans."),
          W("Build a word meaning “relating to the pancreas”", ['pancreat/o', '-ic'], ['-itis', 'insul/o', '-oma'], 'pancreat/o + -ic = pancreatic.'),
          S("Spell the term for the dual-purpose organ behind the stomach", 'pancreas', "pancreas; don’t confuse it with pancrease (the name of a drug).", 'pancr…'),
          N('r2m:pa')
        ]
      },
      {
        id: 'pa2', title: "The sugar seesaw: insulin and glucagon", icon: '⚖️', items: [
          L("Two opposing hormones", `${fig('glucose-balance', '', "After a meal insulin rises; between meals and during exercise, glucagon.")}${vs(['insulin', "moves glucose into cells and lowers blood sugar; turns extra glucose into glycogen"], ['glucagon', "tells the liver to break down glycogen and release glucose; raises blood sugar"])}`),
          M("Right after a high-carbohydrate meal, which hormone is secreted most?", ['insulin', 'glucagon', 'cortisol', 'epinephrine'], "High blood sugar → insulin → sugar enters the cells."),
          L("Insulin: the cell’s key", `Insulin is like a <b>key</b> that opens the cell door so glucose can get in and make energy. Without insulin, glucose piles up in the blood outside the door, and the cells stay “hungry” despite the high blood sugar.${memo("Diabetes mellitus means “starvation amid plenty”: blood full of sugar, cells without sugar.")}`),
          L("Words for sugar processes", `${tbl([["Term", "Meaning", "Hormone"], [e('glycogenesis'), "making glycogen from glucose", 'insulin'], [e('glycogenolysis'), "breaking glycogen down into glucose", 'glucagon'], [e('gluconeogenesis'), "making new glucose from protein and fat", "glucagon, cortisol"], [e('glycolysis'), "breaking down glucose for energy", "Inside the cell"]])}${pearl("In prolonged fasting, the liver first breaks down glycogen (glycogenolysis) and, when the store runs out, makes new sugar from protein and fat (gluconeogenesis).")}`),
          P("Match each process to its meaning", [['glycogenesis', "making glycogen"], ['glycogenolysis', "breaking down glycogen"], ['gluconeogenesis', "making new glucose"], ['glycolysis', "breaking down glucose"]]),
          T("Glucagon lowers blood sugar.", false, "False; glucagon “raises” blood sugar. Lowering it is insulin’s job."),
          O("After eating a meal, put the events in order", ["blood sugar rises", "beta cells secrete insulin", "glucose enters the cells", "extra glucose is stored as glycogen in the liver"], "Insulin sends blood sugar into the cells and the store."),
          M(`${e('<b>gluconeogenesis</b>')} means…`, ["making new glucose from non-sugar sources", "making glycogen", "sugar in the urine", "breaking down glucose"], "gluc/o (sugar) + neo (new) + -genesis (making)."),
          W("Build a word meaning “breakdown of glycogen”", ['glycogen/o', '-lysis'], ['-genesis', 'gluc/o', '-uria'], 'glycogen/o + -lysis = glycogenolysis.'),
          S("Spell the term for the sugar stored in the liver", 'glycogen', 'glyc/o + -gen.', 'glyco…'),
          N('t2f:pa')
        ]
      },
      {
        id: 'pa3', title: "Sugar words", icon: '🍬', items: [
          L("Two roots for sugar", `${e('gluc/o')} and ${e('glyc/o')} (and ${e('glycos/o')}) both mean <b>sugar</b>:<br>• ${e('hyperglycemia')}: high blood sugar<br>• ${e('hypoglycemia')}: low blood sugar<br>• ${e('glycosuria')} = ${e('glucosuria')}: sugar in the urine${memo("glyc/o and gluc/o come from the Greek glykys (sweet); the same root as in “glycerine”.")}`),
          M(`${e('<b>hyperglycemia</b>')} means…`, ["high blood sugar", "low blood sugar", "sugar in the urine", "high insulin"], 'hyper- + glyc/o + -emia.'),
          L("low blood sugar", `${e('<b>hypoglycemia</b>')}: blood sugar below normal. The brain suffers most:<br>shakiness, cold sweating (${e('diaphoresis')}), hunger, palpitations, confusion and, in severe cases, seizures and coma.<br>The commonest cause: too high a dose of insulin or an oral drug in a diabetic patient.${pearl("The rule of 15: a conscious patient with low sugar should take 15 grams of simple sugar (for example half a glass of fruit juice) and recheck the sugar 15 minutes later.")}`),
          M("A diabetic patient who injected insulin and skipped lunch has developed shakiness, cold sweating and confusion. What has happened?", ["hypoglycemia (a drop in sugar)", 'hyperglycemia', 'ketoacidosis', 'diabetes insipidus'], "Insulin without food → a drop in sugar. Immediate treatment: oral sugar or glucose."),
          P("Match each term to its meaning", [['hyperglycemia', "high blood sugar"], ['hypoglycemia', "low blood sugar"], ['glycosuria', "sugar in the urine"], ['diaphoresis', "profuse sweating"]]),
          L("after meals", `${wb('post-', 'prandial')} → ${e('<b>postprandial</b>')}: “after a meal”<br>${e('postprandial blood sugar')}: blood sugar about 2 hours after a meal.<br>${e('-emic')} means “relating to a blood condition”: a ${e('hypoglycemic')} is a sugar-lowering drug.`),
          T(`${e('glycosuria')} and ${e('glucosuria')} mean the same.`, true, "True; both mean sugar (glucose) in the urine."),
          B("postprandial means ___ a meal.", ["after", "before", "without"], "post- (after) + -prandial (meal)."),
          W("Build a word meaning “low blood sugar”", ['hypo-', 'glyc/o', '-emia'], ['hyper-', '-uria', 'kal/i'], 'hypo- + glyc/o + -emia = hypoglycemia.'),
          S("Spell the term for sugar in the urine", ['glycosuria', 'glucosuria'], 'glycos/o + -uria.', 'glyco…'),
          N('wb:pa')
        ]
      },

      /* ================= سطح ۲: دیابت شیرین ================= */
      {
        id: 'pa4', title: "What is diabetes mellitus?", icon: '🍯', items: [
          L("Honeyed urine", `${e('<b>diabetes mellitus</b>')} (${e('DM')}): a disorder of sugar metabolism caused by <b>lack of insulin</b> or <b>resistance of the cells to insulin</b>; the result: ${e('hyperglycemia')}.<br>${e('diabetes')} = siphon (much urine); ${e('mellitus')} = honeyed, sweet.${pearl("Doctors of old tasted the patient’s urine to diagnose diabetes! Today it is done with urine dipsticks and glucose meters.")}`),
          L("The classic signs", `${fig('three-p', '', "The three Ps of diabetes: polyuria, polydipsia, polyphagia; along with weight loss and tiredness.")}The chain: high blood sugar → sugar spills into the urine (${e('glycosuria')}) → it drags water with it (${e('polyuria')}) → dehydration and thirst (${e('polydipsia')}) → hungry cells (${e('polyphagia')}) and weight loss.`),
          M("Which sign is not one of the “three Ps” of diabetes?", ['polycythemia', 'polyuria', 'polydipsia', 'polyphagia'], "polycythemia means too many red blood cells; it has nothing to do with diabetes.", null, F('three-p')),
          O("Put the chain of diabetes signs in order", ["high blood sugar (hyperglycemia)", "sugar spilling into the urine (glycosuria)", "a lot of urine (polyuria)", "dehydration and great thirst (polydipsia)"], "Sugar pulls water out through the kidney with it."),
          M("Diane, a 45-year-old woman, complains of unusual tiredness, thirst and passing a lot of urine. A test shows high blood sugar. Which organ is the likely source of the problem?", ["pancreas", "thyroid", "posterior pituitary", "adrenal"], "High sugar + the three Ps → diabetes mellitus → pancreatic insulin.", [["Patient", "Diane, 45 years old"], ["Complaint", "tiredness, polydipsia, polyuria"], ["test", "high blood sugar"]]),
          T("In diabetes mellitus, the cells lack energy despite the high blood sugar.", true, "True; glucose cannot enter the cell without insulin (or with resistance to it)."),
          P("Match each sign to its meaning", [['polyuria', "excessive urine"], ['polydipsia', "excessive thirst"], ['polyphagia', "excessive hunger"], ['glycosuria', "sugar in the urine"]]),
          B("The word mellitus means ___.", ["honeyed, sweet", "tasteless", "bitter"], "The patient’s urine contains sugar; insipidus, by contrast, means tasteless."),
          W("Build a word meaning “excessive hunger”", ['poly-', '-phagia'], ['-dipsia', '-uria', 'hyper-'], 'poly- + -phagia = polyphagia.'),
          S("Spell the word meaning “honeyed” in the name of insulin-related diabetes", 'mellitus', "mellitus; two l’s and one t.", 'mell…'),
          N('f2t:pa')
        ]
      },
      {
        id: 'pa5', title: "Types of diabetes", icon: '🔑', items: [
          L("Type 1 and type 2", `${fig('dm-types', '', "Type 1: the key (insulin) is missing. Type 2: the key is there, but the lock (receptor) does not open well.")}${tbl([['', "type 1 (T1DM)", "type 2 (T2DM)"], ["Cause", "autoimmune destruction of beta cells", "insulin resistance"], ["Age of onset", "childhood and adolescence, sudden", "adulthood, gradual"], ["weight", "usually thin", "usually overweight"], ["treatment", "daily insulin", "diet, exercise, oral drugs; sometimes insulin"], ["Old name", e('IDDM'), e('NIDDM')]])}`),
          M("Which feature belongs to type 1 diabetes?", ["autoimmune destruction of beta cells and a lifelong need for insulin", "insulin resistance in an overweight person", "gradual onset in middle age", "treatment with diet alone"], "T1DM = insulin-dependent; insulin is almost zero."),
          L("Gestational diabetes and prediabetes", `${e('<b>gestational diabetes mellitus</b>')} (${e('GDM')}): glucose intolerance that first appears in pregnancy and usually resolves after birth, but raises the future risk of type 2 diabetes. The baby of a diabetic mother may be large: ${e('macrosomia')}.<br>${e('<b>metabolic syndrome</b>')} (syndrome X): insulin resistance + abdominal obesity + high blood lipids + high blood pressure.<br>${e('IFG')} and ${e('IGT')}: the prediabetes stage.`),
          P("Match each abbreviation to its meaning", [['T1DM', "type 1 diabetes"], ['T2DM', "type 2 diabetes"], ['GDM', "gestational diabetes"], ['IGT', "impaired glucose tolerance"], ['IDDM', "insulin-dependent diabetes"]]),
          T("About 90% of diabetes cases are type 2.", true, "True; and with rising obesity and inactivity, it is increasingly seen in younger people."),
          M("A pregnant woman at 26 weeks has an abnormal glucose tolerance test; her sugar was normal before pregnancy. Diagnosis?", ['gestational diabetes mellitus', 'type 1 diabetes', 'diabetes insipidus', 'metabolic syndrome'], "gestational diabetes; it usually resolves after birth."),
          L("insulin resistance", `${e('<b>insulin resistance</b>')}: the cells respond less to insulin. The pancreas first makes more insulin, but gradually tires and blood sugar rises.${memo("Insulin resistance is like a rusty lock: the key is right, but you have to turn harder; gradually the locksmith (the pancreas) tires too.")}${pearl("Losing 5 to 10 per cent of body weight and 150 minutes of brisk walking a week markedly reduce insulin resistance.")}`),
          B("NIDDM is the old name for type ___ diabetes.", ["2", "1", "pregnancy"], 'non-insulin-dependent diabetes mellitus = type 2.'),
          M(`${e('<b>macrosomia</b>')} in the baby of a diabetic mother means…`, ["a very large body", "a very small body", "high newborn blood sugar", "newborn jaundice"], "macro- (large) + somat/o (body) + -ia."),
          S("Spell the word meaning “of pregnancy” in the name of pregnancy diabetes", 'gestational', "gestation = pregnancy.", 'gesta…'),
          N('ab:pa')
        ]
      },
      {
        id: 'pa6', title: "Blood sugar tests", icon: '🩸', items: [
          L("The three main tests", `${fig('glucose-tests', '', "Common criteria: fasting sugar ≥126, 2-hour sugar ≥200 mg/dL or HbA1c ≥6.5%.")}${tbl([["test", "Method"], [e('FBS / FBG / FPG'), "blood sugar after at least 8 hours of fasting"], [e('GTT / OGTT'), "drinking a glucose solution and measuring sugar at set times"], [e('HbA1c (A1c)'), "sugar stuck to haemoglobin: the 2-to-3-month average"], [e('postprandial'), "sugar 2 hours after a meal"]])}`),
          M("Which test shows the “average blood sugar over the past 2 to 3 months”?", ['HbA1c (glycated hemoglobin)', 'FBS', 'urine sugar', 'GTT'], "Glucose sticks to red cell haemoglobin, and a red cell lives about 120 days."),
          L("Why HbA1c?", `Glucose sticks to the haemoglobin of red cells (${e('glycated')} = sugar-coated). The more sugar over these 3 months, the higher the HbA1c percentage. No fasting is needed for this test.${pearl("The usual target for most diabetic patients is an HbA1c below 7%; in a doctor’s note you read: “HbA1c 7.8% with a goal of <7.0”.")}`),
          M("A patient with a fasting sugar of 140 mg/dL falls into which category?", ["diabetes (≥126)", "normal", "prediabetes", "low sugar"], "FPG ≥ 126 mg/dL is a diagnostic criterion for diabetes (usually confirmed by repeating the test).", null, F('glucose-tests')),
          P("Match each abbreviation to its test", [['FBS', "fasting blood sugar"], ['OGTT', "oral glucose tolerance test"], ['HbA1c', "glycated haemoglobin"], ['BS', "blood sugar"]]),
          L("Monitoring at home", `${e('<b>glucometer</b>')} (${e('gluc/o')} + ${e('-meter')} = measuring device): a home glucose meter using a drop of blood from the fingertip.${fig('glucose-test', "Glucose meter strip and a drop of blood from the finger", "Today there are also continuous glucose monitoring (CGM) sensors that stick on the arm.")}A patient with type 1 diabetes usually checks their sugar several times a day and, when it is high, tests the urine for <b>ketones</b>.`),
          T("For an HbA1c test, the patient must fast for 12 hours.", false, "False; HbA1c needs no fasting. FBS and OGTT do."),
          B("A home device for measuring blood sugar is a ___.", ['glucometer', 'thermometer', 'glucagon'], 'gluc/o + -meter.'),
          M("In an oral glucose tolerance test, the 2-hour sugar is 210. Result?", ["diabetes", "normal", "prediabetes", "low sugar"], "2-hour ≥ 200 = diabetes; 140 to 199 = impaired glucose tolerance (IGT)."),
          S("Spell the term for a home blood glucose meter", 'glucometer', 'gluc/o + -meter.', 'gluco…'),
          N('d2t:pa')
        ]
      },

      /* ================= سطح ۳: عوارض و درمان ================= */
      {
        id: 'pa7', title: "Sugar emergencies", icon: '🚨', items: [
          L("Ketones and ketoacidosis", `When the cells have no glucose, the body burns <b>fat</b> and makes acidic substances called <b>ketone bodies</b> (${e('ketones')}):<br>• ${e('<b>ketosis</b>')}: build-up of ketones in the body<br>• ${e('<b>acidosis</b>')}: acidification of the blood<br>• ${e('<b>ketoacidosis</b>')} (${e('DKA')}): acidosis caused by ketones; a dangerous diabetic emergency (mostly type 1).<br>Signs: fast, deep breathing, fruity breath, nausea, dehydration and reduced consciousness.${memo("In DKA the body is like a stove that burns the furniture (fat) instead of firewood (sugar), and the house fills with acidic smoke.")}`),
          M("A 12-year-old girl with two months of weight loss, polyuria and polydipsia is admitted with a blood sugar of 300 and acidosis. Admission diagnosis?", ["ketoacidosis in newly diagnosed type 1 diabetes", 'hypoglycemia', 'diabetes insipidus', 'thyroid storm'], "High sugar + acidosis + ketones = DKA; she improved after insulin.", [["Age", "12 years old"], ["history of", "weight loss, polyuria, polydipsia"], ['FBS', '300 mg/100 mL'], ["Position", "ketoacidosis, glycosuria"]]),
          L("insulin shock", `${e('<b>insulin shock</b>')}: a severe drop in blood sugar caused by too much insulin. Signs: shakiness, a fast heartbeat, cold sweating, hunger, confusion and finally coma.<br>${e('<b>hyperinsulinism</b>')}: too much insulin in the blood; from an overdose of the drug or a tumour called an ${e('insulinoma')}.${pearl("A patient who injects insulin should always carry a quick sugar source and an ID card for the condition.")}`),
          L("Comparing the two emergencies", vs(["DKA (high sugar)", "gradual (hours to days), dry skin, thirst, deep breathing, fruity breath"], ["hypoglycaemia (low sugar)", "sudden (minutes), cold and clammy skin, shakiness, hunger, confusion"])),
          P("Match each term to its meaning", [['ketosis', "build-up of ketones"], ['acidosis', "acidification of the blood"], ['ketoacidosis', "acidosis caused by ketones"], ['insulin shock', "drop in sugar from too much insulin"]]),
          T("In diabetic ketoacidosis, the patient’s skin is cold and wet with sweat.", false, "False; cold, clammy skin (diaphoresis) is more a sign of low sugar. In DKA the patient is dehydrated and the skin is dry."),
          M("A 22-year-old student became confused and unsteady after just one drink. In the emergency department he has high blood sugar and ketoacidosis, and needle marks are seen on his abdomen and thighs. The main problem?", ["uncontrolled type 1 diabetes with DKA", "alcohol poisoning", "Addison disease", "hypoglycaemia"], "Insulin injection sites, high sugar and acidosis → DKA. He recovered quickly with insulin."),
          B("The abbreviation for diabetic ketoacidosis is ___.", ['DKA', 'DI', 'DM'], 'diabetic ketoacidosis.'),
          W("Build a word meaning “acidosis caused by ketones”", ['ket/o', 'acid', '-osis'], ['glyc/o', '-emia', 'hyper-'], 'ket/o + acid + -osis = ketoacidosis.'),
          S("Spell the term for acidosis caused by ketones", 'ketoacidosis', 'keto + acid + osis.', 'ketoa…'),
          N('t2f:pa')
        ]
      },
      {
        id: 'pa8', title: "chronic complications of diabetes", icon: '👁️', items: [
          L("High sugar eats away at the vessels", `Long-term high sugar damages small and large vessels and nerves:${fig('dm-complications', '', "Eye, kidney, nerve and the heart and vessels: the four main targets of the chronic complications.")}${tbl([["Complication", "Meaning"], [e('diabetic retinopathy'), "damage to retinal vessels; blurred vision up to blindness"], [e('diabetic nephropathy'), "kidney damage; kidney failure and dialysis"], [e('diabetic neuropathy'), "nerve damage; numbness, tingling, pain"], ["Vascular disease", "atherosclerosis, heart attack and stroke, gangrene"]])}`),
          M(`${e('<b>diabetic retinopathy</b>')} means…`, ["retinal damage caused by diabetes", "kidney damage caused by diabetes", "nerve damage in the foot", "inflammation of the pancreas"], "retin/o (retina) + -pathy (disease)."),
          P("Match each complication to its organ", [['retinopathy', "retina"], ['nephropathy', "kidney"], ['neuropathy', "nerve"], ['ulceration', "skin (foot ulcer)"]]),
          L("The diabetic foot", `${e('<b>peripheral neuropathy</b>')} reduces feeling in the feet; the patient does not feel a wound or a foreign body. Together with poor blood supply, a wound (${e('ulceration')}) does not heal and may become infected.${pearl("In a surgical note you read: “nonsalvageable infection of the left heel in the context of peripheral diabetic neuropathy and poor circulation”, meaning a heel infection that can no longer be saved, so amputation is needed. A daily foot check prevents this disaster.")}`),
          M("A 59-year-old man with uncontrolled type 1 diabetes has a foul-smelling heel ulcer but feels little pain, and his foot pulses cannot be felt. Which two factors play the main part here?", ["peripheral neuropathy and poor blood supply", "retinopathy and nephropathy", "lack of iodine and calcium", "overactive thyroid"], "Numbness (neuropathy) + poor blood supply = diabetic foot ulcer.", [["Patient", "59-year-old man, long-standing T1DM"], ["foot", "heel ulceration and erythema"], ["examination", "no pulses, no deep sensation"]]),
          T("A yearly eye examination is recommended for diabetic patients.", true, "True; early retinopathy has no symptoms, and timely treatment prevents blindness."),
          B("Kidney damage caused by diabetes is called diabetic ___.", ['nephropathy', 'retinopathy', 'neuropathy'], "nephr/o (kidney) + -pathy."),
          M(`In ${e('neuropathy')}, the root neur/o means…`, ["nerve", "kidney", "retina", "vessel"], 'neur/o = nerve.'),
          W("Build a word meaning “disease of the retina”", ['retin/o', '-pathy'], ['nephr/o', 'neur/o', '-itis'], 'retin/o + -pathy = retinopathy.'),
          S("Spell the term for nerve damage", 'neuropathy', 'neur/o + -pathy.', 'neuro…'),
          N('sp:pa')
        ]
      },
      {
        id: 'pa9', title: "Treating diabetes and pancreatic diseases", icon: '💉', items: [
          L("insulin", `${e('<b>insulin</b>')} is now made by genetic engineering (such as ${e('Humulin')}) and comes in rapid-acting, intermediate-acting (${e('NPH')}) and long-acting forms.<br>• <b>subcutaneous</b> injection (${e('subcutaneous')}) in the arm, thigh or abdomen, rotating the injection site;<br>• ${e('<b>insulin pump</b>')}: a device the size of a pack of cards that delivers insulin continuously under the skin (${e('CSII')}) and gives an extra dose (${e('bolus')}) before each meal.`),
          M("What does the abbreviation CSII mean?", ["continuous insulin infusion under the skin (pump)", "glucose tolerance test", "glycated haemoglobin", "gestational diabetes"], 'continuous subcutaneous insulin infusion.'),
          L("Oral drugs and their names", `${tbl([["Term", "Meaning"], [e('oral hypoglycemic agents'), "sugar-lowering tablets in type 2; such as metformin (Glucophage) and glipizide"], [e('antidiabetics'), "drugs that control blood sugar in diabetes"], [e('antihyperglycemic'), "a drug that lowers high sugar"], [e('antihypoglycemic'), "an agent that raises low sugar (such as glucagon)"]])}${memo("anti-hypo-glycemic = “against low sugar” → it raises sugar! Read the prefixes one by one from the left.")}`),
          M(`What effect does an ${e('<b>antihypoglycemic</b>')} have?`, ["it raises low blood sugar", "lowers blood sugar", "it increases insulin secretion", "lowers blood pressure"], "anti- (against) + hypoglycemia (low sugar)."),
          T("Oral sugar-lowering drugs are enough as the main treatment for type 1 diabetes.", false, "False; in type 1 no insulin is made, and insulin injections are essential."),
          L("Other pancreatic diseases", `${tbl([["Term", "Meaning"], [e('pancreatitis'), "inflammation of the pancreas; mostly from alcohol or gallstones"], [e('insulinoma'), "islet cell tumour making too much insulin → low sugar"], [e('pancreatectomy'), "removal of part or all of the pancreas"], [e('pancreatotomy'), "pancreatotomy"], [e('islet transplantation'), "transplant of healthy islet cells"]])}${pearl("In pancreatitis, digestive enzymes “digest” the pancreas itself instead of the intestine; severe abdominal pain that spreads to the back.")}`),
          P("Match each term to its meaning", [['pancreatitis', "inflammation of the pancreas"], ['insulinoma', "insulin-making tumour"], ['pancreatectomy', "pancreatectomy"], ['islet transplantation', "islet transplant"]]),
          M("Maria (32, type 1 diabetes since age 3) wants more freedom with her meals. Which method does the doctor suggest?", ["an insulin pump with a bolus before meals", "stopping insulin and starting metformin", "pancreatectomy", "radioactive iodine"], "An insulin pump (CSII) gives continuous basal insulin and meal boluses."),
          B("A drug that lowers high blood sugar is called anti___glycemic.", ['hyper', 'hypo', 'poly'], 'antihyperglycemic.'),
          W("Build a word meaning “insulin-making islet tumour”", ['insul/o', '-oma'], ['pancreat/o', '-itis', 'glyc/o'], 'insulin + -oma = insulinoma.'),
          S("Spell the name of the first-line oral drug for type 2 diabetes", 'metformin', 'metformin (Glucophage).', 'metf…'),
          N('wb:pa')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* هورمونا — دنیای ۵: غدد دیگر، تشخیص و درمان
 * منابع: فصل‌های Endocrine System پیوست (Pineal، Thymus، Gonads، Diagnostic/Laboratory terms، Surgical، Pharmacology، Box 9-4، Progress Note)
 * سطح ۱: غدد کم‌صدا • سطح ۲: آزمایشگاه و تصویربرداری • سطح ۳: درمان و جمع‌بندی
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'dx', sym: 'Dx', name: "Other Glands, Diagnosis and Treatment", short: "diagnosis", sub: "Pineal, thymus, gonads, tests and imaging, operations, drugs and a summary of overactivity and underactivity",
    color: '#D94F7B', dark: '#A8345B', light: '#FBE3EC',
    levels: ["The quiet glands", "Laboratory and imaging", "Treatment and summary"],
    gens: EA.genIds('dx'),
    lessons: [
      /* ================= سطح ۱: غدد کم‌صدا ================= */
      {
        id: 'dx1', title: "The pineal: the body’s clock", icon: '🌙', items: [
          L("A gland shaped like a pine cone", `The ${e('<b>pineal gland</b>')} (${e('pineal')} = like a pine cone) is a small gland deep in the brain that makes the hormone ${e('<b>melatonin</b>')}.<br>Melatonin rises in <b>darkness</b> and falls in <b>light</b>, and it regulates sleep and waking through the ${e('<b>circadian rhythm</b>')} (the 24-hour rhythm).${fig('pineal-clock', '', "Light on the eyes → nerve signal → less melatonin → wakefulness. Darkness → more melatonin → sleep.")}`),
          M("In which conditions is more melatonin secreted?", ["in darkness", "in bright light", "after meals", "during exercise"], "Melatonin is the night hormone and makes sleep easier.", null, F('pineal-clock')),
          L("seasonal affective disorder", `${e('<b>seasonal affective disorder</b>')} (${e('SAD')}): in the short, dark days of winter some people become sleepy, depressed and overeat; probably because of high melatonin.${pearl("Light therapy (15 minutes of bright light after waking) helps most patients with SAD. Its abbreviation is fitting too: SAD!")}${memo("circa = about, dies = day: “about a day”. The body’s internal clock runs at roughly 24 hours.")}`),
          T("The pineal gland has only one job: making a hormone.", true, "True; like the thyroid and adrenal, it is a “single-purpose” gland."),
          P("Match each term to its meaning", [['pineal gland', "the brain’s pine-cone gland"], ['melatonin', "sleep hormone"], ['circadian rhythm', "24-hour rhythm"], ['SAD', "seasonal affective disorder"]]),
          M("A traveller who has flown from Tehran to Vancouver takes which hormone as a supplement to reset their sleep?", ['melatonin', 'cortisol', 'insulin', 'thyroxine'], "Melatonin is used for jet lag and to reset the sleep–wake cycle."),
          B("Removal of the pineal is called pineal___.", ['ectomy', 'itis', 'oma'], 'pinealectomy.'),
          W("Build a word meaning “removal of the pineal gland”", ['pineal/o', '-ectomy'], ['-tomy', 'thym/o', '-itis'], 'pineal/o + -ectomy = pinealectomy.'),
          S("Spell the term for the pineal sleep hormone", 'melatonin', "melatonin; don’t confuse it with melanin (the skin pigment).", 'mela…'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx2', title: "The thymus: school for T cells", icon: '🛡️', items: [
          L("The gland of childhood", `The ${e('<b>thymus gland</b>')} lies behind the breastbone, above the heart (in the ${e('mediastinum')}). It belongs to both the immune system and the endocrine system, because it makes the hormone ${e('<b>thymosin</b>')}.<br>Thymosin helps <b>T lymphocytes</b> (${e('T cells')}) mature; the “T” comes from Thymus.${fig('thymus', '', "The thymus is large in childhood, shrinks after puberty and is replaced by fat.")}`),
          M("What role does thymosin play?", ["helping T lymphocytes mature", "regulating blood sugar", "regulating sleep", "high blood calcium"], "T cells are “trained” in the thymus.", null, F('thymus')),
          L("thym/o or thyr/o?", `${vs(['thym/o', "thymus: thymoma, thymectomy, thymitis"], ['thyr/o', "thyroid: thyroma, thyroidectomy, thyroiditis"])}${memo("The thyMus sits in the Mediastinum (chest); the thyRoid Rides on the trachea in the neck.")}`),
          P("Match each term to its meaning", [['thymoma', "tumour of the thymus"], ['thymitis', "inflammation of the thymus"], ['thymectomy', "removal of the thymus"], ['thymic', "relating to the thymus"]]),
          T(`${e('thymectomy')} is sometimes done in myasthenia gravis or for a thymic tumour.`, true, "True; removing the thymus in myasthenia gravis can improve the symptoms."),
          M("How does the size of the thymus change over a lifetime?", ["large in childhood, shrinking after puberty", "it grows from birth to old age", "it always stays the same", "it enlarges only in pregnancy"], "Its role matters most in the first years of life, as the immune system forms."),
          B("The T in “T lymphocyte” comes from the name of the ___ gland.", ["thymus", "thyroid", "ovary"], 'Thymus.'),
          W("Build a word meaning “tumour of the thymus”", ['thym/o', '-oma'], ['thyr/o', '-itis', 'aden/o'], 'thym/o + -oma = thymoma.'),
          S("Spell the term for the thymus hormone", 'thymosin', 'thym/o + -sin.', 'thymo…'),
          N('r2m:dx')
        ]
      },
      {
        id: 'dx3', title: "gonads", icon: '🧬', items: [
          L("Gonads", `The ${e('<b>gonads</b>')} (sex glands) have two jobs: making <b>gametes</b> (${e('gametes')}: eggs and sperm) and making sex hormones.${fig('gonads', '', "FSH and LH from the pituitary switch on the ovaries and testes.")}${tbl([["gland", "Hormone", "Job"], [e('ovaries'), e('estrogen'), "female characteristics, the menstrual cycle"], ['', e('progesterone'), "preparing the uterus for pregnancy"], [e('testes'), e('testosterone'), "male characteristics, sperm production"]])}`),
          L("Roots", `${tbl([["root", "Meaning", "Example"], [e('estr/o'), "female", e('estrogen')], [e('andr/o'), "Male", e('androgen')], [e('ovari/o, oophor/o'), "ovary", e('ovarian')], [e('orchi/o, testicul/o'), "testis", e('testicular')], [e('gonad/o'), "gonads", e('hypogonadism')]])}${memo("pro-gest-erone: “for gestation”; progesterone prepares the uterus for pregnancy.")}`),
          M("Where is progesterone secreted from and what does it do?", ["from the corpus luteum of the ovary; it prepares the uterus for pregnancy", "from the testis; it makes sperm", "from the pituitary; it stimulates the ovary", "from the placenta; it makes milk"], "The corpus luteum makes progesterone after ovulation."),
          L("HCG: the pregnancy hormone", `${e('<b>human chorionic gonadotropin</b>')} (${e('HCG')}): after implantation, the placenta makes this hormone so the corpus luteum keeps making estrogen and progesterone. This is the hormone measured in a “pregnancy test”.`),
          L("Disorders", `${tbl([["Term", "Meaning"], [e('hypogonadism'), "hypogonadism"], [e('hypergonadism'), "hypergonadism"], [e('PCOS'), "polycystic ovary syndrome: excess androgen, irregular or absent periods, acne, excess hair, insulin resistance"], [e('amenorrhea'), "absence of periods in the reproductive years"]])}${pearl("PCOS is both a gland disease and a metabolic disease; many patients have insulin resistance and may also take metformin.")}`),
          P("Match each hormone to its source", [['estrogen', "ovary"], ['testosterone', "testis"], ['HCG', "pairs"], ['FSH', "anterior pituitary"]]),
          T(`${e('amenorrhea')} means painful periods.`, false, "False; a- (without) + men/o (menstruation) + -rrhea (flow): “absence” of periods."),
          B("Underactivity of the sex glands is called hypo___ism.", ['gonad', 'thyroid', 'adrenal'], 'hypogonadism.'),
          W("Build a word meaning “underactivity of the sex glands”", ['hypo-', 'gonad/o', '-ism'], ['hyper-', 'andr/o', '-itis'], 'hypo- + gonad/o + -ism = hypogonadism.'),
          S("Spell the term for the main male sex hormone", 'testosterone', "test (testis) + ster + -one.", 'testo…'),
          N('f2t:dx')
        ]
      },

      /* ================= سطح ۲: آزمایشگاه و تصویربرداری ================= */
      {
        id: 'dx4', title: "Blood and urine tests", icon: '🧪', items: [
          L("blood serum test", `Most hormones and important substances are measured in a blood sample (${e('blood serum test')}): calcium, cortisol, electrolytes, FSH, GH, glucose, insulin, PTH, T3, T4, testosterone and TSH.${tbl([["test", "To assess"], [e('total calcium'), "parathyroid and bone"], [e('serum cortisol'), "adrenal"], [e('serum potassium'), "adrenal tumours"], [e('estradiol'), "ovarian function"], [e('prolactin'), "abnormal milk secretion"], [e('testosterone'), "testis and adrenal"]])}`),
          L("urinalysis", `These can also be measured in urine: <b>calcium</b>, <b>catecholamines</b> (pheochromocytoma), free cortisol, electrolytes, <b>ketones</b> and <b>glucose</b> (${e('urine sugar')}).${pearl("A urine dipstick shows sugar and ketones within seconds; the first clue in a child suspected of diabetes.")}`),
          M("To investigate pheochromocytoma, which substance is measured in the urine?", ["catecholamines", "ketones", "calcium", "blood sugar"], "The medullary tumour makes a lot of epinephrine and norepinephrine, whose breakdown products are excreted in the urine."),
          L("RIA: the most sensitive scale", `${e('<b>radioimmunoassay</b>')} (${e('RIA')}): a method of measuring tiny amounts of a hormone in plasma using a specific <b>antibody</b> and a <b>radioactive</b>-labelled hormone.<br>${wb('radi/o', 'immun/o', 'assay')}`),
          P("Match each test to its gland", [['total calcium', "parathyroid"], ['serum cortisol', "adrenal"], ['estradiol', "ovary"], ['TSH', "thyroid (from the pituitary)"], ['HbA1c', "pancreas (diabetes)"]]),
          T(`An ${e('estrogen receptor test')} shows whether a cancer will respond to hormone therapy.`, true, "True; if the cancer cells have estrogen receptors, anti-hormone drugs are effective."),
          M("A woman who is neither pregnant nor breastfeeding complains of milk secretion. Which blood test is ordered first?", ['prolactin', 'cortisol', 'calcitonin', 'thymosin'], "galactorrhea → check for hyperprolactinemia."),
          B("The abbreviation for radioimmunoassay is ___.", ['RIA', 'RAIU', 'MRI'], "radioimmunoassay = RIA; RAIU is the iodine uptake test."),
          S("Spell the term for measuring hormones with antibodies and a radioactive label", 'radioimmunoassay', 'radio + immuno + assay.', 'radioimm…'),
          N('d2t:dx')
        ]
      },
      {
        id: 'dx5', title: "Imaging the glands", icon: '🩻', items: [
          L("Tools for seeing the glands", `${tbl([["Method", "Use in the glands"], [e('CT scan (computed tomography)'), "cross-sections of the pituitary, adrenal, pancreas"], [e('MRI (magnetic resonance imaging)'), "the most accurate method for small pituitary tumours"], [e('ultrasound (echography)'), "masses of the thyroid, adrenal and pancreas"], [e('thyroid scan'), "image of the thyroid with radioactive iodine"], [e('RAIU'), "measuring iodine uptake"]])}${memo("-graphy = the process of recording an image: echography (recording with sound echoes), tomography (recording slices).")}`),
          M("To find a small pituitary microadenoma, which method is more accurate?", ['MRI', 'thyroid scan', 'urine sugar', 'glucometer'], "MRI shows the soft tissue of the brain and pituitary in great detail."),
          L("The plain X-ray has its say too", `${fig('acromegaly-xray', "Side skull X-ray in acromegaly", "A large, protruding lower jaw and a widened sella turcica.")}${pearl("On a skull X-ray, an enlarged sella turcica is a clue to a pituitary tumour. Calcification of the pineal gland is also used on X-rays as an “orientation landmark”.")}`),
          M("On the skull X-ray of a patient with acromegaly, which finding is expected?", ["a large lower jaw and a widened sella turcica", "a large thyroid", "small kidney", "a large thymus"], "Excess GH enlarges the facial bones; the adenoma widens the sella turcica.", null, F('acromegaly-xray')),
          P("Match each method to its use", [['MRI', "small pituitary tumour"], ['thyroid echography', "thyroid nodule or cyst"], ['CT scan', "adrenal mass"], ['thyroid scan', "cold or hot nodule"]]),
          T(`${e('ultrasound')} uses X-rays for imaging.`, false, "False; ultrasound uses sound waves and no radiation; that is why it is safe even in pregnancy."),
          B("The root radi/o means ___.", ["radiation", "kidney", "sugar"], 'radi/o = radiation, ray.'),
          M(`In the word ${e('<b>echography</b>')}, the suffix -graphy means…`, ["process of recording an image", "incision", "removal", "measuring instrument"], '-graphy = process of recording.'),
          S("Spell the abbreviation for magnetic resonance imaging", 'MRI', 'magnetic resonance imaging.', 'M…'),
          N('ab:dx')
        ]
      },
      {
        id: 'dx6', title: "Reading the record: abbreviations", icon: '📄', items: [
          L("Read the doctor’s note", `In a real record, abbreviations are everywhere:${tbl([["abbreviation", "Meaning"], [e('PMHx'), "past medical history"], [e('ROS'), "review of systems"], [e('WNL'), "within normal limits"], [e('HTN'), "high blood pressure"], [e('BS / FBS'), "blood sugar / fasting sugar"], [e('HbA1c'), "glycated haemoglobin"]])}${pearl("A sample note: “60 y/o female, T2DM onset at age 53. HbA1c 7.8 with goal <7.0. Thyroid palpated: no nodules. Foot exam: WNL.” Now you can read all of it!")}`),
          M("The note says “Foot exam: WNL”. That means…", ["the foot examination is within normal limits", "there is a foot ulcer", "the foot has been amputated", "the foot pulses cannot be felt"], 'WNL = within normal limits.'),
          L("Common hormone abbreviations", `${tbl([["abbreviation", "Meaning"], [e('DM / DI'), "diabetes mellitus / diabetes insipidus"], [e('DKA'), "diabetic ketoacidosis"], [e('HRT'), "hormone replacement therapy"], [e('RAI / 131I'), "radioactive iodine"], [e('MEN'), "multiple endocrine neoplasia"], [e('CAH'), "congenital adrenal hyperplasia"], [e('PHPT'), "primary hyperparathyroidism"], [e('SIADH'), "inappropriate ADH secretion"]])}`),
          P("Match each abbreviation to its meaning", [['DKA', "diabetic ketoacidosis"], ['HRT', "hormone replacement therapy"], ['MEN', "multiple endocrine neoplasia"], ['PHPT', "primary hyperparathyroidism"], ['SIADH', "inappropriate ADH secretion"]]),
          M("A report says “PCOS, on metformin”. The patient…", ["has polycystic ovary syndrome and takes metformin", "has type 1 diabetes", "has hypothyroidism", "has hyperparathyroidism"], "PCOS comes with insulin resistance and is sometimes treated with metformin."),
          T(`${e('MEN')} is an inherited disease that causes tumours in several endocrine glands.`, true, "True; multiple endocrine neoplasia."),
          O("Put the parts of a progress note in order", ["complaint and history (PMHx)", "review of systems (ROS) and examination", "test results (such as HbA1c)", "treatment and follow-up plan"], "From what the patient says to the findings and then the decision."),
          B("The abbreviation for “within normal limits” is ___.", ['WNL', 'ROS', 'HTN'], 'within normal limits.'),
          S("Spell the abbreviation for hormone replacement therapy", 'HRT', 'hormone replacement therapy.', 'H…'),
          N('ab:dx')
        ]
      },

      /* ================= سطح ۳: درمان و جمع‌بندی ================= */
      {
        id: 'dx7', title: "Endocrine surgery", icon: '🔪', items: [
          L("The -ectomy family", `${fig('surgery', '', "Gland name + -ectomy; after removing any gland, its hormone must be replaced.")}${pearl("Today most glands (adrenal, pituitary, thyroid, parathyroid and even pancreas) are removed by minimally invasive methods such as laparoscopy or endoscopy through the nose.")}`),
          P("Match each operation to its gland", [['hypophysectomy', "pituitary"], ['thymectomy', "thymus"], ['adrenalectomy', "adrenal"], ['pancreatectomy', "pancreas"], ['pinealectomy', "pineal"]]),
          L("Special methods", `${tbl([["Term", "Meaning"], [e('transsphenoidal hypophysectomy'), "removing a pituitary tumour through the nose and sphenoid sinus"], [e('laparoscopic adrenalectomy'), "removing an adrenal with a camera through small abdominal incisions"], [e('lobectomy'), "removing one lobe of the thyroid"], [e('chemical thyroidectomy'), "destroying the thyroid with radioactive iodine, without surgery"], [e('adenomectomy'), "removal of a gland tumour"]])}`),
          M("What is removing a pituitary tumour through the nose called?", ['transsphenoidal hypophysectomy', 'laparoscopic adrenalectomy', 'lobectomy', 'pancreatotomy'], "trans- (through) + sphenoid (the sphenoid sinus)."),
          T(`${e('adenectomy')} means removal of the adrenal gland.`, false, "False; aden/o = any gland. Removal of the adrenal is adrenalectomy."),
          M("Which operation is an incision, not a removal?", ['thyrotomy', 'thyroidectomy', 'thymectomy', 'adrenalectomy'], "-tomy = incision; -ectomy = removal."),
          B("After complete removal of an endocrine gland, ___ is usually needed.", ["hormone replacement", "radioactive iodine", "kidney transplant"], "For example, levothyroxine after thyroidectomy or hydrocortisone after bilateral adrenalectomy."),
          W("Build a word meaning “removal of the thymus”", ['thym/o', '-ectomy'], ['thyr/o', '-tomy', '-oma'], 'thym/o + -ectomy = thymectomy.'),
          S("Spell the term for removal of the pancreas", 'pancreatectomy', 'pancreat/o + -ectomy.', 'pancreat…'),
          N('wb:dx')
        ]
      },
      {
        id: 'dx8', title: "Endocrine drugs", icon: '💊', items: [
          L("hormone replacement therapy", `${e('<b>hormone replacement therapy</b>')} (${e('HRT')}): making up for a hormone deficiency with tablets, injections or skin patches. Examples:${tbl([["deficiency", "drug"], ["thyroid", e('levothyroxine')], ["insulin", e('insulin')], ["cortisol", e('hydrocortisone')], ['ADH', e('vasopressin')], ["GH in a child", e('somatropin (human growth hormone)')], ["estrogen in menopause", e('estrogen ± progesterone')]])}${pearl("HRT in menopause reduces symptoms and prevents osteoporosis, but in some people raises the risk of clots and certain cancers; the decision must be individual.")}`),
          M("Which drug replaces T4 in hypothyroidism?", ['levothyroxine', 'methimazole', 'metformin', 'prednisone'], "levothyroxine = synthetic T4."),
          L("Inhibiting and regulating drugs", `${tbl([["Drug class", "Use", "Example"], ['antithyroid', "overactive thyroid", e("methimazole, propylthiouracil")], ['oral hypoglycemic', "type 2 diabetes", e("metformin, glipizide")], ['corticosteroids', "anti-inflammatory; replacement in Addison disease", e('prednisone')], ['aquaretics', "low sodium (SIADH)", e("tolvaptan, conivaptan")]])}${memo("Build the class name from the effect: anti-thyroid (against the thyroid), hypo-glycemic (sugar-lowering), aqua-retic (water-removing).")}`),
          P("Match each drug to its class", [['methimazole', "antithyroid"], ['metformin', "oral sugar-lowering"], ['prednisone', "steroid anti-inflammatory drug"], ['somatropin', "growth hormone"], ['tolvaptan', "aquaretic"]]),
          T("Steroids are sometimes illegally abused to build muscle.", true, "True; and they have dangerous side effects on the heart, liver and sex glands."),
          M("Mr Grout, who is short because of GH deficiency, asks the nurse about growth hormone in adulthood. Which answer is correct?", ["growth hormone increases height only while the bone growth plates are open", "growth hormone increases height at any age", "growth hormone is only for diabetes", "growth hormone is taken by mouth"], "After the growth plates close, GH does not increase height."),
          B("The abbreviation for hormone replacement therapy is ___.", ['HRT', 'RAI', 'TFT'], 'hormone replacement therapy.'),
          M(`What does an ${e('<b>antithyroid</b>')} drug do?`, ["it blocks the making of thyroid hormone", "it replaces thyroid hormone", "it enlarges the thyroid", "it raises calcium"], "anti- (against) + thyroid; for hyperthyroidism."),
          S("Spell the plural term for cholesterol-based hormones and drugs", 'steroids', 'steroid + -s.', 'ster…'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx9', title: "Summary: too much or too little?", icon: '🏁', items: [
          L("The golden table", `The whole course in one table; for each hormone, its excess and its lack:${tbl([["Hormone", "Oversecretion", "Undersecretion"], ['GH', "gigantism (child), acromegaly (adult)", 'dwarfism'], ['ADH', 'SIADH', 'diabetes insipidus'], ["T3, T4", "Graves, thyrotoxicosis", "congenital hypothyroidism, myxedema"], ['PTH', "hypercalcemia, bone damage", "hypocalcemia, tetany"], ['cortisol', 'Cushing syndrome', 'Addison disease'], ['aldosterone', 'Conn syndrome (aldosteronism)', 'Addison disease'], ['insulin', 'hypoglycemia (insulinoma)', 'diabetes mellitus'], ['catecholamines', 'pheochromocytoma', '—']])}`),
          M("A lack of which hormone causes diabetes insipidus?", ['ADH', 'insulin', 'cortisol', 'PTH'], "Low ADH → a lot of dilute urine."),
          P("Match each disease to its hormone", [['acromegaly', "too much GH"], ['myxedema', "too little thyroid hormone"], ['tetany', "too little PTH"], ['Cushing syndrome', "too much cortisol"], ['diabetes mellitus', "too little or ineffective insulin"]]),
          M("Which disease is caused by an “excess” of hormone?", ['Graves disease', 'Addison disease', 'myxedema', 'diabetes insipidus'], "Graves = hyperthyroidism; the others are hormone deficiencies."),
          L("Find the guilty gland", `${tbl([["disease", "gland"], [e("acromegaly, Simmonds disease"), "pituitary"], [e("Graves, goiter, myxedema"), "thyroid"], [e('tetany'), "parathyroid"], [e("Cushing, Addison, pheochromocytoma"), "adrenal"], [e("diabetes mellitus, insulinoma"), "pancreas"], [e('PCOS'), "ovary"]])}${memo("In an exam, find the “hormone” first; the gland and the disease name then come out of the table.")}`),
          P("Match each disease to the guilty gland", [['Simmonds disease', "pituitary"], ['Hashimoto thyroiditis', "thyroid"], ['pheochromocytoma', "adrenal"], ['insulinoma', "pancreas"], ['PCOS', "ovary"]]),
          T("Most endocrine diseases come either from too much or from too little of one hormone.", true, "True; this is the simplest mental map of the whole system."),
          M(`Who is an ${e('<b>endocrinologist</b>')}?`, ["a doctor specialising in diseases of the glands and hormones", "a poisons specialist", "heart surgeon", "skin specialist"], "endocrin/o + -logist. A poisons specialist is a toxicologist."),
          W("Build a word meaning “disease of the endocrine glands”", ['endocrin/o', '-pathy'], ['-logist', 'aden/o', '-itis'], 'endocrin/o + -pathy = endocrinopathy.'),
          S("Spell the term for a hormone and gland specialist", 'endocrinologist', 'endocrin/o + -logist.', 'endocrino…'),
          N('wb:dx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* هورمونا — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. شکل‌ها از دنیای غدد درون‌ریز الهام گرفته‌اند. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: "Postie", title: "The chemical messenger", shape: 'envelope', color: '#8C96F0', acc: ['sparkle'], bio: "Every hormone is a letter and Postie is the blood’s postman! It delivers the letter only to a cell with the right receptor. Its motto: “endo means inside: I pour into the blood!”" },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Suffixo", title: "Master of -ism and -ectomy", shape: 'book', color: '#4F5BD5', acc: ['glasses'], bio: "A living dictionary that reads every word from the end; it never mixes up -tomy with -ectomy or aden/o with adren/o." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Receptor", title: "The lock for every key", shape: 'lock', color: '#6C4FD8', acc: ['crown'], bio: "Sits on the surface of the target cell and opens only with its own hormone key. It knows negative feedback like a thermostat." },
    { id: 'hp-0', w: 'hp', lv: 0, name: "Peasy", title: "The master gland", shape: 'pea', color: '#B98AE8', acc: ['sparkle'], bio: "The size of a pea, but sitting in the Turkish saddle it commands half the glands of the body: TSH, ACTH, FSH and LH." },
    { id: 'hp-1', w: 'hp', lv: 1, name: "Lanky", title: "growth hormone", shape: 'ruler', color: '#8E44D9', acc: ['headband'], bio: "It is somatotropin and works mostly at night, in deep sleep. Too much of it before puberty makes gigantism, and after puberty acromegaly." },
    { id: 'hp-2', w: 'hp', lv: 2, name: "Dammy", title: "Guardian of water (ADH)", shape: 'drop', color: '#4FB3F0', acc: ['crown'], bio: "The antidiuretic hormone: it holds water in the kidney. If it is absent, diabetes insipidus; if it overworks, SIADH!" },
    { id: 'th-0', w: 'th', lv: 0, name: "Butterfly", title: "The neck’s thyroid", shape: 'butterfly', color: '#E77B6E', acc: ['sparkle'], bio: "It has two wings (lobes) and an isthmus in the middle. It is the accelerator of the body’s metabolism: too much and it runs fast and hot, too little and slow and cold." },
    { id: 'th-1', w: 'th', lv: 1, name: "Iodi", title: "The iodine crystal", shape: 'hex', color: '#7A3FD1', acc: ['glasses'], bio: "Without it, T4 and T3 cannot be made. Four of them make thyroxine, three make triiodothyronine. It loves iodized salt." },
    { id: 'th-2', w: 'th', lv: 2, name: "Calci", title: "Guardian of calcium", shape: 'bone', color: '#FBF1E3', acc: ['crown'], bio: "The parathyroids bring it from bone into the blood and calcitonin sends it back. If it runs low, the muscles fall into tetany." },
    { id: 'ad-0', w: 'ad', lv: 0, name: "Cappy", title: "cap of the kidney", shape: 'hat', color: '#F2B33D', acc: ['sparkle'], bio: "A triangular cap on each kidney: its cortex makes “salt, sugar and sex”, and its medulla adrenaline." },
    { id: 'ad-1', w: 'ad', lv: 1, name: "Adrena", title: "Fight or flight", shape: 'flame', color: '#FF7A45', acc: ['headband'], bio: "In the blink of an eye it speeds the heart, widens the pupils and raises blood sugar. In anaphylaxis it is the first rescuer." },
    { id: 'ad-2', w: 'ad', lv: 2, name: "Salty", title: "Master of aldosterone", shape: 'salt', color: '#E8892B', acc: ['crown'], bio: "It keeps sodium and throws out potassium. It is missing in Addison disease and makes too much noise in Conn syndrome." },
    { id: 'pa-0', w: 'pa', lv: 0, name: "Isla", title: "Islet of Langerhans", shape: 'island', color: '#3FB6A8', acc: ['sparkle'], bio: "It lives in the middle of the pancreas’s sea of digestive cells; its beta cells make insulin and its alpha cells glucagon." },
    { id: 'pa-1', w: 'pa', lv: 1, name: "Keyo", title: "The insulin key", shape: 'key', color: '#1E88E5', acc: ['glasses'], bio: "It opens the cell door so glucose can enter. In type 1 diabetes it is lost, and in type 2 the locks have rusted." },
    { id: 'pa-2', w: 'pa', lv: 2, name: "Glucy", title: "The sugar monitor", shape: 'meter', color: '#1565C0', acc: ['crown'], bio: "It tells your sugar from one drop of blood; it loves an HbA1c below 7 and always reminds you to check the diabetic foot every day." },
    { id: 'dx-0', w: 'dx', lv: 0, name: "Moonbeam", title: "Guardian of sleep", shape: 'moon', color: '#6C7BD9', acc: ['sparkle'], bio: "It is the pineal’s melatonin; it wakes up with the dark and winds the body’s daily clock." },
    { id: 'dx-1', w: 'dx', lv: 1, name: "Thymy", title: "The T-cell school", shape: 'shield', color: '#D94F7B', acc: ['glasses'], bio: "Behind the breastbone, it trains T cells in childhood and then slowly retires. Don’t confuse it with thyr/o!" },
    { id: 'dx-2', w: 'dx', lv: 2, name: "Tester", title: "Hormone Detective", shape: 'tube', color: '#A8345B', acc: ['cape', 'crown'], bio: "From TSH and HbA1c to RAIU and MRI; it finds every gland disease by “too much or too little” and solves the case." }
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
    /* وزنه کتل‌بل */
    kettle: { fy: 98, top: 22, body: c => `<path d="M36 54 C30 20 90 20 84 54" stroke="${c}" stroke-width="13" fill="none" stroke-linecap="round"/><path d="M36 54 C30 20 90 20 84 54" stroke="#000" stroke-opacity=".18" stroke-width="13" fill="none" stroke-linecap="round"/><circle cx="60" cy="96" r="46" fill="${c}"/><ellipse cx="38" cy="76" rx="8" ry="12" transform="rotate(30 38 76)" fill="#fff" opacity=".35"/>` },
    tooth: { fy: 68, top: 22, body: c => `<path d="M22 48 C22 24 44 18 60 28 C76 18 98 24 98 48 C98 72 92 86 90 106 C88 130 82 142 75 142 C66 142 66 118 60 118 C54 118 54 142 45 142 C38 142 32 130 30 106 C28 86 22 72 22 48Z" fill="${c}" stroke="#E2D2B8" stroke-width="3"/><ellipse cx="38" cy="44" rx="6" ry="10" transform="rotate(25 38 44)" fill="#fff" opacity=".8"/>` },
    carrot: { fy: 68, top: 34, body: c => `<path d="M18 46 C38 32 82 32 102 46 C100 82 76 122 63 144 C60 148 57 148 55 144 C42 122 20 82 18 46Z" fill="${c}"/><path d="M36 82 h12 M72 96 h10 M50 116 h9" stroke="#000" stroke-opacity=".15" stroke-width="3" stroke-linecap="round"/>` },
    /* دینامومتر دستی با صفحه */
    dyna: { fy: 64, top: 16, body: c => `<rect x="44" y="96" width="32" height="48" rx="10" fill="#77868E"/><rect x="30" y="110" width="60" height="11" rx="5" fill="#B7C2C8"/><circle cx="60" cy="62" r="48" fill="${c}"/><circle cx="60" cy="62" r="38" fill="#fff"/><path d="M60 26 v6 M94 62 h-6 M26 62 h6 M84 38 l-4 4 M36 38 l4 4" stroke="#9AA9B1" stroke-width="3" stroke-linecap="round"/>` }
  };

  /* ---------- لوازم ---------- */
  const BEHIND = {
    cape: () => `<path d="M24 72 Q6 124 16 146 L104 146 Q114 124 96 72 Z" fill="#6C3FD1"/><path d="M60 80 L60 146" stroke="#4E27A3" stroke-width="3"/>`,
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
/* هورمونا — راند بالینی: پرونده‌های چندمرحله‌ای
 * کیس‌ها از مطالعات موردی فایل‌های پیوست آمده‌اند (Jasmine، Beth، Marcy Capell، Kelly Post، Discharge Summary، Consultation Report،
 * Infected Foot، Progress Note و بقیه)؛ جایی که داده منبع با فیزیولوژی ناسازگار بود (مثلاً TSH بالا همراه با پرکاری)، اصلاح شده است.
 * هدف: به کار بردن واژه‌ها، اختصارها و آزمایش‌ها در دل یک پرونده واقعی.
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= هیپوتالاموس و هیپوفیز ================= */
    {
      id: 'r1', w: 'hp', title: "The ring that no longer fitted", who: "A 42-year-old man, a driver",
      brief: "The driver says that in recent years his wedding ring has become tight, his shoe size has gone up and gaps have opened between his teeth. He also complains of headaches and heavy sweating. On examination, his lower jaw juts forward and his hands are broad and thick.",
      chart: [["Complaint", "ring and shoes tight, headache"], ["examination", "large lower jaw, broad hands"], ["GH and IGF-1", "up"], ['MRI', "pituitary adenoma, widened sella turcica"]],
      fig: { a: ['acromegaly-drawing', 'acromegaly-hands'], l: ["Face view", "Hands"] },
      steps: [
        M("diagnosis", "What is the most likely diagnosis?", ['acromegaly', 'gigantism', 'myxedema', 'Cushing syndrome'], "Excess GH “after” puberty → enlarged extremities and face."),
        M("Term", "What pieces is acromegaly built from?", ["acr/o (extremities) + -megaly (enlargement)", "acro- (high) + mega (much)", "acr/o (acid) + -emia", "a- (without) + cromegaly"], 'acr/o = extremities.'),
        M("Cause", "What is the commonest cause of this disease?", ['pituitary adenoma', 'Hashimoto thyroiditis', 'insulinoma', 'pheochromocytoma'], "A benign pituitary tumour that makes a lot of GH."),
        T("image", "On MRI, the tumour is seen in the sella turcica.", true, "The pituitary sits in the sella turcica of the sphenoid bone."),
        M("treatment", "What is the usual surgical method for removing this tumour?", ["transsphenoidal adenomectomy through the nose", 'thyroidectomy', 'laparoscopic adrenalectomy', 'pancreatectomy'], "Through the nose and sphenoid sinus, without opening the skull."),
        S("Spelling", "Spell the Greek-derived name of the pituitary", 'hypophysis', "hypo- (below) + physis (growth).", 'hypo…')
      ]
    },
    {
      id: 'r2', w: 'hp', title: "Endless thirst after an accident", who: "Marcy Capell, a 28-year-old woman",
      brief: "Marcy has been admitted after a road accident with a severe head injury. From the second day, she passes a large amount of colourless urine every hour and keeps asking for water. Her blood sugar is normal.",
      chart: [["history of", "head injury"], ["urine", "more than 8 litres a day, very dilute"], ["blood sugar", "normal"], ["Serum sodium", "rising"]],
      fig: { a: 'adh', l: [] },
      steps: [
        M("Organ", "Which part is probably damaged?", ["the hypothalamus or posterior pituitary", "pancreas", "thyroid", "adrenal cortex"], "Making (hypothalamus) or releasing (posterior pituitary) ADH is disrupted."),
        M("diagnosis", "What is the diagnosis?", ['diabetes insipidus', 'diabetes mellitus', 'SIADH', 'Addison disease'], "Low ADH → a lot of dilute urine; sugar is normal."),
        P("Term", "Match each sign to its name", [["excessive urine", 'polyuria'], ["excessive thirst", 'polydipsia'], ["Missing hormone", 'ADH'], ["Abbreviation of the disease", 'DI']]),
        T("Differentiation", "In this patient the urine is full of sugar.", false, "False; the urine is sugar-free (insipidus = tasteless). Sugar in the urine is a sign of diabetes mellitus."),
        M("treatment", "Which drug makes up for the deficiency?", ["vasopressin (a synthetic form of ADH)", 'insulin', 'levothyroxine', 'prednisone'], "We replace the missing hormone."),
        S("Spelling", "Spell the first word of the full name of ADH", 'antidiuretic', 'anti- + diuretic.', 'anti…')
      ]
    },
    /* ================= تیروئید و پاراتیروئید ================= */
    {
      id: 'r3', w: 'th', title: "The teacher who could not calm down", who: "Jasmine, a 35-year-old teacher",
      brief: "Jasmine’s husband says that for months she has been overly energetic, working constantly and not sleeping at night. Jasmine feels anxious and shaky, cannot tolerate heat and sweats a lot. She has lost weight and her eyes bulge. The doctor feels an enlarged thyroid, and her heart rate is fast.",
      chart: [["Complaint", "insomnia, anxiety, sweating, weight loss"], ["examination", "exophthalmos, goiter, tachycardia"], ["test", "high T3 and T4, low TSH"], ["treatment", "Tapazole (methimazole) + eye drops"]],
      fig: { a: ['graves-eyes', 'diffuse-goiter'], l: ["bulging eyes", "Diffuse goitre"] },
      steps: [
        M("diagnosis", "What is the doctor’s diagnosis?", ['Graves disease', 'Hashimoto thyroiditis', 'myxedema', 'thyroid carcinoma'], "Autoimmune hyperthyroidism with goitre and exophthalmos."),
        M("Term", "tachycardia means…", ["fast heartbeat", "slow heartbeat", "high blood pressure", "fast breathing"], "tachy- (fast) + cardi/o (heart) + -ia."),
        M("test", "Why is the patient’s TSH low?", ["high T3 and T4 have suppressed TSH through negative feedback", "the pituitary is damaged", "there is not enough iodine", "the test is wrong"], "In Graves disease, antibodies keep the thyroid switched on and the pituitary falls silent."),
        P("treatment", "Match each treatment option to its description", [['antithyroid drug', "blocking hormone production (Tapazole)"], ['radioactive iodine', "destroying overactive tissue"], ['thyroidectomy', "surgical removal of the gland"], ['eye drops', "relieving dry eyes"]]),
        T("follow-up", "After a few months of treatment, the patient sleeps better and has gained a little weight; so the drug has worked.", true, "True; the aim is to reach the euthyroid state."),
        S("Spelling", "Spell the term for protruding eyeballs", 'exophthalmos', 'ex- + ophthalm/o + -os.', 'exoph…')
      ]
    },
    {
      id: 'r4', w: 'th', title: "High calcium at a routine check", who: "Beth, a 58-year-old woman",
      brief: "Beth has a history of high blood pressure (HTN) and surgery to remove part of a kidney for kidney stones. At a routine check, her serum calcium is 10.8 mg/dL. At surgery, the right upper parathyroid is enlarged and is removed; pathology confirms an adenoma. The next day, Beth complains of tingling and numbness around her mouth.",
      chart: [["history of", "HTN, partial nephrectomy for renal calculi"], ["serum calcium", "10.8 mg/dL (high)"], ["surgery", "removal of the right upper parathyroid"], ["The next day", "perioral numbness, low calcium"]],
      fig: { a: ['parathyroid', 'calcium'], l: ["Four parathyroids", "calcium balance"] },
      steps: [
        M("diagnosis", "What is the cause of Beth’s high calcium?", ["hyperparathyroidism from an adenoma", 'hypoparathyroidism', 'Graves disease', "Vitamin D deficiency"], "Too much PTH → calcium from bone into the blood."),
        M("Term", "renal calculi means…", ["kidney stones", "gallbladder stones", "stomach ulcer", "kidney cyst"], "ren/o (kidney) + calculi (stones): a complication of high calcium."),
        M("abbreviation", "What does HTN stand for?", ['hypertension', 'hypothyroidism', 'hyperthermia', 'hormone therapy'], "High blood pressure."),
        M("Complication", "What is tingling around the mouth (perioral numbness) after surgery a sign of?", ["hypocalcaemia (low calcium)", 'hypercalcemia', 'hypoglycemia', 'hyperkalemia'], "The remaining glands are still “asleep” and calcium has fallen."),
        T("treatment", "Beth was given an ampoule of calcium gluconate and her calcium improved within two days.", true, "True; the treatment for low calcium is calcium replacement."),
        S("Spelling", "Spell the term for removal of a parathyroid gland", 'parathyroidectomy', 'parathyroid/o + -ectomy.', 'parathyroid…')
      ]
    },
    {
      id: 'r5', w: 'th', title: "A lump in the right lobe", who: "A 59-year-old woman",
      brief: "A nodule was found in the right lobe of the thyroid at a routine check. The patient complains of hoarseness, difficulty swallowing, local tenderness and a slight bulge on the right side of the neck. She says she is anxious and does not sleep well at night.",
      chart: [["examination", "right lobe nodule, neck bulge"], ["test", "low TSH, high T4"], ['thyroid scan', "“hot” nodule (high uptake)"], ['echography', "solid nodule"]],
      fig: { a: ['thyroid', 'nodular-goiter'], l: ["Thyroid anatomy", "nodular goitre"] },
      steps: [
        M("Term", "dysphagia means…", ["difficulty swallowing", "difficulty speaking", "hoarseness", "shortness of breath"], "dys- (difficult) + -phagia (eating, swallowing). Don’t confuse it with dysphasia (difficulty speaking)."),
        M("Term", "What is the scientific name for an enlarged thyroid?", ['thyromegaly', 'adrenomegaly', 'acromegaly', 'splenomegaly'], "thyr/o + -megaly; the same as goiter."),
        M("test", "Which test shows whether a nodule is solid or cystic?", ["thyroid echography (ultrasound)", 'RAIU', 'TSH', 'HbA1c'], "Ultrasound sees tissue with sound waves."),
        T("Interpretation", "A “hot” nodule on a scan absorbs a lot of iodine and can cause hyperthyroidism.", true, "True; an overactive (toxic) nodule is usually benign."),
        M("treatment", "If only one lobe is involved, which operation is enough?", ['lobectomy', 'thyroparathyroidectomy', 'hypophysectomy', 'adrenalectomy'], "Removing that lobe."),
        S("Spelling", "Spell the abbreviation for thyroid-stimulating hormone", 'TSH', 'thyroid-stimulating hormone.', 'TS…')
      ]
    },
    /* ================= فوق‌کلیه ================= */
    {
      id: 'r6', w: 'ad', title: "Obesity, excess hair and brittle bones", who: "A 56-year-old woman",
      brief: "The patient has been referred to an endocrinologist to investigate weakness, swelling and obesity. Despite diet and exercise she has always been overweight, and recently she broke a rib after a cough (osteoporosis). She has a puffy face and a moustache on the upper lip. Her cortisol level is high, and CT shows a mass in the right adrenal cortex.",
      chart: [["Complaint", "weakness, edema, obesity, hirsutism"], ["history of", "osteoporosis, rib fracture"], ['RIA', "high cortisol"], ['CT', "adenoma in the right adrenal cortex"]],
      fig: { a: ['cushing-signs', 'cushing-face'], l: ["Signs of Cushing", "moon face"] },
      steps: [
        M("Term", "What is a specialist in endocrine diseases called?", ['endocrinologist', 'nephrologist', 'toxicologist', 'hematologist'], 'endocrin/o + -logist.'),
        M("Term", "What is excess facial hair in a woman called?", ['hirsutism', 'virilism', 'gynecomastia', 'alopecia'], "hirsut/o (hairy) + -ism."),
        M("diagnosis", "What is the final diagnosis?", ["Cushing syndrome from an adrenal cortex adenoma", 'Addison disease', 'pheochromocytoma', 'Conn syndrome'], "High cortisol + a cortical mass = Cushing of adrenal origin."),
        M("Hormone", "Which steroid hormone of the adrenal cortex regulates carbohydrates?", ['cortisol (glucocorticoid)', 'aldosterone', 'epinephrine', 'thymosin'], "gluco-cortico-id: sugar + cortex."),
        M("treatment", "What is this patient’s treatment?", ["right adrenalectomy", 'thyroidectomy', "insulin injections", "radioactive iodine"], "Removal of the affected adrenal (often laparoscopic)."),
        S("Spelling", "Spell the term for removal of an adrenal gland", 'adrenalectomy', 'adrenal/o + -ectomy.', 'adrenal…')
      ]
    },
    {
      id: 'r7', w: 'ad', title: "Tiredness and bronzed skin", who: "A 34-year-old woman",
      brief: "For months the patient has been tired and without appetite, has lost weight and feels dizzy when she stands up. She craves salt. Her skin has darkened, especially in the palm creases and gums. Her blood pressure is low, sodium low and potassium high.",
      chart: [["Complaint", "tiredness, weight loss, dizziness"], ["examination", "hyperpigmentation, low blood pressure"], ['Na+ / K+', "low sodium, high potassium"], ["Morning cortisol", "very low; ACTH high"]],
      fig: { a: 'cushing-addison', l: [] },
      steps: [
        M("diagnosis", "What is the diagnosis?", ['Addison disease (adrenal insufficiency)', 'Cushing syndrome', 'Graves disease', 'diabetes mellitus'], "Lack of cortisol and aldosterone with bronzed skin."),
        P("ion-forming salt in body fluids", "Match each term to its meaning", [['hyponatremia', "low blood sodium"], ['hyperkalemia', "high blood potassium"], ['hypotension', "low blood pressure"], ['hyperpigmentation', "darkening of the skin"]]),
        M("Mechanism", "Why has the patient’s skin darkened?", ["high ACTH from the pituitary also stimulates the melanocytes", "sunburn", "jaundice from the liver", "iodine deficiency"], "ACTH and MSH are made from the same parent molecule."),
        M("Cause", "What is the commonest cause of this disease today?", ["autoimmune destruction of the adrenal cortex", "medullary tumour", "heavy steroid use", "iodine deficiency"], "Autoimmune adrenalitis."),
        T("treatment", "Treatment includes replacing hydrocortisone and a mineralocorticoid, and the dose must be raised in acute illness.", true, "True; otherwise an “Addisonian crisis” occurs."),
        S("Spelling", "Spell the term for adrenal underactivity", 'hypoadrenalism', 'hypo- + adrenal/o + -ism.', 'hypoad…')
      ]
    },
    /* ================= پانکراس و دیابت ================= */
    {
      id: 'r8', w: 'pa', title: "New diabetes in a 12-year-old girl", who: "A 12-year-old girl",
      brief: "A 12-year-old girl came to the paediatrician with two months of weight loss, tiredness, polyuria and polydipsia. Her grandfather, mother and brother have type 1 diabetes. Her fasting sugar is 300 mg per 100 mL and her urine dipstick is positive for sugar. On admission she is in ketoacidosis and improves rapidly with insulin.",
      chart: [["Admission diagnosis", "hyperglycemia, ketoacidosis, glycosuria"], ['FBS', '300 mg/100 mL'], ["family history", "T1DM in three relatives"], ["Final diagnosis", 'new-onset type 1 diabetes mellitus']],
      fig: { a: ['three-p', 'dm-types'], l: ["The three classic signs", "Type 1 and 2"] },
      steps: [
        P("Term", "Match each term to its meaning", [['hyperglycemia', "high blood sugar"], ['glycosuria', "sugar in the urine"], ['ketoacidosis', "acidosis caused by ketones"], ['polydipsia', "excessive thirst"]]),
        M("abbreviation", "FBS means…", ["fasting blood sugar", "blood sugar after a meal", "glucose tolerance test", "glycated haemoglobin"], 'fasting blood sugar.'),
        M("Type", "Which type of diabetes does this patient have?", ["type 1: destruction of beta cells and a need for insulin", "type 2: insulin resistance", "gestational diabetes", "diabetes insipidus"], "Young age, rapid onset, ketoacidosis → type 1."),
        M("test", "Which test confirmed the diagnosis the next day?", ['glucose tolerance test', 'thyroid scan', 'RAIU', 'serum cortisol'], "The GTT measures the body’s ability to use glucose."),
        O("Education", "Put the discharge plan in order", ["teaching the family to inject insulin", "checking blood sugar twice a day with a glucometer", "calling the clinic to adjust the dose", "a follow-up visit two weeks later"], "Family education is a cornerstone of treating type 1 diabetes."),
        S("Spelling", "Spell the term for the ketone-driven acidosis of diabetes", 'ketoacidosis', 'ket/o + acid + -osis.', 'keto…')
      ]
    },
    {
      id: 'r9', w: 'pa', title: "A risky holiday", who: "Kelly Post, a 48-year-old overweight woman",
      brief: "Over the past two months Kelly has lost 5 kilograms and is tired and thirsty. Her doctor referred her to an endocrinologist, but Kelly decided to wait until after the holidays. After several parties and a lot of eating, she woke up in the morning dizzy, in a cold sweat and very hungry. In the emergency department her blood sugar is very low. Because of her weight, the doctor suspects insulin resistance.",
      chart: [["Before the holidays", "weight loss, tiredness, thirst"], ["emergency department", "dizziness, diaphoresis, hunger"], ["blood sugar", "very low"], ["weight", "overweight"]],
      fig: { a: 'glucose-balance', l: [] },
      steps: [
        M("Underlying problem", "Which disease had the doctor first suspected?", ['diabetes mellitus', 'diabetes insipidus', 'Addison disease', 'Graves disease'], "Weight loss, tiredness and thirst → diabetes mellitus."),
        M("emergency department", "What is Kelly’s condition in the emergency department?", ['hypoglycemia', 'hyperglycemia', 'ketoacidosis', 'thyroid storm'], "Low sugar with cold sweat and hunger."),
        M("Term", "diaphoresis means…", ["profuse sweating", "rapid breathing", "excessive urine", "nausea"], 'profuse sweating.'),
        M("Type", "Given her weight and insulin resistance, which type of diabetes does Kelly probably have?", ["type 2 (NIDDM)", "type 1 (IDDM)", "gestational diabetes", "diabetes insipidus"], "Insulin resistance in an overweight person → type 2."),
        M("test", "Which test measures sugar about 2 hours after a meal?", ['postprandial blood sugar', 'FBS', 'RAIU', 'TFT'], "post- (after) + -prandial (meal)."),
        T("Lifestyle", "Weight loss, a balanced diet and regular exercise are the first step in Kelly’s treatment.", true, "True; if needed, an oral drug such as metformin is added.")
      ]
    },
    {
      id: 'r10', w: 'pa', title: "The heel that did not hurt", who: "A 59-year-old man with long-standing type 1 diabetes",
      brief: "A patient with type 1 diabetes that has never been well controlled is admitted through the emergency department with a hot, swollen left heel. His right big toe was amputated earlier. On the left heel there is an open, foul-smelling ulcer with redness up to the ankle. The foot pulses cannot be felt and the patient has no deep sensation.",
      chart: [['S', "hot, swollen left heel"], ['O', "ulceration, erythema up to the malleolus, no pulses or sensation"], ['A', "nonsalvageable heel infection; peripheral diabetic neuropathy"], ['P', "vascular consultation for amputation, infectious disease consultation"]],
      fig: { a: 'dm-complications', l: [] },
      steps: [
        P("Term", "Match each term in the note to its meaning", [['erythema', "red skin"], ['ulceration', "Open ulcer"], ['calcaneal', "relating to the heel"], ['malleolus', "ankle knob"]]),
        M("Complication", "Why does the patient feel little pain?", ["peripheral neuropathy (damage to the peripheral nerves)", 'retinopathy', 'nephropathy', 'hypoglycemia'], "Long-standing diabetes damages the nerves."),
        M("Structure of the note", "In a SOAP note, the letter A stands for…", ["Assessment", 'Allergy', 'Analysis of lab', 'Amputation'], "Subjective, Objective, Assessment, Plan."),
        T("The second factor", "Poor blood supply (no pulses) together with neuropathy has made the ulcer impossible to heal.", true, "True; peripheral vascular disease is also a complication of diabetes."),
        M("prevention", "Which advice does the most to prevent this situation?", ["daily foot checks and tight sugar control", "drinking more water", "eating iodized salt", "taking melatonin"], "The diabetic foot is preventable."),
        S("Spelling", "Spell the term for disease of the nerves", 'neuropathy', 'neur/o + -pathy.', 'neuro…')
      ]
    },
    /* ================= غدد دیگر، تشخیص و درمان ================= */
    {
      id: 'r11', w: 'dx', title: "A type 2 diabetes follow-up note", who: "A 60-year-old woman",
      brief: "A 60-year-old woman, slightly overweight, has come for routine follow-up of type 2 diabetes (onset at 53). Since her last visit she has lost 13 kilograms and follows the dietitian’s diet. She has no complaint of overeating or thirst. HbA1c is 7.8 with a target below 7. The thyroid was palpated without nodules. The nerve and foot examinations are within normal limits.",
      chart: [['PMHx', "T2DM since age 53"], ['HbA1c', "7.8% (target < 7.0)"], ["examination", "thyroid without nodules; Foot exam: WNL"], ["Plan", "HbA1c in three months (no fasting needed)"]],
      fig: { a: 'glucose-tests', l: [] },
      steps: [
        P("abbreviation", "Match each abbreviation to its meaning", [['PMHx', "past medical history"], ['WNL', "within normal limits"], ['T2DM', "type 2 diabetes"], ['ROS', "review of systems"]]),
        M("Term", "polyphagia means…", ["excessive hunger", "excessive thirst", "excessive urine", "weight loss"], 'poly- + -phagia.'),
        M("Interpretation", "An HbA1c of 7.8% means…", ["sugar has been above target over the last 3 months", "the diabetes is cured", "this morning’s sugar was 7.8", "the patient has low sugar"], "The usual target is below 7%."),
        T("test", "For the next HbA1c the patient must come fasting.", false, "False; HbA1c needs no fasting."),
        M("examination", "Why was this patient’s thyroid also examined?", ["autoimmune and endocrine diseases sometimes go together, and the thyroid is an accessible gland", "because diabetes comes from the thyroid", "to measure sugar", "to measure calcium"], "A full gland examination is part of following up a diabetic patient."),
        S("Spelling", "Spell the first word of the name for HbA1c", 'glycated', 'glycated hemoglobin = HbA1c.', 'glyc…')
      ]
    },
    {
      id: 'r12', w: 'dx', title: "Irregular periods and acne", who: "A 24-year-old woman",
      brief: "The patient complains of irregular periods, sometimes months apart, facial acne and excess hair on the chin and abdomen. She is overweight and her fasting sugar is in the prediabetes range. Ultrasound shows ovaries full of small cysts. Her androgen levels are high.",
      chart: [["Complaint", "irregular periods, acne, hirsutism"], ["fasting sugar", '110 mg/dL (IFG)'], ["ultrasound scan", "polycystic ovaries"], ["Hormones", "high androgens"]],
      fig: { a: 'gonads', l: [] },
      steps: [
        M("diagnosis", "What is the likely diagnosis?", ['polycystic ovary syndrome (PCOS)', 'Addison disease', 'hypothyroidism', 'Cushing disease'], "Excess androgen + irregular ovulation + polycystic ovaries."),
        M("Term", "What is the complete absence of periods in the reproductive years called?", ['amenorrhea', 'galactorrhea', 'dysmenorrhea', 'menorrhagia'], "a- (without) + men/o (menstruation) + -rrhea (flow)."),
        M("abbreviation", "IFG means…", ["impaired fasting glucose (prediabetes)", "type 1 diabetes", "glucose tolerance test", "urine glucose"], 'impaired fasting glucose.'),
        T("Connection", "Many patients with PCOS have insulin resistance.", true, "True; that is why weight loss and sometimes metformin help."),
        P("Hormone", "Match each hormone to its source", [['estrogen', "ovary"], ['androgen', "Ovary and adrenal cortex"], ["FSH and LH", "anterior pituitary"], ['insulin', "Beta cells of the pancreas"]]),
        S("Spelling", "Spell the term for abnormal male-pattern hairiness in a woman", 'hirsutism', 'hirsut/o + -ism.', 'hirsu…')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* هورمونا — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', "If the suffix begins with a vowel, the combining vowel o is dropped: thyr/o + -itis = thyroiditis."],
    ['Lx', "Start the meaning of a word from the suffix: hypo/glyc/emia means “a condition of blood low in sugar”."],
    ['Lx', "-tomy means cutting and -ectomy removal; ec- is Greek for “out”."],
    ['Lx', "aden/o is any gland, but adren/o is only the adrenal gland; one r changes the meaning."],
    ['Lx', "thym/o is the thymus in the chest, and thyr/o is the thyroid in the neck."],
    ['Lx', "endocrine means “secreting inwards” (into the blood) and exocrine means “secreting outwards” (through a duct)."],
    ['Lx', "kal/i comes from kalium (symbol K) and natr/o from natrium (symbol Na)."],
    ['Lx', "hypercalcemia is high calcium and hyperkalemia is high potassium; don’t mix them up!"],
    ['Lx', "glucose is sugar, glycogen is the sugar store, and glucagon is the hormone that opens the store."],
    ['Lx', "polyuria is a sign of diabetes; polyurea is an industrial polymer!"],
    ['Hp', "The pituitary is the size of a pea and sits in the Turkish saddle (sella turcica)."],
    ['Hp', "ADH and oxytocin are made in the hypothalamus and stored in the posterior pituitary."],
    ['Hp', "-tropin means “stimulating”: thyrotropin stimulates the thyroid and gonadotropin stimulates the sex glands."],
    ['Hp', "Growth hormone is secreted mostly at the start of deep sleep."],
    ['Hp', "Too much GH before puberty: gigantism; after puberty: acromegaly (acr/o = extremities)."],
    ['Hp', "diabetes insipidus means “tasteless diabetes”: large amounts of dilute urine from a lack of ADH."],
    ['Hp', "Prolactin makes the milk; oxytocin pushes it out."],
    ['Hp', "Pituitary tumours today are usually removed through the nose: transsphenoidal."],
    ['Th', "thyr/o means “shield”; the thyroid cartilage looks like the shield of a Greek warrior."],
    ['Th', "The number in T4 and T3 is the number of iodine atoms."],
    ['Th', "Read TSH in reverse: it is low in hyperthyroidism and high in hypothyroidism."],
    ['Th', "Graves “hits the accelerator” (overactivity) and Hashimoto “hits the brakes” (underactivity); both are autoimmune."],
    ['Th', "exophthalmos means bulging of the eye: ex- (out) + ophthalm/o (eye)."],
    ['Th', "PTH raises blood calcium and calcitonin lowers it."],
    ['Th', "Tingling around the mouth after thyroid surgery? Think of low calcium and parathyroid damage."],
    ['Th', "Newborn TSH screening finds congenital hypothyroidism before brain damage occurs."],
    ['Ad', "adrenal, suprarenal and epinephrine all just say “on the kidney”."],
    ['Ad', "The adrenal cortex makes three S’s: Salt (aldosterone), Sugar (cortisol), Sex (androgens)."],
    ['Ad', "cortex means tree bark (outside) and medulla means marrow (centre)."],
    ['Ad', "Aldosterone keeps sodium and gets rid of potassium."],
    ['Ad', "Cushing “syndrome” is excess cortisol from any cause; Cushing “disease” has a pituitary origin."],
    ['Ad', "The bronze skin in Addison’s comes from excess ACTH, which also stimulates the melanocytes."],
    ['Ad', "Don’t stop a steroid medicine suddenly after long use; it must be tapered gradually."],
    ['Ad', "Pheochromocytoma: episodes of high blood pressure, headache, palpitations and sweating."],
    ['Pa', "insul/o means island; insulin is the hormone of the islets of Langerhans."],
    ['Pa', "Beta cells make insulin (lowers sugar) and alpha cells make glucagon (raises sugar)."],
    ['Pa', "mellitus means honeyed and insipidus means tasteless."],
    ['Pa', "The three P’s of diabetes: polyuria, polydipsia, polyphagia."],
    ['Pa', "HbA1c shows the average sugar over the past 2 to 3 months and does not require fasting."],
    ['Pa', "Fasting sugar of 126 or more, two-hour sugar of 200 or more, or HbA1c of 6.5% or more: diabetes."],
    ['Pa', "Cold, clammy skin with shaking? Low sugar. Dry skin with deep breathing and a fruity smell? Ketoacidosis."],
    ['Pa', "antihypoglycemic means “against low sugar”; so it raises the sugar."],
    ['Pa', "A person with diabetes should look at their feet every day; neuropathy makes ulcers painless."],
    ['Dx', "Melatonin rises in the dark and sets the body clock."],
    ['Dx', "The T in “T lymphocyte” comes from Thymus."],
    ['Dx', "RIA (radioimmunoassay) is different from RAIU (radioactive iodine uptake)."],
    ['Dx', "After an endocrine gland is removed, its hormone must be replaced."],
    ['Dx', "WNL in a record means “within normal limits”."],
    ['Dx', "Most gland diseases come either from too much or too little of a hormone."],
    ['', "Five minutes of Leitner card review every day works better than an hour of study the night before the exam."]
  ];
  const COLORS = { Lx: '#4F5BD5', Hp: '#8E44D9', Th: '#0FA3A3', Ad: '#E8892B', Pa: '#1E88E5', Dx: '#D94F7B', '': '#6C3FD1' };
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
/* هورمونا — کارت‌های واژه (فلش‌کارت) با جعبه لایتنر
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
/* هورمونا — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مقادیر مرجع
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'hormona.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: "Dictionary", color: '#6C3FD1' },
    { id: 'parse', sym: '✂', name: "Word parser", color: '#7B5CE0' },
    { id: 'roots', sym: '-o-', name: "Roots and suffixes", color: '#0FA3A3' },
    { id: 'abbr', sym: 'TSH', name: "Abbreviations", color: '#1899D6' },
    { id: 'ref', sym: 'Lab', name: "Reference values", color: '#E5A500' }
  ];
  let cur = 'dict';
  const st = { q: '', w: '', k: '', parse: 'hyperparathyroidism', open: null, limit: 40 };
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
      <p class="disclaimer">⚕️ Hormona is a learning tool; reference values vary with the laboratory, age and sex.</p>
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
  const dict = () => `<div class="tpane">${searchBox("Search: goiter, diabetes, thyr…")}
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
  const SAMPLES = ['panhypopituitarism', 'thyroparathyroidectomy', 'hypoglycemia', 'adrenomegaly', 'pheochromocytoma', 'gonadotropin', 'exophthalmos', 'glycogenolysis'];
  const parse = () => `<div class="tpane">
    <p class="muted">Type a medical word and it will be broken into prefix, root and suffix. The golden rule: start the meaning from the <b>suffix</b>, then the prefix, and finally the roots.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. hypercalcemia"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: "prefix", root: "root", suffix: "suffix" };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox("Search: thyr, sugar, -emia…")}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]} list <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b class="en-text">${esc(r.a)}</b><span>${esc(r.fa)}</span><small class="en-text">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox("Search: TSH, diabetes, hormone…")}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>Abbreviation</th><th>Full form and meaning</th></tr>${list.map(a => `<tr><td><span class="en-text">${esc(a.a)}</span></td><td><span class="en-text abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  const REF = [
    ["Fasting blood sugar (FBS / FPG)", '70–99 mg/dL', "100 to 125 prediabetes; 126 or more: diabetes"],
    ["Two-hour glucose (OGTT)", '< 140 mg/dL', "140 to 199: impaired glucose tolerance (IGT); 200 or more: diabetes"],
    ["Glycated haemoglobin (HbA1c)", '< 5.7 %', "5.7 to 6.4 prediabetes; 6.5 or more: diabetes; treatment target usually below 7"],
    ["Random blood sugar", '< 140 mg/dL', "200 or more with symptoms: diabetes"],
    ["low blood sugar", '< 70 mg/dL', "Below 54: significant hypoglycaemia needing urgent treatment"],
    ["Thyroid-stimulating hormone (TSH)", '≈ 0.4–4.0 mIU/L', "Hyperthyroidism: low • Hypothyroidism: high"],
    ["Free thyroxine (Free T4)", '≈ 0.8–1.8 ng/dL', "The active, unbound form of T4"],
    ["Total triiodothyronine (T3)", '≈ 80–200 ng/dL', "Rises in hyperthyroidism"],
    ["Total serum calcium", '≈ 8.5–10.5 mg/dL', "High: hyperparathyroidism • Low: tetany"],
    ["Parathyroid hormone (PTH)", '≈ 10–65 pg/mL', "Interpreted together with serum calcium"],
    ["Sodium (Na+)", '135–145 mEq/L', "Below 135: hyponatremia (e.g. in SIADH)"],
    ["Potassium (K+)", '3.5–5.0 mEq/L', "High in Addison’s • Low in hyperaldosteronism"],
    ["Morning cortisol", '≈ 5–25 µg/dL', "High in Cushing’s • Low in Addison’s"],
    ["Prolactin (non-pregnant woman)", '< 25 ng/mL', "High: hyperprolactinemia and galactorrhea"],
    ["Blood ketones", '< 0.6 mmol/L', "Above 3 with acidosis: DKA"]
  ];
  const ref = () => `<div class="tpane"><p class="muted">Approximate adult values, for learning; each laboratory’s ranges differ slightly.</p>
    <table class="mini ref"><tr><th>Index</th><th>Range</th><th>Note</th></tr>${REF.map(r => `<tr><td>${r[0]}</td><td dir="ltr" class="ref__v">${String(r[1]).split(' ').map(x => `<span>${x}</span>`).join(' ')}</td><td>${r[2]}</td></tr>`).join('')}</table>
    ${EA.ui.figCard({ a: ['glucose-tests', 'feedback'], l: ["Diagnostic criteria for diabetes", "Negative feedback of the thyroid axis"] })}</div>`;

  const PANES = { dict, parse, roots, abbr, ref };

  /* ---------- رویدادها ---------- */
  function redraw(el, keepFocus) {
    const active = document.activeElement, sel = active && active.matches && (active.matches('[data-tq]') ? '[data-tq]' : active.matches('[data-tp]') ? '[data-tp]' : null);
    const pos = sel ? active.selectionStart : 0;
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
    });
    el.addEventListener('input', e => {
      if (e.target.matches('[data-tq]')) { st.q = e.target.value; st.limit = 40; redraw(el, true); }
      else if (e.target.matches('[data-tp]')) { st.parse = e.target.value; el.querySelector('.tout').innerHTML = parseOut(); }
    });
  }

  EA.tools = { view, bind, TOOLS, REF };
})();
  };
  D.ready = true;
})(window.ACADEMY_SUBCOURSES);
