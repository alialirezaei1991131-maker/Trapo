/* Therapo • ترمینو — حیطه «timar» (Disease and Treatment)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_timar;
  D.css = ".certbar{width: 100%; margin-top: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px; border: 0; border-radius: 16px; padding: 14px 18px; font-weight: 800; background: linear-gradient(120deg, #0c8f7f, #1c7ed6); color: #fff; box-shadow: 0 4px 0 var(--brand-d); text-align: start;}\n.cert{width: 100%; padding: 10px; background: linear-gradient(135deg, #4f5bd5, #e03131, #f08c00, #0c8599, #ae3ec9, #2f9e44); border-radius: 20px;}\n.land__h em{font-style: normal; background: linear-gradient(90deg, var(--brand), #ae3ec9 55%, var(--coral)); -webkit-background-clip: text; background-clip: text; color: transparent;}\n[lang=\"fa\"]{font-family: Vazirmatn, Tahoma, system-ui, sans-serif;}\ntable.ref .ref__v{font-family: Nunito, system-ui, sans-serif; font-weight: 800; white-space: nowrap; text-align: left;}\n.recap{margin: 8px 0 4px; padding: 12px 14px; border-radius: 16px; background: color-mix(in srgb, var(--wc, var(--brand)) 9%, var(--bg)); border: 2px solid color-mix(in srgb, var(--wc, var(--brand)) 35%, var(--line));}\n.recap__h{display: block; font-size: 14px; font-weight: 900; color: color-mix(in srgb, var(--wc, var(--brand)) 80%, var(--text)); margin-bottom: 6px;}\n.recap ul{margin: 0; padding: 0; list-style: none; display: grid; gap: 8px;}\n.recap li{position: relative; padding-inline-start: 24px; font-size: 15px; line-height: 1.8;}\n.recap li::before{content: \"✓\"; position: absolute; inset-inline-start: 2px; top: 0; font-weight: 900; color: var(--green-t);}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* تیمار — هسته: فضای نام، متن‌ها، رقم فارسی و سازنده‌های کوتاه محتوا
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
  EA.APP = { name: "Timar", key: 'timar', title: "Timar • Terminology of Disease and Treatment" };

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
    /** کارت «مرور سطح»: چکیده چند خطی در پایان هر سطح، پیش از تمرین‌های ساخته‌شده */
    recap: rows => `<div class="recap"><b class="recap__h">📌 What you learned at this level</b><ul>${rows.map(r => `<li>${EA.bi(r)}</li>`).join('')}</ul></div>`,
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
    name: "Timar", key: 'timar', title: "Timar • Terminology of Disease and Treatment", certCode: 'TM',
    subject: "Medical terminology of disease and treatment",
    kicker: "🩺 Medical terminology: Disease and Treatment",
    hello: "Hi, I’m <b>Timar</b>;",
    landP: () => `Hi, I’m <b>Timar</b>, a capsule that takes good care of its patient! Here you’ll learn how diseases are named, what microbes and the body’s response are, how a physician examines and images, which suffixes and instruments a surgeon works with and how to read a prescription; and you’ll <b>decode</b> every new word yourself. ${fa(EA.lex.TERMS.length)} terms with pronunciation and meaning, ${fa(Object.keys(EA.IMG).length || 30)} clinical picturess, ${fa(EA.ART_KEYS.length)} teaching figures, ${fa(EA.rounds.length)} clinical charts and Leitner cards are waiting for you.`,
    disclaimer: "Timar is an educational tool and does not replace medical references, clinical judgment or a physician’s orders.",
    eyes: "Dozens of teaching figures and clinical pictures, from the shapes of bacteria and inflammation to examination, imaging, surgical instruments and injection angles.",
    outcomes: [
          "Break every disease word into prefix, root and suffix, and build new words with suffixes such as ‎-itis, ‎-megaly and ‎-stenosis",
          "Recognise the types of disease, microbes such as cocci, bacilli, viruses and fungi, and spread words such as epidemic and nosocomial",
          "Name the body’s responses to disease: inflammation, edema, phagocytosis, abscess, neoplasm and hernia",
          "Read the history and examination (IPPA), vital signs, examination instruments and imaging methods in a chart",
          "Understand surgical suffixes such as ‎-ectomy, ‎-tomy, ‎-stomy and ‎-plasty, operating-room instruments and complementary therapies",
          "Read routes of administration, drug forms and prescription abbreviations such as bid, prn, po and SL without mistakes"
        ],
    endText: "Just 5 minutes a day. A few weeks from now you’ll read a patient’s history, order sheet and prescription like your mother tongue.",
    obHello: "Hi! I’m Timar, a capsule that takes good care of its patient 💊 What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “The Language of Disease” is the best start; the word-building pieces are taught there!",
    demo: () => ({
    q: "The chart says: <b dir=\"ltr\">osteomalacia</b>. It means…",
    fig: { a: ['wordparts'], l: ["Root + suffix"] },
    opts: ["softening of bone", "Death of bone tissue", "Breaking of a bone", "bone inflammation"],
    why: `${EA.K.wb('oste/o', '-malacia')}<br><b>oste/o</b> = bone • <b>-malacia</b> = softening. So it means <b>softening of the bone</b>, for example in vitamin D deficiency. With <b>-necrosis</b> (osteonecrosis) it would be death of bone tissue, and with <b>-itis</b> (osteitis) inflammation of the bone. Start the meaning from the suffix!`
  }),
    titles: ["Ward Newcomer", "Root Finder", "Microbe Hunter", "Inflammation Detective", "Careful Examiner", "Stethoscope Ear", "Radiograph Reader", "Operating Room Assistant", "Word Surgeon", "Rx Reader", "Junior Pharmacologist", "Timar Supervisor", "Master of the Language of Disease and Treatment"],
    leagueRoles: ["Medical student", "Nursing student", "Lab-science student", "Lab scientist", "Nutrition student", "ICU nurse", "Clinical dietitian", "Internal-medicine resident", "Midwifery student", "Pharmacy student", "Emergency medical technician", "Operating room nurse"],
    firstBadge: ['🌱', "First Step"],
    worldBadges: { lx: ['🧩', "Decoder"], mc: ['🦠', "Microbiologist"], rs: ['🛡️', "Body Guardian"], dx: ['🩺', "Examiner"], tx: ['✂️', "the surgeon"], rx: ['💊', "Pharmacologist"] },
    confetti: ['#C8243F', '#12A594', '#FFC800', '#18A6D9', '#7B5CE0', '#FF7A45', '#E5476B', '#58CC02'],
    obRoles: [["Medical student", ''], ["nursing or midwifery student", ''], ["lab sciences", ''], ["nutrition", ''], ["nurse or physician", ''], ["other", '']],
    /* شخصیت کامل (نسل قدیم: کل تابع رسم در ui خود دوره بود) */
    mascotFull: function (mood, color, size) {
    const c = color || 'var(--brand)';
    const m = mood || 'happy';
    const ink = '#14214a';
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
    return `<svg class="yona timar yona--${m}" viewBox="0 0 120 150" width="${size || 120}" height="${(size || 120) * 1.25}" aria-hidden="true" style="--c:${c}">
      <ellipse cx="60" cy="144" rx="32" ry="5" fill="currentColor" opacity=".12"/>
      <g class="yona-body">
        <rect x="16" y="14" width="84" height="124" rx="42" fill="#000" opacity=".14" transform="translate(0 3)"/>
        <rect x="16" y="14" width="84" height="124" rx="42" fill="var(--c)"/>
        <path d="M17.8 108 H98.2 A42 42 0 0 1 17.8 108 Z" fill="#f4fbf9"/>
        <path d="M17.8 108 H98.2" stroke="#000" stroke-opacity=".18" stroke-width="3"/>
        <rect x="16" y="14" width="84" height="124" rx="42" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="2"/>
        <circle cx="40" cy="119" r="2.6" fill="var(--c)" opacity=".45"/><circle cx="58" cy="127" r="2.6" fill="var(--c)" opacity=".45"/><circle cx="76" cy="119" r="2.6" fill="var(--c)" opacity=".45"/>
        <path d="M27 56 C29 38 38 26 50 23" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>
        <g transform="translate(100 112)"><circle r="17" fill="#FFC800" stroke="#fff" stroke-width="3"/><path d="M0 -9 V9 M-9 0 H9" stroke="#fff" stroke-width="5" stroke-linecap="round"/></g>
        <path class="negar-spark" d="M100 18 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
        ${brows}${eyes}
        <ellipse cx="${cx - 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/><ellipse cx="${cx + 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/>
        ${mouths[m] || mouths.happy}${tear}
      </g>
    </svg>`;
  }
  };
})(window);
/* تیمار — واژه‌ها (ساخته‌شده خودکار با tools/build_data.py؛ دستی ویرایش نکنید)
 * [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارها] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [
    ["abscess", "AB-ses", "A localized collection of pus.", "pocket of pus", "rs", "inf", []],
    ["absorption", "ab-SORP-shun", "Drug taken into the circulation through the digestive tract or by transfer across another membrane.", "uptake into the bloodstream", "rx", "route", []],
    ["acetaminophen", "ah-set-ah-MIN-o-fen", "Analgesic and antipyretic drug; brand name Tylenol.", "pain and fever reliever", "rx", "drug", ["APAP"]],
    ["achromatic", "ak-ro-MAT-ik", "Without color.", "colourless", "dx", "wp", []],
    ["acid-fast stain", "AS-id-fast", "Laboratory staining procedure used mainly to identify the tuberculosis (TB) organism.", "stain for tuberculosis bacteria", "mc", "mic", ["AF"]],
    ["acupressure", "AK-u-presh-ur", "Firm finger pressure at specific points on the body surface, with effects similar to acupuncture.", "pressure applied to body points", "tx", "alt", []],
    ["acupuncture", "AK-u-punk-chur", "Ancient Chinese method of inserting thin needles at specific points to relieve pain, induce anesthesia or promote healing.", "treatment with fine needles", "tx", "alt", []],
    ["acute", "ah-KUTE", "Sudden, severe; having a short course.", "sudden and severe", "mc", "type", []],
    ["adaptive immunity", "ah-DAP-tiv", "Specific immunity developed during life from exposure to disease organisms or vaccines; also called acquired immunity.", "immunity learned after exposure", "rs", "imm", []],
    ["adenectomy", "ad-eh-NEK-to-me", "Excision of a gland (aden/o + -ectomy).", "removal of a gland", "tx", "surg", []],
    ["adenocarcinoma", "ad-eh-no-kar-sih-NO-mah", "Carcinoma that arises in glandular epithelium (aden/o: gland).", "cancer of glandular tissue", "rs", "neo", []],
    ["adhesion", "ad-HE-zhun", "A uniting of two surfaces or parts that may normally be separated.", "tissues abnormally stuck together", "rs", "les", []],
    ["adipocele", "AD-ih-po-sele", "Hernia containing fat (adip/o + -cele).", "hernia containing fat", "lx", "wp", []],
    ["aerobic", "air-O-bik", "Pertaining to or requiring air (oxygen).", "needing oxygen", "dx", "wp", []],
    ["aerosol", "AIR-o-sol", "Solution dispersed as a mist to be inhaled.", "fine spray of particles", "rx", "route", []],
    ["algesia", "al-JE-ze-ah", "Condition of having pain; sense of pain (root alg/o, algesi/o).", "sense of pain", "lx", "wp", []],
    ["algesimeter", "al-jeh-SIM-eh-ter", "Instrument used to measure sensitivity to pain.", "pain-sensitivity meter", "lx", "wp", []],
    ["allergy", "AL-er-je", "Overreaction of the immune system to a harmless substance.", "hypersensitivity reaction", "rs", "imm", []],
    ["alpha-fetoprotein", "AL-fah-fe-to-PRO-tene", "A fetal protein that appears in the blood of adults with certain types of cancer.", "fetal protein measured in pregnancy", "dx", "exam", ["AFP"]],
    ["amniorrhexis", "am-ne-o-REK-sis", "Rupture of the amniotic sac (bag of waters).", "rupture of the amniotic sac", "lx", "wp", []],
    ["ampule", "AM-pule", "A small sealed glass or plastic container used for sterile intravenous solutions.", "sealed glass vial", "rx", "route", []],
    ["anaerobic", "an-er-O-bik", "Not requiring air (oxygen).", "not needing oxygen", "dx", "wp", []],
    ["analgesia", "an-al-JE-ze-ah", "Absence of pain; loss of the sense of pain (an- + algesi/o + -ia).", "absence of pain", "lx", "wp", []],
    ["analgesic", "an-al-JE-zik", "Drug that relieves pain (an- + algesi/o).", "painkiller", "rx", "drug", []],
    ["anaphylaxis", "an-ah-fih-LAK-sis", "An extreme allergic reaction that can lead to respiratory distress, circulatory collapse and death.", "severe whole-body allergic reaction", "rx", "drug", []],
    ["anaplasia", "ah-nah-PLA-ze-ah", "Lack of normal differentiation, as shown by cancer cells.", "loss of cell differentiation", "rs", "neo", []],
    ["anesthesia", "an-es-THE-ze-ah", "Loss of the ability to feel pain, as by administration of a drug.", "loss of sensation (anaesthesia)", "tx", "surg", []],
    ["antagonist", "an-TAG-o-nist", "A substance that interferes with or opposes the action of a drug.", "drug that blocks another’s action", "rx", "drug", []],
    ["antibody", "AN-tih-bod-e", "Protein made by immune cells that immobilizes foreign invaders and helps destroy them.", "protective immune protein", "rs", "imm", []],
    ["antiemetic", "an-te-eh-MET-ik", "Drug that prevents vomiting (emesis).", "drug against vomiting", "rx", "drug", []],
    ["antipyretic", "an-te-pi-RET-ik", "Counteracting fever (anti- + pyret/o).", "fever reducer", "rx", "drug", []],
    ["anxiolytic", "ang-ze-o-LIT-ik", "Drug that reduces anxiety.", "drug against anxiety", "rx", "drug", []],
    ["appendicitis", "ah-pen-dih-SI-tis", "Inflammation of the appendix.", "inflammation of the appendix", "rs", "inf", []],
    ["aqueous solution", "AKE-we-us", "Substance dissolved in water.", "water-based solution", "rx", "route", []],
    ["arteriosclerosis", "ar-te-re-o-skleh-RO-sis", "Hardening of the arteries (arteri/o + scler/o + -osis).", "hardening of the arteries", "lx", "wp", []],
    ["arteriospasm", "ar-TERE-e-o-spazm", "Spasm of an artery (arteri/o + spasm).", "sudden narrowing of an artery", "lx", "wp", []],
    ["arthrocentesis", "ar-thro-sen-TE-sis", "Puncture of a joint to remove fluid (arthr/o + -centesis).", "drawing fluid from a joint", "tx", "surg", []],
    ["arthrodesis", "ar-THROD-eh-sis", "Fusion of a joint (arthr/o + -desis).", "surgical fusion of a joint", "tx", "surg", []],
    ["arthroplasty", "AR-thro-plas-te", "Plastic repair of a joint (arthr/o + -plasty).", "surgical repair of a joint", "tx", "surg", []],
    ["arthroscopy", "ar-THROS-ko-pe", "Endoscopic examination of a joint (arthr/o + -scopy).", "looking inside a joint with a scope", "tx", "surg", []],
    ["ascites", "a-SI-teze", "Accumulation of fluid in the peritoneal cavity.", "fluid in the abdomen", "rs", "les", []],
    ["aspiration", "as-pih-RA-shun", "Withdrawal of fluid by needle, as from the chest or a cyst; one way to obtain a biopsy.", "drawing out with a needle", "dx", "exam", []],
    ["aspirin", "AS-pih-rin", "Acetylsalicylic acid; analgesic, antipyretic and anti-inflammatory drug.", "acetylsalicylic acid", "rx", "drug", ["ASA"]],
    ["audiometer", "aw-de-OM-eh-ter", "Instrument used to measure hearing.", "hearing-test device", "dx", "wp", []],
    ["audiometry", "aw-de-OM-eh-tre", "Measurement of hearing (audi/o).", "hearing measurement", "dx", "wp", []],
    ["auscultation", "aws-kul-TA-shun", "Listening for sounds within the body, usually within the chest or abdomen.", "listening to body sounds", "dx", "exam", []],
    ["autoimmune disease", "aw-to-ih-MUNE", "Immune disorder in which the body makes antibodies to its own tissues.", "body attacking its own tissue", "mc", "type", []],
    ["bacilli", "bah-SIL-i", "Rod-shaped bacteria; singular: bacillus; cause typhoid, tuberculosis, tetanus and botulism.", "rod-shaped bacteria", "mc", "mic", []],
    ["bacilluria", "bas-ih-LU-re-ah", "Bacilli in the urine (bacill/i + -uria).", "rod bacteria in the urine", "mc", "mic", []],
    ["bacteria", "bak-TE-re-ah", "Simple microscopic organisms widespread throughout the world, some of which can produce disease; singular: bacterium.", "single-celled microbes", "mc", "mic", []],
    ["bactericidal", "bak-tere-ih-SI-dal", "Killing bacteria (bacteri/o + -cide).", "killing bacteria", "mc", "mic", []],
    ["bacteriology", "bak-tere-e-OL-o-je", "Study of bacteria (bacteri/o + -logy).", "study of bacteria", "mc", "mic", []],
    ["bacteriostatic", "bak-tere-e-o-STAT-ik", "Stopping (stasis) the growth of bacteria.", "stopping bacterial growth", "mc", "mic", []],
    ["barometer", "bah-ROM-eh-ter", "Instrument used to measure pressure.", "air-pressure meter", "dx", "wp", []],
    ["barotrauma", "bah-ro-TRAW-mah", "Injury caused by pressure.", "injury caused by pressure", "dx", "wp", []],
    ["benign", "be-NINE", "Not recurrent or malignant; describing a tumor that does not spread (metastasize) to other tissues.", "not cancerous", "rs", "neo", []],
    ["biofeedback", "bi-o-FEDE-bak", "Learning control of involuntary responses by monitoring bodily changes electronically and feeding the information back.", "learning to control body functions with feedback", "tx", "alt", []],
    ["biopsy", "BI-op-se", "Removal of a small amount of tissue for microscopic examination.", "tissue sampling", "dx", "exam", ["bx"]],
    ["blastoma", "blas-TO-mah", "A tumor of immature cells (blast/o + -oma).", "tumour of immature cells", "lx", "wp", []],
    ["blepharoptosis", "blef-eh-rop-TO-sis", "Dropping or drooping of the eyelid (blephar/o + ptosis).", "drooping eyelid", "lx", "wp", []],
    ["blood pressure", "blud PRESH-ur", "Force of blood against artery walls, measured in mm Hg when the heart contracts (systolic) and relaxes (diastolic).", "force of blood on artery walls", "dx", "exam", ["BP"]],
    ["bolus", "BO-lus", "A concentrated amount of a diagnostic or therapeutic substance given rapidly intravenously.", "single rapid dose", "rx", "route", []],
    ["bougie", "BOO-zhe", "Slender, flexible instrument for exploring and dilating tubes.", "slender dilating rod", "tx", "inst", []],
    ["bradypnea", "brad-ip-NE-ah", "Slow breathing rate (brady- + -pnea).", "slow breathing", "lx", "wp", []],
    ["brand name", "brand", "The trade or proprietary name of a drug, a registered trademark written with an initial capital letter.", "company’s trade name for a drug", "rx", "drug", []],
    ["bronchodilator", "brong-ko-di-LA-tor", "Drug that widens the bronchi, used in asthma.", "widens the airways", "rx", "drug", []],
    ["bronchoscope", "BRONG-ko-skope", "Endoscope used to examine the bronchi (breathing passages).", "airway viewing scope", "dx", "exam", []],
    ["bronchospasm", "BRONG-ko-spazm", "Sudden contraction of a bronchus (bronch/o + spasm).", "airway spasm", "lx", "wp", []],
    ["bronchostenosis", "brong-ko-steh-NO-sis", "Narrowing of a bronchus (bronch/o + stenosis).", "narrowing of an airway", "lx", "wp", []],
    ["bruit", "brwe", "A sound, usually abnormal, heard in auscultation.", "abnormal vessel sound", "dx", "sx", []],
    ["calorimeter", "kal-o-RIM-eh-ter", "Instrument for measuring the caloric energy of food.", "heat-measuring instrument", "dx", "wp", []],
    ["cannula", "KAN-u-lah", "Tube enclosing a trocar that allows escape of fluid or air after removal of the trocar.", "tube left in place after the trocar", "tx", "inst", []],
    ["capsule", "KAP-sule", "Material in a gelatin container that dissolves easily in the stomach.", "gelatin shell holding a drug", "rx", "route", ["cap"]],
    ["carcinogen", "kar-SIN-o-jen", "A substance that causes cancer (carcin/o + -gen).", "cancer-causing agent", "lx", "wp", []],
    ["carcinogenesis", "kar-sih-no-JEN-eh-sis", "Formation or origin of cancer (carcin/o + -genesis).", "origin of cancer", "lx", "wp", []],
    ["carcinoid", "KAR-sih-noyd", "Resembling a carcinoma; a type of slow-growing tumor (carcin/o + -oid).", "slow-growing neuroendocrine tumour", "lx", "wp", []],
    ["carcinoma", "kar-sih-NO-mah", "A malignant neoplasm composed of epithelial cells (Greek carcino: crab).", "cancer of epithelial tissue (carcinoma)", "rs", "neo", ["CA", "Ca"]],
    ["carcinoma in situ", "in SI-tu", "Localized, noninvasive cancer (in situ: in position) that has not spread.", "cancer that has not spread", "rs", "neo", ["CIS"]],
    ["cardiomegaly", "kar-de-o-MEG-ah-le", "Enlargement of the heart (cardi/o + -megaly).", "enlarged heart", "lx", "wp", []],
    ["cardionecrosis", "kar-de-o-neh-KRO-sis", "Death of heart tissue (cardi/o + necrosis).", "death of heart tissue", "lx", "wp", []],
    ["catheter", "KATH-eh-ter", "A thin tube that can be passed into a body cavity, organ or vessel to remove or introduce fluids.", "thin flexible tube", "tx", "care", []],
    ["cautery", "KAW-ter-e", "Destruction of tissue by a damaging agent such as a chemical, heat or electric current (electrocautery).", "burning tissue", "tx", "surg", []],
    ["celiocentesis", "se-le-o-sen-TE-sis", "Puncture of the abdomen (celi/o + -centesis).", "drawing fluid from the abdomen", "tx", "surg", []],
    ["celioscopy", "se-le-OS-ko-pe", "Examination of the abdominal cavity (celi/o).", "scope examination of the abdominal cavity", "dx", "wp", []],
    ["cellulitis", "sel-u-LI-tis", "A spreading inflammation of tissue.", "spreading skin infection", "rs", "inf", []],
    ["cephaledema", "sef-al-eh-DE-mah", "Swelling of the head (cephal/o + edema).", "swelling of the head", "lx", "wp", []],
    ["cephalgia", "seh-FAL-je-ah", "Pain in the head; headache (cephal/o + -algia).", "headache", "lx", "wp", []],
    ["chemotherapy", "ke-mo-THER-ah-pe", "Use of chemicals to treat disease; often applied specifically to cancer treatment.", "drug treatment of cancer", "tx", "care", []],
    ["chief complaint", "cheef kom-PLANE", "The main reason, in the patient’s own words, for seeking care.", "main complaint", "dx", "exam", ["CC"]],
    ["chiropractic", "ki-ro-PRAK-tik", "Science that stresses the nervous system; the spine is often manipulated to correct misalignment (cheir: hand).", "spinal manipulation therapy", "tx", "alt", []],
    ["chlamydia", "klah-MID-e-ah", "Extremely small bacteria that grow only in living cells but, unlike viruses, are susceptible to antibiotics.", "tiny intracellular bacteria", "mc", "mic", []],
    ["chromatic", "kro-MAT-ik", "Having color.", "coloured", "dx", "wp", []],
    ["chronic", "KRON-ik", "Of long duration, progressing slowly (chron/o: time).", "long-lasting (chronic)", "mc", "type", []],
    ["chronologic", "kron-o-LOJ-ik", "Arranged according to the time of occurrence.", "in time order", "dx", "wp", []],
    ["chronometer", "kron-OM-eh-ter", "Instrument for measuring time.", "time-measuring instrument", "dx", "wp", []],
    ["chronotropic", "kron-o-TROP-ik", "Affecting timing, such as the rate of the heartbeat.", "affecting heart rate", "rx", "drug", []],
    ["cineradiography", "sin-eh-ra-de-OG-rah-fe", "Making a motion picture of successive images appearing on a fluoroscopic screen.", "x-ray film", "dx", "img", []],
    ["clamp", "klamp", "Instrument used to compress tissue.", "compressing instrument", "tx", "inst", []],
    ["clubbing", "KLUB-ing", "Enlargement of the ends of the fingers and toes because of soft-tissue growth of the nails; seen especially in lung and heart diseases.", "widened fingertips", "dx", "sx", []],
    ["clysis", "KLI-sis", "Introduction of fluid into the body other than orally, as into the rectum or abdominal cavity; also the solution used.", "fluid infusion", "tx", "care", []],
    ["cocci", "KOK-si", "Round bacteria; may form clusters (staphylococci) or chains (streptococci); singular: coccus.", "round bacteria", "mc", "mic", []],
    ["colic", "KOL-ik", "Acute abdominal pain associated with smooth muscle spasms.", "cramping abdominal pain", "dx", "sx", []],
    ["colostomy", "ko-LOS-to-me", "Surgical creation of an opening into the colon (col/o + -stomy).", "opening of the colon onto the abdomen", "tx", "surg", []],
    ["communicable", "ko-MUN-ih-kah-bl", "Capable of passing from one person to another, such as an infectious disease.", "spread from person to person", "mc", "mic", []],
    ["computed tomography", "kom-PU-ted to-MOG-rah-fe", "Use of a computer to generate cross-sectional images from many x-rays passed at different angles through the body.", "x-ray slices built by computer", "dx", "img", ["CT"]],
    ["congenital", "kon-JEN-ih-tal", "Present at birth, such as a congenital malformation.", "present at birth", "mc", "type", []],
    ["contraceptive", "kon-trah-SEP-tiv", "Preventing conception (contra-: against).", "preventing pregnancy", "rx", "drug", []],
    ["contraindication", "kon-trah-in-dih-KA-shun", "A factor that makes the use of a drug undesirable or dangerous.", "reason not to use a treatment", "rx", "drug", []],
    ["contrast medium", "KON-trast ME-de-um", "Substance such as barium that improves the visibility of soft tissues in imaging.", "dye that improves imaging", "dx", "img", []],
    ["countertransport", "kown-ter-TRANS-port", "Movement in an opposite direction (counter-: against).", "opposite pulling force", "rx", "drug", []],
    ["craniomalacia", "kra-ne-o-mah-LA-she-ah", "Softening of the skull (crani/o + malacia).", "softening of the skull", "lx", "wp", []],
    ["cream", "kreme", "A semisolid emulsion used topically.", "semisolid skin emulsion", "rx", "route", []],
    ["cryoprobe", "KRI-o-probe", "Instrument used to apply extreme cold.", "freezing probe", "dx", "wp", []],
    ["cryotherapy", "kri-o-THER-ah-pe", "Treatment using cold.", "cold treatment", "dx", "wp", []],
    ["culture and sensitivity", "KUL-chur", "Growing bacteria from a sample and testing which drugs kill them.", "growing microbes and testing antibiotics", "dx", "exam", ["C&S"]],
    ["curet", "KU-ret", "Spoon-shaped instrument for removing material from the wall of a cavity or other surface; curette.", "scraping spoon", "tx", "inst", []],
    ["cyanosis", "si-ah-NO-sis", "Bluish discoloration of the skin due to lack of oxygen.", "bluish skin", "dx", "sx", []],
    ["cyst", "sist", "An abnormal filled sac or pouch that is not cancerous; as a root (cyst/o) it means a normal bladder or sac.", "abnormal fluid-filled sac", "rs", "neo", []],
    ["cystic", "SIS-tik", "Pertaining to or having cysts (cyst/o + -ic).", "having cysts", "lx", "wp", []],
    ["cystitis", "sis-TI-tis", "Inflammation of the urinary bladder (cyst/o + -itis).", "bladder inflammation", "lx", "wp", []],
    ["cystotome", "SIS-to-tome", "Instrument for incising the urinary bladder (cyst/o + -tome).", "bladder-cutting instrument", "lx", "wp", []],
    ["degenerative disease", "de-JEN-er-ah-tiv", "Disease that results from wear and tear, aging or trauma, such as arthritis or emphysema.", "wasting disease", "mc", "type", []],
    ["diagnosis", "di-ag-NO-sis", "The process of determining the cause and nature of an illness.", "identifying the illness", "dx", "sci", ["Dx"]],
    ["dialysis", "di-AL-ih-sis", "Separation of substances by passage through (dia-) a membrane.", "blood filtering through a membrane", "lx", "wp", []],
    ["diaphoresis", "di-ah-fo-RE-sis", "Profuse sweating.", "profuse sweating", "dx", "sx", []],
    ["diastolic pressure", "di-ah-STOL-ik", "Blood pressure recorded when the heart is relaxing.", "lower blood pressure number", "dx", "exam", []],
    ["disease", "dih-ZEZE", "Any disorder of normal body function.", "disturbance of normal body function", "mc", "sci", []],
    ["drain", "drane", "Device that allows matter to escape from a wound or cavity, such as a Penrose or Jackson–Pratt drain.", "tube that lets fluid out", "tx", "surg", []],
    ["drug", "drug", "A substance that alters body function.", "substance that changes body function", "rx", "drug", ["MED"]],
    ["dysentery", "DIS-en-ter-e", "Painful inflammation of the intestine with diarrhea (dys- + enter/o).", "bloody diarrhoea", "lx", "wp", []],
    ["dysphagia", "dis-FA-je-ah", "Difficulty in swallowing (dys- + phag/o).", "difficulty swallowing", "lx", "wp", []],
    ["dysplasia", "dis-PLA-je-ah", "Abnormal development of tissue (dys- + plas).", "abnormal tissue growth", "lx", "wp", []],
    ["dystrophy", "DIS-tro-fe", "Abnormal nourishment or development of tissue (dys- + -trophy).", "abnormal tissue nourishment", "lx", "wp", []],
    ["echography", "ek-OG-rah-fe", "Recording data obtained by ultrasound; ultrasonography.", "ultrasound recording", "dx", "img", []],
    ["edema", "eh-DE-mah", "Accumulation of fluid in the tissues; swelling; adjective: edematous.", "swelling", "rs", "inf", []],
    ["edematous", "eh-DE-mah-tus", "Swollen with fluid; adjective of edema.", "swollen", "rs", "inf", []],
    ["efficacy", "EF-ih-kah-se", "The power to produce a specific result; effectiveness.", "effectiveness", "rx", "drug", []],
    ["effusion", "eh-FU-zhun", "Escape of fluid into a cavity or other body part.", "fluid collecting in a cavity", "rs", "les", []],
    ["elective surgery", "e-LEK-tiv", "Optional surgery that would not cause serious consequences if delayed or not done.", "planned, non-urgent surgery", "tx", "surg", []],
    ["electrocardiogram", "eh-lek-tro-KAR-de-o-gram", "Record of the heart’s electrical activity.", "heart tracing (ECG)", "dx", "wp", ["ECG"]],
    ["electroencephalograph", "e-lek-tro-en-SEF-ah-lo-graf", "Instrument used to record the brain’s electrical activity.", "brain-wave recorder", "dx", "wp", []],
    ["electrolysis", "e-lek-TROL-ih-sis", "Decomposition of a substance by means of electric current.", "breakdown by electric current", "dx", "wp", []],
    ["elevator", "EL-eh-va-tor", "Instrument for lifting tissue or bone.", "lifting instrument", "tx", "inst", []],
    ["elixir", "e-LIK-sar", "Clear, pleasantly flavored and sweetened hydroalcoholic liquid for oral use.", "sweetened alcoholic liquid medicine", "rx", "route", ["elix"]],
    ["emergency medical technician", "e-MER-jen-se", "Healthcare professional who first arrives at an emergency scene, assesses and stabilizes the patient and transports to a medical facility.", "first responder at the scene", "mc", "sci", ["EMT"]],
    ["emulsion", "e-MUL-shun", "A mixture in which one liquid is dispersed but not dissolved in another liquid.", "mixture of undissolved liquids", "rx", "route", []],
    ["endemic", "en-DEM-ik", "Occurring at a low level but continuously in a given region, such as the common cold.", "constantly present in a region", "mc", "mic", []],
    ["endoscope", "EN-do-skope", "Instrument for examining the inside of an organ or cavity through a body opening or small incision; most use fiber optics.", "instrument for viewing inside", "dx", "exam", []],
    ["endotoxin", "en-do-TOK-sin", "A toxin contained within bacterial cells (endo- + tox/o).", "toxin inside bacteria", "lx", "wp", []],
    ["epidemic", "ep-ih-DEM-ik", "Affecting many people in a given region at the same time.", "sudden widespread outbreak", "mc", "mic", []],
    ["epidural", "ep-ih-DUR-al", "Injected into the space between the meninges and the spine.", "around the spinal cord coverings", "rx", "route", []],
    ["ergometry", "er-GOM-eh-tre", "Measurement of work done.", "measuring work done", "dx", "wp", []],
    ["etiology", "e-te-OL-o-je", "The cause of a disease.", "cause of disease", "mc", "type", []],
    ["exacerbation", "eks-zas-er-BA-shun", "Worsening of disease; increase in severity of a disease or its symptoms.", "worsening of a disease", "mc", "type", []],
    ["excision", "ek-SIZH-un", "Removal by cutting (suffix -ectomy).", "cutting out", "tx", "surg", []],
    ["exotoxin", "ek-so-TOK-sin", "A toxin secreted by bacterial cells (exo- + tox/o).", "toxin released by bacteria", "lx", "wp", []],
    ["exudate", "EKS-u-date", "Material that escapes from blood vessels as a result of tissue injury.", "oozing fluid", "rs", "inf", []],
    ["facies", "FA-she-eze", "The expression or appearance of the face.", "facial expression", "dx", "sx", []],
    ["febrile", "FEB-ril", "Pertaining to fever.", "feverish", "dx", "sx", []],
    ["fever of unknown origin", "FE-ver", "Fever whose cause cannot be found despite investigation.", "fever with no cause found", "dx", "sx", ["FUO"]],
    ["fissure", "FISH-ur", "A groove or split.", "groove or split", "rs", "les", []],
    ["fistula", "FIS-tu-lah", "An abnormal passage between two organs or from an organ to the surface of the body.", "abnormal passage", "rs", "les", []],
    ["fixation", "fik-SA-shun", "Holding or fastening a structure in a firm position (suffix -pexy).", "holding in place", "tx", "surg", []],
    ["fluoroscopy", "flor-OS-ko-pe", "Use of x-rays to examine deep structures on a fluorescent screen; the device is a fluoroscope.", "live moving X-ray imaging", "dx", "img", []],
    ["forceps", "FOR-seps", "Instrument for holding or extracting.", "grasping instrument", "tx", "inst", []],
    ["fungus", "FUN-gus", "Simple nongreen plant-like organism, some parasitic; includes yeasts and molds; plural: fungi.", "yeast or mould", "mc", "mic", []],
    ["gangrene", "GANG-grene", "Death of tissue, usually caused by lack of blood supply; may be associated with bacterial infection and decomposition.", "tissue death with decay", "rs", "les", []],
    ["gastrectasia", "gas-trek-TA-se-ah", "Dilatation of the stomach (gastr/o + ectasia).", "stretching of the stomach", "lx", "wp", []],
    ["gastrocele", "GAS-tro-sele", "Hernia of the stomach (gastr/o + -cele).", "hernia of the stomach", "lx", "wp", []],
    ["gastrodynia", "gas-tro-DIN-e-ah", "Pain in the stomach (gastr/o + -odynia).", "stomach pain", "lx", "wp", []],
    ["gastroplasty", "GAS-tro-plas-te", "Plastic repair of the stomach (gastr/o + -plasty).", "surgical repair of the stomach", "tx", "surg", []],
    ["generic name", "jeh-NER-ik", "The nonproprietary name of a drug, usually a simplified chemical name; not capitalized.", "non-proprietary drug name", "rx", "drug", []],
    ["Gigli saw", "JE-yle", "Flexible wire saw.", "wire saw", "tx", "inst", []],
    ["grading", "GRA-ding", "Evaluating a tumor by microscopic examination of its cells; grades I to IV with increasing abnormality.", "rating cell abnormality", "tx", "care", []],
    ["Gram stain", "gram", "Laboratory staining procedure that divides bacteria into gram positive (purple) and gram negative (red).", "stain that sorts bacteria into two groups", "mc", "mic", ["Gm+", "Gm−"]],
    ["helminth", "HEL-minth", "A worm; helminths cause trichinosis and infestations with roundworms, pinworms and hookworms.", "parasitic worm", "mc", "mic", []],
    ["hemolysis", "he-MOL-ih-sis", "Destruction of blood cells (hem/o + lysis).", "destruction of red blood cells", "lx", "wp", []],
    ["hemorrhage", "HEM-or-ij", "Profuse flow of blood; bleeding (hem/o + -rrhage).", "heavy bleeding", "lx", "wp", []],
    ["hemostasis", "he-mo-STA-sis", "Stoppage of blood flow (hem/o + stasis).", "stopping of bleeding", "lx", "wp", []],
    ["hemostat", "HE-mo-stat", "Small clamp for stopping blood flow from a vessel.", "clamp that stops bleeding", "tx", "inst", []],
    ["hepatectomy", "hep-ah-TEK-to-me", "Excision of liver tissue (hepat/o + -ectomy).", "removal of part of the liver", "tx", "surg", []],
    ["hepatomegaly", "hep-ah-to-MEG-ah-le", "Enlargement of the liver (hepat/o + -megaly).", "enlarged liver", "lx", "wp", []],
    ["hepatorrhexis", "hep-ah-to-REK-sis", "Rupture of the liver (hepat/o + -rrhexis).", "rupture of the liver", "lx", "wp", []],
    ["herbal medicine", "ER-bal", "Use of plants to treat disease; also called phytomedicine (phyt/o: plant).", "plant-based medicine", "rx", "drug", []],
    ["hernia", "HER-ne-ah", "Protrusion of an organ through an abnormal opening; commonly called a rupture.", "rupture", "rs", "les", []],
    ["herniorrhaphy", "her-ne-OR-ah-fe", "Surgical repair of a hernia (herni/o + -rrhaphy).", "surgical repair of a hernia", "tx", "surg", []],
    ["hiatal hernia", "hi-A-tal", "Protrusion of the stomach through the diaphragm into the thoracic cavity.", "stomach pushing through the diaphragm", "rs", "les", []],
    ["history", "HIS-to-re", "Record of the present illness, past medical history and family and social history, taken at the start of diagnosis.", "patient’s account of illness and background", "dx", "exam", ["Hx"]],
    ["holistic health care", "ho-LIS-tik", "Treating a person as a whole with physical, emotional, social and spiritual needs, stressing the maintenance of good health.", "whole-person care", "tx", "alt", []],
    ["homeopathy", "ho-me-OP-ah-the", "Treating disease with drugs in highly diluted form along with healthy life habits (home/o: same, path/o: disease).", "treatment with tiny doses of like substances", "tx", "alt", []],
    ["hormonal disorder", "hor-MO-nal", "Disorder caused by underproduction or overproduction of hormones or failure of hormones to act, such as diabetes mellitus.", "hormone disorder", "mc", "type", []],
    ["hydrocele", "HI-dro-sele", "Local dilatation containing fluid (hydr/o + -cele).", "fluid sac around the testis", "lx", "wp", []],
    ["hyperbaric", "hi-per-BAR-ik", "Pertaining to increased pressure.", "above normal pressure", "dx", "wp", []],
    ["hyperplasia", "hi-per-PLA-ze-ah", "Excessive growth of normal cells in normal arrangement.", "increase in cell number", "rs", "neo", []],
    ["hyperpyrexia", "hi-per-pi-REK-se-ah", "Abnormally high body temperature; extremely high fever.", "very high fever", "lx", "wp", []],
    ["hyperthermia", "hi-per-THER-me-ah", "Abnormally high body temperature.", "raised body temperature", "dx", "wp", []],
    ["hypertrophy", "hi-PER-tro-fe", "An increase in the size of an organ without increase in the number of cells, as in exercised muscles.", "increase in cell size", "rs", "neo", []],
    ["hypnosis", "hip-NO-sis", "Induced state of sleep (hypn/o: sleep).", "trance-like state", "rx", "drug", []],
    ["hypnotic", "hip-NOT-ik", "Drug that induces sleep.", "sleep-inducing drug", "rx", "drug", []],
    ["hypodermoclysis", "hi-po-der-MOK-lih-sis", "Administration of a solution by subcutaneous infusion; an alternative to IV infusion.", "fluid injected under the skin", "rx", "route", []],
    ["hypothermia", "hi-po-THER-me-ah", "Abnormally low body temperature.", "lowered body temperature", "dx", "wp", []],
    ["hysteropexy", "HIS-ter-o-pek-se", "Surgical fixation of the uterus (hyster/o + -pexy).", "surgical fixation of the uterus", "tx", "surg", []],
    ["iatrogenic", "i-at-ro-JEN-ik", "Caused by the effects of treatment (iatro-: physician).", "caused by treatment", "mc", "type", []],
    ["ibuprofen", "i-bu-PRO-fen", "Nonsteroidal anti-inflammatory drug; brand names Motrin and Advil.", "anti-inflammatory painkiller", "rx", "drug", []],
    ["idiopathic", "id-e-o-PATH-ik", "Having no known cause (root idio: self-originating).", "of unknown cause", "mc", "type", []],
    ["immunity", "ih-MU-nih-te", "All our defenses against infectious disease.", "body’s protection against infection", "rs", "imm", []],
    ["immunotherapy", "im-u-no-THER-ah-pe", "Treatment that involves stimulation or suppression of the immune system.", "treatment through the immune system", "tx", "care", []],
    ["incision", "in-SIZH-un", "A cut, as for surgery; also the act of cutting (suffix -tomy).", "surgical cut", "tx", "surg", []],
    ["induration", "in-du-RA-shun", "Hardening; an abnormally hard spot or place.", "localised firm spot in tissue", "rs", "les", []],
    ["infectious disease", "in-FEK-shus", "Disease caused by harmful microorganisms and other parasites that live at the expense of another organism.", "illness caused by microbes", "mc", "type", []],
    ["inflammation", "in-flah-MA-shun", "A localized response to tissue injury characterized by heat, pain, redness and swelling.", "heat, redness, swelling and pain", "rs", "inf", []],
    ["inhalation", "in-hah-LA-shun", "Administration through the respiratory system, as by breathing in an aerosol or nebulizer spray.", "breathing in", "rx", "route", []],
    ["injection", "in-JEK-shun", "Administration by a needle and syringe.", "giving a drug by needle", "rx", "route", []],
    ["innate immunity", "ih-NATE", "Inborn protective mechanisms based on genetic makeup that need no previous exposure, such as inflammation, phagocytosis and intact skin.", "inborn immunity", "rs", "imm", []],
    ["inspection", "in-SPEK-shun", "Visual examination of the body.", "looking", "dx", "exam", []],
    ["instillation", "in-stil-LA-shun", "Liquid dropped or poured slowly into a body cavity or onto a surface, such as into the ear or onto the conjunctiva.", "putting in drop by drop", "rx", "route", []],
    ["intradermal", "in-trah-DER-mal", "Injected into the skin.", "into the skin", "rx", "route", ["ID"]],
    ["intramuscular", "in-trah-MUS-ku-lar", "Injected into a muscle.", "into a muscle", "rx", "route", ["IM"]],
    ["intrathecal", "in-trah-THE-kal", "Injected through the meninges into the spinal fluid; spinal.", "into the spinal canal", "rx", "route", []],
    ["intravenous", "in-trah-VE-nus", "Injected into a vein.", "into a vein", "rx", "route", ["IV"]],
    ["irrigation", "ir-ih-GA-shun", "Flushing of a tube, cavity or area with a fluid.", "washing out", "tx", "care", []],
    ["karyoclasis", "kar-e-OK-lah-sis", "Breaking of a nucleus (kary/o + -clasis).", "breakdown of the cell nucleus", "lx", "wp", []],
    ["laparoscopy", "lap-ah-ROS-ko-pe", "Examination of the abdomen through an endoscope (lapar/o).", "looking inside the abdomen (laparoscopy)", "dx", "wp", []],
    ["laparotomy", "lap-ah-ROT-o-me", "Surgical incision of the abdomen (lapar/o + -tomy).", "cutting into the abdomen", "tx", "surg", []],
    ["laser", "LA-zer", "Device that transforms light into a beam of intense heat and power; used for surgery and diagnosis.", "intense light beam", "tx", "surg", []],
    ["lavage", "lah-VAJ", "The washing out of a cavity; irrigation.", "washing out a cavity", "tx", "care", []],
    ["lesion", "LE-zhun", "A distinct area of damaged tissue; an injury or wound.", "area of damaged tissue", "rs", "les", []],
    ["ligature", "LIG-ah-chur", "A tie or bandage; the process of binding or tying (ligation).", "thread tied around a vessel", "tx", "surg", []],
    ["lipoma", "li-PO-mah", "A tumor of fat cells (lip/o + -oma).", "fatty tumour", "lx", "wp", []],
    ["liquid biopsy", "LIK-wid BI-op-se", "Diagnosis or monitoring of cancer by analysis of cancer cells or tumor DNA in circulating blood.", "tumour test from a blood sample", "dx", "exam", []],
    ["lithiasis", "lith-I-ah-sis", "Stone formation (lith + -iasis).", "stone formation", "lx", "wp", []],
    ["lithotomy", "lih-THOT-o-me", "Incision of an organ to remove a stone.", "incision to remove a stone", "tx", "surg", []],
    ["lithotripsy", "LITH-o-trip-se", "Crushing of a stone (lith/o + -tripsy).", "stone crushing", "tx", "surg", []],
    ["lotion", "LO-shun", "Solution prepared for topical use.", "liquid for the skin", "rx", "route", []],
    ["lozenge", "LOZ-enj", "Pleasant-tasting medicated tablet or disk dissolved in the mouth, such as a cough drop.", "medicated tablet that dissolves in the mouth", "rx", "route", []],
    ["magnetic resonance imaging", "mag-NET-ik REZ-o-nans", "Production of images through the use of a magnetic field and radio waves, without x-rays.", "MRI (magnetic resonance imaging)", "dx", "img", ["MRI"]],
    ["malabsorption", "mal-ab-SORP-shun", "Poor absorption of nutrients (mal- + absorption).", "poor absorption", "lx", "wp", []],
    ["malaise", "mah-LAZE", "A feeling of discomfort or uneasiness, often indicative of infection or other disease (mal-: bad).", "vague feeling of illness", "dx", "sx", []],
    ["malignant", "mah-LIG-nant", "Growing worse, harmful, tending to cause death; describing an invasive tumor that can spread to other tissues.", "cancerous and spreading", "rs", "neo", []],
    ["malnutrition", "mal-nu-TRISH-un", "Poor nutrition caused by inadequate intake or use of nutrients (mal- + nutrition).", "poor nutrition", "lx", "wp", []],
    ["massage", "ma-SAHJ", "Manipulation of the body to calm, relieve tension, increase circulation and stimulate muscles.", "kneading the body’s soft tissues", "tx", "alt", []],
    ["meditation", "med-ih-TA-shun", "Clearing the mind by concentrating on the inner self while controlling breathing.", "focused calming of the mind", "tx", "alt", []],
    ["melanoma", "mel-ah-NO-mah", "A cancer of pigmented epithelial cells (melanocytes).", "black pigment-cell tumour (melanoma)", "rs", "neo", []],
    ["menorrhagia", "men-o-RA-je-ah", "Profuse menstrual flow (men/o + -rrhagia).", "heavy menstrual bleeding", "lx", "wp", []],
    ["menostasis", "men-OS-tah-sis", "Suppression of menstrual flow (men/o + stasis).", "stopping of menstrual flow", "lx", "wp", []],
    ["mental disorder", "MEN-tal", "Disorder that affects the mind and the adaptation of a person to the environment.", "disorder of mind and behaviour", "mc", "type", []],
    ["metabolic disorder", "met-ah-BOL-ik", "Disorder resulting from lack of enzymes or other factors needed for cellular functions; many are hereditary.", "disorder of body chemistry", "mc", "type", []],
    ["metaplasia", "met-ah-PLA-ze-ah", "Conversion of cells to a form that is not normal for that tissue (meta-: change).", "change of cell type", "rs", "neo", []],
    ["metastasis", "meh-TAS-tah-sis", "Spread from one part of the body to another, characteristic of cancer (meta-: change + stasis: stand); verb metastasize.", "spread of cancer", "rs", "neo", ["MET"]],
    ["metered-dose inhaler", "ME-terd dose in-HA-ler", "Device that delivers a measured dose of an aerosol drug for inhalation.", "inhaler that gives a measured dose", "rx", "route", []],
    ["microorganism", "mi-kro-OR-gan-izm", "An organism too small to be seen without the aid of a microscope.", "microscopic organism", "mc", "mic", []],
    ["microscope", "MI-kro-skope", "Instrument for examining very small objects.", "magnifying instrument", "dx", "wp", []],
    ["microtome", "MI-kro-tome", "Instrument for cutting thin sections of tissue for microscopic study.", "thin-slicing instrument", "tx", "surg", []],
    ["mucolytic", "mu-ko-LIT-ik", "Agent that dissolves or loosens mucus.", "mucus thinner", "rx", "drug", []],
    ["multidrug resistant", "mul-te-DRUG re-ZIS-tant", "Describing an organism that cannot be killed by many different antibiotics.", "resistant to many drugs", "mc", "mic", ["MDR"]],
    ["myalgia", "mi-AL-je-ah", "Pain in a muscle (my/o + -algia).", "muscle pain", "lx", "wp", []],
    ["mycology", "mi-KOL-o-je", "Study of fungi (myc/o + -logy).", "study of fungi", "mc", "mic", []],
    ["mycosis", "mi-KO-sis", "Any disease caused by a fungus.", "fungal disease", "mc", "mic", []],
    ["mycotic", "mi-KOT-ik", "Pertaining to a fungus.", "fungal", "mc", "mic", []],
    ["myolysis", "mi-OL-ih-sis", "Dissolving or destruction of muscle (my/o + lysis).", "destruction of muscle", "lx", "wp", []],
    ["myopathy", "mi-OP-ah-the", "Any disease of muscle (my/o + -pathy).", "muscle disease", "lx", "wp", []],
    ["myorrhexis", "mi-o-REK-sis", "Rupture of a muscle (my/o + -rrhexis).", "rupture of a muscle", "lx", "wp", []],
    ["narcotic", "nar-KOT-ik", "Agent that induces a state of stupor with decreased sensation (narc/o: stupor).", "opioid", "rx", "drug", []],
    ["naturopathy", "na-chur-OP-ah-the", "Therapeutic philosophy of helping people heal themselves by developing healthy lifestyles.", "natural-remedy medicine", "tx", "alt", []],
    ["nebulizer", "NEB-u-li-zer", "Device that turns a liquid drug into a fine spray for inhalation.", "device that turns liquid medicine into mist", "rx", "route", []],
    ["necrosis", "neh-KRO-sis", "Death of tissue (necr/o: death); adjective: necrotic.", "tissue death", "rs", "les", []],
    ["neoplasia", "ne-o-PLA-ze-ah", "An abnormal and uncontrolled growth of tissue (neo-: new + plasm: formation).", "new uncontrolled growth", "rs", "neo", []],
    ["neoplasm", "NE-o-plazm", "A tumor, or abnormal growth, which may be benign or malignant (root onc/o and suffix -oma).", "tumour", "rs", "neo", []],
    ["nephropathy", "nef-ROP-ah-the", "Any disease of the kidney (nephr/o + -pathy).", "kidney disease", "lx", "wp", []],
    ["nephropexy", "NEF-ro-pek-se", "Surgical fixation of the kidney (nephr/o + -pexy).", "surgical fixation of a kidney", "tx", "surg", []],
    ["nephrotoxin", "nef-ro-TOK-sin", "A substance poisonous or harmful for the kidneys (nephr/o + toxin).", "substance toxic to the kidney", "lx", "wp", []],
    ["neuralgia", "nu-RAL-je-ah", "Pain in a nerve (neur/o + -algia).", "nerve pain", "lx", "wp", []],
    ["neuroma", "nu-RO-mah", "A tumor of a nerve (neur/o + -oma).", "nerve tumour", "lx", "wp", []],
    ["neurotripsy", "nu-ro-TRIP-se", "Crushing of a nerve (neur/o + -tripsy).", "crushing of a nerve", "tx", "surg", []],
    ["nocturnal", "nok-TUR-nal", "Pertaining to or occurring at night (noct/i, nyct/o: night).", "at night", "dx", "sx", []],
    ["nonsteroidal anti-inflammatory drug", "non-STER-oyd-al", "Drug that reduces inflammation and pain without steroids, such as ibuprofen.", "painkiller that reduces swelling, not a steroid", "rx", "drug", ["NSAID"]],
    ["normal flora", "FLO-rah", "Microorganisms that normally live on or in the body and are generally harmless and often beneficial.", "normal body flora", "mc", "mic", []],
    ["normal saline", "SA-lene", "A salt (NaCl) solution compatible with living cells; physiologic saline solution.", "salt solution matching body fluids", "tx", "care", ["NS", "PSS"]],
    ["nosocomial", "nos-o-KO-me-al", "Describing an infection acquired in a hospital (nos/o: disease, comial: hospital).", "hospital-acquired", "mc", "mic", []],
    ["nuclear medicine", "NU-kle-ar", "Branch of medicine concerned with the use of radioactive substances (radionuclides) for diagnosis, therapy and research.", "imaging with radioactive tracers", "dx", "img", []],
    ["ointment", "OYNT-ment", "Drug in a base that keeps it in contact with the skin; unguent.", "greasy skin preparation", "rx", "route", ["ung"]],
    ["oncogene", "ON-ko-jene", "A gene that causes a tumor (cancer).", "cancer-causing gene", "lx", "wp", []],
    ["oncogenic", "on-ko-JEN-ik", "Causing a tumor (onc/o + gen + -ic).", "tumour-causing", "lx", "wp", []],
    ["oncolysis", "on-KOL-ih-sis", "Destruction of a tumor (onc/o + -lysis).", "destruction of a tumour", "lx", "wp", []],
    ["open reduction", "O-pen re-DUK-shun", "Surgical incision to access broken bones directly and realign them.", "surgical realignment of a broken bone", "tx", "surg", []],
    ["ophthalmoscope", "of-THAL-mo-skope", "Instrument for examining the interior of the eye.", "eye-viewing instrument", "dx", "exam", []],
    ["opportunistic", "op-por-tu-NIS-tik", "Describing an infection that occurs because of a host’s poor or altered condition.", "striking when defences are weak", "mc", "mic", []],
    ["oral", "OR-al", "Given by mouth; per os.", "by mouth", "rx", "route", ["po"]],
    ["osteoclasis", "os-te-OK-lah-sis", "Breaking of a bone (oste/o + -clasis).", "Breaking of a bone", "lx", "wp", []],
    ["osteomalacia", "os-te-o-mah-LA-she-ah", "Softening of a bone (oste/o + malacia).", "softening of bone", "lx", "wp", []],
    ["osteonecrosis", "os-te-o-neh-KRO-sis", "Death of bone tissue (oste/o + necrosis).", "Death of bone tissue", "lx", "wp", []],
    ["osteopathy", "os-te-OP-ah-the", "System of therapy stressing identification and correction of faulty body structure (oste/o: bone).", "treatment by correcting body structure", "tx", "alt", []],
    ["otoscope", "O-to-skope", "Instrument used to examine the ears.", "ear-viewing instrument", "dx", "exam", []],
    ["over-the-counter drug", "O-ver the KOWN-ter", "Drug available without a signed order or prescription.", "over-the-counter medicine", "rx", "drug", ["OTC"]],
    ["pachycephaly", "pak-ih-SEF-ah-le", "Abnormal thickness of the skull (pachy- + cephal/o).", "abnormally thick skull", "lx", "wp", []],
    ["pachydactyly", "pak-e-DAK-til-e", "Abnormal thickness of the fingers (pachy- + dactyl/o).", "abnormally thick fingers", "lx", "wp", []],
    ["palliative therapy", "PAL-e-ah-tiv", "Treatment that provides relief but is not intended as a cure.", "comfort care without cure", "tx", "care", []],
    ["pallor", "PAL-or", "Paleness; lack of color.", "paleness", "dx", "sx", []],
    ["palpation", "pal-PA-shun", "Examining by placing the hands or fingers on the surface of the body to determine texture, temperature, movement and consistency.", "feeling with the hands", "dx", "exam", []],
    ["pandemic", "pan-DEM-ik", "Prevalent throughout an entire region or the world.", "worldwide epidemic", "mc", "mic", []],
    ["paracentesis", "par-ah-sen-TE-sis", "Puncture of a cavity for removal of fluid.", "drawing fluid from a cavity", "tx", "care", []],
    ["parasite", "PAR-ah-site", "An organism that grows on or in another organism (the host), causing damage to it.", "organism living at a host’s expense", "mc", "mic", []],
    ["parenteral", "pah-REN-ter-al", "Describing routes of administration by injection, other than through the digestive tract.", "given by injection, not by mouth", "rx", "route", []],
    ["pathogen", "PATH-o-jen", "An organism capable of causing disease (path/o: disease).", "disease-causing agent", "mc", "mic", []],
    ["pathogenesis", "path-o-JEN-eh-sis", "Origin and development of any disease (path/o + -genesis).", "development of disease", "lx", "wp", []],
    ["pathogenic", "path-o-JEN-ik", "Producing disease.", "disease-causing", "mc", "mic", []],
    ["pathologist", "pah-THOL-o-jist", "A specialist in the study of disease, especially of tissue changes (path/o + -logist).", "specialist in disease and tissue diagnosis", "lx", "wp", []],
    ["percussion", "per-KUSH-un", "Tapping the body lightly but sharply to assess underlying tissue by the sounds obtained.", "tapping", "dx", "exam", []],
    ["peripherally inserted central catheter", "peh-RIF-er-al-e", "Catheter inserted into an arm vein and threaded into the superior vena cava.", "central catheter inserted through an arm vein", "tx", "care", ["PICC"]],
    ["phagocyte", "FAG-o-site", "A cell that ingests and destroys bacteria and debris, such as a macrophage.", "cell that engulfs invaders", "rs", "imm", []],
    ["phagocytosis", "fag-o-si-TO-sis", "The ingestion of organisms or small particles by a cell (phag/o: to eat), which then destroys the ingested material.", "engulfing of invaders by cells", "rs", "imm", []],
    ["pharmacist", "FAR-mah-sist", "Professional who prepares and dispenses drugs; an excellent source of drug information.", "drug-dispensing specialist", "rx", "drug", []],
    ["pharmacology", "far-mah-KOL-o-je", "Study of drugs and their actions.", "study of drugs", "rx", "drug", []],
    ["pharmacy", "FAR-mah-se", "The science of preparing and dispensing drugs, or the place where this occurs (pharm, pharmac/o).", "drugstore; dispensing of drugs", "rx", "drug", []],
    ["phlebosclerosis", "fleb-o-skleh-RO-sis", "Hardening of veins (phleb/o + sclerosis).", "hardening of the veins", "lx", "wp", []],
    ["phonogram", "FO-no-gram", "A record of sound.", "sound recording", "dx", "wp", []],
    ["photoreaction", "fo-to-re-AK-shun", "Response to light.", "response to light", "dx", "wp", []],
    ["physical examination", "FIZ-ih-kal eg-zam-ih-NA-shun", "Examination of the body, including a review of all systems and observation of any signs of illness.", "hands-on check of the body", "dx", "exam", ["PE"]],
    ["phytomedicine", "fi-to-MED-ih-sin", "Another name for herbal medicine (phyt/o: plant).", "plant medicine", "rx", "drug", []],
    ["pleurodesis", "plu-ROD-eh-sis", "Binding of the pleura, the membranes around the lungs (pleur/o + -desis).", "sealing the pleural layers together", "tx", "surg", []],
    ["polygraph", "POL-e-graf", "Instrument that records many physiologic responses at once; lie detector.", "lie detector", "dx", "wp", []],
    ["polyp", "POL-ip", "A tumor attached by a thin stalk.", "mass on a stalk", "rs", "neo", []],
    ["portal of entry", "POR-tal", "Route by which an infecting organism enters the body, such as damaged skin or the respiratory, digestive, urinary or reproductive tract.", "route by which microbes get in", "mc", "mic", []],
    ["positron emission tomography", "POZ-ih-tron e-MISH-un", "Sectional imaging after giving a substance such as glucose labeled with a positron-emitting isotope; shows metabolic activity.", "PET scan (positron emission tomography)", "dx", "img", ["PET"]],
    ["postoperative", "post-OP-er-ah-tiv", "After surgery; includes recovery from anesthesia, follow-up and home-care instructions.", "after surgery", "tx", "surg", ["postop"]],
    ["potentiation", "po-ten-she-A-shun", "Increased potency created by two drugs acting together.", "strengthening of effect", "rx", "drug", []],
    ["preoperative", "pre-OP-er-ah-tiv", "Before surgery; includes examination, informed consent and preadmission testing.", "before surgery", "tx", "surg", ["preop"]],
    ["prescription", "pre-SKRIP-shun", "Written and signed order for a drug with directions for its administration.", "written order for a drug", "rx", "drug", ["Rx"]],
    ["prodrome", "PRO-drome", "A symptom indicating an approaching disease.", "early warning symptom", "dx", "sx", []],
    ["prognosis", "prog-NO-sis", "Prediction of a disease’s course and outcome.", "expected outcome (prognosis)", "tx", "care", []],
    ["prolapse", "PRO-laps", "A dropping or downward displacement of an organ or part; ptosis.", "slipping down of an organ", "rs", "les", []],
    ["prophylaxis", "pro-fih-LAK-sis", "Prevention of disease.", "prevention", "tx", "care", []],
    ["protozoon", "pro-to-ZO-on", "Single-celled animal; plural: protozoa; causes malaria and dysentery.", "single-celled organism", "mc", "mic", []],
    ["psychotropic", "si-ko-TROP-ik", "Acting on the mind (psych/o).", "acting on the mind", "rx", "drug", []],
    ["ptosis", "TO-sis", "Dropping, downward displacement or prolapse of an organ or part.", "drooping", "rs", "les", []],
    ["pulse", "puls", "Rhythmic expansion of an artery felt with each heartbeat; rate measured in beats per minute.", "beat felt over an artery", "dx", "exam", ["P"]],
    ["purulent", "PUR-u-lent", "Forming or containing pus.", "containing pus", "rs", "inf", []],
    ["pus", "pus", "A product of inflammation consisting of fluid and white blood cells (root py/o).", "pus", "rs", "inf", []],
    ["pyocyst", "PI-o-sist", "A cyst filled with pus (py/o + cyst).", "pus-filled cyst", "lx", "wp", []],
    ["pyoderma", "pi-o-DER-mah", "A skin disease associated with pus (py/o + derm/o).", "pus-forming skin infection", "lx", "wp", []],
    ["pyogenesis", "pi-o-JEN-eh-sis", "Formation of pus (py/o + -genesis).", "formation of pus", "lx", "wp", []],
    ["pyorrhea", "pi-o-RE-ah", "Discharge of pus (py/o + -rrhea).", "discharge of pus", "lx", "wp", []],
    ["pyrexia", "pi-REK-se-ah", "Fever (root pyr/o, pyret/o: fever, fire).", "fever", "lx", "wp", []],
    ["pyrogenic", "pi-ro-JEN-ik", "Inducing fever (pyr/o + gen + -ic).", "fever-causing", "lx", "wp", []],
    ["radiation therapy", "ra-de-A-shun", "Treatment of disease, especially cancer, with radiation.", "treatment with radiation", "tx", "care", ["RATx"]],
    ["radioactive", "ra-de-o-AK-tiv", "Giving off radiation.", "giving off radiation", "dx", "img", []],
    ["radiograph", "RA-de-o-graf", "Image produced by x-rays passed through the body onto film or a digital detector.", "x-ray image", "dx", "img", []],
    ["radiography", "ra-de-OG-rah-fe", "Use of x-rays passed through the body to make a visual record (radiograph) of internal structures on film or digitally; roentgenography.", "imaging with x-rays", "dx", "img", []],
    ["radiology", "ra-de-OL-o-je", "Branch of medicine that uses radiation, such as x-rays, in diagnosis and treatment; specialist: radiologist.", "medical imaging specialty", "dx", "img", []],
    ["radionuclide", "ra-de-o-NU-klide", "A substance that gives off radiation; used for diagnosis and treatment; radioisotope.", "radioactive substance", "dx", "img", []],
    ["rasp", "rasp", "Surgical file.", "surgical file", "tx", "inst", []],
    ["rectal", "REK-tal", "Administered by rectal suppository or enema.", "given through the rectum", "rx", "route", []],
    ["remission", "re-MISH-un", "Lessening of disease symptoms; the period during which this decrease occurs or no sign of disease exists.", "easing of a disease", "mc", "type", []],
    ["resection", "re-SEK-shun", "Partial excision of a structure.", "removal of part of an organ", "tx", "surg", []],
    ["retinoschisis", "ret-ih-NOS-kih-sis", "Splitting of the retina of the eye (retin/o + -schisis).", "splitting of the retina", "lx", "wp", []],
    ["retractor", "re-TRAK-tor", "Instrument that maintains exposure by separating a wound and holding back organs or tissues.", "instrument that holds a wound open", "tx", "inst", []],
    ["rhinoplasty", "RI-no-plas-te", "Plastic surgery of the nose (rhin/o + -plasty).", "cosmetic nose surgery", "tx", "surg", []],
    ["rickettsia", "rih-KET-se-ah", "Extremely small bacteria that grow in living cells; cause typhus and Rocky Mountain spotted fever.", "tiny bacteria spread by ticks and lice", "mc", "mic", []],
    ["robotic surgery", "ro-BOT-ik", "Computer-assisted surgery using robotic instruments; less invasive and with less bleeding.", "surgery with robot-guided instruments", "tx", "surg", []],
    ["rongeur", "ron-ZHUR", "Gouge forceps.", "bone-biting forceps", "tx", "inst", []],
    ["sarcoma", "sar-KO-mah", "A malignant neoplasm arising from connective tissue or muscle (Greek sarco: flesh).", "cancer of connective tissue", "rs", "neo", []],
    ["scalpel", "SKAL-pel", "Surgical knife with a sharp blade.", "surgical knife", "tx", "inst", []],
    ["scintigraphy", "sin-TIG-rah-fe", "Imaging the distribution of radioactivity in tissues after giving a radionuclide; the record is a scintiscan.", "nuclear scan", "dx", "img", []],
    ["scintiscan", "SIN-tih-skan", "Image obtained with a radionuclide and a scintillation camera, such as a bone scan.", "scan with a radioactive tracer", "dx", "img", []],
    ["scissors", "SIZ-ors", "A cutting instrument with two opposing blades.", "two-bladed cutting instrument", "tx", "inst", []],
    ["sclerosis", "skle-RO-sis", "Hardening of tissue (scler/o + -osis).", "hardening of tissue", "lx", "wp", []],
    ["sclerotic", "skleh-ROT-ik", "Hardened; pertaining to sclerosis.", "hardened", "lx", "wp", []],
    ["sepsis", "SEP-sis", "The presence of harmful microorganisms or their toxins in the blood or other tissues; adjective: septic.", "life-threatening body-wide infection", "rs", "inf", []],
    ["septicemia", "sep-tih-SE-me-ah", "Presence of pathogenic bacteria in the blood; blood poisoning.", "bacteria or toxins in the blood", "rs", "inf", []],
    ["sequela", "seh-KWEL-ah", "A lasting effect of a disease; plural: sequelae.", "lasting after-effect", "dx", "sx", []],
    ["side effect", "side eh-FEKT", "A result of therapy unrelated to or an extension of its intended effect; usually undesirable.", "unintended drug effect", "rx", "drug", []],
    ["sign", "sine", "Objective evidence of disease that can be observed or tested, such as fever, rash or high blood pressure.", "objective finding", "dx", "sci", []],
    ["single-photon emission computed tomography", "SIN-gl FO-ton", "Scintigraphic technique that shows a radioisotope’s cross-sectional distribution.", "SPECT scan", "dx", "img", ["SPECT"]],
    ["sonogram", "SON-o-gram", "Record obtained by use of ultrasound (son/o: sound).", "ultrasound image", "dx", "img", []],
    ["sound", "sownd", "Instrument for exploring a cavity or canal.", "probing rod", "tx", "inst", []],
    ["speculum", "SPEK-u-lum", "An instrument for examining a canal.", "instrument that opens a canal", "dx", "exam", []],
    ["sphygmomanometer", "sfig-mo-mah-NOM-eh-ter", "Blood pressure apparatus or cuff; pressure is read in mm Hg and reported as systolic/diastolic.", "blood pressure cuff", "dx", "exam", []],
    ["spirochetes", "SPI-ro-ketze", "Corkscrew-shaped bacteria that move with a twisting motion; cause Lyme disease and syphilis.", "spiral-shaped bacteria", "mc", "mic", []],
    ["splenomalacia", "sple-no-mah-LA-she-ah", "Softening of the spleen (splen/o + malacia).", "softening of the spleen", "lx", "wp", []],
    ["splenoptosis", "sple-nop-TO-sis", "Downward displacement of the spleen (splen/o + ptosis).", "drooping of the spleen", "lx", "wp", []],
    ["splenotoxin", "sple-no-TOK-sin", "A substance poisonous for the spleen (splen/o + toxin).", "substance toxic to the spleen", "lx", "wp", []],
    ["staging", "STA-jing", "Classifying malignant tumors by extent of spread for diagnosis, treatment and prognosis, as with the TNM system.", "measuring a tumour’s spread", "tx", "care", ["TNM"]],
    ["staphylococcus", "staf-ih-lo-KOK-us", "A round bacterium that forms grape-like clusters (staphylo-); plural: staphylococci.", "grape-cluster bacterium", "mc", "mic", ["Staph"]],
    ["stapling", "STA-pling", "Joining tissue with wire staples pushed through the tissue and then bent.", "surgical staple", "tx", "surg", []],
    ["stethoscope", "STETH-o-skope", "Instrument used for listening to sounds produced within the body (steth/o: chest).", "listening instrument", "dx", "exam", []],
    ["streptobacillus", "strep-to-bah-SIL-us", "A rod-shaped bacterium that forms chains.", "rod bacteria in chains", "mc", "mic", []],
    ["streptococcus", "strep-to-KOK-us", "A round bacterium that forms chains (strepto-); plural: streptococci.", "chain-forming bacterium", "mc", "mic", ["Strep"]],
    ["subacute", "sub-ah-KUTE", "Between acute and chronic in onset and course.", "between acute and chronic", "mc", "type", []],
    ["subcutaneous", "sub-ku-TA-ne-us", "Injected beneath the skin; hypodermic.", "beneath the skin", "rx", "route", ["SC", "SQ", "subcut"]],
    ["sublingual", "sub-LING-gwal", "Administered under the tongue.", "under the tongue", "rx", "route", ["SL"]],
    ["substance dependence", "SUB-stans de-PEN-dens", "Chronic or compulsive need for a drug regardless of its adverse effects; psychological or physical.", "compulsive need for a drug", "rx", "drug", []],
    ["suppository", "su-POZ-ih-tor-e", "Substance molded with a base that melts easily when inserted into a body opening.", "drug form that melts in a body opening", "rx", "route", ["supp"]],
    ["suppuration", "sup-u-RA-shun", "Pus formation.", "forming pus", "rs", "inf", []],
    ["surgeon", "SUR-jun", "A physician who specializes in surgery.", "physician who operates", "tx", "surg", []],
    ["surgery", "SUR-jer-e", "A method for treating disease or injury by manual operations.", "treatment by operation", "tx", "surg", []],
    ["suspension", "sus-PEN-shun", "Fine particles dispersed in a liquid; must be shaken before use.", "particles mixed in a liquid", "rx", "route", ["susp"]],
    ["suture", "SU-chur", "To unite parts by stitching them together; also the thread used or the seam formed (suffix -rhaphy).", "stitch", "tx", "surg", []],
    ["sympathomimetic", "sim-pah-tho-mih-MET-ik", "Mimicking the effects of the sympathetic nervous system.", "mimicking the sympathetic nervous system", "rx", "drug", []],
    ["symptom", "SIMP-tum", "Any evidence of disease; sometimes limited to subjective evidence experienced by the patient, such as pain, dizziness and weakness.", "what the patient reports", "dx", "sci", []],
    ["synchrony", "SIN-kro-ne", "Occurrence at the same time.", "happening at the same time", "dx", "wp", []],
    ["syncope", "SIN-ko-pe", "A temporary loss of consciousness because of inadequate blood flow to the brain; fainting.", "fainting", "dx", "sx", []],
    ["syndrome", "SIN-drome", "A group of signs and symptoms that together characterize a disease condition.", "group of signs and symptoms", "dx", "sx", []],
    ["synergistic", "sin-er-JIS-tik", "Working together with increased effect, such as certain drugs in combination (erg/o: work).", "working together", "rx", "drug", []],
    ["synergy", "SIN-er-je", "Combined action of two or more drugs producing an effect greater than any could produce alone; synergism; adjective: synergistic.", "combined effect", "rx", "drug", []],
    ["syringe", "sir-INJ", "An instrument for injecting fluid.", "injecting instrument", "rx", "route", []],
    ["systemic", "sis-TEM-ik", "Pertaining to the whole body.", "affecting the whole body", "mc", "type", []],
    ["systolic pressure", "sis-TOL-ik", "Blood pressure recorded when the heart is contracting.", "upper blood pressure number", "dx", "exam", []],
    ["tablet", "TAB-let", "Solid dosage form of a drug prepared by compression or molding; a pill.", "pressed solid drug form", "rx", "route", ["tab"]],
    ["tachycardia", "tak-ih-KAR-de-ah", "Rapid heart rate (tachy- + cardi/o).", "fast heart rate", "lx", "wp", []],
    ["therapy", "THER-ah-pe", "Treatment; intervention.", "treatment", "tx", "care", ["Rx"]],
    ["thermometer", "ther-MOM-eh-ter", "Instrument for measuring temperature.", "temperature-measuring instrument", "dx", "wp", []],
    ["thoracentesis", "thor-ah-sen-TE-sis", "Puncture of the chest (thorac/o + -centesis).", "drawing fluid from the chest", "tx", "surg", []],
    ["thoracoschisis", "tho-rah-KOS-kih-sis", "Congenital fissure of the chest wall (thorac/o + -schisis).", "opening the chest", "lx", "wp", []],
    ["thrombolytic", "throm-bo-LIT-ik", "Agent that dissolves a blood clot (thrombus).", "clot dissolver", "rx", "drug", []],
    ["tincture", "TINK-chur", "Substance dissolved in an alcoholic solution.", "alcohol-based solution", "rx", "route", ["tinct"]],
    ["tolerance", "TOL-er-ans", "Condition in which chronic use of a drug results in loss of effectiveness so the dose must be increased.", "weaker effect from the same dose", "rx", "drug", []],
    ["tonsillitis", "ton-sih-LI-tis", "Inflammation of the tonsils.", "inflammation of the tonsils", "rs", "inf", []],
    ["topical", "TOP-ih-kal", "Applied to the surface of the skin.", "applied to the skin", "rx", "route", []],
    ["toxicity", "tok-SIS-ih-te", "State of being poisonous.", "poisonousness", "rx", "drug", []],
    ["toxicology", "tok-sih-KOL-o-je", "Study of poisons (toxic/o + -logy).", "study of poisons", "lx", "wp", []],
    ["toxin", "TOKS-in", "A poison; adjective: toxic (roots tox/o, toxic/o).", "poison", "mc", "mic", []],
    ["toxoid", "TOK-soyd", "Like a poison; an inactivated toxin used as a vaccine (tox/o + -oid).", "inactivated toxin used as a vaccine", "lx", "wp", []],
    ["tracheostomy", "tra-ke-OS-to-me", "Creation of an opening into the trachea (trache/o + -stomy).", "opening into the windpipe", "tx", "surg", []],
    ["tracheotomy", "tra-ke-OT-o-me", "Incision into the trachea (trache/o + -tomy).", "incision into the windpipe", "tx", "surg", []],
    ["transdermal", "trans-DER-mal", "Absorbed through the skin, as from a patch placed on the skin.", "through the skin (patch)", "rx", "route", []],
    ["trauma", "TRAW-mah", "A physical or psychological wound or injury.", "injury", "mc", "type", []],
    ["trocar", "TRO-kar", "Sharp pointed instrument contained in a cannula, used to puncture a cavity.", "sharp puncturing instrument", "tx", "inst", []],
    ["ultrasonography", "ul-trah-son-OG-rah-fe", "Generation of an image from echoes of high-frequency sound waves; also called sonography or echography.", "ultrasound imaging", "dx", "img", []],
    ["urodynia", "u-ro-DIN-e-ah", "Pain on urination (ur/o + -odynia).", "painful urination", "lx", "wp", []],
    ["urolith", "U-ro-lith", "A stone in the urinary tract (ur/o + lith).", "urinary stone", "lx", "wp", []],
    ["vaccine", "vak-SENE", "Preparation given to produce adaptive immunity against a specific disease.", "preparation that builds immunity", "rs", "imm", []],
    ["vasodilation", "vas-o-di-LA-shun", "Widening of blood vessels (vas/o + dilation).", "widening of a blood vessel", "lx", "wp", []],
    ["vial", "VI-al", "A small glass or plastic container.", "small sealed bottle", "rx", "route", []],
    ["vibrios", "VIB-re-oze", "Short curved rod-shaped bacteria; cause cholera and gastroenteritis.", "curved bacteria", "mc", "mic", []],
    ["viremia", "vi-RE-me-ah", "Presence of viruses in the blood (vir/o + -emia).", "virus in the blood", "mc", "mic", []],
    ["virology", "vi-ROL-o-je", "Study of viruses (vir/o + -logy).", "study of viruses", "mc", "mic", []],
    ["virus", "VI-rus", "Submicroscopic infectious agent that can live and reproduce only within living cells; causes colds, influenza and hepatitis.", "tiny agent that multiplies in cells", "mc", "mic", []],
    ["vital signs", "VI-tal", "Measurements that reflect basic functions necessary to maintain life: temperature, pulse, respiration and blood pressure.", "temperature, pulse, breathing and blood pressure", "dx", "exam", ["VS"]],
    ["withdrawal", "with-DRAW-al", "Condition that results from abrupt cessation or reduction of a drug used regularly.", "symptoms after stopping a drug", "rx", "drug", []],
    ["xeroderma", "ze-ro-DER-mah", "Dryness of the skin (xero- + derm/o).", "dry skin", "lx", "wp", []],
    ["xerosis", "ze-RO-sis", "Abnormal dryness (xero- + -osis).", "abnormal dryness", "lx", "wp", []]
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/* تیمار — واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها، تجزیه‌گر واژه و مولد سؤال‌ها
 * واژه‌ها از data-terms.js (ساخته‌شده با tools/build_data.py از فصل Disease and Treatment) می‌آیند؛
 * ریشه‌ها و اختصارها از همان فصل (جدول‌های ۳-۱ تا ۳-۹، نمادها و فهرست‌های اختصار) گردآوری و دستی پالایش شده‌اند.
 * دنیاها: lx زبان بیماری (همه واژه‌ها) • mc میکروب‌ها و انواع بیماری • rs پاسخ بدن به بیماری •
 * dx معاینه و تشخیص • tx جراحی و درمان • rx دارو و نسخه • * عمومی */
(function (root) {
  const EA = root.EA = root.EA || {};

  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const ROOTS_RAW = [
    // پیشوندها (جدول ۳-۲، ۳-۵ و ۳-۹ و پیشوندهای پایه)
    ['a-, an-', ['an', 'a'], 'without, not, absence of', "without, lacking", '*'],
    ['ana-', ['ana'], 'lack of, backward', "lack of; backward", 'rs'],
    ['anti-', ['anti'], 'against', "against", 'rx'],
    ['brady-', ['brady'], 'slow', "slow", 'lx'],
    ['contra-', ['contra'], 'against, opposite, opposed', "against, opposing", 'rx'],
    ['counter-', ['counter'], 'against, opposed', "against", 'rx'],
    ['dia-', ['dia'], 'through', "through", 'lx'],
    ['dys-', ['dys'], 'abnormal, painful, difficult', "abnormal, painful, difficult", 'lx'],
    ['endo-', ['endo'], 'within, inner', "within", 'lx'],
    ['epi-', ['epi'], 'upon, over', "on, over", 'rx'],
    ['ex-, exo-', ['exo', 'ex'], 'out, away from', "outside", 'lx'],
    ['hyper-', ['hyper'], 'above normal, excessive', "excessive", '*'],
    ['hypo-', ['hypo'], 'below normal, under', "below normal; under", '*'],
    ['in-', ['in'], 'in, into; not', "in; not", 'rs'],
    ['intra-', ['intra'], 'within, inside', "within", 'rx'],
    ['mal-', ['mal'], 'bad, poor', "bad, poor", 'lx'],
    ['meta-', ['meta'], 'change, beyond', "change, beyond", 'rs'],
    ['micro-', ['micro'], 'small', "small", 'mc'],
    ['neo-', ['neo'], 'new', "new", 'rs'],
    ['pachy-', ['pachy'], 'thick', "thick", 'lx'],
    ['pan-', ['pan'], 'all', "all", 'mc'],
    ['para-', ['para'], 'beside, near', "beside", 'tx'],
    ['poly-', ['poly'], 'many, much', "many, much", 'dx'],
    ['post-', ['post'], 'after', "after", 'tx'],
    ['pre-', ['pre'], 'before', "before", 'tx'],
    ['pro-', ['pro'], 'before, in front of', "before", 'dx'],
    ['sub-', ['sub'], 'below, under', "below", 'rx'],
    ['syn-, sym-', ['syn', 'sym'], 'together', "together", 'rx'],
    ['tachy-', ['tachy'], 'rapid', "fast", 'lx'],
    ['trans-', ['trans'], 'through, across', "by, through", 'rx'],
    ['xero-', ['xero'], 'dry', "dry", 'lx'],
    ['staphylo-', ['staphylo'], 'grape-like cluster', "grape-like cluster", 'mc'],
    ['strepto-', ['strepto'], 'chain', "chain", 'mc'],
    // جدول ۳-۱: ریشه‌های بیماری
    ['alg/o, algi/o, algesi/o', ['algesi', 'algi', 'alg'], 'pain', "pain", 'lx'],
    ['carcin/o', ['carcin'], 'cancer, carcinoma', "cancer", 'lx'],
    ['cyst/o', ['cyst'], 'filled sac or pouch, cyst, bladder', "sac, cyst, bladder", 'lx'],
    ['lith/o', ['lith'], 'calculus, stone', "stone", 'lx'],
    ['onc/o', ['onc'], 'tumor', "tumour", 'lx'],
    ['path/o', ['path'], 'disease', "disease", 'lx'],
    ['py/o', ['py'], 'pus', "pus", 'lx'],
    ['pyr/o, pyret/o', ['pyret', 'pyr'], 'fever, fire', "fever, fire", 'lx'],
    ['scler/o', ['scler'], 'hard', "hard", 'lx'],
    ['tox/o, toxic/o', ['toxic', 'tox'], 'poison', "poison", 'lx'],
    // جدول ۳-۵: ریشه‌های عفونت و ریشه‌های بیماری‌های عفونی
    ['bacill/i, bacill/o', ['bacill'], 'bacillus', "bacillus", 'mc'],
    ['bacteri/o', ['bacteri'], 'bacterium', "bacteria", 'mc'],
    ['myc/o', ['myc'], 'fungus, mold', "fungus (yeast or mould)", 'mc'],
    ['vir/o', ['vir'], 'virus', "virus", 'mc'],
    ['cocc/o', ['cocc'], 'round bacterium, berry', "round bacterium", 'mc'],
    ['nos/o', ['nos'], 'disease', "disease", 'mc'],
    ['iatr/o', ['iatr'], 'physician, treatment', "physician, treatment", 'mc'],
    ['idi/o', ['idi'], 'self, self-originating', "self, own", 'mc'],
    ['dem/o', ['dem'], 'people', "people", 'mc'],
    // پاسخ بدن
    ['phag/o', ['phag'], 'eat, ingest', "eat, swallow", 'rs'],
    ['cyt/o', ['cyt'], 'cell', "cell", 'rs'],
    ['plas', ['plas'], 'formation, development', "formation, growth", 'rs'],
    ['necr/o', ['necr'], 'death', "death", 'rs'],
    ['aden/o', ['aden'], 'gland', "gland", 'rs'],
    ['melan/o', ['melan'], 'dark, black, melanin', "dark, black", 'rs'],
    ['sarc/o', ['sarc'], 'flesh, connective tissue', "flesh, connective tissue", 'rs'],
    ['immun/o', ['immun'], 'immunity, immune system', "immunity, protection", 'rs'],
    ['troph/o', ['troph'], 'nourishment, development', "nourishment, growth", 'rs'],
    ['append/o, appendic/o', ['appendic', 'append'], 'appendix', "the appendix", 'rs'],
    ['tonsill/o', ['tonsill'], 'tonsil', "tonsil", 'rs'],
    // اندام‌ها (نمونه‌های جدول‌ها و تمرین‌ها)
    ['hepat/o', ['hepat'], 'liver', "liver", 'lx'],
    ['gastr/o', ['gastr'], 'stomach', "stomach", 'lx'],
    ['cardi/o', ['cardi'], 'heart', "heart", 'lx'],
    ['neur/o', ['neur'], 'nerve', "nerve", 'lx'],
    ['my/o', ['my'], 'muscle', "muscle", 'lx'],
    ['oste/o', ['oste'], 'bone', "bone", 'lx'],
    ['nephr/o', ['nephr'], 'kidney', "kidney", 'lx'],
    ['splen/o', ['splen'], 'spleen', "spleen", 'lx'],
    ['cephal/o', ['cephal'], 'head', "head", 'lx'],
    ['crani/o', ['crani'], 'skull, cranium', "skull", 'lx'],
    ['blephar/o', ['blephar'], 'eyelid', "eyelid", 'lx'],
    ['phleb/o', ['phleb'], 'vein', "vein", 'lx'],
    ['arteri/o', ['arteri'], 'artery', "artery", 'lx'],
    ['bronch/o', ['bronch'], 'bronchus', "main airway of the lung", 'lx'],
    ['ur/o', ['ur'], 'urine, urinary tract', "urine, urinary system", 'lx'],
    ['men/o', ['men'], 'month, menstruation', "menstruation", 'lx'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', "blood", 'lx'],
    ['lip/o', ['lip'], 'fat', "fat", 'lx'],
    ['adip/o', ['adip'], 'fat', "fat", 'lx'],
    ['derm/o, dermat/o', ['dermat', 'derm'], 'skin', "skin", 'lx'],
    ['dactyl/o', ['dactyl'], 'finger, toe', "finger, toe", 'lx'],
    ['retin/o', ['retin'], 'retina', "retina", 'lx'],
    ['kary/o', ['kary'], 'nucleus', "cell nucleus", 'lx'],
    ['hydr/o', ['hydr'], 'water, fluid', "water, fluid", 'lx'],
    ['amni/o', ['amni'], 'amnion, amniotic sac', "amniotic sac", 'lx'],
    ['blast/o', ['blast'], 'immature cell', "immature cell", 'lx'],
    ['enter/o', ['enter'], 'intestine', "intestine", 'lx'],
    ['thorac/o', ['thorac'], 'chest', "the chest", 'tx'],
    ['arthr/o', ['arthr'], 'joint', "joint", 'tx'],
    ['pleur/o', ['pleur'], 'pleura', "pleura", 'tx'],
    ['hyster/o', ['hyster'], 'uterus', "uterus", 'tx'],
    ['rhin/o', ['rhin'], 'nose', "nose", 'tx'],
    ['herni/o', ['herni'], 'hernia', "rupture", 'tx'],
    ['trache/o', ['trache'], 'trachea', "windpipe", 'tx'],
    ['lapar/o', ['lapar'], 'abdominal wall', "abdominal wall", 'tx'],
    ['celi/o', ['celi'], 'abdomen', "abdomen", 'tx'],
    ['col/o', ['col'], 'colon', "large intestine", 'tx'],
    ['steth/o', ['steth'], 'chest', "chest", 'dx'],
    ['ophthalm/o', ['ophthalm'], 'eye', "eye", 'dx'],
    ['ot/o', ['ot'], 'ear', "ear", 'dx'],
    ['audi/o', ['audi'], 'hearing', "hearing", 'dx'],
    ['encephal/o', ['encephal'], 'brain', "brain", 'dx'],
    ['cyan/o', ['cyan'], 'blue', "blue", 'dx'],
    ['noct/i, nyct/o', ['noct', 'nyct'], 'night', "night", 'dx'],
    ['metr/o', ['metr'], 'measure', "measure", 'dx'],
    ['sphygm/o', ['sphygm'], 'pulse', "pulse", 'dx'],
    ['man/o', ['man'], 'pressure', "pressure", 'dx'],
    // جدول ۳-۶: نیروهای فیزیکی
    ['aer/o', ['aer'], 'air, gas', "air, gas", 'dx'],
    ['bar/o', ['bar'], 'pressure', "pressure", 'dx'],
    ['chrom/o, chromat/o', ['chromat', 'chrom'], 'color, stain', "colour", 'dx'],
    ['chron/o', ['chron'], 'time', "time", 'dx'],
    ['cry/o', ['cry'], 'cold', "cold", 'dx'],
    ['electr/o', ['electr'], 'electricity', "electricity", 'dx'],
    ['erg/o', ['erg'], 'work', "Job", 'dx'],
    ['phon/o', ['phon'], 'sound, voice', "sound", 'dx'],
    ['phot/o', ['phot'], 'light', "light", 'dx'],
    ['radi/o', ['radi'], 'radiation, x-ray', "radiation, x-ray", 'dx'],
    ['son/o', ['son'], 'sound', "sound (ultrasound)", 'dx'],
    ['therm/o', ['therm'], 'heat, temperature', "heat, temperature", 'dx'],
    // جدول ۳-۹: دارو
    ['chem/o', ['chem'], 'chemical', "chemical", 'rx'],
    ['hypn/o', ['hypn'], 'sleep', "sleep", 'rx'],
    ['narc/o', ['narc'], 'stupor', "stupor", 'rx'],
    ['pharm, pharmac/o', ['pharmac', 'pharm'], 'drug, medicine', "drug", 'rx'],
    ['vas/o', ['vas'], 'vessel', "vessel", 'rx'],
    ['phyt/o', ['phyt'], 'plant', "plant", 'rx'],
    ['psych/o', ['psych'], 'mind', "mind", 'rx'],
    ['thromb/o', ['thromb'], 'blood clot', "blood clot", 'rx'],
    ['muc/o', ['muc'], 'mucus', "mucus, phlegm", 'rx'],
    ['emet/o', ['emet'], 'vomiting', "vomiting", 'rx'],
    ['sympath/o', ['sympath'], 'sympathetic nervous system', "sympathetic nervous system", 'rx'],
    ['dilat/o', ['dilat'], 'widen, expand', "widen", 'rx'],
    ['dur/o', ['dur'], 'hard; dura mater', "hard; dura mater", 'rx'],
    ['lingu/o', ['lingu'], 'tongue', "tongue", 'rx'],
    ['cutane/o', ['cutane'], 'skin', "skin", 'rx'],
    ['ven/o', ['ven'], 'vein', "vein", 'rx'],
    ['muscul/o', ['muscul'], 'muscle', "muscle", 'rx'],
    ['thec/o', ['thec'], 'sheath (meninges)', "sheath (coverings of the spinal cord)", 'rx'],
    // جدول ۳-۳: پسوندهای بیماری
    ['-algia, -algesia', ['algesia', 'algia'], 'pain', "pain", 'lx'],
    ['-cele', ['cele'], 'hernia, localized dilation', "hernia, swelling", 'lx'],
    ['-clasis, -clasia', ['clasis', 'clasia'], 'breaking', "breaking", 'lx'],
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-megaly', ['megaly'], 'enlargement', "enlargement", 'lx'],
    ['-odynia', ['odynia', 'dynia'], 'pain', "pain", 'lx'],
    ['-oma', ['oma'], 'tumor', "tumour", '*'],
    ['-pathy', ['pathy'], 'any disease of', "disease", 'lx'],
    ['-rhage, -rhagia', ['rrhagia', 'rrhage', 'rhagia', 'rhage'], 'bursting forth, profuse flow, hemorrhage', "heavy bleeding, bursting forth", 'lx'],
    ['-rhea', ['rrhea', 'rhea'], 'flow, discharge', "flow, discharge", 'lx'],
    ['-rhexis', ['rrhexis', 'rhexis'], 'rupture', "rupture", 'lx'],
    ['-schisis', ['schisis'], 'fissure, splitting', "split", 'lx'],
    // جدول ۳-۴: واژه‌هایی که پسوند می‌شوند
    ['-dilation, -dilatation', ['dilatation', 'dilation'], 'expansion, widening', "widening", 'lx'],
    ['-ectasia, -ectasis', ['ectasia', 'ectasis'], 'dilation, distension', "widening, stretching", 'lx'],
    ['-edema', ['edema'], 'accumulation of fluid, swelling', "swelling, fluid build-up", 'lx'],
    ['-lysis', ['lysis'], 'separation, loosening, dissolving, destruction', "separating, dissolving, destruction", 'lx'],
    ['-malacia', ['malacia'], 'softening', "softening", 'lx'],
    ['-necrosis', ['necrosis'], 'death of tissue', "tissue death", 'lx'],
    ['-ptosis', ['ptosis'], 'dropping, downward displacement', "drooping", 'lx'],
    ['-sclerosis', ['sclerosis'], 'hardening', "hardening", 'lx'],
    ['-spasm', ['spasm'], 'sudden contraction, cramp', "sudden contraction", 'lx'],
    ['-stasis', ['stasis'], 'suppression, stoppage', "stoppage", 'lx'],
    ['-stenosis', ['stenosis'], 'narrowing, constriction', "narrowing", 'lx'],
    ['-toxin', ['toxin'], 'poison', "poison", 'lx'],
    // پسوندهای پایه
    ['-genesis', ['genesis'], 'formation, origin', "origin, formation", 'lx'],
    ['-gen, -genic', ['genic', 'gen'], 'producing, causing', "producing, causing", 'lx'],
    ['-logy', ['logy'], 'study of', "study of", '*'],
    ['-logist', ['logist'], 'specialist in a field of study', "specialist", '*'],
    ['-osis, -iasis', ['iasis', 'osis'], 'condition, process', "condition, process", '*'],
    ['-emia', ['emia'], 'condition of blood', "blood condition", 'mc'],
    ['-uria', ['uria'], 'condition of urine', "condition of urine", 'mc'],
    ['-cide, -cidal', ['cidal', 'cide'], 'killing', "killing", 'mc'],
    ['-static', ['static'], 'stopping, controlling', "stopping", 'mc'],
    ['-pnea', ['pnea'], 'breathing', "breathing", 'lx'],
    ['-phagia', ['phagia'], 'eating, swallowing', "swallowing", 'lx'],
    ['-oid', ['oid'], 'like, resembling', "like", 'lx'],
    ['-plasia, -plasm', ['plasia', 'plasm'], 'formation, development, growth', "growth, formation", 'rs'],
    ['-trophy', ['trophy'], 'nourishment, development', "nourishment, growth", 'rs'],
    ['-cyte', ['cyte'], 'cell', "cell", 'rs'],
    // جدول ۳-۷: پسوندهای تشخیص
    ['-graph', ['graph'], 'instrument for recording data', "recording instrument", 'dx'],
    ['-graphy', ['graphy'], 'act of recording data', "recording process", 'dx'],
    ['-gram', ['gram'], 'a record of data', "record, image", 'dx'],
    ['-meter', ['meter'], 'instrument for measuring', "measuring instrument", 'dx'],
    ['-metry', ['metry'], 'measurement of', "measurement", 'dx'],
    ['-scope', ['scope'], 'instrument for viewing or examining', "viewing instrument", 'dx'],
    ['-scopy', ['scopy'], 'examination of', "examination by viewing", 'dx'],
    ['-opsy', ['opsy'], 'viewing', "viewing", 'dx'],
    // جدول ۳-۸: پسوندهای جراحی
    ['-centesis', ['centesis'], 'puncture, tap', "puncture to draw fluid", 'tx'],
    ['-desis', ['desis'], 'binding, fusion', "fusing, binding", 'tx'],
    ['-ectomy', ['ectomy'], 'excision, surgical removal', "removal", 'tx'],
    ['-pexy', ['pexy'], 'surgical fixation', "fixing in place", 'tx'],
    ['-plasty', ['plasty'], 'plastic repair, reconstruction', "repair, reconstruction", 'tx'],
    ['-rhaphy', ['rrhaphy', 'rhaphy'], 'surgical repair, suture', "repair by suturing", 'tx'],
    ['-stomy', ['stomy'], 'surgical creation of an opening', "making an opening", 'tx'],
    ['-tome', ['tome'], 'instrument for incising (cutting)', "cutting instrument", 'tx'],
    ['-tomy', ['tomy'], 'incision, cutting', "incision", 'tx'],
    ['-tripsy', ['tripsy'], 'crushing', "crushing", 'tx'],
    ['-therapy', ['therapy'], 'treatment', "treatment", 'tx'],
    // جدول ۳-۹: پسوندهای دارو
    ['-lytic', ['lytic'], 'dissolving, reducing, loosening', "dissolving, reducing", 'rx'],
    ['-mimetic', ['mimetic'], 'mimicking, simulating', "mimicking", 'rx'],
    ['-tropic', ['tropic'], 'acting on', "acting on", 'rx'],
    ['-emetic, -emesis', ['emetic', 'emesis'], 'vomiting', "vomiting", 'rx'],
    ['-ive', ['ive'], 'pertaining to, tending to', "having, pertaining to", '*'],
    // پسوندهای صفت و اسم
    ['-ic, -al, -ar, -ous', ['ic', 'al', 'ar', 'ous'], 'pertaining to', "pertaining to", '*'],
    ['-tic', ['tic'], 'pertaining to', "pertaining to", '*'],
    ['-ia, -y', ['ia', 'y'], 'condition, process', "condition, process", '*'],
    ['-ion, -ation', ['ation', 'ion'], 'process', "process", '*'],
    ['-ist', ['ist'], 'specialist', "specialist", '*'],
    ['-ism', ['ism'], 'condition, state', "condition", '*'],
    ['-um, -us', ['um', 'us'], 'structure, thing', "structure, thing", '*'],
    ['-or', ['or'], 'one who, that which', "one who, that which", '*']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها و نمادها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    // نمادهای پرونده
    ['1°', 'primary', "primary", 'lx'],
    ['2°', 'secondary (to)', "secondary (to)", 'lx'],
    ['∆', 'change', "change", 'lx'],
    ['↑', 'increase(d)', "increase", 'lx'],
    ['↓', 'decrease(d)', "decrease", 'lx'],
    ['≠', 'not equal to', "not equal", 'lx'],
    ['±', 'doubtful, slight', "doubtful, slight", 'lx'],
    ['∼', 'approximately', "approximately", 'lx'],
    ['#', 'number, pound', "number, pound", 'lx'],
    ['L / R', 'left / right', "left / right", 'lx'],
    // بیماری و میکروب
    ['AF', 'acid fast', "acid-fast", 'mc'],
    ['FUO', 'fever of unknown origin', "fever of unknown origin", 'mc'],
    ['Gm+', 'gram positive', "gram-positive", 'mc'],
    ['Gm−', 'gram negative', "gram-negative", 'mc'],
    ['MDR', 'multidrug resistant', "resistant to many drugs", 'mc'],
    ['MRSA', 'methicillin-resistant Staphylococcus aureus', "methicillin-resistant Staphylococcus aureus", 'mc'],
    ['VRSA', 'vancomycin-resistant S. aureus', "vancomycin-resistant Staphylococcus aureus", 'mc'],
    ['Staph', 'Staphylococcus', "grape-cluster bacterium", 'mc'],
    ['Strep', 'Streptococcus', "chain-forming bacterium", 'mc'],
    ['TB', 'tuberculosis', "tuberculosis", 'mc'],
    ['STI', 'sexually transmitted infection', "sexually transmitted infection", 'mc'],
    ['EMT', 'emergency medical technician', "emergency medical technician", 'mc'],
    ['WHO', 'World Health Organization', "World Health Organization", 'mc'],
    ['CA, Ca', 'cancer', "cancer", 'rs'],
    ['CIS', 'carcinoma in situ', "cancer that has not spread", 'rs'],
    ['MET', 'metastasis', "spread of cancer", 'rs'],
    // شرح حال و معاینه
    ['ADL', 'activities of daily living', "activities of daily living", 'dx'],
    ['BP', 'blood pressure', "blood pressure", 'dx'],
    ['bpm', 'beats per minute', "beats per minute", 'dx'],
    ['C / F', 'Celsius / Fahrenheit', "Celsius / Fahrenheit", 'dx'],
    ['CC', 'chief complaint', "main complaint", 'dx'],
    ['c/o', 'complains (complaining) of', "complains of", 'dx'],
    ['EOMI', 'extraocular muscles intact', "eye-movement muscles intact", 'dx'],
    ['ETOH', 'alcohol (ethyl alcohol)', "alcohol", 'dx'],
    ['HEENT', 'head, eyes, ears, nose and throat', "head, eyes, ears, nose and throat", 'dx'],
    ['HIPAA', 'Health Insurance Portability and Accountability Act', "US health-privacy law", 'dx'],
    ['h/o', 'history of', "history of", 'dx'],
    ['H&P', 'history and physical', "history and physical", 'dx'],
    ['HPI', 'history of present illness', "history of present illness", 'dx'],
    ['HR', 'heart rate', "heart rate", 'dx'],
    ['Hx', 'history', "history", 'dx'],
    ['I&O', 'intake and output', "fluid intake and output", 'dx'],
    ['IPPA', 'inspection, palpation, percussion, auscultation', "inspection, palpation, percussion, auscultation", 'dx'],
    ['IVDA', 'intravenous drug abuse', "injecting drug use", 'dx'],
    ['NAD', 'no apparent distress', "no apparent distress", 'dx'],
    ['NKDA', 'no known drug allergies', "no known drug allergies", 'dx'],
    ['P', 'pulse', "pulse", 'dx'],
    ['PE', 'physical examination', "physical examination", 'dx'],
    ['PERRLA', 'pupils equal, regular, react to light and accommodation', "pupils equal and reactive to light and accommodation", 'dx'],
    ['PMH', 'past medical history', "past medical history", 'dx'],
    ['pt', 'patient', "Patient", 'dx'],
    ['R', 'respiration', "breathing", 'dx'],
    ['R/O', 'rule out', "rule out", 'dx'],
    ['ROS', 'review of systems', "review of systems", 'dx'],
    ['T', 'temperature', "temperature", 'dx'],
    ['TPR', 'temperature, pulse, respiration', "temperature, pulse, respiration", 'dx'],
    ['VS', 'vital signs', "vital signs", 'dx'],
    ['WD', 'well developed', "well developed", 'dx'],
    ['WNL', 'within normal limits', "within normal limits", 'dx'],
    ['w/o', 'without', "without", 'dx'],
    ['y/o', 'years old, year-old', "years old", 'dx'],
    ['ROM', 'range of motion', "range of motion", 'dx'],
    // تشخیص و تصویربرداری
    ['ABC', 'aspiration biopsy cytology', "aspiration biopsy cytology", 'dx'],
    ['AFP', 'alpha-fetoprotein', "fetal protein measured in pregnancy", 'dx'],
    ['BS', 'bowel sounds; breath sounds', "bowel sounds; breath sounds", 'dx'],
    ['bx', 'biopsy', "tissue sampling", 'dx'],
    ['C&S', 'culture and (drug) sensitivity', "culture and sensitivity", 'dx'],
    ['CT', 'computed tomography', "CT scan", 'dx'],
    ['Dx', 'diagnosis', "diagnosis", 'dx'],
    ['MRI', 'magnetic resonance imaging', "MRI scan", 'dx'],
    ['PET', 'positron emission tomography', "PET scan", 'dx'],
    ['SPECT', 'single-photon emission computed tomography', "SPECT scan", 'dx'],
    ['UV', 'ultraviolet', "ultraviolet", 'dx'],
    ['Ci', 'curie (unit of radioactivity)', "curie (unit of radioactivity)", 'dx'],
    ['ECG', 'electrocardiogram', "heart tracing (ECG)", 'dx'],
    ['TEE', 'transesophageal echocardiogram', "echocardiography through the oesophagus", 'dx'],
    ['AP', 'anteroposterior', "anteroposterior (front to back)", 'dx'],
    ['PA', 'posteroanterior', "posteroanterior (back to front)", 'dx'],
    ['LL', 'left lateral', "left side view", 'dx'],
    ['RL', 'right lateral', "right side view", 'dx'],
    // درمان، جراحی و بخش
    ['CAM', 'complementary and alternative medicine', "complementary and alternative medicine", 'tx'],
    ['NCCAM', 'National Center for Complementary and Alternative Medicine', "National Center for Complementary and Alternative Medicine", 'tx'],
    ['D/C, dc', 'discontinue', "discontinue", 'tx'],
    ['EBL', 'estimated blood loss', "estimated blood loss", 'tx'],
    ['ED', 'emergency department', "emergency department", 'tx'],
    ['ICU', 'intensive care unit', "intensive care unit", 'tx'],
    ['I&D', 'incision and drainage', "incision and drainage", 'tx'],
    ['NS, N/S', 'normal saline', "normal saline", 'tx'],
    ['PSS', 'physiologic saline solution', "physiological salt solution", 'tx'],
    ['OR', 'operating room', "operating room", 'tx'],
    ['PACU', 'postanesthesia care unit', "post-anaesthesia care unit (recovery)", 'tx'],
    ['PCA', 'patient-controlled analgesia', "patient-controlled analgesia", 'tx'],
    ['PICC', 'peripherally inserted central catheter', "central catheter inserted through an arm vein", 'tx'],
    ['preop', 'preoperative', "before surgery", 'tx'],
    ['postop', 'postoperative', "after surgery", 'tx'],
    ['RATx', 'radiation therapy', "treatment with radiation", 'tx'],
    ['TNM', '(primary) tumor, (regional lymph) nodes, (distant) metastases', "tumour, nodes, metastasis", 'tx'],
    ['PT', 'physical therapist; physical therapy', "physical therapist; physical therapy", 'tx'],
    // دستورها
    ['AMA', 'against medical advice', "against medical advice", 'tx'],
    ['AMB', 'ambulatory', "able to walk", 'tx'],
    ['BRP', 'bathroom privileges', "bathroom privileges", 'tx'],
    ['CBR', 'complete bed rest', "strict bed rest", 'tx'],
    ['DNR', 'do not resuscitate', "do not resuscitate", 'tx'],
    ['KVO', 'keep vein open', "keep the vein open", 'tx'],
    ['TKO', 'to keep open', "to keep the vein open", 'tx'],
    ['NPO', 'nothing by mouth (non per os)', "fasting; nothing by mouth", 'tx'],
    ['OOB', 'out of bed', "out of bed", 'tx'],
    ['QNS', 'quantity not sufficient', "quantity not sufficient", 'tx'],
    ['QS', 'quantity sufficient', "quantity sufficient", 'tx'],
    ['STAT', 'immediately', "immediately", 'tx'],
    // دارو و شکل‌ها
    ['APAP', 'acetaminophen', "pain and fever reliever", 'rx'],
    ['ASA', 'acetylsalicylic acid (aspirin)', "acetylsalicylic acid", 'rx'],
    ['ASHP', 'American Society of Health System Pharmacists', "American Society of Health-System Pharmacists", 'rx'],
    ['cap', 'capsule', "capsule", 'rx'],
    ['elix', 'elixir', "elixir", 'rx'],
    ['FDA', 'Food and Drug Administration', "US Food and Drug Administration", 'rx'],
    ['INH', 'isoniazid (antituberculosis drug)', "isoniazid (anti-tuberculosis drug)", 'rx'],
    ['MED(s)', 'medicine(s), medication(s)', "medicine(s)", 'rx'],
    ['NSAID(s)', 'nonsteroidal anti-inflammatory drug(s)', "non-steroidal anti-inflammatory drug", 'rx'],
    ['ODS', 'Office of Dietary Supplements', "Office of Dietary Supplements", 'rx'],
    ['OTC', 'over-the-counter', "sold without a prescription", 'rx'],
    ['PDR', 'Physicians’ Desk Reference', "Physicians’ Desk Reference", 'rx'],
    ['Rx', 'drug, prescription, therapy', "prescription; drug; treatment", 'rx'],
    ['supp', 'suppository', "suppository", 'rx'],
    ['susp', 'suspension', "particles mixed in a liquid", 'rx'],
    ['tab', 'tablet', "tablet", 'rx'],
    ['tinct', 'tincture', "alcohol-based solution", 'rx'],
    ['ung', 'ointment', "ointment", 'rx'],
    ['USP', 'United States Pharmacopeia', "United States Pharmacopeia", 'rx'],
    // دوز و دستور مصرف
    ['ā', 'before (ante)', "before", 'rx'],
    ['āā', 'of each (ana)', "of each", 'rx'],
    ['ac', 'before meals (ante cibum)', "before meals", 'rx'],
    ['ad lib', 'as desired (ad libitum)', "as desired", 'rx'],
    ['aq', 'water (aqua)', "water", 'rx'],
    ['bid, b.i.d.', 'twice a day (bis in die)', "twice a day", 'rx'],
    ['c̄', 'with (cum)', "with", 'rx'],
    ['s̄', 'without (sine)', "without", 'rx'],
    ['DAW', 'dispense as written', "dispense as written", 'rx'],
    ['DS', 'double strength', "double strength", 'rx'],
    ['hs', 'at bedtime (hora somni)', "at bedtime", 'rx'],
    ['ID', 'intradermal(ly)', "into the skin", 'rx'],
    ['IM', 'intramuscular(ly)', "into a muscle", 'rx'],
    ['IU', 'international unit', "international unit", 'rx'],
    ['IV', 'intravenous(ly)', "into a vein", 'rx'],
    ['LA', 'long-acting', "long-acting", 'rx'],
    ['mcg', 'microgram', "micrograms", 'rx'],
    ['mg', 'milligram', "milligrams", 'rx'],
    ['mL', 'milliliter', "millilitres", 'rx'],
    ['p̄', 'after (post)', "after", 'rx'],
    ['pc', 'after meals (post cibum)', "after meals", 'rx'],
    ['po, PO', 'by mouth (per os)', "by mouth", 'rx'],
    ['pp', 'postprandial (after a meal)', "after meals", 'rx'],
    ['prn', 'as needed (pro re nata)', "as needed", 'rx'],
    ['qam', 'every morning (quaque ante meridiem)', "every morning", 'rx'],
    ['qh', 'every hour (quaque hora)', "every hour", 'rx'],
    ['q_h', 'every _ hours', "every few hours", 'rx'],
    ['qid, q.i.d.', 'four times a day (quater in die)', "four times a day", 'rx'],
    ['SA', 'sustained action', "sustained action", 'rx'],
    ['SC, SQ, subcut', 'subcutaneous(ly)', "subcutaneously", 'rx'],
    ['SL', 'sublingual(ly)', "under the tongue", 'rx'],
    ['SR', 'sustained release', "slow release", 'rx'],
    ['ss', 'half (semis)', "one half", 'rx'],
    ['tid, t.i.d.', 'three times a day (ter in die)', "three times a day", 'rx'],
    ['U', 'unit(s)', "unit", 'rx'],
    ['x', 'times', "times", 'rx']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {};
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], c: r[5], ab: r[6] || [] }));
  /* ---------- دسته‌بندی واژه‌ها ----------
   * دسته هر واژه در داده‌ها (tools/terms) دستی تعیین شده است؛ این‌جا فقط نام و نماد دسته‌ها آمده است. */
  const CATS = [
    { id: 'sci', icon: '🎓', name: "Basic terms" },
    { id: 'wp', icon: '🧩', name: "Terms built from word parts" },
    { id: 'type', icon: '🗂️', name: "Types and course of disease" },
    { id: 'mic', icon: '🦠', name: "Microbes and spread" },
    { id: 'inf', icon: '🔥', name: "Inflammation and infection" },
    { id: 'imm', icon: '🛡️', name: "immunity, protection" },
    { id: 'neo', icon: '🔴', name: "Neoplasms and cell growth" },
    { id: 'les', icon: '🩹', name: "Lesions and tissue changes" },
    { id: 'sx', icon: '🔎', name: "Symptoms and signs" },
    { id: 'exam', icon: '🩺', name: "history and physical" },
    { id: 'img', icon: '🩻', name: "Imaging" },
    { id: 'surg', icon: '✂️', name: "surgery" },
    { id: 'inst', icon: '🔧', name: "Surgical instruments" },
    { id: 'care', icon: '🤝', name: "Treatment and care" },
    { id: 'alt', icon: '🌿', name: "complementary and alternative medicine" },
    { id: 'drug', icon: '💊', name: "Drugs and their effects" },
    { id: 'route', icon: '💉', name: "Drug routes and forms" }
  ];
  const classify = t => (CATS.some(c => c.id === t.c) ? t.c : 'sci');
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
    /* اگر خود تکه یک ریشه کامل است (cardi در myocardium)، شکل ترکیبی کتاب را نشان بده: cardi/o */
    const asIs = p.text.match(/^[a-z]+$/) && p.r.stems.includes(p.text) && p.r.a.match(new RegExp('\\b' + p.text + '/([oi])\\b'));
    if (asIs) return p.text + '/' + asIs[1];
    const v = p.text.slice(-1), base = p.text.slice(0, -1);
    if (p.r.stems.some(s => s === base) && /[oi]/.test(v)) return base + '/' + v;
    /* شکل کوتاه‌شده پیش از واکه (card در pericarditis): همان شکل ترکیبی اصلی را نشان بده */
    if (p.r.stems.includes(p.text) && p.r.kind === 'root') return p.r.a.split(',')[0].trim();
    return p.text;
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
  const WORLDS = ['lx', 'mc', 'rs', 'dx', 'tx', 'rx'];
  /* دنیای lx (زبان بیماری) از همه واژه‌ها، ریشه‌ها و اختصارها سؤال می‌سازد */
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
      const pool = buildable(w).length >= 4 ? buildable(w) : buildable(null), x = rnd(pool);
      const used = new Set(x.parts.map(p => p.r.id));
      const extra = shuffle(ROOTS.filter(r => !used.has(r.id) && inW(r, w) && r.w !== '*')).slice(0, 3).map(r => r.kind === 'root' ? r.a.split(',')[0] : r.a.split(',')[0]);
      return { kind: 'build', tag: 'build', q: `Build the term that means “<b>${short(x.t.fa)}</b>”`, parts: x.parts.map(partLabel), extra, why: why(x.t) + `<div class="wbx">${x.parts.map(p => `<span><b dir="ltr">${partLabel(p)}</b> ${p.r.fa}</span>`).join('')}</div>` };
    };
    G['ab:' + W] = () => {
      const own = ABBR.filter(a => !w || a.w === w), pool = own.length >= 3 ? own : ABBR, a = rnd(pool);
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
/* تیمار — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با ایمنا، پیکر، تپش و مهار: زمینه سفید، گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی)،
 * میکروب‌ها، سلول‌ها، ابزارها و آدمک ساده (مانکن آناتومی) برای نقشه‌های بدن.
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
  /* بزرگ‌نمایی سراسری متن برای خوانایی روی موبایل (شکل‌ها در عرض ~۳۳۰ پیکسل نمایش داده می‌شوند) */
  const TS = 1.06, FS = 1.12;
  /** متن انگلیسی */
  const t = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${+((p.size || 11) * TS).toFixed(2)}" font-weight="${p.w || 700}" fill="${p.fill || INK}" text-anchor="${p.anchor || 'middle'}" direction="ltr" font-family="${FONT_EN}"${p.italic ? ' font-style="italic"' : ''}>${s}</text>`; };
  /** متن فارسی */
  /* در direction=rtl معنای start/end برعکس می‌شود؛ اینجا anchor همیشه «دیداری» است (start = لبه چپ متن) */
  const FLIP = { start: 'end', end: 'start', middle: 'middle' };
  /* در متن فارسی، هر تکه لاتین (با پرانتز و نشانه‌های میانش) با LRI…PDI جدا می‌شود تا جابه‌جا نشود */
  const LRI = s => String(s).replace(/(?<![&#\w])\(?(?:\u200e?-)?[A-Za-z][A-Za-z0-9\/\-.+–°]*\)?(?:\s*(?:[=+\/→]|\s)\s*\(?[A-Za-z0-9][A-Za-z0-9\/\-.+–°]*\)?)*/g, m => '\u2066' + m + '\u2069');
  const f = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${+((p.size || 10) * FS).toFixed(2)}" font-weight="${p.w || 600}" fill="${p.fill || MUTED}" text-anchor="${(p.anchor || 'middle')}" direction="ltr" font-family="${FONT_EN}">${LRI(s)}</text>`; };
  /** برچسب دوزبانه */
  const lab = (x, y, en, fa, o) => { const p = o || {}; return t(x, y, en, { size: p.size || 11, fill: p.fill || INK, anchor: p.anchor, w: 800 }) + (fa ? f(x, y + (p.gap || 13), fa, { size: (p.size || 11) - 1, anchor: p.anchor === 'start' ? 'start' : p.anchor === 'end' ? 'end' : 'middle', fill: p.faFill }) : ''); };
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


  /* ---------- آدمک (مانکن آناتومی) ----------
   * همه شکل‌های بدن با همین آدمک ساده و بی‌جزئیات کشیده می‌شوند: سر، گردن، تنه، بازوها و پاها با گرادیان پوست.
   * man(x, y, s, o): x مرکز افقی، y بالای سر، s مقیاس (ارتفاع ۲۰۰×s)؛ o.palms کف دست رو به جلو، o.arms زاویه بازو. */
  const SKIN = ['#f8dcc6', '#e9b994'], SKIN_LINE = '#c98f6b';
  function man(x, y, s, o) {
    const p = o || {}, g = 'g' + (++UID);
    const fill = p.fill || `url(#${g})`, st = p.stroke || SKIN_LINE, op = p.opacity || 1;
    const arm = (side) => {
      const sx = side * 27, ang = (p.arms || 8) * side;
      return `<g transform="rotate(${ang} ${sx} 46)"><rect x="${sx - 6 + side * 2}" y="44" width="12" height="70" rx="6" fill="${fill}" stroke="${st}" stroke-width="1"/><ellipse cx="${sx + side * 2}" cy="${p.palms ? 120 : 119}" rx="${p.palms ? 7 : 5.5}" ry="8" fill="${fill}" stroke="${st}" stroke-width="1"/></g>`;
    };
    return `<g transform="translate(${x} ${y}) scale(${s})" opacity="${op}"><defs>${linear(g, SKIN[0], SKIN[1])}</defs>
      ${arm(-1)}${arm(1)}
      <rect x="-19" y="108" width="17" height="84" rx="8" fill="${fill}" stroke="${st}" stroke-width="1"/><rect x="2" y="108" width="17" height="84" rx="8" fill="${fill}" stroke="${st}" stroke-width="1"/>
      <ellipse cx="-11" cy="194" rx="10" ry="5" fill="${fill}" stroke="${st}" stroke-width="1"/><ellipse cx="11" cy="194" rx="10" ry="5" fill="${fill}" stroke="${st}" stroke-width="1"/>
      <path d="M-27 52 Q-28 42 -18 40 L18 40 Q28 42 27 52 L24 102 Q22 118 0 118 Q-22 118 -24 102 Z" fill="${fill}" stroke="${st}" stroke-width="1"/>
      <rect x="-6" y="28" width="12" height="14" rx="4" fill="${fill}"/>
      <ellipse cx="0" cy="17" rx="13" ry="15" fill="${fill}" stroke="${st}" stroke-width="1"/>
      <path d="M-13 13 Q-12 -1 0 0 Q12 -1 13 13 Q8 5 0 6 Q-8 5 -13 13Z" fill="#6b4a36" opacity=".85"/></g>`;
  }
  /** آدمک نیم‌رخ (رو به راست) برای جلو/عقب و حفره‌ها */
  function side(x, y, s, o) {
    const p = o || {}, g = 'g' + (++UID);
    const fill = p.fill || `url(#${g})`;
    return `<g transform="translate(${x} ${y}) scale(${s})"><defs>${linear(g, SKIN[0], SKIN[1])}</defs>
      <path d="M-4 30 Q-14 30 -14 16 Q-14 0 2 0 Q16 0 17 14 Q18 18 21 22 L17 24 Q17 30 10 31 L8 40 Q22 44 22 60 L21 100 Q20 118 8 120 L10 192 L24 194 L24 199 L-6 199 L-8 120 Q-22 112 -21 90 Q-16 74 -18 56 Q-19 44 -6 40 Z" fill="${fill}" stroke="${SKIN_LINE}" stroke-width="1.1"/>
      <path d="M-14 16 Q-13 1 2 0 Q14 0 16 10 Q6 4 -2 8 Q-9 12 -14 16Z" fill="#6b4a36" opacity=".85"/>
      <rect x="-5" y="46" width="11" height="66" rx="5.5" fill="${fill}" stroke="${SKIN_LINE}" stroke-width="1"/></g>`;
  }


  const A = {};
  /* ---------- سلول‌ها ----------
   * cellN: سلول طبیعی گرد با هسته کوچک و منظم • cellC: سلول سرطانی با شکل نامنظم، هسته بزرگ و تیره و چند هستک.
   * blob: مسیر بسته نرم با شعاع ناهموار (بذر ثابت تا هر بار یکسان رسم شود). */
  const GOOD = '#2b8a3e', GOOD_BG = '#e6fcf5', BAD = '#c92a2a', BAD_BG = '#fff0f0', VIO = '#0c8f7f', VIO_BG = '#e6fcf5';
  function blob(cx, cy, r, wob, n, seed) {
    let s = seed || 3;
    const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    const pts = [];
    for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2, rr = r * (1 - wob / 2 + rnd() * wob); pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]); }
    const mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
    let d = `M${mid(pts[n - 1], pts[0]).map(v => v.toFixed(1)).join(' ')}`;
    for (let i = 0; i < n; i++) { const p = pts[i], m = mid(p, pts[(i + 1) % n]); d += ` Q${p[0].toFixed(1)} ${p[1].toFixed(1)} ${m[0].toFixed(1)} ${m[1].toFixed(1)}`; }
    return d + 'Z';
  }
  function cellN(cx, cy, r, o) {
    const p = o || {}, g = 'c' + (++UID);
    return `<defs>${radial(g, p.c1 || '#f3f0ff', p.c2 || '#c5b6f7')}</defs><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${g})" stroke="${p.st || '#8c74e0'}" stroke-width="1.2"/><circle cx="${cx}" cy="${cy}" r="${(r * 0.36).toFixed(1)}" fill="${p.nc || '#6741d9'}" opacity=".85"/><circle cx="${(cx - r * 0.1).toFixed(1)}" cy="${(cy - r * 0.1).toFixed(1)}" r="${(r * 0.08).toFixed(1)}" fill="#fff" opacity=".6"/>`;
  }
  function cellC(cx, cy, r, seed, o) {
    const p = o || {}, g = 'c' + (++UID);
    return `<defs>${radial(g, p.c1 || '#ffe3e3', p.c2 || '#f08c8c')}</defs><path d="${blob(cx, cy, r, 0.42, 9, seed)}" fill="url(#${g})" stroke="${p.st || '#c92a2a'}" stroke-width="1.2"/><path d="${blob(cx + r * 0.05, cy, r * 0.56, 0.5, 7, (seed || 3) + 11)}" fill="${p.nc || '#7a1f3d'}" opacity=".9"/><circle cx="${(cx - r * 0.12).toFixed(1)}" cy="${(cy - r * 0.08).toFixed(1)}" r="${(r * 0.1).toFixed(1)}" fill="#ffd8a8"/><circle cx="${(cx + r * 0.18).toFixed(1)}" cy="${(cy + r * 0.14).toFixed(1)}" r="${(r * 0.08).toFixed(1)}" fill="#ffd8a8"/>`;
  }
  /** کارت با پس‌زمینه رنگی و سایه نرم */
  const card = (x, y, w, h, bg, sh) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${bg}"${sh ? ` filter="url(#${sh})"` : ''}/>`;
  /** نقطه و خط راهنما برای برچسب روی آدمک */
  const pin = (x1, y1, x2, y2, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c || LINE}" stroke-width="1.1"/><circle cx="${x1}" cy="${y1}" r="3.2" fill="${c || LINE}" stroke="#fff" stroke-width="1"/>`;

  /* ---------- زبان بیماری ---------- */
  /* آناتومی یک واژه: hepat + o + megaly */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="44" width="${w}" height="42" rx="11" fill="${bg}"/>${t(x + w / 2, 72, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 94 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 118, en, { size: 10, fill: c, w: 900 })}${f((x1 + x2) / 2, 133, fa, { size: 10, fill: c })}`;
    return svg(360, 200, `${f(180, 24, "A word = root + combining vowel + suffix", { size: 11.5, fill: INK, w: 800 })}
      ${part(10, 84, 'hepat', '#1c7ed6', '#e1effc')}${part(100, 30, 'o', '#868e96', '#f1f3f5')}${part(136, 92, 'megaly', '#2b8a3e', '#e6fcf5')}
      ${br(10, 94, 'root', "root: liver", '#1c7ed6')}${br(100, 130, 'o', "link", '#868e96')}${br(136, 228, 'suffix', "suffix: enlargement", '#2b8a3e')}
      <path d="M234 64 h8" stroke="${LINE}" stroke-width="2"/><rect x="246" y="40" width="108" height="50" rx="10" fill="${VIO_BG}"/>${f(300, 61, "enlarged liver", { size: 12, fill: VIO, w: 800 })}${t(300, 79, 'hepatomegaly', { size: 9.5, fill: INK })}
      <path d="M200 156 C150 182 92 182 48 156" stroke="${VIO}" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M52 152 l-6 4 l7 3" stroke="${VIO}" stroke-width="2" fill="none"/>
      ${f(180, 194, "Read the meaning from the end: first the suffix (what happened?), then the root (where?)", { size: 10, fill: VIO, w: 700 })}`, "Anatomy of the word hepatomegaly");
  };

  /* ده ریشه بیماری (جدول ۳-۱) */
  A['disease-roots'] = () => {
    const sh = 's' + (++UID);
    const R = [['alg/o', "pain", '⚡', '#e8590c'], ['carcin/o', "cancer", '🦀', '#c92a2a'], ['cyst/o', "sac, bladder", '🎈', '#1c7ed6'], ['lith/o', "stone", '🪨', '#5c5f66'], ['onc/o', "tumour", '🔴', '#c2255c'],
      ['path/o', "disease", '🤒', '#7048e8'], ['py/o', "pus", '🟡', '#e67700'], ['pyr/o', "fever, fire", '🔥', '#e03131'], ['scler/o', "hard", '🧱', '#495057'], ['tox/o', "poison", '☠️', '#2b8a3e']];
    return svg(360, 262, `<defs>${shadow(sh)}</defs>${f(180, 20, "Ten basic roots for disease", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, e, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 45; return `${card(x, y, 168, 39, '#f8f9fa', sh)}<text x="${x + 150}" y="${y + 26}" font-size="17" text-anchor="middle">${e}</text>${t(x + 12, y + 17, en, { size: 12, fill: c, w: 900, anchor: 'start' })}${f(x + 12, y + 32, fa, { size: 9.5, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, "Disease roots");
  };

  /* پیشوندهای بیماری (جدول ۳-۲) با نمایه کوچک */
  A['disease-prefixes'] = () => {
    const sh = 's' + (++UID);
    const ecg = (x, y, n, c) => { let d = `M${x} ${y}`; const step = 92 / n; for (let i = 0; i < n; i++) { const a = x + i * step; d += ` L${(a + step * 0.35).toFixed(1)} ${y} l3 -14 l3 22 l3 -8 L${(a + step).toFixed(1)} ${y}`; } return `<path d="${d}" stroke="${c}" stroke-width="1.8" fill="none" stroke-linejoin="round"/>`; };
    const tiles = [
      ['brady-', "slow", ecg(0, 0, 2, '#1c7ed6'), '#1c7ed6', '#e7f5ff', "bradypnea: slow breathing"],
      ['tachy-', "fast", ecg(0, 0, 6, '#e03131'), '#e03131', '#fff5f5', "tachycardia: fast heartbeat"],
      ['pachy-', "thick", '<rect x="10" y="-14" width="72" height="22" rx="5" fill="#ffc078" stroke="#e8590c" stroke-width="1.5"/>', '#e8590c', '#fff4e6', "pachydactyly: thick fingers"],
      ['xero-', "dry", '<path d="M30 -16 C14 4 22 12 40 12 C58 12 64 2 48 -16 Z" fill="#ffe8cc" stroke="#d9480f" stroke-width="1.5"/><path d="M36 -6 l5 5 l-4 4 l6 5" stroke="#d9480f" stroke-width="1.4" fill="none"/>', '#d9480f', '#fff9db', "xeroderma: dry skin"],
      ['dys-', "abnormal, difficult", '<path d="M4 0 q10 -16 20 0 t20 0 q6 -24 14 -2 t18 6 q6 -12 14 -4" stroke="#7048e8" stroke-width="2.2" fill="none"/>', '#7048e8', '#f3f0ff', "dysphagia: difficulty swallowing"],
      ['mal-', "bad, poor", '<path d="M46 12 l-12 -10 l12 -16 l12 16z" fill="none"/><text x="46" y="8" font-size="22" text-anchor="middle">👎</text>', '#5c5f66', '#f1f3f5', "malabsorption: poor absorption"]];
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, "Six disease prefixes", { size: 11.5, fill: INK, w: 800 })}
      ${tiles.map(([en, fa, ic, c, bg, ex], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 84; return `${card(x, y, 168, 76, bg, sh)}<g transform="translate(${x + 70} ${y + 26})">${ic}</g>${t(x + 12, y + 22, en, { size: 13, fill: c, w: 900, anchor: 'start' })}${f(x + 12, y + 40, fa, { size: 9.5, fill: INK, w: 800, anchor: 'start' })}${f(x + 84, y + 64, ex, { size: 9 })}`; }).join('')}`, "Disease prefixes");
  };

  /* پسوندهای بیماری (جدول ۳-۳) */
  A['disease-suffixes'] = () => {
    const sh = 's' + (++UID);
    const S = [['-algia', "pain", 'neuralgia', '⚡'], ['-odynia', "pain", 'urodynia', '😣'], ['-itis', "inflammation", 'cystitis', '🔥'], ['-megaly', "enlargement", 'hepatomegaly', '🎈'],
      ['-cele', "hernia, swelling", 'gastrocele', '🫧'], ['-clasis', "breaking", 'osteoclasis', '🦴'], ['-oma', "tumour", 'lipoma', '🔴'], ['-pathy', "disease", 'nephropathy', '🤒'],
      ['-rrhage', "heavy bleeding", 'hemorrhage', '🩸'], ['-rrhea', "flow, discharge", 'pyorrhea', '💧'], ['-rrhexis', "rupture", 'hepatorrhexis', '💥'], ['-schisis', "split", 'retinoschisis', '✂️']];
    return svg(360, 314, `<defs>${shadow(sh)}</defs>${f(180, 18, "Twelve disease suffixes", { size: 11.5, fill: INK, w: 800 })}
      ${S.map(([en, fa, ex, e], i) => { const x = 6 + (2 - i % 3) * 118, y = 28 + Math.floor(i / 3) * 66; const rr = /rrh/.test(en); return `${card(x, y, 112, 60, rr ? '#fff5f5' : '#f8f9fa', sh)}<text x="${x + 96}" y="${y + 22}" font-size="15" text-anchor="middle">${e}</text>${t(x + 8, y + 20, en, { size: 12, fill: rr ? '#c92a2a' : VIO, w: 900, anchor: 'start' })}${f(x + 56, y + 38, fa, { size: 9.5, fill: INK, w: 800 })}${t(x + 56, y + 53, ex, { size: 8.6, fill: MUTED })}`; }).join('')}
      ${f(180, 306, "Red boxes: after a root, double the r (rr)", { size: 9.5, fill: '#c92a2a', w: 700 })}`, "Disease suffixes");
  };

  /* قاعده rr دوتایی */
  A['rr-rule'] = () => {
    const row = (y, parts, word, fa) => `${parts.map(([s, c, x]) => t(x, y, s, { size: 18, fill: c, w: 900 })).join('')}${t(250, y, '→', { size: 18, fill: LINE })}${t(310, y - 4, word, { size: 11.5, fill: INK, w: 900 })}${f(310, y + 12, fa, { size: 9.5 })}`;
    return svg(360, 214, `${f(180, 22, "The suffixes ‎-rrhage, ‎-rrhea, ‎-rrhexis and ‎-rrhaphy", { size: 11, fill: INK, w: 800 })}${f(180, 40, "After the combining vowel, the r is doubled", { size: 10.5, fill: '#c92a2a', w: 800 })}
      <rect x="8" y="54" width="344" height="40" rx="10" fill="#fff5f5"/>${row(80, [['hem', '#1c7ed6', 48], ['o', '#868e96', 84], ['rr', '#c92a2a', 112], ['hage', '#2b8a3e', 158]], 'hemorrhage', "bleeding")}
      <rect x="8" y="102" width="344" height="40" rx="10" fill="#fff5f5"/>${row(128, [['py', '#1c7ed6', 48], ['o', '#868e96', 84], ['rr', '#c92a2a', 112], ['hea', '#2b8a3e', 152]], 'pyorrhea', "discharge of pus")}
      <rect x="8" y="150" width="344" height="40" rx="10" fill="#fff5f5"/>${row(176, [['herni', '#1c7ed6', 40], ['o', '#868e96', 84], ['rr', '#c92a2a', 112], ['haphy', '#2b8a3e', 162]], 'herniorrhaphy', "hernia repair")}
      ${f(180, 208, "alone: ‎-rhage • after a root: ‎-rrhage", { size: 9.5, fill: MUTED, w: 700 })}`, "The double-rr rule");
  };

  /* تغییرات لوله و رگ: واژه‌هایی که پسوند می‌شوند (جدول ۳-۴) */
  A['tube-changes'] = () => {
    const sh = 's' + (++UID);
    const W = 150;
    const flow = (x, y, n) => Array.from({ length: n }, (_, i) => `<circle cx="${x + 16 + i * 26}" cy="${y}" r="3.4" fill="#e03131"/>`).join('');
    const tube = (path, inner, extra) => `<path d="${path}" fill="#ffc9c9" stroke="#c92a2a" stroke-width="2"/>${inner || ''}${extra || ''}`;
    const P = [
      ['normal', "normal", tube('M8 16 H142 V44 H8 Z', flow(8, 30, 5))],
      ['stenosis', "narrowing", tube('M8 16 H52 Q75 26 98 16 H142 V44 H98 Q75 34 52 44 H8 Z', flow(8, 30, 2) + `<circle cx="120" cy="30" r="3.4" fill="#e03131"/>`)],
      ['ectasia • dilation', "widening", tube('M8 20 H44 Q75 -6 106 20 H142 V40 H106 Q75 66 44 40 H8 Z', flow(8, 30, 5))],
      ['spasm', "sudden contraction", tube('M8 16 H40 L50 26 L60 16 L70 26 L80 16 L90 26 L100 16 H142 V44 H100 L90 34 L80 44 L70 34 L60 44 L50 34 L40 44 H8 Z', flow(8, 30, 1) + `<circle cx="126" cy="30" r="3.4" fill="#e03131"/>`)],
      ['sclerosis', "hardening", `<path d="M8 16 H142 V44 H8 Z" fill="#ffc9c9" stroke="#495057" stroke-width="6"/>${flow(8, 30, 5)}`],
      ['stasis', "flow stopped", tube('M8 16 H142 V44 H8 Z', `<circle cx="30" cy="30" r="3.4" fill="#e03131"/><circle cx="40" cy="30" r="3.4" fill="#e03131"/><circle cx="50" cy="30" r="3.4" fill="#e03131"/><path d="M70 22 v16 M78 22 v16" stroke="#c92a2a" stroke-width="3"/>`)]];
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, "One tube (vessel, bronchus) and its six states", { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([en, fa, g], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 84; return `${card(x, y, 168, 76, '#f8f9fa', sh)}<g transform="translate(${x + 9} ${y})">${g}</g>${t(x + 84, y + 56, en, { size: 11, fill: i ? VIO : MUTED, w: 900 })}${f(x + 84, y + 70, fa, { size: 9.5, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 284, "bronchostenosis: narrowing of a bronchus • vasodilation: widening of a vessel", { size: 9.5, fill: MUTED, w: 700 })}`, "Narrowing, widening, spasm, hardening and stoppage");
  };

  /* حالت‌های بافت: نرمی، مرگ، افتادگی، حل شدن، ورم، سم */
  A['tissue-states'] = () => {
    const sh = 's' + (++UID);
    const P = [
      ['malacia', "softening", '<path d="M20 34 Q40 10 60 34 Q80 50 100 34" stroke="#adb5bd" stroke-width="10" fill="none" stroke-linecap="round"/>', 'osteomalacia'],
      ['necrosis', "tissue death", '<ellipse cx="60" cy="30" rx="40" ry="16" fill="#ffc9c9"/><path d="M42 24 q10 -10 22 0 q12 8 18 0 q2 14 -18 16 q-26 2 -22 -16z" fill="#343a40"/>', 'osteonecrosis'],
      ['ptosis', "drooping", '<ellipse cx="40" cy="22" rx="16" ry="10" fill="#ffd8a8" stroke="#e8590c" stroke-dasharray="3 2"/><path d="M52 28 L72 40" stroke="#e8590c" stroke-width="2"/><path d="M68 34 l5 7 l-8 1" fill="#e8590c"/><ellipse cx="84" cy="44" rx="16" ry="10" fill="#ffd8a8" stroke="#e8590c" stroke-width="1.5"/>', 'blepharoptosis'],
      ['lysis', "dissolving, destruction", '<circle cx="36" cy="30" r="15" fill="#ffc9c9" stroke="#c92a2a" stroke-width="1.5"/><path d="M58 30 h12" stroke="#5b6b73" stroke-width="2"/><circle cx="80" cy="22" r="4" fill="#ffc9c9"/><circle cx="92" cy="34" r="3" fill="#ffc9c9"/><circle cx="84" cy="40" r="3.5" fill="#ffc9c9"/><circle cx="98" cy="24" r="2.5" fill="#ffc9c9"/>', 'hemolysis'],
      ['edema', "swelling, fluid build-up", '<path d="M30 46 C24 20 40 10 60 12 C82 10 98 22 90 46 Z" fill="#ffd8a8" stroke="#e8590c" stroke-width="1.5"/><circle cx="48" cy="32" r="3" fill="#74c0fc"/><circle cx="62" cy="26" r="3" fill="#74c0fc"/><circle cx="74" cy="36" r="3" fill="#74c0fc"/>', 'cephaledema'],
      ['toxin', "poison", '<text x="60" y="44" font-size="30" text-anchor="middle">☠️</text>', 'nephrotoxin']];
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, "Six words that also become suffixes", { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([en, fa, g, ex], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 84; return `${card(x, y, 168, 76, '#f8f9fa', sh)}<g transform="translate(${x + 24} ${y - 2})">${g}</g>${t(x + 84, y + 54, en, { size: 11.5, fill: VIO, w: 900 })}${f(x + 84, y + 69, `${fa} • ${ex}`, { size: 9 })}`; }).join('')}`, "Softening, tissue death, drooping, destruction, swelling and poison");
  };

  /* ---------- میکروب‌ها و انواع بیماری ---------- */
  /* هفت گروه بیماری */
  A['disease-types'] = () => {
    const sh = 's' + (++UID);
    const R = [['infectious', "infectious", "microbes and parasites", '🦠', '#2f9e44', '#ebfbee'], ['degenerative', "degenerative", "wear, ageing, damage", '🦴', '#868e96', '#f1f3f5'], ['neoplasia', "neoplasia", "uncontrolled tissue growth", '🔴', '#c92a2a', '#fff5f5'],
      ['immune', "immunity, protection", "allergy, autoimmunity", '🛡️', '#1c7ed6', '#e7f5ff'], ['metabolic', "metabolic", "enzyme deficiency, malnutrition", '⚙️', '#e67700', '#fff9db'], ['hormonal', "hormonal", "such as diabetes mellitus", '💧', '#7048e8', '#f3f0ff'], ['mental', "mental", "mind and adaptation", '🧠', '#c2255c', '#fff0f6']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, "Seven large groups of disease (sometimes overlapping)", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, d, e, c, bg], i) => { const full = i === 6, x = full ? 96 : 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 66; return `${card(x, y, 168, 58, bg, sh)}<text x="${x + 24}" y="${y + 36}" font-size="22" text-anchor="middle">${e}</text>${t(x + 160, y + 20, en, { size: 11.5, fill: c, w: 900, anchor: 'end' })}${f(x + 160, y + 36, fa, { size: 10, fill: INK, w: 800, anchor: 'end' })}${f(x + 160, y + 51, d, { size: 8.6, anchor: 'end' })}`; }).join('')}`, "Types of disease");
  };

  /* حاد و مزمن، تشدید و فروکش */
  A['acute-chronic'] = () => {
    const id = 'm' + (++UID);
    return svg(360, 250, `<defs>${marker(id, LINE)}</defs>
      ${arrow(id, 30, 214, 350, 214)}${arrow(id, 30, 214, 30, 24)}
      ${f(330, 234, "time", { size: 9.5 })}${f(30, 16, "Severity", { size: 9.5 })}
      <path d="M40 212 C52 212 56 46 70 46 C84 46 88 212 104 212" fill="#ffc9c9" opacity=".6" stroke="#e03131" stroke-width="2.6"/>
      ${t(112, 42, 'acute', { size: 12, fill: '#e03131', w: 900, anchor: 'start' })}${f(112, 57, "acute: sudden, severe, short", { size: 9.5, fill: '#e03131', anchor: 'start' })}
      <path d="M120 160 C150 156 170 150 190 148 C206 146 214 96 226 96 C238 96 242 144 258 146 C274 148 282 172 300 172 C316 172 326 154 346 152" fill="none" stroke="#1c7ed6" stroke-width="2.6"/>
      ${t(122, 124, 'chronic', { size: 12, fill: '#1c7ed6', w: 900, anchor: 'start' })}${f(122, 140, "chronic: long, slow", { size: 9.5, fill: '#1c7ed6', anchor: 'start' })}
      <circle cx="226" cy="96" r="5" fill="#e8590c"/>${t(238, 92, 'exacerbation', { size: 9.5, fill: '#e8590c', anchor: 'start' })}${f(238, 105, "flare-up", { size: 9, fill: '#e8590c', anchor: 'start' })}
      <circle cx="300" cy="172" r="5" fill="#2b8a3e"/>${t(300, 192, 'remission', { size: 9.5, fill: '#2b8a3e' })}${f(300, 205, "easing", { size: 9, fill: '#2b8a3e' })}`, "Acute and chronic disease");
  };

  /* شکل باکتری‌ها */
  const rod = (x, y, a, c) => `<rect x="${x - 9}" y="${y - 3.5}" width="18" height="7" rx="3.5" fill="${c}" transform="rotate(${a} ${x} ${y})"/>`;
  A['bacteria-shapes'] = () => {
    const sh = 's' + (++UID);
    const P = '#7048e8', R = '#e64980';
    const ball = (x, y, c) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}"/>`;
    const cl = [[0, 0], [10, 2], [5, 9], [-5, 8], [15, 10], [8, 18], [-2, 17], [18, -6], [-8, -2]].map(([a, b]) => ball(60 + a, 34 + b, P)).join('');
    const ch = Array.from({ length: 8 }, (_, i) => ball(22 + i * 11, 30 + Math.sin(i * 0.9) * 8, P)).join('');
    const ro = [[40, 26, 20], [70, 36, -30], [96, 26, 60], [54, 48, 10], [86, 54, -10]].map(([x, y, a]) => rod(x, y, a, R)).join('');
    const vi = [[36, 26], [66, 38], [92, 24], [52, 48], [88, 50]].map(([x, y]) => `<path d="M${x - 8} ${y + 3} Q${x} ${y - 9} ${x + 8} ${y + 3}" stroke="${R}" stroke-width="5" fill="none" stroke-linecap="round"/>`).join('');
    const sp = [0, 1].map(k => { let d = `M14 ${30 + k * 22}`;  for (let i = 0; i < 10; i++) d += ` q5 ${i % 2 ? 8 : -8} 10 0`; return `<path transform="translate(0 -6)" d="${d}" stroke="${R}" stroke-width="2.4" fill="none"/>`; }).join('');
    const T = [['cocci', "round", cl.replace(/cx="(\d+)/g, (m, v) => `cx="${v}`), "staphylococci: in clusters"], ['streptococci', "round and in chains", ch, "strepto- = chain"], ['bacilli', "rod-shaped", ro, "tuberculosis, tetanus"],
      ['vibrios', "curved rod", vi, 'cholera'], ['spirochetes', "spiral", sp, "syphilis, Lyme disease"]];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, "We name bacteria by their shape", { size: 11.5, fill: INK, w: 800 })}
      ${T.map(([en, fa, g, ex], i) => { const full = i === 4, x = full ? 96 : 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 88; return `${card(x, y, 168, 80, '#f8f9fa', sh)}<g transform="translate(${x + 24} ${y - 6})">${g}</g>${t(x + 84, y + 58, en, { size: 11.5, fill: VIO, w: 900 })}${f(x + 84, y + 73, `${fa} • ${ex}`, { size: 8.8 })}`; }).join('')}`, "Bacterial shapes");
  };

  /* خانواده میکروب‌ها و انگل‌ها */
  A['microbe-family'] = () => {
    const sh = 's' + (++UID);
    const vir = (x, y) => `${Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return `<path d="M${(x + 9 * Math.cos(a)).toFixed(1)} ${(y + 9 * Math.sin(a)).toFixed(1)} L${(x + 14 * Math.cos(a)).toFixed(1)} ${(y + 14 * Math.sin(a)).toFixed(1)}" stroke="#c92a2a" stroke-width="2"/><circle cx="${(x + 15 * Math.cos(a)).toFixed(1)}" cy="${(y + 15 * Math.sin(a)).toFixed(1)}" r="2" fill="#c92a2a"/>`; }).join('')}<circle cx="${x}" cy="${y}" r="9" fill="#ffa8a8" stroke="#c92a2a" stroke-width="1.5"/>`;
    const M = [
      ['bacteria', "bacteria", `${rod(50, 30, 20, '#e64980')}${rod(72, 40, -20, '#e64980')}<circle cx="46" cy="48" r="5" fill="#7048e8"/><circle cx="56" cy="50" r="5" fill="#7048e8"/>`, "single-celled; antibiotics work"],
      ['virus', "virus", vir(60, 38), "only inside a living cell"],
      ['fungus', "fungus (yeast or mould)", '<ellipse cx="48" cy="40" rx="12" ry="9" fill="#ffe066" stroke="#e67700" stroke-width="1.5"/><ellipse cx="64" cy="30" rx="7" ry="5" fill="#ffe066" stroke="#e67700" stroke-width="1.5"/><path d="M70 46 q10 -4 16 4 q6 8 14 2" stroke="#e67700" stroke-width="2.4" fill="none"/>', "yeast and mould"],
      ['protozoon', "single-celled animal", '<path d="M34 40 C30 22 50 18 58 26 C66 16 86 22 82 36 C92 46 76 58 62 52 C50 62 30 56 34 40Z" fill="#a5d8ff" stroke="#1c7ed6" stroke-width="1.5"/><circle cx="58" cy="38" r="6" fill="#1c7ed6"/>', "single-celled animal"],
      ['helminth', "parasitic worm", '<path d="M24 46 C34 22 50 56 62 34 C72 18 86 44 96 30" stroke="#d6336c" stroke-width="7" fill="none" stroke-linecap="round"/>', "roundworm and pinworm"],
      ['chlamydia • rickettsia', "very small bacteria", '<circle cx="60" cy="38" r="22" fill="#fff0f6" stroke="#c2255c" stroke-width="1.5"/><circle cx="60" cy="38" r="7" fill="#c2255c" opacity=".7"/><circle cx="46" cy="30" r="2.6" fill="#7048e8"/><circle cx="72" cy="46" r="2.6" fill="#7048e8"/><circle cx="70" cy="28" r="2.6" fill="#7048e8"/>', "inside cells; antibiotics work"]];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, "Agents of infection: from the tiny virus to the worm", { size: 11.5, fill: INK, w: 800 })}
      ${M.map(([en, fa, g, d], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 88; return `${card(x, y, 168, 80, '#f8f9fa', sh)}<g transform="translate(${x + 33} ${y - 9}) scale(.85)">${g}</g>${t(x + 84, y + 50, en, { size: 11, fill: VIO, w: 900 })}${f(x + 84, y + 63, fa, { size: 9.3, fill: INK, w: 800 })}${f(x + 84, y + 76, d, { size: 8.3 })}`; }).join('')}`, "Bacteria, viruses, fungi, protozoa and worms");
  };

  /* رنگ‌آمیزی گرم */
  A['gram-stain'] = () => {
    const sh = 's' + (++UID);
    const slide = (x, c, bg, en, fa, ab) => `${card(x, 34, 166, 150, bg, sh)}<circle cx="${x + 83}" cy="92" r="44" fill="#fff" stroke="#dee2e6" stroke-width="2"/>${dots(x + 83, 92, 34, 16, c, 4.4, x + 3)}${t(x + 83, 156, en, { size: 12, fill: c, w: 900 })}${f(x + 83, 172, fa, { size: 9.5, fill: INK, w: 700 })}${t(x + 140, 54, ab, { size: 11, fill: c, w: 900 })}`;
    return svg(360, 220, `<defs>${shadow(sh)}</defs>${f(180, 20, "Gram stain: sorts bacteria into two groups", { size: 11.5, fill: INK, w: 800 })}
      ${slide(186, '#7048e8', '#f3f0ff', 'gram positive', "stays purple", 'Gm+')}${slide(8, '#e64980', '#fff0f6', 'gram negative', "turns red (pink)", 'Gm−')}
      ${f(180, 206, "The acid-fast stain (AF) is used mainly for the tuberculosis germ (TB)", { size: 9.5, fill: MUTED, w: 700 })}`, "stain that sorts bacteria into two groups");
  };

  /* شیوع: بومی، همه‌گیر، جهانی */
  A['spread-scale'] = () => {
    const sh = 's' + (++UID);
    const region = (cx, cy, n, seed) => `<path d="M${cx - 40} ${cy} C${cx - 44} ${cy - 30} ${cx - 10} ${cy - 40} ${cx + 10} ${cy - 30} C${cx + 40} ${cy - 34} ${cx + 46} ${cy - 2} ${cx + 34} ${cy + 18} C${cx + 18} ${cy + 40} ${cx - 34} ${cy + 34} ${cx - 40} ${cy}Z" fill="#ebfbee" stroke="#2f9e44" stroke-width="1.5"/>${dots(cx, cy, 28, n, '#e03131', 2.6, seed)}`;
    const globe = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="40" fill="#d0ebff" stroke="#1c7ed6" stroke-width="1.5"/><path d="M${cx - 22} ${cy - 24} q14 4 12 18 q-10 8 -4 22 M${cx + 6} ${cy - 34} q16 10 10 26 q14 6 12 22" stroke="#2f9e44" stroke-width="7" fill="none" stroke-linecap="round" opacity=".8"/>${dots(cx, cy, 34, 34, '#e03131', 2.4, 41)}`;
    const box = (x, g, en, fa, d) => `${card(x, 32, 112, 196, '#f8f9fa', sh)}${g}${t(x + 56, 168, en, { size: 12, fill: VIO, w: 900 })}${f(x + 56, 184, fa, { size: 9.8, fill: INK, w: 800 })}${f(x + 56, 202, d[0], { size: 8.6 })}${f(x + 56, 216, d[1], { size: 8.6 })}`;
    return svg(360, 240, `<defs>${shadow(sh)}</defs>${f(180, 20, "How widespread is a disease?", { size: 11.5, fill: INK, w: 800 })}
      ${box(242, region(298, 96, 4, 5), 'endemic', "native", ["low but constant", "like the common cold"])}${box(124, region(180, 96, 30, 9), 'epidemic', "widespread", ["suddenly, many people", "in one region"])}${box(6, globe(62, 96), 'pandemic', "worldwide epidemic", ["across a continent", "or the world"])}`, "Endemic, epidemic and pandemic");
  };

  /* راه‌های ورود میکروب */
  A.portals = () => {
    const pts = [[180, 44, 232, 40, 'respiratory tract', "The respiratory system"], [180, 58, 110, 64, 'digestive system', "Digestive tract (mouth)"], [146, 132, 96, 132, 'damaged skin', "Broken skin"], [180, 150, 232, 156, 'urinary & reproductive', "Urinary and genital tracts"]];
    return svg(360, 250, `${man(180, 22, 0.98)}
      <path d="M140 128 l12 8 M138 136 l10 -4" stroke="#c92a2a" stroke-width="2.4" stroke-linecap="round"/>
      ${pts.map(([x1, y1, x2, y2, en, fa]) => `${pin(x1, y1, x2, y2, VIO)}${lab(x2 + (x2 > 180 ? 4 : -4), y2 - 2, en, fa, { size: 10, fill: VIO, anchor: x2 > 180 ? 'start' : 'end' })}`).join('')}
      ${f(180, 232, "Routes of transmission: air • food • water • direct contact", { size: 10, fill: INK, w: 800 })}${f(180, 18, "portals of entry: the doors microbes use to get in", { size: 11, fill: INK, w: 800 })}`, "How microbes get in");
  };

  /* واژه‌های منشأ و شیوه بیماری */
  A['origin-words'] = () => {
    const sh = 's' + (++UID);
    const R = [['iatrogenic', "caused by treatment", "iatr/o physician + gen producing", '👨‍⚕️', '#1c7ed6'], ['idiopathic', "unknown cause", "idi/o self + path/o disease", '❓', '#7048e8'], ['nosocomial', "hospital-acquired", "MRSA and VRSA", '🏥', '#c92a2a'],
      ['opportunistic', "opportunistic", "when the body is weak", '🪫', '#e67700'], ['communicable', "contagious", "from one person to another", '🤝', '#2b8a3e'], ['systemic', "whole-body", "involves the whole body", '🧍', '#0c8599']];
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, "Where did it come from? How does it spread?", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, d, e, c], i) => { const y = 32 + i * 42; return `${card(8, y, 344, 36, '#f8f9fa', sh)}<text x="330" y="${y + 25}" font-size="17" text-anchor="middle">${e}</text>${t(310, y + 16, en, { size: 11, fill: c, w: 900, anchor: 'end' })}${f(310, y + 31, fa, { size: 9.5, fill: INK, w: 800, anchor: 'end' })}${f(20, y + 23, d, { size: 9, anchor: 'start' })}`; }).join('')}`, "Words for the origin and spread of disease");
  };

  /* ---------- پاسخ بدن به بیماری ---------- */
  /* چهار نشانه التهاب روی یک انگشت آسیب‌دیده */
  A['inflammation-signs'] = () => {
    const sh = 's' + (++UID), g = 'g' + (++UID);
    const sig = (x, y, en, la, fa, ic, c, anchor) => `${ic}${t(x, y, en, { size: 12, fill: c, w: 900, anchor })}${t(x, y + 14, la, { size: 9, fill: MUTED, italic: true, anchor })}${f(x, y + 28, fa, { size: 10, fill: INK, w: 800, anchor })}`;
    return svg(360, 250, `<defs>${shadow(sh)}${radial(g, '#ff8787', '#f8dcc6', '45%')}</defs>
      <path d="M96 196 L116 80 C120 54 152 46 166 62 C176 72 176 86 172 100 L160 196 Z" fill="#f8dcc6" stroke="${SKIN_LINE}" stroke-width="1.5"/>
      <ellipse cx="144" cy="96" rx="34" ry="26" fill="url(#${g})" opacity=".85"/><path d="M130 92 l16 8 M136 102 l12 -12" stroke="#c92a2a" stroke-width="2.4" stroke-linecap="round"/>
      ${f(144, 228, "injury → chemicals released → blood and fluid into the tissue", { size: 9.5, fill: INK, w: 700 })}
      <path d="M110 70 q-6 -10 0 -20 q6 -10 0 -20 M124 62 q-6 -10 0 -20 q6 -10 0 -20" stroke="#e8590c" stroke-width="2.2" fill="none"/>
      ${sig(60, 40, 'heat', 'calor', "heat", '', '#e8590c', 'middle')}
      <path d="M196 60 l-12 18 h10 l-10 20" stroke="#f59f00" stroke-width="3" fill="none" stroke-linejoin="round"/>${sig(250, 52, 'pain', 'dolor', "pain", '', '#f59f00', 'middle')}
      ${pin(160, 112, 226, 128, '#e03131')}${sig(272, 124, 'redness', 'rubor', "redness", '', '#e03131', 'middle')}
      <path d="M178 96 q12 2 14 -10 M108 104 q-12 0 -14 -12" stroke="#1c7ed6" stroke-width="2" fill="none" stroke-dasharray="3 2"/>${sig(54, 120, 'swelling', 'tumor', "swelling", '', '#1c7ed6', 'middle')}
      <rect x="236" y="168" width="112" height="34" rx="10" fill="${VIO_BG}"/>${t(292, 186, 'inflammation • -itis', { size: 10, fill: VIO, w: 900 })}${f(292, 199, "inflammation", { size: 9, fill: VIO })}`, "The four signs of inflammation");
  };

  /* فاگوسیتوز گام به گام */
  A['phago-steps'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    const mac = (x, y, seed) => `<path d="${blob(x, y, 30, 0.35, 9, seed)}" fill="#a5d8ff" stroke="#1c7ed6" stroke-width="1.5"/><circle cx="${x - 8}" cy="${y + 4}" r="9" fill="#74c0fc" stroke="#1971c2"/>`;
    const bac = (x, y, a) => `<rect x="${x - 9}" y="${y - 4}" width="18" height="8" rx="4" fill="#7048e8" transform="rotate(${a || 0} ${x} ${y})"/>`;
    const st = (x, n, en, fa, g) => `${card(x, 34, 108, 154, '#f8f9fa', sh)}<circle cx="${x + 18}" cy="50" r="10" fill="${VIO}"/>${t(x + 18, 54, n, { size: 10, fill: '#fff', w: 900 })}${g}${t(x + 54, 160, en, { size: 10.5, fill: VIO, w: 900 })}${f(x + 54, 176, fa, { size: 9.3, fill: INK, w: 700 })}`;
    return svg(360, 226, `<defs>${shadow(sh)}${marker(id, LINE)}</defs>${f(180, 20, "phagocytosis: phag/o (eating) + cyt/o (cell)", { size: 11, fill: INK, w: 800 })}
      ${st(246, '1', 'engulf', "swallowing the bacterium", mac(300, 104, 3) + bac(336, 82, 30) + `<path d="M326 90 q-4 6 -10 6" stroke="#1c7ed6" stroke-width="2" fill="none"/>`)}
      ${st(126, '2', 'vesicle', "trapped in a sac", mac(180, 104, 7) + `<circle cx="190" cy="98" r="11" fill="#e5dbff" stroke="#7048e8" stroke-width="1.4"/>` + bac(190, 98, -20) + `<circle cx="170" cy="82" r="5" fill="#69db7c"/>`)}
      ${st(6, '3', 'digest', "enzymes destroy it", mac(60, 104, 11) + `<circle cx="70" cy="98" r="11" fill="#d3f9d8" stroke="#2f9e44" stroke-width="1.4"/><path d="M64 96 h4 M71 101 h4 M66 104 h3" stroke="#7048e8" stroke-width="2.6" stroke-linecap="round"/>`)}
      ${arrow(id, 244, 110, 236, 110)}${arrow(id, 124, 110, 116, 110)}
      ${f(180, 210, "What remains: fluid + white blood cells = pus", { size: 10, fill: '#e67700', w: 800 })}`, "The stages of phagocytosis");
  };

  /* ایمنی ذاتی و اکتسابی */
  A['immunity-types'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    const item = (x, y, s, c) => `${pill(x, y, 158, 22, '#fff')}${f(x + 79, y + 15, s, { size: 9.3, fill: c || INK, w: 700 })}`;
    return svg(360, 280, `<defs>${shadow(sh)}${marker(id, LINE)}</defs>
      <rect x="110" y="8" width="140" height="40" rx="12" fill="${VIO_BG}" filter="url(#${sh})"/>${t(180, 26, 'immunity', { size: 13, fill: VIO, w: 900 })}${f(180, 41, "All the body’s defences", { size: 9.3, fill: INK })}
      ${arrow(id, 150, 50, 104, 68)}${arrow(id, 210, 50, 256, 68)}
      ${card(188, 70, 166, 200, '#e7f5ff', sh)}${card(6, 70, 166, 200, '#fff4e6', sh)}
      ${t(271, 92, 'innate', { size: 12, fill: '#1c7ed6', w: 900 })}${f(271, 107, "innate; from birth", { size: 9.5, fill: INK, w: 800 })}
      ${["intact skin and mucous membranes", "stomach acid, enzymes in saliva and tears", "inflammation", "phagocytosis: swallowing microbes"].map((s, i) => item(192, 122 + i * 34, s, '#1864ab')).join('')}
      ${t(89, 92, 'adaptive', { size: 12, fill: '#e8590c', w: 900 })}${f(89, 107, "acquired; during life", { size: 9.5, fill: INK, w: 800 })}
      ${["after catching a disease", "with a vaccine", "antibody: a defence protein in the blood", "watching for cancer cells"].map((s, i) => item(10, 122 + i * 34, s, '#d9480f')).join('')}`, "Innate and acquired immunity");
  };

  /* تغییرات رشد سلول */
  A['growth-changes'] = () => {
    const sh = 's' + (++UID);
    const N = { c1: '#ebfbee', c2: '#8ce99a', st: '#2f9e44', nc: '#2b8a3e' };
    const row = (cells) => cells.map(([x, y, r, o]) => cellN(x, y, r, o || N)).join('');
    const grid = (r, cols, rows, dx, dy, x0, y0, o) => { const a = []; for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) a.push([x0 + i * dx, y0 + j * dy, r, o]); return row(a); };
    const P = [
      ['normal', "normal", grid(8, 4, 2, 18, 18, 33, 22)],
      ['hyperplasia', "more cells, normal arrangement", grid(6.5, 6, 3, 13, 13, 27, 14)],
      ['hypertrophy', "bigger cells, not more", grid(12, 3, 2, 26, 22, 34, 20)],
      ['metaplasia', "change into another cell type", grid(8, 2, 2, 18, 18, 33, 22) + grid(8, 2, 2, 18, 18, 69, 22, { c1: '#fff9db', c2: '#ffd43b', st: '#e67700', nc: '#e67700' })],
      ['dysplasia', "abnormal growth, precancerous", [[34, 22, 7], [52, 26, 10], [70, 20, 6], [88, 26, 9], [40, 42, 9], [62, 44, 7], [84, 44, 8]].map(([x, y, r], i) => i % 2 ? cellC(x, y, r, i + 3, { c1: '#fff4e6', c2: '#ffc078', st: '#e8590c', nc: '#d9480f' }) : cellN(x, y, r, N)).join('')],
      ['anaplasia', "undifferentiated; typical of cancer", [[34, 24, 9], [56, 22, 7], [78, 28, 10], [96, 20, 6], [44, 44, 8], [70, 46, 9], [92, 44, 7]].map(([x, y, r], i) => cellC(x, y, r, i + 9)).join('')]];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, "plas = formation • trophy = growth and nourishment", { size: 11, fill: INK, w: 800 })}
      ${P.map(([en, fa, g], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 88; return `${card(x, y, 168, 80, i < 4 ? '#f8f9fa' : '#fff5f5', sh)}<g transform="translate(${x + 14} ${y - 2})">${g}</g>${t(x + 84, y + 64, en, { size: 11, fill: i < 4 ? VIO : '#c92a2a', w: 900 })}${f(x + 84, y + 76, fa, { size: 8.8, fill: INK, w: 700 })}`; }).join('')}`, "Hyperplasia, hypertrophy, metaplasia, dysplasia and anaplasia");
  };

  /* درخت نئوپلاسم */
  A['neoplasm-tree'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    const leaf = (x, y, en, fa, c) => `${pill(x - 52, y, 104, 34, '#fff', c)}${t(x, y + 15, en, { size: 10, fill: c, w: 900 })}${f(x, y + 28, fa, { size: 8.6, fill: INK, w: 700 })}`;
    return svg(360, 300, `<defs>${shadow(sh)}${marker(id, LINE)}</defs>
      <rect x="110" y="8" width="140" height="40" rx="12" fill="#f8f9fa" filter="url(#${sh})"/>${t(180, 26, 'neoplasm • tumor', { size: 12, fill: INK, w: 900 })}${f(180, 41, "New uncontrolled growth of tissue", { size: 9.3 })}
      ${arrow(id, 150, 50, 92, 72)}${arrow(id, 210, 50, 268, 72)}
      ${card(198, 74, 156, 70, GOOD_BG, sh)}${t(276, 98, 'benign', { size: 12, fill: GOOD, w: 900 })}${f(276, 114, "benign; does not spread", { size: 9.5, fill: INK, w: 800 })}${f(276, 131, "lipoma, polyp", { size: 9 })}
      ${card(6, 74, 156, 70, BAD_BG, sh)}${t(84, 98, 'malignant', { size: 12, fill: BAD, w: 900 })}${f(84, 114, "malignant; invades and spreads", { size: 9.5, fill: INK, w: 800 })}${f(84, 131, "another name: cancer • metastasis", { size: 8.6 })}
      ${arrow(id, 60, 146, 60, 160)}${arrow(id, 120, 146, 150, 160)}
      ${leaf(60, 162, 'carcinoma', "Epithelial tissue", BAD)}${leaf(176, 162, 'sarcoma', "connective tissue and muscle", BAD)}
      ${arrow(id, 40, 198, 40, 212)}${arrow(id, 84, 198, 112, 212)}
      ${leaf(56, 214, 'adenocarcinoma', "gland (aden/o)", '#e8590c')}${leaf(170, 214, 'melanoma', "pigment cell", '#e8590c')}
      ${card(232, 160, 122, 90, '#e7f5ff', sh)}${t(293, 180, 'cyst', { size: 12, fill: '#1c7ed6', w: 900 })}${f(293, 196, "fluid-filled sac", { size: 9.3, fill: INK, w: 700 })}${f(293, 212, "often confused", { size: 8.8 })}${f(293, 226, "with cancer;", { size: 8.8 })}${f(293, 240, "but it is not cancerous", { size: 8.8, fill: '#1c7ed6', w: 800 })}
      ${f(180, 284, "in situ: in place, not yet spread • carcinoma in situ (CIS)", { size: 9.5, fill: VIO, w: 700 })}`, "Benign and malignant neoplasms");
  };

  /* جای تجمع مایع: ادم، افیوژن، آسیت، اگزودا */
  A['fluid-places'] = () => {
    const sh = 's' + (++UID);
    const drops = (x, y, n, s) => dots(x, y, s || 14, n, '#4dabf7', 2.6, x + y);
    const P = [
      ['edema', "fluid in tissue; swelling", '<path d="M30 10 C24 30 22 50 26 66 L54 66 C58 50 62 30 56 10 Z" fill="#f8dcc6" stroke="#c98f6b"/><path d="M64 10 C54 30 52 50 58 66 L96 66 C100 50 104 30 90 10 Z" fill="#ffd8a8" stroke="#e8590c" stroke-width="1.5"/>' + drops(78, 40, 6, 12)],
      ['effusion', "fluid in a cavity (such as the pleura)", '<path d="M30 10 C16 20 14 56 30 66 L60 66 L60 10 Z" fill="#ffc9c9" stroke="#c92a2a"/><path d="M14 50 C16 60 22 66 30 66 L60 66 L60 48 Z" fill="#74c0fc" opacity=".8"/>' + t(76, 42, 'pleural', { size: 8, fill: MUTED })],
      ['ascites', "fluid in the peritoneal (abdominal) cavity", '<ellipse cx="60" cy="40" rx="40" ry="28" fill="#f8dcc6" stroke="#c98f6b"/><ellipse cx="60" cy="46" rx="30" ry="16" fill="#74c0fc" opacity=".7"/>'],
      ['exudate', "leakage from vessels after injury", '<rect x="10" y="24" width="100" height="16" rx="8" fill="#ffc9c9" stroke="#c92a2a"/><path d="M50 40 q-4 10 0 18 M62 40 q4 10 0 18 M74 40 q-2 8 2 16" stroke="#f59f00" stroke-width="2" fill="none"/>' + dots(62, 60, 10, 6, '#f59f00', 2.2, 5)]];
    return svg(360, 214, `<defs>${shadow(sh)}</defs>${f(180, 20, "Where has the fluid collected?", { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([en, fa, g], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 90; return `${card(x, y, 168, 82, '#f8f9fa', sh)}<g transform="translate(${x + 30} ${y - 6}) scale(.9)">${g}</g>${t(x + 84, y + 64, en, { size: 11, fill: VIO, w: 900 })}${f(x + 84, y + 77, fa, { size: 8.6, fill: INK, w: 700 })}`; }).join('')}`, "Edema, effusion, ascites and exudate");
  };

  /* ضایعه‌ها و تغییرات بافت */
  A['tissue-lesions'] = () => {
    const sh = 's' + (++UID);
    const skin = '<rect x="10" y="18" width="100" height="40" rx="6" fill="#ffd8c2" stroke="#c98f6b"/>';
    const P = [
      ['abscess', "pus collected in one place", skin + '<ellipse cx="60" cy="40" rx="20" ry="12" fill="#ffe066" stroke="#e67700" stroke-width="1.5"/>'],
      ['cellulitis', "inflammation spread through tissue", '<rect x="10" y="18" width="100" height="40" rx="6" fill="#ffa8a8" stroke="#e03131"/><path d="M14 30 q20 -8 40 4 q24 12 52 -2" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/>'],
      ['fistula', "abnormal passage between two organs", '<ellipse cx="28" cy="38" rx="20" ry="16" fill="#ffc9c9" stroke="#c92a2a"/><ellipse cx="92" cy="38" rx="20" ry="16" fill="#d0bfff" stroke="#7048e8"/><path d="M46 36 C60 28 64 48 74 40" stroke="#495057" stroke-width="5" fill="none"/>'],
      ['fissure', "split, crack", skin + '<path d="M40 18 L56 34 L48 42 L66 58" stroke="#c92a2a" stroke-width="3" fill="none"/>'],
      ['polyp', "mass on a stalk", '<path d="M10 58 H110" stroke="#c98f6b" stroke-width="6"/><path d="M58 56 V36" stroke="#e64980" stroke-width="5"/><circle cx="58" cy="28" r="12" fill="#faa2c1" stroke="#c2255c" stroke-width="1.5"/>'],
      ['adhesion', "two separate surfaces stuck together", '<path d="M10 22 H110 M10 54 H110" stroke="#e8590c" stroke-width="5"/><path d="M40 24 q4 14 0 28 M70 24 q-6 14 2 28" stroke="#adb5bd" stroke-width="5" fill="none"/>'],
      ['gangrene • necrosis', "tissue death (lack of blood)", '<path d="M20 58 C20 30 30 16 44 16 C58 16 60 30 60 58 Z" fill="#f8dcc6" stroke="#c98f6b"/><path d="M60 58 C60 30 70 16 84 16 C98 16 100 30 100 58 Z" fill="#495057"/>'],
      ['induration', "local hardening", skin + '<ellipse cx="60" cy="38" rx="22" ry="12" fill="#e8b28f" stroke="#a5673f" stroke-width="2"/>']];
    return svg(360, 380, `<defs>${shadow(sh)}</defs>${f(180, 20, "Signs of disease in tissue", { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([en, fa, g], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 86; return `${card(x, y, 168, 78, '#f8f9fa', sh)}<g transform="translate(${x + 30} ${y - 10}) scale(.9)">${g}</g>${t(x + 84, y + 60, en, { size: 11, fill: VIO, w: 900 })}${f(x + 84, y + 73, fa, { size: 8.8, fill: INK, w: 700 })}`; }).join('')}`, "Abscess, cellulitis, fistula, fissure, polyp, adhesion, gangrene and induration");
  };

  /* فتق و افتادگی */
  A['hernia-prolapse'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    return svg(360, 230, `<defs>${shadow(sh)}${marker(id, '#c92a2a')}</defs>
      ${card(184, 8, 170, 200, '#fff5f5', sh)}${card(6, 8, 170, 200, '#fff4e6', sh)}
      <path d="M200 40 H340 M200 52 H262 M286 52 H340" stroke="#c98f6b" stroke-width="10"/><path d="M262 46 h24" stroke="#fff" stroke-width="12"/>
      <ellipse cx="274" cy="96" rx="44" ry="28" fill="#ffc9c9" stroke="#c92a2a" stroke-width="1.6"/><path d="M262 74 C258 54 262 40 274 34 C286 40 290 54 286 74" fill="#ffc9c9" stroke="#c92a2a" stroke-width="1.6"/>
      ${t(274, 30, "wall", { size: 8.5, fill: MUTED })}
      ${t(269, 150, 'hernia', { size: 13, fill: '#c92a2a', w: 900 })}${f(269, 166, "hernia; an organ pushing out", { size: 9.5, fill: INK, w: 800 })}${f(269, 179, "through an abnormal opening", { size: 9, fill: INK })}${f(269, 198, 'hiatal hernia • ‎-cele', { size: 9, fill: MUTED })}
      <ellipse cx="66" cy="50" rx="26" ry="18" fill="none" stroke="#e8590c" stroke-width="1.6" stroke-dasharray="4 3"/>${arrow(id, 78, 68, 96, 92)}
      <ellipse cx="104" cy="110" rx="26" ry="18" fill="#ffd8a8" stroke="#e8590c" stroke-width="1.6"/>
      ${t(91, 150, 'prolapse • ptosis', { size: 12, fill: '#e8590c', w: 900 })}${f(91, 166, "drooping; sinking down", { size: 9.5, fill: INK, w: 800 })}${f(91, 179, "an organ out of its normal place", { size: 9, fill: INK })}${f(91, 198, "blepharoptosis: drooping eyelid", { size: 9, fill: MUTED })}
      ${f(180, 224, "Both belong to the structural and degenerative diseases", { size: 9.5, fill: VIO, w: 700 })}`, "Hernia and ptosis");
  };

  /* ---------- معاینه و تشخیص ---------- */
  /* نشانه (sign) و علامت (symptom) */
  A['sign-symptom'] = () => {
    const sh = 's' + (++UID);
    const box = (x, c, bg, en, fa, who, items) => `${card(x, 8, 170, 214, bg, sh)}${t(x + 85, 32, en, { size: 14, fill: c, w: 900 })}${f(x + 85, 50, fa, { size: 10, fill: INK, w: 800 })}${f(x + 85, 68, who, { size: 9, fill: c, w: 700 })}${items.map(([e, s], i) => `${pill(x + 10, 80 + i * 34, 150, 28, '#fff')}<text x="${x + 146}" y="${99 + i * 34}" font-size="14" text-anchor="middle">${e}</text>${f(x + 76, 98 + i * 34, s, { size: 9.5, fill: INK, w: 700 })}`).join('')}`;
    return svg(360, 252, `<defs>${shadow(sh)}</defs>
      ${box(184, '#1c7ed6', '#e7f5ff', 'sign', "sign (objective)", "the physician sees or measures it", [['🌡️', "fever"], ['🩸', "high blood pressure"], ['🔴', "skin rash"], ['🧪', "abnormal test"]])}
      ${box(6, '#e8590c', '#fff4e6', 'symptom', "symptom (subjective)", "the patient feels and reports it", [['⚡', "pain"], ['💫', "dizziness"], ['😩', "weakness"], ['😣', "malaise: feeling unwell"]])}
      ${f(180, 244, "syndrome: the set of signs and symptoms of a disease", { size: 9.5, fill: VIO, w: 700 })}`, "Signs and symptoms");
  };

  /* معاینه فیزیکی IPPA */
  A.ippa = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    const S = [['I', 'inspection', "inspection", "looking", '👁️'], ['P', 'palpation', "feeling", "hands and fingers", '🖐️'], ['P', 'percussion', "tapping", "tapping and listening to the sound", '👆'], ['A', 'auscultation', "listening", "with a stethoscope", '🩺']];
    return svg(360, 232, `<defs>${shadow(sh)}${marker(id, LINE)}</defs>${f(180, 20, "The physical examination in IPPA order", { size: 11.5, fill: INK, w: 800 })}
      ${S.map(([L, en, fa, d, e], i) => { const x = 270 - i * 88; return `${card(x, 34, 82, 170, '#f8f9fa', sh)}<circle cx="${x + 41}" cy="62" r="18" fill="${VIO}"/>${t(x + 41, 68, L, { size: 16, fill: '#fff', w: 900 })}<text x="${x + 41}" y="114" font-size="28" text-anchor="middle">${e}</text>${t(x + 41, 146, en, { size: 9.3, fill: VIO, w: 900 })}${f(x + 41, 162, fa, { size: 10.5, fill: INK, w: 800 })}${f(x + 41, 178, d, { size: 8.4 })}${i < 3 ? arrow(id, x - 1, 120, x - 5, 120) : ''}`; }).join('')}
      ${f(180, 224, "Blood pressure: sphygmomanometer + stethoscope", { size: 9.5, fill: MUTED, w: 700 })}`, "Inspection, palpation, percussion and auscultation");
  };

  /* علائم حیاتی */
  A['vital-signs'] = () => {
    const sh = 's' + (++UID);
    const V = [['T', 'temperature', "body temperature", '37 °C', '🌡️', '#e03131'], ['P', 'pulse', "pulse (bpm)", '60–100', '💓', '#c2255c'], ['R', 'respiration', "breaths per minute", '12–20', '🫁', '#1c7ed6'], ['BP', 'blood pressure', "blood pressure (mm Hg)", '120/80', '🩺', '#7048e8']];
    return svg(360, 250, `<defs>${shadow(sh)}</defs>${f(180, 20, "vital signs (VS): four vital numbers", { size: 11.5, fill: INK, w: 800 })}
      ${V.map(([ab, en, fa, n, e, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 96; return `${card(x, y, 168, 88, '#f8f9fa', sh)}<text x="${x + 30}" y="${y + 40}" font-size="24" text-anchor="middle">${e}</text>${t(x + 154, y + 26, ab, { size: 18, fill: c, w: 900, anchor: 'end' })}${t(x + 154, y + 44, en, { size: 9.5, fill: c, w: 800, anchor: 'end' })}${f(x + 154, y + 60, fa, { size: 9.3, fill: INK, w: 700, anchor: 'end' })}${t(x + 84, y + 80, n, { size: 12, fill: INK, w: 900 })}`; }).join('')}
      ${f(180, 238, "TPR = temperature, pulse, respiration • numbers: approximate adult resting ranges", { size: 8.8, fill: MUTED, w: 700 })}`, "vital signs");
  };

  /* خواندن فشار خون */
  A['bp-reading'] = () => {
    const sh = 's' + (++UID);
    const heart = (x, y, s, c) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 22 C-18 10 -22 -2 -14 -10 C-8 -16 0 -12 0 -6 C0 -12 8 -16 14 -10 C22 -2 18 10 0 22Z" fill="${c}"/>`;
    return svg(360, 220, `<defs>${shadow(sh)}</defs>
      ${card(8, 8, 344, 76, VIO_BG, sh)}${t(180, 66, '120 / 80', { size: 30, fill: VIO, w: 900 })}${t(300, 64, 'mm Hg', { size: 11, fill: MUTED })}
      ${f(180, 26, "Blood pressure is written as systolic/diastolic", { size: 10, fill: INK, w: 800 })}
      ${card(184, 96, 168, 110, '#fff5f5', sh)}${heart(268, 120, 1, '#e03131')}${t(268, 162, 'systolic', { size: 12, fill: '#c92a2a', w: 900 })}${f(268, 178, "when the heart contracts", { size: 9.5, fill: INK, w: 700 })}${f(268, 194, "the top number (120)", { size: 9 })}
      ${card(8, 96, 168, 110, '#e7f5ff', sh)}${heart(92, 118, 1.25, '#74c0fc')}${t(92, 162, 'diastolic', { size: 12, fill: '#1864ab', w: 900 })}${f(92, 178, "when the heart rests", { size: 9.5, fill: INK, w: 700 })}${f(92, 194, "the bottom number (80)", { size: 9 })}`, "Systolic and diastolic pressure");
  };

  /* خانواده ‎-scope */
  A['scope-family'] = () => {
    const sh = 's' + (++UID);
    const S = [['ophthalmoscope', 'ophthalm/o', "eye", '👁️'], ['otoscope', 'ot/o', "ear", '👂'], ['bronchoscope', 'bronch/o', "main airway of the lung", '🫁'], ['endoscope', 'endo-', "inside cavities and organs", '🔦'], ['microscope', 'micro-', "tiny things", '🔬']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, "‎-scope: viewing instrument • ‎-scopy: examination by viewing", { size: 11, fill: INK, w: 800 })}
      ${S.map(([en, r, d, e], i) => { const y = 32 + i * 40; return `${card(8, y, 344, 34, '#f8f9fa', sh)}<text x="332" y="${y + 23}" font-size="16" text-anchor="middle">${e}</text>${t(312, y + 22, en, { size: 11.5, fill: VIO, w: 900, anchor: 'end' })}${t(20, y + 22, r, { size: 10, fill: INK, w: 800, anchor: 'start' })}${f(84, y + 22, d, { size: 9.5, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}
      ${card(8, 236, 344, 56, '#fff4e6', sh)}<text x="332" y="270" font-size="18" text-anchor="middle">🩺</text>${t(312, 258, 'stethoscope', { size: 11.5, fill: '#e8590c', w: 900, anchor: 'end' })}${f(312, 276, "The exception: we listen with it, not look • steth/o chest", { size: 9.3, fill: INK, w: 700, anchor: 'end' })}`, "The ‎-scope instruments");
  };

  /* ‎-graph، ‎-graphy، ‎-gram، ‎-meter، ‎-metry */
  A['graph-gram'] = () => {
    const sh = 's' + (++UID);
    const R = [['-graph', "recording instrument", 'electrocardiograph', "ECG machine", '🖥️'], ['-graphy', "recording process", 'echography', "method of recording with ultrasound", '⚙️'], ['-gram', "the record itself (tracing, image)", 'electrocardiogram', "heart tracing (ECG)", '📈'],
      ['-meter', "measuring instrument", 'thermometer', "thermometer", '🌡️'], ['-metry', "measurement", 'audiometry', "hearing measurement", '📏']];
    return svg(360, 266, `<defs>${shadow(sh)}</defs>${f(180, 20, "Five diagnostic suffixes that get mixed up", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([s, fa, ex, exfa, e], i) => { const y = 32 + i * 46; return `${card(8, y, 344, 40, i < 3 ? '#e7f5ff' : '#ebfbee', sh)}<text x="334" y="${y + 26}" font-size="16" text-anchor="middle">${e}</text>${t(316, y + 18, s, { size: 13, fill: i < 3 ? '#1864ab' : '#2b8a3e', w: 900, anchor: 'end' })}${f(316, y + 33, fa, { size: 9.3, fill: INK, w: 800, anchor: 'end' })}${t(20, y + 18, ex, { size: 10.5, fill: INK, w: 800, anchor: 'start' })}${f(20, y + 33, exfa, { size: 9, anchor: 'start' })}`; }).join('')}`, "Recording and measuring suffixes");
  };

  /* انرژی‌های تصویربرداری */
  A['imaging-energy'] = () => {
    const sh = 's' + (++UID);
    const R = [['x-ray', "x-rays", ['radiography', 'CT', 'fluoroscopy'], '☢️', '#495057', '#f1f3f5'], ['magnet + radio waves', "magnetic field and radio waves", ['MRI'], '🧲', '#c92a2a', '#fff5f5'],
      ['sound waves', "high-frequency sound waves", ['ultrasonography', 'sonogram'], '🔊', '#1c7ed6', '#e7f5ff'], ['radionuclide', "radioactive substance in the body", ['PET', 'SPECT', 'scintigraphy'], '⚛️', '#2b8a3e', '#ebfbee']];
    return svg(360, 276, `<defs>${shadow(sh)}</defs>${f(180, 20, "Each imaging method uses one kind of energy", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ms, e, c, bg], i) => { const y = 32 + i * 60; return `${card(8, y, 344, 54, bg, sh)}<text x="332" y="${y + 33}" font-size="20" text-anchor="middle">${e}</text>${t(312, y + 20, en, { size: 11, fill: c, w: 900, anchor: 'end' })}${f(312, y + 36, fa, { size: 8.8, fill: INK, w: 700, anchor: 'end' })}${(() => { let x = 16; return ms.map(m => { const w = Math.max(40, m.length * 6.4 + 14); const o = `${pill(x, y + 15, w, 22, '#fff', c)}${t(x + w / 2, y + 30, m, { size: 9.5, fill: c, w: 900 })}`; x += w + 5; return o; }).join(''); })()}`; }).join('')}`, "The energy behind imaging methods");
  };

  /* چگالی در رادیوگرافی */
  A['xray-density'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    return svg(360, 250, `<defs>${shadow(sh)}${marker(id, '#f59f00')}</defs>
      <rect x="20" y="40" width="40" height="150" rx="8" fill="#495057"/>${t(40, 210, 'x-ray', { size: 10, fill: INK })}${f(40, 224, "beam source", { size: 9 })}
      ${[60, 90, 120, 150, 176].map(y => arrow(id, 62, y, 110, y, '#f59f00', 2)).join('')}
      <rect x="120" y="50" width="90" height="140" rx="40" fill="#f8dcc6" stroke="#c98f6b"/><rect x="152" y="54" width="26" height="132" rx="10" fill="#f1f3f5" stroke="#adb5bd"/>
      ${t(165, 44, 'arm', { size: 9, fill: MUTED })}${t(165, 210, 'bone • soft tissue', { size: 9, fill: MUTED })}
      <rect x="250" y="40" width="100" height="150" rx="6" fill="#212529"/><rect x="264" y="50" width="72" height="130" rx="30" fill="#868e96"/><rect x="288" y="54" width="24" height="122" rx="9" fill="#f8f9fa"/>
      ${t(300, 210, 'radiograph', { size: 10, fill: INK })}${f(300, 224, "image on film", { size: 9 })}
      ${f(180, 244, "bone: white and bright • soft tissue: grey • air: dark", { size: 9.5, fill: VIO, w: 800 })}
      ${f(180, 22, "Dense tissue absorbs the beam and looks bright", { size: 10.5, fill: INK, w: 800 })}`, "Density in radiography");
  };

  /* نماهای رادیوگرافی */
  A['xray-views'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    const top = (cx, cy) => `<ellipse cx="${cx}" cy="${cy}" rx="30" ry="16" fill="#f8dcc6" stroke="#c98f6b" stroke-width="1.4"/><circle cx="${cx}" cy="${cy}" r="9" fill="#e9b994" stroke="#c98f6b"/><path d="M${cx - 4} ${cy - 8} l4 -6 l4 6" fill="#c98f6b"/>`;
    const V = [['AP', 'anteroposterior', "from front to back", 0], ['PA', 'posteroanterior', "from back to front", 1], ['LL', 'left lateral', "left side against the film", 2], ['RL', 'right lateral', "right side against the film", 3]];
    return svg(360, 300, `<defs>${shadow(sh)}${marker(id, '#f59f00')}</defs>${f(180, 20, "Radiographic views: which side does the beam enter? (seen from above)", { size: 10.5, fill: INK, w: 800 })}
      ${V.map(([ab, en, fa, k], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 124, cx = x + 84, cy = y + 40;
        const film = (x1, y1, w, h) => `<rect x="${x1}" y="${y1}" width="${w}" height="${h}" rx="2" fill="#343a40"/>`;
        const ar = k === 0 ? arrow(id, cx, cy - 36, cx, cy - 20, '#f59f00', 2.4) + film(cx - 30, cy + 22, 60, 5) : k === 1 ? arrow(id, cx, cy + 38, cx, cy + 20, '#f59f00', 2.4) + film(cx - 30, cy - 27, 60, 5) : k === 2 ? arrow(id, cx + 72, cy, cx + 34, cy, '#f59f00', 2.4) + film(cx - 40, cy - 22, 5, 44) : arrow(id, cx - 72, cy, cx - 34, cy, '#f59f00', 2.4) + film(cx + 35, cy - 22, 5, 44);
        return `${card(x, y, 168, 116, '#f8f9fa', sh)}${top(cx, cy)}${ar}${t(cx, y + 94, `${ab} • ${en}`, { size: 9.5, fill: VIO, w: 900 })}${f(cx, y + 108, fa, { size: 9, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 294, "From above: the small nose = front of the body • dark rectangle = film", { size: 8.6, fill: MUTED })}`, "AP, PA and lateral views");
  };

  /* راه‌های نمونه‌برداری */
  A['biopsy-ways'] = () => {
    const sh = 's' + (++UID);
    const R = [['needle aspiration', "drawing fluid with a needle", "from the chest or a cyst", '💉'], ['punch', "small hole", "such as a skin sample", '⭕'], ['endoscopic', "with an endoscope", "respiratory or digestive tract", '🔦'], ['surgical', "surgical removal", "tumour or lymph node", '✂️'], ['liquid biopsy', "liquid biopsy (blood)", "tumour cells or DNA in the blood", '🩸']];
    return svg(360, 248, `<defs>${shadow(sh)}</defs>${f(180, 20, "biopsy (bx): removing tissue for the microscope", { size: 11, fill: INK, w: 800 })}
      ${R.map(([en, fa, d, e], i) => { const y = 32 + i * 42; return `${card(8, y, 344, 36, i === 4 ? '#fff0f6' : '#f8f9fa', sh)}<text x="332" y="${y + 24}" font-size="16" text-anchor="middle">${e}</text>${t(312, y + 16, en, { size: 10.5, fill: i === 4 ? '#c2255c' : VIO, w: 900, anchor: 'end' })}${f(312, y + 31, fa, { size: 9.3, fill: INK, w: 800, anchor: 'end' })}${f(20, y + 23, d, { size: 9, anchor: 'start' })}`; }).join('')}`, "Sampling methods");
  };

  /* ریشه‌های نیروهای فیزیکی (جدول ۳-۶) */
  A['physical-forces'] = () => {
    const sh = 's' + (++UID);
    const R = [['aer/o', "air, gas", '💨'], ['bar/o', "pressure", '⏲️'], ['chrom/o', "colour", '🎨'], ['chron/o', "time", '⏳'], ['cry/o', "cold", '❄️'], ['electr/o', "electricity", '⚡'],
      ['erg/o', "Job", '🏋️'], ['phon/o', "sound", '🗣️'], ['phot/o', "light", '💡'], ['radi/o', "radiation, x-ray", '☢️'], ['son/o', "sound (ultrasound)", '🔊'], ['therm/o', "heat, temperature", '🌡️']];
    return svg(360, 262, `<defs>${shadow(sh)}</defs>${f(180, 20, "Twelve roots for physical forces", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, e], i) => { const x = 6 + (2 - i % 3) * 118, y = 30 + Math.floor(i / 3) * 56; return `${card(x, y, 112, 50, '#f8f9fa', sh)}<text x="${x + 94}" y="${y + 30}" font-size="18" text-anchor="middle">${e}</text>${t(x + 10, y + 21, en, { size: 12, fill: VIO, w: 900, anchor: 'start' })}${f(x + 10, y + 38, fa, { size: 9.3, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, "Roots for physical forces");
  };

  /* ---------- جراحی و درمان ---------- */
  /* پسوندهای برش و برداشتن روی یک اندام */
  const organ = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="34" ry="24" fill="#ffc9c9" stroke="#e03131" stroke-width="1.6"/>`;
  A['surgery-suffixes'] = () => {
    const sh = 's' + (++UID);
    const P = [
      ['-ectomy', "removal", 'hepatectomy', `<ellipse cx="60" cy="40" rx="34" ry="24" fill="none" stroke="#e03131" stroke-width="1.6" stroke-dasharray="4 3"/><path d="M46 28 l28 24 M74 28 l-28 24" stroke="#c92a2a" stroke-width="3" stroke-linecap="round"/>`],
      ['-tomy', "incision", 'laparotomy', organ(60, 40) + `<path d="M34 40 h52" stroke="#1c7ed6" stroke-width="3" stroke-dasharray="6 3"/>`],
      ['-stomy', "making an opening", 'tracheostomy', organ(60, 40) + `<circle cx="60" cy="40" r="9" fill="#fff" stroke="#2b8a3e" stroke-width="3"/>`],
      ['-centesis', "puncture and draw fluid", 'thoracentesis', organ(60, 44) + `<path d="M60 48 L26 10" stroke="#495057" stroke-width="2.4"/><rect x="18" y="-2" width="10" height="16" rx="2" transform="rotate(-42 23 6)" fill="#74c0fc"/><circle cx="60" cy="50" r="6" fill="#74c0fc"/>`],
      ['-tome', "cutting instrument", 'microtome', `<path d="M24 52 L84 22 L92 26 L36 58 Z" fill="#ced4da" stroke="#495057" stroke-width="1.5"/><rect x="84" y="16" width="16" height="9" rx="3" transform="rotate(-27 92 20)" fill="#495057"/>`],
      ['-scopy', "looking inside", 'arthroscopy', organ(60, 44) + `<path d="M20 10 C40 14 46 28 56 40" stroke="#495057" stroke-width="3" fill="none"/><circle cx="56" cy="40" r="3" fill="#ffd43b"/>`]];
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, "A surgeon speaks in suffixes", { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([en, fa, ex, g], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 84; return `${card(x, y, 168, 76, '#f8f9fa', sh)}<g transform="translate(${x + 4} ${y + 4}) scale(.7)">${g}</g>${t(x + 160, y + 26, en, { size: 13, fill: VIO, w: 900, anchor: 'end' })}${f(x + 160, y + 44, fa, { size: 8.8, fill: INK, w: 800, anchor: 'end' })}${t(x + 160, y + 64, ex, { size: 9.5, fill: MUTED, anchor: 'end' })}`; }).join('')}`, "Surgical suffixes");
  };

  /* پسوندهای ترمیم و ثابت کردن */
  A['repair-suffixes'] = () => {
    const sh = 's' + (++UID);
    const P = [
      ['-plasty', "repair, reconstruction", 'rhinoplasty', '<path d="M30 54 C40 20 70 14 84 34 C96 50 74 60 58 52" stroke="#e8590c" stroke-width="3" fill="#ffe8cc"/><path d="M86 18 l6 -6 M92 26 l8 -2" stroke="#f59f00" stroke-width="2.4"/>'],
      ['-rrhaphy', "repair by suturing", 'herniorrhaphy', '<path d="M20 40 H100" stroke="#e03131" stroke-width="2.4"/>' + [30, 44, 58, 72, 86].map(x => `<path d="M${x} 30 L${x + 6} 50" stroke="#1c7ed6" stroke-width="2.4"/>`).join('')],
      ['-pexy', "fixing in place", 'nephropexy', organ(60, 40) + '<path d="M60 16 V4 M50 6 h20" stroke="#495057" stroke-width="3"/><circle cx="60" cy="18" r="4" fill="#495057"/>'],
      ['-desis', "fusing", 'arthrodesis', '<rect x="20" y="20" width="36" height="40" rx="10" fill="#f1f3f5" stroke="#868e96"/><rect x="64" y="20" width="36" height="40" rx="10" fill="#f1f3f5" stroke="#868e96"/><rect x="50" y="32" width="20" height="16" fill="#adb5bd"/>'],
      ['-tripsy', "crushing", 'lithotripsy', '<path d="M30 40 l10 -12 l14 4 l4 14 l-12 10 l-14 -4 z" fill="#868e96"/><path d="M70 28 l6 -4 M76 40 h8 M70 52 l6 4" stroke="#f59f00" stroke-width="3"/><circle cx="94" cy="30" r="3" fill="#868e96"/><circle cx="98" cy="44" r="2.5" fill="#868e96"/><circle cx="92" cy="54" r="2" fill="#868e96"/>'],
      ['-lysis', "separating", 'dialysis', '<path d="M20 30 H100 M20 50 H100" stroke="#adb5bd" stroke-width="4"/><path d="M60 24 v32" stroke="#1c7ed6" stroke-width="2" stroke-dasharray="3 3"/>' + dots(40, 40, 10, 6, '#e03131', 2.2, 3) + dots(80, 40, 8, 3, '#e03131', 2.2, 8)]];
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, "Repair, fixation, fusion, crushing", { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([en, fa, ex, g], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 84; return `${card(x, y, 168, 76, '#f8f9fa', sh)}<g transform="translate(${x + 4} ${y}) scale(.8)">${g}</g>${t(x + 160, y + 26, en, { size: 13, fill: VIO, w: 900, anchor: 'end' })}${f(x + 160, y + 44, fa, { size: 8.8, fill: INK, w: 800, anchor: 'end' })}${t(x + 160, y + 64, ex, { size: 9.5, fill: MUTED, anchor: 'end' })}`; }).join('')}`, "Repair and fixation suffixes");
  };

  /* هدف‌های جراحی */
  A['surgery-purposes'] = () => {
    const sh = 's' + (++UID);
    const R = [['treatment', "treatment", "excision of a tumour, wound repair, fixation of a drooping organ", '🩹', '#2b8a3e', '#ebfbee'], ['diagnosis', "diagnosis", "biopsy; exploratory surgery", '🔬', '#1c7ed6', '#e7f5ff'],
      ['restoration', "restoring organ function", "colostomy, tracheostomy, transplant, prosthesis", '🔧', '#e8590c', '#fff4e6'], ['relief', "relief (palliative)", "reducing pain or tumour pressure", '🕊️', '#7048e8', '#f3f0ff']];
    return svg(360, 272, `<defs>${shadow(sh)}</defs>${f(180, 20, "Why do we operate?", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, d, e, c, bg], i) => { const y = 32 + i * 50; return `${card(8, y, 344, 44, bg, sh)}<text x="332" y="${y + 29}" font-size="18" text-anchor="middle">${e}</text>${t(312, y + 18, en, { size: 11, fill: c, w: 900, anchor: 'end' })}${f(312, y + 35, fa, { size: 9.5, fill: INK, w: 800, anchor: 'end' })}${f(20, y + 27, d, { size: 8.6, anchor: 'start' })}`; }).join('')}
      ${card(8, 234, 168, 32, '#fff5f5', sh)}${f(92, 254, "emergency: urgent, immediate danger", { size: 9, fill: '#c92a2a', w: 800 })}${card(184, 234, 168, 32, '#f8f9fa', sh)}${f(268, 254, "elective: optional, can be delayed", { size: 9, fill: INK, w: 800 })}`, "The goals of surgery");
  };

  /* مسیر بیمار در جراحی */
  A['periop-path'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    const S = [['preop', "before surgery", ["examination", "informed consent", "NPO: fasting"], '📋', '#1c7ed6'], ['OR', "operating room", ['anesthesia', 'incision', 'EBL'], '🔪', '#c92a2a'],
      ['PACU', "recovery", ["waking up", "from anaesthesia", 'VS'], '🛏️', '#e8590c'], ['postop', "after surgery", ["follow-up", "care instructions", "at home"], '🏠', '#2b8a3e']];
    return svg(360, 230, `<defs>${shadow(sh)}${marker(id, LINE)}</defs>${f(180, 20, "From admission to home", { size: 11.5, fill: INK, w: 800 })}
      ${S.map(([en, fa, items, e, c], i) => { const x = 270 - i * 88; return `${card(x, 34, 82, 180, '#f8f9fa', sh)}<text x="${x + 41}" y="66" font-size="24" text-anchor="middle">${e}</text>${t(x + 41, 92, en, { size: 12, fill: c, w: 900 })}${f(x + 41, 108, fa, { size: 9.3, fill: INK, w: 800 })}${items.map((s, j) => (/^[A-Za-z]/.test(s) ? t : f)(x + 41, 134 + j * 18, s, { size: 8.6, fill: MUTED, w: 700 })).join('')}${i < 3 ? arrow(id, x - 1, 124, x - 5, 124) : ''}`; }).join('')}`, "Before surgery, operating room, recovery and after surgery");
  };

  /* درجه‌بندی و مرحله‌بندی */
  A['grade-stage'] = () => {
    const sh = 's' + (++UID);
    const cells = (x, y, n) => Array.from({ length: 4 }, (_, i) => (n > i ? cellC(x + i * 16, y, 6.5, i + n * 3) : cellN(x + i * 16, y, 6.5, { c1: '#ebfbee', c2: '#8ce99a', st: '#2f9e44', nc: '#2b8a3e' }))).join('');
    return svg(360, 250, `<defs>${shadow(sh)}</defs>
      ${card(184, 8, 170, 200, '#fff5f5', sh)}${card(6, 8, 170, 200, '#e7f5ff', sh)}
      ${t(269, 32, 'grading', { size: 14, fill: '#c92a2a', w: 900 })}${f(269, 50, "grade: the cells under the microscope", { size: 9.3, fill: INK, w: 800 })}
      ${[1, 2, 3, 4].map(g => `${t(214, 76 + (g - 1) * 32, ['I', 'II', 'III', 'IV'][g - 1], { size: 12, fill: '#c92a2a', w: 900 })}${cells(246, 72 + (g - 1) * 32, g)}`).join('')}
      ${f(269, 200, "the higher, the more abnormal the cells", { size: 8.8 })}
      ${t(91, 32, 'staging', { size: 14, fill: '#1864ab', w: 900 })}${f(91, 50, "stage: spread in the body", { size: 9.3, fill: INK, w: 800 })}
      ${[['T', 'tumor', "primary tumour"], ['N', 'nodes', "regional lymph nodes"], ['M', 'metastases', "distant metastasis"]].map(([L, en, fa], i) => `<circle cx="32" cy="${82 + i * 38}" r="13" fill="#1c7ed6"/>${t(32, 87 + i * 38, L, { size: 13, fill: '#fff', w: 900 })}${t(52, 80 + i * 38, en, { size: 10, fill: '#1864ab', w: 800, anchor: 'start' })}${f(52, 94 + i * 38, fa, { size: 9, anchor: 'start' })}`).join('')}
      ${f(91, 200, "result: stage I to IV", { size: 8.8 })}
      ${f(180, 236, "grade = how misshapen? • stage = how far has it spread?", { size: 10, fill: VIO, w: 800 })}`, "Tumour grading and staging");
  };

  /* طب مکمل و جایگزین */
  A['alt-med'] = () => {
    const sh = 's' + (++UID);
    const R = [['acupuncture', "needles at specific points", '📍'], ['biofeedback', "learning to control body responses", '📟'], ['chiropractic', "manipulating the spine", '🦴'], ['massage', "relaxation, circulation", '💆'],
      ['meditation', "calming the mind", '🧘'], ['homeopathy', "highly diluted remedies", '💧'], ['naturopathy', "healthy lifestyle", '🌿'], ['osteopathy', "correcting body structure", '🧍']];
    return svg(360, 318, `<defs>${shadow(sh)}</defs>
      <circle cx="180" cy="150" r="46" fill="${VIO_BG}" filter="url(#${sh})"/>${t(180, 144, 'holistic', { size: 12, fill: VIO, w: 900 })}${f(180, 160, "holistic: body, mind,", { size: 8.6, fill: INK, w: 700 })}${f(180, 173, "spirit and society", { size: 8.6, fill: INK, w: 700 })}
      ${R.map(([en, fa, e], i) => { const a = -Math.PI / 2 + i * Math.PI / 4, x = 180 + 118 * Math.cos(a), y = 150 + 112 * Math.sin(a); return `<text x="${x.toFixed(0)}" y="${(y - 6).toFixed(0)}" font-size="16" text-anchor="middle">${e}</text>${t(x.toFixed(0), (y + 10).toFixed(0), en, { size: 9.5, fill: VIO, w: 900 })}${f(x.toFixed(0), (y + 23).toFixed(0), fa, { size: 8.3 })}`; }).join('')}
      ${f(180, 312, "CAM: complementary and alternative medicine; a focus on health, not only disease", { size: 9, fill: MUTED, w: 700 })}`, "complementary and alternative medicine");
  };

  /* کانولا و تروکار، کاتتر و درن */
  A['tubes-tools'] = () => {
    const sh = 's' + (++UID);
    return svg(360, 236, `<defs>${shadow(sh)}</defs>${f(180, 20, "Tubes in treatment", { size: 11.5, fill: INK, w: 800 })}
      ${card(184, 32, 170, 120, '#f8f9fa', sh)}
      <rect x="200" y="62" width="120" height="14" rx="7" fill="#d0ebff" stroke="#1c7ed6" stroke-width="1.5"/><path d="M196 69 H330 L340 69" stroke="#495057" stroke-width="3"/><path d="M330 64 L344 69 L330 74 Z" fill="#495057"/>
      ${t(269, 98, 'trocar + cannula', { size: 11, fill: VIO, w: 900 })}${f(269, 114, "the sharp trocar punctures, then comes out", { size: 8.6, fill: INK, w: 700 })}${f(269, 128, "and the cannula stays to let fluid or air out", { size: 8.6, fill: INK, w: 700 })}
      ${card(6, 32, 170, 120, '#f8f9fa', sh)}
      <path d="M20 70 C60 50 90 90 130 70 C146 62 156 66 162 70" stroke="#e8590c" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="162" cy="70" r="5" fill="#ffd8a8" stroke="#e8590c"/>
      ${t(91, 98, 'catheter', { size: 11, fill: VIO, w: 900 })}${f(91, 114, "a thin tube for drawing out or", { size: 8.6, fill: INK, w: 700 })}${f(91, 128, "putting in fluid; such as a PICC", { size: 8.6, fill: INK, w: 700 })}
      ${[['drain', "drain: lets discharge out of a wound"], ['irrigation • lavage', "washing a cavity"], ['paracentesis', "drawing fluid from a cavity"]].map(([en, fa], i) => `${card(6 + (2 - i) * 118, 162, 112, 62, '#e6fcf5', sh)}${t(62 + (2 - i) * 118, 186, en, { size: 9.5, fill: VIO, w: 900 })}${f(62 + (2 - i) * 118, 204, fa, { size: 8.4, fill: INK, w: 700 })}`).join('')}`, "Catheter, trocar, cannula and drain");
  };

  /* ---------- دارو و نسخه ---------- */
  /* راه‌های تجویز دارو روی بدن */
  A['routes-body'] = () => {
    const L = [[174, 38, 96, 30, 'inhalation', "breathing in"], [176, 46, 96, 62, 'po • oral', "oral"], [184, 44, 96, 94, 'SL • sublingual', "under the tongue"], [154, 82, 96, 126, 'IM', "into a muscle"], [150, 128, 96, 160, 'IV', "into a vein"], [180, 112, 96, 192, 'intrathecal', "spinal • epidural too"]];
    const R = [[186, 30, 264, 30, 'instillation', "drops (eye, ear)"], [196, 84, 264, 66, 'transdermal', "skin patch"], [206, 120, 264, 102, 'topical', "on the skin"], [190, 112, 264, 138, 'SC', "subcutaneously"], [186, 104, 264, 174, 'ID', "into the skin"], [184, 140, 264, 210, 'rectal', "rectal (suppository)"]];
    return svg(360, 252, `${man(180, 18, 0.96, { arms: 14 })}<rect x="192" y="78" width="12" height="9" rx="2" fill="#fff" stroke="#7048e8" stroke-width="1.4"/>
      ${L.map(([x1, y1, x2, y2, en, fa]) => `${pin(x1, y1, x2, y2, VIO)}${t(x2 - 4, y2 - 2, en, { size: 9.3, fill: VIO, w: 900, anchor: 'end' })}${f(x2 - 4, y2 + 11, fa, { size: 8.6, anchor: 'end' })}`).join('')}
      ${R.map(([x1, y1, x2, y2, en, fa]) => `${pin(x1, y1, x2, y2, '#e8590c')}${t(x2 + 4, y2 - 2, en, { size: 9.3, fill: '#e8590c', w: 900, anchor: 'start' })}${f(x2 + 4, y2 + 11, fa, { size: 8.6, anchor: 'start' })}`).join('')}
      ${f(180, 246, "injection = the parenteral routes", { size: 9.5, fill: INK, w: 800 })}`, "Routes of drug administration");
  };

  /* زاویه سوزن در تزریق */
  A['injection-angles'] = () => {
    const nd = (x, y, ang, c, len) => { const a = ang * Math.PI / 180, x2 = x - Math.cos(a) * len, y2 = y - Math.sin(a) * len; return `<path d="M${x} ${y} L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="#868e96" stroke-width="2"/><path d="M${x2.toFixed(1)} ${y2.toFixed(1)} L${(x2 - Math.cos(a) * 40).toFixed(1)} ${(y2 - Math.sin(a) * 40).toFixed(1)}" stroke="${c}" stroke-width="10" stroke-linecap="round"/>`; };
    return svg(360, 250, `
      <rect x="10" y="120" width="340" height="16" fill="#f8dcc6"/><rect x="10" y="136" width="340" height="40" fill="#ffe8cc"/><rect x="10" y="176" width="340" height="54" fill="#ffc9c9"/>
      ${[186, 196, 206, 216].map(y => `<path d="M10 ${y} H350" stroke="#fa5252" stroke-width=".6" opacity=".5"/>`).join('')}
      ${nd(60, 200, 90, '#1c7ed6', 82)}${nd(150, 162, 45, '#e8590c', 60)}${nd(250, 128, 15, '#f59f00', 40)}
      ${t(70, 30, 'IM • 90°', { size: 11, fill: '#1c7ed6', w: 900, anchor: 'start' })}${f(70, 44, "into the muscle", { size: 9, anchor: 'start' })}
      ${t(132, 60, 'SC • 45°', { size: 11, fill: '#e8590c', w: 900, anchor: 'start' })}${f(132, 74, "under the skin", { size: 9, anchor: 'start' })}
      ${t(250, 82, 'ID • 15°', { size: 11, fill: '#f59f00', w: 900 })}${f(250, 96, "into the skin", { size: 9, anchor: 'middle' })}
      ${f(344, 132, "skin", { size: 8.6, fill: INK, anchor: 'end' })}${f(344, 160, "subcutaneous tissue (fat)", { size: 8.6, fill: INK, anchor: 'end' })}${f(344, 222, "muscle", { size: 8.6, fill: INK, anchor: 'end' })}
      ${f(180, 246, "the deeper, the steeper the angle", { size: 9.5, fill: VIO, w: 800 })}`, "IM, SC and ID injection angles");
  };

  /* زمان مصرف دارو در یک روز */
  A['dose-clock'] = () => {
    const sh = 's' + (++UID);
    const X = h => 40 + (h - 6) * (250 / 18);
    const row = (y, ab, fa, hours, c) => `${t(10, y + 4, ab, { size: 11, fill: c, w: 900, anchor: 'start' })}<path d="M${X(6)} ${y} H${X(24)}" stroke="#dee2e6" stroke-width="3" stroke-linecap="round"/>${hours.map(h => `<circle cx="${X(h).toFixed(1)}" cy="${y}" r="6" fill="${c}"/>`).join('')}${f(350, y + 4, fa, { size: 8.6, anchor: 'end' })}`;
    return svg(360, 270, `<defs>${shadow(sh)}</defs>${f(180, 18, "One day from 6 a.m. to midnight", { size: 11, fill: INK, w: 800 })}
      ${[6, 9, 12, 15, 18, 21, 24].map(h => `${t(X(h).toFixed(1), 38, String(h), { size: 9, fill: MUTED })}`).join('')}<text x="${X(7)}" y="60" font-size="12" text-anchor="middle">🍳</text><text x="${X(13)}" y="60" font-size="12" text-anchor="middle">🍲</text><text x="${X(19)}" y="60" font-size="12" text-anchor="middle">🍽️</text><text x="${X(22.5)}" y="60" font-size="12" text-anchor="middle">🌙</text>
      ${row(84, 'bid', "2 times", [8, 20], '#1c7ed6')}${row(112, 'tid', "3 times", [8, 14, 20], '#2b8a3e')}${row(140, 'qid', "4 times", [8, 12, 16, 20], '#e8590c')}${row(168, 'q4h', "every 4 hours", [6, 10, 14, 18, 22], '#7048e8')}
      ${row(196, 'ac', "before meals", [6.6, 12.6, 18.6], '#c2255c')}${row(224, 'pc', "after meals", [7.6, 13.6, 19.6], '#c2255c')}${row(252, 'hs', "at bedtime", [22.5], '#495057')}`, "Medication timing");
  };

  /* شکل‌های دارو */
  A['drug-forms'] = () => {
    const sh = 's' + (++UID);
    const col = (x, en, fa, c, bg, items) => `${card(x, 32, 112, 250, bg, sh)}${t(x + 56, 52, en, { size: 12, fill: c, w: 900 })}${f(x + 56, 67, fa, { size: 9.5, fill: INK, w: 800 })}${items.map(([s, d, e], i) => `<text x="${x + 98}" y="${94 + i * 26}" font-size="13" text-anchor="middle">${e}</text>${t(x + 86, 90 + i * 26, s, { size: 9.3, fill: c, w: 900, anchor: 'end' })}${f(x + 86, 101 + i * 26, d, { size: 7.8, anchor: 'end' })}`).join('')}`;
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, "Box 3-8: drug preparations", { size: 11, fill: INK, w: 800 })}
      ${col(242, 'liquid', "liquid", '#1c7ed6', '#e7f5ff', [['aerosol', "inhaled spray", '🌫️'], ['solution', "dissolved in water", '💧'], ['elixir', "sweet and alcoholic", '🍯'], ['emulsion', "two liquids mixed", '🥛'], ['lotion', "for the skin", '🧴'], ['suspension', "shake it!", '🔄'], ['tincture', "in alcohol", '🧪']])}
      ${col(124, 'semisolid', "semisolid", '#e8590c', '#fff4e6', [['cream', "skin emulsion", '🧴'], ['ointment', "ointment; ung", '🫙']])}
      ${col(6, 'solid', "solid", '#7048e8', '#f3f0ff', [['capsule', "gelatin shell", '💊'], ['lozenge', "to suck on", '🍬'], ['suppository', "suppository", '🕯️'], ['tablet', "tablet; pill", '⚪']])}`, "Drug forms");
  };

  /* تداخل دارو: هم‌افزایی، آنتاگونیست، تحمل */
  A['drug-interactions'] = () => {
    const sh = 's' + (++UID);
    const bar = (x, y, h, c) => `<rect x="${x}" y="${y - h}" width="22" height="${h}" rx="4" fill="${c}"/>`;
    return svg(360, 250, `<defs>${shadow(sh)}</defs>${f(180, 20, "When two drugs are taken together, or one drug is taken repeatedly", { size: 10.5, fill: INK, w: 800 })}
      ${card(242, 32, 112, 196, '#ebfbee', sh)}${bar(252, 130, 30, '#69db7c')}${t(274, 116, '+', { size: 14 })}${bar(286, 130, 30, '#69db7c')}${t(316, 116, '=', { size: 14 })}${bar(326, 130, 76, '#2b8a3e')}
      ${t(298, 156, 'synergy', { size: 11, fill: '#2b8a3e', w: 900 })}${t(298, 170, 'potentiation', { size: 9, fill: '#2b8a3e', w: 800 })}${f(298, 188, "the combined effect is more than", { size: 8.6, fill: INK, w: 700 })}${f(298, 201, "the sum of the effects", { size: 8.6, fill: INK, w: 700 })}
      ${card(124, 32, 112, 196, '#fff5f5', sh)}${bar(134, 130, 60, '#ff8787')}${t(162, 116, '+', { size: 14 })}<rect x="172" y="70" width="22" height="60" rx="4" fill="none" stroke="#c92a2a" stroke-width="2" stroke-dasharray="3 2"/>${t(204, 116, '=', { size: 14 })}${bar(212, 130, 10, '#c92a2a')}
      ${t(180, 156, 'antagonist', { size: 11, fill: '#c92a2a', w: 900 })}${f(180, 174, "one drug blocks", { size: 8.6, fill: INK, w: 700 })}${f(180, 187, "the effect of the other", { size: 8.6, fill: INK, w: 700 })}
      ${card(6, 32, 112, 196, '#fff4e6', sh)}${[50, 40, 30, 22].map((h, i) => bar(14 + i * 25, 130, h, '#ffa94d')).join('')}${f(62, 70, "same dose, less effect", { size: 8.4, fill: INK })}
      ${t(62, 156, 'tolerance', { size: 11, fill: '#e8590c', w: 900 })}${f(62, 174, "the dose must be raised", { size: 8.6, fill: INK, w: 700 })}${t(62, 196, 'withdrawal', { size: 10, fill: '#c92a2a', w: 900 })}${f(62, 210, "symptoms on sudden stopping", { size: 8.4, fill: INK, w: 700 })}
      ${f(180, 244, "contraindication: a reason not to give a drug • anaphylaxis: severe, dangerous allergy", { size: 8.4, fill: VIO, w: 700 })}`, "Synergism, antagonism, tolerance and withdrawal");
  };

  /* خواندن یک دستور دارویی */
  A['rx-anatomy'] = () => {
    const sh = 's' + (++UID);
    const part = (x, w, s, c) => `<rect x="${x}" y="58" width="${w}" height="34" rx="8" fill="#fff" stroke="${c}" stroke-width="2"/>${t(x + w / 2, 80, s, { size: 12, fill: c, w: 900 })}`;
    const lb = (x, en, fa, c) => `${t(x, 112, en, { size: 9, fill: c, w: 900 })}${f(x, 126, fa, { size: 8.6, fill: INK, w: 700 })}`;
    return svg(360, 220, `<defs>${shadow(sh)}</defs>${card(6, 8, 348, 204, '#fff9db', sh)}
      ${t(22, 40, 'Rx', { size: 22, fill: '#c92a2a', w: 900, anchor: 'start', italic: true })}${f(340, 36, "One line from the prescription in case 3-2", { size: 9.5, fill: MUTED, anchor: 'end' })}
      ${part(14, 128, 'Ativan (lorazepam)', '#7048e8')}${part(146, 46, '1 mg', '#1c7ed6')}${part(196, 36, 'po', '#2b8a3e')}${part(236, 50, 'b.i.d.', '#e8590c')}${part(290, 56, 'prn', '#c2255c')}
      ${lb(78, 'brand (generic)', "brand name (generic)", '#7048e8')}${lb(169, 'dose', "amount", '#1c7ed6')}${lb(214, 'route', "Route", '#2b8a3e')}${lb(261, 'frequency', "how often", '#e8590c')}${lb(318, 'when', "as needed", '#c2255c')}
      ${f(180, 160, "It means: one milligram of Ativan (lorazepam), by mouth,", { size: 10, fill: INK, w: 800 })}${f(180, 178, "twice a day, only when needed", { size: 10, fill: INK, w: 800 })}
      ${f(180, 200, "Brand names start with a capital letter, generic names with a small letter", { size: 8.8, fill: MUTED, w: 700 })}`, "The parts of a medication order");
  };

  /* اجزای واژه‌های دارویی (جدول ۳-۹) */
  A['drug-parts'] = () => {
    const sh = 's' + (++UID);
    const R = [['anti-', "against", 'antiemetic', "drug against vomiting"], ['contra-', "against, opposing", 'contraceptive', "preventing pregnancy"], ['counter-', "against", 'countertransport', "transport in the opposite direction"], ['-lytic', "dissolving", 'thrombolytic', "clot dissolver"],
      ['-mimetic', "mimicking", 'sympathomimetic', "mimicking the sympathetic system"], ['-tropic', "acting on", 'psychotropic', "acting on the mind"], ['hypn/o', "sleep", 'hypnotic', "sleep-inducing drug"], ['narc/o', "stupor, numbness", 'narcotic', "opioid"], ['pharmac/o', "drug", 'pharmacology', "study of drugs"]];
    return svg(360, 316, `<defs>${shadow(sh)}</defs>${f(180, 20, "Word parts for drugs", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([p, fa, ex, exfa], i) => { const x = 6 + (2 - i % 3) * 118, y = 30 + Math.floor(i / 3) * 94; return `${card(x, y, 112, 86, '#f3f0ff', sh)}${t(x + 56, y + 24, p, { size: 13, fill: '#6741d9', w: 900 })}${f(x + 56, y + 40, fa, { size: 9.3, fill: INK, w: 800 })}${t(x + 56, y + 62, ex, { size: ex.length > 13 ? 8.4 : 9.5, fill: MUTED, w: 800 })}${f(x + 56, y + 77, exfa, { size: 8.6 })}`; }).join('')}`, "Word parts of drug terms");
  };
  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* تیمار — دنیای ۱: زبان بیماری (پایه همه دنیاها)
 * پیش از میکروب‌ها، پاسخ بدن، معاینه، جراحی و دارو، «دستور زبان» واژه‌های بیماری را یاد می‌گیریم:
 * ریشه‌های بیماری، پیشوندها، پسوندهای بیماری و واژه‌هایی که خودشان پسوند می‌شوند.
 * منابع: فصل Disease and Treatment (جدول‌های ۳-۱ تا ۳-۴ و تمرین‌های ۳-۱ تا ۳-۴).
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: "The Language of Disease", short: "Language", sub: "Disease roots, prefixes, the suffixes for pain, inflammation and rupture, and words such as stenosis and malacia that become suffixes themselves",
    color: '#4C6EF5', dark: '#3448B8', light: '#E5EBFF',
    levels: ["Disease roots", "Prefixes and suffixes", "Words that become suffixes"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: ریشه‌های بیماری ================= */
      {
        id: 'lx1', title: "Every word is a puzzle", icon: '🧩', items: [
          L("Break the word apart", `Most medical words are built from a few <b>fixed pieces</b>: the <b>root</b> says “where or what?”, the <b>suffix</b> says “what happened?”, and between them there is often a <b>combining vowel</b>, usually o.${fig('wordparts', '', "hepatomegaly: hepat/o (liver) + ‎-megaly (enlargement) = enlargement of the liver.")}${memo("Read the meaning from the end: first the suffix (what happened?), then the root (where?).")}`),
          L("The root for disease: path/o", `${tbl([["Term", "Structure", "Meaning"], [e('pathology'), 'path/o + ‎-logy', "study of disease"], [e('pathologist'), 'path/o + ‎-logist', "specialist in disease"], [e('pathogen'), 'path/o + ‎-gen', "disease-causing agent"], [e('pathogenesis'), 'path/o + ‎-genesis', "development of disease"]])}${pearl("A pathologist looks at tissue samples under the microscope; the definitive diagnosis of many diseases is their job.")}`),
          M(`${e('<b>pathologist</b>')} means…`, ["Specialist in diseases and tissue changes", "disease-causing agent", "study of disease", "development of disease"], "path/o (disease) + -logist (specialist)."),
          P("Match each piece to its meaning", [['path/o', "disease"], ['-logy', "study of"], ['-logist', "specialist"], ['-genesis', "origin"]]),
          T("In medical words we start the meaning from the suffix.", true, "The suffix says what happened and the root says where."),
          L("The combining vowel o", `Between a root and a suffix that starts with a <b>consonant</b>, an o is added: ${wb('path/o', '-logy')} = pathology. But if the suffix starts with a <b>vowel</b>, the o is dropped: path + ‎-ic becomes pathic, not pathoic.${memo("The o is like glue: it is needed only when two consonants meet.")}`),
          B("In pathogen, the letter ___ is the combining vowel.", ['o', 'g', 'p'], 'path + o + gen.'),
          W("Build a word meaning “study of disease”", ['path/o', '-logy'], ['-logist', '-gen', 'onc/o'], 'path/o + -logy = pathology.'),
          M(`${e('<b>pathogenesis</b>')} means…`, ["the origin and development of disease", "disease specialist", "disease-causing agent", "treating disease"], "-genesis = origin, formation."),
          S("Spell the term for a specialist in diseases", 'pathologist', 'path/o + -logist.', 'patho…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx2', title: "Pain, Stone, Tumour", icon: '🪨', items: [
          L("Five basic roots", `Teaching figure has ten disease roots; here are the first five:${tbl([["root", "Meaning", "Example"], [e('alg/o, algesi/o'), "pain", "algesia: sense of pain"], [e('carcin/o'), "cancer", "carcinogen: cancer-causing"], [e('cyst/o'), "sac, cyst, bladder", "cystic: having cysts"], [e('lith/o'), "stone", "lithiasis: stone formation"], [e('onc/o'), "tumour", "oncogenic: tumour-causing"]])}${fig('disease-roots')}`),
          P("Match each root to its meaning", [['alg/o', "pain"], ['lith/o', "stone"], ['onc/o', "tumour"], ['carcin/o', "cancer"]]),
          M(`${e('<b>lithiasis</b>')} means…`, ["stone formation in the body", "stone pain", "kidney cancer", "bladder inflammation"], "lith (stone) + -iasis (condition)."),
          L("Pain and no pain", `${wb('algesi/o', '-ia')} = <b>algesia</b>: the sense of pain. With the prefix an- (without), <b>analgesia</b> means absence of pain, and a drug that takes pain away is an <b>analgesic</b>. The instrument that measures pain sensitivity is the <b>algesimeter</b>.${pearl("A nurse writes in the chart “PCA for analgesia”: a painkiller pump whose button the patient presses.")}`),
          M(`${e('<b>analgesia</b>')} means…`, ["absence of pain", "severe pain", "nerve pain", "sensing cold"], "an- (without) + algesi/o (pain) + -ia."),
          L("Stone, tumour and cancer", `${tbl([["Term", "Meaning"], [e('urolith'), "a stone in the urinary tract (ur/o)"], [e('oncogene'), "a gene that produces tumours"], [e('carcinogen'), "a substance that causes cancer"], [e('carcinoid'), "resembling carcinoma (‎-oid: like)"], [e('cystic'), "having cysts"]])}${memo("carcin/o comes from the Greek word for “crab”; cancer reaches out with its claws.")}`),
          M(`${e('<b>carcinogen</b>')} means…`, ["a substance that causes cancer", "like cancer", "cancer specialist", "destruction of cancer"], "carcin/o + -gen (producing)."),
          T("A urolith is a stone formed in the urinary tract.", true, "ur/o (urine) + lith (stone)."),
          B("An agent that causes tumours is ___.", ['oncogenic', 'oncolysis', 'analgesic'], 'onc/o + gen + -ic.'),
          W("Build a word meaning “cancer-causing substance”", ['carcin/o', '-gen'], ['-oid', 'onc/o', '-logy'], 'carcin/o + -gen = carcinogen.'),
          S("Spell the term for absence of pain", 'analgesia', 'an- + algesi/o + -ia.', 'anal…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx3', title: "Pus, Fever, Poison, Hardness", icon: '🔥', items: [
          L("Two roots that get mixed up", `${vs(['py/o', "pus: pyocyst (pus-filled cyst), pyoderma (pus-forming skin infection), pyogenesis (pus formation)"], ['pyr/o, pyret/o', "fever, fire: pyrexia (fever), pyrogenic (fever-causing), hyperpyrexia (very high fever)"])}${memo("pyr/o has the extra r; think of the r in a red-hot radiator!")}`),
          M(`${e('<b>pyrexia</b>')} means…`, ["fever", "pus", "poison", "stone"], "pyr/o, pyret/o = fever."),
          M(`${e('<b>pyoderma</b>')} means…`, ["pus-forming skin infection", "skin fever", "dry skin", "skin cancer"], "py/o (pus) + derm/o (skin)."),
          T("pyrogenic means pus-producing.", false, "False; pyrogenic means fever-causing. Pus-producing is pyogenic."),
          L("Poison and hardness", `${tbl([["root", "Meaning", "Examples"], [e('tox/o, toxic/o'), "poison", "toxicology (study of poisons), toxoid (an inactivated toxin, for vaccines)"], [e('scler/o'), "hard", "sclerosis (hardening of tissue), sclerotic (hardened), arteriosclerosis (hardening of the arteries)"]])}${vs(['endotoxin', "endo- (inside): a toxin inside the bacterial cell"], ['exotoxin', "exo- (outside): a toxin that the bacterium releases"])}`),
          P("Match each term to its meaning", [['toxicology', "study of poisons"], ['endotoxin', "toxin inside a bacterium"], ['exotoxin', "toxin released by a bacterium"], ['arteriosclerosis', "hardening of the arteries"]]),
          M(`${e('<b>sclerotic</b>')} means…`, ["hardened", "softened", "torn", "containing pus"], "scler/o (hard) + -tic."),
          B("The study of poisons is ___.", ['toxicology', 'pathology', 'oncology'], 'toxic/o + -logy.'),
          L("Review of the “Disease Roots” level", recap(["path/o disease • ‎-logy study • ‎-logist specialist • ‎-gen and ‎-genesis producing and origin", "alg/o pain (analgesia no pain) • lith/o stone • onc/o tumour • carcin/o cancer • cyst/o sac and bladder", "py/o is pus but pyr/o is fever: pyoderma versus pyrexia", "tox/o poison: endotoxin, exotoxin • scler/o hard: arteriosclerosis"])),
          W("Build a word meaning “fever-causing”", ['pyr/o', '-genic'], ['py/o', '-logy', 'tox/o'], 'pyr/o + -genic = pyrogenic.'),
          S("Spell the medical term for fever", 'pyrexia', 'pyr/o + -exia.', 'pyr…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۲: پیشوندها و پسوندها ================= */
      {
        id: 'lx4', title: "Six disease prefixes", icon: '⚡', items: [
          L("Slow and fast", `${vs(['brady-', "slow: bradypnea means slow breathing (‎-pnea: breathing)"], ['tachy-', "fast: tachycardia means a fast heartbeat"])}${fig('disease-prefixes')}${memo("tachy sounds like “taxi”, which goes fast; brady is a lazy lady who strolls slowly.")}`),
          M(`${e('<b>tachycardia</b>')} means…`, ["fast heartbeat", "slow heartbeat", "enlarged heart", "heart pain"], "tachy- (fast) + cardi/o (heart) + -ia."),
          T("bradypnea means slow breathing.", true, "brady- (slow) + -pnea (breathing)."),
          L("Bad, thick and dry", `${tbl([["prefix", "Meaning", "Example"], [e('dys-'), "abnormal, painful, difficult", "dysplasia (abnormal tissue growth), dysphagia (difficulty swallowing), dystrophy"], [e('mal-'), "bad, poor", "malabsorption (poor absorption), malnutrition (poor nutrition)"], [e('pachy-'), "thick", "pachydactyly (thick fingers; dactyl/o: finger), pachycephaly"], [e('xero-'), "dry", "xeroderma (dry skin), xerosis"]])}`),
          P("Match each prefix to its meaning", [['dys-', "abnormal, difficult"], ['mal-', "bad, poor"], ['pachy-', "thick"], ['xero-', "dry"]]),
          M(`${e('<b>dysphagia</b>')} means…`, ["difficulty swallowing", "dry mouth", "fast swallowing", "poor absorption"], "dys- (difficult) + phag/o (eating, swallowing)."),
          M(`${e('<b>xeroderma</b>')} means…`, ["dry skin", "thick skin", "pus-forming skin infection", "skin inflammation"], "xero- (dry) + derm/o (skin)."),
          B("Poor absorption of nutrients from the intestine is called ___.", ['malabsorption', 'dysplasia', 'xerosis'], "mal- (bad) + absorption."),
          W("Build a word meaning “thick fingers”", ['pachy-', 'dactyl/o', '-y'], ['xero-', 'derm/o', 'brady-'], 'pachy- + dactyl/o + -y = pachydactyly.'),
          S("Spell the term for a fast heart rate", 'tachycardia', 'tachy- + cardi/o + -ia.', 'tachy…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx5', title: "Pain, Inflammation, Enlargement", icon: '🎈', items: [
          L("Two suffixes for pain", `${wb('neur/o', '-algia')} = <b>neuralgia</b> (nerve pain) and ${wb('ur/o', '-odynia')} = <b>urodynia</b> (pain on urination). Both suffixes mean <b>pain</b>.${tbl([["Term", "Meaning"], [e('cephalgia'), "headache (cephal/o: head)"], [e('myalgia'), "muscle pain (my/o)"], [e('gastrodynia'), "stomach pain (gastr/o)"]])}`),
          P("Match each term to its meaning", [['neuralgia', "nerve pain"], ['cephalgia', "headache"], ['myalgia', "muscle pain"], ['gastrodynia', "stomach pain"]]),
          L("Inflammation, enlargement and disease", `${tbl([["suffix", "Meaning", "Example"], [e('-itis'), "inflammation", "cystitis: inflammation of the bladder"], [e('-megaly'), "enlargement", "hepatomegaly: enlarged liver • cardiomegaly: enlarged heart"], [e('-pathy'), "disease (any kind)", "nephropathy: kidney disease • myopathy: muscle disease"], [e('-oma'), "tumour", "lipoma: fatty tumour • neuroma • blastoma"]])}${fig('disease-suffixes')}`),
          M(`${e('<b>cardiomegaly</b>')} means…`, ["enlarged heart", "inflammation of the heart", "heart disease", "heart pain"], 'cardi/o + -megaly.'),
          M(`${e('<b>nephropathy</b>')} means…`, ["any kidney disease", "enlarged kidney", "kidney stone", "kidney pain"], "nephr/o (kidney) + -pathy (disease)."),
          T("cystitis means inflammation of the bladder.", true, "cyst/o (bladder) + -itis (inflammation)."),
          M(`${e('<b>blastoma</b>')} means…`, ["tumour of immature cells", "fatty tumour", "nerve tumour", "inflammation of a cell"], "blast/o (immature cell) + -oma."),
          B("An enlarged liver on examination is called ___.", ['hepatomegaly', 'hepatitis', 'hepatorrhexis'], 'hepat/o + -megaly.'),
          W("Build a word meaning “muscle disease”", ['my/o', '-pathy'], ['-algia', 'neur/o', '-megaly'], 'my/o + -pathy = myopathy.'),
          S("Spell the term for nerve pain", 'neuralgia', 'neur/o + -algia.', 'neur…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx6', title: "Bursting, Rupture, Split", icon: '💥', items: [
          L("Three suffixes with rr", `${tbl([["suffix", "Meaning", "Example"], [e('-rrhage, -rrhagia'), "bursting forth, heavy bleeding", "hemorrhage • menorrhagia (heavy menstrual bleeding)"], [e('-rrhea'), "flow, discharge", "pyorrhea: discharge of pus"], [e('-rrhexis'), "rupture", "hepatorrhexis: rupture of the liver • amniorrhexis: rupture of the amniotic sac"]])}${fig('rr-rule')}${memo("Three r’s for three flowing things: rrhage bursts, rrhea flows, rrhexis ruptures and spills the fluid out.")}`),
          M(`${e('<b>hemorrhage</b>')} means…`, ["heavy bleeding", "rupture of a vessel", "flow of pus", "stopping of blood"], 'hem/o + -rrhage.'),
          M(`${e('<b>hepatorrhexis</b>')} means…`, ["rupture of the liver", "bleeding from the liver", "enlarged liver", "liver inflammation"], "hepat/o + -rrhexis (rupture)."),
          T("When ‎-rhage attaches to a root such as hem/o, the r is doubled: hemorrhage.", true, "The standard reference’s double-rr rule."),
          L("Bulging, breaking and splitting", `${tbl([["suffix", "Meaning", "Example"], [e('-cele'), "hernia, local bulge", "gastrocele (hernia of the stomach) • hydrocele (fluid sac) • adipocele"], [e('-clasis, -clasia'), "breaking", "osteoclasis (breaking of a bone) • karyoclasis (breaking of the nucleus)"], [e('-schisis'), "split, cleft", "retinoschisis (splitting of the retina) • thoracoschisis"]])}`),
          P("Match each suffix to its meaning", [['-cele', "hernia, swelling"], ['-clasis', "breaking"], ['-schisis', "split"], ['-rrhea', "flow, discharge"]]),
          M(`${e('<b>osteoclasis</b>')} means…`, ["Breaking of a bone", "softening of bone", "death of bone", "bone pain"], 'oste/o + -clasis.'),
          B("Heavy menstrual bleeding is called ___.", ['menorrhagia', 'menostasis', 'amniorrhexis'], 'men/o + -rrhagia.'),
          L("Review of the “Prefixes and Suffixes” level", recap(["brady- slow and tachy- fast • dys- abnormal • mal- bad • pachy- thick • xero- dry", "‎-algia and ‎-odynia pain • ‎-itis inflammation • ‎-megaly enlargement • ‎-pathy disease • ‎-oma tumour", "‎-rrhage bursting and bleeding • ‎-rrhea flow • ‎-rrhexis rupture; after a root the r is doubled", "‎-cele hernia and bulge • ‎-clasis breaking • ‎-schisis split"])),
          W("Build a word meaning “rupture of a muscle”", ['my/o', '-rrhexis'], ['-rrhea', '-clasis', 'oste/o'], 'my/o + -rrhexis = myorrhexis.'),
          S("Spell the term for heavy bleeding", 'hemorrhage', "hem/o + -rrhage; double r.", 'hemo…'),
          N('wb:lx')
        ]
      },
      /* ================= سطح ۳: واژه‌هایی که پسوند می‌شوند ================= */
      {
        id: 'lx7', title: "Narrowing and Widening", icon: '🫁', items: [
          L("Words that become suffixes", `Some words are used both on their own and after a root (Table 3-4). The first of them are the states of a <b>tube</b>: a vessel, a bronchus, the intestine.${fig('tube-changes')}`),
          L("narrow, wide, spasm", `${tbl([["Term", "Meaning", "Example"], [e('stenosis'), "narrowing", "bronchostenosis: narrowing of a bronchus"], [e('dilation, dilatation'), "widening, opening", "vasodilation: widening of a vessel"], [e('ectasia, ectasis'), "widening, stretching", "gastrectasia: widening of the stomach"], [e('spasm'), "sudden contraction, spasm", 'arteriospasm • bronchospasm']])}${vs(['stenosis', "the tube narrows"], ['ectasia • dilation', "the tube widens"])}`),
          M(`${e('<b>bronchostenosis</b>')} means…`, ["narrowing of an airway", "widening of a bronchus", "spasm of a bronchus", "inflammation of a bronchus"], "bronch/o + stenosis (narrowing)."),
          M(`${e('<b>vasodilation</b>')} means…`, ["widening of a blood vessel", "narrowing of a vessel", "spasm of a vessel", "hardening of a vessel"], "vas/o (vessel) + dilation (widening)."),
          P("Match each term to its meaning", [['stenosis', "narrowing"], ['ectasia', "widening"], ['spasm', "sudden contraction"], ['vasodilation', "widening of a blood vessel"]]),
          L("Hardening and stoppage", `${wb('phleb/o', '-sclerosis')} = <b>phlebosclerosis</b>: hardening of the veins. ${e('stasis')} means <b>stoppage</b>: ${e('hemostasis')} is the stopping of bleeding and ${e('menostasis')} the stopping of menstrual flow.${pearl("In the operating room, “good hemostasis” means the bleeding at the surgical site has completely stopped.")}`),
          T("hemostasis means heavy bleeding.", false, "False; hemostasis means the stopping of bleeding. Heavy bleeding is hemorrhage."),
          M(`${e('<b>bronchospasm</b>')} in an asthmatic patient means…`, ["sudden tightening of the bronchi", "permanent narrowing of a bronchus", "widening of a bronchus", "bleeding from a bronchus"], 'bronch/o + spasm.'),
          B("Widening of the stomach is called ___.", ['gastrectasia', 'gastrocele', 'gastrodynia'], 'gastr/o + ectasia.'),
          W("Build a word meaning “narrowing of a bronchus”", ['bronch/o', '-stenosis'], ['-spasm', '-ectasia', 'vas/o'], 'bronch/o + -stenosis = bronchostenosis.'),
          S("Spell the word for narrowing", 'stenosis', "sten (narrow) + -osis.", 'sten…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx8', title: "Softening, Death, Drooping", icon: '🍂', items: [
          L("Six states of tissue", `${fig('tissue-states')}${tbl([["Term", "Meaning", "Example"], [e('malacia'), "softening", 'osteomalacia • craniomalacia'], [e('necrosis'), "tissue death", 'osteonecrosis • cardionecrosis'], [e('ptosis'), "drooping", 'blepharoptosis • splenoptosis']])}`),
          M(`${e('<b>osteomalacia</b>')} means…`, ["softening of bone", "Death of bone tissue", "Breaking of a bone", "bone tumour"], "oste/o + malacia (softening)."),
          M(`${e('<b>cardionecrosis</b>')} means…`, ["death of heart tissue", "softening of the heart", "enlarged heart", "rupture of the heart"], 'cardi/o + necrosis.'),
          L("drooping eyelid", `${wb('blephar/o', '-ptosis')} = <b>blepharoptosis</b>: drooping eyelid. In ptosis the p is written but not pronounced: “TOE-sis”.${fig('ptosis-eyes', "Normal eyelid (left) and drooping eyelid (right)")}`),
          M("In the picture, the right eyelid has dropped lower than normal. Its name is…", ['blepharoptosis', 'blepharospasm', 'blepharitis', 'cephaledema'], "blephar/o (eyelid) + ptosis (drooping).", null, F('ptosis-eyes', "Normal and drooping eyelid")),
          L("Destruction, swelling and poison", `${tbl([["Term", "Meaning", "Example"], [e('lysis'), "separating, dissolving, destruction", "hemolysis (destruction of red blood cells) • dialysis (separating substances through a membrane)"], [e('edema'), "swelling, fluid build-up", "cephaledema: swelling of the head"], [e('toxin'), "poison", "nephrotoxin: kidney poison • splenotoxin"]])}${memo("lysis is like sugar in tea: it dissolves and falls apart.")}`),
          P("Match each term to its meaning", [['hemolysis', "destruction of red blood cells"], ['nephrotoxin', "kidney poison"], ['cephaledema', "swelling of the head"], ['splenoptosis', "drooping of the spleen"]]),
          T("dialysis means separating substances by passing them through a membrane.", true, "dia- (through) + lysis."),
          B("Softening of the skull is called ___.", ['craniomalacia', 'craniotomy', 'cephalgia'], 'crani/o + malacia.'),
          W("Build a word meaning “death of bone tissue”", ['oste/o', '-necrosis'], ['-malacia', '-ptosis', 'cardi/o'], 'oste/o + -necrosis = osteonecrosis.'),
          S("Spell the term for a drooping eyelid", 'blepharoptosis', 'blephar/o + ptosis.', 'blepharo…'),
          N('d2t:lx')
        ]
      },
      {
        id: 'lx9', title: "Skilled Word Builder", icon: '🏗️', items: [
          L("One root, ten words", `Now, with one root and the suffixes you’ve learned, build dozens of words. With ${e('oste/o')} (bone):${tbl([["Term", "Meaning"], [e('ostealgia'), "bone pain"], [e('osteonecrosis'), "Death of bone tissue"], [e('osteoma'), "bone tumour"], [e('osteoclasis'), "Breaking of a bone"], [e('osteomalacia'), "softening of bone"]])}${pearl("That is exactly the chapter’s exercise: take a root and line the suffixes up after it; read the meaning from the end.")}`),
          P("Match each term to its meaning", [['ostealgia', "bone pain"], ['osteoma', "bone tumour"], ['osteoclasis', "Breaking of a bone"], ['osteomalacia', "softening of bone"]]),
          L("Another root: bronch/o", `${tbl([["Term", "Meaning"], [e('bronchorrhea'), "heavy discharge from a bronchus"], [e('bronchitis'), "inflammation of a bronchus"], [e('bronchostenosis'), "narrowing of an airway"], [e('bronchospasm'), "sudden tightening of a bronchus"]])}And with ${e('-genesis')} (origin): carcinogenesis (origin of cancer), pathogenesis (development of disease) and pyogenesis (pus formation).`),
          M(`${e('<b>bronchorrhea</b>')} means…`, ["heavy discharge from a bronchus", "bleeding from a bronchus", "rupture of a bronchus", "narrowing of an airway"], "bronch/o + -rrhea (flow, discharge)."),
          B("The formation of pus is called ___.", ['pyogenesis', 'pyrexia', 'pyorrhea'], 'py/o + -genesis.'),
          M(`${e('<b>carcinogenesis</b>')} means…`, ["origin of cancer", "cancer-causing substance", "like cancer", "destruction of cancer"], 'carcin/o + -genesis.'),
          O("Put the word hepatomegaly together from start to end", ['hepat', 'o', 'megaly'], "Root + combining vowel + suffix."),
          T("myodynia and myalgia both mean muscle pain.", true, "-odynia and -algia both mean pain."),
          L("Review of the “Words That Become Suffixes” level", recap(["stenosis narrowing • ectasia and dilation widening • spasm sudden contraction • stasis stoppage", "sclerosis hardening • malacia softening • necrosis tissue death • ptosis drooping", "lysis dissolving and destruction • edema swelling • toxin poison", "One root + different suffixes = dozens of words: osteo-, broncho-, hepato-"])),
          W("Build a word meaning “development of disease”", ['path/o', '-genesis'], ['-gen', 'py/o', '-logy'], 'path/o + -genesis = pathogenesis.'),
          S("Spell the term for the origin of cancer", 'carcinogenesis', 'carcin/o + -genesis.', 'carcino…'),
          N('wb:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* تیمار — دنیای ۲: میکروب‌ها و انواع بیماری
 * انواع بیماری، علت و سیر بیماری، نام‌گذاری بیماری‌ها، شکل و رنگ باکتری‌ها، ویروس و قارچ و انگل‌ها،
 * راه‌های ورود میکروب، شیوع (endemic تا pandemic) و عفونت بیمارستانی.
 * منابع: فصل Disease and Treatment (انواع بیماری، جعبه‌های ۳-۱ تا ۳-۳، جدول ۳-۵، شکل ۳-۱ و واژه‌های غنی‌سازی).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'mc', sym: 'Mic', name: "Microbes and Types of Disease", short: "Microbes", sub: "The seven groups of disease, acute and chronic, round, rod and spiral bacteria, viruses, fungi and parasites, portals of entry, epidemics and hospital infections",
    color: '#40C057', dark: '#2B8A3E', light: '#EBFBEE',
    levels: ["Types and course of disease", "Microbes", "Spread of infection"],
    gens: EA.genIds('mc'),
    lessons: [
      /* ================= سطح ۱: انواع و سیر بیماری ================= */
      {
        id: 'mc1', title: "What Is Disease?", icon: '🗂️', items: [
          L("Seven groups of disease", `<b>disease</b> means any disturbance in the normal working of the body. The standard reference puts diseases into seven (sometimes overlapping) groups:${fig('disease-types')}`),
          P("Match each group to its example", [['infectious', "microbes and parasites"], ['degenerative', "wear and ageing, such as arthritis"], ['hormonal', "such as diabetes mellitus"], ['metabolic', "enzyme deficiency, malnutrition"]]),
          M(`${e('<b>infectious disease</b>')} means a disease…`, ["infectious; caused by microbes or parasites", "degenerative, from wear", "hormonal", "present at birth"], "It is caused by microorganisms and parasites."),
          L("Degenerative and structural", `A <b>degenerative</b> disease comes from wear, ageing or <b>trauma</b> (a blow, an injury); examples are arthritis, cardiovascular problems and emphysema. Structural defects such as a <b>congenital</b> malformation, prolapse and hernia can also lead to degenerative changes.${pearl("trauma is not only a physical blow; a psychological wound is also called trauma.")}`),
          M(`${e('<b>trauma</b>')} means…`, ["a physical or psychological blow or injury", "infection", "tumour", "enzyme deficiency"], 'trauma = wound or injury.'),
          T("congenital means a disease present from birth.", true, "congenital = present at birth."),
          L("Immunity, hormones and the mind", `${tbl([["Group", "Description"], [e('immune disorder'), "immune failure, allergy, autoimmune disease (the body makes antibodies against its own tissue)"], [e('hormonal disorder'), "too little, too much or ineffective hormone; such as diabetes mellitus"], [e('mental disorder'), "a disorder of the mind and of the person’s adaptation to the environment"], [e('neoplasia'), "abnormal and uncontrolled growth of tissue"]])}`),
          M(`In ${e('<b>autoimmune disease</b>')}…`, ["the body makes antibodies against its own tissue", "a microbe enters the body", "too little hormone is made", "tissue wears out"], "auto- = self."),
          B("diabetes mellitus is an example of a ___ disorder.", ['hormonal', 'infectious', 'congenital'], "A lack or ineffectiveness of the hormone insulin."),
          S("Spell the word for disease", 'disease', "dis- + ease (comfort).", 'dis…'),
          N('t2f:mc')
        ]
      },
      {
        id: 'mc2', title: "Cause and Course of Disease", icon: '⏳', items: [
          L("Acute or chronic?", `${fig('acute-chronic')}${vs(['acute', "sudden, severe, short"], ['chronic', "long, slowly progressing (chron/o: time)"])}<b>subacute</b> lies between the two. In a chronic disease, a period of getting worse is called an <b>exacerbation</b> and a period of getting better a <b>remission</b>.`),
          M(`An ${e('<b>acute</b>')} disease…`, ["is sudden, severe and short", "is long and slow", "has an unknown cause", "is caused by treatment"], 'acute = sudden, severe, short course.'),
          T("chronic comes from the root chron/o, meaning “time”.", true, "A chronic disease lasts a long time."),
          P("Match each term to its meaning", [['exacerbation', "worsening of a disease"], ['remission', "easing of symptoms"], ['subacute', "between acute and chronic"], ['chronic', "long and slow"]]),
          L("The cause of disease", `<b>etiology</b> means the cause of a disease, although many diseases have several causes together.${tbl([["Term", "Meaning"], [e('idiopathic'), "unknown cause (idi/o: self, own)"], [e('iatrogenic'), "caused by treatment (iatr/o: physician)"]])}${memo("idiopathic: “it came by itself”; iatrogenic: “the doctor brought it”.")}`),
          M(`${e('<b>etiology</b>')} means…`, ["The cause of disease", "predicting the outcome of a disease", "the name of a disease", "treating disease"], 'etiology = the cause of a disease.'),
          M("A complication caused by the treatment itself (for example, a drug)…", ['iatrogenic', 'idiopathic', 'congenital', 'chronic'], "iatr/o (physician, treatment) + -genic (produced)."),
          M("A disease whose cause has not been found…", ['idiopathic', 'iatrogenic', 'acute', 'systemic'], 'idi/o + path/o + -ic.'),
          B("A period when the symptoms of a chronic disease lessen is called ___.", ['remission', 'exacerbation', 'etiology'], 'remission = lessening of symptoms.'),
          S("Spell the term for the cause of disease", 'etiology', "eti/o (cause) + -logy.", 'etio…'),
          N('d2t:mc')
        ]
      },
      {
        id: 'mc3', title: "Where does a disease’s name come from?", icon: '🏷️', items: [
          L("Place, person or sign", `Box 3-1 of the standard reference says diseases get their names in different ways:${tbl([["Named after", "Example"], ["place of discovery", "Lyme disease (the town of Lyme), Ebola, West Nile"], ["discoverer’s name", "Hodgkin disease, Crohn disease, Cooley anemia"], ["a sign of the disease", "tuberculosis: small lesions called tubercles • sickle cell anemia: sickle-shaped red cells"], ["colour", "yellow fever, scarlet fever, rubella"]])}${pearl("The World Health Organization (WHO) now advises against naming diseases after people, places and animals; such names are sometimes offensive or misleading.")}`),
          M("What is tuberculosis named after?", ["Small lesions called tubercles in the lung", "The name of its discoverer", "The town where it was discovered", "The colour of the patient’s skin"], "Named after a sign of the disease."),
          T("Hodgkin disease is named after the person who described it.", true, "Like Crohn disease."),
          L("Picture names", `In <b>lupus erythematosus</b> (lupus, Latin: wolf) the red facial rash gives a wolf-like look. In skin <b>anthrax</b> the lesions turn black (related to anthracite, coal). <b>Bubonic plague</b> produces large, painful lymph nodes called buboes.${memo("A disease name is often a “picture” of its sign: wolf, coal, sickle.")}`),
          M("In Latin, lupus means…", ["Wolf", "Coal", "Sickle", "yellow"], "Because of the wolf-like red rash on the face."),
          P("Match each disease to the origin of its name", [['Lyme disease', "the town where it was found"], ['sickle cell anemia', "sickle-shaped red blood cells"], ['scarlet fever', "colour"], ['Crohn disease', "descriptive name"]]),
          L("emergency medical technician", `Box 3-2 of the standard reference: the <b>emergency medical technician</b> (EMT) is the first health worker to reach the scene of an accident or heart attack. The EMT takes a history, examines the patient, <b>stabilizes</b> them and brings them to a treatment centre, immobilizes injuries with a backboard and treats cardiac arrest with an AED.`),
          M(`Who is a ${e('<b>EMT</b>')}?`, ["emergency medical technician", "Infectious disease specialist", "Operating room nurse", "pharmacist"], 'emergency medical technician.'),
          L("Review of the “Types and Course of Disease” level", recap(["Seven groups: infectious, degenerative, neoplasia, immune, metabolic, hormonal, mental", "acute sudden and short • chronic long • exacerbation flare-up • remission easing", "etiology cause • idiopathic unknown cause • iatrogenic caused by treatment • congenital present at birth • trauma injury", "A disease name comes from a place, a discoverer, a sign or a colour; WHO advises against names of people and places"])),
          B("A disease present from birth is called ___.", ['congenital', 'chronic', 'iatrogenic'], 'congenital = present at birth.'),
          S("Spell the term for sudden and severe", 'acute', "a-cute: “a-KYUTE”.", 'ac…'),
          N('t2f:mc')
        ]
      },
      /* ================= سطح ۲: میکروب‌ها ================= */
      {
        id: 'mc4', title: "Bacteria by Shape", icon: '🦠', items: [
          L("Microorganism and pathogen", `A <b>microorganism</b> is a living thing that cannot be seen without a microscope. Any disease-causing agent is called a <b>pathogen</b>, and an organism that lives on or in another organism (the host) and harms it is a <b>parasite</b>.${tbl([["Term", "Meaning"], [e('microorganism'), "microscopic organism"], [e('pathogen'), "disease-causing agent"], [e('pathogenic'), "disease-causing"], [e('parasite'), "parasite"]])}`),
          M(`${e('<b>parasite</b>')} means…`, ["An organism that lives at the host’s expense and harms it", "Any harmless microbe", "A type of antibiotic", "A bacterial toxin"], 'parasite: grows on or in a host, causing damage.'),
          L("The three main shapes of bacteria", `<b>bacteria</b>, singular bacterium, are named by their shape:${fig('bacteria-shapes')}${tbl([["shape, form", "Name", "Example disease"], ["round", e('cocci') + "; singular: " + e('coccus'), "pneumonia, septicemia"], ["rod-shaped", e('bacilli') + "; singular: " + e('bacillus'), "tuberculosis, tetanus"], ["curved rod", e('vibrios'), 'cholera'], ["spiral", e('spirochetes'), "syphilis, Lyme disease"]])}`),
          M("What is a rod-shaped bacterium called?", ['bacillus', 'coccus', 'vibrio', 'spirochete'], "Plural: bacilli.", null, F('bact-bacilli', "Bacilli under the microscope")),
          M("These bacteria are short, curved rods. Their name is…", ['vibrios', 'bacilli', 'cocci', 'spirochetes'], "Vibrio causes cholera.", null, F('bact-vibrio', "Under the microscope")),
          M("Corkscrew-shaped bacteria next to red blood cells…", ['spirochetes', 'vibrios', 'streptococci', 'bacilli'], "A spirochete moves with a twisting motion.", null, F('bact-spiro', "Among red blood cells")),
          P("Match each shape to its name", [["round", 'cocci'], ["rod-shaped", 'bacilli'], ["curved rod", 'vibrios'], ["spiral", 'spirochetes']]),
          T("The singular of bacilli is bacillus and the singular of cocci is coccus.", true, '-us → -i.'),
          B("Any disease-causing agent is a ___.", ['pathogen', 'parasite', 'toxin'], 'path/o + -gen.'),
          S("Spell the term for a microscopic organism", 'microorganism', "micro- (small) + organism.", 'micro…'),
          N('f2t:mc')
        ]
      },
      {
        id: 'mc5', title: "Cluster or Chain?", icon: '🍇', items: [
          L("Two prefixes for arrangement", `Round bacteria may form special shapes together (Table 3-5):${vs(['staphylo-', "grape-like cluster: staphylococcus, cocci in clusters"], ['strepto-', "chain: streptococcus; and streptobacillus, rods in a chain"])}${memo("staph sounds like “stack”: piled into a cluster; strep sounds like “strap”: lined up in a chain.")}`),
          M("This picture shows cocci that have formed chains. Their name is…", ['streptococci', 'staphylococci', 'bacilli', 'vibrios'], "strepto- = chain.", null, F('bact-strepto', "Cocci in chains")),
          M("Cocci grouped together like a bunch of grapes…", ['staphylococci', 'streptococci', 'spirochetes', 'streptobacilli'], "staphylo- = grape-like cluster.", null, F('bact-staph', "Cocci in clusters")),
          T("A streptobacillus is a rod-shaped bacterium that forms chains.", true, "strepto- (chain) + bacillus (rod)."),
          L("stain that sorts bacteria into two groups", `The <b>Gram stain</b> is a laboratory test that sorts bacteria into two groups: <b>gram positive</b> (Gm+), which stay purple, and <b>gram negative</b> (Gm−), which turn red. The <b>acid-fast stain</b> (AF) is used mostly to find the tuberculosis germ (TB).${fig('gram-stain')}`),
          M(`What colour does a ${e('<b>Gm−</b>')} bacterium turn in the Gram stain?`, ["Red (pink)", "Purple", "green", "colourless"], 'gram negative = red.'),
          P("Match each abbreviation to its meaning", [['Gm+', "gram-positive"], ['Gm−', "gram-negative"], ['AF', "acid-fast"], ['Staph', "grape-cluster bacterium"]]),
          B("To find the tuberculosis germ, the ___ stain is used most.", ['acid-fast', 'Gram', 'gram negative'], 'acid-fast stain = AF.'),
          W("Build a word meaning “cocci in chains”", ['strepto-', 'cocc/o', '-us'], ['staphylo-', 'bacill/i', 'vir/o'], 'strepto- + cocc/o + -us = streptococcus.'),
          S("Spell the term for a grape-cluster bacterium", 'staphylococcus', 'staphylo- + coccus.', 'staphylo…'),
          N('ab:mc')
        ]
      },
      {
        id: 'mc6', title: "Viruses, Fungi, Protozoa, Worms", icon: '🧫', items: [
          L("The family of infectious agents", `Infections are caused by viruses, bacteria, fungi, protozoa and worms (Box 3-3):${fig('microbe-family')}`),
          L("Viruses and tiny bacteria", `A <b>virus</b> is an extremely small infectious agent that lives and multiplies <b>only inside a living cell</b>; examples are the agents of the common cold, hepatitis, influenza and AIDS. <b>Chlamydia</b> and <b>rickettsia</b> are very small bacteria that also grow inside cells, but unlike viruses they are sensitive to antibiotics.${vs(['virus', "only inside cells; antibiotics do not work"], ['chlamydia • rickettsia', "inside cells; antibiotics work"])}`),
          M(`What is a feature of a ${e('<b>virus</b>')}?`, ["It multiplies only inside a living cell", "It is rod-shaped", "It turns purple in the Gram stain", "It is a parasitic worm"], 'submicroscopic, lives only within living cells.'),
          T("Unlike viruses, chlamydia is sensitive to antibiotics.", true, "It is a very small intracellular bacterium."),
          L("Fungi, protozoa and worms", `${tbl([["Cause", "Description", "Example disease"], [e('fungus') + "; plural: " + e('fungi'), "simple plant without chlorophyll; yeasts and moulds (myc/o)", "candidiasis, tinea"], [e('protozoon') + "; plural: " + e('protozoa'), "single-celled animal", "malaria, dysentery"], [e('helminth'), "cream", "roundworm, pinworm, hookworm"]])}${tbl([["Term", "Meaning"], [e('mycosis'), "any fungal disease"], [e('mycotic'), "fungal"], [e('viremia'), "virus in the blood (‎-emia)"], [e('bacilluria'), "bacilli in the urine (‎-uria)"]])}`),
          P("Match each agent to its description", [['fungus', "yeast and mould"], ['protozoon', "single-celled animal"], ['helminth', "cream"], ['virus', "only inside a living cell"]]),
          M(`${e('<b>mycosis</b>')} means…`, ["any fungal disease", "viral infection", "intestinal worm", "protozoan infection"], "myc/o (fungus) + -osis."),
          L("The study of each microbe", `With ${e('-logy')}: ${wb('bacteri/o', '-logy')} the study of bacteria, ${wb('vir/o', '-logy')} the study of viruses and ${wb('myc/o', '-logy')} the study of fungi.`),
          L("Review of the “Microbes” level", recap(["microorganism tiny organism • pathogen disease-causing agent • parasite", "cocci round • bacilli rods • vibrios curved • spirochetes spiral", "staphylo- cluster and strepto- chain • Gram stain: Gm+ purple, Gm− red • AF for TB", "virus inside cells • fungus (myc/o) • protozoon single-celled animal • helminth worm • chlamydia and rickettsia tiny bacteria"])),
          W("Build a word meaning “study of viruses”", ['vir/o', '-logy'], ['myc/o', '-emia', 'bacteri/o'], 'vir/o + -logy = virology.'),
          S("Spell the term for virus in the blood", 'viremia', 'vir/o + -emia.', 'vir…'),
          N('m2r:mc')
        ]
      },
      /* ================= سطح ۳: گسترش عفونت ================= */
      {
        id: 'mc7', title: "Microbes’ Doors", icon: '🚪', items: [
          L("Where do microbes get in?", `Microbes enter the body by several routes, or <b>portals of entry</b>: broken skin, the respiratory tract, the digestive tract and the urinary and genital tracts. Body secretions of an infected person can spread microbes through <b>air, food, water or direct contact</b>.${fig('portals')}`),
          M("Which of these is not a portal of entry for microbes?", ["Healthy, unbroken skin", "Broken skin", "The respiratory system", "The digestive system"], "Healthy skin is a defensive barrier."),
          O("Put the four routes of transmission in order", ["Air", "Food", "water", "Direct contact"], "air, food, water and direct contact."),
          L("Toxins and contagion", `Many microbes cause disease with the <b>toxins</b> (poisons) they release. A disease that passes from one person to another is <b>communicable</b>.${pearl("A patient spreads respiratory droplets by coughing and sneezing; that is why we wear masks for contagious respiratory diseases.")}`),
          M(`${e('<b>communicable</b>')} means…`, ["contagious; from one person to another", "present at birth", "without a cause", "whole-body"], 'communicable = capable of passing from one person to another.'),
          L("Normal flora and opportunists", `${vs(['normal flora', "microbes always living on and in the body; usually harmless and even helpful"], ['opportunistic', "an infection that appears when the body is weak"])}Normal flora can also cause disease if the body’s barriers are damaged or immunity weakens.`),
          T("Normal flora always cause disease.", false, "False; they are usually harmless and often helpful."),
          M("An infection that occurs only in a patient with weak immunity…", ['opportunistic', 'congenital', 'endemic', 'idiopathic'], 'opportunistic = occurs because of a host’s poor condition.'),
          B("Microbes often cause disease with the ___ they release.", ['toxins', 'antibodies', 'vaccines'], "toxin = poison."),
          S("Spell the term for passing from person to person", 'communicable', 'communic + -able.', 'commun…'),
          N('t2f:mc')
        ]
      },
      {
        id: 'mc8', title: "Endemic, Epidemic, Pandemic", icon: '🌍', items: [
          L("Spread in three steps", `${fig('spread-scale')}${tbl([["Term", "Meaning", "Structure"], [e('endemic'), "low but constant in a region; such as the common cold", "en- (in) + dem/o (people)"], [e('epidemic'), "suddenly, many people in a region", "epi- (upon) + dem/o"], [e('pandemic'), "across a large region or the world", "pan- (all) + dem/o"]])}`),
          M("The common cold, always present at a low level in the community…", ['endemic', 'epidemic', 'pandemic', 'iatrogenic'], 'endemic = continuously at a low level.'),
          M("A disease that has spread across the whole world…", ['pandemic', 'endemic', 'epidemic', 'systemic'], "pan- = all."),
          P("Match each part to its meaning", [['dem/o', "people"], ['pan-', "all"], ['epi-', "on, over"], ['en-', "within"]]),
          T("An epidemic means many people in a region are infected at the same time.", true, "A sudden rise in one region."),
          L("Local or whole-body?", `The word <b>systemic</b> means “relating to the whole body”. An infection that spreads from a small wound into the blood and involves the whole body is no longer local; it has become systemic.${memo("system = a whole system; systemic = the whole body.")}`),
          M(`${e('<b>systemic</b>')} means…`, ["Relating to the whole body", "Relating to a geographic region", "Relating to a hospital", "present at birth"], 'systemic = pertaining to the whole body.'),
          B("A disease that suddenly strikes many people in a city is ___.", ['epidemic', 'endemic', 'pandemic'], 'epi- + dem/o + -ic.'),
          W("Build a word meaning “worldwide epidemic”", ['pan-', 'dem/o', '-ic'], ['epi-', 'en-', 'path/o'], 'pan- + dem/o + -ic = pandemic.'),
          S("Spell the term for a sudden outbreak in one region", 'epidemic', 'epi- + dem/o + -ic.', 'epi…'),
          N('f2t:mc')
        ]
      },
      {
        id: 'mc9', title: "Hospitals and Resistant Microbes", icon: '🏥', items: [
          L("Hospital infection", `An infection a patient catches in <b>hospital</b> is <b>nosocomial</b> (nos/o: disease; comial: hospital). If the microbe is resistant to antibiotics, the problem is serious; for example:${tbl([["abbreviation", "Meaning"], [e('MRSA'), "Staphylococcus aureus resistant to methicillin"], [e('VRSA'), "Staphylococcus aureus resistant to vancomycin"], [e('MDR'), "resistant to many drugs"]])}${fig('bact-staph', "Staphylococci")}`),
          M(`${e('<b>nosocomial</b>')} means…`, ["An infection caught in hospital", "An infection passed from mother to fetus", "A disease without a cause", "A disease always present in a region"], 'nos/o + comial.'),
          P("Match each abbreviation to its meaning", [['MRSA', "methicillin-resistant"], ['VRSA', "vancomycin-resistant"], ['MDR', "resistant to many drugs"], ['FUO', "fever of unknown origin"]]),
          L("Stop or kill?", `${vs(['bacteriostatic', "stops bacterial growth (stasis: stoppage)"], ['bactericidal', "kills bacteria (‎-cide: killing)"])}${pearl("An antibiogram (C&S) shows which antibiotic kills or stops the patient’s bacteria.")}`),
          M(`A ${e('<b>bactericidal</b>')} drug…`, ["kills bacteria", "only stops bacterial growth", "kills viruses", "brings down fever"], 'bacteri/o + -cidal.'),
          T("bacteriostatic means stopping bacterial growth.", true, 'bacteri/o + -static.'),
          L("Origin and spread at a glance", `Six adjectives the chart uses to say where a disease came from and how widespread it is:${fig('origin-words')}`),
          M("A wound infection caught on the ward after surgery that does not respond to one antibiotic…", ["nosocomial and MDR", "congenital and endemic", "idiopathic and acute", "opportunistic and pandemic"], "Hospital-acquired and multidrug-resistant."),
          L("Review of the “Spread of Infection” level", recap(["portal of entry: broken skin, respiratory, digestive, urinary and genital tracts • spread by air, food, water, contact", "toxin poison • communicable contagious • normal flora • opportunistic", "endemic local • epidemic widespread • pandemic worldwide • systemic whole-body", "nosocomial hospital-acquired: MRSA, VRSA, MDR • bacteriostatic stops growth • bactericidal kills"])),
          B("A drug that stops bacterial growth but does not kill the bacteria is ___.", ['bacteriostatic', 'bactericidal', 'antipyretic'], "-static = stopping."),
          S("Spell the adjective for an infection caught in hospital", 'nosocomial', 'nos/o + comial.', 'noso…'),
          N('ab:mc')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* تیمار — دنیای ۳: پاسخ بدن به بیماری
 * التهاب و چهار نشانه‌اش، ادم و تجمع مایع، فاگوسیتوز و چرک، ایمنی ذاتی و اکتسابی، نئوپلاسم خوش‌خیم و بدخیم،
 * تغییرات رشد سلول، ضایعه‌ها و مرگ بافت، فتق و افتادگی.
 * منابع: فصل Disease and Treatment (پاسخ به بیماری، شکل‌های ۳-۲ تا ۳-۵، واژه‌های کلیدی و نمودهای بیماری).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'rs', sym: 'Path', name: "The Body’s Response to Disease", short: "Body’s Response", sub: "Inflammation and edema, phagocytosis and pus, innate and acquired immunity, benign and malignant tumours, changes in cell growth, lesions, hernia and prolapse",
    color: '#F76707', dark: '#C24E00', light: '#FFF4E6',
    levels: ["Inflammation and defence", "Neoplasms and cell growth", "Lesions and structural changes"],
    gens: EA.genIds('rs'),
    lessons: [
      /* ================= سطح ۱: التهاب و دفاع ================= */
      {
        id: 'rs1', title: "The four signs of inflammation", icon: '🔥', items: [
          L("The Body Responds to Injury", `The body’s common response to infection and injury is <b>inflammation</b>: damaged cells release chemicals that bring blood and fluid into the tissue. The result is four signs:${fig('inflammation-signs')}`),
          O("Put the four signs of inflammation in order", ['heat', 'pain', 'redness', 'swelling'], "Heat, pain, redness and swelling."),
          P("Match each sign to its classic Latin name", [['heat', "calor"], ['pain', "dolor"], ['redness', "rubor"], ['swelling', "tumor"]]),
          L("The suffix ‎-itis", `The suffix <b>‎-itis</b> means inflammation:${tbl([["Term", "Meaning"], [e('appendicitis'), "inflammation of the appendix"], [e('tonsillitis'), "inflammation of the tonsils"], [e('cystitis'), "bladder inflammation"]])}${memo("itis is like fire: wherever it settles, that place is hot, red and swollen.")}`),
          M(`${e('<b>tonsillitis</b>')} means…`, ["inflammation of the tonsils", "removal of the tonsils", "tumour of the tonsil", "enlarged tonsil"], 'tonsill/o + -itis.'),
          T("Swelling and redness are among the four signs of inflammation.", true, "Along with heat and pain."),
          M("Which word contains the suffix for inflammation?", ['appendicitis', 'appendectomy', 'hepatomegaly', 'lipoma'], "-itis = inflammation."),
          B("Inflammation of the appendix is called ___.", ['appendicitis', 'appendectomy', 'tonsillitis'], 'appendic/o + -itis.'),
          W("Build a word meaning “inflammation of the tonsils”", ['tonsill/o', '-itis'], ['-ectomy', 'appendic/o', '-oma'], 'tonsill/o + -itis = tonsillitis.'),
          S("Spell the term for the response of heat, redness, swelling and pain", 'inflammation', "in- + flamm (flame) + -ation.", 'inflam…'),
          N('t2f:rs')
        ]
      },
      {
        id: 'rs2', title: "Edema and Fluid", icon: '💧', items: [
          L("Swelling means fluid in tissue", `Inflammation is one cause of <b>edema</b>: swelling, or fluid collecting in tissue. Heart failure, blocked fluid drainage and upset body-fluid balance also cause edema. Its adjective is <b>edematous</b> (swollen).${fig(['foot-normal', 'foot-edema'], ["Normal foot: veins and tendons are visible", "Edematous foot: surface details are hidden"])}`),
          M("Which foot shows edema?", ["Foot B: swollen and without detail", "Foot A: veins and tendons are visible", "Both feet", "neither"], "Swelling hides the details of the skin surface.", null, F(['foot-normal', 'foot-edema'], ['A', 'B'])),
          M(`${e('<b>edematous</b>')} means…`, ["swollen", "bruised", "red", "hard"], "The adjective of edema."),
          T("Heart failure can also cause edema.", true, "Inflammation is not the only cause of edema."),
          L("Where has the fluid collected?", `${fig('fluid-places')}${tbl([["Term", "Meaning"], [e('edema'), "fluid in tissue; swelling"], [e('effusion'), "escape of fluid into a cavity, such as the pleura"], [e('ascites'), "fluid in the peritoneal (abdominal) cavity"], [e('exudate'), "material that leaks out of vessels after injury"]])}`),
          P("Match each term to its meaning", [['edema', "fluid in tissue"], ['effusion', "fluid in a cavity"], ['ascites', "fluid in the abdomen"], ['exudate', "leakage from vessels"]]),
          M(`${e('<b>ascites</b>')} means…`, ["fluid collected in the peritoneal (abdominal) cavity", "fluid in the pleura", "swollen leg", "blood in the abdomen"], 'ascites = fluid in the peritoneal cavity.'),
          B("The escape of fluid into a body cavity is called ___.", ['effusion', 'ascites', 'exudate'], 'effusion = escape of fluid into a cavity.'),
          S("Spell the term for fluid swelling in tissue", 'edema', "e-de-ma: “eh-DEE-mah”.", 'ed…'),
          N('d2t:rs')
        ]
      },
      {
        id: 'rs3', title: "Swallowing Microbes, and Pus", icon: '🦠', items: [
          L("Cells that eat", `With <b>phagocytosis</b> the body clears away microbes, damaged cells and debris: some white blood cells <b>swallow</b> them and destroy them inside. ${wb('phag/o', 'cyt/o', '-osis')} means “the condition of an eating cell”. The eating cell itself is a <b>phagocyte</b>.${fig('phago-img', '', "A: a white blood cell passes through the capillary wall to swallow a bacterium. B: the bacterium is destroyed in a sac (vesicle) by lysosome enzymes.")}`),
          M(`${e('<b>phagocytosis</b>')} means…`, ["a cell swallowing and destroying a microbe", "cell division", "cell death", "making antibodies"], "phag/o (eating) + cyt/o (cell) + -osis."),
          O("Put the stages of phagocytosis in order", ["swallowing the bacterium", "trapped in a sac", "destroyed by lysosome enzymes"], 'engulf → vesicle → digest.'),
          L("pus", `What remains after phagocytosis is a mixture of fluid and white blood cells called <b>pus</b>; its root is py/o.${fig('phago-steps')}${tbl([["Term", "Meaning"], [e('purulent'), "containing pus"], [e('suppuration'), "forming pus"], [e('abscess'), "pus collected in one place"], [e('cellulitis'), "spreading inflammation of tissue"]])}`),
          M(`${e('<b>abscess</b>')} means…`, ["pus collected in one place", "inflammation spread through tissue", "swollen leg", "A bacterial toxin"], 'abscess = a localized collection of pus.'),
          P("Match each term to its meaning", [['pus', "thick yellow fluid of infection"], ['purulent', "containing pus"], ['suppuration', "forming pus"], ['cellulitis', "spreading inflammation"]]),
          L("When microbes reach the blood", `${vs(['sepsis', "microbes or their toxins in the blood or tissues; adjective: septic"], ['septicemia', "disease-causing bacteria in the blood; “blood poisoning”"])}${pearl("A septic patient has fever, a fast heart rate and low blood pressure; it is a medical emergency.")}`),
          T("Pus is made of fluid and white blood cells.", true, "What remains after phagocytosis."),
          L("Review: inflammation and pus", recap(["inflammation: heat, pain, redness, swelling • the suffix ‎-itis", "edema fluid in tissue • effusion in a cavity • ascites in the abdomen • exudate leakage from vessels", "phagocytosis swallowing microbes • phagocyte eating cell • pus", "abscess collected pus • cellulitis spreading inflammation • sepsis and septicemia microbes in the blood"])),
          B("A white blood cell that swallows microbes is a ___.", ['phagocyte', 'exudate', 'abscess'], 'phag/o + -cyte.'),
          S("Spell the term for a cell that engulfs microbes", 'phagocyte', 'phag/o + -cyte.', 'phago…'),
          N('m2r:rs')
        ]
      },
      /* ================= سطح ۲: نئوپلاسم و رشد سلول ================= */
      {
        id: 'rs4', title: "Innate and Acquired Defence", icon: '🛡️', items: [
          L("Immunity means all the defences", `<b>immunity</b> means all of the body’s defences against infectious disease. These defences fall into two groups: <b>innate</b> and <b>adaptive</b>.${fig('immunity-types')}`),
          M(`What is ${e('<b>innate immunity</b>')}?`, ["an inborn defence that needs no earlier contact with the microbe", "immunity built after a vaccine", "antibodies against one particular disease", "pollen sensitivity"], 'innate = inborn.'),
          P("Match each defence to its description", [["Intact skin", "innate mechanical barrier"], ["Stomach acid", "innate defensive secretion"], ['inflammation', "response to injury; innate"], ['phagocytosis', "swallowing microbes; innate"]]),
          L("Acquired immunity", `<b>Adaptive</b>, or acquired, immunity is built during life after contact with a microbe or with a <b>vaccine</b>, and it is <b>specific</b>. The cells of this system recognise an invader and destroy it by direct attack or by making <b>antibodies</b>. The same system also watches for cancer cells.`),
          M(`${e('<b>antibody</b>')} means…`, ["a protein that disables an invader", "disease-causing microbe", "red blood cell", "A bacterial toxin"], "anti- (against) + body."),
          T("Acquired immunity is specific; it is made for one particular disease.", true, 'specific for particular diseases.'),
          L("When immunity makes mistakes", `${vs(['allergy', "overreaction to a harmless substance"], ['autoimmune disease', "reaction against the body’s own tissues"])}${memo("auto = self; autoimmune means immunity against the “self”.")}`),
          M("An immune system that reacts strongly to pollen…", ['allergy', 'autoimmune disease', 'innate immunity', 'vaccine'], 'allergy = overreaction to a harmless substance.'),
          B("A defence built through contact with a microbe or a vaccine is ___ immunity.", ['adaptive', 'innate', 'normal flora'], 'adaptive = acquired.'),
          S("Spell the term for all of the body’s defences against infection", 'immunity', 'immun/o + -ity.', 'immun…'),
          N('t2f:rs')
        ]
      },
      {
        id: 'rs5', title: "Benign or Malignant?", icon: '⚖️', items: [
          L("New, uncontrolled growth", `<b>neoplasia</b> means abnormal, uncontrolled growth of tissue (neo-: new + plasm: formation), and the mass itself is called a <b>neoplasm</b> or tumour. The root onc/o and the suffix ‎-oma also refer to a neoplasm.${fig('neoplasm-tree')}`),
          M(`${e('<b>neoplasm</b>')} means…`, ["a tumour; abnormal growth that is benign or malignant", "only a malignant tumour", "inflammation of tissue", "fluid-filled sac"], 'neo- + -plasm.'),
          L("Two groups", `${vs(['benign', "does not spread, but may cause damage where it is"], ['malignant', "invasive; spreads to other tissues (metastasis); the same as cancer"])}<b>metastasis</b> (meta-: change + stasis: standing) means spread from one part of the body to another; its verb is metastasize and its adjective metastatic.`),
          P("Match each term to its meaning", [['benign', "not cancerous"], ['malignant', "cancerous and spreading"], ['metastasis', "spread elsewhere"], ['neoplasia', "New, uncontrolled growth"]]),
          M(`${e('<b>metastasis</b>')} means…`, ["spread of cancer from one part of the body to another", "benign tumour", "inflammation", "removal of a tumour"], "meta- (change) + stasis (standing)."),
          T("A benign tumour metastasizes to other tissues.", false, "False; a benign tumour does not spread."),
          M("Which is the adjective of metastasis?", ['metastatic', 'metastasize', 'metastases', 'metaplastic'], "metastasize is the verb and metastases the plural."),
          B("An invasive tumour that spreads is ___.", ['malignant', 'benign', 'cystic'], 'malignant = cancerous.'),
          W("Build a word meaning “new growth”", ['neo-', '-plasm'], ['meta-', '-oma', 'onc/o'], 'neo- + -plasm = neoplasm.'),
          S("Spell the term for a tumour that invades and spreads", 'malignant', "mal- (bad) + ignant; the g is pronounced: “mah-LIG-nant”.", 'malig…'),
          N('f2t:rs')
        ]
      },
      {
        id: 'rs6', title: "Names of Cancers, and Cysts", icon: '🏷️', items: [
          L("Cancer of which tissue?", `${tbl([["Name", "tissue", "Note"], [e('carcinoma'), "epithelial tissue (epithelium)", "carcino: crab"], [e('adenocarcinoma'), "glandular epithelium", "aden/o: gland"], [e('melanoma'), "pigment cells (melanocytes)", "melan/o: dark"], [e('sarcoma'), "connective tissue or muscle", "sarco: flesh"]])}${memo("carcinoma is the covering and sarcoma the flesh; c as in “cover”, s as in “sinew”.")}`),
          M(`${e('<b>sarcoma</b>')} is cancer of which tissue?`, ["connective tissue or muscle", "Epithelial tissue", "gland", "pigment cell"], "sarc/o = flesh, connective tissue."),
          M(`${e('<b>adenocarcinoma</b>')} means…`, ["cancer of glandular epithelium", "benign tumour of a gland", "inflammation of a gland", "muscle cancer"], 'aden/o + carcin/o + -oma.'),
          P("Match each cancer to its tissue", [['carcinoma', "Epithelial tissue"], ['sarcoma', "supporting tissue such as bone and tendon"], ['melanoma', "pigment cell"], ['adenocarcinoma', "glandular epithelium"]]),
          L("In situ, and cysts", `<b>in situ</b> means “in its own place”: a tumour that has not yet invaded or spread, such as <b>carcinoma in situ</b> (CIS). A <b>cyst</b> is a sac filled with fluid or semisolid material that is abnormal but not cancerous; it is often mistaken for a malignancy. Common sites: the breast, the oil glands of the skin and the ovary; causes: infection or a blocked duct.`),
          M(`${e('<b>CIS</b>')} means…`, ["carcinoma in situ; not yet spread", "cancer that has spread", "infected cyst", "benign tumour"], 'carcinoma in situ.'),
          T("A cyst is always cancerous.", false, "False; it is abnormal but not cancerous."),
          L("Review of the “Neoplasms and Immunity” level", recap(["immunity: innate is inborn (skin, stomach acid, inflammation, phagocytosis) and adaptive is acquired (vaccines and antibodies)", "allergy overreaction • autoimmune disease reaction against one’s own tissue", "neoplasm = tumour • benign does not spread • malignant invasive, with metastasis", "carcinoma epithelial • adenocarcinoma glandular • melanoma pigment cells • sarcoma connective tissue • a cyst is not cancer"])),
          B("Cancer of the skin’s pigment cells is ___.", ['melanoma', 'lipoma', 'sarcoma'], 'melan/o + -oma.'),
          S("Spell the term for an abnormal fluid-filled sac", 'cyst', "cyst/o: sac.", 'cy…'),
          N('m2r:rs')
        ]
      },
      /* ================= سطح ۳: ضایعه‌ها و تغییرات ساختاری ================= */
      {
        id: 'rs7', title: "More, Bigger or Different Cells", icon: '🔬', items: [
          L("Five growth changes", `${fig('growth-changes')}${tbl([["Term", "Meaning"], [e('hyperplasia'), "overgrowth of normal cells in a normal arrangement"], [e('hypertrophy'), "an organ enlarging without more cells"], [e('metaplasia'), "cells changing into a form not normal for that tissue"], [e('dysplasia'), "abnormal tissue growth"], [e('anaplasia'), "loss of normal differentiation; a feature of cancer cells"]])}`),
          M(`${e('<b>hypertrophy</b>')} means…`, ["an organ enlarging without more cells", "more cells", "change of cell type", "undifferentiated cell"], "hyper- + -trophy (growth, nourishment)."),
          L("Two words that get mixed up", `${vs(['hyperplasia', "“more” cells; plas: formation"], ['hypertrophy', "“bigger” cells; trophy: growth, nourishment"])}${pearl("An athlete’s muscle undergoes hypertrophy with training: each fibre gets bigger, not more numerous.")}`),
          P("Match each term to its meaning", [['hyperplasia', "more cells"], ['hypertrophy', "bigger cells"], ['metaplasia', "change to another type"], ['anaplasia', "undifferentiated"]]),
          M(`${e('<b>metaplasia</b>')} means…`, ["cells changing into a form not normal for that tissue", "cell death", "overgrowth beyond normal", "cell enlargement"], "meta- = change."),
          T("Anaplasia is a feature of cancer cells.", true, 'Lack of normal differentiation.'),
          M("An athlete’s enlarged heart with no increase in the number of muscle cells…", ['hypertrophy', 'hyperplasia', 'anaplasia', 'metaplasia'], "An increase in size, not number."),
          B("Overgrowth of normal cells in a normal arrangement is ___.", ['hyperplasia', 'hypertrophy', 'dysplasia'], 'hyper- + -plasia.'),
          W("Build a word meaning “loss of cell differentiation”", ['ana-', '-plasia'], ['meta-', 'hyper-', '-trophy'], 'ana- + -plasia = anaplasia.'),
          S("Spell the term for an increase in cell number", 'hyperplasia', 'hyper- + -plasia.', 'hyper…'),
          N('d2t:rs')
        ]
      },
      {
        id: 'rs8', title: "Lesions and Tissue Death", icon: '🩹', items: [
          L("What is a lesion?", `A <b>lesion</b> is a distinct area of damaged tissue; a wound or an injury. Wear, ageing or trauma may lead to a lesion and even to <b>necrosis</b>: tissue death, from the root necr/o. The adjective of necrosis is necrotic.${fig('tissue-lesions')}`),
          M(`${e('<b>lesion</b>')} means…`, ["a distinct area of damaged tissue", "malignant tumour", "fluid in tissue", "A bacterial toxin"], 'lesion = a distinct area of damaged tissue.'),
          L("tissue death from lack of blood", `<b>gangrene</b> is tissue death, usually because the blood supply is cut off; it may come with bacterial infection and decay.${vs(['necrosis', "any kind of tissue death"], ['gangrene', "tissue death from lack of blood, often with infection"])}`),
          M(`What usually causes ${e('<b>gangrene</b>')}?`, ["Loss of blood supply to the tissue", "Overgrowth of cells", "fluid build-up in tissue", "An allergic reaction"], 'Death of tissue, usually caused by lack of blood supply.'),
          L("Passages, splits and adhesions", `${tbl([["Term", "Meaning"], [e('fistula'), "an abnormal passage between two organs or from an organ to the body surface"], [e('fissure'), "a groove or split"], [e('adhesion'), "two surfaces that should be separate sticking together"], [e('induration'), "hardening; an abnormally hard spot"], [e('polyp'), "a mass attached by a narrow stalk"]])}`),
          P("Match each term to its meaning", [['fistula', "abnormal passage"], ['fissure', "split"], ['adhesion', "tissues abnormally stuck together"], ['induration', "local hardening"]]),
          T("A fistula is an abnormal passage between two organs.", true, 'An abnormal passage between two organs.'),
          M("After abdominal surgery, the intestines have stuck together. This is called…", ['adhesion', 'fistula', 'fissure', 'polyp'], 'adhesion = uniting of two surfaces.'),
          B("The adjective of necrosis is ___.", ['necrotic', 'necrosis', 'nephrotic'], 'necrosis → necrotic.'),
          S("Spell the term for an area of damaged tissue", 'lesion', "le-sion: “LEE-zhun”.", 'les…'),
          N('t2f:rs')
        ]
      },
      {
        id: 'rs9', title: "Hernia and ptosis", icon: '🎈', items: [
          L("Pushing Out or Dropping Down", `${fig('hernia-prolapse')}${vs(['hernia', "an organ pushing through an abnormal opening; commonly called a rupture"], ['prolapse • ptosis', "an organ dropping or sinking from its normal place"])}`),
          M(`${e('<b>hernia</b>')} means…`, ["an organ pushing through an abnormal opening", "an organ dropping down", "rupture of a vessel", "malignant tumour"], 'Protrusion of an organ through an abnormal opening.'),
          L("Hiatal hernia", `In a <b>hiatal hernia</b>, part of the stomach passes through the oesophageal opening in the diaphragm (esophageal hiatus) into the chest, and the junction of the oesophagus and stomach rises.${fig(['stomach-normal', 'hiatal-img'], ["Normal stomach", "Hiatal hernia"])}`),
          M("In picture B, part of the stomach has risen through the diaphragm. This is called…", ['hiatal hernia', "femoral gastrocele", "uterine prolapse", 'gastrectasia'], "The stomach has risen through the esophageal hiatus.", null, F(['stomach-normal', 'hiatal-img'], ['A', 'B'])),
          T("In a hiatal hernia, part of the stomach moves into the chest cavity.", true, "Through the oesophageal opening in the diaphragm."),
          L("drooping", `<b>prolapse</b> and <b>ptosis</b> both mean an organ dropping or sinking: blepharoptosis is a drooping eyelid and splenoptosis a drooping spleen. With a <b>fixation</b>, the surgeon fastens a dropped organ (such as the bladder) back in place.${fig('ptosis-eyes', "Normal and drooping eyelid")}`),
          P("Match each term to its meaning", [['hernia', "pushing through an opening"], ['prolapse', "an organ dropping down"], ['-cele', "hernia, swelling"], ['blepharoptosis', "drooping eyelid"]]),
          M(`${e('<b>prolapse</b>')} means the same as which word?`, ['ptosis', 'stenosis', 'necrosis', 'sclerosis'], 'prolapse = ptosis.'),
          L("Review of the “Lesions and Structural Changes” level", recap(["hyperplasia more cells • hypertrophy bigger cells • metaplasia change of type • anaplasia undifferentiated", "lesion damaged area • necrosis tissue death • gangrene death from lack of blood", "fistula abnormal passage • fissure split • adhesion sticking together • induration hardening • polyp mass on a stalk", "hernia pushing through an opening • hiatal hernia stomach through the diaphragm • prolapse and ptosis dropping"])),
          B("The stomach pushing up through the diaphragm is called ___.", ['hiatal hernia', 'prolapse', 'gastrectasia'], "Through the esophageal hiatus."),
          S("Spell the key term for an organ dropping from its place", 'prolapse', "pro- (before, forward) + lapse (falling).", 'pro…'),
          N('wb:rs')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* تیمار — دنیای ۴: معاینه و تشخیص
 * نشانه و علامت، شرح حال و اختصارهایش، معاینه فیزیکی (IPPA)، علائم حیاتی و فشار خون، نشانه‌های بالینی،
 * ابزارهای ‎-scope و پسوندهای ثبت و اندازه‌گیری، ریشه‌های نیروهای فیزیکی و روش‌های تصویربرداری.
 * منابع: فصل Disease and Treatment (تشخیص، شکل‌های ۳-۶ تا ۳-۱۵، جعبه‌های ۳-۴ و ۳-۵، جدول‌های ۳-۶ و ۳-۷ و اختصارهای شرح حال).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'dx', sym: 'Dx', name: "Examination and Diagnosis", short: "Examination", sub: "The history and its abbreviations, inspection, palpation, percussion and auscultation, vital signs and blood pressure, clinical signs, ‎-scope instruments and imaging",
    color: '#1098AD', dark: '#0B7285', light: '#E3FAFC',
    levels: ["history and physical", "Vital signs and clinical signs", "Instruments and imaging"],
    gens: EA.genIds('dx'),
    lessons: [
      /* ================= سطح ۱: شرح حال و معاینه ================= */
      {
        id: 'dx1', title: "Sign or Symptom?", icon: '🔎', items: [
          L("Where does diagnosis begin?", `<b>diagnosis</b> (Dx) means identifying the nature and cause of a disease. Diagnosis begins with the <b>history</b> (Hx): the history of the present illness, past medical history, and family and social history. Then comes the <b>physical examination</b> (PE).${tbl([["abbreviation", "Meaning"], [e('CC'), "chief complaint: the patient’s main complaint"], [e('HPI'), "history of present illness"], [e('PMH'), "past medical history"], [e('ROS'), "review of systems"], [e('H&P'), "history and physical"]])}`),
          P("Match each abbreviation to its meaning", [['Hx', "history"], ['CC', "main complaint"], ['PMH', "past medical history"], ['PE', "physical examination"]]),
          L("Two kinds of evidence of disease", `${fig('sign-symptom')}${vs(['sign', "objective; seen or measured: fever, rash, high blood pressure"], ['symptom', "subjective; felt by the patient: pain, dizziness, weakness"])}A <b>syndrome</b> is a group of signs and symptoms that together characterise a disease.`),
          M("A fever of 39 degrees measured with a thermometer is a…", ['sign', 'symptom', 'syndrome', 'prognosis'], 'sign = objective evidence.'),
          M("Dizziness that the patient complains of is a…", ['symptom', 'sign', 'lesion', 'etiology'], 'symptom = subjective evidence.'),
          T("A syndrome is a set of signs and symptoms that together characterise a disease.", true, 'A group of signs and symptoms.'),
          M(`${e('<b>diagnosis</b>')} means…`, ["identifying the cause and nature of a disease", "predicting the outcome of a disease", "treating disease", "preventing disease"], "dia- (through) + gnosis (knowledge)."),
          B("A review of all body systems during the examination is written with the abbreviation ___.", ['ROS', 'HPI', 'CC'], 'review of systems.'),
          S("Spell the term for what the patient feels and reports", 'symptom', "sym-p-tom; the p is barely pronounced.", 'symp…'),
          N('ab:dx')
        ]
      },
      {
        id: 'dx2', title: "Look, Feel, Tap, Listen", icon: '🖐️', items: [
          L("Four methods of examination", `In the physical examination, the physician uses four methods in order (IPPA):${fig('ippa')}`),
          O("Put the four examination methods in IPPA order", ['inspection', 'palpation', 'percussion', 'auscultation'], "Inspection, Palpation, Percussion, Auscultation."),
          L("Palpation and percussion", `<b>palpation</b>: placing the hands or fingers on the body surface to assess tissue, temperature, movement and consistency. <b>percussion</b>: tapping the body lightly but sharply to assess the underlying tissue by its sound.${fig(['palpation-img', 'percussion-img'], ["palpation • feeling", "percussion • tapping"])}`),
          M("In this picture, the examiner feels the tissue of the patient’s abdomen with the hand. The method is called…", ['palpation', 'percussion', 'auscultation', 'inspection'], 'palpation = touching with hands or fingers.', null, F('palpation-img', "Examining the abdomen")),
          M("The examiner taps on their own finger placed on the patient’s back and listens to the sound. The method is called…", ['percussion', 'palpation', 'inspection', 'auscultation'], 'percussion = tapping the body.', null, F('percussion-img', "Examining the back")),
          L("listening", `<b>auscultation</b> means listening to sounds inside the body, usually the chest or abdomen, with a <b>stethoscope</b> (steth/o: chest).${fig('auscultation-img', "Listening to heart and lung sounds with a stethoscope")}${pearl("In a chart, “BS” means bowel sounds or breath sounds; both are heard by auscultation.")}`),
          M("Listening to the heart with a stethoscope…", ['auscultation', 'percussion', 'palpation', 'inspection'], 'auscultation = listening for sounds within the body.', null, F('auscultation-img', "Stethoscope on the chest")),
          P("Match each method to its meaning", [['inspection', "looking"], ['palpation', "feeling"], ['percussion', "tapping"], ['auscultation', "listening"]]),
          T("stethoscope is built from the root steth/o, meaning “chest”.", true, "An instrument for listening to chest sounds."),
          S("Spell the term for listening to sounds inside the body", 'auscultation', 'aus-cul-ta-tion.', 'auscul…'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx3', title: "The Language of the History", icon: '📝', items: [
          L("Chart abbreviations", `${tbl([["abbreviation", "Meaning"], [e('c/o'), "complains of"], [e('h/o'), "history of"], [e('y/o'), "years old"], [e('pt'), "Patient"], [e('w/o'), "without"], [e('R/O'), "rule out (a possibility to be checked)"]])}${pearl("“R/O fracture” means the physician suspects a fracture, which must be ruled out or confirmed with an x-ray.")}`),
          P("Match each abbreviation to its meaning", [['c/o', "complains of"], ['h/o', "history of"], ['y/o', "years old"], ['w/o', "without"]]),
          M(`“${e('R/O')} fracture” means…`, ["a possible fracture that must be checked", "a definite fracture", "a healed fracture", "no fracture"], 'R/O = rule out.'),
          L("Normal findings", `${tbl([["abbreviation", "Meaning"], [e('NAD'), "no apparent distress"], [e('WNL'), "within normal limits"], [e('NKDA'), "no known drug allergies"], [e('HEENT'), "head, eyes, ears, nose and throat"], [e('PERRLA'), "pupils equal, round, reactive to light and accommodation"], [e('ADL'), "activities of daily living"]])}`),
          M(`${e('<b>NKDA</b>')} in a chart means…`, ["no known drug allergies", "no apparent distress", "within normal limits", "stop the drug"], 'no known drug allergies.'),
          T("WNL means a finding is within normal limits.", true, 'within normal limits.'),
          L("Chart symbols", `${tbl([["symbol", "Meaning"], ['↑ / ↓', "increase / decrease"], ['1° / 2°', "primary / secondary (to)"], ['∆', "change"], ['±', "doubtful, slight"], ['∼', "approximately"]])}${memo("2° in “2° to infection” means “secondary to infection”; the infection is the underlying cause.")}`),
          M("The chart says: “WBC ↑”. It means…", ["White blood cells are increased", "White blood cells are decreased", "White blood cells are unchanged", "The test was not done"], '↑ = increase(d).'),
          L("Review of the “History and Examination” level", recap(["Dx diagnosis • Hx history • CC chief complaint • HPI, PMH, ROS • PE physical examination", "sign objective • symptom subjective • syndrome group of signs", "IPPA: inspection looking • palpation feeling • percussion tapping • auscultation listening with a stethoscope", "c/o, h/o, y/o, w/o, R/O • NAD, WNL, NKDA, HEENT, PERRLA • ↑ ↓ 1° 2° ∆"])),
          B("For a 59-year-old patient, the abbreviation ___ is written after the age number.", ['y/o', 'h/o', 'c/o'], 'y/o = years old.'),
          S("Spell the term for examination by looking", 'inspection', "in- + spect (look) + -ion.", 'inspec…'),
          N('ab:dx')
        ]
      },
      /* ================= سطح ۲: علائم حیاتی و نشانه‌ها ================= */
      {
        id: 'dx4', title: "Four Vital Numbers", icon: '🌡️', items: [
          L("vital signs", `<b>vital signs</b> (VS) are measurements that show the basic functions needed for life, compared with normal ranges:${fig('vital-signs')}`),
          P("Match each abbreviation to its meaning", [['T', "temperature"], ['P', "pulse"], ['R', "breathing"], ['BP', "blood pressure"]]),
          L("pulse", `The pulse is counted by feeling an artery, and its unit is <b>bpm</b> (beats per minute). The pulse is usually equal to the <b>HR</b> (heart rate). <b>TPR</b> means temperature, pulse and respiration.${fig('pulse-img', "Counting the pulse by feeling the wrist artery")}`),
          M("In this picture the examiner feels the wrist artery to count the…", ["pulse in bpm", "blood pressure in mm Hg", "body temperature", "breathing rate"], 'pulse rate in beats per minute.', null, F('pulse-img', "Counting the pulse")),
          M(`${e('<b>TPR</b>')} means…`, ["temperature, pulse, respiration", "blood pressure and pulse", "temperature and blood pressure", "breathing and heart rate"], 'temperature, pulse, respiration.'),
          L("temperature", `The root <b>therm/o</b> means heat, temperature: a <b>thermometer</b> measures temperature, <b>hypothermia</b> is low body temperature and <b>hyperthermia</b> high body temperature. The adjective for fever is <b>febrile</b>. Temperature is written in C (Celsius) or F (Fahrenheit).`),
          M(`${e('<b>hypothermia</b>')} means…`, ["body temperature below normal", "body temperature above normal", "fever", "shivering"], "hypo- (low) + therm/o + -ia."),
          T("febrile means having a fever.", true, 'Pertaining to fever.'),
          B("The pulse is written in the unit ___.", ['bpm', 'mm Hg', 'mL'], 'beats per minute.'),
          W("Build a word meaning “high body temperature”", ['hyper-', 'therm/o', '-ia'], ['hypo-', 'bar/o', '-meter'], 'hyper- + therm/o + -ia = hyperthermia.'),
          S("Spell the term for the instrument that measures temperature", 'thermometer', 'therm/o + -meter.', 'thermo…'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx5', title: "blood pressure", icon: '🩺', items: [
          L("The two numbers of blood pressure", `Blood pressure (BP) is written in <b>mm Hg</b> (millimetres of mercury) as systolic/diastolic: the top number is the <b>systolic pressure</b> (when the heart contracts) and the bottom number the <b>diastolic pressure</b> (when the heart rests).${fig('bp-reading')}`),
          M(`When is the ${e('<b>systolic pressure</b>')} recorded?`, ["when the heart contracts", "when the heart rests", "when breathing in", "at bedtime"], 'systolic = when the heart is contracting.'),
          M("In “BP 130/85”, which is the 85?", ['diastolic pressure', 'systolic pressure', 'pulse', 'respiration'], "The bottom number is the diastolic."),
          L("The blood pressure device", `The examiner measures blood pressure with a pressure cuff, the <b>sphygmomanometer</b>, and a stethoscope. Break the word apart: ${wb('sphygm/o', 'man/o', '-meter')} = pulse + pressure + measuring instrument. Newer digital devices show the number directly.${memo("sphygmo-mano-meter: “pulse-pressure-meter”.")}`),
          P("Match each piece to its meaning", [['sphygm/o', "pulse"], ['man/o', "pressure"], ['-meter', "measuring instrument"], ['mm Hg', "millimetres of mercury"]]),
          T("Blood pressure is measured with a sphygmomanometer and a stethoscope.", true, 'blood pressure cuff + stethoscope.'),
          M("The root bar/o also means “pressure”. What is a barometer?", ["An instrument that measures (air) pressure", "thermometer", "heart tracing (ECG)", "stethoscope"], 'bar/o + -meter.'),
          B("The top number of blood pressure is the ___ pressure.", ['systolic', 'diastolic', 'pulse'], 'systolic = contracting.'),
          W("Build a word meaning “blood pressure meter”", ['sphygm/o', 'man/o', '-meter'], ['bar/o', 'therm/o', '-graph'], 'sphygm/o + man/o + -meter = sphygmomanometer.'),
          S("Spell the term for the blood pressure instrument", 'sphygmomanometer', 'sphygmo-mano-meter.', 'sphygmo…'),
          N('d2t:dx')
        ]
      },
      {
        id: 'dx6', title: "Signs the Physician Sees", icon: '👀', items: [
          L("Colour and skin", `The skin, hair and nails give clear signs of health:${tbl([["Term", "Meaning"], [e('cyanosis'), "bluish skin from lack of oxygen (cyan/o: blue)"], [e('pallor'), "paleness"], [e('diaphoresis'), "profuse sweating"], [e('clubbing'), "clubbing of the fingertips; in lung and heart disease"]])}${fig('clubbing-img', "A: normal (160-degree angle) • B: clubbed (angle over 180 degrees)")}`),
          M("In figure B, the fingertip is swollen and the nail angle is over 180 degrees. This is called…", ['clubbing', 'cyanosis', 'pallor', 'induration'], 'clubbing: soft-tissue growth around the nail.', null, F('clubbing-img', "Normal and clubbed finger")),
          M(`${e('<b>cyanosis</b>')} means…`, ["bluish skin from lack of oxygen", "paleness", "yellowing", "reddened skin"], "cyan/o = blue."),
          L("Feelings and general state", `${tbl([["Term", "Meaning"], [e('malaise'), "feeling of being unwell; often a sign of infection (mal-: bad)"], [e('syncope'), "fainting; brief loss of consciousness from reduced blood to the brain"], [e('colic'), "acute abdominal pain with smooth-muscle spasm"], [e('nocturnal'), "at night (noct/i: night)"]])}`),
          P("Match each term to its meaning", [['syncope', "fainting"], ['malaise', "feeling unwell"], ['diaphoresis', "profuse sweating"], ['pallor', "paleness"]]),
          L("Before and after a disease", `${vs(['prodrome', "a symptom that announces a coming disease"], ['sequela', "a lasting effect of a disease; plural: sequelae"])}${tbl([["Term", "Meaning"], [e('facies'), "the look and expression of the face"], [e('bruit'), "an abnormal sound on auscultation, for example over a vessel"], [e('FUO'), "fever of unknown origin"]])}`),
          M(`${e('<b>sequela</b>')} means…`, ["a lasting effect of a disease", "a symptom before a disease", "fainting", "fever of unknown cause"], 'A lasting effect of a disease.'),
          T("A prodrome is a symptom that remains after recovery from a disease.", false, "False; a prodrome comes before the disease and a sequela after it."),
          L("Review: vital signs and clinical signs", recap(["VS: T temperature, P pulse (bpm), R respiration, BP blood pressure (mm Hg) • TPR • HR", "systolic contraction (top number) • diastolic rest (bottom number) • sphygmomanometer", "therm/o: thermometer, hypothermia, hyperthermia • febrile having a fever", "cyanosis, pallor, diaphoresis, clubbing, syncope, malaise, colic • prodrome before and sequela after a disease"])),
          B("A brief loss of consciousness from reduced blood flow to the brain is called ___.", ['syncope', 'colic', 'malaise'], 'syncope = fainting.'),
          S("Spell the term for bluish skin from lack of oxygen", 'cyanosis', 'cyan/o + -osis.', 'cyan…'),
          N('t2f:dx')
        ]
      },
      /* ================= سطح ۳: ابزارها و تصویربرداری ================= */
      {
        id: 'dx7', title: "Instruments for Viewing and Recording", icon: '🔦', items: [
          L("The ‎-scope family", `${fig('scope-family')}${vs(['-scope', "viewing instrument: bronchoscope"], ['-scopy', "examination by viewing: celioscopy (abdominal cavity)"])}`),
          M("An instrument for examining the inside of the eye…", ['ophthalmoscope', 'otoscope', 'endoscope', 'stethoscope'], 'ophthalm/o + -scope.', null, F('ophthalmoscope-img', "Eye-examining instrument")),
          M("The instrument in this picture has a funnel tip for examining the ear. Its name is…", ['otoscope', 'ophthalmoscope', 'bronchoscope', 'speculum'], "ot/o (ear) + -scope.", null, F('otoscope-img', "Ear-examining instrument")),
          L("viewing tube (endoscope)", `An <b>endoscope</b> is an instrument for looking inside an organ or cavity through a natural body opening or a small incision; most use fibre optics. A <b>bronchoscope</b> is an endoscope for the bronchi. A <b>speculum</b> is an instrument for opening and viewing a canal.${fig('bronchoscopy-img', "A bronchoscope passes through the mouth into the bronchi")}`),
          M("In this picture, which instrument is being used to view the bronchi?", ['bronchoscope', 'stethoscope', 'otoscope', 'sphygmomanometer'], 'bronch/o + -scope.', null, F('bronchoscopy-img', "Examining the bronchi")),
          L("Recording and measuring", `${fig('graph-gram')}${pearl("The standard reference says ‎-graphy is not only recording; it also includes interpreting the data.")}`),
          P("Match each suffix to its meaning", [['-graph', "recording instrument"], ['-graphy', "recording process"], ['-gram', "the record itself"], ['-metry', "measurement"]]),
          M(`An ${e('<b>electrocardiogram</b>')} (ECG) means…`, ["the recorded tracing of the heart’s electrical activity itself", "the machine that records the heart tracing", "recording process", "a pressure-measuring device"], '-gram = a record.'),
          T("A stethoscope is a viewing instrument.", false, "False; we listen with it; it is the exception in the ‎-scope family."),
          W("Build a word meaning “measurement of hearing”", ['audi/o', '-metry'], ['-meter', 'ot/o', '-graphy'], 'audi/o + -metry = audiometry.'),
          S("Spell the term for the ear-examining instrument", 'otoscope', 'ot/o + -scope.', 'oto…'),
          N('m2r:dx')
        ]
      },
      {
        id: 'dx8', title: "Physical Forces", icon: '⚡', items: [
          L("Twelve roots", `Teaching figure has roots for forces and energies used in diagnosis and treatment:${fig('physical-forces')}`),
          P("Match each root to its meaning", [['aer/o', "Air"], ['cry/o', "cold"], ['phot/o', "light"], ['erg/o', "Job"]]),
          L("Examples", `${tbl([["Term", "Meaning"], [e('anaerobic'), "not needing oxygen"], [e('hyperbaric'), "relating to high pressure"], [e('chromatic / achromatic'), "coloured / colourless"], [e('chronologic'), "in time order"], [e('cryotherapy'), "cold treatment"], [e('electrolysis'), "breakdown by electric current"], [e('photoreaction'), "response to light"], [e('barotrauma'), "injury caused by pressure"], [e('synchrony'), "happening together in time (syn-: together)"]])}`),
          M(`${e('<b>aerobic</b>')} means…`, ["needing air (oxygen)", "without air", "relating to pressure", "relating to light"], 'aer/o + -bic.'),
          M(`${e('<b>cryotherapy</b>')} means…`, ["treatment with cold", "treatment with heat", "treatment with light", "treatment with electricity"], "cry/o (cold) + -therapy."),
          M(`${e('<b>barotrauma</b>')} means injury caused by…`, ["pressure", "cold", "sound", "light"], "bar/o = pressure."),
          T("son/o and phon/o both relate to “sound”.", true, "son/o for ultrasound and phon/o for sound and voice."),
          M(`${e('<b>synchrony</b>')} means…`, ["happening at the same time", "in time order", "working together", "absence of colour"], "syn- (together) + chron/o (time)."),
          B("Photochromic glasses change colour in response to ___.", ["light", "heat", "pressure"], "phot/o = light; chrom/o = colour."),
          W("Build a word meaning “colourless”", ['a-', 'chromat/o', '-ic'], ['chron/o', 'phot/o', 'hyper-'], 'a- + chromat/o + -ic = achromatic.'),
          S("Spell the term for needing oxygen", 'aerobic', 'aer/o + -bic.', 'aero…'),
          N('r2m:dx')
        ]
      },
      {
        id: 'dx9', title: "Imaging", icon: '🩻', items: [
          L("Each Method, One Energy", `Imaging methods use different energies to build a picture of the inside of the body (Boxes 3-4 and 3-5):${fig('imaging-energy')}`),
          L("Radiography", `<b>radiography</b> is the most basic method: x-rays pass through the body and make an image called a <b>radiograph</b> on film or a digital plate. Dense tissue (bone, teeth) absorbs the beam and looks <b>bright</b>. Soft tissue often needs a <b>contrast medium</b> such as barium.${fig(['hand-xray', 'xray-density'], ["Radiograph of a normal right hand", "Why bone looks bright"])}`),
          M("In a radiograph of the hand, why do the bones look bright?", ["Because they are dense and absorb the x-rays", "Because the beam passes through them easily", "Because they contain contrast medium", "Because they are warmer"], 'Dense tissues absorb most of the x-rays.', null, F('hand-xray', "Hand radiograph")),
          L("CT and MRI", `${vs(['CT • computed tomography', "x-rays from different angles + a computer = cross-sectional slices; shows soft tissue better than a plain film"], ['MRI', "a strong magnetic field + radio waves; no x-rays; shows soft tissue even more clearly than CT"])}${tbl([["Method", "Description"], [e('fluoroscopy'), "viewing deep structures live on a fluorescent screen"], [e('cineradiography'), "a film made of successive fluoroscopic images"]])}`),
          M("Which method uses no x-rays at all?", ['MRI', 'CT', 'fluoroscopy', 'radiography'], 'MRI = magnetic field + radio waves.'),
          L("Ultrasound and nuclear medicine", `<b>ultrasonography</b>, also called sonography and echography, builds an image from the echoes of high-frequency sound waves; its image is a <b>sonogram</b>. In <b>nuclear medicine</b>, a radioactive substance (a <b>radionuclide</b>) is given to the body: <b>scintigraphy</b>, <b>PET</b> and <b>SPECT</b>.${fig(['ultrasound-img', 'sonogram-img'], ["Pregnancy ultrasound", "sonogram of a pregnant uterus; H head, C coccyx of the fetus"])}`),
          M("Which safe, radiation-free method is used to see the fetus in the uterus?", ['ultrasonography', 'radiography', 'CT', 'PET'], "High-frequency sound waves.", null, F('sonogram-img', "Image of a pregnant uterus")),
          P("Match each method to its energy", [['radiography', "x-rays"], ['MRI', "magnetic field"], ['ultrasonography', "sound waves"], ['PET', "radioactive substance"]]),
          L("Radiographic views", `${fig('xray-views')}${tbl([["abbreviation", "Meaning"], [e('AP'), "anteroposterior: beam from front to back"], [e('PA'), "posteroanterior: beam from back to front"], [e('LL / RL'), "left / right side view"]])}`),
          T("In a PA view, the x-rays enter the patient’s back and exit the front.", true, 'posteroanterior.'),
          L("Review of the “Instruments and Imaging” level", recap(["‎-scope viewing instrument • ‎-scopy examination by viewing • ophthalmoscope, otoscope, endoscope, bronchoscope • stethoscope for listening", "‎-graph recording instrument • ‎-graphy method • ‎-gram the record itself • ‎-meter instrument and ‎-metry measurement", "aer/o, bar/o, chrom/o, chron/o, cry/o, electr/o, erg/o, phon/o, phot/o, radi/o, son/o, therm/o", "x-rays: radiography and CT • magnetism: MRI • sound: ultrasonography • radionuclides: PET, SPECT, scintigraphy • views: AP, PA, LL, RL"])),
          S("Spell the full name of the imaging method that uses high-frequency sound", 'ultrasonography', 'ultra- + son/o + -graphy.', 'ultraso…'),
          N('f2t:dx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* تیمار — دنیای ۵: جراحی و درمان
 * پسوندهای جراحی (جدول ۳-۸)، هدف‌های جراحی و بیوپسی، مسیر بیمار پیش و پس از عمل، ابزارهای جراحی (جعبه ۳-۶)،
 * لوله‌ها و شست‌وشو، درمان و پیش‌آگهی و سرطان، و طب مکمل و جایگزین.
 * منابع: فصل Disease and Treatment (درمان، جراحی، شکل‌های ۳-۱۶ و ۳-۱۹، واژه‌های کلیدی و غنی‌سازی و اختصارها).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'tx', sym: 'Tx', name: "Surgery and Treatment", short: "Surgery", sub: "Removal, incision and opening, drawing fluid, repair and fixation, the operating room and instruments, catheters and irrigation, treatment, prognosis and complementary medicine",
    color: '#E64980', dark: '#A61E4D', light: '#FFF0F6',
    levels: ["Surgical suffixes", "Operating room and instruments", "Treatments and complementary medicine"],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: پسوندهای جراحی ================= */
      {
        id: 'tx1', title: "Removing, Cutting, Opening", icon: '✂️', items: [
          L("A surgeon speaks in suffixes", `<b>surgery</b> is treating disease or injury by manual operation and usually involves an <b>incision</b> (a cut). ${e('excision')} means removal by cutting.${fig('surgery-suffixes')}`),
          L("The three main suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-ectomy'), "removal (excision)", "hepatectomy: removal of liver tissue • adenectomy: removal of a gland"], [e('-tomy'), "cutting (incision)", "laparotomy: cutting into the abdomen • tracheotomy: cutting into the windpipe"], [e('-stomy'), "making an opening", "tracheostomy: opening into the windpipe • colostomy: opening of the colon"]])}${memo("ectomy: cutting “out” (ec-); stomy: a new “mouth” (stoma).")}`),
          M(`${e('<b>hepatectomy</b>')} means…`, ["removal of liver tissue", "cutting into the liver", "fixing the liver in place", "looking inside the liver"], 'hepat/o + -ectomy.'),
          M(`${e('<b>tracheostomy</b>')} means…`, ["making an opening in the windpipe", "incision into the windpipe", "removal of the windpipe", "repair of the windpipe"], 'trache/o + -stomy.'),
          P("Match each term to its meaning", [['laparotomy', "cutting into the abdomen"], ['colostomy', "opening of the colon"], ['adenectomy', "removal of a gland"], ['tracheotomy', "incision into the windpipe"]]),
          L("cutting instrument", `The suffix <b>‎-tome</b> means a cutting instrument: a <b>microtome</b> cuts very thin slices of tissue for the microscope and a <b>cystotome</b> cuts the bladder.${vs(['-tomy', "the act of cutting"], ['-tome', "cutting instrument"])}`),
          T("A microtome is an instrument for cutting thin slices of tissue.", true, "micro- (small) + -tome."),
          B("Cutting into the abdomen for surgery is called ___.", ['laparotomy', 'laparoscopy', 'colostomy'], 'lapar/o + -tomy.'),
          W("Build a word meaning “making an opening into the colon”", ['col/o', '-stomy'], ['-tomy', '-ectomy', 'trache/o'], 'col/o + -stomy = colostomy.'),
          S("Spell the key term for removal by cutting", 'excision', "ex- (out) + cision (cutting).", 'exc…'),
          N('m2r:tx')
        ]
      },
      {
        id: 'tx2', title: "Puncturing and looking inside", icon: '💉', items: [
          L('‎-centesis', `The suffix <b>‎-centesis</b> means puncturing and drawing out fluid (a tap):${tbl([["Term", "Meaning"], [e('thoracentesis'), "puncturing the chest and drawing out fluid"], [e('arthrocentesis'), "drawing fluid from a joint"], [e('celiocentesis'), "drawing fluid from the abdomen"], [e('paracentesis'), "puncturing a cavity to let fluid out"]])}${pearl("In Mary’s case, the swollen knee was drained by arthrocentesis and the pain eased.")}`),
          M(`${e('<b>arthrocentesis</b>')} means…`, ["puncturing a joint and drawing out fluid", "cutting into a joint", "reconstructing a joint", "looking inside a joint"], 'arthr/o + -centesis.'),
          M(`${e('<b>thoracentesis</b>')} means…`, ["drawing fluid from the chest with a needle", "cutting into the chest", "chest X-ray", "listening to the chest"], 'thorac/o + -centesis.'),
          L("Looking inside with an endoscope", `${wb('arthr/o', '-scopy')} = <b>arthroscopy</b>: examining the inside of a joint with an endoscope. ${e('laparoscopy')} shows the inside of the abdomen. The surgeon can also take samples during these endoscopies.${vs(['-centesis', "needle and drawing fluid"], ['-scopy', "endoscope and viewing"])}`),
          P("Match each term to its meaning", [['arthroscopy', "looking inside a joint"], ['arthrocentesis', "drawing fluid from a joint"], ['celiocentesis', "drawing fluid from the abdomen"], ['laparoscopy', "looking inside the abdomen"]]),
          T("Arthroscopy is a large incision into a joint.", false, "False; it is looking inside a joint with an endoscope. Cutting into a joint is arthrotomy."),
          L("stone", `${tbl([["Term", "Meaning"], [e('lithotomy'), "cutting into an organ to remove a stone"], [e('lithotripsy'), "crushing a stone (‎-tripsy)"]])}`),
          M(`${e('<b>lithotomy</b>')} means…`, ["incision to remove a stone", "crushing a stone", "stone formation", "viewing a stone"], 'lith/o + -tomy.'),
          B("Drawing fluid from the abdominal cavity with a needle is called ___.", ['paracentesis', 'laparotomy', 'lithotripsy'], 'para- + -centesis.'),
          W("Build a word meaning “drawing fluid from a joint”", ['arthr/o', '-centesis'], ['-scopy', '-desis', 'thorac/o'], 'arthr/o + -centesis = arthrocentesis.'),
          S("Spell the term for looking inside a joint with an endoscope", 'arthroscopy', 'arthr/o + -scopy.', 'arthro…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx3', title: "Repairing, Fixing, Crushing", icon: '🔧', items: [
          L("Five repair suffixes", `${fig('repair-suffixes')}${tbl([["suffix", "Meaning", "Example"], [e('-plasty'), "repair, plastic surgery, reconstruction", "rhinoplasty (nose) • gastroplasty • arthroplasty"], [e('-rrhaphy'), "repair by suturing", "herniorrhaphy: hernia repair"], [e('-pexy'), "fixing in place", "hysteropexy (uterus) • nephropexy (kidney)"], [e('-desis'), "fusing, binding", "pleurodesis (pleura) • arthrodesis (joint)"], [e('-tripsy'), "crushing", "lithotripsy (stone) • neurotripsy (nerve)"]])}`),
          M(`${e('<b>rhinoplasty</b>')} means…`, ["plastic surgery of the nose", "cutting into the nose", "removal of the nose", "inflammation of the nose"], 'rhin/o + -plasty.'),
          M(`${e('<b>nephropexy</b>')} means…`, ["surgical fixation of the kidney", "removal of the kidney", "crushing a kidney stone", "repairing the kidney with sutures"], 'nephr/o + -pexy (fixation).'),
          P("Match each suffix to its meaning", [['-plasty', "reconstruction"], ['-rrhaphy', "stitch"], ['-pexy', "fixing in place"], ['-desis', "fusing"]]),
          L("Two key words", `${vs(['fixation', "holding a structure in place; the suffix ‎-pexy"], ['suture', "sewing together; also the thread or seam of stitches; the suffix ‎-rrhaphy"])}${memo("pexy pins a part in place; rrhaphy repairs it with stitches.")}`),
          M(`${e('<b>arthrodesis</b>')} means…`, ["surgical fusion of a joint", "reconstructing a joint", "cutting into a joint", "drawing fluid from a joint"], 'arthr/o + -desis.'),
          T("lithotripsy means crushing a stone.", true, 'lith/o + -tripsy.'),
          B("Repairing a hernia with sutures is called ___.", ['herniorrhaphy', 'hernioplasty', 'hysteropexy'], 'herni/o + -rrhaphy.'),
          L("Review of the “Surgical Suffixes” level", recap(["‎-ectomy removal (excision) • ‎-tomy cutting (incision) • ‎-stomy opening • ‎-tome cutting instrument", "‎-centesis puncturing and drawing fluid: thoracentesis, arthrocentesis, paracentesis", "‎-scopy looking inside: arthroscopy, laparoscopy", "‎-plasty reconstruction • ‎-rrhaphy suture • ‎-pexy fixation • ‎-desis fusion • ‎-tripsy crushing"])),
          W("Build a word meaning “surgical fixation of the uterus”", ['hyster/o', '-pexy'], ['-plasty', '-desis', 'nephr/o'], 'hyster/o + -pexy = hysteropexy.'),
          S("Spell the term for surgical repair of a hernia", 'herniorrhaphy', "herni/o + -rrhaphy; double rr.", 'hernio…'),
          N('wb:tx')
        ]
      },
      /* ================= سطح ۲: اتاق عمل و ابزارها ================= */
      {
        id: 'tx4', title: "Why Surgery?", icon: '🎯', items: [
          L("Four goals", `${fig('surgery-purposes')}<b>resection</b> means removing part of a structure; a <b>surgeon</b> is a physician who specialises in surgery.`),
          P("Match each goal to its example", [['treatment', "removing an inflamed appendix"], ['diagnosis', 'biopsy'], ['restoration', "a colostomy or an organ transplant"], ['relief', "reducing the pain of an incurable patient"]]),
          L("tissue sample", `A <b>biopsy</b> (bx) means removing a small amount of tissue for the microscope.${fig('biopsy-ways')}${pearl("A liquid biopsy examines tumour DNA in the blood; its sample is easier to obtain.")}`),
          M(`${e('<b>biopsy</b>')} means…`, ["removing a small amount of tissue for microscopic study", "removing an entire organ", "Imaging", "drawing blood for a sugar test"], "bi/o (life) + -opsy (viewing)."),
          M("Taking a sample by drawing fluid out of a cyst with a needle…", ['needle aspiration', 'punch', 'liquid biopsy', 'resection'], 'aspiration = needle withdrawal of fluid.'),
          L("Urgent or elective?", `${vs(['emergency', "urgent; immediate danger such as severe trauma or a blockage"], ['elective', "elective; no serious consequences if it is delayed"])}<b>Palliative</b> surgery relieves pain or discomfort, for example shrinking a tumour to relieve pressure.`),
          T("An elective operation has no serious consequences if it is delayed.", true, 'optional surgery.'),
          M(`${e('<b>resection</b>')} means…`, ["removing part of a structure", "removing an entire organ", "suturing", "fixing in place"], 'Partial excision.'),
          B("Surgery that only relieves pain and does not cure the disease is ___.", ['palliative', 'elective', 'emergency'], 'palliative = relief, not cure.'),
          S("Spell the term for removing tissue for the microscope", 'biopsy', 'bi/o + -opsy.', 'bio…'),
          N('ab:tx')
        ]
      },
      {
        id: 'tx5', title: "Before and After Surgery", icon: '🛏️', items: [
          L("The patient’s path", `${fig('periop-path')}<b>preoperative</b> (preop): examination, informed consent and pre-admission tests. <b>postoperative</b> (postop): recovery from anaesthesia, follow-up and teaching home care.`),
          O("Put the patient’s path through surgery in order", ['preop', 'OR', 'PACU', 'postop'], "Before surgery, operating room, recovery, after surgery."),
          P("Match each abbreviation to its meaning", [['OR', "operating room"], ['PACU', "recovery after anaesthesia"], ['EBL', "estimated blood loss"], ['NPO', "nothing by mouth"]]),
          L("Anaesthesia and closing the wound", `Surgery usually needs <b>anesthesia</b>: loss of the sense of pain produced by drugs. After the operation, the incision is closed with <b>sutures</b> (stitches), <b>stapling</b>, adhesive strips or skin glue. A <b>ligature</b> means tying or binding, for example a vessel.`),
          M(`${e('<b>anesthesia</b>')} means…`, ["loss of the sense of pain", "a drug for fever", "stitching a wound", "recovery"], "an- (without) + esthesia (sensation)."),
          L("Energy tools", `${tbl([["Term", "Meaning"], [e('laser'), "a high-energy light beam for surgery and diagnosis"], [e('cautery'), "destroying tissue with heat, chemicals or electricity (electrocautery)"], [e('robotic surgery'), "surgery with robotic, computer-guided instruments; less invasive, with less bleeding"]])}`),
          M(`${e('<b>cautery</b>')} means…`, ["destroying tissue with heat, chemicals or electricity", "stitching a wound", "tying a vessel with thread", "looking inside a cavity"], 'cauterization.'),
          T("Robotic surgery usually causes less bleeding than conventional surgery.", true, 'less invasive, less bleeding.'),
          B("After surgery, the patient first goes to the ___ unit to wake up from anaesthesia.", ['PACU', 'ICU', 'ED'], 'postanesthesia care unit.'),
          S("Spell the term for loss of sensation induced by drugs", 'anesthesia', 'an- + esthesia.', 'anes…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx6', title: "Surgical instruments", icon: '🔪', items: [
          L("The six instruments of Figure 3-16", `${fig('instruments', '', "curette, forceps, hemostat, retractor, sound and scalpel")}${tbl([["Instrument", "Job"], [e('scalpel'), "surgical knife"], [e('forceps'), "grasping or extracting"], [e('hemostat'), "small clamp to stop bleeding from a vessel"], [e('retractor'), "holding back the wound edges and organs"], [e('curet'), "a spoon for scraping the wall of a cavity"], [e('sound'), "a rod for probing a cavity or canal"]])}`),
          M("This instrument is a sharp surgical blade. Its name is…", ['scalpel', 'forceps', 'curet', 'sound'], 'scalpel = surgical knife.', null, F('inst-scalpel', "cutting instrument")),
          M("This scissor-like instrument with a lock is used to clamp a bleeding vessel. Its name is…", ['hemostat', 'scissors', 'retractor', 'rongeur'], "hem/o + -stat (stopping).", null, F('inst-hemostat', "Bleeding-stopping clamp")),
          M("An instrument with a spoon-shaped tip for scraping the wall of a cavity…", ['curet', 'sound', 'forceps', 'trocar'], 'curet (curette) = spoon-shaped.', null, F('inst-curet', "Spoon-shaped tip")),
          M("This instrument holds the wound edge aside so the surgical field stays open. Its name is…", ['retractor', 'elevator', 'clamp', 'bougie'], 'retractor = separates a wound.', null, F('inst-retractor', "Wound spreader")),
          M("Two-pronged pincers for grasping tissue…", ['forceps', 'hemostat', 'scalpel', 'rasp'], 'forceps = holding or extracting.', null, F('inst-forceps', "Pincers")),
          M("A long, curved rod for probing a canal…", ['sound', 'curet', 'cannula', 'Gigli saw'], 'sound = instrument for exploring a cavity or canal.', null, F('inst-sound', "Probing rod")),
          L("Other instruments in Box 3-6", `${tbl([["Instrument", "Job"], [e('clamp'), "compressing tissue"], [e('scissors'), "cutting with two blades"], [e('elevator'), "lifting tissue or bone"], [e('rasp'), "surgical file"], [e('rongeur'), "bone-biting forceps"], [e('Gigli saw'), "flexible wire saw"], [e('bougie'), "a slender rod for probing and widening tubes"], [e('trocar • cannula'), "a sharp needle inside a tube; after the puncture, the cannula stays to let out fluid or air"]])}`),
          P("Match each instrument to its job", [['rasp', "file"], ['elevator', "lifting bone"], ['bougie', "widening a tube"], ['Gigli saw', "wire saw"]]),
          L("Review of the “Operating Room and Instruments” level", recap(["Goals of surgery: treatment, diagnosis (biopsy), restoration, relief (palliative) • emergency or elective • resection", 'preop → OR → PACU → postop • anesthesia • EBL • NPO', "Closing a wound: suture, stapling, ligature • laser, cautery, robotic surgery", "scalpel, forceps, hemostat, retractor, curet, sound, clamp, scissors, trocar, cannula, bougie, rasp, rongeur"])),
          S("Spell the term for the surgical knife", 'scalpel', 'scal-pel.', 'scal…'),
          N('t2f:tx')
        ]
      },
      /* ================= سطح ۳: درمان‌ها و طب مکمل ================= */
      {
        id: 'tx7', title: "Tubes and Irrigation", icon: '🧴', items: [
          L("Catheter", `A <b>catheter</b> is a thin tube passed into a cavity, organ or vessel to draw fluid out or put it in. Teaching figure shows continuous <b>irrigation</b> (washing) of the bladder with a catheter.${fig('irrigation-img', "Continuous bladder irrigation with a catheter")}`),
          M("In this picture, fluid from the upper bag enters the bladder through a catheter and returns to the lower bag. This is…", ['irrigation', 'paracentesis', 'cautery', 'resection'], 'irrigation = flushing with a fluid.', null, F('irrigation-img', "Washing the bladder")),
          L("Irrigation and drainage", `${fig('tubes-tools')}${tbl([["Term", "Meaning"], [e('lavage'), "washing out a cavity"], [e('drain'), "a device that lets discharge out of a wound or cavity; such as Penrose and Jackson–Pratt"], [e('clysis'), "putting fluid into the body by a route other than the mouth"], [e('normal saline'), "a salt solution compatible with cells (NS)"]])}`),
          P("Match each term to its meaning", [['lavage', "washing a cavity"], ['drain', "letting fluid flow out of a wound"], ['clysis', "putting fluid in"], ['catheter', "thin tube"]]),
          M(`${e('<b>normal saline</b>')} means…`, ["a salt solution compatible with living cells", "distilled water", "sugar solution", "blood"], "NaCl solution; NS or PSS."),
          T("I&D means incision and drainage, for example of an abscess.", true, 'incision and drainage.'),
          M("A cannula and a trocar are used together. What is the trocar’s role?", ["Puncturing the cavity; then it is pulled out", "Staying in place to let fluid out", "suturing", "Stopping bleeding"], "The trocar is sharp; the cannula stays."),
          B("A tube running from an arm vein to the superior vena cava is a ___ catheter.", ['PICC', 'NPO', 'PACU'], 'peripherally inserted central catheter.'),
          W("Build a word meaning “drawing fluid from a cavity”", ['para-', '-centesis'], ['-tomy', '-stomy', 'celi/o'], 'para- + -centesis = paracentesis.'),
          S("Spell the term for a thin tube passed into the body", 'catheter', 'cath-e-ter.', 'cath…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx8', title: "Treatment, Prognosis, Prevention", icon: '📈', items: [
          L("Treatment and outcome", `After diagnosis, <b>therapy</b> (treatment) begins: counselling, drugs, surgery, radiation, physical therapy, occupational therapy or a combination. During treatment, the <b>prognosis</b> (the predicted course and outcome of the disease) is assessed.${vs(['diagnosis', "identifying the disease"], ['prognosis', "predicting the outcome of a disease"])}`),
          M(`${e('<b>prognosis</b>')} means…`, ["predicting the course and outcome of a disease", "identifying the cause of a disease", "preventing disease", "The cause of disease"], "pro- (before) + gnosis (knowledge)."),
          L("Relief and prevention", `${vs(['palliative therapy', "relief without aiming for a cure; such as reducing the pain of an incurable patient"], ['prophylaxis', "preventing disease"])}${memo("palliative comes from Latin pallium, a cloak: it covers the pain but does not remove the disease.")}`),
          M(`${e('<b>prophylaxis</b>')} means…`, ["preventing disease", "pain relief", "definitive cure", "expected outcome (prognosis)"], 'Prevention of disease.'),
          L("Cancer: grade and stage", `Cancer physicians classify tumours in two ways:${fig('grade-stage')}Common cancer treatments: surgery, <b>radiation therapy</b> (RATx), <b>chemotherapy</b> (treatment with chemicals) and <b>immunotherapy</b> (stimulating or suppressing the immune system). When no sign of disease remains, the cancer is in <b>remission</b>.`),
          P("Match each term to its meaning", [['grading', "examining how misshapen the cells are"], ['staging', "how far the tumour has spread"], ['chemotherapy', "treatment with chemicals"], ['immunotherapy', "treatment through the immune system"]]),
          M("In TNM, what does the letter N stand for?", ["Regional lymph nodes", "primary tumour", "distant metastasis", "Grade number"], 'tumor, nodes, metastases.'),
          T("Grading is based on cell changes under the microscope.", true, 'Grades I to IV.'),
          B("Tumours are staged with the ___ system.", ['TNM', 'IPPA', 'TPR'], 'tumor, nodes, metastases.'),
          S("Spell the term for the predicted outcome of a disease", 'prognosis', 'pro- + gnosis.', 'progn…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx9', title: "complementary and alternative medicine", icon: '🌿', items: [
          L("The whole person", `Over the last century the main causes of death have shifted from infectious to chronic diseases, and many people have turned to complementary therapies. <b>Holistic health care</b> sees the person as a “whole”: body, emotions, society and spirit, and stresses maintaining health.${fig('alt-med')}`),
          L("Four philosophies of treatment", `${tbl([["Term", "Meaning"], [e('osteopathy'), "a body with a normal structure overcomes disease; correcting faulty body structure"], [e('naturopathy'), "helping the body heal itself with a healthy lifestyle"], [e('homeopathy'), "highly diluted remedies combined with healthy habits (home/o: same)"], [e('chiropractic'), "focus on the nervous system; manipulating the spine (cheir: hand)"]])}`),
          P("Match each philosophy to its meaning", [['osteopathy', "correcting body structure"], ['naturopathy', "healthy lifestyle"], ['homeopathy', "highly diluted remedies"], ['chiropractic', "manipulating the spine"]]),
          L("Methods", `${tbl([["Method", "Description"], [e('acupuncture'), "fine needles at specific points; with finger pressure instead it is acupressure"], [e('biofeedback'), "learning to control involuntary responses through electronic monitoring of the body"], [e('massage'), "kneading the body for relaxation and circulation"], [e('meditation'), "calming the mind through focus and breath control"]])}`),
          M(`${e('<b>biofeedback</b>')} means…`, ["learning to control involuntary responses through electronic monitoring", "needling at specific points", "herbal medicine", "manipulating the spine"], "bi/o (life) + feedback."),
          M("An ancient Chinese method using fine needles at specific points…", ['acupuncture', 'acupressure', 'chiropractic', 'massage'], "acu (needle) + puncture."),
          T("NCCAM is a centre at the US NIH that studies complementary and alternative therapies.", true, 'National Center for Complementary and Alternative Medicine.'),
          L("Review of the “Treatments and Complementary Medicine” level", recap(["catheter, irrigation, lavage, drain, clysis, normal saline • I&D • PICC • trocar and cannula", "therapy treatment • prognosis predicted outcome • palliative relieving • prophylaxis prevention", "grading cell grade (I–IV) • staging spread with TNM • chemotherapy, immunotherapy, RATx • remission", "holistic • osteopathy, naturopathy, homeopathy, chiropractic • acupuncture, biofeedback, massage, meditation • CAM"])),
          B("Care that sees the person, with body, mind and society, as one whole is ___.", ['holistic', 'palliative', 'elective'], 'holistic health care.'),
          S("Spell the term for treatment with fine needles at specific points", 'acupuncture', 'acu + puncture.', 'acu…'),
          N('ab:tx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* تیمار — دنیای ۶: دارو و نسخه
 * دارو و نسخه، نام ژنریک و تجاری، منابع اطلاعات دارویی، عارضه و تداخل، تحمل و وابستگی، داروی گیاهی،
 * راه‌های تجویز (جعبه ۳-۷)، شکل‌های دارو (جعبه ۳-۸)، داروهای تزریقی (جعبه ۳-۹)، اجزای واژه دارو (جدول ۳-۹) و اختصارهای نسخه.
 * منابع: فصل Disease and Treatment (دارو، شکل‌های ۳-۲۰ تا ۳-۲۴، اختصارهای دارو و دوز، کیس ۳-۲).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'rx', sym: 'Rx', name: "Drugs and Prescriptions", short: "Drug", sub: "Drugs and prescriptions, generic and brand names, side effects and interactions, routes of administration and injection angles, drug forms, drug word parts and abbreviations from bid to prn",
    color: '#7950F2', dark: '#5F3DC4', light: '#F3F0FF',
    levels: ["Drugs and safety", "Drug routes and forms", "The language of prescriptions"],
    gens: EA.genIds('rx'),
    lessons: [
      /* ================= سطح ۱: دارو و ایمنی ================= */
      {
        id: 'rx1', title: "What Is a Drug?", icon: '💊', items: [
          L("Drugs and prescriptions", `A <b>drug</b> is a substance that changes how the body works. Many drugs are <b>over-the-counter</b> (OTC) and sold without a prescription; others need a <b>prescription</b> (Rx): a written, signed order with directions for use. In the US, the FDA approves the safety and <b>efficacy</b> of every drug before it is sold.${tbl([["Term", "Meaning"], [e('OTC'), "sold without a prescription"], [e('Rx'), "prescription; drug; treatment"], [e('efficacy'), "effectiveness"], [e('FDA'), "US Food and Drug Administration"]])}`),
          M(`${e('<b>OTC</b>')} means a drug that…`, ["is sold without a prescription", "is injected only in hospital", "is made from plants", "is banned"], 'over-the-counter.'),
          M(`${e('<b>efficacy</b>')} means…`, ["effectiveness; the power to produce the desired result", "side effect", "the dose of the drug", "the price of the drug"], 'The power to produce a specific result.'),
          L("Generic or brand?", `${vs(['generic name', "non-proprietary name; a simplified chemical name; written in lower case: acetaminophen"], ['brand name', "registered trade name; capitalised: Tylenol"])}${tbl([['brand name', 'generic name'], [e('Tylenol'), e('acetaminophen') + ' (APAP)'], [e('Prozac'), e('fluoxetine')], [e('Motrin, Advil'), e('ibuprofen')]])}${memo("Generic is for the whole “group” and written small; Brand is “big” and owned by one company.")}`),
          T("Motrin and Advil are two brand names for one generic drug, ibuprofen.", true, "Different companies sell the same drug under different names."),
          P("Match each brand name to its generic name", [['Tylenol', 'acetaminophen'], ['Prozac', 'fluoxetine'], ['Advil', 'ibuprofen']]),
          L("Sources of drug information", `${tbl([["Source", "Description"], [e('USP'), "United States Pharmacopeia: drug formulas and quality standards"], [e('ASHP'), "American Society of Health-System Pharmacists"], [e('PDR'), "Physicians’ Desk Reference; information from manufacturers"]])}Another excellent source is the <b>pharmacist</b>. ${e('pharmacy')} is both the science of preparing drugs and the place where it is done; ${e('pharmacology')} means the study of drugs.`),
          M("Which one is a generic name?", ['acetaminophen', 'Tylenol', 'Prozac', 'Motrin'], "A generic name is written in lower case."),
          B("The study of drugs and their effects is ___.", ['pharmacology', 'pharmacy', 'toxicology'], 'pharmac/o + -logy.'),
          S("Spell the term for a signed written order for a drug", 'prescription', "pre- (before) + script (writing) + -ion.", 'prescr…'),
          N('ab:rx')
        ]
      },
      {
        id: 'rx2', title: "Side Effects and Interactions", icon: '⚠️', items: [
          L("Unwanted effects", `A <b>side effect</b> is an effect of treatment unrelated to, or an extension of, its intended purpose; usually unwanted. A <b>contraindication</b> is a reason not to give a drug to a person: diseases, other drugs, sensitivity or family history.${tbl([["Term", "Meaning"], [e('side effect'), "side effect"], [e('contraindication'), "contraindication (contra-: against)"], [e('anaphylaxis'), "severe allergic reaction; shortness of breath and falling blood pressure"]])}`),
          M(`${e('<b>contraindication</b>')} means…`, ["a reason that makes using a drug undesirable or dangerous", "the drug’s therapeutic effect", "the dose of the drug", "brand name"], "contra- (against) + indication."),
          M(`${e('<b>anaphylaxis</b>')} means…`, ["a severe allergic reaction that can be fatal", "a mild side effect", "tolerance", "synergy of two drugs"], 'An extreme allergic reaction.'),
          L("Interactions of two drugs", `${fig('drug-interactions')}${vs(['synergy • potentiation', "two drugs together having a greater effect than either alone"], ['antagonist', "a substance that counteracts a drug’s effect"])}${pearl("In Chelsea’s case, lorazepam given before surgery works in synergy with the anaesthetic drug and makes induction smoother.")}`),
          P("Match each term to its meaning", [['synergy', "drugs boosting each other’s effect"], ['antagonist', "opposing effect"], ['side effect', "unwanted extra effect of a drug"], ['anaphylaxis', "severe allergy"]]),
          T("potentiation means two drugs act more strongly together.", true, 'Increased potency created by two drugs acting together.'),
          M("A drug that blocks the effect of another drug…", ['antagonist', 'synergist', 'analgesic', 'generic'], 'antagonist = opposes the action of a drug.'),
          B("Hives after taking a drug are a sign of an ___ reaction.", ["allergic", "therapeutic", "generic"], "Signs of allergy such as hives and rashes."),
          W("Build a word meaning “working together”", ['syn-', 'erg/o', '-y'], ['anti-', 'contra-', 'chron/o'], 'syn- + erg/o + -y = synergy.'),
          S("Spell the term for a reason not to give a drug", 'contraindication', 'contra- + indication.', 'contra…'),
          N('t2f:rx')
        ]
      },
      {
        id: 'rx3', title: "Tolerance, Dependence, Herbal Medicine", icon: '🌿', items: [
          L("Long-term use", `Drugs acting on the central nervous system may lead to <b>substance dependence</b> (psychological or physical). With repeated use, <b>tolerance</b> develops: the same dose has less effect and the dose must be raised. Stopping or cutting down the drug suddenly causes <b>withdrawal</b>.${vs(['tolerance', "same dose, less effect"], ['withdrawal', "symptoms after stopping the drug"])}`),
          M(`${e('<b>tolerance</b>')} means…`, ["the same dose no longer has its earlier effect", "tolerates the drug well, with no side effects", "severe allergy", "synergy"], 'loss of effectiveness with chronic use.'),
          T("Withdrawal is the symptoms that appear after a drug is stopped suddenly.", true, 'abrupt cessation or reduction of a drug.'),
          M("A chronic, compulsive need for a drug despite the harm it causes…", ['substance dependence', 'tolerance', 'efficacy', 'prophylaxis'], 'psychological or physical.'),
          L("herbal medicine", `<b>Herbal medicine</b> or <b>phytomedicine</b> (phyt/o: plant) is treatment with plants. Concerns: purity, safety, concentration, efficacy and interactions with drugs. The FDA does not test herbal products, so patients should tell their physician they are taking them. The US Office of Dietary Supplements (ODS) coordinates research.`),
          M(`${e('<b>phytomedicine</b>')} means…`, ["herbal medicine", "chemical drug", "injectable drug", "over-the-counter medicine"], "phyt/o = plant."),
          P("Match each term to its meaning", [['tolerance', "same dose, weaker effect"], ['withdrawal', "symptoms on suddenly stopping a drug"], ['phytomedicine', "plant medicine"], ['efficacy', "effectiveness"]]),
          T("The FDA tests all herbal products before they are sold.", false, "False; the FDA does not test or approve herbal products."),
          L("Review of the “Drugs and Safety” level", recap(["drug • OTC without prescription • Rx prescription • efficacy effectiveness • FDA", "generic name lower case (acetaminophen) • brand name capitalised (Tylenol) • USP, ASHP, PDR, pharmacist", "side effect • contraindication • anaphylaxis • synergy and potentiation • antagonist", 'substance dependence • tolerance • withdrawal • herbal medicine = phytomedicine • ODS'])),
          B("When a patient needs a higher dose for the same effect, they have developed ___.", ['tolerance', 'withdrawal', 'synergy'], 'tolerance.'),
          S("Spell the term for needing a higher dose for the same effect", 'tolerance', 'toler + -ance.', 'toler…'),
          N('d2t:rx')
        ]
      },
      /* ================= سطح ۲: راه‌ها و شکل‌های دارو ================= */
      {
        id: 'rx4', title: "Mouth, Under the Tongue, Skin", icon: '👅', items: [
          L("Absorption routes", `${fig('routes-body')}${tbl([["Route", "Meaning"], [e('oral • po'), "by mouth (per os)"], [e('sublingual • SL'), "under the tongue"], [e('rectal'), "through the rectum by suppository or enema"], [e('topical'), "on the skin surface"], [e('transdermal'), "absorbed through the skin, such as a patch"]])}<b>absorption</b> means a drug entering the bloodstream through the digestive tract or another membrane.`),
          M(`${e('<b>sublingual</b>')} means…`, ["under the tongue", "by mouth and swallowed", "on the skin", "through the rectum"], "sub- (under) + lingu/o (tongue) + -al."),
          M(`${e('<b>transdermal</b>')} means…`, ["absorbed through the skin, such as a patch", "injection under the skin", "on the skin surface without absorption", "inhaled"], "trans- (through) + derm/o."),
          L("Inhalation and instillation", `<b>inhalation</b>: a drug entering through the respiratory tract, such as an aerosol or nebulizer; <b>instillation</b>: dropping or slowly pouring a liquid into a cavity or onto a surface, such as ear and eye drops.${fig(['inhaler-img', 'eyedrops-img'], ["inhalation with a metered-dose inhaler", "instillation of eye drops into the conjunctival sac"])}`),
          M("In this picture, the patient breathes in the drug with a metered-dose inhaler. This route is…", ['inhalation', 'instillation', 'topical', 'sublingual'], 'inhalation through the respiratory system.', null, F('inhaler-img', "Metered-dose inhaler")),
          M("Dropping liquid into the lower conjunctival sac of the eye…", ['instillation', 'inhalation', 'injection', 'absorption'], 'instillation = liquid dropped slowly.', null, F('eyedrops-img', "Eye drops")),
          P("Match each abbreviation or route to its meaning", [['po', "oral"], ['SL', "under the tongue"], ['topical', "on the skin"], ['rectal', "given through the rectum"]]),
          T("po comes from the Latin per os, meaning “by mouth”.", true, 'po, PO = by mouth.'),
          B("A painkiller given as a skin patch uses the ___ route.", ['transdermal', 'sublingual', 'rectal'], 'trans- + derm/o + -al.'),
          S("Spell the term for under the tongue", 'sublingual', 'sub- + lingu/o + -al.', 'sub…'),
          N('t2f:rx')
        ]
      },
      {
        id: 'rx5', title: "Injections", icon: '💉', items: [
          L("Injection routes", `An <b>injection</b> is given with a needle and syringe, and the injection routes are called <b>parenteral</b> (apart from the digestive tract).${tbl([["Route", "Meaning"], [e('intradermal • ID'), "into the skin"], [e('subcutaneous • SC, SQ'), "under the skin; hypodermic"], [e('intramuscular • IM'), "into a muscle"], [e('intravenous • IV'), "into the vein"]])}`),
          L("Needle angle", `${fig(['injection-img', 'injection-angles'], ["Teaching figure", "the deeper, the steeper the angle"])}${memo("90 - 45 - 15: muscle, subcutaneous, skin; from deep to shallow.")}`),
          M("At what angle is an intramuscular (IM) injection given?", ["90 degrees", "45 degrees", "15 degrees", "5 degrees"], 'IM 90°.', null, F('injection-img', "Injection angles")),
          M("A needle at a 15-degree angle enters only the skin layer. This injection is…", ['ID', 'SC', 'IM', 'IV'], 'intradermal.'),
          P("Match each abbreviation to its meaning", [['ID', "into the skin"], ['SC', "subcutaneously"], ['IM', "into a muscle"], ['IV', "into a vein"]]),
          L("The spinal cord, and fluid under the skin", `${tbl([["Route", "Meaning"], [e('epidural'), "injection into the space between the spinal coverings and the spine"], [e('intrathecal'), "injection through the coverings into the spinal fluid (spinal)"], [e('hypodermoclysis'), "slow injection of a solution under the skin; an alternative to an IV drip"]])}${pearl("Epidural anaesthesia is common in childbirth: the drug is injected into the epidural space, outside the dura mater.")}`),
          M(`${e('<b>intrathecal</b>')} means an injection…`, ["through the coverings into the spinal fluid", "into the vein", "under the skin", "into a joint"], "intra- + thec/o (sheath) + -al."),
          T("All injection routes are called parenteral.", true, 'Routes by injection.'),
          W("Build a word meaning “into a vein”", ['intra-', 'ven/o', '-ous'], ['sub-', 'cutane/o', 'trans-'], 'intra- + ven/o + -ous = intravenous.'),
          S("Spell the term for beneath the skin", 'subcutaneous', 'sub- + cutane/o + -ous.', 'subcut…'),
          N('m2r:rx')
        ]
      },
      {
        id: 'rx6', title: "Drug Forms and Containers", icon: '🧴', items: [
          L("Liquid, semisolid, solid", `${fig('drug-forms')}${pearl("A suspension is solid particles suspended in a liquid and must be shaken before use; that is why it is labelled “Shake well”.")}`),
          P("Match each form to its description", [['elixir', "sweet, alcoholic liquid taken by mouth"], ['suspension', "must be shaken"], ['tincture', "drug in an alcoholic solution"], ['aqueous solution', "dissolved in water"]]),
          M(`${e('<b>suppository</b>')} means…`, ["suppository; melts in a body opening", "lozenge", "ointment", "gelatin capsule"], 'A substance that melts easily when inserted into a body opening.'),
          M(`${e('<b>ointment</b>')} means…`, ["ointment; a drug in a base that stays on the skin", "liquid for the skin", "spray", "dissolved in water"], 'ung = ointment.'),
          L("Containers for injectable drugs", `${tbl([["Term", "Meaning"], [e('ampule'), "a small sealed glass or plastic container for a sterile solution"], [e('vial'), "a small bottle with a stopper"], [e('syringe'), "an instrument for injecting fluid"], [e('bolus'), "a concentrated amount of drug injected quickly into a vessel"]])}${fig(['ampule-vial', 'syringe-parts'], ["ampule (top left), vial (top right), syringe", "Parts of a syringe and needle"])}`),
          M("In the figure of the syringe parts, the part you press to push the liquid out…", ['plunger', 'barrel', 'bevel', 'hub'], "plunger = piston; barrel = body.", null, F('syringe-parts', "Parts of a syringe")),
          L("Central catheter", `A <b>catheter</b> is a thin tube passed into a cavity, organ or vessel. A <b>PICC</b> (peripherally inserted central catheter) enters through an arm vein and reaches the superior vena cava; it is used for long-term drugs and intravenous feeding.${fig('picc-img', "The path of a PICC from an arm vein to the superior vena cava")}`),
          T("A bolus means a slow, drop-by-drop injection of a drug.", false, "False; a bolus is a concentrated amount injected quickly."),
          L("Review of the “Routes and Forms” level", recap(["absorption: po by mouth, SL under the tongue, rectal, topical, transdermal • inhalation • instillation", "parenteral: ID 15°, SC 45°, IM 90°, IV • epidural, intrathecal, hypodermoclysis", "liquid: aerosol, solution, elixir, emulsion, lotion, suspension, tincture • semisolid: cream, ointment", "solid: capsule, lozenge, suppository, tablet • ampule, vial, syringe, bolus, PICC"])),
          B("A tablet you suck on, such as a cough drop, is a ___.", ['lozenge', 'capsule', 'suppository'], 'lozenge = dissolved in the mouth.'),
          S("Spell the term for the instrument for injecting fluid", 'syringe', "sy-ringe: “sih-RINJ”.", 'syr…'),
          N('f2t:rx')
        ]
      },
      /* ================= سطح ۳: زبان نسخه ================= */
      {
        id: 'rx7', title: "Drug Word Parts", icon: '🧩', items: [
          L("Prefixes and suffixes", `${fig('drug-parts')}${tbl([["Part", "Meaning", "Example"], [e('anti-'), "against", "antiemetic (against vomiting) • antipyretic (against fever)"], [e('-lytic'), "dissolving, reducing", "thrombolytic (clot-dissolving) • mucolytic (mucus-thinning) • anxiolytic (anxiety-relieving)"], [e('-mimetic'), "mimicking", 'sympathomimetic'], [e('-tropic'), "acting on", "psychotropic (mind) • chronotropic (rhythm)"]])}`),
          M(`${e('<b>antipyretic</b>')} means…`, ["fever reducer", "against pus", "against pain", "drug against vomiting"], "anti- + pyret/o (fever) + -ic."),
          M(`${e('<b>thrombolytic</b>')} means…`, ["dissolving a blood clot", "clot-forming", "widening a vessel", "against fever"], "thromb/o (clot) + -lytic."),
          P("Match each term to its meaning", [['antiemetic', "drug against vomiting"], ['mucolytic', "mucus thinner"], ['psychotropic', "acting on the mind"], ['analgesic', "painkiller"]]),
          L("Drug roots", `${tbl([["root", "Meaning", "Example"], [e('chem/o'), "chemical", 'chemotherapy'], [e('hypn/o'), "sleep", "hypnosis, hypnotic (sleep-inducing)"], [e('narc/o'), "stupor, numbness", "narcotic (opioid)"], [e('pharm, pharmac/o'), "drug", "pharmacy, pharmacology"], [e('vas/o'), "vessel", 'vasodilation'], [e('tox/o'), "poison", "toxicity (poisonousness)"]])}${vs(['contra-', "against, opposite: contraceptive (preventing pregnancy)"], ['counter-', "against: countertransport"])}`),
          M(`A ${e('<b>hypnotic</b>')} is a drug that…`, ["induces sleep", "takes away pain", "brings down fever", "causes anxiety"], "hypn/o = sleep."),
          M("In case 3-2, Ativan is given for nervousness. So it is a… drug.", ['anxiolytic', 'antiemetic', 'bronchodilator', 'thrombolytic'], "anxi/o (anxiety) + -lytic."),
          T("sympathomimetic means a drug that mimics the effect of the sympathetic nervous system.", true, 'sympath/o + -mimetic.'),
          B("A drug that prevents vomiting is ___.", ['antiemetic', 'antipyretic', 'narcotic'], 'anti- + emet/o + -ic.'),
          W("Build a word meaning “mucus thinner”", ['muc/o', '-lytic'], ['-mimetic', 'thromb/o', '-tropic'], 'muc/o + -lytic = mucolytic.'),
          S("Spell the term for a drug that reduces fever", 'antipyretic', 'anti- + pyret/o + -ic.', 'anti…'),
          N('r2m:rx')
        ]
      },
      {
        id: 'rx8', title: "Timing of Doses", icon: '⏰', items: [
          L("How many times a day?", `Most dose-timing abbreviations come from Latin:${fig('dose-clock')}${tbl([["abbreviation", "Meaning", "Latin"], [e('bid, b.i.d.'), "twice a day", 'bis in die'], [e('tid, t.i.d.'), "three times a day", 'ter in die'], [e('qid, q.i.d.'), "four times a day", 'quater in die'], [e('qh • q4h'), "every hour • every 4 hours", 'quaque hora'], [e('qam'), "every morning", 'quaque ante meridiem']])}`),
          P("Match each abbreviation to its meaning", [['bid', "twice a day"], ['tid', "three times a day"], ['qid', "four times a day"], ['qam', "every morning"]]),
          M("“1 tab tid” means how many tablets in one day?", ["3", "2", "4", "1"], "tid = ter in die = three times."),
          L("Food, sleep and need", `${tbl([["abbreviation", "Meaning", "Latin"], [e('ac'), "before meals", 'ante cibum'], [e('pc'), "after meals", 'post cibum'], [e('hs'), "at bedtime", 'hora somni'], [e('prn'), "as needed", 'pro re nata'], [e('ad lib'), "as desired", 'ad libitum']])}${memo("a = ante (before) and p = post (after): ac before meals and pc after meals.")}`),
          M(`${e('<b>prn</b>')} means…`, ["as needed", "immediately", "every night", "before meals"], 'pro re nata.'),
          M("Which abbreviation is used for a sleeping pill taken at bedtime?", ['hs', 'ac', 'pc', 'bid'], 'hora somni.'),
          T("ac means after meals.", false, "False; ac is before meals (ante cibum) and pc after meals (post cibum)."),
          O("Put these schedules in order from fewest to most doses a day", ['qam', 'bid', 'tid', 'qid'], "1, 2, 3 and 4 times."),
          B("The order “every 6 hours” is written with the abbreviation ___.", ['q6h', 'qid', 'qh'], "q_h: every _ hours."),
          S("Spell the abbreviation for twice a day", 'bid', 'bis in die.', 'b…'),
          N('ab:rx')
        ]
      },
      {
        id: 'rx9', title: "Reading a prescription", icon: '📜', items: [
          L("The parts of a medication order", `${fig('rx-anatomy')}Every medication order has five parts: the <b>drug name</b>, the <b>dose</b>, the <b>route</b>, the <b>frequency</b> and sometimes a <b>condition</b>, such as prn.`),
          O("Put the parts of “Ativan 1 mg po bid prn” in order", ["Drug names", "amount", "Route", "how often", "Condition"], 'Ativan • 1 mg • po • bid • prn.'),
          L("Units and forms", `${tbl([["abbreviation", "Meaning"], [e('mg / mcg'), "milligram / microgram"], [e('mL'), "millilitres"], [e('U / IU'), "unit / international unit"], [e('cap • tab'), "capsule • tablet"], [e('susp • elix • tinct'), "suspension • elixir • tincture"], [e('supp • ung'), "suppository • ointment"]])}`),
          M(`${e('<b>mcg</b>')} means…`, ["micrograms", "milligrams", "millilitres", "international unit"], 'mcg = microgram.'),
          P("Match each abbreviation to its meaning", [['tab', "tablet"], ['cap', "capsule"], ['supp', "suppository"], ['ung', "ointment"]]),
          L("Other prescription instructions", `${tbl([["abbreviation", "Meaning"], [e('c̄ / s̄'), "with / without"], [e('ss'), "one half"], [e('DAW'), "dispense as written (no substitution)"], [e('DS'), "double strength"], [e('SR • SA • LA'), "sustained release • sustained action • long-acting"], [e('NSAID'), "non-steroidal anti-inflammatory drug"], [e('APAP / ASA'), "acetaminophen / aspirin"]])}${pearl("DAW on a prescription means the pharmacist must not substitute a generic for the brand name.")}`),
          M("In case 3-2: Flovent one 50 mcg puff in each nostril, b.i.d. How many micrograms in one day?", ["200", "100", "250", "500"], "50 × 2 nostrils × 2 times = 200."),
          M("“Arnica 3 tabs SL t.i.d.”: how many tablets in one day?", ["9", "6", "12", "3"], "3 tablets × 3 times."),
          T("DS means double strength.", true, 'DS = double strength.'),
          L("Review of the “Language of Prescriptions” level", recap(["anti-, contra-, counter- • ‎-lytic, ‎-mimetic, ‎-tropic • chem/o, hypn/o, narc/o, pharmac/o, vas/o, tox/o", "bid 2 • tid 3 • qid 4 • qh and q4h • qam • ac before and pc after meals • hs bedtime • prn as needed • ad lib", "Prescription: drug name + dose + route + frequency + condition • mg, mcg, mL, U", "cap, tab, susp, elix, tinct, supp, ung • c̄ and s̄ • ss • DAW • DS • SR • NSAID • APAP • ASA"])),
          S("Spell the common name of acetylsalicylic acid", 'aspirin', 'ASA = acetylsalicylic acid.', 'asp…'),
          N('ab:rx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* تیمار — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: "Snippy", title: "The Word Breaker", shape: 'puzzle', color: '#748FFC', acc: ['sparkle'], bio: "Breaks every disease word into root and suffix: path/o disease, py/o pus, scler/o hard and tox/o poison; and reads the meaning from the end." },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Itis", title: "Master of Disease Suffixes", shape: 'flame', color: '#5C7CFA', acc: ['glasses'], bio: "Knows the difference between ‎-itis (inflammation), ‎-megaly (enlargement), ‎-rhage (heavy bleeding) and ‎-rhexis (rupture), and never forgets the double rr." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Steno", title: "Decoder of Suffix Words", shape: 'tube', color: '#4C6EF5', acc: ['crown'], bio: "Puts stenosis (narrowing), ectasia (widening), malacia (softening), ptosis (drooping) and sclerosis (hardening) onto any organ." },
    { id: 'mc-0', w: 'mc', lv: 0, name: "Coco", title: "The Round Cluster Bacterium", shape: 'cocci', color: '#69DB7C', acc: ['sparkle'], bio: "Round, with friends who form either bunches of grapes (staphylococci) or chains (streptococci); turns purple in the Gram stain (Gm+)." },
    { id: 'mc-1', w: 'mc', lv: 1, name: "Bacillo", title: "rod-shaped bacterium", shape: 'bacillus', color: '#40C057', acc: ['glasses'], bio: "A rod; its cousins the vibrio are curved and the spirochete corkscrew-shaped. Knows that nosocomial means an infection caught in hospital." },
    { id: 'mc-2', w: 'mc', lv: 2, name: "Viri", title: "The Parasite Inside the Cell", shape: 'virus', color: '#2F9E44', acc: ['crown'], bio: "Multiplies only inside a living cell; knows endemic, epidemic and pandemic by heart and can tell a fungus, a protozoon and a helminth apart." },
    { id: 'rs-0', w: 'rs', lv: 0, name: "Phago", title: "The Microbe Eater", shape: 'blob', color: '#FFA94D', acc: ['sparkle'], bio: "A greedy white blood cell that swallows and digests bacteria (phagocytosis); what is left of its work is pus." },
    { id: 'rs-1', w: 'rs', lv: 1, name: "Dropsy", title: "The Swelling Drop", shape: 'drop', color: '#F76707', acc: ['glasses'], bio: "Knows the four signs of inflammation: heat, pain, redness and swelling; and knows where edema, effusion and ascites each collect fluid." },
    { id: 'rs-2', w: 'rs', lv: 2, name: "Immuno", title: "The Immune Guardian", shape: 'shield', color: '#E8590C', acc: ['crown'], bio: "Knows innate and acquired immunity, tells a benign mass from a malignant one and knows that hernia and prolapse mean pushing out and dropping down." },
    { id: 'dx-0', w: 'dx', lv: 0, name: "Stethy", title: "The IPPA Examiner", shape: 'stetho', color: '#3BC9DB', acc: ['sparkle'], bio: "Examines in order: looking (inspection), feeling (palpation), tapping (percussion) and listening (auscultation)." },
    { id: 'dx-1', w: 'dx', lv: 1, name: "Thermo", title: "Guardian of the Vital Signs", shape: 'thermo', color: '#15AABF', acc: ['glasses'], bio: "Records TPR and BP, reads cyanosis and pallor from the colour of the skin and knows the difference between a sign (objective finding) and a symptom (the patient’s complaint)." },
    { id: 'dx-2', w: 'dx', lv: 2, name: "Rady", title: "The Imaging Reader", shape: 'monitor', color: '#1098AD', acc: ['crown'], bio: "Tells radiographs, CT, MRI, PET and ultrasound apart and knows that ‎-graph is the instrument, ‎-graphy the method and ‎-gram the image itself." },
    { id: 'tx-0', w: 'tx', lv: 0, name: "Ectomy", title: "Master of Surgical Suffixes", shape: 'glove', color: '#F06595', acc: ['sparkle'], bio: "‎-ectomy removes, ‎-tomy cuts, ‎-stomy makes an opening, ‎-plasty reconstructs and ‎-rhaphy sutures." },
    { id: 'tx-1', w: 'tx', lv: 1, name: "Hemo", title: "Operating Room Assistant", shape: 'clipboard', color: '#E64980', acc: ['glasses'], bio: "Can tell a scalpel, forceps, retractor and curet apart, and reads EBL, PACU and I&D on the operating sheet." },
    { id: 'tx-2', w: 'tx', lv: 2, name: "Holis", title: "The Sage of Complementary Medicine", shape: 'heart', color: '#C2255C', acc: ['crown'], bio: "Sees the patient as a whole (holistic); knows acupuncture, biofeedback and meditation, and tells palliative care from a cure." },
    { id: 'rx-0', w: 'rx', lv: 0, name: "Caplet", title: "The Drug-Form Expert", shape: 'capsule', color: '#9775FA', acc: ['sparkle'], bio: "Knows tablets, capsules, elixirs, suspensions and ointments, and knows a suspension must be shaken before use." },
    { id: 'rx-1', w: 'rx', lv: 1, name: "Syringo", title: "Master of the Routes of Administration", shape: 'syringe', color: '#7950F2', acc: ['glasses'], bio: "IM at 90, SC at 45 and ID at 15 degrees; po by mouth, SL under the tongue and transdermal through the skin." },
    { id: 'rx-2', w: 'rx', lv: 2, name: "Rexy", title: "The Medication-Order Decoder", shape: 'book', color: '#6741D9', acc: ['crown'], bio: "Reads bid, tid, qid, prn, ac, pc and hs like a mother tongue and knows what synergy, antagonist and contraindication mean." }
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
    /* باکتری‌های گرد خوشه‌ای (staphylococci) */
    cocci: { fy: 90, top: 34, body: c => [[28, 54, 20], [60, 40, 22], [92, 54, 20], [20, 100, 18], [100, 100, 18], [42, 128, 16], [78, 128, 16]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/><circle cx="${x}" cy="${y}" r="${r}" fill="#000" opacity=".14"/>`).join('') + `<circle cx="60" cy="90" r="42" fill="${c}"/><path d="M30 76 C34 62 44 54 56 52" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* باسیل: باکتری میله‌ای با تاژک */
    bacillus: { fy: 84, top: 22, body: c => `<path d="M60 136 q-8 6 -2 14 M44 132 q-12 4 -12 14 M76 132 q12 4 12 14" stroke="${c}" stroke-width="3.5" fill="none" stroke-linecap="round"/><rect x="22" y="20" width="76" height="118" rx="38" fill="${c}"/><rect x="22" y="20" width="76" height="118" rx="38" fill="#000" opacity=".1"/><rect x="29" y="27" width="62" height="104" rx="31" fill="${c}"/><circle cx="44" cy="118" r="4" fill="#fff" opacity=".3"/><circle cx="80" cy="112" r="3" fill="#fff" opacity=".3"/><path d="M36 58 C38 46 46 38 56 36" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* ویروس: کره با زائده‌های پروتئینی */
    virus: { fy: 86, top: 32, body: c => Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6 + Math.PI / 12, x1 = 60 + 42 * Math.cos(a), y1 = 86 + 42 * Math.sin(a), x2 = 60 + 56 * Math.cos(a), y2 = 86 + 56 * Math.sin(a); return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${c}" stroke-width="5" stroke-linecap="round"/><circle cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="6" fill="${c}"/><circle cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="6" fill="#000" opacity=".12"/>`; }).join('') + `<circle cx="60" cy="86" r="46" fill="${c}"/><circle cx="60" cy="86" r="46" fill="none" stroke="#000" stroke-opacity=".1" stroke-width="3"/><path d="M30 70 C34 56 44 48 56 46" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* سر گوشی پزشکی (stethoscope) با لوله‌ها */
    stetho: { fy: 98, top: 58, body: c => `<path d="M34 50 C26 24 40 10 50 10 M86 50 C94 24 80 10 70 10" stroke="#495057" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="50" cy="10" r="5" fill="#868E96"/><circle cx="70" cy="10" r="5" fill="#868E96"/><path d="M34 50 C36 66 84 66 86 50" stroke="#495057" stroke-width="6" fill="none"/><path d="M60 62 V56" stroke="#495057" stroke-width="7"/><circle cx="60" cy="100" r="44" fill="#ADB5BD"/><circle cx="60" cy="100" r="44" fill="#000" opacity=".1"/><circle cx="60" cy="100" r="37" fill="${c}"/><circle cx="60" cy="100" r="37" fill="none" stroke="#fff" stroke-width="2" opacity=".5"/><path d="M34 88 C38 76 46 70 56 68" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* سلول گرد با هسته */
    cell: { fy: 88, top: 28, body: c => `<circle cx="60" cy="88" r="56" fill="${c}"/><circle cx="60" cy="88" r="56" fill="#000" opacity=".08"/><circle cx="60" cy="88" r="48" fill="${c}"/><circle cx="60" cy="88" r="48" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="2 7" opacity=".5"/><ellipse cx="88" cy="58" rx="8" ry="5" fill="#fff" opacity=".25" transform="rotate(-30 88 58)"/><circle cx="30" cy="114" r="5" fill="#fff" opacity=".22"/><path d="M28 64 C32 50 44 42 56 42" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* میکروسکوپ */
    micro: { fy: 70, top: 20, body: c => `<rect x="20" y="132" width="80" height="12" rx="6" fill="#77868E"/><path d="M78 132 V96 q0 -16 -14 -18" stroke="#77868E" stroke-width="9" fill="none" stroke-linecap="round"/><rect x="18" y="26" width="70" height="88" rx="20" fill="${c}"/><rect x="18" y="26" width="70" height="88" rx="20" fill="#000" opacity=".07"/><rect x="40" y="10" width="26" height="20" rx="6" fill="#495057"/><rect x="38" y="112" width="30" height="14" rx="4" fill="#495057"/>` },
    /* روبان آگاهی */
    ribbon: { fy: 64, top: 18, body: c => `<path d="M60 20 C26 20 18 56 34 80 L76 146" stroke="${c}" stroke-width="30" fill="none" stroke-linecap="round"/><path d="M60 20 C94 20 102 56 86 80 L44 146" stroke="${c}" stroke-width="30" fill="none" stroke-linecap="round"/><path d="M60 20 C94 20 102 56 86 80 L44 146" stroke="#000" stroke-width="30" fill="none" stroke-linecap="round" opacity=".08"/><circle cx="60" cy="64" r="34" fill="${c}"/>` },
    /* سرنگ نمونه‌برداری */
    syringe: { fy: 78, top: 22, body: c => `<rect x="54" y="6" width="12" height="22" rx="4" fill="#77868E"/><rect x="38" y="4" width="44" height="8" rx="4" fill="#77868E"/><rect x="22" y="26" width="76" height="98" rx="20" fill="${c}"/><rect x="22" y="26" width="76" height="98" rx="20" fill="#fff" opacity=".18"/><path d="M30 50 h12 M30 66 h12 M30 82 h12 M30 98 h12" stroke="#fff" stroke-width="3" opacity=".6"/><path d="M60 124 V156" stroke="#9AA9B1" stroke-width="4" stroke-linecap="round"/>` },
    /* نشان پرتو */
    rad: { fy: 84, top: 26, body: c => `<circle cx="60" cy="86" r="56" fill="${c}"/><circle cx="60" cy="86" r="56" fill="#000" opacity=".07"/>${[0, 120, 240].map(a => { const r1 = 54, s = (a - 30) * Math.PI / 180, e = (a + 30) * Math.PI / 180; return `<path d="M60 86 L${(60 + r1 * Math.sin(s)).toFixed(1)} ${(86 - r1 * Math.cos(s)).toFixed(1)} A${r1} ${r1} 0 0 1 ${(60 + r1 * Math.sin(e)).toFixed(1)} ${(86 - r1 * Math.cos(e)).toFixed(1)}Z" fill="#fff" opacity=".25"/>`; }).join('')}<circle cx="60" cy="86" r="40" fill="${c}"/>` },
    /* نمایشگر نوار قلب */
    monitor: { fy: 74, top: 26, body: c => `<rect x="12" y="30" width="96" height="88" rx="16" fill="${c}"/><rect x="12" y="30" width="96" height="88" rx="16" fill="#000" opacity=".08"/><rect x="22" y="40" width="76" height="62" rx="9" fill="#e9fbef" opacity=".92"/><path d="M26 92 h16 l5 -9 l6 16 l7 -26 l7 30 l5 -11 h22" stroke="${c}" stroke-width="3.5" fill="none" stroke-linejoin="round" opacity=".55"/><rect x="40" y="118" width="40" height="10" rx="4" fill="#77868E"/><rect x="30" y="126" width="60" height="9" rx="4" fill="#B7C2C8"/>` },
    /* دریچه سه‌لتی از بالا */
    valve: { fy: 80, top: 24, body: c => `<circle cx="60" cy="84" r="52" fill="${c}"/><circle cx="60" cy="84" r="52" fill="#000" opacity=".08"/><circle cx="60" cy="84" r="44" fill="#fff" opacity=".22"/><path d="M60 84 L60 40 M60 84 L22 106 M60 84 L98 106" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7"/><ellipse cx="36" cy="58" rx="8" ry="12" transform="rotate(35 36 58)" fill="#fff" opacity=".35"/>` },
    /* استنت توری */
    stent: { fy: 82, top: 18, body: c => `<rect x="24" y="20" width="72" height="124" rx="30" fill="${c}"/><rect x="24" y="20" width="72" height="124" rx="30" fill="#000" opacity=".06"/><path d="M28 40 L92 64 M28 64 L92 40 M28 108 L92 132 M28 132 L92 108 M28 118 L52 128 M68 128 L92 118" stroke="#fff" stroke-width="3" opacity=".55"/><ellipse cx="42" cy="30" rx="6" ry="4" fill="#fff" opacity=".5"/>` },
    /* دفیبریلاتور خودکار */
    aed: { fy: 70, top: 22, body: c => `<rect x="14" y="26" width="92" height="112" rx="20" fill="${c}"/><rect x="14" y="26" width="92" height="112" rx="20" fill="#000" opacity=".07"/><rect x="40" y="16" width="40" height="14" rx="6" fill="#77868E"/><path d="M64 98 L52 118 H62 L56 134 L74 110 H64 L70 98Z" fill="#FFD43B" stroke="#fff" stroke-width="1.6"/>` },
    /* مارپیچ DNA */
    dna: { fy: 84, top: 22, body: c => `<path d="M34 18 C86 46 86 70 34 98 C-2 118 22 140 40 146" stroke="${c}" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M86 18 C34 46 34 70 86 98 C122 118 98 140 80 146" stroke="${c}" stroke-width="12" fill="none" stroke-linecap="round" opacity=".75"/><circle cx="60" cy="84" r="34" fill="${c}"/><path d="M40 34 h40 M44 112 h32 M30 128 h60" stroke="#FFC800" stroke-width="5" stroke-linecap="round"/>` },
    /* میتوکندری */
    mito: { fy: 86, top: 34, body: c => `<ellipse cx="60" cy="88" rx="54" ry="44" fill="${c}"/><path d="M20 112 q8 -16 16 0 q8 16 16 0 q8 -16 16 0 q8 16 16 0 q8 -16 16 0" stroke="#fff3e6" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/><ellipse cx="34" cy="62" rx="9" ry="13" transform="rotate(35 34 62)" fill="#fff" opacity=".3"/>` },
    /* دوک عضله */
    mus: { fy: 84, top: 30, body: c => `<path d="M60 26 C104 40 110 120 60 144 C10 120 16 40 60 26Z" fill="${c}"/><path d="M44 44 V126 M60 34 V138 M76 44 V126" stroke="#000" stroke-opacity=".12" stroke-width="3"/><path d="M52 18 h16 M52 152 h16" stroke="#E9DCC8" stroke-width="8" stroke-linecap="round"/>` },
    /* ریه‌ها */
    lung: { fy: 92, top: 22, body: c => `<path d="M56 30 V60 C40 48 12 70 12 108 C12 136 30 142 54 132 Z" fill="${c}"/><path d="M64 30 V60 C80 48 108 70 108 108 C108 136 90 142 66 132 Z" fill="${c}"/><path d="M60 14 V58 M60 58 L44 76 M60 58 L76 76" stroke="#9AA9B1" stroke-width="7" stroke-linecap="round" fill="none"/>` },
    /* قطب‌نما */
    compass: { fy: 90, top: 30, body: c => `<circle cx="60" cy="90" r="54" fill="${c}"/><circle cx="60" cy="90" r="44" fill="#fff" opacity=".9"/><path d="M60 50 L68 90 L60 130 L52 90Z" fill="#E5476B" opacity=".35"/><path d="M60 36 v8 M60 136 v8 M6 90 h8 M106 90 h8" stroke="#3b1f0e" stroke-width="3" stroke-linecap="round"/>` },
    /* شکم با چهار ربع */
    quad: { fy: 70, top: 24, body: c => `<path d="M14 34 Q60 22 106 34 L110 100 Q106 140 60 144 Q14 140 10 100 Z" fill="${c}"/><path d="M60 26 V144 M10 104 H110" stroke="#C8243F" stroke-width="3" opacity=".55"/><circle cx="60" cy="104" r="4" fill="#A0673A"/>` },
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
    cape: () => `<path d="M24 72 Q6 124 16 146 L104 146 Q114 124 96 72 Z" fill="#C8243F"/><path d="M60 80 L60 146" stroke="#96172D" stroke-width="3"/>`,
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
/* تیمار — راند بالینی: پرونده‌های چندمرحله‌ای
 * سه پرونده از کیس‌های فصل Disease and Treatment گرفته شده‌اند (آسیب اسکیت ماری، اندوکاردیت رابرت و نسخه‌های آسم چلسی)
 * و بقیه از موقعیت‌های رایج بخش ساخته شده‌اند؛ هدف: به کار بردن واژه‌های بیماری و درمان در دل یک پرونده واقعی.
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان بیماری ================= */
    {
      id: 'r1', w: 'lx', title: "Medical Ward Report", who: "A 68-year-old man with shortness of breath",
      brief: "The night-shift nurse has written Mr Rahimi’s report in medical terms. For a new student, translate each term by breaking it into root and suffix.",
      chart: [["Chest imaging", 'cardiomegaly'], ["Examining the abdomen", 'hepatomegaly'], ["lung", "bronchospasm with wheezing"], ["history of", 'arteriosclerosis']],
      fig: { a: ['wordparts'], l: ["Root + suffix"] },
      steps: [
        M("Term", "cardiomegaly means…", ["enlarged heart", "heart pain", "inflammation of the heart", "death of heart tissue"], "cardi/o (heart) + -megaly (enlargement)."),
        M("Term", "hepatomegaly on abdominal examination means…", ["The liver is enlarged", "The liver has ruptured", "The liver has softened", "The liver is inflamed"], 'hepat/o + -megaly.'),
        P("suffix", "Match each term to its meaning", [['bronchospasm', "sudden tightening of a bronchus"], ['bronchostenosis', "narrowing of an airway"], ['arteriosclerosis', "hardening of the arteries"], ['cephalgia', "headache"]]),
        T("prefix", "If the patient’s pulse is fast, the chart says bradycardia.", false, "False; fast = tachy-: tachycardia. brady- means slow."),
        M("root", "The patient has a fever. Which root means “fever”?", ['pyr/o', 'py/o', 'path/o', 'tox/o'], "pyr/o and pyret/o: fever, fire; py/o is pus."),
        S("Spelling", "Spell the term for an enlarged liver", 'hepatomegaly', 'hepat/o + -megaly.', 'hepato…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: "Flank Pain", who: "A 45-year-old man with colicky pain",
      brief: "Mr Karimi has come in with severe flank pain and pain on urination. Ultrasound has shown a stone in the urinary tract. Decode the terms in the chart.",
      chart: [["Complaint", 'urodynia'], ["diagnosis", "urolith; lithiasis"], ["urine", "no pyuria"], ["Plan", 'lithotripsy']],
      fig: { a: ['disease-roots'], l: ["Disease roots"] },
      steps: [
        M("Symptom", "urodynia means…", ["painful urination", "urinary stone", "blood in the urine", "bladder inflammation"], "ur/o (urine) + -odynia (pain)."),
        M("diagnosis", "urolith means…", ["a stone in the urinary tract", "bladder tumour", "kidney cyst", "widening of the ureter"], "ur/o + lith (stone)."),
        P("root", "Match each root to its meaning", [['lith/o', "stone"], ['cyst/o', "sac, bladder"], ['py/o', "pus"], ['alg/o', "pain"]]),
        M("treatment", "lithotripsy means…", ["crushing a stone", "removing a stone through an incision", "viewing a stone with an endoscope", "stone formation"], "lith/o + -tripsy (crushing)."),
        T("Term", "If the bladder is also inflamed, the chart says cystitis.", true, 'cyst/o + -itis.'),
        S("Spelling", "Spell the term for stone formation", 'lithiasis', 'lith + -iasis.', 'lith…')
      ]
    },
    /* ================= میکروب‌ها و انواع بیماری ================= */
    {
      id: 'r3', w: 'mc', title: "Post-operative Wound Infection", who: "A 52-year-old woman, fifth day after surgery",
      brief: "Mrs Ahmadi’s surgical wound has become red and pus-filled. The laboratory cultured the wound discharge and saw gram-positive cocci in clusters under the microscope.",
      chart: [['Gram stain', 'Gm+ cocci in clusters'], ['C&S', 'MRSA'], ["Type of infection", 'nosocomial'], ["Note", "MDR; contact isolation"]],
      fig: { a: ['bact-staph'], l: ["Staphylococci"] },
      steps: [
        M("Microbes", "Which gram-positive cocci form grape-like clusters?", ['staphylococci', 'streptococci', 'bacilli', 'spirochetes'], "staphylo- means grape-like cluster; strepto- is chain."),
        T("Staining", "Gm+ means the bacterium stays purple in the Gram stain.", true, "Gram-positive looks purple and gram-negative red."),
        M("Spread", "An infection the patient caught in hospital…", ['nosocomial', 'endemic', 'congenital', 'idiopathic'], "nos/o (disease) + comial (hospital)."),
        P("abbreviation", "Match each abbreviation to its meaning", [['MRSA', "methicillin-resistant staphylococcus"], ['C&S', "culture and sensitivity"], ['MDR', "resistant to many drugs"], ['Staph', "grape-cluster bacterium"]]),
        M("Term", "MRSA is a pathogen. Pathogen means…", ["disease-causing agent", "normal body flora", "bacteria-killing drug", "white blood cell"], "path/o (disease) + -gen (producing)."),
        S("Spelling", "Spell the adjective for an infection caught in hospital", 'nosocomial', 'nos/o + comial.', 'noso…')
      ]
    },
    {
      id: 'r4', w: 'mc', title: "Flu Season", who: "Report from the district health centre",
      brief: "Over the past two weeks, the number of flu patients in the city has suddenly risen. The health officer sends the report to the clinic’s physicians.",
      chart: [["Cause", 'influenza virus'], ["Route of transmission", "respiratory droplets; contact"], ["Course of disease", 'acute'], ["Regional status", 'epidemic']],
      fig: { a: ['spread-scale'], l: ["Endemic, Epidemic, Pandemic"] },
      steps: [
        M("Spread", "A sudden rise of a disease in one region at one time…", ['epidemic', 'endemic', 'pandemic', 'sporadic'], "epi- (upon) + dem/o (people)."),
        T("Spread", "If the same disease spreads across several continents, it is called a pandemic.", true, "pan- means all."),
        M("Cause", "How is a virus different from a bacterium?", ["It multiplies only inside a living cell", "It is rod-shaped", "It turns purple in the Gram stain", "Antibiotics kill it"], "A virus is an obligate intracellular parasite."),
        M("Portal of entry", "Through which portal of entry does influenza enter the body?", ["The respiratory system", "Intact skin", "urinary system", "Blood, through an insect bite"], "Respiratory droplets enter the respiratory tract."),
        P("Course", "Match each term to its meaning", [['acute', "sudden and short"], ['chronic', "long and slow"], ['communicable', "contagious"], ['etiology', "The cause of disease"]]),
        S("Spelling", "Spell the term for virus in the blood", 'viremia', 'vir/o + -emia.', 'vir…')
      ]
    },
    /* ================= پاسخ بدن به بیماری ================= */
    {
      id: 'r5', w: 'rs', title: "Right-sided Abdominal Pain", who: "A 17-year-old boy in the emergency department",
      brief: "Ali has had abdominal pain since last night that has moved to the lower right abdomen. He has a fever, and the painful area is warm, red and swollen. The surgeon suspects suppurative appendicitis.",
      chart: [["examination", "pain and tenderness in the lower right abdomen; fever"], ["test", "too many white blood cells"], ["ultrasound scan", "appendicitis with abscess"], ["Plan", 'appendectomy']],
      fig: { a: ['inflammation-signs'], l: ["The four signs of inflammation"] },
      steps: [
        O("inflammation", "Put the four signs of inflammation in order", ['heat', 'pain', 'redness', 'swelling'], "Heat, pain, redness and swelling."),
        M("Term", "appendicitis means…", ["inflammation of the appendix", "removal of the appendix", "hernia of the appendix", "tumour of the appendix"], 'appendic/o + -itis.'),
        M("area of damaged tissue", "abscess means…", ["pus collected in one place", "inflammation spread through tissue", "abnormal passage between two organs", "mass on a stalk"], "Cellulitis is spreading inflammation and a fistula is an abnormal passage."),
        T("Defence", "Pus is made of fluid and white blood cells that have swallowed bacteria.", true, "What remains after phagocytosis is pus."),
        P("Term", "Match each term to its meaning", [['purulent', "containing pus"], ['suppuration', "forming pus"], ['phagocytosis', "swallowing microbes"], ['edema', "swelling"]]),
        S("Spelling", "Spell the term for a collection of pus in one place", 'abscess', "Two s’s and a c in the middle: ab-scess.", 'abs…')
      ]
    },
    {
      id: 'r6', w: 'rs', title: "Heartburn", who: "A 58-year-old woman",
      brief: "Mrs Sadeghi has had heartburn for years. A contrast (barium) radiograph shows part of the stomach above the diaphragm.",
      chart: [["diagnosis", 'hiatal hernia'], ["Associated finding", 'esophagitis'], ["history of", "benign intestinal polyp"], ["Plan", "herniorrhaphy if needed"]],
      fig: { a: ['hiatal-img'], l: ["Hiatal hernia"] },
      steps: [
        M("area of damaged tissue", "hernia means…", ["an organ pushing through an abnormal opening", "an organ dropping down", "narrowing of a tube", "fluid-filled sac"], "An organ dropping down is prolapse or ptosis."),
        T("rupture", "In a hiatal hernia, part of the stomach passes through the diaphragm into the chest.", true, "Through the oesophageal opening in the diaphragm (hiatus)."),
        M("Neoplasm", "polyp means…", ["a mass attached by a narrow stalk", "cancer of connective tissue", "collected pus", "split in tissue"], "A polyp is a tumour on a stalk."),
        M("surgery", "herniorrhaphy means…", ["repairing a hernia with sutures", "removing a hernia", "cutting into a hernia", "viewing a hernia"], "herni/o + -rrhaphy (repair, suture)."),
        P("area of damaged tissue", "Match each term to its meaning", [['prolapse', "an organ dropping down"], ['adhesion', "two surfaces stuck together"], ['fissure', "split"], ['ascites', "fluid in the abdomen"]]),
        S("Spelling", "Spell the term for an organ pushing through an abnormal opening", 'hernia', 'herni/o.', 'her…')
      ]
    },
    /* ================= معاینه و تشخیص ================= */
    {
      id: 'r7', w: 'dx', title: "Mary in the Emergency Department", who: "A 59-year-old woman after a skating fall",
      brief: "While skating on gravel, Mary fell and landed on her right hand and knee. In the emergency department a physician assistant (PA) took her history and examined her wrist and knee (the chapter’s opening case).",
      chart: [['CC', "pain in the right wrist and knee"], ["Wrist", "deformed and edematous; limited ROM"], ["knee", "superficial abrasion; swelling"], ["Orders", "wrist x-ray; knee MRI"]],
      fig: { a: ['palpation-img'], l: ['palpation'] },
      steps: [
        P("abbreviation", "Match each abbreviation to its meaning", [['Hx', "history"], ['ED', "emergency department"], ['ROM', "range of motion"], ['y/o', "years old"]]),
        M("examination", "The PA felt the wrist to assess the pain. This method is called…", ['palpation', 'percussion', 'auscultation', 'inspection'], "palpation means feeling with the hands and fingers."),
        M("examination", "First the PA looked at the wrist: no open wound, slightly deformed. This method is called…", ['inspection', 'palpation', 'percussion', 'auscultation'], "inspection = looking."),
        M("Adjective", "edematous means…", ["swollen", "bruised", "hardened", "containing pus"], "The adjective of edema."),
        M("Imaging", "What is the best simple method to see a fracture of the wrist bones?", ['radiography', 'ultrasonography', 'PET', 'biofeedback'], "Dense bone absorbs x-rays and looks bright."),
        T("Imaging", "MRI is valuable for the knee because it shows ligaments and soft tissue better than a plain film.", true, "MRI uses a magnetic field and radio waves, without x-rays.")
      ]
    },
    {
      id: 'r8', w: 'dx', title: "Fever After Travel", who: "A 37-year-old man with a history of rheumatic fever (case 3-1)",
      brief: "After returning from a trip, Robert has had a high fever and weakness for several days. His family physician suspected heart involvement and sent him to a cardiologist for an ECG and TEE. He was admitted with SBE.",
      chart: [['VS', "T 39.8 °C; HR 112 bpm"], ["Tests", "ECG; TEE"], ["diagnosis", 'SBE'], ["finding", 'IHSS']],
      fig: { a: ['tube-changes'], l: ["narrowing, widening, spasm"] },
      steps: [
        M("Term", "endocarditis means… of the inner lining of the heart", ["inflammation", "narrowing", "overgrowth", "thinning"], "endo- (inside) + cardi/o + -itis."),
        M("Term", "stenosis in IHSS means…", ["narrowing", "inflammation", "cancer", "widening"], "subaortic stenosis = narrowing below the aortic valve."),
        M("Cause", "A disease with an unknown cause…", ['idiopathic', 'iatrogenic', 'chronic', 'acute'], "idi/o (self) + path/o."),
        M("Growth", "An increase in organ size without an increase in cell number…", ['hypertrophic', 'hyperplastic', 'metaplastic', 'fistular'], "hypertrophy = cells getting bigger; hyperplasia = cells becoming more numerous."),
        P("abbreviation", "Match each abbreviation to its meaning", [['ECG', "heart tracing (ECG)"], ['TEE', "echocardiography through the oesophagus"], ['SBE', "subacute bacterial endocarditis"], ['HR', "heart rate"]]),
        T("symptom", "Robert’s fever is a sign, not just a symptom, because it is measured with a thermometer.", true, "A sign is objective and measurable.")
      ]
    },
    /* ================= جراحی و درمان ================= */
    {
      id: 'r9', w: 'tx', title: "Mary in the Operating Room", who: "Mary’s case continued",
      brief: "The radiograph showed a distal radius (Colles) fracture. The orthopaedic surgeon realigned the bones through a direct incision and fixed them with a plate and screws. Fluid was then drawn from the swollen knee.",
      chart: [["surgery", 'open reduction + internal fixation'], ["knee", 'arthrocentesis'], ["drug", 'NSAID'], ["Discharge", "walker; PT teaching"]],
      fig: { a: ['periop-path'], l: ["The patient’s path through surgery"] },
      steps: [
        M("surgery", "arthrocentesis means…", ["puncturing a joint and drawing out fluid", "cutting into a joint", "surgical fusion of a joint", "looking inside a joint"], 'arthr/o + -centesis.'),
        M("surgery", "arthroscopy, which may be needed, means…", ["looking inside a joint with an endoscope", "reconstructing a joint", "removal of a joint", "an x-ray of a joint"], 'arthr/o + -scopy.'),
        P("suffix", "Match each joint term to its meaning", [['arthroplasty', "reconstructing a joint"], ['arthrodesis', "surgical fusion of a joint"], ['arthrotomy', "cutting into a joint"], ['arthrocentesis', "drawing fluid from a joint"]]),
        M("Term", "Fixation with a plate and screws matches which suffix?", ['-pexy', '-tomy', '-rrhaphy', '-tripsy'], "-pexy = fixing in place."),
        T("drug", "An NSAID is an anti-inflammatory steroid drug.", false, "False; NSAID means a “non”-steroidal anti-inflammatory drug, such as ibuprofen."),
        M("Outcome", "When the PA told Mary the expected outcome of her injury, what did they give her?", ['prognosis', 'diagnosis', 'etiology', 'prophylaxis'], "prognosis = prediction of the course and outcome.")
      ]
    },
    {
      id: 'r10', w: 'tx', title: "Post-operative Order Sheet", who: "A 40-year-old man after incision and drainage of an abscess",
      brief: "Mr Nouri’s large thigh abscess was incised and drained in the operating room. After recovery he came to the ward. Explain the physician’s order sheet to a new nurse.",
      chart: [["Operation", "I&D; EBL: 50 mL"], ["Path", "OR → PACU → ward"], ["Orders", "NPO for 6 hours; then liquid diet"], ["IV fluids", "NS, KVO"], ["Activity", "OOB with help; BRP"]],
      fig: { a: ['tubes-tools'], l: ["Tubes in treatment"] },
      steps: [
        P("abbreviation", "Match each abbreviation to its meaning", [['I&D', "incision and drainage"], ['EBL', "estimated blood loss"], ['PACU', "recovery after anaesthesia"], ['OR', "operating room"]]),
        M("Orders", "NPO means…", ["nothing by mouth", "whenever needed", "immediately", "out of bed"], 'non per os.'),
        M("Orders", "KVO for an IV drip means…", ["keep the vein open", "stop the drip", "run the drip fast", "drip only at night"], 'keep vein open.'),
        O("Path", "Put the patient’s path in order", ['preop', 'OR', 'PACU', 'postop'], "Before surgery, operating room, recovery, after surgery."),
        T("Orders", "STAT on an order sheet means “as needed”.", false, "False; STAT means immediately and prn means as needed."),
        M("IV fluids", "NS means…", ["a salt solution compatible with cells", "sugar solution", "whole blood", "alcoholic solution"], 'normal saline.')
      ]
    },
    /* ================= دارو و نسخه ================= */
    {
      id: 'r11', w: 'rx', title: "Chelsea’s Medications", who: "A 20-year-old woman with asthma before surgery (case 3-2)",
      brief: "A week before cosmetic surgery, Chelsea came to the pre-admission testing unit. The nurse listed her medications, and the anaesthesiologist also gave pre-operative orders.",
      chart: [['Theo-Dur', '1 cap 200 mg t.i.d.'], ['Flovent inhaler', "1 spray (50 mcg in each nostril) b.i.d."], ['Ativan (lorazepam)', '1 mg po b.i.d.'], ['Albuterol MDI', '2 puffs p.r.n. q4–6h'], ['preop', 'lorazepam 4 mg IV'], ['Arnica', '3 tabs SL t.i.d.']],
      fig: { a: ['inhaler-img'], l: ["Inhaling the drug"] },
      steps: [
        M("Dose", "Flovent: one 50 mcg puff in each nostril, b.i.d. How many mcg is that in one day?", ['200 mcg', '100 mcg', '250 mcg', '500 mcg'], "50 × 2 nostrils = 100 per dose; × 2 doses = 200."),
        M("Dose", "Arnica: three tablets SL, t.i.d. How many tablets in one day?", ['9', '6', '12', '33'], "3 tablets × 3 times = 9."),
        M("Drug class", "Ativan is given for nervousness, so it is a… drug.", ['anxiolytic', 'antiemetic', 'analgesic', 'bronchodilator'], "anxi/o (anxiety) + -lytic (reducing)."),
        M("Interaction", "Lorazepam and the anaesthetic drug have a greater effect together. What is this called?", ['synergy', 'antagonism', 'tolerance', 'withdrawal'], "Synergy; like potentiation."),
        M("Drug form", "A drug inhaled as a mist from an inhaler…", ['aerosol', 'elixir', 'ointment', 'emulsion'], "An aerosol is a solution dispersed as a mist."),
        P("abbreviation", "Match each abbreviation to its meaning", [['po', "oral"], ['SL', "under the tongue"], ['IV', "into a vein"], ['p.r.n.', "as needed"]])
      ]
    },
    {
      id: 'r12', w: 'rx', title: "Hives After an Injection", who: "A 30-year-old woman in the clinic",
      brief: "Five minutes after an intramuscular antibiotic injection, Mrs Moradi developed hives, shortness of breath and falling blood pressure. The team acted at once. Her chart said “NKDA”.",
      chart: [["drug", 'penicillin IM'], ["Reaction", 'anaphylaxis'], ["Action", 'epinephrine IM STAT'], ["From now on", 'penicillin: contraindication']],
      fig: { a: ['injection-angles'], l: ["Injection angle"] },
      steps: [
        M("Reaction", "anaphylaxis means…", ["a severe, dangerous allergic reaction", "a mild side effect", "tolerance", "withdrawal syndrome"], "It can lead to shortness of breath and falling blood pressure."),
        M("abbreviation", "NKDA in a chart means…", ["no known drug allergies", "stop the drug", "nothing by mouth", "no apparent distress"], "no known drug allergies; NAD means no apparent distress."),
        M("Drug safety", "From now on, penicillin is a… for her.", ['contraindication', 'prescription', 'side effect', 'potentiation'], "Contraindication: a reason not to give a drug."),
        M("injection", "At what angle is an IM injection given?", ["90 degrees", "45 degrees", "15 degrees", "parallel to the skin"], "IM 90, SC 45 and ID 15 degrees."),
        T("Orders", "STAT means the drug must be given immediately.", true, 'STAT = immediately.'),
        S("Spelling", "Spell the term for a reason not to give a drug", 'contraindication', "contra- (against) + indication.", 'contra…')
      ]
    }
  ];


})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* تیمار — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', "Start the meaning from the suffix: hepatomegaly means “enlargement” + “liver”."],
    ['Lx', "path/o means disease: a pathogen is a disease-causing agent and pathology the study of disease."],
    ['Lx', "In ‎-rhage, ‎-rhea and ‎-rhexis double the r: hemorrhage, pyorrhea, hepatorrhexis."],
    ['Lx', "tachy- is fast and brady- slow: tachycardia is a fast heartbeat and bradypnea slow breathing."],
    ['Lx', "stenosis means narrowing and ectasia widening; two words with opposite meanings that both become suffixes."],
    ['Lx', "Don’t mix up py/o (pus) and pyr/o (fever): pyogenic is pus-producing and pyrogenic fever-causing."],
    ['Mic', "staphylo- means bunch of grapes and strepto- chain; staphylococci are round and clustered."],
    ['Mic', "cocci are round, bacilli rod-shaped, vibrios curved and spirochetes corkscrew-shaped."],
    ['Mic', "endemic is constant and low, epidemic sudden and widespread in one region, pandemic across the whole world."],
    ['Mic', "nosocomial means hospital-acquired infection; MRSA is a resistant, dangerous example."],
    ['Mic', "iatrogenic means “caused by treatment” and idiopathic “of no known cause”."],
    ['Path', "The four signs of inflammation: heat, pain, redness and swelling; the suffix for inflammation is ‎-itis."],
    ['Path', "phag/o means eating: phagocytosis is a white blood cell swallowing a microbe."],
    ['Path', "An abscess is pus collected in one place, and cellulitis is inflammation spreading through tissue."],
    ['Path', "hyperplasia means more cells; hypertrophy means bigger cells, not more."],
    ['Path', "A fistula is an abnormal passage and a fissure a split; a polyp is a mass on a stalk."],
    ['Dx', "A sign is seen or measured by the physician (fever, high blood pressure); a symptom is felt by the patient (pain, dizziness)."],
    ['Dx', "Remember the order of the physical examination with IPPA: Inspection, Palpation, Percussion, Auscultation."],
    ['Dx', "‎-graph is the recording instrument, ‎-graphy the recording method and ‎-gram the record itself: electrocardiograph, electrocardiography, electrocardiogram."],
    ['Dx', "In a radiograph, dense tissues such as bone look bright because they absorb x-rays."],
    ['Dx', "MRI uses a magnetic field and radio waves and has no x-rays."],
    ['Tx', "‎-ectomy is removal, ‎-tomy cutting and ‎-stomy making an opening: hepatectomy, laparotomy, tracheostomy."],
    ['Tx', "‎-centesis means puncturing to draw out fluid: thoracentesis, arthrocentesis."],
    ['Tx', "‎-pexy fixes in place, ‎-desis fuses and ‎-rhaphy sutures."],
    ['Tx', "palliative means relieving: it reduces pain but does not cure the disease."],
    ['Tx', "Prognosis is predicting the outcome of a disease and diagnosis identifying the disease itself."],
    ['Rx', "bid is twice a day, tid three times and qid four times; prn means whenever needed."],
    ['Rx', "ac is before meals and pc after meals; hs at bedtime."],
    ['Rx', "A generic name is written in lower case (acetaminophen) and a brand name with a capital (Tylenol)."],
    ['Rx', "Synergy means two drugs together have a greater effect than the sum of their effects; an antagonist cancels out another’s effect."],
    ['Rx', "Tolerance means the same dose no longer has its earlier effect and the dose must be raised."]
  ];

  const COLORS = { Lx: '#4C6EF5', Mic: '#40C057', Path: '#F76707', Dx: '#1098AD', Tx: '#E64980', Rx: '#7950F2', '': '#0C8F7F' };
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
/* تیمار — کارت‌های واژه (فلش‌کارت) با جعبه لایتنر
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
/* تیمار — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مرجع سریع بیماری و درمان
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'timar.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: "Dictionary", color: '#2F5FD0' },
    { id: 'parse', sym: '✂', name: "Word parser", color: '#7B5CE0' },
    { id: 'roots', sym: '-o-', name: "Roots and suffixes", color: '#12A594' },
    { id: 'abbr', sym: 'Rx', name: "Abbreviations", color: '#1899D6' },
    { id: 'ref', sym: '🧭', name: "Quick reference", color: '#E5A500' }
  ];
  let cur = 'dict';
  const st = { q: '', w: '', k: '', parse: 'hepatomegaly', open: null, limit: 40 };
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
      <p class="disclaimer">⚕️ Timar is a learning tool and does not replace medical references or clinical judgment.</p>
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
          <span class="dict__t"><b dir="ltr">${esc(t.t)}</b><small>${esc(L().short(t.fa))}</small></span>
          <span class="dict__box" title="Leitner box">${'●'.repeat(EA.S.cardBox(t.id))}</span>
        </button>
        ${op ? `<div class="dict__b">${(c => c ? `<span class="kchip kchip--tag"><i>${c.icon}</i>${c.name}</span> ` : '')(L().CATS.find(c => c.id === t.k))}${t.p ? `<span class="pron" dir="ltr">/${esc(t.p)}/</span>` : ''}${EA.cards.back(t)}
          <div class="dict__act">${EA.cards.canSpeak() ? `<button class="btn btn--ghost btn--sm" data-say="${t.id}">🔊 Pronounce</button>` : ''}<button class="btn btn--ghost btn--sm" data-fav="${t.id}">${fav[t.id] ? "★ Starred" : "☆ Star"}</button><button class="btn btn--ghost btn--sm" data-parse="${esc(t.t)}">✂ Parse</button></div></div>` : ''}
      </li>`;
    }).join('')}</ul>${list.length > st.limit ? `<button class="btn btn--ghost btn--block" data-more>Show ${fa(Math.min(40, list.length - st.limit))} more terms</button>` : ''}`;
  }
  const dict = () => `<div class="tpane">${searchBox("Search: biopsy, inflammation, hernia…")}
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
  const SAMPLES = ['hepatomegaly', 'osteomalacia', 'bronchostenosis', 'herniorrhaphy', 'thoracentesis', 'blepharoptosis', 'antipyretic', 'bacteriostatic'];
  const parse = () => `<div class="tpane">
    <p class="muted">Type a medical word and it will be broken into prefix, root and suffix. The golden rule: start the meaning from the <b>suffix</b>, then the prefix, and finally the roots.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. chondrosarcoma"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: "prefix", root: "root", suffix: "suffix" };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox("Search: scler, inflammation, -itis…")}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]} list <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b dir="ltr">${esc(r.a)}</b><span>${esc(r.fa)}</span><small dir="ltr">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox("Search: bid, blood pressure, NPO…")}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>Abbreviation</th><th>Full form and meaning</th></tr>${list.map(a => `<tr><td dir="ltr">${esc(a.a)}</td><td><span dir="ltr" class="abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  /* مرجع سریع: جدول‌های پرکاربرد معاینه، جراحی و نسخه که هنگام خواندن پرونده لازم می‌شوند */
  const REF = [
    ["The four signs of inflammation", [['heat', "warmth (calor)"], ['pain', "ache (dolor)"], ['redness', "reddening (rubor)"], ['swelling', "swelling (tumor); suffix for inflammation: ‎-itis"]]],
    ["Physical examination (IPPA)", [['inspection', "looking"], ['palpation', "feeling with hands and fingers"], ['percussion', "tapping and listening to the sound"], ['auscultation', "listening to body sounds with a stethoscope"]]],
    ["Vital signs (VS)", [['T', "body temperature; °C or °F"], ['P', "pulse; beats per minute (bpm)"], ['R', "breaths per minute"], ['BP', "blood pressure: systolic/diastolic in mm Hg"]]],
    ["Diagnostic suffixes", [['-graph', "recording instrument"], ['-graphy', "recording process"], ['-gram', "the record itself (tracing, image)"], ['-meter / -metry', "measuring instrument / measurement"], ['-scope / -scopy', "viewing instrument / looking inside"]]],
    ["Surgical suffixes", [['-ectomy', "removal"], ['-tomy / -tome', "cutting / cutting instrument"], ['-stomy', "making an opening"], ['-centesis', "puncture to draw fluid"], ['-plasty / -rhaphy', "repair and reconstruction / suture"], ['-pexy / -desis', "fixing in place / fusion"], ['-tripsy', "crushing"]]],
    ["Medication timing", [['ac / pc', "before meals / after meals"], ['hs', "at bedtime"], ['bid • tid • qid', "2 • 3 • 4 times a day"], ['q4h', "every 4 hours"], ['prn', "as needed"], ['STAT', "immediately"]]],
    ["Injection routes", [['IM', "into a muscle; 90° angle"], ['SC', "under the skin; 45° angle (sometimes 90°)"], ['ID', "into the skin; 15° angle"], ['IV', "into the vein"]]]
  ];


  const ref = () => `<div class="tpane"><p class="muted">Frequently used tables for reading charts and imaging reports.</p>
    ${REF.map(g => `<h3 class="tgh">${g[0]}</h3><table class="mini ref"><tr><th>Term</th><th>Meaning</th></tr>${g[1].map(r => `<tr><td dir="ltr" class="ref__v">${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`).join('')}
    ${EA.ui.figCard({ a: ['dose-clock'], l: ["Medication timing"] })}</div>`;

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
