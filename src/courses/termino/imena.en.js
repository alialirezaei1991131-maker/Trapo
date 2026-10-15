/* تراپو • ترمینو — حیطه «imena» (Blood, Lymphatic and Immune Systems)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_imena;
  D.css = ".certbar{width: 100%; margin-top: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px; border: 0; border-radius: 16px; padding: 14px 18px; font-weight: 800; background: linear-gradient(120deg, #c8243f, #12a594); color: #fff; box-shadow: 0 4px 0 var(--brand-d); text-align: start;}\n.cert{width: 100%; padding: 10px; background: linear-gradient(135deg, #c8243f, #e5476b, #ff7a45, #12a594, #18a6d9, #7b5ce0); border-radius: 20px;}\n[lang=\"fa\"]{font-family: Vazirmatn, Tahoma, system-ui, sans-serif;}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* ایمنا — هسته: فضای نام، متن‌ها، رقم فارسی و سازنده‌های کوتاه محتوا
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
  EA.APP = { name: "Imena", key: 'imena', title: "Imena • Blood, Lymph and Immune Terminology" };

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
    name: "Imena", key: 'imena', title: "Imena • Blood, Lymph and Immune Terminology", certCode: 'IM',
    subject: "Medical terminology of the blood, lymphatic system and immunity",
    kicker: "🩸 Medical terminology: Blood, the Lymphatic System and Immunity",
    hello: "Hi, I’m <b>Imena</b>;",
    landP: () => `Hi, I’m <b>Imena</b>, a red blood cell with an immune shield! Here you won’t memorise words; you’ll <b>decode</b> them: you’ll learn the roots, prefixes and suffixes and read every new word yourself. ${fa(EA.lex.TERMS.length)} terms with pronunciation and meaning, ${fa(Object.keys(EA.IMG).length || 45)} pictures from the textbooks, ${fa(EA.rounds.length)} clinical charts and Leitner cards are waiting for you.`,
    disclaimer: "Imena is an educational tool and does not replace clinical judgment, a physician’s orders or laboratory references.",
    eyes: "Dozens of textbook pictures and teaching figures, from blood smears and sickle cells to lymph nodes and the lupus rash.",
    outcomes: [
          "Break every blood, lymph and immune word into prefix, root and suffix and say what it means",
          "Describe the components of blood, the types of blood cell and blood formation with the right words",
          "Know the stages of clotting, the blood groups and the types of transfusion",
          "Name the lymphatic organs and their diseases, from lymphadenopathy to lymphoma",
          "Explain innate and acquired immunity, antibodies, allergy and autoimmunity",
          "Read a CBC report, lab abbreviations and ICU concepts such as SIRS and sepsis"
        ],
    endText: "Just 5 minutes a day. A few weeks from now you’ll read blood and immune words like your mother tongue.",
    obHello: "Hi! I’m Imena, a red blood cell with an immune shield 🩸🛡️ What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “Blood and cells” is the best start; the basic roots are taught there!",
    demo: () => ({
    q: "The word <b dir=\"ltr\">thrombocytopenia</b> means…",
    fig: { a: ['cell-platelet'], l: ['thrombocyte = platelet'] },
    opts: ["A low platelet count", "A high platelet count", "Breakdown of a blood clot", "clot formation in a vessel"],
    why: `${EA.K.wb('thromb/o', 'cyt/o', '-penia')}<br><b>thromb/o</b> = clot, <b>cyt/o</b> = cell, <b>-penia</b> = deficiency. The “clot cell” is the platelet (thrombocyte), so it means a <b>shortage of platelets</b>. Start the meaning from the suffix!`
  }),
    titles: ["Fresh Drop", "Curious Plasma", "Busy Blood Cell", "Wide-Awake Platelet", "Lymph Guardian", "Antigen Hunter", "Root Decoder",
    "CBC Master", "Commander of Lymphocytes", "Architect of Haemostasis", "Anaemia Detective", "Immune Field Marshal", "Word-Building Master", "Haematology Legend", "Terminology Icon"],
    leagueRoles: ["Medical student", "Nursing student", "Lab-science student", "Lab scientist", "Nutrition student", "ICU nurse", "Clinical dietitian", "Internal-medicine resident", "Midwifery student", "Pharmacy student", "Surgical technologist", "Haematology ward nurse"],
    firstBadge: ['🩸', "First Drop"],
    worldBadges: { lx: ['🧩', "Decoder"], hb: ['🩸', "Haematologist"], co: ['🧷', "Clot Architect"], ly: ['💧', "Lymph Guardian"], im: ['🛡️', "Immune Shield"], dx: ['🔬', "Lab Detective"] },
    confetti: ['#C8243F', '#12A594', '#FFC800', '#18A6D9', '#7B5CE0', '#FF7A45', '#E5476B', '#58CC02'],
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
    return `<svg class="yona imena yona--${m}" viewBox="0 0 120 150" width="${size || 120}" height="${(size || 120) * 1.25}" aria-hidden="true" style="--c:${c}">
      <ellipse cx="60" cy="144" rx="32" ry="5" fill="currentColor" opacity=".12"/>
      <g class="yona-body">
        <ellipse cx="${cx}" cy="${cy}" rx="50" ry="48" fill="var(--c)"/>
        <ellipse cx="${cx}" cy="${cy}" rx="50" ry="48" fill="#000" opacity=".1"/>
        <ellipse cx="${cx}" cy="${cy - 3}" rx="45" ry="42" fill="var(--c)"/>
        <ellipse cx="${cx}" cy="${cy + 4}" rx="31" ry="27" fill="#000" opacity=".09"/>
        <ellipse cx="${cx}" cy="${cy + 2}" rx="31" ry="26" fill="#fff" opacity=".1"/>
        <path d="M${cx - 34} ${cy - 18} A40 38 0 0 1 ${cx - 8} ${cy - 40}" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".55"/>
        <g transform="translate(88 92)"><path d="M14 0 L28 6 V17 C28 26 21 32 14 35 C7 32 0 26 0 17 V6 Z" fill="#12A594" stroke="#fff" stroke-width="3"/><path d="M8 17 l4.5 4.5 8 -9" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
        <path class="negar-spark" d="M100 18 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
        ${brows}${eyes}
        <ellipse cx="${cx - 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/><ellipse cx="${cx + 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/>
        ${mouths[m] || mouths.happy}${tear}
      </g>
    </svg>`;
  }
  };
})(window);
/* ایمنا — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/merge_data.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["acquired active immunity","","Immunity developed either by having a disease and producing natural antibodies to it or by being vaccinated against the disease.","immunity built by one’s own response to an antigen","im","",[]],
["acquired immunity","uh-KWIRE-duh ih-MYOO-ni-tee","resistance resulting from previous exposure to an infectious agent","defence built up after infection or vaccination","im","",[]],
["acquired immunodeficiency syndrome","ă-KWĪRD ĭm-ŪN dē-FĬSH-ĕn-sē SĬN-drōm","A transmissible infection/syndrome caused by the human immunodeficiency virus (HIV) that suppresses cellular immunity, leaving the host susceptible to opportunistic infections and malignancies.","late stage of HIV infection with collapsed immunity","im","Pathology_and_Disorders",["AIDS","HIV"]],
["acquired passive immunity","","Immunity provided in the form of antibodies or antitoxins that have been developed in another person or another species.","ready-made antibodies received from outside","im","",[]],
["adenoids","AD-eh-noids","pharyngeal tonsils","lymphoid tissue at the back of the nose (pharyngeal tonsils)","ly","",[]],
["adenopathy","ă-dĕ-NŎP-ă-thē","disease of a gland","enlarged or diseased glands","ly","",[]],
["agglutination","ă-glū-tĭ-NĀ-shŭn","The process by which cells or particles adhere and form into clumps in the presence of specific antibodies.","clumping of cells together","co","Pathology_and_Disorders",[]],
["agglutinogen","ă-glū-TĬN-ō-jĕnz","Substances that cause agglutination.","substances that cause clumping","co","",[]],
["agranulocyte","ā-GRĂN-yū-lō-sīts","A white blood cell that does not have visible granules in its cytoplasm; agranulocytes include lymphocytes and monocytes","white cell without granules","hb","",[]],
["agranulocytosis","a-gran-u-lo-si-TO-sis","A condition involving a decrease in the number of granulocytes in the blood; also called granulocytopenia","severe drop in granulocytes","hb","",[]],
["AIDS-related complex","","Early stage of AIDS; there is a positive test for virus, but only mild symptoms of weight loss, fatigue, skin rash, and anorexia.","early symptomatic phase of HIV disease","im","",["ARC"]],
["albumin","ăl-BYŪ-mĭn","A plasma protein that helps regulate water movement between blood and tissue.","plasma protein holding water in the vessels","hb","",[]],
["allergen","ĂL-ĕr-jĕn","Any substance that induces an allergic or hypersensitive response, such as pollen, dust, dander, and bee stings.","substance that triggers an allergy","im","Pathology_and_Disorders",[]],
["allergic asthma","ah-LER-jik / AZ-mah","Inflammation and narrowing of airways triggered by inhaling an allergen; symptoms include wheezing, coughing, and shortness of breath.","wheezing breathlessness triggered by allergens","im","",[]],
["allergic rhinitis","ah-LER-jik / rye-NYE-tis","Allergic reaction caused by inhaling an allergen such as pollen, animal dander, or mold; symptoms may include sneezing, runny nose, congestion, post-nasal drip, cough, and itchy, watery eyes; commonly called hay fever.","hay fever; allergic inflammation of the nose","im","",[]],
["allergist","AL-er-jist","a medical practitioner who specializes in the diagnosis and treatment of allergies","specialist in allergic conditions","im","",[]],
["allergy","ĂL-ĕr-jē","An extreme immune overresponse or hypersensitivity to a normally harmless substance.","hypersensitivity reaction","im","Pathology_and_Disorders",[]],
["allergy shots","","Type of immunotherapy; person receives regular injections of tiny amounts of allergen to which he or she is allergic to stimulate immune system.","desensitising injections","im","",[]],
["anaphylaxis","ăn-ă-fĭ-LĂK-sĭs","Life-threatening condition resulting from a severe allergic reaction; circulatory and respiratory problems occur, including respiratory distress, hypotension, edema, tachycardia, and convulsions; also called anaphylaxis.","severe, life-threatening allergic reaction","im","Pathology_and_Disorders",[]],
["anemia","ă-NĒ-mē-ă","A condition or disorder characterized by a deficiency in the number of red blood cells or hemoglobin content, resulting in less oxygen reaching the tissues.","lack of red cells or haemoglobin","hb","Pathology_and_Disorders",["CBC","Hgb"]],
["angioedema","an-je-o-eh-DE-mah","A localized edema with large hives (wheals) similar to urticaria but involving deeper layers of the skin and subcutaneous tissue","deep swelling under the skin or mucosa","im","",[]],
["anisocytosis","an-eye-soh-sigh-TOH-sis","Increased variation in the size of cells, especially red blood cells.","unequal red cell sizes","hb","",[]],
["antibody","ĂN-tē-bŏd-ēz","Proteins produced by B cells (plasma cells) in response to an antigen that attach to foreign cells, labeling them for destruction.","protective proteins made by plasma cells","im","Anatomy_and_Physiology",["Ig","IgA","IgD","IgE","IgG","IgM","Ab"]],
["anticoagulant","ĂN-tē-kō-ĂG-yū-lĕnts","Prevents blood clot formation; commonly referred to as blood thinner.","drugs that prevent clotting","co","",[]],
["antigen","ĂN-tĭ-jĕnz","A foreign substance or agent that provokes the body's immune system to produce antibodies.","substance that provokes an immune response","im","Anatomy_and_Physiology",["Ag"]],
["antigen-presenting cell","","Immune cell that takes in a foreign antigen, processes it, and presents it on the cell surface in combination with the body's own proteins, thus activating a T cell; examples are dendritic cells and macrophages, which are descendants of monocytes","cell that shows antigens to T cells","im","",["APC"]],
["antihemorrhagic","an-tye-hem-eh-RAJ-ik","Prevents or stops hemorrhaging; hemostatic agent.","stops bleeding","co","",[]],
["antihistamine","an-tih-HIS-tah-meme","A drug that counteracts the effects of histamine and is used to treat allergic reactions","drug that blocks histamine","im","",[]],
["antinuclear antibody test","an-tee-NOO-klee-ar / AN-tee-bod-ee","Blood test to assist in diagnosis of autoimmune diseases; presence of these antibodies in blood indicates that person’s immune system is attacking body’s cells.","ANA test for autoimmune disease","dx","",["ANA"]],
["antiretroviral","ăn-tĭ-rĕt-rō-VĪ-răl","drug treatment for a viral infection","drug against retroviruses such as HIV","dx","",[]],
["antitoxin","ăn-tē-TŎK-sĭn","Antibody directed against specific toxins.","antibody that neutralises a toxin","im","",[]],
["antiviral","an-tee-VAHY-ruhl","drug used to treat various viral infections or conditions","acts against viruses","dx","",[]],
["apheresis","af-eh-RE-sis","A procedure in which blood is withdrawn, a portion is separated and retained, and the remainder is returned to the donor; apheresis may be used as a suffix with a root meaning the fraction retained, such as plasmapheresis, leukapheresis","removing blood, separating a component and returning the rest","co","",[]],
["aplastic anemia","ā-PLĂS-tĭk","Severe form of anemia that develops as a consequence of loss of functioning red bone marrow; results in decrease in number of all formed elements; treatment may eventually require bone marrow transplant.","anaemia from failing bone marrow","hb","Pathology_and_Disorders",[]],
["appendix","ah-PEN-dicks","tube-shaped sac attached to an opening into the large intestine that plays a role in immunity","small gut pouch containing lymphoid tissue","ly","",[]],
["arginine","AR-jih-neen","An amino acid that acts as a precursor for nitric oxide synthesis, playing a role in immune function and wound healing.","amino acid precursor of nitric oxide","dx","Immunonutrition_and_Pharmacology",["Arg"]],
["artificial immunity","ahr-tuh-FISH-uhl ih-MYOO-ni-tee","immunization; immunity acquired from a vaccination","immunity gained through vaccination","im","",[]],
["autoimmune disease","ăw-tō-ĭ-MYŪN di-ZĒZ-ĕz","Disease resulting from body’s immune system attacking its own cells as if they were pathogens; examples include systemic lupus erythematosus, rheumatoid arthritis, and multiple sclerosis.","body attacking its own tissue","im","Pathology_and_Disorders",[]],
["autoimmune responses","","Responses that result from the body’s need to fight an actual infection, during which the immune system becomes overactive.","immune attacks on one’s own tissues","im","",[]],
["autologous transfusion","aw-TOL-o-gus","Procedure for collecting and storing patient’s own blood several weeks prior to actual need; can then be used to replace blood lost during surgical procedure.","transfusion of the patient’s own blood","co","",[]],
["B cell","LĬM-fō-sīts","A type of lymphocyte that matures in bone marrow and differentiates into plasma cells to manufacture and secrete antibodies.","white cell that makes antibodies","im","Anatomy_and_Physiology",[]],
["band cell","","An immature neutrophil with a nucleus in the shape of a band; also called a stab cell; band cell counts are used to trace infections and other diseases","immature neutrophil","hb","",[]],
["basophil","BĀ-sō-fĭlz","A granular leukocyte that stains strongly with basic dyes; active in allergic reactions","white cell with dark-blue granules; active in allergy","hb","",[]],
["basophilic","bay-soh-FILL-ik","Pertaining to [a leukocyte] that attracts a basic pH stain.","staining readily with basic dyes","hb","",[]],
["Bence Jones protein","","A protein that appears in the urine of patients with multiple myeloma","abnormal protein in the urine of myeloma","dx","",[]],
["bilirubin","bil-ih-RU-bin","A pigment derived from the breakdown of hemoglobin and eliminated by the liver in bile","orange pigment from haemoglobin breakdown","hb","",[]],
["blood","blud","The fluid that circulates in the cardiovascular system (roots: hem/o, hemat/o)","fluid of plasma and cells pumped round the body","hb","",[]],
["blood analyzer","","Automated machine that analyzes different characteristics of blood specimen, such as complete blood count, erythrocyte sedimentation rate, and blood-clotting tests.","automated blood counting machine","dx","",[]],
["blood culture and sensitivity","","Sample of blood is incubated in laboratory to check for bacterial growth; if bacteria are present, they are identified and tested to determine to which antibiotics they are sensitive.","blood culture and antibiotic sensitivity","dx","",["C&S"]],
["blood transfusion","trans-FYOO-zhun","Administration of whole blood or a component, such as packed red cells, to replace blood lost through trauma, surgery, or disease","giving blood or blood products into a vein","co","",[]],
["bone marrow aspiration","ăs-pĭ-RĀ-shŭn","Removal of a small amount of tissue (bone marrow biopsy) to diagnose blood disorders (e.g., anemias), cancers, or infectious diseases or to gather cells for later infusion into a patient (bone marrow transplantation)","drawing marrow out with a needle","dx","",[]],
["bone marrow transplant","","Diseased bone marrow is destroyed by irradiation and chemotherapy and replaced from a healthy donor to simulate production of normal blood cells; used to treat aplastic anemia, leukemia, and certain cancers","replacing diseased marrow with donor marrow","dx","",["BMT"]],
["candidiasis","","Opportunistic infection caused by the fungus Candida albicans, affecting the digestive tract, respiratory tract, skin, and some reproductive organs.","yeast infection","im","",[]],
["capillaries","KĂP-ĭ-lār-ēz","Microscopic blood vessels that connect the ends of the smallest arteries (arterioles) with the smallest veins (venules) of the circulatory system","tiny vessels","ly","",[]],
["carbapenem-resistant Enterobacteriaceae infection","kar-bah-PEN-em / ree-ZISS-tent / en-ter-oh-bak-teer-ee-AY-see-ee","Infection by group of bacteria that have resistance to powerful group of antibiotics called carbapenems; almost all infections occur in healthcare settings.","gut bacteria resistant to carbapenems","dx","",["CRE"]],
["CD4+ T lymphocyte count","","A count of the T cells that have the CD4 receptors for the AIDS virus (HIV); a count of less than 200/μL of blood signifies severe immunodeficiency","count of helper T cells","dx","",[]],
["cell-mediated immunity","","A type of acquired active immunity provided by the action of T cells.","immunity carried out by T cells","im","",[]],
["chemotherapy","KEE-moh-ther-ah-pee","treatment of malignancies using chemical agents and drugs","drug treatment of cancer","dx","",[]],
["Clostridium difficile infection","klaw-STRIH-dee-um / dif-ee-SEEL","Infection with C. diff bacteria causes inflammation of colon; most commonly occurs in persons with conditions requiring extended use of antibiotics.","C. diff infection of the bowel","dx","",[]],
["coagulants","kō-ĂG-yū-lĕnts","Clotting agents to aid in blood clotting.","drugs that promote clotting","co","",[]],
["coagulate","koh-AG-yoo-late","To convert from a liquid to a gel or solid, as in blood coagulation.","clotting","co","",[]],
["coagulation","kō-ăg-yū-LĀ-shŭn","The process of blood clotting to stop bleeding.","the process of blood clotting","co","Anatomy_and_Physiology",["PT","PTT"]],
["complement","COM-pleh-ment","A group of plasma enzymes that interacts with antibodies","proteins that complete the antibody attack","im","",[]],
["complete blood count","","Combination of blood tests including red blood cell count (RBC), white blood cell count (WBC), hemoglobin (Hgb), hematocrit (Hct), white blood cell differential, and platelet count.","full blood count","dx","",["CBC"]],
["contact dermatitis","der-mah-TYE-tis","Skin irritation caused by skin coming into direct contact with an allergen; symptoms may include redness, itching, rash, and blisters.","rash from touching an irritant","im","",[]],
["Cooley anemia","","A form of thalassemia (hereditary anemia) that affects production of the β (beta) hemoglobin chain; thalassemia major","thalassaemia major","hb","",[]],
["Coombs test","","A test for detection of antibodies to red blood cells, such as those appearing in cases of autoimmune hemolytic anemias","test for antibodies on red cells","dx","",[]],
["corpuscle","KOR-pus-l","A small mass or body; a blood corpuscle is a blood cell","small body; a blood cell","hb","",[]],
["corticosteroids","kor-tih-ko-STER-oyds","Natural or synthetic adrenal cortex hormone; has very strong anti-inflammatory properties; particularly useful in treating autoimmune diseases.","anti-inflammatory steroid drugs","dx","",[]],
["cross-matching","","Testing the compatibility of donor and recipient blood in preparation for a transfusion; donor red cells are mixed with recipient serum to look for an immunologic reaction; similar tests are done on tissues before transplantation","testing donor and recipient blood together","co","",[]],
["cryoprecipitate","kri-o-pre-SIP-ih-tate","A sediment obtained by cooling; the fraction obtained by freezing blood plasma contains clotting factors","cold-precipitated clotting factor concentrate","co","",[]],
["cytokine storm","SIGH-toe-kine storm","A severe immune reaction in which the body releases too many cytokines into the blood too quickly, leading to multi-organ failure.","uncontrolled inflammatory storm","dx","Pathology_and_Disorders",["SIRS","MODS"]],
["cytokines","SIGH-toh-kighnz","proteins that signal cells to start the immune response. Examples are interferons and interleukins.","messenger proteins of the immune system","im","",[]],
["cytomegalovirus","","Opportunistic infection caused by Herpesviridae that can infect various cells or organs (e.g., the eyes); causes swelling.","herpes-family virus dangerous in weak immunity","im","",[]],
["cytoplasm","SĪ-tō-plazm","The solution that fills the cell and that is enclosed by the cell membrane.","cell fluid outside the nucleus","hb","",[]],
["cytotoxic T cell","sī-tō-TŎK-sĭk sĕlz","CD8 cells that help in the destruction of infected cells.","cell-killing T cells","im","",[]],
["delayed hypersensitivity reaction","","An allergic reaction involving T cells that takes at least 12 hours to develop; examples are various types of contact dermatitis, such as poison ivy or poison oak; the tuberculin reaction (test for TB); and rejections of transplanted tissue","type IV allergy appearing after 1–2 days","im","",[]],
["desensitization","de-sen-sih-tih-ZA-shun","Treatment of allergy by small injections of the offending allergen, causing an increase of antibody to destroy the antigen rapidly on contact","gradual reduction of allergic sensitivity","im","",[]],
["disseminated intravascular coagulation","","Widespread clot formation in the microscopic vessels; may be followed by bleeding caused by depletion of clotting factors","widespread clotting that uses up clotting factors","co","",["DIC"]],
["dyscrasia","dĭs-KRĀ-zē-ă","A general term indicating the presence of a disease affecting the blood, often with abnormal material present.","any abnormal state of the blood","hb","Pathology_and_Disorders",[]],
["dyspnea","dĭsp-NĒ-ă","difficult breathing","shortness of breath","dx","",[]],
["ecchymosis","ek-ih-MO-sis","A collection of blood under the skin caused by leakage from small vessels","large bruise","co","",[]],
["edema","eh-DEE-mah","Pooling of water in body tissues caused when too much water escapes from the blood.","swelling from fluid in tissue","ly","",[]],
["electrolyte","e-LEK-tro-lite","A substance that separates into charged particles (ions) in solution; a salt; term also applied to ions in body fluids","ion-forming salt in body fluids","hb","",[]],
["electrophoresis","ē-lĕk-trō-FŌR-ē-sĭs","Separation of particles in a liquid by application of an electrical field; used to separate components of blood","separating proteins with an electric current","dx","",[]],
["elephantiasis","el-eh-fan-TYE-ah-sis","lymphatic disease caused by filaria (parasitic roundworm) that is characterized by swelling of the legs and male scrotum","massive limb swelling from lymphatic blockage","ly","",[]],
["ELISA","ĬM-yū-nō-SŌR-bent, ĕ-LĪ-ză, ĕ-LĪ-să","Enzyme-linked immunosorbent assay; a highly sensitive immunologic test used to diagnose HIV infection, hepatitis, and Lyme disease, among others","enzyme-based screening test for antibodies or antigens","dx","",[]],
["embolectomy","ĕm-bō-LĔK-tō-mē","excision, removal of an embolus (plug)","removal of an embolus","co","",[]],
["enzyme immunoassay","ĬM-yū-nō-ĂS-ā, ĭm-YŪ-nō-ĂS-ā","A blood serum test for HIV and other antibodies.","antibody test using an enzyme signal","dx","",["EIA"]],
["eosinophil","ē-ō-SĬN-ō-fĭlz","A granular leukocyte that stains strongly with acidic dyes; active in allergic reactions and defense against parasites","white cell with red granules; allergy and parasites","hb","",[]],
["eosinophilic","ee-oh-sin-oh-FILL-ik","Pertaining to [a leukocyte] that attracts a rosy red stain.","staining readily with acidic red dye","hb","",[]],
["epinephrine","ep-ih-NEF-rin","A powerful stimulant produced by the adrenal gland and sympathetic nervous system; activates the cardiovascular, respiratory, and other systems needed to meet stress; used as a drug to treat severe allergic reactions and shock; also called adrenaline","adrenaline","im","",[]],
["erythema","","Redness of the skin.","redness of the skin","hb","",[]],
["erythremia","er-ih-THREE-mee-ah","Abnormal increase in the number of red blood cells.","abnormal rise in red cells","hb","",[]],
["erythroblastosis fetalis","ĕ-RĬTH-rō-blăs-TŌ-sĭs fē-TĂL-ĭs","Disease that results from incompatibility between the blood of a mother and her fetus, usually involving Rh factor; also called erythroblastosis fetalis","haemolytic disease of the newborn","co","",["HDN"]],
["erythrocyte","ĕ-RĬTH-rō-sīts","A red blood cell responsible for carrying oxygen and carbon dioxide using hemoglobin.","red blood cell","hb","Anatomy_and_Physiology",["RBC","Hgb","Hct"]],
["erythrocyte sedimentation rate","eh-RITH-roh-sight / sed-ih-men-TAY-shun","Blood test to determine rate at which mature red blood cells settle out of blood after addition of anticoagulant; indicates presence of inflammatory disease.","sedimentation rate test (ESR)","dx","",["ESR"]],
["erythrocytic","eh-rith-roh-SIT-ik","Pertaining to a red blood cell.","relating to red blood cells","hb","",[]],
["erythrocytopenia","eh-rith-roh-sigh-toh-PEE-nee-ah","Decrease in the number of red blood cells. Also known as erythropenia.","shortage of red blood cells","hb","",[]],
["erythrocytosis","eh-rith-ro-si-TO-sis","Increase in the number of red cells in the blood; may be normal, such as to compensate for life at high altitudes, or abnormal, such as in cases of pulmonary or cardiac disease","excess of red blood cells","hb","",[]],
["erythropenia","ĕ-rĭth-rō-PĒ-nē-ă","A disorder with an abnormally low number of red blood cells.","reduced red blood cells","hb","",[]],
["erythropoiesis","eh-rith-roh-poy-EE-sis","Production of red blood cells.","production of red blood cells","hb","",[]],
["erythropoietin","ĕ-rĭth-rō-POY-ĕ-tĭn","A hormone produced in the kidneys that stimulates red blood cell production in the bone marrow; this hormone is now made by genetic engineering for clinical use","kidney hormone that drives red cell production","hb","Anatomy_and_Physiology",["EPO"]],
["Fanconi syndrome","fan-KO-ne","Congenital aplastic anemia that appears between birth and 10 years of age; may be hereditary or caused by damage before birth, as by a virus","inherited marrow failure syndrome","hb","",[]],
["ferritin","FER-ih-tin","An intracellular protein that stores iron and releases it in a controlled fashion; also acts as an acute-phase reactant elevated in inflammation.","iron-storage protein","dx","Laboratory_and_Diagnostics",[]],
["fibrin","FI-brin","The protein that forms a clot in the blood coagulation process","protein threads forming a clot","co","",[]],
["fibrin clot","FĪ-brĭn klot","The clot formed by the combination of thromboplastin, calcium, and clotting factors.","clot meshwork of protein threads","co","",[]],
["fibrinogen","fī-BRĬN-ō-jĕn","A plasma protein essential for blood coagulation.","plasma precursor of clot threads","co","",[]],
["fibrinolytic","fye-brin-oh-LIT-ik","Able to dissolve existing blood clots.","dissolving clots","co","",[]],
["fibrinous","FYE-brin-us","Pertaining to fibers.","thread-like","co","",[]],
["formed elements","","The solid portion of the blood produced in the bone marrow, consisting of red blood cells, white blood cells, and platelets.","cells and platelets of the blood","hb","",[]],
["gamma globulin","GĂ-mă GLŎB-yū-lĭnz","A preparation of collected antibodies given to prevent or lessen certain diseases, such as hepatitis A, varicella, and rabies.","antibody-rich plasma fraction","im","",[]],
["globin","GLŌ-bĭn","A protein that makes up part of hemoglobin.","protein part of the red cell pigment","hb","",[]],
["globulin","GLŎB-yū-lĭn","Plasma proteins including alpha, beta (which transport lipids), and gamma types.","a group of plasma proteins","hb","",[]],
["glutamine","GLOO-tah-meen","A conditionally essential amino acid during critical illness; serves as a primary cellular fuel for enterocytes and lymphocytes.","amino acid that supports immunity","dx","Immunonutrition_and_Pharmacology",["Gln"]],
["graft versus host disease","","An immunologic reaction of transplanted lymphocytes against tissues of the host; a common complication of bone marrow transplantation","donor immune cells attacking the recipient","im","",["GVHR","GVHD"]],
["granulocyte","GRĂN-yū-lō-sīts","A white blood cell that has visible granules in its cytoplasm; granulocytes include neutrophils, basophils, and eosinophils","white cell with granules","hb","",[]],
["hairy cell leukemia","","A form of leukemia in which cells have filaments, making them look hairy","leukaemia with “hairy” B cells","hb","",[]],
["helper T cell","","CD4 cells that stimulate the immune response.","CD4 commander of the immune response","im","",[]],
["hematic","hee-MAT-ik","Pertaining to blood.","relating to blood","hb","",[]],
["hematinic","hee-mah-TIN-ik","Increases number of erythrocytes or amount of hemoglobin in blood.","agent that builds blood","dx","",[]],
["hematocrit","HĒ-mă-tō-krĭt","Measurement of the percentage or volume of packed red blood cells within the total volume of blood.","percentage of red cells in blood (packed cell volume)","hb","Laboratory_and_Diagnostics",["HCT","PCV","Hct"]],
["hematologist","hee-mah-TAHL-oh-jist","a medical practitioner who specializes in the diagnosis and treatment of blood disorders","blood specialist","hb","",[]],
["hematology","hee-mah-TALL-oh-jee","Branch of medicine specializing in treatment of diseases and conditions of blood; physician is a hematologist.","study of the blood","hb","",[]],
["hematoma","hēm-ă-TŌ-mă","Collection of blood under skin as result of blood escaping into tissue from damaged blood vessels; commonly referred to as a bruise.","collection of blood in tissue","co","",[]],
["hematopoiesis","hē-mă-tō-poy-Ē-sĭs","The production and development of all blood cells, normally occurring in the bone marrow.","formation of blood cells","hb","Anatomy_and_Physiology",[]],
["heme","hēm","A pigment containing iron, part of hemoglobin.","iron-containing pigment of haemoglobin","hb","",[]],
["hemocytoblast","hee-moh-SIGHT-oh-blast","An immature blood cell that can develop into any type of mature blood cell. Also known as stem cells.","blood-forming stem cell","hb","",[]],
["hemodialysis","HĒ-mō-dī-ĂL-ĭ-sĭs","External dialysis performed by separating solid substances and water from the blood.","filtering the blood by machine","dx","",[]],
["hemoglobin","HĒ-mō-glō-bĭn","The iron-containing protein pigment within red blood cells that transports oxygen and carbon dioxide.","oxygen-carrying protein of red cells","hb","Laboratory_and_Diagnostics",["Hgb","Hb"]],
["hemolysis","hē-MŎL-ĭ-sĭs","The rupture or destruction of red blood cells and the release of hemoglobin.","destruction of red blood cells","hb","Pathology_and_Disorders",[]],
["hemolytic anemia","hee-moh-LIT-ik / ah-NEE-mee-ah","Anemia that develops as result of destruction of erythrocytes.","anaemia from red cell destruction","hb","",[]],
["hemolytic reaction","hee-moh-LIT-ik","Destruction of patient’s erythrocytes that occurs when receiving a transfusion of incompatible blood type; also called transfusion reaction.","transfusion reaction with red cell destruction","co","",[]],
["hemophilia","hē-mō-FĬL-ē-ă","Hereditary blood disease in which blood-clotting time is prolonged due to lack of one vital clotting factor; transmitted by sex-linked trait from females to males, appearing almost exclusively in males.","inherited bleeding disorder","co","Pathology_and_Disorders",[]],
["hemophobia","hē-mō-FŌ-bē-ă","fear of blood","fear of blood","hb","",[]],
["hemopoietic stem cell","he-mo-poy-EH-tik","A primitive bone marrow cell that gives rise to all varieties of blood cells","stem cell that makes all blood cells","hb","",[]],
["hemorrhage","HEM-eh-rij","Blood flowing out of blood vessel (i.e., bleeding).","bleeding","co","",[]],
["hemorrhagic anemia","hem-o-RAJ-ik","Anemia that results from blood loss, as from an injury or internal bleeding","anaemia from blood loss","co","",[]],
["hemosiderosis","he-mo-sid-er-O-sis","A condition involving the deposition of an iron-containing pigment (hemosiderin) mainly in the liver and the spleen; the pigment comes from hemoglobin released from disintegrated red blood cells","iron deposits in tissues","hb","",[]],
["hemostasis","hē-mō-STĀ-sĭs","The stoppage of bleeding or the stagnation of blood flow.","stopping of bleeding","co","Anatomy_and_Physiology",[]],
["hemostatics","hē-mō-STĂT-ĭks","Medications to stop bleeding.","drugs that stop bleeding","co","",[]],
["heparin","HĔP-ă-rĭn","A substance found throughout the body that inhibits blood coagulation; an anticoagulant","natural anticoagulant substance","co","",[]],
["hepcidin","HEP-sih-din","A liver-derived hormone that regulates iron homeostasis; elevated in critical illness causing iron sequestration.","iron-regulating hormone from the liver","dx","Anatomy_and_Physiology",[]],
["high-sensitivity C-reactive protein","","A highly sensitive marker of systemic inflammation and tissue damage, synthesized by the liver.","sensitive inflammation marker","dx","Laboratory_and_Diagnostics",["hs-CRP"]],
["histamine","HĬS-tă-mēn","A substance involved in allergic reactions released by basophils.","allergy chemical released by mast cells","im","",[]],
["histiocytic lymphoma","HĬS-tē-ō-SĪT-ĭk lĭm-FŌ-mă","A disease with malignant cells that resemble large macrophages called histiocytes.","lymphoma of tissue macrophage cells","ly","",[]],
["HIV antigen/antibody immunoassay","im-yoo-noh-ASS-ay","Blood test for HIV infection; tests for both HIV antigens and antibodies.","combined test for HIV antigen and antibody","dx","",[]],
["hives","","Appearance of wheals as part of allergic reaction.","itchy raised wheals on the skin","im","",[]],
["Hodgkin lymphoma","HŎJ-kĭn","Malignant disease originating in the lymphocytes (part of the body's immune system) that occurs most often in young adults and characterized by the presence of unique Reed-Sternberg cells (malignant cells) in the lymph nodes; also called Hodgkin disease","lymph node cancer with Reed-Sternberg cells","ly","Pathology_and_Disorders",["HD"]],
["homeostasis","","Balanced yet varied state.","keeping the internal environment stable","hb","",[]],
["homologous transfusion","ho-MOL-o-gus","Blood from animals of the same species, such as human blood used for transfusion from one person to another; blood used for transfusions must be compatible with the recipient's blood","transfusion of another person’s blood","co","",[]],
["human immunodeficiency virus","ĬM-yū-nō-dē-FĬSH-ĕn-sē VĪ-rŭs","The most widespread virus that attacks the immune system, spread by sexual contact, exchange of bodily fluids, or intravenous exposure.","virus that destroys helper T cells","im","Pathology_and_Disorders",["HIV","AIDS"]],
["humoral immunity","HYŪ-mōr-ăl ĭ-MYŪ-nĭ-tē","Immunity provided by plasma cells, which produce antibodies called immunoglobulins.","antibody-based immunity","im","",[]],
["hyperchromia","high-per-KROH-mee-ah","Excessively pigmented (colored) red blood cells caused by high hemoglobin content.","red cells stained more deeply than normal","hb","",[]],
["hyperlipidemia","high-per-lip-ih-DEE-mee-ah","Condition of having too high a level of lipids such as cholesterol in bloodstream; risk factor for developing atherosclerosis and coronary artery disease.","high blood fats","hb","",[]],
["hypersensitivity","HĪ-pĕr-sĕn-sĭ-TĬV-ĭ-tē","An immunologic reaction to a substance that is harmless to most people; allergy","exaggerated immune reaction","im","",[]],
["hypersplenism","hī-pĕr-SPLĒN-ĭzm","Overactive spleen.","overactive spleen","ly","",[]],
["hypochromia","high-poh-KROH-mee-ah","Underpigmented red blood cells caused by low hemoglobin content.","pale-staining red cells","hb","",[]],
["hypochromic anemia","high-poh-KROHM-ik / ah-NEE-mee-ah","Anemia resulting from having insufficient hemoglobin in erythrocytes; named because hemoglobin molecule is responsible for dark red color of erythrocytes.","anaemia with pale red cells","hb","",[]],
["idiopathic thrombocytopenic purpura","","A clotting disorder caused by destruction of platelets that usually follows a viral illness; causes petechiae and hemorrhages into the skin and mucous membranes","immune destruction of platelets of unknown cause","co","",["ITP"]],
["immune response","ĭm-MŪN","Defense function of the body that protects it against invading pathogens, foreign tissues, and malignancies","the body’s defence reaction","im","",[]],
["immunity","ĭ-MYŪ-nĭ-tē","The state of being protected against disease and the body's specific defenses that provide resistance to pathogens.","the body’s protected state against disease","im","Anatomy_and_Physiology",[]],
["immunization","ĭm-ū-nĭ-ZĀ-shŭns","protection from communicable diseases by administration of a weakened or killed pathogen, or a protein of a pathogen, to cause the immune system to create antibodies for future protection; vaccination","vaccination","im","",[]],
["immunodeficiency","ĭm-ū-nō-dĕ-FĬSH-ĕn-sē","Any of a group of diseases caused by a defect in the immune system and generally characterized by susceptibility to infections and chronic diseases","disease of weakened immunity","im","",[]],
["immunogen","ĭ-MŪ-nō-jĕn","forming, producing, origin of immunity","substance that produces immunity","im","",[]],
["immunoglobulin","ĬM-yū-nō-GLŎB-yū-lĭnz","An antibody; immunoglobulins fall into five classes, each abbreviated with a capital letter: IgG, IgM, IgA, IgD, IgE","antibody protein","im","",["Ig"]],
["immunologist","im-yoo-NOL-oh-jist","a medical practitioner specializing in the immune system","immunity specialist","im","",[]],
["immunology","im-yoo-NALL-oh-jee","Branch of medicine concerned with diagnosis and treatment of infectious diseases and other disorders of immune system; physician is an immunologist.","study of immunity","im","",[]],
["immunosuppressant","ĭm-ū-nō-sū-PRĔS-ănts","Suppress the immune response to prevent organ rejection after transplantation or slow the progression of autoimmune disease","drugs that suppress the immune system","dx","",[]],
["immunosuppression","im-u-no-su-PRESH-un","Depression of the immune response; may be correlated with disease but also may be induced therapeutically to prevent rejection in cases of tissue transplantation","suppression of immunity","im","",[]],
["immunosuppressive disease","ĬM-yū-nō-sŭ-PRĔS-ĭv di-ZĒZ","A disease that suppresses the ability of the immune system to defend against infection.","disease that suppresses the immune system","im","",[]],
["immunotherapy","IM-yoo-noh-thair-ah-pee","Giving patient injection of immunoglobulins or antibodies in order to treat disease; also includes treatments to boost activity of immune system.","treatment that harnesses immunity","dx","",[]],
["infectious mononucleosis","mŏn-ō-nū-klē-Ō-sĭs","An acute infectious disease caused by Epstein-Barr virus (EBV); characterized by fever, weakness, lymphadenopathy, hepatosplenomegaly, and atypical lymphocytes","glandular fever","im","",[]],
["inflammation","in-flah-MAY-shun","Tissues’ response to injury from pathogens or physical agents; characterized by redness, pain, swelling, and feeling hot to the touch.","redness, heat, swelling and pain after injury","im","",[]],
["interferons","ĭn-tĕr-FĒR-ŏnz","Proteins called lymphokines produced by T cells that have antiviral properties.","antiviral messenger proteins","im","",[]],
["interleukins","ĭn-tĕr-LŪ-kĭnz","Proteins called lymphokines produced by T cells that affect the actions of other cells in the body.","messenger proteins between white cells","im","",[]],
["interstitial fluid","ĭn-tĕr-STĬSH-ăl","The fluid placed between the tissue spaces and cells.","fluid between tissue cells","ly","Anatomy_and_Physiology",[]],
["intrinsic factor","In-TRIN-sik","A substance produced in the stomach that aids in the intestinal absorption of vitamin B12, necessary for the manufacture of red blood cells; lack of intrinsic factor causes pernicious anemia","stomach protein needed to absorb vitamin B12","hb","",[]],
["iron-deficiency anemia","","Anemia resulting from not having sufficient iron to manufacture hemoglobin.","anaemia from lack of iron","hb","",[]],
["Kaposi sarcoma","KĂP-ō-sē săr-KŌ-mă","Malignancy of connective tissue, including bone, fat, muscle, and fibrous tissue, that is commonly fatal (because the tumors readily metastasize to various organs) and closely associated with AIDS","cancer with purple skin lesions","im","",["KS"]],
["leukemia","lū-KĒ-mē-ă","Cancer located in red bone marrow tissue responsible for producing white blood cells; results in large number of abnormal and immature leukocytes circulating in bloodstream.","blood cancer","hb","Pathology_and_Disorders",["AML","CML","ALL","CLL"]],
["leukocyte","LŪ-kō-sīts","A white blood cell that functions as part of the immune system to fight infection.","white blood cell","hb","Anatomy_and_Physiology",["WBC","PMN"]],
["leukocytic","loo-koh-SIT-ik","Pertaining to a white blood cell.","relating to white blood cells","hb","",[]],
["leukocytosis","loo-koh-sigh-TOH-sis","Abnormal increase in the number of white blood cells.","raised white cell count","hb","",[]],
["leukopenia","loo-koh-PEE-nee-ah","Condition of having too few white blood cells.","low white cell count","hb","",[]],
["lingual tonsils","LING-gwal","tonsils located at the base of the tongue","tonsils at the back of the tongue","ly","",[]],
["lymph","lĭmf","A fluid collected from tissues that contains mostly white blood cells and flows through the lymphatic vessels.","clear tissue fluid in drainage vessels","ly","Anatomy_and_Physiology",[]],
["lymph node","LIMF NODE","small, bean-shaped mass of lymphatic tissue that filters bacteria and foreign material from the lymph; located on larger lymph vessels in the cervical, mediastinal, axillary, and inguinal regions","bean-shaped filter of tissue fluid","ly","Anatomy_and_Physiology",[]],
["lymph node dissection","","Removal of cancerous lymph nodes for microscopic examination.","removal and examination of lymph nodes","ly","",[]],
["lymphadenectomy","lĭm-făd-ĕ-NĔK-tō-mē","The removal of a lymph node.","removal of lymph nodes","ly","",[]],
["lymphadenitis","lĭm-făd-ĕn-Ī-tĭs","Inflammation and enlargement of the lymph nodes, usually as a result of infection","inflammation of lymph nodes","ly","",[]],
["lymphadenopathy","lĭm-făd-ĕ-NŎP-ă-thē","chronic or excessively swollen lymph nodes; any disease of the lymph nodes","disease or enlargement of lymph nodes","ly","",[]],
["lymphadenotomy","lĭm-făd-ĕ-NŎ-tō-mē","An incision into a lymph node.","incision into a lymph node","ly","",[]],
["lymphangial","lim-FAN-jee-al","Pertaining to lymph vessels.","relating to lymph vessels","ly","",[]],
["lymphangiectomy","lĭm-făn-jē-ĔK-tō-mē","Removal of a lymph vessel","removal of lymph vessels","ly","",[]],
["lymphangiogram","lim-FAN-jee-oh-gram","X-ray record of lymphatic vessels produced by lymphangiography.","X-ray image of lymph vessels","ly","",[]],
["lymphangiography","lĭm-făn-jē-ŎG-ră-fē","Radiographic examination of lymph glands and lymphatic vessels after an injection of a contrast medium to view the path of lymph flow as it moves into the chest region","imaging the lymph vessels","ly","",[]],
["lymphangioma","lĭm-făn-jē-Ō-mă","tumor of a lymph vessel","benign tumour of lymph vessels","ly","",[]],
["lymphangiotomy","lim-FAN-jee-OT-oh-mee","incision of a lymph vessel","incision into a lymph vessel","ly","",[]],
["lymphangitis","lim-fan-JIGH-tis","inflammation of the lymph vessels or nodes","inflammation of lymph vessels","ly","",[]],
["lymphatic","lim-FAH-tick","the body's other circulatory system","relating to the tissue-fluid drainage system","ly","",[]],
["lymphatic pathways","lĭm-FĂD-ĭk PAHth-wā","The vessels that transport lymph (the fluid of the lymphatic system) around the body.","routes of lymph drainage","ly","",[]],
["lymphatic system","lihm-FAT-tik SIS-tuhm","collectively, the vessels, nodes, and capillaries that carry the lymph and its disease-fighting cells to the areas in which they are needed","lymph vessels and immune defence","ly","",[]],
["lymphatic vessels","LIMF VESS-elz","vascular system of the lymphatic system","vessels carrying lymph","ly","",[]],
["lymphedema","lĭmf-ĕ-DĒ-mă","Debilitating condition of localized fluid retention and tissue swelling caused by a blockage in the lymphatic system that prevents lymph fluid in the upper limbs from draining adequately","swelling from trapped lymph","ly","",[]],
["lymphocyte","LĬM-fō-sīts","Type of white blood cell (WBC) found in the lymph nodes, spleen, bloodstream, and lymph that functions in the body's immune system by recognizing and deactivating foreign substances (antigens)","white cell of the lymphatic system","hb","",[]],
["lymphocytic","lim-foh-SIT-ik","Pertaining to a [white] cell formed in lymphatic tissue.","relating to lymph-system white cells","hb","",[]],
["lymphocytic leukemia","lim-foh-SIT-ik / loo-KEE-mee-ah","Type of leukemia in which abnormal white blood cells are lymphocytes; may be acute (rapid onset and progression) or chronic (slow onset and progression).","leukaemia of lymph-system white cells","hb","",[]],
["lymphocytic lymphoma","lĭm-fō-SĬT-ĭk lĭm-FŌ-mă","A disease with malignant cells that resemble large lymphocytes.","lymphoma of small lymph-system cells","ly","",[]],
["lymphocytosis","lim-fo-si-TO-sis","An increase in the number of circulating lymphocytes","raised lymph-cell count","hb","",[]],
["lymphography","lim-FOG-ruh-fee","visualization of lymphatics and lymph nodes by radiography after injecting a contrast dye","imaging the lymphatic system","ly","",[]],
["lymphoid nodules of the small intestine","LIMF-oid NOD-yulz","collections of spherical masses of lymphoid cells closely packed together; Peyer's patches","lymph nodules of the small intestine","ly","",[]],
["lymphoid tissue","LIM-foyd","resembling or pertaining to lymph tissue","tissue forming lymph cells","ly","",[]],
["lymphoma","lĭm-FŌ-mă","Cancer of the lymph nodes.","cancer of lymphatic tissue","ly","",[]],
["lymphopathy","lim-FOP-ah-thee","disease of the lymph vessels or nodes","disease of lymph vessels or nodes","ly","",[]],
["lymphopoiesis","lĭm-fō-poy-Ē-sĭs","formation, production of lymph","formation of lymph and lymph cells","ly","",[]],
["lymphoscintigraphy","lim-foh-sin-TIG-grah-fee","process of recording the lymphatic vessels or lymph nodes to produce images that detect metastatic tumors, lymphedema or lymph node blockage","nuclear scan of lymph drainage","ly","",[]],
["macrocyte","MĂK-rō-sīt","large cell","abnormally large red cell","hb","",[]],
["macrophage","MĂK-rō-fāj-ĕz","A large phagocytic cell of the tissues and blood that engulfs foreign particles and debris.","large eating cell","im","Anatomy_and_Physiology",[]],
["magnetic resonance imaging","REZ-oh-nens","Use of electromagnetic energy to produce image of soft tissues in any plane of body.","MRI imaging","dx","",["MRI"]],
["megakaryocyte","mĕg-ă-KĀR-ē-ō-sīts","Large cells in red bone marrow from which platelets break off.","giant marrow cell that sheds platelets","co","",[]],
["megaloblastic anemia","meg-ah-loh-BLAS-tick","Anemia characterized by large immature red blood cells in the bone marrow due to lack or ineffective use of Vitamin B12 or folate.","anaemia with large immature red cells","hb","",[]],
["megalocytoblast","meg-ah-loh-SIGHT-oh-blast","Large immature cell.","giant red cell precursor","hb","",[]],
["metastasis","mĕ-TĂS-tă-sĭs","How far the disease has spread.","spread of cancer","dx","",[]],
["methicillin-resistant Staphylococcus aureus infection","meth-ih-SIL-in / ree-ZISS-tent / staf-ih-loh-KOK-us / OR-ee-iss","Infecting bacteria are resistant to many common antibiotics, such as methicillin, oxacillin, penicillin, and amoxicillin; spread through contact with contaminated surface.","MRSA infection","dx","",["MRSA"]],
["microcyte","MĪ-krō-sīt","small cell","abnormally small red cell","hb","",[]],
["microphage","MĪK-rō-fāj-ĕz","Phagocytes of the tissues and blood.","small eating cells","im","",[]],
["monoclonal antibody","mon-o-KLO-nal","A pure antibody produced in the laboratory; used for diagnosis and treatment","laboratory-made identical antibody","im","",[]],
["monocyte","MŎN-ō-sīts","Large WBCs formed in the bone marrow that circulate in the bloodstream and destroy pathogenic bacteria through phagocytosis","single-nucleus white blood cell (monocyte)","hb","",[]],
["monocytic","mon-oh-SIT-ik","Pertaining to a [white] cell with a single, large nucleus.","relating to large single-nucleus white cells","hb","",[]],
["multiple myeloma","MŬL-tĭ-pl mī-ĕ-LŌ-mă","Originates in plasma cells (type of lymphocyte responsible for making antibodies); over time, these malignant cells collect in bone marrow, resulting in a bone marrow tumor.","cancer of plasma cells in the marrow","hb","Pathology_and_Disorders",[]],
["Mycobacterium avium-intracellulare","","Opportunistic infection caused by a bacterium found in soil and water, leading to systemic infection with fever, diarrhea, lung and blood disease, and wasting.","MAI lung infection in weak immunity","im","",["MAI"]],
["myeloblasts","MĪ-ĕ-lō-blăsts","Immature granulocytes that invade the bone marrow in certain leukemias.","precursor cells of granulocytes","hb","",[]],
["myelodysplastic syndrome","mi-eh-lo-dis-PLAS-tik","Poor development of the bone marrow resulting in a group of bone marrow disorders characterized by insufficient production of one or more types of blood cells.","marrow disorder making faulty blood cells","hb","",[]],
["myelofibrosis","mi-eh-lo-fi-BRO-sis","Condition in which bone marrow is replaced with fibrous tissue","scarring of the bone marrow","hb","",[]],
["myelogenous","mī-ĕ-lō-JĔN-ĭk","pertaining to forming, producing, origin in bone marrow or spinal cord","produced in the bone marrow","hb","",[]],
["myeloid leukemia","MY-eh-loyd / loo-KEE-mee-ah","Type of leukemia in which abnormal leukocytes are granulocytes (usually neutrophils); may be acute (rapid onset and progression) or chronic (slow onset and progression).","leukaemia of marrow-line cells","hb","",[]],
["myogenous","","Produced in muscle tissue.","produced in muscle tissue","hb","",[]],
["natural immunity","NACH-er-uhl ih-MYOO-ni-tee","resistance manifested by an individual who has not been immunized; immunity passed on from mother to fetus or from mother to baby in breast milk","inborn immunity","im","",[]],
["neutropenia","nu-tro-PE-ne-ah","A decrease in the number of neutrophils with increased susceptibility to infection; causes include drugs, irradiation, and infection; may be a side effect of treatment for malignancy","shortage of neutrophils","hb","",[]],
["neutrophil","NŪ-trō-fĭlz","A granular leukocyte that stains weakly with both acidic and basic dyes; the most numerous of the white blood cells; a type of phagocyte","commonest white cell; a germ eater","hb","",[]],
["neutrophilic","noo-troh-FILL-ik","Pertaining to [a leukocyte] that attracts a neutral pH stain.","staining with neutral dyes","hb","",[]],
["non-Hodgkin lymphoma","nŏn-HŎJ-kĭn lĭm-FŌ-mă","A group of more than 20 different types of lymphomas (except Hodgkin lymphoma) that occur in older adults but are not characterized by Reed-Sternberg cells (malignant cells)","lymphoma without Reed-Sternberg cells","ly","Pathology_and_Disorders",["NHL"]],
["normochromia","nor-moh-KROH-mee-ah","Red blood cells that are normally pigmented.","normal red cell colour","hb","",[]],
["nutritional anemia","nu-TRISH-un-al","Anemia resulting from a dietary deficiency, usually of iron, vitamin B12, or folate","anaemia from poor diet","hb","",[]],
["omega-3 fatty acids","oh-MAY-gah three","Polyunsaturated fatty acids (EPA and DHA) used in immunonutrition to modulate inflammatory pathways and reduce cytokine production.","anti-inflammatory fatty acids","dx","Immunonutrition_and_Pharmacology",["EPA","DHA"]],
["oncologist","on-KOL-oh-jist","a medical practitioner who specializes in the diagnosis and treatment of malignant tumors (cancer)","cancer specialist","dx","",[]],
["oncology","ŏn-KŎL-ō-jē","Branch of medicine concerned with the study of cancerous growths (malignancies)","study of cancer","dx","",[]],
["opportunistic infection","ŏp-pōr-tū-NĬS-tĭk in-FEK-shŭnz","Infectious diseases associated with patients who have compromised immune systems and therefore lowered resistance to infections and parasites.","infections exploiting weak immunity","im","",[]],
["palatine tonsils","PAL-ah-tine","tonsils located in the throat, normally referred to simply as tonsils","tonsils of the throat sides","ly","",[]],
["pancytopenia","PĂN-sī-tō-PĒ-nē-ă","A condition with an abnormally low number of all blood cell components (red cells, white cells, and platelets).","shortage of all blood cells","hb","Pathology_and_Disorders",[]],
["pathogen","PĂTH-ō-jĕns","Any disease-causing microorganism or substance.","disease-causing organism","im","Pathology_and_Disorders",[]],
["pathology","pah-THOL-oh-jee","Branch of medicine concerned with determining underlying causes and development of diseases; physician is a pathologist.","study of disease","dx","",[]],
["pernicious anemia","pĕr-NĬSH-ŭs","Anemia caused by failure of the stomach to produce intrinsic factor, a substance needed for the absorption of vitamin B12; this vitamin is required for the formation of erythrocytes","anaemia from lack of vitamin B12 absorption","hb","Pathology_and_Disorders",["PA"]],
["petechiae","pe-TE-ke-e","Pinpoint, flat, purplish-red spots caused by bleeding within the skin or mucous membrane (singular: petechia)","pinpoint bleeding spots","co","",[]],
["Peyer's patches","PEY-erz PACH-ez","collections of spherical masses of lymphoid cells closely packed together; lymphoid nodules of the small intestine","lymphoid patches in the small intestine","ly","",[]],
["pH","","A scale that measures the relative acidity or alkalinity of a solution; represents the amount of hydrogen ion in the solution","acidity scale","hb","",[]],
["phagocyte","FĂG-ō-sīt","white blood cell that clears away pathogens and debris","cell that engulfs foreign particles","im","",[]],
["phagocytosis","FĂG-ō-sī-TŌ-sĭs","The internalization or “eating” of the particles and the digestion of the particles for presentation to the appropriate cells of the immune system.","engulfing of invaders by cells","im","Anatomy_and_Physiology",[]],
["pharyngeal tonsils","far-IN-jee-al","tonsils commonly called the adenoids","tonsils behind the nose","ly","",[]],
["Philadelphia chromosome","","An abnormal chromosome found in the cells of most individuals with chronic granulocytic (myelogenous) leukemia","abnormal chromosome of chronic myeloid leukaemia","dx","",["Ph"]],
["phlebotomy","flĕ-BŎT-ō-mē","Incision into vein in order to remove blood for diagnostic test; also called venipuncture.","drawing blood from a vein","co","",[]],
["plasma","PLAZ-mah","The liquid portion of the blood. Because plasma is more than 90% water, it is thin and almost colorless when it is separated from the blood cells.","liquid part of blood","hb","Anatomy_and_Physiology",["FFP"]],
["plasma cell","PLĂZ-mă sĕlz","Cells differentiated from B cells that produce antibodies.","antibody-making cell","im","",[]],
["plasmapheresis","PLĂZ-mă-fĕ-RĒ-sĭs","Method of removing plasma from body without depleting formed elements; whole blood is removed and cells and plasma are separated; cells are returned to patient along with donor plasma transfusion.","separating and removing plasma","co","",[]],
["plasmin","PLAZ-min","An enzyme that dissolves clots; also called fibrinolysin","clot-dissolving enzyme","co","",[]],
["platelet","PLĀT-lĕts","A formed element of the blood that is active in hemostasis; a thrombocyte (root: thrombocyt/o)","cell fragment that starts clotting","co","",[]],
["Pneumocystis jiroveci","","Opportunistic infection caused by a fungus, formerly known as Pneumocystis carinii; causes a particularly dangerous type of pneumonia.","fungus causing pneumonia in AIDS","im","",[]],
["Pneumocystis pneumonia","nū-mō-SĬS-tĭs nū-MŌ-nē-ă","Pneumonia common in patients with weakened immune systems, such as AIDS patients, caused by Pneumocystis jiroveci fungus.","fungal pneumonia in weak immunity","im","",["PCP"]],
["poikilocytosis","poy-kil-oh-sigh-TOH-sis","Increased variation in the shape of cells, particularly red blood cells.","abnormally shaped red cells","hb","",[]],
["polycythemia","PŎL-ē-sī-THĒ-mē-ă","Any condition in which there is a relative increase in the percent of red blood cells in whole blood; may result from excessive production of red cells because of oxygen lack","excess red cells; thickened blood","hb","",[]],
["polycythemia vera","pol-e-si-THE-me-ah VE-rah","A condition in which overactive bone marrow produces too many red blood cells that interfere with circulation and promote thrombosis and hemorrhage; treated by blood removal; also called erythremia and Vaquez-Osler disease","primary marrow overproduction of red cells","hb","",[]],
["procalcitonin","pro-kal-sih-TOE-nin","A peptide precursor of the hormone calcitonin, closely related to the systemic response to severe bacterial infections.","marker of bacterial infection","dx","Laboratory_and_Diagnostics",["PCT"]],
["protease inhibitor","PRO-te-ase","An anti-HIV drug that acts by inhibiting an enzyme the virus needs to multiply","HIV drug blocking a viral enzyme","dx","",[]],
["prothrombin","prō-THRŎM-bĭn","A plasma protein essential for blood coagulation.","clotting protein made by the liver","co","",[]],
["prothrombin time","proh-THROM-bin","Indicates blood’s coagulation abilities by measuring how long it takes for a clot to form after prothrombin has been activated.","clotting time test (PT)","dx","",["PT"]],
["purpura","PŬR-pū-ră","A condition characterized by hemorrhages into the skin, mucous membranes, internal organs, and other tissues; thrombocytopenic purpura is caused by a deficiency of platelets","purple spots from bleeding under the skin","co","",[]],
["reaction","ree-AK-shun","an action of an antibody on a specific antigen; also, in reference to immune responses, an abnormal or unwanted reaction","the body’s response to a stimulus","im","",[]],
["red blood cell morphology","","Determines diseases such as sickle cell anemia through examination of specimen of blood for abnormalities in shape (morphology) of erythrocytes.","assessing red cell shape","dx","",[]],
["Reed-Sternberg cells","rede SHTERN-berg","Giant cells that are characteristic of Hodgkin disease; they usually have two large nuclei and are surrounded by a halo","giant cells typical of Hodgkin disease","dx","",[]],
["relapse","RĒ-lăps","Recurrence of the disease.","return of a disease","dx","",[]],
["remission","rē-MĬSH-ŭn","Disappearance of the disease.","disappearance of disease signs","dx","",[]],
["reticulocyte count","re-TIK-u-lo-site","Blood counts of reticulocytes, a type of immature red blood cell; reticulocyte counts are useful in diagnosis to indicate the rate of erythrocyte formation","count of young red cells","dx","",[]],
["retrovirus","rĕ-trō-VĪ-rŭs","A ribonucleic acid (RNA) virus that causes reversal of normal cell copying.","RNA virus that copies itself into DNA","im","",[]],
["rheumatoid arthritis","ROO-mah-toid ar-THRY-tuhs","systemic disease that affects the connective tissue; involves many joints, especially those of the hands and feet","autoimmune joint inflammation","im","",[]],
["sanguineous","sang-GWIN-ee-us","Pertaining to blood.","bloody","hb","",[]],
["sarcoidosis","săr-koy-DŌ-sĭs","Autoimmune disease of unknown cause that forms fibrous lesions commonly appearing in lymph nodes, liver, skin, lungs, spleen, eyes, and small bones of hands and feet.","disease forming granulomas in many organs","im","",[]],
["Schilling test","SHIL-ing","Test used to determine absorption of vitamin B12 by measuring excretion of radioactive B12 in the urine; used to distinguish pernicious from nutritional anemia","vitamin B12 absorption test","dx","",[]],
["sepsis","SEP-sis","Life-threatening organ dysfunction caused by a dysregulated host response to infection.","life-threatening response to infection","dx","Pathology_and_Disorders",["SIRS"]],
["septicemia","sep-tih-SEE-mee-ah","Having bacteria or their toxins in bloodstream; sepsis is term that means putrefaction or infection; commonly referred to as blood poisoning.","infection in the bloodstream","dx","",[]],
["seroconversion","se-ro-con-VER-zhun","The appearance of antibodies in the serum in response to a disease or an immunization","first appearance of antibodies in the blood","im","",[]],
["serum","SERE-um","The fraction of the plasma that remains after blood coagulation; it is the equivalent of plasma without its clotting factors","IV fluids","hb","",[]],
["severe combined immunodeficiency syndrome","","Disease seen in children born with nonfunctioning immune system; often these children are forced to live in sealed sterile rooms.","inborn failure of both B and T cell defence","im","",["SCIDS"]],
["sickle cell anemia","SĬ-kl sĕl ă-NĒ-mē-ă","A hereditary anemia caused by the presence of abnormal hemoglobin; red blood cells become sickle-shaped when they give up oxygen and interfere with normal blood flow to the tissues","anaemia with crescent-shaped red cells","hb","Pathology_and_Disorders",[]],
["sideroblastic anemia","sid-eh-ro-BLAS-tik","Anemia caused by inability to use available iron to manufacture hemoglobin; the excess iron precipitates in normoblasts (developing red blood cells)","anaemia with iron rings in red cell precursors","hb","",[]],
["Sjögren syndrome","SHO-gren","An autoimmune disease involving dysfunction of the exocrine glands and affecting secretion of tears, saliva, and other body fluids; deficiency leads to dry mouth, tooth decay, corneal damage, eye infections, and difficulty in swallowing","autoimmune dryness of eyes and mouth","im","",[]],
["spherocytic anemia","sfer-o-SIT-ik","Hereditary anemia in which red blood cells are round instead of disk shaped and rupture (hemolyze) excessively","anaemia with ball-shaped red cells","hb","",[]],
["spleen","splēn","A large lymphatic organ that filters and stores blood, destroys old red blood cells, and activates lymphocytes.","upper-left abdominal organ filtering blood","ly","Anatomy_and_Physiology",[]],
["splenectomy","splē-NĔK-tō-mē","Removal of the spleen, which is usually required if it is ruptured.","removal of the spleen","ly","",[]],
["splenic","SPLEN-ik","Pertaining to spleen.","relating to the spleen","ly","",[]],
["splenitis","splee-NY-tiss","inflammation of the spleen","inflammation of the spleen","ly","",[]],
["splenomegaly","splĕ-nō-MĔG-ă-lē","Enlargement of the spleen.","enlargement of the spleen","ly","Pathology_and_Disorders",[]],
["splenopathy","splee-NOP-ah-thee","any disease of the spleen","disease of the spleen","ly","",[]],
["splenorrhagia","splee-noh-RAY-jee-ah","hemorrhage from the spleen","bleeding from the spleen","ly","",[]],
["splenorrhaphy","splee-NOR-ah-fee","suture of a ruptured spleen","suturing of the spleen","ly","",[]],
["splenotomy","splee-NOT-oh-mee","incision of the spleen","incision into the spleen","ly","",[]],
["sputum","SPŪ-tŭm","mucus or phlegm coughed up from the respiratory tract","thick mucus from the airways","dx","",[]],
["stem cell","","Immature blood cells formed in the bone marrow.","unspecialised cells that can become other cells","hb","",[]],
["stroke","","Sudden loss of neurological function, caused by vascular injury (loss of blood flow) to an area of the brain; also known as CVA","brain damage from cut-off blood supply","dx","",[]],
["suppressor T cell","sŭ-PRĔS-ōr sĕlz","T cells (mainly CD8 and some CD4) that suppress B cells and other immune cells.","regulatory T cells that damp down immunity","im","",[]],
["systemic lupus erythematosus","LU-pus er-ih-the-mah-TO-sus","Inflammatory connective tissue disease affecting the skin and multiple organs; patients are sensitive to light and may have a red butterfly-shaped rash over the nose and cheeks","systemic autoimmune disease with a butterfly rash","im","",[]],
["systemic sclerosis","","A diffuse connective tissue disease that may involve any system causing inflammation, degeneration, and fibrosis; also called scleroderma because it causes thickening of the skin","systemic hardening of skin and organs","im","",[]],
["T cell","TEE LIHM-foh-site","A thymus-dependent lymphocyte responsible for cellular immunity that directly attacks foreign or infected cells.","thymus-trained lymphocyte","im","Anatomy_and_Physiology",["CD4"]],
["thalassemia","thăl-ă-SĒ-mē-ă","A group of hereditary anemias (often Mediterranean origin) characterized by an inability to produce sufficient functioning hemoglobin.","inherited haemoglobin production defect","hb","Pathology_and_Disorders",[]],
["thrombin","THRŎM-bĭn","The enzyme derived from prothrombin that converts fibrinogen to fibrin","enzyme turning fibrinogen into fibrin","co","",[]],
["thrombocyte","THRŎM-bō-sīts","A formed element (cell fragment) in the blood that is essential for hemostasis and blood clotting.","clotting cell fragment","co","Anatomy_and_Physiology",["PLT"]],
["thrombocytic","throm-boh-SIT-ik","Pertaining to a clotting cell; a platelet.","relating to platelets","co","",[]],
["thrombocytopenia","THRŎM-bō-sī-tō-PĒ-nē-ă","An abnormal decrease or deficiency of platelets in the blood, leading to bleeding disorders.","shortage of platelets","co","Pathology_and_Disorders",["ITP","TTP"]],
["thrombocytosis","throm-boh-sigh-TOH-sis","Condition of having too many platelets.","excess of platelets","co","",[]],
["thrombolysis","thrŏm-BŎL-ĭ-sĭs","separation; destruction; loosening of a blood clot","breakdown of a blood clot","co","",[]],
["thrombolytics","thrŏm-bō-LĬT-ĭks","Medications to dissolve blood clots.","clot-dissolving drugs","co","",[]],
["thromboplastin","thrŏm-bō-PLĂS-tĭn","A protein released by platelets that combines with calcium and clotting factors to form a clot.","protein that starts clotting","co","",[]],
["thrombosis","throm-BOH-sis","Abnormal condition of blood clots.","formation of a blood clot","co","",[]],
["thrombotic","throm-BOT-ik","Pertaining to a clot.","relating to a clot","co","",[]],
["thrombotic thrombocytopenic purpura","","An often fatal disorder in which multiple clots form in blood vessels","clotting disorder with low platelets and small-vessel clots","co","",["TTP"]],
["thrombus","THROM-bus","Hard collection of fibrin, blood cells, and tissue debris that is end result of hemostasis or blood-clotting process; commonly referred to as a blood clot.","clot inside a blood vessel","co","",[]],
["thymectomy","thī-MĔK-tō-mē","Removal of the thymus gland.","removal of the thymus","ly","",[]],
["thymic","THIGH-mik","Pertaining to thymus gland.","relating to the thymus","ly","",[]],
["thymitis","thye-MY-tihs","inflammation of the thymus","inflammation of the thymus","ly","",[]],
["thymoma","thī-MŌ-mă","A tumor of the thymus gland.","tumour of the thymus","ly","",[]],
["thymosin","THĪ-mō-sĭn","Hormone secreted by the thymus gland that aids in distribution of thymocytes (T lymphocytes) and lymphocytes.","thymus hormone that matures T cells","ly","",[]],
["thymus","THĪ-mŭs glănd","An immune system gland located in the mediastinum that matures T lymphocytes and secretes thymosin.","chest gland that trains T cells","ly","Anatomy_and_Physiology",[]],
["tissue typing","","Technique used to determine the histocompatibility of tissues; used in grafts and transplants with the recipient's tissues and cells; also known as histocompatibility testing","matching tissue types for transplant","dx","",[]],
["tonsil","TON-sihl","collection of lymph tissue; in common understanding, the lingual, pharyngeal, and (especially) palatine tonsils","lymphoid mass in the throat","ly","",[]],
["tonsillar","TAHN-sih-lar","Pertaining to tonsils.","relating to the tonsils","ly","",[]],
["tonsillectomy","ton-sih-LECK-toh-mee","excision of the tonsils","removal of the tonsils","ly","",[]],
["tonsillitis","TAWN-sih-LY-tihs","inflammation of a tonsil","tonsil inflammation","ly","",[]],
["transfusion","trăns-FYŪ-zhŭn","Collection of blood or a blood component from a donor followed by its infusion into a recipient","giving donor blood into a vein","co","",[]],
["urticaria","er-tih-KAIR-ee-ah","Severe itching associated with hives, usually linked to food allergy, stress, or drug reactions.","hives; itchy raised wheals","im","",[]],
["vaccination","văk-sĭ-NĀ-shŭnz","Introduction of altered antigens (viruses or bacteria) into the body to produce an immune response and protect against disease","giving a vaccine","im","",[]],
["vaccine","văk-SĒN, VĂK-sēn","A substance that provokes an immune response from an organism that causes active immunity via the production of antibodies.","weakened-germ preparation that builds immunity","im","",[]],
["venipuncture","VĔN-ĭ-pŭnk-chŭr","The withdrawal of blood for examination.","puncturing a vein to draw blood","co","",[]],
["venous","VĒ-nŭs","pertaining to a vein","relating to a vein","co","",[]],
["von Willebrand disease","vŏn WĬL-lĕ-brănd di-zēz","A hemorrhagic disorder in which there is a greater tendency to bleed due to the lack of a clotting factor called factor VIII.","inherited bleeding disorder of platelet sticking","co","",[]],
["Western blot","","Test to detect presence of viral DNA in the blood and used to confirm the diagnosis of AIDS as well as detecting other viruses","protein blot confirming an antibody","dx","",[]],
["white blood cell differential","diff-er-EN-shal","Determines number of each variety of leukocytes in volume of blood.","percentages of each white cell type","dx","",[]],
["Wright stain","","A commonly used blood stain","stain for blood smears","dx","",[]]];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* ایمنا — واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها، تجزیه‌گر واژه و مولد سؤال‌ها
 * واژه‌ها از data-terms.js (ادغام خودکار همه فایل‌های استخراج‌شده) می‌آیند؛
 * ریشه‌ها و اختصارها از همان داده‌ها گردآوری و دستی پالایش شده‌اند تا تکراری و ناهمسان نباشند.
 * دنیاها: lx زبان پزشکی (همه واژه‌ها) • hb خون و سلول‌ها • co هموستاز و انتقال خون • ly دستگاه لنفاوی • im ایمنی • dx تشخیص، درمان و ICU • * عمومی */
(function (root) {
  const EA = root.EA = root.EA || {};

  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const ROOTS_RAW = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', "without, lacking", '*'],
    ['ana-', ['ana'], 'up, again, against', "up, again, against", 'im'],
    ['anti-', ['anti'], 'against', "against", '*'],
    ['auto-', ['auto'], 'self', "self", 'im'],
    ['dys-', ['dys'], 'bad, abnormal, difficult', "bad, abnormal, difficult", '*'],
    ['homo-', ['homo'], 'same', "same, of the same kind", 'co'],
    ['hyper-', ['hyper'], 'excessive, above', "excessive, above", '*'],
    ['hypo-', ['hypo'], 'deficient, below', "low, below normal", '*'],
    ['inter-', ['inter'], 'between', "between", 'ly'],
    ['intra-', ['intra'], 'within, inside', "within", '*'],
    ['macro-', ['macro'], 'large', "large", 'hb'],
    ['micro-', ['micro'], 'small', "small", 'hb'],
    ['mono-', ['mono'], 'one, single', "one, single", 'hb'],
    ['pan-', ['pan'], 'all', "all", 'hb'],
    ['poly-', ['poly'], 'many, much', "many, much", 'hb'],
    ['trans-', ['trans'], 'across, through', "through, across", 'co'],
    // ریشه‌های خون
    ['hem/o, hemat/o', ['hemat', 'hem', 'haem'], 'blood', "blood", 'hb'],
    ['sanguin/o', ['sanguin'], 'blood', "blood", 'hb'],
    ['erythr/o', ['erythr'], 'red', "red", 'hb'],
    ['leuk/o', ['leuk'], 'white', "white", 'hb'],
    ['cyt/o', ['cyt'], 'cell', "cell", 'hb'],
    ['kary/o, nucle/o', ['kary', 'nucle'], 'nucleus', "cell’s control centre", 'hb'],
    ['granul/o', ['granul'], 'granules', "granules", 'hb'],
    ['eosin/o', ['eosin'], 'rosy red (dawn)', "rosy, light red", 'hb'],
    ['bas/o', ['bas'], 'base (alkaline)', "base (alkaline)", 'hb'],
    ['neutr/o', ['neutr'], 'neutral', "neutral", 'hb'],
    ['chrom/o', ['chrom'], 'color', "colour", 'hb'],
    ['morph/o', ['morph'], 'shape, form', "shape, form", 'hb'],
    ['anis/o', ['anis'], 'unequal', "not equal", 'hb'],
    ['poikil/o', ['poikil'], 'varied, irregular', "unequal, irregular", 'hb'],
    ['spher/o', ['spher'], 'globe, round', "globe, round", 'hb'],
    ['sider/o, ferr/o', ['sider', 'ferr'], 'iron', "Iron", 'hb'],
    ['myel/o', ['myel'], 'bone marrow (also spinal cord)', "bone marrow (and spinal cord)", 'hb'],
    ['megal/o', ['megal', 'mega'], 'large', "large", 'hb'],
    ['norm/o', ['norm'], 'normal', "normal", 'hb'],
    ['plasm/o', ['plasma', 'plasm'], 'plasma; formed substance', "plasma; formed substance", 'hb'],
    ['ser/o', ['ser'], 'serum', "IV fluids", 'hb'],
    ['thalass/o', ['thalass'], 'sea', "sea", 'hb'],
    ['lip/o', ['lip'], 'fat, lipid', "fat", 'hb'],
    ['electr/o', ['electr'], 'electricity', "electricity", 'dx'],
    ['cyan/o', ['cyan'], 'blue', "blue", '*'],
    ['melan/o', ['melan'], 'black', "black", '*'],
    ['xanth/o', ['xanth'], 'yellow', "yellow", '*'],
    ['hepat/o', ['hepat'], 'liver', "liver", '*'],
    // انعقاد و رگ
    ['thromb/o', ['thromb'], 'clot', "clot", 'co'],
    ['coagul/o', ['coagul'], 'clotting', "clotting", 'co'],
    ['fibrin/o', ['fibrin'], 'fibers, fibrin', "fibres, fibrin", 'co'],
    ['agglutin/o', ['agglutin'], 'clumping, gluing', "clumping, sticking together", 'co'],
    ['embol/o', ['embol'], 'embolus (plug)', "plug (blocking mass)", 'co'],
    ['phleb/o, ven/o', ['phleb', 'ven'], 'vein', "vessel carrying blood to the heart", 'co'],
    ['fus/o', ['fus'], 'pouring', "pouring", 'co'],
    // لنفاوی
    ['lymph/o', ['lymph'], 'lymph', "lymph", 'ly'],
    ['lymphaden/o', ['lymphaden'], 'lymph node (gland)', "lymph node", 'ly'],
    ['lymphangi/o', ['lymphangi'], 'lymph vessel', "lymph vessel", 'ly'],
    ['aden/o', ['aden'], 'gland', "gland", 'ly'],
    ['angi/o', ['angi'], 'vessel', "vessel", 'ly'],
    ['splen/o', ['splen'], 'spleen', "spleen", 'ly'],
    ['thym/o', ['thym'], 'thymus', "thymus", 'ly'],
    ['tonsill/o', ['tonsill'], 'tonsil', "tonsil", 'ly'],
    ['axill/o', ['axill'], 'armpit (axilla)', "armpit", 'ly'],
    ['cervic/o', ['cervic'], 'neck', "neck", 'ly'],
    ['inguin/o', ['inguin'], 'groin', "groin", 'ly'],
    ['scint/i', ['scint'], 'spark', "spark", 'ly'],
    // ایمنی
    ['immun/o', ['immun'], 'immune, protection, safe', "immune, protection", 'im'],
    ['phag/o', ['phag'], 'eat, swallow', "eat, swallow", 'im'],
    ['tox/o, toxic/o', ['toxic', 'tox'], 'poison', "poison", 'im'],
    ['path/o', ['path'], 'disease', "disease", 'im'],
    ['septic/o', ['septic'], 'infection', "infection", 'im'],
    ['all/o', ['all'], 'other, strange', "other, foreign", 'im'],
    ['onc/o', ['onc'], 'tumor', "tumour", 'dx'],
    ['chem/o', ['chem'], 'chemical, drug', "chemical, drug", 'dx'],
    ['radi/o', ['radi'], 'radiation, x-ray', "radiation, X-ray", 'dx'],
    // پسوندها
    ['-apheresis', ['apheresis', 'pheresis'], 'removal, carrying away', "separation and removal", 'co'],
    ['-blast', ['blast'], 'immature cell, germ cell', "immature cell (germ)", 'hb'],
    ['-crit', ['crit'], 'to separate', "separating", 'hb'],
    ['-cyte', ['cyte'], 'cell', "cell", 'hb'],
    ['-cytosis', ['cytosis'], 'abnormal condition (increase) of cells', "abnormal increase in cells", 'hb'],
    ['-emia', ['emia', 'hemia'], 'blood condition', "blood condition", 'hb'],
    ['-edema', ['edema'], 'swelling', "swelling", 'ly'],
    ['-ectomy', ['ectomy'], 'excision, removal', "surgical removal", '*'],
    ['-gen, -genous', ['genous', 'genic', 'gen'], 'producing, origin', "producing, origin", '*'],
    ['-globin', ['globin'], 'protein', "building-block nutrient", 'hb'],
    ['-globulin', ['globulin'], 'protein', "building-block nutrient", 'im'],
    ['-gram', ['gram'], 'record', "recorded image", 'dx'],
    ['-graphy', ['graphy'], 'process of recording', "recording process (imaging)", 'dx'],
    ['-ic, -al, -ous, -ar', ['ic', 'al', 'ous', 'ar'], 'pertaining to', "pertaining to", '*'],
    ['-ist', ['ist'], 'specialist', "specialist", '*'],
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-logy', ['logy'], 'study of', "study of", '*'],
    ['-lysis', ['lysis'], 'breakdown, destruction, separation', "breakdown, separation", 'co'],
    ['-lytic', ['lytic'], 'pertaining to destruction', "relating to breakdown", 'co'],
    ['-megaly', ['megaly'], 'enlargement', "enlargement", 'ly'],
    ['-oid', ['oid'], 'resembling', "resembling", '*'],
    ['-oma', ['oma'], 'tumor, mass', "tumour, mass", '*'],
    ['-osis', ['osis', 'sis'], 'abnormal condition', "condition (usually abnormal)", '*'],
    ['-pathy', ['pathy'], 'disease', "disease", '*'],
    ['-penia', ['penia'], 'deficiency, decrease', "deficiency, decrease", 'hb'],
    ['-phage', ['phage'], 'eat, swallow', "eater", 'im'],
    ['-philia', ['philia', 'philic', 'phil'], 'attraction for, love of', "attraction to, loving", 'hb'],
    ['-phobia', ['phobia'], 'fear', "fear", '*'],
    ['-phoresis', ['phoresis'], 'carrying, transmission', "carrying, transmission", 'dx'],
    ['-phylaxis', ['phylaxis'], 'protection', "protection", 'im'],
    ['-plasia, -plastic', ['plasia', 'plastic', 'plastin'], 'formation, development', "formation, development", 'hb'],
    ['-poiesis', ['poiesis', 'poietic'], 'formation, production', "formation, production", 'hb'],
    ['-poietin', ['poietin'], 'substance that forms', "producing substance (hormone)", 'hb'],
    ['-rrhage, -rrhagia', ['rrhagia', 'rrhage', 'rrhagic'], 'bursting forth (of blood)', "bursting forth (bleeding)", 'co'],
    ['-rrhaphy', ['rrhaphy'], 'suture', "stitch", 'ly'],
    ['-stasis', ['stasis', 'static', 'statics'], 'stopping, controlling', "stopping, controlling", 'co'],
    ['-therapy', ['therapy'], 'treatment', "treatment", 'dx'],
    ['-tomy', ['tomy'], 'incision, cutting into', "incision", '*'],
    ['-toxic', ['toxic'], 'pertaining to poison', "relating to poison", 'im'],
    ['-y, -ia, -ism', ['y', 'ia', 'ism'], 'condition, process', "condition, process", '*']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    ['ABO', 'blood group system A, B, AB, O', "the A, B, AB and O blood group system", 'co'],
    ['Ab', 'antibody', "protective immune protein", 'im'],
    ['Ag', 'antigen', "substance that provokes an immune response", 'im'],
    ['AIDS', 'acquired immunodeficiency syndrome', "late stage of HIV infection with collapsed immunity", 'im'],
    ['ALL', 'acute lymphocytic (lymphoblastic) leukemia', "acute lymphocytic (lymphoblastic) leukaemia", 'hb'],
    ['AML', 'acute myelogenous (myeloid) leukemia', "acute myeloid leukaemia", 'hb'],
    ['ANA', 'antinuclear antibody', "antinuclear antibody", 'dx'],
    ['APC', 'antigen-presenting cell', "cell that shows antigens to T cells", 'im'],
    ['aPTT', 'activated partial thromboplastin time', "activated partial thromboplastin time", 'co'],
    ['ARC', 'AIDS-related complex', "AIDS-related complex", 'im'],
    ['baso', 'basophil', "white cell with dark-blue granules; active in allergy", 'hb'],
    ['BMT', 'bone marrow transplant', "replacing diseased marrow with donor marrow", 'dx'],
    ['BT', 'bleeding time', "bleeding time", 'co'],
    ['C&S', 'culture and sensitivity', "culture and sensitivity", 'dx'],
    ['CBC', 'complete blood count', "complete blood count", 'dx'],
    ['C. diff', 'Clostridium difficile', "Clostridioides difficile", 'dx'],
    ['CD4', 'helper T cell marker (cluster of differentiation 4)', "helper T cell marker", 'im'],
    ['CLL', 'chronic lymphocytic leukemia', "chronic lymphocytic leukaemia", 'hb'],
    ['CML', 'chronic myelogenous (myeloid) leukemia', "chronic myeloid leukaemia", 'hb'],
    ['CMV', 'cytomegalovirus', "herpes-family virus dangerous in weak immunity", 'im'],
    ['CRE', 'carbapenem-resistant Enterobacteriaceae', "carbapenem-resistant Enterobacteriaceae", 'dx'],
    ['CRP', 'C-reactive protein', "C-reactive protein", 'dx'],
    ['DIC', 'disseminated intravascular coagulation', "disseminated intravascular coagulation", 'co'],
    ['diff', 'differential count (white blood cells)', "percentages of each white cell type", 'dx'],
    ['EBV', 'Epstein-Barr virus', "Epstein-Barr virus", 'im'],
    ['EIA', 'enzyme immunoassay', "enzyme immunoassay", 'dx'],
    ['ELISA', 'enzyme-linked immunosorbent assay', "enzyme-linked immunosorbent assay", 'dx'],
    ['eos', 'eosinophil', "white cell with red granules; allergy and parasites", 'hb'],
    ['EPO', 'erythropoietin', "kidney hormone for red cells", 'hb'],
    ['ESR', 'erythrocyte sedimentation rate', "erythrocyte sedimentation rate", 'dx'],
    ['FFP', 'fresh frozen plasma', "fresh frozen plasma", 'co'],
    ['GVHD', 'graft-versus-host disease', "donor immune cells attacking the recipient", 'im'],
    ['HAART', 'highly active antiretroviral therapy', "highly active antiretroviral therapy", 'dx'],
    ['Hct', 'hematocrit', "percentage of red cells in blood (packed cell volume)", 'hb'],
    ['HD', 'Hodgkin disease', "Hodgkin disease", 'ly'],
    ['HDN', 'hemolytic disease of the newborn', "haemolytic disease of the newborn", 'co'],
    ['Hgb, Hb', 'hemoglobin', "oxygen-carrying protein of red cells", 'hb'],
    ['HIV', 'human immunodeficiency virus', "human immunodeficiency virus", 'im'],
    ['hs-CRP', 'high-sensitivity C-reactive protein', "high-sensitivity C-reactive protein", 'dx'],
    ['IF', 'intrinsic factor', "stomach protein needed to absorb vitamin B12", 'hb'],
    ['Ig', 'immunoglobulin (IgA, IgD, IgE, IgG, IgM)', "immunoglobulin (five classes)", 'im'],
    ['INR', 'international normalized ratio', "international normalised ratio", 'co'],
    ['ITP', 'idiopathic thrombocytopenic purpura', "immune destruction of platelets of unknown cause", 'co'],
    ['KS', 'Kaposi sarcoma', "cancer with purple skin lesions", 'im'],
    ['lymphs', 'lymphocytes', "lymphocytes", 'hb'],
    ['MAI', 'Mycobacterium avium-intracellulare', "Mycobacterium avium-intracellulare", 'im'],
    ['MCH', 'mean corpuscular hemoglobin', "mean corpuscular haemoglobin", 'dx'],
    ['MCHC', 'mean corpuscular hemoglobin concentration', "mean corpuscular haemoglobin concentration", 'dx'],
    ['MCV', 'mean corpuscular volume', "mean corpuscular volume", 'dx'],
    ['MDS', 'myelodysplastic syndrome', "marrow disorder making faulty blood cells", 'hb'],
    ['MODS', 'multiple organ dysfunction syndrome', "multiple organ dysfunction syndrome", 'dx'],
    ['monos', 'monocytes', "monocytes", 'hb'],
    ['MRSA', 'methicillin-resistant Staphylococcus aureus', "methicillin-resistant Staphylococcus aureus", 'dx'],
    ['NHL', 'non-Hodgkin lymphoma', "lymphoma without Reed-Sternberg cells", 'ly'],
    ['NK', 'natural killer (cell)', "natural killer cell", 'im'],
    ['PA', 'pernicious anemia', "pernicious anaemia", 'hb'],
    ['PCP', 'Pneumocystis pneumonia', "fungal pneumonia in weak immunity", 'im'],
    ['PCT', 'procalcitonin', "procalcitonin", 'dx'],
    ['PCV', 'packed cell volume', "packed cell volume (haematocrit)", 'hb'],
    ['Ph', 'Philadelphia chromosome', "abnormal chromosome of chronic myeloid leukaemia", 'dx'],
    ['PLT', 'platelet (count)', "platelet (count)", 'co'],
    ['PMN, poly, seg', 'polymorphonuclear (segmented) neutrophil', "polymorphonuclear (segmented) neutrophil", 'hb'],
    ['PRBC', 'packed red blood cells', "packed red cells", 'co'],
    ['PT, pro-time', 'prothrombin time', "prothrombin time", 'co'],
    ['PTT', 'partial thromboplastin time', "partial thromboplastin time", 'co'],
    ['RBC', 'red blood cell (count)', "red blood cell (count)", 'hb'],
    ['Rh', 'Rhesus factor (Rh+ / Rh−)', "Rhesus factor (Rh positive/negative)", 'co'],
    ['SCIDS', 'severe combined immunodeficiency syndrome', "severe combined immunodeficiency", 'im'],
    ['sed rate', 'sedimentation rate (ESR)', "sedimentation rate", 'dx'],
    ['SIRS', 'systemic inflammatory response syndrome', "systemic inflammatory response syndrome", 'dx'],
    ['SLE', 'systemic lupus erythematosus', "whole-body lupus", 'im'],
    ['TIBC', 'total iron-binding capacity', "total iron-binding capacity", 'dx'],
    ['TTP', 'thrombotic thrombocytopenic purpura', "clotting disorder with low platelets and small-vessel clots", 'co'],
    ['vWF', 'von Willebrand factor', "von Willebrand factor", 'co'],
    ['WBC', 'white blood cell (count)', "white blood cell (count)", 'hb'],
    ['WNL', 'within normal limits', "within normal limits", 'dx']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {
    Anatomy_and_Physiology: "Anatomy and physiology", Pathology_and_Disorders: "Diseases and disorders",
    Laboratory_and_Diagnostics: "Laboratory and diagnosis", Immunonutrition_and_Pharmacology: "Immunonutrition and drugs"
  };
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], c: r[5], ab: r[6] || [] }));
  /* ---------- دسته‌بندی واژه‌ها ----------
   * هر واژه با قاعده‌های ساختاری (پسوند) و کلیدواژه‌های تعریف انگلیسی در یکی از شش دسته قرار می‌گیرد.
   * ترتیب قاعده‌ها مهم است: روش و دارو پیش از بیماری بررسی می‌شود تا splenectomy «بیماری» شمرده نشود. */
  const CATS = [
    { id: 'cell', icon: '🔬', name: "Cells and molecules" },
    { id: 'field', icon: '🎓', name: "Specialties and specialists" },
    { id: 'body', icon: '🫀', name: "Structure and function" },
    { id: 'dz', icon: '🦠', name: "Diseases" },
    { id: 'sx', icon: '🌡️', name: "Signs and findings" },
    { id: 'lab', icon: '🧪', name: "Tests and imaging" },
    { id: 'tx', icon: '💊', name: "Treatment, drugs and surgery" }
  ];
  const CAT_RULES = [
    ['field', /(logy|logist|allergist)$/],
    ['dz', /(disease|syndrome|reaction\b|infection|thrombocytopenic|intravascular coagulation|pneumonia|stroke|hypersplenism)/],
    ['body', /(immunity\b|immune response|system\b|pathway|homeostasis|hemostasis|coagulation\b|coagulate|tissue|tonsils?\b|tonsillar|node\b|nodules|vessels?\b|duct|spleen\b|thymus\b|appendix|adenoids|capillar|patches|phagocytosis|lymphopoiesis)/],
    ['tx', /(ectomy|tomy|rrhaphy|therapy|pheresis|transfusion|transplant|graft|vaccin|immunization|inoculation|anticoagulant|antiplatelet|thrombolytic|antihistamine|antibiotic|antiviral|antifungal|antiretroviral|steroid|immunosuppress|hemostatic|heparin|warfarin|aspirin|epinephrine|interferon therapy|chemo|radiation|plasty|donor|autologous|homologous|apheresis|phlebotomy|venipuncture|immunonutrition|supplement|glutamine|arginine|omega-3|hematinic|coagulants|antihemorrhagic|cryoprecipitate|dialysis|thrombolysis|desensitization)/, /\b(drug|medication|medicine|agent (that|used)|surgical (removal|procedure)|removal of|excision|administered|treatment (of|for|with)|therapy|vaccine|transfusion of)\b/],
    ['lab', /(count|test\b|tests?\b|analyzer|stain\b|time\b|rate|culture|aspiration|biopsy|graphy|gram\b|scan|assay|electrophoresis|titer|index|indices|screen|panel|crossmatch|cross-match|typing|smear|differential|hematocrit|\besr\b|\bcrp\b|procalcitonin|ferritin|tibc|serum iron|western blot|elisa|coombs|morphology|level|ratio|marker|mcv|mch|mchc|\binr\b|\bptt\b|\bpt\b|scint)/, /\b(test|measures?|measurement|laboratory|blood sample|assay|procedure (to|in which)|x-ray|imaging|image|diagnostic)\b/],
    ['sx', /(chromia|erythema|thrombus\b|petechia|purpura|ecchymos|hematoma|edema|megaly|pallor|jaundice|fever|urticaria|pruritus|rash|cyanosis|rrhage|rrhagia|dyspnea|fatigue|splenomegaly|lymphadenopathy|hives|wheez|swelling|bleeding|bruis)/, /\b(sign|symptom|swelling|enlargement of|discoloration|spots?\b|bruise|bleeding)\b/],
    ['dz', /(emia|penia|cytosis|itis|oma\b|omas\b|osis\b|pathy|philia|syndrome|disease|disorder|deficien|anemia|leukemia|lymphoma|myeloma|cancer|sepsis|septic|shock|allergy|anaphyla|hypersensitivity|lupus|aids\b|hiv|infection|thalassemia|sickle|dyscrasia|fetalis|thrombosis|embol|autoimmun|sarcoma|mononucleosis|hodgkin|hemolysis\b)/, /\b(disease|disorder|syndrome|condition (in which|characterized|of)|deficiency|cancer|malignan|infection|inflammation|tumor|abnormal(ly)? (increase|decrease|condition))\b/],
    ['cell', /(cyte|blast|phil\b|phage|cell|platelet|plasma\b|serum|antibod|antigen|globin|globulin|immunoglobulin|\big[gamed]\b|protein|factor|fibrin|thrombin|thromboplastin|albumin|interleukin|interferon|cytokine|complement|histamine|hormone|poietin|electrolyte|hemoglobin|bilirubin|iron|enzyme|agglutin|\bgen\b|ogen\b|marker)/, /\b(cells?|protein|molecule|substance|antibody|antigen|enzyme|hormone)\b/]
  ];
  /* استثناهایی که قاعده‌ها اشتباه می‌گیرند */
  const CAT_FIX = { 'lymph node dissection': 'tx', 'tissue typing': 'lab', 'red blood cell morphology': 'lab', cytomegalovirus: 'dz', 'systemic lupus erythematosus': 'dz', 'allergy shots': 'tx' };
  function classify(t) {
    const n = t.t.toLowerCase(), d = (t.d || '').toLowerCase().slice(0, 220);
    if (CAT_FIX[n]) return CAT_FIX[n];
    for (const [id, rx] of CAT_RULES) if (rx.test(n)) return id;
    for (const [id, , rd] of CAT_RULES) if (rd && rd.test(d)) return id;
    return 'body';
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
  const WORLDS = ['lx', 'hb', 'co', 'ly', 'im', 'dx'];
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
/* ایمنا — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان: زمینه سفید کارت، سلول‌ها با گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی)،
 * پیکان‌های خاکستری گرد و رنگ هر دنیا برای تأکید. همه شکل‌ها در پوسته روشن و تیره یکسان دیده می‌شوند.
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
  const t = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${p.size || 11}" font-weight="${p.w || 700}" fill="${p.fill || INK}" text-anchor="${p.anchor || 'middle'}" font-family="${FONT_EN}"${p.italic ? ' font-style="italic"' : ''}>${s}</text>`; };
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

  /* ---------- سلول‌ها ----------
   * هر سلول تابعی است که (cx, cy, r) می‌گیرد و گرادیان‌های خودش را با شناسه یکتا می‌سازد. */
  const cell = {
    rbc(cx, cy, r) {
      const g = 'g' + (++UID);
      return `<defs>${radial(g, '#f9b9bd', '#cf2c3b', '50%')}</defs><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${g})"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#a81f2b" stroke-width="${Math.max(1, r / 22)}"/><ellipse cx="${cx - r * 0.35}" cy="${cy - r * 0.42}" rx="${r * 0.28}" ry="${r * 0.12}" transform="rotate(-30 ${cx - r * 0.35} ${cy - r * 0.42})" fill="#fff" opacity=".35"/>`;
    },
    neutrophil(cx, cy, r) {
      const g = 'g' + (++UID), n = 'g' + (++UID);
      return `<defs>${radial(g, '#fff4fa', '#ecc9dc')}${radial(n, '#8a55b8', '#4a2380')}</defs><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${g})" stroke="#d6a9c3" stroke-width="1.5"/>${dots(cx, cy, r * 0.85, 46, '#e3a6c6', r * 0.035, 3)}
        <path d="M${cx - r * .5} ${cy - r * .1} q${r * .12} ${-r * .38} ${r * .32} ${-r * .08} q${r * .12} ${r * .3} ${r * .3} ${r * .02} q${r * .2} ${-r * .32} ${r * .32} ${r * .12} q${r * .05} ${r * .35} ${-r * .14} ${r * .45}" stroke="url(#${n})" stroke-width="${r * .27}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    },
    eosinophil(cx, cy, r) {
      const g = 'g' + (++UID), n = 'g' + (++UID);
      return `<defs>${radial(g, '#fff1e6', '#f6cdb3')}${radial(n, '#8a55b8', '#4a2380')}</defs><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${g})" stroke="#e3ad8c" stroke-width="1.5"/>${dots(cx, cy, r * 0.86, 54, '#e8642c', r * 0.075, 11)}${dots(cx, cy, r * 0.8, 20, '#f59a6a', r * 0.06, 5)}
        <ellipse cx="${cx - r * .3}" cy="${cy}" rx="${r * .25}" ry="${r * .33}" fill="url(#${n})"/><ellipse cx="${cx + r * .3}" cy="${cy}" rx="${r * .25}" ry="${r * .33}" fill="url(#${n})"/><path d="M${cx - r * .1} ${cy} h${r * .2}" stroke="#4a2380" stroke-width="${r * .09}"/>`;
    },
    basophil(cx, cy, r) {
      const g = 'g' + (++UID);
      return `<defs>${radial(g, '#f1edfb', '#d3c8ee')}</defs><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${g})" stroke="#b5a7dc" stroke-width="1.5"/><path d="M${cx - r * .45} ${cy - r * .05} q${r * .45} ${-r * .55} ${r * .9} 0 q${-r * .1} ${r * .5} ${-r * .9} 0z" fill="#6b4ea6" opacity=".55"/>${dots(cx, cy, r * 0.8, 38, '#2c1a68', r * 0.095, 5)}`;
    },
    lymphocyte(cx, cy, r) {
      const g = 'g' + (++UID), n = 'g' + (++UID);
      return `<defs>${radial(g, '#d9e8fb', '#93b8ea')}${radial(n, '#7550b5', '#3a1f73')}</defs><circle cx="${cx}" cy="${cy}" r="${r * .8}" fill="url(#${g})" stroke="#7fa8dd" stroke-width="1.5"/><circle cx="${cx - r * .06}" cy="${cy + r * .03}" r="${r * .64}" fill="url(#${n})"/>${dots(cx - r * .06, cy, r * .5, 10, '#5b3b99', r * .05, 8)}`;
    },
    monocyte(cx, cy, r) {
      const g = 'g' + (++UID), n = 'g' + (++UID);
      return `<defs>${radial(g, '#eef2fa', '#c5d1ea')}${radial(n, '#7a5ab3', '#45297f')}</defs><circle cx="${cx}" cy="${cy}" r="${r * 1.06}" fill="url(#${g})" stroke="#a5b5d8" stroke-width="1.5"/>${dots(cx, cy, r * .9, 22, '#b4c0dd', r * .03, 9)}
        <path d="M${cx - r * .58} ${cy - r * .22} q${r * .1} ${-r * .52} ${r * .62} ${-r * .42} q${r * .52} ${r * .1} ${r * .46} ${r * .56} q${-r * .05} ${r * .46} ${-r * .46} ${r * .46} q${-r * .2} 0 ${-r * .15} ${-r * .26} q${r * .05} ${-r * .3} ${-r * .26} ${-r * .3} q${-r * .25} ${r * .05} ${-r * .21} ${-r * .04}z" fill="url(#${n})"/>`;
    },
    platelet(cx, cy, r) {
      const g = 'g' + (++UID);
      return `<defs>${radial(g, '#e7d8f7', '#a782d6')}</defs><path d="M${cx - r} ${cy} q${r * .3} ${-r * .9} ${r} ${-r * .6} q${r * .9} ${r * .1} ${r} ${r * .5} q${-r * .2} ${r * .8} ${-r * .9} ${r * .6} q${-r * .9} ${-r * .1} ${-r * 1.1} ${-r * .5}z" fill="url(#${g})" stroke="#8460b8" stroke-width="1.1"/>${dots(cx, cy, r * .45, 6, '#5d3797', Math.max(1, r * .1), 4)}`;
    },
    plasma(cx, cy, r) {
      const g = 'g' + (++UID), n = 'g' + (++UID);
      return `<defs>${radial(g, '#e3eefc', '#9fb9e2')}${radial(n, '#7550b5', '#3a1f73')}</defs><ellipse cx="${cx}" cy="${cy}" rx="${r * 1.15}" ry="${r * .85}" fill="url(#${g})" stroke="#7f9fd0" stroke-width="1.4"/><circle cx="${cx + r * .45}" cy="${cy}" r="${r * .42}" fill="url(#${n})"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => { const a = i * Math.PI / 4; return `<circle cx="${cx + r * .45 + Math.cos(a) * r * .3}" cy="${cy + Math.sin(a) * r * .3}" r="${r * .07}" fill="#9a84cf"/>`; }).join('')}<path d="M${cx - r * .7} ${cy - r * .3} q${r * .3} ${r * .3} 0 ${r * .6}" stroke="#7f9fd0" stroke-width="${r * .08}" fill="none"/>`;
    },
    stem(cx, cy, r) {
      const g = 'g' + (++UID);
      return `<defs>${radial(g, '#fff3c9', '#f2b93b')}</defs><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${g})" stroke="#d69a12" stroke-width="1.5"/><circle cx="${cx}" cy="${cy}" r="${r * .5}" fill="#c98a00" opacity=".75"/>`;
    }
  };
  const CELL_LABEL = {
    rbc: ['erythrocyte', "red blood cell"], neutrophil: ['neutrophil', "commonest white cell; a germ eater"], eosinophil: ['eosinophil', "white cell with red granules; allergy and parasites"], basophil: ['basophil', "white cell with dark-blue granules; active in allergy"],
    lymphocyte: ['lymphocyte', "white cell of the lymphatic system"], monocyte: ['monocyte', "single-nucleus white blood cell (monocyte)"], platelet: ['thrombocyte', "platelet"]
  };

  const A = {};
  Object.keys(CELL_LABEL).forEach(k => {
    A['cell-' + k] = () => svg(150, 150, `${cell[k](75, 62, k === 'platelet' ? 26 : 46)}${lab(75, 128, CELL_LABEL[k][0], CELL_LABEL[k][1], { size: 12.5 })}`, CELL_LABEL[k][1]);
  });

  /* ---------- خون ---------- */
  /* خانواده گلبول‌های سفید: دانه‌دار و بی‌دانه */
  A['wbc-family'] = () => svg(340, 190, `
    ${pill(10, 10, 196, 24, '#fde3e7')}${t(108, 26, 'granulocytes', { size: 12, fill: '#a31b33', w: 900 })}
    ${pill(216, 10, 114, 24, '#ddf1fb')}${t(273, 26, 'agranulocytes', { size: 12, fill: '#1272a3', w: 900 })}
    ${cell.neutrophil(42, 82, 30)}${cell.eosinophil(108, 82, 30)}${cell.basophil(174, 82, 30)}${cell.lymphocyte(244, 82, 32)}${cell.monocyte(304, 82, 26)}
    ${lab(42, 134, 'neutrophil', "54–70%", { size: 10.5 })}${lab(108, 134, 'eosinophil', "1–4%", { size: 10.5 })}${lab(174, 134, 'basophil', "&lt;1%", { size: 10.5 })}${lab(244, 134, 'lymphocyte', "20–38%", { size: 10.5 })}${lab(304, 134, 'monocyte', "3–9%", { size: 10.5 })}
    <line x1="211" y1="44" x2="211" y2="150" stroke="#e5e5e5" stroke-width="2" stroke-dasharray="4 4"/>
    ${f(108, 174, "granular: multi-lobed or two-lobed nucleus", { size: 10.5, fill: '#a31b33' })}${f(273, 174, "agranular: single, unlobed nucleus", { size: 10.5, fill: '#1272a3' })}`, "The white blood cell family");

  /* لوله سانتریفیوژشده */
  A.tube = () => {
    const gl = 'g' + (++UID), pl = 'g' + (++UID), rb = 'g' + (++UID), sh = 'g' + (++UID);
    return svg(320, 240, `
      <g filter="url(#${sh})"><rect x="78" y="16" width="56" height="20" rx="5" fill="#9aa9b1"/>
      <path d="M82 36 h48 v150 a24 24 0 0 1 -48 0z" fill="url(#${gl})" stroke="#8a989f" stroke-width="2"/></g>
      <path d="M84 46 h44 v74 h-44z" fill="url(#${pl})"/>
      <rect x="84" y="120" width="44" height="6" fill="#f4f4f0"/>
      <path d="M84 126 h44 v60 a22 22 0 0 1 -44 0z" fill="url(#${rb})"/>
      <path d="M90 50 v126" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".45"/>
      <g stroke="#9aa9b1" stroke-width="1.5"><path d="M140 83 h22"/><path d="M140 123 h22"/><path d="M140 168 h22"/></g>
      ${lab(170, 80, 'Plasma ≈ 55%', "plasma: water, proteins, salts", { anchor: 'start', size: 12.5 })}
      ${lab(170, 120, 'Buffy coat &lt; 1%', "white cells and platelets", { anchor: 'start', size: 12.5 })}
      ${lab(170, 165, 'RBC ≈ 45%', "red cells = haematocrit", { anchor: 'start', size: 12.5 })}
      ${f(106, 228, "whole blood after centrifuging", { size: 10.5 })}`, "A centrifuged blood tube",
      `${linear(gl, '#eef3f5', '#ffffff')}${linear(pl, '#fbe7a0', '#f2cf61', true)}${linear(rb, '#d84a52', '#9c1c26', true)}${shadow(sh)}`);
  };

  /* گلبول قرمز: نمای بالا و برش کنار */
  A.rbc = () => {
    const a = 'm' + (++UID), g = 'g' + (++UID);
    return svg(320, 170, `
      ${cell.rbc(80, 72, 52)}
      <path d="M28 140 h104" stroke="${LINE}" stroke-width="1.5" marker-start="url(#${a})" marker-end="url(#${a})"/>${t(80, 158, '≈ 7.5 µm', { size: 11, fill: MUTED })}
      <path d="M180 52 c20 -16 90 -16 110 0 c10 7 10 33 0 40 c-20 16 -90 16 -110 0 c-10 -7 -10 -33 0 -40z" fill="url(#${g})" stroke="#a81f2b" stroke-width="1.6"/>
      <path d="M200 62 c14 8 56 8 70 0 M200 82 c14 -8 56 -8 70 0" stroke="#f5a8ad" stroke-width="7" fill="none" stroke-linecap="round"/>
      ${lab(235, 128, 'biconcave disc', "biconcave disc, no nucleus", { size: 12 })}
      ${f(80, 12, "face view", { size: 10.5 })}${f(235, 30, "side section", { size: 10.5 })}`, "The biconcave red cell", `${marker(a)}${linear(g, '#e2474f', '#b9232f', true)}`);
  };

  /* گسترش خون محیطی */
  A.smear = () => svg(320, 190, `<rect width="320" height="190" fill="#fdf5f2"/>
    ${[[22, 20], [62, 14], [100, 32], [262, 22], [300, 58], [30, 150], [72, 168], [240, 160], [292, 140], [160, 172], [128, 18], [212, 16], [14, 90], [306, 104], [192, 176], [116, 160], [182, 30], [150, 100]].map(p => cell.rbc(p[0], p[1], 16)).join('')}
    ${cell.neutrophil(62, 92, 28)}${cell.lymphocyte(142, 64, 24)}${cell.monocyte(238, 92, 26)}${cell.eosinophil(110, 132, 21)}${cell.basophil(196, 136, 19)}
    ${cell.platelet(176, 52, 7)}${cell.platelet(98, 92, 6)}${cell.platelet(266, 126, 6)}${cell.platelet(36, 124, 5)}`, "Peripheral blood smear");

  /* خون‌سازی: درخت رده‌ها */
  A.hemato = () => {
    const a = 'm' + (++UID);
    const leaf = (x, k, en, fa, r) => `${cell[k](x, 168, r || 15)}${lab(x, 200, en, fa, { size: 9.5, gap: 11 })}`;
    return svg(400, 220, `
      ${cell.stem(200, 26, 17)}${lab(200, 58, 'hemocytoblast', "blood-forming stem cell", { size: 10.5 })}
      ${curve(a, 'M180 78 Q150 86 118 96', '#c8243f')}${curve(a, 'M220 78 Q250 86 292 96', '#12a594')}
      ${pill(38, 98, 156, 26, '#fde3e7')}${t(116, 115, 'myeloid stem cell', { size: 11, fill: '#a31b33', w: 900 })}
      ${pill(228, 98, 140, 26, '#d9f5ef')}${t(298, 115, 'lymphoid stem cell', { size: 11, fill: '#0b7a6c', w: 900 })}
      <g stroke="#e9b8c1" stroke-width="1.6">${[30, 88, 148, 206].map(x => `<path d="M116 124 L${x} 150"/>`).join('')}</g>
      <g stroke="#a7dfd5" stroke-width="1.6">${[256, 312, 368].map(x => `<path d="M298 124 L${x} 150"/>`).join('')}</g>
      ${leaf(30, 'rbc', 'RBC', "red blood cell", 14)}${leaf(88, 'platelet', 'platelet', "giant marrow cell that sheds platelets", 9)}${leaf(148, 'neutrophil', 'granulocyte', "granular white cell")}${leaf(206, 'monocyte', 'monocyte', "single-nucleus white blood cell (monocyte)", 14)}
      ${leaf(256, 'lymphocyte', 'B cell', "bone marrow")}${leaf(312, 'lymphocyte', 'T cell', "thymus")}${leaf(368, 'lymphocyte', 'NK cell', "natural killer")}`, "blood cell formation", marker(a));
  };

  /* هموگلوبین: چهار زنجیره گلوبین و هِم */
  A.hemoglobin = () => {
    const g1 = 'g' + (++UID), g2 = 'g' + (++UID);
    const unit = (x, y, g) => `<circle cx="${x}" cy="${y}" r="31" fill="url(#${g})" stroke="#b01d33" stroke-width="1.4"/><g transform="translate(${x} ${y})"><rect x="-10" y="-10" width="20" height="20" rx="3" transform="rotate(45)" fill="#c8243f"/><circle r="5.5" fill="#ffd36b"/>${t(0, 3.5, 'Fe', { size: 7.5, fill: '#7a3b00', w: 900 })}</g>`;
    return svg(340, 180, `${unit(140, 56, g1)}${unit(200, 56, g2)}${unit(140, 116, g2)}${unit(200, 116, g1)}
      ${lab(52, 52, 'globin', "4 protein chains", { size: 12.5 })}${lab(290, 52, 'heme', "iron-containing pigment", { size: 12.5 })}
      <path d="M77 47 L111 52" stroke="${LINE}" stroke-width="1.4"/><circle cx="111" cy="52" r="2.2" fill="${LINE}"/><path d="M268 47 L211 55" stroke="${LINE}" stroke-width="1.4"/><circle cx="211" cy="55" r="2.2" fill="${LINE}"/>
      ${f(170, 168, "haem + globin = haemoglobin; each haem picks up one oxygen molecule", { size: 10.5, fill: '#a31b33' })}`, "oxygen-carrying protein of red cells",
      `${radial(g1, '#ffd1d6', '#ef8d98')}${radial(g2, '#ffe0e3', '#f5a7af')}`);
  };

  /* شکل‌های گلبول قرمز */
  A.rbcshapes = () => {
    const g = 'g' + (++UID);
    const box = (x, art, en, fa) => `<rect x="${x}" y="8" width="96" height="136" rx="12" fill="#fbf7f6" stroke="#efe5e2"/>${art}${lab(x + 48, 116, en, fa, { size: 10.5 })}`;
    return svg(420, 152, `
      ${box(6, cell.rbc(54, 60, 30), 'normal', "uniform disc")}
      ${box(110, `<path d="M128 72 q22 -48 66 -34 q-30 2 -42 22 q-8 20 18 34 q-44 6 -42 -22z" fill="url(#${g})" stroke="#a81f2b" stroke-width="1.4"/>`, 'sickle cell', "crescent-shaped")}
      ${box(214, `<circle cx="262" cy="60" r="24" fill="url(#${g})" stroke="#a81f2b" stroke-width="1.4"/>`, 'spherocyte', "spherical, no central dip")}
      ${box(318, `${cell.rbc(340, 46, 11)}${cell.rbc(378, 64, 24)}<path d="M330 84 q16 -14 32 0 q-6 14 -16 10 q-10 6 -16 -10z" fill="url(#${g})" stroke="#a81f2b"/>`, 'aniso / poikilo', "varied size and shape")}`, "Red cell shapes",
      radial(g, '#f28d95', '#c12634', '50%'));
  };

  /* سه سازوکار کم‌خونی */
  A['anemia-tree'] = () => {
    const a = 'm' + (++UID);
    const col = (x, c, cl, en, fa, items) => `${pill(x, 66, 110, 40, c)}${t(x + 55, 83, en, { size: 11, fill: cl, w: 900 })}${f(x + 55, 98, fa, { size: 10, fill: cl })}
      ${items.map((s, i) => `<text x="${x + 55}" y="${128 + i * 17}" font-size="10.5" font-weight="700" fill="${INK}" text-anchor="middle" font-family="${FONT_EN}">${s}</text>`).join('')}`;
    return svg(370, 220, `${pill(110, 10, 150, 30, '#c8243f')}${t(185, 25, 'ANEMIA', { size: 12, fill: '#fff', w: 900 })}${f(185, 36, "shortage of RBCs or Hgb", { size: 8.5, fill: '#fde3e7' })}
      ${arrow(a, 150, 42, 72, 62)}${arrow(a, 185, 42, 185, 62)}${arrow(a, 220, 42, 298, 62)}
      ${col(16, '#fff1d6', '#9a5b00', '↓ production', "low production", ['iron-deficiency', 'aplastic', 'pernicious (B12)', 'sideroblastic'])}
      ${col(130, '#fde3e7', '#a31b33', '↑ destruction', "high destruction", ['hemolytic', 'sickle cell', 'thalassemia', 'spherocytic'])}
      ${col(244, '#ede7fc', '#5b3fbf', 'blood loss', "blood loss", ['hemorrhagic', 'acute bleeding', 'chronic bleeding'])}`, "Mechanisms of anaemia", marker(a));
  };

  /* ماتریس لوسمی‌ها */
  A['leuk-matrix'] = () => {
    const c = (x, y, ab, en, fa, col, bg) => `<rect x="${x}" y="${y}" width="108" height="64" rx="12" fill="${bg}"/>${t(x + 54, y + 26, ab, { size: 20, fill: col, w: 900 })}${t(x + 54, y + 42, en, { size: 8.5, fill: col })}${f(x + 54, y + 56, fa, { size: 9, fill: col })}`;
    return svg(350, 190, `${f(60, 66, "acute", { size: 11, fill: INK, w: 800 })}${f(60, 82, "immature cells, rapid", { size: 9 })}${f(60, 136, "chronic", { size: 11, fill: INK, w: 800 })}${f(60, 152, "more mature cells, slow", { size: 9 })}
      ${t(176, 24, 'myelogenous', { size: 11, fill: '#a31b33' })}${f(176, 38, "myeloid line", { size: 9.5 })}${t(290, 24, 'lymphocytic', { size: 11, fill: '#0b7a6c' })}${f(290, 38, "lymphoid line", { size: 9.5 })}
      ${c(122, 46, 'AML', 'acute myelogenous', "common in adults", '#a31b33', '#fde3e7')}${c(236, 46, 'ALL', 'acute lymphocytic', "common in children", '#0b7a6c', '#d9f5ef')}
      ${c(122, 116, 'CML', 'chronic myelogenous', "abnormal chromosome of chronic myeloid leukaemia", '#a31b33', '#fff1f3')}${c(236, 116, 'CLL', 'chronic lymphocytic', "common in older people", '#0b7a6c', '#eefaf7')}`, "Types of leukaemia");
  };

  /* ---------- هموستاز و انتقال خون ---------- */
  /* سه گام هموستاز */
  A.hemostasis = () => {
    const a = 'm' + (++UID), v = 'g' + (++UID);
    const vessel = x => `<rect x="${x}" y="40" width="96" height="56" rx="6" fill="url(#${v})"/><rect x="${x}" y="40" width="96" height="9" fill="#e7a9a2"/><rect x="${x}" y="87" width="96" height="9" fill="#e7a9a2"/>`;
    return svg(340, 178, `${vessel(8)}${vessel(122)}${vessel(236)}
      <path d="M50 40 l6 -10 l6 10" fill="#fff" stroke="#c8243f" stroke-width="1.5"/>${cell.rbc(30, 68, 9)}${cell.rbc(78, 64, 8)}
      <path d="M44 40 q12 10 24 0" stroke="#c8243f" stroke-width="3" fill="none"/>
      ${[[160, 44], [170, 50], [180, 44], [166, 58], [176, 60], [158, 56]].map(p => cell.platelet(p[0], p[1], 6)).join('')}${cell.rbc(138, 72, 8)}${cell.rbc(200, 70, 8)}
      <g stroke="#f2e6c9" stroke-width="1.4">${Array.from({ length: 9 }, (_, i) => `<path d="M${262 + i * 6} 38 l${18 - i * 2} 30"/><path d="M${300 - i * 5} 38 l${-14 + i} 32"/>`).join('')}</g>${cell.rbc(280, 52, 7)}${cell.rbc(296, 60, 7)}${cell.rbc(270, 64, 6)}
      ${t(56, 120, '1. vascular spasm', { size: 10.5 })}${f(56, 134, "narrowing of a vessel", { size: 10 })}
      ${t(170, 120, '2. platelet plug', { size: 10.5 })}${f(170, 134, "platelet plug", { size: 10 })}
      ${t(284, 120, '3. coagulation', { size: 10.5 })}${f(284, 134, "fibrin mesh and clot", { size: 10 })}
      ${arrow(a, 106, 68, 120, 68)}${arrow(a, 220, 68, 234, 68)}${t(170, 156, 'hem/o + -stasis = hemostasis', { size: 11, fill: '#5b3fbf', w: 800 })}${f(170, 170, "blood + stopping = bleeding stops", { size: 10 })}`, "Three steps of haemostasis", `${marker(a)}${linear(v, '#fbe2df', '#f6cfc9', true)}`);
  };

  /* آبشار انعقاد */
  A.clot = () => {
    const a = 'm' + (++UID);
    const step = (y, n, en, fa, c) => `<circle cx="30" cy="${y + 14}" r="12" fill="${c}"/>${t(30, y + 18.5, n, { size: 11.5, fill: '#fff', w: 900 })}<rect x="50" y="${y}" width="260" height="28" rx="10" fill="#fff" stroke="${c}" stroke-width="1.6"/>${t(60, y + 18.5, en, { size: 11, anchor: 'start' })}${f(302, y + 18.5, fa, { size: 9.5, anchor: 'end' })}`;
    return svg(340, 268, `
      ${step(8, '1', 'vessel injury', "vessel injury", '#e5476b')}${arrow(a, 180, 37, 180, 46)}
      ${step(48, '2', 'platelets → thromboplastin', "platelets gather", '#a782d6')}${arrow(a, 180, 77, 180, 86)}
      ${step(88, '3', 'thromboplastin + Ca²⁺ + factors', "calcium and 12 factors", '#e5a500')}${arrow(a, 180, 117, 180, 126)}
      ${step(128, '4', 'prothrombin → thrombin', "thrombin is made", '#ff7a45')}${arrow(a, 180, 157, 180, 166)}
      ${step(168, '5', 'fibrinogen → fibrin', "fibrin threads", '#12a594')}${arrow(a, 180, 197, 180, 206)}
      <rect x="110" y="210" width="140" height="34" rx="12" fill="#c8243f"/>${t(180, 227, 'CLOT (thrombus)', { size: 11.5, fill: '#fff', w: 900 })}${f(180, 239, "clot", { size: 9, fill: '#ffd6dc' })}
      ${curve(a, 'M314 186 C340 210 300 232 254 228', '#12a594', 1.6, true)}${t(322, 250, 'plasmin', { size: 9.5, fill: '#0b7a6c', anchor: 'end' })}${f(322, 262, "clot dissolver", { size: 8.5, anchor: 'end', fill: '#0b7a6c' })}
      ${t(14, 250, 'heparin', { size: 9.5, fill: '#5b3fbf', anchor: 'start' })}${f(14, 262, "clotting inhibitor", { size: 8.5, anchor: 'start', fill: '#5b3fbf' })}`, "The clotting cascade", marker(a));
  };

  /* گروه‌های خونی ABO */
  A.abo = () => {
    const tA = (x, y) => `<path d="M${x} ${y - 5} l5 9 h-10z" fill="#1cb0f6"/>`;
    const tB = (x, y) => `<rect x="${x - 4}" y="${y - 4}" width="8" height="8" rx="1.5" fill="#ff9600"/>`;
    const Y = (x, y, c) => `<path d="M${x} ${y + 9} V${y + 1} M${x} ${y + 1} L${x - 6} ${y - 7} M${x} ${y + 1} L${x + 6} ${y - 7}" stroke="${c}" stroke-width="3" stroke-linecap="round" fill="none"/>`;
    const ring = (cx, cy, fn) => [[0, -25], [24, -8], [16, 21], [-16, 21], [-24, -8]].map((p, i) => fn(i)(cx + p[0], cy + p[1])).join('');
    const col = (x, name, ants, ab) => `<g transform="translate(${x} 0)">
      <rect x="4" y="4" width="78" height="196" rx="12" fill="#fbf7f6" stroke="#efe5e2"/>${t(43, 26, name, { size: 17, w: 900, fill: '#c8243f' })}
      ${cell.rbc(43, 66, 21)}${ring(43, 66, ants)}
      ${f(43, 108, ab[0], { size: 9.5, fill: INK, w: 700 })}<line x1="12" y1="118" x2="74" y2="118" stroke="#e8dcd9"/>
      ${ab[1]}${f(43, 176, ab[2], { size: 9.5, fill: '#0b7a6c', w: 700 })}</g>`;
    return svg(352, 206, `
      ${col(0, 'A', () => tA, ["A antigen", Y(43, 146, '#ff9600'), 'anti-B'])}
      ${col(88, 'B', () => tB, ["B antigen", Y(43, 146, '#1cb0f6'), 'anti-A'])}
      ${col(176, 'AB', i => (i % 2 ? tB : tA), ["A and B", '', "no antibodies"])}
      ${col(264, 'O', () => () => '', ["no antigens", `${Y(32, 146, '#1cb0f6')}${Y(54, 146, '#ff9600')}`, "anti-A and anti-B"])}
      `, "ABO blood groups");
  };

  /* جدول سازگاری گلبول قرمز */
  A['donor-grid'] = () => {
    const G = ['O', 'A', 'B', 'AB'];
    const ok = (d, r) => d === 'O' || d === r || r === 'AB';
    let cells = '';
    G.forEach((r, i) => G.forEach((d, j) => {
      const y = 50 + i * 34, x = 96 + j * 58, good = ok(d, r);
      cells += `<rect x="${x}" y="${y}" width="52" height="28" rx="8" fill="${good ? '#d7ffb8' : '#ffdfe0'}"/>${t(x + 26, y + 19, good ? '✓' : '✗', { size: 15, fill: good ? '#3f8a05' : '#c62828', w: 900 })}`;
    }));
    return svg(340, 200, `${f(213, 18, "red cell donor", { size: 10.5, fill: INK, w: 800 })}
      ${G.map((d, j) => t(122 + j * 58, 40, d, { size: 13, fill: '#c8243f', w: 900 })).join('')}
      ${G.map((r, i) => t(70, 69 + i * 34, r, { size: 13, fill: '#1272a3', w: 900 })).join('')}
      <text x="22" y="110" font-size="10.5" font-weight="800" fill="${INK}" text-anchor="middle" direction="ltr" font-family="${FONT_EN}" transform="rotate(-90 22 110)">recipient</text>
      ${cells}${f(213, 194, "O is the universal donor • AB the universal recipient (ignoring Rh)", { size: 9.5 })}`, "Red cell transfusion compatibility");
  };

  /* بیماری همولیتیک نوزاد (Rh) */
  A['rh-hdn'] = () => {
    const a = 'm' + (++UID);
    const panel = (x, n, title, fa, inner) => `<rect x="${x}" y="6" width="104" height="176" rx="14" fill="#fbf7f6" stroke="#efe5e2"/>${t(x + 52, 24, n, { size: 11, fill: '#7b5ce0', w: 900 })}${f(x + 52, 38, title, { size: 9.5, fill: INK, w: 700 })}${inner}${fa.map((l, i) => f(x + 52, 156 + i * 13, l, { size: 9 })).join('')}`;
    const mom = (x, c) => `<ellipse cx="${x + 52}" cy="94" rx="40" ry="40" fill="${c}" opacity=".5"/>`;
    const baby = (x) => `<circle cx="${x + 52}" cy="100" r="18" fill="#ffd6dc" stroke="#c8243f" stroke-width="1.3"/>${t(x + 52, 104, 'Rh+', { size: 9, fill: '#c8243f', w: 900 })}`;
    const Yb = (x, y) => `<path d="M${x} ${y + 6} V${y} M${x} ${y} l-4 -5 M${x} ${y} l4 -5" stroke="#1272a3" stroke-width="2.2" stroke-linecap="round" fill="none"/>`;
    return svg(340, 188, `
      ${panel(4, "first pregnancy", "Rh− mother, Rh+ fetus", ["fetal cells at delivery", "enter the mother’s blood"], `${mom(4, '#dfe9f6')}${baby(4)}${cell.rbc(36, 72, 6)}${cell.rbc(70, 70, 6)}`)}
      ${panel(118, "after delivery", "the mother is sensitised", ["the mother makes", "anti-Rh antibodies"], `${mom(118, '#dfe9f6')}${[[150, 80], [170, 100], [190, 84], [158, 110], [184, 112]].map(p => Yb(p[0], p[1])).join('')}`)}
      ${panel(232, "next pregnancy", "erythroblastosis fetalis", ["antibodies cross the placenta", "→ haemolysis"], `${mom(232, '#dfe9f6')}${baby(232)}${Yb(266, 92)}${Yb(300, 96)}${Yb(284, 120)}`)}
      ${arrow(a, 108, 90, 116, 90)}${arrow(a, 222, 90, 230, 90)}`, "Rh incompatibility", marker(a));
  };

  /* خونریزی‌های پوستی */
  A.bleeds = () => {
    const skin = 'g' + (++UID);
    const box = (x, art, en, fa) => `<rect x="${x}" y="6" width="80" height="80" rx="12" fill="url(#${skin})"/>${art}${lab(x + 40, 104, en, fa, { size: 10 })}`;
    return svg(340, 130, `
      ${box(4, dots(44, 46, 28, 22, '#a3203a', 1.6, 3), 'petechiae', "pinpoint, tiny")}
      ${box(88, `<path d="M108 40 q8 -10 16 -2 q10 -4 12 8 q6 10 -6 14 q-6 10 -16 2 q-12 0 -6 -22z" fill="#8e2c6e" opacity=".75"/><circle cx="148" cy="64" r="6" fill="#8e2c6e" opacity=".6"/>`, 'purpura', "purple spot")}
      ${box(172, `<ellipse cx="212" cy="46" rx="30" ry="24" fill="#5b3fbf" opacity=".35"/><ellipse cx="210" cy="46" rx="20" ry="15" fill="#3a2380" opacity=".45"/><ellipse cx="220" cy="54" rx="22" ry="12" fill="#c9a200" opacity=".25"/>`, 'ecchymosis', "widespread bruising")}
      ${box(256, `<ellipse cx="296" cy="50" rx="26" ry="20" fill="#7a1530" opacity=".55"/><ellipse cx="290" cy="42" rx="10" ry="5" fill="#fff" opacity=".25"/>`, 'hematoma', "pooled blood, raised")}`, "Bleeding into the skin",
      linear(skin, '#fbe3d3', '#f1cdb6', true));
  };

  /* ---------- دستگاه لنفاوی ---------- */
  /* مسیر لنف */
  A['lymph-flow'] = () => {
    const a = 'm' + (++UID);
    const st = (y, en, fa, c) => `<rect x="60" y="${y}" width="270" height="26" rx="13" fill="${c}"/>${t(76, y + 17, en, { size: 10.5, anchor: 'start' })}${f(320, y + 17, fa, { size: 9.5, anchor: 'end', fill: INK })}`;
    return svg(340, 250, `
      ${st(6, 'interstitial fluid', "fluid between cells", '#fff4cf')}${arrow(a, 195, 33, 195, 41, '#12a594')}
      ${st(44, 'lymph capillaries', "lymph capillary", '#d9f5ef')}${arrow(a, 195, 71, 195, 79, '#12a594')}
      ${st(82, 'lymphatic vessels', "lymph vessel with valves", '#c3eee5')}${arrow(a, 195, 109, 195, 117, '#12a594')}
      ${st(120, 'lymph nodes', "node: filter", '#a7e3d6')}${arrow(a, 195, 147, 195, 155, '#12a594')}
      ${st(158, 'thoracic duct • right lymphatic duct', "ducts", '#8fd9c9')}${arrow(a, 195, 185, 195, 193, '#12a594')}
      <rect x="60" y="196" width="270" height="30" rx="13" fill="#1cb0f6"/>${t(76, 215, 'subclavian veins', { size: 11, anchor: 'start', fill: '#fff' })}${f(320, 215, "back to the blood", { size: 9.5, anchor: 'end', fill: '#fff' })}
      ${f(195, 244, "one-way flow; valves prevent backflow", { size: 10, fill: '#0b7a6c' })}
      ${curve(a, 'M54 210 C14 200 14 30 54 20', '#c8243f', 1.6, true)}${f(28, 124, "cycle", { size: 9.5, fill: '#c8243f', anchor: 'start' })}`, "The path of lymph", marker(a));
  };

  /* گره لنفاوی */
  A.node = () => {
    const a = 'm' + (++UID), g = 'g' + (++UID);
    return svg(340, 214, `
      <path d="M96 52 q70 -48 140 0 q34 34 0 82 q-22 22 -46 8 q-24 -12 -48 0 q-24 16 -46 -8 q-34 -48 0 -82z" fill="url(#${g})" stroke="#0b7a6c" stroke-width="3"/>
      <path d="M118 70 q52 -30 104 0 q22 28 0 56 q-52 22 -104 0 q-22 -28 0 -56z" fill="#e9faf6" opacity=".7"/>
      ${[[118, 66], [150, 52], [190, 52], [222, 66], [114, 112], [226, 112]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="13" fill="#7fd3c6"/><circle cx="${p[0]}" cy="${p[1]}" r="6" fill="#3a8f82" opacity=".6"/>`).join('')}
      ${cell.lymphocyte(166, 92, 9)}${cell.lymphocyte(186, 100, 8)}${cell.monocyte(150, 104, 8)}
      ${curve(a, 'M24 46 C50 48 70 58 96 64', '#12a594', 3)}${curve(a, 'M24 128 C50 122 72 112 98 106', '#12a594', 3)}
      <path d="M190 148 C210 176 250 186 300 188" stroke="#0b7a6c" stroke-width="5" fill="none" marker-end="url(#${a})"/>
      ${lab(20, 16, 'afferent vessels', "afferent vessels (in)", { anchor: 'start', size: 10.5 })}
      ${lab(334, 150, 'efferent vessel', "efferent vessel (out)", { anchor: 'end', size: 10.5 })}
      ${lab(304, 40, 'capsule', "capsule", { anchor: 'end', size: 10 })}<path d="M262 44 L238 54" stroke="${LINE}" stroke-width="1.2"/>
      ${lab(20, 168, 'follicle (nodule)', "nodule; where B cells multiply", { anchor: 'start', size: 10 })}<path d="M70 158 L106 120" stroke="${LINE}" stroke-width="1.2"/><circle cx="106" cy="120" r="2" fill="${LINE}"/>
      ${f(170, 206, "lymphocytes and macrophages filter the lymph", { size: 10, fill: '#0b7a6c' })}`, "lymph node", `${marker(a, '#0b7a6c')}${radial(g, '#d6f4ee', '#9fdccf', '50%')}`);
  };

  /* مویرگ خونی، مایع بینابینی و مویرگ لنفاوی */
  A.capillary = () => {
    const a = 'm' + (++UID), b = 'g' + (++UID), l = 'g' + (++UID);
    return svg(340, 210, `
      <rect x="10" y="22" width="320" height="30" rx="15" fill="url(#${b})"/>${t(170, 42, 'blood capillary', { size: 11.5, fill: '#fff', w: 900 })}
      <rect x="10" y="62" width="320" height="76" rx="10" fill="#fff8e6"/>${f(170, 106, "interstitial fluid", { size: 11, fill: '#a36b00', w: 700 })}
      ${[[44, 84], [100, 120], [266, 86], [224, 122], [160, 80]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="11" fill="#f3ebe4" stroke="#cdbfb3"/><circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#cdbfb3"/>`).join('')}
      ${arrow(a, 70, 54, 70, 74, '#e5a500')}${arrow(a, 130, 54, 130, 74, '#e5a500')}${arrow(a, 196, 130, 196, 154, '#12a594')}${arrow(a, 252, 130, 252, 154, '#12a594')}
      <path d="M10 170 h280 q22 0 30 -16" stroke="url(#${l})" stroke-width="26" stroke-linecap="round" fill="none"/>${t(150, 174, 'lymph capillary → lymph', { size: 11.5, fill: '#fff', w: 900 })}
      ${f(170, 202, "plasma leaves the capillary; some returns to the vessel and the excess becomes lymph", { size: 9.5 })}`, "Interstitial fluid and lymph",
      `${marker(a)}${linear(b, '#e2474f', '#c8243f')}${linear(l, '#4cc4ad', '#12a594')}`);
  };

  /* ---------- ایمنی ---------- */
  /* انواع ایمنی */
  A.immunity = () => {
    const a = 'm' + (++UID);
    const box = (x, y, w, en, fa, c, cl) => `<rect x="${x}" y="${y}" width="${w}" height="40" rx="12" fill="${c}"/>${t(x + w / 2, y + 17, en, { size: 11, fill: cl, w: 900 })}${f(x + w / 2, y + 32, fa, { size: 9.5, fill: cl })}`;
    return svg(360, 236, `
      ${box(120, 6, 120, 'immunity', "immunity, protection", '#ede7fc', '#5b3fbf')}
      ${arrow(a, 150, 46, 92, 64)}${arrow(a, 210, 46, 268, 64)}
      ${box(16, 66, 150, 'natural (innate)', "innate: skin, phagocytes, NK cells", '#fff4cf', '#9a6a00')}
      ${box(194, 66, 150, 'acquired (adaptive)', "acquired: B and T lymphocytes", '#ddf1fb', '#1272a3')}
      ${arrow(a, 238, 106, 204, 126)}${arrow(a, 300, 106, 310, 126)}
      ${box(150, 128, 104, 'active', "the body makes its own", '#d9f5ef', '#0b7a6c')}${box(262, 128, 90, 'passive', "borrowed antibodies", '#fde3e7', '#a31b33')}
      ${f(202, 188, "illness or vaccine", { size: 9.5, fill: '#0b7a6c' })}${f(202, 202, "long memory", { size: 9.5 })}
      ${f(307, 188, "placenta, breast milk", { size: 9.5, fill: '#a31b33' })}${f(307, 202, "gamma globulin • short-term", { size: 9.5 })}
      ${f(92, 130, "no memory, non-specific", { size: 9.5 })}${f(92, 146, "from birth", { size: 9.5 })}`, "Types of immunity", marker(a));
  };

  /* چهار نشانه التهاب */
  A.inflammation = () => {
    const box = (x, icon, la, en, fa, c) => `<rect x="${x}" y="6" width="80" height="120" rx="14" fill="${c}"/>${icon}${t(x + 40, 92, la, { size: 9.5, fill: MUTED, italic: true })}${t(x + 40, 106, en, { size: 11, w: 900 })}${f(x + 40, 120, fa, { size: 10, fill: INK })}`;
    return svg(340, 154, `
      ${box(2, `<circle cx="42" cy="46" r="24" fill="#e5476b" opacity=".85"/><circle cx="42" cy="46" r="14" fill="#ff7a8f"/>`, 'rubor', 'redness', "Redness", '#ffe8ec')}
      ${box(86, `<path d="M126 22 c10 14 -6 18 4 30 c8 10 -2 20 -4 22 c14 -2 22 -14 16 -28 c-4 -10 -14 -14 -16 -24z" fill="#ff9600"/><path d="M118 52 c-6 10 2 20 8 22 c-8 -10 0 -14 -8 -22z" fill="#ffc800"/>`, 'calor', 'heat', "heat", '#fff1d6')}
      ${box(170, `<ellipse cx="210" cy="50" rx="26" ry="20" fill="#f3c2a6"/><ellipse cx="210" cy="46" rx="16" ry="10" fill="#fff" opacity=".35"/>`, 'tumor', 'swelling', "swelling", '#fbefe7')}
      ${box(254, `<path d="M294 24 l-10 22 h12 l-8 24 l22 -30 h-12 l8 -16z" fill="#7b5ce0"/>`, 'dolor', 'pain', "pain", '#efeafd')}
      ${f(170, 146, "histamine widens vessels and makes them leaky; phagocytes reach the site", { size: 9.5 })}`, "Signs of inflammation");
  };

  /* آنتی‌بادی Y شکل */
  A.antibody = () => {
    const h = 'g' + (++UID), l = 'g' + (++UID);
    return svg(340, 210, `
      <g stroke-linecap="round" fill="none"><path d="M170 186 V112" stroke="url(#${h})" stroke-width="16"/><path d="M170 112 L116 56" stroke="url(#${h})" stroke-width="16"/><path d="M170 112 L224 56" stroke="url(#${h})" stroke-width="16"/>
      <path d="M150 186 V118 L102 70" stroke="url(#${l})" stroke-width="7"/><path d="M190 186 V118 L238 70" stroke="url(#${l})" stroke-width="7"/></g>
      <path d="M100 30 l16 -11 16 11 -7 15 h-18z" fill="#ff9600"/><path d="M208 30 l16 -11 16 11 -7 15 h-18z" fill="#ff9600"/>
      <rect x="96" y="50" width="40" height="12" rx="6" fill="#ffc800" opacity=".6"/><rect x="204" y="50" width="40" height="12" rx="6" fill="#ffc800" opacity=".6"/>
      ${lab(60, 24, 'antigen', "antigen", { size: 11, fill: '#cc7800' })}${lab(294, 52, 'binding site', "binding site", { size: 10.5 })}
      ${lab(232, 168, 'heavy chain', "heavy chain", { size: 10.5, anchor: 'start' })}${lab(256, 110, 'light chain', "light chain", { size: 10.5, anchor: 'start' })}
      ${t(84, 150, 'Fc stem', { size: 10, fill: MUTED })}${f(84, 164, "stem", { size: 9.5 })}
      ${t(170, 204, 'antibody = immunoglobulin (Ig)', { size: 11, fill: '#1581b8', w: 900 })}`, "Antibody", `${linear(h, '#36b8f0', '#1272a3', true)}${linear(l, '#b9e8fd', '#7fcdf3', true)}`);
  };

  /* پنج رده ایمونوگلوبولین */
  A['ig-classes'] = () => {
    const Y = (x, y, s, c) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 18 V2 M0 2 L-11 -11 M0 2 L11 -11" stroke="${c}" stroke-width="5" stroke-linecap="round" fill="none"/></g>`;
    const col = (x, name, art, fa, note) => `<rect x="${x}" y="6" width="64" height="150" rx="12" fill="#f4fbff" stroke="#d7eefa"/>${t(x + 32, 26, name, { size: 13, fill: '#1272a3', w: 900 })}${art}${f(x + 32, 124, fa, { size: 9.5, fill: INK, w: 700 })}${f(x + 32, 140, note, { size: 8.5 })}`;
    const pent = (cx, cy) => [0, 1, 2, 3, 4].map(i => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return `<g transform="rotate(${i * 72 + 180} ${cx} ${cy})">${Y(cx, cy - 18, .8, '#7b5ce0')}</g>`; }).join('') + `<circle cx="${cx}" cy="${cy}" r="5" fill="#7b5ce0"/>`;
    return svg(340, 162, `
      ${col(2, 'IgG', Y(34, 66, 1.4, '#1899d6'), "most abundant", "crosses the placenta")}
      ${col(70, 'IgM', pent(102, 70), "five-unit", "first response")}
      ${col(138, 'IgA', `<g transform="rotate(90 162 70)">${Y(162, 70, 1.1, '#12a594')}</g><g transform="rotate(-90 178 70)">${Y(178, 70, 1.1, '#12a594')}</g>`, "two-unit", "tears, saliva, milk")}
      ${col(206, 'IgE', `${Y(238, 66, 1.4, '#e5476b')}<circle cx="238" cy="96" r="7" fill="#ffd36b"/>`, "allergy", "Parasites")}
      ${col(274, 'IgD', `${Y(306, 66, 1.4, '#9aa9b1')}<rect x="292" y="88" width="28" height="8" rx="4" fill="#dfe6ea"/>`, "B cell surface", "receptor")}`, "Immunoglobulin classes");
  };

  /* لنفوسیت‌های B و T */
  A['bt-cells'] = () => {
    const a = 'm' + (++UID);
    const Y = (x, y, c) => `<path d="M${x} ${y + 6} V${y} M${x} ${y} l-4 -5 M${x} ${y} l4 -5" stroke="${c || '#1899d6'}" stroke-width="2.2" stroke-linecap="round" fill="none"/>`;
    return svg(360, 226, `
      ${pill(8, 6, 166, 24, '#ddf1fb')}${t(91, 22, 'humoral immunity', { size: 11, fill: '#1272a3', w: 900 })}
      ${pill(186, 6, 166, 24, '#d9f5ef')}${t(269, 22, 'cell-mediated immunity', { size: 11, fill: '#0b7a6c', w: 900 })}
      ${cell.lymphocyte(40, 78, 24)}${lab(40, 120, 'B cell', "bone marrow", { size: 10.5 })}${arrow(a, 66, 78, 88, 78)}
      ${cell.plasma(118, 78, 22)}${lab(118, 120, 'plasma cell', "plasma cell", { size: 10.5 })}
      ${[[150, 60], [160, 80], [150, 96], [166, 102]].map(p => Y(p[0], p[1])).join('')}${f(96, 150, "antibodies in blood and lymph", { size: 10, fill: '#1272a3' })}
      ${cell.lymphocyte(214, 78, 22)}${lab(214, 120, 'helper T', "CD4 • commander", { size: 10.5 })}${arrow(a, 238, 78, 262, 78, '#0b7a6c')}
      ${cell.lymphocyte(290, 78, 22)}<circle cx="290" cy="78" r="23" fill="none" stroke="#e5476b" stroke-width="2" stroke-dasharray="3 3"/>${lab(290, 120, 'cytotoxic T', "CD8 • killer", { size: 10.5 })}
      <circle cx="336" cy="74" r="12" fill="#f3e3c8" stroke="#c9a46a"/>${dots(336, 74, 8, 5, '#c8243f', 1.6, 2)}${arrow(a, 312, 76, 322, 75, '#e5476b')}
      ${f(270, 150, "direct attack on infected or cancer cells", { size: 10, fill: '#0b7a6c' })}
      <rect x="40" y="168" width="280" height="44" rx="12" fill="#fbf7f6"/>${f(180, 186, "B from Bone marrow and T from Thymus", { size: 11, fill: INK, w: 800 })}${f(180, 203, "HIV destroys CD4 cells; both arms of immunity are crippled", { size: 9.5 })}`, "B and T lymphocytes", marker(a));
  };

  /* ازدیاد حساسیت فوری */
  A.allergy = () => {
    const a = 'm' + (++UID), g = 'g' + (++UID);
    const Y = (x, y) => `<path d="M${x} ${y + 7} V${y} M${x} ${y} l-4 -5 M${x} ${y} l4 -5" stroke="#e5476b" stroke-width="2.4" stroke-linecap="round" fill="none"/>`;
    return svg(360, 178, `
      ${[[24, 30], [40, 52], [20, 64]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="#ffc800" stroke="#e5a500"/>`).join('')}${lab(32, 92, 'allergen', "allergen", { size: 10.5 })}
      ${arrow(a, 54, 50, 92, 56)}
      <circle cx="140" cy="60" r="38" fill="url(#${g})" stroke="#c9a46a" stroke-width="1.5"/>${dots(140, 62, 26, 26, '#8e2c6e', 2.4, 6)}
      ${[0, 1, 2, 3, 4, 5, 6].map(i => { const an = -Math.PI * .9 + i * Math.PI * .3; return Y(140 + Math.cos(an) * 42, 60 + Math.sin(an) * 42); }).join('')}
      ${lab(140, 118, 'mast cell + IgE', "mast cell with IgE", { size: 10.5 })}
      ${arrow(a, 184, 58, 214, 58)}
      ${[[232, 40], [244, 58], [228, 70], [250, 34], [256, 72]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#8e2c6e"/>`).join('')}${lab(244, 104, 'histamine', "allergy chemical released by mast cells", { size: 10.5 })}
      ${arrow(a, 268, 58, 290, 58)}
      ${f(326, 34, "Hives", { size: 10, fill: INK, w: 700 })}${f(326, 50, "runny nose", { size: 10, fill: INK, w: 700 })}${f(326, 66, "shortness of breath", { size: 10, fill: INK, w: 700 })}${f(326, 82, "low pressure", { size: 10, fill: '#c62828', w: 800 })}
      <rect x="24" y="138" width="312" height="30" rx="12" fill="#fff1d6"/>${f(180, 158, "treatment: avoid the allergen • antihistamine • in anaphylaxis: immediate epinephrine", { size: 10, fill: '#9a5b00', w: 700 })}`, "An allergic reaction", `${marker(a)}${radial(g, '#fff7e8', '#f3dcb5')}`);
  };

  /* HIV و سلول CD4 */
  A.hiv = () => {
    const a = 'm' + (++UID), g = 'g' + (++UID);
    return svg(340, 180, `
      <circle cx="74" cy="78" r="36" fill="url(#${g})" stroke="#c8243f" stroke-width="2"/>${Array.from({ length: 12 }, (_, i) => { const an = i / 12 * Math.PI * 2; return `<line x1="${74 + Math.cos(an) * 36}" y1="${78 + Math.sin(an) * 36}" x2="${74 + Math.cos(an) * 46}" y2="${78 + Math.sin(an) * 46}" stroke="#c8243f" stroke-width="2.4"/><circle cx="${74 + Math.cos(an) * 48}" cy="${78 + Math.sin(an) * 48}" r="4.4" fill="#ff9600"/>`; }).join('')}
      <path d="M62 64 l24 0 l-7 26 h-10z" fill="#c8243f"/><path d="M68 72 q6 4 12 0 M68 80 q6 4 10 0" stroke="#ffd36b" stroke-width="1.6" fill="none"/>
      ${lab(74, 146, 'HIV (retrovirus)', "RNA virus", { size: 11 })}
      ${arrow(a, 132, 78, 176, 78, '#c8243f', 2.4)}
      ${cell.lymphocyte(236, 78, 54)}<path d="M186 66 l9 -4 M186 90 l9 4" stroke="#1cb0f6" stroke-width="4" stroke-linecap="round"/>
      ${lab(236, 146, 'CD4 (helper) T cell', "the virus’s target", { size: 11 })}
      ${f(170, 174, "CD4 below 200 per microlitre = AIDS → opportunistic infections", { size: 10, fill: '#a31b33', w: 700 })}`, "HIV and the CD4 cell", `${marker(a, '#c8243f')}${radial(g, '#ffe8ec', '#ffb3c0')}`);
  };

  /* ---------- آزمایش و ICU ---------- */
  A.cbc = () => {
    const rows = [['WBC', "white blood cell", '5.0–10.0', '×10³/µL'], ['RBC', "red blood cell", '4.2–6.4', '×10⁶/µL'], ['Hgb', "oxygen-carrying protein of red cells", '12–18', 'g/dL'], ['Hct', "percentage of red cells in blood (packed cell volume)", '37–52', '%'], ['MCV', "cell volume", '80–100', 'fL'], ['PLT', "platelet", '150–450', '×10³/µL']];
    return svg(340, 250, `<rect x="8" y="8" width="324" height="34" rx="10" fill="#c8243f"/>${t(20, 30, 'CBC', { size: 15, fill: '#fff', w: 900, anchor: 'start' })}${f(322, 30, "complete blood count", { size: 11, fill: '#fff', anchor: 'end', w: 700 })}
      ${t(20, 58, 'test', { size: 9.5, fill: MUTED, anchor: 'start' })}${t(220, 58, 'reference range', { size: 9.5, fill: MUTED })}${t(318, 58, 'unit', { size: 9.5, fill: MUTED, anchor: 'end' })}
      ${rows.map((r, i) => `<rect x="8" y="${64 + i * 28}" width="324" height="26" rx="6" fill="${i % 2 ? '#fff' : '#f8f6f5'}"/>${t(20, 81 + i * 28, r[0], { size: 12, anchor: 'start', w: 900, fill: '#a31b33' })}${f(112, 81 + i * 28, r[1], { size: 10, anchor: 'end', fill: INK })}${t(220, 81 + i * 28, r[2], { size: 11.5 })}${t(318, 81 + i * 28, r[3], { size: 10, anchor: 'end', fill: MUTED })}`).join('')}
      ${f(170, 244, "approximate adult values; each lab has its own ranges", { size: 9.5 })}`, "The CBC test");
  };

  /* پیوستار سپسیس */
  A.sepsis = () => {
    const a = 'm' + (++UID);
    const steps = [['infection', ["infection", "applied to the skin"], '#ffe1a8'], ['SIRS', ["inflammation", "systemic"], '#ffc27a'], ['sepsis', ["damage", "organ"], '#ff9a6b'], ['septic|shock', ["low pressure", "resistant"], '#f2665c'], ['MODS', ["failure", "multiple organs"], '#c8243f']];
    return svg(360, 170, `${steps.map((s, i) => { const x = 6 + i * 70; return `<path d="M${x} 40 h58 l10 22 l-10 22 h-58 l10 -22z" fill="${s[2]}"/>${s[0].split('|').map((w, j, all) => t(x + 34, 66 + (j - (all.length - 1) / 2) * 12, w, { size: 10, fill: i > 2 ? '#fff' : INK, w: 900 })).join('')}${s[1].map((w, j) => f(x + 34, 100 + j * 12, w, { size: 9.5, fill: j ? MUTED : INK })).join('')}`; }).join('')}
      ${t(180, 24, 'severity →', { size: 10, fill: MUTED })}
      <rect x="20" y="124" width="320" height="34" rx="12" fill="#fff4f2"/>${f(180, 140, "markers: CRP and hs-CRP • procalcitonin for bacterial infection • lactate in shock", { size: 9.5, fill: '#a31b33', w: 700 })}${f(180, 153, "cytokine storm: unchecked cytokine release → MODS", { size: 9.5 })}`, "The sepsis continuum", marker(a));
  };

  /* آهن و هپسیدین */
  A.iron = () => {
    const a = 'm' + (++UID);
    const box = (x, y, en, fa, c) => `<rect x="${x}" y="${y}" width="96" height="40" rx="12" fill="${c}"/>${t(x + 48, y + 17, en, { size: 10.5, w: 900 })}${f(x + 48, y + 32, fa, { size: 9.5, fill: INK })}`;
    return svg(360, 214, `
      ${box(10, 20, 'gut', "absorbing iron from food", '#fff1d6')}${box(132, 20, 'transferrin', "carrying iron in the blood", '#ffe8ec')}${box(254, 20, 'bone marrow', "making haemoglobin", '#fde3e7')}
      ${arrow(a, 106, 40, 130, 40)}${arrow(a, 228, 40, 252, 40)}
      ${box(132, 104, 'macrophage', "storage (ferritin)", '#ede7fc')}${curve(a, 'M180 62 L180 100', LINE, 1.6)}${curve(a, 'M200 104 C230 80 240 70 260 62', LINE, 1.6, true)}
      <rect x="10" y="104" width="100" height="56" rx="12" fill="#c8243f"/>${t(60, 124, 'hepcidin', { size: 11.5, fill: '#fff', w: 900 })}${f(60, 140, "from the liver; ↑ in inflammation", { size: 9.5, fill: '#ffe1e6' })}${f(60, 153, 'IL-6', { size: 8.5, fill: '#ffe1e6' })}
      <path d="M60 104 L60 70" stroke="#c8243f" stroke-width="2.2"/><path d="M52 70 h16" stroke="#c8243f" stroke-width="4" stroke-linecap="round"/>
      <path d="M110 128 L128 126" stroke="#c8243f" stroke-width="2.2"/><path d="M128 118 v16" stroke="#c8243f" stroke-width="4" stroke-linecap="round"/>
      <rect x="20" y="172" width="320" height="34" rx="12" fill="#f8f6f5"/>${f(180, 186, "hepcidin blocks iron entry from the gut and its release from macrophages", { size: 9.5, fill: INK, w: 700 })}${f(180, 199, "result: high ferritin but little available iron → anaemia of inflammation", { size: 9.5 })}`, "Iron and hepcidin", marker(a));
  };

  /* ---------- واژه‌سازی ---------- */
  /* آناتومی یک واژه */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 128, fa, { size: 9.5, fill: c })}`;
    return svg(360, 190, `${f(180, 22, "one word = prefix + root + combining vowel + suffix", { size: 11, fill: INK, w: 700 })}
      ${part(14, 54, 'pan', '#1272a3', '#ddf1fb')}${part(72, 50, 'cyt', '#a31b33', '#fde3e7')}${part(126, 24, 'o', '#9a5b00', '#fff1d6')}${part(154, 76, 'penia', '#3f8a05', '#e7f9d8')}
      ${br(14, 68, 'prefix', "prefix: all", '#1272a3')}${br(72, 122, 'root', "root: cell", '#a31b33')}${br(126, 150, 'vowel', "link", '#9a5b00')}${br(154, 230, 'suffix', "suffix: deficiency", '#3f8a05')}
      <rect x="244" y="40" width="104" height="40" rx="10" fill="#f8f6f5"/>${f(296, 58, "deficiency of", { size: 11, fill: '#3f8a05', w: 800 })}${f(296, 74, "all cells", { size: 11, fill: INK, w: 800 })}
      <path d="M236 60 h6" stroke="${LINE}" stroke-width="2"/>
      <path d="M220 150 C160 176 90 176 40 150" stroke="#c8243f" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M44 146 l-6 4 l7 3" stroke="#c8243f" stroke-width="2" fill="none"/>
      ${f(130, 184, "Read the meaning from the end: suffix → prefix → root", { size: 10, fill: '#c8243f', w: 700 })}`, "The anatomy of a medical word");
  };

  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* ایمنا — دنیای ۰: زبان پزشکی (پایه همه دنیاها)
 * پیش از ورود به خون، لنف و ایمنی، «دستور زبان» واژه‌های پزشکی را یاد می‌گیریم:
 * قطعه‌های واژه، پیشوندهای دوقلو، ریشه‌های رنگ و جای بدن، پسوندهای بیماری و روش، جمع‌های لاتین، تلفظ و دام‌های همزاد.
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: "Language of Medicine", short: "tongue", sub: "The word code: parts, prefixes, suffixes, plurals, pronunciation and look-alike traps",
    color: '#4F5BD5', dark: '#3540A8', light: '#E3E6FB',
    levels: ["Puzzle pieces", "Suffixes in action", "Like a pro"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: قطعه‌های پازل ================= */
      {
        id: 'lx1', title: "The anatomy of a word", icon: '🧩', items: [
          L("Every medical word is a puzzle", `Medical words look scary, but most are built from a few <b>fixed parts</b>:<br>• <b>prefix</b> at the start: ${e('pan-')} = all<br>• <b>root</b> in the middle: ${e('cyt')} = cell<br>• <b>suffix</b> at the end: ${e('-penia')} = deficiency${fig('wordparts', '', "pancytopenia: a deficiency of all blood cells. About 100 parts unlock thousands of words.")}`),
          L("The combining vowel o", `We usually join a root to the next part with a <b>combining vowel</b> (mostly <b>o</b>). Root + vowel is called the <b>combining form</b> and is written with a slash: ${e('hem/o')}, ${e('cyt/o')}.<br><br>Golden rule: if the suffix starts with a <b>vowel</b>, the o is dropped:<br>• ${e('leuk/o + -emia')} → ✅ <b>leukemia</b> (not leukoemia)<br>• ${e('leuk/o + -cyte')} → ✅ <b>leukocyte</b> (the o stays)${memo("The o is like glue: it is needed between two consonants; when the suffix already starts with a vowel, the glue is not needed.")}`),
          M(`In the word ${e('<b>leukemia</b>')}, why has the vowel o been dropped?`, ["because the suffix -emia starts with a vowel", "because leuk/o is a prefix", "because the o is always dropped", "because the word is not Greek"], "When the suffix starts with a vowel (a, e, i, o, u), the combining vowel is dropped: leuk + emia."),
          L("Read the meaning from the end", `To find the meaning, <b>start with the suffix</b>, then the prefix, and finally read the roots:<br>${wb('hemat/o', '-logy')} → “study of” + “blood” = <b>study of the blood</b><br>${wb('hemat/o', '-logist')} → blood <b>specialist</b><br>${wb('erythr/o', 'cyt/o', '-penia')} → “deficiency of” + “cells” + “red” = a shortage of red cells${memo("First ask “what happened?” (suffix), then “to what?” (roots). Like a news report: the event, then the place.")}`),
          P("Match each piece to its type", [['pan-', "prefix"], ['hem/o', "root plus combining vowel"], ['-penia', "suffix"], ["the o in cyt/o", "combining vowel"]]),
          O(`Put the pieces of ${e('erythrocytopenia')} in writing order`, ['erythr/o', 'cyt/o', '-penia'], "erythr/o (red) + cyt/o (cell) + -penia (deficiency). Written left to right; read for meaning from the end."),
          T("The two roots hem/o and hemat/o both mean “blood”.", true, "True. hemoglobin and hematology both relate to blood; sanguin/o also means blood."),
          B("In the word hematologist, the suffix ___ means “specialist”.", ['-logist', '-logy', '-ic'], "-logy is the science and -logist the specialist in that science."),
          W("Build a word meaning “the study of the blood”", ['hemat/o', '-logy'], ['-logist', 'cyt/o', '-emia'], "hemat/o (blood) + -logy (study of) = hematology."),
          S("Spell the term for a blood specialist", 'hematologist', 'hemat/o + -logist = hematologist.', 'hema…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx2', title: "Twin prefixes", icon: '👯', items: [
          L("Learn prefixes in pairs", `Most prefixes have an opposite “twin”; learn them in pairs and you halve the work:${tbl([["prefix", "Meaning", "Opposite twin"], [e('hyper-'), "excessive, above", e('hypo-') + " low, below"], [e('macro-'), "large", e('micro-') + " small"], [e('poly-'), "many", e('mono-') + " one"], [e('inter-'), "between (two things)", e('intra-') + " within"], [e('auto-'), "self", e('all/o') + " other, foreign"]])}${memo(`Remember ${e('hypo')} through “hippo”: always <b>under</b> the water → below and low. ${e('hyper')} is like a “hypermarket”: more than enough!`)}`),
          P("Match each prefix to its meaning", [['hypo-', "low, below"], ['macro-', "large"], ['poly-', "many"], ['intra-', "within"], ['auto-', "self"]]),
          M(`${e('<b>hypochromic</b>')} means the red cell…`, ["is paler than normal", "is more deeply coloured than normal", "is larger than normal", "has a nucleus"], "hypo- (low) + chrom/o (colour) + -ic: pale, because it holds less haemoglobin."),
          L("Whose blood?", `In transfusion, prefixes tell you where the blood came from:${vs(['autologous', "auto- = self: the patient’s own blood stored before surgery"], ['homologous', "homo- = same kind: blood from another human donor"])}and ${e('all/o')} (other, foreign) appears in <b>allergy</b> and allogeneic (a transplant from another person).${pearl("Before planned orthopaedic surgery, a patient stores a few units of their own blood: autologous transfusion; the risk of incompatibility and infection is almost zero.")}`),
          M("What is blood a patient stores from themselves a few weeks before surgery called?", ['autologous', 'homologous', 'allergic', 'interstitial'], "auto- = self; autologous blood is the patient’s own blood."),
          T(`${e('macrocyte')} is a red cell that is larger than usual.`, true, "macro- (large) + -cyte (cell). In B12 and folate deficiency anaemia the cells become large."),
          B("In polycythemia, the prefix ___ means “many”.", ['poly-', 'mono-', 'pan-'], "poly- = many: polycythemia means too many red cells in the blood."),
          M("In which word does the prefix mean “within”?", ['intravenous', 'interstitial', 'transfusion', 'antibody'], "intra- = within: intravenous means within a vein. inter- (between) is in interstitial: the fluid “between” cells."),
          W("Build a word meaning “a deficiency of all cells”", ['pan-', 'cyt/o', '-penia'], ['poly-', '-cytosis', 'mono-'], "pan- (all) + cyt/o (cell) + -penia (deficiency) = pancytopenia."),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx3', title: "A Rainbow of Roots", icon: '🎨', items: [
          L("Words have colours too", `Many blood names are the colour of what was seen under the microscope:${tbl([["root", "colour", "Example"], [e('erythr/o'), "red", e('erythrocyte')], [e('leuk/o'), "white", e('leukocyte')], [e('cyan/o'), "blue", e('cyanosis')], [e('melan/o'), "black", e('melanoma')], [e('xanth/o'), "yellow", e('xanthoma')], [e('eosin/o'), "rosy", e('eosinophil')]])}${memo(`The country name Eritrea comes from this same Greek ${e('erythr')}: the land beside the <b>Red Sea</b>.`)}`),
          P("Match each root to its colour", [['erythr/o', "red"], ['leuk/o', "white"], ['cyan/o', "blue"], ['melan/o', "black"], ['xanth/o', "yellow"]]),
          M(`What sign is ${e('<b>cyanosis</b>')}?`, ["bluish skin and lips from lack of oxygen", "yellowing of the skin", "redness and inflammation of the skin", "blackening of a nail"], "cyan/o (blue) + -osis (condition): a blue-grey skin colour when haemoglobin lacks oxygen."),
          L("Cell colour with -chromic", `${e('chrom/o')} = colour. In a blood smear report, the colour of the red cells shows the amount of <b>haemoglobin</b>:<br>• <b>normochromic</b>: normal colour<br>• <b>hypochromic</b>: pale (low haemoglobin)<br>${pearl("“Hypochromic microcytic” means small, pale cells; the first thought is iron-deficiency anaemia. “Normochromic normocytic” is seen in acute bleeding and anaemia of chronic disease.")}`),
          M("Smear report: “hypochromic, microcytic”. What is the first likely diagnosis?", ["iron-deficiency anaemia", "B12-deficiency anaemia", "acute leukaemia", "polycythaemia"], "Small, pale cells = less haemoglobin per cell; the commonest cause is iron deficiency. B12 deficiency makes large (macrocytic) cells.", [["Patient", "30-year-old woman, tiredness and pallor"], ["Blood smear", "hypochromic, microcytic"], ['MCV', '68 fL']]),
          T(`${e('leukocyte')} means “white cell”.`, true, "leuk/o (white) + -cyte (cell): white blood cell."),
          B("In eosinophil, the root eosin/o means ___.", ["rosy", "white", "black"], "eosin/o = rosy (the colour of dawn); its granules turn red-orange with the acidic dye eosin."),
          W("Build a word meaning “a shortage of white cells”", ['leuk/o', '-penia'], ['erythr/o', '-emia', 'cyan/o'], "leuk/o (white) + -penia (deficiency) = leukopenia."),
          S("Spell the term for a red blood cell", 'erythrocyte', "erythr/o + -cyte = erythrocyte; watch the y after the r.", 'eryth…'),
          N('r2m:lx')
        ]
      },

      /* ================= سطح ۲: پسوندها در عمل ================= */
      {
        id: 'lx4', title: "Disease suffixes", icon: '🌡️', items: [
          L("Too few or too many?", `Two common blood suffixes are exact opposites:${vs(['-penia', "deficiency: leukopenia, thrombocytopenia"], ['-cytosis', "increase in cells: leukocytosis, thrombocytosis"])}${memo(`Remember ${e('penia')} through “penny”, the smallest coin: <b>too little</b>!`)}`),
          M(`${e('<b>thrombocytosis</b>')} means…`, ["A high platelet count", "A low platelet count", "clot in a vein", "inflammation of platelets"], "thromb/o (clot, platelet) + -cytosis (increase in cells). A fall in platelets is thrombocytopenia."),
          L("Four ever-present suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-itis'), "inflammation", e('lymphadenitis')], [e('-oma'), "tumour, mass", e('lymphoma')], [e('-osis'), "abnormal condition", e('leukocytosis')], [e('-pathy'), "disease", e('lymphadenopathy')], [e('-megaly'), "enlargement", e('splenomegaly')]])}${pearl(`A famous trap: although ${e('<b>hematoma</b>')} ends in -oma, it is <b>not a tumour</b>; it is a local collection of blood (a raised bruise).`)}`),
          T(`${e('hematoma')} is a type of blood cancer.`, false, "False. A hematoma is a mass of clotted blood outside a vessel; here -oma just means “mass”. Blood cancer is leukemia."),
          P("Match each suffix to its meaning", [['-itis', "inflammation"], ['-oma', "tumour, mass"], ['-pathy', "disease"], ['-megaly', "enlargement"], ['-lysis', "breakdown, destruction"]]),
          L("-emia: the “blood” scene", `${e('-emia')} means a <b>blood condition</b>; wherever you see it, the problem is in the blood:<br>• <b>anemia</b>: an- (without) → a shortage of red cells or haemoglobin<br>• <b>leukemia</b>: cancer of the white cells<br>• <b>septicemia</b>: infection (bacteria and their toxins) in the blood<br>• <b>hyperlipidemia</b>: too much fat in the blood${memo("Picture -emia as yellow crime-scene tape: in any word that has it, the crime happened in the “blood”.")}`),
          B("Septicemia means infection is present in the ___.", ["blood", "lymph node", "spleen"], "septic/o (infection) + -emia (blood condition)."),
          M(`${e('<b>splenomegaly</b>')} means…`, ["enlarged spleen", "inflammation of the spleen", "removal of the spleen", "tumour of the spleen"], "splen/o (spleen) + -megaly (enlargement). Inflammation = splenitis, removal = splenectomy."),
          W("Build a word meaning “disease of the lymph nodes”", ['lymphaden/o', '-pathy'], ['-itis', 'splen/o', '-oma'], "lymphaden/o (lymph node) + -pathy (disease) = lymphadenopathy; usually used for enlarged nodes."),
          N('wb:lx')
        ]
      },
      {
        id: 'lx5', title: "Procedure and surgery suffixes", icon: '🔪', items: [
          L("Cutting or removing?", `The two surgical suffixes most often mixed up:${vs(['-tomy', "cutting into: lymphadenotomy (incision of a node)"], ['-ectomy', "removal: splenectomy (removal of the spleen)"])}${memo(`${e('ec-')} is Greek for “out”: ${e('ec + tomy')} = cut and <b>take out</b>. Without ec it is just a cut.`)}`),
          M(`${e('<b>tonsillectomy</b>')} means…`, ["removal of the tonsils", "incision of the tonsils", "inflammation of the tonsils", "enlargement of the tonsils"], "tonsill/o (tonsil) + -ectomy (removal). Note: tonsil has one l, but tonsillectomy has two."),
          L("Film or photo?", `${vs(['-graphy', "imaging process: lymphangiography"], ['-gram', "recorded image: lymphangiogram"])}${memo("-graphy is like “filming” (the work in progress); -gram is like “a printed photo” (the final result).")}`),
          P("Match each suffix to its meaning", [['-tomy', "incision"], ['-ectomy', "removal"], ['-graphy', "imaging process"], ['-gram', "recorded image"], ['-rrhaphy', "stitch"]]),
          T(`${e('lymphangiogram')} is the name of the process of imaging the lymph vessels.`, false, "False. The process is lymphangiography; a lymphangiogram is the image it produces."),
          L("Treatment and separation", `• ${e('-therapy')} = treatment: <b>chemotherapy</b> (drugs), <b>radiotherapy</b> (radiation), <b>immunotherapy</b> (boosting or steering immunity)<br>• ${e('-apheresis')} = separation and removal: blood passes through a machine, one component is removed and the rest returned<br>${wb('plasm/o', '-apheresis')} → <b>plasmapheresis</b>${pearl("In plateletpheresis the donor gives only platelets and gets their red cells back, so they can donate again sooner.")}`),
          B("In plasmapheresis, ___ is separated from the blood and the rest is returned to the patient.", ["liquid part of blood", "platelet", "red blood cell"], "plasm/o (plasma) + -apheresis (separation)."),
          M("Which word means “suturing the spleen”?", ['splenorrhaphy', 'splenectomy', 'splenotomy', 'splenomegaly'], "splen/o + -rrhaphy (suture). For example, for a spleen torn in an accident, if it can be saved."),
          W("Build a word meaning “removal of the thymus”", ['thym/o', '-ectomy'], ['-tomy', 'splen/o', '-graphy'], "thym/o (thymus) + -ectomy (removal) = thymectomy; for example in thymoma and myasthenia gravis."),
          S("Spell the term for removal of the spleen", 'splenectomy', "splen/o + -ectomy; the o is dropped because -ectomy starts with a vowel.", 'splen…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx6', title: "A body map in words", icon: '🗺️', items: [
          L("Body-location roots", `These roots tell you <b>where</b> things happen:${tbl([["root", "Meaning", "Example"], [e('cervic/o'), "neck", 'cervical nodes'], [e('axill/o'), "armpit", 'axillary nodes'], [e('inguin/o'), "groin", 'inguinal nodes'], [e('splen/o'), "spleen", 'splenic'], [e('hepat/o'), "liver", 'hepatomegaly'], [e('phleb/o') + ", " + e('ven/o'), "vein", 'phlebotomy']])}${fig('lymph-nodes-regional', '', "Regional lymph nodes: cervical, axillary, mediastinal and inguinal")}`),
          M("Where are the “inguinal” lymph nodes?", ["groin", "armpit", "neck", "in the middle of the chest"], "inguin/o = groin. The armpit is axillary and the neck cervical."),
          P("Match each root to its place in the body", [['cervic/o', "neck"], ['axill/o', "armpit"], ['inguin/o', "groin"], ['hepat/o', "liver"], ['thym/o', "thymus"]]),
          L("One root, two places: myel/o", `${e('myel/o')} has two meanings: <b>bone marrow</b> and <b>spinal cord</b> (both are the “marrow” inside bone).<br>• In blood: <b>myeloid</b>, <b>myeloma</b>, <b>myelogenous leukemia</b> → bone marrow<br>• In the nervous system: <b>myelitis</b>, poliomyelitis → spinal cord${pearl(`In the world of blood, myel/o almost always means bone marrow. Do not mix it up with ${e('my/o')} (muscle, as in myalgia).`)}`),
          T(`In the word ${e('multiple myeloma')}, the root myel/o refers to the bone marrow.`, true, "True. Multiple myeloma is a cancer of plasma cells in the bone marrow."),
          M(`On the ward, ${e('<b>phlebotomy</b>')} means…`, ["drawing blood from a vein", "removal of a lymph node", "blood transfusion", "inflammation of a vein"], "phleb/o (vein) + -tomy (cutting, puncturing): drawing blood; inflammation of a vein is phlebitis."),
          B("“Cervical” lymphadenopathy means enlarged nodes in the ___ region.", ["neck", "armpit", "groin"], "cervic/o = neck (in women the cervix is also the “neck” of the womb)."),
          W("Build a word meaning “enlargement of the liver”", ['hepat/o', '-megaly'], ['splen/o', '-itis', '-ectomy'], "hepat/o (liver) + -megaly (enlargement) = hepatomegaly; seen with splenomegaly in leukaemia and lymphoma."),
          S("Spell the adjective meaning “pertaining to the armpit”", 'axillary', "axill/o + -ary; it has two l’s.", 'axil…'),
          N('m2r:lx')
        ]
      },

      /* ================= سطح ۳: مثل یک حرفه‌ای ================= */
      {
        id: 'lx7', title: "Latin singular and plural", icon: '📚', items: [
          L("Plurals that don’t take an s", `Greek and Latin words form their plurals by their own rules:${tbl([["Singular ending", "Plural ending", "Example"], [e('-us'), e('-i'), e('thrombus → thrombi')], [e('-a'), e('-ae'), e('petechia → petechiae')], [e('-um'), e('-a'), e('bacterium → bacteria')], [e('-is'), e('-es'), e('diagnosis → diagnoses')], [e('-ix, -ex'), e('-ices'), e('index → indices')], [e('-on'), e('-a'), e('ganglion → ganglia')]])}${memo(`“US” goes, “I” comes: ${e('nucleus → nuclei')}, ${e('embolus → emboli')}. As if “us” turned into lots of “I”s!`)}`),
          M(`What is the plural of ${e('<b>thrombus</b>')}?`, ['thrombi', 'thrombuses', 'thrombae', 'thrombia'], "-us → -i: thrombus → thrombi, embolus → emboli, nucleus → nuclei."),
          P("Match each singular to its plural", [['embolus', 'emboli'], ['petechia', 'petechiae'], ['bacterium', 'bacteria'], ['diagnosis', 'diagnoses'], ['ganglion', 'ganglia']]),
          L("Two common traps", `• ${e('<b>petechiae</b>')} (pe-TEE-kee-ee) is almost always used in the plural, because bleeding spots rarely come alone.<br>• ${e('<b>bacteria</b>')} is itself plural; “one bacterium” = <b>bacterium</b>.<br>• The plural of ${e('-oma')} has two forms: ${e('lymphomas')} (common) or ${e('lymphomata')} (classical).${pearl("An examination report reads: “scattered petechiae on both legs”: scattered spots on both shins; a sign of low platelets.")}`),
          T(`${e('bacteria')} is the singular form and its plural is bacterias.`, false, "False. bacterium is singular and bacteria plural (-um → -a)."),
          B("The plural of nucleus is ___.", ['nuclei', 'nucleuses', 'nuclea'], "-us → -i. A neutrophil has a nucleus in several lobes; a lymphocyte has one round nucleus."),
          M(`What is the plural of ${e('<b>diagnosis</b>')}?`, ['diagnoses', 'diagnosises', 'diagnosi', 'diagnosae'], "-is → -es: diagnosis → diagnoses, prognosis → prognoses, metastasis → metastases."),
          S("Write the plural of embolus", 'emboli', 'embolus → emboli (‎-us → ‎-i).', 'embo…'),
          S("Write the plural of petechia", 'petechiae', 'petechia → petechiae (‎-a → ‎-ae).', 'petech…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx8', title: "Pronunciation and spelling", icon: '🗣️', items: [
          L("Letters that lie", `In Greek words, some letters are not pronounced the way they are written:${tbl([["Written", "sound", "Example"], [e('ph'), "f", e('phagocyte') + " (FAG-oh-site)"], [e('ch'), "k", e('chromic') + ", " + e('chemotherapy')], [e('pn-') + " at the start", "n (silent p)", e('pneumonia')], [e('ps-') + " at the start", "s (silent p)", e('pseudo-')], [e('x-') + " at the start", "z", e('xanthoma')], [e('rh'), "r (silent h)", e('Rh factor') + ", " + e('hemorrhage')]])}`),
          M(`What sound does ${e('<b>phagocyte</b>')} start with?`, ["f", "p", "p-h", "k"], "ph in Greek words is read as “f”: FAG-oh-site."),
          T(`In ${e('pneumonia')}, the letter p is not pronounced.`, true, "True; “noo-MOH-nee-a”. pn- and ps- at the start of a word have a silent p."),
          P("Match each spelling to its sound", [['ph', "f"], ['ch', "k"], ['pn-', "n"], ['x-', "z"]]),
          L("High-risk spellings", `These cause the most mistakes in exams and charts:<br>• ${e('<b>hemorrhage</b>')}: one m, two r’s and one h → h-e-m-o-<b>rrh</b>-a-g-e<br>• ${e('<b>leukemia</b>')} in American; ${e('leukaemia')} in British<br>• ${e('<b>anemia</b>')} and ${e('<b>hematology</b>')} in American; ${e('anaemia')} and ${e('haematology')} in British${memo("For rrh think “rushing out hard”: two r’s and an h spurting out like a fountain (-rrhage = bursting forth of blood).")}${pearl("British books use ae and oe (haemoglobin, oedema); both are correct, but pick one within a text.")}`),
          M("Which is the correct spelling of the word for heavy bleeding?", ['hemorrhage', 'hemmorage', 'hemorage', 'hemorhage'], "-rrhage with two r’s and one h: hemo + rrhage."),
          B(`${e('Rh factor')} is read “R-H”, but in ${e('hemorrhage')} the h is ___.`, ["silent", "doubled", "like “kh”"], "In the middle of Greek words, rh is read simply as “r”."),
          S("Spell the term for heavy bleeding", 'hemorrhage', "hem/o + -rrhage; two r’s and one h.", 'hemo…'),
          S("Spell the term for infection and inflammation of the lungs", 'pneumonia', "It starts with pn; the p is silent.", 'pn…'),
          N('sp:lx')
        ]
      },
      {
        id: 'lx9', title: "Look-alike Traps", icon: '🪤', items: [
          L("One letter, two worlds", `Some words differ by only a letter or two but mean something completely different:${vs(['lymphaden/o', "lymph node → lymphadenitis: inflammation of a node"], ['lymphangi/o', "lymph vessel → lymphangitis: inflammation of a vessel"])}${vs(['-poiesis', "the process of making → erythropoiesis"], ['-poietin', "the making substance (hormone) → erythropoietin"])}${memo(`${e('aden')} = “gland” (a node looks like a gland); ${e('angi')} = “tube”. A node is a ball, a vessel a tube.`)}`),
          M("Red streaks under the skin of the forearm after a hand wound mean inflamed lymph vessels. What is it called?", ['lymphangitis', 'lymphadenitis', 'lymphedema', 'lymphoma'], "lymphangi/o (lymph vessel) + -itis. If the armpit node becomes swollen and painful, it is lymphadenitis.", [["Patient", "40-year-old gardener"], ["history", "infected finger wound for 2 days"], ["examination", "painful red streaks on the forearm"]]),
          L("Three confusing blood pairs", `${vs(['plasma', "liquid part of unclotted blood; contains fibrinogen"], ['serum', "fluid left after clotting; no fibrinogen"])}${vs(['antigen', "foreign molecule that triggers immunity"], ['antibody', "Y-shaped protein the body makes against an antigen"])}${vs(['thrombus', "a clot that stays where it formed"], ['embolus', "a clot or mass travelling in the bloodstream"])}`),
          P("Match each word to its correct meaning", [['serum', "fluid after clotting"], ['plasma', "blood fluid with fibrinogen"], ['embolus', "travelling clot"], ['thrombus', "fixed clot in a vessel"]]),
          T("An antigen is a protein made by plasma cells.", false, "False; that is the definition of an antibody. An antigen (antibody generator) is what triggers antibody production."),
          M(`Which word means “clumping and sticking together of blood cells” (not clotting)?`, ['agglutination', 'coagulation', 'hemolysis', 'hemostasis'], "agglutin/o = sticking together; it happens in blood group incompatibility. Coagulation is clot formation with fibrin."),
          B("The kidney makes the hormone ___, which drives the bone marrow to make red cells.", ['erythropoietin', 'erythropoiesis', 'erythrocytosis'], "-poietin = the making substance; -poiesis is the process of making itself."),
          M(`What is the difference between ${e('<b>hemolysis</b>')} and ${e('<b>hemolytic</b>')}?`, ["the first is the process and the second its adjective", "the first is an adjective and the second a disease", "both mean bleeding", "the second means making blood"], "-lysis is the noun (breakdown) and -lytic the adjective (relating to breakdown): hemolytic anemia = anaemia caused by haemolysis."),
          W("Build a word meaning “inflammation of a lymph node”", ['lymphaden/o', '-itis'], ['lymphangi/o', '-oma', '-pathy'], 'lymphaden/o + -itis = lymphadenitis.'),
          N('d2t:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* ایمنا — دنیای ۱: خون و سلول‌های خونی
 * منابع: فصل‌های Blood / The Blood System / Blood and Immunity / Blood, Lymphatic, and Immune Systems (فایل‌های پیوست)
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'hb', sym: 'Hb', name: "Blood and cells", short: "blood", sub: "Blood roots, plasma, blood cells, blood formation and blood diseases",
    color: '#E5374F', dark: '#B8233A', light: '#FDE1E5',
    levels: ["Components of blood", "Blood cells and blood formation", "Blood diseases"],
    gens: EA.genIds('hb'),
    lessons: [
      {
        id: 'hb1', title: "The hem family", icon: '🔤', items: [
          L("Three roots for one blood", `In the language-of-medicine world you met the parts; now on to the blood roots. There are three roots for “blood”:<br>• ${e('hem/o')} and ${e('hemat/o')} (Greek): <b>hemoglobin</b>, <b>hematology</b><br>• ${e('sanguin/o')} (Latin): <b>sanguineous</b> = bloody, containing blood${memo(`In everyday English ${e('sanguine')} means “optimistic and lively”, because old medicine thought “full-blooded” people were cheerful: the sanguine temperament of the four humours!`)}`),
          M("Which root does not mean “blood”?", ['cyt/o', 'hem/o', 'hemat/o', 'sanguin/o'], "cyt/o means cell; the other three all mean blood."),
          L("Start of the word or end of the word?", `Where “blood” sits in a word changes its role:${vs(['hem- / hemat-', "at the start: blood is the “subject” → hemolysis, hematopoiesis"], ['-emia', "at the end: a “blood condition” → anemia, leukemia"])}${pearl(`${e('anemia')} literally means “without blood”, but clinically it means a shortage of <b>red cells or haemoglobin</b>; an anaemic patient’s blood volume may be normal.`)}`),
          P("Match each term to its meaning", [['hemoglobin', "iron-containing protein of red cells"], ['hemostasis', "stopping of bleeding"], ['hemolysis', "destruction of red blood cells"], ['hematopoiesis', "making blood cells"]]),
          L("Haematocrit: separate the blood", `${wb('hemat/o', '-crit')} → ${e('-crit')} means “to separate”.<br><b>Hematocrit</b> (Hct) is the percentage of blood volume taken up by the settled red cells after centrifuging (about 37 to 52%).${pearl("Rule of thumb: the haematocrit is about <b>three times</b> the haemoglobin. Hgb = 14 → Hct about 42%.")}`),
          T("A haematocrit of 42% means red cells make up 42% of the blood volume.", true, "True; hemat/o (blood) + -crit (to separate): the volume share of packed red cells."),
          B("Hemostasis means ___ of blood (bleeding stopping).", ["stoppage", "Build", "destruction"], "hem/o + -stasis (stopping, controlling). Making blood is hematopoiesis and destroying it hemolysis."),
          M(`Which part of the blood is the result “Hgb = 9 g/dL” about?`, ["the oxygen-carrying protein in red cells", "the number of white cells", "the clotting time", "the percentage of plasma"], "Hgb or Hb = hemoglobin; about 12 to 18 g/dL is normal, so 9 means anaemia.", [["Patient", "65-year-old man, tiredness"], ['Hgb', '9 g/dL'], ['WBC', '7,200 /µL']]),
          W("Build a word meaning “destruction of red cells (blood)”", ['hem/o', '-lysis'], ['-stasis', '-poiesis', 'cyt/o'], "hem/o (blood) + -lysis (destruction) = hemolysis."),
          S("Spell the term for the oxygen-carrying protein of red cells", 'hemoglobin', "hem/o + -globin (protein).", 'hemo…'),
          N('r2m:hb')
        ]
      },
      {
        id: 'hb2', title: "Blood and plasma", icon: '🩸', items: [
          L("Blood at a glance", `An adult has about <b>5 litres</b> of blood, roughly <b>8% of body weight</b>.<br><br>Jobs of the blood:<br>• carrying <b>oxygen</b>, nutrients and hormones to the cells<br>• carrying <b>carbon dioxide</b> and waste away from the cells<br>• helping to <b>regulate temperature</b> and fluid volume (homeostasis)<br>• defending the body and clotting at wounds${fig('blood-process', '', "From blood draw to centrifuge: yellow plasma on top and cells below; then the types of blood cell.")}`),
          L("The two main parts of blood", `If blood is spun in a tube (centrifuged), two parts separate:<br>• <b>plasma</b> (the liquid part, pale yellow): about <b>55%</b><br>• <b>formed elements</b>: about <b>45%</b>: red cells, white cells and platelets<br>${fig(['tube', 'tube-diagram'], ["Imena diagram", "From the textbook: Blood sample"], "The thin white middle layer (buffy coat) is the white cells and platelets. Sources give the plasma share as 52 to 62%.")}`),
          M("What percentage of blood volume is the liquid part?", ["about 55%", "about 45%", "about 8%", "about 90%"], "Plasma is about 55% and formed elements about 45% of blood. 8% is blood’s share of body weight.", null, F('tube')),
          L("What is plasma made of?", `Plasma is <b>90 to 92% water</b> and 8 to 10% dissolved substances: proteins, glucose, gases, <b>electrolytes</b> and hormones. Its pH is about <b>7.4</b>.<br><br>Plasma proteins:<br>• <b>albumin</b>: regulates water movement between blood and tissue (lack of it → oedema)<br>• <b>globulin</b>: alpha and beta carry fats and vitamins; <b>gamma</b> = antibodies<br>• <b>fibrinogen</b> and <b>prothrombin</b>: clotting proteins`),
          P("Match each plasma protein to its job", [['albumin', "keeping water in the vessels"], ['gamma globulin', "antibodies (immunity)"], ['fibrinogen', "making the clot threads"], ['alpha/beta globulin', "carrying fats and vitamins"]]),
          L("Plasma or serum?", `<b>Serum</b> is plasma <b>without fibrinogen and clotting factors</b>: the fluid left after blood clots.<br><br>${e('ser/o')} = serum. That is why “serology” tests are done on serum.`),
          T("Serum is the fluid left after blood clots and has no fibrinogen.", true, "True. Plasma = serum + fibrinogen and clotting factors."),
          B("The normal pH of plasma is about ___.", ['7.4', '6.8', '8.2'], "Blood is slightly alkaline; pH about 7.4."),
          M("In this centrifuged tube, what is the pale yellow upper part?", ['plasma', 'formed elements', 'buffy coat', 'hematocrit'], "The lighter liquid part of blood (about 55%) sits on top; the formed elements are heavier and sink.", null, F('tube-diagram')),
          M("Lack of which protein most causes water to leave the vessels and cause oedema?", ['albumin', 'fibrinogen', 'globin', 'thrombin'], "Albumin holds water inside the vessels; when it is low, water moves into the tissues and causes oedema."),
          S("Spell the term for the liquid part of blood", 'plasma', "plasma = the liquid part of blood; root plasm/o."),
          N('t2f:hb')
        ]
      },
      {
        id: 'hb3', title: "Formed elements", icon: '🔬', items: [
          L("Three types of cell in blood", `The formed elements are made in the <b>bone marrow</b>:<br>• <b>erythrocyte</b> (red cell, RBC): carries oxygen<br>• <b>leukocyte</b> (white cell, WBC): defence<br>• <b>thrombocyte</b> or <b>platelet</b> (PLT): clotting<br>${fig(['cell-rbc', 'cell-neutrophil', 'cell-platelet'], ['RBC', 'WBC', 'PLT'])}`),
          L("Three colour roots", `• ${e('erythr/o')} = <b>red</b> → erythrocyte<br>• ${e('leuk/o')} = <b>white</b> → leukocyte<br>• ${e('thromb/o')} = <b>clot</b> → thrombocyte<br>and ${e('-cyte')} or ${e('cyt/o')} means <b>cell</b>.<br><br>Note: a platelet is not a whole cell; it is a <b>fragment</b> of a large cell called a megakaryocyte.`),
          P("Root and meaning", [['erythr/o', "red"], ['leuk/o', "white"], ['thromb/o', "clot"], ['cyt/o', "cell"]]),
          M("Which blood cell plays the main role in clotting?", ['thrombocyte', 'erythrocyte', 'leukocyte', 'lymphocyte'], "thromb/o (clot) + -cyte (cell) = clot cell, i.e. the platelet.", null, F('cell-platelet')),
          L("A blood smear under the microscope", `On a stained slide (smear), most of the field is filled with pink red cells; white cells are larger and have nuclei, and platelets are tiny and purple.${fig('smear', '', "Red cells are far more numerous: about 5 million per microlitre, against 5 to 10 thousand white cells.")}`),
          T("White cells far outnumber red cells in the blood.", false, "The opposite: about 5 million red cells per microlitre, but only 5000 to 10000 white cells.", F('smear')),
          W("Build a word meaning “white cell”", ['leuk/o', '-cyte'], ['erythr/o', '-emia', 'thromb/o'], 'leuk/o + -cyte = leukocyte.'),
          B("The word erythrocyte means a ___ cell.", ["red", "white", "clot"], "erythr/o = red."),
          S("Spell the term for a clotting cell (“clot cell”)", ['thrombocyte', 'platelet'], "thrombocyte or platelet; both are correct.", 'thr… / pla…'),
          M("Where are the formed elements made?", ["bone marrow", "spleen", "liver", "kidney"], "Blood formation (hematopoiesis) takes place in the red bone marrow."),
          N('f2t:hb')
        ]
      },
      {
        id: 'hb4', title: "Red cells and haemoglobin", icon: '🔴', items: [
          L("Structure of the red cell", `A mature red cell is a <b>biconcave disc</b> with <b>no nucleus</b>; this shape gives more surface for gas exchange.<br>• Count: <b>4.2 to 6.4 million</b> per microlitre (more in men than women)<br>• Lifespan: about <b>120 days</b>; then the spleen removes the old cells${fig(['rbc-3d', 'rbc'], ['Erythrocytes', "top and side views"])}`),
          M("How long does a red cell live on average?", ["about 120 days", "about 10 days", "about 30 days", "about 1 year"], "A red cell lives 120 days and a platelet about 10 days."),
          L("Haemoglobin = haem + globin", `<b>Hemoglobin</b> (Hgb or Hb) is the iron-containing protein of red cells that carries oxygen from the lungs to the tissues and brings CO₂ back.<br>• <b>heme</b>: the pigment containing <b>iron</b><br>• <b>globin</b>: the <b>protein</b> part (${e('-globin')} = protein)<br>Average haemoglobin is about <b>15 g/dL</b>.${fig('hemoglobin')}`),
          P("Parts of haemoglobin", [['heme', "iron-containing pigment"], ['globin', "the protein part"], ['hemoglobin', "oxygen carrier"], ['bilirubin', "pigment from haemoglobin breakdown"]]),
          L("percentage of red cells in blood (packed cell volume)", `<b>Hematocrit</b> (Hct) is the volume percentage of packed red cells in blood.<br>${wb('hemat/o', '-crit')} → ${e('-crit')} means “to separate”: blood is centrifuged so the cells separate. Its other name is <b>PCV</b> (packed cell volume).`),
          T("The haematocrit shows the number of red cells per microlitre.", false, "The haematocrit is the “volume percentage” of packed red cells, not their count; the count is the RBC count."),
          L("kidney hormone for red cells", `<b>Erythropoietin</b> (EPO) is a hormone made by the <b>kidney</b> that drives the bone marrow to make red cells.<br>${wb('erythr/o', '-poietin')}<br>${e('-poiesis')} means making → <b>erythropoiesis</b> = red cell production.`),
          M("In which organ is erythropoietin made?", ["kidney", "liver", "spleen", "bone marrow"], "EPO is made in the kidney and acts on the bone marrow; that is why kidney patients are often anaemic."),
          W("Build a word meaning “production of red cells”", ['erythr/o', '-poiesis'], ['leuk/o', '-poietin', '-lysis'], 'erythr/o + -poiesis = erythropoiesis.'),
          S("Spell the term for the oxygen-carrying protein of red cells", 'hemoglobin', "hem/o (blood) + -globin (protein) = hemoglobin."),
          N('d2t:hb')
        ]
      },
      {
        id: 'hb5', title: "White blood cells", icon: '⚪', items: [
          L("Granular and agranular", `White cells (5000 to 10000 per microlitre) fall into two groups:<br>• <b>granulocyte</b> (granular; ${e('granul/o')} = granule): neutrophil, eosinophil, basophil<br>• <b>agranulocyte</b> (without granules; ${e('a-')} = without): lymphocyte and monocyte${fig('wbc-family', '', "The percentages are each cell’s share of all white cells.")}${memo(`Remember the order of abundance with this sentence: “${e('<b>N</b>ever <b>L</b>et <b>M</b>onkeys <b>E</b>at <b>B</b>ananas')}” → Neutrophil, Lymphocyte, Monocyte, Eosinophil, Basophil; from most to least.`)}`),
          L("The name comes from the colour", `Granulocytes are named for the dye they take up (${e('-phil')} = loving):<br>• <b>neutrophil</b>: ${e('neutr/o')} neutral → pale staining; multi-lobed nucleus<br>• <b>eosinophil</b>: ${e('eosin/o')} rosy → orange-red granules (acidic dye)<br>• <b>basophil</b>: ${e('bas/o')} base (alkaline) → dark blue granules`),
          P("The cell and its colour", [['neutrophil', "neutral dye (pale)"], ['eosinophil', "rosy acidic dye"], ['basophil', "dark blue alkaline dye"], ['agranulocyte', "no granules"]]),
          M("Which white cell is known for its large orange-red granules?", ['eosinophil', 'basophil', 'neutrophil', 'monocyte'], "eosin/o = rosy; eosinophil granules take up the acidic dye eosin.", null, F('cell-eosinophil')),
          L("What does each one do?", fig('wbc-percent', '', "The five types of white cell and the rough share of each; sources differ slightly on the numbers.") + tbl([["cell", "Share", "Job"], ['neutrophil', "54–70%", "eats bacteria; the first defender"], ['lymphocyte', "20–38%", "specific immunity (B and T)"], ['monocyte', "3–9%", "in tissue → macrophage"], ['eosinophil', "1–4%", "allergy and parasites"], ['basophil', "under 1%", "histamine and heparin"]])),
          M("Which is the most abundant white cell in blood?", ['neutrophil', 'lymphocyte', 'monocyte', 'basophil'], "Neutrophils are more than half of the white cells (54 to 70%)."),
          T("Basophils release histamine and heparin.", true, "True; basophils take part in allergic reactions.", F('wbc-table')),
          M("In this picture, which cell has large orange-red granules?", ['Eosinophil', 'Basophil', 'Neutrophil', 'Lymphocyte'], "The eosinophil has large rosy granules; the basophil has dark blue-purple granules that cover the nucleus.", null, F('wbc-five')),
          L("Band cells and PMNs", `A mature neutrophil has a <b>multi-lobed</b> nucleus, so it is also called a <b>PMN</b> (polymorphonuclear), <b>seg</b> or <b>poly</b>.<br>An immature neutrophil with a band-shaped nucleus is called a <b>band cell</b>; a rise in bands is a sign of acute infection.`),
          B("When a monocyte enters tissue it becomes a ___.", ["macrophage", "plasma cell", "platelet"], "macro (large) + phage (eater) = large eater of foreign material."),
          O("Order the white cells from the highest to the lowest percentage", ['neutrophil', 'lymphocyte', 'monocyte', 'eosinophil', 'basophil'], "Memory key: Never Let Monkeys Eat Bananas."),
          N('sp:hb')
        ]
      },
      {
        id: 'hb6', title: "Blood formation and bone marrow", icon: '🦴', items: [
          L("Haematopoiesis", `<b>Hematopoiesis</b> (or hemopoiesis) means the making of all blood cells in the <b>red bone marrow</b>.<br>${wb('hemat/o', '-poiesis')}<br>They all start from one <b>stem cell</b> (hemocytoblast) and split into two lines: myeloid and lymphoid.${fig('hemato')}${fig('hematopoiesis', '', "Textbook diagram: erythropoiesis, thrombopoiesis and leukopoiesis, from precursor cell to mature cell.")}`),
          M("By what other name is the blood-forming stem cell known?", ['hemocytoblast', 'megakaryocyte', 'reticulocyte', 'macrophage'], "hem/o (blood) + cyt/o (cell) + -blast (immature cell) = an immature cell that forms blood."),
          L("The suffix -blast", `${e('-blast')} means an <b>immature cell</b> (a germ).<br>• <b>myeloblast</b>: precursor of granulocytes; fills the bone marrow in some leukaemias<br>• <b>erythroblast</b>: precursor of the red cell<br>${e('myel/o')} = bone marrow (and spinal cord) → <b>myelogenous</b> = made in the bone marrow`),
          P("Root and meaning", [['myel/o', "bone marrow"], ['-blast', "immature cell"], ['-poiesis', "formation"], ['kary/o', "cell’s control centre"]]),
          L("Where do platelets come from?", `A <b>megakaryocyte</b> is a very large cell in the bone marrow that <b>breaks into pieces</b> to form platelets.<br>${wb('mega', 'kary/o', '-cyte')} → a cell with a large nucleus.<br><br>A <b>reticulocyte</b> is an almost mature red cell; its count shows how active the bone marrow is.`),
          T("Platelets are fragments of large cells called megakaryocytes.", true, "True; a megakaryocyte turns its cytoplasm into thousands of platelets."),
          L("Rise and fall", `Two common suffixes:<br>• ${e('-cytosis')} = increase in cells → <b>leukocytosis</b>, <b>erythrocytosis</b>, <b>thrombocytosis</b><br>• ${e('-penia')} = deficiency → <b>leukopenia</b>, <b>erythropenia</b> (erythrocytopenia), <b>thrombocytopenia</b>, <b>neutropenia</b>`),
          M(`${e('neutropenia')} means…`, ["a fall in neutrophils", "a rise in neutrophils", "destruction of neutrophils", "production of neutrophils"], "neutr/o + -penia (deficiency). Neutropenia raises the risk of infection."),
          W("Build a word meaning “a rise in white cells”", ['leuk/o', '-cytosis'], ['-penia', 'erythr/o', '-poiesis'], "leuk/o + -cytosis = leukocytosis; for example in infection."),
          B("Leukopenia means a ___ of white cells.", ["decrease", "increase", "Build"], "-penia = deficiency."),
          N('wb:hb')
        ]
      },
      {
        id: 'hb7', title: "Anaemias", icon: '😮‍💨', items: [
          L("What does anaemia mean?", `<b>Anemia</b> = a fall in red cells or haemoglobin, so less oxygen reaches the tissues.<br>${wb('an-', '-emia')} → “without blood”.<br>Symptoms: <b>tiredness, pallor, breathlessness</b> (dyspnea), palpitations and irritability.${fig('anemia-tree', '', "Every anaemia comes about in one of three ways: too little is made, too much is destroyed, or blood is lost.")}${pearl("Faced with any anaemia, ask: “Is the factory broken, are the cells being destroyed, or is blood leaking out?” That question decides the next tests.")}`),
          M("Which is a common symptom of anaemia?", ["tiredness and pallor", "high fever and chills", "severe itching of the skin", "enlarged lymph nodes"], "Poor oxygen delivery to the tissues → tiredness, pallor, breathlessness and palpitations."),
          L("Types of anaemia (1)", tbl([["Type", "Cause"], ['iron-deficiency', "not enough iron to make haemoglobin"], ['aplastic', "bone marrow failure → pancytopenia"], ['pernicious', "no intrinsic factor → B12 not absorbed"], ['megaloblastic', "large immature cells; lack of B12 or folate"], ['nutritional', "lack of iron, B12 or folate in the diet"]])),
          P("Type of anaemia and its cause", [['aplastic anemia', "bone marrow failure"], ['pernicious anemia', "no intrinsic factor in the stomach"], ['iron-deficiency anemia', "too little iron for haemoglobin"], ['hemorrhagic anemia', "blood loss"]]),
          L("Types of anaemia (2)", tbl([["Type", "Cause"], ['hemolytic', "destruction of red cells (hemolysis)"], ['sickle cell', "abnormal haemoglobin; sickle-shaped cells"], ['thalassemia', "inherited defect of haemoglobin production; severe form = Cooley"], ['sideroblastic', "iron is present but not used in haemoglobin"], ['hemorrhagic', "sudden or chronic bleeding"]]) + fig('sickle-vessel', '', "A: a normal cell passes freely through the vessel. B: sickle cells are stiff and sticky and block the blood flow.")),
          M("Which anaemia does this picture show?", ['sickle cell anemia', 'iron-deficiency anemia', 'aplastic anemia', 'pernicious anemia'], "The abnormal haemoglobin forms strands when oxygen is low and bends the cell into a sickle shape.", null, F('sickle-vs-normal')),
          L("Complications of sickle cell disease", `Sickle cells block small vessels throughout the body:${fig('sickle-complications', '', "Brain: thrombosis and stroke • Lung: infarction and pneumonia • Heart: failure • Abdomen: enlarged spleen and splenic infarction, gallstones • Skin: stasis ulcers • Joints: hand-foot syndrome")}<br>Treatment is mostly <b>palliative</b>: controlling pain and preventing crises.`),
          T("In sickle cell disease, splenic infarction and enlargement are common complications.", true, "True; the spleen’s vessels are blocked by sickle cells.", F('sickle-complications')),
          M("In pernicious anaemia, which substance is lacking?", ["intrinsic factor (to absorb B12)", "kidney hormone for red cells", "dietary iron", "fibrinogen"], "The stomach does not make intrinsic factor, so vitamin B12 is not absorbed; treatment: B12 injections."),
          T("Thalassaemia is an inherited anaemia whose most severe form is called Cooley anemia.", true, "True; thalass/o means sea, because it was first described around the Mediterranean."),
          L("Sideroblastic anaemia and haemolysis", `${e('sider/o')} = iron → <b>sideroblastic anemia</b>: there is enough iron but it is not placed into haemoglobin properly.<br>${e('-lysis')} = destruction → <b>hemolysis</b>: red cells breaking and releasing haemoglobin; ${e('hemolytic anemia')} comes from this.<br><b>Hemosiderosis</b> = excess iron deposited in the tissues.`),
          W("Build a word meaning “destruction of blood (red cells)”", ['hem/o', '-lysis'], ['-stasis', 'sider/o', '-poiesis'], 'hem/o + -lysis = hemolysis.'),
          S("Spell the term for a shortage of red cells or haemoglobin", 'anemia', "an- (without) + -emia (blood condition) = anemia."),
          N('t2f:hb')
        ]
      },
      {
        id: 'hb8', title: "Cell shape and colour", icon: '🎨', items: [
          L("Size and shape", `In assessing <b>RBC morphology</b>:<br>• ${e('anis/o')} = unequal → <b>anisocytosis</b>: large differences in <b>size</b><br>• ${e('poikil/o')} = varied → <b>poikilocytosis</b>: differences in <b>shape</b><br>• <b>macrocyte</b> = large cell, <b>microcyte</b> = small cell<br>• <b>spherocyte</b> = ball-shaped cell (${e('spher/o')} = sphere)${fig('rbcshapes')}`),
          L("Under the microscope", `Four blood smears from the textbook:${fig('smears', "A, B, C, D", "A: round, uniform cells • B: varied shape and size (poikilocytosis and anisocytosis) • C: sickle cells • D: very few cells")}`),
          M("In which part of this picture are sickle cells seen?", ['C', 'A', 'B', 'D'], "In C, crescent-shaped, elongated (sickle) cells are seen.", null, F('smears')),
          M("What is a large difference in the “size” of red cells called?", ['anisocytosis', 'poikilocytosis', 'spherocytosis', 'polycythemia'], "anis/o = unequal (size). poikil/o relates to shape.", null, F('rbcshapes')),
          P("Root and meaning", [['anis/o', "not equal"], ['poikil/o', "unequal, irregular"], ['spher/o', "globe, round"], ['macro-', "large"]]),
          L("Cell colour", `${e('chrom/o')} = colour:<br>• <b>normochromia</b>: normal colour<br>• <b>hypochromia</b>: pale, because of low haemoglobin (as in iron deficiency)<br>• <b>hyperchromia</b>: deeply coloured<br><b>Hypochromic anemia</b> means anaemia with pale cells.`),
          T("In iron-deficiency anaemia, the cells are usually hypochromic (pale).", true, "True; less haemoglobin → less colour. They are usually microcytic too."),
          L("Too many cells", `<b>Polycythemia</b> = an abnormal rise in red cells and thickening of the blood.<br>${wb('poly-', 'cyt/o', '-hemia')}<br>• <b>polycythemia vera</b>: an overactive bone marrow making too many cells<br>• <b>erythrocytosis</b>: a rise in red cells that may be normal (for example at high altitude)<br>• <b>erythremia</b> means the same.`),
          M(`${e('pancytopenia')} means…`, ["a fall in all blood cells", "a rise in all blood cells", "a fall in platelets only", "destruction of red cells"], "pan- (all) + cyt/o + -penia. Seen in aplastic anaemia."),
          B("A red cell that is spherical instead of disc-shaped is called a ___.", ['spherocyte', 'macrocyte', 'reticulocyte'], "spher/o = sphere; spherocytic anemia is an inherited anaemia."),
          W("Build a word meaning “large cell”", ['macro-', '-cyte'], ['micro-', 'poly-', '-penia'], 'macro- + -cyte = macrocyte.'),
          S("Spell the term for variation in red cell shape", 'poikilocytosis', "poikil/o (varied) + -cytosis.", 'poik…'),
          N('m2r:hb')
        ]
      },
      {
        id: 'hb9', title: "Leukaemia and dyscrasias", icon: '🧬', items: [
          L("Blood dyscrasia", `<b>Dyscrasia</b> is a general term for any blood disease.<br>${e('dys-')} = bad, abnormal. This family includes anaemias, leukaemia, myeloma and clotting disorders.`),
          L("blood cancer", `<b>Leukemia</b> = a bone marrow cancer that makes large numbers of <b>immature, abnormal white cells</b>, which crowd out the other cells → anaemia, bleeding and infection.<br>Classification: <b>acute/chronic</b> × <b>myeloid/lymphocytic</b>:<br>${tbl([["abbreviation", "Name"], ['AML', 'acute myelogenous leukemia'], ['CML', 'chronic myelogenous leukemia'], ['ALL', 'acute lymphocytic leukemia'], ['CLL', 'chronic lymphocytic leukemia']])}${fig('leuk-matrix', '', "Two questions, four leukaemias: are the cells immature or more mature? Do they come from the myeloid or the lymphoid line?")}${memo("The last letter is always L (Leukemia); the first is the speed (Acute/Chronic) and the middle the line (Myelogenous/Lymphocytic). ALL strikes the little ones (children) and CLL the elderly.")}`),
          P("Abbreviation and type of leukaemia", [['ALL', "acute lymphocytic"], ['CLL', "chronic lymphocytic"], ['AML', "acute myeloid"], ['CML', "chronic myeloid"]]),
          L("Confirming the diagnosis", `Leukaemia and most dyscrasias are confirmed by <b>bone marrow aspiration</b> and <b>biopsy</b>: the needle usually enters the marrow through the <b>hip crest</b> (iliac crest).${fig('marrow-aspiration', '', "Bone marrow aspiration lying on the side or front")}`),
          M("In most patients with which leukaemia is the Philadelphia (Ph) chromosome found?", ['CML', 'ALL', 'CLL', 'hairy cell leukemia'], "The Philadelphia chromosome is the hallmark of chronic myeloid leukaemia (CML)."),
          T("ALL is the commonest childhood cancer and often shows itself with fever, petechiae and bleeding gums.", true, "True; as in the textbook case of a 2-year-old boy with fever, nosebleeds and petechiae. The diagnosis is confirmed by bone marrow aspiration."),
          L("Myeloma and others", `• <b>multiple myeloma</b>: cancer of the bone marrow’s <b>plasma cells</b>; it destroys bone and <b>Bence Jones protein</b> appears in the urine<br>• <b>myelodysplastic syndrome</b> (MDS): faulty marrow growth; too little production of one or more lines<br>• <b>myelofibrosis</b>: bone marrow replaced by fibrous tissue<br>• <b>hairy cell leukemia</b>: the cells have hair-like projections`),
          M("Bence Jones protein in the urine is a sign of which disease?", ['multiple myeloma', 'hemophilia', 'thalassemia', 'polycythemia vera'], "Cancerous plasma cells make immunoglobulin light chains that appear in the urine."),
          B("In myelofibrosis, the bone marrow is replaced by ___ tissue.", ["fibrous", "fat", "bony"], 'myel/o + fibr/o + -osis.'),
          O("Order the diagnostic path for leukaemia", ["symptoms: tiredness, fever, bruising and repeated infections", "CBC: many immature white cells, low RBCs and platelets", "bone marrow aspiration and biopsy", "chemotherapy to reach remission"], "As in the textbook case of a 22-year-old woman: CBC, bone marrow examination and aggressive chemotherapy."),
          S("Spell the term for cancer of the white blood cells", 'leukemia', "leuk/o (white) + -emia (blood condition)."),
          N('ab:hb')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* ایمنا — دنیای ۲: هموستاز، گروه خونی و انتقال خون */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'co', sym: 'PT', name: "Haemostasis and transfusion", short: "Clotting", sub: "Platelets, the clotting cascade, clots, blood groups, transfusion and bleeding",
    color: '#7B5CE0', dark: '#5B3FBF', light: '#EDE7FC',
    levels: ["Platelets and clotting", "Blood groups", "Transfusion and bleeding"],
    gens: EA.genIds('co'),
    lessons: [
      {
        id: 'co1', title: "Platelets and haemostasis", icon: '🩹', items: [
          L("Haemostasis means blood standing still", `${wb('hem/o', '-stasis')}<br><b>Hemostasis</b> = stopping of bleeding. ${e('-stasis')} means standing still or controlling.<br><br>When a vessel is injured:<br>1. the vessel narrows<br>2. <b>platelets</b> stick to the wound and form a <b>platelet plug</b><br>3. the <b>clotting cascade</b> reinforces the plug with fibrin threads${fig('hemostasis')}${memo("Remember the three steps like fixing a burst pipe: close the tap (vessel narrowing), stick on a patch (platelet plug), let the glue set (fibrin).")}`),
          M(`In hemostasis, ${e('-stasis')} means…`, ["stopping, controlling", "destruction", "formation", "flow"], "hem/o + -stasis = stopping blood. Hemostatics are drugs that stop bleeding."),
          L("Platelets in numbers", `• Other name: <b>thrombocyte</b> (clot cell)<br>• Normal count: <b>150,000 to 450,000</b> per microlitre<br>• Lifespan: about <b>10 days</b><br>• Origin: fragments of <b>megakaryocytes</b> in the bone marrow${fig(['platelet-structure', 'cell-platelet'], ['Platelet structure', "simple view"])}`),
          B("The normal platelet count is about ___ to 450 thousand per microlitre.", ["150 thousand", "50 thousand", "1 million"], "Normal PLT: 150,000 to 450,000 /µL."),
          P("Word and meaning", [['thrombocytopenia', "shortage of platelets"], ['thrombocytosis', "rise in platelets"], ['thrombocytic', "relating to platelets"], ['hemostasis', "stopping of bleeding"]]),
          T("A severe shortage of platelets can cause tiny bleeding spots under the skin.", true, "True; thrombocytopenia comes with petechiae, purpura and ecchymosis."),
          W("Build a word meaning “a shortage of platelets”", ['thromb/o', 'cyt/o', '-penia'], ['-cytosis', 'erythr/o', '-stasis'], 'thromb/o + cyt/o + -penia = thrombocytopenia.'),
          M("Which has the shorter lifespan?", ["the platelet (about 10 days)", "the red cell (about 120 days)", "both are the same", "neither is ever destroyed"], "Platelets live about 10 days and red cells about 120 days."),
          S("Spell the term for the stopping of bleeding", 'hemostasis', 'hem/o + -stasis.'),
          N('t2f:co')
        ]
      },
      {
        id: 'co2', title: "The clotting cascade", icon: '⛓️', items: [
          L("From wound to clot", `<b>Coagulation</b> (${e('coagul/o')} = clotting) is a chain of reactions:<br>1. platelets gather at the injury and release <b>thromboplastin</b><br>2. thromboplastin, with <b>calcium</b> and the plasma <b>clotting factors</b> (12 factors)…<br>3. turns <b>prothrombin</b> into <b>thrombin</b><br>4. thrombin turns <b>fibrinogen</b> into <b>fibrin</b> threads<br>5. the fibrin threads trap cells → a <b>clot</b>${fig('clot')}`),
          O("Order the stages of clotting", ["vessel injury", "platelets gather and release thromboplastin", "prothrombin turns into thrombin", "fibrinogen turns into fibrin", "a clot forms"], "Thromboplastin + calcium → thrombin → fibrin → clot.", F('clot')),
          M("In this microscope picture, what are the white mesh-like threads trapping the cells?", ['fibrin', 'fibrinogen', 'plasma', 'platelets'], "Fibrin threads form the clot’s mesh and red cells get caught in it.", null, F('fibrin-clot')),
          M("Which enzyme turns fibrinogen into fibrin?", ['thrombin', 'plasmin', 'heparin', 'prothrombin'], "Thrombin (made from prothrombin) turns fibrinogen into fibrin."),
          B("To turn prothrombin into thrombin, ___ ions are needed.", ["calcium", "Iron", "potassium"], "Thromboplastin works in the presence of calcium (Ca²⁺)."),
          P("Each substance and its role", [['thromboplastin', "the starter; released from platelets"], ['prothrombin', "protein precursor in plasma"], ['fibrin', "the clot’s mesh threads"], ['plasmin', "clot dissolver"]]),
          L("dissolving a clot", `The body <b>dissolves</b> the clot after the wound heals: <b>plasmin</b> (fibrinolysin) breaks the fibrin threads.<br>${wb('fibrin/o', '-lytic')} → <b>fibrinolytic</b> = clot-dissolving.<br>${e('-lysis')} = destruction → <b>thrombolysis</b> = breaking down a clot.<br><br><b>Heparin</b> is a natural substance (and a drug) that stops circulating blood from clotting.`),
          T("Heparin inhibits clotting and is an anticoagulant.", true, "True; it occurs naturally in the body (for example in basophils) and is also used as a drug."),
          M("How does serum differ from plasma?", ["serum has no fibrinogen or clotting factors", "serum contains red cells", "serum has no water", "there is no difference"], "When blood clots, fibrinogen is used up; the fluid left over is serum."),
          W("Build a word meaning “breakdown of a clot”", ['thromb/o', '-lysis'], ['-stasis', 'fibrin/o', '-poiesis'], 'thromb/o + -lysis = thrombolysis.'),
          N('d2t:co')
        ]
      },
      {
        id: 'co3', title: "A clot in the wrong place", icon: '🚧', items: [
          L("Thrombus and embolism", `• <b>thrombus</b>: a clot that stays <b>fixed</b> inside a vessel<br>• <b>thrombosis</b>: the condition of clot formation in a vessel<br>• <b>embolus</b> (${e('embol/o')} = plug): a clot or mass that <b>moves</b> and blocks somewhere else<br>• <b>embolectomy</b>: surgical removal of an embolus<br><br>If a brain vessel is blocked → <b>stroke</b>.${vs(['thrombus', "fixed: like a car parked in the street"], ['embolus', "moving: a car that has set off and blocks the road somewhere else"])}${pearl("The commonest scenario: a clot in a deep calf vein (DVT) breaks off and lodges in a lung artery → pulmonary embolism; sudden breathlessness after long immobility.")}`),
          M("What is a clot that has broken loose and travels in the bloodstream called?", ['embolus', 'thrombus', 'hematoma', 'fibrin'], "A thrombus is fixed; an embolus moves."),
          P("Word and definition", [['thrombus', "fixed clot in a vessel"], ['embolus', "moving mass in a vessel"], ['embolectomy', "removal of an embolus"], ['thrombotic', "relating to a clot"]]),
          L("Drugs against clots", `• <b>anticoagulant</b> (“blood thinner”): <b>prevents</b> clots forming, such as heparin; given before surgery to prevent embolism<br>• <b>thrombolytic</b>: <b>dissolves</b> a clot that has formed<br>• monitoring: <b>PT/INR</b> and <b>PTT (aPTT)</b>`),
          M("A patient has an acute arterial clot that must be “dissolved”. Which drug group?", ['thrombolytics', 'anticoagulants', 'hemostatics', 'coagulants'], "Anticoagulants prevent new clots; thrombolytics dissolve existing ones."),
          L("DIC: clotting and bleeding together", `<b>Disseminated intravascular coagulation</b> (DIC):<br><b>widespread</b> tiny clots form in small vessels, the clotting factors and platelets are <b>used up</b>, and then <b>widespread bleeding</b> follows.<br>${e('intra-')} = within, ${e('vascul/o')} = vessel.`),
          T("In DIC, widespread clots come first and then widespread bleeding.", true, "True; the used-up clotting factors cause the later bleeding. Often in severe sepsis."),
          B("The word thrombosis means an abnormal condition of ___.", ["clot", "bleeding", "white blood cell"], 'thromb/o + -osis.'),
          S("Spell the term for a drug that prevents clotting", 'anticoagulant', "anti- (against) + coagul/o (clotting) + -ant.", 'anti…'),
          N('sp:co')
        ]
      },
      {
        id: 'co4', title: "ABO blood groups", icon: '🅰️', items: [
          L("Antigens on the cell, antibodies in the plasma", `Blood group is set by inherited <b>antigens</b> on the red cell surface (agglutinogens).<br>The plasma has antibodies against the antigen it <b>lacks</b>:${tbl([["Group", "Antigen on RBCs", "Antibody in plasma"], ['A', 'A', 'anti-B'], ['B', 'B', 'anti-A'], ['AB', "A and B", "none"], ['O', "none", "anti-A and anti-B"]])}${fig(['abo-table', 'abo'], ["Textbook table: ABO Blood Types", "Imena diagram"])}`),
          M("Which antibody is in the plasma of someone with blood group B?", ['anti-A', 'anti-B', "both", "neither"], "They have the B antigen, so they have antibodies against A.", null, F('abo')),
          L("Universal donor and recipient", `• Group <b>O</b> has no A or B antigen → <b>universal donor</b> of red cells<br>• Group <b>AB</b> has no antibodies → <b>universal recipient</b><br><br>In the case of <b>Dianne Love</b>, the doctor ordered <b>2 units of O-negative blood</b> in an emergency.`),
          T("Blood group AB is the “universal donor”.", false, "AB is the universal recipient; the universal donor is O (especially O negative)."),
          L("Agglutination", `If incompatible blood is transfused, antibodies stick to the antigens and the cells <b>clump</b>: <b>agglutination</b> (${e('agglutin/o')} = sticking together). This reaction can be <b>fatal</b>.<br><br>Blood typing works on the same principle: the sample is mixed with <b>antiserum</b>; clumping means that antigen is present.`),
          P("Blood group and feature", [['O', "universal donor"], ['AB', "universal recipient"], ['A', "anti-B antibodies"], ['B', "anti-A antibodies"]]),
          M("A blood sample clumps with anti-A antiserum but not with anti-B. Blood group?", ['A', 'B', 'AB', 'O'], "Clumping with anti-A means the A antigen is present; B is absent."),
          B("Sticking together of cells in an antigen-antibody reaction is called ___.", ['agglutination', 'coagulation', 'hemolysis'], "agglutin/o = sticking; not to be confused with coagulation (clotting)."),
          S("Spell the term for clumping of cells together", 'agglutination', 'agglutin/o + -ation.', 'aggl…'),
          N('ab:co')
        ]
      },
      {
        id: 'co5', title: "The Rh factor", icon: '➕', items: [
          L("Positive or negative", `The <b>Rh factor</b> (rhesus factor) is another antigen on the red cell:<br>• present → <b>Rh+</b><br>• absent → <b>Rh−</b><br>Most people are Rh positive. An Rh-negative person exposed to Rh-positive blood makes <b>antibodies</b> (anti-D) against it.${fig('rh-table', '', "The Rh antigen is the D antigen.")}`),
          M("O negative means the red cell lacks which antigens?", ["A, B and Rh", "A only", "Rh only", "B only"], "O = no A or B; negative = no Rh. That is why it is the safest red cell in an emergency."),
          L("haemolytic disease of the newborn", `<b>Erythroblastosis fetalis</b> or <b>HDN</b> (hemolytic disease of the newborn):<br>an <b>Rh−</b> mother with an <b>Rh+</b> fetus. At the first delivery the mother makes anti-Rh antibodies; in the next pregnancy these antibodies cross the placenta and <b>haemolyse</b> the fetus’s red cells → severe fetal anaemia.<br>${wb('erythr/o', '-blast', '-osis')} → many immature red cells (erythroblasts) in the fetal blood.${fig('rh-hdn')}${pearl("Prevention: an Rh-negative mother is given <b>RhoGAM</b> (anti-D immunoglobulin) at week 28 of pregnancy and within 72 hours of delivery so she never makes antibodies.")}${fig('fetus')}`),
          T("The risk of erythroblastosis fetalis arises when the mother is Rh positive and the fetus Rh negative.", false, "The opposite: an Rh-negative mother and an Rh-positive fetus. The mother’s antibodies attack the fetal cells."),
          O("Order the events of HDN", ["Rh-negative mother, first fetus Rh positive", "fetal blood enters the mother’s circulation at delivery", "the mother makes anti-Rh antibodies", "antibodies cross the placenta in the next pregnancy", "the Rh-positive fetus’s cells are haemolysed"], "That is why Rh-negative mothers are given anti-D immunoglobulin after delivery, so they do not become sensitised."),
          L("test for antibodies on red cells", `The <b>Coombs test</b> (antiglobulin test) finds antibodies stuck to red cells; it is used in <b>Rh incompatibility</b>, HDN and <b>autoimmune haemolytic anaemia</b>.`),
          M("Which test looks for antibodies on the red cells of a newborn with suspected HDN?", ['Coombs test', 'Schilling test', 'ESR', 'Western blot'], "The Coombs test shows antibodies attached to RBCs."),
          P("Abbreviation and meaning", [['Rh+', "has the Rh antigen"], ['Rh−', "lacks the Rh antigen"], ['HDN', "haemolytic disease of the newborn"], ['ABO', "the A, B, AB, O blood group system"]]),
          B("Coombs is an ___ test; that is, it looks for antibodies.", ["antiglobulin", "clotting", "microbial"], "Its other name is the antiglobulin test."),
          N('f2t:co')
        ]
      },
      {
        id: 'co6', title: "giving blood or blood products into a vein", icon: '🔁', items: [
          L("Transfusion", `<b>Transfusion</b> = giving blood or its components from a donor to a recipient.<br>${wb('trans-', 'fus/o', '-ion')} → “pouring across”.<br>Before transfusion, <b>cross-matching</b> is done: the donor’s cells are mixed with the recipient’s serum to check for an immune reaction.${fig('donor-grid', '', "Each column is a donor and each row a recipient: ✓ means that donor’s red cells can go to this recipient.")}${memo("O “loves everyone” (gives to all); AB “takes from everyone”. Play with the table once: the O column is all green and the AB row all green.")}`),
          M("What is the aim of cross-matching before a transfusion?", ["checking donor and recipient blood are compatible", "counting platelets", "measuring the clotting time", "diagnosing HIV infection"], "The donor’s cells are mixed with the recipient’s serum; clumping means incompatibility."),
          L("One’s own blood or another’s?", `• <b>autologous</b> (${e('auto-')} = self): the <b>patient’s own</b> blood, collected and stored a few weeks before surgery<br>• <b>homologous</b> (${e('homo-')} = same): blood from <b>another person</b> of the same species (human)<br><br>In <b>Lisa’s</b> case (liver laceration): autotransfusion of washed blood, then homologous blood, FFP and platelets.`),
          P("Type of transfusion", [['autologous', "the patient’s own blood"], ['homologous', "another donor’s blood"], ['cross-matching', "compatibility test"], ['hemolytic reaction', "RBC destruction in a mismatched transfusion"]]),
          L("Blood products", tbl([["Product", "Use"], ["PRBC (packed red cells)", "severe anaemia, bleeding"], ["FFP (fresh frozen plasma)", "replacing clotting factors"], ['platelets', "thrombocytopenia, bleeding"], ['cryoprecipitate', "fibrinogen and factor VIII; from chilling plasma"]])),
          M("Which product is obtained by freezing and then slowly thawing plasma, and is rich in fibrinogen?", ['cryoprecipitate', 'packed red cells', 'albumin', 'whole blood'], "cry/o = cold + precipitate = deposit."),
          L("Apheresis", `${e('-apheresis')} = separating and removing.<br>• <b>apheresis</b>: blood is drawn, one component separated and the rest returned to the body<br>• <b>plasmapheresis</b>: removing <b>plasma</b> and returning the formed elements (for example to clear harmful antibodies)`),
          T("In plasmapheresis, the red cells are removed and the plasma returned to the patient.", false, "The opposite: the plasma is removed and the formed elements returned."),
          W("Build a word meaning “separation of plasma”", ['plasm/o', '-apheresis'], ['-lysis', 'hem/o', '-stasis'], 'plasma + -pheresis = plasmapheresis.'),
          S("Spell the term for giving blood from a donor to a recipient", 'transfusion', 'trans- + fus/o + -ion.'),
          N('wb:co')
        ]
      },
      {
        id: 'co7', title: "Bleeding", icon: '🩸', items: [
          L("bursting forth of blood", `${e('-rrhage')} or ${e('-rrhagia')} = bursting forth (heavy bleeding).<br>• <b>hemorrhage</b>: bleeding from a vessel<br>• <b>hemorrhagic anemia</b>: anaemia caused by bleeding<br>• <b>splenorrhagia</b>: bleeding from the spleen<br>• <b>antihemorrhagic</b>: preventing bleeding`),
          L("Blood under the skin", tbl([["Term", "shape, form"], ['petechiae', "tiny flat purple-red dots"], ['purpura', "larger purple patches"], ['ecchymosis', "widespread bruising (black-and-blue)"], ['hematoma', "collection of blood under the skin or in tissue; raised"]]) + fig('bleeds', '', "from small to large: dot, patch, bruise, lump") + memo("In order of size: <b>P</b>etechiae → <b>P</b>urpura → <b>E</b>cchymosis → <b>H</b>ematoma; “P-P-E-H”, from pinhead to egg.")),
          M("Tiny, flat purple dots on the skin caused by capillary bleeding?", ['petechiae', 'ecchymosis', 'hematoma', 'urticaria'], "Petechiae are the smallest and ecchymosis the most widespread."),
          P("Word and definition", [['ecchymosis', "widespread bruising"], ['hematoma', "blood collected in tissue"], ['purpura', "purple patches"], ['hemorrhage', "bleeding from a vessel"]]),
          O("Order the skin bleeds from smallest to largest", ['petechiae', 'purpura', 'ecchymosis'], "Dot → patch → widespread bruise."),
          L("Immune and thrombotic purpuras", `• <b>ITP</b> (idiopathic thrombocytopenic purpura): destruction of platelets, often after a viral infection; ${e('idiopathic')} = of unknown cause<br>• <b>TTP</b> (thrombotic thrombocytopenic purpura): many clots in small vessels that use up platelets; often fatal`),
          M("In ITP, the word idiopathic means…", ["unknown cause", "inherited", "infectious", "drug-induced"], "idi/o = one’s own, path/o = disease; a disease without a known cause."),
          T("A haematoma is blood collected in tissue and can also form after a blood draw.", true, "True; if the puncture site is not pressed well."),
          B("Splenorrhagia means ___ from the spleen.", ["bleeding", "removal", "stitch"], "-rrhagia = bursting forth; -rrhaphy = suture."),
          S("Spell the term for bleeding from a vessel", 'hemorrhage', "hem/o + -rrhage; it has two r’s.", 'hemor…'),
          N('m2r:co')
        ]
      },
      {
        id: 'co8', title: "Inherited clotting disorders", icon: '🧬', items: [
          L("inherited bleeding disorder", `<b>Hemophilia</b>: an <b>inherited, sex-linked</b> disease in which a <b>clotting factor</b> (usually <b>VIII</b> or <b>IX</b>) is lacking → long clotting time and bleeding, spontaneous or after injury, into the skin, <b>joints</b> and mouth.<br>It is seen almost only in <b>males</b>.${wb('hem/o', '-philia')} → literally “love of blood”, i.e. a tendency to bleed.${pearl("A haemophilia patient with a swollen, warm knee after a minor knock: bleeding into the joint (hemarthrosis); intramuscular injections are also dangerous for them.")}`),
          M("In which group is haemophilia mostly seen?", ["males", "women’s health", "equally in both", "older people only"], "Its gene is on the X chromosome; boys, with one X, become ill."),
          L("Von Willebrand", `<b>Von Willebrand disease</b>: the commonest inherited bleeding disorder; a lack of <b>vWF</b>, which sticks platelets to the vessel wall and carries factor VIII.<br>Symptoms: easy bruising, <b>nosebleeds</b> and bleeding gums. Seen in both sexes.`),
          P("Disease and feature", [['hemophilia A', "lack of factor VIII"], ['hemophilia B', "lack of factor IX"], ['von Willebrand disease', "lack of vWF"], ['thrombocytopenia', "shortage of platelets"]]),
          T("In haemophilia the platelet count is usually very low.", false, "In haemophilia platelets are normal; the problem is a missing clotting factor (long PTT)."),
          L("Drugs that stop bleeding", `• <b>coagulants</b>: drugs that help clotting<br>• <b>hemostatics</b>: stop bleeding, such as <b>vitamin K</b><br>• <b>antihemorrhagic</b>: against bleeding<br>In haemophilia, the missing factor (VIII or IX) is injected.`),
          M("Which vitamin is needed for the liver to make several clotting factors and is given as a haemostatic?", ["vitamin K", "vitamin C", "vitamin B12", "vitamin D"], "Vitamin K is needed to make prothrombin and several other factors."),
          B("The word hemophilia is made from hem/o and ___.", ['-philia', '-phobia', '-penia'], "-philia means tendency; a tendency to bleed."),
          W("Build a word meaning “fear of blood”", ['hem/o', '-phobia'], ['-philia', '-stasis', 'thromb/o'], "hem/o + -phobia = hemophobia; not to be confused with hemophilia."),
          N('t2f:co')
        ]
      },
      {
        id: 'co9', title: "Blood draws and clotting tests", icon: '💉', items: [
          L("Venepuncture", `• <b>phlebotomy</b> (${e('phleb/o')} = vein + ${e('-tomy')} = cutting): drawing blood from a vein for tests; also removing blood as treatment (for example in polycythemia vera)<br>• <b>venipuncture</b> (${e('ven/o')} = vein): puncturing a vein to draw blood<br>• <b>venous</b> = relating to a vein${fig('venipuncture', '', "The tourniquet is tied and blood is drawn from a vein at the elbow with a needle and vacuum tube.")}`),
          M("What is the procedure in this picture called?", ['venipuncture', 'transfusion', 'bone marrow aspiration', 'plasmapheresis'], "ven/o (vein) + puncture (piercing) = drawing blood from a vein.", null, F('venipuncture')),
          P("Word and meaning", [['phlebotomy', "cutting into a vein to draw blood"], ['venipuncture', "puncturing a vein"], ['venous', "relating to a vein"], ['-tomy', "incision"]]),
          L("Clotting tests", tbl([["test", "What it measures"], ['PT (pro-time)', "time to form a clot after adding thromboplastin; monitoring warfarin with the INR"], ['PTT / aPTT', "the other clotting pathway; monitoring heparin"], ['BT (bleeding time)', "platelet function"], ['PLT', "number of platelets"]])),
          M("Which test is mostly used to monitor heparin treatment?", ['aPTT', 'PT', 'ESR', 'Hct'], "Heparin → aPTT; warfarin → PT/INR."),
          T("A long PT means the blood clots more slowly than normal.", true, "True; in clotting factor deficiency, liver disease or anticoagulant use."),
          B("The abbreviation PT means ___ time.", ["prothrombin", "platelet", "liquid part of blood"], 'PT = prothrombin time.'),
          M("What treatment does a patient with polycythemia vera receive to reduce red cell volume?", ["therapeutic phlebotomy", "blood transfusion", "splenectomy", "erythropoietin injection"], "Removing some blood (phlebotomy) thins the blood."),
          O("Order the steps of a correct blood draw", ["identify the patient and label the tube", "apply the tourniquet and find a vein", "disinfect and perform venipuncture", "release the tourniquet and press on the site"], "Enough pressure after the blood draw prevents a haematoma."),
          S("Spell the vein-incision term for drawing blood", 'phlebotomy', 'phleb/o + -tomy.', 'phleb…'),
          N('sp:co')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* ایمنا — دنیای ۳: دستگاه لنفاوی */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ly', sym: 'Ly', name: "The lymphatic system", short: "lymph", sub: "Lymph, vessels and ducts, nodes, spleen, thymus, tonsils, lymphoedema and lymphoma",
    color: '#12A594', dark: '#0B7A6C', light: '#D9F5EF',
    levels: ["Lymph and vessels", "Lymphatic organs", "Diseases and procedures"],
    gens: EA.genIds('ly'),
    lessons: [
      {
        id: 'ly1', title: "What is lymph?", icon: '💧', items: [
          L("From interstitial fluid to lymph", `Some plasma leaks out of the blood capillaries and stays between the cells: <b>interstitial fluid</b> (${e('inter-')} = between, ${e('-stitial')} = placed).<br>When this fluid enters the <b>lymph capillaries</b>, it is called <b>lymph</b>: a clear fluid with white cells (especially lymphocytes).${fig(['lymph-capillary', 'capillary'], ['Blood capillary • Lymph capillary', "Imena diagram"])}`),
          M("What is the fluid between tissue cells called?", ['interstitial fluid', 'lymph', 'plasma', 'serum'], "When this same fluid enters a lymph capillary, it is called lymph.", null, F('capillary')),
          L("Four key jobs of the lymphatic system", `1. <b>returning fluid and protein</b> from the tissues to the blood → preventing oedema<br>2. <b>absorbing fat</b> from the gut: intestinal lymph vessels called <b>lacteals</b> carry away absorbed fats<br>3. <b>filtering</b> germs and cancer cells in the nodes (with macrophages)<br>4. <b>immunity</b>: making and circulating lymphocytes${fig('lymph-circulation', '', "Lymph is collected from the capillary bed, passes through the nodes and returns to a vein through a lymphatic duct.")}`),
          P("Each part and its job", [['lacteals', "absorbing fat from the gut"], ['lymph nodes', "filtering lymph"], ['lymph capillaries', "collecting interstitial fluid"], ['lymphocytes', "immune defence"]]),
          T("Like the circulatory system, the lymphatic system has a central pump.", false, "Lymph has no pump; it moves with muscle contractions and breathing, and valves stop it flowing back.", F('lymph-heart')),
          M("In this picture, what are the green vessels?", ['lymph capillaries', 'arterioles', 'venules', 'blood capillaries'], "Green = lymph capillaries; red = arterioles, blue = venules.", null, F('lymph-capillary-inset')),
          L("One-way flow", `Lymph moves in <b>one direction</b> only, towards the heart. <b>Valves</b> in the lymph vessels stop it flowing back.<br>Route: tissue → lymph capillary → lymph vessel → nodes → ducts → <b>subclavian vein</b>.`),
          O("Order the path of lymph", ["interstitial fluid in the tissue", "lymph capillary", "lymph vessels and nodes", "lymphatic duct", "subclavian vein"], "Lymph finally returns to the blood."),
          B("The intestinal lymph vessels that absorb fat are called ___.", ['lacteals', 'capillaries', 'tonsils'], "lacteal comes from lact/o (milk), because lymph carrying fat looks milky."),
          S("Spell the term for the clear fluid in lymph vessels", 'lymph', "lymph/o = lymph."),
          N('t2f:ly')
        ]
      },
      {
        id: 'ly2', title: "Vessels and ducts", icon: '🛤️', items: [
          L("The vessel network", `Parts of the lymphatic vessel system:<br>• <b>lymph capillaries</b>: lymph capillaries in the tissues<br>• <b>lymphatic vessels</b>: lymph vessels with valves<br>• <b>lymphatic ducts</b>: the two large final ducts<br>${e('lymphangi/o')} = lymph vessel (${e('angi/o')} = vessel) → <b>lymphangial</b> = relating to a lymph vessel.${memo("The lymphatic system is like a house’s drainage: one-way pipes that collect excess water, with filters (nodes) along the way. It has no pump; muscle contractions and valves move the lymph along.")}${fig('lymph-flow')}${fig('lymph-valve', "A, B", "A: lymph vessel with a valve between tissue cells • B: microscope image of a lymph vessel valve")}`),
          L("The two main ducts", `${tbl([["Duct", "Drains lymph from", "Empties into"], ['right lymphatic duct', "right side of the head, neck, chest and right arm", "right subclavian vein"], ["thoracic duct (larger)", "the rest of the body", "left subclavian vein"]])}${fig(['lymph-drainage', 'lymph-ducts-head'], ["blue area: right duct", "ducts entering the subclavian veins"])}`),
          M("Into which duct does lymph from the left leg drain?", ['thoracic duct', 'right lymphatic duct', "neither; it goes to the kidney", "straight into the heart"], "The thoracic duct drains lymph from most of the body, including both legs.", null, F('lymph-drainage')),
          T("The right lymphatic duct drains lymph from the right arm.", true, "True; the right side of the head, neck, chest and the right arm."),
          M("Into which duct does the blue area of the body in this picture drain?", ['right lymphatic duct', 'thoracic duct', 'cisterna chyli', 'subclavian artery'], "The upper right quarter of the body (head, neck, chest and right arm) drains into the right lymphatic duct.", null, F('lymph-drainage')),
          P("Root and meaning", [['lymph/o', "lymph"], ['lymphangi/o', "lymph vessel"], ['angi/o', "vessel"], ['inter-', "between"]]),
          L("Inflammation and tumours of lymph vessels", `• <b>lymphangitis</b>: inflammation of lymph vessels; often a red streak on the skin running from an infection<br>• <b>lymphangioma</b>: a (usually benign) tumour of a lymph vessel<br>• <b>lymphangiectomy</b>: removal of a lymph vessel<br>• <b>lymphangiotomy</b>: incision of a lymph vessel`),
          W("Build a word meaning “tumour of a lymph vessel”", ['lymphangi/o', '-oma'], ['lymphaden/o', '-itis', 'splen/o'], 'lymphangi/o + -oma = lymphangioma.'),
          M("A painful red streak on the forearm running from an infected wound towards the armpit is a sign of what?", ['lymphangitis', 'lymphedema', 'lymphoma', 'thymitis'], "Inflammation of a lymph vessel carrying the infection towards the nodes."),
          B("The word lymphangiectomy means ___ of a lymph vessel.", ["removal", "incision", "inflammation"], "-ectomy = removal; -tomy = cutting."),
          N('d2t:ly')
        ]
      },
      {
        id: 'ly3', title: "Lymph nodes", icon: '🫘', items: [
          L("Bean-shaped filters", `A <b>lymph node</b> is a small <b>bean-shaped</b> mass of lymphatic tissue that <b>filters</b> lymph. Lymph enters through <b>afferent</b> vessels and leaves through an <b>efferent</b> vessel. Inside, lymphocytes and macrophages trap germs.${fig(['lymph-node-structure', 'node'], ["Node structure from the textbook", "Imena diagram"], "cortex with nodules and germinal centres (B cells), medulla (macrophages and T cells), hilum and the afferent and efferent vessels")}`),
          L("Where are nodes clustered?", `• <b>cervical</b> (${e('cervic/o')} = neck)<br>• <b>axillary</b> (${e('axill/o')} = armpit)<br>• <b>inguinal</b> (${e('inguin/o')} = groin)<br>• <b>mediastinal</b> (middle of the chest) and submandibular (under the jaw)<br>${fig('lymph-nodes-regional', '', "Regional lymph nodes: cervical, mediastinal, axillary and inguinal; and where the thoracic duct and right lymphatic duct enter the subclavian veins")}`),
          P("Region and root", [['cervic/o', "neck"], ['axill/o', "armpit"], ['inguin/o', "groin"], ['lymphaden/o', "lymph node"]]),
          M("What are the lymph nodes of the armpit called?", ['axillary', 'cervical', 'inguinal', 'mediastinal'], "axill/o = armpit.", null, F('lymph-nodes-regional')),
          L("A diseased node", `${e('lymphaden/o')} = lymph node (${e('aden/o')} = gland):<br>• <b>lymphadenitis</b>: inflammation and enlargement of nodes, usually in infection<br>• <b>lymphadenopathy</b>: any node disease; chronically swollen or numerous nodes<br>• <b>adenopathy</b>: disease of a gland<br>• <b>lymphadenectomy</b>: removal of a node<br>• <b>lymphadenotomy</b>: incision of a node`),
          W("Build a word meaning “disease of a lymph node”", ['lymphaden/o', '-pathy'], ['lymphangi/o', '-itis', '-ectomy'], 'lymphaden/o + -pathy = lymphadenopathy.'),
          T("Lymphadenitis means inflammation of the lymph vessels.", false, "lymphaden/o = node; inflammation of a lymph vessel is lymphangitis."),
          M("In the case of John Latella (HIV positive), what did the enlarged lymph node turn out to be after biopsy?", ["infectious, not malignant", "lymph node cancer with Reed-Sternberg cells", "cancer with purple skin lesions", "cancer metastasis"], "An outpatient biopsy and blood tests showed the node was infected; it was treated with antibiotics."),
          B("The vessel that carries lymph out of a node is the ___ vessel.", ['efferent', 'afferent', 'thoracic'], "af- = towards (in), ef- = away (out)."),
          S("Spell the term for disease of the lymph nodes", 'lymphadenopathy', 'lymphaden/o + -pathy.', 'lymphaden…'),
          N('wb:ly')
        ]
      },
      {
        id: 'ly4', title: "spleen", icon: '🟣', items: [
          L("The largest lymphatic organ", `The <b>spleen</b> lies in the <b>upper left abdomen</b>, under the ribs. Its jobs:<br>• <b>filtering blood</b> and removing <b>old</b> red cells (and recycling iron)<br>• <b>storing blood</b><br>• destroying bacteria and immune defence<br>${e('splen/o')} = spleen → <b>splenic</b> = relating to the spleen${fig(['spleen', 'spleen-thymus-location'], ["Shape of the spleen", "Position of the spleen and thymus"])}${pearl("The spleen often ruptures in accidents (ruptured spleen) and causes severe internal bleeding. After splenectomy the patient is vulnerable to encapsulated bacteria and receives the pneumococcal vaccine.")}`),
          M("Which job belongs to the spleen?", ["removing old red cells", "making insulin", "absorbing fat from the gut", "making erythropoietin"], "The spleen removes worn-out cells and recycles their iron."),
          L("Diseases of the spleen", tbl([["Term", "Meaning"], ['splenomegaly', "enlarged spleen"], ['hypersplenism', "overactive spleen"], ['splenitis', "inflammation of the spleen"], ['splenopathy', "any spleen disease"], ['splenorrhagia', "bleeding from the spleen"]])),
          P("Word and meaning", [['splenomegaly', "enlarged spleen"], ['splenectomy', "removal of the spleen"], ['splenorrhaphy', "suturing the spleen"], ['splenotomy', "incision of the spleen"]]),
          L("Three surgical suffixes", `• ${e('-ectomy')} = removal → <b>splenectomy</b> (for example when the spleen ruptures)<br>• ${e('-tomy')} = cutting → <b>splenotomy</b><br>• ${e('-rrhaphy')} = suture → <b>splenorrhaphy</b><br>Careful: ${e('-rrhagia')} (bleeding) differs from ${e('-rrhaphy')} (suture)!`),
          M(`After an accident the spleen has ruptured and the surgeon “sutures” it. Name of the operation?`, ['splenorrhaphy', 'splenorrhagia', 'splenectomy', 'splenotomy'], "‎-rrhaphy = suture."),
          M("In this microscope section of the spleen, what are the round dark islands packed with lymphocytes called?", ['white pulp', 'red pulp', 'capsule', 'hilum'], "White pulp is the spleen’s lymphatic tissue and red pulp is where red cells are filtered; that is why the spleen resembles a large lymph node.", null, F('spleen-histology')),
          T("In infectious mononucleosis the spleen may enlarge (splenomegaly).", true, "True; that is why these patients are advised to avoid contact sports."),
          W("Build a word meaning “enlargement of the spleen”", ['splen/o', '-megaly'], ['-rrhaphy', 'thym/o', '-itis'], 'splen/o + -megaly = splenomegaly.'),
          B("In the case of the 36-year-old businessman with splenic lymphoma, a ___ was performed.", ['splenectomy', 'thymectomy', 'tonsillectomy'], "MRI showed an enlarged spleen and a 3 cm tumour; after biopsy, the spleen was removed."),
          S("Spell the term for the blood-filtering organ in the upper left abdomen", 'spleen', "splen/o = spleen."),
          N('m2r:ly')
        ]
      },
      {
        id: 'ly5', title: "thymus", icon: '🎓', items: [
          L("The school of T lymphocytes", `The <b>thymus</b> is a gland in the <b>mediastinum</b> (behind the breastbone, near the heart). Its hormone <b>thymosin</b> turns lymphocytes into <b>T lymphocytes</b>; the T comes from Thymus.<br>The thymus is large and active in childhood and shrinks after puberty.${fig(['thymus', 'spleen-thymus-location'], ["Shape of the thymus", "thymus above the heart"])}`),
          M("What is the thymus hormone called?", ['thymosin', 'thrombin', 'thyroxine', 'erythropoietin'], "Thymosin; not to be confused with thyroxine (the thyroid hormone)."),
          P("Word and meaning", [['thymoma', "tumour of the thymus"], ['thymitis', "inflammation of the thymus"], ['thymectomy', "removal of the thymus"], ['thymic', "relating to the thymus"]]),
          T("The T in “T lymphocyte” comes from the name thymus.", true, "True; and B from Bone marrow."),
          L("The thymus and disease", `• <b>thymoma</b>: a tumour of the thymus; sometimes linked with the autoimmune disease myasthenia gravis and treated by <b>thymectomy</b><br>• <b>thymitis</b>: inflammation of the thymus<br>Do not mix up ${e('thym/o')} with ${e('thyr/o')} (thyroid).`),
          W("Build a word meaning “removal of the thymus”", ['thym/o', '-ectomy'], ['-tomy', 'splen/o', '-oma'], 'thym/o + -ectomy = thymectomy.'),
          B("The thymus lies in the ___.", ["mediastinum (chest)", "abdomen", "neck behind the larynx"], "Behind the breastbone and above the heart."),
          M("Where do T lymphocytes mature?", ["thymus", "spleen", "lymph node", "liver"], "Lymphocytes are made in the bone marrow; T cells go to the thymus to mature."),
          S("Spell the term for the chest gland that trains T cells", 'thymus', "thym/o = thymus."),
          N('ab:ly')
        ]
      },
      {
        id: 'ly6', title: "Tonsils and lymphoid tissue", icon: '👅', items: [
          L("Three pairs of tonsils", `The <b>tonsils</b> are masses of lymphatic tissue in the throat that filter germs from air and food:<br>• <b>palatine tonsils</b>: the ordinary “tonsils” on both sides of the throat<br>• <b>pharyngeal tonsils</b> = <b>adenoids</b>: behind the nose<br>• <b>lingual tonsils</b>: at the back of the tongue${fig('tonsil', '', "Shape of a tonsil: a mass of lymphatic tissue")}`),
          P("Tonsil and location", [['palatine tonsils', "both sides of the throat"], ['pharyngeal tonsils', "behind the nose (adenoids)"], ['lingual tonsils', "back of the tongue"], ['Peyer patches', "wall of the small intestine"]]),
          M("The adenoids are which tonsils?", ['pharyngeal tonsils', 'palatine tonsils', 'lingual tonsils', 'Peyer patches'], "adenoids = the pharyngeal tonsils behind the nose."),
          L("Lymphoid tissue in the gut", `<b>Lymphoid tissue</b> (${e('-oid')} = resembling) is not only in the nodes:<br>• <b>Peyer patches</b>: lymphatic masses in the wall of the <b>small intestine</b><br>• <b>appendix</b>: a small pouch attached to the large intestine that contains lymphatic tissue<br>These are a defence line against swallowed germs.${fig('lymph-organs', '', "Lymphatic organs: tonsil (guarding the throat), spleen, thymus, lymph node and lymphatic vessel")}`),
          T("Peyer patches lie in the wall of the large intestine.", false, "Peyer patches are in the small intestine; the appendix is attached to the large intestine."),
          L("Tonsil words", `${e('tonsill/o')} (with two l’s):<br>• <b>tonsillitis</b>: inflammation of the tonsils<br>• <b>tonsillectomy</b>: removal of the tonsils<br>• <b>tonsillar</b>: relating to the tonsils<br>${e('adenoid/o')} = adenoid → adenoidectomy`),
          W("Build a word meaning “inflammation of the tonsils”", ['tonsill/o', '-itis'], ['-ectomy', 'aden/o', 'thym/o'], 'tonsill + -itis = tonsillitis.'),
          M("Which spelling is correct?", ['tonsillectomy', 'tonsilectomy', 'tonnsilectomy', 'tonsillecktomy'], "The root tonsill/o has two l’s."),
          B("The word lymphoid means ___ lymph.", ["like", "tumour", "inflammation"], "-oid = resembling."),
          S("Spell the term for removal of the tonsils", 'tonsillectomy', 'tonsill/o + -ectomy.', 'tonsill…'),
          N('f2t:ly')
        ]
      },
      {
        id: 'ly7', title: "Oedema and blockage", icon: '🦵', items: [
          L("When lymph cannot find its way", `If lymph vessels or nodes are <b>blocked</b> or removed, fluid collects in the tissue:<br>• <b>edema</b>: water collecting in tissue<br>• <b>lymphedema</b> (${e('-edema')} = swelling): local swelling from trapped lymph; for example in the arm after armpit nodes are removed in breast cancer surgery${fig('lymphedema-leg', '', "Lymphoedema of the right lower limb")}`),
          M("After removal of her armpit nodes, a woman has developed chronic swelling of the arm. Most likely term?", ['lymphedema', 'lymphangioma', 'lymphadenitis', 'hypersplenism'], "Removing nodes disrupts lymph flow → lymphedema."),
          L("Elephantiasis", `<b>Elephantiasis</b>: a lymphatic disease caused by the <b>filaria parasite</b> (a threadworm) blocking the lymph vessels → severe swelling and thickening of the skin, especially in the legs.`),
          M("Which term best describes the chronic one-sided swelling of the right leg in this picture?", ['lymphedema', 'lymphangioma', 'hematoma', 'thrombocytosis'], "Lymph collecting in tissue because vessels and nodes are blocked or removed.", null, F('lymphedema-leg')),
          T("Elephantiasis is caused by a parasitic worm (filaria).", true, "True; the worms block the lymph vessels."),
          P("Word and definition", [['edema', "water collecting in tissue"], ['lymphedema', "swelling from trapped lymph"], ['elephantiasis', "parasitic lymphatic blockage"], ['lymphangitis', "inflammation of a lymph vessel"]]),
          L("Proteins and oedema", `Plasma proteins, especially <b>albumin</b>, hold water inside the vessels. If too much water leaves the blood and the lymph cannot return it, oedema develops. By removing fluid from the capillary bed, the lymphatic system <b>reduces oedema</b>.`),
          W("Build a word meaning “lymphatic swelling”", ['lymph/o', '-edema'], ['-oma', 'angi/o', '-megaly'], 'lymph + -edema = lymphedema.'),
          B("Low plasma albumin can cause ___.", ["oedema", "polycythaemia", "thrombosis"], "Low albumin → water moves from the vessels into the tissue."),
          M("How does angioedema differ from lymphedema?", ["angioedema is allergic swelling under the skin; lymphoedema comes from disrupted lymph flow", "they are the same", "angioedema occurs only in the spleen", "lymphoedema is always allergic"], "Angioedema is like deep hives and belongs to the world of immunity and allergy."),
          N('sp:ly')
        ]
      },
      {
        id: 'ly8', title: "Lymphomas", icon: '🎗️', items: [
          L("Lymphoma means cancer of lymphatic tissue", `<b>Lymphoma</b> (${e('-oma')} = tumour) is a cancer that starts from lymphocytes in lymphatic tissue. Two large groups:<br>• <b>Hodgkin lymphoma</b> (HD): with giant <b>Reed-Sternberg</b> cells in the nodes<br>• <b>non-Hodgkin lymphoma</b> (NHL): over 20 types without Reed-Sternberg cells; commoner and mostly in older people${memo("Under the microscope a Reed-Sternberg cell looks like <b>owl eyes</b>: two large nuclei with big nucleoli. Spot the owl → Hodgkin.")}`),
          M("What is the microscopic hallmark of Hodgkin lymphoma?", ["Reed-Sternberg cells", "abnormal chromosome of chronic myeloid leukaemia", "Bence Jones protein", "sickle-shaped red cells"], "Giant multinucleated Reed-Sternberg cells."),
          P("Diseases and symptoms", [['Hodgkin lymphoma', "Reed-Sternberg cell"], ['CML', "abnormal chromosome of chronic myeloid leukaemia"], ['multiple myeloma', "Bence Jones protein"], ['non-Hodgkin lymphoma', "over 20 types, no Reed-Sternberg cells"]]),
          L("Other types", `• <b>lymphocytic lymphoma</b>: malignant cells resembling large lymphocytes<br>• <b>histiocytic lymphoma</b>: malignant cells resembling large macrophages (histiocytes)<br>• <b>thymoma</b>: tumour of the thymus<br><b>Metastasis</b> means the spread of cancer to another place; the lymph nodes are a major route of metastasis.`),
          T("Non-Hodgkin lymphoma is a single type of disease.", false, "NHL is a group of more than 20 types of lymphoma."),
          M("A cancer has spread from one place to another. The correct term?", ['metastasis', 'remission', 'relapse', 'hemostasis'], "meta- (beyond) + -stasis (placing)."),
          B("Lymphoma means a ___ of lymphatic tissue.", ["tumour", "inflammation", "enlargement"], "-oma = tumour."),
          O("Order the diagnostic path for lymphoma in the case of the 36-year-old businessman", ["tiredness and a feeling of abdominal fullness", "MRI: enlarged spleen and a 3 cm tumour", "biopsy of the splenic tumour", "splenectomy and referral for chemotherapy"], "Diagnosis: non-Hodgkin lymphoma of the spleen."),
          S("Spell the term for cancer of lymphatic tissue", 'lymphoma', 'lymph/o + -oma.'),
          N('t2f:ly')
        ]
      },
      {
        id: 'ly9', title: "Imaging and surgery", icon: '📷', items: [
          L("-graphy or -gram?", `• ${e('-graphy')} = the <b>process</b> of recording images → <b>lymphangiography</b>: X-ray of the lymph vessels and nodes after a contrast injection<br>• ${e('-gram')} = the recorded <b>image</b> → <b>lymphangiogram</b><br>• <b>lymphography</b>: viewing the lymph vessels and nodes by X-ray after a contrast injection (usually an iodised oil)${fig('lymphangiogram', '', "Lymphangiogram of the lymph vessels and nodes of the pelvis")}`),
          M("What is the image produced by lymphangiography called?", ['lymphangiogram', 'lymphangioma', 'lymphadenitis', 'lymphoscintigraphy'], "-gram is the image and -graphy the process."),
          L("nuclear scan of lymph drainage", `${e('scint/i')} = spark, flash. In <b>lymphoscintigraphy</b> a <b>radioactive</b> substance is injected and a gamma camera records the lymph vessels and nodes; used to find <b>metastasis</b>, lymphoedema or node blockage.`),
          T("Lymphoscintigraphy uses a radioactive substance.", true, "True; it is nuclear medicine imaging."),
          P("Suffix and meaning", [['-graphy', "process of recording"], ['-gram', "recorded image"], ['-ectomy', "removal"], ['-tomy', "incision"]]),
          L("Lymphatic surgery", `• <b>lymphadenectomy</b>: removal of a lymph node<br>• <b>lymph node dissection</b>: removing cancerous nodes for microscopic examination<br>• <b>lymphadenotomy</b>: incision of a node<br>• <b>splenectomy</b>, <b>thymectomy</b>, <b>tonsillectomy</b>${fig('lymph-dissection', '', "Surgical view: lymph enters a node through the lymph vessels and leaves it.")}`),
          M("What is removing cancerous nodes for examination under the microscope called?", ['lymph node dissection', 'lymphangiotomy', 'lymphography', 'splenorrhaphy'], "dissection = separating and removing for examination."),
          W("Build a word meaning “recording images of the lymph vessels”", ['lymphangi/o', '-graphy'], ['-gram', 'lymphaden/o', '-tomy'], 'lymphangi/o + -graphy = lymphangiography.'),
          B("The word lymphadenotomy means ___ of a lymph node.", ["incision", "removal", "stitch"], "‎-tomy = cutting."),
          S("Spell the term for removal of a lymph node", 'lymphadenectomy', 'lymphaden/o + -ectomy.', 'lymphaden…'),
          N('d2t:ly')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* ایمنا — دنیای ۴: ایمنی */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'im', sym: 'Ig', name: "immunity, protection", short: "immunity, protection", sub: "Innate defence, lymphocytes, antibodies, allergy, autoimmunity and HIV",
    color: '#1899D6', dark: '#1272A3', light: '#DDF1FB',
    levels: ["Innate and Acquired Defence", "Lymphocytes and antibodies", "Allergy, autoimmunity and immunodeficiency"],
    gens: EA.genIds('im'),
    lessons: [
      {
        id: 'im1', title: "Innate shields", icon: '🛡️', items: [
          L("Immunity means protection", `${e('immun/o')} = immunity, protection. <b>Immunity</b> is the body’s state of protection against disease and <b>immunology</b> its study.<br><br>There are two layers of defence:<br>• <b>natural (innate) immunity</b>: inborn and <b>non-specific</b><br>• <b>acquired (adaptive) immunity</b>: acquired and <b>specific</b>; it has memory${fig('immunity')}`),
          L("Innate defences", `Innate defence is present from birth and treats every invader the same:<br>• <b>intact skin</b>, <b>mucosa</b> and <b>cilia</b><br>• antibacterial secretions (such as tears and stomach acid) and reflexes (coughing, sneezing)<br>• <b>phagocytes</b> (neutrophils, macrophages)<br>• <b>NK cells</b> (natural killer), <b>complement</b> and <b>inflammation</b>${memo("Innate defence is like a castle’s walls and guards: the same for everyone and always ready, but it never remembers a face. Acquired defence is the detective squad that keeps a file on every criminal.")}`),
          M("Which of these is part of innate (non-specific) immunity?", ["intact skin and airway cilia", "antibodies after a vaccine", "memory T cells", "injected gamma globulin"], "Skin, mucosa, cilia and phagocytes act without any prior acquaintance.", null, F('immunity')),
          P("Defence and its type", [["skin and mucosa", "innate physical barrier"], ['NK cell', "natural killer cell"], ['complement', "plasma enzymes working with antibodies"], ["vaccine response", "Acquired immunity"]]),
          T("Innate immunity has memory and acts faster the second time.", false, "Memory is a feature of acquired immunity (B and T lymphocytes)."),
          L("Pathogen and antigen", `• <b>pathogen</b> (${e('path/o')} = disease + ${e('-gen')} = producer): any disease-causing microorganism or substance<br>• <b>antigen</b>: a foreign substance that triggers the immune system to make antibodies<br>• <b>immunogen</b>: any substance that produces an immune response`),
          W("Build a word meaning “disease-producing”", ['path/o', '-gen'], ['-logy', 'immun/o', '-oid'], 'path/o + -gen = pathogen.'),
          B("The study of the immune system is called ___.", ['immunology', 'hematology', 'oncology'], 'immun/o + -logy.'),
          S("Spell the term for the body’s protected state against disease", 'immunity', 'immun/o + -ity.'),
          N('t2f:im')
        ]
      },
      {
        id: 'im2', title: "Eating and inflammation", icon: '🍽️', items: [
          L("Phagocytosis", `${wb('phag/o', '-cytosis')}<br><b>Phagocytosis</b> = a cell engulfing and digesting particles and germs.<br>• <b>phagocyte</b>: an eating cell<br>• <b>macrophage</b> (${e('macro-')} large + ${e('-phage')} eater): a monocyte that has moved into tissue<br>• <b>microphage</b>: a small eater; the neutrophil${fig('macrophage', '', "A macrophage (purple) catching bacteria (green rods)")}${memo("phag/o = eating. A macrophage is the “big glutton”: the monocyte that moved into tissue and grew into a giant.")}`),
          M("Which white cell gives rise to the macrophage?", ['monocyte', 'neutrophil', 'basophil', 'B cell'], "After entering tissue the monocyte grows and is called a macrophage.", null, F('cell-monocyte')),
          M("What process is the purple cell in this picture carrying out?", ['phagocytosis', 'hemolysis', 'agglutination', 'coagulation'], "The macrophage catches and swallows bacteria: phag/o (eating) + -cytosis.", null, F('macrophage')),
          P("Word and meaning", [['phagocyte', "eating cell"], ['macrophage', "large tissue eater"], ['microphage', "small eater (neutrophil)"], ['phagocytosis', "the engulfing process"]]),
          L("inflammation", `<b>Inflammation</b> is the tissue’s response to injury or germs. Signs: <b>redness, heat, swelling, pain</b> and sometimes loss of function.<br><b>Histamine</b> (from basophils and mast cells) widens vessels and makes them leaky; that is why it also plays a part in allergy.${fig('inflammation', '', "The four classic signs with their Latin names")}${memo("The four Latin signs are like a two-thousand-year-old poem: <b>rubor</b> (redness), <b>calor</b> (heat), <b>tumor</b> (swelling), <b>dolor</b> (pain). They all end in -or!")}`),
          O("Order the inflammatory response", ["tissue injury or entry of germs", "histamine is released and vessels widen", "redness, heat and swelling", "phagocytes arrive and swallow the germs", "tissue repair"], "Histamine → leaky vessels → white cells arrive."),
          L("Immune messengers", `<b>Cytokines</b> are proteins that signal cells to start or regulate the immune response:<br>• <b>interleukins</b>: from T cells; act on other immune cells<br>• <b>interferons</b>: <b>antiviral</b> proteins<br>• <b>complement</b>: plasma enzymes that help antibodies destroy germs`),
          M("Which messenger has antiviral properties?", ['interferon', 'histamine', 'heparin', 'thrombin'], "interferon comes from “interfere”: it interferes with viral replication."),
          T("Histamine is released in allergic and inflammatory reactions.", true, "True; antihistamines block its effect."),
          W("Build a word meaning “large eater”", ['macro-', '-phage'], ['micro-', 'phag/o', '-cytosis'], 'macro- + -phage = macrophage.'),
          S("Spell the term for cells engulfing particles and germs", 'phagocytosis', 'phag/o + -cytosis.', 'phago…'),
          N('r2m:im')
        ]
      },
      {
        id: 'im3', title: "Acquired immunity", icon: '🧠', items: [
          L("Active or passive?", `${fig('immunity')}• <b>active immunity</b>: the body makes antibodies <b>itself</b>, after an illness or a <b>vaccine</b>; long-lasting, with memory<br>• <b>passive immunity</b>: <b>ready-made</b> antibodies arrive from outside, from mother to fetus (placenta and milk) or by injecting <b>gamma globulin</b> and <b>antitoxin</b>; fast but short-lived${fig('baby', '', "A newborn with antibodies received through the placenta (IgG) and breast milk (IgA) has natural passive immunity.")}`),
          M("What type of immunity does a baby who gets antibodies from breast milk have?", ["acquired passive", "acquired active", "innate", "autoimmune"], "Antibodies made by another body → passive."),
          P("Example and type of immunity", [["measles vaccine", "artificial acquired active"], ["catching chickenpox", "natural acquired active"], ["maternal antibodies through the placenta", "natural acquired passive"], ["gamma globulin injection", "artificial acquired passive"]]),
          L("vaccine", `• <b>vaccine</b>: material from a <b>weakened or killed</b> microbe (or part of one) that triggers an immune response without causing disease<br>• <b>vaccination</b> and <b>immunization</b>: the process of making immune<br>• <b>artificial immunity</b>: immunity from a vaccine or antibody injection<br>• <b>antitoxin</b>: an antibody against a specific toxin (such as tetanus)`),
          T("A vaccine produces artificial acquired active immunity.", true, "True; the body makes its own antibodies and memory cells."),
          M("A patient exposed to tetanus toxin who needs “immediate” protection receives what?", ["antitoxin (passive immunity)", "only a vaccine and a wait of several weeks", "drug that blocks histamine", "drug treatment of cancer"], "Antitoxin is a ready-made antibody and works immediately."),
          B("___ immunity is gained through illness or a vaccine and has a long memory.", ["active", "passive", "innate"], "In active immunity, the body makes its own antibodies and memory cells."),
          W("Build a word meaning “against a poison”", ['anti-', 'tox/o'], ['auto-', '-phylaxis', 'immun/o'], 'anti- + toxin = antitoxin.'),
          S("Spell the term for a weakened-microbe preparation that triggers immunity", 'vaccine', "vaccine; and vaccination is the act of giving it."),
          N('f2t:im')
        ]
      },
      {
        id: 'im4', title: "B and T lymphocytes", icon: '🎯', items: [
          L("The two arms of specific immunity", `${fig(['lymphocyte-sem', 'tb-cells'], ["A lymphocyte under the electron microscope", "Activation of T and B cells"])}${tbl([['', "Humoral immunity", "Cellular immunity"], ["cell", 'B cell', 'T cell'], ["Where it matures", "bone marrow (Bone)", "thymus (Thymus)"], ["Weapon", "antibodies from plasma cells", "direct attack on infected or cancer cells"]])}<b>Humoral</b> comes from humor (body fluid), because antibodies float in the blood and lymph.${fig('bt-cells')}${memo("The B cell is the “archer”: it shoots antibodies from a distance. The T cell is the “swordsman”: it attacks the infected cell hand to hand.")}`),
          M("In humoral immunity, which cell secretes antibodies?", ["the plasma cell (from a B cell)", 'helper T cell', 'macrophage', 'platelet'], "After meeting an antigen, a B lymphocyte becomes a plasma cell and makes antibodies."),
          L("The T family", `• <b>helper T cells</b> (<b>CD4</b>): the commanders; they stimulate the immune response<br>• <b>cytotoxic T cells</b> (<b>CD8</b>, killers): <b>kill</b> infected and cancer cells (${e('cyt/o + -toxic')} = toxic to cells)<br>• <b>suppressor T cells</b>: <b>damp down</b> the immune response once the danger is over<br>• <b>NK cells</b> are also cytotoxic but belong to innate immunity`),
          P("Cell and role", [['helper T (CD4)', "stimulating the immune response"], ['cytotoxic T (CD8)', "killing infected cells"], ['suppressor T', "damping down the immune response"], ['plasma cell', "making antibodies"]]),
          L("cell that shows antigens to T cells", `An <b>APC</b> (antigen-presenting cell), such as a macrophage, swallows the antigen, processes it and shows a piece of it on its surface to a <b>helper T cell</b>; this starts the specific response.`),
          O("Order the specific immune response", ["a macrophage (APC) swallows the antigen", "the antigen is presented to a helper T cell", "the helper T cell activates B cells and cytotoxic T cells", "plasma cells make antibodies", "memory cells remain"], "That is why, when CD4 cells are destroyed (HIV), the whole immune response is crippled."),
          T("Cytotoxic T cells destroy germs by making antibodies.", false, "Cytotoxic T cells attack infected cells directly; antibodies are the work of plasma cells."),
          M("Where does the B in “B cell” come from?", ['Bone marrow', 'Blood', 'Basophil', 'Body'], "The B lymphocyte matures in the bone marrow."),
          B("Helper T lymphocytes carry the ___ marker.", ['CD4', 'CD8', 'Rh'], "helper = CD4, cytotoxic = CD8."),
          S("Spell the adjective meaning “toxic to cells”", 'cytotoxic', 'cyt/o + -toxic.'),
          N('d2t:im')
        ]
      },
      {
        id: 'im5', title: "Antigen and antibody", icon: '🔑', items: [
          L("Lock and key", `An <b>antibody</b> (Ab) or <b>immunoglobulin</b> (Ig) is a <b>Y-shaped</b> protein that plasma cells make in response to an <b>antigen</b> (Ag). Each antibody sticks only to its own <b>specific</b> antigen, forming an antigen-antibody complex.${fig('antibody')}`),
          M("By what other name is an antibody known?", ['immunoglobulin', 'immunogen', 'interferon', 'interleukin'], "immun/o + -globulin (protein).", null, F('antibody')),
          L("The five immunoglobulin classes", tbl([["Class", "Key point"], ['IgG', "most abundant; the only class that crosses the placenta"], ['IgM', "the first antibody in a new infection"], ['IgA', "in secretions: tears, saliva, breast milk, mucus"], ['IgE', "allergy and anaphylaxis; parasites"], ['IgD', "on the surface of B cells"]]) + fig('ig-classes', '', "IgG single-unit, IgA two-unit (in secretions), IgM five-unit") + memo(`Remember the classes with “GAMED”: ${e('Ig<b>G</b>, Ig<b>A</b>, Ig<b>M</b>, Ig<b>E</b>, Ig<b>D</b>')}. IgG “Goes” across the placenta, IgM “Mega” is the largest and the first response, IgE “Eek!” is for allergy.`)),
          P("Class and feature", [['IgG', "crosses the placenta"], ['IgM', "first response"], ['IgA', "secretions and breast milk"], ['IgE', "allergy"]]),
          M("In Olivia’s case of severe latex allergy, which antibody plays the main role?", ['IgE', 'IgG', 'IgA', 'IgD'], "Type 1 (immediate) hypersensitivity is mediated by IgE."),
          L("Related words", `• <b>gamma globulin</b>: the antibody fraction of plasma; given as a drug for passive immunity<br>• <b>monoclonal antibody</b>: a pure laboratory antibody for diagnosis and treatment (for example of cancer)<br>• <b>seroconversion</b>: antibodies appearing in the serum after infection or a vaccine<br>• <b>titer</b>: the amount of antibody in the serum`),
          T("IgM is the first antibody to appear in a new infection.", true, "True; a high IgM signals a recent infection, and IgG later takes its place."),
          B("The appearance of antibodies in the serum after infection is called ___.", ['seroconversion', 'agglutination', 'desensitization'], "ser/o = serum + conversion = change."),
          W("Build a word meaning “immune protein (antibody)”", ['immun/o', '-globulin'], ['-globin', 'hem/o', '-gen'], 'immun/o + -globulin = immunoglobulin.'),
          S("Spell the term for the Y-shaped protein made against an antigen", 'antibody', "anti- + body; plural: antibodies."),
          N('ab:im')
        ]
      },
      {
        id: 'im6', title: "allergy", icon: '🤧', items: [
          L("An overreaction", `<b>Allergy</b> (${e('all/o')} = other, foreign) or <b>hypersensitivity</b> is an <b>exaggerated</b> immune reaction to a substance harmless to most people. That substance is called an <b>allergen</b>: pollen, dust, animal dander, bee stings, food, latex.<br>Its specialist: the <b>allergist</b>.${fig('allergens', '', "Common allergens: dust mites, ragweed, pollen and nuts")}`),
          M("Everything you see in this picture (mites, pollen, weeds, nuts) is an example of what?", ['allergen', 'antitoxin', 'antibody', 'immunosuppressant'], "allergen = a substance that causes allergy.", null, F('allergens')),
          L("The faces of allergy", tbl([["Term", "Meaning"], ['urticaria / hives', "hives: itchy raised wheals"], ['angioedema', "deeper swelling under the skin, like a large hive"], ['allergic rhinitis', "runny, inflamed nose (hay fever)"], ['allergic asthma', "airway narrowing from an inhaled allergen"], ['contact dermatitis', "skin inflammation after direct contact"]])),
          P("Word and meaning", [['urticaria', "Hives"], ['allergic rhinitis', "hay fever"], ['contact dermatitis', "contact skin inflammation"], ['angioedema', "deep swelling under the skin"]]),
          L("Immediate or delayed?", `• <b>immediate</b> hypersensitivity (type 1): with <b>IgE</b> and histamine, within minutes; from hives to anaphylaxis<br>• <b>delayed hypersensitivity reaction</b>: mediated by <b>T cells</b>; at least 12 hours later; such as contact dermatitis and the TB skin test`),
          T("A delayed hypersensitivity reaction is mediated by IgE and happens within minutes.", false, "The delayed reaction is mediated by T cells and takes at least 12 hours."),
          L("Treating allergy", `• avoiding the allergen<br>• <b>antihistamine</b>: blocks the effect of histamine<br>• <b>corticosteroids</b>: strong anti-inflammatories<br>• <b>desensitization</b> or <b>allergy shots</b> (immunotherapy): injecting tiny, increasing doses of the allergen so the body gets used to it`),
          M("What are regular injections of tiny amounts of allergen to reduce sensitivity called?", ['desensitization', 'seroconversion', 'immunosuppression', 'cross-matching'], "Desensitisation (allergy shots)."),
          B("A drug that blocks the effect of histamine is called an ___.", ['antihistamine', 'anticoagulant', 'antiretroviral'], 'anti- + histamine.'),
          S("Spell the medical term for hives", ['urticaria', 'hives'], "urticaria, or hives.", 'urt…'),
          N('sp:im')
        ]
      },
      {
        id: 'im7', title: "Anaphylaxis", icon: '🚨', items: [
          L("The most dangerous allergy", `<b>Anaphylaxis</b> (or anaphylactic shock): a <b>severe, systemic, life-threatening</b> allergic reaction.<br>${wb('ana-', '-phylaxis')} → ${e('-phylaxis')} = protection; “protection turned upside down”.<br>Symptoms: <b>a sharp fall in blood pressure</b>, <b>narrowing and blockage of the airway</b>, oedema, hives, tachycardia and loss of consciousness.${fig('allergy', '', "The allergen binds IgE on a mast cell → the mast cell releases histamine → symptoms")}${pearl("In anaphylaxis the first drug is <b>intramuscular epinephrine</b> (into the thigh), not an antihistamine. High-risk patients carry an auto-injector pen (EpiPen).")}`),
          M("Which sign separates anaphylaxis from simple hives?", ["falling blood pressure and breathlessness", "itchy skin", "a red raised patch on the skin", "sneezing"], "Involvement of circulation and breathing means a systemic reaction and an emergency."),
          L("Emergency treatment", `Priorities:<br>1. immediate injection of <b>epinephrine</b> (adrenaline)<br>2. keeping the <b>airway</b> open and giving oxygen<br>3. <b>antihistamines</b> and <b>corticosteroids</b><br><br>A high-risk patient should always carry an epinephrine auto-injector and wear a <b>medical alert bracelet</b>.`),
          O("Order the treatment of anaphylaxis by priority", ["immediate epinephrine injection", "keep the airway open and give oxygen", "drug that blocks histamine", "corticosteroid and monitoring"], "Epinephrine is the first-line life-saving drug."),
          T("Epinephrine is the first-line drug in anaphylaxis.", true, "True; it narrows the vessels and opens the airway."),
          M("Which advice did Olivia (type 1 latex allergy) receive?", ["avoid latex, wear a medical alert bracelet and carry an epinephrine injector", "take antibiotics only", "giving blood or blood products into a vein", "splenectomy"], "Plus a bronchodilator inhaler at the first sign of bronchospasm."),
          P("Drug and job", [['epinephrine', "immediate rescue in anaphylaxis"], ['antihistamine', "blocking histamine"], ['corticosteroid', "strong anti-inflammatory"], ['bronchodilator', "widening the airway"]]),
          B("Another name for anaphylaxis is ___ shock.", ["anaphylactic", "haemorrhagic", "septic"], 'anaphylactic shock.'),
          S("Spell the term for a severe, life-threatening allergic reaction", 'anaphylaxis', 'ana- + -phylaxis.', 'ana…'),
          N('t2f:im')
        ]
      },
      {
        id: 'im8', title: "autoimmune", icon: '🔄', items: [
          L("When the army attacks its own side", `<b>Autoimmune disease</b> (${e('auto-')} = self): the immune system targets the body’s <b>own</b> tissues as if they were pathogens.<br>Examples: lupus, rheumatoid arthritis, systemic sclerosis, Sjögren syndrome, and sometimes autoimmune haemolytic anaemia and ITP.${fig('sle-face', '', "Butterfly rash over the cheeks and nose")}`),
          L("Important autoimmune diseases", tbl([["disease", "Feature"], ['SLE (lupus)', "inflammation of connective tissue in many organs; butterfly rash on the face"], ['rheumatoid arthritis (RA)', "chronic inflammation of many joints"], ['systemic sclerosis', "hardening of the skin and organs (scleroderma)"], ['Sjögren syndrome', "dry eyes and mouth (exocrine glands)"], ['sarcoidosis', "fibrous lesions, often in the lungs and nodes"]])),
          M("This butterfly rash on the cheeks, with joint pain and sensitivity to light, points to which disease?", ['systemic lupus erythematosus', 'rheumatoid arthritis', 'sarcoidosis', 'hemophilia'], "One of the classic signs of lupus (SLE).", null, F('sle-face')),
          P("Disease and feature", [['SLE', "butterfly rash"], ['RA', "joint inflammation"], ['Sjögren syndrome', "dry eyes and mouth"], ['systemic sclerosis', "hard skin"]]),
          L("diagnosis and treatment", `• <b>ANA test</b> (antinuclear antibody): an antibody against the cell nucleus; its presence points to autoimmune disease<br>• treatment: <b>corticosteroids</b> and <b>immunosuppressants</b> (suppressing the immune response)<br>• in lupus: anti-inflammatories, antimalarial drugs, avoiding sunlight and stopping smoking`),
          T("A positive ANA test points to an autoimmune disease such as lupus.", true, "True; ANA is an antibody against the nuclei of the body’s own cells."),
          L("Graft versus host", `<b>Graft-versus-host disease</b> (GVHD): after a bone marrow transplant, the <b>donor’s</b> lymphocytes see the <b>recipient’s</b> tissues as foreign and attack them. <b>Tissue typing</b> before transplant lowers the risk.`),
          M("In GVHD, who attacks whom?", ["the graft’s lymphocytes attack the recipient’s tissue", "the recipient’s body attacks the graft", "maternal antibodies attack the fetus", "HIV attacks CD4 cells"], "The opposite of ordinary graft rejection (host-versus-graft)."),
          W("Build a word meaning “immunity against oneself”", ['auto-', 'immun/o'], ['anti-', 'all/o', '-phylaxis'], 'auto- + immune = autoimmune.'),
          S("Spell the term for the immune system attacking the body’s own tissues", 'autoimmune', 'auto- + immune.'),
          N('f2t:im')
        ]
      },
      {
        id: 'im9', title: "HIV and immunodeficiency", icon: '🦠', items: [
          L("Immunodeficiency", `<b>Immunodeficiency</b>: a defect in the immune system that leaves the body prone to infection.<br>• congenital: <b>SCIDS</b> (severe combined immunodeficiency syndrome); children with a non-functioning immune system<br>• acquired: <b>AIDS</b>, caused by the <b>HIV</b> virus<br><b>Immunosuppression</b> means suppressing the immune response (for example with drugs).`),
          L("What does HIV do?", `<b>HIV</b> is a <b>retrovirus</b> (an RNA virus) spread sexually, through infected blood and from mother to baby. The virus destroys <b>helper T lymphocytes (CD4)</b>, so cellular immunity collapses.<br>A <b>CD4 count below 200</b> per microlitre = the definition of <b>AIDS</b>.${fig(['hiv-virus', 'hiv'], ["the HIV virus", "target: the CD4 cell"])}`),
          M("Which cell does HIV specifically target?", ['helper T cell (CD4)', "red blood cell", "platelet", "commonest white cell; a germ eater"], "Loss of CD4 cells cripples the whole immune response.", null, F('hiv')),
          L("infections exploiting weak immunity", `<b>Opportunistic infections</b> cause disease only when immunity is weak:<br>• <b>PCP</b> (Pneumocystis pneumonia): the fungus Pneumocystis jiroveci<br>• <b>candidiasis</b>: Candida fungus in the mouth and oesophagus<br>• <b>Kaposi sarcoma</b> (KS): a connective tissue cancer<br>• <b>cytomegalovirus</b> (CMV) and <b>MAI</b> (a mycobacterium)<br>An early stage with mild symptoms: <b>ARC</b> (AIDS-related complex)${fig('kaposi', '', "Purple-red skin lesions in Kaposi sarcoma")}`),
          M("The purple-red skin lesions in this patient with AIDS are a sign of what?", ['Kaposi sarcoma', 'urticaria', 'petechiae', 'contact dermatitis'], "Kaposi sarcoma is a connective tissue cancer and an AIDS-defining illness.", null, F('kaposi')),
          P("Infection and cause", [['PCP', "Pneumocystis fungus"], ['candidiasis', "Candida fungus"], ['Kaposi sarcoma', "connective tissue cancer"], ['CMV', "a virus of the herpes family"]]),
          L("diagnosis and treatment", `• screening: <b>ELISA</b> or <b>EIA</b> and the <b>HIV antigen/antibody immunoassay</b><br>• confirmation: <b>Western blot</b><br>• monitoring: <b>CD4 count</b> and viral load<br>• treatment: <b>HAART</b> (highly active antiretroviral therapy), including <b>protease inhibitors</b>; proper treatment prevents progression to AIDS`),
          O("Order the diagnostic path for HIV", ["screening with ELISA", "confirmation with Western blot", "CD4 count and viral load", "starting HAART"], "A sensitive screen, then a specific confirmation."),
          M("A 40-year-old man with AIDS has fever, night sweats, cough and a CD4 count of 190. Which lung infection must be ruled out?", ['Pneumocystis pneumonia', 'allergic asthma', 'sarcoidosis', 'thymoma'], "PCP is the commonest opportunistic lung infection in AIDS; a chest X-ray and sputum culture were ordered."),
          T("Western blot is used to confirm an HIV diagnosis.", true, "True; ELISA screens and Western blot confirms."),
          S("Spell the term for an infection that strikes only when immunity is weak", ['opportunistic infection', 'opportunistic'], "opportunistic infection; plural: opportunistic infections.", 'oppor… infection'),
          N('wb:im')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* ایمنا — دنیای ۵: آزمایش، درمان و مراقبت ویژه
 * بخش ICU و ایمونونوتریشن از نسخه غنی‌شده داده‌ها (SIRS، سپسیس، طوفان سایتوکینی، PCT، hs-CRP، هپسیدین، گلوتامین، آرژینین، امگا-۳) آمده است. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'dx', sym: 'Lab', name: "Tests, treatment and ICU", short: "test", sub: "CBC and specialised tests, drugs, transplant, SIRS and sepsis, iron and immunonutrition",
    color: '#E58A00', dark: '#B86E00', light: '#FFF1D6',
    levels: ["Tests", "Treatments", "Critical care and immunonutrition"],
    gens: EA.genIds('dx'),
    lessons: [
      {
        id: 'dx1', title: "The CBC and indices", icon: '📋', items: [
          L("complete blood count", `The <b>CBC</b> (complete blood count) is the most common blood test: screening for anaemia, infection and general health.<br>Parts: <b>RBC</b>, <b>WBC</b>, <b>Hgb</b>, <b>Hct</b>, <b>PLT</b>, the red cell indices and often a <b>diff</b> (differential count).${fig('cbc')}${pearl("In charts, the CBC is often summarised as a “fishbone” diagram: WBC on the left, Hgb above and Hct below in the middle, PLT on the right.")}`),
          M("Which is not part of the CBC?", ["PT (prothrombin time)", 'Hgb', 'WBC', 'PLT'], "PT is a clotting test and is ordered separately.", null, F('cbc')),
          P("Abbreviation and meaning", [['RBC', "red cell count"], ['WBC', "white cell count"], ['Hct', "percentage of red cells in blood (packed cell volume)"], ['PLT', "platelet count"]]),
          L("Red cell indices", tbl([["Index", "Meaning", "Use"], ['MCV', "mean corpuscular volume: the average size", "small (microcytic) or large (macrocytic)"], ['MCH', "average haemoglobin per cell", "degree of colour"], ['MCHC', "average haemoglobin concentration", "hypochromic or normochromic"]]) + `${e('corpuscular')} comes from corpuscle (small body = a blood cell).`),
          M("A low MCV (microcytic) with hypochromia points mostly to which anaemia?", ["iron-deficiency anaemia", "pernicious anaemia", "aplastic anaemia", "acute haemorrhagic anaemia"], "Iron deficiency → small, pale cells; pernicious → large (macrocytic) cells."),
          L("The differential count", `<b>White blood cell differential</b> (diff): the percentage of each type of white cell.<br>• high neutrophils → bacterial infection<br>• high lymphocytes (lymphocytosis) → viral infection such as mononucleosis<br>• high eosinophils → allergy and parasites<br>A normal result is written <b>WNL</b> (within normal limits).`),
          T("Eosinophilia on a differential count points mostly to allergy or parasitic infection.", true, "True."),
          B("The abbreviation WNL means within normal ___.", ["normal", "danger", "unknown"], 'within normal limits.'),
          S("Write the abbreviation for the full blood count test", 'CBC', 'complete blood count.'),
          N('ab:dx')
        ]
      },
      {
        id: 'dx2', title: "Specialised blood tests", icon: '🧪', items: [
          L("From vein to laboratory", `Most blood tests start with a <b>venipuncture</b>; the sample is centrifuged to separate plasma or serum from the cells.${fig(['venipuncture', 'blood-process'], ['venipuncture', "centrifuging and separation"])}`),
          L("ESR and reticulocytes", `• <b>ESR</b> (sed rate): how fast red cells settle in one hour; raised in <b>inflammation</b> and tissue damage (non-specific)<br>• <b>reticulocyte count</b>: the count of new red cells; a <b>rise</b> means the marrow is responding to bleeding or haemolysis, a <b>fall</b> means failing production`),
          M("After bleeding, a patient has a high reticulocyte count. This means…", ["the bone marrow is compensating by making red cells", "the bone marrow has failed", "the patient has leukaemia", "the platelets have fallen"], "Reticulocytosis = a proper bone marrow response."),
          L("Special tests", tbl([["test", "Use"], ['Coombs test', "antibodies on red cells (HDN, autoimmune haemolysis)"], ['Schilling test', "vitamin B12 absorption (pernicious anaemia)"], ['electrophoresis', "separating proteins or haemoglobin with an electric current"], ['RBC morphology', "cell shape (for example sickle cells)"], ['Wright stain', "the usual blood smear stain"]])),
          P("Test and use", [['Schilling test', "vitamin B12 absorption"], ['Coombs test', "antibodies on RBCs"], ['electrophoresis', "separating proteins"], ['ESR', "inflammation marker"]]),
          L("Culture and bone marrow", `• <b>blood culture and sensitivity</b> (C&S): culturing blood to grow bacteria and find an effective antibiotic<br>• <b>bone marrow aspiration</b>: drawing out a little marrow with a needle<br>• <b>bone marrow biopsy</b>: removing a piece of marrow tissue<br>Both are used to diagnose <b>leukaemia</b>, <b>myeloma</b> and <b>aplastic anaemia</b>.${fig('marrow-aspiration')}`),
          M("What is the procedure shown in this picture?", ['bone marrow aspiration', 'venipuncture', 'lymphangiography', 'plasmapheresis'], "Sampling the bone marrow, usually from the hip crest.", null, F('marrow-aspiration')),
          M("In Ada’s case of tiredness, joint pain and syncope, how was the diagnosis of myelofibrosis confirmed?", ['bone marrow aspiration', 'Coombs test', 'ELISA', 'lymphangiography'], "Bone marrow aspiration showed positive results for myelofibrosis."),
          T("Haemoglobin electrophoresis is used to diagnose sickle cell disease and thalassaemia.", true, "True; abnormal haemoglobins are separated by an electric current."),
          W("Build a word meaning “carrying by electricity”", ['electr/o', '-phoresis'], ['-lysis', 'chrom/o', '-graphy'], 'electr/o + -phoresis = electrophoresis.'),
          B("The ___ test measures vitamin B12 absorption.", ['Schilling', 'Coombs', 'Western blot'], "To diagnose pernicious anaemia."),
          S("Write the abbreviation for the red cell sedimentation rate test", 'ESR', 'erythrocyte sedimentation rate.'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx3', title: "Immune tests", icon: '🔍', items: [
          L("Immunoassays", `• <b>ELISA</b> (enzyme-linked immunosorbent assay) or <b>EIA</b>: a very sensitive test for antibodies (for example HIV); used for <b>screening</b><br>• <b>Western blot</b>: <b>confirming</b> HIV positivity<br>• <b>HIV antigen/antibody immunoassay</b>: measures both HIV antigen and antibody<br>• <b>CD4 count</b>: monitoring immunity in HIV`),
          M("The first, sensitive test to screen for HIV antibodies?", ['ELISA', 'Western blot', 'Schilling test', 'bone marrow biopsy'], "ELISA screens; Western blot confirms."),
          L("Autoimmunity and transplant", `• <b>ANA</b> (antinuclear antibody test): antibody against the nucleus; points to autoimmune disease<br>• <b>tissue typing</b>: determining tissue compatibility (histocompatibility) before a transplant<br>• <b>titer</b>: measuring the amount of antibody after a vaccine or infection`),
          P("Test and use", [['ELISA', "HIV screening"], ['Western blot', "HIV confirmation"], ['ANA', "body attacking its own tissue"], ['tissue typing', "transplant compatibility"]]),
          T("Tissue typing is done before a bone marrow transplant to find a compatible donor.", true, "True; as with the transplant from a matched sibling in Ada’s case."),
          M("A patient with a facial rash and joint pain: which test helps diagnose autoimmune disease?", ['ANA test', 'reticulocyte count', 'PT', 'Schilling test'], "ANA is usually positive in lupus."),
          O("Order the immune assessment of a person with suspected HIV", ["history and examination (lymphadenopathy, weight loss)", "ELISA or immunoassay", 'Western blot', 'CD4 count'], "Screening, confirmation, then measuring severity."),
          B("The abbreviation EIA means ___ immunoassay.", ["enzyme", "electrical", "inherited"], 'enzyme immunoassay.'),
          S("Spell the name of the confirmatory HIV test", 'Western blot', 'Western blot.', 'W… blot'),
          N('d2t:dx')
        ]
      },
      {
        id: 'dx4', title: "Blood drugs", icon: '💊', items: [
          L("Clotting drugs", tbl([["Group", "Job", "Example"], ['anticoagulant', "prevents clots forming", "heparin, warfarin"], ['thrombolytic', "dissolves an existing clot", "plasminogen activator"], ['coagulant / hemostatic', "helping clotting, stopping bleeding", "vitamin K"], ['antihemorrhagic', "preventing bleeding", "clotting factors"]])),
          P("Drug and job", [['anticoagulant', "prevents clots"], ['thrombolytic', "dissolving a clot"], ['hemostatic', "stopping of bleeding"], ['hematinic', "raising haemoglobin"]]),
          L("Blood-building drugs", `• <b>hematinic</b>: raises the red cell count or haemoglobin, such as <b>iron</b>, <b>B12</b> and <b>folate</b><br>• injected <b>erythropoietin</b> (EPO): stimulates red cell production in kidney failure<br>In Ada’s case: iron supplements and weekly B12 injections.`),
          M("A patient with kidney failure is anaemic. Which is the most logical hormone replacement?", ['erythropoietin (EPO)', 'heparin', 'epinephrine', 'thymosin'], "The patient’s kidney does not make enough EPO."),
          T("Thrombolytics prevent new clots forming but do not dissolve an existing clot.", false, "That is the definition of anticoagulants; thrombolytics dissolve an existing clot."),
          M("Which drug is a hematinic?", ["vitamin B12", "heparin", "drug that blocks histamine", "steroid anti-inflammatory drug"], "B12, iron and folate build blood."),
          B("___ drugs dissolve clots that have formed.", ["thrombolytic", "drug that delays clotting", "haemostatic"], 'thromb/o + -lytic.'),
          W("Build a word meaning “clot-dissolving”", ['thromb/o', '-lytic'], ['-stasis', 'coagul/o', '-lysis'], 'thromb/o + -lytic = thrombolytic.'),
          S("Spell the term for the natural injectable anticoagulant", 'heparin', "heparin; a natural and pharmaceutical anticoagulant."),
          N('f2t:dx')
        ]
      },
      {
        id: 'dx5', title: "Immune and anti-infective drugs", icon: '💉', items: [
          L("Damping down immunity", `• <b>corticosteroids</b>: adrenal cortex hormones (natural or synthetic) with <b>strong anti-inflammatory</b> and immunosuppressive effects<br>• <b>immunosuppressants</b>: suppress the immune response to prevent <b>transplant rejection</b> and treat autoimmunity<br>• <b>antihistamine</b>: blocks histamine in allergy`),
          M("Which drug does a kidney transplant patient take to prevent rejection?", ['immunosuppressant', 'thrombolytic', 'hematinic', 'antitoxin'], "Suppressing immunity stops the attack on the transplanted organ."),
          L("Anti-infective drugs", `• <b>antiviral</b>: treats viral infections<br>• <b>antiretroviral</b>: specific to retroviruses such as HIV; the multi-drug combination <b>HAART</b><br>• <b>protease inhibitor</b>: blocks an enzyme HIV needs to build new particles<br>• <b>antibiotic</b> (AB): antibacterial`),
          P("Drug and target", [['antiretroviral', 'HIV'], ['antibiotic', "bacteria"], ['antihistamine', "allergy"], ['immunosuppressant', "transplant rejection"]]),
          L("treatment through the immune system", `<b>Immunotherapy</b>: boosting or regulating the immune system as treatment; such as immunoglobulin or antibody injections, <b>monoclonal antibodies</b> in cancer and <b>allergy shots</b> in allergy.<br><b>Interferon</b> is also used in some cancers and in myelofibrosis.`),
          T("A protease inhibitor is an anti-HIV drug.", true, "True; part of the HAART combination."),
          M("Which treatment did the 40-year-old man with AIDS continue at follow-up?", ['HAART', "splenectomy", "O-negative blood transfusion", "gradual reduction of allergic sensitivity"], "Plus a chest X-ray, sputum culture and paracetamol for the fever."),
          B("The abbreviation HAART means highly active anti___ therapy.", ["retroviral", "bacterial", "clotting"], 'highly active antiretroviral therapy.'),
          S("Spell the term for the adrenal cortex anti-inflammatory hormones (plural)", ['corticosteroids', 'corticosteroid'], "cortic/o (cortex) + steroid.", 'cortico…'),
          N('sp:dx')
        ]
      },
      {
        id: 'dx6', title: "Transplant and cancer treatment", icon: '🎗️', items: [
          L("replacing diseased marrow with donor marrow", `<b>BMT</b> (bone marrow transplant): the patient’s marrow is destroyed with <b>radiation and chemotherapy</b>, then healthy marrow or <b>stem cells</b> from a compatible donor are infused.<br>Uses: <b>leukaemia</b>, <b>aplastic anaemia</b>, myelofibrosis. Key risk: <b>GVHD</b>.<br>Another source of stem cells: <b>umbilical cord</b> blood.`),
          O("Order the steps of a bone marrow transplant", ["tissue typing and finding a compatible donor", "destroying the patient’s marrow with chemotherapy and radiation", "infusing the donor’s stem cells", "monitoring for infection and GVHD"], "Tissue compatibility comes first."),
          L("Cancer words", tbl([["Term", "Meaning"], ['oncology', "study of cancer (onc/o = tumour)"], ['oncologist', "cancer specialist"], ['chemotherapy', "treatment with chemical drugs"], ['remission', "disappearance of disease signs"], ['relapse', "return of the disease"], ['metastasis', "spread of cancer to another place"]])),
          P("Word and meaning", [['remission', "disease subsiding"], ['relapse', "disease coming back"], ['metastasis', "cancer spreading"], ['chemotherapy', "drug treatment of cancer"]]),
          M("What was the aim of intensive chemotherapy in the 2-year-old boy with ALL?", ["reaching remission (complete recovery)", "causing a relapse", "increasing metastasis", "stimulating lymphocytosis"], "remission = the disease disappearing."),
          T("Relapse means the disease has come back after a period of recovery.", true, "True."),
          W("Build a word meaning “cancer specialist”", ['onc/o', '-logist'], ['-logy', 'chem/o', '-oma'], 'onc/o + -logist = oncologist.'),
          B("In BMT, healthy ___ cells are infused into the patient.", ["stem", "cancer", "plasma"], 'stem cells.'),
          S("Spell the term for cancer treatment with drugs", 'chemotherapy', 'chem/o + -therapy.'),
          N('wb:dx')
        ]
      },
      {
        id: 'dx7', title: "SIRS and sepsis", icon: '🏥', items: [
          L('SIRS', `<b>SIRS</b> (systemic inflammatory response syndrome): an <b>exaggerated, body-wide</b> inflammatory response to acute stressors (infection, trauma, pancreatitis, burns).<br>It is marked by changes in <b>heart rate</b>, <b>breathing</b>, <b>temperature</b> and the <b>white cell count</b>.${fig('sepsis', '', "The further right we go, the more severe the illness and the higher the death rate.")}${memo("Remember the four SIRS criteria as “<b>Temp, Ticker, Breaths, Troops</b>”: body temperature, heart rate, breathing rate and white cells (the defence troops).")}`),
          M("Which is not one of the classic SIRS criteria?", ["oxygen-carrying protein of red cells", "body temperature", "heart rate", "white cell count"], "The criteria: temperature, heart rate, breathing rate and WBC."),
          L("Sepsis and septicaemia", `• <b>sepsis</b>: life-threatening <b>organ dysfunction</b> caused by a <b>dysregulated</b> host response to infection<br>• <b>septicemia</b> (${e('septic/o')} = infection + ${e('-emia')}): bacteria or their toxins in the bloodstream<br>• <b>MODS</b>: multiple organ dysfunction syndrome`),
          P("Word and meaning", [['sepsis', "organ dysfunction from a dysregulated response to infection"], ['septicemia', "bacteria in the blood"], ['SIRS', "systemic inflammatory response"], ['MODS', "failure of several organs"]]),
          L("Cytokine storm", `<b>Cytokine storm</b>: a <b>rapid, uncontrolled</b> release of pro-inflammatory cytokines → widespread tissue damage and <b>MODS</b>. Seen in severe infections and some immune therapies.`),
          L("Inflammation markers in the ICU", tbl([["Marker", "Note"], ['CRP / hs-CRP', "acute-phase protein from the liver; rises quickly with inflammation"], ['procalcitonin (PCT)', "rises in bacterial infection; separates it from non-infectious inflammation and guides antibiotics"], ['lactate', "rises in shock and poor tissue perfusion"], ["WBC and diff", "leukocytosis or leukopenia, immature bands"]])),
          M("Which marker best helps separate bacterial infection from non-infectious inflammation?", ['procalcitonin', 'hemoglobin', 'albumin', 'reticulocyte count'], "PCT rises more specifically in bacterial infection."),
          T("Sepsis simply means bacteria in the blood.", false, "That is septicemia (bacteraemia); sepsis means organ dysfunction from a dysregulated host response."),
          W("Build a word meaning “infection in the blood”", ['septic/o', '-emia'], ['-osis', 'hem/o', '-lysis'], 'septic + -emia = septicemia.'),
          S("Spell the term for organ dysfunction from a dysregulated response to infection", 'sepsis', "sepsis; its adjective is septic."),
          N('d2t:dx')
        ]
      },
      {
        id: 'dx8', title: "Iron and inflammation", icon: '🧲', items: [
          L("The iron profile", `${tbl([["test", "What it tells you"], ['ferritin', "iron store (storage protein inside cells)"], ['TIBC', "total iron-binding capacity; rises in iron deficiency"], ['transferrin', "iron-carrying protein in the blood"], ['serum iron', "serum iron"]])}This profile separates <b>iron-deficiency anaemia</b> from <b>anaemia of inflammation</b> (chronic disease).${fig('iron', '', "In inflammation, the liver makes more hepcidin and iron stays behind locked doors.")}${pearl("A low ferritin almost always means iron deficiency; but a high ferritin does not necessarily mean enough iron, because ferritin also rises in inflammation (an acute phase reactant).")}`),
          M("In iron-deficiency anaemia, what is the ferritin usually like?", ["down", "up", "normal", "unmeasurable"], "Ferritin is the iron store; it falls in iron deficiency."),
          L("Hepcidin", `<b>Hepcidin</b>: a <b>liver</b> hormone and acute-phase protein that regulates iron balance.<br>It rises in <b>inflammation</b> → iron is locked in <b>macrophages</b> and gut absorption falls → <b>anaemia of chronic disease</b> (anaemia of inflammation), even with enough stored iron.`),
          T("In anaemia of inflammation, ferritin may be normal or high while little iron is available to the bone marrow.", true, "True; ferritin itself is an acute-phase protein and hepcidin locks iron away."),
          P("Marker and role", [['ferritin', "iron store"], ['hepcidin', "locking iron away in inflammation"], ['TIBC', "iron-binding capacity"], ['transferrin', "carrying iron in the blood"]]),
          M("An ICU patient with severe inflammation: high ferritin, low serum iron, low TIBC. Most likely interpretation?", ["anaemia of inflammation (chronic disease) driven by hepcidin", "pure iron-deficiency anaemia", "haemochromatosis", "pernicious anaemia"], "In pure iron deficiency, TIBC is high and ferritin low."),
          L("The malnutrition-inflammation complex", `<b>MIC</b> (malnutrition-inflammation complex): a vicious circle in critically ill patients; systemic inflammation → <b>protein catabolism</b>, <b>low albumin</b> and resistance to enteral/parenteral feeding → weaker immunity still.`),
          B("The iron-regulating hormone that rises in inflammation is ___.", ['hepcidin', 'erythropoietin', 'thymosin'], "Hepcidin is secreted by the liver."),
          S("Spell the term for the iron-storage protein", 'ferritin', "ferr/o (iron) + -itin."),
          N('ab:dx')
        ]
      },
      {
        id: 'dx9', title: "Immunonutrition and hospital infection", icon: '🥗', items: [
          L("Immunonutrition", `<b>Immunonutrition</b>: using specific nutrients to <b>modulate the immune response</b> and reduce inflammation in ICU patients:<br>• <b>glutamine</b>: the main fuel of <b>enterocytes</b> and <b>lymphocytes</b>; becomes “conditionally essential” in critical illness<br>• <b>arginine</b>: precursor of <b>nitric oxide</b>; wound healing and T cell function<br>• <b>omega-3 fatty acids</b> (EPA and DHA): reduce inflammation`),
          P("Nutrient and role", [['glutamine', "fuel for lymphocytes and gut cells"], ['arginine', "precursor of nitric oxide"], ['omega-3', "Reduces inflammation"], ['ferritin', "iron store"]]),
          M("Which amino acid is the main fuel of gut cells and lymphocytes?", ['glutamine', 'arginine', 'glycine', 'leucine'], "Glutamine falls in severe stress."),
          T("Arginine is the precursor of nitric oxide.", true, "True; nitric oxide plays a part in vessel widening and immune defence."),
          L("Case: a septic ICU patient", `An ICU patient with <b>fluid-resistant low blood pressure</b>, <b>high lactate</b>, <b>high PCT</b> and a positive <b>CRP</b>; severe catabolism and <b>hypoalbuminemia</b>.<br>Treatment: immediate broad-spectrum antibiotics, haemodynamic support and <b>early enteral feeding</b>, high in protein and rich in <b>omega-3</b> and antioxidants.`),
          O("Order the first steps for a septic patient", ["recognition: low blood pressure, high lactate and PCT", "blood culture (C&S)", "immediate broad-spectrum antibiotics", "haemodynamic support and fluids", "starting early enteral feeding"], "Culture before antibiotics, with no delay in treatment."),
          L("Resistant hospital infections", `<b>HAI</b> (healthcare-associated infection) in hospital patients:<br>• <b>MRSA</b>: methicillin-resistant Staphylococcus aureus<br>• <b>CRE</b>: carbapenem-resistant Enterobacteriaceae<br>• <b>C. diff</b>: Clostridioides difficile; inflammation of the large bowel, often after antibiotics`),
          M("Severe diarrhoea after a long course of antibiotics in a hospital patient suggests what?", ['Clostridium difficile infection', 'MRSA', 'Kaposi sarcoma', 'Pneumocystis pneumonia'], "Antibiotics upset the gut flora and C. diff grows."),
          B("The fatty acids EPA and DHA belong to the ___ family.", ["omega-3", "omega-6", "trans"], "omega-3 fatty acids, with an anti-inflammatory effect."),
          S("Spell the name of the amino acid that fuels gut cells and lymphocytes", 'glutamine', 'glutamine (Gln).'),
          N('t2f:dx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* ایمنا — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: "Puzzly", title: "The Piece Expert", shape: 'puzzle', color: '#8C96F0', acc: ['sparkle'], bio: "Breaks every scary word into prefix, root and suffix and reads it from the end. Motto: “pancytopenia is only three pieces!”" },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Suffixo", title: "Master of -ectomy and -itis", shape: 'book', color: '#4F5BD5', acc: ['glasses'], bio: "A living dictionary that knows suffixes family by family; never mixes up -tomy with -ectomy, or hematoma with a tumour." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Speaky", title: "Master of Pronunciation and Plurals", shape: 'bubble', color: '#6C4FD8', acc: ['crown'], bio: "Knows the p in pneumonia is silent, ph is read “f” and the plural of thrombus is thrombi. Spells hemorrhage without a single mistake!" },
    { id: 'hb-0', w: 'hb', lv: 0, name: "Plasmo", title: "The Golden Liquid of Blood", shape: 'drop', color: '#F7D774', acc: ['sparkle'], bio: "55% of the blood is theirs: 90 to 92% water, plus albumin, globulin, fibrinogen, electrolytes and hormones. Their line: “Serum is just me, minus the fibrinogen!”" },
    { id: 'hb-1', w: 'hb', lv: 1, name: "Erythro", title: "oxygen carrier", shape: 'disc', color: '#E2474F', acc: ['headband'], bio: "A biconcave, nucleus-free disc that lives 120 days. Its haemoglobin carries oxygen to the tissues and brings carbon dioxide back. The kidney’s erythropoietin sends it the message “make more”." },
    { id: 'hb-2', w: 'hb', lv: 2, name: "Marrowy", title: "The Blood Factory", shape: 'bone', color: '#FBF1E3', acc: ['crown'], bio: "Inside the red bone marrow, it makes every blood cell from one stem cell. When it falls ill, aplastic anaemia, leukaemia or myelofibrosis arrive." },
    { id: 'co-0', w: 'co', lv: 0, name: "Platey", title: "The Vessel Patcher", shape: 'platelet', color: '#C6A7E6', acc: [], bio: "A fragment of a megakaryocyte that lives only about 10 days. It gathers at a wound and releases thromboplastin to start the clotting cascade." },
    { id: 'co-1', w: 'co', lv: 1, name: "Abo", title: "Guardian of Blood Groups", shape: 'shield', color: '#FF9600', acc: ['glasses'], bio: "Checks every cell for the A and B antigens and the Rh factor. Never forgets the cross-match before a transfusion, and counts agglutination as a sworn enemy." },
    { id: 'co-2', w: 'co', lv: 2, name: "Bagsy", title: "The Transfusion Hero", shape: 'bag', color: '#D23A43', acc: ['cape'], bio: "Sometimes it is the patient’s own blood (autologous) and sometimes a donor’s (homologous). Fresh frozen plasma, platelets and cryoprecipitate are its friends." },
    { id: 'ly-0', w: 'ly', lv: 0, name: "Lymphy", title: "The Clear Drop", shape: 'drop', color: '#9FE3D7', acc: ['sparkle'], bio: "Born from interstitial fluid, it travels one way from the tissues towards the heart. If its path is blocked, lymphoedema forms." },
    { id: 'ly-1', w: 'ly', lv: 1, name: "Beanie", title: "lymph node", shape: 'bean', color: '#12A594', acc: ['headband'], bio: "Bean-shaped and full of lymphocytes and macrophages; it filters lymph. It hangs out in the neck, armpit and groin, and swells and hurts in infection." },
    { id: 'ly-2', w: 'ly', lv: 2, name: "Spleeno", title: "The Great Blood Filter", shape: 'blob', color: '#8E2C6E', acc: ['crown'], bio: "The largest lymphatic organ; removes old red cells and stores blood. If it ruptures, a splenectomy or splenorrhaphy is needed." },
    { id: 'im-0', w: 'im', lv: 0, name: "Chomper", title: "The Hungry Macrophage", shape: 'cloud', color: '#CBD6EC', acc: [], bio: "A monocyte that moved into tissue and became a macrophage. It swallows every germ by phagocytosis and shows a piece of its antigen to the lymphocytes." },
    { id: 'im-1', w: 'im', lv: 1, name: "Wygee", title: "The Precise Antibody", shape: 'yab', color: '#1899D6', acc: ['glasses'], bio: "A Y-shaped immunoglobulin made by plasma cells. Its two arms stick only to their own antigen. It has five siblings: IgG, IgM, IgA, IgE and IgD." },
    { id: 'im-2', w: 'im', lv: 2, name: "T-Four", title: "The CD4 Commander", shape: 'lympho', color: '#6A3FB5', acc: ['cape', 'crown'], bio: "A helper T lymphocyte trained in the thymus that commands the rest of the immune army. HIV targets exactly this cell; when its count falls below 200, AIDS is defined." },
    { id: 'dx-0', w: 'dx', lv: 0, name: "Tubey", title: "The CBC Sample", shape: 'tube', color: '#C8243F', acc: ['sparkle'], bio: "Filled by a simple blood draw, it gives everything away: RBC, WBC, Hgb, Hct, platelets and the differential. ESR and PT are friends too." },
    { id: 'dx-1', w: 'dx', lv: 1, name: "Capsy", title: "Pharmacologist", shape: 'capsule', color: '#FF7A45', acc: ['glasses'], bio: "Tells anticoagulants, thrombolytics, antihistamines, corticosteroids and antiretrovirals apart, and knows where each one is used." },
    { id: 'dx-2', w: 'dx', lv: 2, name: "Pulsy", title: "The ICU Guardian", shape: 'heart', color: '#58CC02', acc: ['headband'], bio: "Tracks SIRS, sepsis and cytokine storms through procalcitonin and CRP, and knows how glutamine, arginine and omega-3 help a critically ill patient’s immunity." }
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
/* ایمنا — راند بالینی: پرونده‌های چندمرحله‌ای
 * هر کیس از مطالعات موردی فایل‌های پیوست آمده (Dianne Love، Lisa، Ada، John Latella، Olivia و بقیه)؛
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
    /* ================= خون و سلول‌ها ================= */
    {
      id: 'r1', w: 'hb', title: "Tiredness, syncope and a fibrous bone marrow", who: "Ada, a middle-aged woman",
      brief: "For several months Ada has had severe tiredness, joint pain and one faint (syncope). The CBC shows anaemia and teardrop-shaped red cells, and the spleen is enlarged. The doctor orders a bone marrow aspiration.",
      chart: [["Complaint", "tiredness, joint pain, syncope"], ['CBC', "low Hgb, abnormal RBC shapes"], ["examination", 'splenomegaly'], ["Aspiration", "positive for myelofibrosis"]],
      fig: { a: ['smears', 'rbcshapes'], l: ["Blood smear", "cell shapes"] },
      steps: [
        M("Term", "myelofibrosis means…", ["replacement of the bone marrow by fibrous tissue", "inflammation of the spinal cord", "cancer of plasma cells", "vitamin B12 deficiency"], "myel/o (bone marrow) + fibr/o (fibre) + -osis (condition)."),
        M("test", "What is variation in red cell shape on a smear called?", ['poikilocytosis', 'anisocytosis', 'leukocytosis', 'thrombocytosis'], "poikil/o = varied (shape); anis/o relates to size."),
        M("diagnosis", "Why is the spleen enlarged?", ["blood formation outside the marrow, in the spleen", "infection of the spleen", "torn spleen", "tumour of the thymus"], "When the bone marrow becomes fibrous, the spleen and liver take over blood formation → splenomegaly."),
        P("treatment", "Match each of Ada’s treatments to its aim", [["iron and B12 supplements", "correcting the anaemia (hematinic)"], ['interferon', "holding back the growth of abnormal cells"], ['splenectomy', "removing the enlarged spleen"], ["stem cell transplant", "replacing the bone marrow"]]),
        T("Donor", "A stem cell transplant from a matched sibling is confirmed by tissue typing.", true, "True; tissue compatibility lowers the risk of GVHD."),
        S("Spelling", "Spell the term for surgical removal of the spleen", 'splenectomy', 'splen/o + -ectomy.', 'splen…')
      ]
    },
    {
      id: 'r2', w: 'hb', title: "Immature white cells", who: "22-year-old woman",
      brief: "A young woman presents with tiredness, unexplained bruises and repeated infections. The CBC shows few red cells and platelets and a very high count of immature white cells. The HIV test is negative.",
      chart: [['RBC', "down"], ['PLT', "down"], ['WBC', "very high, mostly immature (blasts)"], ['HIV immunoassay', "negative"]],
      steps: [
        M("Term", "What do we call the fall in red cells in this patient?", ['erythropenia', 'erythrocytosis', 'leukopenia', 'polycythemia'], 'erythr/o + -penia.'),
        M("Term", "A shortage of platelets?", ['thrombocytopenia', 'thrombocytosis', 'thrombosis', 'thrombolysis'], "thromb/o + cyt/o + -penia → the cause of the bruises."),
        M("diagnosis", "Cancer of the white-cell-making bone marrow?", ['leukemia', 'lymphoma', 'multiple myeloma', 'thalassemia'], "Leukaemia: immature white cells crowd out the other cells."),
        M("Confirmation", "Which test makes the diagnosis certain?", ["microscopic examination of a bone marrow sample", 'ESR', 'Coombs test', 'lymphangiography'], "Bone marrow aspiration or biopsy."),
        M("treatment", "What type of transfusion was given to replace red cells and platelets?", ["homologous (from a donor)", "autologous (the patient’s own blood)", 'plasmapheresis', "neither"], "The patient lacks enough healthy blood of their own, so homologous blood."),
        T("Main treatment", "The main cancer treatment for this patient was aggressive chemotherapy.", true, "True; together with supportive transfusions.")
      ]
    },
    {
      id: 'r3', w: 'hb', title: "Fever and petechiae in a child", who: "2-year-old boy",
      brief: "A child is brought in with high fevers, nosebleeds (epistaxis), bleeding gums, tiny red spots on the skin and bruising. The doctor suspects acute leukaemia.",
      fig: { a: 'marrow-aspiration', l: [] },
      chart: [["Symptoms", "fever, epistaxis, bleeding gums"], ["skin", "petechiae and ecchymoses"], ['PLT', "low (thrombopenia)"], ["Request", 'bone marrow aspiration']],
      steps: [
        M("skin", "Tiny flat purple-red spots on the skin?", ['petechiae', 'urticaria', 'hematoma', 'erythema'], "Pinpoint capillary bleeds caused by a lack of platelets."),
        M("Term", "epistaxis means…", ["nosebleed", "bleeding gums", "coughing blood", "large bruise"], "Bleeding from the nose."),
        M("diagnosis", "The commonest childhood leukaemia?", ['ALL', 'CLL', 'CML', 'AML'], 'acute lymphocytic (lymphoblastic) leukemia.'),
        M("abbreviation", "What does ALL stand for?", ['acute lymphocytic leukemia', 'acquired lymphatic lymphoma', 'anemia of liver and lymph', 'acute leukocytosis'], "Acute, lymphocytic, leukaemia."),
        O("Process", "Order the work-up of this child", ["history and examination: fever, petechiae, bleeding", "CBC: low platelets", "bone marrow aspiration to confirm", "intensive chemotherapy aiming for remission"], "Clinical diagnosis, then confirmation with the bone marrow."),
        S("Spelling", "Spell the term for the disappearance of disease signs", 'remission', "remission; the disease coming back = relapse.")
      ]
    },
    /* ================= هموستاز و انتقال خون ================= */
    {
      id: 'r4', w: 'co', title: "Breathlessness and abdominal pain", who: 'Dianne Love',
      brief: "Dianne presents with breathing problems and pain in the lower left abdomen. The doctor orders a CBC, WBC, ESR, PT and PTT. The results show anaemia, and the doctor orders 2 units of O-negative blood.",
      chart: [["Complaint", "dyspnea, LLQ abdominal pain"], ["Tests", "CBC, WBC, ESR, PT, PTT"], ["diagnosis", 'anemia'], ["treatment", "2 units of O negative"]],
      fig: { a: ['abo-table', 'abo'], l: [] },
      steps: [
        M("Term", "dyspnea means…", ["shortness of breath", "cough", "fever", "low red blood cells (anaemia)"], "dys- (difficult) + -pnea (breathing)."),
        P("test", "Match each test to its purpose", [['CBC', "complete blood count"], ['ESR', "inflammation marker"], ['PT', "the clotting time"], ['WBC', "white cell count"]]),
        M("Blood group", "Why was O negative chosen?", ["O negative has no A, B or Rh antigen and is safe for most recipients", "O negative has no antibodies", "O negative is the universal recipient", "O negative has more platelets"], "The universal red cell donor.", null, { a: 'abo' }),
        T("Compatibility", "Even with O negative, cross-matching is preferred when it is not an emergency.", true, "True; other rare antibodies may also be present."),
        M("abbreviation", "What does PTT stand for?", ['partial thromboplastin time', 'platelet transfusion test', 'prothrombin total time', 'plasma thrombin titer'], "Partial thromboplastin time."),
        S("Spelling", "Spell the diagnosis meaning too few red cells or too little haemoglobin", 'anemia', 'an- + -emia.')
      ]
    },
    {
      id: 'r5', w: 'co', title: "Liver laceration after an accident", who: 'Lisa',
      brief: "After an accident, Lisa is brought to the emergency department with severe internal bleeding and a torn liver. She has severe haemorrhagic anaemia. The surgical team gives a massive transfusion while monitoring clotting tests.",
      chart: [["diagnosis", "liver laceration, hemorrhagic anemia"], ["Monitoring", "Hgb, Hct, PT, PTT"], ["surgery", "emergency"], ["Products", "washed blood, homologous, FFP, platelets"]],
      steps: [
        M("diagnosis", "Anaemia caused by bleeding?", ['hemorrhagic anemia', 'aplastic anemia', 'pernicious anemia', 'sickle cell anemia'], "hem/o + -rrhage (bursting forth)."),
        M("giving blood or blood products into a vein", "Collecting the patient’s own blood from the abdominal cavity and returning it after washing?", ['autotransfusion (autologous)', 'homologous transfusion', 'plasmapheresis', 'cross-matching'], "auto- = self."),
        M("Product", "Which product replaces the clotting factors that have been used up?", ['FFP', 'PRBC', 'albumin', 'IVIG'], 'fresh frozen plasma.'),
        P("Monitoring", "Each test and what it shows", [['Hgb', "oxygen-carrying protein of red cells"], ['Hct', "percentage volume of red cells"], ['PT', "prothrombin time"], ['PTT', "partial thromboplastin time"]]),
        T("platelet", "In severe bleeding and massive transfusion, platelets may also be needed.", true, "True; platelets are used up in bleeding and diluted by transfusion."),
        M("Term", "In “liver laceration”, laceration means…", ["rupture", "inflammation", "enlargement", "tumour"], "A tear in the tissue.")
      ]
    },
    /* ================= دستگاه لنفاوی ================= */
    {
      id: 'r6', w: 'ly', title: "Sore throat and swollen nodes", who: "16-year-old boy",
      brief: "A teenager comes in with a severe sore throat, fever and tiredness. On examination the lymph nodes of the neck, armpits and groin are enlarged, the throat is red and inflamed, and an enlarged spleen can be felt.",
      chart: [["Nodes", "cervical, axillary, inguinal"], ["Throat", "red and inflamed"], ["abdomen", 'splenomegaly'], ["a blood test", "atypical lymphocytosis"]],
      fig: { a: 'lymph-nodes-regional', l: [] },
      steps: [
        P("Region", "Match each lymph node region to its name", [["neck", 'cervical'], ["armpit", 'axillary'], ["groin", 'inguinal'], ["in the middle of the chest", 'mediastinal']]),
        M("Term", "What is enlargement of the lymph nodes called?", ['lymphadenopathy', 'lymphangioma', 'lymphedema', 'lymphoma'], 'lymphaden/o + -pathy.'),
        M("diagnosis", "Most likely diagnosis?", ['infectious mononucleosis', 'Hodgkin lymphoma', 'hemophilia', 'elephantiasis'], "Cause: the Epstein-Barr virus (EBV)."),
        M("Cause", "The cause of infectious mononucleosis?", ['Epstein-Barr virus (EBV)', 'HIV', 'filaria', 'Candida'], 'EBV.'),
        T("Advice", "A patient with splenomegaly is advised to avoid contact sports.", true, "True; there is a risk of the spleen rupturing and bleeding (splenorrhagia)."),
        M("treatment", "This patient’s treatment?", ["over-the-counter pain relief, fluids, rest and lozenges", "urgent splenectomy", "drug treatment of cancer", 'HAART'], "A self-limiting viral illness; supportive treatment.")
      ]
    },
    {
      id: 'r7', w: 'ly', title: "A mass in the spleen", who: "36-year-old businessman",
      brief: "A 36-year-old man presents with a feeling of abdominal fullness and tiredness. Whole-body MRI showed an enlarged spleen and a 3 cm encapsulated tumour in it. A sample of the tumour was taken.",
      fig: { a: ['mri', 'spleen-thymus-location'], l: ['MRI', "position of the spleen"] },
      chart: [["Imaging", "whole-body MRI"], ["finding", "splenomegaly + 3 cm tumour"], ["biopsy", 'non-Hodgkin lymphoma'], ["Action", "splenectomy + oncology referral"]],
      steps: [
        M("abbreviation", "What does MRI stand for?", ['magnetic resonance imaging', 'microscopic red-cell index', 'marrow radiation imaging', 'multiple renal infection'], "Magnetic resonance imaging, for soft tissues."),
        M("diagnosis", "Which lymphoma did the biopsy show?", ['non-Hodgkin lymphoma', 'Hodgkin lymphoma', 'thymoma', 'lymphangioma'], "NHL of the spleen."),
        T("finding", "Reed-Sternberg cells are seen in NHL.", false, "Reed-Sternberg cells are specific to Hodgkin lymphoma."),
        M("surgery", "Removal of the spleen?", ['splenectomy', 'splenotomy', 'splenorrhaphy', 'splenopexy'], "‎-ectomy = removal."),
        M("Referral", "To which specialist was the patient referred?", ['oncologist', 'allergist', "a haematologist, for clotting only", 'immunologist'], "A cancer specialist, to consider chemotherapy."),
        S("Spelling", "Spell the diagnosis for cancer of lymphatic tissue", 'lymphoma', 'lymph/o + -oma.')
      ]
    },
    {
      id: 'r8', w: 'ly', title: "A swollen node in an HIV-positive patient", who: 'John Latella',
      brief: "John, who is HIV positive and takes preventive drugs, has a large lymph node at a routine check. The main worry is lymphoma or Kaposi sarcoma. An outpatient biopsy and blood tests are done.",
      fig: { a: 'lymph-node-structure', l: [] },
      chart: [["Background", "AIDS, preventive drugs"], ["examination", 'lymphadenopathy'], ["biopsy", "infectious, not malignant"], ["treatment", "a course of antibiotics"]],
      steps: [
        M("Term", "A lymph node inflamed and enlarged by infection?", ['lymphadenitis', 'lymphangitis', 'lymphoma', 'lymphedema'], 'lymphaden/o + -itis.'),
        M("danger", "A connective tissue cancer common in AIDS?", ['Kaposi sarcoma', 'multiple myeloma', 'thalassemia', 'polycythemia vera'], 'KS.'),
        M("Method", "What was done to find out the nature of the node?", ['biopsy', 'Coombs test', 'phlebotomy', 'plasmapheresis'], "Biopsy = removing a piece of tissue for examination."),
        T("Result", "The biopsy showed the node was malignant.", false, "The node was infected and was treated with antibiotics."),
        M("Preventive drugs", "“Prophylactic” drugs means…", ["preventive", "cancer treatment", "drug that delays clotting", "sleep-inducing drug"], "prophylaxis = prevention (related to -phylaxis = protection).")
      ]
    },
    /* ================= ایمنی ================= */
    {
      id: 'r9', w: 'im', title: "Glove allergy", who: 'Olivia',
      brief: "Olivia has a history of contact dermatitis after using latex gloves. Recently, after a dental examination with latex gloves, she had palpitations, hives and a runny nose. Immunology tests and a skin-prick test were done.",
      fig: { a: 'allergens', l: [] },
      chart: [["history of", 'contact dermatitis'], ["Recent reaction", "tachycardia, urticaria, rhinitis"], ["Test", "skin-prick positive for latex"], ["diagnosis", 'Type I hypersensitivity (IgE)']],
      steps: [
        M("Term", "urticaria means…", ["Hives", "pounding heartbeat", "runny nose", "shortness of breath"], "Itchy raised wheals on the skin (hives)."),
        M("Antibody", "Type 1 hypersensitivity is mediated by which antibody?", ['IgE', 'IgG', 'IgM', 'IgA'], "IgE on mast cells and basophils → histamine."),
        M("Term", "tachycardia means…", ["a fast heartbeat", "a slow heartbeat", "shortness of breath", "low pressure"], "tachy- = fast, cardi/o = heart."),
        O("Plan", "Order Olivia’s advice by importance", ["complete avoidance of latex products", "carrying an epinephrine auto-injector", "a medical alert bracelet", "a bronchodilator inhaler at the first sign of bronchospasm"], "Prevention, then readiness for anaphylaxis."),
        T("danger", "The next contact with latex may lead to anaphylaxis.", true, "True; reactions get stronger with each exposure."),
        S("Spelling", "Spell the name of the life-saving drug for anaphylaxis", ['epinephrine', 'adrenaline'], 'epinephrine (adrenaline).', 'epi…')
      ]
    },
    {
      id: 'r10', w: 'im', title: "Fever, night sweats and cough", who: "A 40-year-old man with AIDS",
      brief: "A 40-year-old man with AIDS comes in with chills, night sweats, a persistent cough with clear sputum and breathlessness. Breath sounds are reduced over the middle and lower lobes of the right lung.",
      chart: [['CD4', "190 /µL"], ['WBC', "3.3 ×10³ /µL"], ['Hgb', "12.8 g/dL"], ['PLT', "123 ×10³ /µL"]],
      fig: { a: ['hiv-virus', 'kaposi'], l: ['HIV', 'Kaposi sarcoma'] },
      steps: [
        M("immunity, protection", "A CD4 count of 190 means…", ["cellular immunity is severely suppressed (below 200 = AIDS)", "completely normal immunity", "leukaemia", "severe anaemia"], "A normal CD4 count is 500 to 1500."),
        M("Term", "What do we call a WBC of 3.3 thousand?", ['leukopenia', 'leukocytosis', 'neutrophilia', 'lymphocytosis'], "Below 5000 → leukopenia."),
        M("Possible diagnosis", "Which opportunistic lung infection must be ruled out?", ['Pneumocystis pneumonia (PCP)', 'allergic asthma', 'sarcoidosis', 'elephantiasis'], "PCP is the commonest opportunistic lung infection in AIDS."),
        P("Assessment", "Each step and its aim", [['chest X-ray', "seeing lung involvement"], ['sputum culture', "finding the cause of infection"], ['HAART', "controlling HIV"], ['acetaminophen', "bringing the fever down"]]),
        T("platelet", "A platelet count of 123 thousand is below normal (mild thrombocytopenia).", true, "True; normal is 150 to 450 thousand."),
        S("Spelling", "Spell the term for mucus coughed up from the lungs", 'sputum', "sputum = coughed-up mucus or phlegm.")
      ]
    },
    /* ================= آزمایش، درمان و ICU ================= */
    {
      id: 'r11', w: 'dx', title: "Resistant low blood pressure in the ICU", who: "An intensive care patient",
      brief: "An ICU patient admitted with pneumonia develops low blood pressure that does not respond to fluids. Lactate has risen, procalcitonin is high and CRP is positive. Nutritional assessment shows severe catabolism and hypoalbuminaemia.",
      chart: [["blood pressure", "low, resistant to fluids"], ['lactate', "up"], ['PCT', "up"], ['CRP', "positive"], ['albumin', "down"]],
      steps: [
        M("diagnosis", "The best word for the patient’s condition?", ['sepsis (septic shock)', 'anaphylaxis', 'hemophilia', 'lymphedema'], "Organ dysfunction caused by a dysregulated response to infection."),
        M("Marker", "A high PCT mostly points to what?", ["bacterial infection", "allergy", "iron-deficiency anaemia", "inherited bleeding disorder"], "Procalcitonin rises in bacterial infection."),
        M("Term", "hypoalbuminemia means…", ["low blood albumin", "high blood albumin", "low red cells", "low blood sugar"], 'hypo- + albumin + -emia.'),
        O("treatment", "Order the actions", ["blood culture", "immediate broad-spectrum antibiotics", "haemodynamic support", "early high-protein enteral feeding"], "Antibiotics without delay; feeding after relative stability."),
        P("Immunonutrition", "Each substance and its role", [['omega-3', "moderating inflammation"], ['glutamine', "fuel for lymphocytes and enterocytes"], ['arginine', "precursor of nitric oxide"], ['antioxidants', "fighting oxidative stress"]]),
        T("Concept", "In this patient, the malnutrition-inflammation complex (MIC) causes protein catabolism and falling albumin.", true, "True; systemic inflammation fuels the vicious circle of malnutrition.")
      ]
    },
    {
      id: 'r12', w: 'dx', title: "Anaemia in inflammatory disease", who: "58-year-old man with rheumatoid arthritis",
      brief: "A patient with RA has been tired for months. Hgb is low and the cells are normocytic. To tell iron-deficiency anaemia from anaemia of inflammation, the doctor orders an iron profile and CRP.",
      fig: { a: 'sle-face', l: [] },
      chart: [['Hgb', "10.5 g/dL"], ['MCV', "normal"], ['ferritin', "up"], ['TIBC', "down"], ['CRP', "up"]],
      steps: [
        M("abbreviation", "What does RA stand for?", ['rheumatoid arthritis', 'red-cell anemia', 'reticulocyte assay', 'right atrium'], "Rheumatoid arthritis; an autoimmune disease."),
        M("Term", "A normal MCV means the cells…", ["are of normal size (normocytic)", "are small", "are large", "are sickle-shaped"], 'mean corpuscular volume.'),
        M("Interpretation", "A high ferritin with a low TIBC points mostly to what?", ["anaemia of inflammation (chronic disease)", "iron-deficiency anaemia", "pernicious anaemia", "inherited haemoglobin production defect"], "In iron deficiency, ferritin is low and TIBC high."),
        M("Mechanism", "Which hormone locks iron in macrophages during inflammation?", ['hepcidin', 'erythropoietin', 'thymosin', 'heparin'], "Hepcidin, from the liver."),
        T("treatment", "In anaemia of inflammation, controlling the underlying disease matters most.", true, "True; as inflammation falls, hepcidin comes down."),
        S("Spelling", "Spell the name of the liver hormone that locks iron away", 'hepcidin', "hepcidin; hepat/o = liver.", 'hep…')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* ایمنا — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', "If the suffix starts with a vowel, the combining vowel o is dropped: leuk/o + -emia = leukemia."],
    ['Lx', "-tomy means cutting and -ectomy removal; ec- is Greek for “out”."],
    ['Lx', "Although hematoma ends in -oma, it is not a tumour; it is blood collected outside a vessel."],
    ['Lx', "The plural of thrombus is thrombi and of petechia petechiae."],
    ['Lx', "In pneumonia and pseudo- the p is silent; ph is always read as “f”."],
    ['Lx', "lymphaden/o is a lymph node and lymphangi/o a lymph vessel; aden = gland, angi = tube."],
    ['Hb', "Start a medical word’s meaning from the suffix: erythro/cyto/penia means “a shortage of red cells”."],
    ['Hb', "Blood is about 8% of body weight, about 5 litres in an adult."],
    ['Hb', "-penia means a shortage and -cytosis an increase in cells; leukopenia versus leukocytosis."],
    ['Hb', "A mature red cell has no nucleus and lives about 120 days; a platelet about 10 days."],
    ['Hb', "Erythropoietin (EPO) is made in the kidney and drives the bone marrow to make red cells."],
    ['Hb', "Neutrophils are the most numerous white cells (54 to 70%); basophils the fewest (under 1%)."],
    ['Hb', "eosin/o means rosy: eosinophil granules turn red with the acidic dye eosin."],
    ['Hb', "anis/o means unequal (size) and poikil/o varied (shape); anisocytosis versus poikilocytosis."],
    ['PT', "Serum = plasma minus fibrinogen and clotting factors: the fluid left after clotting."],
    ['PT', "Thrombin turns fibrinogen into fibrin, and plasmin dissolves the clot."],
    ['PT', "Group O negative is the “universal donor” of red cells, because it has no A, B or Rh antigen."],
    ['PT', "A thrombus is a fixed clot in a vessel; an embolus is a clot or mass that moves."],
    ['PT', "Petechiae are dots, purpura larger and ecchymosis widespread bruising; all are bleeding under the skin."],
    ['Ly', "Lymph flows one way only: from the tissues to the nodes and finally into the subclavian veins."],
    ['Ly', "lymphaden/o = lymph node and lymphangi/o = lymph vessel; a letter apart, a world apart in meaning."],
    ['Ly', "The thymus is where T lymphocytes mature; the T comes from Thymus."],
    ['Ly', "Reed-Sternberg cells are the hallmark of Hodgkin lymphoma; their absence means non-Hodgkin lymphoma."],
    ['Ig', "B comes from Bone marrow: the B lymphocyte matures in the bone marrow and becomes an antibody-making plasma cell."],
    ['Ig', "IgE drives allergy and anaphylaxis; IgG is the only antibody that crosses the placenta."],
    ['Ig', "Active immunity is built by illness or a vaccine; passive immunity is borrowed antibody (from the mother or gamma globulin)."],
    ['Ig', "In HIV, a CD4 count below 200 per microlitre defines AIDS."],
    ['Lab', "PT and INR are used to monitor warfarin and aPTT to monitor heparin."],
    ['Lab', "Procalcitonin rises in bacterial infection and helps separate it from non-infectious inflammation."],
    ['Lab', "ESR and CRP are both non-specific markers of inflammation; CRP rises and falls faster."],
    ['Lab', "Glutamine fuels lymphocytes and gut cells and becomes “conditionally essential” in critical illness."],
    ['', "In the dictionary you can hear any word, bookmark it and break it into its roots with the analyser."],
    ['', "Review one batch of Leitner cards a day; cards in boxes 4 and 5 mean the word has settled into long-term memory."],
    ['', "Every level you finish adds a new character to your collection."]
  ];
  const COLORS = { Lx: '#4F5BD5', Hb: '#E5374F', PT: '#7B5CE0', Ly: '#12A594', Ig: '#1899D6', Lab: '#E58A00', '': '#C8243F' };
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
/* ایمنا — کارت‌های واژه (فلش‌کارت) با جعبه لایتنر
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
/* ایمنا — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مقادیر مرجع
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'imena.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: "Dictionary", color: '#C8243F' },
    { id: 'parse', sym: '✂', name: "Word parser", color: '#7B5CE0' },
    { id: 'roots', sym: '-o-', name: "Roots and suffixes", color: '#12A594' },
    { id: 'abbr', sym: 'CBC', name: "Abbreviations", color: '#1899D6' },
    { id: 'ref', sym: 'Lab', name: "Reference values", color: '#E5A500' }
  ];
  let cur = 'dict';
  const st = { q: '', w: '', k: '', parse: 'thrombocytopenia', open: null, limit: 40 };
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
      <p class="disclaimer">⚕️ Imena is a learning tool; reference values vary with the laboratory, age and sex.</p>
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
  const dict = () => `<div class="tpane">${searchBox("Search: anemia, thromb, leukemia…")}
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
  const SAMPLES = ['erythrocytopenia', 'splenomegaly', 'lymphadenopathy', 'hemolysis', 'thrombocytosis', 'immunoglobulin', 'agranulocytosis', 'plasmapheresis'];
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
    return `<div class="tpane">${searchBox("Search: cyt, blood, -emia…")}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]} list <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b dir="ltr">${esc(r.a)}</b><span>${esc(r.fa)}</span><small dir="ltr">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox("Search: PT, hemoglobin, leukemia…")}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>Abbreviation</th><th>Full form and meaning</th></tr>${list.map(a => `<tr><td dir="ltr">${esc(a.a)}</td><td><span dir="ltr" class="abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  const REF = [
    ["Adult blood volume", '≈ 5 L', "about 8% of body weight"],
    ["Plasma / formed elements", '55% / 45%', "plasma 90–92% water; pH ≈ 7.4"],
    ["RBC (erythrocyte)", '4.2–6.4 ×10⁶ /µL', "lifespan ≈ 120 days"],
    ["Hgb (haemoglobin)", '≈ 12–18 g/dL', "average ≈ 15; lower in women than men"],
    ["Hct (haematocrit)", '≈ 37–52 %', "volume percentage of packed red cells"],
    ["WBC (leukocyte)", '5,000–10,000 /µL', "leukocytosis: more; leukopenia: fewer"],
    ["commonest white cell; a germ eater", '54–70 %', "first defender in bacterial infection"],
    ["white cell of the lymphatic system", '20–38 %', "B and T; specific immunity"],
    ["single-nucleus white blood cell (monocyte)", '3–9 %', "in tissue → macrophage"],
    ["white cell with red granules; allergy and parasites", '1–4 %', "allergy and parasites"],
    ["white cell with dark-blue granules; active in allergy", '< 1 %', "histamine and heparin"],
    ["PLT (platelet)", '150,000–450,000 /µL', "lifespan ≈ 10 days"],
    ["PT (prothrombin time)", '≈ 11–13.5 sec', "INR ≈ 0.8–1.1 without anticoagulants"],
    ['aPTT', '≈ 25–35 sec', "heparin monitoring"],
    ['ESR', "men < 15 • women < 20 mm/hr", "non-specific marker of inflammation"],
    ['CRP', '< 10 mg/L', "hs-CRP for cardiovascular risk and mild inflammation"],
    ['Procalcitonin (PCT)', '< 0.1 ng/mL', "a rise favours bacterial infection"],
    ['CD4', '500–1,500 /µL', "below 200 in HIV → defines AIDS"]
  ];
  const ref = () => `<div class="tpane"><p class="muted">Approximate adult values, for learning; each laboratory’s ranges differ slightly.</p>
    <table class="mini ref"><tr><th>Index</th><th>Range</th><th>Note</th></tr>${REF.map(r => `<tr><td>${r[0]}</td><td dir="ltr" class="ref__v">${String(r[1]).split(' ').map(x => `<span>${x}</span>`).join(' ')}</td><td>${r[2]}</td></tr>`).join('')}</table>
    ${EA.ui.figCard({ a: ['tube', 'cbc'], l: ["centrifuged blood", "sample CBC report"] })}</div>`;

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
