/* تراپو • ترمینو — حیطه «derma» (Integumentary System: Skin, Hair, Nails and Glands)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_derma;
  D.css = ".burn{display: flex; flex-direction: column; gap: 6px; margin: 10px 0;}\n.burn__r{display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 6px 10px; border: 2px solid var(--line); border-radius: 14px; flex-wrap: wrap;}\n.burn__n{font-weight: 800; min-width: 0;}\n.burn__n small{color: var(--muted); font-weight: 700; margin-inline-start: 4px;}\n.burn__r .seg{flex-shrink: 0;}\n.burn__out{display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 10px; padding: 12px 16px; border-radius: 16px; background: color-mix(in srgb, #C8423C 12%, var(--bg)); border: 2px solid color-mix(in srgb, #C8423C 40%, var(--line)); margin-bottom: 12px;}\n.burn__out b{font-size: 28px; color: #C8423C;}\n.burn__out small{flex-basis: 100%; color: var(--muted); font-weight: 700;}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* درما — هسته: فضای نام، متن‌ها، رقم فارسی و سازنده‌های کوتاه محتوا
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
  EA.APP = { name: "Derma", key: 'derma', title: "Derma • Terminology of the Skin" };

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
(function (root) {
  const EA = root.EA = root.EA || {};
  const fa = (n, d) => EA.fa(n, d);
  EA.APP = {
    name: "Derma", key: 'derma', title: "Derma • Terminology of the Skin", certCode: 'DR',
    subject: "Medical terminology of the integumentary system (skin, hair, nails and skin glands)",
    kicker: "🧴 Medical terminology: Skin, Hair, Nails and Skin Glands",
    hello: "Hi, I’m <b>Derma</b>;",
    landP: () => `Hi, I’m <b>Derma</b>, a smiling patch of skin with a single hair and an SPF sun on my shoulder! Here you won’t memorise words; you’ll <b>decode</b> them: you’ll recognise the root, prefix and suffix and read every new word yourself. ${fa(EA.lex.TERMS.length)} terms with pronunciation and meaning, ${fa(Object.keys(EA.IMG).length + EA.ART_KEYS.length)} pictures and teaching figures, ${fa(EA.rounds.length)} clinical charts and Leitner cards are waiting for you.`,
    disclaimer: "Derma is an educational tool and does not replace examination, clinical judgment or a physician’s orders.",
    eyes: "Dozens of bilingual figures and clinical pictures, from a cross-section of the skin layers and lesions to burns, psoriasis and melanoma.",
    outcomes: [
          "Break every skin word into prefix, root and suffix and give its meaning",
          "Point out the skin layers, hair, nails and skin glands on a cross-section of the skin",
          "Describe every skin lesion precisely with three keys: “surface, contents, size”",
          "Tell skin infections, inflammations and autoimmune diseases apart",
          "Recognise the degree of a burn and calculate the burned area with the rule of nines",
          "Read skin cancers, biopsy, surgery, grafts, drugs and chart abbreviations"
        ],
    endText: "Just 5 minutes a day. A few weeks from now you’ll read skin terms like your mother tongue.",
    obHello: "Hi! I’m Derma, a smiling patch of skin 🧴 What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “The Language of the Skin” is the best start; the system overview and basic roots are taught there!",
    demo: () => ({
    q: "The word <b dir=\"ltr\">onychomycosis</b> means…",
    fig: { a: ['nail-anatomy'], l: ["The nail from above and from the side"] },
    opts: ["Fungal infection of the nail", "Softening of the nail", "Inflammation around the nail", "Removal of the nail"],
    why: `${EA.K.wb('onych/o', 'myc/o', '-osis')}<br><b>onych/o</b> = nail, <b>myc/o</b> = fungus, <b>-osis</b> = abnormal condition. So it is a <b>fungal infection of the nail</b>: the yellow, thick, brittle nail. Start the meaning from the suffix!`
  }),
    titles: ["New Cell", "Curious Keratinocyte", "Junior Layer Expert", "Guardian of the Epidermis", "Root Decoder", "Master of the Appendages", "Lesion Hunter",
    "Macule and Papule Detective", "Guardian of the Skin Barrier", "Master of the Rule of Nines", "Fungus and Bacteria Hunter", "ABCDE Detective", "Word-Building Master", "Dermatology Legend", "Terminology Icon"],
    leagueRoles: ["Medical student", "Nursing student", "Lab-science student", "Lab scientist", "Nutrition student", "ICU nurse", "Clinical dietitian", "Dermatology resident", "Midwifery student", "Pharmacy student", "Surgical technologist", "Burn unit nurse", "Wound care nurse"],
    firstBadge: ['🧴', "First Layer"],
    worldBadges: { lx: ['🧩', "Decoder"], ly: ['🧱', "Layer Expert"], ac: ['💅', "Guardian of the Appendages"], le: ['🔎', "Lesion Hunter"], ds: ['🦠', "Skin Healer"], tx: ['🔬', "Biopsy Detective"] },
    confetti: ['#D9643A', '#1F9E8F', '#FFC800', '#1E88E5', '#D9506E', '#E8892B', '#A0673A', '#58CC02'],
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
    return `<svg class="yona derma yona--${m}" viewBox="0 0 120 150" width="${size || 120}" height="${(size || 120) * 1.25}" aria-hidden="true" style="--c:${c}">
      <ellipse cx="60" cy="144" rx="32" ry="5" fill="currentColor" opacity=".12"/>
      <g class="yona-body">
        <path d="M${cx + 12} 34 q-2 -16 10 -28" stroke="#5a2e1c" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <rect x="14" y="32" width="88" height="98" rx="24" fill="var(--c)"/>
        <path d="M14 60 q11 -9 22 0 t22 0 t22 0 t22 0 V56 a24 24 0 0 0 -24 -24 H38 a24 24 0 0 0 -24 24Z" fill="#fff" opacity=".22"/>
        <path d="M14 60 q11 -9 22 0 t22 0 t22 0 t22 0" stroke="#000" stroke-opacity=".12" stroke-width="2" fill="none"/>
        <g fill="#fff" opacity=".28"><circle cx="30" cy="118" r="6"/><circle cx="46" cy="121" r="6"/><circle cx="70" cy="121" r="6"/><circle cx="86" cy="118" r="6"/></g>
        <rect x="14" y="32" width="88" height="98" rx="24" fill="#000" opacity=".06"/>
        <path d="M${cx - 34} ${cy - 30} L${cx - 22} ${cy - 40}" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>
        <g transform="translate(90 102)"><circle r="11" fill="#FFC800" stroke="#fff" stroke-width="2.5"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<path d="M${(Math.cos(i * Math.PI / 4) * 14).toFixed(1)} ${(Math.sin(i * Math.PI / 4) * 14).toFixed(1)} L${(Math.cos(i * Math.PI / 4) * 18).toFixed(1)} ${(Math.sin(i * Math.PI / 4) * 18).toFixed(1)}" stroke="#FFC800" stroke-width="3" stroke-linecap="round"/>`).join('')}${''}<text x="0" y="3.5" font-size="8" font-weight="900" text-anchor="middle" fill="#7a4a00" font-family="Arial, sans-serif">SPF</text></g>
        <path class="negar-spark" d="M100 18 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
        ${brows}${eyes}
        <ellipse cx="${cx - 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/><ellipse cx="${cx + 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/>
        ${mouths[m] || mouths.happy}${tear}
      </g>
    </svg>`;
  }
  };
})(window);
/* درما — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از data/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["abrasion", "ah-BRAY-zhun", "Scraping away of the skin surface by friction.", "skin scraped away by friction", "le", "sx", []],
["abscess", "AB-ses", "Localized collection of pus in a cavity surrounded by inflamed tissue.", "pocket of pus in inflamed tissue", "ds", "dz", ["I&D"]],
["acne vulgaris", "AK-nee vul-GAIR-is", "Common inflammatory disease of sebaceous glands and hair follicles with comedones, papules and pustules.", "common pimples", "ds", "dz", []],
["actinic keratosis", "ak-TIN-ik ker-ah-TOH-sis", "Rough, scaly precancerous patch on sun-exposed skin (actin/o = ray); may become squamous cell carcinoma.", "precancerous sun-damage patch", "tx", "dz", ["AK", "UV"]],
["adipose tissue", "AD-ih-pohs TISH-yoo", "Fat tissue (adip/o = fat, -ose = full of) of the subcutaneous layer.", "fatty tissue", "ly", "body", []],
["albinism", "AL-bih-nizm", "Inherited absence of melanin in skin, hair and eyes (albin/o = white).", "inborn lack of pigment", "ds", "dz", []],
["allograft", "AL-oh-graft", "Skin graft from another person (allo- = other); also called homograft.", "graft from another person", "tx", "tx", []],
["alopecia", "al-oh-PEE-shee-ah", "Partial or complete loss of hair; baldness (alopecia areata = patchy hair loss).", "hair loss", "ac", "sx", []],
["anhidrosis", "an-hye-DROH-sis", "Absence of sweating (an- = without, hidr/o = sweat).", "absence of sweating", "ac", "sx", []],
["anti-inflammatory", "an-tih-in-FLAM-ah-tor-ee", "Drug that reduces inflammation.", "reduces inflammation", "tx", "tx", []],
["antibiotic", "an-tih-bye-OT-ik", "Drug that kills or stops the growth of bacteria.", "bacteria-killing drug", "tx", "tx", []],
["antifungal", "an-tih-FUNG-gal", "Drug that kills or prevents the growth of fungi.", "kills fungi", "tx", "tx", []],
["antihistamine", "an-tih-HIS-tah-meen", "Drug that blocks histamine and relieves allergic itching and hives.", "drug that blocks histamine", "tx", "tx", []],
["antipruritic", "an-tih-proo-RIT-ik", "Drug that relieves itching (anti- = against, prurit/o = itching).", "relieves itching", "tx", "tx", []],
["antiseptic", "an-tih-SEP-tik", "Substance that kills or slows microorganisms on the skin.", "kills germs on the skin", "tx", "tx", []],
["antiviral", "an-tih-VYE-ral", "Drug that weakens or stops a virus (e.g. for herpes).", "acts against viruses", "tx", "tx", []],
["apocrine gland", "AP-oh-krin gland", "Sweat gland of the armpit and groin that opens into hair follicles and becomes active at puberty.", "odour-producing sweat gland of armpit and groin", "ac", "body", []],
["arrector pili", "ah-REK-tor PYE-lye", "Tiny smooth muscle attached to a hair follicle; it contracts with cold or fear to make goose bumps.", "tiny muscle that makes hair stand up", "ac", "body", []],
["atopic dermatitis", "ay-TOP-ik der-mah-TYE-tis", "Chronic, itchy eczema linked to allergy, asthma and hay fever; common in children.", "allergic itchy eczema", "ds", "dz", ["AD"]],
["atrophy", "AT-roh-fee", "Thinning and wasting of the skin; it looks thin, shiny and wrinkled (a- = without, -trophy = development).", "thinning and wasting", "le", "sx", []],
["autograft", "AW-toh-graft", "Skin graft taken from the patient's own body (auto- = self).", "graft from one’s own body", "tx", "tx", []],
["avascular", "ay-VAS-kyoo-lar", "Without blood vessels (a- = without, vascul/o = vessel); the epidermis is avascular.", "without blood vessels", "ly", "body", []],
["basal cell carcinoma", "BAY-sal sel kar-sih-NOH-mah", "Most common skin cancer; a pearly papule or nodule with rolled edges from basal-layer cells; rarely spreads.", "cancer of the skin’s base layer", "tx", "dz", ["BCC", "UV"]],
["Beau lines", "boh lynz", "Transverse grooves across the nails that appear after a severe illness.", "transverse grooves in the nail", "ac", "sx", []],
["benign", "beh-NYNE", "Not cancerous; does not invade nearby tissue or spread.", "not cancerous", "tx", "sx", []],
["biopsy", "BYE-op-see", "Removal of a small piece of living tissue to examine under a microscope (bi/o = life, -opsy = view of).", "tissue sampling (biopsy)", "tx", "lab", ["Bx"]],
["blepharoplasty", "BLEF-ah-roh-plas-tee", "Surgical repair of the eyelid, often to remove sagging skin (blephar/o = eyelid).", "eyelid surgery", "tx", "tx", []],
["body surface area", "BOD-ee SER-fis AIR-ee-ah", "Total area of the skin surface; burn size is given as a percentage of it.", "total area of the skin", "ds", "lab", ["BSA"]],
["bromhidrosis", "brohm-hye-DROH-sis", "Foul-smelling sweat (brom/o = stench).", "foul-smelling sweat", "ac", "sx", []],
["bulla", "BUL-ah", "Large blister filled with fluid, larger than 1 cm (plural: bullae).", "large blister", "le", "sx", []],
["burn", "bern", "Injury to tissue from heat, chemicals, electricity or radiation; classified by depth.", "tissue injury from heat or chemicals", "ds", "dz", ["BSA"]],
["candidiasis", "kan-dih-DYE-ah-sis", "Yeast infection by Candida in moist areas of skin, mouth (thrush) or vagina; also called moniliasis.", "yeast infection (thrush)", "ds", "dz", []],
["carbuncle", "KAR-bung-kl", "Cluster of connected furuncles involving several hair follicles.", "cluster of boils", "ds", "dz", []],
["carcinoma", "kar-sih-NOH-mah", "Cancerous tumor of epithelial tissue (carcin/o = cancer, -oma = tumor).", "cancer of epithelial tissue", "tx", "dz", []],
["cauterization", "kaw-ter-ih-ZAY-shun", "Destruction of tissue with heat, electricity, freezing or chemicals (cauter/o = to burn).", "burning tissue", "tx", "tx", []],
["cellulitis", "sel-yoo-LYE-tis", "Bacterial infection of the dermis and subcutaneous tissue with red, hot, swollen and painful skin.", "spreading skin infection", "ds", "dz", ["C&S"]],
["ceruminous gland", "seh-ROO-mih-nus gland", "Modified sweat gland of the ear canal that secretes cerumen (ear wax).", "earwax gland", "ac", "body", []],
["chemical peel", "KEM-ih-kal peel", "Applying a chemical to remove the outer layers of damaged skin (also called chemabrasion).", "chemical skin peel", "tx", "tx", []],
["cicatrix", "SIK-ah-triks", "A scar; fibrous tissue that replaces normal skin after a wound heals.", "mark left by a healed wound", "ly", "sx", []],
["collagen", "KOL-ah-jen", "Strong, fibrous protein of the dermis and connective tissue that gives the skin strength.", "fibrous protein that gives skin strength", "ly", "cell", []],
["comedo", "KOM-ee-doh", "Plug of sebum and keratin in a hair follicle; open comedo = blackhead, closed comedo = whitehead (plural: comedones).", "blackhead or whitehead", "ac", "sx", []],
["contact dermatitis", "KON-takt der-mah-TYE-tis", "Skin inflammation caused by touching an irritant or allergen (e.g. poison ivy, nickel).", "rash from touching an irritant", "ds", "dz", []],
["contusion", "kon-TOO-zhun", "Injury that does not break the skin; a bruise.", "bruise", "le", "sx", []],
["corticosteroid", "kor-tih-koh-STAIR-oyd", "Hormone-like drug that reduces inflammation and itching; used as cream or ointment for dermatitis.", "steroid anti-inflammatory drug", "tx", "tx", []],
["crust", "krust", "Dried serum, blood or pus on the skin surface; a scab.", "scab", "le", "sx", []],
["cryosurgery", "krye-oh-SER-jer-ee", "Destruction of tissue by extreme cold, usually liquid nitrogen (cry/o = cold).", "destroying tissue by freezing", "tx", "tx", []],
["cryotherapy", "krye-oh-THER-ah-pee", "Treatment with cold, such as freezing warts.", "cold treatment", "tx", "tx", []],
["culture and sensitivity", "KUL-cher and sen-sih-TIV-ih-tee", "Lab test that grows microorganisms from a sample to identify them and find which antibiotic works best.", "growing microbes and testing antibiotics", "tx", "lab", ["C&S"]],
["curettage", "kyoo-reh-TAHZH", "Scraping of a lesion with a spoon-shaped instrument (curette).", "scraping with a curette", "tx", "tx", []],
["cutaneous", "kyoo-TAY-nee-us", "Pertaining to the skin (cutane/o = skin, -ous = pertaining to).", "pertaining to the skin", "lx", "body", []],
["cuticle", "KYOO-tih-kl", "Narrow band of epidermis at the base of the nail (also called eponychium).", "fold of skin at the nail base", "ac", "body", []],
["cyanoderma", "sye-ah-noh-DER-mah", "Bluish discoloration of the skin (cyan/o = blue); also called cyanosis.", "blue skin colour", "lx", "sx", []],
["cyanosis", "sye-ah-NOH-sis", "Bluish discoloration of skin and mucous membranes from too little oxygen in the blood (cyan/o = blue).", "bluish skin", "le", "sx", []],
["cyst", "sist", "Closed sac under the skin filled with fluid or semisolid material.", "abnormal fluid-filled sac", "le", "sx", []],
["debridement", "day-breed-MON", "Removal of dead, damaged or infected tissue from a wound or burn so it can heal.", "removing dead tissue from a wound", "tx", "tx", []],
["decubitus ulcer", "dee-KYOO-bih-tus UL-ser", "Pressure ulcer (bedsore); breakdown of skin over a bony area from long pressure in bedridden patients.", "pressure sore", "ds", "dz", ["decub"]],
["depigmentation", "dee-pig-men-TAY-shun", "Loss of normal skin pigment (de- = removal, lack of).", "loss of skin colour", "le", "sx", []],
["dermabrasion", "der-mah-BRAY-zhun", "Sanding the skin with a rotating brush to remove scars, tattoos or wrinkles.", "sanding away the top skin layer", "tx", "tx", []],
["dermal", "DER-mal", "Pertaining to the skin, especially the dermis.", "pertaining to the dermis", "lx", "body", []],
["dermal papillae", "DER-mal pah-PIL-ee", "Small finger-like projections of the dermis into the epidermis; they form fingerprints (papill/o = nipple-like).", "finger-like ridges of the dermis", "ly", "body", []],
["dermatitis", "der-mah-TYE-tis", "Inflammation of the skin (-itis = inflammation), often with redness, swelling and itching.", "skin inflammation (dermatitis)", "lx", "dz", ["AD"]],
["dermatologist", "der-mah-TOL-oh-jist", "Physician who specializes in diagnosing and treating diseases of the skin, hair and nails.", "skin specialist", "lx", "field", ["Derm"]],
["dermatology", "der-mah-TOL-oh-jee", "The medical specialty concerned with the diagnosis and treatment of skin disorders (dermat/o = skin, -logy = study of).", "study of the skin", "lx", "field", ["Derm"]],
["dermatome", "DER-mah-tohm", "Instrument for cutting thin slices of skin for grafting (-tome = instrument to cut).", "skin-cutting instrument for grafts", "tx", "tx", []],
["dermatomycosis", "der-mah-toh-my-KOH-sis", "Any fungal infection of the skin (myc/o = fungus).", "fungal skin infection", "ds", "dz", []],
["dermatopathologist", "der-mah-toh-pah-THOL-oh-jist", "Pathologist who specializes in examining skin tissue (biopsy samples) under the microscope.", "specialist in skin tissue diagnosis", "lx", "field", ["Bx"]],
["dermatopathy", "der-mah-TOP-ah-thee", "Any disease of the skin (-pathy = disease).", "skin disease", "lx", "dz", []],
["dermatoplasty", "DER-mah-toh-plas-tee", "Surgical repair of the skin (-plasty = surgical repair).", "surgical repair of the skin", "tx", "tx", []],
["dermatosis", "der-mah-TOH-sis", "Any abnormal condition of the skin (dermat/o = skin, -osis = abnormal condition).", "any skin condition", "lx", "dz", []],
["dermis", "DER-mis", "The inner, thick layer of the skin (also called corium); rich in blood vessels, nerves, glands and hair follicles.", "true skin, the middle layer", "ly", "body", []],
["diaphoresis", "dye-ah-for-EE-sis", "Profuse sweating (dia- = through, -phoresis = carrying); also called sudoresis.", "profuse sweating", "ac", "sx", []],
["discoid lupus erythematosus", "DIS-koyd LOO-pus er-ih-them-ah-TOH-sus", "Form of lupus limited to the skin, with round red scaly plaques.", "skin-only form of lupus", "ds", "dz", ["DLE"]],
["dysplastic nevus", "dis-PLAS-tik NEE-vus", "Atypical mole with irregular borders and color; may develop into melanoma.", "irregular mole", "tx", "dz", []],
["ecchymosis", "ek-ih-MOH-sis", "Bruise; large black-and-blue area from blood escaping into the skin.", "large bruise", "le", "sx", []],
["eccrine gland", "EK-rin gland", "Common sweat gland that opens directly onto the skin through a pore and cools the body.", "cooling sweat gland", "ac", "body", []],
["eczema", "EK-zeh-mah", "Chronic itchy inflammation of the skin with redness, vesicles, crusts and scales; often atopic.", "itchy red inflamed skin", "ds", "dz", ["AD"]],
["edema", "eh-DEE-mah", "Swelling from too much fluid in the tissues.", "swelling", "le", "sx", []],
["elastin", "ee-LAS-tin", "Stretchy protein fiber of the dermis that lets the skin return to its shape.", "stretchy protein of the dermis", "ly", "cell", []],
["electrodesiccation", "ee-lek-troh-des-ih-KAY-shun", "Drying and destroying tissue with a high-frequency electric current (electr/o = electricity).", "drying tissue with electric current", "tx", "tx", []],
["emollient", "ee-MOL-ee-ent", "Moisturizer that softens and soothes dry skin.", "moisturiser", "tx", "tx", []],
["epidermis", "ep-ih-DER-mis", "The outer, thin layer of the skin; made of stratified squamous epithelium, with no blood vessels or nerves (epi- = upon, derm = skin).", "outer layer of the skin", "ly", "body", []],
["epidermoid", "ep-ih-DER-moyd", "Resembling the epidermis (epi- = upon, derm = skin, -oid = resembling).", "resembling the epidermis", "lx", "body", []],
["epithelium", "ep-ih-THEE-lee-um", "Tissue that covers body surfaces; the epidermis is stratified squamous epithelium.", "lining tissue", "ly", "body", []],
["erosion", "ee-ROH-zhun", "Shallow loss of the epidermis that heals without a scar.", "shallow loss of the epidermis", "le", "sx", []],
["erythema", "er-ih-THEE-mah", "Redness of the skin caused by widening of capillaries (erythem/o = red, flushed).", "redness of the skin", "le", "sx", []],
["erythematous", "er-ih-THEM-ah-tus", "Pertaining to redness of the skin.", "reddened", "le", "sx", []],
["erythroderma", "eh-rith-roh-DER-mah", "Abnormal redness of the skin over a wide area (erythr/o = red, -derma = skin).", "widespread redness of the skin", "lx", "sx", []],
["eschar", "ES-kar", "Thick, dark crust of dead tissue after a burn or deep injury.", "dead tissue of a burn", "ds", "sx", []],
["escharotomy", "es-kar-OT-oh-mee", "Surgical incision through burn eschar to relieve pressure and restore blood flow.", "cutting through a burn scab", "tx", "tx", []],
["excision", "ek-SIZH-un", "Surgical cutting out of a lesion (ex- = out, cis/o = to cut).", "surgical removal", "tx", "tx", []],
["excisional biopsy", "ek-SIZH-un-al BYE-op-see", "Removal of the whole lesion for examination.", "removal of a whole lesion for testing", "tx", "lab", ["Bx"]],
["excoriation", "eks-koh-ree-AY-shun", "Scratch mark; a linear break in the skin surface, often covered with crust.", "scratch mark", "le", "sx", []],
["exfoliative cytology", "eks-FOH-lee-ah-tiv sye-TOL-oh-jee", "Scraping cells from the skin surface to examine under a microscope.", "study of scraped-off cells", "tx", "lab", []],
["exudate", "EKS-yoo-dayt", "Fluid, cells or pus that leak out of tissue or blood vessels into a wound.", "fluid oozing into a wound", "le", "sx", []],
["fibroblast", "FYE-broh-blast", "Connective tissue cell that makes collagen and elastin; important in wound healing (fibr/o = fiber).", "cell that makes collagen", "ly", "cell", []],
["first-degree burn", "first dih-GREE bern", "Superficial burn of the epidermis only, with redness and pain but no blisters (e.g. sunburn).", "superficial burn", "ds", "dz", []],
["fissure", "FISH-er", "Deep crack or groove in the skin (e.g. athlete's foot, chapped lips).", "crack in the skin", "le", "sx", []],
["folliculitis", "foh-lik-yoo-LYE-tis", "Inflammation of hair follicles, often by bacteria, seen as small pustules around hairs.", "inflammation of a hair follicle", "ac", "dz", []],
["free edge", "free ej", "The part of the nail that extends past the fingertip.", "nail tip beyond the finger", "ac", "body", []],
["frozen section", "FROH-zen SEK-shun", "Quick freezing and thin slicing of tissue for immediate examination during surgery.", "quickly frozen tissue slice", "tx", "lab", ["FS"]],
["fulguration", "ful-gyoo-RAY-shun", "Tissue destruction by sparks of high-frequency electric current.", "destroying tissue with electric sparks", "tx", "tx", []],
["full-thickness skin graft", "ful THIK-nes skin graft", "Graft of the whole epidermis and dermis.", "graft of full-thickness skin", "tx", "tx", ["FTSG"]],
["fungal scraping", "FUNG-gal SKRAY-ping", "Scraping of skin, hair or nails tested for fungus, often with potassium hydroxide (KOH) or culture.", "skin scraping test for fungus", "tx", "lab", ["KOH"]],
["furuncle", "FYOO-rung-kl", "Boil; painful pus-filled infection of a hair follicle.", "boil", "ds", "dz", []],
["gangrene", "GANG-green", "Death of tissue from loss of blood supply, often followed by bacterial invasion.", "tissue death with decay", "ds", "dz", []],
["granulation tissue", "gran-yoo-LAY-shun TISH-yoo", "New, red, bumpy connective tissue with tiny blood vessels that fills a healing wound.", "healing tissue in a wound", "ly", "body", []],
["hair", "hair", "Thread-like structure of keratin that grows from a follicle in the dermis (pil/o, trich/o = hair).", "strand growing from a follicle", "ac", "body", []],
["hair follicle", "hair FOL-ih-kl", "Tube-like sac in the dermis from which a hair grows (follicul/o = small sac).", "sac that a hair grows from", "ac", "body", []],
["hair papilla", "hair pah-PIL-ah", "Cluster of blood vessels and connective tissue at the base of the follicle that feeds the growing hair.", "tip that feeds the growing hair", "ac", "body", []],
["hair root", "hair root", "The part of a hair below the skin surface, inside the follicle.", "part of a hair below the skin", "ac", "body", []],
["hair shaft", "hair shaft", "The visible part of a hair above the skin surface.", "visible part of a hair", "ac", "body", []],
["hemangioma", "hee-man-jee-OH-mah", "Benign tumor of blood vessels; a strawberry birthmark in infants (hem/o = blood, angi/o = vessel).", "birthmark of blood vessels", "tx", "dz", []],
["hematoma", "hee-mah-TOH-mah", "Collection of clotted blood under the skin forming a raised swelling (hemat/o = blood, -oma = mass).", "pool of clotted blood", "le", "sx", []],
["herpes simplex", "HER-peez SIM-pleks", "Viral infection with painful vesicles; type 1 causes cold sores (fever blisters) on the lips.", "cold sore", "ds", "dz", ["HSV"]],
["herpes zoster", "HER-peez ZOS-ter", "Shingles; painful vesicles along a nerve path caused by reactivation of the chickenpox virus.", "shingles", "ds", "dz", ["VZV"]],
["hidradenitis", "hye-drad-eh-NYE-tis", "Inflammation of sweat glands (hidr/o = sweat, aden/o = gland, -itis).", "inflammation of the sweat glands", "ac", "dz", []],
["hidrosis", "hye-DROH-sis", "Production and excretion of sweat; also used for excessive sweating (hidr/o = sweat).", "sweating", "ac", "sx", []],
["hirsutism", "HER-soot-izm", "Excessive hair growth, especially in a male pattern in women (hirsut/o = hairy).", "excessive hair in women", "ac", "sx", []],
["histiocytoma", "his-tee-oh-sye-TOH-mah", "Benign firm nodule of the dermis made of tissue cells (also called dermatofibroma).", "firm benign skin nodule", "tx", "dz", []],
["hyperhidrosis", "hye-per-hye-DROH-sis", "Excessive sweating (hyper- = excessive).", "excessive sweating", "ac", "sx", []],
["hyperpigmentation", "hye-per-pig-men-TAY-shun", "Darker areas of skin from extra melanin (e.g. age spots).", "darkening of the skin", "le", "sx", []],
["hypodermic", "hye-poh-DER-mik", "Pertaining to under the skin; a hypodermic needle injects drugs under the skin.", "under the skin", "ly", "body", []],
["hypodermis", "hye-poh-DER-mis", "Another name for the subcutaneous layer beneath the dermis (hypo- = under).", "fatty layer under the skin", "ly", "body", []],
["hyponychium", "hye-poh-NIK-ee-um", "Thickened skin under the free edge of the nail (hypo- = under, onych/o = nail).", "skin under the nail tip", "ac", "body", []],
["ichthyosis", "ik-thee-OH-sis", "Inherited condition with dry, rough, fish-like scales on the skin (ichthy/o = fish, dry, scaly).", "fish-scale skin", "ds", "dz", []],
["impetigo", "im-peh-TYE-goh", "Highly contagious bacterial skin infection (staph or strep) with pustules that rupture and form honey-colored crusts, often around the nose and mouth.", "contagious crusting skin infection", "ds", "dz", ["staph", "strep"]],
["incision and drainage", "in-SIZH-un and DRAY-nij", "Cutting into a lesion such as an abscess and letting the pus drain out.", "cutting open to let pus out", "tx", "tx", ["I&D"]],
["incisional biopsy", "in-SIZH-un-al BYE-op-see", "Removal of only part of a large lesion for examination.", "removal of part of a lesion for testing", "tx", "lab", ["Bx"]],
["induration", "in-doo-RAY-shun", "Hardening of an area of skin, often from inflammation (used to read skin tests).", "hardened area", "le", "sx", []],
["integument", "in-TEG-yoo-ment", "The skin; the outer covering of the body (from Latin integumentum, a covering).", "skin as a body covering", "lx", "body", []],
["integumentary system", "in-teg-yoo-MEN-tah-ree SIS-tem", "The skin and its accessory organs: hair, nails, sweat glands and sebaceous glands.", "skin, hair, nails and skin glands", "lx", "body", []],
["intradermal", "in-trah-DER-mal", "Pertaining to within the skin (intra- = within); e.g. intradermal injection for skin tests.", "within the skin", "ly", "body", ["ID"]],
["jaundice", "JAWN-dis", "Yellow color of skin and eyes from too much bilirubin in the blood (jaund/o = yellow).", "yellowing of the skin (jaundice)", "le", "sx", []],
["Kaposi sarcoma", "KAP-oh-see sar-KOH-mah", "Cancer of blood vessel walls with purple skin lesions, often in people with AIDS.", "cancer with purple skin lesions", "tx", "dz", []],
["keloid", "KEE-loyd", "Raised, thickened overgrowth of scar tissue beyond the wound edges, from excess collagen.", "raised overgrown scar", "le", "sx", []],
["keratin", "KER-ah-tin", "Tough, waterproof protein of the outer epidermis, hair and nails (kerat/o = horny tissue, hard).", "hard protein of skin, hair and nails", "ly", "cell", []],
["keratinocyte", "ker-ah-TIN-oh-site", "The main cell of the epidermis; it produces keratin (-cyte = cell).", "keratin-making cell", "ly", "cell", []],
["keratolytic", "ker-ah-toh-LIT-ik", "Agent that breaks down and loosens keratin to remove warts, scales or calluses (-lytic = breaking down).", "drug that peels away hard skin", "tx", "tx", []],
["laceration", "las-er-AY-shun", "Torn, jagged wound or cut in the skin.", "torn, jagged wound", "le", "sx", []],
["laser therapy", "LAY-zer THER-ah-pee", "Use of a focused light beam to remove lesions, tattoos, scars or blood vessel marks.", "treatment with laser light", "tx", "tx", []],
["lesion", "LEE-zhun", "Any wound, injury or abnormal change in tissue, such as a sore or a spot on the skin.", "area of damaged tissue", "le", "sx", []],
["leukoderma", "loo-koh-DER-mah", "White patches of skin from loss of pigment (leuk/o = white, -derma = skin).", "white patches of skin", "lx", "sx", []],
["lichenification", "lye-ken-ih-fih-KAY-shun", "Thickened, leathery skin with deep lines from long-term scratching or rubbing.", "thick, leathery skin", "le", "sx", []],
["lipectomy", "lih-PEK-toh-mee", "Surgical removal of fat tissue.", "surgical removal of fat", "tx", "tx", []],
["lipocyte", "LIP-oh-site", "Fat cell (lip/o = fat, -cyte = cell); also called adipocyte.", "fat cell", "ly", "cell", []],
["lipoma", "lih-POH-mah", "Benign, soft tumor of fat cells (lip/o = fat).", "fatty lump", "tx", "dz", []],
["liposuction", "lip-oh-SUK-shun", "Removal of fat with a suction tube (lip/o = fat).", "fat removal by suction", "tx", "tx", []],
["local anesthetic", "LOH-kal an-es-THET-ik", "Drug that numbs a small area of skin for a procedure.", "numbing a small area", "tx", "tx", []],
["lunula", "LOO-nyoo-lah", "Pale half-moon area at the base of the nail (Latin luna = moon).", "white half-moon at the nail base", "ac", "body", []],
["macule", "MAK-yool", "Flat, discolored spot less than 1 cm, not raised or depressed (e.g. freckle).", "small flat spot", "le", "sx", []],
["malignant", "mah-LIG-nant", "Cancerous; tends to invade tissue and spread (metastasize).", "cancerous and spreading", "tx", "sx", []],
["malignant melanoma", "mah-LIG-nant mel-ah-NOH-mah", "Most dangerous skin cancer, arising from melanocytes; spreads early to lymph nodes and organs.", "malignant tumour of pigment cells", "tx", "dz", ["MM", "UV"]],
["Mantoux test", "man-TOO test", "Tuberculin skin test; purified protein derivative (PPD) is injected intradermally and the induration is measured after 48–72 hours.", "tuberculin skin test", "tx", "lab", ["PPD", "TB", "ID"]],
["Meissner corpuscle", "MYS-ner KOR-pus-l", "Touch receptor in the dermal papillae that senses light touch.", "light-touch receptor", "ly", "body", []],
["melanin", "MEL-ah-nin", "Dark pigment that gives color to skin, hair and eyes and absorbs ultraviolet light (melan/o = black).", "skin pigment", "ly", "cell", ["UV"]],
["melanocyte", "meh-LAN-oh-site", "Pigment cell in the basal layer of the epidermis that produces melanin (melan/o = black, -cyte = cell).", "pigment-making cell", "ly", "cell", []],
["metastasis", "meh-TAS-tah-sis", "Spread of cancer cells from the original site to distant parts of the body.", "spread of cancer", "tx", "sx", []],
["Mohs surgery", "mohz SER-jer-ee", "Removal of skin cancer layer by layer, each checked under the microscope until no cancer cells remain; saves healthy tissue.", "layer-by-layer skin cancer surgery", "tx", "tx", ["BCC", "SCC"]],
["MRSA infection", "MER-sah in-FEK-shun", "Skin infection by methicillin-resistant Staphylococcus aureus, a staph bacterium resistant to many antibiotics.", "resistant staph infection", "ds", "dz", ["MRSA"]],
["nail", "nail", "Hard plate of keratin that protects the tip of each finger and toe (onych/o, ungu/o = nail).", "hard keratin plate on the fingertip", "ac", "body", []],
["nail bed", "nail bed", "Skin beneath the nail body; its blood vessels give the nail its pink color.", "skin beneath the nail", "ac", "body", []],
["nail body", "nail BOD-ee", "The visible, flat part of the nail (also called nail plate).", "visible nail plate", "ac", "body", []],
["nail matrix", "nail MAY-triks", "Growth region under the nail root where new nail cells are made.", "growth area of the nail", "ac", "body", []],
["nail root", "nail root", "The part of the nail hidden under the skin fold at the base.", "hidden base of the nail", "ac", "body", []],
["necrosis", "neh-KROH-sis", "Death of cells or tissue (necr/o = death).", "tissue death", "ds", "sx", []],
["necrotizing fasciitis", "NEK-roh-tye-zing fas-ee-EYE-tis", "Rapidly spreading, life-threatening bacterial infection that destroys skin, fat and fascia ('flesh-eating' infection).", "flesh-eating infection", "ds", "dz", []],
["nevus", "NEE-vus", "Mole or birthmark; benign pigmented spot from a cluster of melanocytes (plural: nevi).", "mole", "tx", "dz", []],
["nodule", "NOD-yool", "Solid, raised lesion deeper and larger than a papule, 1–2 cm.", "solid raised lump", "le", "sx", []],
["onychectomy", "on-ih-KEK-toh-mee", "Surgical removal of a nail (-ectomy = excision).", "Removal of the nail", "ac", "tx", []],
["onychia", "oh-NIK-ee-ah", "Inflammation of the nail bed (onych/o = nail, -ia = condition).", "inflammation of the nail bed", "ac", "dz", []],
["onychocryptosis", "on-ih-koh-krip-TOH-sis", "Ingrown nail (onych/o = nail, crypt/o = hidden, -osis).", "ingrown nail", "ac", "dz", []],
["onycholysis", "on-ih-KOL-ih-sis", "Separation of the nail from the nail bed (-lysis = separation, loosening).", "nail separating from its bed", "ac", "sx", []],
["onychomalacia", "on-ih-koh-mah-LAY-shee-ah", "Abnormal softening of the nails (-malacia = softening).", "Softening of the nail", "ac", "sx", []],
["onychomycosis", "on-ih-koh-my-KOH-sis", "Fungal infection of the nails (onych/o = nail, myc/o = fungus, -osis); also called tinea unguium.", "nail fungus", "ac", "dz", []],
["onychopathy", "on-ih-KOP-ah-thee", "Any disease of the nails.", "nail disease", "ac", "dz", []],
["onychophagia", "on-ih-koh-FAY-jee-ah", "Nail biting (onych/o = nail, -phagia = eating, swallowing).", "nail biting", "ac", "sx", []],
["onychotomy", "on-ih-KOT-oh-mee", "Incision into a nail (-tomy = incision).", "cutting into a nail", "ac", "tx", []],
["Pacinian corpuscle", "pah-SIN-ee-an KOR-pus-l", "Pressure receptor deep in the dermis and subcutaneous tissue.", "deep-pressure receptor", "ly", "body", []],
["pallor", "PAL-or", "Unusual paleness of the skin.", "paleness", "le", "sx", []],
["papule", "PAP-yool", "Small, solid, raised lesion less than 1 cm (e.g. a pimple without pus, a wart).", "small raised bump", "le", "sx", []],
["paronychia", "par-oh-NIK-ee-ah", "Infection and inflammation of the skin fold around a nail (para- = beside).", "infection around the nail", "ac", "dz", []],
["patch", "pach", "Flat, discolored area larger than 1 cm (e.g. vitiligo).", "large flat spot", "le", "sx", []],
["patch test", "pach test", "Allergy test in which possible allergens are taped to the skin for 48 hours.", "taped allergy test", "tx", "lab", []],
["pathogen", "PATH-oh-jen", "Microorganism that causes disease; intact skin is the body's first barrier against pathogens (path/o = disease, -gen = producing).", "disease-causing agent", "lx", "cell", []],
["pediculicide", "peh-DIK-yoo-lih-side", "Drug that kills lice.", "drug that kills lice", "tx", "tx", []],
["pediculosis", "peh-dik-yoo-LOH-sis", "Infestation with lice (pedicul/o = louse); nits are lice eggs attached to hairs.", "lice infestation", "ds", "dz", []],
["pemphigus", "PEM-fih-gus", "Rare autoimmune disease with large blisters (bullae) on the skin and mucous membranes.", "autoimmune blistering disease", "ds", "dz", []],
["percutaneous", "per-kyoo-TAY-nee-us", "Performed through the skin (per- = through), such as a needle puncture.", "through the skin with a needle", "ly", "body", []],
["petechiae", "peh-TEE-kee-ee", "Tiny, pinpoint red or purple spots from bleeding under the skin (singular: petechia).", "pinpoint bleeding spots", "le", "sx", []],
["photosensitivity", "foh-toh-sen-sih-TIV-ih-tee", "Abnormal sensitivity of the skin to sunlight (phot/o = light), causing rash or burning.", "sensitivity to light", "lx", "sx", ["UV"]],
["phototherapy", "foh-toh-THER-ah-pee", "Treatment with ultraviolet light, often for psoriasis (phot/o = light).", "treatment with light", "tx", "tx", ["PUVA", "UV"]],
["pilonidal cyst", "pye-loh-NYE-dal sist", "Cyst containing hair, usually over the tailbone (pil/o = hair, nid/o = nest, -al = pertaining to).", "hair-containing cyst at the tailbone", "ac", "dz", []],
["plaque", "plak", "Raised, flat-topped lesion larger than 1 cm, often formed by papules merging (e.g. psoriasis).", "broad raised patch", "le", "sx", []],
["polyp", "POL-ip", "Mass of tissue that projects outward from a surface on a stalk.", "growth on a stalk", "le", "sx", []],
["pore", "por", "Tiny opening of a sweat gland on the skin surface.", "tiny opening of a sweat gland", "ac", "body", []],
["primary lesion", "PRY-mar-ee LEE-zhun", "The first lesion that appears on healthy skin from a disease (macule, papule, vesicle…).", "first lesion of a disease", "le", "sx", []],
["pruritic", "proo-RIT-ik", "Itchy; pertaining to itching.", "itchy", "le", "sx", []],
["pruritus", "proo-RYE-tus", "Severe itching.", "itching", "le", "sx", []],
["psoriasis", "soh-RYE-ah-sis", "Chronic skin disease with red plaques covered by silvery scales, often on elbows, knees and scalp.", "silvery scaly patches", "ds", "dz", []],
["punch biopsy", "punch BYE-op-see", "Removal of a small cylinder of skin with a round punch instrument.", "round core skin sample", "tx", "lab", ["Bx"]],
["purpura", "PER-pyoo-rah", "Purple patches from bleeding under the skin, larger than petechiae.", "purple bleeding patches", "le", "sx", []],
["purulent", "PYOO-roo-lent", "Containing or producing pus.", "containing pus", "le", "sx", []],
["pustule", "PUS-tyool", "Small raised lesion filled with pus (e.g. acne, impetigo).", "pus-filled pimple", "le", "sx", []],
["pyoderma", "pye-oh-DER-mah", "Any skin condition with pus (py/o = pus, -derma = skin).", "pus-forming skin infection", "lx", "dz", []],
["rash", "rash", "Temporary eruption of red spots or patches on the skin; also called exanthem.", "skin eruption", "le", "sx", []],
["retinoid", "RET-ih-noyd", "Vitamin A–like drug (e.g. isotretinoin) used for severe acne and wrinkles.", "vitamin A-derived drug", "tx", "tx", []],
["rhytid", "RIT-id", "A wrinkle in the skin (rhytid/o = wrinkle); increases as collagen and elastin decrease with age.", "wrinkle", "ly", "sx", []],
["rhytidectomy", "rit-ih-DEK-toh-mee", "Face-lift; surgical removal of excess skin to remove wrinkles (rhytid/o = wrinkle).", "facelift", "tx", "tx", []],
["rosacea", "roh-ZAY-shee-ah", "Chronic redness of the cheeks and nose with small visible blood vessels and pimples (acne rosacea).", "facial redness with pimples", "ds", "dz", []],
["rubella", "roo-BEL-ah", "German measles; viral infection with a pink rash, dangerous to the fetus in pregnancy.", "German measles", "ds", "dz", []],
["rubeola", "roo-bee-OH-lah", "Measles; contagious viral disease with fever and a red, blotchy rash.", "measles", "ds", "dz", []],
["rule of nines", "rool uv nynz", "Method of estimating the percentage of body surface burned by dividing the adult body into areas of 9% (or multiples of 9).", "burn-area estimate in 9% blocks", "ds", "lab", ["BSA"]],
["scabicide", "SKAY-bih-side", "Drug that kills scabies mites (-cide = killing).", "drug that kills scabies mites", "tx", "tx", []],
["scabies", "SKAY-beez", "Contagious skin infestation by the itch mite, which burrows under the skin and causes intense itching.", "itchy mite infestation", "ds", "dz", []],
["scale", "skayl", "Thin flake of dead epidermis that peels from the skin (e.g. psoriasis, dandruff).", "flake of dead skin", "le", "sx", []],
["scleroderma", "sklair-oh-DER-mah", "Autoimmune disease with hardening and thickening of the skin (scler/o = hard) and sometimes internal organs.", "hardening of the skin", "ds", "dz", []],
["scratch test", "skrach test", "Allergy test in which allergens are placed on scratches or pricks of the skin (prick test).", "skin prick allergy test", "tx", "lab", []],
["sebaceous cyst", "seh-BAY-shus sist", "Closed sac under the skin filled with sebum and keratin.", "oil-filled cyst", "ac", "dz", []],
["sebaceous gland", "seh-BAY-shus gland", "Oil gland of the dermis that secretes sebum into a hair follicle (seb/o = sebum, oil).", "oil gland", "ac", "body", []],
["seborrhea", "seb-oh-REE-ah", "Excessive discharge of sebum (seb/o = sebum, -rrhea = flow, discharge).", "excess oil secretion", "ac", "sx", []],
["seborrheic dermatitis", "seb-oh-REE-ik der-mah-TYE-tis", "Inflammation with greasy yellow scales on the scalp, face and chest; dandruff is a mild form.", "flaky red rash of oily areas", "ds", "dz", []],
["seborrheic keratosis", "seb-oh-REE-ik ker-ah-TOH-sis", "Benign, waxy, brown 'stuck-on' growth common in older adults.", "benign warty brown growth", "tx", "dz", []],
["sebum", "SEE-bum", "Oily secretion of sebaceous glands that keeps skin and hair soft and waterproof.", "skin oil", "ac", "cell", []],
["second-degree burn", "SEK-ond dih-GREE bern", "Partial-thickness burn of the epidermis and part of the dermis, with blisters and severe pain.", "partial-thickness burn", "ds", "dz", []],
["secondary lesion", "SEK-on-dar-ee LEE-zhun", "Lesion that develops from a primary lesion through scratching, healing or infection (crust, scale, scar…).", "change that follows a primary lesion", "le", "sx", []],
["shave biopsy", "shayv BYE-op-see", "Removal of a raised lesion by slicing it off with a blade at the skin surface.", "sample shaved off the surface", "tx", "lab", ["Bx"]],
["skin graft", "skin graft", "Transplant of skin to cover a wound, burn or area where skin was removed.", "transplanted skin", "tx", "tx", ["SG", "STSG", "FTSG"]],
["skin tag", "skin tag", "Small, soft, benign flap of skin on a stalk, common on the neck and armpits.", "small flap of skin", "tx", "dz", []],
["skin test", "skin test", "Test in which a substance is applied to or injected into the skin to see if a reaction occurs (allergy or tuberculosis).", "skin reaction test", "tx", "lab", []],
["skin turgor", "skin TER-gor", "Fullness and elasticity of the skin; poor turgor (skin stays tented when pinched) suggests dehydration.", "skin elasticity", "ly", "sx", []],
["split-thickness skin graft", "split THIK-nes skin graft", "Graft of the epidermis and part of the dermis.", "graft of partial skin thickness", "tx", "tx", ["STSG"]],
["squamous", "SKWAY-mus", "Flat and scale-like (squam/o = scale); describes the flat cells of the epidermis.", "scale-like", "ly", "body", []],
["squamous cell carcinoma", "SKWAY-mus sel kar-sih-NOH-mah", "Skin cancer of the flat keratinocytes; a firm, scaly or ulcerated nodule on sun-exposed skin that can spread.", "cancer of flat surface cells", "tx", "dz", ["SCC", "UV"]],
["stasis ulcer", "STAY-sis UL-ser", "Ulcer of the lower leg caused by poor venous circulation and blood stasis.", "leg ulcer from poor vein flow", "ds", "dz", []],
["steatoma", "stee-ah-TOH-mah", "Fatty tumor or sebaceous cyst (steat/o = fat).", "fatty tumour", "tx", "dz", []],
["stratum basale", "STRAT-um bay-SAY-lee", "Deepest, growing layer of the epidermis (also called stratum germinativum or basal layer); new cells and melanocytes are found here.", "deepest, cell-making layer", "ly", "body", []],
["stratum corneum", "STRAT-um KOR-nee-um", "The outermost, horny layer of the epidermis; made of dead, flat cells filled with keratin that are constantly shed.", "horny outer layer", "ly", "body", []],
["stratum granulosum", "STRAT-um gran-yoo-LOH-sum", "Granular layer of the epidermis where cells begin to die and fill with keratin.", "grainy layer", "ly", "body", []],
["stratum lucidum", "STRAT-um LOO-sih-dum", "Thin, clear layer of the epidermis found only in thick skin of the palms and soles.", "clear layer", "ly", "body", []],
["stratum spinosum", "STRAT-um spy-NOH-sum", "Spiny (prickle-cell) layer of the epidermis above the basal layer.", "spiny layer", "ly", "body", []],
["subcutaneous", "sub-kyoo-TAY-nee-us", "Pertaining to beneath the skin (sub- = under, cutane/o = skin, -ous = pertaining to).", "beneath the skin", "ly", "body", ["SubQ"]],
["subcutaneous tissue", "sub-kyoo-TAY-nee-us TISH-yoo", "Layer of fat and loose connective tissue under the dermis (also called hypodermis or superficial fascia); insulates and cushions the body.", "fatty tissue under the skin", "ly", "body", ["SubQ"]],
["sudoriferous gland", "soo-dor-IF-er-us gland", "Sweat gland (sudor/o = sweat, fer = to carry); found in the dermis all over the body.", "gland that makes sweat", "ac", "body", []],
["sunscreen", "SUN-skreen", "Cream or lotion that blocks ultraviolet light; its strength is shown by the sun protection factor (SPF).", "sun protection cream", "tx", "tx", ["SPF"]],
["suture", "SOO-cher", "Stitch used to close a wound, or the act of stitching.", "stitch", "tx", "tx", []],
["systemic", "sis-TEM-ik", "Pertaining to the whole body rather than one local area.", "affecting the whole body", "lx", "sx", []],
["systemic lupus erythematosus", "sis-TEM-ik LOO-pus er-ih-them-ah-TOH-sus", "Chronic autoimmune disease affecting skin, joints, kidneys and other organs; a butterfly rash across cheeks and nose is typical.", "whole-body lupus", "ds", "dz", ["SLE"]],
["thermoregulation", "ther-moh-reg-yoo-LAY-shun", "Control of body temperature; the skin helps by sweating and by widening or narrowing its blood vessels.", "control of body temperature", "lx", "body", []],
["third-degree burn", "therd dih-GREE bern", "Full-thickness burn destroying epidermis and dermis, sometimes deeper; skin is white or charred and may be painless.", "full-thickness burn", "ds", "dz", ["FTSG"]],
["tinea", "TIN-ee-ah", "Fungal infection of the skin, hair or nails; commonly called ringworm.", "ringworm", "ds", "dz", ["KOH"]],
["tinea capitis", "TIN-ee-ah KAP-ih-tis", "Ringworm of the scalp.", "ringworm of the scalp", "ds", "dz", []],
["tinea corporis", "TIN-ee-ah KOR-poh-ris", "Ringworm of the body, with round red rings that clear in the center.", "ringworm of the body", "ds", "dz", []],
["tinea cruris", "TIN-ee-ah KROO-ris", "Fungal infection of the groin (jock itch).", "jock itch", "ds", "dz", []],
["tinea pedis", "TIN-ee-ah PED-is", "Fungal infection of the foot (athlete's foot).", "athlete’s foot", "ds", "dz", []],
["tinea versicolor", "TIN-ee-ah VER-sih-kul-or", "Fungal infection causing patches of lighter or darker skin on the trunk.", "patchy discoloured fungal rash", "ds", "dz", []],
["topical", "TOP-ih-kal", "Applied directly to the skin surface, like a cream or ointment.", "applied to the skin", "tx", "tx", ["oint"]],
["transdermal", "trans-DER-mal", "Pertaining to through the skin (trans- = across); e.g. a transdermal patch delivers drug through unbroken skin.", "through the skin", "ly", "tx", []],
["trichomycosis", "trik-oh-my-KOH-sis", "Fungal infection of the hair (trich/o = hair, myc/o = fungus).", "fungal infection of the hair", "ac", "dz", []],
["trichopathy", "trih-KOP-ah-thee", "Any disease of the hair (trich/o = hair, -pathy = disease).", "hair disease", "ac", "dz", []],
["tumor", "TOO-mor", "Solid raised mass larger than 2 cm; may be benign or malignant.", "large lump", "le", "sx", []],
["ulcer", "UL-ser", "Open sore or erosion of the skin that extends into the dermis or deeper (e.g. decubitus ulcer).", "open sore", "le", "sx", []],
["ultraviolet light", "ul-trah-VYE-oh-let lyte", "Invisible rays of the sun that tan and burn the skin and are the main cause of skin cancer.", "invisible sun rays", "tx", "cell", ["UV"]],
["urticaria", "er-tih-KAIR-ee-ah", "Hives; itchy wheals usually from an allergic reaction.", "hives", "le", "dz", []],
["varicella", "var-ih-SEL-ah", "Chickenpox; contagious viral disease with itchy vesicles that crust over.", "chickenpox", "ds", "dz", ["VZV"]],
["vascular", "VAS-kyoo-lar", "Pertaining to or rich in blood vessels; the dermis is vascular.", "rich in blood vessels", "ly", "body", []],
["verruca", "veh-ROO-kah", "Wart; benign growth of the epidermis caused by human papillomavirus (HPV).", "wart", "ds", "dz", ["HPV"]],
["vesicle", "VES-ih-kl", "Small blister filled with clear fluid, less than 1 cm (vesic/o = sac, bladder).", "small blister", "le", "sx", []],
["vitamin D", "VYE-tah-min DEE", "Vitamin made in the skin when exposed to ultraviolet light; needed to absorb calcium.", "sun-made vitamin for calcium absorption", "lx", "cell", ["UV"]],
["vitiligo", "vit-ih-LYE-goh", "Loss of melanocytes causing white patches of skin (depigmentation).", "patchy loss of pigment", "ds", "dz", []],
["wheal", "wheel", "Smooth, slightly raised, itchy swelling that is redder or paler than surrounding skin and goes away quickly (e.g. hives, insect bite).", "smooth itchy swelling", "le", "sx", []],
["Wood lamp", "wood lamp", "Ultraviolet lamp used to look for fungal infections and pigment changes, which glow under it.", "UV lamp used to examine skin", "tx", "lab", ["UV"]],
["xanthoderma", "zan-thoh-DER-mah", "Yellow discoloration of the skin (xanth/o = yellow, -derma = skin).", "yellow skin", "lx", "sx", []],
["xanthoma", "zan-THOH-mah", "Yellow nodule or plaque of fat deposits in the skin (xanth/o = yellow).", "yellow fatty deposit", "tx", "dz", []],
["xenograft", "ZEN-oh-graft", "Skin graft from an animal, such as a pig (xen/o = foreign); also called heterograft.", "graft from an animal", "tx", "tx", []],
["xeroderma", "zee-roh-DER-mah", "Abnormally dry, rough skin (xer/o = dry, -derma = skin).", "dry skin", "lx", "sx", []]];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* درما — واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها، تجزیه‌گر واژه و مولد سؤال‌ها
 * واژه‌ها از data-terms.js (ساخته‌شده از data/terms.py) می‌آیند؛
 * ریشه‌ها و اختصارها از total.txt و پنج فصل PDF پیوست گردآوری و دستی پالایش شده‌اند تا تکراری و ناهمسان نباشند.
 * دنیاها: lx زبان پوست (همه واژه‌ها) • ly لایه‌های پوست • ac ضمائم پوست • le ضایعه‌ها و نشانه‌ها • ds بیماری‌ها • tx تومور، تشخیص و درمان */
(function (root) {
  const EA = root.EA = root.EA || {};

  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const ROOTS_RAW = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', "without, lacking", '*'],
    ['allo-', ['allo'], 'other, different', "other", 'tx'],
    ['anti-', ['anti'], 'against', "against", 'tx'],
    ['auto-', ['auto'], 'self', "self", 'tx'],
    ['de-', ['de'], 'removal, lack of', "removal, loss", 'le'],
    ['dia-', ['dia'], 'through, across', "through", 'ac'],
    ['dys-', ['dys'], 'bad, abnormal', "bad, abnormal", 'tx'],
    ['ec-, ex-', ['ex', 'ec'], 'out, outside', "outside", 'tx'],
    ['epi-', ['epi'], 'upon, above', "upon, above", 'lx'],
    ['hetero-', ['hetero'], 'different', "different", 'tx'],
    ['homo-', ['homo'], 'same', "same", 'tx'],
    ['hyper-', ['hyper'], 'excessive, above normal', "excessive", '*'],
    ['hypo-', ['hypo'], 'under, below, deficient', "below, less than normal", '*'],
    ['intra-', ['intra'], 'within', "within", 'ly'],
    ['para-', ['para', 'par'], 'beside, around', "beside, around", 'ac'],
    ['per-', ['per'], 'through', "through", 'ly'],
    ['sub-', ['sub'], 'under, below', "below", 'ly'],
    ['trans-', ['trans'], 'through, across', "through, across", 'ly'],
    ['ultra-', ['ultra'], 'beyond, excess', "beyond, excess", 'tx'],
    // ریشه‌ها: پوست و لایه‌ها
    ['derm/o, dermat/o', ['dermat', 'derm'], 'skin', "skin", 'lx'],
    ['cutane/o', ['cutane'], 'skin', "skin", 'lx'],
    ['kerat/o', ['keratin', 'kerat'], 'horny tissue, hard; keratin', "horny, hard (keratin)", 'ly'],
    ['squam/o', ['squam'], 'scale', "scale", 'ly'],
    ['adip/o', ['adip'], 'fat', "fat", 'ly'],
    ['lip/o', ['lip'], 'fat', "fat", 'ly'],
    ['steat/o', ['steat'], 'fat', "fat", 'tx'],
    ['fibr/o', ['fibr'], 'fiber', "fibre", 'ly'],
    ['papill/o', ['papill'], 'nipple-like projection', "nipple-like bump", 'ly'],
    ['vascul/o, angi/o', ['vascul', 'angi'], 'vessel', "vessel", 'ly'],
    ['cyt/o', ['cyt'], 'cell', "cell", '*'],
    ['therm/o', ['therm'], 'heat', "heat", 'lx'],
    ['phot/o', ['phot'], 'light', "light", 'lx'],
    ['path/o', ['path'], 'disease', "disease", '*'],
    // ریشه‌ها: رنگ‌ها
    ['erythr/o, erythem/o', ['erythemat', 'erythem', 'erythr'], 'red', "red", 'lx'],
    ['melan/o', ['melan'], 'black, dark', "black, dark", 'ly'],
    ['leuk/o', ['leuk'], 'white', "white", 'lx'],
    ['albin/o', ['albin'], 'white (no pigment)', "white (without pigment)", 'ds'],
    ['cyan/o', ['cyan'], 'blue', "blue", 'lx'],
    ['xanth/o', ['xanth'], 'yellow', "yellow", 'lx'],
    ['jaund/o', ['jaund'], 'yellow', "yellow", 'le'],
    ['chrom/o', ['chrom'], 'color', "colour", 'lx'],
    // ریشه‌ها: ویژگی‌ها
    ['xer/o', ['xer'], 'dry', "dry", 'lx'],
    ['ichthy/o', ['ichthy'], 'dry, scaly (fish-like)', "dry and scaly (fish-like)", 'ds'],
    ['scler/o', ['scler'], 'hard, hardening', "hard", 'ds'],
    ['rhytid/o', ['rhytid'], 'wrinkle', "wrinkle", 'tx'],
    // ریشه‌ها: ضمائم
    ['trich/o', ['trich'], 'hair', "hair", 'ac'],
    ['pil/o', ['pil'], 'hair', "hair", 'ac'],
    ['follicul/o', ['follicul'], 'follicle (small sac)', "follicle (small sac)", 'ac'],
    ['onych/o', ['onych'], 'nail', "nail", 'ac'],
    ['ungu/o', ['ungu'], 'nail', "nail", 'ac'],
    ['seb/o', ['seb'], 'sebum, oil', "skin oil (sebum)", 'ac'],
    ['hidr/o', ['hidr'], 'sweat', "sweat", 'ac'],
    ['sudor/o', ['sudor'], 'sweat', "sweat", 'ac'],
    ['aden/o', ['aden'], 'gland', "gland", 'ac'],
    ['crypt/o', ['crypt'], 'hidden', "hidden", 'ac'],
    ['nid/o', ['nid'], 'nest', "nest", 'ac'],
    ['brom/o', ['brom'], 'stench, foul odor', "stench", 'ac'],
    // ریشه‌ها: ضایعه، عفونت و مرگ بافت
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', "blood", 'le'],
    ['vesic/o', ['vesic'], 'sac, blister', "sac, blister", 'le'],
    ['py/o', ['py'], 'pus', "pus", 'le'],
    ['prurit/o', ['prurit'], 'itching', "itching", 'le'],
    ['myc/o', ['myc'], 'fungus', "fungus (yeast or mould)", 'ds'],
    ['pedicul/o', ['pedicul'], 'louse (lice)', "louse", 'ds'],
    ['staphyl/o', ['staphyl'], 'clusters (like grapes)', "in clusters", 'ds'],
    ['strept/o', ['strept'], 'twisted chains', "in chains", 'ds'],
    ['necr/o', ['necr'], 'death', "death", 'ds'],
    // ریشه‌ها: تومور، تشخیص و درمان
    ['carcin/o', ['carcin'], 'cancer', "cancer", 'tx'],
    ['sarc/o', ['sarc'], 'flesh (connective tissue)', "flesh (connective tissue)", 'tx'],
    ['histi/o', ['histi'], 'tissue', "tissue", 'tx'],
    ['actin/o', ['actin'], 'ray, radiation', "radiation", 'tx'],
    ['bi/o', ['bi'], 'life', "life, living", 'tx'],
    ['cry/o', ['cry'], 'cold', "cold", 'tx'],
    ['electr/o', ['electr'], 'electricity', "electricity", 'tx'],
    ['cauter/o', ['cauter'], 'to burn, heat', "to burn", 'tx'],
    ['cis/o', ['cis'], 'to cut', "to cut", 'tx'],
    ['blephar/o', ['blephar'], 'eyelid', "eyelid", 'tx'],
    ['xen/o', ['xen'], 'foreign, strange', "foreign", 'tx'],
    ['system/o', ['system'], 'system, whole body', "system, whole body", 'lx'],
    ['theli/o', ['theli'], 'nipple (covering tissue)', "nipple (epithelial tissue)", 'ly'],
    ['coll/a', ['colla'], 'glue', "glue", 'ly'],
    ['elast/o', ['elast'], 'elastic, stretchy', "elastic", 'ly'],
    ['pigment/o', ['pigment'], 'pigment, color', "pigment", 'le'],
    ['kel/o', ['kel'], 'growth, tumor', "growth, swelling", 'le'],
    ['cyst/o', ['cyst'], 'sac, bladder', "sac", 'le'],
    ['pur/o', ['pur'], 'pus', "pus", 'le'],
    ['hirsut/o', ['hirsut'], 'hairy', "hairy", 'ac'],
    ['psor/o', ['psor'], 'itch', "itching", 'ds'],
    ['candid/o', ['candid'], 'Candida (yeast)', "candida (yeast)", 'ds'],
    ['cellul/o', ['cellul'], 'little cell (cell tissue)', "cell tissue", 'ds'],
    ['sept/o', ['sept'], 'infection', "infection", 'tx'],
    ['fung/i', ['fung'], 'fungus', "fungus (yeast or mould)", 'tx'],
    ['vir/o', ['vir'], 'virus', "virus", 'tx'],
    ['abras/o', ['abras'], 'to scrape off', "to scrape, rub", 'le'],
    // پسوندها
    ['-al, -ic, -ous, -ar, -ary', ['ary', 'eal', 'ial', 'ous', 'ic', 'al', 'ar'], 'pertaining to', "pertaining to", '*'],
    ['-ation, -ion', ['ation', 'ion'], 'process', "process", '*'],
    ['-cle, -le', ['cle', 'le'], 'small', "small", 'le'],
    ['-in, -ine', ['ine', 'in'], 'substance', "substance", '*'],
    ['-is, -um, -us, -a', ['is', 'um', 'us', 'a'], 'noun ending', "noun ending", '*'],
    ['-ulent', ['ulent'], 'full of', "full of", 'le'],
    ['-cele', ['cele'], 'hernia, swelling', "hernia, swelling", 'ly'],
    ['-cide', ['cide'], 'killing', "killing", 'tx'],
    ['-coccus', ['coccus', 'cocci'], 'berry-shaped bacterium', "round bacterium", 'ds'],
    ['-cyte', ['cyte'], 'cell', "cell", '*'],
    ['-derma', ['derma'], 'skin', "skin", 'lx'],
    ['-ectomy', ['ectomy'], 'excision, surgical removal', "surgical removal", '*'],
    ['-esis', ['esis'], 'condition', "condition", 'ac'],
    ['-gen', ['gen'], 'producing', "producing", 'lx'],
    ['-graft', ['graft'], 'transplantation', "transplant", 'tx'],
    ['-ia, -y', ['ia', 'y'], 'condition', "condition", '*'],
    ['-iasis', ['iasis'], 'abnormal condition', "disease, condition", 'ds'],
    ['-ism', ['ism'], 'condition, state of', "condition, state", '*'],
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-logist', ['logist'], 'specialist', "specialist", 'lx'],
    ['-logy', ['logy'], 'study of', "study of", 'lx'],
    ['-lysis, -lytic', ['lysis', 'lytic'], 'breakdown, separation', "breakdown, separation", 'tx'],
    ['-malacia', ['malacia'], 'softening', "softening", 'ac'],
    ['-oid', ['oid'], 'resembling', "resembling", '*'],
    ['-oma', ['oma'], 'tumor, mass', "tumour, mass", '*'],
    ['-opsy', ['opsy'], 'view of', "viewing", 'tx'],
    ['-ose', ['ose'], 'full of, pertaining to', "full of", 'ly'],
    ['-osis', ['osis', 'sis'], 'abnormal condition', "abnormal condition", '*'],
    ['-pathy', ['pathy'], 'disease', "disease", '*'],
    ['-phagia', ['phagia'], 'eating, swallowing', "eating", 'ac'],
    ['-phoresis', ['phoresis'], 'carrying, transmission', "carrying, transmission", 'ac'],
    ['-plasia, -plastic', ['plastic', 'plasia'], 'formation, growth', "growth, formation", 'tx'],
    ['-plasty', ['plasty'], 'surgical repair', "surgical repair", 'tx'],
    ['-rrhea', ['rrhea'], 'flow, discharge', "flow, discharge", 'ac'],
    ['-therapy', ['therapy'], 'treatment', "treatment", 'tx'],
    ['-tome', ['tome'], 'instrument to cut', "cutting instrument", 'tx'],
    ['-tomy', ['tomy'], 'incision, cutting into', "incision", 'tx'],
    ['-trophy', ['trophy'], 'development, nourishment', "growth, nourishment", 'le'],
    ['-ule', ['ule'], 'small', "small", 'le']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    ['AD', 'atopic dermatitis', "allergic itchy eczema", 'ds'],
    ['AK', 'actinic keratosis', "precancerous sun-damage patch", 'tx'],
    ['BCC', 'basal cell carcinoma', "cancer of the skin’s base layer", 'tx'],
    ['bid', 'twice a day (bis in die)', "twice a day", 'tx'],
    ['BSA', 'body surface area', "body surface area (burn percentage)", 'ds'],
    ['Bx, bx', 'biopsy', "tissue sampling (biopsy)", 'tx'],
    ['C&S', 'culture and sensitivity', "culture and sensitivity", 'tx'],
    ['decub', 'decubitus ulcer', "pressure sore", 'ds'],
    ['Derm, derm', 'dermatology', "study of the skin", 'lx'],
    ['DLE', 'discoid lupus erythematosus', "skin-only form of lupus", 'ds'],
    ['Dx', 'diagnosis', "diagnosis", 'lx'],
    ['FH', 'family history', "family history", 'lx'],
    ['FS', 'frozen section', "quickly frozen tissue slice", 'tx'],
    ['FTSG', 'full-thickness skin graft', "graft of full-thickness skin", 'tx'],
    ['HPV', 'human papillomavirus', "human papillomavirus (wart virus)", 'ds'],
    ['hs', 'at bedtime (hora somni)', "at bedtime", 'tx'],
    ['HSV', 'herpes simplex virus', "herpes simplex virus (cold sores)", 'ds'],
    ['Hx', 'history', "history", 'lx'],
    ['I&D', 'incision and drainage', "incision and drainage", 'tx'],
    ['ID', 'intradermal', "into the skin", 'ly'],
    ['IM', 'intramuscular', "intramuscularly", 'ly'],
    ['IV', 'intravenous', "intravenously", 'ly'],
    ['KOH', 'potassium hydroxide (fungal test)', "potassium hydroxide (fungus test)", 'tx'],
    ['MM', 'malignant melanoma', "malignant tumour of pigment cells", 'tx'],
    ['MRSA', 'methicillin-resistant Staphylococcus aureus', "methicillin-resistant Staphylococcus aureus", 'ds'],
    ['oint', 'ointment', "ointment", 'tx'],
    ['PE', 'physical examination', "physical examination", 'lx'],
    ['PPD', 'purified protein derivative (tuberculin)', "purified protein derivative (TB test)", 'tx'],
    ['prn', 'as needed (pro re nata)', "as needed", 'tx'],
    ['PUVA', 'psoralen plus ultraviolet A', "psoralen plus UVA light (light therapy)", 'tx'],
    ['qid', 'four times a day', "four times a day", 'tx'],
    ['Rx', 'prescription, treatment', "prescription, treatment", 'lx'],
    ['SCC', 'squamous cell carcinoma', "cancer of flat surface cells", 'tx'],
    ['SG', 'skin graft', "transplanted skin", 'tx'],
    ['SLE', 'systemic lupus erythematosus', "whole-body lupus", 'ds'],
    ['SPF', 'sun protection factor', "sun protection factor", 'tx'],
    ['staph', 'staphylococcus', "staphylococcus (cluster bacterium)", 'ds'],
    ['strep', 'streptococcus', "streptococcus (chain bacterium)", 'ds'],
    ['STSG', 'split-thickness skin graft', "graft of partial skin thickness", 'tx'],
    ['SubQ, subcut', 'subcutaneous', "subcutaneously", 'ly'],
    ['TB', 'tuberculosis', "tuberculosis", 'tx'],
    ['tid', 'three times a day', "three times a day", 'tx'],
    ['UV', 'ultraviolet', "ultraviolet", 'tx'],
    ['UVA, UVB', 'ultraviolet A, ultraviolet B', "ultraviolet A and B", 'tx'],
    ['VZV', 'varicella-zoster virus', "varicella-zoster virus", 'ds'],
    ['y/o', 'years old', "years old", 'lx']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {
    Anatomy_and_Physiology: "Anatomy and physiology", Pathology_and_Disorders: "Diseases and disorders",
    Laboratory_and_Diagnostics: "Laboratory and diagnosis", Pharmacology_and_Treatment: "Treatment, drugs and surgery"
  };
  /* دسته ریز هر واژه در داده آمده (k)؛ دسته اصلی (c) از روی آن ساخته می‌شود */
  const CATS = [
    { id: 'body', icon: '🖐️', name: "Skin structures and appendages" },
    { id: 'cell', icon: '🧬', name: "Cells and substances" },
    { id: 'field', icon: '🎓', name: "Specialties and specialists" },
    { id: 'dz', icon: '🦠', name: "Diseases" },
    { id: 'sx', icon: '🔍', name: "Lesions and signs" },
    { id: 'lab', icon: '🧪', name: "Diagnosis and tests" },
    { id: 'tx', icon: '💊', name: "Treatment, drugs and surgery" }
  ];
  const MAIN = { body: 'Anatomy_and_Physiology', cell: 'Anatomy_and_Physiology', field: 'Anatomy_and_Physiology', dz: 'Pathology_and_Disorders', sx: 'Pathology_and_Disorders', lab: 'Laboratory_and_Diagnostics', tx: 'Pharmacology_and_Treatment' };
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
  const WORLDS = ['lx', 'ly', 'ac', 'le', 'ds', 'tx'];
  /* دنیای lx (زبان پوست) از همه واژه‌ها، ریشه‌ها و اختصارها سؤال می‌سازد */
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
/* درما — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با الگوی هورمونا: زمینه سفید کارت، بافت‌ها با گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی زیر آن)،
 * پیکان‌ها و خط‌های راهنمای خاکستری گرد، و پالت گرم پوستی. بدن‌ها به سبک «مانکن آناتومی» (سطح صاف و بی‌جزئیات) کشیده شده‌اند.
 * بیشتر شکل‌ها روی یک «برش پوست» ساخته می‌شوند: اپیدرم، درم و بافت زیرجلدی با مرز موجی پرزهای درم.
 * EA.art(کلید) ← رشته SVG؛ EA.ART_KEYS فهرست کلیدهاست (آزمون‌ها بررسی می‌کنند). */
(function (root) {
  const EA = root.EA = root.EA || {};
  let UID = 0;
  const FONT_EN = 'Nunito, Vazirmatn, system-ui, sans-serif', FONT_FA = 'Vazirmatn, Tahoma, sans-serif';
  const INK = '#2b2b2b', MUTED = '#6f7a80', LINE = '#5b6b73';
  /* پالت بافت‌ها */
  const C = {
    top: '#f6c7a5', epi1: '#f1b58f', epi2: '#dc8e68', epiLine: '#c47652',
    der1: '#fbd9d0', der2: '#f2b8ab', derLine: '#d98f80', fib: '#e9a596',
    fat1: '#fff1c4', fat2: '#fbd97a', fatLine: '#e2b445',
    art: '#d9443a', vein: '#4f7fd1', nerve: '#e5b31c', hair: '#4a2f1d', gland: '#f3cf63', glandLine: '#c99a1d',
    mel: '#6b3f22', pus: '#f2d24b', fluid: '#d8eefc', blood: '#9c2f3f'
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
  const marker = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0 1 L10 5 L0 9 z" fill="${c || LINE}"/></marker>`;
  const arrow = (id, x1, y1, x2, y2, c, w, dash) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c || LINE}" stroke-width="${w || 2}" fill="none" stroke-linecap="round" marker-end="url(#${id})"${dash ? ' stroke-dasharray="4 3"' : ''}/>`;
  const curve = (id, d, c, w, dash) => `<path d="${d}" stroke="${c || LINE}" stroke-width="${w || 2}" fill="none" stroke-linecap="round" marker-end="url(#${id})"${dash ? ' stroke-dasharray="4 3"' : ''}/>`;
  const radial = (id, c1, c2, fx) => `<radialGradient id="${id}" cx="50%" cy="50%" r="55%" fx="${fx || '38%'}" fy="${fx || '34%'}"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></radialGradient>`;
  const linear = (id, c1, c2, vertical) => `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>`;
  const shadow = id => `<filter id="${id}" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="2" stdDeviation="2.2" flood-color="#000" flood-opacity=".16"/></filter>`;
  /** خط راهنما با نقطه سر */
  const pin = (x1, y1, x2, y2, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c || '#5b6b73'}" stroke-width="1.1"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="#fff" stroke="${c || '#c8243f'}" stroke-width="1.4"/>`;
  /** دانه‌های پراکنده (با بذر ثابت تا هر بار یکسان رسم شود) */
  function rng(seed) { let s = seed || 7; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }
  /** مرز موجی پرزهای درم از x0 تا x1 در ارتفاع y */
  function wave(x0, x1, y, amp, n) {
    const step = (x1 - x0) / n; let d = `M${x0} ${y}`;
    for (let i = 0; i < n; i++) { const xa = x0 + step * i; d += ` Q${(xa + step / 4).toFixed(1)} ${y + amp} ${(xa + step / 2).toFixed(1)} ${y} T${(xa + step).toFixed(1)} ${y}`; }
    return d;
  }

  /* ---------- برش پوست ----------
   * section(x, y, w, o) ← { body, defs, yE, yD, yS }؛ y سطح پوست است.
   * o.e ضخامت اپیدرم، o.d درم، o.s زیرجلدی؛ o.vessels رگ‌ها؛ o.fat دانه‌های چربی؛ o.fib رشته‌های کلاژن. */
  function section(x, y, w, o) {
    const p = Object.assign({ e: 14, d: 58, s: 38, vessels: true, fat: true, fib: true, amp: 5, waves: 0 }, o || {});
    const ge = nid(), gd = nid(), gs = nid(), clip = nid();
    const yE = y + p.e, yD = yE + p.d, yS = yD + p.s;
    const n = p.waves || Math.max(3, Math.round(w / 26));
    const R = rng(Math.round(x * 3 + w));
    let fat = '';
    if (p.fat) {
      const cols = Math.max(3, Math.round(w / 22)), rows = Math.max(1, Math.round(p.s / 18));
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const cx = x + (c + 0.5 + (r % 2 ? 0.45 : 0)) * (w / cols), cy = yD + (r + 0.55) * (p.s / rows);
        fat += `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${(w / cols / 2 - 1.2).toFixed(1)}" ry="${(p.s / rows / 2 - 1.2).toFixed(1)}" fill="${C.fat2}" stroke="${C.fatLine}" stroke-width=".8" opacity=".85"/>`;
      }
    }
    let fib = '';
    if (p.fib) for (let i = 0; i < Math.round(w / 14); i++) {
      const fx = x + R() * w, fy = yE + 10 + R() * (p.d - 18);
      fib += `<path d="M${fx.toFixed(1)} ${fy.toFixed(1)} q6 -3 12 0 t12 0" stroke="${C.fib}" stroke-width="1.1" fill="none" opacity=".75"/>`;
    }
    const ves = p.vessels ? `<path d="M${x} ${yD - 6} C${x + w * 0.25} ${yD - 16} ${x + w * 0.5} ${yD + 2} ${x + w} ${yD - 10}" stroke="${C.art}" stroke-width="3" fill="none" opacity=".85"/>
      <path d="M${x} ${yD + 4} C${x + w * 0.3} ${yD - 4} ${x + w * 0.6} ${yD + 10} ${x + w} ${yD}" stroke="${C.vein}" stroke-width="3" fill="none" opacity=".85"/>` : '';
    const body = `<g clip-path="url(#${clip})">
      <rect x="${x}" y="${yD}" width="${w}" height="${p.s}" fill="url(#${gs})"/>${fat}
      <rect x="${x}" y="${yE - 2}" width="${w}" height="${p.d + 2}" fill="url(#${gd})"/>${fib}${ves}
      <path d="${wave(x, x + w, yE, p.amp, n)} V${y} H${x} Z" fill="url(#${ge})"/>
      <path d="${wave(x, x + w, yE, p.amp, n)}" stroke="${C.epiLine}" stroke-width="1" fill="none" opacity=".7"/>
      <rect x="${x}" y="${y}" width="${w}" height="2.2" fill="${C.epi2}" opacity=".55"/>
    </g><rect x="${x}" y="${y}" width="${w}" height="${yS - y}" fill="none" stroke="#c9a597" stroke-width="1"/>`;
    const defs = `${linear(ge, C.epi1, C.epi2, true)}${linear(gd, C.der1, C.der2, true)}${linear(gs, C.fat1, '#f8d88a', true)}<clipPath id="${clip}"><rect x="${x}" y="${y - 60}" width="${w}" height="${yS - y + 60}"/></clipPath>`;
    return { body, defs, yE, yD, yS, x, w, y };
  }
  /** کروشه عمودی کنار لایه‌ها با برچسب */
  const bracket = (x, y1, y2, en, fa, side, c) => {
    const s = side === 'left' ? -1 : 1, col = c || LINE;
    const lx = x + s * 8;
    return `<path d="M${x} ${y1 + 1} h${s * 5} V${y2 - 1} h${-s * 5}" stroke="${col}" stroke-width="1.4" fill="none"/>` +
      lab(lx + s * 3, (y1 + y2) / 2 - 2, en, fa, { size: 10, anchor: side === 'left' ? 'end' : 'start', fill: col === LINE ? INK : col });
  };
  /** مو و فولیکول در برش */
  function hairUnit(x, yTop, yBulb, o) {
    const p = o || {};
    const lean = p.lean == null ? -8 : p.lean;
    const fol = `<path d="M${x - 7} ${yTop + 6} C${x - 9} ${yBulb - 30} ${x - 10} ${yBulb - 6} ${x - 9} ${yBulb} Q${x} ${yBulb + 10} ${x + 9} ${yBulb} C${x + 10} ${yBulb - 6} ${x + 9} ${yBulb - 30} ${x + 7} ${yTop + 6}" fill="#f5d2b8" stroke="#c98d6f" stroke-width="1.2"/>`;
    const papilla = `<ellipse cx="${x}" cy="${yBulb + 1}" rx="4.5" ry="3.5" fill="#e0675a"/>`;
    const shaft = `<path d="M${x} ${yBulb - 2} L${x} ${yTop} Q${x + lean * 0.4} ${yTop - 30} ${x + lean} ${yTop - (p.len || 52)}" stroke="${C.hair}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
    return fol + papilla + shaft;
  }
  /** غده چربی کنار فولیکول */
  const sebGland = (x, y) => `<g stroke="${C.glandLine}" stroke-width="1" fill="${C.gland}"><ellipse cx="${x}" cy="${y}" rx="7" ry="6"/><ellipse cx="${x + 9}" cy="${y + 4}" rx="6.5" ry="5.5"/><ellipse cx="${x + 3}" cy="${y + 9}" rx="6" ry="5"/></g>`;
  /** غده عرق پیچیده با مجرا تا منفذ */
  function sweatGland(x, yCoil, ySurf, c) {
    const col = c || '#7aa6d8';
    let coil = '';
    for (let i = 0; i < 4; i++) coil += `<ellipse cx="${x + (i % 2 ? 4 : -4)}" cy="${yCoil + i * 3.4 - 5}" rx="9" ry="3.6" fill="none" stroke="${col}" stroke-width="2.6"/>`;
    return `<path d="M${x} ${yCoil - 8} C${x + 6} ${yCoil - 30} ${x - 6} ${ySurf + 26} ${x + 2} ${ySurf}" stroke="${col}" stroke-width="2.4" fill="none"/>${coil}<ellipse cx="${x + 2}" cy="${ySurf + 0.5}" rx="2.6" ry="1.4" fill="#7a4632"/>`;
  }

  const A = {};

  /* ================= دنیای پایه: زبان پوست ================= */
  /* آناتومی یک واژه: sub + cutane + ous */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 129, fa, { size: 9.5, fill: c })}`;
    return svg(360, 192, `${f(180, 22, "One word = prefix + root + suffix", { size: 11, fill: INK, w: 700 })}
      ${part(10, 60, 'sub', '#1272a3', '#ddf1fb')}${part(76, 108, 'cutane', '#b24e26', '#fde6da')}${part(190, 56, 'ous', '#3f8a05', '#e7f9d8')}
      ${br(10, 70, 'prefix', "prefix: under", '#1272a3')}${br(76, 184, 'root', "root: skin", '#b24e26')}${br(190, 246, 'suffix', "suffix: pertaining to", '#3f8a05')}
      <rect x="258" y="40" width="94" height="40" rx="10" fill="#f8f6f5"/>${f(305, 58, "pertaining to", { size: 10.5, fill: '#3f8a05', w: 800 })}${f(305, 74, "under the skin", { size: 10.5, fill: INK, w: 800 })}
      <path d="M232 150 C170 176 100 176 46 150" stroke="#b24e26" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M50 146 l-6 4 l7 3" stroke="#b24e26" stroke-width="2" fill="none"/>
      ${f(140, 186, "Read the meaning from the end: suffix → prefix → root", { size: 10, fill: '#b24e26', w: 700 })}`, "The anatomy of a medical word");
  };

  /* نقشه کامل پوست: لایه‌ها و ضمائم */
  A['skin-block'] = () => {
    const s = section(92, 66, 170, { e: 16, d: 92, s: 54, amp: 6 });
    const sh = nid();
    const hx = 132, sx = 214;
    return svg(360, 300, `${f(180, 18, "Skin cross-section: three layers and appendages", { size: 11.5, fill: INK, w: 800 })}
      <g filter="url(#${sh})">${s.body}</g>
      ${hairUnit(hx, s.y, s.yE + 66, { len: 46 })}${sebGland(hx + 10, s.yE + 26)}
      <path d="M${hx + 8} ${s.yE + 50} L${hx + 36} ${s.yE + 4}" stroke="#c0392b" stroke-width="2.2" stroke-linecap="round"/>
      ${sweatGland(sx, s.yD - 14, s.y)}
      <path d="M${s.x} ${s.yE + 40} C${s.x + 50} ${s.yE + 30} ${s.x + 120} ${s.yE + 60} ${s.x + 170} ${s.yE + 48}" stroke="${C.nerve}" stroke-width="2" fill="none"/>
      ${bracket(86, s.y, s.yE, 'epidermis', "outer skin", 'left', '#b24e26')}
      ${bracket(86, s.yE, s.yD, 'dermis', "dermis", 'left', '#b03e5c')}
      ${bracket(86, s.yD, s.yS, 'subcutaneous', "subcutaneously", 'left', '#9a6a00')}
      ${pin(hx - 4, s.y - 30, 280, 36)}${lab(318, 34, 'hair shaft', "visible part of a hair", { size: 9.5 })}
      ${pin(sx + 2, s.y, 280, 74)}${lab(318, 72, 'pore', "sweat opening", { size: 9.5 })}
      ${pin(hx + 16, s.yE + 30, 280, 112)}${lab(318, 110, 'sebaceous gland', "oil gland", { size: 9.5 })}
      ${pin(hx + 24, s.yE + 26, 280, 150)}${lab(318, 148, 'arrector pili', "tiny muscle that makes hair stand up", { size: 9.5 })}
      ${pin(sx, s.yD - 12, 280, 188)}${lab(318, 186, 'sweat gland', "gland that makes sweat", { size: 9.5 })}
      ${pin(hx, s.yE + 60, 280, 226)}${lab(318, 224, 'hair follicle', "hair sac", { size: 9.5 })}
      ${pin(s.x + 150, s.yD + 30, 280, 262)}${lab(318, 260, 'adipose tissue', "fatty tissue", { size: 9.5 })}
      ${pin(s.x + 8, s.yD - 4, 56, 262)}${lab(46, 276, 'blood vessels', "blood vessels", { size: 9.5 })}`,
      "Cross-section of the skin with its layers and appendages", `${s.defs}${shadow(sh)}`);
  };

  /* پنج کار پوست */
  A['skin-functions'] = () => {
    const card = (x, y, ic, en, fa, sub, c) => `<rect x="${x}" y="${y}" width="108" height="76" rx="14" fill="${c}"/>${t(x + 54, y + 26, ic, { size: 20 })}${t(x + 54, y + 46, en, { size: 10.5, w: 900 })}${f(x + 54, y + 60, fa, { size: 9.5, fill: INK, w: 700 })}${sub ? f(x + 54, y + 72, sub, { size: 8.5 }) : ''}`;
    return svg(360, 200, `${f(180, 18, "The skin is the body’s largest organ and has five main jobs", { size: 11, fill: INK, w: 800 })}
      ${card(10, 30, '🛡️', 'protection', "protection", "barrier to microbes, water and UV", '#fde9df')}
      ${card(126, 30, '🌡️', 'temperature', "temperature control", "sweating and changing vessel width", '#fdecef')}
      ${card(242, 30, '✋', 'sensation', "sensation", "touch, pressure, pain, temperature", '#fff4d6')}
      ${card(68, 114, '☀️', 'vitamin D', "making vitamin D", "with ultraviolet light", '#eef7e6')}
      ${card(184, 114, '💧', 'excretion', "excretion and secretion", "sweat and skin oil", '#e6f2fc')}`, "Jobs of the skin");
  };

  /* رنگین‌کمان ریشه‌های رنگ */
  A['color-roots'] = () => {
    const row = (y, col, root, en, fa, ex) => `<circle cx="34" cy="${y}" r="13" fill="${col}" stroke="#00000022"/>${t(60, y + 4, root, { size: 13, w: 900, anchor: 'start', fill: INK })}${t(146, y + 4, en, { size: 10, anchor: 'start', fill: MUTED })}${f(250, y + 4, fa, { size: 10.5, fill: INK, w: 800, anchor: 'end' })}${t(350, y + 4, ex, { size: 10, anchor: 'end', fill: '#b24e26', w: 800 })}`;
    return svg(360, 236, `${f(180, 18, "Colour roots: describe the skin by its colour", { size: 11, fill: INK, w: 800 })}
      ${row(44, '#e04a3c', 'erythr/o', 'red', "red", 'erythema')}
      ${row(78, '#2b2b2b', 'melan/o', 'black', "black", 'melanoma')}
      ${row(112, '#fbfbfb', 'leuk/o', 'white', "white", 'leukoderma')}
      ${row(146, '#5b7fd6', 'cyan/o', 'blue', "blue", 'cyanosis')}
      ${row(180, '#f2c230', 'xanth/o', 'yellow', "yellow", 'xanthoma')}
      ${row(214, '#f4ece6', 'albin/o', 'white', "white (without pigment)", 'albinism')}`, "Colour roots");
  };

  /* دوقلوهای فریبنده: hidr/o و hydr/o */
  A.twins = () => {
    const box = (x, c, bg, w1, m1, ex, ic) => `<rect x="${x}" y="34" width="160" height="130" rx="14" fill="${bg}"/>${t(x + 80, 64, ic, { size: 24 })}${t(x + 80, 96, w1, { size: 20, fill: c, w: 900 })}${f(x + 80, 116, m1, { size: 11, fill: INK, w: 800 })}${t(x + 80, 142, ex, { size: 10.5, fill: c, w: 800 })}`;
    return svg(360, 186, `${f(180, 20, "One letter, two completely different meanings", { size: 11, fill: INK, w: 800 })}
      ${box(12, '#b24e26', '#fde9df', 'hidr/o', "sweat", 'hyperhidrosis', '💦')}
      ${box(188, '#1565c0', '#e6f2fc', 'hydr/o', "water", 'hydration', '🚰')}
      ${f(180, 180, "hidr/o without y = sweat; hydr/o with y = water", { size: 10, fill: MUTED, w: 700 })}`, "hidr/o and hydr/o");
  };

  /* ================= لایه‌های پوست ================= */
  /* پنج لایه اپیدرم */
  A['epidermis-strata'] = () => {
    const x = 50, w = 130;
    const bands = [
      ['stratum corneum', "horny layer: dead cells", '#f3e2cf', 30],
      ['stratum lucidum', "clear layer: palms and soles", '#fbf6ee', 14],
      ['stratum granulosum', "grainy layer", '#f2c9a2', 22],
      ['stratum spinosum', "spiny layer", '#eeb48c', 34],
      ['stratum basale', "deepest, cell-making layer", '#d98b66', 22]
    ];
    let y = 40, body = '';
    const LY = [46, 84, 122, 160, 198];
    bands.forEach((b, i) => {
      body += `<rect x="${x}" y="${y}" width="${w}" height="${b[3]}" fill="${b[2]}" stroke="#c9a597" stroke-width=".8"/>`;
      if (i === 0) for (let k = 0; k < 6; k++) body += `<path d="M${x + 5 + k * 21} ${y + 7 + (k % 2) * 11} h16" stroke="#cdb39a" stroke-width="2.4" stroke-linecap="round"/>`;
      if (i === 2) for (let k = 0; k < 7; k++) body += `<ellipse cx="${x + 9 + k * 18.5}" cy="${y + 11}" rx="7" ry="4.5" fill="#e8b48c" stroke="#c98d6f" stroke-width=".7"/><circle cx="${x + 7 + k * 18.5}" cy="${y + 10}" r="1" fill="#7a4632"/><circle cx="${x + 11 + k * 18.5}" cy="${y + 12}" r="1" fill="#7a4632"/>`;
      if (i === 3) for (let k = 0; k < 6; k++) for (let r = 0; r < 2; r++) body += `<path d="${hexP(x + 12 + k * 21 + r * 10, y + 9 + r * 16, 8)}" fill="#f2c4a2" stroke="#c98d6f" stroke-width=".8"/>`;
      if (i === 4) for (let k = 0; k < 9; k++) body += `<rect x="${x + 3 + k * 14.2}" y="${y + 3}" width="11" height="16" rx="4" fill="${k === 2 || k === 6 ? C.mel : '#e69f79'}" stroke="#b56d4c" stroke-width=".7"/>`;
      const by = y + b[3] / 2, ly = LY[i];
      body += `<path d="M${x + w} ${by} H${x + w + 8} L${x + w + 22} ${ly - 4} H${x + w + 26}" stroke="${LINE}" stroke-width="1" fill="none"/>${t(x + w + 30, ly, b[0], { size: 10, anchor: 'start', w: 800 })}${f(x + w + 30, ly + 14, b[1], { size: 9, anchor: 'start' })}`;
      y += b[3];
    });
    body += `<path d="${wave(x, x + w, y, 6, 4)} V${y + 30} H${x} Z" fill="#f6c5bb"/>${f(x + w / 2, y + 22, "dermis", { size: 10, fill: '#b03e5c', w: 800 })}`;
    body += `<path d="M30 ${y - 6} V48" stroke="#b24e26" stroke-width="2" marker-end="url(#mk)"/>`;
    return svg(360, 250, `${f(180, 20, "The epidermis is built from the bottom up", { size: 11, fill: INK, w: 800 })}${body}
      ${f(180, 222, "Cells move up, fill with keratin and are shed", { size: 9, fill: '#b24e26' })}
      ${f(180, 238, "Brown cells = melanocytes in the basal layer", { size: 9, fill: C.mel })}`, "Layers of the epidermis", marker('mk', '#b24e26'));
  };
  function hexP(cx, cy, r) { let d = ''; for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * Math.PI / 3; d += (i ? 'L' : 'M') + (cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy + r * Math.sin(a)).toFixed(1); } return d + 'Z'; }

  /* ملانوسیت و رنگدانه */
  A.melanocyte = () => {
    const a = nid();
    let kc = '';
    for (let i = 0; i < 6; i++) kc += `<rect x="${40 + i * 48}" y="96" width="40" height="40" rx="10" fill="#f1c0a0" stroke="#c98d6f"/><path d="M${52 + i * 48} 102 q8 -6 16 0" stroke="${C.mel}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    return svg(360, 236, `${f(180, 18, "Melanin forms an umbrella over the cells’ nuclei", { size: 11, fill: INK, w: 800 })}
      ${['56', '120', '184', '248', '312'].map(x => arrow(a, +x, 30, +x - 8, 84, '#f2a20c', 2.4)).join('')}
      ${lab(22, 40, 'UV', "ultraviolet light", { size: 11, fill: '#d98a00', anchor: 'start', sym: true })}
      ${kc}
      <path d="M40 150 H330" stroke="#d98b66" stroke-width="2"/>
      <g><ellipse cx="180" cy="162" rx="20" ry="12" fill="${C.mel}"/><path d="M164 156 Q130 140 100 134 M196 156 Q232 140 262 134 M174 152 Q160 130 150 120 M188 152 Q204 128 214 118" stroke="${C.mel}" stroke-width="4" fill="none" stroke-linecap="round"/>
      ${[100, 262, 150, 214].map((x, i) => `<circle cx="${x}" cy="${[134, 134, 120, 118][i]}" r="4" fill="#3a2010"/>`).join('')}</g>
      ${pin(180, 172, 170, 192)}${lab(170, 204, 'melanocyte', "Melanocytes in the basal layer", { size: 10.5, fill: C.mel })}
      ${pin(112, 118, 40, 192)}${lab(52, 204, 'keratinocyte', "keratin-making cell", { size: 9.5 })}
      ${f(292, 210, "melanin: the colour of skin, hair and eyes", { size: 9.5, fill: INK, w: 700 })}${f(292, 224, "sun → more melanin → tan", { size: 9 })}`, "Melanocytes and melanin", marker(a, '#f2a20c'));
  };

  /* درم: کلاژن، رگ و گیرنده‌ها */
  A.dermis = () => {
    const s = section(112, 40, 160, { e: 14, d: 120, s: 30, amp: 9, waves: 5 });
    return svg(360, 236, `${f(180, 20, "Dermis: a living layer, rich in vessels and nerves", { size: 11, fill: INK, w: 800 })}${s.body}
      <ellipse cx="140" cy="64" rx="5" ry="8" fill="#f7d6a8" stroke="#c99a1d"/><path d="M140 72 V132" stroke="${C.nerve}" stroke-width="1.8"/>
      <g transform="translate(236 136)"><ellipse rx="13" ry="9" fill="#f7e2bd" stroke="#c99a1d"/><ellipse rx="8" ry="5" fill="none" stroke="#c99a1d"/><ellipse rx="3" ry="2" fill="#c99a1d"/></g>
      <path d="M190 60 C180 80 210 92 196 110 C190 120 210 130 206 150" stroke="${C.art}" stroke-width="2.2" fill="none"/>
      ${bracket(106, s.yE, s.yE + 30, 'papillary layer', "ridged upper layer", 'left', '#b03e5c')}
      ${bracket(106, s.yE + 34, s.yD, 'reticular layer', "net-like layer (collagen)", 'left', '#b03e5c')}
      ${pin(118, 46, 40, 40)}${lab(56, 34, 'epidermis', '', { size: 10, fill: '#b24e26' })}
      ${pin(140, 62, 288, 56)}${lab(322, 54, 'Meissner', "touch receptor", { size: 9.5 })}
      ${pin(198, 100, 288, 100)}${lab(322, 98, 'capillaries', "tiny vessels", { size: 9.5 })}
      ${pin(244, 136, 288, 146)}${lab(322, 144, 'Pacinian', "pressure receptor", { size: 9.5 })}
      ${pin(160, 120, 288, 192)}${lab(322, 190, 'collagen', "collagen fibre", { size: 9.5 })}
      ${f(180, 228, "dermis = corium • the epidermis has no vessels and is fed by the dermal capillaries", { size: 9, fill: MUTED })}`, "Layers of the dermis", s.defs);
  };

  /* تنظیم دما: گرما و سرما */
  A.thermo = () => {
    const a = nid();
    const s1 = section(18, 70, 150, { e: 10, d: 60, s: 20, fat: false, fib: false, vessels: false, amp: 4 });
    const s2 = section(192, 70, 150, { e: 10, d: 60, s: 20, fat: false, fib: false, vessels: false, amp: 4 });
    return svg(360, 236, `${lab(93, 22, 'hot • vasodilation', "Heat: vessels widen", { size: 11, fill: '#c62828' })}${lab(267, 22, 'cold • vasoconstriction', "Cold: vessels narrow", { size: 11, fill: '#1565c0' })}
      ${s1.body}${s2.body}
      <path d="M18 112 H168" stroke="${C.art}" stroke-width="10" opacity=".85"/><path d="M192 112 H342" stroke="${C.art}" stroke-width="3" opacity=".85"/>
      ${sweatGland(70, 130, 70)}${sweatGland(130, 130, 70)}
      ${[60, 92, 124, 150].map(x => arrow(a, x, 66, x, 50, '#e05a2b', 2)).join('')}
      ${t(70, 62, '💧', { size: 11 })}${t(132, 62, '💧', { size: 11 })}
      <path d="M262 134 l-5 -10 M262 134 l5 -10 M262 134 V108" stroke="#8aa2b8" stroke-width="2" fill="none"/>${t(286, 64, '🥶', { size: 14 })}
      ${f(93, 176, "more blood to the surface → heat is lost", { size: 9.5, fill: INK, w: 700 })}${f(93, 192, "sweat evaporates → cooling", { size: 9.5 })}
      ${f(267, 176, "less blood to the surface → heat is kept", { size: 9.5, fill: INK, w: 700 })}${f(267, 192, "hair stands up (arrector pili)", { size: 9.5 })}
      ${f(180, 222, "thermoregulation: the skin is the body’s thermostat", { size: 10, fill: '#b24e26', w: 800 })}`, "temperature control", s1.defs + s2.defs + marker(a, '#e05a2b'));
  };

  /* ترمیم زخم در سه مرحله */
  A['wound-healing'] = () => {
    const panel = (px, n, fa, en, draw) => { const s = section(px, 64, 104, { e: 10, d: 44, s: 22, amp: 4 }); return { b: `${s.body}${draw(s)}${lab(px + 52, 172, en, fa, { size: 10 })}${t(px + 52, 40, n, { size: 15, fill: '#b24e26', w: 900 })}`, d: s.defs }; };
    const p1 = panel(10, '1', "Clot and scab", 'clot / scab', s => `<path d="M${s.x + 36} ${s.y} L${s.x + 46} ${s.yE + 30} L${s.x + 58} ${s.yE + 30} L${s.x + 68} ${s.y} Z" fill="${C.blood}"/><path d="M${s.x + 32} ${s.y} Q${s.x + 52} ${s.y - 10} ${s.x + 72} ${s.y}" fill="#6b2a1c"/>`);
    const p2 = panel(128, '2', "Healing tissue", 'granulation tissue', s => `<path d="M${s.x + 36} ${s.y} L${s.x + 46} ${s.yE + 30} L${s.x + 58} ${s.yE + 30} L${s.x + 68} ${s.y} Z" fill="#e8556a"/>${[0, 1, 2, 3].map(i => `<circle cx="${s.x + 44 + i * 5}" cy="${s.yE + 8 + (i % 2) * 8}" r="2.6" fill="#ff8fa0"/>`).join('')}<path d="M${s.x + 32} ${s.y} Q${s.x + 52} ${s.y - 6} ${s.x + 72} ${s.y}" fill="#7a3a26"/>`);
    const p3 = panel(246, '3', "Scar", 'scar (cicatrix)', s => `<path d="M${s.x + 40} ${s.y} L${s.x + 48} ${s.yE + 26} L${s.x + 56} ${s.yE + 26} L${s.x + 64} ${s.y} Z" fill="#fbe7e1"/>${[0, 1, 2, 3].map(i => `<path d="M${s.x + 42 + i * 2} ${s.yE + 4 + i * 6} h20" stroke="#e6c3b8" stroke-width="1.6"/>`).join('')}`);
    return svg(360, 214, `${f(180, 18, "Wound healing: scab → granulation tissue → scar", { size: 11, fill: INK, w: 800 })}${p1.b}${p2.b}${p3.b}
      ${f(180, 204, "fibroblasts make collagen; if they make too much → keloid", { size: 9.5, fill: '#b24e26', w: 700 })}`, "Stages of wound healing", p1.d + p2.d + p3.d);
  };

  /* راه‌های تزریق و زاویه سوزن */
  A['injection-routes'] = () => {
    const s = section(16, 90, 328, { e: 14, d: 42, s: 32, amp: 5, waves: 10 });
    /* سوزن: نوک در لایه هدف، بدنه با زاویه داده‌شده بیرون از پوست */
    const needle = (tx, ty, ang, c) => { const r = ang * Math.PI / 180, L = 72; const sx = tx - Math.cos(r) * L, sy = ty - Math.sin(r) * L; return `<path d="M${sx.toFixed(1)} ${sy.toFixed(1)} L${tx} ${ty}" stroke="${c}" stroke-width="3" stroke-linecap="round"/><rect x="${(sx - 6).toFixed(1)}" y="${(sy - 6).toFixed(1)}" width="12" height="12" rx="3" fill="${c}" transform="rotate(${ang} ${sx.toFixed(1)} ${sy.toFixed(1)})"/><circle cx="${tx}" cy="${ty}" r="2.4" fill="#fff" stroke="${c}"/>`; };
    const muscle = `<rect x="16" y="${s.yS}" width="328" height="26" fill="#d98080"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<path d="M${22 + i * 41} ${s.yS + 6} h32 M${22 + i * 41} ${s.yS + 14} h32 M${22 + i * 41} ${s.yS + 22} h32" stroke="#c46666" stroke-width="1"/>`).join('')}`;
    return svg(360, 258, `${f(180, 18, "Which layer does the needle reach?", { size: 11, fill: INK, w: 800 })}${s.body}${muscle}
      ${needle(90, s.yE + 3, 12, '#b24e26')}${needle(150, s.yD + 16, 45, '#9a6a00')}${needle(214, s.yS + 16, 90, '#b03e5c')}${needle(312, s.yD + 3, 25, '#1565c0')}
      <path d="M290 ${s.yD + 3} q24 -4 50 0" stroke="${C.vein}" stroke-width="8" fill="none" opacity=".9"/>
      ${lab(64, 226, 'ID 10–15°', "into the skin", { size: 10, fill: '#b24e26', sym: true })}${lab(140, 226, 'SubQ 45°', "subcutaneously", { size: 10, fill: '#9a6a00', sym: true })}
      ${lab(220, 226, 'IM 90°', "into the muscle", { size: 10, fill: '#b03e5c', sym: true })}${lab(300, 226, 'IV 25°', "into a vein", { size: 10, fill: '#1565c0', sym: true })}
      ${f(180, 254, "The Mantoux test (PPD) is intradermal; insulin is subcutaneous", { size: 9.5, fill: MUTED })}`, "Injection routes", s.defs);
  };

  /* ================= ضمائم پوست ================= */
  /* آناتومی مو */
  A['hair-anatomy'] = () => {
    const s = section(70, 92, 150, { e: 14, d: 104, s: 30, amp: 5 });
    const hx = 128;
    return svg(360, 264, `${f(180, 18, "Hair grows from a follicle in the dermis", { size: 11, fill: INK, w: 800 })}${s.body}
      ${hairUnit(hx, s.y, s.yE + 86, { len: 64, lean: -4 })}${sebGland(hx + 11, s.yE + 30)}
      <path d="M${hx + 8} ${s.yE + 58} L${hx + 44} ${s.yE + 4}" stroke="#c0392b" stroke-width="2.6" stroke-linecap="round"/>
      ${pin(hx - 2, s.y - 40, 248, 40)}${lab(300, 38, 'hair shaft', "hair shaft (outside the skin)", { size: 10 })}
      ${pin(hx, s.yE + 20, 248, 84)}${lab(300, 82, 'hair root', "hair root (inside the skin)", { size: 10 })}
      ${pin(hx + 18, s.yE + 34, 248, 126)}${lab(300, 124, 'sebaceous gland', "oil gland", { size: 10 })}
      ${pin(hx + 30, s.yE + 26, 248, 166)}${lab(300, 164, 'arrector pili', "tiny muscle that makes hair stand up", { size: 10 })}
      ${pin(hx + 9, s.yE + 70, 248, 206)}${lab(300, 204, 'hair follicle', "hair sac", { size: 10 })}
      ${pin(hx, s.yE + 87, 64, 236)}${lab(60, 248, 'hair papilla', "papilla: feeds the hair bulb", { size: 10 })}
      ${f(200, 256, "trich/o and pil/o both mean hair", { size: 9.5, fill: '#7a4a22', w: 800 })}`, "Anatomy of a hair", s.defs);
  };

  /* آناتومی ناخن: عکس از رو + برش از کنار */
  A['nail-anatomy'] = () => {
    const sh = nid(), gb = nid(), gn = nid();
    return svg(360, 300, `${f(180, 18, "The nail from above and from the side", { size: 11, fill: INK, w: 800 })}
      ${IMG('nail-surface', 20, 30, 210, 132)}
      ${pin(52, 96, 262, 40)}${lab(306, 38, 'free edge', "tip beyond the finger", { size: 9.5 })}
      ${pin(90, 96, 262, 74)}${lab(306, 72, 'nail body', "main nail", { size: 9.5 })}
      ${pin(126, 100, 262, 108)}${lab(306, 106, 'lunula', "white half-moon at the nail base", { size: 9.5 })}
      ${pin(144, 96, 262, 142)}${lab(306, 140, 'cuticle', "skin fold at the base", { size: 9.5 })}
      <g filter="url(#${sh})"><path d="M20 250 C20 214 60 196 120 196 H250 V284 H120 C60 284 20 276 20 250Z" fill="url(#${gb})" stroke="#c98d6f"/>
      <path d="M30 222 C50 206 90 202 130 202 L196 206 L196 214 L130 212 C100 212 60 216 34 228Z" fill="url(#${gn})" stroke="#b9a08c"/>
      <path d="M196 206 C206 206 212 214 208 222 L190 224" fill="#f3d9c8" stroke="#c98d6f"/>
      <path d="M170 216 Q196 216 200 232 L170 232Z" fill="#e8a596" opacity=".9"/>
      <path d="M44 236 H170" stroke="#e7a39a" stroke-width="5" opacity=".8"/>
      <path d="M60 252 C90 246 150 246 220 254" stroke="#e7d7c4" stroke-width="12" opacity=".9"/></g>
      ${pin(70, 210, 52, 186)}${lab(46, 176, 'nail plate', "nail sheet", { size: 9 })}
      ${pin(110, 236, 112, 186)}${lab(122, 176, 'nail bed', "skin beneath the nail", { size: 9 })}
      ${pin(184, 226, 196, 186)}${lab(204, 176, 'matrix', "matrix (growth)", { size: 9 })}
      ${pin(26, 236, 14, 292)}${lab(54, 294, 'hyponychium', "skin under the tip", { size: 9 })}
      ${pin(200, 216, 290, 220)}${lab(318, 218, 'nail root', "hidden base of the nail", { size: 9 })}
      ${pin(150, 252, 290, 262)}${lab(318, 260, 'phalanx', "finger bone", { size: 9 })}`, "Anatomy of the nail",
      `${shadow(sh)}${linear(gb, '#f6d3bd', '#e9b394', true)}${linear(gn, '#fff4ee', '#f1d6c8', true)}`);
  };

  /* غدد عرق اکرین و آپوکرین */
  A['sweat-glands'] = () => {
    const s1 = section(18, 64, 150, { e: 12, d: 82, s: 26, amp: 4 });
    const s2 = section(192, 64, 150, { e: 12, d: 82, s: 26, amp: 4 });
    return svg(360, 240, `${lab(93, 22, 'eccrine gland', "eccrine: all over the body", { size: 11, fill: '#1565c0' })}${lab(267, 22, 'apocrine gland', "apocrine: armpit and groin", { size: 11, fill: '#8a4a12' })}
      ${s1.body}${s2.body}
      ${sweatGland(92, s1.yD - 12, s1.y)}
      ${hairUnit(262, s2.y, s2.yE + 52, { len: 16 })}
      <path d="M296 ${s2.yD - 6} C300 ${s2.yE + 40} 280 ${s2.yE + 24} 268 ${s2.yE + 20}" stroke="#c07a3a" stroke-width="2.6" fill="none"/>
      ${[0, 1, 2, 3].map(i => `<ellipse cx="${296 + (i % 2 ? 4 : -4)}" cy="${s2.yD - 10 + i * 3.4}" rx="11" ry="4.2" fill="none" stroke="#c07a3a" stroke-width="2.8"/>`).join('')}
      ${f(93, 196, "duct opens straight onto a skin pore", { size: 9.5, fill: INK, w: 700 })}${f(93, 212, "cools the body • sudoriferous", { size: 9.5 })}
      ${f(267, 196, "duct opens into a hair follicle", { size: 9.5, fill: INK, w: 700 })}${f(267, 212, "after puberty; source of sweat odour", { size: 9.5 })}
      ${f(180, 234, "hidr/o and sudor/o = sweat", { size: 10, fill: '#7a4a22', w: 800 })}`, "Sweat glands", s1.defs + s2.defs);
  };

  /* از فولیکول سالم تا جوش */
  A['acne-steps'] = () => {
    const panel = (px, en, fa, mode) => {
      const s = section(px, 66, 80, { e: 9, d: 56, s: 14, amp: 3, vessels: false, fat: false, fib: false, waves: 3 });
      const x = px + 40;
      let plug = '';
      if (mode === 1) plug = `<ellipse cx="${x}" cy="${s.yE + 8}" rx="7" ry="11" fill="#fff7d6" stroke="#d9c38a"/><path d="M${x - 6} ${s.y} Q${x} ${s.y - 4} ${x + 6} ${s.y}" fill="#f6efe0"/>`;
      if (mode === 2) plug = `<ellipse cx="${x}" cy="${s.yE + 8}" rx="7" ry="11" fill="#fff7d6" stroke="#d9c38a"/><ellipse cx="${x}" cy="${s.y}" rx="6" ry="3" fill="#2b2420"/>`;
      if (mode === 3) plug = `<ellipse cx="${x}" cy="${s.yE + 8}" rx="13" ry="16" fill="${C.pus}" stroke="#c99a1d"/><path d="M${x - 14} ${s.y} Q${x} ${s.y - 14} ${x + 14} ${s.y}" fill="#f3d36a" stroke="#e45b4b" stroke-width="2"/>`;
      return { b: `${s.body}<path d="M${x - 5} ${s.y} C${x - 7} ${s.yE + 20} ${x - 6} ${s.yE + 36} ${x} ${s.yE + 40} C${x + 6} ${s.yE + 36} ${x + 7} ${s.yE + 20} ${x + 5} ${s.y}" fill="#f5d2b8" stroke="#c98d6f"/>${sebGland(x + 7, s.yE + 26)}${plug}${lab(x, 166, en, fa, { size: 9.5 })}`, d: s.defs };
    };
    const ps = [panel(8, 'normal follicle', "healthy follicle", 0), panel(96, 'whitehead', "closed comedo", 1), panel(184, 'blackhead', "open comedo", 2), panel(272, 'pustule', "pus pimple", 3)];
    return svg(360, 214, `${f(180, 20, "Sebum + keratin get stuck in the follicle → comedo", { size: 11, fill: INK, w: 800 })}${ps.map(p => p.b).join('')}
      ${f(180, 202, "A blackhead is black from oxidised melanin, not from dirt", { size: 9.5, fill: MUTED })}`, "Stages of acne", ps.map(p => p.d).join(''));
  };

  /* ================= ضایعه‌ها ================= */
  /** پنل کوچک ضایعه روی برش پوست */
  function lesionPanel(px, py, en, fa, draw, o) {
    const s = section(px, py + 40, 100, Object.assign({ e: 9, d: 40, s: 16, amp: 3, waves: 4, vessels: false }, o || {}));
    return { b: `${s.body}${draw(s, px + 50)}${lab(px + 50, s.yS + 18, en, fa, { size: 10.5 })}`, d: s.defs };
  }
  const grid3 = (title, list, label, h) => {
    const ps = list.map((l, i) => lesionPanel(10 + (i % 3) * 118, 26 + Math.floor(i / 3) * 132, l[0], l[1], l[2], l[3]));
    return svg(360, h || (40 + Math.ceil(list.length / 3) * 132), `${f(180, 18, title, { size: 11, fill: INK, w: 800 })}${ps.map(p => p.b).join('')}`, label, ps.map(p => p.d).join(''));
  };
  const dome = (cx, y, rw, h, fill, stroke) => `<path d="M${cx - rw} ${y} Q${cx - rw} ${y - h * 1.3} ${cx} ${y - h * 1.3} Q${cx + rw} ${y - h * 1.3} ${cx + rw} ${y} Z" fill="${fill}" stroke="${stroke || '#c47652'}" stroke-width="1.2"/>`;

  A['lesions-flat'] = () => grid3("Flat lesions: the colour changes, not the surface", [
    ['macule < 1 cm', "macule: small spot", (s, cx) => `<rect x="${cx - 12}" y="${s.y}" width="24" height="7" rx="2" fill="#9a5a3a"/>`],
    ['patch > 1 cm', "patch: large spot", (s, cx) => `<rect x="${cx - 40}" y="${s.y}" width="80" height="7" rx="2" fill="#9a5a3a" opacity=".75"/>`],
    ['petechiae', "pinpoint bleeds", (s, cx) => [-30, -12, 6, 22, 36].map(d => `<circle cx="${cx + d}" cy="${s.y + 4}" r="2.6" fill="#b3263b"/>`).join('')]
  ], "Flat lesions", 168);

  A['lesions-raised'] = () => grid3("Raised, solid lesions", [
    ['papule < 1 cm', "small bump", (s, cx) => dome(cx, s.y, 12, 12, '#f0a487')],
    ['plaque > 1 cm', "plaque: broad and flat-topped", (s, cx) => `<path d="M${cx - 40} ${s.y} V${s.y - 10} Q${cx - 40} ${s.y - 14} ${cx - 34} ${s.y - 14} H${cx + 34} Q${cx + 40} ${s.y - 14} ${cx + 40} ${s.y - 10} V${s.y}Z" fill="#e88a74" stroke="#c47652"/>${[-30, -14, 2, 18].map(d => `<path d="M${cx + d} ${s.y - 15} h10" stroke="#f6e8e0" stroke-width="2.4" stroke-linecap="round"/>`).join('')}`],
    ['nodule 1–2 cm', "nodule: deeper", (s, cx) => `<ellipse cx="${cx}" cy="${s.yE + 12}" rx="20" ry="17" fill="#e48e76" stroke="#b9614a"/>${dome(cx, s.y, 21, 9, '#f2b293')}`],
    ['tumor > 2 cm', "tumour: large mass", (s, cx) => `<ellipse cx="${cx}" cy="${s.yE + 6}" rx="36" ry="26" fill="#d9776a" stroke="#a9524a"/>${dome(cx, s.y, 37, 18, '#e99a84', '#a9524a')}`],
    ['wheal', "wheal: passing swelling", (s, cx) => `<path d="M${cx - 34} ${s.y} C${cx - 30} ${s.y - 16} ${cx - 10} ${s.y - 12} ${cx} ${s.y - 16} C${cx + 14} ${s.y - 20} ${cx + 30} ${s.y - 12} ${cx + 34} ${s.y} Z" fill="#f7c9c3" stroke="#e46a5e" stroke-width="2"/><ellipse cx="${cx}" cy="${s.y - 8}" rx="12" ry="4" fill="#fff" opacity=".6"/>`],
    ['polyp', "polyp: growth on a stalk", (s, cx) => `<path d="M${cx - 4} ${s.y} C${cx - 4} ${s.y - 10} ${cx - 16} ${s.y - 12} ${cx - 14} ${s.y - 24} C${cx - 12} ${s.y - 34} ${cx + 12} ${s.y - 34} ${cx + 14} ${s.y - 24} C${cx + 16} ${s.y - 12} ${cx + 4} ${s.y - 10} ${cx + 4} ${s.y}Z" fill="#efa58c" stroke="#c47652"/>`]
  ], "Raised lesions");

  A['lesions-fluid'] = () => grid3("Fluid-filled lesions", [
    ['vesicle < 1 cm', "vesicle: small blister", (s, cx) => `<path d="M${cx - 13} ${s.y + 3} Q${cx} ${s.y - 22} ${cx + 13} ${s.y + 3} Z" fill="${C.fluid}" stroke="#7aa6d8" stroke-width="1.4"/><ellipse cx="${cx - 4}" cy="${s.y - 6}" rx="3" ry="2" fill="#fff"/>`],
    ['bulla > 1 cm', "bulla: large blister", (s, cx) => `<path d="M${cx - 38} ${s.y + 4} Q${cx} ${s.y - 38} ${cx + 38} ${s.y + 4} Z" fill="${C.fluid}" stroke="#7aa6d8" stroke-width="1.4"/><ellipse cx="${cx - 12}" cy="${s.y - 10}" rx="6" ry="3" fill="#fff"/>`],
    ['pustule', "pustule: full of pus", (s, cx) => `<path d="M${cx - 15} ${s.y + 3} Q${cx} ${s.y - 26} ${cx + 15} ${s.y + 3} Z" fill="${C.pus}" stroke="#c99a1d" stroke-width="1.4"/><path d="M${cx - 18} ${s.y + 2} Q${cx} ${s.y - 30} ${cx + 18} ${s.y + 2}" stroke="#e45b4b" stroke-width="2" fill="none" opacity=".6"/>`],
    ['cyst', "cyst: closed sac", (s, cx) => `<ellipse cx="${cx}" cy="${s.yE + 16}" rx="26" ry="16" fill="#fbf2dd" stroke="#b98d55" stroke-width="2.4"/>${dome(cx, s.y, 26, 6, '#f2b89a')}`],
    ['abscess', "abscess: pus in a cavity", (s, cx) => `<ellipse cx="${cx}" cy="${s.yE + 14}" rx="24" ry="15" fill="${C.pus}" stroke="#d9493c" stroke-width="3"/>${dome(cx, s.y, 28, 8, '#f19b85', '#d9493c')}`],
    ['hematoma', "hematoma: clotted blood", (s, cx) => `<ellipse cx="${cx}" cy="${s.yE + 14}" rx="24" ry="14" fill="#7a1f33" stroke="#4e1020"/>${dome(cx, s.y, 28, 6, '#a7647a', '#6a3045')}`]
  ], "Fluid-filled lesions");

  A['lesions-secondary'] = () => grid3("Secondary and sunken lesions", [
    ['crust', "scab", (s, cx) => `<path d="M${cx - 30} ${s.y} L${cx - 24} ${s.y - 7} L${cx - 10} ${s.y - 5} L${cx} ${s.y - 9} L${cx + 14} ${s.y - 6} L${cx + 28} ${s.y - 8} L${cx + 32} ${s.y}Z" fill="#c98a3a" stroke="#8a5a20"/>`],
    ['scale', "flakes", (s, cx) => [-34, -16, 2, 20].map((d, i) => `<path d="M${cx + d} ${s.y} q6 -${6 + i % 2 * 3} 14 -${3 + i}" stroke="#e9e3dc" stroke-width="4" fill="none" stroke-linecap="round"/>`).join('')],
    ['lichenification', "thick and leathery", (s, cx) => `<rect x="${cx - 46}" y="${s.y - 6}" width="92" height="${s.yE - s.y + 8}" fill="#d98b66"/>${[-40, -24, -8, 8, 24, 40].map(d => `<path d="M${cx + d} ${s.y - 6} v8" stroke="#8a4a32" stroke-width="1.6"/>`).join('')}`, { e: 9 }],
    ['fissure', "fissure: deep crack", (s, cx) => `<path d="M${cx - 6} ${s.y - 1} L${cx} ${s.yE + 20} L${cx + 6} ${s.y - 1}Z" fill="#fff"/><path d="M${cx - 6} ${s.y} L${cx} ${s.yE + 20} L${cx + 6} ${s.y}" stroke="#b9614a" stroke-width="1.6" fill="none"/>`],
    ['ulcer', "ulcer: down to the dermis", (s, cx) => `<path d="M${cx - 30} ${s.y - 1} C${cx - 26} ${s.yE + 22} ${cx + 26} ${s.yE + 22} ${cx + 30} ${s.y - 1}Z" fill="#fff"/><path d="M${cx - 30} ${s.y} C${cx - 26} ${s.yE + 22} ${cx + 26} ${s.yE + 22} ${cx + 30} ${s.y}" stroke="#c83a3a" stroke-width="2.6" fill="none"/><path d="M${cx - 22} ${s.yE + 12} C${cx - 10} ${s.yE + 18} ${cx + 10} ${s.yE + 18} ${cx + 22} ${s.yE + 12}" stroke="#e8556a" stroke-width="3" fill="none"/>`],
    ['keloid', "keloid: raised scar", (s, cx) => `<path d="M${cx - 40} ${s.y} C${cx - 36} ${s.y - 16} ${cx - 14} ${s.y - 22} ${cx} ${s.y - 18} C${cx + 18} ${s.y - 24} ${cx + 38} ${s.y - 14} ${cx + 40} ${s.y}Z" fill="#c9787a" stroke="#9a4a4e"/><path d="M${cx - 6} ${s.y + 2} V${s.yE + 20} H${cx + 6} V${s.y + 2}" fill="#f6dcd4"/>`]
  ], "Secondary lesions");

  /* خونریزی زیر پوست: از نقطه تا توده */
  A['bleed-spots'] = () => {
    const box = (x, en, fa, size, draw) => `<rect x="${x}" y="34" width="80" height="80" rx="14" fill="#f8d9c6"/>${draw(x + 40, 74)}${lab(x + 40, 132, en, fa, { size: 10 })}${f(x + 40, 160, size, { size: 9, fill: '#9c2f3f', w: 700 })}`;
    return svg(360, 190, `${f(180, 20, "Small to large: all are blood that has leaked out of vessels", { size: 11, fill: INK, w: 800 })}
      ${box(6, 'petechiae', "tiny dots", "under 3 mm", (x, y) => [[-20, -16], [8, -22], [18, 4], [-6, 10], [-22, 16], [22, 22], [0, -4]].map(p => `<circle cx="${x + p[0]}" cy="${y + p[1]}" r="2.4" fill="#b3263b"/>`).join(''))}
      ${box(94, 'purpura', "purple bleeding patches", "purple patch", (x, y) => `<path d="M${x - 22} ${y - 6} C${x - 18} ${y - 22} ${x + 4} ${y - 18} ${x + 10} ${y - 10} C${x + 24} ${y - 6} ${x + 22} ${y + 14} ${x + 4} ${y + 16} C${x - 12} ${y + 22} ${x - 26} ${y + 8} ${x - 22} ${y - 6}Z" fill="#8e3b8a" opacity=".85"/>`)}
      ${box(182, 'ecchymosis', "large bruise", "large bruise", (x, y) => `<ellipse cx="${x}" cy="${y}" rx="32" ry="26" fill="#6b4a9e" opacity=".55"/><ellipse cx="${x + 2}" cy="${y + 2}" rx="20" ry="15" fill="#3f2a78" opacity=".7"/><ellipse cx="${x - 8}" cy="${y + 12}" rx="14" ry="6" fill="#c9b03a" opacity=".5"/>`)}
      ${box(270, 'hematoma', "pooled blood", "raised clot", (x, y) => `<ellipse cx="${x}" cy="${y + 4}" rx="28" ry="20" fill="#5e1e33"/><ellipse cx="${x - 8}" cy="${y - 4}" rx="8" ry="4" fill="#fff" opacity=".25"/>`)}`, "Bleeding under the skin");
  };

  /* خط‌کش یک سانتی‌متری */
  A['size-rule'] = () => {
    const row = (y, small, big, fs, fb) => `${t(70, y, small, { size: 12, fill: '#b24e26', w: 900 })}${f(70, y + 15, fs, { size: 9.5 })}${t(180, y + 5, '1 cm', { size: 12, w: 900, sym: true })}${t(290, y, big, { size: 12, fill: '#1565c0', w: 900 })}${f(290, y + 15, fb, { size: 9.5 })}`;
    return svg(360, 200, `${f(180, 18, "The one-centimetre line: small or large?", { size: 11, fill: INK, w: 800 })}
      ${t(70, 42, '< 1 cm', { size: 11, fill: '#b24e26', w: 900, sym: true })}${t(290, 42, '> 1 cm', { size: 11, fill: '#1565c0', w: 900, sym: true })}
      ${row(72, 'macule', 'patch', "small flat spot", "large flat spot")}
      ${row(112, 'papule', 'plaque / nodule', "small bump", "large bump")}
      ${row(152, 'vesicle', 'bulla', "small blister", "large blister")}
      <path d="M130 186 H230" stroke="${INK}" stroke-width="2"/>${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `<path d="M${130 + i * 10} 186 v${i % 5 ? -5 : -9}" stroke="${INK}" stroke-width="1.4"/>`).join('')}`, "Lesion sizes");
  };

  /* ================= بیماری‌ها ================= */
  /* عمق سوختگی */
  A['burn-depth'] = () => {
    const s = section(56, 52, 250, { e: 18, d: 62, s: 40, amp: 6, waves: 9 });
    const zone = (x1, x2, y2, c, op) => `<rect x="${x1}" y="${s.y}" width="${x2 - x1}" height="${y2 - s.y}" fill="${c}" opacity="${op}"/>`;
    return svg(360, 262, `${f(180, 18, "Burn degree = depth of damage", { size: 11, fill: INK, w: 800 })}${s.body}
      ${zone(56, 139, s.yE, '#ff6b3d', .45)}${zone(139, 222, s.yE + 34, '#ff4b2b', .45)}${zone(222, 306, s.yS, '#3a2a24', .55)}
      <path d="M${86} ${s.y} Q${98} ${s.y - 26} ${112} ${s.y}" fill="none"/>
      <path d="M150 ${s.y + 1} Q180 ${s.y - 28} 210 ${s.y + 1}Z" fill="${C.fluid}" stroke="#7aa6d8"/>
      <path d="M228 ${s.y} h72 v-5 h-72z" fill="#2a1d18"/>
      ${lab(98, 210, '1st degree', "epidermis only", { size: 10, fill: '#d9531e' })}${f(98, 238, "redness, no blisters", { size: 9 })}
      ${lab(180, 210, '2nd degree', "into part of the dermis", { size: 10, fill: '#c62828' })}${f(180, 238, "blisters, severe pain", { size: 9 })}
      ${lab(264, 210, '3rd degree', "full thickness", { size: 10, fill: '#3a2a24' })}${f(264, 238, "white or charred", { size: 9 })}
      ${bracket(50, s.y, s.yE, 'epi', "outer skin", 'left', '#b24e26')}${bracket(50, s.yE, s.yD, 'dermis', "dermis", 'left', '#b03e5c')}${bracket(50, s.yD, s.yS, 'subQ', "subcutaneously", 'left', '#9a6a00')}
      ${t(180, 256, 'superficial • partial-thickness • full-thickness', { size: 9, fill: MUTED, w: 600 })}`, "Burn depth", s.defs);
  };

  /* قانون نُه‌ها روی مانکن */
  A['rule-of-nines'] = () => {
    const g = nid(), sh = nid();
    const body = (ox, back) => `<g transform="translate(${ox} 0)" filter="url(#${sh})">
      <circle cx="60" cy="40" r="16" fill="${back ? '#f7c9a5' : '#fbd7b6'}" stroke="#c98d6f"/>
      <path d="M38 62 H82 Q92 62 92 74 V140 H28 V74 Q28 62 38 62Z" fill="url(#${g})" stroke="#c98d6f"/>
      <path d="M28 66 Q14 70 12 90 L8 140 H20 L26 96 Z" fill="#f4d0ae" stroke="#c98d6f"/><path d="M92 66 Q106 70 108 90 L112 140 H100 L94 96 Z" fill="#f4d0ae" stroke="#c98d6f"/>
      <path d="M30 140 H59 L56 232 H38Z" fill="#f2c9a6" stroke="#c98d6f"/><path d="M61 140 H90 L82 232 H64Z" fill="#f2c9a6" stroke="#c98d6f"/>
      ${t(60, 44, '4.5', { size: 10, w: 900, fill: '#b24e26' })}${t(18, 104, '4.5', { size: 9, w: 900, fill: '#b24e26' })}${t(102, 104, '4.5', { size: 9, w: 900, fill: '#b24e26' })}
      ${t(60, 92, back ? '18' : '18', { size: 13, w: 900, fill: '#b24e26' })}${f(60, 106, back ? "back of trunk" : "front of trunk", { size: 8.5 })}
      ${t(46, 190, '9', { size: 11, w: 900, fill: '#b24e26' })}${t(74, 190, '9', { size: 11, w: 900, fill: '#b24e26' })}
      ${back ? '' : `${t(60, 152, '1', { size: 9, w: 900, fill: '#b24e26' })}`}</g>`;
    return svg(360, 300, `${f(180, 18, "Adult: each area is 9% or a multiple of it (total 100%)", { size: 11, fill: INK, w: 800 })}
      ${body(40, false)}${body(200, true)}
      ${f(100, 252, "front (anterior)", { size: 10, fill: INK, w: 800 })}${f(260, 252, "back (posterior)", { size: 10, fill: INK, w: 800 })}
      ${f(180, 274, "head 9 • each arm 9 • each leg 18 • trunk 36 • genital area 1", { size: 9.5, fill: INK, w: 700 })}
      ${f(180, 292, "The number on each half: percentage of body surface area (BSA)", { size: 9, fill: MUTED })}`, "Rule of nines", `${linear(g, '#fbd7b6', '#efbc94', true)}${shadow(sh)}`);
  };

  /* نقاط فشار در بیمار بستری */
  A['pressure-points'] = () => {
    const g = nid(), sh = nid();
    const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="7" fill="#e5484d" opacity=".85"/><circle cx="${x}" cy="${y}" r="12" fill="none" stroke="#e5484d" stroke-width="1.6" opacity=".5"/>`;
    return svg(360, 200, `${f(180, 18, "Pressure sores over bony prominences", { size: 11, fill: INK, w: 800 })}
      <rect x="14" y="118" width="332" height="16" rx="6" fill="#d9e3ea"/><rect x="14" y="132" width="332" height="10" rx="4" fill="#b9c7d1"/>
      <g filter="url(#${sh})"><circle cx="44" cy="96" r="20" fill="url(#${g})" stroke="#c98d6f"/>
      <path d="M64 92 C80 82 110 82 140 86 L230 92 C250 92 262 100 262 108 L300 106 C318 104 330 110 332 116 H64 Z" fill="url(#${g})" stroke="#c98d6f"/></g>
      ${dot(40, 116)}${dot(96, 116)}${dot(160, 116)}${dot(196, 116)}${dot(326, 114)}
      ${lab(40, 166, 'occiput', "back of the head", { size: 9.5 })}${lab(96, 166, 'scapula', "shoulder blade", { size: 9.5 })}${lab(160, 166, 'elbow', "elbow", { size: 9.5 })}
      ${lab(206, 166, 'sacrum', "sacral (most common)", { size: 9.5, fill: '#c62828' })}${lab(318, 166, 'heel', "the heel", { size: 9.5 })}
      ${f(180, 196, "decubitus = lying down; change position every 2 hours", { size: 9.5, fill: MUTED })}`, "Pressure points", `${linear(g, '#fbd7b6', '#efbc94', true)}${shadow(sh)}`);
  };

  /* مراحل زخم فشاری */
  A['ulcer-stages'] = () => {
    const panel = (px, n, fa, draw) => { const s = section(px, 40, 80, { e: 9, d: 34, s: 22, amp: 3, waves: 3, vessels: false }); return { b: `${s.body}<rect x="${px}" y="${s.yS}" width="80" height="14" fill="#d98080"/><rect x="${px}" y="${s.yS + 14}" width="80" height="10" fill="#f1ede6"/>${draw(s, px + 40)}${t(px + 40, 30, 'Stage ' + n, { size: 11, fill: '#b24e26', w: 900 })}${f(px + 40, s.yS + 46, fa, { size: 9.5, fill: INK, w: 700 })}`, d: s.defs }; };
    const crater = (s, cx, depth, w) => `<path d="M${cx - w} ${s.y - 1} C${cx - w + 4} ${depth} ${cx + w - 4} ${depth} ${cx + w} ${s.y - 1}Z" fill="#fff"/><path d="M${cx - w} ${s.y} C${cx - w + 4} ${depth} ${cx + w - 4} ${depth} ${cx + w} ${s.y}" stroke="#c83a3a" stroke-width="2.4" fill="none"/>`;
    const ps = [
      panel(8, 1, "persistent redness", (s, cx) => `<rect x="${cx - 24}" y="${s.y}" width="48" height="6" fill="#e5484d" opacity=".7"/>`),
      panel(96, 2, "shallow sore", (s, cx) => crater(s, cx, s.yE + 8, 18)),
      panel(184, 3, "down to fat", (s, cx) => crater(s, cx, s.yD + 12, 22)),
      panel(272, 4, "down to muscle and bone", (s, cx) => crater(s, cx, s.yS + 22, 26))
    ];
    return svg(360, 196, `${ps.map(p => p.b).join('')}${f(180, 190, 'pressure ulcer = decubitus ulcer = bedsore', { size: 9.5, fill: MUTED })}`, "Stages of a pressure sore", ps.map(p => p.d).join(''));
  };

  /* نقشه کچلی‌ها روی بدن */
  A['tinea-sites'] = () => {
    const g = nid(), sh = nid();
    const ring = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#c0392b" stroke-width="2.4" stroke-dasharray="3 2"/>`;
    return svg(360, 300, `${f(180, 18, "tinea + the Latin name of the site", { size: 11, fill: INK, w: 800 })}
      <g filter="url(#${sh})"><circle cx="180" cy="56" r="20" fill="url(#${g})" stroke="#c98d6f"/>
      <path d="M154 82 H206 Q218 82 218 96 V170 H142 V96 Q142 82 154 82Z" fill="url(#${g})" stroke="#c98d6f"/>
      <path d="M142 88 Q124 92 122 112 L116 176 H130 L138 118Z" fill="#f4d0ae" stroke="#c98d6f"/><path d="M218 88 Q236 92 238 112 L244 176 H230 L222 118Z" fill="#f4d0ae" stroke="#c98d6f"/>
      <path d="M144 170 H178 L174 270 H152Z" fill="#f2c9a6" stroke="#c98d6f"/><path d="M182 170 H216 L208 270 H186Z" fill="#f2c9a6" stroke="#c98d6f"/>
      <path d="M148 270 H176 L178 282 H140Z" fill="#f2c9a6" stroke="#c98d6f"/><path d="M186 270 H212 L220 282 H184Z" fill="#f2c9a6" stroke="#c98d6f"/></g>
      ${ring(180, 46, 12)}${ring(192, 126, 12)}${ring(178, 176, 9)}${ring(162, 278, 10)}${ring(124, 176, 6)}
      ${pin(170, 42, 96, 48)}${lab(56, 44, 'tinea capitis', "ringworm of the scalp", { size: 10 })}
      ${pin(202, 126, 268, 120)}${lab(306, 116, 'tinea corporis', "ringworm of the body", { size: 10 })}
      ${pin(186, 178, 268, 184)}${lab(306, 180, 'tinea cruris', "jock itch", { size: 10 })}
      ${pin(152, 278, 96, 266)}${lab(56, 262, 'tinea pedis', "foot fungus", { size: 10 })}
      ${pin(122, 180, 96, 200)}${lab(56, 196, 'tinea unguium', "nail fungus", { size: 10 })}
      ${f(306, 270, "capitis = head • corporis = body", { size: 9, fill: MUTED })}${f(306, 284, "cruris = thigh • pedis = foot", { size: 9, fill: MUTED })}`, "Sites of ringworm", `${linear(g, '#fbd7b6', '#efbc94', true)}${shadow(sh)}`);
  };

  /* ================= تومور، تشخیص و درمان ================= */
  /* ABCDE ملانوما */
  A.abcde = () => {
    const card = (x, y, L, en, fa, draw) => `<rect x="${x}" y="${y}" width="108" height="112" rx="14" fill="#fbf1ea"/>${t(x + 16, y + 22, L, { size: 18, w: 900, fill: '#b24e26', sym: true })}${draw(x + 62, y + 40)}${lab(x + 54, y + 82, en, fa, { size: 10 })}`;
    const mole = (c, d) => `<path d="${d}" fill="${c}"/>`;
    return svg(360, 268, `${f(180, 18, "Melanoma warning: ABCDE", { size: 11.5, fill: INK, w: 800 })}
      ${card(8, 28, 'A', 'Asymmetry', "uneven halves", (x, y) => mole('#3a2116', `M${x - 22} ${y} C${x - 22} ${y - 18} ${x + 2} ${y - 20} ${x + 8} ${y - 8} C${x + 22} ${y - 6} ${x + 14} ${y + 14} ${x - 2} ${y + 10} C${x - 14} ${y + 16} ${x - 22} ${y + 8} ${x - 22} ${y}Z`))}
      ${card(126, 28, 'B', 'Border', "irregular edge", (x, y) => mole('#4a2a1a', `M${x - 20} ${y} l6 -10 l-2 -8 l10 2 l6 -6 l6 8 l10 -2 l-2 10 l6 8 l-8 4 l2 10 l-10 -2 l-6 6 l-6 -8 l-10 0 l2 -8z`))}
      ${card(244, 28, 'C', 'Color', "several colours", (x, y) => `<ellipse cx="${x}" cy="${y}" rx="22" ry="17" fill="#6b3a22"/><ellipse cx="${x - 7}" cy="${y - 3}" rx="10" ry="8" fill="#1d1410"/><ellipse cx="${x + 9}" cy="${y + 5}" rx="7" ry="6" fill="#c0392b"/><ellipse cx="${x + 6}" cy="${y - 8}" rx="5" ry="4" fill="#8aa0b8"/>`)}
      ${card(66, 148, 'D', 'Diameter', "diameter over 6 mm", (x, y) => `<circle cx="${x - 8}" cy="${y - 2}" r="15" fill="#4a2a1a"/><path d="M${x - 23} ${y + 18} H${x + 7}" stroke="${INK}" stroke-width="1.6"/>${t(x + 24, y + 2, '> 6 mm', { size: 9, sym: true })}`)}
      ${card(184, 148, 'E', 'Evolving', "changing over time", (x, y) => `<circle cx="${x - 14}" cy="${y}" r="7" fill="#6b3a22"/><path d="M${x - 4} ${y} h8" stroke="${INK}" stroke-width="1.6"/><path d="M${x + 2} ${y - 3} l4 3 l-4 3" fill="none" stroke="${INK}" stroke-width="1.6"/><ellipse cx="${x + 18}" cy="${y}" rx="11" ry="13" fill="#3a2116"/>`)}`, "ABCDE criteria for melanoma");
  };

  /* سه سرطان پوست و عمقشان */
  A['skin-cancers'] = () => {
    const s = section(20, 58, 320, { e: 18, d: 64, s: 30, amp: 5, waves: 11 });
    return svg(360, 252, `${f(180, 18, "Three common skin cancers from three cell types", { size: 11, fill: INK, w: 800 })}${s.body}
      <path d="M${46} ${s.y} Q${62} ${s.y - 14} ${78} ${s.y - 12} Q${94} ${s.y - 14} ${110} ${s.y}" fill="#f6ddd0" stroke="#d8a48f"/><ellipse cx="78" cy="${s.y - 8}" rx="7" ry="4" fill="#e9b9a6"/><path d="M58 ${s.yE - 2} q20 14 40 0" fill="#e7b7a2" stroke="#c98d6f"/>
      <path d="M140 ${s.y} L150 ${s.y - 14} L176 ${s.y - 16} L196 ${s.y - 8} L204 ${s.y}Z" fill="#d9a07a" stroke="#a86a4a"/><path d="M150 ${s.y} L160 ${s.yE + 24} L188 ${s.yE + 20} L196 ${s.y}" fill="#e3a993" stroke="#a86a4a"/>
      <path d="M232 ${s.y} C232 ${s.y - 10} 300 ${s.y - 10} 304 ${s.y}" fill="#2a1a12"/><path d="M240 ${s.y} L252 ${s.yE + 30} L268 ${s.yD - 4} L284 ${s.yE + 36} L296 ${s.y}Z" fill="#3a2116" opacity=".9"/>
      <path d="M268 ${s.yD - 4} L272 ${s.yD + 20}" stroke="#3a2116" stroke-width="2" stroke-dasharray="3 2"/><circle cx="276" cy="${s.yD + 24}" r="4" fill="#3a2116"/>
      ${lab(78, 196, 'BCC', "basal cell", { size: 11, fill: '#b24e26', sym: true })}${f(78, 226, "most common, low risk", { size: 9 })}
      ${lab(176, 196, 'SCC', "squamous cell", { size: 11, fill: '#8a4a32', sym: true })}${f(176, 226, "sometimes spreads", { size: 9 })}
      ${lab(272, 196, 'MM', "pigment cell", { size: 11, fill: '#2a1a12', sym: true })}${f(272, 226, "most dangerous", { size: 9 })}
      ${f(180, 246, "The main cause of all three: ultraviolet (UV) sunlight", { size: 9.5, fill: MUTED })}`, "Skin cancers", s.defs);
  };

  /* انواع بیوپسی */
  A['biopsy-types'] = () => {
    const panel = (px, en, fa, draw) => { const s = section(px, 92, 80, { e: 9, d: 40, s: 22, amp: 3, waves: 3, vessels: false }); return { b: `${s.body}${draw(s, px + 40)}${lab(px + 40, 190, en, fa, { size: 10 })}`, d: s.defs }; };
    const lesion = (s, cx) => dome(cx, s.y, 14, 8, '#7a4a32', '#4a2a1a');
    const ps = [
      panel(8, 'shave', "shave", (s, cx) => `${lesion(s, cx)}<path d="M${cx - 30} ${s.y - 2} L${cx + 26} ${s.y - 2}" stroke="#4f6a80" stroke-width="2.4" stroke-dasharray="5 3"/><path d="M${cx + 24} ${s.y - 12} l12 6 l-12 6z" fill="#8aa0b4"/>`),
      panel(96, 'punch', "punch", (s, cx) => `${lesion(s, cx)}<rect x="${cx - 8}" y="${s.y - 40}" width="16" height="${s.yD - s.y + 40}" fill="none" stroke="#4f6a80" stroke-width="2.2" stroke-dasharray="4 3"/><rect x="${cx - 10}" y="${s.y - 52}" width="20" height="14" rx="4" fill="#8aa0b4"/>`),
      panel(184, 'incisional', "incisional: part", (s, cx) => `<path d="M${cx - 34} ${s.y} Q${cx} ${s.y - 22} ${cx + 34} ${s.y}Z" fill="#7a4a32"/><path d="M${cx - 8} ${s.y - 14} L${cx} ${s.yD - 6} L${cx + 8} ${s.y - 14}" fill="none" stroke="#4f6a80" stroke-width="2.4" stroke-dasharray="4 3"/>`),
      panel(272, 'excisional', "excisional: whole", (s, cx) => `${lesion(s, cx)}<path d="M${cx - 26} ${s.y - 2} L${cx} ${s.yD} L${cx + 26} ${s.y - 2}" fill="none" stroke="#4f6a80" stroke-width="2.4" stroke-dasharray="4 3"/>`)
    ];
    return svg(360, 226, `${f(180, 20, "bi/o (living) + -opsy (viewing): a living sample for the microscope", { size: 11, fill: INK, w: 800 })}${ps.map(p => p.b).join('')}
      ${f(180, 220, "dashed line = removal margin • Bx = biopsy", { size: 9.5, fill: MUTED })}`, "Types of biopsy", ps.map(p => p.d).join(''));
  };

  /* پیوند پوست: ضخامت و منبع */
  A['graft-types'] = () => {
    const s = section(20, 50, 150, { e: 14, d: 56, s: 30, amp: 5, waves: 5 });
    const row = (y, en, fa, ic) => `${t(206, y, ic, { size: 16, anchor: 'start' })}${t(232, y - 2, en, { size: 11, w: 900, anchor: 'start', fill: '#1f7a6f' })}${f(232, y + 12, fa, { size: 9.5, anchor: 'start' })}`;
    return svg(360, 232, `${f(180, 18, "Skin grafts: how thick? From where?", { size: 11, fill: INK, w: 800 })}${s.body}
      <path d="M20 ${s.yE + 20} H170" stroke="#1f7a6f" stroke-width="2.4" stroke-dasharray="5 3"/><path d="M20 ${s.yD} H170" stroke="#0b5a8a" stroke-width="2.4" stroke-dasharray="5 3"/>
      ${t(176, s.yE + 24, 'STSG', { size: 10, w: 900, fill: '#1f7a6f', anchor: 'start', sym: true })}${t(176, s.yD + 4, 'FTSG', { size: 10, w: 900, fill: '#0b5a8a', anchor: 'start', sym: true })}
      ${f(95, 178, "STSG: epidermis + part of the dermis", { size: 9.5, fill: '#1f7a6f', w: 700 })}${f(95, 194, "FTSG: epidermis + the whole dermis", { size: 9.5, fill: '#0b5a8a', w: 700 })}
      ${row(58, 'autograft', "from the patient’s own body", '🧑')}${row(100, 'allograft', "from another person (homograft)", '👥')}${row(142, 'xenograft', "from an animal (heterograft)", '🐖')}
      ${f(180, 222, "A dermatome is an instrument for taking a thin layer of skin for grafting", { size: 9.5, fill: MUTED })}`, "Types of skin graft", s.defs);
  };

  /* جراحی موس: لایه به لایه */
  A.mohs = () => {
    const a = nid();
    const s = section(30, 60, 170, { e: 14, d: 58, s: 24, amp: 4, waves: 6 });
    return svg(360, 220, `${f(180, 18, "Mohs surgery: removal layer by layer until clear", { size: 11, fill: INK, w: 800 })}${s.body}
      <path d="M80 ${s.y} L92 ${s.yE + 30} L112 ${s.yE + 40} L128 ${s.yE + 22} L150 ${s.y}Z" fill="#7a4a32" opacity=".85"/>
      <path d="M70 ${s.y - 2} Q115 ${s.yE + 18} 160 ${s.y - 2}" stroke="#1f7a6f" stroke-width="2.4" fill="none" stroke-dasharray="5 3"/>
      <path d="M64 ${s.y - 2} Q115 ${s.yE + 40} 166 ${s.y - 2}" stroke="#0b5a8a" stroke-width="2.4" fill="none" stroke-dasharray="5 3"/>
      <path d="M58 ${s.y - 2} Q115 ${s.yE + 58} 172 ${s.y - 2}" stroke="#2e7d32" stroke-width="2.4" fill="none" stroke-dasharray="5 3"/>
      ${t(178, s.y + 8, '1', { size: 11, w: 900, fill: '#1f7a6f' })}${t(184, s.yE + 26, '2', { size: 11, w: 900, fill: '#0b5a8a' })}${t(190, s.yE + 46, '3 ✓', { size: 11, w: 900, fill: '#2e7d32' })}
      ${curve(a, `M206 ${s.y + 20} C230 ${s.y} 250 ${s.y} 262 ${s.y + 14}`, '#5b6b73', 2)}
      <circle cx="292" cy="${s.y + 40}" r="26" fill="#eef4f8" stroke="#5b6b73" stroke-width="2"/><circle cx="292" cy="${s.y + 40}" r="16" fill="#f7d6cc"/>${t(292, s.y + 44, '🔬', { size: 14 })}
      ${f(292, s.y + 86, "each layer under the microscope", { size: 9.5, fill: INK, w: 700 })}${f(292, s.y + 100, "until the margin is cancer-free", { size: 9.5 })}
      ${f(115, 196, "the most healthy tissue is spared (face)", { size: 9.5, fill: INK, w: 700 })}${f(115, 212, "BCC and SCC", { size: 9.5 })}`, "layer-by-layer skin cancer surgery", s.defs + marker(a));
  };

  /* آزمون‌های پوستی */
  A['skin-tests'] = () => svg(360, 240, `${f(180, 18, "Three skin tests: patch, scratch, intradermal", { size: 11, fill: INK, w: 800 })}
    ${IMG('skin-tests', 10, 28, 340, 116)}
    ${lab(70, 162, 'intradermal / Mantoux', "intradermal (ID) injection", { size: 10 })}${lab(270, 162, 'scratch (prick) test', "scratch test for allergy", { size: 10 })}
    <rect x="16" y="190" width="328" height="42" rx="12" fill="#eef7f5"/>
    ${f(180, 207, "PPD TB test: read the width of the hardening (induration) after 48 to 72 hours", { size: 9.5, fill: '#1f7a6f', w: 700 })}
    ${f(180, 224, "Patch test: the allergen is taped to the skin and read after 48 hours", { size: 9.5, fill: INK })}`, "Skin tests");

  /* ساعت دارو: bid، tid، qid، hs، prn */
  A['rx-clock'] = () => {
    const row = (y, ab, fa, n, c) => `${t(30, y + 5, ab, { size: 13, w: 900, fill: c, anchor: 'start', sym: true })}${f(150, y + 5, fa, { size: 10, fill: INK, w: 700, anchor: 'end' })}${Array.from({ length: n }, (_, i) => `<circle cx="${180 + i * 30}" cy="${y}" r="10" fill="${c}" opacity=".85"/>${t(180 + i * 30, y + 4, '💊', { size: 9 })}`).join('')}`;
    return svg(360, 230, `${f(180, 18, "Reading prescriptions: how many times a day?", { size: 11, fill: INK, w: 800 })}
      ${row(48, 'bid', "twice a day", 2, '#1f7a6f')}${row(84, 'tid', "three times a day", 3, '#0b5a8a')}${row(120, 'qid', "four times a day", 4, '#b24e26')}
      ${t(30, 161, 'hs', { size: 13, w: 900, fill: '#6a4a9e', anchor: 'start', sym: true })}${f(150, 161, "at bedtime", { size: 10, fill: INK, w: 700, anchor: 'end' })}${t(182, 161, '🌙', { size: 16 })}
      ${t(30, 197, 'prn', { size: 13, w: 900, fill: '#9a6a00', anchor: 'start', sym: true })}${f(150, 197, "as needed", { size: 10, fill: INK, w: 700, anchor: 'end' })}${t(182, 197, '❔', { size: 16 })}
      ${f(290, 162, "oint = ointment", { size: 9.5, fill: MUTED })}${f(290, 178, "top = topical", { size: 9.5, fill: MUTED })}${f(290, 194, "SubQ = subcutaneous", { size: 9.5, fill: MUTED })}`, "Prescription abbreviations");
  };

  /* ---------- عکس‌های برچسب‌دار: تصویر بالینی + برچسب دوزبانه ---------- */
  function IMG(k, x, y, w, h) { return `<image href="${EA.img ? EA.img(k) : 'img/' + k + '.webp'}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet"/>`; }
  /* برش میکروسکوپی پوست با برچسب لایه‌ها */
  A['skin-histology'] = () => svg(360, 300, `${f(180, 18, "Skin under the microscope (H&E stain)", { size: 11, fill: INK, w: 800 })}
    ${IMG('skin-histology', 30, 28, 200, 266)}
    ${bracketR(236, 30, 70, 'epidermis', "epidermis: purple band on top", '#7a3fd1')}
    ${bracketR(236, 74, 190, 'dermis', "dermis: pink and fibrous", '#c2185b')}
    ${bracketR(236, 194, 292, 'subcutaneous', "subcutaneous: fat (white)", '#9a6a00')}`, "Microscopic section of skin");
  function bracketR(x, y1, y2, en, fa, c) { return `<path d="M${x} ${y1} h6 V${y2} h-6" stroke="${c}" stroke-width="1.6" fill="none"/>${lab(x + 12, (y1 + y2) / 2 - 2, en, fa, { size: 10.5, anchor: 'start', fill: c })}`; }

  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* درما — دنیای ۰: زبان پوست (پایه همه دنیاها)
 * پیش از رفتن سراغ لایه‌ها و بیماری‌ها، دو چیز را یاد می‌گیریم: «پوست چه می‌کند» و «واژه‌هایش چطور ساخته می‌شوند».
 * سطح ۱: پوست، بزرگ‌ترین اندام • سطح ۲: ریشه‌های پوست و رنگ‌ها • سطح ۳: پیشوندها، پسوندها و دام‌های همزاد
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: "The Language of the Skin", short: "The Language of the Skin", sub: "What the skin does and how its words are built: roots, prefixes, suffixes and colours",
    color: '#D9643A', dark: '#A8461F', light: '#FCE9E0',
    levels: ["The skin, the largest organ", "Skin roots", "Prefixes and suffixes"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: پوست، بزرگ‌ترین اندام ================= */
      {
        id: 'lx1', title: "The Skin: Clothing You Never Take Off", icon: '🧥', items: [
          L("The body’s largest organ", `The skin is the body’s largest organ; in adults it covers about 2 square metres.<br>Its scientific name is ${e('<b>integument</b>')}, from the Latin word ${e('integumentum')}, meaning “covering”.<br>The skin and its appendages (hair, nails, sweat glands and oil glands) together make up the ${e('<b>integumentary system</b>')}, the body’s <b>covering system</b>.${memo("Say integument as “in-TEG-yoo-ment” and think of “a one-piece covering”: clothing you have worn since the day you were born.")}`),
          L("Who is the skin doctor?", `${wb('dermat/o', '-logy')} → ${e('<b>dermatology</b>')} means the study of the skin<br>${wb('dermat/o', '-logist')} → ${e('<b>dermatologist</b>')} means a skin specialist<br>A dermatologist treats diseases of the skin, hair and nails, from acne and eczema to skin cancer. Sometimes a skin lesion is a sign of a <b>systemic</b> (whole-body) disease, such as a leg ulcer in a diabetic patient.${pearl("In a chart, the skin department is shortened to Derm: “referral to Derm” means referral to a dermatologist.")}`),
          M("What is the scientific name for the “skin”, which gives the integumentary system its name?", ['integument', 'epidermis', 'cutis vera', 'dermatome'], "integument comes from the Latin integumentum, “covering”."),
          T("The integumentary system includes only the skin; hair and nails are not part of it.", false, "False; hair, nails, sweat glands and oil glands are the “skin appendages” and part of the integumentary system."),
          M(`Who is a ${e('<b>dermatologist</b>')}?`, ["skin specialist", "pathologist", "plastic surgeon", "pressure-sore specialist"], "dermat/o (skin) + -logist (specialist)."),
          B("The suffix ___ means “specialist” and ‎-logy means “study of”.", ['‎-logist', '‎-itis', '‎-osis'], "A dermatologist is a specialist and dermatology is the field of study."),
          P("Match each term to its meaning", [['integument', "skin as a body covering"], ['dermatology', "study of the skin"], ['dermatologist', "skin specialist"], ['systemic', "Relating to the whole body"]], "These four basic words are the foundation of every later lesson."),
          S("Spell the term for a skin specialist", 'dermatologist', 'dermat/o + -logist.', 'dermato…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: "Five Jobs of the Skin", icon: '🛡️', items: [
          L("The skin is never idle!", `${fig('skin-functions', [], "The five main jobs of the skin")}The skin is not just a simple covering; it has five main jobs:<br>1. <b>Protection</b>: a barrier to microbes (${e('pathogens')}), water loss and ultraviolet light<br>2. <b>Temperature control</b> (${e('thermoregulation')})<br>3. <b>Sensation</b>: touch, pressure, pain, heat and cold<br>4. <b>Making vitamin D</b> with sunlight<br>5. <b>Excretion and secretion</b>: sweat and skin oil`),
          L("The body’s thermostat", `${fig('thermo', [], "Heat and cold")}When you are hot, the vessels of the dermis <b>widen</b> and the sweat glands go to work; evaporating sweat cools the body.<br>When you are cold, the vessels <b>narrow</b> to keep heat in and your hairs stand on end.${memo("PTSEV: Protection, Temperature, Sensation, vitamin D, Excretion; five fingers of one hand for the skin’s five jobs.")}`),
          M("With the help of which light does the skin make vitamin D?", ["Ultraviolet (UV) light", "Infrared light", "X-rays", "Green light"], "The sun’s UV activates the vitamin D precursor in the skin."),
          T("In hot weather, the skin’s vessels narrow so that heat does not escape.", false, "False; in the heat the vessels widen (vasodilation) so that heat is lost.", F('thermo', [])),
          M(`${e('<b>pathogen</b>')} means…`, ["disease-causing agent", "gland that makes sweat", "outer layer of the skin", "antimicrobial drug"], "path/o (disease) + -gen (producing). Healthy skin is the first barrier against them."),
          P("Match each job to its example", [["protection", "keeping microbes out"], ["temperature control", "sweating"], ["sensation", "sensing touch and pain"], ["Excretion", "removing some salts with sweat"]], "The skin’s five main jobs."),
          O("When your body heats up, put these steps in order", ["Body temperature rises", "The skin’s vessels widen", "The sweat glands secrete", "Sweat evaporates and the body cools"], "thermoregulation: more blood to the surface and evaporating sweat."),
          B("Control of body temperature is called ___ in medical terms.", ['thermoregulation', 'photosensitivity', 'hidrosis'], "therm/o = heat."),
          S("Spell the term for a disease-causing agent", 'pathogen', 'path/o + -gen.', 'path…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: "Map of the Skin: Three Layers", icon: '🗺️', items: [
          L("Three floors of a building", `${fig('skin-block', [], "Cross-section of the skin with its layers and appendages")}The skin has three layers:<br>1. ${e('<b>epidermis</b>')}: the thin outer layer; it <b>has no blood vessels</b>.<br>2. ${e('<b>dermis</b>')}: the thick middle layer, full of vessels, nerves, glands and hair follicles.<br>3. ${e('<b>subcutaneous tissue</b>')}: fat that insulates and cushions the body.`),
          L("Decode the names of the layers", `${wb('epi-', 'derm', '-is')} → “upon the dermis”<br>${wb('sub-', 'cutane/o', '-ous')} → “under the skin”<br>${wb('hypo-', 'derm', '-is')} → another name for the subcutaneous layer${memo("A three-storey building: the roof (epidermis) is waterproof but has no pipes; the middle floor (dermis) has all the plumbing and wiring; the basement (subcutaneous) is the fat store.")}`),
          M("Which layer of the skin has no blood vessels?", ['epidermis', 'dermis', 'subcutaneous tissue', "All three have vessels"], "The epidermis is avascular and is fed by the capillaries of the dermis.", null, F('skin-block', [])),
          M("In which layer are the sweat glands and hair follicles?", ['dermis', 'epidermis', 'stratum corneum', 'nail bed'], "The dermis is the skin’s living, well-equipped layer."),
          T("The subcutaneous layer is made mostly of fatty tissue.", true, "True; adipose tissue keeps the body warm and absorbs shocks."),
          W("Build a word meaning “pertaining to under the skin”", ['sub-', 'cutane/o', '-ous'], ['epi-', 'derm/o', '-itis'], 'sub- + cutane/o + -ous = subcutaneous.'),
          O("Put the skin layers in order from outside to inside", ['epidermis', 'dermis', 'subcutaneous tissue', 'muscle'], "Muscle lies beneath the subcutaneous tissue."),
          P("Match each layer to its feature", [['epidermis', "no vessels, protective layer"], ['dermis', "vessels, nerves and glands"], ['subcutaneous tissue', "fat and insulation"], ['stratum corneum', "dead surface cells"]], "The stratum corneum is the topmost part of the epidermis."),
          S("Spell the term for the outer layer of the skin", 'epidermis', "epi- (upon) + derm (skin) + -is.", 'epi…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲: ریشه‌های پوست ================= */
      {
        id: 'lx4', title: "The anatomy of a word", icon: '🧩', items: [
          L("A medical word is a puzzle", `${fig('wordparts', [], "Prefix + root + suffix")}Every medical word is built from pieces:<br>• the <b>root</b> (${e('root')}): the core meaning, such as ${e('derm')} = skin<br>• the <b>prefix</b> (${e('prefix')}): at the start of the word, such as ${e('sub-')} = under<br>• the <b>suffix</b> (${e('suffix')}): at the end of the word, such as ${e('-itis')} = inflammation<br>• the <b>combining vowel</b> (usually ${e('o')}): joins the root to the suffix: ${e('dermat/o/logy')}`),
          L("The golden rule of reading", `Start the meaning from the <b>suffix</b>, then the <b>prefix</b>, and finally the <b>root</b>:<br>${wb('dermat/o', '-itis')} → “inflammation of the skin”<br>${wb('hypo-', 'derm/o', '-ic')} → “pertaining to under the skin”${memo("If the suffix starts with a vowel, the combining vowel is dropped: dermat/o + -itis = dermatitis, not dermatoitis.")}`),
          M(`In ${e('<b>dermatitis</b>')}, which is the suffix and what does it mean?`, ["‎-itis = inflammation", "‎-osis = abnormal condition", "‎-oma = tumour", "‎-logy = study of"], "dermatitis = inflammation of the skin."),
          M(`${e('<b>dermatosis</b>')} means…`, ["any disease or abnormal condition of the skin", "skin inflammation", "skin tumour", "removal of skin"], "dermat/o + -osis (abnormal condition)."),
          T("In dermatitis the combining vowel o is dropped because ‎-itis starts with a vowel.", true, "True; dermat + itis."),
          B("In the word ___, the root dermat/o is joined to the suffix ‎-logy with the vowel o.", ['dermatology', 'dermatitis', 'epidermis'], 'dermat/o/logy.'),
          W("Build a word meaning “any skin disease”", ['dermat/o', '-pathy'], ['-itis', 'sub-', '-logist'], 'dermat/o + -pathy = dermatopathy.'),
          P("Match each piece to its type", [['sub-', "prefix"], ['cutane/o', "root"], ['-ous', "suffix"], ["the o in dermatology", "combining vowel"]], "Three main pieces + the combining vowel."),
          S("Spell the term for inflammation of the skin", 'dermatitis', 'dermat/o + -itis.', 'derma…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: "Roots for Skin, Fat and Dryness", icon: '🧴', items: [
          L("Three roots for “skin”", `${tbl([["root", "Meaning", "Example"], [e('derm/o, dermat/o'), "skin", e('dermatology')], [e('cutane/o'), "skin", e('subcutaneous')], [e('-derma'), "skin (suffix)", e('xeroderma')]])}${memo("cutane looks like “cut”: the skin is the first thing hurt by a cut.")}`),
          L("Fat, hardness, dryness", `${tbl([["root", "Meaning", "Example"], [e('adip/o, lip/o, steat/o'), "fat", e('lipoma')], [e('kerat/o'), "horny, hard (keratin)", e('keratosis')], [e('xer/o'), "dry", e('xeroderma')], [e('ichthy/o'), "dry and scaly (fish)", e('ichthyosis')], [e('scler/o'), "hard", e('scleroderma')], [e('squam/o'), "scale", e('squamous')]])}`),
          M(`${e('<b>xeroderma</b>')} means…`, ["dry skin", "red skin", "yellow skin", "hard skin"], "xer/o (dry) + -derma (skin)."),
          M("Which root does not mean “fat”?", ['kerat/o', 'lip/o', 'adip/o', 'steat/o'], "kerat/o means horny and hard."),
          T("Ichthyosis means dry, scaly skin like the skin of a fish.", true, "ichthy/o = fish; dry and scaly."),
          W("Build a word meaning “hardening of the skin”", ['scler/o', '-derma'], ['xer/o', '-itis', 'lip/o'], 'scler/o + -derma = scleroderma.'),
          P("Match each root to its meaning", [['xer/o', "dry"], ['lip/o', "fat"], ['kerat/o', "horny, hard"], ['squam/o', "scale"]], "squamous cell = the scale-like cell of the epidermis."),
          B("The word ___ means “pus-forming skin infection”.", ['pyoderma', 'xeroderma', 'leukoderma'], "py/o (pus) + -derma."),
          S("Spell the term for dry skin", 'xeroderma', 'xer/o + -derma.', 'xero…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: "A Rainbow of Roots", icon: '🎨', items: [
          L("Describe the skin by its colour", `${fig('color-roots', [], "Colour roots")}Physicians talk in skin colours: red, blue, yellow, white and black each have a root.`),
          L("Colour + derma", `${wb('erythr/o', '-derma')} → widespread redness of the skin<br>${wb('leuk/o', '-derma')} → white patches of skin<br>${wb('xanth/o', '-derma')} → yellow skin<br>${wb('cyan/o', '-osis')} → bluish skin (lack of oxygen)${memo("Erythrocyte = red blood cell; leukocyte = white blood cell. The same colours appear on the skin too.")}${pearl("Blue lips and nails (cyanosis) mean the blood is low in oxygen; an urgent sign at the bedside.")}`),
          M("Which root means “yellow”?", ['xanth/o', 'xer/o', 'cyan/o', 'leuk/o'], "xanth/o = yellow; xer/o = dry. One letter apart!"),
          M(`${e('<b>melanoma</b>')} is built from which colour root?`, ["melan/o = black", "erythr/o = red", "leuk/o = white", "cyan/o = blue"], "melan/o + -oma (tumour): a tumour of pigment cells."),
          T("Erythroderma means widespread redness of the skin.", true, "erythr/o (red) + -derma."),
          W("Build a word meaning “white patches of skin”", ['leuk/o', '-derma'], ['melan/o', '-oma', 'xer/o'], 'leuk/o + -derma = leukoderma.'),
          P("Match each colour to its root", [["red", 'erythr/o'], ["black", 'melan/o'], ["blue", 'cyan/o'], ["yellow", 'xanth/o']], "Four common colours."),
          B("An inherited complete absence of pigment is called ___.", ['albinism', 'cyanosis', 'erythema'], "albin/o = white (without pigment)."),
          S("Spell the term for bluish skin from lack of oxygen", 'cyanosis', 'cyan/o + -osis.', 'cyan…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳: پیشوندها و پسوندها ================= */
      {
        id: 'lx7', title: "Prefixes of Place and Direction", icon: '🧭', items: [
          L("Where is the needle?", `${fig('injection-routes', [], "Injection routes")}Prefixes tell where something is relative to the skin:<br>${tbl([["prefix", "Meaning", "Example"], [e('epi-'), "on, over", e('epidermis')], [e('sub-, hypo-'), "below", e('subcutaneous, hypodermic')], [e('intra-'), "within", e('intradermal')], [e('trans-, per-'), "through, across", e('transdermal, percutaneous')]])}`),
          L("Two prefixes of amount", `${e('<b>hyper-</b>')} = excessive: ${e('hyperhidrosis')} (heavy sweating)<br>${e('<b>an-, a-</b>')} = without: ${e('anhidrosis')} (no sweating), ${e('avascular')} (without vessels)${vs(['hypo-', "under or below normal: hypodermic"], ['hyper-', "excessive: hyperhidrosis"])}`),
          M(`${e('<b>intradermal</b>')} means…`, ["within the skin", "under the skin", "on the skin", "through the skin"], "intra- (within) + derm + -al. The Mantoux test is intradermal."),
          M("What is a medicated patch that passes the drug through intact skin called?", ['transdermal patch', 'intradermal injection', 'subcutaneous injection', 'epidermal graft'], "trans- = through."),
          T("A hypodermic needle is a needle for injecting under the skin.", true, "hypo- (under) + derm + -ic."),
          W("Build a word meaning “without blood vessels”", ['a-', 'vascul/o', '-ar'], ['hyper-', 'derm/o', '-itis'], 'a- + vascul/o + -ar = avascular.'),
          P("Match each prefix to its meaning", [['epi-', "on, over"], ['sub-', "below"], ['intra-', "within"], ['trans-', "through"]], "Four prefixes of place and direction."),
          B("The prefix ___ means “without”, as in anhidrosis.", ['an-', 'hyper-', 'epi-'], "an- + hidr/o + -osis = absence of sweating."),
          S("Spell the term for within the skin", 'intradermal', 'intra- + derm/o + -al.', 'intra…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: "Disease and Surgery Suffixes", icon: '✂️', items: [
          L("Disease suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-itis'), "inflammation", e('dermatitis')], [e('-osis'), "abnormal condition", e('dermatosis')], [e('-oma'), "tumour, mass", e('lipoma')], [e('-pathy'), "disease", e('onychopathy')], [e('-malacia'), "softening", e('onychomalacia')], [e('-rrhea'), "flow, discharge", e('seborrhea')]])}`),
          L("Surgery and treatment suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-ectomy'), "removal", e('lipectomy')], [e('-tomy'), "incision", e('onychotomy')], [e('-tome'), "cutting instrument", e('dermatome')], [e('-plasty'), "surgical repair", e('dermatoplasty')], [e('-therapy'), "treatment", e('cryotherapy')], [e('-graft'), "transplant", e('autograft')]])}${memo("-tomy is the act (cutting), -tome is the tool (the knife); the final e of -tome is the edge of the blade.")}`),
          M(`${e('<b>lipoma</b>')} means…`, ["benign fatty tumour", "inflammation of fat", "surgical removal of fat", "fat cell"], "lip/o (fat) + -oma (tumour)."),
          M("Which suffix means “surgical repair”?", ['‎-plasty', '‎-ectomy', '‎-tomy', '‎-tome'], "dermatoplasty = surgical repair of the skin."),
          T("A dermatome is an instrument for removing a thin layer of skin for grafting.", true, "-tome = cutting instrument."),
          W("Build a word meaning “removal of a nail”", ['onych/o', '-ectomy'], ['-tomy', 'trich/o', '-plasty'], 'onych/o + -ectomy = onychectomy.'),
          P("Match each suffix to its meaning", [['-itis', "inflammation"], ['-oma', "tumour"], ['-ectomy', "removal"], ['-malacia', "softening"]], "Four common suffixes."),
          B("Treatment with cold is called ___.", ['cryotherapy', 'phototherapy', 'cryotomy'], "cry/o (cold) + -therapy."),
          S("Spell the term for surgical repair of the skin", 'dermatoplasty', 'dermat/o + -plasty.', 'dermato…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: "Look-alike Traps", icon: '🪤', items: [
          L("One letter, a world of difference", `${fig('twins', [], "hidr/o versus hydr/o")}${vs(['hidr/o', "sweat: hyperhidrosis"], ['hydr/o', "water: hydration"])}${vs(['xer/o', "dry: xeroderma"], ['xanth/o', "yellow: xanthoma"])}`),
          L("Other twins", `${vs(['-tomy', "incision: onychotomy"], ['-ectomy', "removal: onychectomy"])}${vs(['onych/o', "nail: onychomycosis"], ['onc/o', "tumour: oncology"])}${vs(['pil/o', "hair: pilonidal"], ['py/o', "pus: pyoderma"])}${memo("In hidr/o the sweat has soaked the “i”; in hydr/o the “y” looks like a glass of water.")}`),
          M(`${e('<b>hyperhidrosis</b>')} means…`, ["excessive sweating", "too much water in the body", "excessive dryness", "excessive urine"], "hidr/o = sweat, not water."),
          M("Which word relates to the nail?", ['onychomycosis', 'oncology', 'oncogene', 'carcinoma'], "onych/o = nail; onc/o = tumour."),
          T("A xanthoma is a dry lump on the skin.", false, "False; xanth/o means yellow: a yellow fatty lump in the skin."),
          M("What is the difference between onychotomy and onychectomy?", ["The first is cutting into a nail, the second removing a nail", "Both are removal of a nail", "The first is inflammation, the second incision", "The first is a fingernail, the second a toenail"], "-tomy is incision and -ectomy removal."),
          P("Match each pair correctly", [['hidr/o', "sweat"], ['hydr/o', "water"], ['xer/o', "dry"], ['xanth/o', "yellow"]], "Deceptive twins."),
          B("Absence of sweating is called ___.", ['anhidrosis', 'anhydrosis', 'xerosis'], "an- + hidr/o + -osis; with i, not y."),
          S("Spell the term for excessive sweating", 'hyperhidrosis', 'hyper- + hidr/o + -osis.', 'hyperh…'),
          N('m2r:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* درما — دنیای ۱: لایه‌های پوست
 * منابع: Integumentary System در total.txt و PDFهای پیوست (Epidermis، Dermis، Subcutaneous tissue، Wound healing)
 * سطح ۱: اپیدرم • سطح ۲: درم • سطح ۳: زیرجلدی، ترمیم و راه‌های تزریق
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ly', sym: 'Ly', name: "Layers of the skin", short: "Layers", sub: "The epidermis and its five strata, melanin, the dermis and its receptors, subcutaneous fat, wound healing and injection routes",
    color: '#D9506E', dark: '#A83350', light: '#FCE6EC',
    levels: ["outer skin", "dermis", "Subcutaneous tissue and healing"],
    gens: EA.genIds('ly'),
    lessons: [
      /* ================= سطح ۱: اپیدرم ================= */
      {
        id: 'ly1', title: "The Epidermis: A Wall Without Vessels", icon: '🧱', items: [
          L("The protective outer layer", `${e('<b>epidermis</b>')} is the thinnest layer of the skin: thinnest on the eyelids and thickest on the palms and soles.<br>It is made of ${e('<b>stratified squamous epithelium</b>')}, that is, several rows of flat <b>squamous</b> cells (squam/o = scale) stacked on top of each other.<br>The epidermis is ${e('<b>avascular</b>')}: it has neither vessels nor nerves. It gets its food and oxygen from the capillaries of the dermis.`),
          L("Keratin: the skin’s armour", `The main cell of the epidermis is the ${e('<b>keratinocyte</b>')}, which makes the hard, waterproof protein ${e('<b>keratin</b>')} (kerat/o = horny, hard).<br>The same keratin is found in hair and nails.${memo("Picture keratin as armour: a hard, waterproof shield over the body.")}${pearl("A superficial cut that removes only the epidermis does not bleed; if it bleeds, it has reached the dermis.")}`),
          M("Why does a very superficial scratch not bleed?", ["Because the epidermis has no vessels", "Because keratin clots the blood", "Because the epidermis has nerves", "Because the dermis contains fat"], "The epidermis is avascular."),
          M(`${e('<b>keratinocyte</b>')} means…`, ["keratin-making cell of the epidermis", "pigment-making cell", "fat cell", "inflammatory cell"], "keratin + -cyte (cell)."),
          T("The epidermis is thicker on the palms and soles than on the eyelids.", true, "The places rubbed most are the thickest."),
          W("Build a word meaning “without blood vessels”", ['a-', 'vascul/o', '-ar'], ['epi-', 'derm/o', '-itis'], 'a- + vascul/o + -ar = avascular.'),
          P("Match each term to its meaning", [['epidermis', "outer layer of the skin"], ['keratin', "hard, waterproof protein"], ['squamous', "flat, scale-like"], ['avascular', "without blood vessels"]], "Four features of the epidermis."),
          B("The hard protein of the epidermis, hair and nails is called ___.", ['keratin', 'collagen', 'melanin'], "kerat/o = horny."),
          S("Spell the term meaning scale-like", 'squamous', "squam/o (scale) + -ous.", 'squa…'),
          N('t2f:ly')
        ]
      },
      {
        id: 'ly2', title: "The Five Strata of the Epidermis", icon: '🏢', items: [
          L("From the bottom up", `${fig('epidermis-strata', [], "Layers of the epidermis")}Each layer of the epidermis is called a ${e('stratum')} (layer). Cells are made in the ${e('<b>stratum basale</b>')}, move upward, fill with keratin, then die and are shed in the ${e('<b>stratum corneum</b>')}. The journey takes about 4 weeks.`),
          L("The name of each stratum", `${tbl([["Layer", "Meaning"], [e('stratum corneum'), "horny: dead cells"], [e('stratum lucidum'), "clear: palms and soles only"], [e('stratum granulosum'), "grainy"], [e('stratum spinosum'), "spiny"], [e('stratum basale'), "basal or germinating (germinativum)"]])}${memo("From the top: “Come, Let’s Get Sun Burned”: Corneum, Lucidum, Granulosum, Spinosum, Basale.")}`),
          M("In which layer are new epidermal cells made?", ['stratum basale', 'stratum corneum', 'stratum lucidum', 'dermis'], "The basal layer is the same as the germinating layer (germinativum).", null, F('epidermis-strata', [])),
          M("Where is the clear layer (stratum lucidum) found?", ["Only in the thick skin of the palms and soles", "On the eyelids", "In all the skin of the body", "In the dermis"], "Thin skin does not have this layer."),
          T("The stratum corneum is made of living cells full of vessels.", false, "False; its cells are dead, full of keratin and constantly shed."),
          O("Put the layers of the epidermis in order from inside to outside", ['stratum basale', 'stratum spinosum', 'stratum granulosum', 'stratum lucidum', 'stratum corneum'], 'Basale ← Spinosum ← Granulosum ← Lucidum ← Corneum.'),
          P("Match each layer to the meaning of its name", [['corneum', "horny"], ['lucidum', "clear"], ['granulosum', "grainy"], ['spinosum', "spiny"]], "The Latin name of each layer describes its appearance."),
          B("Another name for the stratum basale is the stratum ___ (germinating layer).", ['germinativum', 'corneum', 'reticulare'], "germ = sprout, growth."),
          S("Spell the two-word name of the horny outer layer", 'stratum corneum', "stratum (layer) + corneum (horny).", 'stratum c…'),
          N('f2t:ly')
        ]
      },
      {
        id: 'ly3', title: "Melanin and Skin Colour", icon: '☀️', items: [
          L("The skin’s colour umbrella", `${fig('melanocyte', [], "Melanocytes and melanin")}The ${e('<b>melanocyte</b>')} is the pigment-making cell of the basal layer (melan/o = black, -cyte = cell).<br>Through its branches it passes ${e('<b>melanin</b>')} to the keratinocytes; melanin sits like an umbrella over the cells’ nuclei and absorbs ultraviolet (UV) light.`),
          L("Tan, freckles and albinism", `Sun → more melanin → tanning. The number of melanocytes is about the same in all people; differences in skin colour come from the <b>amount of melanin</b>.<br>${e('<b>albinism</b>')}: an inherited absence of melanin in the skin, hair and eyes.${pearl("Melanoma is cancer of these very melanocytes, so take any new or changing dark mole seriously.")}`),
          M("In which cell is melanin made?", ['melanocyte', 'keratinocyte', 'lipocyte', 'fibroblast'], 'melan/o + -cyte.'),
          M("What is melanin’s main job?", ["Absorbing ultraviolet light and protecting the cells’ nuclei", "Making keratin", "Controlling sweating", "storing fat"], "Melanin is a natural sunscreen."),
          T("Differences in human skin colour come mainly from the number of melanocytes.", false, "False; the number is about the same; the amount of melanin produced differs."),
          W("Build a word meaning “pigment-making cell”", ['melan/o', '-cyte'], ['-oma', 'leuk/o', 'kerat/o'], 'melan/o + -cyte = melanocyte.'),
          P("Match each term to its meaning", [['melanin', "skin pigment"], ['melanocyte', "pigment-making cell"], ['albinism', "inherited lack of melanin"], ['ultraviolet', "invisible rays beyond violet in sunlight"]], "Skin colour and the sun."),
          B("An inherited absence of melanin in the skin, hair and eyes is called ___.", ['albinism', 'vitiligo', 'leukoderma'], "albin/o = white."),
          S("Spell the term for the skin’s dark pigment", 'melanin', "melan/o (black) + -in (substance).", 'mela…'),
          N('r2m:ly')
        ]
      },
      /* ================= سطح ۲: درم ================= */
      {
        id: 'ly4', title: "The Dermis: The Living Layer", icon: '❤️', items: [
          L("The factory beneath the surface", `${fig('dermis', [], "Layers of the dermis")}The ${e('<b>dermis</b>')} or ${e('<b>corium</b>')} is the thick layer under the epidermis. Unlike the epidermis it is ${e('<b>vascular</b>')} and contains vessels, nerves, sweat and oil glands and hair follicles.<br>It has two parts: the ${e('papillary layer')} (the upper, ridged layer) and the ${e('reticular layer')} (the lower, net-like layer, full of collagen).`),
          L("Dermal papillae and fingerprints", `The ${e('<b>dermal papillae</b>')} are finger-like ridges of the dermis that project into the epidermis (papill/o = nipple-like bump). These ridges increase the contact area between the two layers and, on the fingertips, form <b>fingerprints</b>.${memo("A fingerprint is a map of the dermal papillae. That is why a superficial burn does not change your fingerprints.")}`),
          M("What is another name for the dermis?", ['corium', 'cuticle', 'stratum corneum', 'hypodermis'], "corium = dermis (true skin)."),
          M("Which structure forms the fingerprints?", ['dermal papillae', 'stratum lucidum', 'sebaceous glands', 'arrector pili'], "The dermal papillae make the pattern of ridges."),
          T("Unlike the epidermis, the dermis has blood vessels and nerves.", true, "The dermis is vascular.", F('dermis', [])),
          W("Build a word meaning “pertaining to the skin”", ['derm/o', '-al'], ['-itis', 'epi-', '-oma'], 'derm/o + -al = dermal.'),
          P("Match each part to its feature", [['papillary layer', "the upper part of the dermis, with ridges"], ['reticular layer', "the lower, collagen-rich part"], ['dermal papillae', "forms fingerprints"], ['vascular', "rich in vessels"]], "The two parts of the dermis."),
          B("The epidermis has no vessels; the dermis is ___.", ['vascular', 'avascular', 'squamous'], "vascul/o = vessel."),
          S("Spell the term for the layer beneath the epidermis", 'dermis', 'derm + -is.', 'der…'),
          N('d2t:ly')
        ]
      },
      {
        id: 'ly5', title: "Receptors and Vessels", icon: '✋', items: [
          L("The skin, the largest sense organ", `The dermis is full of sensory receptors:<br>• ${e('<b>Meissner corpuscle</b>')}: light touch, in the dermal papillae<br>• ${e('<b>Pacinian corpuscle</b>')}: pressure and vibration, deep in the dermis<br>• ${e('free nerve endings')}: pain, heat and cold`),
          L("Vessels and temperature", `The capillaries of the dermis both feed the epidermis and control temperature: widening of the vessels (${e('vasodilation')}) releases heat and narrowing (${e('vasoconstriction')}) keeps it in.${pearl("Cold, pale skin in shock means the body has moved blood from the skin to the vital organs.")}`),
          M("Which receptor senses deep pressure and vibration?", ['Pacinian corpuscle', 'Meissner corpuscle', 'melanocyte', 'sebaceous gland'], "The Pacinian corpuscle is layered and deep."),
          M("Where in the skin is the light-touch receptor?", ["The dermal papillae (Meissner)", "horny outer layer", "fatty tissue", "The nail matrix"], "The Meissner corpuscle lies near the surface."),
          T("In the cold, the vessels of the dermis widen so that heat reaches the skin.", false, "False; in the cold the vessels narrow to keep heat in."),
          O("Put the path of a touch message in order", ["Touching the skin", "Stimulation of the Meissner receptor", "Message along the nerve", "Touch perceived in the brain"], "Receptor → nerve → brain."),
          P("Match each receptor or structure to its job", [['Meissner corpuscle', "light touch"], ['Pacinian corpuscle', "pressure and vibration"], ['free nerve endings', "pain and temperature"], ['capillaries', "nourishment and temperature control"]], "The dermis = the sensory and vascular layer."),
          B("Widening of the vessels is called ___.", ['vasodilation', 'vasoconstriction', 'vascular'], "vas/o = vessel."),
          S("Spell the term for rich in blood vessels", 'vascular', 'vascul/o + -ar.', 'vasc…'),
          N('t2f:ly')
        ]
      },
      {
        id: 'ly6', title: "Collagen, Elastin and Wrinkles", icon: '🪢', items: [
          L("The ropes and springs of the dermis", `${e('<b>collagen</b>')} is the strong fibrous protein of the dermis (coll/a = glue, -gen = producing) and gives it strength.<br>${e('<b>elastin</b>')} is the elastic fibre that returns the skin to its shape after stretching.<br>Both are made by the ${e('<b>fibroblast</b>')} cell (fibr/o = fibre).`),
          L("Ageing and turgor", `With age and sun damage, collagen and elastin decrease → ${e('<b>rhytid</b>')} (wrinkles).<br>${e('<b>skin turgor</b>')} is the elasticity of the skin: if you pinch the skin on the back of the hand and it is slow to return, turgor is low.${pearl("Low turgor in a child with diarrhoea is a sign of dehydration.")}`),
          M("Which protein gives the skin its strength?", ['collagen', 'melanin', 'sebum', 'keratin'], "Collagen is the main protein of the dermis."),
          M(`${e('<b>rhytid</b>')} means…`, ["wrinkle", "scar", "blister", "mole"], "rhytid/o = wrinkle; rhytidectomy = facelift."),
          T("Skin that is slow to return after a pinch has low turgor.", true, "A sign of dehydration or ageing skin."),
          W("Build a word meaning “fibre maker (connective tissue cell)”", ['fibr/o', '-blast'], ['-cyte', 'kerat/o', '-oma'], "fibr/o + -blast (young forming cell) = fibroblast."),
          P("Match each term to its meaning", [['collagen', "strong fibre of the dermis"], ['elastin', "elastic fibre"], ['fibroblast', "collagen maker"], ['skin turgor', "skin elasticity"]], "The structure of the dermis."),
          B("A wrinkle of the skin is called a ___ in medical terms.", ['rhytid', 'cicatrix', 'fissure'], "rhytid/o = wrinkle."),
          S("Spell the term for the strong fibrous protein of the dermis", 'collagen', "coll/a (glue) + -gen.", 'coll…'),
          N('m2r:ly')
        ]
      },
      /* ================= سطح ۳: زیرجلدی و ترمیم ================= */
      {
        id: 'ly7', title: "Subcutaneous Tissue and Fat", icon: '🧈', items: [
          L("The warm basement", `The ${e('<b>subcutaneous tissue</b>')} or ${e('<b>hypodermis</b>')} (and ${e('superficial fascia')}) lies under the dermis. Most of it is ${e('<b>adipose tissue</b>')}, or fatty tissue.<br>Three jobs: heat insulation, shock absorption and energy storage. It also attaches the skin to the muscle beneath it.`),
          L("Three roots for fat", `${e('adip/o')}, ${e('lip/o')} and ${e('steat/o')} all mean fat:<br>${wb('lip/o', '-cyte')} → fat cell<br>${wb('lip/o', '-oma')} → benign fatty tumour<br>${wb('steat/o', '-oma')} → fatty tumour or oil cyst${memo("adipose is “a deposit” of fat; lip/o as in “lipid” and steat/o as in a fatty “steak”.")}`),
          M("What is most of the subcutaneous tissue made of?", ['adipose tissue', 'keratin', 'cartilage', 'melanin'], "Fatty tissue."),
          M(`${e('<b>lipocyte</b>')} means…`, ["fat cell", "fatty tumour", "surgical removal of fat", "inflammation of fat"], 'lip/o + -cyte.'),
          T("Hypodermis is another name for the subcutaneous tissue.", true, "hypo- (under) + derm + -is."),
          W("Build a word meaning “benign fatty tumour”", ['lip/o', '-oma'], ['-cyte', 'kerat/o', '-itis'], 'lip/o + -oma = lipoma.'),
          P("Match each term to its meaning", [['adipose tissue', "fatty tissue"], ['lipocyte', "fat cell"], ['hypodermis', "subcutaneous layer"], ['lipoma', "fatty tumour"]], "Fat under the skin."),
          B("Fat removal by suction is called ___.", ['liposuction', 'lipectomy', 'lipocyte'], "lip/o + suction."),
          S("Spell the term for “under the skin”", 'subcutaneous', 'sub- + cutane/o + -ous.', 'subcu…'),
          N('wb:ly')
        ]
      },
      {
        id: 'ly8', title: "Wound Healing", icon: '🩹', items: [
          L("Three stages of healing", `${fig('wound-healing', [], "Stages of wound healing")}1. <b>Clot and scab</b>: the blood clots and a scab (${e('crust')}) covers the surface.<br>2. <b>Granulation tissue</b> (${e('granulation tissue')}): red, grainy tissue full of capillaries fills the gap.<br>3. <b>Scar</b> (${e('<b>cicatrix</b>')}): fibroblasts make collagen and a scar remains.`),
          L("Too much scar: keloid", `If too much collagen is made, it forms a raised scar that goes beyond the edge of the wound: a ${e('<b>keloid</b>')} (kel/o = growth).${pearl("A superficial wound that involves only the epidermis heals without a scar; a wound that reaches the dermis leaves a scar.")}${vs(['hypertrophic scar', "raised but within the wound"], ['keloid', "raised and beyond the wound edge"])}`),
          M("What is the red, grainy tissue that fills a wound from its base called?", ['granulation tissue', 'eschar', 'keloid', 'stratum granulosum'], "Granulation tissue is full of new capillaries."),
          M(`${e('<b>cicatrix</b>')} means…`, ["mark left by a healed wound", "scab", "blister", "scratch"], 'cicatrix = scar.'),
          T("A keloid is a scar that extends beyond the edges of the wound.", true, "From overproduction of collagen.", F('keloid-ear', ["A keloid after ear piercing"])),
          O("Put the stages of wound healing in order", ["Blood clots", "Scab forms", "Healing tissue", "Scar forms"], 'clot ← scab ← granulation ← scar.'),
          P("Match each term to its meaning", [['crust', "scab"], ['granulation tissue', "Healing tissue"], ['cicatrix', "scar"], ['keloid', "excessive raised scar"]], "Words of healing."),
          B("The cell that makes the collagen of a scar is the ___.", ['fibroblast', 'melanocyte', 'lipocyte'], "fibr/o = fibre."),
          S("Spell the term for a raised scar that spreads beyond the wound", 'keloid', 'kel/o + -oid.', 'kel…'),
          N('sp:ly')
        ]
      },
      {
        id: 'ly9', title: "Drug Routes Through the Skin", icon: '💉', items: [
          L("How deep does the needle go?", `${fig('injection-routes', [], "Injection routes and needle angle")}${tbl([["Route", "Layer", "Angle"], [e('intradermal (ID)'), "dermis", "10 to 15 degrees"], [e('subcutaneous (SubQ)'), "subcutaneously", "45 degrees"], [e('intramuscular (IM)'), "muscle", "90 degrees"], [e('intravenous (IV)'), "vein", "25 degrees"]])}`),
          L("Needle-free: through the skin", `${e('<b>topical</b>')}: local, such as an ointment on the skin.<br>${e('<b>transdermal</b>')}: the drug passes through intact skin into the blood (nicotine patch).<br>${e('<b>percutaneous</b>')}: “through the skin” with a needle or tube.${memo("ID ← In Dermis; SubQ ← Sub Cutaneous; the steeper the angle, the deeper the needle.")}${pearl("Careful: ID on a prescription means intradermal, but I&D means incision and drainage!")}`),
          M("By which route is the TB test (PPD) injected?", ['intradermal', 'subcutaneous', 'intramuscular', 'intravenous'], "The Mantoux test is intradermal and raises a small bump."),
          M("By which route is insulin usually injected?", ['subcutaneous (SubQ)', 'intradermal (ID)', 'intravenous (IV)', 'topical'], "Subcutaneous at a 45-degree angle."),
          T("A medicated patch that delivers a drug through intact skin into the blood is transdermal.", true, "trans- = through."),
          O("Put the injection routes in order from shallow to deep", ['intradermal', 'subcutaneous', 'intramuscular'], "Dermis → subcutaneous → muscle."),
          P("Match each abbreviation to its meaning", [['ID', "into the skin"], ['SubQ', "subcutaneously"], ['IM', "intramuscularly"], ['IV', "intravenously"]], "Four injection routes."),
          W("Build a word meaning “through the skin” (with per-)", ['per-', 'cutane/o', '-ous'], ['sub-', 'derm/o', '-itis'], 'per- + cutane/o + -ous = percutaneous.'),
          S("Spell the term for a drug route through the skin, as with a patch", 'transdermal', 'trans- + derm/o + -al.', 'trans…'),
          N('ab:ly')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* درما — دنیای ۲: ضمائم پوست (مو، ناخن و غدد)
 * منابع: Accessory organs در total.txt و PDFهای پیوست (Hair، Nails، Sudoriferous and Sebaceous glands، Beau lines، Paronychia)
 * سطح ۱: مو • سطح ۲: ناخن • سطح ۳: غدد عرق و چربی
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ac', sym: 'Ac', name: "Skin Appendages", short: "Appendages", sub: "Hair and follicles, nails and their diseases, sweat and oil glands, acne and sweating",
    color: '#A0673A', dark: '#7A4A22', light: '#F6EBDF',
    levels: ["hair", "nail", "Skin glands"],
    gens: EA.genIds('ac'),
    lessons: [
      /* ================= سطح ۱: مو ================= */
      {
        id: 'ac1', title: "Anatomy of a hair", icon: '💇', items: [
          L("Where Does Hair Grow From?", `${fig('hair-anatomy', [], "Anatomy of a hair")}${e('<b>hair shaft</b>')}: the part outside the skin<br>${e('<b>hair root</b>')}: the part inside the skin<br>${e('<b>hair follicle</b>')}: a tube-like sac in the dermis from which the hair grows (follicul/o = small sac)<br>${e('<b>hair papilla</b>')}: a knot of vessels at the bottom of the follicle that feeds the hair bulb`),
          L("The hair-raising muscle", `The ${e('<b>arrector pili</b>')} is a tiny smooth muscle attached to the follicle. In cold or fear it contracts, stands the hair up and produces “goose bumps”.${memo("arrector sounds like “erect”: the muscle that stands the hair up.")}`),
          M("What is the visible part of the hair outside the skin called?", ['hair shaft', 'hair root', 'hair papilla', 'hair follicle'], "shaft = stem.", null, F('hair-anatomy', [])),
          M("Which structure feeds the hair bulb?", ['hair papilla', 'arrector pili', 'sebaceous gland', 'stratum corneum'], "The papilla is full of capillaries."),
          T("The arrector pili is a muscle that makes the hair stand up.", true, "True; that is what gives “goose bumps”."),
          O("Put the parts of a hair in order from bottom to tip", ['hair papilla', 'hair root', 'hair shaft'], "Nourishment at the bottom, the root inside the skin, the shaft outside."),
          P("Match each structure to its description", [['hair follicle', "sac the hair grows from"], ['hair root', "part inside the skin"], ['hair shaft', "part outside the skin"], ['arrector pili', "The hair-raising muscle"]], "The structure of a hair."),
          B("The tube-like sac that a hair grows from is called the ___.", ['hair follicle', 'hair papilla', 'nail matrix'], "follicul/o = small sac."),
          S("Spell the second word of the term for the sac a hair grows from", 'follicle', "follicul/o = small sac.", 'foll…'),
          N('t2f:ac')
        ]
      },
      {
        id: 'ac2', title: "Two roots for hair", icon: '🪮', items: [
          L("trich/o and pil/o", `Both mean “hair”:<br>${wb('trich/o', '-pathy')} → hair disease<br>${wb('trich/o', 'myc/o', '-osis')} → fungal infection of the hair<br>${wb('pil/o', 'nid/o', '-al')} → “hair nest”: ${e('pilonidal cyst')}, a hair-filled cyst over the tailbone`),
          L("Too little or too much hair", `${e('<b>alopecia</b>')}: hair loss, baldness; ${e('alopecia areata')} = patchy, coin-shaped hair loss.<br>${e('<b>hirsutism</b>')}: excess hair, especially a male pattern in women (hirsut/o = hairy).${vs(['alopecia', "too little hair: baldness"], ['hirsutism', "too much hair: hairiness"])}${pearl("In World War II the pilonidal cyst was called “jeep disease”; soldiers got it from sitting for long hours on hard jeep seats.")}`),
          M(`${e('<b>trichopathy</b>')} means…`, ["any hair disease", "hair loss", "hair removal", "inflammation of a follicle"], "trich/o (hair) + -pathy (disease)."),
          M("What is the medical term for hair loss or baldness?", ['alopecia', 'hirsutism', 'folliculitis', 'trichomycosis'], "alopecia areata = patchy hair loss."),
          T("Hirsutism means heavy hair growth, especially in a male pattern in women.", true, "hirsut/o = hairy."),
          W("Build a word meaning “fungal infection of the hair”", ['trich/o', 'myc/o', '-osis'], ['onych/o', '-itis', 'pil/o'], 'trich/o + myc/o + -osis = trichomycosis.'),
          P("Match each term to its meaning", [['alopecia', "hair loss"], ['hirsutism', "excessive hair in women"], ['trichopathy', "hair disease"], ['pilonidal cyst', "hairy cyst over the tailbone"]], "Words for hair."),
          B("The prefix or root ___, like trich/o, means “hair”.", ['pil/o', 'py/o', 'pedicul/o'], "pil/o = hair; py/o = pus."),
          S("Spell the term for hair loss", 'alopecia', "alopecia areata = patchy hair loss.", 'alo…'),
          N('m2r:ac')
        ]
      },
      {
        id: 'ac3', title: "Follicle Problems", icon: '🔴', items: [
          L("An inflamed follicle", `${e('<b>folliculitis</b>')}: inflammation of a hair follicle, usually from staphylococcus bacteria; small pus pimples around the hairs.<br>If the infection goes deeper → a ${e('<b>furuncle</b>')} (boil); several joined boils → a ${e('<b>carbuncle</b>')}.${fig('furuncle', ["Boil on the neck"], "Dome-shaped abscess of a hair follicle")}`),
          L("Order of severity", `${tbl([["area of damaged tissue", "Depth"], [e('folliculitis'), "superficial, around one hair"], [e('furuncle'), "abscess of one follicle"], [e('carbuncle'), "several joined follicles"]])}${memo("folliculitis → furuncle → carbuncle: “F, F, C”, like a pimple growing into a carbuncle.")}${pearl("Never squeeze a boil on the face; the infection may reach the sinuses of the brain.")}`),
          M("What is inflammation of a hair follicle called?", ['folliculitis', 'onychia', 'hidradenitis', 'cellulitis'], 'follicul/o + -itis.'),
          M("What are several joined boils called?", ['carbuncle', 'furuncle', 'pustule', 'comedo'], "carbuncle = cluster of boils."),
          T("A furuncle is a boil: a painful abscess of a hair follicle.", true, 'boil = furuncle.', F('furuncle', [])),
          O("Put the lesions in order from mild to severe", ['folliculitis', 'furuncle', 'carbuncle'], "One follicle → abscess → several follicles."),
          P("Match each term to its meaning", [['folliculitis', "inflammation of a follicle"], ['furuncle', "boil"], ['carbuncle', "cluster of boils"], ['staphylococcus', "cluster-forming bacterium"]], "Follicle infections."),
          B("The most common germ in a boil is ___.", ['staphylococcus', 'streptococcus', 'Candida'], "staphyl/o = cluster."),
          S("Spell the term for a boil", 'furuncle', 'furuncle = boil.', 'furu…'),
          N('sp:ac')
        ]
      },
      /* ================= سطح ۲: ناخن ================= */
      {
        id: 'ac4', title: "Anatomy of the nail", icon: '💅', items: [
          L("The nail from above and from the side", `${fig('nail-anatomy', [], "Anatomy of the nail")}The ${e('<b>nail body</b>')} (nail plate) sits on the ${e('<b>nail bed</b>')} (the pink bed).<br>${e('<b>lunula</b>')}: the white half-moon at the base of the nail (luna = moon).<br>${e('<b>cuticle</b>')} or ${e('eponychium')}: the band of skin at the nail base.<br>${e('<b>nail matrix</b>')}: the growth area beneath the nail root.`),
          L("Nail roots", `${e('onych/o')} (Greek) and ${e('ungu/o')} (Latin) both mean nail.<br>${wb('hypo-', 'onych/o', '-ium')} → ${e('hyponychium')}: the skin under the free edge<br>${wb('para-', 'onych/o', '-ia')} → ${e('paronychia')}: infection around the nail${memo("lunula = little moon; the nail has a “new moon” at its base.")}${pearl("The pink colour of the nail comes from the capillaries of the nail bed; that is why nails turn blue in cyanosis.")}`),
          M("What is the white half-moon at the base of the nail called?", ['lunula', 'cuticle', 'matrix', 'free edge'], "luna = moon.", null, F('nail-anatomy', [])),
          M("In which part is new nail made?", ['nail matrix', 'nail bed', 'free edge', 'lunula'], "matrix = growth area."),
          T("The pink colour of the nail comes from the capillaries of the nail bed.", true, "The nail bed is rich in vessels."),
          P("Match each part to its description", [['nail body', "visible plate of the nail"], ['nail bed', "skin under the nail"], ['cuticle', "skin band at the base"], ['free edge', "edge beyond the finger"]], "Parts of the nail."),
          B("Another name for the cuticle is ___.", ['eponychium', 'hyponychium', 'paronychium'], "epi- (upon) + onych/o."),
          W("Build a word meaning “nail disease”", ['onych/o', '-pathy'], ['trich/o', '-oma', '-itis'], 'onych/o + -pathy = onychopathy.'),
          S("Spell the term for the white half-moon at the nail base", 'lunula', "luna = moon + -ula (small).", 'lun…'),
          N('f2t:ac')
        ]
      },
      {
        id: 'ac5', title: "Nail Diseases", icon: '🦶', items: [
          L("onych/o + suffix", `${tbl([["Term", "Meaning"], [e('onychia'), "inflammation of the nail bed"], [e('paronychia'), "infection of the skin fold around the nail"], [e('onychomycosis'), "nail fungus (tinea unguium)"], [e('onychocryptosis'), "nail grown into the flesh"], [e('onychomalacia'), "Softening of the nail"], [e('onycholysis'), "nail separating from its bed"], [e('onychophagia'), "nail biting"]])}${fig('paronychia', ["Paronychia"], "Infection and inflammation of the skin folds around the nail")}`),
          L("The nail, mirror of the body", `${fig('beau-lines', ["Beau lines"], "Transverse nail groove after a severe illness")}${e('<b>Beau lines</b>')}: transverse grooves in the nails that appear after a severe illness (or chemotherapy); nail growth stopped for a while.${memo("onychocryptosis = a nail “hidden” (crypt/o) in the flesh, like treasure hidden in a crypt.")}`),
          M(`${e('<b>onychocryptosis</b>')} means…`, ["nail grown into the flesh", "nail fungus", "Softening of the nail", "nail biting"], "crypt/o = hidden."),
          M("What is infection of the skin fold around the nail?", ['paronychia', 'onychia', 'onycholysis', 'onychomalacia'], "para- = beside.", null, F('paronychia', [])),
          T("Onychophagia means the habit of nail biting.", true, "-phagia = eating."),
          W("Build a word meaning “softening of the nail”", ['onych/o', '-malacia'], ['-lysis', 'trich/o', '-phagia'], 'onych/o + -malacia = onychomalacia.'),
          P("Match each term to its meaning", [['onychomycosis', "nail fungus"], ['onycholysis', "nail separation"], ['onychophagia', "nail biting"], ['Beau lines', "transverse groove after illness"]], "Nail diseases."),
          B("The Latin name for nail fungus is tinea ___.", ['unguium', 'pedis', 'capitis'], "ungu/o = nail."),
          S("Spell the term for fungal infection of the nail", 'onychomycosis', 'onych/o + myc/o + -osis.', 'onycho…'),
          N('wb:ac')
        ]
      },
      {
        id: 'ac6', title: "Nail Surgery and Clinic", icon: '🩺', items: [
          L("Cutting or removing", `${vs(['onychotomy', "cutting into the nail (-tomy)"], ['onychectomy', "removing the nail (-ectomy)"])}For a recurrent ingrown nail, part of the nail and its matrix are sometimes removed so that it does not grow into the flesh again.`),
          L("When should we take the nail seriously?", `• Blue nail bed → lack of oxygen (${e('cyanosis')})<br>• Transverse lines → a recent severe illness (${e('Beau lines')})<br>• Thick, yellow and brittle → fungus (${e('onychomycosis')})<br>• Redness and pus around the nail → ${e('paronychia')}${pearl("To diagnose nail fungus, nail scrapings are examined with potassium hydroxide (KOH) under the microscope.")}`),
          M(`${e('<b>onychectomy</b>')} means…`, ["Removal of the nail", "cutting into a nail", "nail repair", "nail inflammation"], "-ectomy = removal."),
          M("What is a thick, yellow, brittle nail most often a sign of?", ['onychomycosis', 'Beau lines', "acute paronychia", 'onychophagia'], "Nail fungus."),
          T("Onychotomy means complete removal of a nail.", false, "False; -tomy is incision. Removal = onychectomy."),
          O("Put the steps of diagnosing and treating nail fungus in order", ["Clinical suspicion: thick, yellow nail", "Nail scraping for KOH", "Seeing the fungus under the microscope", "Treatment with an antifungal"], "Lab diagnosis before treatment."),
          P("Match each finding to its meaning", [["blue nail", "lack of oxygen"], ["transverse groove", "recent severe illness"], ["yellow, thick nail", "fungus (yeast or mould)"], ["redness around the nail", "Paronychia"]], "The nail, mirror of the body."),
          B("Cutting into a nail is called ___.", ['onychotomy', 'onychectomy', 'onycholysis'], 'onych/o + -tomy.'),
          S("Spell the term for removal of a nail", 'onychectomy', 'onych/o + -ectomy.', 'onyche…'),
          N('d2t:ac')
        ]
      },
      /* ================= سطح ۳: غدد پوست ================= */
      {
        id: 'ac7', title: "Sweat glands", icon: '💦', items: [
          L("Two kinds of sweat gland", `${fig('sweat-glands', [], "Eccrine and apocrine")}${e('<b>sudoriferous gland</b>')} = sweat gland (sudor/o = sweat).<br>• ${e('<b>eccrine</b>')}: all over the body; opens directly onto a ${e('pore')} and cools the body.<br>• ${e('<b>apocrine</b>')}: armpit and groin; opens into a hair follicle and is active from puberty.<br>• ${e('ceruminous gland')}: a modified sweat gland of the ear that makes earwax (${e('cerumen')}).`),
          L("Roots for sweat", `${e('hidr/o')} and ${e('sudor/o')} = sweat.<br>${wb('hyper-', 'hidr/o', '-osis')} heavy sweating • ${wb('an-', 'hidr/o', '-osis')} no sweating • ${wb('brom/o', 'hidr/o', '-osis')} foul-smelling sweat<br>${e('<b>diaphoresis</b>')} = profuse sweating (dia- + -phoresis)${memo("Once more: hidr/o with i = sweat; hydr/o with y = water.")}${pearl("Profuse cold sweating with chest pain (diaphoresis) is a warning sign of a heart attack.")}`),
          M("The sweat gland found all over the body that opens directly onto a pore?", ['eccrine gland', 'apocrine gland', 'sebaceous gland', 'ceruminous gland'], "Eccrine = the body’s cooler.", null, F('sweat-glands', [])),
          M(`${e('<b>diaphoresis</b>')} means…`, ["profuse sweating", "no sweating", "foul-smelling sweat", "oil secretion"], "dia- + -phoresis; synonym sudoresis."),
          T("Apocrine glands become active at puberty and are plentiful in the armpits.", true, "Sweat odour comes from bacteria breaking down their secretion."),
          W("Build a word meaning “absence of sweating”", ['an-', 'hidr/o', '-osis'], ['hyper-', 'seb/o', '-rrhea'], 'an- + hidr/o + -osis = anhidrosis.'),
          P("Match each term to its meaning", [['hyperhidrosis', "heavy sweating"], ['anhidrosis', "no sweating"], ['bromhidrosis', "foul-smelling sweat"], ['hidradenitis', "inflammation of the sweat glands"]], "hidr/o = sweat."),
          B("The gland that makes earwax is called the ___.", ['ceruminous gland', 'sebaceous gland', 'eccrine gland'], "cerumen = earwax."),
          S("Spell the term for profuse sweating", 'diaphoresis', 'dia- + -phoresis.', 'diapho…'),
          N('r2m:ac')
        ]
      },
      {
        id: 'ac8', title: "Oil Glands and Sebum", icon: '🫒', items: [
          L("The skin’s natural oil", `The ${e('<b>sebaceous gland</b>')} is the oil gland of the dermis, which releases ${e('<b>sebum</b>')} into the hair follicle (seb/o = skin oil).<br>Sebum keeps the skin and hair soft and waterproof and is slightly antimicrobial.<br>${wb('seb/o', '-rrhea')} → ${e('seborrhea')}: excess oil secretion`),
          L("When the pore gets blocked", `${fig('acne-steps', [], "From a healthy follicle to a pimple")}Sebum and keratin get stuck in the follicle → ${e('<b>comedo</b>')} (plural: ${e('comedones')}):<br>• closed = whitehead<br>• open = blackhead; the black comes from oxidised melanin, not dirt!${memo("Think of seb/o as oily soap: sebum is the skin’s natural oil.")}`),
          M("What is the gland that makes sebum called?", ['sebaceous gland', 'sudoriferous gland', 'apocrine gland', 'lacrimal gland'], "seb/o = sebum."),
          M(`What is ${e('<b>comedo</b>')}?`, ["a plug of sebum and keratin in a follicle (blackhead or whitehead)", "small blister", "hairy cyst", "pigmented mole"], "Plural: comedones.", null, F('acne-steps', [])),
          T("The black of a blackhead comes from dirt and dust.", false, "False; it comes from oxidised melanin and oil in the open mouth of the follicle."),
          O("Put the stages of pimple formation in order", ["Excess sebum secretion", "Blocked follicle opening (comedo)", "Bacterial growth", "Inflammation and a pustule"], "Sebum → plug → bacteria → pus."),
          W("Build a word meaning “excess secretion of skin oil”", ['seb/o', '-rrhea'], ['hidr/o', '-osis', '-oma'], 'seb/o + -rrhea = seborrhea.'),
          P("Match each term to its meaning", [['sebum', "skin oil"], ['seborrhea', "excess oil secretion"], ['blackhead', "open comedo"], ['whitehead', "closed comedo"]], "Words of the oil glands."),
          S("Spell the term for the skin’s natural oil", 'sebum', 'seb/o + -um.', 'seb…'),
          N('t2f:ac')
        ]
      },
      {
        id: 'ac9', title: "Appendages Summary", icon: '🧺', items: [
          L("All the appendages at a glance", `${tbl([["Appendage", "root", "Example disease"], ["hair", e('trich/o, pil/o'), e('alopecia, folliculitis')], ["nail", e('onych/o, ungu/o'), e('onychomycosis, paronychia')], ["gland that makes sweat", e('hidr/o, sudor/o'), e('hyperhidrosis')], ["oil gland", e('seb/o'), e('seborrhea, acne')]])}`),
          L("Sweat or oil?", `${vs(['sudoriferous gland', "watery sweat; cools the body; opens onto a pore"], ['sebaceous gland', "oily sebum; softens the skin; opens into a follicle"])}${pearl("In a full-thickness burn the follicles and sweat glands are destroyed; grafted skin does not sweat and has no hair.")}`),
          M("Which pair of roots has the same meaning?", ["hidr/o and sudor/o", "hidr/o and hydr/o", "pil/o and py/o", "onych/o and onc/o"], "Both mean sweat."),
          M("Where does the oil gland release its secretion?", ["hair sac", "Directly onto a skin pore", "blood", "Lymph nodes"], "Sebum reaches the surface through the follicle."),
          T("ungu/o and onych/o both mean nail.", true, "One is Latin and the other Greek."),
          P("Match each appendage to its root", [["hair", 'trich/o'], ["nail", 'onych/o'], ["sweat", 'hidr/o'], ["skin oil", 'seb/o']], "Four roots of the appendages."),
          M("A patient complains of “heavy sweating of the palms that disrupts daily work”. The right term?", ['hyperhidrosis', 'seborrhea', 'anhidrosis', 'hirsutism'], 'hyper- + hidr/o + -osis.'),
          B("Inflammation of the sweat glands is ___.", ['hidradenitis', 'folliculitis', 'onychia'], "hidr/o + aden/o (gland) + -itis."),
          S("Spell the first word of the term for an oil gland", 'sebaceous', "seb/o + -aceous (pertaining to).", 'seba…'),
          N('ab:ac')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* درما — دنیای ۳: ضایعه‌ها و نشانه‌ها
 * منابع: Skin lesions (Box 4-2، Figure 3-7 تا 3-16)، Symptoms and signs در total.txt و PDFهای پیوست
 * سطح ۱: ضایعه‌های اولیه مسطح و برجسته • سطح ۲: مایع، ثانویه و فرورفته • سطح ۳: رنگ‌ها و نشانه‌ها
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'le', sym: 'Le', name: "Lesions and signs", short: "Lesions", sub: "Macule to tumour, blisters and pus, crusts and ulcers, skin colours, bleeding under the skin and itching",
    color: '#D48A00', dark: '#A56A00', light: '#FFF4D6',
    levels: ["Primary lesions", "Fluid-filled, secondary and sunken", "Colours and signs"],
    gens: EA.genIds('le'),
    lessons: [
      /* ================= سطح ۱: ضایعه‌های اولیه ================= */
      {
        id: 'le1', title: "What is a lesion?", icon: '🔎', items: [
          L("Any Abnormal Change", `A ${e('<b>lesion</b>')} is any wound, injury or abnormal change in tissue, from a spot to an ulcer.<br>• ${e('<b>primary lesion</b>')}: the first change that appears on healthy skin (macule, papule, blister…)<br>• ${e('<b>secondary lesion</b>')}: develops from a primary lesion through scratching, healing or infection (crust, scale, scar…)`),
          L("Three questions for every lesion", `1. <b>Flat, raised or sunken?</b><br>2. <b>Solid or fluid-filled?</b><br>3. <b>Smaller or larger than 1 cm?</b>${fig('size-rule', [], "The one-centimetre line")}${memo("You have three keys for describing any lesion: surface, contents, size.")}`),
          M("What kind of lesion is a crust that formed after a blister was scratched?", ['secondary lesion', 'primary lesion', 'systemic lesion', 'vascular lesion'], "It came from a change in a primary lesion."),
          M("What is the size cut-off between a macule and a patch?", ["1 cm", "1 mm", "5 cm", "10 cm"], "Under 1 cm is a macule, above it a patch.", null, F('size-rule', [])),
          T("Macules and papules are both primary lesions.", true, "Both appear directly on healthy skin."),
          P("Match each lesion to its type", [['macule', "primary, flat"], ['papule', "primary, raised"], ['crust', "secondary"], ['ulcer', "sunken"]], "Surface and order of appearance."),
          B("A lesion that develops from a change in another lesion is called a ___.", ['secondary lesion', 'primary lesion', 'macule'], "Secondary."),
          O("Put the lesions in order from small to large", ['papule', 'nodule', 'tumor'], "Under 1 cm → 1 to 2 cm → over 2 cm."),
          S("Spell the term for any abnormal area of damaged tissue", 'lesion', "lesion = a wound or abnormal change.", 'les…'),
          N('t2f:le')
        ]
      },
      {
        id: 'le2', title: "Flat lesions", icon: '🟤', items: [
          L("Only the Colour Changes", `${fig('lesions-flat', [], "Flat lesions")}${e('<b>macule</b>')}: a flat, discoloured spot smaller than 1 cm (a freckle).<br>${e('<b>patch</b>')}: a flat spot larger than 1 cm (vitiligo).<br>On touch its border cannot be felt; it can only be seen.`),
          L("Examples", `${fig(['vitiligo-legs', 'nevus-face'], ["Vitiligo: white patches", "Moles on the face"], "Clinical examples")}${memo("macule: small and smooth; patch: a big “patch” of cloth.")}${pearl("Check any new macule or mole with several colours and an irregular border using the ABCDE criteria.")}`),
          M("What is a flat brown 4 mm spot on the face called?", ['macule', 'patch', 'papule', 'plaque'], "Flat and under 1 cm."),
          M("What type are the large white patches of vitiligo?", ['patch', 'papule', 'wheal', 'vesicle'], "Flat and larger than 1 cm.", null, F('vitiligo-legs', ["Vitiligo"])),
          T("A raised bump can be felt when you touch a macule.", false, "False; a macule is completely flat."),
          P("Match each lesion to its example", [['macule', "freckle"], ['patch', "Vitiligo"], ['petechiae', "pinpoint bleeding spots"], ['nevus', "mole"]], "Flat, coloured lesions."),
          B("A flat spot larger than 1 cm is called a ___.", ['patch', 'macule', 'plaque'], "patch = a piece of cloth."),
          M("What is the difference between a macule and a patch?", ["measure", "colour", "Raised surface", "Fluid content"], "Both are flat; the line is 1 cm."),
          S("Spell the term for a small flat spot", 'macule', "macule = small spot.", 'mac…'),
          N('f2t:le')
        ]
      },
      {
        id: 'le3', title: "Raised, solid lesions", icon: '⛰️', items: [
          L("From Papule to Tumour", `${fig('lesions-raised', [], "Raised lesions")}${tbl([["area of damaged tissue", "Feature"], [e('papule'), "raised and solid, under 1 cm"], [e('plaque'), "raised and flat-topped, over 1 cm (psoriasis)"], [e('nodule'), "solid and deeper, 1 to 2 cm"], [e('tumor'), "solid mass over 2 cm"], [e('wheal'), "passing, itchy swelling (hives)"], [e('polyp'), "growth on a stalk"]])}`),
          L("Hives: here and gone", `A ${e('<b>wheal</b>')} is a smooth, slightly raised swelling that comes and goes within hours, like a mosquito bite or allergic hives (${e('urticaria')}).${fig('urticaria', ["Hives"], "Scattered wheals in hives")}${memo("A plaque is like a car number plate: flat and broad.")}`),
          M("What is a 5 mm solid bump?", ['papule', 'nodule', 'plaque', 'vesicle'], "Solid and under 1 cm."),
          M("What are the flat, broad, scaly lesions of psoriasis called?", ['plaque', 'papule', 'bulla', 'wheal'], "Raised, flat-topped and larger than 1 cm.", null, F('psoriasis-knee', ["Psoriasis of the knee"])),
          T("A wheal is a lasting lesion that stays unchanged for weeks.", false, "False; a wheal is passing and usually goes within a few hours."),
          O("Put these solid lesions in order from small to large", ['papule', 'nodule', 'tumor'], "Under 1, 1 to 2, over 2 centimetres."),
          P("Match each lesion to its description", [['papule', "small solid bump"], ['plaque', "broad, flat-topped bump"], ['nodule', "deeper lump"], ['wheal', "passing itchy swelling"]], "Raised lesions."),
          B("A growth that projects from the surface on a stalk is a ___.", ['polyp', 'plaque', 'macule'], "polyp = a growth on a stalk."),
          S("Spell the term for a small solid raised bump", 'papule', "papule = small bump.", 'pap…'),
          N('d2t:le')
        ]
      },
      /* ================= سطح ۲: مایع، ثانویه و فرورفته ================= */
      {
        id: 'le4', title: "Blisters, Pus and Cysts", icon: '💧', items: [
          L("Fluid-filled lesions", `${fig('lesions-fluid', [], "Fluid-filled lesions")}${e('<b>vesicle</b>')}: a small blister with clear fluid, under 1 cm (vesic/o = sac)<br>${e('<b>bulla</b>')}: a large blister, over 1 cm (plural: bullae)<br>${e('<b>pustule</b>')}: a small bump full of pus<br>${e('<b>cyst</b>')}: a closed sac filled with fluid or semisolid material<br>${e('<b>abscess</b>')}: a cavity full of pus with inflamed tissue around it`),
          L("Clinical examples", `${fig(['burn-blisters', 'pemphigus'], ["Second-degree burn blister", "Pemphigus: bullae"], "Large blisters")}${memo("vesicle is a little “vessel” or sac; bulla is like a “balloon”: a big sac.")}${pearl("Cloudy yellow, pus-like fluid means infection; clear fluid is seen more in burns, cold sores and chickenpox.")}`),
          M("What is a blister larger than 1 cm called?", ['bulla', 'vesicle', 'pustule', 'papule'], "bulla = large blister.", null, F('burn-blisters', ["Burn blister"])),
          M("What is a small bump full of pus?", ['pustule', 'vesicle', 'cyst', 'wheal'], "pustule = pus pimple."),
          T("A vesicle is a small blister full of clear fluid.", true, "vesic/o = sac."),
          O("Put the stages of abscess formation in order", ["Bacteria enter the skin", "Inflammation and an influx of white blood cells", "Pus collects in a cavity (abscess)", "Incision and drainage (I&D)"], "Infection → inflammation → pus → drainage."),
          P("Match each lesion to its contents", [['vesicle', "clear fluid (small)"], ['pustule', "pus"], ['cyst', "closed sac"], ['hematoma', "blood clot"]], "Fluid-filled lesions."),
          B("A cavity full of pus with inflamed tissue around it is called an ___.", ['abscess', 'cyst', 'bulla'], "Usual treatment: I&D."),
          S("Spell the term for a small blister", 'vesicle', 'vesic/o + -le.', 'vesi…'),
          N('t2f:le')
        ]
      },
      {
        id: 'le5', title: "Secondary lesions", icon: '🍂', items: [
          L("After Scratching and Healing", `${fig('lesions-secondary', [], "Secondary and sunken lesions")}${e('<b>crust</b>')}: a scab; dried serum, blood or pus<br>${e('<b>scale</b>')}: thin flakes of dead epidermis<br>${e('<b>lichenification</b>')}: thick, leathery skin with deep lines from long scratching<br>${e('<b>excoriation</b>')}: a linear scratch<br>${e('<b>keloid</b>')}: a raised scar beyond the edge of the wound`),
          L("Examples", `${fig(['lichenification', 'impetigo-nose'], ["Lichenification of the ankle", "Honey-coloured crust of impetigo"], "Secondary lesions")}${memo("lichen = the lichen on a rock: thick, lined skin like lichen.")}${pearl("A “honey-coloured” crust around a child’s nose and mouth = impetigo; it is contagious.")}`),
          M("What is thick, leathery skin from long scratching called?", ['lichenification', 'excoriation', 'keloid', 'scale'], "In chronic eczema.", null, F('lichenification', [])),
          M("What is a linear scratch from a fingernail?", ['excoriation', 'fissure', 'erosion', 'ulcer'], "ex- + cori (skin) + -ation."),
          T("Scale means thin flakes of dead epidermis, like dandruff.", true, "In psoriasis the scales are silvery."),
          P("Match each term to its meaning", [['crust', "scab"], ['scale', "flakes"], ['excoriation', "scratch"], ['keloid', "raised scar"]], "Secondary lesions."),
          O("Put the events in order", ["itchy skin", "Scratching", 'excoriation', 'crust'], "Itch → scratch → crust."),
          B("A raised scar that goes beyond the edge of the wound is a ___.", ['keloid', 'cicatrix', 'crust'], 'kel/o + -oid.'),
          S("Spell the term for a linear scratch mark", 'excoriation', 'ex- + cori + -ation.', 'excor…'),
          N('sp:le')
        ]
      },
      {
        id: 'le6', title: "Cracks, Ulcers and Hollows", icon: '🕳️', items: [
          L("Sunken lesions", `${e('<b>fissure</b>')}: a deep, linear crack (athlete’s foot, chapped lips)<br>${e('<b>erosion</b>')}: superficial loss of the epidermis; heals without a scar<br>${e('<b>ulcer</b>')}: an open sore reaching the dermis or deeper; heals with a scar<br>${e('<b>atrophy</b>')}: thinning and sinking of the skin${vs(['erosion', "epidermis only; no scar"], ['ulcer', "into the dermis or deeper; with a scar"])}`),
          L("Ulcers at the bedside", `${fig(['stasis-ulcer', 'decubitus-ulcer'], ["Venous ulcer of the ankle", "pressure sore"], "Two common chronic ulcers")}${memo("fissure as in a rock “fissure” = a split; ulcer as in “stomach ulcer” = an open sore.")}`),
          M("What is a deep, linear crack in the skin called?", ['fissure', 'erosion', 'excoriation', 'ulcer'], "fissure = split."),
          M("What is an open sore that reaches the dermis?", ['ulcer', 'erosion', 'macule', 'crust'], "A deep ulcer heals with a scar.", null, F('stasis-ulcer', ["Venous ulcer"])),
          T("An erosion usually heals without a scar.", true, "Because it involves only the epidermis."),
          P("Match each lesion to its description", [['fissure', "deep linear crack"], ['erosion', "superficial loss of epidermis"], ['ulcer', "sore down to the dermis"], ['atrophy', "thinning of the skin"]], "Sunken lesions."),
          O("Put the stages of a pressure sore in order from shallow to deep", ["Stage 1: persistent redness", "Stage 2: shallow sore", "Stage 3: down to fatty tissue", "Stage 4: down to muscle and bone"], "Each stage is one layer deeper."),
          B("Thin, shiny, sunken skin is called ___.", ['atrophy', 'hypertrophy', 'keloid'], 'a- + -trophy.'),
          S("Spell the term for an open sore reaching the dermis", 'ulcer', "ulcer = open sore.", 'ulc…'),
          N('m2r:le')
        ]
      },
      /* ================= سطح ۳: رنگ‌ها و نشانه‌ها ================= */
      {
        id: 'le7', title: "Skin Colours", icon: '🌈', items: [
          L("Five warning colours", `${tbl([["Term", "Colour and cause"], [e('erythema'), "<b>Red</b>: widened capillaries (inflammation, sun)"], [e('cyanosis'), "<b>Blue</b>: low blood oxygen"], [e('pallor'), "<b>Pale</b>: anaemia, shock"], [e('jaundice'), "<b>Yellow</b>: high bilirubin (liver)"], [e('hyperpigmentation'), "<b>Dark</b>: more melanin"]])}`),
          L("erythema and erythematous", `${e('<b>erythema</b>')} is a noun (redness) and ${e('<b>erythematous</b>')} an adjective (red): “an erythematous plaque”.<br>${e('<b>hyperpigmentation</b>')} versus ${e('<b>depigmentation</b>')}: more colour or loss of colour.${fig('age-spots', ["Age spots"], "Darkening of the skin with age and sun")}${pearl("Look for jaundice first in the whites of the eyes; in dark skin it shows there before the skin.")}`),
          M("What is redness of the skin from widened capillaries called?", ['erythema', 'cyanosis', 'pallor', 'jaundice'], "erythem/o = red."),
          M("A patient with blue lips and nails; which term?", ['cyanosis', 'erythema', 'jaundice', 'pallor'], "cyan/o = blue; lack of oxygen."),
          T("Jaundice means yellowing of the skin and eyes from high bilirubin.", true, "jaund/o = yellow."),
          W("Build a word meaning “darkening of the skin”", ['hyper-', 'pigment/o', '-ation'], ['de-', 'melan/o', '-oma'], 'hyper- + pigment + -ation.'),
          P("Match each colour to its term", [["red", 'erythema'], ["blue", 'cyanosis'], ["Pale", 'pallor'], ["yellow", 'jaundice']], "Skin colours."),
          B("The adjective for a “red” skin lesion is ___.", ['erythematous', 'erythema', 'erythrocyte'], 'erythemat/o + -ous.'),
          S("Spell the term for paleness", 'pallor', "pallor = paleness.", 'pal…'),
          N('wb:le')
        ]
      },
      {
        id: 'le8', title: "Bleeding under the skin", icon: '🩸', items: [
          L("From Dot to Mass", `${fig('bleed-spots', [], "Bleeding under the skin")}${e('<b>petechiae</b>')}: tiny red or purple dots (singular: petechia)<br>${e('<b>purpura</b>')}: larger purple patches<br>${e('<b>ecchymosis</b>')}: a large blue and purple bruise<br>${e('<b>hematoma</b>')}: a raised clot of blood under the skin (hemat/o = blood, -oma = mass)`),
          L("Clinical examples", `${fig(['petechiae', 'purpura-hand'], ["tiny dots", "Purpura on the hand"], "Dots and patches")}${e('<b>contusion</b>')} = a bruise: an injury that does not break the skin.${memo("From small to large: petechiae → purpura → ecchymosis; a hematoma is raised.")}${pearl("Petechiae do not fade under finger pressure; this simple test tells them apart from red rashes.")}`),
          M("What are tiny red dots from bleeding under the skin called?", ['petechiae', 'purpura', 'ecchymosis', 'erythema'], "Singular: petechia.", null, F('petechiae', [])),
          M("What is a large blue and purple bruise after a blow?", ['ecchymosis', 'petechiae', 'hematoma', 'cyanosis'], 'ecchymosis = bruise.'),
          T("A hematoma is a collection of clotted blood that forms a swelling.", true, 'hemat/o + -oma.'),
          O("Put these lesions in order from small to large", ['petechiae', 'purpura', 'ecchymosis'], "Dot → patch → large bruise."),
          P("Match each term to its meaning", [['petechiae', "pinpoint bleeding spots"], ['purpura', "purple patches"], ['ecchymosis', "large bruise"], ['contusion', "bruise"]], "Bleeding under the skin."),
          W("Build a word meaning “mass of blood”", ['hemat/o', '-oma'], ['-itis', 'melan/o', 'cyan/o'], 'hemat/o + -oma = hematoma.'),
          S("Spell the term for a large bruise", 'ecchymosis', 'ecchymosis = bruise.', 'ecchy…'),
          N('t2f:le')
        ]
      },
      {
        id: 'le9', title: "Itching, Hives and Discharge", icon: '🤚', items: [
          L("Common signs", `${e('<b>pruritus</b>')}: itching; its adjective is ${e('pruritic')}<br>${e('<b>urticaria</b>')}: hives; itchy wheals, usually allergic<br>${e('<b>rash</b>')} or ${e('exanthem')}: skin eruption<br>${e('<b>edema</b>')}: swelling from excess fluid in the tissue<br>${e('<b>induration</b>')}: hardening of tissue (when reading a TB test)`),
          L("Wound discharge", `${e('<b>exudate</b>')}: fluid, cells or pus that come out of a wound.<br>${e('<b>purulent</b>')}: pus-filled (pur/o = pus).${vs(['pruritus', "itching (a symptom)"], ['urticaria', "hives (a lesion and a disease)"])}${pearl("An anti-itch drug is an antipruritic; be careful not to confuse it with an antipyretic (fever reducer)!")}`),
          M("What is the medical term for intense itching?", ['pruritus', 'urticaria', 'edema', 'erythema'], "prurit/o = itching."),
          M("How is wound discharge full of pus described?", ['purulent', 'pruritic', 'erythematous', 'squamous'], "pur/o (pus) + -ulent (full of)."),
          T("Urticaria is hives and is usually an allergic reaction.", true, "Itchy wheals.", F('urticaria', ["Hives"])),
          P("Match each term to its meaning", [['pruritus', "itching"], ['edema', "swelling"], ['exudate', "Wound discharge"], ['induration', "hardened area"]], "Skin signs."),
          W("Build a word meaning “anti-itch drug”", ['anti-', 'prurit/o', '-ic'], ['-itis', 'pyret/o', 'derm/o'], 'anti- + prurit/o + -ic = antipruritic.'),
          B("The adjective for “itchy” is ___.", ['pruritic', 'purulent', 'pyretic'], 'prurit/o + -ic.'),
          S("Spell the term for itching", 'pruritus', 'prurit/o + -us.', 'prur…'),
          N('ab:le')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* درما — دنیای ۴: بیماری‌های پوست
 * منابع: Pathological conditions در total.txt و PDFهای پیوست (Infections، Dermatitis، Psoriasis، Acne، SLE، Burns، Rule of nines،
 * Pressure ulcer و Case Study: Kathleen's Pressure Ulcer)
 * سطح ۱: عفونت‌ها و انگل‌ها • سطح ۲: التهاب و خودایمنی • سطح ۳: سوختگی و زخم
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ds', sym: 'Ds', name: "Skin Diseases", short: "Diseases", sub: "Bacterial, fungal and viral infections, parasites, eczema and psoriasis, acne, lupus, burns and pressure sores",
    color: '#C8423C', dark: '#9A2C28', light: '#FDE5E3',
    levels: ["Infections and parasites", "Inflammation and autoimmunity", "Burns and ulcers"],
    gens: EA.genIds('ds'),
    lessons: [
      /* ================= سطح ۱: عفونت‌ها و انگل‌ها ================= */
      {
        id: 'ds1', title: "Bacterial Infections", icon: '🦠', items: [
          L("Impetigo and cellulitis", `${e('<b>impetigo</b>')}: a highly contagious bacterial infection (staph or strep); pustules that burst and form <b>honey-coloured crusts</b>, often around children’s noses and mouths.<br>${e('<b>cellulitis</b>')}: infection of the dermis and subcutaneous tissue; red, warm, swollen and painful skin.${fig(['impetigo-nose', 'impetigo-lips'], ["Impetigo beside the nose", "Impetigo around the lips"], "Honey-coloured crusts")}`),
          L("Two famous bacteria", `${e('<b>staphylococcus</b>')} (staph): round bacteria in <b>clusters</b> (staphyl/o = bunch of grapes)<br>${e('<b>streptococcus</b>')} (strep): round bacteria in <b>chains</b> (strept/o = twisted, chain)<br>${e('<b>MRSA</b>')}: methicillin-resistant Staphylococcus aureus; does not respond to many antibiotics.${pearl("To choose the right antibiotic, a “culture and sensitivity” (C&S) is taken from the wound discharge.")}`),
          M("Honey-coloured crusts around a child’s nose are a sign of which disease?", ['impetigo', 'cellulitis', 'scabies', 'psoriasis'], "Impetigo is highly contagious.", null, F('impetigo-nose', ["Impetigo"])),
          M("What is an infection of the dermis and subcutaneous tissue with red, warm, painful skin?", ['cellulitis', 'impetigo', 'folliculitis', 'eczema'], 'cellul/o + -itis.'),
          T("Staphylococci are bacteria in chains.", false, "False; staph is in clusters and strep in chains."),
          P("Match each term to its meaning", [['impetigo', "crusted, honey-coloured skin infection"], ['cellulitis', "soft-tissue infection"], ['abscess', "pus-filled cavity"], ['MRSA', "antibiotic-resistant staph"]], "Bacterial infections."),
          B("The usual treatment for an abscess is ___.", ['incision and drainage (I&D)', 'cryotherapy', 'phototherapy'], "Incision and drainage of the pus."),
          M("C&S in a chart means…", ["culture and sensitivity", "squamous cell carcinoma", "incision and drainage", "biopsy"], 'culture and sensitivity.'),
          S("Spell the term for a contagious crusting skin infection", 'impetigo', "impetigo = a contagious bacterial infection.", 'impe…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds2', title: "Fungal Infections", icon: '🍄', items: [
          L("Ringworm: a ring that is not a worm", `${e('<b>tinea</b>')} is a fungal infection of the skin, hair or nails, also called ${e('ringworm')}; but there is no worm at all! Red rings with a paler centre.${fig('tinea-sites', [], "tinea + the Latin name of the site")}`),
          L("Name the site", `${tbl([["Name", "Site"], [e('tinea capitis'), "head"], [e('tinea corporis'), "body"], [e('tinea cruris'), "groin"], [e('tinea pedis'), "foot (athlete’s foot)"], [e('tinea unguium'), "nail"], [e('tinea versicolor'), "discoloured patches of the trunk"]])}${e('<b>candidiasis</b>')}: a candida yeast infection in moist places; in the mouth it is “thrush”.${memo("capitis = captain (head); pedis = pedal (foot); corporis = corporal (body).")}`),
          M("What is athlete’s foot in medical terms?", ['tinea pedis', 'tinea capitis', 'tinea cruris', 'tinea corporis'], "pedis = foot.", null, F('tinea-sites', [])),
          M("Which one is red rings with a pale centre on the trunk?", ['tinea corporis', 'psoriasis', 'urticaria', 'vitiligo'], "Ringworm of the body.", null, F('tinea-corporis', ["ringworm of the body"])),
          T("Ringworm is caused by a parasitic worm.", false, "False; it is caused by a fungus and only has a ring shape."),
          W("Build a word meaning “fungal skin infection”", ['dermat/o', 'myc/o', '-osis'], ['onych/o', '-itis', 'trich/o'], 'dermat/o + myc/o + -osis = dermatomycosis.'),
          P("Match each name to its site", [['tinea capitis', "head"], ['tinea cruris', "groin"], ['tinea pedis', "foot"], ['tinea unguium', "nail"]], "tinea + the Latin name of the site."),
          B("The yeast infection that causes thrush in the mouth is ___.", ['candidiasis', 'impetigo', 'pediculosis'], 'candid/o + -iasis.'),
          S("Spell the term for a fungal ringworm infection", 'tinea', 'tinea = ringworm.', 'tin…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds3', title: "Viruses and Parasites", icon: '🐛', items: [
          L("Skin viruses", `${e('<b>verruca</b>')}: a wart; from the human papillomavirus (${e('HPV')})<br>${e('<b>herpes simplex</b>')}: a cold sore; painful vesicles on the lip (${e('HSV')})<br>${e('<b>varicella</b>')}: chickenpox; itchy vesicles that crust over<br>${e('<b>herpes zoster</b>')}: shingles; reactivation of the chickenpox virus (${e('VZV')}) along a nerve${fig('varicella', ["chickenpox"], "Rash crusting over")}`),
          L("Parasites", `${e('<b>scabies</b>')}: a tiny mite that tunnels under the skin and causes intense itching at night.<br>${e('<b>pediculosis</b>')}: lice infestation (pedicul/o = louse); lice eggs (nits) stick to the hair.${memo("herpes zoster: think “zone”: only one zone (the path of one nerve) on one side of the body.")}${pearl("Anyone who has had chickenpox has the virus sleeping in their nerves and may get shingles years later.")}`),
          M("Which virus causes warts?", ['HPV', 'HSV', 'VZV', 'HIV'], 'human papillomavirus.'),
          M("Shingles is the reactivation of which virus?", ["Chickenpox virus (VZV)", "Cold-sore virus (HSV)", 'HPV', "Measles virus"], 'varicella-zoster virus.'),
          T("Scabies is caused by a mite that tunnels under the skin.", true, "Intense itching, especially at night.", F('scabies', ["Scabies"])),
          P("Match each disease to its cause", [['verruca', 'HPV'], ['herpes simplex', 'HSV'], ['herpes zoster', 'VZV'], ['scabies', "itch mite"]], "Viruses and parasites."),
          W("Build a word meaning “lice infestation”", ['pedicul/o', '-osis'], ['-itis', 'py/o', 'myc/o'], 'pedicul/o + -osis = pediculosis.'),
          B("Chickenpox is called ___ in medical terms.", ['varicella', 'rubella', 'verruca'], 'varicella = chickenpox.'),
          S("Spell the second word of the term for shingles", 'zoster', 'herpes zoster = shingles.', 'zos…'),
          N('ab:ds')
        ]
      },
      /* ================= سطح ۲: التهاب و خودایمنی ================= */
      {
        id: 'ds4', title: "Dermatitis and Eczema", icon: '🧴', items: [
          L("Three types of dermatitis", `${tbl([["Type", "Feature"], [e('atopic dermatitis'), "chronic itchy eczema; with asthma and allergy; children"], [e('contact dermatitis'), "contact with an irritant or allergen (nickel, poison ivy)"], [e('seborrheic dermatitis'), "greasy yellow scales of the scalp and face (dandruff)"]])}${fig(['atopic-dermatitis', 'contact-dermatitis'], ["Atopic dermatitis of the wrist", "Contact dermatitis from shoes"], "Two types of dermatitis")}`),
          L("itchy red inflamed skin", `${e('<b>eczema</b>')} is a chronic, itchy inflammation of the skin with redness, vesicles, crusts and scales; with long scratching → ${e('lichenification')}.${fig('eczema-arm', ["Eczema of the forearm"], "Redness, crusts and scales in eczema")}${pearl("To find the cause of contact dermatitis, a “patch test” is done: allergens are taped to the skin for 48 hours.")}${memo("atopic = “out of place” (a- + topos): the body reacts to harmless things.")}`),
          M("What is chronic eczema in a child with a history of asthma and allergy called?", ['atopic dermatitis', 'contact dermatitis', 'seborrheic dermatitis', 'psoriasis'], 'AD = atopic dermatitis.', null, F('atopic-dermatitis', [])),
          M("Redness and blisters under a metal watch strap are most likely which?", ['contact dermatitis', 'atopic dermatitis', 'impetigo', 'tinea'], "Nickel allergy."),
          T("Dandruff is a mild form of seborrheic dermatitis.", true, "Greasy yellow scales."),
          P("Match each type to its feature", [['atopic dermatitis', "with asthma and allergy"], ['contact dermatitis', "contact with an allergen"], ['seborrheic dermatitis', "greasy scalp scales"], ['eczema', "chronic itchy inflammation"]], "Types of dermatitis."),
          B("The abbreviation AD means ___.", ['atopic dermatitis', 'actinic dermatosis', 'acne disease'], "Atopic dermatitis."),
          O("Put the steps of a patch test in order", ["Tape allergens onto the back", "Wait 48 hours", "Remove the patches", "Read any red reaction"], 'patch test.'),
          S("Spell the term for chronic itchy inflamed skin", 'eczema', "eczema = chronic itchy inflammation.", 'ecz…'),
          N('d2t:ds')
        ]
      },
      {
        id: 'ds5', title: "Psoriasis, Acne and Rosacea", icon: '🔴', items: [
          L("silvery scaly patches", `${e('<b>psoriasis</b>')}: a chronic disease with <b>red plaques and silvery scales</b>, mostly on the elbows, knees and scalp. The cells of the epidermis multiply very fast.${fig(['psoriasis-plaque', 'psoriasis-silvery'], ["Psoriasis plaque", "Silvery scales"], "silvery scaly patches")}`),
          L("Acne and rosacea", `${e('<b>acne vulgaris</b>')}: common teenage acne; comedones, papules and pustules on the face, chest and back (vulgaris = common).<br>${e('<b>rosacea</b>')}: chronic redness of the cheeks and nose with tiny vessels and pimples; mostly adults.${fig('acne-forehead', ["Acne of the forehead"], "Acne papules and pustules")}${pearl("The most severe acne is treated with an oral retinoid (isotretinoin); it is forbidden in pregnancy.")}`),
          M("Red plaques with silvery scales on the elbows and knees?", ['psoriasis', 'eczema', 'tinea corporis', 'impetigo'], "psor/o = itching + -iasis.", null, F('psoriasis-knee', ["Psoriasis of the knee"])),
          M("In acne vulgaris, vulgaris means…", ["common, ordinary", "containing pus", "long-lasting (chronic)", "severe"], "Common acne.", null, F('acne-face', ["Acne of the face"])),
          T("Rosacea is seen mostly in teenagers with many comedones.", false, "False; rosacea is seen mostly in adults and without comedones; teenage acne has comedones."),
          P("Match each disease to its feature", [['psoriasis', "silvery scales"], ['acne vulgaris', "teenage comedones"], ['rosacea', "redness of cheeks and nose"], ['seborrhea', "excess oil"]], "Three common diseases."),
          W("Build a word meaning “psoriasis”", ['psor/o', '-iasis'], ['-itis', 'derm/o', '-oma'], "psor/o (itching) + -iasis."),
          B("The oral drug for severe acne belongs to the ___ family.", ['retinoid', 'antifungal', 'scabicide'], "Isotretinoin is a retinoid."),
          S("Spell the term for a disease of red plaques with silvery scales", 'psoriasis', "The first p is silent: “suh-RYE-uh-sis”.", 'psor…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds6', title: "Autoimmune and Inherited", icon: '🧬', items: [
          L("The body against the skin", `${e('<b>systemic lupus erythematosus</b>')} (${e('SLE')}): a chronic autoimmune disease of the skin, joints, kidneys and more; a <b>butterfly rash</b> on the cheeks and nose.<br>${e('<b>discoid lupus erythematosus</b>')} (${e('DLE')}): lupus limited to the skin, with round scaly plaques.<br>${e('<b>scleroderma</b>')}: hardening and thickening of the skin (scler/o = hard).<br>${e('<b>pemphigus</b>')}: large blisters (bullae) on the skin and mucous membranes.`),
          L("Inherited colour and scales", `${e('<b>vitiligo</b>')}: loss of melanocytes → white patches.<br>${e('<b>albinism</b>')}: inherited absence of melanin.<br>${e('<b>ichthyosis</b>')}: dry skin with fish-like scales.${fig(['discoid-lupus', 'ichthyosis'], ["Skin lupus on the chest", "Ichthyosis"], "Autoimmune and Inherited")}${pearl("A patient suspected of lupus should avoid the sun and use sunscreen; light makes the rash worse (photosensitivity).")}`),
          M("A butterfly rash on the cheeks and nose with joint pain makes you think of what?", ['SLE', 'psoriasis', 'rosacea', 'impetigo'], "Systemic lupus erythematosus."),
          M("What is hardening and thickening of the skin in an autoimmune disease called?", ['scleroderma', 'xeroderma', 'leukoderma', 'erythroderma'], 'scler/o + -derma.'),
          T("Vitiligo is the loss of melanocytes and produces white patches.", true, 'depigmentation.', F('vitiligo-legs', [])),
          P("Match each disease to its feature", [['SLE', "butterfly rash"], ['pemphigus', "Large blisters"], ['vitiligo', "white patches"], ['ichthyosis', "fish-like scales"]], "Autoimmune and inherited."),
          W("Build a word meaning “inherited dry, scaly skin”", ['ichthy/o', '-osis'], ['xer/o', '-derma', 'scler/o'], 'ichthy/o + -osis.'),
          B("Lupus limited to the skin is abbreviated ___.", ['DLE', 'SLE', 'AD'], 'discoid lupus erythematosus.'),
          S("Spell the term for white patches from loss of melanocytes", 'vitiligo', "vitiligo = white patches.", 'viti…'),
          N('wb:ds')
        ]
      },
      /* ================= سطح ۳: سوختگی و زخم ================= */
      {
        id: 'ds7', title: "Burn Degrees", icon: '🔥', items: [
          L("Depth of damage", `${fig('burn-depth', [], "Burn degree = depth of damage")}${tbl([["Degree", "Other name", "Layer", "Appearance"], ["one", e('superficial'), "outer skin", "red and painful"], ["two", e('partial-thickness'), "epidermis and part of the dermis", "blisters and severe pain"], ["three", e('full-thickness'), "epidermis and the whole dermis", "white or charred, sometimes painless"]])}`),
          L("Why does a third-degree burn hurt less?", `In a full-thickness burn the nerve endings of the dermis are destroyed too. The black, hard layer of dead tissue is called ${e('<b>eschar</b>')}.${fig('burn-blisters', ["Blisters in a second-degree burn"], 'partial-thickness burn')}${memo("Degree 1 = sunburn; degree 2 = blisters; degree 3 = “charred and numb”.")}`),
          M("What degree is a simple sunburn without blisters?", ["First degree (superficial)", "Second degree", "Third degree", "Fourth degree"], "Epidermis only.", null, F('burn-depth', [])),
          M("A burn with large blisters and severe pain?", ['second-degree (partial-thickness)', 'first-degree', 'third-degree', 'eschar'], "Into part of the dermis."),
          T("A third-degree burn is always the most painful kind.", false, "False; because the nerves are destroyed it may be painless."),
          O("Put the burn degrees in order from superficial to deep", ['superficial', 'partial-thickness', 'full-thickness'], "One → two → three."),
          P("Match each degree to its feature", [['first-degree', "redness without blisters"], ['second-degree', "blister"], ['third-degree', "white or charred"], ['eschar', "black dead tissue"]], "Burn degrees."),
          B("The black, hard layer of dead tissue after a burn is ___.", ['eschar', 'crust', 'keloid'], "eschar = the dead tissue of a burn."),
          S("Spell the term for the black dead tissue of a burn", 'eschar', "Don’t confuse eschar with scar.", 'esc…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds8', title: "burn-area estimate in 9% blocks", icon: '9️⃣', items: [
          L("What Percentage of the Body Is Burned?", `${fig('rule-of-nines', [], "Rule of nines in an adult")}The ${e('<b>rule of nines</b>')} estimates the percentage of body surface area (${e('BSA')}) burned in an adult:<br>head and neck 9% • each arm 9% • each leg 18% • front of trunk 18% • back of trunk 18% • genital area 1% = 100%`),
          L("From percentage to treatment", `The higher the percentage and the deeper the burn, the more fluid therapy is needed and the higher the risk of infection.<br>${e('<b>debridement</b>')}: removing dead tissue; ${e('<b>escharotomy</b>')}: cutting through a tight eschar to free the circulation; then a ${e('skin graft')}.${pearl("In children the head is larger relative to the body; separate charts (Lund-Browder) are used for them.")}`),
          M("In the rule of nines, what percentage is one whole adult arm?", ["9%", "18%", "4.5%", "1%"], "Each arm 9%.", null, F('rule-of-nines', [])),
          M("What percentage is a burn of the whole right leg (front and back)?", ["18%", "9%", "36%", "27%"], "Each leg 18%."),
          T("In the rule of nines, the genital area counts as 1%.", true, "So that the total reaches 100."),
          M("Adult patient: burns of the whole left arm and the front of the trunk. The total?", ["27%", "18%", "36%", "9%"], "Arm 9 + front of trunk 18 = 27%."),
          P("Match each area to its percentage", [["Head and neck", "9%"], ["Each leg", "18%"], ["Trunk (front and back)", "36%"], ["Genital area", "1%"]], "Total = 100%."),
          B("The abbreviation for percentage of body surface area is ___.", ['BSA', 'BMI', 'BCC'], 'body surface area.'),
          S("Spell the term for removing dead tissue from a wound", 'debridement', "Removing dead tissue; French pronunciation: “day-breed-MAHN”.", 'debri…'),
          N('ab:ds')
        ]
      },
      {
        id: 'ds9', title: "Pressure Sores and Gangrene", icon: '🛏️', items: [
          L("Pressure, blood supply, tissue death", `${e('<b>decubitus ulcer</b>')} (bedsore, pressure ulcer): from long pressure over bony prominences in a bedridden patient. Pressure cuts off the blood supply and the tissue dies (${e('necrosis')}).${fig('pressure-points', [], "Pressure points")}`),
          L("Stages and types of ulcer", `${fig('ulcer-stages', [], "Stages of a pressure sore")}${e('<b>stasis ulcer</b>')}: a leg ulcer from poor venous circulation.<br>${e('<b>gangrene</b>')}: tissue death from loss of blood supply, often with infection.${pearl("Prevention: change position every 2 hours, an alternating-pressure mattress, good nutrition and clean, dry skin.")}`),
          M("The most common site of a pressure sore in a patient lying on their back?", ["The sacral area (sacrum)", "The forehead", "in the palm", "The front of the knee"], "Over a bony prominence.", null, F('pressure-points', [])),
          M(`${e('<b>necrosis</b>')} means…`, ["tissue death", "inflammation of tissue", "hardened area", "tissue swelling"], "necr/o = death.", null, F('gangrene-foot', ["Gangrene of the foot"])),
          T("A stage 4 ulcer has reached muscle and bone.", true, "The deepest stage.", F('pressure-ulcer-deep', ["Deep pressure ulcer"])),
          O("Put the events of a pressure sore in order", ["Long pressure over a bone", "Loss of blood supply", "Tissue death (necrosis)", "Open ulcer"], "Pressure → ischaemia → necrosis → ulcer."),
          P("Match each ulcer to its cause", [['decubitus ulcer', "long pressure"], ['stasis ulcer', "poor venous circulation"], ['gangrene', "complete loss of blood supply"], ['burn', "heat or chemicals"]], "The cause of each ulcer."),
          B("In Latin, decubitus means ___.", ["lying down", "burned", "infectious"], "The sore of someone who is lying down."),
          S("Spell the term for tissue death from loss of blood supply", 'gangrene', "gangrene = tissue death from loss of blood.", 'gang…'),
          N('sp:ds')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* درما — دنیای ۵: تومورها، تشخیص و درمان
 * منابع: Neoplasms، Diagnostic/Laboratory tests، Surgical procedures، Pharmacology و Abbreviations در total.txt و PDFهای پیوست
 * (Case Study 4-1 BCC، Dermatology Consultation Report، Chart notes)
 * سطح ۱: تومورهای پوست • سطح ۲: تشخیص و پرونده • سطح ۳: درمان
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'tx', sym: 'Tx', name: "Tumours, Diagnosis and Treatment", short: "diagnosis and treatment", sub: "Moles and benign tumours, the three skin cancers and ABCDE, biopsy and skin tests, surgery, grafts and drugs",
    color: '#1F9E8F', dark: '#137568', light: '#DDF5F1',
    levels: ["Skin tumours", "Diagnosis and charts", "treatment"],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: تومورهای پوست ================= */
      {
        id: 'tx1', title: "Benign Growths", icon: '🟫', items: [
          L("What does benign mean?", `${vs(['benign', "benign: does not spread"], ['malignant', "malignant: invasion and metastasis"])}${tbl([["Term", "Meaning"], [e('nevus'), "mole (plural: nevi)"], [e('hemangioma'), "benign tumour of vessels; a baby’s strawberry mark"], [e('lipoma'), "soft fatty lump"], [e('seborrheic keratosis'), "brown, waxy, “stuck-on” growth"], [e('skin tag'), "small fleshy tag"], [e('histiocytoma'), "firm nodule of the dermis (dermatofibroma)"]])}`),
          L("Examples", `${fig(['nevus-face', 'hemangioma'], ["Moles on the face", "Infant hemangioma"], "Benign Growths")}${e('<b>actinic keratosis</b>')} is a rough scale on sun-damaged skin and is <b>precancerous</b>; it may turn into SCC (actin/o = ray).${memo("hemangioma = hem (blood) + angi (vessel) + oma: a mass of blood vessels.")}`),
          M("A baby’s strawberry mark made of blood vessels?", ['hemangioma', 'lipoma', 'nevus', 'keloid'], 'hem/o + angi/o + -oma.', null, F('hemangioma', ["Hemangioma"])),
          M("Which lesion is precancerous?", ['actinic keratosis', 'seborrheic keratosis', 'lipoma', 'skin tag'], "On sun-damaged skin; it may become SCC."),
          T("Benign means a tumour that does not spread to other tissues.", true, "Not cancerous."),
          W("Build a word meaning “tumour of blood vessels”", ['hem/o', 'angi/o', '-oma'], ['lip/o', '-itis', 'melan/o'], 'hem/o + angi/o + -oma = hemangioma.'),
          P("Match each lesion to its description", [['nevus', "mole"], ['lipoma', "fatty lump"], ['seborrheic keratosis', "waxy stuck-on growth"], ['skin tag', "fleshy tag"]], "Benign growths."),
          B("A yellow fatty lump in the skin is a ___.", ['xanthoma', 'melanoma', 'hematoma'], "xanth/o = yellow."),
          S("Spell the term for a mole", 'nevus', "Plural: nevi.", 'nev…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: "The Three Skin Cancers", icon: '⚠️', items: [
          L("Three cells, three cancers", `${fig('skin-cancers', [], "BCC, SCC and melanoma")}${tbl([["cancer", "cell", "Feature"], [e('basal cell carcinoma (BCC)'), "basal layer", "most common; pearly papule with a raised edge; rarely spreads"], [e('squamous cell carcinoma (SCC)'), "squamous", "firm, scaly or ulcerated nodule; may spread"], [e('malignant melanoma (MM)'), "pigment cell", "most dangerous; early metastasis"]])}`),
          L("The clinical picture", `${fig(['bcc-pearly', 'scc-face', 'melanoma'], ["Pearly BCC", "SCC of the face", "Melanoma"], "The Three Skin Cancers")}${e('<b>Kaposi sarcoma</b>')}: cancer of the vessel walls with purple lesions, often in AIDS patients.<br>${e('<b>metastasis</b>')}: spread of cancer to distant sites.${pearl("The main cause of all three is ultraviolet light; tanning beds carry the same risk.")}`),
          M("Which is the most common skin cancer?", ['basal cell carcinoma', 'malignant melanoma', 'squamous cell carcinoma', 'Kaposi sarcoma'], "BCC is the most common and the least dangerous.", null, F('bcc-nose', ["BCC of the nose"])),
          M("The most dangerous skin cancer arises from which cell?", ['melanocyte', 'keratinocyte', 'basal cell', 'lipocyte'], 'malignant melanoma.'),
          T("A carcinoma is a cancer of epithelial tissue.", true, "carcin/o + -oma; a sarcoma is a cancer of connective tissue.", F('scc-cheek', ["SCC of the cheek"])),
          P("Match each abbreviation to its meaning", [['BCC', "cancer of the skin’s base layer"], ['SCC', "cancer of flat surface cells"], ['MM', "malignant tumour of pigment cells"], ['AK', "actinic keratosis"]], "Tumour abbreviations."),
          O("Put the cancers in order from low to high risk", ['BCC', 'SCC', 'malignant melanoma'], "BCC rarely spreads; melanoma metastasizes early."),
          B("The spread of cancer to distant organs is called ___.", ['metastasis', 'necrosis', 'keratosis'], "meta- (beyond) + stasis."),
          S("Spell the term for the malignant tumour of pigment cells", 'melanoma', 'melan/o + -oma.', 'mela…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx3', title: "ABCDE and Prevention", icon: '🔍', items: [
          L("Check a mole with ABCDE", `${fig('abcde', [], "ABCDE criteria for melanoma")}${e('<b>A</b>symmetry')}: uneven halves • ${e('<b>B</b>order')}: irregular edge • ${e('<b>C</b>olor')}: several colours • ${e('<b>D</b>iameter')}: over 6 mm • ${e('<b>E</b>volving')}: changing over time`),
          L("sun protection cream", `${fig('melanoma-abc', ["A, B and C on a melanoma"], "Asymmetry, irregular border, varied colour")}${e('<b>sunscreen</b>')} blocks UV rays; its strength is measured by the ${e('<b>SPF</b>')} (protection factor), usually SPF 30 or higher.<br>${e('UVA')} causes more ageing and ${e('UVB')} more burning; both cause cancer.${memo('ABCDE: «A Bad Color Doesn\'t Evolve quietly».')}${pearl("In Joanne’s chart (the nose BCC case), the physician advised always using SPF 30 and giving up tanning beds.")}`),
          M("In ABCDE, the letter D means…", ["diameter over 6 mm", "dark colour", "bleeding", "itching"], 'Diameter.'),
          M("SPF means…", ["sun protection factor", "squamous cell carcinoma", "transplanted skin", "raised scar"], 'sun protection factor.'),
          T("A mole that has grown larger and darker over a few months (Evolving) should be examined.", true, "E = change; the most important warning.", F('abcde', [])),
          P("Match each letter to its meaning", [['A', "uneven halves"], ['B', "irregular edge"], ['C', "several colours"], ['E', "changing over time"]], 'ABCDE.'),
          O("Put the steps of assessing a suspicious mole in order", ["Noticing a change in a mole", "Examination with ABCDE", "biopsy", "Pathology report"], "Suspicion → examination → sample → diagnosis."),
          B("The invisible sun rays that are the main cause of skin cancer are ___.", ['ultraviolet (UV)', 'infrared', 'X-ray'], "UV = ultraviolet."),
          S("Spell the term for a cream that blocks UV rays", 'sunscreen', "sun + screen.", 'suns…'),
          N('ab:tx')
        ]
      },
      /* ================= سطح ۲: تشخیص و پرونده ================= */
      {
        id: 'tx4', title: "Biopsy and Tests", icon: '🔬', items: [
          L("A living sample", `${fig('biopsy-types', [], "Types of biopsy")}${wb('bi/o', '-opsy')} → ${e('<b>biopsy</b>')} (Bx): removing a piece of living tissue for the microscope.<br>• ${e('shave')}: shaving off a raised lesion • ${e('punch')}: a small cylinder with a punch<br>• ${e('incisional')}: part of a large lesion • ${e('excisional')}: the whole lesion`),
          L("Other tests", `${tbl([["test", "Job"], [e('frozen section (FS)'), "immediate frozen slice during surgery"], [e('culture and sensitivity (C&S)'), "growing the microbe and finding an effective antibiotic"], [e('fungal scraping (KOH)'), "skin scraping to look for fungus"], [e('Wood lamp'), "UV lamp; shows fungus and colour changes"], [e('exfoliative cytology'), "scraping surface cells for the microscope"]])}${pearl("In an excisional biopsy, the pathology report must confirm “clean margins”, meaning the whole tumour has been removed.")}`),
          M("Removing a whole suspicious mole for examination is which type of biopsy?", ['excisional', 'incisional', 'shave', 'punch'], "ex- = out: the whole lesion.", null, F('biopsy-types', [])),
          M("What is sent to find the best antibiotic for an infected wound?", ['culture and sensitivity', 'frozen section', 'Wood lamp', 'patch test'], 'C&S.'),
          T("biopsy is built from bi/o (life) and -opsy (viewing).", true, "A living sample to look at."),
          P("Match each test to its purpose", [['frozen section', "immediate diagnosis during surgery"], ['KOH', "seeing fungus"], ['Wood lamp', "UV light for fungus and colour"], ['punch biopsy', "cylinder-shaped sample"]], "Skin tests."),
          W("Build a word meaning “viewing living tissue”", ['bi/o', '-opsy'], ['-tomy', 'cyt/o', '-logy'], 'bi/o + -opsy = biopsy.'),
          B("The chart abbreviation for biopsy is ___.", ['Bx', 'Dx', 'Tx'], 'Bx.'),
          S("Spell the term for removing living tissue for diagnosis", 'biopsy', 'bi/o + -opsy.', 'bio…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx5', title: "Skin tests", icon: '🧪', items: [
          L("Three tests, one goal", `${fig('skin-tests', [], "Skin tests")}${tbl([["Test", "Method", "For"], [e('patch test'), "allergen taped on for 48 hours", "rash from touching an irritant"], [e('scratch (prick) test'), "allergen on a small scratch", "allergy"], [e('intradermal test'), "intradermal injection", "allergy or tuberculosis"]])}`),
          L("The Mantoux test", `${e('<b>Mantoux test</b>')}: a small amount of ${e('PPD')} (purified protein derivative) is injected intradermally; after 48 to 72 hours the width of the ${e('<b>induration</b>')} (hardening) is read with a ruler, not the redness!${fig('mantoux-test', ["Reading the Mantoux test"], "Measuring the hardening with a ruler")}${memo("PPD = purified protein derivative; TB = tuberculosis; ID = intradermal.")}`),
          M("What is measured in the Mantoux test?", ["The width of the hardening (induration)", "The width of the redness", "How long the itching lasts", "The number of blisters"], "Hardening is what counts.", null, F('mantoux-test', [])),
          M("Which test finds the cause of contact dermatitis?", ['patch test', 'Mantoux test', 'frozen section', 'Wood lamp'], "Allergens are taped onto the skin."),
          T("The Mantoux test is read right after the injection.", false, "False; after 48 to 72 hours."),
          O("Put the steps of the Mantoux test in order", ["Intradermal PPD injection", "Wait 48 to 72 hours", "Feel the injection site", "Measure the width of the hardening"], 'Mantoux.'),
          P("Match each abbreviation to its meaning", [['PPD', "purified protein derivative"], ['TB', "tuberculosis"], ['ID', "into the skin"], ['FS', "quickly frozen tissue slice"]], "Diagnostic abbreviations."),
          B("The allergy test that places the allergen on a small scratch of the skin is the ___.", ['scratch test', 'patch test', 'punch biopsy'], 'prick test.'),
          S("Spell the term for hardening of tissue", 'induration', "in- + dur (hard) + -ation.", 'indu…'),
          N('ab:tx')
        ]
      },
      {
        id: 'tx6', title: "Reading the Chart", icon: '📋', items: [
          L("Chart abbreviations", `${tbl([["abbreviation", "Meaning"], [e('Hx'), "history"], [e('FH'), "family history"], [e('PE'), "physical examination"], [e('Dx'), "diagnosis"], [e('Rx'), "prescription, treatment"], [e('y/o'), "years old"], [e('Derm'), "study of the skin"]])}`),
          L("A real note", `“A 32 ${e('y/o')} woman with a history of ${e('psoriasis')} since adolescence. She has ${e('pruritus')} of the scalp and abdomen. ${e('FH')} negative for psoriasis. On ${e('PE')}: ${e('erythematous plaques')} covered with yellowish-white scale on the scalp and trunk.<br>${e('Dx')}: ${e('psoriasis vulgaris')}.”${pearl("First expand the abbreviations, then read each word from its suffix; the note reads like a short story.")}`),
          M("Dx in a chart means…", ["diagnosis", "treatment", "prescription", "history of"], 'diagnosis.'),
          M("“FH of melanoma” means…", ["a family history of melanoma", "melanoma examination", "frozen section of a melanoma", "malignant tumour of pigment cells"], 'family history.'),
          T("PE in a skin note means physical examination.", true, "Physical examination."),
          P("Match each abbreviation to its meaning", [['Hx', "history of"], ['Dx', "diagnosis"], ['Rx', "prescription"], ['PE', "examination"]], "Chart abbreviations."),
          M("The note says: “multiple erythematous papules”. It means…", ["several small red bumps", "several flat white spots", "one large blister", "several yellow pustules"], "erythematous = red; papule = small bump."),
          O("Put the parts of a note in their usual order", ["main complaint", "Hx and FH", 'PE', 'Dx', 'Rx'], "From what the patient says to the treatment."),
          B("“40 ___” means 40 years old.", ['y/o', 'Hx', 'FH'], 'years old.'),
          S("Spell the term for itching", 'pruritus', 'prurit/o + -us.', 'pru…'),
          N('f2t:tx')
        ]
      },
      /* ================= سطح ۳: درمان ================= */
      {
        id: 'tx7', title: "Skin Surgery", icon: '🔪', items: [
          L("Removing and destroying", `${tbl([["Method", "Tool or method"], [e('excision'), "cutting out the lesion (ex- + cis/o)"], [e('cryosurgery'), "freezing with liquid nitrogen (cry/o)"], [e('electrodesiccation'), "drying out with electric current"], [e('cauterization'), "burning with heat or chemicals"], [e('curettage'), "scraping with a spoon-shaped curette"], [e('incision and drainage (I&D)'), "incision and drainage of an abscess"], [e('debridement'), "removing dead tissue"], [e('laser therapy'), "focused light for lesions, tattoos and vessels"]])}`),
          L("layer-by-layer skin cancer surgery", `${fig('mohs', [], "layer-by-layer skin cancer surgery")}${e('<b>Mohs surgery</b>')}: skin cancer (BCC and SCC) is removed layer by layer and each layer is checked under the microscope at once until the margins are clear; the most healthy facial tissue is spared.${pearl("In a dermatology consult report, a recurrent BCC of the cheek was treated with “deep excision… followed by dermatoplasty”.")}`),
          M("What is treating a wart with liquid nitrogen called?", ['cryosurgery', 'electrodesiccation', 'curettage', 'excision'], "cry/o = cold."),
          M("The method of removing cancer layer by layer with immediate microscopic checking?", ['Mohs surgery', 'dermabrasion', 'liposuction', 'chemical peel'], "The most healthy tissue is spared.", null, F('mohs', [])),
          T("I&D means incision and drainage, for example of an abscess.", true, 'incision and drainage.'),
          P("Match each method to its tool", [['cryosurgery', "cold"], ['electrodesiccation', "electricity"], ['curettage', "spoon-shaped curette"], ['laser therapy', "focused light"]], "Skin surgery methods."),
          W("Build a word meaning “cutting out a lesion”", ['ex-', 'cis/o', '-ion'], ['in-', '-tomy', 'cry/o'], 'ex- + cis/o + -ion = excision.'),
          B("Removing dead tissue from a wound or burn is ___.", ['debridement', 'dermabrasion', 'cauterization'], 'debridement.'),
          S("Spell the term for destroying tissue by freezing", 'cryosurgery', 'cry/o + surgery.', 'cryo…'),
          N('wb:tx')
        ]
      },
      {
        id: 'tx8', title: "Grafts and Reconstructive Surgery", icon: '🧵', items: [
          L("transplanted skin", `${fig('graft-types', [], "Types of skin graft")}By source: ${e('<b>autograft</b>')} (from the patient), ${e('<b>allograft</b>')} or homograft (from another person), ${e('<b>xenograft</b>')} or heterograft (from an animal).<br>By thickness: ${e('<b>STSG</b>')} (epidermis + part of the dermis) and ${e('<b>FTSG</b>')} (the whole dermis).<br>${e('<b>dermatome</b>')}: an instrument for taking a thin layer of skin.`),
          L("Reconstructive and cosmetic surgery", `${tbl([["Method", "Meaning"], [e('dermatoplasty'), "surgical repair of the skin"], [e('dermabrasion'), "sanding the skin for scars and wrinkles"], [e('chemical peel'), "chemical peeling (chemabrasion)"], [e('rhytidectomy'), "facelift (rhytid/o = wrinkle)"], [e('blepharoplasty'), "eyelid surgery"], [e('liposuction'), "fat removal by suction"]])}${fig('autograft', ["Fresh autograft on the leg"], "Donor skin meshed so it stretches further")}${pearl("In Kathleen’s chart, a stage 3 pressure ulcer was closed with debridement and an FTSG from her own thigh, that is, an autograft.")}`),
          M("A skin graft from the patient’s own body?", ['autograft', 'allograft', 'xenograft', 'heterograft'], "auto- = self.", null, F('autograft', [])),
          M("A facelift in medical terms?", ['rhytidectomy', 'blepharoplasty', 'dermatoplasty', 'lipectomy'], "rhytid/o (wrinkle) + -ectomy."),
          T("A xenograft is a graft from an animal, for example pig skin.", true, "xen/o = foreign."),
          P("Match each abbreviation or term to its meaning", [['STSG', "split-thickness graft"], ['FTSG', "full-thickness graft"], ['allograft', "graft from another person"], ['dermatome', "skin-cutting instrument"]], "Skin grafts."),
          W("Build a word meaning “reconstructive surgery of the eyelid”", ['blephar/o', '-plasty'], ['-ectomy', 'rhytid/o', 'derm/o'], 'blephar/o + -plasty = blepharoplasty.'),
          B("Sanding the skin with a rotating brush for acne scars is ___.", ['dermabrasion', 'dermatome', 'debridement'], 'derm + abrasion.'),
          S("Spell the term for a graft from the patient’s own body", 'autograft', 'auto- + -graft.', 'auto…'),
          N('sp:tx')
        ]
      },
      {
        id: 'tx9', title: "Skin Drugs", icon: '💊', items: [
          L("anti- + target", `${tbl([["drug", "Job"], [e('antibiotic'), "against bacteria"], [e('antifungal'), "against fungi"], [e('antiviral'), "against viruses (cold sores, shingles)"], [e('antihistamine'), "against histamine; hives and allergic itching"], [e('antipruritic'), "relieves itching"], [e('antiseptic'), "disinfectant for the skin surface"], [e('corticosteroid'), "strong anti-inflammatory; eczema ointment"], [e('keratolytic'), "dissolves keratin; warts and scales"], [e('scabicide / pediculicide'), "kills scabies / lice"]])}`),
          L("Read the prescription", `${fig('rx-clock', [], "Prescription abbreviations")}${e('<b>topical</b>')} = local; ${e('oint')} = ointment. Example: “hydrocortisone 2% oint ${e('hs')}” means hydrocortisone 2% ointment at bedtime.${vs(['antipruritic', "relieves itching"], ['antipyretic', "fever reducer"])}${pearl("Retinoids (such as isotretinoin) work for severe acne but carry a risk of birth defects in pregnancy.")}`),
          M("A cream for athlete’s foot belongs to which group?", ['antifungal', 'antibiotic', 'antiviral', 'scabicide'], "Tinea is a fungal infection."),
          M("“oint tid” means…", ["ointment three times a day", "tablet twice a day", "ointment at bedtime", "injection under the skin"], "oint = ointment; tid = three times a day."),
          T("Keratolytics are drugs that soften and loosen keratin.", true, 'kerat/o + -lytic.'),
          P("Match each drug to its use", [['antihistamine', "allergic hives"], ['antiviral', "shingles and cold sores"], ['corticosteroid', "eczema inflammation"], ['scabicide', "Scabies"]], "Skin drugs."),
          P("Match each prescription abbreviation to its meaning", [['bid', "twice a day"], ['qid', "four times a day"], ['hs', "at bedtime"], ['prn', "as needed"]], "Reading prescriptions."),
          W("Build a word meaning “anti-itch drug”", ['anti-', 'prurit/o', '-ic'], ['-itis', 'derm/o', 'pyret/o'], 'anti- + prurit/o + -ic.'),
          B("A drug that kills lice is a ___.", ['pediculicide', 'scabicide', 'antibiotic'], 'pedicul/o + -cide.'),
          S("Spell the term for a drug that kills fungi", 'antifungal', 'anti- + fung/i + -al.', 'antif…'),
          N('ab:tx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* درما — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. شکل‌ها از دنیای پوست، مو، ناخن و درمان الهام گرفته‌اند. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: "Skinny", title: "The Body’s One-Piece Suit", shape: 'tile', color: '#F2A07C', acc: ['sparkle'], bio: "The body’s largest organ, with three floors: the epidermis roof, the dermis middle floor and the fat basement. You never take it off!" },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Rooty", title: "Master of derm/o and cutane/o", shape: 'book', color: '#D9643A', acc: ['glasses'], bio: "A living dictionary that breaks every skin word into root, prefix and suffix and knows the colours from erythr/o to xanth/o." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Puzzly", title: "King of Prefixes and Suffixes", shape: 'puzzle', color: '#B24E26', acc: ['crown'], bio: "Puts sub- and epi- in place, attaches -itis and -ectomy, and never mixes up hidr/o and hydr/o." },
    { id: 'ly-0', w: 'ly', lv: 0, name: "Kera", title: "Armour of the Epidermis", shape: 'shield', color: '#E8A06F', acc: ['sparkle'], bio: "The hard, waterproof protein of the horny layer. Every four weeks it puts on fresh skin and sheds the old layer." },
    { id: 'ly-1', w: 'ly', lv: 1, name: "Cappy", title: "The Beating Heart of the Dermis", shape: 'heart', color: '#E0607E', acc: ['headband'], bio: "Lives in the dermis; widens in the heat, narrows in the cold, and feeds the vessel-free epidermis." },
    { id: 'ly-2', w: 'ly', lv: 2, name: "Lipo", title: "The Subcutaneous Cushion", shape: 'cloud', color: '#F6CF6A', acc: ['crown'], bio: "Soft and warm; insulates the body, absorbs shocks and stores energy. adip/o, lip/o and steat/o are its three names." },
    { id: 'ac-0', w: 'ac', lv: 0, name: "Folli", title: "Home of the Hair", shape: 'hair', color: '#C08A5A', acc: ['sparkle'], bio: "At the bottom of its sac is a vessel-rich papilla that feeds the hair bulb. When it gets scared, the arrector pili makes its hairs stand on end!" },
    { id: 'ac-1', w: 'ac', lv: 1, name: "Nailo", title: "Shield of the Fingertip", shape: 'nail', color: '#F2C3A0', acc: ['glasses'], bio: "Sits on a pink bed with a white half-moon (lunula) at its base. Knows onych/o and ungu/o by heart." },
    { id: 'ac-2', w: 'ac', lv: 2, name: "Droplet", title: "The Cooling Sweat Gland", shape: 'drop', color: '#4FB3F0', acc: ['crown'], bio: "Comes out of the eccrine glands and cools the body by evaporating. hidr/o and sudor/o are its names; hydr/o is its watery cousin!" },
    { id: 'le-0', w: 'le', lv: 0, name: "Macky", title: "The Quiet Spot", shape: 'blob', color: '#C98A5A', acc: ['sparkle'], bio: "Completely flat; only its colour is different. If it grows larger than 1 cm, it is called a patch." },
    { id: 'le-1', w: 'le', lv: 1, name: "Blistro", title: "The Clear Vesicle", shape: 'blister', color: '#9FD8F5', acc: ['headband'], bio: "Full of clear fluid. Larger than 1 cm it becomes a bulla, and if it fills with pus a pustule." },
    { id: 'le-2', w: 'le', lv: 2, name: "Signo", title: "Detective of Colour and Itch", shape: 'thermo', color: '#E5484D', acc: ['crown'], bio: "Tells erythema from cyanosis and jaundice, and separates petechiae from simple redness with finger pressure." },
    { id: 'ds-0', w: 'ds', lv: 0, name: "Staphy", title: "The Grape-Cluster Germ", shape: 'grape', color: '#8BC34A', acc: ['sparkle'], bio: "Shaped like a bunch of grapes and loves boils and impetigo. It is hunted down with a culture and sensitivity (C&S)." },
    { id: 'ds-1', w: 'ds', lv: 1, name: "Balmy", title: "The Inflammation Soother", shape: 'ointment', color: '#7DC6B8', acc: ['glasses'], bio: "Calms eczema and psoriasis; a topical corticosteroid whose prescription is written with oint and bid." },
    { id: 'ds-2', w: 'ds', lv: 2, name: "Blaze", title: "The Burn Guardian", shape: 'flame', color: '#FF7A45', acc: ['crown'], bio: "Knows burn degrees by their depth and calculates the burned surface area at a glance with the rule of nines." },
    { id: 'tx-0', w: 'tx', lv: 0, name: "Sunny", title: "SPF Sunscreen", shape: 'sun', color: '#FFC24B', acc: ['sparkle'], bio: "A kind sun that always wears SPF 30 and checks every mole with ABCDE." },
    { id: 'tx-1', w: 'tx', lv: 1, name: "Bix", title: "The Detective Under the Microscope", shape: 'tube', color: '#1F9E8F', acc: ['glasses'], bio: "From shave and punch to excisional; takes every sample to the pathologist and waits for “clean margins”." },
    { id: 'tx-2', w: 'tx', lv: 2, name: "Patchy", title: "Master of Surgery and Grafts", shape: 'bandage', color: '#F4C59A', acc: ['cape', 'crown'], bio: "From Mohs surgery to autografts and STSGs, covers and repairs every wound and burn." }
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
/* درما — راند بالینی: پرونده‌های چندمرحله‌ای
 * کیس‌ها از مطالعات موردی فایل‌های پیوست آمده‌اند (Kathleen's Pressure Ulcer، Case Study 4-1 Joanne (BCC)، SLE workup،
 * Pearson Consultation Report (cellulitis)، Exercise 4-9 (impetigo)، Lin Cave، Rose Arlia، Dermatology Consultation Report،
 * Chart note psoriasis) و چند پرونده آموزشی هم‌سو با آن‌ها. هدف: به کار بردن واژه‌ها، اختصارها و آزمایش‌ها در دل یک پرونده واقعی.
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان پوست ================= */
    {
      id: 'r1', w: 'lx', title: "Mr Cave’s Five Diagnoses", who: "Lin Cave, a 38-year-old man",
      brief: "You are reviewing Mr Cave’s chart. The physician has written five diagnoses and the patient wants to know what each one means. Decode every term by its root and suffix.",
      chart: [["1", 'Hidrosis'], ["2", 'Mycosis of left big toe'], ["3", 'Xeroderma of right hand'], ["4", 'Seborrhea'], ["5", 'Trichopathy']],
      fig: { a: 'wordparts', l: [] },
      steps: [
        M("Term", "Hidrosis means…", ["(excessive) sweating", "too much water in the body", "dry skin", "inflammation of a gland"], "hidr/o = sweat, not water (hydr/o)."),
        M("Term", "Mycosis of left big toe means…", ["fungal infection of the left big toe", "inflammation of the big toenail", "ulcer of the big toe", "an ingrown nail"], "myc/o = fungus; if the nail is involved, onychomycosis."),
        M("Term", "Xeroderma of right hand means…", ["dry skin of the right hand", "redness of the right hand", "yellowing of the right hand", "hardened skin of the hand"], "xer/o = dry."),
        P("Term", "Match each diagnosis to its meaning", [['Seborrhea', "excess skin oil secretion"], ['Trichopathy', "hair disease"], ['Hidrosis', "sweating"], ['Xeroderma', "dry skin"]], "Root + suffix."),
        T("Differentiation", "Trichopathy refers to a disease of the nails.", false, "False; trich/o = hair. Nail = onych/o."),
        S("Spelling", "Spell the term for dry skin", 'xeroderma', 'xer/o + -derma.', 'xero…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: "Cold, Clammy Skin at Triage", who: "A 58-year-old man in the emergency department",
      brief: "A man has come to the emergency department with chest pain. The triage nurse writes: skin cold, pale and wet with sweat; lips and nail beds blue. The patient is restless.",
      chart: [["skin", "cold, pale (pallor)"], ["sweating", "heavy (diaphoresis)"], ["Lips and nails", "blue (cyanosis)"], ["blood pressure", "down"]],
      fig: { a: 'color-roots', l: [] },
      steps: [
        M("symptom", "Which term is used in the chart for heavy sweating?", ['diaphoresis', 'anhidrosis', 'seborrhea', 'pruritus'], "dia- + -phoresis; synonym sudoresis."),
        M("symptom", "What are blue lips and nail beds a sign of?", ["Low blood oxygen (cyanosis)", "Jaundice", "skin inflammation", "dehydration"], "cyan/o = blue."),
        T("study of body function", "Cold, pale skin means the skin’s vessels have narrowed so blood can reach the vital organs.", true, "Vasoconstriction in shock."),
        P("Term", "Match each finding to its term", [["paleness", 'pallor'], ["large bruise", 'cyanosis'], ["profuse sweating", 'diaphoresis'], ["Redness", 'erythema']], "Skin colour and secretion."),
        M("root", "Which colour root appears in this chart?", ['cyan/o', 'xanth/o', 'erythr/o', 'melan/o'], 'cyanosis = cyan/o + -osis.'),
        S("Spelling", "Spell the term for bluish skin from lack of oxygen", 'cyanosis', 'cyan/o + -osis.', 'cya…')
      ]
    },
    /* ================= لایه‌های پوست ================= */
    {
      id: 'r3', w: 'ly', title: "TB Test for a New Employee", who: "A 26-year-old nurse before employment",
      brief: "For employment, the nurse has had a TB test (Mantoux). 0.1 mL of PPD was injected intradermally in the forearm, raising a small white bump. She returns after 72 hours for the reading.",
      chart: [["Test", 'Mantoux / PPD'], ["Route", 'ID (intradermal)'], ["Reading time", "48 to 72 hours"], ["finding", 'induration 4 mm']],
      fig: { a: ['mantoux-test', 'injection-routes'], l: ["Reading the test", "Injection routes"] },
      steps: [
        M("Route", "Which layer does the needle reach in the Mantoux test?", ["The dermis (intradermal)", "subcutaneously", "muscle", "vein"], "ID at a 10 to 15 degree angle."),
        M("Reading", "What is measured when the test is read?", ["The width of the hardening (induration)", "The width of the redness", "intensity of itching", "number of blisters"], "Hardening counts, not redness."),
        P("abbreviation", "Match each abbreviation to its meaning", [['PPD', "purified protein derivative"], ['ID', "into the skin"], ['TB', "tuberculosis"], ['SubQ', "subcutaneously"]], "The abbreviations in this chart."),
        O("Process", "Put the steps of the test in order", ["Intradermal PPD injection", "A small bump forms", "Wait 48 to 72 hours", "Measure the hardening"], 'Mantoux.'),
        T("Interpretation", "A 4 mm induration in a healthy employee is usually considered negative.", true, "For most healthy workers the positive cut-off is 10 mm."),
        S("Spelling", "Spell the term for within the skin", 'intradermal', 'intra- + derm/o + -al.', 'intra…')
      ]
    },
    {
      id: 'r4', w: 'ly', title: "The Child Whose Skin Would Not Spring Back", who: "A 2-year-old boy with diarrhoea",
      brief: "The child has had diarrhoea and vomiting for two days. His lips are dry. The nurse pinches the skin of his abdomen; it stays wrinkled for a few seconds and is slow to return. His hands and feet are cold.",
      chart: [["Skin turgor", "decreased"], ["mucus", "dry"], ["Limbs", "cold"], ["diagnosis", "dehydration"]],
      fig: { a: 'dermis', l: [] },
      steps: [
        M("symptom", "Skin slow to return after a pinch means reduced…", ['skin turgor', 'melanin', 'keratin', 'sebum'], "Skin elasticity; a sign of dehydration."),
        M("Structure", "Which fibres of the dermis return the skin to its shape?", ['elastin', 'keratin', 'melanin', 'sebum'], "elastin = elastic fibre."),
        T("study of body function", "Cold hands and feet mean the skin’s vessels have narrowed to keep blood for the vital organs.", true, 'vasoconstriction.'),
        P("Term", "Match each term to its meaning", [['skin turgor', "skin elasticity"], ['collagen', "strong fibre of the dermis"], ['elastin', "elastic fibre"], ['dermis', "the living, vascular layer"]], "The structure of the dermis."),
        M("Layer", "Turgor depends on a property of which layer?", ['dermis', 'stratum corneum', 'nail bed', 'hair shaft'], "Collagen and elastin are in the dermis."),
        S("Spelling", "Spell the term for the elastic fibre of the dermis", 'elastin', 'elast/o + -in.', 'elas…')
      ]
    },
    /* ================= ضمائم پوست ================= */
    {
      id: 'r5', w: 'ac', title: "The Cook’s Inflamed Finger", who: "A 34-year-old cook",
      brief: "A cook whose hands are always wet has had redness, swelling and pain around the nail of his index finger for 4 days, with a little pus. His toenails are also thick, yellow and brittle.",
      chart: [["Hand", "redness and pus around the nail"], ["foot", "thick, yellow nail"], ["Toenail KOH", "fungus positive"], ["Pus C&S", 'Staphylococcus aureus']],
      fig: { a: ['paronychia', 'nail-anatomy'], l: ["Paronychia", "Anatomy of the nail"] },
      steps: [
        M("diagnosis", "What is an infection of the skin fold around a fingernail?", ['paronychia', 'onychia', 'onycholysis', 'onychocryptosis'], "para- = beside."),
        M("diagnosis", "A thick, yellow toenail with a positive KOH?", ['onychomycosis', 'Beau lines', 'onychomalacia', 'paronychia'], 'onych/o + myc/o + -osis = tinea unguium.'),
        M("treatment", "What is done to drain the pus around the nail?", ['incision and drainage (I&D)', 'cryosurgery', 'Mohs surgery', 'phototherapy'], "Incision and drainage."),
        P("abbreviation", "Match each abbreviation to its meaning", [['KOH', "fungus test"], ['C&S', "culture and sensitivity"], ['I&D', "incision and drainage"], ['staph', "cluster-forming bacterium"]], "Chart abbreviations."),
        T("treatment", "Toenail fungus needs an antifungal drug.", true, "Fungus is treated with an antifungal."),
        S("Spelling", "Spell the term for infection around the nail", 'paronychia', 'par- + onych/o + -ia.', 'paro…')
      ]
    },
    {
      id: 'r6', w: 'ac', title: "Exam-Time Pimples", who: "A 16-year-old girl",
      brief: "A teenager has come in with pimples on her face, forehead and back. She has many blackheads and whiteheads and a few pus pimples. Her skin is oily and she says it gets worse before exams.",
      chart: [["area of damaged tissue", "comedones, papules, pustules"], ["skin", "oily (seborrhea)"], ["Site", "face, forehead, back"], ['Dx', 'acne vulgaris']],
      fig: { a: ['acne-steps', 'acne-forehead'], l: ["Stages of acne", "Acne of the forehead"] },
      steps: [
        M("Structure", "In which gland is sebum made?", ['sebaceous gland', 'eccrine gland', 'apocrine gland', 'ceruminous gland'], "seb/o = sebum."),
        M("area of damaged tissue", "A blackhead means…", ["open comedo", "closed comedo", 'pustule', 'nodule'], "The black comes from oxidised melanin."),
        O("Process", "Put the stages of pimple formation in order", ["Excess sebum secretion", "Blocked follicle (comedo)", "Bacterial growth", "Inflammation and a pustule"], "From oil to pus."),
        T("Differentiation", "In acne vulgaris, vulgaris means “common”.", true, "Common teenage acne."),
        M("treatment", "Which drug group is used for severe, resistant acne?", ["an oral retinoid (isotretinoin)", 'scabicide', 'antiviral', 'antihistamine'], "It is forbidden in pregnancy."),
        S("Spelling", "Spell the term for excess oil secretion", 'seborrhea', 'seb/o + -rrhea.', 'sebo…')
      ]
    },
    /* ================= ضایعه‌ها ================= */
    {
      id: 'r7', w: 'le', title: "Mrs Arlia’s Five Lesions", who: "Rose Arlia, a 50-year-old woman",
      brief: "The physician has examined Mrs Arlia and written five findings. You must explain each one to the patient in simple language.",
      chart: [["1", 'Vascular lesion, lower right leg'], ["2", 'Macule, right hand'], ["3", 'Small papule, right wrist'], ["4", 'Bulla, left hand'], ["5", 'Pilonidal cyst']],
      fig: { a: ['lesions-flat', 'lesions-fluid'], l: ["Flat lesions", "Fluid-filled lesions"] },
      steps: [
        M("area of damaged tissue", "Macule on the right hand means…", ["a small flat discoloured spot", "small blister", "a solid bump", "Open ulcer"], "Flat and under 1 cm."),
        M("area of damaged tissue", "Bulla on the left hand means…", ["a blister larger than 1 cm", "purple patch", "pus pimple", "flakes"], "A large blister."),
        M("area of damaged tissue", "A vascular lesion is a lesion related to…", ["blood vessels", "Sweat glands", "hair", "nail"], "vascul/o = vessel."),
        P("area of damaged tissue", "Match each finding to its explanation", [['macule', "flat spot"], ['papule', "small solid bump"], ['bulla', "large blister"], ['pilonidal cyst', "hairy cyst over the tailbone"]], "Five findings."),
        T("root", "pilonidal means “hair nest”.", true, "pil/o (hair) + nid/o (nest) + -al."),
        S("Spelling", "Spell the term for a small solid raised bump", 'papule', "A small solid bump.", 'pap…')
      ]
    },
    {
      id: 'r8', w: 'le', title: "Spots That Don’t Fade", who: "A 7-year-old girl",
      brief: "A mother says tiny red-purple dots appeared on her daughter’s shins yesterday, and she has several large bruises with no cause. The physician presses a glass on the dots; their colour does not fade.",
      chart: [["area of damaged tissue", "tiny red-purple dots"], ["large bruise", "several unexplained ecchymoses"], ["Pressure test", "does not fade"], ["Action", "urgent platelet count"]],
      fig: { a: ['bleed-spots', 'petechiae'], l: ["Bleeding under the skin", "tiny dots"] },
      steps: [
        M("area of damaged tissue", "Tiny red-purple dots that do not fade under pressure?", ['petechiae', 'erythema', "sun macule", 'urticaria'], "Tiny bleeds under the skin."),
        M("area of damaged tissue", "What is a large blue and purple bruise called?", ['ecchymosis', 'hematoma', 'cyanosis', 'purpura'], 'bruise.'),
        O("measure", "Put the lesions in order from small to large", ['petechiae', 'purpura', 'ecchymosis'], "Dot → patch → bruise."),
        T("Differentiation", "Inflammatory redness (erythema) fades under pressure, but petechiae do not.", true, "In petechiae the blood is outside the vessels."),
        P("Term", "Match each term to its meaning", [['petechiae', "pinpoint bleeding spots"], ['purpura', "purple patches"], ['ecchymosis', "large bruise"], ['hematoma', "raised clot"]], "Bleeding under the skin."),
        S("Spelling", "Spell the plural term for pinpoint bleeding spots", 'petechiae', "Singular: petechia.", 'pete…')
      ]
    },
    /* ================= بیماری‌ها ================= */
    {
      id: 'r9', w: 'ds', title: "Kathleen’s Pressure Sore", who: "Kathleen, an elderly woman after a stroke",
      brief: "After a stroke, Kathleen is bedbound at home. The home-care nurse finds her skin dry with poor turgor. Over the sacral area there is an open sore 2 cm wide and 1 cm deep with a red border. Her elbows and heels are red too. Six months later the sore had worsened, and a plastic surgeon performed debridement and a full-thickness skin graft (FTSG) from her thigh.",
      chart: [["Site", 'sacrum'], ["First stage", 'stage II pressure ulcer'], ["After 6 months", 'stage III'], ["treatment", 'debridement + FTSG from thigh']],
      fig: { a: ['pressure-points', 'ulcer-stages'], l: ["Pressure points", "Ulcer stages"] },
      steps: [
        M("diagnosis", "What is another name for a pressure sore?", ['decubitus ulcer', 'stasis ulcer', 'erosion', 'fissure'], "decubitus = lying down."),
        M("Cause", "What is the main cause of this sore?", ["Long pressure over a bony prominence", "Fungal infection", "tissue injury from heat or chemicals", "allergy"], "Pressure cuts off the blood supply."),
        O("Process", "Put the events in order", ["Long bed rest", "Pressure on the sacrum", "Loss of blood supply and necrosis", "Open ulcer"], "From pressure to ulcer."),
        M("treatment", "What kind of graft is an FTSG from the patient’s own thigh?", ["a full-thickness autograft", 'allograft', 'xenograft', 'split-thickness'], "auto- = self; FTSG = full-thickness."),
        P("prevention", "Match each measure to its purpose", [["Change position every 2 hours", "reduce pressure"], ["Alternating-pressure mattress", "spread the pressure"], ["Adequate nutrition", "tissue repair"], ['debridement', "removing dead tissue"]], "Wound care."),
        S("Spelling", "Spell the term for removing dead tissue from a wound", 'debridement', "Removing dead tissue.", 'debr…')
      ]
    },
    {
      id: 'r10', w: 'ds', title: "Cellulitis of the Shin", who: "A 64-year-old woman",
      brief: "Six weeks ago, intense itching and redness began below the patient’s right knee; a week later pus-filled bumps appeared, burst and left an open sore. Now the 3 × 5 cm sore reaches the deep layer of the skin and its edges show signs of tissue death. Culture of the discharge grew staphylococcus.",
      chart: [["Complaint", 'open sore, right leg'], ["history of", "pruritus, erythema, pustules"], ["a wound", "to the dermis, necrotic edge"], ['C&S', 'Staphylococcus'], ['Dx', 'cellulitis'], ['Tx', 'debridement + antibiotic cream']],
      fig: { a: 'stasis-ulcer', l: ["Leg ulcer"] },
      steps: [
        P("Rewording", "Match each everyday phrase to its medical term", [["Open ulcer", 'ulcer'], ["intense itching", 'pruritus'], ["red skin", 'erythema'], ["pus-filled bumps", 'pustules']], 'Chart note transcription.'),
        M("Term", "“Signs of tissue death” at the edge of the sore means…", ['necrosis', 'cyanosis', 'keratosis', 'sclerosis'], "necr/o = death."),
        M("test", "The test that grew the microbe and found the best antibiotic?", ['culture and sensitivity (C&S)', 'biopsy', 'frozen section', 'Wood lamp'], 'C&S.'),
        M("diagnosis", "What is “inflammation of the skin’s connective tissue” called?", ['cellulitis', 'dermatitis', 'folliculitis', 'impetigo'], 'cellul/o + -itis.'),
        T("treatment", "Debridement means removing the dead and damaged tissue of a wound.", true, "So that the wound can heal."),
        S("Spelling", "Spell the term for a skin specialist", 'dermatologist', 'dermat/o + -logist.', 'derma…')
      ]
    },
    {
      id: 'r11', w: 'ds', title: "Impetigo That Caused an Allergy", who: "A 29-year-old woman",
      brief: "Last week the patient developed an itchy forehead and her physician gave erythromycin (an antibiotic). Two days later the rash covered her whole face and she was admitted with a diagnosis of impetigo. The dermatologist sees that the lesions have become redder, there are pustules on the forehead, nose and cheeks, and the face is so swollen that she can barely open her eyes. Itching of the legs also appeared, which was considered a drug reaction, and the antibiotic was changed.",
      chart: [['Dx', "impetigo; allergic response to erythromycin"], ["finding", "erythematous rash, pustules, facial edema"], ['Rx', "antibiotic changed + antipruritic"]],
      fig: { a: ['impetigo-nose', 'impetigo-lips'], l: ["Impetigo", "Honey-coloured crust"] },
      steps: [
        M("diagnosis", "What kind of infection is impetigo?", ["Bacterial and contagious", "fungal", "Viral", "Parasitic"], "Staph or strep."),
        P("Term", "Match each chart term to its meaning", [['erythematous', "red"], ['pustules', "pus pimples"], ['edema', "swelling"], ['pruritus', "itching"]], 'Exercise 4-9.'),
        M("drug", "What is an antipruritic for?", ["Relieving itching", "Bringing down fever", "Killing fungus", "Numbing"], "Don’t confuse it with an antipyretic (fever reducer)."),
        T("Differentiation", "The leg itching after the antibiotic was considered an allergic drug reaction.", true, "That is why the drug was changed."),
        M("Term", "dermatitis means…", ["skin inflammation", "hair disease", "skin tumour", "nail infection"], 'dermat/o + -itis.'),
        S("Spelling", "Spell the term for a contagious crusting skin infection", 'impetigo', "A superficial bacterial infection.", 'impe…')
      ]
    },
    {
      id: 'r12', w: 'ds', title: "butterfly rash", who: "A 40-year-old woman",
      brief: "An internist has referred the patient to a dermatologist to evaluate SLE. She has a red rash on her cheeks and nose, the rash becomes raised in the sun, she has several areas of hair loss, and her joints are painful and stiff. To rule out other causes the dermatologist takes exfoliative cytology and fungal scrapings, and prescribes a corticosteroid cream and sunscreen.",
      chart: [["Complaint", 'erythema rash cheeks & nose'], ["finding", "photosensitivity, patches of alopecia"], ["test", "exfoliative cytology, fungal scrapings, biopsy"], ['Rx', 'corticosteroid cream + sunscreen']],
      fig: { a: 'discoid-lupus', l: ["Skin lupus"] },
      steps: [
        M("diagnosis", "What does SLE stand for?", ['systemic lupus erythematosus', 'skin lesion examination', 'squamous lesion of epidermis', 'superficial lupus edema'], "A multi-organ autoimmune disease."),
        P("symptom", "Match each sign to its meaning", [['erythema', "red skin"], ['photosensitivity', "sensitivity to light"], ['alopecia', "hair loss"], ['arthralgia', "joint pain"]], "Chart findings."),
        M("test", "Why were the fungal scrapings taken?", ["To rule out a fungal infection as the cause of the rash", "To diagnose tuberculosis", "To measure blood sugar", "To confirm cancer"], "To rule out other causes."),
        M("treatment", "What does a corticosteroid cream do?", ["Reduces inflammation", "Kills bacteria", "kills fungi", "numbing a small area"], "A strong anti-inflammatory."),
        T("prevention", "In lupus, sunscreen is needed because light makes the rash worse.", true, 'photosensitivity.'),
        S("Spelling", "Spell the term for hair loss", 'alopecia', "alopecia areata = patchy.", 'alop…')
      ]
    },
    {
      id: 'r13', w: 'ds', title: "A Kitchen Burn", who: "A 35-year-old man",
      brief: "Hot oil has spilled on the patient. The whole right arm has large blisters and severe pain. The front of the trunk is red and blistered too. A small area on the forearm is white, dry and painless.",
      chart: [["Right arm", "blisters, severe pain"], ["front of trunk", 'blisters'], ["Forearm", 'white, leathery, painless'], ["Action", "BSA calculated with the rule of nines"]],
      fig: { a: ['rule-of-nines', 'burn-depth'], l: ["Rule of nines", "Burn depth"] },
      steps: [
        M("Degree", "What degree are the blistered, very painful areas?", ['second-degree (partial-thickness)', 'first-degree', 'third-degree', 'fourth-degree'], "Into part of the dermis."),
        M("Degree", "The white, dry, painless area of the forearm?", ['third-degree (full-thickness)', 'first-degree', 'superficial', 'erythema'], "The nerves have been destroyed."),
        M("Calculation", "What percentage of BSA is the whole right arm + the front of the trunk?", ["27%", "18%", "36%", "9%"], "9 + 18 = 27."),
        O("treatment", "Put the steps of treating a deep burn in order", ["Cooling and fluid therapy", "Debridement of dead tissue", "Escharotomy if needed", 'skin graft'], "From the emergency department to grafting."),
        T("Term", "An eschar is the same as the scar after healing.", false, "False; an eschar is the black dead tissue of a burn."),
        S("Spelling", "Spell the term for a graft from the patient’s own body", 'autograft', 'auto- + -graft.', 'auto…')
      ]
    },
    /* ================= تومور، تشخیص و درمان ================= */
    {
      id: 'r14', w: 'tx', title: "The Bump Beside Joanne’s Nose", who: "Joanne, a 32-year-old fitness instructor",
      brief: "While washing her face, Joanne noticed “a tiny, firm bump” at the base of her left nostril that has been there for 2 months. She was a lifeguard for years and regularly goes to a tanning salon. She is worried about melanoma. The dermatologist sees a small pearly-white nodule. A plastic surgeon removes the lesion and pathology reports BCC with clean margins. Advice: always SPF 30 and no tanning salons.",
      chart: [["area of damaged tissue", 'pearly-white nodule, left ala'], ["Risk", "sun exposure, tanning bed (UV)"], ['Tx', 'excision'], ['Path', 'BCC, clean margins'], ["Advice", 'SPF 30']],
      fig: { a: ['bcc-pearly', 'skin-cancers'], l: ["Pearly BCC", "The Three Skin Cancers"] },
      steps: [
        M("diagnosis", "BCC means…", ['basal cell carcinoma', 'benign cyst of cheek', 'biopsy of cutaneous cells', 'bulla of cheek'], "Basal cell carcinoma."),
        M("Cause", "What is the likely cause of this cancer?", ["Ultraviolet light (sun and tanning beds)", "Fungal infection", "allergy", "Vitamin D deficiency"], 'actinic effect.'),
        M("area of damaged tissue", "What is a raised solid lesion larger than a papule called?", ['nodule', 'macule', 'vesicle', 'wheal'], "A nodule."),
        P("abbreviation", "Match each abbreviation to its meaning", [['BCC', "basal cell carcinoma"], ['SPF', "sun protection factor"], ['FTSG', "full-thickness graft"], ['MM', "malignant tumour of pigment cells"]], 'Case Study 4-1.'),
        T("Pathology", "“Clean margins” means the whole tumour was removed with a rim of healthy tissue.", true, "Clean margins."),
        S("Spelling", "Spell the term for the skin-sanding treatment once used for her acne scars", 'dermabrasion', 'derm + abrasion.', 'derma…')
      ]
    },
    {
      id: 'r15', w: 'tx', title: "Cancer Returning on the Cheek", who: "A 74-year-old man",
      brief: "Five years ago two facial lesions were biopsied; they were BCC and were removed. Now the lesion on the left cheek has come back, itches and is growing. On examination there is a 10 × 14 mm lesion with marked redness and indistinct borders; the skin around it has lost its colour and has vesicles.",
      chart: [["Reason for consultation", 'recurrence of BCC, left cheek'], ['Hx', 'biopsies: BCC × 2, excised'], ['PE', "marked erythema, depigmentation, vesicles"], ["Advice", 'deep excision + dermatoplasty']],
      fig: { a: ['mohs', 'bcc-ruler'], l: ["layer-by-layer skin cancer surgery", "BCC with a ruler"] },
      steps: [
        P("Term", "Match each term in the report to its meaning", [['pruritus', "itching"], ['erythema', "Redness"], ['depigmentation', "loss of colour"], ['vesicles', "small blisters"]], 'Dermatology Consultation Report.'),
        M("Method", "Which surgery is suitable for sparing the most healthy facial tissue?", ['Mohs surgery', 'liposuction', 'dermabrasion', 'cryotherapy'], "Removal layer by layer."),
        M("Term", "dermatoplasty means…", ["surgical repair of the skin", "removal of skin", "cutting the skin", "sampling the skin"], 'dermat/o + -plasty.'),
        O("Process", "Put the treatment steps in order", ["Biopsy confirming recurrence", "Deep excision of the epidermis and dermis", "Checking the margins", 'dermatoplasty'], "Diagnosis → removal → reconstruction."),
        T("abbreviation", "Hx in a report means history.", true, "History and background."),
        S("Spelling", "Spell the term for removing living tissue for diagnosis", 'biopsy', 'bi/o + -opsy.', 'bio…')
      ]
    },
    {
      id: 'r16', w: 'tx', title: "A Psoriasis Note", who: "A 32-year-old woman",
      brief: "Since adolescence the patient has had intermittent psoriasis that has worsened over the past year after sun exposure. She has itching of the scalp and abdomen. There is no family history of psoriasis. On examination there are thick red plaques with yellowish-white scale on the scalp, ears and trunk, and several firm brown macules and papules on the shins.",
      chart: [['Hx', 'intermittent psoriasis since teens'], ['FH', 'negative for psoriasis'], ['PE', 'erythematous plaques with scales'], ['Dx', "psoriasis vulgaris; multiple histiocytomas"]],
      fig: { a: ['psoriasis-plaque', 'lesions-raised'], l: ["silvery scaly patches", "Raised lesions"] },
      steps: [
        M("abbreviation", "FH in the note means…", ["family history", "past medical history", "examination finding", "quickly frozen tissue slice"], 'family history.'),
        M("Term", "intermittent means…", ["coming and going", "chronic and constant", "severe", "inherited"], 'condition that comes and goes.'),
        P("Term", "Match each term to its meaning", [['plaque', "broad, flat-topped bump"], ['scale', "flakes"], ['macule', "flat spot"], ['pruritus', "intense itching"]], 'Chart note analysis.'),
        M("treatment", "Which light treatment is used for psoriasis?", ['phototherapy (PUVA)', 'cryosurgery', 'liposuction', 'I&D'], "Controlled UV light."),
        T("diagnosis", "A histiocytoma is a benign nodule of the dermis.", true, 'dermatofibroma.'),
        S("Spelling", "Spell the term for a disease of red plaques with silvery scales", 'psoriasis', "The first p is silent.", 'psor…')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* درما — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', "The skin is the body’s largest organ: about 2 square metres and 16% of body weight."],
    ['Lx', "Start the meaning from the suffix: hypo/derm/ic means “pertaining to under the skin”."],
    ['Lx', "If the suffix starts with a vowel, the combining vowel is dropped: dermat/o + -itis = dermatitis."],
    ['Lx', "derm/o, dermat/o and cutane/o all mean skin; -derma is also a suffix for skin."],
    ['Lx', "hidr/o with i means sweat; hydr/o with y means water. Hyperhidrosis is heavy sweating!"],
    ['Lx', "xer/o means dry and xanth/o yellow; xeroderma is dry skin and a xanthoma a yellow lump."],
    ['Lx', "‎-tomy means cutting, ‎-ectomy removal and ‎-tome a cutting instrument."],
    ['Lx', "erythr/o is red, melan/o black, leuk/o white, cyan/o blue and xanth/o yellow."],
    ['Lx', "onych/o means nail but onc/o means tumour; one letter, two worlds."],
    ['Ly', "The epidermis has no vessels (avascular); that is why a superficial scratch does not bleed."],
    ['Ly', "The layers of the epidermis from the top: Corneum, Lucidum, Granulosum, Spinosum, Basale."],
    ['Ly', "The epidermis renews itself about every 4 weeks; most household dust is our dead skin flakes!"],
    ['Ly', "The number of melanocytes is about the same in everyone; the amount of melanin differs."],
    ['Ly', "Fingerprints are made by the dermal papillae."],
    ['Ly', "The Mantoux test is intradermal (ID) and insulin is subcutaneous (SubQ)."],
    ['Ly', "Collagen gives strength and elastin elasticity; both are made by fibroblasts."],
    ['Ly', "A keloid is a scar that goes beyond the edge of the wound, from overproduction of collagen."],
    ['Ac', "trich/o and pil/o both mean hair; pilonidal means “hair nest”."],
    ['Ac', "The arrector pili is a tiny muscle that makes the hair stand up: goose bumps."],
    ['Ac', "lunula means little moon: the white half-moon at the base of the nail."],
    ['Ac', "Paronychia is an infection around the nail; para- means beside."],
    ['Ac', "The black of a blackhead comes from oxidised melanin, not dirt."],
    ['Ac', "Eccrine glands are all over the body; apocrine glands are in the armpits and become active at puberty."],
    ['Ac', "Beau lines are transverse grooves in the nails that appear after a severe illness."],
    ['Le', "A macule is flat and a papule raised; for both the size line is 1 centimetre."],
    ['Le', "A vesicle is a small blister and a bulla a large one (over 1 centimetre)."],
    ['Le', "Petechiae do not fade under finger pressure; inflammatory redness does."],
    ['Le', "erythema is a noun (redness) and erythematous an adjective (red)."],
    ['Le', "An erosion removes only the epidermis and heals without a scar; an ulcer reaches the dermis."],
    ['Le', "An antipruritic stops itching; an antipyretic reduces fever. Don’t mix them up!"],
    ['Le', "From small to large: petechiae → purpura → ecchymosis."],
    ['Ds', "Ringworm (tinea) is a fungus, not a worm!"],
    ['Ds', "tinea + the site: capitis head, corporis body, cruris groin, pedis foot, unguium nail."],
    ['Ds', "Shingles is the chickenpox virus waking up in one nerve; only one side of the body."],
    ['Ds', "Staph grows in clusters and strep in chains."],
    ['Ds', "Honey-coloured crusts around a child’s nose = impetigo."],
    ['Ds', "Psoriasis: red plaques with silvery scales on the elbows and knees."],
    ['Ds', "Rule of nines: head 9, each arm 9, each leg 18, trunk 36, genital area 1."],
    ['Ds', "A third-degree burn may be painless; the nerves have burned too."],
    ['Ds', "The most common site of a pressure sore is the sacral area (sacrum)."],
    ['Ds', "An eschar is the black dead tissue of a burn; a scar is a healed wound."],
    ['Tx', "BCC is the most common skin cancer; melanoma the most dangerous."],
    ['Tx', "ABCDE: Asymmetry, irregular Border, several Colours, Diameter over 6 mm, Evolving."],
    ['Tx', "biopsy = bi/o (living) + -opsy (viewing)."],
    ['Tx', "An autograft is from the patient, an allograft from another person, a xenograft from an animal."],
    ['Tx', "Mohs surgery removes cancer layer by layer and spares the most healthy tissue."],
    ['Tx', "ID means intradermal, but I&D means incision and drainage!"],
    ['Tx', "bid twice, tid three times and qid four times a day; hs at bedtime."],
    ['Tx', "SPF 30 blocks about 97% of UVB rays; reapply every 2 hours."],
    ['Tx', "In the Mantoux test the width of the induration is read, not the redness."]
  ];
  const COLORS = { Lx: '#D9643A', Ly: '#D9506E', Ac: '#A0673A', Le: '#D48A00', Ds: '#C8423C', Tx: '#1F9E8F', '': '#D9643A' };
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
/* درما — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و ماشین‌حساب سوختگی (قانون نُه‌ها)
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'derma.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: "Dictionary", color: '#D9643A' },
    { id: 'parse', sym: '✂', name: "Word parser", color: '#B24E26' },
    { id: 'roots', sym: '-o-', name: "Roots and suffixes", color: '#1F9E8F' },
    { id: 'abbr', sym: 'BCC', name: "Abbreviations", color: '#1899D6' },
    { id: 'ref', sym: '9%', name: "Burn calculator", color: '#C8423C' }
  ];
  let cur = 'dict';
  const st = { q: '', w: '', k: '', parse: 'onychomycosis', burn: {}, open: null, limit: 40 };
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
      <p class="disclaimer">⚕️ Derma is a learning tool; the dictionary and burn calculator do not replace examination and clinical judgment.</p>
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
  const dict = () => `<div class="tpane">${searchBox("Search: derm, nail, tinea…")}
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
  const SAMPLES = ['onychomycosis', 'hyperhidrosis', 'subcutaneous', 'dermatoplasty', 'xanthoderma', 'rhytidectomy', 'onychocryptosis', 'pediculosis'];
  const parse = () => `<div class="tpane">
    <p class="muted">Type a medical word and it will be broken into prefix, root and suffix. The golden rule: start the meaning from the <b>suffix</b>, then the prefix, and finally the roots.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. dermatitis"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: "prefix", root: "root", suffix: "suffix" };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox("Search: onych, hair, -itis…")}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]} list <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b class="en-text">${esc(r.a)}</b><span>${esc(r.fa)}</span><small class="en-text">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox("Search: BCC, graft, biopsy…")}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>Abbreviation</th><th>Full form and meaning</th></tr>${list.map(a => `<tr><td><span class="en-text">${esc(a.a)}</span></td><td><span class="en-text abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- ماشین‌حساب سوختگی: قانون نُه‌ها (بزرگسال) ---------- */
  const NINES = [
    ['head', "Head and neck", 9], ['armR', "Right arm", 9], ['armL', "Left arm", 9],
    ['trunkF', "front of trunk", 18], ['trunkB', "back of trunk", 18],
    ['legR', "Right leg", 18], ['legL', "Left leg", 18], ['groin', "Genital area", 1]
  ];
  const burnSum = () => NINES.reduce((a, r) => a + (st.burn[r[0]] ? r[2] * (st.burn[r[0]] === 'h' ? 0.5 : 1) : 0), 0);
  const burnOut = () => { const v = burnSum(); return `<b>${fa(v)}%</b> <span>of body surface (BSA)</span><small>${v === 0 ? "Select the burned areas" : v < 10 ? "Limited burn" : v < 20 ? "Moderate burn; medical assessment" : "Extensive burn; needs fluid therapy and a burn centre"}</small>`; };
  const ref = () => `<div class="tpane"><p class="muted">Select the burned areas; “half” means half of that area. Only second- and third-degree burns are counted.</p>
    <div class="burn">${NINES.map(r => `<div class="burn__r"><span class="burn__n">${r[1]} <small>${fa(r[2])}%</small></span><span class="seg">${[['', "none"], ['h', "half"], ['f', "Full"]].map(o => `<button class="seg__b ${(st.burn[r[0]] || '') === o[0] ? 'is-on' : ''}" data-burn="${r[0]}" data-v="${o[0]}">${o[1]}</button>`).join('')}</span></div>`).join('')}</div>
    <div class="burn__out" aria-live="polite">${burnOut()}</div>
    ${EA.ui.figCard({ a: ['rule-of-nines', 'burn-depth'], l: ["Rule of nines", "Burn degree"] })}
    <table class="mini"><tr><th>Degree</th><th>Layer</th><th>Appearance</th></tr>
      <tr><td>First <bdi dir="ltr">(superficial)</bdi></td><td>epidermis</td><td>red and painful</td></tr>
      <tr><td>Second <bdi dir="ltr">(partial-thickness)</bdi></td><td>epidermis and part of the dermis</td><td>blisters and severe pain</td></tr>
      <tr><td>Third <bdi dir="ltr">(full-thickness)</bdi></td><td>epidermis and the whole dermis</td><td>white or charred, sometimes painless</td></tr></table></div>`;

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
      const bn = e.target.closest('[data-burn]');
      if (bn) { if (bn.dataset.v) st.burn[bn.dataset.burn] = bn.dataset.v; else delete st.burn[bn.dataset.burn]; sfx('select'); return redraw(el); }
    });
    el.addEventListener('input', e => {
      if (e.target.matches('[data-tq]')) { st.q = e.target.value; st.limit = 40; redraw(el, true); }
      else if (e.target.matches('[data-tp]')) { st.parse = e.target.value; el.querySelector('.tout').innerHTML = parseOut(); }
    });
  }

  EA.tools = { view, bind, TOOLS, NINES, burnSum: () => burnSum() };
})();
  };
  D.ready = true;
})(window.ACADEMY_SUBCOURSES);
