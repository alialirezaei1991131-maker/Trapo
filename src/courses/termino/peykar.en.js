/* Therapo • ترمینو — حیطه «peykar» (Body Structure)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_peykar;
  D.css = ".certbar{width: 100%; margin-top: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px; border: 0; border-radius: 16px; padding: 14px 18px; font-weight: 800; background: linear-gradient(120deg, #2f5fd0, #12a594); color: #fff; box-shadow: 0 4px 0 var(--brand-d); text-align: start;}\n.cert{width: 100%; padding: 10px; background: linear-gradient(135deg, #2f5fd0, #4f5bd5, #d6457a, #e07a1f, #12a594, #7b5ce0); border-radius: 20px;}\n[lang=\"fa\"]{font-family: Vazirmatn, Tahoma, system-ui, sans-serif;}\ntable.ref .ref__v{font-family: Nunito, system-ui, sans-serif; font-weight: 800; white-space: nowrap; text-align: left;}\n.recap{margin: 8px 0 4px; padding: 12px 14px; border-radius: 16px; background: color-mix(in srgb, var(--wc, var(--brand)) 9%, var(--bg)); border: 2px solid color-mix(in srgb, var(--wc, var(--brand)) 35%, var(--line));}\n.recap__h{display: block; font-size: 14px; font-weight: 900; color: color-mix(in srgb, var(--wc, var(--brand)) 80%, var(--text)); margin-bottom: 6px;}\n.recap ul{margin: 0; padding: 0; list-style: none; display: grid; gap: 8px;}\n.recap li{position: relative; padding-inline-start: 24px; font-size: 15px; line-height: 1.8;}\n.recap li::before{content: \"✓\"; position: absolute; inset-inline-start: 2px; top: 0; font-weight: 900; color: var(--green-t);}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* پیکر — هسته: فضای نام، متن‌ها، رقم فارسی و سازنده‌های کوتاه محتوا
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
  EA.APP = { name: "Peykar", key: 'peykar', title: "Peykar • Terminology of Body Structure" };

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
    name: "Peykar", key: 'peykar', title: "Peykar • Terminology of Body Structure", certCode: 'PK',
    subject: "Medical terminology of body structure",
    kicker: "🧭 Medical terminology: Body Structure",
    hello: "Hi, I’m <b>Peykar</b>;",
    landP: () => `Hi, I’m <b>Peykar</b>, a cell with a compass for the body! Here you’ll learn how the body is built from cell to system, name every part of it with the exact term, and <b>decode</b> every new word yourself. ${fa(EA.lex.TERMS.length)} terms with pronunciation and meaning, ${fa(Object.keys(EA.IMG).length || 65)} clinical picturess, ${fa(EA.rounds.length)} clinical charts and Leitner cards are waiting for you.`,
    disclaimer: "Peykar is an educational tool and does not replace anatomy references, clinical judgment or a physician’s orders.",
    eyes: "Dozens of clinical pictures and teaching figures: from cells and tissues under the microscope to body planes, cavities and the nine abdominal regions.",
    outcomes: [
          "Break every anatomy term into prefix, root and suffix, form its Latin plural and name the body’s openings",
          "Describe the levels of organisation, cell structure, DNA, mitosis and metabolism with the right terms",
          "Recognise the four main tissues, the types of muscle and epithelium, and parietal and visceral membranes",
          "Know the twelve body systems, their organs and the medical specialty for each",
          "Read directions, planes, movements, patient positions and imaging methods in a chart",
          "Name the cavities, the nine regions and four quadrants of the abdomen, the spinal regions and the surface regions of the body precisely"
        ],
    endText: "Just 5 minutes a day. In a few weeks you’ll read anatomy terms like your mother tongue.",
    obHello: "Hi! I’m Peykar, a cell that knows the map of the body 🧭 What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “Body Language” is the best start; that’s where the word-building pieces are taught!",
    demo: () => ({
    q: "The patient has <b dir=\"ltr\">epigastric</b> pain. Where is the pain?",
    fig: { a: ['regions9'], l: ["the nine regions of the abdomen"] },
    opts: ["upper abdomen, over the stomach", "around the navel", "lower abdomen, above the bladder", "right side, below the ribs"],
    why: `${EA.K.wb('epi-', 'gastr/o', '-ic')}<br><b>epi-</b> = upon, above • <b>gastr/o</b> = stomach • <b>-ic</b> = pertaining to. So it is the region <b>above the stomach</b>, the upper middle abdomen. Start the meaning from the suffix!`
  }),
    titles: ["New Cell", "Curious Histologist", "Busy Organ", "Direction Finder", "Plane Slicer", "Abdomen Map Reader", "Root Decoder",
    "Cavity Master", "Cell Commander", "System Architect", "Anatomy Detective", "Body Field Marshal", "Word-Building Master"],
    leagueRoles: ["Medical student", "Nursing student", "Lab-science student", "Lab scientist", "Nutrition student", "ICU nurse", "Clinical dietitian", "Internal-medicine resident", "Midwifery student", "Pharmacy student", "Surgical technologist", "Haematology ward nurse"],
    firstBadge: ['🧫', "First Cell"],
    worldBadges: { lx: ['🧩', "Decoder"], og: ['🧬', "Cytologist"], ts: ['🧵', "Tissue Weaver"], sy: ['🫀', "System Architect"], dr: ['🧭', "Direction Finder"], cv: ['🗺️', "Map Reader"] },
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
    return `<svg class="yona peykar yona--${m}" viewBox="0 0 120 150" width="${size || 120}" height="${(size || 120) * 1.25}" aria-hidden="true" style="--c:${c}">
      <ellipse cx="60" cy="144" rx="32" ry="5" fill="currentColor" opacity=".12"/>
      <g class="yona-body">
        <ellipse cx="${cx}" cy="${cy}" rx="50" ry="48" fill="var(--c)"/>
        <ellipse cx="${cx}" cy="${cy}" rx="50" ry="48" fill="#000" opacity=".1"/>
        <ellipse cx="${cx}" cy="${cy - 3}" rx="45" ry="42" fill="var(--c)"/>
        <ellipse cx="${cx}" cy="${cy + 4}" rx="31" ry="27" fill="#000" opacity=".09"/>
        <ellipse cx="${cx}" cy="${cy + 2}" rx="31" ry="26" fill="#fff" opacity=".1"/>
        <path d="M${cx - 34} ${cy - 18} A40 38 0 0 1 ${cx - 8} ${cy - 40}" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".55"/>
        <circle cx="${cx + 30}" cy="${cy - 26}" r="6" fill="#fff" opacity=".18"/><circle cx="${cx - 30}" cy="${cy + 26}" r="4" fill="#fff" opacity=".18"/><ellipse cx="${cx + 33}" cy="${cy + 2}" rx="5" ry="2.6" fill="#fff" opacity=".2" transform="rotate(-30 ${cx + 33} ${cy + 2})"/>
        <g transform="translate(102 108)"><circle r="16" fill="#FFC800" stroke="#fff" stroke-width="3"/><path d="M0 -10 V10 M-10 0 H10" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/><path d="M0 -10 l-3 4 h6z" fill="#fff"/></g>
        <path class="negar-spark" d="M100 18 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
        ${brows}${eyes}
        <ellipse cx="${cx - 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/><ellipse cx="${cx + 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/>
        ${mouths[m] || mouths.happy}${tear}
      </g>
    </svg>`;
  }
  };
})(window);
/* پیکر — واژه‌ها (ساخته‌شده خودکار با tools/merge_data.py؛ دستی ویرایش نکنید)
 * [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارها] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [
    ["abdominal cavity", "ab-DOM-ih-nal", "The cavity beneath the thoracic cavity that is separated from the thoracic cavity by the diaphragm; contains the liver, gallbladder, spleen, stomach, pancreas, intestines, and kidneys.", "space holding the stomach, liver and intestines", "cv", "", []],
    ["abdominopelvic cavity", "ab-dom-i-nō-PEL-vik", "The abdominal and pelvic cavities together; not separated by a wall.", "combined abdominal and pelvic space", "cv", "", []],
    ["abduction", "", "Movement away from the midline of the body", "moving away from the midline (abduction)", "dr", "", []],
    ["adduction", "", "Movement toward the midline of the body", "moving toward the midline (adduction)", "dr", "", []],
    ["adhesion", "ăd-HĒ-zhŭn", "Band of scar tissue binding anatomical surfaces that are normally separate from each other", "tissues abnormally stuck together", "ts", "", []],
    ["adipocyte", "", "Fat cell that contains large vacant spaces for fat storage.", "fat cell", "og", "", []],
    ["adipose", "AD-ih-pohs", "Connective tissue that provides protective padding around body structures", "fatty tissue", "ts", "", []],
    ["anabolism", "", "To build up.", "building-up metabolism", "og", "", []],
    ["anatomical position", "", "A standard position where the body is standing erect, arms by the side, with head, palms, and feet facing forward.", "anatomic position", "dr", "", []],
    ["anatomy", "ah-NAT-oh-mee", "The study of how the human body is constructed; reveals the \"what it is\". Comes from the Greek word anatome, which means \"dissection\"", "study of body structure", "og", "", []],
    ["antecubital", "an-tē-KYŪ-bi-tal", "In front of the elbow (the bend of the elbow).", "in front of the elbow", "cv", "", []],
    ["anterior", "an-TEE-ree-or", "Toward the front of the body, organ, or structure", "towards the front of the body", "dr", "", []],
    ["anteroposterior", "ăn-tĕr-ō-pōs-TĒR-ē-or", "Pertaining to the front and back of the body or passing from the front to the back of the body", "from front to back", "dr", "", []],
    ["anus", "ey-nuh-s", "The opening at the end of the digestive tract for defecation.", "opening at the end of the digestive tract", "lx", "", []],
    ["aperture", "ap-er-chur", "an opening or orifice", "opening or hole", "lx", "", []],
    ["appendix / appendices", "ah-pen-diks / ah-pen-dises", "singular / plural", "small pouch off the large intestine (singular/plural)", "lx", "", []],
    ["artery / arteries", "ar-ter-e / ar-ter-es", "singular / plural", "vessel carrying blood from the heart (singular/plural)", "lx", "", []],
    ["ATP", "ah-DEN-o-sene tri-FOS-fate", "The energy compound of the cell that stores energy needed for cell activities", "the cell’s energy-carrying compound", "og", "", ["ATP"]],
    ["auricular region", "", "Around the ears", "around the ears", "cv", "", []],
    ["axillary", "", "Axillae (armpits)", "the armpits", "cv", "", []],
    ["biceps brachii", "BYE-seps BRAY-kee-eye", "A muscle located on top of the upper arm that flexes the lower arm by pulling on the bones of the forearm", "two-headed upper-arm muscle", "ts", "", []],
    ["biology", "", "The study of all forms of life and living things.", "study of living things", "og", "", []],
    ["biopsy", "BĪ-op-sē", "Removal and examination of living tissue to determine a diagnosis.", "sampling of living tissue", "og", "", []],
    ["body cavity", "kav-i-te", "a hollow place or space, or a potential space, within the body or one of its organs", "hollow space in the body", "cv", "", []],
    ["body plane", "", "Imaginary flat surfaces that divide (used in anatomic diagrams).", "imaginary flat surfaces dividing the body", "dr", "", []],
    ["brachial", "BRĀ-kē-al", "Pertaining to the arm.", "of the arm", "cv", "", []],
    ["buccal", "", "Cheeks of the face", "the cheeks", "cv", "", []],
    ["bursa / bursae", "ber-sah / bur-sae", "singular / plural", "fluid sac near a joint (singular/plural)", "lx", "", []],
    ["canal (alimentary)", "kah-nal", "the musculomembranous digestive tube extending from the mouth to the anus", "the digestive tube from mouth to anus", "lx", "", []],
    ["carbohydrates", "kar-bo-HI-drates", "The category of organic compounds that includes sugars and starches", "sugars and starches", "og", "", []],
    ["carcinogen", "", "Agent causing cancer", "cancer-causing substance", "og", "", []],
    ["carcinogenic", "", "Has cancer-causing properties", "cancer-causing", "og", "", []],
    ["carcinoma / carcinomata", "kahr-si-no-mah / kahr-si-no-ma-ta", "singular / plural", "cancer of epithelial tissue (singular/plural)", "lx", "", []],
    ["cardiac muscle", "KAR-dē-ak", "Involuntary striated muscle found only in the heart.", "heart muscle tissue", "ts", "", []],
    ["cardiology", "kar-dee-ALL-oh-jee", "The medical specialty associated with the cardiovascular system", "heart and vessel medicine", "sy", "", []],
    ["cardiovascular system", "kar-de-o-vas-ku-lar sis-tem", "System includes the heart and blood vessels, which pump and transport blood throughout the body.", "heart and blood vessels", "sy", "", []],
    ["carpal", "", "Wrist", "the wrist", "cv", "", []],
    ["cartilage", "KAR-tih-lij", "Connective tissue that acts as a shock absorber in joints", "firm shock-absorbing connective tissue", "ts", "", []],
    ["catabolism", "", "To break down.", "breaking-down metabolism", "og", "", []],
    ["caudal", "KAW-dul", "pertaining to the tail; below or toward the feet", "toward the tail; lower", "dr", "", []],
    ["cell", "sel", "Minute protoplasmic masses making up organized tissue, consisting of the nucleus surrounded by cytoplasm enclosed in a cell or plasma membrane. Fundamental, structural, and functional unit of living organisms.", "basic units of living things", "og", "", []],
    ["cell membrane", "sel mem-bran", "A thin layer of tissue serving as the wall of a cell; selectively allows substances to pass in and out of the cell and refuses passage to others.", "cell’s outer boundary", "og", "", []],
    ["cephalic", "se-FAL-ik", "relating to the head; toward the head", "toward the head", "dr", "", []],
    ["cervical region", "SUR-vi-kuhl", "Region of the spinal column located in the neck", "neck region of the spine", "cv", "", []],
    ["chromosome", "kroh-moh-sohms", "Thread-like structures in the cell nucleus that control growth, repair, and reproduction of the body.", "gene-carrying structure in the nucleus", "og", "", []],
    ["clavicular", "", "On each side of the suprasternal notch", "collarbone area", "cv", "", []],
    ["coccygeal region", "kok-SIJ-ee-uhl", "Region of the spinal column; tailbone", "of the tailbone", "cv", "", []],
    ["computed tomography scan", "kŏm-PŪ-tĕd tō-MŎG-ră-fē", "Narrow beam of x-rays with a contrast medium (provides more detail) or without a contrast medium that targets a specific organ or body area to produce multiple cross-sectional images for detecting pathological conditions such as tumors or metastases", "CT scan", "dr", "", ["CT"]],
    ["connective tissue", "ko-nek-tiv tish-u", "The fibrous tissue of the body that binds together and is the ground substance of the various parts and organs of the body; examples are bones, tendons, and so on.", "supporting tissue such as bone and tendon", "ts", "", []],
    ["constriction", "kon-strik-shun", "making something narrow; to contract; to close (an opening)", "narrowing, tightening", "lx", "", []],
    ["contralateral", "kon-tra-LAT-er-al", "Pertaining to the opposite side of the body.", "on the opposite side", "dr", "", []],
    ["cranial", "", "relating to the head; toward the head", "toward the skull", "dr", "", []],
    ["cranial cavity", "KRAY-nee-al", "The cavity inside the skull, or the cranium, contains the brain.", "space inside the skull", "cv", "", []],
    ["crisis / crises", "kri-sis / kri-ses", "singular / plural", "turning point of an illness (singular/plural)", "lx", "", []],
    ["cytologist", "", "Physician who studies cells", "cell specialist", "og", "", []],
    ["cytology", "sigh-TALL-oh-jee", "The study of cells and their functions", "study of cells", "og", "", []],
    ["cytoplasm", "SIGH-toh-plazm", "The protoplasm of a cell exclusive of that of the nucleus (nucleoplasm).", "cell fluid outside the nucleus", "og", "", []],
    ["cytosis", "", "Abnormal condition of cells", "abnormal condition of cells", "og", "", []],
    ["deep", "dēp", "Away from the surface of the body.", "away from the surface", "dr", "", []],
    ["dermatology", "der-mah-TALL-oh-jee", "The medical specialty associated with the integumentary system (skin)", "study of the skin", "sy", "", []],
    ["diagnosis / diagnoses", "di-ag-no-sis / di-ag-no-sez", "singular / plural", "identification of a disease (singular/plural)", "lx", "", []],
    ["diaphragm", "DYE-ah-fram", "A physical wall and muscle used for breathing that separates the thoracic cavity and the abdominopelvic cavity", "muscle between chest and abdomen", "cv", "", []],
    ["dietetic technician, registered", "", "Works as a member of the food service, management, and healthcare team independently or in consultation with a registered dietitian. Supervises support staff, monitors cost control procedures...", "registered dietetic technician", "sy", "", ["DTR"]],
    ["digestive system", "gas-tro-in-tes-ti-nal sis-tem", "A long tube commonly called the GI tract; consists of mouth, esophagus, stomach, and intestines; accessory organs are pancreas, liver, gallbladder, and salivary glands.", "digestive tract and organs", "sy", "", []],
    ["dilatation, dilation", "dil-ah-ta-shun, di-la-shun", "stretched beyond normal dimensions; the widening of something, expansion, opening", "widening, expansion", "lx", "", []],
    ["distal", "DIS-tal", "Farthest from the point of attachment to the trunk; farthest from the point of origin.", "farther from the point of origin", "dr", "", []],
    ["diverticulum / diverticula", "di-ver-tik-u-lum / di-ver-tik-u-la", "singular / plural", "pouch in the wall of a passage (singular/plural)", "lx", "", []],
    ["DNA", "de-ok-se-ri-bo-nu-KLE-ik", "Deoxyribonucleic acid, the chemical that regulates the activities of the cell.", "genetic material", "og", "", ["DNA"]],
    ["dorsal", "pos-TEER-ee-or", "toward the back or upper surface", "towards the back side", "dr", "", []],
    ["dorsal cavity", "DOR-sal KAH-vih-tee", "The posterior cavity at the back of the body, subdivided into the cranial and vertebral cavities.", "back body cavity", "cv", "", []],
    ["dorsal recumbent position", "DOR-sal rē-KUM-bent", "Lying on the back with knees bent and feet flat on the table.", "lying on the back with knees bent", "dr", "", []],
    ["dorsum", "", "Top of the foot.", "top of the foot", "dr", "", []],
    ["ear canal", "kah-nal", "The passage from the outer ear to the eardrum; used in the sense of hearing.", "passage leading into the ear", "lx", "", []],
    ["embryology", "", "Studies the origin (beginnings) and the development of an organism. Covers from the 2nd to the 8th week after conception.", "study of early development before birth", "og", "", []],
    ["endocrine system", "en-do-krin sis-tem", "Glands and other structures that make hormones and release them directly into the circulatory system; ductless glands.", "hormone-secreting glands", "sy", "", []],
    ["endocrinology", "en-doh-krin-ALL-oh-jee", "The medical specialty dealing with the endocrine system", "study of hormone glands", "sy", "", []],
    ["endoscopy", "ĕn-DŎS-kō-pē", "Visual examination of the interior of organs and cavities with a specialized lighted instrument called an endoscope", "looking inside with a scope", "dr", "", []],
    ["enzyme", "EN-zime", "An organic substance that speeds the rate of a metabolic reaction", "protein that speeds up a reaction", "og", "", []],
    ["epigastric region", "ep-ih-GAS-trick", "The middle upper region of the abdominopelvic area, upon the stomach.", "region above the stomach", "cv", "", []],
    ["epithelial cell", "", "Skin cell that may be square and flat.", "cell of the lining tissue", "og", "", []],
    ["epithelial tissue", "ep-ih-THEE-lee-um", "Found in the skin and in the lining of blood vessels, making up the outer covering of external and internal body surfaces.", "lining tissue", "ts", "", []],
    ["epithelioma", "", "Tumor of the skin", "tumour of epithelial tissue", "ts", "", []],
    ["erect", "", "Standing position.", "standing upright", "dr", "", []],
    ["erythrocyte", "", "Red blood cell", "red blood cell", "og", "", []],
    ["extension", "ek-STEN-shun", "Straightening a joint so the angle between the bones increases.", "straightening a joint", "dr", "", []],
    ["external", "", "Outside, exterior to", "outside, outer", "dr", "", []],
    ["femoral", "FEM-or-al", "Pertaining to the thigh (femur).", "of the thigh", "cv", "", []],
    ["femur / femora", "fe-mo-ris / fe-mo-ra", "singular / plural", "thigh bone (singular/plural)", "lx", "", []],
    ["fetus", "", "The developing organism after eight weeks.", "unborn baby after week 8", "og", "", []],
    ["fibroma / fibromata", "fi-bro-mah / Fi-bro-ma-ta", "singular / plural", "tumour of fibrous tissue (singular/plural)", "lx", "", []],
    ["fibrosis", "", "Condition of the fibrous tissue", "abnormal fibrous-tissue growth", "ts", "", []],
    ["flexion", "FLEK-shun", "Bending a joint so the angle between the bones decreases.", "bending a joint", "dr", "", []],
    ["fluoroscopy", "floo-or-ŎS-kō-pē", "Radiographic procedure that uses a fluorescent screen instead of a photographic plate to produce a visual image from x-rays that pass through the patient, resulting in continuous imaging of the motion of internal structures and immediate serial images", "live moving X-ray imaging", "dr", "", []],
    ["foramen", "for-ra-men", "a natural opening or passage, especially one into or through a bone", "opening or passage (singular/plural)", "lx", "", []],
    ["Fowler position", "FOW-ler", "Semi-sitting position with the head of the bed raised; promotes lung expansion when breathing is difficult.", "half-sitting position", "dr", "", []],
    ["frontal plane", "KOR-eh-nal", "A vertical, lengthwise plane running from side to side that divides the body into front and back portions", "plane dividing front from back", "dr", "", []],
    ["gamete", "", "Sex cell; two types only: sperm and egg.", "sex cell", "og", "", []],
    ["gastroenterology", "gas-troh-en-ter-ALL-oh-jee", "The medical specialty associated with the digestive system", "study of the digestive system", "sy", "", []],
    ["gene", "jene", "A hereditary unit composed of DNA and combined with other genes to form the chromosomes", "unit of heredity", "og", "", []],
    ["genitourinary system", "jen-i-to-u-re-ner-e sis-tem", "Reproductive and urinary organs, also called urogenital system (GU or UG).", "urinary and reproductive organs", "sy", "", []],
    ["genupectoral", "", "Kneeling with chest resting on examining table.", "kneeling, chest on the table", "dr", "", []],
    ["glucose", "GLU-kose", "A simple sugar that circulates in the blood, the main energy source for metabolism", "blood sugar", "og", "", []],
    ["gluteal", "GLŪ-tē-al", "Pertaining to the buttocks.", "of the buttocks", "cv", "", []],
    ["gynecology", "gigh-neh-KALL-oh-jee", "The medical specialty associated with the female reproductive system", "women’s health medicine", "sy", "", []],
    ["hematology", "hee-mah-TALL-oh-jee", "The medical specialty associated with the blood (hematic system)", "study of blood", "sy", "", []],
    ["hiatus", "hi-a-tus", "a gap, cleft, or opening", "gap, notch or tear", "lx", "", []],
    ["hidropoiesis", "hid-roh-poi-ee-sis", "refers to the production of sweat", "sweat production", "lx", "", []],
    ["histologist", "hiss-TOL-oh-jist", "Someone who specializes in the study of tissues", "tissue specialist", "og", "", []],
    ["histology", "hiss-TALL-oh-jee", "Studies the body microscopically — the minute structures and their composition, plus the functions of normal cells, tissue, and organs.", "study of tissues", "og", "", []],
    ["homeostasis", "ho-me-o-sta-sis", "A steady state: the tendency of stability in the normal physiologic systems of the organism to maintain a balance optimal for survival.", "stable internal balance", "og", "", []],
    ["hydrencephalomeningocele", "hi-dren-cefal-o-men-in-jo-sel", "refers to herniation of brain substance and meninges caused by a defect, with accumulation of cerebrospinal fluid along with brain substance in the sac", "protrusion of brain and meninges with fluid", "lx", "", []],
    ["hypochondriac region", "high-poh-KON-dree-ack", "The two regions just below the cartilage of the ribs, immediately over the abdomen.", "upper side regions below the ribs", "cv", "", []],
    ["hypogastric region", "high-poh-GAS-trick", "Middle section in the lower row; just inferior to the umbilical section", "region below the stomach", "cv", "", []],
    ["immunology", "im-yoo-NALL-oh-jee", "The medical specialty associated with the lymphatic system and body protection", "study of immunity", "sy", "", []],
    ["in situ", "in SĪ-too", "In its original place; not spread.", "in its original place", "og", "", []],
    ["in vitro", "in VĒ-trō", "In the laboratory; literally “in glass”.", "in the laboratory", "og", "", []],
    ["in vivo", "in VĒ-vō", "Within the living body.", "within the living body", "og", "", []],
    ["inferior", "in-FEER-ee-or", "More toward feet or tail or below another structure", "lower; toward the feet", "dr", "", []],
    ["inflammation", "ĭn-flă-MĀ-shun", "Protective response of body tissues to irritation, infection, or allergy", "swelling, redness, heat and pain", "ts", "", []],
    ["infraorbital", "", "Below the eyes", "below the eyes", "cv", "", []],
    ["infrascapular", "", "On each side of the chest, down to the last rib", "below the shoulder blades", "cv", "", []],
    ["inguinal region", "ING-gwih-nal or ILL-ee-ack", "Right and left lower regions of the abdominopelvic area.", "right and left lower side regions", "cv", "", []],
    ["integumentary system", "in-teg-u-men-ter-e sis-tem", "Skin serves as the external covering of the body; accessory organs of this system are nails, hair, and oil and sweat glands.", "skin, hair, nails and glands", "sy", "", []],
    ["internal", "", "Within, interior to", "inside, interior", "dr", "", []],
    ["interscapular", "", "On the back, between scapulae (shoulder blades)", "between the shoulder blades", "cv", "", []],
    ["intradermal", "in-tra-DER-mal", "Within the skin (dermis); an injection given just under the epidermis.", "within the skin", "lx", "", []],
    ["intramuscular", "in-tra-MUS-kyū-lar", "Within a muscle.", "injected into a muscle", "lx", "", []],
    ["intrathecal", "in-tra-THĒ-kal", "Within the spinal canal (the space around the spinal cord).", "within the spinal membranes", "lx", "", []],
    ["intravenous", "in-trah-VEE-nus", "Injection into veins", "given into a vein", "lx", "", []],
    ["introitus", "in-tro-itus", "opening or entrance to a canal or cavity such as the vagina", "entrance to a passage", "lx", "", []],
    ["ipsilateral", "", "Pertains to one side.", "on the same side", "dr", "", []],
    ["karyotype", "KAR-ē-ō-tīp", "A picture of a person’s chromosomes arranged in pairs by size.", "chromosome map", "og", "", []],
    ["knee-chest position", "", "Kneeling with the chest resting on the table (genupectoral); facilitates rectal examination.", "kneeling with chest down", "dr", "", []],
    ["lateral", "LAT-er-al", "Means to the side, as the eyes are to the nose.", "toward the side", "dr", "", []],
    ["lateral recumbent", "", "Lying on left side with right thigh and knee drawn up to chest.", "lying on one side", "dr", "", []],
    ["lateromedial", "", "Beginning from the side and going toward the middle.", "from the side toward the centre", "dr", "", []],
    ["ligament", "LIG-a-ment", "Band of connective tissue that connects bone to bone.", "band joining bone to bone", "ts", "", []],
    ["lipid", "LIP-id", "A category of organic compounds that includes fats", "fat", "og", "", []],
    ["liposuction", "", "Removal of fat cells by suction", "fat removal by suction", "ts", "", []],
    ["lithotomy position", "lith-OT-ō-mē", "Lying on the back with hips and knees flexed and feet in stirrups; used for pelvic examination and Pap test.", "on the back, legs raised in stirrups", "dr", "", []],
    ["lumbar region", "LUM-bar", "The left and right regions of the body in the back and sides between the lowest ribs and the pelvis.", "lower back", "cv", "", []],
    ["lumen", "loo-men", "opening within a hollow tube or organ", "inner channel of a tube (singular/plural)", "lx", "", []],
    ["lymphatic system", "lim-fa-tik sis-tem", "System includes the lymph, the glands and vessels of the lymphatic system, and the nonspecific and specific defense immune system.", "lymph vessels and immune defence", "sy", "", []],
    ["magnetic resonance imaging", "măg-NĔT-ĭc RĔZ-ĕn-ăns ĬM-ĭj-ĭng", "Radiographic technique that uses electromagnetic energy to produce multiplanar cross-sectional images of the body", "magnetic imaging", "dr", "", ["MRI"]],
    ["mammary", "", "Breast area", "breast area", "cv", "", []],
    ["meatus", "me-a-tus", "urinary passage or opening", "external opening of a passage", "lx", "", []],
    ["medial", "MEE-dee-al", "Refers to middle or near middle of body or structure", "toward the middle", "dr", "", []],
    ["mediastinum", "mee-dee-as-TYE-num", "The mass of tissues and organs separating the sternum in front and the vertebral column behind, containing the heart and its large vessels.", "central chest space between the lungs", "cv", "", []],
    ["mediolateral", "", "Pertaining to the middle and one side.", "from the centre toward the side", "dr", "", []],
    ["meiosis", "mī-Ō-sis", "Cell division that halves the number of chromosomes; it forms the sex cells (ovum and sperm).", "cell division that halves the chromosomes", "og", "", []],
    ["meninx / meninges", "me-ninks / me-nin-ges", "singular / plural", "membranes around the brain and spinal cord (singular/plural)", "lx", "", []],
    ["mental", "", "Region of the chin", "the chin", "cv", "", []],
    ["metabolism", "me-tab-o-lizm", "Sum of the body's physical and chemical processes that convert food into elements for body growth, energy, building body parts (anabolism), and degrading body substances for recycling or excretion (catabolism).", "all the body’s chemical processes", "og", "", []],
    ["midsagittal plane", "mid-SAJ-ih-tal", "A sagittal plane that passes through the middle of the body, dividing it into equal right and left halves", "plane dividing body into equal left and right", "dr", "", []],
    ["midsagittal section", "", "A sagittal section that divides the body into equal right and left portions.", "midline cut into left and right halves", "dr", "", []],
    ["mitochondrion", "", "Generate energy for the cell", "cell’s energy factories", "og", "", []],
    ["mitosis", "mi-TO-sis", "Cell division", "ordinary cell division", "og", "", []],
    ["mouth", "mouth", "The opening for eating, breathing and speaking (vocalization).", "opening of the digestive tract in the face", "lx", "", []],
    ["mucus", "MU-kus", "A thick fluid secreted by cells in membranes and glands that lubricates and protects tissues", "thick slime secreted by membranes", "ts", "", []],
    ["muscle cell", "", "Long and slender cell.", "long, slender contracting cell", "og", "", []],
    ["muscle tissue", "mus-el tish-u", "Tissue that contracts; consists of striated (striped), cardiac, and smooth muscle.", "contracting tissue", "ts", "", []],
    ["musculoskeletal system", "mus-ku-lo-skel-e-tal sis-tem", "The system that supports the body; protects organs; provides body movement; and includes muscles, bones, and cartilage.", "bones and muscles", "sy", "", []],
    ["myoma", "", "Tumor in the muscle", "benign muscle tumour", "ts", "", []],
    ["myosarcoma", "", "Malignant muscle tumor", "malignant muscle tumour", "ts", "", []],
    ["myositis", "", "Inflammation of a muscle", "muscle inflammation", "ts", "", []],
    ["nares (nostril)", "nair-eez", "breathing; sense of smell", "openings of the nose", "lx", "", []],
    ["nasal", "", "Nose", "the nose", "cv", "", []],
    ["nasolacrimal duct", "ney-zoh-lak-ruh-muh-l duhkt", "carries tears from the lacrimal sac into the nasal cavity", "tear duct to the nose", "lx", "", []],
    ["neoplasm", "", "A new growth", "new abnormal growth", "og", "", []],
    ["nephrology", "neh-FROL-oh-jee", "The medical specialty dealing with the kidneys", "study of the kidneys", "sy", "", []],
    ["nerve cell", "", "Cell that may be long and have fingerlike extensions, which carry impulses.", "cell that carries electrical signals", "og", "", []],
    ["nervous system", "ner-vus sis-tem", "Brain and spinal cord make up the central nervous system (CNS); the autonomic nervous system (ANS) or the peripheral nervous system consists of 12 pairs of cranial nerves and 31 pairs of spinal nerves.", "brain, spinal cord and nerves", "sy", "", []],
    ["nervous tissue", "nerv tish-u", "A collection of nerve fibers that conduct impulses that control and coordinate body activities.", "impulse-carrying tissue", "ts", "", []],
    ["neurology", "noo-RALL-oh-jee", "The medical specialty dealing with the nervous system", "study of the nervous system", "sy", "", []],
    ["neuron", "NOOR-on", "Nerve cell; the functional cell of the nervous system.", "impulse-carrying cell", "ts", "", []],
    ["neuropathy", "", "Condition of the nerve / A disease of the nerves", "nerve disease", "ts", "", []],
    ["nipple", "nip-uh-l", "The projection on the breast through which milk is carried to the infant.", "tip of the breast", "lx", "", []],
    ["nuclear scan", "NŪ-klē-ăr", "Diagnostic technique that produces an image of an organ or area by recording the concentration of a radiopharmaceutical substance called a tracer, usually introduced into the body by ingestion, inhalation, or injection", "radioactive tracer imaging", "dr", "", []],
    ["nucleus", "nu-kli-us / nu-clei", "The cell's control center; directs all cellular activities based on the information contained in its chromosomes", "cell’s control centre", "og", "", []],
    ["occipital", "", "Lower posterior head", "back of the head", "cv", "", []],
    ["oral", "OR-al", "Pertaining to the mouth; a drug route taken by swallowing.", "of the mouth; by mouth", "lx", "", []],
    ["orbital", "", "Around the eyes", "around the eyes", "cv", "", []],
    ["organ", "or-gan", "Tissues arranged together to perform a specific function; these internal structures are contained within the body cavities.", "structure with a specific job", "og", "", []],
    ["organelle", "OR-gah-nel", "A specialized structure in the cytoplasm of a cell", "tiny structure inside a cell", "og", "", []],
    ["organism", "", "The body as a whole", "living being", "og", "", []],
    ["organomegaly", "", "Enlargement of an organ", "enlarged organ", "og", "", []],
    ["orifice", "or-i-fis", "any orifice such as the anal orifice", "body opening, such as the anus", "lx", "", []],
    ["orthopedics", "or-thoh-PEE-diks", "The medical specialty associated with the musculoskeletal system", "bone and joint medicine", "sy", "", []],
    ["os", "os", "mouth opening: os uteri: mouth of the uterus or cervix", "mouth-like opening, such as the cervix", "lx", "", []],
    ["otorhinolaryngology", "oh-toh-rye-noh-lair-in-GALL-oh-jee", "The medical specialty treating conditions of the ear, nose, and throat", "ear, nose and throat medicine", "sy", "", []],
    ["ovary / ovaries", "o-var-e / o-var-es", "singular / plural", "egg-producing gland (singular/plural)", "lx", "", []],
    ["ovum / ova", "o-vum / o-va", "singular / plural", "egg cell (singular/plural)", "lx", "", []],
    ["palpate", "pal-peyt", "Touch; the examination or exploring by touching (an organ or area of the body), usually as a diagnostic aid.", "examining by touch", "lx", "", []],
    ["palpebrate", "pal-pee-brit", "Blink or wink.", "blinking", "lx", "", []],
    ["palpitate", "pal-pi-teyt", "Pulsate, quiver, throb, tremble.", "throbbing, pulsing", "lx", "", []],
    ["parenteral", "par-EN-ter-al", "An invasive method of administering drugs as it requires skin to be punctured by a needle", "given other than by mouth", "lx", "", []],
    ["parietal", "", "Pertaining to the outer wall of a cavity", "lining the cavity wall", "ts", "", []],
    ["paronychia", "par-uh-nik-ee-uh", "Infection of the nail; refers to inflammation of the epidermis (folds of skin) bordering a nail of a finger or toe, usually characterized by infection and pus formation.", "infection around the nail", "lx", "", []],
    ["patellar", "pa-TEL-ar", "Pertaining to the kneecap.", "of the kneecap", "cv", "", []],
    ["patent", "pa-tent", "adjective, meaning open or not plugged, as in \"the tube is patent\"", "open, unblocked", "lx", "", []],
    ["pathology", "", "Studies the changes caused by disease to the structures of the body or changes due to disease that alter the functions of the body.", "study of disease", "og", "", []],
    ["pectoral", "", "Chest", "relating to the chest muscles or breast", "cv", "", []],
    ["pelvic cavity", "PEL-vick", "Contains the urinary bladder, urethra, part of the large intestine, and the rectum, uterus, and vagina in the female, and prostate in the male.", "space within the hip bones", "cv", "", []],
    ["perforation", "per-fo-ra-shun", "a hole in something, e.g., perforation of the stomach wall by a gastric ulcer", "a hole through a wall", "lx", "", []],
    ["pericardial cavity", "per-i-KAR-dē-al", "Space surrounding the heart.", "space around the heart", "cv", "", []],
    ["perionychium", "per-ee-oh-nik-ee-uhm", "Structure that surrounds the nail; refers to the epidermis surrounding the base and sides of a fingernail or toenail.", "tissue around the nail", "lx", "", []],
    ["peritoneal cavity", "per-i-to-ne-al kav-i-te", "The space containing the stomach, intestines, liver, gallbladder, pancreas, spleen, reproductive organs, and urinary bladder.", "abdominal lining space", "cv", "", []],
    ["peritoneum", "pair-ih-toh-NEE-um", "A two-layer membrane that lines the abdominopelvic cavity and encases the viscera", "membrane lining the abdomen", "ts", "", []],
    ["phalanx / phalanges", "fa-lanks / fa-lan-ges", "singular / plural", "finger or toe bone (singular/plural)", "lx", "", []],
    ["physiology", "fiz-ee-OL-oh-jee", "The study of how the body's parts work together; reveals the \"how it works\"", "study of body function", "og", "", []],
    ["plantar", "", "Bottom of the foot; sole of the foot.", "sole of the foot", "dr", "", []],
    ["pleura", "PLOO-rah", "A two-layer membrane that lines the thoracic cavity and encases the viscera", "membrane around the lungs", "ts", "", []],
    ["pleural cavity", "pleu-ral kav-i-te", "The thoracic cavity containing the lungs, trachea, esophagus, and thymus gland.", "space around the lungs", "cv", "", []],
    ["popliteal", "", "Behind the knee", "behind the knee", "cv", "", []],
    ["positron emission tomography scan", "PŎZ-ĭ-trŏn ē-MĬSH-ŭn tō-MŎG-ră-fē", "Nuclear imaging study that combines CT with radiopharmaceuticals to produce a cross-sectional image of radioactive dispersements in a section of the body to reveal the areas where the radiopharmaceutical is being metabolized and where there is a deficiency in metabolism; useful in evaluating Alzheimer disease and epilepsy", "PET scan", "dr", "", ["PET"]],
    ["posterior", "poss-TEE-ree-or", "More toward back or spinal cord side of body", "towards the back of the body", "dr", "", []],
    ["postmortem", "pōst-MOR-tem", "After death.", "after death", "og", "", []],
    ["prone", "PROHN", "Body is lying horizontally and facing downward", "lying face down", "dr", "", []],
    ["protein", "PRO-tene", "A category of organic compounds that includes structural materials, enzymes, and some hormones", "building-block nutrient", "og", "", []],
    ["proximal", "PROCK-sih-mal", "Nearest to the point of attachment to the trunk; nearest the point of origin.", "nearer the point of origin", "dr", "", []],
    ["pubic", "", "Below the hypogastric region (above the pubis)", "of the bone at the front of the pelvis", "cv", "", []],
    ["quadrant", "KWOD-rant", "One of four areas of the abdomen formed by two lines crossing at the umbilicus.", "one quarter of the abdomen", "cv", "", []],
    ["radiography", "rā-dē-ŎG-ră-fē", "Production of captured shadow images on photographic film through the action of ionizing radiation passing through the body from an external source", "X-ray imaging", "dr", "", []],
    ["radiopharmaceutical", "rā-dē-ō-fărm-ă-SŪ-tĭ-kăl", "Drug that contains a radioactive substance, which travels to an area or a specific organ that will be scanned", "radioactive drug for scans", "dr", "", []],
    ["registered dietitians nutritionists", "", "Professionals trained in applying the principles of nutrition to food selection and meal preparation. They help prevent and treat illnesses by promoting healthy eating habits...", "registered dietitian nutritionists", "sy", "", ["RDN"]],
    ["reproductive system", "RĒ-prō-DŬK-tĭv", "The system that controls reproduction and heredity and is either male or female.", "organs that produce offspring", "sy", "", []],
    ["respiratory system", "re-spi-rah-to-re sis-tem", "Includes the trachea, lungs, and bronchi and provides the exchange of gases, absorbs oxygen, and expels carbon dioxide.", "lungs and airways", "sy", "", []],
    ["retroperitoneal", "re-trō-per-i-tō-NĒ-al", "Behind the peritoneum; for example, the kidneys.", "behind the abdominal lining", "ts", "", []],
    ["RNA", "ri-bo-nu-KLE-ik", "An organic compound involved in the manufacture of proteins within cells", "messenger nucleic acid", "og", "", ["RNA"]],
    ["sacral region", "SAY-krahl", "Region of the spinal column located in the lower back", "lowest back, over the sacrum", "cv", "", []],
    ["sacrum", "sak-ruhm", "refers to a bone resulting from the fusion of two or more vertebrae between the lumbar and the coccygeal regions in humans being composed usually of five fused vertebrae and forming the posterior wall of the pelvis; it means the area of the tailbone", "triangular bone at the base of the spine", "cv", "", []],
    ["sagittal plane", "SAJ-ih-tal", "A vertical plane that passes from front to back, dividing the body into right and left sides.", "plane dividing left from right", "dr", "", []],
    ["sarcocele", "sar-ko-sel", "refers to a fleshy tumor or sarcoma of the testis", "fleshy tumour of the testis", "lx", "", []],
    ["scan", "skăn", "Process of using a moving device or a sweeping beam of radiation to produce images of an internal area, organ, or tissue of the body", "imaging study", "dr", "", []],
    ["sensory system", "SĔN-sŏ-rē", "Made up of the eyes, ears, nose, and mouth, along with the nervous system, processes stimuli and allows the body to act and respond.", "eyes, ears and other senses", "sy", "", []],
    ["sepsis", "SĔP-sĭs", "Body's inflammatory response to infection in which there is fever, elevated heart and respiratory rates, and low blood pressure", "infection spread through the blood", "ts", "", []],
    ["simple epithelium", "", "Epithelium with a single layer of cells; absorbs and transfers materials.", "single-layer lining tissue", "ts", "", []],
    ["Sims position", "SIMZ", "Lying on the left side with the right knee drawn up; used for rectal examination and enema.", "on the left side, right knee drawn up", "dr", "", []],
    ["single-photon emission computed tomography scan", "SĬNG-gŭl FŌ-tŏn ē-MĬ-shŭn cŏm-PŪ-tĕd tō-MŎG-ră-fē", "Nuclear imaging study that scans organs after injection of a radioactive tracer and employs a specialized gamma camera that detects emitted radiation to produce a three-dimensional image from a composite of numerous views; used to show how blood flows to an organ and helps determine how well the organ is functioning", "SPECT scan", "dr", "", ["SPECT"]],
    ["smooth muscle", "", "Involuntary (visceral) muscle in the walls of hollow organs, ducts and vessels.", "involuntary muscle of organ walls", "ts", "", []],
    ["spermatozoon / spermatozoa", "sper-ma-to-zo-on / sper-ma-to-zo-a", "singular / plural", "sperm cell (singular/plural)", "lx", "", []],
    ["spinal cavity", "VER-teh-bral", "The cavity inside the vertebral column, or spine, that contains the spinal cord.", "space holding the spinal cord", "cv", "", []],
    ["sternal", "", "Over the sternum", "over the breastbone", "cv", "", []],
    ["stoma", "sto-mah", "artificial opening established by colostomy, ileostomy, or tracheostomy", "surgical opening onto the skin", "lx", "", []],
    ["strata", "strey-tuh", "plural of stratum, layers, e.g., strata of tissues refer to layers of tissues", "layers", "lx", "", []],
    ["stratified epithelium", "", "Epithelium arranged in several layers; protects deeper tissues.", "many-layered lining tissue", "ts", "", []],
    ["striae", "strahy-ee", "refers to a slight or narrow furrow, ridge, stripe, or streak, especially one of a number in parallel arrangement", "streaks or stripes", "lx", "", []],
    ["striated muscle", "STRĪ-āt-ed", "Skeletal (voluntary) muscle with visible bands under the microscope.", "striped voluntary muscle", "ts", "", []],
    ["subcutaneous", "sub-kyū-TĀ-nē-us", "Beneath the skin, into the fatty layer.", "beneath the skin", "lx", "", []],
    ["sublingual", "sub-LING-gwal", "Includes drugs held under the tongue and not swallowed", "under the tongue", "lx", "", []],
    ["submental", "", "Below the chin", "below the chin", "cv", "", []],
    ["superficial", "sū-pĕr-FĬSH-ăl", "Near the surface of the body.", "near the surface", "dr", "", []],
    ["superior", "soo-PEER-ee-or", "More toward head, or above another structure", "toward the head; upper", "dr", "", []],
    ["supine", "soo-PINE", "Body is lying horizontally and facing upward", "lying face up", "dr", "", []],
    ["supraclavicular", "", "Above the clavicles", "above the collarbones", "cv", "", []],
    ["system", "sis-tem", "A set of body organs that work together for a common purpose.", "organs working together", "og", "", []],
    ["tendon", "TEN-don", "Band of connective tissue that connects muscle to bone.", "band joining muscle to bone", "ts", "", []],
    ["thoracic cavity", "thoh-RAS-ick", "The chest cavity, which contains the lungs, heart, aorta, esophagus, and trachea.", "chest cavity", "cv", "", []],
    ["thoracic region", "tho-RASS-ik", "Region of the spinal column located in the chest", "chest area of the trunk", "cv", "", []],
    ["thorax / thoraces", "thor-aks / thor-a-sez", "singular / plural", "the chest (singular/plural)", "lx", "", []],
    ["thrombus / thrombi", "throm-bus / throm-bi", "singular / plural", "blood clot (singular/plural)", "lx", "", []],
    ["tissue", "tish-u", "Composed of similar cells working together to perform similar tasks (muscle, connective, nerve, and epithelial)", "group of similar cells working together", "og", "", []],
    ["tomography", "tō-MŎG-ră-fē", "Radiographic technique that produces a film representing a detailed cross-section of tissue structure at a predetermined depth", "slice imaging", "dr", "", []],
    ["transverse plane", "trans-vers", "A horizontal (cross-section) plane, parallel to the ground and through the waistline, dividing the body into upper and lower halves.", "horizontal, crosswise", "dr", "", []],
    ["Trendelenburg position", "tren-DEL-en-berg", "The whole table is tilted with the head lower than the feet; used for postural drainage and some surgeries.", "head-down tilt", "dr", "", []],
    ["ultrasonography", "ŭl-tră-sŏn-ŎG-ră-fē", "Imaging technique that uses high-frequency sound waves (ultrasound) that bounce off body tissues and are recorded to produce an image of an internal organ or tissue", "ultrasound imaging", "dr", "", ["US"]],
    ["umbilical region", "um-BILL-ih-cahl", "Middle region in the middle row; contains the umbilicus (navel)", "region around the navel", "cv", "", []],
    ["umbilicus", "um-BIL-i-kus", "The navel.", "the navel", "cv", "", []],
    ["urinary meatus", "yoor-uh-ner-ee mee-ey-tuhs", "The external opening of the urethra through which urine leaves the body.", "urine outlet", "lx", "", []],
    ["urinary system", "YŪR-ĭ-nār-ē", "The system that includes the kidneys, ureters, bladder, and urethra; it eliminates metabolic waste.", "kidneys, bladder and urine passages", "sy", "", []],
    ["urology", "yoo-RALL-oh-jee", "The medical specialty dealing with the urinary system and male reproductive system", "urinary tract medicine", "sy", "", []],
    ["ventral", "an-TEER-ee-or", "toward the belly or undersurface", "towards the belly side", "dr", "", []],
    ["ventral cavity", "VEN-tral", "The anterior cavity at the front of the body, subdivided into the thoracic and abdominopelvic cavities.", "front body cavity", "cv", "", []],
    ["ventricle", "ven-tri-kul", "a small cavity or chamber, as in the brain or heart", "small chamber in the heart or brain", "lx", "", []],
    ["vertebra / vertebrae", "vur-ta-bra / vur-te-bre", "singular / plural", "spinal bone (singular/plural)", "lx", "", []],
    ["vertebral column", "VER-te-bral", "The spine; a column of vertebrae from the skull to the coccyx.", "the spine", "cv", "", []],
    ["viscera", "VIS-er-ah", "Internal organs contained within the body cavities.", "internal organs", "cv", "", []],
    ["visceral", "VIS-er-al", "Muscle tissue within organs, such as the stomach and intestines", "of the internal organs", "ts", "", []]
  ];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* پیکر — واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها، تجزیه‌گر واژه و مولد سؤال‌ها
 * واژه‌ها از data-terms.js (ادغام خودکار همه فایل‌های استخراج‌شده) می‌آیند؛
 * ریشه‌ها و اختصارها از همان داده‌ها گردآوری و دستی پالایش شده‌اند تا تکراری و ناهمسان نباشند.
 * دنیاها: lx زبان بدن (همه واژه‌ها) • og سازمان‌یابی و سلول • ts بافت‌ها و غشاها • sy دستگاه‌ها و اندام‌ها •
 * dr جهت‌ها، صفحه‌ها و وضعیت‌ها • cv حفره‌ها و نواحی • * عمومی */
(function (root) {
  const EA = root.EA = root.EA || {};

  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const ROOTS_RAW = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', "without, lacking", '*'],
    ['ab-', ['ab'], 'away from', "away from", 'dr'],
    ['ad-', ['ad'], 'toward', "toward", 'dr'],
    ['ana-', ['ana'], 'up, building up', "up, building up", 'og'],
    ['cata-', ['cata'], 'down, breaking down', "down, breaking down", 'og'],
    ['meta-', ['meta'], 'change, beyond', "change, beyond", 'og'],
    ['anti-', ['anti'], 'against', "against", '*'],
    ['bi-', ['bi'], 'two', "two", '*'],
    ['contra-', ['contra'], 'opposite, against', "opposite, against", 'dr'],
    ['ipsi-', ['ipsi'], 'same', "same", 'dr'],
    ['dys-', ['dys'], 'bad, painful, difficult', "bad, painful, difficult", '*'],
    ['endo-', ['endo'], 'within', "within", '*'],
    ['epi-', ['epi'], 'upon, above', "upon, above", 'cv'],
    ['ex-, exo-', ['exo', 'ex'], 'out, outside', "outside", '*'],
    ['homeo-', ['homeo'], 'sameness, unchanging', "unchanging, stable", 'og'],
    ['hyper-', ['hyper'], 'excessive, above', "excessive, above", '*'],
    ['hypo-', ['hypo'], 'below, deficient', "below, low", 'cv'],
    ['in-', ['in'], 'in, into', "in, into", 'lx'],
    ['infra-', ['infra'], 'below', "below", 'cv'],
    ['inter-', ['inter'], 'between', "between", 'cv'],
    ['intra-', ['intra'], 'within', "within", 'lx'],
    ['neo-', ['neo'], 'new', "new", 'og'],
    ['para-', ['para'], 'beside, near, abnormal', "beside, near, abnormal", 'lx'],
    ['peri-', ['peri'], 'around', "around, surrounding", '*'],
    ['post-', ['post'], 'after, behind', "after, behind", '*'],
    ['pre-', ['pre'], 'before, in front of', "before, in front of", '*'],
    ['retro-', ['retro'], 'behind, backward', "behind, backward", 'ts'],
    ['sub-', ['sub'], 'under, below', "below", 'lx'],
    ['supra-', ['supra'], 'above', "above", 'cv'],
    ['trans-', ['trans'], 'across, through', "through, across", '*'],
    ['ultra-', ['ultra'], 'beyond, excess', "beyond, excess", 'dr'],
    // سلول، علم و ساختار (og)
    ['cyt/o', ['cyt'], 'cell', "cell", 'og'],
    ['kary/o, nucle/o', ['kary', 'nucle'], 'nucleus', "cell’s control centre", 'og'],
    ['hist/o, histi/o', ['histi', 'hist'], 'tissue', "tissue", 'og'],
    ['bi/o', ['bio'], 'life', "life", 'og'],
    ['path/o', ['path'], 'disease', "disease", 'og'],
    ['physi/o', ['physi'], 'nature, function', "nature, function", 'og'],
    ['embry/o', ['embry'], 'embryo', "embryo (early unborn baby)", 'og'],
    ['morph/o', ['morph'], 'shape, form', "shape, form", 'og'],
    ['somat/o', ['somat', 'soma', 'some'], 'body', "body", 'og'],
    ['chrom/o', ['chrom'], 'color', "colour", 'og'],
    ['gen/o', ['gen'], 'origin, producing', "origin, producing", 'og'],
    ['carcin/o', ['carcin'], 'cancer', "cancer", 'og'],
    ['onc/o', ['onc'], 'tumor', "tumour", 'og'],
    ['organ/o', ['organ'], 'organ', "organ", 'og'],
    ['bol/o', ['bol'], 'to throw, cast', "to throw, cast", 'og'],
    ['gluc/o, glyc/o', ['gluc', 'glyc'], 'sugar, glucose', "sugar, glucose", 'og'],
    ['prote/o', ['prote'], 'protein', "building-block nutrient", 'og'],
    ['phag/o', ['phag'], 'eat, swallow', "eat, swallow", 'og'],
    ['mit/o', ['mit'], 'thread', "thread", 'og'],
    // بافت‌ها و غشاها (ts)
    ['epitheli/o', ['epitheli'], 'epithelium (covering tissue)', "epithelium (lining tissue)", 'ts'],
    ['fibr/o', ['fibr'], 'fiber', "fibre", 'ts'],
    ['my/o, muscul/o', ['muscul', 'my'], 'muscle', "muscle", 'ts'],
    ['neur/o', ['neur'], 'nerve', "nerve", 'ts'],
    ['lip/o, adip/o', ['adip', 'lip'], 'fat', "fat", 'ts'],
    ['chondr/o', ['chondr'], 'cartilage', "firm shock-absorbing connective tissue", 'ts'],
    ['oste/o', ['oste'], 'bone', "bone", 'ts'],
    ['tend/o, tendin/o', ['tendin', 'tend'], 'tendon', "tendon", 'ts'],
    ['sarc/o', ['sarc'], 'flesh (connective tissue)', "flesh (connective tissue)", 'ts'],
    ['muc/o', ['muc'], 'mucus', "mucus", 'ts'],
    ['pleur/o', ['pleur'], 'pleura', "pleura", 'ts'],
    ['peritone/o', ['peritone'], 'peritoneum', "peritoneum", 'ts'],
    ['pariet/o', ['pariet'], 'wall (of a cavity)', "cavity wall", 'ts'],
    ['viscer/o', ['viscer'], 'internal organs', "viscera (internal organs)", 'ts'],
    ['derm/o, dermat/o, cutane/o', ['dermat', 'derm', 'cutane'], 'skin', "skin", 'ts'],
    ['onych/o', ['onych'], 'nail', "nail", 'ts'],
    ['hidr/o', ['hidr'], 'sweat', "sweat", 'ts'],
    // دستگاه‌ها و اندام‌ها (sy)
    ['cardi/o', ['cardi'], 'heart', "heart", 'sy'],
    ['angi/o, vascul/o', ['angi', 'vascul'], 'vessel', "vessel", 'sy'],
    ['arteri/o', ['arteri'], 'artery', "artery", 'sy'],
    ['ven/o, phleb/o', ['ven', 'phleb'], 'vein', "vein", 'sy'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', "blood", 'sy'],
    ['lymph/o', ['lymph'], 'lymph', "lymph", 'sy'],
    ['immun/o', ['immun'], 'immune, protection', "immunity, protection", 'sy'],
    ['pulmon/o, pneum/o', ['pulmon', 'pneumon', 'pneum'], 'lung', "lung", 'sy'],
    ['bronch/o', ['bronch'], 'bronchus', "bronchus (main airway)", 'sy'],
    ['trache/o', ['trache'], 'trachea (windpipe)', "windpipe", 'sy'],
    ['laryng/o', ['laryng'], 'larynx (voice box)', "voice box", 'sy'],
    ['pharyng/o', ['pharyng'], 'pharynx (throat)', "throat (pharynx)", 'sy'],
    ['rhin/o, nas/o', ['rhin', 'nas'], 'nose', "nose", 'sy'],
    ['ot/o', ['ot'], 'ear', "ear", 'sy'],
    ['ophthalm/o, ocul/o', ['ophthalm', 'ocul'], 'eye', "eye", 'sy'],
    ['encephal/o, cerebr/o', ['encephal', 'cerebr'], 'brain', "brain", 'sy'],
    ['mening/o', ['mening'], 'meninges (membranes of brain and spinal cord)', "meninges (coverings of brain and spinal cord)", 'sy'],
    ['myel/o', ['myel'], 'spinal cord; bone marrow', "spinal cord; bone marrow", 'sy'],
    ['gastr/o', ['gastr'], 'stomach', "stomach", 'sy'],
    ['enter/o', ['enter'], 'small intestine', "small intestine", 'sy'],
    ['col/o', ['col'], 'colon (large intestine)', "large intestine (colon)", 'sy'],
    ['hepat/o', ['hepat'], 'liver', "liver", 'sy'],
    ['esophag/o', ['esophag'], 'esophagus', "oesophagus", 'sy'],
    ['or/o, stomat/o', ['stomat', 'or'], 'mouth', "mouth", 'sy'],
    ['gloss/o, lingu/o', ['gloss', 'lingu'], 'tongue', "tongue", 'sy'],
    ['nephr/o, ren/o', ['nephr', 'ren'], 'kidney', "kidney", 'sy'],
    ['ur/o', ['ur'], 'urine, urinary tract', "urine, urinary tract", 'sy'],
    ['cyst/o', ['cyst'], 'urinary bladder; sac', "bladder; sac", 'sy'],
    ['gynec/o', ['gynec'], 'woman, female', "woman", 'sy'],
    ['aden/o', ['aden'], 'gland', "gland", 'sy'],
    ['crin/o', ['crin'], 'to secrete', "to secrete", 'sy'],
    ['arthr/o', ['arthr'], 'joint', "joint", 'sy'],
    ['orth/o', ['orth'], 'straight', "straight", 'sy'],
    ['ped/o', ['ped'], 'child; foot', "child; foot", 'sy'],
    // جهت‌ها، صفحه‌ها و تصویربرداری (dr)
    ['anter/o', ['anter'], 'front', "front (anterior)", 'dr'],
    ['poster/o', ['poster'], 'back, behind', "back (posterior)", 'dr'],
    ['super/o', ['super'], 'above, upward', "above (superior)", 'dr'],
    ['infer/o', ['infer'], 'below, downward', "below (inferior)", 'dr'],
    ['cephal/o', ['cephal'], 'head', "head", 'dr'],
    ['caud/o', ['caud'], 'tail, lower part of body', "tail, lower part of the body", 'dr'],
    ['dors/o', ['dors'], 'back of the body', "back of the body", 'dr'],
    ['ventr/o', ['ventr'], 'belly side, front', "belly side, front", 'dr'],
    ['medi/o', ['medi'], 'middle', "middle", 'dr'],
    ['later/o', ['later'], 'side', "side", 'dr'],
    ['proxim/o', ['proxim'], 'near (the point of attachment)', "near (the point of attachment)", 'dr'],
    ['dist/o', ['dist'], 'far (from the point of attachment)', "far (from the point of attachment)", 'dr'],
    ['sagitt/o', ['sagitt'], 'arrow', "arrow", 'dr'],
    ['coron/o', ['coron'], 'crown', "crown", 'dr'],
    ['tom/o', ['tom'], 'to cut, section', "incision", 'dr'],
    ['radi/o', ['radi'], 'x-ray, radiation', "radiation, X-ray", 'dr'],
    ['son/o', ['son'], 'sound', "sound", 'dr'],
    ['fluor/o', ['fluor'], 'luminous', "luminous", 'dr'],
    ['plant/o', ['plant'], 'sole of the foot', "sole of the foot", 'dr'],
    ['palm/o', ['palm'], 'palm of the hand', "in the palm", 'dr'],
    // حفره‌ها و نواحی (cv)
    ['crani/o', ['crani'], 'skull', "skull", 'cv'],
    ['spin/o', ['spin'], 'spine', "spine", 'cv'],
    ['vertebr/o', ['vertebr'], 'vertebra', "spinal bone", 'cv'],
    ['thorac/o', ['thorac'], 'chest', "the chest", 'cv'],
    ['abdomin/o', ['abdomin'], 'abdomen', "abdomen", 'cv'],
    ['pelv/i, pelv/o', ['pelv'], 'pelvis', "pelvis", 'cv'],
    ['phren/o', ['phren'], 'diaphragm', "muscle between chest and abdomen", 'cv'],
    ['mediastin/o', ['mediastin'], 'mediastinum', "mediastinum", 'cv'],
    ['umbilic/o', ['umbilic'], 'navel', "the navel", 'cv'],
    ['inguin/o', ['inguin'], 'groin', "groin", 'cv'],
    ['ili/o', ['ili'], 'ilium (hip bone)', "hip bone (ilium)", 'cv'],
    ['cervic/o', ['cervic'], 'neck; cervix', "neck; cervix of the uterus", 'cv'],
    ['lumb/o', ['lumb'], 'lower back, loin', "lower back", 'cv'],
    ['sacr/o', ['sacr'], 'sacrum', "sacrum", 'cv'],
    ['coccyg/o', ['coccyg'], 'tailbone (coccyx)', "tailbone", 'cv'],
    ['axill/o', ['axill'], 'armpit', "armpit", 'cv'],
    ['bucc/o', ['bucc'], 'cheek', "cheek", 'cv'],
    ['ment/o', ['ment'], 'chin', "chin", 'cv'],
    ['occipit/o', ['occipit'], 'back of the head', "back of the head", 'cv'],
    ['orbit/o', ['orbit'], 'eye socket', "eye socket", 'cv'],
    ['pector/o', ['pector'], 'chest', "chest", 'cv'],
    ['stern/o', ['stern'], 'breastbone', "breastbone", 'cv'],
    ['clavicul/o', ['clavicul', 'clavic'], 'collarbone', "collarbone", 'cv'],
    ['scapul/o', ['scapul'], 'shoulder blade', "shoulder blade", 'cv'],
    ['mamm/o, mast/o', ['mamm', 'mast'], 'breast', "breast", 'cv'],
    ['brachi/o', ['brachi'], 'arm', "arm", 'cv'],
    ['carp/o', ['carp'], 'wrist', "the wrist", 'cv'],
    ['cubit/o', ['cubit'], 'elbow', "elbow", 'cv'],
    ['femor/o', ['femor'], 'thigh (femur)', "thigh", 'cv'],
    ['patell/o', ['patell'], 'kneecap', "kneecap", 'cv'],
    ['poplit/o', ['poplit'], 'back of the knee', "behind the knee", 'cv'],
    ['glute/o', ['glute'], 'buttock', "buttock", 'cv'],
    ['pub/o', ['pub'], 'pubis (front of pelvis)', "pubic bone", 'cv'],
    ['auricul/o', ['auricul'], 'ear (outer ear)', "outer ear", 'cv'],
    // منافذ و زبان (lx)
    ['os, or/i', ['ori'], 'mouth, opening', "mouth, opening", 'lx'],
    ['stom/o, stomat/o', ['stom'], 'opening, mouth', "opening, mouth", 'lx'],
    ['hydr/o', ['hydr'], 'water', "water", 'lx'],
    ['lacrim/o', ['lacrim'], 'tear', "tear", 'lx'],
    ['thec/o', ['thec'], 'sheath (meninges)', "sheath (meninges)", 'lx'],
    // پسوندها
    ['-ac, -al, -ar, -ary, -ic, -ous, -iac, -ior', ['iac', 'ior', 'ac', 'al', 'ar', 'ary', 'ic', 'ous'], 'pertaining to', "pertaining to", '*'],
    ['-ad', ['ad'], 'toward', "toward", 'dr'],
    ['-logy', ['logy'], 'study of', "study of", '*'],
    ['-logist', ['logist'], 'specialist in the study of', "specialist in", '*'],
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-oma', ['oma'], 'tumor, mass', "tumour, mass", '*'],
    ['-sarcoma', ['sarcoma'], 'malignant tumor of connective tissue', "malignant tumour of connective tissue", 'ts'],
    ['-osis', ['osis', 'sis'], 'abnormal condition', "condition (usually abnormal)", '*'],
    ['-pathy', ['pathy'], 'disease', "disease", '*'],
    ['-megaly', ['megaly'], 'enlargement', "enlargement", '*'],
    ['-algia, -dynia', ['algia', 'dynia'], 'pain', "pain", '*'],
    ['-ectomy', ['ectomy'], 'excision, removal', "surgical removal", '*'],
    ['-tomy', ['tomy'], 'incision, cutting', "incision", '*'],
    ['-stomy', ['stomy'], 'surgical opening', "surgical creation of an opening", 'lx'],
    ['-scopy', ['scopy'], 'visual examination', "visual examination (with a scope)", 'dr'],
    ['-graphy', ['graphy'], 'process of recording', "recording process (imaging)", 'dr'],
    ['-gram', ['gram'], 'record, image', "recorded image", 'dr'],
    ['-meter', ['meter'], 'instrument to measure', "measuring instrument", 'dr'],
    ['-cyte', ['cyte'], 'cell', "cell", 'og'],
    ['-plasm', ['plasm'], 'formation, formed substance', "formed substance", 'og'],
    ['-plasia', ['plasia'], 'formation, development', "formation, development", 'og'],
    ['-gen, -genic, -genesis', ['genesis', 'genic', 'gen'], 'producing, origin', "producing, origin", 'og'],
    ['-lysis', ['lysis'], 'breakdown, destruction', "breakdown, destruction", 'og'],
    ['-ism', ['ism'], 'condition, process', "condition, process", 'og'],
    ['-stasis', ['stasis'], 'standing still, control', "standing still, control", 'og'],
    ['-cele', ['cele'], 'hernia, swelling', "hernia, swelling", 'lx'],
    ['-poiesis', ['poiesis'], 'formation, production', "formation, production", 'lx'],
    ['-y, -ia', ['y', 'ia'], 'condition, process', "condition, process", '*']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    ['ant', 'anterior', "front (anterior)", 'dr'],
    ['AP', 'anteroposterior', "front to back", 'dr'],
    ['ATP', 'adenosine triphosphate', "adenosine triphosphate (cell energy)", 'og'],
    ['ANS', 'autonomic nervous system', "autonomic nervous system", 'sy'],
    ['BMI', 'body mass index', "body mass index", 'sy'],
    ['BP', 'blood pressure', "blood pressure", 'sy'],
    ['Bx', 'biopsy', "tissue sampling", 'og'],
    ['C1–C7', 'cervical vertebrae 1 to 7', "cervical vertebrae 1 to 7", 'cv'],
    ['CBC', 'complete blood count', "complete blood count", 'sy'],
    ['CNS', 'central nervous system', "central nervous system", 'sy'],
    ['CT', 'computed tomography', "computed tomography", 'dr'],
    ['CV', 'cardiovascular', "heart and blood vessels", 'sy'],
    ['CXR', 'chest x-ray; chest radiograph', "chest X-ray", 'dr'],
    ['DNA', 'deoxyribonucleic acid', "deoxyribonucleic acid", 'og'],
    ['ED', 'emergency department', "emergency department", 'lx'],
    ['ENT', 'ear, nose, and throat', "ear, nose and throat", 'sy'],
    ['ER', 'endoplasmic reticulum', "endoplasmic reticulum", 'og'],
    ['GFD', 'gluten-free diet', "gluten-free diet", 'sy'],
    ['GI', 'gastrointestinal', "of the stomach and intestines", 'sy'],
    ['GU', 'genitourinary', "genital and urinary", 'sy'],
    ['GYN', 'gynecology', "women’s health", 'sy'],
    ['HEENT', 'head, eyes, ears, nose, throat', "head, eyes, ears, nose and throat", 'cv'],
    ['HPI', 'history of present illness', "history of present illness", 'lx'],
    ['ID', 'intradermal', "within the skin", 'lx'],
    ['IM', 'intramuscular', "intramuscularly", 'lx'],
    ['IV', 'intravenous', "intravenously", 'lx'],
    ['L1–L5', 'lumbar vertebrae 1 to 5', "lumbar vertebrae 1 to 5", 'cv'],
    ['LAT, lat', 'lateral', "to the side", 'dr'],
    ['LE', 'lower extremity', "lower limb", 'cv'],
    ['LLQ', 'left lower quadrant', "left lower quadrant", 'cv'],
    ['LUQ', 'left upper quadrant', "left upper quadrant", 'cv'],
    ['MRI', 'magnetic resonance imaging', "magnetic imaging", 'dr'],
    ['MS', 'musculoskeletal', "muscles and bones", 'sy'],
    ['NKDA', 'no known drug allergies', "no known drug allergies", 'lx'],
    ['OB', 'obstetrics', "pregnancy and childbirth care", 'sy'],
    ['PA', 'posteroanterior', "back to front", 'dr'],
    ['Pap', 'Papanicolaou test', "Pap smear test", 'dr'],
    ['PET', 'positron emission tomography', "positron emission tomography", 'dr'],
    ['RDN', 'registered dietitian nutritionist', "registered dietitian nutritionist", 'sy'],
    ['RLQ', 'right lower quadrant', "right lower quadrant", 'cv'],
    ['RNA', 'ribonucleic acid', "messenger nucleic acid", 'og'],
    ['ROS', 'review of systems', "review of systems", 'sy'],
    ['RUQ', 'right upper quadrant', "right upper quadrant", 'cv'],
    ['S1–S5', 'sacral vertebrae 1 to 5 (fused)', "sacral vertebrae 1 to 5 (fused)", 'cv'],
    ['SL, sl', 'sublingual', "under the tongue", 'lx'],
    ['SPECT', 'single-photon emission computed tomography', "single-photon emission computed tomography", 'dr'],
    ['Subc, SubQ', 'subcutaneous', "subcutaneously", 'lx'],
    ['supp', 'suppository', "suppository", 'lx'],
    ['T1–T12', 'thoracic vertebrae 1 to 12', "thoracic vertebrae 1 to 12", 'cv'],
    ['Temp', 'temperature', "body temperature", 'sy'],
    ['top', 'apply topically', "apply to the surface", 'lx'],
    ['UE', 'upper extremity', "upper limb", 'cv'],
    ['US', 'ultrasonography; ultrasound', "ultrasound imaging", 'dr'],
    ['WNL', 'within normal limits', "within normal limits", 'sy']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {};
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], c: r[5], ab: r[6] || [] }));
  /* ---------- دسته‌بندی واژه‌ها ----------
   * هر واژه با قاعده‌های ساختاری (پسوند و واژه‌های کلیدی نام) و تعریف انگلیسی در یکی از نُه دسته قرار می‌گیرد.
   * ترتیب قاعده‌ها مهم است: جمع‌ها و منفذها پیش از بقیه، و تصویربرداری پیش از جهت‌ها بررسی می‌شوند. */
  const CATS = [
    { id: 'sci', icon: '🎓', name: "Sciences and specialties" },
    { id: 'cell', icon: '🧬', name: "Cells, genes and metabolism" },
    { id: 'tis', icon: '🧵', name: "Tissues and membranes" },
    { id: 'sys', icon: '🫀', name: "Systems and organs" },
    { id: 'dir', icon: '🧭', name: "Direction, plane and position" },
    { id: 'reg', icon: '🗺️', name: "Cavities and regions" },
    { id: 'open', icon: '🕳️', name: "Openings and drug routes" },
    { id: 'img', icon: '🩻', name: "Imaging and procedures" },
    { id: 'dz', icon: '🦠', name: "Diseases and findings" },
    { id: 'pl', icon: '📚', name: "Singular and plural" }
  ];
  const CAT_RULES = [
    ['pl', / \/ /],
    ['img', /(scan|tomography|graphy|scopy|radiopharmaceutical|biopsy|in vivo|in vitro|in situ|postmortem|liposuction)/],
    ['dz', /(itis$|oma$|osis$|pathy$|megaly$|cele$|sepsis|inflammation|adhesion|fibrosis|neoplasm|carcinogen|paronychia|hidropoiesis)/],
    ['sci', /(logy$|logist$|orthopedics|registered|dietetic|^(anatomy|physiology|biology|embryology))/],
    ['open', /(aperture|canal|constriction|dilatation|foramen|hiatus|introitus|lumen|meatus|orifice|^os$|patent|perforation|stoma|ventricle|^anus|mouth|duct|nipple|nares|vagina|strata|striae|parenteral|venous|lingual|^oral|dermal|cutaneous|muscular$|thecal|palp|perionychium)/],
    ['dir', /(position|plane|section|^(anterior|posterior|superior|inferior|ventral|dorsal|caudal|cranial|cephalic|medial|lateral|proximal|distal|superficial|deep|internal|external|ipsilateral|contralateral|mediolateral|lateromedial|anteroposterior|supine|prone|erect|genupectoral|lateral recumbent|plantar|dorsum|abduction|adduction|flexion|extension)$)/],
    ['reg', /(cavity|region|quadrant|diaphragm|mediastinum|viscera$|umbilicus|vertebral column|sacrum|^(auricular|axillary|buccal|carpal|clavicular|infraorbital|infrascapular|interscapular|mammary|mental|nasal|occipital|orbital|pectoral|popliteal|pubic|sternal|submental|supraclavicular|antecubital|brachial|femoral|patellar|gluteal)$)/],
    ['sys', /(system|organ|biceps)/],
    ['tis', /(tissue|epitheli|adipo|cartilage|muscle|ligament|tendon|neuron|pleura|peritone|parietal|visceral|mucus)/],
    ['cell', /./]
  ];
  const CAT_FIX = { organism: 'cell', organomegaly: 'dz', 'muscle cell': 'cell', 'nerve cell': 'cell', 'epithelial cell': 'cell', fetus: 'cell', 'organelle': 'cell', abduction: 'dir', adduction: 'dir', 'reproductive system': 'sys', 'magnetic resonance imaging': 'img', meiosis: 'cell', mitosis: 'cell', stoma: 'open' };
  function classify(t) {
    const n = t.t.toLowerCase();
    if (CAT_FIX[n]) return CAT_FIX[n];
    for (const [id, rx] of CAT_RULES) if (rx.test(n)) return id;
    return 'cell';
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
  const WORLDS = ['lx', 'og', 'ts', 'sy', 'dr', 'cv'];
  /* دنیای lx (زبان پزشکی) از همه واژه‌ها، ریشه‌ها و اختصارها سؤال می‌سازد */
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
/* پیکر — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با ایمنا (برنامه خواهر): زمینه سفید کارت، گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی)،
 * و یک «آدمک» ساده و بی‌جزئیات (مانکن آناتومی) برای همه شکل‌های بدن.
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
  const t = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${+((p.size || 11) * TS).toFixed(2)}" font-weight="${p.w || 700}" fill="${p.fill || INK}" text-anchor="${p.anchor || 'middle'}" font-family="${FONT_EN}"${p.italic ? ' font-style="italic"' : ''}>${s}</text>`; };
  /** متن فارسی */
  /* در direction=rtl معنای start/end برعکس می‌شود؛ اینجا anchor همیشه «دیداری» است (start = لبه چپ متن) */
  const FLIP = { start: 'end', end: 'start', middle: 'middle' };
  /* در متن فارسی، هر تکه لاتین (با پرانتز و نشانه‌های میانش) با LRI…PDI جدا می‌شود تا جابه‌جا نشود */
  const LRI = s => String(s).replace(/(?<![&#\w])\(?[A-Za-z][A-Za-z0-9\/\-.+–°]*\)?(?:\s*(?:[=+\/→]|\s)\s*\(?[A-Za-z0-9][A-Za-z0-9\/\-.+–°]*\)?)*/g, m => '\u2066' + m + '\u2069');
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

  /* ---------- زبان بدن ---------- */
  /* آناتومی یک واژه: پیشوند + ریشه + پسوند */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 128, fa, { size: 9.5, fill: c })}`;
    return svg(360, 190, `${f(180, 22, "One word = prefix + root + suffix", { size: 11, fill: INK, w: 700 })}
      ${part(12, 60, 'epi', '#1272a3', '#ddf1fb')}${part(78, 84, 'gastr', '#a31b33', '#fde3e7')}${part(168, 52, 'ic', '#3f8a05', '#e7f9d8')}
      ${br(12, 72, "prefix", "upon, above", '#1272a3')}${br(78, 162, "root", "stomach", '#a31b33')}${br(168, 220, 'suffix', "pertaining to", '#3f8a05')}
      <path d="M226 60 h10" stroke="${LINE}" stroke-width="2"/><rect x="240" y="40" width="114" height="40" rx="10" fill="#f8f6f5"/>${f(297, 57, "pertaining to", { size: 10, fill: '#3f8a05', w: 800 })}${f(297, 73, "region above the stomach", { size: 10.5, fill: INK, w: 800 })}
      <path d="M180 150 C140 174 80 174 40 150" stroke="#4f5bd5" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M44 146 l-6 4 l7 3" stroke="#4f5bd5" stroke-width="2" fill="none"/>
      ${f(110, 184, "Read the meaning from the end: suffix → prefix → root", { size: 10, fill: '#4f5bd5', w: 700 })}`, "The anatomy of a medical word");
  };

  /* قاعده‌های جمع */
  A.plurals = () => {
    const rows = [['-a', '-ae', 'vertebra', 'vertebrae'], ['-us', '-i', 'nucleus', 'nuclei'], ['-um', '-a', 'ovum', 'ova'], ['-is', '-es', 'diagnosis', 'diagnoses'], ['-ix', '-ices', 'appendix', 'appendices'], ['-on', '-a', 'spermatozoon', 'spermatozoa'], ['-ma', '-mata', 'carcinoma', 'carcinomata'], ['-nx', '-nges', 'phalanx', 'phalanges'], ['-en', '-ina', 'foramen', 'foramina'], ['-y', '-ies', 'artery', 'arteries']];
    const col = (i) => { const c = i < 5 ? 0 : 1, r = i % 5, x = 10 + c * 175, y = 30 + r * 40; const R = rows[i];
      return `<rect x="${x}" y="${y}" width="165" height="34" rx="10" fill="${['#eef0fd', '#fdf1e4'][c]}"/>${pill(x + 4, y + 7, 70, 20, '#fff')}${t(x + 39, y + 21, `${R[0]} → ${R[1]}`, { size: 9.5, fill: '#4f5bd5', w: 900 })}${t(x + 80, y + 15, R[2], { size: 9, anchor: 'start', fill: MUTED, w: 700 })}${t(x + 80, y + 28, R[3], { size: 10.5, anchor: 'start', fill: INK, w: 900 })}`; };
    return svg(360, 236, `${f(180, 18, "Singular → plural: the ending of the word sets the plural rule", { size: 11, fill: INK, w: 700 })}${rows.map((_, i) => col(i)).join('')}`, "Plural rules for medical words");
  };

  /* منافذ سر و صورت */
  A.openings = () => {
    const g = 'g' + (++UID);
    const L = (x1, y1, x2, y2, en, fa, anchor) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.2" fill="${LINE}"/>${lab(x2 + (anchor === 'end' ? -4 : 4), y2 + 3, en, fa, { size: 10, anchor })}`;
    return svg(360, 220, `<defs>${linear(g, SKIN[0], SKIN[1])}</defs>
      <path d="M150 30 Q206 24 214 82 Q218 104 226 116 Q232 124 222 128 L216 130 Q218 140 212 146 Q214 156 206 160 Q204 176 188 178 L170 180 L166 206 L120 206 L122 168 Q100 150 100 104 Q100 34 150 30Z" fill="url(#${g})" stroke="${SKIN_LINE}" stroke-width="1.4"/>
      <path d="M150 30 Q206 24 214 82 Q190 54 150 52 Q116 54 102 92 Q104 36 150 30Z" fill="#6b4a36" opacity=".85"/>
      <ellipse cx="190" cy="96" rx="9" ry="5" fill="#fff" stroke="${SKIN_LINE}"/><circle cx="192" cy="96" r="3.4" fill="#3b2a20"/>
      <ellipse cx="138" cy="112" rx="10" ry="15" fill="none" stroke="${SKIN_LINE}" stroke-width="2"/><circle cx="138" cy="112" r="3" fill="#7a4e3a"/>
      <ellipse cx="220" cy="128" rx="4" ry="2.6" fill="#7a4e3a"/>
      <path d="M204 152 q8 -2 10 2" stroke="#b5584a" stroke-width="3" fill="none" stroke-linecap="round"/>
      ${L(138, 112, 60, 70, 'ear canal', "ear canal", 'end')}${L(220, 128, 252, 122, 'nares', "nostrils", 'start')}${L(208, 152, 252, 166, 'mouth (os)', "mouth", 'start')}${L(196, 100, 252, 74, 'nasolacrimal duct', "tear duct to the nose", 'start')}
      ${f(180, 214, "Every natural opening of the body is an orifice", { size: 10, fill: '#4f5bd5', w: 700 })}`, "Openings of the head and face");
  };

  /* راه‌های تجویز دارو */
  A.routes = () => {
    const S = 86, D2R = Math.PI / 180;
    const band = (y, h, c) => `<rect x="8" y="${y}" width="344" height="${h}" fill="${c}"/>`;
    /* سرنگ در مختصات محلی: نوک سوزن در مبدأ، بدنه به سمت چپ-بالا؛ با rotate(زاویه) هم‌راستای مسیر می‌شود */
    const needle = (tx, ty, ang, c, en, fa, lx, ly) => {
      const L = (ty - S) / Math.sin(ang * D2R) + 5;
      return `<g transform="translate(${tx} ${ty}) rotate(${ang})" filter="url(#rsh)"><path d="M0 0 H${-L}" stroke="#7b8a92" stroke-width="2" stroke-linecap="round"/><rect x="${-L - 5}" y="-3" width="5" height="6" rx="1" fill="${c}"/><rect x="${-L - 29}" y="-5.5" width="24" height="11" rx="2.5" fill="#eef3f6" stroke="#9aa9b1"/><rect x="${-L - 25}" y="-3.5" width="10" height="7" fill="${c}" opacity=".35"/><path d="M${-L - 29} 0 H${-L - 36}" stroke="#9aa9b1" stroke-width="2.4"/><rect x="${-L - 38}" y="-6" width="3" height="12" rx="1" fill="#9aa9b1"/></g>
        <circle cx="${tx}" cy="${ty}" r="3.2" fill="${c}" stroke="#fff" stroke-width="1"/>${lab(lx, ly, en, fa, { size: 11, fill: c })}`;
    };
    const leg = (x, c, en, fa) => `<rect x="${x}" y="222" width="12" height="12" rx="3" fill="${c}" stroke="#0002"/>${lab(x + 16, 231, en, fa, { size: 10, anchor: 'start', gap: 12 })}`;
    return svg(360, 268, `<defs>${shadow('rsh')}</defs>
      ${band(S, 10, '#f6d2bd')}${band(S + 10, 26, '#efb9a2')}${band(S + 36, 36, '#fbe6a6')}${band(S + 72, 50, '#d46a6a')}
      ${[0, 1, 2, 3, 4, 5, 6].map(i => `<path d="M${16 + i * 50} ${S + 80} q22 14 44 0" stroke="#b44c4c" stroke-width="1.4" fill="none" opacity=".7"/><path d="M${30 + i * 50} ${S + 100} q22 12 40 0" stroke="#b44c4c" stroke-width="1.4" fill="none" opacity=".7"/>`).join('')}
      ${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${30 + i * 58}" cy="${S + 56}" r="8" fill="#f7d77c" opacity=".7"/>`).join('')}
      <path d="M8 ${S} H352" stroke="#c98f6b" stroke-width="1.4"/>
      <rect x="196" y="${S + 40}" width="156" height="12" rx="6" fill="#7d1e2f"/><rect x="196" y="${S + 42}" width="156" height="4" rx="2" fill="#b0344a" opacity=".8"/>${f(330, S + 64, "vein", { size: 9, fill: '#7d1e2f', w: 800 })}
      ${needle(24, 184, 90, '#c8243f', 'IM • 90°', "into the muscle", 34, 18)}
      ${needle(170, 145, 45, '#d07a00', 'SubQ • 45°', "subcutaneously", 96, 30)}
      ${needle(262, 131, 25, '#1580bd', 'IV • 25°', "into the vein", 168, 40)}
      ${needle(346, 101, 12, '#7b5ce0', 'ID • 10–15°', "into the dermis", 280, 48)}
      ${leg(8, '#f6d2bd', 'epidermis', "epidermis")}${leg(94, '#efb9a2', 'dermis', "dermis")}${leg(166, '#fbe6a6', 'subcutaneous', "subcutaneous fat")}${leg(272, '#d46a6a', 'muscle', "muscle")}
      ${f(180, 260, "parenteral: any route other than the digestive tract", { size: 10, fill: '#4f5bd5', w: 700 })}`, "Injection routes: intramuscular, subcutaneous, intravenous and intradermal");
  };

  /* ---------- سازمان‌یابی و سلول ---------- */
  /* پله‌های سازمان‌یابی */
  A.levels = () => {
    const g = 'g' + (++UID);
    const step = (i, icon, en, fa) => { const x = 8 + i * 70, y = 170 - i * 26; return `<rect x="${x}" y="${y}" width="66" height="${H - 6 - y}" rx="10" fill="${['#fde3ee', '#ffeedc', '#d9f5ef', '#ddf1fb', '#ede7fc'][i]}"/>${icon(x + 33, y - 26)}${lab(x + 33, y + 18, en, fa, { size: 10.5 })}`; };
    const H = 210;
    const cellI = (x, y) => `<circle cx="${x}" cy="${y}" r="16" fill="url(#${g})" stroke="#c74b84" stroke-width="1.5"/><circle cx="${x + 2}" cy="${y}" r="6" fill="#8a3a8e"/>`;
    const tisI = (x, y) => [0, 1, 2].map(r => [0, 1, 2].map(c => `<rect x="${x - 17 + c * 12}" y="${y - 15 + r * 10}" width="11" height="9" rx="2.5" fill="#f2a46a" stroke="#c96f2c" stroke-width=".8"/>`).join('')).join('');
    const orgI = (x, y) => `<path d="M${x - 14} ${y - 12} Q${x + 2} ${y - 22} ${x + 16} ${y - 8} Q${x + 22} ${y + 10} ${x + 4} ${y + 16} Q${x - 18} ${y + 18} ${x - 16} ${y + 2} Q${x - 6} ${y - 2} ${x - 14} ${y - 12}Z" fill="#f08f8f" stroke="#c45151" stroke-width="1.4"/>`;
    const sysI = (x, y) => `<path d="M${x - 4} ${y - 22} V${y - 6} Q${x - 18} ${y - 2} ${x - 12} ${y + 10} Q${x + 2} ${y + 22} ${x + 14} ${y + 10} Q${x + 18} ${y} ${x + 6} ${y - 4} Q${x - 2} ${y - 6} ${x - 4} ${y - 12}" stroke="#12a594" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="${x + 2}" cy="${y + 2}" rx="7" ry="5" fill="#0b7a6c"/>`;
    const bodI = (x, y) => man(x, y - 36, 0.3, { palms: true });
    return svg(360, H, `${step(0, cellI, 'cell', "cell")}${step(1, tisI, 'tissue', "tissue")}${step(2, orgI, 'organ', "organ")}${step(3, sysI, 'system', "system")}${step(4, bodI, 'organism', "organism")}
      ${f(112, 26, "from small to large", { size: 12, fill: INK, w: 800 })}${f(112, 44, "Each step is built from the step below it", { size: 10, fill: MUTED, w: 700 })}`, "Levels of organisation of the body", radial(g, '#fff2f8', '#f6b6d3'));
  };

  /* ساختار سلول */
  A.cell = () => {
    const g = 'g' + (++UID), n = 'g' + (++UID);
    const L = (x1, y1, x2, y2, en, fa, anchor) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.2" fill="${LINE}"/>${lab(x2 + (anchor === 'end' ? -4 : 4), y2 + 3, en, fa, { size: 11.2, anchor })}`;
    const mito = (x, y, r) => `<g transform="rotate(${r} ${x} ${y})"><ellipse cx="${x}" cy="${y}" rx="15" ry="7" fill="#f2884b" stroke="#c45a1d" stroke-width="1.2"/><path d="M${x - 11} ${y} q3 -5 5 0 q3 5 5 0 q3 -5 5 0 q3 5 5 0" stroke="#fff3e6" stroke-width="1.4" fill="none"/></g>`;
    return svg(420, 220, `<g transform="translate(30 0)"><ellipse cx="180" cy="110" rx="100" ry="82" fill="url(#${g})" stroke="#c74b84" stroke-width="3"/>
      ${dots(180, 110, 70, 40, '#e7a3c6', 1.4, 4)}
      <circle cx="182" cy="104" r="30" fill="url(#${n})" stroke="#5b2e86" stroke-width="2"/><circle cx="190" cy="98" r="9" fill="#3b1764"/>
      ${mito(124, 146, 20)}${mito(238, 70, -25)}${mito(236, 150, 10)}
      <path d="M130 70 q10 -8 20 0 q10 8 20 0" stroke="#5b9bd5" stroke-width="3" fill="none"/><path d="M128 80 q10 -8 20 0 q10 8 20 0" stroke="#5b9bd5" stroke-width="3" fill="none"/>
      ${L(98, 92, 58, 40, 'cell membrane', "cell membrane", 'end')}${L(150, 120, 58, 184, 'cytoplasm', "cell fluid outside the nucleus", 'end')}${L(204, 112, 300, 120, 'nucleus', "nucleus: the control centre", 'start')}${L(190, 98, 300, 28, 'nucleolus', "nucleolus", 'start')}${L(246, 150, 300, 190, 'mitochondrion', "the cell’s power plant", 'start')}</g>`, "Cell structure", `${radial(g, '#fff6fa', '#f9c9de')}${radial(n, '#b98be0', '#6c3aa3')}`);
  };

  /* از هسته تا ژن */
  A.dna = () => {
    const g = 'g' + (++UID), a = 'm' + (++UID);
    const helix = Array.from({ length: 12 }, (_, i) => { const x = 236 + i * 9; const y1 = 112 + Math.sin(i * 0.9) * 16, y2 = 112 - Math.sin(i * 0.9) * 16; return `<path d="M${x} ${y1} L${x} ${y2}" stroke="${['#e5476b', '#1899d6', '#58cc02', '#ffc800'][i % 4]}" stroke-width="3"/>`; }).join('');
    const strand = s => `<path d="M236 ${112 + s * 0} ${Array.from({ length: 12 }, (_, i) => `L${236 + i * 9} ${112 + s * Math.sin(i * 0.9) * 16}`).join(' ')}" stroke="#4f5bd5" stroke-width="2.5" fill="none"/>`;
    return svg(360, 190, `<circle cx="52" cy="104" r="40" fill="url(#${g})" stroke="#5b2e86" stroke-width="2"/>${[[40, 92, 30], [60, 110, -20], [44, 116, 70], [62, 88, 10]].map(p => `<g transform="rotate(${p[2]} ${p[0]} ${p[1]})"><rect x="${p[0] - 2.5}" y="${p[1] - 9}" width="5" height="18" rx="2.5" fill="#fff" opacity=".85"/></g>`).join('')}
      ${arrow(a, 98, 104, 124, 104)}
      <g transform="translate(160 104)"><path d="M-20 -34 Q-6 -2 -20 34" stroke="#7b5ce0" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M20 -34 Q6 -2 20 34" stroke="#7b5ce0" stroke-width="12" fill="none" stroke-linecap="round"/><circle r="6" fill="#5b3fbf"/><rect x="-28" y="-14" width="16" height="7" fill="#ffc800"/></g>
      ${arrow(a, 196, 104, 226, 104)}${strand(1)}${strand(-1)}${helix}
      <rect x="256" y="92" width="36" height="40" rx="6" fill="none" stroke="#e58a00" stroke-width="2" stroke-dasharray="4 3"/>
      ${lab(52, 166, 'nucleus', "cell’s control centre", { size: 10.5 })}${lab(160, 166, 'chromosome', "46 = 23 pairs", { size: 10.5 })}${lab(286, 166, 'DNA • gene', "gene = a piece of DNA", { size: 10.5 })}
      ${f(180, 22, "Chromosomes are in the nucleus, they are made of DNA, and each gene is a piece of it", { size: 10, fill: INK, w: 700 })}`, "Nucleus, chromosome, DNA and gene", `${radial(g, '#c8a8ee', '#6c3aa3')}${marker(a)}`);
  };

  /* میتوز و میوز */
  A.division = () => {
    const a = 'm' + (++UID);
    const c = (x, y, r, n, col) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${col}" stroke="#5b2e86" stroke-width="1.5"/>${t(x, y + 4, n, { size: r > 20 ? 12 : 10, fill: '#3b1764', w: 900 })}`;
    return svg(360, 210, `${pill(10, 8, 160, 24, '#fde3ee')}${t(90, 24, 'mitosis', { size: 12, fill: '#a8305c', w: 900 })}${pill(190, 8, 160, 24, '#ede7fc')}${t(270, 24, 'meiosis', { size: 12, fill: '#5b3fbf', w: 900 })}
      ${c(90, 70, 24, '46', '#f6c3d8')}${arrow(a, 76, 96, 56, 120)}${arrow(a, 104, 96, 124, 120)}${c(48, 146, 22, '46', '#f6c3d8')}${c(132, 146, 22, '46', '#f6c3d8')}
      ${c(270, 66, 22, '46', '#d9cdf7')}${arrow(a, 258, 90, 236, 106)}${arrow(a, 282, 90, 304, 106)}${c(226, 124, 16, '23', '#e6defb')}${c(314, 124, 16, '23', '#e6defb')}
      ${f(90, 186, "body cells: two identical cells", { size: 10, fill: '#a8305c', w: 700 })}${f(270, 186, "sex cells: the chromosomes are halved", { size: 10, fill: '#5b3fbf', w: 700 })}
      ${f(270, 158, "egg + sperm = 46", { size: 9.5 })}<line x1="180" y1="44" x2="180" y2="196" stroke="#e5e5e5" stroke-width="2" stroke-dasharray="4 4"/>`, "Mitosis and meiosis", marker(a));
  };

  /* متابولیسم */
  A.metabolism = () => {
    const a = 'm' + (++UID);
    const blocks = (x, y, n, join) => Array.from({ length: n }, (_, i) => `<rect x="${x + (join ? i * 15 : i * 22)}" y="${y}" width="13" height="13" rx="3" fill="${['#e5476b', '#1899d6', '#58cc02', '#ffc800'][i % 4]}"/>`).join('');
    return svg(360, 200, `${pill(105, 8, 150, 26, '#fff1d6')}${t(180, 21, 'metabolism', { size: 12, fill: '#9a5b00', w: 900 })}${f(180, 31, "all the chemical reactions of the body", { size: 8.5, fill: '#9a5b00' })}
      ${blocks(26, 70, 4)}${arrow(a, 70, 92, 70, 116, '#12a594', 2.4)}${blocks(40, 124, 4, true)}${lab(70, 162, 'anabolism', "building up: ana = up", { size: 11, fill: '#0b7a6c' })}
      ${blocks(246, 70, 4, true)}${arrow(a, 274, 92, 274, 116, '#c8243f', 2.4)}${blocks(236, 124, 4)}${lab(274, 162, 'catabolism', "breaking down: cata = down", { size: 11, fill: '#a31b33' })}
      <path d="M140 110 h80" stroke="#e5e5e5" stroke-width="2"/><polygon points="180,96 172,110 188,110" fill="#9aa9b1"/>${lab(180, 132, 'homeostasis', "stable balance", { size: 10.5, fill: '#4f5bd5' })}
      ${f(180, 192, "The cell stores and uses energy in the form of ATP", { size: 10, fill: INK, w: 700 })}`, "Metabolism: anabolism and catabolism", marker(a));
  };

  /* ---------- بافت‌ها ---------- */
  /* چهار بافت اصلی */
  A.tissues = () => {
    const box = (x, art, en, fa, c, job) => `<rect x="${x}" y="8" width="82" height="164" rx="14" fill="${c}"/>${art}${lab(x + 41, 126, en, fa, { size: 11 })}${f(x + 41, 160, job, { size: 9.5, fill: INK, w: 700 })}`;
    const epi = [0, 1, 2, 3, 4].map(i => `<rect x="${12 + i * 14}" y="40" width="13" height="40" rx="3" fill="#f6b6d3" stroke="#c74b84" stroke-width=".9"/><ellipse cx="${18.5 + i * 14}" cy="68" rx="4" ry="5" fill="#8a3a8e"/>`).join('');
    const con = `${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${100 + i * 6} 34 q${10} 24 ${-4 + i * 2} 64" stroke="#e8c27a" stroke-width="2" fill="none"/>`).join('')}${dots(136, 66, 22, 7, '#a67c3d', 2.6, 9)}`;
    const mus = [0, 1, 2].map(i => `<rect x="${182}" y="${38 + i * 22}" width="70" height="18" rx="9" fill="#e07070"/>${Array.from({ length: 10 }, (_, j) => `<path d="M${188 + j * 6} ${40 + i * 22} v14" stroke="#b84545" stroke-width="1"/>`).join('')}`).join('');
    const ner = `<circle cx="300" cy="62" r="11" fill="#9b7be8"/><circle cx="300" cy="62" r="4" fill="#5b3fbf"/>${[[-28, -18], [-26, 14], [18, -24], [22, 18]].map(d => `<path d="M300 62 l${d[0]} ${d[1]}" stroke="#9b7be8" stroke-width="3" stroke-linecap="round"/>`).join('')}<path d="M300 73 V104" stroke="#9b7be8" stroke-width="3"/>`;
    return svg(360, 180, `${box(4, epi, 'epithelial', "covering tissue", '#fdeef5', "covering")}${box(92, con, 'connective', "connective", '#fdf4e4', "connecting and supporting")}${box(180, mus, 'muscle', "muscle", '#fde8e8', "contraction")}${box(268, ner, 'nervous', "of the nerves", '#efeafd', "signalling")}`, "The four tissue types");
  };

  /* اپیتلیوم ساده و مطبق */
  A.epithelium = () => {
    const col = (x, y, w, h, n) => Array.from({ length: n }, (_, i) => `<rect x="${x + i * w}" y="${y}" width="${w - 1}" height="${h}" rx="3" fill="#f6b6d3" stroke="#c74b84" stroke-width=".8"/><ellipse cx="${x + i * w + w / 2}" cy="${y + h * 0.65}" rx="${w * 0.28}" ry="${Math.min(h * 0.18, 5)}" fill="#8a3a8e"/>`).join('');
    return svg(360, 170, `${col(20, 50, 14, 46, 10)}<rect x="20" y="96" width="139" height="8" fill="#f3dfc6"/>${lab(90, 128, 'simple', "simple: one layer", { size: 11.5 })}${f(90, 156, "absorption and transport", { size: 9.5, fill: INK, w: 700 })}
      ${[0, 1, 2, 3].map(r => col(200 + (r % 2) * 6, 34 + r * 16, [18, 22, 26, 30][r] / 1.4, 15, [8, 7, 6, 5][r])).join('')}<rect x="200" y="98" width="140" height="8" fill="#f3dfc6"/>${lab(270, 128, 'stratified', "stratified: many layers", { size: 11.5 })}${f(270, 156, "protection", { size: 9.5, fill: INK, w: 700 })}
      ${f(180, 18, "Epithelial tissue covers surfaces and lines passages", { size: 10, fill: INK, w: 700 })}<line x1="180" y1="30" x2="180" y2="160" stroke="#e5e5e5" stroke-width="2" stroke-dasharray="4 4"/>`, "Simple and stratified epithelium");
  };

  /* سه نوع عضله */
  A.muscles = () => {
    const box = (x, art, en, fa, note, c) => `<rect x="${x}" y="8" width="112" height="158" rx="14" fill="${c}"/>${art}${lab(x + 56, 116, en, fa, { size: 11 })}${f(x + 56, 150, note, { size: 9 })}`;
    const sk = [0, 1, 2].map(i => `<rect x="16" y="${30 + i * 20}" width="90" height="16" rx="8" fill="#e07070"/>${Array.from({ length: 14 }, (_, j) => `<path d="M${22 + j * 6} ${32 + i * 20} v12" stroke="#b84545" stroke-width="1"/>`).join('')}<circle cx="${40 + i * 20}" cy="${38 + i * 20}" r="2.2" fill="#5b2e86"/>`).join('');
    const ca = `<path d="M128 34 h90 M128 56 h90 M128 78 h90" stroke="#d65f7a" stroke-width="15" stroke-linecap="round"/><path d="M160 34 l12 22 M190 56 l-14 22" stroke="#d65f7a" stroke-width="10"/>${[150, 196, 168].map((x, i) => `<path d="M${x} ${27 + i * 22} v14" stroke="#7a1e3a" stroke-width="2.4"/>`).join('')}`;
    const sm = [0, 1, 2, 3].map(i => `<path d="M${244 + (i % 2) * 14} ${40 + i * 15} q40 -9 80 0 q-40 9 -80 0z" fill="#f2a0a0" stroke="#c45151" stroke-width=".8"/><ellipse cx="${284 + (i % 2) * 14}" cy="${40 + i * 15}" rx="6" ry="2.4" fill="#5b2e86"/>`).join('');
    return svg(360, 172, `${box(4, sk, 'skeletal', "skeletal (striated)", "voluntary • attached to bone", '#fdeaea')}${box(124, ca, 'cardiac', "cardiac", "involuntary • heart only", '#fde3ec')}${box(244, sm, 'smooth', "smooth (visceral)", "involuntary • organ walls", '#fff0ea')}`, "Three types of muscle tissue");
  };

  /* غشاهای جداری و احشایی */
  A.membranes = () => {
    const g = 'g' + (++UID);
    const L = (x1, y1, x2, y2, en, fa, anchor, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="${LINE}"/>${lab(x2 + (anchor === 'end' ? -4 : 4), y2 + 3, en, fa, { size: 11, anchor, fill: c })}`;
    return svg(360, 232, `<rect x="104" y="20" width="152" height="164" rx="32" fill="#f3e1d0" stroke="#c98f6b" stroke-width="3"/>
      <rect x="116" y="34" width="128" height="136" rx="26" fill="#dff1fb" stroke="#1580bd" stroke-width="3"/>
      <rect x="132" y="52" width="96" height="100" rx="20" fill="url(#${g})" stroke="#c74b84" stroke-width="3"/>
      ${t(180, 100, 'organ', { size: 12, fill: '#a8305c', w: 900 })}${f(180, 117, "e.g. the lung", { size: 10, fill: '#a8305c' })}
      ${L(108, 50, 88, 36, 'body wall', "body wall", 'end')}${L(124, 110, 88, 110, 'cavity', "space between the two layers", 'end', '#1272a3')}
      ${L(244, 70, 270, 56, 'parietal', "parietal: on the wall", 'start', '#1272a3')}${L(220, 150, 270, 150, 'visceral', "visceral: on the organ", 'start', '#a8305c')}
      ${f(180, 206, "pleura around the lungs and peritoneum in the abdomen", { size: 10, fill: INK, w: 700 })}${f(180, 224, "Both have two layers: parietal and visceral", { size: 10, fill: '#4f5bd5', w: 700 })}`, "Parietal and visceral layers", radial(g, '#ffe3ec', '#f39bb8'));
  };

  /* ---------- دستگاه‌ها ---------- */
  A.systems = () => {
    const S = [['integumentary', "body covering", '#f2a46a', 'skin'], ['skeletal', "skeletal", '#c9b48a', 'bone'], ['muscular', "muscle", '#e07070', 'mus'], ['nervous', "of the nerves", '#9b7be8', 'ner'], ['endocrine', "endocrine glands", '#e58a00', 'gland'], ['cardiovascular', "heart and blood vessels", '#e5476b', 'heart'], ['lymphatic', "lymphatic-immune", '#12a594', 'lym'], ['respiratory', "breathing", '#1899d6', 'lung'], ['digestive', "of the stomach and intestines", '#c45151', 'gi'], ['urinary', "urinary", '#e5a500', 'kid'], ['reproductive', "reproduction", '#d6457a', 'rep'], ['sensory', "sensory", '#4f5bd5', 'eye']];
    const icon = (k, x, y, c) => ({
      skin: `<path d="M${x - 14} ${y + 6} q14 -18 28 0" stroke="${c}" stroke-width="5" fill="none"/><path d="M${x - 14} ${y + 12} h28" stroke="${c}" stroke-width="3"/>`,
      bone: `<path d="M${x - 12} ${y - 8} l24 16" stroke="${c}" stroke-width="6" stroke-linecap="round"/><circle cx="${x - 13}" cy="${y - 11}" r="4" fill="${c}"/><circle cx="${x - 9}" cy="${y - 13}" r="4" fill="${c}"/><circle cx="${x + 13}" cy="${y + 11}" r="4" fill="${c}"/><circle cx="${x + 9}" cy="${y + 13}" r="4" fill="${c}"/>`,
      mus: `<path d="M${x - 14} ${y} q14 -16 28 0 q-14 16 -28 0z" fill="${c}"/><path d="M${x - 18} ${y} h4 M${x + 14} ${y} h4" stroke="#b84545" stroke-width="3"/>`,
      ner: `<circle cx="${x}" cy="${y - 4}" r="6" fill="${c}"/><path d="M${x} ${y + 2} v12 M${x} ${y - 4} l-12 -8 M${x} ${y - 4} l12 -8 M${x} ${y + 8} l-8 6 M${x} ${y + 8} l8 6" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>`,
      gland: `<path d="M${x - 12} ${y - 6} q12 -10 24 0 q4 12 -6 14 h-12 q-10 -2 -6 -14z" fill="${c}"/><circle cx="${x}" cy="${y + 13}" r="2.4" fill="${c}"/>`,
      heart: `<path d="M${x} ${y + 12} C${x - 18} ${y} ${x - 14} ${y - 14} ${x} ${y - 6} C${x + 14} ${y - 14} ${x + 18} ${y} ${x} ${y + 12}Z" fill="${c}"/>`,
      lym: `<path d="M${x} ${y - 14} V${y + 14} M${x} ${y - 4} l-10 -6 M${x} ${y + 4} l10 -6" stroke="${c}" stroke-width="2.4"/>${[[x, y - 4], [x - 10, y - 10], [x + 10, y - 2], [x, y + 10]].map(p => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="3.4" ry="2.6" fill="${c}"/>`).join('')}`,
      lung: `<path d="M${x - 3} ${y - 12} q-14 2 -14 20 q4 6 13 2z M${x + 3} ${y - 12} q14 2 14 20 q-4 6 -13 2z" fill="${c}"/><path d="M${x} ${y - 16} v8" stroke="${c}" stroke-width="3"/>`,
      gi: `<path d="M${x - 8} ${y - 14} q16 -2 12 10 q-4 8 6 10 q8 4 -2 8 q-14 2 -16 -6" stroke="${c}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
      kid: `<path d="M${x - 4} ${y - 12} q-12 0 -10 12 q2 12 10 10 q-4 -10 0 -22z M${x + 4} ${y - 12} q12 0 10 12 q-2 12 -10 10 q4 -10 0 -22z" fill="${c}"/>`,
      rep: `<circle cx="${x - 5}" cy="${y - 2}" r="7" fill="none" stroke="${c}" stroke-width="3"/><path d="M${x - 5} ${y + 5} v9 M${x - 9} ${y + 10} h8" stroke="${c}" stroke-width="3"/><circle cx="${x + 7}" cy="${y + 2}" r="6" fill="none" stroke="${c}" stroke-width="3"/><path d="M${x + 11} ${y - 2} l5 -5 M${x + 12} ${y - 7} h4 v4" stroke="${c}" stroke-width="2.6" fill="none"/>`,
      eye: `<path d="M${x - 15} ${y} q15 -14 30 0 q-15 14 -30 0z" fill="#fff" stroke="${c}" stroke-width="2.4"/><circle cx="${x}" cy="${y}" r="5.5" fill="${c}"/>`
    })[k];
    return svg(360, 248, S.map((s, i) => { const x = 8 + (i % 4) * 88, y = 8 + Math.floor(i / 4) * 80; return `<rect x="${x}" y="${y}" width="82" height="74" rx="14" fill="${s[2]}22"/>${icon(s[3], x + 41, y + 24, s[2])}${lab(x + 41, y + 54, s[0], s[1], { size: 9.5 })}`; }).join(''), "Body systems");
  };

  /* ---------- جهت‌ها، صفحه‌ها و وضعیت‌ها ---------- */
  /* وضعیت آناتومیک و جهت‌ها */
  A['dir-man'] = () => {
    const a = 'm' + (++UID);
    const ar = (x1, y1, x2, y2, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.4" marker-start="url(#${a})" marker-end="url(#${a})"/>`;
    return svg(360, 262, `${man(110, 22, 1.02, { palms: true })}
      <path d="M110 20 V6" stroke="#1899d6" stroke-width="2.4" marker-end="url(#${a})"/>${lab(166, 12, 'superior', "above (superior)", { size: 10, anchor: 'start', fill: '#1272a3' })}${lab(166, 238, 'inferior', "below (inferior)", { size: 10, anchor: 'start', fill: '#1272a3' })}<path d="M110 222 v14" stroke="#1899d6" stroke-width="2.4" marker-end="url(#${a})"/>
      <line x1="110" y1="20" x2="110" y2="222" stroke="#4f5bd5" stroke-width="1.2" stroke-dasharray="4 3"/>${lab(30, 60, 'midline', "midline", { size: 9.5, fill: '#4f5bd5' })}
      ${ar(84, 90, 116, 90, '#e58a00')}${lab(38, 94, 'medial', "toward the middle", { size: 10, fill: '#9a5b00' })}${ar(138, 92, 172, 92, '#e58a00')}${lab(214, 96, 'lateral', "away from the midline", { size: 10, fill: '#9a5b00' })}
      ${ar(150, 76, 152, 134, '#12a594')}${lab(212, 140, 'proximal → distal', "near → far from the trunk", { size: 10, fill: '#0b7a6c' })}
      ${side(300, 22, 1.02)}${ar(270, 120, 334, 120, '#c8243f')}${lab(260, 196, 'posterior', "behind", { size: 10, fill: '#a31b33' })}${t(260, 222, '= dorsal', { size: 9, fill: MUTED })}${lab(330, 196, 'anterior', "front", { size: 10, fill: '#a31b33' })}${t(330, 222, '= ventral', { size: 9, fill: MUTED })}`, "Anatomic position and directions", marker(a, LINE));
  };

  /* سه صفحه بدن */
  A.planes3 = () => {
    /* هر صفحه از زاویه‌ای کشیده شده که «لبه» آن دیده شود: ساژیتال و عرضی از روبه‌رو، فرونتال از نیم‌رخ */
    const box = (x, c, en, fa, body, plane, tags, note) => `<rect x="${x}" y="6" width="114" height="232" rx="14" fill="${c}12" stroke="${c}40"/>${body}${plane}${tags}${lab(x + 57, 196, en, fa, { size: 11, fill: c })}${f(x + 57, 228, note, { size: 9.5, fill: INK })}`;
    const sheet = (pts, c) => `<path d="M${pts}Z" fill="${c}" fill-opacity=".28" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/>`;
    const tag = (x, y, s, c) => f(x, y, s, { size: 9.5, fill: c, w: 800 });
    return svg(360, 244, `
      ${box(3, '#d63a5f', 'sagittal', "sagittal", man(60, 34, 0.68, { palms: true }), sheet('55 20 L66 14 L66 168 L55 174', '#d63a5f'), tag(32, 30, "right", '#b02a4b') + tag(90, 30, "left", '#b02a4b'), "separates right and left")}
      ${box(123, '#1580bd', 'frontal (coronal)', "frontal (coronal)", side(178, 34, 0.68), sheet('175 20 L186 14 L186 168 L175 174', '#1580bd'), tag(150, 30, "back", '#10669a') + tag(212, 30, "front", '#10669a'), "separates front and back")}
      ${box(243, '#0f9384', 'transverse', "transverse (horizontal)", man(300, 34, 0.68, { palms: true }), sheet('252 106 L338 106 L350 96 L264 96', '#0f9384'), tag(332, 70, "up", '#0b7a6c') + tag(332, 132, "down", '#0b7a6c'), "separates upper and lower")}`, "The three body planes: sagittal, frontal and transverse");
  };

  /* جفت‌های متضاد جهت */
  A['dir-pairs'] = () => {
    const P = [['superior', "up", 'inferior', "down", '#1899d6'], ['anterior', "front", 'posterior', "behind", '#c8243f'], ['medial', "toward the middle", 'lateral', "toward the side", '#e58a00'], ['proximal', "nearer the trunk", 'distal', "farther from the trunk", '#12a594'], ['superficial', "near the surface", 'deep', "away from the surface", '#7b5ce0'], ['cephalic', "toward the head", 'caudal', "toward the tail", '#4f5bd5']];
    const a = 'm' + (++UID);
    return svg(360, 228, P.map((p, i) => { const y = 10 + i * 36; return `<rect x="8" y="${y}" width="344" height="30" rx="12" fill="${p[4]}14"/>${t(78, y + 14, p[0], { size: 11, fill: p[4], w: 900 })}${f(78, y + 26, p[1], { size: 9 })}<path d="M150 ${y + 15} H210" stroke="${p[4]}" stroke-width="2.4" marker-start="url(#${a})" marker-end="url(#${a})"/>${t(282, y + 14, p[2], { size: 11, fill: p[4], w: 900 })}${f(282, y + 26, p[3], { size: 9 })}`; }).join(''), "Opposite direction pairs", marker(a, LINE));
  };

  /* حرکت‌ها */
  A.movements = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID), D = Math.PI / 180;
    const P = (cx, cy, r, ang) => [(cx + r * Math.cos(ang * D)).toFixed(1), (cy + r * Math.sin(ang * D)).toFixed(1)];
    /* کمان حرکت دور یک مفصل؛ sweep=0 یعنی خلاف عقربه */
    const arc = (cx, cy, r, a1, a2, sweep, c, id, dash) => { const p1 = P(cx, cy, r, a1), p2 = P(cx, cy, r, a2); return `<path d="M${p1} A${r} ${r} 0 0 ${sweep} ${p2}" stroke="${c}" stroke-width="2.4" fill="none" stroke-linecap="round" marker-end="url(#${id})"${dash ? ' stroke-dasharray="5 4"' : ''}/>`; };
    const seg = (x1, y1, x2, y2, w, ghost) => ghost
      ? `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="#c98f6b" stroke-width="${w}" stroke-linecap="round" opacity=".22"/><path d="M${x1} ${y1} L${x2} ${y2}" stroke="#fff" stroke-width="${w - 3}" stroke-linecap="round" opacity=".55"/>`
      : `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="#c98f6b" stroke-width="${w + 2}" stroke-linecap="round"/><path d="M${x1} ${y1} L${x2} ${y2}" stroke="#efc6a6" stroke-width="${w}" stroke-linecap="round"/>`;
    const E = [62, 92], fu = P(62, 92, 60, -50), fd = [62, 152];
    const wedge = (() => { const p = P(62, 92, 18, -50); return `<path d="M62 92 L62 74 A18 18 0 0 1 ${p} Z" fill="#c8243f" opacity=".35"/>`; })();
    const S = [292, 58], hand = P(292, 58, 56, 5);
    return svg(360, 248, `<defs>${marker(a, '#c8243f')}${marker(b, '#1580bd')}</defs>
      <rect x="4" y="4" width="172" height="240" rx="14" fill="#fdf0f2"/><rect x="184" y="4" width="172" height="240" rx="14" fill="#eef6fc"/>
      ${seg(62, 92, fd[0], fd[1], 13, true)}<circle cx="${fd[0]}" cy="${fd[1] + 6}" r="8" fill="#c98f6b" opacity=".18"/>
      ${seg(62, 26, E[0], E[1], 15)}<circle cx="62" cy="24" r="11" fill="#efc6a6" stroke="#c98f6b"/>${f(30, 28, "shoulder", { size: 9.5, fill: MUTED })}${f(30, 96, "elbow", { size: 9.5, fill: MUTED })}<ellipse cx="70" cy="58" rx="7" ry="17" fill="#e9b994" stroke="#c98f6b"/>${seg(62, 92, fu[0], fu[1], 13)}<circle cx="${fu[0]}" cy="${fu[1]}" r="8.5" fill="#efc6a6" stroke="#c98f6b"/>
      ${wedge}<circle cx="62" cy="92" r="4" fill="#c98f6b"/>
      ${arc(62, 92, 74, 78, -36, 0, '#c8243f', a)}${arc(62, 92, 38, -40, 66, 1, '#0f9384', a, true)}
      ${lab(90, 186, 'flexion', "flexion: the angle decreases", { size: 11.5, fill: '#a31b33' })}${lab(90, 220, 'extension', "extension: the angle increases", { size: 11.5, fill: '#0b7a6c' })}
      <line x1="270" y1="14" x2="270" y2="178" stroke="#4f5bd5" stroke-width="1.3" stroke-dasharray="4 3"/>${f(246, 22, "midline", { size: 9, fill: '#4f5bd5' })}
      <g transform="translate(270 24) scale(.74)"><g transform="rotate(-88 27 46)" opacity=".45"><rect x="23" y="44" width="12" height="70" rx="6" fill="#fff" stroke="#c98f6b" stroke-dasharray="3 2"/></g></g>
      ${man(270, 24, 0.74, { arms: 8 })}
      ${arc(292, 58, 60, 78, 14, 0, '#1580bd', b)}${arc(292, 58, 40, 18, 70, 1, '#d07a00', b, true)}
      ${lab(270, 186, 'abduction', "moving away from the midline", { size: 11.5, fill: '#1272a3' })}${lab(270, 220, 'adduction', "moving toward the midline", { size: 11.5, fill: '#9a5b00' })}`, "Body movements: flexion and extension, abduction and adduction");
  };

  /* وضعیت‌های بیمار */
  A.bedside = () => {
    const D = Math.PI / 180;
    const go = (p, ang, len) => [p[0] + len * Math.cos(ang * D), p[1] + len * Math.sin(ang * D)];
    const seg = (p1, p2, w, c, st) => `<path d="M${p1[0].toFixed(1)} ${p1[1].toFixed(1)} L${p2[0].toFixed(1)} ${p2[1].toFixed(1)}" stroke="${st}" stroke-width="${w + 2}" stroke-linecap="round"/><path d="M${p1[0].toFixed(1)} ${p1[1].toFixed(1)} L${p2[0].toFixed(1)} ${p2[1].toFixed(1)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
    /* آدمک نیم‌رخ با مفصل‌های زاویه‌دار (زاویه‌ها مطلق، صفر = راست، ۹۰ = پایین)؛ face جهت صورت، toe جهت پنجه پا */
    const pose = (hip, o) => {
      const sh = go(hip, o.torso, 40), hd = go(sh, o.torso, 14), kn = go(hip, o.thigh, 30), an = go(kn, o.shin, 29), toe = go(an, o.toe, 9);
      const el = go(sh, o.arm, 20), hn = go(el, o.fore, 18), nose = go(hd, o.face, 10), hair = go(hd, o.face + 180, 3.5);
      const GOWN = '#8fc1e6', GL = '#5d97c4', SK = '#efc6a6', SL = '#c98f6b';
      return `${o.far ? seg(hip, go(hip, o.far[0], 30), 10, '#e6b896', SL) + seg(go(hip, o.far[0], 30), go(go(hip, o.far[0], 30), o.far[1], 29), 9, '#e6b896', SL) : ''}
        ${seg(an, toe, 6, SK, SL)}${seg(kn, an, 10, SK, SL)}${seg(hip, kn, 13, GOWN, GL)}${seg(hip, sh, 19, GOWN, GL)}
        <path d="M${hd[0].toFixed(1)} ${hd[1].toFixed(1)} L${nose[0].toFixed(1)} ${nose[1].toFixed(1)}" stroke="${SL}" stroke-width="5" stroke-linecap="round"/>
        <circle cx="${hd[0].toFixed(1)}" cy="${hd[1].toFixed(1)}" r="9" fill="${SK}" stroke="${SL}"/><circle cx="${hair[0].toFixed(1)}" cy="${hair[1].toFixed(1)}" r="6.5" fill="#6b4a36" opacity=".85"/>
        ${seg(sh, el, 7, GOWN, GL)}${seg(el, hn, 6, SK, SL)}`;
    };
    const mat = (x1, x2, y) => `<rect x="${x1}" y="${y}" width="${x2 - x1}" height="9" rx="4" fill="#e3e9ee" stroke="#b8c4cb"/><path d="M${x1 + 6} ${y + 9} v16 M${x2 - 6} ${y + 9} v16" stroke="#9aa9b1" stroke-width="3" stroke-linecap="round"/>`;
    const pillow = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="13" ry="4.5" fill="#fff" stroke="#b8c4cb"/>`;
    const box = (i, scene, en, fa) => { const x = 4 + (1 - i % 2) * 178, y = 4 + Math.floor(i / 2) * 116; return `<rect x="${x}" y="${y}" width="174" height="112" rx="14" fill="#f2f6fa"/><g transform="translate(${x} ${y})">${scene}</g>${lab(x + 87, y + 88, en, fa, { size: 11.5, fill: '#0e5f8f' })}`; };
    const flat = { torso: 180, thigh: 0, shin: 0, arm: 0, fore: 0 };
    return svg(360, 352, `
      ${box(0, `${mat(14, 158, 58)}${pillow(30, 56)}${pose([96, 47], { ...flat, face: -90, toe: -90 })}${f(34, 24, "face ↑", { size: 9.5, fill: '#0e5f8f', w: 800 })}`, 'supine', "supine: on the back, face up")}
      ${box(1, `${mat(14, 150, 58)}${pillow(30, 56)}${pose([96, 47], { ...flat, face: 90, toe: 75 })}${f(34, 24, "face ↓", { size: 9.5, fill: '#0e5f8f', w: 800 })}`, 'prone', "prone: on the abdomen, face down")}
      ${box(2, `${mat(64, 160, 58)}<path d="M70 58 L38 18" stroke="#b8c4cb" stroke-width="10" stroke-linecap="round"/><path d="M70 58 L38 18" stroke="#e3e9ee" stroke-width="7" stroke-linecap="round"/>${pose([80, 47], { torso: -128, thigh: -6, shin: 8, arm: 70, fore: -10, face: -38, toe: -90 })}`, 'Fowler', "Fowler: half sitting (45 to 60 degrees)")}
      ${box(3, `<g transform="rotate(-13 87 50)">${mat(14, 158, 58)}${pillow(30, 56)}${pose([96, 47], { ...flat, face: -90, toe: -90 })}</g>${f(36, 40, "head lower", { size: 9.5, fill: '#c8243f', w: 800 })}`, 'Trendelenburg', "Trendelenburg: head lower than the feet")}
      ${box(4, `${mat(14, 158, 58)}${pillow(30, 56)}${pose([92, 46], { torso: 180, thigh: 18, shin: -8, arm: 60, fore: 10, face: 45, toe: 80, far: [-2, 2] })}`, 'Sims', "Sims: on the left side, upper knee bent")}
      ${box(5, `${mat(14, 124, 58)}${pillow(30, 56)}<path d="M150 64 L156 26" stroke="#9aa9b1" stroke-width="3"/><path d="M148 24 h16" stroke="#9aa9b1" stroke-width="4" stroke-linecap="round"/>${pose([118, 47], { torso: 180, thigh: -72, shin: 14, arm: 0, fore: 0, face: -90, toe: -60 })}`, 'lithotomy', "lithotomy: legs up in stirrups")}`, "Patient positions");
  };

  /* روش‌های تصویربرداری */
  A.modalities = () => {
    const box = (x, y, icon, en, fa, note, c) => `<rect x="${x}" y="${y}" width="112" height="104" rx="14" fill="${c}14"/>${icon}${lab(x + 56, y + 66, en, fa, { size: 10, fill: c })}${f(x + 56, y + 96, note, { size: 8.5 })}`;
    const ray = (x, y, c) => `<rect x="${x - 18}" y="${y - 22}" width="36" height="14" rx="4" fill="${c}"/>${[0, 1, 2].map(i => `<path d="M${x - 10 + i * 10} ${y - 6} l${-4 + i * 4} 20" stroke="${c}" stroke-width="2" stroke-dasharray="3 2"/>`).join('')}`;
    const ring = (x, y, c) => `<circle cx="${x}" cy="${y - 6}" r="20" fill="none" stroke="${c}" stroke-width="7"/><rect x="${x - 26}" y="${y - 2}" width="52" height="6" rx="3" fill="#9aa9b1"/>`;
    const sono = (x, y, c) => `<path d="M${x - 6} ${y - 24} h12 v10 l8 12 h-28 l8 -12z" fill="${c}"/>${[0, 1, 2].map(i => `<path d="M${x - 10 - i * 5} ${y + 2 + i * 5} q${10 + i * 5} ${6 + i * 2} ${20 + i * 10} 0" stroke="${c}" stroke-width="1.8" fill="none"/>`).join('')}`;
    return svg(360, 224, `${box(4, 4, ray(60, 34, '#5b6b73'), 'radiography', "radiography (X-ray)", "X-rays", '#5b6b73')}${box(124, 4, ring(180, 34, '#1899d6'), 'CT', "computed tomography", "X-rays • slices", '#1899d6')}${box(244, 4, ring(300, 34, '#7b5ce0'), 'MRI', "magnetic resonance", "magnet • no radiation", '#7b5ce0')}
      ${box(4, 114, sono(60, 146, '#12a594'), 'ultrasonography', "ultrasonography (US)", "sound waves", '#12a594')}${box(124, 114, `${ring(180, 144, '#e58a00')}<circle cx="180" cy="138" r="5" fill="#e58a00"/>`, 'PET / SPECT', "nuclear medicine", "radioactive drug for scans", '#e58a00')}${box(244, 114, `<path d="M276 140 q14 -20 30 -6 q10 10 24 -4" stroke="#c8243f" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="330" cy="130" r="5" fill="#c8243f"/>`, 'endoscopy', "endoscopy", "tube with a camera", '#c8243f')}`, "Imaging methods");
  };

  /* ---------- حفره‌ها و نواحی ---------- */
  A.cavities = () => {
    const L = (x1, y1, x2, y2, en, fa, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.2" fill="${LINE}"/>${lab(x2 + 4, y2 + 3, en, fa, { size: 10.5, anchor: 'start', fill: c })}`;
    return svg(360, 280, `${side(120, 30, 1.2)}
      <ellipse cx="121" cy="50" rx="15" ry="13" fill="#f6d36b" opacity=".9"/>
      <path d="M104 78 Q96 140 104 168" stroke="#f2a43a" stroke-width="6" fill="none" stroke-linecap="round" opacity=".9"/>
      <path d="M116 84 Q140 84 142 104 L140 130 Q128 136 112 132 Q108 104 116 84Z" fill="#f39bb8" opacity=".9"/>
      <path d="M110 134 Q128 140 142 132" stroke="#7a1e3a" stroke-width="3" fill="none"/>
      <path d="M112 138 Q130 142 142 136 L140 164 Q128 170 112 166 Z" fill="#7fd3c6" opacity=".95"/>
      <path d="M112 168 Q128 172 140 166 Q138 182 126 182 Q112 180 112 168Z" fill="#b39ddb"/>
      ${L(121, 50, 210, 34, 'cranial', "cranial: brain", '#9a6a00')}<path d="M102 120 L62 120" stroke="${LINE}" stroke-width="1.2"/><circle cx="102" cy="120" r="2.2" fill="${LINE}"/>${lab(58, 117, 'spinal', "spinal: spinal cord", { size: 10.5, anchor: 'end', fill: '#9a5b00' })}
      ${L(132, 108, 210, 92, 'thoracic', "thoracic: heart and lungs", '#a8305c')}${L(140, 134, 210, 134, 'diaphragm', "muscle between chest and abdomen", '#7a1e3a')}${L(130, 152, 210, 170, 'abdominal', "abdominal", '#0b7a6c')}${L(126, 176, 210, 210, 'pelvic', "of the pelvis", '#5b3fbf')}
      
      ${pill(232, 240, 120, 30, '#fdeef5')}${t(292, 254, 'ventral', { size: 10.5, fill: '#a8305c', w: 900 })}${f(292, 266, "ventral: chest + abdominopelvic", { size: 8.5 })}
      ${pill(8, 240, 120, 30, '#fff4dc')}${t(68, 254, 'dorsal', { size: 10.5, fill: '#9a5b00', w: 900 })}${f(68, 266, "dorsal: cranial + spinal", { size: 8.5 })}`, "Body cavities");
  };

  /* نه ناحیه شکمی-لگنی */
  A.regions9 = () => {
    const g = 'g' + (++UID);
    const R = [['right hypochondriac', "right hypochondriac"], ['epigastric', "epigastric"], ['left hypochondriac', "left hypochondriac"], ['right lumbar', "right lumbar"], ['umbilical', "umbilical"], ['left lumbar', "left lumbar"], ['right inguinal (iliac)', "right inguinal"], ['hypogastric', "hypogastric"], ['left inguinal (iliac)', "left inguinal"]];
    const cx = [70, 180, 290], cy = [62, 132, 202];
    return svg(360, 272, `<path d="M40 14 Q180 2 320 14 L326 160 Q320 236 250 246 L110 246 Q40 236 34 160 Z" fill="url(#${g})" stroke="${SKIN_LINE}" stroke-width="1.5"/>
      <path d="M125 14 V246 M235 14 V246 M34 97 H326 M34 167 H326" stroke="#4f5bd5" stroke-width="2" stroke-dasharray="6 4"/><circle cx="180" cy="132" r="4" fill="#a0673a"/>
      ${R.map((r, i) => { const x = cx[i % 3], y = cy[Math.floor(i / 3)] + (i === 4 ? 18 : 4); if (i % 3 === 1) return lab(x, y, r[0], r[1], { size: 11, fill: '#3540a8' }); const w = r[0].split(' '); return t(x, y - 13, w[0], { size: 9, fill: '#6b74c9', w: 700 }) + lab(x, y, w.slice(1).join(' '), r[1], { size: 10, fill: '#3540a8' }); }).join('')}
      ${f(180, 264, "Left and right = the patient’s own left and right", { size: 9, fill: '#a31b33', w: 700 })}`, "The nine abdominopelvic regions", linear(g, '#fbe7d6', '#f1cdb2', true));
  };

  /* چهار ربع */
  A.quadrants = () => {
    const g = 'g' + (++UID);
    const Q = [['RUQ', 'right upper', "liver, gallbladder", 90, 74], ['LUQ', 'left upper', "stomach, spleen", 270, 74], ['RLQ', 'right lower', "the appendix", 90, 172], ['LLQ', 'left lower', "sigmoid colon", 270, 172]];
    return svg(360, 262, `<path d="M40 14 Q180 2 320 14 L326 150 Q320 226 250 236 L110 236 Q40 226 34 150 Z" fill="url(#${g})" stroke="${SKIN_LINE}" stroke-width="1.5"/>
      <path d="M180 14 V236 M34 124 H326" stroke="#c8243f" stroke-width="2.4"/><circle cx="180" cy="124" r="5" fill="#a0673a" stroke="#fff" stroke-width="2"/>
      ${Q.map(q => `${t(q[3], q[4], q[0], { size: 18, fill: '#a31b33', w: 900 })}${t(q[3], q[4] + 16, q[1], { size: 9.5, fill: MUTED })}${f(q[3], q[4] + 32, q[2], { size: 10, fill: INK, w: 700 })}`).join('')}
      ${f(180, 254, "Two perpendicular lines through the navel (umbilicus)", { size: 9, fill: MUTED })}`, "The four abdominal quadrants", linear(g, '#fbe7d6', '#f1cdb2', true));
  };

  /* ستون مهره‌ها */
  A.spine = () => {
    const seg = [['cervical', "cervical", 7, '#1899d6', 'C1–C7'], ['thoracic', "of the chest", 12, '#e5476b', 'T1–T12'], ['lumbar', "lower back", 5, '#e58a00', 'L1–L5'], ['sacral', "lowest back, over the sacrum", 5, '#12a594', "S1–S5 (fused)"], ['coccygeal', "coccygeal", 4, '#7b5ce0', "3–5 small vertebrae"]];
    let y = 14, out = '';
    seg.forEach(s => {
      const h = { cervical: 8, thoracic: 7, lumbar: 10, sacral: 8, coccygeal: 6 }[s[0]], fused = s[0] === 'sacral' || s[0] === 'coccygeal';
      const y0 = y;
      for (let i = 0; i < s[2]; i++) { const w = s[0] === 'coccygeal' ? 20 - i * 3 : s[0] === 'sacral' ? 34 - i * 4 : 22 + (s[0] === 'lumbar' ? 10 : s[0] === 'thoracic' ? 4 : 0); out += `<rect x="${100 - w / 2}" y="${y}" width="${w}" height="${h - (fused ? 0 : 2)}" rx="${fused ? 2 : 3}" fill="${s[3]}"/>`; y += h; }
      out += `<path d="M126 ${y0 + 2} q8 0 8 ${(y - y0) / 2 - 2} q0 ${(y - y0) / 2 - 2} -8 ${(y - y0) / 2 - 2}" stroke="${s[3]}" stroke-width="1.6" fill="none"/>${lab(144, (y0 + y) / 2, `${s[0]} (${s[2]})`, s[1] + ' • ' + s[4], { size: 10, anchor: 'start', fill: s[3] })}`;
      y += 4;
    });
    return svg(360, 318, out + f(180, 312, "From top to bottom: 7 cervical, 12 thoracic, 5 lumbar, sacral and coccygeal", { size: 9.5, fill: INK, w: 700 }), "Regions of the spine");
  };

  /* نواحی سطحی بدن */
  A['body-map'] = () => {
    const L = (x1, y1, x2, y2, en, fa, anchor) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1"/><circle cx="${x1}" cy="${y1}" r="2" fill="${LINE}"/>${lab(x2 + (anchor === 'end' ? -3 : 3), y2 + 3, en, fa, { size: 9.5, anchor })}`;
    return svg(360, 300, `${man(180, 34, 1.28, { palms: true })}
      ${L(180, 50, 80, 30, 'cephalic', "head", 'end')}${L(180, 82, 80, 62, 'cervical', "neck", 'end')}${L(170, 110, 80, 96, 'thoracic', "the chest", 'end')}${L(140, 130, 80, 132, 'brachial', "arm", 'end')}${L(137, 175, 80, 170, 'antecubital', "in front of the elbow", 'end')}${L(132, 192, 80, 206, 'carpal', "the wrist", 'end')}
      ${L(196, 150, 280, 120, 'abdominal', "abdomen", 'start')}${L(180, 152, 280, 156, 'umbilical', "the navel", 'start')}${L(196, 172, 280, 190, 'inguinal', "groin", 'start')}${L(200, 210, 280, 222, 'femoral', "thigh", 'start')}${L(200, 248, 280, 252, 'patellar', "knee", 'start')}${L(158, 280, 80, 266, 'pedal', "foot", 'end')}`, "Surface regions of the body");
  };

  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* پیکر — دنیای ۱: زبان بدن (پایه همه دنیاها)
 * پیش از ورود به سلول، بافت، دستگاه‌ها و نقشه بدن، «دستور زبان» واژه‌های آناتومی را یاد می‌گیریم:
 * قطعه‌های واژه، پیشوندهای جا، پسوندهای صفت‌ساز، منافذ بدن، قاعده‌های جمع، راه‌های دارو، همزادهای گیج‌کننده و اختصارهای پرونده.
 * منابع: Body Openings and Plural Endings، Body Organization، Basic Body Structure و فصل‌های دیگر پوشه پیوست.
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: "Body Language", short: "Language", sub: "Word pieces, position prefixes, body openings, Latin plurals, drug routes and chart abbreviations",
    color: '#4F5BD5', dark: '#3540A8', light: '#E3E6FB',
    levels: ["Puzzle pieces", "Openings and plurals", "Clinical language"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: قطعه‌های پازل ================= */
      {
        id: 'lx1', title: "The anatomy of a word", icon: '🧩', items: [
          L("Every word is a puzzle", `Anatomy terms are built from a few <b>fixed pieces</b>:<br>• the <b>prefix</b> at the start: ${e('epi-')} = upon, above<br>• the <b>root</b> in the middle: ${e('gastr')} = stomach<br>• the <b>suffix</b> at the end: ${e('-ic')} = pertaining to${fig('wordparts', '', "epigastric: pertaining to the region above the stomach; one of the nine abdominal regions.")}`),
          L("The combining vowel o", `We usually join a root to the next piece with a <b>combining vowel</b> (mostly <b>o</b>) and write it with a slash: ${e('cyt/o')}, ${e('hist/o')}. Root + vowel = <b>combining form</b>.<br><br>The rule: if the suffix starts with a <b>vowel</b>, the o is dropped:<br>• ${e('cyt/o + -logy')} → ✅ <b>cytology</b> (the o stays)<br>• ${e('my/o + -oma')} → ✅ <b>myoma</b> (not myooma)${memo("The o is like glue: it’s needed between two consonants; when the suffix already starts with a vowel, the glue isn’t needed.")}`),
          M(`Why is there no vowel o in ${e('<b>neuritis</b>')}?`, ["because the suffix -itis starts with a vowel", "because neur/o is a prefix", "because the o is always dropped", "because it isn’t a Latin word"], "When the suffix starts with a, e, i, o or u, the combining vowel is dropped: neur + itis."),
          L("Read the meaning from the end", `To work out the meaning, <b>start from the suffix</b>, then the prefix, and finally the roots:<br>${wb('hist/o', '-logy')} → “study of” + “tissue” = <b>the study of tissues</b><br>${wb('hist/o', '-logist')} → a <b>specialist</b> in tissues<br>${wb('hypo-', 'chondr/o', '-iac')} → “pertaining to” + “below” + “cartilage” = the region below the rib cartilages${memo("First ask “what happened, or what kind?” (suffix), then “where?” (prefix), then “which organ?” (root).")}`),
          P("Match each piece to its type", [['epi-', "prefix"], ['gastr/o', "root plus combining vowel"], ['-ic', "suffix"], ["the o in cyt/o", "combining vowel"]]),
          O(`Put the pieces of ${e('hypochondriac')} in writing order`, ['hypo-', 'chondr/o', '-iac'], "hypo- (below) + chondr/o (cartilage) + -iac (pertaining to): the region below the rib cartilages."),
          T("In myoma there is no combining vowel o, because the suffix -oma starts with a vowel.", true, "Correct: my/o + -oma = myoma (not myooma). In cytology, though, the o stays, because -logy starts with a consonant."),
          B("In histologist, the suffix ___ means “specialist”.", ['-logist', '-logy', '-ic'], "-logy is the science and -logist the specialist in that science."),
          W("Build the term that means “the study of cells”", ['cyt/o', '-logy'], ['-logist', 'hist/o', '-oma'], "cyt/o (cell) + -logy (study of) = cytology."),
          S("Spell the term for the study of tissues", 'histology', 'hist/o + -logy = histology.', 'histo…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx2', title: "Position prefixes", icon: '📍', items: [
          L("The prefix says “where?”", `In anatomy, most prefixes show <b>position</b>:${tbl([["prefix", "Meaning", "Example", "Meaning"], [e('epi-'), "upon, above", 'epigastric', "above the stomach"], [e('hypo-'), "below", 'hypogastric', "below the stomach"], [e('sub-'), "below", 'sublingual', "under the tongue"], [e('supra-'), "above", 'supraclavicular', "above the collarbone"], [e('infra-'), "below", 'infraorbital', "below the eye socket"], [e('inter-'), "between", 'interscapular', "between the shoulder blades"], [e('intra-'), "within", 'intravenous', "into the vein"], [e('peri-'), "around", 'perionychium', "around the nail"], [e('retro-'), "behind", 'retroperitoneal', "behind the peritoneum"]])}The roots in these examples: ${e('gastr/o')} stomach, ${e('lingu/o')} tongue, ${e('clavicul/o')} collarbone, ${e('orbit/o')} eye socket, ${e('scapul/o')} shoulder blade, ${e('ven/o')} vein, ${e('onych/o')} nail, ${e('peritone/o')} peritoneum.${memo(`Remember ${e('hypo')} through the “hippo”: it is always <b>below</b> the water. ${e('supra')} is like “super”: higher!`)}`),
          P("Match each prefix to its meaning", [['supra-', "above"], ['infra-', "below"], ['inter-', "between"], ['intra-', "within"], ['retro-', "behind"]]),
          M(`${e('<b>supraclavicular</b>')} means…`, ["above the collarbone", "below the collarbone", "between the two collarbones", "behind the collarbone"], "supra- (above) + clavicul/o (collarbone) + -ar."),
          L("Between or within?", `Two similar prefixes with completely different meanings:${vs(['inter-', "between two things: interscapular = between the shoulder blades"], ['intra-', "within one thing: intramuscular = within a muscle"])}${pearl("On a prescription, “IM” means intramuscular (into a muscle) and “IV” means intravenous (into a vein). Mixing them up in an injection is dangerous.")}`),
          M("Which term means “between the shoulder blades”?", ['interscapular', 'intrascapular', 'infrascapular', 'suprascapular'], "inter- = between. infrascapular is below the shoulder blade."),
          T(`${e('retroperitoneal')} means “behind the peritoneum”, like the position of the kidneys.`, true, "retro- (behind) + peritone/o (peritoneum) + -al. The kidneys are the only large abdominal organs behind the peritoneum."),
          B("In perionychium, the prefix ___ means “around”.", ['peri-', 'para-', 'epi-'], "peri- (around) + onych/o (nail): the tissue around the nail."),
          L("Opposite pairs", `${vs(['epi- / supra-', "upon and above"], ['hypo- / sub- / infra-', "below and under"])}${vs(['endo-', "within"], ['exo- / ex-', "outside"])}Whenever you see a prefix, remember its opposite twin too.`),
          W("Build the term that means “pertaining to below the eye socket”", ['infra-', 'orbit/o', '-al'], ['supra-', 'ment/o', 'inter-'], "infra- (below) + orbit/o (eye socket) + -al = infraorbital."),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx3', title: "“Pertaining to” suffixes", icon: '🏷️', items: [
          L("From noun to adjective", `To say “pertaining to”, we attach one of these suffixes to the root:<br>${e("-al, -ac, -ar, -ary, -ic, -ous, -iac, -ior")}<br><br>${tbl([["Noun", "Adjective", "Meaning"], ["thorax (chest)", 'thoracic', "of the chest"], ["abdomen (belly)", 'abdominal', "abdominal"], ["axilla (armpit)", 'axillary', "of the armpit"], ["cranium (skull)", 'cranial', "of the skull"], ["vertebra (spinal bone)", 'vertebral', "of a vertebra"], ["cardia (heart)", 'cardiac', "cardiac"], ["umbilicus (navel)", 'umbilical', "umbilical"], ["viscera (internal organs)", 'visceral', "visceral: pertaining to the internal organs"]])}${memo("These suffixes all mean the same thing; which one is used is decided by the “ear”, not by a rule. Just learn the correct word.")}`),
          M(`Which is the adjective for “pertaining to the chest”?`, ['thoracic', 'thoraxal', 'thoracary', 'thoraxic'], "thorac/o + -ic = thoracic, as in thoracic cavity."),
          P("Match each noun to its adjective", [['abdomen', 'abdominal'], ['axilla', 'axillary'], ['cranium', 'cranial'], ['vertebra', 'vertebral'], ['umbilicus', 'umbilical']]),
          L("-ad means “toward”", `The suffix ${e('-ad')} gives the direction of movement:<br>• <b>cephalad</b> = toward the head<br>• <b>caudad</b> = toward the tail (downward)<br>• <b>mediad</b> = toward the midline<br>By contrast, ${e('-al')} only means “pertaining to”: cephalic = pertaining to the head.${pearl("An operative report may say “the incision was extended cephalad”, meaning the cut was continued toward the head.")}`),
          T("cephalad means “pertaining to the head”.", false, "False; cephalad means “toward the head”. “Pertaining to the head” is cephalic."),
          B("In the word caudal, the root caud/o means ___.", ["tail, lower part of the body", "head", "side"], "caud/o = tail; in humans it means toward the lower body."),
          M(`${e('<b>visceral</b>')} means…`, ["pertaining to the internal organs (viscera)", "pertaining to the wall of a cavity", "pertaining to the skin", "pertaining to bone"], "viscer/o = viscera + -al. Its opposite is parietal = pertaining to the wall."),
          W("Build the term that means “pertaining to the skull”", ['crani/o', '-al'], ['cephal/o', '-ad', 'spin/o'], 'crani/o + -al = cranial.'),
          S("Spell the adjective meaning “pertaining to the armpit”", 'axillary', "axill/o + -ary; it has two l’s.", 'axil…'),
          L("Review of the “Puzzle pieces” level", recap(["word = prefix + root + suffix; start the meaning from the suffix, then the prefix and finally the root", "The combining vowel o is dropped before a suffix that starts with a vowel: myoma, but cytology", "Position prefixes: epi- and supra- above • hypo-, sub- and infra- below • inter- between • intra- within • peri- around • retro- behind", "<bdi dir=\"ltr\">-al, -ac, -ar, -ary, -ic, -ous</bdi> all mean “pertaining to”; <bdi dir=\"ltr\">-ad</bdi> means “toward”: cephalad"])),
          N('wb:lx')
        ]
      },

      /* ================= سطح ۲: منافذ و جمع‌ها ================= */
      {
        id: 'lx4', title: "Body openings", icon: '🕳️', items: [
          L("Openings and passages", `<b>orifice</b> comes from two Latin roots: ${e('os')} = mouth and ${e('facere')} = to make. The body is full of openings:${tbl([["Term", "Meaning"], ['orifice / aperture', "any opening or mouth"], ['foramen', "a natural hole, especially in a bone"], ['meatus', "a passage or opening (such as the urinary meatus)"], ['lumen', "the space inside a tube or hollow organ"], ['hiatus', "a gap or opening"], ['introitus', "the entrance to a passage or cavity"], ['stoma', "an artificial opening made by a surgeon"]])}${fig('openings')}`),
          M("What is a natural hole passing through a bone called?", ['foramen', 'stoma', 'lumen', 'perforation'], "A foramen is a natural hole in a bone, like the foramen magnum in the skull."),
          L("Open, narrowed or widened?", `• <b>patent</b>: open and unblocked (“the tube is patent”)<br>• <b>constriction</b>: narrowing, closing<br>• <b>dilatation / dilation</b>: widening beyond normal<br>• <b>perforation</b>: a hole through, for example the stomach wall in a stomach ulcer<br>• <b>ventricle</b>: a small cavity or chamber in the brain or heart${pearl("A “stoma” is an opening the surgeon makes, like a colostomy on the abdomen. The nurse checks its colour and whether it is open (patency).")}`),
          P("Match each term to its meaning", [['patent', "open and unblocked"], ['perforation', "a hole through a wall"], ['dilatation', "widening"], ['constriction', "narrowing"], ['lumen', "space inside a tube"]]),
          L("Openings of the head and face", `${fig(['lacrimal', 'mouth'], ["tears flow through the nasolacrimal duct into the nose", "mouth and throat"])}• <b>nares</b> (nostrils): breathing and smell<br>• <b>nasolacrimal duct</b>: carries tears from the tear sac to the nasal cavity<br>• <b>ear canal</b>: the passage for sound to the eardrum<br>• <b>mouth (os)</b>: eating, breathing and speaking`),
          M("Why does your nose run when you cry?", ["tears enter the nose through the nasolacrimal duct", "the nasal glands secrete at the same time", "tears flow from the ear to the nose", "the nares make tears"], "nas/o (nose) + lacrim/o (tear) + duct: the tear duct to the nose.", null, F('lacrimal')),
          T("A stoma is a natural opening of the body.", false, "False; a stoma is an artificial opening made by surgery (such as a colostomy or tracheostomy)."),
          B("The medical term for the nostrils is ___.", ['nares', 'meatus', 'foramina'], "nares (singular naris) = the nostrils."),
          S("Spell the term for any body opening (from os + facere)", 'orifice', "os (mouth) + facere (to make).", 'ori…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx5', title: "Latin plurals (1)", icon: '📚', items: [
          L("Plurals that don’t take an s", `Greek and Latin words form their plurals by their own rules; the <b>ending of the word</b> decides the rule:${tbl([["Singular ending", "Plural", "Example"], [e('-a'), e('-ae'), e('vertebra → vertebrae')], [e('-us'), e('-i'), e('nucleus → nuclei')], [e('-um'), e('-a'), e('ovum → ova')], [e('-is'), e('-es'), e('diagnosis → diagnoses')], [e('-y'), e('-ies'), e('artery → arteries')]])}${memo("“US” goes out, “I” comes in: nucleus → nuclei.")}`),
          M(`What is the plural of ${e('<b>vertebra</b>')}?`, ['vertebrae', 'vertebras', 'vertebri', 'vertebrata'], "-a → -ae: bursa → bursae, vertebra → vertebrae."),
          P("Match each singular to its plural", [['bursa', 'bursae'], ['nucleus', 'nuclei'], ['ovum', 'ova'], ['crisis', 'crises'], ['ovary', 'ovaries']]),
          L("Two common traps", `• ${e('-is → -es')}: <b>diagnosis → diagnoses</b>; note the plural is not “diagnosises”.<br>• ${e('-um → -a')}: <b>diverticulum → diverticula</b>; the final “a” here marks the plural, not the singular.<br>${fig('plurals', '', "The ten most common plural rules at a glance")}`),
          T(`${e('ova')} is the plural of ${e('ovum')} (egg cell).`, true, "Correct; -um → -a."),
          B("The plural of diagnosis is ___.", ['diagnoses', 'diagnosises', 'diagnosi'], '‎-is → ‎-es.'),
          M(`What is the plural of ${e('<b>thrombus</b>')} (clot)?`, ['thrombi', 'thrombuses', 'thrombae', 'thromba'], '‎-us → ‎-i.'),
          S("Write the plural of nucleus", 'nuclei', 'nucleus → nuclei (‎-us → ‎-i).', 'nucl…'),
          S("Write the plural of vertebra", 'vertebrae', 'vertebra → vertebrae (‎-a → ‎-ae).', 'verte…'),
          N('sp:lx')
        ]
      },
      {
        id: 'lx6', title: "Latin plurals (2)", icon: '📖', items: [
          L("Rarer rules", `${tbl([["Singular ending", "Plural", "Example"], [e('-ix, -ex'), e('-ices'), e('appendix → appendices')], [e('-on'), e('-a'), e('spermatozoon → spermatozoa')], [e('-oma'), e('-omata'), e('carcinoma → carcinomata')], [e('-nx'), e('-nges'), e('phalanx → phalanges')], [e('-en'), e('-ina'), e('foramen → foramina')], [e('-ax'), e('-aces'), e('thorax → thoraces')], [e('-ur'), e('-ora'), e('femur → femora')]])}${pearl("Most modern textbooks also accept the English plural: carcinomas and fibromas. But for exams, know the classic rule.")}`),
          P("Match each singular to its plural", [['appendix', 'appendices'], ['phalanx', 'phalanges'], ['foramen', 'foramina'], ['femur', 'femora'], ['meninx', 'meninges']]),
          M(`${e('<b>meninges</b>')} is the plural of which word?`, ['meninx', 'meningis', 'meninga', 'meningum'], "-nx → -nges: meninx → meninges (the membranes of the brain and spinal cord)."),
          L("Singular or plural?", `Sometimes the plural is better known than the singular:<br>• <b>phalanges</b> (finger bones); singular phalanx<br>• <b>meninges</b> (brain membranes); singular meninx<br>• <b>strata</b> (layers); singular stratum<br>${memo("A word ending in -ges is usually the plural of an -nx word: larynx → larynges and pharynx → pharynges.")}`),
          T(`${e('carcinomata')} is the plural of ${e('carcinoma')}.`, true, "Correct; -oma → -omata. The form carcinomas is also common."),
          B("The plural of foramen (hole) is ___.", ['foramina', 'foramens', 'foramae'], '‎-en → ‎-ina.'),
          M(`What is the plural of ${e('<b>thorax</b>')}?`, ['thoraces', 'thoraxes', 'thoraxi', 'thoracia'], '‎-ax → ‎-aces.'),
          O("Put these plurals in table order by their rule: -ix, -on, -oma", ['appendices', 'spermatozoa', 'carcinomata'], "-ix → -ices, -on → -a, -oma → -omata."),
          S("Write the plural of phalanx", 'phalanges', 'phalanx → phalanges (‎-nx → ‎-nges).', 'phalan…'),
          L("Review of the “Openings and plurals” level", recap(["Openings: orifice an opening • foramen a hole in bone • meatus a passage • lumen the space inside a tube • stoma a surgical opening", "patent open • constriction narrowing • dilatation widening • perforation a hole through", "Basic plurals: <bdi dir=\"ltr\">-a → -ae</bdi> • <bdi dir=\"ltr\">-us → -i</bdi> • <bdi dir=\"ltr\">-um → -a</bdi> • <bdi dir=\"ltr\">-is → -es</bdi> • <bdi dir=\"ltr\">-y → -ies</bdi>", "Rarer plurals: <bdi dir=\"ltr\">-ix → -ices</bdi> • <bdi dir=\"ltr\">-on → -a</bdi> • <bdi dir=\"ltr\">-oma → -omata</bdi> • <bdi dir=\"ltr\">-nx → -nges</bdi> • <bdi dir=\"ltr\">-en → -ina</bdi> • <bdi dir=\"ltr\">-ax → -aces</bdi>"])),
          N('d2t:lx')
        ]
      },

      /* ================= سطح ۳: زبان بالینی ================= */
      {
        id: 'lx7', title: "Drug routes", icon: '💉', items: [
          L("Where does the drug go in?", `${tbl([["Route", "Meaning", "Feature"], ['oral (PO)', "by mouth", "easy, slow absorption; stomach acid may break the drug down"], ['sublingual (SL)', "under the tongue", "faster absorption than by mouth, through the vessels under the tongue"], ['parenteral', "any route except the digestive tract", "invasive; the skin is pierced with a needle"]])}${wb('sub-', 'lingu/o', '-al')} → below + tongue + pertaining to.`),
          L("Four common injections", `${fig('routes', '', "Each needle goes to its target layer at its own angle: the smaller the angle, the shallower the injection.")}${tbl([["abbreviation", "Route", "Where?", "Angle"], ['ID', 'intradermal', "into the skin (dermis)", "10–15°"], ['SubQ', 'subcutaneous', "under the skin, into the fat", "45°"], ['IM', 'intramuscular', "into the muscle", "90°"], ['IV', 'intravenous', "into the vein", "25°"]])}${fig('injection-layers', '', "the same four injections in the standard reference picture")}`),
          M("Which injection goes into the fatty layer under the skin?", ['subcutaneous', 'intradermal', 'intramuscular', 'intravenous'], "sub- (below) + cutane/o (skin) + -ous.", null, F('injection-angles')),
          P("Match each abbreviation to its route", [['IV', "into the vein"], ['IM', "into the muscle"], ['ID', "into the skin"], ['SL', "under the tongue"]]),
          L("Intrathecal and inhaled", `• <b>intrathecal</b>: injection into the space around the spinal cord; ${e('thec/o')} = sheath (meninges)<br>• <b>inhalation</b>: the drug reaches the lungs as you breathe, like an asthma inhaler${fig('inhaler', '', "An inhaler with a chamber (spacer); the drug goes straight to the airways.")}${pearl("parenteral = para (beside) + enteral (intestine): any route that goes “beside” the digestive tract.")}`),
          T("A drug placed under the tongue is usually absorbed more slowly than a tablet swallowed by mouth.", false, "False; sublingual absorption through the vessels under the tongue is faster than by mouth."),
          B("The prefix intra- in intramuscular means ___.", ["within", "between", "below"], "intra- = within; inter- = between."),
          M("What is a drug injected into the space around the spinal cord called?", ['intrathecal', 'intradermal', 'intravenous', 'sublingual'], "thec/o = sheath, the membranes of the spinal cord."),
          W("Build the term that means “within a vein”", ['intra-', 'ven/o', '-ous'], ['inter-', 'sub-', 'arteri/o'], 'intra- + ven/o + -ous = intravenous.'),
          N('ab:lx')
        ]
      },
      {
        id: 'lx8', title: "Confusing twins", icon: '🪤', items: [
          L("One letter, two worlds", `${vs(['hidr/o', "sweat → hidropoiesis: making sweat"], ['hydr/o', "water → hydrencephalomeningocele: hernia of the brain and meninges with fluid"])}${vs(['sarc/o', "flesh (connective tissue) → sarcocele"], ['sacr/o', "the bone at the base of the spine → sacrum"])}${memo("Remember hidr/o through “hide” (sweat hidden under clothes) and hydr/o through “hydrate” (water). sarc/o is flesh (sarcoma, a fleshy tumour) and sacr/o is the sacrum.")}`),
          M(`${e('<b>hidropoiesis</b>')} means…`, ["production of sweat", "production of water in the brain", "formation of urine", "fluid build-up in tissue"], "hidr/o = sweat + -poiesis = production."),
          L("Touch, throb or blink?", `Three words that sound alike:<br>• <b>palpate</b>: to feel with the hands during an examination<br>• <b>palpitate</b>: for the heart to throb, a sense of a racing beat<br>• <b>palpebrate</b>: to blink (${e('palpebr/o')} = eyelid)${pearl("In a chart, “abdomen palpated, no masses” means the abdomen was felt and no mass was found, while “patient reports palpitations” means the patient complains of a pounding heartbeat.")}`),
          P("Match each term to its meaning", [['palpate', "to feel by touch"], ['palpitate', "heart throbbing"], ['palpebrate', "blinking"]]),
          L("Layer or streak?", `${vs(['strata', "plural of stratum: layers (strata of tissues)"], ['striae', "parallel lines and grooves, such as stretch marks"])}${vs(['perionychium', "tissue around the nail (a normal structure)"], ['paronychia', "infection and inflammation beside the nail"])}`),
          T("paronychia is the name of the normal tissue around the nail.", false, "False; the normal tissue is the perionychium, and paronychia is an infection beside the nail."),
          M("“The physician ___ the patient’s abdomen and found no mass.” Which word is correct?", ['palpated', 'palpitated', 'palpebrated', 'perforated'], "palpate = to feel during an examination."),
          B("sacr/o refers to the ___ bone.", ["sacrum", "thigh", "breastbone"], "The sacrum is the bone at the bottom of the spine; sarc/o means flesh."),
          S("Spell the term for “to feel with the hands during an examination”", 'palpate', "palpate; compare palpitate (throbbing).", 'palp…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx9', title: "Chart abbreviations", icon: '📋', items: [
          L("Charts are written in abbreviations", `${tbl([["abbreviation", "Full form", "Meaning"], ['ED', 'emergency department', "emergency department"], ['HPI', 'history of present illness', "history of present illness"], ['ROS', 'review of systems', "review of systems"], ['NKDA', 'no known drug allergies', "no known drug allergies"], ['HEENT', 'head, eyes, ears, nose, throat', "head, eyes, ears, nose and throat"], ['WNL', 'within normal limits', "within normal limits"], ['BP / Temp', 'blood pressure / temperature', "blood pressure / body temperature"], ['UE / LE', 'upper / lower extremity', "upper limb (arm) / lower limb (leg)"]])}`),
          M("The chart says “Allergies: NKDA”. This means…", ["the patient has no known drug allergies", "the patient is allergic to all drugs", "the type of allergy is unknown", "the patient takes no drugs"], 'no known drug allergies.'),
          P("Match each abbreviation to its meaning", [['HPI', "history of present illness"], ['ROS', "review of systems"], ['WNL', "within normal limits"], ['ED', "emergency department"]]),
          L("A real chart", `An 18-month-old boy has been brought to the <b>ED</b>: blood is coming from his left nostril (<b>epistaxis</b>) and he is restless. For the <b>HEENT</b> examination the child is placed <b>supine</b> (on his back), and a piece of French fry is seen in the <b>anterior</b> (front) part of the nasal cavity. The physician removes it with forceps.${fig('throat-exam', '', "HEENT examination: the throat is checked with a tongue depressor and a light.")}${pearl("Toddlers often push small objects into the nares or the ear canal; a bad smell or one-sided nosebleed is an important sign.")}`),
          M("In this child, epistaxis means…", ["nosebleed", "a foreign body in the ear", "constant sneezing", "narrowing of a nostril"], "epistaxis = nosebleed.", [["Patient", "18-month-old boy"], ["Complaint", "blood from the left nostril"], ["examination", "a foreign body in the anterior nasal cavity"]]),
          T("The HEENT examination includes the ears, nose and throat.", true, 'HEENT = head, eyes, ears, nose, throat.'),
          B("In a chart, “Temp” means body ___.", ["temperature", "pressure", "weight"], "Temp = temperature; BP = blood pressure."),
          M("In a chart, where does “LE edema” refer to swelling?", ["the lower limbs (legs)", "the upper limbs (arms)", "ear", "abdomen"], "LE = lower extremity; UE = upper extremity."),
          S("Write out “ED” in full (no abbreviation)", ['emergency department', 'emergency'], 'ED = emergency department.', 'emerg…'),
          L("Review of the “Clinical language” level", recap(["Drug routes: PO by mouth • SL under the tongue • parenteral any route but the digestive tract", "Four injections: ID dermis (10–15°) • SubQ fat under the skin (45°) • IM muscle (90°) • IV vein (25°)", "Twins: hidr/o sweat ≠ hydr/o water • sarc/o flesh ≠ sacr/o sacrum • palpate touch ≠ palpitate throb", "Chart abbreviations: ED, HPI, ROS, NKDA, HEENT, WNL, BP, UE and LE"])),
          N('ab:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* پیکر — دنیای ۲: سازمان‌یابی بدن و سلول
 * از علوم بدن و پله‌های سازمان‌یابی (سلول ← بافت ← اندام ← دستگاه ← موجود زنده) تا ساختار سلول، DNA، تقسیم و رشد غیرطبیعی.
 * منابع: An Org Chart to Live By، Body Organization، Body Structure6، Organization of the Body و Basic Body Structure. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'og', sym: 'Cyt', name: "Organisation and the Cell", short: "Cell", sub: "The body sciences, levels of organisation, metabolism, cell structure, DNA, mitosis and abnormal growth",
    color: '#D6457A', dark: '#A8305C', light: '#FCE4EE',
    levels: ["From cell to human", "Inside the cell", "Genes, division and the lab"],
    gens: EA.genIds('og'),
    lessons: [
      /* ================= سطح ۱: از سلول تا انسان ================= */
      {
        id: 'og1', title: "The body sciences", icon: '🔭', items: [
          L("We look at the body from several angles", `${tbl([["Science", "What does it study?"], ['anatomy', "body structure and how its parts relate; “cutting apart”"], ['physiology', "how the organs work"], ['biology', "life and living things"], ['embryology', "development of the unborn baby from fertilisation to birth"], ['histology', "tissues under the microscope"], ['cytology', "cells and their work"], ['pathology', "diseases and changes in tissues"]])}${memo("Anatomy says “what is there”, physiology says “how it works”. Like a house plan versus its wiring!")}`),
          M("Which science studies how the organs work?", ['physiology', 'anatomy', 'histology', 'embryology'], "physi/o = nature, function + -logy. Anatomy studies structure."),
          P("Match each science to its subject", [['cytology', "cell"], ['histology', "tissue"], ['embryology', "a developing unborn baby"], ['pathology', "disease"], ['biology', "life"]]),
          L("Roots hold the secret of the sciences’ names", `${wb('bi/o', '-logy')} → study of life<br>${wb('path/o', '-logy')} → study of disease<br>${wb('embry/o', '-logy')} → study of the embryo<br>and the specialist in each with ${e('-logist')}: <b>pathologist</b>, <b>histologist</b>, <b>cytologist</b>.${pearl("A tissue sample removed by the surgeon goes to the pathology lab, where the histologist and pathologist examine it under the microscope.")}`),
          T("Embryology is the study of how the unborn baby develops.", true, "embry/o = embryo (early unborn baby) + -logy."),
          B("A specialist who studies cells is a ___.", ['cytologist', 'cytology', 'histology'], 'cyt/o + -logist.'),
          M(`${e('<b>pathology</b>')} means…`, ["the study of diseases", "the study of body structure", "the study of the embryo", "the study of drugs"], "path/o = disease."),
          W("Build the term that means “the study of the developing embryo”", ['embry/o', '-logy'], ['cyt/o', '-logist', 'path/o'], "embry/o (embryo) + -logy (study of) = embryology."),
          S("Spell the term for the study of body function", 'physiology', 'physi/o + -logy.', 'physio…'),
          N('t2f:og')
        ]
      },
      {
        id: 'og2', title: "Levels of organisation", icon: '🪜', items: [
          L("From cell to human", `Like an organisation, the body has a hierarchy:${fig('levels')}• <b>cell</b>: the smallest unit of life<br>• <b>tissue</b>: cells working together<br>• <b>organ</b>: several tissues with a special job<br>• <b>system</b>: several organs for a complex job<br>• <b>organism</b>: the whole living being`),
          O("Put the levels of organisation in order from small to large", ['cell', 'tissue', 'organ', 'system', 'organism'], "Cell → tissue → organ → system → organism."),
          L("A real example: the biceps", `${fig('levels-org', '', "muscle cell → skeletal muscle tissue → organ (biceps brachii) → muscular system → human")}The skin is an <b>organ</b> too, because it is made of several tissues (epithelial, connective and nervous).${memo("Like language: letter → word → sentence → paragraph → book. The cell is the body’s letter and the organism the whole book.")}`),
          M("At which level of organisation is the stomach?", ['organ', 'tissue', 'system', 'cell'], "The stomach is made of several kinds of tissue and has a special job, so it is an organ. The digestive tract is a “system”.", null, F('levels-cycle')),
          T("The skin is a tissue, not an organ.", false, "False; the skin is an organ made of epithelial, connective and nervous tissue."),
          P("Match each example to its level", [["neuron", 'cell'], ["fatty tissue", 'tissue'], ["kidney", 'organ'], ["urinary system", 'system']]),
          L("Some amazing numbers", `• The body has 10 to 100 <b>trillion</b> cells<br>• Every cell needs <b>food, water and oxygen</b> to survive<br>• Of each paired organ (kidney, lung), <b>one</b> is enough to live<br>• Over a lifetime we shed about 18 kilograms of skin!`),
          B("A group of organs that work together on a complex job is called a ___.", ['system', 'tissue', 'organism'], "Like the digestive system: mouth, oesophagus, stomach, intestines and so on."),
          S("Spell the term for a group of cells working together", 'tissue', "tissue; its root is hist/o.", 'tis…'),
          N('f2t:og')
        ]
      },
      {
        id: 'og3', title: "Metabolism and balance", icon: '⚖️', items: [
          L("Building up and breaking down", `${fig('metabolism')}<b>metabolism</b> (${e('meta-')} = change + ${e('bol/o')} = throw + ${e('-ism')}) is the sum of all the body’s chemical processes, and it has two halves:${vs(['anabolism', "ana- = up: building large molecules from small ones (growth, repair)"], ['catabolism', "cata- = down: breaking molecules down to release energy"])}When metabolism stops, the organism dies.`),
          M(`${e('<b>catabolism</b>')} means…`, ["breaking substances down to release energy", "building new tissue", "cell division", "balancing body temperature"], "cata- = down, breaking down."),
          P("Match each prefix to its meaning", [['ana-', "up, building up"], ['cata-', "down, breaking down"], ['meta-', "change"], ['homeo-', "unchanging, stable"]]),
          L("Homeostasis: the balanced body", `<b>homeostasis</b> (${e('homeo-')} = same + ${e('-stasis')} = standing still) means the body keeps its internal conditions stable: temperature, osmotic pressure, blood sugar and the rate of cell division.${pearl("Fever, sweating, shivering and thirst are all tools of homeostasis; disease is where this balance is upset.")}`),
          T("Homeostasis means the body’s tendency to keep its internal conditions constant.", true, "Correct; homeo (same) + stasis (standing still)."),
          L("Cell fuel", `The cell stores the energy for its reactions as <b>ATP</b> (adenosine triphosphate). The three big groups of cell molecules:${tbl([["Group", "Example"], ['protein', "enzymes, some hormones, structural materials"], ['carbohydrate', "sugars and starches, such as glucose"], ['lipid', "fats"]])}${memo("Enzyme names often end in -ase: lipase breaks down fat, protease protein.")}`),
          M("Which is the cell’s energy molecule?", ['ATP', 'DNA', 'RNA', 'glucose'], "adenosine triphosphate; glucose is the basic fuel, but energy is stored and used as ATP."),
          B("A protein that speeds up chemical reactions is called an ___.", ['enzyme', 'lipid', 'gene'], "Enzymes are proteins, and their names often end in -ase."),
          S("Spell the term for all the body’s chemical processes", 'metabolism', 'meta- + bol/o + -ism.', 'meta…'),
          L("Review of the “From cell to human” level", recap(["Sciences: anatomy structure • physiology function • histology tissue • cytology cells • pathology disease • embryology the embryo", "-logy is the science and -logist the specialist in it", "The levels from small to large: <bdi dir=\"ltr\">cell → tissue → organ → system → organism</bdi>", "Metabolism has two halves: anabolism building up and catabolism breaking down; homeostasis means stable internal conditions"])),
          N('r2m:og')
        ]
      },

      /* ================= سطح ۲: درون سلول ================= */
      {
        id: 'og4', title: "Cell structure", icon: '🫧', items: [
          L("Three parts every cell has", `Whatever its shape, every cell has these three parts:${fig('cell')}• <b>cell membrane</b>: the outer wall; it chooses what goes in and out<br>• <b>cytoplasm</b>: the fluid inside the cell, around the nucleus<br>• <b>nucleus</b>: the control centre; the chromosomes and DNA are here`),
          M("Which part of the cell is like a “command centre”?", ['nucleus', 'cell membrane', 'cytoplasm', 'mitochondrion'], "The nucleus holds the chromosomes and directs the cell’s activities."),
          L("Organelles: little workshops", `Inside the cytoplasm, “organelles” do the work:${tbl([["tiny structure inside a cell", "Job"], ["mitochondrion (plural: mitochondria)", "power plant; makes ATP"], ['ER (endoplasmic reticulum)', "a network for making and carrying proteins and fats"], ['ribosome', "making proteins"], ['cilia', "hair-like projections for movement"]])}${fig(['cell-3d', 'cell-generic'], ["a 3-D cell", "the main organelles"])}`),
          P("Match each part to its job", [['cell membrane', "controlling what goes in and out"], ['nucleus', "holding the DNA"], ['mitochondrion', "making energy"], ['cytoplasm', "fluid inside the cell"]]),
          M("In this picture, what are the hair-like projections at the bottom of the cell called?", ['cilia', 'nucleus', 'mitochondria', 'membrane'], "cili/o = hair; cilia move mucus along the airways, for example.", null, F('cell-cilia')),
          T("Cytoplasm is the fluid inside the nucleus.", false, "False; the cytoplasm is outside the nucleus and inside the cell membrane. cyt/o (cell) + -plasm (formed substance)."),
          B("The plural of mitochondrion is ___.", ['mitochondria', 'mitochondrions', 'mitochondrii'], '‎-on → ‎-a.'),
          W("Build the term that means “the substance inside the cell”", ['cyt/o', '-plasm'], ['-cyte', 'kary/o', '-logy'], 'cyt/o + -plasm = cytoplasm.'),
          S("Spell the term for the cell’s control centre", 'nucleus', "Its plural is nuclei.", 'nucl…'),
          N('m2r:og')
        ]
      },
      {
        id: 'og5', title: "Specialised cells", icon: '🔬', items: [
          L("Every cell, a job", `Cells differ in shape and size depending on their job:${fig('cell-types', '', "nerve cell, white blood cell, ordinary cell, sperm and muscle cells")}${tbl([["cell", "Feature"], ['nerve cell (neuron)', "long projections for carrying messages"], ['muscle cell', "long and contracting"], ['epithelial cell', "covering surfaces"], ['adipocyte', "fat cell; stores energy"], ['erythrocyte', "red blood cell; carries oxygen"]])}`),
          M(`What kind of cell is ${e('<b>adipocyte</b>')}?`, ["fat cell", "bone cell", "nerve cell", "red blood cell"], "adip/o = fat + -cyte = cell."),
          L("The largest and the smallest", `• The largest cell in the body: the <b>ovum</b> (egg)<br>• The smallest cell in the body: the <b>sperm</b><br>These two sex cells are called <b>gametes</b>.${memo("-cyte always means “cell”: erythrocyte (red cell), leukocyte (white cell), adipocyte (fat cell), osteocyte (bone cell).")}`),
          T("The largest cell in the human body is the egg.", true, "Correct; and the smallest is the sperm."),
          P("Match each cell to its job", [['neuron', "carrying nerve signals"], ['erythrocyte', "carrying oxygen"], ['adipocyte', "storing fat"], ['gamete', "reproduction"]]),
          L("What do cells do?", `The main jobs of cells:<br>• taking in food and oxygen and making energy and heat<br>• getting rid of waste<br>• responding to changes around them (mechanical, chemical and nervous stimuli)<br>• growth, secretion and reproduction${pearl("Abnormal cell growth is a key factor in many diseases; that is why cells are examined under the microscope in pathology.")}`),
          B("In erythrocyte, the root erythr/o means ___.", ["red", "white", "fat"], "erythr/o = red."),
          M("What are the sex cells (egg and sperm) called?", ['gamete', 'adipocyte', 'organelle', 'neuron'], "gamete = mature sex cell."),
          W("Build the term that means “fat cell”", ['adip/o', '-cyte'], ['neur/o', '-oma', 'my/o'], 'adip/o + -cyte = adipocyte.'),
          N('d2t:og')
        ]
      },
      {
        id: 'og6', title: "DNA and chromosomes", icon: '🧬', items: [
          L("The library inside the nucleus", `${fig('dna')}• <b>chromosome</b>: a thread-like structure in the nucleus that controls growth, repair and reproduction<br>• <b>DNA</b> (deoxyribonucleic acid): the substance chromosomes are made of<br>• <b>gene</b>: a section of DNA that controls the making of one protein (especially an enzyme)<br>• <b>RNA</b>: a relative of DNA that helps make proteins`),
          M("How many chromosomes does each human body cell have (except sex cells)?", ["46 (23 pairs)", "23", "46 pairs", "92"], "46 chromosomes in 23 pairs; the egg and sperm have 23."),
          L("The karyotype: a family photo of the chromosomes", `${fig(['chromosomes', 'karyotype'], ["the chromosomes of one cell", "karyotype: the pairs in order of size"])}Pair 23 is the sex chromosomes: <b>XX</b> in females and <b>XY</b> in males.${memo("chrom/o = colour + -some = body: chromosome means “coloured body”, because it was found by staining under the microscope.")}`),
          M("Is the karyotype in this picture female or male?", ["male; the last pair is XY", "female; the last pair is XX", "you can’t tell", "it is a sex cell"], "In the bottom corner, pair 23 is seen with an X and a Y.", null, F('karyotype')),
          P("Match each term to its definition", [['gene', "unit of heredity; a section of DNA"], ['chromosome', "thread-like structure in the nucleus"], ['karyotype', "an ordered photo of the chromosomes"], ['RNA', "helps make proteins"]]),
          T("Genes control the making of proteins, especially enzymes.", true, "Correct; every gene is a recipe for one protein."),
          B("In males, chromosome pair 23 is ___.", ['XY', 'XX', 'YY'], "Female XX and male XY."),
          M(`What does ${e('<b>DNA</b>')} stand for?`, ['deoxyribonucleic acid', 'dorsal nerve area', 'double nucleus acid', 'diagnostic nuclear analysis'], "deoxyribonucleic acid."),
          S("Spell the term for a thread-like structure in the nucleus", 'chromosome', 'chrom/o + -some.', 'chromo…'),
          L("Review of the “Inside the cell” level", recap(["Every cell: cell membrane (the wall), cytoplasm (the fluid inside) and nucleus (the control centre)", "Organelles: mitochondrion power plant (ATP) • ribosome makes protein • ER transport • cilia movement", "-cyte means cell: erythrocyte, leukocyte, adipocyte, osteocyte", "DNA is in the chromosomes; a gene is a section of DNA; 46 chromosomes in 23 pairs (XX female, XY male)"])),
          N('ab:og')
        ]
      },

      /* ================= سطح ۳: ژن، تقسیم و آزمایشگاه ================= */
      {
        id: 'og7', title: "cell division", icon: '✂️', items: [
          L("Mitosis: one cell, two copies", `<b>mitosis</b> (${e('mit/o')} = thread) is the division of body cells: the chromosomes are doubled and shared equally between two daughter cells. Both daughter cells have <b>46</b> chromosomes.<br>The four steps of mitosis:<br>1. the chromosomes <b>double</b><br>2. they line up in the <b>middle</b> of the cell<br>3. they are pulled to <b>opposite ends</b> of the cell<br>4. the membrane splits the cell <b>in two</b>${fig('mitosis', '', "The stages of mitosis under the microscope and in a drawing: the chromosomes separate and the cell becomes two.")}`),
          L("Meiosis: halving for reproduction", `${fig('division')}<b>meiosis</b> happens only when sex cells (<b>gametes</b>) are made, and it <b>halves</b> the chromosomes: 46 → 23. At <b>fertilisation</b>, the egg (23) and the sperm (23) together make one cell with 46.${memo("Remember meiosis as “me-half”: halving! Mitosis is “my twin”: two identical twins.")}`),
          M("Which division halves the chromosomes?", ['meiosis', 'mitosis', 'metabolism', 'anabolism'], "Meiosis makes sex cells with 23 chromosomes."),
          P("Match each term to its meaning", [['mitosis', "division of body cells"], ['meiosis', "making sex cells"], ['gamete', "a sex cell with 23 chromosomes"], ['fertilization', "the joining of egg and sperm"]]),
          T("In mitosis, each daughter cell receives half of the parent cell’s chromosomes.", false, "False; in mitosis each daughter cell has all 46 chromosomes. Halving belongs to meiosis."),
          O("Put the stages of mitosis in order", ["the chromosomes double", "the chromosomes line up in the middle of the cell", "the chromosomes are pulled to opposite ends of the cell", "the membrane splits the cell in two"], "Doubling → lining up → separating → dividing the cytoplasm."),
          B("At fertilisation, the egg’s 23 chromosomes and the sperm’s 23 chromosomes make a cell with ___ chromosomes.", ["46", "23", "92"], "23 + 23 = 46."),
          M("Which division repairs a skin wound?", ['mitosis', 'meiosis', 'catabolism', 'fertilization'], "Skin cells multiply by mitosis."),
          S("Spell the term for the cell division that halves the chromosomes", 'meiosis', "meiosis; reduction division.", 'mei…'),
          N('sp:og')
        ]
      },
      {
        id: 'og8', title: "Abnormal growth", icon: '⚠️', items: [
          L("When cells get out of control", `${tbl([["Term", "Meaning"], ['neoplasm', "neo- (new) + -plasm: a new growth; a tumour"], ['carcinogen', "carcin/o + -gen: a cancer-causing agent"], ['carcinogenic', "cancer-causing (adjective)"], ['cytosis', "abnormal (increased) condition of cells"], ['organomegaly', "organ/o (organ) + -megaly (enlargement): abnormal enlargement of an organ"]])}${memo("-gen is the producer and -genic its adjective: a carcinogen (cigarette smoke) is a carcinogenic substance.")}`),
          M(`${e('<b>neoplasm</b>')} means…`, ["a new, abnormal growth of tissue (a tumour)", "blood plasma", "a newborn cell", "the material inside the nucleus"], "neo- = new + -plasm = formation."),
          L("-oma and -sarcoma", `${vs(['-oma', "tumour or mass: myoma = muscle tumour"], ['-sarcoma', "malignant tumour of connective tissue: myosarcoma"])}${pearl("Most -omas are benign (myoma, fibroma), but carcinoma and sarcoma are malignant. The suffix alone doesn’t tell you whether a tumour is benign or malignant.")}`),
          P("Match each term to its meaning", [['myoma', "muscle tumour"], ['myosarcoma', "malignant muscle tumour"], ['carcinogen', "cancer-causing agent"], ['organomegaly', "enlarged organ"]]),
          T("carcinogenic means “cancer-causing”.", true, "carcin/o + -genic (producing)."),
          B("In organomegaly, the suffix ___ means “enlargement”.", ['-megaly', '-oma', '-genic'], 'organ/o + -megaly.'),
          M("Which term refers to a malignant tumour of connective tissue?", ['sarcoma', 'myoma', "benign neoplasm", 'cytosis'], "sarc/o = flesh (connective tissue)."),
          W("Build the term that means “an agent that causes cancer”", ['carcin/o', '-gen'], ['-oma', 'neo-', '-genic'], 'carcin/o + -gen = carcinogen.'),
          S("Spell the term for a new, abnormal growth (tumour)", 'neoplasm', 'neo- + -plasm.', 'neo…'),
          N('wb:og')
        ]
      },
      {
        id: 'og9', title: "The cell and tissue lab", icon: '🧪', items: [
          L("Biopsy: a piece for diagnosis", `A <b>biopsy</b> (Bx) is the removal and examination of <b>living tissue</b> to reach a diagnosis (${e('bi/o')} = life + ${e('-opsy')} = viewing). The sample is examined under the microscope by a histologist or pathologist.`),
          L("Latin lab phrases", `${tbl([["Phrase", "Meaning"], ['in vivo', "within the living body"], ['in vitro', "in the laboratory; “in glass”"], ['in situ', "in its original place; not spread"], ['in toto', "as a whole"], ['postmortem', "after death"]])}${memo("vitro means glass (as in vitrine); vivo means living (as in vivid). A test tube is glass!")}`),
          M("A test done on cells in a lab dish is…", ['in vitro', 'in vivo', 'in situ', 'postmortem'], "vitro = glass."),
          P("Match each phrase to its meaning", [['in vivo', "within the living body"], ['in vitro', "in the laboratory"], ['in situ', "in its original place"], ['postmortem', "after death"]]),
          T("carcinoma in situ means a cancer that hasn’t yet spread from where it started.", true, "in situ = in its original place."),
          L("Zakaria’s chart", `Zakaria is a medical student; he is tired, can’t concentrate and thinks he has an underactive thyroid. The physician does a <b>ROS</b> and a full examination and orders blood sugar, a <b>CBC</b> and thyroid tests; all <b>WNL</b>. The cause? Too little sleep and a poor diet.${pearl("Self-diagnosis is so common among medical students that it has a name: “medical student syndrome”. The tests always have the final word.")}`),
          M("In Zakaria’s chart, ROS means…", ["reviewing the body systems by asking the patient", "complete blood count", "a tissue sample", "a radiology study"], 'review of systems.', [["Patient", "Zakaria, a medical student"], ["Complaint", "fatigue and poor concentration"], ["Tests", "sugar, CBC and thyroid: WNL"]]),
          B("The abbreviation Bx means ___.", ['biopsy', 'body x-ray', 'blood exam'], 'Bx = biopsy.'),
          S("Spell the term for removing living tissue for diagnosis", 'biopsy', "bi/o (life) + -opsy (viewing).", 'bio…'),
          L("Review of the “Genes, division and the lab” level", recap(["mitosis: two identical cells with 46 • meiosis: sex cells with 23", "neoplasm a new growth (tumour) • carcinogen cancer-causing • -oma a mass • sarcoma a malignant connective-tissue tumour", "biopsy (Bx) removing living tissue for diagnosis", "in vivo in the body • in vitro in the lab • in situ in place • postmortem after death"])),
          N('t2f:og')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* پیکر — دنیای ۳: بافت‌ها و غشاها
 * چهار بافت اصلی (پوششی، همبند، عضلانی، عصبی)، غشاهای جداری و احشایی، پوست به‌عنوان یک اندام و آسیب‌های بافتی.
 * منابع: Body Organization5، Body Organs and Parts، Basic Body Structure، Body Structure6 و Body Structure. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ts', sym: 'Hist', name: "Tissues and Membranes", short: "Tissue", sub: "Epithelial, connective, muscle and nervous tissue, parietal and visceral membranes, the skin and tissue injuries",
    color: '#E07A1F', dark: '#B35E10', light: '#FFEEDC',
    levels: ["The four main tissues", "Muscle, nerve and membrane", "Skin and tissue injury"],
    gens: EA.genIds('ts'),
    lessons: [
      /* ================= سطح ۱: چهار بافت اصلی ================= */
      {
        id: 'ts1', title: "The four tissue families", icon: '🧵', items: [
          L("Just four kinds of tissue", `A <b>tissue</b> is a group of similar cells that work together on one job. ${e('hist/o')} = tissue. The whole body is made of just four kinds of tissue:${fig('tissues')}• <b>epithelial</b>: covering surfaces and lining passages<br>• <b>connective</b>: joining and supporting; the most widespread tissue in the body<br>• <b>muscle</b>: contraction and movement<br>• <b>nervous</b>: carrying messages`),
          P("Match each tissue to its main job", [['epithelial', "covering and lining"], ['connective', "connecting and supporting"], ['muscle', "contraction and movement"], ['nervous', "carrying electrical signals"]]),
          L("Tissues throughout the body", `${fig('tissues-body', '', "Each circle shows a tissue under the microscope: nervous in the brain, epithelial in the skin, muscle in the heart and thigh, connective in bone and cartilage.")}${memo("Imagine the body as a house: the tiles and paint (epithelial), the steel beams and mortar (connective), the lift motor (muscle) and the wiring (nervous).")}`),
          M("Which is the most abundant and widespread tissue in the body?", ['connective', 'epithelial', 'muscle', 'nervous'], "Connective tissue is everywhere: bone, cartilage, tendon, fat and even blood."),
          T("Nervous tissue needs oxygen and food more than any other tissue.", true, "Correct; that is why the brain is damaged so quickly when oxygen runs short."),
          B("The study of tissues is called ___.", ['histology', 'cytology', 'pathology'], 'hist/o + -logy.'),
          M("Which is not an example of connective tissue?", ["the outer skin (epidermis)", "bone", "firm shock-absorbing connective tissue", "fat"], "The epidermis is epithelial tissue; the rest are connective."),
          M("In this picture, which tissue is shown inside the skull?", ['nervous', 'epithelial', 'muscle', 'connective'], "The brain and spinal cord are made of nervous tissue.", null, F('tissues-body')),
          S("Spell the two-word term for supporting tissue such as bone, tendon and fat", 'connective tissue', 'connective tissue.', 'conn…'),
          N('t2f:ts')
        ]
      },
      {
        id: 'ts2', title: "Epithelial tissue", icon: '🧱', items: [
          L("The body’s covering", `<b>epithelial tissue</b> (${e('epi-')} = upon + ${e('thel/o')} = nipple, a thin layer) covers the outer surface of the body, lines hollow organs and passages, and forms glands (<b>glandular epithelium</b>, which makes secretions). Its jobs: <b>protection, absorption, secretion and excretion</b>.`),
          L("Simple or stratified?", `${fig('epithelium')}${fig(['epi-simple', 'epi-stratified'], ["simple: one layer", "stratified: many layers"])}<b>stratum</b> means layer (plural: <b>strata</b>).${memo("Remember stratified through the “storeys of a building”: the more storeys, the more protection. The skin is stratified, the intestinal wall simple.")}`),
          M("What is many-layered epithelium that protects the tissues beneath called?", ['stratified', 'simple', 'striated', 'smooth'], "stratum = layer.", null, F('epi-stratified')),
          P("Match each type to its job", [['simple epithelium', "absorbing and transporting substances"], ['stratified epithelium', "protecting the layers beneath"], ['glandular epithelium', "making secretions in glands"]]),
          T("The insides of the digestive, respiratory and urinary tracts are lined with epithelial tissue.", true, "Correct; epithelial tissue covers both the outer surface and the inner surface of passages."),
          L("Tumour of epithelial tissue", `${wb('epitheli/o', '-oma')} → <b>epithelioma</b>: a tumour of epithelial tissue.${pearl("Most human cancers (carcinomas) start in epithelial tissue, because these cells divide constantly to keep the surface fresh.")}`),
          B("The plural of stratum (layer) is ___.", ['strata', 'stratums', 'striae'], "-um → -a. striae means streaks and grooves."),
          M(`${e('<b>epithelioma</b>')} means…`, ["Tumour of epithelial tissue", "inflammation of epithelial tissue", "removal of epithelial tissue", "a healthy epithelial cell"], 'epitheli/o + -oma.'),
          S("Spell the term for lining tissue", 'epithelium', "epithelium; plural epithelia.", 'epith…'),
          N('r2m:ts')
        ]
      },
      {
        id: 'ts3', title: "supporting tissue such as bone and tendon", icon: '🦴', items: [
          L("The body’s glue and scaffolding", `<b>connective tissue</b> joins the parts of the body and holds them up:${tbl([["tissue", "root", "Job"], ['bone', 'oste/o', "framework and support"], ['cartilage', 'chondr/o', "shock absorber in the joints"], ['tendon', 'tend/o', "joins muscle to bone"], ['ligament', '—', "joins bone to bone"], ['adipose', "adip/o, lip/o", "energy store and padding"], ['blood', 'hem/o', "liquid connective tissue"]])}`),
          M("Which tissue joins muscle to bone?", ['tendon', 'ligament', 'cartilage', 'adipose'], "Tendon = muscle to bone; ligament = bone to bone."),
          L("Under the microscope", `${fig('connective', '', "A: fatty tissue (adipose) • B: cartilage • C: bone")}${memo("Tendon: To bone from muscle (T-T); Ligament: Links bones (L-L)")}`),
          P("Match each root to its tissue", [['oste/o', "bone"], ['chondr/o', "firm shock-absorbing connective tissue"], ['adip/o', "fat"], ['fibr/o', "fibre"], ['tend/o', "tendon"]]),
          M("In this picture, which tissue is part B, where the cells sit in small spaces in a hard matrix?", ['cartilage', 'adipose', 'bone', 'muscle'], "Cartilage cells (chondrocytes) sit in spaces called lacunae.", null, F('connective')),
          T("Blood is also a kind of connective tissue.", true, "Correct; a liquid connective tissue with a fluid matrix (plasma)."),
          B("In hypochondriac, the root chondr/o means ___.", ["firm shock-absorbing connective tissue", "bone", "rib"], "The region below the rib cartilages."),
          W("Build the term that means “fat cell”", ['adip/o', '-cyte'], ['oste/o', 'chondr/o', '-oma'], 'adipocyte.'),
          S("Spell the term for firm, shock-absorbing connective tissue", 'cartilage', "cartilage; root chondr/o.", 'carti…'),
          L("Review of the “Four main tissues” level", recap(["Four tissues: epithelial covering • connective joining and support • muscle contraction • nervous messages", "Simple epithelium (one layer, absorption) and stratified (many layers, protection); glandular epithelium makes secretions", "Connective: bone • cartilage • tendon muscle to bone • ligament bone to bone • adipose fat • blood", "Roots: hist/o tissue • oste/o bone • chondr/o cartilage • adip/o and lip/o fat"])),
          N('m2r:ts')
        ]
      },

      /* ================= سطح ۲: عضله، عصب و غشا ================= */
      {
        id: 'ts4', title: "Three types of muscle", icon: '💪', items: [
          L("The tissue that contracts", `<b>muscle tissue</b> (${e('my/o')}, ${e('muscul/o')}) produces movement by contracting and relaxing:${fig('muscles')}• <b>skeletal</b>: attached to bone; voluntary and striped<br>• <b>cardiac</b>: only in the heart wall; involuntary and striped<br>• <b>smooth</b>: walls of the intestine, uterus and vessels; involuntary and smooth`),
          P("Match each muscle to where it is found", [['skeletal', "attached to bone"], ['cardiac', "only in the heart"], ['smooth', "walls of the intestine, uterus and vessels"]]),
          L("Under the microscope", `${fig('muscle-types', '', "A: skeletal, with cross stripes (striations) • B: cardiac • C: smooth")}${vs(['voluntary', "voluntary: skeletal muscle; under our command"], ['involuntary', "involuntary: cardiac and smooth"])}${memo("striated means “striped”. Skeletal and cardiac are both striped; smooth muscle, as its name says, is smooth.")}`),
          M("Which muscle is both striated and involuntary?", ['cardiac', 'skeletal', 'smooth', 'visceral'], "Cardiac muscle is striped but not under our command."),
          T("Smooth muscle is also called visceral muscle.", true, "Correct; because it is in the walls of the viscera (internal organs)."),
          L("Inflammation and tumours of muscle", `• ${wb('my/o', '-itis')} → <b>myositis</b>: muscle inflammation<br>• ${wb('my/o', '-oma')} → <b>myoma</b>: a benign muscle tumour<br>• ${wb('my/o', '-sarcoma')} → <b>myosarcoma</b>: a malignant muscle tumour${pearl("A uterine myoma (fibroid) is the most common benign tumour in women and starts in the smooth muscle of the uterus.")}`),
          B("Because of its cross stripes, skeletal muscle is also called ___ muscle.", ["striated", "smooth", "of the internal organs"], "striated = striped."),
          M(`${e('<b>myositis</b>')} means…`, ["muscle inflammation", "muscle tumour", "nerve pain", "torn tendon"], 'my/o + -itis.'),
          W("Build the term that means “malignant muscle tumour”", ['my/o', '-sarcoma'], ['-oma', '-itis', 'neur/o'], 'myosarcoma.'),
          N('wb:ts')
        ]
      },
      {
        id: 'ts5', title: "impulse-carrying tissue", icon: '⚡', items: [
          L("The body’s wiring", `<b>nervous tissue</b> (${e('neur/o')}) carries electrical messages between the brain, the spinal cord and every part of the body, and coordinates its activities. Its working unit is the <b>neuron</b> (nerve cell), and the science of the nervous system is called <b>neurology</b>.${fig('nerve-tissue', '', "A: a neuron with its cell body and fibres • B: bundles of nerve fibres in a nerve • C: grey and white matter")}`),
          M("What is the working cell of the nervous system called?", ['neuron', 'neuroma', 'nephron', 'myocyte'], "neuron = nerve cell."),
          L("Grey and white", `${vs(['gray matter', "neuron cell bodies; processing"], ['white matter', "nerve fibres covered in myelin; transmission"])}Nervous tissue makes up the brain, the spinal cord and the nerves throughout the body.${pearl("Neuropathy (nerve disease) is common in diabetes: the patient feels pins and needles and numbness in the feet.")}`),
          P("Match each term to its meaning", [['neuron', "nerve cell"], ['neuropathy', "nerve disease"], ['neuritis', "nerve inflammation"], ['neurology', "the science of the nervous system"]]),
          T("Nervous tissue is found only in the brain.", false, "False; the spinal cord and all the peripheral nerves are nervous tissue too."),
          B("In neuropathy, the suffix ___ means “disease”.", ['-pathy', '-itis', '-logy'], 'neur/o + -pathy.'),
          M("What is the brain’s grey matter mostly made of?", ["neuron cell bodies", "myelinated fibres", "fat cells", "firm shock-absorbing connective tissue"], "White matter is fibres covered in myelin."),
          W("Build the term that means “nerve disease”", ['neur/o', '-pathy'], ['my/o', '-itis', '-oma'], 'neuropathy.'),
          S("Spell the term for a nerve cell", 'neuron', 'neuron.', 'neu…'),
          N('f2t:ts')
        ]
      },
      {
        id: 'ts6', title: "Body membranes", icon: '🫧', items: [
          L("The two-layered covering of organs", `The large body cavities are lined with a <b>two-layered membrane</b>:${fig('membranes')}${vs(['parietal', "the layer covering the wall of the cavity (pariet/o = wall)"], ['visceral', "the layer on the organ itself (viscer/o = internal organs)"])}`),
          L("Pleura and peritoneum", `• <b>pleura</b>: the two-layered membrane around the lungs and the chest wall<br>• <b>peritoneum</b>: the two-layered membrane of the abdominopelvic cavity<br>• <b>retroperitoneal</b>: behind the peritoneum; the <b>kidneys</b> are the only large abdominal organs outside and behind the peritoneal sac${memo("pleura = lung (pleur/o), peritoneum = abdomen. Both start with P and both have two layers, parietal and visceral; P and V again!")}`),
          M("Where are the kidneys in relation to the peritoneum?", ["retroperitoneal: behind the peritoneum", "inside the peritoneal sac", "inside the pleura", "on the diaphragm"], "retro- = behind."),
          P("Match each term to its meaning", [['pleura', "membrane of the lungs and chest"], ['peritoneum', "membrane of the abdominal cavity"], ['parietal', "the wall layer"], ['visceral', "the layer on the organ"]]),
          T("The visceral layer of the pleura lies directly on the surface of the lung.", true, "Correct; the parietal layer covers the chest wall."),
          L("Mucous membrane", `Mucous membranes line the passages that open to the outside (mouth, nose, gut) and secrete <b>mucus</b>. ${e('muc/o')} = mucus.${pearl("Mind the spelling: mucus is the noun (the slime itself) and mucous the adjective (mucous membrane).")}`),
          B("The slimy substance secreted by a mucous membrane is called ___.", ['mucus', 'mucous', 'pleura'], "mucus is the noun; mucous the adjective."),
          M("What is inflammation of the pleura called?", ['pleuritis', 'peritonitis', 'pneumonia', 'myositis'], "pleur/o + -itis. Inflammation of the peritoneum is peritonitis."),
          W("Build the term that means “behind the peritoneum”", ['retro-', 'peritone/o', '-al'], ['pleur/o', 'sub-', 'pariet/o'], 'retroperitoneal.'),
          L("Review of the “Muscle, nerve and membrane” level", recap(["Muscle: skeletal voluntary and striped • cardiac involuntary and striped • smooth (visceral) involuntary and smooth", "my/o: myositis inflammation • myoma benign tumour • myosarcoma malignant tumour", "Nervous: neuron nerve cell • grey matter cell bodies • white matter myelinated fibres", "Membranes: parietal on the wall • visceral on the organ • pleura around the lungs • peritoneum in the abdomen • mucus the noun and mucous the adjective"])),
          N('ab:ts')
        ]
      },

      /* ================= سطح ۳: پوست و آسیب بافت ================= */
      {
        id: 'ts7', title: "The skin, an organ of several tissues", icon: '🖐️', items: [
          L("The integumentary system", `The <b>integumentary system</b> (the body’s covering) includes the skin and its appendages: <b>hair, nails, sweat glands and oil glands</b>. The skin is a protective two-way barrier and helps regulate temperature. ${e('derm/o')}, ${e('dermat/o')}, ${e('cutane/o')} = skin.`),
          L("Layers of the skin", `${fig('routes', '', "from outside in: epidermis, dermis, subcutaneous fat and muscle")}• <b>epidermis</b>: the outer layer (epi- = upon)<br>• <b>dermis</b>: the layer beneath, with vessels and nerves<br>• <b>subcutaneous</b>: under the skin, fatty tissue`),
          M("What is the outer layer of the skin called?", ['epidermis', 'dermis', 'subcutaneous', 'perionychium'], "epi- (upon) + derm/o (skin)."),
          L("Skin numbers", `• Every square inch of skin has about <b>3 million cells</b><br>• The skin contains about <b>72 kilometres</b> of nerves<br>• The skin is made of epithelial, connective and nervous tissue, so it is an <b>organ</b>${memo("dermatology = derm (skin) + logy; the skin specialist is a dermatologist. cutaneous also means skin, but from Latin.")}`),
          P("Match each root to its meaning", [['dermat/o', "skin"], ['onych/o', "nail"], ['hidr/o', "sweat"], ['lip/o', "fat"]]),
          L("The nail and around it", `${vs(['perionychium', "peri- + onych/o: the tissue around the nail"], ['paronychia', "para- + onych/o: an infection beside the nail"])}${pearl("Paronychia often starts after picking the skin beside the nail or a manicure: the nail fold is red, swollen and painful.")}`),
          T("The integumentary system also includes the sweat and oil glands.", true, "Correct; hair, nails and glands are the appendages of the skin."),
          B("An infection of the tissue beside the nail is called ___.", ['paronychia', 'perionychium', 'onychoma'], "para- = beside."),
          W("Build the term that means “the study of the skin”", ['dermat/o', '-logy'], ['onych/o', '-itis', 'hidr/o'], 'dermatology.'),
          N('d2t:ts')
        ]
      },
      {
        id: 'ts8', title: "Tissue injury and repair", icon: '🩹', items: [
          L("How tissue responds to injury", `<b>Inflammation</b> is the tissue’s protective response to irritation, infection or allergy. The signs: redness, heat, swelling and pain. Its suffix is ${e('-itis')}.${tbl([["Term", "Meaning"], ['myositis', "muscle inflammation"], ['neuritis', "nerve inflammation"], ['pleuritis', "inflammation of the lung lining (pleurisy)"], ['dermatitis', "skin inflammation"]])}`),
          M("Which is the suffix for “inflammation”?", ['-itis', '-osis', '-oma', '-pathy'], "-itis = inflammation."),
          L("Scars and adhesions", `• <b>fibrosis</b>: replacement of tissue with fibrous (scar) tissue; ${e('fibr/o + -osis')}<br>• <b>adhesion</b>: bands of scar tissue that stick together two surfaces that should be separate, mostly in the <b>abdomen</b> after surgery, inflammation or injury<br>• <b>liposuction</b>: ${e('lip/o')} (fat) + suction; removing fat under the skin by suction${pearl("Abdominal adhesions after surgery are the most common cause of bowel obstruction in adults.")}`),
          L("When inflammation becomes widespread", `<b>Sepsis</b> is the body’s inflammatory response to infection, with <b>fever</b>, a <b>fast heart rate and breathing</b> and <b>low blood pressure</b>. It is a medical emergency.${memo("Remember sepsis through “septic” (infected): a septic tank is a tank of contaminated waste!")}`),
          P("Match each term to its meaning", [['fibrosis', "formation of fibrous tissue"], ['adhesion', "two surfaces stuck together by scar tissue"], ['inflammation', "the tissue’s protective response"], ['sepsis', "a whole-body inflammatory response to infection"]]),
          T("Adhesions most often form after abdominal surgery.", true, "Correct; surgery, inflammation or injury can create bands of scar tissue."),
          M("A condition with fever, a fast pulse and breathing and falling blood pressure after an infection refers to which?", ['sepsis', 'fibrosis', 'adhesion', 'myoma'], "Sepsis is the systemic inflammatory response to infection."),
          B("Liposuction means sucking out and removing ___.", ["fat", "muscle", "brain fluid"], "lip/o = fat."),
          S("Spell the term for the tissue response of redness, heat, swelling and pain", 'inflammation', "inflammation; it has two m’s.", 'inflam…'),
          N('sp:ts')
        ]
      },
      {
        id: 'ts9', title: "Tissues in action", icon: '🏋️', items: [
          L("One muscle, several tissues", `The biceps of the arm (<b>biceps brachii</b>) shows how several tissues make up one organ: <b>muscle tissue</b> contracts, the <b>tendon</b> (connective) attaches it to bone and a <b>nerve</b> gives the command.${fig('biceps', '', "Contracting the biceps bends the elbow (flexion); tendons attach the muscle to the bones.")}`),
          M("In this picture, what is the part that attaches the muscle to the bone called?", ['tendon', 'ligament', 'cartilage', 'nerve'], "tendon = muscle to bone.", null, F('biceps')),
          L("Where does a muscle get its name?", `• <b>biceps</b> = bi- (two) + ceps (head): a two-headed muscle<br>• <b>brachii</b> = pertaining to the arm (${e('brachi/o')})<br>${pearl("Intramuscular (IM) injections are often given into the deltoid muscle of the shoulder or the gluteal muscle, because the muscle is large and away from big vessels and nerves.")}`),
          P("Match each part to its tissue", [["muscle fibre", "contracting tissue"], ["tendon", "connective tissue"], ["skin over the arm", "Epithelial tissue"], ["nerve of the arm", "impulse-carrying tissue"]]),
          T("The prefix bi- in biceps means “two”.", true, "biceps = two heads; triceps = three heads."),
          O("Put them in order from small to large", ["long, slender contracting cell", "skeletal muscle tissue", "biceps of the arm", "muscular system"], "Cell → tissue → organ → system."),
          B("A ligament joins bone to ___.", ["bone", "muscle", "skin"], "A ligament joins bone to bone; a tendon joins muscle to bone."),
          M("Which tissue acts as a shock absorber in the knee?", ['cartilage', 'tendon', 'muscle', 'epithelium'], "Joint cartilage is the shock absorber."),
          S("Spell the term for the band that joins muscle to bone", 'tendon', "tend/o, tendin/o.", 'ten…'),
          L("Review of the “Skin and tissue injury” level", recap(["Skin = epidermis + dermis; beneath it the subcutaneous layer (fat); derm/o, dermat/o and cutane/o = skin", "perionychium the tissue around the nail ≠ paronychia an infection beside the nail", "Injury: inflammation with the suffix -itis • fibrosis scarring • adhesion scar bands sticking together • sepsis widespread inflammation from infection", "Every organ is made of several tissues, like the biceps: muscle + tendon + nerve"])),
          N('m2r:ts')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* پیکر — دنیای ۴: دستگاه‌ها و اندام‌ها
 * نقشه دستگاه‌های بدن، ریشه‌های اندام‌ها در هر دستگاه (با جدول‌های ریشه کتاب) و تخصص‌های پزشکی مربوط.
 * منابع: Basic Body Structure (جدول‌های ریشه هر دستگاه)، Body Organization5، Body Organs and Parts و The Human Body An Orientation. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'sy', sym: 'Sys', name: "Systems and Organs", short: "System", sub: "The body systems, their organs and roots, from skin and skeleton to glands, and the medical specialties",
    color: '#12A594', dark: '#0B7A6C', light: '#D9F5EF',
    levels: ["The map of the systems", "Circulation, breathing and digestion", "Excretion, control and specialties"],
    gens: EA.genIds('sy'),
    lessons: [
      /* ================= سطح ۱: نقشه دستگاه‌ها ================= */
      {
        id: 'sy1', title: "The map of the systems", icon: '🗺️', items: [
          L("Twelve teams, one body", `A <b>system</b> is a group of organs that work together on a complex job. Textbooks count 11 to 13 systems:${fig('systems')}`),
          L("Each system’s job in one sentence", `${tbl([["system", "Job"], ['integumentary', "skin and appendages: a two-way protective barrier and temperature control"], ['musculoskeletal', "support, movement, making blood cells, storing minerals"], ['cardiovascular', "pumping blood to deliver food and oxygen"], ['lymphatic and immune', "defence against disease and germs"], ['nervous', "receiving sensory information and coordinating the response"], ['endocrine', "regulating metabolism with hormones"], ['respiratory', "taking in oxygen and getting rid of carbon dioxide"], ['digestive', "digesting and absorbing food"], ['urinary', "filtering the blood and removing waste"], ['reproductive', "making eggs and sperm; growth of the unborn baby"]])}${memo("integumentary comes from integument (covering), like the cover of a book that wraps all the pages.")}`),
          P("Match each system to its main job", [['respiratory', "taking in oxygen, removing CO₂"], ['digestive', "digesting and absorbing food"], ['urinary', "filtering the blood and removing waste"], ['endocrine', "regulation by hormones"], ['integumentary', "protective barrier and temperature control"]]),
          M("Which system is the body’s “two-way protective barrier” and helps control temperature?", ['integumentary', 'endocrine', 'lymphatic', 'urinary'], "The skin and its appendages."),
          T("The musculoskeletal system also helps make blood cells.", true, "Correct; the red bone marrow makes blood cells."),
          B("The ___ system regulates metabolism with hormones it secretes straight into the blood.", ['endocrine', 'digestive', 'integumentary'], "endo- (within) + crin/o (secrete)."),
          M("Which system pumps blood to deliver nutrients and oxygen?", ['cardiovascular', 'respiratory', 'lymphatic', 'nervous'], "cardi/o (heart) + vascul/o (vessel)."),
          W("Build the term that means “pertaining to the heart and vessels”", ['cardi/o', 'vascul/o', '-ar'], ['pulmon/o', '-logy', 'gastr/o'], 'cardiovascular.'),
          S("Spell the adjective for the skin system (the ___ system)", 'integumentary', 'integumentary system.', 'integu…'),
          N('t2f:sy')
        ]
      },
      {
        id: 'sy2', title: "Skeleton and muscle", icon: '🦴', items: [
          L("A moving framework", `The <b>musculoskeletal</b> system includes 206 bones, the joints, cartilages, ligaments and all the muscles.${fig(['sys-skeletal', 'sys-muscular'], ["the skeletal system and its roots", "the muscular system and its roots"])}${tbl([["root", "Meaning"], [e('oste/o'), "bone"], [e('arthr/o'), "joint"], [e('chondr/o'), "firm shock-absorbing connective tissue"], [e("my/o, muscul/o"), "muscle"], [e("tend/o, tendin/o"), "tendon"]])}`),
          P("Match each root to its meaning", [['arthr/o', "joint"], ['oste/o', "bone"], ['chondr/o', "firm shock-absorbing connective tissue"], ['tendin/o', "tendon"]]),
          M(`${e('<b>arthritis</b>')} means…`, ["joint inflammation", "bone inflammation", "muscle inflammation", "tendon inflammation"], 'arthr/o + -itis.'),
          L("Word building with bone and joint", `• ${wb('oste/o', 'arthr/o', '-itis')} → <b>osteoarthritis</b>: inflammation of bone and joint<br>• ${wb('chondr/o', '-oma')} → <b>chondroma</b>: a cartilage tumour<br>• ${wb('my/o', '-algia')} → <b>myalgia</b>: muscle pain${pearl("The bone and joint specialist is an orthopedist: orth/o (straight) + ped/o (child), because the field began with straightening children’s crooked bones.")}`),
          T("The adult body has 206 bones.", true, "Correct; a newborn has more bones, which fuse later."),
          B("In myalgia, the suffix ___ means “pain”.", ['-algia', '-itis', '-oma'], "-algia and -dynia both mean pain."),
          M("Which system does the spine belong to?", ["skeletal", "of the nerves", "lymphatic", "integumentary"], "The spine is bone; the spinal cord inside it is nervous tissue.", null, F('sys-skeletal')),
          W("Build the term that means “inflammation of a joint”", ['arthr/o', '-itis'], ['oste/o', '-oma', 'my/o'], 'arthritis.'),
          S("Spell the specialty of bones and joints", 'orthopedics', 'orth/o + ped/o + -ics.', 'ortho…'),
          N('r2m:sy')
        ]
      },
      {
        id: 'sy3', title: "Nerves and senses", icon: '🧠', items: [
          L("The body’s commander", `The <b>nervous</b> system regulates most of the body’s activities:<br>• <b>CNS</b> (central nervous system): the brain and spinal cord<br>• peripheral nerves: 12 pairs of cranial nerves and 31 pairs of spinal nerves${fig('sys-nervous', '', "the brain, spinal cord and nerves, and the roots of the nervous system, eye and ear")}${tbl([["root", "Meaning"], [e('encephal/o'), "brain"], [e('cerebr/o'), "cerebrum"], [e('myel/o'), "spinal cord (and bone marrow)"], [e('neur/o'), "nerve"]])}The science of the nervous system is <b>neurology</b>.`),
          M("What does the CNS include?", ["the brain and spinal cord", "the brain and eyes", "the spinal cord and peripheral nerves", "all the nerves of the body"], 'central nervous system = brain + spinal cord.'),
          L("Eye and ear", `${fig(['eye-section', 'ear-section'], ["section of the eye", "section of the ear"])}${tbl([["root", "Meaning"], [e("ophthalm/o, ocul/o"), "eye"], [e('blephar/o'), "eyelid"], [e('ot/o'), "ear"]])}Eye medicine is <b>ophthalmology</b>, and ${e('ot/o')} appears in <b>otitis</b> (inflammation of the ear).${memo("Remember ocul/o through “ocular” and “binoculars”; ot/o through “otoscope”, the ear light.")}`),
          P("Match each root to its meaning", [['encephal/o', "brain"], ['myel/o', "spinal cord (and bone marrow)"], ['neur/o', "nerve"], ['ophthalm/o', "eye"], ['ot/o', "ear"]]),
          T("In the nervous system, myel/o refers to the spinal cord.", true, "Correct; in haematology the same root means bone marrow."),
          B("The study of diseases of the nervous system is ___.", ['neurology', 'nephrology', 'urology'], 'neur/o + -logy.'),
          M("How many pairs of spinal nerves are there?", ["31 pairs", "12 pairs", "23 pairs", "46 pairs"], "12 pairs of cranial nerves and 31 pairs of spinal nerves."),
          W("Build the term that means “inflammation of the brain”", ['encephal/o', '-itis'], ['myel/o', '-oma', 'ot/o'], 'encephalitis.'),
          S("Spell the term for the medical specialty of the eye", 'ophthalmology', "ophthalm/o + -logy; don’t forget the ph and th.", 'ophth…'),
          L("Review of the “Map of the systems” level", recap(["Systems: integumentary, musculoskeletal, nervous, endocrine, cardiovascular, lymphatic, respiratory, digestive, urinary, reproductive", "Skeleton and muscle: oste/o bone • arthr/o joint • chondr/o cartilage • my/o muscle • tendin/o tendon", "Nerves: encephal/o brain • cerebr/o cerebrum • myel/o spinal cord • neur/o nerve; CNS = brain + spinal cord", "Senses: ophthalm/o and ocul/o eye • blephar/o eyelid • ot/o ear"])),
          N('m2r:sy')
        ]
      },

      /* ================= سطح ۲: گردش، تنفس و گوارش ================= */
      {
        id: 'sy4', title: "Heart, blood and lymph", icon: '❤️', items: [
          L("The circulatory system", `The <b>cardiovascular</b> system is the heart and vessels; it carries blood to every tissue and takes waste away.${fig('sys-cardio', '', "Arteries (red) carry blood away from the heart and veins (blue) bring it back.")}${tbl([["root", "Meaning"], [e('cardi/o'), "heart"], [e("angi/o, vascul/o"), "vessel"], [e('arteri/o'), "artery: carries blood away from the heart"], [e("ven/o, phleb/o"), "vein: brings blood back to the heart"], [e("hem/o, hemat/o"), "blood"]])}• <b>cardiology</b>: the study of the heart<br>• <b>phlebotomy</b>: ${e('phleb/o + -tomy')} (incision); drawing blood from a vein`),
          M("Which vessel carries blood away from the heart?", ['artery', 'vein', 'lymph vessel', 'capillary'], "An artery carries blood away from the heart; a vein carries it to the heart."),
          L("The lymphatic and immune system", `${fig('sys-lymph', '', "nodes, lymph vessels, the spleen, thymus and tonsils")}${tbl([["root", "Meaning"], [e('lymph/o'), "lymph"], [e('lymphaden/o'), "lymph node"], [e('splen/o'), "spleen"], [e('tonsill/o'), "tonsil"], [e('adenoid/o'), "adenoid"]])}${memo("Artery = Away from the heart (A-A). A vein visits the heart and comes back.")}`),
          P("Match each root to its meaning", [['phleb/o', "vein"], ['arteri/o', "artery"], ['splen/o', "spleen"], ['angi/o', "vessel"]]),
          T("The lymphatic system protects the body against disease and germs.", true, "Correct; together with the immune system."),
          B("In phlebotomy (drawing blood), the root phleb/o means ___.", ["vein", "artery", "heart"], "phleb/o = ven/o = vein."),
          M(`Which specialty is ${e('<b>cardiology</b>')}?`, ["heart", "blood", "skin", "kidney"], 'cardi/o + -logy.'),
          W("Build the term that means “enlarged heart”", ['cardi/o', '-megaly'], ['hepat/o', '-itis', 'angi/o'], 'cardiomegaly.'),
          S("Spell the adjective meaning “pertaining to the heart and vessels”", 'cardiovascular', 'cardi/o + vascul/o + -ar.', 'cardio…'),
          N('wb:sy')
        ]
      },
      {
        id: 'sy5', title: "The respiratory system", icon: '🫁', items: [
          L("The path of air", `The <b>respiratory</b> system takes oxygen from the air and gets rid of carbon dioxide.${fig('sys-respiratory', '', "the nose, pharynx, larynx, trachea, bronchi, lungs and diaphragm")}${tbl([["root", "organ"], [e("rhin/o, nas/o"), "nose"], [e('pharyng/o'), "throat (pharynx)"], [e('laryng/o'), "voice box (larynx)"], [e('trache/o'), "windpipe (trachea)"], [e('bronch/o'), "bronchus"], [e("pulmon/o, pneum/o"), "lung"], [e('phren/o'), "muscle between chest and abdomen"], [e('thorac/o'), "the chest"]])}`),
          O("Put the path of air in order from outside to inside", ['nose (rhin/o)', 'pharynx (pharyng/o)', 'larynx (laryng/o)', 'trachea (trache/o)', 'bronchus (bronch/o)', 'lung (pulmon/o)'], "Nose → pharynx → larynx → trachea → bronchus → lung."),
          P("Match each root to its meaning", [['laryng/o', "voice box"], ['pharyng/o', "throat (pharynx)"], ['trache/o', "windpipe"], ['phren/o', "muscle between chest and abdomen"], ['rhin/o', "nose"]]),
          L("Two roots for the lung", `${vs(['pulmon/o', "Latin: pulmonary, pulmonology"], ["pneum/o, pneumon/o", "Greek: pneumonia"])}${pearl("The pharynx is a passage for both air and food; that is why it also appears in the table of digestive roots.")}${memo("The larynx is the “voice box”; laryngitis means a hoarse voice. The pharynx is behind the mouth; pharyngitis means a sore throat.")}`),
          M(`What is the main symptom of ${e('<b>laryngitis</b>')}?`, ["hoarseness or loss of voice", "runny nose", "coughing blood", "chest pain"], "larynx = voice box; its inflammation takes away the voice."),
          T("The diaphragm is the main muscle of breathing.", true, "Correct; when it contracts the diaphragm moves down and draws air into the lungs."),
          B("In bronchitis, the root bronch/o means ___.", ["bronchus (main airway)", "windpipe", "voice box"], "bronch/o = bronchus."),
          W("Build the term that means “inflammation of the throat (pharynx)”", ['pharyng/o', '-itis'], ['laryng/o', 'rhin/o', '-algia'], 'pharyngitis.'),
          S("Spell the term for the windpipe", 'trachea', 'trache/o.', 'trach…'),
          N('f2t:sy')
        ]
      },
      {
        id: 'sy6', title: "The digestive system", icon: '🍽️', items: [
          L("The digestive tube", `The <b>digestive</b> (gastrointestinal, or <b>GI</b>) system is one long tube: mouth, oesophagus, stomach and intestines. The accessory organs: <b>the liver, gallbladder, pancreas and salivary glands</b>.${fig('sys-digestive', '', "mouth, pharynx, oesophagus, stomach, liver, small and large intestine, anus")}${tbl([["root", "organ"], [e("or/o, stomat/o"), "mouth"], [e('esophag/o'), "oesophagus"], [e('gastr/o'), "stomach"], [e('enter/o'), "intestine (especially the small intestine)"], [e('col/o'), "large intestine (colon)"], [e('hepat/o'), "liver"], [e('an/o'), "opening at the end of the digestive tract"]])}`),
          P("Match each root to its meaning", [['gastr/o', "stomach"], ['enter/o', "small intestine"], ['col/o', "large intestine"], ['hepat/o', "liver"], ['esophag/o', "oesophagus"]]),
          M("Which is an accessory organ of digestion, not part of the digestive tube?", ["liver", "oesophagus", "stomach", "small intestine"], "The liver, gallbladder, pancreas and salivary glands are accessory organs."),
          L("Common digestive terms", `• ${wb('gastr/o', 'enter/o', '-logy')} → <b>gastroenterology</b>: the study of the stomach and intestines<br>• ${wb('hepat/o', '-megaly')} → enlarged liver<br>• ${wb('gastr/o', '-itis')} → stomach inflammation${fig('abdomen-organs', '', "the abdominal organs from the front: liver, stomach, small and large intestine")}`),
          L("Case: coeliac disease", `A 23-year-old woman with bloating, abdominal pain, chronic diarrhoea and a <b>BMI</b> of 17.5 has been referred to a gastroenterologist. Tests show <b>coeliac disease</b> and anaemia. Treatment: a strict gluten-free diet (<b>GFD</b>) and a follow-up visit in 6 weeks.${pearl("In coeliac disease, gluten damages the small intestine (enter/o) and the absorption of iron and nutrients falls; that is why anaemia and weight loss go with it.")}`),
          M("In this case, GFD means…", ["gluten-free diet", "a digestive function test", "stomach reflux", "the genitourinary system"], 'gluten-free diet.', [["Patient", "23-year-old woman"], ["Complaint", "bloating, abdominal pain, chronic diarrhoea"], ['BMI', '17.5'], ["diagnosis", "coeliac disease and anaemia"]]),
          T("Gastroenterology is the study of the stomach and intestines.", true, 'gastr/o + enter/o + -logy.'),
          B("The abbreviation GI means ___.", ['gastrointestinal', 'genitourinary', 'gynecology'], 'GI = gastrointestinal.'),
          S("Spell the term for the food pipe from throat to stomach", 'esophagus', 'esophag/o.', 'esoph…'),
          L("Review of the “Circulation, breathing and digestion” level", recap(["Circulation: cardi/o heart • angi/o and vascul/o vessel • arteri/o artery (away from the heart) • ven/o and phleb/o vein (to the heart)", "Lymph: lymph/o lymph • lymphaden/o node • splen/o spleen • tonsill/o tonsil", "The path of air: <bdi dir=\"ltr\">rhin/o → pharyng/o → laryng/o → trache/o → bronch/o → pulmon/o</bdi>; pneum/o is also lung and phren/o the diaphragm", "Digestion: or/o mouth • esophag/o oesophagus • gastr/o stomach • enter/o intestine • col/o large intestine • hepat/o liver; GI"])),
          N('ab:sy')
        ]
      },

      /* ================= سطح ۳: دفع، کنترل و تخصص‌ها ================= */
      {
        id: 'sy7', title: "Urinary and reproductive", icon: '💧', items: [
          L("urinary system", `The <b>urinary</b> system (kidneys, ureters, bladder and urethra) filters waste out of the blood, keeps the water, salt and acid-base balance and helps control blood pressure.${fig('sys-urinary', '', "kidney, ureter, bladder and urethra")}${tbl([["root", "organ"], [e("nephr/o, ren/o"), "kidney"], [e('ureter/o'), "ureter"], [e('cyst/o'), "bladder"], [e('urethr/o'), "urethra"], [e('ur/o'), "urine, urinary system"]])}The study of kidney diseases is <b>nephrology</b>, and of urinary-tract diseases <b>urology</b>.`),
          P("Match each root to its meaning", [["nephr/o, ren/o", "kidney"], ['ureter/o', "ureter"], ['cyst/o', "bladder"], ['urethr/o', "urethra"]]),
          L("Ureter or urethra?", `${vs(['ureter', "two tubes: from kidney to bladder"], ['urethra', "one tube: from the bladder to the outside"])}${memo("ureter has two e’s and there are two of them (one per kidney); the urethra is single and goes to the outside.")}`),
          M("What is the tube that carries urine from the kidney to the bladder?", ['ureter', 'urethra', 'meatus', 'nephron'], "the ureter; the urethra runs from the bladder to the outside."),
          L("The reproductive system", `• The female reproductive system makes eggs, provides a place for the baby to grow and nourishes the newborn<br>• The male reproductive system makes sperm<br>The urinary and genital systems together are also called <b>genitourinary (GU)</b>.${pearl("The specialist in urinary-tract diseases is a urologist, and the women’s health specialist a gynecologist (gynec/o = woman).")}`),
          T("The kidneys also help control blood pressure.", true, "Correct; by regulating water and salt and secreting hormones."),
          B("The study of kidney diseases is called ___.", ['nephrology', 'neurology', 'urology'], "nephr/o + -logy; urology covers urinary-tract diseases."),
          M("The abbreviation GU means…", ['genitourinary', 'gastrointestinal', 'gynecology', 'gluteal'], "genitourinary = urinary and genital."),
          W("Build the term that means “inflammation of the bladder”", ['cyst/o', '-itis'], ['nephr/o', '-oma', 'ur/o'], 'cystitis.'),
          N('d2t:sy')
        ]
      },
      {
        id: 'sy8', title: "endocrine glands", icon: '🧪', items: [
          L("Messaging with hormones", `The <b>endocrine</b> system (${e('endo-')} = within + ${e('crin/o')} = secrete) is made of <b>ductless glands</b> that release hormones straight into the <b>blood</b> and regulate the body’s metabolic activities.${vs(['endocrine', "ductless; hormones into the blood"], ['exocrine', "with ducts; secretion to the outside or into a tube (like sweat and salivary glands)"])}`),
          M("What is characteristic of endocrine glands?", ["they have no ducts and release hormones into the blood", "their secretion goes through a duct to the skin", "they are only in the brain", "they make digestive enzymes"], "endo- = within."),
          L("Key glands", `${tbl([["root", "gland"], [e('thyroid/o'), "thyroid (neck)"], [e('adren/o'), "adrenal"], [e('pituitar/o'), "pituitary (below the brain)"], [e('aden/o'), "gland (general)"]])}The endocrine specialist: an <b>endocrinologist</b>.${memo("crin means secrete: endocrine “secreting within” and exocrine “secreting out”; like a sprinkler (exo) versus an IV drip (endo)!")}`),
          P("Match each term to its meaning", [['endocrine', "secreting into the blood"], ['exocrine', "secreting through a duct"], ['aden/o', "gland"], ['crin/o', "to secrete"]]),
          T("Sweat glands are an example of endocrine glands.", false, "False; sweat glands have ducts and are exocrine."),
          L("Zakaria’s chart again", `Zakaria thought his thyroid was underactive because he was tired. His thyroid tests were normal. An underactive thyroid (hypothyroidism) really does cause tiredness, weight gain and constipation, so it wasn’t a bad thought!${pearl("hypo- (low) + thyroid + -ism: “a state of low thyroid”. Hyperthyroidism is the opposite: palpitations, weight loss and feeling hot.")}`),
          B("The endocrine specialist is an ___.", ['endocrinologist', 'dermatologist', 'cardiologist'], 'endocrin/o + -logist.'),
          M(`${e('<b>hyperthyroidism</b>')} means…`, ["overactive thyroid", "underactive thyroid", "removal of the thyroid", "thyroid tumour"], "hyper- = excessive."),
          S("Spell the adjective for the ductless, hormone-secreting glands", 'endocrine', 'endo- + crin/o.', 'endo…'),
          N('sp:sy')
        ]
      },
      {
        id: 'sy9', title: "Which specialist?", icon: '👩‍⚕️', items: [
          L("Every system, a specialty", `${tbl([["Specialty", "System or organ"], ['dermatology', "skin"], ['orthopedics', "bones and joints"], ['cardiology', "heart"], ['hematology', "blood"], ['otorhinolaryngology (ENT)', "ear, nose, throat"], ['gastroenterology', "digestion"], ['nephrology / urology', "kidney / urinary tract"], ['gynecology', "female reproductive system"], ['endocrinology', "glands"], ['neurology', "nervous system"]])}`),
          L("The longest name", `${wb('ot/o', 'rhin/o', 'laryng/o', '-logy')}<br><b>otorhinolaryngology</b> = ear + nose + larynx + study of; the same as <b>ENT</b>.${memo("Read it from the outside of the head inward: oto (ear), rhino (nose), laryngo (voice box). A short trip around the head!")}`),
          P("Refer each patient to the right specialist", [["John: finding it hard to hear quiet sounds", 'otorhinolaryngology'], ["Ruth: a racing, pounding heart", 'cardiology'], ["José: a broken wrist after a fall", 'orthopedics'], ["Marta: a persistent skin rash", 'dermatology'], ["Mr Sparks: a stomach ulcer", 'gastroenterology']]),
          M("Mrs Cortez’s daughter has had repeated bladder infections. Which specialist should she be referred to?", ['urology', 'nephrology', 'neurology', 'hematology'], "urology = the urinary tract and bladder."),
          M("Marianne complains of heavy uterine bleeding. Which specialty?", ['gynecology', 'hematology', 'urology', 'gastroenterology'], "gynec/o = woman; diseases of the female reproductive system."),
          L("The specialists’ tools", `${fig('endoscopy', '', "endoscopy: a fibre-optic tube for looking inside an organ and taking samples (biopsy)")}The gastroenterologist looks inside the stomach and intestines with <b>endoscopy</b> (${e('endo-')} = within + ${e('-scopy')} = viewing).${pearl("The registered dietitian nutritionist (RDN) plays a key role in the care team for diseases such as coeliac disease.")}`),
          T("Endoscopy means looking inside the body with a tube carrying a camera or optical fibres.", true, 'endo- + -scopy.'),
          B("The abbreviation ENT is the same specialty as ___.", ['otorhinolaryngology', 'endocrinology', 'neurology'], 'ear, nose and throat.'),
          S("Spell the term for the study of the skin", 'dermatology', 'dermat/o + -logy.', 'derma…'),
          L("Review of the “Excretion, control and specialties” level", recap(["Urinary: nephr/o and ren/o kidney • ureter/o ureter (kidney to bladder) • cyst/o bladder • urethr/o urethra (bladder to outside); GU", "Glands: endocrine ductless, hormones into the blood • exocrine with ducts; hypo- underactive and hyper- overactive", "Specialties: dermatology, orthopedics, cardiology, neurology, gastroenterology, nephrology, urology, gynecology, endocrinology", "ENT = otorhinolaryngology: ear + nose + larynx"])),
          N('t2f:sy')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* پیکر — دنیای ۵: جهت‌ها، صفحه‌ها و وضعیت‌ها
 * وضعیت آناتومیک، جفت‌های جهت، صفحه‌های بدن، حرکت‌ها، وضعیت‌های بیمار و روش‌های تصویربرداری.
 * منابع: Body Structure، Body Organization، The Human Body An Orientation، Organization of the Body و An Org Chart to Live By. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'dr', sym: 'Dir', name: "Direction, Plane and Position", short: "Direction", sub: "Anatomic position, paired directions, body planes, movements, patient positions and imaging",
    color: '#1899D6', dark: '#1272A3', light: '#DDF1FB',
    levels: ["Anatomic position and directions", "Planes and movement", "Patient position and imaging"],
    gens: EA.genIds('dr'),
    lessons: [
      /* ================= سطح ۱: وضعیت آناتومیک و جهت‌ها ================= */
      {
        id: 'dr1', title: "anatomic position", icon: '🧍', items: [
          L("The zero point of all directions", `Every direction on the body is given from the <b>anatomical position</b>:<br>• standing straight (<b>erect</b>), facing forward<br>• arms at the sides, <b>palms facing forward</b><br>• feet parallel, flat on the floor and toes pointing forward${fig('anat-position', '', "anatomical position: palms facing forward")}`),
          M("In anatomical position, which way do the palms face?", ["forward", "backward", "toward the body", "downward"], "The palms face forward, so the thumb is on the outside (lateral)."),
          L("Whose left and right?", `“Right” and “left” always mean <b>the patient’s own right and left</b>, not those of the person looking. When you stand facing a patient, their right side is opposite your left hand!${fig('directions-photo', '', "front and side views; Right and Left under the feet are from the person’s own point of view.")}${memo("Always put yourself in the patient’s place: “If I were standing there, where would my right hand be?”")}`),
          T("In a front view, the patient’s right side appears on the viewer’s right.", false, "False; the patient’s right side is on the viewer’s left."),
          P("Complete each part of the anatomical position", [["body", "standing straight"], ["palms", "forward"], ["arms", "at the sides"], ["feet", "parallel and facing forward"]]),
          B("In anatomical position, the body is ___.", ["erect (standing)", "supine (lying face up)", "prone (lying face down)"], "erect = upright and standing."),
          M("Why does everyone use one reference position?", ["so the location of every part is described the same way, whatever the patient’s pose", "because patients are always examined standing", "to measure height", "for better photos"], "Anatomical position is a “shared language”, even when the patient is lying down."),
          L("Why does it matter?", `${fig('positional', '', "midline, medial, lateral, proximal, distal, superior and inferior on the body")}${pearl("An injury report says: “a 3 cm wound on the anterior surface of the left forearm”. Every nurse and physician knows exactly where it is without seeing the patient.")}`),
          S("Spell the adjective in “___ position”, the standard upright reference stance", 'anatomical', 'anatomical position.', 'anato…'),
          N('t2f:dr')
        ]
      },
      {
        id: 'dr2', title: "Up, down, front, back", icon: '↕️', items: [
          L("The up-down axis", `${fig('dir-man')}${tbl([["Term", "Meaning", "Synonym"], ['superior', "higher, toward the head", "cephalic, cranial"], ['inferior', "lower, away from the head", 'caudal'], ['anterior', "the front of the body", 'ventral'], ['posterior', "back of the body", 'dorsal']])}`),
          M("How is the heart positioned relative to the stomach?", ['superior', 'inferior', 'posterior', 'distal'], "The heart is higher than the stomach."),
          L("Roots hold the secret of directions", `${wb('anter/o', '-ior')} → front • ${wb('poster/o', '-ior')} → back<br>${wb('ventr/o', '-al')} → belly side • ${wb('dors/o', '-al')} → back side<br>${wb('cephal/o', '-ic')} → head • ${wb('caud/o', '-al')} → tail${memo("Remember dorsal through the dolphin’s dorsal fin on its back; ventral is the belly side.")}`),
          P("Match each term to its synonym", [['anterior', 'ventral'], ['posterior', 'dorsal'], ['superior', 'cephalic'], ['inferior', 'caudal']]),
          M("In a side view, how is the breastbone positioned relative to the spine?", ['anterior', 'posterior', 'inferior', 'lateral'], "The breastbone is at the front of the body.", null, F('directions')),
          T("caudal means “toward the head”.", false, "False; caudal means toward the tail (downward). Toward the head is cephalic or cranial."),
          B("The navel is on the ___ surface of the body.", ['anterior (ventral)', 'posterior (dorsal)', 'lateral'], "The navel is on the front of the abdomen."),
          W("Build the term that means “pertaining to the back of the body”", ['dors/o', '-al'], ['ventr/o', 'cephal/o', '-ad'], 'dorsal.'),
          S("Spell the term for “toward the back of the body”", 'posterior', 'poster/o + -ior.', 'poste…'),
          N('m2r:dr')
        ]
      },
      {
        id: 'dr3', title: "Middle, side, near, far", icon: '↔️', items: [
          L("The middle-side axis", `${tbl([["Term", "Meaning", "Example"], ['medial', "nearer the midline", "the nose relative to the eyes"], ['lateral', "away from the midline, toward the side", "the ears relative to the nose"], ['proximal', "nearer where a limb attaches to the trunk", "the elbow relative to the wrist"], ['distal', "farther from the point of attachment", "the fingers relative to the wrist"]])}${fig('dir-pairs', '', "Six opposite direction pairs")}`),
          M("How is the wrist positioned relative to the elbow?", ['distal', 'proximal', 'medial', 'superior'], "The wrist is farther from where the arm attaches to the trunk."),
          L("Superficial or deep?", `${vs(['superficial', "near the body surface: the skin"], ['deep', "away from the surface: the bone"])}${vs(['ipsilateral', "on the same side of the body"], ['contralateral', "on the opposite side"])}${fig('deep-superficial', '', "C: superficial and deep in a cross-section • D: supine • E: prone • F: top of the foot (dorsum) and sole (plantar)")}`),
          P("Complete each pair", [['medial', 'lateral'], ['proximal', 'distal'], ['superficial', 'deep'], ['ipsilateral', 'contralateral']]),
          L("proximal and distal only for the limbs", `These two words are used for the <b>limbs</b> (arms and legs) or along a structure (such as the intestine); for the trunk use superior/inferior.${memo("Remember proximal through “proximity” (nearness) and distal through “distance”.")}${pearl("A stroke in the left hemisphere causes weakness on the contralateral (right) side of the body, because the nerve pathways cross over.")}`),
          T("In anatomical position, the thumb is on the lateral side of the hand.", true, "Correct; because the palm faces forward, the thumb is on the outside."),
          B("The skin is ___ to the muscle.", ['superficial', 'deep', 'distal'], "The skin is closer to the surface."),
          M("Brain damage on the right side causes weakness on which side of the body?", ["contralateral (left)", "ipsilateral (right)", "both sides", "neither"], "The motor pathways cross over in the brainstem."),
          S("Spell the term for “toward the side”", 'lateral', 'later/o + -al.', 'late…'),
          L("Review of the “Anatomic position and directions” level", recap(["Anatomical position: standing, facing forward, palms forward; left and right always belong to the patient", 'superior (cephalic) ↔ inferior (caudal) • anterior (ventral) ↔ posterior (dorsal)', "medial ↔ lateral • proximal ↔ distal (limbs only) • superficial ↔ deep", "ipsilateral same side • contralateral opposite side"])),
          N('f2t:dr')
        ]
      },

      /* ================= سطح ۲: صفحه‌ها و حرکت ================= */
      {
        id: 'dr4', title: "Body planes", icon: '🔪', items: [
          L("Three imaginary cuts", `Planes are flat surfaces that cut through the body or an organ:${fig('planes3')}${tbl([["Plane", "Divides the body into"], ['sagittal', "right and left"], ['midsagittal (median)', "two equal right and left halves"], ['frontal (coronal)', "front and back"], ['transverse (horizontal)', "upper and lower"]])}`),
          M("Which plane divides the body into two equal right and left halves?", ['midsagittal', 'frontal', 'transverse', 'coronal'], "The midsagittal (median) plane passes exactly through the midline."),
          L("Planes on the body", `${fig(['planes-mannequin', 'planes-swim'], ["frontal, sagittal and transverse", "the three planes together"])}${memo("sagittal comes from sagitta (arrow): an arrow piercing from front to back splits the body into left and right. coronal comes from corona (crown): the crown line that sits over the head from ear to ear.")}`),
          P("Match each plane to the division it makes", [['sagittal', "right and left"], ['frontal', "front and back"], ['transverse', "upper and lower"]]),
          M("In this picture, which plane is the horizontal orange one?", ['transverse', 'midsagittal', 'frontal', 'coronal'], 'transverse (horizontal plane).', null, F('planes')),
          T("frontal and coronal are two names for the same plane.", true, "Correct; both divide the body into front and back."),
          L("Slices in imaging", `In CT and MRI, images are taken as “slices” in these same planes: <b>axial</b> slices are the transverse ones.${pearl("A radiologist writes: “sagittal MRI of the lumbar spine”, meaning left-right slices of the lower spine; the best view for the discs between the vertebrae.")}`),
          B("The ___ plane divides the body into upper and lower parts.", ['transverse', 'sagittal', 'coronal'], 'transverse (horizontal).'),
          S("Spell the plane that divides the body into right and left", 'sagittal', "sagitt/o = arrow; it has two t’s.", 'sagi…'),
          N('r2m:dr')
        ]
      },
      {
        id: 'dr5', title: "Body movements", icon: '🤸', items: [
          L("Bending and straightening", `${fig('movements')}${vs(['flexion', "bending a joint; the angle between the bones decreases"], ['extension', "straightening a joint; the angle increases"])}When the biceps contracts, the elbow goes into flexion.`),
          M("When you bend your elbow until your hand reaches your shoulder, what movement is it?", ['flexion', 'extension', 'abduction', 'adduction'], "Bending a joint and decreasing the angle = flexion.", null, F('biceps')),
          L("Moving away and toward", `${vs(['abduction', "ab- (away from): moving away from the midline"], ['adduction', "ad- (toward): moving toward the midline"])}${memo("abduction as in “abduct”: someone is taken away! adduction means “adding” the limb back to the body.")}`),
          P("Match each movement to its description", [['flexion', "decreasing the joint angle"], ['extension', "increasing the joint angle"], ['abduction', "moving away from the midline"], ['adduction', "moving toward the midline"]]),
          T("Raising the arm from the side of the body to the horizontal is abduction.", true, "The arm moves away from the midline."),
          B("The prefix ab- in abduction means ___.", ["away from", "toward", "again"], "ab- = away from; ad- = toward."),
          M("Bringing the raised arm back to the side of the body is which movement?", ['adduction', 'abduction', 'flexion', 'extension'], "Moving toward the midline."),
          L("At the bedside", `${pearl("The range of motion of every joint is recorded with these words: “shoulder abduction limited to 90°” means the arm can only be raised away to 90 degrees.")}In exercise too: pushing up in a press-up is elbow extension and lowering down is flexion.`),
          S("Spell the term for “moving away from the midline”", 'abduction', "ab- + duct (to lead).", 'abdu…'),
          N('sp:dr')
        ]
      },
      {
        id: 'dr6', title: "Combined directions", icon: '🧭', items: [
          L("Two directions in one word", `Sometimes we join two direction roots with an o to say “from … to …”:${tbl([["Term", "Meaning"], ['anteroposterior (AP)', "from front to back"], ['posteroanterior (PA)', "from back to front"], ['mediolateral', "from the middle to the side"], ['lateromedial', "from the side to the middle"], ['superolateral', "upward and toward the side"]])}${memo("The order of the roots is the order of travel: the first is “from”, the second “to”. Like a travel address!")}`),
          M("In a PA chest X-ray, where does the beam enter the body?", ["from the back (posterior)", "from the front (anterior)", "from the side", "from above"], "posteroanterior = from back to front."),
          P("Match each abbreviation to its meaning", [['AP', "from front to back"], ['PA', "from back to front"], ['lat', "lateral (side view)"], ['ant', "front"]]),
          L("Back and palm of the hand and foot", `• <b>dorsum</b>: the back of the hand or top of the foot<br>• <b>plantar</b>: the sole of the foot (${e('plant/o')})<br>• <b>palmar</b>: the palm of the hand (${e('palm/o')})${pearl("The standard chest X-ray is PA: the patient faces the film and the beam comes from behind, so the heart is close to the film and doesn’t look bigger than it is.")}`),
          T("plantar refers to the sole of the foot.", true, "plant/o = sole of the foot; plantar fasciitis = inflammation of the sole’s fascia."),
          B("The term mediolateral means from the ___ to the side.", ["middle", "front", "up"], 'medi/o + later/o + -al.'),
          M(`Where is the ${e('<b>dorsum</b>')} of the foot?`, ["the top of the foot (upper surface)", "sole of the foot", "the heel", "the big toe"], "dorsum = back; on the foot it means the upper surface.", null, F('deep-superficial')),
          W("Build the term that means “from front to back”", ['anter/o', 'poster/o', '-ior'], ['medi/o', 'later/o', '-ad'], 'anteroposterior.'),
          S("Spell the term for “from front to back”", 'anteroposterior', 'anter/o + poster/o + -ior.', 'antero…'),
          L("Review of the “Planes and movement” level", recap(["Planes: sagittal right and left (midsagittal two equal halves) • frontal or coronal front and back • transverse or axial upper and lower", "Movements: flexion angle decreases ↔ extension angle increases • abduction away from the midline ↔ adduction toward the midline", "Combined direction: first root “from”, second “to”: anteroposterior (AP), posteroanterior (PA), mediolateral", "dorsum back of the hand or top of the foot • palmar palm • plantar sole"])),
          N('ab:dr')
        ]
      },

      /* ================= سطح ۳: وضعیت بیمار و تصویربرداری ================= */
      {
        id: 'dr7', title: "Patient positions", icon: '🛏️', items: [
          L("Supine or prone?", `${fig(['supine', 'prone'], ["supine: lying face up", "prone: lying face down"])}${vs(['supine', "lying on the back, face up"], ['prone', "lying on the abdomen, face down"])}${memo("Remember supine as “spine on the bed”; and when supine you can hold a bowl of “soup” on your belly!")}`),
          M("The patient is lying on the abdomen. The position is…", ['prone', 'supine', 'Fowler', 'lithotomy'], "prone = lying face down.", null, F('prone')),
          L("Examination positions", `${fig('bedside')}${fig('positions', '', "knee-chest, lithotomy, dorsal recumbent, Sims, prone, Fowler and supine")}${tbl([["Position", "Use"], ['supine', "examining the chest, heart, abdomen and reflexes"], ['prone', "examining the back and spine"], ['Fowler', "half sitting; difficult breathing"], ['Sims', "on the left side; rectal examination, enema"], ['lithotomy', "feet in stirrups; pelvic examination and Pap smear"], ['knee-chest (genupectoral)', "rectal examination"], ['Trendelenburg', "head lower than the feet; postural drainage"]])}`),
          P("Match each position to its use", [['Fowler', "the patient is short of breath"], ['lithotomy', "Pap smear"], ['Sims', "enema"], ['prone', "examining the spine"], ['Trendelenburg', "postural drainage"]]),
          M("The patient is short of breath. The nurse raises the head of the bed. Which position is this?", ['Fowler', 'Trendelenburg', 'prone', 'Sims'], "Fowler makes it easier for the lungs to expand."),
          T("genupectoral is the same as the knee-chest position.", true, "genu (knee) + pector (chest)."),
          L("Where do the names come from?", `• <b>Fowler, Sims, Trendelenburg</b>: the names of the physicians who introduced these positions<br>• <b>lithotomy</b>: lith/o (stone) + -tomy, because it was once used for removing bladder stones<br>• <b>recumbent</b>: lying down${pearl("In the Trendelenburg position the head is down so that lung secretions drain by gravity (postural drainage).")}`),
          B("lithotomy originally means “an incision to remove a ___”.", ["stone", "baby", "tumour"], "lith/o = stone."),
          S("Spell the term for lying face up", 'supine', 'supine.', 'sup…'),
          N('d2t:dr')
        ]
      },
      {
        id: 'dr8', title: "Imaging", icon: '🩻', items: [
          L("Seeing inside the body", `${fig('modalities')}${tbl([["Method", "What does it use?"], ['radiography (X-ray)', "X-rays"], ['CT (computed tomography)', "X-rays + a computer; cross-sectional slices"], ['MRI', "a magnetic field and radio waves; no radiation"], ['ultrasonography (US)', "high-frequency sound waves"], ['PET / SPECT / nuclear scan', "a radioactive drug (radiopharmaceutical)"], ['fluoroscopy', "continuous X-rays; a live image"]])}`),
          M("Which method uses no ionising radiation at all?", ['MRI', 'CT', 'radiography', 'fluoroscopy'], "MRI uses a magnet and radio waves; ultrasound is also radiation-free."),
          L("Roots hold the secret of the methods’ names", `• ${wb('tom/o', '-graphy')} → recording slices<br>• ${wb('son/o', '-graphy')} → recording with sound (ultra- = beyond)<br>• ${wb('fluor/o', '-scopy')} → viewing with a glow<br>• ${wb('radi/o', '-graphy')} → recording with radiation${fig('imaging', '', "A: chest radiograph • B: Doppler ultrasound • C: nuclear scan • D and E: MRI • F: PET")}`),
          P("Match each method to its tool", [['ultrasonography', "sound waves"], ['MRI', "magnet"], ['CT', "X-rays and a computer"], ['PET', "radioactive drug for scans"]]),
          M("Which image in this set is a Doppler ultrasound?", ["B (with blue colours)", "A (black-and-white chest)", "E (side view of the head)", "F (yellow and red colours)"], "Doppler ultrasound shows blood flow in colour.", null, F('imaging')),
          T("Fluoroscopy gives a live, moving X-ray image.", true, "Correct; for example during a barium swallow."),
          B("The abbreviation CXR means a ___ radiograph.", ["the chest", "skull", "abdomen"], 'chest x-ray.'),
          M("What is the radioactive substance that goes to a target organ and shows up on a nuclear scan called?", ['radiopharmaceutical', 'contrast', 'enzyme', 'hormone'], "radi/o + pharmaceutical (drug)."),
          S("Spell the term for “imaging with sound waves”", 'ultrasonography', 'ultra- + son/o + -graphy.', 'ultra…'),
          N('wb:dr')
        ]
      },
      {
        id: 'dr9', title: "Case: Katie’s appendix", icon: '🏥', items: [
          L("Katie Riley in the operating room", `Katie goes to the operating room for an <b>appendectomy</b> (removal of the appendix). She is placed <b>supine</b>. The surgeon enters the <b>abdominopelvic cavity</b> through an incision in the connective tissue and removes the appendix from the <b>RLQ</b>. Katie has pain for a few days and can’t sleep <b>prone</b> for about three weeks.`),
          M("What position is Katie in during surgery?", ["supine: lying face up", "prone: lying face down", 'Sims', 'lithotomy'], "For abdominal surgery the patient lies supine.", [["Patient", "Katie Riley"], ["Operation", 'appendectomy'], ["Site", 'RLQ'], ["Position", 'supine']]),
          M("Why can’t Katie sleep prone for a few weeks?", ["because prone means lying on the abdomen, where the surgical wound is", "because prone means sitting", "because the appendix is at the back of the body", "because prone is the surgical position"], "prone = lying face down; pressure on the abdominal incision."),
          L("Describe the site of the incision", `The appendix is in the right lower quadrant: <b>inferior</b> to the navel and <b>lateral</b> on the right side. The surgeon’s incision is on the <b>anterior</b> surface of the abdomen and goes from the <b>superficial</b> layers (skin) to the <b>deep</b> layers (peritoneum).${fig('supine', '', "the supine position")}${pearl("Appendicitis pain often starts around the navel (umbilical) and then moves to the RLQ; an important diagnostic clue.")}`),
          O("Put the layers the surgeon passes through in order from superficial to deep", ["skin", "subcutaneous fat", "abdominal muscle", "peritoneum"], "From superficial to deep."),
          T("appendectomy means inflammation of the appendix.", false, "False; -ectomy is removal. Inflammation is appendicitis."),
          P("Match each chart term to its meaning", [['appendectomy', "removal of the appendix"], ['supine', "lying face up"], ['prone', "lying face down"], ['RLQ', "right lower quadrant"]]),
          B("An abdominal surgical incision is on the ___ surface of the body.", ['anterior', 'posterior', 'lateral'], "The abdomen is at the front of the body."),
          S("Spell the term for “removal of the appendix”", 'appendectomy', 'append/o + -ectomy.', 'append…'),
          L("Review of the “Patient position and imaging” level", recap(["supine lying face up • prone lying face down • Fowler half sitting • Trendelenburg head down • Sims on the left side • lithotomy feet in stirrups", "Imaging: radiography and CT with X-rays • MRI magnet, no radiation • ultrasonography sound • PET radioactive drug • fluoroscopy live image", "-graphy recording • -scopy viewing • tom/o slice • son/o sound", "In a chart, the location of everything is written with these words: RLQ, inferior, lateral and from superficial to deep"])),
          N('t2f:dr')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* پیکر — دنیای ۶: حفره‌ها و نواحی بدن
 * حفره‌های پشتی و جلویی، قفسه سینه و شکم-لگن، نه ناحیه و چهار ربع شکم، ستون مهره‌ها و نواحی سطحی بدن.
 * منابع: An Org Chart to Live By، Body Organization، Body Structure، Organization of the Body، The Human Body An Orientation. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'cv', sym: 'Cav', name: "Cavities and Regions", short: "Cavities", sub: "The dorsal and ventral cavities, the diaphragm, the nine regions and four quadrants of the abdomen, the spine and the surface regions of the body",
    color: '#7B5CE0', dark: '#5B3FBF', light: '#EDE7FC',
    levels: ["Body cavities", "The map of the abdomen", "The spine and surface regions"],
    gens: EA.genIds('cv'),
    lessons: [
      /* ================= سطح ۱: حفره‌های بدن ================= */
      {
        id: 'cv1', title: "Two large cavities", icon: '🏺', items: [
          L("The dorsal and ventral cavities", `The body has two main cavities that hold the internal organs (viscera):${fig('cavities')}${tbl([["hollow space in the body", "Parts", "Contents"], ['dorsal (posterior)', 'cranial + spinal (vertebral)', "the brain and spinal cord"], ['ventral (anterior)', 'thoracic + abdominopelvic', "the heart, lungs, and digestive, urinary and reproductive organs"]])}`),
          M("Which cavity is the brain in?", ['cranial', 'thoracic', 'spinal', 'pelvic'], "crani/o = skull; the cranial cavity is part of the dorsal cavity."),
          L("The same cavities in the standard reference", `${fig(['cavities-line', 'cavities-views'], ["the dorsal and ventral cavities in a side view", "side and front views"])}${memo("The dorsal cavity has two C/S parts: Cranial and Spinal, like “CS” for Central System (the central nervous system)!")}`),
          P("Match each cavity to its contents", [['cranial', "brain"], ['spinal', "spinal cord"], ['thoracic', "heart and lungs"], ['abdominal', "stomach, liver, intestines"], ['pelvic', "bladder and reproductive organs"]]),
          T("The spinal cavity is part of the ventral cavity.", false, "False; the cranial and spinal cavities are dorsal."),
          B("Together, the internal organs of the cavities are called the ___.", ['viscera', 'strata', 'ventricles'], "viscera (singular viscus) = internal organs."),
          M("Into which two parts is the ventral cavity divided?", ["thoracic and abdominopelvic", "cranial and spinal", "pleural and pericardial", "abdominal and spinal"], "The diaphragm separates them."),
          W("Build the term that means “pertaining to the skull”", ['crani/o', '-al'], ['spin/o', 'thorac/o', '-ic'], 'cranial.'),
          S("Spell the term for the internal organs (plural)", 'viscera', "viscera; singular viscus.", 'visc…'),
          N('t2f:cv')
        ]
      },
      {
        id: 'cv2', title: "the chest", icon: '🫁', items: [
          L("Inside the chest cavity", `The <b>thoracic cavity</b> (${e('thorac/o')} = chest) holds the lungs, heart, aorta, oesophagus and trachea, and has three parts:<br>• two <b>pleural cavities</b>: around each lung<br>• the <b>mediastinum</b>: between the two lungs, between the breastbone in front and the spine behind<br>• the <b>pericardial cavity</b>: around the heart, inside the mediastinum${fig('cavities-anterior', '', "the right and left pleural cavities, the mediastinum and the pericardial cavity; below them the diaphragm and the abdominopelvic cavity")}`),
          M("What is the space between the two lungs that holds the heart called?", ['mediastinum', 'pleural cavity', 'peritoneal cavity', 'diaphragm'], "mediastinum = the middle of the chest."),
          L("The mediastinum: the middle corridor", `The mediastinum is a mass of tissues and organs that separates the breastbone in front from the spine behind, and holds the heart and great vessels, the oesophagus, trachea and thymus.${memo("mediastinum = medi (middle) + stinum: the “middle corridor” of the chest, between the two big rooms of the lungs.")}${pearl("On a chest X-ray, a “widened mediastinum” (a broader middle shadow) can be a sign of a torn aorta after a crash.")}`),
          P("Match each part to its contents", [['pleural cavity', "lung"], ['pericardial cavity', "heart"], ['mediastinum', "heart, oesophagus, trachea and great vessels"]]),
          T("The lungs lie in the pleural cavities.", true, "pleur/o = pleura; each lung has its own pleural cavity."),
          B("The ___ cavity surrounds the heart.", ['pericardial', 'pleural', 'peritoneal'], "peri- (around) + cardi/o (heart)."),
          M("Which organ is not in the mediastinum?", ["liver", "heart", "oesophagus", "windpipe"], "The liver is in the abdominal cavity, below the diaphragm."),
          W("Build the term that means “around the heart”", ['peri-', 'cardi/o', '-al'], ['pleur/o', 'endo-', 'thorac/o'], 'pericardial.'),
          S("Spell the term for the space between the lungs that holds the heart", 'mediastinum', 'mediastinum.', 'medias…'),
          N('m2r:cv')
        ]
      },
      {
        id: 'cv3', title: "The diaphragm and the abdominopelvic cavity", icon: '⛺', items: [
          L("The wall between two floors", `The <b>diaphragm</b> is a dome-shaped muscle that separates the chest cavity from the abdominal cavity and is the main muscle of <b>breathing</b>. ${e('phren/o')} = diaphragm.${fig(['cavities-lateral', 'cavities-side'], ["the dorsal and ventral cavities", "the diaphragm between chest and abdomen"])}`),
          L("Abdomen and pelvis without a wall", `There is <b>no wall</b> between the abdominal and pelvic cavities, so together they are called the <b>abdominopelvic cavity</b>.${tbl([["hollow space in the body", "Contents"], ['abdominal', "liver, gallbladder, spleen, stomach, pancreas, intestines and kidneys"], ['pelvic', "bladder, reproductive organs and part of the intestine"]])}${memo("The diaphragm is like a “tent roof”: domed, above the abdomen and below the lungs. When it contracts it flattens and moves down, and air comes into the lungs.")}`),
          M("Which structure separates the chest from the abdomen?", ['diaphragm', 'peritoneum', 'mediastinum', 'pleura'], "The diaphragm.", null, F('cavities-side')),
          T("There is a muscular wall between the abdominal and pelvic cavities.", false, "False; together they are the abdominopelvic cavity."),
          P("Match each organ to its cavity", [["lung", 'thoracic'], ["liver", 'abdominal'], ["bladder", 'pelvic'], ["brain", 'cranial'], ["spinal cord", 'spinal']]),
          L("The peritoneum and behind it", `The abdominopelvic cavity is lined by the <b>peritoneum</b>; the space inside it is the <b>peritoneal cavity</b>. The <b>kidneys</b> are outside and behind this sac (retroperitoneal).${fig('cavities-sagittal', '', "sagittal section: the dorsal (cranial and spinal) and ventral (thoracic, abdominal and pelvic) cavities")}${pearl("A hiccup is a sudden, involuntary contraction of the diaphragm; the phrenic nerve gives the command.")}`),
          B("The nerve that controls the diaphragm is the ___ nerve.", ['phrenic', 'cranial', 'lumbar'], "phren/o = diaphragm."),
          M("Which abdominal organ is behind the peritoneum?", ["kidney", "stomach", "liver", "spleen"], 'retroperitoneal.'),
          S("Spell the term for the dome-shaped main muscle of breathing", 'diaphragm', "diaphragm; the g is silent.", 'diaph…'),
          L("Review of the “Body cavities” level", recap(["dorsal: cranial (brain) + spinal (spinal cord) • ventral: thoracic + abdominopelvic", "Chest: two pleural cavities around the lungs • the mediastinum in the middle • the pericardial cavity around the heart", "The diaphragm (phren/o) separates the chest from the abdomen and is the main muscle of breathing", "The abdomen and pelvis have no wall between them (abdominopelvic); the peritoneum lines it and the kidneys are retroperitoneal"])),
          N('f2t:cv')
        ]
      },

      /* ================= سطح ۲: نقشه شکم ================= */
      {
        id: 'cv4', title: "Nine regions", icon: '#️⃣', items: [
          L("A 3 × 3 grid on the abdomen", `To say exactly where a pain or organ is, the abdomen from the diaphragm to the groin is divided into <b>nine regions</b>:${fig('regions9')}`),
          L("What the names mean", `• <b>hypochondriac</b>: hypo (below) + chondr (rib cartilage)<br>• <b>epigastric</b>: epi (above) + gastr (stomach)<br>• <b>lumbar</b>: lumb/o = loin<br>• <b>umbilical</b>: umbilic/o = navel<br>• <b>inguinal (iliac)</b>: inguin/o = groin; ili/o = hip bone<br>• <b>hypogastric</b>: hypo (below) + gastr (stomach)${fig(['regions-photo', 'regions-nine'], ["the nine regions on the body", "the nine regions over the organs"])}`),
          M("Which is the middle region of the abdomen, where the navel is?", ['umbilical', 'epigastric', 'hypogastric', 'lumbar'], "umbilic/o = navel."),
          M("In this figure, which is region number 2?", ['epigastric', 'umbilical', 'right hypochondriac', 'hypogastric'], "Top row: 1 right hypochondriac, 2 epigastric, 3 left hypochondriac. The numbers are from the viewer’s side; region 1 is on the patient’s right.", null, F('regions-quiz')),
          P("Match each region to the meaning of its name", [['epigastric', "above the stomach"], ['hypogastric', "below the stomach"], ['hypochondriac', "below the rib cartilages"], ['lumbar', "lower back"], ['inguinal', "groin"]]),
          T("The hypochondriac regions lie below the cartilages of the lower ribs.", true, "hypo- (below) + chondr/o (cartilage)."),
          L("The middle column", `${memo("Read the middle column from top to bottom: epigastric, umbilical, hypogastric. The sides from the top: hypochondriac, lumbar, inguinal; “ribs, loins, groin”.")}${fig('regions-bones', '', "the nine regions over the ribs, organs and pelvis")}`),
          B("The lower middle region of the abdomen, above the bladder, is the ___ region.", ['hypogastric', 'epigastric', 'umbilical'], "hypo- (below) + gastr/o."),
          W("Build the term that means “below the (rib) cartilage”", ['hypo-', 'chondr/o', '-iac'], ['epi-', 'gastr/o', 'lumb/o'], 'hypochondriac.'),
          N('r2m:cv')
        ]
      },
      {
        id: 'cv5', title: "Four quadrants", icon: '➕', items: [
          L("Two lines through the navel", `A simpler clinical method: two perpendicular lines through the <b>navel</b> divide the abdomen into <b>four quadrants</b>:${fig('quadrants')}`),
          L("What is where?", `${tbl([["Quadrant", "Key contents"], ['RUQ', "right lobe of the liver, gallbladder, part of the pancreas and intestine"], ['LUQ', "stomach, spleen, left lobe of the liver, part of the pancreas"], ['RLQ', "appendix, right ovary and uterine tube, right ureter"], ['LLQ', "part of the large intestine, left ovary and tube, left ureter"]])}${fig(['quadrants-four', 'quadrants-organs'], ["the four quadrants over the organs", "the contents of each quadrant"])}`),
          M("Which quadrant is the gallbladder in?", ['RUQ', 'LUQ', 'RLQ', 'LLQ'], "The gallbladder is under the liver, upper right."),
          M("In this figure, which is quadrant number (4)?", ['LLQ', 'RLQ', 'LUQ', 'RUQ'], "It is a front view: (1) the viewer’s upper left = the patient’s RUQ, (2) the viewer’s upper right = LUQ, (3) RLQ and (4) the viewer’s lower right = the patient’s LLQ.", null, F('quadrants-quiz')),
          P("Match each organ to its quadrant", [["the appendix", 'RLQ'], ["spleen", 'LUQ'], ["gallbladder", 'RUQ'], ["sigmoid colon", 'LLQ']]),
          L("Region or quadrant?", `${fig(['regions-quadrants', 'quad-reg-pair'], ["the nine regions and four quadrants on one body", "comparing the two methods"])}${vs(["9 regions", "more precise; used more in anatomy"], ["4 quadrants", "simpler; used more at the bedside and in charts"])}${pearl("“RLQ tenderness” in a chart means pain on touching the right lower quadrant; think appendicitis first. RUQ pain after a fatty meal: think gallbladder.")}`),
          T("The centre of the four quadrants is the navel.", true, "Two perpendicular lines pass through the navel."),
          B("The stomach is mostly in the ___ quadrant.", ['LUQ', 'RUQ', 'RLQ'], "The stomach is upper left."),
          M("Which method of division is shown in this picture?", ["A: four quadrants and B: nine regions", "both are nine regions", "both are four quadrants", "Body planes"], "A with two lines, B with four.", null, F('regions-ab')),
          N('ab:cv')
        ]
      },
      {
        id: 'cv6', title: "Picture test: the cavities", icon: '🎯', items: [
          L("Test yourself", `In this lesson you fill in the numbers and blank labels of the clinical pictures. Before you answer, review this order:<br>• the dorsal cavities: <b>cranial</b> and <b>spinal</b><br>• the ventral cavities: <b>thoracic</b>, then the diaphragm, then <b>abdominal</b> and <b>pelvic</b>${memo("From top to bottom at the front of the body: “chest, diaphragm, abdomen, pelvis”, like the floors of a building: the first floor, the ceiling, the ground floor and the basement.")}`),
          M("In this figure, which cavity is number (3)?", ['cranial', 'spinal', 'thoracic', 'abdominal'], "The blue structure inside the skull is the brain; the cranial cavity.", null, F('cavities-quiz')),
          M("In the same figure, which cavity is number (7), just above the diaphragm?", ['thoracic', 'abdominal', 'pelvic', 'spinal'], "Above the diaphragm is the chest cavity.", null, F('cavities-quiz')),
          M("Which large cavity is bracket (1), which takes in cavities (3) and (4)?", ['dorsal cavity', 'ventral cavity', 'abdominopelvic cavity', 'thoracic cavity'], "(3) cranial and (4) spinal together are the dorsal cavity.", null, F('cavities-quiz')),
          O("Put the ventral cavities in order from top to bottom", ['thoracic', 'diaphragm', 'abdominal', 'pelvic'], "Chest → diaphragm → abdomen → pelvis."),
          T("The abdominopelvic cavity is made of the abdominal and pelvic cavities.", true, "There is no wall between them."),
          P("Match each number in the same figure to its cavity", [["(4)", 'spinal'], ["(5)", 'abdominal'], ["(6)", 'pelvic'], ["(2)", 'ventral']]),
          B("The cranial and spinal cavities together are the ___ cavity.", ['dorsal', 'ventral', 'pleural'], "dorsal = back."),
          L("Answer key", `${fig('cavities-numbered', '', "the same cavities with labels: (1) cranial, (2) spinal, (3) diaphragm, (4) thoracic, (5) abdominopelvic, (6) abdominal, (7) pelvic")}Note that the numbering in this figure differs from the test figure; in textbooks and exams always look at the <b>label</b>, not the number.`),
          M("In the answer-key figure, which organ is in the pelvic cavity (7)?", ["bladder", "heart", "liver", "brain"], "The bladder and reproductive organs are in the pelvis.", null, F('cavities-numbered')),
          L("Review of the “Map of the abdomen” level", recap(["The nine regions, middle column from the top: epigastric, umbilical, hypogastric", "The sides from the top: hypochondriac, lumbar, inguinal (iliac); the patient’s own left and right", "Four quadrants with two lines through the navel: RUQ liver and gallbladder • LUQ stomach and spleen • RLQ appendix • LLQ large intestine", "9 regions are more precise and anatomical; 4 quadrants simpler and clinical"])),
          N('d2t:cv')
        ]
      },

      /* ================= سطح ۳: ستون مهره‌ها و نواحی سطحی ================= */
      {
        id: 'cv7', title: "the spine", icon: '🦴', items: [
          L("The five regions of the spine", `The <b>vertebral column</b> runs from the head to the tailbone and is made of bone; the spinal cord (nervous tissue) is inside it.${fig('spine')}`),
          M("How many cervical vertebrae are there?", ["7", "12", "5", "4"], "C1 to C7."),
          L("Abbreviations in the chart", `${tbl([["Region", "abbreviation", "Number"], ["cervical (neck)", 'C1–C7', "7"], ["thoracic or dorsal (chest)", 'T1–T12 (D1–D12)', "12"], ["lumbar (lower back)", 'L1–L5', "5"], ["sacral", 'S1–S5', "5 (fused)"], ["coccygeal (tailbone)", '—', "3 to 5 (fused)"]])}${memo("Mealtimes: breakfast at 7 (7 cervical), lunch at 12 (12 thoracic), dinner at 5 (5 lumbar)!")}`),
          P("Match each region to its number of vertebrae", [['cervical', "7"], ['thoracic', "12"], ['lumbar', "5"], ['sacral', "5 fused"]]),
          T("The spine is made of nervous tissue and the spinal cord of bone.", false, "The other way round: the spine is bone and the spinal cord is nervous tissue."),
          L("Back pain and MRI", `A 45-year-old man complains of low back pain shooting down his right leg. A <b>sagittal MRI</b> shows a bulging disc between <b>L4 and L5</b>.${pearl("Most disc herniations happen in the lumbar region (L4–L5 and L5–S1), because it bears the most weight.")}`),
          M("In this case, which vertebra does L4 refer to?", ["the fourth lumbar vertebra", "the fourth thoracic vertebra", "the fourth cervical vertebra", "the fourth sacral vertebra"], 'L = lumbar.', [["Patient", "45-year-old man"], ["Complaint", "low back pain shooting down the right leg"], ['MRI', "sagittal: L4–L5 disc herniation"]]),
          B("The plural of vertebra is ___.", ['vertebrae', 'vertebras', 'vertebri'], '‎-a → ‎-ae.'),
          S("Spell the adjective meaning “pertaining to the tailbone”", 'coccygeal', 'coccyg/o + -eal.', 'cocc…'),
          N('sp:cv')
        ]
      },
      {
        id: 'cv8', title: "Regions of the head and trunk", icon: '🗿', items: [
          L("The surface map of the body", `Every region of the body has an anatomical adjective used in the chart for the site of a wound, pain or examination:${fig('body-map')}`),
          L("Head and neck", `${tbl([["Region", "Location"], ['cephalic', "head"], ['occipital', "back of the head"], ['orbital / infraorbital', "eye socket / below it"], ['nasal', "nose"], ['buccal', "cheek"], ['mental / submental', "chin (ment/o) / below the chin"], ['auricular', "ear"], ['cervical', "neck"]])}${memo("In anatomy, mental has nothing to do with the mind! It comes from mentum (chin).")}`),
          M(`Where is the ${e('<b>buccal</b>')} region?`, ["cheek", "chin", "back of the head", "ear"], "bucc/o = cheek."),
          P("Match each region to its location", [['occipital', "back of the head"], ['mental', "chin"], ['auricular', "ear"], ['orbital', "eye socket"], ['cervical', "neck"]]),
          L("The trunk from front and back", `${tbl([["Region", "Location"], ['sternal', "over the breastbone"], ['pectoral', "chest"], ['mammary', "breast"], ['axillary', "armpit"], ['clavicular / supraclavicular', "collarbone / above the collarbone"], ['interscapular / infrascapular', "between the shoulder blades / below the shoulder blade"], ['lumbar', "lower back"], ['sacral', "over the sacrum"], ['gluteal', "buttock"]])}${fig('body-regions', '', "Common names of body regions from the front and back; each region’s adjective is in brackets.")}`),
          M("“The supraclavicular lymph node is enlarged.” Where is this node?", ["above the collarbone", "armpit", "groin", "below the chin"], "supra- (above) + clavicul/o (collarbone)."),
          T("interscapular means between the two shoulder blades.", true, "inter- (between) + scapul/o (shoulder blade)."),
          B("The armpit region is called the ___ region.", ['axillary', 'pectoral', 'sternal'], 'axill/o.'),
          W("Build the term that means “below the chin”", ['sub-', 'ment/o', '-al'], ['supra-', 'bucc/o', 'orbit/o'], 'submental.'),
          N('wb:cv')
        ]
      },
      {
        id: 'cv9', title: "Limb regions and the chart", icon: '🦵', items: [
          L("Arms and legs", `${tbl([["Region", "Location"], ['brachial', "arm"], ['antecubital', "in front of the elbow"], ['carpal', "the wrist"], ['femoral', "thigh"], ['patellar', "knee (kneecap)"], ['popliteal', "behind the knee"], ['plantar / pedal', "sole of the foot / foot"], ['inguinal', "groin"]])}${pearl("Blood is usually drawn from the antecubital region (front of the elbow); the pulse can also be felt in the popliteal (behind the knee) and femoral (thigh) regions.")}`),
          M("Which region is blood usually drawn from?", ['antecubital', 'popliteal', 'carpal', 'gluteal'], "ante- (in front) + cubit/o (elbow)."),
          P("Match each region to its location", [['popliteal', "behind the knee"], ['patellar', "front of the knee"], ['femoral', "thigh"], ['carpal', "the wrist"], ['brachial', "arm"]]),
          L("Case: a bicycle accident", `A teenager has come to the emergency department after the handlebar of his bike hit his abdomen: pain in the <b>LUQ</b>, pale, with a fast heart rate. An abdominal <b>CT</b> shows a torn <b>spleen</b>.${memo("Remember the LUQ as “spleen on the upper left”; the big liver is on the upper right (RUQ).")}`),
          M("Where does a torn spleen mostly cause pain?", ['LUQ', 'RUQ', 'RLQ', 'hypogastric'], "The spleen is in the left upper quadrant.", [["Patient", "15-year-old boy"], ["Incident", "bike handlebar struck the abdomen"], ["Complaint", "LUQ pain, pallor"], ['CT', "torn spleen"]]),
          T("The spleen lies in the left hypochondriac region.", true, "The same as the left upper quadrant."),
          O("Put these lower-limb regions in order from top to bottom", ['inguinal', 'femoral', 'patellar', 'plantar'], "Groin → thigh → knee → sole of the foot."),
          B("The back of the knee is the ___ region.", ['popliteal', 'patellar', 'antecubital'], "poplit/o = back of the knee."),
          S("Spell the term for the front-of-the-elbow region", 'antecubital', 'ante- + cubit/o + -al.', 'ante…'),
          L("Review of the “Spine and surface regions” level", recap(["The spine from the top: cervical 7 vertebrae • thoracic 12 • lumbar 5 • sacral 5 fused • coccygeal the tailbone", "Head and neck: cephalic, occipital, orbital, nasal, buccal, mental (chin), auricular, cervical", "Trunk: sternal, pectoral, mammary, axillary, interscapular, lumbar, sacral, gluteal", "Limbs: brachial, antecubital, carpal, femoral, patellar, popliteal, plantar, pedal, inguinal"])),
          N('t2f:cv')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* پیکر — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: "Puzzly", title: "The Piece Expert", shape: 'puzzle', color: '#8C96F0', acc: ['sparkle'], bio: "Breaks every scary word into prefix, root and suffix and reads it from the end. Its motto: “epigastric is just three pieces!”" },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Orifice", title: "Keeper of the Openings", shape: 'bubble', color: '#6C4FD8', acc: ['glasses'], bio: "Knows every opening of the body, from os (mouth) to foramen and meatus, and knows that a stoma is an opening a surgeon made." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Pluro", title: "Master of Singular and Plural", shape: 'book', color: '#4F5BD5', acc: ['crown'], bio: "Turns vertebra into vertebrae, nucleus into nuclei and phalanx into phalanges, without a single extra s!" },
    { id: 'og-0', w: 'og', lv: 0, name: "Celly", title: "The Smallest Unit of Life", shape: 'lympho', color: '#D6457A', acc: ['sparkle'], bio: "Has a membrane, cytoplasm and nucleus and builds the body with trillions of its kind. Its biggest sister is the egg and its smallest brother the sperm." },
    { id: 'og-1', w: 'og', lv: 1, name: "Mito", title: "The Cell’s Power Plant", shape: 'mito', color: '#F2884B', acc: ['headband'], bio: "An energetic mitochondrion that turns food into ATP; without it no anabolism or catabolism gets going." },
    { id: 'og-2', w: 'og', lv: 2, name: "Geno", title: "The DNA Librarian", shape: 'dna', color: '#7B5CE0', acc: ['glasses', 'crown'], bio: "Keeps the 46 chromosomes neatly in pairs and doubles them all in mitosis, but sends only 23 in meiosis." },
    { id: 'ts-0', w: 'ts', lv: 0, name: "Epi", title: "The Epithelial Shield", shape: 'shield', color: '#E07A1F', acc: ['sparkle'], bio: "Covers the surface of the body and lines the inside of tubes; sometimes simple and one-layered, sometimes stratified and many-layered." },
    { id: 'ts-1', w: 'ts', lv: 1, name: "Myo", title: "The Contracting Spindle", shape: 'mus', color: '#E07070', acc: ['headband'], bio: "It’s a triplet: skeletal, which moves at your command; cardiac, which never tires; and smooth, which quietly churns the intestine." },
    { id: 'ts-2', w: 'ts', lv: 2, name: "Connecto", title: "The Body’s Glue", shape: 'bone', color: '#FBF1E3', acc: ['crown'], bio: "Bone, cartilage, tendon, ligament, fat and even blood are all in its family; the most abundant tissue in the body." },
    { id: 'sy-0', w: 'sy', lv: 0, name: "Thump", title: "Heart of the Circulation", shape: 'heart', color: '#E5476B', acc: ['sparkle'], bio: "Beats more than a hundred thousand times a day to deliver oxygen and nutrients to every organ." },
    { id: 'sy-1', w: 'sy', lv: 1, name: "Breathy", title: "The Patient Lung", shape: 'lung', color: '#1899D6', acc: ['glasses'], bio: "Takes in oxygen and gives back carbon dioxide, with the help of the diaphragm moving up and down beneath it." },
    { id: 'sy-2', w: 'sy', lv: 2, name: "Bean", title: "The Filtering Kidney", shape: 'bean', color: '#B84A4A', acc: ['crown'], bio: "Filters the blood, makes urine and lives behind the peritoneum (retroperitoneal), the only large abdominal organ that does." },
    { id: 'dr-0', w: 'dr', lv: 0, name: "Compass", title: "The Body’s Direction Finder", shape: 'compass', color: '#1899D6', acc: ['sparkle'], bio: "Always starts from the “anatomical position”: standing, palms facing forward. Then it says superior, medial or distal." },
    { id: 'dr-1', w: 'dr', lv: 1, name: "Slicer", title: "Master of the Planes", shape: 'clipboard', color: '#E3F2FD', acc: ['glasses'], bio: "Cuts the body with three planes: sagittal (left and right), frontal (front and back) and transverse (upper and lower). It loves CT and MRI." },
    { id: 'dr-2', w: 'dr', lv: 2, name: "Glove", title: "Master of Positions", shape: 'glove', color: '#9FD3F5', acc: ['crown'], bio: "Places the patient in the right position for every examination: supine, prone, Fowler, Sims, lithotomy or Trendelenburg." },
    { id: 'cv-0', w: 'cv', lv: 0, name: "Cavy", title: "Guardian of the Two Great Cavities", shape: 'blob', color: '#7B5CE0', acc: ['sparkle'], bio: "Watches over the dorsal cavity (skull and spinal cord) and the ventral cavity (chest and abdomen-pelvis); the diaphragm is the border between the two floors." },
    { id: 'cv-1', w: 'cv', lv: 1, name: "Quad", title: "The Abdomen Mapmaker", shape: 'quad', color: '#F3C9A8', acc: ['glasses'], bio: "Divides the abdomen into four quadrants and nine regions; when it hears “RLQ pain”, it thinks of the appendix first." },
    { id: 'cv-2', w: 'cv', lv: 2, name: "Verta", title: "The Steady Column", shape: 'disc', color: '#E5A500', acc: ['crown'], bio: "7 cervical, 12 thoracic, 5 lumbar; and below, the fused sacrum and tailbone. It keeps the spinal cord safe inside." },
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
/* پیکر — راند بالینی: پرونده‌های چندمرحله‌ای
 * پرونده‌ها از مطالعات موردی فایل‌های پیوست (کودک با جسم خارجی در بینی، زکریا، بیمار سلیاک، کتی رایلی، ارجاع‌های فصل
 * Body Organization5) و موقعیت‌های رایج بالینی ساخته شده‌اند؛ هدف: به کار بردن واژه‌های ساختار بدن در دل یک پرونده واقعی.
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان بدن ================= */
    {
      id: 'r1', w: 'lx', title: "A French fry up the nose", who: "18-month-old boy",
      brief: "A mother has brought her child to the emergency department with bleeding from the left nostril and restlessness. The child has been healthy with no previous illness. On examination, a piece of French fry is seen in the front part of the nasal cavity.",
      chart: [["Section", 'ED'], ['HPI', "bleeding from the left nostril for 2 hours"], ["Allergies", 'NKDA'], ["HEENT examination", "a foreign body in the anterior left nasal cavity"]],
      fig: { a: ['openings'], l: ["Openings of the head and face"] },
      steps: [
        M("Term", "epistaxis means…", ["nosebleed", "a foreign body in the ear", "sinus inflammation", "narrowing of a nostril"], "epistaxis = nosebleed."),
        M("pore", "What is the medical term for the nostrils?", ['nares', 'meatus', 'foramina', 'stoma'], "nares (singular naris)."),
        M("Direction", "The foreign body is in the anterior part of the nasal cavity, meaning…", ["in the front part, near the nostril", "in the back part, near the throat", "on the right side", "at the top of the cavity"], "anterior = front."),
        M("Position", "The child is laid on his back for the examination. What is this position called?", ['supine', 'prone', 'Fowler', 'Sims'], "supine = lying face up."),
        P("abbreviation", "Match each chart abbreviation to its meaning", [['ED', "emergency department"], ['HPI', "history of present illness"], ['NKDA', "no known drug allergies"], ['HEENT', "head, eyes, ears, nose, throat"]]),
        T("Specialty", "The ear, nose and throat specialist is called an otorhinolaryngologist.", true, 'ot/o + rhin/o + laryng/o + -logist.'),
        S("Spelling", "Spell the medical term for the nostrils", 'nares', 'nares.', 'na…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: "Three drugs, three routes", who: "a 60-year-old woman on the ward",
      brief: "Three drug orders have been written for the patient: a sublingual tablet for chest pain, an intravenous antibiotic and an intramuscular vaccine. The nurse must identify the route of each drug correctly.",
      chart: [["Order 1", 'nitroglycerin SL'], ["Order 2", 'antibiotic IV'], ["Order 3", 'vaccine IM'], ["Skin test", 'PPD ID']],
      fig: { a: ['injection-layers'], l: ["injection layers and angles"] },
      steps: [
        M("abbreviation", "SL means…", ["sublingual: under the tongue", "subcutaneous: under the skin", "slow", "single: once"], "sub- (below) + lingu/o (tongue)."),
        P("Route", "Match each abbreviation to its injection site", [['IV', "into the vein"], ['IM', "into the muscle"], ['ID', "into the skin"], ['SubQ', "under the skin, into the fat"]]),
        M("Absorption", "Why is the chest-pain drug given under the tongue?", ["faster absorption through the vessels under the tongue", "because the tablet is large", "so stomach acid activates it", "so it is absorbed slowly"], "Sublingual absorption is faster than by mouth."),
        O("Depth", "Put the injections in order from shallowest to deepest", ['intradermal', 'subcutaneous', 'intramuscular'], "Dermis → subcutaneous → muscle."),
        T("Category", "All these injections count as parenteral routes.", true, "parenteral = any route except the digestive tract."),
        S("Spelling", "Spell the term for “into a muscle”", 'intramuscular', 'intra- + muscul/o + -ar.', 'intra…')
      ]
    },
    /* ================= سازمان‌یابی و سلول ================= */
    {
      id: 'r3', w: 'og', title: "The tired student", who: "Zakaria, a medical student",
      brief: "Zakaria has been tired for several weeks, can’t concentrate in class, has put on a little weight and is slightly constipated. He thinks he has an underactive thyroid. The GP does a review of systems and a full examination and orders tests.",
      chart: [['ROS', "fatigue, poor concentration"], ["Tests", "blood sugar, CBC, thyroid"], ["Result", "all WNL"], ["diagnosis", "too little sleep and a poor diet"]],
      fig: { a: ['metabolism'], l: ["metabolism"] },
      steps: [
        M("abbreviation", "ROS means…", ["review of systems", "complete blood count", "normal result", "chest radiograph"], 'review of systems.'),
        M("abbreviation", "In a test result, WNL means…", ["within normal limits", "needs repeating", "very high", "unknown"], 'within normal limits.'),
        M("Concept", "Which body system does the thyroid work with?", ['endocrine', 'digestive', 'integumentary', 'lymphatic'], "It is an endocrine gland; its hormones regulate metabolism."),
        M("Term", "What is an underactive thyroid called in English?", ['hypothyroidism', 'hyperthyroidism', 'thyroiditis', 'thyroidectomy'], "hypo- = low."),
        T("metabolism", "Catabolism is the part of metabolism that breaks substances down to release energy.", true, "cata- = down, breaking down."),
        S("Spelling", "Spell the term for all the body’s chemical processes", 'metabolism', 'meta- + bol/o + -ism.', 'meta…')
      ]
    },
    {
      id: 'r4', w: 'og', title: "A lump and a sample", who: "a 55-year-old man",
      brief: "A growing lump has been found in the skin of the patient’s forearm. The surgeon takes a biopsy and sends the sample to the pathology lab. Report: a neoplasm of epithelial tissue, “in situ”.",
      chart: [["finding", "a growing lump on the forearm"], ["Action", 'Bx'], ["Report", 'epithelioma in situ'], ["history of", "a lot of sun exposure"]],
      fig: { a: ['cell-types'], l: ["kinds of cells"] },
      steps: [
        M("abbreviation", "Bx means…", ['biopsy', 'blood exam', 'body x-ray', 'bone'], "Bx = biopsy: removing living tissue for diagnosis."),
        M("Term", "neoplasm means…", ["a new, abnormal growth of tissue", "a normal cell", "skin inflammation", "a wound"], 'neo- + -plasm.'),
        M("Latin", "In the report, in situ means…", ["in its original place; not spread", "in the laboratory", "after death", "within the living body"], "in situ = in place."),
        P("specialist", "Match each specialist to their work", [['pathologist', "studying disease in tissue"], ['histologist', "studying tissue under the microscope"], ['cytologist', "studying cells"], ['dermatologist', "skin specialist"]]),
        T("Cause", "The sun’s ultraviolet rays are a carcinogen for the skin.", true, "carcin/o + -gen: a cancer-causing agent."),
        S("Spelling", "Spell the term for removing living tissue for diagnosis", 'biopsy', 'bi/o + -opsy.', 'bio…')
      ]
    },
    /* ================= بافت‌ها و غشاها ================= */
    {
      id: 'r5', w: 'ts', title: "Abdominal pain after surgery", who: "a 42-year-old woman",
      brief: "The patient had abdominal surgery three years ago. Now she has cramping pain, bloating and vomiting. The physician suspects adhesions inside the abdomen and bowel obstruction. She has had a fever for a few days and her heart rate is fast; the physician is worried about sepsis.",
      chart: [["history of", "abdominal surgery 3 years ago"], ["Complaint", "cramping pain, bloating, vomiting"], ["vital signs", "fever, fast pulse, low BP"], ["Possible diagnosis", "adhesions, bowel obstruction, sepsis"]],
      fig: { a: ['membranes'], l: ["the layers of the peritoneum"] },
      steps: [
        M("Term", "adhesion means…", ["bands of scar tissue sticking separate surfaces together", "inflammation of the peritoneum", "a bowel tumour", "perforation of the stomach"], "Mostly after abdominal surgery."),
        M("Membrane", "What is the membrane that lines the abdominal cavity?", ['peritoneum', 'pleura', 'pericardium', 'meninges'], "peritone/o = peritoneum."),
        P("Layer", "Match each layer to its place", [['parietal peritoneum', "on the abdominal wall"], ['visceral peritoneum', "on the surface of the intestine"], ['peritoneal cavity', "space between the two layers"]]),
        M("Sepsis", "Which set of signs fits sepsis?", ["fever, fast pulse and breathing, low pressure", "low temperature and a slow pulse", "cough only", "itchy skin"], "A systemic inflammatory response to infection."),
        T("abbreviation", "In a chart, BP means blood pressure.", true, 'blood pressure.'),
        S("Spelling", "Spell the term for bands of scar tissue that stick tissues together", 'adhesion', 'adhesion.', 'adhe…')
      ]
    },
    {
      id: 'r6', w: 'ts', title: "An inflamed nail", who: "a 30-year-old hairdresser",
      brief: "The skin beside the nail of the patient’s index finger has been red, swollen and painful for two days. She had picked the skin beside the nail. The physician examines the skin and checks the inflammation of the surrounding tissue.",
      chart: [["Complaint", "pain and swelling beside the nail"], ["history of", "picking the skin around the nail"], ["examination", "redness, heat, swelling"], ["diagnosis", 'paronychia']],
      fig: { a: ['tissues'], l: ["the four tissues"] },
      steps: [
        M("Term", "paronychia means…", ["infection and inflammation beside the nail", "the normal tissue around the nail", "a nail tumour", "an ingrown nail"], "para- (beside) + onych/o (nail)."),
        M("Twin", "What is the normal tissue around the nail called?", ['perionychium', 'paronychia', 'epidermis', 'striae'], 'peri- + onych/o.'),
        M("inflammation", "Which group of signs are the classic signs of inflammation?", ["redness, heat, swelling and pain", "dryness, cold, bruising", "fever, chills, cough", "itching and hair loss"], 'inflammation.'),
        P("root", "Match each root to its meaning", [['onych/o', "nail"], ['dermat/o', "skin"], ['hidr/o', "sweat"], ['lip/o', "fat"]]),
        T("system", "The nail is part of the integumentary system.", true, "Hair, nails and skin glands are the appendages of the skin."),
        S("Spelling", "Spell the term for an infection beside the nail", 'paronychia', 'para- + onych/o + -ia.', 'paro…')
      ]
    },
    /* ================= دستگاه‌ها و اندام‌ها ================= */
    {
      id: 'r7', w: 'sy', title: "Bloating, diarrhoea and anaemia", who: "23-year-old woman",
      brief: "For months the patient has had bloating, abdominal pain and chronic diarrhoea with pale, foul-smelling stools. Her BMI is 17.5. The gastroenterologist reports positive coeliac and anaemia tests. The care team includes a dietitian.",
      chart: [["Complaint", "bloating, abdominal pain, chronic diarrhoea"], ['BMI', '17.5'], ["test", "coeliac positive, anaemia"], ["treatment", "GFD, follow-up in 6 weeks"]],
      fig: { a: ['sys-digestive'], l: ["The digestive system"] },
      steps: [
        M("system", "Which part of the digestive system does coeliac disease damage?", ["the small intestine (enter/o)", "oesophagus", "stomach", "liver"], "Gluten damages the villi of the small intestine."),
        M("abbreviation", "GFD means…", ["gluten-free diet", "digestive test", "reflux disease", "high-fat diet"], 'gluten-free diet.'),
        M("Specialty", "Which specialist was the patient referred to?", ['gastroenterology', 'cardiology', 'nephrology', 'dermatology'], 'gastr/o + enter/o + -logy.'),
        P("root", "Match each digestive root to its meaning", [['gastr/o', "stomach"], ['enter/o', "small intestine"], ['col/o', "large intestine"], ['hepat/o', "liver"]]),
        T("abbreviation", "An RDN is a registered dietitian nutritionist.", true, 'registered dietitian nutritionist.'),
        S("Spelling", "Spell the term for the study of the stomach and intestines", 'gastroenterology', 'gastr/o + enter/o + -logy.', 'gastro…')
      ]
    },
    {
      id: 'r8', w: 'sy', title: "A morning at the referral clinic", who: "seven patients",
      brief: "The clinic receptionist must send each patient to the right specialist: John can’t hear quiet sounds, Ruth has palpitations, Marianne has uterine bleeding, José has broken his wrist, Mrs Cortez’s daughter has repeated bladder infections, Marta has a skin rash and Mr Sparks has a stomach ulcer.",
      chart: [["John", "hearing loss"], ["Ruth", "pounding heartbeat"], ["José", "broken wrist"], ["Mr Sparks", "stomach ulcer"]],
      fig: { a: ['systems'], l: ["Body systems"] },
      steps: [
        P("Referral", "Match each patient to the right specialty", [["John", 'otorhinolaryngology'], ["Ruth", 'cardiology'], ["José", 'orthopedics'], ["Mr Sparks", 'gastroenterology']]),
        M("Referral", "Where should Mrs Cortez’s daughter, with repeated bladder infections, go?", ['urology', 'neurology', 'hematology', 'endocrinology'], "ur/o = urinary tract."),
        M("Referral", "Marianne, with heavy uterine bleeding…", ['gynecology', 'urology', 'cardiology', 'dermatology'], "gynec/o = woman."),
        M("Referral", "Marta, with a persistent skin rash…", ['dermatology', 'orthopedics', 'nephrology', 'gastroenterology'], "dermat/o = skin."),
        T("Term", "Cardiology is the study of heart diseases.", true, 'cardi/o + -logy.'),
        S("Spelling", "Spell the one-word name of the ear, nose and throat specialty", 'otorhinolaryngology', 'ot/o + rhin/o + laryng/o + -logy.', 'otorhino…')
      ]
    },
    /* ================= جهت، صفحه و وضعیت ================= */
    {
      id: 'r9', w: 'dr', title: "Katie’s appendectomy", who: "Katie Riley",
      brief: "Katie has gone to the operating room to have her appendix removed. She is placed supine; the surgeon enters the abdominopelvic cavity through an incision on the front of the abdomen. After the operation, Katie can’t lie on her abdomen for about three weeks.",
      chart: [["Operation", 'appendectomy'], ["Position", 'supine'], ["Site", 'RLQ'], ["after surgery", "no prone position for up to 3 weeks"]],
      fig: { a: ['bedside'], l: ["Patient positions"] },
      steps: [
        M("Position", "supine means…", ["lying on the back, face up", "lying face down", "half sitting", "on the side"], "supine = lying on the back."),
        M("Quadrant", "Which quadrant is the appendix in?", ['RLQ', 'LLQ', 'RUQ', 'LUQ'], 'right lower quadrant.'),
        M("Direction", "Which surface of the body is the surgical incision on?", ['anterior', 'posterior', 'superior', 'dorsal'], "The front of the abdomen."),
        O("Depth", "Put the layers in order from superficial to deep", ["skin", "subcutaneous fat", "muscle", "peritoneum"], "From superficial to deep."),
        T("Position", "prone means lying on the abdomen.", true, "That is why Katie shouldn’t lie prone for a while."),
        S("Spelling", "Spell the term for removal of the appendix", 'appendectomy', 'append/o + -ectomy.', 'appen…')
      ]
    },
    {
      id: 'r10', w: 'dr', title: "Shortness of breath and a chest X-ray", who: "a 68-year-old man",
      brief: "The patient has been admitted with shortness of breath. The nurse raises the head of the bed. The physician orders a PA and lateral chest X-ray, then a CT with transverse slices.",
      chart: [["Complaint", 'dyspnea'], ["Position", 'Fowler'], ["Imaging", "CXR PA and lat"], ["Next step", "CT with axial slices"]],
      fig: { a: ['modalities'], l: ["Imaging methods"] },
      steps: [
        M("Position", "Raising the head of the bed for shortness of breath is which position?", ['Fowler', 'Trendelenburg', 'prone', 'lithotomy'], "Half sitting; the lungs expand more easily."),
        M("Direction", "In a PA film, where does the beam enter?", ["From the back", "From the front", "from the side", "from above"], 'posteroanterior.'),
        M("abbreviation", "CXR means…", ["chest X-ray", "Head CT", "Blood count", "Heart examination"], 'chest x-ray.'),
        M("Plane", "Axial slices in CT are parallel to which body plane?", ['transverse', 'sagittal', 'frontal', 'coronal'], "axial = transverse (horizontal)."),
        T("Method", "CT uses x-rays but MRI does not.", true, "MRI works with a magnet and radio waves."),
        S("Spelling", "Spell the term for imaging that records the body in slices", 'tomography', 'tom/o + -graphy.', 'tomo…')
      ]
    },
    /* ================= حفره‌ها و نواحی ================= */
    {
      id: 'r11', w: 'cv', title: "Bicycle accident", who: "15-year-old boy",
      brief: "A bicycle handlebar has struck a teenager in the abdomen. The teenager complains of pain in the upper left abdomen, looks pale and has a fast pulse. Abdominal CT shows a ruptured spleen. The surgeon is deciding on a splenectomy.",
      chart: [["Incident", "Handlebar blow to the abdomen"], ["pain", "LUQ, left hypochondriac"], ['CT', "torn spleen"], ["Action", "Considering splenectomy"]],
      fig: { a: ['quadrants'], l: ["Four quadrants"] },
      steps: [
        M("Quadrant", "LUQ means…", ["left upper quadrant", "left lower quadrant", "right upper quadrant", "Umbilical region"], 'left upper quadrant.'),
        M("organ", "Which organ is in the LUQ?", ["spleen", "the appendix", "gallbladder", "bladder"], "The spleen and stomach are in the left upper quadrant."),
        M("Region", "In the nine-region division, where is the spleen mostly found?", ['left hypochondriac', 'epigastric', 'right lumbar', 'hypogastric'], "Below the left ribs."),
        M("hollow space in the body", "Which body cavity is the spleen in?", ['abdominal', 'thoracic', 'pelvic', 'cranial'], "Below the diaphragm, in the abdominal cavity."),
        T("surgery", "splenectomy means removal of the spleen.", true, 'splen/o + -ectomy.'),
        S("Spelling", "Spell the term for surgical removal of the spleen", 'splenectomy', 'splen/o + -ectomy.', 'splen…')
      ]
    },
    {
      id: 'r12', w: 'cv', title: "Shooting low back pain", who: "45-year-old man",
      brief: "After lifting a heavy object, the patient developed low back pain that shoots down the back of the right thigh and calf. A sagittal MRI of the lumbar spine shows a disc bulge between the fourth and fifth lumbar vertebrae.",
      chart: [["Complaint", "low back pain shooting down the right leg"], ["examination", "Pain on bending the trunk (flexion)"], ['MRI', "sagittal: L4–L5 disc herniation"], ["Region", 'lumbar']],
      fig: { a: ['spine'], l: ["the spine"] },
      steps: [
        M("abbreviation", "L4 means…", ["the fourth lumbar vertebra", "the fourth cervical vertebra", "the fourth thoracic vertebra", "Fourth rib"], 'L = lumbar.'),
        M("Number", "How many vertebrae does the lumbar region have?", ["5", "7", "12", "4"], "L1 to L5."),
        M("Plane", "A sagittal MRI cuts the body into which parts?", ["right and left", "front and back", "upper and lower", "Superficial and deep"], "sagittal = right and left."),
        O("Spine", "Put the regions of the spine in order from top to bottom", ['cervical', 'thoracic', 'lumbar', 'sacral', 'coccygeal'], "cervical → thoracic → lumbar → sacral → coccygeal."),
        T("Direction", "Pain in the back of the thigh is on the posterior surface of the lower limb.", true, "posterior = back."),
        S("Spelling", "Spell the plural of the term for the bones of the spine", 'vertebrae', 'vertebra → vertebrae.', 'verte…')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* پیکر — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', "Start the meaning from the suffix: epigastric means “pertaining to” + “above” + “stomach”."],
    ['Lx', "orifice comes from os (mouth) and facere (to make): “an opening that has been made”."],
    ['Lx', "A stoma is an opening the surgeon creates; the suffix ‎-stomy means creating that opening."],
    ['Lx', "The plural of vertebra is vertebrae, the plural of foramen is foramina and the plural of phalanx is phalanges."],
    ['Lx', "hidr/o means sweat and hydr/o means water; they differ by just one letter!"],
    ['Lx', "palpate means to feel by touch during an examination; palpitate means the heart is racing. One letter, two worlds."],
    ['Lx', "parenteral means any route of medication other than the digestive tract: IV, IM, SubQ, ID and intrathecal."],
    ['Cyt', "The cell is the smallest unit of life; the body has 10 to 100 trillion cells."],
    ['Cyt', "The largest cell in the body is the egg (ovum) and the smallest is the sperm."],
    ['Cyt', "Every body cell has 46 chromosomes (23 pairs); sex cells have only 23."],
    ['Cyt', "Mitosis makes two identical cells; meiosis halves the number of chromosomes."],
    ['Cyt', "metabolism = anabolism (building up) + catabolism (breaking down). ana means up and cata means down."],
    ['Cyt', "The mitochondrion is the cell’s power plant and makes energy in the form of ATP."],
    ['Hist', "The body has only four kinds of tissue: epithelial, connective, muscle and nervous."],
    ['Hist', "Connective tissue is the most abundant tissue in the body; even blood and fat are connective tissue."],
    ['Hist', "A tendon attaches muscle to bone and a ligament attaches bone to bone."],
    ['Hist', "Cardiac muscle is found only in the heart; it is striated but involuntary."],
    ['Hist', "Nervous tissue needs more oxygen and nutrients than any other tissue."],
    ['Hist', "The parietal layer lines the wall of the cavity and the visceral layer covers the organ itself."],
    ['Hist', "The skin is an organ: it is made of epithelial, connective and nervous tissue."],
    ['Sys', "The kidneys lie behind the peritoneum (retroperitoneal); they are the only large abdominal organs outside the peritoneal sac."],
    ['Sys', "Of each paired organ (such as the kidneys and lungs), one alone is enough to stay alive."],
    ['Sys', "otorhinolaryngology = ear + nose + larynx + study of; the same as ENT."],
    ['Sys', "The integumentary system includes the skin, hair, nails, and sweat and oil glands."],
    ['Dir', "All directions are given from the anatomical position: standing, facing forward, palms facing forward."],
    ['Dir', "proximal and distal are used only for the arms and legs: the elbow is proximal to the wrist."],
    ['Dir', "The sagittal plane divides the body into left and right, the frontal into front and back, and the transverse into upper and lower."],
    ['Dir', "supine means lying face up and prone means lying face down; remember supine as “spine on the bed”."],
    ['Dir', "A PA chest film means the beam enters from the back (posterior) and exits from the front (anterior)."],
    ['Dir', "abduction is moving away from the midline and adduction is moving toward it; ab = away, ad = toward."],
    ['Cav', "The diaphragm separates the thoracic cavity from the abdominal cavity; there is no wall between the abdomen and the pelvis."],
    ['Cav', "Dorsal cavities: cranial and spinal. Ventral cavities: thoracic and abdominopelvic."],
    ['Cav', "The appendix is in the right lower quadrant (RLQ); pain there brings appendicitis to mind first."],
    ['Cav', "hypochondriac means below the rib cartilage: hypo (below) + chondr (cartilage) + iac."],
    ['Cav', "The spine: 7 cervical, 12 thoracic, 5 lumbar, 5 fused sacral vertebrae and the coccyx."],
    ['Cav', "Left and right on the abdominal map are always the patient’s own left and right, not the viewer’s."]
  ];
  const COLORS = { Lx: '#4F5BD5', Cyt: '#D6457A', Hist: '#E07A1F', Sys: '#12A594', Dir: '#1899D6', Cav: '#7B5CE0', '': '#2F5FD0' };
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
/* پیکر — کارت‌های واژه (فلش‌کارت) با جعبه لایتنر
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
/* پیکر — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مرجع سریع آناتومی
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'peykar.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: "Dictionary", color: '#2F5FD0' },
    { id: 'parse', sym: '✂', name: "Word parser", color: '#7B5CE0' },
    { id: 'roots', sym: '-o-', name: "Roots and suffixes", color: '#12A594' },
    { id: 'abbr', sym: 'RUQ', name: "Abbreviations", color: '#1899D6' },
    { id: 'ref', sym: '🧭', name: "Quick reference", color: '#E5A500' }
  ];
  let cur = 'dict';
  const st = { q: '', w: '', k: '', parse: 'epigastric', open: null, limit: 40 };
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
      <p class="disclaimer">⚕️ Peykar is a learning tool and does not replace anatomy references or clinical judgment.</p>
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
  const dict = () => `<div class="tpane">${searchBox("Search: cavity, hollow, lateral…")}
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
  const SAMPLES = ['hypochondriac', 'retroperitoneal', 'epithelioma', 'mediolateral', 'myosarcoma', 'supraclavicular', 'intramuscular', 'histologist'];
  const parse = () => `<div class="tpane">
    <p class="muted">Type a medical word and it will be broken into prefix, root and suffix. The golden rule: start the meaning from the <b>suffix</b>, then the prefix, and finally the roots.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. leukocytosis"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: "prefix", root: "root", suffix: "suffix" };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox("Search: later, side, -logy…")}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]} list <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b dir="ltr">${esc(r.a)}</b><span>${esc(r.fa)}</span><small dir="ltr">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox("Search: RUQ, anterior, MRI…")}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>Abbreviation</th><th>Full form and meaning</th></tr>${list.map(a => `<tr><td dir="ltr">${esc(a.a)}</td><td><span dir="ltr" class="abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  /* مرجع سریع: جدول‌های پرکاربرد آناتومی که هنگام خواندن پرونده لازم می‌شوند */
  const REF = [
    ["Direction", [['superior / inferior', "up / down (cephalic / caudal)"], ['anterior / posterior', "front / back (ventral / dorsal)"], ['medial / lateral', "toward the midline / toward the side"], ['proximal / distal', "near / far from where the limb attaches"], ['superficial / deep', "near the surface / deep inside"], ['ipsilateral / contralateral', "same side / opposite side"]]],
    ["Plane", [['sagittal (midsagittal)', "right and left (midsagittal: two equal halves)"], ['frontal (coronal)', "front and back"], ['transverse (horizontal)', "upper and lower"]]],
    ["hollow space in the body", [['cranial', "brain (dorsal cavity)"], ['spinal (vertebral)', "spinal cord (dorsal cavity)"], ['thoracic', "heart, lungs, oesophagus, trachea (ventral cavity)"], ['abdominal', "stomach, intestines, liver, spleen, pancreas"], ['pelvic', "bladder, reproductive organs, rectum"]]],
    ["Quadrant", [['RUQ', "right lobe of the liver, gallbladder, part of the pancreas and intestine"], ['LUQ', "stomach, spleen, left lobe of the liver, part of the pancreas"], ['RLQ', "appendix, right ovary and tube, right ureter"], ['LLQ', "sigmoid colon, left ovary and tube, left ureter"]]],
    ["The spine", [['cervical (C1–C7)', "7 neck vertebrae"], ['thoracic (T1–T12)', "12 chest vertebrae"], ['lumbar (L1–L5)', "5 lower-back vertebrae"], ['sacral (S1–S5)', "5 fused vertebrae of the sacrum"], ['coccygeal', "3 to 5 small tailbone vertebrae"]]],
    ["Patient positions", [['supine', "face up: chest and abdominal exam, reflexes"], ['prone', "face down: exam of the back and spine"], ['Fowler', "half sitting: difficult breathing"], ['Sims', "on the left side: rectal exam, enema"], ['lithotomy', "feet in stirrups: pelvic exam, Pap smear"], ['Trendelenburg', "head lower: postural drainage"]]]
  ];
  const ref = () => `<div class="tpane"><p class="muted">Frequently used tables for reading charts and imaging reports.</p>
    ${REF.map(g => `<h3 class="tgh">${g[0]}</h3><table class="mini ref"><tr><th>Term</th><th>Meaning</th></tr>${g[1].map(r => `<tr><td dir="ltr" class="ref__v">${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`).join('')}
    ${EA.ui.figCard({ a: ['regions9', 'quadrants'], l: ["Nine regions", "Four quadrants"] })}</div>`;

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
