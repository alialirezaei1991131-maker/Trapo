/* تراپو • ترمینو — حیطه «mahar» (Cancer Medicine)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_mahar;
  D.css = ".certbar{width: 100%; margin-top: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px; border: 0; border-radius: 16px; padding: 14px 18px; font-weight: 800; background: linear-gradient(120deg, #7048e8, #e64980); color: #fff; box-shadow: 0 4px 0 var(--brand-d); text-align: start;}\n.cert{width: 100%; padding: 10px; background: linear-gradient(135deg, #4f5bd5, #e03131, #f08c00, #0c8599, #ae3ec9, #2f9e44); border-radius: 20px;}\n.land__h em{font-style: normal; background: linear-gradient(90deg, var(--brand), #ae3ec9 55%, var(--coral)); -webkit-background-clip: text; background-clip: text; color: transparent;}\n[lang=\"fa\"]{font-family: Vazirmatn, Tahoma, system-ui, sans-serif;}\ntable.ref .ref__v{font-family: Nunito, system-ui, sans-serif; font-weight: 800; white-space: nowrap; text-align: left;}\n.recap{margin: 8px 0 4px; padding: 12px 14px; border-radius: 16px; background: color-mix(in srgb, var(--wc, var(--brand)) 9%, var(--bg)); border: 2px solid color-mix(in srgb, var(--wc, var(--brand)) 35%, var(--line));}\n.recap__h{display: block; font-size: 14px; font-weight: 900; color: color-mix(in srgb, var(--wc, var(--brand)) 80%, var(--text)); margin-bottom: 6px;}\n.recap ul{margin: 0; padding: 0; list-style: none; display: grid; gap: 8px;}\n.recap li{position: relative; padding-inline-start: 24px; font-size: 15px; line-height: 1.8;}\n.recap li::before{content: \"✓\"; position: absolute; inset-inline-start: 2px; top: 0; font-weight: 900; color: var(--green-t);}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* مهار — هسته: فضای نام، متن‌ها، رقم فارسی و سازنده‌های کوتاه محتوا
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
  EA.APP = { name: "Mahar", key: 'mahar', title: "Mahar • Cancer Terminology" };

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
    name: "Mahar", key: 'mahar', title: "Mahar • Cancer Terminology", certCode: 'MH',
    subject: "Medical terminology of cancer (Cancer Medicine)",
    kicker: "🎗️ Medical terminology: Cancer Medicine",
    hello: "Hi, I’m <b>Mahar</b>;",
    landP: () => `Hi, I’m <b>Mahar</b>, a healthy cell who keeps its growth in check! Here you will learn how a cell becomes cancerous and how tumours are named, and you will name the signs, screening, diagnosis, staging and treatment of cancer with precise terms and <b>decode</b> every new word yourself. ${fa(EA.lex.TERMS.length)} terms with pronunciation and meaning, ${fa(Object.keys(EA.IMG).length || 8)} pictures from the book, ${fa(EA.ART_KEYS.length)} teaching figures, ${fa(EA.rounds.length)} clinical cases and Leitner cards are waiting for you.`,
    disclaimer: "Mahar is a learning tool and does not replace medical references, clinical judgement or a physician’s orders.",
    eyes: "Dozens of teaching figures and pictures from the book, from cell division and metastasis to the map of tumour naming, TNM staging and the types of treatment.",
    outcomes: [
          "Break every cancer word into prefix, root and suffix and build new words",
          "Explain the difference between benign and malignant tumours, cell changes (hyperplasia to dysplasia) and the routes of metastasis",
          "Tell from a tumour’s name what tissue it comes from and whether it is benign or malignant: carcinoma, sarcoma, leukaemia, lymphoma and blastoma",
          "Recognise warning signs, precancerous lesions and screening tests",
          "Read biopsies, endoscopies, imaging, grading and TNM staging",
          "Understand surgery, radiotherapy, chemotherapy, hormone therapy, immunotherapy and the abbreviations of a cancer record"
        ],
    endText: "Just 5 minutes a day. A few weeks from now you’ll read a pathology report and a cancer patient’s record like your mother tongue.",
    obHello: "Hi! I’m Mahar, a healthy cell who keeps its growth in check 🎗️ What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “Body Language” is the best start; that’s where the word-building pieces are taught!",
    demo: () => ({
    q: "The pathology report says: <b dir=\"ltr\">osteosarcoma</b>. That means…",
    fig: { a: ['tissue-map'], l: ["Tissue and cancer name"] },
    opts: ["malignant cancer of bone", "benign bone tumour", "cancer of epithelial tissue", "bone inflammation"],
    why: `${EA.K.wb('oste/o', '-sarcoma')}<br><b>oste/o</b> = bone • <b>-sarcoma</b> = cancer of connective tissue. So it means <b>malignant cancer of bone</b>, the commonest bone cancer in teenagers. If it were just <b>-oma</b> (osteoma), it would be a benign tumour. Start the meaning from the suffix!`
  }),
    titles: ["New Cell", "Microscope in Hand", "Root Finder", "Tumour Namer", "Polyp Hunter", "Careful Screener", "Biopsy Taker", "Young Pathologist", "TNM Stager", "Metastasis Detective", "Oncologist’s Partner", "Mahar Commander", "Master of the Language of Cancer"],
    leagueRoles: ["Medical student", "Nursing student", "Lab-science student", "Lab scientist", "Nutrition student", "ICU nurse", "Clinical dietitian", "Internal-medicine resident", "Midwifery student", "Pharmacy student", "Surgical technologist", "oncology ward nurse"],
    firstBadge: ['🎗️', "First Step"],
    worldBadges: { lx: ['🧩', "Decoder"], cl: ['🔬', "Cytologist"], nm: ['🏷️', "Namer"], sx: ['🔎', "Screener"], dx: ['🧪', "Pathologist"], tx: ['💊', "Healer"] },
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
    return `<svg class="yona mahar yona--${m}" viewBox="0 0 120 150" width="${size || 120}" height="${(size || 120) * 1.25}" aria-hidden="true" style="--c:${c}">
      <ellipse cx="60" cy="144" rx="32" ry="5" fill="currentColor" opacity=".12"/>
      <g class="yona-body">
        <path d="M58 24 C90 22 112 46 110 78 C108 108 86 126 58 126 C28 126 6 106 6 78 C6 46 26 26 58 24Z" fill="var(--c)"/>
        <path d="M58 24 C90 22 112 46 110 78 C108 108 86 126 58 126 C28 126 6 106 6 78 C6 46 26 26 58 24Z" fill="#000" opacity=".12"/>
        <path d="M58 31 C86 29 104 50 103 78 C102 104 82 119 58 119 C32 119 13 102 13 78 C13 51 30 33 58 31Z" fill="var(--c)"/>
        <path d="M58 31 C86 29 104 50 103 78 C102 104 82 119 58 119 C32 119 13 102 13 78 C13 51 30 33 58 31Z" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="2 7" opacity=".45" stroke-linecap="round"/>
        <ellipse cx="${cx}" cy="${cy + 8}" rx="30" ry="25" fill="#fff" opacity=".08"/>
        <path d="M22 56 C25 42 36 34 48 34" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".55"/>
        <ellipse cx="${cx + 30}" cy="${cy - 28}" rx="7" ry="4.5" fill="#fff" opacity=".18" transform="rotate(-25 ${cx + 30} ${cy - 28})"/><circle cx="${cx - 30}" cy="${cy + 30}" r="4" fill="#fff" opacity=".18"/><circle cx="${cx + 36}" cy="${cy + 6}" r="3" fill="#fff" opacity=".2"/>
        <g transform="translate(100 112)"><circle r="17" fill="#FFC800" stroke="#fff" stroke-width="3"/><path d="M0 -10 C-6 -10 -8 -4 -6 0 L4 11 M0 -10 C6 -10 8 -4 6 0 L-4 11" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
        <path class="negar-spark" d="M100 18 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
        ${brows}${eyes}
        <ellipse cx="${cx - 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/><ellipse cx="${cx + 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/>
        ${mouths[m] || mouths.happy}${tear}
      </g>
    </svg>`;
  }
  };
})(window);
/* مهار — واژه‌ها (ساخته‌شده خودکار با tools/build_data.py؛ دستی ویرایش نکنید)
 * [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارها] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [
    ["actinic keratosis", "ak-TIN-ik kair-ah-TOH-sis", "Rough, scaly patch on sun-damaged skin that can become squamous cell carcinoma.", "rough scaly sun-damaged patch, precancerous", "sx", "pre", []],
    ["acute lymphocytic leukemia", "ah-KYOOT lim-foh-SIT-ik loo-KEE-mee-ah", "Fast-growing leukemia of immature lymphocytes; the most common childhood cancer.", "acute lymphocytic leukaemia", "nm", "heme", ["ALL"]],
    ["acute myeloid leukemia", "ah-KYOOT MYE-eh-loyd loo-KEE-mee-ah", "Fast-growing leukemia of immature myeloid cells; most common acute leukemia in adults.", "acute myeloid leukaemia", "nm", "heme", ["AML"]],
    ["adenocarcinoma", "ad-eh-noh-kar-sih-NOH-mah", "Carcinoma of glandular epithelium that makes fluid or mucus; most breast, colon, pancreas and prostate cancers.", "malignant tumour of glandular epithelium", "nm", "mal", []],
    ["adenoma", "ad-eh-NOH-mah", "Benign tumor of glandular epithelium.", "benign gland tumour", "nm", "ben", []],
    ["adjuvant therapy", "AJ-oo-vant THAIR-ah-pee", "Additional treatment given after the main treatment (usually surgery) to kill remaining cancer cells.", "treatment after surgery to kill remaining cells", "tx", "care", []],
    ["alopecia", "al-oh-PEE-shee-ah", "Hair loss; a common side effect of chemotherapy.", "hair loss", "tx", "rx", []],
    ["alpha-fetoprotein", "AL-fah-fee-toh-PROH-teen", "Tumor marker raised in liver cancer and some testicular germ cell tumors.", "fetal protein measured in pregnancy", "sx", "scr", ["AFP"]],
    ["anaplasia", "an-ah-PLAY-zhah", "Loss of differentiation of cells; a characteristic of malignant cells.", "loss of cell differentiation", "cl", "bio", []],
    ["anemia", "ah-NEE-mee-ah", "Number of red blood cells below normal; can be a sign of bleeding from cancer of the digestive tract or uterus.", "low red blood cells (anaemia)", "sx", "sx", []],
    ["angiogenesis", "an-jee-oh-JEN-eh-sis", "Formation of new blood vessels; tumors use it to feed their growth.", "formation of new blood vessels", "cl", "bio", []],
    ["angioma", "an-jee-OH-mah", "Benign tumor made of blood or lymph vessels.", "benign vessel tumour", "nm", "ben", []],
    ["angiosarcoma", "an-jee-oh-sar-KOH-mah", "Malignant tumor of the cells lining blood or lymph vessels.", "malignant tumour of vessel lining", "nm", "mal", []],
    ["anorexia", "an-oh-REK-see-ah", "Abnormal loss of appetite; a sign of cancer or a side effect of chemotherapy or radiation.", "loss of appetite", "sx", "sx", []],
    ["antiandrogen", "an-tee-AN-droh-jen", "Drug that blocks the production or action of male sex hormones; used in prostate cancer.", "drug blocking male hormone", "tx", "rx", []],
    ["antiemetic", "an-tee-eh-MET-ik", "Drug that prevents nausea and vomiting caused by chemotherapy and radiation.", "drug against nausea and vomiting", "tx", "rx", []],
    ["antiestrogen", "an-tee-ES-troh-jen", "Drug that blocks the effects of estrogen in estrogen-receptor-positive breast cancer, such as tamoxifen.", "drug blocking oestrogen, such as tamoxifen", "tx", "rx", []],
    ["antineoplastic", "an-tee-nee-oh-PLAS-tik", "Drug that prevents the development, growth or reproduction of cancer cells.", "anticancer (antineoplastic)", "tx", "rx", []],
    ["apoptosis", "ap-op-TOH-sis", "Programmed, orderly death of old or damaged cells; cancer cells escape it.", "programmed cell death", "cl", "bio", []],
    ["aromatase inhibitor", "ah-ROH-mah-tays in-HIB-ih-ter", "Drug that lowers estrogen production after menopause; used for hormone-positive breast cancer.", "drug lowering oestrogen after menopause", "tx", "rx", []],
    ["asbestos", "as-BES-tos", "Fibrous mineral whose inhaled fibers cause mesothelioma and lung cancer.", "mineral fibre causing mesothelioma", "cl", "bio", []],
    ["astrocytoma", "as-troh-sye-TOH-mah", "Glioma made of star-shaped astrocytes.", "glioma of star-shaped cells", "nm", "mal", []],
    ["barium enema", "BAIR-ee-um EN-eh-mah", "X-rays of the colon after barium is given by enema; used to look for colon cancer.", "contrast X-ray of the large bowel", "dx", "img", ["BE"]],
    ["Barrett esophagus", "BAIR-et eh-SOF-ah-gus", "Change of the lining of the lower esophagus (metaplasia) caused by long-term acid reflux; raises the risk of esophageal cancer.", "precancerous change of the lower oesophagus lining", "sx", "pre", []],
    ["basal cell carcinoma", "BAY-sal sel kar-sih-NOH-mah", "Slow-growing carcinoma of the basal layer of the epidermis on sun-exposed skin; the most common skin cancer and it rarely spreads.", "commonest skin malignancy, rarely spreads", "nm", "mal", ["BCC"]],
    ["BCG vaccine", "bee-see-jee vak-SEEN", "Bacille Calmette-Guerin; weakened bacteria placed in the bladder to activate the immune system against bladder cancer.", "weakened bacterium used inside the bladder", "tx", "rx", ["BCG"]],
    ["benign", "beh-NINE", "Not cancerous; does not invade nearby tissue or spread to other parts of the body.", "not cancerous", "lx", "pl", []],
    ["biopsy", "BYE-op-see", "Removal of cells or tissue for examination under a microscope to diagnose cancer.", "tissue sampling", "dx", "bx", ["Bx"]],
    ["blastoma", "blas-TOH-mah", "Tumor that arises from immature embryonic cells.", "tumour of immature embryonic cells", "nm", "mal", []],
    ["bone marrow aspiration", "bone MAIR-oh as-pih-RAY-shun", "Removal of marrow, blood and a small piece of bone with a hollow needle from the hipbone or breastbone to evaluate leukemia and lymphoma.", "drawing marrow out with a needle", "dx", "bx", []],
    ["bone marrow transplantation", "bone MAIR-oh trans-plan-TAY-shun", "Transplant of blood-forming stem cells taken from bone marrow.", "replacing diseased marrow with donor marrow", "tx", "rx", ["BMT"]],
    ["bone scan", "bone skan", "Radionuclide scan that shows areas where cancer has spread to bone.", "radioactive scan for skeletal metastases", "dx", "img", []],
    ["brachytherapy", "brak-ee-THAIR-ah-pee", "Internal radiation: radioactive seeds, needles, wires or catheters placed directly into or near the tumor.", "radiation source placed beside the tumour", "tx", "rad", []],
    ["BRCA1", "BRAK-ah one", "Tumor suppressor gene; inherited mutations greatly increase the risk of breast and ovarian cancer.", "inherited breast and ovarian risk gene", "cl", "bio", ["BRCA"]],
    ["breast self-examination", "brest self-eg-zam-ih-NAY-shun", "Regular checking of one's own breasts for lumps or changes.", "monthly self-check of the breasts", "sx", "scr", ["BSE"]],
    ["bronchoscopy", "brong-KOS-koh-pee", "Examination of the trachea, bronchi and lungs with a scope passed through the nose or mouth.", "viewing the airways with a scope", "dx", "bx", []],
    ["CA-125", "see-ay one-two-five", "Tumor marker used to follow ovarian cancer.", "CA-125 marker (ovarian cancer)", "sx", "scr", []],
    ["cachexia", "kah-KEK-see-ah", "Severe wasting of muscle and fat with weight loss and weakness in advanced cancer.", "severe wasting in advanced illness", "sx", "sx", []],
    ["cancer", "KAN-ser", "Disease in which abnormal cells divide without control and can invade nearby tissue and spread to other parts of the body; any malignant tumor.", "malignant tumour", "lx", "sci", ["CA", "Ca"]],
    ["cancerous", "KAN-ser-us", "Pertaining to or affected by cancer.", "malignant", "lx", "pl", []],
    ["carcinoembryonic antigen", "kar-sih-noh-em-bree-ON-ik AN-tih-jen", "Tumor marker used mainly to follow colorectal cancer.", "tumour marker for bowel malignancy", "sx", "scr", ["CEA"]],
    ["carcinogen", "kar-SIN-oh-jen", "Substance or agent that causes cancer, such as tobacco smoke, asbestos or ultraviolet light.", "agent that causes malignancy", "cl", "bio", []],
    ["carcinogenesis", "kar-sih-noh-JEN-eh-sis", "Process by which normal cells are transformed into cancer cells.", "origin of cancer", "cl", "bio", []],
    ["carcinoma", "kar-sih-NOH-mah", "Malignant tumor of epithelial tissue that covers the body or lines internal organs; the most common type of cancer.", "cancer of epithelial tissue (carcinoma)", "nm", "mal", []],
    ["carcinoma in situ", "kar-sih-NOH-mah in SYE-too", "Carcinoma confined to the epithelium where it began, without invasion.", "cancer that has not spread", "dx", "stg", ["CIS"]],
    ["carcinomata", "kar-sih-NOH-mah-tah", "Classical plural of carcinoma; carcinomas is also accepted.", "carcinomas (Latin plural)", "lx", "pl", []],
    ["cell cycle", "sel SYE-kul", "Series of stages a cell passes through as it grows and divides; normally tightly controlled.", "sequence of growth and division", "cl", "bio", []],
    ["chemotherapy", "kee-moh-THAIR-ah-pee", "Treatment with anticancer drugs that destroy cancer cells by stopping them from growing or dividing.", "drug treatment of cancer", "tx", "rx", ["chemo"]],
    ["chondroma", "kon-DROH-mah", "Benign tumor of cartilage.", "benign cartilage tumour", "nm", "ben", []],
    ["chondrosarcoma", "kon-droh-sar-KOH-mah", "Malignant tumor of cartilage.", "malignant cartilage tumour", "nm", "mal", []],
    ["chronic lymphocytic leukemia", "KRON-ik lim-foh-SIT-ik loo-KEE-mee-ah", "Slow-growing leukemia of mature-looking lymphocytes, usually in older adults.", "chronic lymphocytic leukaemia", "nm", "heme", ["CLL"]],
    ["chronic myeloid leukemia", "KRON-ik MYE-eh-loyd loo-KEE-mee-ah", "Slow-growing leukemia of myeloid cells, linked to the Philadelphia chromosome.", "chronic myeloid leukaemia", "nm", "heme", ["CML"]],
    ["colectomy", "koh-LEK-toh-mee", "Surgical removal of all or part of the colon.", "removal of the large intestine", "tx", "surg", []],
    ["colonoscopy", "koh-lon-OS-koh-pee", "Examination of the entire colon with a scope inserted through the rectum; polyps can be removed.", "looking inside the colon (colonoscopy)", "dx", "bx", []],
    ["colony-stimulating factor", "KOL-oh-nee STIM-yoo-lay-ting FAK-ter", "Substance that stimulates the bone marrow to make blood cells after chemotherapy or radiation (G-CSF, GM-CSF).", "drug prompting the marrow to make blood cells", "tx", "rx", ["CSF", "G-CSF"]],
    ["colostomy", "koh-LOS-toh-mee", "Surgical creation of an opening (stoma) from the colon to the abdominal wall for stool to leave the body.", "opening of the colon on the abdomen", "tx", "surg", []],
    ["complete blood count", "kom-PLEET blud kownt", "Blood test of the number and shape of red cells, white cells and platelets; key for leukemia.", "count of red cells, white cells and platelets", "dx", "scr", ["CBC"]],
    ["computed tomography", "kom-PYOO-ted toh-MOG-rah-fee", "X-rays and a computer that make cross-sectional pictures of the body, with or without contrast dye.", "CT scan", "dx", "img", ["CT", "CAT"]],
    ["core needle biopsy", "kor NEE-dul BYE-op-see", "Biopsy that uses a wide needle to remove a cylinder (core) of tissue.", "thick-needle sample of a tissue cylinder", "dx", "bx", []],
    ["cryosurgery", "krye-oh-SER-jer-ee", "Use of extreme cold to freeze and destroy abnormal tissue; for early skin cancer, retinoblastoma and precancer of skin and cervix.", "destroying tissue with extreme cold", "tx", "surg", []],
    ["curative", "KYOOR-ah-tiv", "Treatment given with the aim of curing the cancer; also primary or definitive treatment.", "aimed at a cure", "tx", "care", []],
    ["cyst", "sist", "Closed sac filled with fluid or semisolid material; usually not cancer.", "fluid-filled sac", "nm", "ben", []],
    ["cystectomy", "sis-TEK-toh-mee", "Surgical removal of the urinary bladder.", "removal of the bladder", "tx", "surg", []],
    ["cystoscopy", "sis-TOS-koh-pee", "Examination of the bladder with a scope passed through the urethra.", "viewing the bladder with a scope", "dx", "bx", []],
    ["cytology", "sye-TOL-oh-jee", "Study of cells; examination of single cells under the microscope.", "study of cells", "lx", "sci", []],
    ["cytotoxic", "sye-toh-TOK-sik", "Poisonous to cells; describes most chemotherapy drugs.", "cell-killing", "tx", "rx", []],
    ["debulking", "dee-BULK-ing", "Removal of as much tumor as possible when it cannot all be removed; also cytoreduction.", "removing as much tumour as possible", "tx", "surg", []],
    ["diagnoses", "dye-ag-NOH-seez", "Plural of diagnosis.", "identifications of disease (plural)", "lx", "pl", []],
    ["diagnosis", "dye-ag-NOH-sis", "Identification of a disease from its signs, symptoms and tests.", "identification of a disease", "lx", "sci", ["Dx"]],
    ["differentiation", "dif-er-en-shee-AY-shun", "Process by which cells mature and take on a special structure and function.", "cell maturing into its special form", "cl", "bio", []],
    ["digital rectal examination", "DIJ-ih-tal REK-tal eg-zam-ih-NAY-shun", "Gloved finger inserted into the rectum to feel the prostate and rectum.", "gloved-finger check of rectum and prostate", "sx", "scr", ["DRE"]],
    ["distant metastasis", "DIS-tant meh-TAS-tah-sis", "Spread of cancer to faraway organs or lymph nodes; the M in TNM.", "spread to far organs (M1)", "dx", "stg", []],
    ["ductal carcinoma in situ", "DUK-tal kar-sih-NOH-mah in SYE-too", "Abnormal cells that involve only the lining of a breast duct and have not spread outside the duct.", "non-invasive malignancy in a breast duct", "nm", "mal", ["DCIS"]],
    ["dyspareunia", "dis-pah-ROO-nee-ah", "Painful sexual intercourse in women; can be a symptom of cancer of the cervix or uterus.", "painful intercourse", "sx", "sx", []],
    ["dysphagia", "dis-FAY-jee-ah", "Difficulty swallowing; symptom of cancer of the mouth, throat or esophagus.", "difficulty swallowing", "sx", "sx", []],
    ["dysplasia", "dis-PLAY-zhah", "Abnormal development of cells that look abnormal under the microscope but are not cancer; a precancerous change.", "abnormal, precancerous cell growth", "cl", "bio", []],
    ["dysplastic nevus", "dis-PLAS-tik NEE-vus", "Atypical mole with irregular shape and color that has a higher risk of becoming melanoma.", "dysplastic naevus", "sx", "pre", []],
    ["dyspnea", "DISP-nee-ah", "Difficult or labored breathing; symptom of lung cancer.", "shortness of breath", "sx", "sx", []],
    ["dysuria", "dis-YOO-ree-ah", "Painful or burning urination; symptom of cancer of the urinary tract or prostate.", "burning on urination", "sx", "sx", []],
    ["en bloc resection", "ahn BLOK ree-SEK-shun", "Removal of a tumor in one piece together with surrounding tissue and lymph nodes.", "en bloc removal", "tx", "surg", []],
    ["encapsulated", "en-KAP-soo-lay-ted", "Enclosed in a capsule; benign tumors are often encapsulated and grow by expansion.", "enclosed in a capsule", "cl", "bio", []],
    ["endometrial biopsy", "en-doh-MEE-tree-al BYE-op-see", "Removal of tissue from the lining of the uterus through the cervix to check for uterine cancer.", "sample of the uterine lining", "dx", "bx", []],
    ["endoscopy", "en-DOS-koh-pee", "Visual examination inside the body with a thin lighted tube (endoscope), often with biopsy.", "looking inside with a scope (endoscopy)", "dx", "bx", []],
    ["Epstein-Barr virus", "EP-stine bar VYE-rus", "Herpes-family virus linked to some lymphomas and nasopharyngeal cancer.", "virus linked with some lymphomas", "cl", "bio", ["EBV"]],
    ["esophagoscopy", "eh-sof-ah-GOS-koh-pee", "Examination of the esophagus with an esophagoscope.", "viewing the gullet with a scope", "dx", "bx", []],
    ["estrogen receptor", "ES-troh-jen ree-SEP-ter", "Protein on breast cancer cells that lets estrogen fuel their growth; ER-positive tumors respond to hormone therapy.", "binding site for the main female hormone on tumour cells", "dx", "stg", ["ER"]],
    ["excision", "ek-SIZH-un", "Surgical cutting out and removal of tissue.", "cutting out tissue", "tx", "surg", []],
    ["excisional biopsy", "ek-SIZH-un-al BYE-op-see", "Biopsy that removes the whole lump or suspicious area.", "removing the whole lump for testing", "dx", "bx", []],
    ["external beam radiation", "ek-STER-nal beem ray-dee-AY-shun", "Radiation aimed by a machine from outside the body at the part where the cancer is.", "external beam radiotherapy", "tx", "rad", []],
    ["familial polyposis", "fah-MIL-ee-al pol-ih-POH-sis", "Inherited condition with hundreds of colon and rectal polyps that almost always leads to colon cancer if not treated.", "hundreds of inherited bowel growths", "sx", "pre", ["FAP"]],
    ["fatigue", "fah-TEEG", "Extreme tiredness that is not relieved by rest; the most common symptom of cancer and its treatment.", "tiredness not relieved by rest", "sx", "sx", []],
    ["fecal occult blood test", "FEE-kal oh-KULT blud test", "Screening test for colon cancer that finds hidden (occult) blood in the stool (fecal); the guaiac method is gFOBT.", "faecal occult blood test", "sx", "scr", ["FOBT", "gFOBT"]],
    ["fibroadenoma", "fye-broh-ad-eh-NOH-mah", "Benign, firm, rubbery tumor of the breast made of fibrous and glandular tissue.", "benign breast lump of fibrous and gland tissue", "nm", "ben", []],
    ["fibroma", "fye-BROH-mah", "Benign tumor of fibrous connective tissue.", "benign fibrous tumour", "nm", "ben", []],
    ["fibrosarcoma", "fye-broh-sar-KOH-mah", "Malignant tumor of fibrous connective tissue.", "malignant fibrous tumour", "nm", "mal", []],
    ["fine-needle aspiration", "fine NEE-dul as-pih-RAY-shun", "Biopsy in which a thin needle removes cells or fluid, often guided by CT or ultrasound.", "drawing a few cells with a thin needle", "dx", "bx", ["FNA"]],
    ["five-year survival rate", "five-yeer ser-VYE-val rayt", "Percentage of people who are alive five years after a cancer diagnosis.", "share of patients alive five years after diagnosis", "tx", "care", []],
    ["fluorouracil", "floor-oh-YOOR-ah-sil", "Antineoplastic drug used for colon, breast and skin cancers.", "cell-killing drug often used for bowel cancer", "tx", "rx", ["5-FU"]],
    ["frozen section", "FROH-zen SEK-shun", "Quick freezing and slicing of tissue so the pathologist can give a diagnosis during surgery.", "quick pathology slice during surgery", "dx", "bx", []],
    ["genetic testing", "jeh-NET-ik TES-ting", "Testing of blood or tissue for inherited mutations, such as BRCA1 and BRCA2, that raise cancer risk.", "checking DNA for inherited mutations", "sx", "scr", []],
    ["glioblastoma", "glee-oh-blas-TOH-mah", "Fast-growing, high-grade astrocytoma; the most aggressive brain cancer in adults.", "most aggressive adult brain malignancy", "nm", "mal", []],
    ["glioma", "glee-OH-mah", "Tumor of the glial (supporting) cells of the brain and spinal cord.", "tumour of the brain’s supporting cells", "nm", "mal", []],
    ["grade", "grayd", "Measure of how abnormal tumor cells look under the microscope; high grade means poorly differentiated and faster growing.", "degree of cell abnormality", "dx", "stg", []],
    ["graft-versus-host disease", "graft VER-sus hohst dih-ZEEZ", "Complication in which donor immune cells attack the tissues of the transplant recipient.", "donor immune cells attacking the recipient", "tx", "rx", ["GVHD"]],
    ["hemangioma", "hee-man-jee-OH-mah", "Benign tumor of blood vessels; a common red birthmark in infants.", "haemangioma (benign blood vessel tumour)", "nm", "ben", []],
    ["hematochezia", "hee-mat-oh-KEE-zee-ah", "Passage of bright red blood from the rectum; a warning sign of colorectal cancer.", "bleeding from the rectum", "sx", "sx", []],
    ["hematogenous spread", "hee-mah-TOJ-eh-nus spred", "Spread of cancer cells through the bloodstream to distant organs such as liver, lung, bone and brain.", "spread through the blood", "cl", "bio", []],
    ["hematologist", "hee-mah-TOL-oh-jist", "Physician who specializes in diseases of the blood and blood-forming tissues, including leukemia and lymphoma.", "haematologist (blood specialist)", "lx", "sci", []],
    ["hematoma", "hee-mah-TOH-mah", "Collection of blood that has leaked out of a vessel and pooled; despite -oma it is not a tumor.", "haematoma (collection of blood)", "nm", "ben", []],
    ["hematuria", "hee-mah-TOO-ree-ah", "Blood in the urine; sign of cancer of the bladder, kidney or prostate.", "haematuria (blood in the urine)", "sx", "sx", []],
    ["hemoptysis", "hee-MOP-tih-sis", "Coughing or spitting up blood from the respiratory tract; sign of lung cancer.", "haemoptysis (coughing up blood)", "sx", "sx", []],
    ["hepatoblastoma", "hep-ah-toh-blas-TOH-mah", "Malignant embryonic tumor of the liver in young children.", "embryonic liver tumour of children", "nm", "mal", []],
    ["HER2", "her too", "Growth-promoting protein; HER2-positive breast cancers grow fast but respond to targeted drugs.", "HER2 receptor", "dx", "stg", []],
    ["histology", "his-TOL-oh-jee", "Study of tissues under the microscope.", "study of tissues", "lx", "sci", []],
    ["hoarseness", "HORS-nes", "Rough, harsh voice; lasting more than one to two weeks it can signal cancer of the larynx.", "rough, husky voice", "sx", "sx", []],
    ["Hodgkin lymphoma", "HOJ-kin lim-FOH-mah", "Lymphoma marked by large Reed-Sternberg cells, often starting in neck lymph nodes of young adults.", "lymph node malignancy with Reed-Sternberg cells", "nm", "heme", ["HL"]],
    ["hormone therapy", "HOR-mohn THAIR-ah-pee", "Treatment that slows or stops hormone-sensitive tumors by blocking hormone production or action; also endocrine therapy.", "blocking hormones that feed a tumour", "tx", "rx", []],
    ["hospice", "HOS-pis", "Care that focuses on comfort and quality of life for people near the end of life.", "end-of-life comfort care", "tx", "care", []],
    ["human papillomavirus", "HYOO-man pap-ih-LOH-mah-vye-rus", "Virus spread by sexual contact; high-risk types cause cervical and some head and neck cancers.", "virus causing warts and cervical cancer", "cl", "bio", ["HPV"]],
    ["hyperplasia", "hye-per-PLAY-zhah", "Increase in the number of cells that appear normal; the cells may later become cancerous.", "increase in the number of normal cells", "cl", "bio", []],
    ["hysterectomy", "his-ter-EK-toh-mee", "Surgical removal of the uterus.", "removal of the uterus", "tx", "surg", []],
    ["hysteroscopy", "his-ter-OS-koh-pee", "Examination of the inside of the uterus with a scope.", "viewing the uterus with a scope", "dx", "bx", []],
    ["immunosuppressant", "im-yoo-noh-suh-PRES-ant", "Drug that suppresses the immune response, as in transplant patients.", "drug that dampens immunity", "tx", "rx", []],
    ["immunotherapy", "im-yoo-noh-THAIR-ah-pee", "Treatment that stimulates or restores the ability of the immune system to fight cancer; also biological therapy.", "boosting immunity against malignancy", "tx", "rx", []],
    ["in situ", "in SYE-too", "In its original place; cancer that has not invaded surrounding tissue (stage 0) and can be cured by excision.", "in its original place, not invading", "dx", "stg", []],
    ["incisional biopsy", "in-SIZH-un-al BYE-op-see", "Biopsy that removes only part of a lump or suspicious area.", "removing part of a lump for testing", "dx", "bx", []],
    ["infiltration", "in-fil-TRAY-shun", "Growth of malignant cells into nearby tissue.", "seeping into nearby tissue", "cl", "bio", []],
    ["intravenous pyelogram", "in-trah-VEE-nus PYE-eh-loh-gram", "X-rays of kidneys, ureters and bladder after dye is injected into a vein.", "intravenous pyelography", "dx", "img", ["IVP"]],
    ["invasion", "in-VAY-zhun", "Spread of cancer cells into surrounding healthy tissue.", "spreading into healthy tissue", "cl", "bio", []],
    ["invasive", "in-VAY-siv", "Cancer that has spread beyond the layer of tissue where it developed into nearby tissue.", "spreading into deeper tissue", "dx", "stg", []],
    ["Kaposi sarcoma", "KAP-oh-see sar-KOH-mah", "Cancer of vessel lining that forms purple skin lesions; common in people with AIDS.", "cancer with purple skin lesions", "nm", "mal", []],
    ["laryngectomy", "lair-in-JEK-toh-mee", "Surgery to remove all or part of the larynx (voice box).", "removal of the voice box", "tx", "surg", []],
    ["laryngoscopy", "lair-in-GOS-koh-pee", "Examination of the larynx (voice box) with a mirror or a laryngoscope.", "viewing the voice box with a scope", "dx", "bx", []],
    ["laser surgery", "LAY-zer SER-jer-ee", "Use of a narrow beam of light to cut or destroy tissue on the surface of the body or the lining of organs.", "cutting with a beam of light", "tx", "surg", []],
    ["leiomyoma", "lye-oh-mye-OH-mah", "Benign tumor of smooth muscle, especially of the uterus, where it is called a fibroid.", "benign smooth muscle tumour (fibroid)", "nm", "ben", []],
    ["leiomyomata", "lye-oh-mye-OH-mah-tah", "Plural of leiomyoma; fibroids of the uterus.", "leiomyomas (plural)", "lx", "pl", []],
    ["leiomyosarcoma", "lye-oh-mye-oh-sar-KOH-mah", "Malignant tumor of smooth muscle.", "malignant smooth muscle tumour", "nm", "mal", []],
    ["lentigo maligna", "len-TYE-goh mah-LIG-nah", "Slow-growing brown patch on sun-damaged skin, a melanoma in situ; Latin for malignant freckle.", "melanoma in situ, “malignant freckle”", "sx", "pre", []],
    ["lesion", "LEE-zhun", "Any abnormal area of tissue, such as a wound, sore or tumor.", "area of damaged tissue", "lx", "sci", []],
    ["leukemia", "loo-KEE-mee-ah", "Cancer of blood-forming tissue in the bone marrow; large numbers of abnormal white cells crowd out normal cells and spill into the blood.", "blood cancer", "nm", "heme", []],
    ["leukoplakia", "loo-koh-PLAY-kee-ah", "White patches on the mucous membrane of the mouth, often from tobacco; may become oral cancer.", "white patches in the mouth", "sx", "pre", []],
    ["LH-RH agonist", "el-aych-ar-aych AG-oh-nist", "Drug resembling luteinizing hormone-releasing hormone that lowers sex hormone levels in cancers of the reproductive system.", "drug that lowers sex hormones", "tx", "rx", ["LH-RH"]],
    ["lipoma", "lih-POH-mah", "Benign, soft tumor of fat tissue.", "benign fatty tumour", "nm", "ben", []],
    ["liposarcoma", "lip-oh-sar-KOH-mah", "Malignant tumor of fat tissue.", "malignant fatty tumour", "nm", "mal", []],
    ["lobectomy", "loh-BEK-toh-mee", "Surgical removal of a lobe of an organ such as the lung.", "removal of one lobe", "tx", "surg", []],
    ["localized", "LOH-kal-ized", "Confined to the area where it started, without spread.", "applied to the skin", "dx", "stg", []],
    ["lumpectomy", "lum-PEK-toh-mee", "Surgery to remove the breast tumor and a small amount of normal tissue around it.", "removal of a breast lump with a margin", "tx", "surg", []],
    ["lymph node dissection", "limf node dye-SEK-shun", "Removal of lymph nodes in the tumor area (regional: some; radical: most or all) to examine them for cancer.", "removal of regional nodes", "tx", "surg", []],
    ["lymphadenopathy", "lim-fad-eh-NOP-ah-thee", "Disease or swelling of lymph nodes; a sign of lymphoma or metastatic cancer.", "enlarged nodes", "sx", "sx", []],
    ["lymphangiography", "lim-fan-jee-OG-rah-fee", "X-ray of lymph vessels and nodes after dye is injected into a lymph channel; also lymph node mapping.", "dye imaging of lymph vessels", "dx", "img", []],
    ["lymphangioma", "lim-fan-jee-OH-mah", "Benign tumor of lymph vessels.", "benign lymph vessel tumour", "nm", "ben", []],
    ["lymphatic spread", "lim-FAT-ik spred", "Spread of cancer cells through lymph vessels to lymph nodes.", "spread through the lymph", "cl", "bio", []],
    ["lymphedema", "limf-eh-DEE-mah", "Swelling of an arm or leg from blocked lymph flow, often after lymph node removal or radiation.", "lymphoedema (lymphatic swelling)", "sx", "sx", []],
    ["lymphoma", "lim-FOH-mah", "Cancer that begins in lymphocytes of the lymph system; all lymphoid tumors are malignant.", "malignancy of lymphocytes", "nm", "heme", []],
    ["lymphosarcoma", "lim-foh-sar-KOH-mah", "Older name for a malignant tumor of lymphoid tissue (non-Hodgkin lymphoma).", "old name for malignant lymphatic tumour", "nm", "mal", []],
    ["magnetic resonance imaging", "mag-NET-ik REZ-oh-nans IM-ah-jing", "Imaging with a strong magnet and radio waves; very good for brain, spine and soft tissue.", "MRI scan", "dx", "img", ["MRI"]],
    ["malignant", "mah-LIG-nant", "Cancerous; tending to invade and destroy nearby tissue and spread to other parts of the body.", "cancerous and spreading", "lx", "pl", []],
    ["mammogram", "MAM-oh-gram", "X-ray image of the breast.", "X-ray image of the breast", "sx", "scr", []],
    ["mammography", "mam-OG-rah-fee", "Low-dose X-ray imaging of the breast for screening and diagnosis.", "breast X-ray imaging", "sx", "scr", []],
    ["mass", "mas", "Lump or collection of tissue that can be felt or seen on imaging; may or may not be cancer.", "lump", "lx", "sci", []],
    ["mastectomy", "mas-TEK-toh-mee", "Surgery to remove the breast or as much breast tissue as possible.", "removal of the breast", "tx", "surg", []],
    ["medical oncologist", "MED-ih-kal ong-KOL-oh-jist", "Oncologist who treats cancer with chemotherapy, hormone therapy and immunotherapy and coordinates overall care.", "physician who gives anticancer drugs", "lx", "sci", []],
    ["medulloblastoma", "med-yoo-loh-blas-TOH-mah", "Malignant embryonic tumor of the cerebellum; a common brain cancer in children.", "embryonic tumour of the cerebellum", "nm", "mal", []],
    ["melanoma", "mel-ah-NOH-mah", "Malignant tumor of the pigment-producing cells (melanocytes) of the skin; the most dangerous skin cancer.", "malignancy of pigment cells", "nm", "mal", []],
    ["meningioma", "meh-nin-jee-OH-mah", "Usually benign, slow-growing tumor of the meninges that cover the brain and spinal cord.", "usually benign tumour of the brain membranes", "nm", "ben", []],
    ["mesothelioma", "mez-oh-thee-lee-OH-mah", "Malignant tumor of the lining of the chest or abdomen, strongly linked to asbestos.", "malignancy of the chest or abdominal lining", "nm", "mal", []],
    ["metaplasia", "met-ah-PLAY-zhah", "Change of one mature cell type into another cell type, often in response to irritation.", "change from one mature cell type to another", "cl", "bio", []],
    ["metastases", "meh-TAS-tah-seez", "Plural of metastasis; secondary tumors that have spread from the primary site.", "secondary tumours (plural)", "lx", "pl", ["mets"]],
    ["metastasis", "meh-TAS-tah-sis", "Spread of cancer cells from the primary site to a distant part of the body through blood or lymph; also the secondary tumor itself.", "spread of cancer", "cl", "bio", []],
    ["metastasize", "meh-TAS-tah-size", "To spread from one part of the body to another.", "to metastasise", "cl", "bio", []],
    ["metastatic", "met-ah-STAT-ik", "Pertaining to cancer that has spread from its primary site; it keeps the name of the primary tumor.", "spread from the original site", "cl", "bio", []],
    ["methotrexate", "meth-oh-TREK-sayt", "Antineoplastic drug that blocks cell division; used for leukemia, lymphoma and other cancers.", "cell-killing drug that blocks folate use", "tx", "rx", ["MTX"]],
    ["mitosis", "mye-TOH-sis", "Cell division that produces two identical daughter cells.", "division of a cell into two", "cl", "bio", []],
    ["modified radical mastectomy", "MOD-ih-fide RAD-ih-kal mas-TEK-toh-mee", "Removal of the breast, some armpit lymph nodes and the lining over the chest muscles.", "breast removal with some armpit nodes", "tx", "surg", ["MRM"]],
    ["monoclonal antibody", "mon-oh-KLOH-nal AN-tih-bod-ee", "Laboratory-made antibody that attaches to a specific target on cancer cells.", "laboratory-made identical antibody", "tx", "rx", ["mAb"]],
    ["mucositis", "myoo-koh-SYE-tis", "Painful inflammation and sores of the mucous membranes of the mouth and gut caused by chemotherapy or radiation.", "sores of the mouth and gut lining", "tx", "rx", []],
    ["multiple myeloma", "MUL-tih-pul mye-eh-LOH-mah", "Cancer of plasma cells in the bone marrow that destroys bone.", "cancer of plasma cells in the marrow", "nm", "heme", ["MM"]],
    ["mutation", "myoo-TAY-shun", "Permanent change in the DNA of a cell; mutations can be inherited or acquired.", "lasting change in DNA", "cl", "bio", []],
    ["myelogenous", "mye-eh-LOJ-eh-nus", "Relating to or produced by the bone marrow.", "arising in bone marrow", "nm", "heme", []],
    ["myelosuppression", "mye-eh-loh-suh-PRESH-un", "Decreased production of blood cells by the bone marrow; a major side effect of chemotherapy.", "bone marrow suppression", "tx", "rx", []],
    ["myoma", "mye-OH-mah", "Benign tumor of muscle.", "benign muscle tumour", "nm", "ben", []],
    ["necrosis", "neh-KROH-sis", "Death of cells or tissue; fast-growing tumors often have necrotic centers.", "tissue death", "cl", "bio", []],
    ["neoadjuvant therapy", "nee-oh-AJ-oo-vant THAIR-ah-pee", "Treatment given before the main treatment (surgery) to shrink the tumor.", "treatment before surgery to shrink a tumour", "tx", "care", []],
    ["neoplasia", "nee-oh-PLAY-zhah", "Process of forming a new, abnormal growth (neoplasm).", "formation of a tumour", "cl", "bio", []],
    ["neoplasm", "NEE-oh-plazm", "New, abnormal growth of tissue that serves no useful purpose; same meaning as tumor.", "new abnormal growth; a tumour", "lx", "sci", []],
    ["neoplastic", "nee-oh-PLAS-tik", "Pertaining to a neoplasm or new abnormal growth.", "relating to tumour growth", "lx", "pl", []],
    ["neuroblastoma", "noo-roh-blas-TOH-mah", "Malignant embryonic tumor of nerve cells, often in the adrenal gland of young children.", "embryonic tumour of nerve tissue", "nm", "mal", []],
    ["neuroma", "noo-ROH-mah", "Benign tumor of nerve tissue.", "benign nerve tumour", "nm", "ben", []],
    ["neutropenia", "noo-troh-PEE-nee-ah", "Low number of neutrophils, a type of white blood cell; raises the risk of infection during chemotherapy.", "shortage of neutrophils", "tx", "rx", []],
    ["nevi", "NEE-vye", "Plural of nevus; moles or birthmarks.", "naevi (plural of naevus)", "lx", "pl", []],
    ["nevus", "NEE-vus", "Benign growth of pigment-producing cells of the skin; a mole or birthmark.", "mole", "nm", "ben", []],
    ["night sweats", "nite swets", "Heavy sweating during sleep; a sign of leukemia or lymphoma.", "heavy sweating at night", "sx", "sx", []],
    ["nipple discharge", "NIP-ul DIS-charj", "Fluid leaking from the nipple, especially bloody discharge from one breast; a warning sign of breast cancer.", "fluid leaking from the nipple", "sx", "sx", []],
    ["nipple retraction", "NIP-ul ree-TRAK-shun", "Pulling inward of the nipple caused by a tumor beneath it.", "nipple pulled inwards", "sx", "sx", []],
    ["non-Hodgkin lymphoma", "non-HOJ-kin lim-FOH-mah", "Large group of lymphomas of B or T cells without Reed-Sternberg cells.", "lymph malignancy without Reed-Sternberg cells", "nm", "heme", ["NHL"]],
    ["non-small cell lung cancer", "non-smawl sel lung KAN-ser", "Group of lung cancers that includes squamous cell carcinoma, adenocarcinoma and large cell carcinoma.", "lung malignancy of squamous, glandular or large cells", "nm", "mal", ["NSCLC"]],
    ["oncogene", "ONG-koh-jeen", "Mutated gene that pushes a cell to grow and divide without control.", "cancer-causing gene", "cl", "bio", []],
    ["oncogenic", "ong-koh-JEN-ik", "Causing or giving rise to tumors.", "tumour-causing", "cl", "bio", []],
    ["oncologist", "ong-KOL-oh-jist", "Physician who specializes in the diagnosis and treatment of cancer.", "tumour specialist", "lx", "sci", []],
    ["oncology", "ong-KOL-oh-jee", "Branch of medicine that studies, diagnoses and treats cancer.", "study of cancer", "lx", "sci", []],
    ["oncology nurse", "ong-KOL-oh-jee nurs", "Nurse who cares for people with cancer, gives chemotherapy and manages side effects.", "nurse caring for patients with tumours", "lx", "sci", []],
    ["orchiectomy", "or-kee-EK-toh-mee", "Surgical removal of one or both testicles.", "removal of a testis", "tx", "surg", []],
    ["osteoma", "os-tee-OH-mah", "Benign tumor of bone.", "benign bone tumour", "nm", "ben", []],
    ["osteosarcoma", "os-tee-oh-sar-KOH-mah", "Malignant tumor of bone; the most common bone cancer, usually in teenagers.", "malignant bone tumour", "nm", "mal", []],
    ["palliative", "PAL-ee-ah-tiv", "Relieving symptoms and improving quality of life without curing, such as pain control or shrinking a metastatic tumor.", "easing symptoms without a cure", "tx", "care", []],
    ["Pap smear", "pap smeer", "Cells swabbed from the cervix and examined to detect precancer and cancer of the cervix.", "cervical cell sample for dysplasia", "sx", "scr", []],
    ["papillary carcinoma", "PAP-ih-lair-ee kar-sih-NOH-mah", "Carcinoma with finger-like projections; the most common type of thyroid cancer.", "malignancy with finger-like projections, often thyroid", "nm", "mal", []],
    ["papilloma", "pap-ih-LOH-mah", "Benign tumor of epithelium that grows outward like a nipple or finger, such as a wart.", "wart-like benign tumour", "nm", "ben", []],
    ["paraneoplastic syndrome", "pair-ah-nee-oh-PLAS-tik SIN-drohm", "Signs and symptoms caused by substances a tumor makes, appearing far from the tumor itself.", "distant symptoms caused by tumour substances", "sx", "sx", []],
    ["pathologist", "pah-THOL-oh-jist", "Physician who examines biopsy tissue to make the cancer diagnosis and help determine its stage.", "specialist in disease and tissue diagnosis", "lx", "sci", []],
    ["peau d'orange", "poh doh-RAHNZH", "Thickened, dimpled breast skin that looks like orange peel, caused by blocked lymph vessels in advanced breast cancer.", "orange-peel skin", "sx", "sx", []],
    ["pediatric oncologist", "pee-dee-AT-rik ong-KOL-oh-jist", "Oncologist who treats cancer in children and adolescents.", "paediatric oncologist", "lx", "sci", []],
    ["peripheral blood stem cell transplantation", "peh-RIF-er-al blud stem sel trans-plan-TAY-shun", "Transplant of blood-forming stem cells collected from the bloodstream.", "stem cells collected from circulating blood", "tx", "rx", ["PBSCT"]],
    ["peripheral neuropathy", "peh-RIF-er-al noo-ROP-ah-thee", "Pain, numbness, tingling or weakness of the hands and feet; a sign of cancer or a side effect of chemotherapy.", "damage to nerves of the limbs", "sx", "sx", []],
    ["pneumonectomy", "noo-moh-NEK-toh-mee", "Surgical removal of an entire lung.", "removal of a whole lung", "tx", "surg", []],
    ["polyp", "POL-ip", "Benign growth projecting from the surface of a mucous membrane, most often in the colon and rectum.", "growth projecting from a mucous surface", "nm", "ben", []],
    ["polyps", "POL-ips", "Plural of polyp; growths projecting from a mucous membrane.", "growths from a mucous surface (plural)", "lx", "pl", []],
    ["poorly differentiated", "POOR-lee dif-er-EN-shee-ay-ted", "Describing tumor cells that look very different from normal cells; typical of malignant, high-grade tumors.", "cells look very unlike normal cells", "cl", "bio", []],
    ["port catheter", "port KATH-eh-ter", "Small device placed under the skin of the chest and joined to a large vein to give chemotherapy and draw blood.", "chemotherapy port", "tx", "surg", []],
    ["positron emission tomography", "POZ-ih-tron ee-MISH-un toh-MOG-rah-fee", "Imaging with a radioactive sugar that collects in active cancer cells; used for staging.", "PET scan", "dx", "img", ["PET"]],
    ["precancerous", "pree-KAN-ser-us", "Describing a condition that has a high likelihood of becoming cancer.", "likely to become malignant", "lx", "pl", []],
    ["primary tumor", "PRYE-mair-ee TOO-mer", "Original tumor at the site where the cancer began.", "primary tumour", "cl", "bio", []],
    ["progesterone receptor", "proh-JES-ter-ohn ree-SEP-ter", "Protein on breast cancer cells that binds progesterone; tested together with the estrogen receptor (ER/PR).", "binding site for the pregnancy hormone on tumour cells", "dx", "stg", ["PR"]],
    ["prognosis", "prog-NOH-sis", "Prediction of the likely course and outcome of a disease.", "expected outcome (prognosis)", "lx", "sci", []],
    ["proliferation", "proh-lif-er-AY-shun", "Rapid increase in the number of cells by division.", "rapid multiplication of cells", "cl", "bio", []],
    ["prophylactic", "proh-fih-LAK-tik", "Preventive; done to keep cancer from developing, such as removal of premalignant lesions.", "preventive", "tx", "care", []],
    ["prostate-specific antigen", "PROS-tayt speh-SIF-ik AN-tih-jen", "Blood test of a protein made by the prostate; high levels may be a sign of prostate cancer.", "blood marker of the prostate", "sx", "scr", ["PSA"]],
    ["prostatectomy", "pros-tah-TEK-toh-mee", "Surgical removal of part or all of the prostate.", "removal of the prostate", "tx", "surg", []],
    ["radiation oncologist", "ray-dee-AY-shun ong-KOL-oh-jist", "Oncologist who specializes in treating cancer with radiation therapy.", "specialist in radiotherapy", "lx", "sci", []],
    ["radiation therapy", "ray-dee-AY-shun THAIR-ah-pee", "Use of high-energy rays such as X-rays to kill cancer cells or slow their growth; also radiotherapy.", "treatment with high-energy rays", "tx", "rad", ["RT", "XRT"]],
    ["radioactive iodine", "ray-dee-oh-AK-tiv EYE-oh-dine", "Radioactive form of iodine (I-131) taken by mouth to destroy thyroid cancer cells.", "iodine-131 that destroys thyroid cells", "tx", "rad", ["RAI"]],
    ["radionuclide scanning", "ray-dee-oh-NOO-klide SKAN-ing", "Radioactive material is injected or swallowed and its radiation measured with a scanner; also called scintigraphy.", "nuclear scan", "dx", "img", []],
    ["radiosensitive", "ray-dee-oh-SEN-sih-tiv", "Describing cells or tumors that are easily damaged by radiation.", "easily damaged by rays", "tx", "rad", []],
    ["reconstructive surgery", "ree-kon-STRUK-tiv SER-jer-ee", "Surgery to restore the shape and function of a body part, such as breast reconstruction after mastectomy.", "restoring shape after surgery", "tx", "surg", []],
    ["recurrence", "ree-KUR-ens", "Cancer that has come back after treatment, at the same place or elsewhere.", "return of the disease after treatment", "tx", "care", []],
    ["Reed-Sternberg cell", "reed-STERN-berg sel", "Large abnormal cell with two nuclei that identifies Hodgkin lymphoma.", "large two-nucleus cell of Hodgkin disease", "nm", "heme", []],
    ["regional", "REE-jun-al", "Spread to nearby lymph nodes, tissues or organs.", "spread to nearby nodes or tissue", "dx", "stg", []],
    ["rehabilitative", "ree-hah-BIL-ih-tay-tiv", "Treatment that restores appearance and function, such as reconstructive surgery.", "rehabilitation", "tx", "care", []],
    ["relapse", "REE-laps", "Return of cancer after a period of improvement.", "disease coming back", "tx", "care", []],
    ["remission", "ree-MISH-un", "Decrease in or disappearance of signs and symptoms of cancer; complete remission means no detectable cancer.", "signs of the disease disappearing", "tx", "care", ["CR"]],
    ["resection", "ree-SEK-shun", "Surgical removal of part or all of an organ or of a tumor, including metastases in lung or liver.", "removal of part of an organ", "tx", "surg", []],
    ["retinoblastoma", "ret-ih-noh-blas-TOH-mah", "Malignant embryonic tumor of the retina of the eye in young children.", "embryonic eye tumour of children", "nm", "mal", []],
    ["rhabdomyoma", "rab-doh-mye-OH-mah", "Benign tumor of striated (skeletal or heart) muscle.", "benign striated muscle tumour", "nm", "ben", []],
    ["rhabdomyosarcoma", "rab-doh-mye-oh-sar-KOH-mah", "Malignant tumor of skeletal muscle; most common soft-tissue sarcoma in children.", "malignant striated muscle tumour", "nm", "mal", []],
    ["risk factor", "risk FAK-ter", "Anything that increases the chance of developing a disease, such as smoking for lung cancer.", "anything that raises the chance of disease", "lx", "sci", []],
    ["salpingo-oophorectomy", "sal-PING-goh-oh-of-oh-REK-toh-mee", "Surgical removal of the fallopian tubes and ovaries.", "removal of the uterine tubes and ovaries", "tx", "surg", []],
    ["sarcoma", "sar-KOH-mah", "Malignant tumor of connective and supportive tissue such as bone, cartilage, fat, muscle, vessels and fibrous tissue.", "cancer of connective tissue", "nm", "mal", []],
    ["sarcomata", "sar-KOH-mah-tah", "Classical plural of sarcoma; sarcomas is also accepted.", "sarcomas (Latin plural)", "lx", "pl", []],
    ["screening", "SKREEN-ing", "Testing healthy people without symptoms to find cancer or precancer early.", "testing healthy people for early disease", "sx", "scr", []],
    ["secondary tumor", "SEK-on-dair-ee TOO-mer", "Tumor formed by cancer cells that spread from the primary tumor.", "secondary tumour", "cl", "bio", []],
    ["seizure", "SEE-zher", "Sudden abnormal electrical activity of the brain; can be the first sign of a brain tumor.", "sudden electrical storm in the brain", "sx", "sx", []],
    ["seminoma", "sem-ih-NOH-mah", "Malignant germ cell tumor of the testis.", "germ cell malignancy of the testis", "nm", "mal", []],
    ["sentinel lymph node biopsy", "SEN-tih-nul limf node BYE-op-see", "Removal of the first lymph node(s) to which cancer is likely to spread, found with dye or a radioactive tracer.", "removing the first draining node", "dx", "bx", ["SLNB"]],
    ["sigmoidoscopy", "sig-moy-DOS-koh-pee", "Examination of the rectum and sigmoid colon with a scope.", "viewing the sigmoid colon with a scope", "dx", "bx", []],
    ["small cell lung cancer", "smawl sel lung KAN-ser", "Fast-growing lung cancer whose small round cells look like oats under the microscope; also oat cell cancer.", "fast-growing oat cell lung malignancy", "nm", "mal", ["SCLC"]],
    ["sputum cytology", "SPYOO-tum sye-TOL-oh-jee", "Microscopic examination of mucus coughed up from the lungs for cancer cells.", "examining cells in coughed-up mucus", "dx", "bx", []],
    ["squamous cell carcinoma", "SKWAY-mus sel kar-sih-NOH-mah", "Carcinoma of flat squamous cells of the skin and of the lining of the respiratory and digestive tracts, cervix and anus; also epidermoid carcinoma.", "cancer of flat surface cells", "nm", "mal", ["SCC"]],
    ["stage", "stayj", "Extent of cancer in the body: its size and how far it has spread.", "extent of a malignancy in the body", "dx", "stg", []],
    ["staging", "STAY-jing", "Process of finding out the size of the tumor and how far it has spread; guides treatment and prognosis.", "working out the size and spread of a tumour", "dx", "stg", []],
    ["stem cell transplant", "stem sel TRANS-plant", "Restoring blood-forming stem cells destroyed by high-dose chemotherapy or radiation; used mostly for leukemia and lymphoma.", "replacing blood-forming cells", "tx", "rx", []],
    ["supportive care", "suh-POR-tiv kair", "Care that prevents or treats symptoms and side effects, such as antiemetics, nutrition and access devices.", "easing side effects and maintaining comfort", "tx", "care", []],
    ["surgical margin", "SER-jih-kal MAR-jin", "Rim of normal tissue around a removed tumor; clear (negative) margins mean no cancer at the edge.", "rim of healthy tissue around a removed tumour", "dx", "bx", []],
    ["surgical oncologist", "SER-jih-kal ong-KOL-oh-jist", "Surgeon who specializes in biopsy and removal of tumors.", "surgeon who removes tumours", "lx", "sci", []],
    ["systemic radiation therapy", "sis-TEM-ik ray-dee-AY-shun THAIR-ah-pee", "Radioactive liquid swallowed or given into a vein that travels in the blood to cancer cells throughout the body.", "systemic radiotherapy", "tx", "rad", []],
    ["targeted therapy", "TAR-get-ed THAIR-ah-pee", "Drugs that attack specific molecules that help cancer cells grow, with less harm to normal cells.", "drug aimed at a specific growth molecule", "tx", "rx", []],
    ["teratoma", "ter-ah-TOH-mah", "Tumor of germ cells that can form many tissues such as hair, teeth, bone and muscle; may be benign or malignant.", "germ cell tumour with hair or teeth", "nm", "mal", []],
    ["thoracoscopy", "thor-ah-KOS-koh-pee", "Examination of the chest cavity with a scope inserted through a small cut between two ribs.", "scope examination of the chest cavity", "dx", "bx", []],
    ["thoracotomy", "thor-ah-KOT-oh-mee", "Larger incision between the ribs to open the chest and examine internal organs.", "incision into the chest", "dx", "bx", []],
    ["thrombocytopenia", "throm-boh-sye-toh-PEE-nee-ah", "Lower than normal number of platelets, causing easy bruising and bleeding; a side effect of some chemotherapy.", "shortage of platelets", "sx", "sx", []],
    ["thyroidectomy", "thye-roy-DEK-toh-mee", "Surgical removal of all or part of the thyroid gland.", "removal of the thyroid", "tx", "surg", []],
    ["TNM staging", "tee-en-em STAY-jing", "Staging system that describes the primary Tumor (T), regional lymph Nodes (N) and distant Metastasis (M).", "tumour, node and metastasis classification", "dx", "stg", ["TNM"]],
    ["transitional cell carcinoma", "tran-ZISH-un-al sel kar-sih-NOH-mah", "Carcinoma of the stretchy lining of the bladder, ureters and renal pelvis; also urothelial carcinoma.", "malignancy of the bladder lining", "nm", "mal", []],
    ["transrectal ultrasound", "tranz-REK-tal UL-trah-sownd", "Ultrasound probe placed in the rectum to examine the prostate and rectum.", "sound-wave scan through the rectum", "dx", "img", ["TRUS"]],
    ["tumor", "TOO-mer", "Abnormal mass of tissue that results from excessive cell division; may be benign or malignant.", "large lump", "lx", "sci", []],
    ["tumor board", "TOO-mer bord", "Meeting of specialists (oncologists, surgeons, pathologists, radiologists) who plan the treatment of each cancer patient together.", "tumour board (multidisciplinary team)", "lx", "sci", []],
    ["tumor marker", "TOO-mer MAR-ker", "Substance in blood or tissue made by a tumor; used to help diagnose cancer and follow treatment.", "tumour marker", "sx", "scr", []],
    ["tumor suppressor gene", "TOO-mer suh-PRES-er jeen", "Gene that normally slows cell division or repairs DNA; when it is lost or mutated, cancer can develop.", "tumour suppressor gene", "cl", "bio", []],
    ["ultraviolet radiation", "ul-trah-VYE-oh-let ray-dee-AY-shun", "Invisible rays from the sun and tanning beds; the main cause of skin cancer.", "ultraviolet light", "cl", "bio", ["UV"]],
    ["undifferentiated", "un-dif-er-EN-shee-ay-ted", "Describing cells that have no features of mature specialized cells.", "without features of mature cells", "cl", "bio", []],
    ["upper GI series", "UP-er jee-eye SEER-eez", "X-rays of the esophagus and stomach after drinking barium; also barium swallow.", "barium swallow X-ray", "dx", "img", ["UGI"]],
    ["urine cytology", "YOOR-in sye-TOL-oh-jee", "Microscopic examination of urine for abnormal cells to diagnose bladder or kidney cancer.", "examining cells in the urine", "dx", "bx", []],
    ["well differentiated", "wel dif-er-EN-shee-ay-ted", "Describing tumor cells that look much like normal cells of the tissue; typical of benign or low-grade tumors.", "cells closely resemble normal cells", "cl", "bio", []],
    ["Wilms tumor", "wilmz TOO-mer", "Malignant embryonic tumor of the kidney in children; an exception to the -blastoma naming rule (nephroblastoma).", "Wilms tumour (childhood kidney cancer)", "nm", "mal", []]
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/* مهار — واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها، تجزیه‌گر واژه و مولد سؤال‌ها
 * واژه‌ها از data-terms.js (ساخته‌شده با tools/build_data.py از فصل Cancer Medicine و واژه‌های پایه انکولوژی) می‌آیند؛
 * ریشه‌ها و اختصارها از همان فصل (جدول‌های ۲۰-۲، ۲۰-۷ و ۲۰-۸) گردآوری و دستی پالایش و تکمیل شده‌اند.
 * دنیاها: lx زبان سرطان (همه واژه‌ها) • cl سلول و رشد تومور • nm نام‌گذاری تومورها •
 * sx نشانه‌ها و غربالگری • dx تشخیص و مرحله‌بندی • tx درمان • * عمومی */
(function (root) {
  const EA = root.EA = root.EA || {};

  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const ROOTS_RAW = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', "without, lacking", '*'],
    ['ana-', ['ana'], 'backward, without', "backward, without", 'cl'],
    ['anti-', ['anti'], 'against', "against", 'tx'],
    ['brachy-', ['brachy'], 'short, near', "short, near", 'tx'],
    ['dys-', ['dys'], 'bad, painful, difficult, abnormal', "bad, difficult, abnormal", '*'],
    ['endo-', ['endo', 'end'], 'within, inner', "within", 'dx'],
    ['epi-', ['epi'], 'upon, above', "on, over", 'nm'],
    ['ex-', ['ex'], 'out, away from', "outside", 'tx'],
    ['hyper-', ['hyper'], 'excessive, above normal', "excessive", 'cl'],
    ['hypo-', ['hypo'], 'below, deficient', "below, deficient", 'sx'],
    ['in-', ['in'], 'in, into; not', "in; not", 'dx'],
    ['meta-', ['meta'], 'change, beyond', "change, beyond", 'cl'],
    ['neo-', ['neo'], 'new', "new", 'lx'],
    ['para-', ['para'], 'beside, near, abnormal', "beside, abnormal", 'sx'],
    ['peri-', ['peri'], 'around', "around", '*'],
    ['pre-', ['pre'], 'before', "before", 'sx'],
    ['pro-', ['pro'], 'before, forward', "before", 'tx'],
    ['trans-', ['trans'], 'across, through', "through, across", 'dx'],
    ['intra-', ['intra'], 'within', "within", '*'],
    // ریشه‌های سرطان و رشد
    ['onc/o', ['onc'], 'tumor', "tumour", 'lx'],
    ['carcin/o', ['carcin'], 'cancer (epithelial)', "cancer (of epithelial tissue)", 'lx'],
    ['sarc/o', ['sarc'], 'flesh, connective tissue', "flesh, connective tissue", 'nm'],
    ['cancer/o', ['cancer'], 'cancer', "cancer", 'lx'],
    ['plas/o', ['plas'], 'formation, growth', "formation, growth", 'cl'],
    ['blast/o', ['blast'], 'embryonic, immature cell', "immature, embryonic cell", 'nm'],
    ['cyt/o', ['cyt'], 'cell', "cell", 'cl'],
    ['hist/o', ['hist'], 'tissue', "tissue", 'lx'],
    ['gen/o', ['gen'], 'producing, origin', "producing, formation", 'cl'],
    ['mut/a', ['mut'], 'change', "change", 'cl'],
    ['path/o', ['path'], 'disease', "disease", 'lx'],
    ['necr/o', ['necr'], 'death', "death", 'cl'],
    ['apo-', ['apo'], 'away from, separation', "separate", 'cl'],
    ['angi/o', ['angi'], 'vessel', "vessel", 'nm'],
    ['hemangi/o', ['hemangi'], 'blood vessel', "blood vessel", 'nm'],
    ['lymphangi/o', ['lymphangi'], 'lymph vessel', "lymph vessel", 'nm'],
    // بافت‌ها و سلول‌ها در نام تومور
    ['aden/o', ['aden'], 'gland', "gland", 'nm'],
    ['chondr/o', ['chondr'], 'cartilage', "firm shock-absorbing connective tissue", 'nm'],
    ['fibr/o', ['fibr'], 'fiber, fibrous tissue', "fibre, fibrous tissue", 'nm'],
    ['lip/o', ['lip'], 'fat', "fat", 'nm'],
    ['my/o', ['my'], 'muscle', "muscle", 'nm'],
    ['leiomy/o', ['leiomy'], 'smooth muscle', "smooth muscle", 'nm'],
    ['rhabdomy/o', ['rhabdomy'], 'skeletal (striated) muscle', "striated muscle", 'nm'],
    ['oste/o', ['oste'], 'bone', "bone", 'nm'],
    ['neur/o', ['neur'], 'nerve', "nerve", 'nm'],
    ['gli/o', ['gli'], 'glue; glial cell', "glue; glial cell", 'nm'],
    ['astr/o', ['astr'], 'star', "star", 'nm'],
    ['mening/o', ['mening'], 'meninges', "membranes of the brain", 'nm'],
    ['melan/o', ['melan'], 'black, dark', "black, dark", 'nm'],
    ['papill/o', ['papill'], 'nipple-like projection', "nipple-like projection", 'nm'],
    ['squam/o', ['squam'], 'scale', "scale, squamous", 'nm'],
    ['bas/o', ['bas'], 'base', "Basics", 'nm'],
    ['epitheli/o', ['epitheli'], 'epithelium', "Epithelial tissue", 'nm'],
    ['mes/o', ['mes'], 'middle', "in the middle", 'nm'],
    ['thel/o, theli/o', ['theli', 'thel'], 'nipple; covering layer', "nipple; covering layer", 'nm'],
    ['terat/o', ['terat'], 'monster, malformation', "monster, malformation", 'nm'],
    ['retin/o', ['retin'], 'retina', "retina", 'nm'],
    ['medull/o', ['medull'], 'medulla, inner part', "medulla (inner part)", 'nm'],
    ['nephr/o', ['nephr'], 'kidney', "kidney", 'nm'],
    ['hepat/o', ['hepat'], 'liver', "liver", 'nm'],
    ['semin/o', ['semin'], 'semen', "semen", 'nm'],
    ['lymph/o', ['lymph'], 'lymph', "lymph", 'nm'],
    ['myel/o', ['myel'], 'bone marrow; spinal cord', "bone marrow; spinal cord", 'nm'],
    ['leuk/o', ['leuk'], 'white', "white", 'nm'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', "blood", '*'],
    ['thromb/o', ['thromb'], 'clot; platelet', "clot; platelet", 'sx'],
    ['neutr/o', ['neutr'], 'neutral; neutrophil', "neutral; neutrophil", 'tx'],
    // اندام‌ها در نشانه‌ها، تشخیص و جراحی
    ['mast/o, mamm/o', ['mast', 'mamm'], 'breast', "breast", 'dx'],
    ['hyster/o', ['hyster'], 'uterus', "uterus", 'tx'],
    ['metr/o, metri/o', ['metri', 'metr'], 'uterus', "uterus", 'dx'],
    ['oophor/o', ['oophor'], 'ovary', "ovary", 'tx'],
    ['salping/o', ['salping'], 'fallopian tube', "fallopian tube", 'tx'],
    ['orchi/o', ['orchi'], 'testis', "testis", 'tx'],
    ['prostat/o', ['prostat'], 'prostate', "prostate", 'tx'],
    ['cyst/o', ['cyst'], 'bladder; sac', "bladder; sac", 'dx'],
    ['ur/o', ['ur'], 'urine', "urine", 'sx'],
    ['pyel/o', ['pyel'], 'renal pelvis', "renal pelvis", 'dx'],
    ['laryng/o', ['laryng'], 'larynx', "voice box", 'dx'],
    ['pneumon/o', ['pneumon'], 'lung', "lung", 'tx'],
    ['lob/o', ['lob'], 'lobe', "lobe", 'tx'],
    ['bronch/o', ['bronch'], 'bronchus', "main airway of the lung", 'dx'],
    ['thorac/o', ['thorac'], 'chest', "the chest", 'dx'],
    ['esophag/o', ['esophag'], 'esophagus', "oesophagus", 'dx'],
    ['col/o, colon/o', ['colon', 'col'], 'colon', "large intestine", 'dx'],
    ['sigmoid/o', ['sigmoid'], 'sigmoid colon', "sigmoid colon", 'dx'],
    ['rect/o', ['rect'], 'rectum', "the straight final section of the large bowel", 'dx'],
    ['thyroid/o', ['thyroid'], 'thyroid gland', "thyroid", 'tx'],
    ['kerat/o', ['kerat'], 'horny tissue; cornea', "horny tissue", 'sx'],
    ['actin/o', ['actin'], 'ray (of the sun)', "ray (of the sun)", 'sx'],
    ['phag/o', ['phag'], 'eat, swallow', "eat, swallow", 'sx'],
    ['muc/o', ['muc'], 'mucus, mucous membrane', "mucus", 'tx'],
    ['tox/o', ['tox'], 'poison', "poison", 'tx'],
    ['cry/o', ['cry'], 'cold', "cold", 'tx'],
    ['radi/o', ['radi'], 'radiation, X-ray', "radiation", 'tx'],
    ['chem/o', ['chem'], 'drug, chemical', "drug, chemical", 'tx'],
    ['immun/o', ['immun'], 'immunity, protection', "immunity, protection", 'tx'],
    ['son/o', ['son'], 'sound', "sound", 'dx'],
    ['bi/o', ['bi'], 'life, living', "life, living", 'dx'],
    // پسوندها
    ['-oma', ['oma'], 'tumor, mass', "tumour, mass", '*'],
    ['-carcinoma', ['carcinoma'], 'malignant epithelial tumor', "cancer of epithelial tissue", 'nm'],
    ['-sarcoma', ['sarcoma'], 'malignant connective tissue tumor', "cancer of connective tissue", 'nm'],
    ['-blastoma', ['blastoma'], 'tumor of immature cells', "germ cell tumour", 'nm'],
    ['-plasm', ['plasm'], 'formation, growth', "growth, formation", 'lx'],
    ['-plasia', ['plasia'], 'development, formation', "growth, development", 'cl'],
    ['-stasis', ['stasis'], 'standing, stopping', "standing", 'cl'],
    ['-genesis', ['genesis'], 'origin, formation', "origin", 'cl'],
    ['-genic', ['genic'], 'producing, originating', "producing", 'cl'],
    ['-gen', ['gen'], 'agent that produces', "causing agent", 'cl'],
    ['-osis', ['osis'], 'abnormal condition', "abnormal condition", '*'],
    ['-ptosis', ['ptosis'], 'falling', "falling", 'cl'],
    ['-emia', ['emia'], 'blood condition', "blood condition", 'sx'],
    ['-uria', ['uria'], 'urine condition', "condition of urine", 'sx'],
    ['-ptysis', ['ptysis'], 'spitting', "spitting, sputum", 'sx'],
    ['-phagia', ['phagia'], 'eating, swallowing', "swallowing", 'sx'],
    ['-pnea', ['pnea'], 'breathing', "breathing", 'sx'],
    ['-penia', ['penia'], 'deficiency', "deficiency", 'sx'],
    ['-pathy', ['pathy'], 'disease', "disease", 'sx'],
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-edema', ['edema'], 'swelling', "swelling", 'sx'],
    ['-plakia', ['plakia'], 'patch, plate', "spot, plate", 'sx'],
    ['-logy', ['logy'], 'study of', "study of", 'lx'],
    ['-logist', ['logist'], 'specialist', "specialist", 'lx'],
    ['-scopy', ['scopy'], 'visual examination', "visual examination", 'dx'],
    ['-scope', ['scope'], 'instrument for viewing', "viewing instrument", 'dx'],
    ['-graphy', ['graphy'], 'process of recording', "process of recording an image", 'dx'],
    ['-gram', ['gram'], 'record, image', "image, record", 'dx'],
    ['-opsy', ['opsy'], 'view of', "viewing", 'dx'],
    ['-ectomy', ['ectomy'], 'excision, removal', "removal", 'tx'],
    ['-tomy', ['tomy'], 'incision, cutting into', "incision", 'tx'],
    ['-stomy', ['stomy'], 'new opening', "new opening", 'tx'],
    ['-therapy', ['therapy'], 'treatment', "treatment", 'tx'],
    ['-suppression', ['suppression'], 'holding back', "holding back", 'tx'],
    ['-emesis, -emetic', ['emetic', 'emesis'], 'vomiting', "vomiting", 'tx'],
    ['-toxic', ['toxic'], 'poisonous', "poisonous", 'tx'],
    ['-cyte', ['cyte'], 'cell', "cell", 'cl'],
    ['-ic, -al, -ar, -ous', ['ic', 'al', 'ar', 'ous'], 'pertaining to', "pertaining to", '*'],
    ['-tic', ['tic'], 'pertaining to', "pertaining to", '*'],
    ['-ia, -y', ['ia', 'y'], 'condition, process', "condition, process", '*'],
    ['-ion, -ation', ['ation', 'ion'], 'process', "process", '*'],
    ['-um', ['um'], 'structure, thing', "structure, thing", '*']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    // پایه و پرونده
    ['CA, Ca', 'cancer; carcinoma', "cancer; carcinoma", 'lx'],
    ['Dx', 'diagnosis', "diagnosis", 'lx'],
    ['Tx', 'treatment', "treatment", 'lx'],
    ['Bx', 'biopsy', "tissue sampling", 'lx'],
    ['Hx', 'history', "history", 'lx'],
    ['Sx', 'symptoms', "Symptoms", 'lx'],
    ['mets', 'metastases', "metastases", 'lx'],
    ['s/p', 'status post', "status post (an operation or treatment)", 'lx'],
    ['p.o.', 'by mouth (per os)', "by mouth", 'lx'],
    ['q.d.', 'every day (quaque die)', "once a day", 'lx'],
    ['F/U', 'follow-up', "follow-up", 'lx'],
    ['mCi', 'millicurie', "millicurie (unit of radioactivity)", 'lx'],
    ['NED', 'no evidence of disease', "no evidence of disease", 'lx'],
    // سلول و پیدایش سرطان
    ['DNA', 'deoxyribonucleic acid', "DNA (genetic material)", 'cl'],
    ['BRCA1/BRCA2', 'breast cancer gene 1 and 2', "breast cancer genes 1 and 2", 'cl'],
    ['HPV', 'human papillomavirus', "virus causing warts and cervical cancer", 'cl'],
    ['EBV', 'Epstein-Barr virus', "Epstein-Barr virus", 'cl'],
    ['UV', 'ultraviolet', "ultraviolet", 'cl'],
    // نام تومورها
    ['ALL', 'acute lymphocytic leukemia', "acute lymphocytic leukaemia", 'nm'],
    ['AML', 'acute myeloid leukemia', "acute myeloid leukaemia", 'nm'],
    ['CLL', 'chronic lymphocytic leukemia', "chronic lymphocytic leukaemia", 'nm'],
    ['CML', 'chronic myeloid leukemia', "chronic myeloid leukaemia", 'nm'],
    ['HL', 'Hodgkin lymphoma', "Hodgkin lymphoma", 'nm'],
    ['NHL', 'non-Hodgkin lymphoma', "non-Hodgkin lymphoma", 'nm'],
    ['MM', 'multiple myeloma', "cancer of plasma cells in the marrow", 'nm'],
    ['SCC', 'squamous cell carcinoma', "cancer of flat surface cells", 'nm'],
    ['BCC', 'basal cell carcinoma', "basal cell carcinoma", 'nm'],
    ['DCIS', 'ductal carcinoma in situ', "ductal carcinoma in situ of the breast", 'nm'],
    ['SCLC', 'small cell lung cancer', "small cell lung cancer", 'nm'],
    ['NSCLC', 'non-small cell lung cancer', "non-small cell lung cancer", 'nm'],
    // نشانه‌ها و غربالگری
    ['PSA', 'prostate-specific antigen', "prostate-specific antigen", 'sx'],
    ['FOBT', 'fecal occult blood test', "faecal occult blood test", 'sx'],
    ['gFOBT', 'guaiac fecal occult blood test', "guaiac faecal occult blood test", 'sx'],
    ['DRE', 'digital rectal examination', "digital rectal examination", 'sx'],
    ['BSE', 'breast self-examination', "breast self-examination", 'sx'],
    ['CEA', 'carcinoembryonic antigen', "carcinoembryonic antigen", 'sx'],
    ['AFP', 'alpha-fetoprotein', "fetal protein measured in pregnancy", 'sx'],
    ['FAP', 'familial adenomatous polyposis', "familial adenomatous polyposis", 'sx'],
    ['WBC', 'white blood cell; white blood cell count', "white blood cell; white blood cell count", 'sx'],
    ['RBC', 'red blood cell', "red blood cell", 'sx'],
    // تشخیص و مرحله‌بندی
    ['CBC', 'complete blood count', "complete blood count", 'dx'],
    ['CT, CAT', 'computed (axial) tomography', "CT scan", 'dx'],
    ['MRI', 'magnetic resonance imaging', "MRI scan", 'dx'],
    ['PET', 'positron emission tomography', "PET scan", 'dx'],
    ['IVP', 'intravenous pyelogram/pyelography', "intravenous pyelography", 'dx'],
    ['TRUS', 'transrectal ultrasound', "transrectal ultrasound", 'dx'],
    ['FNA', 'fine-needle aspiration', "fine-needle aspiration", 'dx'],
    ['SLNB', 'sentinel lymph node biopsy', "sentinel lymph node biopsy", 'dx'],
    ['ER/PR', 'estrogen receptor / progesterone receptor', "oestrogen / progesterone receptor", 'dx'],
    ['TNM', 'tumor, node, metastasis', "tumour, node, metastasis", 'dx'],
    ['CIS', 'carcinoma in situ', "cancer that has not spread", 'dx'],
    // درمان
    ['chemo', 'chemotherapy', "drug treatment of cancer", 'tx'],
    ['RT, XRT', 'radiation therapy', "treatment with radiation", 'tx'],
    ['BMT', 'bone marrow transplantation', "replacing diseased marrow with donor marrow", 'tx'],
    ['PBSCT', 'peripheral blood stem cell transplantation', "peripheral blood stem cell transplant", 'tx'],
    ['GVHD', 'graft-versus-host disease', "donor immune cells attacking the recipient", 'tx'],
    ['CSF', 'colony-stimulating factor', "colony-stimulating factor", 'tx'],
    ['G-CSF', 'granulocyte colony-stimulating factor', "granulocyte colony-stimulating factor", 'tx'],
    ['BCG', 'bacille Calmette-Guerin', "bacillus Calmette–Guérin (BCG vaccine)", 'tx'],
    ['LH-RH', 'luteinizing hormone-releasing hormone', "luteinising hormone-releasing hormone", 'tx'],
    ['MRM', 'modified radical mastectomy', "modified radical mastectomy", 'tx'],
    ['RAI', 'radioactive iodine', "radioactive iodine", 'tx'],
    ['I-131', 'iodine-131', "iodine-131 (radioactive)", 'tx'],
    ['MTX', 'methotrexate', "methotrexate", 'tx'],
    ['5-FU', '5-fluorouracil', "fluorouracil", 'tx'],
    ['CR', 'complete remission', "complete remission", 'tx'],
    ['TSH', 'thyroid-stimulating hormone', "thyroid-stimulating hormone", 'tx']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {};
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], c: r[5], ab: r[6] || [] }));
  /* ---------- دسته‌بندی واژه‌ها ----------
   * دسته هر واژه در داده‌ها (tools/terms) دستی تعیین شده است؛ این‌جا فقط نام و نماد دسته‌ها آمده است. */
  const CATS = [
    { id: 'sci', icon: '🎓', name: "Basic Terms and Specialties" },
    { id: 'bio', icon: '🔬', name: "The Cell and Tumour Growth" },
    { id: 'ben', icon: '🟢', name: "Benign Tumours" },
    { id: 'mal', icon: '🔴', name: "Malignant Tumours" },
    { id: 'heme', icon: '🩸', name: "Cancers of Blood and Lymph" },
    { id: 'sx', icon: '🔎', name: "Signs and findings" },
    { id: 'pre', icon: '⚠️', name: "Precancerous Lesions" },
    { id: 'scr', icon: '🧪', name: "Screening and Tests" },
    { id: 'bx', icon: '🔦', name: "Biopsy and Endoscopy" },
    { id: 'img', icon: '🩻', name: "Imaging" },
    { id: 'stg', icon: '📊', name: "Grade, Stage and Receptors" },
    { id: 'surg', icon: '✂️', name: "surgery" },
    { id: 'rad', icon: '☢️', name: "treatment with radiation" },
    { id: 'rx', icon: '💊', name: "Drugs and Systemic Treatment" },
    { id: 'care', icon: '🤝', name: "Treatment Approach and Outcome" },
    { id: 'pl', icon: '📚', name: "Adjectives and Plurals" }
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
  const WORLDS = ['lx', 'cl', 'nm', 'sx', 'dx', 'tx'];
  /* دنیای lx (زبان سرطان) از همه واژه‌ها، ریشه‌ها و اختصارها سؤال می‌سازد */
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
/* مهار — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با ایمنا، پیکر و تپش: زمینه سفید، گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی)،
 * سلول‌های طبیعی (گرد و منظم) و سرطانی (نامنظم با هسته بزرگ) و آدمک ساده (مانکن آناتومی) برای نقشه‌های بدن.
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
  const GOOD = '#2b8a3e', GOOD_BG = '#e6fcf5', BAD = '#c92a2a', BAD_BG = '#fff0f0', VIO = '#7048e8', VIO_BG = '#f3f0ff';
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

  /* ---------- زبان سرطان ---------- */
  /* آناتومی یک واژه: oste + sarc + oma */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="44" width="${w}" height="42" rx="11" fill="${bg}"/>${t(x + w / 2, 72, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 94 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 118, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 133, fa, { size: 10, fill: c })}`;
    return svg(360, 200, `${f(180, 24, "One word = root + root + suffix", { size: 11.5, fill: INK, w: 800 })}
      ${part(10, 74, 'oste', '#1c7ed6', '#e1effc')}${part(90, 66, 'sarc', '#c92a2a', '#fff0f0')}${part(162, 60, 'oma', '#2b8a3e', '#e6fcf5')}
      ${br(10, 84, "root", "bone", '#1c7ed6')}${br(90, 156, "root", "flesh, connective tissue", '#c92a2a')}${br(162, 222, "suffix", "tumour", '#2b8a3e')}
      <path d="M228 64 h10" stroke="${LINE}" stroke-width="2"/><rect x="242" y="38" width="112" height="56" rx="10" fill="${VIO_BG}"/>${f(298, 58, "malignant cancer", { size: 11, fill: BAD, w: 800 })}${f(298, 76, "connective tissue of bone", { size: 10.5, fill: INK, w: 800 })}
      <path d="M196 156 C150 182 92 182 48 156" stroke="${VIO}" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M52 152 l-6 4 l7 3" stroke="${VIO}" stroke-width="2" fill="none"/>
      ${f(180, 194, "Read the meaning from the end: suffix first, then the roots", { size: 10.5, fill: VIO, w: 700 })}`, "Anatomy of the word osteosarcoma");
  };

  /* خوش‌خیم در برابر بدخیم */
  A['benign-malignant'] = () => {
    const sh = 's' + (++UID);
    const ben = [[64, 74], [86, 66], [76, 92], [100, 88], [58, 100], [92, 110], [70, 116], [110, 68]].map(([x, y]) => cellN(x, y, 10, { c1: '#ebfbee', c2: '#8ce99a', st: '#2f9e44', nc: '#2b8a3e' })).join('');
    const mal = [[246, 84, 12], [270, 74, 10], [262, 104, 13], [290, 98, 11], [236, 110, 9], [300, 70, 8], [314, 112, 9], [284, 128, 10], [330, 90, 7]].map(([x, y, r], i) => cellC(x, y, r, i + 5)).join('');
    return svg(360, 280, `<defs>${shadow(sh)}</defs>
      ${card(184, 6, 170, 226, GOOD_BG, sh)}${card(6, 6, 170, 226, BAD_BG, sh)}
      <g transform="translate(178 0)"><ellipse cx="84" cy="92" rx="54" ry="40" fill="none" stroke="${GOOD}" stroke-width="3"/>${ben}
      ${t(84, 22, 'capsule', { size: 9.5, fill: GOOD })}${f(84, 36, "capsule", { size: 9, fill: GOOD })}
      ${lab(91, 158, 'benign', "not cancerous", { size: 13, fill: GOOD })}
      ${f(91, 192, "well differentiated • slow growth", { size: 9.5, fill: INK, w: 700 })}${f(91, 208, "pushes on its surroundings • no metastasis", { size: 9.5, fill: INK, w: 700 })}</g>
      <g transform="translate(-178 0)"><path d="M210 82 C232 52 270 46 300 60 C330 70 344 98 330 124 C312 150 270 150 246 138 C222 126 200 110 210 82Z" fill="#ffc9c9" opacity=".55"/>
      <path d="M330 120 q14 14 18 30 M216 128 q-10 18 -4 34 M300 140 q4 18 18 26" stroke="${BAD}" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-dasharray="3 3"/>
      ${mal}${cellC(346, 158, 6, 31)}${cellC(214, 168, 6, 37)}
      ${lab(269, 180, 'malignant', "cancerous and spreading", { size: 13, fill: BAD })}
      ${f(269, 212, "poorly differentiated • fast growth • invasion", { size: 9.5, fill: INK, w: 700 })}${f(269, 226, "metastasis through blood and lymph", { size: 9.5, fill: INK, w: 700 })}</g>
      ${f(180, 256, "Benign: a “ball in a bag” • Malignant: a “crab” with claws reaching outwards", { size: 10, fill: VIO, w: 700 })}`, "Benign and malignant tumours");
  };

  /* تیم درمان سرطان */
  A['onc-team'] = () => {
    const sh = 's' + (++UID);
    const icons = {
      chemo: (x, y) => `<rect x="${x - 6}" y="${y - 14}" width="12" height="22" rx="3" fill="#fff" stroke="${VIO}" stroke-width="2"/><rect x="${x - 4}" y="${y - 4}" width="8" height="10" fill="#b197fc"/><path d="M${x} ${y + 8} v8" stroke="${VIO}" stroke-width="2"/>`,
      knife: (x, y) => `<path d="M${x - 12} ${y + 10} L${x + 10} ${y - 12} L${x + 13} ${y - 9} L${x - 6} ${y + 12}Z" fill="#adb5bd" stroke="#495057" stroke-width="1.4"/><rect x="${x - 16}" y="${y + 6}" width="10" height="6" rx="2" transform="rotate(-45 ${x - 11} ${y + 9})" fill="#495057"/>`,
      ray: (x, y) => `<circle cx="${x}" cy="${y}" r="4" fill="#f59f00"/>${[0, 120, 240].map(a => `<path d="M${x} ${y} L${(x + 14 * Math.cos((a - 90) * Math.PI / 180)).toFixed(1)} ${(y + 14 * Math.sin((a - 90) * Math.PI / 180)).toFixed(1)} A14 14 0 0 1 ${(x + 14 * Math.cos((a - 30) * Math.PI / 180)).toFixed(1)} ${(y + 14 * Math.sin((a - 30) * Math.PI / 180)).toFixed(1)}Z" fill="#f59f00"/>`).join('')}`,
      micro: (x, y) => `<path d="M${x - 4} ${y - 14} h8 l-2 14 h-4z" fill="#1c7ed6"/><path d="M${x + 2} ${y} q10 2 8 14 h-18" stroke="#1c7ed6" stroke-width="3" fill="none"/><rect x="${x - 12}" y="${y + 12}" width="22" height="4" rx="2" fill="#1c7ed6"/>`,
      scan: (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="none" stroke="#0c8599" stroke-width="4"/><rect x="${x - 15}" y="${y - 2}" width="30" height="4" rx="2" fill="#0c8599"/>`,
      nurse: (x, y) => `<rect x="${x - 12}" y="${y - 12}" width="24" height="24" rx="5" fill="#fff" stroke="#e64980" stroke-width="2"/><path d="M${x} ${y - 7} v14 M${x - 7} ${y} h14" stroke="#e64980" stroke-width="4"/>`
    };
    const spots = [[180, 38, 'medical oncologist', "Chemotherapy and drugs", 'chemo'], [308, 92, 'radiation oncologist', "treatment with radiation", 'ray'], [292, 196, 'pathologist', "Diagnosis under the microscope", 'micro'],
      [180, 248, 'oncology nurse', "Care and drugs", 'nurse'], [68, 196, 'radiologist', "Imaging", 'scan'], [52, 92, 'surgical oncologist', "removal of a tumour", 'knife']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs><circle cx="180" cy="142" r="104" fill="none" stroke="#d0bfff" stroke-width="2" stroke-dasharray="5 5"/>
      <circle cx="180" cy="142" r="34" fill="${VIO_BG}" filter="url(#${sh})"/>${f(180, 140, "Patient", { size: 11, fill: VIO, w: 800 })}${t(180, 156, 'tumor board', { size: 9, fill: MUTED })}
      ${spots.map(([x, y, en, fa, ic]) => `<circle cx="${x}" cy="${y - 12}" r="21" fill="#fff" filter="url(#${sh})"/>${icons[ic](x, y - 12)}${t(x, y + 22, en, { size: 9.5, fill: INK, w: 800 })}${f(x, y + 35, fa, { size: 9 })}`).join('')}`, "The cancer care team");
  };

  /* مفرد و جمع واژه‌های سرطان */
  A.plurals = () => {
    const rows = [['-is', '-es', 'metastasis', 'metastases'], ['-is', '-es', 'diagnosis', 'diagnoses'], ['-is', '-es', 'prognosis', 'prognoses'], ['-us', '-i', 'nevus', 'nevi'],
      ['-oma', '-omata', 'carcinoma', 'carcinomata'], ['-oma', '-omata', 'sarcoma', 'sarcomata'], ['-oma', '-omata', 'leiomyoma', 'leiomyomata'], ['+ s', '+ s', 'polyp', 'polyps']];
    const cell = i => { const c = i < 4 ? 0 : 1, r = i % 4, x = 8 + c * 176, y = 32 + r * 44; const R = rows[i];
      return `<rect x="${x}" y="${y}" width="168" height="38" rx="10" fill="${['#eef2ff', '#fff0f6'][c]}"/>${pill(x + 4, y + 9, 84, 20, '#fff')}${t(x + 46, y + 23, R[0] === '+ s' ? '+ s' : `${R[0]} → ${R[1]}`, { size: 9, fill: VIO, w: 900 })}${t(x + 93, y + 16, R[2], { size: 9, anchor: 'start', fill: MUTED, w: 700 })}${t(x + 93, y + 31, R[3], { size: 10.5, anchor: 'start', fill: INK, w: 900 })}`; };
    return svg(360, 214, `${f(180, 20, "Singular and plural: the word ending decides the plural rule", { size: 11, fill: INK, w: 700 })}${rows.map((_, i) => cell(i)).join('')}`, "Singular and plural of cancer terms");
  };

  /* سه پسوند جراحی: -ectomy، -tomy، -stomy */
  A['ectomy-tomy-stomy'] = () => {
    const sh = 's' + (++UID);
    const box = (x, c, bg, suf, fa, ex, exfa, icon) => `${card(x, 8, 112, 194, bg, sh)}${icon}${t(x + 56, 118, suf, { size: 17, fill: c, w: 900 })}${f(x + 56, 138, fa, { size: 10.5, fill: INK, w: 800 })}${t(x + 56, 166, ex, { size: 10, fill: c, w: 800 })}${f(x + 56, 182, exfa, { size: 9 })}`;
    const organ = (x, cut) => `<ellipse cx="${x + 56}" cy="62" rx="34" ry="26" fill="#ffc9c9" stroke="#e03131" stroke-width="1.6"/>${cut}`;
    return svg(360, 236, `<defs>${shadow(sh)}</defs>
      ${box(244, '#c92a2a', '#fff0f0', '-ectomy', "removal", 'mastectomy', "removal of the breast", `<ellipse cx="300" cy="62" rx="34" ry="26" fill="none" stroke="#e03131" stroke-width="1.6" stroke-dasharray="4 3"/><path d="M286 50 l28 24 M314 50 l-28 24" stroke="#c92a2a" stroke-width="3" stroke-linecap="round"/>`)}
      ${box(124, '#1c7ed6', '#e7f5ff', '-tomy', "incision", 'thoracotomy', "cutting into the chest", organ(124, `<path d="M150 62 h60" stroke="#1c7ed6" stroke-width="3" stroke-dasharray="6 3"/>`))}
      ${box(4, '#2b8a3e', '#ebfbee', '-stomy', "making an opening", 'colostomy', "opening of the colon on the abdomen", organ(4, `<circle cx="60" cy="62" r="9" fill="#fff" stroke="#2b8a3e" stroke-width="3"/>`))}
      ${f(180, 224, "Removing, cutting or making an opening? The suffix tells you", { size: 10, fill: VIO, w: 700 })}`, "Surgical suffixes");
  };

  /* ---------- سلول و رشد تومور ---------- */
  /* تقسیم مهارشده و بی‌مهار: سلول طبیعی با رسیدن به همسایه می‌ایستد؛ سلول سرطانی روی هم انباشته می‌شود */
  A['cell-division'] = () => {
    const sh = 's' + (++UID);
    const normal = [0, 1, 2, 3, 4, 5].map(i => cellN(214 + i * 23, 118, 11)).join('');
    const pile = [[34, 122, 11], [56, 124, 10], [78, 121, 11], [100, 123, 10], [122, 122, 11], [146, 124, 10], [44, 102, 10], [68, 100, 11], [92, 104, 10], [116, 101, 11], [140, 104, 9],
      [56, 82, 10], [82, 80, 11], [106, 84, 10], [130, 82, 9], [70, 62, 9], [96, 60, 10], [120, 64, 8]].map(([x, y, r], i) => cellC(x, y, r, i + 3)).join('');
    return svg(360, 250, `<defs>${shadow(sh)}</defs>
      ${card(184, 8, 170, 196, GOOD_BG, sh)}${card(6, 8, 170, 196, BAD_BG, sh)}
      ${t(269, 30, 'normal cells', { size: 11, fill: GOOD, w: 900 })}${f(269, 46, "a normal cell", { size: 10, fill: GOOD })}
      <path d="M196 134 H342" stroke="#868e96" stroke-width="2"/>${normal}
      <path d="M232 90 l12 12 M244 90 l-12 12" stroke="${GOOD}" stroke-width="2.4" stroke-linecap="round"/>${f(292, 98, "Space is full; stop!", { size: 9.5, fill: GOOD, w: 800 })}
      ${f(269, 160, "one orderly layer", { size: 10, fill: INK, w: 800 })}${f(269, 176, "dividing only as needed", { size: 9.5 })}${f(269, 192, "old cell: apoptosis", { size: 9.5 })}
      ${t(91, 30, 'cancer cells', { size: 11, fill: BAD, w: 900 })}${f(91, 46, "cancer cell", { size: 10, fill: BAD })}
      <path d="M18 134 H164" stroke="#868e96" stroke-width="2"/>${pile}
      ${f(91, 160, "piled up and disorderly", { size: 10, fill: INK, w: 800 })}${f(91, 176, "uncontrolled division", { size: 9.5 })}${f(91, 192, "escaping apoptosis", { size: 9.5 })}
      ${f(180, 232, "Cancer is division that no longer has “brakes”", { size: 10.5, fill: VIO, w: 700 })}`, "Normal and cancerous cell division");
  };

  /* از بافت طبیعی تا سرطان مهاجم: پنج پله در بافت پوششی */
  A['plasia-steps'] = () => {
    const W = 68, Y = 34, mk = 'm' + (++UID);
    const step = (i, en, fa, draw) => { const x = 4 + i * 71; return `<rect x="${x}" y="${Y}" width="${W}" height="128" rx="10" fill="#fff" stroke="#dee2e6"/>${draw(x)}<path d="M${x + 2} ${Y + 92} H${x + W - 2}" stroke="#495057" stroke-width="2" stroke-dasharray="${i === 0 ? '5 4' : '0'}"/>
      <rect x="${x + 2}" y="${Y + 94}" width="${W - 4}" height="32" rx="6" fill="#ffe8cc" opacity=".7"/>${t(x + W / 2, Y + 148, en, { size: 9, fill: INK, w: 900 })}${f(x + W / 2, Y + 162, fa, { size: 8.8 })}`; };
    const row = (x, n, y, fn) => Array.from({ length: n }, (_, k) => fn(x + 8 + k * (52 / (n - 1 || 1)), y, k)).join('');
    const nrm = x => row(x, 4, Y + 80, (cx, cy) => cellN(cx, cy, 7.5)) + row(x, 4, Y + 64, (cx, cy) => cellN(cx, cy, 6.5));
    const hyp = x => row(x, 5, Y + 82, (cx, cy) => cellN(cx, cy, 6)) + row(x, 5, Y + 69, (cx, cy) => cellN(cx, cy, 6)) + row(x, 5, Y + 56, (cx, cy) => cellN(cx, cy, 6)) + row(x, 4, Y + 43, (cx, cy) => cellN(cx, cy, 6));
    const dys = x => row(x, 4, Y + 80, (cx, cy, k) => (k % 2 ? cellC(cx, cy, 7, k + 2, { c1: '#fff3bf', c2: '#ffd43b', st: '#e67700', nc: '#a61e4d' }) : cellN(cx, cy, 7))) + row(x, 4, Y + 64, (cx, cy) => cellN(cx, cy, 6.5)) + row(x, 3, Y + 50, (cx, cy) => cellN(cx, cy, 6));
    const cis = x => row(x, 4, Y + 80, (cx, cy, k) => cellC(cx, cy, 7.5, k + 9)) + row(x, 4, Y + 64, (cx, cy, k) => cellC(cx, cy, 7, k + 14)) + row(x, 3, Y + 49, (cx, cy, k) => cellC(cx, cy, 6.5, k + 20));
    const inv = x => cis(x) + [[x + 18, Y + 104], [x + 36, Y + 116], [x + 52, Y + 106]].map(([cx, cy], k) => cellC(cx, cy, 7, k + 30)).join('');
    return svg(360, 236, `${f(180, 20, "Steps of cell change in epithelial tissue", { size: 11, fill: INK, w: 800 })}
      ${step(4, 'normal', "normal", nrm)}${step(3, 'hyperplasia', "more cells", hyp)}${step(2, 'dysplasia', "misshapen cells", dys)}${step(1, 'in situ', "cancer in situ", cis)}${step(0, 'invasive', "invasive", inv)}
      <defs>${marker(mk, VIO)}</defs><path d="M346 210 H18" stroke="${VIO}" stroke-width="2.2" marker-end="url(#${mk})"/>
      ${f(180, 228, "Dashed line: basement membrane; crossing it means invasive cancer", { size: 9, fill: VIO, w: 700 })}`, "From normal tissue to invasive cancer");
  };

  /* تمایز: خوب، متوسط، کم (درجه ۱ تا ۳) */
  A.differentiation = () => {
    const sh = 's' + (++UID);
    const col = (x, c, bg, en, fa, g, cells) => `${card(x, 8, 112, 190, bg, sh)}${cells}${t(x + 56, 140, en, { size: 10.5, fill: c, w: 900 })}${f(x + 56, 156, fa, { size: 10, fill: INK, w: 800 })}${pill(x + 26, 166, 60, 22, '#fff')}${t(x + 56, 181, g, { size: 10.5, fill: c, w: 900 })}`;
    const grid = (x, fn) => [0, 1, 2].map(r => [0, 1, 2].map(c => fn(x + 26 + c * 30, 36 + r * 30, r * 3 + c)).join('')).join('');
    return svg(360, 230, `<defs>${shadow(sh)}</defs>
      ${col(244, GOOD, GOOD_BG, 'well differentiated', "well differentiated", 'grade 1', grid(244, (x, y) => cellN(x, y, 12, { c1: '#ebfbee', c2: '#8ce99a', st: '#2f9e44', nc: '#2b8a3e' })))}
      ${col(124, '#e67700', '#fff9db', 'moderately', "moderately differentiated", 'grade 2', grid(124, (x, y, i) => (i % 3 === 1 ? cellC(x, y, 12, i + 4, { c1: '#fff3bf', c2: '#ffd43b', st: '#e67700', nc: '#a61e4d' }) : cellN(x, y, 12, { c1: '#fff9db', c2: '#ffe066', st: '#f59f00', nc: '#e67700' }))))}
      ${col(4, BAD, BAD_BG, 'poorly differentiated', "poorly differentiated", 'grade 3', grid(4, (x, y, i) => cellC(x, y, 12, i + 7)))}
      ${f(180, 218, "The more a cell resembles a normal cell, the lower the grade", { size: 9.5, fill: VIO, w: 700 })}`, "Differentiation and tumour grade");
  };

  /* انکوژن و ژن سرکوبگر تومور: پدال گاز و ترمز */
  A['gas-brake'] = () => {
    const sh = 's' + (++UID);
    const pedal = (x, c, label) => `<rect x="${x}" y="58" width="56" height="76" rx="10" fill="${c}" filter="url(#${sh})"/>${[0, 1, 2, 3].map(i => `<rect x="${x + 8}" y="${68 + i * 16}" width="40" height="7" rx="3" fill="#fff" opacity=".35"/>`).join('')}${t(x + 28, 150, label, { size: 10, fill: c, w: 900 })}`;
    return svg(360, 250, `<defs>${shadow(sh)}</defs>
      ${card(184, 8, 170, 196, BAD_BG)}${card(6, 8, 170, 196, '#e7f5ff')}
      ${t(269, 30, 'oncogene', { size: 12, fill: BAD, w: 900 })}${f(269, 46, "oncogene", { size: 10, fill: BAD })}
      ${pedal(242, '#e03131', 'GAS')}
      ${f(269, 172, "a stuck accelerator pedal", { size: 10, fill: INK, w: 800 })}${f(269, 188, "the cell keeps getting the order to divide", { size: 9.5 })}
      ${t(91, 30, 'tumor suppressor gene', { size: 11, fill: '#1c7ed6', w: 900 })}${f(91, 46, "tumour suppressor gene", { size: 10, fill: '#1c7ed6' })}
      ${pedal(63, '#1c7ed6', 'BRAKE')}<path d="M54 64 L130 132" stroke="#c92a2a" stroke-width="5" stroke-linecap="round"/>
      ${f(91, 172, "broken brakes, such as BRCA1", { size: 10, fill: INK, w: 800 })}${f(91, 188, "division no longer stops", { size: 9.5 })}
      ${f(180, 232, "A mutation in either group of genes drives the cell towards cancer", { size: 10, fill: VIO, w: 700 })}`, "Oncogenes and tumour suppressor genes");
  };

  /* عامل‌های خطر و سرطان‌زاها */
  A.carcinogens = () => {
    const sh = 's' + (++UID);
    const ic = {
      smoke: (x, y) => `<rect x="${x - 22}" y="${y + 2}" width="38" height="8" rx="2" fill="#f1f3f5" stroke="#868e96"/><rect x="${x + 12}" y="${y + 2}" width="8" height="8" fill="#f76707"/><path d="M${x + 20} ${y - 2} q6 -8 0 -14 q-6 -6 2 -12" stroke="#adb5bd" stroke-width="2.4" fill="none"/>`,
      sun: (x, y) => `<circle cx="${x}" cy="${y}" r="9" fill="#fcc419"/>${Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return `<path d="M${(x + 13 * Math.cos(a)).toFixed(1)} ${(y + 13 * Math.sin(a)).toFixed(1)} L${(x + 18 * Math.cos(a)).toFixed(1)} ${(y + 18 * Math.sin(a)).toFixed(1)}" stroke="#fab005" stroke-width="2.4" stroke-linecap="round"/>`; }).join('')}`,
      rad: (x, y) => `<circle cx="${x}" cy="${y}" r="16" fill="#fff3bf"/><circle cx="${x}" cy="${y}" r="3.5" fill="#212529"/>${[0, 120, 240].map(a => `<path d="M${x} ${y} L${(x + 13 * Math.cos((a - 90) * Math.PI / 180)).toFixed(1)} ${(y + 13 * Math.sin((a - 90) * Math.PI / 180)).toFixed(1)} A13 13 0 0 1 ${(x + 13 * Math.cos((a - 30) * Math.PI / 180)).toFixed(1)} ${(y + 13 * Math.sin((a - 30) * Math.PI / 180)).toFixed(1)}Z" fill="#212529"/>`).join('')}`,
      chem: (x, y) => `<path d="M${x - 5} ${y - 16} h10 v10 l10 18 q2 6 -4 6 h-22 q-6 0 -4 -6 l10 -18z" fill="#d3f9d8" stroke="#2b8a3e" stroke-width="1.6"/><path d="M${x - 12} ${y + 8} h24" stroke="#2b8a3e" stroke-width="2"/>`,
      virus: (x, y) => `<circle cx="${x}" cy="${y}" r="11" fill="#d0bfff" stroke="#7048e8" stroke-width="1.6"/>${Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return `<path d="M${(x + 11 * Math.cos(a)).toFixed(1)} ${(y + 11 * Math.sin(a)).toFixed(1)} L${(x + 16 * Math.cos(a)).toFixed(1)} ${(y + 16 * Math.sin(a)).toFixed(1)}" stroke="#7048e8" stroke-width="2"/><circle cx="${(x + 17 * Math.cos(a)).toFixed(1)}" cy="${(y + 17 * Math.sin(a)).toFixed(1)}" r="2.4" fill="#7048e8"/>`; }).join('')}`,
      dna: (x, y) => `<path d="M${x - 8} ${y - 16} C${x + 12} ${y - 8} ${x - 12} ${y + 8} ${x + 8} ${y + 16}" stroke="#1c7ed6" stroke-width="3" fill="none"/><path d="M${x + 8} ${y - 16} C${x - 12} ${y - 8} ${x + 12} ${y + 8} ${x - 8} ${y + 16}" stroke="#e64980" stroke-width="3" fill="none"/>${[-10, -3, 4, 11].map(d => `<path d="M${x - 5} ${y + d} h10" stroke="#adb5bd" stroke-width="1.6"/>`).join('')}`,
      drink: (x, y) => `<path d="M${x - 12} ${y - 14} h24 l-4 28 h-16z" fill="#fff3bf" stroke="#e67700" stroke-width="1.6"/><path d="M${x - 10} ${y - 4} h20" stroke="#e67700" stroke-width="1.4"/>`,
      age: (x, y) => `<circle cx="${x}" cy="${y}" r="15" fill="#fff" stroke="#495057" stroke-width="2"/><path d="M${x} ${y - 9} V${y} L${x + 7} ${y + 5}" stroke="#495057" stroke-width="2.4" stroke-linecap="round" fill="none"/>`
    };
    const tiles = [['smoke', 'tobacco', "tobacco"], ['sun', 'UV light', "ultraviolet light"], ['rad', 'radiation', "ionising radiation"], ['chem', 'chemicals', "chemicals, asbestos"],
      ['virus', 'viruses', "HPV, EBV, hepatitis"], ['dna', 'heredity', "inherited BRCA mutation"], ['drink', 'alcohol', "alcohol"], ['age', 'aging', "increasing age"]];
    return svg(360, 272, `<defs>${shadow(sh)}</defs>${f(180, 20, "Cancer risk factors", { size: 11, fill: INK, w: 800 })}
      ${tiles.map(([k, en, fa], i) => { const c = 3 - (i % 4), r = Math.floor(i / 4), x = 6 + c * 88, y = 32 + r * 110; return `${card(x, y, 82, 102, '#fff', sh)}${ic[k](x + 41, y + 34)}${t(x + 41, y + 74, en, { size: 10, fill: INK, w: 900 })}${f(x + 41, y + 90, fa, { size: 9 })}`; }).join('')}
      ${f(180, 264, "Most cancers result from several mutations over the years", { size: 10, fill: VIO, w: 700 })}`, "Cancer risk factors");
  };

  /* راه‌های گسترش: تهاجم موضعی، لنف، خون */
  A['metastasis-routes'] = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID), sh = 's' + (++UID);
    const tumor = [[116, 120, 13], [136, 112, 11], [128, 136, 12], [104, 140, 10], [148, 132, 9], [120, 100, 9]].map(([x, y, r], i) => cellC(x, y, r, i + 40)).join('');
    return svg(360, 300, `<defs>${marker(a, '#1c7ed6')}${marker(b, '#2b8a3e')}${shadow(sh)}</defs>
      <rect x="10" y="54" width="190" height="150" rx="18" fill="#fff4e6"/>${t(40, 76, 'organ', { size: 9.5, fill: '#d9480f', anchor: 'start' })}${f(40, 90, "primary organ", { size: 9, anchor: 'start', fill: '#d9480f' })}
      ${tumor}${t(126, 172, 'primary tumor', { size: 10, fill: BAD, w: 900 })}${f(126, 186, "primary tumour", { size: 9.5, fill: BAD })}
      <path d="M92 132 q-22 -2 -40 14 M96 150 q-14 16 -40 18" stroke="${BAD}" stroke-width="2.6" fill="none" stroke-dasharray="3 3"/>${f(18, 120, "1 local invasion", { size: 9, fill: BAD, w: 800, anchor: 'start' })}
      <path d="M200 92 C240 88 266 70 300 66" stroke="#2b8a3e" stroke-width="7" fill="none" opacity=".25"/><path d="M152 104 C176 96 200 92 232 84 C262 76 280 70 296 66" stroke="#2b8a3e" stroke-width="2.4" fill="none" stroke-dasharray="5 4" marker-end="url(#${b})"/>
      <ellipse cx="314" cy="62" rx="20" ry="13" fill="#b2f2bb" stroke="#2b8a3e" stroke-width="1.6"/>${cellC(314, 62, 6, 51)}
      ${t(312, 30, 'lymph node', { size: 9.5, fill: '#2b8a3e', w: 900 })}${f(312, 44, "2 through the lymph", { size: 9, fill: '#2b8a3e', w: 800 })}
      <path d="M152 150 C196 170 240 196 262 230" stroke="#c92a2a" stroke-width="9" fill="none" opacity=".18"/><path d="M152 150 C196 170 238 194 258 226" stroke="#1c7ed6" stroke-width="2.4" fill="none" stroke-dasharray="5 4" marker-end="url(#${a})"/>
      ${f(232, 170, "3 through the blood", { size: 9, fill: '#1c7ed6', w: 800 })}
      ${card(208, 232, 146, 62, '#fff', sh)}${t(281, 250, 'distant metastasis', { size: 9.5, fill: '#1c7ed6', w: 900 })}${f(281, 266, "liver, lung, bone, brain", { size: 9.5, fill: INK, w: 800 })}${f(281, 282, "keeps the name of the primary tumour", { size: 9 })}
      ${f(100, 236, "meta = change • stasis = standing", { size: 10, fill: VIO, w: 800 })}${f(100, 254, "The cell changes place and “stands” in a new spot", { size: 9.5, fill: VIO })}
      ${f(100, 278, "Angiogenesis builds the blood route", { size: 9, fill: MUTED })}`, "Routes of cancer spread");
  };

  /* ---------- نام‌گذاری تومورها ---------- */
  /* نقشه بافت ← نام سرطان */
  A['tissue-map'] = () => {
    const sh = 's' + (++UID), a = 'm' + (++UID);
    const icon = {
      epi: (x, y) => [0, 1, 2, 3].map(i => `<rect x="${x - 24 + i * 12.5}" y="${y - 10}" width="11" height="20" rx="3" fill="#ffd8a8" stroke="#e8590c" stroke-width="1"/><circle cx="${x - 18.5 + i * 12.5}" cy="${y + 2}" r="2.6" fill="#d9480f"/>`).join(''),
      con: (x, y) => `<rect x="${x - 24}" y="${y - 12}" width="48" height="24" rx="8" fill="#e7f5ff" stroke="#1c7ed6" stroke-width="1.2"/>${[0, 1, 2].map(i => `<path d="M${x - 20} ${y - 6 + i * 6} q12 -5 24 0 t20 0" stroke="#74c0fc" stroke-width="1.6" fill="none"/>`).join('')}<circle cx="${x - 8}" cy="${y - 2}" r="2.4" fill="#1971c2"/><circle cx="${x + 10}" cy="${y + 4}" r="2.4" fill="#1971c2"/>`,
      blood: (x, y) => `<circle cx="${x - 12}" cy="${y}" r="8" fill="#ffc9c9" stroke="#e03131"/><circle cx="${x + 6}" cy="${y - 4}" r="9" fill="#f3d9fa" stroke="#9c36b5"/><circle cx="${x + 7}" cy="${y - 4}" r="4" fill="#9c36b5"/><circle cx="${x + 18}" cy="${y + 8}" r="3" fill="#e03131"/>`,
      lym: (x, y) => `<ellipse cx="${x}" cy="${y}" rx="20" ry="12" fill="#d3f9d8" stroke="#2b8a3e" stroke-width="1.4"/><path d="M${x - 34} ${y - 6} L${x - 20} ${y - 2} M${x + 20} ${y + 2} L${x + 34} ${y + 6}" stroke="#2b8a3e" stroke-width="2"/><circle cx="${x - 5}" cy="${y}" r="3" fill="#2b8a3e"/><circle cx="${x + 6}" cy="${y - 3}" r="3" fill="#2b8a3e"/>`,
      emb: (x, y) => `<path d="M${x + 6} ${y - 12} C${x + 22} ${y - 10} ${x + 20} ${y + 12} ${x + 2} ${y + 12} C${x - 14} ${y + 12} ${x - 18} ${y - 4} ${x - 6} ${y - 6} C${x} ${y - 7} ${x - 2} ${y - 13} ${x + 6} ${y - 12}Z" fill="#fff3bf" stroke="#e67700" stroke-width="1.4"/><circle cx="${x + 6}" cy="${y - 2}" r="3" fill="#e67700"/>`
    };
    const rows = [['epi', 'epithelium', "Epithelial tissue", 'carcinoma', "cancer of epithelial tissue", '#d9480f', '#fff4e6'], ['con', 'connective tissue', "bone, cartilage, fat", 'sarcoma', "sarcoma", '#1971c2', '#e7f5ff'],
      ['blood', 'bone marrow', "blood-forming cells", 'leukemia', "leukaemia", '#9c36b5', '#f8f0fc'], ['lym', 'lymph tissue', "lymphocytes and lymph nodes", 'lymphoma', "lymphoma", '#2b8a3e', '#ebfbee'], ['emb', 'embryonic cells', "immature embryonic cells", 'blastoma', "blastoma", '#e67700', '#fff9db']];
    return svg(360, 330, `<defs>${shadow(sh)}${marker(a, LINE)}</defs>
      ${t(254, 18, 'tissue', { size: 10, fill: MUTED })}${f(254, 30, "Tissue of origin", { size: 9 })}${t(63, 18, 'cancer', { size: 10, fill: MUTED })}${f(63, 30, "Cancer name", { size: 9 })}
      ${rows.map(([k, en, fa, ca, cfa, c, bg], i) => { const y = 40 + i * 56; return `${card(154, y, 200, 48, bg, sh)}${icon[k](186, y + 24)}${t(284, y + 20, en, { size: 10, fill: c, w: 900 })}${f(284, y + 36, fa, { size: 9 })}
        <path d="M150 ${y + 24} H124" stroke="${LINE}" stroke-width="2" marker-end="url(#${a})"/>${card(8, y, 110, 48, '#fff', sh)}<rect x="8" y="${y}" width="6" height="48" rx="3" fill="${c}"/>${t(63, y + 21, ca, { size: 12, fill: c, w: 900 })}${f(63, y + 38, cfa, { size: 9.5, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 324, "First ask “which tissue?”; the cancer’s name comes from there", { size: 9.5, fill: VIO, w: 700 })}`, "Tissue of origin and cancer name");
  };

  /* قاعده نام‌گذاری: ریشه بافت + ‎-oma یا ‎-sarcoma یا ‎-carcinoma */
  A['naming-rules'] = () => {
    const sh = 's' + (++UID);
    const rows = [['aden/o', "gland", 'adenoma', 'adenocarcinoma'], ['lip/o', "fat", 'lipoma', 'liposarcoma'], ['chondr/o', "firm shock-absorbing connective tissue", 'chondroma', 'chondrosarcoma'], ['oste/o', "bone", 'osteoma', 'osteosarcoma'],
      ['leiomy/o', "smooth muscle", 'leiomyoma', 'leiomyosarcoma'], ['angi/o', "vessel", 'angioma', 'angiosarcoma'], ['fibr/o', "fibrous tissue", 'fibroma', 'fibrosarcoma']];
    return svg(360, 340, `<defs>${shadow(sh)}</defs>
      ${card(6, 6, 348, 62, VIO_BG)}${t(270, 30, 'root + -oma', { size: 12, fill: GOOD, w: 900 })}${f(270, 48, "not cancerous", { size: 10, fill: GOOD, w: 800 })}
      ${t(96, 26, 'root + -sarcoma / -carcinoma', { size: 11, fill: BAD, w: 900 })}${f(96, 44, "malignant: connective tissue / epithelial tissue", { size: 9.5, fill: BAD, w: 800 })}
      <rect x="6" y="78" width="348" height="26" rx="8" fill="#f1f3f5"/>${t(318, 95, 'root', { size: 9.5, fill: INK, w: 900 })}${t(206, 95, 'benign', { size: 9.5, fill: GOOD, w: 900 })}${t(80, 95, 'malignant', { size: 9.5, fill: BAD, w: 900 })}
      ${rows.map(([r, fa, b, m], i) => { const y = 108 + i * 30; return `<rect x="6" y="${y}" width="348" height="27" rx="7" fill="${i % 2 ? '#fff' : '#fafafa'}"/>${t(336, y + 13, r, { size: 9.5, fill: VIO, w: 900, anchor: 'end' })}${f(336, y + 24, fa, { size: 8.5, anchor: 'end' })}${t(206, y + 18, b, { size: 10.5, fill: GOOD, w: 800 })}${t(80, y + 18, m, { size: 10.5, fill: BAD, w: 800 })}`; }).join('')}
      ${f(180, 334, "A gland is epithelial tissue: adenocarcinoma, not adenosarcoma", { size: 9.5, fill: VIO, w: 700 })}`, "The tumour-naming rule");
  };

  /* لایه‌های پوست و سه سرطان پوست */
  A['skin-cancers'] = () => {
    const sh = 's' + (++UID);
    const sq = Array.from({ length: 9 }, (_, i) => `<path d="M${30 + i * 34} 64 l14 -6 l14 6 l-2 6 h-24z" fill="#ffe8cc" stroke="#e8590c" stroke-width=".9"/>`).join('')
      + Array.from({ length: 10 }, (_, i) => `<rect x="${24 + i * 32}" y="74" width="28" height="16" rx="6" fill="#fff4e6" stroke="#f08c00" stroke-width=".9"/><circle cx="${38 + i * 32}" cy="82" r="3" fill="#e8590c"/>`).join('')
      + Array.from({ length: 12 }, (_, i) => `<rect x="${22 + i * 27}" y="96" width="22" height="20" rx="5" fill="#ffd8a8" stroke="#d9480f" stroke-width=".9"/><circle cx="${33 + i * 27}" cy="106" r="3.4" fill="#c2255c"/>`).join('');
    const mel = [76, 184, 292].map(x => `<rect x="${x - 11}" y="96" width="22" height="20" rx="5" fill="#8d5b3a" stroke="#5c3a21" stroke-width=".9"/><path d="M${x - 6} 96 l-4 -8 M${x + 6} 96 l4 -8" stroke="#5c3a21" stroke-width="2" stroke-linecap="round"/><circle cx="${x}" cy="106" r="3.4" fill="#3b2314"/>`).join('');
    const lab2 = (x, y, en, fa, c, x2, y2) => `${pin(x2, y2, x, y - 12, c)}${t(x, y, en, { size: 10, fill: c, w: 900 })}${f(x, y + 14, fa, { size: 9, fill: INK, w: 700 })}`;
    return svg(360, 300, `<defs>${shadow(sh)}${linear('dm' + UID, '#ffe3e3', '#ffc9c9', true)}</defs>
      <rect x="16" y="54" width="328" height="66" rx="6" fill="#fff9f2"/><rect x="16" y="120" width="328" height="60" rx="6" fill="url(#dm${UID})"/>
      ${sq}${mel}<path d="M16 120 H344" stroke="#495057" stroke-width="1.6" stroke-dasharray="5 4"/>
      ${f(340, 172, "dermis", { size: 9, anchor: 'end' })}
      ${t(18, 30, 'squamous cells', { size: 10, fill: '#e8590c', w: 900, anchor: 'start' })}${f(18, 45, "squamous surface cells", { size: 9, anchor: 'start' })}${t(346, 30, 'basal layer', { size: 10, fill: '#c2255c', w: 900, anchor: 'end' })}${f(346, 45, "basal layer", { size: 9, anchor: 'end' })}
      ${card(8, 210, 112, 82, '#fff4e6', sh)}${t(64, 230, 'SCC', { size: 13, fill: '#e8590c', w: 900 })}${f(64, 246, 'squamous cell carcinoma', { size: 8.5 })}${f(64, 262, "squamous cell", { size: 9.5, fill: INK, w: 800 })}${f(64, 278, "sometimes metastasises", { size: 9 })}
      ${card(124, 210, 112, 82, '#fff0f6', sh)}${t(180, 230, 'BCC', { size: 13, fill: '#c2255c', w: 900 })}${f(180, 246, 'basal cell carcinoma', { size: 8.5 })}${f(180, 262, "basal layer; the most common", { size: 9.5, fill: INK, w: 800 })}${f(180, 278, "rarely metastasises", { size: 9 })}
      ${card(240, 210, 112, 82, '#f8f0e8', sh)}${t(296, 230, 'melanoma', { size: 13, fill: '#5c3a21', w: 900 })}${f(296, 246, 'melanocyte', { size: 8.5 })}${f(296, 262, "pigment-making cell", { size: 9.5, fill: INK, w: 800 })}${f(296, 278, "most dangerous", { size: 9, fill: BAD, w: 800 })}
      ${pin(64, 64, 64, 206, '#e8590c')}${pin(168, 108, 180, 206, '#c2255c')}${pin(292, 108, 296, 206, '#5c3a21')}`, "The Three Skin Cancers");
  };

  /* چهار نوع اصلی لوسمی */
  A['leukemia-grid'] = () => {
    const sh = 's' + (++UID);
    const box = (x, y, ab, en, fa, note, c, bg) => `${card(x, y, 132, 86, bg, sh)}${t(x + 66, y + 28, ab, { size: 17, fill: c, w: 900 })}${t(x + 66, y + 46, en, { size: 8.5, fill: c, w: 700 })}${f(x + 66, y + 62, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 66, y + 77, note, { size: 8.8 })}`;
    return svg(360, 260, `<defs>${shadow(sh)}</defs>
      ${t(286, 30, 'lymphocytic', { size: 11, fill: '#2b8a3e', w: 900 })}${f(286, 44, "lymphocytic line", { size: 9.5, fill: '#2b8a3e' })}${t(148, 30, 'myeloid', { size: 11, fill: '#9c36b5', w: 900 })}${f(148, 44, "myeloid line", { size: 9.5, fill: '#9c36b5' })}
      ${t(42, 98, 'acute', { size: 11, fill: BAD, w: 900 })}${f(42, 112, "acute, fast", { size: 9.5, fill: BAD })}${t(42, 190, 'chronic', { size: 11, fill: '#1c7ed6', w: 900 })}${f(42, 204, "chronic, slow", { size: 9.5, fill: '#1c7ed6' })}
      ${box(220, 56, 'ALL', 'acute lymphocytic', "acute lymphocytic leukaemia", "the most common childhood cancer", '#2b8a3e', '#ebfbee')}${box(82, 56, 'AML', 'acute myeloid', "acute myeloid leukaemia", "acute leukaemia of adults", '#9c36b5', '#f8f0fc')}
      ${box(220, 148, 'CLL', 'chronic lymphocytic', "chronic lymphocytic leukaemia", "older adults", '#2b8a3e', '#ebfbee')}${box(82, 148, 'CML', 'chronic myeloid', "chronic myeloid leukaemia", "abnormal chromosome of chronic myeloid leukaemia", '#9c36b5', '#f8f0fc')}
      ${f(180, 252, "Two questions: how fast (acute or chronic)? Which line (lymphocytic or myeloid)?", { size: 9.5, fill: VIO, w: 700 })}`, "The four types of leukaemia");
  };

  /* مغز استخوان طبیعی و لوسمی */
  A['marrow-crowding'] = () => {
    const sh = 's' + (++UID);
    const rbc = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="7" ry="6" fill="#ff8787" stroke="#e03131" stroke-width=".8"/><ellipse cx="${x}" cy="${y}" rx="3" ry="2.4" fill="#ffc9c9"/>`;
    const wbc = (x, y) => `<circle cx="${x}" cy="${y}" r="8" fill="#e5dbff" stroke="#7048e8" stroke-width=".9"/><path d="M${x - 4} ${y - 1} q3 -4 5 0 q3 4 4 -1" stroke="#5f3dc4" stroke-width="2.4" fill="none"/>`;
    const plt = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="3.5" ry="2.4" fill="#fab005"/>`;
    const blast = (x, y, i) => `<circle cx="${x}" cy="${y}" r="8.5" fill="#fcc2d7" stroke="#c2255c" stroke-width=".9"/><circle cx="${x + .5}" cy="${y}" r="6" fill="#a61e4d"/><circle cx="${x - 1}" cy="${y - 1.5}" r="1.4" fill="#ffd8a8"/>`;
    const seed = (n, s) => { let v = s; const r = () => { v = (v * 9301 + 49297) % 233280; return v / 233280; }; return Array.from({ length: n }, () => [r(), r()]); };
    const normal = seed(26, 5).map(([a, b], i) => { const x = 206 + a * 136, y = 60 + b * 96; return [rbc, wbc, plt, rbc][i % 4](x, y); }).join('');
    const leuk = seed(30, 9).map(([a, b], i) => { const x = 28 + a * 136, y = 60 + b * 96; return i % 9 === 0 ? rbc(x, y) : blast(x, y, i); }).join('');
    return svg(360, 262, `<defs>${shadow(sh)}</defs>
      ${card(190, 36, 164, 136, '#fff8f0', sh)}${card(6, 36, 164, 136, '#fff0f6', sh)}
      ${t(272, 22, 'normal marrow', { size: 10.5, fill: GOOD, w: 900 })}${t(88, 22, 'leukemia', { size: 10.5, fill: BAD, w: 900 })}
      ${normal}${leuk}
      ${f(272, 192, "Red cells, white cells and platelets", { size: 9.5, fill: INK, w: 800 })}${f(272, 208, "in balance", { size: 9 })}
      ${f(88, 192, "immature cells (blasts)", { size: 9.5, fill: INK, w: 800 })}${f(88, 208, "crowd out the others", { size: 9 })}
      <rect x="6" y="220" width="348" height="36" rx="10" fill="${VIO_BG}"/>${f(180, 236, "Result: anaemia, neutropenia and thrombocytopenia", { size: 9.5, fill: VIO, w: 800 })}${f(180, 250, "that is, fatigue, infection and bleeding", { size: 9, fill: VIO })}`, "Bone marrow in leukaemia");
  };

  /* تومورهای جنینی کودکان روی آدمک */
  A['blastoma-map'] = () => {
    const c = '#e67700';
    const L = (x1, y1, x2, y2, en, fa, anchor) => `${pin(x1, y1, x2, y2, c)}${t(x2 + (anchor === 'end' ? -4 : 4), y2 - 2, en, { size: 10, fill: c, w: 900, anchor })}${f(x2 + (anchor === 'end' ? -4 : 4), y2 + 12, fa, { size: 9, anchor })}`;
    return svg(360, 300, `${man(180, 22, 1.24, { arms: 12 })}
      <circle cx="173" cy="40" r="3" fill="#495057"/><circle cx="187" cy="40" r="3" fill="#495057"/>
      <ellipse cx="180" cy="102" rx="20" ry="12" fill="#c08457" opacity=".6"/><ellipse cx="166" cy="120" rx="6" ry="9" fill="#e599f7" opacity=".85"/><ellipse cx="194" cy="120" rx="6" ry="9" fill="#e599f7" opacity=".85"/>
      <ellipse cx="166" cy="110" rx="5" ry="3" fill="#ffd43b"/><path d="M168 30 q12 -10 24 2" stroke="#ff8787" stroke-width="5" fill="none" opacity=".7"/>
      ${L(187, 40, 248, 26, 'retinoblastoma', "retina", 'start')}${L(186, 28, 108, 18, 'medulloblastoma', "cerebellum (brain)", 'end')}
      ${L(176, 100, 106, 92, 'hepatoblastoma', "liver", 'end')}${L(166, 110, 106, 140, 'neuroblastoma', "adrenal gland, nerve", 'end')}${L(194, 122, 252, 136, 'Wilms tumor', "children’s kidney", 'start')}
      ${f(180, 284, "Organ root + -blastoma = tumour of immature embryonic cells; mostly in children", { size: 9.5, fill: VIO, w: 700 })}`, "Embryonic tumours of childhood");
  };

  /* ---------- نشانه‌ها و غربالگری ---------- */
  /* هفت نشانه هشدار: CAUTION */
  A['warning-signs'] = () => {
    const sh = 's' + (++UID);
    const rows = [['C', 'Change in bowel or bladder habits', "change in bowel or bladder habits"], ['A', 'A sore that does not heal', "a sore that does not heal"], ['U', 'Unusual bleeding or discharge', "unusual bleeding or discharge"],
      ['T', 'Thickening or lump', "a thickening or lump in the breast or elsewhere"], ['I', 'Indigestion or difficulty swallowing', "indigestion or difficulty swallowing"], ['O', 'Obvious change in a wart or mole', "an obvious change in a wart or mole"], ['N', 'Nagging cough or hoarseness', "a nagging cough or hoarseness"]];
    const pal = ['#e64980', '#f76707', '#fab005', '#2b8a3e', '#1c7ed6', '#7048e8', '#ae3ec9'];
    return svg(360, 330, `<defs>${shadow(sh)}</defs>${f(180, 20, "The seven warning signs of cancer: CAUTION", { size: 11.5, fill: INK, w: 800 })}
      ${rows.map(([l, en, fa], i) => { const y = 32 + i * 40; return `${card(6, y, 348, 34, '#fff', sh)}<rect x="318" y="${y}" width="36" height="34" rx="10" fill="${pal[i]}"/>${t(336, y + 23, l, { size: 17, fill: '#fff', w: 900 })}
        ${f(306, y + 15, fa, { size: 10, fill: INK, w: 800, anchor: 'end' })}${t(306, y + 29, en, { size: 8.8, fill: pal[i], w: 700, anchor: 'end' })}`; }).join('')}
      ${f(180, 320, "These signs do not prove cancer; they mean a doctor should be seen", { size: 9.5, fill: VIO, w: 700 })}`, "Seven warning signs of cancer");
  };

  /* نقشه نشانه‌ها روی بدن */
  A['symptom-map'] = () => {
    const c = '#c2255c';
    const L = (x1, y1, x2, y2, en, fa, anchor) => `${pin(x1, y1, x2, y2, c)}${t(x2 + (anchor === 'end' ? -4 : 4), y2 - 2, en, { size: 9.8, fill: c, w: 900, anchor })}${f(x2 + (anchor === 'end' ? -4 : 4), y2 + 11, fa, { size: 8.8, anchor })}`;
    return svg(360, 320, `${man(180, 16, 1.36, { arms: 14 })}
      ${L(180, 30, 100, 18, 'seizure', "brain: seizures", 'end')}${L(180, 56, 262, 30, 'hoarseness', "larynx: hoarseness", 'start')}
      ${L(186, 60, 262, 70, 'dysphagia', "oesophagus: difficulty swallowing", 'start')}${L(168, 88, 100, 66, 'hemoptysis', "lung: coughing up blood", 'end')}
      ${L(194, 96, 262, 110, 'nipple discharge', "breast: discharge, lump", 'start')}${L(150, 70, 100, 112, 'lymphadenopathy', "enlarged lymph node", 'end')}
      ${L(172, 140, 100, 158, 'rectal bleeding', "bowel: blood in the stool", 'end')}${L(186, 160, 262, 152, 'hematuria', "bladder: blood in the urine", 'start')}
      ${L(180, 168, 262, 194, 'dysuria', "prostate: burning on urination", 'start')}${L(150, 184, 100, 204, 'changing mole', "skin: a changed mole", 'end')}
      ${f(180, 300, "Keywords: hem/o blood • -ptysis spitting • -uria urine • dys- difficult • -phagia swallowing", { size: 9.3, fill: VIO, w: 700 })}`, "Signs of cancer in the organs");
  };

  /* ABCDE خال مشکوک به ملانوم */
  A['abcde-mole'] = () => {
    const sh = 's' + (++UID);
    const good = (x, y, k) => k === 'D' ? `<circle cx="${x}" cy="${y}" r="6" fill="#8d5b3a"/>` : `<circle cx="${x}" cy="${y}" r="11" fill="#8d5b3a"/>`;
    const bad = {
      A: (x, y) => `<path d="M${x - 12} ${y - 2} C${x - 12} ${y - 14} ${x + 2} ${y - 14} ${x + 4} ${y - 6} C${x + 16} ${y - 4} ${x + 14} ${y + 12} ${x} ${y + 10} C${x - 10} ${y + 10} ${x - 12} ${y + 6} ${x - 12} ${y - 2}Z" fill="#6b3f22"/>`,
      B: (x, y) => `<path d="${blob(x, y, 13, 0.55, 12, 7)}" fill="#8d5b3a"/>`,
      C: (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="#8d5b3a"/><circle cx="${x - 4}" cy="${y - 3}" r="6" fill="#2b1a10"/><circle cx="${x + 5}" cy="${y + 4}" r="4" fill="#c92a2a"/><circle cx="${x + 4}" cy="${y - 6}" r="3" fill="#d9a066"/>`,
      D: (x, y) => `<circle cx="${x}" cy="${y}" r="16" fill="#8d5b3a"/>`,
      E: (x, y) => `<circle cx="${x - 8}" cy="${y}" r="7" fill="#8d5b3a"/><path d="M${x - 1} ${y} h4" stroke="${LINE}" stroke-width="1.6"/><path d="${blob(x + 12, y, 10, 0.5, 10, 13)}" fill="#6b3f22"/>`
    };
    const rows = [['A', 'Asymmetry', "two unequal halves"], ['B', 'Border', "ragged, notched edge"], ['C', 'Color', "several colours: brown, black, red"], ['D', 'Diameter', "diameter over 6 mm"], ['E', 'Evolving', "change in size, shape or colour"]];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>
      ${t(240, 20, 'benign', { size: 9.5, fill: GOOD, w: 900 })}${t(186, 20, 'suspicious', { size: 9.5, fill: BAD, w: 900 })}
      ${rows.map(([k, en, fa], i) => { const y = 30 + i * 52; return `${card(6, y, 348, 46, '#fff', sh)}<circle cx="328" cy="${y + 23}" r="16" fill="${VIO}"/>${t(328, y + 29, k, { size: 16, fill: '#fff', w: 900 })}
        ${good(240, y + 23, k)}${bad[k](186, y + 23)}${k === 'D' ? `<path d="M170 ${y + 43} h32" stroke="${BAD}" stroke-width="1.4"/>${t(186, y + 52, '> 6 mm', { size: 8, fill: BAD })}` : ''}
        ${t(110, y + 19, en, { size: 10.5, fill: VIO, w: 900 })}${f(110, y + 35, fa, { size: 9.3, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 292, "If a mole has any of these features, it should be examined", { size: 9.5, fill: VIO, w: 700 })}`, "The ABCDE rule for moles");
  };

  /* آزمون‌های غربالگری */
  A['screening-tests'] = () => {
    const sh = 's' + (++UID);
    const rows = [['breast', "breast", 'mammography', "mammography; an X-ray image", '#e64980', '#fff0f6'], ['cervix', "cervix", "Pap smear, HPV test", "collecting cells with a brush", '#ae3ec9', '#f8f0fc'],
      ['colon', "large intestine", "colonoscopy, FOBT", "viewing the bowel; hidden blood in the stool", '#d9480f', '#fff4e6'], ['prostate', "prostate", "PSA, DRE", "blood test; finger examination", '#1c7ed6', '#e7f5ff'],
      ['lung', "lung", 'low-dose CT', "low-dose CT for smokers", '#0c8599', '#e3fafc'], ['skin', "skin", 'skin exam', "checking moles with ABCDE", '#5c3a21', '#f8f0e8']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, "Screening: testing healthy people without symptoms", { size: 11, fill: INK, w: 800 })}
      ${rows.map(([en, fa, test, desc, c, bg], i) => { const y = 32 + i * 42; return `${card(6, y, 348, 36, bg, sh)}${t(318, y + 16, en, { size: 10, fill: c, w: 900 })}${f(318, y + 30, fa, { size: 9, fill: INK, w: 700 })}
        <path d="M282 ${y + 6} v24" stroke="${c}" stroke-width="1" opacity=".4"/>${t(150, y + 16, test, { size: 10.5, fill: c, w: 900 })}${f(150, y + 30, desc, { size: 9 })}`; }).join('')}
      ${f(180, 292, "The aim of screening: finding cancer or precancer before symptoms appear", { size: 9.5, fill: VIO, w: 700 })}`, "Cancer screening tests");
  };

  /* ضایعه‌های پیش‌سرطانی و سرطانی که از آن‌ها پدید می‌آید */
  A.precancer = () => {
    const sh = 's' + (++UID), a = 'm' + (++UID);
    const rows = [['actinic keratosis', "scaly sun-damaged patch", 'squamous cell carcinoma'], ['leukoplakia', "white patch in the mouth", 'oral cancer'], ['colon polyp', "bowel polyp (adenoma)", 'colon adenocarcinoma'],
      ['dysplastic nevus', "irregular mole", 'melanoma'], ['Barrett esophagus', "change in the lining of the oesophagus", 'esophageal cancer'], ['CIN', "abnormal precancerous cervical cells", 'cervical cancer']];
    return svg(360, 314, `<defs>${shadow(sh)}${marker(a, BAD)}</defs>
      ${t(262, 20, 'precancerous', { size: 10, fill: '#e67700', w: 900 })}${f(262, 33, "precancerous", { size: 9, fill: '#e67700' })}${t(76, 20, 'may become', { size: 10, fill: BAD, w: 900 })}${f(76, 33, "it may become", { size: 9, fill: BAD })}
      ${rows.map(([p, fa, c], i) => { const y = 42 + i * 42; return `${card(176, y, 178, 36, '#fff9db', sh)}${t(265, y + 16, p, { size: 10, fill: '#e67700', w: 900 })}${f(265, y + 30, fa, { size: 9 })}
        <path d="M172 ${y + 18} H150" stroke="${BAD}" stroke-width="2" marker-end="url(#${a})"/>${card(6, y, 140, 36, BAD_BG, sh)}${t(76, y + 22, c, { size: 9.8, fill: BAD, w: 800 })}`; }).join('')}
      ${f(180, 306, "Removing a precancerous lesion is prevention (prophylactic)", { size: 9.5, fill: VIO, w: 700 })}`, "Precancerous Lesions");
  };

  /* ---------- تشخیص و مرحله‌بندی ---------- */
  /* چهار روش بیوپسی */
  A['biopsy-types'] = () => {
    const sh = 's' + (++UID);
    const tissue = (x, y) => `<rect x="${x + 8}" y="${y + 30}" width="152" height="70" rx="12" fill="#ffe3e3"/><path d="M${x + 8} ${y + 46} H${x + 160}" stroke="#ffc9c9" stroke-width="2"/>`;
    const lump = (x, y, cut) => `<ellipse cx="${x + 84}" cy="${y + 66}" rx="26" ry="18" fill="#e599f7" stroke="#9c36b5" stroke-width="1.6"${cut ? ` stroke-dasharray="4 3"` : ''}/>`;
    const panel = (x, y, en, fa, note, draw) => `${card(x, y, 168, 160, '#fff', sh)}${tissue(x, y)}${draw(x, y)}${t(x + 84, y + 120, en, { size: 10.5, fill: VIO, w: 900 })}${f(x + 84, y + 135, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 84, y + 150, note, { size: 8.8 })}`;
    return svg(360, 362, `<defs>${shadow(sh)}</defs>${f(180, 18, "biopsy: removing tissue to look at under the microscope", { size: 10.5, fill: INK, w: 800 })}
      ${panel(186, 26, 'excisional', "excisional", "the whole lump is removed", (x, y) => `${lump(x, y, true)}<path d="M${x + 50} ${y + 40} q34 -24 68 0 q12 26 -4 50 q-30 20 -60 0 q-16 -26 -4 -50z" stroke="${VIO}" stroke-width="2.2" fill="none" stroke-dasharray="5 3"/>`)}
      ${panel(6, 26, 'incisional', "incisional", "only a piece of the lump", (x, y) => `${lump(x, y)}<path d="M${x + 78} ${y + 46} l20 0 l-6 32 l-14 0z" fill="#fff" stroke="${VIO}" stroke-width="2"/>`)}
      ${panel(186, 194, 'core needle', "core needle", "a cylinder of tissue", (x, y) => `${lump(x, y)}<path d="M${x + 150} ${y + 22} L${x + 92} ${y + 62}" stroke="#868e96" stroke-width="7" stroke-linecap="round"/><path d="M${x + 150} ${y + 22} L${x + 92} ${y + 62}" stroke="#dee2e6" stroke-width="3"/><rect x="${x + 128}" y="${y + 6}" width="30" height="14" rx="4" fill="${VIO}" transform="rotate(-34 ${x + 143} ${y + 13})"/>`)}
      ${panel(6, 194, 'FNA', "fine-needle aspiration", "a few cells and fluid", (x, y) => `${lump(x, y)}<path d="M${x + 146} ${y + 24} L${x + 92} ${y + 62}" stroke="#868e96" stroke-width="2"/><rect x="${x + 128}" y="${y + 4}" width="34" height="14" rx="3" fill="#fff" stroke="${VIO}" stroke-width="1.6" transform="rotate(-35 ${x + 145} ${y + 11})"/>`)}`, "Types of biopsy");
  };

  /* آندوسکوپی‌ها روی بدن: ریشه + ‎-scopy */
  A['scope-map'] = () => {
    const c = '#1c7ed6';
    const L = (x1, y1, x2, y2, en, fa, anchor) => `${pin(x1, y1, x2, y2, c)}${t(x2 + (anchor === 'end' ? -4 : 4), y2 - 2, en, { size: 9.8, fill: c, w: 900, anchor })}${f(x2 + (anchor === 'end' ? -4 : 4), y2 + 11, fa, { size: 8.8, anchor })}`;
    return svg(360, 320, `${man(180, 16, 1.36, { arms: 14 })}
      <path d="M180 58 V96" stroke="#ffa8a8" stroke-width="5" stroke-linecap="round" opacity=".8"/><path d="M170 88 q-10 4 -14 14 M190 88 q10 4 14 14" stroke="#74c0fc" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M156 150 q-6 -24 10 -26 h28 q16 2 10 26 q-4 14 -24 12" stroke="#ffc078" stroke-width="5" fill="none" opacity=".85"/><ellipse cx="180" cy="168" rx="9" ry="6" fill="#ffd43b" opacity=".85"/>
      ${L(180, 58, 262, 34, 'laryngoscopy', "voice box", 'start')}${L(166, 92, 100, 60, 'bronchoscopy', "trachea and bronchi", 'end')}
      ${L(182, 84, 262, 76, 'esophagoscopy', "oesophagus", 'start')}${L(150, 100, 100, 112, 'thoracoscopy', "chest cavity", 'end')}
      ${L(196, 138, 262, 124, 'colonoscopy', "the whole large intestine", 'start')}${L(160, 152, 100, 160, 'sigmoidoscopy', "rectum and sigmoid", 'end')}
      ${L(184, 168, 262, 170, 'cystoscopy', "bladder", 'start')}${L(176, 174, 100, 206, 'hysteroscopy', "within the uterus", 'end')}
      ${f(180, 300, "Organ root + -scopy = looking inside it with a lighted tube; often with a biopsy", { size: 9.5, fill: VIO, w: 700 })}`, "Endoscopies");
  };

  /* ابزارهای تصویربرداری */
  A['imaging-tools'] = () => {
    const sh = 's' + (++UID);
    const box = (x, y, c, bg, icon, en, ab, fa, note) => `${card(x, y, 170, 120, bg, sh)}${icon}${t(x + 85, y + 72, en, { size: 9.5, fill: c, w: 900 })}${t(x + 85, y + 88, ab, { size: 12, fill: c, w: 900 })}${f(x + 85, y + 103, fa, { size: 9, fill: INK, w: 700 })}${f(x + 85, y + 116, note, { size: 8.6 })}`;
    const ring = (x, y, c) => `<circle cx="${x + 85}" cy="${y + 32}" r="22" fill="none" stroke="${c}" stroke-width="8"/><rect x="${x + 55}" y="${y + 30}" width="60" height="5" rx="2" fill="${c}"/>`;
    return svg(360, 270, `<defs>${shadow(sh)}</defs>
      ${box(184, 6, '#495057', '#f1f3f5', `${ring(184, 6, '#868e96')}${[0, 1, 2].map(i => `<path d="M${259 + i * 5} ${18 + i * 2} v24" stroke="#adb5bd" stroke-width="1.4"/>`).join('')}`, 'computed tomography', 'CT', "computer X-ray slices", "with or without contrast")}
      ${box(6, 6, '#1c7ed6', '#e7f5ff', `<path d="M66 20 v20 a12 12 0 0 0 24 0 v-20" stroke="#e03131" stroke-width="8" fill="none"/><rect x="62" y="14" width="12" height="8" fill="#868e96"/><rect x="82" y="14" width="12" height="8" fill="#868e96"/><path d="M104 22 q6 10 0 20 M112 18 q9 14 0 28" stroke="#1c7ed6" stroke-width="2" fill="none"/>`, 'magnetic resonance', 'MRI', "magnets and radio waves", "best for the brain and soft tissue")}
      ${box(184, 136, '#e67700', '#fff9db', `${ring(184, 136, '#f59f00')}<circle cx="262" cy="170" r="6" fill="#ff922b"/><circle cx="276" cy="160" r="4" fill="#ff922b"/><circle cx="262" cy="170" r="11" fill="#ff922b" opacity=".25"/>`, 'positron emission', 'PET', "radioactive sugar in active cells", "for staging and finding metastases")}
      ${box(6, 136, '#0c8599', '#e3fafc', `<path d="M70 150 h30 v14 l-6 16 h-18 l-6 -16z" fill="#99e9f2" stroke="#0c8599" stroke-width="1.6"/>${[0, 1, 2].map(i => `<path d="M${74 + i * 0} ${186 + i * 6} q11 6 22 0" stroke="#0c8599" stroke-width="2" fill="none"/>`).join('')}`, 'ultrasound', 'US', "sound waves (son/o)", "transrectal, guiding the needle")}`, "Imaging tools");
  };

  /* غده لنفاوی نگهبان */
  A['sentinel-node'] = () => {
    const a = 'm' + (++UID), sh = 's' + (++UID);
    const node = (x, y, c, bg) => `<ellipse cx="${x}" cy="${y}" rx="15" ry="10" fill="${bg}" stroke="${c}" stroke-width="1.8"/>`;
    return svg(360, 260, `<defs>${marker(a, '#1c7ed6')}${shadow(sh)}</defs>
      <rect x="196" y="40" width="156" height="150" rx="40" fill="#fff4e6"/>${t(290, 60, 'breast', { size: 9.5, fill: '#d9480f' })}${f(290, 74, "breast tissue", { size: 9, fill: '#d9480f' })}
      ${[[262, 120, 12], [278, 110, 10], [272, 134, 11], [286, 128, 8]].map(([x, y, r], i) => cellC(x, y, r, i + 61)).join('')}${t(274, 158, 'tumor', { size: 9.5, fill: BAD, w: 900 })}
      <path d="M236 116 q-6 -10 -18 -8" stroke="#1c7ed6" stroke-width="2.4" fill="none"/><circle cx="240" cy="118" r="5" fill="#1c7ed6"/>${f(290, 92, "injecting dye or a radioactive tracer", { size: 8.6, fill: '#1c7ed6' })}
      <path d="M248 112 C210 106 170 98 140 88" stroke="#74c0fc" stroke-width="3" fill="none" marker-end="url(#${a})"/><path d="M118 84 C98 78 82 72 62 64" stroke="#adb5bd" stroke-width="2.4" fill="none" stroke-dasharray="4 3"/>
      ${node(128, 86, '#1c7ed6', '#a5d8ff')}<circle cx="128" cy="86" r="22" fill="none" stroke="#1c7ed6" stroke-width="1.6" stroke-dasharray="3 3"/>${node(50, 60, '#868e96', '#e9ecef')}${node(30, 92, '#868e96', '#e9ecef')}
      ${t(128, 128, 'sentinel node', { size: 10.5, fill: '#1c7ed6', w: 900 })}${f(128, 143, "sentinel node: the first station", { size: 9.5, fill: INK, w: 800 })}${f(40, 120, "the next nodes", { size: 9 })}
      ${card(6, 168, 348, 84, VIO_BG)}${f(180, 190, "If the sentinel node is healthy: the other nodes are probably healthy", { size: 9.8, fill: GOOD, w: 800 })}
      ${f(180, 210, "If it is cancerous: lymph node dissection (removing lymph nodes)", { size: 9.8, fill: BAD, w: 800 })}${f(180, 232, "sentinel = guard; like a soldier who sees the enemy first", { size: 9.5, fill: VIO, w: 700 })}`, "sentinel lymph node biopsy");
  };

  /* مرحله‌بندی TNM */
  A.tnm = () => {
    const sh = 's' + (++UID);
    const col = (x, c, bg, L, en, fa, draw, scale) => `${card(x, 6, 112, 250, bg, sh)}<circle cx="${x + 56}" cy="34" r="20" fill="${c}"/>${t(x + 56, 42, L, { size: 22, fill: '#fff', w: 900 })}${t(x + 56, 72, en, { size: 10, fill: c, w: 900 })}${f(x + 56, 87, fa, { size: 9.5, fill: INK, w: 800 })}${draw}${scale.map((s, i) => `${t(x + 22, 200 + i * 14, s[0], { size: 9, fill: c, w: 900, anchor: 'start' })}${f(x + 104, 200 + i * 14, s[1], { size: 8.6, anchor: 'end' })}`).join('')}`;
    const sizes = [[258, 118, 7], [292, 118, 10], [258, 158, 13], [294, 158, 16]].map(([x, y, r]) => cellC(x, y, r, r + 3)).join('');
    const nodes = [[148, 116], [186, 116], [148, 152], [186, 152]].map(([x, y], i) => `<ellipse cx="${x}" cy="${y}" rx="14" ry="9" fill="${i ? '#ffc9c9' : '#d3f9d8'}" stroke="${i ? BAD : GOOD}" stroke-width="1.6"/>${i ? cellC(x, y, 4 + i, 70 + i) : ''}`).join('');
    const meta = `<path d="M38 112 q12 -18 22 0 q12 -14 22 4 q-4 22 -22 22 q-18 0 -22 -26z" fill="#d9480f" opacity=".75"/>${cellC(56, 120, 6, 81)}<circle cx="56" cy="158" r="13" fill="#dee2e6"/><path d="M50 158 h12" stroke="${GOOD}" stroke-width="3"/>`;
    return svg(360, 290, `<defs>${shadow(sh)}</defs>
      ${col(242, '#c92a2a', '#fff0f0', 'T', 'Tumor', "size of the primary tumour", sizes, [['Tis', "in situ"], ['T1-T4', "small to large"]])}
      ${col(124, '#2b8a3e', '#ebfbee', 'N', 'Nodes', "Regional lymph nodes", nodes, [['N0', "no nodes involved"], ['N1-N3', "more nodes"]])}
      ${col(6, '#e67700', '#fff9db', 'M', 'Metastasis', "distant metastasis", meta, [['M0', "no"], ['M1', "yes"]])}
      ${f(180, 276, "Example: T2 N1 M0 means a medium tumour with node involvement and no distant metastasis", { size: 9.3, fill: VIO, w: 700 })}`, "TNM staging");
  };

  /* مرحله ۰ تا ۴ */
  A.stages = () => {
    const sh = 's' + (++UID);
    const st = [['0', 'in situ', "in situ", '#2b8a3e'], ['I', 'localized', "applied to the skin", '#5c940d'], ['II', 'larger', "larger", '#e67700'], ['III', 'regional', "regional nodes", '#d9480f'], ['IV', 'distant', "distant metastasis", '#c92a2a']];
    return svg(360, 250, `<defs>${shadow(sh)}</defs>${f(180, 20, "stage: how far has the cancer advanced?", { size: 11, fill: INK, w: 800 })}
      ${st.map(([n, en, fa, c], i) => { const x = 290 - i * 70, h = 40 + i * 26; return `<rect x="${x}" y="${190 - h}" width="62" height="${h}" rx="10" fill="${c}" filter="url(#${sh})"/>${t(x + 31, 190 - h + 26, n, { size: 18, fill: '#fff', w: 900 })}${t(x + 31, 208, en, { size: 9.5, fill: c, w: 900 })}${f(x + 31, 224, fa, { size: 9 })}`; }).join('')}
      ${f(180, 244, "The higher the stage, the harder the treatment and the worse the prognosis", { size: 9.5, fill: VIO, w: 700 })}`, "Stages of cancer");
  };

  /* ---------- درمان ---------- */
  /* نقشه جراحی‌ها: ریشه اندام + ‎-ectomy */
  A['surgery-map'] = () => {
    const c = '#7048e8';
    const L = (x1, y1, x2, y2, en, fa, anchor) => `${pin(x1, y1, x2, y2, c)}${t(x2 + (anchor === 'end' ? -4 : 4), y2 - 2, en, { size: 9.8, fill: c, w: 900, anchor })}${f(x2 + (anchor === 'end' ? -4 : 4), y2 + 11, fa, { size: 8.8, anchor })}`;
    return svg(360, 320, `${man(180, 16, 1.36, { arms: 14 })}
      ${L(180, 58, 262, 30, 'laryngectomy', "voice box", 'start')}${L(168, 92, 100, 52, 'pneumonectomy', "the whole lung", 'end')}
      ${L(190, 92, 262, 70, 'lobectomy', "one lobe of the lung", 'start')}${L(196, 104, 262, 108, 'mastectomy', "breast", 'start')}
      ${L(170, 140, 100, 104, 'colectomy', "large intestine", 'end')}${L(186, 150, 262, 148, 'hysterectomy', "uterus", 'start')}
      ${L(176, 162, 100, 150, 'cystectomy', "bladder", 'end')}${L(184, 166, 262, 188, 'prostatectomy', "prostate", 'start')}
      ${L(170, 172, 100, 196, 'orchiectomy', "testis", 'end')}
      ${f(180, 300, "Organ root + -ectomy = surgical removal of that organ", { size: 10, fill: VIO, w: 700 })}`, "Cancer operations");
  };

  /* لامپکتومی و ماستکتومی */
  A['lump-mast'] = () => {
    const sh = 's' + (++UID);
    const breast = (x, cut) => `<path d="M${x + 20} 50 C${x + 20} 50 ${x + 24} 40 ${x + 40} 40 H${x + 128} C${x + 144} 40 ${x + 148} 50 ${x + 148} 50 V64 C${x + 148} 130 ${x + 118} 158 ${x + 84} 158 C${x + 50} 158 ${x + 20} 130 ${x + 20} 64Z" fill="#ffe8cc" stroke="#e8590c" stroke-width="1.6"/>${cut}`;
    return svg(360, 260, `<defs>${shadow(sh)}</defs>
      ${card(184, 8, 170, 216, '#fff', sh)}${card(6, 8, 170, 216, '#fff', sh)}
      ${breast(185, `${cellC(268, 110, 12, 91)}<circle cx="268" cy="110" r="26" fill="none" stroke="${VIO}" stroke-width="2.2" stroke-dasharray="5 3"/>`)}
      ${t(269, 182, 'lumpectomy', { size: 11, fill: VIO, w: 900 })}${f(269, 198, "removing the lump and a little healthy tissue", { size: 9.3, fill: INK, w: 800 })}${f(269, 213, "the breast is preserved", { size: 9 })}
      ${breast(7, `<path d="M27 50 V64 C27 130 57 158 91 158 C125 158 155 130 155 64 V50 Z" fill="#fff0f6" stroke="${BAD}" stroke-width="2.2" stroke-dasharray="5 3"/>${cellC(90, 110, 12, 93)}`)}
      ${t(91, 182, 'mastectomy', { size: 11, fill: BAD, w: 900 })}${f(91, 198, "removal of the whole breast", { size: 9.3, fill: INK, w: 800 })}${f(91, 213, "sometimes with the armpit nodes", { size: 9 })}
      ${f(180, 246, "lump = mass • mast/o = breast • -ectomy = removal", { size: 10, fill: VIO, w: 700 })}`, "Lumpectomy and mastectomy");
  };

  /* سه راه پرتودرمانی */
  A['radiation-types'] = () => {
    const sh = 's' + (++UID), a = 'm' + (++UID);
    const box = (x, y, en, fa, note, draw, c, bg) => `${card(x, y, 112, 194, bg, sh)}${draw}${t(x + 56, y + 132, en, { size: 10.5, fill: c, w: 900 })}${f(x + 56, y + 148, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 56, y + 164, note[0], { size: 8.8 })}${f(x + 56, y + 178, note[1], { size: 8.8 })}`;
    const tumor = (x, y) => cellC(x, y, 10, x);
    return svg(360, 240, `<defs>${shadow(sh)}${marker(a, '#f59f00')}</defs>
      ${box(244, 8, 'external beam', "external beam radiotherapy", ["a machine outside the body", "aims at the tumour"], `<rect x="270" y="20" width="60" height="26" rx="8" fill="#868e96"/><rect x="290" y="46" width="20" height="10" fill="#495057"/>${[-12, 0, 12].map(d => `<path d="M${300 + d / 3} 58 L${300 + d} 96" stroke="#f59f00" stroke-width="2" stroke-dasharray="3 2"/>`).join('')}<rect x="258" y="96" width="84" height="22" rx="10" fill="#ffe8cc"/>${tumor(300, 106)}`, '#e67700', '#fff9db')}
      ${box(124, 8, 'brachytherapy', "brachytherapy (internal)", ["radioactive seed", "in or beside the tumour"], `<ellipse cx="180" cy="70" rx="40" ry="30" fill="#ffe8cc"/>${tumor(180, 70)}${[[166, 60], [194, 62], [172, 84], [192, 82]].map(([x, y]) => `<rect x="${x - 4}" y="${y - 2}" width="8" height="4" rx="2" fill="#f59f00" stroke="#e67700"/>`).join('')}`, '#d9480f', '#fff4e6')}
      ${box(4, 8, 'systemic', "systemic", ["radioactive liquid in the blood", "such as iodine-131 for the thyroid"], `${man(60, 16, 0.5, { arms: 10 })}<circle cx="60" cy="50" r="4" fill="#f59f00"/><circle cx="54" cy="72" r="3" fill="#f59f00"/><circle cx="68" cy="88" r="3" fill="#f59f00"/><circle cx="56" cy="102" r="3" fill="#f59f00"/>`, '#7048e8', VIO_BG)}
      ${f(180, 228, "brachy- = near: the radiation source is placed right beside the tumour", { size: 9.5, fill: VIO, w: 700 })}`, "Three ways of giving radiotherapy");
  };

  /* چرا شیمی‌درمانی عارضه دارد؟ */
  A['chemo-effects'] = () => {
    const c = '#c2255c';
    const L = (x1, y1, x2, y2, en, fa, anchor) => `${pin(x1, y1, x2, y2, c)}${t(x2 + (anchor === 'end' ? -4 : 4), y2 - 2, en, { size: 9.8, fill: c, w: 900, anchor })}${f(x2 + (anchor === 'end' ? -4 : 4), y2 + 11, fa, { size: 8.8, anchor })}`;
    return svg(360, 336, `${man(180, 26, 1.2, { arms: 14 })}
      ${L(180, 28, 100, 22, 'alopecia', "hair loss", 'end')}${L(184, 52, 262, 34, 'mucositis', "mouth and gut sores", 'start')}
      ${L(176, 104, 100, 76, 'nausea', "nausea and vomiting", 'end')}${L(190, 140, 262, 96, 'myelosuppression', "bone marrow suppression", 'start')}
      ${t(266, 128, 'neutropenia', { size: 8.8, anchor: 'start', fill: c })}${f(266, 140, "infection", { size: 8.5, anchor: 'start' })}${t(266, 156, 'anemia', { size: 8.8, anchor: 'start', fill: c })}${f(266, 168, "fatigue", { size: 8.5, anchor: 'start' })}${t(266, 184, 'thrombocytopenia', { size: 8.8, anchor: 'start', fill: c })}${f(266, 196, "bleeding", { size: 8.5, anchor: 'start' })}
      ${L(146, 150, 100, 154, 'neuropathy', "tingling of hands and feet", 'end')}
      <rect x="6" y="282" width="348" height="48" rx="12" fill="${VIO_BG}"/>${f(180, 302, "Cytotoxic drugs attack fast-dividing cells", { size: 9.8, fill: VIO, w: 800 })}${f(180, 320, "Hair, mucous membranes and bone marrow also divide fast, so they are harmed too", { size: 9.3, fill: VIO })}`, "Side effects of chemotherapy");
  };

  /* زمان‌بندی درمان: نئوادجوانت، جراحی، ادجوانت */
  A['treatment-timeline'] = () => {
    const a = 'm' + (++UID), sh = 's' + (++UID);
    const step = (x, en, fa, note, c, bg, ic) => `${card(x, 40, 100, 116, bg, sh)}${ic}${t(x + 50, 112, en, { size: 10, fill: c, w: 900 })}${f(x + 50, 128, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 50, 144, note, { size: 8.6 })}`;
    return svg(360, 250, `<defs>${marker(a, VIO)}${shadow(sh)}</defs>
      ${step(254, 'neoadjuvant', "before surgery", "shrinking the tumour", '#1c7ed6', '#e7f5ff', cellC(304, 74, 14, 101))}
      ${step(130, 'surgery', "surgery", "removal of a tumour", VIO, VIO_BG, `<path d="M166 84 L196 58 L200 62 L172 88Z" fill="#adb5bd" stroke="#495057"/><circle cx="180" cy="72" r="16" fill="none" stroke="${VIO}" stroke-width="2" stroke-dasharray="4 3"/>`)}
      ${step(6, 'adjuvant', "after surgery", "remaining cells", '#2b8a3e', GOOD_BG, `${cellC(46, 74, 6, 103)}${cellC(66, 66, 5, 105)}<path d="M36 60 l40 30 M76 60 l-40 30" stroke="#2b8a3e" stroke-width="3" stroke-linecap="round"/>`)}
      <path d="M252 98 H234" stroke="${VIO}" stroke-width="2.4" marker-end="url(#${a})"/><path d="M128 98 H110" stroke="${VIO}" stroke-width="2.4" marker-end="url(#${a})"/>
      ${f(180, 24, "The usual order of treatment for a solid tumour", { size: 11, fill: INK, w: 800 })}
      <rect x="6" y="170" width="348" height="72" rx="12" fill="#f8f9fa"/>${t(270, 192, 'remission', { size: 10.5, fill: GOOD, w: 900 })}${f(270, 208, "remission; no sign of cancer", { size: 9, fill: INK, w: 700 })}
      ${t(90, 192, 'relapse / recurrence', { size: 10.5, fill: BAD, w: 900 })}${f(90, 208, "relapse: the cancer returns", { size: 9, fill: INK, w: 700 })}${f(180, 232, "ad- = adding • neo- = new, before", { size: 9.5, fill: VIO, w: 700 })}`, "Timing of treatment");
  };

  /* هورمون‌درمانی: قفل و کلید */
  A['hormone-block'] = () => {
    const sh = 's' + (++UID);
    const cell = (x) => `<path d="${blob(x, 110, 46, 0.18, 10, x)}" fill="#ffe3e3" stroke="#e03131" stroke-width="1.4"/><circle cx="${x}" cy="114" r="15" fill="#c2255c" opacity=".85"/>`;
    const lock = (x, y) => `<path d="M${x - 10} ${y} v-12 h20 v12 M${x - 4} ${y - 12} v6 h8 v-6" stroke="#5f3dc4" stroke-width="3" fill="none"/>`;
    const key = (x, y, c) => `<circle cx="${x}" cy="${y - 18}" r="7" fill="${c}"/><rect x="${x - 3}" y="${y - 12}" width="6" height="16" fill="${c}"/>`;
    return svg(360, 280, `<defs>${shadow(sh)}</defs>
      ${card(184, 8, 170, 230, '#fff', sh)}${card(6, 8, 170, 230, '#fff', sh)}
      ${t(269, 30, 'ER-positive cell', { size: 10, fill: BAD, w: 900 })}${f(269, 44, "cell with oestrogen receptors", { size: 9 })}
      <g transform="translate(0 16)">${cell(269)}${lock(269, 66)}${key(269, 62, '#e64980')}</g>${f(269, 196, "oestrogen is the key; the receptor is the lock", { size: 9.3, fill: INK, w: 800 })}${f(269, 212, "key in the lock: a growth message", { size: 9 })}
      ${t(91, 30, 'antiestrogen', { size: 10, fill: VIO, w: 900 })}${f(91, 44, "antiestrogen, such as tamoxifen", { size: 9 })}
      <g transform="translate(0 16)">${cell(91)}${lock(91, 66)}<rect x="81" y="44" width="20" height="10" rx="3" fill="#7048e8"/>${key(132, 76, '#e64980')}<path d="M122 52 l18 18 M140 52 l-18 18" stroke="${BAD}" stroke-width="2.4"/></g>
      ${f(91, 196, "the drug blocks the lock", { size: 9.3, fill: INK, w: 800 })}${f(91, 212, "oestrogen has no place to go", { size: 9 })}
      ${f(180, 258, "An aromatase inhibitor reduces oestrogen production", { size: 9.3, fill: VIO, w: 700 })}`, "Hormone therapy");
  };

  /* پیوند سلول بنیادی */
  A['stem-cell'] = () => {
    const a = 'm' + (++UID), sh = 's' + (++UID);
    const step = (x, n, en, fa, ic) => `${card(x, 30, 80, 150, '#fff', sh)}<circle cx="${x + 40}" cy="44" r="11" fill="${VIO}"/>${t(x + 40, 48, n, { size: 11, fill: '#fff', w: 900 })}${ic}${t(x + 40, 140, en, { size: 9, fill: VIO, w: 900 })}${f(x + 40, 156, fa[0], { size: 8.8, fill: INK, w: 700 })}${f(x + 40, 170, fa[1], { size: 8.4 })}`;
    const sc = (x, y) => `<circle cx="${x}" cy="${y}" r="7" fill="#d0bfff" stroke="#7048e8"/><circle cx="${x}" cy="${y}" r="3" fill="#7048e8"/>`;
    return svg(360, 250, `<defs>${marker(a, VIO)}${shadow(sh)}</defs>${f(180, 18, "Stem cell transplant in leukaemia and lymphoma", { size: 11, fill: INK, w: 800 })}
      ${step(274, '1', 'collect', ["harvesting cells", "from marrow or blood"], `${sc(306, 86)}${sc(322, 98)}${sc(306, 108)}`)}
      ${step(184, '2', 'high-dose', ["intensive chemotherapy", "destroying the patient’s marrow"], `${cellC(216, 90, 9, 111)}${cellC(234, 104, 8, 113)}<path d="M206 80 l38 34" stroke="${BAD}" stroke-width="3"/>`)}
      ${step(94, '3', 'infusion', ["infusing the cells", "through a vein"], `<rect x="124" y="70" width="20" height="30" rx="5" fill="#fff" stroke="${VIO}" stroke-width="2"/>${sc(134, 86)}<path d="M134 100 v16" stroke="${VIO}" stroke-width="2"/>`)}
      ${step(4, '4', 'engraftment', ["engraftment", "and making blood"], `${sc(30, 88)}<circle cx="50" cy="94" r="6" fill="#ff8787"/><circle cx="36" cy="108" r="6" fill="#ff8787"/><ellipse cx="56" cy="110" rx="3" ry="2" fill="#fab005"/>`)}
      ${[272, 182, 92].map(x => `<path d="M${x} 104 h-6" stroke="${VIO}" stroke-width="2" marker-end="url(#${a})"/>`).join('')}
      <rect x="6" y="190" width="348" height="52" rx="12" fill="${VIO_BG}"/>${f(180, 210, "BMT from bone marrow • PBSCT from peripheral blood", { size: 9.8, fill: VIO, w: 800 })}${f(180, 228, "Complication: GVHD, the donor’s immune cells attacking the recipient’s body", { size: 9.3, fill: VIO })}`, "stem cell transplant");
  };

  /* هدف‌های درمان */
  A['care-goals'] = () => {
    const sh = 's' + (++UID);
    const rows = [['curative', "definitive cure", "aim: eradicating the cancer", '#2b8a3e', '#ebfbee', '🎯'], ['palliative', "palliative", "relieving pain and symptoms, without a cure", '#e67700', '#fff9db', '🕊️'],
      ['prophylactic', "prophylactic", "removing a precancerous lesion", '#1c7ed6', '#e7f5ff', '🛡️'], ['supportive', "supportive", "antiemetics, nutrition, port", '#7048e8', VIO_BG, '🤝'], ['rehabilitative', "rehabilitation", "breast reconstruction after mastectomy", '#c2255c', '#fff0f6', '🌱']];
    return svg(360, 280, `<defs>${shadow(sh)}</defs>${f(180, 20, "What is the aim of treatment?", { size: 11, fill: INK, w: 800 })}
      ${rows.map(([en, fa, d, c, bg, e], i) => { const y = 32 + i * 48; return `${card(6, y, 348, 42, bg, sh)}<text x="330" y="${y + 28}" font-size="18" text-anchor="middle">${e}</text>${t(300, y + 18, en, { size: 10.5, fill: c, w: 900, anchor: 'end' })}${f(300, y + 34, fa, { size: 9.3, fill: INK, w: 800, anchor: 'end' })}${f(18, y + 26, d, { size: 9, anchor: 'start' })}`; }).join('')}`, "Aims of cancer treatment");
  };
  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* مهار — دنیای ۱: زبان سرطان (پایه همه دنیاها)
 * پیش از سلول، نام‌گذاری، نشانه‌ها، تشخیص و درمان، «دستور زبان» واژه‌های سرطان را یاد می‌گیریم:
 * ریشه‌های تومور و بافت، پسوندهای رشد و بیماری و جراحی، پیشوندها، جمع و صفت، تیم درمان و اختصارهای پرونده.
 * منابع: فصل Cancer Medicine (جدول‌های ۲۰-۱، ۲۰-۲، ۲۰-۷ و ۲۰-۸ و خلاصه ترخیص).
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: "Language of Cancer", short: "Language", sub: "Tumour and tissue roots, suffixes of growth, diagnosis and surgery, prefixes, plurals and adjectives, the care team and record abbreviations",
    color: '#4C6EF5', dark: '#3448B8', light: '#E5EBFF',
    levels: ["Cancer Roots", "Suffixes and prefixes", "Chart language"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: ریشه‌های سرطان ================= */
      {
        id: 'lx1', title: "Every word is a puzzle", icon: '🧩', items: [
          L("Break the word apart", `Cancer terms are built from a few <b>fixed pieces</b>: the <b>root</b>, which says “which tissue?”, and the <b>suffix</b>, which says “what happened?”.${fig('wordparts', '', "osteosarcoma: malignant cancer of the connective tissue of bone.")}${memo("Read the meaning from the end: first the suffix (what happened?), then the root (where?).")}`),
          L("Three roots for cancer", `${tbl([["root", "Meaning", "Example"], [e('onc/o'), "tumour", "oncology: the science of cancer"], [e('carcin/o'), "cancer (of epithelial tissue)", 'carcinoma'], [e('sarc/o'), "flesh, connective tissue", 'sarcoma']])}And the basic suffix for all of them: ${e('-oma')} means <b>tumour, mass</b>.${pearl("The hospital’s cancer department is called “oncology”: onc/o + -logy.")}`),
          M(`${e('<b>oncology</b>')} means…`, ["the study of tumours and cancer", "the study of blood", "the study of tissues", "the study of cells"], "onc/o (tumour) + -logy (study)."),
          P("Match each root to its meaning", [['onc/o', "tumour"], ['carcin/o', "cancer of epithelial tissue"], ['sarc/o', "supporting tissue such as bone and tendon"], ['-oma', "tumour, mass"]]),
          L("Two roots for “new growth”", `${wb('neo-', '-plasm')} = <b>neoplasm</b>: neo- means <b>new</b> and ${e('-plasm')} means <b>growth, formation</b>; so “new growth”. In practice neoplasm and <b>tumor</b> mean the same: a mass of cells growing without purpose.${memo("neo as in “neon”: something new and bright; but this new growth is useless!")}`),
          M(`${e('<b>neoplasm</b>')} means…`, ["new, misplaced growth of tissue; a tumour", "inflammation of tissue", "cell death", "a skin wound"], "neo- (new) + -plasm (growth)."),
          T("neoplasm and tumor mean almost the same.", true, "Both mean a mass of abnormal cell growth."),
          B("In carcinoma, the suffix ___ means “tumour”.", ['-oma', 'carcin/o', '-plasm'], "carcin/o (cancer) + -oma (tumour)."),
          W("Build a word meaning “the study of tumours and cancer”", ['onc/o', '-logy'], ['-logist', 'carcin/o', '-oma'], 'onc/o + -logy = oncology.'),
          S("Spell the term for the study of tumours and cancer", 'oncology', 'onc/o + -logy.', 'onco…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx2', title: "Benign or Malignant?", icon: '⚖️', items: [
          L("Two big groups of tumour", `Every tumour is either <b>benign</b> or <b>malignant</b>. The word <b>cancer</b> is used only for a malignant tumour.${fig('benign-malignant')}`),
          M(`${e('<b>malignant</b>')} means…`, ["malignant; cancerous and invasive", "not cancerous", "inflammatory", "precancerous"], "mal- means bad."),
          L("The difference at a glance", `${vs(['benign', "slow, encapsulated, only presses on its surroundings, no metastasis"], ['malignant', "fast, no capsule, invades nearby tissue, metastasises through blood and lymph"])}${memo("benign starts like bene, “good” in Latin (as in benefit); malignant starts with mal, “bad” (as in malpractice).")}`),
          P("Match each feature to its type of tumour", [["encapsulated and slow", 'benign'], ["metastasis through blood and lymph", 'malignant'], ["any malignant tumour", 'cancer']]),
          T("The word cancer is used for all tumours, benign or malignant.", false, "False; cancer is used only for a malignant tumour."),
          L("General record terms", `${tbl([["Term", "Meaning"], [e('lesion'), "lesion; any abnormal area of tissue"], [e('mass'), "mass; may or may not be cancer"], [e('cancerous'), "cancer"], [e('precancerous'), "precancerous; likely to become cancer"], [e('neoplastic'), "relating to new growth"]])}${pearl("Until the biopsy result comes, the doctor says “mass” or “lesion”, not “cancer”; a definite diagnosis comes from sampling.")}`),
          M("An ultrasound report reads “a 2 cm mass”. This means…", ["a 2-cm lump whose type is not yet known", "definite cancer", "inflammation", "a definite cyst"], "mass just means a lump."),
          B("A lesion that may turn into cancer is ___.", ['precancerous', 'benign', 'metastatic'], "pre- (before) + cancerous."),
          S("Spell the term for a tumour that is not cancerous", 'benign', "The g is silent: “bi-NINE”.", 'ben…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx3', title: "Tissue roots", icon: '🧱', items: [
          L("Tissues in tumour names", `Each tumour’s name tells which tissue it arose from (Table 20-2 of the book):${tbl([["root", "Meaning", "benign tumour"], [e('aden/o'), "gland", 'adenoma'], [e('angi/o'), "vessel", 'angioma'], [e('chondr/o'), "firm shock-absorbing connective tissue", 'chondroma'], [e('fibr/o'), "fibrous tissue", 'fibroma'], [e('lip/o'), "fat", 'lipoma'], [e('my/o'), "muscle", 'myoma'], [e('neur/o'), "nerve", 'neuroma'], [e('oste/o'), "bone", 'osteoma']])}`),
          P("Match each root to its meaning", [['aden/o', "gland"], ['chondr/o', "firm shock-absorbing connective tissue"], ['lip/o', "fat"], ['oste/o', "bone"]]),
          M(`${e('<b>lipoma</b>')} means…`, ["benign fatty tumour", "fat cancer", "gland tumour", "inflammation of fat"], "lip/o (fat) + -oma."),
          L("Two roots that get mixed up", `${vs(['my/o', "muscle: myoma, myocardial"], ['myel/o', "bone marrow: myeloma, myelogenous"])}${memo("myel/o has an extra “el”; think of the marrow hidden inside the bone.")}`),
          M(`${e('<b>myelogenous</b>')} means…`, ["produced in the bone marrow", "relating to muscle", "relating to nerve", "relating to a gland"], "myel/o = bone marrow."),
          T("my/o and myel/o both mean muscle.", false, "False; myel/o means bone marrow."),
          B("A benign cartilage tumour is called a ___.", ['chondroma', 'chondrosarcoma', 'osteoma'], 'chondr/o + -oma.'),
          W("Build a word meaning “benign tumour of a gland”", ['aden/o', '-oma'], ['carcin/o', 'lip/o', '-plasm'], 'aden/o + -oma = adenoma.'),
          L("Review of “Cancer Roots”", recap(["onc/o tumour • carcin/o cancer of epithelial tissue • sarc/o connective tissue • -oma tumour", "neoplasm = neo- (new) + -plasm (growth); the same as tumor", "benign is harmless and malignant is cancerous; cancer only for malignant", "Tissues: aden/o gland, chondr/o cartilage, fibr/o fibrous, lip/o fat, my/o muscle, oste/o bone; myel/o bone marrow"])),
          N('m2r:lx')
        ]
      },

      /* ================= سطح ۲: پسوندها و پیشوندها ================= */
      {
        id: 'lx4', title: "Growth Suffixes", icon: '🌱', items: [
          L("Growth and formation", `${tbl([["suffix", "Meaning", "Example"], [e('-plasia'), "growth, development", "hyperplasia, dysplasia"], [e('-plasm'), "growth, formation", 'neoplasm'], [e('-genesis'), "origin", 'carcinogenesis'], [e('-genic'), "producing, causing", 'oncogenic'], [e('-gen'), "causing agent", 'carcinogen'], [e('-stasis'), "standing", 'metastasis']])}`),
          M(`${e('<b>carcinogen</b>')} means…`, ["cancer-causing agent", "cancer cell", "an anticancer drug", "a kind of biopsy"], "carcin/o + -gen (producing agent)."),
          P("Match each suffix to its meaning", [['-plasia', "growth, development"], ['-genesis', "origin"], ['-stasis', "standing"], ['-gen', "causing agent"]]),
          L("Sign and disease suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-emia'), "blood condition", "leukemia, anemia"], [e('-penia'), "deficiency", 'thrombocytopenia'], [e('-pathy'), "disease", 'lymphadenopathy'], [e('-uria'), "condition of urine", 'hematuria'], [e('-ptysis'), "spitting, sputum", 'hemoptysis']])}${memo("leuk/o + -emia = “white blood”: in leukaemia immature white cells fill the blood.")}`),
          M(`${e('<b>thrombocytopenia</b>')} means…`, ["shortage of platelets", "rise in platelets", "a clot in a vessel", "cancer of platelets"], "thromb/o + cyt/o + -penia (deficiency)."),
          T("-penia means increase.", false, "False; -penia means deficiency."),
          B("In leukemia, the suffix ___ means “condition of the blood”.", ['-emia', '-oma', '-penia'], "leuk/o (white) + -emia."),
          W("Build a word meaning “formation of cancer”", ['carcin/o', '-genesis'], ['-gen', 'onc/o', '-oma'], 'carcin/o + -genesis = carcinogenesis.'),
          S("Spell the term for a cancer-causing agent", 'carcinogen', 'carcin/o + -gen.', 'carcino…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx5', title: "Diagnostic and surgical suffixes", icon: '🔧', items: [
          L("Seeing and recording", `${tbl([["suffix", "Meaning", "Example"], [e('-scopy'), "viewing with an endoscope", 'colonoscopy'], [e('-scope'), "viewing instrument", 'bronchoscope'], [e('-opsy'), "viewing", 'biopsy'], [e('-graphy'), "process of recording an image", 'mammography'], [e('-gram'), "the image itself", 'mammogram']])}${memo("biopsy = bi/o (life) + -opsy (viewing): “viewing living tissue” under the microscope.")}`),
          M(`${e('<b>mammogram</b>')} means…`, ["X-ray image of the breast", "the process of imaging the breast", "removal of the breast", "breast biopsy"], "mamm/o + -gram (the image itself)."),
          L("Removal, incision or opening?", `${fig('ectomy-tomy-stomy')}${vs(['-ectomy', "mastectomy: removal of the breast (mast/o); colectomy: removal of the large intestine"], ['-stomy', "colostomy: making an opening of the colon on the abdomen"])}${e('-tomy')} means incision: thoracotomy, incision of the chest • ${e('-therapy')} means treatment: chemotherapy, drug treatment`),
          P("Match each suffix to its meaning", [['-ectomy', "removal"], ['-tomy', "incision"], ['-stomy', "making an opening"], ['-therapy', "treatment"]]),
          M(`${e('<b>thoracotomy</b>')} means…`, ["incision through the chest wall", "removal of the chest", "viewing inside the chest", "an opening on the chest"], "thorac/o + -tomy (incision)."),
          T("colectomy and colostomy mean the same thing.", false, "False; colectomy is removal of the large intestine and colostomy is making an opening of the colon on the abdomen."),
          B("In chemotherapy, the suffix ___ means “treatment”.", ['-therapy', 'chem/o', '-tomy'], "chem/o (drug) + -therapy."),
          W("Build a word meaning “removal of the breast”", ['mast/o', '-ectomy'], ['-tomy', 'mamm/o', '-gram'], 'mast/o + -ectomy = mastectomy.'),
          S("Spell the term for removing tissue for examination", 'biopsy', 'bi/o + -opsy.', 'bio…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx6', title: "Prefixes", icon: '📍', items: [
          L("Prefixes of Cell Change", `${tbl([["prefix", "Meaning", "Example"], [e('neo-'), "new", 'neoplasm'], [e('hyper-'), "excessive", 'hyperplasia'], [e('dys-'), "abnormal, difficult", "dysplasia, dysphagia"], [e('meta-'), "change, beyond", "metaplasia, metastasis"], [e('ana-'), "backward, without", 'anaplasia']])}${memo("meta as in “metamorphosis”: change of form. metastasis means the cancer has changed its place.")}`),
          M(`In ${e('<b>metastasis</b>')}, the prefix meta- means…`, ["change, beyond", "new", "before", "against"], "meta- + -stasis (standing)."),
          P("Match each prefix to its meaning", [['neo-', "new"], ['dys-', "abnormal"], ['hyper-', "excessive"], ['ana-', "without, backward"]]),
          L("Prefixes of treatment and time", `• ${e('anti-')} against: antineoplastic, antiemetic<br>• ${e('pre-')} before: precancerous<br>• ${e('pro-')} before, forward: prophylactic, preventive<br>• ${e('brachy-')} short, near: brachytherapy, radiotherapy from close by<br>• ${e('trans-')} through: transrectal ultrasound${pearl("antineoplastic is an anticancer drug: anti- + neo- + plas/o + -tic.")}`),
          M("Which word means “a drug against new growth” (anticancer)?", ['antineoplastic', 'neoplastic', 'antiemetic', 'precancerous'], 'anti- + neo- + plas/o + -tic.'),
          T("brachytherapy means radiotherapy from a distance.", false, "False; brachy- means near: the radiation source sits beside the tumour."),
          B("The prefix ___ in precancerous means “before”.", ['pre-', 'pro-', 'meta-'], "pre- = before."),
          W("Build a word meaning “abnormal growth of cells”", ['dys-', '-plasia'], ['hyper-', 'neo-', '-plasm'], 'dys- + -plasia = dysplasia.'),
          L("Review of the level “Suffixes and prefixes”", recap(["Growth: -plasia, -plasm, -genesis, -gen, -genic; -stasis standing", "Signs: -emia blood, -penia deficiency, -pathy disease, -uria urine, -ptysis spitting", "Diagnosis and surgery: -scopy, -opsy, -graphy, -gram; -ectomy removal, -tomy incision, -stomy opening", "Prefixes: neo- new, hyper- excessive, dys- abnormal, meta- change, ana- without, anti- against, pre- before, brachy- near"])),
          N('m2r:lx')
        ]
      },

      /* ================= سطح ۳: زبان پرونده ================= */
      {
        id: 'lx7', title: "Singular, plural and adjective", icon: '📚', items: [
          L("Latin and Greek plurals", `${fig('plurals')}${memo("“IS” goes, “ES” comes: metastasis → metastases. “US” goes, “I” comes: nevus → nevi.")}`),
          M("What is the plural of metastasis?", ['metastases', 'metastasises', 'metastasi', 'metastasa'], '‎-is → ‎-es.'),
          P("Match each singular to its plural", [['nevus', 'nevi'], ['diagnosis', 'diagnoses'], ['carcinoma', 'carcinomata'], ['polyp', 'polyps']]),
          L("Adjectives in the pathology report", `${tbl([["Adjective", "Meaning"], [e('malignant'), "cancerous and spreading"], [e('benign'), "not cancerous"], [e('metastatic'), "metastatic; spread"], [e('neoplastic'), "relating to new growth"], [e('invasive'), "invasive"], [e('in situ'), "in situ; not yet invasive"]])}${pearl("In a report, “metastatic adenocarcinoma, consistent with colon primary” means a cancer that has spread and originated in the large intestine.")}`),
          M("“metastatic” means…", ["spread from its original site", "in place and not invasive", "not cancerous", "precancerous"], "meta- (change) + -stasis + -ic."),
          T("The plural of carcinoma can be carcinomata or carcinomas.", true, "The Latin form is carcinomata and the English form carcinomas."),
          B("The Latin plural of leiomyoma is leiomyo___.", ['mata', 'mi', 'mae'], '‎-oma → ‎-omata.'),
          M("“in situ” in a report means the cancer…", ["is still in its place and has not invaded", "has gone all over the body", "is benign", "has been treated"], "in situ = in its place."),
          S("Spell the plural of nevus", 'nevi', 'nevus → nevi.', 'nev…'),
          N('sp:lx')
        ]
      },
      {
        id: 'lx8', title: "The Cancer Team", icon: '👩‍⚕️', items: [
          L("Teamwork", `Cancer treatment is not one person’s job; a team of specialists decides together at the <b>tumor board</b>:${fig('onc-team')}`),
          L("Who does what?", `${tbl([["Title", "Job"], ['medical oncologist', "chemotherapy, hormone therapy and coordinating treatment"], ['surgical oncologist', "biopsy and tumour removal"], ['radiation oncologist', "treatment with radiation"], ['pathologist', "diagnosis and staging by examining tissue"], ['hematologist', "blood diseases, leukaemia and lymphoma"], ['oncology nurse', "giving drugs and caring for side effects"]])}`),
          M("Who examines biopsy tissue under the microscope and makes the definitive diagnosis?", ['pathologist', 'radiation oncologist', 'oncology nurse', 'surgical oncologist'], "path/o (disease) + -logist."),
          P("Match each specialist to their work", [['medical oncologist', "drug treatment of cancer"], ['radiation oncologist', "treatment with radiation"], ['surgical oncologist', "removal of a tumour"], ['hematologist', "leukaemia and lymphoma"]]),
          L("Roots: the secret of the titles", `• ${wb('onc/o', '-logist')} → tumour specialist<br>• ${wb('path/o', '-logist')} → disease (tissue) specialist<br>• ${wb('hemat/o', '-logist')} → blood specialist<br>• ${wb('cyt/o', '-logy')} → study of cells; ${wb('hist/o', '-logy')} → study of tissues${pearl("For children, a pediatric oncologist leads treatment; childhood cancers differ from adult ones.")}`),
          M("cytology means…", ["the study of cells; examining cells under the microscope", "the study of tissues", "the study of blood", "the study of tumours"], "cyt/o (cell) + -logy."),
          T("A tumor board is a meeting where different specialists decide on a patient’s treatment together.", true, "The tumour board."),
          B("The study of tissues under the microscope is called ___.", ['histology', 'cytology', 'oncology'], "hist/o (tissue) + -logy."),
          S("Spell the term for a doctor who diagnoses disease from tissue", 'pathologist', 'path/o + -logist.', 'patho…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx9', title: "Chart language", icon: '📋', items: [
          L("Charts are written in abbreviations", `${tbl([["abbreviation", "Full form", "Meaning"], ["CA, Ca", "cancer, carcinoma", "cancer"], ['Dx', 'diagnosis', "diagnosis"], ['Tx', 'treatment', "treatment"], ['Bx', 'biopsy', "tissue sample"], ['Hx', 'history', "history of"], ['mets', 'metastases', "metastases"], ['s/p', 'status post', "after (an operation)"], ['F/U', 'follow-up', "follow-up"], ['NED', 'no evidence of disease', "no evidence of disease"]])}`),
          M("The record says “s/p mastectomy”. This means…", ["the patient has already had a mastectomy", "the patient needs a mastectomy", "mastectomy is forbidden", "a mastectomy will not be done"], 's/p = status post.'),
          P("Match each abbreviation to its meaning", [['Bx', "tissue sample"], ['Dx', "diagnosis"], ['mets', "metastases"], ['F/U', "follow-up"]]),
          L("A real discharge summary", `From the book’s discharge summary: a 28-year-old woman with thyroid <b>papillary carcinoma</b>, <b>s/p</b> left thyroidectomy, was admitted for a second dose of <b>I-131</b>. Discharge medicine: Synthroid 0.1 mg <b>p.o.</b> <b>q.d.</b>${tbl([["abbreviation", "Meaning"], ['p.o.', "per os: by mouth"], ['q.d.', "quaque die: once a day"], ['mCi', "millicurie: unit of radioactivity"], ['I-131', "radioactive iodine-131"]])}`),
          M("“p.o. q.d.” means the drug is taken…", ["by mouth, once a day", "by injection, twice a day", "by mouth, every night", "under the tongue, every week"], 'per os + quaque die.'),
          T("NED in a follow-up record is good news.", true, "no evidence of disease: there is no sign of disease."),
          B("The abbreviation ___ means patient history.", ['Hx', 'Dx', 'Tx'], 'history.'),
          M("“Ca colon with liver mets” means…", ["cancer of the large intestine with metastases to the liver", "liver cancer", "high calcium in the bowel", "liver inflammation"], "Ca = cancer; mets = metastases."),
          L("Review of the level “Chart language”", recap(["Plurals: -is → -es (metastases) • -us → -i (nevi) • -oma → -omata (carcinomata)", "Adjectives: malignant, benign, metastatic, neoplastic, invasive, in situ", "Team: medical, surgical and radiation oncologists, pathologist, hematologist, oncology nurse; tumor board", "Record: CA, Dx, Tx, Bx, Hx, mets, s/p, p.o., q.d., F/U, NED"])),
          N('ab:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* مهار — دنیای ۲: سلول و رشد تومور
 * از تقسیم مهارشده سلول طبیعی شروع می‌کنیم، تمایز و تفاوت خوش‌خیم و بدخیم (جدول ۲۰-۱) را می‌بینیم،
 * پله‌های تغییر سلول را از hyperplasia تا سرطان مهاجم دنبال می‌کنیم و در پایان پیدایش و گسترش سرطان را.
 * منابع: فصل Cancer Medicine و مفاهیم پایه زیست سرطان. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'cl', sym: 'Cell', name: "The Cell and Tumour Growth", short: "Cell", sub: "Controlled division, differentiation, benign and malignant, steps of cell change, genes and carcinogens, metastasis",
    color: '#12B886', dark: '#0B7F5C', light: '#DDF7EE',
    levels: ["Normal and Cancerous Growth", "Cell Changes", "Origin and Spread"],
    gens: EA.genIds('cl'),
    lessons: [
      /* ================= سطح ۱: رشد طبیعی و سرطانی ================= */
      {
        id: 'cl1', title: "Controlled Division", icon: '🔬', items: [
          L("Cells divide only as much as needed", `Body cells replace damaged and old cells by <b>mitosis</b> (cell division). This division is tightly controlled in the <b>cell cycle</b>: once the space is filled, division stops.${fig('cell-division')}`),
          M("What is the division of one cell into two identical cells called?", ['mitosis', 'apoptosis', 'metastasis', 'necrosis'], 'mitosis.'),
          L("Programmed death", `An old or damaged cell bows out quietly by <b>apoptosis</b> (programmed death). A cancer cell has two features:<br>• uncontrolled <b>proliferation</b><br>• escape from apoptosis${vs(['apoptosis', "orderly, programmed death of a single cell"], ['necrosis', "sudden tissue death from injury or lack of blood"])}${memo("Say apoptosis as “a-po-TOE-sis” (the second p is silent); like an autumn leaf that falls quietly from the tree by itself.")}`),
          P("Match each term to its meaning", [['mitosis', "cell division"], ['apoptosis', "Programmed death"], ['proliferation', "rapid multiplication of cells"], ['cell cycle', "sequence of growth and division"]]),
          T("A cancer cell escapes apoptosis.", true, "That is why it survives and piles up."),
          M("What do normal cells do when they reach their neighbours?", ["they stop dividing", "they pile up on each other", "they go into the blood", "they get bigger"], "Controlled division."),
          B("Rapid growth and division of cells is called ___.", ['proliferation', 'apoptosis', 'differentiation'], "proliferation = multiplication."),
          M("Cancer in one sentence is…", ["uncontrolled division of cells that can invade other tissues", "inflammation of tissue", "the death of cells", "a shortage of cells"], "The book’s definition."),
          S("Spell the term for division of a cell into two", 'mitosis', "mit/o (thread) + -osis.", 'mito…'),
          N('t2f:cl')
        ]
      },
      {
        id: 'cl2', title: "differentiation", icon: '🎓', items: [
          L("A mature cell has a special shape and job", `<b>differentiation</b> means a cell matures and takes on its special structure and job. The more a tumour’s cells resemble normal cells (<b>well differentiated</b>), the calmer the tumour.${fig('differentiation')}`),
          M("well differentiated means the tumour cells…", ["closely resemble normal cells", "bear no resemblance to normal cells", "are dead", "are in the blood"], "Well differentiated; calmer behaviour."),
          L("Three states of differentiation", `${tbl([["Term", "Meaning", "Behaviour"], [e('well differentiated'), "resembles a normal cell", "slow; benign or low grade"], [e('poorly differentiated'), "very different", "fast; malignant and high grade"], [e('undifferentiated'), "without features of a mature cell", "highly aggressive"]])}<b>anaplasia</b> (ana- + -plasia) means loss of differentiation; a sign of a malignant cell.${pearl("The pathologist uses this differentiation to set the tumour’s grade: grade 1 is well differentiated and grade 3 poorly differentiated.")}`),
          P("Match each term to its meaning", [['well differentiated', "resembles a normal cell"], ['poorly differentiated', "very different from a normal cell"], ['anaplasia', "loss of differentiation"], ['differentiation', "maturing of a cell"]]),
          T("A poorly differentiated tumour usually grows faster.", true, "Poorly differentiated = more malignant."),
          M("Which grade means the cells are well differentiated?", ['grade 1', 'grade 3', 'stage IV', 'M1'], "Low grade = resembles a normal cell."),
          B("Loss of cell differentiation is called ___.", ['anaplasia', 'hyperplasia', 'metaplasia'], "ana- (without) + -plasia."),
          W("Build a word meaning “loss of cell differentiation”", ['ana-', '-plasia'], ['dys-', 'hyper-', '-plasm'], 'ana- + -plasia = anaplasia.'),
          S("Spell the term for a cell maturing into its special form", 'differentiation', 'differentiate + -ion.', 'differ…'),
          N('d2t:cl')
        ]
      },
      {
        id: 'cl3', title: "Benign versus Malignant", icon: '⚖️', items: [
          L("Table 20-1 of the book", `${tbl([["Feature", 'benign', 'malignant'], ["Cell differentiation", "good", "low"], ["Type of growth", "expansion (pressing on its surroundings)", "infiltration (spreading into its surroundings)"], ["Rate of growth", "slow", "fast"], ["Spread", "applied to the skin", "metastasis through blood and lymph"]])}${fig('benign-malignant')}`),
          M("What type of growth does a malignant tumour have?", ["infiltration; spreading into nearby tissue", "expansion; pressure only", "no growth", "only inside a capsule"], "Table 20-1."),
          L("Capsule, infiltration, invasion", `• <b>encapsulated</b>: enclosed in a capsule; a feature of many benign tumours<br>• <b>infiltration</b>: malignant cells seeping into neighbouring tissue<br>• <b>invasion</b>: attacking the healthy tissue around it${memo("A benign tumour is a “ball in a bag”: it pushes but does not pierce. A malignant one is a “crab”: it digs its claws into the tissue. cancer is Latin for crab!")}`),
          P("Match each feature to its meaning", [['encapsulated', "enclosed in a capsule"], ['infiltration', "spreading into nearby tissue"], ['expansion', "growing by pressing on its surroundings"], ['metastasis', "spreading to a distant site"]]),
          T("Benign tumours metastasise.", false, "False; a benign tumour stays local."),
          M("Which features most suggest malignancy?", ["poorly differentiated and infiltration", "encapsulated and slow growth", 'well differentiated', "staying local"], "Table 20-1."),
          B("A benign tumour grows by ___ and only pushes the surrounding tissue aside.", ['expansion', 'infiltration', 'metastasis'], "expansion = growing by pressure."),
          L("Review of “Normal and Cancerous Growth”", recap(["mitosis is cell division in the cell cycle; apoptosis programmed death; proliferation multiplication", "Cancer cell: uncontrolled division and escape from apoptosis", "differentiation: well (resembles normal) • poorly • undifferentiated; anaplasia means loss of differentiation", "benign: encapsulated, expansion, slow, local • malignant: infiltration, invasion, fast, metastasis"])),
          N('m2r:cl')
        ]
      },

      /* ================= سطح ۲: تغییرات سلول ================= */
      {
        id: 'cl4', title: "Steps of Change", icon: '🪜', items: [
          L("From normal to cancer", `Epithelial tissue usually moves towards cancer step by step:${fig('plasia-steps')}`),
          L("Four words with -plasia", `${tbl([["Term", "Meaning"], [e('hyperplasia'), "more cells, but normal; they may become cancerous later"], [e('metaplasia'), "one type of mature cell turning into another, often in response to irritation"], [e('dysplasia'), "abnormal cells; precancerous"], [e('neoplasia'), "formation of new growth (a tumour)"]])}${memo("hyper = excessive • meta = change • dys = misshapen • neo = new; all with -plasia meaning “growth”.")}`),
          M(`${e('<b>hyperplasia</b>')} means…`, ["an increase in the number of normal-looking cells", "misshapen cells", "change of cell type", "the death of cells"], 'hyper- + -plasia.'),
          P("Match each term to its meaning", [['hyperplasia', "more cells, normal appearance"], ['metaplasia', "change of cell type"], ['dysplasia', "abnormal cells"], ['neoplasia', "tumour formation"]]),
          O("Put the steps of tissue change in order", ['hyperplasia', 'dysplasia', 'carcinoma in situ', 'invasive carcinoma'], "From simple change to invasive cancer."),
          T("Dysplasia is invasive cancer.", false, "False; dysplasia is precancerous and not yet cancer."),
          L("A clinical example", `In the oesophagus of a patient with long-standing acid reflux, the squamous lining turns into a glandular lining: <b>metaplasia</b>, called Barrett esophagus.${pearl("The Pap smear looks for cervical dysplasia; removing the dysplastic area prevents cancer.")}`),
          M("What is the change of the oesophageal lining in long-standing reflux called?", ['metaplasia', 'hyperplasia', 'anaplasia', 'apoptosis'], "meta- = change."),
          S("Spell the term for abnormal, precancerous cell growth", 'dysplasia', 'dys- + -plasia.', 'dys…'),
          N('wb:cl')
        ]
      },
      {
        id: 'cl5', title: "In Situ or Invasive?", icon: '🚧', items: [
          L("The basement membrane border", `Beneath epithelial tissue lies a thin layer called the <b>basement membrane</b>:${vs(['carcinoma in situ', "cancer cells are still above the basement membrane; in situ"], ['invasive carcinoma', "cells have crossed the basement membrane into the tissue below"])}${memo("in situ is Latin for “in its own place”: the cancer has not yet left home.")}`),
          M("carcinoma in situ means…", ["a cancer that has not yet crossed the basement membrane", "a cancer that has gone to the liver", "benign tumour", "inflammation of epithelial tissue"], "in situ = in place."),
          L("Why does it matter?", `The book says carcinoma in situ is <b>cured</b> by complete removal (excision), because it does not yet reach the vessels and lymph. An important example: <b>ductal carcinoma in situ</b> (DCIS) in the breast ducts.${pearl("Invasive cancer reaches the blood and lymph vessels of the tissue below; from here the route to metastasis opens.")}`),
          T("Carcinoma in situ can be cured by complete removal.", true, "It has not yet spread."),
          P("Match each term to its meaning", [['in situ', "still in its place"], ['invasive', "spreading into deeper tissue"], ['DCIS', "ductal carcinoma in situ of the breast"], ['basement membrane', "thin layer beneath the epithelium"]]),
          L("The tumour’s dead centre", `Fast-growing tumours sometimes outgrow their blood supply, and their centre undergoes <b>necrosis</b> (tissue death; necr/o = dead). To escape this, the tumour builds new vessels: <b>angiogenesis</b> (angi/o vessel + -genesis formation).`),
          M("What is the building of new vessels to feed a tumour called?", ['angiogenesis', 'apoptosis', 'carcinogenesis', 'metaplasia'], 'angi/o + -genesis.'),
          B("Tissue death in the centre of a tumour is called ___.", ['necrosis', 'mitosis', 'dysplasia'], "necr/o = dead."),
          W("Build a word meaning “formation of vessels”", ['angi/o', '-genesis'], ['carcin/o', '-gen', '-oma'], 'angi/o + -genesis = angiogenesis.'),
          N('t2f:cl')
        ]
      },
      {
        id: 'cl6', title: "Accelerator and Brake Genes", icon: '🧬', items: [
          L("Cancer is a disease of genes", `A <b>mutation</b> is a lasting change in a cell’s DNA; it may be inherited or arise during life. Two groups of genes play the main part in cancer: <b>oncogenes</b> and <b>tumor suppressor genes</b>.${fig('gas-brake')}`),
          M("What does an oncogene resemble?", ["a stuck accelerator pedal", "broken brakes", "the tumour capsule", "an anticancer drug"], "It keeps giving the order to divide."),
          L("broken brakes", `• <b>oncogene</b>: a mutated gene that forces the cell to divide non-stop<br>• <b>tumor suppressor gene</b>: a gene that slows division and repairs DNA; if it fails, the brakes are lost<br>• <b>BRCA1</b> and BRCA2: suppressor genes whose inherited mutation greatly raises the risk of breast and ovarian cancer${pearl("BRCA1/BRCA2 testing is for women with several relatives who have had breast or ovarian cancer.")}`),
          P("Match each term to its meaning", [['mutation', "a lasting change in DNA"], ['oncogene', "a gene driving uncontrolled division"], ['tumor suppressor gene', "a gene that brakes division"], ['BRCA1', "a breast cancer gene"]]),
          T("A BRCA1 mutation raises the risk of breast and ovarian cancer.", true, "A tumour suppressor gene."),
          M("What happens if a tumour suppressor gene stops working?", ["the brakes on cell division are lost", "the cell dies sooner", "the tumour becomes benign", "nothing happens"], "Broken brakes."),
          B("A lasting change in a cell’s DNA is called a ___.", ['mutation', 'metastasis', 'mitosis'], "mut/a = change."),
          L("Review of “Cell Changes”", recap(["hyperplasia more cells • metaplasia change of type • dysplasia abnormal (precancerous) • neoplasia tumour formation", "carcinoma in situ is above the basement membrane and treatable by removal; invasive cancer has crossed it", "necrosis tissue death; angiogenesis building new vessels for the tumour", "mutation in DNA; oncogene the accelerator, tumor suppressor gene the brake; BRCA1 and BRCA2"])),
          N('ab:cl')
        ]
      },

      /* ================= سطح ۳: پیدایش و گسترش ================= */
      {
        id: 'cl7', title: "Carcinogens", icon: '☢️', items: [
          L("What causes cancer?", `${wb('carcin/o', '-gen')} = <b>carcinogen</b>: a cancer-causing agent. The process by which a normal cell becomes cancerous is called <b>carcinogenesis</b>.${fig('carcinogens')}`),
          M("carcinogenesis means…", ["the process of cancer formation", "cancer-causing agent", "cancer treatment", "cancer staging"], 'carcin/o + -genesis.'),
          L("Examples", `${tbl([["Cause", "cancer"], [e('tobacco'), "lung, mouth, bladder"], [e('ultraviolet radiation'), "skin: BCC, SCC, melanoma"], [e('asbestos'), "mesothelioma and lung"], [e('HPV'), "cervix, throat"], [e('EBV'), "some lymphomas"], [e('BRCA mutation'), "breast and ovary (inherited)"]])}${pearl("Anything that raises the risk of disease is a risk factor; stopping smoking is the most important step in preventing cancer.")}`),
          P("Match each agent to its cancer", [['asbestos', 'mesothelioma'], ['HPV', "cervical cancer"], ['ultraviolet radiation', "skin cancer"], ['tobacco', "lung cancer"]]),
          T("Viruses never play a part in cancer.", false, "False; HPV and EBV are oncogenic viruses."),
          M("oncogenic means…", ["tumour-causing", "antitumour", "not cancerous", "relating to treatment"], "onc/o + -genic (producing)."),
          B("Anything that raises the chance of disease is a ___ factor.", ['risk', 'tumor', 'growth'], 'risk factor.'),
          W("Build a word meaning “tumour-producing”", ['onc/o', '-genic'], ['carcin/o', '-genesis', '-oma'], 'onc/o + -genic = oncogenic.'),
          S("Spell the name of the mineral fibre that causes mesothelioma", 'asbestos', "A mineral fibre; a cause of mesothelioma.", 'asbes…'),
          N('t2f:cl')
        ]
      },
      {
        id: 'cl8', title: "spread of cancer", icon: '🛫', items: [
          L("Cancer travels", `${wb('meta-', '-stasis')} = <b>metastasis</b>: meta- means change and -stasis means standing; cancer cells break away from the <b>primary tumor</b> and build a new tumour elsewhere, a <b>secondary tumor</b>.${fig('metastasis-routes')}`),
          M("What is a new tumour formed by cancer spreading elsewhere called?", ['secondary tumor', 'primary tumor', 'benign tumor', 'cyst'], "A secondary tumour."),
          L("Three routes of spread", `${tbl([["Route", "Description"], ['local invasion', "direct invasion of nearby tissue"], [e('lymphatic spread'), "through lymph vessels to the lymph nodes"], [e('hematogenous spread'), "through the blood to distant organs: liver, lung, bone, brain"]])}${memo("hemat/o + -genous: “born of the blood”; that is, travelling in the blood.")}`),
          P("Match each route to its destination", [['lymphatic spread', "Lymph nodes"], ['hematogenous spread', "liver, lung, bone"], ['local invasion', "neighbouring tissue"]]),
          T("metastasize means the cancer spreads to another place.", true, "The verb from metastasis."),
          M("Which route most often carries cancer to the lymph nodes?", ['lymphatic spread', 'hematogenous spread', 'apoptosis', 'necrosis'], "The lymph vessels."),
          B("Spread of cancer through the blood is called ___ spread.", ['hematogenous', 'lymphatic', 'local'], "hemat/o = blood."),
          O("Put the steps of metastasis in order", ["cells break away from the primary tumour", "they enter a blood or lymph vessel", "they travel in the blood or lymph", "they settle in a distant organ and form a new tumour"], "meta (moving) + stasis (standing)."),
          S("Spell the term for cancer spreading to a distant site", 'metastasis', 'meta- + -stasis.', 'meta…'),
          N('f2t:cl')
        ]
      },
      {
        id: 'cl9', title: "Naming a Travelling Tumour", icon: '🏷️', items: [
          L("Named after its first home", `A secondary tumour has the same cells as the primary tumour and keeps <b>the same name</b>. The book says: if lung cancer spreads to the liver, the cells in the liver are “lung cancer cells” and the disease is <b>metastatic lung cancer</b>, not liver cancer.${memo("Cancer is like a traveller: wherever it goes, its birth certificate names its home town.")}`),
          M("What is colon cancer that has spread to the liver called?", ['metastatic colon cancer', 'liver cancer', 'colon and liver cancer', 'hepatoblastoma'], "The name of the primary tumour is kept."),
          L("In the pathology report", `${vs(['primary', "the tumour where the cancer began"], ['metastatic', "a tumour in a new place with the same cells"])}${pearl("If the pathologist sees glandular bowel cells in the liver, they write: “metastatic adenocarcinoma, colonic origin”.")}`),
          T("Breast cancer that has spread to bone is called “bone cancer”.", false, "False; it is metastatic breast cancer."),
          P("Match each description to its term", [["where the cancer started", 'primary tumor'], ["a tumour in a new place", 'secondary tumor'], ["spread", 'metastatic'], ["cancer-causing agent", 'carcinogen']]),
          M("Why does the name of a metastatic tumour matter?", ["because the original cell type decides the treatment", "because it is only for insurance", "because it is a second cancer", "because it is benign"], "Breast cancer in bone is treated like breast cancer."),
          B("Lung cancer that has spread to the brain is ___ lung cancer.", ['metastatic', 'primary', 'benign'], "Spread."),
          M("Which route usually carries breast cancer first to the armpit nodes?", ['lymphatic spread', 'hematogenous spread', 'apoptosis', 'differentiation'], "The breast’s lymph vessels drain to the armpit."),
          L("Review of “Origin and Spread”", recap(["carcinogen a cancer-causing agent; carcinogenesis the process of cancer formation; oncogenic tumour-producing", "risk factors: tobacco, ultraviolet radiation, asbestos, HPV, EBV, BRCA mutation", "metastasis = meta- + -stasis; primary and secondary tumor; lymphatic and hematogenous spread", "A secondary tumour keeps the primary’s name: metastatic lung cancer, not liver cancer"])),
          N('d2t:cl')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* مهار — دنیای ۳: نام‌گذاری تومورها
 * قاعده اصلی کتاب: نام تومور از بافت مبدأ می‌آید (جدول‌های ۲۰-۲، ۲۰-۳ و ۲۰-۴)؛
 * ریشه + ‎-oma برای خوش‌خیم، ‎-carcinoma برای بافت پوششی، ‎-sarcoma برای بافت همبند،
 * leukemia و lymphoma برای خون و لنف، ‎-blastoma برای سلول‌های جنینی؛ و استثناها. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'nm', sym: 'Name', name: "Naming Tumours", short: "Names", sub: "The naming rule, benign tumours, carcinomas and sarcomas, leukaemia and lymphoma, embryonic tumours and special names",
    color: '#F76707', dark: '#B84A04', light: '#FFEBDD',
    levels: ["The Rule and Benign Tumours", "Carcinoma and Sarcoma", "Blood, Lymph and Special Names"],
    gens: EA.genIds('nm'),
    lessons: [
      /* ================= سطح ۱: قاعده و خوش‌خیم‌ها ================= */
      {
        id: 'nm1', title: "From Which Tissue?", icon: '🗺️', items: [
          L("Five families of cancer", `The book says all cancers fall into a few groups based on their <b>tissue of origin</b>. First ask: “which tissue?”${fig('tissue-map')}`),
          M("What is cancer of epithelial tissue called?", ['carcinoma', 'sarcoma', 'leukemia', 'lymphoma'], "Carcinoma; the most common type of cancer."),
          L("Each family in one line", `${tbl([["Name", "Tissue of origin"], [e('carcinoma'), "epithelial tissue (epithelium), which covers the body surface and lines the organs"], [e('sarcoma'), "connective and supporting tissue: bone, cartilage, fat, muscle, vessels"], [e('leukemia'), "the blood-forming tissue of bone marrow"], [e('lymphoma'), "lymphocytes and the lymphatic system"], [e('blastoma'), "immature embryonic cells"]])}${memo("A carcinoma is “covering” and a sarcoma is “flesh and bone”: sarc/o means flesh.")}`),
          P("Match each cancer to its tissue", [['carcinoma', "Epithelial tissue"], ['sarcoma', "supporting tissue such as bone and tendon"], ['leukemia', "bone marrow"], ['lymphoma', "The lymphatic system"]]),
          T("Carcinoma is the most common type of cancer.", true, "Most cancers arise from epithelial tissue."),
          M("What suffix does a cancer of immature embryonic cells have?", ['-blastoma', '-sarcoma', '-carcinoma', '-emia'], "blast/o = immature cell."),
          B("Cancer of bone and cartilage belongs to the ___ group.", ['sarcoma', 'carcinoma', 'lymphoma'], "Connective tissue."),
          W("Build a word meaning “tumour of immature nerve cells”", ['neur/o', '-blastoma'], ['-sarcoma', 'oste/o', '-carcinoma'], 'neur/o + -blastoma = neuroblastoma.'),
          S("Spell the term for a cancer of lining tissue", 'carcinoma', 'carcin/o + -oma.', 'carci…'),
          N('t2f:nm')
        ]
      },
      {
        id: 'nm2', title: "Benign Tumours", icon: '🟢', items: [
          L("Root + -oma", `The book says most benign tumours are named by adding ${e('-oma')} to the root of the tissue of origin:${tbl([["tumour", "tissue"], [e('adenoma'), "gland"], [e('lipoma'), "fat"], [e('chondroma'), "firm shock-absorbing connective tissue"], [e('osteoma'), "bone"], [e('fibroma'), "fibrous tissue"], [e('neuroma'), "nerve"], [e('angioma'), "vessel"]])}`),
          M(`${e('<b>osteoma</b>')} means…`, ["benign bone tumour", "Bone cancer", "bone inflammation", "cartilage tumour"], 'oste/o + -oma.'),
          L("vessel tumour in the skin", `${fig('angioma', '', "angioma: a benign tumour of blood vessels in the skin of a child’s chest (Figure 20-1 of the book).")}• <b>angioma</b>: a benign vessel tumour<br>• <b>hemangioma</b>: a benign blood-vessel tumour (hemangi/o); a red birthmark of babies<br>• <b>lymphangioma</b>: a benign lymph-vessel tumour`),
          P("Match each tumour to its tissue", [['lipoma', "fat"], ['chondroma', "firm shock-absorbing connective tissue"], ['hemangioma', "blood vessel"], ['neuroma', "nerve"]]),
          L("Muscle and surfaces", `• <b>myoma</b>: a benign muscle tumour; <b>leiomyoma</b> is from smooth muscle (leiomy/o) and in the uterus is called a <b>fibroid</b><br>• <b>rhabdomyoma</b>: from striated muscle (rhabdomy/o)<br>• <b>papilloma</b>: a wart-like tumour of epithelial tissue<br>• <b>polyp</b>: a growth projecting from a mucous surface, mostly in the large intestine<br>• <b>nevus</b>: a mole; a benign tumour of pigment cells${memo("leio = smooth and rhabdo = rod-shaped, striated.")}`),
          M("What is a uterine leiomyoma called in everyday language?", ['fibroid', 'polyp', 'cyst', 'nevus'], "A uterine fibroid."),
          T("A polyp is a growth from a mucous surface and is seen mostly in the large intestine.", true, "Table 20-3."),
          B("A benign tumour of smooth muscle is called a ___.", ['leiomyoma', 'rhabdomyoma', 'myeloma'], 'leiomy/o + -oma.'),
          W("Build a word meaning “benign fatty tumour”", ['lip/o', '-oma'], ['-sarcoma', 'aden/o', 'my/o'], 'lip/o + -oma = lipoma.'),
          N('f2t:nm')
        ]
      },
      {
        id: 'nm3', title: "-oma Traps", icon: '⚠️', items: [
          L("Not every -oma is benign", `${tbl([["Term", "Why is it a trap?"], [e('melanoma'), "despite -oma, it is a malignant skin cancer"], [e('lymphoma'), "all lymphatic tumours are malignant"], [e('hematoma'), "not a tumour at all; blood collected outside a vessel"], [e("carcinoma, sarcoma"), "they have -oma but are malignant"]])}${memo("Three dangerous “-omas”: melanoma, lymphoma, myeloma. One innocent “-oma”: hematoma, which is only a bruise!")}`),
          M("In clinical medicine, hematoma means…", ["a collection of blood outside a vessel", "a benign blood tumour", "blood cancer", "a vessel tumour"], "The book: the word-for-word meaning “blood tumour” is not correct clinically."),
          L("Benign breast lumps", `${fig(['fibroadenoma', 'breast-cyst'], ["fibroadenoma: a firm, rubbery lump", "cyst: a fluid-filled sac on section"])}• <b>fibroadenoma</b>: a benign tumour of fibrous and glandular tissue (fibr/o + aden/o + -oma)<br>• <b>cyst</b>: a fluid-filled sac; usually not cancer${pearl("Most breast lumps in young women are fibroadenomas or cysts; but every new lump must be checked.")}`),
          P("Match each term to its meaning", [['melanoma', "cancer of pigment cells"], ['hematoma', "a collection of blood"], ['fibroadenoma', "a benign breast tumour"], ['cyst', "fluid-filled sac"]]),
          T("Melanoma is a benign skin tumour.", false, "False; melanoma is malignant. A benign mole is called a nevus."),
          M("Which word is always malignant despite its -oma?", ['lymphoma', 'lipoma', 'adenoma', 'fibroma'], "Lymphatic tumours are malignant."),
          L("Another exception", `A <b>meningioma</b> is a tumour of the brain membranes (mening/o) and is mostly <b>benign</b> and slow-growing; but because space in the skull is tight, it causes symptoms through pressure.`),
          B("A fibroadenoma is made of two tissues, fibr/o and ___.", ['aden/o', 'lip/o', 'my/o'], 'fibr/o + aden/o + -oma.'),
          L("Review of “The Rule and Benign Tumours”", recap(["Tissue of origin → name: carcinoma (epithelial), sarcoma (connective), leukemia (bone marrow), lymphoma (lymph), blastoma (embryonic)", "Benign: root + -oma; adenoma, lipoma, chondroma, osteoma, fibroma, neuroma, angioma, leiomyoma (fibroid)", "polyp, papilloma, nevus, fibroadenoma and cyst are also benign", "Traps: melanoma and lymphoma are malignant; a hematoma is not a tumour"])),
          N('t2f:nm')
        ]
      },

      /* ================= سطح ۲: کارسینوم و سارکوم ================= */
      {
        id: 'nm4', title: "Carcinomas", icon: '🧫', items: [
          L("cancer of epithelial tissue", `A <b>carcinoma</b> arises from epithelial tissue and is named more precisely by the type of that tissue:${tbl([["Name", "Epithelial tissue"], [e('adenocarcinoma'), "glandular cells that make fluid or mucus: breast, bowel, pancreas, prostate"], [e('squamous cell carcinoma'), "squamous cells of the skin and the lining of the mouth, throat, cervix, anus"], [e('basal cell carcinoma'), "the basal layer of the epidermis"], [e('transitional cell carcinoma'), "the stretchy lining of the bladder"], [e('papillary carcinoma'), "finger-like projections; mostly thyroid"]])}`),
          M("Most breast, bowel and prostate cancers are of which type?", ['adenocarcinoma', 'sarcoma', 'basal cell carcinoma', 'lymphoma'], "Glandular cells."),
          L("The Three Skin Cancers", `${fig('skin-cancers')}${vs(['basal cell carcinoma', "the most common skin cancer; slow; rarely metastasises"], ['melanoma', "from pigment cells; the most dangerous"])}${pearl("All three are seen mostly in skin that has had a lot of sun; sunscreen is the most important prevention.")}`),
          P("Match each cancer to its site", [['basal cell carcinoma', "basal layer of the skin"], ['squamous cell carcinoma', "squamous cell"], ['transitional cell carcinoma', "bladder"], ['papillary carcinoma', "thyroid"]]),
          T("Basal cell carcinoma is the most common skin cancer and rarely metastasises.", true, "The book."),
          M("What is cancer of the glands of the pancreas called?", ['adenocarcinoma of the pancreas', 'pancreatic sarcoma', 'pancreatoma', 'pancreatic lymphoma'], "aden/o = gland; the book gives this very example."),
          B("The abbreviation ___ means squamous cell carcinoma.", ['SCC', 'BCC', 'DCIS'], 'squamous cell carcinoma.'),
          W("Build a word meaning “cancer of glandular epithelium”", ['aden/o', '-carcinoma'], ['-sarcoma', 'lip/o', '-oma'], 'aden/o + -carcinoma = adenocarcinoma.'),
          S("Spell the word for the flat, scale-like cells in “… cell carcinoma”", 'squamous', "squam/o = scale.", 'squa…'),
          N('wb:nm')
        ]
      },
      {
        id: 'nm5', title: "Sarcomas", icon: '🦴', items: [
          L("cancer of connective tissue", `A <b>sarcoma</b> arises in bone and the soft tissues (muscle, fat, vessels, fibrous tissue). The tissue root gives the exact type; for example oste/o + -sarcoma = <b>osteosarcoma</b>:${fig('naming-rules')}`),
          M(`${e('<b>osteosarcoma</b>')} means…`, ["malignant bone cancer; the most common bone cancer", "benign bone tumour", "cartilage cancer", "bone inflammation"], 'oste/o + -sarcoma.'),
          L("Benign and malignant side by side", `${tbl([["tissue", "not cancerous", "cancerous and spreading"], ["smooth muscle", 'leiomyoma', 'leiomyosarcoma'], ["striated muscle", 'rhabdomyoma', 'rhabdomyosarcoma'], ["vessel", 'angioma', 'angiosarcoma'], ["fibrous tissue", 'fibroma', 'fibrosarcoma']])}${memo("Add a “sarc” and a benign tumour becomes malignant: lipoma → liposarcoma.")}`),
          P("Match each sarcoma to its tissue", [['chondrosarcoma', "firm shock-absorbing connective tissue"], ['liposarcoma', "fat"], ['rhabdomyosarcoma', "striated muscle"], ['angiosarcoma', "vessel"]]),
          T("A gland is epithelial tissue, so its cancer is called adenosarcoma.", false, "False; cancer of a gland is adenocarcinoma."),
          L("Two special names", `• <b>Kaposi sarcoma</b>: cancer of the vessel lining with purple skin patches; in people with weak immunity, such as AIDS<br>• <b>lymphosarcoma</b>: an old name for a malignant tumour of lymphatic tissue; the book mentions it as a “second cancer” after mastectomy${pearl("Rhabdomyosarcoma is the most common soft-tissue sarcoma in children.")}`),
          M("Purple skin patches in a patient with AIDS are a sign of which sarcoma?", ['Kaposi sarcoma', 'osteosarcoma', 'liposarcoma', 'chondrosarcoma'], "Cancer of the vessel lining."),
          B("Malignant cancer of smooth muscle is called a ___.", ['leiomyosarcoma', 'leiomyoma', 'rhabdomyosarcoma'], 'leiomy/o + -sarcoma.'),
          W("Build a word meaning “malignant cancer of cartilage”", ['chondr/o', '-sarcoma'], ['-oma', 'oste/o', '-carcinoma'], 'chondr/o + -sarcoma = chondrosarcoma.'),
          N('t2f:nm')
        ]
      },
      {
        id: 'nm6', title: "Lung, Breast and Membranes", icon: '🫁', items: [
          L("Lung cancer comes in two groups", `${vs(['small cell lung cancer', "SCLC: small round cells like oat grains (oat cell); fast-growing"], ['non-small cell lung cancer', "NSCLC: squamous cell, adenocarcinoma and large cell"])}${memo("oat = oat grain; SCLC cells look like small round oat grains under the microscope.")}`),
          M("oat cell cancer is another name for which?", ['small cell lung cancer', 'non-small cell lung cancer', 'mesothelioma', 'adenocarcinoma'], "Small, round cells."),
          L("Breast and membranes", `• <b>ductal carcinoma in situ</b> (DCIS): abnormal cells only in the lining of a breast duct; they have not yet left it<br>• <b>mesothelioma</b>: cancer of the membrane lining the chest or abdomen (mes/o + theli/o + -oma); linked with asbestos${pearl("A mesothelioma patient often worked with asbestos (pipes, insulation, brakes) years before.")}`),
          P("Match each cancer to its feature", [['SCLC', "small oat-like cells"], ['NSCLC', "squamous, adenocarcinoma, large cell"], ['DCIS', "in situ in a breast duct"], ['mesothelioma', "chest membrane; asbestos"]]),
          T("DCIS has not left the breast duct.", true, "in situ = in place."),
          M("Which cancer is strongly linked with asbestos?", ['mesothelioma', 'melanoma', 'osteosarcoma', 'seminoma'], "Cancer of the membranes."),
          B("Large cell carcinoma belongs to the ___ lung cancer group.", ['non-small cell', 'small cell', 'oat cell'], 'NSCLC.'),
          L("Review of “Carcinoma and Sarcoma”", recap(["carcinoma: adenocarcinoma (gland), squamous cell, basal cell (the most common skin cancer), transitional cell (bladder), papillary (thyroid)", "melanoma from pigment cells; the most dangerous skin cancer", "sarcoma: osteo-, chondro-, lipo-, leiomyo-, rhabdomyo-, angio-, fibrosarcoma; Kaposi sarcoma", "Lung: SCLC (oat cell) and NSCLC • breast: DCIS • membrane: mesothelioma and asbestos"])),
          N('d2t:nm')
        ]
      },

      /* ================= سطح ۳: خون، لنف و نام‌های ویژه ================= */
      {
        id: 'nm7', title: "Leukaemias", icon: '🩸', items: [
          L("Cancer of the blood-forming tissue", `${wb('leuk/o', '-emia')} = <b>leukemia</b>: “white blood”. In leukaemia, immature cells multiply out of control in the bone marrow, take the place of normal cells and spill into the blood.${fig('marrow-crowding')}`),
          M("Why does a leukaemia patient have anaemia, infection and bleeding?", ["immature cells have taken the place of normal blood cells in the marrow", "because blood leaks out of the vessels", "because the liver is enlarged", "because the lymph nodes have been removed"], "The book: low levels of normal cells."),
          L("Two questions, four types", `${fig('leukemia-grid')}• <b>acute</b> or <b>chronic</b>: how fast does the disease progress?<br>• <b>lymphocytic</b> or <b>myeloid</b> (myelogenous): from which cell line?${memo("Remember ALL as “All kids”: the most common childhood cancer.")}`),
          P("Match each abbreviation to its name", [['ALL', 'acute lymphocytic leukemia'], ['AML', 'acute myeloid leukemia'], ['CLL', 'chronic lymphocytic leukemia'], ['CML', 'chronic myeloid leukemia']]),
          T("ALL is the most common childhood cancer.", true, "Acute lymphocytic leukaemia."),
          M("myelogenous means…", ["produced in the bone marrow", "relating to muscle", "relating to lymph", "pertaining to the skin"], "myel/o = bone marrow."),
          B("A slowly progressing leukaemia is called ___.", ['chronic', 'acute', 'in situ'], "Chronic."),
          M("The book says biopsy is “not used” to diagnose which cancer, with a bone marrow sample taken instead?", ['leukemia', 'breast cancer', 'lung cancer', 'bladder cancer'], "Diagnosis is by bone marrow aspiration and CBC."),
          S("Spell the term for cancer of the white blood cells", 'leukemia', 'leuk/o + -emia.', 'leuk…'),
          N('ab:nm')
        ]
      },
      {
        id: 'nm8', title: "Lymphoma and Myeloma", icon: '🫧', items: [
          L("Cancer of the lymphatic system", `A <b>lymphoma</b> starts in lymphocytes (T or B). Because lymphatic tissue is everywhere in the body, lymphoma can start almost anywhere and reach the liver and lungs.${fig('lymphoma-neck', '', "Severe enlargement of the neck lymph nodes in malignant lymphoma (Figure 20-3 of the book).")}`),
          M("What is the enlargement of the neck lymph nodes in this picture called?", ['lymphadenopathy', 'lymphedema', 'lymphangioma', 'hematoma'], 'lymph/o + aden/o + -pathy.', null, F('lymphoma-neck')),
          L("Two main types", `${vs(['Hodgkin lymphoma', "large two-nucleus Reed-Sternberg cells; often young people, neck nodes"], ['non-Hodgkin lymphoma', "a large group of B- or T-cell lymphomas without Reed-Sternberg cells"])}<b>Multiple myeloma</b> is a cancer of the bone marrow plasma cells that eats away bone.${pearl("Night sweats, fever and weight loss are the three “B” symptoms of lymphoma; the doctor always asks about them.")}`),
          P("Match each term to its meaning", [['Hodgkin lymphoma', "with Reed-Sternberg cells"], ['non-Hodgkin lymphoma', "without Reed-Sternberg cells"], ['multiple myeloma', "cancer of bone marrow plasma cells"], ['lymphoma', "cancer of lymphocytes"]]),
          T("The book says all tumours of lymphatic tissue are malignant.", true, 'lymphoid tumors are malignant.'),
          M("The Reed-Sternberg cell is a sign of which disease?", ['Hodgkin lymphoma', 'non-Hodgkin lymphoma', 'ALL', 'melanoma'], "A large two-nucleus cell."),
          B("myeloma is built from the root ___ (bone marrow).", ['myel/o', 'my/o', 'lymph/o'], "Not my/o (muscle)!"),
          M("The abbreviation NHL means…", ['non-Hodgkin lymphoma', 'neck Hodgkin lymphoma', 'new hematologic leukemia', 'normal Hodgkin level'], "Non-Hodgkin lymphoma."),
          S("Spell the term for cancer of lymphatic tissue", 'lymphoma', 'lymph/o + -oma.', 'lymph…'),
          N('f2t:nm')
        ]
      },
      {
        id: 'nm9', title: "Embryonic Tumours and Special Names", icon: '👶', items: [
          L("Organ root + -blastoma", `The book says embryonic tumours arise from leftover groups of embryonic cells in the brain, retina, adrenal gland, kidney, liver or reproductive organs and are named with ${e('-blastoma')}:${fig('blastoma-map')}`),
          M("Retinoblastoma is cancer of which organ?", ["retina", "kidney", "liver", "cerebellum"], 'retin/o + -blastoma.'),
          L("An exception and the brain", `• <b>Wilms tumor</b>: an embryonic kidney tumour; an exception to the rule, because nephroblastoma is not used<br>• <b>glioma</b>: a tumour of the supporting cells of the brain (gli/o = glue)<br>• <b>astrocytoma</b>: a glioma of star-shaped cells (astr/o + cyt/o + -oma)<br>• <b>glioblastoma</b>: the most aggressive brain cancer in adults${memo("astrocytoma = “star cell”; astro as in “astronaut” means star.")}`),
          P("Match each embryonic tumour to its organ", [['retinoblastoma', "retina"], ['hepatoblastoma', "liver"], ['medulloblastoma', "cerebellum"], ['Wilms tumor', "kidney"]]),
          T("Wilms tumor is also called nephroblastoma, and that name is common.", false, "False; the book says nephroblastoma is not used; it is an exception."),
          L("Teratoma: an astonishing tumour", `A <b>teratoma</b> (terat/o = monster) arises from cells that can make many different tissues: hair, teeth, bone, muscle. It may be benign or malignant and is seen in the ovary, testis, chest and abdomen. A <b>seminoma</b> is a germ cell cancer of the testis.`),
          M("What is a tumour with hair and teeth inside called?", ['teratoma', 'seminoma', 'lipoma', 'cyst'], "terat/o = monster."),
          B("A glioma of the star-shaped brain cells is called an ___.", ['astrocytoma', 'glioblastoma', 'medulloblastoma'], 'astr/o + cyt/o + -oma.'),
          L("Review of “Blood, Lymph and Special Names”", recap(["leukemia = leuk/o + -emia; ALL (children), AML, CLL, CML; myelogenous = from bone marrow", "lymphoma: Hodgkin (Reed-Sternberg) and non-Hodgkin; multiple myeloma in plasma cells", "blastoma: retino-, neuro-, medullo-, hepatoblastoma; Wilms tumor the kidney exception", "Brain: glioma, astrocytoma, glioblastoma • teratoma (hair and teeth) • seminoma (testis)"])),
          N('m2r:nm')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* مهار — دنیای ۴: نشانه‌ها و غربالگری
 * نشانه‌های هشدار سرطان (CAUTION)، نشانه‌ها در هر اندام (فهرست «Screening and Early Detection» کتاب)،
 * نشانه‌های عمومی، ضایعه‌های پیش‌سرطانی (جدول ۲۰-۴)، خال‌ها و ABCDE، نشانه‌های پستان، غربالگری و نشانگرهای تومور. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'sx', sym: 'Sx', name: "Signs and Screening", short: "Signs", sub: "The seven warning signs, signs in the organs, precancerous lesions, moles and the breast, screening and tumour markers",
    color: '#E64980', dark: '#A6295A', light: '#FDE5EE',
    levels: ["Warning Signs", "Precancer, Moles and the Breast", "Screening"],
    gens: EA.genIds('sx'),
    lessons: [
      /* ================= سطح ۱: نشانه‌های هشدار ================= */
      {
        id: 'sx1', title: "The Seven Warning Signs", icon: '🚨', items: [
          L('CAUTION', `Remember the seven warning signs of cancer with the word <b>CAUTION</b>:${fig('warning-signs')}`),
          M("In CAUTION, the letter O stands for…", ["an obvious change in a wart or mole", "nagging cough", "unusual bleeding", "a sore that does not heal"], 'Obvious change in a wart or mole.'),
          L("A sign, not a diagnosis", `These signs do <b>not prove</b> cancer; many have simple causes. But if they persist, a doctor should be seen.${pearl("The book says a full history and examination, including family history, smoking, alcohol and occupational exposure to chemicals or radiation, are the basis of early cancer detection.")}`),
          P("Match each letter of CAUTION to its sign", [['C', "change in bowel or bladder habits"], ['A', "a sore that does not heal"], ['T', "thickening or lump"], ['N', "a nagging cough or hoarseness"]]),
          T("Anyone with one of the CAUTION signs definitely has cancer.", false, "False; it is only a warning to get checked."),
          M("Hoarseness for more than a week is a warning of which cancer?", ["larynx and throat", "intestine", "skin", "kidney"], "The book: oropharynx, hoarseness for more than one week."),
          B("In CAUTION, the letter U stands for ___ bleeding or discharge.", ["unusual", "normal", "at night"], 'Unusual bleeding or discharge.'),
          M("Which sign does the letter I in CAUTION refer to?", ["indigestion or difficulty swallowing", "infection", "itching", "headache"], 'Indigestion or difficulty swallowing.'),
          S("Spell the English word that spells out the seven warning signs", 'CAUTION', 'C-A-U-T-I-O-N.', 'CAU…'),
          N('t2f:sx')
        ]
      },
      {
        id: 'sx2', title: "Signs in the Organs", icon: '🧍', items: [
          L("Each organ has its own language", `${fig('symptom-map')}The book lists the signs for each system; you can read most of them from their roots and suffixes.`),
          L("Break the words apart", `${tbl([["Term", "Structure", "Meaning and cancer"], [e('hematuria'), 'hemat/o + ‎-uria', "blood in the urine: bladder, kidney, prostate"], [e('hemoptysis'), 'hem/o + ‎-ptysis', "coughing up blood: lung"], [e('dysphagia'), 'dys- + ‎-phagia', "difficulty swallowing: oesophagus, throat"], [e('dysuria'), 'dys- + ‎-uria', "burning on urination: urinary tract, prostate"], [e('dyspnea'), 'dys- + ‎-pnea', "shortness of breath: lung"], [e('dyspareunia'), 'dys- + pareunia', "painful intercourse: cervix, uterus"], [e('hematochezia'), 'hemat/o + chezia', "bright red blood from the rectum: large intestine"], [e('seizure'), '—', "seizures: brain"]])}${memo("dys- means difficult: dysphagia “difficult swallowing”, dyspnea “difficult breathing”, dysuria “difficult urination”.")}`),
          M(`${e('<b>hemoptysis</b>')} is a sign of which cancer?`, ["lung", "bladder", "skin", "brain"], "hem/o (blood) + -ptysis (spitting)."),
          P("Match each sign to its organ", [['hematuria', "bladder"], ['dysphagia', "oesophagus"], ['seizure', "brain"], ['hoarseness', "voice box"]]),
          T("hematochezia means bright red blood from the rectum; a warning of bowel cancer.", true, "The book: change in bowel habits, bleeding."),
          M("Which signs does the book list for brain cancer?", ["seizures and problems with balance, vision, hearing or speech", "coughing up blood", "blood in the urine", "nipple discharge"], 'Brain: seizures, loss of balance…'),
          B("Difficulty swallowing is called ___.", ['dysphagia', 'dyspnea', 'dysuria'], 'dys- + -phagia.'),
          W("Build a word meaning “blood in the urine”", ['hemat/o', '-uria'], ['-ptysis', 'dys-', '-emia'], 'hemat/o + -uria = hematuria.'),
          S("Spell the term for difficult breathing", 'dyspnea', 'dys- + -pnea.', 'dysp…'),
          N('d2t:sx')
        ]
      },
      {
        id: 'sx3', title: "General signs", icon: '🌡️', items: [
          L("When the whole body is involved", `${tbl([["Term", "Meaning"], [e('anemia'), "anaemia; a sign of bleeding from a gut or uterine cancer"], [e('anorexia'), "loss of appetite; a sign of cancer or a side effect of treatment"], [e('cachexia'), "severe weight loss and muscle wasting in advanced cancer"], [e('fatigue'), "tiredness that rest does not relieve"], [e('night sweats'), "night sweats; leukaemia and lymphoma"], [e('lymphadenopathy'), "enlarged lymph nodes; lymphoma or metastasis"]])}`),
          M("lymphadenopathy means…", ["disease or enlargement of the lymph nodes", "swelling of the arm", "inflammation of a lymph vessel", "skin cancer"], 'lymph/o + aden/o + -pathy.'),
          L("Blood and nerve signs", `• <b>thrombocytopenia</b>: a shortage of platelets; easy bruising and bleeding<br>• <b>peripheral neuropathy</b>: pain, numbness and tingling of the hands and feet; a sign of cancer or a side effect of chemotherapy<br>• <b>paraneoplastic syndrome</b>: signs caused at a distant site by a substance from the tumour (para- beside + neoplastic)${pearl("anorexia here means loss of appetite; it is different from anorexia nervosa (a mental illness).")}`),
          P("Match each sign to its meaning", [['cachexia', "severe weight loss and wasting"], ['night sweats', "heavy sweating at night"], ['thrombocytopenia', "shortage of platelets"], ['anorexia', "loss of appetite"]]),
          T("Night sweats can be a sign of lymphoma or leukaemia.", true, "Table 20-5."),
          M("Easy bruising and prolonged bleeding from a cut are a sign of which?", ['thrombocytopenia', 'cachexia', 'anorexia', 'dysuria'], "A shortage of platelets."),
          B("In cachexia the patient has severe ___.", ["wasting", "obesity", "fever"], "Loss of muscle and fat."),
          L("Review of “Warning Signs”", recap(["CAUTION: seven warning signs; a sign, not a diagnosis", "hematuria (bladder), hemoptysis (lung), dysphagia (oesophagus), dysuria, dyspnea, dyspareunia, hoarseness, seizure", "General: anemia, anorexia, cachexia, fatigue, night sweats, lymphadenopathy", "thrombocytopenia a shortage of platelets; peripheral neuropathy; paraneoplastic syndrome"])),
          N('t2f:sx')
        ]
      },

      /* ================= سطح ۲: پیش‌سرطان، خال و پستان ================= */
      {
        id: 'sx4', title: "Precancerous Lesions", icon: '⏳', items: [
          L("Before Cancer", `The book calls lesions with a high chance of becoming cancer <b>precancerous</b>:${fig('precancer')}`),
          M("What cancer can actinic keratosis turn into?", ['squamous cell carcinoma', 'leukemia', 'osteosarcoma', 'lymphoma'], "actin/o = sun ray."),
          L("Break the words apart", `• ${e('actinic keratosis')}: actin/o (sun ray) + kerat/o (horny tissue); a rough, scaly patch on sun-damaged skin<br>• ${wb('leuk/o', '-plakia')} = <b>leukoplakia</b>: a “white patch” in the mouth, often from tobacco<br>• <b>lentigo maligna</b>: Latin for “malignant freckle”; melanoma in situ<br>• <b>familial polyposis</b>: hundreds of inherited polyps in the large intestine${memo("leuko = white (as in leukaemia) and plakia = patch; so leukoplakia means “white patch”.")}`),
          P("Match each lesion to its meaning", [['leukoplakia', "white patch in the mouth"], ['actinic keratosis', "scaly sun-damaged patch"], ['lentigo maligna', "malignant freckle"], ['familial polyposis', "inherited bowel polyps"]]),
          T("Removing bowel polyps is one way to prevent bowel cancer.", true, "A polyp can turn into adenocarcinoma."),
          M("What most often causes leukoplakia?", ["tobacco (smoked or chewed)", "sun", "asbestos", "heredity"], "The book: tobacco tars."),
          B("Barrett esophagus is a kind of ___.", ['metaplasia', 'carcinoma', 'hematoma'], "Change of the oesophageal lining in reflux."),
          W("Build a word meaning “white patch”", ['leuk/o', '-plakia'], ['-emia', 'melan/o', '-oma'], 'leuk/o + -plakia = leukoplakia.'),
          S("Spell the term for a lesion likely to become cancer", 'precancerous', 'pre- + cancerous.', 'pre…'),
          N('f2t:sx')
        ]
      },
      {
        id: 'sx5', title: "Moles and ABCDE", icon: '🔍', items: [
          L("A benign mole or melanoma?", `A <b>nevus</b> (mole; plural: nevi) is a benign tumour of pigment cells. <b>Melanoma</b> is the malignant cancer of the same cells. To spot a suspicious mole, use the ABCDE rule:${fig('abcde-mole')}`),
          M("In the ABCDE rule, the letter D stands for…", ["diameter over 6 mm", "dark colour", "ragged border", "changing over time"], 'Diameter.'),
          L("dysplastic naevus", `A <b>dysplastic nevus</b> is an irregular mole with uneven colour and border that is more likely to turn into melanoma.${vs(['nevus', "round, even, smooth border, small, stable"], ['melanoma', "asymmetrical, several colours, ragged border, large, changing"])}${pearl("The most important letter is E: any mole that changes, even a small one, must be examined.")}`),
          P("Match each letter to its meaning", [['A', 'Asymmetry'], ['B', 'Border'], ['C', 'Color'], ['E', 'Evolving']]),
          T("A nevus is a malignant skin cancer.", false, "False; a nevus is a benign mole."),
          M("Which mole is more suspicious?", ["asymmetrical, multicoloured and growing", "round and evenly brown", "small and unchanged since childhood", "flat with a regular border"], 'ABCDE.'),
          B("Melanoma is cancer of the skin’s ___ cells.", ["pigment-producing", "fat", "basal layer"], "melan/o = black."),
          S("Spell the term for a mole", 'nevus', "Plural: nevi.", 'nev…'),
          N('d2t:sx')
        ]
      },
      {
        id: 'sx6', title: "Breast Signs", icon: '🎗️', items: [
          L("What a woman should know", `The book lists these signs of breast cancer: a <b>lump</b>, and <b>nipple discharge</b>, especially bloody discharge from one breast. In advanced cancer the skin changes too, becoming thick and dimpled: <b>peau d’orange</b> (French: orange peel).${fig('peau-orange', '', "Orange-peel skin and skin dimpling (arrow) in advanced breast cancer; Figure 20-8 of the book.")}`),
          M("peau d’orange means…", ["thick, dimpled skin like orange peel", "a brown mole", "a skin wound", "large bruise"], "French: orange peel."),
          L("Why does the skin look like orange peel?", `Cancer cells block the skin’s lymph vessels; fluid collects in the skin, and the hair follicles show as tiny dimples. A tumour beneath the nipple pulls it inwards: <b>nipple retraction</b>.${pearl("Breast self-examination (BSE) is done monthly after the period; any new lump or change should be shown to a doctor.")}`),
          P("Match each sign to its meaning", [['nipple discharge', "fluid leaking from the nipple"], ['nipple retraction', "nipple pulled inwards"], ['peau d\'orange', "orange-peel skin"], ['lump', "a hard mass"]]),
          T("Orange-peel skin comes from blocked skin lymph vessels.", true, "Fluid collecting in the skin."),
          M("BSE means…", ["breast self-examination", "breast biopsy", "breast ultrasound", "Breast surgery"], 'breast self-examination.'),
          B("Bloody discharge from ___ breast is more suspicious.", ["one", "both", "none"], "One-sided and bloody."),
          L("Review of “Precancer, Moles and the Breast”", recap(["precancerous: actinic keratosis, leukoplakia, lentigo maligna, polyp, familial polyposis, Barrett esophagus", "nevus benign and melanoma malignant; ABCDE; dysplastic nevus", "Breast: lump, nipple discharge, nipple retraction, peau d’orange", "BSE monthly breast self-examination"])),
          N('t2f:sx')
        ]
      },

      /* ================= سطح ۳: غربالگری ================= */
      {
        id: 'sx7', title: "Screening", icon: '🧪', items: [
          L("Tests for healthy people", `<b>Screening</b> means testing healthy people without symptoms to find cancer or precancer before symptoms appear.${fig('screening-tests')}`),
          M("Which statement about screening is correct?", ["it is for healthy people without symptoms", "it is only for patients with symptoms", "it is the same as cancer treatment", "it is done only by biopsy"], "Aim: early detection."),
          L("breast X-ray imaging", `${wb('mamm/o', '-graphy')} = <b>mammography</b>: low-dose X-ray imaging of the breast. The resulting image is a <b>mammogram</b>.${fig('mammogram', '', "A normal mammogram (Figure 20-5 of the book).")}`),
          P("Match each test to its organ", [['mammography', "breast"], ['Pap smear', "cervix"], ['PSA', "prostate"], ['FOBT', "large intestine"]]),
          L("Other tests", `• <b>Pap smear</b>: collecting cells from the cervix with a brush to find dysplasia<br>• <b>fecal occult blood test</b> (FOBT): fecal means stool and occult means hidden; the guaiac type is gFOBT<br>• <b>digital rectal examination</b> (DRE): feeling the prostate and rectum with a gloved finger<br>• <b>PSA</b>: a prostate blood test${memo("occult means “hidden”: blood that cannot be seen with the eye.")}`),
          T("FOBT looks for hidden blood in the stool.", true, 'fecal occult blood.'),
          M("What is the difference between mammography and mammogram?", ["mammography is the process and a mammogram the image", "there is no difference", "a mammogram is an operation", "mammography is a blood test"], "-graphy the process, -gram the image."),
          B("The abbreviation ___ means digital rectal examination.", ['DRE', 'BSE', 'FOBT'], 'digital rectal examination.'),
          S("Spell the term for X-ray imaging of the breast", 'mammography', 'mamm/o + -graphy.', 'mammo…'),
          N('ab:sx')
        ]
      },
      {
        id: 'sx8', title: "Markers and Genes", icon: '🧬', items: [
          L("tumour marker", `A <b>tumor marker</b> is a substance a tumour produces in the blood or tissue. It is used more for following treatment than for definite diagnosis.${tbl([["Marker", "cancer"], [e('PSA'), "prostate-specific antigen: prostate"], [e('CEA'), "carcinoembryonic antigen: large intestine"], [e('AFP'), "alpha-fetoprotein: liver, testis"], [e('CA-125'), "ovary"]])}`),
          M("A rising PSA may be a sign of which cancer?", ["prostate", "breast", "lung", "skin"], 'prostate-specific antigen.'),
          L("Gene testing", `<b>Genetic testing</b> looks for high-risk inherited mutations, such as <b>BRCA1/BRCA2</b> for breast and ovarian cancer, or FAP for bowel cancer.${pearl("A raised tumour marker means “investigate further”, not “definite cancer”; PSA also rises with benign prostate enlargement and inflammation.")}`),
          P("Match each marker to its cancer", [['CEA', "large intestine"], ['AFP', "liver and testis"], ['CA-125', "ovary"], ['PSA', "prostate"]]),
          T("A raised tumour marker alone is enough for a definite cancer diagnosis.", false, "False; definite diagnosis is by biopsy."),
          M("In which test are BRCA1/BRCA2 checked?", ['genetic testing', 'Pap smear', 'mammography', 'FOBT'], "Inherited mutations."),
          B("The tumour marker ___ is used to follow bowel cancer.", ['CEA', 'AFP', 'PSA'], 'carcinoembryonic antigen.'),
          M("In which benign condition is a high PSA also seen?", ["benign enlargement or inflammation of the prostate", "common cold", "a broken bone", "low red blood cells (anaemia)"], "It is not a cancer-specific marker."),
          S("Spell the term for testing healthy people for early cancer", 'screening', 'screen + -ing.', 'scree…'),
          N('t2f:sx')
        ]
      },
      {
        id: 'sx9', title: "Screening in Practice", icon: '🩺', items: [
          L("A day in the clinic", `A 55-year-old man with no complaints has come for a check-up. The doctor orders a <b>PSA</b>, and because his <b>FOBT</b> was positive, schedules a <b>colonoscopy</b>. During the colonoscopy a <b>polyp</b> is found and removed.${fig('screening-tests')}`),
          M("Why is a colonoscopy done after a positive FOBT?", ["to see the whole bowel and find the source of the blood or a polyp", "because the FOBT has confirmed cancer", "to treat the prostate", "to measure PSA"], "The next diagnostic step."),
          L("Where does screening not help?", `Screening is only worthwhile when a cancer has a detectable <b>preclinical stage</b> and a suitable test exists (the book). That is why we do not have screening tests for every cancer.${pearl("A 60-year-old smoker is screened with low-dose CT of the lungs; a plain chest X-ray is not enough.")}`),
          P("Match each finding to the next step", [["positive FOBT", 'colonoscopy'], ["Pap smear with dysplasia", "cervical biopsy"], ["lump on a mammogram", "breast biopsy"], ["high PSA", "further prostate assessment"]]),
          T("There is screening for every cancer.", false, "False; only for cancers with a preclinical stage and a suitable test."),
          M("What kind of measure is removing a polyp during colonoscopy?", ["preventive (prophylactic)", "palliative", "treatment with radiation", "Hormone therapy"], "Before it turns into cancer."),
          O("Put the steps of bowel cancer screening in order", ['FOBT', "positive result", 'colonoscopy', "removing the polyp and biopsy"], "From screening to diagnosis."),
          B("An X-ray image of the breast is called a ___.", ['mammogram', 'sonogram', 'myelogram'], 'mamm/o + -gram.'),
          L("Review of “Screening”", recap(["screening: testing healthy people without symptoms for early detection", "mammography and mammogram • Pap smear • FOBT and gFOBT • DRE • PSA • low-dose lung CT", "tumor markers: PSA, CEA, AFP, CA-125; for follow-up, not definite diagnosis", "genetic testing: BRCA1/BRCA2, FAP; next step after a positive screen: diagnostic work-up and biopsy"])),
          N('d2t:sx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* مهار — دنیای ۵: تشخیص و مرحله‌بندی
 * نمونه‌برداری‌ها و غده نگهبان، آندوسکوپی‌ها و تصویربرداری (جدول ۲۰-۵ کتاب)،
 * گیرنده‌ها و درجه تومور، مرحله‌بندی TNM و مرحله‌های ۰ تا ۴ سرطان پستان (شکل ۲۰-۴). */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'dx', sym: 'Dx', name: "Diagnosis and Staging", short: "Diagnosis", sub: "Biopsies and the sentinel node, endoscopy, imaging, receptors, grade and TNM staging",
    color: '#1C7ED6', dark: '#145A9A', light: '#E1EFFC',
    levels: ["tissue sample", "Seeing inside the body", "Grade and Stage"],
    gens: EA.genIds('dx'),
    lessons: [
      /* ================= سطح ۱: نمونه‌برداری ================= */
      {
        id: 'dx1', title: "biopsy", icon: '🧫', items: [
          L("Definite diagnosis from tissue", `${wb('bi/o', '-opsy')} = <b>biopsy</b>: removing cells or tissue to look at under the microscope. Images and blood tests raise suspicion; definite diagnosis of cancer is by biopsy.${fig('biopsy-types')}`),
          M("What is removed in an excisional biopsy?", ["the whole lump", "only a piece of the lump", "a few cells with a fine needle", "blood"], "excision = complete removal."),
          L("Four methods", `${tbl([["Method", "What is removed?"], [e('excisional biopsy'), "the whole lump or suspicious area"], [e('incisional biopsy'), "only part of the lump"], [e('core needle biopsy'), "a cylinder of tissue with a thick needle"], [e('fine-needle aspiration'), "a few cells or fluid with a fine needle; FNA"]])}${memo("ex = out (the whole lump comes out) • in = into (only a cut into it).")}`),
          P("Match each biopsy to its feature", [['excisional', "the whole lump"], ['incisional', "part of the lump"], ['core needle', "a cylinder of tissue"], ['FNA', "a fine needle"]]),
          T("FNA is often done under CT or ultrasound guidance.", true, "The book: for the lung, with CT or ultrasound."),
          M("What does FNA stand for?", ['fine-needle aspiration', 'full node analysis', 'fluid needle anesthesia', 'final nodal assessment'], "Fine-needle aspiration."),
          B("The ___ examines biopsy tissue under the microscope.", ['pathologist', 'radiologist', 'surgeon'], 'path/o + -logist.'),
          W("Build a word meaning “viewing living tissue”", ['bi/o', '-opsy'], ['-scopy', 'cyt/o', '-gram'], 'bi/o + -opsy = biopsy.'),
          S("Spell the word for a biopsy that removes the whole lump", 'excisional', 'ex- + cision.', 'excis…'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx2', title: "Special Samples", icon: '🔬', items: [
          L("Each cancer, its own sample", `${tbl([["Method", "For"], [e('bone marrow aspiration'), "leukaemia and lymphoma: a hollow needle into the hip bone or breastbone"], [e('endometrial biopsy'), "uterine cancer: a thin tube through the cervix"], [e('sputum cytology'), "lung cancer: cells in the sputum"], [e('urine cytology'), "bladder and kidney cancer: cells in the urine"], [e('Pap smear'), "cervix: cells collected with a brush"]])}`),
          M("Where is the sample taken from to diagnose leukaemia?", ["bone marrow of the hip bone or breastbone", "thick mucus from the airways", "urine", "skin"], 'bone marrow aspiration.'),
          L("At the operating table", `• <b>frozen section</b>: tissue is quickly frozen and sliced so the pathologist can answer during the operation<br>• <b>surgical margin</b>: the rim of healthy tissue around a removed tumour; “margins clear” means the edges contain no cancer${pearl("If a margin is involved, cancer cells may remain in the body and further surgery or radiotherapy may be needed.")}`),
          P("Match each method to its cancer", [['sputum cytology', "lung"], ['urine cytology', "bladder"], ['endometrial biopsy', "uterus"], ['bone marrow aspiration', "leukaemia"]]),
          T("“Margins clear” means no cancer was seen at the edge of the removed tissue.", true, "A healthy margin."),
          M("How does cytology differ from histology?", ["cytology looks at separate cells and histology at tissue", "there is no difference", "cytology is imaging", "histology is a blood test"], "cyt/o cell, hist/o tissue."),
          B("A quick pathology answer during surgery is given by a ___ section.", ['frozen', 'fine', 'core'], "Frozen section."),
          M("The book says bone marrow aspiration is a diagnostic tool for which?", ["leukaemia and lymphoma", "leukaemia only", "lymphoma only", "neither"], "Table 20-5: leukemia and lymphoma."),
          S("Spell the term for the study of separate cells", 'cytology', 'cyt/o + -logy.', 'cyto…'),
          N('f2t:dx')
        ]
      },
      {
        id: 'dx3', title: "The Sentinel Node", icon: '💂', items: [
          L("Cancer’s first station", `Cancers such as breast cancer and melanoma first reach one or a few particular lymph nodes: the <b>sentinel lymph node</b>. In SLNB, dye or a radioactive tracer is injected beside the tumour, and the node that takes up the dye first is removed and examined.${fig('sentinel-node')}`),
          M("What is a sentinel lymph node?", ["the first lymph node the cancer is likely to reach", "the largest node in the body", "a node in the brain", "primary tumour"], "The guard node."),
          L("If the sentinel is involved", `${vs(["negative SLNB", "the other nodes are probably healthy; removing them all is not needed"], ["positive SLNB", "lymph node dissection: removing the regional nodes"])}• <b>lymphangiography</b> or lymph node mapping: viewing lymph vessels and nodes by injecting blue dye${pearl("SLNB has replaced removing all the armpit nodes and has greatly reduced the risk of lymphoedema of the arm.")}`),
          T("If the sentinel node is healthy, the other nodes are probably healthy too.", true, "The logic of SLNB."),
          P("Match each term to its meaning", [['SLNB', "sentinel node biopsy"], ['lymph node dissection', "removing the regional nodes"], ['lymphangiography', "image of lymph vessels and nodes"], ['sentinel', "guard"]]),
          O("Put the steps of SLNB in order", ["injecting dye or a radioactive tracer beside the tumour", "the dye flows through the lymph vessel", "finding the node that took up the dye first", "removing and examining that node"], "The book: dye flows into the sentinel node."),
          B("SLNB is widely used in ___ cancer and melanoma.", ["breast", "blood", "brain"], "Lymphatic spread."),
          L("Review of “Biopsy”", recap(["biopsy = bi/o + -opsy; the definite diagnosis of cancer", "excisional the whole lump • incisional part • core needle a cylinder • FNA a fine needle", "bone marrow aspiration, endometrial biopsy, sputum cytology, urine cytology, Pap smear; frozen section and surgical margin", "SLNB the sentinel node; positive → lymph node dissection; lymphangiography"])),
          N('m2r:dx')
        ]
      },

      /* ================= سطح ۲: دیدن درون بدن ================= */
      {
        id: 'dx4', title: "Endoscopies", icon: '🔦', items: [
          L("Root + -scopy", `In endoscopy a thin lighted tube (scope) is passed into the body to see inside an organ, and a biopsy is often taken at the same time.${fig('scope-map')}`),
          M("Which organ is viewed in cystoscopy?", ["bladder", "large intestine", "lung", "uterus"], "cyst/o = bladder; through the urethra."),
          L("The book’s list", `${tbl([["Method", "What is seen?"], [e('bronchoscopy'), "trachea, bronchi and lung; through the nose or mouth"], [e('colonoscopy'), "the whole large intestine; through the anus"], [e('sigmoidoscopy'), "rectum and sigmoid colon"], [e('esophagoscopy'), "oesophagus"], [e('laryngoscopy'), "voice box"], [e('hysteroscopy'), "within the uterus"], [e('thoracoscopy'), "the chest cavity through a small cut between the ribs"]])}`),
          P("Match each endoscopy to its organ", [['bronchoscopy', "bronchi"], ['laryngoscopy', "voice box"], ['hysteroscopy', "uterus"], ['esophagoscopy', "oesophagus"]]),
          T("Colonoscopy views the whole large intestine, but sigmoidoscopy only its last part.", true, "sigmoid = the S-shaped last part."),
          L("Scopy or tomy?", `${vs(['thoracoscopy', "a small cut and viewing through a tube"], ['thoracotomy', "a large cut between the ribs, opening the chest"])}${memo("-scopy is “looking”, -tomy is “cutting”.")}`),
          M("What is opening the chest with a large cut between the ribs called?", ['thoracotomy', 'thoracoscopy', 'bronchoscopy', 'thoracentesis'], 'thorac/o + -tomy.'),
          B("Viewing inside the uterus with a scope is called ___.", ['hysteroscopy', 'cystoscopy', 'colonoscopy'], 'hyster/o + -scopy.'),
          W("Build a word meaning “viewing inside the bronchi”", ['bronch/o', '-scopy'], ['-tomy', 'thorac/o', '-gram'], 'bronch/o + -scopy = bronchoscopy.'),
          N('wb:dx')
        ]
      },
      {
        id: 'dx5', title: "Imaging", icon: '🩻', items: [
          L("Four main tools", `Several imaging methods are used to find a tumour, its size and its metastases; each works with a physical force:${fig('imaging-tools')}`),
          M("Which method shows busy cancer cells with radioactive sugar?", ['PET', 'MRI', 'CT', 'ultrasound'], 'positron emission tomography.'),
          L("Read the names", `${tbl([["Method", "Description"], [e('computed tomography'), "CT or CAT (computed axial tomography): computer X-ray slices"], [e('magnetic resonance imaging'), "MRI: magnets and radio waves; brain, spinal cord, soft tissue"], [e('positron emission tomography'), "PET: finding metastases and staging"], [e('radionuclide scanning'), "scintigraphy: a radioactive tracer and a scanner"], [e('bone scan'), "finding bone metastases"], [e('transrectal ultrasound'), "TRUS: prostate and rectum"]])}${memo("tom/o means slice: tomography means “a slice-by-slice image”.")}`),
          P("Match each method to its feature", [['CT', "X-rays and a computer"], ['MRI', "magnet"], ['bone scan', "bone metastasis"], ['transrectal ultrasound', "prostate"]]),
          T("MRI uses X-rays.", false, "False; MRI uses magnets and radio waves. CT uses X-rays."),
          M("What does CAT stand for in CAT scan?", ['computed axial tomography', 'cancer and tumor', 'contrast and test', 'cell analysis test'], "Table 20-8."),
          B("A nuclear scan is also called scinti___.", ['graphy', 'scopy', 'tomy'], 'scintigraphy.'),
          M("What is ultrasound of the prostate through the rectum called?", ['transrectal ultrasound', 'transesophageal echo', 'IVP', 'barium enema'], "trans- (through) + rect/o."),
          S("Spell the full two-word name for CT", 'computed tomography', "tom/o slice + -graphy.", 'computed…'),
          N('d2t:dx')
        ]
      },
      {
        id: 'dx6', title: "Images with Contrast", icon: '🥛', items: [
          L("Dye for seeing", `Some organs cannot be seen on a plain X-ray; they are seen with a <b>contrast medium</b> (such as barium or an injected dye):${tbl([["Method", "Description"], [e('barium enema'), "barium by enema; an image of the large intestine for bowel cancer"], [e('upper GI series'), "barium swallow; an image of the oesophagus and stomach"], [e('intravenous pyelogram'), "IVP: dye in a vein that collects in the urine; kidneys, ureters, bladder"], [e('lymphangiography'), "blue dye in a lymph vessel; lymph nodes"]])}`),
          M("Which organ is seen in a barium enema?", ["large intestine", "stomach", "kidney", "lung"], "Enema = through the anus."),
          L("Break the words apart", `• ${wb('pyel/o', '-gram')}: pyel/o is the renal pelvis; an image of the kidneys<br>• intravenous: intra- (within) + ven/o (vein); dye through a vein<br>• upper GI: the upper part of the digestive tract${pearl("Before injecting dye, the patient is asked about iodine allergy and kidney function.")}`),
          P("Match each method to its organ", [['barium enema', "large intestine"], ['upper GI series', "Oesophagus and stomach"], ['IVP', "kidney and bladder"], ['lymphangiography', "Lymph nodes"]]),
          T("An upper GI series is also called a barium swallow.", true, "Barium swallow."),
          M("What does IVP stand for?", ['intravenous pyelogram', 'internal vessel pressure', 'intestinal view procedure', 'iodine vein puncture'], "Table 20-8."),
          B("In an IVP the dye is given through a ___.", ["vein", "mouth", "opening at the end of the digestive tract"], 'intravenous.'),
          L("Review of “Seeing Inside the Body”", recap(["-scopy: bronchoscopy, colonoscopy, sigmoidoscopy, cystoscopy, esophagoscopy, laryngoscopy, hysteroscopy, thoracoscopy", "thoracotomy a large chest cut; -scopy looking and -tomy cutting", "CT (CAT), MRI, PET, radionuclide scanning (scintigraphy), bone scan, transrectal ultrasound", "Contrast: barium enema, upper GI series (barium swallow), IVP, lymphangiography"])),
          N('t2f:dx')
        ]
      },

      /* ================= سطح ۳: درجه و مرحله ================= */
      {
        id: 'dx7', title: "Grade and Receptors", icon: '📊', items: [
          L("Grade versus stage", `${vs(['grade', "How abnormal are the cells under the microscope? (differentiation)"], ['stage', "How big and widespread is the cancer in the body?"])}${fig('differentiation')}${memo("The pathologist sees the grade under the microscope; the team sets the stage from images and surgery.")}`),
          M("What does a tumour’s grade show?", ["how abnormal and differentiated the cells are", "the size of the tumour", "the number of nodes involved", "the patient’s age"], "grade = degree."),
          L("Receptors in breast cancer", `After breast cancer is diagnosed, the cells are checked for receptors:<br>• <b>estrogen receptor</b> (ER) and <b>progesterone receptor</b> (PR): if positive, the tumour grows with hormones and hormone therapy works<br>• <b>HER2</b>: a growth-promoting protein; a HER2-positive tumour grows faster but responds to targeted drugs${pearl("A report of “ER+/PR+/HER2−” means the tumour is hormone-sensitive and HER2-negative; treatment with an antiestrogen.")}`),
          P("Match each term to its meaning", [['ER', "oestrogen receptor"], ['PR', "progesterone receptor"], ['HER2', "growth-promoting protein"], ['grade', "degree of cell abnormality"]]),
          T("An ER-positive tumour responds better to hormone therapy.", true, "Its growth depends on oestrogen."),
          M("For which cancer is the CBC especially important?", ["leukaemia", "skin cancer", "bladder cancer", "black pigment-cell tumour (melanoma)"], 'complete blood count.'),
          B("A grade 3 tumour has ___ cells.", ["poorly differentiated", "well differentiated", "normal"], 'poorly differentiated.'),
          M("From which sample are ER/PR checked?", ["breast tumour tissue", "blood", "urine", "thick mucus from the airways"], "The book: cells are taken from breast tissue."),
          S("Spell the word for a protein that receives a hormone signal", 'receptor', "Latin: receiver.", 'recep…'),
          N('ab:dx')
        ]
      },
      {
        id: 'dx8', title: 'TNM', icon: '🔤', items: [
          L("Three letters for the extent of cancer", `<b>Staging</b> means finding the tumour’s size and how far it has spread; the most common method is <b>TNM staging</b>:${fig('tnm')}`),
          M("In TNM, the letter M stands for…", ["distant metastasis", "the size of the tumour", "Lymph nodes", "cell grade"], 'Metastasis.'),
          L("Read an example", `${tbl([["Code", "Meaning"], ['Tis', "tumour in situ"], ["T1 to T4", "small to large and widespread tumour"], ['N0', "no lymph nodes involved"], ["N1 to N3", "more or more distant nodes"], ['M0', "no distant metastasis"], ['M1', "distant metastasis present"]])}${pearl("T2 N0 M0 means a medium tumour, no nodes and no metastasis; usually curable.")}`),
          P("Match each code to its meaning", [['Tis', "in situ"], ['N0', "no nodes involved"], ['M1', "distant metastasis"], ['T4', "large, widespread tumour"]]),
          T("M0 means the patient has distant metastasis.", false, "False; M0 means none."),
          L("Three words for extent", `• <b>localized</b>: confined to where it began<br>• <b>regional</b>: spread to nearby nodes or tissues<br>• <b>distant metastasis</b>: spread to distant organs or nodes (the M)`),
          M("What is a cancer that has reached only nearby lymph nodes called?", ['regional', 'localized', 'distant', 'in situ'], "Regional."),
          B("In TNM, the letter ___ is the state of the lymph nodes.", ['N', 'T', 'M'], 'Nodes.'),
          S("Spell the term for finding the size and spread of a cancer", 'staging', 'stage + -ing.', 'stag…'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx9', title: "Stage 0 to 4", icon: '🪜', items: [
          L("Five steps", `TNM is finally summed up as a <b>stage</b>:${fig('stages')}`),
          M("Stage IV means…", ["distant metastasis", "cancer in situ", "a small local tumour", "no cancer"], "The highest stage."),
          L("Breast cancer stages in the book", `${fig('breast-stages', '', "Stages of breast cancer (Figure 20-4 of the book).")}${tbl([["Stage", "The book’s description"], ['Stage I', "localised cancer (in situ)"], ['Stage II', "invasion of nearby breast tissue"], ['Stage III', "invasion of the lymph nodes"], ['Stage IV', "metastasis to the liver"]])}`),
          O("Put the stages of breast cancer in order", ["applied to the skin", "invasion of breast tissue", "invasion of the lymph nodes", "metastasis to the liver"], "Figure 20-4."),
          T("The higher the stage, the worse the prognosis.", true, "Harder treatment."),
          P("Match each stage to its feature", [['stage 0', "in situ"], ['stage I', "small and local"], ['stage III', "regional nodes"], ['stage IV', "distant metastasis"]]),
          M("prognosis means…", ["the predicted course and outcome of the disease", "diagnosis", "treatment", "tissue sample"], "pro- (before) + gnosis (knowing)."),
          B("The choice of treatment depends on the cancer’s type, site and ___.", ["Stage", "colour", "weight"], "The book: stage of the disease."),
          L("Review of “Grade and Stage”", recap(["grade = cell abnormality (grade 1 well differentiated to grade 3 poorly differentiated) • stage = extent of cancer", "ER, PR and HER2 on breast cancer cells; ER-positive → hormone therapy", "TNM: T tumour (Tis to T4), N nodes (N0 to N3), M metastasis (M0, M1); localized, regional, distant", "stage 0 in situ to stage IV distant metastasis; prognosis the outlook"])),
          N('d2t:dx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* مهار — دنیای ۶: درمان سرطان
 * جراحی (جدول ۲۰-۵)، جراحی پستان و عارضه‌اش (شکل ۲۰-۹)، پرتودرمانی، شیمی‌درمانی و عارضه‌ها،
 * هورمون‌درمانی و ایمونوتراپی، پیوند سلول بنیادی، زمان‌بندی درمان و هدف‌های درمان (جدول ۲۰-۶). */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'tx', sym: 'Rx', name: "Cancer Treatment", short: "Treatment", sub: "Surgery, radiotherapy, chemotherapy and side effects, hormone therapy and immunotherapy, stem cell transplant and the aims of treatment",
    color: '#7048E8', dark: '#4F2FB8', light: '#EEE8FF',
    levels: ["surgery", "Radiation and Drugs", "Approach and Outcome"],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: جراحی ================= */
      {
        id: 'tx1', title: "Cancer Surgery", icon: '✂️', items: [
          L("Organ root + -ectomy", `The book says surgery is best for <b>solid tumours</b> confined to one area; it is not used for leukaemia or widespread cancer.${fig('surgery-map')}`),
          M(`${e('<b>pneumonectomy</b>')} means…`, ["removal of a whole lung", "removal of one lobe of a lung", "cutting into the chest", "looking inside the lung"], 'pneumon/o + -ectomy.'),
          L("Operations in Table 20-5", `${tbl([["surgery", "removal"], [e('pneumonectomy'), "a whole lung"], [e('cystectomy'), "bladder"], [e('hysterectomy'), "uterus"], [e('laryngectomy'), "all or part of the larynx"], [e('lobectomy'), "one lobe of the lung"], [e('prostatectomy'), "all or part of the prostate"], [e('orchiectomy'), "one or both testes"], [e('salpingo-oophorectomy'), "tubes and ovaries"]])}${memo("salping/o is the uterine tube and oophor/o the ovary: salpingo-oophorectomy means removing both together.")}`),
          P("Match each operation to its organ", [['cystectomy', "bladder"], ['hysterectomy', "uterus"], ['orchiectomy', "testis"], ['laryngectomy', "voice box"]]),
          L("General surgical terms", `• <b>excision</b>: cutting out tissue<br>• <b>resection</b>: removing part of an organ or a metastasis (e.g. in the lung or liver)<br>• <b>en bloc resection</b>: removing the tumour in one piece with the surrounding tissue and nodes<br>• <b>debulking</b> (cytoreduction): removing as much tumour as possible when not all of it can be removed${pearl("For bladder cancer, cystectomy; but cystoscopy is only viewing the bladder. Read the suffix carefully!")}`),
          T("Surgery is the best treatment for leukaemia.", false, "False; surgery is for a local solid tumour, not blood cancer."),
          M("What is removing a tumour in one piece with the surrounding tissue and nodes called?", ['en bloc resection', 'debulking', 'biopsy', 'lobectomy'], "en bloc = in one piece."),
          B("Removal of one lobe of a lung is called ___.", ['lobectomy', 'pneumonectomy', 'thoracotomy'], 'lob/o + -ectomy.'),
          W("Build a word meaning “removal of the uterus”", ['hyster/o', '-ectomy'], ['-scopy', 'cyst/o', '-tomy'], 'hyster/o + -ectomy = hysterectomy.'),
          S("Spell the term for removal of the prostate", 'prostatectomy', 'prostat/o + -ectomy.', 'prostat…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: "Breast surgery", icon: '🎗️', items: [
          L("Save the breast or remove it?", `${fig('lump-mast')}${tbl([["surgery", "The book’s definition"], [e('lumpectomy'), "removing the tumour and a little healthy tissue around it"], [e('mastectomy'), "removing the breast or most of its tissue; with or without the lymph nodes"], [e('modified radical mastectomy'), "removing the breast, some armpit nodes and the lining over the chest muscles"]])}`),
          M("What is removed in a lumpectomy?", ["the tumour and a little healthy tissue around it", "the whole breast", "the breast and chest muscle", "only the armpit nodes"], "lump = mass."),
          L("A complication that lasts for years", `Removing the armpit lymph nodes blocks the lymph flow of the arm and may cause <b>lymphedema</b>:${fig('lymphedema-arm', '', "Severe swelling of the arm from long-term lymph blockage, years after radical breast cancer surgery (Figure 20-9 of the book).")}${pearl("After lymph node dissection, blood is not drawn and blood pressure is not taken on that arm, so lymphoedema does not worsen.")}`),
          P("Match each term to its meaning", [['lumpectomy', "removing the lump"], ['mastectomy', "removal of the breast"], ['lymphedema', "lymphatic swelling"], ['modified radical mastectomy', "breast, armpit nodes and muscle lining"]]),
          T("Lymphoedema of the arm can appear years after the armpit nodes are removed.", true, "Figure 20-9."),
          L("reconstruction", `After mastectomy, <b>reconstructive surgery</b> restores the shape of the breast; the book calls this <b>rehabilitative</b> treatment.`),
          M("Which treatment approach is breast reconstruction after mastectomy?", ['rehabilitative', 'palliative', 'prophylactic', 'neoadjuvant'], "Table 20-6."),
          B("The abbreviation ___ means modified radical mastectomy.", ['MRM', 'SLNB', 'DCIS'], "Modified radical mastectomy."),
          S("Spell the term for removing only a breast lump", 'lumpectomy', 'lump + -ectomy.', 'lump…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: "Special Operations", icon: '❄️', items: [
          L("Cold, light and an opening", `${tbl([["Method", "The book’s description"], [e('cryosurgery'), "cry/o = cold; freezing and destroying tissue: early skin cancer, retinoblastoma, precancerous lesions of the skin and cervix"], [e('laser surgery'), "a beam of light for cutting surface tissue or organ linings"], [e('colostomy'), "col/o + -stomy: an opening of the colon on the abdomen"], [e('port catheter'), "a small device under the chest skin for giving chemotherapy"]])}`),
          M("What does cryosurgery destroy tissue with?", ["extreme cold", "electricity", "light", "radioactive substances"], "cry/o = cold."),
          L("Ectomy, stomy, tomy", `${fig('ectomy-tomy-stomy')}${memo("The book calls these three “confusing terms”: blepharectomy removal, salpingostomy an opening and prostatolithotomy an incision.")}`),
          P("Match each suffix to its meaning", [['-ectomy', "removal"], ['-stomy', "making an opening"], ['-tomy', "incision"], ['cry/o', "cold"]]),
          T("Colostomy means removal of the large intestine.", false, "False; removal is colectomy and colostomy is making an opening."),
          M("What is the device placed under the chest skin for chemotherapy?", ['port catheter', 'stent', 'pacemaker', 'shunt'], "The book: access devices for chemotherapy."),
          B("Removal of the thyroid is called ___.", ['thyroidectomy', 'thyroidotomy', 'thyroidostomy'], 'thyroid/o + -ectomy.'),
          W("Build a word meaning “surgery with cold”", ['cry/o', 'surgery'], ['radi/o', '-tomy', 'chem/o'], 'cry/o + surgery = cryosurgery.'),
          L("Review of “Surgery”", recap(["Surgery for a local solid tumour; excision, resection, en bloc resection, debulking", "ectomies: pneumonectomy, lobectomy, cystectomy, hysterectomy, laryngectomy, prostatectomy, orchiectomy, salpingo-oophorectomy, thyroidectomy", "Breast: lumpectomy, mastectomy, modified radical mastectomy; lymphedema; reconstructive surgery", "cryosurgery, laser surgery, colostomy, port catheter; -ectomy removal, -tomy incision, -stomy opening"])),
          N('m2r:tx')
        ]
      },

      /* ================= سطح ۲: پرتو و دارو ================= */
      {
        id: 'tx4', title: "treatment with radiation", icon: '☢️', items: [
          L("Radiation to kill cells", `<b>Radiation therapy</b> (radiotherapy) kills cancer cells or slows their growth with high-energy rays such as X-rays. It is given in three ways:${fig('radiation-types')}`),
          M("In brachytherapy, where is the radiation source?", ["in or beside the tumour", "in a machine outside the body", "in the blood", "in the bone marrow"], "brachy- = near."),
          L("Three types in the book", `${tbl([["Type", "Description"], [e('external beam radiation'), "a machine aims the radiation at the tumour from outside"], [e('brachytherapy'), "radioactive seeds, needles, wires or catheters in or beside the tumour"], [e('systemic radiation therapy'), "a liquid radioactive substance by mouth or vein circulates in the blood"]])}${pearl("Radioactive iodine (I-131) is an example of systemic radiotherapy: the thyroid takes up iodine, and thyroid cancer cells are irradiated from within.")}A tumour easily damaged by radiation is <b>radiosensitive</b>.`),
          P("Match each type to its feature", [['external beam', "a machine outside the body"], ['brachytherapy', "radioactive seeds beside the tumour"], ['systemic', "radioactive liquid in the blood"], ['radioactive iodine', "thyroid cancer"]]),
          T("The book: radiotherapy with a radioactive substance injected into a vein is the systemic type.", true, "End-of-chapter question 2."),
          M("radiosensitive means the tumour…", ["is easily damaged by radiation", "resists radiation", "produces radiation", "is treated with surgery"], "Sensitive to radiation."),
          B("A radiotherapy specialist is a ___ oncologist.", ['radiation', 'medical', 'surgical'], 'radiation oncologist.'),
          W("Build a word meaning “treatment from close by”", ['brachy-', '-therapy'], ['radi/o', 'chem/o', '-tomy'], 'brachy- + -therapy = brachytherapy.'),
          S("Spell the term for radiotherapy from inside or beside the tumour", 'brachytherapy', 'brachy- + -therapy.', 'brachy…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx5', title: "drug treatment of cancer", icon: '💉', items: [
          L("Drugs against fast-dividing cells", `<b>Chemotherapy</b> is treatment with anticancer drugs that stop cancer cells growing and dividing. These drugs are <b>antineoplastic</b> and often <b>cytotoxic</b> (cell-killing), such as <b>methotrexate</b> and <b>fluorouracil</b>.${memo("cyt/o + -toxic = “cell poison”: chemotherapy is a precise poison for fast-dividing cells.")}`),
          M(`${e('<b>antineoplastic</b>')} means a drug that…`, ["it stops cancer cells growing and multiplying", "it reduces nausea", "it suppresses immunity", "it reduces pain"], 'anti- + neo- + plas/o + -tic.'),
          L("Why does it have side effects?", `${fig('chemo-effects')}${tbl([["Complication", "Meaning"], [e('alopecia'), "hair loss"], [e('mucositis'), "sores and inflammation of the mouth and gut lining"], [e('neutropenia'), "a shortage of neutrophils; risk of infection"], [e('myelosuppression'), "reduced blood cell production in the bone marrow"]])}`),
          P("Match each side effect to its meaning", [['alopecia', "hair loss"], ['mucositis', "mouth sores"], ['neutropenia', "shortage of neutrophils"], ['myelosuppression', "bone marrow suppression"]]),
          L("Supportive treatment", `• <b>antiemetic</b>: a drug against nausea; anti- + emesis (vomiting). Examples: chlorpromazine and dexamethasone<br>• <b>colony-stimulating factor</b> (CSF, G-CSF): prompts the bone marrow to make blood cells${pearl("A patient with neutropenia and fever is an oncology emergency: “neutropenic fever” needs antibiotics at once.")}`),
          T("An antiemetic is a drug to prevent nausea and vomiting.", true, "The chapter’s drug table."),
          M("Which drug stimulates white blood cell production after chemotherapy?", ['colony-stimulating factor', 'antiemetic', 'antiestrogen', 'methotrexate'], 'G-CSF.'),
          B("Hair loss in chemotherapy is called ___.", ['alopecia', 'mucositis', 'cachexia'], 'alopecia.'),
          S("Spell the term for cancer treatment with drugs", 'chemotherapy', 'chem/o + -therapy.', 'chemo…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx6', title: "Hormones and Immunity", icon: '🛡️', items: [
          L("Lock and key", `<b>Hormone therapy</b> (endocrine therapy) slows the growth of hormone-sensitive tumours by stopping hormone production or blocking its effect:${fig('hormone-block')}`),
          M("In which cancer is an antiestrogen used?", ["oestrogen-receptor-positive breast cancer", "skin cancer", "leukaemia", "lung cancer"], "The book: estrogen positive breast cancer."),
          L("Hormonal drugs", `${tbl([["drug", "Job"], [e('antiestrogen'), "blocking the effect of oestrogen, such as tamoxifen in the breast"], [e('aromatase inhibitor'), "reducing oestrogen production after menopause"], [e('antiandrogen'), "blocking male hormone; prostate"], [e('LH-RH agonist'), "reducing the secretion of sex hormones"]])}${memo("andr/o means male: an antiandrogen, “against male hormone”, is for the prostate.")}`),
          P("Match each drug to its job", [['antiestrogen', "blocking the effect of oestrogen"], ['antiandrogen', "blocking male hormone"], ['aromatase inhibitor', "reducing oestrogen production"], ['LH-RH agonist', "reducing sex hormones"]]),
          L("Waking up immunity", `• <b>immunotherapy</b> (biological therapy): boosting the immune system’s power to fight cancer<br>• <b>BCG vaccine</b>: a weakened bacterium that activates immunity in the bladder<br>• <b>monoclonal antibody</b>: a laboratory antibody that sticks to a specific target on the cancer cell<br>• <b>targeted therapy</b>: a drug that targets a particular molecule of cancer growth${pearl("An immunosuppressant is the opposite: it suppresses immunity; for transplant patients.")}`),
          T("Immunotherapy and an immunosuppressant do the same thing.", false, "False; one boosts immunity and the other suppresses it."),
          M("In which cancer is BCG vaccine used?", ["bladder", "breast", "prostate", "blood"], "Immunotherapy inside the bladder."),
          B("A drug that reduces oestrogen production after menopause is an ___ inhibitor.", ['aromatase', 'colony', 'receptor'], 'aromatase inhibitor.'),
          L("Review of “Radiation and Drugs”", recap(["radiation therapy: external beam, brachytherapy (near), systemic (such as radioactive iodine)", "chemotherapy: antineoplastic and cytotoxic; methotrexate, fluorouracil", "Side effects: alopecia, mucositis, neutropenia, myelosuppression; support: antiemetic, colony-stimulating factor", "hormone therapy: antiestrogen, aromatase inhibitor, antiandrogen, LH-RH agonist • immunotherapy: BCG, monoclonal antibody, targeted therapy"])),
          N('ab:tx')
        ]
      },

      /* ================= سطح ۳: رویکرد و پیامد ================= */
      {
        id: 'tx7', title: "stem cell transplant", icon: '🌱', items: [
          L("Rebuilding the Bone Marrow", `A <b>stem cell transplant</b> replaces blood-forming stem cells destroyed by intensive chemotherapy or radiotherapy; mostly for leukaemia and lymphoma.${fig('stem-cell')}`),
          M("Which cancers is a stem cell transplant mostly for?", ["leukaemia and lymphoma", "skin cancer", "stage 1 breast cancer", "black pigment-cell tumour (melanoma)"], "The book."),
          L("Two sources of cells", `${vs(['BMT', "bone marrow transplantation: cells from the bone marrow"], ['PBSCT', "peripheral blood stem cell transplantation: cells from the peripheral blood"])}The book says stem cells can come from bone marrow, blood or the <b>umbilical cord</b>.${pearl("Graft-versus-host disease (GVHD) means the donor’s immune cells attack the recipient’s body; an immunosuppressant is given to prevent it.")}`),
          P("Match each abbreviation to its meaning", [['BMT', "replacing diseased marrow with donor marrow"], ['PBSCT', "peripheral blood stem cell transplant"], ['GVHD', "donor immune cells attacking the recipient"], ['CSF', "colony-stimulating factor"]]),
          O("Put the steps of a stem cell transplant in order", ["collecting the stem cells", "intensive chemotherapy", "infusing the cells through a vein", "engraftment and making new blood"], "The transplant figure."),
          T("In GVHD, the recipient’s body attacks the transplanted cells.", false, "False; it is the reverse: the transplanted cells (graft) attack the host’s body."),
          M("Where can blood stem cells be taken from?", ["bone marrow, blood or umbilical cord", "only the skin", "only the liver", "only the lymph nodes"], "The book."),
          B("A drug that suppresses immunity is called an ___.", ['immunosuppressant', 'immunotherapy', 'antineoplastic'], 'immun/o + suppressant.'),
          S("Spell the one-word term for bone marrow suppression", 'myelosuppression', 'myel/o + -suppression.', 'myelo…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx8', title: "Timing of treatment", icon: '⏱️', items: [
          L("Before, During and After Surgery", `${fig('treatment-timeline')}${vs(['neoadjuvant therapy', "before surgery; to shrink the tumour"], ['adjuvant therapy', "after surgery; to kill remaining cells"])}`),
          M("What is chemotherapy before surgery to shrink a tumour called?", ['neoadjuvant therapy', 'adjuvant therapy', 'palliative care', 'hospice'], "neo- = new, before."),
          L("After treatment", `${tbl([["Term", "Meaning"], [e('remission'), "lessening or disappearance of signs of cancer; complete remission (CR) means no cancer can be seen"], [e('relapse'), "return of cancer after a period of improvement"], [e('recurrence'), "cancer that has come back after treatment, in the same place or elsewhere"], [e('five-year survival rate'), "the percentage of patients alive five years after diagnosis"]])}${memo("re- means again: relapse and recurrence both mean “it came back”.")}`),
          P("Match each term to its meaning", [['remission', "signs of cancer disappear"], ['relapse', "cancer comes back"], ['adjuvant', "after surgery"], ['neoadjuvant', "before surgery"]]),
          T("Complete remission means the cancer will definitely never return.", false, "False; it means none can be seen for now; follow-up is needed."),
          M("What kind of treatment is radiotherapy after a lumpectomy to destroy remaining cells?", ['adjuvant therapy', 'neoadjuvant therapy', 'prophylactic', 'debulking'], "After the main treatment."),
          B("The percentage of patients alive five years after diagnosis is the five-year ___ rate.", ['survival', 'remission', 'recurrence'], "Five-year survival rate."),
          O("Put the usual order of treatment for a solid tumour in sequence", ['neoadjuvant therapy', 'surgery', 'adjuvant therapy', 'follow-up'], "Before, during and after."),
          S("Spell the term for the lessening or disappearance of cancer signs", 'remission', 're- + mission.', 'remis…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx9', title: "Aims of Treatment", icon: '🎯', items: [
          L("Every treatment has an aim", `The book groups treatments by their aim (Table 20-6):${fig('care-goals')}`),
          M("Palliative treatment means…", ["relieving symptoms without a cure", "definitive cure", "preventing cancer", "breast reconstruction"], "From French palliatif: easing without curing."),
          L("Examples from Table 20-6", `${tbl([["Approach", "Example"], [e('curative'), "primary or definitive: local removal, en bloc dissection"], [e('palliative'), "tumour debulking, pain control, nutritional support"], [e('prophylactic'), "removing a precancerous lesion"], [e('rehabilitative'), "reconstruction after mastectomy"], [e('supportive'), "chemotherapy port, antiemetics"], [e('hospice'), "end-of-life comfort care"]])}${memo("prophylactic = pro (before) + phylax (guard): “guarding in advance”.")}`),
          P("Match each approach to its example", [['curative', "complete removal of the tumour"], ['palliative', "pain control"], ['prophylactic', "removal of a polyp"], ['rehabilitative', "breast reconstruction"]]),
          T("The book: complete removal of a basal cell carcinoma of the skin is definitive treatment.", true, "End-of-chapter question 8."),
          M("A patient with metastatic cancer receives radiation to ease bone pain. What is the aim of treatment?", ['palliative', 'curative', 'prophylactic', 'rehabilitative'], "Relief, not cure."),
          B("Comfort care for patients at the end of life is called ___.", ['hospice', 'remission', 'resection'], 'hospice.'),
          M("What does the book say the choice of treatment depends on?", ["the type and site of the cancer, the stage, and the patient’s age and general health", "only the patient’s age", "only the tumour size", "only the patient’s opinion"], "Cancer Treatment in the book."),
          L("Review of “Approach and Outcome”", recap(["stem cell transplant: BMT (bone marrow), PBSCT (peripheral blood); GVHD and immunosuppressant", "neoadjuvant before surgery, adjuvant after it; remission, relapse, recurrence, five-year survival rate", "Aims: curative (definitive), palliative, prophylactic, rehabilitative, supportive, hospice", "Choice of treatment: type and site of cancer, stage, age and general health"])),
          N('d2t:tx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* مهار — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: "Splitty", title: "The Word Breaker", shape: 'puzzle', color: '#748FFC', acc: ['sparkle'], bio: "Breaks every scary word into root and suffix and reads it from the end: osteosarcoma means cancer of the connective tissue of bone." },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Ecto", title: "Master of Surgical Suffixes", shape: 'clipboard', color: '#5C7CFA', acc: ['glasses'], bio: "Knows the difference between -ectomy (removal), -tomy (incision) and -stomy (new opening) and never mixes up colectomy and colostomy." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Chartie", title: "The Abbreviation Decoder", shape: 'book', color: '#4C6EF5', acc: ['crown'], bio: "Reads Bx, Dx, Tx, mets and s/p like a mother tongue and gives the plural of metastasis as metastases." },
    { id: 'cl-0', w: 'cl', lv: 0, name: "Celly", title: "The Orderly Cell", shape: 'cell', color: '#20C997', acc: ['sparkle'], bio: "Divides only as much as needed, stops on reaching its neighbours, and when the time comes bows out quietly by apoptosis." },
    { id: 'cl-1', w: 'cl', lv: 1, name: "Brakey", title: "tumour suppressor gene", shape: 'shield', color: '#12B886', acc: ['headband'], bio: "The brake on cell division who repairs damaged DNA; if mutated (like BRCA1), the cell runs out of control." },
    { id: 'cl-2', w: 'cl', lv: 2, name: "Dee", title: "Guardian of the Genes", shape: 'dna', color: '#0CA678', acc: ['crown'], bio: "Knows that an oncogene is a stuck accelerator and a suppressor gene the brake; a mutation in either drives the cell towards cancer." },
    { id: 'nm-0', w: 'nm', lv: 0, name: "Omy", title: "benign tumour", shape: 'bubble', color: '#FFA94D', acc: ['sparkle'], bio: "Has a capsule, grows slowly and goes nowhere: lipoma, adenoma and osteoma are all family." },
    { id: 'nm-1', w: 'nm', lv: 1, name: "Sarco", title: "The Tissue Namer", shape: 'bone', color: '#F76707', acc: ['glasses'], bio: "Sends epithelial tissue to carcinoma, connective tissue to sarcoma, bone marrow to leukemia and lymph to lymphoma." },
    { id: 'nm-2', w: 'nm', lv: 2, name: "Blasto", title: "The Embryonic Tumour Spotter", shape: 'blob', color: '#E8590C', acc: ['crown'], bio: "Knows retinoblastoma, neuroblastoma and medulloblastoma, and knows that Wilms tumor is the exception in this family." },
    { id: 'sx-0', w: 'sx', lv: 0, name: "Cautie", title: "The Seven Warning Signs", shape: 'ribbon', color: '#F06595', acc: ['sparkle'], bio: "Knows the seven letters of CAUTION by heart: from a change in bowel habits to a nagging cough and hoarseness." },
    { id: 'sx-1', w: 'sx', lv: 1, name: "Molly", title: "Master of ABCDE", shape: 'disc', color: '#E64980', acc: ['glasses'], bio: "Checks every mole with five questions: asymmetrical? ragged border? several colours? larger than 6 mm? changing?" },
    { id: 'sx-2', w: 'sx', lv: 2, name: "Sifty", title: "The Early Finder", shape: 'micro', color: '#C2255C', acc: ['crown'], bio: "Mammography, the Pap smear, colonoscopy and PSA are her tools for finding cancer before symptoms." },
    { id: 'dx-0', w: 'dx', lv: 0, name: "Needly", title: "The Precise Sampler", shape: 'syringe', color: '#4DABF7', acc: ['sparkle'], bio: "Sometimes removes the whole lump (excisional), sometimes a piece (incisional) and sometimes just a few cells with a fine needle (FNA)." },
    { id: 'dx-1', w: 'dx', lv: 1, name: "Patho", title: "The Pathologist at the Microscope", shape: 'micro', color: '#228BE6', acc: ['glasses'], bio: "The definite diagnosis is his job: he writes the cell type, grade and surgical margin in the report." },
    { id: 'dx-2', w: 'dx', lv: 2, name: "Tenem", title: "The Stager", shape: 'scale', color: '#1971C2', acc: ['crown'], bio: "Tells with three letters, T, N and M, how far a cancer has advanced: from stage 0 (in situ) to stage IV (distant metastasis)." },
    { id: 'tx-0', w: 'tx', lv: 0, name: "Bladey", title: "The Cancer Surgeon", shape: 'glove', color: '#9775FA', acc: ['sparkle'], bio: "Removes a solid tumour with a healthy margin: lumpectomy, mastectomy or colectomy, depending on its size and site." },
    { id: 'tx-1', w: 'tx', lv: 1, name: "Rayo", title: "The Radiotherapist", shape: 'rad', color: '#FAB005', acc: ['glasses'], bio: "Beams radiation from outside, places radioactive seeds beside the tumour (brachytherapy) or sends iodine-131 into the blood." },
    { id: 'tx-2', w: 'tx', lv: 2, name: "Chemy", title: "The Cancer Pharmacist", shape: 'capsule', color: '#7048E8', acc: ['crown'], bio: "Knows chemotherapy, hormone therapy and immunotherapy and keeps side effects in check with antiemetics and CSF." }
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
/* مهار — راند بالینی: پرونده‌های چندمرحله‌ای
 * پرونده اول از «خلاصه ترخیص» فصل Cancer Medicine (کارسینوم پاپیلاری تیروئید و درمان با ید ۱۳۱) گرفته شده
 * و بقیه از موقعیت‌های رایج بالینی سرطان ساخته شده‌اند؛ هدف: به کار بردن واژه‌های سرطان در دل یک پرونده واقعی.
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان سرطان ================= */
    {
      id: 'r1', w: 'lx', title: "Discharge summary: iodine-131", who: "A 28-year-old woman with thyroid cancer",
      brief: "Mrs Smith has a history of papillary carcinoma of the thyroid and, after surgery, has been admitted for a second dose of radioactive iodine. The discharge summary is full of abbreviations; translate it for the patient’s family.",
      chart: [["diagnosis", 'papillary carcinoma of the thyroid'], ["Surgical history", 's/p left thyroidectomy'], ["treatment", "I-131, 150 mCi"], ["Discharge medicine", "Synthroid 0.1 mg p.o. q.d."]],
      fig: { a: ['radiation-types'], l: ["Three ways of giving radiotherapy"] },
      steps: [
        P("abbreviation", "Match each chart abbreviation to its meaning", [['s/p', "status after surgery"], ['p.o.', "oral"], ['q.d.', "once a day"], ['mCi', "unit of radioactivity"]]),
        M("surgery", "thyroidectomy means…", ["removal of the thyroid gland", "incision into the thyroid", "thyroiditis", "imaging of the thyroid"], "thyroid/o + -ectomy (removal)."),
        M("Tumour name", "papillary carcinoma means a cancer…", ["of epithelial tissue with finger-like projections", "of connective tissue", "of the bone marrow", "that is benign and encapsulated"], "carcinoma = cancer of epithelial tissue; papill/o = nipple-like projection."),
        M("treatment", "Iodine-131, given by mouth and reaching thyroid cells through the blood, is which type of radiotherapy?", ['systemic radiation therapy', 'external beam radiation', 'brachytherapy', 'cryosurgery'], "A radioactive liquid circulates in the blood: systemic."),
        T("finding", "A 1 × 2 cm neck lymph node after surgery may be a sign of cancer spread.", true, "Lymphatic spread to the neck lymph nodes."),
        S("Spelling", "Write the name of the medical field that treats cancer", 'oncology', "onc/o (tumour) + -logy (study).", 'onco…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: "A tumour board note", who: "The cancer team’s weekly meeting",
      brief: "At the tumour board, the surgeon, pathologist, oncologist and radiotherapist decide about a patient. The meeting secretary must understand their short note.",
      chart: [['Bx', 'adenocarcinoma'], ['Dx', "Ca colon, no mets"], ['Tx', "colectomy, then chemo"], ['F/U', "every 3 months"]],
      fig: { a: ['onc-team'], l: ["The cancer care team"] },
      steps: [
        P("abbreviation", "Match each abbreviation to its meaning", [['Bx', "tissue sample"], ['Dx', "diagnosis"], ['Tx', "treatment"], ['mets', "metastases"]]),
        P("Team", "Match each team member to their job", [['pathologist', "Diagnosis under the microscope"], ['surgical oncologist', "removal of a tumour"], ['radiation oncologist', "treatment with radiation"], ['medical oncologist', "drug treatment of cancer"]]),
        M("Term", "colectomy means…", ["removal of the colon", "making an opening of the colon on the abdomen", "looking inside the bowel", "cutting into the bowel"], 'col/o + -ectomy.'),
        T("abbreviation", "“No mets” means the cancer has not spread elsewhere.", true, 'mets = metastases.'),
        M("abbreviation", "NED in a follow-up note means…", ["no evidence of disease", "needs urgent treatment", "end of chemotherapy", "disease coming back"], 'no evidence of disease.'),
        S("Spelling", "Spell the term for a cancer specialist", 'oncologist', 'onc/o + -logist.', 'onco…')
      ]
    },
    /* ================= سلول و رشد تومور ================= */
    {
      id: 'r3', w: 'cl', title: "An abnormal Pap smear", who: "A 32-year-old woman",
      brief: "At routine screening, a young woman’s Pap smear showed abnormal cells and her HPV test is positive. The doctor explains that this is not cancer yet but must be treated.",
      chart: [['Pap smear', 'dysplasia'], ['HPV test', 'positive (high-risk)'], ['biopsy', "not carcinoma in situ"], ["Decision", "removing the dysplastic area"]],
      fig: { a: ['plasia-steps'], l: ["steps of cell change"] },
      steps: [
        M("cell", "dysplasia means…", ["abnormal growth of cells; precancerous", "an increase in the number of normal cells", "invasive cancer", "cell death"], "dys- (abnormal) + -plasia (growth)."),
        O("Steps", "Put the steps of epithelial change in order", ['normal', 'hyperplasia', 'dysplasia', 'carcinoma in situ', 'invasive carcinoma'], "From normal to invasive."),
        M("Cause", "What part does HPV play in this case?", ["a cancer-causing virus for the cervix", "benign tumour", "tumour marker", "an anticancer drug"], "human papillomavirus: its high-risk types cause cervical cancer."),
        T("treatment", "Removing a dysplastic lesion is a preventive (prophylactic) treatment.", true, "Before it turns into cancer."),
        M("Border", "How does carcinoma in situ differ from invasive carcinoma?", ["in situ has not crossed the basement membrane", "in situ is benign", "invasive has a capsule", "there is no difference"], "in situ = in its place."),
        S("Spelling", "Write the term for a cancer-causing agent such as tobacco", 'carcinogen', 'carcin/o + -gen.', 'carcino…')
      ]
    },
    {
      id: 'r4', w: 'cl', title: "Lung cancer in the liver", who: "A 64-year-old man who smokes",
      brief: "On a CT scan of a patient with lung cancer, masses have been seen in the liver. The family ask: “Does he have liver cancer too now?” You need to give the right answer.",
      chart: [['primary tumor', 'lung adenocarcinoma'], ['CT', "several lesions in the liver"], ["liver biopsy", "lung adenocarcinoma cells"], ['risk factor', "tobacco, 40 years"]],
      fig: { a: ['metastasis-routes'], l: ["Routes of cancer spread"] },
      steps: [
        M("Name", "What is this patient’s cancer called?", ['metastatic lung cancer', 'liver cancer', 'lung and liver cancer', 'hepatoblastoma'], "A secondary tumour keeps the name of the primary tumour."),
        M("Route", "By what route did the lung cancer cells reach the liver?", ["hematogenous spread (through the blood)", "Direct contact", "through the air", "an inherited mutation"], "Distant spread is mostly through the blood."),
        P("Term", "Match each term to its meaning", [['primary tumor', "primary tumour"], ['secondary tumor', "secondary tumour"], ['metastasis', "spreading to a distant site"], ['carcinogen', "cancer-causing agent"]]),
        T("root", "meta- means change and -stasis means standing.", true, "The cell changes place and stands in a new spot."),
        M("Cause", "Which risk factor is most important in this patient?", ['tobacco', 'ultraviolet radiation', 'HPV', 'asbestos'], "Tobacco is the main cause of lung cancer."),
        S("Spelling", "Spell the plural of metastasis", 'metastases', '‎-is → ‎-es.', 'metasta…')
      ]
    },
    /* ================= نام‌گذاری تومورها ================= */
    {
      id: 'r5', w: 'nm', title: "A teenager’s knee pain", who: "A 15-year-old football player",
      brief: "A teenager has had pain and swelling above the knee for a few months. The X-ray shows bone destruction and a biopsy has confirmed the diagnosis. You need to decode the tumour’s name.",
      chart: [["Complaint", "pain and swelling above the knee"], ['X-ray', "destructive lesion of the femur"], ['biopsy', 'osteosarcoma'], ["lung CT", "no mets"]],
      fig: { a: ['naming-rules'], l: ["The tumour-naming rule"] },
      steps: [
        M("Name", "osteosarcoma means…", ["malignant cancer of bone", "benign bone tumour", "cartilage cancer", "bone inflammation"], 'oste/o + -sarcoma.'),
        M("Rule", "If the same tumour were benign, what would it be called?", ['osteoma', 'osteocarcinoma', 'osteoblastoma', 'osteoleukemia'], "root + -oma = benign."),
        P("Naming", "Match each malignant tumour to its tissue", [['chondrosarcoma', "firm shock-absorbing connective tissue"], ['liposarcoma', "fat"], ['leiomyosarcoma', "smooth muscle"], ['adenocarcinoma', "gland"]]),
        T("tissue", "A sarcoma arises from epithelial tissue and a carcinoma from connective tissue.", false, "The reverse: a sarcoma comes from connective tissue and a carcinoma from epithelial tissue."),
        M("Spread", "Why is a lung CT done before treatment?", ["the lung is the most common site of sarcoma metastasis", "to see the heart", "to screen for HPV", "to measure hormones"], "Sarcomas often spread to the lungs through the blood."),
        S("Spelling", "Spell the term for cancer of connective tissue", 'sarcoma', 'sarc/o + -oma.', 'sar…')
      ]
    },
    {
      id: 'r6', w: 'nm', title: "A child’s abdominal mass", who: "A 4-year-old child",
      brief: "While bathing her child, a mother felt a lump in the child’s side. Ultrasound shows a mass in the kidney. The doctor talks about an embryonic childhood tumour.",
      chart: [["examination", "large mass in the right flank"], ['ultrasound', "kidney mass"], ["diagnosis", 'Wilms tumor'], ["specialist", 'pediatric oncologist']],
      fig: { a: ['blastoma-map'], l: ["Embryonic tumours of childhood"] },
      steps: [
        M("Name", "Wilms tumor is cancer of which organ?", ["kidney", "liver", "retina", "the adrenal gland"], "An embryonic kidney tumour of children."),
        M("exception", "Why is Wilms tumor an exception to the naming rule?", ["it is not called nephroblastoma", "is benign", "it occurs in adults", "it arises from connective tissue"], "The rule: organ root + -blastoma."),
        P("blastoma", "Match each embryonic tumour to its organ", [['retinoblastoma', "retina"], ['hepatoblastoma', "liver"], ['medulloblastoma', "cerebellum"], ['neuroblastoma', "adrenal gland and nerve"]]),
        T("root", "blast/o means immature or embryonic cell.", true, "blastoma = tumour of immature cells."),
        M("Team", "Which specialist coordinates this child’s treatment?", ['pediatric oncologist', 'hematologist', 'radiologist', 'oncology nurse'], "A paediatric oncologist."),
        S("Spelling", "Spell the term for embryonic cancer of the retina", 'retinoblastoma', 'retin/o + -blastoma.', 'retino…')
      ]
    },
    /* ================= نشانه‌ها و غربالگری ================= */
    {
      id: 'r7', w: 'sx', title: "A mole that changed", who: "A 45-year-old woman",
      brief: "A woman says the mole on her back has grown larger and darker over a few months and its edge is ragged. The doctor checks the mole with the ABCDE rule.",
      chart: [["Complaint", "change in the colour and size of the mole"], ["measure", "8 mm"], ["examination", "asymmetrical, several colours"], ['biopsy', 'melanoma']],
      fig: { a: ['abcde-mole'], l: ["ABCDE rule"] },
      steps: [
        P('ABCDE', "Match each letter to its meaning", [['A', "uneven halves"], ['B', "ragged border"], ['C', "several colours"], ['E', "changing over time"]]),
        M("measure", "An 8-mm mole, in terms of the letter D…", ["is suspicious; larger than 6 mm", "normal", "is benign", "does not matter"], "Diameter: larger than 6 mm across."),
        M("Name", "Melanoma is cancer of which cell?", ["the pigment-producing cell of the skin", "the basal layer cell", "fat cell", "white cell of the lymphatic system"], "melan/o = black; melanocyte."),
        T("Warning", "“An obvious change in a mole” is one of the seven CAUTION warning signs.", true, 'O = Obvious change in wart or mole.'),
        M("Precancer", "Which lesion makes melanoma more likely?", ['dysplastic nevus', 'lipoma', 'hemangioma', 'fibroadenoma'], "A dysplastic nevus."),
        S("Spelling", "Spell the term for a black tumour of pigment cells", 'melanoma', 'melan/o + -oma.', 'mela…')
      ]
    },
    {
      id: 'r8', w: 'sx', title: "A 55-year-old man’s check-up", who: "A 55-year-old man with no symptoms",
      brief: "A healthy man has come for his yearly check-up and has no complaints. The doctor suggests several cancer screening tests, and you need to know the aim of each.",
      chart: [["Complaint", "no"], ['PSA', "within normal limits"], ['FOBT', "positive"], ["Plan", 'colonoscopy']],
      fig: { a: ['screening-tests'], l: ["Screening tests"] },
      steps: [
        T("Screening", "Screening means testing healthy people without symptoms to find cancer early.", true, 'screening.'),
        P("Test", "Match each test to its organ", [['PSA', "prostate"], ['FOBT', "large intestine"], ['mammography', "breast"], ['Pap smear', "cervix"]]),
        M("finding", "A positive FOBT means…", ["hidden blood has been found in the stool", "cancer is certain", "the prostate is enlarged", "blood fats are high"], "fecal occult blood: hidden blood in the stool."),
        M("Next step", "After a positive FOBT, which examination is done?", ['colonoscopy', 'mammography', 'bronchoscopy', 'cystoscopy'], "Viewing the whole large intestine and removing polyps."),
        M("Precancer", "In colonoscopy, which lesion is removed to prevent cancer?", ['polyp', 'cyst', 'hematoma', 'nevus'], "A bowel polyp can turn into adenocarcinoma."),
        S("Spelling", "Spell the term for looking inside the whole colon", 'colonoscopy', 'colon/o + -scopy.', 'colono…')
      ]
    },
    /* ================= تشخیص و مرحله‌بندی ================= */
    {
      id: 'r9', w: 'dx', title: "A breast lump", who: "A 49-year-old woman",
      brief: "A woman has felt a hard lump in her left breast. Mammography shows a suspicious lesion, and several tests are done for diagnosis and staging.",
      chart: [['mammogram', "irregular 2-cm mass"], ['core needle biopsy', 'invasive ductal carcinoma'], ['ER/PR', 'positive'], ['SLNB', 'negative']],
      fig: { a: ['mammogram'], l: ["normal mammogram for comparison"] },
      steps: [
        M("diagnosis", "Which method gives the definite diagnosis of cancer?", ['biopsy', 'mammography', 'breast self-examination', 'tumor marker'], "Only the pathologist’s look at the tissue is definite."),
        M("biopsy", "What is removed in a core needle biopsy?", ["a cylinder of tissue with a thick needle", "the whole lump by surgery", "a few cells with a fine needle", "venous blood"], "core = centre, cylinder."),
        M("receptor", "ER/PR positive means…", ["the tumour grows with oestrogen and progesterone", "the tumour is radiosensitive", "the lymph nodes are involved", "there is metastasis"], "Hormone therapy works."),
        M("The Sentinel Node", "A negative SLNB means…", ["the sentinel lymph node has no cancer", "the cancer has metastasised", "the biopsy failed", "the tumour is benign"], 'sentinel lymph node biopsy.'),
        T("Stage", "A 2-cm tumour with no node involvement and no metastasis is N0 and M0 in TNM.", true, "N0 = no nodes; M0 = no distant metastasis."),
        S("Spelling", "Spell the term for X-ray imaging of the breast", 'mammography', 'mamm/o + -graphy.', 'mammo…')
      ]
    },
    {
      id: 'r10', w: 'dx', title: "coughing blood", who: "A 60-year-old man who smokes",
      brief: "A smoker has come with a long-standing cough and blood-stained sputum. A CT scan shows a mass in the lung, and the team plans diagnosis and staging.",
      chart: [["Complaint", "hemoptysis, dyspnea"], ['CT', "5-cm mass in the right lung"], ['bronchoscopy + Bx', 'small cell lung cancer'], ['PET', "mediastinal lymph nodes involved"]],
      fig: { a: ['tnm'], l: ["TNM staging"] },
      steps: [
        M("symptom", "hemoptysis means…", ["coughing up blood", "shortness of breath", "blood in the urine", "difficulty swallowing"], "hem/o (blood) + -ptysis (spitting)."),
        M("looking inside with a scope (endoscopy)", "What is seen in bronchoscopy?", ["trachea and bronchi", "oesophagus", "bladder", "large intestine"], 'bronch/o + -scopy.'),
        P("Imaging", "Match each method to its feature", [['CT', "computer X-ray slices"], ['PET', "radioactive sugar in active cells"], ['MRI', "magnets and radio waves"], ['sputum cytology', "examining cells in the sputum"]]),
        M('TNM', "In TNM, what does the letter N show?", ["involvement of regional lymph nodes", "the size of the tumour", "distant metastasis", "the grade of the cells"], 'Nodes.'),
        T("Name", "Small cell lung cancer has small round cells like oat grains.", true, 'oat cell cancer.'),
        S("Spelling", "Spell the term for viewing inside the bronchi", 'bronchoscopy', 'bronch/o + -scopy.', 'broncho…')
      ]
    },
    /* ================= درمان ================= */
    {
      id: 'r11', w: 'tx', title: "A breast cancer treatment plan", who: "The same 49-year-old woman, after diagnosis",
      brief: "For early-stage, hormone-receptor-positive breast cancer, the team has proposed a multistep plan. You need to know each step and its aim.",
      chart: [["surgery", 'lumpectomy'], ["then", 'external beam radiation'], ["drug", "antiestrogen (tamoxifen) for five years"], ["Target", 'curative']],
      fig: { a: ['lump-mast'], l: ["Lumpectomy and mastectomy"] },
      steps: [
        M("surgery", "lumpectomy means…", ["removing the lump and a little healthy tissue around it", "removal of the whole breast", "removing the armpit nodes", "breast reconstruction"], "lump = mass."),
        M("time", "What kind of treatment is radiotherapy after surgery to kill remaining cells?", ['adjuvant therapy', 'neoadjuvant therapy', 'palliative care', 'prophylactic surgery'], "adjuvant = additional, after the main treatment."),
        M("Hormone", "What does tamoxifen do in this patient?", ["it blocks the effect of oestrogen on the cancer cells", "it kills the cells with radiation", "it reduces nausea", "it stimulates the bone marrow"], 'antiestrogen.'),
        O("Order", "Put this patient’s treatment steps in order", ["biopsy and diagnosis", 'lumpectomy', 'external beam radiation', 'hormone therapy'], "Diagnosis, surgery, adjuvant radiotherapy, hormone therapy."),
        T("Target", "The aim of this plan is palliative.", false, "False; the aim is curative."),
        S("Spelling", "Spell the term for removal of the breast", 'mastectomy', 'mast/o + -ectomy.', 'mast…')
      ]
    },
    {
      id: 'r12', w: 'tx', title: "Leukaemia in childhood", who: "A 6-year-old girl",
      brief: "A child has been brought in with tiredness, lots of bruises and repeated fevers. The blood count is abnormal and a bone marrow examination confirms the diagnosis. Long treatment lies ahead.",
      chart: [['CBC', "anemia, thrombocytopenia, many blasts"], ['bone marrow aspiration', 'ALL'], ["treatment", "multistep chemotherapy"], ["Complication", "neutropenia, alopecia, mucositis"]],
      fig: { a: ['marrow-crowding'], l: ["Bone marrow in leukaemia"] },
      steps: [
        M("Name", "ALL means…", ['acute lymphocytic leukemia', 'acute myeloid leukemia', 'chronic lymphocytic leukemia', 'adult lymphoma'], "The most common childhood cancer."),
        P("symptom", "Match each finding to its cause", [['anemia', "tiredness and pallor"], ['thrombocytopenia', "bruising and bleeding"], ['neutropenia', "repeated infections"], ['alopecia', "hair loss"]]),
        M("diagnosis", "Which method gives the definite diagnosis of leukaemia?", ['bone marrow aspiration', 'mammography', 'colonoscopy', 'PSA'], "A sample of bone marrow."),
        M("Support", "Which drug reduces the nausea of chemotherapy?", ['antiemetic', 'antiestrogen', 'antiandrogen', 'immunosuppressant'], "anti- + emesis (vomiting)."),
        T("transplant", "If the disease relapses, a stem cell transplant can be a treatment option.", true, "After intensive chemotherapy, the stem cells are replaced."),
        S("Spelling", "Spell the term for treatment with anticancer drugs", 'chemotherapy', 'chem/o + -therapy.', 'chemo…')
      ]
    }
  ];


})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* مهار — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', "Start the meaning of a word from the suffix: osteosarcoma means “cancer of the connective tissue” of “bone”."],
    ['Lx', "onc/o means tumour: oncology is the study of tumours and cancer, and an oncologist is its specialist."],
    ['Lx', "neo- means new and -plasm means growth; neoplasm means “new growth”, that is, a tumour."],
    ['Lx', "The plural of metastasis is metastases and the plural of nevus is nevi."],
    ['Lx', "In apoptosis the second p is silent: “a-po-TOE-sis”; it means programmed cell death."],
    ['Cell', "A cancer cell has two features: it divides without control and it escapes programmed death (apoptosis)."],
    ['Cell', "hyperplasia means more cells, dysplasia misshapen cells and anaplasia undifferentiated cells."],
    ['Cell', "An oncogene is like a stuck accelerator and a tumor suppressor gene like broken brakes."],
    ['Cell', "meta- means change and -stasis means standing: metastasis means the cancer has “changed its place and settled elsewhere”."],
    ['Cell', "Lung cancer that has gone to the liver is still “lung cancer”: metastatic lung cancer, not liver cancer."],
    ['Name', "Root + -oma is usually a benign tumour: lipoma, chondroma, osteoma."],
    ['Name', "Epithelial tissue → carcinoma; connective tissue → sarcoma; bone marrow → leukemia; lymphocytes → lymphoma."],
    ['Name', "Melanoma and lymphoma are always malignant despite their -oma; a hematoma is not a tumour at all!"],
    ['Name', "my/o is muscle and myel/o bone marrow; a myoma is a muscle tumour and a myeloma a bone marrow cancer."],
    ['Name', "A uterine leiomyoma is called a fibroid in everyday language."],
    ['Name', "Wilms tumor is an exception to naming: although it is an embryonic kidney tumour, it is not called nephroblastoma."],
    ['Sx', "hem/o + -ptysis means coughing up blood (lung cancer) and hemat/o + -uria means blood in the urine (bladder and kidney)."],
    ['Sx', "A mole that changes in size, colour or shape should be examined; remember the ABCDE rule."],
    ['Sx', "Hoarseness for more than a week is a warning sign of laryngeal cancer."],
    ['Sx', "Screening means testing healthy people without symptoms; the aim is to find cancer before symptoms appear."],
    ['Sx', "fecal = stool and occult = hidden; FOBT finds hidden blood in the stool for bowel cancer."],
    ['Dx', "The definite diagnosis of cancer is by biopsy and the pathologist’s look under the microscope, not by imaging."],
    ['Dx', "Grade is how misshapen the cells are; stage is how far the cancer has advanced."],
    ['Dx', "In TNM, the letter T is the tumour size, N the lymph nodes and M distant metastasis."],
    ['Dx', "The sentinel lymph node is the first node the cancer reaches; if it is clear, the rest are probably clear too."],
    ['Rx', "-ectomy is removal, -tomy incision and -stomy making an opening: mastectomy, thoracotomy, colostomy."],
    ['Rx', "brachy- means near: in brachytherapy the radiation source is placed right beside the tumour."],
    ['Rx', "Neoadjuvant treatment comes before surgery and adjuvant treatment after it."],
    ['Rx', "palliative means easing: the aim is to reduce pain and symptoms, not to cure."],
    ['Rx', "Chemotherapy harms fast-dividing cells; that is why hair, the mouth lining and bone marrow are damaged."]
  ];

  const COLORS = { Lx: '#4C6EF5', Cell: '#12B886', Name: '#F76707', Sx: '#E64980', Dx: '#1C7ED6', Rx: '#7048E8', '': '#7048E8' };
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
/* مهار — کارت‌های واژه (فلش‌کارت) با جعبه لایتنر
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
/* مهار — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مرجع سریع سرطان
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'mahar.tool';

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
      <p class="disclaimer">⚕️ Mahar is a learning tool and does not replace medical references or clinical judgement.</p>
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
  const dict = () => `<div class="tpane">${searchBox("Search: biopsy, tumour, sarcoma…")}
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
  const SAMPLES = ['osteosarcoma', 'carcinogenesis', 'lymphadenopathy', 'leiomyoma', 'retinoblastoma', 'thrombocytopenia', 'mastectomy', 'antineoplastic'];
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
    return `<div class="tpane">${searchBox("Search: carcin, cancer, -oma…")}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]} list <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b dir="ltr">${esc(r.a)}</b><span>${esc(r.fa)}</span><small dir="ltr">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox("Search: PSA, leukaemia, TNM…")}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>Abbreviation</th><th>Full form and meaning</th></tr>${list.map(a => `<tr><td dir="ltr">${esc(a.a)}</td><td><span dir="ltr" class="abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  /* مرجع سریع: جدول‌های پرکاربرد آناتومی که هنگام خواندن پرونده لازم می‌شوند */
  const REF = [
    ["Naming tumours", [['root + -oma', "benign tumour: adenoma, lipoma, osteoma"], ['root + -carcinoma', "cancer of epithelial tissue: adenocarcinoma"], ['root + -sarcoma', "cancer of connective tissue: osteosarcoma, liposarcoma"], ['root + -blastoma', "tumour of embryonic cells: retinoblastoma"], ['leukemia / lymphoma', "blood cancer / cancer of the lymphatic system"], ["melanoma, lymphoma", "always malignant despite the -oma"]]],
    ["Benign or Malignant?", [['differentiation', "benign: well differentiated • malignant: poorly differentiated"], ['growth', "benign: slow, by pressure • malignant: fast, by infiltration"], ['capsule', "benign: often encapsulated • malignant: no capsule"], ['spread', "benign: local • malignant: metastasises through blood and lymph"]]],
    ["Cell Changes", [['hyperplasia', "more cells, normal appearance"], ['metaplasia', "one type of mature cell turning into another"], ['dysplasia', "abnormal cells; precancerous"], ['carcinoma in situ', "cancer in situ; not yet invasive"], ['invasive carcinoma', "cancer invading the surrounding tissue"]]],
    ["TNM staging", [['T', "size and extent of the primary tumour (T0 to T4; Tis = in situ)"], ['N', "involvement of regional lymph nodes (N0 to N3)"], ['M', "distant metastasis (M0 none, M1 present)"], ['stage 0 → IV', "from in situ to distant metastasis"]]],
    ["Surgical suffixes", [['-ectomy', "removal: mastectomy"], ['-tomy', "incision: thoracotomy"], ['-stomy', "making an opening: colostomy"], ['-scopy', "viewing with an endoscope: colonoscopy"], ['-opsy', "viewing: biopsy"]]],
    ["Treatment approach", [['curative', "aiming at a cure"], ['palliative', "relieving symptoms without a cure"], ['prophylactic', "prophylactic"], ['neoadjuvant', "before surgery"], ['adjuvant', "after surgery"]]]
  ];


  const ref = () => `<div class="tpane"><p class="muted">Frequently used tables for reading charts and imaging reports.</p>
    ${REF.map(g => `<h3 class="tgh">${g[0]}</h3><table class="mini ref"><tr><th>Term</th><th>Meaning</th></tr>${g[1].map(r => `<tr><td dir="ltr" class="ref__v">${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`).join('')}
    ${EA.ui.figCard({ a: ['tissue-map'], l: ["Tissue and cancer name"] })}</div>`;

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
