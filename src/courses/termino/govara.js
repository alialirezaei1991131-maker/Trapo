/* تراپو • ترمینو — حیطه «govara» (Digestive System)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_govara;
  D.css = ".certbar{width: 100%; margin-top: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px; border: 0; border-radius: 16px; padding: 14px 18px; font-weight: 800; background: linear-gradient(120deg, #c2410c, #f59f00); color: #fff; box-shadow: 0 4px 0 var(--brand-d); text-align: start;}\n.cert{width: 100%; padding: 10px; background: linear-gradient(135deg, #4f5bd5, #e03131, #f08c00, #0c8599, #ae3ec9, #2f9e44); border-radius: 20px;}\n.land__h em{font-style: normal; background: linear-gradient(90deg, var(--brand), #ae3ec9 55%, var(--coral)); -webkit-background-clip: text; background-clip: text; color: transparent;}\n[lang=\"fa\"]{font-family: Vazirmatn, Tahoma, system-ui, sans-serif;}\ntable.ref .ref__v{font-family: Nunito, system-ui, sans-serif; font-weight: 800; white-space: nowrap; text-align: left;}\n.recap{margin: 8px 0 4px; padding: 12px 14px; border-radius: 16px; background: color-mix(in srgb, var(--wc, var(--brand)) 9%, var(--bg)); border: 2px solid color-mix(in srgb, var(--wc, var(--brand)) 35%, var(--line));}\n.recap__h{display: block; font-size: 14px; font-weight: 900; color: color-mix(in srgb, var(--wc, var(--brand)) 80%, var(--text)); margin-bottom: 6px;}\n.recap ul{margin: 0; padding: 0; list-style: none; display: grid; gap: 8px;}\n.recap li{position: relative; padding-inline-start: 24px; font-size: 15px; line-height: 1.8;}\n.recap li::before{content: \"✓\"; position: absolute; inset-inline-start: 2px; top: 0; font-weight: 900; color: var(--green-t);}";
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
  EA.APP = { name: 'گوارا', key: 'govara', title: 'گوارا • ترمینولوژی دستگاه گوارش' };

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
    memo: s => `<div class="memo"><b class="memo__h">🧠 ترفند حفظ</b>${EA.bi(s)}</div>`,
    /** کارت «مرور سطح»: چکیده چند خطی در پایان هر سطح، پیش از تمرین‌های ساخته‌شده */
    recap: rows => `<div class="recap"><b class="recap__h">📌 آنچه در این سطح یاد گرفتی</b><ul>${rows.map(r => `<li>${EA.bi(r)}</li>`).join('')}</ul></div>`,
    /** جعبه «در بالین»: کاربرد واقعی همان واژه در بخش و آزمایشگاه */
    pearl: s => `<div class="pearl"><b class="pearl__h">🩺 در بالین</b>${EA.bi(s)}</div>`,
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
    name: 'گوارا', key: 'govara', title: 'گوارا • ترمینولوژی دستگاه گوارش', certCode: 'GV',
    subject: 'ترمینولوژی پزشکی دستگاه گوارش (Digestive System)',
    kicker: '🍽️ ترمینولوژی پزشکی: دستگاه گوارش (Digestive System)',
    hello: 'سلام، من <b>گوارا</b> هستم؛',
    landP: () => `سلام، من <b>گوارا</b> هستم؛ معده‌ای که همه‌چیز را خوب هضم می‌کند! این‌جا مسیر غذا را از دهان تا روده بزرگ دنبال می‌کنی، کبد و کیسه صفرا و پانکراس را می‌شناسی، بیماری‌هایی مثل GERD، زخم معده، سنگ صفرا و هپاتیت را نام می‌بری و آندوسکوپی، جراحی‌ها و داروهای گوارش را می‌فهمی؛ و هر واژه تازه را خودت <b>رمزگشایی</b> کنی. ${fa(EA.lex.TERMS.length)} واژه با تلفظ و معنی فارسی، ${fa(Object.keys(EA.IMG).length || 45)} تصویر از کتاب، ${fa(EA.ART_KEYS.length)} شکل آموزشی، ${fa(EA.rounds.length)} پرونده بالینی و کارت‌های لایتنر منتظرت هستند.`,
    disclaimer: 'گوارا ابزار آموزشی است و جایگزین منابع پزشکی، قضاوت بالینی یا دستور پزشک نیست.',
    eyes: 'ده‌ها شکل آموزشی و تصویر کتاب؛ از دهان و دندان و معده تا پرزهای روده، مجاری صفرا، آندوسکوپی و انواع استومی.',
    outcomes: [
          'هر واژه گوارش را به ریشه و پسوند بشکنی و با ریشه‌هایی مثل gastr/o، enter/o، hepat/o و cholecyst/o واژه تازه بسازی',
          'مسیر غذا را از دهان، مری و معده تا روده باریک و بزرگ با نام دقیق هر بخش توضیح دهی',
          'کار کبد، کیسه صفرا، مجاری صفراوی و پانکراس را با واژه‌های درست بیان کنی',
          'نشانه‌ها و بیماری‌های گوارش را بشناسی: dysphagia، GERD، peptic ulcer، IBD، cirrhosis و cholelithiasis',
          'آندوسکوپی‌ها، مطالعه‌های باریم، ERCP و آزمایش‌های گوارش را در پرونده بخوانی',
          'جراحی‌ها و استومی‌ها، لوله‌های تغذیه و داروهای گوارش و اختصارهایشان را بفهمی'
        ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، گزارش آندوسکوپی و پرونده یک بیمار گوارشی را مثل زبان مادری می‌خوانی.',
    obHello: 'سلام! من گوارا هستم؛ معده‌ای که همه‌چیز را خوب هضم می‌کند 🍽️ اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان گوارش» بهترین شروع است؛ قطعه‌های واژه‌سازی آن‌جا یاد داده می‌شوند!',
    demo: () => ({
    q: 'در برگه جراحی نوشته شده: <b dir="ltr">cholecystectomy</b>. یعنی…',
    fig: { a: ['wordparts'], l: ['ریشه + پسوند'] },
    opts: ['برداشتن کیسه صفرا', 'التهاب کیسه صفرا', 'سنگ کیسه صفرا', 'عکس‌برداری از کیسه صفرا'],
    why: `${EA.K.wb('cholecyst/o', '-ectomy')}<br><b>cholecyst/o</b> = کیسه صفرا • <b>-ectomy</b> = برداشتن. یعنی <b>برداشتن کیسه صفرا</b>؛ رایج‌ترین درمان سنگ صفرا. اگر <b>-itis</b> بود (cholecystitis) التهاب کیسه صفرا و اگر <b>-graphy</b> بود عکس‌برداری از آن می‌شد. معنی را از پسوند شروع کن!`
  }),
    titles: ['لقمه اول', 'ریشه‌یاب', 'دندان‌شناس', 'کاشف معده', 'رهنورد روده', 'یار کبد', 'شکارچی زخم', 'کارآگاه صفرا', 'آندوسکوپ‌به‌دست', 'جراح واژه‌ها', 'داروشناس گوارش', 'سرپرست گوارا', 'استاد زبان گوارش'],
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'دانشجوی علوم آزمایشگاهی', 'کارشناس علوم آزمایشگاهی', 'دانشجوی تغذیه', 'پرستار ICU', 'کارشناس تغذیه بالینی', 'رزیدنت داخلی', 'دانشجوی مامایی', 'دانشجوی داروسازی', 'بهداشتکار دهان و دندان', 'پرستار بخش گوارش'],
    firstBadge: ['🌱', 'اولین گام'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], mo: ['🦷', 'دهان‌شناس'], bw: ['🫀', 'رهنورد روده'], up: ['🔥', 'شکارچی زخم'], lo: ['🟡', 'کارآگاه صفرا'], tx: ['🔦', 'آندوسکوپیست'] },
    confetti: ['#C8243F', '#12A594', '#FFC800', '#18A6D9', '#7B5CE0', '#FF7A45', '#E5476B', '#58CC02'],
    obRoles: [['دانشجوی پزشکی', ''], ['دانشجوی پرستاری یا مامایی', ''], ['علوم آزمایشگاهی', ''], ['تغذیه', ''], ['پرستار یا پزشک', ''], ['سایر', '']],
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
    ["abdominal ultrasonography", "ul-trah-son-OG-rah-fe", "Ultrasound imaging of the abdominal organs; the main test for gallstones.", "سونوگرافی شکم", "tx", "img", []],
    ["absorption", "ab-SORP-shun", "Passage of digested nutrients into the blood or lymph.", "جذب", "bw", "phys", []],
    ["achalasia", "ak-ah-LA-zhe-ah", "Failure of the lower esophageal sphincter to relax, so food cannot enter the stomach.", "آشالازی (شل نشدن اسفنکتر مری)", "up", "pup", []],
    ["achlorhydria", "a-klor-HI-dre-ah", "Lack of hydrochloric acid in the stomach.", "نبود اسید معده", "up", "pup", []],
    ["adhesion", "ad-HE-zhun", "Band of scar tissue that binds two surfaces, often after surgery.", "چسبندگی", "lo", "plo", []],
    ["aerophagia", "air-o-FA-je-ah", "Swallowing of air.", "هوابلعی", "up", "sx", []],
    ["agnathia", "ag-NATH-e-ah", "Congenital absence of the lower jaw (a- + gnath/o + -ia).", "نبود مادرزادی فک", "lx", "wp", []],
    ["alimentary canal", "al-ih-MEN-tar-e", "The digestive tract: a muscular tube from the mouth to the anus.", "لوله گوارش", "mo", "sci", ["GI"]],
    ["amylase", "AM-ih-lase", "Enzyme in saliva and pancreatic juice that digests starch.", "آمیلاز", "mo", "phys", []],
    ["anal fistula", "A-nal FIS-tu-lah", "Abnormal passage from the anal canal to the skin near the anus.", "فیستول مقعدی", "lo", "plo", []],
    ["anastomosis", "ah-nas-to-MO-sis", "Surgical connection between two hollow organs; plural anastomoses.", "آناستوموز (اتصال جراحی)", "tx", "surg", []],
    ["ankyloglossia", "ang-kih-lo-GLOS-e-ah", "Tongue-tie: a short frenulum that limits tongue movement.", "کوتاهی لگام زبان", "up", "pup", []],
    ["anorectal", "a-no-REK-tal", "Pertaining to the anus and rectum.", "مقعدی‌رکتومی", "lx", "wp", []],
    ["anorexia", "an-o-REK-se-ah", "Loss of appetite.", "بی‌اشتهایی", "up", "sx", []],
    ["anorexia nervosa", "an-o-REK-se-ah ner-VO-sah", "Eating disorder of self-starvation from fear of gaining weight.", "بی‌اشتهایی عصبی", "up", "pup", []],
    ["antacid", "ant-AS-id", "Drug that neutralizes stomach acid.", "آنتی‌اسید (ضداسید)", "tx", "drug", []],
    ["antidiarrheal", "an-te-di-ah-RE-al", "Drug that treats diarrhea.", "ضداسهال", "tx", "drug", []],
    ["antiemetic", "an-te-e-MET-ik", "Drug that prevents or relieves nausea and vomiting.", "ضدتهوع و ضداستفراغ", "tx", "drug", []],
    ["antiflatulent", "an-te-FLAT-u-lent", "Drug that relieves gas, such as simethicone.", "ضدنفخ", "tx", "drug", []],
    ["antispasmodic", "an-te-spaz-MOD-ik", "Drug that relieves spasms of the digestive tract.", "ضداسپاسم (ضدقولنج)", "tx", "drug", []],
    ["antrum", "AN-trum", "Lower part of the stomach that leads to the pylorus.", "آنتروم (بخش پایینی معده)", "mo", "upper", []],
    ["anus", "A-nus", "Opening at the end of the digestive tract.", "مقعد", "bw", "bowel", []],
    ["aphagia", "ah-FA-je-ah", "Inability to swallow.", "ناتوانی در بلع", "up", "sx", []],
    ["aphthous ulcer", "AF-thus UL-ser", "Small painful ulcer in the mouth; canker sore.", "آفت دهان", "up", "pup", []],
    ["appendectomy", "ap-en-DEK-to-me", "Surgical removal of the appendix.", "آپاندکتومی (برداشتن آپاندیس)", "tx", "surg", []],
    ["appendicitis", "ah-pen-dih-SI-tis", "Inflammation of the appendix.", "آپاندیسیت", "lo", "plo", []],
    ["appendix", "ah-PEN-diks", "Small wormlike tube attached to the cecum; vermiform appendix.", "آپاندیس", "bw", "bowel", []],
    ["ascending colon", "ah-SEN-ding KO-lon", "Part of the colon that rises on the right side from the cecum.", "کولون بالارو", "bw", "bowel", []],
    ["ascites", "ah-SI-teze", "Fluid buildup in the peritoneal cavity.", "آسیت (آب آوردن شکم)", "lo", "pacc", []],
    ["bariatric surgery", "bar-e-AT-rik", "Surgery to treat severe obesity, such as gastric bypass or banding.", "جراحی چاقی", "tx", "surg", ["BMI"]],
    ["barium enema", "BA-re-um EN-eh-mah", "X-ray study of the colon after barium is given through the rectum; lower GI series.", "تنقیه باریم", "tx", "img", ["BE"]],
    ["barium swallow", "BA-re-um", "X-ray study of the esophagus and stomach after swallowing barium.", "بلع باریم", "tx", "img", ["UGI"]],
    ["Barrett esophagus", "BAR-et", "Precancerous change in the lining of the lower esophagus caused by chronic reflux.", "مری بارت", "up", "pup", []],
    ["bile", "bile", "Yellow-green fluid made by the liver that emulsifies fats.", "صفرا", "bw", "acc", []],
    ["biliary", "BIL-e-ar-e", "Pertaining to bile or the bile ducts (bili + -ary).", "صفراوی", "lx", "wp", []],
    ["biliary colic", "BIL-e-ar-e KOL-ik", "Sudden severe pain in the right upper quadrant from a gallstone blocking a duct.", "قولنج صفراوی", "lo", "pacc", []],
    ["biligenesis", "bil-ih-JEN-eh-sis", "Formation of bile (bili + -genesis).", "صفراسازی", "lx", "wp", []],
    ["bilirubin", "bil-ih-RU-bin", "Orange-yellow bile pigment made when old red blood cells break down.", "بیلی‌روبین", "bw", "acc", []],
    ["Billroth I", "BIL-roth", "Partial gastrectomy with the stomach joined to the duodenum.", "بیلروت یک", "tx", "surg", []],
    ["Billroth II", "BIL-roth", "Partial gastrectomy with the stomach joined to the jejunum.", "بیلروت دو", "tx", "surg", []],
    ["biopsy", "BI-op-se", "Removal of a small piece of tissue for microscopic examination.", "نمونه‌برداری (بیوپسی)", "tx", "lab", []],
    ["bolus", "BO-lus", "A soft rounded mass of chewed food mixed with saliva.", "لقمه جویده‌شده (بولوس)", "mo", "phys", []],
    ["borborygmus", "bor-bo-RIG-mus", "Rumbling sound made by gas moving through the intestines.", "قار و قور شکم", "up", "sx", []],
    ["bowel", "BOW-el", "The intestine.", "روده", "bw", "bowel", []],
    ["bradypepsia", "brad-e-PEP-se-ah", "Slow digestion.", "کندی هضم", "up", "sx", []],
    ["bruxism", "BRUK-sizm", "Clenching and grinding of the teeth, usually during sleep.", "دندان‌قروچه", "up", "pup", []],
    ["buccal", "BUK-al", "Pertaining to the cheek.", "گونه‌ای", "mo", "oral", []],
    ["buccopharyngeal", "buk-o-fah-RIN-je-al", "Pertaining to the cheek and pharynx (bucc/o + pharyng/o + -eal).", "گونه‌ای‌حلقی", "lx", "wp", []],
    ["bulimia", "bu-LIM-e-ah", "Eating disorder of binge eating followed by self-induced vomiting.", "پرخوری عصبی", "up", "pup", []],
    ["cachexia", "kah-KEK-se-ah", "Severe wasting and weight loss from chronic disease.", "لاغری مفرط (کاشکسی)", "up", "sx", []],
    ["canine", "KA-nine", "Pointed tooth used to tear food; also called cuspid.", "دندان نیش", "mo", "oral", []],
    ["capsule endoscopy", "KAP-sul en-DOS-ko-pe", "Swallowed camera capsule that photographs the digestive tract.", "آندوسکوپی کپسولی", "tx", "endo", []],
    ["cardia", "KAR-de-ah", "Part of the stomach next to the esophagus.", "کاردیا (بخش ورودی معده)", "mo", "upper", []],
    ["cathartic", "kah-THAR-tik", "Strong laxative.", "مسهل قوی", "tx", "drug", []],
    ["cecoptosis", "se-kop-TO-sis", "Downward displacement of the cecum (cec/o + -ptosis).", "افتادگی سکوم", "lx", "wp", []],
    ["cecum", "SE-kum", "Pouch at the start of the large intestine; Latin for hidden.", "سکوم (روده کور)", "bw", "bowel", []],
    ["celiac disease", "SE-le-ak", "Immune reaction to gluten that flattens the villi of the small intestine.", "بیماری سلیاک", "lo", "plo", []],
    ["cementum", "seh-MEN-tum", "Bonelike tissue that covers the tooth root and anchors it.", "سمان دندان", "mo", "oral", []],
    ["cheilitis", "ki-LI-tis", "Inflammation of the lips.", "التهاب لب", "up", "pup", []],
    ["cheiloplasty", "KI-lo-plas-te", "Surgical repair of the lip.", "ترمیم لب", "tx", "surg", []],
    ["cheilosis", "ki-LO-sis", "Cracking at the corners of the mouth, often from vitamin B deficiency.", "ترک گوشه لب", "up", "pup", []],
    ["cholangiectasis", "ko-lan-je-EK-tah-sis", "Dilatation of a bile duct (cholangi/o + -ectasis).", "گشادی مجرای صفراوی", "lx", "wp", []],
    ["cholangiogram", "ko-LAN-je-o-gram", "X-ray image of the bile ducts.", "کلانژیوگرام", "tx", "img", []],
    ["cholangiography", "ko-lan-je-OG-rah-fe", "X-ray imaging of the bile ducts with contrast.", "تصویربرداری مجاری صفراوی (کلانژیوگرافی)", "tx", "img", []],
    ["cholangioma", "ko-lan-je-O-mah", "Tumor of a bile duct (cholangi/o + -oma).", "تومور مجرای صفراوی", "lx", "wp", []],
    ["cholangitis", "ko-lan-JI-tis", "Inflammation of the bile ducts.", "التهاب مجاری صفراوی", "lo", "pacc", []],
    ["cholecystalgia", "ko-le-sis-TAL-je-ah", "Pain in the gallbladder (cholecyst/o + -algia).", "درد کیسه صفرا", "lx", "wp", []],
    ["cholecystectomy", "ko-le-sis-TEK-to-me", "Surgical removal of the gallbladder.", "برداشتن کیسه صفرا", "tx", "surg", []],
    ["cholecystitis", "ko-le-sis-TI-tis", "Inflammation of the gallbladder.", "التهاب کیسه صفرا", "lo", "pacc", []],
    ["cholecystogram", "ko-le-SIS-to-gram", "X-ray image of the gallbladder (cholecyst/o + -gram).", "کوله‌سیستوگرام (تصویر کیسه صفرا)", "lx", "wp", []],
    ["cholecystography", "ko-le-sis-TOG-rah-fe", "X-ray imaging of the gallbladder.", "کوله‌سیستوگرافی", "tx", "img", []],
    ["choledochal", "KO-le-dok-al", "Pertaining to the common bile duct (choledoch/o + -al).", "مربوط به مجرای صفراوی مشترک", "lx", "wp", []],
    ["choledocholithiasis", "ko-led-o-ko-lih-THI-ah-sis", "Stone in the common bile duct.", "سنگ مجرای صفراوی مشترک", "lo", "pacc", []],
    ["choledocholithotomy", "ko-led-o-ko-lih-THOT-o-me", "Incision into the common bile duct to remove a stone.", "برش مجرای صفراوی برای درآوردن سنگ", "tx", "surg", []],
    ["choledochotomy", "ko-led-o-KOT-o-me", "Incision into the common bile duct.", "برش مجرای صفراوی مشترک", "tx", "surg", []],
    ["cholelith", "KO-le-lith", "A gallstone (chol/e + lith).", "سنگ صفرا", "lx", "wp", []],
    ["cholelithiasis", "ko-le-lih-THI-ah-sis", "Presence of stones in the gallbladder.", "سنگ کیسه صفرا", "lo", "pacc", []],
    ["cholelithotripsy", "ko-le-LITH-o-trip-se", "Crushing of gallstones.", "سنگ‌شکنی صفرا", "tx", "surg", []],
    ["cholescintigraphy", "ko-le-sin-TIG-rah-fe", "Nuclear medicine scan of the gallbladder and bile ducts.", "اسکن هسته‌ای کیسه صفرا", "tx", "img", []],
    ["cholestasis", "ko-le-STA-sis", "Stoppage of bile flow (chol/e + -stasis).", "رکود صفرا (کلستاز)", "lx", "wp", []],
    ["chyme", "kime", "Semiliquid mass of partly digested food that leaves the stomach.", "کیموس (غذای نیمه‌هضم)", "mo", "phys", []],
    ["circumoral", "ser-kum-OR-al", "Around the mouth (circum- + or/o + -al).", "دور دهان", "lx", "wp", []],
    ["cirrhosis", "sih-RO-sis", "Chronic liver disease in which scar tissue replaces liver cells; Greek for tawny.", "سیروز کبد", "lo", "pacc", []],
    ["cleft lip", "kleft lip", "Congenital split in the upper lip.", "شکاف لب", "up", "pup", []],
    ["cleft palate", "kleft PAL-at", "Congenital split in the roof of the mouth.", "شکاف کام", "up", "pup", []],
    ["colectomy", "ko-LEK-to-me", "Surgical removal of all or part of the colon.", "برداشتن کولون", "tx", "surg", []],
    ["colitis", "ko-LI-tis", "Inflammation of the colon.", "التهاب کولون", "lo", "plo", []],
    ["coloclysis", "ko-lo-KLI-sis", "Irrigation of the colon (col/o + -clysis).", "شست‌وشوی کولون", "lx", "wp", []],
    ["colon", "KO-lon", "Main part of the large intestine: ascending, transverse, descending and sigmoid.", "کولون", "bw", "bowel", []],
    ["colonoscopy", "ko-lon-OS-ko-pe", "Endoscopic examination of the entire colon.", "کولونوسکوپی", "tx", "endo", []],
    ["coloproctostomy", "ko-lo-prok-TOS-to-me", "Surgical connection between the colon and rectum.", "اتصال کولون به رکتوم", "tx", "surg", []],
    ["colorectal cancer", "ko-lo-REK-tal", "Cancer of the colon or rectum, often starting in a polyp.", "سرطان روده بزرگ", "lo", "plo", []],
    ["colostomy", "ko-LOS-to-me", "Opening of the colon through the abdominal wall.", "کولوستومی", "tx", "surg", []],
    ["common bile duct", "bile dukt", "Duct formed by the hepatic and cystic ducts that carries bile into the duodenum.", "مجرای صفراوی مشترک", "bw", "acc", ["CBD"]],
    ["constipation", "kon-stih-PA-shun", "Infrequent or difficult passing of hard, dry stools.", "یبوست", "lo", "sx", []],
    ["Crohn disease", "krone", "Chronic patchy inflammation that can affect any part of the digestive tract, usually the ileum.", "بیماری کرون", "lo", "plo", ["CD"]],
    ["crown", "krown", "Part of the tooth above the gum line, covered by enamel.", "تاج دندان", "mo", "oral", []],
    ["cystic duct", "SIS-tik", "Duct that carries bile to and from the gallbladder.", "مجرای کیسه صفرا (سیستیک)", "bw", "acc", []],
    ["deciduous teeth", "de-SID-u-us", "The 20 primary (baby) teeth.", "دندان‌های شیری", "mo", "oral", []],
    ["defecation", "def-eh-KA-shun", "Elimination of feces from the rectum; bowel movement.", "دفع مدفوع", "bw", "phys", ["BM"]],
    ["deglutition", "de-glu-TISH-un", "Swallowing.", "بلع", "mo", "phys", []],
    ["dental caries", "KAR-eze", "Tooth decay caused by acid from bacteria in plaque.", "پوسیدگی دندان", "up", "pup", []],
    ["dental hygienist", "DEN-tal hi-JEN-ist", "Licensed professional who cleans teeth and teaches oral care.", "بهداشتکار دهان و دندان", "mo", "spec", []],
    ["dental plaque", "plak", "Sticky film of bacteria on the teeth.", "پلاک دندان", "up", "pup", []],
    ["dentalgia", "den-TAL-je-ah", "Pain in a tooth; toothache (dent/o + -algia).", "دندان‌درد", "lx", "wp", []],
    ["dentin", "DEN-tin", "Bonelike layer under the enamel that forms most of the tooth.", "عاج دندان", "mo", "oral", []],
    ["descending colon", "de-SEN-ding KO-lon", "Part of the colon that runs down the left side.", "کولون پایین‌رو", "bw", "bowel", []],
    ["diarrhea", "di-ah-RE-ah", "Frequent loose or watery stools.", "اسهال", "lo", "sx", []],
    ["digestion", "di-JES-chun", "Breakdown of food into substances the body can absorb.", "گوارش (هضم)", "mo", "phys", []],
    ["diverticulectomy", "di-ver-tik-u-LEK-to-me", "Surgical removal of a diverticulum.", "برداشتن دیورتیکول", "tx", "surg", []],
    ["diverticulitis", "di-ver-tik-u-LI-tis", "Inflammation of diverticula.", "التهاب دیورتیکول", "lo", "plo", []],
    ["diverticulosis", "di-ver-tik-u-LO-sis", "Presence of many diverticula in the colon.", "دیورتیکولوز", "lo", "plo", []],
    ["diverticulum", "di-ver-TIK-u-lum", "Small pouch that bulges out of the wall of the colon; plural diverticula.", "دیورتیکول (کیسه دیواره روده)", "lo", "plo", []],
    ["duodenal papilla", "du-o-DE-nal pah-PIL-ah", "Raised area in the duodenum where bile and pancreatic juice enter; papilla of Vater.", "پاپیلای دوازدهه (پاپیلای واتر)", "bw", "acc", []],
    ["duodenal ulcer", "du-o-DE-nal UL-ser", "Peptic ulcer in the duodenum.", "زخم دوازدهه", "up", "pup", []],
    ["duodenitis", "du-od-eh-NI-tis", "Inflammation of the duodenum (duoden/o + -itis).", "التهاب دوازدهه", "lx", "wp", []],
    ["duodenum", "du-o-DE-num", "First part of the small intestine; receives bile and pancreatic juice.", "دوازدهه", "bw", "bowel", []],
    ["dysentery", "DIS-en-ter-e", "Acute intestinal inflammation with diarrhea, often bloody (dys- + enter/o + -y).", "اسهال خونی (دیسانتری)", "lx", "wp", []],
    ["dyspepsia", "dis-PEP-se-ah", "Indigestion; painful or difficult digestion.", "سوءهاضمه", "up", "sx", []],
    ["dysphagia", "dis-FA-je-ah", "Difficulty swallowing.", "سختی بلع", "up", "sx", []],
    ["edentulous", "e-DEN-tu-lus", "Without teeth (e- + dent/i + -ulous).", "بی‌دندان", "lx", "wp", []],
    ["emesis", "EM-eh-sis", "Vomiting.", "استفراغ", "up", "sx", []],
    ["emetic", "e-MET-ik", "Drug that causes vomiting.", "داروی استفراغ‌آور", "tx", "drug", []],
    ["emulsification", "e-mul-sih-fih-KA-shun", "Breaking fats into tiny droplets, done by bile.", "امولسیون کردن چربی", "bw", "phys", []],
    ["enamel", "e-NAM-el", "Hard white outer layer of the tooth crown; the hardest substance in the body.", "مینای دندان", "mo", "oral", []],
    ["endoscope", "EN-do-skope", "Lighted flexible instrument used to look inside the body.", "آندوسکوپ", "tx", "endo", []],
    ["endoscopic retrograde cholangiopancreatography", "en-do-SKOP-ik RET-ro-grade ko-lan-je-o-pan-kre-ah-TOG-rah-fe", "X-ray of the bile and pancreatic ducts with contrast injected through an endoscope.", "ای‌آرسی‌پی (تصویربرداری مجاری صفرا و پانکراس با آندوسکوپ)", "tx", "endo", ["ERCP"]],
    ["endoscopy", "en-DOS-ko-pe", "Examination of the inside of an organ with a lighted instrument (endoscope).", "آندوسکوپی", "tx", "endo", []],
    ["enema", "EN-eh-mah", "Fluid put into the rectum to clean the bowel or give medicine.", "تنقیه", "tx", "care", []],
    ["enteritis", "en-ter-I-tis", "Inflammation of the small intestine.", "التهاب روده", "lo", "plo", []],
    ["enterohepatitis", "en-ter-o-hep-ah-TI-tis", "Inflammation of the intestine and liver.", "التهاب روده و کبد", "lx", "wp", []],
    ["enteropathy", "en-ter-OP-ah-the", "Any disease of the intestine (enter/o + -pathy).", "بیماری روده", "lx", "wp", []],
    ["enteroscopy", "en-ter-OS-ko-pe", "Endoscopic examination of the small intestine.", "روده‌بینی (انتروسکوپی)", "tx", "endo", []],
    ["enzyme", "EN-zime", "Protein that speeds a chemical reaction; digestive enzyme names often end in -ase.", "آنزیم", "mo", "phys", []],
    ["epigastric", "ep-ih-GAS-trik", "Above the stomach; the upper middle abdominal region.", "سر دل (اپی‌گاستر)", "bw", "bowel", []],
    ["epiglottis", "ep-ih-GLOT-is", "Leaf-shaped cartilage that covers the larynx during swallowing.", "اپی‌گلوت (درپوش حنجره)", "mo", "upper", []],
    ["eructation", "e-ruk-TA-shun", "Belching; bringing up gas from the stomach through the mouth.", "آروغ", "up", "sx", []],
    ["esophageal", "e-sof-ah-JE-al", "Pertaining to the esophagus; note the added e before -al.", "مری‌ای (مربوط به مری)", "lx", "wp", []],
    ["esophageal atresia", "ah-TRE-zhe-ah", "Congenital closure of the esophagus.", "آترزی مری (بسته بودن مادرزادی مری)", "up", "pup", []],
    ["esophageal hiatus", "e-sof-ah-JE-al hi-A-tus", "Opening in the diaphragm through which the esophagus passes.", "سوراخ مری در دیافراگم", "mo", "upper", []],
    ["esophageal varices", "e-sof-ah-JE-al VAR-ih-seze", "Swollen veins in the lower esophagus that can bleed; caused by portal hypertension.", "واریس مری", "lo", "pacc", []],
    ["esophagectomy", "e-sof-ah-JEK-to-me", "Surgical removal of all or part of the esophagus.", "برداشتن مری", "tx", "surg", []],
    ["esophagitis", "e-sof-ah-JI-tis", "Inflammation of the esophagus.", "التهاب مری", "up", "pup", []],
    ["esophagogastroduodenoscopy", "e-sof-ah-go-gas-tro-du-od-eh-NOS-ko-pe", "Endoscopic examination of the esophagus, stomach and duodenum.", "آندوسکوپی فوقانی (مری، معده و دوازدهه)", "tx", "endo", ["EGD"]],
    ["esophagoscopy", "e-sof-ah-GOS-ko-pe", "Endoscopic examination of the esophagus.", "مری‌بینی (ازوفاگوسکوپی)", "tx", "endo", []],
    ["esophagostenosis", "e-sof-ah-go-steh-NO-sis", "Narrowing of the esophagus (esophag/o + -stenosis).", "تنگی مری", "lx", "wp", []],
    ["esophagus", "e-SOF-ah-gus", "Muscular tube that carries food from the pharynx to the stomach.", "مری", "mo", "upper", []],
    ["familial adenomatous polyposis", "fah-MIL-e-al ad-eh-NO-mah-tus", "Inherited condition with hundreds of colon polyps that become cancer.", "پولیپوز آدنوماتوز خانوادگی", "lo", "plo", ["FAP"]],
    ["fecal incontinence", "FE-kal in-KON-tih-nens", "Inability to control bowel movements.", "بی‌اختیاری مدفوع", "lo", "sx", []],
    ["fecal occult blood test", "FE-kal o-KULT", "Chemical test of feces for hidden blood; stool guaiac or Hemoccult.", "آزمایش خون مخفی مدفوع", "tx", "lab", ["FOBT"]],
    ["feces", "FE-seze", "Solid waste material formed in the large intestine; stool.", "مدفوع", "bw", "phys", []],
    ["fistula", "FIS-tu-lah", "Abnormal passage between two organs or from an organ to the skin.", "فیستول (راه غیرطبیعی)", "lo", "plo", []],
    ["flatulence", "FLAT-u-lens", "Excess gas in the stomach or intestines.", "نفخ", "up", "sx", []],
    ["flatus", "FLA-tus", "Gas passed through the anus.", "باد شکم (گاز روده)", "up", "sx", []],
    ["frenulum", "FREN-u-lum", "Fold of mucous membrane that attaches the tongue to the floor of the mouth.", "لگام زبان (فرنولوم)", "mo", "oral", []],
    ["fundus", "FUN-dus", "Rounded upper part of the stomach above the opening of the esophagus.", "فوندوس (گنبد معده)", "mo", "upper", []],
    ["gallbladder", "GAWL-blad-er", "Sac under the liver that stores and concentrates bile.", "کیسه صفرا", "bw", "acc", ["GB"]],
    ["gastralgia", "gas-TRAL-je-ah", "Stomach pain (gastr/o + -algia); also called gastrodynia.", "معده‌درد", "lx", "wp", []],
    ["gastrectomy", "gas-TREK-to-me", "Surgical removal of all or part of the stomach.", "برداشتن معده (گاسترکتومی)", "tx", "surg", []],
    ["gastric banding", "GAS-trik BAN-ding", "Bariatric surgery that places an adjustable band around the top of the stomach; Lap-Band.", "باند معده", "tx", "surg", ["LAGB"]],
    ["gastric bypass", "GAS-trik BI-pas", "Bariatric surgery that joins a small stomach pouch to the jejunum.", "بای‌پس معده", "tx", "surg", ["RGB"]],
    ["gastric carcinoma", "GAS-trik kar-sih-NO-mah", "Malignant tumor of the stomach.", "سرطان معده", "up", "pup", []],
    ["gastric juice", "GAS-trik", "Secretion of the stomach glands containing hydrochloric acid and pepsin.", "شیره معده", "mo", "phys", []],
    ["gastric ulcer", "GAS-trik UL-ser", "Peptic ulcer in the stomach.", "زخم معده", "up", "pup", []],
    ["gastritis", "gas-TRI-tis", "Inflammation of the stomach.", "التهاب معده", "up", "pup", []],
    ["gastroduodenitis", "gas-tro-du-od-eh-NI-tis", "Inflammation of the stomach and duodenum.", "التهاب معده و دوازدهه", "lx", "wp", []],
    ["gastroduodenostomy", "gas-tro-du-od-eh-NOS-to-me", "Surgical connection between the stomach and duodenum; Billroth I.", "اتصال معده به دوازدهه", "tx", "surg", []],
    ["gastrodynia", "gas-tro-DIN-e-ah", "Stomach pain (gastr/o + -dynia).", "معده‌درد", "lx", "wp", []],
    ["gastroenteritis", "gas-tro-en-ter-I-tis", "Inflammation of the stomach and intestine, often from infection.", "التهاب معده و روده", "up", "pup", []],
    ["gastroenterologist", "gas-tro-en-ter-OL-o-jist", "Physician who specializes in diseases of the digestive tract.", "متخصص گوارش", "lx", "spec", []],
    ["gastroenterology", "gas-tro-en-ter-OL-o-je", "Study and treatment of the stomach, intestines and digestive system.", "گوارش‌شناسی (گاستروانترولوژی)", "lx", "spec", []],
    ["gastroenterostomy", "gas-tro-en-ter-OS-to-me", "Surgical connection between the stomach and small intestine.", "اتصال معده به روده", "tx", "surg", []],
    ["gastroesophageal", "gas-tro-e-sof-ah-JE-al", "Pertaining to the stomach and esophagus.", "معدی‌مری‌ای", "lx", "wp", []],
    ["gastroesophageal reflux disease", "gas-tro-e-sof-ah-JE-al RE-fluks", "Chronic backflow of stomach acid into the esophagus.", "بیماری ریفلاکس معده به مری", "up", "pup", ["GERD"]],
    ["gastrojejunostomy", "gas-tro-jeh-ju-NOS-to-me", "Surgical connection between the stomach and jejunum; Billroth II.", "اتصال معده به ژژونوم", "tx", "surg", []],
    ["gastroparesis", "gas-tro-pah-RE-sis", "Partial paralysis of the stomach that delays emptying (gastr/o + -paresis).", "فلج نسبی معده (گاستروپارزی)", "lx", "wp", []],
    ["gastroscopy", "gas-TROS-ko-pe", "Endoscopic examination of the stomach.", "معده‌بینی (گاستروسکوپی)", "tx", "endo", []],
    ["gastrostomy", "gas-TROS-to-me", "Opening into the stomach through the abdominal wall, used for feeding.", "گاستروستومی", "tx", "surg", []],
    ["gavage", "gah-VAHZH", "Feeding liquid food into the stomach through a tube.", "گاواژ (تغذیه با لوله)", "tx", "care", []],
    ["gingiva", "JIN-jih-vah", "The gum: tissue that surrounds the teeth; plural gingivae.", "لثه", "mo", "oral", []],
    ["gingivectomy", "jin-jih-VEK-to-me", "Surgical removal of gum tissue.", "برداشتن بخشی از لثه", "tx", "surg", []],
    ["gingivitis", "jin-jih-VI-tis", "Inflammation of the gums.", "التهاب لثه", "up", "pup", []],
    ["glossectomy", "glos-EK-to-me", "Surgical removal of the tongue.", "برداشتن زبان", "tx", "surg", []],
    ["glossitis", "glos-I-tis", "Inflammation of the tongue.", "التهاب زبان", "up", "pup", []],
    ["glossoplegia", "glos-o-PLE-je-ah", "Paralysis of the tongue (gloss/o + -plegia).", "فلج زبان", "lx", "wp", []],
    ["glossorrhaphy", "glos-OR-ah-fe", "Suture of the tongue (gloss/o + -rrhaphy).", "بخیه زبان", "lx", "wp", []],
    ["glycogen", "GLI-ko-jen", "Storage form of glucose, kept mainly in the liver.", "گلیکوژن", "bw", "phys", []],
    ["greater omentum", "o-MEN-tum", "Apron-like fold of peritoneum that hangs from the stomach over the intestines.", "چادرینه بزرگ (امنتوم)", "bw", "bowel", []],
    ["H2 blocker", "", "Drug that blocks histamine H2 receptors and lowers acid secretion; H2 antagonist.", "مهارکننده گیرنده H2", "tx", "drug", ["H2"]],
    ["halitosis", "hal-ih-TO-sis", "Bad breath.", "بوی بد دهان", "up", "sx", []],
    ["hard palate", "hard PAL-at", "Bony front part of the roof of the mouth.", "کام سخت", "mo", "oral", []],
    ["heartburn", "HART-burn", "Burning feeling in the chest when stomach acid flows back into the esophagus.", "سوزش سر دل", "up", "sx", []],
    ["Helicobacter pylori", "HEL-ih-ko-bak-ter pi-LOR-i", "Bacterium that infects the stomach lining and causes most peptic ulcers.", "هلیکوباکتر پیلوری", "up", "pup", ["H. pylori"]],
    ["hematemesis", "he-mah-TEM-eh-sis", "Vomiting of blood.", "استفراغ خونی", "up", "sx", []],
    ["hematochezia", "he-mat-o-KE-ze-ah", "Bright red blood in the stool.", "خون روشن در مدفوع", "lo", "sx", []],
    ["hemiglossal", "hem-e-GLOS-al", "Pertaining to one half of the tongue (hemi- + gloss/o + -al).", "مربوط به نیمی از زبان", "lx", "wp", []],
    ["hemorrhoidectomy", "hem-o-royd-EK-to-me", "Surgical removal of hemorrhoids.", "برداشتن بواسیر", "tx", "surg", []],
    ["hemorrhoids", "HEM-o-roydz", "Varicose veins in the rectum and anus.", "بواسیر (هموروئید)", "lo", "plo", []],
    ["hepatic duct", "heh-PAT-ik", "Duct that carries bile out of the liver.", "مجرای کبدی", "bw", "acc", []],
    ["hepatic flexure", "heh-PAT-ik FLEK-sher", "Right bend of the colon near the liver.", "خم کبدی کولون", "bw", "bowel", []],
    ["hepatic lobectomy", "lo-BEK-to-me", "Surgical removal of a lobe of the liver.", "برداشتن لوب کبد", "tx", "surg", []],
    ["hepatic portal system", "heh-PAT-ik POR-tal", "Veins that carry blood from the digestive organs to the liver.", "سیستم باب کبدی", "bw", "acc", []],
    ["hepatitis", "hep-ah-TI-tis", "Inflammation of the liver, usually caused by a virus.", "هپاتیت (التهاب کبد)", "lo", "pacc", ["HAV", "HBV", "HCV", "HDV", "HEV"]],
    ["hepatocyte", "HEP-ah-to-site", "A liver cell (hepat/o + -cyte).", "سلول کبدی (هپاتوسیت)", "lx", "wp", []],
    ["hepatogenic", "hep-ah-to-JEN-ik", "Originating in the liver (hepat/o + -genic).", "کبدزاد (با منشأ کبدی)", "lx", "wp", []],
    ["hepatology", "hep-ah-TOL-o-je", "Study and treatment of the liver.", "کبدشناسی (هپاتولوژی)", "lx", "spec", []],
    ["hepatoma", "hep-ah-TO-mah", "Tumor of the liver.", "تومور کبد (هپاتوما)", "lo", "pacc", []],
    ["hepatomegaly", "hep-ah-to-MEG-ah-le", "Enlargement of the liver (hepat/o + -megaly).", "بزرگی کبد", "lx", "wp", []],
    ["hepatopathy", "hep-ah-TOP-ah-the", "Any disease of the liver (hepat/o + -pathy).", "بیماری کبد", "lx", "wp", []],
    ["hernia", "HER-ne-ah", "Protrusion of an organ through the wall that normally holds it.", "فتق", "lo", "plo", []],
    ["herniorrhaphy", "her-ne-OR-ah-fe", "Surgical repair of a hernia with sutures; hernioplasty.", "ترمیم فتق", "tx", "surg", []],
    ["herpes labialis", "HER-peze la-be-AL-is", "Cold sore or fever blister on the lip caused by herpes simplex virus.", "تبخال لب", "up", "pup", ["HSV-1"]],
    ["hiatal hernia", "hi-A-tal HER-ne-ah", "Protrusion of the stomach upward through the esophageal hiatus of the diaphragm.", "فتق هیاتال", "up", "pup", []],
    ["hydrochloric acid", "hi-dro-KLOR-ik", "Strong acid secreted by the stomach that activates pepsin.", "اسید کلریدریک", "mo", "phys", ["HCl"]],
    ["hyperbilirubinemia", "hi-per-bil-ih-ru-bih-NE-me-ah", "Excess bilirubin in the blood.", "افزایش بیلی‌روبین خون", "lo", "pacc", []],
    ["hyperemesis", "hi-per-EM-eh-sis", "Excessive vomiting.", "استفراغ شدید", "up", "sx", []],
    ["hypogastric", "hi-po-GAS-trik", "Below the stomach; the lower middle abdominal region.", "زیر شکم (هیپوگاستر)", "bw", "bowel", []],
    ["hypoglossal", "hi-po-GLOS-al", "Under the tongue (hypo- + gloss/o + -al).", "زیرزبانی (هیپوگلوسال)", "lx", "wp", []],
    ["icterus", "IK-ter-us", "Jaundice.", "یرقان (زردی)", "lo", "pacc", []],
    ["ileitis", "il-e-I-tis", "Inflammation of the ileum (ile/o + -itis).", "التهاب ایلئوم", "lx", "wp", []],
    ["ileocecal", "il-e-o-SE-kal", "Pertaining to the ileum and cecum.", "ایلئوسکال", "lx", "wp", []],
    ["ileocecal valve", "il-e-o-SE-kal", "Sphincter between the ileum and the cecum.", "دریچه ایلئوسکال", "bw", "bowel", []],
    ["ileostomy", "il-e-OS-to-me", "Opening of the ileum through the abdominal wall.", "ایلئوستومی", "tx", "surg", []],
    ["ileum", "IL-e-um", "Last part of the small intestine; joins the cecum.", "ایلئوم (روده پیچیده)", "bw", "bowel", []],
    ["ileus", "IL-e-us", "Intestinal obstruction, often from loss of peristalsis.", "ایلئوس (توقف حرکت روده)", "lo", "plo", []],
    ["incisor", "in-SI-zor", "Chisel-shaped front tooth used for cutting food.", "دندان پیش (ثنایا)", "mo", "oral", []],
    ["inflammatory bowel disease", "in-FLAM-ah-tor-e BOW-el", "Chronic intestinal inflammation: Crohn disease and ulcerative colitis.", "بیماری التهابی روده", "lo", "plo", ["IBD"]],
    ["ingestion", "in-JES-chun", "Taking food or liquid into the body through the mouth.", "خوردن (بلعیدن غذا)", "mo", "phys", []],
    ["inguinal hernia", "ING-gwih-nal", "Hernia of the intestine into the groin.", "فتق کشاله ران", "lo", "plo", []],
    ["insulin", "IN-suh-lin", "Pancreatic hormone that lowers blood sugar.", "انسولین", "bw", "acc", []],
    ["intestinal obstruction", "in-TES-tih-nal ob-STRUK-shun", "Blockage that stops intestinal contents from moving forward.", "انسداد روده", "lo", "plo", []],
    ["intestine", "in-TES-tin", "The bowel: the part of the digestive tract from the stomach to the anus.", "روده", "bw", "bowel", []],
    ["intrinsic factor", "in-TRIN-sik", "Substance made by the stomach that is needed to absorb vitamin B12.", "فاکتور داخلی", "mo", "phys", []],
    ["intussusception", "in-tuh-suh-SEP-shun", "Telescoping of one part of the intestine into the next part.", "انواژیناسیون (فرو رفتن روده در خودش)", "lo", "plo", []],
    ["irritable bowel syndrome", "IR-ih-tah-bl BOW-el", "Functional disorder with abdominal pain, bloating and diarrhea or constipation, without visible damage; spastic colon.", "سندرم روده تحریک‌پذیر", "lo", "plo", ["IBS"]],
    ["jaundice", "JAWN-dis", "Yellow color of the skin and eyes from excess bilirubin; also called icterus.", "یرقان (زردی)", "lo", "pacc", []],
    ["jejunitis", "jeh-ju-NI-tis", "Inflammation of the jejunum (jejun/o + -itis).", "التهاب ژژونوم", "lx", "wp", []],
    ["jejunostomy", "jeh-ju-NOS-to-me", "Opening of the jejunum through the abdominal wall, often for feeding.", "ژژونوستومی", "tx", "surg", []],
    ["jejunum", "jeh-JU-num", "Middle part of the small intestine; Latin for empty.", "ژژونوم (روده تهی)", "bw", "bowel", []],
    ["labial", "LA-be-al", "Pertaining to the lips.", "لبی", "mo", "oral", []],
    ["labiodental", "la-be-o-DEN-tal", "Pertaining to the lip and teeth (labi/o + dent/o + -al).", "لبی‌دندانی", "lx", "wp", []],
    ["lacteal", "LAK-te-al", "Lymphatic capillary in each villus that absorbs digested fats.", "مویرگ لنفی پرز (لاکتئال)", "bw", "bowel", []],
    ["lactose intolerance", "LAK-tose in-TOL-er-ans", "Inability to digest milk sugar from lack of the enzyme lactase.", "عدم تحمل لاکتوز", "lo", "plo", []],
    ["laparoscopic cholecystectomy", "lap-ah-ro-SKOP-ik", "Removal of the gallbladder through small incisions with a laparoscope.", "برداشتن کیسه صفرا با لاپاراسکوپ", "tx", "surg", []],
    ["laparoscopy", "lap-ah-ROS-ko-pe", "Examination of the abdominal cavity with an endoscope through a small incision; peritoneoscopy.", "لاپاراسکوپی", "tx", "endo", []],
    ["laparotomy", "lap-ah-ROT-o-me", "Surgical incision into the abdomen.", "باز کردن شکم (لاپاراتومی)", "tx", "surg", []],
    ["large intestine", "in-TES-tin", "Wider tube that absorbs water and forms feces: cecum, colon, rectum and anus.", "روده بزرگ", "bw", "bowel", []],
    ["laryngopharynx", "lah-ring-go-FAR-inks", "Lower part of the pharynx above the larynx and esophagus.", "حلق حنجره‌ای", "mo", "upper", []],
    ["lavage", "lah-VAHZH", "Washing out of the stomach through a tube.", "لاواژ (شست‌وشوی معده)", "tx", "care", []],
    ["laxative", "LAK-sah-tiv", "Drug that eases the passage of feces.", "ملین", "tx", "drug", []],
    ["leukoplakia", "lu-ko-PLA-ke-ah", "White patches on the mucous membranes of the mouth; may be precancerous.", "لکوپلاکی (لکه سفید دهان)", "up", "pup", []],
    ["lipase", "LI-pase", "Pancreatic enzyme that digests fats.", "لیپاز", "bw", "phys", []],
    ["lithotripsy", "LITH-o-trip-se", "Crushing of a stone, for example with shock waves.", "سنگ‌شکنی", "tx", "surg", ["ESWL"]],
    ["liver", "LIV-er", "Large organ in the right upper abdomen that makes bile and processes nutrients.", "کبد", "bw", "acc", []],
    ["liver function tests", "LIV-er FUNK-shun", "Blood tests for liver enzymes and bilirubin.", "آزمایش‌های عملکرد کبد", "tx", "lab", ["LFT", "ALT", "AST"]],
    ["liver transplant", "trans-PLANT", "Replacement of a diseased liver with a donor liver.", "پیوند کبد", "tx", "surg", []],
    ["lower esophageal sphincter", "e-sof-ah-JE-al SFINK-ter", "Muscle ring between the esophagus and stomach that prevents backflow; also called cardiac sphincter.", "اسفنکتر تحتانی مری", "mo", "upper", ["LES"]],
    ["malocclusion", "mal-o-KLU-zhun", "Abnormal contact between the upper and lower teeth.", "ناجور بسته شدن دندان‌ها", "up", "pup", []],
    ["manometry", "mah-NOM-eh-tre", "Measurement of pressure, as in the esophagus or anorectum.", "مانومتری (فشارسنجی)", "tx", "lab", []],
    ["mastication", "mas-tih-KA-shun", "Chewing; grinding food with the teeth and mixing it with saliva.", "جویدن", "mo", "phys", []],
    ["megacolon", "meg-ah-KO-lon", "Abnormally enlarged colon.", "بزرگی کولون (مگاکولون)", "lo", "plo", []],
    ["melena", "meh-LE-nah", "Black tarry stool containing digested blood.", "مدفوع سیاه و قیری (ملنا)", "lo", "sx", []],
    ["mesentery", "MES-en-ter-e", "Fold of peritoneum that holds the small intestine to the back wall of the abdomen.", "مزانتر (روده‌بند)", "bw", "bowel", []],
    ["mesocolon", "mes-o-KO-lon", "Fold of peritoneum that attaches the colon to the back wall of the abdomen.", "مزوکولون", "bw", "bowel", []],
    ["micrognathia", "mi-kro-NATH-e-ah", "Abnormally small jaw (micr/o + gnath/o + -ia).", "کوچکی فک", "lx", "wp", []],
    ["molar", "MO-lar", "Large back tooth that grinds food; the third molar is the wisdom tooth.", "دندان آسیا", "mo", "oral", []],
    ["mucosa", "mu-KO-sah", "Mucous membrane that lines the digestive tract.", "مخاط", "mo", "sci", []],
    ["Murphy sign", "MUR-fe", "Pain and a stop in breathing when the gallbladder area is pressed during a deep breath; a sign of cholecystitis.", "علامت مورفی", "lo", "pacc", []],
    ["myenteric", "mi-en-TER-ik", "Pertaining to the muscle layer of the intestine (my/o + enter/o + -ic).", "مربوط به لایه عضلانی روده", "lx", "wp", []],
    ["nasogastric tube", "na-zo-GAS-trik", "Tube passed through the nose into the stomach for feeding or suction.", "لوله بینی‌معدی", "tx", "care", ["NG"]],
    ["nasopharynx", "na-zo-FAR-inks", "Upper part of the pharynx behind the nose.", "حلق بینی", "mo", "upper", []],
    ["nausea", "NAW-ze-ah", "Unpleasant feeling that comes before vomiting; Greek for seasickness.", "تهوع", "up", "sx", ["N&V"]],
    ["nothing by mouth", "", "Order that the patient take no food or drink by mouth.", "ناشتا (هیچ چیز از راه دهان)", "tx", "care", ["NPO"]],
    ["obesity", "o-BE-sih-te", "Excess body fat; a body mass index of 30 or more.", "چاقی", "up", "pup", ["BMI"]],
    ["obstipation", "ob-stih-PA-shun", "Extreme constipation, often caused by an obstruction.", "یبوست شدید", "lo", "sx", []],
    ["occult blood", "o-KULT", "Blood in the stool that can be seen only with a chemical test.", "خون مخفی", "lo", "sx", []],
    ["odynophagia", "o-din-o-FA-je-ah", "Painful swallowing.", "بلع دردناک", "up", "sx", []],
    ["oral cavity", "OR-al KAV-ih-te", "The mouth: lips, cheeks, palate and tongue.", "حفره دهان", "mo", "oral", []],
    ["orolingual", "or-o-LING-gwal", "Pertaining to the mouth and tongue (or/o + lingu/o + -al).", "دهانی‌زبانی", "lx", "wp", []],
    ["oropharynx", "or-o-FAR-inks", "Part of the pharynx behind the mouth.", "حلق دهانی", "mo", "upper", []],
    ["orthodontics", "or-tho-DON-tiks", "Branch of dentistry that corrects the alignment of the teeth.", "ارتودنسی", "lx", "spec", []],
    ["orthodontist", "or-tho-DON-tist", "Dentist who straightens and aligns the teeth (orth/o + odont/o + -ist).", "ارتودنتیست (متخصص ردیف کردن دندان)", "lx", "spec", []],
    ["ostomy", "OS-to-me", "Surgically created opening of an organ through the abdominal wall.", "استومی (دهانه جراحی)", "tx", "surg", []],
    ["ova and parasites", "O-vah", "Microscopic examination of feces for parasites and their eggs.", "آزمایش انگل و تخم انگل مدفوع", "tx", "lab", ["O&P"]],
    ["palate", "PAL-at", "Roof of the mouth that separates the mouth from the nasal cavity.", "کام", "mo", "oral", []],
    ["palatine", "PAL-ah-tine", "Pertaining to the palate.", "کامی", "mo", "oral", []],
    ["palatoplasty", "PAL-ah-to-plas-te", "Surgical repair of the palate, as for a cleft palate.", "ترمیم کام", "tx", "surg", []],
    ["palatorrhaphy", "pal-ah-TOR-ah-fe", "Suture of the palate, as for a cleft palate (palat/o + -rrhaphy).", "بخیه کام", "lx", "wp", []],
    ["pancreas", "PAN-kre-as", "Gland behind the stomach that makes digestive enzymes and the hormone insulin.", "پانکراس (لوزالمعده)", "bw", "acc", []],
    ["pancreatic duct", "pan-kre-AT-ik", "Duct that carries pancreatic juice into the duodenum.", "مجرای پانکراس", "bw", "acc", []],
    ["pancreatic juice", "pan-kre-AT-ik", "Pancreatic secretion with bicarbonate and enzymes for fats, proteins and starch.", "شیره پانکراس", "bw", "phys", []],
    ["pancreatitis", "pan-kre-ah-TI-tis", "Inflammation of the pancreas.", "التهاب پانکراس", "lo", "pacc", []],
    ["pancreatolysis", "pan-kre-ah-TOL-ih-sis", "Destruction of pancreatic tissue (pancreat/o + -lysis).", "تخریب پانکراس", "lx", "wp", []],
    ["pancreatotropic", "pan-kre-ah-to-TROP-ik", "Acting on the pancreas (pancreat/o + -tropic).", "اثرکننده بر پانکراس", "lx", "wp", []],
    ["papillae", "pah-PIL-e", "Small raised bumps on the tongue that hold the taste buds.", "پرزهای زبان (پاپیلاها)", "mo", "oral", []],
    ["paracentesis", "par-ah-sen-TE-sis", "Needle puncture of the abdomen to remove fluid; abdominocentesis.", "کشیدن مایع شکم (پاراسنتز)", "tx", "lab", []],
    ["parotid gland", "pah-ROT-id", "Largest salivary gland, in front of the ear.", "غده بناگوشی (پاروتید)", "mo", "oral", []],
    ["parotitis", "par-o-TI-tis", "Inflammation of the parotid gland, as in mumps.", "التهاب غده بناگوشی", "up", "pup", []],
    ["pepsin", "PEP-sin", "Stomach enzyme that begins protein digestion.", "پپسین", "mo", "phys", []],
    ["peptic ulcer", "PEP-tik UL-ser", "Sore in the lining of the esophagus, stomach or duodenum exposed to acid.", "زخم پپتیک", "up", "pup", ["PUD"]],
    ["percutaneous endoscopic gastrostomy", "per-ku-TA-ne-us", "Feeding tube placed into the stomach through the skin with endoscope guidance.", "گاستروستومی از راه پوست با آندوسکوپ", "tx", "care", ["PEG"]],
    ["percutaneous transhepatic cholangiography", "per-ku-TA-ne-us trans-heh-PAT-ik", "Contrast injected through the skin into a bile duct in the liver, then X-rays taken.", "کلانژیوگرافی از راه پوست و کبد", "tx", "img", ["PTC"]],
    ["perianal", "per-e-A-nal", "Around the anus (peri- + an/o + -al).", "اطراف مقعد", "lx", "wp", []],
    ["periodontal", "per-e-o-DON-tal", "Around a tooth; refers to the gums and supporting tissues.", "اطراف دندان (پریودنتال)", "mo", "oral", []],
    ["periodontics", "per-e-o-DON-tiks", "Dental specialty that treats the tissues around the teeth (peri- + odont/o).", "پریودنتیکس (درمان بافت‌های اطراف دندان)", "lx", "spec", []],
    ["periodontitis", "per-e-o-don-TI-tis", "Inflammation of the tissues around the teeth that can cause tooth loss.", "التهاب بافت‌های اطراف دندان (پریودنتیت)", "up", "pup", []],
    ["peristalsis", "per-ih-STAL-sis", "Wavelike contractions of smooth muscle that move material through the digestive tract.", "حرکت دودی (پریستالتیسم)", "mo", "phys", []],
    ["peritoneum", "per-ih-to-NE-um", "Serous membrane that lines the abdominal cavity and covers its organs.", "صفاق", "bw", "bowel", []],
    ["peritonitis", "per-ih-to-NI-tis", "Inflammation of the peritoneum, often after a rupture.", "التهاب صفاق", "lo", "plo", []],
    ["permanent teeth", "PER-mah-nent", "The 32 adult teeth that replace the deciduous teeth.", "دندان‌های دائمی", "mo", "oral", []],
    ["pernicious anemia", "per-NISH-us ah-NE-me-ah", "Anemia from lack of intrinsic factor, so vitamin B12 is not absorbed.", "کم‌خونی پرنیشیوز", "up", "pup", []],
    ["pharynx", "FAR-inks", "The throat; passage for both food and air.", "حلق", "mo", "upper", []],
    ["pilonidal cyst", "pi-lo-NI-dal", "Cyst with hair at the base of the spine, near the cleft of the buttocks.", "کیست مویی (پیلونیدال)", "lo", "plo", []],
    ["polyp", "POL-ip", "Growth that projects from a mucous membrane, often on a stalk.", "پولیپ", "lo", "plo", []],
    ["polypectomy", "pol-ih-PEK-to-me", "Removal of a polyp, often with a wire snare during colonoscopy.", "برداشتن پولیپ", "tx", "surg", []],
    ["polyphagia", "pol-e-FA-je-ah", "Excessive eating.", "پرخوری", "up", "sx", []],
    ["polyposis", "pol-ih-PO-sis", "Presence of many polyps.", "پولیپوز", "lo", "plo", []],
    ["portal hypertension", "POR-tal hi-per-TEN-shun", "High pressure in the hepatic portal veins, usually from cirrhosis.", "فشار خون باب", "lo", "pacc", []],
    ["postprandial", "post-PRAN-de-al", "After a meal.", "پس از غذا", "up", "sx", ["pp"]],
    ["premolar", "pre-MO-lar", "Tooth between the canine and molars; also called bicuspid.", "دندان آسیای کوچک", "mo", "oral", []],
    ["proctitis", "prok-TI-tis", "Inflammation of the rectum.", "التهاب رکتوم", "lo", "plo", []],
    ["proctology", "prok-TOL-o-je", "Study and treatment of disorders of the rectum and anus.", "پروکتولوژی (درمان بیماری‌های رکتوم و مقعد)", "lx", "spec", []],
    ["proctopexy", "PROK-to-pek-se", "Surgical fixation of the rectum (proct/o + -pexy).", "ثابت کردن رکتوم با جراحی", "lx", "wp", []],
    ["proctoptosis", "prok-top-TO-sis", "Prolapse or drooping of the rectum and anus (proct/o + -ptosis).", "افتادگی رکتوم", "lx", "wp", []],
    ["proctoscopy", "prok-TOS-ko-pe", "Endoscopic examination of the rectum and anus.", "رکتوم‌بینی (پروکتوسکوپی)", "tx", "endo", []],
    ["proctosigmoidoscopy", "prok-to-sig-moy-DOS-ko-pe", "Endoscopic examination of the rectum and sigmoid colon.", "پروکتوسیگموئیدوسکوپی", "tx", "endo", []],
    ["prognathous", "PROG-na-thus", "Having a projecting jaw (pro- + gnath/o + -ous).", "دارای فک جلوآمده", "lx", "wp", []],
    ["protease", "PRO-te-ase", "Enzyme that digests proteins.", "پروتئاز", "bw", "phys", []],
    ["proton pump inhibitor", "PRO-ton", "Drug that blocks the acid pump of stomach cells, such as omeprazole.", "مهارکننده پمپ پروتون", "tx", "drug", ["PPI"]],
    ["pulp", "pulp", "Soft core of the tooth containing nerves and blood vessels.", "پالپ (مغز دندان)", "mo", "oral", []],
    ["pyloric sphincter", "pi-LOR-ik SFINK-ter", "Muscle ring that controls passage of food from the stomach into the duodenum.", "اسفنکتر پیلور", "mo", "upper", []],
    ["pyloric stenosis", "pi-LOR-ik steh-NO-sis", "Narrowing of the pylorus; in infants it causes projectile vomiting.", "تنگی پیلور", "up", "pup", []],
    ["pyloroplasty", "pi-LOR-o-plas-te", "Surgical repair that widens the pylorus.", "ترمیم پیلور (پیلوروپلاستی)", "tx", "surg", []],
    ["pylorospasm", "pi-LOR-o-spazm", "Involuntary spasm of the pylorus (pylor/o + -spasm).", "اسپاسم پیلور", "lx", "wp", []],
    ["pylorus", "pi-LOR-us", "Distal opening of the stomach into the duodenum; Greek for gatekeeper.", "پیلور (دروازه‌بان معده)", "mo", "upper", []],
    ["pyrosis", "pi-RO-sis", "Heartburn: burning pain behind the sternum from acid reflux.", "سوزش سر دل (ترش کردن)", "up", "sx", []],
    ["quadrant", "KWAH-drant", "One of four areas of the abdomen divided by lines through the navel.", "ربع شکم", "bw", "bowel", ["RUQ", "LUQ", "RLQ", "LLQ"]],
    ["rectocele", "REK-to-sele", "Hernia of the rectum into the vagina (rect/o + -cele).", "فتق رکتوم (رکتوسل)", "lx", "wp", []],
    ["rectum", "REK-tum", "Last part of the large intestine that stores feces; Latin for straight.", "رکتوم (راست‌روده)", "bw", "bowel", []],
    ["reflux", "RE-fluks", "Backward flow.", "برگشت (ریفلاکس)", "up", "pup", []],
    ["regurgitation", "re-gur-jih-TA-shun", "Backflow of stomach contents into the mouth.", "برگشت محتویات معده به دهان", "up", "sx", []],
    ["rugae", "RU-je", "Large folds in the lining of the stomach.", "چین‌های معده (روگا)", "mo", "upper", []],
    ["saliva", "sah-LI-vah", "Fluid secreted into the mouth that moistens food and starts starch digestion.", "بزاق", "mo", "oral", []],
    ["salivary gland", "SAL-ih-var-e", "Gland that secretes saliva; there are three pairs.", "غده بزاقی", "mo", "oral", []],
    ["sialadenitis", "si-al-ad-eh-NI-tis", "Inflammation of a salivary gland.", "التهاب غده بزاقی", "up", "pup", []],
    ["sialogram", "si-AL-o-gram", "X-ray image of the salivary glands and ducts (sial/o + -gram).", "سیالوگرام (تصویر غدد بزاقی)", "lx", "wp", []],
    ["sialography", "si-ah-LOG-rah-fe", "X-ray imaging of the salivary glands and ducts.", "سیالوگرافی", "tx", "img", []],
    ["sialolith", "si-AL-o-lith", "A stone in a salivary gland or duct (sial/o + lith).", "سنگ بزاقی", "lx", "wp", []],
    ["sialorrhea", "si-ah-lo-RE-ah", "Excess flow of saliva (sial/o + -rrhea).", "ترشح زیاد بزاق", "lx", "wp", []],
    ["sigmoid colon", "SIG-moyd KO-lon", "S-shaped last part of the colon that leads to the rectum.", "کولون سیگموئید", "bw", "bowel", []],
    ["sigmoidoscopy", "sig-moy-DOS-ko-pe", "Endoscopic examination of the sigmoid colon.", "سیگموئیدوسکوپی", "tx", "endo", []],
    ["small intestine", "in-TES-tin", "Coiled tube where most digestion and absorption take place: duodenum, jejunum and ileum.", "روده باریک", "bw", "bowel", []],
    ["soft palate", "soft PAL-at", "Muscular back part of the roof of the mouth.", "کام نرم", "mo", "oral", []],
    ["sphincter", "SFINK-ter", "A ring of muscle that closes an opening and controls one-way flow.", "اسفنکتر (ماهیچه حلقوی)", "mo", "sci", []],
    ["sphincter of Oddi", "SFINK-ter of OD-e", "Muscle ring where the common bile duct and pancreatic duct open into the duodenum.", "اسفنکتر اودی", "bw", "acc", []],
    ["splenic flexure", "SPLEN-ik FLEK-sher", "Left bend of the colon near the spleen.", "خم طحالی کولون", "bw", "bowel", []],
    ["splenomegaly", "sple-no-MEG-ah-le", "Enlargement of the spleen.", "بزرگی طحال", "lo", "pacc", []],
    ["steatorrhea", "ste-ah-to-RE-ah", "Excess fat in the feces.", "مدفوع چرب", "lo", "sx", []],
    ["stoma", "STO-mah", "The opening of an ostomy on the skin; Greek for mouth.", "استوما (دهانه روی پوست)", "tx", "surg", []],
    ["stomach", "STUM-ak", "J-shaped organ that stores food and mixes it with gastric juice.", "معده", "mo", "upper", []],
    ["stomatitis", "sto-mah-TI-tis", "Inflammation of the lining of the mouth.", "التهاب مخاط دهان", "up", "pup", []],
    ["stomatopathy", "sto-mah-TOP-ah-the", "Any disease of the mouth (stomat/o + -pathy).", "بیماری دهان", "lx", "wp", []],
    ["stomatoplasty", "STO-mah-to-plas-te", "Plastic repair of the mouth (stomat/o + -plasty).", "ترمیم دهان (استوماتوپلاستی)", "lx", "wp", []],
    ["stool culture", "stool KUL-chur", "Test of feces for disease-causing bacteria.", "کشت مدفوع", "tx", "lab", []],
    ["stool softener", "stool SOF-en-er", "Drug that softens hard stool.", "نرم‌کننده مدفوع", "tx", "drug", []],
    ["strangulated hernia", "STRANG-gu-la-ted", "Hernia whose blood supply is cut off.", "فتق خفه‌شده", "lo", "plo", []],
    ["sublingual", "sub-LING-gwal", "Under the tongue (sub- + lingu/o + -al).", "زیرزبانی", "lx", "wp", []],
    ["sublingual gland", "sub-LING-gwal", "Salivary gland under the tongue.", "غده زیرزبانی", "mo", "oral", []],
    ["submandibular gland", "sub-man-DIB-u-lar", "Salivary gland under the lower jaw.", "غده زیرفکی", "mo", "oral", []],
    ["tenesmus", "teh-NEZ-mus", "Constant painful urge to empty the bowel.", "زورپیچ (احساس دائمی دفع)", "lo", "sx", []],
    ["thrush", "thrush", "Fungal infection of the mouth caused by Candida.", "برفک دهان", "up", "pup", []],
    ["tongue", "tung", "Muscular organ of taste that helps chewing, swallowing and speech.", "زبان", "mo", "oral", []],
    ["total parenteral nutrition", "pah-REN-ter-al nu-TRISH-un", "Complete nutrition given into a vein, bypassing the digestive tract; hyperalimentation.", "تغذیه کامل وریدی", "tx", "care", ["TPN"]],
    ["transverse colon", "trans-VERS KO-lon", "Part of the colon that crosses the abdomen from right to left.", "کولون عرضی", "bw", "bowel", []],
    ["ulcerative colitis", "UL-ser-ah-tiv ko-LI-tis", "Chronic continuous inflammation with ulcers of the colon and rectum.", "کولیت اولسراتیو (کولیت زخمی)", "lo", "plo", ["UC"]],
    ["umbilical", "um-BIL-ih-kal", "Pertaining to the navel; the central abdominal region.", "نافی", "bw", "bowel", []],
    ["umbilical hernia", "um-BIL-ih-kal", "Hernia of the intestine at the navel.", "فتق ناف", "lo", "plo", []],
    ["upper GI series", "UP-er", "X-ray study of the esophagus, stomach and duodenum with barium.", "سری گوارشی فوقانی", "tx", "img", ["UGI"]],
    ["uvula", "U-vu-lah", "Small fleshy mass hanging from the soft palate; Latin for little grape.", "زبان کوچک (زبانک)", "mo", "oral", []],
    ["uvulectomy", "u-vu-LEK-to-me", "Surgical removal of the uvula (uvul/o + -ectomy).", "برداشتن زبان کوچک", "lx", "wp", []],
    ["vagotomy", "va-GOT-o-me", "Cutting of branches of the vagus nerve to reduce stomach acid.", "قطع عصب واگ", "tx", "surg", []],
    ["villi", "VIL-i", "Tiny fingerlike projections of the small intestine lining that absorb nutrients; singular villus.", "پرزهای روده", "bw", "bowel", []],
    ["Vincent disease", "VIN-sent", "Severe infection of the gums with ulcers and bleeding; trench mouth.", "بیماری وینسان (التهاب زخمی لثه)", "up", "pup", []],
    ["virtual colonoscopy", "VER-chu-al", "CT images of the colon combined into a three-dimensional view.", "کولونوسکوپی مجازی", "tx", "img", []],
    ["volvulus", "VOL-vu-lus", "Twisting of the intestine on itself.", "ولولوس (پیچ‌خوردگی روده)", "lo", "plo", []],
    ["xerostomia", "ze-ro-STO-me-ah", "Dry mouth from lack of saliva.", "خشکی دهان", "up", "sx", []]
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
    ['a-, an-', ['an', 'a'], 'without, not, absence of', 'بدون، فاقد', '*'],
    ['anti-', ['anti'], 'against', 'ضد', 'tx'],
    ['bi-', ['bi'], 'two', 'دو', 'mo'],
    ['brady-', ['brady'], 'slow', 'کند', 'up'],
    ['circum-', ['circum'], 'around', 'دور، پیرامون', 'mo'],
    ['dia-', ['dia'], 'through, complete', 'از میان، کامل', 'lo'],
    ['dys-', ['dys'], 'bad, painful, difficult', 'بد، دردناک، دشوار', 'up'],
    ['e-', ['e'], 'out, without', 'بیرون، بدون', 'mo'],
    ['endo-', ['endo'], 'within', 'درون', 'tx'],
    ['epi-', ['epi'], 'above, upon', 'روی، بالای', 'mo'],
    ['extra-', ['extra'], 'outside', 'بیرون از', 'tx'],
    ['hemi-', ['hemi'], 'half', 'نیم', 'lx'],
    ['hyper-', ['hyper'], 'above normal, excessive', 'بیش از حد', '*'],
    ['hypo-', ['hypo'], 'below, under', 'زیر، کمتر از حد', '*'],
    ['intra-', ['intra'], 'within', 'داخل', 'tx'],
    ['mal-', ['mal'], 'bad, poor', 'بد، نادرست', 'up'],
    ['meso-', ['meso', 'mes'], 'middle', 'میانی', 'bw'],
    ['mega-', ['mega'], 'large, enlarged', 'بزرگ', 'lo'],
    ['micro-', ['micro', 'micr'], 'small', 'کوچک', 'lx'],
    ['para-', ['para'], 'beside, near', 'کنار', 'tx'],
    ['per-', ['per'], 'through', 'از راه', 'tx'],
    ['peri-', ['peri'], 'around', 'اطراف', 'mo'],
    ['poly-', ['poly'], 'many, much', 'چند، بسیار', 'up'],
    ['post-', ['post'], 'after', 'پس از', 'up'],
    ['pre-', ['pre'], 'before', 'پیش از', 'mo'],
    ['pro-', ['pro'], 'before, forward', 'پیش، جلو', 'lx'],
    ['re-', ['re'], 'back, again', 'بازگشت، دوباره', 'up'],
    ['retro-', ['retro'], 'backward', 'به عقب', 'tx'],
    ['sub-', ['sub'], 'under, below', 'زیر', 'mo'],
    ['trans-', ['trans'], 'across, through', 'از میان', 'tx'],
    // ریشه‌های دهان
    ['bucc/o', ['bucc'], 'cheek', 'گونه', 'mo'],
    ['cheil/o', ['cheil'], 'lip', 'لب', 'mo'],
    ['dent/o, dent/i', ['dent'], 'tooth, teeth', 'دندان', 'mo'],
    ['odont/o', ['odont'], 'tooth, teeth', 'دندان', 'mo'],
    ['gingiv/o', ['gingiv'], 'gum', 'لثه', 'mo'],
    ['gloss/o', ['gloss'], 'tongue', 'زبان', 'mo'],
    ['lingu/o', ['lingu'], 'tongue', 'زبان', 'mo'],
    ['gnath/o', ['gnath'], 'jaw', 'فک', 'mo'],
    ['labi/o', ['labi'], 'lip', 'لب', 'mo'],
    ['or/o', ['or'], 'mouth', 'دهان', 'mo'],
    ['stomat/o, stom/o', ['stomat', 'stom'], 'mouth', 'دهان', 'mo'],
    ['palat/o', ['palat'], 'palate', 'کام', 'mo'],
    ['sial/o', ['sial'], 'saliva, salivary gland', 'بزاق، غده بزاقی', 'mo'],
    ['sialaden/o', ['sialaden'], 'salivary gland', 'غده بزاقی', 'up'],
    ['uvul/o', ['uvul'], 'uvula', 'زبان کوچک', 'mo'],
    ['orth/o', ['orth'], 'straight', 'راست، صاف', 'mo'],
    ['pharyng/o', ['pharyng', 'pharynx'], 'pharynx', 'حلق', 'mo'],
    ['laryng/o', ['laryng'], 'larynx', 'حنجره', 'mo'],
    ['xer/o', ['xer'], 'dry', 'خشک', 'up'],
    // ریشه‌های لوله گوارش
    ['esophag/o', ['esophag'], 'esophagus', 'مری', 'mo'],
    ['gastr/o', ['gastr'], 'stomach', 'معده', 'mo'],
    ['pylor/o', ['pylor'], 'pylorus', 'پیلور', 'mo'],
    ['enter/o', ['enter'], 'intestine', 'روده', 'bw'],
    ['duoden/o', ['duoden'], 'duodenum', 'دوازدهه', 'bw'],
    ['jejun/o', ['jejun'], 'jejunum', 'ژژونوم', 'bw'],
    ['ile/o', ['ile'], 'ileum', 'ایلئوم', 'bw'],
    ['cec/o', ['cec'], 'cecum', 'سکوم', 'bw'],
    ['append/o, appendic/o', ['appendic', 'append'], 'appendix', 'آپاندیس', 'bw'],
    ['col/o, colon/o', ['colon', 'col'], 'colon', 'کولون', 'bw'],
    ['sigmoid/o', ['sigmoid'], 'sigmoid colon', 'کولون سیگموئید', 'bw'],
    ['rect/o', ['rect'], 'rectum', 'رکتوم', 'bw'],
    ['proct/o', ['proct'], 'rectum and anus', 'رکتوم و مقعد', 'bw'],
    ['an/o', ['an'], 'anus', 'مقعد', 'bw'],
    ['abdomin/o', ['abdomin'], 'abdomen', 'شکم', 'bw'],
    ['lapar/o', ['lapar'], 'abdominal wall, abdomen', 'دیواره شکم', 'tx'],
    ['celi/o', ['celi'], 'abdomen, belly', 'شکم', 'lo'],
    ['peritone/o', ['peritone', 'periton'], 'peritoneum', 'صفاق', 'bw'],
    ['diverticul/o', ['diverticul'], 'diverticulum, pouch', 'دیورتیکول، کیسه', 'lo'],
    ['polyp/o', ['polyp'], 'polyp', 'پولیپ', 'lo'],
    ['herni/o', ['herni'], 'hernia', 'فتق', 'lo'],
    ['inguin/o', ['inguin'], 'groin', 'کشاله ران', 'lo'],
    // ریشه‌های اندام‌های کمکی
    ['hepat/o', ['hepat'], 'liver', 'کبد', 'bw'],
    ['bili', ['bili'], 'bile', 'صفرا', 'bw'],
    ['chol/e, chol/o', ['chole', 'chol'], 'bile, gall', 'صفرا', 'bw'],
    ['cholecyst/o', ['cholecyst'], 'gallbladder', 'کیسه صفرا', 'bw'],
    ['cholangi/o', ['cholangi', 'cholang'], 'bile duct', 'مجرای صفراوی', 'bw'],
    ['choledoch/o', ['choledoch'], 'common bile duct', 'مجرای صفراوی مشترک', 'bw'],
    ['pancreat/o', ['pancreat'], 'pancreas', 'پانکراس', 'bw'],
    ['splen/o', ['splen'], 'spleen', 'طحال', 'lo'],
    ['cirrh/o', ['cirrh'], 'yellow, tawny', 'زرد', 'lo'],
    ['lith/o', ['lith'], 'stone', 'سنگ', 'lo'],
    ['cyst/o', ['cyst'], 'sac, bladder', 'کیسه', 'bw'],
    ['lip/o, steat/o', ['steat', 'lip'], 'fat', 'چربی', 'bw'],
    ['amyl/o', ['amyl'], 'starch', 'نشاسته', 'bw'],
    ['glyc/o', ['glyc'], 'sugar', 'قند', 'bw'],
    // ریشه‌های عمومی
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', 'خون', '*'],
    ['melan/o', ['melan'], 'black', 'سیاه', 'up'],
    ['orex/o', ['orex'], 'appetite', 'اشتها', 'up'],
    ['pyr/o', ['pyr'], 'fire, heat', 'آتش، سوزش', 'up'],
    ['aer/o', ['aer'], 'air', 'هوا', 'up'],
    ['odyn/o', ['odyn'], 'pain', 'درد', 'up'],
    ['halit/o', ['halit'], 'breath', 'نفس', 'up'],
    ['man/o', ['man'], 'pressure', 'فشار', 'tx'],
    ['my/o', ['my'], 'muscle', 'ماهیچه', '*'],
    ['nas/o', ['nas'], 'nose', 'بینی', 'tx'],
    ['cutane/o', ['cutane'], 'skin', 'پوست', 'tx'],
    ['vag/o', ['vag'], 'vagus nerve', 'عصب واگ', 'tx'],
    ['bar/o', ['bar'], 'weight', 'وزن', 'tx'],
    ['carcin/o', ['carcin'], 'cancer', 'سرطان', 'lo'],
    // پسوندهای علامت و بیماری
    ['-algia, -dynia', ['algia', 'dynia'], 'pain', 'درد', 'lx'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-osis', ['osis'], 'condition, abnormal condition', 'حالت (بیمارگونه)', '*'],
    ['-iasis', ['iasis'], 'abnormal condition', 'بیماری، حالت', 'lo'],
    ['-emesis', ['emesis'], 'vomiting', 'استفراغ', 'up'],
    ['-emetic', ['emetic'], 'pertaining to vomiting', 'مربوط به استفراغ', 'tx'],
    ['-pepsia', ['pepsia'], 'digestion', 'هضم', 'up'],
    ['-phagia', ['phagia'], 'eating, swallowing', 'خوردن، بلع', 'up'],
    ['-prandial', ['prandial'], 'meal', 'وعده غذا', 'up'],
    ['-chezia', ['chezia'], 'defecation, elimination of wastes', 'دفع مدفوع', 'lo'],
    ['-rrhea', ['rrhea', 'rhea'], 'flow, discharge', 'جریان، ترشح', 'lo'],
    ['-stasis', ['stasis'], 'stoppage', 'ایستایی، توقف', 'lo'],
    ['-megaly', ['megaly'], 'enlargement', 'بزرگی', 'lo'],
    ['-oma', ['oma'], 'tumor', 'تومور', 'lo'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', 'lx'],
    ['-plegia', ['plegia'], 'paralysis', 'فلج', 'lx'],
    ['-paresis', ['paresis'], 'partial paralysis', 'فلج نسبی', 'lx'],
    ['-ptosis', ['ptosis'], 'drooping, downward displacement', 'افتادگی', 'lx'],
    ['-cele', ['cele'], 'hernia, protrusion', 'فتق، بیرون‌زدگی', 'lx'],
    ['-spasm', ['spasm'], 'sudden involuntary contraction', 'گرفتگی ناگهانی', 'lx'],
    ['-stenosis', ['stenosis'], 'narrowing', 'تنگی', 'lx'],
    ['-ectasis', ['ectasis'], 'dilatation, expansion', 'گشادی', 'lx'],
    ['-lysis', ['lysis'], 'destruction, breaking down', 'تخریب، تجزیه', 'lx'],
    ['-genesis, -genic, -gen', ['genesis', 'genic', 'gen'], 'formation, originating in', 'پیدایش، زاییده از', 'lx'],
    ['-cyte', ['cyte'], 'cell', 'سلول', 'bw'],
    ['-ase', ['ase'], 'enzyme', 'آنزیم', 'bw'],
    ['-ole', ['ole'], 'small', 'کوچک', 'bw'],
    ['-tropic', ['tropic'], 'acting on', 'اثرکننده بر', 'lx'],
    // پسوندهای تشخیص و جراحی
    ['-scope', ['scope'], 'instrument for examining', 'ابزار دیدن', 'tx'],
    ['-scopy', ['scopy'], 'examination with a scope', 'دیدن با ابزار', 'tx'],
    ['-scopic', ['scopic'], 'pertaining to viewing with a scope', 'مربوط به دیدن با ابزار', 'tx'],
    ['-gram', ['gram'], 'record, image', 'تصویر، ثبت', 'tx'],
    ['-graphy', ['graphy'], 'process of recording, imaging', 'روش تصویربرداری', 'tx'],
    ['-centesis', ['centesis'], 'puncture to remove fluid', 'سوراخ کردن برای کشیدن مایع', 'tx'],
    ['-ectomy', ['ectomy'], 'surgical removal', 'برداشتن', 'tx'],
    ['-tomy', ['tomy'], 'incision, cutting into', 'برش', 'tx'],
    ['-stomy', ['stomy'], 'surgical opening', 'ساختن دهانه', 'tx'],
    ['-plasty', ['plasty'], 'surgical repair', 'ترمیم', 'tx'],
    ['-rrhaphy', ['rrhaphy', 'rhaphy'], 'suture', 'بخیه', 'tx'],
    ['-pexy', ['pexy'], 'surgical fixation', 'ثابت کردن', 'tx'],
    ['-tripsy', ['tripsy'], 'crushing', 'خرد کردن', 'tx'],
    ['-clysis', ['clysis'], 'irrigation, washing', 'شست‌وشو', 'tx'],
    ['-tome', ['tome'], 'cutting instrument', 'ابزار برش', 'tx'],
    ['-metry', ['metry'], 'measurement', 'اندازه‌گیری', 'tx'],
    ['-iatric', ['iatric'], 'pertaining to medical treatment', 'مربوط به درمان', 'tx'],
    ['-logy, -logist', ['logist', 'logy'], 'study of, specialist in', 'دانش، متخصص', '*'],
    // پسوندهای صفت و اسم
    ['-ic, -ac, -al, -eal, -ar, -ary, -ous', ['eal', 'ary', 'ic', 'ac', 'al', 'ar', 'ous'], 'pertaining to', 'مربوط به', '*'],
    ['-ics', ['ics'], 'science, art of', 'دانش، فن', '*'],
    ['-ulous', ['ulous'], 'pertaining to', 'مربوط به', '*'],
    ['-emia', ['emia'], 'blood condition', 'حالت خون', '*'],
    ['-ia, -y', ['ia', 'y'], 'condition, process', 'حالت، فرایند', '*'],
    ['-ion, -ation', ['ation', 'ion'], 'process', 'فرایند', '*'],
    ['-ist', ['ist'], 'specialist', 'متخصص', '*'],
    ['-ism', ['ism'], 'condition, state', 'حالت', '*'],
    ['-um, -us', ['um', 'us'], 'structure, thing', 'ساختار، چیز', '*']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها و نمادها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    // دهان تا معده
    ['GI', 'gastrointestinal', 'گوارشی', 'mo'],
    ['LES', 'lower esophageal sphincter', 'اسفنکتر تحتانی مری', 'mo'],
    ['HCl', 'hydrochloric acid', 'اسید کلریدریک', 'mo'],
    ['TMJ', 'temporomandibular joint', 'مفصل گیجگاهی‌فکی', 'mo'],
    ['po, PO', 'by mouth (per os)', 'از راه دهان', 'mo'],
    // روده‌ها و اندام‌های کمکی
    ['GB', 'gallbladder', 'کیسه صفرا', 'bw'],
    ['CBD', 'common bile duct', 'مجرای صفراوی مشترک', 'bw'],
    ['RUQ', 'right upper quadrant', 'ربع راست بالای شکم', 'bw'],
    ['LUQ', 'left upper quadrant', 'ربع چپ بالای شکم', 'bw'],
    ['RLQ', 'right lower quadrant', 'ربع راست پایین شکم', 'bw'],
    ['LLQ', 'left lower quadrant', 'ربع چپ پایین شکم', 'bw'],
    ['BM', 'bowel movement', 'اجابت مزاج', 'bw'],
    ['BS', 'bowel sounds', 'صداهای روده', 'bw'],
    // دهان، مری و معده
    ['GERD', 'gastroesophageal reflux disease', 'بیماری ریفلاکس معده به مری', 'up'],
    ['GER', 'gastroesophageal reflux', 'ریفلاکس معده به مری', 'up'],
    ['PUD', 'peptic ulcer disease', 'بیماری زخم پپتیک', 'up'],
    ['H. pylori', 'Helicobacter pylori', 'هلیکوباکتر پیلوری', 'up'],
    ['N&V', 'nausea and vomiting', 'تهوع و استفراغ', 'up'],
    ['N/V/D', 'nausea, vomiting, diarrhea', 'تهوع، استفراغ و اسهال', 'up'],
    ['pp', 'postprandial (after a meal)', 'پس از غذا', 'up'],
    ['HSV-1', 'herpes simplex virus type 1', 'ویروس هرپس سیمپلکس نوع ۱', 'up'],
    ['BMI', 'body mass index', 'شاخص توده بدن', 'up'],
    // روده، کبد و صفرا
    ['IBD', 'inflammatory bowel disease', 'بیماری التهابی روده', 'lo'],
    ['IBS', 'irritable bowel syndrome', 'سندرم روده تحریک‌پذیر', 'lo'],
    ['CD', 'Crohn disease', 'بیماری کرون', 'lo'],
    ['UC', 'ulcerative colitis', 'کولیت اولسراتیو', 'lo'],
    ['FAP', 'familial adenomatous polyposis', 'پولیپوز آدنوماتوز خانوادگی', 'lo'],
    ['HAV', 'hepatitis A virus', 'ویروس هپاتیت A', 'lo'],
    ['HBV', 'hepatitis B virus', 'ویروس هپاتیت B', 'lo'],
    ['HCV', 'hepatitis C virus', 'ویروس هپاتیت C', 'lo'],
    ['HDV', 'hepatitis D virus', 'ویروس هپاتیت D', 'lo'],
    ['HEV', 'hepatitis E virus', 'ویروس هپاتیت E', 'lo'],
    // تشخیص، جراحی و دارو
    ['EGD', 'esophagogastroduodenoscopy', 'آندوسکوپی مری، معده و دوازدهه', 'tx'],
    ['ERCP', 'endoscopic retrograde cholangiopancreatography', 'تصویربرداری مجاری صفرا و پانکراس با آندوسکوپ', 'tx'],
    ['MRCP', 'magnetic resonance cholangiopancreatography', 'ام‌آر مجاری صفرا و پانکراس', 'tx'],
    ['PTC', 'percutaneous transhepatic cholangiography', 'کلانژیوگرافی از راه پوست و کبد', 'tx'],
    ['UGI', 'upper gastrointestinal (series)', 'سری گوارشی فوقانی', 'tx'],
    ['BE', 'barium enema', 'تنقیه باریم', 'tx'],
    ['FOBT', 'fecal occult blood test', 'آزمایش خون مخفی مدفوع', 'tx'],
    ['O&P', 'ova and parasites', 'تخم انگل و انگل', 'tx'],
    ['LFT', 'liver function tests', 'آزمایش‌های عملکرد کبد', 'tx'],
    ['ALT', 'alanine aminotransferase', 'آنزیم کبدی ALT', 'tx'],
    ['AST', 'aspartate aminotransferase', 'آنزیم کبدی AST', 'tx'],
    ['ESWL', 'extracorporeal shock wave lithotripsy', 'سنگ‌شکنی با موج ضربه‌ای از بیرون بدن', 'tx'],
    ['NG', 'nasogastric', 'بینی‌معدی', 'tx'],
    ['PEG', 'percutaneous endoscopic gastrostomy', 'گاستروستومی از راه پوست با آندوسکوپ', 'tx'],
    ['TPN', 'total parenteral nutrition', 'تغذیه کامل وریدی', 'tx'],
    ['NPO', 'nothing by mouth (nil per os)', 'هیچ چیز از راه دهان', 'tx'],
    ['PPI', 'proton pump inhibitor', 'مهارکننده پمپ پروتون', 'tx'],
    ['PONV', 'postoperative nausea and vomiting', 'تهوع و استفراغ پس از عمل', 'tx'],
    ['OTC', 'over the counter', 'بدون نسخه', 'tx'],
    ['ac', 'before meals', 'پیش از غذا', 'tx'],
    ['pc', 'after meals', 'پس از غذا', 'tx']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {};
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], c: r[5], ab: r[6] || [] }));
  /* ---------- دسته‌بندی واژه‌ها ----------
   * دسته هر واژه در داده‌ها (tools/terms) دستی تعیین شده است؛ این‌جا فقط نام و نماد دسته‌ها آمده است. */
  const CATS = [
    { id: 'sci', icon: '🎓', name: 'واژه‌های پایه' },
    { id: 'wp', icon: '🧩', name: 'واژه‌های ساخته از اجزا' },
    { id: 'spec', icon: '👩‍⚕️', name: 'تخصص‌ها و حرفه‌ها' },
    { id: 'phys', icon: '⚙️', name: 'فرایندهای گوارش' },
    { id: 'oral', icon: '🦷', name: 'دهان، دندان و بزاق' },
    { id: 'upper', icon: '🍽️', name: 'حلق، مری و معده' },
    { id: 'bowel', icon: '🌀', name: 'روده‌ها، صفاق و نواحی شکم' },
    { id: 'acc', icon: '🟤', name: 'کبد، صفرا و پانکراس' },
    { id: 'sx', icon: '🔎', name: 'علائم و نشانه‌ها' },
    { id: 'pup', icon: '🔥', name: 'بیماری‌های دهان، مری و معده' },
    { id: 'plo', icon: '🩹', name: 'بیماری‌های روده و مقعد' },
    { id: 'pacc', icon: '🟡', name: 'بیماری‌های کبد، صفرا و پانکراس' },
    { id: 'endo', icon: '🔭', name: 'آندوسکوپی' },
    { id: 'img', icon: '🩻', name: 'تصویربرداری' },
    { id: 'lab', icon: '🧪', name: 'آزمایش‌ها و نمونه‌برداری' },
    { id: 'surg', icon: '✂️', name: 'جراحی' },
    { id: 'care', icon: '🤝', name: 'لوله‌ها، تغذیه و مراقبت' },
    { id: 'drug', icon: '💊', name: 'داروهای گوارش' }
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
      return { kind: 'mcq', tag: 'term', q: `معنی ${E(`<b>${t.t}</b>`)} چیست؟`, opts: [t].concat(ds).map(x => x.fa), a: 0, why: why(t) };
    };
    G['f2t:' + W] = () => {
      const pool = termsOf(w), t = rnd(pool);
      const ds = distract(pool, t, x => norm(x.t), 3);
      return { kind: 'mcq', tag: 'term', q: `واژه پزشکی «<b>${t.fa}</b>» کدام است؟`, opts: [t].concat(ds).map(x => E(x.t)), a: 0, why: why(t) };
    };
    G['d2t:' + W] = () => {
      const pool = termsOf(w).filter(x => x.d.length > 25), t = rnd(pool);
      const ds = distract(pool, t, x => norm(x.t), 3);
      const d = defShort(t.d).replace(new RegExp(t.t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig'), '_____');
      return { kind: 'mcq', tag: 'def', q: `این تعریف انگلیسی مربوط به کدام واژه است؟<span class="defq" dir="ltr">${d}</span>`, opts: [t].concat(ds).map(x => E(x.t)), a: 0, why: why(t) };
    };
    G['sp:' + W] = () => {
      const pool = termsOf(w).filter(x => /^[A-Za-z][a-z-]+(?: [a-z-]+)?$/.test(x.t) && x.t.length <= 22), t = rnd(pool);
      return { kind: 'spell', tag: 'spell', q: `املای انگلیسی «<b>${t.fa}</b>» را بنویس`, ans: [t.t], why: why(t), hint: t.p ? `/${t.p}/` : t.t[0] + '…' };
    };
    G['r2m:' + W] = () => {
      const pool = rootsOf(W), r = rnd(pool);
      const ds = distract(ROOTS, r, x => x.fa, 3);
      return { kind: 'mcq', tag: 'root', q: `${r.kind === 'suffix' ? 'پسوند' : r.kind === 'prefix' ? 'پیشوند' : 'ریشه'} ${E(`<b>${r.a}</b>`)} یعنی…`, opts: [r].concat(ds).map(x => x.fa), a: 0, why: `${E(`<b>${r.a}</b>`)} = ${r.fa} <span dir="ltr">(${r.en})</span>${example(r)}` };
    };
    G['m2r:' + W] = () => {
      const pool = rootsOf(W), r = rnd(pool);
      const ds = distract(ROOTS.filter(x => x.kind === r.kind || Math.random() < 0.3), r, x => x.fa, 3);
      return { kind: 'mcq', tag: 'root', q: `کدام جزء واژه یعنی «<b>${r.fa}</b>»؟`, opts: [r].concat(ds).map(x => E(x.a)), a: 0, why: `${E(`<b>${r.a}</b>`)} = ${r.fa} <span dir="ltr">(${r.en})</span>${example(r)}` };
    };
    G['wb:' + W] = () => {
      const pool = buildable(w).length >= 4 ? buildable(w) : buildable(null), x = rnd(pool);
      const used = new Set(x.parts.map(p => p.r.id));
      const extra = shuffle(ROOTS.filter(r => !used.has(r.id) && inW(r, w) && r.w !== '*')).slice(0, 3).map(r => r.kind === 'root' ? r.a.split(',')[0] : r.a.split(',')[0]);
      return { kind: 'build', tag: 'build', q: `واژه‌ای بساز به معنی «<b>${short(x.t.fa)}</b>»`, parts: x.parts.map(partLabel), extra, why: why(x.t) + `<div class="wbx">${x.parts.map(p => `<span><b dir="ltr">${partLabel(p)}</b> ${p.r.fa}</span>`).join('')}</div>` };
    };
    G['ab:' + W] = () => {
      const own = ABBR.filter(a => !w || a.w === w), pool = own.length >= 3 ? own : ABBR, a = rnd(pool);
      const ds = distract(ABBR, a, x => x.fa, 3);
      return { kind: 'mcq', tag: 'abbr', q: `اختصار ${E(`<b>${a.a}</b>`)} یعنی…`, opts: [a].concat(ds).map(x => x.fa), a: 0, why: `${E(`<b>${a.a}</b>`)} = <span dir="ltr">${a.full}</span><br>${a.fa}` };
    };
  });
  /** نمونه واژه برای یک ریشه */
  function example(r) {
    const ex = TERMS.filter(t => /^[a-z]+$/i.test(t.t) && analyze(t.t).parts.some(p => p.r === r)).slice(0, 3);
    return ex.length ? `<br><small>مثال: ${ex.map(t => E(t.t)).join('، ')}</small>` : '';
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
  const f = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${+((p.size || 10) * FS).toFixed(2)}" font-weight="${p.w || 600}" fill="${p.fill || MUTED}" text-anchor="${FLIP[p.anchor || 'middle']}" direction="rtl" font-family="${FONT_FA}">${LRI(s)}</text>`; };
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
    return svg(360, 206, `${f(180, 24, 'یک واژه = ریشه + (واکه رابط) + پسوند', { size: 11.5, fill: INK, w: 800 })}
      ${part(8, 112, 'cholecyst', '#1c7ed6', '#e1effc')}${part(126, 26, 'o', '#adb5bd', '#fff', true)}${part(158, 84, 'ectomy', '#2b8a3e', '#e6fcf5')}
      <path d="M128 50 L150 80" stroke="#e03131" stroke-width="2.5"/>
      ${br(8, 120, 'root', 'ریشه: کیسه صفرا', '#1c7ed6')}${br(126, 152, 'o', 'می‌افتد', '#e03131')}${br(158, 242, 'suffix', 'پسوند: برداشتن', '#2b8a3e')}
      <path d="M246 64 h6" stroke="${LINE}" stroke-width="2"/><rect x="254" y="40" width="102" height="50" rx="10" fill="${VIO_BG}"/>${f(305, 61, 'برداشتن کیسه صفرا', { size: 10.5, fill: VIO, w: 800 })}${t(305, 79, 'cholecystectomy', { size: 9, fill: INK })}
      ${f(180, 166, 'پیش از پسوند صدادار مثل ‎-ectomy واکه o نمی‌آید', { size: 9.5, fill: '#e03131', w: 700 })}
      ${f(180, 192, 'معنی را از آخر بخوان: اول پسوند (چه شده؟)، بعد ریشه (کجا؟)', { size: 10, fill: VIO, w: 700 })}`, 'آناتومی واژه cholecystectomy');
  };

  /* ریشه‌های دهان (جدول ۱۳-۱) */
  A['mouth-roots'] = () => {
    const sh = 's' + (++UID);
    const R = [['or/o • stomat/o', 'دهان', '👄', '#e8590c'], ['bucc/o', 'گونه', '😊', '#d6336c'], ['labi/o • cheil/o', 'لب', '💋', '#c2255c'], ['dent/o • odont/o', 'دندان', '🦷', '#1c7ed6'],
      ['gingiv/o', 'لثه', '🩷', '#e64980'], ['gloss/o • lingu/o', 'زبان', '👅', '#f03e3e'], ['gnath/o', 'فک', '🦴', '#495057'], ['palat/o', 'کام', '⛺', '#7048e8'], ['sial/o', 'بزاق، غده بزاقی', '💧', '#1098ad'], ['uvul/o', 'زبان کوچک', '🔔', '#2b8a3e']];
    return svg(360, 262, `<defs>${shadow(sh)}</defs>${f(180, 20, 'ریشه‌های دهان', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ic, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 45; return `${card(x, y, 168, 39, '#f8f9fa', sh)}<text x="${x + 152}" y="${y + 26}" font-size="16" text-anchor="middle">${ic}</text>${t(x + 10, y + 17, en, { size: 11.5, fill: c, w: 900, anchor: 'start' })}${f(x + 10, y + 32, fa, { size: 9.5, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, 'ریشه‌های دهان');
  };

  /* ریشه‌های لوله گوارش به ترتیب مسیر غذا */
  A['tract-roots'] = () => {
    const R = [['esophag/o', 'مری', '#f08c00'], ['gastr/o', 'معده', '#e8590c'], ['pylor/o', 'پیلور', '#d9480f'], ['duoden/o', 'دوازدهه', '#c2255c'], ['jejun/o', 'ژژونوم', '#a61e4d'], ['ile/o', 'ایلئوم', '#862e9c'],
      ['cec/o', 'سکوم', '#5f3dc4'], ['col/o', 'کولون', '#364fc7'], ['sigmoid/o', 'سیگموئید', '#1864ab'], ['rect/o', 'رکتوم', '#0b7285'], ['proct/o', 'رکتوم و مقعد', '#087f5b'], ['an/o', 'مقعد', '#2b8a3e']];
    const pos = i => { const row = Math.floor(i / 3), k = i % 3, col = row % 2 ? k : 2 - k; return [14 + col * 116, 40 + row * 60]; };
    let path = '', body = '';
    R.forEach((r, i) => { const [x, y] = pos(i); path += (i ? ' L' : 'M') + (x + 52) + ' ' + (y + 22); });
    R.forEach(([en, fa, c], i) => { const [x, y] = pos(i); body += `<rect x="${x}" y="${y}" width="104" height="44" rx="12" fill="#fff" stroke="${c}" stroke-width="2"/>${t(x + 52, y + 19, en, { size: 11.5, fill: c, w: 900 })}${f(x + 52, y + 36, fa, { size: 9.5, fill: INK, w: 700 })}<circle cx="${x + 8}" cy="${y + 8}" r="8" fill="${c}"/>${t(x + 8, y + 12, i + 1, { size: 9, fill: '#fff', w: 900 })}`; });
    return svg(360, 290, `${f(180, 22, 'ریشه‌ها به ترتیب مسیر غذا (از ۱ تا ۱۲)', { size: 11.5, fill: INK, w: 800 })}<path d="${path}" stroke="#ffd8a8" stroke-width="10" fill="none" stroke-linejoin="round" stroke-linecap="round"/>${body}`, 'ریشه‌های لوله گوارش');
  };

  /* ریشه‌های اندام‌های کمکی روی نقشه مجاری */
  A['acc-roots'] = () => {
    const sh = 's' + (++UID);
    return svg(360, 262, `<defs>${shadow(sh)}${linear('lv' + UID, '#c0504d', '#8f2d2a', true)}</defs>${f(180, 20, 'ریشه‌های کبد، صفرا و پانکراس', { size: 11.5, fill: INK, w: 800 })}
      <path d="M40 44 C70 30 170 30 200 50 C214 62 196 88 160 104 C120 120 76 124 52 114 C30 104 26 60 40 44Z" fill="url(#lv${UID})" filter="url(#${sh})"/>
      <path d="M120 98 V140 M120 140 C120 160 132 176 150 186" stroke="#2f9e44" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M120 128 C104 128 92 136 88 150" stroke="#2f9e44" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M70 150 C70 136 92 136 98 150 C104 170 90 190 78 186 C66 182 66 162 70 150Z" fill="#69db7c" stroke="#2b8a3e" stroke-width="2"/>
      <path d="M150 186 C170 196 196 206 232 200 C262 196 290 186 300 176" stroke="#e8c468" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M152 188 C190 200 250 200 298 176" stroke="#b8923a" stroke-width="2" fill="none"/>
      <path d="M140 172 C140 214 156 236 186 238 C204 238 210 220 196 206" stroke="#f4a3a8" stroke-width="18" fill="none" stroke-linecap="round"/>
      ${pin(110, 60, 250, 54, '#8f2d2a')}${lab(300, 50, 'hepat/o', 'کبد', { fill: '#8f2d2a', size: 12 })}
      ${pin(124, 120, 250, 96, '#2b8a3e')}${lab(300, 92, 'chol/e • bili', 'صفرا', { fill: '#2b8a3e', size: 12 })}
      ${pin(80, 170, 40, 222, '#2b8a3e')}${lab(52, 238, 'cholecyst/o', 'کیسه صفرا', { fill: '#2b8a3e', size: 10.5 })}
      ${pin(105, 133, 34, 150, '#5c940d')}${lab(34, 166, 'cholangi/o', 'مجرای صفراوی', { fill: '#5c940d', size: 10.5 })}
      ${pin(128, 160, 250, 138, '#087f5b')}${lab(300, 134, 'choledoch/o', 'مجرای صفراوی مشترک', { fill: '#087f5b', size: 11 })}
      ${pin(240, 198, 290, 218, '#b8923a')}${lab(300, 236, 'pancreat/o', 'پانکراس', { fill: '#a07a1a', size: 12 })}`, 'ریشه‌های کبد و صفرا');
  };

  /* ریشه‌های هم‌معنی */
  A.synonyms = () => {
    const sh = 's' + (++UID);
    const P = [['or/o', 'stomat/o', 'دهان', '#e8590c'], ['gloss/o', 'lingu/o', 'زبان', '#f03e3e'], ['dent/o', 'odont/o', 'دندان', '#1c7ed6'], ['labi/o', 'cheil/o', 'لب', '#c2255c'],
      ['col/o', 'colon/o', 'کولون', '#364fc7'], ['chol/e', 'bili', 'صفرا', '#2b8a3e'], ['append/o', 'appendic/o', 'آپاندیس', '#7048e8'], ['abdomin/o', 'lapar/o', 'شکم', '#e67700']];
    return svg(360, 254, `<defs>${shadow(sh)}</defs>${f(180, 20, 'دو ریشه، یک معنی', { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([a, b, fa, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 54; return `${card(x, y, 168, 46, '#f8f9fa', sh)}${t(x + 44, y + 20, a, { size: 11.5, fill: c, w: 900 })}${t(x + 84, y + 20, '=', { size: 12, fill: MUTED })}${t(x + 126, y + 20, b, { size: 11.5, fill: c, w: 900 })}${f(x + 84, y + 38, fa, { size: 10, fill: INK, w: 700 })}`; }).join('')}`, 'ریشه‌های هم‌معنی');
  };

  /* پسوندهای علامت گوارشی */
  A['sx-suffixes'] = () => {
    const sh = 's' + (++UID);
    const R = [['-emesis', 'استفراغ', 'hematemesis', '🤮', '#c92a2a'], ['-pepsia', 'هضم', 'dyspepsia', '🍲', '#e8590c'], ['-phagia', 'خوردن، بلع', 'dysphagia', '🍴', '#e67700'], ['-prandial', 'وعده غذا', 'postprandial', '🕐', '#5c940d'],
      ['-chezia', 'دفع مدفوع', 'hematochezia', '🚽', '#a61e4d'], ['-rrhea', 'جریان، ترشح', 'diarrhea', '💧', '#1971c2'], ['-lithiasis', 'بیماری سنگ', 'cholelithiasis', '🪨', '#5c5f66'], ['-stasis', 'ایستایی', 'cholestasis', '⏸️', '#7048e8']];
    return svg(360, 274, `<defs>${shadow(sh)}</defs>${f(180, 20, 'پسوندهای علامت‌های گوارشی', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ex, ic, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 60; return `${card(x, y, 168, 52, '#f8f9fa', sh)}<text x="${x + 150}" y="${y + 24}" font-size="16" text-anchor="middle">${ic}</text>${t(x + 10, y + 18, en, { size: 12, fill: c, w: 900, anchor: 'start' })}${f(x + 10, y + 32, fa, { size: 9.5, fill: INK, w: 700, anchor: 'start' })}${t(x + 10, y + 46, ex, { size: 9, fill: MUTED, w: 700, anchor: 'start' })}`; }).join('')}`, 'پسوندهای علامت');
  };

  /* پسوندهای جراحی و تشخیص روی یک لوله */
  A['surg-suffixes'] = () => {
    const sh = 's' + (++UID);
    const tube = (x, y) => `<rect x="${x}" y="${y}" width="56" height="20" rx="10" fill="#ffc9c9" stroke="#e03131" stroke-width="1.5"/>`;
    const R = [
      ['-ectomy', 'برداشتن', `${tube(0, 0)}<rect x="18" y="-3" width="20" height="26" fill="#f8f9fa"/><path d="M18 -3 v26 M38 -3 v26" stroke="#c92a2a" stroke-dasharray="3 2"/>`, '#c92a2a'],
      ['-tomy', 'برش', `${tube(0, 0)}<path d="M28 -6 v32" stroke="#212529" stroke-width="2.2"/>`, '#495057'],
      ['-stomy', 'ساختن دهانه', `${tube(0, 0)}<ellipse cx="56" cy="10" rx="5" ry="10" fill="#c92a2a"/><path d="M62 -6 v32" stroke="#e9b994" stroke-width="5"/>`, '#d6336c'],
      ['-plasty', 'ترمیم', `${tube(0, 0)}<path d="M20 4 q8 12 16 0" stroke="#2b8a3e" stroke-width="2.4" fill="none"/>`, '#2b8a3e'],
      ['-rrhaphy', 'بخیه', `${tube(0, 0)}<path d="M28 -4 v28" stroke="#c92a2a"/><path d="M22 0 l12 6 M22 7 l12 6 M22 14 l12 6" stroke="#1c7ed6" stroke-width="1.8"/>`, '#1c7ed6'],
      ['-pexy', 'ثابت کردن', `${tube(0, 0)}<path d="M28 20 v10 M20 30 h16" stroke="#495057" stroke-width="2.4"/><circle cx="28" cy="20" r="3" fill="#495057"/>`, '#5c5f66'],
      ['-tripsy', 'خرد کردن', `<circle cx="14" cy="10" r="9" fill="#adb5bd"/><path d="M28 10 h8" stroke="#e8590c" stroke-width="2.4"/><circle cx="44" cy="4" r="3" fill="#adb5bd"/><circle cx="50" cy="13" r="3.5" fill="#adb5bd"/><circle cx="42" cy="16" r="2.5" fill="#adb5bd"/>`, '#e8590c'],
      ['-scopy', 'دیدن درون', `${tube(0, 0)}<path d="M-6 10 C10 10 20 10 40 10" stroke="#212529" stroke-width="2.2"/><circle cx="41" cy="10" r="3" fill="#ffd43b"/>`, '#1098ad']];
    return svg(360, 274, `<defs>${shadow(sh)}</defs>${f(180, 20, 'هشت پسوند جراحی و تشخیص', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ic, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 60; return `${card(x, y, 168, 52, '#f8f9fa', sh)}<g transform="translate(${x + 96} ${y + 16})">${ic}</g>${t(x + 10, y + 22, en, { size: 12, fill: c, w: 900, anchor: 'start' })}${f(x + 10, y + 40, fa, { size: 9.5, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, 'پسوندهای جراحی');
  };

  /* نام‌گذاری استومی و آناستوموز */
  A['stomy-naming'] = () => {
    const gut = (d, c) => `<path d="${d}" stroke="${c}" stroke-width="16" fill="none" stroke-linecap="round"/>`;
    return svg(360, 236, `${f(180, 20, 'یک اندام به پوست یا دو اندام به هم؟', { size: 11.5, fill: INK, w: 800 })}
      <rect x="186" y="32" width="166" height="150" rx="14" fill="#fff4e6"/><rect x="8" y="32" width="166" height="150" rx="14" fill="#e6fcf5"/>
      <rect x="318" y="44" width="16" height="122" rx="6" fill="#f2c9a5"/>${f(326, 178, 'پوست شکم', { size: 8.5 })}
      ${gut('M214 150 C214 90 250 80 300 100 L318 104', '#f4a3a8')}<ellipse cx="318" cy="104" rx="6" ry="9" fill="#c92a2a"/>
      ${lab(256, 64, 'ileostomy', 'ایلئوم به پوست', { fill: '#d9480f', size: 11.5 })}
      ${gut('M40 64 C80 50 110 70 96 96', '#ffa8a8')}${gut('M96 104 C80 130 110 160 150 148', '#fcc2d7')}<circle cx="96" cy="100" r="9" fill="#fff" stroke="#2b8a3e" stroke-width="2.5"/>
      ${f(46, 88, 'معده', { size: 9, anchor: 'start', fill: INK })}${f(136, 134, 'ژژونوم', { size: 9, anchor: 'middle', fill: INK })}
      ${lab(91, 170, 'gastrojejunostomy', '', { fill: '#2b8a3e', size: 10.5 })}
      ${f(269, 204, 'یک ریشه + ‎-stomy = دهانه به بیرون', { size: 9.5, fill: '#d9480f', w: 700 })}${f(91, 204, 'دو ریشه + ‎-stomy = آناستوموز', { size: 9.5, fill: '#2b8a3e', w: 700 })}
      ${f(180, 228, 'به اتصال جراحی دو اندام توخالی anastomosis می‌گویند', { size: 9.5, fill: VIO, w: 700 })}`, 'نام‌گذاری استومی');
  };

  /* جمع واژه‌های یونانی و لاتین */
  A.plurals = () => {
    const sh = 's' + (++UID);
    const R = [['diverticulum', 'diverticula', '-um → -a'], ['gingiva', 'gingivae', '-a → -ae'], ['calculus', 'calculi', '-us → -i'], ['villus', 'villi', '-us → -i'], ['anastomosis', 'anastomoses', '-is → -es'], ['varix', 'varices', '-ix → -ices']];
    return svg(360, 248, `<defs>${shadow(sh)}</defs>${f(180, 20, 'مفرد ← جمع', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([a, b, rule], i) => { const y = 32 + i * 35; return `${card(8, y, 344, 29, i % 2 ? '#f8f9fa' : '#f3f0ff', sh)}${t(20, y + 19, a, { size: 11.5, fill: INK, w: 800, anchor: 'start' })}${t(176, y + 19, '→', { size: 13, fill: MUTED })}${t(196, y + 19, b, { size: 11.5, fill: '#7048e8', w: 900, anchor: 'start' })}${t(342, y + 19, rule, { size: 9.5, fill: MUTED, anchor: 'end' })}`; }).join('')}`, 'جمع واژه‌ها');
  };

  /* واژه‌های هم‌آوا و شبیه */
  A.lookalikes = () => {
    const sh = 's' + (++UID);
    const R = [['ileum', 'روده ایلئوم', 'ilium', 'استخوان لگن', 'e مثل intestine'], ['dysphagia', 'سختی بلع', 'dysphasia', 'سختی گفتار', 'g مثل gag، s مثل speak'], ['stomat/o', 'دهان', 'gastr/o', 'معده', 'stomat/o معده نیست!'], ['chol/e', 'صفرا', 'col/o', 'کولون', 'cholecystitis، نه colecystitis']];
    return svg(360, 262, `<defs>${shadow(sh)}</defs>${f(180, 20, 'مراقب واژه‌های شبیه باش', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([a, af, b, bf, tip], i) => { const y = 32 + i * 57; return `${card(8, y, 344, 50, '#f8f9fa', sh)}${t(270, y + 20, a, { size: 12, fill: '#1c7ed6', w: 900 })}${f(270, y + 36, af, { size: 9.5, fill: INK, w: 700 })}${t(180, y + 22, '≠', { size: 16, fill: '#e03131', w: 900 })}${t(90, y + 20, b, { size: 12, fill: '#e8590c', w: 900 })}${f(90, y + 36, bf, { size: 9.5, fill: INK, w: 700 })}${f(180, y + 47, tip, { size: 8.5, fill: VIO })}`; }).join('')}`, 'واژه‌های شبیه');
  };

  /* ساختن صفت از ریشه */
  A['adj-endings'] = () => {
    const R = [['esophag', '-eal', 'esophageal', 'مری‌ای', '#f08c00'], ['pharyng', '-eal', 'pharyngeal', 'حلقی', '#e8590c'], ['gastr', '-ic', 'gastric', 'معدی', '#d6336c'], ['duoden', '-al', 'duodenal', 'دوازدهه‌ای', '#c2255c'], ['bili', '-ary', 'biliary', 'صفراوی', '#2b8a3e'], ['celi', '-ac', 'celiac', 'شکمی', '#7048e8']];
    return svg(360, 264, `${f(180, 20, 'ریشه + پسوند صفت = «مربوط به…»', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([r, s, w, fa, c], i) => { const y = 34 + i * 35; return `<rect x="8" y="${y}" width="90" height="28" rx="8" fill="#f1f3f5"/>${t(53, y + 19, r, { size: 11.5, fill: c, w: 900 })}${t(108, y + 19, '+', { size: 13, fill: MUTED })}<rect x="118" y="${y}" width="50" height="28" rx="8" fill="#fff4e6"/>${t(143, y + 19, s, { size: 11.5, fill: '#d9480f', w: 900 })}${t(178, y + 19, '=', { size: 13, fill: MUTED })}${t(190, y + 19, w, { size: 11.5, fill: INK, w: 900, anchor: 'start' })}${f(352, y + 19, fa, { size: 9.5, fill: c, w: 700, anchor: 'end' })}`; }).join('')}
      ${f(180, 256, 'در esophageal و pharyngeal پیش از ‎-al حرف e می‌آید', { size: 9.5, fill: VIO, w: 700 })}`, 'پسوندهای صفت');
  };
  /* ---------- دهان تا معده ---------- */
  /* بدنه ساده تنه برای نقشه اندام‌ها (رو به بیننده؛ راست بیمار = چپ تصویر) */
  const torso = (cx, top, g) => `<path d="M${cx - 18} ${top} Q${cx - 18} ${top + 22} ${cx - 30} ${top + 28} Q${cx - 74} ${top + 34} ${cx - 78} ${top + 70} L${cx - 72} ${top + 200} Q${cx - 80} ${top + 240} ${cx - 64} ${top + 262} L${cx + 64} ${top + 262} Q${cx + 80} ${top + 240} ${cx + 72} ${top + 200} L${cx + 78} ${top + 70} Q${cx + 74} ${top + 34} ${cx + 30} ${top + 28} Q${cx + 18} ${top + 22} ${cx + 18} ${top}" fill="url(#${g})" stroke="${SKIN_LINE}" stroke-width="1.2"/>`;
  const GUT = '#f4a3a8', GUT_D = '#d6646c', COLON = '#e8a87c', COLON_D = '#b8693c', LIVER = '#a5443f';

  /* مسیر غذا از دهان تا مقعد */
  A['gi-tract'] = () => {
    const g = 'k' + (++UID), cx = 180;
    const colonPath = `M${cx - 50} 262 V188 Q${cx - 50} 176 ${cx - 38} 176 H${cx + 40} Q${cx + 52} 176 ${cx + 52} 188 V250 Q${cx + 52} 268 ${cx + 30} 270 Q${cx + 8} 272 ${cx} 282`;
    return svg(360, 318, `<defs>${linear(g, SKIN[0], SKIN[1])}</defs>${f(180, 20, 'مسیر غذا: لوله گوارش و اندام‌های کمکی', { size: 11.5, fill: INK, w: 800 })}
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
      ${pin(cx - 4, 60, 70, 46)}${lab(40, 44, 'mouth', 'دهان', { size: 10.5 })}
      ${pin(cx, 96, 70, 90)}${lab(40, 88, 'esophagus', 'مری', { size: 10.5 })}
      ${pin(cx - 44, 138, 70, 132)}${lab(38, 128, 'liver', 'کبد', { size: 10.5, fill: LIVER })}
      ${pin(cx - 24, 166, 70, 172)}${lab(38, 168, 'gallbladder', 'کیسه صفرا', { size: 9.5, fill: '#2b8a3e' })}
      ${pin(cx - 50, 220, 70, 214)}${lab(40, 210, 'large intestine', 'روده بزرگ', { size: 9.5, fill: COLON_D })}
      ${pin(cx - 52, 272, 70, 258)}${lab(40, 254, 'appendix', 'آپاندیس', { size: 9.5 })}
      ${pin(cx + 1, 282, 70, 298)}${lab(40, 296, 'anus', 'مقعد', { size: 10 })}
      ${pin(cx + 34, 142, 292, 120)}${lab(322, 116, 'stomach', 'معده', { size: 10.5, fill: '#e03131' })}
      ${pin(cx + 36, 166, 292, 160)}${lab(322, 156, 'pancreas', 'پانکراس', { size: 10, fill: '#a07a1a' })}
      ${pin(cx + 10, 214, 292, 206)}${lab(322, 202, 'small intestine', 'روده باریک', { size: 9.5, fill: GUT_D })}
      ${pin(cx + 6, 276, 292, 262)}${lab(322, 258, 'rectum', 'رکتوم', { size: 10 })}`, 'مسیر غذا در لوله گوارش');
  };

  /* هفت مرحله کار دستگاه گوارش */
  A['digest-steps'] = () => {
    const sh = 's' + (++UID);
    const R = [['ingestion', 'خوردن', '🍎'], ['mastication', 'جویدن', '🦷'], ['deglutition', 'بلع', '👅'], ['peristalsis', 'حرکت دودی', '〰️'], ['digestion', 'هضم (گوارش)', '⚗️'], ['absorption', 'جذب', '🧽'], ['defecation', 'دفع مدفوع', '🚽']];
    const C = ['#e8590c', '#e67700', '#f08c00', '#2b8a3e', '#1098ad', '#1c7ed6', '#7048e8'];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, 'غذا در هفت گام', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ic], i) => { const x = i === 6 ? 96 : 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 66; return `${card(x, y, 168, 56, '#f8f9fa', sh)}<circle cx="${x + 150}" cy="${y + 28}" r="13" fill="${C[i]}"/>${t(x + 150, y + 33, i + 1, { size: 12, fill: '#fff', w: 900 })}<text x="${x + 118}" y="${y + 34}" font-size="18" text-anchor="middle">${ic}</text>${t(x + 12, y + 24, en, { size: 11.5, fill: C[i], w: 900, anchor: 'start' })}${f(x + 12, y + 42, fa, { size: 10, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, 'مراحل گوارش');
  };

  /* قوس دندانی و نام دندان‌ها */
  A['dental-arch'] = () => {
    const sh = 's' + (++UID);
    const T = ['M', 'M', 'M', 'P', 'P', 'C', 'I', 'I', 'I', 'I', 'C', 'P', 'P', 'M', 'M', 'M'];
    const COL = { I: '#1c7ed6', C: '#e03131', P: '#f08c00', M: '#2b8a3e' };
    let teeth = '';
    T.forEach((k, i) => { const a = Math.PI * (0.06 + 0.88 * i / 15), x = 180 - 110 * Math.cos(a), y = 176 - 120 * Math.sin(a), r = k === 'M' ? 11 : k === 'P' ? 9 : 8; teeth += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${r}" ry="${r * 0.86}" fill="#fff" stroke="${COL[k]}" stroke-width="3" filter="url(#${sh})"/>`; });
    const leg = [['incisor', 'پیش (برش)', 'I', '۸', '۸'], ['canine', 'نیش (پاره کردن)', 'C', '۴', '۴'], ['premolar', 'آسیای کوچک', 'P', '۸', '۰'], ['molar', 'آسیا (آسیاب)', 'M', '۱۲', '۸']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, 'آرواره بالا از روبه‌رو: چهار نوع دندان', { size: 11.5, fill: INK, w: 800 })}
      <path d="M70 186 C70 40 290 40 290 186" stroke="#ffc9c9" stroke-width="30" fill="none" stroke-linecap="round"/>${teeth}
      ${f(180, 112, 'جلوی دهان', { size: 9 })}${f(180, 160, 'در کودک premolar نداریم', { size: 9.5, fill: VIO, w: 700 })}
      <rect x="8" y="200" width="344" height="94" rx="12" fill="#f8f9fa"/>
      ${f(150, 218, 'دائمی (۳۲)', { size: 9.5, fill: INK, w: 800 })}${f(60, 218, 'شیری (۲۰)', { size: 9.5, fill: INK, w: 800 })}
      ${leg.map(([en, fa, k, p, d], i) => { const y = 234 + i * 16; return `<circle cx="340" cy="${y - 4}" r="5" fill="#fff" stroke="${COL[k]}" stroke-width="3"/>${t(328, y, en, { size: 10, fill: COL[k], w: 900, anchor: 'end' })}${f(262, y, fa, { size: 9, fill: INK, anchor: 'end' })}${f(150, y, p, { size: 10, fill: INK, w: 800 })}${f(60, y, d, { size: 10, fill: INK, w: 800 })}`; }).join('')}`, 'انواع دندان');
  };

  /* حرکت دودی */
  A.peristalsis = () => {
    const mk = 'm' + (++UID);
    const ring = x => `<path d="M${x} 82 q10 18 0 36" stroke="#c92a2a" stroke-width="2"/><path d="M${x - 8} 74 C${x - 2} 92 ${x - 2} 108 ${x - 8} 126 M${x + 8} 74 C${x + 2} 92 ${x + 2} 108 ${x + 8} 126" stroke="#e03131" stroke-width="2.5" fill="none"/>`;
    return svg(360, 220, `<defs>${marker(mk, '#2b8a3e')}</defs>${f(180, 22, 'peristalsis: موج انقباض پشت لقمه', { size: 11.5, fill: INK, w: 800 })}
      <path d="M20 70 H120 Q140 70 150 84 Q160 98 170 84 Q180 70 200 70 H340 V130 H200 Q180 130 170 116 Q160 102 150 116 Q140 130 120 130 H20 Z" fill="#ffe3e3" stroke="#e03131" stroke-width="2"/>
      <ellipse cx="236" cy="100" rx="40" ry="24" fill="#d8b47a" stroke="#a07a1a" stroke-width="1.5"/>${t(236, 104, 'bolus', { size: 11, fill: '#5c3d0a' })}
      ${arrow(mk, 286, 100, 330, 100, '#2b8a3e', 3)}${f(310, 150, 'جهت حرکت', { size: 10, fill: '#2b8a3e', w: 700 })}
      ${f(160, 150, 'ماهیچه پشت لقمه منقبض', { size: 10, fill: '#c92a2a', w: 700 })}${f(250, 54, 'جلوی لقمه شل', { size: 10, fill: MUTED, w: 700 })}
      ${f(180, 186, 'غیرارادی است و غذا را از مری تا رکتوم جلو می‌برد', { size: 10, fill: VIO, w: 700 })}
      ${f(180, 206, 'لقمه جویده و خیس‌شده با بزاق = bolus', { size: 9.5, fill: MUTED })}`, 'حرکت دودی');
  };

  /* بلع: راه هوا و راه غذا */
  A.swallow = () => {
    const mk = 'm' + (++UID);
    return svg(360, 262, `<defs>${marker(mk, '#e8590c')}</defs>${f(180, 20, 'deglutition: هنگام بلع راه هوا بسته می‌شود', { size: 11.5, fill: INK, w: 800 })}
      <path d="M40 66 H200 Q232 66 232 98 V226" stroke="#ffd8a8" stroke-width="44" fill="none"/>
      <path d="M150 134 V226" stroke="#a5d8ff" stroke-width="26"/>${f(150, 220, 'نای', { size: 9, fill: '#1864ab' })}
      <path d="M232 134 V226" stroke="#ffc9c9" stroke-width="26"/>${f(232, 220, 'مری', { size: 9, fill: '#c92a2a' })}
      <path d="M140 130 Q160 110 186 120" stroke="#2b8a3e" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M204 54 Q218 70 218 86" stroke="#c2255c" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="222" cy="114" r="13" fill="#d8b47a"/>${curve(mk, 'M236 114 C246 126 242 150 236 172', '#e8590c', 2.5)}
      <path d="M52 92 C100 76 150 84 192 94" stroke="#ff8787" stroke-width="16" fill="none" stroke-linecap="round"/>
      ${pin(186, 120, 96, 146)}${lab(64, 158, 'epiglottis', 'درپوش حنجره', { size: 10.5, fill: '#2b8a3e' })}
      ${pin(216, 78, 290, 64)}${lab(316, 52, 'soft palate', 'کام نرم و زبانک', { size: 9.5, fill: '#c2255c' })}
      ${pin(100, 84, 64, 116)}${lab(54, 128, 'tongue', 'زبان', { size: 10, fill: '#e03131' })}
      ${pin(222, 114, 296, 120)}${lab(316, 132, 'bolus', 'لقمه', { size: 10.5, fill: '#a07a1a' })}
      ${f(180, 244, 'کام نرم راه بینی را و epiglottis راه نای را می‌بندد', { size: 9.5, fill: VIO, w: 700 })}`, 'بلع');
  };

  /* اسفنکترهای مسیر غذا */
  A.sphincters = () => {
    const sh = 's' + (++UID);
    const R = [['lower esophageal sphincter', 'میان مری و معده؛ LES یا cardiac sphincter', 'جلوی برگشت اسید', '#e8590c'], ['pyloric sphincter', 'میان معده و دوازدهه', 'chyme را کم‌کم رد می‌کند', '#d6336c'],
      ['ileocecal valve', 'میان ایلئوم و سکوم', 'از برگشت محتوای روده بزرگ جلوگیری می‌کند', '#7048e8'], ['sphincter of Oddi', 'دهانه مجرای صفرا در دوازدهه', 'ورود صفرا و شیره پانکراس', '#2b8a3e'], ['anal sphincters', 'داخلی و خارجی در مقعد', 'نگه داشتن و دفع مدفوع', '#1c7ed6']];
    return svg(360, 284, `<defs>${shadow(sh)}</defs>${f(180, 20, 'sphincter: حلقه ماهیچه‌ای که راه را باز و بسته می‌کند', { size: 11, fill: INK, w: 800 })}
      ${R.map(([en, where, job, c], i) => { const y = 32 + i * 50; return `${card(8, y, 344, 44, '#f8f9fa', sh)}<circle cx="330" cy="${y + 22}" r="11" fill="none" stroke="${c}" stroke-width="5"/>${t(310, y + 18, en, { size: 11, fill: c, w: 900, anchor: 'end' })}${f(310, y + 35, where, { size: 9, fill: INK, w: 700, anchor: 'end' })}${f(18, y + 27, job, { size: 8.8, fill: MUTED, anchor: 'start' })}`; }).join('')}`, 'اسفنکترها');
  };

  /* شیره معده */
  A['gastric-juice'] = () => {
    const mk = 'm' + (++UID), sh = 's' + (++UID);
    const st = 'M50 24 C74 10 104 22 110 54 C118 96 98 136 62 138 C32 140 12 124 12 100 C12 80 28 72 38 66 C46 60 40 38 50 24Z';
    return svg(360, 262, `<defs>${marker(mk, '#868e96')}${shadow(sh)}</defs>${f(180, 20, 'معده غذا را با شیره معده به chyme تبدیل می‌کند', { size: 11.5, fill: INK, w: 800 })}
      <path d="M100 80 C100 60 104 46 110 34" stroke="#ffa8a8" stroke-width="14" fill="none" stroke-linecap="round"/>
      <path d="M44 186 C26 192 20 204 24 218" stroke="#ffa8a8" stroke-width="13" fill="none" stroke-linecap="round"/>
      <g transform="translate(26 40) scale(1.42)"><path d="${st}" fill="#ffc9c9" stroke="#e03131" stroke-width="1.6" filter="url(#${sh})"/>
      <path d="M58 40 C72 36 92 44 98 60 M40 76 C56 66 84 72 94 92 M34 104 C52 96 72 104 84 120" stroke="#ff8787" stroke-width="2.2" fill="none"/></g>
      ${f(104, 152, 'rugae', { size: 9.5, fill: '#c92a2a', w: 800 })}${f(104, 166, 'چین‌های معده', { size: 9 })}
      ${curve(mk, 'M24 222 C30 236 50 238 70 236', '#868e96', 2)}${lab(118, 238, 'chyme', '', { size: 11, fill: '#a07a1a' })}${f(118, 252, 'غذای نیمه‌هضم به دوازدهه', { size: 9 })}
      ${card(206, 36, 146, 196, '#f8f9fa')}
      ${lab(279, 58, 'HCl', 'اسید؛ فعال‌کننده pepsin', { size: 12, fill: '#c92a2a' })}
      ${lab(279, 106, 'pepsin', 'هضم پروتئین', { size: 12, fill: '#e8590c' })}
      ${lab(279, 154, 'intrinsic factor', 'برای جذب B12', { size: 10.5, fill: '#7048e8' })}
      ${lab(279, 202, 'mucus', 'لایه محافظ دیواره', { size: 12, fill: '#1098ad' })}`, 'شیره معده');
  };

  /* هر غذا کجا و با کدام آنزیم هضم می‌شود */
  A.enzymes = () => {
    const sh = 's' + (++UID);
    const rows = [['دهان', 'salivary amylase', 'نشاسته', '#e8590c'], ['معده', 'pepsin (+ HCl)', 'پروتئین', '#c92a2a'], ['دوازدهه', 'pancreatic amylase', 'نشاسته', '#a07a1a'], ['دوازدهه', 'lipase (+ bile)', 'چربی', '#2b8a3e'], ['دوازدهه', 'protease', 'پروتئین', '#7048e8'], ['روده باریک', 'villi', 'جذب مواد هضم‌شده', '#1c7ed6']];
    return svg(360, 292, `<defs>${shadow(sh)}</defs>${f(180, 20, 'هر غذا کجا هضم می‌شود؟', { size: 11.5, fill: INK, w: 800 })}
      ${card(8, 30, 344, 26, '#343a40')}${f(320, 47, 'کجا', { size: 10, fill: '#fff', w: 800 })}${f(196, 47, 'چه چیزی', { size: 10, fill: '#fff', w: 800 })}${f(62, 47, 'روی چه', { size: 10, fill: '#fff', w: 800 })}
      ${rows.map(([where, en, what, c], i) => { const y = 60 + i * 35; return `${card(8, y, 344, 30, i % 2 ? '#f8f9fa' : '#fff4e6', sh)}${f(320, y + 20, where, { size: 10, fill: INK, w: 700 })}${t(196, y + 20, en, { size: 11, fill: c, w: 900 })}${f(62, y + 20, what, { size: 9.5, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 284, 'نام آنزیم معمولاً با ‎-ase تمام می‌شود: amylase، lipase، protease', { size: 9.5, fill: VIO, w: 700 })}`, 'آنزیم‌ها');
  };
  /* ---------- روده‌ها و اندام‌های کمکی ---------- */
  /* سه بخش روده باریک */
  A.dji = () => {
    const sh = 's' + (++UID);
    const R = [['duodenum', 'دوازدهه', 'کوتاه‌ترین؛ صفرا و شیره پانکراس اینجا می‌ریزند', 'duoden/o', '#c2255c', 60], ['jejunum', 'ژژونوم', 'بخش میانی؛ بیشترین هضم و جذب', 'jejun/o', '#a61e4d', 120], ['ileum', 'ایلئوم', 'طولانی‌ترین؛ جذب B12 و نمک‌های صفراوی', 'ile/o', '#862e9c', 160]];
    return svg(360, 262, `<defs>${shadow(sh)}</defs>${f(180, 20, 'روده باریک = D + J + I (از معده تا سکوم)', { size: 11.5, fill: INK, w: 800 })}
      <rect x="8" y="34" width="344" height="30" rx="15" fill="#f1f3f5"/>
      ${(() => { let x = 352, out = ''; R.forEach(([en, fa, d, r, c, w]) => { x -= w * 344 / 340; out += `<rect x="${x.toFixed(1)}" y="34" width="${(w * 344 / 340).toFixed(1)}" height="30" fill="${c}" opacity=".85"/>${t(x + w / 2, 54, en, { size: 10.5, fill: '#fff', w: 900 })}`; }); return out; })()}
      ${f(352, 80, 'شروع: پیلور معده', { size: 9, anchor: 'end' })}${f(8, 80, 'پایان: دریچه ایلئوسکال', { size: 9, anchor: 'start' })}
      ${R.map(([en, fa, d, r, c], i) => { const y = 92 + i * 50; return `${card(8, y, 344, 44, '#f8f9fa', sh)}<rect x="340" y="${y}" width="12" height="44" rx="6" fill="${c}"/>${f(330, y + 19, fa, { size: 11, fill: c, w: 900, anchor: 'end' })}${t(250, y + 19, r, { size: 10.5, fill: MUTED, anchor: 'middle' })}${f(330, y + 36, d, { size: 9, fill: INK, w: 700, anchor: 'end' })}`; }).join('')}
      ${f(180, 256, 'jejunum یعنی «تهی»؛ ileum را با ilium (لگن) اشتباه نکن', { size: 9.5, fill: VIO, w: 700 })}`, 'بخش‌های روده باریک');
  };

  /* پرز روده */
  A.villus = () => {
    const vill = (x, w) => `<path d="M${x} 210 V${110} Q${x} 86 ${x + w / 2} 86 Q${x + w} 86 ${x + w} 110 V210" fill="#ffd8a8" stroke="#e8590c" stroke-width="2"/>`;
    return svg(360, 250, `${f(180, 20, 'villus: انگشتک جذب در دیواره روده باریک', { size: 11.5, fill: INK, w: 800 })}
      ${vill(10, 40)}${vill(172, 40)}
      <path d="M62 210 V84 Q62 46 110 46 Q158 46 158 84 V210" fill="#ffe8cc" stroke="#e8590c" stroke-width="2.5"/>
      <path d="M82 210 V92 Q82 68 110 68 Q138 68 138 92 V210" fill="none" stroke="#e03131" stroke-width="3"/><path d="M89 210 V96 Q89 76 110 76 Q131 76 131 96 V210" fill="none" stroke="#1c7ed6" stroke-width="3"/>
      <path d="M110 210 V90" stroke="#69db7c" stroke-width="7" stroke-linecap="round"/>
      <rect x="6" y="210" width="210" height="18" fill="#f8c4a8"/>
      ${pin(110, 120, 228, 76, '#2b8a3e')}${lab(290, 72, 'lacteal', 'مویرگ لنفی: جذب چربی', { size: 11.5, fill: '#2b8a3e' })}
      ${pin(136, 150, 228, 132, '#c92a2a')}${lab(290, 128, 'capillaries', 'مویرگ خونی: قند و پروتئین', { size: 11, fill: '#c92a2a' })}
      ${pin(64, 170, 228, 188)}${lab(290, 184, 'epithelium', 'سلول‌های جاذب سطح پرز', { size: 11 })}
      ${f(180, 244, 'میلیون‌ها پرز سطح جذب را بسیار بزرگ می‌کنند؛ جمع villus می‌شود villi', { size: 9.5, fill: VIO, w: 700 })}`, 'پرز روده');
  };

  /* نقشه روده بزرگ */
  A['colon-map'] = () => {
    const d = 'M96 236 V100 Q96 80 116 80 H244 Q264 80 264 100 V206 Q264 232 238 236 Q206 240 196 250 V266';
    return svg(360, 326, `${f(180, 20, 'روده بزرگ: از سکوم تا مقعد', { size: 11.5, fill: INK, w: 800 })}
      ${f(180, 36, 'نمای روبه‌رو؛ راست بیمار در چپ تصویر است', { size: 9, fill: MUTED })}<g transform="translate(0 14)">
      <path d="${d}" stroke="${COLON}" stroke-width="26" fill="none" stroke-linejoin="round"/><path d="${d}" stroke="${COLON_D}" stroke-width="1.6" fill="none" stroke-dasharray="2 6"/>
      <ellipse cx="96" cy="244" rx="18" ry="14" fill="${COLON}"/><path d="M90 256 q-4 14 6 18" stroke="${COLON}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M60 220 C72 222 80 230 82 238" stroke="${GUT}" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M196 266 V292" stroke="#d9480f" stroke-width="12" stroke-linecap="round"/>
      ${lab(56, 160, 'ascending', 'بالارو', { size: 10.5, fill: '#d9480f' })}${lab(180, 54, 'transverse colon', 'کولون عرضی', { size: 10.5, fill: '#d9480f', gap: 11 })}${lab(306, 160, 'descending', 'پایین‌رو', { size: 10.5, fill: '#d9480f' })}
      ${pin(102, 86, 56, 74)}${lab(44, 60, 'hepatic flexure', 'خم کبدی', { size: 9, fill: '#a5443f' })}
      ${pin(258, 86, 304, 74)}${lab(316, 60, 'splenic flexure', 'خم طحالی', { size: 9, fill: '#7048e8' })}
      ${pin(232, 236, 300, 236)}${lab(316, 232, 'sigmoid', 'سیگموئید (S)', { size: 10, fill: '#d9480f' })}
      ${pin(86, 248, 40, 262)}${lab(40, 280, 'cecum', 'سکوم', { size: 10 })}
      ${pin(96, 272, 136, 300)}${lab(126, 296, 'appendix', '', { size: 9.5 })}
      ${pin(62, 221, 30, 200)}${lab(30, 196, 'ileum', '', { size: 9, fill: GUT_D })}
      ${pin(196, 276, 260, 276)}${lab(290, 280, 'rectum', 'رکتوم', { size: 10 })}${f(196, 306, 'anus • مقعد', { size: 9, fill: INK })}</g>`, 'نقشه روده بزرگ');
  };

  /* چهار ربع شکم */
  A.quadrants = () => {
    const g = 'k' + (++UID);
    const Q = [[96, 'RUQ', 'ربع راست بالا', 'کبد، کیسه صفرا', '#a5443f', 112], [264, 'LUQ', 'ربع چپ بالا', 'معده، طحال', '#e03131', 112], [96, 'RLQ', 'ربع راست پایین', 'آپاندیس، سکوم', '#d9480f', 204], [264, 'LLQ', 'ربع چپ پایین', 'سیگموئید', '#7048e8', 204]];
    return svg(360, 300, `<defs>${linear(g, SKIN[0], SKIN[1])}</defs>${f(180, 20, 'چهار ربع شکم (خط‌ها از ناف می‌گذرند)', { size: 11.5, fill: INK, w: 800 })}
      <path d="M50 52 Q46 140 60 262 H300 Q314 140 310 52 Z" fill="url(#${g})" stroke="${SKIN_LINE}"/>
      <path d="M180 52 V262 M50 160 H310" stroke="#495057" stroke-width="2" stroke-dasharray="6 4"/><circle cx="180" cy="160" r="4" fill="#c98f6b"/>
      ${Q.map(([x, ab, fa, org, c, y]) => `${t(x, y - 12, ab, { size: 17, fill: c, w: 900 })}${f(x, y + 8, fa, { size: 10, fill: INK, w: 800 })}${f(x, y + 26, org, { size: 9.5, fill: c, w: 700 })}`).join('')}
      ${f(96, 282, 'راست بیمار', { size: 10, fill: '#1c7ed6', w: 800 })}${f(264, 282, 'چپ بیمار', { size: 10, fill: '#1c7ed6', w: 800 })}
      ${f(180, 296, 'در نمای روبه‌رو، راست بیمار سمت چپ تصویر است', { size: 9, fill: MUTED })}`, 'ربع‌های شکم');
  };

  /* مسیر صفرا و شیره پانکراس */
  A['bile-flow'] = () => {
    const mk = 'm' + (++UID), sh = 's' + (++UID);
    const box = (x, y, w, en, fa, c, bg) => `${card(x, y, w, 40, bg, sh)}${t(x + w / 2, y + 17, en, { size: 10.5, fill: c, w: 900 })}${f(x + w / 2, y + 33, fa, { size: 9, fill: INK, w: 700 })}`;
    return svg(360, 300, `<defs>${marker(mk, '#2b8a3e')}${shadow(sh)}</defs>${f(180, 20, 'صفرا از کجا به کجا می‌رود؟', { size: 11.5, fill: INK, w: 800 })}
      ${box(220, 34, 132, 'liver', 'کبد: صفرا می‌سازد', '#a5443f', '#fff0f0')}
      ${box(220, 100, 132, 'hepatic duct', 'مجرای کبدی', '#2b8a3e', '#ebfbee')}
      ${box(16, 100, 140, 'gallbladder', 'ذخیره و غلیظ کردن', '#2b8a3e', '#ebfbee')}
      ${box(16, 166, 140, 'cystic duct', 'مجرای کیسه صفرا', '#2b8a3e', '#ebfbee')}
      ${box(220, 166, 132, 'common bile duct', 'مجرای صفراوی مشترک', '#087f5b', '#e6fcf5')}
      ${box(220, 236, 132, 'duodenum', 'دوازدهه: هضم چربی', '#c2255c', '#fff0f6')}
      ${box(16, 236, 140, 'pancreatic duct', 'شیره پانکراس', '#a07a1a', '#fff9db')}
      ${arrow(mk, 286, 76, 286, 98)}${arrow(mk, 286, 142, 286, 164)}${arrow(mk, 286, 208, 286, 234)}
      ${curve(mk, 'M88 166 C88 156 88 150 88 144', '#2b8a3e', 2)}${f(118, 156, 'رفت', { size: 8.5, fill: '#2b8a3e' })}
      ${curve(mk, 'M158 186 H218', '#2b8a3e', 2)}${f(188, 180, 'برگشت', { size: 8.5, fill: '#2b8a3e' })}
      ${curve(mk, 'M158 256 H218', '#a07a1a', 2)}
      ${f(188, 290, 'دهانه مشترک در دوازدهه: papilla و sphincter of Oddi', { size: 9.5, fill: VIO, w: 700 })}`, 'مسیر صفرا');
  };

  /* دو کار پانکراس */
  A['pancreas-jobs'] = () => {
    const sh = 's' + (++UID);
    return svg(360, 244, `<defs>${shadow(sh)}</defs>${f(180, 20, 'پانکراس: هم غده گوارشی، هم غده هورمونی', { size: 11.5, fill: INK, w: 800 })}
      <path d="M60 70 C110 52 230 50 300 64 C320 68 324 84 306 90 C240 104 130 100 70 98 C44 96 42 76 60 70Z" fill="#ffe066" stroke="#e8c468" stroke-width="2"/>
      ${dots(150, 78, 40, 16, '#f59f00', 2.2, 5)}${dots(250, 76, 30, 10, '#f59f00', 2.2, 9)}
      ${card(186, 112, 166, 120, '#fff9db', sh)}${card(8, 112, 166, 120, '#e7f5ff', sh)}
      ${f(269, 134, 'برون‌ریز (به دوازدهه)', { size: 10.5, fill: '#a07a1a', w: 800 })}
      ${t(269, 156, 'amylase', { size: 11, fill: '#e8590c' })}${f(269, 170, 'نشاسته', { size: 9 })}${t(269, 188, 'lipase', { size: 11, fill: '#2b8a3e' })}${f(269, 202, 'چربی', { size: 9 })}${t(269, 220, 'protease • bicarbonate', { size: 9.5, fill: '#7048e8' })}
      ${f(91, 134, 'درون‌ریز (به خون)', { size: 10.5, fill: '#1864ab', w: 800 })}
      ${t(91, 160, 'insulin', { size: 12, fill: '#1c7ed6' })}${f(91, 176, 'قند خون را پایین می‌آورد', { size: 9 })}${t(91, 202, 'glucagon', { size: 11, fill: '#1c7ed6' })}${f(91, 218, 'قند خون را بالا می‌برد', { size: 9 })}`, 'کارهای پانکراس');
  };

  /* کارهای کبد */
  A['liver-jobs'] = () => {
    const sh = 's' + (++UID);
    const R = [['ساختن صفرا', 'bile', '🟢'], ['ذخیره قند', 'glycogen', '🍬'], ['سم‌زدایی', 'detoxification', '🧹'], ['ساختن پروتئین‌های خون', 'albumin, clotting factors', '🩸'], ['پردازش مواد جذب‌شده', 'hepatic portal system', '🔁'], ['دفع bilirubin', 'از گلبول‌های قرمز پیر', '🟡']];
    return svg(360, 246, `<defs>${shadow(sh)}</defs>${f(180, 20, 'کبد: بزرگ‌ترین غده بدن و ضروری برای زندگی', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([fa, en, ic], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 68; return `${card(x, y, 168, 58, '#fff0f0', sh)}<text x="${x + 148}" y="${y + 34}" font-size="18" text-anchor="middle">${ic}</text>${f(x + 128, y + 26, fa, { size: 10.5, fill: '#a5443f', w: 800, anchor: 'end' })}${t(x + 128, y + 44, en, { size: 9, fill: MUTED, anchor: 'end' })}`; }).join('')}`, 'کارهای کبد');
  };
  /* ---------- بیماری‌های دهان، مری و معده ---------- */
  /* واژه‌های استفراغ و برگشت */
  A['upper-sx'] = () => {
    const sh = 's' + (++UID);
    const R = [['nausea', 'تهوع؛ حس پیش از استفراغ', '🤢', '#5c940d'], ['emesis', 'استفراغ', '🤮', '#e67700'], ['hematemesis', 'استفراغ خون', '🩸', '#c92a2a'], ['hyperemesis', 'استفراغ شدید و مکرر', '🔁', '#d9480f'],
      ['regurgitation', 'برگشت غذا به دهان بی‌زور', '↩️', '#7048e8'], ['eructation', 'آروغ', '💨', '#1098ad'], ['pyrosis', 'سوزش سر دل (heartburn)', '🔥', '#e03131'], ['dyspepsia', 'سوءهاضمه', '😣', '#a61e4d']];
    return svg(360, 270, `<defs>${shadow(sh)}</defs>${f(180, 20, 'علامت‌های گوارش بالا', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ic, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 58; return `${card(x, y, 168, 50, '#f8f9fa', sh)}<text x="${x + 152}" y="${y + 30}" font-size="16" text-anchor="middle">${ic}</text>${t(x + 10, y + 21, en, { size: 12, fill: c, w: 900, anchor: 'start' })}${f(x + 10, y + 39, fa, { size: 9, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, 'علامت‌های گوارش بالا');
  };

  /* خانواده ‎-phagia و ‎-pepsia */
  A['phagia-family'] = () => {
    const sh = 's' + (++UID);
    const R = [['a-', 'aphagia', 'ناتوانی در بلع', '#c92a2a'], ['dys-', 'dysphagia', 'سختی بلع', '#e8590c'], ['odyn/o', 'odynophagia', 'بلع دردناک', '#d6336c'], ['poly-', 'polyphagia', 'پرخوری', '#2b8a3e'], ['aer/o', 'aerophagia', 'هوابلعی', '#1098ad']];
    return svg(360, 270, `<defs>${shadow(sh)}</defs>${f(180, 20, '‎-phagia = خوردن، بلع • ‎-pepsia = هضم', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([p, w, fa, c], i) => { const y = 32 + i * 36; return `${card(8, y, 344, 30, '#f8f9fa', sh)}${t(18, y + 20, `<tspan fill="${c}" font-weight="900">${p}</tspan> + -phagia = <tspan fill="${INK}" font-weight="900">${w}</tspan>`, { size: 11, fill: MUTED, w: 700, anchor: 'start' })}${f(342, y + 20, fa, { size: 10, fill: c, w: 800, anchor: 'end' })}`; }).join('')}
      ${card(8, 218, 168, 44, '#fff4e6', sh)}${card(184, 218, 168, 44, '#fff4e6', sh)}
      ${t(268, 236, 'dyspepsia', { size: 11.5, fill: '#e8590c', w: 900 })}${f(268, 253, 'سوءهاضمه', { size: 9.5, fill: INK, w: 700 })}
      ${t(92, 236, 'bradypepsia', { size: 11.5, fill: '#e8590c', w: 900 })}${f(92, 253, 'کندی هضم', { size: 9.5, fill: INK, w: 700 })}`, 'خانواده phagia');
  };

  /* پوسیدگی دندان و بیماری لثه */
  A['tooth-decay'] = () => {
    const tooth = (x, stage) => {
      const hole = ['', `<circle cx="${x + 30}" cy="40" r="5" fill="#495057"/>`, `<path d="M${x + 24} 34 q6 22 12 0" fill="#495057"/><path d="M${x + 30} 40 v18" stroke="#495057" stroke-width="5"/>`, `<path d="M${x + 22} 34 q8 30 16 0" fill="#495057"/><path d="M${x + 30} 40 v34" stroke="#495057" stroke-width="7"/><ellipse cx="${x + 30}" cy="128" rx="12" ry="9" fill="#ffd43b" stroke="#e67700" stroke-width="1.5"/>`][stage];
      return `<path d="M${x} 40 C${x} 26 ${x + 14} 22 ${x + 30} 30 C${x + 46} 22 ${x + 60} 26 ${x + 60} 40 C${x + 60} 64 ${x + 54} 74 ${x + 52} 96 C${x + 50} 120 ${x + 44} 130 ${x + 38} 130 C${x + 32} 130 ${x + 32} 110 ${x + 30} 110 C${x + 28} 110 ${x + 28} 130 ${x + 22} 130 C${x + 16} 130 ${x + 10} 120 ${x + 8} 96 C${x + 6} 74 ${x} 64 ${x} 40Z" fill="#fff8ec" stroke="#c9b48a" stroke-width="2"/><path d="M${x + 22} 46 Q${x + 30} 40 ${x + 38} 46 V100 Q${x + 30} 106 ${x + 22} 100Z" fill="#ffc9c9" opacity=".8"/>${hole}<rect x="${x - 4}" y="74" width="68" height="60" fill="#f783ac" opacity=".35"/>`;
    };
    const S = [['plaque', 'پلاک باکتری', '#868e96'], ['enamel caries', 'پوسیدگی مینا', '#e8590c'], ['dentin caries', 'رسیدن به عاج', '#d9480f'], ['pulp + abscess', 'عفونت پالپ و آبسه', '#c92a2a']];
    return svg(360, 250, `${f(180, 20, 'dental caries: پوسیدگی از مینا تا پالپ', { size: 11.5, fill: INK, w: 800 })}
      ${S.map(([en, fa, c], i) => { const x = 280 - i * 88; return `<g transform="translate(0 20)">${tooth(x, i)}</g>${t(x + 30, 178, en, { size: 9.5, fill: c, w: 900 })}${f(x + 30, 193, fa, { size: 9, fill: INK, w: 700 })}`; }).join('')}
      <rect x="8" y="206" width="344" height="38" rx="10" fill="#fff0f6"/>${f(180, 222, 'gingivitis التهاب لثه است؛ اگر پیش برود periodontitis', { size: 9.5, fill: '#c2255c', w: 800 })}${f(180, 238, 'بافت‌های نگه‌دارنده دندان را تخریب می‌کند و دندان می‌افتد', { size: 9, fill: INK })}`, 'پوسیدگی دندان');
  };

  /* ضایعه‌های دهان */
  A['mouth-lesions'] = () => {
    const sh = 's' + (++UID);
    const R = [['aphthous ulcer', 'آفت: زخم کوچک دردناک', 'canker sore', '#e8590c'], ['thrush', 'برفک: لکه سفید قارچی', 'Candida', '#1c7ed6'], ['leukoplakia', 'لکه سفید سفت؛ پیش‌سرطانی', 'leuk/o = سفید', '#495057'],
      ['herpes labialis', 'تبخال لب', 'HSV-1', '#c2255c'], ['cheilosis', 'ترک گوشه لب', 'کمبود ویتامین B', '#d6336c'], ['Vincent disease', 'التهاب زخمی لثه', 'trench mouth', '#7048e8']];
    return svg(360, 246, `<defs>${shadow(sh)}</defs>${f(180, 20, 'شش ضایعه رایج دهان', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ex, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 70; return `${card(x, y, 168, 62, '#f8f9fa', sh)}<rect x="${x + 160}" y="${y}" width="8" height="62" rx="4" fill="${c}"/>${t(x + 150, y + 21, en, { size: 11.5, fill: c, w: 900, anchor: 'end' })}${f(x + 150, y + 39, fa, { size: 9, fill: INK, w: 700, anchor: 'end' })}${f(x + 150, y + 55, ex, { size: 8.5, fill: MUTED, anchor: 'end' })}`; }).join('')}`, 'ضایعه‌های دهان');
  };

  /* زنجیره ریفلاکس */
  A['gerd-chain'] = () => {
    const mk = 'm' + (++UID), sh = 's' + (++UID);
    const S = [['LES weak', 'اسفنکتر تحتانی مری شل', '#e8590c'], ['reflux', 'برگشت اسید به مری', '#e67700'], ['heartburn', 'سوزش سر دل (pyrosis)', '#e03131'], ['esophagitis', 'التهاب مری', '#c92a2a'], ['Barrett esophagus', 'تغییر پیش‌سرطانی پوشش مری', '#862e9c']];
    return svg(360, 312, `<defs>${marker(mk)}${shadow(sh)}</defs>${f(180, 20, 'GERD: اگر ریفلاکس مزمن شود', { size: 11.5, fill: INK, w: 800 })}
      ${S.map(([en, fa, c], i) => { const y = 34 + i * 52; return `${card(60, y, 240, 40, '#fff', sh)}<rect x="60" y="${y}" width="240" height="40" rx="14" fill="none" stroke="${c}" stroke-width="2"/>${t(180, y + 17, en, { size: 11.5, fill: c, w: 900 })}${f(180, y + 33, fa, { size: 9.5, fill: INK, w: 700 })}${i < 4 ? arrow(mk, 180, y + 42, 180, y + 50) : ''}`; }).join('')}
      ${f(180, 304, 'درمان: PPI، H2 blocker، antacid', { size: 9.5, fill: '#1098ad', w: 800 })}`, 'زنجیره GERD');
  };

  /* زخم: علت‌ها و عمق */
  A['ulcer-depth'] = () => {
    const layers = [['mucosa', '#ffc9c9'], ['submucosa', '#ffe3e3'], ['muscle', '#f8a5a5'], ['serosa', '#ffd8a8']];
    const col = (x, depth, en, fa, c) => `${layers.map(([n, bg], i) => `<rect x="${x}" y="${52 + i * 26}" width="84" height="26" fill="${bg}"/>`).join('')}<path d="M${x + 24} 52 L${x + 34} ${52 + depth} L${x + 50} ${52 + depth} L${x + 60} 52Z" fill="#fff" stroke="#c92a2a" stroke-width="1.5"/>${t(x + 42, 182, en, { size: 10.5, fill: c, w: 900 })}${f(x + 42, 197, fa, { size: 9, fill: INK, w: 700 })}`;
    return svg(360, 262, `${f(180, 20, 'زخم (ulcer) چقدر عمیق است؟', { size: 11.5, fill: INK, w: 800 })}
      ${col(266, 14, 'erosion', 'فقط مخاط', '#e8590c')}${col(176, 64, 'ulcer', 'تا ماهیچه', '#c92a2a')}${col(86, 104, 'perforation', 'سوراخ شدن دیواره', '#862e9c')}
      ${layers.map(([n], i) => t(80, 69 + i * 26, n, { size: 8.5, fill: MUTED, anchor: 'end' })).join('')}
      <rect x="8" y="208" width="344" height="48" rx="10" fill="#fff0f6"/>${f(180, 226, 'دو علت اصلی زخم پپتیک: H. pylori و داروهای NSAID', { size: 10, fill: '#c2255c', w: 800 })}${f(180, 245, 'peptic ulcer در مری، معده (gastric) یا دوازدهه (duodenal) پیدا می‌شود', { size: 9, fill: INK })}`, 'عمق زخم');
  };

  /* تنگی پیلور در نوزاد */
  A['pyloric-stenosis'] = () => {
    const mk = 'm' + (++UID);
    const st = 'M50 24 C74 10 104 22 110 54 C118 96 98 136 62 138 C32 140 12 124 12 100 C12 80 28 72 38 66 C46 60 40 38 50 24Z';
    return svg(360, 236, `<defs>${marker(mk, '#e8590c')}</defs>${f(180, 20, 'pyloric stenosis: پیلور ضخیم و تنگ', { size: 11.5, fill: INK, w: 800 })}
      <path d="M164 62 C164 50 168 42 174 36" stroke="#ffa8a8" stroke-width="12" fill="none" stroke-linecap="round"/>
      <g transform="translate(110 36) scale(1.2)"><path d="${st}" fill="#ffe3e3" stroke="#e03131" stroke-width="2"/></g>
      <path d="M108 160 C86 164 78 180 82 204" stroke="#ffa8a8" stroke-width="13" fill="none" stroke-linecap="round"/>
      <rect x="102" y="146" width="30" height="26" rx="11" fill="#e03131"/><path d="M104 159 H130" stroke="#fff" stroke-width="2.5"/>
      ${curve(mk, 'M170 70 C160 40 140 34 120 38', '#e8590c', 3)}${curve(mk, 'M178 70 C192 44 206 36 226 34', '#e8590c', 3)}
      ${pin(110, 150, 66, 118, '#c92a2a')}${lab(56, 102, 'hypertrophic pylorus', 'ماهیچه پیلور ضخیم', { size: 9.5, fill: '#c92a2a' })}
      ${f(296, 52, 'projectile vomiting', { size: 9.5, fill: '#e8590c', w: 800 })}${f(296, 68, 'استفراغ جهنده', { size: 9.5, fill: INK })}
      ${f(180, 214, 'غذا از معده به دوازدهه رد نمی‌شود؛ درمان: pyloromyotomy', { size: 9.5, fill: VIO, w: 700 })}${f(180, 230, 'stenosis = تنگی', { size: 9, fill: MUTED })}`, 'تنگی پیلور');
  };
  /* ---------- بیماری‌های روده، کبد و صفرا ---------- */
  /* کرون و کولیت اولسراتیو */
  A['ibd-compare'] = () => {
    const sh = 's' + (++UID);
    const colon = (x, patchy) => { const segs = []; for (let i = 0; i < 9; i++) { const on = patchy ? [1, 4, 5, 8].includes(i) : i >= 4; segs.push(`<rect x="${x}" y="${66 + i * 14}" width="38" height="13" rx="4" fill="${on ? '#e03131' : COLON}"/>`); } return segs.join(''); };
    const R = [['جای درگیری', 'هر جای لوله گوارش', 'فقط کولون و رکتوم'], ['الگو', 'تکه‌تکه (skip lesions)', 'پیوسته از رکتوم به بالا'], ['عمق', 'همه لایه‌های دیواره', 'مخاط و زیرمخاط'], ['نشانه ویژه', 'fistula و تنگی', 'اسهال خونی']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, 'IBD: دو بیماری التهابی مزمن روده', { size: 11.5, fill: INK, w: 800 })}
      ${t(270, 52, 'Crohn disease', { size: 12, fill: '#c2255c', w: 900 })}${t(90, 52, 'ulcerative colitis', { size: 12, fill: '#7048e8', w: 900 })}
      ${colon(251, true)}${colon(71, false)}
      ${f(270, 202, 'درگیری تکه‌تکه', { size: 9, fill: MUTED })}${f(90, 202, 'درگیری پیوسته', { size: 9, fill: MUTED })}
      ${R.map(([k, a, b], i) => { const y = 212 + i * 21; return `<rect x="8" y="${y}" width="344" height="19" rx="5" fill="${i % 2 ? '#f8f9fa' : '#f3f0ff'}"/>${f(352 - 4, y + 13, k, { size: 8.5, fill: MUTED, w: 800, anchor: 'end' })}${f(236, y + 13, a, { size: 8.5, fill: '#a61e4d', w: 700 })}${f(80, y + 13, b, { size: 8.5, fill: '#5f3dc4', w: 700 })}`; }).join('')}`, 'مقایسه کرون و کولیت');
  };

  /* رنگ مدفوع چه می‌گوید */
  A['stool-colors'] = () => {
    const sh = 's' + (++UID);
    const R = [['melena', 'سیاه و قیری', 'خون‌ریزی گوارش بالا (معده، دوازدهه)', '#212529'], ['hematochezia', 'خون قرمز روشن', 'خون‌ریزی گوارش پایین (کولون، رکتوم، بواسیر)', '#e03131'], ['steatorrhea', 'چرب و شناور', 'جذب نشدن چربی (پانکراس، سلیاک)', '#ffe066'], ['clay-colored', 'رنگ‌پریده، گِلی', 'نرسیدن صفرا به روده (سنگ صفرا)', '#d8cfc4'], ['occult blood', 'خون مخفی', 'فقط با آزمایش FOBT دیده می‌شود', '#a0522d']];
    return svg(360, 284, `<defs>${shadow(sh)}</defs>${f(180, 20, 'مدفوع چه می‌گوید؟', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, why, c], i) => { const y = 32 + i * 50; return `${card(8, y, 344, 44, '#f8f9fa', sh)}<ellipse cx="330" cy="${y + 22}" rx="13" ry="10" fill="${c}" stroke="#868e96" stroke-width="1"/>${t(308, y + 18, en, { size: 11.5, fill: INK, w: 900, anchor: 'end' })}${f(308, y + 35, fa, { size: 9, fill: MUTED, w: 700, anchor: 'end' })}${f(20, y + 27, why, { size: 8.8, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, 'رنگ مدفوع');
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
    const R = [['volvulus', 'پیچ خوردن روده به دور خود', ic.volvulus, '#d9480f'], ['intussusception', 'فرو رفتن روده در بخش بعدی (تلسکوپی)', ic.intus, '#c2255c'], ['ileus', 'توقف حرکت دودی روده', ic.ileus, '#1c7ed6'], ['hernia', 'بیرون زدن روده از دیواره', ic.hernia, '#2b8a3e']];
    return svg(360, 266, `<defs>${shadow(sh)}</defs>${f(180, 20, 'intestinal obstruction: چهار راه بسته شدن روده', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, g, c], i) => { const y = 32 + i * 56; return `${card(8, y, 344, 48, '#f8f9fa', sh)}<g transform="translate(20 ${y + 14})">${g}</g>${t(338, y + 20, en, { size: 12, fill: c, w: 900, anchor: 'end' })}${f(338, y + 38, fa, { size: 9.5, fill: INK, w: 700, anchor: 'end' })}`; }).join('')}`, 'انسداد روده');
  };

  /* پنج نوع هپاتیت ویروسی */
  A.hepatitis = () => {
    const sh = 's' + (++UID);
    const R = [['A', 'دهان و مدفوع (آب و غذای آلوده)', 'دارد', 'ندارد', '#2b8a3e'], ['B', 'خون، جنسی، مادر به نوزاد', 'دارد', 'دارد', '#c92a2a'], ['C', 'خون (سرنگ مشترک)', 'ندارد', 'دارد؛ درمان‌پذیر', '#862e9c'], ['D', 'خون؛ فقط همراه B', 'از راه B', 'دارد', '#e8590c'], ['E', 'دهان و مدفوع (آب آلوده)', 'ندارد', 'ندارد', '#1c7ed6']];
    return svg(360, 266, `<defs>${shadow(sh)}</defs>${f(180, 20, 'هپاتیت ویروسی A تا E', { size: 11.5, fill: INK, w: 800 })}
      ${card(8, 30, 344, 26, '#343a40')}${f(332, 47, 'نوع', { size: 9.5, fill: '#fff', w: 800 })}${f(222, 47, 'راه انتقال', { size: 9.5, fill: '#fff', w: 800 })}${f(110, 47, 'واکسن', { size: 9.5, fill: '#fff', w: 800 })}${f(46, 47, 'مزمن', { size: 9.5, fill: '#fff', w: 800 })}
      ${R.map(([k, how, vac, chr, c], i) => { const y = 60 + i * 38; return `${card(8, y, 344, 32, i % 2 ? '#f8f9fa' : '#fff', sh)}<circle cx="332" cy="${y + 16}" r="12" fill="${c}"/>${t(332, y + 21, 'HAV HBV HCV HDV HEV'.split(' ')[i].slice(0, 0) + k, { size: 13, fill: '#fff', w: 900 })}${f(222, y + 20, how, { size: 9, fill: INK, w: 700 })}${f(110, y + 20, vac, { size: 9, fill: vac === 'ندارد' ? '#c92a2a' : '#2b8a3e', w: 800 })}${f(46, y + 20, chr, { size: 8.5, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 260, 'A و E از راه مدفوع و دهان؛ B، C و D از راه خون', { size: 9.5, fill: VIO, w: 700 })}`, 'هپاتیت‌ها');
  };

  /* bilirubin و یرقان */
  A.bilirubin = () => {
    const mk = 'm' + (++UID), sh = 's' + (++UID);
    const box = (x, y, en, fa, c, bg) => `${card(x, y, 104, 42, bg, sh)}${t(x + 52, y + 18, en, { size: 10.5, fill: c, w: 900 })}${f(x + 52, y + 34, fa, { size: 9, fill: INK, w: 700 })}`;
    return svg(360, 280, `<defs>${marker(mk)}${shadow(sh)}</defs>${f(180, 20, 'bilirubin از کجا می‌آید و یرقان چرا رخ می‌دهد؟', { size: 11.5, fill: INK, w: 800 })}
      ${box(248, 36, 'old RBC', 'گلبول قرمز پیر', '#c92a2a', '#fff0f0')}${box(128, 36, 'bilirubin', 'رنگدانه زرد', '#e67700', '#fff9db')}${box(8, 36, 'liver', 'کبد', '#a5443f', '#fff0f0')}
      ${box(8, 112, 'bile', 'صفرا', '#2b8a3e', '#ebfbee')}${box(128, 112, 'intestine', 'روده', '#d9480f', '#fff4e6')}${box(248, 112, 'brown stool', 'مدفوع قهوه‌ای', '#7a4a1a', '#f8f0e8')}
      ${arrow(mk, 246, 57, 234, 57)}${arrow(mk, 126, 57, 114, 57)}${arrow(mk, 60, 80, 60, 110)}${arrow(mk, 114, 133, 126, 133)}${arrow(mk, 234, 133, 246, 133)}
      <rect x="8" y="170" width="344" height="104" rx="12" fill="#fff9db" stroke="#fab005" stroke-width="1.5"/>
      ${f(180, 192, 'اگر کبد بیمار یا مجرای صفرا بسته باشد:', { size: 10.5, fill: '#e67700', w: 800 })}
      ${t(180, 214, 'hyperbilirubinemia → jaundice (icterus)', { size: 11, fill: '#e67700', w: 900 })}
      ${f(180, 236, 'زردی پوست و سفیدی چشم، ادرار تیره', { size: 10, fill: INK, w: 700 })}
      ${f(180, 258, 'اگر صفرا به روده نرسد، مدفوع رنگ‌پریده (clay-colored) می‌شود', { size: 9.5, fill: INK, w: 700 })}`, 'بیلی‌روبین و یرقان');
  };

  /* سیروز و پیامدهایش */
  A['cirrhosis-chain'] = () => {
    const mk = 'm' + (++UID), sh = 's' + (++UID);
    const R = [['esophageal varices', 'واریس مری؛ خون‌ریزی', '#c92a2a'], ['ascites', 'آب آوردن شکم', '#1c7ed6'], ['splenomegaly', 'بزرگی طحال', '#7048e8'], ['jaundice', 'یرقان', '#e67700']];
    return svg(360, 280, `<defs>${marker(mk)}${shadow(sh)}</defs>${f(180, 20, 'cirrhosis: کبد زخمی و سفت', { size: 11.5, fill: INK, w: 800 })}
      ${card(110, 34, 140, 48, '#fff0f0', sh)}${t(180, 54, 'cirrhosis', { size: 13, fill: '#a5443f', w: 900 })}${f(180, 72, 'الکل، هپاتیت B و C، چربی', { size: 9, fill: INK })}
      ${arrow(mk, 180, 84, 180, 104)}
      ${card(90, 106, 180, 44, '#f3f0ff', sh)}${t(180, 125, 'portal hypertension', { size: 11.5, fill: '#5f3dc4', w: 900 })}${f(180, 142, 'فشار بالا در سیاهرگ باب', { size: 9, fill: INK })}
      ${R.map(([en, fa, c], i) => { const x = 8 + (3 - i) * 88; return `${arrow(mk, 180, 152, x + 40, 180)}${card(x, 182, 80, 56, '#f8f9fa', sh)}${t(x + 40, 204, en.split(' ')[0], { size: 9.5, fill: c, w: 900 })}${en.includes(' ') ? t(x + 40, 216, en.split(' ')[1], { size: 9.5, fill: c, w: 900 }) : ''}${f(x + 40, 232, fa, { size: 8.5, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 268, 'cirrh/o یعنی زرد مایل به نارنجی؛ رنگ کبد سیروزی', { size: 9.5, fill: VIO, w: 700 })}`, 'پیامدهای سیروز');
  };

  /* سنگ و التهاب صفرا: کدام واژه کجا؟ */
  A['gallstone-terms'] = () => {
    const sh = 's' + (++UID);
    return svg(360, 268, `<defs>${shadow(sh)}${linear('lv' + UID, '#c0504d', '#8f2d2a', true)}</defs>${f(180, 20, 'هر واژه به یک جای مسیر صفرا اشاره می‌کند', { size: 11.5, fill: INK, w: 800 })}
      <path d="M96 40 C130 30 230 30 262 46 C280 58 262 86 226 96 C186 108 120 110 104 100 C84 88 80 50 96 40Z" fill="url(#lv${UID})"/>
      <path d="M180 92 V140 C180 160 190 176 206 186" stroke="#2f9e44" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M180 126 C162 126 150 132 146 146" stroke="#2f9e44" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M126 146 C126 132 150 132 156 146 C162 168 148 188 136 184 C124 180 122 160 126 146Z" fill="#69db7c" stroke="#2b8a3e" stroke-width="2"/>
      <circle cx="136" cy="164" r="4" fill="#e8c468" stroke="#b8923a"/><circle cx="144" cy="172" r="3.5" fill="#e8c468" stroke="#b8923a"/><circle cx="196" cy="176" r="4.5" fill="#e8c468" stroke="#b8923a"/>
      <path d="M206 186 C230 200 250 214 250 240" stroke="#f4a3a8" stroke-width="16" fill="none" stroke-linecap="round"/>
      ${pin(140, 168, 52, 150, '#b8923a')}${lab(54, 132, 'cholelithiasis', 'سنگ کیسه صفرا', { size: 10.5, fill: '#a07a1a' })}
      ${pin(150, 150, 52, 206, '#2b8a3e')}${lab(54, 222, 'cholecystitis', 'التهاب کیسه صفرا', { size: 10.5, fill: '#2b8a3e' })}
      ${pin(198, 176, 300, 172, '#b8923a')}${lab(296, 190, 'choledocholithiasis', 'سنگ مجرای مشترک', { size: 10, fill: '#a07a1a' })}
      ${pin(180, 112, 300, 112, '#087f5b')}${lab(300, 128, 'cholangitis', 'التهاب مجاری صفرا', { size: 10.5, fill: '#087f5b' })}
      ${f(180, 260, 'درد قولنجی RUQ پس از غذای چرب = biliary colic', { size: 9.5, fill: VIO, w: 700 })}`, 'واژه‌های صفرا');
  };

  /* جای فتق‌ها */
  A['hernia-sites'] = () => {
    const g = 'k' + (++UID);
    return svg(360, 300, `<defs>${linear(g, SKIN[0], SKIN[1])}</defs>${f(180, 20, 'hernia: هر فتق به نام جایش', { size: 11.5, fill: INK, w: 800 })}<g transform="translate(0 18)">
      ${torso(180, 18, g)}
      <path d="M140 92 Q180 78 220 92" stroke="#c98f6b" stroke-width="2.5" fill="none"/>${f(238, 86, 'دیافراگم', { size: 8.5 })}
      <circle cx="172" cy="94" r="9" fill="#ff8787" stroke="#e03131" stroke-width="1.5"/>
      <circle cx="180" cy="180" r="9" fill="${COLON}" stroke="${COLON_D}" stroke-width="1.5"/>
      <ellipse cx="142" cy="246" rx="9" ry="12" fill="${COLON}" stroke="${COLON_D}" stroke-width="1.5" transform="rotate(30 142 246)"/>
      <circle cx="226" cy="168" r="8" fill="none" stroke="#868e96" stroke-width="1.5" stroke-dasharray="3 2"/>
      ${pin(170, 94, 60, 84)}${lab(50, 74, 'hiatal hernia', 'معده از سوراخ دیافراگم', { size: 10, fill: '#e03131' })}
      ${pin(180, 180, 300, 196)}${lab(310, 212, 'umbilical hernia', 'فتق ناف', { size: 10, fill: COLON_D })}
      ${pin(142, 246, 60, 238)}${lab(52, 222, 'inguinal hernia', 'فتق کشاله ران', { size: 10, fill: COLON_D })}
      ${pin(226, 168, 300, 140)}${lab(310, 124, 'incisional hernia', 'از جای برش جراحی', { size: 9.5, fill: '#495057' })}
      </g>${f(180, 294, 'strangulated: خون‌رسانی قطع شده؛ اورژانس', { size: 9.5, fill: '#c92a2a', w: 800 })}`, 'جای فتق‌ها');
  };

  /* از پولیپ تا سرطان و طبقه‌بندی Dukes */
  A.dukes = () => {
    const layers = [['mucosa', '#ffc9c9'], ['submucosa', '#ffe3e3'], ['muscle', '#f8a5a5'], ['serosa', '#ffd8a8']];
    const col = (x, depth, k, fa, nodes) => `${layers.map(([n, bg], i) => `<rect x="${x}" y="${60 + i * 26}" width="84" height="26" fill="${bg}"/>`).join('')}<path d="M${x + 22} 60 C${x + 22} 40 ${x + 62} 40 ${x + 62} 60 L${x + 58} ${60 + depth} L${x + 26} ${60 + depth}Z" fill="#862e9c" opacity=".85"/>${nodes ? `<circle cx="${x + 70}" cy="186" r="7" fill="#862e9c"/><circle cx="${x + 54}" cy="192" r="5" fill="#862e9c"/>` : ''}${t(x + 42, 214, 'Dukes ' + k, { size: 11, fill: '#862e9c', w: 900 })}${f(x + 42, 230, fa, { size: 9, fill: INK, w: 700 })}`;
    return svg(360, 262, `${f(180, 20, 'سرطان روده بزرگ: هرچه عمیق‌تر، پیشرفته‌تر', { size: 11.5, fill: INK, w: 800 })}
      ${col(266, 22, 'A', 'محدود به مخاط', false)}${col(176, 70, 'B', 'تا لایه ماهیچه', false)}${col(86, 104, 'C', 'گره لنفی درگیر', true)}
      ${layers.map(([n], i) => t(80, 77 + i * 26, n, { size: 8.5, fill: MUTED, anchor: 'end' })).join('')}
      ${f(180, 252, 'بیشتر سرطان‌ها از پولیپ شروع می‌شوند؛ polypectomy در کولونوسکوپی پیشگیری می‌کند', { size: 9, fill: VIO, w: 700 })}`, 'مراحل Dukes');
  };
  /* ---------- تشخیص، جراحی و دارو ---------- */
  /* هر آندوسکوپی کجا را می‌بیند */
  A['endo-family'] = () => {
    const segs = [['مری', '#f08c00'], ['معده', '#e8590c'], ['دوازدهه', '#c2255c'], ['روده باریک', '#a61e4d'], ['کولون', '#5f3dc4'], ['سیگموئید', '#1864ab'], ['رکتوم', '#0b7285']];
    const W = [38, 40, 46, 64, 60, 52, 44];
    let x = 352, xs = [];
    segs.forEach((s, i) => { x -= W[i]; xs.push(x); });
    const bar = (from, to, y, en, fa, c) => { const x1 = xs[to], x2 = xs[from] + W[from], left = x1 > 150; return `<rect x="${x1}" y="${y}" width="${x2 - x1}" height="16" rx="8" fill="${c}" opacity=".9"/>${t(left ? x1 - 5 : x2 + 5, y + 12, en, { size: 10, fill: c, w: 900, anchor: left ? 'end' : 'start' })}${fa ? f(left ? x2 : x1, y + 30, fa, { size: 8.5, fill: MUTED, anchor: left ? 'end' : 'start' }) : ''}`; };
    return svg(360, 300, `${f(180, 20, 'آندوسکوپی‌ها به نام بخشی که می‌بینند', { size: 11.5, fill: INK, w: 800 })}
      ${segs.map(([fa, c], i) => `<rect x="${xs[i]}" y="40" width="${W[i] - 2}" height="22" rx="5" fill="${c}" opacity=".18"/>${f(xs[i] + W[i] / 2, 55, fa, { size: 8.2, fill: c, w: 800 })}`).join('')}
      ${f(352, 78, 'دهان ←', { size: 8.5, anchor: 'end' })}${f(8, 78, 'مقعد', { size: 8.5, anchor: 'start' })}
      ${bar(0, 0, 88, 'esophagoscopy', '', '#f08c00')}
      ${bar(1, 1, 112, 'gastroscopy', '', '#e8590c')}
      ${bar(0, 2, 136, 'EGD', 'esophagogastroduodenoscopy', '#c2255c')}
      ${bar(4, 6, 176, 'colonoscopy', 'از مقعد تا سکوم', '#5f3dc4')}
      ${bar(5, 6, 216, 'sigmoidoscopy', '', '#1864ab')}
      ${bar(6, 6, 240, 'proctoscopy', 'رکتوم و مقعد', '#0b7285')}
      ${f(180, 292, 'capsule endoscopy با یک کپسول دوربین‌دار روده باریک را هم می‌بیند', { size: 9.5, fill: VIO, w: 700 })}`, 'خانواده آندوسکوپی');
  };

  /* تصویربرداری گوارش */
  A['gi-imaging'] = () => {
    const sh = 's' + (++UID);
    const R = [['barium swallow / UGI', 'بلع باریم: مری، معده و دوازدهه', '#e8590c'], ['barium enema (BE)', 'باریم از راه رکتوم: کولون', '#5f3dc4'], ['ERCP', 'آندوسکوپ + ماده حاجب: مجاری صفرا و پانکراس', '#2b8a3e'], ['PTC', 'سوزن از پوست به مجرای صفرا در کبد', '#087f5b'],
      ['MRCP', 'ام‌آر مجاری صفرا بدون آندوسکوپ', '#1098ad'], ['ultrasonography', 'سونوگرافی؛ آزمون اصلی سنگ صفرا', '#1c7ed6'], ['virtual colonoscopy', 'تصویر سه‌بعدی کولون با CT', '#7048e8']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, 'تصویربرداری در بیماری‌های گوارش', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, c], i) => { const y = 32 + i * 38; return `${card(8, y, 344, 32, '#f8f9fa', sh)}<rect x="8" y="${y}" width="6" height="32" rx="3" fill="${c}"/>${t(22, y + 21, en, { size: 10.5, fill: c, w: 900, anchor: 'start' })}${f(342, y + 21, fa, { size: 9, fill: INK, w: 700, anchor: 'end' })}`; }).join('')}`, 'تصویربرداری گوارش');
  };

  /* نقشه برداشتن‌ها */
  A['ectomy-map'] = () => {
    const g = 'k' + (++UID), cx = 180;
    return svg(360, 310, `<defs>${linear(g, SKIN[0], SKIN[1])}</defs>${f(180, 20, '‎-ectomy روی هر اندام', { size: 11.5, fill: INK, w: 800 })}<g transform="translate(0 6)">
      ${torso(cx, 20, g)}
      <path d="M${cx - 64} 92 C${cx - 60} 70 ${cx - 6} 68 ${cx + 6} 80 C${cx + 2} 102 ${cx - 30} 118 ${cx - 64} 112 Z" fill="${LIVER}"/>
      <path d="M${cx} 88 C${cx + 20} 72 ${cx + 54} 80 ${cx + 52} 104 C${cx + 50} 122 ${cx + 18} 128 ${cx + 2} 118" fill="#ff8787" stroke="#e03131" stroke-width="1.5"/>
      <ellipse cx="${cx - 24}" cy="116" rx="7" ry="10" fill="#69db7c"/>
      <path d="M${cx - 50} 220 V146 Q${cx - 50} 134 ${cx - 38} 134 H${cx + 40} Q${cx + 52} 134 ${cx + 52} 146 V206 Q${cx + 52} 224 ${cx + 30} 226 Q${cx + 8} 228 ${cx} 240" stroke="${COLON}" stroke-width="13" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M${cx - 52} 222 q-6 10 2 14" stroke="${COLON}" stroke-width="6" fill="none" stroke-linecap="round"/>
      ${pin(cx + 30, 100, 290, 70)}${lab(318, 60, 'gastrectomy', 'برداشتن معده', { size: 10, fill: '#e03131' })}
      ${pin(cx - 44, 90, 70, 70)}${lab(42, 60, 'hepatic lobectomy', 'برداشتن لوب کبد', { size: 9, fill: LIVER })}
      ${pin(cx - 24, 118, 70, 126)}${lab(42, 116, 'cholecystectomy', 'کیسه صفرا', { size: 9, fill: '#2b8a3e' })}
      ${pin(cx + 52, 170, 290, 160)}${lab(318, 150, 'colectomy', 'برداشتن کولون', { size: 10, fill: COLON_D })}
      ${pin(cx - 52, 232, 70, 206)}${lab(42, 196, 'appendectomy', 'آپاندیس', { size: 9.5, fill: '#d9480f' })}
      ${pin(cx + 4, 236, 290, 236)}${lab(318, 226, 'hemorrhoidectomy', 'بواسیر', { size: 8.8, fill: '#c2255c' })}</g>
      ${f(180, 304, 'برداشتن آپاندیس appendectomy است، نه appendicectomy', { size: 9, fill: VIO, w: 700 })}`, 'نقشه برداشتن‌ها');
  };

  /* بیلروت یک و دو */
  A.billroth = () => {
    const st = (x) => `<path d="M${x + 40} 40 V58 C${x + 60} 48 ${x + 110} 56 ${x + 112} 96 C${x + 112} 116 ${x + 96} 128 ${x + 74} 130 L${x + 40} 130" fill="#ffc9c9" stroke="#e03131" stroke-width="2"/><path d="M${x + 40} 122 V138" stroke="#212529" stroke-width="1.5" stroke-dasharray="2 2"/>`;
    return svg(360, 252, `${f(180, 20, 'بعد از برداشتن بخش پایینی معده، به کجا وصل شود؟', { size: 11, fill: INK, w: 800 })}
      <rect x="186" y="32" width="166" height="174" rx="14" fill="#fff4e6"/><rect x="8" y="32" width="166" height="174" rx="14" fill="#e6fcf5"/>
      ${st(206)}<path d="M246 130 C226 132 212 146 214 170 C216 186 236 190 250 184" stroke="#f4a3a8" stroke-width="14" fill="none" stroke-linecap="round"/>${f(268, 196, 'دوازدهه', { size: 9, fill: '#c2255c' })}
      ${st(28)}<path d="M28 160 C40 150 60 140 68 130" stroke="#fcc2d7" stroke-width="13" fill="none" stroke-linecap="round"/><path d="M68 130 C90 150 120 168 150 176" stroke="#fcc2d7" stroke-width="13" fill="none" stroke-linecap="round"/>${f(134, 196, 'ژژونوم', { size: 9, fill: '#a61e4d' })}
      ${t(269, 224, 'Billroth I', { size: 12, fill: '#d9480f', w: 900 })}${f(269, 242, 'gastroduodenostomy', { size: 9 })}
      ${t(91, 224, 'Billroth II', { size: 12, fill: '#2b8a3e', w: 900 })}${f(91, 242, 'gastrojejunostomy', { size: 9 })}`, 'بیلروت');
  };

  /* لوله‌ها و راه‌های تغذیه */
  A.tubes = () => {
    const sh = 's' + (++UID);
    const R = [['NG tube', 'از بینی به معده؛ تغذیه (gavage) یا شست‌وشو (lavage) و ساکشن', '👃', '#1c7ed6'], ['PEG tube', 'از پوست شکم به معده با کمک آندوسکوپ', '🎯', '#2b8a3e'], ['jejunostomy tube', 'از پوست به ژژونوم', '🔗', '#a61e4d'], ['TPN', 'تغذیه کامل از راه سیاهرگ؛ لوله گوارش دور زده می‌شود', '💉', '#7048e8'], ['NPO', 'هیچ چیز از راه دهان (پیش از عمل و آندوسکوپی)', '🚫', '#c92a2a']];
    return svg(360, 284, `<defs>${shadow(sh)}</defs>${f(180, 20, 'وقتی بیمار نمی‌تواند غذا بخورد', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ic, c], i) => { const y = 32 + i * 50; return `${card(8, y, 344, 44, '#f8f9fa', sh)}<text x="334" y="${y + 29}" font-size="17" text-anchor="middle">${ic}</text>${t(316, y + 18, en, { size: 11.5, fill: c, w: 900, anchor: 'end' })}${f(316, y + 35, fa, { size: 8.8, fill: INK, w: 700, anchor: 'end' })}`; }).join('')}`, 'لوله‌ها و تغذیه');
  };

  /* داروهای اسید معده */
  A['acid-drugs'] = () => {
    const mk = 'm' + (++UID), sh = 's' + (++UID);
    return svg(360, 262, `<defs>${marker(mk, '#c92a2a')}${shadow(sh)}</defs>${f(180, 20, 'سه راه برای کم کردن اسید معده', { size: 11.5, fill: INK, w: 800 })}
      <rect x="120" y="44" width="120" height="96" rx="18" fill="#fff0f0" stroke="#e03131" stroke-width="2"/>${f(180, 62, 'سلول دیواره معده', { size: 9, fill: '#c92a2a', w: 800 })}
      <circle cx="150" cy="104" r="12" fill="#ffa8a8" stroke="#c92a2a"/>${t(150, 108, 'H2', { size: 9, fill: '#c92a2a' })}
      <rect x="196" y="92" width="26" height="24" rx="6" fill="#ffc078" stroke="#d9480f"/>${t(209, 108, 'pump', { size: 7.5, fill: '#d9480f' })}
      ${arrow(mk, 222, 104, 268, 104, '#c92a2a', 2.5)}${t(296, 108, 'HCl', { size: 13, fill: '#c92a2a', w: 900 })}
      ${card(8, 156, 108, 98, '#e7f5ff', sh)}${card(126, 156, 108, 98, '#fff4e6', sh)}${card(244, 156, 108, 98, '#ebfbee', sh)}
      ${t(298, 178, 'antacid', { size: 11.5, fill: '#2b8a3e', w: 900 })}${f(298, 196, 'اسید ساخته‌شده', { size: 9, fill: INK, w: 700 })}${f(298, 210, 'را خنثی می‌کند', { size: 9, fill: INK, w: 700 })}${t(298, 234, 'Tums, Maalox', { size: 8.5, fill: MUTED })}
      ${t(180, 178, 'PPI', { size: 11.5, fill: '#d9480f', w: 900 })}${f(180, 196, 'پمپ پروتون را', { size: 9, fill: INK, w: 700 })}${f(180, 210, 'مهار می‌کند', { size: 9, fill: INK, w: 700 })}${t(180, 234, 'omeprazole', { size: 8.5, fill: MUTED })}
      ${t(62, 178, 'H2 blocker', { size: 11.5, fill: '#1c7ed6', w: 900 })}${f(62, 196, 'گیرنده H2 را', { size: 9, fill: INK, w: 700 })}${f(62, 210, 'می‌بندد', { size: 9, fill: INK, w: 700 })}${t(62, 234, 'famotidine', { size: 8.5, fill: MUTED })}
      ${curve(mk, 'M62 154 C62 120 100 104 136 104', '#1c7ed6', 1.6, true)}${curve(mk, 'M180 154 C190 136 200 126 206 118', '#d9480f', 1.6, true)}${curve(mk, 'M298 154 C298 132 298 124 298 116', '#2b8a3e', 1.6, true)}`, 'داروهای اسید');
  };

  /* داروهای جفت و ضد */
  A['drug-pairs'] = () => {
    const sh = 's' + (++UID);
    const P = [['emetic', 'استفراغ می‌آورد', 'antiemetic', 'جلوی تهوع و استفراغ را می‌گیرد', '#c92a2a'], ['laxative', 'دفع را آسان می‌کند (ملین)', 'antidiarrheal', 'اسهال را درمان می‌کند', '#7048e8'], ['cathartic', 'مسهل قوی', 'stool softener', 'مدفوع را نرم می‌کند', '#a07a1a'], ['antispasmodic', 'گرفتگی روده را کم می‌کند', 'antiflatulent', 'گاز و نفخ را کم می‌کند', '#1098ad']];
    return svg(360, 262, `<defs>${shadow(sh)}</defs>${f(180, 20, 'داروهای گوارشی دوتایی', { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([a, af, b, bf, c], i) => { const y = 32 + i * 56; return `${card(186, y, 166, 48, '#f8f9fa', sh)}${card(8, y, 166, 48, '#f8f9fa', sh)}${t(269, y + 20, a, { size: 11.5, fill: c, w: 900 })}${f(269, y + 37, af, { size: 9, fill: INK, w: 700 })}${t(91, y + 20, b, { size: 11.5, fill: c, w: 900 })}${f(91, y + 37, bf, { size: 8.6, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 256, 'anti- یعنی ضد: emetic در برابر antiemetic', { size: 9.5, fill: VIO, w: 700 })}`, 'داروهای جفت');
  };
  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
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
    id: 'lx', sym: 'Lx', name: 'زبان گوارش', short: 'زبان', sub: 'ساختار واژه، ریشه‌های دهان، لوله گوارش و کبد و صفرا، پسوندهای علامت و جراحی، صفت‌ها، جمع‌ها و واژه‌های شبیه',
    color: '#4C6EF5', dark: '#364FC7', light: '#EDF2FF',
    levels: ['ساختار واژه و ریشه‌های دهان', 'ریشه‌های لوله گوارش و اندام‌های کمکی', 'پسوندها، صفت‌ها و جمع‌ها'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: ساختار واژه و ریشه‌های دهان ================= */
      {
        id: 'lx1', title: 'یک واژه را بشکن', icon: '🧩', items: [
          L('واژه گوارشی سه تکه دارد', `بیشتر واژه‌های گوارش از <b>ریشه</b> (اندام)، <b>واکه رابط</b> و <b>پسوند</b> (چه اتفاقی افتاده) ساخته می‌شوند.${fig('wordparts')}معنی را از آخر بخوان: در ${e('cholecystectomy')} ریشه <b>cholecyst/o</b> کیسه صفراست و پسوند <b>‎-ectomy</b> برداشتن؛ پس یعنی «برداشتن کیسه صفرا».`),
          L('واکه رابط کی می‌افتد؟', `${wb('gastr/o', '-scopy')} = <b>gastroscopy</b> (دیدن درون معده)؛ ولی ${wb('gastr/o', '-itis')} = <b>gastritis</b>، نه gastroitis.${memo('پسوندی که با حرف صدادار شروع شود، مثل ‎-itis، ‎-ectomy و ‎-algia، واکه o را کنار می‌زند.')}`),
          M(`${e('<b>gastritis</b>')} یعنی…`, ['التهاب معده', 'دیدن درون معده', 'برداشتن معده', 'درد معده'], 'gastr/o (معده) + -itis (التهاب).'),
          M(`در ${e('<b>gastroscopy</b>')} پسوند کدام است؟`, ['-scopy: دیدن درون', '-gastr: معده', '-o: واکه رابط', '-copy: نسخه'], 'gastr + o + scopy.'),
          L('دو ریشه در یک واژه', `${wb('gastr/o', 'enter/o', '-itis')} = <b>gastroenteritis</b>: التهاب معده و روده. ${e('gastroenterology')} دانش معده و روده است و پزشکش ${e('gastroenterologist')}.${pearl('متخصص گوارش همان gastroenterologist است؛ در کشور ما «فوق‌تخصص گوارش» هم می‌گویند.')}`),
          T('در gastroenteritis میان دو ریشه هم واکه o می‌آید.', true, 'gastr + o + enter + itis: میان دو ریشه همیشه o می‌آید.'),
          M(`${e('<b>gastroenterologist</b>')} کیست؟`, ['پزشک متخصص بیماری‌های گوارش', 'جراح دندان', 'متخصص کبد کودکان', 'پرستار اتاق عمل'], 'gastr/o + enter/o + -logist.'),
          B('التهاب معده و روده را ___ می‌گویند.', ['gastroenteritis', 'gastroscopy', 'enteropathy'], 'gastr/o + enter/o + -itis.'),
          W('واژه‌ای بساز به معنی «برداشتن کیسه صفرا»', ['cholecyst/o', '-ectomy'], ['-scopy', 'gastr/o', '-itis'], 'cholecyst/o + -ectomy = cholecystectomy؛ o پیش از ‎-ectomy می‌افتد.'),
          S('املای «التهاب معده» را بنویس', 'gastritis', 'gastr/o + -itis؛ بدون o.', 'gast…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx2', title: 'دهان، لب و دندان', icon: '👄', items: [
          L('ریشه‌های دهان', `${fig('mouth-roots')}برای دهان دو ریشه داریم: <b>or/o</b> و <b>stomat/o</b>. ${e('oral')} یعنی دهانی و ${e('stomatitis')} یعنی التهاب مخاط دهان.${memo('stomat/o شبیه stomach است ولی «دهان» است؛ معده gastr/o است.')}`),
          M(`${e('<b>stomatitis</b>')} یعنی…`, ['التهاب مخاط دهان', 'التهاب معده', 'التهاب لب', 'التهاب زبان'], 'stomat/o = دهان.'),
          L('دور دهان و گونه', `${tbl([['واژه', 'اجزا', 'معنی'], [e('circumoral'), 'circum- + or/o + -al', 'دور دهان'], [e('buccal'), 'bucc/o + -al', 'گونه‌ای'], [e('buccopharyngeal'), 'bucc/o + pharyng/o + -eal', 'گونه‌ای‌حلقی']])}`),
          M(`${e('<b>circumoral</b>')} یعنی…`, ['دور دهان', 'زیر زبان', 'درون گونه', 'پشت حلق'], 'circum- (دور) + or/o + -al.'),
          L('لب و دندان', `لب دو ریشه دارد: <b>labi/o</b> و <b>cheil/o</b>؛ دندان هم دو تا: <b>dent/o</b> یا dent/i، و <b>odont/o</b>.${tbl([['واژه', 'معنی'], [e('labiodental'), 'لبی‌دندانی'], [e('dentalgia'), 'دندان‌درد'], [e('edentulous'), 'بی‌دندان (e- = بدون)'], [e('orthodontist'), 'دندان‌پزشک ردیف‌کننده دندان‌ها (orth/o = راست)'], [e('periodontics'), 'درمان بافت‌های اطراف دندان']])}`),
          P('هر واژه را به معنی‌اش وصل کن', [['edentulous', 'بی‌دندان'], ['dentalgia', 'دندان‌درد'], ['labiodental', 'لبی‌دندانی'], ['orthodontist', 'متخصص ردیف کردن دندان']]),
          M('کدام ریشه هم معنی dent/o است؟', ['odont/o', 'gnath/o', 'gingiv/o', 'gloss/o'], 'dent/o = odont/o = دندان.'),
          L('لثه', `<b>gingiv/o</b> یعنی لثه: ${e('gingivitis')} التهاب لثه و ${e('gingivectomy')} برداشتن بخشی از لثه.${pearl('بهداشتکار دهان (dental hygienist) جرم و پلاک را برمی‌دارد تا gingivitis پیش نیاید.')}`),
          T('gingivitis یعنی التهاب زبان.', false, 'نادرست؛ gingiv/o لثه است. التهاب زبان glossitis است.'),
          W('واژه‌ای بساز به معنی «درد دندان»', ['dent/o', '-algia'], ['-itis', 'gingiv/o', 'or/o'], 'dent/o + -algia = dentalgia.'),
          S('املای «متخصص ردیف کردن دندان» را بنویس', 'orthodontist', 'orth/o + odont/o + -ist.', 'ortho…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx3', title: 'زبان، فک، کام و بزاق', icon: '👅', items: [
          L('زبان دو ریشه دارد', `<b>gloss/o</b> (یونانی) و <b>lingu/o</b> (لاتین) هر دو یعنی زبان.${tbl([['واژه', 'معنی'], [e('glossitis'), 'التهاب زبان'], [e('glossoplegia'), 'فلج زبان (‎-plegia)'], [e('hypoglossal'), 'زیرزبانی (hypo-)'], [e('sublingual'), 'زیرزبانی (sub-)'], [e('hemiglossal'), 'مربوط به نیمی از زبان (hemi-)'], [e('orolingual'), 'دهانی‌زبانی']])}${pearl('قرص نیتروگلیسرین sublingual است: زیر زبان حل می‌شود.')}`),
          M(`${e('<b>glossoplegia</b>')} یعنی…`, ['فلج زبان', 'التهاب زبان', 'بخیه زبان', 'برداشتن زبان'], 'gloss/o + -plegia (فلج).'),
          T('hypoglossal و sublingual هر دو یعنی زیرزبانی.', true, 'hypo- و sub- هر دو یعنی زیر.'),
          L('فک', `<b>gnath/o</b> یعنی فک: ${e('prognathous')} فک جلوآمده (pro- = جلو)، ${e('micrognathia')} فک کوچک و ${e('agnathia')} نبود فک.`),
          M(`${e('<b>micrognathia</b>')} یعنی…`, ['کوچکی فک', 'نبود دندان', 'بزرگی زبان', 'فلج فک'], 'micro- + gnath/o + -ia.'),
          L('کام، زبانک و بزاق', `${tbl([['ریشه', 'معنی', 'نمونه'], [e('palat/o'), 'کام', 'palatorrhaphy: بخیه کام'], [e('uvul/o'), 'زبان کوچک', 'uvulectomy: برداشتن زبانک'], [e('sial/o'), 'بزاق، غده بزاقی', 'sialolith: سنگ بزاقی (lith/o یعنی سنگ) • sialogram: عکس غدد بزاقی • sialorrhea: ترشح زیاد بزاق']])}`),
          P('هر ریشه را به معنی‌اش وصل کن', [['palat/o', 'کام'], ['uvul/o', 'زبان کوچک'], ['sial/o', 'بزاق'], ['gnath/o', 'فک']]),
          M(`${e('<b>sialolith</b>')} یعنی…`, ['سنگ در غده یا مجرای بزاقی', 'التهاب غده بزاقی', 'خشکی دهان', 'سنگ کیسه صفرا'], 'sial/o + lith (سنگ).'),
          B('بخیه زدن کام، مثلاً در شکاف کام، ___ نام دارد.', ['palatorrhaphy', 'palatoplegia', 'uvulectomy'], 'palat/o + -rrhaphy (بخیه).'),
          L('مرور سطح «ساختار واژه و ریشه‌های دهان»', recap(['معنی را از آخر بخوان؛ پیش از پسوند صدادار واکه o می‌افتد: gastritis', 'دهان or/o و stomat/o • گونه bucc/o • لب labi/o و cheil/o', 'دندان dent/o و odont/o • لثه gingiv/o • فک gnath/o', 'زبان gloss/o و lingu/o • کام palat/o • زبانک uvul/o • بزاق sial/o'])),
          W('واژه‌ای بساز به معنی «سنگ بزاقی»', ['sial/o', 'lith/o'], ['gloss/o', '-itis', 'palat/o'], 'sial/o + lith = sialolith.'),
          S('املای «زیرزبانی» را با پیشوند sub- بنویس', 'sublingual', 'sub- + lingu/o + -al.', 'sub…'),
          N('wb:lx')
        ]
      },
      /* ================= سطح ۲: ریشه‌های لوله گوارش و اندام‌های کمکی ================= */
      {
        id: 'lx4', title: 'از مری تا روده باریک', icon: '🍽️', items: [
          L('ریشه‌ها به ترتیب مسیر غذا', `${fig('tract-roots')}نیمه اول مسیر: <b>esophag/o</b> مری، <b>gastr/o</b> معده، <b>pylor/o</b> پیلور، <b>enter/o</b> روده (بیشتر روده باریک)، <b>duoden/o</b>، <b>jejun/o</b> و <b>ile/o</b>.`),
          L('مری و معده', `${tbl([['واژه', 'معنی'], [e('esophagostenosis'), 'تنگی مری'], [e('gastralgia'), 'معده‌درد؛ هم‌معنی gastrodynia'], [e('gastroparesis'), 'فلج نسبی معده؛ دیر خالی شدن معده'], [e('pylorospasm'), 'گرفتگی ناگهانی پیلور']])}`),
          M(`${e('<b>esophagostenosis</b>')} یعنی…`, ['تنگی مری', 'التهاب مری', 'گشادی مری', 'فلج مری'], 'esophag/o + -stenosis (تنگی).'),
          T('gastralgia و gastrodynia هر دو یعنی معده‌درد.', true, '‎-algia و ‎-dynia هر دو یعنی درد.'),
          L('روده باریک', `${tbl([['واژه', 'معنی'], [e('enteropathy'), 'هر بیماری روده'], [e('dysentery'), 'اسهال خونی؛ dys- + enter/o + -y'], [e('duodenitis'), 'التهاب دوازدهه'], [e('jejunitis'), 'التهاب ژژونوم'], [e('ileitis'), 'التهاب ایلئوم']])}${memo('ileum با e روده است، مثل e در intestine؛ ilium با i استخوان لگن است، مثل i در hip.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['duodenitis', 'التهاب دوازدهه'], ['jejunitis', 'التهاب ژژونوم'], ['ileitis', 'التهاب ایلئوم'], ['enteropathy', 'بیماری روده']]),
          M('ileum کدام است؟', ['بخش پایانی روده باریک', 'استخوان لگن', 'بخش اول روده بزرگ', 'دهانه معده'], 'ileum روده است؛ ilium استخوان لگن.'),
          B('اسهال خونی ناشی از التهاب روده ___ نام دارد.', ['dysentery', 'dyspepsia', 'duodenitis'], 'dys- + enter/o + -y.'),
          W('واژه‌ای بساز به معنی «التهاب معده و دوازدهه»', ['gastr/o', 'duoden/o', '-itis'], ['jejun/o', '-stenosis', 'esophag/o'], 'gastr/o + duoden/o + -itis = gastroduodenitis.'),
          S('املای «تنگی مری» را بنویس', 'esophagostenosis', 'esophag/o + -stenosis.', 'esophago…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx5', title: 'روده بزرگ، رکتوم و مقعد', icon: '🌀', items: [
          L('نیمه دوم مسیر', `<b>cec/o</b> سکوم، <b>col/o</b> و <b>colon/o</b> کولون، <b>sigmoid/o</b> کولون سیگموئید، <b>rect/o</b> رکتوم، <b>proct/o</b> رکتوم و مقعد و <b>an/o</b> مقعد.${memo('proct/o را با prostat/o (پروستات) قاطی نکن؛ proctology دانش رکتوم و مقعد است.')}`),
          L('واژه‌ها', `${tbl([['واژه', 'معنی'], [e('cecoptosis'), 'افتادگی سکوم (‎-ptosis)'], [e('coloclysis'), 'شست‌وشوی کولون (‎-clysis)'], [e('rectocele'), 'فتق رکتوم به درون واژن (‎-cele)'], [e('proctopexy'), 'ثابت کردن رکتوم با جراحی (‎-pexy)'], [e('proctoptosis'), 'افتادگی رکتوم و مقعد']])}`),
          M(`${e('<b>rectocele</b>')} یعنی…`, ['فتق رکتوم', 'التهاب رکتوم', 'تنگی رکتوم', 'برش رکتوم'], 'rect/o + -cele (فتق، بیرون‌زدگی).'),
          M(`${e('<b>proctopexy</b>')} یعنی…`, ['ثابت کردن رکتوم با جراحی', 'دیدن درون رکتوم', 'افتادگی رکتوم', 'برداشتن رکتوم'], 'proct/o + -pexy (ثابت کردن).'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-ptosis', 'افتادگی'], ['-cele', 'فتق'], ['-pexy', 'ثابت کردن'], ['-clysis', 'شست‌وشو']]),
          L('اطراف مقعد', `${e('perianal')} یعنی اطراف مقعد (peri- + an/o + -al) و ${e('anorectal')} یعنی مربوط به مقعد و رکتوم.${vs(['an/o', 'ریشه: مقعد؛ anal'], ['an-', 'پیشوند: بدون؛ anorexia'])}`),
          T('در anorexia، an- همان ریشه مقعد است.', false, 'نادرست؛ در anorexia پیشوند an- (بدون) + orex/o (اشتها) است.'),
          M('کدام ریشه یعنی «کولون»؟', ['col/o', 'chol/e', 'cec/o', 'cyst/o'], 'col/o و colon/o = کولون؛ chol/e صفراست.'),
          W('واژه‌ای بساز به معنی «افتادگی رکتوم و مقعد»', ['proct/o', '-ptosis'], ['-pexy', 'cec/o', '-cele'], 'proct/o + -ptosis = proctoptosis.'),
          S('املای «اطراف مقعد» را بنویس', 'perianal', 'peri- + an/o + -al.', 'peri…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx6', title: 'کبد، صفرا و پانکراس', icon: '🟤', items: [
          L('ریشه‌های اندام‌های کمکی', `${fig('acc-roots')}<b>hepat/o</b> کبد؛ <b>chol/e</b> و <b>bili</b> صفرا؛ <b>cholecyst/o</b> کیسه صفرا؛ <b>cholangi/o</b> مجرای صفراوی؛ <b>choledoch/o</b> مجرای صفراوی مشترک؛ <b>pancreat/o</b> پانکراس.`),
          L('کبد', `${tbl([['واژه', 'معنی'], [e('hepatocyte'), 'سلول کبدی'], [e('hepatomegaly'), 'بزرگی کبد'], [e('hepatopathy'), 'هر بیماری کبد'], [e('hepatogenic'), 'با منشأ کبدی']])}`),
          M(`${e('<b>hepatocyte</b>')} یعنی…`, ['سلول کبدی', 'تومور کبد', 'التهاب کبد', 'بزرگی کبد'], 'hepat/o + -cyte (سلول).'),
          L('صفرا و مجاری', `${tbl([['واژه', 'معنی'], [e('biliary'), 'صفراوی'], [e('cholestasis'), 'ایستایی جریان صفرا'], [e('cholelith'), 'سنگ صفرا'], [e('cholecystogram'), 'عکس کیسه صفرا'], [e('cholangioma'), 'تومور مجرای صفراوی'], [e('choledochal'), 'مربوط به مجرای صفراوی مشترک']])}${memo('chol/e با e استثناست؛ و chole همان gall (صفرا) است: cholecyst = gall + bladder.')}`),
          P('هر ریشه را به معنی‌اش وصل کن', [['cholecyst/o', 'کیسه صفرا'], ['cholangi/o', 'مجرای صفراوی'], ['choledoch/o', 'مجرای صفراوی مشترک'], ['hepat/o', 'کبد']]),
          M(`${e('<b>cholestasis</b>')} یعنی…`, ['ایستایی جریان صفرا', 'سنگ صفرا', 'التهاب کیسه صفرا', 'ترشح زیاد صفرا'], 'chol/e + -stasis (ایستایی).'),
          T('التهاب کیسه صفرا را colecystitis می‌نویسند.', false, 'نادرست؛ cholecystitis درست است. col/o کولون است.'),
          L('پانکراس', `${e('pancreatolysis')} یعنی تخریب بافت پانکراس و ${e('pancreatotropic')} یعنی اثرکننده بر پانکراس.${pearl('در پرونده‌ها CBD همان common bile duct است و GB همان gallbladder.')}`),
          B('تومور مجرای صفراوی را ___ می‌گویند.', ['cholangioma', 'cholelith', 'hepatoma'], 'cholangi/o + -oma.'),
          L('مرور سطح «ریشه‌های لوله گوارش و اندام‌های کمکی»', recap(['مری esophag/o • معده gastr/o • پیلور pylor/o • روده enter/o', 'دوازدهه duoden/o • ژژونوم jejun/o • ایلئوم ile/o (نه ili/o لگن)', 'سکوم cec/o • کولون col/o و colon/o • سیگموئید sigmoid/o • رکتوم rect/o • رکتوم و مقعد proct/o • مقعد an/o', 'کبد hepat/o • صفرا chol/e و bili • کیسه صفرا cholecyst/o • مجرا cholangi/o و choledoch/o • پانکراس pancreat/o'])),
          W('واژه‌ای بساز به معنی «سنگ صفرا»', ['chol/e', 'lith/o'], ['col/o', '-itis', 'hepat/o'], 'chol/e + lith = cholelith.'),
          S('املای «صفراوی» را بنویس', 'biliary', 'bili + -ary.', 'bil…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۳: پسوندها، صفت‌ها و جمع‌ها ================= */
      {
        id: 'lx7', title: 'پسوندهای علامت', icon: '🔎', items: [
          L('هشت پسوند علامت گوارشی', `${fig('sx-suffixes')}${tbl([['پسوند', 'معنی', 'نمونه'], [e('-emesis'), 'استفراغ', 'hematemesis: استفراغ خون'], [e('-pepsia'), 'هضم', 'dyspepsia: سوءهاضمه'], [e('-phagia'), 'خوردن، بلع', 'dysphagia: سختی بلع'], [e('-prandial'), 'وعده غذا', 'postprandial: پس از غذا']])}`),
          M(`${e('<b>hematemesis</b>')} یعنی…`, ['استفراغ خون', 'خون در مدفوع', 'سوءهاضمه', 'سختی بلع'], 'hemat/o (خون) + -emesis (استفراغ).'),
          M(`${e('<b>postprandial</b>')} یعنی…`, ['پس از غذا', 'پیش از غذا', 'هنگام بلع', 'پس از دفع'], 'post- + -prandial.'),
          L('دفع و جریان', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-chezia'), 'دفع مدفوع', 'hematochezia: خون روشن در مدفوع'], [e('-rrhea'), 'جریان، ترشح', 'diarrhea • steatorrhea: مدفوع چرب'], [e('-lithiasis'), 'بیماری سنگ', 'cholelithiasis'], [e('-stasis'), 'ایستایی', 'cholestasis']])}${memo('در ‎-rrhea و ‎-rrhaphy حرف r دوتاست: diarrhea، herniorrhaphy.')}`),
          P('هر پسوند را به معنی‌اش وصل کن', [['-emesis', 'استفراغ'], ['-pepsia', 'هضم'], ['-phagia', 'بلع'], ['-chezia', 'دفع مدفوع']]),
          L('درد، بزرگی، تنگی', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-algia, -dynia'), 'درد', 'cholecystalgia: درد کیسه صفرا'], [e('-megaly'), 'بزرگی', 'splenomegaly: بزرگی طحال'], [e('-stenosis'), 'تنگی', 'esophagostenosis'], [e('-ectasis'), 'گشادی', 'cholangiectasis: گشادی مجرای صفرا'], [e('-spasm'), 'گرفتگی ناگهانی', 'pylorospasm']])}`),
          M(`${e('<b>cholangiectasis</b>')} یعنی…`, ['گشادی مجرای صفراوی', 'تنگی مجرای صفراوی', 'سنگ مجرای صفراوی', 'التهاب مجرای صفراوی'], 'cholangi/o + -ectasis (گشادی).'),
          T('steatorrhea یعنی مدفوع چرب.', true, 'steat/o (چربی) + -rrhea (جریان).'),
          B('خون قرمز روشن در مدفوع را ___ می‌نامند.', ['hematochezia', 'hematemesis', 'steatorrhea'], 'hemat/o + -chezia.'),
          W('واژه‌ای بساز به معنی «درد کیسه صفرا»', ['cholecyst/o', '-algia'], ['-ectasis', 'hepat/o', '-emesis'], 'cholecyst/o + -algia = cholecystalgia.'),
          S('املای «سوءهاضمه» را بنویس', 'dyspepsia', 'dys- + -pepsia.', 'dysp…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx8', title: 'پسوندهای جراحی و تخصص', icon: '✂️', items: [
          L('هشت پسوند جراحی و تشخیص', `${fig('surg-suffixes')}${tbl([['پسوند', 'معنی', 'نمونه'], [e('-ectomy'), 'برداشتن', 'gastrectomy'], [e('-tomy'), 'برش', 'laparotomy: برش شکم'], [e('-stomy'), 'ساختن دهانه', 'colostomy'], [e('-plasty'), 'ترمیم', 'pyloroplasty'], [e('-rrhaphy'), 'بخیه', 'herniorrhaphy'], [e('-pexy'), 'ثابت کردن', 'proctopexy'], [e('-tripsy'), 'خرد کردن', 'lithotripsy'], [e('-scopy'), 'دیدن درون', 'colonoscopy']])}`),
          M(`${e('<b>laparotomy</b>')} یعنی…`, ['برش دیواره شکم', 'برداشتن شکم', 'دیدن درون شکم', 'ترمیم شکم'], 'lapar/o (دیواره شکم) + -tomy (برش).'),
          P('هر واژه را به معنی‌اش وصل کن', [['gastrectomy', 'برداشتن معده'], ['pyloroplasty', 'ترمیم پیلور'], ['herniorrhaphy', 'ترمیم فتق با بخیه'], ['lithotripsy', 'خرد کردن سنگ']]),
          L('یک اندام یا دو اندام؟', `${fig('stomy-naming')}وقتی یک اندام به پوست باز شود فقط یک ریشه می‌آید: ${e('ileostomy')}. وقتی دو اندام به هم وصل شوند هر دو ریشه می‌آید: ${e('gastrojejunostomy')}. به این اتصال <b>anastomosis</b> می‌گویند.`),
          M(`${e('<b>gastrojejunostomy</b>')} یعنی…`, ['اتصال جراحی معده به ژژونوم', 'دهانه ژژونوم روی پوست', 'برداشتن معده و ژژونوم', 'برش ژژونوم'], 'دو ریشه + ‎-stomy = آناستوموز.'),
          T('ileostomy یعنی وصل کردن ایلئوم به دیواره شکم و ساختن دهانه روی پوست.', true, 'یک ریشه + ‎-stomy = دهانه به بیرون.'),
          L('تخصص‌ها', `${tbl([['واژه', 'معنی'], [e('gastroenterology'), 'دانش و درمان بیماری‌های گوارش'], [e('proctology'), 'درمان بیماری‌های رکتوم و مقعد'], [e('hepatology'), 'کبدشناسی'], [e('orthodontics'), 'ارتودنسی: ردیف کردن دندان‌ها']])}${memo('‎-logy دانش است و ‎-logist متخصص آن دانش.')}`),
          M('متخصص بیماری‌های رکتوم و مقعد…', ['proctologist', 'prostatologist', 'gastrologist', 'hepatologist'], 'proct/o + -logist.'),
          B('اتصال جراحی دو اندام توخالی ___ نام دارد.', ['anastomosis', 'ostomy', 'resection'], 'anastomosis = surgical connection.'),
          W('واژه‌ای بساز به معنی «اتصال معده به دوازدهه»', ['gastr/o', 'duoden/o', '-stomy'], ['-ectomy', 'jejun/o', '-tomy'], 'gastr/o + duoden/o + -stomy = gastroduodenostomy.'),
          S('املای «ترمیم فتق با بخیه» را بنویس', 'herniorrhaphy', 'herni/o + -rrhaphy؛ rr دوتایی.', 'hernio…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx9', title: 'صفت، جمع و واژه‌های شبیه', icon: '⚖️', items: [
          L('ساختن صفت', `${fig('adj-endings')}پسوندهای ‎-al، ‎-ic، ‎-ac، ‎-ar و ‎-ary یعنی «مربوط به»: ${e('gastric')} معدی، ${e('biliary')} صفراوی و ${e('celiac')} شکمی. در ${e('esophageal')} و ${e('pharyngeal')} پیش از ‎-al حرف e می‌آید.`),
          M(`صفت درست برای «مری» کدام است؟`, ['esophageal', 'esophagal', 'esophagic', 'esophagary'], 'esophag + -eal.'),
          T('celiac یعنی مربوط به شکم.', true, 'celi/o (شکم) + -ac.'),
          L('جمع واژه‌های یونانی و لاتین', `${fig('plurals')}${e('diverticulum → diverticula')}، ${e('calculus → calculi')}، ${e('gingiva → gingivae')}، ${e('villus → villi')} و ${e('anastomosis → anastomoses')}.${memo('قاعده‌ها را از چپ به راست بخوان: ' + e('-um → -a, -us → -i, -a → -ae, -is → -es, -ix → -ices'))}`),
          P('هر مفرد را به جمعش وصل کن', [['diverticulum', 'diverticula'], ['calculus', 'calculi'], ['gingiva', 'gingivae'], ['anastomosis', 'anastomoses']]),
          M(`جمع ${e('<b>villus</b>')} کدام است؟`, ['villi', 'villa', 'villae', 'villuses'], '-us → -i.'),
          L('واژه‌های هم‌آوا و شبیه', `${fig('lookalikes')}چند جفت از جعبه هم‌آواهای کتاب: ${e('ileum')} روده و ${e('ilium')} لگن؛ ${e('iliac')} لگنی و ${e('ileal')} مربوط به ایلئوم؛ ${e('dysphagia')} سختی بلع و ${e('dysphasia')} سختی گفتار.`),
          M('بیمار پس از سکته نمی‌تواند درست حرف بزند. کدام واژه درست است؟', ['dysphasia', 'dysphagia', 'dyspepsia', 'aphagia'], 'phas = گفتار؛ phag = بلع.'),
          T('iliac یعنی مربوط به ایلئوم.', false, 'نادرست؛ iliac مربوط به استخوان لگن (ilium) است. صفت ایلئوم ileal است.'),
          L('مرور سطح «پسوندها، صفت‌ها و جمع‌ها»', recap(['علامت: ‎-emesis استفراغ • ‎-pepsia هضم • ‎-phagia بلع • ‎-prandial غذا • ‎-chezia دفع • ‎-rrhea جریان', '‎-ectomy برداشتن • ‎-tomy برش • ‎-stomy دهانه؛ دو ریشه + ‎-stomy = anastomosis', 'صفت: esophageal و pharyngeal با e؛ gastric، biliary، celiac', 'جمع: diverticula، calculi، gingivae، villi، anastomoses • ileum روده، ilium لگن'])),
          B('جمع diverticulum واژه ___ است.', ['diverticula', 'diverticulums', 'diverticuli'], '-um → -a.'),
          S('املای صفت «حلقی» را بنویس', 'pharyngeal', 'pharyng + -eal.', 'pharyn…'),
          N('ab:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* گوارا — دنیای ۲: دهان تا معده
 * کار دستگاه گوارش، حفره دهان، دندان‌ها، بزاق و جویدن، حلق و بلع، مری و حرکت دودی، بخش‌های معده، شیره معده و آنزیم‌ها.
 * منابع: فصل Digestive System (شکل‌های دستگاه گوارش، دهان، دندان، غدد بزاقی، حلق، معده؛ جعبه ۱۳-۱ و ۱۳-۲؛ واژه‌های کلیدی).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'mo', sym: 'Oro', name: 'دهان تا معده', short: 'دهان', sub: 'لوله گوارش و کارهایش، دهان و دندان، بزاق، حلق و بلع، مری و حرکت دودی، معده و شیره آن',
    color: '#E8590C', dark: '#C2410C', light: '#FFF4E6',
    levels: ['گوارش، دهان و دندان', 'بزاق، حلق و مری', 'معده و آنزیم‌ها'],
    gens: EA.genIds('mo'),
    lessons: [
      /* ================= سطح ۱: گوارش، دهان و دندان ================= */
      {
        id: 'mo1', title: 'دستگاه گوارش چه می‌کند؟', icon: '⚙️', items: [
          L('یک لوله بلند و چند اندام کمکی', `${fig(['gi-overview'], ['دستگاه گوارش'])}<b>alimentary canal</b> یا gastrointestinal tract (GI tract) لوله‌ای ماهیچه‌ای از دهان تا مقعد است. غذا از درون <b>accessory organs</b> (غدد بزاقی، کبد، کیسه صفرا و پانکراس) نمی‌گذرد، ولی شیره‌شان برای هضم لازم است.`),
          M(`${e('<b>GI</b>')} یعنی…`, ['gastrointestinal؛ گوارشی', 'general internal', 'gland and intestine', 'gastric infection'], 'gastr/o (معده) + intestin (روده).'),
          T('کبد و پانکراس بخشی از لوله گوارش‌اند و غذا از درونشان می‌گذرد.', false, 'نادرست؛ اندام‌های کمکی‌اند و فقط شیره‌شان را به لوله می‌ریزند.'),
          L('هفت گام', `${fig('digest-steps')}غذا خورده می‌شود (<b>ingestion</b>)، جویده (<b>mastication</b>)، بلعیده (<b>deglutition</b>)، با <b>peristalsis</b> جلو می‌رود، هضم (<b>digestion</b>) و جذب (<b>absorption</b>) می‌شود و باقی‌مانده دفع می‌شود (<b>defecation</b>).`),
          O('گام‌های کار دستگاه گوارش را مرتب کن', ['ingestion', 'mastication', 'deglutition', 'digestion', 'absorption', 'defecation'], 'خوردن، جویدن، بلع، هضم، جذب، دفع.'),
          M(`${e('<b>absorption</b>')} یعنی…`, ['رفتن مواد هضم‌شده به خون و لنف', 'خرد شدن غذا با دندان', 'بیرون رفتن مدفوع', 'بلعیدن لقمه'], 'جذب بیشتر در روده باریک است.'),
          L('آنزیم و مخاط', `هضم شیمیایی با <b>enzyme</b> انجام می‌شود و نام بیشتر آنزیم‌های گوارشی با <b>‎-ase</b> تمام می‌شود. درون لوله را <b>mucosa</b> (مخاط) پوشانده است.${pearl('اگر در پرونده «GI upset» دیدی یعنی ناراحتی گوارشی کلی: تهوع، دل‌درد یا اسهال.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['ingestion', 'خوردن'], ['mastication', 'جویدن'], ['deglutition', 'بلع'], ['defecation', 'دفع مدفوع']]),
          B('پوشش درونی لوله گوارش ___ نام دارد.', ['mucosa', 'enzyme', 'bolus'], 'mucous membrane.'),
          S('املای «جویدن» را بنویس', 'mastication', 'masticate = جویدن.', 'mast…'),
          N('t2f:mo')
        ]
      },
      {
        id: 'mo2', title: 'حفره دهان', icon: '👄', items: [
          L('درون دهان', `${fig(['mouth-img'], ['حفره دهان'])}<b>oral cavity</b> از لب‌ها، گونه‌ها، کام، زبان و دندان‌ها ساخته شده است. سقف دهان <b>palate</b> است: جلو <b>hard palate</b> (استخوانی) و عقب <b>soft palate</b> (ماهیچه‌ای).`),
          M(`${e('<b>hard palate</b>')} کجاست؟`, ['بخش جلویی و استخوانی سقف دهان', 'بخش عقبی سقف دهان', 'کف دهان زیر زبان', 'دیواره گونه'], 'کام سخت استخوانی است و کام نرم ماهیچه‌ای.'),
          L('زبانک و زبان', `<b>uvula</b> (زبان کوچک، به لاتین «انگور کوچک») از کام نرم آویزان است و هنگام بلع راه بینی را می‌بندد. <b>tongue</b> با <b>frenulum</b> به کف دهان چسبیده و روی آن <b>papillae</b> با جوانه‌های چشایی است.${fig(['tongue-img'], ['زبان از بالا'])}`),
          M(`${e('<b>frenulum</b>')} چیست؟`, ['چین مخاطی که زبان را به کف دهان می‌چسباند', 'زبان کوچک', 'برجستگی چشایی', 'لثه'], 'کوتاه بودنش ankyloglossia (زبان‌بند) است.'),
          T('papillae برجستگی‌های روی زبان‌اند که جوانه چشایی دارند.', true, 'مفرد: papilla.'),
          L('صفت‌های دهان', `${tbl([['واژه', 'معنی'], [e('oral'), 'دهانی'], [e('buccal'), 'گونه‌ای'], [e('labial'), 'لبی'], [e('palatine'), 'کامی'], [e('gingiva'), 'لثه؛ جمع gingivae']])}${pearl('buccal mucosa یعنی مخاط داخل گونه؛ نمونه سواب DNA از همین‌جا گرفته می‌شود.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['buccal', 'گونه‌ای'], ['labial', 'لبی'], ['palatine', 'کامی'], ['uvula', 'زبان کوچک']]),
          M('هنگام بلع چه چیزی راه بینی را می‌بندد؟', ['کام نرم و زبانک', 'کام سخت', 'لثه', 'فرنولوم'], 'soft palate و uvula بالا می‌روند.'),
          B('بخش عقبی و ماهیچه‌ای سقف دهان ___ است.', ['soft palate', 'hard palate', 'gingiva'], 'soft palate.'),
          S('املای «زبان کوچک» را بنویس', 'uvula', 'uvul/o.', 'uvu…'),
          N('f2t:mo')
        ]
      },
      {
        id: 'mo3', title: 'دندان‌ها', icon: '🦷', items: [
          L('چهار نوع دندان', `${fig('dental-arch')}<b>incisor</b> می‌بُرد، <b>canine</b> (cuspid) پاره می‌کند، <b>premolar</b> (bicuspid) و <b>molar</b> آسیاب می‌کنند.${fig(['teeth-types'], ['شکل و نام دندان‌ها'])}`),
          M(`${e('<b>canine</b>')} کدام دندان است؟`, ['دندان نیش برای پاره کردن غذا', 'دندان پیش برای بریدن', 'آسیای بزرگ', 'دندان عقل'], 'canine = cuspid.'),
          L('شیری و دائمی', `کودک ۲۰ دندان شیری (<b>deciduous teeth</b>) و بزرگسال ۳۲ دندان دائمی (<b>permanent teeth</b>) دارد. آسیای سوم همان دندان عقل است.${fig(['dental-xray'], ['رادیوگرافی همه دندان‌ها'])}`),
          M('بزرگسال چند دندان دائمی دارد؟', ['۳۲', '۲۰', '۲۸', '۲۴'], 'permanent teeth: 32؛ deciduous: 20.'),
          T('دندان‌های شیری premolar ندارند.', true, 'در کودک ۸ پیش، ۴ نیش و ۸ آسیا.'),
          L('درون یک دندان', `${fig(['molar-img'], ['ساختار دندان آسیا'])}${tbl([['بخش', 'معنی'], [e('crown'), 'تاج؛ بالای لثه'], [e('enamel'), 'مینا؛ سخت‌ترین ماده بدن'], [e('dentin'), 'عاج زیر مینا'], [e('pulp'), 'پالپ؛ عصب و رگ'], [e('cementum'), 'سمان؛ پوشش ریشه'], [e('periodontal'), 'اطراف دندان: لثه و رباط']])}`),
          O('لایه‌های دندان را از بیرون به درون مرتب کن', ['enamel', 'dentin', 'pulp'], 'مینا، عاج، پالپ.'),
          L('بهداشتکار دهان', `<b>dental hygienist</b> دندان‌ها را جرم‌گیری می‌کند، پلاک را برمی‌دارد، رادیوگرافی می‌گیرد و بهداشت دهان را آموزش می‌دهد.${vs(['dental hygienist', 'کار بالینی پیشگیری؛ مجوز جداگانه'], ['dental assistant', 'دستیار کنار صندلی دندان‌پزشک'])}`),
          P('هر بخش دندان را به معنی‌اش وصل کن', [['enamel', 'مینا'], ['dentin', 'عاج'], ['pulp', 'مغز دندان'], ['crown', 'تاج']]),
          L('مرور سطح «گوارش، دهان و دندان»', recap(['alimentary canal از دهان تا مقعد؛ اندام‌های کمکی: غدد بزاقی، کبد، کیسه صفرا، پانکراس', 'ingestion، mastication، deglutition، peristalsis، digestion، absorption، defecation', 'کام سخت جلو و کام نرم عقب؛ uvula، frenulum، papillae', 'incisor، canine، premolar، molar • ۲۰ شیری و ۳۲ دائمی • enamel، dentin، pulp'])),
          S('املای «مینای دندان» را بنویس', 'enamel', 'enamel.', 'ena…'),
          N('m2r:mo')
        ]
      },
      /* ================= سطح ۲: بزاق، حلق و مری ================= */
      {
        id: 'mo4', title: 'بزاق و جویدن', icon: '💧', items: [
          L('سه جفت غده بزاقی', `${fig(['salivary-img'], ['غدد بزاقی'])}<b>parotid</b> جلوی گوش، <b>submandibular</b> زیر فک و <b>sublingual</b> زیر زبان.${memo('par-otid یعنی کنار گوش (ot/o = گوش)؛ sub-mandibular زیر mandible (فک پایین).')}`),
          M('بزرگ‌ترین غده بزاقی که جلوی گوش است…', ['parotid gland', 'submandibular gland', 'sublingual gland', 'thyroid gland'], 'par- (کنار) + ot/o (گوش).'),
          P('هر غده را به جایش وصل کن', [['parotid', 'جلوی گوش'], ['submandibular', 'زیر فک پایین'], ['sublingual', 'زیر زبان']]),
          L('بزاق چه می‌کند؟', `<b>saliva</b> غذا را خیس و نرم می‌کند، باکتری‌ها را می‌شوید و با آنزیم <b>amylase</b> هضم نشاسته را از دهان شروع می‌کند.`),
          M(`${e('<b>amylase</b>')} چه چیزی را هضم می‌کند؟`, ['نشاسته', 'پروتئین', 'چربی', 'ویتامین'], 'amyl/o = نشاسته؛ ‎-ase = آنزیم.'),
          L('جویدن و لقمه', `<b>mastication</b> غذا را با دندان خرد می‌کند و با بزاق می‌آمیزد تا یک <b>bolus</b> (لقمه نرم و گرد) ساخته شود.${pearl('bolus در داروشناسی معنی دیگری هم دارد: یک دوز یکجای دارو در رگ (IV bolus).')}`),
          T('bolus یعنی لقمه جویده و خیس‌شده با بزاق.', true, 'Latin: ball.'),
          M(`${e('<b>sialogram</b>')} چیست؟`, ['عکس غدد و مجاری بزاقی', 'سنگ بزاقی', 'ترشح زیاد بزاق', 'التهاب غده بزاقی'], 'sial/o + -gram.'),
          B('آنزیم بزاق که هضم نشاسته را شروع می‌کند ___ است.', ['amylase', 'pepsin', 'lipase'], 'salivary amylase.'),
          W('واژه‌ای بساز به معنی «ترشح زیاد بزاق»', ['sial/o', '-rrhea'], ['-lith', 'gloss/o', '-gram'], 'sial/o + -rrhea = sialorrhea.'),
          S('املای «بزاق» را بنویس', 'saliva', 'saliva؛ صفت: salivary.', 'sal…'),
          N('d2t:mo')
        ]
      },
      {
        id: 'mo5', title: 'حلق و بلع', icon: '🔄', items: [
          L('حلق سه بخش دارد', `${fig(['pharynx-img'], ['حلق، دهان و حنجره'])}<b>pharynx</b> (گلو) راه مشترک هوا و غذاست: <b>nasopharynx</b> پشت بینی، <b>oropharynx</b> پشت دهان و <b>laryngopharynx</b> بالای حنجره و مری.`),
          M(`${e('<b>oropharynx</b>')} کجاست؟`, ['بخشی از حلق پشت دهان', 'بخشی از حلق پشت بینی', 'بالای حنجره', 'درون مری'], 'or/o (دهان) + pharyng/o.'),
          O('بخش‌های حلق را از بالا به پایین مرتب کن', ['nasopharynx', 'oropharynx', 'laryngopharynx'], 'بینی، دهان، حنجره.'),
          L('هنگام بلع چه می‌شود؟', `${fig('swallow')}در <b>deglutition</b> زبان لقمه را به عقب می‌راند، کام نرم راه بینی را می‌بندد و <b>epiglottis</b> مثل درپوش روی حنجره می‌خوابد تا غذا به نای نرود.`),
          M(`${e('<b>epiglottis</b>')} چه کاری می‌کند؟`, ['هنگام بلع روی حنجره را می‌پوشاند', 'بزاق می‌سازد', 'غذا را به معده می‌راند', 'اسید معده را نگه می‌دارد'], 'epi- (روی) + glott (حنجره، زبان).'),
          T('حلق فقط راه غذاست و هوا از آن نمی‌گذرد.', false, 'نادرست؛ حلق راه مشترک هوا و غذاست.'),
          L('واژه‌های حلق', `${tbl([['واژه', 'معنی'], [e('pharyngeal'), 'حلقی'], [e('pharyngoplasty'), 'ترمیم حلق'], [e('pharyngoplegia'), 'فلج ماهیچه‌های حلق'], [e('dysphagia'), 'سختی بلع']])}${pearl('بیمار سکته‌کرده با pharyngoplegia ممکن است غذا را به نای بفرستد (aspiration)؛ پیش از غذا دادن آزمون بلع انجام می‌شود.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['deglutition', 'بلع'], ['epiglottis', 'درپوش حنجره'], ['nasopharynx', 'حلق پشت بینی'], ['pharyngeal', 'حلقی']]),
          B('درپوش غضروفی روی حنجره ___ نام دارد.', ['epiglottis', 'uvula', 'frenulum'], 'epiglottis.'),
          S('املای «حلق» را بنویس', 'pharynx', 'pharyng/o؛ جمع: pharynges.', 'phar…'),
          N('r2m:mo')
        ]
      },
      {
        id: 'mo6', title: 'مری و حرکت دودی', icon: '〰️', items: [
          L('مری', `<b>esophagus</b> لوله‌ای ماهیچه‌ای است که غذا را از حلق به معده می‌برد و خودش آنزیم گوارشی ندارد. از سوراخی در دیافراگم به نام <b>esophageal hiatus</b> می‌گذرد.`),
          M(`${e('<b>esophageal hiatus</b>')} چیست؟`, ['سوراخ دیافراگم که مری از آن می‌گذرد', 'دهانه معده به دوازدهه', 'تنگی مری', 'برگشت اسید'], 'hiatus = دهانه، شکاف.'),
          L('حرکت دودی', `${fig('peristalsis')}<b>peristalsis</b> موج غیرارادی انقباض ماهیچه صاف است که پشت لقمه منقبض و جلوی آن شل می‌شود؛ از مری تا رکتوم کار می‌کند.`),
          T('peristalsis ارادی است و با اراده ما کار می‌کند.', false, 'نادرست؛ غیرارادی است.'),
          L('دریچه‌های ماهیچه‌ای', `${fig('sphincters')}<b>sphincter</b> حلقه ماهیچه‌ای است که راه را باز و بسته می‌کند. میان مری و معده <b>lower esophageal sphincter</b> است، که LES یا cardiac sphincter هم نام دارد و جلوی برگشت اسید را می‌گیرد. پایین‌تر pyloric sphincter، ileocecal valve و anal sphincters هستند.${memo('cardiac sphincter به خاطر نزدیکی به قلب این نام را گرفته، نه چون به قلب ربطی دارد.')}`),
          M(`${e('<b>LES</b>')} یعنی…`, ['lower esophageal sphincter', 'large esophageal stomach', 'lower enteric segment', 'liver enzyme study'], 'اسفنکتر تحتانی مری.'),
          P('هر اسفنکتر را به جایش وصل کن', [['lower esophageal sphincter', 'میان مری و معده'], ['pyloric sphincter', 'میان معده و دوازدهه'], ['ileocecal valve', 'میان ایلئوم و سکوم'], ['anal sphincters', 'مقعد']]),
          M('اگر LES خوب بسته نشود، چه می‌شود؟', ['اسید معده به مری برمی‌گردد', 'غذا در دهان می‌ماند', 'صفرا ساخته نمی‌شود', 'دندان‌ها می‌پوسند'], 'reflux و heartburn.'),
          L('مرور سطح «بزاق، حلق و مری»', recap(['سه جفت غده بزاقی: parotid، submandibular، sublingual؛ amylase نشاسته را هضم می‌کند', 'mastication → bolus • deglutition: کام نرم و epiglottis راه‌ها را می‌بندند', 'pharynx: nasopharynx، oropharynx، laryngopharynx', 'esophagus بدون آنزیم؛ peristalsis غیرارادی؛ LES همان cardiac sphincter'])),
          B('اسفنکتر میان مری و معده را cardiac sphincter یا ___ هم می‌گویند.', ['LES', 'pylorus', 'ileocecal valve'], 'lower esophageal sphincter.'),
          S('املای «حرکت دودی» را بنویس', 'peristalsis', 'peri- + stalsis (انقباض).', 'peri…'),
          N('ab:mo')
        ]
      },
      /* ================= سطح ۳: معده و آنزیم‌ها ================= */
      {
        id: 'mo7', title: 'بخش‌های معده', icon: '🫃', items: [
          L('پنج بخش', `${fig(['stomach-regions'], ['بخش‌های معده'])}<b>cardia</b> کنار ورود مری، <b>fundus</b> گنبد بالایی، <b>body</b> بدنه اصلی، <b>antrum</b> بخش پایینی و <b>pylorus</b> دهانه خروجی به دوازدهه.`),
          O('بخش‌های معده را از ورودی تا خروجی مرتب کن', ['cardia', 'fundus', 'body', 'antrum', 'pylorus'], 'cardia، fundus، body، antrum، pylorus.'),
          M(`${e('<b>pylorus</b>')} کجاست؟`, ['دهانه پایینی معده به دوازدهه', 'بخش کنار مری', 'گنبد بالای معده', 'چین‌های درون معده'], 'pylor/o = دروازه‌بان.'),
          L('چین‌ها و انحناها', `${fig(['stomach-img'], ['ساختار معده'])}درون معده چین‌های بزرگی به نام <b>rugae</b> دارد که وقتی معده پر می‌شود باز می‌شوند. کنار بیرونی و درونی معده <b>greater</b> و <b>lesser curvature</b> نام دارند.${memo('pylor/o در یونانی یعنی دروازه‌بان: pyloric sphincter غذا را کم‌کم به دوازدهه راه می‌دهد.')}`),
          T('rugae چین‌های درون معده‌اند.', true, 'مفرد: ruga؛ کام سخت هم rugae دارد.'),
          P('هر بخش را به معنی‌اش وصل کن', [['cardia', 'کنار ورود مری'], ['fundus', 'گنبد بالایی'], ['antrum', 'بخش پایینی'], ['pylorus', 'دهانه خروجی']]),
          M(`${e('<b>pyloroplasty</b>')} یعنی…`, ['ترمیم و گشاد کردن پیلور', 'برداشتن پیلور', 'تنگی پیلور', 'گرفتگی پیلور'], 'pylor/o + -plasty.'),
          B('چین‌های بزرگ دیواره داخلی معده ___ نام دارند.', ['rugae', 'villi', 'papillae'], 'rugae.'),
          W('واژه‌ای بساز به معنی «گرفتگی ناگهانی پیلور»', ['pylor/o', '-spasm'], ['-plasty', 'gastr/o', '-stenosis'], 'pylor/o + -spasm = pylorospasm.'),
          S('املای «پیلور» را بنویس', 'pylorus', 'pylor/o + -us.', 'pylo…'),
          N('f2t:mo')
        ]
      },
      {
        id: 'mo8', title: 'شیره معده و کیموس', icon: '⚗️', items: [
          L('شیره معده', `${fig('gastric-juice')}<b>gastric juice</b> شامل <b>hydrochloric acid</b> (HCl)، آنزیم <b>pepsin</b> برای پروتئین، <b>intrinsic factor</b> برای جذب ویتامین B12 و <b>mucus</b> (مخاط محافظ) است.`),
          M(`${e('<b>pepsin</b>')} چه چیزی را هضم می‌کند؟`, ['پروتئین', 'نشاسته', 'چربی', 'فیبر'], 'pepsin با HCl فعال می‌شود.'),
          M(`${e('<b>HCl</b>')} یعنی…`, ['hydrochloric acid؛ اسید معده', 'hepatic cell layer', 'high calorie', 'histamine chloride'], 'اسید کلریدریک.'),
          L('کیموس', `غذا در معده با شیره معده آسیاب و مخلوط می‌شود و به مایع غلیظی به نام <b>chyme</b> تبدیل می‌شود که کم‌کم از پیلور به دوازدهه می‌رود. معده تقریباً هیچ غذایی را جذب نمی‌کند.`),
          T('بیشتر جذب غذا در معده انجام می‌شود.', false, 'نادرست؛ جذب بیشتر در روده باریک است.'),
          L('فاکتور داخلی', `بدون <b>intrinsic factor</b> ویتامین B12 جذب نمی‌شود و کم‌خونی <b>pernicious anemia</b> رخ می‌دهد.${pearl('پس از gastrectomy کامل، بیمار باید B12 را تزریقی بگیرد چون intrinsic factor دیگر ساخته نمی‌شود.')}`),
          P('هر جزء شیره معده را به کارش وصل کن', [['HCl', 'فعال کردن pepsin'], ['pepsin', 'هضم پروتئین'], ['intrinsic factor', 'جذب B12'], ['mucus', 'محافظت از دیواره']]),
          M(`${e('<b>chyme</b>')} چیست؟`, ['غذای نیمه‌هضم که از معده خارج می‌شود', 'لقمه جویده در دهان', 'مدفوع', 'شیره پانکراس'], 'chyme به دوازدهه می‌رود.'),
          B('مایع غلیظ غذای نیمه‌هضم در معده ___ است.', ['chyme', 'bolus', 'bile'], 'chyme.'),
          S('املای «پپسین» را بنویس', 'pepsin', 'peps = هضم.', 'pep…'),
          N('t2f:mo')
        ]
      },
      {
        id: 'mo9', title: 'هر غذا کجا هضم می‌شود؟', icon: '🥗', items: [
          L('نقشه هضم', `${fig('enzymes')}نشاسته از دهان با amylase بزاق، پروتئین در معده با pepsin، و هر سه گروه غذا در دوازدهه با آنزیم‌های پانکراس هضم می‌شوند؛ جذب در روده باریک است.`),
          M('هضم پروتئین از کجا شروع می‌شود؟', ['معده', 'دهان', 'کولون', 'مری'], 'pepsin در معده.'),
          M('هضم نشاسته از کجا شروع می‌شود؟', ['دهان', 'معده', 'رکتوم', 'کبد'], 'salivary amylase.'),
          L('آنزیم‌ها با ‎-ase', `${tbl([['آنزیم', 'غذا'], [e('amylase'), 'نشاسته (amyl/o)'], [e('lipase'), 'چربی (lip/o)'], [e('protease'), 'پروتئین'], [e('pepsin'), 'پروتئین در معده؛ استثنا: بدون ‎-ase']])}${memo('ریشه + ‎-ase = آنزیمی که آن ماده را هضم می‌کند: lip/o + ‎-ase = lipase.')}`),
          P('هر آنزیم را به غذایش وصل کن', [['amylase', 'نشاسته'], ['lipase', 'چربی'], ['protease', 'پروتئین']]),
          T('lipase آنزیم هضم چربی است.', true, 'lip/o = چربی.'),
          L('اسفنکترها در یک نگاه', `از دهان تا دوازدهه غذا از دو دروازه می‌گذرد: <b>LES</b> و <b>pyloric sphincter</b>.${vs(['LES', 'ورود به معده؛ جلوی برگشت اسید به مری'], ['pyloric sphincter', 'خروج از معده؛ chyme را کم‌کم رد می‌کند'])}`),
          M('کدام ترتیب درست است؟', ['bolus در مری ← chyme در معده ← دوازدهه', 'chyme در دهان ← bolus در معده', 'bile در دهان ← chyme در مری', 'bolus در کولون ← chyme در دهان'], 'لقمه (bolus) به معده می‌رسد و chyme می‌شود.'),
          L('مرور سطح «معده و آنزیم‌ها»', recap(['معده: cardia، fundus، body، antrum، pylorus؛ چین‌ها rugae', 'gastric juice: HCl، pepsin، intrinsic factor (B12)، mucus', 'chyme از پیلور به دوازدهه می‌رود؛ جذب بیشتر در روده باریک', 'amylase نشاسته • pepsin و protease پروتئین • lipase چربی'])),
          W('واژه‌ای بساز به معنی «آنزیم هضم چربی»', ['lip/o', '-ase'], ['amyl/o', '-osis', 'gastr/o'], 'lip/o + -ase = lipase.'),
          S('املای «آنزیم» را بنویس', 'enzyme', 'en- + zym (مخمر).', 'enz…'),
          N('wb:mo')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* گوارا — دنیای ۳: روده‌ها و اندام‌های کمکی
 * روده باریک و پرزها، صفاق و مزانتر، روده بزرگ و دفع، ربع‌ها و نواحی شکم، کبد، کیسه صفرا و مجاری، پانکراس.
 * منابع: فصل Digestive System (شکل‌های روده باریک و بزرگ، پرز، صفاق، کبد و مجاری صفرا، نواحی شکم؛ جعبه ۱۳-۴).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'bw', sym: 'Gut', name: 'روده‌ها و اندام‌های کمکی', short: 'روده', sub: 'دوازدهه، ژژونوم و ایلئوم، پرزها و جذب، صفاق، روده بزرگ و دفع، ربع‌های شکم، کبد، صفرا و پانکراس',
    color: '#2F9E44', dark: '#2B8A3E', light: '#EBFBEE',
    levels: ['روده باریک و صفاق', 'روده بزرگ و نقشه شکم', 'کبد، صفرا و پانکراس'],
    gens: EA.genIds('bw'),
    lessons: [
      /* ================= سطح ۱: روده باریک و صفاق ================= */
      {
        id: 'bw1', title: 'سه بخش روده باریک', icon: '➰', items: [
          L('D، J، I', `${fig('dji')}<b>small intestine</b> لوله پیچ‌دار بلندی از پیلور تا سکوم است: <b>duodenum</b>، <b>jejunum</b> و <b>ileum</b>.${memo('ترتیب را با DJI به خاطر بسپار: Duodenum، Jejunum، Ileum.')}`),
          O('بخش‌های روده باریک را از معده به پایین مرتب کن', ['duodenum', 'jejunum', 'ileum'], 'دوازدهه، ژژونوم، ایلئوم.'),
          M(`${e('<b>duodenum</b>')} چه ویژگی‌ای دارد؟`, ['کوتاه‌ترین بخش؛ صفرا و شیره پانکراس به آن می‌ریزد', 'بلندترین بخش و پیش از سکوم', 'بخشی از روده بزرگ', 'بخشی از معده'], 'duodeni یعنی «دوازده انگشت».'),
          L('نام‌ها چه می‌گویند؟', `${fig(['small-int-img'], ['روده باریک'])}${tbl([['بخش', 'ریشه نام'], [e('duodenum'), 'دوازده انگشت درازا'], [e('jejunum'), 'تهی؛ پس از مرگ معمولاً خالی پیدا می‌شد'], [e('ileum'), 'پیچیده؛ بلندترین بخش که به سکوم می‌رسد']])}`),
          T('jejunum در لاتین یعنی «تهی».', true, 'jejunus = empty.'),
          M('بخش پایانی روده باریک که به سکوم وصل است…', ['ileum', 'jejunum', 'duodenum', 'ilium'], 'ileum؛ ilium استخوان لگن است.'),
          L('روده یا bowel', `${e('intestine')} و ${e('bowel')} هم‌معنی‌اند. روده باریک «باریک» است چون قطرش کمتر است، نه چون کوتاه‌تر است.${pearl('در پرونده small bowel obstruction یعنی انسداد روده باریک.')}`),
          P('هر بخش را به ویژگی‌اش وصل کن', [['duodenum', 'دوازده انگشت'], ['jejunum', 'تهی'], ['ileum', 'پایانی؛ به سکوم']]),
          B('بخش میانی روده باریک ___ است.', ['jejunum', 'ileum', 'cecum'], 'duodenum، jejunum، ileum.'),
          S('املای «دوازدهه» را بنویس', 'duodenum', 'duoden/o + -um.', 'duo…'),
          N('t2f:bw')
        ]
      },
      {
        id: 'bw2', title: 'پرزها و جذب', icon: '🧽', items: [
          L('انگشتک‌های جذب', `${fig(['villi-img'], ['دیواره روده باریک و پرزها'])}دیواره روده باریک میلیون‌ها برجستگی انگشتی به نام <b>villi</b> دارد (مفرد آن villus است) که سطح جذب را بسیار بزرگ می‌کنند.`),
          M(`${e('<b>villi</b>')} چه کاری می‌کنند؟`, ['سطح جذب روده باریک را زیاد می‌کنند', 'اسید معده می‌سازند', 'مدفوع را جلو می‌برند', 'صفرا ذخیره می‌کنند'], 'villi = انگشتک‌های جذب.'),
          L('درون یک پرز', `${fig('villus')}در هر پرز مویرگ‌های خونی قند و پروتئین را و یک مویرگ لنفی به نام <b>lacteal</b> چربی را جذب می‌کند.`),
          M(`${e('<b>lacteal</b>')} چه چیزی را جذب می‌کند؟`, ['چربی', 'آب', 'ویتامین B12', 'نمک'], 'lacteal = مویرگ لنفی پرز.'),
          T('چربی‌ها بیشتر از راه رگ لنفی پرز (lacteal) جذب می‌شوند.', true, 'نه مستقیم از مویرگ خونی.'),
          L('جذب', `<b>absorption</b> یعنی رفتن مواد هضم‌شده از دیواره روده به خون و لنف. بیشتر جذب در روده باریک است؛ <b>ileum</b> ویتامین B12 و نمک‌های صفراوی را جذب می‌کند.${vs(['digestion', 'شکستن غذا به مولکول‌های کوچک'], ['absorption', 'رفتن مولکول‌ها به خون و لنف'])}`),
          M('ویتامین B12 در کدام بخش جذب می‌شود؟', ['ileum', 'duodenum', 'stomach', 'colon'], 'با کمک intrinsic factor معده، در ایلئوم.'),
          L('دریچه پایانی', `در انتهای ایلئوم، <b>ileocecal valve</b> قرار دارد که محتوای روده باریک را به سکوم راه می‌دهد و جلوی برگشت آن را می‌گیرد.`),
          P('هر واژه را به معنی‌اش وصل کن', [['villi', 'پرزهای روده'], ['lacteal', 'مویرگ لنفی پرز'], ['absorption', 'جذب'], ['ileocecal valve', 'دریچه ایلئوم و سکوم']]),
          B('مویرگ لنفی درون پرز روده ___ نام دارد.', ['lacteal', 'villus', 'mesentery'], 'lacteal.'),
          S('املای «جذب» را بنویس', 'absorption', 'absorb + -tion.', 'abs…'),
          N('d2t:bw')
        ]
      },
      {
        id: 'bw3', title: 'صفاق و مزانتر', icon: '🫧', items: [
          L('پرده بزرگ شکم', `${fig(['peritoneum-img'], ['حفره صفاق'])}<b>peritoneum</b> پرده‌ای دولایه است: لایه parietal دیواره شکم را می‌پوشاند و لایه visceral روی اندام‌ها را. میان آن‌ها <b>peritoneal cavity</b> با کمی مایع لغزنده است.`),
          M(`${e('<b>peritoneum</b>')} چیست؟`, ['پرده پوشاننده حفره شکم و اندام‌هایش', 'بخشی از روده باریک', 'غده‌ای در شکم', 'رباط کبد'], 'peri- (اطراف) + teinein (کشیدن).'),
          L('چین‌های صفاق', `${tbl([['چین', 'کار'], [e('mesentery'), 'روده باریک را به دیواره پشتی شکم می‌چسباند'], [e('mesocolon'), 'کولون را به دیواره پشتی می‌چسباند'], [e('greater omentum'), 'چادری از معده روی روده‌ها آویزان است']])}${memo('mes- یعنی میانی: mesentery «میان روده» است و mesocolon «میان کولون».')}`),
          P('هر چین را به کارش وصل کن', [['mesentery', 'نگه داشتن روده باریک'], ['mesocolon', 'نگه داشتن کولون'], ['greater omentum', 'چادر روی روده‌ها']]),
          M(`${e('<b>mesentery</b>')} یعنی…`, ['چین صفاقی که روده باریک را نگه می‌دارد', 'التهاب صفاق', 'دیواره عضلانی روده', 'دریچه ایلئوسکال'], 'mes- + enter/o + -y.'),
          T('greater omentum مانند چادری از معده روی روده‌ها آویزان است.', true, 'omentum = چادرینه.'),
          L('وقتی صفاق ملتهب شود', `پاره شدن آپاندیس یا زخم معده می‌تواند <b>peritonitis</b> (التهاب صفاق) بسازد که اورژانس است. مایع اضافه در حفره صفاق <b>ascites</b> نام دارد.${pearl('شکم سفت و دردناک مثل تخته (board-like abdomen) از نشانه‌های peritonitis است.')}`),
          M(`${e('<b>peritonitis</b>')} یعنی…`, ['التهاب صفاق', 'التهاب روده', 'التهاب معده', 'التهاب آپاندیس'], 'peritone/o + -itis.'),
          L('مرور سطح «روده باریک و صفاق»', recap(['روده باریک: duodenum، jejunum، ileum (DJI)', 'villi سطح جذب را زیاد می‌کنند؛ lacteal چربی را جذب می‌کند؛ ileum ویتامین B12 را', 'ileocecal valve میان ایلئوم و سکوم', 'peritoneum دولایه؛ mesentery، mesocolon و greater omentum چین‌های آن؛ peritonitis التهاب آن'])),
          B('چین صفاقی که کولون را به دیواره پشتی می‌چسباند ___ است.', ['mesocolon', 'mesentery', 'omentum'], 'meso- + colon.'),
          S('املای «صفاق» را بنویس', 'peritoneum', 'peritone/o + -um.', 'perit…'),
          N('m2r:bw')
        ]
      },
      /* ================= سطح ۲: روده بزرگ و نقشه شکم ================= */
      {
        id: 'bw4', title: 'بخش‌های روده بزرگ', icon: '🔁', items: [
          L('از سکوم تا رکتوم', `${fig('colon-map')}<b>large intestine</b> با <b>cecum</b> شروع می‌شود که <b>appendix</b> از آن آویزان است؛ سپس <b>colon</b> با چهار بخش ascending، transverse، descending و sigmoid، و در پایان <b>rectum</b> و <b>anus</b>.`),
          O('بخش‌های کولون را به ترتیب مرتب کن', ['ascending colon', 'transverse colon', 'descending colon', 'sigmoid colon'], 'بالارو، عرضی، پایین‌رو، سیگموئید.'),
          M(`${e('<b>sigmoid colon</b>')} چه شکلی دارد؟`, ['S شکل؛ پیش از رکتوم', 'راست و عمودی', 'افقی در بالای شکم', 'کیسه‌ای در سمت راست'], 'sigma = حرف S یونانی.'),
          L('دو خم', `کولون دو خم دارد: <b>hepatic flexure</b> سمت راست کنار کبد و <b>splenic flexure</b> سمت چپ کنار طحال.${fig(['large-int-img'], ['روده بزرگ'])}`),
          P('هر بخش را به جایش وصل کن', [['hepatic flexure', 'خم راست کنار کبد'], ['splenic flexure', 'خم چپ کنار طحال'], ['cecum', 'آغاز روده بزرگ'], ['sigmoid colon', 'پیش از رکتوم']]),
          T('آپاندیس به کولون سیگموئید چسبیده است.', false, 'نادرست؛ به سکوم در سمت راست پایین شکم.'),
          L('نام‌ها', `${tbl([['بخش', 'ریشه نام'], [e('cecum'), 'کور؛ کیسه‌ای بسته'], [e('rectum'), 'راست'], [e('appendix'), 'آویزان؛ vermiform یعنی کرمی‌شکل']])}${memo('cecum = کور؛ مثل کوچه بن‌بست در آغاز روده بزرگ.')}`),
          M('کدام بخش روده بزرگ افقی از راست به چپ می‌رود؟', ['transverse colon', 'ascending colon', 'descending colon', 'rectum'], 'trans- = از میان.'),
          B('آپاندیس از ___ آویزان است.', ['cecum', 'rectum', 'ileum'], 'cecum = سکوم.'),
          S('املای «سکوم» را بنویس', 'cecum', 'cec/o + -um.', 'ce…'),
          N('f2t:bw')
        ]
      },
      {
        id: 'bw5', title: 'آب، مدفوع و دفع', icon: '🚽', items: [
          L('روده بزرگ چه می‌کند؟', `${fig(['colon-regions'], ['جای بخش‌ها در شکم'])}روده بزرگ آب و الکترولیت‌ها را جذب می‌کند، باکتری‌های آن ویتامین K می‌سازند و باقی‌مانده را به <b>feces</b> یا stool (مدفوع) تبدیل می‌کند.`),
          M('کار اصلی روده بزرگ…', ['جذب آب و ساختن مدفوع', 'هضم پروتئین', 'ساختن صفرا', 'ترشح انسولین'], 'آب و الکترولیت‌ها.'),
          T('باکتری‌های روده بزرگ ویتامین K می‌سازند.', true, 'و برخی ویتامین‌های B.'),
          L('دفع', `مدفوع در رکتوم جمع می‌شود و با <b>defecation</b> یا bowel movement، که در پرونده BM نوشته می‌شود، از راه کانال مقعد بیرون می‌رود. مقعد دو اسفنکتر دارد: internal (داخلی و غیرارادی) و external (خارجی و ارادی).${pearl('پرستار پس از جراحی شکم اولین BM و bowel sounds را ثبت می‌کند تا مطمئن شود روده دوباره کار می‌کند.')}`),
          M(`${e('<b>BM</b>')} در پرونده یعنی…`, ['bowel movement؛ اجابت مزاج', 'body mass', 'bone marrow', 'blood mean'], 'bowel movement.'),
          P('هر واژه را به معنی‌اش وصل کن', [['feces', 'مدفوع'], ['defecation', 'دفع مدفوع'], ['rectum', 'جای جمع شدن مدفوع'], ['anus', 'دهانه پایانی']]),
          M('کدام اسفنکتر مقعد ارادی است؟', ['external anal sphincter', 'internal anal sphincter', 'pyloric sphincter', 'LES'], 'خارجی ارادی و داخلی غیرارادی.'),
          L('انواع مدفوع در یک نگاه', `مدفوع عادی قهوه‌ای است؛ این رنگ از رنگدانه‌های صفرا می‌آید. در دنیای بیماری‌ها می‌بینی که رنگ مدفوع سرنخ مهمی است.${vs(['feces', 'خود مدفوع؛ stool'], ['defecation', 'کار دفع آن'])}`),
          B('بیرون رفتن مدفوع از رکتوم را ___ می‌گویند.', ['defecation', 'digestion', 'deglutition'], 'defecation.'),
          S('املای «مدفوع» را بنویس', 'feces', 'feces؛ صفت: fecal.', 'fe…'),
          N('r2m:bw')
        ]
      },
      {
        id: 'bw6', title: 'نقشه شکم', icon: '🧭', items: [
          L('چهار ربع', `${fig('quadrants')}دو خط عمود که از ناف می‌گذرند شکم را به چهار ربع تقسیم می‌کنند: <b>RUQ</b>، <b>LUQ</b>، <b>RLQ</b> و <b>LLQ</b>. راست و چپ همیشه از دید بیمار است.`),
          M('آپاندیس در کدام ربع است؟', ['RLQ', 'LUQ', 'RUQ', 'LLQ'], 'right lower quadrant.'),
          M('کبد و کیسه صفرا بیشتر در کدام ربع‌اند؟', ['RUQ', 'LLQ', 'LUQ', 'RLQ'], 'right upper quadrant.'),
          L('نه ناحیه', `${fig(['abd-regions'], ['نه ناحیه شکم'])}برای جزئیات بیشتر شکم را به نه ناحیه هم تقسیم می‌کنند. سه ناحیه میانی: <b>epigastric</b> (سر دل)، <b>umbilical</b> (ناف) و <b>hypogastric</b> (زیر شکم).`),
          O('سه ناحیه میانی شکم را از بالا به پایین مرتب کن', ['epigastric', 'umbilical', 'hypogastric'], 'epi- بالا، hypo- پایین.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['RUQ', 'ربع راست بالا'], ['LUQ', 'ربع چپ بالا'], ['RLQ', 'ربع راست پایین'], ['LLQ', 'ربع چپ پایین']]),
          T('در نمای روبه‌روی بیمار، ربع راست او در سمت چپ تصویر است.', true, 'همیشه از دید بیمار نام‌گذاری می‌شود.'),
          L('مرور سطح «روده بزرگ و نقشه شکم»', recap(['cecum → ascending → transverse → descending → sigmoid → rectum → anus؛ appendix به سکوم چسبیده است', 'hepatic flexure راست و splenic flexure چپ', 'روده بزرگ آب را جذب می‌کند؛ feces، defecation، BM', 'RUQ، LUQ، RLQ، LLQ از دید بیمار؛ epigastric، umbilical، hypogastric'])),
          B('ناحیه بالای ناف و زیر جناغ، یعنی سر دل، ___ است.', ['epigastric', 'hypogastric', 'umbilical'], 'epi- + gastr/o + -ic.'),
          S('املای «ربع شکم» را بنویس', 'quadrant', 'quadr = چهار.', 'quad…'),
          N('ab:bw')
        ]
      },
      /* ================= سطح ۳: کبد، صفرا و پانکراس ================= */
      {
        id: 'bw7', title: 'کبد', icon: '🟤', items: [
          L('بزرگ‌ترین غده', `${fig('liver-jobs')}<b>liver</b> در ربع راست بالا زیر دیافراگم است. صفرا می‌سازد، قند را به شکل <b>glycogen</b> ذخیره می‌کند، سم‌زدایی می‌کند و پروتئین‌های خون را می‌سازد. بدون کبد زندگی ممکن نیست.`),
          M('کبد قند اضافه را به چه شکلی ذخیره می‌کند؟', ['glycogen', 'bile', 'insulin', 'bilirubin'], 'glyc/o (قند) + -gen.'),
          L('صفرا و bilirubin', `<b>bile</b> مایع زرد مایل به سبزی است که چربی را به قطره‌های ریز می‌شکند (<b>emulsification</b>). رنگ آن از <b>bilirubin</b> است که از شکستن گلبول‌های قرمز پیر می‌آید.`),
          M(`${e('<b>bilirubin</b>')} از کجا می‌آید؟`, ['شکستن گلبول‌های قرمز پیر', 'هضم پروتئین', 'ترشح پانکراس', 'باکتری‌های روده'], 'رنگدانه صفرا.'),
          T('صفرا آنزیم گوارشی است و چربی را تجزیه شیمیایی می‌کند.', false, 'نادرست؛ صفرا آنزیم نیست و چربی را فقط به قطره‌های ریز می‌شکند (emulsification).'),
          L('سیستم باب', `<b>hepatic portal system</b> خون پر از مواد جذب‌شده را از روده‌ها و معده اول به کبد می‌برد تا پردازش و سم‌زدایی شود.${pearl('در بیماری کبد آنزیم‌های ALT و AST خون بالا می‌روند؛ آزمایش آن‌ها LFT نام دارد.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['glycogen', 'ذخیره قند'], ['bile', 'صفرا'], ['bilirubin', 'رنگدانه صفرا'], ['emulsification', 'شکستن چربی به قطره']]),
          M(`${e('<b>hepatomegaly</b>')} یعنی…`, ['بزرگی کبد', 'التهاب کبد', 'تومور کبد', 'سلول کبدی'], 'hepat/o + -megaly.'),
          B('رگ‌هایی که خون روده‌ها را اول به کبد می‌برند ___ نام دارند.', ['hepatic portal system', 'hepatic duct', 'cystic duct'], 'portal = دروازه.'),
          S('املای «کبد» را بنویس', 'liver', 'صفت: hepatic.', 'li…'),
          N('t2f:bw')
        ]
      },
      {
        id: 'bw8', title: 'کیسه صفرا و مجاری', icon: '🟢', items: [
          L('مسیر صفرا', `${fig(['ducts-img'], ['کبد، کیسه صفرا، پانکراس و مجاری'])}کبد صفرا را از <b>hepatic duct</b> بیرون می‌فرستد. صفرا از <b>cystic duct</b> به <b>gallbladder</b> می‌رود و آنجا ذخیره و غلیظ می‌شود.`),
          L('از کیسه تا دوازدهه', `${fig('bile-flow')}پس از غذای چرب کیسه صفرا منقبض می‌شود و صفرا از <b>common bile duct</b> (CBD) به دوازدهه می‌ریزد. مجرای پانکراس هم کنار آن به <b>duodenal papilla</b> باز می‌شود و <b>sphincter of Oddi</b> این دهانه را کنترل می‌کند.`),
          O('مسیر صفرا را از ساخت تا مصرف مرتب کن', ['liver', 'hepatic duct', 'cystic duct', 'gallbladder', 'common bile duct', 'duodenum'], 'ساخت در کبد، ذخیره در کیسه، مصرف در دوازدهه.'),
          M(`${e('<b>CBD</b>')} یعنی…`, ['common bile duct', 'colon bowel disease', 'cystic bile drain', 'chronic biliary disorder'], 'مجرای صفراوی مشترک.'),
          T('کیسه صفرا صفرا را می‌سازد.', false, 'نادرست؛ کبد می‌سازد، کیسه صفرا ذخیره و غلیظ می‌کند.'),
          P('هر مجرا را به کارش وصل کن', [['hepatic duct', 'صفرا را از کبد می‌آورد'], ['cystic duct', 'به کیسه صفرا می‌رود و برمی‌گردد'], ['common bile duct', 'صفرا را به دوازدهه می‌ریزد']]),
          L('ریشه‌ها روی مسیر', `${tbl([['ریشه', 'جا'], [e('cholecyst/o'), 'کیسه صفرا'], [e('cholangi/o'), 'هر مجرای صفراوی'], [e('choledoch/o'), 'مجرای صفراوی مشترک']])}${memo('cholecyst = chole (صفرا) + cyst (کیسه)؛ cystic duct هم یعنی مجرای «کیسه».')}`),
          M('دهانه مشترک صفرا و شیره پانکراس در دوازدهه را چه می‌نامند؟', ['duodenal papilla', 'pylorus', 'ileocecal valve', 'cardia'], 'papilla of Vater؛ sphincter of Oddi آن را می‌بندد.'),
          B('اسفنکتر دهانه مجرای صفرا در دوازدهه ___ است.', ['sphincter of Oddi', 'pyloric sphincter', 'LES'], 'sphincter of Oddi.'),
          S('املای «کیسه صفرا» را بنویس', 'gallbladder', 'gall + bladder؛ یک واژه.', 'gall…'),
          N('d2t:bw')
        ]
      },
      {
        id: 'bw9', title: 'پانکراس', icon: '🟡', items: [
          L('دو غده در یک اندام', `${fig('pancreas-jobs')}<b>pancreas</b> پشت معده است. بخش برون‌ریز آن <b>pancreatic juice</b> را از <b>pancreatic duct</b> به دوازدهه می‌ریزد و بخش درون‌ریز آن <b>insulin</b> و glucagon را به خون.`),
          M('کدام هورمون پانکراس قند خون را پایین می‌آورد؟', ['insulin', 'glucagon', 'pepsin', 'bile'], 'insulin.'),
          L('شیره پانکراس', `${tbl([['جزء', 'کار'], [e('amylase'), 'هضم نشاسته'], [e('lipase'), 'هضم چربی'], [e('protease'), 'هضم پروتئین'], [e('bicarbonate'), 'خنثی کردن اسید chyme']])}${pearl('در التهاب پانکراس، amylase و lipase خون بالا می‌روند؛ همین آزمایش‌ها برای تشخیص pancreatitis خواسته می‌شوند.')}`),
          P('هر جزء شیره پانکراس را به کارش وصل کن', [['amylase', 'نشاسته'], ['lipase', 'چربی'], ['protease', 'پروتئین'], ['bicarbonate', 'خنثی کردن اسید']]),
          T('bicarbonate شیره پانکراس اسید chyme را در دوازدهه خنثی می‌کند.', true, 'تا آنزیم‌ها بتوانند کار کنند.'),
          M(`${e('<b>pancreatic duct</b>')} شیره پانکراس را به کجا می‌برد؟`, ['دوازدهه', 'معده', 'کبد', 'کولون'], 'از کنار CBD به دوازدهه.'),
          L('نام پانکراس', `pancreas در یونانی یعنی «همه گوشت» (pan + kreas)، به خاطر ظاهر گوشتی‌اش. نام‌های فارسی: لوزالمعده.${vs(['exocrine', 'برون‌ریز: آنزیم‌ها به دوازدهه'], ['endocrine', 'درون‌ریز: insulin به خون'])}`),
          M('بخش درون‌ریز پانکراس چه می‌سازد؟', ['insulin و glucagon', 'amylase و lipase', 'bile', 'HCl'], 'endocrine = هورمون به خون.'),
          L('مرور سطح «کبد، صفرا و پانکراس»', recap(['کبد: صفرا، glycogen، سم‌زدایی؛ hepatic portal system خون روده را به کبد می‌برد', 'bile آنزیم نیست؛ چربی را emulsify می‌کند • bilirubin از گلبول قرمز پیر', 'hepatic duct → cystic duct ↔ gallbladder → common bile duct → duodenum؛ دهانه آن sphincter of Oddi', 'pancreas: amylase، lipase، protease و bicarbonate به دوازدهه؛ insulin و glucagon به خون'])),
          B('آنزیم پانکراس که چربی را هضم می‌کند ___ است.', ['lipase', 'amylase', 'pepsin'], 'lip/o + -ase.'),
          S('املای «پانکراس» را بنویس', 'pancreas', 'pancreat/o.', 'pan…'),
          N('wb:bw')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
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
    id: 'up', sym: 'Up', name: 'بیماری‌های دهان، مری و معده', short: 'گوارش بالا', sub: 'تهوع و استفراغ، سختی بلع و سوءهاضمه، گاز و اشتها، پوسیدگی و لثه، آفت و برفک، ریفلاکس، فتق هیاتال و زخم پپتیک',
    color: '#C2255C', dark: '#A61E4D', light: '#FFF0F6',
    levels: ['علامت‌های گوارش بالا', 'بیماری‌های دهان و دندان', 'مری و معده'],
    gens: EA.genIds('up'),
    lessons: [
      /* ================= سطح ۱: علامت‌های گوارش بالا ================= */
      {
        id: 'up1', title: 'تهوع، استفراغ، سوزش', icon: '🤢', items: [
          L('علامت‌های گوارش بالا', `${fig('upper-sx')}<b>nausea</b> (تهوع، از واژه یونانی دریازدگی) حس ناخوشایندی است که پیش از <b>emesis</b> یا vomiting (استفراغ) می‌آید. در پرونده‌ها «N&V» یعنی تهوع و استفراغ.`),
          M(`${e('<b>N&V</b>')} یعنی…`, ['nausea and vomiting؛ تهوع و استفراغ', 'nerves and veins', 'night and vision', 'nasal and vocal'], 'nausea and vomiting.'),
          L('انواع استفراغ', `${tbl([['واژه', 'معنی'], [e('hyperemesis'), 'استفراغ شدید و مکرر؛ مثل hyperemesis gravidarum در بارداری'], [e('hematemesis'), 'استفراغ خون؛ گاهی قهوه‌ای مثل تفاله قهوه'], [e('regurgitation'), 'برگشت محتوای معده به دهان بدون زور زدن']])}`),
          M(`${e('<b>hematemesis</b>')} یعنی…`, ['استفراغ خون', 'خون در مدفوع', 'استفراغ شدید', 'سرفه خونی'], 'hemat/o + -emesis.'),
          T('regurgitation یعنی برگشت غذا به دهان بدون زور زدن.', true, 're- (برگشت) + gurgitare (جاری شدن).'),
          L('سوزش و آروغ', `<b>pyrosis</b> همان <b>heartburn</b> است: سوزش پشت جناغ وقتی اسید به مری برمی‌گردد. <b>eructation</b> یعنی آروغ، بیرون دادن گاز معده از دهان.${memo('pyr/o یعنی آتش: pyrosis «آتش» پشت جناغ است.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['pyrosis', 'سوزش سر دل'], ['eructation', 'آروغ'], ['regurgitation', 'برگشت غذا به دهان'], ['hyperemesis', 'استفراغ شدید']]),
          M('بیمار می‌گوید «پس از غذا قفسه سینه‌ام می‌سوزد». کدام واژه؟', ['pyrosis', 'eructation', 'nausea', 'aphagia'], 'heartburn = pyrosis.'),
          B('آروغ زدن در زبان پزشکی ___ نام دارد.', ['eructation', 'emesis', 'flatus'], 'eructation.'),
          S('املای «تهوع» را بنویس', 'nausea', 'nausea؛ از nausia یونانی.', 'nau…'),
          N('t2f:up')
        ]
      },
      {
        id: 'up2', title: 'بلع و هضم دشوار', icon: '🍴', items: [
          L('خانواده ‎-phagia', `${fig('phagia-family')}${e('-phagia')} یعنی خوردن یا بلع: <b>dysphagia</b> سختی بلع، <b>aphagia</b> ناتوانی در بلع، <b>odynophagia</b> بلع دردناک، <b>polyphagia</b> پرخوری و <b>aerophagia</b> هوابلعی.`),
          M(`${e('<b>odynophagia</b>')} یعنی…`, ['بلع دردناک', 'ناتوانی در بلع', 'پرخوری', 'هوابلعی'], 'odyn/o (درد) + -phagia.'),
          M(`${e('<b>aphagia</b>')} یعنی…`, ['ناتوانی کامل در بلع', 'سختی بلع', 'پرخوری', 'بی‌اشتهایی'], 'a- (بدون) + -phagia.'),
          L('هضم دشوار', `<b>dyspepsia</b> سوءهاضمه یا «معده‌درد پس از غذا» است و <b>bradypepsia</b> کندی هضم (brady- یعنی کند). <b>postprandial</b> یعنی پس از غذا.${pearl('آقای رضایی سال‌ها dyspepsia داشت و با antacid بهتر می‌شد؛ تا اینکه زخم معده‌اش خون‌ریزی کرد.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['dysphagia', 'سختی بلع'], ['dyspepsia', 'سوءهاضمه'], ['bradypepsia', 'کندی هضم'], ['polyphagia', 'پرخوری']]),
          T('dysphagia و dysphasia یک معنی دارند.', false, 'نادرست؛ dysphagia سختی بلع و dysphasia سختی گفتار است.'),
          L('مراقب هم‌آواها', `${vs(['dysphagia', 'سختی بلع؛ g مثل gag'], ['dysphasia', 'سختی گفتار؛ s مثل speak'])}${vs(['aphagia', 'ناتوانی در بلع'], ['aphasia', 'ناتوانی در گفتار'])}`),
          M('بیمار با سرطان مری غذا را به سختی قورت می‌دهد. کدام واژه؟', ['dysphagia', 'dysphasia', 'aphasia', 'dyspepsia'], 'phag = بلع.'),
          B('بلع بیش از حد هوا هنگام غذا خوردن ___ است.', ['aerophagia', 'polyphagia', 'aphagia'], 'aer/o + -phagia.'),
          W('واژه‌ای بساز به معنی «کندی هضم»', ['brady-', '-pepsia'], ['dys-', '-phagia', 'poly-'], 'brady- + -pepsia = bradypepsia.'),
          S('املای «سختی بلع» را بنویس', 'dysphagia', 'dys- + -phagia.', 'dysph…'),
          N('m2r:up')
        ]
      },
      {
        id: 'up3', title: 'گاز، اشتها و وزن', icon: '⚖️', items: [
          L('گاز', `<b>flatulence</b> گاز زیاد در معده یا روده است و <b>flatus</b> گازی که از مقعد بیرون می‌رود. <b>borborygmus</b> صدای قار و قور حرکت گاز در روده است.${vs(['flatulence', 'گاز زیاد در لوله گوارش'], ['flatus', 'گاز خارج‌شده از مقعد'])}`),
          M(`${e('<b>borborygmus</b>')} یعنی…`, ['صدای قار و قور روده', 'آروغ', 'نفخ شکم', 'یبوست'], 'صدایی شبیه نامش!'),
          T('flatus یعنی گازی که از مقعد خارج می‌شود.', true, 'flatus = gas expelled through the anus.'),
          L('اشتها', `<b>anorexia</b> یعنی بی‌اشتهایی، یک علامت (an- + orex/o). <b>anorexia nervosa</b> یک بیماری روانی است: خودداری از خوردن از ترس چاقی. <b>bulimia</b> پرخوری و سپس استفراغ عمدی است.${memo('anorexia علامت است؛ با nervosa بیماری می‌شود.')}`),
          M(`${e('<b>bulimia</b>')} چیست؟`, ['پرخوری و سپس استفراغ عمدی', 'بی‌اشتهایی ساده', 'لاغری از سرطان', 'بلع دردناک'], 'binge-purge.'),
          L('لاغری و چاقی', `<b>cachexia</b> لاغری و تحلیل شدید در بیماری‌های مزمن مثل سرطان است. <b>obesity</b> یعنی چربی زیاد بدن؛ معمولاً BMI سی یا بیشتر.${pearl('BMI یا body mass index = وزن به کیلوگرم ÷ مجذور قد به متر. منابع درباره مرز چاقی کمی فرق دارند؛ بیشترشان ۳۰ را می‌گویند.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['anorexia', 'بی‌اشتهایی'], ['cachexia', 'لاغری مفرط در بیماری'], ['obesity', 'چاقی'], ['flatulence', 'نفخ']]),
          M(`${e('<b>BMI</b>')} یعنی…`, ['body mass index؛ شاخص توده بدن', 'bowel movement index', 'basal metabolic intake', 'bile mass increase'], 'body mass index.'),
          L('مرور سطح «علامت‌های گوارش بالا»', recap(['nausea → emesis • hyperemesis شدید • hematemesis خونی • regurgitation بدون زور', 'pyrosis همان heartburn • eructation آروغ', 'dysphagia، aphagia، odynophagia، polyphagia، aerophagia • dyspepsia، bradypepsia', 'flatulence و flatus • borborygmus • anorexia، anorexia nervosa، bulimia، cachexia، obesity'])),
          B('لاغری و تحلیل شدید در سرطان پیشرفته را ___ می‌نامند.', ['cachexia', 'anorexia', 'bulimia'], 'cac/o (بد) + -hexia (حالت).'),
          S('املای «بی‌اشتهایی» را بنویس', 'anorexia', 'an- + orex/o + -ia.', 'ano…'),
          N('f2t:up')
        ]
      },
      /* ================= سطح ۲: بیماری‌های دهان و دندان ================= */
      {
        id: 'up4', title: 'پوسیدگی و لثه', icon: '🦷', items: [
          L('پوسیدگی دندان', `${fig('tooth-decay')}<b>dental plaque</b> لایه چسبنده باکتری روی دندان است. اسید باکتری‌ها مینا را می‌خورد و <b>dental caries</b> (پوسیدگی) می‌سازد؛ اگر به پالپ برسد آبسه دندان پیش می‌آید.`),
          O('پیشروی پوسیدگی را مرتب کن', ['plaque', 'enamel caries', 'dentin caries', 'pulp infection'], 'از سطح به عمق.'),
          M(`${e('<b>dental caries</b>')} یعنی…`, ['پوسیدگی دندان', 'جرم دندان', 'دندان‌قروچه', 'التهاب لثه'], 'caries در لاتین یعنی پوسیدگی.'),
          L('لثه', `<b>gingivitis</b> التهاب لثه است که معمولاً از پلاک می‌آید. اگر درمان نشود <b>periodontitis</b> می‌شود: تخریب لثه و استخوان نگه‌دارنده دندان که شایع‌ترین علت افتادن دندان است.`),
          T('periodontitis می‌تواند باعث افتادن دندان شود.', true, 'peri- + odont/o + -itis.'),
          L('چند مشکل دیگر', `${tbl([['واژه', 'معنی'], [e('halitosis'), 'بوی بد دهان'], [e('xerostomia'), 'خشکی دهان از کم شدن بزاق'], [e('bruxism'), 'دندان‌قروچه، بیشتر در خواب'], [e('malocclusion'), 'جفت نشدن درست دندان‌های بالا و پایین']])}${pearl('xerostomia در بیماران سالمند و کسانی که پرتودرمانی سر و گردن گرفته‌اند شایع است و پوسیدگی را بیشتر می‌کند.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['halitosis', 'بوی بد دهان'], ['xerostomia', 'خشکی دهان'], ['bruxism', 'دندان‌قروچه'], ['malocclusion', 'ناجور بسته شدن دندان‌ها']]),
          M(`${e('<b>xerostomia</b>')} یعنی…`, ['خشکی دهان', 'التهاب دهان', 'بوی بد دهان', 'سنگ بزاقی'], 'xer/o (خشک) + stom/o (دهان) + -ia.'),
          B('التهاب لثه را ___ می‌گویند.', ['gingivitis', 'glossitis', 'stomatitis'], 'gingiv/o + -itis.'),
          W('واژه‌ای بساز به معنی «خشکی دهان»', ['xer/o', 'stom/o', '-ia'], ['gloss/o', '-itis', 'sial/o'], 'xer/o + stom/o + -ia = xerostomia؛ stom/o شکل کوتاه stomat/o است.'),
          S('املای «دندان‌قروچه» را بنویس', 'bruxism', 'brux = ساییدن دندان + -ism.', 'brux…'),
          N('d2t:up')
        ]
      },
      {
        id: 'up5', title: 'آفت، برفک و لکه سفید', icon: '⚪', items: [
          L('شش ضایعه دهان', `${fig('mouth-lesions')}${fig(['canker-img'], ['آفت دهان'])}<b>aphthous ulcer</b> یا canker sore (آفت) زخم کوچک و دردناک مخاط دهان است.`),
          M(`${e('<b>aphthous ulcer</b>')} همان…`, ['آفت دهان (canker sore)', 'تبخال لب', 'برفک', 'لکه سفید پیش‌سرطانی'], 'زخم کوچک دردناک دهان.'),
          L('سفیدها را جدا کن', `${vs(['thrush', 'برفک: عفونت قارچی Candida؛ لکه سفید که پاک می‌شود'], ['leukoplakia', 'لکه سفید سفت که پاک نمی‌شود؛ پیش‌سرطانی'])}${memo('leuk/o یعنی سفید و plak یعنی پلاک: leukoplakia «پلاک سفید» است.')}`),
          T('leukoplakia یک ضایعه پیش‌سرطانی است.', true, 'به‌ویژه در سیگاری‌ها؛ نیاز به نمونه‌برداری دارد.'),
          M('لکه‌های سفید پاک‌شدنی در دهان نوزاد، از قارچ Candida…', ['thrush', 'leukoplakia', 'herpes labialis', 'cheilosis'], 'oral candidiasis.'),
          L('لب و زبان', `${tbl([['واژه', 'معنی'], [e('herpes labialis'), 'تبخال لب از ویروس HSV-1'], [e('cheilosis'), 'ترک گوشه لب، اغلب از کمبود ویتامین B'], [e('cheilitis'), 'التهاب لب'], [e('glossitis'), 'التهاب زبان'], [e('stomatitis'), 'التهاب مخاط دهان'], [e('Vincent disease'), 'عفونت زخمی و خون‌ریزی‌دهنده لثه']])}`),
          P('هر ضایعه را به معنی‌اش وصل کن', [['herpes labialis', 'تبخال لب'], ['cheilosis', 'ترک گوشه لب'], ['glossitis', 'التهاب زبان'], ['Vincent disease', 'التهاب زخمی لثه']]),
          M(`${e('<b>HSV-1</b>')} علت کدام است؟`, ['herpes labialis', 'thrush', 'leukoplakia', 'dental caries'], 'herpes simplex virus type 1.'),
          B('لکه سفید سفت و پیش‌سرطانی دهان ___ است.', ['leukoplakia', 'thrush', 'aphthous ulcer'], 'leuk/o + plakia.'),
          S('املای «برفک دهان» را بنویس', 'thrush', 'thrush = oral candidiasis.', 'thr…'),
          N('r2m:up')
        ]
      },
      {
        id: 'up6', title: 'شکاف‌ها و غدد بزاقی', icon: '🧵', items: [
          L('شکاف لب و کام', `<b>cleft lip</b> شکاف مادرزادی لب بالا و <b>cleft palate</b> شکاف مادرزادی سقف دهان است؛ اغلب با هم دیده می‌شوند و با جراحی ترمیم می‌شوند: ${e('cheiloplasty')} ترمیم لب و ${e('palatoplasty')} ترمیم کام.`),
          M(`${e('<b>palatoplasty</b>')} یعنی…`, ['ترمیم کام با جراحی', 'برداشتن کام', 'بخیه زبان', 'برش لب'], 'palat/o + -plasty.'),
          T('cheiloplasty یعنی ترمیم لب.', true, 'cheil/o + -plasty.'),
          L('زبان‌بند', `<b>ankyloglossia</b> یا tongue-tie (زبان‌بند) یعنی کوتاه بودن فرنولوم که حرکت زبان را محدود می‌کند و در نوزاد شیر خوردن را سخت می‌کند.${memo('ankyl/o یعنی خمیده یا چسبیده: زبانی که به کف دهان چسبیده است.')}`),
          M(`${e('<b>ankyloglossia</b>')} چیست؟`, ['زبان‌بند؛ کوتاهی فرنولوم', 'التهاب زبان', 'فلج زبان', 'بزرگی زبان'], 'tongue-tie.'),
          L('غدد بزاقی', `${tbl([['واژه', 'معنی'], [e('sialadenitis'), 'التهاب غده بزاقی'], [e('parotitis'), 'التهاب غده پاروتید؛ مثل اوریون (mumps)'], [e('sialolith'), 'سنگ بزاقی'], [e('sialorrhea'), 'ترشح زیاد بزاق']])}${pearl('سنگ بزاقی معمولاً در غده submandibular است و هنگام غذا خوردن تورم و درد ایجاد می‌کند.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['sialadenitis', 'التهاب غده بزاقی'], ['parotitis', 'التهاب پاروتید'], ['sialolith', 'سنگ بزاقی'], ['cleft palate', 'شکاف کام']]),
          M('اوریون (mumps) بیشتر کدام غده را ملتهب می‌کند؟', ['parotid', 'sublingual', 'pancreas', 'thyroid'], 'parotitis.'),
          L('مرور سطح «بیماری‌های دهان و دندان»', recap(['plaque → dental caries و سپس آبسه • gingivitis → periodontitis', 'halitosis، xerostomia، bruxism، malocclusion', 'aphthous ulcer، thrush، leukoplakia (پیش‌سرطانی)، herpes labialis، cheilosis، Vincent disease', 'cleft lip و cleft palate • ankyloglossia • sialadenitis، parotitis، sialolith'])),
          B('التهاب غده بزاقی ___ نام دارد.', ['sialadenitis', 'sialolith', 'sialorrhea'], 'sialaden/o + -itis.'),
          S('املای «ترمیم لب» را بنویس', 'cheiloplasty', 'cheil/o + -plasty.', 'cheil…'),
          N('ab:up')
        ]
      },
      /* ================= سطح ۳: مری و معده ================= */
      {
        id: 'up7', title: 'ریفلاکس و مری', icon: '🔥', items: [
          L('GERD', `${fig(['gerd-img'], ['ریفلاکس و التهاب مری'])}<b>gastroesophageal reflux disease</b> (GERD) برگشت مزمن اسید معده به مری است، چون LES خوب بسته نمی‌شود. علامت اصلی آن heartburn است.`),
          M(`${e('<b>GERD</b>')} از ضعف کدام اسفنکتر است؟`, ['lower esophageal sphincter', 'pyloric sphincter', 'ileocecal valve', 'sphincter of Oddi'], 'LES.'),
          L('اگر ریفلاکس ادامه پیدا کند', `${fig('gerd-chain')}اسید مری را ملتهب می‌کند (<b>esophagitis</b>) و در سال‌ها پوشش مری تغییر می‌کند: <b>Barrett esophagus</b>، یک حالت پیش‌سرطانی.`),
          O('زنجیره ریفلاکس را مرتب کن', ['LES ضعیف', 'reflux اسید', 'esophagitis', 'Barrett esophagus'], 'از علت تا پیامد پیش‌سرطانی.'),
          T('Barrett esophagus تغییر پیش‌سرطانی پوشش مری در ریفلاکس مزمن است.', true, 'نیاز به پیگیری با EGD دارد.'),
          L('فتق هیاتال و آشالازی', `${fig(['hiatal-img'], ['فتق هیاتال'])}در <b>hiatal hernia</b> بخشی از معده از سوراخ مری در دیافراگم به قفسه سینه می‌رود و ریفلاکس را بدتر می‌کند. در <b>achalasia</b> برعکس، LES شل نمی‌شود و غذا به معده نمی‌رسد. <b>esophageal atresia</b> هم بسته بودن مادرزادی مری در نوزاد است.${vs(['GERD', 'LES زیادی باز'], ['achalasia', 'LES زیادی بسته'])}`),
          M(`${e('<b>achalasia</b>')} یعنی…`, ['شل نشدن LES هنگام بلع', 'برگشت اسید به مری', 'التهاب مری', 'سوراخ شدن مری'], 'a- (بدون) + chalasia (شل شدن).'),
          P('هر بیماری را به معنی‌اش وصل کن', [['esophagitis', 'التهاب مری'], ['hiatal hernia', 'رفتن معده از سوراخ دیافراگم'], ['achalasia', 'شل نشدن LES'], ['esophageal atresia', 'بسته بودن مادرزادی مری']]),
          B('برگشت مزمن اسید معده به مری را ___ می‌نامند.', ['GERD', 'PUD', 'IBS'], 'gastroesophageal reflux disease.'),
          S('املای «ریفلاکس» را بنویس', 'reflux', 're- (برگشت) + flux (جریان).', 'ref…'),
          N('t2f:up')
        ]
      },
      {
        id: 'up8', title: 'زخم پپتیک', icon: '🕳️', items: [
          L('زخم کجا می‌نشیند؟', `${fig(['peptic-img'], ['جای زخم‌های پپتیک'])}<b>peptic ulcer</b> زخمی در مخاطی است که با اسید و pepsin تماس دارد: مری، معده (<b>gastric ulcer</b>) یا دوازدهه (<b>duodenal ulcer</b>).`),
          M('زخم پپتیک در دوازدهه را چه می‌نامند؟', ['duodenal ulcer', 'gastric ulcer', 'aphthous ulcer', 'esophageal varix'], 'duoden/o + -al.'),
          L('دو علت اصلی', `${fig(['ulcer-illus', 'ulcer-photo'], ['شیره معده و زخم', 'زخم معده'])}بیشتر زخم‌ها از عفونت <b>Helicobacter pylori</b> یا مصرف داروهای NSAID مثل ibuprofen و aspirin هستند. در پرونده‌ها PUD یعنی peptic ulcer disease.`),
          M('کدام دو عامل علت بیشتر زخم‌های پپتیک‌اند؟', ['H. pylori و NSAIDs', 'سیگار و قهوه', 'استرس و غذای تند', 'ویروس و قارچ'], 'عفونت باکتریایی و داروهای ضدالتهاب غیراستروئیدی.'),
          T('زخم ناشی از H. pylori با آنتی‌بیوتیک درمان می‌شود.', true, 'همراه با داروی کاهنده اسید.'),
          L('چقدر عمیق؟', `${fig('ulcer-depth')}آسیبی که فقط در مخاط بماند <b>erosion</b> است. اگر زخم کل دیواره را سوراخ کند (<b>perforation</b>)، محتوای معده به صفاق می‌ریزد و peritonitis پیش می‌آید؛ جراحی فوری لازم است. زخم خون‌ریزی‌دهنده ممکن است hematemesis یا melena بدهد.`),
          P('هر واژه را به معنی‌اش وصل کن', [['erosion', 'آسیب فقط در مخاط'], ['ulcer', 'زخم عمیق‌تر'], ['perforation', 'سوراخ شدن دیواره'], ['PUD', 'بیماری زخم پپتیک']]),
          M(`${e('<b>H. pylori</b>')} چیست؟`, ['باکتری‌ای که دیواره معده را عفونی می‌کند', 'آنزیم معده', 'داروی ضداسید', 'بخشی از پیلور'], 'Helicobacter pylori.'),
          B('زخم پپتیک در معده ___ نام دارد.', ['gastric ulcer', 'duodenal ulcer', 'gastritis'], 'gastric ulcer.'),
          S('املای «زخم» را بنویس', 'ulcer', 'ulcer؛ صفت: ulcerative.', 'ulc…'),
          N('f2t:up')
        ]
      },
      {
        id: 'up9', title: 'بیماری‌های معده', icon: '🫃', items: [
          L('التهاب معده', `<b>gastritis</b> التهاب مخاط معده است و <b>gastroenteritis</b> التهاب معده و روده، معمولاً از ویروس یا غذای آلوده، با تهوع، استفراغ، دل‌پیچه و اسهال.`),
          M(`${e('<b>gastroenteritis</b>')} معمولاً با کدام علائم می‌آید؟`, ['تهوع، استفراغ، دل‌پیچه و اسهال', 'زردی و خارش', 'سختی بلع و سوزش', 'یبوست و خون روشن'], 'stomach flu.'),
          L('تنگی پیلور', `${fig('pyloric-stenosis')}در <b>pyloric stenosis</b> ماهیچه پیلور ضخیم و راه تنگ می‌شود. نوزاد چند هفته‌ای پس از شیر خوردن <b>projectile vomiting</b> (استفراغ جهنده) دارد.${pearl('درمان تنگی پیلور نوزاد جراحی است: پیلوروتومی (برش ماهیچه پیلور).')}`),
          T('در تنگی پیلور نوزاد استفراغ جهنده دیده می‌شود.', true, 'projectile vomiting.'),
          M(`${e('<b>pyloric stenosis</b>')} یعنی…`, ['تنگی پیلور', 'گشادی پیلور', 'التهاب پیلور', 'گرفتگی ناگهانی پیلور'], 'pylor/o + -stenosis.'),
          L('اسید و B12', `<b>achlorhydria</b> یعنی نبود HCl در معده. اگر معده intrinsic factor نسازد، B12 جذب نمی‌شود و <b>pernicious anemia</b> پیش می‌آید. <b>gastric carcinoma</b> سرطان معده است.${memo('a- (بدون) + chlor (کلر) + hydr (آب) + -ia: معده بدون اسید کلریدریک.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['achlorhydria', 'نبود اسید معده'], ['pernicious anemia', 'کم‌خونی از جذب نشدن B12'], ['gastritis', 'التهاب معده'], ['gastric carcinoma', 'سرطان معده']]),
          M('کم‌خونی ناشی از نبود intrinsic factor…', ['pernicious anemia', 'iron deficiency', 'sickle cell anemia', 'aplastic anemia'], 'B12 جذب نمی‌شود.'),
          L('مرور سطح «مری و معده»', recap(['GERD: LES ضعیف، سپس reflux → esophagitis → Barrett esophagus', 'hiatal hernia معده از دیافراگم بالا می‌رود • achalasia: LES شل نمی‌شود', 'peptic ulcer در مری، معده یا دوازدهه؛ علت‌ها H. pylori و NSAIDs؛ perforation → peritonitis', 'gastritis، gastroenteritis، pyloric stenosis (استفراغ جهنده)، achlorhydria، pernicious anemia'])),
          B('نبود اسید کلریدریک در معده ___ است.', ['achlorhydria', 'achalasia', 'aphagia'], 'a- + chlorhydria.'),
          S('املای «التهاب معده و روده» را بنویس', 'gastroenteritis', 'gastr/o + enter/o + -itis.', 'gastroent…'),
          N('wb:up')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
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
    id: 'lo', sym: 'Low', name: 'بیماری‌های روده، کبد و صفرا', short: 'گوارش پایین', sub: 'اسهال و خون در مدفوع، کرون و کولیت، سلیاک، دیورتیکول، پولیپ و سرطان، انسداد، فتق و بواسیر، هپاتیت، سیروز و سنگ صفرا',
    color: '#7950F2', dark: '#5F3DC4', light: '#F3F0FF',
    levels: ['بیماری‌های روده', 'پولیپ، انسداد و ناحیه مقعد', 'کبد، صفرا و پانکراس'],
    gens: EA.genIds('lo'),
    lessons: [
      /* ================= سطح ۱: بیماری‌های روده ================= */
      {
        id: 'lo1', title: 'مدفوع چه می‌گوید؟', icon: '💩', items: [
          L('اسهال و یبوست', `<b>diarrhea</b> دفع مکرر مدفوع شل یا آبکی است. <b>constipation</b> دفع کم و سخت مدفوع خشک و <b>obstipation</b> یبوست شدید، اغلب از انسداد.${memo('dia- یعنی از میان و ‎-rrhea یعنی جریان: diarrhea «جریان از میان» است.')}`),
          M(`${e('<b>obstipation</b>')} یعنی…`, ['یبوست شدید، اغلب از انسداد', 'اسهال شدید', 'مدفوع چرب', 'بی‌اختیاری مدفوع'], 'obstipation = intractable constipation.'),
          L('رنگ مدفوع', `${fig('stool-colors')}<b>melena</b> مدفوع سیاه و قیری با خون هضم‌شده است، نشانه خون‌ریزی گوارش بالا. <b>hematochezia</b> خون قرمز روشن است، نشانه خون‌ریزی پایین. <b>occult blood</b> خون پنهانی است که فقط با آزمایش دیده می‌شود.`),
          M('مدفوع سیاه و قیری بیشتر نشانه خون‌ریزی کجاست؟', ['معده و دوازدهه', 'رکتوم', 'بواسیر', 'مقعد'], 'melena: خون در مسیر هضم شده و سیاه شده است.'),
          P('هر واژه را به معنی‌اش وصل کن', [['melena', 'مدفوع سیاه و قیری'], ['hematochezia', 'خون روشن در مدفوع'], ['steatorrhea', 'مدفوع چرب'], ['occult blood', 'خون پنهان']]),
          T('occult blood با چشم دیده نمی‌شود و آزمایش لازم دارد.', true, 'occult = پنهان؛ آزمایش FOBT.'),
          L('دو علامت دیگر', `<b>tenesmus</b> احساس دائمی و دردناک نیاز به دفع است، شایع در کولیت. <b>fecal incontinence</b> یعنی ناتوانی در نگه داشتن مدفوع.${pearl('خون پنهان در مدفوع می‌تواند نخستین نشانه سرطان روده بزرگ باشد؛ برای همین در غربالگری بزرگسالان آزمایش می‌شود.')}`),
          M(`${e('<b>tenesmus</b>')} یعنی…`, ['احساس دائمی نیاز به دفع', 'یبوست شدید', 'صدای روده', 'بی‌اختیاری ادرار'], 'شایع در ulcerative colitis.'),
          B('مدفوع چرب و شناور ___ نام دارد.', ['steatorrhea', 'melena', 'diarrhea'], 'steat/o + -rrhea.'),
          S('املای «اسهال» را بنویس', 'diarrhea', 'dia- + -rrhea؛ rr دوتایی.', 'diar…'),
          N('t2f:lo')
        ]
      },
      {
        id: 'lo2', title: 'بیماری التهابی روده', icon: '🔥', items: [
          L('IBD', `<b>inflammatory bowel disease</b> (IBD) دو بیماری مزمن التهابی و خودایمنی را در بر می‌گیرد: <b>Crohn disease</b> و <b>ulcerative colitis</b>.${fig('ibd-compare')}`),
          M(`${e('<b>IBD</b>')} شامل کدام دو بیماری است؟`, ['Crohn disease و ulcerative colitis', 'IBS و GERD', 'celiac و lactose intolerance', 'diverticulitis و appendicitis'], 'inflammatory bowel disease.'),
          L('کرون', `${fig(['crohn-img'], ['بیماری کرون'])}Crohn می‌تواند هر جای لوله گوارش را تکه‌تکه درگیر کند، بیشتر انتهای ایلئوم؛ همه لایه‌های دیواره را می‌گیرد و ممکن است fistula و تنگی بسازد. نام دیگرش regional enteritis است.`),
          T('ulcerative colitis فقط کولون و رکتوم را درگیر می‌کند.', true, 'پیوسته و از رکتوم به بالا.'),
          L('کولیت زخمی', `${fig(['uc-img'], ['کولون در کولیت اولسراتیو'])}در <b>ulcerative colitis</b> (UC) مخاط کولون پیوسته پر از زخم است و اسهال خونی و tenesmus می‌دهد؛ اگر فقط رکتوم ملتهب باشد به آن <b>proctitis</b> می‌گویند.${vs(['Crohn disease', 'تکه‌تکه؛ هر جای لوله؛ همه لایه‌ها'], ['ulcerative colitis', 'پیوسته؛ کولون و رکتوم؛ مخاط'])}`),
          P('هر ویژگی را به بیماری‌اش وصل کن', [['درگیری تکه‌تکه با fistula', 'Crohn disease'], ['زخم پیوسته از رکتوم به بالا', 'ulcerative colitis'], ['درد و نفخ بدون آسیب دیدنی', 'IBS']]),
          L('IBS فرق دارد', `<b>irritable bowel syndrome</b> یا IBS، که spastic colon هم نامیده می‌شود، اختلال کارکردی روده است: درد شکم، نفخ و اسهال یا یبوست، ولی روده آسیب دیدنی ندارد.${memo('IBD یعنی Disease با التهاب واقعی؛ IBS یعنی Syndrome بدون آسیب.')}`),
          M('نام دیگر IBS…', ['spastic colon', 'regional enteritis', 'megacolon', 'sprue'], 'spastic colon.'),
          B('التهاب کولون را ___ می‌گویند.', ['colitis', 'cholangitis', 'cholecystitis'], 'col/o + -itis.'),
          S('املای «التهاب رکتوم» را بنویس', 'proctitis', 'proct/o + -itis.', 'proc…'),
          N('d2t:lo')
        ]
      },
      {
        id: 'lo3', title: 'سلیاک، دیورتیکول، آپاندیس', icon: '🌾', items: [
          L('سلیاک', `در <b>celiac disease</b> بدن به gluten (پروتئین گندم و جو) واکنش ایمنی نشان می‌دهد و پرزهای روده باریک صاف می‌شوند؛ پس جذب کم می‌شود. درمان: رژیم بدون گلوتن.`),
          M('در بیماری سلیاک کدام ماده آسیب می‌زند؟', ['gluten', 'lactose', 'fat', 'fiber'], 'پروتئین گندم و جو.'),
          L('لاکتوز', `<b>lactose intolerance</b> یعنی کمبود آنزیم lactase، پس قند شیر هضم نمی‌شود و پس از نوشیدن شیر نفخ و اسهال پیش می‌آید.${vs(['celiac disease', 'واکنش ایمنی به gluten؛ آسیب پرزها'], ['lactose intolerance', 'کمبود آنزیم lactase؛ بدون آسیب ایمنی'])}`),
          T('در lactose intolerance پرزهای روده با واکنش ایمنی صاف می‌شوند.', false, 'نادرست؛ این ویژگی celiac است. در عدم تحمل لاکتوز فقط آنزیم کم است.'),
          L('کیسه‌های کولون', `${fig(['diverticula-img'], ['دیورتیکول‌ها'])}<b>diverticulum</b> با جمع diverticula کیسه کوچکی است که از دیواره کولون بیرون می‌زند. ${e('diverticulosis')} یعنی وجود این کیسه‌ها و ${e('diverticulitis')} یعنی التهاب آن‌ها.`),
          M('تفاوت diverticulosis و diverticulitis…', ['اولی وجود کیسه‌ها، دومی التهاب آن‌ها', 'اولی التهاب، دومی وجود کیسه‌ها', 'هر دو یکی‌اند', 'اولی در معده، دومی در کولون'], '‎-osis حالت؛ ‎-itis التهاب.'),
          L('آپاندیسیت', `<b>appendicitis</b> التهاب آپاندیس است با درد دور ناف که به RLQ می‌رود. اگر آپاندیس پاره شود <b>peritonitis</b> پیش می‌آید.${pearl('درمان آپاندیسیت appendectomy است؛ بیشتر با لاپاراسکوپی.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['celiac disease', 'واکنش به gluten'], ['diverticulitis', 'التهاب کیسه‌های کولون'], ['appendicitis', 'التهاب آپاندیس'], ['peritonitis', 'التهاب صفاق']]),
          L('مرور سطح «بیماری‌های روده»', recap(['diarrhea، constipation، obstipation، tenesmus، fecal incontinence', 'melena سیاه (بالا) • hematochezia قرمز (پایین) • steatorrhea چرب • occult blood پنهان', 'IBD = Crohn (تکه‌تکه) + ulcerative colitis (پیوسته)؛ IBS بدون آسیب', 'celiac (gluten)، lactose intolerance، diverticulosis و diverticulitis، appendicitis → peritonitis'])),
          B('وجود کیسه‌های متعدد در دیواره کولون ___ است.', ['diverticulosis', 'diverticulitis', 'polyposis'], '-osis = حالت.'),
          S('املای «التهاب آپاندیس» را بنویس', 'appendicitis', 'appendic/o + -itis.', 'appendi…'),
          N('m2r:lo')
        ]
      },
      /* ================= سطح ۲: پولیپ، انسداد و ناحیه مقعد ================= */
      {
        id: 'lo4', title: 'پولیپ و سرطان روده', icon: '🍄', items: [
          L('پولیپ', `${fig(['polyp-endo'], ['پولیپ در کولونوسکوپی'])}<b>polyp</b> توده‌ای است که از مخاط بیرون زده، اغلب روی یک ساقه. <b>polyposis</b> یعنی پولیپ‌های متعدد.`),
          M(`${e('<b>polyposis</b>')} یعنی…`, ['وجود پولیپ‌های متعدد', 'برداشتن پولیپ', 'یک پولیپ بزرگ', 'التهاب پولیپ'], 'polyp/o + -osis.'),
          L('پولیپ خانوادگی', `<b>familial adenomatous polyposis</b> (FAP) بیماری ارثی است که صدها پولیپ در کولون می‌سازد و بدون درمان تقریباً همیشه به سرطان می‌رسد.`),
          T('بیشتر سرطان‌های روده بزرگ از پولیپ شروع می‌شوند.', true, 'برای همین polypectomy در کولونوسکوپی پیشگیری‌کننده است.'),
          L('سرطان روده بزرگ و Dukes', `${fig('dukes')}<b>colorectal cancer</b> را با عمق رشد مرحله‌بندی می‌کنند؛ یکی از روش‌ها طبقه‌بندی Dukes است: A فقط مخاط، B تا ماهیچه، C گره لنفی.`),
          O('مراحل Dukes را از کم به زیاد مرتب کن', ['A: فقط مخاط', 'B: تا لایه ماهیچه', 'C: گره لنفی درگیر'], 'هرچه عمیق‌تر، پیشرفته‌تر.'),
          M('در Dukes C چه رخ داده است؟', ['سرطان به گره‌های لنفی رسیده', 'سرطان فقط در مخاط است', 'پولیپ خوش‌خیم است', 'سرطان به مری رسیده'], 'C = lymph nodes.'),
          L('غربالگری', `${pearl('آزمایش خون مخفی مدفوع (FOBT) و کولونوسکوپی دو راه اصلی غربالگری‌اند؛ در کولونوسکوپی پولیپ‌ها همان‌جا برداشته می‌شوند.')}${memo('polyp در لاتین یعنی «هشت‌پا»؛ توده‌ای با ساقه.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['polyp', 'توده پایه‌دار از مخاط'], ['FAP', 'پولیپ‌های ارثی متعدد'], ['colorectal', 'کولون و رکتوم'], ['carcinoma', 'سرطان']]),
          B('سرطان کولون و رکتوم ___ نام دارد.', ['colorectal cancer', 'colitis', 'proctitis'], 'col/o + rect/o + -al.'),
          S('املای «پولیپ» را بنویس', 'polyp', 'polyp/o؛ جمع: polyps.', 'pol…'),
          N('ab:lo')
        ]
      },
      {
        id: 'lo5', title: 'انسداد روده', icon: '🪢', items: [
          L('چهار راه بسته شدن', `${fig('obstruction')}<b>intestinal obstruction</b> یعنی محتوای روده جلو نمی‌رود. چهار علت مهم: پیچ خوردن، فرو رفتن، توقف حرکت و فتق.`),
          L('پیچ و تلسکوپ', `${fig(['volvulus-img', 'intussusception-img'], ['ولولوس: پیچ خوردن', 'انواژیناسیون: فرو رفتن'])}در <b>volvulus</b> روده به دور خودش می‌پیچد و خون‌رسانی‌اش قطع می‌شود. در <b>intussusception</b> یک بخش روده مثل تلسکوپ درون بخش بعدی فرو می‌رود؛ در کودکان شایع‌تر است.`),
          M(`${e('<b>volvulus</b>')} یعنی…`, ['پیچ خوردن روده به دور خودش', 'فرو رفتن روده در بخش بعدی', 'توقف حرکت دودی', 'التهاب روده'], 'volvere = چرخاندن.'),
          M('کدام بیشتر در کودکان دیده می‌شود و روده مثل تلسکوپ در خودش فرو می‌رود؟', ['intussusception', 'volvulus', 'diverticulitis', 'ileus'], 'intussusception.'),
          L('ایلئوس و چسبندگی', `<b>ileus</b> یعنی توقف حرکت دودی روده، مثلاً پس از جراحی شکم. <b>adhesion</b> نوار بافت جوشگاهی است که روده‌ها را به هم می‌چسباند. <b>megacolon</b> کولون بسیار گشاد است.${vs(['ileus', 'انسداد از توقف حرکت روده'], ['ileum', 'بخش پایانی روده باریک'])}`),
          T('ileus همان ileum است.', false, 'نادرست؛ ileus انسداد روده است و ileum بخش پایانی روده باریک.'),
          P('هر واژه را به معنی‌اش وصل کن', [['volvulus', 'پیچ خوردن روده'], ['intussusception', 'فرو رفتن روده در خودش'], ['ileus', 'توقف حرکت روده'], ['adhesion', 'چسبندگی بافتی']]),
          L('چند بیماری روی یک شکل', `${fig(['gi-path'], ['بیماری‌های لوله گوارش'])}${pearl('در انسداد روده بیمار درد، نفخ، استفراغ و نبود دفع گاز و مدفوع دارد؛ اگر خون‌رسانی قطع شود جراحی فوری لازم است.')}`),
          B('بزرگی و گشادی شدید کولون ___ نام دارد.', ['megacolon', 'colitis', 'colectomy'], 'mega- + colon/o.'),
          S('املای «فرو رفتن روده در خودش» را بنویس', 'intussusception', 'intus (درون) + susceptio (گرفتن).', 'intus…'),
          N('f2t:lo')
        ]
      },
      {
        id: 'lo6', title: 'فتق، بواسیر، فیستول', icon: '🩹', items: [
          L('فتق', `${fig('hernia-sites')}<b>hernia</b> یعنی بیرون زدن یک اندام از دیواره‌ای که آن را نگه می‌دارد. نام فتق از جایش می‌آید: <b>inguinal hernia</b> در کشاله ران، <b>umbilical hernia</b> در ناف و hiatal hernia از دیافراگم. اگر خون‌رسانی روده بیرون‌زده قطع شود <b>strangulated hernia</b> است.`),
          M(`${e('<b>inguinal hernia</b>')} کجاست؟`, ['کشاله ران', 'ناف', 'دیافراگم', 'جای برش جراحی'], 'inguin/o = کشاله ران.'),
          T('strangulated hernia اورژانس است چون خون‌رسانی روده قطع شده است.', true, 'strangulate = خفه کردن.'),
          L('بواسیر', `${fig(['hemorrhoids-img'], ['بواسیر داخلی و خارجی'])}<b>hemorrhoids</b> رگ‌های واریسی در رکتوم و مقعدند؛ داخلی یا خارجی. می‌توانند خون روشن در مدفوع (hematochezia) بدهند.${memo('hem/o (خون) + rhoids (جاری شدن): رگ‌هایی که خون از آن‌ها جاری می‌شود.')}`),
          M(`${e('<b>hemorrhoids</b>')} یعنی…`, ['رگ‌های واریسی رکتوم و مقعد', 'زخم معده', 'فتق ناف', 'کیسه‌های کولون'], 'varicose veins of the anus.'),
          L('فیستول و کیست مویی', `<b>fistula</b> راه غیرطبیعی میان دو اندام یا از یک اندام به پوست است؛ ${e('anal fistula')} از کانال مقعد به پوست کنار آن باز می‌شود. <b>pilonidal cyst</b> کیستی با مو در پایین ستون فقرات است.${vs(['fistula', 'راه غیرطبیعی میان دو سطح'], ['fissure', 'ترک یا شکاف کوچک'])}`),
          P('هر واژه را به معنی‌اش وصل کن', [['umbilical hernia', 'فتق ناف'], ['hemorrhoids', 'واریس مقعد'], ['anal fistula', 'راه غیرطبیعی کنار مقعد'], ['pilonidal cyst', 'کیست مویی']]),
          M('بیمار کرون یک راه غیرطبیعی میان روده و پوست دارد. نام آن…', ['fistula', 'hernia', 'polyp', 'volvulus'], 'fistula؛ شایع در Crohn.'),
          L('مرور سطح «پولیپ، انسداد و ناحیه مقعد»', recap(['polyp، polyposis، FAP؛ بیشتر سرطان‌ها از پولیپ؛ Dukes A، B، C', 'obstruction: volvulus پیچ • intussusception تلسکوپ • ileus توقف • adhesion چسبندگی • megacolon', 'hernia: inguinal، umbilical، hiatal؛ strangulated = اورژانس', 'hemorrhoids واریس مقعد • fistula راه غیرطبیعی • pilonidal cyst'])),
          B('فتق روده در ناف ___ است.', ['umbilical hernia', 'inguinal hernia', 'hiatal hernia'], 'umbilic/o = ناف.'),
          S('املای «بواسیر» را بنویس', 'hemorrhoids', 'hem/o + rrhoids؛ rr دوتایی.', 'hemorr…'),
          N('r2m:lo')
        ]
      },
      /* ================= سطح ۳: کبد، صفرا و پانکراس ================= */
      {
        id: 'lo7', title: 'هپاتیت و یرقان', icon: '🟡', items: [
          L('هپاتیت ویروسی', `<b>hepatitis</b> التهاب کبد است و بیشتر از ویروس‌ها می‌آید.${fig('hepatitis')}${memo('A و E از دهان (آب و غذا)؛ B، C و D از خون. حرف‌های صدادار A و E راهشان «دهان» است.')}`),
          M('هپاتیت A از چه راهی منتقل می‌شود؟', ['دهان و مدفوع؛ آب و غذای آلوده', 'خون و سرنگ', 'تماس جنسی', 'نیش پشه'], 'fecal-oral route.'),
          M('کدام نوع هپاتیت فقط همراه هپاتیت B دیده می‌شود؟', ['HDV', 'HAV', 'HCV', 'HEV'], 'hepatitis D virus.'),
          T('برای هپاتیت C واکسن وجود دارد.', false, 'نادرست؛ واکسن ندارد ولی امروزه با دارو درمان‌پذیر است.'),
          P('هر نوع هپاتیت را به راه انتقالش وصل کن', [['HAV', 'آب و غذای آلوده'], ['HBV', 'خون، جنسی، مادر به نوزاد'], ['HCV', 'خون و سرنگ مشترک'], ['HEV', 'آب آلوده']]),
          L('یرقان', `${fig(['jaundice-img'], ['زردی سفیدی چشم'])}<b>jaundice</b> (یا <b>icterus</b>) زردی پوست و سفیدی چشم است از بالا رفتن bilirubin خون (<b>hyperbilirubinemia</b>).`),
          L('چرا زرد می‌شویم؟', `${fig('bilirubin')}اگر کبد بیمار باشد یا مجرای صفرا بسته شود، bilirubin در خون جمع می‌شود. اگر صفرا به روده نرسد، مدفوع رنگ‌پریده و گِلی می‌شود.`),
          M(`${e('<b>icterus</b>')} یعنی…`, ['یرقان؛ همان jaundice', 'خارش', 'کم‌خونی', 'بزرگی کبد'], 'icterus = jaundice.'),
          B('بالا رفتن bilirubin خون ___ نام دارد.', ['hyperbilirubinemia', 'hyperemesis', 'hepatomegaly'], 'hyper- + bilirubin + -emia.'),
          S('املای «یرقان» را بنویس', 'jaundice', 'از jaune فرانسوی: زرد.', 'jaun…'),
          N('t2f:lo')
        ]
      },
      {
        id: 'lo8', title: 'سیروز و پیامدهایش', icon: '🍂', items: [
          L('کبد جوشگاهی', `${fig('cirrhosis-chain')}در <b>cirrhosis</b> بافت جوشگاهی جای سلول‌های کبد را می‌گیرد و کبد سفت و کوچک می‌شود. علت‌های اصلی: الکل، هپاتیت B و C و کبد چرب.${memo('cirrh/o در یونانی یعنی زرد مایل به نارنجی؛ رنگ کبد سیروزی.')}`),
          M('کدام علت سیروز نیست؟', ['التهاب آپاندیس', 'الکل', 'هپاتیت C', 'هپاتیت B'], 'سیروز بیماری مزمن کبد است.'),
          L('فشار خون باب', `کبد جوشگاهی جلوی جریان خون را می‌گیرد و فشار در سیاهرگ باب بالا می‌رود (<b>portal hypertension</b>). در نتیجه:${tbl([['پیامد', 'معنی'], [e('esophageal varices'), 'واریس مری؛ ممکن است خون‌ریزی شدید بدهد'], [e('ascites'), 'آب آوردن شکم'], [e('splenomegaly'), 'بزرگی طحال']])}`),
          T('esophageal varices از پیامدهای portal hypertension است.', true, 'رگ‌های مری گشاد و شکننده می‌شوند.'),
          P('هر پیامد را به معنی‌اش وصل کن', [['esophageal varices', 'واریس مری'], ['ascites', 'آب آوردن شکم'], ['splenomegaly', 'بزرگی طحال'], ['jaundice', 'یرقان']]),
          M(`${e('<b>ascites</b>')} یعنی…`, ['جمع شدن مایع در حفره صفاق', 'بزرگی کبد', 'التهاب صفاق', 'خون‌ریزی مری'], 'از واژه یونانی کیسه شکمی.'),
          L('تومور کبد', `<b>hepatoma</b> تومور کبد است که ممکن است پس از سیروز یا هپاتیت مزمن B و C پیدا شود.${pearl('برای ascites بزرگ، مایع با سوزن از شکم کشیده می‌شود: paracentesis.')}`),
          M(`${e('<b>splenomegaly</b>')} یعنی…`, ['بزرگی طحال', 'بزرگی کبد', 'تومور طحال', 'برداشتن طحال'], 'splen/o + -megaly.'),
          B('بیماری مزمنی که بافت جوشگاهی جای سلول‌های کبد را می‌گیرد ___ است.', ['cirrhosis', 'hepatitis', 'cholestasis'], 'cirrh/o + -osis.'),
          S('املای «سیروز» را بنویس', 'cirrhosis', 'cirrh/o + -osis؛ rrh.', 'cirr…'),
          N('d2t:lo')
        ]
      },
      {
        id: 'lo9', title: 'سنگ صفرا و پانکراتیت', icon: '🪨', items: [
          L('سنگ صفرا', `${fig(['gallstone-specimen', 'gallstone-sono'], ['کیسه صفرای پر از سنگ', 'سنگ‌ها در سونوگرافی'])}<b>cholelithiasis</b> یعنی وجود سنگ در کیسه صفرا. بیشتر سنگ‌ها بی‌علامت‌اند؛ سونوگرافی بهترین آزمون است.`),
          L('هر واژه یک جا', `${fig('gallstone-terms')}${tbl([['واژه', 'معنی'], [e('cholelithiasis'), 'سنگ کیسه صفرا'], [e('choledocholithiasis'), 'سنگ در مجرای صفراوی مشترک'], [e('cholecystitis'), 'التهاب کیسه صفرا'], [e('cholangitis'), 'التهاب مجاری صفراوی']])}`),
          M(`${e('<b>choledocholithiasis</b>')} یعنی…`, ['سنگ در مجرای صفراوی مشترک', 'سنگ کیسه صفرا', 'التهاب کیسه صفرا', 'برداشتن سنگ'], 'choledoch/o + lith/o + -iasis.'),
          P('هر واژه را به جایش وصل کن', [['cholelithiasis', 'سنگ در کیسه صفرا'], ['choledocholithiasis', 'سنگ در مجرای مشترک'], ['cholecystitis', 'التهاب کیسه صفرا'], ['cholangitis', 'التهاب مجاری']]),
          L('قولنج صفراوی و علامت مورفی', `<b>biliary colic</b> درد شدید و ناگهانی RUQ پس از غذای چرب است که به کتف راست می‌زند. در <b>Murphy sign</b> بیمار هنگام فشار روی کیسه صفرا و نفس عمیق از درد نفسش را نگه می‌دارد؛ نشانه cholecystitis.${pearl('سنگ مجرای مشترک جلوی صفرا را می‌گیرد: یرقان و مدفوع رنگ‌پریده می‌دهد؛ مثل پرونده هدر.')}`),
          T('Murphy sign مثبت نشانه التهاب کیسه صفراست.', true, 'cholecystitis.'),
          L('پانکراتیت', `<b>pancreatitis</b> التهاب پانکراس است؛ آنزیم‌های پانکراس خود پانکراس را هضم می‌کنند. دو علت شایع: سنگ صفرا و الکل. amylase و lipase خون بالا می‌روند.`),
          M('در پانکراتیت کدام آزمایش‌ها بالا می‌روند؟', ['amylase و lipase', 'ALT و AST', 'bilirubin و albumin', 'insulin و glucagon'], 'آنزیم‌های پانکراس.'),
          L('مرور سطح «کبد، صفرا و پانکراس»', recap(['hepatitis A و E دهانی؛ B، C و D خونی؛ D فقط با B', 'jaundice = icterus = hyperbilirubinemia؛ مدفوع رنگ‌پریده یعنی صفرا به روده نمی‌رسد', 'cirrhosis → portal hypertension → varices، ascites و splenomegaly؛ hepatoma', 'cholelithiasis، choledocholithiasis، cholecystitis، cholangitis، biliary colic، Murphy sign • pancreatitis'])),
          B('التهاب پانکراس ___ نام دارد.', ['pancreatitis', 'pancreatolysis', 'cholangitis'], 'pancreat/o + -itis.'),
          S('املای «سنگ کیسه صفرا» (بیماری) را بنویس', 'cholelithiasis', 'chol/e + lith/o + -iasis.', 'chole…'),
          N('wb:lo')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
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
    id: 'tx', sym: 'Tx', name: 'تشخیص، جراحی و دارو', short: 'درمان', sub: 'آندوسکوپی و تصویربرداری، آزمایش‌ها، برداشتن و ترمیم، استومی و آناستوموز، بیلروت و جراحی چاقی، لوله‌ها و تغذیه، داروهای گوارش',
    color: '#1098AD', dark: '#0B7285', light: '#E3FAFC',
    levels: ['آندوسکوپی، تصویربرداری و آزمایش', 'جراحی‌ها و دهانه‌ها', 'لوله‌ها، تغذیه و داروها'],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: آندوسکوپی، تصویربرداری و آزمایش ================= */
      {
        id: 'tx1', title: 'آندوسکوپی‌ها', icon: '🔭', items: [
          L('دیدن درون لوله گوارش', `<b>endoscopy</b> یعنی دیدن درون اندام با <b>endoscope</b>، لوله‌ای نرم با نور و دوربین. نام هر آندوسکوپی از بخشی است که دیده می‌شود.${fig('endo-family')}`),
          M(`${e('<b>EGD</b>')} کدام بخش‌ها را نشان می‌دهد؟`, ['مری، معده و دوازدهه', 'کل کولون', 'رکتوم و مقعد', 'مجاری صفرا'], 'esophagogastroduodenoscopy.'),
          L('آندوسکوپی بالا', `${fig(['gastroscopy-img'], ['گاستروسکوپی'])}${e('esophagoscopy')} مری، ${e('gastroscopy')} معده و ${e('EGD')} هر سه بخش مری، معده و دوازدهه را می‌بیند. پیش از آن بیمار NPO است و گلویش بی‌حس می‌شود.`),
          W('واژه‌ای بساز به معنی «دیدن درون مری، معده و دوازدهه»', ['esophag/o', 'gastr/o', 'duoden/o', '-scopy'], ['col/o', '-tomy'], 'esophagogastroduodenoscopy = EGD.'),
          L('آندوسکوپی پایین', `${fig(['colonoscopy-img', 'cecum-endo'], ['کولونوسکوپی', 'نمای سکوم'])}${tbl([['روش', 'چه می‌بیند'], [e('colonoscopy'), 'کل کولون تا سکوم'], [e('sigmoidoscopy'), 'کولون سیگموئید'], [e('proctoscopy'), 'رکتوم و مقعد'], [e('proctosigmoidoscopy'), 'رکتوم و سیگموئید']])}`),
          P('هر روش را به بخشی که می‌بیند وصل کن', [['colonoscopy', 'کل کولون'], ['sigmoidoscopy', 'کولون سیگموئید'], ['proctoscopy', 'رکتوم و مقعد'], ['gastroscopy', 'معده']]),
          L('کپسول، روده باریک و شکم', `در <b>capsule endoscopy</b> بیمار کپسول دوربین‌داری را می‌بلعد که از روده باریک عکس می‌گیرد. ${e('enteroscopy')} یعنی دیدن درون روده باریک و ${e('laparoscopy')} یعنی دیدن درون حفره شکم از راه برش کوچک.${pearl('کولونوسکوپی برای غربالگری سرطان روده انجام می‌شود و پولیپ‌ها همان‌جا برداشته می‌شوند.')}`),
          M(`${e('<b>laparoscopy</b>')} یعنی…`, ['دیدن درون حفره شکم با آندوسکوپ از برش کوچک', 'برش بزرگ شکم', 'عکس رنگی روده', 'دیدن درون معده'], 'lapar/o (دیواره شکم) + -scopy.'),
          T('در capsule endoscopy بیمار یک کپسول دوربین‌دار را می‌بلعد.', true, 'برای دیدن روده باریک.'),
          S('املای «کولونوسکوپی» را بنویس', 'colonoscopy', 'colon/o + -scopy.', 'colono…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: 'تصویربرداری', icon: '🩻', items: [
          L('با ماده حاجب', `${fig('gi-imaging')}باریم ماده حاجبی است که در رادیوگرافی سفید دیده می‌شود. در <b>barium swallow</b> یا upper GI series (UGI) بیمار باریم را می‌نوشد؛ در <b>barium enema</b> (BE) باریم از راه رکتوم داده می‌شود.`),
          L('عکس کولون با باریم', `${fig(['barium-colon', 'lower-gi-xray'], ['کولون پر از باریم', 'آسیب روده در تنقیه باریم'])}در تنقیه باریم، شکل کولون، پولیپ‌ها، تنگی‌ها و دیورتیکول‌ها دیده می‌شوند.`),
          M('برای دیدن مری و معده با رادیوگرافی کدام روش انتخاب می‌شود؟', ['barium swallow', 'barium enema', 'colonoscopy', 'proctoscopy'], 'upper GI series.'),
          M(`${e('<b>BE</b>')} یعنی…`, ['barium enema؛ تنقیه باریم', 'bile excretion', 'bowel elimination', 'barium esophagram'], 'lower GI series.'),
          L('مجاری صفرا و پانکراس', `${fig(['ercp-img'], ['ERCP'])}در <b>ERCP</b> آندوسکوپ تا دوازدهه می‌رود، کاتتری از papilla به عقب (retrograde) وارد مجاری می‌شود و ماده حاجب تزریق می‌شود. در <b>PTC</b> سوزن از پوست و کبد وارد مجرا می‌شود. <b>MRCP</b> همین مجاری را با MRI و بدون آندوسکوپ نشان می‌دهد. برای سنگ کیسه صفرا <b>abdominal ultrasonography</b> آزمون اصلی است.`),
          P('هر روش را به ویژگی‌اش وصل کن', [['ERCP', 'آندوسکوپ و ماده حاجب از papilla'], ['PTC', 'سوزن از پوست به مجرای صفرا'], ['MRCP', 'MRI بدون آندوسکوپ'], ['abdominal ultrasonography', 'آزمون اصلی سنگ صفرا']]),
          L('چند واژه با ‎-graphy و ‎-gram', `${tbl([['واژه', 'معنی'], [e('cholangiography'), 'تصویربرداری مجاری صفرا'], [e('cholecystography'), 'تصویربرداری کیسه صفرا'], [e('cholescintigraphy'), 'اسکن هسته‌ای کیسه صفرا'], [e('sialography'), 'تصویربرداری غدد بزاقی'], [e('virtual colonoscopy'), 'تصویر سه‌بعدی کولون با CT']])}${memo('‎-graphy روش است و ‎-gram تصویر به دست آمده: cholangiography → cholangiogram.')}`),
          T('سونوگرافی شکم آزمون اصلی برای یافتن سنگ کیسه صفراست.', true, 'abdominal ultrasonography.'),
          B('تصویربرداری مجاری صفرا با ماده حاجب ___ است.', ['cholangiography', 'cholecystectomy', 'colonoscopy'], 'cholangi/o + -graphy.'),
          S('املای «تنقیه» را بنویس', 'enema', 'barium enema = BE.', 'ene…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx3', title: 'آزمایش‌ها و نمونه‌برداری', icon: '🧪', items: [
          L('آزمایش‌های کبد', `<b>liver function tests</b> (LFT) آنزیم‌های <b>ALT</b> و <b>AST</b>، bilirubin و آلکالن‌فسفاتاز را می‌سنجند. در آسیب کبد ALT و AST بالا می‌روند.`),
          M(`${e('<b>LFT</b>')} یعنی…`, ['liver function tests؛ آزمایش‌های عملکرد کبد', 'lower fecal test', 'lipid fat test', 'lung function test'], 'ALT، AST و bilirubin.'),
          L('آزمایش‌های مدفوع', `${tbl([['آزمایش', 'چه را می‌جوید'], [e('FOBT'), 'خون مخفی در مدفوع (stool guaiac)'], [e('stool culture'), 'باکتری بیماری‌زا'], [e('O&P'), 'انگل و تخم انگل']])}${pearl('پیش از FOBT گاهی از بیمار می‌خواهند چند روز گوشت قرمز نخورد تا نتیجه مثبت کاذب نشود.')}`),
          P('هر آزمایش را به هدفش وصل کن', [['FOBT', 'خون مخفی'], ['stool culture', 'باکتری'], ['O&P', 'انگل'], ['LFT', 'عملکرد کبد']]),
          T('O&P یعنی بررسی مدفوع برای انگل و تخم انگل.', true, 'ova and parasites.'),
          L('نمونه و فشار', `<b>biopsy</b> برداشتن تکه کوچکی از بافت برای میکروسکوپ است، مثلاً هنگام کولونوسکوپی. <b>manometry</b> فشار ماهیچه‌ها را در مری یا مقعد می‌سنجد. <b>paracentesis</b> کشیدن مایع ascites با سوزن است.`),
          M(`${e('<b>manometry</b>')} چه می‌سنجد؟`, ['فشار ماهیچه‌ها، مثلاً در مری', 'قند خون', 'خون مخفی', 'آنزیم کبد'], 'man/o (فشار) + -metry (اندازه‌گیری).'),
          M(`${e('<b>paracentesis</b>')} یعنی…`, ['کشیدن مایع شکم با سوزن', 'برش شکم', 'دیدن درون شکم', 'نمونه‌برداری کبد'], 'para- + -centesis.'),
          L('مرور سطح «آندوسکوپی، تصویربرداری و آزمایش»', recap(['EGD، esophagoscopy، gastroscopy • colonoscopy، sigmoidoscopy، proctoscopy • capsule endoscopy، laparoscopy', 'barium swallow (UGI) بالا و barium enema (BE) پایین', 'ERCP و PTC و MRCP برای مجاری صفرا؛ ultrasonography برای سنگ صفرا', 'LFT با ALT و AST • FOBT، stool culture، O&P • biopsy، manometry، paracentesis'])),
          B('برداشتن تکه کوچکی از بافت برای میکروسکوپ ___ است.', ['biopsy', 'manometry', 'lavage'], 'bi/o + -opsy.'),
          S('املای «کشیدن مایع شکم با سوزن» را بنویس', 'paracentesis', 'para- + -centesis.', 'para…'),
          N('ab:tx')
        ]
      },
      /* ================= سطح ۲: جراحی‌ها و دهانه‌ها ================= */
      {
        id: 'tx4', title: 'برداشتن‌ها', icon: '✂️', items: [
          L('‎-ectomy روی هر اندام', `${fig('ectomy-map')}${tbl([['جراحی', 'برداشتن'], [e('gastrectomy'), 'همه یا بخشی از معده'], [e('colectomy'), 'همه یا بخشی از کولون'], [e('esophagectomy'), 'بخشی از مری'], [e('cholecystectomy'), 'کیسه صفرا'], [e('hepatic lobectomy'), 'یک لوب کبد']])}`),
          M(`${e('<b>colectomy</b>')} یعنی…`, ['برداشتن همه یا بخشی از کولون', 'دهانه کولون روی پوست', 'برش کولون', 'دیدن درون کولون'], 'col/o + -ectomy.'),
          L('آپاندکتومی', `${fig(['appendectomy-img'], ['آپاندکتومی'])}<b>appendectomy</b> برداشتن آپاندیس ملتهب است: A آپاندیس بیمار، B جای برش و C برداشتن آن.`),
          T('appendectomy یعنی برداشتن آپاندیس.', true, 'append/o + -ectomy.'),
          L('کیسه صفرا با لاپاراسکوپ', `<b>laparoscopic cholecystectomy</b> کیسه صفرا را از چند برش کوچک با لاپاراسکوپ برمی‌دارد. گاهی مانند پرونده هدر، جراحی به روش باز (open) تبدیل می‌شود.${pearl('پس از برداشتن کیسه صفرا، صفرا مستقیم از کبد به دوازدهه می‌ریزد و بیمار می‌تواند زندگی عادی داشته باشد.')}`),
          L('برداشتن‌های کوچک‌تر', `${fig(['polyp-snare'], ['برداشتن پولیپ با حلقه سیمی'])}${tbl([['جراحی', 'برداشتن'], [e('polypectomy'), 'پولیپ؛ اغلب با حلقه سیمی در کولونوسکوپی'], [e('hemorrhoidectomy'), 'بواسیر'], [e('diverticulectomy'), 'دیورتیکول'], [e('glossectomy'), 'زبان'], [e('gingivectomy'), 'بخشی از لثه']])}`),
          P('هر جراحی را به معنی‌اش وصل کن', [['polypectomy', 'برداشتن پولیپ'], ['hemorrhoidectomy', 'برداشتن بواسیر'], ['glossectomy', 'برداشتن زبان'], ['esophagectomy', 'برداشتن مری']]),
          M('برداشتن یک لوب کبد…', ['hepatic lobectomy', 'hepatomegaly', 'hepatotomy', 'hepatoma'], 'lob/o + -ectomy.'),
          B('برداشتن کیسه صفرا ___ نام دارد.', ['cholecystectomy', 'cholecystitis', 'cholangiography'], 'cholecyst/o + -ectomy.'),
          S('املای «برداشتن پولیپ» را بنویس', 'polypectomy', 'polyp/o + -ectomy.', 'polyp…'),
          N('wb:tx')
        ]
      },
      {
        id: 'tx5', title: 'برش، ترمیم و سنگ‌شکنی', icon: '🔧', items: [
          L('برش‌ها', `${tbl([['جراحی', 'معنی'], [e('laparotomy'), 'برش دیواره شکم؛ exploratory laparotomy برای جست‌وجوی بیماری'], [e('choledochotomy'), 'برش مجرای صفراوی مشترک'], [e('choledocholithotomy'), 'برش مجرای مشترک برای درآوردن سنگ'], [e('vagotomy'), 'بریدن شاخه‌های عصب واگ برای کم کردن اسید']])}`),
          M(`${e('<b>choledocholithotomy</b>')} یعنی…`, ['برش مجرای صفراوی مشترک برای درآوردن سنگ', 'خرد کردن سنگ کیسه صفرا', 'برداشتن کیسه صفرا', 'سنگ در مجرای مشترک'], 'choledoch/o + lith/o + -tomy.'),
          M(`${e('<b>vagotomy</b>')} برای چیست؟`, ['کم کردن ترشح اسید معده', 'درمان سنگ صفرا', 'برداشتن آپاندیس', 'ترمیم فتق'], 'vag/o (عصب واگ) + -tomy.'),
          L('ترمیم‌ها', `${tbl([['جراحی', 'معنی'], [e('herniorrhaphy'), 'ترمیم فتق با بخیه؛ هم‌معنی hernioplasty'], [e('pyloroplasty'), 'گشاد کردن و ترمیم پیلور'], [e('palatoplasty'), 'ترمیم کام']])}${memo('‎-rrhaphy بخیه می‌زند، ‎-plasty ترمیم می‌کند، ‎-pexy ثابت می‌کند.')}`),
          P('هر جراحی را به معنی‌اش وصل کن', [['herniorrhaphy', 'ترمیم فتق'], ['pyloroplasty', 'ترمیم پیلور'], ['laparotomy', 'برش شکم'], ['vagotomy', 'بریدن عصب واگ']]),
          L('سنگ‌شکنی', `<b>lithotripsy</b> یعنی خرد کردن سنگ. در ESWL موج ضربه‌ای از بیرون بدن سنگ را خرد می‌کند. ${e('cholelithotripsy')} یعنی خرد کردن سنگ صفرا.${vs(['-tripsy', 'خرد کردن سنگ'], ['-tomy', 'برش برای درآوردن سنگ'])}`),
          M(`${e('<b>ESWL</b>')} یعنی…`, ['سنگ‌شکنی با موج ضربه‌ای از بیرون بدن', 'برداشتن سنگ با برش', 'آندوسکوپی مجاری صفرا', 'عکس رنگی مجاری'], 'extracorporeal shock wave lithotripsy.'),
          T('lithotripsy یعنی برش برای بیرون آوردن سنگ.', false, 'نادرست؛ ‎-tripsy خرد کردن است. برش lithotomy است.'),
          B('ترمیم فتق با بخیه ___ است.', ['herniorrhaphy', 'herniotomy', 'hernia'], 'herni/o + -rrhaphy.'),
          W('واژه‌ای بساز به معنی «برش مجرای صفراوی مشترک»', ['choledoch/o', '-tomy'], ['-ectomy', 'cholecyst/o', '-tripsy'], 'choledoch/o + -tomy = choledochotomy.'),
          S('املای «سنگ‌شکنی» را بنویس', 'lithotripsy', 'lith/o + -tripsy.', 'litho…'),
          N('r2m:tx')
        ]
      },
      {
        id: 'tx6', title: 'استومی و آناستوموز', icon: '🔗', items: [
          L('دهانه روی پوست', `<b>ostomy</b> دهانه‌ای است که جراح از یک اندام به دیواره شکم می‌سازد و <b>stoma</b> (به یونانی «دهان») خود دهانه روی پوست است. مدفوع در کیسه جمع می‌شود.${fig(['ostomy-sites'], ['A کولوستومی سیگموئید، B کولوستومی عرضی، C ایلئوستومی'])}`),
          M(`${e('<b>stoma</b>')} چیست؟`, ['دهانه جراحی روی پوست شکم', 'کیسه جمع‌آوری مدفوع', 'بخشی از معده', 'التهاب دهان'], 'stoma = mouth.'),
          L('نام هر استومی', `${fig(['ostomy-names'], ['نام استومی‌ها'])}نام کولوستومی از بخشی است که به پوست وصل شده و چهار نوع دارد: ascending، transverse، descending و sigmoid colostomy. همین‌طور ${e('ileostomy')} از ایلئوم، ${e('jejunostomy')} از ژژونوم و ${e('gastrostomy')} از معده است.`),
          P('هر استومی را به اندامش وصل کن', [['ileostomy', 'ایلئوم'], ['colostomy', 'کولون'], ['gastrostomy', 'معده'], ['jejunostomy', 'ژژونوم']]),
          T('در ایلئوستومی مدفوع شل‌تر از کولوستومی سیگموئید است.', true, 'هرچه دهانه بالاتر باشد آب کمتری جذب شده است.'),
          L('اتصال دو اندام', `<b>anastomosis</b> با جمع anastomoses اتصال جراحی دو اندام توخالی است و در نامش هر دو ریشه می‌آید:${tbl([['جراحی', 'اتصال'], [e('gastroduodenostomy'), 'معده به دوازدهه'], [e('gastrojejunostomy'), 'معده به ژژونوم'], [e('gastroenterostomy'), 'معده به روده'], [e('coloproctostomy'), 'کولون به رکتوم']])}`),
          M(`${e('<b>coloproctostomy</b>')} یعنی…`, ['اتصال کولون به رکتوم', 'دهانه کولون روی پوست', 'برداشتن کولون و رکتوم', 'ترمیم رکتوم'], 'col/o + proct/o + -stomy.'),
          M('کدام یک آناستوموز است؟', ['gastrojejunostomy', 'ileostomy', 'colostomy', 'gastrostomy'], 'دو ریشه = دو اندام به هم.'),
          L('مرور سطح «جراحی‌ها و دهانه‌ها»', recap(['‎-ectomy: gastrectomy، colectomy، cholecystectomy، appendectomy، polypectomy، hemorrhoidectomy', '‎-tomy: laparotomy، choledochotomy، vagotomy • ‎-rrhaphy و ‎-plasty: herniorrhaphy، pyloroplasty', 'lithotripsy و ESWL خرد کردن سنگ', 'ostomy و stoma: ileostomy، colostomy، gastrostomy • anastomosis: gastrojejunostomy، coloproctostomy'])),
          B('دهانه کولون روی دیواره شکم ___ است.', ['colostomy', 'colectomy', 'colotomy'], 'col/o + -stomy.'),
          S('املای «ایلئوستومی» را بنویس', 'ileostomy', 'ile/o + -stomy.', 'ileo…'),
          N('f2t:tx')
        ]
      },
      /* ================= سطح ۳: لوله‌ها، تغذیه و داروها ================= */
      {
        id: 'tx7', title: 'بیلروت و جراحی چاقی', icon: '🍽️', items: [
          L('بیلروت یک و دو', `${fig('billroth')}پس از برداشتن بخش پایینی معده (مثلاً برای زخم یا سرطان)، معده باید دوباره به روده وصل شود: در <b>Billroth I</b> به دوازدهه و در <b>Billroth II</b> به ژژونوم.`),
          M(`${e('<b>Billroth II</b>')} کدام آناستوموز است؟`, ['gastrojejunostomy', 'gastroduodenostomy', 'coloproctostomy', 'ileostomy'], 'معده به ژژونوم.'),
          L('شکل بیلروت دو', `${fig(['billroth-img'], ['بیلروت دو'])}در شکل خط‌چین بخش برداشته‌شده معده را نشان می‌دهد و ژژونوم به باقی‌مانده معده وصل شده است.`),
          T('در Billroth I معده به دوازدهه وصل می‌شود.', true, 'gastroduodenostomy.'),
          L('جراحی چاقی', `${fig(['bariatric-img'], ['A معده باندشده، B بای‌پس معده'])}<b>bariatric surgery</b> (bar/o = وزن) برای چاقی شدید است: <b>gastric banding</b> (Lap-Band) با یک حلقه بالای معده را کوچک می‌کند و <b>gastric bypass</b> کیسه کوچکی از معده را به ژژونوم وصل می‌کند.`),
          L('بای‌پس معده', `${fig(['gastric-bypass'], ['بای‌پس معده'])}در gastric bypass غذا از بیشتر معده و دوازدهه نمی‌گذرد؛ پس هم کمتر خورده و هم کمتر جذب می‌شود.${pearl('پس از بای‌پس، جذب ویتامین B12 و آهن کم می‌شود و بیمار مکمل لازم دارد.')}`),
          P('هر جراحی را به ویژگی‌اش وصل کن', [['gastric banding', 'حلقه قابل تنظیم بالای معده'], ['gastric bypass', 'کیسه کوچک معده به ژژونوم'], ['Billroth I', 'معده به دوازدهه'], ['Billroth II', 'معده به ژژونوم']]),
          M(`${e('<b>bariatric</b>')} یعنی مربوط به درمان…`, ['چاقی (وزن)', 'سنگ صفرا', 'زخم معده', 'بواسیر'], 'bar/o + -iatric.'),
          B('جراحی‌های درمان چاقی شدید را ___ می‌نامند.', ['bariatric surgery', 'Billroth I', 'vagotomy'], 'bar/o = وزن.'),
          S('املای «جراحی چاقی» (صفت) را بنویس', 'bariatric', 'bar/o + -iatric.', 'bari…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx8', title: 'لوله‌ها و تغذیه', icon: '🧴', items: [
          L('وقتی بیمار نمی‌تواند بخورد', `${fig('tubes')}<b>nasogastric tube</b> (NG tube) از بینی به معده می‌رود: برای تغذیه (<b>gavage</b>)، شست‌وشو (<b>lavage</b>) یا تخلیه معده.`),
          L('لوله NG در عکس', `${fig(['ng-xray'], ['لوله NG در رادیوگرافی'])}پیش از هر بار تغذیه با لوله NG، جای آن با رادیوگرافی یا آزمایش ترشح معده بررسی می‌شود تا مطمئن شوند در ریه نیست.`),
          M(`${e('<b>gavage</b>')} یعنی…`, ['تغذیه مایع از راه لوله به معده', 'شست‌وشوی معده', 'تخلیه مثانه', 'تنقیه'], 'gavage = feeding.'),
          M(`${e('<b>lavage</b>')} یعنی…`, ['شست‌وشوی معده از راه لوله', 'تغذیه با لوله', 'برش معده', 'سنگ‌شکنی'], 'lavage = washing out.'),
          L('PEG و TPN', `${fig(['peg-img'], ['لوله PEG'])}<b>PEG tube</b> با کمک آندوسکوپ از پوست شکم به معده گذاشته می‌شود؛ برای تغذیه طولانی. در <b>TPN</b> همه غذای بیمار از راه سیاهرگ داده می‌شود و لوله گوارش دور زده می‌شود (hyperalimentation).`),
          P('هر روش را به ویژگی‌اش وصل کن', [['NG tube', 'از بینی به معده'], ['PEG tube', 'از پوست به معده با آندوسکوپ'], ['TPN', 'تغذیه کامل از سیاهرگ'], ['enema', 'مایع از راه رکتوم']]),
          L('NPO و تنقیه', `<b>NPO</b> (nil per os) یعنی هیچ چیز از راه دهان؛ پیش از جراحی و آندوسکوپی نوشته می‌شود. <b>enema</b> مایعی است که از راه رکتوم برای پاک کردن روده یا دادن دارو وارد می‌شود.${vs(['po', 'از راه دهان'], ['NPO', 'هیچ چیز از راه دهان'])}`),
          T('TPN یعنی تغذیه از راه لوله بینی‌معدی.', false, 'نادرست؛ TPN تغذیه کامل وریدی است.'),
          B('دستور «هیچ چیز از راه دهان» پیش از عمل ___ است.', ['NPO', 'PO', 'PEG'], 'nil per os.'),
          S('املای «لاواژ» را بنویس', 'lavage', 'lavage = washing.', 'lav…'),
          N('ab:tx')
        ]
      },
      {
        id: 'tx9', title: 'داروهای گوارش', icon: '💊', items: [
          L('کم کردن اسید', `${fig('acid-drugs')}<b>antacid</b> اسید ساخته‌شده را خنثی می‌کند؛ <b>H2 blocker</b> (H2 antagonist) گیرنده هیستامین را می‌بندد و <b>PPI</b> (proton pump inhibitor) پمپ اسید سلول را مهار می‌کند. برای GERD و زخم پپتیک به کار می‌روند.`),
          M(`${e('<b>PPI</b>')} یعنی…`, ['proton pump inhibitor', 'pancreatic protein inhibitor', 'peptic pain index', 'post-prandial insulin'], 'مثل omeprazole.'),
          P('هر دارو را به کارش وصل کن', [['antacid', 'خنثی کردن اسید'], ['H2 blocker', 'بستن گیرنده H2'], ['PPI', 'مهار پمپ پروتون']]),
          L('داروهای دوتایی', `${fig('drug-pairs')}<b>emetic</b> استفراغ می‌آورد و <b>antiemetic</b> جلوی تهوع و استفراغ را می‌گیرد. <b>laxative</b> (ملین) دفع را آسان می‌کند و <b>cathartic</b> مسهل قوی است؛ <b>antidiarrheal</b> اسهال را درمان می‌کند.`),
          M('بیمار پس از شیمی‌درمانی تهوع شدید دارد. کدام دسته؟', ['antiemetic', 'emetic', 'laxative', 'antacid'], 'anti- + emetic.'),
          T('emetic داروی ضداستفراغ است.', false, 'نادرست؛ emetic استفراغ می‌آورد؛ ضداستفراغ antiemetic است.'),
          L('گاز و گرفتگی', `${e('antiflatulent')} مثل simethicone گاز را کم می‌کند، ${e('antispasmodic')} گرفتگی ماهیچه روده را آرام می‌کند و ${e('stool softener')} مدفوع را نرم می‌کند.${pearl('PONV یعنی تهوع و استفراغ پس از عمل؛ معمولاً با antiemetic پیشگیری می‌شود.')}`),
          P('هر دارو را به کارش وصل کن', [['laxative', 'آسان کردن دفع'], ['antidiarrheal', 'درمان اسهال'], ['antiflatulent', 'کم کردن گاز'], ['antispasmodic', 'آرام کردن گرفتگی روده']]),
          M(`${e('<b>PONV</b>')} یعنی…`, ['تهوع و استفراغ پس از عمل', 'درد پس از غذا', 'خون‌ریزی پس از عمل', 'یبوست پس از عمل'], 'postoperative nausea and vomiting.'),
          L('مرور سطح «لوله‌ها، تغذیه و داروها»', recap(['Billroth I به دوازدهه و Billroth II به ژژونوم • bariatric: gastric banding و gastric bypass', 'NG tube: gavage تغذیه و lavage شست‌وشو • PEG از پوست • TPN از سیاهرگ • NPO', 'antacid خنثی • H2 blocker و PPI کاهنده اسید', 'emetic و antiemetic • laxative، cathartic و antidiarrheal • antiflatulent، antispasmodic، stool softener'])),
          B('دارویی که اسید ساخته‌شده معده را خنثی می‌کند ___ است.', ['antacid', 'antiemetic', 'laxative'], 'ant- + acid.'),
          S('املای «ضدتهوع و ضداستفراغ» را بنویس', 'antiemetic', 'anti- + -emetic.', 'antie…'),
          N('wb:tx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* گوارا — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: 'ریشه‌چین', title: 'شکننده واژه‌های گوارش', shape: 'puzzle', color: '#748FFC', acc: ['sparkle'], bio: 'هر واژه گوارشی را تکه‌تکه می‌کند: gastr/o معده، enter/o روده، hepat/o کبد و cholecyst/o کیسه صفرا؛ و معنی را از پسوند شروع می‌کند.' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'پسوندنامه', title: 'دفتر پسوندهای علامت', shape: 'book', color: '#5C7CFA', acc: ['glasses'], bio: '‎-emesis استفراغ، ‎-pepsia هضم، ‎-phagia بلع، ‎-prandial وعده غذا و ‎-lithiasis سنگ را از بر است.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'وای‌وصل', title: 'استاد نام‌گذاری اتصال‌ها', shape: 'yab', color: '#4C6EF5', acc: ['crown'], bio: 'می‌داند در anastomosis نام هر دو اندام می‌آید (gastrojejunostomy) و جمع diverticulum می‌شود diverticula.' },
    { id: 'mo-0', w: 'mo', lv: 0, name: 'دندونی', title: 'نگهبان دهان', shape: 'tooth', color: '#FFF8EC', acc: ['sparkle'], bio: 'incisor می‌بُرد، canine پاره می‌کند و molar آسیاب می‌کند؛ بیست دندان شیری و سی‌ودو دندان دائمی را می‌شمارد.' },
    { id: 'mo-1', w: 'mo', lv: 1, name: 'بزاقک', title: 'قطره بزاق', shape: 'drop', color: '#74C0FC', acc: ['glasses'], bio: 'از parotid، submandibular و sublingual می‌آید، لقمه (bolus) را خیس می‌کند و می‌داند peristalsis آن را تا معده می‌برد.' },
    { id: 'mo-2', w: 'mo', lv: 2, name: 'معده‌جان', title: 'آسیاب اسیدی', shape: 'stomach', color: '#FF8787', acc: ['crown'], bio: 'cardia، fundus، body، antrum و pylorus را می‌شناسد؛ با HCl و pepsin غذا را به chyme تبدیل می‌کند.' },
    { id: 'bw-0', w: 'bw', lv: 0, name: 'پرزک', title: 'جاذب روده باریک', shape: 'gut', color: '#FFA8A8', acc: ['sparkle'], bio: 'duodenum، jejunum و ileum را به ترتیب می‌گوید و با villi و lacteal غذای هضم‌شده را جذب می‌کند.' },
    { id: 'bw-1', w: 'bw', lv: 1, name: 'ربع‌یاب', title: 'نقشه‌خوان شکم', shape: 'compass', color: '#51CF66', acc: ['glasses'], bio: 'RUQ و LLQ را پیدا می‌کند، hepatic flexure را از splenic flexure جدا می‌کند و می‌داند appendix در ربع راست پایین است.' },
    { id: 'bw-2', w: 'bw', lv: 2, name: 'جگرک', title: 'کارخانه صفرا', shape: 'liver', color: '#C0504D', acc: ['crown'], bio: 'صفرا را می‌سازد و از hepatic duct و cystic duct به common bile duct می‌فرستد؛ دوستش pancreas آنزیم amylase و lipase می‌دهد.' },
    { id: 'up-0', w: 'up', lv: 0, name: 'تهوعی', title: 'شناسای علامت‌ها', shape: 'cloud', color: '#A9E34B', acc: ['sparkle'], bio: 'nausea، emesis، dyspepsia، dysphagia و eructation را از هم جدا می‌کند و می‌داند hematemesis یعنی استفراغ خون.' },
    { id: 'up-1', w: 'up', lv: 1, name: 'لثه‌بان', title: 'نگهبان دهان و لثه', shape: 'shield', color: '#F783AC', acc: ['glasses'], bio: 'caries، gingivitis، periodontitis، aphthous ulcer و thrush را می‌شناسد و می‌داند leukoplakia ضایعه پیش‌سرطانی است.' },
    { id: 'up-2', w: 'up', lv: 2, name: 'پیلوری', title: 'باکتری زخم معده', shape: 'bacillus', color: '#E64980', acc: ['crown'], bio: 'خودش H. pylori است و علت اصلی peptic ulcer؛ GERD، Barrett esophagus و hiatal hernia را هم خوب می‌شناسد.' },
    { id: 'lo-0', w: 'lo', lv: 0, name: 'التهابک', title: 'شناسای بیماری‌های روده', shape: 'flame', color: '#B197FC', acc: ['sparkle'], bio: 'Crohn و ulcerative colitis را از IBS جدا می‌کند، celiac را با gluten می‌شناسد و diverticulosis را با diverticulitis قاطی نمی‌کند.' },
    { id: 'lo-1', w: 'lo', lv: 1, name: 'گره‌ای', title: 'استاد انسداد روده', shape: 'blob', color: '#9775FA', acc: ['glasses'], bio: 'volvulus پیچ‌خوردگی است، intussusception تلسکوپی شدن و ileus توقف حرکت روده؛ hemorrhoids و fistula را هم می‌شناسد.' },
    { id: 'lo-2', w: 'lo', lv: 2, name: 'سنگک', title: 'کارآگاه کبد و صفرا', shape: 'gall', color: '#69DB7C', acc: ['crown'], bio: 'cholelithiasis و choledocholithiasis را از هم جدا می‌کند، پنج نوع hepatitis را می‌شناسد و می‌داند cirrhosis به ascites می‌رسد.' },
    { id: 'tx-0', w: 'tx', lv: 0, name: 'آندوسکوپ', title: 'چشم درون لوله', shape: 'scope', color: '#3BC9DB', acc: ['sparkle'], bio: 'EGD، colonoscopy، sigmoidoscopy و ERCP را انجام می‌دهد و می‌داند barium swallow تصویر مری و معده است.' },
    { id: 'tx-1', w: 'tx', lv: 1, name: 'دستکش جراح', title: 'استاد جراحی گوارش', shape: 'glove', color: '#15AABF', acc: ['glasses'], bio: 'appendectomy، cholecystectomy، colostomy و gastrojejunostomy را می‌شناسد و Billroth I را از Billroth II جدا می‌کند.' },
    { id: 'tx-2', w: 'tx', lv: 2, name: 'کپسولک', title: 'داروساز گوارش', shape: 'capsule', color: '#1098AD', acc: ['crown'], bio: 'antacid، PPI، H2 blocker، antiemetic، laxative و antidiarrheal را می‌شناسد و NG، PEG و TPN را از هم جدا می‌کند.' }
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
      id: 'r1', w: 'lx', title: 'گزارش خون‌ریزی رکتوم', who: 'آقای ۵۰ ساله با خون در مدفوع',
      brief: 'گزارش سیگموئیدوسکوپی آقای امینی پر از واژه‌های ترکیبی است. در سابقه‌اش regional enteritis، آپاندیسیت و ileostomy آمده است. هر واژه را به ریشه و پسوند بشکن.',
      chart: [['شکایت‌هایی که ندارد', 'dysphagia، postprandial distress، hematemesis'], ['سابقه', 'enteritis؛ ileostomy و appendectomy'], ['معاینه', 'sigmoidoscopy؛ ناحیه anorectal سالم'], ['برداشت', 'polyp یا diverticulum خون‌ریزی‌دهنده']],
      fig: { a: ['wordparts'], l: ['ریشه + پسوند'] },
      steps: [
        M('علامت', 'dysphagia یعنی…', ['سختی بلع', 'سختی گفتار', 'سوءهاضمه', 'استفراغ خون'], 'dys- (دشوار) + -phagia (بلع). با dysphasia (گفتار) قاطی نکن.'),
        M('علامت', 'postprandial یعنی…', ['پس از غذا', 'پیش از غذا', 'هنگام خواب', 'پس از دفع'], 'post- (پس از) + -prandial (وعده غذا).'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['hematemesis', 'استفراغ خون'], ['enteritis', 'التهاب روده'], ['ileostomy', 'دهانه ایلئوم روی پوست'], ['appendectomy', 'برداشتن آپاندیس']]),
        M('معاینه', 'anorectal یعنی مربوط به…', ['مقعد و رکتوم', 'معده و روده', 'مری و معده', 'کبد و صفرا'], 'an/o (مقعد) + rect/o (رکتوم) + -al.'),
        T('جمع', 'جمع diverticulum می‌شود diverticula.', true, '-um → -a.'),
        S('املا', 'املای «دیدن درون کولون سیگموئید» را بنویس', 'sigmoidoscopy', 'sigmoid/o + -scopy.', 'sigmoido…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: 'پرونده یک نوجوان', who: 'دختر ۱۵ ساله، مرور سوابق',
      brief: 'ستاره پرونده پزشکی‌اش را می‌خواند و واژه‌ها را نمی‌فهمد: proctitis، colitis، colectomy جزئی و anoplasty. به زبان ساده برایش توضیح بده.',
      chart: [['بیماری‌های گذشته', 'proctitis؛ colitis'], ['جراحی‌ها', 'partial colectomy؛ anoplasty'], ['شکایت فعلی', 'ندارد'], ['پیگیری', 'colonoscopy سالانه']],
      fig: { a: ['tract-roots'], l: ['ریشه‌های لوله گوارش'] },
      steps: [
        M('ریشه', 'proctitis یعنی التهاب…', ['رکتوم و مقعد', 'پروستات', 'کولون', 'پانکراس'], 'proct/o = رکتوم و مقعد؛ با prostat/o (پروستات) قاطی نکن.'),
        M('ریشه', 'colitis یعنی التهاب…', ['کولون', 'کیسه صفرا', 'صفرا', 'گردن'], 'col/o + -itis. صفرا chol/e است.'),
        P('پسوند', 'هر واژه را به معنی‌اش وصل کن', [['colectomy', 'برداشتن کولون'], ['colotomy', 'برش کولون'], ['colostomy', 'دهانه کولون روی پوست'], ['anoplasty', 'ترمیم مقعد']]),
        T('پسوند', 'partial colectomy یعنی برداشتن بخشی از کولون.', true, 'partial = بخشی؛ -ectomy = برداشتن.'),
        M('پیگیری', 'colonoscopy یعنی…', ['دیدن درون کولون با آندوسکوپ', 'عکس رنگی کولون', 'برداشتن کولون', 'ترمیم کولون'], 'colon/o + -scopy.'),
        S('املا', 'املای «ترمیم مقعد» را بنویس', 'anoplasty', 'an/o + -plasty.', 'ano…')
      ]
    },
    /* ================= دهان تا معده ================= */
    {
      id: 'r3', w: 'mo', title: 'معاینه دوره‌ای دندان', who: 'خانم ۲۲ ساله برای جرم‌گیری',
      brief: 'بهداشتکار دندان پس از جرم‌گیری، تورم کمی کنار دندان آسیای سوم پایین چپ دیده است. رادیوگرافی پوسیدگی همان دندان را نشان می‌دهد.',
      chart: [['کار انجام‌شده', 'برداشتن calculus، plaque و لکه‌ها'], ['لثه', 'gingivae صورتی؛ gingivitis ندارد'], ['رادیوگرافی', 'dental caries در third molar'], ['برنامه', 'amoxicillin 500 mg po TID × 10 days']],
      fig: { a: ['molar-img', 'tooth-decay'], l: ['ساختار دندان', 'پوسیدگی'] },
      steps: [
        M('دندان', 'third molar همان…', ['دندان عقل', 'دندان نیش', 'دندان پیش', 'دندان شیری'], 'آسیای سوم آخرین دندان دائمی است و حدود ۱۷ سالگی درمی‌آید.'),
        M('بیماری', 'dental caries یعنی…', ['پوسیدگی دندان', 'التهاب لثه', 'جرم دندان', 'دندان‌قروچه'], 'caries یعنی پوسیدگی؛ اسید باکتری‌های پلاک مینا را می‌خورد.'),
        T('لثه', 'جمع gingiva می‌شود gingivae.', true, '-a → -ae.'),
        O('پوسیدگی', 'پیشروی پوسیدگی را از سطح به عمق مرتب کن', ['plaque روی دندان', 'پوسیدگی enamel', 'رسیدن به dentin', 'عفونت pulp و آبسه'], 'از بیرون به درون: مینا، عاج، پالپ.'),
        M('نسخه', 'po در نسخه یعنی…', ['از راه دهان', 'پس از غذا', 'هر وقت لازم شد', 'زیر زبان'], 'per os = by mouth.'),
        S('املا', 'املای «التهاب لثه» را بنویس', 'gingivitis', 'gingiv/o + -itis.', 'gingi…')
      ]
    },
    {
      id: 'r4', w: 'mo', title: 'معده‌درد پس از غذا', who: 'آقای ۱۹ ساله با سوءهاضمه',
      brief: 'تام در کلینیک می‌گوید «معده‌ام به‌هم ریخته، غذا سخت پایین می‌رود و اسهال دارم.» پزشک می‌خواهد مسیر غذا را برایش توضیح دهد.',
      chart: [['شکایت ۱', 'dyspepsia'], ['شکایت ۲', 'dysphagia'], ['شکایت ۳', 'diarrhea'], ['معاینه شکم', 'epigastric tenderness']],
      fig: { a: ['gi-tract'], l: ['مسیر غذا'] },
      steps: [
        O('مسیر', 'مسیر غذا را از دهان مرتب کن', ['oral cavity', 'pharynx', 'esophagus', 'stomach', 'small intestine', 'large intestine'], 'دهان، حلق، مری، معده، روده باریک، روده بزرگ.'),
        M('حرکت', 'حرکت موجی و غیرارادی که غذا را جلو می‌برد…', ['peristalsis', 'mastication', 'deglutition', 'regurgitation'], 'peristalsis = حرکت دودی.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['dyspepsia', 'سوءهاضمه'], ['dysphagia', 'سختی بلع'], ['mastication', 'جویدن'], ['deglutition', 'بلع']]),
        M('ناحیه', 'epigastric یعنی…', ['بالای معده؛ سر دل', 'زیر معده', 'اطراف ناف', 'کشاله ران'], 'epi- (روی، بالا) + gastr/o + -ic.'),
        T('اسفنکتر', 'اسفنکتر میان مری و معده LES نام دارد و جلوی برگشت اسید را می‌گیرد.', true, 'lower esophageal sphincter = cardiac sphincter.'),
        S('املا', 'املای «مری» را بنویس', 'esophagus', 'esophag/o + -us.', 'esoph…')
      ]
    },
    /* ================= روده‌ها و اندام‌های کمکی ================= */
    {
      id: 'r5', w: 'bw', title: 'درد پهلوی راست', who: 'خانم ۱۸ ساله در اورژانس',
      brief: 'جنیفر پهلوی راستش را گرفته و از درد به خود می‌پیچد. پرستار به التهاب کیسه صفرا شک دارد ولی پزشک می‌گوید باید همه اندام‌های آن ربع را در نظر گرفت.',
      chart: [['محل درد', 'RUQ'], ['شکایت', 'nausea پس از غذای چرب'], ['تشخیص احتمالی', 'acute cholecystitis'], ['آزمون پیشنهادی', 'abdominal ultrasonography']],
      fig: { a: ['quadrants', 'bile-flow'], l: ['ربع‌های شکم', 'مسیر صفرا'] },
      steps: [
        M('ربع', 'RUQ یعنی…', ['ربع راست بالای شکم', 'ربع چپ بالای شکم', 'ربع راست پایین', 'ناحیه ناف'], 'right upper quadrant.'),
        M('اندام', 'کدام اندام در RUQ است؟', ['کبد و کیسه صفرا', 'طحال', 'کولون سیگموئید', 'آپاندیس'], 'کبد و کیسه صفرا در ربع راست بالا هستند.'),
        O('صفرا', 'مسیر صفرا را مرتب کن', ['liver', 'hepatic duct', 'common bile duct', 'duodenum'], 'کبد صفرا را می‌سازد و از مجرای کبدی و مجرای مشترک به دوازدهه می‌ریزد.'),
        T('کیسه صفرا', 'کیسه صفرا صفرا را می‌سازد.', false, 'نادرست؛ کبد می‌سازد، کیسه صفرا ذخیره و غلیظ می‌کند.'),
        M('واژه', 'cholecystitis یعنی…', ['التهاب کیسه صفرا', 'سنگ کیسه صفرا', 'برداشتن کیسه صفرا', 'التهاب کبد'], 'cholecyst/o + -itis.'),
        S('املا', 'املای «کیسه صفرا» را بنویس', 'gallbladder', 'gall + bladder؛ یک واژه.', 'gall…')
      ]
    },
    {
      id: 'r6', w: 'bw', title: 'دردی که پایین آمد', who: 'پسر ۱۲ ساله با درد شکم',
      brief: 'درد آرش از دور ناف شروع شد و چند ساعت بعد به پایین و راست شکم رفت. تب خفیف و بی‌اشتهایی دارد. پزشک نقشه روده بزرگ را می‌کشد.',
      chart: [['شروع درد', 'umbilical region'], ['محل فعلی', 'RLQ'], ['علائم', 'anorexia، nausea، تب خفیف'], ['خطر', 'peritonitis اگر آپاندیس پاره شود']],
      fig: { a: ['colon-map'], l: ['روده بزرگ'] },
      steps: [
        M('ناحیه', 'umbilical region یعنی ناحیه…', ['اطراف ناف', 'سر دل', 'کشاله ران', 'زیر دنده‌ها'], 'umbilic/o = ناف.'),
        M('اندام', 'آپاندیس به کدام بخش روده بزرگ چسبیده است؟', ['cecum', 'sigmoid colon', 'rectum', 'transverse colon'], 'آپاندیس از سکوم آویزان است، در RLQ.'),
        O('روده بزرگ', 'بخش‌های روده بزرگ را از آغاز مرتب کن', ['cecum', 'ascending colon', 'transverse colon', 'descending colon', 'sigmoid colon', 'rectum'], 'سکوم، بالارو، عرضی، پایین‌رو، سیگموئید، رکتوم.'),
        M('صفاق', 'peritonitis یعنی التهاب…', ['صفاق؛ پرده پوشاننده حفره شکم', 'روده باریک', 'کبد', 'پانکراس'], 'peritone/o + -itis.'),
        T('دریچه', 'ileocecal valve میان ایلئوم و سکوم است.', true, 'ile/o + cec/o + -al.'),
        S('املا', 'املای «التهاب آپاندیس» را بنویس', 'appendicitis', 'appendic/o + -itis.', 'append…')
      ]
    },
    /* ================= دهان، مری و معده ================= */
    {
      id: 'r7', w: 'up', title: 'سوزش سر دل', who: 'آقای ۵۱ ساله با ریفلاکس',
      brief: 'آبه سال‌ها سوزش سر دل داشته و خودش antacid و H2 blocker مصرف می‌کرد. EGD التهاب مری نشان داد، ولی PPI را منظم نخورد. در EGD دوم esophagitis متوسط و یک hiatal hernia کوچک دیده شد.',
      chart: [['شکایت', 'heartburn؛ regurgitation'], ['EGD اول', 'erosive esophagitis'], ['EGD دوم', 'small hiatal hernia'], ['درمان', 'PPI 40 mg روزانه']],
      fig: { a: ['gerd-chain', 'hiatal-img'], l: ['زنجیره GERD', 'فتق هیاتال'] },
      steps: [
        M('تشخیص', 'GERD یعنی…', ['بیماری ریفلاکس معده به مری', 'زخم دوازدهه', 'التهاب معده و روده', 'تنگی پیلور'], 'gastroesophageal reflux disease.'),
        M('علامت', 'نام دیگر heartburn…', ['pyrosis', 'eructation', 'flatus', 'emesis'], 'pyr/o = آتش؛ سوزش پشت جناغ.'),
        M('آزمون', 'EGD یعنی دیدن درون…', ['مری، معده و دوازدهه', 'کولون', 'مجاری صفرا', 'رکتوم و مقعد'], 'esophagogastroduodenoscopy.'),
        P('دارو', 'هر دارو را به کارش وصل کن', [['antacid', 'اسید ساخته‌شده را خنثی می‌کند'], ['H2 blocker', 'گیرنده H2 را می‌بندد'], ['PPI', 'پمپ پروتون را مهار می‌کند']]),
        T('فتق', 'در hiatal hernia بخشی از معده از سوراخ دیافراگم به قفسه سینه می‌رود.', true, 'hiatus = دهانه مری در دیافراگم.'),
        S('املا', 'املای «التهاب مری» را بنویس', 'esophagitis', 'esophag/o + -itis.', 'esophag…')
      ]
    },
    {
      id: 'r8', w: 'up', title: 'مدفوع سیاه', who: 'آقای ۵۶ ساله با درد سر دل',
      brief: 'آقای رضایی سال‌ها dyspepsia داشته و با antacid بهتر می‌شد. دو هفته است درد بدتر شده و مدفوعش سیاه و قیری است. CBC کم‌خونی نشان می‌دهد.',
      chart: [['علامت', 'melena؛ epigastric pain'], ['آزمایش', 'FOBT مثبت؛ H. pylori مثبت'], ['گاستروسکوپی', 'gastric ulcer ۱٫۵ سانتی در حال خون‌ریزی'], ['پیشنهاد', 'partial gastrectomy']],
      fig: { a: ['peptic-img', 'ulcer-depth'], l: ['زخم‌های پپتیک', 'عمق زخم'] },
      steps: [
        M('علامت', 'melena یعنی…', ['مدفوع سیاه و قیری با خون هضم‌شده', 'خون قرمز روشن در مدفوع', 'مدفوع چرب', 'استفراغ خون'], 'melan/o = سیاه؛ نشانه خون‌ریزی گوارش بالا.'),
        M('علت', 'کدام باکتری علت اصلی زخم پپتیک است؟', ['Helicobacter pylori', 'Candida', 'Escherichia coli', 'Streptococcus'], 'H. pylori دیواره معده را عفونی می‌کند.'),
        M('آزمایش', 'FOBT برای چیست؟', ['یافتن خون مخفی در مدفوع', 'شمارش گلبول‌ها', 'دیدن انگل', 'سنجش آنزیم کبد'], 'fecal occult blood test.'),
        T('زخم', 'peptic ulcer فقط در معده رخ می‌دهد.', false, 'نادرست؛ در مری، معده یا دوازدهه هم رخ می‌دهد.'),
        M('جراحی', 'gastrectomy یعنی…', ['برداشتن بخشی یا همه معده', 'برش معده', 'دهانه معده روی پوست', 'دیدن درون معده'], 'gastr/o + -ectomy.'),
        S('املا', 'املای «دیدن درون معده» را بنویس', 'gastroscopy', 'gastr/o + -scopy.', 'gastro…')
      ]
    },
    /* ================= روده، کبد و صفرا ================= */
    {
      id: 'r9', w: 'lo', title: 'اسهال مزمن', who: 'آقای ۲۴ ساله با اسهال موکوسی',
      brief: 'سم چند ماه است اسهال موکوسی، سوءهاضمه و آفت دهان دارد. تنقیه باریم نامنظمی‌هایی نشان داد و پزشک اول به IBS شک کرد. در کولونوسکوپی ضایعه‌های زخمی گرانولوماتوز دیده شد.',
      chart: [['علائم', 'mucoid stools، dyspepsia، aphthous ulcers'], ['BE', 'نامنظمی دیواره روده'], ['کولونوسکوپی', 'granulomatous ulcerated lesions'], ['برداشت', 'IBD؛ نمونه‌برداری']],
      fig: { a: ['ibd-compare', 'crohn-img'], l: ['کرون و کولیت', 'کرون'] },
      steps: [
        M('اختصار', 'BE در این پرونده یعنی…', ['barium enema', 'bowel elimination', 'bile excretion', 'below elbow'], 'barium enema: عکس رنگی کولون با باریم از راه رکتوم.'),
        M('تشخیص', 'IBD شامل کدام دو بیماری است؟', ['Crohn disease و ulcerative colitis', 'IBS و celiac', 'GERD و Barrett', 'diverticulosis و hemorrhoids'], 'inflammatory bowel disease.'),
        T('IBS', 'در IBS دیواره روده زخم و آسیب دیدنی دارد.', false, 'نادرست؛ IBS اختلال کارکردی است و آسیب دیدنی ندارد.'),
        P('مقایسه', 'هر ویژگی را به بیماری‌اش وصل کن', [['تکه‌تکه، هر جای لوله گوارش', 'Crohn disease'], ['پیوسته، فقط کولون و رکتوم', 'ulcerative colitis'], ['بدون آسیب دیدنی', 'IBS']]),
        M('علامت', 'aphthous ulcer یعنی…', ['آفت؛ زخم کوچک دردناک دهان', 'زخم معده', 'ترک گوشه لب', 'لکه سفید پیش‌سرطانی'], 'canker sore.'),
        S('املا', 'املای «دیدن درون کولون» را بنویس', 'colonoscopy', 'colon/o + -scopy.', 'colono…')
      ]
    },
    {
      id: 'r10', w: 'lo', title: 'زردی پس از سفر', who: 'خانم ۳۰ ساله با یرقان',
      brief: 'خانم نوری پس از سفر و خوردن آب آلوده تهوع، استفراغ و خستگی دارد و چشم‌هایش زرد شده است. سه روز است BM نداشته. پزشک LFT و آزمایش HAV را خواسته است.',
      chart: [['علائم', 'N&V؛ jaundice؛ fatigue'], ['آخرین BM', 'سه روز پیش'], ['آزمایش', 'LFT، ALT، AST'], ['تشخیص احتمالی', 'HAV']],
      fig: { a: ['hepatitis', 'jaundice-img'], l: ['هپاتیت A تا E', 'یرقان'] },
      steps: [
        M('علامت', 'jaundice یعنی…', ['زردی پوست و چشم', 'خارش پوست', 'رنگ‌پریدگی', 'کبودی'], 'نام دیگرش icterus؛ از بالا رفتن bilirubin.'),
        M('اختصار', 'BM یعنی…', ['bowel movement؛ اجابت مزاج', 'body mass', 'bone marrow', 'blood measure'], 'BM = bowel movement.'),
        M('اختصار', 'LFT یعنی…', ['آزمایش‌های عملکرد کبد', 'آزمایش چربی خون', 'آزمایش مدفوع', 'عکس کبد'], 'liver function tests: ALT، AST و bilirubin.'),
        T('انتقال', 'هپاتیت A از راه دهان و مدفوع منتقل می‌شود.', true, 'آب و غذای آلوده؛ هپاتیت E هم همین‌طور.'),
        P('هپاتیت', 'هر نوع را به راه انتقالش وصل کن', [['HAV', 'آب و غذای آلوده'], ['HBV', 'خون و تماس جنسی'], ['HDV', 'فقط همراه هپاتیت B']]),
        S('املا', 'املای «التهاب کبد» را بنویس', 'hepatitis', 'hepat/o + -itis.', 'hepa…')
      ]
    },
    /* ================= تشخیص، جراحی و دارو ================= */
    {
      id: 'r11', w: 'tx', title: 'سنگ کیسه صفرا', who: 'خانم ۴۲ ساله با درد RUQ',
      brief: 'هدر تهوع، نفخ، آروغ، تب و درد RUQ دارد که به زیر کتف می‌زند. Murphy sign مثبت است، زرد شده و مدفوعش رنگ‌پریده است. ERCP و سونوگرافی سنگ و التهاب کیسه صفرا را نشان دادند.',
      chart: [['علائم', 'N&V، flatulence، eructation'], ['معاینه', 'Murphy sign مثبت؛ jaundice'], ['تشخیص', 'cholecystitis با cholelithiasis'], ['جراحی', 'laparoscopic cholecystectomy؛ سپس open']],
      fig: { a: ['gallstone-sites', 'gallstone-terms'], l: ['جای سنگ‌ها', 'واژه‌های صفرا'] },
      steps: [
        M('علامت', 'eructation یعنی…', ['آروغ', 'نفخ', 'سکسکه', 'استفراغ'], 'بیرون دادن گاز معده از دهان.'),
        M('تشخیص', 'cholelithiasis یعنی…', ['سنگ کیسه صفرا', 'التهاب کیسه صفرا', 'سنگ مجرای مشترک', 'برداشتن کیسه صفرا'], 'chol/e + lith + -iasis.'),
        M('آزمون', 'ERCP کدام مجاری را نشان می‌دهد؟', ['مجاری صفرا و پانکراس', 'مری و معده', 'کولون', 'رگ‌های کبد'], 'endoscopic retrograde cholangiopancreatography.'),
        T('رنگ مدفوع', 'مدفوع رنگ‌پریده (clay-colored) یعنی صفرا به روده نمی‌رسد.', true, 'رنگدانه صفرا مدفوع را قهوه‌ای می‌کند.'),
        O('جراحی', 'ترتیب کارهای جراحی هدر را مرتب کن', ['laparoscopic cholecystectomy آغاز شد', 'تبدیل به open cholecystectomy', 'intraoperative cholangiogram', 'گذاشتن NG tube'], 'جراحی لاپاراسکوپی به باز تبدیل شد، سپس مجاری عکس‌برداری شدند.'),
        S('املا', 'املای «برداشتن کیسه صفرا» را بنویس', 'cholecystectomy', 'cholecyst/o + -ectomy.', 'cholecyst…')
      ]
    },
    {
      id: 'r12', w: 'tx', title: 'یبوست و توده کولون', who: 'خانم ۷۴ ساله با درد زیر شکم',
      brief: 'خانم امیری درد شدید زیر شکم و یبوست دارد. ده سال پیش کیسه صفرایش برداشته شده و ریفلاکس مزمن دارد. شکمش مایع دارد. BE پولیپ‌های متعدد نشان داد و نمونه کولونوسکوپی سرطان سیگموئید را تأیید کرد.',
      chart: [['سابقه', 'cholecystectomy؛ GERD'], ['معاینه', 'ascites'], ['تصویربرداری', 'BE: polyposis'], ['تشخیص و درمان', 'sigmoid carcinoma → colectomy + colostomy']],
      fig: { a: ['ostomy-sites', 'dukes'], l: ['جای استومی‌ها', 'مراحل Dukes'] },
      steps: [
        M('علامت', 'ascites یعنی…', ['جمع شدن مایع در حفره صفاق', 'نفخ', 'بزرگی کبد', 'یبوست شدید'], 'آب آوردن شکم.'),
        M('تصویر', 'polyposis یعنی…', ['وجود پولیپ‌های متعدد', 'یک پولیپ', 'برداشتن پولیپ', 'التهاب پولیپ'], 'polyp/o + -osis.'),
        P('جراحی', 'هر واژه را به معنی‌اش وصل کن', [['colectomy', 'برداشتن کولون'], ['colostomy', 'دهانه کولون روی پوست'], ['polypectomy', 'برداشتن پولیپ'], ['stoma', 'دهانه روی پوست']]),
        T('نام‌گذاری', 'colostomy به نام بخشی از کولون که به پوست وصل است نام‌گذاری می‌شود؛ مثل sigmoid colostomy.', true, 'ascending، transverse، descending یا sigmoid colostomy.'),
        M('مرحله', 'در Dukes C سرطان…', ['به گره‌های لنفی رسیده است', 'فقط در مخاط است', 'تا ماهیچه رسیده ولی گره سالم است', 'پولیپ خوش‌خیم است'], 'A مخاط، B ماهیچه، C گره لنفی.'),
        S('املا', 'املای «دهانه کولون روی پوست» را بنویس', 'colostomy', 'col/o + -stomy.', 'colo…')
      ]
    }
  ];


})(typeof window !== 'undefined' ? window : globalThis);
/* گوارا — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', 'معنی واژه را از پسوند شروع کن: cholecystectomy یعنی «برداشتن» + «کیسه صفرا».'],
    ['Lx', 'chol/e با حرف ربط e می‌آید، نه o: cholelith سنگ صفراست و cholelithiasis بیماری سنگ صفرا.'],
    ['Lx', 'stomat/o شبیه stomach است ولی یعنی «دهان»؛ معده gastr/o است.'],
    ['Lx', 'ile/o روده ایلئوم است و ili/o استخوان لگن؛ e در ileum را با e در intestine به خاطر بسپار.'],
    ['Lx', '‎-ectomy برداشتن است، ‎-tomy برش و ‎-stomy ساختن دهانه: colectomy، colotomy، colostomy.'],
    ['Lx', 'dysphagia با g یعنی سختی بلع و dysphasia با s یعنی سختی گفتار؛ g مثل gag و s مثل speak.'],
    ['Oro', 'بزاق از سه جفت غده می‌آید: parotid، submandibular و sublingual.'],
    ['Oro', 'بلع را deglutition و جویدن را mastication می‌گویند؛ لقمه جویده‌شده bolus است.'],
    ['Oro', 'LES همان cardiac sphincter است؛ اگر خوب بسته نشود اسید به مری برمی‌گردد.'],
    ['Oro', 'معده از بالا به پایین: cardia، fundus، body، antrum و pylorus؛ چین‌های داخلش rugae است.'],
    ['Oro', 'کودک ۲۰ دندان شیری دارد و بزرگسال ۳۲ دندان دائمی؛ دندان عقل همان third molar است.'],
    ['Gut', 'ترتیب روده باریک را با DJI به خاطر بسپار: duodenum، jejunum و ileum.'],
    ['Gut', 'jejunum یعنی «خالی»؛ چون در کالبدشکافی همیشه خالی پیدا می‌شد.'],
    ['Gut', 'villi سطح جذب روده باریک را بزرگ می‌کنند و lacteal در هر پرز چربی را جذب می‌کند.'],
    ['Gut', 'کولون چهار بخش دارد: ascending، transverse، descending و sigmoid؛ خم کنار کبد hepatic flexure است.'],
    ['Gut', 'صفرا در کبد ساخته و در کیسه صفرا ذخیره می‌شود و از common bile duct به دوازدهه می‌رسد.'],
    ['Up', 'melena مدفوع سیاه و قیری است و hematochezia خون قرمز روشن در مدفوع.'],
    ['Up', 'hematemesis یعنی استفراغ خون؛ hemat/o خون است و ‎-emesis استفراغ.'],
    ['Up', 'pyrosis همان heartburn است: سوزش سر دل وقتی اسید معده به مری برمی‌گردد.'],
    ['Up', 'H. pylori باکتری اصلی زخم پپتیک است و NSAIDها علت مهم دیگر آن.'],
    ['Up', 'eructation آروغ است و flatus گازی که از مقعد خارج می‌شود.'],
    ['Low', 'volvulus پیچ خوردن روده است و intussusception فرو رفتن روده در خودش مثل تلسکوپ.'],
    ['Low', 'diverticulosis یعنی وجود کیسه‌ها و diverticulitis یعنی التهاب همان کیسه‌ها.'],
    ['Low', 'هپاتیت A و E از راه دهان و مدفوع منتقل می‌شوند و B، C و D از راه خون.'],
    ['Low', 'Crohn هر جای لوله گوارش را تکه‌تکه درگیر می‌کند؛ ulcerative colitis فقط کولون و رکتوم را و پیوسته.'],
    ['Low', 'jaundice و icterus یک معنی دارند: زردی پوست و چشم از بالا رفتن bilirubin.'],
    ['Tx', 'EGD یعنی دیدن مری، معده و دوازدهه با یک آندوسکوپ: esophagogastroduodenoscopy.'],
    ['Tx', 'در نام آناستوموز هر دو اندام می‌آید: gastrojejunostomy؛ در ostomy به پوست فقط یکی: ileostomy.'],
    ['Tx', 'emetic استفراغ می‌آورد و antiemetic جلوی آن را می‌گیرد.'],
    ['Tx', 'PPI و H2 blocker هر دو اسید معده را کم می‌کنند؛ antacid اسید ساخته‌شده را خنثی می‌کند.'],
    ['Tx', 'NPO یعنی «هیچ چیز از راه دهان»؛ معمولاً پیش از جراحی و آندوسکوپی نوشته می‌شود.']
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
    const M = { id: D.id, bit: D.bit, start: D.startWorld, prefix: D.codePrefix, nameFa: D.nameFa, nameEn: D.nameEn, titleFa: D.titleFa, titleEn: D.titleEn,
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
    root.innerHTML = `<header class="player__top"><button class="iconbtn" data-c="quit" aria-label="خروج">✕</button><div class="pbar"><i></i></div><div class="p-meta"></div></header>
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
      <div class="fcard ${D.flipped ? 'is-flip' : ''}" data-c="flip" role="button" tabindex="0" aria-label="برگرداندن کارت">
        <div class="fcard__in">
          <div class="fcard__f">
            <span class="fcard__w" style="--wc:${w ? w.color : 'var(--brand)'}">${w ? w.sym : ''}</span>
            <span class="fcard__box" title="خانه لایتنر">${'●'.repeat(box)}${'○'.repeat(5 - box)}</span>
            <b class="fcard__t" dir="ltr">${esc(t.t)}</b>
            ${t.p ? `<span class="pron" dir="ltr">/${esc(t.p)}/</span>` : ''}
            <small class="fcard__h">لمس کن تا معنی را ببینی</small>
          </div>
          <div class="fcard__b"><b class="fcard__t fcard__t--sm" dir="ltr">${esc(t.t)}</b>${back(t)}</div>
        </div>
      </div>
      ${canSpeak() ? `<button class="hintbtn hintbtn--c" data-c="say">🔊 شنیدن تلفظ</button>` : ''}
    </div>`;
    root.querySelector('.player__foot').innerHTML = D.flipped
      ? `<div class="foot__row"><button class="btn btn--red btn--lg" data-c="no">✗ بلد نبودم</button><button class="btn btn--green btn--lg" data-c="yes">✓ بلد بودم</button></div>`
      : `<div class="foot__row"><span class="foot__note">اول در ذهنت معنی را بگو، بعد کارت را برگردان</span><button class="btn btn--wc btn--lg" data-c="flip">برگردان</button></div>`;
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
      <h2 class="res__t">${fa(D.known)} از ${fa(D.list.length)} کارت را بلد بودی!</h2>
      <p class="res__sub">کارت‌های خانه ۴ و ۵ لایتنر: ${fa(mastered)} از ${fa(total)} واژه</p>
      <div class="tiles"><div class="tile tile--xp" style="--d:.2s"><div class="tile__h">امتیاز</div><div class="tile__v">⚡ ${fa(xp)}</div></div></div>
      ${badges.map(b => `<p class="res__combo">${b.icon} نشان تازه: ${b.name}</p>`).join('')}
    </div>`;
    root.querySelector('.player__foot').innerHTML = `<div class="foot__row"><button class="btn btn--ghost" data-c="again">یک دسته دیگر</button><button class="btn btn--brand btn--lg" data-c="quit">ادامه</button></div>`;
    sfx('done'); confetti(80);
    if (ev.some(e => e.type === 'level')) EA.ui.toast('🎉 سطح تازه: ' + EA.S.level().title);
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
    { id: 'dict', sym: 'Aa', name: 'واژه‌نامه', color: '#2F5FD0' },
    { id: 'parse', sym: '✂', name: 'تجزیه‌گر واژه', color: '#7B5CE0' },
    { id: 'roots', sym: '-o-', name: 'ریشه‌ها و پسوندها', color: '#12A594' },
    { id: 'abbr', sym: 'GI', name: 'اختصارها', color: '#1899D6' },
    { id: 'ref', sym: '🧭', name: 'مرجع سریع', color: '#E5A500' }
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
      <header class="vhead"><h1>ابزارها</h1><p>واژه‌نامه کامل ${fa(L().TERMS.length)} واژه، ${fa(L().ROOTS.length)} جزء واژه و ${fa(L().ABBR.length)} اختصار؛ همه بدون اینترنت.</p></header>
      <div class="ttabs" role="tablist">${TOOLS.map(x => `<button class="ttab ${x.id === cur ? 'is-on' : ''}" data-tool="${x.id}" style="--tc:${x.color}" role="tab" aria-selected="${x.id === cur}"><span class="ttab__s">${x.sym}</span>${x.name}</button>`).join('')}</div>
      <div class="tcard">${PANES[cur]()}</div>
      <p class="disclaimer">⚕️ گوارا ابزار آموزشی است و جایگزین منابع پزشکی و قضاوت بالینی نیست.</p>
    </section>`;
  }

  const worldChips = (sel, all) => `<div class="seg seg--w">${all ? `<button class="seg__b ${!sel ? 'is-on' : ''}" data-tw="">همه</button>` : ''}${EA.worlds.filter(w => L().ABBR.some(a => a.w === w.id)).map(w => `<button class="seg__b ${sel === w.id ? 'is-on' : ''}" data-tw="${w.id}" style="--wc:${w.color}"><span class="wsym wsym--xs" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span> ${w.short || w.name}</button>`).join('')}</div>`;
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
    if (!list.length) return `<div class="tres--empty">${EA.ui.mascot('think', 'var(--brand)', 54)}<span>واژه‌ای پیدا نشد. با بخشی از واژه یا معنی فارسی جست‌وجو کن، یا «تجزیه‌گر واژه» را امتحان کن.</span></div>`;
    return `<p class="tcount">${fa(list.length)} واژه</p><ul class="dict">${list.slice(0, st.limit).map(t => {
      const w = EA.worlds.find(x => x.id === t.w);
      const op = st.open === t.id;
      return `<li class="dict__i ${op ? 'is-open' : ''}">
        <button class="dict__h" data-term="${t.id}" aria-expanded="${op}">
          <span class="wsym wsym--xs" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span>
          <span class="dict__t"><b dir="ltr">${esc(t.t)}</b><small>${esc(L().short(t.fa))}</small></span>
          <span class="dict__box" title="خانه لایتنر">${'●'.repeat(EA.S.cardBox(t.id))}</span>
        </button>
        ${op ? `<div class="dict__b">${(c => c ? `<span class="kchip kchip--tag"><i>${c.icon}</i>${c.name}</span> ` : '')(L().CATS.find(c => c.id === t.k))}${t.p ? `<span class="pron" dir="ltr">/${esc(t.p)}/</span>` : ''}${EA.cards.back(t)}
          <div class="dict__act">${EA.cards.canSpeak() ? `<button class="btn btn--ghost btn--sm" data-say="${t.id}">🔊 تلفظ</button>` : ''}<button class="btn btn--ghost btn--sm" data-fav="${t.id}">${fav[t.id] ? '★ نشان‌شده' : '☆ نشان کن'}</button><button class="btn btn--ghost btn--sm" data-parse="${esc(t.t)}">✂ تجزیه</button></div></div>` : ''}
      </li>`;
    }).join('')}</ul>${list.length > st.limit ? `<button class="btn btn--ghost btn--block" data-more>نمایش ${fa(Math.min(40, list.length - st.limit))} واژه دیگر</button>` : ''}`;
  }
  const dict = () => `<div class="tpane">${searchBox('جست‌وجو: ulcer، صفرا، colon…')}
    <div class="seg seg--w"><button class="seg__b ${!st.w ? 'is-on' : ''}" data-tw="">همه</button><button class="seg__b ${st.w === 'fav' ? 'is-on' : ''}" data-tw="fav">★ نشان‌شده‌ها</button>${EA.worlds.filter(w => L().TERMS.some(t => t.w === w.id)).map(w => `<button class="seg__b ${st.w === w.id ? 'is-on' : ''}" data-tw="${w.id}" title="${w.name}"><span class="wsym wsym--xs" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span></button>`).join('')}</div>
    <div class="kchips" role="group" aria-label="دسته واژه">${[{ id: '', icon: '🗂️', name: 'همه دسته‌ها' }].concat(L().CATS).map(c => { const n = c.id ? L().TERMS.filter(t => t.k === c.id && (!st.w || st.w === 'fav' || t.w === st.w)).length : 0; return `<button class="kchip ${st.k === c.id ? 'is-on' : ''}" data-tk="${c.id}"><i>${c.icon}</i>${c.name}${c.id ? `<small>${fa(n)}</small>` : ''}</button>`; }).join('')}</div>
    <div class="tlist">${dictRows()}</div></div>`;

  /* ---------- تجزیه‌گر ---------- */
  function parseOut() {
    const words = String(st.parse || '').trim().split(/\s+/).filter(Boolean).slice(0, 4);
    if (!words.length) return '';
    return words.map(wd => {
      const a = L().analyze(wd);
      if (!a.word) return '';
      const t = L().term(wd) || L().term(st.parse);
      const meaning = a.parts.filter(p => p.r).map(p => p.r.fa.split('،')[0]);
      return `<div class="parse">
        <div class="parse__w" dir="ltr">${a.parts.map(p => `<span class="pp pp--${p.kind}"><b>${p.kind === 'gap' ? esc(p.text) : esc(L().partLabel(p))}</b><small dir="rtl">${p.r ? esc(p.r.fa) : 'ناشناخته'}</small></span>`).join('<i>+</i>')}</div>
        ${a.full ? `<p class="parse__m">معنی تحت‌اللفظی (از آخر به اول بخوان): <b>${meaning.slice().reverse().join(' ← ')}</b></p>` : '<p class="note note--warn">بخشی از این واژه در فهرست ریشه‌ها نیست؛ بخش‌های شناخته‌شده رنگی‌اند.</p>'}
        ${t ? `<div class="parse__t"><b dir="ltr">${esc(t.t)}</b> = ${t.fa}<p class="defen" dir="ltr">${esc(t.d)}</p></div>` : ''}
      </div>`;
    }).join('');
  }
  const SAMPLES = ['cholecystectomy', 'gastroenteritis', 'esophagogastroduodenoscopy', 'choledocholithiasis', 'hepatosplenomegaly', 'sialolithiasis', 'proctosigmoidoscopy', 'gastrojejunostomy'];
  const parse = () => `<div class="tpane">
    <p class="muted">یک واژه پزشکی بنویس تا به پیشوند، ریشه و پسوند شکسته شود. قاعده طلایی: معنی را از <b>پسوند</b> شروع کن، بعد پیشوند، و آخر ریشه‌ها.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. chondrosarcoma"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: 'پیشوند', root: 'ریشه', suffix: 'پسوند' };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox('جست‌وجو: gastr، کبد، \u200e-ectomy\u200e…')}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]}‌ها <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b dir="ltr">${esc(r.a)}</b><span>${esc(r.fa)}</span><small dir="ltr">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox('جست‌وجو: GERD، زخم، EGD…')}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>اختصار</th><th>شکل کامل و معنی</th></tr>${list.map(a => `<tr><td dir="ltr">${esc(a.a)}</td><td><span dir="ltr" class="abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  /* مرجع سریع: جدول‌های پرکاربرد آناتومی، مجاری صفرا و آندوسکوپی که هنگام خواندن پرونده لازم می‌شوند */
  const REF = [
    ['مسیر غذا', [['mouth • or/o, stomat/o', 'دهان'], ['pharynx • pharyng/o', 'حلق'], ['esophagus • esophag/o', 'مری'], ['stomach • gastr/o', 'معده'], ['small intestine • enter/o', 'روده باریک'], ['large intestine • col/o', 'روده بزرگ'], ['rectum • rect/o, proct/o', 'راست‌روده'], ['anus • an/o', 'مقعد']]],
    ['روده باریک', [['duodenum • duoden/o', 'دوازدهه؛ بخش نخست'], ['jejunum • jejun/o', 'تهی‌روده؛ بخش میانی'], ['ileum • ile/o', 'روده دراز؛ بخش پایانی (با ilium لگن اشتباه نشود)']]],
    ['روده بزرگ', [['cecum • cec/o', 'روده کور؛ appendix به آن چسبیده'], ['ascending • transverse • descending colon', 'کولون بالارو، عرضی، پایین‌رو'], ['hepatic / splenic flexure', 'خم کبدی (راست) / خم طحالی (چپ)'], ['sigmoid colon • sigmoid/o', 'کولون سیگموئید (S شکل)']]],
    ['مجاری صفرا', [['common hepatic duct', 'مجرای کبدی مشترک'], ['cystic duct', 'مجرای کیسه صفرا'], ['common bile duct • choledoch/o', 'مجرای صفراوی مشترک؛ به دوازدهه می‌ریزد'], ['pancreatic duct', 'مجرای پانکراس']]],
    ['ریشه‌های اندام‌های کمکی', [['hepat/o', 'کبد'], ['chol/e • bili', 'صفرا'], ['cholecyst/o', 'کیسه صفرا'], ['cholangi/o', 'مجرای صفرا'], ['pancreat/o', 'پانکراس'], ['sial/o', 'بزاق، غده بزاقی']]],
    ['آندوسکوپی‌ها', [['EGD', 'مری، معده و دوازدهه'], ['colonoscopy', 'سراسر کولون'], ['sigmoidoscopy', 'کولون سیگموئید'], ['proctoscopy', 'راست‌روده'], ['ERCP', 'مجاری صفرا و پانکراس با ماده حاجب']]],
    ['ربع‌های شکم', [['RUQ', 'بالا و راست: کبد، کیسه صفرا'], ['LUQ', 'بالا و چپ: معده، طحال'], ['RLQ', 'پایین و راست: آپاندیس'], ['LLQ', 'پایین و چپ: کولون سیگموئید']]]
  ];


  const ref = () => `<div class="tpane"><p class="muted">جدول‌های پرکاربرد برای خواندن پرونده و گزارش تصویربرداری.</p>
    ${REF.map(g => `<h3 class="tgh">${g[0]}</h3><table class="mini ref"><tr><th>واژه</th><th>معنی</th></tr>${g[1].map(r => `<tr><td dir="ltr" class="ref__v">${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`).join('')}
    ${EA.ui.figCard({ a: ['gi-tract'], l: ['مسیر غذا'] })}</div>`;

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
