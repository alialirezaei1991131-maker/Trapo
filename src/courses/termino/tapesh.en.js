/* تراپو • ترمینو — حیطه «tapesh» (Cardiovascular System)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_tapesh;
  D.css = ".certbar{width: 100%; margin-top: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px; border: 0; border-radius: 16px; padding: 14px 18px; font-weight: 800; background: linear-gradient(120deg, #d6304f, #f08c00); color: #fff; box-shadow: 0 4px 0 var(--brand-d); text-align: start;}\n.cert{width: 100%; padding: 10px; background: linear-gradient(135deg, #4f5bd5, #e03131, #f08c00, #0c8599, #ae3ec9, #2f9e44); border-radius: 20px;}\n[lang=\"fa\"]{font-family: Vazirmatn, Tahoma, system-ui, sans-serif;}\ntable.ref .ref__v{font-family: Nunito, system-ui, sans-serif; font-weight: 800; white-space: nowrap; text-align: left;}\n.recap{margin: 8px 0 4px; padding: 12px 14px; border-radius: 16px; background: color-mix(in srgb, var(--wc, var(--brand)) 9%, var(--bg)); border: 2px solid color-mix(in srgb, var(--wc, var(--brand)) 35%, var(--line));}\n.recap__h{display: block; font-size: 14px; font-weight: 900; color: color-mix(in srgb, var(--wc, var(--brand)) 80%, var(--text)); margin-bottom: 6px;}\n.recap ul{margin: 0; padding: 0; list-style: none; display: grid; gap: 8px;}\n.recap li{position: relative; padding-inline-start: 24px; font-size: 15px; line-height: 1.8;}\n.recap li::before{content: \"✓\"; position: absolute; inset-inline-start: 2px; top: 0; font-weight: 900; color: var(--green-t);}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* تپش — هسته: فضای نام، متن‌ها، رقم فارسی و سازنده‌های کوتاه محتوا
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
  EA.APP = { name: "Tapesh", key: 'tapesh', title: "Tapesh • Cardiovascular Terminology" };

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
    name: "Tapesh", key: 'tapesh', title: "Tapesh • Cardiovascular Terminology", certCode: 'TP',
    subject: "Medical terminology of the cardiovascular system",
    kicker: "❤️ Medical terminology: The Cardiovascular System",
    hello: "Hi, I’m <b>Tapesh</b>;",
    landP: () => `Hi, I’m <b>Tapesh</b>, a heart that reads its own ECG! Here you’ll learn how the heart and vessels are built and how they work, name their diseases, tests and treatments with the exact word, and <b>decode</b> every new word yourself. ${fa(EA.lex.TERMS.length)} terms with pronunciation and meaning, ${fa(Object.keys(EA.IMG).length || 65)} pictures from the textbooks, ${fa(EA.rounds.length)} clinical charts and Leitner cards are waiting for you.`,
    disclaimer: "Tapesh is an educational tool and does not replace medical references, clinical judgment or a physician’s orders.",
    eyes: "Dozens of textbook pictures and teaching figures, from the chambers and valves of the heart and the path of blood to the ECG, angiography and stents.",
    outcomes: [
          "Break every cardiovascular word into prefix, root and suffix and build new words",
          "Name the layers, chambers, valves and great vessels of the heart and the path of blood exactly",
          "Describe the cardiac cycle, the conduction system, the ECG waves, blood pressure and pulse",
          "Know the arteries, veins, capillaries, the pulmonary and systemic circulations and the coronary vessels",
          "Recognise cardiovascular diseases, from atherosclerosis and heart attack to arrhythmias and congenital defects",
          "Read cardiac tests, imaging, surgery, drugs and chart abbreviations"
        ],
    endText: "Just 5 minutes a day. A few weeks from now you’ll read a cardiac patient’s chart like your mother tongue.",
    obHello: "Hi! I’m Tapesh, a heart that reads its own ECG 💓 What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “Body Language” is the best start; that’s where the word-building pieces are taught!",
    demo: () => ({
    q: "The chart says: <b dir=\"ltr\">bradycardia</b>. It means…",
    fig: { a: ['rate-strips'], l: ["Slow, normal and fast heart rate"] },
    opts: ["A heart rate slower than normal", "A heart rate faster than normal", "Enlargement of the heart", "Inflammation of the inner lining of the heart"],
    why: `${EA.K.wb('brady-', 'cardi/o', '-ia')}<br><b>brady-</b> = slow • <b>cardi/o</b> = heart • <b>-ia</b> = condition. So it means a <b>slow heart rate</b>: fewer than 60 beats a minute. Start the meaning from the suffix!`
  }),
    titles: ["New Beat", "Atrium Dweller", "Hard-Working Ventricle", "Valve Guardian", "Coronary Expert", "Sinus Node", "ECG Reader", "Precise Sphygmomanometer", "Vessel Expert", "Arrhythmia Detective", "CPR Rescuer", "Commander of Tapesh", "Master of the Language of the Heart"],
    leagueRoles: ["Medical student", "Nursing student", "Lab-science student", "Lab scientist", "Nutrition student", "ICU nurse", "Clinical dietitian", "Internal-medicine resident", "Midwifery student", "Pharmacy student", "Surgical technologist", "Haematology ward nurse"],
    firstBadge: ['💓', "First Beat"],
    worldBadges: { lx: ['🧩', "Decoder"], an: ['🫀', "Heart Architect"], ep: ['⚡', "ECG Reader"], vc: ['🩸', "Vessel Expert"], ds: ['💔', "Disease Detective"], tx: ['💊', "Healer"] },
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
    return `<svg class="yona tapesh yona--${m}" viewBox="0 0 120 150" width="${size || 120}" height="${(size || 120) * 1.25}" aria-hidden="true" style="--c:${c}">
      <ellipse cx="60" cy="144" rx="32" ry="5" fill="currentColor" opacity=".12"/>
      <g class="yona-body">
        <path d="M58 124 C22 102 6 78 8 54 C10 30 32 20 48 30 C53 33 56 37 58 41 C60 37 63 33 68 30 C84 20 106 30 108 54 C110 78 94 102 58 124Z" fill="var(--c)"/>
        <path d="M58 124 C22 102 6 78 8 54 C10 30 32 20 48 30 C53 33 56 37 58 41 C60 37 63 33 68 30 C84 20 106 30 108 54 C110 78 94 102 58 124Z" fill="#000" opacity=".12"/>
        <path d="M58 118 C27 98 13 77 15 56 C17 36 35 28 48 36 C53 39 56 43 58 47 C60 43 63 39 68 36 C81 28 99 36 101 56 C103 77 89 98 58 118Z" fill="var(--c)"/>
        <path d="M58 47 C56 60 57 84 58 112" stroke="#000" stroke-width="2.2" fill="none" opacity=".08" stroke-linecap="round"/>
        <ellipse cx="${cx}" cy="${cy + 8}" rx="30" ry="25" fill="#fff" opacity=".08"/>
        <path d="M22 50 C24 38 34 32 44 36" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".55"/>
        <circle cx="${cx + 32}" cy="${cy - 26}" r="5" fill="#fff" opacity=".2"/><ellipse cx="${cx + 34}" cy="${cy + 6}" rx="5" ry="2.6" fill="#fff" opacity=".2" transform="rotate(-30 ${cx + 34} ${cy + 6})"/>
        <g transform="translate(100 112)"><circle r="17" fill="#FFC800" stroke="#fff" stroke-width="3"/><path d="M-12 1 H-6 L-3 -4 L0 1 L3 -11 L6 9 L8 1 H12" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
        <path class="negar-spark" d="M100 18 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
        ${brows}${eyes}
        <ellipse cx="${cx - 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/><ellipse cx="${cx + 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/>
        ${mouths[m] || mouths.happy}${tear}
      </g>
    </svg>`;
  }
  };
})(window);
/* تپش — واژه‌ها (ساخته‌شده خودکار با tools/build_data.py؛ دستی ویرایش نکنید)
 * [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارها] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [
    ["abdominal aorta", "ab-DOM-ih-nal ay-OR-tah", "Part of the descending aorta below the diaphragm that supplies the abdominal organs and legs.", "abdominal part of the aorta", "vc", "ves", []],
    ["abdominal aortic aneurysm", "ab-DOM-ih-nal ay-OR-tik AN-yoo-rizm", "Aneurysm of the abdominal aorta; rupture causes life-threatening bleeding.", "bulging of the abdominal aorta", "ds", "dz", ["AAA"]],
    ["ACE inhibitor", "ays in-HIB-ih-ter", "Drug that lowers blood pressure by blocking the enzyme that forms angiotensin II.", "blood-pressure drug blocking ACE", "tx", "rx", ["ACE"]],
    ["anastomosis", "ah-nas-toh-MOH-sis", "Natural or surgical connection between two vessels.", "surgical joining of two vessels", "vc", "ves", []],
    ["aneurysm", "AN-yoo-rizm", "Ballooning of a weakened part of an artery wall that may rupture.", "ballooning of an artery wall", "ds", "dz", []],
    ["aneurysmectomy", "an-yoo-riz-MEK-toh-mee", "Surgical removal of an aneurysm.", "removal of an aneurysm", "tx", "proc", []],
    ["angina pectoris", "an-JYE-nah PEK-toh-ris", "Chest pain or pressure caused by temporary ischemia of the heart muscle, often with exertion; also called angina.", "chest pain from poor heart blood flow", "ds", "dz", []],
    ["angiogram", "AN-jee-oh-gram", "X-ray image of a blood vessel produced by angiography.", "X-ray image of a vessel", "tx", "dx", []],
    ["angiography", "an-jee-OG-rah-fee", "X-ray imaging of blood vessels after injecting a contrast dye.", "X-ray imaging of vessels", "tx", "dx", []],
    ["angioplasty", "AN-jee-oh-plas-tee", "Procedure that opens a narrowed artery by inflating a small balloon at the tip of a catheter.", "opening a vessel with a balloon", "tx", "proc", ["PTCA", "PCI"]],
    ["angioscopy", "an-jee-OS-koh-pee", "Viewing the inside of a blood vessel with a fiberoptic scope passed through a catheter.", "viewing inside a vessel", "tx", "dx", []],
    ["angiotensin receptor blocker", "an-jee-oh-TEN-sin ree-SEP-ter BLOK-er", "Drug that lowers blood pressure by blocking the action of angiotensin II.", "blood pressure drug ending in -sartan", "tx", "rx", ["ARB"]],
    ["antiarrhythmic", "an-tye-ah-RITH-mik", "Drug that prevents or corrects an irregular heart rhythm.", "drug for irregular heart rhythm", "tx", "rx", []],
    ["anticoagulant", "an-tye-koh-AG-yoo-lant", "Drug that prevents or delays blood clotting, such as heparin or warfarin.", "drug that delays clotting", "tx", "rx", []],
    ["antihypertensive", "an-tye-hye-per-TEN-siv", "Drug that lowers high blood pressure.", "drug that lowers blood pressure", "tx", "rx", []],
    ["antiplatelet agent", "an-tye-PLAYT-let AY-jent", "Drug that keeps platelets from clumping, such as aspirin.", "drug that stops platelets clumping", "tx", "rx", []],
    ["aorta", "ay-OR-tah", "Largest artery of the body; carries oxygenated blood from the left ventricle to the systemic circulation.", "main artery from the heart", "an", "anat", []],
    ["aortic arch", "ay-OR-tik arch", "Curved part of the aorta that gives branches to the head and arms.", "curve of the aorta", "vc", "ves", []],
    ["aortic valve", "ay-OR-tik valv", "Semilunar valve between the left ventricle and the aorta.", "valve between left ventricle and aorta", "an", "anat", []],
    ["apex", "AY-peks", "Lower pointed tip of the heart, directed downward and to the left.", "pointed tip of the heart", "an", "anat", []],
    ["apical pulse", "AP-ih-kal puls", "Heartbeat heard with a stethoscope over the apex of the heart.", "heartbeat felt at the heart’s tip", "ep", "elec", []],
    ["arrhythmia", "ah-RITH-mee-ah", "Irregularity or loss of the normal rhythm of the heartbeat; also called dysrhythmia.", "irregular heart rhythm", "ds", "dz", []],
    ["arterial", "ar-TEER-ee-al", "Pertaining to an artery.", "pertaining to an artery", "lx", "adj", []],
    ["arteriole", "ar-TEER-ee-ohl", "Small artery that carries blood into a capillary bed; controls blood pressure by narrowing or widening.", "small artery", "vc", "ves", []],
    ["arteriosclerosis", "ar-teer-ee-oh-skleh-ROH-sis", "Thickening, hardening and loss of elasticity of the arterial walls; also called hardening of the arteries.", "hardening of the arteries", "ds", "dz", []],
    ["artery", "AR-ter-ee", "Thick-walled elastic blood vessel that carries blood away from the heart.", "vessel carrying blood from the heart", "vc", "ves", []],
    ["artificial pacemaker", "ar-tih-FISH-al PAYS-may-ker", "Battery-powered device implanted under the skin that sends electrical impulses to keep the heartbeat regular.", "implanted device that paces the heartbeat", "tx", "proc", []],
    ["ascending aorta", "ah-SEN-ding ay-OR-tah", "First part of the aorta rising from the left ventricle; gives off the coronary arteries.", "rising part of the aorta", "vc", "ves", []],
    ["aspirin", "AS-pih-rin", "Antiplatelet drug given to prevent clots in coronary artery disease and during a heart attack.", "acetylsalicylic acid", "tx", "rx", ["ASA"]],
    ["asystole", "ay-SIS-toh-lee", "Absence of any electrical activity or contraction of the heart; a flat line on the ECG.", "flat line; no electrical activity", "ds", "dz", []],
    ["atherectomy", "ath-er-EK-toh-mee", "Removal of plaque from an artery with a cutting or grinding catheter.", "removal of plaque from an artery", "tx", "proc", []],
    ["atheroma", "ath-er-OH-mah", "Fatty deposit (plaque) in the inner wall of an artery.", "fatty mass in an artery wall", "ds", "dz", []],
    ["atherosclerosis", "ath-er-oh-skleh-ROH-sis", "Most common form of arteriosclerosis, caused by fatty plaque building up in the artery wall and narrowing the lumen.", "fatty plaque build-up in arteries", "ds", "dz", []],
    ["atrial", "AY-tree-al", "Pertaining to an atrium.", "pertaining to an atrium", "lx", "adj", []],
    ["atrial fibrillation", "AY-tree-al fib-rih-LAY-shun", "Quivering of the atria with an irregular, often fast heartbeat; raises the risk of clots and stroke.", "quivering of the atria", "ds", "dz", ["AF", "A-fib"]],
    ["atrioventricular node", "ay-tree-oh-ven-TRIK-yoo-lar nohd", "Node in the lower interatrial septum that briefly delays the impulse and passes it to the bundle of His.", "relay station delaying the signal to the ventricles", "ep", "elec", ["AV node"]],
    ["atrioventricular valve", "ay-tree-oh-ven-TRIK-yoo-lar valv", "Valve between an atrium and a ventricle: the tricuspid valve on the right and the mitral valve on the left.", "valve between atrium and ventricle", "an", "anat", ["AV"]],
    ["atrium", "AY-tree-um", "One of the two upper chambers of the heart that receive blood returning to the heart.", "upper heart chamber", "an", "anat", []],
    ["atrium / atria", "AY-tree-um / AY-tree-ah", "Singular and plural of the upper receiving chamber of the heart (-um becomes -a).", "upper receiving chamber of the heart", "lx", "pl", []],
    ["auscultation", "aws-kul-TAY-shun", "Listening to sounds within the body, usually with a stethoscope.", "listening with a stethoscope", "ep", "elec", []],
    ["automated external defibrillator", "AW-toh-may-ted eks-TER-nal dee-FIB-rih-lay-ter", "Portable device that analyzes the rhythm and tells a lay rescuer when to deliver a shock.", "public shock device that reads the rhythm itself", "tx", "proc", ["AED"]],
    ["avascular", "ay-VAS-kyoo-lar", "Without blood vessels.", "without blood vessels", "lx", "adj", []],
    ["B-type natriuretic peptide", "bee-type nay-tree-yoo-RET-ik PEP-tide", "Hormone released by stretched ventricles; high blood levels point to heart failure.", "hormone from stretched ventricles; raised in heart failure", "tx", "dx", ["BNP"]],
    ["beta-blocker", "BAY-tah BLOK-er", "Drug that slows the heart rate and lowers blood pressure by blocking beta receptors.", "drug that slows the heart", "tx", "rx", []],
    ["blood pressure", "blud PRESH-ur", "Force of blood against the walls of the arteries, written as systolic over diastolic in mmHg.", "force of blood on the artery walls", "ep", "elec", ["BP", "mmHg"]],
    ["brachial artery", "BRAY-kee-al AR-ter-ee", "Artery of the upper arm; used to measure blood pressure.", "main artery of the upper arm", "vc", "ves", []],
    ["bradycardia", "brad-ee-KAR-dee-ah", "Slow heart rate, fewer than 60 beats per minute.", "slow heart rate", "ep", "elec", []],
    ["bruit", "broo-EE", "Blowing sound heard over a narrowed artery with a stethoscope.", "sound over a narrowed vessel", "ds", "sx", []],
    ["bundle branches", "BUN-dul BRANCH-ez", "Right and left divisions of the bundle of His that carry impulses down each side of the septum.", "branches of the bundle of His", "ep", "elec", []],
    ["bundle of His", "BUN-dul uv hiss", "Group of conducting fibers that carries the impulse from the AV node into the interventricular septum.", "conduction bridge from the AV node to the ventricles", "ep", "elec", []],
    ["C-reactive protein", "see ree-AK-tiv PROH-teen", "Blood marker of inflammation; high levels are linked with heart disease risk.", "blood marker of inflammation", "tx", "dx", ["CRP"]],
    ["calcium channel blocker", "KAL-see-um CHAN-el BLOK-er", "Drug that relaxes the vessel walls and slows the heart by blocking calcium entry into muscle cells.", "drug that widens vessels and slows the rate", "tx", "rx", ["CCB"]],
    ["capillary", "KAP-ih-lair-ee", "Microscopic vessel with a wall one cell thick where oxygen, nutrients and wastes are exchanged with tissues.", "hair-thin vessel where exchange happens", "vc", "ves", []],
    ["cardiac", "KAR-dee-ak", "Pertaining to the heart.", "relating to the heart", "lx", "adj", []],
    ["cardiac arrest", "KAR-dee-ak ah-REST", "Sudden stop of effective heart pumping, causing loss of pulse and consciousness.", "sudden stop of the heart", "ds", "dz", []],
    ["cardiac catheterization", "KAR-dee-ak kath-eh-ter-ih-ZAY-shun", "Passing a thin tube (catheter) through a vessel of the arm or groin into the heart to measure pressures and inject dye.", "threading a tube into the heart", "tx", "dx", ["cath"]],
    ["cardiac cycle", "KAR-dee-ak SYE-kul", "One complete heartbeat: contraction (systole) and relaxation (diastole) of the atria and ventricles.", "one heartbeat’s contraction and rest", "ep", "elec", []],
    ["cardiac enzymes", "KAR-dee-ak EN-zymz", "Blood tests for proteins released by damaged heart muscle, such as troponin and CK-MB.", "proteins released by damaged heart muscle", "tx", "dx", ["CK-MB"]],
    ["cardiac output", "KAR-dee-ak OWT-put", "Volume of blood pumped by the left ventricle per minute; heart rate times stroke volume.", "blood pumped per minute", "ep", "elec", ["CO"]],
    ["cardiac sonographer", "KAR-dee-ak soh-NOG-rah-fer", "Technologist who performs ultrasound examinations of the heart (echocardiograms).", "heart ultrasound technician", "lx", "sci", []],
    ["cardiac surgeon", "KAR-dee-ak SUR-jun", "Surgeon who performs operations on the heart and great vessels, such as bypass grafting, valve repair and transplantation.", "heart surgeon", "lx", "sci", []],
    ["cardiac tamponade", "KAR-dee-ak tam-poh-NAYD", "Compression of the heart by fluid or blood collecting in the pericardial sac.", "heart squeezed by fluid in its sac", "ds", "dz", []],
    ["cardiogenic shock", "kar-dee-oh-JEN-ik shok", "Shock caused by severe failure of the heart to pump, often after a large heart attack.", "shock from pump failure", "ds", "dz", []],
    ["cardiologist", "kar-dee-OL-oh-jist", "Physician who specializes in diagnosing and treating diseases of the heart and blood vessels in adults.", "heart specialist", "lx", "sci", []],
    ["cardiology", "kar-dee-OL-oh-jee", "Branch of medicine that studies the heart and blood vessels and treats their diseases.", "study of the heart", "lx", "sci", []],
    ["cardiomegaly", "kar-dee-oh-MEG-ah-lee", "Enlargement of the heart.", "enlarged heart", "ds", "dz", []],
    ["cardiomyopathy", "kar-dee-oh-mye-OP-ah-thee", "Disease of the heart muscle that weakens or stiffens it.", "heart muscle disease", "ds", "dz", []],
    ["cardiopulmonary", "kar-dee-oh-PUL-moh-nair-ee", "Pertaining to the heart and lungs.", "pertaining to heart and lungs", "lx", "adj", []],
    ["cardiopulmonary resuscitation", "kar-dee-oh-PUL-moh-nair-ee ree-sus-ih-TAY-shun", "Emergency chest compressions and rescue breaths to keep blood flowing during cardiac arrest.", "chest compressions and breaths in cardiac arrest", "tx", "proc", ["CPR"]],
    ["cardiovascular", "kar-dee-oh-VAS-kyoo-lar", "Pertaining to the heart and blood vessels.", "heart and blood vessels", "lx", "adj", ["CV"]],
    ["cardiovascular technologist", "kar-dee-oh-VAS-kyoo-lar tek-NOL-oh-jist", "Allied health professional who assists with cardiac tests such as ECG, stress testing, echocardiography and catheterization.", "performs ECGs and exercise tests", "lx", "sci", []],
    ["cardioversion", "kar-dee-oh-VER-zhun", "Timed electrical shock or medication used to convert an abnormal rhythm to normal.", "shock to restore normal rhythm", "tx", "proc", []],
    ["carotid artery", "kah-ROT-id AR-ter-ee", "Main artery on each side of the neck that supplies the head and brain.", "main artery of the neck", "vc", "ves", []],
    ["carotid pulse", "kah-ROT-id puls", "Pulse felt over the carotid artery in the neck; checked in emergencies.", "neck pulse", "ep", "elec", []],
    ["catheter", "KATH-eh-ter", "Thin flexible tube inserted into a vessel or body cavity.", "thin flexible tube", "tx", "dx", []],
    ["catheter ablation", "KATH-eh-ter ab-LAY-shun", "Destruction of a small area of heart tissue causing an arrhythmia, using heat or cold delivered through a catheter.", "destroying an arrhythmia focus", "tx", "proc", []],
    ["cholesterol", "koh-LES-ter-ol", "Fatty substance made by the liver and eaten in food; high levels promote atherosclerosis.", "fatty substance that forms plaque", "tx", "dx", []],
    ["chorda tendinea / chordae tendineae", "KOR-dah ten-DIN-ee-ah / KOR-dee ten-DIN-ee-ee", "Singular and plural of the tendon-like cords that anchor the AV valve cusps (-a becomes -ae).", "cords tying AV valve cusps to the ventricle wall", "lx", "pl", []],
    ["chordae tendineae", "KOR-dee ten-DIN-ee-ee", "Tendon-like cords that connect the cusps of the atrioventricular valves to the papillary muscles and keep them from flipping back.", "cords that anchor valve flaps", "an", "anat", []],
    ["circumflex artery", "SER-kum-fleks AR-ter-ee", "Branch of the left coronary artery that curves around the left side to the back of the heart.", "LCA branch curving round the left side", "an", "anat", []],
    ["claudication", "klaw-dih-KAY-shun", "Cramping leg pain on walking that eases with rest, caused by poor arterial blood flow.", "leg pain on walking", "ds", "sx", []],
    ["coarctation of the aorta", "koh-ark-TAY-shun uv thee ay-OR-tah", "Congenital narrowing of a segment of the aorta.", "congenital narrowing of the aorta", "ds", "dz", ["CoA"]],
    ["collateral circulation", "koh-LAT-er-al ser-kyoo-LAY-shun", "Alternative route formed by small vessels around a blocked artery.", "side vessels bypassing a slow narrowing", "vc", "ves", []],
    ["commissurotomy", "kom-ih-shur-OT-oh-mee", "Surgical cutting of the fused edges (commissures) of a narrowed valve, usually the mitral valve; also called valvotomy.", "opening a narrowed valve", "tx", "proc", []],
    ["conduction system", "kon-DUK-shun SIS-tem", "Specialized tissue that starts and spreads electrical impulses through the heart: SA node, AV node, bundle of His, bundle branches and Purkinje fibers.", "pathway carrying the heart’s electrical signal", "ep", "elec", []],
    ["congenital heart disease", "kon-JEN-ih-tal hart dih-ZEEZ", "Heart defect present at birth.", "structural heart defect present from birth", "ds", "dz", ["CHD"]],
    ["congestive heart failure", "kon-JES-tiv hart FAYL-yur", "Heart failure with fluid backing up into the lungs and body tissues.", "weak pump with fluid backing up", "ds", "dz", ["CHF"]],
    ["coronary", "KOR-oh-nair-ee", "Pertaining to the heart; describes the arteries that encircle the heart like a crown and supply the heart muscle.", "crown-like; of the heart’s vessels", "lx", "adj", []],
    ["coronary angiography", "KOR-oh-nair-ee an-jee-OG-rah-fee", "Angiography of the coronary arteries during cardiac catheterization to find blockages.", "X-ray imaging of the heart’s own arteries with dye", "tx", "dx", []],
    ["coronary artery", "KOR-oh-nair-ee AR-ter-ee", "One of the arteries that branch from the aorta and supply oxygenated blood to the myocardium.", "artery feeding the heart muscle", "an", "anat", []],
    ["coronary artery bypass graft", "KOR-oh-nair-ee AR-ter-ee BYE-pas graft", "Surgery that uses a vein or artery from elsewhere in the body to route blood around a blocked coronary artery.", "coronary bypass surgery", "tx", "proc", ["CABG"]],
    ["coronary artery disease", "KOR-oh-nair-ee AR-ter-ee dih-ZEEZ", "Narrowing of the coronary arteries, usually by atherosclerosis, that reduces blood flow to the heart muscle.", "plaque narrowing the heart’s own arteries", "ds", "dz", ["CAD"]],
    ["coronary circulation", "KOR-oh-nair-ee ser-kyoo-LAY-shun", "Blood supply to the heart muscle itself through the coronary arteries and veins.", "blood supply to the heart muscle itself", "vc", "ves", []],
    ["coronary sinus", "KOR-oh-nair-ee SYE-nus", "Large vein on the back of the heart that collects blood from the heart muscle and empties into the right atrium.", "vein draining heart muscle blood into the RA", "an", "anat", []],
    ["CT angiography", "see-tee an-jee-OG-rah-fee", "Computed tomography of vessels with contrast dye.", "vessel imaging by scanner, without a catheter", "tx", "dx", ["CTA"]],
    ["cusp", "kusp", "One of the flaps (leaflets) of a heart valve.", "flap of a valve", "an", "anat", []],
    ["cyanosis", "sye-ah-NOH-sis", "Bluish color of the skin and lips caused by too little oxygen in the blood.", "bluish skin", "ds", "sx", []],
    ["deep vein thrombosis", "deep vane throm-BOH-sis", "Blood clot in a deep vein, usually of the leg; can break off and travel to the lungs.", "clot in a deep leg vein", "ds", "dz", ["DVT"]],
    ["defibrillation", "dee-fib-rih-LAY-shun", "Electrical shock delivered to the heart to stop fibrillation and allow a normal rhythm to return.", "electric shock to the heart", "tx", "proc", []],
    ["deoxygenated blood", "dee-OK-sih-jeh-nay-ted blud", "Oxygen-poor blood returning from the body tissues; dark red.", "oxygen-poor blood", "an", "anat", []],
    ["depolarization", "dee-poh-lar-ih-ZAY-shun", "Electrical activation of heart muscle cells that leads to contraction.", "electrical activation", "ep", "elec", []],
    ["diaphoresis", "dye-ah-foh-REE-sis", "Profuse sweating, a common sign during a heart attack.", "profuse sweating", "ds", "sx", []],
    ["diastole", "dye-AS-toh-lee", "Relaxation phase of the heartbeat, when the chambers fill with blood.", "resting phase of the heart", "ep", "elec", []],
    ["diastolic pressure", "dye-ah-STOL-ik PRESH-ur", "Lowest arterial pressure, while the ventricles relax; the bottom number of a blood pressure reading.", "lower blood pressure number", "ep", "elec", []],
    ["digital subtraction angiography", "DIJ-ih-tal sub-TRAK-shun an-jee-OG-rah-fee", "Angiography in which a computer removes bones and soft tissue from the image so only the vessels remain.", "vessel imaging with bones removed by computer", "tx", "dx", ["DSA"]],
    ["digoxin", "dih-JOK-sin", "Cardiotonic drug from digitalis that strengthens contraction and slows the heart rate.", "drug that strengthens contraction and slows the rate", "tx", "rx", []],
    ["dissecting aneurysm", "dye-SEK-ting AN-yoo-rizm", "Aneurysm in which blood splits the layers of the artery wall, most often in the aorta.", "split in an artery wall", "ds", "dz", []],
    ["diuretic", "dye-yoo-RET-ik", "Drug that increases urine output, removing excess fluid and lowering blood pressure.", "water pill", "tx", "rx", []],
    ["Doppler ultrasonography", "DOP-ler ul-trah-soh-NOG-rah-fee", "Ultrasound that measures the speed and direction of blood flow in vessels.", "Doppler ultrasound", "tx", "dx", []],
    ["ductus arteriosus", "DUK-tus ar-teer-ee-OH-sus", "Fetal vessel connecting the pulmonary artery to the aorta; normally closes after birth.", "fetal duct from pulmonary artery to aorta", "vc", "ves", []],
    ["dyspnea", "DISP-nee-ah", "Difficult or labored breathing; shortness of breath.", "shortness of breath", "ds", "sx", ["SOB", "DOE"]],
    ["echocardiography", "ek-oh-kar-dee-OG-rah-fee", "Ultrasound imaging of the heart that shows the chambers, valves and pumping.", "ultrasound of the heart", "tx", "dx", ["ECHO"]],
    ["edema", "eh-DEE-mah", "Swelling caused by excess fluid in the tissues, often of the legs in heart failure.", "swelling", "ds", "sx", []],
    ["ejection fraction", "ee-JEK-shun FRAK-shun", "Percentage of blood in the left ventricle that is pumped out with each beat; normally about 55 to 70 percent.", "share of blood the left ventricle pumps out per beat", "ep", "elec", ["EF"]],
    ["electrocardiogram", "ee-lek-troh-KAR-dee-oh-gram", "Graphic record of the electrical activity of the heart.", "tracing of the heart’s electrical activity", "ep", "elec", ["ECG", "EKG"]],
    ["electrocardiography", "ee-lek-troh-kar-dee-OG-rah-fee", "Recording of the electrical activity of the heart with electrodes on the skin.", "recording the heart’s electricity", "tx", "dx", ["ECG", "EKG"]],
    ["electrode", "ee-LEK-trohd", "Sensor placed on the skin to pick up the heart's electrical signals.", "conductive pad that picks up electricity from skin", "ep", "elec", []],
    ["electrophysiologist", "ee-lek-troh-fiz-ee-OL-oh-jist", "Cardiologist who specializes in the electrical system of the heart and treats arrhythmias.", "heart rhythm specialist", "lx", "sci", ["EP"]],
    ["embolectomy", "em-boh-LEK-toh-mee", "Surgical removal of an embolus from a blood vessel.", "removal of an embolus", "tx", "proc", []],
    ["embolism", "EM-boh-lizm", "Blockage of a vessel by an embolus.", "blockage by an embolus", "ds", "dz", []],
    ["embolus", "EM-boh-lus", "Mass (clot, fat, air or plaque) that travels in the bloodstream and lodges in a smaller vessel.", "travelling clot", "ds", "dz", []],
    ["embolus / emboli", "EM-boh-lus / EM-boh-lye", "Singular and plural of a traveling clot or plug (-us becomes -i).", "travelling clot or particle in the blood", "lx", "pl", []],
    ["endarterectomy", "end-ar-ter-EK-toh-mee", "Surgical removal of plaque together with the inner lining of an artery, often the carotid artery.", "removing an artery’s inner lining", "tx", "proc", []],
    ["endocarditis", "en-doh-kar-DYE-tis", "Inflammation of the endocardium and heart valves, usually caused by bacterial infection.", "inflammation of the heart’s inner lining", "ds", "dz", ["IE", "SBE"]],
    ["endocardium", "en-doh-KAR-dee-um", "Smooth inner lining of the heart chambers and valves.", "inner lining of the heart", "an", "anat", []],
    ["endothelium", "en-doh-THEE-lee-um", "Single layer of flat cells that lines the inside of blood vessels and the heart.", "inner lining of vessels", "vc", "ves", []],
    ["endovenous laser ablation", "en-doh-VEE-nus LAY-zer ab-LAY-shun", "Closing a varicose vein from inside with laser heat delivered through a catheter.", "laser closure of varicose veins", "tx", "proc", ["EVLA"]],
    ["epicardium", "ep-ih-KAR-dee-um", "Outermost layer of the heart wall; the visceral layer of the serous pericardium.", "outer layer of the heart", "an", "anat", []],
    ["extracorporeal circulation", "eks-trah-kor-POR-ee-al ser-kyoo-LAY-shun", "Routing blood through a heart-lung machine outside the body during open-heart surgery.", "heart-lung machine circulation", "tx", "proc", ["ECC"]],
    ["femoral artery", "FEM-or-al AR-ter-ee", "Main artery of the thigh; a common entry site for cardiac catheters.", "main artery of the thigh", "vc", "ves", []],
    ["femoral vein", "FEM-or-al vane", "Large deep vein of the thigh.", "main vein of the thigh", "vc", "ves", []],
    ["fetal circulation", "FEE-tal ser-kyoo-LAY-shun", "Blood flow before birth, which bypasses the lungs through the foramen ovale and ductus arteriosus.", "blood flow before birth, bypassing the lungs", "vc", "ves", []],
    ["fibrillation", "fib-rih-LAY-shun", "Rapid, uncoordinated quivering of heart muscle fibers instead of effective contraction.", "quivering", "ds", "dz", []],
    ["fibrous pericardium", "FYE-brus pair-ih-KAR-dee-um", "Tough outer layer of the pericardium that anchors and protects the heart.", "tough outer layer of the heart sac", "an", "anat", []],
    ["flutter", "FLUT-er", "Very rapid but regular contractions of the atria or ventricles.", "very fast regular contractions", "ds", "dz", []],
    ["foramen ovale", "for-AY-men oh-VAL-ee", "Opening in the fetal interatrial septum that normally closes soon after birth.", "oval hole between the atria before birth", "vc", "ves", []],
    ["gallop", "GAL-up", "Extra third or fourth heart sound that makes the rhythm sound like a galloping horse; often a sign of heart failure.", "extra third or fourth sound with a horse-like rhythm", "ds", "sx", ["S3", "S4"]],
    ["heart", "hart", "Hollow, muscular, cone-shaped organ in the mediastinum that pumps blood through the body.", "muscular pump in the chest", "an", "anat", []],
    ["heart block", "hart blok", "Delay or interruption of impulses through the AV node; in complete (third-degree) block no impulses reach the ventricles.", "delayed or blocked signal from atria to ventricles", "ds", "dz", ["AV block", "CHB"]],
    ["heart failure", "hart FAYL-yur", "Condition in which the heart cannot pump enough blood to meet the body's needs, causing breathlessness and swelling.", "pump unable to meet the body’s needs", "ds", "dz", ["HF"]],
    ["heart rate", "hart rayt", "Number of heartbeats per minute; normally about 60 to 100 at rest.", "beats per minute", "ep", "elec", ["HR", "bpm"]],
    ["heart sounds", "hart sowndz", "Sounds made by closing valves: the first sound (lubb, S1) from the AV valves and the second (dupp, S2) from the semilunar valves.", "lubb and dupp heard with a stethoscope", "ep", "elec", ["S1", "S2"]],
    ["heart transplant", "hart TRANS-plant", "Replacement of a failing heart with a donor heart.", "replacing a failed heart with a donor organ", "tx", "proc", []],
    ["hemorrhoids", "HEM-oh-roydz", "Varicose veins of the anal region.", "swollen anal veins", "ds", "dz", []],
    ["heparin", "HEP-ah-rin", "Fast-acting anticoagulant given by injection or into a vein.", "injected fast-acting anticoagulant", "tx", "rx", []],
    ["high-density lipoprotein", "hye DEN-sih-tee lip-oh-PROH-teen", "Lipoprotein that carries cholesterol away from the arteries to the liver; the good cholesterol.", "good cholesterol", "tx", "dx", ["HDL"]],
    ["Holter monitor", "HOHL-ter MON-ih-ter", "Portable ECG recorder worn for 24 to 48 hours during normal activities to catch intermittent arrhythmias.", "24-hour ECG recorder", "tx", "dx", []],
    ["hypercholesterolemia", "hye-per-koh-les-ter-ol-EE-mee-ah", "Excessive cholesterol in the blood.", "high blood cholesterol", "ds", "dz", []],
    ["hyperlipidemia", "hye-per-lip-ih-DEE-mee-ah", "Abnormally high levels of fats (lipids) in the blood; a major risk factor for atherosclerosis.", "high blood fats", "ds", "dz", []],
    ["hypertension", "hye-per-TEN-shun", "Consistently high blood pressure, 130/80 mmHg or above, that damages vessels and the heart.", "high blood pressure", "ds", "dz", ["HTN"]],
    ["hypertrophy", "hye-PER-troh-fee", "Enlargement of an organ or tissue because its cells grow larger, such as thickening of the left ventricle wall.", "thickening of muscle", "ds", "dz", ["LVH"]],
    ["hypotension", "hye-poh-TEN-shun", "Abnormally low blood pressure.", "low blood pressure", "ds", "dz", []],
    ["implantable cardioverter-defibrillator", "im-PLANT-ah-bul kar-dee-oh-VER-ter dee-FIB-rih-lay-ter", "Implanted device that detects dangerous rhythms and delivers a shock to restore normal rhythm.", "implantable defibrillator", "tx", "proc", ["ICD", "AICD"]],
    ["infarct", "IN-farkt", "Area of dead tissue caused by loss of blood supply.", "area of dead tissue", "ds", "dz", []],
    ["inferior vena cava", "in-FEER-ee-or VEE-nah KAY-vah", "Large vein that returns deoxygenated blood from the lower body to the right atrium.", "great vein returning blood from the lower body", "an", "anat", ["IVC"]],
    ["interatrial septum", "in-ter-AY-tree-al SEP-tum", "Wall that separates the right and left atria.", "wall between the atria", "an", "anat", []],
    ["interventricular septum", "in-ter-ven-TRIK-yoo-lar SEP-tum", "Thick muscular wall that separates the right and left ventricles.", "wall between the ventricles", "an", "anat", []],
    ["intra-aortic balloon pump", "in-trah-ay-OR-tik bah-LOON pump", "Balloon placed in the aorta that inflates and deflates with the heartbeat to support a failing heart.", "balloon in the aorta inflating in diastole", "tx", "proc", ["IABP"]],
    ["intravascular", "in-trah-VAS-kyoo-lar", "Within a blood vessel.", "within a blood vessel", "lx", "adj", []],
    ["intravenous", "in-trah-VEE-nus", "Within or into a vein.", "into a vein", "lx", "adj", ["IV"]],
    ["ischemia", "is-KEE-mee-ah", "Deficient blood supply to a tissue because of obstruction of blood flow.", "reduced blood supply", "ds", "dz", []],
    ["jugular vein", "JUG-yoo-lar vane", "Large vein in the neck that drains blood from the head.", "neck vein", "vc", "ves", []],
    ["Korotkoff sounds", "koh-ROT-kof sowndz", "Tapping sounds heard with a stethoscope over the brachial artery while the cuff deflates; the first and last sounds mark systolic and diastolic pressure.", "artery sounds heard while measuring pressure", "ep", "elec", []],
    ["left anterior descending artery", "left an-TEER-ee-or dee-SEN-ding AR-ter-ee", "Branch of the left coronary artery that runs down the front of the heart; its blockage causes a large heart attack.", "LCA branch running down the front of the heart", "an", "anat", ["LAD"]],
    ["left atrium", "left AY-tree-um", "Upper left chamber that receives oxygenated blood from the lungs through the pulmonary veins.", "upper left chamber receiving blood from the lungs", "an", "anat", ["LA"]],
    ["left coronary artery", "left KOR-oh-nair-ee AR-ter-ee", "Main coronary artery of the left side; divides into the left anterior descending and circumflex arteries.", "main artery to the left side of the heart", "an", "anat", ["LCA"]],
    ["left ventricle", "left VEN-trih-kul", "Lower left chamber with the thickest wall; pumps oxygenated blood to the body through the aorta.", "thick-walled lower left pumping chamber", "an", "anat", ["LV"]],
    ["ligation and stripping", "lye-GAY-shun and STRIP-ing", "Tying off a varicose vein and pulling it out through small incisions.", "tying and stripping varicose veins", "tx", "proc", []],
    ["lipid profile", "LIP-id PROH-file", "Blood test that measures total cholesterol, HDL, LDL and triglycerides.", "blood fat panel", "tx", "dx", []],
    ["low-density lipoprotein", "loh DEN-sih-tee lip-oh-PROH-teen", "Lipoprotein that deposits cholesterol in the artery walls; the bad cholesterol.", "bad cholesterol", "tx", "dx", ["LDL"]],
    ["lumen", "LOO-men", "Hollow space inside a blood vessel through which blood flows.", "open channel inside a vessel", "vc", "ves", []],
    ["lymph", "limf", "Clear fluid collected from the tissues and returned to the blood through lymphatic vessels.", "tissue fluid collected by drainage vessels", "vc", "ves", []],
    ["lymph node", "limf nohd", "Small bean-shaped structure along lymphatic vessels that filters lymph and holds immune cells.", "bean-shaped filter of tissue fluid", "vc", "ves", []],
    ["lymphatic vessel", "lim-FAT-ik VES-el", "Thin-walled vessel that carries lymph from the tissues toward the veins near the heart.", "lymph vessel", "vc", "ves", []],
    ["mediastinum", "mee-dee-ah-STYE-num", "Space in the middle of the chest between the lungs, from sternum to vertebral column, that contains the heart and great vessels.", "space between the lungs", "an", "anat", []],
    ["mitral valve", "MYE-tral valv", "Atrioventricular valve with two cusps between the left atrium and left ventricle; also called bicuspid valve.", "valve between left atrium and ventricle", "an", "anat", []],
    ["mitral valve prolapse", "MYE-tral valv PROH-laps", "Bulging of the mitral valve cusps back into the left atrium during contraction, sometimes with backflow.", "mitral cusps bulging back into the atrium", "ds", "dz", ["MVP"]],
    ["MUGA scan", "MUG-ah skan", "Nuclear scan that tags red blood cells with a tracer to measure how well the ventricles pump (ejection fraction).", "nuclear scan measuring EF", "tx", "dx", ["MUGA"]],
    ["murmur", "MUR-mur", "Abnormal swishing heart sound caused by turbulent blood flow, often through a faulty valve.", "extra heart sound", "ds", "sx", []],
    ["myocardial infarction", "mye-oh-KAR-dee-al in-FARK-shun", "Death of part of the heart muscle because a coronary artery is blocked; also called heart attack.", "heart attack", "ds", "dz", ["MI", "AMI"]],
    ["myocarditis", "mye-oh-kar-DYE-tis", "Inflammation of the heart muscle, often caused by a virus.", "inflammation of the heart muscle", "ds", "dz", []],
    ["myocardium", "mye-oh-KAR-dee-um", "Thick middle layer of the heart wall made of cardiac muscle; contracts to pump blood.", "heart muscle", "an", "anat", []],
    ["necrosis", "neh-KROH-sis", "Death of cells or tissue.", "tissue death", "ds", "dz", []],
    ["nitroglycerin", "nye-troh-GLIS-er-in", "Nitrate placed under the tongue to widen vessels and relieve angina quickly.", "vasodilator under the tongue for angina", "tx", "rx", ["NTG"]],
    ["normal sinus rhythm", "NOR-mal SYE-nus RITH-um", "Normal heart rhythm started by the SA node at about 60 to 100 beats per minute.", "regular beat of 60 to 100 from the SA node", "ep", "elec", ["NSR"]],
    ["nuclear stress test", "NOO-klee-ar stres test", "Stress test with a radioactive tracer (such as thallium) that shows areas of poor blood flow to the heart muscle.", "nuclear heart scan", "tx", "dx", []],
    ["occlusion", "oh-KLOO-zhun", "Closure or blockage of a vessel or opening.", "blockage", "ds", "dz", []],
    ["orthostatic hypotension", "or-thoh-STAT-ik hye-poh-TEN-shun", "Sudden drop in blood pressure on standing up, causing dizziness or fainting.", "drop in pressure on standing", "ds", "dz", []],
    ["oxygenated blood", "OK-sih-jeh-nay-ted blud", "Oxygen-rich blood returning from the lungs; bright red.", "oxygen-rich blood", "an", "anat", []],
    ["P wave", "pee wayv", "First wave of the ECG; shows depolarization (contraction) of the atria.", "ECG wave of atrial depolarisation", "ep", "elec", []],
    ["pacemaker", "PAYS-may-ker", "Something that sets the rhythm of the heart: the SA node naturally, or an implanted electronic device.", "sets the rhythm of the heartbeat", "ep", "elec", []],
    ["palpitation", "pal-pih-TAY-shun", "Feeling of a pounding, fluttering or racing heartbeat.", "feeling the heart pound", "ds", "sx", []],
    ["papillary muscle", "PAP-ih-lair-ee MUS-el", "Cone-shaped muscle on the ventricle wall that tightens the chordae tendineae during contraction.", "small ventricle muscle pulling on valve cords", "an", "anat", []],
    ["parietal pericardium", "pah-RYE-eh-tal pair-ih-KAR-dee-um", "Serous layer that lines the inner surface of the fibrous pericardium.", "inner wall layer of the heart sac", "an", "anat", []],
    ["patent ductus arteriosus", "PAY-tent DUK-tus ar-teer-ee-OH-sus", "Failure of the ductus arteriosus to close after birth, leaving an abnormal opening between the pulmonary artery and the aorta.", "fetal duct still open after birth", "ds", "dz", ["PDA"]],
    ["pediatric cardiologist", "pee-dee-AT-rik kar-dee-OL-oh-jist", "Cardiologist who treats heart diseases of infants, children and adolescents, including congenital defects.", "children’s heart specialist", "lx", "sci", []],
    ["perfusion", "per-FYOO-zhun", "Passage of blood through the vessels of a tissue or organ.", "blood flow through tissue", "vc", "ves", []],
    ["perfusionist", "per-FYOO-zhun-ist", "Professional who runs the heart-lung machine that keeps blood circulating during open-heart surgery.", "heart-lung machine operator", "lx", "sci", []],
    ["pericardial cavity", "pair-ih-KAR-dee-al KAV-ih-tee", "Narrow space between the parietal and visceral pericardium that contains lubricating pericardial fluid.", "narrow space within the heart sac", "an", "anat", []],
    ["pericardial fluid", "pair-ih-KAR-dee-al FLOO-id", "Small amount of serous fluid in the pericardial cavity that reduces friction as the heart beats.", "slippery fluid within the heart sac", "an", "anat", []],
    ["pericardiocentesis", "pair-ih-kar-dee-oh-sen-TEE-sis", "Needle puncture of the pericardial sac to remove fluid.", "drawing fluid from around the heart", "tx", "proc", []],
    ["pericarditis", "pair-ih-kar-DYE-tis", "Inflammation of the pericardium, causing sharp chest pain and a friction rub.", "inflammation of the heart’s sac", "ds", "dz", []],
    ["pericardium", "pair-ih-KAR-dee-um", "Double-layered membranous sac that surrounds and protects the heart.", "sac around the heart (pericardium)", "an", "anat", []],
    ["peripheral artery disease", "peh-RIF-er-al AR-ter-ee dih-ZEEZ", "Narrowing of the arteries of the legs or arms by atherosclerosis, causing claudication.", "plaque narrowing the leg arteries", "ds", "dz", ["PAD", "PVD"]],
    ["phlebitis", "fleh-BYE-tis", "Inflammation of a vein.", "inflammation of a vein", "ds", "dz", []],
    ["phlebotomy", "fleh-BOT-oh-mee", "Incision or puncture of a vein to remove blood.", "drawing blood from a vein", "tx", "dx", []],
    ["plaque", "plak", "Buildup of fat, cholesterol, calcium and cells in the wall of an artery.", "fatty deposit in an artery wall", "ds", "dz", []],
    ["popliteal artery", "pop-LIT-ee-al AR-ter-ee", "Artery behind the knee.", "artery behind the knee", "vc", "ves", []],
    ["prehypertension", "pree-hye-per-TEN-shun", "Blood pressure slightly above normal (about 120 to 139 systolic) that may progress to hypertension.", "slightly raised blood pressure", "ds", "dz", []],
    ["premature ventricular contraction", "pree-mah-CHOOR ven-TRIK-yoo-lar kon-TRAK-shun", "Extra heartbeat that starts in a ventricle before the normal beat; felt as a skipped beat.", "early extra beat from a ventricle", "ds", "dz", ["PVC"]],
    ["pulmonary artery", "PUL-moh-nair-ee AR-ter-ee", "Artery that carries deoxygenated blood from the right ventricle to a lung; the only artery carrying oxygen-poor blood after birth.", "artery to the lungs", "an", "anat", []],
    ["pulmonary circulation", "PUL-moh-nair-ee ser-kyoo-LAY-shun", "Flow of blood from the right ventricle to the lungs for oxygen and back to the left atrium.", "circulation through the lungs", "vc", "ves", []],
    ["pulmonary embolism", "PUL-moh-nair-ee EM-boh-lizm", "Blockage of a pulmonary artery by an embolus, usually from a deep vein thrombosis.", "clot in a lung artery", "ds", "dz", ["PE"]],
    ["pulmonary trunk", "PUL-moh-nair-ee trunk", "Large vessel leaving the right ventricle that divides into the right and left pulmonary arteries.", "vessel leaving the RV, splitting to both lungs", "an", "anat", []],
    ["pulmonary valve", "PUL-moh-nair-ee valv", "Semilunar valve between the right ventricle and the pulmonary artery; also called pulmonic valve.", "valve to the pulmonary trunk", "an", "anat", []],
    ["pulmonary vein", "PUL-moh-nair-ee vane", "One of four veins that bring oxygenated blood from the lungs to the left atrium; the only veins carrying oxygen-rich blood.", "vein from the lungs", "an", "anat", []],
    ["pulse", "puls", "Rhythmic expansion of an artery with each heartbeat, felt where an artery lies near the surface.", "pressure wave felt over an artery", "ep", "elec", []],
    ["pulse pressure", "puls PRESH-ur", "Difference between the systolic and diastolic pressures, normally about 40 mmHg.", "systolic minus diastolic", "ep", "elec", []],
    ["Purkinje fibers", "per-KIN-jee FYE-berz", "Fibers that spread through the ventricle walls and make the ventricles contract.", "Purkinje fibres", "ep", "elec", []],
    ["QRS complex", "kyoo-ar-ess KOM-pleks", "Sharp spikes on the ECG that show depolarization of the ventricles.", "ECG spike of ventricular depolarisation", "ep", "elec", []],
    ["radial artery", "RAY-dee-al AR-ter-ee", "Artery on the thumb side of the forearm where the pulse is commonly felt.", "artery at the thumb side of the wrist", "vc", "ves", []],
    ["radial pulse", "RAY-dee-al puls", "Pulse felt over the radial artery at the wrist; the most common place to count the pulse.", "wrist pulse", "ep", "elec", []],
    ["Raynaud phenomenon", "ray-NOH feh-NOM-eh-non", "Spasm of the small arteries of the fingers and toes after cold or stress, making them white then blue.", "fingers turning white and blue in the cold", "ds", "dz", []],
    ["regurgitation", "ree-gur-jih-TAY-shun", "Backflow of blood through a valve that does not close tightly; also called insufficiency.", "backward leaking through a valve", "ds", "dz", ["MR"]],
    ["repolarization", "ree-poh-lar-ih-ZAY-shun", "Electrical recovery of heart muscle cells after contraction, preparing for the next beat.", "electrical recovery", "ep", "elec", []],
    ["rheumatic heart disease", "roo-MAT-ik hart dih-ZEEZ", "Damage to the heart valves after rheumatic fever from an untreated streptococcal throat infection.", "valve damage after untreated strep throat", "ds", "dz", ["RHD"]],
    ["right atrium", "rite AY-tree-um", "Upper right chamber that receives deoxygenated blood from the body through the venae cavae.", "upper right chamber receiving body blood", "an", "anat", ["RA"]],
    ["right coronary artery", "rite KOR-oh-nair-ee AR-ter-ee", "Coronary artery that supplies the right side of the heart and usually the SA and AV nodes.", "main artery to the right and lower heart", "an", "anat", ["RCA"]],
    ["right ventricle", "rite VEN-trih-kul", "Lower right chamber that pumps deoxygenated blood to the lungs through the pulmonary artery.", "lower right chamber pumping to the lungs", "an", "anat", ["RV"]],
    ["saphenous vein", "sah-FEE-nus vane", "Long superficial vein of the leg; often used as a graft in bypass surgery.", "long leg vein used for grafts", "vc", "ves", []],
    ["sclerotherapy", "sklair-oh-THAIR-ah-pee", "Injection of a chemical into a varicose vein to make it scar and close.", "injection to close varicose veins", "tx", "proc", []],
    ["semilunar valve", "sem-ee-LOO-nar valv", "Half-moon-shaped valve at the exit of a ventricle: the pulmonary valve and the aortic valve.", "half-moon-shaped valve", "an", "anat", []],
    ["septal", "SEP-tal", "Pertaining to a septum (dividing wall).", "pertaining to a dividing wall", "lx", "adj", []],
    ["septal defect", "SEP-tal DEE-fekt", "Congenital hole in the septum between the atria or between the ventricles.", "hole in the heart’s wall", "ds", "dz", ["ASD", "VSD"]],
    ["septum", "SEP-tum", "Wall that divides two cavities; in the heart it separates the right and left sides.", "dividing wall", "an", "anat", []],
    ["septum / septa", "SEP-tum / SEP-tah", "Singular and plural of a dividing wall (-um becomes -a).", "dividing wall between the heart’s halves", "lx", "pl", []],
    ["sinoatrial node", "sye-noh-AY-tree-al nohd", "Natural pacemaker in the wall of the right atrium that starts each heartbeat.", "natural pacemaker in the right atrium wall", "ep", "elec", ["SA node"]],
    ["sphygmomanometer", "sfig-moh-mah-NOM-eh-ter", "Instrument with an inflatable cuff used to measure blood pressure.", "blood pressure cuff", "ep", "elec", []],
    ["ST segment", "ess-tee SEG-ment", "Flat part of the ECG between the QRS complex and the T wave; raised or lowered in heart ischemia or infarction.", "flat ECG line between QRS and T", "ep", "elec", []],
    ["statin", "STAT-in", "Drug that lowers cholesterol by blocking its production in the liver.", "cholesterol-lowering drug", "tx", "rx", []],
    ["stenosis", "steh-NOH-sis", "Abnormal narrowing of a vessel, valve or opening.", "narrowing", "ds", "dz", []],
    ["stenosis / stenoses", "steh-NOH-sis / steh-NOH-seez", "Singular and plural of a narrowing (-is becomes -es).", "narrowing of a channel or valve", "lx", "pl", []],
    ["stent", "stent", "Small mesh tube placed in an artery to hold it open after angioplasty.", "mesh tube that holds a vessel open", "tx", "proc", []],
    ["stethoscope", "STETH-oh-skohp", "Instrument used to listen to sounds within the body, such as heart and lung sounds.", "listening instrument", "ep", "elec", []],
    ["stress test", "stres test", "ECG recorded while the patient exercises on a treadmill to see how the heart responds to effort.", "ECG recorded on a treadmill", "tx", "dx", []],
    ["stroke", "strohk", "Damage to part of the brain caused by blockage or rupture of an artery; also called cerebrovascular accident.", "brain damage from cut-off blood supply", "ds", "dz", ["CVA"]],
    ["stroke volume", "strohk VOL-yoom", "Volume of blood ejected by a ventricle with each beat.", "blood pumped out per beat", "ep", "elec", ["SV"]],
    ["subclavian artery", "sub-KLAY-vee-an AR-ter-ee", "Artery beneath the clavicle that supplies the arm.", "artery under the collarbone", "vc", "ves", []],
    ["superior vena cava", "soo-PEER-ee-or VEE-nah KAY-vah", "Large vein that returns deoxygenated blood from the head, neck, arms and chest to the right atrium.", "great vein returning blood from head and arms", "an", "anat", ["SVC"]],
    ["syncope", "SIN-koh-pee", "Brief loss of consciousness caused by too little blood flow to the brain; fainting.", "fainting", "ds", "sx", []],
    ["systemic circulation", "sis-TEM-ik ser-kyoo-LAY-shun", "Flow of oxygenated blood from the left ventricle to all body tissues and back to the right atrium.", "circulation to the body", "vc", "ves", []],
    ["systole", "SIS-toh-lee", "Contraction phase of the heartbeat, when the chambers squeeze blood out.", "contracting phase of the heart", "ep", "elec", []],
    ["systolic pressure", "sis-TOL-ik PRESH-ur", "Highest arterial pressure, during contraction of the ventricles; the top number of a blood pressure reading.", "upper blood pressure number", "ep", "elec", []],
    ["T wave", "tee wayv", "ECG wave that shows repolarization (recovery) of the ventricles.", "ECG wave of ventricular recovery", "ep", "elec", []],
    ["tachycardia", "tak-ee-KAR-dee-ah", "Fast heart rate, more than 100 beats per minute.", "fast heart rate", "ep", "elec", []],
    ["tetralogy of Fallot", "teh-TRAL-oh-jee uv fah-LOH", "Congenital defect with four parts: ventricular septal defect, pulmonary stenosis, overriding aorta and right ventricular hypertrophy; causes cyanosis.", "four combined defects causing a blue baby", "ds", "dz", ["TOF"]],
    ["thoracic duct", "thoh-RAS-ik dukt", "Largest lymphatic vessel; empties lymph into the left subclavian vein.", "largest lymphatic channel, draining into a neck vein", "vc", "ves", []],
    ["thrombolysis", "throm-BOL-ih-sis", "Dissolving a blood clot, usually with clot-busting drugs.", "dissolving a clot", "tx", "proc", []],
    ["thrombolytic agent", "throm-boh-LIT-ik AY-jent", "Drug that dissolves a clot already formed, such as tissue plasminogen activator.", "clot-dissolving drug", "tx", "rx", ["tPA"]],
    ["thrombophlebitis", "throm-boh-fleh-BYE-tis", "Inflammation of a vein together with clot formation.", "vein inflammation with clotting", "ds", "dz", []],
    ["thrombosis", "throm-BOH-sis", "Formation or presence of a blood clot inside a vessel.", "clot formation in a vessel", "ds", "dz", []],
    ["thrombus", "THROM-bus", "Blood clot that forms and stays attached inside a vessel or the heart.", "clot", "ds", "dz", []],
    ["thrombus / thrombi", "THROM-bus / THROM-bye", "Singular and plural of a stationary blood clot (-us becomes -i).", "clot fixed to a vessel wall", "lx", "pl", []],
    ["transesophageal echocardiography", "trans-eh-sof-ah-JEE-al ek-oh-kar-dee-OG-rah-fee", "Echocardiography with the ultrasound probe passed down the esophagus for a clearer view of the heart.", "echo through the oesophagus", "tx", "dx", ["TEE"]],
    ["transient ischemic attack", "TRAN-zee-ent is-KEE-mik ah-TAK", "Brief interruption of blood supply to part of the brain without lasting damage; a warning sign of stroke.", "mini-stroke", "ds", "dz", ["TIA"]],
    ["tricuspid valve", "try-KUS-pid valv", "Atrioventricular valve with three cusps between the right atrium and right ventricle.", "three-flap valve on the right", "an", "anat", []],
    ["triglycerides", "try-GLIS-er-eyedz", "Main form of fat stored in the body and carried in the blood.", "storage fat in the blood", "tx", "dx", []],
    ["troponin", "troh-POH-nin", "Heart muscle protein released into the blood after myocardial damage; a sensitive marker of heart attack.", "heart muscle protein marking damage", "tx", "dx", []],
    ["tunica adventitia", "TOO-nih-kah ad-ven-TISH-ee-ah", "Outer connective tissue layer of a blood vessel wall; also called tunica externa.", "outer layer of a vessel", "vc", "ves", []],
    ["tunica intima", "TOO-nih-kah IN-tih-mah", "Innermost layer of a blood vessel wall, made of endothelium.", "inner layer of a vessel", "vc", "ves", []],
    ["tunica media", "TOO-nih-kah MEE-dee-ah", "Middle layer of a blood vessel wall, made of smooth muscle and elastic fibers; thickest in arteries.", "middle layer of a vessel", "vc", "ves", []],
    ["valve", "valv", "Structure that opens and closes to let blood flow in only one direction.", "one-way door between chambers or vessels", "an", "anat", []],
    ["valve replacement", "valv ree-PLAYS-ment", "Surgery that replaces a diseased heart valve with a mechanical or tissue valve.", "swapping a diseased heart door for a new one", "tx", "proc", ["MVR", "AVR"]],
    ["valvular", "VAL-vyoo-lar", "Pertaining to a valve.", "pertaining to a valve", "lx", "adj", []],
    ["valvular stenosis", "VAL-vyoo-lar steh-NOH-sis", "Narrowing and stiffening of a heart valve that obstructs forward blood flow, such as aortic stenosis.", "narrowing of a valve", "ds", "dz", ["AS"]],
    ["valvuloplasty", "VAL-vyoo-loh-plas-tee", "Surgical or balloon repair of a heart valve.", "valve repair", "tx", "proc", []],
    ["varicose veins", "VAIR-ih-kohs vaynz", "Swollen, twisted superficial veins, usually in the legs, caused by faulty venous valves.", "swollen, twisted veins", "ds", "dz", []],
    ["varix / varices", "VAIR-iks / VAIR-ih-seez", "Singular and plural of a dilated, twisted vein (-ix becomes -ices).", "dilated, twisted vein", "lx", "pl", []],
    ["vascular", "VAS-kyoo-lar", "Pertaining to blood vessels.", "pertaining to vessels", "lx", "adj", []],
    ["vasculitis", "vas-kyoo-LYE-tis", "Inflammation of blood vessels.", "inflammation of a vessel", "ds", "dz", []],
    ["vasoconstriction", "vay-zoh-kon-STRIK-shun", "Narrowing of the lumen of a blood vessel, which raises blood pressure.", "narrowing of a vessel", "vc", "ves", []],
    ["vasodilation", "vay-zoh-dye-LAY-shun", "Widening of the lumen of a blood vessel, which lowers blood pressure.", "widening of a blood vessel", "vc", "ves", []],
    ["vasodilator", "vay-zoh-DYE-lay-ter", "Drug that widens blood vessels.", "widening a vessel", "tx", "rx", []],
    ["vasopressor", "vay-zoh-PRES-er", "Drug that narrows blood vessels to raise low blood pressure.", "drug that narrows vessels", "tx", "rx", []],
    ["vein", "vane", "Thin-walled blood vessel with valves that carries blood toward the heart.", "vessel carrying blood to the heart", "vc", "ves", []],
    ["vena cava / venae cavae", "VEE-nah KAY-vah / VEE-nee KAY-vee", "Singular and plural of the largest vein of the body (-a becomes -ae).", "great vein entering the right atrium", "lx", "pl", []],
    ["venipuncture", "VEN-ih-punk-chur", "Puncture of a vein with a needle to draw blood or give fluids.", "puncturing a vein", "tx", "dx", []],
    ["venography", "vee-NOG-rah-fee", "X-ray imaging of veins after injecting contrast dye; also called phlebography.", "X-ray imaging of veins", "tx", "dx", []],
    ["venous", "VEE-nus", "Pertaining to a vein.", "pertaining to veins", "lx", "adj", []],
    ["venous valve", "VEE-nus valv", "Flap inside a vein that keeps blood moving toward the heart and prevents backflow.", "valve inside a vein", "vc", "ves", []],
    ["ventricle", "VEN-trih-kul", "One of the two lower chambers of the heart that pump blood out of the heart.", "pumping chamber of the heart", "an", "anat", []],
    ["ventricular", "ven-TRIK-yoo-lar", "Pertaining to a ventricle.", "pertaining to a ventricle", "lx", "adj", []],
    ["ventricular assist device", "ven-TRIK-yoo-lar ah-SIST dee-VYSE", "Mechanical pump that helps a weak ventricle pump blood.", "mechanical pump supporting a weak ventricle", "tx", "proc", ["VAD", "LVAD"]],
    ["ventricular fibrillation", "ven-TRIK-yoo-lar fib-rih-LAY-shun", "Quivering of the ventricles so that no blood is pumped; causes cardiac arrest within seconds.", "chaotic quivering of the lower chambers; no output", "ds", "dz", ["VF", "V-fib"]],
    ["venule", "VEN-yool", "Small vein that collects blood from capillaries.", "small vein", "vc", "ves", []],
    ["visceral pericardium", "VIS-er-al pair-ih-KAR-dee-um", "Serous layer that covers the surface of the heart; also called epicardium.", "sac layer attached to the heart surface", "an", "anat", []],
    ["warfarin", "WAR-far-in", "Oral anticoagulant that requires regular blood tests (PT/INR).", "oral anticoagulant monitored by INR", "tx", "rx", ["INR"]],
    ["Wolff-Parkinson-White syndrome", "wulf PAR-kin-sun wite SIN-drohm", "Congenital extra electrical pathway between the atria and ventricles that causes episodes of rapid heartbeat.", "extra electrical pathway between atrium and ventricle", "ds", "dz", ["WPW"]]
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/* تپش — واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها، تجزیه‌گر واژه و مولد سؤال‌ها
 * واژه‌ها از data-terms.js (ساخته‌شده با tools/build_data.py از هشت فصل کتاب قلب و عروق) می‌آیند؛
 * ریشه‌ها و اختصارها از همان فصل‌ها گردآوری و دستی پالایش شده‌اند.
 * دنیاها: lx زبان قلب (همه واژه‌ها) • an ساختمان قلب • ep ضربان، هدایت و فشار • vc رگ‌ها و گردش خون •
 * ds بیماری‌ها و یافته‌ها • tx تشخیص، درمان و دارو • * عمومی */
(function (root) {
  const EA = root.EA = root.EA || {};

  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const ROOTS_RAW = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', "without, lacking", '*'],
    ['anti-', ['anti'], 'against', "against", 'tx'],
    ['bi-', ['bi'], 'two', "two", 'an'],
    ['brady-', ['brady'], 'slow', "slow", 'ep'],
    ['de-', ['de'], 'removal, reversal', "removal, reversal", 'ep'],
    ['dys-', ['dys'], 'bad, painful, difficult', "bad, difficult", '*'],
    ['endo-', ['endo', 'end'], 'within, inner', "within", 'an'],
    ['epi-', ['epi'], 'upon, above', "upon, above", 'an'],
    ['extra-', ['extra'], 'outside', "outside", 'tx'],
    ['hyper-', ['hyper'], 'excessive, above normal', "excessive", 'ds'],
    ['hypo-', ['hypo'], 'below, deficient', "below, deficient", 'ds'],
    ['inter-', ['inter'], 'between', "between", 'an'],
    ['intra-', ['intra'], 'within, inside', "within", 'vc'],
    ['micro-', ['micro'], 'small', "small", 'vc'],
    ['normo-', ['normo'], 'normal', "normal", 'ep'],
    ['pan-', ['pan'], 'all', "all", 'ds'],
    ['per-', ['per'], 'through', "through", 'tx'],
    ['peri-', ['peri'], 'around', "around", 'an'],
    ['post-', ['post'], 'after', "after", '*'],
    ['pre-', ['pre'], 'before', "before", 'ds'],
    ['re-', ['re'], 'again, back', "again, back", 'ep'],
    ['semi-', ['semi'], 'half', "half", 'an'],
    ['sub-', ['sub'], 'under, below', "below", 'vc'],
    ['tachy-', ['tachy'], 'fast, rapid', "fast", 'ep'],
    ['trans-', ['trans'], 'across, through', "across, through", 'tx'],
    ['tri-', ['tri'], 'three', "three", 'an'],
    ['ultra-', ['ultra'], 'beyond, excess', "beyond", 'tx'],
    // ریشه‌های قلب
    ['cardi/o', ['cardi', 'card'], 'heart', "heart", 'lx'],
    ['coron/o', ['coron'], 'heart; crown', "heart; crown", 'an'],
    ['my/o', ['my'], 'muscle', "muscle", 'an'],
    ['atri/o', ['atri'], 'atrium', "upper heart chamber", 'an'],
    ['ventricul/o', ['ventricul'], 'ventricle', "pumping chamber of the heart", 'an'],
    ['sept/o', ['sept'], 'septum, dividing wall', "dividing wall", 'an'],
    ['valv/o, valvul/o', ['valvul', 'valv'], 'valve', "valve", 'an'],
    ['aort/o', ['aort'], 'aorta', "aorta", 'an'],
    ['pulmon/o', ['pulmon'], 'lung', "lung", 'an'],
    ['pneum/o, pneumon/o', ['pneumon', 'pneum'], 'lung, air', "lung, air", 'an'],
    ['thorac/o', ['thorac'], 'chest', "the chest", 'vc'],
    ['pector/o', ['pector'], 'chest', "chest", 'ds'],
    ['steth/o', ['steth'], 'chest', "chest", 'ep'],
    ['sphygm/o', ['sphygm'], 'pulse', "pulse", 'ep'],
    ['man/o', ['man'], 'pressure', "pressure", 'ep'],
    ['electr/o', ['electr'], 'electricity', "electricity", 'ep'],
    ['rrhythm/o', ['rrhythm', 'rhythm'], 'rhythm', "rhythm", 'ep'],
    ['sin/o', ['sin'], 'sinus, cavity', "sinus, cavity", 'ep'],
    ['systol/o', ['systol'], 'contraction', "contraction", 'ep'],
    ['diastol/o', ['diastol'], 'relaxation, filling', "relaxation, filling", 'ep'],
    ['ox/o, ox/i', ['ox'], 'oxygen', "oxygen", 'an'],
    // ریشه‌های رگ
    ['angi/o', ['angi'], 'vessel', "vessel", 'vc'],
    ['vas/o', ['vas'], 'vessel; duct', "vessel; duct", 'vc'],
    ['vascul/o', ['vascul'], 'vessel', "vessel", 'vc'],
    ['arteri/o, arter/o', ['arteri', 'arter'], 'artery', "artery", 'vc'],
    ['arteriol/o', ['arteriol'], 'arteriole, small artery', "small artery", 'vc'],
    ['ven/o', ['ven'], 'vein', "vein", 'vc'],
    ['phleb/o', ['phleb'], 'vein', "vein", 'vc'],
    ['venul/o', ['venul'], 'venule, small vein', "small vein", 'vc'],
    ['capill/o', ['capill'], 'hair-like; capillary', "hair-like; capillary", 'vc'],
    ['lymph/o', ['lymph'], 'lymph', "lymph", 'vc'],
    ['lymphangi/o', ['lymphangi'], 'lymph vessel', "lymph vessel", 'vc'],
    ['cerebr/o', ['cerebr'], 'cerebrum, brain', "brain", 'ds'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', "blood", '*'],
    // بیماری‌ها
    ['ather/o', ['ather'], 'fatty plaque, fatty paste', "fatty plaque", 'ds'],
    ['scler/o', ['scler'], 'hardening', "hardening", 'ds'],
    ['sten/o', ['sten'], 'narrowing', "narrowing", 'ds'],
    ['thromb/o', ['thromb'], 'blood clot', "clot", 'ds'],
    ['embol/o', ['embol'], 'plug, embolus', "plug, embolus", 'ds'],
    ['isch/o', ['isch'], 'to hold back', "to hold back, suppress", 'ds'],
    ['necr/o', ['necr'], 'death', "death", 'ds'],
    ['cyan/o', ['cyan'], 'blue', "blue", 'ds'],
    ['varic/o', ['varic'], 'dilated, twisted vein', "dilated vein (varix)", 'ds'],
    ['aneurysm/o', ['aneurysm'], 'aneurysm, widening', "aneurysm, dilation", 'ds'],
    ['fibrill/o', ['fibrill'], 'small fiber, twitching', "small fibre, quivering", 'ds'],
    ['lip/o, lipid/o', ['lipid', 'lip'], 'fat, lipid', "fat", 'ds'],
    ['cholesterol/o', ['cholesterol'], 'cholesterol', "cholesterol", 'ds'],
    // تشخیص و درمان
    ['ech/o', ['ech'], 'sound, echo', "sound, echo", 'tx'],
    ['son/o', ['son'], 'sound', "sound", 'tx'],
    ['tom/o', ['tom'], 'to cut, section', "incision", 'tx'],
    ['radi/o', ['radi'], 'radiation, x-ray', "radiation", 'tx'],
    ['press/o', ['press'], 'pressure', "pressure", 'tx'],
    // پسوندهای صفت‌ساز و اسم‌ساز
    ['-ac', ['ac'], 'pertaining to', "pertaining to", 'lx'],
    ['-al', ['al'], 'pertaining to', "pertaining to", 'lx'],
    ['-ar', ['ar'], 'pertaining to', "pertaining to", 'lx'],
    ['-ary', ['ary'], 'pertaining to', "pertaining to", 'lx'],
    ['-ic', ['ic'], 'pertaining to', "pertaining to", 'lx'],
    ['-ous', ['ous'], 'pertaining to', "pertaining to", 'lx'],
    ['-ole', ['ole'], 'small, minute', "small", 'vc'],
    ['-ule', ['ule'], 'small, minute', "small", 'vc'],
    ['-um', ['um'], 'structure, thing', "structure, thing", 'an'],
    ['-ia, -y', ['ia', 'y'], 'condition, process', "condition, process", '*'],
    ['-ation', ['ation'], 'process', "process", '*'],
    ['-cardia', ['cardia'], 'heart condition', "heart condition", 'ep'],
    ['-tension', ['tension'], 'pressure, stretching', "pressure, stretching", 'ds'],
    ['-constriction', ['constriction'], 'narrowing', "narrowing", 'vc'],
    ['-dilation', ['dilation', 'dilatation'], 'widening, expansion', "widening", 'vc'],
    ['-logy', ['logy'], 'study of', "study of", 'lx'],
    ['-logist', ['logist'], 'specialist in the study of', "specialist", 'lx'],
    ['-genic', ['genic'], 'producing, originating in', "produced by, producing", 'ds'],
    // بیماری‌ها
    ['-megaly', ['megaly'], 'enlargement', "enlargement", 'ds'],
    ['-stenosis', ['stenosis'], 'narrowing, stricture', "narrowing", 'ds'],
    ['-sclerosis', ['sclerosis'], 'hardening', "hardening", 'ds'],
    ['-osis', ['osis'], 'abnormal condition', "abnormal condition", 'ds'],
    ['-itis', ['itis'], 'inflammation', "inflammation", 'ds'],
    ['-oma', ['oma'], 'tumor, mass', "tumour, mass", 'ds'],
    ['-pathy', ['pathy'], 'disease', "disease", 'ds'],
    ['-emia', ['emia'], 'blood condition', "blood condition", 'ds'],
    ['-spasm', ['spasm'], 'sudden involuntary contraction', "sudden contraction", 'ds'],
    ['-rrhexis', ['rrhexis'], 'rupture', "rupture", 'ds'],
    ['-ectasis, -ectasia', ['ectasis', 'ectasia'], 'dilation, expansion', "dilation", 'ds'],
    // تشخیص و درمان
    ['-gram', ['gram'], 'record, image', "record, image", 'tx'],
    ['-graph', ['graph'], 'instrument for recording', "recording machine", 'tx'],
    ['-graphy', ['graphy'], 'process of recording', "process of recording", 'tx'],
    ['-scope', ['scope'], 'instrument for examining', "viewing instrument", 'ep'],
    ['-scopy', ['scopy'], 'visual examination', "visual examination", 'tx'],
    ['-meter', ['meter'], 'instrument for measuring', "measuring instrument", 'ep'],
    ['-ectomy', ['ectomy'], 'excision, removal', "removal", 'tx'],
    ['-tomy', ['tomy'], 'incision, cutting into', "incision", 'tx'],
    ['-plasty', ['plasty'], 'surgical repair', "surgical repair", 'tx'],
    ['-rrhaphy', ['rrhaphy'], 'suture', "stitch", 'tx'],
    ['-centesis', ['centesis'], 'surgical puncture to remove fluid', "drawing fluid with a needle", 'tx'],
    ['-lysis', ['lysis'], 'breakdown, dissolving', "dissolving, breakdown", 'tx'],
    ['-lytic', ['lytic'], 'dissolving, destroying', "dissolving", 'tx'],
    ['-therapy', ['therapy'], 'treatment', "treatment", 'tx'],
    ['-version', ['version'], 'turning', "to turn", 'tx']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    // پایه و پرونده
    ['CV', 'cardiovascular', "heart and blood vessels", 'lx'],
    ['EP', 'electrophysiology', "cardiac electrophysiology", 'lx'],
    ['CCU', 'coronary care unit', "coronary care unit (CCU)", 'lx'],
    ['CP', 'chest pain', "chest pain", 'lx'],
    ['SOB', 'shortness of breath', "shortness of breath", 'lx'],
    ['DOE', 'dyspnea on exertion', "shortness of breath on exertion", 'lx'],
    ['IV', 'intravenous', "into a vein", 'lx'],
    ['bpm', 'beats per minute', "beats per minute", 'lx'],
    ['mmHg', 'millimeters of mercury', "millimetres of mercury", 'lx'],
    // ساختمان قلب
    ['RA', 'right atrium', "right atrium", 'an'],
    ['LA', 'left atrium', "left atrium", 'an'],
    ['RV', 'right ventricle', "right ventricle", 'an'],
    ['LV', 'left ventricle', "left ventricle", 'an'],
    ['AV', 'atrioventricular', "atrioventricular", 'an'],
    ['SVC', 'superior vena cava', "superior vena cava", 'an'],
    ['IVC', 'inferior vena cava', "inferior vena cava", 'an'],
    ['RCA', 'right coronary artery', "right coronary artery", 'an'],
    ['LCA', 'left coronary artery', "left coronary artery", 'an'],
    ['LAD', 'left anterior descending (artery)', "left anterior descending artery", 'an'],
    // ضربان و هدایت
    ['HR', 'heart rate', "heart rate", 'ep'],
    ['BP', 'blood pressure', "blood pressure", 'ep'],
    ['SA', 'sinoatrial', "sinoatrial", 'ep'],
    ['ECG, EKG', 'electrocardiogram; electrocardiography', "heart tracing (ECG)", 'ep'],
    ['NSR', 'normal sinus rhythm', "normal sinus rhythm", 'ep'],
    ['CO', 'cardiac output', "blood pumped per minute", 'ep'],
    ['SV', 'stroke volume', "stroke volume", 'ep'],
    ['EF', 'ejection fraction', "ejection fraction", 'ep'],
    ['S1, S2', 'first and second heart sounds', "first and second heart sounds", 'ep'],
    // رگ‌ها
    ['CVP', 'central venous pressure', "central venous pressure", 'vc'],
    ['PAD', 'peripheral artery disease', "peripheral artery disease", 'vc'],
    ['PVD', 'peripheral vascular disease', "peripheral vascular disease", 'vc'],
    ['DVT', 'deep vein thrombosis', "deep vein thrombosis", 'vc'],
    ['VTE', 'venous thromboembolism', "venous thromboembolism", 'vc'],
    ['PE', 'pulmonary embolism', "clot in a lung artery", 'vc'],
    ['AAA', 'abdominal aortic aneurysm', "bulging of the abdominal aorta", 'vc'],
    ['PDA', 'patent ductus arteriosus', "patent ductus arteriosus", 'vc'],
    // بیماری‌ها
    ['CAD', 'coronary artery disease', "coronary artery disease", 'ds'],
    ['MI', 'myocardial infarction', "heart attack", 'ds'],
    ['AMI', 'acute myocardial infarction', "acute heart attack", 'ds'],
    ['HTN', 'hypertension', "high blood pressure", 'ds'],
    ['HF', 'heart failure', "heart failure", 'ds'],
    ['CHF', 'congestive heart failure', "congestive heart failure", 'ds'],
    ['AF, A-fib', 'atrial fibrillation', "quivering of the atria", 'ds'],
    ['VF, V-fib', 'ventricular fibrillation', "ventricular fibrillation", 'ds'],
    ['VT', 'ventricular tachycardia', "ventricular tachycardia", 'ds'],
    ['SVT', 'supraventricular tachycardia', "supraventricular tachycardia", 'ds'],
    ['PVC', 'premature ventricular contraction', "premature ventricular contraction", 'ds'],
    ['PAC', 'premature atrial contraction', "premature atrial contraction", 'ds'],
    ['CHB', 'complete heart block', "complete heart block", 'ds'],
    ['BBB', 'bundle branch block', "bundle branch block", 'ds'],
    ['MVP', 'mitral valve prolapse', "mitral valve prolapse", 'ds'],
    ['RHD', 'rheumatic heart disease', "rheumatic heart disease", 'ds'],
    ['CHD', 'congenital heart disease', "congenital heart disease", 'ds'],
    ['ASD', 'atrial septal defect', "atrial septal defect", 'ds'],
    ['VSD', 'ventricular septal defect', "ventricular septal defect", 'ds'],
    ['CoA', 'coarctation of the aorta', "coarctation of the aorta", 'ds'],
    ['LVH', 'left ventricular hypertrophy', "left ventricular hypertrophy", 'ds'],
    ['CVA', 'cerebrovascular accident', "stroke", 'ds'],
    ['TIA', 'transient ischemic attack', "mini-stroke", 'ds'],
    ['WPW', 'Wolff-Parkinson-White (syndrome)', "Wolff-Parkinson-White syndrome", 'ds'],
    // تشخیص
    ['ECHO', 'echocardiography', "echocardiography", 'tx'],
    ['TEE', 'transesophageal echocardiography', "echo through the oesophagus", 'tx'],
    ['CTA', 'computed tomography angiography', "CT angiography", 'tx'],
    ['DSA', 'digital subtraction angiography', "digital subtraction angiography", 'tx'],
    ['MUGA', 'multiple-gated acquisition (scan)', "MUGA scan", 'tx'],
    ['CK-MB', 'creatine kinase, MB (heart) fraction', "creatine kinase, heart type", 'tx'],
    ['BNP', 'B-type natriuretic peptide', "B-type natriuretic peptide", 'tx'],
    ['CRP', 'C-reactive protein', "C-reactive protein", 'tx'],
    ['HDL', 'high-density lipoprotein', "good cholesterol", 'tx'],
    ['LDL', 'low-density lipoprotein', "bad cholesterol", 'tx'],
    ['INR', 'international normalized ratio', "international normalised ratio (warfarin monitoring)", 'tx'],
    // درمان و دارو
    ['PTCA', 'percutaneous transluminal coronary angioplasty', "percutaneous coronary angioplasty", 'tx'],
    ['PCI', 'percutaneous coronary intervention', "percutaneous coronary intervention", 'tx'],
    ['CABG', 'coronary artery bypass graft', "coronary bypass surgery", 'tx'],
    ['CPR', 'cardiopulmonary resuscitation', "cardiopulmonary resuscitation", 'tx'],
    ['AED', 'automated external defibrillator', "automated external defibrillator", 'tx'],
    ['ICD', 'implantable cardioverter-defibrillator', "implantable defibrillator", 'tx'],
    ['IABP', 'intra-aortic balloon pump', "intra-aortic balloon pump", 'tx'],
    ['LVAD', 'left ventricular assist device', "left ventricular assist device", 'tx'],
    ['MVR', 'mitral valve replacement', "mitral valve replacement", 'tx'],
    ['tPA', 'tissue plasminogen activator', "tissue plasminogen activator (clot-buster)", 'tx'],
    ['ACE', 'angiotensin-converting enzyme', "angiotensin-converting enzyme", 'tx'],
    ['ARB', 'angiotensin receptor blocker', "angiotensin receptor blocker", 'tx'],
    ['CCB', 'calcium channel blocker', "calcium channel blocker", 'tx'],
    ['NTG', 'nitroglycerin', "nitroglycerin", 'tx'],
    ['ASA', 'acetylsalicylic acid (aspirin)', "acetylsalicylic acid", 'tx']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {};
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], c: r[5], ab: r[6] || [] }));
  /* ---------- دسته‌بندی واژه‌ها ----------
   * دسته هر واژه در داده‌ها (tools/terms) دستی تعیین شده است؛ این‌جا فقط نام و نماد دسته‌ها آمده است. */
  const CATS = [
    { id: 'anat', icon: '🫀', name: "Heart structure" },
    { id: 'elec', icon: '⚡', name: "Beat, conduction and pressure" },
    { id: 'ves', icon: '🩸', name: "Vessels and circulation" },
    { id: 'dz', icon: '💔', name: "Diseases" },
    { id: 'sx', icon: '🔎', name: "Symptoms and findings" },
    { id: 'dx', icon: '🩻', name: "Tests and imaging" },
    { id: 'proc', icon: '🔧', name: "Surgery and procedures" },
    { id: 'rx', icon: '💊', name: "Drugs" },
    { id: 'sci', icon: '🎓', name: "Specialties and professions" },
    { id: 'adj', icon: '🏷️', name: "Adjectives" },
    { id: 'pl', icon: '📚', name: "Singular and plural" }
  ];
  const classify = t => (CATS.some(c => c.id === t.c) ? t.c : 'anat');
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
  const WORLDS = ['lx', 'an', 'ep', 'vc', 'ds', 'tx'];
  /* دنیای lx (زبان قلب) از همه واژه‌ها، ریشه‌ها و اختصارها سؤال می‌سازد */
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
/* تپش — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
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
  const t = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${+((p.size || 11) * TS).toFixed(2)}" font-weight="${p.w || 700}" fill="${p.fill || INK}" text-anchor="${p.anchor || 'middle'}" direction="ltr" font-family="${FONT_EN}"${p.italic ? ' font-style="italic"' : ''}>${s}</text>`; };
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

  /* ---------- قلب شماتیک (برش از جلو) ----------
   * قرارداد آناتومی: سمت راست بیمار در سمت چپ بیننده است؛ پس دهلیز و بطن راست (آبی) در چپِ تصویرند.
   * heart(x, y, s, o): x و y گوشه بالا-چپ، s مقیاس (کادر حدود ۲۰۰×۲۲۰).
   * o.flow پیکان‌های مسیر خون • o.valves رنگ دریچه‌ها • o.plain بدون حفره‌ها (برای دستگاه هدایت) */
  const BLUE = ['#dbe8fc', '#7ea8e8', '#3d6fc4'], RED = ['#fde2e5', '#f2939d', '#c8324c'], MUSCLE = ['#f8cfc9', '#e6938a'];
  const tube = (d, c, w, edge) => `<path d="${d}" stroke="${edge}" stroke-width="${w + 2.4}" fill="none" stroke-linecap="butt"/><path d="${d}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="butt"/>`;
  function heart(x, y, s, o) {
    const p = o || {}, g = 'h' + (++UID), m = 'hm' + (++UID), a = 'ha' + (++UID);
    const vc = p.valves || '#fffaf0';
    const flow = p.flow ? `<g stroke-width="2.4" fill="none" stroke-linecap="round">
        <path d="M58 30 V64" stroke="#16407f" marker-end="url(#${a}b)"/><path d="M58 206 V170" stroke="#16407f" marker-end="url(#${a}b)"/>
        <path d="M66 104 Q70 132 84 150" stroke="#16407f" marker-end="url(#${a}b)"/><path d="M92 156 Q86 120 92 84" stroke="#16407f" marker-end="url(#${a}b)"/>
        <path d="M150 72 Q144 80 136 82" stroke="#8e1730" marker-end="url(#${a}r)"/><path d="M136 94 Q142 120 134 146" stroke="#8e1730" marker-end="url(#${a}r)"/>
        <path d="M124 160 Q116 120 122 74" stroke="#8e1730" marker-end="url(#${a}r)"/></g>` : '';
    const cav = p.plain ? '' : `
      <path d="M44 74 C44 60 56 56 72 58 L92 62 L94 108 C80 112 60 114 48 112 C44 100 43 86 44 74Z" fill="url(#${m}b)" stroke="${BLUE[2]}" stroke-width="1.2"/>
      <path d="M50 124 C66 120 84 120 98 124 L104 186 C82 174 62 156 50 124Z" fill="url(#${m}b)" stroke="${BLUE[2]}" stroke-width="1.2"/>
      <path d="M110 62 C126 54 150 54 160 64 C166 72 166 86 162 96 C146 100 126 100 112 98Z" fill="url(#${m}r)" stroke="${RED[2]}" stroke-width="1.2"/>
      <path d="M114 112 C130 108 150 108 162 110 C162 142 148 170 124 194 L116 190Z" fill="url(#${m}r)" stroke="${RED[2]}" stroke-width="1.2"/>
      <path d="M52 113 Q60 116 64 128 M90 110 Q84 116 80 128" stroke="${vc}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
      <path d="M64 128 L62 146 M80 128 L84 146" stroke="#f3e4c8" stroke-width="1" opacity=".9"/>
      <path d="M118 100 Q124 104 128 114 M158 98 Q152 104 148 114" stroke="${vc}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
      <path d="M128 114 L130 132 M148 114 L146 132" stroke="#f3e4c8" stroke-width="1" opacity=".9"/>`;
    return `<g transform="translate(${x} ${y}) scale(${s})"><defs>${radial(g, MUSCLE[0], MUSCLE[1], '40%')}${shadow(g + 'f')}${linear(m + 'b', BLUE[0], BLUE[1], true)}${linear(m + 'r', RED[0], RED[1], true)}
        ${marker(a + 'b', '#16407f')}${marker(a + 'r', '#8e1730')}</defs>
      <g filter="url(#${g}f)">
      ${tube('M120 64 C118 36 134 22 156 22 C170 22 178 30 180 40', RED[1], 18, RED[2])}
      ${tube('M58 6 V66', BLUE[1], 18, BLUE[2])}${tube('M58 212 V170', BLUE[1], 18, BLUE[2])}
      ${tube('M156 70 L188 66 M156 88 L188 94', RED[1], 8, RED[2])}
      <path d="M40 74 C36 48 56 38 76 42 L104 48 C122 40 154 40 168 54 C180 66 180 90 176 110 C170 146 150 178 126 208 C94 194 60 170 46 140 C38 120 38 98 40 74Z" fill="url(#${g})" stroke="#b5574f" stroke-width="1.6"/>
      ${cav}
      ${tube('M98 118 C96 92 94 64 92 44 C90 30 80 22 66 18', BLUE[1], 14, BLUE[2])}
      ${p.plain ? '' : `<path d="M86 60 q4 -6 7 0 q4 -6 7 0" stroke="${vc}" stroke-width="2.6" fill="none"/><path d="M112 74 q4 -6 7 0 q4 -6 7 0" stroke="${vc}" stroke-width="2.6" fill="none" opacity=".95"/>`}
      </g>${flow}</g>`;
  }

  /* ---------- زبان قلب ---------- */
  /* آناتومی یک واژه قلبی: peri + cardi + itis */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="44" width="${w}" height="42" rx="11" fill="${bg}"/>${t(x + w / 2, 72, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 94 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 118, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 133, fa, { size: 10, fill: c })}`;
    return svg(360, 196, `${f(180, 24, "One word = prefix + root + suffix", { size: 11.5, fill: INK, w: 800 })}
      ${part(12, 64, 'peri', '#1272a3', '#ddf1fb')}${part(82, 82, 'cardi', '#a31b33', '#fde3e7')}${part(170, 58, 'itis', '#3f8a05', '#e7f9d8')}
      ${br(12, 76, "prefix", "around", '#1272a3')}${br(82, 164, "root", "heart", '#a31b33')}${br(170, 228, 'suffix', "inflammation", '#3f8a05')}
      <path d="M234 64 h10" stroke="${LINE}" stroke-width="2"/><rect x="248" y="44" width="106" height="42" rx="10" fill="#f8f6f5"/>${f(301, 62, "inflammation of", { size: 10.5, fill: '#3f8a05', w: 800 })}${f(301, 78, "around the heart", { size: 11, fill: INK, w: 800 })}
      <path d="M200 152 C150 178 90 178 44 152" stroke="#4f5bd5" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M48 148 l-6 4 l7 3" stroke="#4f5bd5" stroke-width="2" fill="none"/>
      ${f(122, 190, "Read the meaning from the end: suffix → prefix → root", { size: 10.5, fill: '#4f5bd5', w: 700 })}`, "Anatomy of the word pericarditis");
  };

  /* سه پسوند ثبت: -gram، -graph، -graphy */
  A['gram-graph'] = () => {
    const g = 'g' + (++UID);
    const card = (x, c, bg, suf, fa, ex, icon) => `<rect x="${x}" y="8" width="112" height="186" rx="14" fill="${bg}"/>${icon}${t(x + 56, 124, suf, { size: 17, fill: c, w: 900 })}${f(x + 56, 144, fa, { size: 10.5, fill: INK, w: 800 })}${t(x + 56, 172, ex, { size: 10, fill: c, w: 800 })}`;
    const paper = x => `${ecgPaper(x + 16, 34, 80, 50)}${trace(ecgPath(x + 18, 64, 76, 'normal', { k: 0.6 }))}`;
    const machine = x => `<rect x="${x + 22}" y="30" width="68" height="52" rx="8" fill="#5b6b73"/><rect x="${x + 30}" y="38" width="52" height="26" rx="4" fill="#d9f5ef"/>${trace(ecgPath(x + 32, 54, 48, 'normal', { k: 0.4 }), '#0b7a6c')}<circle cx="${x + 36}" cy="73" r="3" fill="#ffc800"/><circle cx="${x + 46}" cy="73" r="3" fill="#9aa9b1"/><path d="M${x + 90} 60 q14 6 10 26" stroke="#5b6b73" stroke-width="2.4" fill="none"/>`;
    const proc = x => `<circle cx="${x + 56}" cy="58" r="28" fill="#fff" stroke="#e58a00" stroke-width="2.4"/><path d="M${x + 56} 40 V58 L${x + 70} 66" stroke="#e58a00" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M${x + 22} 96 h68" stroke="#e58a00" stroke-width="2" marker-end="url(#${g})"/>`;
    return svg(360, 220, `<defs>${marker(g, '#e58a00')}</defs>
      ${card(244, '#c8324c', '#fdecef', '-gram', "recording, tracing, image", 'electrocardiogram', paper(244))}
      ${card(124, '#0b7a6c', '#e3f7f2', '-graph', "recording machine", 'electrocardiograph', machine(124))}
      ${card(4, '#9a5b00', '#fff1dc', '-graphy', "process of recording", 'electrocardiography', proc(4))}
      ${f(180, 212, "result (gram) → device (graph) → act of recording (graphy)", { size: 10, fill: '#4f5bd5', w: 700 })}`, "Recording suffixes");
  };

  /* ضربان کند، طبیعی و تند روی نوار */
  A['rate-strips'] = () => {
    const row = (y, kind, en, fa, bpm, c) => `${ecgPaper(110, y, 240, 54)}${trace(ecgPath(112, y + 36, 236, kind, { k: 0.75 }), c)}${t(56, y + 22, en, { size: 12, fill: c, w: 900 })}${f(56, y + 38, fa, { size: 10, fill: INK, w: 700 })}${f(56, y + 52, bpm, { size: 9.5, fill: MUTED })}`;
    return svg(360, 214, `${row(8, 'brady', 'bradycardia', "slow beat", "under 60 per minute", '#1272a3')}
      ${row(76, 'normal', 'normal', "normal beat", "60 to 100 per minute", '#3f8a05')}
      ${row(144, 'tachy', 'tachycardia', "fast heart rate", "over 100 per minute", '#c8324c')}`, "Slow, normal and fast heart rate");
  };

  /* مفرد و جمع واژه‌های قلب */
  A.plurals = () => {
    const rows = [['-um', '-a', 'atrium', 'atria'], ['-um', '-a', 'septum', 'septa'], ['-us', '-i', 'thrombus', 'thrombi'], ['-us', '-i', 'embolus', 'emboli'], ['-is', '-es', 'stenosis', 'stenoses'], ['-ix', '-ices', 'varix', 'varices'], ['-a', '-ae', 'vena cava', 'venae cavae'], ['-a', '-ae', 'chorda', 'chordae']];
    const cell = i => { const c = i < 4 ? 0 : 1, r = i % 4, x = 8 + c * 176, y = 32 + r * 44; const R = rows[i];
      return `<rect x="${x}" y="${y}" width="168" height="38" rx="10" fill="${['#eef0fd', '#fdf1e4'][c]}"/>${pill(x + 4, y + 9, 66, 20, '#fff')}${t(x + 37, y + 23, `${R[0]} → ${R[1]}`, { size: 10, fill: '#4f5bd5', w: 900 })}${t(x + 78, y + 16, R[2], { size: 9.5, anchor: 'start', fill: MUTED, w: 700 })}${t(x + 78, y + 31, R[3], { size: 11, anchor: 'start', fill: INK, w: 900 })}`; };
    return svg(360, 214, `${f(180, 20, "singular → plural: the word ending sets the plural rule", { size: 11, fill: INK, w: 700 })}${rows.map((_, i) => cell(i)).join('')}`, "Singular and plural of heart words");
  };

  /* ---------- نوار قلب: سازنده موج ----------
   * ecgPath(x, y, w, kind, o): مسیر SVG یک نوار به پهنای w؛ y خط پایه است.
   * kind: normal • brady • tachy • af (بی‌نظم، بدون P) • vf (هرج‌ومرج) • flat (آسیستول) • block (P بدون QRS) */
  function beat(x, y, a, sx) {
    const k = a || 1, q = sx || 1, X = v => (x + v * q).toFixed(1);
    return `L${X(6)} ${y} Q${X(10)} ${y - 7 * k} ${X(14)} ${y} L${X(20)} ${y} L${X(22)} ${y + 4 * k} L${X(25)} ${y - 32 * k} L${X(28)} ${y + 9 * k} L${X(31)} ${y} L${X(40)} ${y} Q${X(47)} ${y - 11 * k} ${X(54)} ${y}`;
  }
  function ecgPath(x, y, w, kind, o) {
    const p = o || {}, k = p.k || 1;
    let d = `M${x} ${y}`, cx = x;
    if (kind === 'flat') return `M${x} ${y} Q${x + w * 0.3} ${y - 2} ${x + w * 0.5} ${y} T${x + w} ${y}`;
    if (kind === 'vf') { let i = 0; while (cx < x + w - 8) { const h = 8 + ((i * 37) % 13); d += ` Q${cx + 5} ${y + (i % 2 ? h : -h) * k} ${cx + 10} ${y}`; cx += 10; i++; } return d + ` L${x + w} ${y}`; }
    if (kind === 'af') {
      const gaps = [34, 52, 26, 60, 30, 44, 38];
      let i = 0;
      while (cx + 40 < x + w) { const g = gaps[i % gaps.length]; for (let j = 0; j < g; j += 4) d += ` L${cx + j + 2} ${y + ((j / 4) % 2 ? 1.6 : -1.6)}`; cx += g; d += ` L${cx + 2} ${y + 4 * k} L${cx + 5} ${y - 30 * k} L${cx + 8} ${y + 8 * k} L${cx + 11} ${y} L${cx + 18} ${y} Q${cx + 24} ${y - 9 * k} ${cx + 30} ${y}`; cx += 30; i++; }
      return d + ` L${x + w} ${y}`;
    }
    const sx = kind === 'tachy' ? 0.62 : 1, bw = 54 * sx;
    const gap = kind === 'brady' ? 70 : kind === 'tachy' ? 2 : 22;
    let n = 0;
    while (cx + bw <= x + w) {
      if (kind === 'block' && n % 2 === 1) { d += ` L${cx + 6} ${y} Q${cx + 10} ${y - 7 * k} ${cx + 14} ${y} L${cx + bw} ${y}`; }
      else d += ' ' + beat(cx, y, k, sx);
      cx += bw + gap; d += ` L${Math.min(cx, x + w)} ${y}`; n++;
    }
    return d + ` L${x + w} ${y}`;
  }
  /** کاغذ نوار قلب با شبکه صورتی */
  function ecgPaper(x, y, w, h) {
    let g = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="#fff5f6" stroke="#f3c6cc"/>`;
    for (let i = 10; i < w; i += 10) g += `<path d="M${x + i} ${y} V${y + h}" stroke="#f6d3d8" stroke-width="${i % 50 ? 0.6 : 1.1}"/>`;
    for (let j = 10; j < h; j += 10) g += `<path d="M${x} ${y + j} H${x + w}" stroke="#f6d3d8" stroke-width="${j % 50 ? 0.6 : 1.1}"/>`;
    return g;
  }
  const trace = (d, c) => `<path d="${d}" stroke="${c || '#b0213d'}" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"/>`;

  /* ---------- ساختمان قلب ---------- */
  /* قلب در میان‌سینه، میان دو ریه؛ نوک قلب پایین و چپ (سمت راست تصویر) */
  A['heart-chest'] = () => {
    const lung = (x, flip) => `<path d="M${x} 70 C${x + flip * 36} 64 ${x + flip * 56} 112 ${x + flip * 58} 170 C${x + flip * 58} 198 ${x + flip * 26} 204 ${x} 190 Z" fill="#f6c6cf" stroke="#d68a98" stroke-width="1.4" opacity=".92"/>`;
    return svg(360, 262, `${man(180, -18, 1.45, { palms: true, opacity: .5 })}
      ${lung(158, -1)}${lung(206, 1)}
      ${heart(140, 92, 0.52)}
      <path d="M182 64 V214" stroke="#4f5bd5" stroke-width="1.3" stroke-dasharray="4 3"/>
      ${lab(56, 72, 'mediastinum', "mediastinum", { size: 11, fill: '#3540a8' })}<path d="M86 76 L176 108" stroke="${LINE}" stroke-width="1.2"/><circle cx="176" cy="108" r="2.4" fill="${LINE}"/>
      ${lab(52, 160, 'right lung', "right lung", { size: 10.5 })}<path d="M80 162 L118 158" stroke="${LINE}" stroke-width="1.2"/>
      ${lab(308, 82, 'left lung', "left lung", { size: 10.5 })}<path d="M280 86 L240 110" stroke="${LINE}" stroke-width="1.2"/>
      ${lab(304, 196, 'apex', "tip of the heart", { size: 11, fill: '#a8203b' })}<path d="M280 196 L206 198" stroke="${LINE}" stroke-width="1.2"/><circle cx="206" cy="198" r="2.6" fill="${LINE}"/>
      ${f(180, 252, "The heart sits behind the breastbone, two thirds of it on the left side of the body", { size: 10, fill: INK, w: 700 })}`, "The heart’s place in the mediastinum");
  };

  /* لایه‌های دیواره قلب: از بیرون به درون */
  A['wall-layers'] = () => {
    const g = 'g' + (++UID);
    let y = 12;
    /* لایه‌ها در وسط؛ برچسب‌ها یکی در میان چپ و راست تا روی هم نیفتند */
    const rows = [
      [26, '#ebe3d6', 'fibrous pericardium', "fibrous pericardium", INK],
      [22, '#f6d9a2', 'parietal pericardium', "parietal pericardium", '#8a5300'],
      [26, '#fff6e3', 'pericardial cavity', "pericardial cavity (fluid)", '#1272a3'],
      [22, '#f6d9a2', 'epicardium', "epicardium (visceral)", '#8a5300'],
      [66, 'url(#' + g + ')', 'myocardium', "myocardium: heart muscle", '#a8203b'],
      [22, '#fbe4e8', 'endocardium', "endocardium: inner lining", '#a8203b'],
      [30, '#c8324c', '', '', '']
    ];
    let side = 1;
    const body = rows.map(r => { const [h, c, en, fa, lc] = r; const y0 = y; y += h; const wave = `M130 ${y0} C160 ${y0 - 6} 200 ${y0 + 6} 230 ${y0} V${y0 + h} C200 ${y0 + h + 6} 160 ${y0 + h - 6} 130 ${y0 + h}Z`;
      side = -side; const right = side > 0, ym = y0 + h / 2;
      const tag = en ? `<path d="M${right ? 230 : 130} ${ym} H${right ? 242 : 118}" stroke="${LINE}" stroke-width="1.2"/>${lab(right ? 245 : 115, ym - 1, en, fa, { size: 10, anchor: right ? 'start' : 'end', fill: lc, gap: 13 })}` : '';
      return `<path d="${wave}" fill="${c}"/>${tag}`; }).join('');
    return svg(360, 262, `<defs>${linear(g, '#f2a9a1', '#df7c72', true)}${shadow(g + 's')}</defs>
      <g filter="url(#${g}s)">${body}</g>
      ${[0, 1, 2].map(i => `<path d="M${146 + i * 34} 112 q10 30 0 56" stroke="#c96a60" stroke-width="1.4" fill="none" opacity=".55"/>`).join('')}
      ${f(180, 210, "blood in the chamber", { size: 10, fill: '#fff', w: 800 })}
      ${f(180, 250, "Outside to inside: pericardium → epicardium → myocardium → endocardium", { size: 10, fill: '#4f5bd5', w: 700 })}`, "Layers of the heart wall");
  };

  /* چهار حفره و دیواره میانی */
  A.chambers = () => {
    const L = (x1, y1, x2, y2, en, fa, anchor, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="${LINE}"/>${lab(x2 + (anchor === 'end' ? -4 : 4), y2 + 3, en, fa, { size: 11, anchor, fill: c })}`;
    return svg(360, 262, `${heart(86, 14, 1.0)}
      ${L(140, 104, 84, 80, 'right atrium', "right atrium", 'end', '#1d4e9e')}${L(150, 160, 84, 168, 'right ventricle', "right ventricle", 'end', '#1d4e9e')}
      ${L(222, 92, 286, 70, 'left atrium', "left atrium", 'start', '#a8203b')}${L(222, 148, 286, 150, 'left ventricle', "left ventricle", 'start', '#a8203b')}
      ${L(196, 166, 286, 210, 'septum', "wall between the ventricles", 'start')}
      ${f(180, 254, "Atria receive blood; ventricles pump it out", { size: 10, fill: '#4f5bd5', w: 700 })}`, "The four chambers of the heart");
  };

  /* چهار دریچه: دهلیزی-بطنی و سینی */
  A.valves4 = () => {
    const g = 'g' + (++UID);
    const cusp = (cx, cy, n, c, r) => { r = r || 22; let out = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" stroke="#8a6d3b" stroke-width="1.6"/>`; for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2 - Math.PI / 2; out += `<path d="M${cx} ${cy} L${(cx + Math.cos(a) * r).toFixed(1)} ${(cy + Math.sin(a) * r).toFixed(1)}" stroke="#8a6d3b" stroke-width="1.6"/>`; } return out; };
    const card = (x, y, c, title, sub) => `<rect x="${x}" y="${y}" width="170" height="114" rx="14" fill="${c}"/>${t(x + 85, y + 18, title, { size: 11, fill: INK, w: 900 })}${f(x + 85, y + 32, sub, { size: 9.5, fill: MUTED })}`;
    return svg(360, 268, `<defs>${shadow(g)}</defs>
      ${card(184, 6, '#e8f0fd', 'atrioventricular (AV)', "between atrium and ventricle")}${card(6, 6, '#fdecef', 'semilunar', "ventricular outlets (crescent-shaped)")}
      <g filter="url(#${g})">${cusp(228, 70, 3, '#fff6dd')}${cusp(312, 70, 2, '#fff6dd')}${cusp(50, 70, 3, '#fde7ea')}${cusp(134, 70, 3, '#fde7ea')}</g>
      ${lab(228, 106, 'tricuspid', "three-cusped (right)", { size: 10.5, fill: '#1d4e9e' })}${lab(312, 106, 'mitral', "mitral, two-cusped (left)", { size: 10.5, fill: '#a8203b' })}
      ${lab(50, 106, 'pulmonary', "pulmonary (right)", { size: 10.5, fill: '#1d4e9e' })}${lab(134, 106, 'aortic', "aortic (left)", { size: 10.5, fill: '#a8203b' })}
      <rect x="6" y="128" width="348" height="132" rx="14" fill="#f8f6f5"/>
      ${f(180, 150, "Order in which blood passes the valves", { size: 10.5, fill: INK, w: 800 })}
      ${['tricuspid', 'pulmonary', 'mitral', 'aortic'].map((v, i) => { const x = 322 - i * 92; return `<circle cx="${x}" cy="182" r="17" fill="${i % 2 ? '#fde7ea' : '#fff6dd'}" stroke="#8a6d3b" stroke-width="1.4"/>${t(x, 187, String(i + 1), { size: 13, w: 900, fill: '#8a6d3b' })}${t(x, 214, v, { size: 10, w: 800 })}${i < 3 ? `<path d="M${x - 24} 182 h-40" stroke="${LINE}" stroke-width="2" marker-end="url(#${g}m)"/>` : ''}`; }).join('')}
      <defs>${marker(g + 'm', LINE)}</defs>
      ${f(180, 246, "Closing of the AV valves makes the first sound (lubb); closing of the semilunar valves makes the second (dupp)", { size: 9.5, fill: '#4f5bd5', w: 700 })}`, "The four heart valves");
  };

  /* مسیر خون: یک حلقه کامل از بدن تا بدن */
  A['flow-loop'] = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID);
    const box = (x, y, w, c, bg, en, fa) => `<rect x="${x}" y="${y}" width="${w}" height="36" rx="11" fill="${bg}" stroke="${c}" stroke-width="1.4"/>${t(x + w / 2, y + 15, en, { size: 10, fill: c, w: 900 })}${f(x + w / 2, y + 29, fa, { size: 9, fill: INK })}`;
    const B = BLUE[2], R = RED[2];
    return svg(360, 300, `<defs>${marker(a, B)}${marker(b, R)}</defs>
      ${box(130, 6, 100, '#3f8a05', '#e7f9d8', 'lungs', "lungs: take up oxygen")}
      ${box(130, 258, 100, '#9a5b00', '#fff1dc', 'body', "body tissues")}
      ${box(6, 214, 112, B, '#e8f0fd', 'venae cavae', "venae cavae")}${box(6, 160, 112, B, '#e8f0fd', 'right atrium', "right atrium")}
      ${box(6, 106, 112, B, '#e8f0fd', 'right ventricle', "right ventricle")}${box(6, 52, 112, B, '#e8f0fd', 'pulmonary artery', "artery to the lungs")}
      ${box(242, 52, 112, R, '#fdecef', 'pulmonary veins', "pulmonary veins")}${box(242, 106, 112, R, '#fdecef', 'left atrium', "left atrium")}
      ${box(242, 160, 112, R, '#fdecef', 'left ventricle', "left ventricle")}${box(242, 214, 112, R, '#fdecef', 'aorta', "aorta")}
      ${[[62, 214, 62, 198], [62, 160, 62, 144], [62, 106, 62, 90]].map(p => `<path d="M${p[0]} ${p[1]} L${p[2]} ${p[3]}" stroke="${B}" stroke-width="2.4" marker-end="url(#${a})"/>`).join('')}
      ${[[298, 88, 298, 104], [298, 142, 298, 158], [298, 196, 298, 212]].map(p => `<path d="M${p[0]} ${p[1]} L${p[2]} ${p[3]}" stroke="${R}" stroke-width="2.4" marker-end="url(#${b})"/>`).join('')}
      <path d="M62 52 Q62 24 128 24" stroke="${B}" stroke-width="2.4" fill="none" marker-end="url(#${a})"/><path d="M232 24 Q298 24 298 50" stroke="${R}" stroke-width="2.4" fill="none" marker-end="url(#${b})"/>
      <path d="M298 250 Q298 276 232 276" stroke="${R}" stroke-width="2.4" fill="none" marker-end="url(#${b})"/><path d="M128 276 Q62 276 62 252" stroke="${B}" stroke-width="2.4" fill="none" marker-end="url(#${a})"/>
      ${t(86, 155, 'tricuspid', { size: 8.5, fill: MUTED, anchor: 'start' })}${t(86, 101, 'pulmonary valve', { size: 8.5, fill: MUTED, anchor: 'start' })}
      ${t(274, 155, 'mitral', { size: 8.5, fill: MUTED, anchor: 'end' })}${t(274, 209, 'aortic valve', { size: 8.5, fill: MUTED, anchor: 'end' })}
      ${f(180, 128, "right half of the heart", { size: 10, fill: B, w: 800 })}${f(180, 144, "oxygen-poor blood", { size: 9.5, fill: B })}
      ${f(180, 178, "left half of the heart", { size: 10, fill: R, w: 800 })}${f(180, 194, "oxygen-rich blood", { size: 9.5, fill: R })}`, "The path of blood through the heart and body");
  };

  /* سرخرگ‌های کرونر روی سطح قلب */
  A['coronary-map'] = () => {
    const g = 'g' + (++UID);
    const L = (x1, y1, x2, y2, en, fa, anchor, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="${LINE}"/>${lab(x2 + (anchor === 'end' ? -4 : 4), y2 + 3, en, fa, { size: 10.5, anchor, fill: c })}`;
    /* برچسب سمت چپ: متن از لبه چپ شروع می‌شود و خط راهنما از زیر انتهای آن به رگ می‌رسد */
    const LL = (x1, y1, y2, en, fa, c) => `<path d="M${x1} ${y1} L132 ${y2 + 6} H8" stroke="${LINE}" stroke-width="1.2" fill="none"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="${LINE}"/>${lab(8, y2 - 14, en, fa, { size: 10.5, anchor: 'start', fill: c, gap: 13 })}`;
    return svg(360, 262, `<defs>${radial(g, '#f7c9c4', '#e08a82', '40%')}${shadow(g + 's')}</defs>
      <g transform="translate(34 0)"><g filter="url(#${g}s)"><path d="M178 22 C178 4 214 2 220 22 V56 h-12 V26 C206 16 190 16 190 30Z" fill="${RED[1]}" stroke="${RED[2]}"/>
      <path d="M110 74 C100 40 140 30 170 44 C196 30 252 38 250 80 C250 128 220 172 196 222 C150 196 114 150 110 74Z" fill="url(#${g})" stroke="#b5574f" stroke-width="1.6"/></g>
      <path d="M176 52 C160 58 132 66 122 92 C116 112 124 146 150 176" stroke="#c8324c" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M186 52 C196 62 200 80 196 104 C192 140 194 180 196 218" stroke="#c8324c" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M190 56 C214 60 240 70 246 92" stroke="#c8324c" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="182" cy="50" r="5" fill="#a8203b"/></g>
      ${LL(216, 50, 34, 'left coronary artery', "left coronary artery (LCA)", '#a8203b')}
      ${LL(152, 120, 150, 'right coronary artery', "right coronary artery (RCA)", '#a8203b')}
      ${L(229, 176, 252, 204, 'LAD', "left anterior descending", 'start', '#a8203b')}
      ${L(274, 82, 290, 104, 'circumflex', "circumflex", 'start', '#a8203b')}
      ${f(180, 252, "Coronary means “crown”: these arteries ring the heart like a crown", { size: 10, fill: '#4f5bd5', w: 700 })}`, "The coronary arteries");
  };

  /* ---------- ضربان، هدایت و فشار ---------- */
  /* دستگاه هدایت: SA ← AV ← هیس ← شاخه‌ها ← پورکنژ */
  A['conduction-path'] = () => {
    const X = 84, Y = 4, S = 0.92, P = (x, y) => [(X + x * S).toFixed(1), (Y + y * S).toFixed(1)];
    const path = pts => 'M' + pts.map(p => P(p[0], p[1]).join(' ')).join(' L');
    const node = (x, y, n) => { const [a, b] = P(x, y); return `<circle cx="${a}" cy="${b}" r="8.5" fill="#ffc800" stroke="#8a5a00" stroke-width="1.6"/>${t(a, +b + 4, n, { size: 10, w: 900, fill: '#5b3a00' })}`; };
    const yel = d => `<path d="${d}" stroke="#8a5a00" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/><path d="${d}" stroke="#ffd43b" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    const leg = (i, x, y, en, fa) => `<circle cx="${x}" cy="${y - 4}" r="9" fill="#ffc800" stroke="#8a5a00" stroke-width="1.4"/>${t(x, y, String(i), { size: 10, w: 900, fill: '#5b3a00' })}${lab(x + 14, y - 4, en, fa, { size: 10.5, anchor: 'start', gap: 12 })}`;
    return svg(360, 320, `${heart(X, Y, S)}
      ${yel(path([[62, 64], [82, 88], [100, 108]]))}${yel(path([[62, 64], [96, 66], [128, 70]]))}
      ${yel(path([[100, 108], [104, 124]]))}${yel(path([[102, 124], [98, 168], [84, 178], [62, 154], [52, 128]]))}${yel(path([[106, 124], [112, 168], [128, 184], [150, 154], [160, 120]]))}
      ${node(62, 64, '1')}${node(100, 108, '2')}${node(104, 124, '3')}${node(98, 160, '4')}${node(150, 154, '5')}
      <rect x="6" y="208" width="348" height="106" rx="12" fill="#fff8e1"/>
      ${leg(1, 196, 234, 'SA node', "SA node: the pacemaker")}${leg(2, 196, 268, 'AV node', "atrioventricular node")}${leg(3, 196, 302, 'bundle of His', "bundle of His")}
      ${leg(4, 22, 234, 'bundle branches', "right and left branches")}${leg(5, 22, 268, 'Purkinje fibers', "Purkinje fibres")}
      ${f(90, 302, "Order: from 1 to 5", { size: 9.5, fill: '#4f5bd5', w: 700 })}`, "conduction system of the heart");
  };

  /* یک موج کامل نوار قلب */
  A['ecg-wave'] = () => {
    const y = 150, x0 = 30, k = 3.1;
    const X = v => x0 + v * 5.2;
    const d = `M${x0} ${y} L${X(6)} ${y} Q${X(10)} ${y - 7 * k} ${X(14)} ${y} L${X(20)} ${y} L${X(22)} ${y + 4 * k} L${X(25)} ${y - 32 * k} L${X(28)} ${y + 9 * k} L${X(31)} ${y} L${X(40)} ${y} Q${X(47)} ${y - 11 * k} ${X(54)} ${y} L${X(60)} ${y}`;
    const tag = (x, ty, en, fa, c) => `${t(x, ty, en, { size: 13, fill: c, w: 900 })}`;
    const br = (x1, x2, yy, s, c) => `<path d="M${x1} ${yy - 4} v4 H${x2} v-4" stroke="${c}" stroke-width="1.6" fill="none"/>${t((x1 + x2) / 2, yy + 13, s, { size: 9.5, fill: c, w: 800 })}`;
    return svg(360, 262, `${ecgPaper(10, 10, 340, 192)}${trace(d)}
      ${tag(X(10), y - 30, 'P', '', '#1272a3')}${tag(X(25) + 12, y - 98, 'R', '', '#a31b33')}${tag(X(22) - 6, y + 26, 'Q', '', '#a31b33')}${tag(X(28) + 8, y + 40, 'S', '', '#a31b33')}${tag(X(47), y - 44, 'T', '', '#3f8a05')}
      ${br(X(6), X(22), y + 34, 'PR interval', '#1272a3')}${br(X(31), X(40), y + 22, 'ST', '#9a5b00')}
      <rect x="10" y="208" width="112" height="48" rx="10" fill="#e8f3fb"/>${t(66, 224, 'P wave', { size: 10.5, fill: '#1272a3', w: 900 })}${f(66, 240, "atria contract", { size: 9.5, fill: INK, w: 700 })}${f(66, 252, "(atrial depolarisation)", { size: 8.5 })}
      <rect x="126" y="208" width="108" height="48" rx="10" fill="#fdecef"/>${t(180, 224, 'QRS complex', { size: 10.5, fill: '#a31b33', w: 900 })}${f(180, 240, "ventricles contract", { size: 9.5, fill: INK, w: 700 })}${f(180, 252, "(ventricular depolarisation)", { size: 8.5 })}
      <rect x="238" y="208" width="112" height="48" rx="10" fill="#e7f9d8"/>${t(294, 224, 'T wave', { size: 10.5, fill: '#3f8a05', w: 900 })}${f(294, 240, "ventricles recover", { size: 9.5, fill: INK, w: 700 })}${f(294, 252, "(ventricular repolarisation)", { size: 8.5 })}`, "ECG waves");
  };

  /* سیستول و دیاستول */
  A['systole-diastole'] = () => {
    const a = 'm' + (++UID);
    const arrows = (x, y, s, kind) => { const P = (u, v) => `${(x + u * s).toFixed(1)} ${(y + v * s).toFixed(1)}`;
      return kind === 'sys'
        ? `<path d="M${P(92, 150)} L${P(92, 40)}" stroke="#16407f" stroke-width="3" marker-end="url(#${a})"/><path d="M${P(128, 160)} L${P(124, 50)}" stroke="#8e1730" stroke-width="3" marker-end="url(#${a})"/>`
        : `<path d="M${P(66, 70)} L${P(70, 150)}" stroke="#16407f" stroke-width="3" marker-end="url(#${a})"/><path d="M${P(138, 70)} L${P(134, 150)}" stroke="#8e1730" stroke-width="3" marker-end="url(#${a})"/>`; };
    return svg(360, 258, `<defs>${marker(a, LINE)}</defs>
      <rect x="184" y="4" width="172" height="250" rx="14" fill="#fdecef"/><rect x="4" y="4" width="172" height="250" rx="14" fill="#e8f3fb"/>
      <g transform="translate(96 52) scale(.62) translate(-104 0)">${heart(0, 0, 1, { valves: '#ffd43b' })}</g>${arrows(31.5, 52, 0.62, 'dia')}
      <g transform="translate(276 60) scale(.56) translate(-104 0)">${heart(0, 0, 1, { valves: '#ffd43b' })}</g>${arrows(217.8, 60, 0.56, 'sys')}
      ${lab(270, 200, 'systole', "Systole: ventricles contract", { size: 12, fill: '#a31b33' })}${f(270, 234, "blood into the aorta and pulmonary artery", { size: 9.5, fill: INK, w: 700 })}
      ${lab(90, 200, 'diastole', "Diastole: rest and filling", { size: 12, fill: '#1272a3' })}${f(90, 234, "blood from atria to ventricles", { size: 9.5, fill: INK, w: 700 })}
      ${t(270, 26, 'lubb (S1)', { size: 10, fill: '#a31b33', w: 900 })}${f(270, 40, "AV valves close", { size: 8.5 })}
      ${t(90, 26, 'dupp (S2)', { size: 10, fill: '#1272a3', w: 900 })}${f(90, 40, "semilunar valves close", { size: 8.5 })}`, "Systole and diastole");
  };

  /* خواندن فشار خون ۱۲۰/۸۰ */
  A['bp-reading'] = () => {
    const g = 'g' + (++UID), a = 'm' + (++UID);
    const wave = (() => { let d = 'M190 150'; for (let i = 0; i < 3; i++) { const x = 190 + i * 52; d += ` C${x + 10} 150 ${x + 14} 96 ${x + 22} 96 C${x + 30} 96 ${x + 34} 124 ${x + 40} 126 C${x + 44} 128 ${x + 48} 150 ${x + 52} 150`; } return d; })();
    return svg(360, 236, `<defs>${linear(g, '#2b3a42', '#16232a', true)}${shadow(g + 's')}${marker(a, LINE)}</defs>
      <g filter="url(#${g}s)"><rect x="14" y="16" width="146" height="170" rx="18" fill="url(#${g})"/></g>
      <rect x="26" y="28" width="122" height="146" rx="10" fill="#d9f5ef"/>
      ${t(84, 82, '120', { size: 34, fill: '#123', w: 900 })}<path d="M38 94 H130" stroke="#0b7a6c" stroke-width="2"/>${t(84, 132, '80', { size: 34, fill: '#123', w: 900 })}
      ${t(136, 82, 'SYS', { size: 8, fill: '#0b7a6c', anchor: 'end' })}${t(136, 132, 'DIA', { size: 8, fill: '#0b7a6c', anchor: 'end' })}${t(86, 162, 'mmHg', { size: 10, fill: '#0b7a6c' })}
      <path d="M188 96 H350" stroke="#c8324c" stroke-width="1.2" stroke-dasharray="4 3"/><path d="M188 150 H350" stroke="#1272a3" stroke-width="1.2" stroke-dasharray="4 3"/>
      ${trace(wave)}
      ${lab(270, 52, 'systolic', "systolic: top number (contraction)", { size: 11, fill: '#a31b33' })}
      ${lab(270, 174, 'diastolic', "diastolic: bottom number (relaxation)", { size: 11, fill: '#1272a3' })}
      ${f(180, 222, "“120 over 80 mmHg” means systolic pressure 120 and diastolic 80", { size: 10, fill: '#4f5bd5', w: 700 })}`, "Reading blood pressure");
  };

  /* نقطه‌های نبض روی آدمک */
  A['pulse-points'] = () => {
    const X = 180, Y = 6, S = 1.04, P = (x, y) => [X + x * S, Y + y * S];
    const dot = (x, y) => { const [a, b] = P(x, y); return `<circle cx="${a}" cy="${b}" r="5.5" fill="#c8324c" stroke="#fff" stroke-width="1.6"/><circle cx="${a}" cy="${b}" r="9" fill="none" stroke="#c8324c" stroke-width="1.2" opacity=".5"/>`; };
    const L = (x, y, tx, ty, en, fa, anchor) => { const [a, b] = P(x, y); return `<path d="M${a} ${b} L${tx} ${ty}" stroke="${LINE}" stroke-width="1.1"/>${lab(tx + (anchor === 'end' ? -4 : 4), ty + 3, en, fa, { size: 10, anchor })}`; };
    return svg(360, 252, `${man(X, Y, S, { palms: true })}
      ${L(-11, 12, 90, 20, 'temporal', "temporal", 'end')}${L(-7, 34, 90, 54, 'carotid', "neck (carotid)", 'end')}${L(-30, 82, 90, 96, 'brachial', "of the arm", 'end')}
      ${L(-34, 112, 90, 140, 'radial', "radial (wrist)", 'end')}${L(-11, 150, 90, 190, 'popliteal', "popliteal (behind the knee)", 'end')}
      ${L(9, 64, 270, 60, 'apical', "apical (tip of the heart)", 'start')}${L(8, 110, 270, 118, 'femoral', "femoral (groin)", 'start')}${L(12, 192, 270, 196, 'dorsalis pedis', "top of the foot", 'start')}
      ${dot(-11, 12)}${dot(-7, 34)}${dot(9, 64)}${dot(-30, 82)}${dot(-34, 112)}${dot(8, 110)}${dot(-11, 150)}${dot(12, 192)}
      ${f(180, 246, "A pulse is felt where an artery runs close to the skin over a bone", { size: 9.5, fill: '#4f5bd5', w: 700 })}`, "Pulse points");
  };

  /* ---------- رگ‌ها و گردش خون ---------- */
  /* زنجیره رگ‌ها: سرخرگ ← سرخرگچه ← مویرگ ← سیاهرگچه ← سیاهرگ */
  A['vessel-chain'] = () => {
    const g = 'g' + (++UID), a = 'm' + (++UID);
    const seg = (x, w, h, c1, c2, wall) => `<rect x="${x}" y="${92 - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${wall}"/><rect x="${x}" y="${92 - h / 2 + Math.max(2, h * 0.16)}" width="${w}" height="${h - 2 * Math.max(2, h * 0.16)}" fill="url(#${g}${c1})"/>`;
    let cap = '';
    for (let i = 0; i < 5; i++) cap += `<path d="M${148 + i * 2} ${80 + i * 6} C170 ${60 + i * 14} 190 ${124 - i * 14} ${212 - i * 2} ${80 + i * 6}" stroke="${['#d94a5e', '#c9577a', '#a06496', '#7d6fb3', '#5b7ac8'][i]}" stroke-width="3" fill="none"/>`;
    return svg(360, 232, `<defs>${linear(g + 'r', '#e8495f', '#c8324c', true)}${linear(g + 'b', '#5d86d6', '#3d6fc4', true)}${marker(a, LINE)}</defs>
      ${seg(6, 80, 40, 'r', 0, '#f2a6ae')}${seg(86, 62, 22, 'r', 0, '#f2a6ae')}${cap}${seg(212, 62, 22, 'b', 0, '#a8c1ec')}${seg(274, 80, 40, 'b', 0, '#a8c1ec')}
      <path d="M20 40 H340" stroke="${LINE}" stroke-width="1.6" marker-end="url(#${a})"/>${f(180, 32, "direction of blood flow", { size: 9.5, fill: MUTED })}
      ${lab(46, 140, 'artery', "artery", { size: 11, fill: '#a8203b' })}${lab(117, 140, 'arteriole', "small artery", { size: 10, fill: '#a8203b' })}
      ${lab(180, 140, 'capillary', "capillary", { size: 11, fill: '#6b4fa8' })}${lab(243, 140, 'venule', "small vein", { size: 10, fill: '#1d4e9e' })}${lab(314, 140, 'vein', "vein", { size: 11, fill: '#1d4e9e' })}
      <rect x="6" y="170" width="348" height="56" rx="12" fill="#f8f6f5"/>
      ${f(180, 192, "artery: thick wall, carries blood away from the heart", { size: 10, fill: '#a8203b', w: 700 })}
      ${f(180, 214, "vein: thin wall with valves, returns blood to the heart", { size: 10, fill: '#1d4e9e', w: 700 })}`, "The chain of vessels");
  };

  /* برش سرخرگ، سیاهرگ و مویرگ */
  A['vessel-wall'] = () => {
    const ring = (cx, cy, ro, layers) => { let r = ro, out = ''; layers.forEach(l => { out += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${l[1]}"/>`; r -= l[0]; }); return out; };
    const L = (x1, y1, x2, y2, en, fa, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.1"/><circle cx="${x1}" cy="${y1}" r="2.2" fill="${LINE}"/>${lab(x2 - 4, y2 + 3, en, fa, { size: 10, anchor: 'end', fill: c })}`;
    return svg(360, 262, `
      ${ring(168, 92, 58, [[13, '#f3e3cf'], [21, '#e48a8a'], [4, '#fbe7ea'], [22, '#fff']])}
      ${L(120, 58, 96, 24, 'adventitia', "outer layer", INK)}${L(124, 94, 96, 76, 'media', "smooth muscle", '#a8203b')}
      ${L(143, 110, 96, 128, 'intima', "endothelium", INK)}${L(168, 92, 96, 178, 'lumen', "vessel channel", '#1272a3')}
      ${lab(168, 172, 'artery', "artery: thick middle layer", { size: 12, fill: '#a8203b' })}
      <ellipse cx="300" cy="62" rx="52" ry="34" fill="#e7eef9"/><ellipse cx="300" cy="62" rx="47" ry="29" fill="#9bb7e6"/><ellipse cx="300" cy="62" rx="42" ry="25" fill="#fbe7ea"/><ellipse cx="300" cy="62" rx="39" ry="22" fill="#fff"/>
      <path d="M282 50 Q300 66 318 50" stroke="#7aa0dc" stroke-width="3" fill="none"/>${f(300, 78, "valve", { size: 9, fill: '#1d4e9e', w: 700 })}
      ${lab(300, 116, 'vein', "vein: thin wall", { size: 12, fill: '#1d4e9e' })}
      <circle cx="300" cy="180" r="15" fill="#fbe7ea" stroke="#d9a6c9"/><circle cx="300" cy="180" r="11" fill="#fff"/>
      ${lab(300, 216, 'capillary', "capillary: one layer of cells", { size: 12, fill: '#6b4fa8' })}`, "Cross-sections of vessels");
  };

  /* دو گردش: ریوی و عمومی */
  A['two-circuits'] = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID);
    const net = (x, y, w, h, c) => { let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${c}"/>`; for (let i = 1; i < 6; i++) s += `<path d="M${x + i * w / 6} ${y + 6} q-6 ${h / 2} 0 ${h - 12}" stroke="#fff" stroke-width="1.2" opacity=".7" fill="none"/>`; return s; };
    return svg(360, 300, `<defs>${marker(a, BLUE[2])}${marker(b, RED[2])}</defs>
      ${net(110, 8, 140, 48, '#f6c6cf')}${lab(180, 30, 'lungs', "lungs", { size: 11, fill: '#3f8a05' })}
      ${net(90, 244, 180, 50, '#fde3c8')}${lab(180, 266, 'body tissues', "body tissues", { size: 11, fill: '#9a5b00' })}
      <g transform="translate(180 94) scale(.62) translate(-104 0)">${heart(0, 0, 1)}</g>
      <path d="M150 112 C120 100 112 70 130 58" stroke="${BLUE[2]}" stroke-width="3" fill="none" marker-end="url(#${a})"/>
      <path d="M230 58 C250 72 246 96 214 108" stroke="${RED[2]}" stroke-width="3" fill="none" marker-end="url(#${b})"/>
      <path d="M220 168 C270 190 270 220 250 240" stroke="${RED[2]}" stroke-width="3" fill="none" marker-end="url(#${b})"/>
      <path d="M110 240 C88 214 98 186 140 172" stroke="${BLUE[2]}" stroke-width="3" fill="none" marker-end="url(#${a})"/>
      ${lab(64, 76, 'pulmonary', "pulmonary (lesser) circulation", { size: 11, fill: '#1d4e9e' })}${f(64, 104, "right → lungs → left", { size: 9, fill: MUTED })}
      ${lab(304, 128, 'systemic', "systemic (greater) circulation", { size: 11, fill: '#a8203b' })}${f(304, 156, "left → body → right", { size: 9, fill: MUTED })}`, "Pulmonary and systemic circulation");
  };

  /* تنگ و گشاد شدن رگ */
  A.vaso = () => {
    const g = 'g' + (++UID);
    const tubeX = (x, lumen, label, fa, c, arrows) => `<rect x="${x}" y="40" width="150" height="80" rx="16" fill="#f2a6ae"/><rect x="${x}" y="${80 - lumen / 2}" width="150" height="${lumen}" fill="url(#${g})"/>
      ${arrows}${lab(x + 75, 150, label, fa, { size: 12, fill: c })}`;
    const inA = x => `<path d="M${x + 75} 18 v18" stroke="${LINE}" stroke-width="2.4" marker-end="url(#${g}m)"/><path d="M${x + 75} 142 v-18" stroke="${LINE}" stroke-width="2.4" marker-end="url(#${g}m)"/>`;
    const outA = x => `<path d="M${x + 75} 50 v-30" stroke="#fff" stroke-width="2.4" marker-end="url(#${g}m)"/><path d="M${x + 75} 110 v30" stroke="#fff" stroke-width="2.4" marker-end="url(#${g}m)"/>`;
    return svg(360, 214, `<defs>${linear(g, '#e8495f', '#c8324c', true)}${marker(g + 'm', LINE)}</defs>
      ${tubeX(196, 18, 'vasoconstriction', "narrowing of a vessel", '#a8203b', inA(196))}${tubeX(14, 56, 'vasodilation', "widening of a blood vessel", '#1272a3', outA(14))}
      <rect x="196" y="176" width="150" height="30" rx="10" fill="#fdecef"/>${f(271, 196, "blood pressure rises ↑", { size: 10, fill: '#a8203b', w: 800 })}
      <rect x="14" y="176" width="150" height="30" rx="10" fill="#e8f3fb"/>${f(89, 196, "blood pressure falls ↓", { size: 10, fill: '#1272a3', w: 800 })}`, "Narrowing and widening of vessels");
  };

  /* گردش جنینی: سوراخ بیضی و مجرای شریانی */
  A['fetal-shunts'] = () => {
    const X = 82, Y = 26, S = 0.92, P = (x, y) => [(X + x * S).toFixed(1), (Y + y * S).toFixed(1)];
    const L = (x1, y1, x2, y2, en, fa, anchor, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="${LINE}"/>${lab(x2 + (anchor === 'end' ? -4 : 4), y2 + 3, en, fa, { size: 10.5, anchor, fill: c })}`;
    const [fx, fy] = P(96, 82), [dx, dy] = P(128, 26);
    return svg(360, 262, `${heart(X, Y, S)}
      <path d="M${P(92, 24).join(' ')} C${P(104, 6).join(' ')} ${P(132, 6).join(' ')} ${P(140, 22).join(' ')}" stroke="#7b3fa0" stroke-width="7" fill="none" stroke-linecap="round" opacity=".85"/>
      <ellipse cx="${fx}" cy="${fy}" rx="6" ry="9" fill="#7b3fa0" stroke="#fff" stroke-width="1.6"/>
      ${L(fx, fy, 258, 130, 'foramen ovale', "foramen ovale", 'start', '#6b2f90')}${L(dx, dy, 258, 30, 'ductus arteriosus', "ductus arteriosus", 'start', '#6b2f90')}
      ${f(180, 232, "Before birth, blood bypasses the inactive lungs", { size: 10, fill: INK, w: 700 })}
      ${f(180, 252, "After birth both close; a duct that stays open = PDA", { size: 10, fill: '#a8203b', w: 700 })}`, "Shortcuts in fetal circulation");
  };

  /* ---------- بیماری‌ها ---------- */
  /* مراحل آترواسکلروز در برش سرخرگ */
  A['athero-steps'] = () => {
    const g = 'g' + (++UID), a = 'm' + (++UID);
    /* دیواره، سپس پلاک زرد که مجرا را از پایین تنگ می‌کند، و مجرای قرمز باقی‌مانده */
    const step = (cx, lr, off, clot, en, fa) => {
      let s = `<circle cx="${cx}" cy="70" r="40" fill="#f2a6ae"/><circle cx="${cx}" cy="70" r="31" fill="${lr < 31 ? `url(#${g})` : '#e8495f'}"/>`;
      if (lr < 31) s += `<circle cx="${cx}" cy="${70 - off}" r="${lr}" fill="#e8495f"/>`;
      if (clot) s += `<circle cx="${cx}" cy="${70 - off}" r="${lr + 1}" fill="#7a1022"/>${dots(cx, 70 - off, lr - 1, 6, '#c25060', 1.3, 5)}`;
      return s + lab(cx, 130, en, fa, { size: 10.5, fill: '#a8203b' });
    };
    return svg(360, 218, `<defs>${radial(g, '#fff3b0', '#f0c043', '50%')}${marker(a, LINE)}</defs>
      ${step(312, 31, 0, 0, 'normal', "healthy artery")}${step(224, 22, 7, 0, 'plaque', "fatty plaque")}${step(136, 11, 16, 0, 'stenosis', "severe narrowing")}${step(48, 11, 16, 1, 'thrombus', "clot and blockage")}
      ${[[270, 254], [182, 166], [94, 78]].map(p => `<path d="M${p[0]} 70 L${p[1]} 70" stroke="${LINE}" stroke-width="2.4" marker-end="url(#${a})"/>`).join('')}
      <rect x="6" y="168" width="348" height="44" rx="12" fill="#fdecef"/>${f(180, 186, "A fatty plaque (atheroma) narrows the vessel channel;", { size: 10, fill: INK, w: 700 })}${f(180, 203, "when a clot forms on it, the vessel closes completely.", { size: 10, fill: '#a8203b', w: 700 })}`, "Stages of atherosclerosis");
  };

  /* لخته ثابت و آمبول سرگردان */
  A['clot-travel'] = () => {
    const a = 'm' + (++UID), g = 'g' + (++UID);
    const vessel = (y, w0, w1) => `<path d="M14 ${y - w0} C120 ${y - w0} 220 ${y - w1} 346 ${y - w1} V${y + w1} C220 ${y + w1} 120 ${y + w0} 14 ${y + w0}Z" fill="#f2a6ae"/><path d="M14 ${y - w0 + 6} C120 ${y - w0 + 6} 220 ${y - w1 + 4} 346 ${y - w1 + 4} V${y + w1 - 4} C220 ${y + w1 - 4} 120 ${y + w0 - 6} 14 ${y + w0 - 6}Z" fill="url(#${g})"/>`;
    const clot = (cx, cy, r) => `<ellipse cx="${cx}" cy="${cy}" rx="${r * 1.3}" ry="${r}" fill="#7a1022"/>${dots(cx, cy, r - 1, 7, '#c25060', 1.3, 3)}`;
    return svg(360, 272, `<defs>${linear(g, '#e8495f', '#c8324c', true)}${marker(a, '#7a1022')}</defs>
      ${vessel(60, 26, 26)}${clot(120, 76, 9)}<path d="M120 86 v4" stroke="#7a1022" stroke-width="3"/>
      ${lab(120, 112, 'thrombus', "fixed clot; stuck to the wall", { size: 11, fill: '#7a1022' })}
      ${vessel(180, 26, 12)}${clot(76, 180, 8)}<path d="M100 180 C150 180 200 180 254 180" stroke="#7a1022" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#${a})"/>${clot(290, 180, 9)}
      ${lab(76, 222, 'embolus', "travelling clot", { size: 11, fill: '#7a1022' })}${lab(290, 222, 'embolism', "lodges and blocks the vessel", { size: 11, fill: '#7a1022' })}
      ${f(180, 264, "deep vein thrombosis of the leg (DVT) → embolus → pulmonary embolism (PE)", { size: 10, fill: '#4f5bd5', w: 700 })}`, "Fixed clot and embolus");
  };

  /* چهار ریتم: طبیعی، فیبریلاسیون دهلیزی، فیبریلاسیون بطنی، آسیستول */
  A['arrhythmias'] = () => {
    const row = (y, kind, en, fa, note, c) => `${ecgPaper(124, y, 228, 52)}${trace(ecgPath(126, y + 34, 224, kind, { k: 0.7 }), c)}${t(62, y + 18, en, { size: 10.5, fill: c, w: 900 })}${f(62, y + 33, fa, { size: 9.5, fill: INK, w: 700 })}${f(62, y + 47, note, { size: 8.5, fill: MUTED })}`;
    return svg(360, 252, `${row(4, 'normal', 'NSR', "normal sinus rhythm", "regular, with P waves", '#3f8a05')}
      ${row(66, 'af', 'atrial fibrillation', "quivering of the atria", "irregular, no P waves", '#9a5b00')}
      ${row(128, 'vf', 'ventricular fib.', "ventricular fibrillation", "chaos; needs a shock", '#c8324c')}
      ${row(190, 'flat', 'asystole', "asystole", "flat line; cardiac arrest", '#5b6b73')}`, "Four heart rhythms");
  };

  /* دریچه بیمار: تنگی و نارسایی */
  A['valve-problems'] = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID);
    const box = (x, c, bg, en, fa, note, body) => `<rect x="${x}" y="6" width="112" height="206" rx="14" fill="${bg}"/>${body}${lab(x + 56, 158, en, fa, { size: 11, fill: c })}${f(x + 56, 194, note, { size: 9, fill: INK, w: 700 })}`;
    const pipe = x => `<rect x="${x + 36}" y="20" width="40" height="110" rx="10" fill="#fde2e5" stroke="#e8a0a8"/>`;
    const normal = x => `${pipe(x)}<path d="M${x + 38} 76 L${x + 52} 62 M${x + 74} 76 L${x + 60} 62" stroke="#c9a46a" stroke-width="4" stroke-linecap="round"/><path d="M${x + 56} 118 V36" stroke="#c8324c" stroke-width="3.4" marker-end="url(#${a})"/>`;
    const sten = x => `${pipe(x)}<path d="M${x + 38} 76 L${x + 53} 64 M${x + 74} 76 L${x + 59} 64" stroke="#a37a3a" stroke-width="7" stroke-linecap="round"/><path d="M${x + 56} 118 V84" stroke="#c8324c" stroke-width="3.4" marker-end="url(#${a})"/><path d="M${x + 56} 60 V36" stroke="#c8324c" stroke-width="1.6" marker-end="url(#${a})"/>`;
    const regurg = x => `${pipe(x)}<path d="M${x + 38} 70 L${x + 50} 64 M${x + 74} 70 L${x + 62} 64" stroke="#c9a46a" stroke-width="4" stroke-linecap="round"/><path d="M${x + 56} 36 V116" stroke="#3d6fc4" stroke-width="3" stroke-dasharray="5 3" marker-end="url(#${b})"/>`;
    return svg(360, 218, `<defs>${marker(a, '#c8324c')}${marker(b, '#3d6fc4')}</defs>
      ${box(244, '#3f8a05', '#e7f9d8', 'normal', "healthy valve", "opens and closes fully", normal(244))}
      ${box(124, '#9a5b00', '#fff1dc', 'stenosis', "narrowing of a valve", "stiff; does not open well", sten(124))}
      ${box(4, '#1d4e9e', '#e8f0fd', 'regurgitation', "valve leakage", "does not close well", regurg(4))}`, "Valve narrowing and leakage");
  };

  /* نقص‌های مادرزادی: ASD، VSD، PDA، کوآرکتاسیون */
  A['heart-defects'] = () => {
    const X = 96, Y = 14, S = 0.84, P = (x, y) => [(X + x * S).toFixed(1), (Y + y * S).toFixed(1)];
    const hole = (x, y, n) => { const [a, b] = P(x, y); return `<circle cx="${a}" cy="${b}" r="8" fill="#7b3fa0" stroke="#fff" stroke-width="1.8"/>${t(a, +b + 3.5, n, { size: 9, w: 900, fill: '#fff' })}`; };
    const leg = (i, x, y, en, fa) => `<circle cx="${x}" cy="${y - 4}" r="9" fill="#7b3fa0"/>${t(x, y, String(i), { size: 9.5, w: 900, fill: '#fff' })}${lab(x + 14, y - 4, en, fa, { size: 10.5, anchor: 'start', gap: 12 })}`;
    const [c1, c2] = P(150, 28);
    return svg(360, 318, `${heart(X, Y, S)}
      <path d="M${P(92, 24).join(' ')} C${P(104, 6).join(' ')} ${P(132, 6).join(' ')} ${P(140, 22).join(' ')}" stroke="#7b3fa0" stroke-width="6" fill="none" stroke-linecap="round" opacity=".8"/>
      <path d="M${c1 - 2} ${c2 - 9} q6 9 0 18 M${c1 + 10} ${c2 - 9} q-6 9 0 18" stroke="#7b3fa0" stroke-width="3" fill="none"/>
      ${hole(96, 82, '1')}${hole(104, 150, '2')}${hole(118, 14, '3')}${hole(170, 34, '4')}
      <rect x="6" y="208" width="348" height="104" rx="12" fill="#f3ecfb"/>
      ${leg(1, 196, 234, 'ASD', "atrial septal defect")}${leg(2, 196, 268, 'VSD', "ventricular septal defect")}
      ${leg(3, 22, 234, 'PDA', "patent ductus arteriosus")}${leg(4, 22, 268, 'CoA', "congenital aortic narrowing")}
      ${f(180, 302, "tetralogy of Fallot = VSD + pulmonary stenosis + overriding aorta + thick right ventricle", { size: 9.5, fill: '#6b2f90', w: 700 })}`, "Congenital heart defects");
  };

  /* رده‌های فشار خون */
  A['bp-categories'] = () => {
    const rows = [['hypotension', "low pressure", "under 90/60", '#3d6fc4', '#e8f0fd'], ['normal', "normal", "under 120/80", '#3f8a05', '#e7f9d8'], ['elevated', "elevated (prehypertension)", "120–129 / under 80", '#b88600', '#fff7d6'], ['hypertension 1', "stage 1 hypertension", "130–139 / 80–89", '#d9730d', '#ffe9d3'], ['hypertension 2', "stage 2 hypertension", "140/90 or higher", '#c8324c', '#fdecef']];
    return svg(360, 252, `${f(180, 18, "Adult blood pressure (mmHg)", { size: 11, fill: INK, w: 800 })}
      ${rows.map((r, i) => { const y = 30 + i * 43; return `<rect x="8" y="${y}" width="344" height="37" rx="11" fill="${r[4]}"/><rect x="8" y="${y}" width="8" height="37" rx="4" fill="${r[3]}"/>
        ${t(28, y + 16, r[0], { size: 10.5, anchor: 'start', fill: r[3], w: 900 })}${f(28, y + 31, r[1], { size: 9.5, anchor: 'start', fill: INK, w: 700 })}${f(342, y + 24, r[2], { size: 10.5, anchor: 'end', fill: r[3], w: 800 })}`; }).join('')}`, "Blood pressure categories");
  };

  /* ---------- تشخیص، درمان و دارو ---------- */
  /* آزمون‌های قلب بر اساس آنچه می‌سنجند */
  A['dx-tools'] = () => {
    const box = (x, y, c, bg, icon, en, fa, items) => `<rect x="${x}" y="${y}" width="170" height="118" rx="14" fill="${bg}"/>${icon}${t(x + 85, y + 58, en, { size: 11, fill: c, w: 900 })}${f(x + 85, y + 73, fa, { size: 9.5, fill: INK, w: 700 })}${items.map((s, i) => t(x + 85, y + 91 + i * 13, s, { size: 9, fill: c, w: 700 })).join('')}`;
    const ecgI = (x, y) => `${trace(ecgPath(x + 50, y + 26, 70, 'normal', { k: 0.5 }), '#c8324c')}`;
    const sound = (x, y) => `${[0, 1, 2].map(i => `<path d="M${x + 70 + i * 9} ${y + 12} q8 14 0 28" stroke="#0b7a6c" stroke-width="2.4" fill="none"/>`).join('')}<rect x="${x + 50}" y="${y + 16}" width="16" height="20" rx="5" fill="#0b7a6c"/>`;
    const dye = (x, y) => `<path d="M${x + 60} ${y + 34} C${x + 74} ${y + 10} ${x + 96} ${y + 40} ${x + 112} ${y + 14}" stroke="#4a4a4a" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M${x + 60} ${y + 34} C${x + 74} ${y + 10} ${x + 96} ${y + 40} ${x + 112} ${y + 14}" stroke="#9aa9b1" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    const tube = (x, y) => `<rect x="${x + 76}" y="${y + 8}" width="16" height="34" rx="6" fill="#fff" stroke="#8a5300" stroke-width="1.6"/><rect x="${x + 77}" y="${y + 22}" width="14" height="19" rx="5" fill="#c8324c"/>`;
    return svg(360, 252, `${box(184, 6, '#c8324c', '#fdecef', ecgI(184, 6), 'electrical', "the heart’s electrical current", ['ECG • Holter • stress test'])}
      ${box(6, 6, '#0b7a6c', '#e3f7f2', sound(6, 6), 'ultrasound', "sound waves", ['echocardiography • Doppler'])}
      ${box(184, 130, '#4a4a4a', '#eef1f3', dye(184, 130), 'x-ray + dye', "radiation and contrast dye", ['angiography • catheterization'])}
      ${box(6, 130, '#8a5300', '#fff1dc', tube(6, 130), 'blood tests', "a blood test", ['troponin • CK-MB • lipids • BNP'])}`, "Heart tests");
  };

  /* نقشه داروهای قلب: هر دارو کجا اثر می‌کند */
  A['drug-map'] = () => {
    const a = 'm' + (++UID);
    const chip = (x, y, en, fa, c, bg) => `<rect x="${x}" y="${y}" width="124" height="40" rx="12" fill="${bg}" stroke="${c}" stroke-width="1.2"/>${t(x + 62, y + 17, en, { size: 10, fill: c, w: 900 })}${f(x + 62, y + 32, fa, { size: 9, fill: INK, w: 700 })}`;
    const L = (x1, y1, x2, y2, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#${a})"/>`;
    return svg(360, 312, `<defs>${marker(a, LINE)}</defs>
      <g transform="translate(180 66) scale(.66) translate(-104 0)">${heart(0, 0, 1)}</g>
      ${chip(230, 6, 'beta-blocker', "slows the heartbeat", '#c8324c', '#fdecef')}${L(228, 26, 196, 100, '#c8324c')}
      ${chip(6, 6, 'antiarrhythmic', "steadies the rhythm", '#c8324c', '#fdecef')}${L(130, 26, 168, 100, '#c8324c')}
      ${chip(230, 92, 'digoxin', "stronger contraction", '#c8324c', '#fdecef')}${L(228, 112, 214, 140, '#c8324c')}
      ${chip(6, 92, 'nitroglycerin', "widens vessels and relieves angina", '#1272a3', '#e8f3fb')}${L(130, 112, 156, 130, '#1272a3')}
      ${chip(6, 172, 'anticoagulant', "prevents clots", '#7a1022', '#fbe4e8')}${chip(6, 218, 'thrombolytic', "dissolves an existing clot", '#7a1022', '#fbe4e8')}
      ${chip(230, 172, 'statin', "lowers cholesterol", '#9a5b00', '#fff1dc')}${chip(230, 218, 'diuretic', "removes excess water and salt", '#0b7a6c', '#e3f7f2')}
      <rect x="80" y="268" width="200" height="40" rx="12" fill="#eef0fd" stroke="#4f5bd5" stroke-width="1.2"/>${t(180, 285, 'antihypertensive', { size: 10, fill: '#4f5bd5', w: 900 })}${f(180, 300, "Blood pressure drugs: ACE inhibitor, ARB, CCB", { size: 9, fill: INK, w: 700 })}`, "Map of heart drugs");
  };

  /* کلسترول خوب و بد */
  A.lipids = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID), g = 'g' + (++UID);
    const ball = (cx, cy, r, c) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><circle cx="${cx - r * 0.3}" cy="${cy - r * 0.3}" r="${r * 0.3}" fill="#fff" opacity=".35"/>`;
    return svg(360, 252, `<defs>${marker(a, '#c8324c')}${marker(b, '#3f8a05')}${radial(g, '#fff3b0', '#f0c043', '50%')}</defs>
      <path d="M14 96 H346 V176 H14Z" fill="#f2a6ae"/><path d="M14 106 H346 V166 H14Z" fill="#e8495f"/>
      <path d="M120 166 C140 140 200 140 220 166Z" fill="url(#${g})"/>
      <path d="M300 24 C326 24 342 40 342 58 C342 76 322 84 300 80 C278 84 262 72 266 56 C270 36 284 24 300 24Z" fill="#a9622b"/>${f(304, 56, "liver", { size: 10, fill: '#fff', w: 800 })}
      ${ball(150, 132, 14, '#e8a23a')}${ball(196, 128, 14, '#e8a23a')}<path d="M80 120 L130 140" stroke="#c8324c" stroke-width="2" marker-end="url(#${a})"/>
      ${ball(250, 122, 9, '#58cc02')}<path d="M256 112 C270 94 280 86 290 82" stroke="#3f8a05" stroke-width="2" marker-end="url(#${b})"/>
      ${lab(92, 212, 'LDL', "bad: deposits in the vessel wall", { size: 12, fill: '#c8324c' })}${lab(262, 212, 'HDL', "good: carries it to the liver", { size: 12, fill: '#3f8a05' })}
      ${f(170, 162, "plaque", { size: 9.5, fill: '#8a5300', w: 800 })}
      ${f(180, 248, "LDL should be Low and HDL should be High", { size: 10, fill: '#4f5bd5', w: 700 })}`, "Good and bad cholesterol");
  };

  /* احیا: زنجیره نجات */
  A['cpr-steps'] = () => {
    const a = 'm' + (++UID);
    const step = (i, x, c, bg, icon, en, fa) => `<rect x="${x}" y="22" width="80" height="124" rx="14" fill="${bg}"/><circle cx="${x + 40}" cy="22" r="11" fill="${c}"/>${t(x + 40, 26, String(i), { size: 11, w: 900, fill: '#fff' })}${icon}${t(x + 40, 112, en, { size: 9.5, fill: c, w: 900 })}${f(x + 40, 128, fa, { size: 9, fill: INK, w: 700 })}`;
    const phone = x => `<rect x="${x + 28}" y="44" width="24" height="42" rx="5" fill="#2b3a42"/><rect x="${x + 31}" y="49" width="18" height="28" rx="2" fill="#9fd3f5"/>`;
    const hands = x => `<path d="M${x + 20} 84 H${x + 60}" stroke="#e9b994" stroke-width="10" stroke-linecap="round"/><path d="M${x + 40} 50 V78" stroke="#c8324c" stroke-width="3" marker-end="url(#${a})"/><path d="M${x + 40} 78 V50" stroke="#c8324c" stroke-width="3" marker-end="url(#${a})" opacity=".35"/>`;
    const aed = x => `<rect x="${x + 16}" y="44" width="48" height="40" rx="8" fill="#2f9e44"/><path d="M${x + 42} 50 L${x + 34} 66 H${x + 42} L${x + 36} 80 L${x + 50} 60 H${x + 42} Z" fill="#ffd43b"/>`;
    const look = x => `<circle cx="${x + 40}" cy="64" r="20" fill="#fde2e5"/><path d="M${x + 30} 64 h5 l3 -8 l4 14 l3 -6 h5" stroke="#c8324c" stroke-width="2.2" fill="none"/>`;
    return svg(360, 190, `<defs>${marker(a, '#c8324c')}</defs>
      ${step(1, 274, '#5b6b73', '#eef1f3', look(274), 'check', "response and breathing?")}${step(2, 184, '#1272a3', '#e8f3fb', phone(184), 'call', "call emergency services")}
      ${step(3, 94, '#c8324c', '#fdecef', hands(94), 'CPR', "chest compressions")}${step(4, 4, '#2f9e44', '#e7f9d8', aed(4), 'AED', "shock with a device")}
      ${f(180, 176, "In cardiac arrest every minute counts: push hard and fast in the centre of the chest", { size: 9.5, fill: '#4f5bd5', w: 700 })}`, "The chain of survival");
  };

  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* تپش — دنیای ۱: زبان قلب (پایه همه دنیاها)
 * پیش از ورود به ساختمان قلب، ضربان، رگ‌ها، بیماری‌ها و درمان، «دستور زبان» واژه‌های قلب و عروق را یاد می‌گیریم:
 * ریشه‌های قلب، رگ و بیماری؛ پسوندهای بیماری، تشخیص و درمان؛ پیشوندها؛ جمع و صفت؛ متخصصان و اختصارهای پرونده.
 * منابع: Medical Word Building فصل‌های Cardiovascular System و جدول‌های Word Parts پوشه پیوست.
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: "Language of the Heart", short: "tongue", sub: "Heart, vessel and disease roots, suffixes and prefixes, plurals and adjectives, specialists and chart abbreviations",
    color: '#4F5BD5', dark: '#3540A8', light: '#E3E6FB',
    levels: ["Heart and vessel roots", "Suffixes and prefixes", "Chart language"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: ریشه‌های قلب و رگ ================= */
      {
        id: 'lx1', title: "Heart roots", icon: '🫀', items: [
          L("Every word is a puzzle", `Heart and vessel words are built from a few <b>fixed parts</b>:<br>• <b>prefix</b> at the start: ${e('peri-')} = around<br>• <b>root</b> in the middle: ${e('cardi')} = heart<br>• <b>suffix</b> at the end: ${e('-itis')} = inflammation${fig('wordparts', '', "pericarditis: inflammation around the heart, i.e. inflammation of the pericardium.")}${memo("Read the meaning from the end: first the suffix (what happened?), then the prefix (where?) and finally the root (which organ?).")}`),
          L("Three roots for the heart", `${tbl([["root", "Meaning", "Example"], [e('cardi/o'), "heart", "cardiac: of the heart"], [e('coron/o'), "crown; heart", "coronary: of the heart’s crown-shaped arteries"], [e('my/o'), "muscle", "myocardium: heart muscle"]])}A root with the <b>connecting vowel o</b> is called a <b>combining form</b> and is written with a slash: ${e('cardi/o')}. If the suffix starts with a vowel, the o is dropped: ${wb('cardi/o', '-ac')} = cardiac.`),
          M(`${e('<b>cardiac</b>')} means…`, ["relating to the heart", "relating to vessels", "relating to the lungs", "relating to blood"], "cardi/o (heart) + -ac (relating to)."),
          P("Match each root to its meaning", [['cardi/o', "heart"], ['coron/o', "crown; heart"], ['my/o', "muscle"]]),
          L("Read from the end", `${wb('cardi/o', '-logy')} → “study of” + “heart” = <b>cardiology</b><br>${wb('cardi/o', '-logist')} → heart <b>specialist</b><br>${wb('my/o', 'cardi/o', '-um')} → “structure” + “muscle” + “heart” = <b>myocardium</b>, the heart muscle${pearl("In charts, “cardiovascular” is shortened to CV, as in “CV exam: normal”.")}`),
          O(`Arrange the parts of ${e('myocardium')} in writing order`, ['my/o', 'cardi/o', '-um'], "my/o (muscle) + cardi/o (heart) + -um (structure)."),
          T("coronary comes from a root meaning “crown”.", true, "The coronary arteries ring the heart like a crown."),
          B("In cardiologist, the suffix ___ means “specialist”.", ['-logist', '-logy', '-ac'], "-logy is the science and -logist the specialist in that science."),
          W("Build a word meaning “the study of the heart”", ['cardi/o', '-logy'], ['-logist', 'my/o', '-ac'], "cardi/o (heart) + -logy (study of) = cardiology."),
          S("Spell the term for a heart specialist", 'cardiologist', 'cardi/o + -logist.', 'cardio…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx2', title: "Vessel roots", icon: '🩸', items: [
          L("A vessel with three names", `There are three roots for “vessel”:${tbl([["root", "Meaning", "Example"], [e('angi/o'), "vessel", "angiography: imaging of vessels"], [e('vas/o'), "vessel; duct", "vasoconstriction: narrowing of a vessel"], [e('vascul/o'), "vessel", "vascular: of the vessels"]])}${memo("Remember angi/o through “angio”: the angiogram you may have heard of in hospital!")}`),
          L("Artery or vein?", `${tbl([["root", "Meaning", "Example"], [e("arteri/o, arter/o"), "vessel carrying blood from the heart", "arterial: of the arteries"], [e('arteriol/o'), "small artery", 'arteriole'], [e("ven/o, phleb/o"), "vessel carrying blood to the heart", "venous, phlebitis"], [e('aort/o'), "aorta", "aortic: of the aorta"]])}${vs(['artery', "carries blood away from the heart"], ['vein', "returns blood to the heart"])}${memo("Artery = Away from the heart: both start with A.")}`),
          M("Which root means “vein”?", ['phleb/o', 'arteri/o', 'angi/o', 'aort/o'], "phleb/o and ven/o both mean vein."),
          P("Match each root to its meaning", [['angi/o', "vessel"], ['arteri/o', "artery"], ['ven/o', "vein"], ['aort/o', "aorta"]]),
          T("Arteries carry blood away from the heart.", true, "Artery = Away; veins return blood to the heart."),
          M(`${e('<b>phlebitis</b>')} means…`, ["inflammation of a vein", "inflammation of an artery", "clot in the heart", "aortic narrowing"], "phleb/o (vein) + -itis (inflammation)."),
          B("In intravenous, the root ven/o means ___.", ["vein", "artery", "heart"], "intra- (within) + ven/o (vein) + -ous: within a vein."),
          W("Build a word meaning “relating to vessels”", ['vascul/o', '-ar'], ['angi/o', '-itis', 'phleb/o'], 'vascul/o + -ar = vascular.'),
          S("Spell the term for the body’s main artery", 'aorta', "aort/o; its adjective is aortic.", 'aor…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx3', title: "Disease roots", icon: '🧱', items: [
          L("A vessel that narrows and stiffens", `${tbl([["root", "Meaning", "Example"], [e('ather/o'), "fatty plaque", "atheroma: fatty mass"], [e('scler/o'), "hardening", 'arteriosclerosis'], [e('sten/o'), "narrowing", "stenosis: narrowing"], [e('isch/o'), "holding back", "ischemia: local lack of blood"]])}${vs(['arteri/o', "artery"], ['ather/o', "fatty plaque"])}${memo("Remember ather/o through its Greek origin, “porridge”: fatty plaque sticks to the vessel wall like thick porridge!")}`),
          M("Which root means “fatty plaque”?", ['ather/o', 'arteri/o', 'scler/o', 'sten/o'], "atherosclerosis = hardening of an artery with fatty plaque."),
          L("Clot, embolus, blueness and varicose veins", `${tbl([["root", "Meaning", "Example"], [e('thromb/o'), "clot", "thrombosis: clot formation"], [e('embol/o'), "plug, embolus", "embolism: blockage of a vessel"], [e('cyan/o'), "blue", "cyanosis: bluish discolouration"], [e('varic/o'), "dilated vein", "varicose: of swollen, twisted veins"]])}${pearl("cyanosis is blueness of the lips and nails and means the blood lacks enough oxygen; a sign never to ignore.")}`),
          P("Match each root to its meaning", [['thromb/o', "clot"], ['cyan/o', "blue"], ['scler/o', "hardening"], ['isch/o', "holding back"]]),
          T(`${e('cyanosis')} means bluish skin from lack of oxygen.`, true, "cyan/o (blue) + -osis (abnormal condition)."),
          M(`${e('<b>thrombosis</b>')} means…`, ["clot formation in a vessel", "widening of a blood vessel", "inflammation of the heart", "hardening of the arteries"], "thromb/o (clot) + -osis."),
          B("In ischemia, the root isch/o means ___.", ["holding back", "clot", "hardening"], "isch/o + -emia: “holding back blood”; local lack of blood."),
          W("Build a word meaning “mass of fatty plaque”", ['ather/o', '-oma'], ['thromb/o', '-itis', 'sten/o'], 'ather/o + -oma = atheroma.'),
          L("Review of the level “Heart and vessel roots”", recap(["heart: cardi/o, coron/o; muscle: my/o; myocardium means heart muscle", "vessel: angi/o, vas/o, vascul/o • artery: arteri/o • vein: ven/o and phleb/o • aorta: aort/o", "Artery carries blood Away from the heart; a vein returns blood to the heart", "disease: ather/o plaque • scler/o hardness • sten/o narrowing • thromb/o clot • embol/o plug • cyan/o blue"])),
          N('r2m:lx')
        ]
      },

      /* ================= سطح ۲: پسوندها و پیشوندها ================= */
      {
        id: 'lx4', title: "Disease suffixes", icon: '🩹', items: [
          L("What happened? The suffix tells you", `${tbl([["suffix", "Meaning", "Example"], [e('-megaly'), "enlargement", 'cardiomegaly'], [e('-stenosis'), "narrowing", 'aortostenosis'], [e('-sclerosis'), "hardening", 'arteriosclerosis'], [e('-itis'), "inflammation", 'endocarditis'], [e('-pathy'), "disease", 'cardiomyopathy'], [e('-emia'), "blood condition", 'ischemia']])}`),
          M(`${e('<b>cardiomegaly</b>')} means…`, ["enlarged heart", "inflammation of the heart", "hardening of the heart", "narrowing of a valve"], "cardi/o + -megaly (enlargement)."),
          P("Match each suffix to its meaning", [['-megaly', "enlargement"], ['-stenosis', "narrowing"], ['-sclerosis', "hardening"], ['-pathy', "disease"]]),
          L("Hardening or narrowing?", `${vs(['-sclerosis', "the wall becomes hard and inflexible"], ['-stenosis', "narrowing of a channel or valve"])}${wb('arteri/o', '-sclerosis')} → hardening of the arteries<br>${wb('aort/o', '-stenosis')} → narrowing of the aorta${memo("Stenosis = Strait (narrow); sclerosis = Stone-hard: one narrows, the other stiffens like stone.")}`),
          T("aortostenosis means hardening of the aorta.", false, "False; -stenosis is narrowing. Hardening is -sclerosis."),
          L("Two more suffixes", `• ${wb('vas/o', '-spasm')} → <b>vasospasm</b>: sudden tightening of a vessel; ${e('-spasm')} means a sudden involuntary contraction<br>• ${wb('cyan/o', '-osis')} → <b>cyanosis</b>: ${e('-osis')} means an abnormal condition${pearl("cardiomyopathy means the heart muscle itself is diseased (-pathy = disease); myocarditis is only its inflammation.")}`),
          M("Which word means “disease of the heart muscle”?", ['cardiomyopathy', 'myocarditis', 'cardiomegaly', 'cardiology'], 'cardi/o + my/o + -pathy.'),
          B("In vasospasm, the suffix ___ means “sudden contraction”.", ['-spasm', '-stenosis', '-osis'], 'vas/o + -spasm.'),
          W("Build a word meaning “inflammation of the inner lining of the heart”", ['endo-', 'cardi/o', '-itis'], ['peri-', '-pathy', 'my/o'], "endo- (within) + cardi/o + -itis = endocarditis."),
          S("Spell the term for enlargement of the heart", 'cardiomegaly', 'cardi/o + -megaly.', 'cardio…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx5', title: "Diagnostic and treatment suffixes", icon: '🔧', items: [
          L("Three recording suffixes", `${fig('gram-graph')}${tbl([["suffix", "Meaning", "Example"], [e('-gram'), "recording, tracing, image", 'electrocardiogram'], [e('-graph'), "recording machine", 'electrocardiograph'], [e('-graphy'), "process of recording", 'echocardiography']])}`),
          M("Which one is the ECG printout itself?", ['electrocardiogram', 'electrocardiograph', 'electrocardiography', 'cardiology'], "-gram means the result of recording."),
          L("Seeing and measuring", `• ${e('-scope')}: instrument for seeing or hearing; ${wb('steth/o', '-scope')} = stethoscope (steth/o = chest)<br>• ${e('-scopy')}: looking and examining; angioscopy = looking inside a vessel<br>• ${e('-meter')}: measuring instrument; ${wb('sphygm/o', 'man/o', '-meter')} = blood pressure gauge (sphygm/o = pulse, man/o = pressure)`),
          P("Match each suffix to its meaning", [['-scope', "instrument for seeing or hearing"], ['-meter', "measuring instrument"], ['-graphy', "process of recording"], ['-gram', "result of recording"]]),
          L("Removing, cutting or repairing?", `${tbl([["suffix", "Meaning", "Example"], [e('-ectomy'), "removal", 'endarterectomy'], [e('-tomy'), "incision", 'phlebotomy'], [e('-plasty'), "repair", 'angioplasty'], [e('-lysis'), "dissolving", 'thrombolysis'], [e('-centesis'), "drawing fluid with a needle", 'pericardiocentesis']])}${memo("-ectomy, think “ex-”: cutting out. -tomy is only a cut, and -plasty sounds like “plastic”: reshaping.")}`),
          M(`${e('<b>angioplasty</b>')} means…`, ["repair of a vessel", "removal of a vessel", "incision of a vessel", "imaging of a vessel"], "angi/o (vessel) + -plasty (repair)."),
          T("thrombolysis means dissolving a clot.", true, "thromb/o (clot) + -lysis (dissolving)."),
          B("In phlebotomy, the suffix ___ means “cutting”.", ['-tomy', '-ectomy', '-plasty'], "phleb/o + -tomy: cutting into a vein to draw blood."),
          W("Build a word meaning “recording images of vessels”", ['angi/o', '-graphy'], ['-gram', 'phleb/o', '-plasty'], 'angi/o + -graphy = angiography.'),
          S("Spell the term for the doctor’s listening instrument", 'stethoscope', 'steth/o + -scope.', 'stetho…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx6', title: "Prefixes", icon: '📍', items: [
          L("Slow or fast?", `${vs(['brady-', "slow: bradycardia, under 60 beats"], ['tachy-', "fast: tachycardia, over 100 beats"])}${fig('rate-strips')}${memo("Picture brady- as a dawdling brother and tachy- as a speeding taxi: one slow, the other fast!")}`),
          M(`${e('<b>bradycardia</b>')} means…`, ["slow beat", "fast heart rate", "irregular beat", "enlarged heart"], "brady- (slow) + -cardia (heart condition)."),
          L("Layers by prefix", `${tbl([["prefix", "Meaning", "Example"], [e('endo-'), "within", "endocardium: inner lining"], [e('epi-'), "on, over", "epicardium: outer layer"], [e('peri-'), "around", "pericardium: sac around the heart"], [e('inter-'), "between", "interventricular: between the two ventricles"], [e('intra-'), "within", "intravenous: within a vein"]])}`),
          P("Match each prefix to its meaning", [['endo-', "within"], ['epi-', "on, over"], ['peri-', "around"], ['inter-', "between"]]),
          L("Excess, low, without and against", `• ${e('hyper-')} excessive: hypertension, high blood pressure<br>• ${e('hypo-')} low: hypotension, low blood pressure<br>• ${e("a-, an-")} without: asystole, absence of contraction; arrhythmia, absence of rhythm<br>• ${e('anti-')} against: anticoagulant, preventing clotting<br>• ${e('de-')} removal: defibrillation, stopping fibrillation${pearl("In arrhythmia, the prefix a- and the root rrhythm (rhythm) give a double r: a + rrhythm + ia.")}`),
          M("Which word means “high blood pressure”?", ['hypertension', 'hypotension', 'hyperlipidemia', 'tachycardia'], "hyper- (excessive) + -tension (pressure)."),
          T("interventricular means “within a ventricle”.", false, "False; inter- means between. “Within” is intra-."),
          B("The prefix ___ in anticoagulant means “against”.", ['anti-', 'a-', 'de-'], "anti- = against; an anticoagulant prevents blood clotting."),
          L("Review of the level “Suffixes and prefixes”", recap(["disease: -megaly enlargement • -stenosis narrowing • -sclerosis hardening • -itis inflammation • -pathy disease • -emia blood condition", "recording: -gram tracing • -graph device • -graphy process; -scope viewing instrument and -meter measuring instrument", "treatment: -ectomy removal • -tomy cutting • -plasty repair • -lysis dissolving • -centesis drawing off fluid", "prefix: brady- slow • tachy- fast • endo-, epi-, peri- for layers • inter- between • hyper- and hypo- • anti- against"])),
          N('m2r:lx')
        ]
      },

      /* ================= سطح ۳: زبان پرونده ================= */
      {
        id: 'lx7', title: "Singular, plural and adjective", icon: '📚', items: [
          L("Plurals that don’t take an s", `Latin and Greek heart and vessel words form their plurals by their own rules:${fig('plurals')}${memo("“US” goes, “I” comes: thrombus → thrombi. “UM” goes, “A” comes: atrium → atria.")}`),
          M("What is the plural of atrium?", ['atria', 'atriums', 'atrii', 'atriae'], '‎-um → ‎-a.'),
          P("Match each singular to its plural", [['thrombus', 'thrombi'], ['septum', 'septa'], ['stenosis', 'stenoses'], ['varix', 'varices']]),
          L("Common adjectives", `${tbl([["Noun", "Adjective", "Meaning of the adjective"], ['atrium', 'atrial', "pertaining to an atrium"], ['ventricle', 'ventricular', "pertaining to a ventricle"], ['valve', 'valvular', "pertaining to a valve"], ['vein', 'venous', "of the veins"], ['artery', 'arterial', "of the arteries"], ['septum', 'septal', "of the dividing wall"]])}${pearl("In a chart, “atrial fibrillation” means quivering of the atria and “ventricular septal defect” means a defect in the wall between the ventricles.")}`),
          M(`What is the adjective of ${e('vein')}?`, ['venous', 'veinal', 'venular', 'veinous'], 'ven/o + -ous = venous.'),
          T("The plural of embolus is emboli.", true, '‎-us → ‎-i.'),
          B("The plural of vena cava is venae ___.", ['cavae', 'cavas', 'cavi'], '‎-a → ‎-ae.'),
          W("Build a word meaning “relating to a valve”", ['valvul/o', '-ar'], ['valv/o', '-itis', 'ven/o'], 'valvul/o + -ar = valvular.'),
          S("Spell the plural term for the upper heart chambers", 'atria', "Singular: atrium.", 'atr…'),
          N('sp:lx')
        ]
      },
      {
        id: 'lx8', title: "Heart specialists", icon: '👩‍⚕️', items: [
          L("The heart team", `${tbl([["Title", "Job"], ['cardiologist', "diagnosing and treating heart disease in adults"], ['pediatric cardiologist', "hearts of newborns, children and teenagers"], ['cardiac surgeon', "heart surgery: bypass, valve replacement, transplant"], ['electrophysiologist', "heart rhythm and electrics; treating arrhythmias"], ['cardiac sonographer', "performing echocardiography"], ['cardiovascular technologist', "ECGs, exercise tests, assisting in catheterisation"], ['perfusionist', "running the heart-lung machine during surgery"]])}`),
          M("Which specialist sees an 8-year-old with congenital heart disease?", ['pediatric cardiologist', 'cardiac surgeon', 'perfusionist', 'cardiac sonographer'], "pediatric = children."),
          P("Match each title to its job", [['cardiac surgeon', "bypass surgery"], ['perfusionist', "heart-lung machine"], ['cardiac sonographer', "heart echo"], ['electrophysiologist', "arrhythmia treatment"]]),
          L("Roots: the secret of the titles", `• ${wb('cardi/o', '-logist')} → heart specialist<br>• ${wb('electr/o', '-logist')} and physi/o → electrophysiologist: specialist in the heart’s “electricity and function”<br>• ${e('son/o')} = sound → sonographer: someone who makes images with sound waves${pearl("The cardiac intensive care unit is called the CCU: coronary care unit; heart attack patients are admitted there.")}`),
          M("The abbreviation CCU means…", ["cardiac intensive care unit", "congestive heart failure", "coronary artery disease", "cardiac operating theatre"], 'coronary care unit.'),
          T("In open-heart surgery, the perfusionist runs the heart-lung machine.", true, "perfusion = blood supply to tissues."),
          B("In sonographer, the root son/o means ___.", ["sound", "image", "heart"], "son/o = sound; sonography uses sound waves."),
          M("Which specialist performs pacemaker implantation and ablation for arrhythmia?", ['electrophysiologist', 'cardiac sonographer', 'perfusionist', 'pediatric cardiologist'], "The heart’s electrical specialist."),
          S("Spell the term for the study of the heart", 'cardiology', 'cardi/o + -logy.', 'cardi…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx9', title: "Chart abbreviations", icon: '📋', items: [
          L("Charts are written in abbreviations", `${tbl([["abbreviation", "Full form", "Meaning"], ['CP', 'chest pain', "chest pain"], ['SOB', 'shortness of breath', "shortness of breath"], ['DOE', 'dyspnea on exertion', "shortness of breath on exertion"], ['HTN', 'hypertension', "high blood pressure"], ['BP', 'blood pressure', "blood pressure"], ['HR', 'heart rate', "heart rate"], ['bpm', 'beats per minute', "beats per minute"], ['mmHg', 'millimeters of mercury', "millimetres of mercury"]])}`),
          M("The chart says “c/o CP and SOB”. What is the patient’s complaint?", ["chest pain and shortness of breath", "cough and fever", "high blood pressure and dizziness", "palpitations and fainting"], "CP = chest pain; SOB = shortness of breath."),
          P("Match each abbreviation to its meaning", [['HTN', "high blood pressure"], ['HR', "heart rate"], ['DOE', "shortness of breath on exertion"], ['bpm', "beats per minute"]]),
          L("A real note", `A 56-year-old man with a history of <b>HTN</b> complains of <b>CP</b> when climbing stairs and of <b>SOB</b>. His <b>BP</b> is 180/110 <b>mmHg</b> and his <b>HR</b> is 110 <b>bpm</b>. An <b>ECG</b> is taken in the emergency department and he is admitted to the <b>CCU</b>.${pearl("The unit of blood pressure is mmHg: pressure used to be measured by the height of a column of mercury. Hg is the chemical symbol for mercury.")}`),
          M("In this note, HR 110 bpm means…", ["fast heartbeat (tachycardia)", "slow heartbeat (bradycardia)", "normal pressure", "fast breathing"], "More than 100 beats per minute.", [["Patient", "56-year-old man"], ["history of", 'HTN'], ['BP', '180/110 mmHg'], ['HR', '110 bpm']]),
          T("mmHg is the unit for measuring blood pressure.", true, 'millimeters of mercury.'),
          B("ECG and EKG both mean a tracing of the ___.", ["heart", "brain", "lung"], 'electrocardiogram.'),
          M("“IV fluids” means fluid given by which route?", ["into the vein", "under the tongue", "into the muscle", "by mouth"], 'IV = intravenous.'),
          L("Review of the level “Chart language”", recap(["plural: -um → -a (atria, septa) • -us → -i (thrombi, emboli) • -is → -es (stenoses) • -ix → -ices (varices)", "adjectives: atrial, ventricular, valvular, venous, arterial, septal, coronary, vascular", "heart team: cardiologist, pediatric cardiologist, cardiac surgeon, electrophysiologist, sonographer, perfusionist", "chart: CP, SOB, DOE, HTN, BP, HR, bpm, mmHg, IV, CCU, ECG"])),
          N('ab:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* تپش — دنیای ۲: ساختمان قلب
 * از جای قلب در قفسه سینه شروع می‌کنیم، لایه‌های دیواره و پریکارد را می‌شناسیم، بعد به چهار حفره و چهار دریچه می‌رسیم
 * و در پایان مسیر خون از بزرگ‌سیاهرگ‌ها تا آئورت و سرخرگ‌های کرونر را دنبال می‌کنیم.
 * قرارداد شکل‌ها: نمای روبه‌رو؛ سمت راستِ بیمار در سمت چپِ بیننده است (نیمه آبی قلب سمت چپ تصویر).
 * منابع: فصل‌های Cardiovascular System در Medical Word Building و The Heart of the Matter. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'an', sym: 'Ana', name: "Heart structure", short: "Structure", sub: "The heart’s position, wall layers and pericardium, four chambers and four valves, great vessels, blood flow and coronary arteries",
    color: '#E03131', dark: '#A61E1E', light: '#FDE4E4',
    levels: ["Position and wall of the heart", "Chambers and valves", "Blood flow and coronaries"],
    gens: EA.genIds('an'),
    lessons: [
      /* ================= سطح ۱: جا و دیواره قلب ================= */
      {
        id: 'an1', title: "Where is the heart?", icon: '📍', items: [
          L("A fist-sized pump", `The heart is a <b>muscular pump</b> the size of a closed fist that beats about 100,000 times a day.<br>It sits in the <b>mediastinum</b>: the space between the two lungs, behind the breastbone (sternum) and above the diaphragm (the sheet between chest and abdomen).${fig('heart-chest')}${memo("Read mediastinum as “middle column”: media means middle; it is the central column of the chest where the heart sits.")}`),
          M("In which space of the chest does the heart lie?", ['mediastinum', 'pleural cavity', 'abdominal cavity', 'pericardial cavity'], "The mediastinum is the space between the two lungs."),
          L("Apex to the left", `The heart sits slightly tilted: <b>two thirds</b> of it lies left of the body’s midline, and its lower tip, the <b>apex</b>, points down and to the left. The broad upper part is called the <b>base</b>; the great vessels enter and leave here.${fig('heart-location', '', "The heart in the mediastinum, between the two lungs and above the diaphragm. The apex is low and on the left.")}${pearl("The doctor hears the apex beat with a stethoscope in the left fifth intercostal space; this is called the apical pulse.")}`),
          T("The apex of the heart points to the right side of the body.", false, "False; the apex points down and to the left.", F('heart-location')),
          P("Match each term to its meaning", [['mediastinum', "space between the lungs"], ['apex', "tip of the heart"], ['sternum', "breastbone"], ['diaphragm', "the sheet between chest and abdomen"]]),
          M("On which side of the body’s midline does most of the heart lie?", ["left", "right", "exactly in the middle", "behind the spine"], "About two thirds of the heart is on the left."),
          B("The great vessels enter and leave the heart at its ___.", ["base", "apex", "wall between the ventricles"], "The base is the broad upper part of the heart."),
          T("The mediastinum lies between the two lungs.", true, "medi- means middle; the heart, trachea and oesophagus lie in this space."),
          S("Spell the term for the tip of the heart", 'apex', "apical pulse means the pulse at the tip of the heart.", 'ap…'),
          N('t2f:an')
        ]
      },
      {
        id: 'an2', title: "Three wall layers", icon: '🧱', items: [
          L("The heart wall has three layers", `From inside to outside:${tbl([["Layer", "Word structure", "Feature"], [e('endocardium'), 'endo- + cardi/o', "thin, smooth lining of the chambers and valves"], [e('myocardium'), 'my/o + cardi/o', "heart muscle; the thickest layer"], [e('epicardium'), 'epi- + cardi/o', "outer layer; on top of the muscle"]])}${fig('heart-wall', '', "The myocardium lies between the endocardium (inside) and the epicardium (outside).")}`),
          M("Which layer is the heart muscle?", ['myocardium', 'endocardium', 'epicardium', 'pericardium'], "my/o means muscle."),
          L("The prefix tells you where the layer is", `${wb('endo-', 'cardi/o', '-um')} → inside the heart<br>${wb('my/o', 'cardi/o', '-um')} → heart muscle<br>${wb('epi-', 'cardi/o', '-um')} → on the heart${fig('wall-layers')}${memo("From inside to outside: “endo, myo, epi”, like “entrance, middle, exterior”. The initials run E, M, then E again!")}`),
          O("Order the heart wall layers from inside to outside", ['endocardium', 'myocardium', 'epicardium'], "endo- within, my/o muscle, epi- upon."),
          P("Match each layer to its feature", [['endocardium', "smooth lining inside the chambers"], ['myocardium', "thick muscular layer"], ['epicardium', "outer layer over the muscle"]]),
          L("When the layers become diseased", `${vs(['endocarditis', "inflammation of the inner lining; often involves the valves"], ['myocarditis', "inflammation of the heart muscle; often after a viral infection"])}${fig('heart-layers', '', "endocardium and myocardium; the epicardium is the visceral layer of the pericardium.")}${pearl("Endocarditis is usually microbial and forms small masses (vegetations) on the valves; that is why patients with valve disease sometimes take antibiotics before a tooth extraction.")}`),
          T("Endocarditis is inflammation of the outer layer of the heart.", false, "False; endo- means within. It is inflammation of the inner lining."),
          B("In myocardium, the root ___ means “muscle”.", ['my/o', 'cardi/o', 'endo-'], "my/o = muscle."),
          W("Build a word meaning “the outer layer of the heart”", ['epi-', 'cardi/o', '-um'], ['endo-', 'my/o', '-itis'], "epi- (upon) + cardi/o + -um = epicardium."),
          S("Spell the term for the heart’s muscle layer", 'myocardium', 'my/o + cardi/o + -um.', 'myo…'),
          N('f2t:an')
        ]
      },
      {
        id: 'an3', title: "The sac around the heart", icon: '👜', items: [
          L("pericardium: a two-layered sac", `The heart lies inside a sac called the <b>pericardium</b> (peri- = around):<br>• <b>fibrous pericardium</b>: tough, fibrous outer layer<br>• <b>parietal pericardium</b>: the wall layer; inner surface of the sac<br>• <b>visceral pericardium</b>: the layer attached to the heart itself, i.e. the epicardium${fig('pericardium', '', "Like a fist pushed into a balloon: the heart sinks into the pericardium, which forms two layers around it.")}`),
          M("The visceral pericardium is the same as which layer?", ['epicardium', 'endocardium', 'myocardium', 'fibrous pericardium'], "The layer attached to the heart is the epicardium."),
          L("Pericardial cavity and fluid", `Between the parietal and visceral layers is a narrow space called the <b>pericardial cavity</b>. It holds a few millilitres of <b>pericardial fluid</b> so the heart glides without friction as it beats.${vs(['parietal', "parietal: wall of the sac"], ['visceral', "visceral: attached to the organ itself"])}${memo("Link parietal with “wall” (Latin paries) and visceral with the “viscera” (internal organs).")}`),
          P("Match each part to its description", [['fibrous pericardium', "tough outer layer"], ['parietal pericardium', "wall layer"], ['visceral pericardium', "layer attached to the heart"], ['pericardial fluid', "slippery fluid between the layers"]]),
          T("Pericardial fluid reduces friction between the layers.", true, "The heart glides friction-free in its sac."),
          L("When the sac fills up", `• <b>pericarditis</b>: inflammation of the pericardium; sharp chest pain that eases on leaning forward<br>• <b>cardiac tamponade</b>: fluid or blood collecting in the pericardial cavity, squeezing the heart so it cannot fill<br>• urgent treatment: <b>pericardiocentesis</b>, drawing off the fluid with a needle (-centesis)${pearl("In tamponade the heart sounds are distant and muffled, because fluid lies between the heart and the stethoscope.")}`),
          M("What is drawing fluid out of the pericardial cavity with a needle called?", ['pericardiocentesis', 'pericarditis', 'pericardiectomy', 'cardiac tamponade'], 'pericardi/o + -centesis.'),
          B("Squeezing of the heart by fluid in the pericardial cavity is called ___.", ['cardiac tamponade', 'cardiac arrest', 'cardiac output'], "tamponade means compression by a “plug” of fluid."),
          W("Build a word meaning “inflammation around the heart”", ['peri-', 'cardi/o', '-itis'], ['endo-', '-centesis', 'my/o'], 'peri- + cardi/o + -itis = pericarditis.'),
          L("Review of the level “Position and wall of the heart”", recap(["The heart is in the mediastinum; two thirds on the left, apex down and to the left", "Wall from inside to outside: endocardium → myocardium → epicardium", "pericardium: fibrous layer, parietal layer and visceral layer (the epicardium)", "the pericardial cavity and its fluid; pericarditis, cardiac tamponade and pericardiocentesis"])),
          N('t2f:an')
        ]
      },

      /* ================= سطح ۲: حفره‌ها و دریچه‌ها ================= */
      {
        id: 'an4', title: "Four chambers", icon: '🏠', items: [
          L("A house with four rooms", `The heart has four chambers:<br>• two <b>atria</b> (singular: atrium) at the top, which <b>receive</b> blood<br>• two <b>ventricles</b> at the bottom, which <b>pump blood out</b>${fig('chambers')}${memo("atrium means “entrance hall”: blood first enters the hall, then moves on to the main room (ventricle).")}`),
          M("Which chambers pump blood out of the heart?", ['ventricles', 'atria', 'septa', 'auricles'], "The ventricles are the main pumps."),
          L("The dividing wall and abbreviations", `The <b>septum</b> (dividing wall) splits the heart into right and left halves:<br>• <b>interatrial septum</b>: between the two atria<br>• <b>interventricular septum</b>: between the two ventricles${fig('chambers-book', '', "RA and RV are on the patient’s right (left of the picture); LA and LV on the patient’s left. The septum lies between them.")}${tbl([["abbreviation", "Meaning"], ['RA', "right atrium: right upper chamber"], ['RV', "right ventricle: right lower chamber"], ['LA', "left atrium: left upper chamber"], ['LV', "left ventricle: left lower chamber"]])}`),
          P("Match each abbreviation to its chamber", [['RA', "right atrium"], ['RV', "right ventricle"], ['LA', "left atrium"], ['LV', "left ventricle"]]),
          T("The interventricular septum lies between the two atria.", false, "False; it lies between the two ventricles. Between the atria is the interatrial septum."),
          L("Why is the left ventricle thicker?", `${vs(['right ventricle', "sends blood only to the lungs; thinner wall"], ['left ventricle', "sends blood to the whole body; thickest wall"])}${fig('heart-exterior', '', "Outside view: the right atrium and right ventricle are on the patient’s right; the left ventricle forms much of the apex.")}${pearl("In long-standing high blood pressure the left ventricle thickens to overcome the pressure: left ventricular hypertrophy, or LVH, seen on the ECG and echo.")}`),
          M("Which chamber has the thickest muscular wall?", ['left ventricle', 'right ventricle', 'left atrium', 'right atrium'], "The LV pumps blood to the whole body."),
          B("The plural of atrium is ___.", ['atria', 'atriums', 'atrii'], '‎-um → ‎-a.'),
          M("In this picture, what is the chamber labelled LV?", ['left ventricle', 'left atrium', 'right ventricle', 'pulmonary artery'], "LV = left ventricle; on the right of the picture, i.e. the patient’s left.", null, F('chambers-book')),
          S("Spell the term for a lower heart chamber", 'ventricle', "Adjective: ventricular.", 'ventr…'),
          N('f2t:an')
        ]
      },
      {
        id: 'an5', title: "Four valves", icon: '🚪', items: [
          L("One-way doors", `Four <b>valves</b> stop blood flowing backwards:<br>• two <b>atrioventricular (AV)</b> valves between atrium and ventricle: the <b>tricuspid</b> on the right and the <b>mitral</b> on the left<br>• two <b>semilunar</b> (crescent) valves at the ventricle outlets: the <b>pulmonary</b> and the <b>aortic</b>${fig('valves4')}`),
          M("Which valve lies between the left atrium and left ventricle?", ['mitral valve', 'tricuspid valve', 'aortic valve', 'pulmonary valve'], "The mitral, or bicuspid, on the left."),
          L("The names come from the valves’ shapes", `• <b>tricuspid</b>: three cusps (flaps); tri- means three<br>• <b>mitral</b> or <b>bicuspid</b>: two cusps; shaped like a bishop’s hat (mitre)<br>• <b>semilunar</b>: crescent-shaped cusps; semi- (half) + lunar (moon)${fig('valves-top', '', "Valves seen from above: pulmonary and aortic in front, mitral and tricuspid behind.")}${memo("“Right has three”: the tricuspid, with three cusps, is on the right. And “Tri before Mi”: blood passes the tricuspid first, then the mitral.")}`),
          P("Match each valve to its position", [['tricuspid', "between RA and RV"], ['mitral', "between LA and LV"], ['pulmonary', "RV outlet"], ['aortic', "LV outlet"]]),
          T("The mitral valve has three cusps.", false, "False; the mitral has two cusps (bicuspid). The tricuspid has three."),
          L("Cords and small muscles", `The cusps of the AV valves are tied by thin cords called <b>chordae tendineae</b> to the <b>papillary muscles</b> of the ventricle wall; when the ventricle contracts, these cords stop the cusps flipping back into the atrium.${fig('valve-types', '', "A: semilunar valves with crescent cusps; B: AV valves with chordae tendineae.")}${pearl("The first heart sound (lubb) comes from the AV valves closing and the second (dupp) from the semilunar valves closing. An extra sound between them is called a murmur.")}`),
          M("What are the cords tying the AV valve cusps to the ventricle wall called?", ['chordae tendineae', 'papillary muscles', 'Purkinje fibers', 'trabeculae'], "chordae = cords; tendineae = tendinous."),
          O("Order the valves as blood passes through them", ['tricuspid', 'pulmonary', 'mitral', 'aortic'], "Right half: tricuspid and pulmonary; left half: mitral and aortic."),
          B("The second heart sound (dupp) comes from closure of the ___ valves.", ['semilunar', 'atrioventricular', "tricuspid and mitral"], "Aortic and pulmonary."),
          S("Spell the term for the three-cusped valve", 'tricuspid', "tri- (three) + cusp (flap).", 'tri…'),
          N('d2t:an')
        ]
      },
      {
        id: 'an6', title: "Inside the heart", icon: '🔍', items: [
          L("See it all together", `Now see the chambers, valves and layers together in one complete section:${fig('heart-interior', '', "Front section: the chambers, four valves and three wall layers in one picture.")}${tbl([["Step", "Right half (blue)", "Left half (red)"], ["1", 'superior vena cava', 'pulmonary veins'], ["2", 'right atrium', 'left atrium'], ["3", 'tricuspid valve', 'mitral valve'], ["4", 'right ventricle', 'left ventricle'], ["5", 'pulmonary valve', 'aortic valve']])}`),
          M("In this picture, which valve lies between the right atrium and right ventricle?", ['tricuspid valve', 'mitral valve', 'pulmonary valve', 'aortic valve'], "The right AV valve.", null, F('heart-interior')),
          L("More detail", `${fig('heart-anatomy', '', "Details inside the heart: chordae tendineae, papillary muscles, coronary sinus and interventricular septum.")}• <b>coronary sinus</b>: a vein that collects blood from the heart muscle itself and empties it into the right atrium<br>• <b>atrioventricular canal</b>: the opening between atrium and ventricle that holds the AV valve`),
          P("Match each structure to its job", [['coronary sinus', "collects blood from the heart muscle"], ['papillary muscles', "pulls on the chordae tendineae"], ['interventricular septum', "separates the two ventricles"], ['semilunar valve', "ventricle outlet valve"]]),
          T("The coronary sinus returns blood to the right atrium.", true, "Oxygen-poor blood from the heart muscle reaches the RA this way."),
          M("Which layer in the picture lines the chambers from inside?", ['endocardium', 'myocardium', 'pericardium', 'epicardium'], "endo- = within.", null, F('heart-interior')),
          B("The aortic and pulmonary valves are both ___ valves.", ['semilunar', 'atrioventricular', 'bicuspid'], "They have crescent-shaped cusps."),
          T("The mitral valve is also called the bicuspid valve.", true, "bi- = two; two cusps."),
          L("Review of the level “Chambers and valves”", recap(["Two atria (receive) on top, two ventricles (pump) below; RA, RV, LA and LV", "septum: interatrial between the atria and interventricular between the ventricles; the LV has the thickest wall", "AV valves: tricuspid (right, three cusps) and mitral or bicuspid (left, two cusps), with chordae tendineae and papillary muscles", "semilunar valves: pulmonary and aortic; lubb = AV closure and dupp = semilunar closure"])),
          N('f2t:an')
        ]
      },

      /* ================= سطح ۳: مسیر خون و کرونرها ================= */
      {
        id: 'an7', title: "Great vessels", icon: '🛣️', items: [
          L("Vessels arriving at the heart", `• <b>superior vena cava</b> (SVC): brings oxygen-poor blood from the head and arms to the right atrium<br>• <b>inferior vena cava</b> (IVC): brings oxygen-poor blood from the trunk and legs to the right atrium<br>• <b>pulmonary veins</b>: bring oxygen-rich blood from the lungs to the left atrium${fig('blood-flow', '', "Blue: oxygen-poor (deoxygenated) blood; red: oxygen-rich (oxygenated) blood.")}`),
          M("Through which vessel does oxygen-poor blood from the legs return to the heart?", ['inferior vena cava', 'superior vena cava', 'pulmonary vein', 'aorta'], "inferior = lower."),
          L("Vessels leaving the heart", `• The <b>pulmonary trunk</b> leaves the right ventricle and divides into the left and right <b>pulmonary artery</b>, which go to the lungs<br>• The <b>aorta</b> leaves the left ventricle and has three parts: the <b>ascending aorta</b>, then the <b>aortic arch</b> and finally the <b>descending aorta</b>${fig('great-vessels', '', "The great vessels from the front; branches of the aortic arch go to the head and arms.")}`),
          P("Match each vessel to its job", [['superior vena cava', "blood from head and arms to the RA"], ['pulmonary artery', "oxygen-poor blood to the lungs"], ['pulmonary vein', "oxygen-rich blood to the LA"], ['aorta', "oxygen-rich blood to the body"]]),
          L("An important exception", `The simple rule is: an <b>artery</b> carries blood away from the heart and a <b>vein</b> returns it; it does not mean an artery always carries oxygen-rich blood.${vs(['pulmonary artery', "an artery, yet it carries oxygen-poor blood"], ['pulmonary vein', "a vein, yet it brings oxygen-rich blood"])}${memo("Direction of flow names the vessel, not the colour of the blood: away from the heart = artery.")}`),
          T("The pulmonary artery carries oxygen-rich blood to the body.", false, "False; it carries oxygen-poor blood to the lungs."),
          O("Order the parts of the aorta in the direction of blood flow", ['ascending aorta', 'aortic arch', 'descending aorta'], "Ascending, arch, descending."),
          B("Oxygen-rich blood from the lungs reaches the left atrium through the ___.", ['pulmonary veins', 'pulmonary arteries', 'pulmonary trunk'], 'pulmonary veins.'),
          S("Spell the term for the great vein (without superior or inferior)", 'vena cava', "Plural: venae cavae.", 'vena…'),
          N('sp:an')
        ]
      },
      {
        id: 'an8', title: "The path of blood", icon: '🔄', items: [
          L("One full circuit", `Blood moves in a loop and passes through the heart <b>twice</b> on each circuit: once through the right half to the lungs and once through the left half to the body.${fig('flow-loop')}${memo("“Right to the lungs, left to the lot”: the right half of the heart sends blood to the lungs and the left half to the whole body.")}`),
          O("Order the path of blood through the right half of the heart", ['vena cava', 'right atrium', 'tricuspid valve', 'right ventricle', 'pulmonary artery'], "From the body to the lungs."),
          L("Number by number", `${fig('flow-steps', '', "1 right atrium, 2 tricuspid valve, 3 right ventricle and pulmonary valve; 4 left atrium, 5 mitral valve, 6 left ventricle and aortic valve.")}${tbl([["Step", "Right half: body to lungs", "Left half: lungs to body"], ["1", 'venae cavae', 'pulmonary veins'], ["2", 'right atrium', 'left atrium'], ["3", 'tricuspid valve', 'mitral valve'], ["4", 'right ventricle', 'left ventricle'], ["5", 'pulmonary valve', 'aortic valve'], ["6", 'pulmonary artery', 'aorta']])}`),
          O("Order the path of blood through the left half of the heart", ['pulmonary veins', 'left atrium', 'mitral valve', 'left ventricle', 'aorta'], "From the lungs to the body."),
          L("Picture quiz", `In the figure below, the numbers show the path of blood. Before the questions, find each number using the list below:${fig('flow-quiz')}${tbl([["Number", "Structure"], ["1", 'venae cavae'], ["2 and 4", "right atrium and right ventricle"], ["3 and 5", "tricuspid and pulmonary valve"], ["6 and 7", "pulmonary arteries and pulmonary veins"], ["8 and 10", "left atrium and left ventricle"], ["9 and 11", "mitral and aortic valve"], ["12", 'aorta']])}`),
          M("In this figure, what is number (4)?", ['right ventricle', 'right atrium', 'left ventricle', 'pulmonary artery'], "Number 4 is the right ventricle; it receives blood through the tricuspid (3).", null, F('flow-quiz')),
          M("In this figure, what is number (7)?", ['pulmonary veins', 'pulmonary arteries', 'venae cavae', 'aorta'], "Red arrows towards the heart: oxygen-rich blood from the lungs to the left atrium.", null, F('flow-quiz')),
          M("In this figure, what is number (10)?", ['left ventricle', 'left atrium', 'right ventricle', 'aorta'], "The left ventricle, with its thick wall.", null, F('flow-quiz')),
          T("On each full circuit, blood passes through the heart twice.", true, "Once in the pulmonary circulation and once in the systemic circulation."),
          N('f2t:an')
        ]
      },
      {
        id: 'an9', title: "The coronary arteries", icon: '👑', items: [
          L("The heart needs blood too", `The myocardium is not fed by the blood inside the chambers; two <b>coronary arteries</b> branch off right at the start of the aorta and ring the heart like a crown:${fig('coronary-map')}${tbl([["artery", "abbreviation", "Main blood supply"], ['right coronary artery', 'RCA', "right and lower part of the heart"], ['left coronary artery', 'LCA', "short trunk that splits in two"], ['left anterior descending', 'LAD', "front of the left ventricle and the septum"], ['circumflex artery', 'Cx', "back and side of the left ventricle"]])}`),
          M("Which branch of the left coronary artery runs down the front of the heart?", ['left anterior descending', 'circumflex artery', 'right coronary artery', 'coronary sinus'], "anterior = front, descending = running down."),
          L("In a real image", `${fig('coronary', '', "The right coronary artery, the left coronary artery and the left anterior descending branch on the surface of the heart.")}Oxygen-poor blood from the heart muscle collects in the cardiac veins and drains through the <b>coronary sinus</b> into the right atrium.${pearl("At the bedside the LAD is called the “widow maker”: a blockage at its start leaves much of the left ventricle without blood and causes a severe heart attack.")}`),
          P("Match each abbreviation to its name", [['RCA', 'right coronary artery'], ['LAD', 'left anterior descending'], ['LCA', 'left coronary artery'], ['Cx', 'circumflex artery']]),
          T("The coronary arteries branch off the start of the aorta.", true, "Just above the aortic valve."),
          M("In this picture, which artery runs over the front of the heart towards the apex?", ['left anterior descending', 'right coronary artery', 'superior vena cava', 'pulmonary trunk'], "The front descending branch of the LCA.", null, F('coronary')),
          B("The root coron/o in coronary means ___.", ["crown", "heart", "vessel"], "These arteries encircle the heart like a crown."),
          W("Build a word meaning “relating to the heart’s crown (coronary)”", ['coron/o', '-ary'], ['cardi/o', '-itis', 'angi/o'], 'coron/o + -ary = coronary.'),
          L("Review of the level “Blood flow and coronaries”", recap(["The SVC and IVC bring oxygen-poor blood to the RA; the pulmonary veins bring oxygen-rich blood to the LA", "pulmonary trunk from the RV to the lungs; aorta from the LV: ascending, arch and descending", "Right half: vena cava → RA → tricuspid → RV → pulmonary valve → lungs", "Left half: pulmonary veins → LA → mitral → LV → aortic valve → aorta", "coronaries: RCA and LCA; the LCA has two branches, the LAD and the circumflex; the coronary sinus drains into the RA"])),
          N('t2f:an')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* تپش — دنیای ۳: ضربان و نوار قلب
 * سیستم هدایت الکتریکی (از گره سینوسی تا رشته‌های پورکنژ)، چرخه قلب، خواندن موج‌ها و کاغذ نوار قلب،
 * ریتم سینوسی، فشار خون، نبض و صداهای قلب و ابزارهای پایش ضربان.
 * اعداد بالینی (مقادیر طبیعی، کاغذ نوار) مطابق منابع درسی پوشه پیوست است. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ep', sym: 'ECG', name: "Heartbeat and ECG", short: "Beat", sub: "The conduction system, the cardiac cycle, ECG waves and paper, rhythm, blood pressure, pulse and heart monitoring",
    color: '#F08C00', dark: '#B35F00', light: '#FFF0DB',
    levels: ["The heart’s electricity", "heart tracing (ECG)", "Pressure, pulse and monitoring"],
    gens: EA.genIds('ep'),
    lessons: [
      /* ================= سطح ۱: برق قلب ================= */
      {
        id: 'ep1', title: "The natural pacemaker", icon: '⚡', items: [
          L("The heart makes its own electricity", `Every beat starts with an <b>electrical signal</b> made by the heart itself; that is why a transplanted heart beats even without nerves. The signal travels along a fixed route called the <b>conduction system</b>.${fig('conduction-path')}`),
          L("Five stations", `${tbl([["Station", "Location", "Job"], [e('SA node'), "wall of the right atrium", "natural pacemaker; 60 to 100 times a minute"], [e('AV node'), "lower right atrium", "a short pause so the ventricles can fill"], [e('bundle of His'), "top of the septum", "bridge between atria and ventricles"], [e('bundle branches'), "both sides of the septum", "right and left branches"], [e('Purkinje fibers'), "walls of the ventricles", "spread the signal and contract the ventricles"]])}${memo("Read the order SA → AV → His → branches → Purkinje as “Swift Arrows Hit Big Pumpkins!”")}`),
          M("What is the heart’s natural pacemaker?", ['SA node', 'AV node', 'bundle of His', 'Purkinje fibers'], "The sinoatrial node in the wall of the right atrium."),
          O("Order the path of the heart’s electrical signal", ['SA node', 'AV node', 'bundle of His', 'bundle branches', 'Purkinje fibers'], "From the atria to the ventricles."),
          L("Break the names apart", `• ${e('sinoatrial')} = sinus (cavity, sinus) + atri/o (atrium) + -al<br>• ${e('atrioventricular')} = atri/o (atrium) + ventricul/o (ventricle) + -ar, i.e. between atrium and ventricle${fig('conduction', '', "The SA node at the top of the right atrium and the AV node at its bottom; the bundle of His splits into two branches and then reaches the Purkinje fibers.")}`),
          P("Match each station to its job", [['SA node', "starting the beat"], ['AV node', "pause before the ventricles"], ['bundle branches', "right and left branches"], ['Purkinje fibers', "spreading the signal through the ventricles"]]),
          T("The AV node holds the signal briefly so the ventricles can fill with blood.", true, "On the ECG this pause is the PR interval."),
          B("The SA node lies in the wall of the ___.", ["right atrium", "left ventricle", "left atrium"], "The top of the right atrium, near the SVC."),
          W("Build a word meaning “between atrium and ventricle”", ['atri/o', 'ventricul/o', '-ar'], ['cardi/o', '-itis', 'inter-'], 'atrioventricular.'),
          S("Spell the name of the fibres that spread the signal through the ventricles (the proper name only)", 'Purkinje', 'Purkinje fibers.', 'Purk…'),
          N('t2f:ep')
        ]
      },
      {
        id: 'ep2', title: "The signal on its way", icon: '🔌', items: [
          L("Electrical charge and rest", `${vs(['depolarization', "spread of electrical charge; the muscle contracts"], ['repolarization', "charge returns to its resting state; ready for the next beat"])}${fig('conduction-steps', '', "The numbers show the signal’s order: 1 SA node, 2 AV node, 3 bundle of His, 4 bundle branches, 5 Purkinje fibers.")}${memo("de- means removal: depolarization “removes” the resting polarity and re- (again) restores it.")}`),
          M("Which event makes the heart muscle contract?", ['depolarization', 'repolarization', 'diastole', 'regurgitation'], "The spread of electrical charge."),
          L("Sinus rhythm", `When every beat starts in the SA node and continues regularly at 60 to 100 a minute, it is called <b>normal sinus rhythm</b> (NSR).${fig('conduction-2', '', "The sinoatrial (SA) node pacemaker in the right atrium; the signal passes through the AV node and branches to the Purkinje fibers.")}If the SA node fails, lower stations produce slower beats: the AV node about 40 to 60 and the Purkinje fibers about 20 to 40 times a minute.`),
          T("Normal sinus rhythm means a regular beat of 60 to 100 that starts in the SA node.", true, 'NSR.'),
          L("When the route is blocked", `If the signal slows down or fails to pass in the <b>AV node</b> or <b>bundle of His</b>, it is called <b>heart block</b>; the ventricles beat slowly and irregularly.${fig('heart-block', '', "The AV node, bundle of His and bundle branches: the places where block occurs.")}${pearl("Complete (third-degree) heart block drops the rate to about 40 and the patient faints; the treatment is an artificial pacemaker, which you will meet in the treatment world.")}`),
          M("What is it called when the signal passes incompletely from atrium to ventricle?", ['heart block', 'fibrillation', 'flutter', 'tamponade'], "block = the route is closed."),
          P("Match each term to its meaning", [['depolarization', "spread of charge and contraction"], ['repolarization', "return to rest"], ['NSR', "normal sinus rhythm"], ['heart block', "the signal’s route is blocked"]]),
          B("If the SA node fails, the AV node makes beats at about ___.", ["40 to 60", "60 to 100", "150 to 200"], "Lower stations are slower."),
          S("Spell the term for the spread of electrical charge that triggers contraction", 'depolarization', 'de- + polarization.', 'depol…'),
          N('f2t:ep')
        ]
      },
      {
        id: 'ep3', title: "The cardiac cycle", icon: '🔁', items: [
          L("Contraction and rest", `Each beat is one <b>cardiac cycle</b> and has two phases:${vs(['systole', "contraction; blood is pushed out"], ['diastole', "rest; the chambers fill"])}${fig('systole-diastole')}${memo("Systole = Squeeze; diastole = Dilate and rest.")}`),
          M("What is the phase of rest and ventricular filling called?", ['diastole', 'systole', 'depolarization', 'stenosis'], 'diastole.'),
          L("Three steps of the cycle", `${fig('cardiac-cycle', '', "1 rest: semilunar valves closed and AV valves open; 2 atrial systole: the atria push blood into the ventricles; 3 ventricular systole: semilunar valves open and AV valves closed.")}In <b>ventricular systole</b> the AV valves close (the lubb sound) and at the start of <b>diastole</b> the semilunar valves close (the dupp sound).`),
          O("Order the steps of the cardiac cycle", ["rest and filling of atria and ventricles", 'atrial systole', 'ventricular systole'], "As in the figure: 1 rest, 2 atria contract, 3 ventricles contract."),
          L("How much blood does the heart pump?", `${tbl([["Term", "Meaning", "Normal value"], [e('stroke volume'), "blood per beat", "about 70 millilitres"], [e('heart rate'), "beats per minute", "60 to 100"], [e('cardiac output'), "blood per minute", "about 5 litres"], [e('ejection fraction'), "percentage of blood pumped out of the left ventricle", "55 to 70 per cent"]])}cardiac output = stroke volume × heart rate${pearl("Ejection fraction, or EF, is measured by echocardiography; an EF under 40 per cent is a sign of heart failure.")}`),
          M("Cardiac output is the product of which two numbers?", ["stroke volume and heart rate", "systolic and diastolic", "heart rate and ejection fraction", "stroke volume and blood pressure"], 'CO = SV × HR.'),
          P("Match each term to its meaning", [['stroke volume', "blood in each beat"], ['cardiac output', "blood in each minute"], ['ejection fraction', "percentage of blood pumped out"], ['systole', "contraction phase"]]),
          T("A normal ejection fraction is about 20 per cent.", false, "False; normal is 55 to 70 per cent."),
          L("Review of the level “The heart’s electricity”", recap(["Signal path: SA node → AV node → bundle of His → bundle branches → Purkinje fibers", "depolarization = contraction and repolarization = return to rest; NSR means a regular 60 to 100 from the SA node", "heart block: the signal gets stuck in the AV node or bundle of His", "cardiac cycle: systole = contraction and diastole = rest; CO = SV × HR and normal EF is 55 to 70 per cent"])),
          N('d2t:ep')
        ]
      },

      /* ================= سطح ۲: نوار قلب ================= */
      {
        id: 'ep4', title: "ECG waves", icon: '📈', items: [
          L("The heart’s electricity on paper", `${wb('electr/o', 'cardi/o', '-gram')} = <b>electrocardiogram</b>: a recording of the heart’s electricity. It is abbreviated <b>ECG</b> or <b>EKG</b>. The heart’s electricity is recorded with <b>electrodes</b>, conductive pads stuck onto the skin.${fig('ecg-wave')}Every normal beat has three main parts: the <b>P wave</b>, the <b>QRS complex</b> and the <b>T wave</b>.`),
          L("What does each wave tell you?", `${tbl([["Wave", "Event"], [e('P wave'), "depolarization of the atria, i.e. atrial contraction"], [e('QRS complex'), "depolarization of the ventricles, i.e. ventricular contraction"], [e('T wave'), "repolarization of the ventricles, i.e. getting ready for the next beat"]])}${fig('ecg-pqrst', '', "The P wave is atrial contraction, the QRS complex ventricular contraction and the T wave getting ready for the next beat.")}${memo("P = “prelude”, QRS = “main peak”, T = “the end”: first the atria, then the ventricles, then rest.")}`),
          M("What does the QRS complex show?", ["ventricular depolarization", "atrial depolarization", "ventricular repolarization", "closing of the valves"], "The tallest wave on the tracing."),
          P("Match each wave to its event", [['P wave', "atria contract"], ['QRS complex', "ventricles contract"], ['T wave', "ventricular repolarization"]]),
          T("Atrial repolarization has its own clear, separate wave on the ECG.", false, "False; it is hidden inside the large QRS."),
          O("Order the waves of one beat", ['P wave', 'QRS complex', 'T wave'], "Atria, ventricles, rest."),
          L("P or T?", `${vs(['P wave', "small and rounded; before each QRS"], ['T wave', "larger and broader; after each QRS"])}${memo("On a normal ECG “every P has a QRS and every QRS has a T”. If a P is left without a QRS, the signal is stuck on its way: heart block.")}`),
          M("A patient lies down for an ECG with several electrodes stuck to the chest. What is an electrode?", ["a conductive pad that records electricity from the skin", "shock device", "blood-taking needle", "stethoscope"], "electr/o + -ode (path)."),
          B("ECG and EKG both mean ___.", ['electrocardiogram', 'echocardiogram', 'electroencephalogram'], "The K comes from the German spelling Elektrokardiogramm."),
          S("Spell the full term for the heart’s electrical tracing", 'electrocardiogram', 'electr/o + cardi/o + -gram.', 'electro…'),
          N('t2f:ep')
        ]
      },
      {
        id: 'ep5', title: "ECG paper and intervals", icon: '📏', items: [
          L("Grid paper", `ECG paper moves at a constant 25 millimetres per second:<br>• each <b>small square</b> (1 mm) = 0.04 seconds<br>• each <b>large square</b> (5 mm) = 0.2 seconds<br>• 5 large squares = 1 second${fig('ecg-tracing', '', "A: several beats in a row; B: one beat with its segments and intervals. Each large square is 5 mm and 0.2 seconds.")}`),
          M("How many seconds is each large square on ECG paper?", ["0.2 seconds", "0.04 seconds", "1 second", "0.5 seconds"], "5 small squares × 0.04."),
          L("Segment and interval", `${vs(['segment', "flat line between two waves"], ['interval', "one or more waves together with a segment"])}• <b>PR interval</b>: from the start of P to the start of QRS; the time for the signal to travel from atrium to ventricle (0.12 to 0.20 seconds)<br>• <b>QRS</b>: under 0.12 seconds<br>• <b>ST segment</b>: from the end of QRS to the start of T; rises or falls in a heart attack<br>• <b>QT interval</b>: from the start of QRS to the end of T${pearl("ST segment elevation, or STEMI, means an acute heart attack; the angiography team must open the vessel within 90 minutes.")}`),
          M("In an acute heart attack, which part of the ECG rises?", ['ST segment', 'PR interval', 'P wave', 'U wave'], 'ST elevation.'),
          T("A long PR interval means the signal reaches the ventricles late.", true, "A sign of first-degree heart block."),
          L("Counting the rate on paper", `If the rhythm is regular: <b>300 ÷ number of large squares between two R waves</b> = beats per minute.<br>• 3 large squares → 100<br>• 4 large squares → 75<br>• 5 large squares → 60${fig('ecg-strip', '', "A regular strip; count the R-to-R distance and divide 300 by it.")}`),
          M("Two R waves are 4 large squares apart. What is the rate?", ["75", "60", "100", "150"], "300 ÷ 4 = 75."),
          P("Match each part to its meaning", [['PR interval', "signal passing from atrium to ventricle"], ['ST segment', "line between QRS and T"], ['QT interval', "from the start of QRS to the end of T"], ['R wave', "tall peak of the QRS"]]),
          B("If the R-to-R distance is two large squares, the rate is ___ per minute.", ["150", "75", "300"], "300 ÷ 2 = 150."),
          N('f2t:ep')
        ]
      },
      {
        id: 'ep6', title: "Rhythm and rate", icon: '🎵', items: [
          L("Slow, normal, fast", `${fig('rate-strips')}${tbl([["Rhythm", "Beat", "Example"], [e('bradycardia'), "under 60", "an athlete asleep"], [e('normal sinus rhythm'), "60 to 100", "an adult at rest"], [e('tachycardia'), "over 100", "fever, anxiety, exercise"]])}`),
          M("What is a regular rate of 48 a minute called?", ['sinus bradycardia', 'sinus tachycardia', 'normal sinus rhythm', 'asystole'], "Under 60."),
          L("The 12-lead ECG", `For a full tracing, 10 <b>electrodes</b> are placed on the arms, legs and chest and the heart is viewed from 12 angles (<b>12-lead ECG</b>).${fig('ecg-exam', '', "A: an ECG during exercise; B: one beat with its P wave, QRS and T wave.")}${pearl("An ECG report starts with the rhythm and rate, such as “NSR, HR 72 bpm”, then the axis and ST changes.")}`),
          T("In a 12-lead ECG, twelve electrodes are attached to the body.", false, "False; there are 10 electrodes, but 12 “views” (leads) are recorded."),
          M("“arrhythmia” means…", ["irregular heartbeat", "slow beat", "no heartbeat", "normal beat"], "a- (without) + rhythm + -ia."),
          P("Match each rate to its name", [["45 per minute", 'bradycardia'], ["75 per minute", 'normal sinus rhythm'], ["130 per minute", 'tachycardia']]),
          B("A rate over 100 per minute is called ___.", ['tachycardia', 'bradycardia', 'asystole'], "tachy- = fast."),
          W("Build a word meaning “fast heartbeat”", ['tachy-', '-cardia'], ['brady-', 'a-', '-gram'], 'tachy- + -cardia.'),
          L("Review of the level “The ECG”", recap(["ECG or EKG: P wave = atrial contraction, QRS = ventricular contraction, T wave = ventricular repolarization", "Paper: small square 0.04 and large square 0.2 seconds; rate = 300 ÷ large squares between two R waves", "PR interval 0.12 to 0.20 seconds; QRS under 0.12; the ST segment changes in a heart attack", "bradycardia under 60 • NSR 60 to 100 • tachycardia over 100; 12-lead ECG with 10 electrodes"])),
          N('sp:ep')
        ]
      },

      /* ================= سطح ۳: فشار، نبض و پایش ================= */
      {
        id: 'ep7', title: "blood pressure", icon: '🩺', items: [
          L("The two numbers of blood pressure", `<b>Blood pressure</b> (BP) is the force of blood on the artery walls and is written as two numbers:${fig('bp-reading')}${vs(['systolic', "top number: pressure while the ventricle contracts"], ['diastolic', "bottom number: pressure while the heart rests"])}`),
          M("In a pressure of 130/85, what is the 85?", ['diastolic pressure', 'systolic pressure', 'pulse pressure', 'heart rate'], "The bottom number = diastolic."),
          L("The pressure gauge and Korotkoff sounds", `${wb('sphygm/o', 'man/o', '-meter')} = <b>sphygmomanometer</b> (blood pressure gauge): sphygm/o pulse, man/o pressure and -meter measuring instrument.<br>The cuff is inflated until the brachial artery closes, then slowly let down; with a stethoscope over the artery the <b>Korotkoff sounds</b> are heard:<br>• sounds begin = <b>systolic</b> pressure<br>• sounds stop = <b>diastolic</b> pressure${fig('bp-measure', '', "A: cuff, gauge and stethoscope over the brachial artery; B: the start and end of the Korotkoff sounds.")}`),
          O("Order the steps of measuring blood pressure", ["wrap the cuff around the arm", "inflate the cuff until the pulse stops", "slowly let the cuff down", "note when sounds begin: systolic", "note when sounds stop: diastolic"], "The sounds beginning give the top number and stopping gives the bottom number."),
          T("The start of the Korotkoff sounds shows the diastolic pressure.", false, "False; sounds beginning = systolic and sounds stopping = diastolic."),
          L("The gap between the two numbers", `<b>pulse pressure</b> = systolic − diastolic; for 120/80 it is 40.${fig('bp-photo', '', "Measuring pressure with a cuff and dial gauge.")}${pearl("A cuff too small for the arm gives a falsely high reading; a large arm needs a large cuff.")}`),
          M("At a pressure of 140/90, what is the pulse pressure?", ["50", "230", "90", "140"], "140 − 90 = 50."),
          P("Match each term to its meaning", [['sphygm/o', "pulse"], ['man/o', "pressure"], ['-meter', "measuring instrument"], ['Korotkoff sounds', "sounds of the artery during pressure measurement"]]),
          B("The unit of blood pressure is ___.", ['mmHg', 'bpm', 'mL/min'], "Millimetres of mercury."),
          S("Spell the term for the blood pressure gauge", 'sphygmomanometer', 'sphygm/o + man/o + -meter.', 'sphygmo…'),
          N('t2f:ep')
        ]
      },
      {
        id: 'ep8', title: "Pulse and sounds", icon: '💓', items: [
          L("Where is the pulse felt?", `The <b>pulse</b> is the pressure wave that travels along an artery with each beat; it is felt where an artery lies close to the skin over a bone. The most common site is the wrist, on the thumb side: the <b>radial pulse</b>.${fig('pulse-points')}`),
          M("What is the most common pulse site at the wrist called?", ['radial pulse', 'carotid pulse', 'femoral pulse', 'popliteal pulse'], "The radial artery on the thumb side."),
          L("Pulse sites in the picture", `${fig('pulse-sites', '', "Pulse sites: temporal, carotid, brachial, radial, femoral and popliteal.")}${tbl([["pulse", "Location"], [e('carotid'), "side of the neck; checked first in cardiac arrest"], [e('brachial'), "inside the elbow; in infants"], [e('apical'), "over the apex with a stethoscope"], [e('femoral'), "groin"], [e('popliteal'), "behind the knee"], [e('dorsalis pedis'), "top of the foot; to check circulation in the leg"]])}`),
          P("Match each pulse to its site", [['radial', "the wrist"], ['carotid', "neck"], ['popliteal', "behind the knee"], ['femoral', "groin"]]),
          L("Listening to the heart", `<b>Auscultation</b> means listening to body sounds with a <b>stethoscope</b> (steth/o = chest).<br>• S1 or lubb: the AV valves closing<br>• S2 or dupp: the semilunar valves closing${vs(['murmur', "an extra “whoosh” from turbulent blood flow"], ['gallop', "a third or fourth sound; like a galloping horse"])}${memo("Remember auscultation through Latin auscultare, “to listen”!")}`),
          M("What is listening to heart sounds with a stethoscope called?", ['auscultation', 'palpation', 'percussion', 'inspection'], 'auscultation.'),
          T("The apical pulse is counted with a stethoscope over the apex.", true, "apex = tip of the heart."),
          B("In adult cardiac arrest, the ___ pulse is checked.", ['carotid', 'radial', 'dorsalis pedis'], "A large artery close to the heart."),
          S("Spell the term for the doctor’s listening instrument", 'stethoscope', 'steth/o + -scope.', 'stetho…'),
          N('d2t:ep')
        ]
      },
      {
        id: 'ep9', title: "Heart monitoring", icon: '📟', items: [
          L("The 24-hour ECG", `Some arrhythmias happen only now and then. A <b>Holter monitor</b> is a small device that records the ECG for 24 to 48 hours during daily life, while the patient notes symptoms such as <b>palpitation</b> (feeling the heart pound), with the time, in a diary.${fig('holter', '', "Holter monitor: electrodes on the chest and the recorder on the waist.")}`),
          M("A patient has occasional palpitations but a normal ECG in clinic. Which test is suitable?", ['Holter monitor', 'sphygmomanometer', 'pericardiocentesis', 'angioplasty'], "Continuous 24-hour recording."),
          L("exercise stress test", `In a <b>stress test</b> the patient walks on a treadmill as the speed and slope slowly increase, while the ECG and blood pressure are recorded. If a coronary artery is narrowed, the ST segment changes or chest pain appears as the heart’s demand rises.${fig('stress-test', '', "A treadmill exercise test with ECG electrodes and a pressure cuff.")}${pearl("If the patient cannot exercise, the heart is “made to work” with drugs: a pharmacologic stress test.")}`),
          T("In a stress test the ECG is taken at complete rest.", false, "False; it is taken during exercise on a treadmill."),
          M("What is the main aim of a stress test?", ["finding coronary narrowing during activity", "measuring blood sugar", "viewing the valves with sound", "removing plaque"], "Ischaemia when demand rises."),
          P("Match each instrument to its job", [['Holter monitor', "24-hour ECG recording"], ['stress test', "ECG during exercise"], ['sphygmomanometer', "measuring pressure"], ['stethoscope', "hearing the heart sounds"]]),
          B("A Holter device usually records the ECG for ___ hours.", ["24 to 48", "1 to 2", "720"], "One to two days."),
          M("A patient presents “c/o palpitations”. Palpitation means…", ["feeling the heart pound", "chest pain", "shortness of breath", "swollen leg"], "The patient feels their own heartbeat."),
          L("Review of the level “Pressure, pulse and monitoring”", recap(["BP: systolic (top number, contraction) / diastolic (bottom number, rest) in mmHg", "sphygmomanometer = sphygm/o + man/o + -meter; Korotkoff sounds beginning = systolic, stopping = diastolic", "pulse: radial, carotid, brachial, apical, femoral, popliteal, dorsalis pedis; auscultation with a stethoscope", "monitoring: Holter monitor for 24 to 48 hours and the stress test on a treadmill"])),
          N('t2f:ep')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* تپش — دنیای ۴: رگ‌ها و گردش خون
 * انواع رگ و لایه‌های دیواره، تنگ و گشاد شدن رگ، گردش ریوی و عمومی، گردش کرونری و جانبی،
 * گردش خون جنین، نقشه سرخرگ‌ها و سیاهرگ‌های بدن و دستگاه لنفاوی. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'vc', sym: 'Vas', name: "Vessels and circulation", short: "Vessels", sub: "Arteries, capillaries and veins, vessel wall layers, pulmonary and systemic circulation, fetal circulation, the body’s vessel map and lymph",
    color: '#0C8599', dark: '#08606E', light: '#DDF3F6',
    levels: ["Types of vessel", "The circulations", "Vessel map and lymph"],
    gens: EA.genIds('vc'),
    lessons: [
      /* ================= سطح ۱: انواع رگ ================= */
      {
        id: 'vc1', title: "From artery to vein", icon: '🛤️', items: [
          L("Five types of vessel in a row", `Blood leaves the heart and returns along this chain:${fig('vessel-chain')}${tbl([["vessel", "Meaning", "Job"], [e('artery'), "artery", "carries blood away from the heart"], [e('arteriole'), "small artery", "regulating flow to tissues"], [e('capillary'), "capillary", "exchanging oxygen and substances with tissues"], [e('venule'), "small vein", "collecting blood from the capillaries"], [e('vein'), "vein", "returning blood to the heart"]])}`),
          M("In which vessel is oxygen exchanged between blood and tissue?", ['capillary', 'arteriole', 'venule', 'artery'], "A capillary wall is only one cell thick."),
          O("Order the chain of vessels from the heart to the tissue and back", ['artery', 'arteriole', 'capillary', 'venule', 'vein'], "Artery, small artery, capillary, small vein, vein."),
          L("“Small” suffixes", `-ole and -ule both mean “small”:<br>• ${wb('arteri/o', '-ole')} → <b>arteriole</b>: small artery<br>• ${wb('ven/o', '-ule')} → <b>venule</b>: small vein${fig('vessel-walls', '', "artery with thick smooth muscle, vein with valves and a thinner wall, capillary with endothelium only.")}${memo("capillary comes from Latin capillus, “hair”: a capillary is a hair-thin vessel.")}`),
          P("Match each vessel to its feature", [['artery', "thick muscular wall"], ['vein', "valves and a thinner wall"], ['capillary', "a single layer of cells"], ['arteriole', "small artery"]]),
          T("Veins have valves so blood does not flow backwards.", true, "Especially in the legs, where blood must rise against gravity."),
          B("The suffix ___ in venule means “small”.", ['-ule', '-ole', '-ous'], 'ven/o + -ule.'),
          M("Why is an artery wall thicker than a vein wall?", ["because blood pressure is higher in arteries", "because arterial blood is thicker", "because arteries have valves", "because arteries are shorter"], "Blood enters the artery straight from the ventricle under high pressure."),
          W("Build a word meaning “small artery”", ['arteri/o', '-ole'], ['ven/o', '-ule', '-al'], 'arteriole.'),
          S("Spell the term for the smallest, hair-thin blood vessel", 'capillary', "Plural: capillaries.", 'capi…'),
          N('t2f:vc')
        ]
      },
      {
        id: 'vc2', title: "Layers of the vessel wall", icon: '🧅', items: [
          L("Three coats", `The walls of arteries and veins have three layers. tunica means “coat” or “cloak”:${fig('vessel-wall')}${tbl([["Layer", "Location", "Structure"], [e('tunica intima'), "inner", "smooth endothelium"], [e('tunica media'), "in the middle", "smooth muscle and elastic fibres"], [e('tunica adventitia'), "outer", "supporting tissue such as bone and tendon"]])}`),
          M("Which is the muscular layer of the vessel wall?", ['tunica media', 'tunica intima', 'tunica adventitia', 'endothelium'], "media = middle."),
          L("The space inside the vessel", `• <b>lumen</b>: the space inside a vessel through which blood flows<br>• <b>endothelium</b>: a single layer of flat cells lining the lumen; the only layer of a capillary wall${fig('vessel-layers', '', "Layers of a vein and an artery; the capillary network is made of endothelium only.")}${pearl("In atherosclerosis, fatty plaque builds up under the tunica intima and narrows the lumen; you will see this in more detail in the diseases world.")}`),
          O("Order the layers of the vessel wall from inside to outside", ['tunica intima', 'tunica media', 'tunica adventitia'], "Inner, middle, outer."),
          P("Match each term to its meaning", [['lumen', "The space inside the vessel"], ['endothelium', "smooth inner lining"], ['tunica adventitia', "outer connective layer"], ['tunica media', "smooth muscle layer"]]),
          T("A capillary wall has three layers.", false, "False; it has only endothelium, so exchange is easy."),
          L("Artery or vein under the microscope?", `${vs(['artery', "thick wall, broad tunica media, small round lumen"], ['vein', "thin wall, wide irregular lumen, with venous valves"])}${memo("An artery is “firm and round”, a vein “floppy and wide”.")}`),
          B("The space inside a vessel is called the ___.", ['lumen', 'septum', 'apex'], "lumen means light, or open space."),
          M("In which type of vessel are valves found?", ['vein', 'artery', 'arteriole', 'capillary'], 'venous valve.'),
          S("Spell the term for the inner lining of a vessel", 'endothelium', "endo- (within) + theli (covering) + -um.", 'endo…'),
          N('f2t:vc')
        ]
      },
      {
        id: 'vc3', title: "Narrow and wide", icon: '↔️', items: [
          L("Vessel muscle takes orders", `The smooth muscle of the tunica media can change the vessel’s diameter:${fig('vaso')}${vs(['vasoconstriction', "the vessel narrows; blood pressure rises"], ['vasodilation', "the vessel widens; blood pressure falls"])}`),
          M("In cold weather the skin’s vessels narrow to keep heat in. What is this called?", ['vasoconstriction', 'vasodilation', 'vasospasm', 'perfusion'], 'vas/o + constriction.'),
          L("Break the words apart", `• ${wb('vas/o', '-constriction')} → narrowing of a vessel<br>• ${wb('vas/o', '-dilation')} → widening of a vessel<br>• ${e('vasodilator')}: a drug that widens vessels, such as nitroglycerin${memo("Picture a pupil dilating in the dark: dilation means opening wide, and a vessel widens the same way!")}`),
          T("Vasodilation raises blood pressure.", false, "False; widening of vessels lowers resistance and pressure."),
          L("Blood supply", `<b>Perfusion</b> means blood reaching tissue through the capillaries. If a vessel narrows or closes, perfusion falls and the tissue develops <b>ischemia</b>.${pearl("In shock, organ perfusion falls: cold, pale skin, little urine and reduced consciousness.")}`),
          P("Match each term to its meaning", [['vasoconstriction', "narrowing of a vessel"], ['vasodilation', "widening of a blood vessel"], ['perfusion', "blood supply to tissue"], ['ischemia', "local lack of blood in tissue"]]),
          B("A drug that widens vessels is called a ___.", ['vasodilator', 'vasopressor', 'anticoagulant'], 'vas/o + dilat + -or.'),
          W("Build a word meaning “widening of a vessel”", ['vas/o', '-dilation'], ['-constriction', 'angi/o', '-spasm'], 'vasodilation.'),
          L("Review of the level “Types of vessel”", recap(["chain: artery → arteriole → capillary → venule → vein; -ole and -ule mean small", "an artery has a thick muscular wall; a vein has valves; a capillary is endothelium only", "wall: tunica intima (inner) → tunica media (muscle) → tunica adventitia (outer); the lumen is the space inside", "vasoconstriction raises pressure and vasodilation lowers it; perfusion means blood supply to tissue"])),
          N('m2r:vc')
        ]
      },

      /* ================= سطح ۲: گردش‌های خون ================= */
      {
        id: 'vc4', title: "Lesser and greater circulation", icon: '♾️', items: [
          L("Two loops in a figure of eight", `Blood circulates in two loops that meet at the heart:${fig('two-circuits')}${vs(['pulmonary circulation', "pulmonary (lesser) circulation: from the right ventricle to the lungs and back to the left atrium"], ['systemic circulation', "systemic (greater) circulation: from the left ventricle to the whole body and back to the right atrium"])}`),
          M("Which circulation starts at the left ventricle and goes to the whole body?", ['systemic circulation', 'pulmonary circulation', 'coronary circulation', 'fetal circulation'], "systemic = all the body systems."),
          L("In the textbook picture", `${fig('circulation', '', "Red: oxygen-rich blood (blood high in oxygen); blue: oxygen-poor blood. The upper loop is the pulmonary circulation and the lower loop the systemic circulation.")}In the pulmonary circulation blood <b>takes up oxygen</b> and gives off carbon dioxide; in the systemic circulation blood <b>delivers oxygen to the tissues</b>.${memo("Remember pulmonary through “pulmo”, Latin for lung: pulmon/o means lung.")}`),
          T("In the pulmonary circulation, blood goes from the left ventricle to the lungs.", false, "False; it goes from the right ventricle to the lungs."),
          O("Order the pulmonary circulation", ['right ventricle', 'pulmonary artery', 'lungs', 'pulmonary veins', 'left atrium'], "From the right ventricle to the left atrium."),
          P("Match each circulation to its feature", [['pulmonary circulation', "taking up oxygen in the lungs"], ['systemic circulation', "delivering oxygen to the tissues"], ['coronary circulation', "blood supply to the heart itself"]]),
          B("The root pulmon/o in pulmonary means ___.", ["lung", "heart", "vessel"], "pulmon/o = lung."),
          M("To which chamber does oxygen-poor blood from the body return?", ['right atrium', 'left atrium', 'left ventricle', 'right ventricle'], "Through the venae cavae."),
          S("Spell the adjective meaning “of the lungs”", 'pulmonary', 'pulmon/o + -ary.', 'pulmo…'),
          N('t2f:vc')
        ]
      },
      {
        id: 'vc5', title: "Coronary and collateral circulation", icon: '🔀', items: [
          L("A third circulation: for the heart itself", `The <b>coronary circulation</b> supplies blood to the heart muscle itself: the coronary arteries branch from the start of the aorta and blood returns through the coronary sinus to the right atrium.${fig('coronary-map')}${pearl("Most coronary flow happens in diastole; when the heart is relaxed, the vessels inside its wall are not squeezed. That is why severe tachycardia reduces the heart’s blood supply.")}`),
          M("In which phase of the cardiac cycle does most coronary blood flow occur?", ['diastole', 'systole', 'depolarization', 'ejection'], "The vessels in the wall are open during rest."),
          L("Side routes", `• <b>anastomosis</b>: a joining of two vessels, natural or surgical<br>• <b>collateral circulation</b>: small side vessels that enlarge when a main vessel narrows slowly, creating another route for blood${memo("Read collateral as “side road”: col = with, lateral = side; like a ring road when the main street is closed.")}`),
          T("Collateral circulation forms when a main vessel narrows slowly.", true, "The side vessels have time to enlarge."),
          P("Match each term to its meaning", [['anastomosis', "joining of two vessels"], ['collateral circulation', "side route for blood"], ['coronary circulation', "blood supply to the heart muscle"], ['coronary sinus', "return of the heart’s blood to the RA"]]),
          L("Why does it matter?", `${vs(["sudden blockage", "no time to build a side route; the tissue is quickly damaged"], ["slow narrowing", "collateral circulation forms and damage is less"])}In a <b>bypass</b> the surgeon also creates an anastomosis, connecting a healthy vessel to the artery before and after the narrowing.`),
          M("In bypass surgery, the surgeon sews both ends of the graft vessel to the artery. What is this connection called?", ['anastomosis', 'occlusion', 'embolism', 'ligation'], 'anastomosis.'),
          B("Side vessels that make a new route around a narrowing are called ___ circulation.", ['collateral', 'systemic', 'pulmonary'], "Side-route circulation."),
          S("Spell the term for a joining of vessels", 'anastomosis', "Plural: anastomoses.", 'anasto…'),
          N('d2t:vc')
        ]
      },
      {
        id: 'vc6', title: "Fetal circulation", icon: '👶', items: [
          L("Lungs that do not breathe yet", `The fetus gets oxygen from the placenta, not the lungs. So the <b>fetal circulation</b> has two shortcuts to bypass the inactive lungs:${fig('fetal-shunts')}`),
          L("Two shortcuts", `${tbl([["Shortcut", "Location", "Job"], [e('foramen ovale'), "wall between the two atria", "blood goes straight from the RA to the LA"], [e('ductus arteriosus'), "between the pulmonary artery and the aorta", "blood goes straight from the pulmonary artery to the aorta"]])}${memo("foramen ovale means “oval hole” and ductus arteriosus means “arterial duct”: one is a hole, the other a tube.")}`),
          M("In the fetus, which structure takes blood from the right atrium to the left atrium?", ['foramen ovale', 'ductus arteriosus', 'coronary sinus', 'pulmonary vein'], "The oval hole in the wall between the atria."),
          P("Match each shortcut to its position", [['foramen ovale', "between the two atria"], ['ductus arteriosus', "between the pulmonary artery and the aorta"], ['placenta', "where the fetus gets oxygen"]]),
          L("After birth", `With the first breath the lungs open and pressure rises in the left side of the heart: the foramen ovale closes and the ductus arteriosus narrows and closes within a few days.${pearl("If the ductus arteriosus stays open it is called patent ductus arteriosus, or PDA; patent means “open”. It is common in premature babies and causes a machinery murmur.")}`),
          T("PDA means the ductus arteriosus has stayed open after birth.", true, "patent = open."),
          B("The word patent in PDA means ___.", ["open", "closed", "narrow"], 'patent ductus arteriosus.'),
          M("Why does the fetus need these shortcuts?", ["because the lungs are not working yet", "because the fetal heart has three chambers", "because fetal blood has no oxygen", "because the aorta has not formed yet"], "Oxygen comes from the placenta."),
          L("Review of the level “The circulations”", recap(['pulmonary circulation: RV → pulmonary artery → lungs → pulmonary veins → LA', 'systemic circulation: LV → aorta → body tissues → venae cavae → RA', "coronary circulation mostly in diastole; anastomosis and collateral circulation are side routes", "fetus: foramen ovale (RA to LA) and ductus arteriosus (pulmonary artery to aorta); if it stays open, PDA"])),
          N('f2t:vc')
        ]
      },

      /* ================= سطح ۳: نقشه رگ‌ها و لنف ================= */
      {
        id: 'vc7', title: "Arteries of the body", icon: '🗺️', items: [
          L("An artery is named after its location", `Most arteries share the name of the bone or region they run beside:${fig('arteries-body', '', "The main arteries of the body from the front; each is named after its region.")}`),
          L("The most important ones", `${tbl([["artery", "Location"], [e('carotid artery'), "neck; supplies the brain"], [e('subclavian artery'), "under the collarbone; towards the arm"], [e('brachial artery'), "upper arm; where blood pressure is measured"], [e('radial artery'), "forearm and wrist; where the pulse is taken"], [e('abdominal aorta'), "abdomen"], [e('femoral artery'), "thigh; entry route for catheters"], [e('popliteal artery'), "behind the knee"]])}${memo("sub-clavian = under the collarbone (clavicle); brachial = arm; femoral = thigh (femur). Guess an artery’s name from the bone beside it!")}`),
          M("Which artery in the neck carries blood to the brain?", ['carotid artery', 'subclavian artery', 'jugular vein', 'brachial artery'], 'carotid.'),
          P("Match each artery to its location", [['brachial', "arm"], ['femoral', "thigh"], ['popliteal', "behind the knee"], ['subclavian', "below the collarbone"]]),
          L("Branches of the aorta", `The aortic arch has three branches: the brachiocephalic trunk, left common carotid and left subclavian. After passing the diaphragm, the descending aorta is called the <b>abdominal aorta</b>, which divides at the bottom into two <b>iliac arteries</b>.${pearl("In angiography the catheter is usually inserted through the femoral or radial artery and advanced up to the aorta and coronaries.")}`),
          T("Blood pressure is usually measured over the brachial artery.", true, "Cuff around the upper arm and stethoscope over the brachial artery."),
          M("Through which artery is an angiography catheter usually inserted?", ['femoral artery', 'carotid artery', 'popliteal artery', 'pulmonary artery'], "Or the radial artery at the wrist."),
          B("In the abdomen, the aorta is called the ___ aorta.", ['abdominal', 'ascending', 'thoracic'], "abdomin/o = abdomen."),
          S("Spell the name of the main neck artery (without “artery”)", 'carotid', 'carotid artery.', 'caro…'),
          N('t2f:vc')
        ]
      },
      {
        id: 'vc8', title: "Veins of the body", icon: '🌊', items: [
          L("Superficial and deep veins", `Veins come in two groups: <b>deep</b> veins, which run beside arteries and share their names (such as the femoral vein), and <b>superficial</b> veins, which can be seen under the skin.${fig('veins-body', '', "The main veins of the body; blue means oxygen-poor blood.")}`),
          L("The most important ones", `${tbl([["vein", "Location and use"], [e('jugular vein'), "neck; returns blood from the head"], [e('subclavian vein'), "under the collarbone; site for a central line"], [e('median cubital vein'), "front of the elbow; drawing blood"], [e('great saphenous vein'), "longest vein in the body; inner leg"], [e('femoral vein'), "thigh; beside the femoral artery"]])}${memo("jugular comes from Latin jugulum, “throat”: the throat vein, on both sides of the neck.")}`),
          M("Which is the longest vein in the body, also harvested in bypass surgery?", ['great saphenous vein', 'femoral vein', 'jugular vein', 'inferior vena cava'], "From the top of the foot to the groin."),
          P("Match each vein to its location", [['jugular', "neck"], ['median cubital', "in front of the elbow"], ['great saphenous', "inner leg"], ['subclavian', "below the collarbone"]]),
          L("Drawing blood", `${wb('ven/o', 'punct', '-ure')} = <b>venipuncture</b>: puncturing a vein with a needle to draw blood or inject. ${e('phlebotomy')} has the same meaning.${pearl("In a patient with heart failure, the jugular vein in the neck looks full and prominent: JVD, or jugular venous distention.")}`),
          T("Venipuncture means puncturing an artery.", false, "False; ven/o means vein."),
          M("From which vein is blood usually drawn?", ['median cubital vein', 'great saphenous vein', 'jugular vein', 'portal vein'], "Front of the elbow; superficial and wide."),
          B("Bulging of the neck vein in heart failure is called ___.", ['JVD', 'DVT', 'PDA'], 'jugular venous distention.'),
          S("Spell the term for puncturing a vein to draw blood", 'venipuncture', "ven/o + punct (to pierce) + -ure.", 'veni…'),
          N('f2t:vc')
        ]
      },
      {
        id: 'vc9', title: "Lymph: the body’s drainage", icon: '🫧', items: [
          L("The fluid that returns", `A little blood fluid leaks from the capillaries into the tissues. This fluid is called <b>lymph</b>, and <b>lymphatic vessels</b> collect it and return it to the blood.<br>• <b>lymph node</b>: bean-shaped nodes that filter lymph and trap germs<br>• <b>thoracic duct</b>: the largest lymphatic duct; empties lymph into the left subclavian vein`),
          M("Which is the largest lymphatic duct in the body?", ['thoracic duct', 'lymph node', 'jugular vein', 'ductus arteriosus'], "thoracic = chest."),
          L("Structure of a lymph node", `${fig('lymph-node', '', "Lymph enters through an afferent vessel and leaves through an efferent vessel at the hilum; valves keep the flow one-way.")}${vs(['afferent', "vessel entering the node"], ['efferent', "vessel leaving the node"])}${memo("Afferent = Arrive and Efferent = Exit.")}`),
          P("Match each term to its meaning", [['lymph', "fluid leaked from capillaries"], ['lymph node', "lymph filter"], ['thoracic duct', "largest lymphatic duct"], ['afferent vessel', "vessel entering the node"]]),
          T("Lymphatic vessels, like veins, have valves.", true, "One-way flow towards the heart."),
          L("When the drain is blocked", `If lymphatic vessels are blocked, fluid stays in the tissue and causes <b>lymphedema</b> (lymphatic swelling).${pearl("After armpit nodes are removed in breast cancer surgery, blood is not drawn and pressure not taken on that arm, so lymphedema does not worsen.")}`),
          B("Swelling caused by blocked lymphatic vessels is called ___.", ['lymphedema', 'lymphoma', 'lymphocyte'], 'lymph/o + edema.'),
          M("Into which vessel does the thoracic duct empty lymph?", ['left subclavian vein', 'aorta', 'pulmonary artery', 'femoral vein'], "At the base of the neck, on the left."),
          L("Review of the level “Vessel map and lymph”", recap(["arteries: carotid (neck), subclavian, brachial (blood pressure), radial (pulse), abdominal aorta, femoral (catheter), popliteal", "veins: jugular, subclavian, median cubital (drawing blood), great saphenous (longest; bypass graft), femoral", "venipuncture = ven/o + punct + -ure; JVD in heart failure", "lymph: lymphatic vessels, lymph node (afferent in and efferent out), thoracic duct to the left subclavian vein; lymphedema"])),
          N('m2r:vc')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* تپش — دنیای ۵: بیماری‌های قلب و رگ
 * از تنگ شدن سرخرگ‌ها (آترواسکلروز، بیماری کرونر، سکته قلبی) شروع می‌کنیم، سپس آریتمی‌ها، بیماری دریچه‌ها،
 * نقص‌های مادرزادی و نارسایی قلب را می‌بینیم و در پایان فشار خون، آنوریسم، لخته، سکته مغزی و بیماری سیاهرگ‌ها. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ds', sym: 'Path', name: "Heart and vessel diseases", short: "disease", sub: "Atherosclerosis, coronary disease and heart attack, arrhythmias, valve and congenital defects, heart failure, blood pressure, aneurysm, clots and varicose veins",
    color: '#AE3EC9', dark: '#7B2A8F', light: '#F5E3FA',
    levels: ["Narrowed and blocked vessels", "Rhythm, valves and muscle", "Pressure, clots and veins"],
    gens: EA.genIds('ds'),
    lessons: [
      /* ================= سطح ۱: رگ‌های تنگ و بسته ================= */
      {
        id: 'ds1', title: "Plaque in the artery", icon: '🧈', items: [
          L("An artery that slowly narrows", `In <b>atherosclerosis</b> fat and cholesterol build up under the tunica intima and form a <b>plaque</b>, or <b>atheroma</b>; the lumen gets narrower and narrower.${fig('athero-steps')}${fig('athero-stages', '', "From a normal artery to a large plaque with a clot on it.")}`),
          M("atheroma means…", ["a mass of fatty plaque in the artery wall", "travelling clot", "widening of an artery", "inflammation of a vein"], "ather/o (fatty plaque) + -oma (mass)."),
          L("Two diseases with similar names", `${vs(['arteriosclerosis', "the artery wall becomes hard and inflexible; mostly with age and high blood pressure"], ['atherosclerosis', "a type of it with fatty plaque in the wall"])}${fig('athero-arterio', '', "From the left: a healthy artery, atherosclerosis with yellow plaque and arteriosclerosis with a thick, stiff wall.")}${memo("arterio = artery; athero = fatty porridge. Every atherosclerosis is an arteriosclerosis, but not the other way round.")}`),
          T("Atherosclerosis is a type of arteriosclerosis.", true, "Hardening of an artery with fatty plaque."),
          L("From plaque to blockage", `${fig('plaque-clot', '', "A: plaque in the wall, damage to the endothelium and platelets sticking; B: moderate narrowing, a partly blocking clot and a fully blocking clot.")}When the plaque surface ruptures, platelets stick to it and form a <b>thrombus</b> (clot). Complete closure of a vessel is called <b>occlusion</b>.`),
          O("Order the stages of an artery closing", ["fat builds up under the intima", "plaque forms", "the plaque surface ruptures", "platelets stick and a thrombus forms", 'occlusion'], "From plaque to complete blockage."),
          P("Match each term to its meaning", [['plaque', "fat deposit in the wall"], ['thrombus', "fixed clot in a vessel"], ['occlusion', "complete closure of a vessel"], ['stenosis', "narrowing"]]),
          B("Complete closure of a vessel is called ___.", ['occlusion', 'dilation', 'perfusion'], 'occlusion.'),
          W("Build a word meaning “hardening of an artery with fatty plaque”", ['ather/o', '-sclerosis'], ['arteri/o', '-stenosis', 'thromb/o'], 'atherosclerosis.'),
          S("Spell the term for hardening of the arteries with fatty plaque", 'atherosclerosis', 'ather/o + -sclerosis.', 'athero…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds2', title: "Coronary disease and angina", icon: '😣', items: [
          L("When the coronaries narrow", `<b>Coronary artery disease</b> (CAD) means atherosclerosis in the coronary arteries. The heart muscle does not get enough blood: <b>ischemia</b> (isch/o holding back + -emia blood).${fig('cad-ischemia', '', "A: plaque has reduced blood flow and part of the heart is ischemic; B: flow is completely blocked and that part has infarcted.")}`),
          M("What does CAD stand for?", ['coronary artery disease', 'cardiac arrest disorder', 'congenital aortic defect', 'chronic arterial dilation'], "Coronary artery disease."),
          L("chest pain", `<b>Angina pectoris</b> means “squeezing chest pain” (pector/o = chest) that comes on with exertion or emotion and eases with rest or nitroglycerin under the tongue.${vs(['stable angina', "with exertion, predictable, relieved by rest"], ['unstable angina', "at rest or worse than ever; a warning of heart attack"])}${pearl("Angina is often a pressure-like pain spreading to the left arm, jaw or back; in women and people with diabetes it may be only breathlessness or tiredness.")}`),
          M("A 60-year-old man gets squeezing chest pain climbing stairs that goes away after 5 minutes’ rest. Diagnosis?", ['stable angina', 'unstable angina', 'pericarditis', 'aortic dissection'], "Predictable pain with exertion.", [["Age", "60 years"], ["Complaint", "chest pain on stairs"], ["Relief", "with rest"]]),
          T("Unstable angina also occurs at rest and is a warning of heart attack.", true, "It needs urgent assessment."),
          L("Accompanying signs", `${tbl([["Term", "Meaning"], [e('dyspnea'), "shortness of breath"], [e('diaphoresis'), "heavy sweating"], [e('palpitation'), "feeling the heart pound"], [e('syncope'), "fainting, brief loss of consciousness"]])}${memo("dys- means bad or difficult and -pnea means breathing: dyspnea = difficult breathing.")}`),
          P("Match each sign to its meaning", [['dyspnea', "shortness of breath"], ['diaphoresis', "heavy sweating"], ['syncope', "fainting"], ['angina pectoris', "squeezing chest pain"]]),
          B("In ischemia, the suffix ___ means “blood condition”.", ['-emia', '-osis', '-itis'], 'isch/o + -emia.'),
          S("Spell the term for difficult breathing", 'dyspnea', 'dys- + -pnea.', 'dysp…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds3', title: "heart attack", icon: '💔', items: [
          L("When the muscle dies", `If a coronary artery suddenly closes completely, the muscle beyond the blockage dies: <b>myocardial infarction</b> (MI), or heart attack.<br>• <b>infarct</b>: an area of tissue dead from lack of blood<br>• <b>necrosis</b>: tissue death (necr/o = dead)${fig('mi', '', "Fatty plaque inside the artery and the necrotic (dead) area beyond it.")}`),
          M("myocardial infarction means…", ["death of part of the heart muscle from lack of blood", "inflammation of the heart muscle", "Enlargement of the heart", "irregular heartbeat"], 'my/o + cardi/o + infarct.'),
          L("Ischemia or infarct?", `${vs(['ischemia', "lack of blood; still reversible"], ['infarct', "dead tissue; irreversible"])}${fig('infarct-area', '', "An area of infarct in the left ventricle wall; the section shows the dead area reaching deep into the wall.")}${memo("“Time is muscle”: every minute’s delay in opening the vessel means more muscle infarcts.")}`),
          T("Ischemia is always irreversible.", false, "False; ischemia reverses if treated early; an infarct does not."),
          L("Signs and diagnosis", `Severe chest pain lasting over 20 minutes, diaphoresis, dyspnea and nausea. Diagnosed by:<br>• ECG: ST segment elevation (STEMI)<br>• blood test: raised <b>troponin</b> and <b>cardiac enzymes</b>${pearl("If the patient suddenly collapses unconscious with no pulse, cardiac arrest has occurred, often from ventricular fibrillation after an MI.")}`),
          M("Which blood test rises in MI?", ['troponin', 'hemoglobin', 'glucose', 'creatinine'], "A heart muscle protein."),
          O("Order the events of a heart attack", ["a coronary plaque ruptures", "clot and occlusion", 'ischemia', "infarct and necrosis"], "From plaque to tissue death."),
          P("Match each term to its meaning", [['infarct', "area of dead tissue"], ['necrosis', "tissue death"], ['troponin', "marker of heart damage in the blood"], ['STEMI', "heart attack with ST elevation"]]),
          L("Review of the level “Narrowed and blocked vessels”", recap(["atherosclerosis: plaque (atheroma) in the artery wall; a type of arteriosclerosis", "plaque → rupture → thrombus → occlusion; stenosis means narrowing", "CAD → ischemia → angina pectoris (stable or unstable); dyspnea, diaphoresis, syncope", "MI: infarct and necrosis of heart muscle; raised ST on the ECG and raised troponin in the blood"])),
          N('d2t:ds')
        ]
      },

      /* ================= سطح ۲: ریتم، دریچه و ماهیچه ================= */
      {
        id: 'ds4', title: "Arrhythmias", icon: '〰️', items: [
          L("Dangerous rhythms", `<b>Arrhythmia</b> means an irregular or abnormal heartbeat. See four important rhythms side by side:${fig('arrhythmias')}`),
          L("Quivering instead of contracting", `<b>Fibrillation</b> means rapid, chaotic quivering of muscle fibres instead of a single coordinated contraction:${vs(['atrial fibrillation', "the atria quiver; irregular beat with no P wave; risk of clots and stroke"], ['ventricular fibrillation', "the ventricles quiver; no blood is pumped; cardiac arrest"])}${memo("“If the atria quiver, the patient walks in; if the ventricles quiver, the patient falls down.”")}`),
          M("In which rhythm does the patient have no pulse and need an immediate shock (defibrillation)?", ['ventricular fibrillation', 'atrial fibrillation', 'sinus bradycardia', 'atrial flutter'], "VF means cardiac arrest."),
          L("Other rhythms", `${tbl([["Rhythm", "Feature"], [e('atrial flutter'), "atria very fast and regular; sawtooth waves"], [e('PVC'), "premature ventricular contraction: an early beat from the ventricle"], [e('asystole'), "no electrical activity at all; a flat line"], [e('WPW syndrome'), "Wolff-Parkinson-White: an extra electrical pathway between atrium and ventricle"]])}${pearl("A patient with atrial fibrillation takes an anticoagulant, because blood pools in the quivering atrium and forms clots that travel to the brain.")}`),
          P("Match each rhythm to its feature", [['atrial fibrillation', "irregular, no P wave"], ['atrial flutter', "sawtooth"], ['asystole', "flat line"], ['PVC', "early ventricular beat"]]),
          T("The risk of stroke is higher in atrial fibrillation.", true, "A clot forms in the stagnant atrium."),
          M("A flat line on the monitor of an unconscious patient means…", ['asystole', 'ventricular fibrillation', 'atrial flutter', 'normal sinus rhythm'], "a- (without) + systole (contraction)."),
          B("Sudden failure of the heart’s pumping is called ___.", ['cardiac arrest', 'cardiac output', 'cardiac cycle'], 'cardiac arrest.'),
          S("Spell the term for rapid, chaotic quivering of heart muscle", 'fibrillation', "fibrill (small fibre) + -ation.", 'fibri…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds5', title: "Valves and congenital defects", icon: '🚪', items: [
          L("Two ways a valve fails", `${fig('valve-problems')}${vs(['stenosis', "the valve is stiff and does not open well; the ventricle must push harder"], ['regurgitation', "the valve does not close well; blood flows backwards (insufficiency)"])}Both cause turbulent flow and a <b>murmur</b>.`),
          M("What is the problem with a valve that does not close well and lets blood flow back?", ['regurgitation', 'stenosis', 'occlusion', 'fibrillation'], "Backflow of blood."),
          L("Common valve diseases", `• <b>mitral valve prolapse</b> (MVP): the mitral cusps bulge into the left atrium during contraction; a “click” sound<br>• <b>rheumatic heart disease</b>: valve damage, especially to the mitral, years after an untreated streptococcal sore throat<br>• <b>endocarditis</b>: infection of the inner lining and valves${pearl("A child’s strep throat is treated with a full course of antibiotics so it does not lead to rheumatic fever and valve damage.")}`),
          T("In mitral valve prolapse the cusps bulge into the left ventricle.", false, "False; they bulge into the left atrium."),
          L("Congenital defects", `<b>Congenital heart disease</b> means a structural heart defect present from birth:${fig('heart-defects')}${tbl([["Defect", "Meaning"], [e('ASD'), "atrial septal defect: a hole in the wall between the atria"], [e('VSD'), "ventricular septal defect: a hole in the wall between the ventricles"], [e('PDA'), "patent ductus arteriosus: the fetal duct stays open"], [e('CoA'), "coarctation of the aorta: congenital narrowing of the aorta"]])}`),
          P("Match each abbreviation to its defect", [['ASD', "hole between the atria"], ['VSD', "hole between the ventricles"], ['PDA', "ductus arteriosus stays open"], ['CoA', "congenital aortic narrowing"]]),
          L("Tetralogy of Fallot", `<b>Tetralogy of Fallot</b> (tetra- = four) has four defects together: VSD, pulmonary valve narrowing, an aorta overriding both ventricles and a thickened right ventricle. Oxygen-poor blood goes to the body and the baby has <b>cyanosis</b> (blueness).${memo("tetra = four, like a tetrahedron with its four faces.")}`),
          M("A newborn is blue, and the echo shows a VSD, pulmonary valve narrowing, an overriding aorta and a thick right ventricle. Diagnosis?", ['tetralogy of Fallot', 'patent ductus arteriosus', 'coarctation of the aorta', 'mitral valve prolapse'], "Four defects together.", [["Patient", "newborn"], ["symptom", 'cyanosis'], ["Echo", "four findings"]]),
          B("In coarctation of the aorta, the aorta is ___.", ["narrow", "widened", "forked"], "Congenital narrowing."),
          S("Spell the term for an extra heart sound from turbulent flow", 'murmur', "The sound of turbulent blood flow.", 'mur…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds6', title: "Failure and heart muscle", icon: '🎈', items: [
          L("A pump that falls short", `In <b>heart failure</b> the heart cannot pump as much blood as the body needs. When blood backs up behind the heart and causes swelling, it is called <b>congestive heart failure</b> (CHF) (congestion = build-up).${vs(['left-sided failure', "blood backs up in the lungs; dyspnea and cough"], ['right-sided failure', "blood backs up in the body; leg swelling and JVD"])}`),
          M("A CHF patient gets breathless when lying down at night. Where has the blood backed up?", ["the lungs (left-sided failure)", "the legs (right-sided failure)", "liver", "brain"], "Left ventricular failure makes blood build up in the lungs."),
          L("swelling", `<b>Edema</b> means fluid collecting in tissue. In heart failure, swelling of the legs and ankles is common; if finger pressure leaves a dent, it is called <b>pitting edema</b>.${fig('edema', '', "A: a dent after finger pressure (pitting edema); B: swelling of the leg and ankle.")}${pearl("A CHF patient weighs themselves every morning; a gain of more than one kilo in a day means fluid is building up.")}`),
          T("Pitting edema means that after finger pressure, a dent remains.", true, "pit = hollow."),
          L("Big or diseased muscle", `${tbl([["Term", "Meaning"], [e('cardiomegaly'), "enlarged heart; on a chest X-ray"], [e('hypertrophy'), "thickening of the muscle (hyper- + -trophy growth)"], [e('cardiomyopathy'), "disease of the heart muscle itself"], [e('myocarditis'), "inflammation of the heart muscle"], [e('cardiogenic shock'), "shock caused by failure of the heart’s pump (-genic = caused by)"]])}`),
          P("Match each term to its meaning", [['cardiomegaly', "enlarged heart"], ['hypertrophy', "thickening of the muscle"], ['edema', "fluid collecting in tissue"], ['cardiogenic shock', "shock from pump failure"]]),
          W("Build a word meaning “shock originating in the heart”", ['cardi/o', '-genic'], ['-megaly', 'my/o', '-itis'], "cardi/o + -genic (caused by) = cardiogenic."),
          B("Thickening of the ventricle wall in long-standing high blood pressure is called ___.", ['ventricular hypertrophy', 'ventricular atrophy', 'ventricular dysplasia'], "hyper- (excessive) + -trophy (growth)."),
          L("Review of the level “Rhythm, valves and muscle”", recap(["arrhythmia: atrial fibrillation (irregular, clot risk), atrial flutter, PVC, ventricular fibrillation and asystole (cardiac arrest)", "valve: stenosis (will not open) and regurgitation (will not close); MVP, rheumatic heart disease; murmur", "congenital: ASD, VSD, PDA, CoA and tetralogy of Fallot with cyanosis", "CHF: left-sided failure gives dyspnea and right-sided failure gives edema and JVD; cardiomegaly, hypertrophy, cardiomyopathy"])),
          N('m2r:ds')
        ]
      },

      /* ================= سطح ۳: فشار، لخته و سیاهرگ ================= */
      {
        id: 'ds7', title: "Blood pressure and aneurysm", icon: '🎈', items: [
          L("Blood pressure categories", `${fig('bp-categories')}<b>Hypertension</b> (HTN) is called the “silent killer”: it causes no symptoms for years while silently damaging the heart, brain, kidneys and eyes.<br>• <b>stage 1</b>: systolic 130 to 139 or diastolic 80 to 89<br>• <b>stage 2</b>: 140/90 or higher`),
          M("Which category is a blood pressure of 134/84?", ['hypertension stage 1', 'normal', 'elevated', 'hypotension'], "Systolic 130 to 139 or diastolic 80 to 89."),
          L("low pressure", `• <b>hypotension</b>: low pressure, below about 90/60<br>• <b>orthostatic hypotension</b>: a drop in pressure on standing up suddenly (ortho- = straight, upright); dizziness and sometimes syncope${memo("Remember orthostatic through “ortho = upright”: pressure drops when you stand upright.")}`),
          T("Orthostatic hypotension happens when lying down.", false, "False; it happens on standing up suddenly."),
          L("A vessel that balloons", `An <b>aneurysm</b> is a bulging and widening of a weak part of an artery wall:${fig('aneurysm-types', '', "A: fusiform (spindle-shaped, all around the vessel); B: saccular (sac-like, on one side); C: dissecting (blood between the wall layers).")}${fig('dissecting', '', "Dissecting aneurysm of the aorta: blood enters the artery wall through a tear in the intima.")}`),
          P("Match each type of aneurysm to its shape", [['fusiform', "spindle-shaped, all around the vessel"], ['saccular', "sac-like, on one side of the vessel"], ['dissecting', "blood between the wall layers"]]),
          L("bulging of the abdominal aorta", `${fig('aaa', '', "Abdominal aortic aneurysm below the renal arteries; the inferior vena cava runs beside it.")}An <b>abdominal aortic aneurysm</b> (AAA) is most common in older men who smoke and causes no symptoms until it ruptures.${pearl("A pulsating mass in the abdomen is a sign of AAA; rupture, with sudden abdominal and back pain and falling pressure, is a surgical emergency.")}`),
          M("What does AAA stand for?", ['abdominal aortic aneurysm', 'acute arterial anemia', 'atrial arrhythmia attack', 'aortic arch anomaly'], "Abdominal aortic aneurysm."),
          S("Spell the term for a ballooning of a weak artery wall", 'aneurysm', "Watch the spelling: eu and y.", 'aneu…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds8', title: "Clots and stroke", icon: '🧠', items: [
          L("Fixed clot, travelling clot", `${fig('clot-travel')}${vs(['thrombus', "a clot attached to the vessel wall (plural: thrombi)"], ['embolus', "a clot or particle travelling in the blood (plural: emboli)"])}When an embolus lodges in a narrower vessel and blocks it, it is called an <b>embolism</b>.`),
          M("What is a clot that has broken loose and travels in the blood called?", ['embolus', 'thrombus', 'plaque', 'atheroma'], "embol/o = plug."),
          L("From the leg to the lungs", `<b>Deep vein thrombosis</b> (DVT) means a clot in the deep veins of the leg; the leg is swollen, warm and painful. If the clot breaks loose, it travels through the right heart to the lungs: <b>pulmonary embolism</b> (PE).${fig('dvt', '', "Thrombosis in a deep leg vein; swelling and inflammation below the blockage.")}${pearl("Long immobility (flights, bed rest, surgery) raises the risk of DVT; that is why patients are got walking soon after surgery.")}`),
          O("Order the path of a clot from the leg to the lungs", ["DVT in a leg vein", "the embolus breaks loose", 'inferior vena cava', "right atrium and right ventricle", 'pulmonary artery: PE'], "A venous clot reaches the lungs."),
          L("stroke", `A <b>stroke</b>, or CVA (cerebrovascular accident), is brain damage from loss of blood supply, often from a clot or plaque in the <b>carotid artery</b>.${fig(['carotid-plaque', 'stroke'], ["Plaque in the internal carotid artery and a piece breaking off it", "Ischemic stroke: a clot on a carotid plaque and the damaged area of brain"])}${vs(['TIA', "transient ischemic attack: passing symptoms that fully resolve within 24 hours"], ['stroke', "lasting damage to brain tissue"])}`),
          M("A patient had 15 minutes of right arm weakness and is now completely well. What is this?", ['TIA', 'stroke', 'syncope', 'MI'], "transient = passing; a warning of stroke."),
          L("The sound of narrowing", `A <b>bruit</b> is a “whooshing” sound heard with a stethoscope over a narrowed artery (such as the carotid): turbulent blood flow through the narrowing.${memo("bruit (said “broo-ee”) is French for “noise”.")}`),
          P("Match each term to its meaning", [['DVT', "clot in a deep vein"], ['PE', "clot in a lung artery"], ['TIA', "passing ischemic attack on the brain"], ['bruit', "sound of flow through a narrowed artery"]]),
          T("Pulmonary embolism usually comes from a clot in the deep veins of the leg.", true, 'DVT → PE.'),
          S("Spell the term for a clot fixed to the vessel wall", 'thrombus', "Plural: thrombi.", 'thro…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds9', title: "Veins and peripheral vessels", icon: '🦵', items: [
          L("Valves that fail", `<b>Varicose veins</b> are widened, twisted superficial veins of the leg. The vein valves do not close properly, so blood flows back and pools in the superficial vein.${fig('varicose-valves', '', "A: a healthy vein with working valves and a varicose vein with failing valves; B: varicose veins of the leg.")}`),
          M("What is the main cause of varicose veins?", ["failing vein valves", "fatty plaque in an artery", "clot in an artery", "aortic narrowing"], "Backflow and pooling of blood in the superficial vein."),
          L("Varicose veins up close", `${fig('varicose-photo', '', "Widened, twisted veins under the skin of the leg.")}Varicose veins in the anal region are called <b>hemorrhoids</b>.<br>• <b>phlebitis</b>: inflammation of a vein<br>• <b>thrombophlebitis</b>: inflammation of a vein with a clot`),
          P("Match each term to its meaning", [['varicose veins', "widened, twisted vein"], ['phlebitis', "inflammation of a vein"], ['thrombophlebitis', "inflammation of a vein with a clot"], ['hemorrhoids', "swollen veins of the anal region"]]),
          W("Build a word meaning “inflammation of a vein with a clot”", ['thromb/o', 'phleb/o', '-itis'], ['arteri/o', '-osis', 'ather/o'], 'thrombophlebitis.'),
          L("Peripheral arteries", `• <b>peripheral artery disease</b> (PAD): atherosclerosis in the leg arteries<br>• <b>claudication</b>: calf pain on walking that eases on standing still; a sign of PAD<br>• <b>Raynaud phenomenon</b>: fingers turning white and blue in the cold from vasospasm<br>• <b>vasculitis</b>: inflammation of vessels${memo("claudication comes from the emperor Claudius, who limped: leg pain that makes you limp.")}`),
          M("A 66-year-old man who smokes gets calf pain after walking 200 metres that eases when he stands still. What is this sign?", ['claudication', 'varicose veins', 'Raynaud phenomenon', 'edema'], "A sign of PAD.", [["Age", "66 years"], ["history of", "smoking"], ["Complaint", "calf pain on walking"]]),
          T("Raynaud phenomenon involves spasm of the finger vessels in the cold.", true, 'vasospasm.'),
          L("Review of the level “Pressure, clots and veins”", recap(["hypertension: 130/80 or higher; hypotension and orthostatic hypotension", "aneurysm: fusiform, saccular and dissecting; AAA in the abdominal aorta", "fixed thrombus and travelling embolus; DVT → PE; stroke (CVA) and passing TIA; bruit over a narrowed artery", "varicose veins from failing valves; phlebitis, thrombophlebitis, hemorrhoids; PAD with claudication; Raynaud"])),
          N('m2r:ds')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* تپش — دنیای ۶: تشخیص و درمان
 * ابزارهای تشخیص و آزمایش‌های خون، تصویربرداری رگ و کاتتریزاسیون؛ بالن، استنت و جراحی رگ و قلب؛
 * داروهای قلب، فشار، لخته و چربی؛ ضربان‌ساز، شوک و احیای قلبی-ریوی. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'tx', sym: 'Rx', name: "diagnosis and treatment", short: "treatment", sub: "Echo, tests, angiography and catheterisation, balloons and stents, vessel and heart surgery, drugs, pacemakers, shocks and resuscitation",
    color: '#2F9E44', dark: '#1F6E2F', light: '#E0F4E4',
    levels: ["Diagnosis and imaging", "Opening vessels and surgery", "Drugs, pacemakers and resuscitation"],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: تشخیص و تصویربرداری ================= */
      {
        id: 'tx1', title: "The diagnostic toolbox", icon: '🧰', items: [
          L("Four ways to see the heart", `${fig('dx-tools')}You met the ECG and Holter in the heartbeat world. Now the other tools:<br>• <b>echocardiography</b>: imaging the heart with sound waves (ech/o = echo); shows the chambers, valves and EF<br>• <b>transesophageal echocardiography</b> (TEE): a probe passes down the oesophagus (esophag/o) behind the heart and gives a sharper image`),
          M("Which test uses sound waves to show valve movement and ejection fraction?", ['echocardiography', 'electrocardiography', 'angiography', 'venography'], "ech/o = echo of sound."),
          L("Hearing blood flow", `<b>Doppler ultrasonography</b> measures the speed and direction of blood flow with sound waves; used for carotid narrowing or leg DVT.${fig('doppler', '', "Doppler ultrasound of the carotid artery in the neck.")}${vs(['echocardiogram', "image of the heart itself, made with sound"], ['electrocardiogram', "tracing of the heart’s electricity"])}${memo("echo = echo of sound; electro = electricity. “The echo sees the heart; the ECG follows its current.”")}`),
          T("TEE is done through the oesophagus.", true, "trans- (through) + esophag/o (oesophagus)."),
          L("Heart blood tests", `${tbl([["test", "What it tells you"], [e('troponin'), "heart muscle damage; diagnosing MI"], [e('CK-MB'), "a heart enzyme; one of the cardiac enzymes"], [e('BNP'), "B-type natriuretic peptide: raised in heart failure"], [e('CRP'), "C-reactive protein: a marker of inflammation"], [e('lipid profile'), "cholesterol, LDL, HDL and triglycerides"]])}${pearl("BNP is released by a stretched ventricle; in a breathless patient, a normal BNP almost rules out heart failure.")}`),
          P("Match each test to its meaning", [['troponin', "heart muscle damage"], ['BNP', "heart failure"], ['CRP', "inflammation"], ['lipid profile', "blood fats"]]),
          M("In a breathless patient, which test helps with heart failure?", ['BNP', 'troponin', 'CRP', 'glucose'], 'B-type natriuretic peptide.'),
          B("In transesophageal echocardiography, the probe is passed through the ___.", ["oesophagus", "windpipe", "femoral vein"], "esophag/o = oesophagus."),
          W("Build a word meaning “the process of imaging the heart with sound echoes”", ['ech/o', 'cardi/o', '-graphy'], ['electr/o', '-gram', 'angi/o'], 'echocardiography.'),
          S("Spell the term for imaging the heart with sound waves", 'echocardiography', 'ech/o + cardi/o + -graphy.', 'echo…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: "Seeing inside vessels", icon: '🔦', items: [
          L("Vessel imaging with contrast", `In <b>angiography</b> a contrast dye is injected into a vessel and X-ray images are taken; the resulting image is an <b>angiogram</b>.${vs(['angiography', "the process of vessel imaging (-graphy)"], ['angiogram', "the image itself (-gram)"])}${fig('angiogram', '', "An angiogram of the coronary arteries; the vessels show up dark with contrast.")}`),
          M("What is the image of vessels taken after a contrast injection called?", ['angiogram', 'angiography', 'angioplasty', 'echocardiogram'], "-gram = the result of recording."),
          L("Before and after treatment", `${fig('angiography', '', "A: severe narrowing of a coronary artery (arrow); B: the same artery after opening.")}<b>Coronary angiography</b> is the gold standard for diagnosing CAD, and the narrowing can be opened with a balloon and stent in the same session.`),
          T("In coronary angiography the vessel can be opened at the same time.", true, "Diagnosis and treatment in one session."),
          L("Other methods", `${tbl([["Method", "Description"], [e('CT angiography'), "vessel imaging with CT; no catheter"], [e('digital subtraction angiography'), "DSA: the computer “subtracts” the bones from the image so only the vessels remain"], [e('venography'), "imaging of the veins"], [e('MUGA scan'), "measuring EF with a radioactive tracer"], [e('nuclear stress test'), "exercise test with a radioactive tracer; shows poorly supplied areas"]])}`),
          P("Match each method to its feature", [['CT angiography', "vessel imaging without a catheter"], ['DSA', "removing bone from the image"], ['venography', "vein imaging"], ['MUGA scan', "measuring EF with a radioactive tracer"]]),
          M("What is imaging the veins with contrast called?", ['venography', 'angioplasty', 'phlebotomy', 'arteriography'], 'ven/o + -graphy.'),
          B("In DSA, the word subtraction means ___.", ["taking away", "adding", "enlarging"], "The bones are taken away from the image."),
          S("Spell the term for the process of imaging vessels with contrast", 'angiography', 'angi/o + -graphy.', 'angio…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: "Cardiac catheterisation", icon: '🪡', items: [
          L("A tube to the heart", `A <b>catheter</b> is a thin, flexible tube. In <b>cardiac catheterization</b> it is inserted through the thigh (femoral) or wrist (radial) artery and guided by X-ray to the heart and coronaries.${fig('catheterization', '', "A: catheter from the femoral artery to the aortic arch; B: other routes in the arm: the brachial and radial arteries.")}`),
          M("Through which vessels is a heart catheter usually inserted?", ["femoral or radial artery", 'jugular vein', 'carotid artery', 'pulmonary vein'], "Thigh or wrist."),
          L("Right and left catheterisation", `${vs(['left heart catheterization', "through an artery; examines the coronaries and left ventricle"], ['right heart catheterization', "through a vein; pressures in the right atrium, right ventricle and pulmonary artery"])}${fig('catheter-arm', '', "The catheter passes from the basilic vein of the arm and the subclavian vein to the right atrium and right ventricle.")}${pearl("After a catheter through the groin, the patient keeps the leg straight for a few hours and the puncture site is checked for bleeding and the foot pulses below it.")}`),
          T("For right heart catheterization, the catheter is inserted through an artery.", false, "False; it is inserted through a vein to reach the right heart."),
          O("Order the steps of coronary catheterisation", ["local anaesthetic at the wrist or groin", "insert the catheter into the artery", "guide the catheter to the start of the coronary", "inject contrast and take the angiogram", "remove the catheter and press on the site"], "From entry to exit."),
          P("Match each term to its meaning", [['catheter', "thin, flexible tube"], ['contrast dye', "dye that improves imaging"], ['femoral artery', "thigh artery"], ['basilic vein', "arm vein"]]),
          B("The word catheterization is built from ___.", ['catheter + -ization', 'cardi/o + -tomy', 'cath/o + -lysis'], "Inserting a catheter."),
          M("After angiography through the groin, a patient has a cold, pulseless leg. Which vessel has the problem?", ['femoral artery', 'jugular vein', 'radial artery', 'coronary sinus'], "The catheter entry site.", [["Method", "angiography through the groin"], ["finding", "cold leg, weak dorsalis pedis pulse"]]),
          L("Review of the level “Diagnosis and imaging”", recap(["echocardiography (and TEE through the oesophagus) and Doppler ultrasonography use sound waves", "blood: troponin and CK-MB for MI • BNP for failure • CRP inflammation • lipid profile", "angiography is the process and the angiogram the image; CT angiography, DSA, venography, MUGA scan", "cardiac catheterization: left through the femoral or radial artery; right through a vein"])),
          N('d2t:tx')
        ]
      },

      /* ================= سطح ۲: باز کردن رگ و جراحی ================= */
      {
        id: 'tx4', title: "Balloons and opening vessels", icon: '🎈', items: [
          L("Inflating a balloon in the narrowing", `${wb('angi/o', '-plasty')} = <b>angioplasty</b>: repair of a vessel. In <b>balloon angioplasty</b> a thin <b>guidewire</b> is first passed through the narrowing and the balloon catheter slides over it to the narrowed spot; the balloon is inflated and presses the plaque into the wall.${fig('angioplasty', '', "A balloon catheter heading to a coronary artery; the deflated balloon, the inflated balloon and restored flow.")}`),
          M("In angioplasty, the suffix -plasty means…", ["repair", "removal", "incision", "recording"], 'angi/o + -plasty.'),
          O("Order the steps of balloon angioplasty", ["insert the guidewire and balloon catheter", "bring the balloon to the plaque", "inflate the balloon and compress the plaque", "deflate and remove the balloon"], "As in figures A to D."),
          L("Step by step", `${fig('balloon-steps', '', "A: the uninflated balloon enters the artery; B: the balloon is inflated; C: the balloon is deflated and removed; D: the lumen is open.")}Clinical name: PTCA or <b>PCI</b> (percutaneous coronary intervention); percutaneous means “through the skin” (per- + cutane/o).`),
          L("Other ways to open a vessel", `• <b>atherectomy</b>: shaving and removing plaque with a tool on the catheter tip (ather/o + -ectomy)<br>• <b>thrombolysis</b>: dissolving a clot with a thrombolytic drug<br>• <b>embolectomy</b>: removing an embolus${vs(['angioplasty', "presses the plaque into the wall"], ['atherectomy', "removes the plaque"])}${memo("Read PCI letter by letter: Percutaneous (through the skin), Coronary, Intervention: from a tiny skin puncture all the way to the coronary.")}`),
          P("Match each method to its job", [['angioplasty', "compressing plaque with a balloon"], ['atherectomy', "removing plaque"], ['thrombolysis', "dissolving a clot"], ['embolectomy', "removing an embolus"]]),
          T("Percutaneous means “through a large surgical incision”.", false, "False; it means “through the skin”, via a small puncture."),
          B("Removing plaque from inside an artery with a catheter tool is called ___.", ['atherectomy', 'angioplasty', 'endarterectomy'], 'ather/o + -ectomy.'),
          S("Spell the term for repair of a vessel, as with a balloon", 'angioplasty', 'angi/o + -plasty.', 'angio…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx5', title: "Stents and vessel surgery", icon: '🕸️', items: [
          L("A metal mesh to stay open", `A <b>stent</b> is a small metal mesh mounted on a balloon; it opens as the balloon inflates and stays in the wall so the vessel does not narrow again.${fig('stent', '', "A: a closed stent on a deflated balloon; B: the inflated balloon opens the stent; C: the open stent stays in the vessel.")}`),
          M("Why is a stent placed after angioplasty?", ["so the vessel does not narrow again", "so the clot dissolves", "so the heartbeat becomes regular", "so blood pressure rises"], "It prevents restenosis."),
          L("In a coronary artery", `${fig('stent-placement', '', "A catheter with a balloon and stent in a coronary artery; the balloon inflates and the open stent presses the plaque into the wall.")}• <b>restenosis</b>: narrowing again (re- + stenosis)<br>• <b>drug-eluting stent</b>: a stent that slowly releases a drug to reduce restenosis${pearl("After a stent, the patient takes two antiplatelet drugs (such as aspirin and clopidogrel) for months so no clot forms on the stent; stopping them without advice is dangerous.")}`),
          T("Restenosis means a vessel narrowing again after treatment.", true, "re- = again."),
          L("Surgery on large arteries", `• <b>endarterectomy</b>: removing plaque together with the artery’s inner layer (endo- + arteri/o + -ectomy); mostly in the carotid${fig('endarterectomy', '', "Carotid endarterectomy: neck incision, opening the artery, removing the plaque and suturing (arteriorrhaphy).")}• <b>aneurysmectomy</b>: removing an aneurysm and placing a graft (artificial vessel)${fig('aaa-graft', '', "An artificial graft inside an abdominal aortic aneurysm.")}`),
          M("What is surgical removal of plaque from the carotid artery called?", ['endarterectomy', 'atherectomy', 'angioplasty', 'aneurysmectomy'], 'endo- + arteri/o + -ectomy.'),
          L("Treating varicose veins", `${tbl([["Method", "Description"], [e('sclerotherapy'), "injecting a solution that hardens and closes the vein"], [e('ligation and stripping'), "tying off (ligation) and pulling out the vein"], [e('endovenous laser ablation'), "closing the vein from inside with a laser"]])}${memo("ligation = tying off (Latin ligare, to bind), like knotting the end of a tube.")}`),
          P("Match each method to its job", [['stent', "keeping the vessel open"], ['endarterectomy', "surgical removal of plaque"], ['sclerotherapy', "closing a vein by injection"], ['graft', "replacement vessel"]]),
          W("Build a word meaning “removal of the inner layer of an artery”", ['endo-', 'arteri/o', '-ectomy'], ['-plasty', 'ather/o', 'peri-'], 'endarterectomy.'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx6', title: "heart surgery", icon: '🫀', items: [
          L("Coronary bypass", `<b>Coronary artery bypass graft</b> (CABG, said “cabbage”) means building a new route for blood around a narrowing: a healthy vessel (the great saphenous vein or internal mammary artery) is connected from the aorta to beyond the coronary narrowing.${fig('cabg', '', "A bypass graft from the aorta to the left anterior descending artery, beyond the blockage.")}`),
          M("In CABG, where is the graft vessel usually taken from?", ["the great saphenous vein of the leg", 'jugular vein', 'femoral artery', 'pulmonary vein'], "Or the internal mammary artery of the chest."),
          L("Artificial heart and lungs", `In open-heart surgery the heart is stopped and <b>extracorporeal circulation</b> (circulation outside the body; extra- + corpor/o = body) is provided by the heart-lung machine, run by the perfusionist.${vs(['on-pump CABG', "with the heart-lung machine and the heart stopped"], ['off-pump CABG', "on the beating heart"])}`),
          T("Extracorporeal circulation means circulation inside the heart.", false, "False; extra- means outside; it is circulation outside the body."),
          L("Valve surgery and transplant", `${tbl([["surgery", "Meaning"], [e('valve replacement'), "replacing a valve with a mechanical or tissue valve"], [e('valvuloplasty'), "repairing a valve; sometimes with a balloon"], [e('commissurotomy'), "cutting where the cusps have fused in mitral stenosis"], [e('heart transplant'), "heart transplant"], [e('ventricular assist device'), "VAD: a mechanical pump assisting the ventricle"], [e('intra-aortic balloon pump'), "IABP: a balloon in the aorta that inflates in diastole"]])}${pearl("A patient with a mechanical valve takes warfarin for life; a tissue valve needs no long-term anticoagulant but wears out sooner.")}`),
          P("Match each operation to its meaning", [['valvuloplasty', "valve repair"], ['commissurotomy', "cutting fused cusps"], ['VAD', "ventricle assist pump"], ['CABG', "coronary bypass graft"]]),
          B("In valvuloplasty, the root valvul/o means ___.", ["valve", "vessel", "muscle"], 'valvul/o + -plasty.'),
          M("Which device inflates in diastole to increase coronary blood supply?", ['intra-aortic balloon pump', 'Holter monitor', 'pacemaker', 'stent'], "The IABP in the aorta."),
          L("Review of the level “Opening vessels and surgery”", recap(["angioplasty (PCI) with a balloon; atherectomy removes plaque; thrombolysis and embolectomy", "a stent keeps the vessel open and prevents restenosis; antiplatelets afterwards", "endarterectomy in the carotid; aneurysmectomy with a graft; sclerotherapy and ligation and stripping for varicose veins", "CABG with the saphenous vein or internal mammary artery; extracorporeal circulation; valve replacement, valvuloplasty, VAD and IABP"])),
          N('m2r:tx')
        ]
      },

      /* ================= سطح ۳: دارو، ضربان‌ساز و احیا ================= */
      {
        id: 'tx7', title: "Heart and blood pressure drugs", icon: '💊', items: [
          L("The drug map", `Each drug class has its own place in the heart and vessels. All drugs that lower blood pressure are together called <b>antihypertensives</b> (anti- + hypertension).${fig('drug-map')}`),
          L("Pressure and rate drugs", `${tbl([["Category", "Job", "Example"], [e('beta-blocker'), "slows the heartbeat, lowers pressure", 'metoprolol'], [e('ACE inhibitor'), "widens vessels by blocking an enzyme", 'enalapril'], [e('ARB'), 'angiotensin receptor blocker', 'losartan'], [e('calcium channel blocker'), "widens vessels, slows the heartbeat", 'amlodipine'], [e('diuretic'), "removes water and salt in the urine", 'furosemide']])}${memo("The drug name’s ending gives away its class: -olol beta blocker, -pril ACE inhibitor, -sartan ARB and -dipine calcium channel blocker.")}`),
          M("Which class does lisinopril belong to?", ['ACE inhibitor', 'beta-blocker', 'ARB', 'statin'], '‎-pril.'),
          P("Match each ending to its class", [['-olol', 'beta-blocker'], ['-pril', 'ACE inhibitor'], ['-sartan', 'ARB'], ['-dipine', 'calcium channel blocker']]),
          L("Heart drugs", `• <b>nitroglycerin</b>: a vasodilator; under the tongue to relieve angina<br>• <b>digoxin</b>: stronger contraction and a slower rate in heart failure<br>• <b>antiarrhythmic</b>: steadies the rhythm, such as amiodarone<br>• <b>vasopressor</b>: narrows vessels and raises pressure in shock${pearl("Nitroglycerin is placed under the tongue; if the pain is not gone after 3 tablets 5 minutes apart, an MI is likely and emergency services must be called.")}`),
          M("Which drug does an angina patient put under the tongue for instant relief?", ['nitroglycerin', 'digoxin', 'warfarin', 'statin'], "A fast vasodilator."),
          T("A diuretic reduces swelling and blood pressure by removing water and salt.", true, "Such as furosemide in CHF."),
          B("A drug given to steady the heart rhythm is called an ___.", ['antiarrhythmic', 'antihypertensive', 'anticoagulant'], 'anti- + arrhythmia.'),
          M("What are drugs that lower blood pressure called in general?", ['antihypertensive', 'vasopressor', 'thrombolytic', 'antiarrhythmic'], 'anti- + hypertension.'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx8', title: "Clot and lipid drugs", icon: '🩸', items: [
          L("Three different jobs with clots", `${tbl([["Category", "Job", "Example"], [e('antiplatelet agent'), "stops platelets sticking", "aspirin, clopidogrel"], [e('anticoagulant'), "prevents clots forming", "heparin, warfarin"], [e('thrombolytic agent'), "dissolves an existing clot", 'tPA']])}${memo("anti = preventing new clots; thrombo-lytic = dissolving a clot that already exists. An anticoagulant does not dissolve a clot!")}`),
          M("Which class of drug dissolves an existing clot?", ['thrombolytic agent', 'anticoagulant', 'antiplatelet agent', 'statin'], 'thromb/o + -lytic.'),
          L("Two anticoagulants", `${vs(['heparin', "injected, fast-acting; in hospital"], ['warfarin', "oral, slow-acting; monitored with the INR test"])}${pearl("A patient on warfarin must keep their intake of leafy greens (vitamin K) steady, because vitamin K weakens the drug.")}`),
          T("An anticoagulant dissolves a clot that has already formed.", false, "False; it only stops new clots forming. Dissolving is the job of a thrombolytic."),
          L("blood fats", `${fig('lipids')}${tbl([["fat", "Note"], [e('LDL'), "low-density lipoprotein: “bad” cholesterol; should be low"], [e('HDL'), "high-density lipoprotein: “good” cholesterol; should be high"], [e('triglycerides'), "storage fat; rises with lots of sugar and fat"], [e('cholesterol'), "total blood cholesterol"]])}High blood fats are called <b>hyperlipidemia</b> and high cholesterol <b>hypercholesterolemia</b>. A <b>statin</b> (such as atorvastatin) reduces cholesterol production in the liver and lowers LDL.`),
          P("Match each term to its meaning", [['LDL', "bad cholesterol"], ['HDL', "good cholesterol"], ['statin', "lowering LDL"], ['hyperlipidemia', "high blood fats"]]),
          M("Which drug lowers LDL?", ['statin', 'digoxin', 'diuretic', 'heparin'], "Such as atorvastatin."),
          B("HDL is called ___ cholesterol.", ["good", "bad", "toxic"], "H for Healthy."),
          S("Spell the term for a drug that prevents clotting", 'anticoagulant', "anti- + coagul (clotting) + -ant.", 'anti…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx9', title: "Pacemakers, shocks and resuscitation", icon: '⚡', items: [
          L("artificial pacemaker", `When the SA node or conduction pathway fails (as in heart block), an <b>artificial pacemaker</b> is implanted under the skin of the chest, and its wire (lead) runs through a vein to the right ventricle to make the beats.${fig(['pacemaker', 'pacemaker-xray'], ["A pacemaker under the skin with its lead at the tip of the right ventricle", "A pacemaker on a chest X-ray"])}`),
          M("A patient with complete heart block and a rate of 38 needs which treatment?", ['artificial pacemaker', 'statin', 'sclerotherapy', 'endarterectomy'], "Making artificial beats."),
          L("Electric shocks", `${vs(['defibrillation', "unsynchronised shock for ventricular fibrillation and cardiac arrest"], ['cardioversion', "shock timed to the QRS for atrial fibrillation or flutter"])}• <b>ICD</b> (implantable cardioverter-defibrillator): an implanted device that detects VF and delivers a shock by itself<br>• <b>catheter ablation</b>: burning away an extra electrical pathway (as in WPW) with a catheter${fig('defibrillation', '', "Defibrillating a patient in cardiac arrest with pads on the chest.")}`),
          P("Match each method to its job", [['defibrillation', "shock for VF"], ['cardioversion', "timed shock for AF"], ['ICD', "implanted shock device"], ['catheter ablation', "burning away an extra electrical pathway"]]),
          L("cardiopulmonary resuscitation", `<b>Cardiopulmonary resuscitation</b> (CPR): cardi/o (heart) + pulmon/o (lung) + resuscitation (reviving).${fig('cpr-steps')}Chest compressions: 100 to 120 a minute, 5 to 6 centimetres deep. An <b>AED</b> (automated external defibrillator) analyses the rhythm itself and gives spoken instructions.${pearl("The AED is designed for the public; airports and gyms have them. Every minute’s delay in shocking VF cuts the chance of survival by about 10 per cent.")}`),
          O("Order the steps of helping an unconscious person", ["check response and breathing", "call emergency services and fetch an AED", "start CPR with chest compressions", "attach the AED and shock if needed"], "As in the figure: check, call, CPR, AED."),
          T("An AED analyses the heart rhythm by itself.", true, "automated = automatic."),
          B("In adult CPR, the chest is compressed ___ times a minute.", ["100 to 120", "30 to 40", "200 to 250"], "Hard and fast."),
          L("Review of the level “Drugs, pacemakers and resuscitation”", recap(["pressure and rate: beta-blocker (-olol), ACE inhibitor (-pril), ARB (-sartan), calcium channel blocker, diuretic", "heart: nitroglycerin for angina, digoxin, antiarrhythmic, vasopressor", "clots: antiplatelet (aspirin) • anticoagulant (heparin, warfarin) • thrombolytic (tPA); statin for LDL", "artificial pacemaker, defibrillation for VF, cardioversion for AF, ICD, catheter ablation; CPR and AED"])),
          N('ab:tx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* تپش — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: "Snippy", title: "The Word Breaker", shape: 'puzzle', color: '#8C96F0', acc: ['sparkle'], bio: "Breaks every scary word into prefix, root and suffix and reads it from the end: pericarditis means inflammation around the heart." },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Graphy", title: "Master of gram and graph", shape: 'monitor', color: '#6C4FD8', acc: ['glasses'], bio: "Knows the difference between the tracing (gram), the device (graph) and the act of recording (graphy), and never mixes up electrocardiogram with electrocardiograph." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Pluro", title: "Master of Singular and Plural", shape: 'book', color: '#4F5BD5', acc: ['crown'], bio: "Turns atrium into atria, thrombus into thrombi and varix into varices, without a single extra s!" },
    { id: 'an-0', w: 'an', lv: 0, name: "Quad", title: "Owner of Four Chambers", shape: 'heart', color: '#E03131', acc: ['sparkle'], bio: "Two atria on top receive the blood and two ventricles below pump it out; the dividing wall keeps the two halves’ blood from mixing." },
    { id: 'an-1', w: 'an', lv: 1, name: "Valvy", title: "Guardian of the One-Way Route", shape: 'valve', color: '#F59F00', acc: ['headband'], bio: "Tricuspid, pulmonary, mitral and aortic: they open and close in turn, and the heart’s lubb-dupp is their work." },
    { id: 'an-2', w: 'an', lv: 2, name: "Corona", title: "The Heart’s Crown", shape: 'blob', color: '#C92A2A', acc: ['crown'], bio: "Rings the heart like a crown and supplies the heart muscle itself; the LAD is the branch that must never close." },
    { id: 'ep-0', w: 'ep', lv: 0, name: "Spark", title: "Sinus Node", shape: 'flame', color: '#F08C00', acc: ['sparkle'], bio: "The heart’s natural pacemaker; from the wall of the right atrium it starts every beat with a spark, 60 to 100 times a minute." },
    { id: 'ep-1', w: 'ep', lv: 1, name: "Strip", title: "ECG Reader", shape: 'monitor', color: '#2F9E44', acc: ['glasses'], bio: "Reads the P wave as atrial contraction, the QRS as ventricular contraction and the T as ventricular recovery; always keeps an eye on the ST segment." },
    { id: 'ep-2', w: 'ep', lv: 2, name: "Cuffy", title: "Counter of Systole and Diastole", shape: 'scale', color: '#1C7ED6', acc: ['crown'], bio: "With a cuff and stethoscope, reads the top number (systolic) and bottom number (diastolic): 120 over 80 mmHg." },
    { id: 'vc-0', w: 'vc', lv: 0, name: "Droplet", title: "Traveller of Two Circuits", shape: 'drop', color: '#E03131', acc: ['sparkle'], bio: "Goes from the right ventricle to the lungs for oxygen and from the left ventricle to the whole body; each circuit takes less than a minute." },
    { id: 'vc-1', w: 'vc', lv: 1, name: "Branchy", title: "The Capillary Network", shape: 'yab', color: '#0C8599', acc: ['glasses'], bio: "Leads the artery down to arterioles and capillaries and gathers it again into venules and veins; oxygen exchange is the capillaries’ job." },
    { id: 'vc-2', w: 'vc', lv: 2, name: "Lympho", title: "Drain of the Tissues", shape: 'bean', color: '#12B886', acc: ['crown'], bio: "Collects excess tissue fluid and filters it through the lymph nodes to return it to the blood through the thoracic duct." },
    { id: 'ds-0', w: 'ds', lv: 0, name: "Plaquo", title: "The Sticky Atheroma", shape: 'blob', color: '#F2C94C', acc: ['sparkle'], bio: "Made of bad cholesterol (LDL), it settles in the artery wall; its job is narrowing the channel. Exercise and statins are its enemies!" },
    { id: 'ds-1', w: 'ds', lv: 1, name: "Clotty", title: "Thrombus and Embolus", shape: 'cloud', color: '#A61E4D', acc: ['headband'], bio: "Stuck to the wall it is a thrombus; on the move it is an embolus; if it lodges in the lung it causes a pulmonary embolism." },
    { id: 'ds-2', w: 'ds', lv: 2, name: "Quiver", title: "The Playful Arrhythmia", shape: 'bubble', color: '#AE3EC9', acc: ['crown'], bio: "Sometimes fast (tachycardia), sometimes slow (bradycardia) and sometimes quivering (fibrillation); the ECG gives it away." },
    { id: 'tx-0', w: 'tx', lv: 0, name: "Springy", title: "The Stent That Holds It Open", shape: 'stent', color: '#868E96', acc: ['sparkle'], bio: "After balloon angioplasty it opens inside the coronary artery and stays there so the vessel does not narrow again." },
    { id: 'tx-1', w: 'tx', lv: 1, name: "Capsule", title: "The Heart Pharmacist", shape: 'capsule', color: '#2F9E44', acc: ['glasses'], bio: "Knows beta blockers, diuretics, statins and anticoagulants, and where each acts in the heart and vessels." },
    { id: 'tx-2', w: 'tx', lv: 2, name: "Shocker", title: "The Rescue Defibrillator", shape: 'aed', color: '#37B24D', acc: ['crown'], bio: "When the ventricles fibrillate, it restores the rhythm with one shock; CPR’s constant companion in cardiac arrest." }
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
/* تپش — راند بالینی: پرونده‌های چندمرحله‌ای
 * پرونده‌ها از مطالعات موردی فصل‌های پیوست (مرد ۵۶ ساله با درد قفسه سینه، خانم تاگارت و تعویض دریچه میترال،
 * یادداشت‌های پرونده بخش قلب) و موقعیت‌های رایج بالینی ساخته شده‌اند؛ هدف: به کار بردن واژه‌های قلب و عروق در دل یک پرونده واقعی.
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان قلب ================= */
    {
      id: 'r1', w: 'lx', title: "A note full of codes", who: "Cardiology consult on the medical ward",
      brief: "The cardiologist has written a consult note for a medical ward patient. A new student must “translate” it for the ward nurse. Break each word apart and read it from the end.",
      chart: [["Complaint", "CP and SOB"], ["history of", "HTN for 10 years"], ["examination", "tachycardia, no murmur"], ["chest X-ray", 'cardiomegaly']],
      fig: { a: ['wordparts'], l: ["The anatomy of a word"] },
      steps: [
        P("abbreviation", "Match each abbreviation in the note to its meaning", [['CP', "chest pain"], ['SOB', "shortness of breath"], ['HTN', "high blood pressure"], ['CV', "heart and blood vessels"]]),
        M("Term", "cardiomegaly means…", ["enlarged heart", "inflammation of the heart", "fast heartbeat", "hardening of the arteries"], "cardi/o (heart) + -megaly (enlargement)."),
        M("Term", "tachycardia means…", ["fast heartbeat, over 100 a minute", "slow beat", "irregular beat", "heartbeat stopping"], "tachy- (fast) + -cardia (heart condition)."),
        O("Build", "Arrange the parts of the word for “inflammation around the heart” in writing order", ['peri-', 'cardi/o', '-itis'], "pericarditis: peri- (around) + cardi/o (heart) + -itis (inflammation)."),
        T("Adjective", "cardiac and coronary are both adjectives relating to the heart.", true, "cardi/o + -ac; coron/o (crown, heart) + -ary."),
        S("Spelling", "Spell the word for a doctor specialising in the heart", 'cardiologist', 'cardi/o + -logist.', 'cardio…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: "Three sheets from one test", who: "A 40-year-old man in clinic",
      brief: "An ECG has been ordered for the patient. The clinic secretary sees three similar words on the sheets: the device, the tracing itself and the act of recording. Each must be filed correctly.",
      chart: [["Request", 'electrocardiography'], ["system", "electrocardiograph no. 2"], ["Result", 'electrocardiogram: NSR'], ["Beat", "72 bpm"]],
      fig: { a: ['gram-graph'], l: ["gram, graph and graphy"] },
      steps: [
        P("suffix", "Match each suffix to its meaning", [['-gram', "result of recording (tracing)"], ['-graph', "recording machine"], ['-graphy', "process of recording"], ['-scope', "instrument for seeing or hearing"]]),
        M("Term", "What is the sheet with the heartbeat curve printed on it called?", ['electrocardiogram', 'electrocardiograph', 'electrocardiography', 'echocardiography'], "-gram means the record itself."),
        M("abbreviation", "bpm means…", ["beats per minute", "blood pressure", "pulse per second", "millimetres of mercury"], 'beats per minute.'),
        T("abbreviation", "ECG and EKG both mean the heart tracing.", true, "EKG comes from the German spelling Elektrokardiogramm."),
        M("root", "In electrocardiogram, the root electr/o means…", ["electricity", "sound", "pressure", "image"], "electr/o = electricity."),
        S("Spelling", "Spell the term for the process of recording the heart’s electricity", 'electrocardiography', 'electr/o + cardi/o + -graphy.', 'electro…')
      ]
    },
    /* ================= ساختمان قلب ================= */
    {
      id: 'r3', w: 'an', title: "mitral valve replacement", who: "Mrs Taggart, 63",
      brief: "Mrs Taggart has been admitted for mitral valve replacement and asks the nurse where this valve is in the heart and what it does. Her valve does not close well and blood leaks back into the atrium.",
      chart: [["diagnosis", 'mitral regurgitation'], ["Echo", "enlarged LA, LV with EF 50%"], ["Plan", 'MVR'], ["listening", "systolic murmur at the apex"]],
      fig: { a: ['heart-interior'], l: ["Inside the heart and its valves"] },
      steps: [
        M("Location", "The mitral valve lies between which two chambers?", ["left atrium and left ventricle", "right atrium and right ventricle", "left ventricle and aorta", "right ventricle and pulmonary artery"], "The left atrioventricular valve."),
        M("Cusp", "How many cusps does the mitral valve have?", ["two (bicuspid)", "three", "four", "one"], "That is why it is also called the bicuspid valve."),
        M("Term", "regurgitation means…", ["blood leaking back through a valve that does not close well", "narrowing of a valve", "inflammation of a valve", "absence of a valve"], "Its other name is insufficiency."),
        M("abbreviation", "MVR means…", ["mitral valve replacement", "mitral valve prolapse", "left ventricular failure", "repair of a dividing wall"], "mitral valve replacement; MVP is prolapse."),
        O("Path", "Order the path of blood through the left half of the heart", ["pulmonary veins", "left atrium", "mitral valve", "left ventricle", "aorta"], "From the lungs to the left atrium, through the mitral to the left ventricle and then the aorta."),
        T("listening", "A murmur is an extra sound caused by turbulent blood flow.", true, "A faulty valve makes the flow turbulent."),
        S("Spelling", "Spell the name of the two-cusped left AV valve (one word only)", 'mitral', "mitral: shaped like a bishop’s hat (mitre).", 'mit…')
      ]
    },
    {
      id: 'r4', w: 'an', title: "A sound that should not be there", who: "6-week-old baby",
      brief: "While listening to a baby’s heart, the paediatrician hears a harsh sound. The baby tires quickly when feeding. An echocardiogram shows a small hole in the wall between the two ventricles.",
      chart: [["listening", "murmur at the left sternal border"], ["Echo", "small VSD"], ["Skin colour", "no cyanosis"], ["Referral", 'pediatric cardiologist']],
      fig: { a: ['heart-defects'], l: ["Congenital defects"] },
      steps: [
        M("Term", "interventricular septum means…", ["the wall between the two ventricles", "wall between the two atria", "the outer layer of the heart", "the valve between atrium and ventricle"], "inter- (between) + ventricul/o (ventricle) + -ar."),
        M("abbreviation", "VSD means…", ["ventricular septal defect", "atrial septal defect", "aortic narrowing", "patent ductus arteriosus"], 'ventricular septal defect.'),
        M("Specialty", "Which specialist follows up this baby?", ['pediatric cardiologist', 'cardiac surgeon', 'perfusionist', 'electrophysiologist'], "A paediatric cardiologist."),
        M("Term", "congenital means…", ["present from birth", "acquired in old age", "infectious", "inherited from the father"], "con- (with) + genit (birth) + -al."),
        T("blood", "In a VSD, some blood from the left ventricle passes through the hole to the right ventricle.", true, "Pressure is higher in the left ventricle."),
        P("hollow space in the body", "Match each chamber to its job", [['right atrium', "receiving blood from the body"], ['right ventricle', "sending blood to the lungs"], ['left atrium', "receiving blood from the lungs"], ['left ventricle', "sending blood to the body"]]),
        S("Spelling", "Spell the term for the heart’s dividing wall", 'septum', "Its plural is septa.", 'sep…')
      ]
    },
    /* ================= ضربان، هدایت و فشار ================= */
    {
      id: 'r5', w: 'ep', title: "Palpitations the night before an exam", who: "21-year-old student",
      brief: "After several cups of coffee and a sleepless night before an exam, a student complains of the “heart racing”. The ECG shows a regular sinus rhythm at 120. To be sure, the doctor fits a 24-hour Holter.",
      chart: [["Complaint", 'palpitation'], ['ECG', "sinus tachycardia, HR 120 bpm"], ['BP', "130/85 mmHg"], ["Plan", "24-hour Holter monitor"]],
      fig: { a: ['rate-strips'], l: ["Slow, normal and fast heart rate"] },
      steps: [
        M("Term", "palpitation means…", ["feeling the heart beat fast or hard", "feeling the abdomen by touch", "chest pain", "fainting"], "palpitate = to throb."),
        M("Rhythm", "What is a rhythm that starts in the SA node called?", ['sinus rhythm', 'atrial fibrillation', 'heart block', 'asystole'], "The sinoatrial node is the natural pacemaker."),
        M("Number", "What is a rate of 120 a minute called?", ['tachycardia', 'bradycardia', 'normal sinus rhythm', 'asystole'], "Over 100 = fast."),
        M("Instrument", "What does a Holter monitor do?", ["records the ECG for 24 to 48 hours during normal life", "measures blood pressure once", "takes a sound image of the heart", "corrects the rhythm with a shock"], "A long recording to catch occasional rhythms."),
        O("Conduction", "Order the path of the heart’s electrical current", ['SA node', 'AV node', 'bundle of His', 'bundle branches', 'Purkinje fibers'], "From the pacemaker to the ventricle walls."),
        T("pressure", "In 130/85, the 130 is the systolic pressure.", true, "The top number = pressure while the ventricles contract."),
        S("Spelling", "Spell the term for a fast heart rate", 'tachycardia', 'tachy- + -cardia.', 'tachy…')
      ]
    },
    {
      id: 'r6', w: 'ep', title: "Dizziness and a rate of 38", who: "A 78-year-old man",
      brief: "An elderly man has had several dizzy spells and has fainted once. His radial pulse is 38 a minute. On the ECG the P waves are regular but none is followed by a QRS: complete heart block. An artificial pacemaker is implanted.",
      chart: [["Complaint", "syncope and dizziness"], ["pulse", "38 bpm, regular"], ['ECG', 'CHB'], ["treatment", 'artificial pacemaker']],
      fig: { a: ['pacemaker'], l: ["pacemaker implantation"] },
      steps: [
        M("Term", "syncope means…", ["fainting; a brief loss of consciousness", "cough", "pounding heartbeat", "shortness of breath"], "Reduced blood supply to the brain."),
        M("Number", "What is a rate of 38 a minute called?", ['bradycardia', 'tachycardia', 'fibrillation', 'flutter'], "brady- = slow; under 60."),
        M("pulse", "Where is the radial pulse felt?", ["wrist, thumb side", "neck", "behind the knee", "groin"], "The radial artery is on the thumb side of the forearm."),
        M("abbreviation", "CHB means…", ["complete heart block", "congestive heart failure", "congenital heart disease", "coronary artery disease"], "complete heart block: no signal gets through the AV node."),
        T("Wave", "On the ECG, the QRS shows ventricular contraction.", true, "P belongs to the atria and QRS to the ventricles."),
        M("treatment", "What does an artificial pacemaker do?", ["keeps the beat regular with electrical pulses", "dissolves clots", "lowers blood pressure", "opens a narrowed vessel"], "It stands in for the natural pacemaker."),
        S("Spelling", "Spell the term for a device that sets the heart’s pace", 'pacemaker', "pace (step) + maker.", 'pace…')
      ]
    },
    /* ================= رگ‌ها و گردش خون ================= */
    {
      id: 'r7', w: 'vc', title: "A swollen leg after a flight", who: "A 45-year-old woman",
      brief: "After a 12-hour flight, a woman’s left calf has become swollen, warm and painful. Doppler ultrasound shows a clot in a deep vein of the thigh. The doctor is worried the clot may travel to the lungs.",
      chart: [["Complaint", "edema and pain in the left calf"], ["Doppler", "DVT in the femoral vein"], ["danger", 'PE'], ["treatment", 'anticoagulant']],
      fig: { a: ['dvt'], l: ["deep vein thrombosis"] },
      steps: [
        M("abbreviation", "DVT means…", ["deep vein thrombosis", "valve leakage", "aortic aneurysm", "peripheral vascular disease"], 'deep vein thrombosis.'),
        M("Term", "edema means…", ["swelling from fluid collecting in tissue", "large bruise", "bleeding", "itching"], "Fluid build-up."),
        M("vessel", "Where do veins carry blood?", ["towards the heart", "from the heart to the body", "to the capillaries", "to the liver"], "Artery = Away; vein = towards the heart."),
        M("danger", "If a piece of the clot breaks off and lodges in the pulmonary artery, what is it called?", ['pulmonary embolism', 'myocardial infarction', 'stroke', 'aneurysm'], "The embolus travels and blocks a lung vessel."),
        M("drug", "What does an anticoagulant do?", ["prevents new clots forming", "burns the clot away", "widens the vessel", "slows the heartbeat"], "Such as heparin and warfarin."),
        T("Test", "Doppler ultrasound shows the speed and direction of blood flow.", true, "It uses sound waves."),
        S("Spelling", "Spell the medical term for a blood clot in a vessel", 'thrombus', "Its plural is thrombi.", 'throm…')
      ]
    },
    {
      id: 'r8', w: 'vc', title: "Leg pain on walking", who: "A 66-year-old man who smokes",
      brief: "A man who smokes says his calf cramps after walking two streets and eases when he stands still. The pulses behind the knee and on the foot are weak. Angiography shows narrowing of the femoral artery.",
      chart: [["Complaint", 'claudication'], ["examination", "weak popliteal and dorsalis pedis pulses"], ["diagnosis", 'PAD'], ["Imaging", "angiography: femoral artery narrowing"]],
      fig: { a: ['pulse-points'], l: ["Pulse points"] },
      steps: [
        M("Term", "claudication means…", ["leg pain on walking that eases with rest", "swollen leg", "numb hand", "pounding heartbeat"], "A sign of poor arterial flow."),
        M("abbreviation", "PAD means…", ["peripheral artery disease", "patent ductus arteriosus", "arterial pressure", "pain after surgery"], 'peripheral artery disease.'),
        M("pulse", "Where is the popliteal pulse?", ["behind the knee", "the wrist", "neck", "temple"], "popliteal = behind the knee."),
        M("Layer", "In which layer of the artery wall does plaque settle?", ["tunica intima (inner layer)", 'tunica adventitia', 'pericardium', 'endocardium'], "Atherosclerosis starts in the inner layer."),
        P("vessel", "Match each vessel to its location", [['femoral artery', "thigh"], ['carotid artery', "neck"], ['brachial artery', "arm"], ['radial artery', "the wrist"]]),
        T("image", "Angiography is imaging of vessels with contrast and X-rays.", true, "angi/o (vessel) + -graphy (recording)."),
        S("Spelling", "Spell the term for a vessel carrying blood away from the heart", 'artery', "Plural: arteries.", 'art…')
      ]
    },
    /* ================= بیماری‌ها ================= */
    {
      id: 'r9', w: 'ds', title: "Chest pain with every stair", who: "A 56-year-old man",
      brief: "A man with a history of high blood pressure has had chest pain and breathlessness with light housework for some time. Now he arrives at the emergency department in severe pain; his pressure is 180/110 and the ECG shows a heart attack and atrial fibrillation. He is admitted to the CCU.",
      chart: [["Complaint", "angina pectoris, SOB"], ['BP', "180/110 mmHg"], ['ECG', "MI and AF"], ["treatment", "aspirin, antiarrhythmic, diuretic, vasodilator, O₂"]],
      fig: { a: ['mi'], l: ["heart attack"] },
      steps: [
        M("Term", "angina pectoris means…", ["chest pain from lack of blood to the heart muscle", "inflammation of the heart’s covering", "severe cough", "heartburn"], "pector/o = chest."),
        M("abbreviation", "MI means…", ["heart attack", "mitral valve prolapse", "heart failure", "high blood pressure"], 'myocardial infarction.'),
        M("root", "What are the two roots of myocardial?", ["my/o (muscle) and cardi/o (heart)", "my/o and card (electricity)", "myel/o and cardi/o", "my/o and coron/o"], "myocardial = relating to the heart muscle."),
        M("Rhythm", "atrial fibrillation means…", ["irregular quivering of the atria", "complete cardiac standstill", "slow regular beat", "complete heart block"], "AF: irregular with no P wave."),
        P("drug", "Match each drug to its job", [['aspirin', "stops platelets sticking"], ['diuretic', "removes excess water and salt"], ['vasodilator', "widening vessels"], ['antiarrhythmic', "steadies the rhythm"]]),
        T("pressure", "A pressure of 180/110 is a sign of hypertension.", true, "Above 140/90 is stage 2 hypertension."),
        S("Spelling", "Spell the term for a local lack of blood supply", 'ischemia', "isch/o (holding back) + -emia (blood).", 'isch…')
      ]
    },
    {
      id: 'r10', w: 'ds', title: "Night-time breathlessness and leg swelling", who: "A 72-year-old woman",
      brief: "A woman who had a heart attack years ago now wakes at night breathless and her calves have swollen. The chest X-ray shows a large heart and her blood BNP is raised. Diagnosis: congestive heart failure.",
      chart: [["Complaint", "dyspnea, edema of both calves"], ['CXR', 'cardiomegaly'], ["test", "raised BNP"], ["Echo", "EF 30%"]],
      fig: { a: ['edema'], l: ["pitting edema"] },
      steps: [
        M("abbreviation", "CHF means…", ["congestive heart failure", "congenital heart disease", "complete heart block", "coronary artery disease"], 'congestive heart failure.'),
        M("Term", "dyspnea means…", ["shortness of breath, difficult breathing", "coughing blood", "rapid breathing", "stopped breathing"], "dys- (difficult) + pnea (breathing)."),
        M("Term", "cardiomegaly means…", ["enlarged heart", "small heart", "inflammation of the heart", "hardening of the heart"], 'cardi/o + -megaly.'),
        M("Number", "EF 30% means…", ["the left ventricle pumps out only 30% of its blood with each beat", "the blood pressure is 30", "the heart rate is 30 a minute", "30% of the vessels are blocked"], "A normal ejection fraction is 55 to 70 per cent."),
        M("drug", "Which drug removes excess body water in the urine?", ['diuretic', 'statin', 'anticoagulant', 'antiarrhythmic'], "Diuretics reduce swelling in heart failure."),
        T("test", "BNP is a hormone released by stretched ventricles.", true, "A raised BNP is a sign of heart failure."),
        S("Spelling", "Spell the term for swelling from fluid in the tissues", 'edema', "edema; in British English, oedema.", 'ede…')
      ]
    },
    /* ================= تشخیص، درمان و دارو ================= */
    {
      id: 'r11', w: 'tx', title: "Angiography and stent", who: "A 52-year-old man",
      brief: "A man with raised troponin and chest pain is taken to the catheter lab. The catheter is passed from the femoral artery to the heart. Coronary angiography shows a 90 per cent narrowing of the LAD, which is opened with a balloon and held open with a stent.",
      chart: [["test", "raised troponin"], ["Method", "cardiac catheterization through the femoral artery"], ["finding", "90% stenosis of the LAD"], ["treatment", "PTCA and stent; aspirin and statin"]],
      fig: { a: ['stent'], l: ["balloon and stent"] },
      steps: [
        M("test", "What does a raised troponin in the blood indicate?", ["heart muscle damage", "low red blood cells (anaemia)", "lung infection", "high cholesterol"], "A heart muscle protein."),
        M("Method", "cardiac catheterization means…", ["passing a thin tube through a vessel to the heart", "opening the chest", "a 24-hour ECG", "heart ultrasound"], "The catheter is inserted through an arm or thigh vessel."),
        M("abbreviation", "LAD means…", ["left anterior descending artery", "left atrium", "left ventricle", "abdominal part of the aorta"], 'left anterior descending.'),
        O("treatment", "Order the stages of angioplasty", ["the balloon catheter reaches the narrowing", "the balloon inflates and presses the plaque into the wall", "the stent opens", "the balloon and catheter are withdrawn"], "The stent stays in the vessel."),
        M("abbreviation", "PTCA means…", ["percutaneous coronary angioplasty", "coronary bypass surgery", "cardiopulmonary resuscitation", "valve replacement"], 'percutaneous transluminal coronary angioplasty.'),
        T("drug", "A statin lowers blood cholesterol.", true, "It blocks cholesterol production in the liver."),
        S("Spelling", "Spell the term for opening a vessel with a balloon", 'angioplasty', 'angi/o + -plasty.', 'angio…')
      ]
    },
    {
      id: 'r12', w: 'tx', title: "Cardiac arrest at the gym", who: "A 48-year-old man",
      brief: "A man suddenly collapses at the gym; he is not breathing and has no carotid pulse. The trainer starts CPR and a colleague fetches the gym’s AED. The device detects ventricular fibrillation and delivers a shock. Later an ICD is implanted for him.",
      chart: [["State", "unresponsive, no pulse"], ["Rhythm", 'VF'], ["Action", "CPR and AED"], ["follow-up", 'ICD']],
      fig: { a: ['cpr-steps'], l: ["The chain of survival"] },
      steps: [
        M("abbreviation", "VF means…", ["ventricular fibrillation", "quivering of the atria", "slow beat", "heart block"], "ventricular fibrillation: the ventricles only quiver."),
        O("Resuscitation", "Order the rescue steps", ["check response and breathing", "call emergency services", "chest compressions (CPR)", "shock with the AED"], "The chain of survival."),
        M("abbreviation", "CPR means…", ["cardiopulmonary resuscitation", "central venous pressure", "C-reactive protein", "chest pain"], 'cardiopulmonary resuscitation.'),
        M("Method", "defibrillation means…", ["an electric shock to end fibrillation", "opening a vessel with a balloon", "dissolving a clot", "implanting a valve"], "de- (removal) + fibrillation."),
        M("abbreviation", "ICD means…", ["implantable defibrillator", "cardiac intensive care unit", "congestive failure", "balloon pump"], 'implantable cardioverter-defibrillator.'),
        T("pulse", "The carotid pulse is felt in the neck.", true, "In an emergency, the carotid pulse is checked."),
        S("Spelling", "Spell the term for the device that shocks the heart out of fibrillation", 'defibrillator', 'de- + fibrill/o + -ator.', 'defib…')
      ]
    }
  ];

})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* تپش — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', "Start a word’s meaning from the suffix: pericarditis means “inflammation” + “around” + “heart”."],
    ['Lx', "-gram is the result of recording (the tracing), -graph the recording device and -graphy the act of recording."],
    ['Lx', "cardi/o, coron/o and the suffix -cardia all refer to the heart; tachycardia means a fast heartbeat."],
    ['Lx', "The plural of atrium is atria, of thrombus thrombi and of varix varices."],
    ['Lx', "ven/o and phleb/o both mean vein; phlebitis is inflammation of a vein."],
    ['Lx', "arteri/o is artery and ather/o fatty plaque; do not mix up arteriosclerosis and atherosclerosis."],
    ['Ana', "The right side of the heart sends oxygen-poor blood to the lungs and the left side sends oxygen-rich blood to the body."],
    ['Ana', "The left ventricle wall is the thickest, because it must send blood to the whole body."],
    ['Ana', "The tricuspid valve is on the right and the mitral (bicuspid) valve on the left; “tri” is three and “bi” is two."],
    ['Ana', "The pulmonary artery is the only artery carrying oxygen-poor blood, and the pulmonary veins the only oxygen-rich veins."],
    ['Ana', "Coronary means crown; the coronary arteries ring the heart like a crown and feed the heart muscle itself."],
    ['ECG', "The SA node is the heart’s natural pacemaker and lies in the wall of the right atrium."],
    ['ECG', "The P wave is atrial contraction, QRS ventricular contraction and T ventricular recovery."],
    ['ECG', "A normal rate is 60 to 100 beats a minute; under 60 is bradycardia and over 100 tachycardia."],
    ['ECG', "The lubb sound comes from the AV valves closing and the dupp from the semilunar valves closing."],
    ['ECG', "In 120/80 the top number is the systolic pressure (contraction) and the bottom number the diastolic pressure (rest)."],
    ['Vas', "An artery carries blood Away from the heart; veins return blood to the heart."],
    ['Vas', "A capillary wall is only one cell thick so oxygen and nutrients pass through easily."],
    ['Vas', "Leg veins have valves; if the valves fail, varicose veins develop."],
    ['Vas', "The pulmonary circulation is the lesser loop (heart → lungs → heart) and the systemic circulation the greater loop (heart → body → heart)."],
    ['Path', "Atherosclerosis is the commonest type of arteriosclerosis: fatty plaque in the artery wall."],
    ['Path', "A thrombus is a fixed clot and an embolus a clot on the move; pulmonary embolism usually comes from a leg DVT."],
    ['Path', "Angina is passing ischaemic pain; in a heart attack (MI) part of the heart muscle actually dies."],
    ['Path', "In ventricular fibrillation the heart only quivers and pumps no blood; the treatment is an immediate shock."],
    ['Path', "The ductus arteriosus should close after birth; if it stays open it is called PDA."],
    ['Rx', "Angioplasty opens a vessel with a balloon and a stent keeps it open."],
    ['Rx', "In CABG a healthy vessel (such as the saphenous vein) makes a route around the coronary narrowing."],
    ['Rx', "An anticoagulant prevents new clots; a thrombolytic dissolves an existing clot."],
    ['Rx', "Troponin is a protein released into the blood by damaged heart muscle; a sensitive sign of heart attack."],
    ['Rx', "LDL is the bad cholesterol (Low: should be low) and HDL the good cholesterol (High: should be high)."]
  ];
  const COLORS = { Lx: '#4F5BD5', Ana: '#E03131', ECG: '#F08C00', Vas: '#0C8599', Path: '#AE3EC9', Rx: '#2F9E44', '': '#D6304F' };
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
/* تپش — کارت‌های واژه (فلش‌کارت) با جعبه لایتنر
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
/* تپش — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مرجع سریع قلب و عروق
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'tapesh.tool';

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
      <p class="disclaimer">⚕️ Tapesh is a learning tool and does not replace medical references or clinical judgment.</p>
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
  const dict = () => `<div class="tpane">${searchBox("Search: valve, stenosis, mitral…")}
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
  const SAMPLES = ['pericarditis', 'cardiomegaly', 'atherosclerosis', 'endarterectomy', 'sphygmomanometer', 'echocardiography', 'thrombophlebitis', 'bradycardia'];
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
    return `<div class="tpane">${searchBox("Search: cardi, heart, -megaly…")}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]} list <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b dir="ltr">${esc(r.a)}</b><span>${esc(r.fa)}</span><small dir="ltr">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox("Search: CABG, infarction, ECG…")}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>Abbreviation</th><th>Full form and meaning</th></tr>${list.map(a => `<tr><td dir="ltr">${esc(a.a)}</td><td><span dir="ltr" class="abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  /* مرجع سریع: جدول‌های پرکاربرد آناتومی که هنگام خواندن پرونده لازم می‌شوند */
  const REF = [
    ["Chambers and valves", [['right atrium → tricuspid → right ventricle', "Right half: oxygen-poor blood from the body"], ['right ventricle → pulmonary valve → pulmonary artery', "to the lungs"], ['pulmonary veins → left atrium → mitral', "oxygen-rich blood from the lungs"], ['left ventricle → aortic valve → aorta', "to the whole body"]]],
    ["Layers of the heart", [['pericardium', "two-layered sac around the heart"], ['epicardium', "outer layer (visceral pericardium)"], ['myocardium', "heart muscle"], ['endocardium', "inner lining of the chambers and valves"]]],
    ["heart tracing (ECG)", [['P wave', "atrial contraction (depolarisation)"], ['QRS complex', "ventricular contraction (depolarisation)"], ['T wave', "ventricular recovery (repolarisation)"], ['ST segment', "rises or falls in ischaemia and heart attack"]]],
    ["Normal values", [['heart rate', "60 to 100 beats a minute"], ['blood pressure', "under 120/80 mmHg"], ['ejection fraction', "55 to 70 per cent"], ['LDL / HDL', "LDL low, HDL high"]]],
    ["Common suffixes", [['-megaly', "enlargement"], ['-stenosis', "narrowing"], ['-sclerosis', "hardening"], ['-plasty / -ectomy / -tomy', "repair / removal / cutting"], ['-gram / -graph / -graphy', "tracing / device / recording process"]]],
    ["Drug classes", [['anticoagulant', "prevents new clots"], ['thrombolytic', "dissolves an existing clot"], ['beta-blocker', "slows the heartbeat, lowers pressure"], ['statin', "lowers cholesterol"], ['diuretic', "removes excess water and salt"], ['nitroglycerin', "relieves angina by widening vessels"]]]
  ];

  const ref = () => `<div class="tpane"><p class="muted">Frequently used tables for reading charts and imaging reports.</p>
    ${REF.map(g => `<h3 class="tgh">${g[0]}</h3><table class="mini ref"><tr><th>Term</th><th>Meaning</th></tr>${g[1].map(r => `<tr><td dir="ltr" class="ref__v">${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`).join('')}
    ${EA.ui.figCard({ a: ['flow-loop'], l: ["The path of blood"] })}</div>`;

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
