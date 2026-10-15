/* تراپو • ترمینو — حیطه «govara» (Digestive System)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_govara;
  D.css = ".certbar{width: 100%; margin-top: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px; border: 0; border-radius: 16px; padding: 14px 18px; font-weight: 800; background: linear-gradient(120deg, #c2410c, #f59f00); color: #fff; box-shadow: 0 4px 0 var(--brand-d); text-align: start;}\n.cert{width: 100%; padding: 10px; background: linear-gradient(135deg, #4f5bd5, #e03131, #f08c00, #0c8599, #ae3ec9, #2f9e44); border-radius: 20px;}\n.land__h em{font-style: normal; background: linear-gradient(90deg, var(--brand), #ae3ec9 55%, var(--coral)); -webkit-background-clip: text; background-clip: text; color: transparent;}\n[lang=\"fa\"]{font-family: Vazirmatn, Tahoma, system-ui, sans-serif;}\ntable.ref .ref__v{font-family: Nunito, system-ui, sans-serif; font-weight: 800; white-space: nowrap; text-align: left;}\n.recap{margin: 8px 0 4px; padding: 12px 14px; border-radius: 16px; background: color-mix(in srgb, var(--wc, var(--brand)) 9%, var(--bg)); border: 2px solid color-mix(in srgb, var(--wc, var(--brand)) 35%, var(--line));}\n.recap__h{display: block; font-size: 14px; font-weight: 900; color: color-mix(in srgb, var(--wc, var(--brand)) 80%, var(--text)); margin-bottom: 6px;}\n.recap ul{margin: 0; padding: 0; list-style: none; display: grid; gap: 8px;}\n.recap li{position: relative; padding-inline-start: 24px; font-size: 15px; line-height: 1.8;}\n.recap li::before{content: \"✓\"; position: absolute; inset-inline-start: 2px; top: 0; font-weight: 900; color: var(--green-t);}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* گوارا — هسته: فضای نام، متن‌ها، رقم فارسی و سازنده‌های کوتاه محتوا
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
  EA.APP = { name: "Govara", key: 'govara', title: "Govara • Digestive Terminology" };

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
    name: "Govara", key: 'govara', title: "Govara • Digestive Terminology", certCode: 'GV',
    subject: "Medical terminology of the digestive system",
    kicker: "🍽️ Medical terminology: The Digestive System",
    hello: "Hi, I’m <b>Govara</b>;",
    landP: () => `Hi, I’m <b>Govara</b>, a stomach that digests everything well! Here you’ll follow the path of food from the mouth to the large intestine, get to know the liver, gallbladder and pancreas, name diseases such as GERD, stomach ulcer, gallstones and hepatitis, and understand endoscopy, surgery and digestive drugs; and you’ll <b>decode</b> every new word yourself. ${fa(EA.lex.TERMS.length)} terms with pronunciation and meaning, ${fa(Object.keys(EA.IMG).length || 45)} textbook pictures, ${fa(EA.ART_KEYS.length)} teaching figures, ${fa(EA.rounds.length)} clinical charts and Leitner cards are waiting for you.`,
    disclaimer: "Govara is an educational tool and does not replace medical references, clinical judgment or a physician’s orders.",
    eyes: "Dozens of teaching figures and textbook pictures, from the mouth, teeth and stomach to the intestinal villi, bile ducts, endoscopy and types of stoma.",
    outcomes: [
          "Break every digestive word into root and suffix and build new words with roots such as gastr/o, enter/o, hepat/o and cholecyst/o",
          "Explain the path of food from the mouth, oesophagus and stomach to the small and large intestine, naming each part exactly",
          "Describe the work of the liver, gallbladder, bile ducts and pancreas with the right words",
          "Recognise digestive signs and diseases: dysphagia, GERD, peptic ulcer, IBD, cirrhosis and cholelithiasis",
          "Read endoscopies, barium studies, ERCP and digestive tests in a chart",
          "Understand surgery and stomas, feeding tubes, digestive drugs and their abbreviations"
        ],
    endText: "Just 5 minutes a day. A few weeks from now you’ll read an endoscopy report and a digestive patient’s chart like your mother tongue.",
    obHello: "Hi! I’m Govara, a stomach that digests everything well 🍽️ What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “Language of Digestion” is the best start; the word-building parts are taught there!",
    demo: () => ({
    q: "The surgery form says: <b dir=\"ltr\">cholecystectomy</b>. It means…",
    fig: { a: ['wordparts'], l: ["Root + suffix"] },
    opts: ["removal of the gallbladder", "inflammation of the gallbladder", "gallbladder stones", "imaging of the gallbladder"],
    why: `${EA.K.wb('cholecyst/o', '-ectomy')}<br><b>cholecyst/o</b> = gallbladder • <b>-ectomy</b> = removal. So it means <b>removal of the gallbladder</b>, the commonest treatment for gallstones. With <b>-itis</b> (cholecystitis) it would be inflammation of the gallbladder, and with <b>-graphy</b> imaging of it. Start the meaning from the suffix!`
  }),
    titles: ["First Bite", "Root Finder", "Tooth Expert", "Stomach Explorer", "Bowel Traveller", "Liver’s Friend", "Ulcer Hunter", "Bile Detective", "Endoscope in Hand", "Word Surgeon", "Digestive Pharmacologist", "Head of Govara", "Master of the Language of Digestion"],
    leagueRoles: ["Medical student", "Nursing student", "Lab-science student", "Lab scientist", "Nutrition student", "ICU nurse", "Clinical dietitian", "Internal-medicine resident", "Midwifery student", "Pharmacy student", "Dental hygienist", "Gastroenterology nurse"],
    firstBadge: ['🌱', "First Step"],
    worldBadges: { lx: ['🧩', "Decoder"], mo: ['🦷', "Mouth Expert"], bw: ['🫀', "Bowel Traveller"], up: ['🔥', "Ulcer Hunter"], lo: ['🟡', "Bile Detective"], tx: ['🔦', "Endoscopist"] },
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
    return `<svg class="yona govara yona--${m}" viewBox="0 0 120 150" width="${size || 120}" height="${(size || 120) * 1.25}" aria-hidden="true" style="--c:${c}">
      <ellipse cx="60" cy="144" rx="32" ry="5" fill="currentColor" opacity=".12"/>
      <g class="yona-body">
        <path d="M60 34 C60 22 64 13 72 5" stroke="var(--c)" stroke-width="15" fill="none" stroke-linecap="round"/>
        <path d="M60 34 C60 22 64 13 72 5" stroke="#000" stroke-opacity=".12" stroke-width="15" fill="none" stroke-linecap="round"/>
        <path d="M22 102 C10 108 7 120 12 132" stroke="var(--c)" stroke-width="13" fill="none" stroke-linecap="round"/>
        <path d="M50 30 C70 18 98 26 106 52 C116 86 98 126 62 129 C34 132 13 115 13 93 C13 75 27 67 37 61 C45 55 40 38 50 30 Z" fill="#000" opacity=".14" transform="translate(0 3)"/>
        <path d="M50 30 C70 18 98 26 106 52 C116 86 98 126 62 129 C34 132 13 115 13 93 C13 75 27 67 37 61 C45 55 40 38 50 30 Z" fill="var(--c)"/>
        <path d="M24 104 C34 122 70 128 92 110" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".35"/>
        <path d="M30 114 C44 126 70 128 86 120" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".25"/>
        <path d="M58 36 C74 30 92 36 98 50" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>
        <g transform="translate(100 112)"><circle r="17" fill="#FFC800" stroke="#fff" stroke-width="3"/><ellipse cx="0" cy="-5" rx="5" ry="6.5" fill="#fff"/><path d="M0 0 V11" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/></g>
        <path class="negar-spark" d="M100 18 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
        ${brows}${eyes}
        <ellipse cx="${cx - 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/><ellipse cx="${cx + 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/>
        ${mouths[m] || mouths.happy}${tear}
      </g>
    </svg>`;
  }
  };
})(window);
/* گوارا — واژه‌ها (ساخته‌شده خودکار با tools/build_data.py؛ دستی ویرایش نکنید)
 * [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارها] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [
    ["abdominal ultrasonography", "ul-trah-son-OG-rah-fe", "Ultrasound imaging of the abdominal organs; the main test for gallstones.", "abdominal ultrasound", "tx", "img", []],
    ["absorption", "ab-SORP-shun", "Passage of digested nutrients into the blood or lymph.", "passage of digested food into blood and lymph", "bw", "phys", []],
    ["achalasia", "ak-ah-LA-zhe-ah", "Failure of the lower esophageal sphincter to relax, so food cannot enter the stomach.", "failure of the lower oesophageal sphincter to relax", "up", "pup", []],
    ["achlorhydria", "a-klor-HI-dre-ah", "Lack of hydrochloric acid in the stomach.", "absence of stomach acid", "up", "pup", []],
    ["adhesion", "ad-HE-zhun", "Band of scar tissue that binds two surfaces, often after surgery.", "tissues abnormally stuck together", "lo", "plo", []],
    ["aerophagia", "air-o-FA-je-ah", "Swallowing of air.", "swallowing air", "up", "sx", []],
    ["agnathia", "ag-NATH-e-ah", "Congenital absence of the lower jaw (a- + gnath/o + -ia).", "congenital absence of the jaw", "lx", "wp", []],
    ["alimentary canal", "al-ih-MEN-tar-e", "The digestive tract: a muscular tube from the mouth to the anus.", "The digestive tube", "mo", "sci", ["GI"]],
    ["amylase", "AM-ih-lase", "Enzyme in saliva and pancreatic juice that digests starch.", "starch-digesting enzyme in saliva", "mo", "phys", []],
    ["anal fistula", "A-nal FIS-tu-lah", "Abnormal passage from the anal canal to the skin near the anus.", "abnormal passage from the anal canal to the skin", "lo", "plo", []],
    ["anastomosis", "ah-nas-to-MO-sis", "Surgical connection between two hollow organs; plural anastomoses.", "surgical joining of two hollow structures", "tx", "surg", []],
    ["ankyloglossia", "ang-kih-lo-GLOS-e-ah", "Tongue-tie: a short frenulum that limits tongue movement.", "tongue-tie", "up", "pup", []],
    ["anorectal", "a-no-REK-tal", "Pertaining to the anus and rectum.", "relating to the anus and rectum", "lx", "wp", []],
    ["anorexia", "an-o-REK-se-ah", "Loss of appetite.", "loss of appetite", "up", "sx", []],
    ["anorexia nervosa", "an-o-REK-se-ah ner-VO-sah", "Eating disorder of self-starvation from fear of gaining weight.", "eating disorder of self-starvation", "up", "pup", []],
    ["antacid", "ant-AS-id", "Drug that neutralizes stomach acid.", "drug neutralising stomach acid", "tx", "drug", []],
    ["antidiarrheal", "an-te-di-ah-RE-al", "Drug that treats diarrhea.", "drug against diarrhoea", "tx", "drug", []],
    ["antiemetic", "an-te-e-MET-ik", "Drug that prevents or relieves nausea and vomiting.", "drug against nausea and vomiting", "tx", "drug", []],
    ["antiflatulent", "an-te-FLAT-u-lent", "Drug that relieves gas, such as simethicone.", "drug relieving intestinal gas", "tx", "drug", []],
    ["antispasmodic", "an-te-spaz-MOD-ik", "Drug that relieves spasms of the digestive tract.", "drug relieving gut cramps", "tx", "drug", []],
    ["antrum", "AN-trum", "Lower part of the stomach that leads to the pylorus.", "lower part of the stomach", "mo", "upper", []],
    ["anus", "A-nus", "Opening at the end of the digestive tract.", "opening at the end of the digestive tract", "bw", "bowel", []],
    ["aphagia", "ah-FA-je-ah", "Inability to swallow.", "inability to swallow", "up", "sx", []],
    ["aphthous ulcer", "AF-thus UL-ser", "Small painful ulcer in the mouth; canker sore.", "mouth ulcer", "up", "pup", []],
    ["appendectomy", "ap-en-DEK-to-me", "Surgical removal of the appendix.", "removal of the appendix", "tx", "surg", []],
    ["appendicitis", "ah-pen-dih-SI-tis", "Inflammation of the appendix.", "inflammation of the worm-like pouch off the caecum", "lo", "plo", []],
    ["appendix", "ah-PEN-diks", "Small wormlike tube attached to the cecum; vermiform appendix.", "worm-like pouch hanging from the caecum", "bw", "bowel", []],
    ["ascending colon", "ah-SEN-ding KO-lon", "Part of the colon that rises on the right side from the cecum.", "part of the large bowel rising on the right", "bw", "bowel", []],
    ["ascites", "ah-SI-teze", "Fluid buildup in the peritoneal cavity.", "fluid in the abdomen", "lo", "pacc", []],
    ["bariatric surgery", "bar-e-AT-rik", "Surgery to treat severe obesity, such as gastric bypass or banding.", "weight-loss surgery", "tx", "surg", ["BMI"]],
    ["barium enema", "BA-re-um EN-eh-mah", "X-ray study of the colon after barium is given through the rectum; lower GI series.", "contrast X-ray of the large bowel via the rectum", "tx", "img", ["BE"]],
    ["barium swallow", "BA-re-um", "X-ray study of the esophagus and stomach after swallowing barium.", "X-ray study after swallowing barium", "tx", "img", ["UGI"]],
    ["Barrett esophagus", "BAR-et", "Precancerous change in the lining of the lower esophagus caused by chronic reflux.", "precancerous change of the lower oesophagus lining", "up", "pup", []],
    ["bile", "bile", "Yellow-green fluid made by the liver that emulsifies fats.", "yellow-green fluid from the liver that emulsifies fat", "bw", "acc", []],
    ["biliary", "BIL-e-ar-e", "Pertaining to bile or the bile ducts (bili + -ary).", "relating to bile or its ducts", "lx", "wp", []],
    ["biliary colic", "BIL-e-ar-e KOL-ik", "Sudden severe pain in the right upper quadrant from a gallstone blocking a duct.", "sudden RUQ pain from a blocked gallbladder outlet", "lo", "pacc", []],
    ["biligenesis", "bil-ih-JEN-eh-sis", "Formation of bile (bili + -genesis).", "formation of bile", "lx", "wp", []],
    ["bilirubin", "bil-ih-RU-bin", "Orange-yellow bile pigment made when old red blood cells break down.", "orange pigment from haemoglobin breakdown", "bw", "acc", []],
    ["Billroth I", "BIL-roth", "Partial gastrectomy with the stomach joined to the duodenum.", "stomach joined to the duodenum after partial removal", "tx", "surg", []],
    ["Billroth II", "BIL-roth", "Partial gastrectomy with the stomach joined to the jejunum.", "stomach remnant joined to the jejunum", "tx", "surg", []],
    ["biopsy", "BI-op-se", "Removal of a small piece of tissue for microscopic examination.", "tissue sampling (biopsy)", "tx", "lab", []],
    ["bolus", "BO-lus", "A soft rounded mass of chewed food mixed with saliva.", "chewed mass of food ready to swallow", "mo", "phys", []],
    ["borborygmus", "bor-bo-RIG-mus", "Rumbling sound made by gas moving through the intestines.", "rumbling of the stomach", "up", "sx", []],
    ["bowel", "BOW-el", "The intestine.", "everyday word for the gut", "bw", "bowel", []],
    ["bradypepsia", "brad-e-PEP-se-ah", "Slow digestion.", "slow digestion", "up", "sx", []],
    ["bruxism", "BRUK-sizm", "Clenching and grinding of the teeth, usually during sleep.", "tooth grinding", "up", "pup", []],
    ["buccal", "BUK-al", "Pertaining to the cheek.", "relating to the cheek", "mo", "oral", []],
    ["buccopharyngeal", "buk-o-fah-RIN-je-al", "Pertaining to the cheek and pharynx (bucc/o + pharyng/o + -eal).", "relating to the cheek and pharynx", "lx", "wp", []],
    ["bulimia", "bu-LIM-e-ah", "Eating disorder of binge eating followed by self-induced vomiting.", "binge eating followed by vomiting", "up", "pup", []],
    ["cachexia", "kah-KEK-se-ah", "Severe wasting and weight loss from chronic disease.", "extreme wasting", "up", "sx", []],
    ["canine", "KA-nine", "Pointed tooth used to tear food; also called cuspid.", "pointed tearing tooth; cuspid", "mo", "oral", []],
    ["capsule endoscopy", "KAP-sul en-DOS-ko-pe", "Swallowed camera capsule that photographs the digestive tract.", "swallowed camera pill imaging the gut", "tx", "endo", []],
    ["cardia", "KAR-de-ah", "Part of the stomach next to the esophagus.", "entry part of the stomach", "mo", "upper", []],
    ["cathartic", "kah-THAR-tik", "Strong laxative.", "strong laxative", "tx", "drug", []],
    ["cecoptosis", "se-kop-TO-sis", "Downward displacement of the cecum (cec/o + -ptosis).", "drooping of the caecum", "lx", "wp", []],
    ["cecum", "SE-kum", "Pouch at the start of the large intestine; Latin for hidden.", "pouch at the start of the large intestine", "bw", "bowel", []],
    ["celiac disease", "SE-le-ak", "Immune reaction to gluten that flattens the villi of the small intestine.", "coeliac disease", "lo", "plo", []],
    ["cementum", "seh-MEN-tum", "Bonelike tissue that covers the tooth root and anchors it.", "bone-like covering of the tooth root", "mo", "oral", []],
    ["cheilitis", "ki-LI-tis", "Inflammation of the lips.", "inflammation of the lips", "up", "pup", []],
    ["cheiloplasty", "KI-lo-plas-te", "Surgical repair of the lip.", "surgical repair of the lip", "tx", "surg", []],
    ["cheilosis", "ki-LO-sis", "Cracking at the corners of the mouth, often from vitamin B deficiency.", "cracking at the corners of the mouth", "up", "pup", []],
    ["cholangiectasis", "ko-lan-je-EK-tah-sis", "Dilatation of a bile duct (cholangi/o + -ectasis).", "dilation of a bile duct", "lx", "wp", []],
    ["cholangiogram", "ko-LAN-je-o-gram", "X-ray image of the bile ducts.", "X-ray image of the bile ducts", "tx", "img", []],
    ["cholangiography", "ko-lan-je-OG-rah-fe", "X-ray imaging of the bile ducts with contrast.", "imaging of the bile ducts", "tx", "img", []],
    ["cholangioma", "ko-lan-je-O-mah", "Tumor of a bile duct (cholangi/o + -oma).", "bile duct tumour", "lx", "wp", []],
    ["cholangitis", "ko-lan-JI-tis", "Inflammation of the bile ducts.", "inflammation of the bile ducts", "lo", "pacc", []],
    ["cholecystalgia", "ko-le-sis-TAL-je-ah", "Pain in the gallbladder (cholecyst/o + -algia).", "gallbladder pain", "lx", "wp", []],
    ["cholecystectomy", "ko-le-sis-TEK-to-me", "Surgical removal of the gallbladder.", "removal of the gallbladder", "tx", "surg", []],
    ["cholecystitis", "ko-le-sis-TI-tis", "Inflammation of the gallbladder.", "inflammation of the gallbladder", "lo", "pacc", []],
    ["cholecystogram", "ko-le-SIS-to-gram", "X-ray image of the gallbladder (cholecyst/o + -gram).", "X-ray image of the gallbladder", "lx", "wp", []],
    ["cholecystography", "ko-le-sis-TOG-rah-fe", "X-ray imaging of the gallbladder.", "X-ray imaging of the gallbladder", "tx", "img", []],
    ["choledochal", "KO-le-dok-al", "Pertaining to the common bile duct (choledoch/o + -al).", "relating to the common bile duct", "lx", "wp", []],
    ["choledocholithiasis", "ko-led-o-ko-lih-THI-ah-sis", "Stone in the common bile duct.", "stone in the common bile duct", "lo", "pacc", []],
    ["choledocholithotomy", "ko-led-o-ko-lih-THOT-o-me", "Incision into the common bile duct to remove a stone.", "incision of a bile duct to remove a stone", "tx", "surg", []],
    ["choledochotomy", "ko-led-o-KOT-o-me", "Incision into the common bile duct.", "incision of the common bile duct", "tx", "surg", []],
    ["cholelith", "KO-le-lith", "A gallstone (chol/e + lith).", "gallstone", "lx", "wp", []],
    ["cholelithiasis", "ko-le-lih-THI-ah-sis", "Presence of stones in the gallbladder.", "gallbladder stones", "lo", "pacc", []],
    ["cholelithotripsy", "ko-le-LITH-o-trip-se", "Crushing of gallstones.", "crushing of gallstones", "tx", "surg", []],
    ["cholescintigraphy", "ko-le-sin-TIG-rah-fe", "Nuclear medicine scan of the gallbladder and bile ducts.", "nuclear scan of the gallbladder", "tx", "img", []],
    ["cholestasis", "ko-le-STA-sis", "Stoppage of bile flow (chol/e + -stasis).", "stopped bile flow", "lx", "wp", []],
    ["chyme", "kime", "Semiliquid mass of partly digested food that leaves the stomach.", "semi-digested food leaving the stomach", "mo", "phys", []],
    ["circumoral", "ser-kum-OR-al", "Around the mouth (circum- + or/o + -al).", "around the mouth", "lx", "wp", []],
    ["cirrhosis", "sih-RO-sis", "Chronic liver disease in which scar tissue replaces liver cells; Greek for tawny.", "scarring of the liver", "lo", "pacc", []],
    ["cleft lip", "kleft lip", "Congenital split in the upper lip.", "congenital split in the upper lip", "up", "pup", []],
    ["cleft palate", "kleft PAL-at", "Congenital split in the roof of the mouth.", "congenital split in the roof of the mouth", "up", "pup", []],
    ["colectomy", "ko-LEK-to-me", "Surgical removal of all or part of the colon.", "removal of the colon", "tx", "surg", []],
    ["colitis", "ko-LI-tis", "Inflammation of the colon.", "inflammation of the colon", "lo", "plo", []],
    ["coloclysis", "ko-lo-KLI-sis", "Irrigation of the colon (col/o + -clysis).", "irrigation of the colon", "lx", "wp", []],
    ["colon", "KO-lon", "Main part of the large intestine: ascending, transverse, descending and sigmoid.", "main part of the large bowel", "bw", "bowel", []],
    ["colonoscopy", "ko-lon-OS-ko-pe", "Endoscopic examination of the entire colon.", "looking inside the colon (colonoscopy)", "tx", "endo", []],
    ["coloproctostomy", "ko-lo-prok-TOS-to-me", "Surgical connection between the colon and rectum.", "joining the colon to the rectum", "tx", "surg", []],
    ["colorectal cancer", "ko-lo-REK-tal", "Cancer of the colon or rectum, often starting in a polyp.", "malignancy of the large bowel and rectum", "lo", "plo", []],
    ["colostomy", "ko-LOS-to-me", "Opening of the colon through the abdominal wall.", "opening of the colon onto the abdomen", "tx", "surg", []],
    ["common bile duct", "bile dukt", "Duct formed by the hepatic and cystic ducts that carries bile into the duodenum.", "main channel carrying bile into the duodenum", "bw", "acc", ["CBD"]],
    ["constipation", "kon-stih-PA-shun", "Infrequent or difficult passing of hard, dry stools.", "infrequent, hard, difficult stools", "lo", "sx", []],
    ["Crohn disease", "krone", "Chronic patchy inflammation that can affect any part of the digestive tract, usually the ileum.", "patchy inflammation anywhere in the GI tract", "lo", "plo", ["CD"]],
    ["crown", "krown", "Part of the tooth above the gum line, covered by enamel.", "visible part of a tooth above the gum", "mo", "oral", []],
    ["cystic duct", "SIS-tik", "Duct that carries bile to and from the gallbladder.", "duct from the gallbladder", "bw", "acc", []],
    ["deciduous teeth", "de-SID-u-us", "The 20 primary (baby) teeth.", "milk teeth", "mo", "oral", []],
    ["defecation", "def-eh-KA-shun", "Elimination of feces from the rectum; bowel movement.", "bowel movement", "bw", "phys", ["BM"]],
    ["deglutition", "de-glu-TISH-un", "Swallowing.", "swallowing", "mo", "phys", []],
    ["dental caries", "KAR-eze", "Tooth decay caused by acid from bacteria in plaque.", "tooth decay", "up", "pup", []],
    ["dental hygienist", "DEN-tal hi-JEN-ist", "Licensed professional who cleans teeth and teaches oral care.", "clinician who scales teeth and teaches oral care", "mo", "spec", []],
    ["dental plaque", "plak", "Sticky film of bacteria on the teeth.", "sticky bacterial film on teeth", "up", "pup", []],
    ["dentalgia", "den-TAL-je-ah", "Pain in a tooth; toothache (dent/o + -algia).", "toothache", "lx", "wp", []],
    ["dentin", "DEN-tin", "Bonelike layer under the enamel that forms most of the tooth.", "hard layer under the enamel", "mo", "oral", []],
    ["descending colon", "de-SEN-ding KO-lon", "Part of the colon that runs down the left side.", "part of the large bowel running down on the left", "bw", "bowel", []],
    ["diarrhea", "di-ah-RE-ah", "Frequent loose or watery stools.", "frequent watery stools", "lo", "sx", []],
    ["digestion", "di-JES-chun", "Breakdown of food into substances the body can absorb.", "breakdown of food for absorption", "mo", "phys", []],
    ["diverticulectomy", "di-ver-tik-u-LEK-to-me", "Surgical removal of a diverticulum.", "removal of a diverticulum", "tx", "surg", []],
    ["diverticulitis", "di-ver-tik-u-LI-tis", "Inflammation of diverticula.", "inflammation of diverticula", "lo", "plo", []],
    ["diverticulosis", "di-ver-tik-u-LO-sis", "Presence of many diverticula in the colon.", "many pouches in the colon wall", "lo", "plo", []],
    ["diverticulum", "di-ver-TIK-u-lum", "Small pouch that bulges out of the wall of the colon; plural diverticula.", "pouch in the bowel wall", "lo", "plo", []],
    ["duodenal papilla", "du-o-DE-nal pah-PIL-ah", "Raised area in the duodenum where bile and pancreatic juice enter; papilla of Vater.", "opening of the bile and pancreatic ducts into the duodenum", "bw", "acc", []],
    ["duodenal ulcer", "du-o-DE-nal UL-ser", "Peptic ulcer in the duodenum.", "peptic sore in the first part of the small bowel", "up", "pup", []],
    ["duodenitis", "du-od-eh-NI-tis", "Inflammation of the duodenum (duoden/o + -itis).", "inflammation of the duodenum", "lx", "wp", []],
    ["duodenum", "du-o-DE-num", "First part of the small intestine; receives bile and pancreatic juice.", "first, shortest part of the small bowel", "bw", "bowel", []],
    ["dysentery", "DIS-en-ter-e", "Acute intestinal inflammation with diarrhea, often bloody (dys- + enter/o + -y).", "bloody diarrhoea", "lx", "wp", []],
    ["dyspepsia", "dis-PEP-se-ah", "Indigestion; painful or difficult digestion.", "indigestion", "up", "sx", []],
    ["dysphagia", "dis-FA-je-ah", "Difficulty swallowing.", "difficulty swallowing", "up", "sx", []],
    ["edentulous", "e-DEN-tu-lus", "Without teeth (e- + dent/i + -ulous).", "without teeth", "lx", "wp", []],
    ["emesis", "EM-eh-sis", "Vomiting.", "vomiting", "up", "sx", []],
    ["emetic", "e-MET-ik", "Drug that causes vomiting.", "drug that causes vomiting", "tx", "drug", []],
    ["emulsification", "e-mul-sih-fih-KA-shun", "Breaking fats into tiny droplets, done by bile.", "breaking fat into tiny droplets", "bw", "phys", []],
    ["enamel", "e-NAM-el", "Hard white outer layer of the tooth crown; the hardest substance in the body.", "hard outer coating of the tooth crown", "mo", "oral", []],
    ["endoscope", "EN-do-skope", "Lighted flexible instrument used to look inside the body.", "viewing tube (endoscope)", "tx", "endo", []],
    ["endoscopic retrograde cholangiopancreatography", "en-do-SKOP-ik RET-ro-grade ko-lan-je-o-pan-kre-ah-TOG-rah-fe", "X-ray of the bile and pancreatic ducts with contrast injected through an endoscope.", "ERCP (endoscopic imaging of bile and pancreatic ducts)", "tx", "endo", ["ERCP"]],
    ["endoscopy", "en-DOS-ko-pe", "Examination of the inside of an organ with a lighted instrument (endoscope).", "looking inside with a scope (endoscopy)", "tx", "endo", []],
    ["enema", "EN-eh-mah", "Fluid put into the rectum to clean the bowel or give medicine.", "fluid introduced through the rectum", "tx", "care", []],
    ["enteritis", "en-ter-I-tis", "Inflammation of the small intestine.", "inflammation of the small intestine", "lo", "plo", []],
    ["enterohepatitis", "en-ter-o-hep-ah-TI-tis", "Inflammation of the intestine and liver.", "inflammation of the intestine and liver", "lx", "wp", []],
    ["enteropathy", "en-ter-OP-ah-the", "Any disease of the intestine (enter/o + -pathy).", "intestinal disease", "lx", "wp", []],
    ["enteroscopy", "en-ter-OS-ko-pe", "Endoscopic examination of the small intestine.", "viewing the small intestine with a scope", "tx", "endo", []],
    ["enzyme", "EN-zime", "Protein that speeds a chemical reaction; digestive enzyme names often end in -ase.", "protein that speeds up a reaction", "mo", "phys", []],
    ["epigastric", "ep-ih-GAS-trik", "Above the stomach; the upper middle abdominal region.", "upper middle region of the abdomen", "bw", "bowel", []],
    ["epiglottis", "ep-ih-GLOT-is", "Leaf-shaped cartilage that covers the larynx during swallowing.", "flap covering the larynx when swallowing", "mo", "upper", []],
    ["eructation", "e-ruk-TA-shun", "Belching; bringing up gas from the stomach through the mouth.", "belching", "up", "sx", []],
    ["esophageal", "e-sof-ah-JE-al", "Pertaining to the esophagus; note the added e before -al.", "relating to the oesophagus", "lx", "wp", []],
    ["esophageal atresia", "ah-TRE-zhe-ah", "Congenital closure of the esophagus.", "congenital closure of the oesophagus", "up", "pup", []],
    ["esophageal hiatus", "e-sof-ah-JE-al hi-A-tus", "Opening in the diaphragm through which the esophagus passes.", "opening in the diaphragm for the oesophagus", "mo", "upper", []],
    ["esophageal varices", "e-sof-ah-JE-al VAR-ih-seze", "Swollen veins in the lower esophagus that can bleed; caused by portal hypertension.", "swollen veins in the food pipe from portal hypertension", "lo", "pacc", []],
    ["esophagectomy", "e-sof-ah-JEK-to-me", "Surgical removal of all or part of the esophagus.", "removal of the oesophagus", "tx", "surg", []],
    ["esophagitis", "e-sof-ah-JI-tis", "Inflammation of the esophagus.", "inflammation of the oesophagus", "up", "pup", []],
    ["esophagogastroduodenoscopy", "e-sof-ah-go-gas-tro-du-od-eh-NOS-ko-pe", "Endoscopic examination of the esophagus, stomach and duodenum.", "upper endoscopy (oesophagus, stomach and duodenum)", "tx", "endo", ["EGD"]],
    ["esophagoscopy", "e-sof-ah-GOS-ko-pe", "Endoscopic examination of the esophagus.", "viewing the oesophagus with a scope", "tx", "endo", []],
    ["esophagostenosis", "e-sof-ah-go-steh-NO-sis", "Narrowing of the esophagus (esophag/o + -stenosis).", "narrowing of the oesophagus", "lx", "wp", []],
    ["esophagus", "e-SOF-ah-gus", "Muscular tube that carries food from the pharynx to the stomach.", "muscular food pipe from pharynx to stomach", "mo", "upper", []],
    ["familial adenomatous polyposis", "fah-MIL-e-al ad-eh-NO-mah-tus", "Inherited condition with hundreds of colon polyps that become cancer.", "inherited condition with hundreds of colon polyps", "lo", "plo", ["FAP"]],
    ["fecal incontinence", "FE-kal in-KON-tih-nens", "Inability to control bowel movements.", "faecal incontinence", "lo", "sx", []],
    ["fecal occult blood test", "FE-kal o-KULT", "Chemical test of feces for hidden blood; stool guaiac or Hemoccult.", "faecal occult blood test", "tx", "lab", ["FOBT"]],
    ["feces", "FE-seze", "Solid waste material formed in the large intestine; stool.", "faeces", "bw", "phys", []],
    ["fistula", "FIS-tu-lah", "Abnormal passage between two organs or from an organ to the skin.", "abnormal passage", "lo", "plo", []],
    ["flatulence", "FLAT-u-lens", "Excess gas in the stomach or intestines.", "excess gas in the stomach or bowel", "up", "sx", []],
    ["flatus", "FLA-tus", "Gas passed through the anus.", "gas passed from the bowel", "up", "sx", []],
    ["frenulum", "FREN-u-lum", "Fold of mucous membrane that attaches the tongue to the floor of the mouth.", "fold under the tongue", "mo", "oral", []],
    ["fundus", "FUN-dus", "Rounded upper part of the stomach above the opening of the esophagus.", "domed upper part of the stomach", "mo", "upper", []],
    ["gallbladder", "GAWL-blad-er", "Sac under the liver that stores and concentrates bile.", "sac under the liver that stores bile", "bw", "acc", ["GB"]],
    ["gastralgia", "gas-TRAL-je-ah", "Stomach pain (gastr/o + -algia); also called gastrodynia.", "pain in the stomach", "lx", "wp", []],
    ["gastrectomy", "gas-TREK-to-me", "Surgical removal of all or part of the stomach.", "removal of the stomach", "tx", "surg", []],
    ["gastric banding", "GAS-trik BAN-ding", "Bariatric surgery that places an adjustable band around the top of the stomach; Lap-Band.", "adjustable band around the upper stomach", "tx", "surg", ["LAGB"]],
    ["gastric bypass", "GAS-trik BI-pas", "Bariatric surgery that joins a small stomach pouch to the jejunum.", "small stomach pouch joined to the jejunum", "tx", "surg", ["RGB"]],
    ["gastric carcinoma", "GAS-trik kar-sih-NO-mah", "Malignant tumor of the stomach.", "stomach cancer", "up", "pup", []],
    ["gastric juice", "GAS-trik", "Secretion of the stomach glands containing hydrochloric acid and pepsin.", "acid, pepsin and mucus secreted by the stomach", "mo", "phys", []],
    ["gastric ulcer", "GAS-trik UL-ser", "Peptic ulcer in the stomach.", "stomach ulcer", "up", "pup", []],
    ["gastritis", "gas-TRI-tis", "Inflammation of the stomach.", "stomach inflammation", "up", "pup", []],
    ["gastroduodenitis", "gas-tro-du-od-eh-NI-tis", "Inflammation of the stomach and duodenum.", "inflammation of the stomach and duodenum", "lx", "wp", []],
    ["gastroduodenostomy", "gas-tro-du-od-eh-NOS-to-me", "Surgical connection between the stomach and duodenum; Billroth I.", "joining the stomach to the duodenum", "tx", "surg", []],
    ["gastrodynia", "gas-tro-DIN-e-ah", "Stomach pain (gastr/o + -dynia).", "stomach ache (synonym)", "lx", "wp", []],
    ["gastroenteritis", "gas-tro-en-ter-I-tis", "Inflammation of the stomach and intestine, often from infection.", "inflammation of the stomach and intestines", "up", "pup", []],
    ["gastroenterologist", "gas-tro-en-ter-OL-o-jist", "Physician who specializes in diseases of the digestive tract.", "digestive specialist", "lx", "spec", []],
    ["gastroenterology", "gas-tro-en-ter-OL-o-je", "Study and treatment of the stomach, intestines and digestive system.", "study of the digestive system", "lx", "spec", []],
    ["gastroenterostomy", "gas-tro-en-ter-OS-to-me", "Surgical connection between the stomach and small intestine.", "joining the stomach to the intestine", "tx", "surg", []],
    ["gastroesophageal", "gas-tro-e-sof-ah-JE-al", "Pertaining to the stomach and esophagus.", "relating to the stomach and oesophagus", "lx", "wp", []],
    ["gastroesophageal reflux disease", "gas-tro-e-sof-ah-JE-al RE-fluks", "Chronic backflow of stomach acid into the esophagus.", "acid reflux disease", "up", "pup", ["GERD"]],
    ["gastrojejunostomy", "gas-tro-jeh-ju-NOS-to-me", "Surgical connection between the stomach and jejunum; Billroth II.", "joining the stomach to the jejunum", "tx", "surg", []],
    ["gastroparesis", "gas-tro-pah-RE-sis", "Partial paralysis of the stomach that delays emptying (gastr/o + -paresis).", "partial paralysis of the stomach", "lx", "wp", []],
    ["gastroscopy", "gas-TROS-ko-pe", "Endoscopic examination of the stomach.", "looking inside the stomach (gastroscopy)", "tx", "endo", []],
    ["gastrostomy", "gas-TROS-to-me", "Opening into the stomach through the abdominal wall, used for feeding.", "opening into the stomach through the abdominal wall", "tx", "surg", []],
    ["gavage", "gah-VAHZH", "Feeding liquid food into the stomach through a tube.", "tube feeding", "tx", "care", []],
    ["gingiva", "JIN-jih-vah", "The gum: tissue that surrounds the teeth; plural gingivae.", "gums", "mo", "oral", []],
    ["gingivectomy", "jin-jih-VEK-to-me", "Surgical removal of gum tissue.", "removal of part of the gums", "tx", "surg", []],
    ["gingivitis", "jin-jih-VI-tis", "Inflammation of the gums.", "gum inflammation", "up", "pup", []],
    ["glossectomy", "glos-EK-to-me", "Surgical removal of the tongue.", "removal of the tongue", "tx", "surg", []],
    ["glossitis", "glos-I-tis", "Inflammation of the tongue.", "inflammation of the tongue", "up", "pup", []],
    ["glossoplegia", "glos-o-PLE-je-ah", "Paralysis of the tongue (gloss/o + -plegia).", "paralysis of the tongue", "lx", "wp", []],
    ["glossorrhaphy", "glos-OR-ah-fe", "Suture of the tongue (gloss/o + -rrhaphy).", "suture of the tongue", "lx", "wp", []],
    ["glycogen", "GLI-ko-jen", "Storage form of glucose, kept mainly in the liver.", "stored form of glucose", "bw", "phys", []],
    ["greater omentum", "o-MEN-tum", "Apron-like fold of peritoneum that hangs from the stomach over the intestines.", "fatty apron hanging from the stomach", "bw", "bowel", []],
    ["H2 blocker", "", "Drug that blocks histamine H2 receptors and lowers acid secretion; H2 antagonist.", "H2 receptor blocker", "tx", "drug", ["H2"]],
    ["halitosis", "hal-ih-TO-sis", "Bad breath.", "bad breath", "up", "sx", []],
    ["hard palate", "hard PAL-at", "Bony front part of the roof of the mouth.", "bony front part of the roof of the mouth", "mo", "oral", []],
    ["heartburn", "HART-burn", "Burning feeling in the chest when stomach acid flows back into the esophagus.", "burning behind the breastbone from acid reflux", "up", "sx", []],
    ["Helicobacter pylori", "HEL-ih-ko-bak-ter pi-LOR-i", "Bacterium that infects the stomach lining and causes most peptic ulcers.", "bacterium behind most peptic ulcers", "up", "pup", ["H. pylori"]],
    ["hematemesis", "he-mah-TEM-eh-sis", "Vomiting of blood.", "vomiting blood", "up", "sx", []],
    ["hematochezia", "he-mat-o-KE-ze-ah", "Bright red blood in the stool.", "bright red blood in the stool", "lo", "sx", []],
    ["hemiglossal", "hem-e-GLOS-al", "Pertaining to one half of the tongue (hemi- + gloss/o + -al).", "relating to half of the tongue", "lx", "wp", []],
    ["hemorrhoidectomy", "hem-o-royd-EK-to-me", "Surgical removal of hemorrhoids.", "removal of haemorrhoids", "tx", "surg", []],
    ["hemorrhoids", "HEM-o-roydz", "Varicose veins in the rectum and anus.", "varicose veins of the rectum and anus", "lo", "plo", []],
    ["hepatic duct", "heh-PAT-ik", "Duct that carries bile out of the liver.", "duct carrying bile out of the liver", "bw", "acc", []],
    ["hepatic flexure", "heh-PAT-ik FLEK-sher", "Right bend of the colon near the liver.", "right bend of the colon near the liver", "bw", "bowel", []],
    ["hepatic lobectomy", "lo-BEK-to-me", "Surgical removal of a lobe of the liver.", "removal of a liver lobe", "tx", "surg", []],
    ["hepatic portal system", "heh-PAT-ik POR-tal", "Veins that carry blood from the digestive organs to the liver.", "veins carrying gut blood to the liver", "bw", "acc", []],
    ["hepatitis", "hep-ah-TI-tis", "Inflammation of the liver, usually caused by a virus.", "inflammation of the liver", "lo", "pacc", ["HAV", "HBV", "HCV", "HDV", "HEV"]],
    ["hepatocyte", "HEP-ah-to-site", "A liver cell (hepat/o + -cyte).", "liver cell", "lx", "wp", []],
    ["hepatogenic", "hep-ah-to-JEN-ik", "Originating in the liver (hepat/o + -genic).", "originating in the liver", "lx", "wp", []],
    ["hepatology", "hep-ah-TOL-o-je", "Study and treatment of the liver.", "study of the liver", "lx", "spec", []],
    ["hepatoma", "hep-ah-TO-mah", "Tumor of the liver.", "liver tumour", "lo", "pacc", []],
    ["hepatomegaly", "hep-ah-to-MEG-ah-le", "Enlargement of the liver (hepat/o + -megaly).", "enlarged liver", "lx", "wp", []],
    ["hepatopathy", "hep-ah-TOP-ah-the", "Any disease of the liver (hepat/o + -pathy).", "liver disease", "lx", "wp", []],
    ["hernia", "HER-ne-ah", "Protrusion of an organ through the wall that normally holds it.", "rupture", "lo", "plo", []],
    ["herniorrhaphy", "her-ne-OR-ah-fe", "Surgical repair of a hernia with sutures; hernioplasty.", "hernia repair", "tx", "surg", []],
    ["herpes labialis", "HER-peze la-be-AL-is", "Cold sore or fever blister on the lip caused by herpes simplex virus.", "cold sore", "up", "pup", ["HSV-1"]],
    ["hiatal hernia", "hi-A-tal HER-ne-ah", "Protrusion of the stomach upward through the esophageal hiatus of the diaphragm.", "stomach pushing up through the diaphragm opening", "up", "pup", []],
    ["hydrochloric acid", "hi-dro-KLOR-ik", "Strong acid secreted by the stomach that activates pepsin.", "strong acid of the stomach; HCl", "mo", "phys", ["HCl"]],
    ["hyperbilirubinemia", "hi-per-bil-ih-ru-bih-NE-me-ah", "Excess bilirubin in the blood.", "raised bilirubin in the blood", "lo", "pacc", []],
    ["hyperemesis", "hi-per-EM-eh-sis", "Excessive vomiting.", "excessive vomiting", "up", "sx", []],
    ["hypogastric", "hi-po-GAS-trik", "Below the stomach; the lower middle abdominal region.", "lower middle region of the abdomen", "bw", "bowel", []],
    ["hypoglossal", "hi-po-GLOS-al", "Under the tongue (hypo- + gloss/o + -al).", "below the tongue (Greek prefix)", "lx", "wp", []],
    ["icterus", "IK-ter-us", "Jaundice.", "yellow discoloration (Greek-derived)", "lo", "pacc", []],
    ["ileitis", "il-e-I-tis", "Inflammation of the ileum (ile/o + -itis).", "inflammation of the ileum", "lx", "wp", []],
    ["ileocecal", "il-e-o-SE-kal", "Pertaining to the ileum and cecum.", "relating to the ileum and caecum", "lx", "wp", []],
    ["ileocecal valve", "il-e-o-SE-kal", "Sphincter between the ileum and the cecum.", "ileocaecal valve", "bw", "bowel", []],
    ["ileostomy", "il-e-OS-to-me", "Opening of the ileum through the abdominal wall.", "opening of the ileum through the abdominal wall", "tx", "surg", []],
    ["ileum", "IL-e-um", "Last part of the small intestine; joins the cecum.", "last part of the small intestine", "bw", "bowel", []],
    ["ileus", "IL-e-us", "Intestinal obstruction, often from loss of peristalsis.", "halted movement of the bowel", "lo", "plo", []],
    ["incisor", "in-SI-zor", "Chisel-shaped front tooth used for cutting food.", "front cutting tooth", "mo", "oral", []],
    ["inflammatory bowel disease", "in-FLAM-ah-tor-e BOW-el", "Chronic intestinal inflammation: Crohn disease and ulcerative colitis.", "Crohn disease and ulcerative colitis together", "lo", "plo", ["IBD"]],
    ["ingestion", "in-JES-chun", "Taking food or liquid into the body through the mouth.", "taking food into the mouth", "mo", "phys", []],
    ["inguinal hernia", "ING-gwih-nal", "Hernia of the intestine into the groin.", "bulge through the groin wall", "lo", "plo", []],
    ["insulin", "IN-suh-lin", "Pancreatic hormone that lowers blood sugar.", "pancreatic hormone that lowers blood sugar", "bw", "acc", []],
    ["intestinal obstruction", "in-TES-tih-nal ob-STRUK-shun", "Blockage that stops intestinal contents from moving forward.", "bowel obstruction", "lo", "plo", []],
    ["intestine", "in-TES-tin", "The bowel: the part of the digestive tract from the stomach to the anus.", "the gut from pylorus to anus", "bw", "bowel", []],
    ["intrinsic factor", "in-TRIN-sik", "Substance made by the stomach that is needed to absorb vitamin B12.", "stomach protein needed to absorb vitamin B12", "mo", "phys", []],
    ["intussusception", "in-tuh-suh-SEP-shun", "Telescoping of one part of the intestine into the next part.", "telescoping of the bowel into itself", "lo", "plo", []],
    ["irritable bowel syndrome", "IR-ih-tah-bl BOW-el", "Functional disorder with abdominal pain, bloating and diarrhea or constipation, without visible damage; spastic colon.", "functional gut disorder with pain and altered stools", "lo", "plo", ["IBS"]],
    ["jaundice", "JAWN-dis", "Yellow color of the skin and eyes from excess bilirubin; also called icterus.", "yellowing of the skin and eyes", "lo", "pacc", []],
    ["jejunitis", "jeh-ju-NI-tis", "Inflammation of the jejunum (jejun/o + -itis).", "inflammation of the jejunum", "lx", "wp", []],
    ["jejunostomy", "jeh-ju-NOS-to-me", "Opening of the jejunum through the abdominal wall, often for feeding.", "opening of the jejunum through the abdominal wall", "tx", "surg", []],
    ["jejunum", "jeh-JU-num", "Middle part of the small intestine; Latin for empty.", "middle part of the small intestine", "bw", "bowel", []],
    ["labial", "LA-be-al", "Pertaining to the lips.", "relating to the lips", "mo", "oral", []],
    ["labiodental", "la-be-o-DEN-tal", "Pertaining to the lip and teeth (labi/o + dent/o + -al).", "relating to the lips and teeth", "lx", "wp", []],
    ["lacteal", "LAK-te-al", "Lymphatic capillary in each villus that absorbs digested fats.", "lymph capillary in a villus", "bw", "bowel", []],
    ["lactose intolerance", "LAK-tose in-TOL-er-ans", "Inability to digest milk sugar from lack of the enzyme lactase.", "inability to digest milk sugar", "lo", "plo", []],
    ["laparoscopic cholecystectomy", "lap-ah-ro-SKOP-ik", "Removal of the gallbladder through small incisions with a laparoscope.", "keyhole removal of the gallbladder", "tx", "surg", []],
    ["laparoscopy", "lap-ah-ROS-ko-pe", "Examination of the abdominal cavity with an endoscope through a small incision; peritoneoscopy.", "looking inside the abdomen (laparoscopy)", "tx", "endo", []],
    ["laparotomy", "lap-ah-ROT-o-me", "Surgical incision into the abdomen.", "opening the abdomen", "tx", "surg", []],
    ["large intestine", "in-TES-tin", "Wider tube that absorbs water and forms feces: cecum, colon, rectum and anus.", "caecum, colon and rectum", "bw", "bowel", []],
    ["laryngopharynx", "lah-ring-go-FAR-inks", "Lower part of the pharynx above the larynx and esophagus.", "lowest part of the throat, above the larynx", "mo", "upper", []],
    ["lavage", "lah-VAHZH", "Washing out of the stomach through a tube.", "washing out the stomach", "tx", "care", []],
    ["laxative", "LAK-sah-tiv", "Drug that eases the passage of feces.", "drug that eases defecation", "tx", "drug", []],
    ["leukoplakia", "lu-ko-PLA-ke-ah", "White patches on the mucous membranes of the mouth; may be precancerous.", "white patches in the mouth", "up", "pup", []],
    ["lipase", "LI-pase", "Pancreatic enzyme that digests fats.", "fat-digesting enzyme", "bw", "phys", []],
    ["lithotripsy", "LITH-o-trip-se", "Crushing of a stone, for example with shock waves.", "stone crushing", "tx", "surg", ["ESWL"]],
    ["liver", "LIV-er", "Large organ in the right upper abdomen that makes bile and processes nutrients.", "largest gland; makes bile and stores glycogen", "bw", "acc", []],
    ["liver function tests", "LIV-er FUNK-shun", "Blood tests for liver enzymes and bilirubin.", "blood tests of ALT, AST and bilirubin", "tx", "lab", ["LFT", "ALT", "AST"]],
    ["liver transplant", "trans-PLANT", "Replacement of a diseased liver with a donor liver.", "replacing a failed liver with a donor organ", "tx", "surg", []],
    ["lower esophageal sphincter", "e-sof-ah-JE-al SFINK-ter", "Muscle ring between the esophagus and stomach that prevents backflow; also called cardiac sphincter.", "lower oesophageal sphincter", "mo", "upper", ["LES"]],
    ["malocclusion", "mal-o-KLU-zhun", "Abnormal contact between the upper and lower teeth.", "upper and lower teeth not meeting properly", "up", "pup", []],
    ["manometry", "mah-NOM-eh-tre", "Measurement of pressure, as in the esophagus or anorectum.", "pressure measurement", "tx", "lab", []],
    ["mastication", "mas-tih-KA-shun", "Chewing; grinding food with the teeth and mixing it with saliva.", "chewing", "mo", "phys", []],
    ["megacolon", "meg-ah-KO-lon", "Abnormally enlarged colon.", "abnormally enlarged colon", "lo", "plo", []],
    ["melena", "meh-LE-nah", "Black tarry stool containing digested blood.", "black, tarry stool", "lo", "sx", []],
    ["mesentery", "MES-en-ter-e", "Fold of peritoneum that holds the small intestine to the back wall of the abdomen.", "fold attaching the gut to the abdominal wall", "bw", "bowel", []],
    ["mesocolon", "mes-o-KO-lon", "Fold of peritoneum that attaches the colon to the back wall of the abdomen.", "fold attaching the colon to the back wall", "bw", "bowel", []],
    ["micrognathia", "mi-kro-NATH-e-ah", "Abnormally small jaw (micr/o + gnath/o + -ia).", "small jaw", "lx", "wp", []],
    ["molar", "MO-lar", "Large back tooth that grinds food; the third molar is the wisdom tooth.", "large back grinding tooth", "mo", "oral", []],
    ["mucosa", "mu-KO-sah", "Mucous membrane that lines the digestive tract.", "mucus", "mo", "sci", []],
    ["Murphy sign", "MUR-fe", "Pain and a stop in breathing when the gallbladder area is pressed during a deep breath; a sign of cholecystitis.", "breath held in pain when the gallbladder is pressed", "lo", "pacc", []],
    ["myenteric", "mi-en-TER-ik", "Pertaining to the muscle layer of the intestine (my/o + enter/o + -ic).", "relating to the muscle layer of the gut", "lx", "wp", []],
    ["nasogastric tube", "na-zo-GAS-trik", "Tube passed through the nose into the stomach for feeding or suction.", "tube from the nose into the stomach", "tx", "care", ["NG"]],
    ["nasopharynx", "na-zo-FAR-inks", "Upper part of the pharynx behind the nose.", "part of the throat behind the nose", "mo", "upper", []],
    ["nausea", "NAW-ze-ah", "Unpleasant feeling that comes before vomiting; Greek for seasickness.", "queasy feeling before vomiting", "up", "sx", ["N&V"]],
    ["nothing by mouth", "", "Order that the patient take no food or drink by mouth.", "no food or drink; NPO", "tx", "care", ["NPO"]],
    ["obesity", "o-BE-sih-te", "Excess body fat; a body mass index of 30 or more.", "excess body fat; BMI 30 or more", "up", "pup", ["BMI"]],
    ["obstipation", "ob-stih-PA-shun", "Extreme constipation, often caused by an obstruction.", "severe constipation", "lo", "sx", []],
    ["occult blood", "o-KULT", "Blood in the stool that can be seen only with a chemical test.", "hidden blood found only by testing", "lo", "sx", []],
    ["odynophagia", "o-din-o-FA-je-ah", "Painful swallowing.", "painful swallowing", "up", "sx", []],
    ["oral cavity", "OR-al KAV-ih-te", "The mouth: lips, cheeks, palate and tongue.", "the mouth and its contents", "mo", "oral", []],
    ["orolingual", "or-o-LING-gwal", "Pertaining to the mouth and tongue (or/o + lingu/o + -al).", "relating to the mouth and tongue", "lx", "wp", []],
    ["oropharynx", "or-o-FAR-inks", "Part of the pharynx behind the mouth.", "part of the throat behind the mouth", "mo", "upper", []],
    ["orthodontics", "or-tho-DON-tiks", "Branch of dentistry that corrects the alignment of the teeth.", "straightening the teeth", "lx", "spec", []],
    ["orthodontist", "or-tho-DON-tist", "Dentist who straightens and aligns the teeth (orth/o + odont/o + -ist).", "dentist who straightens teeth", "lx", "spec", []],
    ["ostomy", "OS-to-me", "Surgically created opening of an organ through the abdominal wall.", "surgical opening onto the skin", "tx", "surg", []],
    ["ova and parasites", "O-vah", "Microscopic examination of feces for parasites and their eggs.", "stool test for parasites and eggs", "tx", "lab", ["O&P"]],
    ["palate", "PAL-at", "Roof of the mouth that separates the mouth from the nasal cavity.", "roof of the mouth", "mo", "oral", []],
    ["palatine", "PAL-ah-tine", "Pertaining to the palate.", "relating to the roof of the mouth", "mo", "oral", []],
    ["palatoplasty", "PAL-ah-to-plas-te", "Surgical repair of the palate, as for a cleft palate.", "repair of the palate", "tx", "surg", []],
    ["palatorrhaphy", "pal-ah-TOR-ah-fe", "Suture of the palate, as for a cleft palate (palat/o + -rrhaphy).", "suture of the palate", "lx", "wp", []],
    ["pancreas", "PAN-kre-as", "Gland behind the stomach that makes digestive enzymes and the hormone insulin.", "gland making digestive juice and insulin", "bw", "acc", []],
    ["pancreatic duct", "pan-kre-AT-ik", "Duct that carries pancreatic juice into the duodenum.", "duct carrying enzymes from the pancreas to the duodenum", "bw", "acc", []],
    ["pancreatic juice", "pan-kre-AT-ik", "Pancreatic secretion with bicarbonate and enzymes for fats, proteins and starch.", "enzymes and bicarbonate from the pancreas", "bw", "phys", []],
    ["pancreatitis", "pan-kre-ah-TI-tis", "Inflammation of the pancreas.", "inflammation of the pancreas", "lo", "pacc", []],
    ["pancreatolysis", "pan-kre-ah-TOL-ih-sis", "Destruction of pancreatic tissue (pancreat/o + -lysis).", "destruction of the pancreas", "lx", "wp", []],
    ["pancreatotropic", "pan-kre-ah-to-TROP-ik", "Acting on the pancreas (pancreat/o + -tropic).", "acting on the pancreas", "lx", "wp", []],
    ["papillae", "pah-PIL-e", "Small raised bumps on the tongue that hold the taste buds.", "small bumps on the tongue", "mo", "oral", []],
    ["paracentesis", "par-ah-sen-TE-sis", "Needle puncture of the abdomen to remove fluid; abdominocentesis.", "drawing fluid from the abdomen", "tx", "lab", []],
    ["parotid gland", "pah-ROT-id", "Largest salivary gland, in front of the ear.", "salivary gland in front of the ear", "mo", "oral", []],
    ["parotitis", "par-o-TI-tis", "Inflammation of the parotid gland, as in mumps.", "inflammation of the parotid gland", "up", "pup", []],
    ["pepsin", "PEP-sin", "Stomach enzyme that begins protein digestion.", "protein-digesting stomach enzyme", "mo", "phys", []],
    ["peptic ulcer", "PEP-tik UL-ser", "Sore in the lining of the esophagus, stomach or duodenum exposed to acid.", "sore in an acid-exposed lining", "up", "pup", ["PUD"]],
    ["percutaneous endoscopic gastrostomy", "per-ku-TA-ne-us", "Feeding tube placed into the stomach through the skin with endoscope guidance.", "feeding tube through the skin into the stomach", "tx", "care", ["PEG"]],
    ["percutaneous transhepatic cholangiography", "per-ku-TA-ne-us trans-heh-PAT-ik", "Contrast injected through the skin into a bile duct in the liver, then X-rays taken.", "bile-duct X-ray with a needle through the liver", "tx", "img", ["PTC"]],
    ["perianal", "per-e-A-nal", "Around the anus (peri- + an/o + -al).", "around the anus", "lx", "wp", []],
    ["periodontal", "per-e-o-DON-tal", "Around a tooth; refers to the gums and supporting tissues.", "around a tooth", "mo", "oral", []],
    ["periodontics", "per-e-o-DON-tiks", "Dental specialty that treats the tissues around the teeth (peri- + odont/o).", "dentistry of the gums and tooth supports", "lx", "spec", []],
    ["periodontitis", "per-e-o-don-TI-tis", "Inflammation of the tissues around the teeth that can cause tooth loss.", "inflammation of the tissues around a tooth", "up", "pup", []],
    ["peristalsis", "per-ih-STAL-sis", "Wavelike contractions of smooth muscle that move material through the digestive tract.", "wave-like muscle movement of the gut", "mo", "phys", []],
    ["peritoneum", "per-ih-to-NE-um", "Serous membrane that lines the abdominal cavity and covers its organs.", "membrane lining the abdomen and its organs", "bw", "bowel", []],
    ["peritonitis", "per-ih-to-NI-tis", "Inflammation of the peritoneum, often after a rupture.", "inflammation of the peritoneum", "lo", "plo", []],
    ["permanent teeth", "PER-mah-nent", "The 32 adult teeth that replace the deciduous teeth.", "the 32 adult teeth", "mo", "oral", []],
    ["pernicious anemia", "per-NISH-us ah-NE-me-ah", "Anemia from lack of intrinsic factor, so vitamin B12 is not absorbed.", "pernicious anaemia", "up", "pup", []],
    ["pharynx", "FAR-inks", "The throat; passage for both food and air.", "throat (pharynx)", "mo", "upper", []],
    ["pilonidal cyst", "pi-lo-NI-dal", "Cyst with hair at the base of the spine, near the cleft of the buttocks.", "hair-containing cyst above the buttocks", "lo", "plo", []],
    ["polyp", "POL-ip", "Growth that projects from a mucous membrane, often on a stalk.", "stalked growth from the mucosa", "lo", "plo", []],
    ["polypectomy", "pol-ih-PEK-to-me", "Removal of a polyp, often with a wire snare during colonoscopy.", "removal of a polyp", "tx", "surg", []],
    ["polyphagia", "pol-e-FA-je-ah", "Excessive eating.", "overeating", "up", "sx", []],
    ["polyposis", "pol-ih-PO-sis", "Presence of many polyps.", "many polyps", "lo", "plo", []],
    ["portal hypertension", "POR-tal hi-per-TEN-shun", "High pressure in the hepatic portal veins, usually from cirrhosis.", "high pressure in the liver’s inflow vein", "lo", "pacc", []],
    ["postprandial", "post-PRAN-de-al", "After a meal.", "after meals", "up", "sx", ["pp"]],
    ["premolar", "pre-MO-lar", "Tooth between the canine and molars; also called bicuspid.", "bicuspid grinding tooth in front of the molars", "mo", "oral", []],
    ["proctitis", "prok-TI-tis", "Inflammation of the rectum.", "inflammation of the rectum", "lo", "plo", []],
    ["proctology", "prok-TOL-o-je", "Study and treatment of disorders of the rectum and anus.", "branch of medicine for the rectum and anus", "lx", "spec", []],
    ["proctopexy", "PROK-to-pek-se", "Surgical fixation of the rectum (proct/o + -pexy).", "surgical fixation of the rectum", "lx", "wp", []],
    ["proctoptosis", "prok-top-TO-sis", "Prolapse or drooping of the rectum and anus (proct/o + -ptosis).", "rectal prolapse", "lx", "wp", []],
    ["proctoscopy", "prok-TOS-ko-pe", "Endoscopic examination of the rectum and anus.", "viewing the rectum with a scope", "tx", "endo", []],
    ["proctosigmoidoscopy", "prok-to-sig-moy-DOS-ko-pe", "Endoscopic examination of the rectum and sigmoid colon.", "viewing the rectum and sigmoid colon", "tx", "endo", []],
    ["prognathous", "PROG-na-thus", "Having a projecting jaw (pro- + gnath/o + -ous).", "having a forward-jutting jaw", "lx", "wp", []],
    ["protease", "PRO-te-ase", "Enzyme that digests proteins.", "protein-digesting enzyme", "bw", "phys", []],
    ["proton pump inhibitor", "PRO-ton", "Drug that blocks the acid pump of stomach cells, such as omeprazole.", "drug blocking the acid pump of stomach cells", "tx", "drug", ["PPI"]],
    ["pulp", "pulp", "Soft core of the tooth containing nerves and blood vessels.", "soft inner core of a tooth", "mo", "oral", []],
    ["pyloric sphincter", "pi-LOR-ik SFINK-ter", "Muscle ring that controls passage of food from the stomach into the duodenum.", "muscle ring at the stomach outlet", "mo", "upper", []],
    ["pyloric stenosis", "pi-LOR-ik steh-NO-sis", "Narrowing of the pylorus; in infants it causes projectile vomiting.", "thickened, narrowed stomach outlet in infants", "up", "pup", []],
    ["pyloroplasty", "pi-LOR-o-plas-te", "Surgical repair that widens the pylorus.", "surgical widening of the pylorus", "tx", "surg", []],
    ["pylorospasm", "pi-LOR-o-spazm", "Involuntary spasm of the pylorus (pylor/o + -spasm).", "spasm of the pylorus", "lx", "wp", []],
    ["pylorus", "pi-LOR-us", "Distal opening of the stomach into the duodenum; Greek for gatekeeper.", "stomach outlet to the duodenum", "mo", "upper", []],
    ["pyrosis", "pi-RO-sis", "Heartburn: burning pain behind the sternum from acid reflux.", "burning feeling behind the breastbone", "up", "sx", []],
    ["quadrant", "KWAH-drant", "One of four areas of the abdomen divided by lines through the navel.", "one quarter of the abdomen", "bw", "bowel", ["RUQ", "LUQ", "RLQ", "LLQ"]],
    ["rectocele", "REK-to-sele", "Hernia of the rectum into the vagina (rect/o + -cele).", "rectal wall bulging into the vagina", "lx", "wp", []],
    ["rectum", "REK-tum", "Last part of the large intestine that stores feces; Latin for straight.", "last part of the large intestine", "bw", "bowel", []],
    ["reflux", "RE-fluks", "Backward flow.", "backward flow", "up", "pup", []],
    ["regurgitation", "re-gur-jih-TA-shun", "Backflow of stomach contents into the mouth.", "stomach contents returning to the mouth", "up", "sx", []],
    ["rugae", "RU-je", "Large folds in the lining of the stomach.", "folds of the stomach lining", "mo", "upper", []],
    ["saliva", "sah-LI-vah", "Fluid secreted into the mouth that moistens food and starts starch digestion.", "watery secretion of the mouth glands", "mo", "oral", []],
    ["salivary gland", "SAL-ih-var-e", "Gland that secretes saliva; there are three pairs.", "gland producing spit", "mo", "oral", []],
    ["sialadenitis", "si-al-ad-eh-NI-tis", "Inflammation of a salivary gland.", "inflammation of a salivary gland", "up", "pup", []],
    ["sialogram", "si-AL-o-gram", "X-ray image of the salivary glands and ducts (sial/o + -gram).", "X-ray image of the salivary glands", "lx", "wp", []],
    ["sialography", "si-ah-LOG-rah-fe", "X-ray imaging of the salivary glands and ducts.", "X-ray imaging of the salivary glands", "tx", "img", []],
    ["sialolith", "si-AL-o-lith", "A stone in a salivary gland or duct (sial/o + lith).", "salivary stone", "lx", "wp", []],
    ["sialorrhea", "si-ah-lo-RE-ah", "Excess flow of saliva (sial/o + -rrhea).", "excess saliva", "lx", "wp", []],
    ["sigmoid colon", "SIG-moyd KO-lon", "S-shaped last part of the colon that leads to the rectum.", "S-shaped last part of the large bowel", "bw", "bowel", []],
    ["sigmoidoscopy", "sig-moy-DOS-ko-pe", "Endoscopic examination of the sigmoid colon.", "viewing the sigmoid colon with a scope", "tx", "endo", []],
    ["small intestine", "in-TES-tin", "Coiled tube where most digestion and absorption take place: duodenum, jejunum and ileum.", "duodenum, jejunum and ileum", "bw", "bowel", []],
    ["soft palate", "soft PAL-at", "Muscular back part of the roof of the mouth.", "muscular back part of the roof of the mouth", "mo", "oral", []],
    ["sphincter", "SFINK-ter", "A ring of muscle that closes an opening and controls one-way flow.", "ring-shaped muscle that closes an opening", "mo", "sci", []],
    ["sphincter of Oddi", "SFINK-ter of OD-e", "Muscle ring where the common bile duct and pancreatic duct open into the duodenum.", "muscle ring at the bile-duct opening in the duodenum", "bw", "acc", []],
    ["splenic flexure", "SPLEN-ik FLEK-sher", "Left bend of the colon near the spleen.", "left bend of the colon near the spleen", "bw", "bowel", []],
    ["splenomegaly", "sple-no-MEG-ah-le", "Enlargement of the spleen.", "enlarged spleen", "lo", "pacc", []],
    ["steatorrhea", "ste-ah-to-RE-ah", "Excess fat in the feces.", "fatty stools", "lo", "sx", []],
    ["stoma", "STO-mah", "The opening of an ostomy on the skin; Greek for mouth.", "surgical opening on the skin", "tx", "surg", []],
    ["stomach", "STUM-ak", "J-shaped organ that stores food and mixes it with gastric juice.", "J-shaped sac between the food pipe and duodenum", "mo", "upper", []],
    ["stomatitis", "sto-mah-TI-tis", "Inflammation of the lining of the mouth.", "inflammation of the mouth lining", "up", "pup", []],
    ["stomatopathy", "sto-mah-TOP-ah-the", "Any disease of the mouth (stomat/o + -pathy).", "mouth disease", "lx", "wp", []],
    ["stomatoplasty", "STO-mah-to-plas-te", "Plastic repair of the mouth (stomat/o + -plasty).", "surgical repair of the mouth", "lx", "wp", []],
    ["stool culture", "stool KUL-chur", "Test of feces for disease-causing bacteria.", "growing bacteria from a faeces sample", "tx", "lab", []],
    ["stool softener", "stool SOF-en-er", "Drug that softens hard stool.", "drug that makes stools softer", "tx", "drug", []],
    ["strangulated hernia", "STRANG-gu-la-ted", "Hernia whose blood supply is cut off.", "hernia with its blood supply cut off", "lo", "plo", []],
    ["sublingual", "sub-LING-gwal", "Under the tongue (sub- + lingu/o + -al).", "beneath the tongue (Latin prefix)", "lx", "wp", []],
    ["sublingual gland", "sub-LING-gwal", "Salivary gland under the tongue.", "salivary gland under the tongue", "mo", "oral", []],
    ["submandibular gland", "sub-man-DIB-u-lar", "Salivary gland under the lower jaw.", "salivary gland under the jaw", "mo", "oral", []],
    ["tenesmus", "teh-NEZ-mus", "Constant painful urge to empty the bowel.", "constant urge to empty the bowel", "lo", "sx", []],
    ["thrush", "thrush", "Fungal infection of the mouth caused by Candida.", "fungal white patches in the mouth", "up", "pup", []],
    ["tongue", "tung", "Muscular organ of taste that helps chewing, swallowing and speech.", "muscular organ of taste and speech", "mo", "oral", []],
    ["total parenteral nutrition", "pah-REN-ter-al nu-TRISH-un", "Complete nutrition given into a vein, bypassing the digestive tract; hyperalimentation.", "complete feeding through a vein", "tx", "care", ["TPN"]],
    ["transverse colon", "trans-VERS KO-lon", "Part of the colon that crosses the abdomen from right to left.", "part of the large bowel crossing the upper abdomen", "bw", "bowel", []],
    ["ulcerative colitis", "UL-ser-ah-tiv ko-LI-tis", "Chronic continuous inflammation with ulcers of the colon and rectum.", "chronic ulcerating inflammation of the colon", "lo", "plo", ["UC"]],
    ["umbilical", "um-BIL-ih-kal", "Pertaining to the navel; the central abdominal region.", "relating to the navel", "bw", "bowel", []],
    ["umbilical hernia", "um-BIL-ih-kal", "Hernia of the intestine at the navel.", "bulge at the navel", "lo", "plo", []],
    ["upper GI series", "UP-er", "X-ray study of the esophagus, stomach and duodenum with barium.", "barium swallow X-ray", "tx", "img", ["UGI"]],
    ["uvula", "U-vu-lah", "Small fleshy mass hanging from the soft palate; Latin for little grape.", "small flap hanging from the back of the palate", "mo", "oral", []],
    ["uvulectomy", "u-vu-LEK-to-me", "Surgical removal of the uvula (uvul/o + -ectomy).", "removal of the uvula", "lx", "wp", []],
    ["vagotomy", "va-GOT-o-me", "Cutting of branches of the vagus nerve to reduce stomach acid.", "cutting the vagus nerve", "tx", "surg", []],
    ["villi", "VIL-i", "Tiny fingerlike projections of the small intestine lining that absorb nutrients; singular villus.", "finger-like projections lining the small bowel", "bw", "bowel", []],
    ["Vincent disease", "VIN-sent", "Severe infection of the gums with ulcers and bleeding; trench mouth.", "ulcerative gum infection (trench mouth)", "up", "pup", []],
    ["virtual colonoscopy", "VER-chu-al", "CT images of the colon combined into a three-dimensional view.", "CT imaging of the colon", "tx", "img", []],
    ["volvulus", "VOL-vu-lus", "Twisting of the intestine on itself.", "twisting of the bowel", "lo", "plo", []],
    ["xerostomia", "ze-ro-STO-me-ah", "Dry mouth from lack of saliva.", "dry mouth", "up", "sx", []]
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/* گوارا — واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها، تجزیه‌گر واژه و مولد سؤال‌ها
 * واژه‌ها از data-terms.js (ساخته‌شده با tools/build_data.py از فصل‌های Digestive System) می‌آیند؛
 * ریشه‌ها و اختصارها از همان فصل‌ها (جدول‌های ریشه دهان، لوله گوارش و اندام‌های کمکی، پسوندها و فهرست‌های اختصار) گردآوری و دستی پالایش شده‌اند.
 * دنیاها: lx زبان گوارش (همه واژه‌ها) • mo دهان تا معده • bw روده‌ها و اندام‌های کمکی •
 * up بیماری‌های دهان، مری و معده • lo بیماری‌های روده، کبد و صفرا • tx تشخیص، جراحی و دارو • * عمومی */
(function (root) {
  const EA = root.EA = root.EA || {};

  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const ROOTS_RAW = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not, absence of', "without, lacking", '*'],
    ['anti-', ['anti'], 'against', "against", 'tx'],
    ['bi-', ['bi'], 'two', "two", 'mo'],
    ['brady-', ['brady'], 'slow', "slow", 'up'],
    ['circum-', ['circum'], 'around', "around", 'mo'],
    ['dia-', ['dia'], 'through, complete', "through, complete", 'lo'],
    ['dys-', ['dys'], 'bad, painful, difficult', "bad, painful, difficult", 'up'],
    ['e-', ['e'], 'out, without', "out, without", 'mo'],
    ['endo-', ['endo'], 'within', "within", 'tx'],
    ['epi-', ['epi'], 'above, upon', "upon, above", 'mo'],
    ['extra-', ['extra'], 'outside', "outside", 'tx'],
    ['hemi-', ['hemi'], 'half', "half", 'lx'],
    ['hyper-', ['hyper'], 'above normal, excessive', "excessive", '*'],
    ['hypo-', ['hypo'], 'below, under', "below, less than normal", '*'],
    ['intra-', ['intra'], 'within', "within", 'tx'],
    ['mal-', ['mal'], 'bad, poor', "bad, abnormal", 'up'],
    ['meso-', ['meso', 'mes'], 'middle', "in the middle", 'bw'],
    ['mega-', ['mega'], 'large, enlarged', "large", 'lo'],
    ['micro-', ['micro', 'micr'], 'small', "small", 'lx'],
    ['para-', ['para'], 'beside, near', "beside", 'tx'],
    ['per-', ['per'], 'through', "through", 'tx'],
    ['peri-', ['peri'], 'around', "around", 'mo'],
    ['poly-', ['poly'], 'many, much', "many, much", 'up'],
    ['post-', ['post'], 'after', "after", 'up'],
    ['pre-', ['pre'], 'before', "before", 'mo'],
    ['pro-', ['pro'], 'before, forward', "before, in front", 'lx'],
    ['re-', ['re'], 'back, again', "back, again", 'up'],
    ['retro-', ['retro'], 'backward', "backward", 'tx'],
    ['sub-', ['sub'], 'under, below', "below", 'mo'],
    ['trans-', ['trans'], 'across, through', "through", 'tx'],
    // ریشه‌های دهان
    ['bucc/o', ['bucc'], 'cheek', "cheek", 'mo'],
    ['cheil/o', ['cheil'], 'lip', "lip", 'mo'],
    ['dent/o, dent/i', ['dent'], 'tooth, teeth', "tooth", 'mo'],
    ['odont/o', ['odont'], 'tooth, teeth', "tooth", 'mo'],
    ['gingiv/o', ['gingiv'], 'gum', "gums", 'mo'],
    ['gloss/o', ['gloss'], 'tongue', "tongue", 'mo'],
    ['lingu/o', ['lingu'], 'tongue', "tongue", 'mo'],
    ['gnath/o', ['gnath'], 'jaw', "jaw", 'mo'],
    ['labi/o', ['labi'], 'lip', "lip", 'mo'],
    ['or/o', ['or'], 'mouth', "mouth", 'mo'],
    ['stomat/o, stom/o', ['stomat', 'stom'], 'mouth', "mouth", 'mo'],
    ['palat/o', ['palat'], 'palate', "palate", 'mo'],
    ['sial/o', ['sial'], 'saliva, salivary gland', "saliva, salivary gland", 'mo'],
    ['sialaden/o', ['sialaden'], 'salivary gland', "salivary gland", 'up'],
    ['uvul/o', ['uvul'], 'uvula', "uvula", 'mo'],
    ['orth/o', ['orth'], 'straight', "straight, upright", 'mo'],
    ['pharyng/o', ['pharyng', 'pharynx'], 'pharynx', "throat (pharynx)", 'mo'],
    ['laryng/o', ['laryng'], 'larynx', "voice box", 'mo'],
    ['xer/o', ['xer'], 'dry', "dry", 'up'],
    // ریشه‌های لوله گوارش
    ['esophag/o', ['esophag'], 'esophagus', "oesophagus", 'mo'],
    ['gastr/o', ['gastr'], 'stomach', "stomach", 'mo'],
    ['pylor/o', ['pylor'], 'pylorus', "pylorus", 'mo'],
    ['enter/o', ['enter'], 'intestine', "intestine", 'bw'],
    ['duoden/o', ['duoden'], 'duodenum', "duodenum", 'bw'],
    ['jejun/o', ['jejun'], 'jejunum', "jejunum", 'bw'],
    ['ile/o', ['ile'], 'ileum', "ileum", 'bw'],
    ['cec/o', ['cec'], 'cecum', "cecum", 'bw'],
    ['append/o, appendic/o', ['appendic', 'append'], 'appendix', "the appendix", 'bw'],
    ['col/o, colon/o', ['colon', 'col'], 'colon', "colon", 'bw'],
    ['sigmoid/o', ['sigmoid'], 'sigmoid colon', "sigmoid colon", 'bw'],
    ['rect/o', ['rect'], 'rectum', "rectum", 'bw'],
    ['proct/o', ['proct'], 'rectum and anus', "rectum and anus", 'bw'],
    ['an/o', ['an'], 'anus', "opening at the end of the digestive tract", 'bw'],
    ['abdomin/o', ['abdomin'], 'abdomen', "abdomen", 'bw'],
    ['lapar/o', ['lapar'], 'abdominal wall, abdomen', "abdominal wall", 'tx'],
    ['celi/o', ['celi'], 'abdomen, belly', "abdomen", 'lo'],
    ['peritone/o', ['peritone', 'periton'], 'peritoneum', "peritoneum", 'bw'],
    ['diverticul/o', ['diverticul'], 'diverticulum, pouch', "diverticulum, pouch", 'lo'],
    ['polyp/o', ['polyp'], 'polyp', "polyp", 'lo'],
    ['herni/o', ['herni'], 'hernia', "rupture", 'lo'],
    ['inguin/o', ['inguin'], 'groin', "groin", 'lo'],
    // ریشه‌های اندام‌های کمکی
    ['hepat/o', ['hepat'], 'liver', "liver", 'bw'],
    ['bili', ['bili'], 'bile', "bile", 'bw'],
    ['chol/e, chol/o', ['chole', 'chol'], 'bile, gall', "bile", 'bw'],
    ['cholecyst/o', ['cholecyst'], 'gallbladder', "gallbladder", 'bw'],
    ['cholangi/o', ['cholangi', 'cholang'], 'bile duct', "bile duct", 'bw'],
    ['choledoch/o', ['choledoch'], 'common bile duct', "common bile duct", 'bw'],
    ['pancreat/o', ['pancreat'], 'pancreas', "pancreas", 'bw'],
    ['splen/o', ['splen'], 'spleen', "spleen", 'lo'],
    ['cirrh/o', ['cirrh'], 'yellow, tawny', "yellow", 'lo'],
    ['lith/o', ['lith'], 'stone', "stone", 'lo'],
    ['cyst/o', ['cyst'], 'sac, bladder', "sac", 'bw'],
    ['lip/o, steat/o', ['steat', 'lip'], 'fat', "fat", 'bw'],
    ['amyl/o', ['amyl'], 'starch', "starch", 'bw'],
    ['glyc/o', ['glyc'], 'sugar', "sugar", 'bw'],
    // ریشه‌های عمومی
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', "blood", '*'],
    ['melan/o', ['melan'], 'black', "black", 'up'],
    ['orex/o', ['orex'], 'appetite', "appetite", 'up'],
    ['pyr/o', ['pyr'], 'fire, heat', "fire, burning", 'up'],
    ['aer/o', ['aer'], 'air', "Air", 'up'],
    ['odyn/o', ['odyn'], 'pain', "pain", 'up'],
    ['halit/o', ['halit'], 'breath', "breath", 'up'],
    ['man/o', ['man'], 'pressure', "pressure", 'tx'],
    ['my/o', ['my'], 'muscle', "muscle", '*'],
    ['nas/o', ['nas'], 'nose', "nose", 'tx'],
    ['cutane/o', ['cutane'], 'skin', "skin", 'tx'],
    ['vag/o', ['vag'], 'vagus nerve', "vagus nerve", 'tx'],
    ['bar/o', ['bar'], 'weight', "weight", 'tx'],
    ['carcin/o', ['carcin'], 'cancer', "cancer", 'lo'],
    // پسوندهای علامت و بیماری
    ['-algia, -dynia', ['algia', 'dynia'], 'pain', "pain", 'lx'],
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-osis', ['osis'], 'condition, abnormal condition', "(abnormal) condition", '*'],
    ['-iasis', ['iasis'], 'abnormal condition', "disease, condition", 'lo'],
    ['-emesis', ['emesis'], 'vomiting', "vomiting", 'up'],
    ['-emetic', ['emetic'], 'pertaining to vomiting', "relating to vomiting", 'tx'],
    ['-pepsia', ['pepsia'], 'digestion', "digestion", 'up'],
    ['-phagia', ['phagia'], 'eating, swallowing', "eating, swallowing", 'up'],
    ['-prandial', ['prandial'], 'meal', "meal", 'up'],
    ['-chezia', ['chezia'], 'defecation, elimination of wastes', "bowel movement", 'lo'],
    ['-rrhea', ['rrhea', 'rhea'], 'flow, discharge', "flow, discharge", 'lo'],
    ['-stasis', ['stasis'], 'stoppage', "standing still, stopping", 'lo'],
    ['-megaly', ['megaly'], 'enlargement', "enlargement", 'lo'],
    ['-oma', ['oma'], 'tumor', "tumour", 'lo'],
    ['-pathy', ['pathy'], 'disease', "disease", 'lx'],
    ['-plegia', ['plegia'], 'paralysis', "paralysis", 'lx'],
    ['-paresis', ['paresis'], 'partial paralysis', "partial paralysis", 'lx'],
    ['-ptosis', ['ptosis'], 'drooping, downward displacement', "drooping", 'lx'],
    ['-cele', ['cele'], 'hernia, protrusion', "hernia, protrusion", 'lx'],
    ['-spasm', ['spasm'], 'sudden involuntary contraction', "sudden contraction", 'lx'],
    ['-stenosis', ['stenosis'], 'narrowing', "narrowing", 'lx'],
    ['-ectasis', ['ectasis'], 'dilatation, expansion', "widening", 'lx'],
    ['-lysis', ['lysis'], 'destruction, breaking down', "breakdown, destruction", 'lx'],
    ['-genesis, -genic, -gen', ['genesis', 'genic', 'gen'], 'formation, originating in', "origin, produced by", 'lx'],
    ['-cyte', ['cyte'], 'cell', "cell", 'bw'],
    ['-ase', ['ase'], 'enzyme', "protein that speeds up a reaction", 'bw'],
    ['-ole', ['ole'], 'small', "small", 'bw'],
    ['-tropic', ['tropic'], 'acting on', "acting on", 'lx'],
    // پسوندهای تشخیص و جراحی
    ['-scope', ['scope'], 'instrument for examining', "viewing instrument", 'tx'],
    ['-scopy', ['scopy'], 'examination with a scope', "viewing with an instrument", 'tx'],
    ['-scopic', ['scopic'], 'pertaining to viewing with a scope', "relating to viewing with an instrument", 'tx'],
    ['-gram', ['gram'], 'record, image', "image, record", 'tx'],
    ['-graphy', ['graphy'], 'process of recording, imaging', "imaging method", 'tx'],
    ['-centesis', ['centesis'], 'puncture to remove fluid', "puncture to draw fluid", 'tx'],
    ['-ectomy', ['ectomy'], 'surgical removal', "removal", 'tx'],
    ['-tomy', ['tomy'], 'incision, cutting into', "incision", 'tx'],
    ['-stomy', ['stomy'], 'surgical opening', "making an opening", 'tx'],
    ['-plasty', ['plasty'], 'surgical repair', "repair", 'tx'],
    ['-rrhaphy', ['rrhaphy', 'rhaphy'], 'suture', "stitch", 'tx'],
    ['-pexy', ['pexy'], 'surgical fixation', "fixing in place", 'tx'],
    ['-tripsy', ['tripsy'], 'crushing', "crushing", 'tx'],
    ['-clysis', ['clysis'], 'irrigation, washing', "washing", 'tx'],
    ['-tome', ['tome'], 'cutting instrument', "cutting instrument", 'tx'],
    ['-metry', ['metry'], 'measurement', "measurement", 'tx'],
    ['-iatric', ['iatric'], 'pertaining to medical treatment', "relating to treatment", 'tx'],
    ['-logy, -logist', ['logist', 'logy'], 'study of, specialist in', "knowledge, specialist", '*'],
    // پسوندهای صفت و اسم
    ['-ic, -ac, -al, -eal, -ar, -ary, -ous', ['eal', 'ary', 'ic', 'ac', 'al', 'ar', 'ous'], 'pertaining to', "pertaining to", '*'],
    ['-ics', ['ics'], 'science, art of', "knowledge, art", '*'],
    ['-ulous', ['ulous'], 'pertaining to', "pertaining to", '*'],
    ['-emia', ['emia'], 'blood condition', "blood condition", '*'],
    ['-ia, -y', ['ia', 'y'], 'condition, process', "condition, process", '*'],
    ['-ion, -ation', ['ation', 'ion'], 'process', "process", '*'],
    ['-ist', ['ist'], 'specialist', "specialist", '*'],
    ['-ism', ['ism'], 'condition, state', "condition", '*'],
    ['-um, -us', ['um', 'us'], 'structure, thing', "structure, thing", '*']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها و نمادها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    // دهان تا معده
    ['GI', 'gastrointestinal', "of the stomach and intestines", 'mo'],
    ['LES', 'lower esophageal sphincter', "lower oesophageal sphincter", 'mo'],
    ['HCl', 'hydrochloric acid', "hydrochloric acid", 'mo'],
    ['TMJ', 'temporomandibular joint', "temporomandibular joint", 'mo'],
    ['po, PO', 'by mouth (per os)', "by mouth", 'mo'],
    // روده‌ها و اندام‌های کمکی
    ['GB', 'gallbladder', "gallbladder", 'bw'],
    ['CBD', 'common bile duct', "common bile duct", 'bw'],
    ['RUQ', 'right upper quadrant', "right upper quadrant", 'bw'],
    ['LUQ', 'left upper quadrant', "left upper quadrant", 'bw'],
    ['RLQ', 'right lower quadrant', "right lower quadrant", 'bw'],
    ['LLQ', 'left lower quadrant', "left lower quadrant", 'bw'],
    ['BM', 'bowel movement', "bowel movement", 'bw'],
    ['BS', 'bowel sounds', "bowel sounds", 'bw'],
    // دهان، مری و معده
    ['GERD', 'gastroesophageal reflux disease', "acid reflux disease", 'up'],
    ['GER', 'gastroesophageal reflux', "acid reflux into the oesophagus", 'up'],
    ['PUD', 'peptic ulcer disease', "peptic ulcer disease", 'up'],
    ['H. pylori', 'Helicobacter pylori', "Helicobacter pylori", 'up'],
    ['N&V', 'nausea and vomiting', "nausea and vomiting", 'up'],
    ['N/V/D', 'nausea, vomiting, diarrhea', "nausea, vomiting and diarrhoea", 'up'],
    ['pp', 'postprandial (after a meal)', "after meals", 'up'],
    ['HSV-1', 'herpes simplex virus type 1', "herpes simplex virus type 1", 'up'],
    ['BMI', 'body mass index', "body mass index", 'up'],
    // روده، کبد و صفرا
    ['IBD', 'inflammatory bowel disease', "inflammatory bowel disease", 'lo'],
    ['IBS', 'irritable bowel syndrome', "irritable bowel syndrome", 'lo'],
    ['CD', 'Crohn disease', "Crohn disease", 'lo'],
    ['UC', 'ulcerative colitis', "ulcerative colitis", 'lo'],
    ['FAP', 'familial adenomatous polyposis', "familial adenomatous polyposis", 'lo'],
    ['HAV', 'hepatitis A virus', "hepatitis A virus", 'lo'],
    ['HBV', 'hepatitis B virus', "hepatitis B virus", 'lo'],
    ['HCV', 'hepatitis C virus', "hepatitis C virus", 'lo'],
    ['HDV', 'hepatitis D virus', "hepatitis D virus", 'lo'],
    ['HEV', 'hepatitis E virus', "hepatitis E virus", 'lo'],
    // تشخیص، جراحی و دارو
    ['EGD', 'esophagogastroduodenoscopy', "scope exam of the oesophagus, stomach and duodenum", 'tx'],
    ['ERCP', 'endoscopic retrograde cholangiopancreatography', "endoscopic retrograde cholangiopancreatography", 'tx'],
    ['MRCP', 'magnetic resonance cholangiopancreatography', "magnetic resonance cholangiopancreatography", 'tx'],
    ['PTC', 'percutaneous transhepatic cholangiography', "percutaneous transhepatic cholangiography", 'tx'],
    ['UGI', 'upper gastrointestinal (series)', "upper GI series", 'tx'],
    ['BE', 'barium enema', "barium enema", 'tx'],
    ['FOBT', 'fecal occult blood test', "faecal occult blood test", 'tx'],
    ['O&P', 'ova and parasites', "ova and parasites", 'tx'],
    ['LFT', 'liver function tests', "liver function tests", 'tx'],
    ['ALT', 'alanine aminotransferase', "liver enzyme ALT", 'tx'],
    ['AST', 'aspartate aminotransferase', "liver enzyme AST", 'tx'],
    ['ESWL', 'extracorporeal shock wave lithotripsy', "extracorporeal shock wave lithotripsy", 'tx'],
    ['NG', 'nasogastric', "nasogastric", 'tx'],
    ['PEG', 'percutaneous endoscopic gastrostomy', "percutaneous endoscopic gastrostomy", 'tx'],
    ['TPN', 'total parenteral nutrition', "total parenteral nutrition", 'tx'],
    ['NPO', 'nothing by mouth (nil per os)', "nothing by mouth", 'tx'],
    ['PPI', 'proton pump inhibitor', "proton pump inhibitor", 'tx'],
    ['PONV', 'postoperative nausea and vomiting', "postoperative nausea and vomiting", 'tx'],
    ['OTC', 'over the counter', "sold without a prescription", 'tx'],
    ['ac', 'before meals', "before meals", 'tx'],
    ['pc', 'after meals', "after meals", 'tx']
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
    { id: 'spec', icon: '👩‍⚕️', name: "Specialties and professions" },
    { id: 'phys', icon: '⚙️', name: "Digestive processes" },
    { id: 'oral', icon: '🦷', name: "Mouth, teeth and saliva" },
    { id: 'upper', icon: '🍽️', name: "Pharynx, oesophagus and stomach" },
    { id: 'bowel', icon: '🌀', name: "Intestines, peritoneum and abdominal regions" },
    { id: 'acc', icon: '🟤', name: "Liver, bile and pancreas" },
    { id: 'sx', icon: '🔎', name: "Symptoms and signs" },
    { id: 'pup', icon: '🔥', name: "Diseases of the Mouth, Oesophagus and Stomach" },
    { id: 'plo', icon: '🩹', name: "Diseases of the bowel and anus" },
    { id: 'pacc', icon: '🟡', name: "Diseases of the liver, bile and pancreas" },
    { id: 'endo', icon: '🔭', name: "looking inside with a scope (endoscopy)" },
    { id: 'img', icon: '🩻', name: "Imaging" },
    { id: 'lab', icon: '🧪', name: "Tests and sampling" },
    { id: 'surg', icon: '✂️', name: "surgery" },
    { id: 'care', icon: '🤝', name: "Tubes, feeding and care" },
    { id: 'drug', icon: '💊', name: "Digestive drugs" }
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
  const WORLDS = ['lx', 'mo', 'bw', 'up', 'lo', 'tx'];
  /* دنیای lx (زبان گوارش) از همه واژه‌ها، ریشه‌ها و اختصارها سؤال می‌سازد */
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
      /* نام‌های ساده اندام (duodenum = duoden/o + ‎-um) تمرین واژه‌سازی خوبی نیستند */
      const bare = a.parts.length === 2 && a.parts[1].r && a.parts[1].r.stems.includes('um');
      if (a.full && !bare && a.parts.length >= 2 && a.parts.length <= 4 && a.parts.some(p => p.kind === 'root') && !a.parts.some(p => p.r.w === '*' && p.r.stems[0].length <= 2 && p.kind !== 'suffix')) out.push({ t, parts: a.parts });
    });
    return (BUILD_CACHE[w] = out);
  }
  EA.gen = Object.assign(EA.gen || {}, G);
  EA.genIds = w => ['t2f', 'f2t', 'd2t', 'sp', 'r2m', 'm2r', 'wb', 'ab'].map(g => g + ':' + w);

  EA.lex = { ROOTS, ABBR, TERMS, CAT_FA, CATS, classify, term, analyze, partLabel, search, short, norm, buildable, defShort, why };
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* گوارا — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با ایمنا، پیکر، تپش، مهار و تیمار: زمینه سفید، گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی)،
 * اندام‌های گوارش، مسیرها، جدول‌های رنگی و آدمک ساده (مانکن آناتومی) برای نقشه‌های بدن.
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

  /* ---------- زبان گوارش ---------- */
  /* آناتومی یک واژه: cholecyst + ectomy (واکه رابط پیش از پسوند صدادار می‌افتد) */
  A.wordparts = () => {
    const part = (x, w, s, c, bg, dash) => `<rect x="${x}" y="44" width="${w}" height="42" rx="11" fill="${bg}"${dash ? ` stroke="${c}" stroke-dasharray="4 3" stroke-width="1.5"` : ''}/>${t(x + w / 2, 72, s, { size: 18, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 94 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 118, en, { size: 10, fill: c, w: 900 })}${f((x1 + x2) / 2, 133, fa, { size: 10, fill: c })}`;
    return svg(360, 206, `${f(180, 24, "one word = root + (combining vowel) + suffix", { size: 11.5, fill: INK, w: 800 })}
      ${part(8, 112, 'cholecyst', '#1c7ed6', '#e1effc')}${part(126, 26, 'o', '#adb5bd', '#fff', true)}${part(158, 84, 'ectomy', '#2b8a3e', '#e6fcf5')}
      <path d="M128 50 L150 80" stroke="#e03131" stroke-width="2.5"/>
      ${br(8, 120, 'root', "root: gallbladder", '#1c7ed6')}${br(126, 152, 'o', "is dropped", '#e03131')}${br(158, 242, 'suffix', "suffix: removal", '#2b8a3e')}
      <path d="M246 64 h6" stroke="${LINE}" stroke-width="2"/><rect x="254" y="40" width="102" height="50" rx="10" fill="${VIO_BG}"/>${f(305, 61, "removal of the gallbladder", { size: 10.5, fill: VIO, w: 800 })}${t(305, 79, 'cholecystectomy', { size: 9, fill: INK })}
      ${f(180, 166, "no o before a vowel suffix such as -ectomy", { size: 9.5, fill: '#e03131', w: 700 })}
      ${f(180, 192, "Read the meaning from the end: first the suffix (what happened?), then the root (where?)", { size: 10, fill: VIO, w: 700 })}`, "Anatomy of the word cholecystectomy");
  };

  /* ریشه‌های دهان (جدول ۱۳-۱) */
  A['mouth-roots'] = () => {
    const sh = 's' + (++UID);
    const R = [['or/o • stomat/o', "mouth", '👄', '#e8590c'], ['bucc/o', "cheek", '😊', '#d6336c'], ['labi/o • cheil/o', "lip", '💋', '#c2255c'], ['dent/o • odont/o', "tooth", '🦷', '#1c7ed6'],
      ['gingiv/o', "gums", '🩷', '#e64980'], ['gloss/o • lingu/o', "tongue", '👅', '#f03e3e'], ['gnath/o', "jaw", '🦴', '#495057'], ['palat/o', "palate", '⛺', '#7048e8'], ['sial/o', "saliva, salivary gland", '💧', '#1098ad'], ['uvul/o', "uvula", '🔔', '#2b8a3e']];
    return svg(360, 262, `<defs>${shadow(sh)}</defs>${f(180, 20, "Mouth roots", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ic, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 45; return `${card(x, y, 168, 39, '#f8f9fa', sh)}<text x="${x + 152}" y="${y + 26}" font-size="16" text-anchor="middle">${ic}</text>${t(x + 10, y + 17, en, { size: 11.5, fill: c, w: 900, anchor: 'start' })}${f(x + 10, y + 32, fa, { size: 9.5, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, "Mouth roots");
  };

  /* ریشه‌های لوله گوارش به ترتیب مسیر غذا */
  A['tract-roots'] = () => {
    const R = [['esophag/o', "oesophagus", '#f08c00'], ['gastr/o', "stomach", '#e8590c'], ['pylor/o', "pylorus", '#d9480f'], ['duoden/o', "duodenum", '#c2255c'], ['jejun/o', "jejunum", '#a61e4d'], ['ile/o', "ileum", '#862e9c'],
      ['cec/o', "cecum", '#5f3dc4'], ['col/o', "colon", '#364fc7'], ['sigmoid/o', "sigmoid", '#1864ab'], ['rect/o', "rectum", '#0b7285'], ['proct/o', "rectum and anus", '#087f5b'], ['an/o', "opening at the end of the digestive tract", '#2b8a3e']];
    const pos = i => { const row = Math.floor(i / 3), k = i % 3, col = row % 2 ? k : 2 - k; return [14 + col * 116, 40 + row * 60]; };
    let path = '', body = '';
    R.forEach((r, i) => { const [x, y] = pos(i); path += (i ? ' L' : 'M') + (x + 52) + ' ' + (y + 22); });
    R.forEach(([en, fa, c], i) => { const [x, y] = pos(i); body += `<rect x="${x}" y="${y}" width="104" height="44" rx="12" fill="#fff" stroke="${c}" stroke-width="2"/>${t(x + 52, y + 19, en, { size: 11.5, fill: c, w: 900 })}${f(x + 52, y + 36, fa, { size: 9.5, fill: INK, w: 700 })}<circle cx="${x + 8}" cy="${y + 8}" r="8" fill="${c}"/>${t(x + 8, y + 12, i + 1, { size: 9, fill: '#fff', w: 900 })}`; });
    return svg(360, 290, `${f(180, 22, "Roots in the order of the food path (1 to 12)", { size: 11.5, fill: INK, w: 800 })}<path d="${path}" stroke="#ffd8a8" stroke-width="10" fill="none" stroke-linejoin="round" stroke-linecap="round"/>${body}`, "Roots of the digestive tract");
  };

  /* ریشه‌های اندام‌های کمکی روی نقشه مجاری */
  A['acc-roots'] = () => {
    const sh = 's' + (++UID);
    return svg(360, 262, `<defs>${shadow(sh)}${linear('lv' + UID, '#c0504d', '#8f2d2a', true)}</defs>${f(180, 20, "Roots of the liver, bile and pancreas", { size: 11.5, fill: INK, w: 800 })}
      <path d="M40 44 C70 30 170 30 200 50 C214 62 196 88 160 104 C120 120 76 124 52 114 C30 104 26 60 40 44Z" fill="url(#lv${UID})" filter="url(#${sh})"/>
      <path d="M120 98 V140 M120 140 C120 160 132 176 150 186" stroke="#2f9e44" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M120 128 C104 128 92 136 88 150" stroke="#2f9e44" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M70 150 C70 136 92 136 98 150 C104 170 90 190 78 186 C66 182 66 162 70 150Z" fill="#69db7c" stroke="#2b8a3e" stroke-width="2"/>
      <path d="M150 186 C170 196 196 206 232 200 C262 196 290 186 300 176" stroke="#e8c468" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M152 188 C190 200 250 200 298 176" stroke="#b8923a" stroke-width="2" fill="none"/>
      <path d="M140 172 C140 214 156 236 186 238 C204 238 210 220 196 206" stroke="#f4a3a8" stroke-width="18" fill="none" stroke-linecap="round"/>
      ${pin(110, 60, 250, 54, '#8f2d2a')}${lab(300, 50, 'hepat/o', "liver", { fill: '#8f2d2a', size: 12 })}
      ${pin(124, 120, 250, 96, '#2b8a3e')}${lab(300, 92, 'chol/e • bili', "bile", { fill: '#2b8a3e', size: 12 })}
      ${pin(80, 170, 40, 222, '#2b8a3e')}${lab(52, 238, 'cholecyst/o', "gallbladder", { fill: '#2b8a3e', size: 10.5 })}
      ${pin(105, 133, 34, 150, '#5c940d')}${lab(34, 166, 'cholangi/o', "bile duct", { fill: '#5c940d', size: 10.5 })}
      ${pin(128, 160, 250, 138, '#087f5b')}${lab(300, 134, 'choledoch/o', "common bile duct", { fill: '#087f5b', size: 11 })}
      ${pin(240, 198, 290, 218, '#b8923a')}${lab(300, 236, 'pancreat/o', "pancreas", { fill: '#a07a1a', size: 12 })}`, "Liver and bile roots");
  };

  /* ریشه‌های هم‌معنی */
  A.synonyms = () => {
    const sh = 's' + (++UID);
    const P = [['or/o', 'stomat/o', "mouth", '#e8590c'], ['gloss/o', 'lingu/o', "tongue", '#f03e3e'], ['dent/o', 'odont/o', "tooth", '#1c7ed6'], ['labi/o', 'cheil/o', "lip", '#c2255c'],
      ['col/o', 'colon/o', "colon", '#364fc7'], ['chol/e', 'bili', "bile", '#2b8a3e'], ['append/o', 'appendic/o', "the appendix", '#7048e8'], ['abdomin/o', 'lapar/o', "abdomen", '#e67700']];
    return svg(360, 254, `<defs>${shadow(sh)}</defs>${f(180, 20, "Two roots, one meaning", { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([a, b, fa, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 54; return `${card(x, y, 168, 46, '#f8f9fa', sh)}${t(x + 44, y + 20, a, { size: 11.5, fill: c, w: 900 })}${t(x + 84, y + 20, '=', { size: 12, fill: MUTED })}${t(x + 126, y + 20, b, { size: 11.5, fill: c, w: 900 })}${f(x + 84, y + 38, fa, { size: 10, fill: INK, w: 700 })}`; }).join('')}`, "Synonymous roots");
  };

  /* پسوندهای علامت گوارشی */
  A['sx-suffixes'] = () => {
    const sh = 's' + (++UID);
    const R = [['-emesis', "vomiting", 'hematemesis', '🤮', '#c92a2a'], ['-pepsia', "digestion", 'dyspepsia', '🍲', '#e8590c'], ['-phagia', "eating, swallowing", 'dysphagia', '🍴', '#e67700'], ['-prandial', "meal", 'postprandial', '🕐', '#5c940d'],
      ['-chezia', "bowel movement", 'hematochezia', '🚽', '#a61e4d'], ['-rrhea', "flow, discharge", 'diarrhea', '💧', '#1971c2'], ['-lithiasis', "stone disease", 'cholelithiasis', '🪨', '#5c5f66'], ['-stasis', "stopping", 'cholestasis', '⏸️', '#7048e8']];
    return svg(360, 274, `<defs>${shadow(sh)}</defs>${f(180, 20, "Suffixes for digestive symptoms", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ex, ic, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 60; return `${card(x, y, 168, 52, '#f8f9fa', sh)}<text x="${x + 150}" y="${y + 24}" font-size="16" text-anchor="middle">${ic}</text>${t(x + 10, y + 18, en, { size: 12, fill: c, w: 900, anchor: 'start' })}${f(x + 10, y + 32, fa, { size: 9.5, fill: INK, w: 700, anchor: 'start' })}${t(x + 10, y + 46, ex, { size: 9, fill: MUTED, w: 700, anchor: 'start' })}`; }).join('')}`, "Symptom suffixes");
  };

  /* پسوندهای جراحی و تشخیص روی یک لوله */
  A['surg-suffixes'] = () => {
    const sh = 's' + (++UID);
    const tube = (x, y) => `<rect x="${x}" y="${y}" width="56" height="20" rx="10" fill="#ffc9c9" stroke="#e03131" stroke-width="1.5"/>`;
    const R = [
      ['-ectomy', "removal", `${tube(0, 0)}<rect x="18" y="-3" width="20" height="26" fill="#f8f9fa"/><path d="M18 -3 v26 M38 -3 v26" stroke="#c92a2a" stroke-dasharray="3 2"/>`, '#c92a2a'],
      ['-tomy', "incision", `${tube(0, 0)}<path d="M28 -6 v32" stroke="#212529" stroke-width="2.2"/>`, '#495057'],
      ['-stomy', "making an opening", `${tube(0, 0)}<ellipse cx="56" cy="10" rx="5" ry="10" fill="#c92a2a"/><path d="M62 -6 v32" stroke="#e9b994" stroke-width="5"/>`, '#d6336c'],
      ['-plasty', "repair", `${tube(0, 0)}<path d="M20 4 q8 12 16 0" stroke="#2b8a3e" stroke-width="2.4" fill="none"/>`, '#2b8a3e'],
      ['-rrhaphy', "stitch", `${tube(0, 0)}<path d="M28 -4 v28" stroke="#c92a2a"/><path d="M22 0 l12 6 M22 7 l12 6 M22 14 l12 6" stroke="#1c7ed6" stroke-width="1.8"/>`, '#1c7ed6'],
      ['-pexy', "fixing in place", `${tube(0, 0)}<path d="M28 20 v10 M20 30 h16" stroke="#495057" stroke-width="2.4"/><circle cx="28" cy="20" r="3" fill="#495057"/>`, '#5c5f66'],
      ['-tripsy', "crushing", `<circle cx="14" cy="10" r="9" fill="#adb5bd"/><path d="M28 10 h8" stroke="#e8590c" stroke-width="2.4"/><circle cx="44" cy="4" r="3" fill="#adb5bd"/><circle cx="50" cy="13" r="3.5" fill="#adb5bd"/><circle cx="42" cy="16" r="2.5" fill="#adb5bd"/>`, '#e8590c'],
      ['-scopy', "looking inside", `${tube(0, 0)}<path d="M-6 10 C10 10 20 10 40 10" stroke="#212529" stroke-width="2.2"/><circle cx="41" cy="10" r="3" fill="#ffd43b"/>`, '#1098ad']];
    return svg(360, 274, `<defs>${shadow(sh)}</defs>${f(180, 20, "Eight surgical and diagnostic suffixes", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ic, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 60; return `${card(x, y, 168, 52, '#f8f9fa', sh)}<g transform="translate(${x + 96} ${y + 16})">${ic}</g>${t(x + 10, y + 22, en, { size: 12, fill: c, w: 900, anchor: 'start' })}${f(x + 10, y + 40, fa, { size: 9.5, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, "Surgical suffixes");
  };

  /* نام‌گذاری استومی و آناستوموز */
  A['stomy-naming'] = () => {
    const gut = (d, c) => `<path d="${d}" stroke="${c}" stroke-width="16" fill="none" stroke-linecap="round"/>`;
    return svg(360, 236, `${f(180, 20, "One organ to the skin, or two organs to each other?", { size: 11.5, fill: INK, w: 800 })}
      <rect x="186" y="32" width="166" height="150" rx="14" fill="#fff4e6"/><rect x="8" y="32" width="166" height="150" rx="14" fill="#e6fcf5"/>
      <rect x="318" y="44" width="16" height="122" rx="6" fill="#f2c9a5"/>${f(326, 178, "abdominal skin", { size: 8.5 })}
      ${gut('M214 150 C214 90 250 80 300 100 L318 104', '#f4a3a8')}<ellipse cx="318" cy="104" rx="6" ry="9" fill="#c92a2a"/>
      ${lab(256, 64, 'ileostomy', "ileum to skin", { fill: '#d9480f', size: 11.5 })}
      ${gut('M40 64 C80 50 110 70 96 96', '#ffa8a8')}${gut('M96 104 C80 130 110 160 150 148', '#fcc2d7')}<circle cx="96" cy="100" r="9" fill="#fff" stroke="#2b8a3e" stroke-width="2.5"/>
      ${f(46, 88, "stomach", { size: 9, anchor: 'start', fill: INK })}${f(136, 134, "jejunum", { size: 9, anchor: 'middle', fill: INK })}
      ${lab(91, 170, 'gastrojejunostomy', '', { fill: '#2b8a3e', size: 10.5 })}
      ${f(269, 204, "one root + -stomy = an opening to the outside", { size: 9.5, fill: '#d9480f', w: 700 })}${f(91, 204, "two roots + -stomy = an anastomosis", { size: 9.5, fill: '#2b8a3e', w: 700 })}
      ${f(180, 228, "Surgically joining two hollow organs is called an anastomosis", { size: 9.5, fill: VIO, w: 700 })}`, "Naming stomas");
  };

  /* جمع واژه‌های یونانی و لاتین */
  A.plurals = () => {
    const sh = 's' + (++UID);
    const R = [['diverticulum', 'diverticula', '-um → -a'], ['gingiva', 'gingivae', '-a → -ae'], ['calculus', 'calculi', '-us → -i'], ['villus', 'villi', '-us → -i'], ['anastomosis', 'anastomoses', '-is → -es'], ['varix', 'varices', '-ix → -ices']];
    return svg(360, 248, `<defs>${shadow(sh)}</defs>${f(180, 20, "singular → plural", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([a, b, rule], i) => { const y = 32 + i * 35; return `${card(8, y, 344, 29, i % 2 ? '#f8f9fa' : '#f3f0ff', sh)}${t(20, y + 19, a, { size: 11.5, fill: INK, w: 800, anchor: 'start' })}${t(176, y + 19, '→', { size: 13, fill: MUTED })}${t(196, y + 19, b, { size: 11.5, fill: '#7048e8', w: 900, anchor: 'start' })}${t(342, y + 19, rule, { size: 9.5, fill: MUTED, anchor: 'end' })}`; }).join('')}`, "Plurals");
  };

  /* واژه‌های هم‌آوا و شبیه */
  A.lookalikes = () => {
    const sh = 's' + (++UID);
    const R = [['ileum', "ileum (bowel)", 'ilium', "hip bone", "e as in intestine"], ['dysphagia', "difficulty swallowing", 'dysphasia', "difficulty speaking", "g as in gag, s as in speak"], ['stomat/o', "mouth", 'gastr/o', "stomach", "stomat/o is not the stomach!"], ['chol/e', "bile", 'col/o', "colon", "cholecystitis, not colecystitis"]];
    return svg(360, 262, `<defs>${shadow(sh)}</defs>${f(180, 20, "Watch out for look-alike words", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([a, af, b, bf, tip], i) => { const y = 32 + i * 57; return `${card(8, y, 344, 50, '#f8f9fa', sh)}${t(270, y + 20, a, { size: 12, fill: '#1c7ed6', w: 900 })}${f(270, y + 36, af, { size: 9.5, fill: INK, w: 700 })}${t(180, y + 22, '≠', { size: 16, fill: '#e03131', w: 900 })}${t(90, y + 20, b, { size: 12, fill: '#e8590c', w: 900 })}${f(90, y + 36, bf, { size: 9.5, fill: INK, w: 700 })}${f(180, y + 47, tip, { size: 8.5, fill: VIO })}`; }).join('')}`, "Look-alike words");
  };

  /* ساختن صفت از ریشه */
  A['adj-endings'] = () => {
    const R = [['esophag', '-eal', 'esophageal', "of the oesophagus", '#f08c00'], ['pharyng', '-eal', 'pharyngeal', "pharyngeal", '#e8590c'], ['gastr', '-ic', 'gastric', "gastric", '#d6336c'], ['duoden', '-al', 'duodenal', "duodenal", '#c2255c'], ['bili', '-ary', 'biliary', "biliary", '#2b8a3e'], ['celi', '-ac', 'celiac', "abdominal", '#7048e8']];
    return svg(360, 264, `${f(180, 20, "root + adjective suffix = “relating to…”", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([r, s, w, fa, c], i) => { const y = 34 + i * 35; return `<rect x="8" y="${y}" width="90" height="28" rx="8" fill="#f1f3f5"/>${t(53, y + 19, r, { size: 11.5, fill: c, w: 900 })}${t(108, y + 19, '+', { size: 13, fill: MUTED })}<rect x="118" y="${y}" width="50" height="28" rx="8" fill="#fff4e6"/>${t(143, y + 19, s, { size: 11.5, fill: '#d9480f', w: 900 })}${t(178, y + 19, '=', { size: 13, fill: MUTED })}${t(190, y + 19, w, { size: 11.5, fill: INK, w: 900, anchor: 'start' })}${f(352, y + 19, fa, { size: 9.5, fill: c, w: 700, anchor: 'end' })}`; }).join('')}
      ${f(180, 256, "In esophageal and pharyngeal an e comes before -al", { size: 9.5, fill: VIO, w: 700 })}`, "Adjective suffixes");
  };
  /* ---------- دهان تا معده ---------- */
  /* بدنه ساده تنه برای نقشه اندام‌ها (رو به بیننده؛ راست بیمار = چپ تصویر) */
  const torso = (cx, top, g) => `<path d="M${cx - 18} ${top} Q${cx - 18} ${top + 22} ${cx - 30} ${top + 28} Q${cx - 74} ${top + 34} ${cx - 78} ${top + 70} L${cx - 72} ${top + 200} Q${cx - 80} ${top + 240} ${cx - 64} ${top + 262} L${cx + 64} ${top + 262} Q${cx + 80} ${top + 240} ${cx + 72} ${top + 200} L${cx + 78} ${top + 70} Q${cx + 74} ${top + 34} ${cx + 30} ${top + 28} Q${cx + 18} ${top + 22} ${cx + 18} ${top}" fill="url(#${g})" stroke="${SKIN_LINE}" stroke-width="1.2"/>`;
  const GUT = '#f4a3a8', GUT_D = '#d6646c', COLON = '#e8a87c', COLON_D = '#b8693c', LIVER = '#a5443f';

  /* مسیر غذا از دهان تا مقعد */
  A['gi-tract'] = () => {
    const g = 'k' + (++UID), cx = 180;
    const colonPath = `M${cx - 50} 262 V188 Q${cx - 50} 176 ${cx - 38} 176 H${cx + 40} Q${cx + 52} 176 ${cx + 52} 188 V250 Q${cx + 52} 268 ${cx + 30} 270 Q${cx + 8} 272 ${cx} 282`;
    return svg(360, 318, `<defs>${linear(g, SKIN[0], SKIN[1])}</defs>${f(180, 20, "The path of food: the digestive tract and accessory organs", { size: 11.5, fill: INK, w: 800 })}
      <ellipse cx="${cx}" cy="50" rx="17" ry="20" fill="url(#${g})" stroke="${SKIN_LINE}"/>${torso(cx, 68, g)}
      <path d="M${cx - 6} 62 h12" stroke="#c92a2a" stroke-width="3" stroke-linecap="round"/>
      <path d="M${cx} 66 V140" stroke="#f08c00" stroke-width="7" stroke-linecap="round"/>
      <path d="M${cx - 64} 140 C${cx - 60} 118 ${cx - 6} 116 ${cx + 6} 128 C${cx + 2} 150 ${cx - 30} 166 ${cx - 64} 160 Z" fill="${LIVER}"/>
      <path d="M${cx} 136 C${cx + 20} 120 ${cx + 54} 128 ${cx + 52} 152 C${cx + 50} 170 ${cx + 18} 176 ${cx + 2} 166" fill="#ff8787" stroke="#e03131" stroke-width="1.5"/>
      <ellipse cx="${cx - 24}" cy="164" rx="7" ry="10" fill="#69db7c"/>
      <path d="M${cx - 6} 170 C${cx + 14} 176 ${cx + 30} 172 ${cx + 40} 166" stroke="#e8c468" stroke-width="7" stroke-linecap="round"/>
      <path d="${colonPath}" stroke="${COLON}" stroke-width="13" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${colonPath}" stroke="${COLON_D}" stroke-width="1.5" fill="none" stroke-dasharray="3 5"/>
      <path d="M${cx - 30} 196 c10 -8 20 8 30 0 s20 8 30 0 M${cx - 32} 214 c10 -8 22 8 32 0 s22 8 32 0 M${cx - 30} 232 c10 -8 20 8 30 0 s20 8 30 0 M${cx - 26} 250 c10 -8 18 8 28 0 s16 8 24 0" stroke="${GUT}" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M${cx - 52} 262 q-6 10 2 14" stroke="${COLON}" stroke-width="6" fill="none" stroke-linecap="round"/>
      ${pin(cx - 4, 60, 70, 46)}${lab(40, 44, 'mouth', "mouth", { size: 10.5 })}
      ${pin(cx, 96, 70, 90)}${lab(40, 88, 'esophagus', "oesophagus", { size: 10.5 })}
      ${pin(cx - 44, 138, 70, 132)}${lab(38, 128, 'liver', "liver", { size: 10.5, fill: LIVER })}
      ${pin(cx - 24, 166, 70, 172)}${lab(38, 168, 'gallbladder', "gallbladder", { size: 9.5, fill: '#2b8a3e' })}
      ${pin(cx - 50, 220, 70, 214)}${lab(40, 210, 'large intestine', "large intestine", { size: 9.5, fill: COLON_D })}
      ${pin(cx - 52, 272, 70, 258)}${lab(40, 254, 'appendix', "the appendix", { size: 9.5 })}
      ${pin(cx + 1, 282, 70, 298)}${lab(40, 296, 'anus', "opening at the end of the digestive tract", { size: 10 })}
      ${pin(cx + 34, 142, 292, 120)}${lab(322, 116, 'stomach', "stomach", { size: 10.5, fill: '#e03131' })}
      ${pin(cx + 36, 166, 292, 160)}${lab(322, 156, 'pancreas', "pancreas", { size: 10, fill: '#a07a1a' })}
      ${pin(cx + 10, 214, 292, 206)}${lab(322, 202, 'small intestine', "small intestine", { size: 9.5, fill: GUT_D })}
      ${pin(cx + 6, 276, 292, 262)}${lab(322, 258, 'rectum', "rectum", { size: 10 })}`, "The path of food through the digestive tract");
  };

  /* هفت مرحله کار دستگاه گوارش */
  A['digest-steps'] = () => {
    const sh = 's' + (++UID);
    const R = [['ingestion', "eating", '🍎'], ['mastication', "chewing", '🦷'], ['deglutition', "swallowing", '👅'], ['peristalsis', "peristalsis", '〰️'], ['digestion', "digestion", '⚗️'], ['absorption', "Absorption", '🧽'], ['defecation', "bowel movement", '🚽']];
    const C = ['#e8590c', '#e67700', '#f08c00', '#2b8a3e', '#1098ad', '#1c7ed6', '#7048e8'];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, "Food in seven steps", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ic], i) => { const x = i === 6 ? 96 : 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 66; return `${card(x, y, 168, 56, '#f8f9fa', sh)}<circle cx="${x + 150}" cy="${y + 28}" r="13" fill="${C[i]}"/>${t(x + 150, y + 33, i + 1, { size: 12, fill: '#fff', w: 900 })}<text x="${x + 118}" y="${y + 34}" font-size="18" text-anchor="middle">${ic}</text>${t(x + 12, y + 24, en, { size: 11.5, fill: C[i], w: 900, anchor: 'start' })}${f(x + 12, y + 42, fa, { size: 10, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, "Stages of digestion");
  };

  /* قوس دندانی و نام دندان‌ها */
  A['dental-arch'] = () => {
    const sh = 's' + (++UID);
    const T = ['M', 'M', 'M', 'P', 'P', 'C', 'I', 'I', 'I', 'I', 'C', 'P', 'P', 'M', 'M', 'M'];
    const COL = { I: '#1c7ed6', C: '#e03131', P: '#f08c00', M: '#2b8a3e' };
    let teeth = '';
    T.forEach((k, i) => { const a = Math.PI * (0.06 + 0.88 * i / 15), x = 180 - 110 * Math.cos(a), y = 176 - 120 * Math.sin(a), r = k === 'M' ? 11 : k === 'P' ? 9 : 8; teeth += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${r}" ry="${r * 0.86}" fill="#fff" stroke="${COL[k]}" stroke-width="3" filter="url(#${sh})"/>`; });
    const leg = [['incisor', "incisor (cutting)", 'I', "8", "8"], ['canine', "canine (tearing)", 'C', "4", "4"], ['premolar', "premolar", 'P', "8", "0"], ['molar', "molar (grinding)", 'M', "12", "8"]];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, "The upper jaw from the front: four types of teeth", { size: 11.5, fill: INK, w: 800 })}
      <path d="M70 186 C70 40 290 40 290 186" stroke="#ffc9c9" stroke-width="30" fill="none" stroke-linecap="round"/>${teeth}
      ${f(180, 112, "front of the mouth", { size: 9 })}${f(180, 160, "children have no premolars", { size: 9.5, fill: VIO, w: 700 })}
      <rect x="8" y="200" width="344" height="94" rx="12" fill="#f8f9fa"/>
      ${f(150, 218, "permanent (32)", { size: 9.5, fill: INK, w: 800 })}${f(60, 218, "deciduous (20)", { size: 9.5, fill: INK, w: 800 })}
      ${leg.map(([en, fa, k, p, d], i) => { const y = 234 + i * 16; return `<circle cx="340" cy="${y - 4}" r="5" fill="#fff" stroke="${COL[k]}" stroke-width="3"/>${t(328, y, en, { size: 10, fill: COL[k], w: 900, anchor: 'end' })}${f(262, y, fa, { size: 9, fill: INK, anchor: 'end' })}${f(150, y, p, { size: 10, fill: INK, w: 800 })}${f(60, y, d, { size: 10, fill: INK, w: 800 })}`; }).join('')}`, "Types of teeth");
  };

  /* حرکت دودی */
  A.peristalsis = () => {
    const mk = 'm' + (++UID);
    const ring = x => `<path d="M${x} 82 q10 18 0 36" stroke="#c92a2a" stroke-width="2"/><path d="M${x - 8} 74 C${x - 2} 92 ${x - 2} 108 ${x - 8} 126 M${x + 8} 74 C${x + 2} 92 ${x + 2} 108 ${x + 8} 126" stroke="#e03131" stroke-width="2.5" fill="none"/>`;
    return svg(360, 220, `<defs>${marker(mk, '#2b8a3e')}</defs>${f(180, 22, "peristalsis: a wave of contraction behind the bolus", { size: 11.5, fill: INK, w: 800 })}
      <path d="M20 70 H120 Q140 70 150 84 Q160 98 170 84 Q180 70 200 70 H340 V130 H200 Q180 130 170 116 Q160 102 150 116 Q140 130 120 130 H20 Z" fill="#ffe3e3" stroke="#e03131" stroke-width="2"/>
      <ellipse cx="236" cy="100" rx="40" ry="24" fill="#d8b47a" stroke="#a07a1a" stroke-width="1.5"/>${t(236, 104, 'bolus', { size: 11, fill: '#5c3d0a' })}
      ${arrow(mk, 286, 100, 330, 100, '#2b8a3e', 3)}${f(310, 150, "direction of movement", { size: 10, fill: '#2b8a3e', w: 700 })}
      ${f(160, 150, "muscle behind the bolus contracts", { size: 10, fill: '#c92a2a', w: 700 })}${f(250, 54, "relaxed in front of the bolus", { size: 10, fill: MUTED, w: 700 })}
      ${f(180, 186, "it is involuntary and moves food from the oesophagus to the rectum", { size: 10, fill: VIO, w: 700 })}
      ${f(180, 206, "a chewed mouthful moistened with saliva = bolus", { size: 9.5, fill: MUTED })}`, "peristalsis");
  };

  /* بلع: راه هوا و راه غذا */
  A.swallow = () => {
    const mk = 'm' + (++UID);
    return svg(360, 262, `<defs>${marker(mk, '#e8590c')}</defs>${f(180, 20, "deglutition: the airway closes during swallowing", { size: 11.5, fill: INK, w: 800 })}
      <path d="M40 66 H200 Q232 66 232 98 V226" stroke="#ffd8a8" stroke-width="44" fill="none"/>
      <path d="M150 134 V226" stroke="#a5d8ff" stroke-width="26"/>${f(150, 220, "windpipe", { size: 9, fill: '#1864ab' })}
      <path d="M232 134 V226" stroke="#ffc9c9" stroke-width="26"/>${f(232, 220, "oesophagus", { size: 9, fill: '#c92a2a' })}
      <path d="M140 130 Q160 110 186 120" stroke="#2b8a3e" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M204 54 Q218 70 218 86" stroke="#c2255c" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="222" cy="114" r="13" fill="#d8b47a"/>${curve(mk, 'M236 114 C246 126 242 150 236 172', '#e8590c', 2.5)}
      <path d="M52 92 C100 76 150 84 192 94" stroke="#ff8787" stroke-width="16" fill="none" stroke-linecap="round"/>
      ${pin(186, 120, 96, 146)}${lab(64, 158, 'epiglottis', "lid of the larynx", { size: 10.5, fill: '#2b8a3e' })}
      ${pin(216, 78, 290, 64)}${lab(316, 52, 'soft palate', "soft palate and uvula", { size: 9.5, fill: '#c2255c' })}
      ${pin(100, 84, 64, 116)}${lab(54, 128, 'tongue', "tongue", { size: 10, fill: '#e03131' })}
      ${pin(222, 114, 296, 120)}${lab(316, 132, 'bolus', "bolus", { size: 10.5, fill: '#a07a1a' })}
      ${f(180, 244, "the soft palate closes off the nose and the epiglottis the trachea", { size: 9.5, fill: VIO, w: 700 })}`, "swallowing");
  };

  /* اسفنکترهای مسیر غذا */
  A.sphincters = () => {
    const sh = 's' + (++UID);
    const R = [['lower esophageal sphincter', "between the oesophagus and stomach; the LES or cardiac sphincter", "prevents acid reflux", '#e8590c'], ['pyloric sphincter', "between the stomach and duodenum", "lets chyme through little by little", '#d6336c'],
      ['ileocecal valve', "between the ileum and caecum", "prevents backflow from the large intestine", '#7048e8'], ['sphincter of Oddi', "opening of the bile duct into the duodenum", "entry of bile and pancreatic juice", '#2b8a3e'], ['anal sphincters', "internal and external, at the anus", "holding and passing stool", '#1c7ed6']];
    return svg(360, 284, `<defs>${shadow(sh)}</defs>${f(180, 20, "sphincter: a ring of muscle that opens and closes a passage", { size: 11, fill: INK, w: 800 })}
      ${R.map(([en, where, job, c], i) => { const y = 32 + i * 50; return `${card(8, y, 344, 44, '#f8f9fa', sh)}<circle cx="330" cy="${y + 22}" r="11" fill="none" stroke="${c}" stroke-width="5"/>${t(310, y + 18, en, { size: 11, fill: c, w: 900, anchor: 'end' })}${f(310, y + 35, where, { size: 9, fill: INK, w: 700, anchor: 'end' })}${f(18, y + 27, job, { size: 8.8, fill: MUTED, anchor: 'start' })}`; }).join('')}`, "Sphincters");
  };

  /* شیره معده */
  A['gastric-juice'] = () => {
    const mk = 'm' + (++UID), sh = 's' + (++UID);
    const st = 'M50 24 C74 10 104 22 110 54 C118 96 98 136 62 138 C32 140 12 124 12 100 C12 80 28 72 38 66 C46 60 40 38 50 24Z';
    return svg(360, 262, `<defs>${marker(mk, '#868e96')}${shadow(sh)}</defs>${f(180, 20, "The stomach turns food into chyme with gastric juice", { size: 11.5, fill: INK, w: 800 })}
      <path d="M100 80 C100 60 104 46 110 34" stroke="#ffa8a8" stroke-width="14" fill="none" stroke-linecap="round"/>
      <path d="M44 186 C26 192 20 204 24 218" stroke="#ffa8a8" stroke-width="13" fill="none" stroke-linecap="round"/>
      <g transform="translate(26 40) scale(1.42)"><path d="${st}" fill="#ffc9c9" stroke="#e03131" stroke-width="1.6" filter="url(#${sh})"/>
      <path d="M58 40 C72 36 92 44 98 60 M40 76 C56 66 84 72 94 92 M34 104 C52 96 72 104 84 120" stroke="#ff8787" stroke-width="2.2" fill="none"/></g>
      ${f(104, 152, 'rugae', { size: 9.5, fill: '#c92a2a', w: 800 })}${f(104, 166, "stomach folds", { size: 9 })}
      ${curve(mk, 'M24 222 C30 236 50 238 70 236', '#868e96', 2)}${lab(118, 238, 'chyme', '', { size: 11, fill: '#a07a1a' })}${f(118, 252, "semi-digested food to the duodenum", { size: 9 })}
      ${card(206, 36, 146, 196, '#f8f9fa')}
      ${lab(279, 58, 'HCl', "acid; activates pepsin", { size: 12, fill: '#c92a2a' })}
      ${lab(279, 106, 'pepsin', "protein digestion", { size: 12, fill: '#e8590c' })}
      ${lab(279, 154, 'intrinsic factor', "for absorbing B12", { size: 10.5, fill: '#7048e8' })}
      ${lab(279, 202, 'mucus', "protective layer of the wall", { size: 12, fill: '#1098ad' })}`, "gastric juice");
  };

  /* هر غذا کجا و با کدام آنزیم هضم می‌شود */
  A.enzymes = () => {
    const sh = 's' + (++UID);
    const rows = [["mouth", 'salivary amylase', "starch", '#e8590c'], ["stomach", 'pepsin (+ HCl)', "building-block nutrient", '#c92a2a'], ["duodenum", 'pancreatic amylase', "starch", '#a07a1a'], ["duodenum", 'lipase (+ bile)', "fat", '#2b8a3e'], ["duodenum", 'protease', "building-block nutrient", '#7048e8'], ["small intestine", 'villi', "absorbing digested nutrients", '#1c7ed6']];
    return svg(360, 292, `<defs>${shadow(sh)}</defs>${f(180, 20, "Where is each food digested?", { size: 11.5, fill: INK, w: 800 })}
      ${card(8, 30, 344, 26, '#343a40')}${f(320, 47, "Where", { size: 10, fill: '#fff', w: 800 })}${f(196, 47, "What", { size: 10, fill: '#fff', w: 800 })}${f(62, 47, "Acts on", { size: 10, fill: '#fff', w: 800 })}
      ${rows.map(([where, en, what, c], i) => { const y = 60 + i * 35; return `${card(8, y, 344, 30, i % 2 ? '#f8f9fa' : '#fff4e6', sh)}${f(320, y + 20, where, { size: 10, fill: INK, w: 700 })}${t(196, y + 20, en, { size: 11, fill: c, w: 900 })}${f(62, y + 20, what, { size: 9.5, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 284, "Enzyme names usually end in -ase: amylase, lipase, protease", { size: 9.5, fill: VIO, w: 700 })}`, "Enzymes");
  };
  /* ---------- روده‌ها و اندام‌های کمکی ---------- */
  /* سه بخش روده باریک */
  A.dji = () => {
    const sh = 's' + (++UID);
    const R = [['duodenum', "duodenum", "shortest; bile and pancreatic juice enter here", 'duoden/o', '#c2255c', 60], ['jejunum', "jejunum", "middle part; most digestion and absorption", 'jejun/o', '#a61e4d', 120], ['ileum', "ileum", "longest; absorbs B12 and bile salts", 'ile/o', '#862e9c', 160]];
    return svg(360, 262, `<defs>${shadow(sh)}</defs>${f(180, 20, "small intestine = D + J + I (from the stomach to the caecum)", { size: 11.5, fill: INK, w: 800 })}
      <rect x="8" y="34" width="344" height="30" rx="15" fill="#f1f3f5"/>
      ${(() => { let x = 352, out = ''; R.forEach(([en, fa, d, r, c, w]) => { x -= w * 344 / 340; out += `<rect x="${x.toFixed(1)}" y="34" width="${(w * 344 / 340).toFixed(1)}" height="30" fill="${c}" opacity=".85"/>${t(x + w / 2, 54, en, { size: 10.5, fill: '#fff', w: 900 })}`; }); return out; })()}
      ${f(352, 80, "start: the stomach’s pylorus", { size: 9, anchor: 'end' })}${f(8, 80, "end: the ileocaecal valve", { size: 9, anchor: 'start' })}
      ${R.map(([en, fa, d, r, c], i) => { const y = 92 + i * 50; return `${card(8, y, 344, 44, '#f8f9fa', sh)}<rect x="340" y="${y}" width="12" height="44" rx="6" fill="${c}"/>${f(330, y + 19, fa, { size: 11, fill: c, w: 900, anchor: 'end' })}${t(250, y + 19, r, { size: 10.5, fill: MUTED, anchor: 'middle' })}${f(330, y + 36, d, { size: 9, fill: INK, w: 700, anchor: 'end' })}`; }).join('')}
      ${f(180, 256, "jejunum means “empty”; don’t confuse ileum with ilium (pelvis)", { size: 9.5, fill: VIO, w: 700 })}`, "Parts of the small intestine");
  };

  /* پرز روده */
  A.villus = () => {
    const vill = (x, w) => `<path d="M${x} 210 V${110} Q${x} 86 ${x + w / 2} 86 Q${x + w} 86 ${x + w} 110 V210" fill="#ffd8a8" stroke="#e8590c" stroke-width="2"/>`;
    return svg(360, 250, `${f(180, 20, "villus: a finger-like absorbing projection in the small intestine wall", { size: 11.5, fill: INK, w: 800 })}
      ${vill(10, 40)}${vill(172, 40)}
      <path d="M62 210 V84 Q62 46 110 46 Q158 46 158 84 V210" fill="#ffe8cc" stroke="#e8590c" stroke-width="2.5"/>
      <path d="M82 210 V92 Q82 68 110 68 Q138 68 138 92 V210" fill="none" stroke="#e03131" stroke-width="3"/><path d="M89 210 V96 Q89 76 110 76 Q131 76 131 96 V210" fill="none" stroke="#1c7ed6" stroke-width="3"/>
      <path d="M110 210 V90" stroke="#69db7c" stroke-width="7" stroke-linecap="round"/>
      <rect x="6" y="210" width="210" height="18" fill="#f8c4a8"/>
      ${pin(110, 120, 228, 76, '#2b8a3e')}${lab(290, 72, 'lacteal', "lymph capillary: absorbs fat", { size: 11.5, fill: '#2b8a3e' })}
      ${pin(136, 150, 228, 132, '#c92a2a')}${lab(290, 128, 'capillaries', "blood capillary: sugars and proteins", { size: 11, fill: '#c92a2a' })}
      ${pin(64, 170, 228, 188)}${lab(290, 184, 'epithelium', "absorbing cells on the villus surface", { size: 11 })}
      ${f(180, 244, "millions of villi greatly enlarge the absorbing surface; the plural of villus is villi", { size: 9.5, fill: VIO, w: 700 })}`, "Intestinal villi");
  };

  /* نقشه روده بزرگ */
  A['colon-map'] = () => {
    const d = 'M96 236 V100 Q96 80 116 80 H244 Q264 80 264 100 V206 Q264 232 238 236 Q206 240 196 250 V266';
    return svg(360, 326, `${f(180, 20, "The large intestine: from the caecum to the anus", { size: 11.5, fill: INK, w: 800 })}
      ${f(180, 36, "front view; the patient’s right is on the left of the picture", { size: 9, fill: MUTED })}<g transform="translate(0 14)">
      <path d="${d}" stroke="${COLON}" stroke-width="26" fill="none" stroke-linejoin="round"/><path d="${d}" stroke="${COLON_D}" stroke-width="1.6" fill="none" stroke-dasharray="2 6"/>
      <ellipse cx="96" cy="244" rx="18" ry="14" fill="${COLON}"/><path d="M90 256 q-4 14 6 18" stroke="${COLON}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M60 220 C72 222 80 230 82 238" stroke="${GUT}" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M196 266 V292" stroke="#d9480f" stroke-width="12" stroke-linecap="round"/>
      ${lab(56, 160, 'ascending', "ascending", { size: 10.5, fill: '#d9480f' })}${lab(180, 54, 'transverse colon', "transverse colon", { size: 10.5, fill: '#d9480f', gap: 11 })}${lab(306, 160, 'descending', "descending", { size: 10.5, fill: '#d9480f' })}
      ${pin(102, 86, 56, 74)}${lab(44, 60, 'hepatic flexure', "hepatic flexure", { size: 9, fill: '#a5443f' })}
      ${pin(258, 86, 304, 74)}${lab(316, 60, 'splenic flexure', "splenic flexure", { size: 9, fill: '#7048e8' })}
      ${pin(232, 236, 300, 236)}${lab(316, 232, 'sigmoid', "sigmoid (S)", { size: 10, fill: '#d9480f' })}
      ${pin(86, 248, 40, 262)}${lab(40, 280, 'cecum', "cecum", { size: 10 })}
      ${pin(96, 272, 136, 300)}${lab(126, 296, 'appendix', '', { size: 9.5 })}
      ${pin(62, 221, 30, 200)}${lab(30, 196, 'ileum', '', { size: 9, fill: GUT_D })}
      ${pin(196, 276, 260, 276)}${lab(290, 280, 'rectum', "rectum", { size: 10 })}${f(196, 306, "anus • anal opening", { size: 9, fill: INK })}</g>`, "Map of the large intestine");
  };

  /* چهار ربع شکم */
  A.quadrants = () => {
    const g = 'k' + (++UID);
    const Q = [[96, 'RUQ', "right upper quadrant", "liver, gallbladder", '#a5443f', 112], [264, 'LUQ', "left upper quadrant", "stomach, spleen", '#e03131', 112], [96, 'RLQ', "right lower quadrant", "appendix, caecum", '#d9480f', 204], [264, 'LLQ', "left lower quadrant", "sigmoid", '#7048e8', 204]];
    return svg(360, 300, `<defs>${linear(g, SKIN[0], SKIN[1])}</defs>${f(180, 20, "The four quadrants of the abdomen (the lines cross at the navel)", { size: 11.5, fill: INK, w: 800 })}
      <path d="M50 52 Q46 140 60 262 H300 Q314 140 310 52 Z" fill="url(#${g})" stroke="${SKIN_LINE}"/>
      <path d="M180 52 V262 M50 160 H310" stroke="#495057" stroke-width="2" stroke-dasharray="6 4"/><circle cx="180" cy="160" r="4" fill="#c98f6b"/>
      ${Q.map(([x, ab, fa, org, c, y]) => `${t(x, y - 12, ab, { size: 17, fill: c, w: 900 })}${f(x, y + 8, fa, { size: 10, fill: INK, w: 800 })}${f(x, y + 26, org, { size: 9.5, fill: c, w: 700 })}`).join('')}
      ${f(96, 282, "patient’s right", { size: 10, fill: '#1c7ed6', w: 800 })}${f(264, 282, "patient’s left", { size: 10, fill: '#1c7ed6', w: 800 })}
      ${f(180, 296, "in a front view, the patient’s right is on the left of the picture", { size: 9, fill: MUTED })}`, "Abdominal quadrants");
  };

  /* مسیر صفرا و شیره پانکراس */
  A['bile-flow'] = () => {
    const mk = 'm' + (++UID), sh = 's' + (++UID);
    const box = (x, y, w, en, fa, c, bg) => `${card(x, y, w, 40, bg, sh)}${t(x + w / 2, y + 17, en, { size: 10.5, fill: c, w: 900 })}${f(x + w / 2, y + 33, fa, { size: 9, fill: INK, w: 700 })}`;
    return svg(360, 300, `<defs>${marker(mk, '#2b8a3e')}${shadow(sh)}</defs>${f(180, 20, "Where does bile go?", { size: 11.5, fill: INK, w: 800 })}
      ${box(220, 34, 132, 'liver', "liver: makes bile", '#a5443f', '#fff0f0')}
      ${box(220, 100, 132, 'hepatic duct', "hepatic duct", '#2b8a3e', '#ebfbee')}
      ${box(16, 100, 140, 'gallbladder', "storing and concentrating", '#2b8a3e', '#ebfbee')}
      ${box(16, 166, 140, 'cystic duct', "cystic duct", '#2b8a3e', '#ebfbee')}
      ${box(220, 166, 132, 'common bile duct', "common bile duct", '#087f5b', '#e6fcf5')}
      ${box(220, 236, 132, 'duodenum', "duodenum: fat digestion", '#c2255c', '#fff0f6')}
      ${box(16, 236, 140, 'pancreatic duct', "pancreatic juice", '#a07a1a', '#fff9db')}
      ${arrow(mk, 286, 76, 286, 98)}${arrow(mk, 286, 142, 286, 164)}${arrow(mk, 286, 208, 286, 234)}
      ${curve(mk, 'M88 166 C88 156 88 150 88 144', '#2b8a3e', 2)}${f(118, 156, "out", { size: 8.5, fill: '#2b8a3e' })}
      ${curve(mk, 'M158 186 H218', '#2b8a3e', 2)}${f(188, 180, "back", { size: 8.5, fill: '#2b8a3e' })}
      ${curve(mk, 'M158 256 H218', '#a07a1a', 2)}
      ${f(188, 290, "the shared opening in the duodenum: the papilla and sphincter of Oddi", { size: 9.5, fill: VIO, w: 700 })}`, "The path of bile");
  };

  /* دو کار پانکراس */
  A['pancreas-jobs'] = () => {
    const sh = 's' + (++UID);
    return svg(360, 244, `<defs>${shadow(sh)}</defs>${f(180, 20, "The pancreas: both a digestive and a hormone gland", { size: 11.5, fill: INK, w: 800 })}
      <path d="M60 70 C110 52 230 50 300 64 C320 68 324 84 306 90 C240 104 130 100 70 98 C44 96 42 76 60 70Z" fill="#ffe066" stroke="#e8c468" stroke-width="2"/>
      ${dots(150, 78, 40, 16, '#f59f00', 2.2, 5)}${dots(250, 76, 30, 10, '#f59f00', 2.2, 9)}
      ${card(186, 112, 166, 120, '#fff9db', sh)}${card(8, 112, 166, 120, '#e7f5ff', sh)}
      ${f(269, 134, "exocrine (into the duodenum)", { size: 10.5, fill: '#a07a1a', w: 800 })}
      ${t(269, 156, 'amylase', { size: 11, fill: '#e8590c' })}${f(269, 170, "starch", { size: 9 })}${t(269, 188, 'lipase', { size: 11, fill: '#2b8a3e' })}${f(269, 202, "fat", { size: 9 })}${t(269, 220, 'protease • bicarbonate', { size: 9.5, fill: '#7048e8' })}
      ${f(91, 134, "endocrine (into the blood)", { size: 10.5, fill: '#1864ab', w: 800 })}
      ${t(91, 160, 'insulin', { size: 12, fill: '#1c7ed6' })}${f(91, 176, "lowers blood sugar", { size: 9 })}${t(91, 202, 'glucagon', { size: 11, fill: '#1c7ed6' })}${f(91, 218, "raises blood sugar", { size: 9 })}`, "Jobs of the pancreas");
  };

  /* کارهای کبد */
  A['liver-jobs'] = () => {
    const sh = 's' + (++UID);
    const R = [["making bile", 'bile', '🟢'], ["storing sugar", 'glycogen', '🍬'], ["detoxification", 'detoxification', '🧹'], ["making blood proteins", 'albumin, clotting factors', '🩸'], ["processing absorbed nutrients", 'hepatic portal system', '🔁'], ["getting rid of bilirubin", "from old red cells", '🟡']];
    return svg(360, 246, `<defs>${shadow(sh)}</defs>${f(180, 20, "The liver: the body’s largest gland, essential for life", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([fa, en, ic], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 68; return `${card(x, y, 168, 58, '#fff0f0', sh)}<text x="${x + 148}" y="${y + 34}" font-size="18" text-anchor="middle">${ic}</text>${f(x + 128, y + 26, fa, { size: 10.5, fill: '#a5443f', w: 800, anchor: 'end' })}${t(x + 128, y + 44, en, { size: 9, fill: MUTED, anchor: 'end' })}`; }).join('')}`, "Jobs of the liver");
  };
  /* ---------- بیماری‌های دهان، مری و معده ---------- */
  /* واژه‌های استفراغ و برگشت */
  A['upper-sx'] = () => {
    const sh = 's' + (++UID);
    const R = [['nausea', "nausea; the feeling before vomiting", '🤢', '#5c940d'], ['emesis', "vomiting", '🤮', '#e67700'], ['hematemesis', "vomiting blood", '🩸', '#c92a2a'], ['hyperemesis', "severe, repeated vomiting", '🔁', '#d9480f'],
      ['regurgitation', "food returning to the mouth without effort", '↩️', '#7048e8'], ['eructation', "belching", '💨', '#1098ad'], ['pyrosis', "burning behind the breastbone (heartburn)", '🔥', '#e03131'], ['dyspepsia', "indigestion", '😣', '#a61e4d']];
    return svg(360, 270, `<defs>${shadow(sh)}</defs>${f(180, 20, "Upper digestive symptoms", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ic, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 58; return `${card(x, y, 168, 50, '#f8f9fa', sh)}<text x="${x + 152}" y="${y + 30}" font-size="16" text-anchor="middle">${ic}</text>${t(x + 10, y + 21, en, { size: 12, fill: c, w: 900, anchor: 'start' })}${f(x + 10, y + 39, fa, { size: 9, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, "Upper digestive symptoms");
  };

  /* خانواده ‎-phagia و ‎-pepsia */
  A['phagia-family'] = () => {
    const sh = 's' + (++UID);
    const R = [['a-', 'aphagia', "inability to swallow", '#c92a2a'], ['dys-', 'dysphagia', "difficulty swallowing", '#e8590c'], ['odyn/o', 'odynophagia', "painful swallowing", '#d6336c'], ['poly-', 'polyphagia', "overeating", '#2b8a3e'], ['aer/o', 'aerophagia', "swallowing air", '#1098ad']];
    return svg(360, 270, `<defs>${shadow(sh)}</defs>${f(180, 20, "-phagia = eating, swallowing • -pepsia = digestion", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([p, w, fa, c], i) => { const y = 32 + i * 36; return `${card(8, y, 344, 30, '#f8f9fa', sh)}${t(18, y + 20, `<tspan fill="${c}" font-weight="900">${p}</tspan> + -phagia = <tspan fill="${INK}" font-weight="900">${w}</tspan>`, { size: 11, fill: MUTED, w: 700, anchor: 'start' })}${f(342, y + 20, fa, { size: 10, fill: c, w: 800, anchor: 'end' })}`; }).join('')}
      ${card(8, 218, 168, 44, '#fff4e6', sh)}${card(184, 218, 168, 44, '#fff4e6', sh)}
      ${t(268, 236, 'dyspepsia', { size: 11.5, fill: '#e8590c', w: 900 })}${f(268, 253, "indigestion", { size: 9.5, fill: INK, w: 700 })}
      ${t(92, 236, 'bradypepsia', { size: 11.5, fill: '#e8590c', w: 900 })}${f(92, 253, "slow digestion", { size: 9.5, fill: INK, w: 700 })}`, "The -phagia family");
  };

  /* پوسیدگی دندان و بیماری لثه */
  A['tooth-decay'] = () => {
    const tooth = (x, stage) => {
      const hole = ['', `<circle cx="${x + 30}" cy="40" r="5" fill="#495057"/>`, `<path d="M${x + 24} 34 q6 22 12 0" fill="#495057"/><path d="M${x + 30} 40 v18" stroke="#495057" stroke-width="5"/>`, `<path d="M${x + 22} 34 q8 30 16 0" fill="#495057"/><path d="M${x + 30} 40 v34" stroke="#495057" stroke-width="7"/><ellipse cx="${x + 30}" cy="128" rx="12" ry="9" fill="#ffd43b" stroke="#e67700" stroke-width="1.5"/>`][stage];
      return `<path d="M${x} 40 C${x} 26 ${x + 14} 22 ${x + 30} 30 C${x + 46} 22 ${x + 60} 26 ${x + 60} 40 C${x + 60} 64 ${x + 54} 74 ${x + 52} 96 C${x + 50} 120 ${x + 44} 130 ${x + 38} 130 C${x + 32} 130 ${x + 32} 110 ${x + 30} 110 C${x + 28} 110 ${x + 28} 130 ${x + 22} 130 C${x + 16} 130 ${x + 10} 120 ${x + 8} 96 C${x + 6} 74 ${x} 64 ${x} 40Z" fill="#fff8ec" stroke="#c9b48a" stroke-width="2"/><path d="M${x + 22} 46 Q${x + 30} 40 ${x + 38} 46 V100 Q${x + 30} 106 ${x + 22} 100Z" fill="#ffc9c9" opacity=".8"/>${hole}<rect x="${x - 4}" y="74" width="68" height="60" fill="#f783ac" opacity=".35"/>`;
    };
    const S = [['plaque', "bacterial plaque", '#868e96'], ['enamel caries', "decay of the enamel", '#e8590c'], ['dentin caries', "reaching the dentine", '#d9480f'], ['pulp + abscess', "pulp infection and abscess", '#c92a2a']];
    return svg(360, 250, `${f(180, 20, "dental caries: decay from the enamel to the pulp", { size: 11.5, fill: INK, w: 800 })}
      ${S.map(([en, fa, c], i) => { const x = 280 - i * 88; return `<g transform="translate(0 20)">${tooth(x, i)}</g>${t(x + 30, 178, en, { size: 9.5, fill: c, w: 900 })}${f(x + 30, 193, fa, { size: 9, fill: INK, w: 700 })}`; }).join('')}
      <rect x="8" y="206" width="344" height="38" rx="10" fill="#fff0f6"/>${f(180, 222, "gingivitis is gum inflammation; if it progresses, periodontitis", { size: 9.5, fill: '#c2255c', w: 800 })}${f(180, 238, "destroys the tooth’s supporting tissues and the tooth falls out", { size: 9, fill: INK })}`, "tooth decay");
  };

  /* ضایعه‌های دهان */
  A['mouth-lesions'] = () => {
    const sh = 's' + (++UID);
    const R = [['aphthous ulcer', "aphthous ulcer: a small painful sore", 'canker sore', '#e8590c'], ['thrush', "thrush: a white fungal patch", 'Candida', '#1c7ed6'], ['leukoplakia', "a firm white patch; precancerous", "leuk/o = white", '#495057'],
      ['herpes labialis', "cold sore", 'HSV-1', '#c2255c'], ['cheilosis', "cracking at the corners of the mouth", "lack of vitamin B", '#d6336c'], ['Vincent disease', "ulcerative gum inflammation", 'trench mouth', '#7048e8']];
    return svg(360, 246, `<defs>${shadow(sh)}</defs>${f(180, 20, "Six common mouth lesions", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ex, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 70; return `${card(x, y, 168, 62, '#f8f9fa', sh)}<rect x="${x + 160}" y="${y}" width="8" height="62" rx="4" fill="${c}"/>${t(x + 150, y + 21, en, { size: 11.5, fill: c, w: 900, anchor: 'end' })}${f(x + 150, y + 39, fa, { size: 9, fill: INK, w: 700, anchor: 'end' })}${f(x + 150, y + 55, ex, { size: 8.5, fill: MUTED, anchor: 'end' })}`; }).join('')}`, "Mouth lesions");
  };

  /* زنجیره ریفلاکس */
  A['gerd-chain'] = () => {
    const mk = 'm' + (++UID), sh = 's' + (++UID);
    const S = [['LES weak', "a slack lower oesophageal sphincter", '#e8590c'], ['reflux', "acid flowing back into the oesophagus", '#e67700'], ['heartburn', "heartburn (pyrosis)", '#e03131'], ['esophagitis', "inflammation of the oesophagus", '#c92a2a'], ['Barrett esophagus', "precancerous change in the oesophageal lining", '#862e9c']];
    return svg(360, 312, `<defs>${marker(mk)}${shadow(sh)}</defs>${f(180, 20, "GERD: when reflux becomes chronic", { size: 11.5, fill: INK, w: 800 })}
      ${S.map(([en, fa, c], i) => { const y = 34 + i * 52; return `${card(60, y, 240, 40, '#fff', sh)}<rect x="60" y="${y}" width="240" height="40" rx="14" fill="none" stroke="${c}" stroke-width="2"/>${t(180, y + 17, en, { size: 11.5, fill: c, w: 900 })}${f(180, y + 33, fa, { size: 9.5, fill: INK, w: 700 })}${i < 4 ? arrow(mk, 180, y + 42, 180, y + 50) : ''}`; }).join('')}
      ${f(180, 304, "treatment: PPI, H2 blocker, antacid", { size: 9.5, fill: '#1098ad', w: 800 })}`, "The GERD chain");
  };

  /* زخم: علت‌ها و عمق */
  A['ulcer-depth'] = () => {
    const layers = [['mucosa', '#ffc9c9'], ['submucosa', '#ffe3e3'], ['muscle', '#f8a5a5'], ['serosa', '#ffd8a8']];
    const col = (x, depth, en, fa, c) => `${layers.map(([n, bg], i) => `<rect x="${x}" y="${52 + i * 26}" width="84" height="26" fill="${bg}"/>`).join('')}<path d="M${x + 24} 52 L${x + 34} ${52 + depth} L${x + 50} ${52 + depth} L${x + 60} 52Z" fill="#fff" stroke="#c92a2a" stroke-width="1.5"/>${t(x + 42, 182, en, { size: 10.5, fill: c, w: 900 })}${f(x + 42, 197, fa, { size: 9, fill: INK, w: 700 })}`;
    return svg(360, 262, `${f(180, 20, "How deep is the ulcer?", { size: 11.5, fill: INK, w: 800 })}
      ${col(266, 14, 'erosion', "mucosa only", '#e8590c')}${col(176, 64, 'ulcer', "down to the muscle", '#c92a2a')}${col(86, 104, 'perforation', "a hole through a wall", '#862e9c')}
      ${layers.map(([n], i) => t(80, 69 + i * 26, n, { size: 8.5, fill: MUTED, anchor: 'end' })).join('')}
      <rect x="8" y="208" width="344" height="48" rx="10" fill="#fff0f6"/>${f(180, 226, "The two main causes of peptic ulcer: H. pylori and NSAIDs", { size: 10, fill: '#c2255c', w: 800 })}${f(180, 245, "A peptic ulcer is found in the oesophagus, stomach (gastric) or duodenum (duodenal)", { size: 9, fill: INK })}`, "Ulcer depth");
  };

  /* تنگی پیلور در نوزاد */
  A['pyloric-stenosis'] = () => {
    const mk = 'm' + (++UID);
    const st = 'M50 24 C74 10 104 22 110 54 C118 96 98 136 62 138 C32 140 12 124 12 100 C12 80 28 72 38 66 C46 60 40 38 50 24Z';
    return svg(360, 236, `<defs>${marker(mk, '#e8590c')}</defs>${f(180, 20, "pyloric stenosis: a thick, narrow pylorus", { size: 11.5, fill: INK, w: 800 })}
      <path d="M164 62 C164 50 168 42 174 36" stroke="#ffa8a8" stroke-width="12" fill="none" stroke-linecap="round"/>
      <g transform="translate(110 36) scale(1.2)"><path d="${st}" fill="#ffe3e3" stroke="#e03131" stroke-width="2"/></g>
      <path d="M108 160 C86 164 78 180 82 204" stroke="#ffa8a8" stroke-width="13" fill="none" stroke-linecap="round"/>
      <rect x="102" y="146" width="30" height="26" rx="11" fill="#e03131"/><path d="M104 159 H130" stroke="#fff" stroke-width="2.5"/>
      ${curve(mk, 'M170 70 C160 40 140 34 120 38', '#e8590c', 3)}${curve(mk, 'M178 70 C192 44 206 36 226 34', '#e8590c', 3)}
      ${pin(110, 150, 66, 118, '#c92a2a')}${lab(56, 102, 'hypertrophic pylorus', "thick pyloric muscle", { size: 9.5, fill: '#c92a2a' })}
      ${f(296, 52, 'projectile vomiting', { size: 9.5, fill: '#e8590c', w: 800 })}${f(296, 68, "projectile vomiting", { size: 9.5, fill: INK })}
      ${f(180, 214, "food cannot pass from the stomach to the duodenum; treatment: pyloromyotomy", { size: 9.5, fill: VIO, w: 700 })}${f(180, 230, "stenosis = narrowing", { size: 9, fill: MUTED })}`, "pyloric stenosis");
  };
  /* ---------- بیماری‌های روده، کبد و صفرا ---------- */
  /* کرون و کولیت اولسراتیو */
  A['ibd-compare'] = () => {
    const sh = 's' + (++UID);
    const colon = (x, patchy) => { const segs = []; for (let i = 0; i < 9; i++) { const on = patchy ? [1, 4, 5, 8].includes(i) : i >= 4; segs.push(`<rect x="${x}" y="${66 + i * 14}" width="38" height="13" rx="4" fill="${on ? '#e03131' : COLON}"/>`); } return segs.join(''); };
    const R = [["Site", "anywhere in the digestive tract", "colon and rectum only"], ["Pattern", "patchy (skip lesions)", "continuous from the rectum upwards"], ["Depth", "all layers of the wall", "mucosa and submucosa"], ["Hallmark", "fistula and stricture", "bloody diarrhoea"]];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, "IBD: two chronic inflammatory bowel diseases", { size: 11.5, fill: INK, w: 800 })}
      ${t(270, 52, 'Crohn disease', { size: 12, fill: '#c2255c', w: 900 })}${t(90, 52, 'ulcerative colitis', { size: 12, fill: '#7048e8', w: 900 })}
      ${colon(251, true)}${colon(71, false)}
      ${f(270, 202, "patchy involvement", { size: 9, fill: MUTED })}${f(90, 202, "continuous involvement", { size: 9, fill: MUTED })}
      ${R.map(([k, a, b], i) => { const y = 212 + i * 21; return `<rect x="8" y="${y}" width="344" height="19" rx="5" fill="${i % 2 ? '#f8f9fa' : '#f3f0ff'}"/>${f(352 - 4, y + 13, k, { size: 8.5, fill: MUTED, w: 800, anchor: 'end' })}${f(236, y + 13, a, { size: 8.5, fill: '#a61e4d', w: 700 })}${f(80, y + 13, b, { size: 8.5, fill: '#5f3dc4', w: 700 })}`; }).join('')}`, "Crohn disease versus colitis");
  };

  /* رنگ مدفوع چه می‌گوید */
  A['stool-colors'] = () => {
    const sh = 's' + (++UID);
    const R = [['melena', "black and tarry", "upper GI bleeding (stomach, duodenum)", '#212529'], ['hematochezia', "bright red blood", "lower GI bleeding (colon, rectum, haemorrhoids)", '#e03131'], ['steatorrhea', "greasy and floating", "fat not absorbed (pancreas, coeliac disease)", '#ffe066'], ['clay-colored', "pale, clay-coloured", "bile not reaching the gut (gallstone)", '#d8cfc4'], ['occult blood', "occult blood", "seen only with the FOBT test", '#a0522d']];
    return svg(360, 284, `<defs>${shadow(sh)}</defs>${f(180, 20, "What does the stool tell you?", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, why, c], i) => { const y = 32 + i * 50; return `${card(8, y, 344, 44, '#f8f9fa', sh)}<ellipse cx="330" cy="${y + 22}" rx="13" ry="10" fill="${c}" stroke="#868e96" stroke-width="1"/>${t(308, y + 18, en, { size: 11.5, fill: INK, w: 900, anchor: 'end' })}${f(308, y + 35, fa, { size: 9, fill: MUTED, w: 700, anchor: 'end' })}${f(20, y + 27, why, { size: 8.8, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, "Stool colour");
  };

  /* چهار نوع انسداد روده */
  A.obstruction = () => {
    const sh = 's' + (++UID);
    const ic = {
      volvulus: `<path d="M0 10 C20 10 24 -14 40 -6 C56 2 30 26 46 30 C60 34 70 14 84 14" stroke="${COLON}" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M34 -4 C52 6 34 20 40 26" stroke="${COLON_D}" stroke-width="2" fill="none"/>`,
      intus: `<rect x="0" y="0" width="84" height="22" rx="11" fill="${COLON}"/><rect x="30" y="3" width="34" height="16" rx="8" fill="#e8a87c" stroke="${COLON_D}" stroke-width="1.5"/><path d="M20 11 h40" stroke="${COLON_D}" stroke-width="1.5" stroke-dasharray="3 2"/>`,
      ileus: `<rect x="0" y="0" width="84" height="22" rx="11" fill="${COLON}"/><text x="42" y="16" font-size="12" text-anchor="middle">⏸️</text>`,
      hernia: `<path d="M0 -4 H84" stroke="#e9b994" stroke-width="5"/><path d="M30 -4 C30 22 54 22 54 -4" fill="${COLON}" stroke="${COLON_D}" stroke-width="1.5"/><path d="M0 -14 H84" stroke="#e9b994" stroke-width="2"/>`
    };
    const R = [['volvulus', "bowel twisting around itself", ic.volvulus, '#d9480f'], ['intussusception', "bowel telescoping into the next part", ic.intus, '#c2255c'], ['ileus', "peristalsis stopping", ic.ileus, '#1c7ed6'], ['hernia', "bowel pushing through the wall", ic.hernia, '#2b8a3e']];
    return svg(360, 266, `<defs>${shadow(sh)}</defs>${f(180, 20, "intestinal obstruction: four ways the bowel gets blocked", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, g, c], i) => { const y = 32 + i * 56; return `${card(8, y, 344, 48, '#f8f9fa', sh)}<g transform="translate(20 ${y + 14})">${g}</g>${t(338, y + 20, en, { size: 12, fill: c, w: 900, anchor: 'end' })}${f(338, y + 38, fa, { size: 9.5, fill: INK, w: 700, anchor: 'end' })}`; }).join('')}`, "bowel obstruction");
  };

  /* پنج نوع هپاتیت ویروسی */
  A.hepatitis = () => {
    const sh = 's' + (++UID);
    const R = [['A', "faecal-oral (contaminated water and food)", "yes", "no", '#2b8a3e'], ['B', "blood, sexual, mother to baby", "yes", "yes", '#c92a2a'], ['C', "blood (shared needles)", "no", "yes; treatable", '#862e9c'], ['D', "blood; only together with B", "through B", "yes", '#e8590c'], ['E', "faecal-oral (contaminated water)", "no", "no", '#1c7ed6']];
    return svg(360, 266, `<defs>${shadow(sh)}</defs>${f(180, 20, "Viral hepatitis A to E", { size: 11.5, fill: INK, w: 800 })}
      ${card(8, 30, 344, 26, '#343a40')}${f(332, 47, "Type", { size: 9.5, fill: '#fff', w: 800 })}${f(222, 47, "Route of transmission", { size: 9.5, fill: '#fff', w: 800 })}${f(110, 47, "vaccine", { size: 9.5, fill: '#fff', w: 800 })}${f(46, 47, "long-lasting (chronic)", { size: 9.5, fill: '#fff', w: 800 })}
      ${R.map(([k, how, vac, chr, c], i) => { const y = 60 + i * 38; return `${card(8, y, 344, 32, i % 2 ? '#f8f9fa' : '#fff', sh)}<circle cx="332" cy="${y + 16}" r="12" fill="${c}"/>${t(332, y + 21, 'HAV HBV HCV HDV HEV'.split(' ')[i].slice(0, 0) + k, { size: 13, fill: '#fff', w: 900 })}${f(222, y + 20, how, { size: 9, fill: INK, w: 700 })}${f(110, y + 20, vac, { size: 9, fill: vac === "no" ? '#c92a2a' : '#2b8a3e', w: 800 })}${f(46, y + 20, chr, { size: 8.5, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 260, "A and E spread faecal-orally; B, C and D through blood", { size: 9.5, fill: VIO, w: 700 })}`, "Hepatitis types");
  };

  /* bilirubin و یرقان */
  A.bilirubin = () => {
    const mk = 'm' + (++UID), sh = 's' + (++UID);
    const box = (x, y, en, fa, c, bg) => `${card(x, y, 104, 42, bg, sh)}${t(x + 52, y + 18, en, { size: 10.5, fill: c, w: 900 })}${f(x + 52, y + 34, fa, { size: 9, fill: INK, w: 700 })}`;
    return svg(360, 280, `<defs>${marker(mk)}${shadow(sh)}</defs>${f(180, 20, "Where does bilirubin come from and why does jaundice happen?", { size: 11.5, fill: INK, w: 800 })}
      ${box(248, 36, 'old RBC', "old red cell", '#c92a2a', '#fff0f0')}${box(128, 36, 'bilirubin', "yellow pigment", '#e67700', '#fff9db')}${box(8, 36, 'liver', "liver", '#a5443f', '#fff0f0')}
      ${box(8, 112, 'bile', "bile", '#2b8a3e', '#ebfbee')}${box(128, 112, 'intestine', "intestine", '#d9480f', '#fff4e6')}${box(248, 112, 'brown stool', "normal colour", '#7a4a1a', '#f8f0e8')}
      ${arrow(mk, 246, 57, 234, 57)}${arrow(mk, 126, 57, 114, 57)}${arrow(mk, 60, 80, 60, 110)}${arrow(mk, 114, 133, 126, 133)}${arrow(mk, 234, 133, 246, 133)}
      <rect x="8" y="170" width="344" height="104" rx="12" fill="#fff9db" stroke="#fab005" stroke-width="1.5"/>
      ${f(180, 192, "If the liver is diseased or the bile duct is blocked:", { size: 10.5, fill: '#e67700', w: 800 })}
      ${t(180, 214, 'hyperbilirubinemia → jaundice (icterus)', { size: 11, fill: '#e67700', w: 900 })}
      ${f(180, 236, "yellow skin and whites of the eyes, dark urine", { size: 10, fill: INK, w: 700 })}
      ${f(180, 258, "If bile does not reach the gut, the stool turns pale (clay-colored)", { size: 9.5, fill: INK, w: 700 })}`, "Bilirubin and jaundice");
  };

  /* سیروز و پیامدهایش */
  A['cirrhosis-chain'] = () => {
    const mk = 'm' + (++UID), sh = 's' + (++UID);
    const R = [['esophageal varices', "swollen oesophageal veins; bleeding", '#c92a2a'], ['ascites', "fluid in the abdomen", '#1c7ed6'], ['splenomegaly', "enlarged spleen", '#7048e8'], ['jaundice', "Jaundice", '#e67700']];
    return svg(360, 280, `<defs>${marker(mk)}${shadow(sh)}</defs>${f(180, 20, "cirrhosis: a scarred, hardened liver", { size: 11.5, fill: INK, w: 800 })}
      ${card(110, 34, 140, 48, '#fff0f0', sh)}${t(180, 54, 'cirrhosis', { size: 13, fill: '#a5443f', w: 900 })}${f(180, 72, "alcohol, hepatitis B and C, fat", { size: 9, fill: INK })}
      ${arrow(mk, 180, 84, 180, 104)}
      ${card(90, 106, 180, 44, '#f3f0ff', sh)}${t(180, 125, 'portal hypertension', { size: 11.5, fill: '#5f3dc4', w: 900 })}${f(180, 142, "high pressure in the portal vein", { size: 9, fill: INK })}
      ${R.map(([en, fa, c], i) => { const x = 8 + (3 - i) * 88; return `${arrow(mk, 180, 152, x + 40, 180)}${card(x, 182, 80, 56, '#f8f9fa', sh)}${t(x + 40, 204, en.split(' ')[0], { size: 9.5, fill: c, w: 900 })}${en.includes(' ') ? t(x + 40, 216, en.split(' ')[1], { size: 9.5, fill: c, w: 900 }) : ''}${f(x + 40, 232, fa, { size: 8.5, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 268, "cirrh/o means yellowish-orange; the colour of a cirrhotic liver", { size: 9.5, fill: VIO, w: 700 })}`, "Consequences of cirrhosis");
  };

  /* سنگ و التهاب صفرا: کدام واژه کجا؟ */
  A['gallstone-terms'] = () => {
    const sh = 's' + (++UID);
    return svg(360, 268, `<defs>${shadow(sh)}${linear('lv' + UID, '#c0504d', '#8f2d2a', true)}</defs>${f(180, 20, "Each term points to a place on the bile route", { size: 11.5, fill: INK, w: 800 })}
      <path d="M96 40 C130 30 230 30 262 46 C280 58 262 86 226 96 C186 108 120 110 104 100 C84 88 80 50 96 40Z" fill="url(#lv${UID})"/>
      <path d="M180 92 V140 C180 160 190 176 206 186" stroke="#2f9e44" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M180 126 C162 126 150 132 146 146" stroke="#2f9e44" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M126 146 C126 132 150 132 156 146 C162 168 148 188 136 184 C124 180 122 160 126 146Z" fill="#69db7c" stroke="#2b8a3e" stroke-width="2"/>
      <circle cx="136" cy="164" r="4" fill="#e8c468" stroke="#b8923a"/><circle cx="144" cy="172" r="3.5" fill="#e8c468" stroke="#b8923a"/><circle cx="196" cy="176" r="4.5" fill="#e8c468" stroke="#b8923a"/>
      <path d="M206 186 C230 200 250 214 250 240" stroke="#f4a3a8" stroke-width="16" fill="none" stroke-linecap="round"/>
      ${pin(140, 168, 52, 150, '#b8923a')}${lab(54, 132, 'cholelithiasis', "gallbladder stones", { size: 10.5, fill: '#a07a1a' })}
      ${pin(150, 150, 52, 206, '#2b8a3e')}${lab(54, 222, 'cholecystitis', "inflammation of the gallbladder", { size: 10.5, fill: '#2b8a3e' })}
      ${pin(198, 176, 300, 172, '#b8923a')}${lab(296, 190, 'choledocholithiasis', "stone in the common duct", { size: 10, fill: '#a07a1a' })}
      ${pin(180, 112, 300, 112, '#087f5b')}${lab(300, 128, 'cholangitis', "inflammation of the bile ducts", { size: 10.5, fill: '#087f5b' })}
      ${f(180, 260, "colicky RUQ pain after a fatty meal = biliary colic", { size: 9.5, fill: VIO, w: 700 })}`, "Bile terms");
  };

  /* جای فتق‌ها */
  A['hernia-sites'] = () => {
    const g = 'k' + (++UID);
    return svg(360, 300, `<defs>${linear(g, SKIN[0], SKIN[1])}</defs>${f(180, 20, "hernia: each hernia is named after its location", { size: 11.5, fill: INK, w: 800 })}<g transform="translate(0 18)">
      ${torso(180, 18, g)}
      <path d="M140 92 Q180 78 220 92" stroke="#c98f6b" stroke-width="2.5" fill="none"/>${f(238, 86, "muscle between chest and abdomen", { size: 8.5 })}
      <circle cx="172" cy="94" r="9" fill="#ff8787" stroke="#e03131" stroke-width="1.5"/>
      <circle cx="180" cy="180" r="9" fill="${COLON}" stroke="${COLON_D}" stroke-width="1.5"/>
      <ellipse cx="142" cy="246" rx="9" ry="12" fill="${COLON}" stroke="${COLON_D}" stroke-width="1.5" transform="rotate(30 142 246)"/>
      <circle cx="226" cy="168" r="8" fill="none" stroke="#868e96" stroke-width="1.5" stroke-dasharray="3 2"/>
      ${pin(170, 94, 60, 84)}${lab(50, 74, 'hiatal hernia', "stomach through the diaphragm opening", { size: 10, fill: '#e03131' })}
      ${pin(180, 180, 300, 196)}${lab(310, 212, 'umbilical hernia', "umbilical hernia", { size: 10, fill: COLON_D })}
      ${pin(142, 246, 60, 238)}${lab(52, 222, 'inguinal hernia', "inguinal hernia", { size: 10, fill: COLON_D })}
      ${pin(226, 168, 300, 140)}${lab(310, 124, 'incisional hernia', "at a surgical incision site", { size: 9.5, fill: '#495057' })}
      </g>${f(180, 294, "strangulated: blood supply cut off; emergency", { size: 9.5, fill: '#c92a2a', w: 800 })}`, "Where hernias occur");
  };

  /* از پولیپ تا سرطان و طبقه‌بندی Dukes */
  A.dukes = () => {
    const layers = [['mucosa', '#ffc9c9'], ['submucosa', '#ffe3e3'], ['muscle', '#f8a5a5'], ['serosa', '#ffd8a8']];
    const col = (x, depth, k, fa, nodes) => `${layers.map(([n, bg], i) => `<rect x="${x}" y="${60 + i * 26}" width="84" height="26" fill="${bg}"/>`).join('')}<path d="M${x + 22} 60 C${x + 22} 40 ${x + 62} 40 ${x + 62} 60 L${x + 58} ${60 + depth} L${x + 26} ${60 + depth}Z" fill="#862e9c" opacity=".85"/>${nodes ? `<circle cx="${x + 70}" cy="186" r="7" fill="#862e9c"/><circle cx="${x + 54}" cy="192" r="5" fill="#862e9c"/>` : ''}${t(x + 42, 214, 'Dukes ' + k, { size: 11, fill: '#862e9c', w: 900 })}${f(x + 42, 230, fa, { size: 9, fill: INK, w: 700 })}`;
    return svg(360, 262, `${f(180, 20, "Colorectal cancer: the deeper, the more advanced", { size: 11.5, fill: INK, w: 800 })}
      ${col(266, 22, 'A', "confined to the mucosa", false)}${col(176, 70, 'B', "into the muscle layer", false)}${col(86, 104, 'C', "lymph nodes involved", true)}
      ${layers.map(([n], i) => t(80, 77 + i * 26, n, { size: 8.5, fill: MUTED, anchor: 'end' })).join('')}
      ${f(180, 252, "Most cancers start from a polyp; polypectomy during colonoscopy prevents them", { size: 9, fill: VIO, w: 700 })}`, "Dukes stages");
  };
  /* ---------- تشخیص، جراحی و دارو ---------- */
  /* هر آندوسکوپی کجا را می‌بیند */
  A['endo-family'] = () => {
    const segs = [["oesophagus", '#f08c00'], ["stomach", '#e8590c'], ["duodenum", '#c2255c'], ["small intestine", '#a61e4d'], ["colon", '#5f3dc4'], ["sigmoid", '#1864ab'], ["rectum", '#0b7285']];
    const W = [38, 40, 46, 64, 60, 52, 44];
    let x = 352, xs = [];
    segs.forEach((s, i) => { x -= W[i]; xs.push(x); });
    const bar = (from, to, y, en, fa, c) => { const x1 = xs[to], x2 = xs[from] + W[from], left = x1 > 150; return `<rect x="${x1}" y="${y}" width="${x2 - x1}" height="16" rx="8" fill="${c}" opacity=".9"/>${t(left ? x1 - 5 : x2 + 5, y + 12, en, { size: 10, fill: c, w: 900, anchor: left ? 'end' : 'start' })}${fa ? f(left ? x2 : x1, y + 30, fa, { size: 8.5, fill: MUTED, anchor: left ? 'end' : 'start' }) : ''}`; };
    return svg(360, 300, `${f(180, 20, "Endoscopies are named after the part they view", { size: 11.5, fill: INK, w: 800 })}
      ${segs.map(([fa, c], i) => `<rect x="${xs[i]}" y="40" width="${W[i] - 2}" height="22" rx="5" fill="${c}" opacity=".18"/>${f(xs[i] + W[i] / 2, 55, fa, { size: 8.2, fill: c, w: 800 })}`).join('')}
      ${f(352, 78, "mouth →", { size: 8.5, anchor: 'end' })}${f(8, 78, "opening at the end of the digestive tract", { size: 8.5, anchor: 'start' })}
      ${bar(0, 0, 88, 'esophagoscopy', '', '#f08c00')}
      ${bar(1, 1, 112, 'gastroscopy', '', '#e8590c')}
      ${bar(0, 2, 136, 'EGD', 'esophagogastroduodenoscopy', '#c2255c')}
      ${bar(4, 6, 176, 'colonoscopy', "from the anus to the caecum", '#5f3dc4')}
      ${bar(5, 6, 216, 'sigmoidoscopy', '', '#1864ab')}
      ${bar(6, 6, 240, 'proctoscopy', "rectum and anus", '#0b7285')}
      ${f(180, 292, "capsule endoscopy, using a swallowed camera capsule, also views the small intestine", { size: 9.5, fill: VIO, w: 700 })}`, "The endoscopy family");
  };

  /* تصویربرداری گوارش */
  A['gi-imaging'] = () => {
    const sh = 's' + (++UID);
    const R = [['barium swallow / UGI', "barium swallow: oesophagus, stomach and duodenum", '#e8590c'], ['barium enema (BE)', "barium via the rectum: colon", '#5f3dc4'], ['ERCP', "endoscope + contrast: bile and pancreatic ducts", '#2b8a3e'], ['PTC', "needle through the skin into a bile duct in the liver", '#087f5b'],
      ['MRCP', "MRI of the bile ducts without an endoscope", '#1098ad'], ['ultrasonography', "ultrasound; the main test for gallstones", '#1c7ed6'], ['virtual colonoscopy', "3D image of the colon with CT", '#7048e8']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, "Imaging in digestive diseases", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, c], i) => { const y = 32 + i * 38; return `${card(8, y, 344, 32, '#f8f9fa', sh)}<rect x="8" y="${y}" width="6" height="32" rx="3" fill="${c}"/>${t(22, y + 21, en, { size: 10.5, fill: c, w: 900, anchor: 'start' })}${f(342, y + 21, fa, { size: 9, fill: INK, w: 700, anchor: 'end' })}`; }).join('')}`, "GI imaging");
  };

  /* نقشه برداشتن‌ها */
  A['ectomy-map'] = () => {
    const g = 'k' + (++UID), cx = 180;
    return svg(360, 310, `<defs>${linear(g, SKIN[0], SKIN[1])}</defs>${f(180, 20, "-ectomy on each organ", { size: 11.5, fill: INK, w: 800 })}<g transform="translate(0 6)">
      ${torso(cx, 20, g)}
      <path d="M${cx - 64} 92 C${cx - 60} 70 ${cx - 6} 68 ${cx + 6} 80 C${cx + 2} 102 ${cx - 30} 118 ${cx - 64} 112 Z" fill="${LIVER}"/>
      <path d="M${cx} 88 C${cx + 20} 72 ${cx + 54} 80 ${cx + 52} 104 C${cx + 50} 122 ${cx + 18} 128 ${cx + 2} 118" fill="#ff8787" stroke="#e03131" stroke-width="1.5"/>
      <ellipse cx="${cx - 24}" cy="116" rx="7" ry="10" fill="#69db7c"/>
      <path d="M${cx - 50} 220 V146 Q${cx - 50} 134 ${cx - 38} 134 H${cx + 40} Q${cx + 52} 134 ${cx + 52} 146 V206 Q${cx + 52} 224 ${cx + 30} 226 Q${cx + 8} 228 ${cx} 240" stroke="${COLON}" stroke-width="13" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M${cx - 52} 222 q-6 10 2 14" stroke="${COLON}" stroke-width="6" fill="none" stroke-linecap="round"/>
      ${pin(cx + 30, 100, 290, 70)}${lab(318, 60, 'gastrectomy', "removal of the stomach", { size: 10, fill: '#e03131' })}
      ${pin(cx - 44, 90, 70, 70)}${lab(42, 60, 'hepatic lobectomy', "removal of a liver lobe", { size: 9, fill: LIVER })}
      ${pin(cx - 24, 118, 70, 126)}${lab(42, 116, 'cholecystectomy', "gallbladder", { size: 9, fill: '#2b8a3e' })}
      ${pin(cx + 52, 170, 290, 160)}${lab(318, 150, 'colectomy', "removal of the colon", { size: 10, fill: COLON_D })}
      ${pin(cx - 52, 232, 70, 206)}${lab(42, 196, 'appendectomy', "the appendix", { size: 9.5, fill: '#d9480f' })}
      ${pin(cx + 4, 236, 290, 236)}${lab(318, 226, 'hemorrhoidectomy', "haemorrhoids", { size: 8.8, fill: '#c2255c' })}</g>
      ${f(180, 304, "In American usage, removal of the appendix is appendectomy, not appendicectomy", { size: 9, fill: VIO, w: 700 })}`, "Map of removals");
  };

  /* بیلروت یک و دو */
  A.billroth = () => {
    const st = (x) => `<path d="M${x + 40} 40 V58 C${x + 60} 48 ${x + 110} 56 ${x + 112} 96 C${x + 112} 116 ${x + 96} 128 ${x + 74} 130 L${x + 40} 130" fill="#ffc9c9" stroke="#e03131" stroke-width="2"/><path d="M${x + 40} 122 V138" stroke="#212529" stroke-width="1.5" stroke-dasharray="2 2"/>`;
    return svg(360, 252, `${f(180, 20, "After removing the lower part of the stomach, what should it be joined to?", { size: 11, fill: INK, w: 800 })}
      <rect x="186" y="32" width="166" height="174" rx="14" fill="#fff4e6"/><rect x="8" y="32" width="166" height="174" rx="14" fill="#e6fcf5"/>
      ${st(206)}<path d="M246 130 C226 132 212 146 214 170 C216 186 236 190 250 184" stroke="#f4a3a8" stroke-width="14" fill="none" stroke-linecap="round"/>${f(268, 196, "duodenum", { size: 9, fill: '#c2255c' })}
      ${st(28)}<path d="M28 160 C40 150 60 140 68 130" stroke="#fcc2d7" stroke-width="13" fill="none" stroke-linecap="round"/><path d="M68 130 C90 150 120 168 150 176" stroke="#fcc2d7" stroke-width="13" fill="none" stroke-linecap="round"/>${f(134, 196, "jejunum", { size: 9, fill: '#a61e4d' })}
      ${t(269, 224, 'Billroth I', { size: 12, fill: '#d9480f', w: 900 })}${f(269, 242, 'gastroduodenostomy', { size: 9 })}
      ${t(91, 224, 'Billroth II', { size: 12, fill: '#2b8a3e', w: 900 })}${f(91, 242, 'gastrojejunostomy', { size: 9 })}`, "Billroth");
  };

  /* لوله‌ها و راه‌های تغذیه */
  A.tubes = () => {
    const sh = 's' + (++UID);
    const R = [['NG tube', "nose to stomach; feeding (gavage) or washing (lavage) and suction", '👃', '#1c7ed6'], ['PEG tube', "through the abdominal skin into the stomach, with the help of an endoscope", '🎯', '#2b8a3e'], ['jejunostomy tube', "through the skin into the jejunum", '🔗', '#a61e4d'], ['TPN', "complete nutrition through a vein; the GI tract is bypassed", '💉', '#7048e8'], ['NPO', "nothing by mouth (before surgery and endoscopy)", '🚫', '#c92a2a']];
    return svg(360, 284, `<defs>${shadow(sh)}</defs>${f(180, 20, "when the patient cannot eat", { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ic, c], i) => { const y = 32 + i * 50; return `${card(8, y, 344, 44, '#f8f9fa', sh)}<text x="334" y="${y + 29}" font-size="17" text-anchor="middle">${ic}</text>${t(316, y + 18, en, { size: 11.5, fill: c, w: 900, anchor: 'end' })}${f(316, y + 35, fa, { size: 8.8, fill: INK, w: 700, anchor: 'end' })}`; }).join('')}`, "Tubes and feeding");
  };

  /* داروهای اسید معده */
  A['acid-drugs'] = () => {
    const mk = 'm' + (++UID), sh = 's' + (++UID);
    return svg(360, 262, `<defs>${marker(mk, '#c92a2a')}${shadow(sh)}</defs>${f(180, 20, "Three ways to reduce stomach acid", { size: 11.5, fill: INK, w: 800 })}
      <rect x="120" y="44" width="120" height="96" rx="18" fill="#fff0f0" stroke="#e03131" stroke-width="2"/>${f(180, 62, "acid-producing cell of the stomach wall", { size: 9, fill: '#c92a2a', w: 800 })}
      <circle cx="150" cy="104" r="12" fill="#ffa8a8" stroke="#c92a2a"/>${t(150, 108, 'H2', { size: 9, fill: '#c92a2a' })}
      <rect x="196" y="92" width="26" height="24" rx="6" fill="#ffc078" stroke="#d9480f"/>${t(209, 108, 'pump', { size: 7.5, fill: '#d9480f' })}
      ${arrow(mk, 222, 104, 268, 104, '#c92a2a', 2.5)}${t(296, 108, 'HCl', { size: 13, fill: '#c92a2a', w: 900 })}
      ${card(8, 156, 108, 98, '#e7f5ff', sh)}${card(126, 156, 108, 98, '#fff4e6', sh)}${card(244, 156, 108, 98, '#ebfbee', sh)}
      ${t(298, 178, 'antacid', { size: 11.5, fill: '#2b8a3e', w: 900 })}${f(298, 196, "acid produced", { size: 9, fill: INK, w: 700 })}${f(298, 210, "neutralises it", { size: 9, fill: INK, w: 700 })}${t(298, 234, 'Tums, Maalox', { size: 8.5, fill: MUTED })}
      ${t(180, 178, 'PPI', { size: 11.5, fill: '#d9480f', w: 900 })}${f(180, 196, "inhibits the", { size: 9, fill: INK, w: 700 })}${f(180, 210, "proton pump", { size: 9, fill: INK, w: 700 })}${t(180, 234, 'omeprazole', { size: 8.5, fill: MUTED })}
      ${t(62, 178, 'H2 blocker', { size: 11.5, fill: '#1c7ed6', w: 900 })}${f(62, 196, "blocks the", { size: 9, fill: INK, w: 700 })}${f(62, 210, "H2 receptor", { size: 9, fill: INK, w: 700 })}${t(62, 234, 'famotidine', { size: 8.5, fill: MUTED })}
      ${curve(mk, 'M62 154 C62 120 100 104 136 104', '#1c7ed6', 1.6, true)}${curve(mk, 'M180 154 C190 136 200 126 206 118', '#d9480f', 1.6, true)}${curve(mk, 'M298 154 C298 132 298 124 298 116', '#2b8a3e', 1.6, true)}`, "Acid-reducing drugs");
  };

  /* داروهای جفت و ضد */
  A['drug-pairs'] = () => {
    const sh = 's' + (++UID);
    const P = [['emetic', "induces vomiting", 'antiemetic', "prevents nausea and vomiting", '#c92a2a'], ['laxative', "eases defecation (laxative)", 'antidiarrheal', "treats diarrhoea", '#7048e8'], ['cathartic', "strong laxative", 'stool softener', "softens the stool", '#a07a1a'], ['antispasmodic', "reduces intestinal cramping", 'antiflatulent', "reduces gas and bloating", '#1098ad']];
    return svg(360, 262, `<defs>${shadow(sh)}</defs>${f(180, 20, "Paired GI drugs", { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([a, af, b, bf, c], i) => { const y = 32 + i * 56; return `${card(186, y, 166, 48, '#f8f9fa', sh)}${card(8, y, 166, 48, '#f8f9fa', sh)}${t(269, y + 20, a, { size: 11.5, fill: c, w: 900 })}${f(269, y + 37, af, { size: 9, fill: INK, w: 700 })}${t(91, y + 20, b, { size: 11.5, fill: c, w: 900 })}${f(91, y + 37, bf, { size: 8.6, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 256, "anti- means against: emetic versus antiemetic", { size: 9.5, fill: VIO, w: 700 })}`, "Drug pairs");
  };
  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* گوارا — دنیای ۱: زبان گوارش
 * ساختار واژه، ریشه‌های دهان (جدول ۱۳-۱)، ریشه‌های لوله گوارش (جدول ۱۳-۲)، ریشه‌های اندام‌های کمکی (جدول ۱۳-۳)،
 * پسوندهای علامت و جراحی، صفت‌ها، جمع‌ها و واژه‌های شبیه (جعبه ۱۳-۳).
 * منابع: فصل Digestive System کتاب اصلی و چند کتاب دیگر (جدول‌های اجزای واژه، تمرین‌های واژه‌سازی و نکته‌های املا).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: "Language of Digestion", short: "tongue", sub: "Word structure, mouth roots, the GI tract, liver and bile, symptom and surgical suffixes, adjectives, plurals and look-alike words",
    color: '#4C6EF5', dark: '#364FC7', light: '#EDF2FF',
    levels: ["Word structure and mouth roots", "Roots of the GI tract and accessory organs", "Suffixes, adjectives and plurals"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: ساختار واژه و ریشه‌های دهان ================= */
      {
        id: 'lx1', title: "Break a word apart", icon: '🧩', items: [
          L("A digestive term has three parts", `Most digestive terms are built from a <b>root</b> (the organ), a <b>combining vowel</b> and a <b>suffix</b> (what happened).${fig('wordparts')}Read the meaning from the end: in ${e('cholecystectomy')} the root <b>cholecyst/o</b> is the gallbladder and the suffix <b>-ectomy</b> is removal; so it means “removal of the gallbladder”.`),
          L("When does the combining vowel drop?", `${wb('gastr/o', '-scopy')} = <b>gastroscopy</b> (looking inside the stomach); but ${wb('gastr/o', '-itis')} = <b>gastritis</b>, not gastroitis.${memo("A suffix that begins with a vowel, such as -itis, -ectomy and -algia, pushes the o aside.")}`),
          M(`${e('<b>gastritis</b>')} means…`, ["stomach inflammation", "looking inside the stomach", "removal of the stomach", "stomach pain"], "gastr/o (stomach) + -itis (inflammation)."),
          M(`In ${e('<b>gastroscopy</b>')}, which part is the suffix?`, ["-scopy: looking inside", "-gastr: stomach", "-o: combining vowel", "-copy: duplicate"], 'gastr + o + scopy.'),
          L("Two roots in one word", `${wb('gastr/o', 'enter/o', '-itis')} = <b>gastroenteritis</b>: inflammation of the stomach and intestines. ${e('gastroenterology')} is the study of the stomach and intestines, and its doctor is the ${e('gastroenterologist')}.${pearl("The specialist in digestive diseases is the gastroenterologist; in Iran the title “GI subspecialist” is also used.")}`),
          T("In gastroenteritis, an o also comes between the two roots.", true, "gastr + o + enter + itis: an o always comes between two roots."),
          M(`Who is a ${e('<b>gastroenterologist</b>')}?`, ["doctor specialising in digestive diseases", "dental surgeon", "paediatric liver specialist", "Operating room nurse"], 'gastr/o + enter/o + -logist.'),
          B("Inflammation of the stomach and intestines is called ___.", ['gastroenteritis', 'gastroscopy', 'enteropathy'], 'gastr/o + enter/o + -itis.'),
          W("Build a word meaning “removal of the gallbladder”", ['cholecyst/o', '-ectomy'], ['-scopy', 'gastr/o', '-itis'], "cholecyst/o + -ectomy = cholecystectomy; the o drops before -ectomy."),
          S("Spell the term for inflammation of the stomach", 'gastritis', "gastr/o + -itis; no o.", 'gast…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx2', title: "Mouth, lips and teeth", icon: '👄', items: [
          L("Mouth roots", `${fig('mouth-roots')}The mouth has two roots: <b>or/o</b> and <b>stomat/o</b>. ${e('oral')} means relating to the mouth and ${e('stomatitis')} means inflammation of the oral mucosa.${memo("stomat/o looks like stomach but means “mouth”; the stomach is gastr/o.")}`),
          M(`${e('<b>stomatitis</b>')} means…`, ["inflammation of the mouth lining", "stomach inflammation", "inflammation of the lips", "inflammation of the tongue"], "stomat/o = mouth."),
          L("Around the mouth and cheek", `${tbl([["Term", "Parts", "Meaning"], [e('circumoral'), 'circum- + or/o + -al', "around the mouth"], [e('buccal'), 'bucc/o + -al', "relating to the cheek"], [e('buccopharyngeal'), 'bucc/o + pharyng/o + -eal', "relating to the cheek and pharynx"]])}`),
          M(`${e('<b>circumoral</b>')} means…`, ["around the mouth", "under the tongue", "inside the cheek", "behind the throat"], "circum- (around) + or/o + -al."),
          L("Lips and teeth", `The lips have two roots: <b>labi/o</b> and <b>cheil/o</b>; the teeth have two as well: <b>dent/o</b> or dent/i, and <b>odont/o</b>.${tbl([["Term", "Meaning"], [e('labiodental'), "labiodental"], [e('dentalgia'), "toothache"], [e('edentulous'), "without teeth (e- = without)"], [e('orthodontist'), "dentist who straightens the teeth (orth/o = straight)"], [e('periodontics'), "treatment of the tissues around the teeth"]])}`),
          P("Match each term to its meaning", [['edentulous', "without teeth"], ['dentalgia', "toothache"], ['labiodental', "relating to the lips and teeth"], ['orthodontist', "specialist in straightening teeth"]]),
          M("Which root means the same as dent/o?", ['odont/o', 'gnath/o', 'gingiv/o', 'gloss/o'], "dent/o = odont/o = tooth."),
          L("gums", `<b>gingiv/o</b> means gum: ${e('gingivitis')} is inflammation of the gums and ${e('gingivectomy')} is removal of part of the gum.${pearl("A dental hygienist removes tartar and plaque so that gingivitis does not develop.")}`),
          T("gingivitis means inflammation of the tongue.", false, "False; gingiv/o is the gum. Inflammation of the tongue is glossitis."),
          W("Build a word meaning “toothache”", ['dent/o', '-algia'], ['-itis', 'gingiv/o', 'or/o'], 'dent/o + -algia = dentalgia.'),
          S("Spell the term for a specialist in straightening teeth", 'orthodontist', 'orth/o + odont/o + -ist.', 'ortho…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx3', title: "Tongue, jaw, palate and saliva", icon: '👅', items: [
          L("The tongue has two roots", `<b>gloss/o</b> (Greek) and <b>lingu/o</b> (Latin) both mean tongue.${tbl([["Term", "Meaning"], [e('glossitis'), "inflammation of the tongue"], [e('glossoplegia'), "paralysis of the tongue (-plegia)"], [e('hypoglossal'), "under the tongue (hypo-)"], [e('sublingual'), "beneath the tongue (sub-)"], [e('hemiglossal'), "relating to one half of the tongue (hemi-)"], [e('orolingual'), "relating to the mouth and tongue"]])}${pearl("Nitroglycerin tablets are sublingual: they dissolve under the tongue.")}`),
          M(`${e('<b>glossoplegia</b>')} means…`, ["paralysis of the tongue", "inflammation of the tongue", "suture of the tongue", "removal of the tongue"], "gloss/o + -plegia (paralysis)."),
          T("hypoglossal and sublingual both mean under the tongue.", true, "hypo- and sub- both mean below."),
          L("jaw", `<b>gnath/o</b> means jaw: ${e('prognathous')} is a protruding jaw (pro- = forward), ${e('micrognathia')} a small jaw and ${e('agnathia')} absence of the jaw.`),
          M(`${e('<b>micrognathia</b>')} means…`, ["small jaw", "absence of teeth", "enlarged tongue", "paralysis of the jaw"], 'micro- + gnath/o + -ia.'),
          L("Palate, uvula and saliva", `${tbl([["root", "Meaning", "Example"], [e('palat/o'), "palate", "palatorrhaphy: suturing of the palate"], [e('uvul/o'), "uvula", "uvulectomy: removal of the uvula"], [e('sial/o'), "saliva, salivary gland", "sialolith: salivary stone (lith/o means stone) • sialogram: X-ray of the salivary glands • sialorrhea: excessive saliva"]])}`),
          P("Match each root to its meaning", [['palat/o', "palate"], ['uvul/o', "uvula"], ['sial/o', "saliva"], ['gnath/o', "jaw"]]),
          M(`${e('<b>sialolith</b>')} means…`, ["stone in a salivary gland or duct", "inflammation of a salivary gland", "dry mouth", "gallbladder stones"], "sial/o + lith (stone)."),
          B("Suturing the palate, for example in a cleft palate, is called ___.", ['palatorrhaphy', 'palatoplegia', 'uvulectomy'], "palat/o + -rrhaphy (suture)."),
          L("Review of the “Word structure and mouth roots” level", recap(["Read the meaning from the end; before a vowel suffix the o drops: gastritis", "Mouth or/o and stomat/o • cheek bucc/o • lips labi/o and cheil/o", "Teeth dent/o and odont/o • gums gingiv/o • jaw gnath/o", "Tongue gloss/o and lingu/o • palate palat/o • uvula uvul/o • saliva sial/o"])),
          W("Build a word meaning “salivary stone”", ['sial/o', 'lith/o'], ['gloss/o', '-itis', 'palat/o'], 'sial/o + lith = sialolith.'),
          S("Spell the term for under the tongue, using the prefix sub-", 'sublingual', 'sub- + lingu/o + -al.', 'sub…'),
          N('wb:lx')
        ]
      },
      /* ================= سطح ۲: ریشه‌های لوله گوارش و اندام‌های کمکی ================= */
      {
        id: 'lx4', title: "From the oesophagus to the small intestine", icon: '🍽️', items: [
          L("Roots in the order food travels", `${fig('tract-roots')}First half of the route: <b>esophag/o</b> oesophagus, <b>gastr/o</b> stomach, <b>pylor/o</b> pylorus, <b>enter/o</b> intestine (mostly the small intestine), <b>duoden/o</b>, <b>jejun/o</b> and <b>ile/o</b>.`),
          L("Oesophagus and stomach", `${tbl([["Term", "Meaning"], [e('esophagostenosis'), "narrowing of the oesophagus"], [e('gastralgia'), "stomach pain; same as gastrodynia"], [e('gastroparesis'), "partial paralysis of the stomach; slow gastric emptying"], [e('pylorospasm'), "sudden spasm of the pylorus"]])}`),
          M(`${e('<b>esophagostenosis</b>')} means…`, ["narrowing of the oesophagus", "inflammation of the oesophagus", "widening of the oesophagus", "paralysis of the oesophagus"], "esophag/o + -stenosis (narrowing)."),
          T("gastralgia and gastrodynia both mean stomach pain.", true, "-algia and -dynia both mean pain."),
          L("small intestine", `${tbl([["Term", "Meaning"], [e('enteropathy'), "any disease of the intestine"], [e('dysentery'), "bloody diarrhoea; dys- + enter/o + -y"], [e('duodenitis'), "inflammation of the duodenum"], [e('jejunitis'), "inflammation of the jejunum"], [e('ileitis'), "inflammation of the ileum"]])}${memo("ileum with an e is the intestine, like the e in enteric; ilium with an i is the hip bone, like the i in hip.")}`),
          P("Match each term to its meaning", [['duodenitis', "inflammation of the duodenum"], ['jejunitis', "inflammation of the jejunum"], ['ileitis', "inflammation of the ileum"], ['enteropathy', "intestinal disease"]]),
          M("Which one is the ileum?", ["last part of the small intestine", "hip bone", "first part of the large intestine", "opening of the stomach"], "ileum is the intestine; ilium is the hip bone."),
          B("Bloody diarrhoea caused by intestinal inflammation is called ___.", ['dysentery', 'dyspepsia', 'duodenitis'], 'dys- + enter/o + -y.'),
          W("Build a word meaning “inflammation of the stomach and duodenum”", ['gastr/o', 'duoden/o', '-itis'], ['jejun/o', '-stenosis', 'esophag/o'], 'gastr/o + duoden/o + -itis = gastroduodenitis.'),
          S("Spell the term for narrowing of the oesophagus", 'esophagostenosis', 'esophag/o + -stenosis.', 'esophago…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx5', title: "Large intestine, rectum and anus", icon: '🌀', items: [
          L("Second half of the route", `<b>cec/o</b> caecum, <b>col/o</b> and <b>colon/o</b> colon, <b>sigmoid/o</b> sigmoid colon, <b>rect/o</b> rectum, <b>proct/o</b> rectum and anus, and <b>an/o</b> anus.${memo("Don’t confuse proct/o with prostat/o (prostate); proctology is the study of the rectum and anus.")}`),
          L("Terms", `${tbl([["Term", "Meaning"], [e('cecoptosis'), "drooping of the caecum (-ptosis)"], [e('coloclysis'), "irrigation of the colon (-clysis)"], [e('rectocele'), "herniation of the rectum into the vagina (-cele)"], [e('proctopexy'), "surgical fixation of the rectum (-pexy)"], [e('proctoptosis'), "prolapse of the rectum and anus"]])}`),
          M(`${e('<b>rectocele</b>')} means…`, ["hernia of the rectum", "inflammation of the rectum", "narrowing of the rectum", "incision of the rectum"], "rect/o + -cele (hernia, protrusion)."),
          M(`${e('<b>proctopexy</b>')} means…`, ["surgical fixation of the rectum", "looking inside the rectum", "rectal prolapse", "removal of the rectum"], "proct/o + -pexy (fixation)."),
          P("Match each suffix to its meaning", [['-ptosis', "drooping"], ['-cele', "rupture"], ['-pexy', "fixing in place"], ['-clysis', "washing"]]),
          L("around the anus", `${e('perianal')} means around the anus (peri- + an/o + -al) and ${e('anorectal')} means relating to the anus and rectum.${vs(['an/o', "root: anus; anal"], ['an-', "prefix: without; anorexia"])}`),
          T("In anorexia, an- is the root for anus.", false, "False; anorexia is the prefix an- (without) + orex/o (appetite)."),
          M("Which root means “colon”?", ['col/o', 'chol/e', 'cec/o', 'cyst/o'], "col/o and colon/o = colon; chol/e is bile."),
          W("Build a word meaning “prolapse of the rectum and anus”", ['proct/o', '-ptosis'], ['-pexy', 'cec/o', '-cele'], 'proct/o + -ptosis = proctoptosis.'),
          S("Spell the term for around the anus", 'perianal', 'peri- + an/o + -al.', 'peri…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx6', title: "Liver, bile and pancreas", icon: '🟤', items: [
          L("Roots of the accessory organs", `${fig('acc-roots')}<b>hepat/o</b> liver; <b>chol/e</b> and <b>bili</b> bile; <b>cholecyst/o</b> gallbladder; <b>cholangi/o</b> bile duct; <b>choledoch/o</b> common bile duct; <b>pancreat/o</b> pancreas.`),
          L("liver", `${tbl([["Term", "Meaning"], [e('hepatocyte'), "liver cell"], [e('hepatomegaly'), "enlarged liver"], [e('hepatopathy'), "any disease of the liver"], [e('hepatogenic'), "originating in the liver"]])}`),
          M(`${e('<b>hepatocyte</b>')} means…`, ["liver cell", "liver tumour", "liver inflammation", "enlarged liver"], "hepat/o + -cyte (cell)."),
          L("Bile and ducts", `${tbl([["Term", "Meaning"], [e('biliary'), "biliary"], [e('cholestasis'), "stagnation of bile flow"], [e('cholelith'), "gallstone"], [e('cholecystogram'), "X-ray of the gallbladder"], [e('cholangioma'), "bile duct tumour"], [e('choledochal'), "relating to the common bile duct"]])}${memo("chol/e with an e is the exception; and chole is the same as gall (bile): cholecyst = gall + bladder.")}`),
          P("Match each root to its meaning", [['cholecyst/o', "gallbladder"], ['cholangi/o', "bile duct"], ['choledoch/o', "common bile duct"], ['hepat/o', "liver"]]),
          M(`${e('<b>cholestasis</b>')} means…`, ["stagnation of bile flow", "gallstone", "inflammation of the gallbladder", "excessive bile secretion"], "chol/e + -stasis (standing still)."),
          T("Inflammation of the gallbladder is spelled colecystitis.", false, "False; cholecystitis is correct. col/o is the colon."),
          L("pancreas", `${e('pancreatolysis')} means destruction of pancreatic tissue and ${e('pancreatotropic')} means acting on the pancreas.${pearl("In medical records, CBD is the common bile duct and GB is the gallbladder.")}`),
          B("A tumour of a bile duct is called ___.", ['cholangioma', 'cholelith', 'hepatoma'], 'cholangi/o + -oma.'),
          L("Review of the “Roots of the GI tract and accessory organs” level", recap(["Oesophagus esophag/o • stomach gastr/o • pylorus pylor/o • intestine enter/o", "Duodenum duoden/o • jejunum jejun/o • ileum ile/o (not ili/o, the hip bone)", "Caecum cec/o • colon col/o and colon/o • sigmoid sigmoid/o • rectum rect/o • rectum and anus proct/o • anus an/o", "Liver hepat/o • bile chol/e and bili • gallbladder cholecyst/o • ducts cholangi/o and choledoch/o • pancreas pancreat/o"])),
          W("Build a word meaning “gallstone”", ['chol/e', 'lith/o'], ['col/o', '-itis', 'hepat/o'], 'chol/e + lith = cholelith.'),
          S("Spell the term for relating to bile", 'biliary', 'bili + -ary.', 'bil…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۳: پسوندها، صفت‌ها و جمع‌ها ================= */
      {
        id: 'lx7', title: "Symptom suffixes", icon: '🔎', items: [
          L("Eight GI symptom suffixes", `${fig('sx-suffixes')}${tbl([["suffix", "Meaning", "Example"], [e('-emesis'), "vomiting", "hematemesis: vomiting blood"], [e('-pepsia'), "digestion", "dyspepsia: indigestion"], [e('-phagia'), "eating, swallowing", "dysphagia: difficulty swallowing"], [e('-prandial'), "meal", "postprandial: after a meal"]])}`),
          M(`${e('<b>hematemesis</b>')} means…`, ["vomiting blood", "blood in the stool", "indigestion", "difficulty swallowing"], "hemat/o (blood) + -emesis (vomiting)."),
          M(`${e('<b>postprandial</b>')} means…`, ["after meals", "before meals", "during swallowing", "after defecation"], 'post- + -prandial.'),
          L("Discharge and flow", `${tbl([["suffix", "Meaning", "Example"], [e('-chezia'), "bowel movement", "hematochezia: bright blood in the stool"], [e('-rrhea'), "flow, discharge", "diarrhea • steatorrhea: fatty stool"], [e('-lithiasis'), "stone disease", 'cholelithiasis'], [e('-stasis'), "stopping", 'cholestasis']])}${memo("-rrhea and -rrhaphy have a double r: diarrhea, herniorrhaphy.")}`),
          P("Match each suffix to its meaning", [['-emesis', "vomiting"], ['-pepsia', "digestion"], ['-phagia', "swallowing"], ['-chezia', "bowel movement"]]),
          L("Pain, enlargement, narrowing", `${tbl([["suffix", "Meaning", "Example"], [e('-algia, -dynia'), "pain", "cholecystalgia: gallbladder pain"], [e('-megaly'), "enlargement", "splenomegaly: enlarged spleen"], [e('-stenosis'), "narrowing", 'esophagostenosis'], [e('-ectasis'), "widening", "cholangiectasis: dilation of a bile duct"], [e('-spasm'), "sudden contraction", 'pylorospasm']])}`),
          M(`${e('<b>cholangiectasis</b>')} means…`, ["dilation of a bile duct", "narrowing of a bile duct", "stone in a bile duct", "inflammation of a bile duct"], "cholangi/o + -ectasis (dilation)."),
          T("steatorrhea means fatty stool.", true, "steat/o (fat) + -rrhea (flow)."),
          B("Bright red blood in the stool is called ___.", ['hematochezia', 'hematemesis', 'steatorrhea'], 'hemat/o + -chezia.'),
          W("Build a word meaning “gallbladder pain”", ['cholecyst/o', '-algia'], ['-ectasis', 'hepat/o', '-emesis'], 'cholecyst/o + -algia = cholecystalgia.'),
          S("Spell the term for indigestion", 'dyspepsia', 'dys- + -pepsia.', 'dysp…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx8', title: "Surgical and specialty suffixes", icon: '✂️', items: [
          L("Eight surgical and diagnostic suffixes", `${fig('surg-suffixes')}${tbl([["suffix", "Meaning", "Example"], [e('-ectomy'), "removal", 'gastrectomy'], [e('-tomy'), "incision", "laparotomy: incision of the abdomen"], [e('-stomy'), "making an opening", 'colostomy'], [e('-plasty'), "repair", 'pyloroplasty'], [e('-rrhaphy'), "stitch", 'herniorrhaphy'], [e('-pexy'), "fixing in place", 'proctopexy'], [e('-tripsy'), "crushing", 'lithotripsy'], [e('-scopy'), "looking inside", 'colonoscopy']])}`),
          M(`${e('<b>laparotomy</b>')} means…`, ["incision of the abdominal wall", "removal of the abdomen", "looking inside the abdomen", "repair of the abdomen"], "lapar/o (abdominal wall) + -tomy (incision)."),
          P("Match each term to its meaning", [['gastrectomy', "removal of the stomach"], ['pyloroplasty', "repair of the pylorus"], ['herniorrhaphy', "repairing a hernia with sutures"], ['lithotripsy', "crushing a stone"]]),
          L("One organ or two?", `${fig('stomy-naming')}When one organ opens onto the skin, only one root is used: ${e('ileostomy')}. When two organs are joined, both roots are used: ${e('gastrojejunostomy')}. This connection is called an <b>anastomosis</b>.`),
          M(`${e('<b>gastrojejunostomy</b>')} means…`, ["surgical connection of the stomach to the jejunum", "jejunal opening on the skin", "removal of the stomach and jejunum", "incision of the jejunum"], "Two roots + -stomy = anastomosis."),
          T("ileostomy means joining the ileum to the abdominal wall and making an opening on the skin.", true, "One root + -stomy = an opening to the outside."),
          L("Specialties", `${tbl([["Term", "Meaning"], [e('gastroenterology'), "study and treatment of digestive diseases"], [e('proctology'), "treatment of diseases of the rectum and anus"], [e('hepatology'), "study of the liver and its diseases"], [e('orthodontics'), "orthodontics: straightening the teeth"]])}${memo("-logy is a field of study and -logist is a specialist in that field.")}`),
          M("A specialist in diseases of the rectum and anus…", ['proctologist', 'prostatologist', 'gastrologist', 'hepatologist'], 'proct/o + -logist.'),
          B("The surgical connection of two hollow organs is called ___.", ['anastomosis', 'ostomy', 'resection'], 'anastomosis = surgical connection.'),
          W("Build a word meaning “connection of the stomach to the duodenum”", ['gastr/o', 'duoden/o', '-stomy'], ['-ectomy', 'jejun/o', '-tomy'], 'gastr/o + duoden/o + -stomy = gastroduodenostomy.'),
          S("Spell the term for hernia repair with sutures", 'herniorrhaphy', "herni/o + -rrhaphy; double rr.", 'hernio…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx9', title: "Adjectives, plurals and look-alike words", icon: '⚖️', items: [
          L("Making adjectives", `${fig('adj-endings')}The suffixes -al, -ic, -ac, -ar and -ary mean “relating to”: ${e('gastric')} relating to the stomach, ${e('biliary')} relating to bile and ${e('celiac')} relating to the abdomen. In ${e('esophageal')} and ${e('pharyngeal')} an e comes before -al.`),
          M(`Which is the correct adjective for “oesophagus”?`, ['esophageal', 'esophagal', 'esophagic', 'esophagary'], 'esophag + -eal.'),
          T("celiac means relating to the abdomen.", true, "celi/o (abdomen) + -ac."),
          L("Plurals of Greek and Latin words", `${fig('plurals')}${e('diverticulum → diverticula')}, ${e('calculus → calculi')}, ${e('gingiva → gingivae')}, ${e('villus → villi')} and ${e('anastomosis → anastomoses')}.${memo("Read the rules from left to right: " + e('-um → -a, -us → -i, -a → -ae, -is → -es, -ix → -ices'))}`),
          P("Match each singular to its plural", [['diverticulum', 'diverticula'], ['calculus', 'calculi'], ['gingiva', 'gingivae'], ['anastomosis', 'anastomoses']]),
          M(`What is the plural of ${e('<b>villus</b>')}?`, ['villi', 'villa', 'villae', 'villuses'], '-us → -i.'),
          L("Sound-alike and look-alike words", `${fig('lookalikes')}A few pairs from the textbook’s sound-alike box: ${e('ileum')} is the intestine and ${e('ilium')} the hip bone; ${e('iliac')} relates to the hip bone and ${e('ileal')} to the ileum; ${e('dysphagia')} is difficulty swallowing and ${e('dysphasia')} difficulty speaking.`),
          M("After a stroke, the patient cannot speak properly. Which term is correct?", ['dysphasia', 'dysphagia', 'dyspepsia', 'aphagia'], "phas = speech; phag = swallowing."),
          T("iliac means relating to the ileum.", false, "False; iliac relates to the hip bone (ilium). The adjective for the ileum is ileal."),
          L("Review of the “Suffixes, adjectives and plurals” level", recap(["Symptoms: -emesis vomiting • -pepsia digestion • -phagia swallowing • -prandial meal • -chezia defecation • -rrhea flow", "-ectomy removal • -tomy incision • -stomy opening; two roots + -stomy = anastomosis", "Adjectives: esophageal and pharyngeal with an e; gastric, biliary, celiac", "Plurals: diverticula, calculi, gingivae, villi, anastomoses • ileum intestine, ilium hip bone"])),
          B("The plural of diverticulum is ___.", ['diverticula', 'diverticulums', 'diverticuli'], '-um → -a.'),
          S("Spell the adjective for the throat", 'pharyngeal', 'pharyng + -eal.', 'pharyn…'),
          N('ab:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* گوارا — دنیای ۲: دهان تا معده
 * کار دستگاه گوارش، حفره دهان، دندان‌ها، بزاق و جویدن، حلق و بلع، مری و حرکت دودی، بخش‌های معده، شیره معده و آنزیم‌ها.
 * منابع: فصل Digestive System (شکل‌های دستگاه گوارش، دهان، دندان، غدد بزاقی، حلق، معده؛ جعبه ۱۳-۱ و ۱۳-۲؛ واژه‌های کلیدی).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'mo', sym: 'Oro', name: "Mouth to Stomach", short: "mouth", sub: "The GI tract and its jobs, mouth and teeth, saliva, pharynx and swallowing, oesophagus and peristalsis, the stomach and its juice",
    color: '#E8590C', dark: '#C2410C', light: '#FFF4E6',
    levels: ["Digestion, mouth and teeth", "Saliva, pharynx and oesophagus", "Stomach and enzymes"],
    gens: EA.genIds('mo'),
    lessons: [
      /* ================= سطح ۱: گوارش، دهان و دندان ================= */
      {
        id: 'mo1', title: "What does the digestive system do?", icon: '⚙️', items: [
          L("One long tube and a few helper organs", `${fig(['gi-overview'], ["The digestive system"])}The <b>alimentary canal</b>, or gastrointestinal tract (GI tract), is a muscular tube from the mouth to the anus. Food does not pass through the <b>accessory organs</b> (salivary glands, liver, gallbladder and pancreas), but their juices are needed for digestion.`),
          M(`${e('<b>GI</b>')} means…`, ["gastrointestinal; relating to digestion", 'general internal', 'gland and intestine', 'gastric infection'], "gastr/o (stomach) + intestin (intestine)."),
          T("The liver and pancreas are part of the GI tract, and food passes through them.", false, "False; they are accessory organs and only pour their juices into the tract."),
          L("Seven steps", `${fig('digest-steps')}Food is taken in (<b>ingestion</b>), chewed (<b>mastication</b>), swallowed (<b>deglutition</b>), moved along by <b>peristalsis</b>, broken down (<b>digestion</b>) and taken up (<b>absorption</b>), and the remainder is expelled (<b>defecation</b>).`),
          O("Put the steps of the digestive system in order", ['ingestion', 'mastication', 'deglutition', 'digestion', 'absorption', 'defecation'], "Eating, chewing, swallowing, digestion, absorption, elimination."),
          M(`${e('<b>absorption</b>')} means…`, ["passage of digested material into blood and lymph", "grinding food with the teeth", "passing stool", "swallowing a mouthful"], "Most absorption happens in the small intestine."),
          L("Enzymes and mucosa", `Chemical digestion is done by <b>enzymes</b>, and most digestive enzyme names end in <b>-ase</b>. The inside of the tube is lined by the <b>mucosa</b> (mucous membrane).${pearl("If you see “GI upset” in a record, it means general digestive upset: nausea, stomach ache or diarrhoea.")}`),
          P("Match each term to its meaning", [['ingestion', "eating"], ['mastication', "chewing"], ['deglutition', "swallowing"], ['defecation', "bowel movement"]]),
          B("The inner lining of the GI tract is called the ___.", ['mucosa', 'enzyme', 'bolus'], 'mucous membrane.'),
          S("Spell the term for chewing", 'mastication', "masticate = to chew.", 'mast…'),
          N('t2f:mo')
        ]
      },
      {
        id: 'mo2', title: "oral cavity", icon: '👄', items: [
          L("Inside the mouth", `${fig(['mouth-img'], ["oral cavity"])}The <b>oral cavity</b> is made up of the lips, cheeks, palate, tongue and teeth. The roof of the mouth is the <b>palate</b>: the <b>hard palate</b> (bony) at the front and the <b>soft palate</b> (muscular) at the back.`),
          M(`Where is the ${e('<b>hard palate</b>')}?`, ["front, bony part of the roof of the mouth", "back part of the roof of the mouth", "floor of the mouth under the tongue", "wall of the cheek"], "The hard palate is bony and the soft palate is muscular."),
          L("Uvula and tongue", `The <b>uvula</b> (Latin for “little grape”) hangs from the soft palate and closes off the nasal passage during swallowing. The <b>tongue</b> is attached to the floor of the mouth by the <b>frenulum</b>, and its surface carries <b>papillae</b> with taste buds.${fig(['tongue-img'], ["The tongue from above"])}`),
          M(`What is ${e('<b>frenulum</b>')}?`, ["mucosal fold attaching the tongue to the floor of the mouth", "uvula", "taste bump", "gums"], "When it is too short, the condition is ankyloglossia (tongue-tie)."),
          T("papillae are the bumps on the tongue that carry taste buds.", true, "Singular: papilla."),
          L("Mouth adjectives", `${tbl([["Term", "Meaning"], [e('oral'), "of the mouth"], [e('buccal'), "relating to the cheek"], [e('labial'), "labial"], [e('palatine'), "palatine"], [e('gingiva'), "gum; plural gingivae"]])}${pearl("buccal mucosa is the lining inside the cheek; DNA swab samples are taken from here.")}`),
          P("Match each term to its meaning", [['buccal', "relating to the cheek"], ['labial', "relating to the lips"], ['palatine', "relating to the roof of the mouth"], ['uvula', "small tissue hanging at the back of the soft palate"]]),
          M("What closes off the nasal passage during swallowing?", ["soft palate and uvula", "hard palate", "gums", "frenulum"], "The soft palate and uvula rise."),
          B("The back, muscular part of the roof of the mouth is the ___.", ['soft palate', 'hard palate', 'gingiva'], 'soft palate.'),
          S("Spell the term for the little tongue hanging from the soft palate", 'uvula', 'uvul/o.', 'uvu…'),
          N('f2t:mo')
        ]
      },
      {
        id: 'mo3', title: "Teeth", icon: '🦷', items: [
          L("Four types of teeth", `${fig('dental-arch')}The <b>incisor</b> cuts, the <b>canine</b> (cuspid) tears, and the <b>premolar</b> (bicuspid) and <b>molar</b> grind.${fig(['teeth-types'], ["Tooth shapes and names"])}`),
          M(`Which tooth is the ${e('<b>canine</b>')}?`, ["eye tooth for tearing food", "front tooth for cutting", "large grinding tooth", "wisdom tooth"], 'canine = cuspid.'),
          L("Baby and permanent", `A child has 20 baby teeth (<b>deciduous teeth</b>) and an adult has 32 <b>permanent teeth</b>. The third molar is the wisdom tooth.${fig(['dental-xray'], ["X-ray of all the teeth"])}`),
          M("How many permanent teeth does an adult have?", ["32", "20", "28", "24"], "permanent teeth: 32; deciduous: 20."),
          T("Baby teeth have no premolars.", true, "A child has 8 incisors, 4 canines and 8 molars."),
          L("Inside a tooth", `${fig(['molar-img'], ["Structure of a molar"])}${tbl([["Section", "Meaning"], [e('crown'), "crown; above the gum"], [e('enamel'), "enamel; the hardest substance in the body"], [e('dentin'), "layer beneath the enamel"], [e('pulp'), "nerves and vessels at the core"], [e('cementum'), "covering of the root"], [e('periodontal'), "around the tooth: gum and ligament"]])}`),
          O("Order the layers of a tooth from outside to inside", ['enamel', 'dentin', 'pulp'], "Enamel, dentin, pulp."),
          L("Dental hygienist", `A <b>dental hygienist</b> scales the teeth, removes plaque, takes X-rays and teaches oral hygiene.${vs(['dental hygienist', "preventive clinical work; separate licence"], ['dental assistant', "chairside helper to the dentist"])}`),
          P("Match each part of the tooth to its meaning", [['enamel', "hard outer coating"], ['dentin', "layer under the coating"], ['pulp', "soft core of the tooth"], ['crown', "visible part of the tooth above the gum"]]),
          L("Review of the “Digestion, mouth and teeth” level", recap(["alimentary canal from mouth to anus; accessory organs: salivary glands, liver, gallbladder, pancreas", "ingestion, mastication, deglutition, peristalsis, digestion, absorption, defecation", "Hard palate at the front and soft palate at the back; uvula, frenulum, papillae", "incisor, canine, premolar, molar • 20 baby and 32 permanent • enamel, dentin, pulp"])),
          S("Spell the term for the hard outer coating of a tooth", 'enamel', 'enamel.', 'ena…'),
          N('m2r:mo')
        ]
      },
      /* ================= سطح ۲: بزاق، حلق و مری ================= */
      {
        id: 'mo4', title: "Saliva and chewing", icon: '💧', items: [
          L("Three pairs of salivary glands", `${fig(['salivary-img'], ["Salivary glands"])}The <b>parotid</b> is in front of the ear, the <b>submandibular</b> under the jaw and the <b>sublingual</b> under the tongue.${memo("par-otid means beside the ear (ot/o = ear); sub-mandibular is under the mandible (lower jaw).")}`),
          M("The largest salivary gland, in front of the ear, is…", ['parotid gland', 'submandibular gland', 'sublingual gland', 'thyroid gland'], "par- (beside) + ot/o (ear)."),
          P("Match each gland to its location", [['parotid', "in front of the ear"], ['submandibular', "under the lower jaw"], ['sublingual', "under the tongue"]]),
          L("What does saliva do?", `<b>Saliva</b> moistens and softens food, washes away bacteria and, with the enzyme <b>amylase</b>, starts the digestion of starch in the mouth.`),
          M(`What does ${e('<b>amylase</b>')} digest?`, ["starch", "building-block nutrient", "fat", "vitamins"], "amyl/o = starch; -ase = enzyme."),
          L("Chewing and the bolus", `<b>Mastication</b> breaks food down with the teeth and mixes it with saliva to form a <b>bolus</b> (a soft, rounded mouthful).${pearl("In pharmacology, bolus has another meaning too: a single dose of a drug given at once into a vein (IV bolus).")}`),
          T("bolus means a chewed mouthful moistened with saliva.", true, 'Latin: ball.'),
          M(`What is ${e('<b>sialogram</b>')}?`, ["X-ray of the salivary glands and ducts", "salivary stone", "excess saliva", "inflammation of a salivary gland"], 'sial/o + -gram.'),
          B("The salivary enzyme that starts starch digestion is ___.", ['amylase', 'pepsin', 'lipase'], 'salivary amylase.'),
          W("Build a word meaning “excessive saliva secretion”", ['sial/o', '-rrhea'], ['-lith', 'gloss/o', '-gram'], 'sial/o + -rrhea = sialorrhea.'),
          S("Spell the term for the fluid secreted into the mouth", 'saliva', "saliva; adjective: salivary.", 'sal…'),
          N('d2t:mo')
        ]
      },
      {
        id: 'mo5', title: "Pharynx and swallowing", icon: '🔄', items: [
          L("The pharynx has three parts", `${fig(['pharynx-img'], ["Pharynx, mouth and larynx"])}The <b>pharynx</b> (throat) is the shared passage for air and food: the <b>nasopharynx</b> behind the nose, the <b>oropharynx</b> behind the mouth and the <b>laryngopharynx</b> above the larynx and oesophagus.`),
          M(`Where is the ${e('<b>oropharynx</b>')}?`, ["part of the pharynx behind the mouth", "part of the pharynx behind the nose", "above the larynx", "inside the oesophagus"], "or/o (mouth) + pharyng/o."),
          O("Order the parts of the pharynx from top to bottom", ['nasopharynx', 'oropharynx', 'laryngopharynx'], "Nose, mouth, larynx."),
          L("What happens during swallowing?", `${fig('swallow')}In <b>deglutition</b> the tongue pushes the bolus back, the soft palate closes off the nasal passage and the <b>epiglottis</b> folds over the larynx like a lid so food does not enter the trachea.`),
          M(`What does the ${e('<b>epiglottis</b>')} do?`, ["covers the larynx during swallowing", "makes saliva", "pushes food into the stomach", "holds stomach acid in"], "epi- (upon) + glott (larynx, tongue)."),
          T("The pharynx is only a food passage, and air does not pass through it.", false, "False; the pharynx is a shared passage for air and food."),
          L("Pharynx terms", `${tbl([["Term", "Meaning"], [e('pharyngeal'), "pharyngeal"], [e('pharyngoplasty'), "surgical repair of the throat"], [e('pharyngoplegia'), "paralysis of the throat muscles"], [e('dysphagia'), "difficulty swallowing"]])}${pearl("A stroke patient with pharyngoplegia may send food into the trachea (aspiration); a swallowing test is done before feeding.")}`),
          P("Match each term to its meaning", [['deglutition', "swallowing"], ['epiglottis', "lid of the larynx"], ['nasopharynx', "throat behind the nose"], ['pharyngeal', "relating to the throat"]]),
          B("The cartilage lid over the larynx is called the ___.", ['epiglottis', 'uvula', 'frenulum'], 'epiglottis.'),
          S("Spell the term for the throat", 'pharynx', "pharyng/o; plural: pharynges.", 'phar…'),
          N('r2m:mo')
        ]
      },
      {
        id: 'mo6', title: "Oesophagus and peristalsis", icon: '〰️', items: [
          L("oesophagus", `The <b>esophagus</b> is a muscular tube that carries food from the pharynx to the stomach and has no digestive enzymes of its own. It passes through an opening in the diaphragm called the <b>esophageal hiatus</b>.`),
          M(`What is ${e('<b>esophageal hiatus</b>')}?`, ["opening in the diaphragm that the oesophagus passes through", "opening from the stomach into the duodenum", "narrowing of the oesophagus", "acid backflow"], "hiatus = opening, gap."),
          L("peristalsis", `${fig('peristalsis')}<b>Peristalsis</b> is an involuntary wave of smooth-muscle contraction that tightens behind the bolus and relaxes in front of it; it works from the oesophagus to the rectum.`),
          T("Peristalsis is voluntary and works by our will.", false, "False; it is involuntary."),
          L("Muscular valves", `${fig('sphincters')}A <b>sphincter</b> is a ring of muscle that opens and closes a passage. Between the oesophagus and the stomach is the <b>lower esophageal sphincter</b>, also called the LES or cardiac sphincter, which stops acid flowing back. Further down are the pyloric sphincter, the ileocecal valve and the anal sphincters.${memo("The cardiac sphincter is named for its closeness to the heart, not because it has anything to do with the heart.")}`),
          M(`${e('<b>LES</b>')} means…`, ['lower esophageal sphincter', 'large esophageal stomach', 'lower enteric segment', 'liver enzyme study'], "Lower oesophageal sphincter."),
          P("Match each sphincter to its location", [['lower esophageal sphincter', "between the oesophagus and stomach"], ['pyloric sphincter', "between the stomach and duodenum"], ['ileocecal valve', "between the ileum and caecum"], ['anal sphincters', "opening at the end of the digestive tract"]]),
          M("What happens if the LES does not close properly?", ["stomach acid flows back into the oesophagus", "food stays in the mouth", "bile is not made", "the teeth decay"], "Reflux and heartburn."),
          L("Review of the “Saliva, pharynx and oesophagus” level", recap(["Three pairs of salivary glands: parotid, submandibular, sublingual; amylase digests starch", "mastication → bolus • deglutition: the soft palate and epiglottis close off the passages", "pharynx: nasopharynx, oropharynx, laryngopharynx", "esophagus has no enzymes; peristalsis is involuntary; LES = cardiac sphincter"])),
          B("The sphincter between the oesophagus and stomach is called the cardiac sphincter or the ___.", ['LES', 'pylorus', 'ileocecal valve'], 'lower esophageal sphincter.'),
          S("Spell the term for the wave-like movement of the gut", 'peristalsis', "peri- + stalsis (contraction).", 'peri…'),
          N('ab:mo')
        ]
      },
      /* ================= سطح ۳: معده و آنزیم‌ها ================= */
      {
        id: 'mo7', title: "Parts of the stomach", icon: '🫃', items: [
          L("Five parts", `${fig(['stomach-regions'], ["Parts of the stomach"])}The <b>cardia</b> is beside the entry of the oesophagus, the <b>fundus</b> is the upper dome, the <b>body</b> is the main part, the <b>antrum</b> is the lower part and the <b>pylorus</b> is the exit opening into the duodenum.`),
          O("Order the parts of the stomach from entrance to exit", ['cardia', 'fundus', 'body', 'antrum', 'pylorus'], "cardia, fundus, body, antrum, pylorus."),
          M(`Where is the ${e('<b>pylorus</b>')}?`, ["lower opening of the stomach into the duodenum", "part beside the oesophagus", "dome at the top of the stomach", "folds inside the stomach"], "pylor/o = gatekeeper."),
          L("Folds and curves", `${fig(['stomach-img'], ["Structure of the stomach"])}The inside of the stomach has large folds called <b>rugae</b> that flatten out when the stomach fills. The outer and inner edges of the stomach are called the <b>greater</b> and <b>lesser curvature</b>.${memo("In Greek, pylor/o means gatekeeper: the pyloric sphincter lets food into the duodenum little by little.")}`),
          T("rugae are the folds inside the stomach.", true, "Singular: ruga; the hard palate has rugae too."),
          P("Match each part to its meaning", [['cardia', "beside the oesophageal entrance"], ['fundus', "upper dome"], ['antrum', "lower part"], ['pylorus', "exit opening"]]),
          M(`${e('<b>pyloroplasty</b>')} means…`, ["repair and widening of the pylorus", "removal of the pylorus", "pyloric stenosis", "cramping of the pylorus"], 'pylor/o + -plasty.'),
          B("The large folds of the inner stomach wall are called ___.", ['rugae', 'villi', 'papillae'], 'rugae.'),
          W("Build a word meaning “sudden spasm of the pylorus”", ['pylor/o', '-spasm'], ['-plasty', 'gastr/o', '-stenosis'], 'pylor/o + -spasm = pylorospasm.'),
          S("Spell the term for the stomach’s exit opening", 'pylorus', 'pylor/o + -us.', 'pylo…'),
          N('f2t:mo')
        ]
      },
      {
        id: 'mo8', title: "Gastric juice and chyme", icon: '⚗️', items: [
          L("gastric juice", `${fig('gastric-juice')}<b>Gastric juice</b> contains <b>hydrochloric acid</b> (HCl), the enzyme <b>pepsin</b> for protein, <b>intrinsic factor</b> for vitamin B12 absorption and <b>mucus</b> (a protective coating).`),
          M(`What does ${e('<b>pepsin</b>')} digest?`, ["building-block nutrient", "starch", "fat", "fibre"], "pepsin is activated by HCl."),
          M(`${e('<b>HCl</b>')} means…`, ["hydrochloric acid; stomach acid", 'hepatic cell layer', 'high calorie', 'histamine chloride'], "Hydrochloric acid."),
          L("Chyme", `In the stomach, food is churned and mixed with gastric juice into a thick liquid called <b>chyme</b>, which passes little by little through the pylorus into the duodenum. The stomach absorbs almost no food.`),
          T("Most food absorption happens in the stomach.", false, "False; most absorption happens in the small intestine."),
          L("stomach protein needed to absorb vitamin B12", `Without <b>intrinsic factor</b>, vitamin B12 is not absorbed and <b>pernicious anemia</b> develops.${pearl("After a total gastrectomy, the patient must receive B12 by injection because intrinsic factor is no longer made.")}`),
          P("Match each part of gastric juice to its job", [['HCl', "activating pepsin"], ['pepsin', "protein digestion"], ['intrinsic factor', "B12 absorption"], ['mucus', "protecting the wall"]]),
          M(`What is ${e('<b>chyme</b>')}?`, ["semi-digested food leaving the stomach", "chewed mouthful in the mouth", "faeces", "pancreatic juice"], "chyme moves on to the duodenum."),
          B("The thick liquid of semi-digested food in the stomach is ___.", ['chyme', 'bolus', 'bile'], 'chyme.'),
          S("Spell the term for the stomach’s protein-digesting enzyme", 'pepsin', "peps = digestion.", 'pep…'),
          N('t2f:mo')
        ]
      },
      {
        id: 'mo9', title: "Where is each food digested?", icon: '🥗', items: [
          L("Digestion map", `${fig('enzymes')}Starch is digested from the mouth by salivary amylase, protein in the stomach by pepsin, and all three food groups in the duodenum by pancreatic enzymes; absorption happens in the small intestine.`),
          M("Where does protein digestion begin?", ["stomach", "mouth", "colon", "oesophagus"], "pepsin in the stomach."),
          M("Where does starch digestion begin?", ["mouth", "stomach", "rectum", "liver"], 'salivary amylase.'),
          L("Enzymes ending in -ase", `${tbl([["protein that speeds up a reaction", "Food"], [e('amylase'), "starch (amyl/o)"], [e('lipase'), "fat (lip/o)"], [e('protease'), "building-block nutrient"], [e('pepsin'), "protein in the stomach; the exception without -ase"]])}${memo("root + -ase = the enzyme that digests that substance: lip/o + -ase = lipase.")}`),
          P("Match each enzyme to its food", [['amylase', "starch"], ['lipase', "fat"], ['protease', "building-block nutrient"]]),
          T("lipase is the enzyme that digests fat.", true, "lip/o = fat."),
          L("The sphincters at a glance", `From the mouth to the duodenum, food passes through two gates: the <b>LES</b> and the <b>pyloric sphincter</b>.${vs(['LES', "entry to the stomach; stops acid flowing back into the oesophagus"], ['pyloric sphincter', "exit from the stomach; lets chyme through little by little"])}`),
          M("Which order is correct?", ["bolus in the oesophagus → chyme in the stomach → duodenum", "chyme in the mouth → bolus in the stomach", "bile in the mouth → chyme in the oesophagus", "bolus in the colon → chyme in the mouth"], "The bolus reaches the stomach and becomes chyme."),
          L("Review of the “Stomach and enzymes” level", recap(["Stomach: cardia, fundus, body, antrum, pylorus; folds: rugae", "gastric juice: HCl, pepsin, intrinsic factor (B12), mucus", "chyme passes through the pylorus into the duodenum; most absorption is in the small intestine", "amylase starch • pepsin and protease protein • lipase fat"])),
          W("Build a word meaning “fat-digesting enzyme”", ['lip/o', '-ase'], ['amyl/o', '-osis', 'gastr/o'], 'lip/o + -ase = lipase.'),
          S("Spell the term for a protein that speeds up digestion", 'enzyme', "en- + zym (yeast).", 'enz…'),
          N('wb:mo')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* گوارا — دنیای ۳: روده‌ها و اندام‌های کمکی
 * روده باریک و پرزها، صفاق و مزانتر، روده بزرگ و دفع، ربع‌ها و نواحی شکم، کبد، کیسه صفرا و مجاری، پانکراس.
 * منابع: فصل Digestive System (شکل‌های روده باریک و بزرگ، پرز، صفاق، کبد و مجاری صفرا، نواحی شکم؛ جعبه ۱۳-۴).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'bw', sym: 'Gut', name: "The Intestines and Accessory Organs", short: "intestine", sub: "Duodenum, jejunum and ileum, villi and absorption, peritoneum, the large intestine and defecation, abdominal quadrants, liver, bile and pancreas",
    color: '#2F9E44', dark: '#2B8A3E', light: '#EBFBEE',
    levels: ["Small intestine and peritoneum", "Large intestine and the abdominal map", "Liver, bile and pancreas"],
    gens: EA.genIds('bw'),
    lessons: [
      /* ================= سطح ۱: روده باریک و صفاق ================= */
      {
        id: 'bw1', title: "Three parts of the small intestine", icon: '➰', items: [
          L("D, J, I", `${fig('dji')}The <b>small intestine</b> is a long, coiled tube from the pylorus to the caecum: the <b>duodenum</b>, <b>jejunum</b> and <b>ileum</b>.${memo("Remember the order with DJI: Duodenum, Jejunum, Ileum.")}`),
          O("Order the parts of the small intestine from the stomach downwards", ['duodenum', 'jejunum', 'ileum'], "Duodenum, jejunum, ileum."),
          M(`What is a feature of a ${e('<b>duodenum</b>')}?`, ["the shortest part; bile and pancreatic juice drain into it", "the longest part, just before the caecum", "part of the large intestine", "part of the stomach"], "duodeni means “twelve fingers”."),
          L("What do the names say?", `${fig(['small-int-img'], ["small intestine"])}${tbl([["Section", "Origin of the name"], [e('duodenum'), "twelve finger-widths long"], [e('jejunum'), "empty; it was usually found empty after death"], [e('ileum'), "twisted; the longest part, reaching the caecum"]])}`),
          T("In Latin, jejunum means “empty”.", true, 'jejunus = empty.'),
          M("The last part of the small intestine, joined to the caecum, is…", ['ileum', 'jejunum', 'duodenum', 'ilium'], "ileum; ilium is the hip bone."),
          L("Intestine or bowel", `${e('intestine')} and ${e('bowel')} mean the same. The small intestine is “small” because its diameter is smaller, not because it is shorter.${pearl("In a record, small bowel obstruction means a blockage of the small intestine.")}`),
          P("Match each part to its feature", [['duodenum', "twelve fingers"], ['jejunum', "empty"], ['ileum', "final part; joins the caecum"]]),
          B("The middle part of the small intestine is the ___.", ['jejunum', 'ileum', 'cecum'], "duodenum, jejunum, ileum."),
          S("Spell the term for the first part of the small intestine", 'duodenum', 'duoden/o + -um.', 'duo…'),
          N('t2f:bw')
        ]
      },
      {
        id: 'bw2', title: "Villi and absorption", icon: '🧽', items: [
          L("Little fingers of absorption", `${fig(['villi-img'], ["Small intestine wall and villi"])}The wall of the small intestine has millions of finger-like projections called <b>villi</b> (singular villus) that greatly increase the absorbing surface.`),
          M(`What do ${e('<b>villi</b>')} do?`, ["increase the absorbing surface of the small intestine", "make stomach acid", "move stool along", "store bile"], "villi = little fingers of absorption."),
          L("Inside a villus", `${fig('villus')}In each villus, blood capillaries absorb sugars and protein, and a lymphatic capillary called the <b>lacteal</b> absorbs fat.`),
          M(`What does the ${e('<b>lacteal</b>')} absorb?`, ["fat", "water", "vitamin B12", "salt"], "lacteal = the lymphatic capillary of a villus."),
          T("Fats are absorbed mainly through the lymphatic vessel of the villus (lacteal).", true, "Not directly through a blood capillary."),
          L("Absorption", `<b>Absorption</b> is the passage of digested material through the gut wall into blood and lymph. Most absorption is in the small intestine; the <b>ileum</b> absorbs vitamin B12 and bile salts.${vs(['digestion', "breaking food into small molecules"], ['absorption', "passage of molecules into blood and lymph"])}`),
          M("In which part is vitamin B12 absorbed?", ['ileum', 'duodenum', 'stomach', 'colon'], "In the ileum, with the help of intrinsic factor from the stomach."),
          L("The final valve", `At the end of the ileum is the <b>ileocecal valve</b>, which lets the contents of the small intestine into the caecum and stops them flowing back.`),
          P("Match each term to its meaning", [['villi', "finger-like projections of the gut lining"], ['lacteal', "lymphatic capillary of a villus"], ['absorption', "taking nutrients into the blood"], ['ileocecal valve', "valve between ileum and caecum"]]),
          B("The lymphatic capillary inside an intestinal villus is called the ___.", ['lacteal', 'villus', 'mesentery'], 'lacteal.'),
          S("Spell the term for the passage of digested material into the blood", 'absorption', 'absorb + -tion.', 'abs…'),
          N('d2t:bw')
        ]
      },
      {
        id: 'bw3', title: "Peritoneum and mesentery", icon: '🫧', items: [
          L("The great membrane of the abdomen", `${fig(['peritoneum-img'], ["Peritoneal cavity"])}The <b>peritoneum</b> is a two-layered membrane: the parietal layer lines the abdominal wall and the visceral layer covers the organs. Between them is the <b>peritoneal cavity</b> with a little slippery fluid.`),
          M(`What is ${e('<b>peritoneum</b>')}?`, ["membrane lining the abdominal cavity and its organs", "part of the small intestine", "a gland in the abdomen", "ligament of the liver"], "peri- (around) + teinein (to stretch)."),
          L("Folds of the peritoneum", `${tbl([["Fold", "Job"], [e('mesentery'), "attaches the small intestine to the back wall of the abdomen"], [e('mesocolon'), "attaches the colon to the back wall"], [e('greater omentum'), "an apron hanging from the stomach over the intestines"]])}${memo("mes- means middle: mesentery is “middle of the intestine” and mesocolon “middle of the colon”.")}`),
          P("Match each fold to its job", [['mesentery', "holding the small intestine"], ['mesocolon', "holding the colon"], ['greater omentum', "apron over the intestines"]]),
          M(`${e('<b>mesentery</b>')} means…`, ["peritoneal fold that holds the small intestine", "inflammation of the peritoneum", "muscular wall of the intestine", "ileocaecal valve"], 'mes- + enter/o + -y.'),
          T("The greater omentum hangs like an apron from the stomach over the intestines.", true, "omentum = apron."),
          L("When the peritoneum is inflamed", `A burst appendix or a perforated stomach ulcer can cause <b>peritonitis</b> (inflammation of the peritoneum), which is an emergency. Excess fluid in the peritoneal cavity is called <b>ascites</b>.${pearl("A hard, painful, board-like abdomen is a sign of peritonitis.")}`),
          M(`${e('<b>peritonitis</b>')} means…`, ["inflammation of the peritoneum", "inflammation of the small intestine", "stomach inflammation", "inflammation of the appendix"], 'peritone/o + -itis.'),
          L("Review of the “Small intestine and peritoneum” level", recap(["Small intestine: duodenum, jejunum, ileum (DJI)", "villi increase the absorbing surface; the lacteal absorbs fat; the ileum absorbs vitamin B12", "ileocecal valve between the ileum and caecum", "peritoneum has two layers; mesentery, mesocolon and greater omentum are its folds; peritonitis is its inflammation"])),
          B("The peritoneal fold that attaches the colon to the back wall is the ___.", ['mesocolon', 'mesentery', 'omentum'], 'meso- + colon.'),
          S("Spell the term for the membrane lining the abdominal cavity", 'peritoneum', 'peritone/o + -um.', 'perit…'),
          N('m2r:bw')
        ]
      },
      /* ================= سطح ۲: روده بزرگ و نقشه شکم ================= */
      {
        id: 'bw4', title: "Parts of the large intestine", icon: '🔁', items: [
          L("From caecum to rectum", `${fig('colon-map')}The <b>large intestine</b> begins with the <b>cecum</b>, from which the <b>appendix</b> hangs; then comes the <b>colon</b> with its four parts, ascending, transverse, descending and sigmoid, and finally the <b>rectum</b> and <b>anus</b>.`),
          O("Put the parts of the colon in order", ['ascending colon', 'transverse colon', 'descending colon', 'sigmoid colon'], "Ascending, transverse, descending, sigmoid."),
          M(`What shape is ${e('<b>sigmoid colon</b>')}?`, ["S-shaped; just before the rectum", "straight and vertical", "horizontal across the upper abdomen", "a pouch on the right side"], "sigma = the Greek letter S."),
          L("Two bends", `The colon has two bends: the <b>hepatic flexure</b> on the right beside the liver and the <b>splenic flexure</b> on the left beside the spleen.${fig(['large-int-img'], ["large intestine"])}`),
          P("Match each part to its location", [['hepatic flexure', "right bend beside the liver"], ['splenic flexure', "left bend beside the spleen"], ['cecum', "start of the large intestine"], ['sigmoid colon', "just before the rectum"]]),
          T("The appendix is attached to the sigmoid colon.", false, "False; it is attached to the caecum in the lower right abdomen."),
          L("Names", `${tbl([["Section", "Origin of the name"], [e('cecum'), "blind; a closed pouch"], [e('rectum'), "right"], [e('appendix'), "hanging; vermiform means worm-shaped"]])}${memo("cecum = blind; like a dead-end alley at the start of the large intestine.")}`),
          M("Which part of the large intestine runs horizontally from right to left?", ['transverse colon', 'ascending colon', 'descending colon', 'rectum'], "trans- = through."),
          B("The appendix hangs from the ___.", ['cecum', 'rectum', 'ileum'], "cecum = the pouch at the start of the large intestine."),
          S("Spell the term for the pouch at the start of the large intestine", 'cecum', 'cec/o + -um.', 'ce…'),
          N('f2t:bw')
        ]
      },
      {
        id: 'bw5', title: "Water, stool and defecation", icon: '🚽', items: [
          L("What does the large intestine do?", `${fig(['colon-regions'], ["Where the parts sit in the abdomen"])}The large intestine absorbs water and electrolytes, its bacteria make vitamin K, and it turns what is left into <b>feces</b> or stool.`),
          M("The main job of the large intestine is…", ["absorbing water and forming stool", "protein digestion", "making bile", "secreting insulin"], "Water and electrolytes."),
          T("The bacteria of the large intestine make vitamin K.", true, "And some B vitamins."),
          L("Excretion", `Stool collects in the rectum and leaves through the anal canal by <b>defecation</b>, or bowel movement, written BM in records. The anus has two sphincters: internal (involuntary) and external (voluntary).${pearl("After abdominal surgery, the nurse records the first BM and the bowel sounds to make sure the bowel is working again.")}`),
          M(`${e('<b>BM</b>')} in a chart means…`, ["bowel movement; passing stool", 'body mass', 'bone marrow', 'blood mean'], 'bowel movement.'),
          P("Match each term to its meaning", [['feces', "faeces"], ['defecation', "bowel movement"], ['rectum', "where stool collects"], ['anus', "final opening"]]),
          M("Which anal sphincter is voluntary?", ['external anal sphincter', 'internal anal sphincter', 'pyloric sphincter', 'LES'], "The external is voluntary and the internal involuntary."),
          L("Stool at a glance", `Normal stool is brown; the colour comes from bile pigments. In the diseases world you will see that stool colour is an important clue.${vs(['feces', "the stool itself"], ['defecation', "the act of expelling it"])}`),
          B("The passing of stool from the rectum is called ___.", ['defecation', 'digestion', 'deglutition'], 'defecation.'),
          S("Spell the term for stool", 'feces', "feces; adjective: fecal.", 'fe…'),
          N('r2m:bw')
        ]
      },
      {
        id: 'bw6', title: "The map of the abdomen", icon: '🧭', items: [
          L("Four quadrants", `${fig('quadrants')}Two perpendicular lines through the navel divide the abdomen into four quadrants: <b>RUQ</b>, <b>LUQ</b>, <b>RLQ</b> and <b>LLQ</b>. Right and left are always from the patient’s point of view.`),
          M("Which quadrant is the appendix in?", ['RLQ', 'LUQ', 'RUQ', 'LLQ'], 'right lower quadrant.'),
          M("In which quadrant are the liver and gallbladder mostly found?", ['RUQ', 'LLQ', 'LUQ', 'RLQ'], 'right upper quadrant.'),
          L("Nine regions", `${fig(['abd-regions'], ["the nine regions of the abdomen"])}For more detail, the abdomen is also divided into nine regions. The three middle regions: <b>epigastric</b> (pit of the stomach), <b>umbilical</b> (navel) and <b>hypogastric</b> (lower abdomen).`),
          O("Order the three middle abdominal regions from top to bottom", ['epigastric', 'umbilical', 'hypogastric'], "epi- above, hypo- below."),
          P("Match each abbreviation to its meaning", [['RUQ', "right upper quadrant"], ['LUQ', "left upper quadrant"], ['RLQ', "right lower quadrant"], ['LLQ', "left lower quadrant"]]),
          T("When facing the patient, their right quadrant is on the left of the picture.", true, "Always named from the patient’s point of view."),
          L("Review of the “Large intestine and the abdominal map” level", recap(["cecum → ascending → transverse → descending → sigmoid → rectum → anus; the appendix is attached to the caecum", "hepatic flexure on the right and splenic flexure on the left", "The large intestine absorbs water; feces, defecation, BM", "RUQ, LUQ, RLQ, LLQ from the patient’s view; epigastric, umbilical, hypogastric"])),
          B("The region above the navel and below the breastbone, the pit of the stomach, is the ___ region.", ['epigastric', 'hypogastric', 'umbilical'], 'epi- + gastr/o + -ic.'),
          S("Spell the term for one quarter of the abdomen", 'quadrant', "quadr = four.", 'quad…'),
          N('ab:bw')
        ]
      },
      /* ================= سطح ۳: کبد، صفرا و پانکراس ================= */
      {
        id: 'bw7', title: "liver", icon: '🟤', items: [
          L("The largest gland", `${fig('liver-jobs')}The <b>liver</b> sits in the right upper quadrant under the diaphragm. It makes bile, stores sugar as <b>glycogen</b>, detoxifies and makes blood proteins. Life is impossible without a liver.`),
          M("In what form does the liver store extra sugar?", ['glycogen', 'bile', 'insulin', 'bilirubin'], "glyc/o (sugar) + -gen."),
          L("Bile and bilirubin", `<b>Bile</b> is a yellow-green fluid that breaks fat into tiny droplets (<b>emulsification</b>). Its colour comes from <b>bilirubin</b>, which comes from the breakdown of old red blood cells.`),
          M(`Where does ${e('<b>bilirubin</b>')} come from?`, ["breakdown of old red blood cells", "protein digestion", "pancreatic secretion", "gut bacteria"], "The bile pigment."),
          T("Bile is a digestive enzyme and breaks fat down chemically.", false, "False; bile is not an enzyme and only breaks fat into tiny droplets (emulsification)."),
          L("The portal system", `The <b>hepatic portal system</b> carries blood full of absorbed nutrients from the intestines and stomach to the liver first, to be processed and detoxified.${pearl("In liver disease the blood enzymes ALT and AST rise; the test for them is called an LFT.")}`),
          P("Match each term to its meaning", [['glycogen', "storing sugar"], ['bile', "green-yellow fluid from the liver"], ['bilirubin', "yellow bile pigment"], ['emulsification', "breaking fat into droplets"]]),
          M(`${e('<b>hepatomegaly</b>')} means…`, ["enlarged liver", "liver inflammation", "liver tumour", "liver cell"], 'hepat/o + -megaly.'),
          B("The vessels that carry blood from the intestines to the liver first are called the ___.", ['hepatic portal system', 'hepatic duct', 'cystic duct'], "portal = gateway."),
          S("Spell the term for the organ that makes bile", 'liver', "Adjective: hepatic.", 'li…'),
          N('t2f:bw')
        ]
      },
      {
        id: 'bw8', title: "Gallbladder and ducts", icon: '🟢', items: [
          L("The path of bile", `${fig(['ducts-img'], ["Liver, gallbladder, pancreas and ducts"])}The liver sends bile out through the <b>hepatic duct</b>. Bile travels through the <b>cystic duct</b> to the <b>gallbladder</b>, where it is stored and concentrated.`),
          L("From the gallbladder to the duodenum", `${fig('bile-flow')}After a fatty meal the gallbladder contracts and bile flows through the <b>common bile duct</b> (CBD) into the duodenum. The pancreatic duct opens beside it at the <b>duodenal papilla</b>, and the <b>sphincter of Oddi</b> controls this opening.`),
          O("Put the route of bile in order, from production to use", ['liver', 'hepatic duct', 'cystic duct', 'gallbladder', 'common bile duct', 'duodenum'], "Made in the liver, stored in the gallbladder, used in the duodenum."),
          M(`${e('<b>CBD</b>')} means…`, ['common bile duct', 'colon bowel disease', 'cystic bile drain', 'chronic biliary disorder'], "The common bile duct."),
          T("The gallbladder makes bile.", false, "False; the liver makes it, and the gallbladder stores and concentrates it."),
          P("Match each duct to its job", [['hepatic duct', "brings bile from the liver"], ['cystic duct', "goes to the gallbladder and back"], ['common bile duct', "empties bile into the duodenum"]]),
          L("Roots along the route", `${tbl([["root", "Location"], [e('cholecyst/o'), "gallbladder"], [e('cholangi/o'), "any bile duct"], [e('choledoch/o'), "common bile duct"]])}${memo("cholecyst = chole (bile) + cyst (sac); cystic duct likewise means the duct of the “sac”.")}`),
          M("What is the shared opening of bile and pancreatic juice into the duodenum called?", ['duodenal papilla', 'pylorus', 'ileocecal valve', 'cardia'], "papilla of Vater; the sphincter of Oddi closes it."),
          B("The sphincter at the opening of the bile duct into the duodenum is the ___.", ['sphincter of Oddi', 'pyloric sphincter', 'LES'], 'sphincter of Oddi.'),
          S("Spell the term for the sac that stores bile", 'gallbladder', "gall + bladder; one word.", 'gall…'),
          N('d2t:bw')
        ]
      },
      {
        id: 'bw9', title: "pancreas", icon: '🟡', items: [
          L("Two glands in one organ", `${fig('pancreas-jobs')}The <b>pancreas</b> lies behind the stomach. Its exocrine part pours <b>pancreatic juice</b> through the <b>pancreatic duct</b> into the duodenum, and its endocrine part releases <b>insulin</b> and glucagon into the blood.`),
          M("Which pancreatic hormone lowers blood sugar?", ['insulin', 'glucagon', 'pepsin', 'bile'], 'insulin.'),
          L("pancreatic juice", `${tbl([["Part", "Job"], [e('amylase'), "digests starch"], [e('lipase'), "digests fat"], [e('protease'), "protein digestion"], [e('bicarbonate'), "neutralising the acid in chyme"]])}${pearl("In pancreatic inflammation, blood amylase and lipase rise; these are the tests ordered to diagnose pancreatitis.")}`),
          P("Match each part of pancreatic juice to its job", [['amylase', "starch"], ['lipase', "fat"], ['protease', "building-block nutrient"], ['bicarbonate', "neutralising acid"]]),
          T("The bicarbonate in pancreatic juice neutralises the acid of chyme in the duodenum.", true, "So the enzymes can work."),
          M(`Where does the ${e('<b>pancreatic duct</b>')} carry pancreatic juice?`, ["duodenum", "stomach", "liver", "colon"], "Into the duodenum, beside the CBD."),
          L("The name “pancreas”", `In Greek, pancreas means “all flesh” (pan + kreas), because of its fleshy look. Its traditional Persian name is lowzol-me’deh.${vs(['exocrine', "exocrine: enzymes into the duodenum"], ['endocrine', "endocrine: insulin into the blood"])}`),
          M("What does the endocrine part of the pancreas make?", ["insulin and glucagon", "amylase and lipase", 'bile', 'HCl'], "endocrine = hormones into the blood."),
          L("Review of the “Liver, bile and pancreas” level", recap(["Liver: bile, glycogen, detoxification; the hepatic portal system carries blood from the gut to the liver", "bile is not an enzyme; it emulsifies fat • bilirubin comes from old red cells", "hepatic duct → cystic duct ↔ gallbladder → common bile duct → duodenum; its opening has the sphincter of Oddi", "pancreas: amylase, lipase, protease and bicarbonate into the duodenum; insulin and glucagon into the blood"])),
          B("The pancreatic enzyme that digests fat is ___.", ['lipase', 'amylase', 'pepsin'], 'lip/o + -ase.'),
          S("Spell the term for the organ that makes insulin and digestive enzymes", 'pancreas', 'pancreat/o.', 'pan…'),
          N('wb:bw')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* گوارا — دنیای ۴: بیماری‌های دهان، مری و معده
 * علامت‌های گوارش بالا، بلع و هضم دشوار، گاز و اشتها، پوسیدگی و لثه، ضایعه‌های دهان، شکاف‌ها و غدد بزاقی،
 * ریفلاکس و مری، زخم پپتیک و بیماری‌های معده.
 * منابع: فصل Digestive System (بیماری‌های دهان، مری و معده؛ شکل‌های GERD، فتق هیاتال و زخم پپتیک؛ غنی‌سازی؛ کیس آبه).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'up', sym: 'Up', name: "Diseases of the Mouth, Oesophagus and Stomach", short: "Upper GI", sub: "Nausea and vomiting, difficult swallowing and indigestion, gas and appetite, decay and gums, mouth ulcers and thrush, reflux, hiatal hernia and peptic ulcer",
    color: '#C2255C', dark: '#A61E4D', light: '#FFF0F6',
    levels: ["Upper digestive symptoms", "Diseases of the mouth and teeth", "Oesophagus and stomach"],
    gens: EA.genIds('up'),
    lessons: [
      /* ================= سطح ۱: علامت‌های گوارش بالا ================= */
      {
        id: 'up1', title: "Nausea, vomiting, heartburn", icon: '🤢', items: [
          L("Upper digestive symptoms", `${fig('upper-sx')}<b>Nausea</b> (from the Greek word for seasickness) is the unpleasant feeling that comes before <b>emesis</b>, or vomiting. In records, “N&V” means nausea and vomiting.`),
          M(`${e('<b>N&V</b>')} means…`, ["nausea and vomiting; feeling sick and being sick", 'nerves and veins', 'night and vision', 'nasal and vocal'], 'nausea and vomiting.'),
          L("Types of vomiting", `${tbl([["Term", "Meaning"], [e('hyperemesis'), "severe, repeated vomiting; as in hyperemesis gravidarum in pregnancy"], [e('hematemesis'), "vomiting blood; sometimes brown like coffee grounds"], [e('regurgitation'), "return of stomach contents to the mouth without straining"]])}`),
          M(`${e('<b>hematemesis</b>')} means…`, ["vomiting blood", "blood in the stool", "excessive vomiting", "coughing blood"], 'hemat/o + -emesis.'),
          T("regurgitation means food coming back up into the mouth without straining.", true, "re- (back) + gurgitare (to flow)."),
          L("Heartburn and belching", `<b>Pyrosis</b> is the same as <b>heartburn</b>: a burning behind the breastbone when acid comes back up into the oesophagus. <b>Eructation</b> means belching, releasing stomach gas through the mouth.${memo("pyr/o means fire: pyrosis is “fire” behind the breastbone.")}`),
          P("Match each term to its meaning", [['pyrosis', "Heartburn"], ['eructation', "belching"], ['regurgitation', "food coming back into the mouth"], ['hyperemesis', "excessive vomiting"]]),
          M("The patient says, “My chest burns after meals.” Which term fits?", ['pyrosis', 'eructation', 'nausea', 'aphagia'], 'heartburn = pyrosis.'),
          B("The medical term for belching is ___.", ['eructation', 'emesis', 'flatus'], 'eructation.'),
          S("Spell the term for the queasy feeling before vomiting", 'nausea', "nausea; from the Greek nausia.", 'nau…'),
          N('t2f:up')
        ]
      },
      {
        id: 'up2', title: "Difficult swallowing and digestion", icon: '🍴', items: [
          L("The -phagia family", `${fig('phagia-family')}${e('-phagia')} means eating or swallowing: <b>dysphagia</b> is difficulty swallowing, <b>aphagia</b> inability to swallow, <b>odynophagia</b> painful swallowing, <b>polyphagia</b> overeating and <b>aerophagia</b> swallowing air.`),
          M(`${e('<b>odynophagia</b>')} means…`, ["painful swallowing", "inability to swallow", "overeating", "swallowing air"], "odyn/o (pain) + -phagia."),
          M(`${e('<b>aphagia</b>')} means…`, ["complete inability to swallow", "difficulty swallowing", "overeating", "loss of appetite"], "a- (without) + -phagia."),
          L("Difficult digestion", `<b>Dyspepsia</b> is indigestion, or “stomach pain after meals”, and <b>bradypepsia</b> is slow digestion (brady- means slow). <b>Postprandial</b> means after a meal.${pearl("Mr Rezaei had dyspepsia for years and felt better with antacids, until his stomach ulcer bled.")}`),
          P("Match each term to its meaning", [['dysphagia', "difficulty swallowing"], ['dyspepsia', "indigestion"], ['bradypepsia', "slow digestion"], ['polyphagia', "overeating"]]),
          T("dysphagia and dysphasia mean the same thing.", false, "False; dysphagia is difficulty swallowing and dysphasia is difficulty speaking."),
          L("Watch out for sound-alikes", `${vs(['dysphagia', "difficulty swallowing; g as in gag"], ['dysphasia', "difficulty speaking; s as in speak"])}${vs(['aphagia', "inability to swallow"], ['aphasia', "inability to speak"])}`),
          M("A patient with oesophageal cancer has trouble swallowing food. Which term fits?", ['dysphagia', 'dysphasia', 'aphasia', 'dyspepsia'], "phag = swallowing."),
          B("Swallowing too much air while eating is ___.", ['aerophagia', 'polyphagia', 'aphagia'], 'aer/o + -phagia.'),
          W("Build a word meaning “slow digestion”", ['brady-', '-pepsia'], ['dys-', '-phagia', 'poly-'], 'brady- + -pepsia = bradypepsia.'),
          S("Spell the term for difficulty swallowing", 'dysphagia', 'dys- + -phagia.', 'dysph…'),
          N('m2r:up')
        ]
      },
      {
        id: 'up3', title: "Gas, appetite and weight", icon: '⚖️', items: [
          L("Gas", `<b>Flatulence</b> is excess gas in the stomach or intestines, and <b>flatus</b> is gas passed through the anus. <b>Borborygmus</b> is the rumbling sound of gas moving through the intestines.${vs(['flatulence', "excess gas in the GI tract"], ['flatus', "gas passed through the anus"])}`),
          M(`${e('<b>borborygmus</b>')} means…`, ["rumbling of the intestines", "belching", "abdominal bloating", "constipation"], "It sounds like its name!"),
          T("flatus means gas passed through the anus.", true, 'flatus = gas expelled through the anus.'),
          L("appetite", `<b>Anorexia</b> means loss of appetite, a symptom (an- + orex/o). <b>Anorexia nervosa</b> is a mental illness: refusing to eat out of fear of gaining weight. <b>Bulimia</b> is binge eating followed by deliberate vomiting.${memo("anorexia is a symptom; with nervosa it becomes a disease.")}`),
          M(`What is ${e('<b>bulimia</b>')}?`, ["binge eating then deliberate vomiting", "simple loss of appetite", "weight loss from cancer", "painful swallowing"], 'binge-purge.'),
          L("Thinness and obesity", `<b>Cachexia</b> is severe weight loss and wasting in chronic diseases such as cancer. <b>Obesity</b> means excess body fat, usually a BMI of 30 or more.${pearl("BMI, or body mass index = weight in kilograms ÷ height in metres squared. Sources differ slightly on the cut-off for obesity; most say 30.")}`),
          P("Match each term to its meaning", [['anorexia', "loss of appetite"], ['cachexia', "extreme wasting in illness"], ['obesity', "excess body fat"], ['flatulence', "excess gas in the gut"]]),
          M(`${e('<b>BMI</b>')} means…`, ["body mass index; weight relative to height", 'bowel movement index', 'basal metabolic intake', 'bile mass increase'], 'body mass index.'),
          L("Review of the “Upper GI symptoms” level", recap(["nausea → emesis • hyperemesis severe • hematemesis bloody • regurgitation without straining", "pyrosis = heartburn • eructation = belching", "dysphagia, aphagia, odynophagia, polyphagia, aerophagia • dyspepsia, bradypepsia", "flatulence and flatus • borborygmus • anorexia, anorexia nervosa, bulimia, cachexia, obesity"])),
          B("Severe weight loss and wasting in advanced cancer is called ___.", ['cachexia', 'anorexia', 'bulimia'], "cac/o (bad) + -hexia (condition)."),
          S("Spell the term for loss of appetite", 'anorexia', 'an- + orex/o + -ia.', 'ano…'),
          N('f2t:up')
        ]
      },
      /* ================= سطح ۲: بیماری‌های دهان و دندان ================= */
      {
        id: 'up4', title: "Decay and gums", icon: '🦷', items: [
          L("tooth decay", `${fig('tooth-decay')}<b>Dental plaque</b> is a sticky layer of bacteria on the teeth. The bacteria’s acid eats into the enamel and causes <b>dental caries</b> (decay); if it reaches the pulp, a tooth abscess develops.`),
          O("Put the progress of decay in order", ['plaque', 'enamel caries', 'dentin caries', 'pulp infection'], "From the surface inwards."),
          M(`${e('<b>dental caries</b>')} means…`, ["tooth decay", "tartar on the teeth", "tooth grinding", "gum inflammation"], "In Latin, caries means decay."),
          L("gums", `<b>Gingivitis</b> is inflammation of the gums, usually caused by plaque. If untreated it becomes <b>periodontitis</b>: destruction of the gum and the bone that holds the tooth, the most common cause of tooth loss.`),
          T("periodontitis can cause tooth loss.", true, 'peri- + odont/o + -itis.'),
          L("A few other problems", `${tbl([["Term", "Meaning"], [e('halitosis'), "bad breath"], [e('xerostomia'), "dry mouth from reduced saliva"], [e('bruxism'), "grinding of the teeth, mostly during sleep"], [e('malocclusion'), "upper and lower teeth not meeting properly"]])}${pearl("xerostomia is common in older patients and in those who have had head and neck radiotherapy, and it increases decay.")}`),
          P("Match each term to its meaning", [['halitosis', "bad breath"], ['xerostomia', "dry mouth"], ['bruxism', "tooth grinding"], ['malocclusion', "poor fit of the teeth when biting"]]),
          M(`${e('<b>xerostomia</b>')} means…`, ["dry mouth", "inflammation of the mouth", "bad breath", "salivary stone"], "xer/o (dry) + stom/o (mouth) + -ia."),
          B("Inflammation of the gums is called ___.", ['gingivitis', 'glossitis', 'stomatitis'], 'gingiv/o + -itis.'),
          W("Build a word meaning “dry mouth”", ['xer/o', 'stom/o', '-ia'], ['gloss/o', '-itis', 'sial/o'], "xer/o + stom/o + -ia = xerostomia; stom/o is a short form of stomat/o."),
          S("Spell the term for grinding the teeth", 'bruxism', "brux = grinding the teeth + -ism.", 'brux…'),
          N('d2t:up')
        ]
      },
      {
        id: 'up5', title: "Mouth ulcers, thrush and white patches", icon: '⚪', items: [
          L("Six mouth lesions", `${fig('mouth-lesions')}${fig(['canker-img'], ["mouth ulcer"])}An <b>aphthous ulcer</b>, or canker sore, is a small, painful ulcer of the oral mucosa.`),
          M(`${e('<b>aphthous ulcer</b>')} is the same as…`, ["mouth ulcer (canker sore)", "cold sore", "thrush", "precancerous white patch"], "A small, painful mouth ulcer."),
          L("Telling the white patches apart", `${vs(['thrush', "thrush: a Candida fungal infection; a white patch that wipes off"], ['leukoplakia', "a firm white patch that does not wipe off; precancerous"])}${memo("leuk/o means white and plak means plaque: leukoplakia is a “white plaque”.")}`),
          T("leukoplakia is a precancerous lesion.", true, "Especially in smokers; it needs a biopsy."),
          M("White patches that wipe off in a baby’s mouth, caused by the fungus Candida…", ['thrush', 'leukoplakia', 'herpes labialis', 'cheilosis'], 'oral candidiasis.'),
          L("Lips and tongue", `${tbl([["Term", "Meaning"], [e('herpes labialis'), "cold sore on the lip caused by HSV-1"], [e('cheilosis'), "cracks at the corners of the mouth, often from vitamin B deficiency"], [e('cheilitis'), "inflammation of the lips"], [e('glossitis'), "inflammation of the tongue"], [e('stomatitis'), "inflammation of the mouth lining"], [e('Vincent disease'), "ulcerating, bleeding infection of the gums"]])}`),
          P("Match each lesion to its meaning", [['herpes labialis', "cold sore"], ['cheilosis', "cracking at the corners of the mouth"], ['glossitis', "inflammation of the tongue"], ['Vincent disease', "ulcerative gum inflammation"]]),
          M(`Which one does ${e('<b>HSV-1</b>')} cause?`, ['herpes labialis', 'thrush', 'leukoplakia', 'dental caries'], 'herpes simplex virus type 1.'),
          B("A firm, precancerous white patch in the mouth is ___.", ['leukoplakia', 'thrush', 'aphthous ulcer'], 'leuk/o + plakia.'),
          S("Spell the term for a fungal white coating in the mouth", 'thrush', 'thrush = oral candidiasis.', 'thr…'),
          N('r2m:up')
        ]
      },
      {
        id: 'up6', title: "Clefts and salivary glands", icon: '🧵', items: [
          L("Cleft lip and palate", `<b>Cleft lip</b> is a congenital split of the upper lip and <b>cleft palate</b> a congenital split in the roof of the mouth; they are often seen together and are repaired surgically: ${e('cheiloplasty')} repairs the lip and ${e('palatoplasty')} the palate.`),
          M(`${e('<b>palatoplasty</b>')} means…`, ["surgical repair of the palate", "removal of the palate", "suture of the tongue", "incision of the lip"], 'palat/o + -plasty.'),
          T("cheiloplasty means repair of the lip.", true, 'cheil/o + -plasty.'),
          L("Tongue-tie", `<b>Ankyloglossia</b>, or tongue-tie, is a short frenulum that limits tongue movement and makes breastfeeding hard for a newborn.${memo("ankyl/o means bent or stuck: a tongue stuck to the floor of the mouth.")}`),
          M(`What is ${e('<b>ankyloglossia</b>')}?`, ["tongue-tie; a short frenulum", "inflammation of the tongue", "paralysis of the tongue", "enlarged tongue"], 'tongue-tie.'),
          L("Salivary glands", `${tbl([["Term", "Meaning"], [e('sialadenitis'), "inflammation of a salivary gland"], [e('parotitis'), "inflammation of the parotid gland; as in mumps"], [e('sialolith'), "salivary stone"], [e('sialorrhea'), "excess saliva"]])}${pearl("A salivary stone is usually in the submandibular gland and causes swelling and pain while eating.")}`),
          P("Match each term to its meaning", [['sialadenitis', "inflammation of a salivary gland"], ['parotitis', "inflamed parotid"], ['sialolith', "salivary stone"], ['cleft palate', "split in the roof of the mouth"]]),
          M("Which gland does mumps mostly inflame?", ['parotid', 'sublingual', 'pancreas', 'thyroid'], 'parotitis.'),
          L("Review of the “Diseases of the mouth and teeth” level", recap(["plaque → dental caries and then abscess • gingivitis → periodontitis", "halitosis, xerostomia, bruxism, malocclusion", "aphthous ulcer, thrush, leukoplakia (precancerous), herpes labialis, cheilosis, Vincent disease", "cleft lip and cleft palate • ankyloglossia • sialadenitis, parotitis, sialolith"])),
          B("Inflammation of a salivary gland is called ___.", ['sialadenitis', 'sialolith', 'sialorrhea'], 'sialaden/o + -itis.'),
          S("Spell the term for surgical repair of the lip", 'cheiloplasty', 'cheil/o + -plasty.', 'cheil…'),
          N('ab:up')
        ]
      },
      /* ================= سطح ۳: مری و معده ================= */
      {
        id: 'up7', title: "Reflux and the oesophagus", icon: '🔥', items: [
          L('GERD', `${fig(['gerd-img'], ["Reflux and oesophagitis"])}<b>Gastroesophageal reflux disease</b> (GERD) is the chronic backflow of stomach acid into the oesophagus because the LES does not close properly. Its main symptom is heartburn.`),
          M(`${e('<b>GERD</b>')} comes from weakness of which sphincter?`, ['lower esophageal sphincter', 'pyloric sphincter', 'ileocecal valve', 'sphincter of Oddi'], 'LES.'),
          L("If reflux continues", `${fig('gerd-chain')}Acid inflames the oesophagus (<b>esophagitis</b>), and over the years the oesophageal lining changes: <b>Barrett esophagus</b>, a precancerous condition.`),
          O("Put the reflux chain in order", ["weak LES", "acid reflux", 'esophagitis', 'Barrett esophagus'], "From cause to precancerous outcome."),
          T("Barrett esophagus is a precancerous change in the oesophageal lining in chronic reflux.", true, "It needs follow-up with EGD."),
          L("Hiatal hernia and achalasia", `${fig(['hiatal-img'], ["Hiatal hernia"])}In a <b>hiatal hernia</b>, part of the stomach moves up through the oesophageal opening in the diaphragm into the chest, which makes reflux worse. In <b>achalasia</b>, the opposite happens: the LES does not relax and food does not reach the stomach. <b>Esophageal atresia</b> is a congenital closure of the oesophagus in a newborn.${vs(['GERD', "LES too open"], ['achalasia', "LES too closed"])}`),
          M(`${e('<b>achalasia</b>')} means…`, ["failure of the LES to relax during swallowing", "acid flowing back into the oesophagus", "inflammation of the oesophagus", "perforation of the oesophagus"], "a- (without) + chalasia (relaxation)."),
          P("Match each disease to its meaning", [['esophagitis', "inflammation of the oesophagus"], ['hiatal hernia', "stomach moving up through the diaphragm opening"], ['achalasia', "LES failing to relax"], ['esophageal atresia', "congenital closure of the oesophagus"]]),
          B("The chronic backflow of stomach acid into the oesophagus is called ___.", ['GERD', 'PUD', 'IBS'], 'gastroesophageal reflux disease.'),
          S("Spell the term for the backflow of stomach contents into the oesophagus", 'reflux', "re- (back) + flux (flow).", 'ref…'),
          N('t2f:up')
        ]
      },
      {
        id: 'up8', title: "peptic ulcer", icon: '🕳️', items: [
          L("Where does an ulcer form?", `${fig(['peptic-img'], ["Sites of peptic ulcers"])}A <b>peptic ulcer</b> is a sore in the lining that is exposed to acid and pepsin: the oesophagus, the stomach (<b>gastric ulcer</b>) or the duodenum (<b>duodenal ulcer</b>).`),
          M("What is a peptic ulcer in the duodenum called?", ['duodenal ulcer', 'gastric ulcer', 'aphthous ulcer', 'esophageal varix'], 'duoden/o + -al.'),
          L("Two main causes", `${fig(['ulcer-illus', 'ulcer-photo'], ["Gastric juice and ulcers", "stomach ulcer"])}Most ulcers are caused by <b>Helicobacter pylori</b> infection or by NSAID drugs such as ibuprofen and aspirin. In records, PUD means peptic ulcer disease.`),
          M("Which two factors cause most peptic ulcers?", ["H. pylori and NSAIDs", "smoking and coffee", "stress and spicy food", "viruses and fungi"], "A bacterial infection and non-steroidal anti-inflammatory drugs."),
          T("An ulcer caused by H. pylori is treated with antibiotics.", true, "Together with an acid-reducing drug."),
          L("How deep?", `${fig('ulcer-depth')}Damage that stays in the mucosa is an <b>erosion</b>. If an ulcer goes right through the wall (<b>perforation</b>), stomach contents spill into the peritoneum and peritonitis develops; emergency surgery is needed. A bleeding ulcer may cause hematemesis or melena.`),
          P("Match each term to its meaning", [['erosion', "damage confined to the mucosa"], ['ulcer', "deeper sore"], ['perforation', "a hole through a wall"], ['PUD', "peptic ulcer disease"]]),
          M(`What is ${e('<b>H. pylori</b>')}?`, ["bacterium that infects the stomach wall", "stomach enzyme", "antacid drug", "part of the pylorus"], 'Helicobacter pylori.'),
          B("A peptic ulcer in the stomach is called a ___.", ['gastric ulcer', 'duodenal ulcer', 'gastritis'], 'gastric ulcer.'),
          S("Spell the term for an open sore in the lining", 'ulcer', "ulcer; adjective: ulcerative.", 'ulc…'),
          N('f2t:up')
        ]
      },
      {
        id: 'up9', title: "Diseases of the stomach", icon: '🫃', items: [
          L("stomach inflammation", `<b>Gastritis</b> is inflammation of the stomach lining, and <b>gastroenteritis</b> is inflammation of the stomach and intestines, usually from a virus or contaminated food, with nausea, vomiting, abdominal cramps and diarrhoea.`),
          M(`Which symptoms does ${e('<b>gastroenteritis</b>')} usually bring?`, ["nausea, vomiting, abdominal cramps and diarrhoea", "jaundice and itching", "difficulty swallowing and heartburn", "constipation and bright red blood"], 'stomach flu.'),
          L("pyloric stenosis", `${fig('pyloric-stenosis')}In <b>pyloric stenosis</b> the pyloric muscle thickens and the passage narrows. A baby a few weeks old has <b>projectile vomiting</b> after feeds.${pearl("The treatment for pyloric stenosis in babies is surgery: pyloromyotomy (cutting the pyloric muscle).")}`),
          T("Projectile vomiting is seen in pyloric stenosis in babies.", true, 'projectile vomiting.'),
          M(`${e('<b>pyloric stenosis</b>')} means…`, ["pyloric stenosis", "widening of the pylorus", "inflammation of the pylorus", "sudden spasm of the pylorus"], 'pylor/o + -stenosis.'),
          L("Acid and B12", `<b>Achlorhydria</b> means no HCl in the stomach. If the stomach does not make intrinsic factor, B12 is not absorbed and <b>pernicious anemia</b> develops. <b>Gastric carcinoma</b> is stomach cancer.${memo("a- (without) + chlor (chlorine) + hydr (water) + -ia: a stomach without hydrochloric acid.")}`),
          P("Match each term to its meaning", [['achlorhydria', "absence of stomach acid"], ['pernicious anemia', "anaemia from failure to absorb B12"], ['gastritis', "stomach inflammation"], ['gastric carcinoma', "stomach cancer"]]),
          M("Anaemia caused by a lack of intrinsic factor…", ['pernicious anemia', 'iron deficiency', 'sickle cell anemia', 'aplastic anemia'], "B12 is not absorbed."),
          L("Review of the “Oesophagus and stomach” level", recap(["GERD: weak LES, then reflux → esophagitis → Barrett esophagus", "hiatal hernia: the stomach rises through the diaphragm • achalasia: the LES does not relax", "peptic ulcer in the oesophagus, stomach or duodenum; causes H. pylori and NSAIDs; perforation → peritonitis", "gastritis, gastroenteritis, pyloric stenosis (projectile vomiting), achlorhydria, pernicious anemia"])),
          B("Absence of hydrochloric acid in the stomach is ___.", ['achlorhydria', 'achalasia', 'aphagia'], 'a- + chlorhydria.'),
          S("Spell the term for inflammation of the stomach and intestines", 'gastroenteritis', 'gastr/o + enter/o + -itis.', 'gastroent…'),
          N('wb:up')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* گوارا — دنیای ۵: بیماری‌های روده، کبد و صفرا
 * علامت‌های روده و رنگ مدفوع، بیماری التهابی روده، سلیاک و دیورتیکول و آپاندیسیت، پولیپ و سرطان روده،
 * انسداد روده، فتق و بواسیر و فیستول، هپاتیت و یرقان، سیروز، سنگ صفرا و پانکراتیت.
 * منابع: فصل Digestive System (بیماری‌های روده، کبد، کیسه صفرا و پانکراس؛ جدول هپاتیت؛ شکل‌ها؛ کیس‌های هدر و سم).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lo', sym: 'Low', name: "Diseases of the Intestines, Liver and Bile", short: "Lower GI", sub: "Diarrhoea and blood in the stool, Crohn disease and colitis, coeliac disease, diverticula, polyps and cancer, obstruction, hernias and haemorrhoids, hepatitis, cirrhosis and gallstones",
    color: '#7950F2', dark: '#5F3DC4', light: '#F3F0FF',
    levels: ["Intestinal diseases", "Polyps, obstruction and the anal region", "Liver, bile and pancreas"],
    gens: EA.genIds('lo'),
    lessons: [
      /* ================= سطح ۱: بیماری‌های روده ================= */
      {
        id: 'lo1', title: "What does the stool tell you?", icon: '💩', items: [
          L("Diarrhoea and constipation", `<b>Diarrhea</b> is the frequent passing of loose or watery stool. <b>Constipation</b> is infrequent, difficult passing of hard, dry stool, and <b>obstipation</b> is severe constipation, often from an obstruction.${memo("dia- means through and -rrhea means flow: diarrhea is “flowing through”.")}`),
          M(`${e('<b>obstipation</b>')} means…`, ["severe constipation, often from an obstruction", "severe diarrhoea", "fatty stools", "faecal incontinence"], 'obstipation = intractable constipation.'),
          L("Stool colour", `${fig('stool-colors')}<b>Melena</b> is black, tarry stool containing digested blood, a sign of upper GI bleeding. <b>Hematochezia</b> is bright red blood, a sign of lower bleeding. <b>Occult blood</b> is hidden blood that can only be found by testing.`),
          M("Black, tarry stool is mainly a sign of bleeding where?", ["stomach and duodenum", "rectum", "haemorrhoids", "opening at the end of the digestive tract"], "melena: the blood has been digested on its way and turned black."),
          P("Match each term to its meaning", [['melena', "black, tarry stool"], ['hematochezia', "bright red blood in the stool"], ['steatorrhea', "fatty stools"], ['occult blood', "hidden blood"]]),
          T("occult blood cannot be seen with the eye and needs a test.", true, "occult = hidden; the FOBT test."),
          L("Two more symptoms", `<b>Tenesmus</b> is a constant, painful urge to empty the bowel, common in colitis. <b>Fecal incontinence</b> means inability to hold in stool.${pearl("Hidden blood in the stool can be the first sign of colorectal cancer; that is why it is tested for in adult screening.")}`),
          M(`${e('<b>tenesmus</b>')} means…`, ["constant urge to empty the bowel", "severe constipation", "bowel sounds", "urinary incontinence"], "Common in ulcerative colitis."),
          B("Fatty, floating stool is called ___.", ['steatorrhea', 'melena', 'diarrhea'], 'steat/o + -rrhea.'),
          S("Spell the term for frequent loose, watery stools", 'diarrhea', "dia- + -rrhea; double rr.", 'diar…'),
          N('t2f:lo')
        ]
      },
      {
        id: 'lo2', title: "inflammatory bowel disease", icon: '🔥', items: [
          L('IBD', `<b>Inflammatory bowel disease</b> (IBD) covers two chronic inflammatory, autoimmune diseases: <b>Crohn disease</b> and <b>ulcerative colitis</b>.${fig('ibd-compare')}`),
          M(`Which two diseases make up ${e('<b>IBD</b>')}?`, ["Crohn disease and ulcerative colitis", "IBS and GERD", "celiac disease and lactose intolerance", "diverticulitis and appendicitis"], 'inflammatory bowel disease.'),
          L("Crohn disease", `${fig(['crohn-img'], ["Crohn disease"])}Crohn disease can affect any part of the GI tract in patches, most often the end of the ileum; it involves all layers of the wall and may cause fistulas and strictures. Its other name is regional enteritis.`),
          T("ulcerative colitis affects only the colon and rectum.", true, "Continuously, from the rectum upwards."),
          L("Ulcerative colitis", `${fig(['uc-img'], ["The colon in ulcerative colitis"])}In <b>ulcerative colitis</b> (UC) the colonic mucosa is continuously covered in ulcers, causing bloody diarrhoea and tenesmus; when only the rectum is inflamed it is called <b>proctitis</b>.${vs(['Crohn disease', "patchy; anywhere in the tract; all layers"], ['ulcerative colitis', "continuous; colon and rectum; mucosa"])}`),
          P("Match each feature to its disease", [["patchy involvement with fistulas", 'Crohn disease'], ["continuous ulceration from the rectum upwards", 'ulcerative colitis'], ["pain and bloating with no visible damage", 'IBS']]),
          L("IBS is different", `<b>Irritable bowel syndrome</b>, or IBS, also called spastic colon, is a functional bowel disorder: abdominal pain, bloating and diarrhoea or constipation, but no visible damage to the bowel.${memo("IBD is a Disease with real inflammation; IBS is a Syndrome without damage.")}`),
          M("Another name for IBS is…", ['spastic colon', 'regional enteritis', 'megacolon', 'sprue'], 'spastic colon.'),
          B("Inflammation of the colon is called ___.", ['colitis', 'cholangitis', 'cholecystitis'], 'col/o + -itis.'),
          S("Spell the term for inflammation of the rectum", 'proctitis', 'proct/o + -itis.', 'proc…'),
          N('d2t:lo')
        ]
      },
      {
        id: 'lo3', title: "Coeliac disease, diverticula, appendix", icon: '🌾', items: [
          L("Coeliac disease", `In <b>celiac disease</b> the body mounts an immune reaction to gluten (a protein in wheat and barley) and the villi of the small intestine become flattened, so absorption drops. Treatment: a gluten-free diet.`),
          M("In coeliac disease, which substance causes the damage?", ['gluten', 'lactose', 'fat', 'fiber'], "The protein in wheat and barley."),
          L("Lactose", `<b>Lactose intolerance</b> is a lack of the enzyme lactase, so milk sugar is not digested and bloating and diarrhoea follow drinking milk.${vs(['celiac disease', "immune reaction to gluten; damaged villi"], ['lactose intolerance', "lack of the enzyme lactase; no immune damage"])}`),
          T("In lactose intolerance, the intestinal villi are flattened by an immune reaction.", false, "False; that is a feature of coeliac disease. In lactose intolerance only the enzyme is lacking."),
          L("Pouches of the colon", `${fig(['diverticula-img'], ["Diverticula"])}A <b>diverticulum</b>, plural diverticula, is a small pouch that bulges out from the colon wall. ${e('diverticulosis')} means having these pouches and ${e('diverticulitis')} means their inflammation.`),
          M("The difference between diverticulosis and diverticulitis…", ["the first is having the pouches, the second is their inflammation", "the first is inflammation, the second is having the pouches", "they are the same", "the first is in the stomach, the second in the colon"], "-osis condition; -itis inflammation."),
          L("appendicitis", `<b>Appendicitis</b> is inflammation of the appendix, with pain around the navel that moves to the RLQ. If the appendix bursts, <b>peritonitis</b> develops.${pearl("The treatment for appendicitis is appendectomy, mostly done laparoscopically.")}`),
          P("Match each term to its meaning", [['celiac disease', "reaction to gluten"], ['diverticulitis', "inflammation of the colon pouches"], ['appendicitis', "inflammation of the appendix"], ['peritonitis', "inflammation of the peritoneum"]]),
          L("Review of the “Intestinal diseases” level", recap(["diarrhea, constipation, obstipation, tenesmus, fecal incontinence", "melena black (upper) • hematochezia red (lower) • steatorrhea fatty • occult blood hidden", "IBD = Crohn (patchy) + ulcerative colitis (continuous); IBS without damage", "celiac (gluten), lactose intolerance, diverticulosis and diverticulitis, appendicitis → peritonitis"])),
          B("Having many pouches in the colon wall is ___.", ['diverticulosis', 'diverticulitis', 'polyposis'], "-osis = condition."),
          S("Spell the term for inflammation of the appendix", 'appendicitis', 'appendic/o + -itis.', 'appendi…'),
          N('m2r:lo')
        ]
      },
      /* ================= سطح ۲: پولیپ، انسداد و ناحیه مقعد ================= */
      {
        id: 'lo4', title: "Polyps and bowel cancer", icon: '🍄', items: [
          L("polyp", `${fig(['polyp-endo'], ["A polyp at colonoscopy"])}A <b>polyp</b> is a growth projecting from the mucosa, often on a stalk. <b>Polyposis</b> means multiple polyps.`),
          M(`${e('<b>polyposis</b>')} means…`, ["presence of many polyps", "removal of a polyp", "a single large polyp", "inflammation of a polyp"], 'polyp/o + -osis.'),
          L("Familial polyps", `<b>Familial adenomatous polyposis</b> (FAP) is an inherited disease that produces hundreds of polyps in the colon and, without treatment, almost always leads to cancer.`),
          T("Most colorectal cancers start from a polyp.", true, "That is why polypectomy during colonoscopy is preventive."),
          L("Colorectal cancer and Dukes", `${fig('dukes')}<b>Colorectal cancer</b> is staged by how deep it has grown; one method is the Dukes classification: A mucosa only, B into the muscle, C lymph nodes.`),
          O("Order the Dukes stages from least to most advanced", ["A: mucosa only", "B: into the muscle layer", "C: lymph nodes involved"], "The deeper, the more advanced."),
          M("What has happened in Dukes C?", ["the cancer has reached the lymph nodes", "the cancer is only in the mucosa", "the polyp is benign", "the cancer has reached the oesophagus"], 'C = lymph nodes.'),
          L("Screening", `${pearl("The faecal occult blood test (FOBT) and colonoscopy are the two main screening methods; during colonoscopy, polyps are removed on the spot.")}${memo("polyp comes from the Latin for “octopus”; a mass on a stalk.")}`),
          P("Match each term to its meaning", [['polyp', "stalked growth from the mucosa"], ['FAP', "multiple inherited polyps"], ['colorectal', "colon and rectum"], ['carcinoma', "cancer"]]),
          B("Cancer of the colon and rectum is called ___.", ['colorectal cancer', 'colitis', 'proctitis'], 'col/o + rect/o + -al.'),
          S("Spell the term for a stalked growth from the mucosa", 'polyp', "polyp/o; plural: polyps.", 'pol…'),
          N('ab:lo')
        ]
      },
      {
        id: 'lo5', title: "bowel obstruction", icon: '🪢', items: [
          L("Four ways to get blocked", `${fig('obstruction')}<b>Intestinal obstruction</b> means the bowel contents cannot move forward. Four important causes: twisting, telescoping, loss of movement and hernia.`),
          L("Twist and telescope", `${fig(['volvulus-img', 'intussusception-img'], ["Volvulus: twisting", "Intussusception: telescoping"])}In <b>volvulus</b> the bowel twists around itself and its blood supply is cut off. In <b>intussusception</b> one part of the bowel slides into the next part like a telescope; it is more common in children.`),
          M(`${e('<b>volvulus</b>')} means…`, ["bowel twisting around itself", "bowel sliding into the next part", "peristalsis stopped", "inflammation of the small intestine"], "volvere = to turn."),
          M("Which is more common in children, with the bowel sliding into itself like a telescope?", ['intussusception', 'volvulus', 'diverticulitis', 'ileus'], 'intussusception.'),
          L("Ileus and adhesions", `<b>Ileus</b> means peristalsis of the bowel has stopped, for example after abdominal surgery. An <b>adhesion</b> is a band of scar tissue that sticks loops of bowel together. <b>Megacolon</b> is a greatly dilated colon.${vs(['ileus', "obstruction from the bowel not moving"], ['ileum', "last part of the small intestine"])}`),
          T("ileus is the same as ileum.", false, "False; ileus is a bowel obstruction and the ileum is the last part of the small intestine."),
          P("Match each term to its meaning", [['volvulus', "twisting of the bowel"], ['intussusception', "bowel telescoping into itself"], ['ileus', "bowel motility stopping"], ['adhesion', "tissue sticking together"]]),
          L("Several diseases in one picture", `${fig(['gi-path'], ["Diseases of the GI tract"])}${pearl("In bowel obstruction the patient has pain, bloating, vomiting and no passing of gas or stool; if the blood supply is cut off, emergency surgery is needed.")}`),
          B("Severe enlargement and dilation of the colon is called ___.", ['megacolon', 'colitis', 'colectomy'], 'mega- + colon/o.'),
          S("Spell the term for the bowel telescoping into itself", 'intussusception', "intus (within) + susceptio (taking up).", 'intus…'),
          N('f2t:lo')
        ]
      },
      {
        id: 'lo6', title: "Hernias, haemorrhoids, fistulas", icon: '🩹', items: [
          L("rupture", `${fig('hernia-sites')}A <b>hernia</b> is an organ bulging through the wall that holds it in. A hernia is named after its location: <b>inguinal hernia</b> in the groin, <b>umbilical hernia</b> at the navel and hiatal hernia through the diaphragm. If the blood supply to the bulging bowel is cut off, it is a <b>strangulated hernia</b>.`),
          M(`Where is the ${e('<b>inguinal hernia</b>')}?`, ["groin", "the navel", "muscle between chest and abdomen", "surgical incision site"], "inguin/o = groin."),
          T("A strangulated hernia is an emergency because the blood supply to the bowel has been cut off.", true, "strangulate = to choke."),
          L("haemorrhoids", `${fig(['hemorrhoids-img'], ["Internal and external haemorrhoids"])}<b>Hemorrhoids</b> are varicose veins in the rectum and anus, internal or external. They can cause bright blood in the stool (hematochezia).${memo("hem/o (blood) + rhoids (flowing): veins that blood flows from.")}`),
          M(`${e('<b>hemorrhoids</b>')} means…`, ["varicose veins of the rectum and anus", "stomach ulcer", "umbilical hernia", "Pouches of the colon"], 'varicose veins of the anus.'),
          L("Fistulas and pilonidal cysts", `A <b>fistula</b> is an abnormal passage between two organs or from an organ to the skin; an ${e('anal fistula')} opens from the anal canal to the skin beside it. A <b>pilonidal cyst</b> is a hair-containing cyst at the base of the spine.${vs(['fistula', "abnormal passage between two surfaces"], ['fissure', "small crack or split"])}`),
          P("Match each term to its meaning", [['umbilical hernia', "bulge at the navel"], ['hemorrhoids', "anal varicose veins"], ['anal fistula', "abnormal passage beside the anus"], ['pilonidal cyst', "hairy cyst"]]),
          M("A patient with Crohn disease has an abnormal passage between the bowel and the skin. It is called…", ['fistula', 'hernia', 'polyp', 'volvulus'], "fistula; common in Crohn disease."),
          L("Review of the “Polyps, obstruction and the anal region” level", recap(["polyp, polyposis, FAP; most cancers start from a polyp; Dukes A, B, C", "obstruction: volvulus twist • intussusception telescope • ileus standstill • adhesion sticking • megacolon", "hernia: inguinal, umbilical, hiatal; strangulated = emergency", "hemorrhoids anal varices • fistula abnormal passage • pilonidal cyst"])),
          B("A hernia of the bowel at the navel is an ___.", ['umbilical hernia', 'inguinal hernia', 'hiatal hernia'], "umbilic/o = navel."),
          S("Spell the term for varicose veins of the rectum and anus", 'hemorrhoids', "hem/o + rrhoids; double rr.", 'hemorr…'),
          N('r2m:lo')
        ]
      },
      /* ================= سطح ۳: کبد، صفرا و پانکراس ================= */
      {
        id: 'lo7', title: "Hepatitis and jaundice", icon: '🟡', items: [
          L("Viral hepatitis", `<b>Hepatitis</b> is inflammation of the liver, mostly caused by viruses.${fig('hepatitis')}${memo("A and E by mouth (water and food); B, C and D through blood. The vowels A and E take the “mouth” route.")}`),
          M("How is hepatitis A transmitted?", ["faecal-oral; contaminated water and food", "blood and needles", "sexual contact", "mosquito bite"], 'fecal-oral route.'),
          M("Which type of hepatitis is seen only together with hepatitis B?", ['HDV', 'HAV', 'HCV', 'HEV'], 'hepatitis D virus.'),
          T("There is a vaccine for hepatitis C.", false, "False; there is no vaccine, but it is now curable with drugs."),
          P("Match each type of hepatitis to its route of transmission", [['HAV', "contaminated water and food"], ['HBV', "blood, sexual, mother to baby"], ['HCV', "blood and shared needles"], ['HEV', "contaminated water"]]),
          L("Jaundice", `${fig(['jaundice-img'], ["Yellow whites of the eyes"])}<b>Jaundice</b> (or <b>icterus</b>) is yellowing of the skin and the whites of the eyes from a raised blood bilirubin (<b>hyperbilirubinemia</b>).`),
          L("Why do we turn yellow?", `${fig('bilirubin')}If the liver is diseased or the bile duct is blocked, bilirubin builds up in the blood. If bile does not reach the gut, the stool becomes pale and clay-like.`),
          M(`${e('<b>icterus</b>')} means…`, ["yellowing of skin and eyes", "itching", "low red blood cells (anaemia)", "enlarged liver"], 'icterus = jaundice.'),
          B("A raised blood bilirubin is called ___.", ['hyperbilirubinemia', 'hyperemesis', 'hepatomegaly'], 'hyper- + bilirubin + -emia.'),
          S("Spell the term for yellowing of the skin and eyes", 'jaundice', "From the French jaune: yellow.", 'jaun…'),
          N('t2f:lo')
        ]
      },
      {
        id: 'lo8', title: "Cirrhosis and its consequences", icon: '🍂', items: [
          L("The scarred liver", `${fig('cirrhosis-chain')}In <b>cirrhosis</b>, scar tissue replaces liver cells and the liver becomes hard and small. Main causes: alcohol, hepatitis B and C, and fatty liver.${memo("In Greek, cirrh/o means yellowish-orange; the colour of a cirrhotic liver.")}`),
          M("Which is not a cause of cirrhosis?", ["inflammation of the appendix", "alcohol", "hepatitis C", "hepatitis B"], "Cirrhosis is a chronic liver disease."),
          L("portal hypertension", `The scarred liver obstructs blood flow, and pressure rises in the portal vein (<b>portal hypertension</b>). As a result:${tbl([["Outcome", "Meaning"], [e('esophageal varices'), "swollen oesophageal veins; may bleed heavily"], [e('ascites'), "fluid in the abdomen"], [e('splenomegaly'), "enlarged spleen"]])}`),
          T("esophageal varices are a consequence of portal hypertension.", true, "The oesophageal veins become dilated and fragile."),
          P("Match each consequence to its meaning", [['esophageal varices', "dilated veins of the gullet"], ['ascites', "fluid in the abdomen"], ['splenomegaly', "enlarged spleen"], ['jaundice', "yellow skin and eyes"]]),
          M(`${e('<b>ascites</b>')} means…`, ["fluid collecting in the peritoneal cavity", "enlarged liver", "inflammation of the peritoneum", "oesophageal bleeding"], "From the Greek word for a belly-shaped bag."),
          L("liver tumour", `<b>Hepatoma</b> is a liver tumour that may appear after cirrhosis or chronic hepatitis B and C.${pearl("For large ascites, fluid is drawn from the abdomen with a needle: paracentesis.")}`),
          M(`${e('<b>splenomegaly</b>')} means…`, ["enlarged spleen", "enlarged liver", "tumour of the spleen", "removal of the spleen"], 'splen/o + -megaly.'),
          B("The chronic disease in which scar tissue replaces liver cells is ___.", ['cirrhosis', 'hepatitis', 'cholestasis'], 'cirrh/o + -osis.'),
          S("Spell the term for a scarred, hardened liver", 'cirrhosis', "cirrh/o + -osis; rrh.", 'cirr…'),
          N('d2t:lo')
        ]
      },
      {
        id: 'lo9', title: "Gallstones and pancreatitis", icon: '🪨', items: [
          L("gallstone", `${fig(['gallstone-specimen', 'gallstone-sono'], ["A gallbladder full of stones", "Stones on ultrasound"])}<b>Cholelithiasis</b> means stones in the gallbladder. Most stones cause no symptoms; ultrasound is the best test.`),
          L("Each term, one place", `${fig('gallstone-terms')}${tbl([["Term", "Meaning"], [e('cholelithiasis'), "gallbladder stones"], [e('choledocholithiasis'), "stone in the common bile duct"], [e('cholecystitis'), "inflammation of the gallbladder"], [e('cholangitis'), "inflammation of the bile ducts"]])}`),
          M(`${e('<b>choledocholithiasis</b>')} means…`, ["stone in the common bile duct", "gallbladder stones", "inflammation of the gallbladder", "stone removal"], 'choledoch/o + lith/o + -iasis.'),
          P("Match each term to its location", [['cholelithiasis', "stone in the gallbladder"], ['choledocholithiasis', "stone in the common duct"], ['cholecystitis', "inflammation of the gallbladder"], ['cholangitis', "inflammation of the ducts"]]),
          L("Biliary colic and Murphy sign", `<b>Biliary colic</b> is a sudden, severe RUQ pain after a fatty meal that spreads to the right shoulder blade. In <b>Murphy sign</b> the patient catches their breath in pain when the gallbladder is pressed during a deep breath; a sign of cholecystitis.${pearl("A stone in the common duct blocks the bile: it causes jaundice and pale stool, as in Heather’s case.")}`),
          T("A positive Murphy sign is a sign of gallbladder inflammation.", true, 'cholecystitis.'),
          L("Pancreatitis", `<b>Pancreatitis</b> is inflammation of the pancreas; the pancreatic enzymes digest the pancreas itself. Two common causes: gallstones and alcohol. Blood amylase and lipase rise.`),
          M("Which tests rise in pancreatitis?", ["amylase and lipase", "ALT and AST", "bilirubin and albumin", "insulin and glucagon"], "The pancreatic enzymes."),
          L("Review of the “Liver, bile and pancreas” level", recap(["hepatitis A and E by mouth; B, C and D through blood; D only with B", "jaundice = icterus = hyperbilirubinemia; pale stool means bile is not reaching the gut", "cirrhosis → portal hypertension → varices, ascites and splenomegaly; hepatoma", "cholelithiasis, choledocholithiasis, cholecystitis, cholangitis, biliary colic, Murphy sign • pancreatitis"])),
          B("Inflammation of the pancreas is called ___.", ['pancreatitis', 'pancreatolysis', 'cholangitis'], 'pancreat/o + -itis.'),
          S("Spell the term for the disease of having gallstones in the gallbladder", 'cholelithiasis', 'chol/e + lith/o + -iasis.', 'chole…'),
          N('wb:lo')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* گوارا — دنیای ۶: تشخیص، جراحی و دارو
 * آندوسکوپی‌ها، تصویربرداری، آزمایش‌ها، برداشتن‌ها، برش و ترمیم و سنگ‌شکنی، استومی و آناستوموز،
 * بیلروت و جراحی چاقی، لوله‌ها و تغذیه، داروهای گوارش.
 * منابع: فصل Digestive System (جعبه ۱۳-۵ آندوسکوپی، روش‌های تشخیص و درمان، داروها، اختصارها؛ شکل‌های جراحی و لوله‌ها).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'tx', sym: 'Tx', name: "Diagnosis, Surgery and Drugs", short: "treatment", sub: "Endoscopy and imaging, tests, removal and repair, stomas and anastomoses, Billroth and weight-loss surgery, tubes and feeding, GI drugs",
    color: '#1098AD', dark: '#0B7285', light: '#E3FAFC',
    levels: ["Endoscopy, imaging and tests", "Operations and openings", "Tubes, feeding and drugs"],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: آندوسکوپی، تصویربرداری و آزمایش ================= */
      {
        id: 'tx1', title: "Endoscopies", icon: '🔭', items: [
          L("Looking inside the GI tract", `<b>Endoscopy</b> means looking inside an organ with an <b>endoscope</b>, a flexible tube with a light and camera. Each endoscopy is named after the part it views.${fig('endo-family')}`),
          M(`Which parts does ${e('<b>EGD</b>')} show?`, ["oesophagus, stomach and duodenum", "the whole colon", "rectum and anus", "bile ducts"], 'esophagogastroduodenoscopy.'),
          L("Upper endoscopy", `${fig(['gastroscopy-img'], ["Gastroscopy"])}${e('esophagoscopy')} views the oesophagus, ${e('gastroscopy')} the stomach and ${e('EGD')} all three: oesophagus, stomach and duodenum. Beforehand the patient is NPO and the throat is numbed.`),
          W("Build a word meaning “looking inside the oesophagus, stomach and duodenum”", ['esophag/o', 'gastr/o', 'duoden/o', '-scopy'], ['col/o', '-tomy'], 'esophagogastroduodenoscopy = EGD.'),
          L("Lower endoscopy", `${fig(['colonoscopy-img', 'cecum-endo'], ["looking inside the colon (colonoscopy)", "View of the caecum"])}${tbl([["Method", "What it shows"], [e('colonoscopy'), "the whole colon up to the caecum"], [e('sigmoidoscopy'), "sigmoid colon"], [e('proctoscopy'), "rectum and anus"], [e('proctosigmoidoscopy'), "rectum and sigmoid"]])}`),
          P("Match each method to the part it views", [['colonoscopy', "the whole colon"], ['sigmoidoscopy', "sigmoid colon"], ['proctoscopy', "rectum and anus"], ['gastroscopy', "stomach"]]),
          L("Capsule, small intestine and abdomen", `In <b>capsule endoscopy</b> the patient swallows a camera capsule that photographs the small intestine. ${e('enteroscopy')} means looking inside the small intestine and ${e('laparoscopy')} means looking inside the abdominal cavity through a small incision.${pearl("Colonoscopy is done to screen for bowel cancer, and polyps are removed on the spot.")}`),
          M(`${e('<b>laparoscopy</b>')} means…`, ["viewing the abdominal cavity with an endoscope through a small incision", "large abdominal incision", "coloured X-ray of the bowel", "looking inside the stomach"], "lapar/o (abdominal wall) + -scopy."),
          T("In capsule endoscopy, the patient swallows a capsule containing a camera.", true, "To view the small intestine."),
          S("Spell the term for looking inside the whole colon", 'colonoscopy', 'colon/o + -scopy.', 'colono…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: "Imaging", icon: '🩻', items: [
          L("With contrast", `${fig('gi-imaging')}Barium is a contrast medium that shows up white on X-rays. In a <b>barium swallow</b>, or upper GI series (UGI), the patient drinks barium; in a <b>barium enema</b> (BE), barium is given through the rectum.`),
          L("X-ray of the colon with barium", `${fig(['barium-colon', 'lower-gi-xray'], ["Colon filled with barium", "Bowel damage on barium enema"])}A barium enema shows the shape of the colon, polyps, strictures and diverticula.`),
          M("Which method is chosen to view the oesophagus and stomach on X-ray?", ['barium swallow', 'barium enema', 'colonoscopy', 'proctoscopy'], 'upper GI series.'),
          M(`${e('<b>BE</b>')} means…`, ["barium enema; barium given through the rectum", 'bile excretion', 'bowel elimination', 'barium esophagram'], 'lower GI series.'),
          L("Bile and pancreatic ducts", `${fig(['ercp-img'], ['ERCP'])}In <b>ERCP</b> an endoscope goes down to the duodenum, a catheter enters the ducts backwards (retrograde) from the papilla and contrast is injected. In <b>PTC</b> a needle enters the duct through the skin and liver. <b>MRCP</b> shows the same ducts with MRI and no endoscope. For gallstones, <b>abdominal ultrasonography</b> is the main test.`),
          P("Match each method to its feature", [['ERCP', "endoscope and contrast through the papilla"], ['PTC', "needle through the skin into a bile duct"], ['MRCP', "MRI without an endoscope"], ['abdominal ultrasonography', "main test for gallstones"]]),
          L("A few words with -graphy and -gram", `${tbl([["Term", "Meaning"], [e('cholangiography'), "imaging of the bile ducts"], [e('cholecystography'), "imaging of the gallbladder"], [e('cholescintigraphy'), "nuclear scan of the gallbladder"], [e('sialography'), "imaging of the salivary glands"], [e('virtual colonoscopy'), "3D image of the colon with CT"]])}${memo("-graphy is the procedure and -gram the image obtained: cholangiography → cholangiogram.")}`),
          T("Abdominal ultrasound is the main test for finding gallstones.", true, 'abdominal ultrasonography.'),
          B("Imaging the bile ducts with contrast is ___.", ['cholangiography', 'cholecystectomy', 'colonoscopy'], 'cholangi/o + -graphy.'),
          S("Spell the term for fluid introduced into the rectum", 'enema', 'barium enema = BE.', 'ene…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx3', title: "Tests and sampling", icon: '🧪', items: [
          L("Liver tests", `<b>Liver function tests</b> (LFT) measure the enzymes <b>ALT</b> and <b>AST</b>, bilirubin and alkaline phosphatase. In liver damage, ALT and AST rise.`),
          M(`${e('<b>LFT</b>')} means…`, ["liver function tests; blood tests of liver health", 'lower fecal test', 'lipid fat test', 'lung function test'], "ALT, AST and bilirubin."),
          L("Stool tests", `${tbl([["test", "What it looks for"], [e('FOBT'), "hidden blood in the stool (stool guaiac)"], [e('stool culture'), "disease-causing bacteria"], [e('O&P'), "parasites and their eggs"]])}${pearl("Before an FOBT, patients are sometimes asked not to eat red meat for a few days to avoid a false positive.")}`),
          P("Match each test to its purpose", [['FOBT', "occult blood"], ['stool culture', "bacteria"], ['O&P', "parasite"], ['LFT', "liver function"]]),
          T("O&P means examining the stool for parasites and their eggs.", true, 'ova and parasites.'),
          L("Samples and pressure", `A <b>biopsy</b> is the removal of a small piece of tissue for the microscope, for example during colonoscopy. <b>Manometry</b> measures muscle pressure in the oesophagus or anus. <b>Paracentesis</b> is drawing off ascitic fluid with a needle.`),
          M(`What does ${e('<b>manometry</b>')} measure?`, ["muscle pressure, for example in the oesophagus", "blood sugar", "occult blood", "liver enzymes"], "man/o (pressure) + -metry (measurement)."),
          M(`${e('<b>paracentesis</b>')} means…`, ["drawing off abdominal fluid with a needle", "cutting into the abdomen", "looking inside the abdomen", "liver tissue sampling"], 'para- + -centesis.'),
          L("Review of the “Endoscopy, imaging and tests” level", recap(["EGD, esophagoscopy, gastroscopy • colonoscopy, sigmoidoscopy, proctoscopy • capsule endoscopy, laparoscopy", "barium swallow (UGI) upper and barium enema (BE) lower", "ERCP, PTC and MRCP for the bile ducts; ultrasonography for gallstones", "LFT with ALT and AST • FOBT, stool culture, O&P • biopsy, manometry, paracentesis"])),
          B("Removing a small piece of tissue for the microscope is a ___.", ['biopsy', 'manometry', 'lavage'], 'bi/o + -opsy.'),
          S("Spell the term for drawing off abdominal fluid with a needle", 'paracentesis', 'para- + -centesis.', 'para…'),
          N('ab:tx')
        ]
      },
      /* ================= سطح ۲: جراحی‌ها و دهانه‌ها ================= */
      {
        id: 'tx4', title: "Removals", icon: '✂️', items: [
          L("-ectomy on each organ", `${fig('ectomy-map')}${tbl([["surgery", "removal"], [e('gastrectomy'), "all or part of the stomach"], [e('colectomy'), "all or part of the colon"], [e('esophagectomy'), "part of the oesophagus"], [e('cholecystectomy'), "gallbladder"], [e('hepatic lobectomy'), "one lobe of the liver"]])}`),
          M(`${e('<b>colectomy</b>')} means…`, ["removal of all or part of the colon", "colon opening on the skin", "incision of the colon", "looking inside the colon"], 'col/o + -ectomy.'),
          L("Appendectomy", `${fig(['appendectomy-img'], ["Appendectomy"])}<b>Appendectomy</b> is the removal of an inflamed appendix: A the diseased appendix, B the incision site and C its removal.`),
          T("appendectomy means removal of the appendix.", true, 'append/o + -ectomy.'),
          L("The gallbladder by laparoscope", `<b>Laparoscopic cholecystectomy</b> removes the gallbladder through a few small incisions using a laparoscope. Sometimes, as in Heather’s case, the operation is converted to an open one.${pearl("After the gallbladder is removed, bile flows straight from the liver into the duodenum, and the patient can lead a normal life.")}`),
          L("Smaller removals", `${fig(['polyp-snare'], ["removing a polyp with a wire loop"])}${tbl([["surgery", "removal"], [e('polypectomy'), "polyp; often with a wire loop during colonoscopy"], [e('hemorrhoidectomy'), "haemorrhoids"], [e('diverticulectomy'), "pouch in the wall of an organ (diverticulum)"], [e('glossectomy'), "tongue"], [e('gingivectomy'), "part of the gum"]])}`),
          P("Match each operation to its meaning", [['polypectomy', "removal of a polyp"], ['hemorrhoidectomy', "removal of haemorrhoids"], ['glossectomy', "removal of the tongue"], ['esophagectomy', "removal of the oesophagus"]]),
          M("Removal of one lobe of the liver…", ['hepatic lobectomy', 'hepatomegaly', 'hepatotomy', 'hepatoma'], 'lob/o + -ectomy.'),
          B("Removal of the gallbladder is called ___.", ['cholecystectomy', 'cholecystitis', 'cholangiography'], 'cholecyst/o + -ectomy.'),
          S("Spell the term for removal of a polyp", 'polypectomy', 'polyp/o + -ectomy.', 'polyp…'),
          N('wb:tx')
        ]
      },
      {
        id: 'tx5', title: "Incision, repair and stone crushing", icon: '🔧', items: [
          L("Incisions", `${tbl([["surgery", "Meaning"], [e('laparotomy'), "incision of the abdominal wall; exploratory laparotomy to search for disease"], [e('choledochotomy'), "incision of the common bile duct"], [e('choledocholithotomy'), "incision of the common duct to remove a stone"], [e('vagotomy'), "cutting branches of the vagus nerve to reduce acid"]])}`),
          M(`${e('<b>choledocholithotomy</b>')} means…`, ["incision of the common bile duct to remove a stone", "crushing a gallstone", "removal of the gallbladder", "stone in the common duct"], 'choledoch/o + lith/o + -tomy.'),
          M(`What is ${e('<b>vagotomy</b>')} for?`, ["reducing stomach acid secretion", "treating gallstones", "removal of the appendix", "hernia repair"], "vag/o (vagus nerve) + -tomy."),
          L("Repairs", `${tbl([["surgery", "Meaning"], [e('herniorrhaphy'), "hernia repair with sutures; same as hernioplasty"], [e('pyloroplasty'), "widening and repair of the pylorus"], [e('palatoplasty'), "repair of the palate"]])}${memo("-rrhaphy sutures, -plasty repairs, -pexy fixes in place.")}`),
          P("Match each operation to its meaning", [['herniorrhaphy', "hernia repair"], ['pyloroplasty', "repair of the pylorus"], ['laparotomy', "cutting into the abdomen"], ['vagotomy', "cutting the vagus nerve"]]),
          L("stone crushing", `<b>Lithotripsy</b> means crushing a stone. In ESWL, shock waves from outside the body break up the stone. ${e('cholelithotripsy')} means crushing a gallstone.${vs(['-tripsy', "crushing a stone"], ['-tomy', "incision to remove a stone"])}`),
          M(`${e('<b>ESWL</b>')} means…`, ["extracorporeal shock wave lithotripsy", "removing a stone through an incision", "endoscopy of the bile ducts", "coloured image of the ducts"], 'extracorporeal shock wave lithotripsy.'),
          T("lithotripsy means an incision to remove a stone.", false, "False; -tripsy is crushing. The incision is lithotomy."),
          B("Hernia repair with sutures is ___.", ['herniorrhaphy', 'herniotomy', 'hernia'], 'herni/o + -rrhaphy.'),
          W("Build a word meaning “incision of the common bile duct”", ['choledoch/o', '-tomy'], ['-ectomy', 'cholecyst/o', '-tripsy'], 'choledoch/o + -tomy = choledochotomy.'),
          S("Spell the term for crushing a stone", 'lithotripsy', 'lith/o + -tripsy.', 'litho…'),
          N('r2m:tx')
        ]
      },
      {
        id: 'tx6', title: "Stomas and anastomoses", icon: '🔗', items: [
          L("opening on the skin", `An <b>ostomy</b> is an opening that the surgeon makes from an organ to the abdominal wall, and the <b>stoma</b> (Greek for “mouth”) is the opening on the skin itself. Stool collects in a bag.${fig(['ostomy-sites'], ["A sigmoid colostomy, B transverse colostomy, C ileostomy"])}`),
          M(`What is ${e('<b>stoma</b>')}?`, ["surgical opening on the abdominal skin", "bag for collecting stool", "part of the stomach", "inflammation of the mouth"], 'stoma = mouth.'),
          L("Naming each ostomy", `${fig(['ostomy-names'], ["Names of ostomies"])}A colostomy is named after the part brought to the skin, and there are four types: ascending, transverse, descending and sigmoid colostomy. In the same way, ${e('ileostomy')} is from the ileum, ${e('jejunostomy')} from the jejunum and ${e('gastrostomy')} from the stomach.`),
          P("Match each ostomy to its organ", [['ileostomy', "ileum"], ['colostomy', "colon"], ['gastrostomy', "stomach"], ['jejunostomy', "jejunum"]]),
          T("In an ileostomy the stool is looser than in a sigmoid colostomy.", true, "The higher the opening, the less water has been absorbed."),
          L("Joining two organs", `An <b>anastomosis</b>, plural anastomoses, is the surgical joining of two hollow organs, and both roots appear in its name:${tbl([["surgery", "Connection"], [e('gastroduodenostomy'), "stomach to duodenum"], [e('gastrojejunostomy'), "stomach to jejunum"], [e('gastroenterostomy'), "stomach to intestine"], [e('coloproctostomy'), "colon to rectum"]])}`),
          M(`${e('<b>coloproctostomy</b>')} means…`, ["joining the colon to the rectum", "colon opening on the skin", "removal of the colon and rectum", "repair of the rectum"], 'col/o + proct/o + -stomy.'),
          M("Which one is an anastomosis?", ['gastrojejunostomy', 'ileostomy', 'colostomy', 'gastrostomy'], "Two roots = two organs joined."),
          L("Review of the “Operations and openings” level", recap(["-ectomy: gastrectomy, colectomy, cholecystectomy, appendectomy, polypectomy, hemorrhoidectomy", "-tomy: laparotomy, choledochotomy, vagotomy • -rrhaphy and -plasty: herniorrhaphy, pyloroplasty", "lithotripsy and ESWL crush stones", "ostomy and stoma: ileostomy, colostomy, gastrostomy • anastomosis: gastrojejunostomy, coloproctostomy"])),
          B("An opening of the colon on the abdominal wall is a ___.", ['colostomy', 'colectomy', 'colotomy'], 'col/o + -stomy.'),
          S("Spell the term for an opening of the ileum on the abdominal skin", 'ileostomy', 'ile/o + -stomy.', 'ileo…'),
          N('f2t:tx')
        ]
      },
      /* ================= سطح ۳: لوله‌ها، تغذیه و داروها ================= */
      {
        id: 'tx7', title: "Billroth and weight-loss surgery", icon: '🍽️', items: [
          L("Billroth I and II", `${fig('billroth')}After the lower part of the stomach is removed (for example for an ulcer or cancer), the stomach must be joined to the intestine again: in <b>Billroth I</b> to the duodenum and in <b>Billroth II</b> to the jejunum.`),
          M(`Which anastomosis is ${e('<b>Billroth II</b>')}?`, ['gastrojejunostomy', 'gastroduodenostomy', 'coloproctostomy', 'ileostomy'], "Stomach to jejunum."),
          L("Billroth II diagram", `${fig(['billroth-img'], ["Billroth II"])}In the diagram, the dashed line shows the removed part of the stomach, and the jejunum is joined to the remaining stomach.`),
          T("In Billroth I the stomach is joined to the duodenum.", true, 'gastroduodenostomy.'),
          L("weight-loss surgery", `${fig(['bariatric-img'], ["A banded stomach, B gastric bypass"])}<b>Bariatric surgery</b> (bar/o = weight) is for severe obesity: <b>gastric banding</b> (Lap-Band) makes the stomach smaller with a ring around its upper part, and <b>gastric bypass</b> joins a small stomach pouch to the jejunum.`),
          L("gastric bypass", `${fig(['gastric-bypass'], ["gastric bypass"])}In gastric bypass, food skips most of the stomach and the duodenum, so less is eaten and less is absorbed.${pearl("After a bypass, absorption of vitamin B12 and iron drops and the patient needs supplements.")}`),
          P("Match each operation to its feature", [['gastric banding', "adjustable ring around the top of the stomach"], ['gastric bypass', "small stomach pouch joined to the jejunum"], ['Billroth I', "stomach to duodenum"], ['Billroth II', "stomach to jejunum"]]),
          M(`${e('<b>bariatric</b>')} relates to the treatment of…`, ["obesity (weight)", "gallstone", "stomach ulcer", "haemorrhoids"], 'bar/o + -iatric.'),
          B("Operations to treat severe obesity are called ___.", ['bariatric surgery', 'Billroth I', 'vagotomy'], "bar/o = weight."),
          S("Spell the adjective for weight-loss surgery", 'bariatric', 'bar/o + -iatric.', 'bari…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx8', title: "Tubes and feeding", icon: '🧴', items: [
          L("When the patient cannot eat", `${fig('tubes')}A <b>nasogastric tube</b> (NG tube) runs from the nose to the stomach: for feeding (<b>gavage</b>), washing out (<b>lavage</b>) or emptying the stomach.`),
          L("NG tube on an X-ray", `${fig(['ng-xray'], ["NG tube on a radiograph"])}Before each NG feed, the tube’s position is checked by X-ray or by testing the aspirate for stomach acid, to make sure it is not in the lung.`),
          M(`${e('<b>gavage</b>')} means…`, ["liquid feeding through a tube into the stomach", "washing out the stomach", "emptying the bladder", "enema"], 'gavage = feeding.'),
          M(`${e('<b>lavage</b>')} means…`, ["washing out the stomach through a tube", "tube feeding", "incision of the stomach", "stone crushing"], 'lavage = washing out.'),
          L("PEG and TPN", `${fig(['peg-img'], ["PEG tube"])}A <b>PEG tube</b> is placed through the abdominal skin into the stomach with the help of an endoscope, for long-term feeding. In <b>TPN</b> all of the patient’s nutrition is given through a vein and the GI tract is bypassed (hyperalimentation).`),
          P("Match each method to its feature", [['NG tube', "nose to stomach"], ['PEG tube', "skin to stomach with an endoscope"], ['TPN', "complete nutrition via a vein"], ['enema', "fluid via the rectum"]]),
          L("NPO and enemas", `<b>NPO</b> (nil per os) means nothing by mouth; it is ordered before surgery and endoscopy. An <b>enema</b> is fluid introduced through the rectum to clear the bowel or give a drug.${vs(['po', "by mouth"], ['NPO', "nothing by mouth"])}`),
          T("TPN means feeding through a nasogastric tube.", false, "False; TPN is total intravenous nutrition."),
          B("The order “nothing by mouth” before an operation is ___.", ['NPO', 'PO', 'PEG'], 'nil per os.'),
          S("Spell the term for washing out the stomach", 'lavage', 'lavage = washing.', 'lav…'),
          N('ab:tx')
        ]
      },
      {
        id: 'tx9', title: "Digestive drugs", icon: '💊', items: [
          L("Reducing acid", `${fig('acid-drugs')}An <b>antacid</b> neutralises acid already made; an <b>H2 blocker</b> (H2 antagonist) blocks the histamine receptor, and a <b>PPI</b> (proton pump inhibitor) inhibits the cell’s acid pump. They are used for GERD and peptic ulcer.`),
          M(`${e('<b>PPI</b>')} means…`, ['proton pump inhibitor', 'pancreatic protein inhibitor', 'peptic pain index', 'post-prandial insulin'], "Such as omeprazole."),
          P("Match each drug to its job", [['antacid', "neutralising acid"], ['H2 blocker', "blocking the H2 receptor"], ['PPI', "inhibiting the proton pump"]]),
          L("Paired drugs", `${fig('drug-pairs')}An <b>emetic</b> induces vomiting and an <b>antiemetic</b> prevents nausea and vomiting. A <b>laxative</b> eases defecation and a <b>cathartic</b> is a strong purgative; an <b>antidiarrheal</b> treats diarrhoea.`),
          M("A patient has severe nausea after chemotherapy. Which drug class?", ['antiemetic', 'emetic', 'laxative', 'antacid'], 'anti- + emetic.'),
          T("An emetic is an anti-vomiting drug.", false, "False; an emetic induces vomiting; the anti-vomiting drug is an antiemetic."),
          L("Gas and cramps", `${e('antiflatulent')} such as simethicone reduces gas, ${e('antispasmodic')} relaxes intestinal muscle cramps and ${e('stool softener')} softens the stool.${pearl("PONV means postoperative nausea and vomiting; it is usually prevented with an antiemetic.")}`),
          P("Match each drug to its job", [['laxative', "easing defecation"], ['antidiarrheal', "treating diarrhoea"], ['antiflatulent', "reducing gas"], ['antispasmodic', "relaxing intestinal cramps"]]),
          M(`${e('<b>PONV</b>')} means…`, ["postoperative nausea and vomiting", "pain after meals", "bleeding after surgery", "constipation after surgery"], 'postoperative nausea and vomiting.'),
          L("Review of the “Tubes, feeding and drugs” level", recap(["Billroth I to the duodenum and Billroth II to the jejunum • bariatric: gastric banding and gastric bypass", "NG tube: gavage feeding and lavage washing • PEG through the skin • TPN via a vein • NPO", "antacid neutralises • H2 blocker and PPI reduce acid", "emetic and antiemetic • laxative, cathartic and antidiarrheal • antiflatulent, antispasmodic, stool softener"])),
          B("A drug that neutralises acid already made in the stomach is an ___.", ['antacid', 'antiemetic', 'laxative'], 'ant- + acid.'),
          S("Spell the term for a drug against nausea and vomiting", 'antiemetic', 'anti- + -emetic.', 'antie…'),
          N('wb:tx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* گوارا — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: "Rootpicker", title: "Breaker of digestive words", shape: 'puzzle', color: '#748FFC', acc: ['sparkle'], bio: "Splits every digestive term into pieces: gastr/o stomach, enter/o intestine, hepat/o liver and cholecyst/o gallbladder; and starts the meaning from the suffix." },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Suffixbook", title: "Notebook of symptom suffixes", shape: 'book', color: '#5C7CFA', acc: ['glasses'], bio: "Knows by heart -emesis vomiting, -pepsia digestion, -phagia swallowing, -prandial meal and -lithiasis stones." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Linky", title: "Master of naming connections", shape: 'yab', color: '#4C6EF5', acc: ['crown'], bio: "Knows that both organs appear in the name of an anastomosis (gastrojejunostomy) and that the plural of diverticulum is diverticula." },
    { id: 'mo-0', w: 'mo', lv: 0, name: "Toothy", title: "Guardian of the mouth", shape: 'tooth', color: '#FFF8EC', acc: ['sparkle'], bio: "The incisor cuts, the canine tears and the molar grinds; counts twenty baby teeth and thirty-two permanent ones." },
    { id: 'mo-1', w: 'mo', lv: 1, name: "Droplet", title: "Drop of saliva", shape: 'drop', color: '#74C0FC', acc: ['glasses'], bio: "Comes from the parotid, submandibular and sublingual glands, moistens the bolus and knows peristalsis carries it to the stomach." },
    { id: 'mo-2', w: 'mo', lv: 2, name: "Tummy", title: "The acid mill", shape: 'stomach', color: '#FF8787', acc: ['crown'], bio: "Knows the cardia, fundus, body, antrum and pylorus; turns food into chyme with HCl and pepsin." },
    { id: 'bw-0', w: 'bw', lv: 0, name: "Villy", title: "Absorber of the small intestine", shape: 'gut', color: '#FFA8A8', acc: ['sparkle'], bio: "Names the duodenum, jejunum and ileum in order and absorbs digested food with villi and lacteals." },
    { id: 'bw-1', w: 'bw', lv: 1, name: "Quadro", title: "Abdomen Map Reader", shape: 'compass', color: '#51CF66', acc: ['glasses'], bio: "Finds the RUQ and LLQ, tells the hepatic flexure from the splenic flexure and knows the appendix is in the lower right quadrant." },
    { id: 'bw-2', w: 'bw', lv: 2, name: "Livey", title: "The bile factory", shape: 'liver', color: '#C0504D', acc: ['crown'], bio: "Makes bile and sends it through the hepatic and cystic ducts to the common bile duct; its friend the pancreas supplies amylase and lipase." },
    { id: 'up-0', w: 'up', lv: 0, name: "Queasy", title: "Symptom spotter", shape: 'cloud', color: '#A9E34B', acc: ['sparkle'], bio: "Tells nausea, emesis, dyspepsia, dysphagia and eructation apart and knows hematemesis means vomiting blood." },
    { id: 'up-1', w: 'up', lv: 1, name: "Gumguard", title: "Guardian of mouth and gums", shape: 'shield', color: '#F783AC', acc: ['glasses'], bio: "Knows caries, gingivitis, periodontitis, aphthous ulcers and thrush, and knows leukoplakia is a precancerous lesion." },
    { id: 'up-2', w: 'up', lv: 2, name: "Pylori", title: "The stomach-ulcer bacterium", shape: 'bacillus', color: '#E64980', acc: ['crown'], bio: "It is H. pylori itself, the main cause of peptic ulcers; it also knows GERD, Barrett esophagus and hiatal hernia well." },
    { id: 'lo-0', w: 'lo', lv: 0, name: "Flary", title: "Spotter of bowel diseases", shape: 'flame', color: '#B197FC', acc: ['sparkle'], bio: "Tells Crohn disease and ulcerative colitis apart from IBS, recognises coeliac disease by gluten and never mixes up diverticulosis with diverticulitis." },
    { id: 'lo-1', w: 'lo', lv: 1, name: "Knotty", title: "Master of bowel obstruction", shape: 'blob', color: '#9775FA', acc: ['glasses'], bio: "Volvulus is twisting, intussusception telescoping and ileus a standstill of the bowel; it also knows haemorrhoids and fistulas." },
    { id: 'lo-2', w: 'lo', lv: 2, name: "Pebble", title: "Detective of liver and bile", shape: 'gall', color: '#69DB7C', acc: ['crown'], bio: "Tells cholelithiasis from choledocholithiasis, knows the five types of hepatitis and knows cirrhosis leads to ascites." },
    { id: 'tx-0', w: 'tx', lv: 0, name: "Scopey", title: "The eye inside the tube", shape: 'scope', color: '#3BC9DB', acc: ['sparkle'], bio: "Performs EGD, colonoscopy, sigmoidoscopy and ERCP, and knows a barium swallow images the oesophagus and stomach." },
    { id: 'tx-1', w: 'tx', lv: 1, name: "Glovey", title: "Master of GI surgery", shape: 'glove', color: '#15AABF', acc: ['glasses'], bio: "Knows appendectomy, cholecystectomy, colostomy and gastrojejunostomy, and tells Billroth I from Billroth II." },
    { id: 'tx-2', w: 'tx', lv: 2, name: "Capsy", title: "GI pharmacist", shape: 'capsule', color: '#1098AD', acc: ['crown'], bio: "Knows antacids, PPIs, H2 blockers, antiemetics, laxatives and antidiarrheals, and tells NG, PEG and TPN apart." }
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
    /* معده J شکل با مری و دوازدهه */
    stomach: { fy: 92, top: 26, body: c => `<path d="M60 28 C60 18 64 10 70 3" stroke="${c}" stroke-width="13" fill="none" stroke-linecap="round"/><path d="M60 28 C60 18 64 10 70 3" stroke="#000" stroke-opacity=".12" stroke-width="13" fill="none" stroke-linecap="round"/><path d="M24 118 C12 122 8 132 12 144" stroke="${c}" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M24 118 C12 122 8 132 12 144" stroke="#000" stroke-opacity=".12" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M50 24 C74 10 104 22 110 54 C118 96 98 136 62 138 C32 140 12 124 12 100 C12 80 28 72 38 66 C46 60 40 38 50 24Z" fill="${c}"/><path d="M12 100 C12 124 32 140 62 138 C40 132 24 120 20 98Z" fill="#000" opacity=".1"/><path d="M62 30 C80 26 96 36 100 56" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* روده باریک پیچ‌دار */
    gut: { fy: 84, top: 30, body: c => `<rect x="10" y="30" width="100" height="112" rx="44" fill="${c}"/><rect x="10" y="30" width="100" height="112" rx="44" fill="#000" opacity=".06"/><g stroke="#000" stroke-opacity=".13" stroke-width="5" fill="none" stroke-linecap="round"><path d="M22 116 C30 130 50 132 56 120 C62 108 74 108 80 120 C86 132 100 128 102 114"/><path d="M20 62 C24 48 40 42 48 50"/><path d="M100 60 C96 46 82 42 74 50"/></g><g fill="#fff" opacity=".35"><circle cx="30" cy="96" r="4"/><circle cx="92" cy="98" r="4"/><circle cx="60" cy="40" r="3"/></g>` },
    /* کبد با کیسه صفرای کوچک */
    liver: { fy: 76, top: 36, body: c => `<path d="M38 112 C34 124 40 134 48 132 C56 130 56 118 50 110Z" fill="#40C057"/><path d="M8 72 C10 46 44 36 78 38 C102 40 116 50 112 64 C108 86 82 114 48 128 C26 136 8 118 8 96Z" fill="${c}"/><path d="M8 96 C8 118 26 136 48 128 C34 124 18 112 14 90Z" fill="#000" opacity=".12"/><path d="M70 40 C66 60 60 84 56 120" stroke="#000" stroke-opacity=".12" stroke-width="3" fill="none"/><path d="M22 58 C30 48 42 44 56 44" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".45"/>` },
    /* کیسه صفرا گلابی‌شکل با سنگ */
    gall: { fy: 92, top: 26, body: c => `<path d="M60 16 C68 16 72 24 70 34" stroke="${c}" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M60 30 C78 30 82 40 80 48 C100 62 108 90 100 114 C92 138 28 138 20 114 C12 90 20 62 40 48 C38 40 44 30 60 30Z" fill="${c}"/><path d="M20 114 C28 138 92 138 100 114 C80 128 40 128 20 114Z" fill="#000" opacity=".1"/><g fill="#E8C468" stroke="#B8923A" stroke-width="1.5"><circle cx="44" cy="124" r="5"/><circle cx="58" cy="128" r="4"/><circle cx="72" cy="125" r="5"/></g><path d="M34 70 C38 60 46 54 54 52" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* سر آندوسکوپ با لوله خم‌شونده و نور */
    scope: { fy: 80, top: 26, body: c => `<path d="M60 126 C60 146 96 148 104 128 C110 112 100 100 92 104" stroke="#495057" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="92" cy="104" r="6" fill="#FFE066" stroke="#FAB005" stroke-width="2"/><rect x="44" y="10" width="32" height="20" rx="6" fill="#495057"/><rect x="18" y="26" width="84" height="102" rx="32" fill="${c}"/><rect x="18" y="26" width="84" height="102" rx="32" fill="#000" opacity=".08"/><circle cx="96" cy="66" r="7" fill="#868E96"/><circle cx="96" cy="88" r="7" fill="#868E96"/><path d="M30 54 C34 42 42 36 52 34" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>` },
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

  const FACE_X = { stomach: 62, liver: 54, scope: 56 };
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
/* گوارا — راند بالینی: پرونده‌های چندمرحله‌ای
 * پرونده‌ها از مطالعه‌های موردی فصل‌های Digestive System گرفته و ساده شده‌اند (ریفلاکس آبه، کوله‌سیستکتومی هدر،
 * کولونوسکوپی سم، زخم پپتیک با ملنا، سرطان سیگموئید، کولیت و پروکتیت، گزارش خون‌ریزی رکتوم، معاینه دندان و …)؛
 * هدف: به کار بردن واژه‌های گوارش در دل یک پرونده واقعی.
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان گوارش ================= */
    {
      id: 'r1', w: 'lx', title: "Rectal bleeding report", who: "A 50-year-old man with blood in the stool",
      brief: "Mr Amini’s sigmoidoscopy report is full of compound terms. His history mentions regional enteritis, appendicitis and an ileostomy. Break each term into its root and suffix.",
      chart: [["Complaints he does not have", "dysphagia, postprandial distress, hematemesis"], ["history of", "enteritis; ileostomy and appendectomy"], ["examination", "sigmoidoscopy; anorectal region normal"], ["Impression", "bleeding polyp or diverticulum"]],
      fig: { a: ['wordparts'], l: ["Root + suffix"] },
      steps: [
        M("Symptom", "dysphagia means…", ["difficulty swallowing", "difficulty speaking", "indigestion", "vomiting blood"], "dys- (difficult) + -phagia (swallowing). Don’t confuse it with dysphasia (speech)."),
        M("Symptom", "postprandial means…", ["after meals", "before meals", "at bedtime", "after defecation"], "post- (after) + -prandial (meal)."),
        P("Term", "Match each term to its meaning", [['hematemesis', "vomiting blood"], ['enteritis', "inflammation of the small intestine"], ['ileostomy', "ileal opening on the skin"], ['appendectomy', "removal of the appendix"]]),
        M("examination", "anorectal relates to…", ["the anus and rectum", "stomach and intestines", "Oesophagus and stomach", "the liver and bile"], "an/o (anus) + rect/o (rectum) + -al."),
        T("Plural", "The plural of diverticulum is diverticula.", true, '-um → -a.'),
        S("Spelling", "Spell the term for looking inside the sigmoid colon", 'sigmoidoscopy', 'sigmoid/o + -scopy.', 'sigmoido…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: "A teenager’s record", who: "A 15-year-old girl, history review",
      brief: "Setareh is reading her medical record and does not understand the terms: proctitis, colitis, partial colectomy and anoplasty. Explain them to her in plain language.",
      chart: [["Past illnesses", "proctitis; colitis"], ["Operations", "partial colectomy; anoplasty"], ["Current complaint", "no"], ["follow-up", "yearly colonoscopy"]],
      fig: { a: ['tract-roots'], l: ["Roots of the digestive tract"] },
      steps: [
        M("root", "proctitis means inflammation of…", ["rectum and anus", "prostate", "colon", "pancreas"], "proct/o = rectum and anus; don’t confuse it with prostat/o (prostate)."),
        M("root", "colitis means inflammation of…", ["colon", "gallbladder", "bile", "neck"], "col/o + -itis. Bile is chol/e."),
        P("suffix", "Match each term to its meaning", [['colectomy', "removal of the colon"], ['colotomy', "incision of the colon"], ['colostomy', "colon opening on the skin"], ['anoplasty', "repair of the anus"]]),
        T("suffix", "partial colectomy means removal of part of the colon.", true, "partial = part; -ectomy = removal."),
        M("follow-up", "colonoscopy means…", ["looking inside the colon with an endoscope", "coloured X-ray of the colon", "removal of the colon", "repair of the colon"], 'colon/o + -scopy.'),
        S("Spelling", "Spell the term for surgical repair of the anus", 'anoplasty', 'an/o + -plasty.', 'ano…')
      ]
    },
    /* ================= دهان تا معده ================= */
    {
      id: 'r3', w: 'mo', title: "Routine dental check-up", who: "A 22-year-old woman in for scaling",
      brief: "After scaling, the dental hygienist noticed slight swelling beside the lower left third molar. An X-ray shows decay in the same tooth.",
      chart: [["Work done", "removal of calculus, plaque and stains"], ["gums", "pink gingivae; no gingivitis"], ["Radiography", "dental caries in a third molar"], ["Plan", 'amoxicillin 500 mg po TID × 10 days']],
      fig: { a: ['molar-img', 'tooth-decay'], l: ["Tooth structure", "Decay"] },
      steps: [
        M("tooth", "A third molar is the same as…", ["wisdom tooth", "canine tooth", "front tooth", "baby tooth"], "The third molar is the last permanent tooth and comes in at about age 17."),
        M("disease", "dental caries means…", ["tooth decay", "gum inflammation", "tartar on the teeth", "tooth grinding"], "caries means decay; the acid from plaque bacteria eats into the enamel."),
        T("gums", "The plural of gingiva is gingivae.", true, '-a → -ae.'),
        O("Decay", "Order the progress of decay from the surface inwards", ["plaque on the tooth", "decay of the enamel", "reaching the dentin", "pulp infection and abscess"], "From outside to inside: enamel, dentin, pulp."),
        M("prescription", "In a prescription, po means…", ["by mouth", "after meals", "whenever needed", "under the tongue"], 'per os = by mouth.'),
        S("Spelling", "Spell the term for inflammation of the gums", 'gingivitis', 'gingiv/o + -itis.', 'gingi…')
      ]
    },
    {
      id: 'r4', w: 'mo', title: "Stomach upset after meals", who: "A 19-year-old man with indigestion",
      brief: "At the clinic Tom says, “My stomach is upset, food goes down with difficulty and I have diarrhoea.” The doctor wants to explain the route of food to him.",
      chart: [["Complaint 1", 'dyspepsia'], ["Complaint 2", 'dysphagia'], ["Complaint 3", 'diarrhea'], ["Examining the abdomen", 'epigastric tenderness']],
      fig: { a: ['gi-tract'], l: ["The route of food"] },
      steps: [
        O("Path", "Put the route of food in order, starting from the mouth", ['oral cavity', 'pharynx', 'esophagus', 'stomach', 'small intestine', 'large intestine'], "Mouth, pharynx, oesophagus, stomach, small intestine, large intestine."),
        M("Movement", "The involuntary wave-like movement that pushes food along is…", ['peristalsis', 'mastication', 'deglutition', 'regurgitation'], "peristalsis = wave-like movement of the gut."),
        P("Term", "Match each term to its meaning", [['dyspepsia', "indigestion"], ['dysphagia', "difficulty swallowing"], ['mastication', "chewing"], ['deglutition', "swallowing"]]),
        M("Region", "epigastric means…", ["above the stomach; the pit of the stomach", "below the stomach", "around the navel", "groin"], "epi- (upon, above) + gastr/o + -ic."),
        T("Sphincter", "The sphincter between the oesophagus and stomach is called the LES and stops acid flowing back.", true, 'lower esophageal sphincter = cardiac sphincter.'),
        S("Spelling", "Spell the term for the food pipe", 'esophagus', 'esophag/o + -us.', 'esoph…')
      ]
    },
    /* ================= روده‌ها و اندام‌های کمکی ================= */
    {
      id: 'r5', w: 'bw', title: "Right-sided pain", who: "An 18-year-old woman in the emergency department",
      brief: "Jennifer is clutching her right side and writhing in pain. The nurse suspects gallbladder inflammation, but the doctor says every organ in that quadrant must be considered.",
      chart: [["Site of pain", 'RUQ'], ["Complaint", "nausea after fatty meals"], ["Possible diagnosis", 'acute cholecystitis'], ["Suggested test", 'abdominal ultrasonography']],
      fig: { a: ['quadrants', 'bile-flow'], l: ["Abdominal quadrants", "The path of bile"] },
      steps: [
        M("Quadrant", "RUQ means…", ["right upper quadrant", "left upper quadrant", "right lower quadrant", "umbilical region"], 'right upper quadrant.'),
        M("organ", "Which organ is in the RUQ?", ["liver and gallbladder", "spleen", "sigmoid colon", "the appendix"], "The liver and gallbladder are in the right upper quadrant."),
        O("bile", "Put the route of bile in order", ['liver', 'hepatic duct', 'common bile duct', 'duodenum'], "The liver makes bile and empties it through the hepatic duct and common duct into the duodenum."),
        T("gallbladder", "The gallbladder makes bile.", false, "False; the liver makes it, and the gallbladder stores and concentrates it."),
        M("Term", "cholecystitis means…", ["inflammation of the gallbladder", "gallbladder stones", "removal of the gallbladder", "liver inflammation"], 'cholecyst/o + -itis.'),
        S("Spelling", "Spell the term for the sac that stores bile", 'gallbladder', "gall + bladder; one word.", 'gall…')
      ]
    },
    {
      id: 'r6', w: 'bw', title: "The pain that moved down", who: "A 12-year-old boy with abdominal pain",
      brief: "Arash’s pain began around the navel and a few hours later moved to the lower right abdomen. He has a mild fever and loss of appetite. The doctor sketches a map of the large intestine.",
      chart: [["Pain onset", 'umbilical region'], ["Current site", 'RLQ'], ["Symptoms", "anorexia, nausea, mild fever"], ["danger", "peritonitis if the appendix bursts"]],
      fig: { a: ['colon-map'], l: ["large intestine"] },
      steps: [
        M("Region", "The umbilical region is the region…", ["around the navel", "pit of the stomach", "groin", "below the ribs"], "umbilic/o = navel."),
        M("organ", "Which part of the large intestine is the appendix attached to?", ['cecum', 'sigmoid colon', 'rectum', 'transverse colon'], "The appendix hangs from the caecum, in the RLQ."),
        O("large intestine", "Put the parts of the large intestine in order from the start", ['cecum', 'ascending colon', 'transverse colon', 'descending colon', 'sigmoid colon', 'rectum'], "Caecum, ascending, transverse, descending, sigmoid, rectum."),
        M("peritoneum", "peritonitis means inflammation of…", ["the peritoneum; the membrane lining the abdominal cavity", "small intestine", "liver", "pancreas"], 'peritone/o + -itis.'),
        T("valve", "The ileocecal valve is between the ileum and caecum.", true, 'ile/o + cec/o + -al.'),
        S("Spelling", "Spell the term for inflammation of the appendix", 'appendicitis', 'appendic/o + -itis.', 'append…')
      ]
    },
    /* ================= دهان، مری و معده ================= */
    {
      id: 'r7', w: 'up', title: "Heartburn", who: "A 51-year-old man with reflux",
      brief: "Abe has had heartburn for years and treated himself with antacids and H2 blockers. An EGD showed oesophagitis, but he did not take his PPI regularly. A second EGD showed moderate esophagitis and a small hiatal hernia.",
      chart: [["Complaint", "heartburn; regurgitation"], ["First EGD", 'erosive esophagitis'], ["Second EGD", 'small hiatal hernia'], ["treatment", "PPI 40 mg daily"]],
      fig: { a: ['gerd-chain', 'hiatal-img'], l: ["The GERD chain", "Hiatal hernia"] },
      steps: [
        M("diagnosis", "GERD means…", ["acid reflux disease", "duodenal ulcer", "inflammation of the stomach and intestines", "pyloric stenosis"], 'gastroesophageal reflux disease.'),
        M("Symptom", "Another name for heartburn is…", ['pyrosis', 'eructation', 'flatus', 'emesis'], "pyr/o = fire; burning behind the breastbone."),
        M("Test", "EGD means looking inside…", ["oesophagus, stomach and duodenum", "colon", "bile ducts", "rectum and anus"], 'esophagogastroduodenoscopy.'),
        P("drug", "Match each drug to its job", [['antacid', "neutralises acid already made"], ['H2 blocker', "blocks the H2 receptor"], ['PPI', "inhibits the proton pump"]]),
        T("rupture", "In a hiatal hernia, part of the stomach moves up through the diaphragm opening into the chest.", true, "hiatus = the oesophageal opening in the diaphragm."),
        S("Spelling", "Spell the term for inflammation of the oesophagus", 'esophagitis', 'esophag/o + -itis.', 'esophag…')
      ]
    },
    {
      id: 'r8', w: 'up', title: "Black stool", who: "A 56-year-old man with epigastric pain",
      brief: "Mr Rezaei had dyspepsia for years and felt better with antacids. For two weeks the pain has been worse and his stool is black and tarry. A CBC shows anaemia.",
      chart: [["Symptom", "melena; epigastric pain"], ["test", "positive FOBT; positive H. pylori"], ["Gastroscopy", "a bleeding 1.5 cm gastric ulcer"], ["Recommendation", 'partial gastrectomy']],
      fig: { a: ['peptic-img', 'ulcer-depth'], l: ["Peptic ulcers", "Ulcer depth"] },
      steps: [
        M("Symptom", "melena means…", ["black, tarry stool with digested blood", "bright red blood in the stool", "fatty stools", "vomiting blood"], "melan/o = black; a sign of upper GI bleeding."),
        M("Cause", "Which bacterium is the main cause of peptic ulcers?", ['Helicobacter pylori', 'Candida', 'Escherichia coli', 'Streptococcus'], "H. pylori infects the stomach wall."),
        M("test", "What is the FOBT for?", ["finding hidden blood in the stool", "counting blood cells", "finding parasites", "measuring liver enzymes"], 'fecal occult blood test.'),
        T("a wound", "A peptic ulcer occurs only in the stomach.", false, "False; it also occurs in the oesophagus or duodenum."),
        M("surgery", "gastrectomy means…", ["removal of part or all of the stomach", "incision of the stomach", "stomach opening on the skin", "looking inside the stomach"], 'gastr/o + -ectomy.'),
        S("Spelling", "Spell the term for looking inside the stomach", 'gastroscopy', 'gastr/o + -scopy.', 'gastro…')
      ]
    },
    /* ================= روده، کبد و صفرا ================= */
    {
      id: 'r9', w: 'lo', title: "Chronic diarrhoea", who: "A 24-year-old man with mucoid diarrhoea",
      brief: "For several months Sam has had mucoid diarrhoea, indigestion and mouth ulcers. A barium enema showed irregularities and the doctor first suspected IBS. Colonoscopy showed granulomatous ulcerating lesions.",
      chart: [["Symptoms", "mucoid stools, dyspepsia, aphthous ulcers"], ['BE', "irregular bowel wall"], ["looking inside the colon (colonoscopy)", 'granulomatous ulcerated lesions'], ["Impression", "IBD; biopsy"]],
      fig: { a: ['ibd-compare', 'crohn-img'], l: ["Crohn disease and colitis", "Crohn disease"] },
      steps: [
        M("abbreviation", "In this record, BE means…", ['barium enema', 'bowel elimination', 'bile excretion', 'below elbow'], "barium enema: a contrast X-ray of the colon with barium given through the rectum."),
        M("diagnosis", "Which two diseases does IBD include?", ["Crohn disease and ulcerative colitis", "IBS and celiac disease", "GERD and Barrett esophagus", "diverticulosis and hemorrhoids"], 'inflammatory bowel disease.'),
        T('IBS', "In IBS, the bowel wall has visible ulcers and damage.", false, "False; IBS is a functional disorder with no visible damage."),
        P("Comparison", "Match each feature to its disease", [["patchy, anywhere in the GI tract", 'Crohn disease'], ["continuous, colon and rectum only", 'ulcerative colitis'], ["no visible damage", 'IBS']]),
        M("Symptom", "aphthous ulcer means…", ["canker sore; a small, painful mouth ulcer", "stomach ulcer", "cracking at the corners of the mouth", "precancerous white patch"], 'canker sore.'),
        S("Spelling", "Spell the term for an endoscopic view of the colon", 'colonoscopy', 'colon/o + -scopy.', 'colono…')
      ]
    },
    {
      id: 'r10', w: 'lo', title: "Jaundice after travel", who: "A 30-year-old woman with jaundice",
      brief: "After a trip during which she drank contaminated water, Mrs Noori has nausea, vomiting and tiredness, and her eyes have turned yellow. She has not had a BM for three days. The doctor has ordered LFTs and an HAV test.",
      chart: [["Symptoms", "N&V; jaundice; fatigue"], ["Last BM", "three days ago"], ["test", "LFT, ALT, AST"], ["Possible diagnosis", 'HAV']],
      fig: { a: ['hepatitis', 'jaundice-img'], l: ["Hepatitis A to E", "Jaundice"] },
      steps: [
        M("Symptom", "jaundice means…", ["yellowing of the skin and eyes", "itchy skin", "paleness", "large bruise"], "Its other name is icterus; caused by raised bilirubin."),
        M("abbreviation", "BM means…", ["bowel movement; passing stool", 'body mass', 'bone marrow', 'blood measure'], 'BM = bowel movement.'),
        M("abbreviation", "LFT means…", ["liver function tests", "blood fat test", "stool test", "liver X-ray"], "liver function tests: ALT, AST and bilirubin."),
        T("Transmission", "Hepatitis A is transmitted by the faecal-oral route.", true, "Contaminated water and food; hepatitis E as well."),
        P("Hepatitis", "Match each type to its route of transmission", [['HAV', "contaminated water and food"], ['HBV', "blood and sexual contact"], ['HDV', "only together with hepatitis B"]]),
        S("Spelling", "Spell the term for “inflammation of the liver”", 'hepatitis', 'hepat/o + -itis.', 'hepa…')
      ]
    },
    /* ================= تشخیص، جراحی و دارو ================= */
    {
      id: 'r11', w: 'tx', title: "gallbladder stones", who: "A 42-year-old woman with RUQ pain",
      brief: "Heather has nausea, bloating, belching, fever and RUQ pain that spreads below the shoulder blade. Murphy sign is positive, she has turned yellow and her stool is pale. ERCP and ultrasound showed stones and gallbladder inflammation.",
      chart: [["Symptoms", "N&V, flatulence, eructation"], ["examination", "positive Murphy sign; jaundice"], ["diagnosis", "cholecystitis with cholelithiasis"], ["surgery", "laparoscopic cholecystectomy; then open"]],
      fig: { a: ['gallstone-sites', 'gallstone-terms'], l: ["Where the stones lodge", "Bile terms"] },
      steps: [
        M("Symptom", "eructation means…", ["belching", "flatulence", "hiccup", "vomiting"], "Releasing stomach gas through the mouth."),
        M("diagnosis", "cholelithiasis means…", ["gallbladder stones", "inflammation of the gallbladder", "stone in the common duct", "removal of the gallbladder"], 'chol/e + lith + -iasis.'),
        M("Test", "Which ducts does ERCP show?", ["Bile and pancreatic ducts", "Oesophagus and stomach", "colon", "liver blood vessels"], 'endoscopic retrograde cholangiopancreatography.'),
        T("Stool colour", "Pale (clay-colored) stool means bile is not reaching the gut.", true, "Bile pigment makes stool brown."),
        O("surgery", "Put the steps of Heather’s operation in order", ["laparoscopic cholecystectomy begun", "converted to open cholecystectomy", 'intraoperative cholangiogram', "NG tube placed"], "The laparoscopic operation was converted to open, then the ducts were imaged."),
        S("Spelling", "Spell the term for removal of the gallbladder", 'cholecystectomy', 'cholecyst/o + -ectomy.', 'cholecyst…')
      ]
    },
    {
      id: 'r12', w: 'tx', title: "Constipation and a colon mass", who: "A 74-year-old woman with lower abdominal pain",
      brief: "Mrs Amiri has severe lower abdominal pain and constipation. Her gallbladder was removed ten years ago and she has chronic reflux. Her abdomen contains fluid. A barium enema showed multiple polyps and a colonoscopy biopsy confirmed sigmoid cancer.",
      chart: [["history of", "cholecystectomy; GERD"], ["examination", 'ascites'], ["Imaging", 'BE: polyposis'], ["diagnosis and treatment", 'sigmoid carcinoma → colectomy + colostomy']],
      fig: { a: ['ostomy-sites', 'dukes'], l: ["Stoma sites", "Dukes stages"] },
      steps: [
        M("Symptom", "ascites means…", ["fluid collecting in the peritoneal cavity", "flatulence", "enlarged liver", "severe constipation"], "Fluid in the abdomen."),
        M("image", "polyposis means…", ["presence of many polyps", "a single polyp", "removal of a polyp", "inflammation of a polyp"], 'polyp/o + -osis.'),
        P("surgery", "Match each term to its meaning", [['colectomy', "removal of the colon"], ['colostomy', "colon opening on the skin"], ['polypectomy', "removal of a polyp"], ['stoma', "opening on the skin"]]),
        T("Naming", "A colostomy is named after the part of the colon brought to the skin, such as a sigmoid colostomy.", true, "Ascending, transverse, descending or sigmoid colostomy."),
        M("Stage", "In Dukes C, the cancer…", ["has reached the lymph nodes", "is only in the mucosa", "has reached the muscle but the nodes are clear", "the polyp is benign"], "A mucosa, B muscle, C lymph nodes."),
        S("Spelling", "Spell the term for an opening of the colon on the skin", 'colostomy', 'col/o + -stomy.', 'colo…')
      ]
    }
  ];


})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* گوارا — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', "Start the meaning from the suffix: cholecystectomy means “removal” + “gallbladder”."],
    ['Lx', "chol/e takes the combining vowel e, not o: cholelith is a gallstone and cholelithiasis is gallstone disease."],
    ['Lx', "stomat/o looks like stomach but means “mouth”; the stomach is gastr/o."],
    ['Lx', "ile/o is the ileum of the intestine and ili/o the hip bone; remember the e in ileum with the e in enteric."],
    ['Lx', "-ectomy is removal, -tomy incision and -stomy making an opening: colectomy, colotomy, colostomy."],
    ['Lx', "dysphagia with a g is difficulty swallowing and dysphasia with an s is difficulty speaking; g as in gag and s as in speak."],
    ['Oro', "Saliva comes from three pairs of glands: parotid, submandibular and sublingual."],
    ['Oro', "Swallowing is called deglutition and chewing mastication; the chewed mouthful is a bolus."],
    ['Oro', "The LES is the cardiac sphincter; if it does not close properly, acid flows back into the oesophagus."],
    ['Oro', "The stomach from top to bottom: cardia, fundus, body, antrum and pylorus; its inner folds are rugae."],
    ['Oro', "A child has 20 baby teeth and an adult 32 permanent teeth; the wisdom tooth is the third molar."],
    ['Gut', "Remember the order of the small intestine with DJI: duodenum, jejunum and ileum."],
    ['Gut', "jejunum means “empty”, because it was always found empty at dissection."],
    ['Gut', "villi enlarge the absorbing surface of the small intestine, and the lacteal in each villus absorbs fat."],
    ['Gut', "The colon has four parts: ascending, transverse, descending and sigmoid; the bend beside the liver is the hepatic flexure."],
    ['Gut', "Bile is made in the liver, stored in the gallbladder and reaches the duodenum through the common bile duct."],
    ['Up', "melena is black, tarry stool and hematochezia is bright red blood in the stool."],
    ['Up', "hematemesis means vomiting blood; hemat/o is blood and -emesis is vomiting."],
    ['Up', "pyrosis is heartburn: a burning in the pit of the stomach when stomach acid flows back into the oesophagus."],
    ['Up', "H. pylori is the main bacterium behind peptic ulcers, and NSAIDs are the other important cause."],
    ['Up', "eructation is belching and flatus is gas passed through the anus."],
    ['Low', "volvulus is twisting of the bowel and intussusception is the bowel sliding into itself like a telescope."],
    ['Low', "diverticulosis means having the pouches and diverticulitis means inflammation of those pouches."],
    ['Low', "Hepatitis A and E are transmitted by the faecal-oral route and B, C and D through blood."],
    ['Low', "Crohn disease affects any part of the GI tract in patches; ulcerative colitis affects only the colon and rectum, continuously."],
    ['Low', "jaundice and icterus mean the same: yellowing of the skin and eyes from raised bilirubin."],
    ['Tx', "EGD means viewing the oesophagus, stomach and duodenum with one endoscope: esophagogastroduodenoscopy."],
    ['Tx', "Both organs appear in the name of an anastomosis: gastrojejunostomy; an ostomy to the skin names only one: ileostomy."],
    ['Tx', "An emetic induces vomiting and an antiemetic prevents it."],
    ['Tx', "PPIs and H2 blockers both reduce stomach acid; an antacid neutralises acid already made."],
    ['Tx', "NPO means “nothing by mouth”; it is usually ordered before surgery and endoscopy."]
  ];

  const COLORS = { Lx: '#4C6EF5', Oro: '#E8590C', Gut: '#2F9E44', Up: '#C2255C', Low: '#7950F2', Tx: '#1098AD', '': '#C2410C' };
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
/* گوارا — کارت‌های واژه (فلش‌کارت) با جعبه لایتنر
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
/* گوارا — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مرجع سریع گوارش
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'govara.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: "Dictionary", color: '#2F5FD0' },
    { id: 'parse', sym: '✂', name: "Word parser", color: '#7B5CE0' },
    { id: 'roots', sym: '-o-', name: "Roots and suffixes", color: '#12A594' },
    { id: 'abbr', sym: 'GI', name: "Abbreviations", color: '#1899D6' },
    { id: 'ref', sym: '🧭', name: "Quick reference", color: '#E5A500' }
  ];
  let cur = 'dict';
  const st = { q: '', w: '', k: '', parse: 'cholecystectomy', open: null, limit: 40 };
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
      <p class="disclaimer">⚕️ Govara is a learning tool and does not replace medical references or clinical judgement.</p>
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
  const dict = () => `<div class="tpane">${searchBox("Search: ulcer, bile, colon…")}
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
  const SAMPLES = ['cholecystectomy', 'gastroenteritis', 'esophagogastroduodenoscopy', 'choledocholithiasis', 'hepatosplenomegaly', 'sialolithiasis', 'proctosigmoidoscopy', 'gastrojejunostomy'];
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
    return `<div class="tpane">${searchBox("Search: gastr, liver, -ectomy…")}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]} list <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b dir="ltr">${esc(r.a)}</b><span>${esc(r.fa)}</span><small dir="ltr">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox("Search: GERD, ulcer, EGD…")}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>Abbreviation</th><th>Full form and meaning</th></tr>${list.map(a => `<tr><td dir="ltr">${esc(a.a)}</td><td><span dir="ltr" class="abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  /* مرجع سریع: جدول‌های پرکاربرد آناتومی، مجاری صفرا و آندوسکوپی که هنگام خواندن پرونده لازم می‌شوند */
  const REF = [
    ["The route of food", [['mouth • or/o, stomat/o', "mouth"], ['pharynx • pharyng/o', "throat (pharynx)"], ['esophagus • esophag/o', "oesophagus"], ['stomach • gastr/o', "stomach"], ['small intestine • enter/o', "small intestine"], ['large intestine • col/o', "large intestine"], ['rectum • rect/o, proct/o', "the straight final section of the large bowel"], ['anus • an/o', "opening at the end of the digestive tract"]]],
    ["small intestine", [['duodenum • duoden/o', "first part of the small intestine"], ['jejunum • jejun/o', "“empty gut”; middle part of the small intestine"], ['ileum • ile/o', "final part of the small intestine (not to be confused with ilium, the hip bone)"]]],
    ["large intestine", [['cecum • cec/o', "“blind gut”; the appendix is attached to it"], ['ascending • transverse • descending colon', "the colon’s rising, crosswise and falling parts"], ['hepatic / splenic flexure', "bend beside the liver (right) / bend beside the spleen (left)"], ['sigmoid colon • sigmoid/o', "S-shaped final stretch of the colon"]]],
    ["bile ducts", [['common hepatic duct', "duct formed by the joining of the liver’s ducts"], ['cystic duct', "cystic duct"], ['common bile duct • choledoch/o', "main shared bile channel; drains into the duodenum"], ['pancreatic duct', "pancreatic duct"]]],
    ["Roots of the accessory organs", [['hepat/o', "liver"], ['chol/e • bili', "bile"], ['cholecyst/o', "gallbladder"], ['cholangi/o', "bile duct"], ['pancreat/o', "pancreas"], ['sial/o', "saliva, salivary gland"]]],
    ["Endoscopies", [['EGD', "oesophagus, stomach and duodenum"], ['colonoscopy', "the entire colon"], ['sigmoidoscopy', "sigmoid colon"], ['proctoscopy', "the straight final section of the large bowel"], ['ERCP', "bile and pancreatic ducts with contrast"]]],
    ["Abdominal quadrants", [['RUQ', "upper right: liver, gallbladder"], ['LUQ', "upper left: stomach, spleen"], ['RLQ', "lower right: appendix"], ['LLQ', "lower left: sigmoid colon"]]]
  ];


  const ref = () => `<div class="tpane"><p class="muted">Frequently used tables for reading charts and imaging reports.</p>
    ${REF.map(g => `<h3 class="tgh">${g[0]}</h3><table class="mini ref"><tr><th>Term</th><th>Meaning</th></tr>${g[1].map(r => `<tr><td dir="ltr" class="ref__v">${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`).join('')}
    ${EA.ui.figCard({ a: ['gi-tract'], l: ["The route of food"] })}</div>`;

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
