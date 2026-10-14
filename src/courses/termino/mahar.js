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
  EA.APP = { name: 'مهار', key: 'mahar', title: 'مهار • ترمینولوژی سرطان' };

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
    name: 'مهار', key: 'mahar', title: 'مهار • ترمینولوژی سرطان', certCode: 'MH',
    subject: 'ترمینولوژی پزشکی سرطان (Cancer Medicine)',
    kicker: '🎗️ ترمینولوژی پزشکی: سرطان (Cancer Medicine)',
    hello: 'سلام، من <b>مهار</b> هستم؛',
    landP: () => `سلام، من <b>مهار</b> هستم؛ سلولی سالم که رشدش را مهار می‌کند! این‌جا یاد می‌گیری سلول چطور سرطانی می‌شود، تومورها چطور نام‌گذاری می‌شوند، نشانه‌ها، غربالگری، تشخیص، مرحله‌بندی و درمان سرطان را با واژه دقیق نام ببری و هر واژه تازه را خودت <b>رمزگشایی</b> کنی. ${fa(EA.lex.TERMS.length)} واژه با تلفظ و معنی فارسی، ${fa(Object.keys(EA.IMG).length || 8)} تصویر از کتاب، ${fa(EA.ART_KEYS.length)} شکل آموزشی، ${fa(EA.rounds.length)} پرونده بالینی و کارت‌های لایتنر منتظرت هستند.`,
    disclaimer: 'مهار ابزار آموزشی است و جایگزین منابع پزشکی، قضاوت بالینی یا دستور پزشک نیست.',
    eyes: 'ده‌ها شکل آموزشی و تصویر کتاب؛ از تقسیم سلول و متاستاز تا نقشه نام‌گذاری تومورها، مرحله‌بندی TNM و انواع درمان.',
    outcomes: [
          'هر واژه سرطان را به پیشوند، ریشه و پسوند بشکنی و واژه تازه بسازی',
          'تفاوت تومور خوش‌خیم و بدخیم، تغییرات سلول (hyperplasia تا dysplasia) و راه‌های متاستاز را توضیح دهی',
          'از روی نام هر تومور بگویی از چه بافتی است و خوش‌خیم است یا بدخیم: carcinoma، sarcoma، leukemia، lymphoma و blastoma',
          'نشانه‌های هشدار، ضایعه‌های پیش‌سرطانی و آزمون‌های غربالگری را بشناسی',
          'نمونه‌برداری‌ها، آندوسکوپی‌ها، تصویربرداری، درجه‌بندی و مرحله‌بندی TNM را بخوانی',
          'جراحی‌ها، پرتودرمانی، شیمی‌درمانی، هورمون‌درمانی، ایمونوتراپی و اختصارهای پرونده سرطان را بفهمی'
        ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، گزارش پاتولوژی و پرونده یک بیمار سرطانی را مثل زبان مادری می‌خوانی.',
    obHello: 'سلام! من مهار هستم؛ سلولی سالم که رشدش را مهار می‌کند 🎗️ اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان بدن» بهترین شروع است؛ قطعه‌های واژه‌سازی آن‌جا یاد داده می‌شوند!',
    demo: () => ({
    q: 'در گزارش پاتولوژی نوشته شده: <b dir="ltr">osteosarcoma</b>. یعنی…',
    fig: { a: ['tissue-map'], l: ['بافت و نام سرطان'] },
    opts: ['سرطان بدخیم استخوان', 'تومور خوش‌خیم استخوان', 'سرطان بافت پوششی', 'التهاب استخوان'],
    why: `${EA.K.wb('oste/o', '-sarcoma')}<br><b>oste/o</b> = استخوان • <b>-sarcoma</b> = سرطان بافت همبند. یعنی <b>سرطان بدخیم استخوان</b>؛ شایع‌ترین سرطان استخوان در نوجوانان. اگر فقط <b>-oma</b> بود (osteoma)، تومور خوش‌خیم می‌شد. معنی را از پسوند شروع کن!`
  }),
    titles: ['سلول تازه', 'میکروسکوپ‌به‌دست', 'ریشه‌یاب', 'نام‌گذار تومور', 'شکارچی پولیپ', 'غربالگر دقیق', 'نمونه‌بردار', 'پاتولوژیست جوان', 'مرحله‌بند TNM', 'کارآگاه متاستاز', 'یار انکولوژیست', 'سپهسالار مهار', 'استاد زبان سرطان'],
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'دانشجوی علوم آزمایشگاهی', 'کارشناس علوم آزمایشگاهی', 'دانشجوی تغذیه', 'پرستار ICU', 'کارشناس تغذیه بالینی', 'رزیدنت داخلی', 'دانشجوی مامایی', 'دانشجوی داروسازی', 'کارشناس اتاق عمل', 'پرستار بخش انکولوژی'],
    firstBadge: ['🎗️', 'اولین گام'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], cl: ['🔬', 'سلول‌شناس'], nm: ['🏷️', 'نام‌گذار'], sx: ['🔎', 'غربالگر'], dx: ['🧪', 'پاتولوژیست'], tx: ['💊', 'درمانگر'] },
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
    ["actinic keratosis", "ak-TIN-ik kair-ah-TOH-sis", "Rough, scaly patch on sun-damaged skin that can become squamous cell carcinoma.", "کراتوز اکتینیک (آفتابی)", "sx", "pre", []],
    ["acute lymphocytic leukemia", "ah-KYOOT lim-foh-SIT-ik loo-KEE-mee-ah", "Fast-growing leukemia of immature lymphocytes; the most common childhood cancer.", "لوسمی لنفوسیتی حاد", "nm", "heme", ["ALL"]],
    ["acute myeloid leukemia", "ah-KYOOT MYE-eh-loyd loo-KEE-mee-ah", "Fast-growing leukemia of immature myeloid cells; most common acute leukemia in adults.", "لوسمی میلوئیدی حاد", "nm", "heme", ["AML"]],
    ["adenocarcinoma", "ad-eh-noh-kar-sih-NOH-mah", "Carcinoma of glandular epithelium that makes fluid or mucus; most breast, colon, pancreas and prostate cancers.", "آدنوکارسینوم", "nm", "mal", []],
    ["adenoma", "ad-eh-NOH-mah", "Benign tumor of glandular epithelium.", "آدنوم (تومور خوش‌خیم غده)", "nm", "ben", []],
    ["adjuvant therapy", "AJ-oo-vant THAIR-ah-pee", "Additional treatment given after the main treatment (usually surgery) to kill remaining cancer cells.", "درمان کمکی (ادجوانت)", "tx", "care", []],
    ["alopecia", "al-oh-PEE-shee-ah", "Hair loss; a common side effect of chemotherapy.", "آلوپسی (ریزش مو)", "tx", "rx", []],
    ["alpha-fetoprotein", "AL-fah-fee-toh-PROH-teen", "Tumor marker raised in liver cancer and some testicular germ cell tumors.", "آلفافیتوپروتئین", "sx", "scr", ["AFP"]],
    ["anaplasia", "an-ah-PLAY-zhah", "Loss of differentiation of cells; a characteristic of malignant cells.", "آناپلازی (بی‌تمایزی)", "cl", "bio", []],
    ["anemia", "ah-NEE-mee-ah", "Number of red blood cells below normal; can be a sign of bleeding from cancer of the digestive tract or uterus.", "کم‌خونی", "sx", "sx", []],
    ["angiogenesis", "an-jee-oh-JEN-eh-sis", "Formation of new blood vessels; tumors use it to feed their growth.", "رگ‌زایی", "cl", "bio", []],
    ["angioma", "an-jee-OH-mah", "Benign tumor made of blood or lymph vessels.", "آنژیوم (تومور خوش‌خیم رگ)", "nm", "ben", []],
    ["angiosarcoma", "an-jee-oh-sar-KOH-mah", "Malignant tumor of the cells lining blood or lymph vessels.", "آنژیوسارکوم", "nm", "mal", []],
    ["anorexia", "an-oh-REK-see-ah", "Abnormal loss of appetite; a sign of cancer or a side effect of chemotherapy or radiation.", "بی‌اشتهایی", "sx", "sx", []],
    ["antiandrogen", "an-tee-AN-droh-jen", "Drug that blocks the production or action of male sex hormones; used in prostate cancer.", "ضدآندروژن", "tx", "rx", []],
    ["antiemetic", "an-tee-eh-MET-ik", "Drug that prevents nausea and vomiting caused by chemotherapy and radiation.", "ضدتهوع", "tx", "rx", []],
    ["antiestrogen", "an-tee-ES-troh-jen", "Drug that blocks the effects of estrogen in estrogen-receptor-positive breast cancer, such as tamoxifen.", "ضداستروژن", "tx", "rx", []],
    ["antineoplastic", "an-tee-nee-oh-PLAS-tik", "Drug that prevents the development, growth or reproduction of cancer cells.", "ضدسرطان (ضدنئوپلاسم)", "tx", "rx", []],
    ["apoptosis", "ap-op-TOH-sis", "Programmed, orderly death of old or damaged cells; cancer cells escape it.", "آپوپتوز (مرگ برنامه‌ریزی‌شده سلول)", "cl", "bio", []],
    ["aromatase inhibitor", "ah-ROH-mah-tays in-HIB-ih-ter", "Drug that lowers estrogen production after menopause; used for hormone-positive breast cancer.", "مهارکننده آروماتاز", "tx", "rx", []],
    ["asbestos", "as-BES-tos", "Fibrous mineral whose inhaled fibers cause mesothelioma and lung cancer.", "آزبست (پنبه نسوز)", "cl", "bio", []],
    ["astrocytoma", "as-troh-sye-TOH-mah", "Glioma made of star-shaped astrocytes.", "آستروسیتوم", "nm", "mal", []],
    ["barium enema", "BAIR-ee-um EN-eh-mah", "X-rays of the colon after barium is given by enema; used to look for colon cancer.", "تنقیه باریم", "dx", "img", ["BE"]],
    ["Barrett esophagus", "BAIR-et eh-SOF-ah-gus", "Change of the lining of the lower esophagus (metaplasia) caused by long-term acid reflux; raises the risk of esophageal cancer.", "مری بارت", "sx", "pre", []],
    ["basal cell carcinoma", "BAY-sal sel kar-sih-NOH-mah", "Slow-growing carcinoma of the basal layer of the epidermis on sun-exposed skin; the most common skin cancer and it rarely spreads.", "کارسینوم سلول بازال", "nm", "mal", ["BCC"]],
    ["BCG vaccine", "bee-see-jee vak-SEEN", "Bacille Calmette-Guerin; weakened bacteria placed in the bladder to activate the immune system against bladder cancer.", "واکسن ب‌ث‌ژ (BCG)", "tx", "rx", ["BCG"]],
    ["benign", "beh-NINE", "Not cancerous; does not invade nearby tissue or spread to other parts of the body.", "خوش‌خیم", "lx", "pl", []],
    ["biopsy", "BYE-op-see", "Removal of cells or tissue for examination under a microscope to diagnose cancer.", "بیوپسی (نمونه‌برداری)", "dx", "bx", ["Bx"]],
    ["blastoma", "blas-TOH-mah", "Tumor that arises from immature embryonic cells.", "بلاستوم (تومور جنینی)", "nm", "mal", []],
    ["bone marrow aspiration", "bone MAIR-oh as-pih-RAY-shun", "Removal of marrow, blood and a small piece of bone with a hollow needle from the hipbone or breastbone to evaluate leukemia and lymphoma.", "آسپیراسیون مغز استخوان", "dx", "bx", []],
    ["bone marrow transplantation", "bone MAIR-oh trans-plan-TAY-shun", "Transplant of blood-forming stem cells taken from bone marrow.", "پیوند مغز استخوان", "tx", "rx", ["BMT"]],
    ["bone scan", "bone skan", "Radionuclide scan that shows areas where cancer has spread to bone.", "اسکن استخوان", "dx", "img", []],
    ["brachytherapy", "brak-ee-THAIR-ah-pee", "Internal radiation: radioactive seeds, needles, wires or catheters placed directly into or near the tumor.", "براکی‌تراپی (پرتودرمانی داخلی)", "tx", "rad", []],
    ["BRCA1", "BRAK-ah one", "Tumor suppressor gene; inherited mutations greatly increase the risk of breast and ovarian cancer.", "ژن BRCA1 (سرطان پستان ۱)", "cl", "bio", ["BRCA"]],
    ["breast self-examination", "brest self-eg-zam-ih-NAY-shun", "Regular checking of one's own breasts for lumps or changes.", "خودآزمایی پستان", "sx", "scr", ["BSE"]],
    ["bronchoscopy", "brong-KOS-koh-pee", "Examination of the trachea, bronchi and lungs with a scope passed through the nose or mouth.", "برونکوسکوپی", "dx", "bx", []],
    ["CA-125", "see-ay one-two-five", "Tumor marker used to follow ovarian cancer.", "نشانگر CA-125 (سرطان تخمدان)", "sx", "scr", []],
    ["cachexia", "kah-KEK-see-ah", "Severe wasting of muscle and fat with weight loss and weakness in advanced cancer.", "کاشکسی (لاغری مفرط)", "sx", "sx", []],
    ["cancer", "KAN-ser", "Disease in which abnormal cells divide without control and can invade nearby tissue and spread to other parts of the body; any malignant tumor.", "سرطان", "lx", "sci", ["CA", "Ca"]],
    ["cancerous", "KAN-ser-us", "Pertaining to or affected by cancer.", "سرطانی", "lx", "pl", []],
    ["carcinoembryonic antigen", "kar-sih-noh-em-bree-ON-ik AN-tih-jen", "Tumor marker used mainly to follow colorectal cancer.", "آنتی‌ژن کارسینوامبریونیک", "sx", "scr", ["CEA"]],
    ["carcinogen", "kar-SIN-oh-jen", "Substance or agent that causes cancer, such as tobacco smoke, asbestos or ultraviolet light.", "کارسینوژن (عامل سرطان‌زا)", "cl", "bio", []],
    ["carcinogenesis", "kar-sih-noh-JEN-eh-sis", "Process by which normal cells are transformed into cancer cells.", "سرطان‌زایی", "cl", "bio", []],
    ["carcinoma", "kar-sih-NOH-mah", "Malignant tumor of epithelial tissue that covers the body or lines internal organs; the most common type of cancer.", "کارسینوم (سرطان بافت پوششی)", "nm", "mal", []],
    ["carcinoma in situ", "kar-sih-NOH-mah in SYE-too", "Carcinoma confined to the epithelium where it began, without invasion.", "کارسینوم درجا", "dx", "stg", ["CIS"]],
    ["carcinomata", "kar-sih-NOH-mah-tah", "Classical plural of carcinoma; carcinomas is also accepted.", "کارسینوم‌ها (جمع لاتین)", "lx", "pl", []],
    ["cell cycle", "sel SYE-kul", "Series of stages a cell passes through as it grows and divides; normally tightly controlled.", "چرخه سلولی", "cl", "bio", []],
    ["chemotherapy", "kee-moh-THAIR-ah-pee", "Treatment with anticancer drugs that destroy cancer cells by stopping them from growing or dividing.", "شیمی‌درمانی", "tx", "rx", ["chemo"]],
    ["chondroma", "kon-DROH-mah", "Benign tumor of cartilage.", "کندروم (تومور خوش‌خیم غضروف)", "nm", "ben", []],
    ["chondrosarcoma", "kon-droh-sar-KOH-mah", "Malignant tumor of cartilage.", "کندروسارکوم (سرطان غضروف)", "nm", "mal", []],
    ["chronic lymphocytic leukemia", "KRON-ik lim-foh-SIT-ik loo-KEE-mee-ah", "Slow-growing leukemia of mature-looking lymphocytes, usually in older adults.", "لوسمی لنفوسیتی مزمن", "nm", "heme", ["CLL"]],
    ["chronic myeloid leukemia", "KRON-ik MYE-eh-loyd loo-KEE-mee-ah", "Slow-growing leukemia of myeloid cells, linked to the Philadelphia chromosome.", "لوسمی میلوئیدی مزمن", "nm", "heme", ["CML"]],
    ["colectomy", "koh-LEK-toh-mee", "Surgical removal of all or part of the colon.", "کولکتومی (برداشتن روده بزرگ)", "tx", "surg", []],
    ["colonoscopy", "koh-lon-OS-koh-pee", "Examination of the entire colon with a scope inserted through the rectum; polyps can be removed.", "کولونوسکوپی", "dx", "bx", []],
    ["colony-stimulating factor", "KOL-oh-nee STIM-yoo-lay-ting FAK-ter", "Substance that stimulates the bone marrow to make blood cells after chemotherapy or radiation (G-CSF, GM-CSF).", "فاکتور محرک کلونی", "tx", "rx", ["CSF", "G-CSF"]],
    ["colostomy", "koh-LOS-toh-mee", "Surgical creation of an opening (stoma) from the colon to the abdominal wall for stool to leave the body.", "کولوستومی (دهانه روده روی شکم)", "tx", "surg", []],
    ["complete blood count", "kom-PLEET blud kownt", "Blood test of the number and shape of red cells, white cells and platelets; key for leukemia.", "شمارش کامل خون", "dx", "scr", ["CBC"]],
    ["computed tomography", "kom-PYOO-ted toh-MOG-rah-fee", "X-rays and a computer that make cross-sectional pictures of the body, with or without contrast dye.", "سی‌تی‌اسکن", "dx", "img", ["CT", "CAT"]],
    ["core needle biopsy", "kor NEE-dul BYE-op-see", "Biopsy that uses a wide needle to remove a cylinder (core) of tissue.", "بیوپسی با سوزن ضخیم (کور)", "dx", "bx", []],
    ["cryosurgery", "krye-oh-SER-jer-ee", "Use of extreme cold to freeze and destroy abnormal tissue; for early skin cancer, retinoblastoma and precancer of skin and cervix.", "کرایوسرجری (جراحی با سرما)", "tx", "surg", []],
    ["curative", "KYOOR-ah-tiv", "Treatment given with the aim of curing the cancer; also primary or definitive treatment.", "درمان قطعی (شفابخش)", "tx", "care", []],
    ["cyst", "sist", "Closed sac filled with fluid or semisolid material; usually not cancer.", "کیست", "nm", "ben", []],
    ["cystectomy", "sis-TEK-toh-mee", "Surgical removal of the urinary bladder.", "سیستکتومی (برداشتن مثانه)", "tx", "surg", []],
    ["cystoscopy", "sis-TOS-koh-pee", "Examination of the bladder with a scope passed through the urethra.", "سیستوسکوپی", "dx", "bx", []],
    ["cytology", "sye-TOL-oh-jee", "Study of cells; examination of single cells under the microscope.", "سیتولوژی (یاخته‌شناسی)", "lx", "sci", []],
    ["cytotoxic", "sye-toh-TOK-sik", "Poisonous to cells; describes most chemotherapy drugs.", "سیتوتوکسیک (سلول‌کش)", "tx", "rx", []],
    ["debulking", "dee-BULK-ing", "Removal of as much tumor as possible when it cannot all be removed; also cytoreduction.", "کوچک‌سازی تومور (سیتوردوکشن)", "tx", "surg", []],
    ["diagnoses", "dye-ag-NOH-seez", "Plural of diagnosis.", "تشخیص‌ها (جمع)", "lx", "pl", []],
    ["diagnosis", "dye-ag-NOH-sis", "Identification of a disease from its signs, symptoms and tests.", "تشخیص", "lx", "sci", ["Dx"]],
    ["differentiation", "dif-er-en-shee-AY-shun", "Process by which cells mature and take on a special structure and function.", "تمایز", "cl", "bio", []],
    ["digital rectal examination", "DIJ-ih-tal REK-tal eg-zam-ih-NAY-shun", "Gloved finger inserted into the rectum to feel the prostate and rectum.", "معاینه انگشتی مقعد", "sx", "scr", ["DRE"]],
    ["distant metastasis", "DIS-tant meh-TAS-tah-sis", "Spread of cancer to faraway organs or lymph nodes; the M in TNM.", "متاستاز دوردست", "dx", "stg", []],
    ["ductal carcinoma in situ", "DUK-tal kar-sih-NOH-mah in SYE-too", "Abnormal cells that involve only the lining of a breast duct and have not spread outside the duct.", "کارسینوم درجای مجرا", "nm", "mal", ["DCIS"]],
    ["dyspareunia", "dis-pah-ROO-nee-ah", "Painful sexual intercourse in women; can be a symptom of cancer of the cervix or uterus.", "مقاربت دردناک", "sx", "sx", []],
    ["dysphagia", "dis-FAY-jee-ah", "Difficulty swallowing; symptom of cancer of the mouth, throat or esophagus.", "دیسفاژی (اشکال در بلع)", "sx", "sx", []],
    ["dysplasia", "dis-PLAY-zhah", "Abnormal development of cells that look abnormal under the microscope but are not cancer; a precancerous change.", "دیسپلازی (رشد نابه‌هنجار)", "cl", "bio", []],
    ["dysplastic nevus", "dis-PLAS-tik NEE-vus", "Atypical mole with irregular shape and color that has a higher risk of becoming melanoma.", "خال دیسپلاستیک", "sx", "pre", []],
    ["dyspnea", "DISP-nee-ah", "Difficult or labored breathing; symptom of lung cancer.", "تنگی نفس", "sx", "sx", []],
    ["dysuria", "dis-YOO-ree-ah", "Painful or burning urination; symptom of cancer of the urinary tract or prostate.", "سوزش ادرار", "sx", "sx", []],
    ["en bloc resection", "ahn BLOK ree-SEK-shun", "Removal of a tumor in one piece together with surrounding tissue and lymph nodes.", "برداشتن یکجا", "tx", "surg", []],
    ["encapsulated", "en-KAP-soo-lay-ted", "Enclosed in a capsule; benign tumors are often encapsulated and grow by expansion.", "کپسول‌دار", "cl", "bio", []],
    ["endometrial biopsy", "en-doh-MEE-tree-al BYE-op-see", "Removal of tissue from the lining of the uterus through the cervix to check for uterine cancer.", "بیوپسی آندومتر", "dx", "bx", []],
    ["endoscopy", "en-DOS-koh-pee", "Visual examination inside the body with a thin lighted tube (endoscope), often with biopsy.", "آندوسکوپی", "dx", "bx", []],
    ["Epstein-Barr virus", "EP-stine bar VYE-rus", "Herpes-family virus linked to some lymphomas and nasopharyngeal cancer.", "ویروس اپشتین-بار", "cl", "bio", ["EBV"]],
    ["esophagoscopy", "eh-sof-ah-GOS-koh-pee", "Examination of the esophagus with an esophagoscope.", "ازوفاگوسکوپی", "dx", "bx", []],
    ["estrogen receptor", "ES-troh-jen ree-SEP-ter", "Protein on breast cancer cells that lets estrogen fuel their growth; ER-positive tumors respond to hormone therapy.", "گیرنده استروژن", "dx", "stg", ["ER"]],
    ["excision", "ek-SIZH-un", "Surgical cutting out and removal of tissue.", "برداشتن (اکسیزیون)", "tx", "surg", []],
    ["excisional biopsy", "ek-SIZH-un-al BYE-op-see", "Biopsy that removes the whole lump or suspicious area.", "بیوپسی برداشتی", "dx", "bx", []],
    ["external beam radiation", "ek-STER-nal beem ray-dee-AY-shun", "Radiation aimed by a machine from outside the body at the part where the cancer is.", "پرتودرمانی خارجی", "tx", "rad", []],
    ["familial polyposis", "fah-MIL-ee-al pol-ih-POH-sis", "Inherited condition with hundreds of colon and rectal polyps that almost always leads to colon cancer if not treated.", "پولیپوز خانوادگی", "sx", "pre", ["FAP"]],
    ["fatigue", "fah-TEEG", "Extreme tiredness that is not relieved by rest; the most common symptom of cancer and its treatment.", "خستگی", "sx", "sx", []],
    ["fecal occult blood test", "FEE-kal oh-KULT blud test", "Screening test for colon cancer that finds hidden (occult) blood in the stool (fecal); the guaiac method is gFOBT.", "آزمایش خون مخفی مدفوع", "sx", "scr", ["FOBT", "gFOBT"]],
    ["fibroadenoma", "fye-broh-ad-eh-NOH-mah", "Benign, firm, rubbery tumor of the breast made of fibrous and glandular tissue.", "فیبروآدنوم پستان", "nm", "ben", []],
    ["fibroma", "fye-BROH-mah", "Benign tumor of fibrous connective tissue.", "فیبروم (تومور خوش‌خیم بافت فیبری)", "nm", "ben", []],
    ["fibrosarcoma", "fye-broh-sar-KOH-mah", "Malignant tumor of fibrous connective tissue.", "فیبروسارکوم", "nm", "mal", []],
    ["fine-needle aspiration", "fine NEE-dul as-pih-RAY-shun", "Biopsy in which a thin needle removes cells or fluid, often guided by CT or ultrasound.", "آسپیراسیون با سوزن ظریف", "dx", "bx", ["FNA"]],
    ["five-year survival rate", "five-yeer ser-VYE-val rayt", "Percentage of people who are alive five years after a cancer diagnosis.", "نرخ بقای پنج‌ساله", "tx", "care", []],
    ["fluorouracil", "floor-oh-YOOR-ah-sil", "Antineoplastic drug used for colon, breast and skin cancers.", "فلوئورواوراسیل", "tx", "rx", ["5-FU"]],
    ["frozen section", "FROH-zen SEK-shun", "Quick freezing and slicing of tissue so the pathologist can give a diagnosis during surgery.", "برش منجمد (فروزن سکشن)", "dx", "bx", []],
    ["genetic testing", "jeh-NET-ik TES-ting", "Testing of blood or tissue for inherited mutations, such as BRCA1 and BRCA2, that raise cancer risk.", "آزمایش ژنتیک", "sx", "scr", []],
    ["glioblastoma", "glee-oh-blas-TOH-mah", "Fast-growing, high-grade astrocytoma; the most aggressive brain cancer in adults.", "گلیوبلاستوم", "nm", "mal", []],
    ["glioma", "glee-OH-mah", "Tumor of the glial (supporting) cells of the brain and spinal cord.", "گلیوم", "nm", "mal", []],
    ["grade", "grayd", "Measure of how abnormal tumor cells look under the microscope; high grade means poorly differentiated and faster growing.", "درجه (گرید) تومور", "dx", "stg", []],
    ["graft-versus-host disease", "graft VER-sus hohst dih-ZEEZ", "Complication in which donor immune cells attack the tissues of the transplant recipient.", "بیماری پیوند علیه میزبان", "tx", "rx", ["GVHD"]],
    ["hemangioma", "hee-man-jee-OH-mah", "Benign tumor of blood vessels; a common red birthmark in infants.", "همانژیوم (تومور خوش‌خیم رگ خونی)", "nm", "ben", []],
    ["hematochezia", "hee-mat-oh-KEE-zee-ah", "Passage of bright red blood from the rectum; a warning sign of colorectal cancer.", "خون‌ریزی از مقعد", "sx", "sx", []],
    ["hematogenous spread", "hee-mah-TOJ-eh-nus spred", "Spread of cancer cells through the bloodstream to distant organs such as liver, lung, bone and brain.", "گسترش از راه خون", "cl", "bio", []],
    ["hematologist", "hee-mah-TOL-oh-jist", "Physician who specializes in diseases of the blood and blood-forming tissues, including leukemia and lymphoma.", "هماتولوژیست (متخصص خون)", "lx", "sci", []],
    ["hematoma", "hee-mah-TOH-mah", "Collection of blood that has leaked out of a vessel and pooled; despite -oma it is not a tumor.", "هماتوم (تجمع خون)", "nm", "ben", []],
    ["hematuria", "hee-mah-TOO-ree-ah", "Blood in the urine; sign of cancer of the bladder, kidney or prostate.", "هماچوری (خون در ادرار)", "sx", "sx", []],
    ["hemoptysis", "hee-MOP-tih-sis", "Coughing or spitting up blood from the respiratory tract; sign of lung cancer.", "هموپتیزی (خلط خونی)", "sx", "sx", []],
    ["hepatoblastoma", "hep-ah-toh-blas-TOH-mah", "Malignant embryonic tumor of the liver in young children.", "هپاتوبلاستوم (سرطان جنینی کبد)", "nm", "mal", []],
    ["HER2", "her too", "Growth-promoting protein; HER2-positive breast cancers grow fast but respond to targeted drugs.", "گیرنده HER2", "dx", "stg", []],
    ["histology", "his-TOL-oh-jee", "Study of tissues under the microscope.", "بافت‌شناسی", "lx", "sci", []],
    ["hoarseness", "HORS-nes", "Rough, harsh voice; lasting more than one to two weeks it can signal cancer of the larynx.", "گرفتگی صدا", "sx", "sx", []],
    ["Hodgkin lymphoma", "HOJ-kin lim-FOH-mah", "Lymphoma marked by large Reed-Sternberg cells, often starting in neck lymph nodes of young adults.", "لنفوم هوچکین", "nm", "heme", ["HL"]],
    ["hormone therapy", "HOR-mohn THAIR-ah-pee", "Treatment that slows or stops hormone-sensitive tumors by blocking hormone production or action; also endocrine therapy.", "هورمون‌درمانی", "tx", "rx", []],
    ["hospice", "HOS-pis", "Care that focuses on comfort and quality of life for people near the end of life.", "آسایشگاه (مراقبت پایان زندگی)", "tx", "care", []],
    ["human papillomavirus", "HYOO-man pap-ih-LOH-mah-vye-rus", "Virus spread by sexual contact; high-risk types cause cervical and some head and neck cancers.", "ویروس پاپیلومای انسانی", "cl", "bio", ["HPV"]],
    ["hyperplasia", "hye-per-PLAY-zhah", "Increase in the number of cells that appear normal; the cells may later become cancerous.", "هیپرپلازی (افزایش تعداد سلول)", "cl", "bio", []],
    ["hysterectomy", "his-ter-EK-toh-mee", "Surgical removal of the uterus.", "هیسترکتومی (برداشتن رحم)", "tx", "surg", []],
    ["hysteroscopy", "his-ter-OS-koh-pee", "Examination of the inside of the uterus with a scope.", "هیستروسکوپی", "dx", "bx", []],
    ["immunosuppressant", "im-yoo-noh-suh-PRES-ant", "Drug that suppresses the immune response, as in transplant patients.", "سرکوبگر ایمنی", "tx", "rx", []],
    ["immunotherapy", "im-yoo-noh-THAIR-ah-pee", "Treatment that stimulates or restores the ability of the immune system to fight cancer; also biological therapy.", "ایمونوتراپی (ایمنی‌درمانی)", "tx", "rx", []],
    ["in situ", "in SYE-too", "In its original place; cancer that has not invaded surrounding tissue (stage 0) and can be cured by excision.", "درجا", "dx", "stg", []],
    ["incisional biopsy", "in-SIZH-un-al BYE-op-see", "Biopsy that removes only part of a lump or suspicious area.", "بیوپسی برشی", "dx", "bx", []],
    ["infiltration", "in-fil-TRAY-shun", "Growth of malignant cells into nearby tissue.", "نفوذ (ارتشاح)", "cl", "bio", []],
    ["intravenous pyelogram", "in-trah-VEE-nus PYE-eh-loh-gram", "X-rays of kidneys, ureters and bladder after dye is injected into a vein.", "پیلوگرافی وریدی", "dx", "img", ["IVP"]],
    ["invasion", "in-VAY-zhun", "Spread of cancer cells into surrounding healthy tissue.", "تهاجم", "cl", "bio", []],
    ["invasive", "in-VAY-siv", "Cancer that has spread beyond the layer of tissue where it developed into nearby tissue.", "مهاجم (تهاجمی)", "dx", "stg", []],
    ["Kaposi sarcoma", "KAP-oh-see sar-KOH-mah", "Cancer of vessel lining that forms purple skin lesions; common in people with AIDS.", "سارکوم کاپوزی", "nm", "mal", []],
    ["laryngectomy", "lair-in-JEK-toh-mee", "Surgery to remove all or part of the larynx (voice box).", "لارنژکتومی (برداشتن حنجره)", "tx", "surg", []],
    ["laryngoscopy", "lair-in-GOS-koh-pee", "Examination of the larynx (voice box) with a mirror or a laryngoscope.", "لارنگوسکوپی", "dx", "bx", []],
    ["laser surgery", "LAY-zer SER-jer-ee", "Use of a narrow beam of light to cut or destroy tissue on the surface of the body or the lining of organs.", "جراحی با لیزر", "tx", "surg", []],
    ["leiomyoma", "lye-oh-mye-OH-mah", "Benign tumor of smooth muscle, especially of the uterus, where it is called a fibroid.", "لیومیوم (فیبروم رحم)", "nm", "ben", []],
    ["leiomyomata", "lye-oh-mye-OH-mah-tah", "Plural of leiomyoma; fibroids of the uterus.", "لیومیوم‌ها (جمع)", "lx", "pl", []],
    ["leiomyosarcoma", "lye-oh-mye-oh-sar-KOH-mah", "Malignant tumor of smooth muscle.", "لیومیوسارکوم", "nm", "mal", []],
    ["lentigo maligna", "len-TYE-goh mah-LIG-nah", "Slow-growing brown patch on sun-damaged skin, a melanoma in situ; Latin for malignant freckle.", "لنتیگوی بدخیم", "sx", "pre", []],
    ["lesion", "LEE-zhun", "Any abnormal area of tissue, such as a wound, sore or tumor.", "ضایعه", "lx", "sci", []],
    ["leukemia", "loo-KEE-mee-ah", "Cancer of blood-forming tissue in the bone marrow; large numbers of abnormal white cells crowd out normal cells and spill into the blood.", "لوسمی (سرطان خون)", "nm", "heme", []],
    ["leukoplakia", "loo-koh-PLAY-kee-ah", "White patches on the mucous membrane of the mouth, often from tobacco; may become oral cancer.", "لکوپلاکی (لکه سفید دهان)", "sx", "pre", []],
    ["LH-RH agonist", "el-aych-ar-aych AG-oh-nist", "Drug resembling luteinizing hormone-releasing hormone that lowers sex hormone levels in cancers of the reproductive system.", "آگونیست LH-RH", "tx", "rx", ["LH-RH"]],
    ["lipoma", "lih-POH-mah", "Benign, soft tumor of fat tissue.", "لیپوم (تومور خوش‌خیم چربی)", "nm", "ben", []],
    ["liposarcoma", "lip-oh-sar-KOH-mah", "Malignant tumor of fat tissue.", "لیپوسارکوم (سرطان چربی)", "nm", "mal", []],
    ["lobectomy", "loh-BEK-toh-mee", "Surgical removal of a lobe of an organ such as the lung.", "لوبکتومی (برداشتن یک لوب)", "tx", "surg", []],
    ["localized", "LOH-kal-ized", "Confined to the area where it started, without spread.", "موضعی", "dx", "stg", []],
    ["lumpectomy", "lum-PEK-toh-mee", "Surgery to remove the breast tumor and a small amount of normal tissue around it.", "لامپکتومی (برداشتن توده پستان)", "tx", "surg", []],
    ["lymph node dissection", "limf node dye-SEK-shun", "Removal of lymph nodes in the tumor area (regional: some; radical: most or all) to examine them for cancer.", "برداشتن غدد لنفاوی", "tx", "surg", []],
    ["lymphadenopathy", "lim-fad-eh-NOP-ah-thee", "Disease or swelling of lymph nodes; a sign of lymphoma or metastatic cancer.", "لنفادنوپاتی (بزرگی غدد لنفاوی)", "sx", "sx", []],
    ["lymphangiography", "lim-fan-jee-OG-rah-fee", "X-ray of lymph vessels and nodes after dye is injected into a lymph channel; also lymph node mapping.", "لنفانژیوگرافی", "dx", "img", []],
    ["lymphangioma", "lim-fan-jee-OH-mah", "Benign tumor of lymph vessels.", "لنفانژیوم (تومور خوش‌خیم رگ لنفی)", "nm", "ben", []],
    ["lymphatic spread", "lim-FAT-ik spred", "Spread of cancer cells through lymph vessels to lymph nodes.", "گسترش از راه لنف", "cl", "bio", []],
    ["lymphedema", "limf-eh-DEE-mah", "Swelling of an arm or leg from blocked lymph flow, often after lymph node removal or radiation.", "لنف‌ادم (ورم لنفاوی)", "sx", "sx", []],
    ["lymphoma", "lim-FOH-mah", "Cancer that begins in lymphocytes of the lymph system; all lymphoid tumors are malignant.", "لنفوم (سرطان دستگاه لنفاوی)", "nm", "heme", []],
    ["lymphosarcoma", "lim-foh-sar-KOH-mah", "Older name for a malignant tumor of lymphoid tissue (non-Hodgkin lymphoma).", "لنفوسارکوم", "nm", "mal", []],
    ["magnetic resonance imaging", "mag-NET-ik REZ-oh-nans IM-ah-jing", "Imaging with a strong magnet and radio waves; very good for brain, spine and soft tissue.", "ام‌آرآی", "dx", "img", ["MRI"]],
    ["malignant", "mah-LIG-nant", "Cancerous; tending to invade and destroy nearby tissue and spread to other parts of the body.", "بدخیم", "lx", "pl", []],
    ["mammogram", "MAM-oh-gram", "X-ray image of the breast.", "ماموگرام (عکس پستان)", "sx", "scr", []],
    ["mammography", "mam-OG-rah-fee", "Low-dose X-ray imaging of the breast for screening and diagnosis.", "ماموگرافی", "sx", "scr", []],
    ["mass", "mas", "Lump or collection of tissue that can be felt or seen on imaging; may or may not be cancer.", "توده", "lx", "sci", []],
    ["mastectomy", "mas-TEK-toh-mee", "Surgery to remove the breast or as much breast tissue as possible.", "ماستکتومی (برداشتن پستان)", "tx", "surg", []],
    ["medical oncologist", "MED-ih-kal ong-KOL-oh-jist", "Oncologist who treats cancer with chemotherapy, hormone therapy and immunotherapy and coordinates overall care.", "انکولوژیست داخلی", "lx", "sci", []],
    ["medulloblastoma", "med-yoo-loh-blas-TOH-mah", "Malignant embryonic tumor of the cerebellum; a common brain cancer in children.", "مدولوبلاستوم", "nm", "mal", []],
    ["melanoma", "mel-ah-NOH-mah", "Malignant tumor of the pigment-producing cells (melanocytes) of the skin; the most dangerous skin cancer.", "ملانوم (سرطان سلول‌های رنگدانه‌ساز)", "nm", "mal", []],
    ["meningioma", "meh-nin-jee-OH-mah", "Usually benign, slow-growing tumor of the meninges that cover the brain and spinal cord.", "مننژیوم (تومور پرده‌های مغز)", "nm", "ben", []],
    ["mesothelioma", "mez-oh-thee-lee-OH-mah", "Malignant tumor of the lining of the chest or abdomen, strongly linked to asbestos.", "مزوتلیوما", "nm", "mal", []],
    ["metaplasia", "met-ah-PLAY-zhah", "Change of one mature cell type into another cell type, often in response to irritation.", "متاپلازی (تغییر نوع سلول)", "cl", "bio", []],
    ["metastases", "meh-TAS-tah-seez", "Plural of metastasis; secondary tumors that have spread from the primary site.", "متاستازها (جمع)", "lx", "pl", ["mets"]],
    ["metastasis", "meh-TAS-tah-sis", "Spread of cancer cells from the primary site to a distant part of the body through blood or lymph; also the secondary tumor itself.", "متاستاز (دست‌اندازی)", "cl", "bio", []],
    ["metastasize", "meh-TAS-tah-size", "To spread from one part of the body to another.", "متاستاز دادن", "cl", "bio", []],
    ["metastatic", "met-ah-STAT-ik", "Pertaining to cancer that has spread from its primary site; it keeps the name of the primary tumor.", "متاستاتیک", "cl", "bio", []],
    ["methotrexate", "meth-oh-TREK-sayt", "Antineoplastic drug that blocks cell division; used for leukemia, lymphoma and other cancers.", "متوترکسات", "tx", "rx", ["MTX"]],
    ["mitosis", "mye-TOH-sis", "Cell division that produces two identical daughter cells.", "میتوز (تقسیم سلول)", "cl", "bio", []],
    ["modified radical mastectomy", "MOD-ih-fide RAD-ih-kal mas-TEK-toh-mee", "Removal of the breast, some armpit lymph nodes and the lining over the chest muscles.", "ماستکتومی رادیکال تعدیل‌شده", "tx", "surg", ["MRM"]],
    ["monoclonal antibody", "mon-oh-KLOH-nal AN-tih-bod-ee", "Laboratory-made antibody that attaches to a specific target on cancer cells.", "آنتی‌بادی مونوکلونال", "tx", "rx", ["mAb"]],
    ["mucositis", "myoo-koh-SYE-tis", "Painful inflammation and sores of the mucous membranes of the mouth and gut caused by chemotherapy or radiation.", "موکوزیت (زخم مخاط دهان)", "tx", "rx", []],
    ["multiple myeloma", "MUL-tih-pul mye-eh-LOH-mah", "Cancer of plasma cells in the bone marrow that destroys bone.", "مولتیپل میلوما", "nm", "heme", ["MM"]],
    ["mutation", "myoo-TAY-shun", "Permanent change in the DNA of a cell; mutations can be inherited or acquired.", "جهش", "cl", "bio", []],
    ["myelogenous", "mye-eh-LOJ-eh-nus", "Relating to or produced by the bone marrow.", "مغز استخوانی (میلوژن)", "nm", "heme", []],
    ["myelosuppression", "mye-eh-loh-suh-PRESH-un", "Decreased production of blood cells by the bone marrow; a major side effect of chemotherapy.", "سرکوب مغز استخوان", "tx", "rx", []],
    ["myoma", "mye-OH-mah", "Benign tumor of muscle.", "میوم (تومور خوش‌خیم ماهیچه)", "nm", "ben", []],
    ["necrosis", "neh-KROH-sis", "Death of cells or tissue; fast-growing tumors often have necrotic centers.", "نکروز (مرگ بافت)", "cl", "bio", []],
    ["neoadjuvant therapy", "nee-oh-AJ-oo-vant THAIR-ah-pee", "Treatment given before the main treatment (surgery) to shrink the tumor.", "درمان پیش از جراحی (نئوادجوانت)", "tx", "care", []],
    ["neoplasia", "nee-oh-PLAY-zhah", "Process of forming a new, abnormal growth (neoplasm).", "نئوپلازی (پیدایش رشد نو)", "cl", "bio", []],
    ["neoplasm", "NEE-oh-plazm", "New, abnormal growth of tissue that serves no useful purpose; same meaning as tumor.", "نئوپلاسم (رشد نو)", "lx", "sci", []],
    ["neoplastic", "nee-oh-PLAS-tik", "Pertaining to a neoplasm or new abnormal growth.", "نئوپلاستیک (مربوط به رشد نو)", "lx", "pl", []],
    ["neuroblastoma", "noo-roh-blas-TOH-mah", "Malignant embryonic tumor of nerve cells, often in the adrenal gland of young children.", "نوروبلاستوم", "nm", "mal", []],
    ["neuroma", "noo-ROH-mah", "Benign tumor of nerve tissue.", "نوروم (تومور خوش‌خیم عصب)", "nm", "ben", []],
    ["neutropenia", "noo-troh-PEE-nee-ah", "Low number of neutrophils, a type of white blood cell; raises the risk of infection during chemotherapy.", "نوتروپنی (کمبود نوتروفیل)", "tx", "rx", []],
    ["nevi", "NEE-vye", "Plural of nevus; moles or birthmarks.", "خال‌ها (جمع nevus)", "lx", "pl", []],
    ["nevus", "NEE-vus", "Benign growth of pigment-producing cells of the skin; a mole or birthmark.", "خال (نووس)", "nm", "ben", []],
    ["night sweats", "nite swets", "Heavy sweating during sleep; a sign of leukemia or lymphoma.", "تعریق شبانه", "sx", "sx", []],
    ["nipple discharge", "NIP-ul DIS-charj", "Fluid leaking from the nipple, especially bloody discharge from one breast; a warning sign of breast cancer.", "ترشح نوک پستان", "sx", "sx", []],
    ["nipple retraction", "NIP-ul ree-TRAK-shun", "Pulling inward of the nipple caused by a tumor beneath it.", "فرورفتگی نوک پستان", "sx", "sx", []],
    ["non-Hodgkin lymphoma", "non-HOJ-kin lim-FOH-mah", "Large group of lymphomas of B or T cells without Reed-Sternberg cells.", "لنفوم غیرهوچکین", "nm", "heme", ["NHL"]],
    ["non-small cell lung cancer", "non-smawl sel lung KAN-ser", "Group of lung cancers that includes squamous cell carcinoma, adenocarcinoma and large cell carcinoma.", "سرطان ریه غیرسلول کوچک", "nm", "mal", ["NSCLC"]],
    ["oncogene", "ONG-koh-jeen", "Mutated gene that pushes a cell to grow and divide without control.", "انکوژن (ژن سرطان‌زا)", "cl", "bio", []],
    ["oncogenic", "ong-koh-JEN-ik", "Causing or giving rise to tumors.", "تومورزا", "cl", "bio", []],
    ["oncologist", "ong-KOL-oh-jist", "Physician who specializes in the diagnosis and treatment of cancer.", "انکولوژیست (متخصص سرطان)", "lx", "sci", []],
    ["oncology", "ong-KOL-oh-jee", "Branch of medicine that studies, diagnoses and treats cancer.", "انکولوژی (سرطان‌شناسی)", "lx", "sci", []],
    ["oncology nurse", "ong-KOL-oh-jee nurs", "Nurse who cares for people with cancer, gives chemotherapy and manages side effects.", "پرستار انکولوژی", "lx", "sci", []],
    ["orchiectomy", "or-kee-EK-toh-mee", "Surgical removal of one or both testicles.", "ارکیکتومی (برداشتن بیضه)", "tx", "surg", []],
    ["osteoma", "os-tee-OH-mah", "Benign tumor of bone.", "استئوم (تومور خوش‌خیم استخوان)", "nm", "ben", []],
    ["osteosarcoma", "os-tee-oh-sar-KOH-mah", "Malignant tumor of bone; the most common bone cancer, usually in teenagers.", "استئوسارکوم (سرطان استخوان)", "nm", "mal", []],
    ["palliative", "PAL-ee-ah-tiv", "Relieving symptoms and improving quality of life without curing, such as pain control or shrinking a metastatic tumor.", "تسکینی", "tx", "care", []],
    ["Pap smear", "pap smeer", "Cells swabbed from the cervix and examined to detect precancer and cancer of the cervix.", "پاپ اسمیر", "sx", "scr", []],
    ["papillary carcinoma", "PAP-ih-lair-ee kar-sih-NOH-mah", "Carcinoma with finger-like projections; the most common type of thyroid cancer.", "کارسینوم پاپیلاری", "nm", "mal", []],
    ["papilloma", "pap-ih-LOH-mah", "Benign tumor of epithelium that grows outward like a nipple or finger, such as a wart.", "پاپیلوم (تومور زگیل‌مانند)", "nm", "ben", []],
    ["paraneoplastic syndrome", "pair-ah-nee-oh-PLAS-tik SIN-drohm", "Signs and symptoms caused by substances a tumor makes, appearing far from the tumor itself.", "سندرم پارانئوپلاستیک", "sx", "sx", []],
    ["pathologist", "pah-THOL-oh-jist", "Physician who examines biopsy tissue to make the cancer diagnosis and help determine its stage.", "پاتولوژیست (آسیب‌شناس)", "lx", "sci", []],
    ["peau d'orange", "poh doh-RAHNZH", "Thickened, dimpled breast skin that looks like orange peel, caused by blocked lymph vessels in advanced breast cancer.", "پوست پرتقالی", "sx", "sx", []],
    ["pediatric oncologist", "pee-dee-AT-rik ong-KOL-oh-jist", "Oncologist who treats cancer in children and adolescents.", "انکولوژیست کودکان", "lx", "sci", []],
    ["peripheral blood stem cell transplantation", "peh-RIF-er-al blud stem sel trans-plan-TAY-shun", "Transplant of blood-forming stem cells collected from the bloodstream.", "پیوند سلول بنیادی خون محیطی", "tx", "rx", ["PBSCT"]],
    ["peripheral neuropathy", "peh-RIF-er-al noo-ROP-ah-thee", "Pain, numbness, tingling or weakness of the hands and feet; a sign of cancer or a side effect of chemotherapy.", "نوروپاتی محیطی", "sx", "sx", []],
    ["pneumonectomy", "noo-moh-NEK-toh-mee", "Surgical removal of an entire lung.", "پنومونکتومی (برداشتن کامل ریه)", "tx", "surg", []],
    ["polyp", "POL-ip", "Benign growth projecting from the surface of a mucous membrane, most often in the colon and rectum.", "پولیپ", "nm", "ben", []],
    ["polyps", "POL-ips", "Plural of polyp; growths projecting from a mucous membrane.", "پولیپ‌ها (جمع)", "lx", "pl", []],
    ["poorly differentiated", "POOR-lee dif-er-EN-shee-ay-ted", "Describing tumor cells that look very different from normal cells; typical of malignant, high-grade tumors.", "کم‌تمایزیافته", "cl", "bio", []],
    ["port catheter", "port KATH-eh-ter", "Small device placed under the skin of the chest and joined to a large vein to give chemotherapy and draw blood.", "پورت شیمی‌درمانی", "tx", "surg", []],
    ["positron emission tomography", "POZ-ih-tron ee-MISH-un toh-MOG-rah-fee", "Imaging with a radioactive sugar that collects in active cancer cells; used for staging.", "پت‌اسکن", "dx", "img", ["PET"]],
    ["precancerous", "pree-KAN-ser-us", "Describing a condition that has a high likelihood of becoming cancer.", "پیش‌سرطانی", "lx", "pl", []],
    ["primary tumor", "PRYE-mair-ee TOO-mer", "Original tumor at the site where the cancer began.", "تومور اولیه", "cl", "bio", []],
    ["progesterone receptor", "proh-JES-ter-ohn ree-SEP-ter", "Protein on breast cancer cells that binds progesterone; tested together with the estrogen receptor (ER/PR).", "گیرنده پروژسترون", "dx", "stg", ["PR"]],
    ["prognosis", "prog-NOH-sis", "Prediction of the likely course and outcome of a disease.", "پیش‌آگهی", "lx", "sci", []],
    ["proliferation", "proh-lif-er-AY-shun", "Rapid increase in the number of cells by division.", "تکثیر", "cl", "bio", []],
    ["prophylactic", "proh-fih-LAK-tik", "Preventive; done to keep cancer from developing, such as removal of premalignant lesions.", "پیشگیرانه", "tx", "care", []],
    ["prostate-specific antigen", "PROS-tayt speh-SIF-ik AN-tih-jen", "Blood test of a protein made by the prostate; high levels may be a sign of prostate cancer.", "آنتی‌ژن اختصاصی پروستات", "sx", "scr", ["PSA"]],
    ["prostatectomy", "pros-tah-TEK-toh-mee", "Surgical removal of part or all of the prostate.", "پروستاتکتومی", "tx", "surg", []],
    ["radiation oncologist", "ray-dee-AY-shun ong-KOL-oh-jist", "Oncologist who specializes in treating cancer with radiation therapy.", "متخصص پرتودرمانی (رادیوتراپیست)", "lx", "sci", []],
    ["radiation therapy", "ray-dee-AY-shun THAIR-ah-pee", "Use of high-energy rays such as X-rays to kill cancer cells or slow their growth; also radiotherapy.", "پرتودرمانی (رادیوتراپی)", "tx", "rad", ["RT", "XRT"]],
    ["radioactive iodine", "ray-dee-oh-AK-tiv EYE-oh-dine", "Radioactive form of iodine (I-131) taken by mouth to destroy thyroid cancer cells.", "ید رادیواکتیو", "tx", "rad", ["RAI"]],
    ["radionuclide scanning", "ray-dee-oh-NOO-klide SKAN-ing", "Radioactive material is injected or swallowed and its radiation measured with a scanner; also called scintigraphy.", "اسکن هسته‌ای (سینتی‌گرافی)", "dx", "img", []],
    ["radiosensitive", "ray-dee-oh-SEN-sih-tiv", "Describing cells or tumors that are easily damaged by radiation.", "حساس به پرتو", "tx", "rad", []],
    ["reconstructive surgery", "ree-kon-STRUK-tiv SER-jer-ee", "Surgery to restore the shape and function of a body part, such as breast reconstruction after mastectomy.", "جراحی بازسازی", "tx", "surg", []],
    ["recurrence", "ree-KUR-ens", "Cancer that has come back after treatment, at the same place or elsewhere.", "بازگشت سرطان", "tx", "care", []],
    ["Reed-Sternberg cell", "reed-STERN-berg sel", "Large abnormal cell with two nuclei that identifies Hodgkin lymphoma.", "سلول رید-اشترنبرگ", "nm", "heme", []],
    ["regional", "REE-jun-al", "Spread to nearby lymph nodes, tissues or organs.", "ناحیه‌ای", "dx", "stg", []],
    ["rehabilitative", "ree-hah-BIL-ih-tay-tiv", "Treatment that restores appearance and function, such as reconstructive surgery.", "توان‌بخشی", "tx", "care", []],
    ["relapse", "REE-laps", "Return of cancer after a period of improvement.", "عود", "tx", "care", []],
    ["remission", "ree-MISH-un", "Decrease in or disappearance of signs and symptoms of cancer; complete remission means no detectable cancer.", "بهبودی (رمیسیون)", "tx", "care", ["CR"]],
    ["resection", "ree-SEK-shun", "Surgical removal of part or all of an organ or of a tumor, including metastases in lung or liver.", "رزکسیون (برداشتن بخشی از اندام)", "tx", "surg", []],
    ["retinoblastoma", "ret-ih-noh-blas-TOH-mah", "Malignant embryonic tumor of the retina of the eye in young children.", "رتینوبلاستوم (سرطان شبکیه)", "nm", "mal", []],
    ["rhabdomyoma", "rab-doh-mye-OH-mah", "Benign tumor of striated (skeletal or heart) muscle.", "رابدومیوم (تومور خوش‌خیم ماهیچه مخطط)", "nm", "ben", []],
    ["rhabdomyosarcoma", "rab-doh-mye-oh-sar-KOH-mah", "Malignant tumor of skeletal muscle; most common soft-tissue sarcoma in children.", "رابدومیوسارکوم", "nm", "mal", []],
    ["risk factor", "risk FAK-ter", "Anything that increases the chance of developing a disease, such as smoking for lung cancer.", "عامل خطر", "lx", "sci", []],
    ["salpingo-oophorectomy", "sal-PING-goh-oh-of-oh-REK-toh-mee", "Surgical removal of the fallopian tubes and ovaries.", "سالپنگو-اووفورکتومی", "tx", "surg", []],
    ["sarcoma", "sar-KOH-mah", "Malignant tumor of connective and supportive tissue such as bone, cartilage, fat, muscle, vessels and fibrous tissue.", "سارکوم (سرطان بافت همبند)", "nm", "mal", []],
    ["sarcomata", "sar-KOH-mah-tah", "Classical plural of sarcoma; sarcomas is also accepted.", "سارکوم‌ها (جمع لاتین)", "lx", "pl", []],
    ["screening", "SKREEN-ing", "Testing healthy people without symptoms to find cancer or precancer early.", "غربالگری", "sx", "scr", []],
    ["secondary tumor", "SEK-on-dair-ee TOO-mer", "Tumor formed by cancer cells that spread from the primary tumor.", "تومور ثانویه", "cl", "bio", []],
    ["seizure", "SEE-zher", "Sudden abnormal electrical activity of the brain; can be the first sign of a brain tumor.", "تشنج", "sx", "sx", []],
    ["seminoma", "sem-ih-NOH-mah", "Malignant germ cell tumor of the testis.", "سمینوم (سرطان بیضه)", "nm", "mal", []],
    ["sentinel lymph node biopsy", "SEN-tih-nul limf node BYE-op-see", "Removal of the first lymph node(s) to which cancer is likely to spread, found with dye or a radioactive tracer.", "بیوپسی غده لنفاوی نگهبان", "dx", "bx", ["SLNB"]],
    ["sigmoidoscopy", "sig-moy-DOS-koh-pee", "Examination of the rectum and sigmoid colon with a scope.", "سیگموئیدوسکوپی", "dx", "bx", []],
    ["small cell lung cancer", "smawl sel lung KAN-ser", "Fast-growing lung cancer whose small round cells look like oats under the microscope; also oat cell cancer.", "سرطان ریه سلول کوچک", "nm", "mal", ["SCLC"]],
    ["sputum cytology", "SPYOO-tum sye-TOL-oh-jee", "Microscopic examination of mucus coughed up from the lungs for cancer cells.", "سیتولوژی خلط", "dx", "bx", []],
    ["squamous cell carcinoma", "SKWAY-mus sel kar-sih-NOH-mah", "Carcinoma of flat squamous cells of the skin and of the lining of the respiratory and digestive tracts, cervix and anus; also epidermoid carcinoma.", "کارسینوم سلول سنگفرشی", "nm", "mal", ["SCC"]],
    ["stage", "stayj", "Extent of cancer in the body: its size and how far it has spread.", "مرحله (استیج) سرطان", "dx", "stg", []],
    ["staging", "STAY-jing", "Process of finding out the size of the tumor and how far it has spread; guides treatment and prognosis.", "مرحله‌بندی", "dx", "stg", []],
    ["stem cell transplant", "stem sel TRANS-plant", "Restoring blood-forming stem cells destroyed by high-dose chemotherapy or radiation; used mostly for leukemia and lymphoma.", "پیوند سلول بنیادی", "tx", "rx", []],
    ["supportive care", "suh-POR-tiv kair", "Care that prevents or treats symptoms and side effects, such as antiemetics, nutrition and access devices.", "مراقبت حمایتی", "tx", "care", []],
    ["surgical margin", "SER-jih-kal MAR-jin", "Rim of normal tissue around a removed tumor; clear (negative) margins mean no cancer at the edge.", "حاشیه جراحی", "dx", "bx", []],
    ["surgical oncologist", "SER-jih-kal ong-KOL-oh-jist", "Surgeon who specializes in biopsy and removal of tumors.", "جراح سرطان (جراح انکولوژی)", "lx", "sci", []],
    ["systemic radiation therapy", "sis-TEM-ik ray-dee-AY-shun THAIR-ah-pee", "Radioactive liquid swallowed or given into a vein that travels in the blood to cancer cells throughout the body.", "پرتودرمانی سیستمیک", "tx", "rad", []],
    ["targeted therapy", "TAR-get-ed THAIR-ah-pee", "Drugs that attack specific molecules that help cancer cells grow, with less harm to normal cells.", "درمان هدفمند", "tx", "rx", []],
    ["teratoma", "ter-ah-TOH-mah", "Tumor of germ cells that can form many tissues such as hair, teeth, bone and muscle; may be benign or malignant.", "تراتوم", "nm", "mal", []],
    ["thoracoscopy", "thor-ah-KOS-koh-pee", "Examination of the chest cavity with a scope inserted through a small cut between two ribs.", "توراکوسکوپی", "dx", "bx", []],
    ["thoracotomy", "thor-ah-KOT-oh-mee", "Larger incision between the ribs to open the chest and examine internal organs.", "توراکوتومی (برش قفسه سینه)", "dx", "bx", []],
    ["thrombocytopenia", "throm-boh-sye-toh-PEE-nee-ah", "Lower than normal number of platelets, causing easy bruising and bleeding; a side effect of some chemotherapy.", "ترومبوسیتوپنی (کمبود پلاکت)", "sx", "sx", []],
    ["thyroidectomy", "thye-roy-DEK-toh-mee", "Surgical removal of all or part of the thyroid gland.", "تیروئیدکتومی", "tx", "surg", []],
    ["TNM staging", "tee-en-em STAY-jing", "Staging system that describes the primary Tumor (T), regional lymph Nodes (N) and distant Metastasis (M).", "مرحله‌بندی TNM", "dx", "stg", ["TNM"]],
    ["transitional cell carcinoma", "tran-ZISH-un-al sel kar-sih-NOH-mah", "Carcinoma of the stretchy lining of the bladder, ureters and renal pelvis; also urothelial carcinoma.", "کارسینوم سلول ترانزیشنال (مثانه)", "nm", "mal", []],
    ["transrectal ultrasound", "tranz-REK-tal UL-trah-sownd", "Ultrasound probe placed in the rectum to examine the prostate and rectum.", "سونوگرافی از راه مقعد", "dx", "img", ["TRUS"]],
    ["tumor", "TOO-mer", "Abnormal mass of tissue that results from excessive cell division; may be benign or malignant.", "تومور (توده)", "lx", "sci", []],
    ["tumor board", "TOO-mer bord", "Meeting of specialists (oncologists, surgeons, pathologists, radiologists) who plan the treatment of each cancer patient together.", "کمیته تومور (تیم چندتخصصی)", "lx", "sci", []],
    ["tumor marker", "TOO-mer MAR-ker", "Substance in blood or tissue made by a tumor; used to help diagnose cancer and follow treatment.", "نشانگر تومور", "sx", "scr", []],
    ["tumor suppressor gene", "TOO-mer suh-PRES-er jeen", "Gene that normally slows cell division or repairs DNA; when it is lost or mutated, cancer can develop.", "ژن سرکوبگر تومور", "cl", "bio", []],
    ["ultraviolet radiation", "ul-trah-VYE-oh-let ray-dee-AY-shun", "Invisible rays from the sun and tanning beds; the main cause of skin cancer.", "پرتو فرابنفش", "cl", "bio", ["UV"]],
    ["undifferentiated", "un-dif-er-EN-shee-ay-ted", "Describing cells that have no features of mature specialized cells.", "تمایزنیافته", "cl", "bio", []],
    ["upper GI series", "UP-er jee-eye SEER-eez", "X-rays of the esophagus and stomach after drinking barium; also barium swallow.", "سری گوارشی فوقانی (بلع باریم)", "dx", "img", ["UGI"]],
    ["urine cytology", "YOOR-in sye-TOL-oh-jee", "Microscopic examination of urine for abnormal cells to diagnose bladder or kidney cancer.", "سیتولوژی ادرار", "dx", "bx", []],
    ["well differentiated", "wel dif-er-EN-shee-ay-ted", "Describing tumor cells that look much like normal cells of the tissue; typical of benign or low-grade tumors.", "خوب تمایزیافته", "cl", "bio", []],
    ["Wilms tumor", "wilmz TOO-mer", "Malignant embryonic tumor of the kidney in children; an exception to the -blastoma naming rule (nephroblastoma).", "تومور ویلمز (سرطان کلیه کودکان)", "nm", "mal", []]
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
    ['a-, an-', ['an', 'a'], 'without, not', 'بدون، فاقد', '*'],
    ['ana-', ['ana'], 'backward, without', 'وارونه، بی', 'cl'],
    ['anti-', ['anti'], 'against', 'ضد', 'tx'],
    ['brachy-', ['brachy'], 'short, near', 'کوتاه، نزدیک', 'tx'],
    ['dys-', ['dys'], 'bad, painful, difficult, abnormal', 'بد، دشوار، نابه‌هنجار', '*'],
    ['endo-', ['endo', 'end'], 'within, inner', 'درون', 'dx'],
    ['epi-', ['epi'], 'upon, above', 'روی', 'nm'],
    ['ex-', ['ex'], 'out, away from', 'بیرون', 'tx'],
    ['hyper-', ['hyper'], 'excessive, above normal', 'بیش از حد', 'cl'],
    ['hypo-', ['hypo'], 'below, deficient', 'کم، زیر', 'sx'],
    ['in-', ['in'], 'in, into; not', 'درون؛ نا', 'dx'],
    ['meta-', ['meta'], 'change, beyond', 'تغییر، فراتر', 'cl'],
    ['neo-', ['neo'], 'new', 'نو، تازه', 'lx'],
    ['para-', ['para'], 'beside, near, abnormal', 'کنار، نابه‌جا', 'sx'],
    ['peri-', ['peri'], 'around', 'پیرامون', '*'],
    ['pre-', ['pre'], 'before', 'پیش از', 'sx'],
    ['pro-', ['pro'], 'before, forward', 'پیش', 'tx'],
    ['trans-', ['trans'], 'across, through', 'از میان، از راه', 'dx'],
    ['intra-', ['intra'], 'within', 'درون', '*'],
    // ریشه‌های سرطان و رشد
    ['onc/o', ['onc'], 'tumor', 'تومور', 'lx'],
    ['carcin/o', ['carcin'], 'cancer (epithelial)', 'سرطان (بافت پوششی)', 'lx'],
    ['sarc/o', ['sarc'], 'flesh, connective tissue', 'گوشت، بافت همبند', 'nm'],
    ['cancer/o', ['cancer'], 'cancer', 'سرطان', 'lx'],
    ['plas/o', ['plas'], 'formation, growth', 'شکل‌گیری، رشد', 'cl'],
    ['blast/o', ['blast'], 'embryonic, immature cell', 'سلول نابالغ، جنینی', 'nm'],
    ['cyt/o', ['cyt'], 'cell', 'سلول', 'cl'],
    ['hist/o', ['hist'], 'tissue', 'بافت', 'lx'],
    ['gen/o', ['gen'], 'producing, origin', 'ایجاد، پیدایش', 'cl'],
    ['mut/a', ['mut'], 'change', 'تغییر', 'cl'],
    ['path/o', ['path'], 'disease', 'بیماری', 'lx'],
    ['necr/o', ['necr'], 'death', 'مرگ', 'cl'],
    ['apo-', ['apo'], 'away from, separation', 'جدا', 'cl'],
    ['angi/o', ['angi'], 'vessel', 'رگ', 'nm'],
    ['hemangi/o', ['hemangi'], 'blood vessel', 'رگ خونی', 'nm'],
    ['lymphangi/o', ['lymphangi'], 'lymph vessel', 'رگ لنفی', 'nm'],
    // بافت‌ها و سلول‌ها در نام تومور
    ['aden/o', ['aden'], 'gland', 'غده', 'nm'],
    ['chondr/o', ['chondr'], 'cartilage', 'غضروف', 'nm'],
    ['fibr/o', ['fibr'], 'fiber, fibrous tissue', 'رشته، بافت فیبری', 'nm'],
    ['lip/o', ['lip'], 'fat', 'چربی', 'nm'],
    ['my/o', ['my'], 'muscle', 'ماهیچه', 'nm'],
    ['leiomy/o', ['leiomy'], 'smooth muscle', 'ماهیچه صاف', 'nm'],
    ['rhabdomy/o', ['rhabdomy'], 'skeletal (striated) muscle', 'ماهیچه مخطط', 'nm'],
    ['oste/o', ['oste'], 'bone', 'استخوان', 'nm'],
    ['neur/o', ['neur'], 'nerve', 'عصب', 'nm'],
    ['gli/o', ['gli'], 'glue; glial cell', 'چسب؛ سلول گلیال', 'nm'],
    ['astr/o', ['astr'], 'star', 'ستاره', 'nm'],
    ['mening/o', ['mening'], 'meninges', 'پرده‌های مغز', 'nm'],
    ['melan/o', ['melan'], 'black, dark', 'سیاه، تیره', 'nm'],
    ['papill/o', ['papill'], 'nipple-like projection', 'برآمدگی پستانک‌مانند', 'nm'],
    ['squam/o', ['squam'], 'scale', 'فلس، سنگفرشی', 'nm'],
    ['bas/o', ['bas'], 'base', 'پایه', 'nm'],
    ['epitheli/o', ['epitheli'], 'epithelium', 'بافت پوششی', 'nm'],
    ['mes/o', ['mes'], 'middle', 'میانی', 'nm'],
    ['thel/o, theli/o', ['theli', 'thel'], 'nipple; covering layer', 'نوک؛ لایه پوششی', 'nm'],
    ['terat/o', ['terat'], 'monster, malformation', 'هیولا، ناهنجاری', 'nm'],
    ['retin/o', ['retin'], 'retina', 'شبکیه', 'nm'],
    ['medull/o', ['medull'], 'medulla, inner part', 'مغز (بخش درونی)', 'nm'],
    ['nephr/o', ['nephr'], 'kidney', 'کلیه', 'nm'],
    ['hepat/o', ['hepat'], 'liver', 'کبد', 'nm'],
    ['semin/o', ['semin'], 'semen', 'منی', 'nm'],
    ['lymph/o', ['lymph'], 'lymph', 'لنف', 'nm'],
    ['myel/o', ['myel'], 'bone marrow; spinal cord', 'مغز استخوان؛ نخاع', 'nm'],
    ['leuk/o', ['leuk'], 'white', 'سفید', 'nm'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', 'خون', '*'],
    ['thromb/o', ['thromb'], 'clot; platelet', 'لخته؛ پلاکت', 'sx'],
    ['neutr/o', ['neutr'], 'neutral; neutrophil', 'خنثی؛ نوتروفیل', 'tx'],
    // اندام‌ها در نشانه‌ها، تشخیص و جراحی
    ['mast/o, mamm/o', ['mast', 'mamm'], 'breast', 'پستان', 'dx'],
    ['hyster/o', ['hyster'], 'uterus', 'رحم', 'tx'],
    ['metr/o, metri/o', ['metri', 'metr'], 'uterus', 'رحم', 'dx'],
    ['oophor/o', ['oophor'], 'ovary', 'تخمدان', 'tx'],
    ['salping/o', ['salping'], 'fallopian tube', 'لوله رحم', 'tx'],
    ['orchi/o', ['orchi'], 'testis', 'بیضه', 'tx'],
    ['prostat/o', ['prostat'], 'prostate', 'پروستات', 'tx'],
    ['cyst/o', ['cyst'], 'bladder; sac', 'مثانه؛ کیسه', 'dx'],
    ['ur/o', ['ur'], 'urine', 'ادرار', 'sx'],
    ['pyel/o', ['pyel'], 'renal pelvis', 'لگنچه کلیه', 'dx'],
    ['laryng/o', ['laryng'], 'larynx', 'حنجره', 'dx'],
    ['pneumon/o', ['pneumon'], 'lung', 'ریه', 'tx'],
    ['lob/o', ['lob'], 'lobe', 'لوب', 'tx'],
    ['bronch/o', ['bronch'], 'bronchus', 'نایژه', 'dx'],
    ['thorac/o', ['thorac'], 'chest', 'قفسه سینه', 'dx'],
    ['esophag/o', ['esophag'], 'esophagus', 'مری', 'dx'],
    ['col/o, colon/o', ['colon', 'col'], 'colon', 'روده بزرگ', 'dx'],
    ['sigmoid/o', ['sigmoid'], 'sigmoid colon', 'کولون سیگموئید', 'dx'],
    ['rect/o', ['rect'], 'rectum', 'راست‌روده', 'dx'],
    ['thyroid/o', ['thyroid'], 'thyroid gland', 'تیروئید', 'tx'],
    ['kerat/o', ['kerat'], 'horny tissue; cornea', 'بافت شاخی', 'sx'],
    ['actin/o', ['actin'], 'ray (of the sun)', 'پرتو (آفتاب)', 'sx'],
    ['phag/o', ['phag'], 'eat, swallow', 'خوردن، بلعیدن', 'sx'],
    ['muc/o', ['muc'], 'mucus, mucous membrane', 'مخاط', 'tx'],
    ['tox/o', ['tox'], 'poison', 'سم', 'tx'],
    ['cry/o', ['cry'], 'cold', 'سرما', 'tx'],
    ['radi/o', ['radi'], 'radiation, X-ray', 'پرتو', 'tx'],
    ['chem/o', ['chem'], 'drug, chemical', 'دارو، شیمیایی', 'tx'],
    ['immun/o', ['immun'], 'immunity, protection', 'ایمنی', 'tx'],
    ['son/o', ['son'], 'sound', 'صدا', 'dx'],
    ['bi/o', ['bi'], 'life, living', 'زندگی، زنده', 'dx'],
    // پسوندها
    ['-oma', ['oma'], 'tumor, mass', 'تومور، توده', '*'],
    ['-carcinoma', ['carcinoma'], 'malignant epithelial tumor', 'سرطان بافت پوششی', 'nm'],
    ['-sarcoma', ['sarcoma'], 'malignant connective tissue tumor', 'سرطان بافت همبند', 'nm'],
    ['-blastoma', ['blastoma'], 'tumor of immature cells', 'تومور سلول‌های جنینی', 'nm'],
    ['-plasm', ['plasm'], 'formation, growth', 'رشد، شکل', 'lx'],
    ['-plasia', ['plasia'], 'development, formation', 'رشد، پیدایش', 'cl'],
    ['-stasis', ['stasis'], 'standing, stopping', 'ایستادن', 'cl'],
    ['-genesis', ['genesis'], 'origin, formation', 'پیدایش', 'cl'],
    ['-genic', ['genic'], 'producing, originating', 'سازنده، زا', 'cl'],
    ['-gen', ['gen'], 'agent that produces', 'عامل ایجادکننده', 'cl'],
    ['-osis', ['osis'], 'abnormal condition', 'حالت غیرطبیعی', '*'],
    ['-ptosis', ['ptosis'], 'falling', 'افتادن', 'cl'],
    ['-emia', ['emia'], 'blood condition', 'حالت خون', 'sx'],
    ['-uria', ['uria'], 'urine condition', 'حالت ادرار', 'sx'],
    ['-ptysis', ['ptysis'], 'spitting', 'تف کردن، خلط', 'sx'],
    ['-phagia', ['phagia'], 'eating, swallowing', 'بلع', 'sx'],
    ['-pnea', ['pnea'], 'breathing', 'تنفس', 'sx'],
    ['-penia', ['penia'], 'deficiency', 'کمبود', 'sx'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', 'sx'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-edema', ['edema'], 'swelling', 'ورم', 'sx'],
    ['-plakia', ['plakia'], 'patch, plate', 'لکه، صفحه', 'sx'],
    ['-logy', ['logy'], 'study of', 'علم، مطالعه', 'lx'],
    ['-logist', ['logist'], 'specialist', 'متخصص', 'lx'],
    ['-scopy', ['scopy'], 'visual examination', 'معاینه با نگاه', 'dx'],
    ['-scope', ['scope'], 'instrument for viewing', 'ابزار دیدن', 'dx'],
    ['-graphy', ['graphy'], 'process of recording', 'فرایند ثبت تصویر', 'dx'],
    ['-gram', ['gram'], 'record, image', 'تصویر، ثبت', 'dx'],
    ['-opsy', ['opsy'], 'view of', 'دیدن', 'dx'],
    ['-ectomy', ['ectomy'], 'excision, removal', 'برداشتن', 'tx'],
    ['-tomy', ['tomy'], 'incision, cutting into', 'برش', 'tx'],
    ['-stomy', ['stomy'], 'new opening', 'دهانه تازه', 'tx'],
    ['-therapy', ['therapy'], 'treatment', 'درمان', 'tx'],
    ['-suppression', ['suppression'], 'holding back', 'سرکوب', 'tx'],
    ['-emesis, -emetic', ['emetic', 'emesis'], 'vomiting', 'استفراغ', 'tx'],
    ['-toxic', ['toxic'], 'poisonous', 'سمی', 'tx'],
    ['-cyte', ['cyte'], 'cell', 'سلول', 'cl'],
    ['-ic, -al, -ar, -ous', ['ic', 'al', 'ar', 'ous'], 'pertaining to', 'مربوط به', '*'],
    ['-tic', ['tic'], 'pertaining to', 'مربوط به', '*'],
    ['-ia, -y', ['ia', 'y'], 'condition, process', 'حالت، فرایند', '*'],
    ['-ion, -ation', ['ation', 'ion'], 'process', 'فرایند', '*'],
    ['-um', ['um'], 'structure, thing', 'ساختار، چیز', '*']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    // پایه و پرونده
    ['CA, Ca', 'cancer; carcinoma', 'سرطان؛ کارسینوم', 'lx'],
    ['Dx', 'diagnosis', 'تشخیص', 'lx'],
    ['Tx', 'treatment', 'درمان', 'lx'],
    ['Bx', 'biopsy', 'بیوپسی (نمونه‌برداری)', 'lx'],
    ['Hx', 'history', 'شرح حال، سابقه', 'lx'],
    ['Sx', 'symptoms', 'علائم', 'lx'],
    ['mets', 'metastases', 'متاستازها', 'lx'],
    ['s/p', 'status post', 'وضعیت پس از (عمل یا درمان)', 'lx'],
    ['p.o.', 'by mouth (per os)', 'خوراکی (از راه دهان)', 'lx'],
    ['q.d.', 'every day (quaque die)', 'روزی یک بار', 'lx'],
    ['F/U', 'follow-up', 'پیگیری', 'lx'],
    ['mCi', 'millicurie', 'میلی‌کوری (واحد پرتوزایی)', 'lx'],
    ['NED', 'no evidence of disease', 'بدون نشانه بیماری', 'lx'],
    // سلول و پیدایش سرطان
    ['DNA', 'deoxyribonucleic acid', 'دی‌ان‌ای (ماده ژنتیک)', 'cl'],
    ['BRCA1/BRCA2', 'breast cancer gene 1 and 2', 'ژن‌های سرطان پستان ۱ و ۲', 'cl'],
    ['HPV', 'human papillomavirus', 'ویروس پاپیلومای انسانی', 'cl'],
    ['EBV', 'Epstein-Barr virus', 'ویروس اپشتین-بار', 'cl'],
    ['UV', 'ultraviolet', 'فرابنفش', 'cl'],
    // نام تومورها
    ['ALL', 'acute lymphocytic leukemia', 'لوسمی لنفوسیتی حاد', 'nm'],
    ['AML', 'acute myeloid leukemia', 'لوسمی میلوئیدی حاد', 'nm'],
    ['CLL', 'chronic lymphocytic leukemia', 'لوسمی لنفوسیتی مزمن', 'nm'],
    ['CML', 'chronic myeloid leukemia', 'لوسمی میلوئیدی مزمن', 'nm'],
    ['HL', 'Hodgkin lymphoma', 'لنفوم هوچکین', 'nm'],
    ['NHL', 'non-Hodgkin lymphoma', 'لنفوم غیرهوچکین', 'nm'],
    ['MM', 'multiple myeloma', 'مولتیپل میلوما', 'nm'],
    ['SCC', 'squamous cell carcinoma', 'کارسینوم سلول سنگفرشی', 'nm'],
    ['BCC', 'basal cell carcinoma', 'کارسینوم سلول بازال', 'nm'],
    ['DCIS', 'ductal carcinoma in situ', 'کارسینوم درجای مجرای پستان', 'nm'],
    ['SCLC', 'small cell lung cancer', 'سرطان ریه سلول کوچک', 'nm'],
    ['NSCLC', 'non-small cell lung cancer', 'سرطان ریه غیرسلول کوچک', 'nm'],
    // نشانه‌ها و غربالگری
    ['PSA', 'prostate-specific antigen', 'آنتی‌ژن اختصاصی پروستات', 'sx'],
    ['FOBT', 'fecal occult blood test', 'آزمایش خون مخفی مدفوع', 'sx'],
    ['gFOBT', 'guaiac fecal occult blood test', 'آزمایش خون مخفی مدفوع با گایاک', 'sx'],
    ['DRE', 'digital rectal examination', 'معاینه انگشتی مقعد', 'sx'],
    ['BSE', 'breast self-examination', 'خودآزمایی پستان', 'sx'],
    ['CEA', 'carcinoembryonic antigen', 'آنتی‌ژن کارسینوامبریونیک', 'sx'],
    ['AFP', 'alpha-fetoprotein', 'آلفافیتوپروتئین', 'sx'],
    ['FAP', 'familial adenomatous polyposis', 'پولیپوز آدنوماتوز خانوادگی', 'sx'],
    ['WBC', 'white blood cell; white blood cell count', 'گلبول سفید؛ شمارش گلبول سفید', 'sx'],
    ['RBC', 'red blood cell', 'گلبول قرمز', 'sx'],
    // تشخیص و مرحله‌بندی
    ['CBC', 'complete blood count', 'شمارش کامل خون', 'dx'],
    ['CT, CAT', 'computed (axial) tomography', 'سی‌تی‌اسکن', 'dx'],
    ['MRI', 'magnetic resonance imaging', 'ام‌آرآی', 'dx'],
    ['PET', 'positron emission tomography', 'پت‌اسکن', 'dx'],
    ['IVP', 'intravenous pyelogram/pyelography', 'پیلوگرافی وریدی', 'dx'],
    ['TRUS', 'transrectal ultrasound', 'سونوگرافی از راه مقعد', 'dx'],
    ['FNA', 'fine-needle aspiration', 'آسپیراسیون با سوزن ظریف', 'dx'],
    ['SLNB', 'sentinel lymph node biopsy', 'بیوپسی غده لنفاوی نگهبان', 'dx'],
    ['ER/PR', 'estrogen receptor / progesterone receptor', 'گیرنده استروژن / پروژسترون', 'dx'],
    ['TNM', 'tumor, node, metastasis', 'تومور، غده لنفاوی، متاستاز', 'dx'],
    ['CIS', 'carcinoma in situ', 'کارسینوم درجا', 'dx'],
    // درمان
    ['chemo', 'chemotherapy', 'شیمی‌درمانی', 'tx'],
    ['RT, XRT', 'radiation therapy', 'پرتودرمانی', 'tx'],
    ['BMT', 'bone marrow transplantation', 'پیوند مغز استخوان', 'tx'],
    ['PBSCT', 'peripheral blood stem cell transplantation', 'پیوند سلول بنیادی خون محیطی', 'tx'],
    ['GVHD', 'graft-versus-host disease', 'بیماری پیوند علیه میزبان', 'tx'],
    ['CSF', 'colony-stimulating factor', 'فاکتور محرک کلونی', 'tx'],
    ['G-CSF', 'granulocyte colony-stimulating factor', 'فاکتور محرک کلونی گرانولوسیت', 'tx'],
    ['BCG', 'bacille Calmette-Guerin', 'باسیل کالمت-گرن (واکسن ب‌ث‌ژ)', 'tx'],
    ['LH-RH', 'luteinizing hormone-releasing hormone', 'هورمون آزادکننده هورمون لوتئینی', 'tx'],
    ['MRM', 'modified radical mastectomy', 'ماستکتومی رادیکال تعدیل‌شده', 'tx'],
    ['RAI', 'radioactive iodine', 'ید رادیواکتیو', 'tx'],
    ['I-131', 'iodine-131', 'ید ۱۳۱ (رادیواکتیو)', 'tx'],
    ['MTX', 'methotrexate', 'متوترکسات', 'tx'],
    ['5-FU', '5-fluorouracil', 'فلوئورواوراسیل', 'tx'],
    ['CR', 'complete remission', 'بهبودی کامل', 'tx'],
    ['TSH', 'thyroid-stimulating hormone', 'هورمون محرک تیروئید', 'tx']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {};
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], c: r[5], ab: r[6] || [] }));
  /* ---------- دسته‌بندی واژه‌ها ----------
   * دسته هر واژه در داده‌ها (tools/terms) دستی تعیین شده است؛ این‌جا فقط نام و نماد دسته‌ها آمده است. */
  const CATS = [
    { id: 'sci', icon: '🎓', name: 'واژه‌های پایه و تخصص‌ها' },
    { id: 'bio', icon: '🔬', name: 'سلول و رشد تومور' },
    { id: 'ben', icon: '🟢', name: 'تومورهای خوش‌خیم' },
    { id: 'mal', icon: '🔴', name: 'تومورهای بدخیم' },
    { id: 'heme', icon: '🩸', name: 'سرطان خون و لنف' },
    { id: 'sx', icon: '🔎', name: 'نشانه‌ها و یافته‌ها' },
    { id: 'pre', icon: '⚠️', name: 'ضایعه‌های پیش‌سرطانی' },
    { id: 'scr', icon: '🧪', name: 'غربالگری و آزمایش' },
    { id: 'bx', icon: '🔦', name: 'نمونه‌برداری و آندوسکوپی' },
    { id: 'img', icon: '🩻', name: 'تصویربرداری' },
    { id: 'stg', icon: '📊', name: 'درجه، مرحله و گیرنده‌ها' },
    { id: 'surg', icon: '✂️', name: 'جراحی' },
    { id: 'rad', icon: '☢️', name: 'پرتودرمانی' },
    { id: 'rx', icon: '💊', name: 'دارو و درمان سیستمیک' },
    { id: 'care', icon: '🤝', name: 'رویکرد درمان و پیامد' },
    { id: 'pl', icon: '📚', name: 'صفت‌ها و جمع‌ها' }
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
    return svg(360, 200, `${f(180, 24, 'یک واژه = ریشه + ریشه + پسوند', { size: 11.5, fill: INK, w: 800 })}
      ${part(10, 74, 'oste', '#1c7ed6', '#e1effc')}${part(90, 66, 'sarc', '#c92a2a', '#fff0f0')}${part(162, 60, 'oma', '#2b8a3e', '#e6fcf5')}
      ${br(10, 84, 'root • ریشه', 'استخوان', '#1c7ed6')}${br(90, 156, 'root • ریشه', 'گوشت، بافت همبند', '#c92a2a')}${br(162, 222, 'suffix • پسوند', 'تومور', '#2b8a3e')}
      <path d="M228 64 h10" stroke="${LINE}" stroke-width="2"/><rect x="242" y="38" width="112" height="56" rx="10" fill="${VIO_BG}"/>${f(298, 58, 'سرطان بدخیم', { size: 11, fill: BAD, w: 800 })}${f(298, 76, 'بافت همبندِ استخوان', { size: 10.5, fill: INK, w: 800 })}
      <path d="M196 156 C150 182 92 182 48 156" stroke="${VIO}" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M52 152 l-6 4 l7 3" stroke="${VIO}" stroke-width="2" fill="none"/>
      ${f(180, 194, 'معنی را از آخر بخوان: اول پسوند، بعد ریشه‌ها', { size: 10.5, fill: VIO, w: 700 })}`, 'آناتومی واژه osteosarcoma');
  };

  /* خوش‌خیم در برابر بدخیم */
  A['benign-malignant'] = () => {
    const sh = 's' + (++UID);
    const ben = [[64, 74], [86, 66], [76, 92], [100, 88], [58, 100], [92, 110], [70, 116], [110, 68]].map(([x, y]) => cellN(x, y, 10, { c1: '#ebfbee', c2: '#8ce99a', st: '#2f9e44', nc: '#2b8a3e' })).join('');
    const mal = [[246, 84, 12], [270, 74, 10], [262, 104, 13], [290, 98, 11], [236, 110, 9], [300, 70, 8], [314, 112, 9], [284, 128, 10], [330, 90, 7]].map(([x, y, r], i) => cellC(x, y, r, i + 5)).join('');
    return svg(360, 280, `<defs>${shadow(sh)}</defs>
      ${card(184, 6, 170, 226, GOOD_BG, sh)}${card(6, 6, 170, 226, BAD_BG, sh)}
      <g transform="translate(178 0)"><ellipse cx="84" cy="92" rx="54" ry="40" fill="none" stroke="${GOOD}" stroke-width="3"/>${ben}
      ${t(84, 22, 'capsule', { size: 9.5, fill: GOOD })}${f(84, 36, 'کپسول', { size: 9, fill: GOOD })}
      ${lab(91, 158, 'benign', 'خوش‌خیم', { size: 13, fill: GOOD })}
      ${f(91, 192, 'تمایز خوب • رشد آهسته', { size: 9.5, fill: INK, w: 700 })}${f(91, 208, 'فشار به اطراف • بدون متاستاز', { size: 9.5, fill: INK, w: 700 })}</g>
      <g transform="translate(-178 0)"><path d="M210 82 C232 52 270 46 300 60 C330 70 344 98 330 124 C312 150 270 150 246 138 C222 126 200 110 210 82Z" fill="#ffc9c9" opacity=".55"/>
      <path d="M330 120 q14 14 18 30 M216 128 q-10 18 -4 34 M300 140 q4 18 18 26" stroke="${BAD}" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-dasharray="3 3"/>
      ${mal}${cellC(346, 158, 6, 31)}${cellC(214, 168, 6, 37)}
      ${lab(269, 180, 'malignant', 'بدخیم', { size: 13, fill: BAD })}
      ${f(269, 212, 'کم‌تمایز • رشد تند • نفوذ', { size: 9.5, fill: INK, w: 700 })}${f(269, 226, 'متاستاز با خون و لنف', { size: 9.5, fill: INK, w: 700 })}</g>
      ${f(180, 256, 'خوش‌خیم: «توپ در کیسه» • بدخیم: «خرچنگ» با پنجه‌هایی به اطراف', { size: 10, fill: VIO, w: 700 })}`, 'تومور خوش‌خیم و بدخیم');
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
    const spots = [[180, 38, 'medical oncologist', 'شیمی‌درمانی و دارو', 'chemo'], [308, 92, 'radiation oncologist', 'پرتودرمانی', 'ray'], [292, 196, 'pathologist', 'تشخیص زیر میکروسکوپ', 'micro'],
      [180, 248, 'oncology nurse', 'مراقبت و دارو', 'nurse'], [68, 196, 'radiologist', 'تصویربرداری', 'scan'], [52, 92, 'surgical oncologist', 'برداشتن تومور', 'knife']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs><circle cx="180" cy="142" r="104" fill="none" stroke="#d0bfff" stroke-width="2" stroke-dasharray="5 5"/>
      <circle cx="180" cy="142" r="34" fill="${VIO_BG}" filter="url(#${sh})"/>${f(180, 140, 'بیمار', { size: 11, fill: VIO, w: 800 })}${t(180, 156, 'tumor board', { size: 9, fill: MUTED })}
      ${spots.map(([x, y, en, fa, ic]) => `<circle cx="${x}" cy="${y - 12}" r="21" fill="#fff" filter="url(#${sh})"/>${icons[ic](x, y - 12)}${t(x, y + 22, en, { size: 9.5, fill: INK, w: 800 })}${f(x, y + 35, fa, { size: 9 })}`).join('')}`, 'تیم درمان سرطان');
  };

  /* مفرد و جمع واژه‌های سرطان */
  A.plurals = () => {
    const rows = [['-is', '-es', 'metastasis', 'metastases'], ['-is', '-es', 'diagnosis', 'diagnoses'], ['-is', '-es', 'prognosis', 'prognoses'], ['-us', '-i', 'nevus', 'nevi'],
      ['-oma', '-omata', 'carcinoma', 'carcinomata'], ['-oma', '-omata', 'sarcoma', 'sarcomata'], ['-oma', '-omata', 'leiomyoma', 'leiomyomata'], ['+ s', '+ s', 'polyp', 'polyps']];
    const cell = i => { const c = i < 4 ? 0 : 1, r = i % 4, x = 8 + c * 176, y = 32 + r * 44; const R = rows[i];
      return `<rect x="${x}" y="${y}" width="168" height="38" rx="10" fill="${['#eef2ff', '#fff0f6'][c]}"/>${pill(x + 4, y + 9, 84, 20, '#fff')}${t(x + 46, y + 23, R[0] === '+ s' ? '+ s' : `${R[0]} → ${R[1]}`, { size: 9, fill: VIO, w: 900 })}${t(x + 93, y + 16, R[2], { size: 9, anchor: 'start', fill: MUTED, w: 700 })}${t(x + 93, y + 31, R[3], { size: 10.5, anchor: 'start', fill: INK, w: 900 })}`; };
    return svg(360, 214, `${f(180, 20, 'مفرد و جمع: پایان واژه قاعده جمع را تعیین می‌کند', { size: 11, fill: INK, w: 700 })}${rows.map((_, i) => cell(i)).join('')}`, 'مفرد و جمع واژه‌های سرطان');
  };

  /* سه پسوند جراحی: -ectomy، -tomy، -stomy */
  A['ectomy-tomy-stomy'] = () => {
    const sh = 's' + (++UID);
    const box = (x, c, bg, suf, fa, ex, exfa, icon) => `${card(x, 8, 112, 194, bg, sh)}${icon}${t(x + 56, 118, suf, { size: 17, fill: c, w: 900 })}${f(x + 56, 138, fa, { size: 10.5, fill: INK, w: 800 })}${t(x + 56, 166, ex, { size: 10, fill: c, w: 800 })}${f(x + 56, 182, exfa, { size: 9 })}`;
    const organ = (x, cut) => `<ellipse cx="${x + 56}" cy="62" rx="34" ry="26" fill="#ffc9c9" stroke="#e03131" stroke-width="1.6"/>${cut}`;
    return svg(360, 236, `<defs>${shadow(sh)}</defs>
      ${box(244, '#c92a2a', '#fff0f0', '-ectomy', 'برداشتن', 'mastectomy', 'برداشتن پستان', `<ellipse cx="300" cy="62" rx="34" ry="26" fill="none" stroke="#e03131" stroke-width="1.6" stroke-dasharray="4 3"/><path d="M286 50 l28 24 M314 50 l-28 24" stroke="#c92a2a" stroke-width="3" stroke-linecap="round"/>`)}
      ${box(124, '#1c7ed6', '#e7f5ff', '-tomy', 'برش', 'thoracotomy', 'برش قفسه سینه', organ(124, `<path d="M150 62 h60" stroke="#1c7ed6" stroke-width="3" stroke-dasharray="6 3"/>`))}
      ${box(4, '#2b8a3e', '#ebfbee', '-stomy', 'ساختن دهانه', 'colostomy', 'دهانه روده روی شکم', organ(4, `<circle cx="60" cy="62" r="9" fill="#fff" stroke="#2b8a3e" stroke-width="3"/>`))}
      ${f(180, 224, 'بیرون انداختن، بریدن یا دهانه ساختن؟ پسوند می‌گوید', { size: 10, fill: VIO, w: 700 })}`, 'پسوندهای جراحی');
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
      ${t(269, 30, 'normal cells', { size: 11, fill: GOOD, w: 900 })}${f(269, 46, 'سلول طبیعی', { size: 10, fill: GOOD })}
      <path d="M196 134 H342" stroke="#868e96" stroke-width="2"/>${normal}
      <path d="M232 90 l12 12 M244 90 l-12 12" stroke="${GOOD}" stroke-width="2.4" stroke-linecap="round"/>${f(292, 98, 'جا پر شد؛ بایست!', { size: 9.5, fill: GOOD, w: 800 })}
      ${f(269, 160, 'یک لایه منظم', { size: 10, fill: INK, w: 800 })}${f(269, 176, 'تقسیم فقط به اندازه نیاز', { size: 9.5 })}${f(269, 192, 'سلول پیر: apoptosis', { size: 9.5 })}
      ${t(91, 30, 'cancer cells', { size: 11, fill: BAD, w: 900 })}${f(91, 46, 'سلول سرطانی', { size: 10, fill: BAD })}
      <path d="M18 134 H164" stroke="#868e96" stroke-width="2"/>${pile}
      ${f(91, 160, 'انباشته و بی‌نظم', { size: 10, fill: INK, w: 800 })}${f(91, 176, 'تقسیم بی‌مهار', { size: 9.5 })}${f(91, 192, 'فرار از apoptosis', { size: 9.5 })}
      ${f(180, 232, 'سرطان یعنی تقسیمی که دیگر «ترمز» ندارد', { size: 10.5, fill: VIO, w: 700 })}`, 'تقسیم سلول طبیعی و سرطانی');
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
    return svg(360, 236, `${f(180, 20, 'پله‌های تغییر سلول در بافت پوششی', { size: 11, fill: INK, w: 800 })}
      ${step(4, 'normal', 'طبیعی', nrm)}${step(3, 'hyperplasia', 'سلول بیشتر', hyp)}${step(2, 'dysplasia', 'سلول بدشکل', dys)}${step(1, 'in situ', 'سرطان درجا', cis)}${step(0, 'invasive', 'مهاجم', inv)}
      <defs>${marker(mk, VIO)}</defs><path d="M346 210 H18" stroke="${VIO}" stroke-width="2.2" marker-end="url(#${mk})"/>
      ${f(180, 228, 'خط تیره: غشای پایه (basement membrane)؛ عبور از آن یعنی سرطان مهاجم', { size: 9, fill: VIO, w: 700 })}`, 'از بافت طبیعی تا سرطان مهاجم');
  };

  /* تمایز: خوب، متوسط، کم (درجه ۱ تا ۳) */
  A.differentiation = () => {
    const sh = 's' + (++UID);
    const col = (x, c, bg, en, fa, g, cells) => `${card(x, 8, 112, 190, bg, sh)}${cells}${t(x + 56, 140, en, { size: 10.5, fill: c, w: 900 })}${f(x + 56, 156, fa, { size: 10, fill: INK, w: 800 })}${pill(x + 26, 166, 60, 22, '#fff')}${t(x + 56, 181, g, { size: 10.5, fill: c, w: 900 })}`;
    const grid = (x, fn) => [0, 1, 2].map(r => [0, 1, 2].map(c => fn(x + 26 + c * 30, 36 + r * 30, r * 3 + c)).join('')).join('');
    return svg(360, 230, `<defs>${shadow(sh)}</defs>
      ${col(244, GOOD, GOOD_BG, 'well differentiated', 'خوب تمایزیافته', 'grade 1', grid(244, (x, y) => cellN(x, y, 12, { c1: '#ebfbee', c2: '#8ce99a', st: '#2f9e44', nc: '#2b8a3e' })))}
      ${col(124, '#e67700', '#fff9db', 'moderately', 'تمایز متوسط', 'grade 2', grid(124, (x, y, i) => (i % 3 === 1 ? cellC(x, y, 12, i + 4, { c1: '#fff3bf', c2: '#ffd43b', st: '#e67700', nc: '#a61e4d' }) : cellN(x, y, 12, { c1: '#fff9db', c2: '#ffe066', st: '#f59f00', nc: '#e67700' }))))}
      ${col(4, BAD, BAD_BG, 'poorly differentiated', 'کم‌تمایزیافته', 'grade 3', grid(4, (x, y, i) => cellC(x, y, 12, i + 7)))}
      ${f(180, 218, 'هرچه سلول بیشتر به سلول طبیعی شبیه باشد، درجه (grade) پایین‌تر است', { size: 9.5, fill: VIO, w: 700 })}`, 'تمایز و درجه تومور');
  };

  /* انکوژن و ژن سرکوبگر تومور: پدال گاز و ترمز */
  A['gas-brake'] = () => {
    const sh = 's' + (++UID);
    const pedal = (x, c, label) => `<rect x="${x}" y="58" width="56" height="76" rx="10" fill="${c}" filter="url(#${sh})"/>${[0, 1, 2, 3].map(i => `<rect x="${x + 8}" y="${68 + i * 16}" width="40" height="7" rx="3" fill="#fff" opacity=".35"/>`).join('')}${t(x + 28, 150, label, { size: 10, fill: c, w: 900 })}`;
    return svg(360, 250, `<defs>${shadow(sh)}</defs>
      ${card(184, 8, 170, 196, BAD_BG)}${card(6, 8, 170, 196, '#e7f5ff')}
      ${t(269, 30, 'oncogene', { size: 12, fill: BAD, w: 900 })}${f(269, 46, 'انکوژن', { size: 10, fill: BAD })}
      ${pedal(242, '#e03131', 'GAS')}
      ${f(269, 172, 'پدال گازِ گیرکرده', { size: 10, fill: INK, w: 800 })}${f(269, 188, 'سلول مدام دستور تقسیم می‌گیرد', { size: 9.5 })}
      ${t(91, 30, 'tumor suppressor gene', { size: 11, fill: '#1c7ed6', w: 900 })}${f(91, 46, 'ژن سرکوبگر تومور', { size: 10, fill: '#1c7ed6' })}
      ${pedal(63, '#1c7ed6', 'BRAKE')}<path d="M54 64 L130 132" stroke="#c92a2a" stroke-width="5" stroke-linecap="round"/>
      ${f(91, 172, 'ترمزِ خراب، مثل BRCA1', { size: 10, fill: INK, w: 800 })}${f(91, 188, 'تقسیم دیگر متوقف نمی‌شود', { size: 9.5 })}
      ${f(180, 232, 'جهش (mutation) در هر دو گروه ژن، سلول را به سوی سرطان می‌برد', { size: 10, fill: VIO, w: 700 })}`, 'انکوژن و ژن سرکوبگر تومور');
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
    const tiles = [['smoke', 'tobacco', 'دخانیات'], ['sun', 'UV light', 'پرتو فرابنفش'], ['rad', 'radiation', 'پرتو یونیزان'], ['chem', 'chemicals', 'مواد شیمیایی، آزبست'],
      ['virus', 'viruses', 'HPV، EBV، هپاتیت'], ['dna', 'heredity', 'جهش ارثی BRCA'], ['drink', 'alcohol', 'الکل'], ['age', 'aging', 'افزایش سن']];
    return svg(360, 272, `<defs>${shadow(sh)}</defs>${f(180, 20, 'عامل‌های خطر سرطان (risk factors)', { size: 11, fill: INK, w: 800 })}
      ${tiles.map(([k, en, fa], i) => { const c = 3 - (i % 4), r = Math.floor(i / 4), x = 6 + c * 88, y = 32 + r * 110; return `${card(x, y, 82, 102, '#fff', sh)}${ic[k](x + 41, y + 34)}${t(x + 41, y + 74, en, { size: 10, fill: INK, w: 900 })}${f(x + 41, y + 90, fa, { size: 9 })}`; }).join('')}
      ${f(180, 264, 'بیشتر سرطان‌ها حاصل چند جهش در طول سال‌هاست', { size: 10, fill: VIO, w: 700 })}`, 'عامل‌های خطر سرطان');
  };

  /* راه‌های گسترش: تهاجم موضعی، لنف، خون */
  A['metastasis-routes'] = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID), sh = 's' + (++UID);
    const tumor = [[116, 120, 13], [136, 112, 11], [128, 136, 12], [104, 140, 10], [148, 132, 9], [120, 100, 9]].map(([x, y, r], i) => cellC(x, y, r, i + 40)).join('');
    return svg(360, 300, `<defs>${marker(a, '#1c7ed6')}${marker(b, '#2b8a3e')}${shadow(sh)}</defs>
      <rect x="10" y="54" width="190" height="150" rx="18" fill="#fff4e6"/>${t(40, 76, 'organ', { size: 9.5, fill: '#d9480f', anchor: 'start' })}${f(40, 90, 'اندام اولیه', { size: 9, anchor: 'start', fill: '#d9480f' })}
      ${tumor}${t(126, 172, 'primary tumor', { size: 10, fill: BAD, w: 900 })}${f(126, 186, 'تومور اولیه', { size: 9.5, fill: BAD })}
      <path d="M92 132 q-22 -2 -40 14 M96 150 q-14 16 -40 18" stroke="${BAD}" stroke-width="2.6" fill="none" stroke-dasharray="3 3"/>${f(18, 120, '۱ تهاجم موضعی', { size: 9, fill: BAD, w: 800, anchor: 'start' })}
      <path d="M200 92 C240 88 266 70 300 66" stroke="#2b8a3e" stroke-width="7" fill="none" opacity=".25"/><path d="M152 104 C176 96 200 92 232 84 C262 76 280 70 296 66" stroke="#2b8a3e" stroke-width="2.4" fill="none" stroke-dasharray="5 4" marker-end="url(#${b})"/>
      <ellipse cx="314" cy="62" rx="20" ry="13" fill="#b2f2bb" stroke="#2b8a3e" stroke-width="1.6"/>${cellC(314, 62, 6, 51)}
      ${t(312, 30, 'lymph node', { size: 9.5, fill: '#2b8a3e', w: 900 })}${f(312, 44, '۲ از راه لنف', { size: 9, fill: '#2b8a3e', w: 800 })}
      <path d="M152 150 C196 170 240 196 262 230" stroke="#c92a2a" stroke-width="9" fill="none" opacity=".18"/><path d="M152 150 C196 170 238 194 258 226" stroke="#1c7ed6" stroke-width="2.4" fill="none" stroke-dasharray="5 4" marker-end="url(#${a})"/>
      ${f(232, 170, '۳ از راه خون', { size: 9, fill: '#1c7ed6', w: 800 })}
      ${card(208, 232, 146, 62, '#fff', sh)}${t(281, 250, 'distant metastasis', { size: 9.5, fill: '#1c7ed6', w: 900 })}${f(281, 266, 'کبد، ریه، استخوان، مغز', { size: 9.5, fill: INK, w: 800 })}${f(281, 282, 'نام همان تومور اولیه را دارد', { size: 9 })}
      ${f(100, 236, 'meta = تغییر • stasis = ایستادن', { size: 10, fill: VIO, w: 800 })}${f(100, 254, 'سلول جا عوض می‌کند و جای تازه «می‌ایستد»', { size: 9.5, fill: VIO })}
      ${f(100, 278, 'رگ‌زایی (angiogenesis) راه خون را می‌سازد', { size: 9, fill: MUTED })}`, 'راه‌های گسترش سرطان');
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
    const rows = [['epi', 'epithelium', 'بافت پوششی', 'carcinoma', 'کارسینوم', '#d9480f', '#fff4e6'], ['con', 'connective tissue', 'استخوان، غضروف، چربی', 'sarcoma', 'سارکوم', '#1971c2', '#e7f5ff'],
      ['blood', 'bone marrow', 'سلول‌های سازنده خون', 'leukemia', 'لوسمی', '#9c36b5', '#f8f0fc'], ['lym', 'lymph tissue', 'لنفوسیت و غده لنفاوی', 'lymphoma', 'لنفوم', '#2b8a3e', '#ebfbee'], ['emb', 'embryonic cells', 'سلول‌های نابالغ جنینی', 'blastoma', 'بلاستوم', '#e67700', '#fff9db']];
    return svg(360, 330, `<defs>${shadow(sh)}${marker(a, LINE)}</defs>
      ${t(254, 18, 'tissue', { size: 10, fill: MUTED })}${f(254, 30, 'بافت مبدأ', { size: 9 })}${t(63, 18, 'cancer', { size: 10, fill: MUTED })}${f(63, 30, 'نام سرطان', { size: 9 })}
      ${rows.map(([k, en, fa, ca, cfa, c, bg], i) => { const y = 40 + i * 56; return `${card(154, y, 200, 48, bg, sh)}${icon[k](186, y + 24)}${t(284, y + 20, en, { size: 10, fill: c, w: 900 })}${f(284, y + 36, fa, { size: 9 })}
        <path d="M150 ${y + 24} H124" stroke="${LINE}" stroke-width="2" marker-end="url(#${a})"/>${card(8, y, 110, 48, '#fff', sh)}<rect x="8" y="${y}" width="6" height="48" rx="3" fill="${c}"/>${t(63, y + 21, ca, { size: 12, fill: c, w: 900 })}${f(63, y + 38, cfa, { size: 9.5, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 324, 'اول بپرس «از کدام بافت؟»؛ نام سرطان از همان‌جا می‌آید', { size: 9.5, fill: VIO, w: 700 })}`, 'بافت مبدأ و نام سرطان');
  };

  /* قاعده نام‌گذاری: ریشه بافت + ‎-oma یا ‎-sarcoma یا ‎-carcinoma */
  A['naming-rules'] = () => {
    const sh = 's' + (++UID);
    const rows = [['aden/o', 'غده', 'adenoma', 'adenocarcinoma'], ['lip/o', 'چربی', 'lipoma', 'liposarcoma'], ['chondr/o', 'غضروف', 'chondroma', 'chondrosarcoma'], ['oste/o', 'استخوان', 'osteoma', 'osteosarcoma'],
      ['leiomy/o', 'ماهیچه صاف', 'leiomyoma', 'leiomyosarcoma'], ['angi/o', 'رگ', 'angioma', 'angiosarcoma'], ['fibr/o', 'بافت فیبری', 'fibroma', 'fibrosarcoma']];
    return svg(360, 340, `<defs>${shadow(sh)}</defs>
      ${card(6, 6, 348, 62, VIO_BG)}${t(270, 30, 'root + -oma', { size: 12, fill: GOOD, w: 900 })}${f(270, 48, 'خوش‌خیم', { size: 10, fill: GOOD, w: 800 })}
      ${t(96, 26, 'root + -sarcoma / -carcinoma', { size: 11, fill: BAD, w: 900 })}${f(96, 44, 'بدخیم: بافت همبند / بافت پوششی', { size: 9.5, fill: BAD, w: 800 })}
      <rect x="6" y="78" width="348" height="26" rx="8" fill="#f1f3f5"/>${t(318, 95, 'root', { size: 9.5, fill: INK, w: 900 })}${t(206, 95, 'benign', { size: 9.5, fill: GOOD, w: 900 })}${t(80, 95, 'malignant', { size: 9.5, fill: BAD, w: 900 })}
      ${rows.map(([r, fa, b, m], i) => { const y = 108 + i * 30; return `<rect x="6" y="${y}" width="348" height="27" rx="7" fill="${i % 2 ? '#fff' : '#fafafa'}"/>${t(336, y + 13, r, { size: 9.5, fill: VIO, w: 900, anchor: 'end' })}${f(336, y + 24, fa, { size: 8.5, anchor: 'end' })}${t(206, y + 18, b, { size: 10.5, fill: GOOD, w: 800 })}${t(80, y + 18, m, { size: 10.5, fill: BAD, w: 800 })}`; }).join('')}
      ${f(180, 334, 'غده بافت پوششی است: adenocarcinoma، نه adenosarcoma', { size: 9.5, fill: VIO, w: 700 })}`, 'قاعده نام‌گذاری تومور');
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
      ${f(340, 172, 'درم، dermis', { size: 9, anchor: 'end' })}
      ${t(18, 30, 'squamous cells', { size: 10, fill: '#e8590c', w: 900, anchor: 'start' })}${f(18, 45, 'سلول‌های سنگفرشی رویه', { size: 9, anchor: 'start' })}${t(346, 30, 'basal layer', { size: 10, fill: '#c2255c', w: 900, anchor: 'end' })}${f(346, 45, 'لایه پایه', { size: 9, anchor: 'end' })}
      ${card(8, 210, 112, 82, '#fff4e6', sh)}${t(64, 230, 'SCC', { size: 13, fill: '#e8590c', w: 900 })}${f(64, 246, 'squamous cell carcinoma', { size: 8.5 })}${f(64, 262, 'سلول سنگفرشی', { size: 9.5, fill: INK, w: 800 })}${f(64, 278, 'گاهی متاستاز می‌دهد', { size: 9 })}
      ${card(124, 210, 112, 82, '#fff0f6', sh)}${t(180, 230, 'BCC', { size: 13, fill: '#c2255c', w: 900 })}${f(180, 246, 'basal cell carcinoma', { size: 8.5 })}${f(180, 262, 'لایه پایه؛ شایع‌ترین', { size: 9.5, fill: INK, w: 800 })}${f(180, 278, 'به‌ندرت متاستاز', { size: 9 })}
      ${card(240, 210, 112, 82, '#f8f0e8', sh)}${t(296, 230, 'melanoma', { size: 13, fill: '#5c3a21', w: 900 })}${f(296, 246, 'melanocyte', { size: 8.5 })}${f(296, 262, 'سلول رنگدانه‌ساز', { size: 9.5, fill: INK, w: 800 })}${f(296, 278, 'خطرناک‌ترین', { size: 9, fill: BAD, w: 800 })}
      ${pin(64, 64, 64, 206, '#e8590c')}${pin(168, 108, 180, 206, '#c2255c')}${pin(292, 108, 296, 206, '#5c3a21')}`, 'سه سرطان پوست');
  };

  /* چهار نوع اصلی لوسمی */
  A['leukemia-grid'] = () => {
    const sh = 's' + (++UID);
    const box = (x, y, ab, en, fa, note, c, bg) => `${card(x, y, 132, 86, bg, sh)}${t(x + 66, y + 28, ab, { size: 17, fill: c, w: 900 })}${t(x + 66, y + 46, en, { size: 8.5, fill: c, w: 700 })}${f(x + 66, y + 62, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 66, y + 77, note, { size: 8.8 })}`;
    return svg(360, 260, `<defs>${shadow(sh)}</defs>
      ${t(286, 30, 'lymphocytic', { size: 11, fill: '#2b8a3e', w: 900 })}${f(286, 44, 'رده لنفوسیتی', { size: 9.5, fill: '#2b8a3e' })}${t(148, 30, 'myeloid', { size: 11, fill: '#9c36b5', w: 900 })}${f(148, 44, 'رده میلوئیدی', { size: 9.5, fill: '#9c36b5' })}
      ${t(42, 98, 'acute', { size: 11, fill: BAD, w: 900 })}${f(42, 112, 'حاد، تند', { size: 9.5, fill: BAD })}${t(42, 190, 'chronic', { size: 11, fill: '#1c7ed6', w: 900 })}${f(42, 204, 'مزمن، آهسته', { size: 9.5, fill: '#1c7ed6' })}
      ${box(220, 56, 'ALL', 'acute lymphocytic', 'لوسمی لنفوسیتی حاد', 'شایع‌ترین سرطان کودکان', '#2b8a3e', '#ebfbee')}${box(82, 56, 'AML', 'acute myeloid', 'لوسمی میلوئیدی حاد', 'لوسمی حاد بزرگسالان', '#9c36b5', '#f8f0fc')}
      ${box(220, 148, 'CLL', 'chronic lymphocytic', 'لوسمی لنفوسیتی مزمن', 'سالمندان', '#2b8a3e', '#ebfbee')}${box(82, 148, 'CML', 'chronic myeloid', 'لوسمی میلوئیدی مزمن', 'کروموزوم فیلادلفیا', '#9c36b5', '#f8f0fc')}
      ${f(180, 252, 'دو سؤال: چقدر تند (حاد یا مزمن)؟ از کدام رده (لنفوسیتی یا میلوئیدی)؟', { size: 9.5, fill: VIO, w: 700 })}`, 'چهار نوع لوسمی');
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
      ${f(272, 192, 'گلبول قرمز، سفید و پلاکت', { size: 9.5, fill: INK, w: 800 })}${f(272, 208, 'در تعادل', { size: 9 })}
      ${f(88, 192, 'سلول‌های نابالغ (blast)', { size: 9.5, fill: INK, w: 800 })}${f(88, 208, 'جای بقیه را تنگ می‌کنند', { size: 9 })}
      <rect x="6" y="220" width="348" height="36" rx="10" fill="${VIO_BG}"/>${f(180, 236, 'نتیجه: anemia، neutropenia و thrombocytopenia', { size: 9.5, fill: VIO, w: 800 })}${f(180, 250, 'یعنی خستگی، عفونت و خون‌ریزی', { size: 9, fill: VIO })}`, 'مغز استخوان در لوسمی');
  };

  /* تومورهای جنینی کودکان روی آدمک */
  A['blastoma-map'] = () => {
    const c = '#e67700';
    const L = (x1, y1, x2, y2, en, fa, anchor) => `${pin(x1, y1, x2, y2, c)}${t(x2 + (anchor === 'end' ? -4 : 4), y2 - 2, en, { size: 10, fill: c, w: 900, anchor })}${f(x2 + (anchor === 'end' ? -4 : 4), y2 + 12, fa, { size: 9, anchor })}`;
    return svg(360, 300, `${man(180, 22, 1.24, { arms: 12 })}
      <circle cx="173" cy="40" r="3" fill="#495057"/><circle cx="187" cy="40" r="3" fill="#495057"/>
      <ellipse cx="180" cy="102" rx="20" ry="12" fill="#c08457" opacity=".6"/><ellipse cx="166" cy="120" rx="6" ry="9" fill="#e599f7" opacity=".85"/><ellipse cx="194" cy="120" rx="6" ry="9" fill="#e599f7" opacity=".85"/>
      <ellipse cx="166" cy="110" rx="5" ry="3" fill="#ffd43b"/><path d="M168 30 q12 -10 24 2" stroke="#ff8787" stroke-width="5" fill="none" opacity=".7"/>
      ${L(187, 40, 248, 26, 'retinoblastoma', 'شبکیه چشم', 'start')}${L(186, 28, 108, 18, 'medulloblastoma', 'مخچه (مغز)', 'end')}
      ${L(176, 100, 106, 92, 'hepatoblastoma', 'کبد', 'end')}${L(166, 110, 106, 140, 'neuroblastoma', 'غده فوق کلیه، عصب', 'end')}${L(194, 122, 252, 136, 'Wilms tumor', 'کلیه کودکان', 'start')}
      ${f(180, 284, 'ریشه اندام + ‎-blastoma = تومور سلول‌های نابالغ جنینی؛ بیشتر در کودکان', { size: 9.5, fill: VIO, w: 700 })}`, 'تومورهای جنینی کودکان');
  };

  /* ---------- نشانه‌ها و غربالگری ---------- */
  /* هفت نشانه هشدار: CAUTION */
  A['warning-signs'] = () => {
    const sh = 's' + (++UID);
    const rows = [['C', 'Change in bowel or bladder habits', 'تغییر در اجابت مزاج یا ادرار'], ['A', 'A sore that does not heal', 'زخمی که خوب نمی‌شود'], ['U', 'Unusual bleeding or discharge', 'خون‌ریزی یا ترشح غیرعادی'],
      ['T', 'Thickening or lump', 'سفتی یا توده در پستان یا جای دیگر'], ['I', 'Indigestion or difficulty swallowing', 'سوءهاضمه یا اشکال در بلع'], ['O', 'Obvious change in a wart or mole', 'تغییر آشکار در زگیل یا خال'], ['N', 'Nagging cough or hoarseness', 'سرفه سمج یا گرفتگی صدا']];
    const pal = ['#e64980', '#f76707', '#fab005', '#2b8a3e', '#1c7ed6', '#7048e8', '#ae3ec9'];
    return svg(360, 330, `<defs>${shadow(sh)}</defs>${f(180, 20, 'هفت نشانه هشدار سرطان: CAUTION', { size: 11.5, fill: INK, w: 800 })}
      ${rows.map(([l, en, fa], i) => { const y = 32 + i * 40; return `${card(6, y, 348, 34, '#fff', sh)}<rect x="318" y="${y}" width="36" height="34" rx="10" fill="${pal[i]}"/>${t(336, y + 23, l, { size: 17, fill: '#fff', w: 900 })}
        ${f(306, y + 15, fa, { size: 10, fill: INK, w: 800, anchor: 'end' })}${t(306, y + 29, en, { size: 8.8, fill: pal[i], w: 700, anchor: 'end' })}`; }).join('')}
      ${f(180, 320, 'این نشانه‌ها سرطان را ثابت نمی‌کنند؛ یعنی باید به پزشک مراجعه کرد', { size: 9.5, fill: VIO, w: 700 })}`, 'هفت نشانه هشدار سرطان');
  };

  /* نقشه نشانه‌ها روی بدن */
  A['symptom-map'] = () => {
    const c = '#c2255c';
    const L = (x1, y1, x2, y2, en, fa, anchor) => `${pin(x1, y1, x2, y2, c)}${t(x2 + (anchor === 'end' ? -4 : 4), y2 - 2, en, { size: 9.8, fill: c, w: 900, anchor })}${f(x2 + (anchor === 'end' ? -4 : 4), y2 + 11, fa, { size: 8.8, anchor })}`;
    return svg(360, 320, `${man(180, 16, 1.36, { arms: 14 })}
      ${L(180, 30, 100, 18, 'seizure', 'مغز: تشنج', 'end')}${L(180, 56, 262, 30, 'hoarseness', 'حنجره: گرفتگی صدا', 'start')}
      ${L(186, 60, 262, 70, 'dysphagia', 'مری: اشکال در بلع', 'start')}${L(168, 88, 100, 66, 'hemoptysis', 'ریه: خلط خونی', 'end')}
      ${L(194, 96, 262, 110, 'nipple discharge', 'پستان: ترشح، توده', 'start')}${L(150, 70, 100, 112, 'lymphadenopathy', 'غده لنفاوی بزرگ', 'end')}
      ${L(172, 140, 100, 158, 'rectal bleeding', 'روده: خون در مدفوع', 'end')}${L(186, 160, 262, 152, 'hematuria', 'مثانه: خون در ادرار', 'start')}
      ${L(180, 168, 262, 194, 'dysuria', 'پروستات: سوزش ادرار', 'start')}${L(150, 184, 100, 204, 'changing mole', 'پوست: خال تغییرکرده', 'end')}
      ${f(180, 300, 'کلیدواژه‌ها: hem/o خون • ‎-ptysis خلط • ‎-uria ادرار • dys- دشوار • ‎-phagia بلع', { size: 9.3, fill: VIO, w: 700 })}`, 'نشانه‌های سرطان در اندام‌ها');
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
    const rows = [['A', 'Asymmetry', 'دو نیمه نامتقارن'], ['B', 'Border', 'لبه ناصاف و دندانه‌دار'], ['C', 'Color', 'چند رنگ: قهوه‌ای، سیاه، قرمز'], ['D', 'Diameter', 'قطر بیشتر از ۶ میلی‌متر'], ['E', 'Evolving', 'تغییر در اندازه، شکل یا رنگ']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>
      ${t(240, 20, 'benign', { size: 9.5, fill: GOOD, w: 900 })}${t(186, 20, 'suspicious', { size: 9.5, fill: BAD, w: 900 })}
      ${rows.map(([k, en, fa], i) => { const y = 30 + i * 52; return `${card(6, y, 348, 46, '#fff', sh)}<circle cx="328" cy="${y + 23}" r="16" fill="${VIO}"/>${t(328, y + 29, k, { size: 16, fill: '#fff', w: 900 })}
        ${good(240, y + 23, k)}${bad[k](186, y + 23)}${k === 'D' ? `<path d="M170 ${y + 43} h32" stroke="${BAD}" stroke-width="1.4"/>${t(186, y + 52, '> 6 mm', { size: 8, fill: BAD })}` : ''}
        ${t(110, y + 19, en, { size: 10.5, fill: VIO, w: 900 })}${f(110, y + 35, fa, { size: 9.3, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 292, 'اگر خالی یکی از این ویژگی‌ها را داشت، باید معاینه شود', { size: 9.5, fill: VIO, w: 700 })}`, 'قاعده ABCDE برای خال');
  };

  /* آزمون‌های غربالگری */
  A['screening-tests'] = () => {
    const sh = 's' + (++UID);
    const rows = [['breast', 'پستان', 'mammography', 'ماموگرافی؛ عکس با اشعه ایکس', '#e64980', '#fff0f6'], ['cervix', 'دهانه رحم', 'Pap smear، HPV test', 'برداشتن سلول با برس', '#ae3ec9', '#f8f0fc'],
      ['colon', 'روده بزرگ', 'colonoscopy، FOBT', 'دیدن روده؛ خون پنهان مدفوع', '#d9480f', '#fff4e6'], ['prostate', 'پروستات', 'PSA، DRE', 'آزمایش خون؛ معاینه انگشتی', '#1c7ed6', '#e7f5ff'],
      ['lung', 'ریه', 'low-dose CT', 'سی‌تی کم‌دوز برای سیگاری‌ها', '#0c8599', '#e3fafc'], ['skin', 'پوست', 'skin exam', 'بررسی خال‌ها با ABCDE', '#5c3a21', '#f8f0e8']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, 'غربالگری: آزمایش افراد سالم و بی‌نشانه', { size: 11, fill: INK, w: 800 })}
      ${rows.map(([en, fa, test, desc, c, bg], i) => { const y = 32 + i * 42; return `${card(6, y, 348, 36, bg, sh)}${t(318, y + 16, en, { size: 10, fill: c, w: 900 })}${f(318, y + 30, fa, { size: 9, fill: INK, w: 700 })}
        <path d="M282 ${y + 6} v24" stroke="${c}" stroke-width="1" opacity=".4"/>${t(150, y + 16, test, { size: 10.5, fill: c, w: 900 })}${f(150, y + 30, desc, { size: 9 })}`; }).join('')}
      ${f(180, 292, 'هدف غربالگری: پیدا کردن سرطان یا پیش‌سرطان پیش از بروز نشانه', { size: 9.5, fill: VIO, w: 700 })}`, 'آزمون‌های غربالگری سرطان');
  };

  /* ضایعه‌های پیش‌سرطانی و سرطانی که از آن‌ها پدید می‌آید */
  A.precancer = () => {
    const sh = 's' + (++UID), a = 'm' + (++UID);
    const rows = [['actinic keratosis', 'لکه پوسته‌دار آفتابی', 'squamous cell carcinoma'], ['leukoplakia', 'لکه سفید دهان', 'oral cancer'], ['colon polyp', 'پولیپ روده (adenoma)', 'colon adenocarcinoma'],
      ['dysplastic nevus', 'خال نامنظم', 'melanoma'], ['Barrett esophagus', 'تغییر پوشش مری', 'esophageal cancer'], ['CIN', 'دیسپلازی دهانه رحم', 'cervical cancer']];
    return svg(360, 314, `<defs>${shadow(sh)}${marker(a, BAD)}</defs>
      ${t(262, 20, 'precancerous', { size: 10, fill: '#e67700', w: 900 })}${f(262, 33, 'پیش‌سرطانی', { size: 9, fill: '#e67700' })}${t(76, 20, 'may become', { size: 10, fill: BAD, w: 900 })}${f(76, 33, 'ممکن است بشود', { size: 9, fill: BAD })}
      ${rows.map(([p, fa, c], i) => { const y = 42 + i * 42; return `${card(176, y, 178, 36, '#fff9db', sh)}${t(265, y + 16, p, { size: 10, fill: '#e67700', w: 900 })}${f(265, y + 30, fa, { size: 9 })}
        <path d="M172 ${y + 18} H150" stroke="${BAD}" stroke-width="2" marker-end="url(#${a})"/>${card(6, y, 140, 36, BAD_BG, sh)}${t(76, y + 22, c, { size: 9.8, fill: BAD, w: 800 })}`; }).join('')}
      ${f(180, 306, 'برداشتن ضایعه پیش‌سرطانی یعنی پیشگیری (prophylactic)', { size: 9.5, fill: VIO, w: 700 })}`, 'ضایعه‌های پیش‌سرطانی');
  };

  /* ---------- تشخیص و مرحله‌بندی ---------- */
  /* چهار روش بیوپسی */
  A['biopsy-types'] = () => {
    const sh = 's' + (++UID);
    const tissue = (x, y) => `<rect x="${x + 8}" y="${y + 30}" width="152" height="70" rx="12" fill="#ffe3e3"/><path d="M${x + 8} ${y + 46} H${x + 160}" stroke="#ffc9c9" stroke-width="2"/>`;
    const lump = (x, y, cut) => `<ellipse cx="${x + 84}" cy="${y + 66}" rx="26" ry="18" fill="#e599f7" stroke="#9c36b5" stroke-width="1.6"${cut ? ` stroke-dasharray="4 3"` : ''}/>`;
    const panel = (x, y, en, fa, note, draw) => `${card(x, y, 168, 160, '#fff', sh)}${tissue(x, y)}${draw(x, y)}${t(x + 84, y + 120, en, { size: 10.5, fill: VIO, w: 900 })}${f(x + 84, y + 135, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 84, y + 150, note, { size: 8.8 })}`;
    return svg(360, 362, `<defs>${shadow(sh)}</defs>${f(180, 18, 'biopsy: برداشتن بافت برای نگاه زیر میکروسکوپ', { size: 10.5, fill: INK, w: 800 })}
      ${panel(186, 26, 'excisional', 'برداشتی', 'کل توده برداشته می‌شود', (x, y) => `${lump(x, y, true)}<path d="M${x + 50} ${y + 40} q34 -24 68 0 q12 26 -4 50 q-30 20 -60 0 q-16 -26 -4 -50z" stroke="${VIO}" stroke-width="2.2" fill="none" stroke-dasharray="5 3"/>`)}
      ${panel(6, 26, 'incisional', 'برشی', 'فقط تکه‌ای از توده', (x, y) => `${lump(x, y)}<path d="M${x + 78} ${y + 46} l20 0 l-6 32 l-14 0z" fill="#fff" stroke="${VIO}" stroke-width="2"/>`)}
      ${panel(186, 194, 'core needle', 'سوزن ضخیم', 'یک استوانه بافت', (x, y) => `${lump(x, y)}<path d="M${x + 150} ${y + 22} L${x + 92} ${y + 62}" stroke="#868e96" stroke-width="7" stroke-linecap="round"/><path d="M${x + 150} ${y + 22} L${x + 92} ${y + 62}" stroke="#dee2e6" stroke-width="3"/><rect x="${x + 128}" y="${y + 6}" width="30" height="14" rx="4" fill="${VIO}" transform="rotate(-34 ${x + 143} ${y + 13})"/>`)}
      ${panel(6, 194, 'FNA', 'آسپیراسیون با سوزن ظریف', 'چند سلول و مایع', (x, y) => `${lump(x, y)}<path d="M${x + 146} ${y + 24} L${x + 92} ${y + 62}" stroke="#868e96" stroke-width="2"/><rect x="${x + 128}" y="${y + 4}" width="34" height="14" rx="3" fill="#fff" stroke="${VIO}" stroke-width="1.6" transform="rotate(-35 ${x + 145} ${y + 11})"/>`)}`, 'انواع بیوپسی');
  };

  /* آندوسکوپی‌ها روی بدن: ریشه + ‎-scopy */
  A['scope-map'] = () => {
    const c = '#1c7ed6';
    const L = (x1, y1, x2, y2, en, fa, anchor) => `${pin(x1, y1, x2, y2, c)}${t(x2 + (anchor === 'end' ? -4 : 4), y2 - 2, en, { size: 9.8, fill: c, w: 900, anchor })}${f(x2 + (anchor === 'end' ? -4 : 4), y2 + 11, fa, { size: 8.8, anchor })}`;
    return svg(360, 320, `${man(180, 16, 1.36, { arms: 14 })}
      <path d="M180 58 V96" stroke="#ffa8a8" stroke-width="5" stroke-linecap="round" opacity=".8"/><path d="M170 88 q-10 4 -14 14 M190 88 q10 4 14 14" stroke="#74c0fc" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M156 150 q-6 -24 10 -26 h28 q16 2 10 26 q-4 14 -24 12" stroke="#ffc078" stroke-width="5" fill="none" opacity=".85"/><ellipse cx="180" cy="168" rx="9" ry="6" fill="#ffd43b" opacity=".85"/>
      ${L(180, 58, 262, 34, 'laryngoscopy', 'حنجره', 'start')}${L(166, 92, 100, 60, 'bronchoscopy', 'نای و نایژه‌ها', 'end')}
      ${L(182, 84, 262, 76, 'esophagoscopy', 'مری', 'start')}${L(150, 100, 100, 112, 'thoracoscopy', 'حفره قفسه سینه', 'end')}
      ${L(196, 138, 262, 124, 'colonoscopy', 'کل روده بزرگ', 'start')}${L(160, 152, 100, 160, 'sigmoidoscopy', 'راست‌روده و سیگموئید', 'end')}
      ${L(184, 168, 262, 170, 'cystoscopy', 'مثانه', 'start')}${L(176, 174, 100, 206, 'hysteroscopy', 'درون رحم', 'end')}
      ${f(180, 300, 'ریشه اندام + ‎-scopy = دیدن درون آن با لوله نوری؛ اغلب همراه biopsy', { size: 9.5, fill: VIO, w: 700 })}`, 'آندوسکوپی‌ها');
  };

  /* ابزارهای تصویربرداری */
  A['imaging-tools'] = () => {
    const sh = 's' + (++UID);
    const box = (x, y, c, bg, icon, en, ab, fa, note) => `${card(x, y, 170, 120, bg, sh)}${icon}${t(x + 85, y + 72, en, { size: 9.5, fill: c, w: 900 })}${t(x + 85, y + 88, ab, { size: 12, fill: c, w: 900 })}${f(x + 85, y + 103, fa, { size: 9, fill: INK, w: 700 })}${f(x + 85, y + 116, note, { size: 8.6 })}`;
    const ring = (x, y, c) => `<circle cx="${x + 85}" cy="${y + 32}" r="22" fill="none" stroke="${c}" stroke-width="8"/><rect x="${x + 55}" y="${y + 30}" width="60" height="5" rx="2" fill="${c}"/>`;
    return svg(360, 270, `<defs>${shadow(sh)}</defs>
      ${box(184, 6, '#495057', '#f1f3f5', `${ring(184, 6, '#868e96')}${[0, 1, 2].map(i => `<path d="M${259 + i * 5} ${18 + i * 2} v24" stroke="#adb5bd" stroke-width="1.4"/>`).join('')}`, 'computed tomography', 'CT', 'برش‌های اشعه ایکس با رایانه', 'با یا بدون ماده حاجب')}
      ${box(6, 6, '#1c7ed6', '#e7f5ff', `<path d="M66 20 v20 a12 12 0 0 0 24 0 v-20" stroke="#e03131" stroke-width="8" fill="none"/><rect x="62" y="14" width="12" height="8" fill="#868e96"/><rect x="82" y="14" width="12" height="8" fill="#868e96"/><path d="M104 22 q6 10 0 20 M112 18 q9 14 0 28" stroke="#1c7ed6" stroke-width="2" fill="none"/>`, 'magnetic resonance', 'MRI', 'آهنربا و امواج رادیویی', 'بهترین برای مغز و بافت نرم')}
      ${box(184, 136, '#e67700', '#fff9db', `${ring(184, 136, '#f59f00')}<circle cx="262" cy="170" r="6" fill="#ff922b"/><circle cx="276" cy="160" r="4" fill="#ff922b"/><circle cx="262" cy="170" r="11" fill="#ff922b" opacity=".25"/>`, 'positron emission', 'PET', 'قند رادیواکتیو در سلول فعال', 'برای مرحله‌بندی و یافتن متاستاز')}
      ${box(6, 136, '#0c8599', '#e3fafc', `<path d="M70 150 h30 v14 l-6 16 h-18 l-6 -16z" fill="#99e9f2" stroke="#0c8599" stroke-width="1.6"/>${[0, 1, 2].map(i => `<path d="M${74 + i * 0} ${186 + i * 6} q11 6 22 0" stroke="#0c8599" stroke-width="2" fill="none"/>`).join('')}`, 'ultrasound', 'US', 'امواج صوتی (son/o)', 'transrectal، راهنمای سوزن')}`, 'ابزارهای تصویربرداری');
  };

  /* غده لنفاوی نگهبان */
  A['sentinel-node'] = () => {
    const a = 'm' + (++UID), sh = 's' + (++UID);
    const node = (x, y, c, bg) => `<ellipse cx="${x}" cy="${y}" rx="15" ry="10" fill="${bg}" stroke="${c}" stroke-width="1.8"/>`;
    return svg(360, 260, `<defs>${marker(a, '#1c7ed6')}${shadow(sh)}</defs>
      <rect x="196" y="40" width="156" height="150" rx="40" fill="#fff4e6"/>${t(290, 60, 'breast', { size: 9.5, fill: '#d9480f' })}${f(290, 74, 'بافت پستان', { size: 9, fill: '#d9480f' })}
      ${[[262, 120, 12], [278, 110, 10], [272, 134, 11], [286, 128, 8]].map(([x, y, r], i) => cellC(x, y, r, i + 61)).join('')}${t(274, 158, 'tumor', { size: 9.5, fill: BAD, w: 900 })}
      <path d="M236 116 q-6 -10 -18 -8" stroke="#1c7ed6" stroke-width="2.4" fill="none"/><circle cx="240" cy="118" r="5" fill="#1c7ed6"/>${f(290, 92, 'تزریق رنگ یا ماده رادیواکتیو', { size: 8.6, fill: '#1c7ed6' })}
      <path d="M248 112 C210 106 170 98 140 88" stroke="#74c0fc" stroke-width="3" fill="none" marker-end="url(#${a})"/><path d="M118 84 C98 78 82 72 62 64" stroke="#adb5bd" stroke-width="2.4" fill="none" stroke-dasharray="4 3"/>
      ${node(128, 86, '#1c7ed6', '#a5d8ff')}<circle cx="128" cy="86" r="22" fill="none" stroke="#1c7ed6" stroke-width="1.6" stroke-dasharray="3 3"/>${node(50, 60, '#868e96', '#e9ecef')}${node(30, 92, '#868e96', '#e9ecef')}
      ${t(128, 128, 'sentinel node', { size: 10.5, fill: '#1c7ed6', w: 900 })}${f(128, 143, 'غده نگهبان: اولین ایستگاه', { size: 9.5, fill: INK, w: 800 })}${f(40, 120, 'غده‌های بعدی', { size: 9 })}
      ${card(6, 168, 348, 84, VIO_BG)}${f(180, 190, 'اگر غده نگهبان سالم باشد: بقیه غده‌ها احتمالاً سالم‌اند', { size: 9.8, fill: GOOD, w: 800 })}
      ${f(180, 210, 'اگر سرطانی باشد: lymph node dissection (برداشتن غدد لنفاوی)', { size: 9.8, fill: BAD, w: 800 })}${f(180, 232, 'sentinel = نگهبان؛ مثل سربازی که اول دشمن را می‌بیند', { size: 9.5, fill: VIO, w: 700 })}`, 'بیوپسی غده لنفاوی نگهبان');
  };

  /* مرحله‌بندی TNM */
  A.tnm = () => {
    const sh = 's' + (++UID);
    const col = (x, c, bg, L, en, fa, draw, scale) => `${card(x, 6, 112, 250, bg, sh)}<circle cx="${x + 56}" cy="34" r="20" fill="${c}"/>${t(x + 56, 42, L, { size: 22, fill: '#fff', w: 900 })}${t(x + 56, 72, en, { size: 10, fill: c, w: 900 })}${f(x + 56, 87, fa, { size: 9.5, fill: INK, w: 800 })}${draw}${scale.map((s, i) => `${t(x + 22, 200 + i * 14, s[0], { size: 9, fill: c, w: 900, anchor: 'start' })}${f(x + 104, 200 + i * 14, s[1], { size: 8.6, anchor: 'end' })}`).join('')}`;
    const sizes = [[258, 118, 7], [292, 118, 10], [258, 158, 13], [294, 158, 16]].map(([x, y, r]) => cellC(x, y, r, r + 3)).join('');
    const nodes = [[148, 116], [186, 116], [148, 152], [186, 152]].map(([x, y], i) => `<ellipse cx="${x}" cy="${y}" rx="14" ry="9" fill="${i ? '#ffc9c9' : '#d3f9d8'}" stroke="${i ? BAD : GOOD}" stroke-width="1.6"/>${i ? cellC(x, y, 4 + i, 70 + i) : ''}`).join('');
    const meta = `<path d="M38 112 q12 -18 22 0 q12 -14 22 4 q-4 22 -22 22 q-18 0 -22 -26z" fill="#d9480f" opacity=".75"/>${cellC(56, 120, 6, 81)}<circle cx="56" cy="158" r="13" fill="#dee2e6"/><path d="M50 158 h12" stroke="${GOOD}" stroke-width="3"/>`;
    return svg(360, 290, `<defs>${shadow(sh)}</defs>
      ${col(242, '#c92a2a', '#fff0f0', 'T', 'Tumor', 'اندازه تومور اولیه', sizes, [['Tis', 'درجا'], ['T1-T4', 'کوچک تا بزرگ']])}
      ${col(124, '#2b8a3e', '#ebfbee', 'N', 'Nodes', 'غدد لنفاوی ناحیه‌ای', nodes, [['N0', 'غده درگیر ندارد'], ['N1-N3', 'تعداد بیشتر']])}
      ${col(6, '#e67700', '#fff9db', 'M', 'Metastasis', 'متاستاز دوردست', meta, [['M0', 'ندارد'], ['M1', 'دارد']])}
      ${f(180, 276, 'نمونه: T2 N1 M0 یعنی تومور متوسط با درگیری غده و بدون متاستاز دوردست', { size: 9.3, fill: VIO, w: 700 })}`, 'مرحله‌بندی TNM');
  };

  /* مرحله ۰ تا ۴ */
  A.stages = () => {
    const sh = 's' + (++UID);
    const st = [['0', 'in situ', 'درجا', '#2b8a3e'], ['I', 'localized', 'موضعی', '#5c940d'], ['II', 'larger', 'بزرگ‌تر', '#e67700'], ['III', 'regional', 'غدد ناحیه‌ای', '#d9480f'], ['IV', 'distant', 'متاستاز دور', '#c92a2a']];
    return svg(360, 250, `<defs>${shadow(sh)}</defs>${f(180, 20, 'stage: سرطان چقدر پیش رفته است؟', { size: 11, fill: INK, w: 800 })}
      ${st.map(([n, en, fa, c], i) => { const x = 290 - i * 70, h = 40 + i * 26; return `<rect x="${x}" y="${190 - h}" width="62" height="${h}" rx="10" fill="${c}" filter="url(#${sh})"/>${t(x + 31, 190 - h + 26, n, { size: 18, fill: '#fff', w: 900 })}${t(x + 31, 208, en, { size: 9.5, fill: c, w: 900 })}${f(x + 31, 224, fa, { size: 9 })}`; }).join('')}
      ${f(180, 244, 'هرچه مرحله بالاتر، درمان سخت‌تر و پیش‌آگهی (prognosis) بدتر', { size: 9.5, fill: VIO, w: 700 })}`, 'مرحله‌های سرطان');
  };

  /* ---------- درمان ---------- */
  /* نقشه جراحی‌ها: ریشه اندام + ‎-ectomy */
  A['surgery-map'] = () => {
    const c = '#7048e8';
    const L = (x1, y1, x2, y2, en, fa, anchor) => `${pin(x1, y1, x2, y2, c)}${t(x2 + (anchor === 'end' ? -4 : 4), y2 - 2, en, { size: 9.8, fill: c, w: 900, anchor })}${f(x2 + (anchor === 'end' ? -4 : 4), y2 + 11, fa, { size: 8.8, anchor })}`;
    return svg(360, 320, `${man(180, 16, 1.36, { arms: 14 })}
      ${L(180, 58, 262, 30, 'laryngectomy', 'حنجره', 'start')}${L(168, 92, 100, 52, 'pneumonectomy', 'کل ریه', 'end')}
      ${L(190, 92, 262, 70, 'lobectomy', 'یک لوب ریه', 'start')}${L(196, 104, 262, 108, 'mastectomy', 'پستان', 'start')}
      ${L(170, 140, 100, 104, 'colectomy', 'روده بزرگ', 'end')}${L(186, 150, 262, 148, 'hysterectomy', 'رحم', 'start')}
      ${L(176, 162, 100, 150, 'cystectomy', 'مثانه', 'end')}${L(184, 166, 262, 188, 'prostatectomy', 'پروستات', 'start')}
      ${L(170, 172, 100, 196, 'orchiectomy', 'بیضه', 'end')}
      ${f(180, 300, 'ریشه اندام + ‎-ectomy = برداشتن آن اندام با جراحی', { size: 10, fill: VIO, w: 700 })}`, 'جراحی‌های سرطان');
  };

  /* لامپکتومی و ماستکتومی */
  A['lump-mast'] = () => {
    const sh = 's' + (++UID);
    const breast = (x, cut) => `<path d="M${x + 20} 50 C${x + 20} 50 ${x + 24} 40 ${x + 40} 40 H${x + 128} C${x + 144} 40 ${x + 148} 50 ${x + 148} 50 V64 C${x + 148} 130 ${x + 118} 158 ${x + 84} 158 C${x + 50} 158 ${x + 20} 130 ${x + 20} 64Z" fill="#ffe8cc" stroke="#e8590c" stroke-width="1.6"/>${cut}`;
    return svg(360, 260, `<defs>${shadow(sh)}</defs>
      ${card(184, 8, 170, 216, '#fff', sh)}${card(6, 8, 170, 216, '#fff', sh)}
      ${breast(185, `${cellC(268, 110, 12, 91)}<circle cx="268" cy="110" r="26" fill="none" stroke="${VIO}" stroke-width="2.2" stroke-dasharray="5 3"/>`)}
      ${t(269, 182, 'lumpectomy', { size: 11, fill: VIO, w: 900 })}${f(269, 198, 'برداشتن توده و کمی بافت سالم', { size: 9.3, fill: INK, w: 800 })}${f(269, 213, 'پستان حفظ می‌شود', { size: 9 })}
      ${breast(7, `<path d="M27 50 V64 C27 130 57 158 91 158 C125 158 155 130 155 64 V50 Z" fill="#fff0f6" stroke="${BAD}" stroke-width="2.2" stroke-dasharray="5 3"/>${cellC(90, 110, 12, 93)}`)}
      ${t(91, 182, 'mastectomy', { size: 11, fill: BAD, w: 900 })}${f(91, 198, 'برداشتن کل پستان', { size: 9.3, fill: INK, w: 800 })}${f(91, 213, 'گاهی همراه غدد زیر بغل', { size: 9 })}
      ${f(180, 246, 'lump = توده • mast/o = پستان • ‎-ectomy = برداشتن', { size: 10, fill: VIO, w: 700 })}`, 'لامپکتومی و ماستکتومی');
  };

  /* سه راه پرتودرمانی */
  A['radiation-types'] = () => {
    const sh = 's' + (++UID), a = 'm' + (++UID);
    const box = (x, y, en, fa, note, draw, c, bg) => `${card(x, y, 112, 194, bg, sh)}${draw}${t(x + 56, y + 132, en, { size: 10.5, fill: c, w: 900 })}${f(x + 56, y + 148, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 56, y + 164, note[0], { size: 8.8 })}${f(x + 56, y + 178, note[1], { size: 8.8 })}`;
    const tumor = (x, y) => cellC(x, y, 10, x);
    return svg(360, 240, `<defs>${shadow(sh)}${marker(a, '#f59f00')}</defs>
      ${box(244, 8, 'external beam', 'پرتودرمانی خارجی', ['دستگاه از بیرون', 'به تومور می‌تاباند'], `<rect x="270" y="20" width="60" height="26" rx="8" fill="#868e96"/><rect x="290" y="46" width="20" height="10" fill="#495057"/>${[-12, 0, 12].map(d => `<path d="M${300 + d / 3} 58 L${300 + d} 96" stroke="#f59f00" stroke-width="2" stroke-dasharray="3 2"/>`).join('')}<rect x="258" y="96" width="84" height="22" rx="10" fill="#ffe8cc"/>${tumor(300, 106)}`, '#e67700', '#fff9db')}
      ${box(124, 8, 'brachytherapy', 'براکی‌تراپی (داخلی)', ['دانه پرتوزا', 'درون یا کنار تومور'], `<ellipse cx="180" cy="70" rx="40" ry="30" fill="#ffe8cc"/>${tumor(180, 70)}${[[166, 60], [194, 62], [172, 84], [192, 82]].map(([x, y]) => `<rect x="${x - 4}" y="${y - 2}" width="8" height="4" rx="2" fill="#f59f00" stroke="#e67700"/>`).join('')}`, '#d9480f', '#fff4e6')}
      ${box(4, 8, 'systemic', 'سیستمیک', ['مایع پرتوزا در خون', 'مثل ید ۱۳۱ برای تیروئید'], `${man(60, 16, 0.5, { arms: 10 })}<circle cx="60" cy="50" r="4" fill="#f59f00"/><circle cx="54" cy="72" r="3" fill="#f59f00"/><circle cx="68" cy="88" r="3" fill="#f59f00"/><circle cx="56" cy="102" r="3" fill="#f59f00"/>`, '#7048e8', VIO_BG)}
      ${f(180, 228, 'brachy- = نزدیک: منبع پرتو درست کنار تومور گذاشته می‌شود', { size: 9.5, fill: VIO, w: 700 })}`, 'سه راه پرتودرمانی');
  };

  /* چرا شیمی‌درمانی عارضه دارد؟ */
  A['chemo-effects'] = () => {
    const c = '#c2255c';
    const L = (x1, y1, x2, y2, en, fa, anchor) => `${pin(x1, y1, x2, y2, c)}${t(x2 + (anchor === 'end' ? -4 : 4), y2 - 2, en, { size: 9.8, fill: c, w: 900, anchor })}${f(x2 + (anchor === 'end' ? -4 : 4), y2 + 11, fa, { size: 8.8, anchor })}`;
    return svg(360, 336, `${man(180, 26, 1.2, { arms: 14 })}
      ${L(180, 28, 100, 22, 'alopecia', 'ریزش مو', 'end')}${L(184, 52, 262, 34, 'mucositis', 'زخم دهان و گوارش', 'start')}
      ${L(176, 104, 100, 76, 'nausea', 'تهوع و استفراغ', 'end')}${L(190, 140, 262, 96, 'myelosuppression', 'سرکوب مغز استخوان', 'start')}
      ${t(266, 128, 'neutropenia', { size: 8.8, anchor: 'start', fill: c })}${f(266, 140, 'عفونت', { size: 8.5, anchor: 'start' })}${t(266, 156, 'anemia', { size: 8.8, anchor: 'start', fill: c })}${f(266, 168, 'خستگی', { size: 8.5, anchor: 'start' })}${t(266, 184, 'thrombocytopenia', { size: 8.8, anchor: 'start', fill: c })}${f(266, 196, 'خون‌ریزی', { size: 8.5, anchor: 'start' })}
      ${L(146, 150, 100, 154, 'neuropathy', 'گزگز دست و پا', 'end')}
      <rect x="6" y="282" width="348" height="48" rx="12" fill="${VIO_BG}"/>${f(180, 302, 'داروهای cytotoxic به سلول‌های تندتقسیم حمله می‌کنند', { size: 9.8, fill: VIO, w: 800 })}${f(180, 320, 'مو، مخاط و مغز استخوان هم تند تقسیم می‌شوند؛ پس آسیب می‌بینند', { size: 9.3, fill: VIO })}`, 'عارضه‌های شیمی‌درمانی');
  };

  /* زمان‌بندی درمان: نئوادجوانت، جراحی، ادجوانت */
  A['treatment-timeline'] = () => {
    const a = 'm' + (++UID), sh = 's' + (++UID);
    const step = (x, en, fa, note, c, bg, ic) => `${card(x, 40, 100, 116, bg, sh)}${ic}${t(x + 50, 112, en, { size: 10, fill: c, w: 900 })}${f(x + 50, 128, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 50, 144, note, { size: 8.6 })}`;
    return svg(360, 250, `<defs>${marker(a, VIO)}${shadow(sh)}</defs>
      ${step(254, 'neoadjuvant', 'پیش از جراحی', 'کوچک کردن تومور', '#1c7ed6', '#e7f5ff', cellC(304, 74, 14, 101))}
      ${step(130, 'surgery', 'جراحی', 'برداشتن تومور', VIO, VIO_BG, `<path d="M166 84 L196 58 L200 62 L172 88Z" fill="#adb5bd" stroke="#495057"/><circle cx="180" cy="72" r="16" fill="none" stroke="${VIO}" stroke-width="2" stroke-dasharray="4 3"/>`)}
      ${step(6, 'adjuvant', 'پس از جراحی', 'سلول‌های باقی‌مانده', '#2b8a3e', GOOD_BG, `${cellC(46, 74, 6, 103)}${cellC(66, 66, 5, 105)}<path d="M36 60 l40 30 M76 60 l-40 30" stroke="#2b8a3e" stroke-width="3" stroke-linecap="round"/>`)}
      <path d="M252 98 H234" stroke="${VIO}" stroke-width="2.4" marker-end="url(#${a})"/><path d="M128 98 H110" stroke="${VIO}" stroke-width="2.4" marker-end="url(#${a})"/>
      ${f(180, 24, 'ترتیب رایج درمان یک تومور جامد', { size: 11, fill: INK, w: 800 })}
      <rect x="6" y="170" width="348" height="72" rx="12" fill="#f8f9fa"/>${t(270, 192, 'remission', { size: 10.5, fill: GOOD, w: 900 })}${f(270, 208, 'بهبودی؛ نشانه سرطان نیست', { size: 9, fill: INK, w: 700 })}
      ${t(90, 192, 'relapse / recurrence', { size: 10.5, fill: BAD, w: 900 })}${f(90, 208, 'عود: بازگشت سرطان', { size: 9, fill: INK, w: 700 })}${f(180, 232, 'ad- = افزودن • neo- = تازه، پیش از', { size: 9.5, fill: VIO, w: 700 })}`, 'زمان‌بندی درمان');
  };

  /* هورمون‌درمانی: قفل و کلید */
  A['hormone-block'] = () => {
    const sh = 's' + (++UID);
    const cell = (x) => `<path d="${blob(x, 110, 46, 0.18, 10, x)}" fill="#ffe3e3" stroke="#e03131" stroke-width="1.4"/><circle cx="${x}" cy="114" r="15" fill="#c2255c" opacity=".85"/>`;
    const lock = (x, y) => `<path d="M${x - 10} ${y} v-12 h20 v12 M${x - 4} ${y - 12} v6 h8 v-6" stroke="#5f3dc4" stroke-width="3" fill="none"/>`;
    const key = (x, y, c) => `<circle cx="${x}" cy="${y - 18}" r="7" fill="${c}"/><rect x="${x - 3}" y="${y - 12}" width="6" height="16" fill="${c}"/>`;
    return svg(360, 280, `<defs>${shadow(sh)}</defs>
      ${card(184, 8, 170, 230, '#fff', sh)}${card(6, 8, 170, 230, '#fff', sh)}
      ${t(269, 30, 'ER-positive cell', { size: 10, fill: BAD, w: 900 })}${f(269, 44, 'سلول با گیرنده استروژن', { size: 9 })}
      <g transform="translate(0 16)">${cell(269)}${lock(269, 66)}${key(269, 62, '#e64980')}</g>${f(269, 196, 'استروژن، کلید؛ گیرنده، قفل', { size: 9.3, fill: INK, w: 800 })}${f(269, 212, 'کلید در قفل: پیام رشد', { size: 9 })}
      ${t(91, 30, 'antiestrogen', { size: 10, fill: VIO, w: 900 })}${f(91, 44, 'ضداستروژن، مثل tamoxifen', { size: 9 })}
      <g transform="translate(0 16)">${cell(91)}${lock(91, 66)}<rect x="81" y="44" width="20" height="10" rx="3" fill="#7048e8"/>${key(132, 76, '#e64980')}<path d="M122 52 l18 18 M140 52 l-18 18" stroke="${BAD}" stroke-width="2.4"/></g>
      ${f(91, 196, 'دارو قفل را می‌بندد', { size: 9.3, fill: INK, w: 800 })}${f(91, 212, 'استروژن دیگر جا ندارد', { size: 9 })}
      ${f(180, 258, 'aromatase inhibitor ساختن استروژن را کم می‌کند', { size: 9.3, fill: VIO, w: 700 })}`, 'هورمون‌درمانی');
  };

  /* پیوند سلول بنیادی */
  A['stem-cell'] = () => {
    const a = 'm' + (++UID), sh = 's' + (++UID);
    const step = (x, n, en, fa, ic) => `${card(x, 30, 80, 150, '#fff', sh)}<circle cx="${x + 40}" cy="44" r="11" fill="${VIO}"/>${t(x + 40, 48, n, { size: 11, fill: '#fff', w: 900 })}${ic}${t(x + 40, 140, en, { size: 9, fill: VIO, w: 900 })}${f(x + 40, 156, fa[0], { size: 8.8, fill: INK, w: 700 })}${f(x + 40, 170, fa[1], { size: 8.4 })}`;
    const sc = (x, y) => `<circle cx="${x}" cy="${y}" r="7" fill="#d0bfff" stroke="#7048e8"/><circle cx="${x}" cy="${y}" r="3" fill="#7048e8"/>`;
    return svg(360, 250, `<defs>${marker(a, VIO)}${shadow(sh)}</defs>${f(180, 18, 'stem cell transplant در لوسمی و لنفوم', { size: 11, fill: INK, w: 800 })}
      ${step(274, '1', 'collect', ['برداشت سلول', 'از مغز یا خون'], `${sc(306, 86)}${sc(322, 98)}${sc(306, 108)}`)}
      ${step(184, '2', 'high-dose', ['شیمی‌درمانی شدید', 'تخریب مغز بیمار'], `${cellC(216, 90, 9, 111)}${cellC(234, 104, 8, 113)}<path d="M206 80 l38 34" stroke="${BAD}" stroke-width="3"/>`)}
      ${step(94, '3', 'infusion', ['تزریق سلول‌ها', 'از سیاهرگ'], `<rect x="124" y="70" width="20" height="30" rx="5" fill="#fff" stroke="${VIO}" stroke-width="2"/>${sc(134, 86)}<path d="M134 100 v16" stroke="${VIO}" stroke-width="2"/>`)}
      ${step(4, '4', 'engraftment', ['جای‌گیری', 'و ساختن خون'], `${sc(30, 88)}<circle cx="50" cy="94" r="6" fill="#ff8787"/><circle cx="36" cy="108" r="6" fill="#ff8787"/><ellipse cx="56" cy="110" rx="3" ry="2" fill="#fab005"/>`)}
      ${[272, 182, 92].map(x => `<path d="M${x} 104 h-6" stroke="${VIO}" stroke-width="2" marker-end="url(#${a})"/>`).join('')}
      <rect x="6" y="190" width="348" height="52" rx="12" fill="${VIO_BG}"/>${f(180, 210, 'BMT از مغز استخوان • PBSCT از خون محیطی', { size: 9.8, fill: VIO, w: 800 })}${f(180, 228, 'عارضه: GVHD، حمله سلول‌های ایمنی اهداکننده به بدن گیرنده', { size: 9.3, fill: VIO })}`, 'پیوند سلول بنیادی');
  };

  /* هدف‌های درمان */
  A['care-goals'] = () => {
    const sh = 's' + (++UID);
    const rows = [['curative', 'درمان قطعی', 'هدف: ریشه‌کن کردن سرطان', '#2b8a3e', '#ebfbee', '🎯'], ['palliative', 'تسکینی', 'کم کردن درد و علائم، بدون درمان قطعی', '#e67700', '#fff9db', '🕊️'],
      ['prophylactic', 'پیشگیرانه', 'برداشتن ضایعه پیش‌سرطانی', '#1c7ed6', '#e7f5ff', '🛡️'], ['supportive', 'حمایتی', 'ضدتهوع، تغذیه، پورت', '#7048e8', VIO_BG, '🤝'], ['rehabilitative', 'توان‌بخشی', 'بازسازی پستان پس از ماستکتومی', '#c2255c', '#fff0f6', '🌱']];
    return svg(360, 280, `<defs>${shadow(sh)}</defs>${f(180, 20, 'هدف درمان چیست؟', { size: 11, fill: INK, w: 800 })}
      ${rows.map(([en, fa, d, c, bg, e], i) => { const y = 32 + i * 48; return `${card(6, y, 348, 42, bg, sh)}<text x="330" y="${y + 28}" font-size="18" text-anchor="middle">${e}</text>${t(300, y + 18, en, { size: 10.5, fill: c, w: 900, anchor: 'end' })}${f(300, y + 34, fa, { size: 9.3, fill: INK, w: 800, anchor: 'end' })}${f(18, y + 26, d, { size: 9, anchor: 'start' })}`; }).join('')}`, 'هدف‌های درمان سرطان');
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
    id: 'lx', sym: 'Lx', name: 'زبان سرطان', short: 'زبان', sub: 'ریشه‌های تومور و بافت، پسوندهای رشد، تشخیص و جراحی، پیشوندها، جمع و صفت، تیم درمان و اختصارهای پرونده',
    color: '#4C6EF5', dark: '#3448B8', light: '#E5EBFF',
    levels: ['ریشه‌های سرطان', 'پسوندها و پیشوندها', 'زبان پرونده'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: ریشه‌های سرطان ================= */
      {
        id: 'lx1', title: 'هر واژه یک پازل', icon: '🧩', items: [
          L('واژه را بشکن', `واژه‌های سرطان از چند <b>قطعه ثابت</b> ساخته می‌شوند: <b>ریشه</b> (root) که می‌گوید «چه بافتی؟» و <b>پسوند</b> (suffix) که می‌گوید «چه شده؟».${fig('wordparts', '', 'osteosarcoma: سرطان بدخیم بافت همبندِ استخوان.')}${memo('معنی را از آخر بخوان: اول پسوند (چه شده؟)، بعد ریشه (کجا؟).')}`),
          L('سه ریشه برای سرطان', `${tbl([['ریشه', 'معنی', 'نمونه'], [e('onc/o'), 'تومور', 'oncology: علم سرطان'], [e('carcin/o'), 'سرطان (بافت پوششی)', 'carcinoma'], [e('sarc/o'), 'گوشت، بافت همبند', 'sarcoma']])}و پسوند پایه همه: ${e('-oma')} یعنی <b>تومور، توده</b>.${pearl('بخش سرطان بیمارستان را «انکولوژی» می‌نامند: onc/o + ‎-logy.')}`),
          M(`${e('<b>oncology</b>')} یعنی…`, ['علم تومور و سرطان', 'علم خون', 'علم بافت', 'علم سلول'], 'onc/o (تومور) + -logy (علم).'),
          P('هر ریشه را به معنی‌اش وصل کن', [['onc/o', 'تومور'], ['carcin/o', 'سرطان بافت پوششی'], ['sarc/o', 'بافت همبند'], ['-oma', 'تومور، توده']]),
          L('دو ریشه برای «رشد تازه»', `${wb('neo-', '-plasm')} = <b>neoplasm</b>: neo- یعنی <b>نو</b> و ${e('-plasm')} یعنی <b>رشد، شکل</b>؛ یعنی «رشد تازه». neoplasm و <b>tumor</b> در عمل یک معنا دارند: توده‌ای از سلول‌ها که بی‌فایده رشد می‌کند.${memo('neo مثل «نئون»: چیزی تازه و درخشان؛ ولی این رشدِ تازه بی‌فایده است!')}`),
          M(`${e('<b>neoplasm</b>')} یعنی…`, ['رشد تازه و نابه‌جای بافت؛ تومور', 'التهاب بافت', 'مرگ سلول', 'زخم پوست'], 'neo- (نو) + -plasm (رشد).'),
          T('neoplasm و tumor تقریباً یک معنا دارند.', true, 'هر دو یعنی توده‌ای از رشد غیرطبیعی سلول‌ها.'),
          B('در carcinoma، پسوند ___ یعنی «تومور».', ['-oma', 'carcin/o', '-plasm'], 'carcin/o (سرطان) + -oma (تومور).'),
          W('واژه‌ای بساز به معنی «علم تومور و سرطان»', ['onc/o', '-logy'], ['-logist', 'carcin/o', '-oma'], 'onc/o + -logy = oncology.'),
          S('املای انگلیسی «علم تومور و سرطان» را بنویس', 'oncology', 'onc/o + -logy.', 'onco…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx2', title: 'خوش‌خیم یا بدخیم؟', icon: '⚖️', items: [
          L('دو گروه بزرگ تومور', `هر تومور یا <b>benign</b> (خوش‌خیم) است یا <b>malignant</b> (بدخیم). واژه <b>cancer</b> فقط برای تومور بدخیم به کار می‌رود.${fig('benign-malignant')}`),
          M(`${e('<b>malignant</b>')} یعنی…`, ['بدخیم؛ سرطانی و مهاجم', 'خوش‌خیم', 'التهابی', 'پیش‌سرطانی'], 'mal- یعنی بد.'),
          L('تفاوت در یک نگاه', `${vs(['benign', 'آهسته، کپسول‌دار، فقط فشار به اطراف، بدون متاستاز'], ['malignant', 'تند، بی‌کپسول، نفوذ به بافت اطراف، متاستاز با خون و لنف'])}${memo('benign با «بِن» = «خوب» (bene در لاتین مثل benefit)؛ malignant با «مال» = «بد» (مثل malpractice).')}`),
          P('هر ویژگی را به نوع تومور وصل کن', [['کپسول‌دار و آهسته', 'benign'], ['متاستاز با خون و لنف', 'malignant'], ['هر تومور بدخیم', 'cancer']]),
          T('واژه cancer برای همه تومورها، چه خوش‌خیم چه بدخیم، به کار می‌رود.', false, 'نادرست؛ cancer فقط برای تومور بدخیم است.'),
          L('واژه‌های عمومی پرونده', `${tbl([['واژه', 'معنی'], [e('lesion'), 'ضایعه؛ هر ناحیه غیرطبیعی بافت'], [e('mass'), 'توده؛ ممکن است سرطان باشد یا نباشد'], [e('cancerous'), 'سرطانی'], [e('precancerous'), 'پیش‌سرطانی؛ احتمال تبدیل به سرطان'], [e('neoplastic'), 'مربوط به رشد نو']])}${pearl('پزشک تا جواب بیوپسی نیامده می‌گوید «mass» یا «lesion»، نه «cancer»؛ تشخیص قطعی با نمونه‌برداری است.')}`),
          M('در گزارش سونوگرافی نوشته‌اند «a 2 cm mass». این یعنی…', ['یک توده ۲ سانتی‌متری که هنوز نوعش معلوم نیست', 'سرطان قطعی', 'التهاب', 'کیست قطعی'], 'mass فقط یعنی توده.'),
          B('ضایعه‌ای که احتمال تبدیل به سرطان دارد ___ است.', ['precancerous', 'benign', 'metastatic'], 'pre- (پیش از) + cancerous.'),
          S('املای انگلیسی «خوش‌خیم» را بنویس', 'benign', 'g آن خوانده نمی‌شود: «بِناین».', 'ben…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx3', title: 'ریشه‌های بافت', icon: '🧱', items: [
          L('بافت‌ها در نام تومور', `نام هر تومور می‌گوید از کدام بافت پدید آمده است (جدول ۲۰-۲ کتاب):${tbl([['ریشه', 'معنی', 'تومور خوش‌خیم'], [e('aden/o'), 'غده', 'adenoma'], [e('angi/o'), 'رگ', 'angioma'], [e('chondr/o'), 'غضروف', 'chondroma'], [e('fibr/o'), 'بافت فیبری', 'fibroma'], [e('lip/o'), 'چربی', 'lipoma'], [e('my/o'), 'ماهیچه', 'myoma'], [e('neur/o'), 'عصب', 'neuroma'], [e('oste/o'), 'استخوان', 'osteoma']])}`),
          P('هر ریشه را به معنی‌اش وصل کن', [['aden/o', 'غده'], ['chondr/o', 'غضروف'], ['lip/o', 'چربی'], ['oste/o', 'استخوان']]),
          M(`${e('<b>lipoma</b>')} یعنی…`, ['تومور خوش‌خیم چربی', 'سرطان چربی', 'تومور غده', 'التهاب چربی'], 'lip/o (چربی) + -oma.'),
          L('دو ریشه که قاطی می‌شوند', `${vs(['my/o', 'ماهیچه: myoma، myocardial'], ['myel/o', 'مغز استخوان: myeloma، myelogenous'])}${memo('myel/o یک «ل» اضافه دارد؛ «ل» مثل «لوله» استخوان که مغز درونش است.')}`),
          M(`${e('<b>myelogenous</b>')} یعنی…`, ['ساخته‌شده در مغز استخوان', 'مربوط به ماهیچه', 'مربوط به عصب', 'مربوط به غده'], 'myel/o = مغز استخوان.'),
          T('my/o و myel/o هر دو یعنی ماهیچه.', false, 'نادرست؛ myel/o یعنی مغز استخوان.'),
          B('تومور خوش‌خیم غضروف ___ نام دارد.', ['chondroma', 'chondrosarcoma', 'osteoma'], 'chondr/o + -oma.'),
          W('واژه‌ای بساز به معنی «تومور خوش‌خیم غده»', ['aden/o', '-oma'], ['carcin/o', 'lip/o', '-plasm'], 'aden/o + -oma = adenoma.'),
          L('مرور سطح «ریشه‌های سرطان»', recap(['onc/o تومور • carcin/o سرطان بافت پوششی • sarc/o بافت همبند • ‎-oma تومور', 'neoplasm = neo- (نو) + ‎-plasm (رشد)؛ همان tumor', 'benign خوش‌خیم و malignant بدخیم؛ cancer فقط برای بدخیم', 'بافت‌ها: aden/o غده، chondr/o غضروف، fibr/o فیبری، lip/o چربی، my/o ماهیچه، oste/o استخوان؛ myel/o مغز استخوان'])),
          N('m2r:lx')
        ]
      },

      /* ================= سطح ۲: پسوندها و پیشوندها ================= */
      {
        id: 'lx4', title: 'پسوندهای رشد', icon: '🌱', items: [
          L('رشد و پیدایش', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-plasia'), 'رشد، پیدایش', 'hyperplasia، dysplasia'], [e('-plasm'), 'رشد، شکل', 'neoplasm'], [e('-genesis'), 'پیدایش', 'carcinogenesis'], [e('-genic'), 'زا، ایجادکننده', 'oncogenic'], [e('-gen'), 'عامل ایجادکننده', 'carcinogen'], [e('-stasis'), 'ایستادن', 'metastasis']])}`),
          M(`${e('<b>carcinogen</b>')} یعنی…`, ['عامل سرطان‌زا', 'سلول سرطانی', 'داروی ضدسرطان', 'نوعی بیوپسی'], 'carcin/o + -gen (عامل ایجادکننده).'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-plasia', 'رشد، پیدایش'], ['-genesis', 'پیدایش'], ['-stasis', 'ایستادن'], ['-gen', 'عامل ایجادکننده']]),
          L('پسوندهای نشانه و بیماری', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-emia'), 'حالت خون', 'leukemia، anemia'], [e('-penia'), 'کمبود', 'thrombocytopenia'], [e('-pathy'), 'بیماری', 'lymphadenopathy'], [e('-uria'), 'حالت ادرار', 'hematuria'], [e('-ptysis'), 'تف کردن، خلط', 'hemoptysis']])}${memo('leuk/o + ‎-emia = «خونِ سفید»: در لوسمی گلبول‌های سفید نابالغ خون را پر می‌کنند.')}`),
          M(`${e('<b>thrombocytopenia</b>')} یعنی…`, ['کمبود پلاکت', 'افزایش پلاکت', 'لخته در رگ', 'سرطان پلاکت'], 'thromb/o + cyt/o + -penia (کمبود).'),
          T('‎-penia یعنی افزایش.', false, 'نادرست؛ ‎-penia یعنی کمبود.'),
          B('در leukemia، پسوند ___ یعنی «حالت خون».', ['-emia', '-oma', '-penia'], 'leuk/o (سفید) + -emia.'),
          W('واژه‌ای بساز به معنی «پیدایش سرطان»', ['carcin/o', '-genesis'], ['-gen', 'onc/o', '-oma'], 'carcin/o + -genesis = carcinogenesis.'),
          S('املای انگلیسی «عامل سرطان‌زا» را بنویس', 'carcinogen', 'carcin/o + -gen.', 'carcino…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx5', title: 'پسوندهای تشخیص و جراحی', icon: '🔧', items: [
          L('دیدن و ثبت', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-scopy'), 'دیدن با آندوسکوپ', 'colonoscopy'], [e('-scope'), 'ابزار دیدن', 'bronchoscope'], [e('-opsy'), 'دیدن', 'biopsy'], [e('-graphy'), 'فرایند ثبت تصویر', 'mammography'], [e('-gram'), 'خود تصویر', 'mammogram']])}${memo('biopsy = bi/o (زندگی) + ‎-opsy (دیدن): «دیدنِ بافت زنده» زیر میکروسکوپ.')}`),
          M(`${e('<b>mammogram</b>')} یعنی…`, ['عکس اشعه ایکس پستان', 'فرایند عکس‌برداری از پستان', 'برداشتن پستان', 'بیوپسی پستان'], 'mamm/o + -gram (خود تصویر).'),
          L('برداشتن، برش یا دهانه؟', `${fig('ectomy-tomy-stomy')}${vs(['-ectomy', 'mastectomy: برداشتن پستان (mast/o)؛ colectomy: برداشتن روده بزرگ'], ['-stomy', 'colostomy: ساختن دهانه روده روی شکم'])}${e('-tomy')} یعنی برش: thoracotomy، برش قفسه سینه • ${e('-therapy')} یعنی درمان: chemotherapy، درمان دارویی`),
          P('هر پسوند را به معنی‌اش وصل کن', [['-ectomy', 'برداشتن'], ['-tomy', 'برش'], ['-stomy', 'ساختن دهانه'], ['-therapy', 'درمان']]),
          M(`${e('<b>thoracotomy</b>')} یعنی…`, ['برش دیواره قفسه سینه', 'برداشتن قفسه سینه', 'دیدن درون قفسه سینه', 'دهانه روی قفسه سینه'], 'thorac/o + -tomy (برش).'),
          T('colectomy و colostomy یک معنا دارند.', false, 'نادرست؛ colectomy برداشتن روده بزرگ است و colostomy ساختن دهانه روده روی شکم.'),
          B('در chemotherapy، پسوند ___ یعنی «درمان».', ['-therapy', 'chem/o', '-tomy'], 'chem/o (دارو) + -therapy.'),
          W('واژه‌ای بساز به معنی «برداشتن پستان»', ['mast/o', '-ectomy'], ['-tomy', 'mamm/o', '-gram'], 'mast/o + -ectomy = mastectomy.'),
          S('املای انگلیسی «نمونه‌برداری» را بنویس', 'biopsy', 'bi/o + -opsy.', 'bio…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx6', title: 'پیشوندها', icon: '📍', items: [
          L('پیشوندهای تغییر سلول', `${tbl([['پیشوند', 'معنی', 'نمونه'], [e('neo-'), 'نو', 'neoplasm'], [e('hyper-'), 'بیش از حد', 'hyperplasia'], [e('dys-'), 'نابه‌هنجار، دشوار', 'dysplasia، dysphagia'], [e('meta-'), 'تغییر، فراتر', 'metaplasia، metastasis'], [e('ana-'), 'وارونه، بی', 'anaplasia']])}${memo('meta مثل «مِتامورفوز»: تغییر شکل. metastasis یعنی سرطان جای خودش را عوض کرده است.')}`),
          M(`در ${e('<b>metastasis</b>')}، پیشوند meta- یعنی…`, ['تغییر، فراتر', 'نو', 'پیش از', 'ضد'], 'meta- + -stasis (ایستادن).'),
          P('هر پیشوند را به معنی‌اش وصل کن', [['neo-', 'نو'], ['dys-', 'نابه‌هنجار'], ['hyper-', 'بیش از حد'], ['ana-', 'بی، وارونه']]),
          L('پیشوندهای درمان و زمان', `• ${e('anti-')} ضد: antineoplastic، antiemetic<br>• ${e('pre-')} پیش از: precancerous<br>• ${e('pro-')} پیش، جلو: prophylactic، پیشگیرانه<br>• ${e('brachy-')} کوتاه، نزدیک: brachytherapy، پرتودرمانی از نزدیک<br>• ${e('trans-')} از راه: transrectal ultrasound${pearl('antineoplastic همان داروی ضدسرطان است: anti- + neo- + plas/o + ‎-tic.')}`),
          M('کدام واژه یعنی «داروی ضد رشدِ تازه» (ضدسرطان)؟', ['antineoplastic', 'neoplastic', 'antiemetic', 'precancerous'], 'anti- + neo- + plas/o + -tic.'),
          T('brachytherapy یعنی پرتودرمانی از فاصله دور.', false, 'نادرست؛ brachy- یعنی نزدیک: منبع پرتو کنار تومور است.'),
          B('پیشوند ___ در precancerous یعنی «پیش از».', ['pre-', 'pro-', 'meta-'], 'pre- = پیش از.'),
          W('واژه‌ای بساز به معنی «رشد نابه‌هنجار سلول‌ها»', ['dys-', '-plasia'], ['hyper-', 'neo-', '-plasm'], 'dys- + -plasia = dysplasia.'),
          L('مرور سطح «پسوندها و پیشوندها»', recap(['رشد: ‎-plasia، ‎-plasm، ‎-genesis، ‎-gen، ‎-genic؛ ‎-stasis ایستادن', 'نشانه: ‎-emia خون، ‎-penia کمبود، ‎-pathy بیماری، ‎-uria ادرار، ‎-ptysis خلط', 'تشخیص و جراحی: ‎-scopy، ‎-opsy، ‎-graphy، ‎-gram؛ ‎-ectomy برداشتن، ‎-tomy برش، ‎-stomy دهانه', 'پیشوند: neo- نو، hyper- بیش، dys- نابه‌هنجار، meta- تغییر، ana- بی، anti- ضد، pre- پیش، brachy- نزدیک'])),
          N('m2r:lx')
        ]
      },

      /* ================= سطح ۳: زبان پرونده ================= */
      {
        id: 'lx7', title: 'مفرد، جمع و صفت', icon: '📚', items: [
          L('جمع‌های لاتین و یونانی', `${fig('plurals')}${memo('«IS» رفت، «ES» آمد: metastasis → metastases. «US» رفت، «I» آمد: nevus → nevi.')}`),
          M('جمع metastasis کدام است؟', ['metastases', 'metastasises', 'metastasi', 'metastasa'], '‎-is → ‎-es.'),
          P('هر مفرد را به جمعش وصل کن', [['nevus', 'nevi'], ['diagnosis', 'diagnoses'], ['carcinoma', 'carcinomata'], ['polyp', 'polyps']]),
          L('صفت‌ها در گزارش پاتولوژی', `${tbl([['صفت', 'معنی'], [e('malignant'), 'بدخیم'], [e('benign'), 'خوش‌خیم'], [e('metastatic'), 'متاستاتیک؛ گسترش‌یافته'], [e('neoplastic'), 'مربوط به رشد نو'], [e('invasive'), 'مهاجم'], [e('in situ'), 'درجا؛ هنوز مهاجم نیست']])}${pearl('در گزارش «metastatic adenocarcinoma, consistent with colon primary» یعنی سرطان گسترش‌یافته‌ای که منشأش روده بزرگ است.')}`),
          M('«metastatic» یعنی…', ['گسترش‌یافته از جای اولیه', 'درجا و بدون تهاجم', 'خوش‌خیم', 'پیش‌سرطانی'], 'meta- (تغییر) + -stasis + -ic.'),
          T('جمع carcinoma می‌تواند carcinomata یا carcinomas باشد.', true, 'شکل لاتین carcinomata و شکل انگلیسی carcinomas.'),
          B('جمع leiomyoma به شکل لاتین leiomyo___ است.', ['mata', 'mi', 'mae'], '‎-oma → ‎-omata.'),
          M('«in situ» در گزارش یعنی سرطان…', ['هنوز در جای خود است و تهاجم نکرده', 'به همه بدن رفته', 'خوش‌خیم است', 'درمان شده است'], 'in situ = در جای خود.'),
          S('املای انگلیسی جمع «خال» (nevus) را بنویس', 'nevi', 'nevus → nevi.', 'nev…'),
          N('sp:lx')
        ]
      },
      {
        id: 'lx8', title: 'تیم سرطان', icon: '👩‍⚕️', items: [
          L('کار تیمی', `درمان سرطان کار یک نفر نیست؛ تیمی از متخصصان در <b>tumor board</b> (کمیته تومور) با هم تصمیم می‌گیرند:${fig('onc-team')}`),
          L('چه کسی چه می‌کند؟', `${tbl([['عنوان', 'کار'], ['medical oncologist', 'شیمی‌درمانی، هورمون‌درمانی و هماهنگی درمان'], ['surgical oncologist', 'بیوپسی و برداشتن تومور'], ['radiation oncologist', 'پرتودرمانی'], ['pathologist', 'تشخیص و تعیین مرحله با نگاه به بافت'], ['hematologist', 'بیماری‌های خون، لوسمی و لنفوم'], ['oncology nurse', 'دادن دارو و مراقبت از عارضه‌ها']])}`),
          M('چه کسی بافت بیوپسی را زیر میکروسکوپ می‌بیند و تشخیص قطعی می‌دهد؟', ['pathologist', 'radiation oncologist', 'oncology nurse', 'surgical oncologist'], 'path/o (بیماری) + -logist.'),
          P('هر متخصص را به کارش وصل کن', [['medical oncologist', 'شیمی‌درمانی'], ['radiation oncologist', 'پرتودرمانی'], ['surgical oncologist', 'برداشتن تومور'], ['hematologist', 'لوسمی و لنفوم']]),
          L('ریشه‌ها راز عنوان‌ها', `• ${wb('onc/o', '-logist')} ← متخصص تومور<br>• ${wb('path/o', '-logist')} ← متخصص بیماری‌ها (بافت)<br>• ${wb('hemat/o', '-logist')} ← متخصص خون<br>• ${wb('cyt/o', '-logy')} ← علم سلول؛ ${wb('hist/o', '-logy')} ← علم بافت${pearl('برای کودکان، pediatric oncologist درمان را بر عهده دارد؛ سرطان کودکان با بزرگسالان فرق دارد.')}`),
          M('cytology یعنی…', ['علم سلول؛ بررسی سلول‌ها زیر میکروسکوپ', 'علم بافت', 'علم خون', 'علم تومور'], 'cyt/o (سلول) + -logy.'),
          T('tumor board جلسه‌ای است که متخصصان مختلف درباره درمان بیمار با هم تصمیم می‌گیرند.', true, 'کمیته تومور.'),
          B('علم بافت‌ها زیر میکروسکوپ ___ نام دارد.', ['histology', 'cytology', 'oncology'], 'hist/o (بافت) + -logy.'),
          S('املای انگلیسی «آسیب‌شناس» را بنویس', 'pathologist', 'path/o + -logist.', 'patho…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx9', title: 'زبان پرونده', icon: '📋', items: [
          L('پرونده با اختصار نوشته می‌شود', `${tbl([['اختصار', 'شکل کامل', 'معنی'], ['CA، Ca', 'cancer، carcinoma', 'سرطان'], ['Dx', 'diagnosis', 'تشخیص'], ['Tx', 'treatment', 'درمان'], ['Bx', 'biopsy', 'نمونه‌برداری'], ['Hx', 'history', 'سابقه'], ['mets', 'metastases', 'متاستازها'], ['s/p', 'status post', 'پس از (عمل)'], ['F/U', 'follow-up', 'پیگیری'], ['NED', 'no evidence of disease', 'بدون نشانه بیماری']])}`),
          M('در پرونده نوشته شده «s/p mastectomy». یعنی…', ['بیمار پیش‌تر ماستکتومی شده است', 'بیمار نیاز به ماستکتومی دارد', 'ماستکتومی ممنوع است', 'ماستکتومی انجام نمی‌شود'], 's/p = status post.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['Bx', 'نمونه‌برداری'], ['Dx', 'تشخیص'], ['mets', 'متاستازها'], ['F/U', 'پیگیری']]),
          L('یک خلاصه ترخیص واقعی', `از خلاصه ترخیص کتاب: خانم ۲۸ ساله با <b>papillary carcinoma</b> تیروئید، <b>s/p</b> left thyroidectomy، برای دومین دوز <b>I-131</b> بستری شد. داروی ترخیص: Synthroid ۰٫۱ mg <b>p.o.</b> <b>q.d.</b>${tbl([['اختصار', 'معنی'], ['p.o.', 'per os: از راه دهان'], ['q.d.', 'quaque die: روزی یک بار'], ['mCi', 'millicurie: واحد پرتوزایی'], ['I-131', 'ید رادیواکتیو ۱۳۱']])}`),
          M('«p.o. q.d.» یعنی دارو…', ['خوراکی، روزی یک بار', 'تزریقی، روزی دو بار', 'خوراکی، هر شب', 'زیرزبانی، هر هفته'], 'per os + quaque die.'),
          T('NED در پرونده پیگیری خبر خوبی است.', true, 'no evidence of disease: نشانه‌ای از بیماری نیست.'),
          B('اختصار ___ یعنی «سابقه بیمار».', ['Hx', 'Dx', 'Tx'], 'history.'),
          M('«Ca colon with liver mets» یعنی…', ['سرطان روده بزرگ با متاستاز به کبد', 'سرطان کبد', 'کلسیم بالا در روده', 'التهاب کبد'], 'Ca = cancer؛ mets = metastases.'),
          L('مرور سطح «زبان پرونده»', recap(['جمع: ‎-is → ‎-es (metastases) • ‎-us → ‎-i (nevi) • ‎-oma → ‎-omata (carcinomata)', 'صفت: malignant، benign، metastatic، neoplastic، invasive، in situ', 'تیم: medical، surgical و radiation oncologist، pathologist، hematologist، oncology nurse؛ tumor board', 'پرونده: CA، Dx، Tx، Bx، Hx، mets، s/p، p.o.، q.d.، F/U، NED'])),
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
    id: 'cl', sym: 'Cell', name: 'سلول و رشد تومور', short: 'سلول', sub: 'تقسیم مهارشده، تمایز، خوش‌خیم و بدخیم، پله‌های تغییر سلول، ژن‌ها و سرطان‌زاها، متاستاز',
    color: '#12B886', dark: '#0B7F5C', light: '#DDF7EE',
    levels: ['رشد طبیعی و سرطانی', 'تغییرات سلول', 'پیدایش و گسترش'],
    gens: EA.genIds('cl'),
    lessons: [
      /* ================= سطح ۱: رشد طبیعی و سرطانی ================= */
      {
        id: 'cl1', title: 'تقسیم مهارشده', icon: '🔬', items: [
          L('سلول‌ها فقط به اندازه نیاز تقسیم می‌شوند', `سلول‌های بدن با <b>mitosis</b> (تقسیم سلول) جای سلول‌های آسیب‌دیده و پیر را پر می‌کنند. این تقسیم در <b>cell cycle</b> (چرخه سلولی) به دقت مهار می‌شود: وقتی جا پر شد، تقسیم می‌ایستد.${fig('cell-division')}`),
          M('تقسیم یک سلول به دو سلول یکسان چه نام دارد؟', ['mitosis', 'apoptosis', 'metastasis', 'necrosis'], 'mitosis.'),
          L('مرگ برنامه‌ریزی‌شده', `سلول پیر یا آسیب‌دیده با <b>apoptosis</b> (مرگ برنامه‌ریزی‌شده) آرام کنار می‌رود. سلول سرطانی دو ویژگی دارد:<br>• <b>proliferation</b> (تکثیر) بی‌مهار<br>• فرار از apoptosis${vs(['apoptosis', 'مرگ منظم و برنامه‌ریزی‌شده یک سلول'], ['necrosis', 'مرگ ناگهانی بافت از آسیب یا نبود خون'])}${memo('apoptosis را «اِپوتوسیس» بخوان (p دوم بی‌صداست)؛ مثل برگ پاییزی که خودش آرام از درخت می‌افتد.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['mitosis', 'تقسیم سلول'], ['apoptosis', 'مرگ برنامه‌ریزی‌شده'], ['proliferation', 'تکثیر'], ['cell cycle', 'چرخه سلولی']]),
          T('سلول سرطانی از apoptosis فرار می‌کند.', true, 'برای همین زنده می‌ماند و انباشته می‌شود.'),
          M('سلول‌های طبیعی وقتی به همسایه می‌رسند چه می‌کنند؟', ['تقسیم را متوقف می‌کنند', 'روی هم انباشته می‌شوند', 'به خون می‌روند', 'بزرگ‌تر می‌شوند'], 'تقسیم مهارشده.'),
          B('رشد و تقسیم سریع سلول‌ها را ___ می‌گویند.', ['proliferation', 'apoptosis', 'differentiation'], 'proliferation = تکثیر.'),
          M('سرطان در یک جمله یعنی…', ['تقسیم بی‌مهار سلول‌ها که می‌توانند به بافت‌های دیگر حمله کنند', 'التهاب بافت', 'مرگ سلول‌ها', 'کمبود سلول'], 'تعریف کتاب.'),
          S('املای انگلیسی «تقسیم سلول» را بنویس', 'mitosis', 'mit/o (رشته) + -osis.', 'mito…'),
          N('t2f:cl')
        ]
      },
      {
        id: 'cl2', title: 'تمایز', icon: '🎓', items: [
          L('سلول بالغ شکل و کار ویژه دارد', `<b>differentiation</b> (تمایز) یعنی سلول بالغ می‌شود و ساختار و کار ویژه‌اش را می‌گیرد. هرچه سلول‌های تومور به سلول طبیعی شبیه‌تر باشند (<b>well differentiated</b>)، تومور آرام‌تر است.${fig('differentiation')}`),
          M('well differentiated یعنی سلول‌های تومور…', ['بسیار شبیه سلول‌های طبیعی‌اند', 'هیچ شباهتی به سلول طبیعی ندارند', 'مرده‌اند', 'در خون‌اند'], 'خوب تمایزیافته؛ رفتار آرام‌تر.'),
          L('سه حالت تمایز', `${tbl([['واژه', 'معنی', 'رفتار'], [e('well differentiated'), 'شبیه سلول طبیعی', 'آهسته؛ خوش‌خیم یا درجه پایین'], [e('poorly differentiated'), 'بسیار متفاوت', 'تند؛ بدخیم و درجه بالا'], [e('undifferentiated'), 'بدون ویژگی سلول بالغ', 'بسیار تهاجمی']])}<b>anaplasia</b> (ana- + ‎-plasia) یعنی از دست رفتن تمایز؛ نشانه سلول بدخیم.${pearl('پاتولوژیست با همین تمایز، «درجه» (grade) تومور را تعیین می‌کند: grade 1 خوب تمایزیافته و grade 3 کم‌تمایز.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['well differentiated', 'شبیه سلول طبیعی'], ['poorly differentiated', 'بسیار متفاوت با سلول طبیعی'], ['anaplasia', 'از دست رفتن تمایز'], ['differentiation', 'بالغ شدن سلول']]),
          T('تومور poorly differentiated معمولاً تندتر رشد می‌کند.', true, 'کم‌تمایز = بدخیم‌تر.'),
          M('کدام درجه (grade) یعنی سلول‌ها خوب تمایزیافته‌اند؟', ['grade 1', 'grade 3', 'stage IV', 'M1'], 'grade پایین = شبیه سلول طبیعی.'),
          B('از دست رفتن تمایز سلول را ___ می‌نامند.', ['anaplasia', 'hyperplasia', 'metaplasia'], 'ana- (بی) + -plasia.'),
          W('واژه‌ای بساز به معنی «بی‌تمایزی سلول»', ['ana-', '-plasia'], ['dys-', 'hyper-', '-plasm'], 'ana- + -plasia = anaplasia.'),
          S('املای انگلیسی «تمایز» را بنویس', 'differentiation', 'differentiate + -ion.', 'differ…'),
          N('d2t:cl')
        ]
      },
      {
        id: 'cl3', title: 'خوش‌خیم در برابر بدخیم', icon: '⚖️', items: [
          L('جدول ۲۰-۱ کتاب', `${tbl([['ویژگی', 'benign', 'malignant'], ['تمایز سلول', 'خوب', 'کم'], ['نوع رشد', 'expansion (فشار به اطراف)', 'infiltration (نفوذ به اطراف)'], ['سرعت رشد', 'آهسته', 'تند'], ['گسترش', 'موضعی', 'متاستاز با خون و لنف']])}${fig('benign-malignant')}`),
          M('رشد تومور بدخیم از چه نوعی است؟', ['infiltration؛ نفوذ به بافت اطراف', 'expansion؛ فقط فشار', 'بدون رشد', 'فقط درون کپسول'], 'جدول ۲۰-۱.'),
          L('کپسول، نفوذ، تهاجم', `• <b>encapsulated</b>: کپسول‌دار؛ ویژگی بسیاری از تومورهای خوش‌خیم<br>• <b>infiltration</b>: نفوذ سلول‌های بدخیم به بافت مجاور<br>• <b>invasion</b>: تهاجم به بافت سالم اطراف${memo('خوش‌خیم «توپ در کیسه» است: هل می‌دهد ولی سوراخ نمی‌کند. بدخیم «خرچنگ» است: پنجه در بافت فرو می‌برد. cancer در لاتین یعنی خرچنگ!')}`),
          P('هر ویژگی را به معنی‌اش وصل کن', [['encapsulated', 'کپسول‌دار'], ['infiltration', 'نفوذ به بافت اطراف'], ['expansion', 'رشد با فشار به اطراف'], ['metastasis', 'گسترش به جای دور']]),
          T('تومورهای خوش‌خیم متاستاز می‌دهند.', false, 'نادرست؛ خوش‌خیم موضعی می‌ماند.'),
          M('کدام ویژگی بیشتر نشانه بدخیمی است؟', ['poorly differentiated و infiltration', 'encapsulated و رشد آهسته', 'well differentiated', 'موضعی ماندن'], 'جدول ۲۰-۱.'),
          B('تومور خوش‌خیم با ___ رشد می‌کند و بافت اطراف را فقط کنار می‌زند.', ['expansion', 'infiltration', 'metastasis'], 'expansion = گسترش با فشار.'),
          L('مرور سطح «رشد طبیعی و سرطانی»', recap(['mitosis تقسیم سلول در cell cycle؛ apoptosis مرگ برنامه‌ریزی‌شده؛ proliferation تکثیر', 'سلول سرطانی: تقسیم بی‌مهار و فرار از apoptosis', 'differentiation: well (شبیه طبیعی) • poorly • undifferentiated؛ anaplasia یعنی بی‌تمایزی', 'benign: encapsulated، expansion، آهسته، موضعی • malignant: infiltration، invasion، تند، metastasis'])),
          N('m2r:cl')
        ]
      },

      /* ================= سطح ۲: تغییرات سلول ================= */
      {
        id: 'cl4', title: 'پله‌های تغییر', icon: '🪜', items: [
          L('از طبیعی تا سرطان', `بافت پوششی معمولاً پله‌پله به سوی سرطان می‌رود:${fig('plasia-steps')}`),
          L('چهار واژه با ‎-plasia', `${tbl([['واژه', 'معنی'], [e('hyperplasia'), 'سلول‌های بیشتر ولی طبیعی؛ ممکن است بعدها سرطانی شوند'], [e('metaplasia'), 'تبدیل یک نوع سلول بالغ به نوع دیگر، اغلب در برابر تحریک'], [e('dysplasia'), 'سلول‌های نابه‌هنجار؛ پیش‌سرطانی'], [e('neoplasia'), 'پیدایش رشد تازه (تومور)']])}${memo('hyper = زیاد • meta = تغییر • dys = بدشکل • neo = تازه؛ همه با ‎-plasia یعنی «رشد».')}`),
          M(`${e('<b>hyperplasia</b>')} یعنی…`, ['افزایش تعداد سلول‌هایی که طبیعی به نظر می‌رسند', 'سلول‌های بدشکل', 'تبدیل نوع سلول', 'مرگ سلول‌ها'], 'hyper- + -plasia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['hyperplasia', 'سلول بیشتر، ظاهر طبیعی'], ['metaplasia', 'تبدیل نوع سلول'], ['dysplasia', 'سلول نابه‌هنجار'], ['neoplasia', 'پیدایش تومور']]),
          O('پله‌های تغییر بافت را به ترتیب بچین', ['hyperplasia', 'dysplasia', 'carcinoma in situ', 'invasive carcinoma'], 'از تغییر ساده تا سرطان مهاجم.'),
          T('dysplasia همان سرطان مهاجم است.', false, 'نادرست؛ dysplasia پیش‌سرطانی است و هنوز سرطان نیست.'),
          L('نمونه بالینی', `در مری بیمار با ریفلاکس اسید طولانی، پوشش سنگفرشی به پوشش غده‌ای تبدیل می‌شود: <b>metaplasia</b> که به آن Barrett esophagus می‌گویند.${pearl('پاپ اسمیر برای پیدا کردن dysplasia دهانه رحم است؛ برداشتن ناحیه دیسپلاستیک جلوی سرطان را می‌گیرد.')}`),
          M('تبدیل پوشش مری به نوع دیگر در ریفلاکس طولانی چه نام دارد؟', ['metaplasia', 'hyperplasia', 'anaplasia', 'apoptosis'], 'meta- = تغییر.'),
          S('املای انگلیسی «رشد نابه‌هنجار» را بنویس', 'dysplasia', 'dys- + -plasia.', 'dys…'),
          N('wb:cl')
        ]
      },
      {
        id: 'cl5', title: 'درجا یا مهاجم؟', icon: '🚧', items: [
          L('مرز غشای پایه', `زیر بافت پوششی لایه نازکی به نام <b>basement membrane</b> (غشای پایه) است:${vs(['carcinoma in situ', 'سلول‌های سرطانی هنوز بالای غشای پایه‌اند؛ درجا'], ['invasive carcinoma', 'سلول‌ها از غشای پایه گذشته و به بافت زیرین رسیده‌اند'])}${memo('in situ لاتین است یعنی «در جای خودش»: سرطان هنوز از خانه بیرون نیامده.')}`),
          M('carcinoma in situ یعنی…', ['سرطانی که هنوز از غشای پایه عبور نکرده است', 'سرطانی که به کبد رفته است', 'تومور خوش‌خیم', 'التهاب بافت پوششی'], 'in situ = درجا.'),
          L('چرا مهم است؟', `کتاب می‌گوید carcinoma in situ با برداشتن کامل (excision) <b>درمان قطعی</b> می‌شود، چون هنوز به رگ و لنف دسترسی ندارد. نمونه مهم: <b>ductal carcinoma in situ</b> (DCIS) در مجرای پستان.${pearl('سرطان مهاجم به رگ‌های خونی و لنفی بافت زیرین می‌رسد؛ از این‌جا راه متاستاز باز می‌شود.')}`),
          T('carcinoma in situ با برداشتن کامل قابل درمان قطعی است.', true, 'هنوز گسترش نیافته است.'),
          P('هر واژه را به معنی‌اش وصل کن', [['in situ', 'درجا'], ['invasive', 'مهاجم'], ['DCIS', 'کارسینوم درجای مجرای پستان'], ['basement membrane', 'غشای پایه']]),
          L('مرکز مرده تومور', `تومورهای تندرشد گاهی بیش از خون‌رسانی خود رشد می‌کنند و مرکزشان دچار <b>necrosis</b> (مرگ بافت؛ necr/o = مرده) می‌شود. برای فرار از این، تومور رگ تازه می‌سازد: <b>angiogenesis</b> (angi/o رگ + ‎-genesis پیدایش).`),
          M('ساختن رگ‌های تازه برای تغذیه تومور چه نام دارد؟', ['angiogenesis', 'apoptosis', 'carcinogenesis', 'metaplasia'], 'angi/o + -genesis.'),
          B('مرگ بافت در مرکز تومور ___ نام دارد.', ['necrosis', 'mitosis', 'dysplasia'], 'necr/o = مرده.'),
          W('واژه‌ای بساز به معنی «پیدایش رگ»', ['angi/o', '-genesis'], ['carcin/o', '-gen', '-oma'], 'angi/o + -genesis = angiogenesis.'),
          N('t2f:cl')
        ]
      },
      {
        id: 'cl6', title: 'ژن‌های گاز و ترمز', icon: '🧬', items: [
          L('سرطان بیماری ژن‌هاست', `<b>mutation</b> (جهش) تغییری ماندگار در DNA سلول است؛ ممکن است ارثی باشد یا در طول زندگی پدید آید. دو گروه ژن در سرطان نقش اصلی دارند: <b>oncogene</b> و <b>tumor suppressor gene</b>.${fig('gas-brake')}`),
          M('oncogene شبیه کدام است؟', ['پدال گازِ گیرکرده', 'ترمزِ خراب', 'کپسول تومور', 'داروی ضدسرطان'], 'دستور تقسیم مدام می‌دهد.'),
          L('ترمز خراب', `• <b>oncogene</b>: ژن جهش‌یافته‌ای که سلول را بی‌وقفه به تقسیم وادار می‌کند<br>• <b>tumor suppressor gene</b>: ژنی که تقسیم را کند می‌کند و DNA را تعمیر می‌کند؛ اگر از کار بیفتد، ترمز از دست می‌رود<br>• <b>BRCA1</b> و BRCA2: ژن‌های سرکوبگری که جهش ارثی‌شان خطر سرطان پستان و تخمدان را بسیار بالا می‌برد${pearl('آزمایش BRCA1/BRCA2 برای زنانی است که در خانواده‌شان چند نفر سرطان پستان یا تخمدان داشته‌اند.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['mutation', 'تغییر ماندگار در DNA'], ['oncogene', 'ژن محرک تقسیم بی‌مهار'], ['tumor suppressor gene', 'ژن ترمزکننده تقسیم'], ['BRCA1', 'ژن سرطان پستان']]),
          T('جهش BRCA1 خطر سرطان پستان و تخمدان را بالا می‌برد.', true, 'ژن سرکوبگر تومور.'),
          M('اگر ژن سرکوبگر تومور از کار بیفتد چه می‌شود؟', ['ترمز تقسیم سلول از دست می‌رود', 'سلول زودتر می‌میرد', 'تومور خوش‌خیم می‌شود', 'هیچ اتفاقی نمی‌افتد'], 'ترمز خراب.'),
          B('تغییر ماندگار در DNA یک سلول ___ نام دارد.', ['mutation', 'metastasis', 'mitosis'], 'mut/a = تغییر.'),
          L('مرور سطح «تغییرات سلول»', recap(['hyperplasia سلول بیشتر • metaplasia تغییر نوع • dysplasia نابه‌هنجار (پیش‌سرطانی) • neoplasia پیدایش تومور', 'carcinoma in situ بالای غشای پایه و قابل درمان با برداشتن؛ invasive از آن گذشته است', 'necrosis مرگ بافت؛ angiogenesis ساختن رگ تازه برای تومور', 'mutation در DNA؛ oncogene پدال گاز، tumor suppressor gene ترمز؛ BRCA1 و BRCA2'])),
          N('ab:cl')
        ]
      },

      /* ================= سطح ۳: پیدایش و گسترش ================= */
      {
        id: 'cl7', title: 'سرطان‌زاها', icon: '☢️', items: [
          L('چه چیزی سرطان می‌دهد؟', `${wb('carcin/o', '-gen')} = <b>carcinogen</b>: عامل سرطان‌زا. فرایند تبدیل سلول طبیعی به سرطانی را <b>carcinogenesis</b> می‌گویند.${fig('carcinogens')}`),
          M('carcinogenesis یعنی…', ['فرایند پیدایش سرطان', 'عامل سرطان‌زا', 'درمان سرطان', 'مرحله‌بندی سرطان'], 'carcin/o + -genesis.'),
          L('نمونه‌ها', `${tbl([['عامل', 'سرطان'], [e('tobacco'), 'ریه، دهان، مثانه'], [e('ultraviolet radiation'), 'پوست: BCC، SCC، melanoma'], [e('asbestos'), 'mesothelioma و ریه'], [e('HPV'), 'دهانه رحم، گلو'], [e('EBV'), 'برخی لنفوم‌ها'], [e('BRCA mutation'), 'پستان و تخمدان (ارثی)']])}${pearl('هر چیزی که خطر بیماری را بالا ببرد risk factor (عامل خطر) است؛ ترک سیگار مهم‌ترین کار برای پیشگیری از سرطان است.')}`),
          P('هر عامل را به سرطانش وصل کن', [['asbestos', 'mesothelioma'], ['HPV', 'سرطان دهانه رحم'], ['ultraviolet radiation', 'سرطان پوست'], ['tobacco', 'سرطان ریه']]),
          T('ویروس‌ها هرگز نقشی در سرطان ندارند.', false, 'نادرست؛ HPV و EBV ویروس‌های oncogenic هستند.'),
          M('oncogenic یعنی…', ['تومورزا', 'ضدتومور', 'خوش‌خیم', 'مربوط به درمان'], 'onc/o + -genic (زا).'),
          B('هر چیزی که احتمال بیماری را بالا ببرد ___ factor است.', ['risk', 'tumor', 'growth'], 'risk factor.'),
          W('واژه‌ای بساز به معنی «تومورزا»', ['onc/o', '-genic'], ['carcin/o', '-genesis', '-oma'], 'onc/o + -genic = oncogenic.'),
          S('املای انگلیسی «آزبست» را بنویس', 'asbestos', 'الیاف معدنی؛ عامل mesothelioma.', 'asbes…'),
          N('t2f:cl')
        ]
      },
      {
        id: 'cl8', title: 'متاستاز', icon: '🛫', items: [
          L('سرطان سفر می‌کند', `${wb('meta-', '-stasis')} = <b>metastasis</b>: meta- یعنی تغییر و ‎-stasis یعنی ایستادن؛ سلول‌های سرطانی از <b>primary tumor</b> (تومور اولیه) جدا می‌شوند و در جای دیگری تومور تازه، یعنی <b>secondary tumor</b>، می‌سازند.${fig('metastasis-routes')}`),
          M('تومور تازه‌ای که از گسترش سرطان در جای دیگر ساخته می‌شود چه نام دارد؟', ['secondary tumor', 'primary tumor', 'benign tumor', 'cyst'], 'تومور ثانویه.'),
          L('سه راه گسترش', `${tbl([['راه', 'توضیح'], ['local invasion', 'نفوذ مستقیم به بافت اطراف'], [e('lymphatic spread'), 'از راه رگ‌های لنفی به غدد لنفاوی'], [e('hematogenous spread'), 'از راه خون به اندام‌های دور: کبد، ریه، استخوان، مغز']])}${memo('hemat/o + ‎-genous: «زاده از خون»؛ یعنی سفر با خون.')}`),
          P('هر راه را به مقصدش وصل کن', [['lymphatic spread', 'غدد لنفاوی'], ['hematogenous spread', 'کبد، ریه، استخوان'], ['local invasion', 'بافت کناری']]),
          T('metastasize یعنی گسترش یافتن سرطان به جای دیگر.', true, 'فعل از metastasis.'),
          M('کدام راه بیشتر سرطان را به غدد لنفاوی می‌برد؟', ['lymphatic spread', 'hematogenous spread', 'apoptosis', 'necrosis'], 'رگ‌های لنفی.'),
          B('گسترش سرطان از راه خون ___ spread نام دارد.', ['hematogenous', 'lymphatic', 'local'], 'hemat/o = خون.'),
          O('مراحل متاستاز را بچین', ['جدا شدن سلول از تومور اولیه', 'ورود به رگ خونی یا لنفی', 'سفر در خون یا لنف', 'ایستادن در اندام دور و ساختن تومور تازه'], 'meta (جابه‌جایی) + stasis (ایستادن).'),
          S('املای انگلیسی «متاستاز» را بنویس', 'metastasis', 'meta- + -stasis.', 'meta…'),
          N('f2t:cl')
        ]
      },
      {
        id: 'cl9', title: 'نام تومور سفرکرده', icon: '🏷️', items: [
          L('نام از خانه اول', `تومور ثانویه همان سلول‌های تومور اولیه را دارد و <b>همان نام</b> را نگه می‌دارد. کتاب می‌گوید: اگر سرطان ریه به کبد برود، سلول‌های کبد «سلول سرطان ریه»اند و بیماری <b>metastatic lung cancer</b> است، نه سرطان کبد.${memo('سرطان مثل مسافر است: هرجا برود، شناسنامه‌اش همان شهر تولد است.')}`),
          M('سرطان روده بزرگ که به کبد رفته چه نام دارد؟', ['metastatic colon cancer', 'liver cancer', 'colon and liver cancer', 'hepatoblastoma'], 'نام تومور اولیه حفظ می‌شود.'),
          L('در گزارش پاتولوژی', `${vs(['primary', 'تومور در جایی که سرطان آغاز شد'], ['metastatic', 'تومور در جای تازه با همان سلول‌ها'])}${pearl('اگر پاتولوژیست در کبد سلول‌های غده‌ای روده ببیند، می‌نویسد: «metastatic adenocarcinoma, colonic origin».')}`),
          T('سرطان پستانی که به استخوان رفته، «سرطان استخوان» نامیده می‌شود.', false, 'نادرست؛ metastatic breast cancer است.'),
          P('هر توضیح را به واژه‌اش وصل کن', [['جای آغاز سرطان', 'primary tumor'], ['تومور در جای تازه', 'secondary tumor'], ['گسترش‌یافته', 'metastatic'], ['عامل سرطان‌زا', 'carcinogen']]),
          M('چرا نام تومور متاستاتیک مهم است؟', ['چون درمان را نوع سلول اولیه تعیین می‌کند', 'چون فقط برای بیمه است', 'چون سرطان دوم است', 'چون خوش‌خیم است'], 'سرطان پستان در استخوان را مثل سرطان پستان درمان می‌کنند.'),
          B('سرطان ریه‌ای که به مغز رفته ___ lung cancer است.', ['metastatic', 'primary', 'benign'], 'گسترش‌یافته.'),
          M('کدام راه گسترش سرطان پستان را معمولاً اول به غدد زیر بغل می‌برد؟', ['lymphatic spread', 'hematogenous spread', 'apoptosis', 'differentiation'], 'رگ‌های لنفی پستان به زیر بغل می‌روند.'),
          L('مرور سطح «پیدایش و گسترش»', recap(['carcinogen عامل سرطان‌زا؛ carcinogenesis فرایند پیدایش سرطان؛ oncogenic تومورزا', 'risk factors: tobacco، ultraviolet radiation، asbestos، HPV، EBV، جهش BRCA', 'metastasis = meta- + ‎-stasis؛ primary و secondary tumor؛ lymphatic و hematogenous spread', 'تومور ثانویه نام تومور اولیه را دارد: metastatic lung cancer، نه liver cancer'])),
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
    id: 'nm', sym: 'Name', name: 'نام‌گذاری تومورها', short: 'نام‌ها', sub: 'قاعده نام‌گذاری، تومورهای خوش‌خیم، کارسینوم‌ها و سارکوم‌ها، لوسمی و لنفوم، تومورهای جنینی و نام‌های ویژه',
    color: '#F76707', dark: '#B84A04', light: '#FFEBDD',
    levels: ['قاعده و خوش‌خیم‌ها', 'کارسینوم و سارکوم', 'خون، لنف و نام‌های ویژه'],
    gens: EA.genIds('nm'),
    lessons: [
      /* ================= سطح ۱: قاعده و خوش‌خیم‌ها ================= */
      {
        id: 'nm1', title: 'از کدام بافت؟', icon: '🗺️', items: [
          L('پنج خانواده سرطان', `کتاب می‌گوید همه سرطان‌ها بر پایه <b>بافت مبدأ</b> در چند گروه جا می‌گیرند. اول بپرس: «از کدام بافت؟»${fig('tissue-map')}`),
          M('سرطان بافت پوششی چه نام دارد؟', ['carcinoma', 'sarcoma', 'leukemia', 'lymphoma'], 'carcinoma؛ شایع‌ترین نوع سرطان.'),
          L('هر خانواده در یک خط', `${tbl([['نام', 'بافت مبدأ'], [e('carcinoma'), 'بافت پوششی (epithelium) که سطح بدن و درون اندام‌ها را می‌پوشاند'], [e('sarcoma'), 'بافت همبند و نگهدارنده: استخوان، غضروف، چربی، ماهیچه، رگ'], [e('leukemia'), 'بافت خون‌ساز مغز استخوان'], [e('lymphoma'), 'لنفوسیت‌ها و دستگاه لنفاوی'], [e('blastoma'), 'سلول‌های نابالغ جنینی']])}${memo('کارسینوم «پوسته» است و سارکوم «گوشت و استخوان»: sarc/o یعنی گوشت.')}`),
          P('هر سرطان را به بافتش وصل کن', [['carcinoma', 'بافت پوششی'], ['sarcoma', 'بافت همبند'], ['leukemia', 'مغز استخوان'], ['lymphoma', 'دستگاه لنفاوی']]),
          T('carcinoma شایع‌ترین نوع سرطان است.', true, 'بیشتر سرطان‌ها از بافت پوششی‌اند.'),
          M('سرطانی از سلول‌های نابالغ جنینی چه پسوندی دارد؟', ['-blastoma', '-sarcoma', '-carcinoma', '-emia'], 'blast/o = سلول نابالغ.'),
          B('سرطان استخوان و غضروف در گروه ___ است.', ['sarcoma', 'carcinoma', 'lymphoma'], 'بافت همبند.'),
          W('واژه‌ای بساز به معنی «تومور سلول‌های نابالغ عصبی»', ['neur/o', '-blastoma'], ['-sarcoma', 'oste/o', '-carcinoma'], 'neur/o + -blastoma = neuroblastoma.'),
          S('املای انگلیسی «کارسینوم» را بنویس', 'carcinoma', 'carcin/o + -oma.', 'carci…'),
          N('t2f:nm')
        ]
      },
      {
        id: 'nm2', title: 'تومورهای خوش‌خیم', icon: '🟢', items: [
          L('ریشه + ‎-oma', `کتاب می‌گوید بیشتر تومورهای خوش‌خیم با افزودن ${e('-oma')} به ریشه بافت مبدأ نام می‌گیرند:${tbl([['تومور', 'بافت'], [e('adenoma'), 'غده'], [e('lipoma'), 'چربی'], [e('chondroma'), 'غضروف'], [e('osteoma'), 'استخوان'], [e('fibroma'), 'بافت فیبری'], [e('neuroma'), 'عصب'], [e('angioma'), 'رگ']])}`),
          M(`${e('<b>osteoma</b>')} یعنی…`, ['تومور خوش‌خیم استخوان', 'سرطان استخوان', 'التهاب استخوان', 'تومور غضروف'], 'oste/o + -oma.'),
          L('تومور رگ در پوست', `${fig('angioma', '', 'angioma: تومور خوش‌خیم رگ‌های خونی در پوست سینه یک کودک (شکل ۲۰-۱ کتاب).')}• <b>angioma</b>: تومور خوش‌خیم رگ<br>• <b>hemangioma</b>: تومور خوش‌خیم رگ خونی (hemangi/o)؛ خال قرمز نوزادان<br>• <b>lymphangioma</b>: تومور خوش‌خیم رگ لنفی`),
          P('هر تومور را به بافتش وصل کن', [['lipoma', 'چربی'], ['chondroma', 'غضروف'], ['hemangioma', 'رگ خونی'], ['neuroma', 'عصب']]),
          L('ماهیچه و سطح‌ها', `• <b>myoma</b>: تومور خوش‌خیم ماهیچه؛ <b>leiomyoma</b> از ماهیچه صاف (leiomy/o) که در رحم به آن <b>fibroid</b> می‌گویند<br>• <b>rhabdomyoma</b>: از ماهیچه مخطط (rhabdomy/o)<br>• <b>papilloma</b>: تومور زگیل‌مانند بافت پوششی<br>• <b>polyp</b>: برآمدگی از سطح مخاط، بیشتر در روده بزرگ<br>• <b>nevus</b>: خال؛ تومور خوش‌خیم سلول‌های رنگدانه‌ساز${memo('leio = صاف (مثل «لیز») و rhabdo = میله‌ای، مخطط.')}`),
          M('leiomyoma رحم را در زبان روزمره چه می‌نامند؟', ['fibroid', 'polyp', 'cyst', 'nevus'], 'فیبروم رحم.'),
          T('polyp برآمدگی از سطح مخاط است و بیشتر در روده بزرگ دیده می‌شود.', true, 'جدول ۲۰-۳.'),
          B('تومور خوش‌خیم ماهیچه صاف ___ نام دارد.', ['leiomyoma', 'rhabdomyoma', 'myeloma'], 'leiomy/o + -oma.'),
          W('واژه‌ای بساز به معنی «تومور خوش‌خیم چربی»', ['lip/o', '-oma'], ['-sarcoma', 'aden/o', 'my/o'], 'lip/o + -oma = lipoma.'),
          N('f2t:nm')
        ]
      },
      {
        id: 'nm3', title: 'تله‌های ‎-oma', icon: '⚠️', items: [
          L('هر ‎-oma خوش‌خیم نیست', `${tbl([['واژه', 'چرا تله است؟'], [e('melanoma'), 'با وجود ‎-oma، سرطان بدخیم پوست است'], [e('lymphoma'), 'همه تومورهای لنفاوی بدخیم‌اند'], [e('hematoma'), 'اصلاً تومور نیست؛ خون جمع‌شده بیرون رگ'], [e('carcinoma، sarcoma'), '‎-oma دارند ولی بدخیم‌اند']])}${memo('سه «اوما»ی خطرناک: melanoma، lymphoma، myeloma. یک «اوما»ی بی‌گناه: hematoma که فقط کبودی است!')}`),
          M('hematoma در پزشکی بالینی یعنی…', ['تجمع خون بیرون رگ', 'تومور خوش‌خیم خون', 'سرطان خون', 'تومور رگ'], 'کتاب: معنای واژه‌به‌واژه «تومور خون» در بالین درست نیست.'),
          L('توده‌های خوش‌خیم پستان', `${fig(['fibroadenoma', 'breast-cyst'], ['fibroadenoma: توده سفت و لاستیکی', 'cyst: کیسه پر از مایع در برش'])}• <b>fibroadenoma</b>: تومور خوش‌خیم از بافت فیبری و غده‌ای (fibr/o + aden/o + ‎-oma)<br>• <b>cyst</b>: کیسه‌ای پر از مایع؛ معمولاً سرطان نیست${pearl('بیشتر توده‌های پستان زنان جوان fibroadenoma یا cyst هستند؛ ولی هر توده تازه باید بررسی شود.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['melanoma', 'سرطان سلول رنگدانه‌ساز'], ['hematoma', 'تجمع خون'], ['fibroadenoma', 'تومور خوش‌خیم پستان'], ['cyst', 'کیسه پر از مایع']]),
          T('melanoma تومور خوش‌خیم پوست است.', false, 'نادرست؛ melanoma بدخیم است. خال خوش‌خیم nevus نام دارد.'),
          M('کدام واژه با وجود ‎-oma همیشه بدخیم است؟', ['lymphoma', 'lipoma', 'adenoma', 'fibroma'], 'تومورهای لنفاوی بدخیم‌اند.'),
          L('یک استثنای دیگر', `<b>meningioma</b> تومور پرده‌های مغز (mening/o) است و بیشتر <b>خوش‌خیم</b> و آهسته‌رشد؛ ولی چون در جمجمه جا تنگ است، با فشار نشانه می‌دهد.`),
          B('fibroadenoma از دو بافت fibr/o و ___ ساخته شده است.', ['aden/o', 'lip/o', 'my/o'], 'fibr/o + aden/o + -oma.'),
          L('مرور سطح «قاعده و خوش‌خیم‌ها»', recap(['بافت مبدأ ← نام: carcinoma (پوششی)، sarcoma (همبند)، leukemia (مغز استخوان)، lymphoma (لنف)، blastoma (جنینی)', 'خوش‌خیم: ریشه + ‎-oma؛ adenoma، lipoma، chondroma، osteoma، fibroma، neuroma، angioma، leiomyoma (fibroid)', 'polyp، papilloma، nevus، fibroadenoma و cyst نیز خوش‌خیم‌اند', 'تله‌ها: melanoma و lymphoma بدخیم‌اند؛ hematoma تومور نیست'])),
          N('t2f:nm')
        ]
      },

      /* ================= سطح ۲: کارسینوم و سارکوم ================= */
      {
        id: 'nm4', title: 'کارسینوم‌ها', icon: '🧫', items: [
          L('سرطان بافت پوششی', `<b>carcinoma</b> از بافت پوششی است و با نوع آن بافت دقیق‌تر نام می‌گیرد:${tbl([['نام', 'بافت پوششی'], [e('adenocarcinoma'), 'سلول‌های غده‌ای که مایع یا موکوس می‌سازند: پستان، روده، پانکراس، پروستات'], [e('squamous cell carcinoma'), 'سلول‌های سنگفرشی پوست و مخاط دهان، گلو، دهانه رحم، مقعد'], [e('basal cell carcinoma'), 'لایه پایه اپیدرم پوست'], [e('transitional cell carcinoma'), 'پوشش کشسان مثانه'], [e('papillary carcinoma'), 'برآمدگی‌های انگشتی؛ بیشتر تیروئید']])}`),
          M('بیشتر سرطان‌های پستان، روده و پروستات از کدام نوع‌اند؟', ['adenocarcinoma', 'sarcoma', 'basal cell carcinoma', 'lymphoma'], 'سلول‌های غده‌ای.'),
          L('سه سرطان پوست', `${fig('skin-cancers')}${vs(['basal cell carcinoma', 'شایع‌ترین سرطان پوست؛ آهسته؛ به‌ندرت متاستاز'], ['melanoma', 'از سلول رنگدانه‌ساز؛ خطرناک‌ترین'])}${pearl('هر سه بیشتر در پوستی دیده می‌شوند که زیاد آفتاب خورده است؛ کرم ضدآفتاب مهم‌ترین پیشگیری است.')}`),
          P('هر سرطان را به جایش وصل کن', [['basal cell carcinoma', 'لایه پایه پوست'], ['squamous cell carcinoma', 'سلول سنگفرشی'], ['transitional cell carcinoma', 'مثانه'], ['papillary carcinoma', 'تیروئید']]),
          T('basal cell carcinoma شایع‌ترین سرطان پوست است و به‌ندرت متاستاز می‌دهد.', true, 'کتاب.'),
          M('سرطان غده پانکراس چه نام دارد؟', ['adenocarcinoma of the pancreas', 'pancreatic sarcoma', 'pancreatoma', 'pancreatic lymphoma'], 'aden/o = غده؛ کتاب همین مثال را آورده است.'),
          B('اختصار ___ یعنی squamous cell carcinoma.', ['SCC', 'BCC', 'DCIS'], 'squamous cell carcinoma.'),
          W('واژه‌ای بساز به معنی «سرطان بافت پوششی غده»', ['aden/o', '-carcinoma'], ['-sarcoma', 'lip/o', '-oma'], 'aden/o + -carcinoma = adenocarcinoma.'),
          S('املای انگلیسی «سنگفرشی» (squamous) را بنویس', 'squamous', 'squam/o = فلس.', 'squa…'),
          N('wb:nm')
        ]
      },
      {
        id: 'nm5', title: 'سارکوم‌ها', icon: '🦴', items: [
          L('سرطان بافت همبند', `<b>sarcoma</b> در استخوان و بافت‌های نرم (ماهیچه، چربی، رگ، بافت فیبری) پدید می‌آید. نوع دقیق را ریشه بافت می‌گوید؛ مثلاً oste/o + ‎-sarcoma = <b>osteosarcoma</b>:${fig('naming-rules')}`),
          M(`${e('<b>osteosarcoma</b>')} یعنی…`, ['سرطان بدخیم استخوان؛ شایع‌ترین سرطان استخوان', 'تومور خوش‌خیم استخوان', 'سرطان غضروف', 'التهاب استخوان'], 'oste/o + -sarcoma.'),
          L('خوش‌خیم و بدخیم کنار هم', `${tbl([['بافت', 'خوش‌خیم', 'بدخیم'], ['ماهیچه صاف', 'leiomyoma', 'leiomyosarcoma'], ['ماهیچه مخطط', 'rhabdomyoma', 'rhabdomyosarcoma'], ['رگ', 'angioma', 'angiosarcoma'], ['بافت فیبری', 'fibroma', 'fibrosarcoma']])}${memo('یک «sarc» اضافه کن تا خوش‌خیم بدخیم شود: lipoma → liposarcoma.')}`),
          P('هر سارکوم را به بافتش وصل کن', [['chondrosarcoma', 'غضروف'], ['liposarcoma', 'چربی'], ['rhabdomyosarcoma', 'ماهیچه مخطط'], ['angiosarcoma', 'رگ']]),
          T('غده بافت پوششی است، پس سرطانش adenosarcoma نامیده می‌شود.', false, 'نادرست؛ سرطان غده adenocarcinoma است.'),
          L('دو نام ویژه', `• <b>Kaposi sarcoma</b>: سرطان پوشش رگ‌ها با لکه‌های بنفش پوستی؛ در افراد با ایمنی ضعیف مثل AIDS<br>• <b>lymphosarcoma</b>: نام قدیمی تومور بدخیم بافت لنفی؛ کتاب از آن به‌عنوان «سرطان دوم» پس از ماستکتومی یاد می‌کند${pearl('rhabdomyosarcoma شایع‌ترین سارکوم بافت نرم در کودکان است.')}`),
          M('لکه‌های بنفش پوستی در بیمار AIDS نشانه کدام سارکوم است؟', ['Kaposi sarcoma', 'osteosarcoma', 'liposarcoma', 'chondrosarcoma'], 'سرطان پوشش رگ.'),
          B('سرطان بدخیم ماهیچه صاف ___ نام دارد.', ['leiomyosarcoma', 'leiomyoma', 'rhabdomyosarcoma'], 'leiomy/o + -sarcoma.'),
          W('واژه‌ای بساز به معنی «سرطان بدخیم غضروف»', ['chondr/o', '-sarcoma'], ['-oma', 'oste/o', '-carcinoma'], 'chondr/o + -sarcoma = chondrosarcoma.'),
          N('t2f:nm')
        ]
      },
      {
        id: 'nm6', title: 'ریه، پستان و پرده‌ها', icon: '🫁', items: [
          L('سرطان ریه دو گروه است', `${vs(['small cell lung cancer', 'SCLC: سلول‌های کوچک و گرد شبیه دانه جو (oat cell)؛ تندرشد'], ['non-small cell lung cancer', 'NSCLC: squamous cell، adenocarcinoma و large cell'])}${memo('oat = جو دوسر؛ سلول‌های SCLC زیر میکروسکوپ مثل دانه‌های جو کوچک و گردند.')}`),
          M('oat cell cancer نام دیگر کدام است؟', ['small cell lung cancer', 'non-small cell lung cancer', 'mesothelioma', 'adenocarcinoma'], 'سلول‌های کوچک و گرد.'),
          L('پستان و پرده‌ها', `• <b>ductal carcinoma in situ</b> (DCIS): سلول‌های نابه‌هنجار فقط در پوشش مجرای پستان؛ هنوز بیرون نرفته‌اند<br>• <b>mesothelioma</b>: سرطان پرده پوشاننده قفسه سینه یا شکم (mes/o + theli/o + ‎-oma)؛ با آزبست${pearl('بیمار mesothelioma اغلب سال‌ها پیش در کار با آزبست (لوله، عایق، ترمز) بوده است.')}`),
          P('هر سرطان را به ویژگی‌اش وصل کن', [['SCLC', 'سلول‌های کوچک شبیه جو'], ['NSCLC', 'squamous، adenocarcinoma، large cell'], ['DCIS', 'درجا در مجرای پستان'], ['mesothelioma', 'پرده قفسه سینه؛ آزبست']]),
          T('DCIS از مجرای پستان بیرون نرفته است.', true, 'in situ = درجا.'),
          M('کدام سرطان با آزبست ارتباط قوی دارد؟', ['mesothelioma', 'melanoma', 'osteosarcoma', 'seminoma'], 'سرطان پرده‌ها.'),
          B('large cell carcinoma در گروه ___ lung cancer است.', ['non-small cell', 'small cell', 'oat cell'], 'NSCLC.'),
          L('مرور سطح «کارسینوم و سارکوم»', recap(['carcinoma: adenocarcinoma (غده)، squamous cell، basal cell (شایع‌ترین سرطان پوست)، transitional cell (مثانه)، papillary (تیروئید)', 'melanoma از سلول رنگدانه‌ساز؛ خطرناک‌ترین سرطان پوست', 'sarcoma: osteo-، chondro-، lipo-، leiomyo-، rhabdomyo-، angio-، fibrosarcoma؛ Kaposi sarcoma', 'ریه: SCLC (oat cell) و NSCLC • پستان: DCIS • پرده: mesothelioma و آزبست'])),
          N('d2t:nm')
        ]
      },

      /* ================= سطح ۳: خون، لنف و نام‌های ویژه ================= */
      {
        id: 'nm7', title: 'لوسمی‌ها', icon: '🩸', items: [
          L('سرطان بافت خون‌ساز', `${wb('leuk/o', '-emia')} = <b>leukemia</b>: «خون سفید». در لوسمی سلول‌های نابالغ در مغز استخوان بی‌مهار زیاد می‌شوند، جای سلول‌های طبیعی را می‌گیرند و به خون می‌ریزند.${fig('marrow-crowding')}`),
          M('چرا بیمار لوسمی کم‌خونی، عفونت و خون‌ریزی دارد؟', ['سلول‌های نابالغ جای سلول‌های طبیعی خون را در مغز استخوان گرفته‌اند', 'چون خون از رگ بیرون می‌ریزد', 'چون کبد بزرگ شده است', 'چون غدد لنفاوی برداشته شده‌اند'], 'کتاب: سطح پایین سلول‌های طبیعی.'),
          L('دو سؤال، چهار نوع', `${fig('leukemia-grid')}• <b>acute</b> (حاد) یا <b>chronic</b> (مزمن): بیماری چقدر تند پیش می‌رود؟<br>• <b>lymphocytic</b> یا <b>myeloid</b> (myelogenous): از کدام رده سلول؟${memo('ALL را با «همه بچه‌ها» به خاطر بسپار: All kids؛ شایع‌ترین سرطان کودکان.')}`),
          P('هر اختصار را به نامش وصل کن', [['ALL', 'acute lymphocytic leukemia'], ['AML', 'acute myeloid leukemia'], ['CLL', 'chronic lymphocytic leukemia'], ['CML', 'chronic myeloid leukemia']]),
          T('ALL شایع‌ترین سرطان کودکان است.', true, 'لوسمی لنفوسیتی حاد.'),
          M('myelogenous یعنی…', ['ساخته‌شده در مغز استخوان', 'مربوط به ماهیچه', 'مربوط به لنف', 'مربوط به پوست'], 'myel/o = مغز استخوان.'),
          B('لوسمی آهسته‌رشد ___ نامیده می‌شود.', ['chronic', 'acute', 'in situ'], 'مزمن.'),
          M('کتاب می‌گوید بیوپسی برای تشخیص کدام سرطان «استفاده نمی‌شود» و به جایش از مغز استخوان نمونه می‌گیرند؟', ['leukemia', 'breast cancer', 'lung cancer', 'bladder cancer'], 'تشخیص با bone marrow aspiration و CBC.'),
          S('املای انگلیسی «لوسمی» را بنویس', 'leukemia', 'leuk/o + -emia.', 'leuk…'),
          N('ab:nm')
        ]
      },
      {
        id: 'nm8', title: 'لنفوم و میلوم', icon: '🫧', items: [
          L('سرطان دستگاه لنفاوی', `<b>lymphoma</b> از لنفوسیت‌ها (T یا B) آغاز می‌شود. چون بافت لنفی در همه بدن هست، لنفوم تقریباً هرجا می‌تواند شروع شود و به کبد و ریه برسد.${fig('lymphoma-neck', '', 'بزرگی شدید غدد لنفاوی گردن در لنفوم بدخیم (شکل ۲۰-۳ کتاب).')}`),
          M('بزرگی غدد لنفاوی گردن در این تصویر چه نام دارد؟', ['lymphadenopathy', 'lymphedema', 'lymphangioma', 'hematoma'], 'lymph/o + aden/o + -pathy.', null, F('lymphoma-neck')),
          L('دو نوع اصلی', `${vs(['Hodgkin lymphoma', 'سلول‌های بزرگ دوهسته‌ای Reed-Sternberg؛ اغلب جوانان، غدد گردن'], ['non-Hodgkin lymphoma', 'گروه بزرگ لنفوم‌های B یا T بدون Reed-Sternberg'])}<b>multiple myeloma</b> سرطان پلاسماسل‌های مغز استخوان است که استخوان را می‌خورد.${pearl('تعریق شبانه، تب و کاهش وزن سه نشانه «B» در لنفوم‌اند؛ پزشک همیشه درباره‌شان می‌پرسد.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['Hodgkin lymphoma', 'با سلول Reed-Sternberg'], ['non-Hodgkin lymphoma', 'بدون Reed-Sternberg'], ['multiple myeloma', 'سرطان پلاسماسل مغز استخوان'], ['lymphoma', 'سرطان لنفوسیت‌ها']]),
          T('کتاب می‌گوید همه تومورهای بافت لنفی بدخیم‌اند.', true, 'lymphoid tumors are malignant.'),
          M('سلول Reed-Sternberg نشانه کدام بیماری است؟', ['Hodgkin lymphoma', 'non-Hodgkin lymphoma', 'ALL', 'melanoma'], 'سلول بزرگ دوهسته‌ای.'),
          B('myeloma از ریشه ___ (مغز استخوان) ساخته شده است.', ['myel/o', 'my/o', 'lymph/o'], 'نه my/o (ماهیچه)!'),
          M('اختصار NHL یعنی…', ['non-Hodgkin lymphoma', 'neck Hodgkin lymphoma', 'new hematologic leukemia', 'normal Hodgkin level'], 'لنفوم غیرهوچکین.'),
          S('املای انگلیسی «لنفوم» را بنویس', 'lymphoma', 'lymph/o + -oma.', 'lymph…'),
          N('f2t:nm')
        ]
      },
      {
        id: 'nm9', title: 'تومورهای جنینی و نام‌های ویژه', icon: '👶', items: [
          L('ریشه اندام + ‎-blastoma', `کتاب می‌گوید تومورهای جنینی از گروه‌های باقی‌مانده سلول‌های جنینی در مغز، شبکیه، غده فوق کلیه، کلیه، کبد یا دستگاه تناسلی پدید می‌آیند و با ${e('-blastoma')} نام می‌گیرند:${fig('blastoma-map')}`),
          M('retinoblastoma سرطان کدام اندام است؟', ['شبکیه چشم', 'کلیه', 'کبد', 'مخچه'], 'retin/o + -blastoma.'),
          L('استثنا و مغز', `• <b>Wilms tumor</b>: تومور جنینی کلیه؛ استثنای قاعده، چون nephroblastoma به کار نمی‌رود<br>• <b>glioma</b>: تومور سلول‌های نگهدارنده مغز (gli/o = چسب)<br>• <b>astrocytoma</b>: گلیومی از سلول‌های ستاره‌ای (astr/o + cyt/o + ‎-oma)<br>• <b>glioblastoma</b>: تهاجمی‌ترین سرطان مغز بزرگسالان${memo('astrocytoma = «سلول ستاره‌ای»؛ astro مثل «آسترونات» یعنی ستاره.')}`),
          P('هر تومور جنینی را به اندامش وصل کن', [['retinoblastoma', 'شبکیه'], ['hepatoblastoma', 'کبد'], ['medulloblastoma', 'مخچه'], ['Wilms tumor', 'کلیه']]),
          T('Wilms tumor را nephroblastoma هم می‌نامند و این نام رایج است.', false, 'نادرست؛ کتاب می‌گوید nephroblastoma به کار نمی‌رود؛ استثناست.'),
          L('تراتوم: تومور شگفت‌انگیز', `<b>teratoma</b> (terat/o = هیولا) از سلول‌هایی است که می‌توانند بافت‌های گوناگون بسازند: مو، دندان، استخوان، ماهیچه. ممکن است خوش‌خیم یا بدخیم باشد و در تخمدان، بیضه، قفسه سینه و شکم دیده می‌شود. <b>seminoma</b> سرطان سلول زاینده بیضه است.`),
          M('توموری که درونش مو و دندان دیده می‌شود چه نام دارد؟', ['teratoma', 'seminoma', 'lipoma', 'cyst'], 'terat/o = هیولا.'),
          B('گلیومی از سلول‌های ستاره‌ای مغز ___ نام دارد.', ['astrocytoma', 'glioblastoma', 'medulloblastoma'], 'astr/o + cyt/o + -oma.'),
          L('مرور سطح «خون، لنف و نام‌های ویژه»', recap(['leukemia = leuk/o + ‎-emia؛ ALL (کودکان)، AML، CLL، CML؛ myelogenous = از مغز استخوان', 'lymphoma: Hodgkin (Reed-Sternberg) و non-Hodgkin؛ multiple myeloma در پلاسماسل‌ها', 'blastoma: retino-، neuro-، medullo-، hepatoblastoma؛ Wilms tumor استثنای کلیه', 'مغز: glioma، astrocytoma، glioblastoma • teratoma (مو و دندان) • seminoma (بیضه)'])),
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
    id: 'sx', sym: 'Sx', name: 'نشانه‌ها و غربالگری', short: 'نشانه‌ها', sub: 'هفت نشانه هشدار، نشانه‌ها در اندام‌ها، ضایعه‌های پیش‌سرطانی، خال‌ها و پستان، غربالگری و نشانگرهای تومور',
    color: '#E64980', dark: '#A6295A', light: '#FDE5EE',
    levels: ['نشانه‌های هشدار', 'پیش‌سرطان، خال و پستان', 'غربالگری'],
    gens: EA.genIds('sx'),
    lessons: [
      /* ================= سطح ۱: نشانه‌های هشدار ================= */
      {
        id: 'sx1', title: 'هفت نشانه هشدار', icon: '🚨', items: [
          L('CAUTION', `هفت نشانه هشدار سرطان را با واژه انگلیسی <b>CAUTION</b> (احتیاط) به خاطر بسپار:${fig('warning-signs')}`),
          M('در CAUTION، حرف O یعنی…', ['تغییر آشکار در زگیل یا خال', 'سرفه سمج', 'خون‌ریزی غیرعادی', 'زخمی که خوب نمی‌شود'], 'Obvious change in a wart or mole.'),
          L('نشانه، نه تشخیص', `این نشانه‌ها سرطان را <b>ثابت نمی‌کنند</b>؛ بسیاری از آن‌ها علت‌های ساده دارند. ولی اگر ادامه پیدا کنند، باید به پزشک مراجعه کرد.${pearl('کتاب می‌گوید شرح حال و معاینه کامل، از جمله سابقه خانوادگی، سیگار، الکل و تماس شغلی با مواد شیمیایی یا پرتو، پایه کشف زودهنگام سرطان است.')}`),
          P('هر حرف CAUTION را به نشانه‌اش وصل کن', [['C', 'تغییر اجابت مزاج یا ادرار'], ['A', 'زخمی که خوب نمی‌شود'], ['T', 'سفتی یا توده'], ['N', 'سرفه سمج یا گرفتگی صدا']]),
          T('هر کس یکی از نشانه‌های CAUTION را داشته باشد، قطعاً سرطان دارد.', false, 'نادرست؛ فقط هشداری برای بررسی است.'),
          M('گرفتگی صدای بیش از یک هفته، هشدار کدام سرطان است؟', ['حنجره و گلو', 'روده', 'پوست', 'کلیه'], 'کتاب: oropharynx، hoarseness for more than one week.'),
          B('در CAUTION، حرف U یعنی خون‌ریزی یا ترشح ___.', ['غیرعادی', 'طبیعی', 'شبانه'], 'Unusual bleeding or discharge.'),
          M('حرف I در CAUTION به کدام نشانه اشاره دارد؟', ['سوءهاضمه یا اشکال در بلع', 'عفونت', 'خارش', 'سردرد'], 'Indigestion or difficulty swallowing.'),
          S('املای انگلیسی «احتیاط» (نام این هفت نشانه) را بنویس', 'CAUTION', 'C-A-U-T-I-O-N.', 'CAU…'),
          N('t2f:sx')
        ]
      },
      {
        id: 'sx2', title: 'نشانه‌ها در اندام‌ها', icon: '🧍', items: [
          L('هر اندام زبان خودش را دارد', `${fig('symptom-map')}کتاب نشانه‌های هر دستگاه را فهرست کرده است؛ بیشترشان را با ریشه و پسوند می‌توانی بخوانی.`),
          L('واژه‌ها را بشکن', `${tbl([['واژه', 'ساختار', 'معنی و سرطان'], [e('hematuria'), 'hemat/o + ‎-uria', 'خون در ادرار: مثانه، کلیه، پروستات'], [e('hemoptysis'), 'hem/o + ‎-ptysis', 'خلط خونی: ریه'], [e('dysphagia'), 'dys- + ‎-phagia', 'اشکال در بلع: مری، گلو'], [e('dysuria'), 'dys- + ‎-uria', 'سوزش ادرار: مجاری ادرار، پروستات'], [e('dyspnea'), 'dys- + ‎-pnea', 'تنگی نفس: ریه'], [e('dyspareunia'), 'dys- + pareunia', 'مقاربت دردناک: دهانه رحم، رحم'], [e('hematochezia'), 'hemat/o + chezia', 'خون روشن از مقعد: روده بزرگ'], [e('seizure'), '—', 'تشنج: مغز']])}${memo('dys- یعنی دشوار: dysphagia «بلعِ دشوار»، dyspnea «نفسِ دشوار»، dysuria «ادرارِ دشوار».')}`),
          M(`${e('<b>hemoptysis</b>')} نشانه کدام سرطان است؟`, ['ریه', 'مثانه', 'پوست', 'مغز'], 'hem/o (خون) + -ptysis (تف کردن).'),
          P('هر نشانه را به اندامش وصل کن', [['hematuria', 'مثانه'], ['dysphagia', 'مری'], ['seizure', 'مغز'], ['hoarseness', 'حنجره']]),
          T('hematochezia یعنی خون روشن از مقعد؛ هشدار سرطان روده.', true, 'کتاب: change in bowel habits, bleeding.'),
          M('کتاب برای سرطان مغز کدام نشانه‌ها را آورده است؟', ['تشنج و اختلال تعادل، دید، شنوایی یا گفتار', 'خلط خونی', 'خون در ادرار', 'ترشح نوک پستان'], 'Brain: seizures, loss of balance…'),
          B('اشکال در بلع ___ نام دارد.', ['dysphagia', 'dyspnea', 'dysuria'], 'dys- + -phagia.'),
          W('واژه‌ای بساز به معنی «خون در ادرار»', ['hemat/o', '-uria'], ['-ptysis', 'dys-', '-emia'], 'hemat/o + -uria = hematuria.'),
          S('املای انگلیسی «تنگی نفس» را بنویس', 'dyspnea', 'dys- + -pnea.', 'dysp…'),
          N('d2t:sx')
        ]
      },
      {
        id: 'sx3', title: 'نشانه‌های عمومی', icon: '🌡️', items: [
          L('وقتی همه بدن درگیر است', `${tbl([['واژه', 'معنی'], [e('anemia'), 'کم‌خونی؛ نشانه خون‌ریزی از سرطان گوارش یا رحم'], [e('anorexia'), 'بی‌اشتهایی؛ نشانه سرطان یا عارضه درمان'], [e('cachexia'), 'لاغری و تحلیل شدید ماهیچه در سرطان پیشرفته'], [e('fatigue'), 'خستگی که با استراحت خوب نمی‌شود'], [e('night sweats'), 'تعریق شبانه؛ لوسمی و لنفوم'], [e('lymphadenopathy'), 'بزرگی غدد لنفاوی؛ لنفوم یا متاستاز']])}`),
          M('lymphadenopathy یعنی…', ['بیماری یا بزرگی غدد لنفاوی', 'ورم بازو', 'التهاب رگ لنفی', 'سرطان پوست'], 'lymph/o + aden/o + -pathy.'),
          L('نشانه‌های خون و عصب', `• <b>thrombocytopenia</b>: کمبود پلاکت؛ کبودی و خون‌ریزی آسان<br>• <b>peripheral neuropathy</b>: درد، بی‌حسی و گزگز دست و پا؛ نشانه سرطان یا عارضه شیمی‌درمانی<br>• <b>paraneoplastic syndrome</b>: نشانه‌هایی که ماده‌ای از تومور در جای دور ایجاد می‌کند (para- کنار + neoplastic)${pearl('anorexia در این‌جا یعنی بی‌اشتهایی؛ با anorexia nervosa (بیماری روانی) فرق دارد.')}`),
          P('هر نشانه را به معنی‌اش وصل کن', [['cachexia', 'لاغری و تحلیل شدید'], ['night sweats', 'تعریق شبانه'], ['thrombocytopenia', 'کمبود پلاکت'], ['anorexia', 'بی‌اشتهایی']]),
          T('night sweats می‌تواند نشانه لنفوم یا لوسمی باشد.', true, 'جدول ۲۰-۵.'),
          M('کبودی آسان و خون‌ریزی طولانی از زخم نشانه کدام است؟', ['thrombocytopenia', 'cachexia', 'anorexia', 'dysuria'], 'کمبود پلاکت.'),
          B('در cachexia بیمار دچار ___ شدید است.', ['لاغری', 'چاقی', 'تب'], 'تحلیل ماهیچه و چربی.'),
          L('مرور سطح «نشانه‌های هشدار»', recap(['CAUTION: هفت نشانه هشدار؛ نشانه، نه تشخیص', 'hematuria (مثانه)، hemoptysis (ریه)، dysphagia (مری)، dysuria، dyspnea، dyspareunia، hoarseness، seizure', 'عمومی: anemia، anorexia، cachexia، fatigue، night sweats، lymphadenopathy', 'thrombocytopenia کمبود پلاکت؛ peripheral neuropathy؛ paraneoplastic syndrome'])),
          N('t2f:sx')
        ]
      },

      /* ================= سطح ۲: پیش‌سرطان، خال و پستان ================= */
      {
        id: 'sx4', title: 'ضایعه‌های پیش‌سرطانی', icon: '⏳', items: [
          L('پیش از سرطان', `کتاب ضایعه‌هایی را که احتمال زیادی برای تبدیل به سرطان دارند <b>precancerous</b> می‌نامد:${fig('precancer')}`),
          M('actinic keratosis می‌تواند به کدام سرطان تبدیل شود؟', ['squamous cell carcinoma', 'leukemia', 'osteosarcoma', 'lymphoma'], 'actin/o = پرتو آفتاب.'),
          L('واژه‌ها را بشکن', `• ${e('actinic keratosis')}: actin/o (پرتو آفتاب) + kerat/o (بافت شاخی)؛ لکه زبر و پوسته‌دار روی پوست آفتاب‌خورده<br>• ${wb('leuk/o', '-plakia')} = <b>leukoplakia</b>: «لکه سفید» در دهان، اغلب از دخانیات<br>• <b>lentigo maligna</b>: لاتین یعنی «کک‌مک بدخیم»؛ melanoma درجا<br>• <b>familial polyposis</b>: صدها پولیپ ارثی در روده بزرگ${memo('leuko = سفید (مثل لوسمی) و plakia = لکه؛ پس leukoplakia یعنی «لکه سفید».')}`),
          P('هر ضایعه را به معنی‌اش وصل کن', [['leukoplakia', 'لکه سفید دهان'], ['actinic keratosis', 'لکه پوسته‌دار آفتابی'], ['lentigo maligna', 'کک‌مک بدخیم'], ['familial polyposis', 'پولیپ‌های ارثی روده']]),
          T('برداشتن پولیپ روده یک روش پیشگیری از سرطان روده است.', true, 'پولیپ می‌تواند به adenocarcinoma تبدیل شود.'),
          M('leukoplakia بیشتر با چه عاملی پدید می‌آید؟', ['دخانیات (سیگار یا تنباکوی جویدنی)', 'آفتاب', 'آزبست', 'ارث'], 'کتاب: tobacco tars.'),
          B('مری بارت (Barrett esophagus) نوعی ___ است.', ['metaplasia', 'carcinoma', 'hematoma'], 'تبدیل پوشش مری در ریفلاکس.'),
          W('واژه‌ای بساز به معنی «لکه سفید»', ['leuk/o', '-plakia'], ['-emia', 'melan/o', '-oma'], 'leuk/o + -plakia = leukoplakia.'),
          S('املای انگلیسی «پیش‌سرطانی» را بنویس', 'precancerous', 'pre- + cancerous.', 'pre…'),
          N('f2t:sx')
        ]
      },
      {
        id: 'sx5', title: 'خال‌ها و ABCDE', icon: '🔍', items: [
          L('خال خوش‌خیم یا ملانوم؟', `<b>nevus</b> (خال؛ جمع: nevi) تومور خوش‌خیم سلول‌های رنگدانه‌ساز است. <b>melanoma</b> سرطان بدخیم همین سلول‌هاست. برای تشخیص خال مشکوک از قاعده ABCDE استفاده کن:${fig('abcde-mole')}`),
          M('در قاعده ABCDE، حرف D یعنی…', ['قطر بیشتر از ۶ میلی‌متر', 'رنگ تیره', 'لبه ناصاف', 'تغییر در زمان'], 'Diameter.'),
          L('خال دیسپلاستیک', `<b>dysplastic nevus</b> خالی نامنظم با رنگ و لبه ناهموار است که احتمال تبدیل به melanoma را بیشتر می‌کند.${vs(['nevus', 'گرد، یکدست، لبه صاف، کوچک، ثابت'], ['melanoma', 'نامتقارن، چندرنگ، لبه ناصاف، بزرگ، در حال تغییر'])}${pearl('مهم‌ترین حرف E است: هر خالی که تغییر کند، حتی اگر کوچک باشد، باید معاینه شود.')}`),
          P('هر حرف را به معنی‌اش وصل کن', [['A', 'Asymmetry'], ['B', 'Border'], ['C', 'Color'], ['E', 'Evolving']]),
          T('nevus سرطان بدخیم پوست است.', false, 'نادرست؛ nevus خال خوش‌خیم است.'),
          M('کدام خال مشکوک‌تر است؟', ['نامتقارن، چندرنگ و در حال بزرگ شدن', 'گرد و یکدست قهوه‌ای', 'کوچک و ثابت از کودکی', 'صاف با لبه منظم'], 'ABCDE.'),
          B('melanoma سرطان سلول‌های ___ پوست است.', ['رنگدانه‌ساز', 'چربی', 'لایه پایه'], 'melan/o = سیاه.'),
          S('املای انگلیسی «خال» را بنویس', 'nevus', 'جمع: nevi.', 'nev…'),
          N('d2t:sx')
        ]
      },
      {
        id: 'sx6', title: 'نشانه‌های پستان', icon: '🎗️', items: [
          L('آنچه زن باید بشناسد', `کتاب برای سرطان پستان این نشانه‌ها را آورده است: <b>lump</b> یا توده، و <b>nipple discharge</b> (ترشح نوک پستان)، به‌ویژه ترشح خونی از یک پستان. در سرطان پیشرفته پوست هم تغییر می‌کند و ضخیم و چال‌دار می‌شود: <b>peau d’orange</b> (فرانسوی: پوست پرتقال).${fig('peau-orange', '', 'پوست پرتقالی و فرورفتگی پوست (پیکان) در سرطان پیشرفته پستان؛ شکل ۲۰-۸ کتاب.')}`),
          M('peau d’orange یعنی…', ['پوست ضخیم و چال‌دار شبیه پوست پرتقال', 'خال قهوه‌ای', 'زخم پوست', 'کبودی'], 'فرانسوی: پوست پرتقال.'),
          L('چرا پوست پرتقالی می‌شود؟', `سلول‌های سرطانی رگ‌های لنفی پوست را می‌بندند؛ مایع در پوست جمع می‌شود و جای منافذ مو به شکل چال‌های ریز دیده می‌شود. توموری که زیر نوک پستان است آن را به درون می‌کشد: <b>nipple retraction</b>.${pearl('خودآزمایی پستان (BSE) ماهانه و پس از قاعدگی انجام می‌شود؛ هر توده یا تغییر تازه را باید به پزشک نشان داد.')}`),
          P('هر نشانه را به معنی‌اش وصل کن', [['nipple discharge', 'ترشح نوک پستان'], ['nipple retraction', 'فرورفتگی نوک پستان'], ['peau d\'orange', 'پوست پرتقالی'], ['lump', 'توده']]),
          T('پوست پرتقالی از بسته شدن رگ‌های لنفی پوست است.', true, 'تجمع مایع در پوست.'),
          M('BSE یعنی…', ['خودآزمایی پستان', 'بیوپسی پستان', 'سونوگرافی پستان', 'جراحی پستان'], 'breast self-examination.'),
          B('ترشح خونی از ___ پستان مشکوک‌تر است.', ['یک', 'هر دو', 'هیچ'], 'یک‌طرفه و خونی.'),
          L('مرور سطح «پیش‌سرطان، خال و پستان»', recap(['precancerous: actinic keratosis، leukoplakia، lentigo maligna، polyp، familial polyposis، Barrett esophagus', 'nevus خوش‌خیم و melanoma بدخیم؛ ABCDE؛ dysplastic nevus', 'پستان: lump، nipple discharge، nipple retraction، peau d’orange', 'BSE خودآزمایی ماهانه پستان'])),
          N('t2f:sx')
        ]
      },

      /* ================= سطح ۳: غربالگری ================= */
      {
        id: 'sx7', title: 'غربالگری', icon: '🧪', items: [
          L('آزمون برای افراد سالم', `<b>screening</b> (غربالگری) یعنی آزمایش افراد سالم و بی‌نشانه برای یافتن سرطان یا پیش‌سرطان پیش از بروز نشانه.${fig('screening-tests')}`),
          M('کدام جمله درباره screening درست است؟', ['برای افراد سالم و بی‌نشانه است', 'فقط برای بیماران با نشانه است', 'همان درمان سرطان است', 'فقط با بیوپسی انجام می‌شود'], 'هدف: کشف زودهنگام.'),
          L('ماموگرافی', `${wb('mamm/o', '-graphy')} = <b>mammography</b>: عکس‌برداری کم‌دوز پستان با اشعه ایکس. عکس به‌دست‌آمده <b>mammogram</b> است.${fig('mammogram', '', 'ماموگرام طبیعی (شکل ۲۰-۵ کتاب).')}`),
          P('هر آزمون را به اندامش وصل کن', [['mammography', 'پستان'], ['Pap smear', 'دهانه رحم'], ['PSA', 'پروستات'], ['FOBT', 'روده بزرگ']]),
          L('آزمون‌های دیگر', `• <b>Pap smear</b>: برداشتن سلول از دهانه رحم با برس برای یافتن dysplasia<br>• <b>fecal occult blood test</b> (FOBT): fecal یعنی مدفوع و occult یعنی پنهان؛ نوع گایاک آن gFOBT است<br>• <b>digital rectal examination</b> (DRE): لمس پروستات و راست‌روده با انگشت دستکش‌دار<br>• <b>PSA</b>: آزمایش خون پروستات${memo('occult یعنی «پنهان»: خونی که با چشم دیده نمی‌شود.')}`),
          T('در FOBT خون پنهان در مدفوع جست‌وجو می‌شود.', true, 'fecal occult blood.'),
          M('تفاوت mammography و mammogram چیست؟', ['mammography فرایند است و mammogram خود عکس', 'هیچ تفاوتی ندارند', 'mammogram جراحی است', 'mammography آزمایش خون است'], '‎-graphy فرایند، ‎-gram تصویر.'),
          B('اختصار ___ یعنی معاینه انگشتی مقعد.', ['DRE', 'BSE', 'FOBT'], 'digital rectal examination.'),
          S('املای انگلیسی «ماموگرافی» را بنویس', 'mammography', 'mamm/o + -graphy.', 'mammo…'),
          N('ab:sx')
        ]
      },
      {
        id: 'sx8', title: 'نشانگرها و ژن‌ها', icon: '🧬', items: [
          L('نشانگر تومور', `<b>tumor marker</b> ماده‌ای است که تومور در خون یا بافت می‌سازد. بیشتر برای پیگیری درمان به کار می‌رود تا تشخیص قطعی.${tbl([['نشانگر', 'سرطان'], [e('PSA'), 'prostate-specific antigen: پروستات'], [e('CEA'), 'carcinoembryonic antigen: روده بزرگ'], [e('AFP'), 'alpha-fetoprotein: کبد، بیضه'], [e('CA-125'), 'تخمدان']])}`),
          M('بالا رفتن PSA ممکن است نشانه کدام سرطان باشد؟', ['پروستات', 'پستان', 'ریه', 'پوست'], 'prostate-specific antigen.'),
          L('آزمایش ژن', `<b>genetic testing</b> برای یافتن جهش‌های ارثی پرخطر است؛ مانند <b>BRCA1/BRCA2</b> برای سرطان پستان و تخمدان، یا FAP برای سرطان روده.${pearl('نشانگر تومور بالا یعنی «بیشتر بررسی کن»، نه «سرطان قطعی»؛ PSA در بزرگی خوش‌خیم پروستات و التهاب هم بالا می‌رود.')}`),
          P('هر نشانگر را به سرطانش وصل کن', [['CEA', 'روده بزرگ'], ['AFP', 'کبد و بیضه'], ['CA-125', 'تخمدان'], ['PSA', 'پروستات']]),
          T('نشانگر تومور بالا به‌تنهایی برای تشخیص قطعی سرطان کافی است.', false, 'نادرست؛ تشخیص قطعی با بیوپسی است.'),
          M('BRCA1/BRCA2 در کدام آزمون بررسی می‌شود؟', ['genetic testing', 'Pap smear', 'mammography', 'FOBT'], 'جهش‌های ارثی.'),
          B('نشانگر تومور ___ برای پیگیری سرطان روده به کار می‌رود.', ['CEA', 'AFP', 'PSA'], 'carcinoembryonic antigen.'),
          M('PSA بالا در کدام حالت خوش‌خیم هم دیده می‌شود؟', ['بزرگی خوش‌خیم یا التهاب پروستات', 'سرماخوردگی', 'شکستگی استخوان', 'کم‌خونی'], 'نشانگر اختصاصی سرطان نیست.'),
          S('املای انگلیسی «غربالگری» را بنویس', 'screening', 'screen + -ing.', 'scree…'),
          N('t2f:sx')
        ]
      },
      {
        id: 'sx9', title: 'غربالگری در عمل', icon: '🩺', items: [
          L('یک روز در کلینیک', `مردی ۵۵ ساله بدون شکایت برای چکاپ آمده است. پزشک <b>PSA</b> می‌خواهد و چون <b>FOBT</b> او مثبت شده، <b>colonoscopy</b> برنامه‌ریزی می‌کند. در کولونوسکوپی یک <b>polyp</b> پیدا و برداشته می‌شود.${fig('screening-tests')}`),
          M('چرا پس از FOBT مثبت کولونوسکوپی انجام می‌شود؟', ['برای دیدن کل روده و یافتن منشأ خون یا پولیپ', 'چون FOBT سرطان را قطعی کرده است', 'برای درمان پروستات', 'برای سنجش PSA'], 'گام بعدی تشخیص.'),
          L('غربالگری کجا کمک نمی‌کند؟', `غربالگری فقط زمانی ارزش دارد که سرطان یک <b>مرحله پیش‌بالینی</b> قابل کشف داشته باشد و آزمون مناسبی برایش وجود داشته باشد (کتاب). برای همین برای همه سرطان‌ها آزمون غربالگری نداریم.${pearl('بیمار ۶۰ ساله سیگاری را با low-dose CT ریه غربال می‌کنند؛ عکس ساده قفسه سینه کافی نیست.')}`),
          P('هر یافته را به گام بعدی وصل کن', [['FOBT مثبت', 'colonoscopy'], ['Pap smear با dysplasia', 'بیوپسی دهانه رحم'], ['توده در mammogram', 'biopsy پستان'], ['PSA بالا', 'بررسی بیشتر پروستات']]),
          T('غربالگری برای همه سرطان‌ها وجود دارد.', false, 'نادرست؛ فقط برای سرطان‌هایی با مرحله پیش‌بالینی و آزمون مناسب.'),
          M('برداشتن پولیپ در کولونوسکوپی چه نوع اقدامی است؟', ['پیشگیرانه (prophylactic)', 'تسکینی', 'پرتودرمانی', 'هورمون‌درمانی'], 'پیش از تبدیل به سرطان.'),
          O('گام‌های غربالگری سرطان روده را بچین', ['FOBT', 'نتیجه مثبت', 'colonoscopy', 'برداشتن polyp و بیوپسی'], 'از غربال تا تشخیص.'),
          B('عکس اشعه ایکس پستان ___ نام دارد.', ['mammogram', 'sonogram', 'myelogram'], 'mamm/o + -gram.'),
          L('مرور سطح «غربالگری»', recap(['screening: آزمایش افراد سالم و بی‌نشانه برای کشف زودهنگام', 'mammography و mammogram • Pap smear • FOBT و gFOBT • DRE • PSA • low-dose CT ریه', 'tumor markers: PSA، CEA، AFP، CA-125؛ برای پیگیری، نه تشخیص قطعی', 'genetic testing: BRCA1/BRCA2، FAP؛ گام بعد از غربال مثبت: بررسی تشخیصی و biopsy'])),
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
    id: 'dx', sym: 'Dx', name: 'تشخیص و مرحله‌بندی', short: 'تشخیص', sub: 'بیوپسی‌ها و غده نگهبان، آندوسکوپی، تصویربرداری، گیرنده‌ها، درجه و مرحله‌بندی TNM',
    color: '#1C7ED6', dark: '#145A9A', light: '#E1EFFC',
    levels: ['نمونه‌برداری', 'دیدن درون بدن', 'درجه و مرحله'],
    gens: EA.genIds('dx'),
    lessons: [
      /* ================= سطح ۱: نمونه‌برداری ================= */
      {
        id: 'dx1', title: 'بیوپسی', icon: '🧫', items: [
          L('تشخیص قطعی با بافت', `${wb('bi/o', '-opsy')} = <b>biopsy</b>: برداشتن سلول یا بافت برای دیدن زیر میکروسکوپ. عکس و آزمایش خون شک ایجاد می‌کنند؛ تشخیص قطعی سرطان با biopsy است.${fig('biopsy-types')}`),
          M('در excisional biopsy چه برداشته می‌شود؟', ['کل توده', 'فقط تکه‌ای از توده', 'چند سلول با سوزن ظریف', 'خون'], 'excision = برداشتن کامل.'),
          L('چهار روش', `${tbl([['روش', 'چه برداشته می‌شود؟'], [e('excisional biopsy'), 'کل توده یا ناحیه مشکوک'], [e('incisional biopsy'), 'فقط بخشی از توده'], [e('core needle biopsy'), 'استوانه‌ای از بافت با سوزن ضخیم'], [e('fine-needle aspiration'), 'چند سلول یا مایع با سوزن ظریف؛ FNA']])}${memo('ex = بیرون (کل توده بیرون می‌آید) • in = درون (فقط برشی درون آن).')}`),
          P('هر بیوپسی را به ویژگی‌اش وصل کن', [['excisional', 'کل توده'], ['incisional', 'بخشی از توده'], ['core needle', 'استوانه بافت'], ['FNA', 'سوزن ظریف']]),
          T('FNA اغلب زیر راهنمایی CT یا سونوگرافی انجام می‌شود.', true, 'کتاب: برای ریه، همراه CT یا سونوگرافی.'),
          M('FNA مخفف چیست؟', ['fine-needle aspiration', 'full node analysis', 'fluid needle anesthesia', 'final nodal assessment'], 'آسپیراسیون با سوزن ظریف.'),
          B('بافت بیوپسی را ___ زیر میکروسکوپ می‌بیند.', ['pathologist', 'radiologist', 'surgeon'], 'path/o + -logist.'),
          W('واژه‌ای بساز به معنی «دیدن بافت زنده»', ['bi/o', '-opsy'], ['-scopy', 'cyt/o', '-gram'], 'bi/o + -opsy = biopsy.'),
          S('املای انگلیسی «برداشتی» (excisional) را بنویس', 'excisional', 'ex- + cision.', 'excis…'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx2', title: 'نمونه‌های ویژه', icon: '🔬', items: [
          L('هر سرطان، نمونه خودش', `${tbl([['روش', 'برای'], [e('bone marrow aspiration'), 'لوسمی و لنفوم: سوزن توخالی در استخوان لگن یا جناغ'], [e('endometrial biopsy'), 'سرطان رحم: لوله نازک از دهانه رحم'], [e('sputum cytology'), 'سرطان ریه: سلول‌های خلط'], [e('urine cytology'), 'سرطان مثانه و کلیه: سلول‌های ادرار'], [e('Pap smear'), 'دهانه رحم: سلول‌ها با برس']])}`),
          M('برای تشخیص لوسمی از کجا نمونه می‌گیرند؟', ['مغز استخوان لگن یا جناغ', 'خلط', 'ادرار', 'پوست'], 'bone marrow aspiration.'),
          L('سر میز جراحی', `• <b>frozen section</b>: بافت را سریع منجمد و برش می‌زنند تا پاتولوژیست در همان جراحی جواب بدهد<br>• <b>surgical margin</b>: حاشیه بافت سالم دور تومور برداشته‌شده؛ «margins clear» یعنی لبه‌ها سرطان ندارند${pearl('اگر margin درگیر باشد، یعنی ممکن است سلول سرطانی در بدن مانده باشد و جراحی دوباره یا پرتودرمانی لازم شود.')}`),
          P('هر روش را به سرطانش وصل کن', [['sputum cytology', 'ریه'], ['urine cytology', 'مثانه'], ['endometrial biopsy', 'رحم'], ['bone marrow aspiration', 'لوسمی']]),
          T('«margins clear» یعنی در لبه بافت برداشته‌شده سرطان دیده نشده است.', true, 'حاشیه سالم.'),
          M('cytology با histology چه فرقی دارد؟', ['cytology سلول‌های جدا را می‌بیند و histology بافت را', 'هیچ فرقی ندارند', 'cytology عکس‌برداری است', 'histology آزمایش خون است'], 'cyt/o سلول، hist/o بافت.'),
          B('جواب سریع پاتولوژی در حین جراحی با ___ section داده می‌شود.', ['frozen', 'fine', 'core'], 'برش منجمد.'),
          M('کتاب می‌گوید bone marrow aspiration ابزار تشخیص کدام است؟', ['لوسمی و لنفوم', 'فقط لوسمی', 'فقط لنفوم', 'هیچ‌کدام'], 'جدول ۲۰-۵: leukemia and lymphoma.'),
          S('املای انگلیسی «سیتولوژی» را بنویس', 'cytology', 'cyt/o + -logy.', 'cyto…'),
          N('f2t:dx')
        ]
      },
      {
        id: 'dx3', title: 'غده نگهبان', icon: '💂', items: [
          L('اولین ایستگاه سرطان', `سرطان‌هایی مثل پستان و ملانوم اول به یک یا چند غده لنفاوی خاص می‌رسند: <b>sentinel lymph node</b> (غده نگهبان). در SLNB رنگ یا ماده رادیواکتیو کنار تومور تزریق می‌شود و همان غده‌ای که اول رنگ می‌گیرد برداشته و بررسی می‌شود.${fig('sentinel-node')}`),
          M('sentinel lymph node چیست؟', ['اولین غده لنفاوی که سرطان احتمالاً به آن می‌رسد', 'بزرگ‌ترین غده بدن', 'غده‌ای در مغز', 'تومور اولیه'], 'غده نگهبان.'),
          L('اگر نگهبان درگیر باشد', `${vs(['SLNB منفی', 'بقیه غده‌ها احتمالاً سالم‌اند؛ برداشتن همه لازم نیست'], ['SLNB مثبت', 'lymph node dissection: برداشتن غدد ناحیه'])}• <b>lymphangiography</b> یا lymph node mapping: دیدن رگ‌ها و غده‌های لنفی با تزریق رنگ آبی${pearl('SLNB جای برداشتن همه غدد زیر بغل را گرفته و خطر lymphedema بازو را بسیار کم کرده است.')}`),
          T('اگر غده نگهبان سالم باشد، احتمالاً بقیه غده‌ها هم سالم‌اند.', true, 'منطق SLNB.'),
          P('هر واژه را به معنی‌اش وصل کن', [['SLNB', 'بیوپسی غده نگهبان'], ['lymph node dissection', 'برداشتن غدد ناحیه'], ['lymphangiography', 'تصویر رگ و غده لنفی'], ['sentinel', 'نگهبان']]),
          O('گام‌های SLNB را بچین', ['تزریق رنگ یا ماده رادیواکتیو کنار تومور', 'جریان رنگ در رگ لنفی', 'یافتن غده‌ای که اول رنگ گرفته', 'برداشتن و بررسی آن غده'], 'کتاب: dye flows into the sentinel node.'),
          B('SLNB در سرطان ___ و ملانوم کاربرد زیادی دارد.', ['پستان', 'خون', 'مغز'], 'گسترش لنفاوی.'),
          L('مرور سطح «نمونه‌برداری»', recap(['biopsy = bi/o + ‎-opsy؛ تشخیص قطعی سرطان', 'excisional کل توده • incisional بخشی • core needle استوانه • FNA سوزن ظریف', 'bone marrow aspiration، endometrial biopsy، sputum cytology، urine cytology، Pap smear؛ frozen section و surgical margin', 'SLNB غده نگهبان؛ مثبت → lymph node dissection؛ lymphangiography'])),
          N('m2r:dx')
        ]
      },

      /* ================= سطح ۲: دیدن درون بدن ================= */
      {
        id: 'dx4', title: 'آندوسکوپی‌ها', icon: '🔦', items: [
          L('ریشه + ‎-scopy', `در آندوسکوپی لوله نازک و نورانی (scope) وارد بدن می‌شود تا درون اندام دیده شود و اغلب همان‌جا biopsy گرفته می‌شود.${fig('scope-map')}`),
          M('در cystoscopy کدام اندام دیده می‌شود؟', ['مثانه', 'روده بزرگ', 'ریه', 'رحم'], 'cyst/o = مثانه؛ از راه پیشابراه.'),
          L('فهرست کتاب', `${tbl([['روش', 'چه چیزی دیده می‌شود؟'], [e('bronchoscopy'), 'نای، نایژه‌ها و ریه؛ از بینی یا دهان'], [e('colonoscopy'), 'کل روده بزرگ؛ از راه مقعد'], [e('sigmoidoscopy'), 'راست‌روده و کولون سیگموئید'], [e('esophagoscopy'), 'مری'], [e('laryngoscopy'), 'حنجره'], [e('hysteroscopy'), 'درون رحم'], [e('thoracoscopy'), 'حفره قفسه سینه از برشی کوچک میان دنده‌ها']])}`),
          P('هر آندوسکوپی را به اندامش وصل کن', [['bronchoscopy', 'نایژه‌ها'], ['laryngoscopy', 'حنجره'], ['hysteroscopy', 'رحم'], ['esophagoscopy', 'مری']]),
          T('colonoscopy کل روده بزرگ را می‌بیند ولی sigmoidoscopy فقط بخش پایانی آن را.', true, 'sigmoid = بخش S شکل پایانی.'),
          L('اسکوپی یا تومی؟', `${vs(['thoracoscopy', 'برش کوچک و دیدن با لوله'], ['thoracotomy', 'برش بزرگ میان دنده‌ها و باز کردن قفسه سینه'])}${memo('‎-scopy «نگاه کردن» است، ‎-tomy «بریدن».')}`),
          M('باز کردن قفسه سینه با برش بزرگ میان دنده‌ها چه نام دارد؟', ['thoracotomy', 'thoracoscopy', 'bronchoscopy', 'thoracentesis'], 'thorac/o + -tomy.'),
          B('دیدن درون رحم با scope ___ نام دارد.', ['hysteroscopy', 'cystoscopy', 'colonoscopy'], 'hyster/o + -scopy.'),
          W('واژه‌ای بساز به معنی «دیدن درون نایژه‌ها»', ['bronch/o', '-scopy'], ['-tomy', 'thorac/o', '-gram'], 'bronch/o + -scopy = bronchoscopy.'),
          N('wb:dx')
        ]
      },
      {
        id: 'dx5', title: 'تصویربرداری', icon: '🩻', items: [
          L('چهار ابزار اصلی', `برای یافتن تومور، اندازه‌اش و متاستازها از چند روش تصویربرداری استفاده می‌شود؛ هر کدام با یک نیروی فیزیکی کار می‌کند:${fig('imaging-tools')}`),
          M('کدام روش با قند رادیواکتیو سلول‌های پرکار سرطان را نشان می‌دهد؟', ['PET', 'MRI', 'CT', 'ultrasound'], 'positron emission tomography.'),
          L('نام‌ها را بخوان', `${tbl([['روش', 'توضیح'], [e('computed tomography'), 'CT یا CAT (computed axial tomography): برش‌های اشعه ایکس با رایانه'], [e('magnetic resonance imaging'), 'MRI: آهنربا و امواج رادیویی؛ مغز، نخاع، بافت نرم'], [e('positron emission tomography'), 'PET: یافتن متاستاز و مرحله‌بندی'], [e('radionuclide scanning'), 'scintigraphy: ماده رادیواکتیو و اسکنر'], [e('bone scan'), 'یافتن متاستاز استخوان'], [e('transrectal ultrasound'), 'TRUS: پروستات و راست‌روده']])}${memo('tom/o یعنی برش: tomography یعنی «تصویرِ برش‌به‌برش».')}`),
          P('هر روش را به ویژگی‌اش وصل کن', [['CT', 'اشعه ایکس و رایانه'], ['MRI', 'آهنربا'], ['bone scan', 'متاستاز استخوان'], ['transrectal ultrasound', 'پروستات']]),
          T('MRI از اشعه ایکس استفاده می‌کند.', false, 'نادرست؛ MRI آهنربا و امواج رادیویی است. CT اشعه ایکس دارد.'),
          M('CAT در CAT scan مخفف چیست؟', ['computed axial tomography', 'cancer and tumor', 'contrast and test', 'cell analysis test'], 'جدول ۲۰-۸.'),
          B('اسکن هسته‌ای را scinti___ هم می‌نامند.', ['graphy', 'scopy', 'tomy'], 'scintigraphy.'),
          M('سونوگرافی پروستات از راه مقعد چه نام دارد؟', ['transrectal ultrasound', 'transesophageal echo', 'IVP', 'barium enema'], 'trans- (از راه) + rect/o.'),
          S('املای انگلیسی «سی‌تی» (کامل، دو واژه) را بنویس', 'computed tomography', 'tom/o برش + -graphy.', 'computed…'),
          N('d2t:dx')
        ]
      },
      {
        id: 'dx6', title: 'عکس با ماده حاجب', icon: '🥛', items: [
          L('رنگ برای دیدن', `برخی اندام‌ها در عکس ساده دیده نمی‌شوند؛ با <b>ماده حاجب</b> (مثل باریم یا رنگ تزریقی) دیده می‌شوند:${tbl([['روش', 'توضیح'], [e('barium enema'), 'باریم با تنقیه؛ عکس روده بزرگ برای سرطان روده'], [e('upper GI series'), 'barium swallow (بلع باریم)؛ عکس مری و معده'], [e('intravenous pyelogram'), 'IVP: رنگ در سیاهرگ که در ادرار جمع می‌شود؛ کلیه، میزنای، مثانه'], [e('lymphangiography'), 'رنگ آبی در رگ لنفی؛ غدد لنفاوی']])}`),
          M('در barium enema کدام اندام دیده می‌شود؟', ['روده بزرگ', 'معده', 'کلیه', 'ریه'], 'تنقیه = از راه مقعد.'),
          L('واژه‌ها را بشکن', `• ${wb('pyel/o', '-gram')}: pyel/o لگنچه کلیه؛ تصویر کلیه‌ها<br>• intravenous: intra- (درون) + ven/o (سیاهرگ)؛ رنگ از راه سیاهرگ<br>• upper GI: بخش بالایی دستگاه گوارش${pearl('پیش از تزریق رنگ، از بیمار درباره حساسیت به ید و عملکرد کلیه می‌پرسند.')}`),
          P('هر روش را به اندامش وصل کن', [['barium enema', 'روده بزرگ'], ['upper GI series', 'مری و معده'], ['IVP', 'کلیه و مثانه'], ['lymphangiography', 'غدد لنفاوی']]),
          T('upper GI series را barium swallow هم می‌نامند.', true, 'بلع باریم.'),
          M('IVP مخفف چیست؟', ['intravenous pyelogram', 'internal vessel pressure', 'intestinal view procedure', 'iodine vein puncture'], 'جدول ۲۰-۸.'),
          B('در IVP رنگ از راه ___ داده می‌شود.', ['سیاهرگ', 'دهان', 'مقعد'], 'intravenous.'),
          L('مرور سطح «دیدن درون بدن»', recap(['‎-scopy: bronchoscopy، colonoscopy، sigmoidoscopy، cystoscopy، esophagoscopy، laryngoscopy، hysteroscopy، thoracoscopy', 'thoracotomy برش بزرگ قفسه سینه؛ ‎-scopy نگاه و ‎-tomy برش', 'CT (CAT)، MRI، PET، radionuclide scanning (scintigraphy)، bone scan، transrectal ultrasound', 'ماده حاجب: barium enema، upper GI series (barium swallow)، IVP، lymphangiography'])),
          N('t2f:dx')
        ]
      },

      /* ================= سطح ۳: درجه و مرحله ================= */
      {
        id: 'dx7', title: 'درجه و گیرنده‌ها', icon: '📊', items: [
          L('grade در برابر stage', `${vs(['grade', 'سلول‌ها زیر میکروسکوپ چقدر نابه‌هنجارند؟ (تمایز)'], ['stage', 'سرطان در بدن چقدر بزرگ و گسترده است؟'])}${fig('differentiation')}${memo('grade را پاتولوژیست با میکروسکوپ می‌بیند؛ stage را تیم با عکس و جراحی تعیین می‌کند.')}`),
          M('grade تومور چه چیزی را نشان می‌دهد؟', ['میزان نابه‌هنجاری و تمایز سلول‌ها', 'اندازه تومور', 'تعداد غدد درگیر', 'سن بیمار'], 'grade = درجه.'),
          L('گیرنده‌ها در سرطان پستان', `پس از تشخیص سرطان پستان، روی سلول‌ها گیرنده‌ها بررسی می‌شوند:<br>• <b>estrogen receptor</b> (ER) و <b>progesterone receptor</b> (PR): اگر مثبت باشند، تومور با هورمون رشد می‌کند و هورمون‌درمانی مؤثر است<br>• <b>HER2</b>: پروتئین محرک رشد؛ تومور HER2 مثبت تندتر رشد می‌کند ولی به داروی هدفمند پاسخ می‌دهد${pearl('گزارش «ER+/PR+/HER2−» یعنی تومور هورمون‌حساس است و HER2 منفی؛ درمان با antiestrogen.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['ER', 'گیرنده استروژن'], ['PR', 'گیرنده پروژسترون'], ['HER2', 'پروتئین محرک رشد'], ['grade', 'درجه نابه‌هنجاری سلول']]),
          T('تومور ER مثبت با هورمون‌درمانی پاسخ بهتری می‌دهد.', true, 'رشدش به استروژن وابسته است.'),
          M('CBC برای کدام سرطان اهمیت ویژه دارد؟', ['لوسمی', 'سرطان پوست', 'سرطان مثانه', 'ملانوم'], 'complete blood count.'),
          B('تومور grade 3 سلول‌های ___ دارد.', ['کم‌تمایز', 'خوب تمایزیافته', 'طبیعی'], 'poorly differentiated.'),
          M('ER/PR را از کدام نمونه بررسی می‌کنند؟', ['بافت تومور پستان', 'خون', 'ادرار', 'خلط'], 'کتاب: cells are taken from breast tissue.'),
          S('املای انگلیسی «گیرنده» را بنویس', 'receptor', 'لاتین: گیرنده.', 'recep…'),
          N('ab:dx')
        ]
      },
      {
        id: 'dx8', title: 'TNM', icon: '🔤', items: [
          L('سه حرف برای وسعت سرطان', `<b>staging</b> یعنی تعیین اندازه تومور و میزان گسترش آن؛ رایج‌ترین روش <b>TNM staging</b> است:${fig('tnm')}`),
          M('در TNM، حرف M یعنی…', ['متاستاز دوردست', 'اندازه تومور', 'غدد لنفاوی', 'درجه سلول'], 'Metastasis.'),
          L('نمونه بخوان', `${tbl([['کد', 'معنی'], ['Tis', 'تومور درجا (in situ)'], ['T1 تا T4', 'تومور کوچک تا بزرگ و گسترده'], ['N0', 'غده لنفاوی درگیر نیست'], ['N1 تا N3', 'غده‌های بیشتر یا دورتر'], ['M0', 'متاستاز دوردست ندارد'], ['M1', 'متاستاز دوردست دارد']])}${pearl('T2 N0 M0 یعنی تومور متوسط، بدون غده و بدون متاستاز؛ معمولاً قابل درمان قطعی.')}`),
          P('هر کد را به معنی‌اش وصل کن', [['Tis', 'درجا'], ['N0', 'بدون غده درگیر'], ['M1', 'متاستاز دوردست'], ['T4', 'تومور بزرگ و گسترده']]),
          T('M0 یعنی بیمار متاستاز دوردست دارد.', false, 'نادرست؛ M0 یعنی ندارد.'),
          L('سه واژه وسعت', `• <b>localized</b>: محدود به جای آغاز<br>• <b>regional</b>: گسترش به غده‌ها یا بافت‌های نزدیک<br>• <b>distant metastasis</b>: گسترش به اندام‌ها یا غده‌های دور (همان M)`),
          M('سرطانی که فقط به غدد لنفاوی نزدیک رسیده چه نام دارد؟', ['regional', 'localized', 'distant', 'in situ'], 'ناحیه‌ای.'),
          B('در TNM حرف ___ وضعیت غدد لنفاوی است.', ['N', 'T', 'M'], 'Nodes.'),
          S('املای انگلیسی «مرحله‌بندی» را بنویس', 'staging', 'stage + -ing.', 'stag…'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx9', title: 'مرحله ۰ تا ۴', icon: '🪜', items: [
          L('پنج پله', `TNM در نهایت به یک <b>stage</b> (مرحله) خلاصه می‌شود:${fig('stages')}`),
          M('stage IV یعنی…', ['متاستاز دوردست', 'سرطان درجا', 'تومور کوچک موضعی', 'بدون سرطان'], 'بالاترین مرحله.'),
          L('مرحله‌های سرطان پستان در کتاب', `${fig('breast-stages', '', 'مرحله‌های سرطان پستان (شکل ۲۰-۴ کتاب).')}${tbl([['مرحله', 'توضیح کتاب'], ['Stage I', 'سرطان موضعی (in situ)'], ['Stage II', 'تهاجم به بافت نزدیک پستان'], ['Stage III', 'تهاجم به غدد لنفاوی'], ['Stage IV', 'متاستاز به کبد']])}`),
          O('مرحله‌های سرطان پستان را به ترتیب بچین', ['موضعی', 'تهاجم به بافت پستان', 'تهاجم به غدد لنفاوی', 'متاستاز به کبد'], 'شکل ۲۰-۴.'),
          T('هرچه مرحله بالاتر باشد، پیش‌آگهی (prognosis) بدتر است.', true, 'درمان سخت‌تر.'),
          P('هر مرحله را به ویژگی‌اش وصل کن', [['stage 0', 'درجا'], ['stage I', 'کوچک و موضعی'], ['stage III', 'غدد ناحیه‌ای'], ['stage IV', 'متاستاز دوردست']]),
          M('prognosis یعنی…', ['پیش‌بینی روند و پیامد بیماری', 'تشخیص', 'درمان', 'نمونه‌برداری'], 'pro- (پیش) + gnosis (دانستن).'),
          B('انتخاب درمان به نوع، جا و ___ سرطان بستگی دارد.', ['مرحله', 'رنگ', 'وزن'], 'کتاب: stage of the disease.'),
          L('مرور سطح «درجه و مرحله»', recap(['grade = نابه‌هنجاری سلول (grade 1 خوب تمایز تا grade 3 کم‌تمایز) • stage = وسعت سرطان', 'ER، PR و HER2 روی سلول‌های سرطان پستان؛ ER مثبت → هورمون‌درمانی', 'TNM: T تومور (Tis تا T4)، N غدد (N0 تا N3)، M متاستاز (M0، M1)؛ localized، regional، distant', 'stage 0 درجا تا stage IV متاستاز دوردست؛ prognosis پیش‌آگهی'])),
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
    id: 'tx', sym: 'Rx', name: 'درمان سرطان', short: 'درمان', sub: 'جراحی، پرتودرمانی، شیمی‌درمانی و عارضه‌ها، هورمون‌درمانی و ایمونوتراپی، پیوند سلول بنیادی و هدف‌های درمان',
    color: '#7048E8', dark: '#4F2FB8', light: '#EEE8FF',
    levels: ['جراحی', 'پرتو و دارو', 'رویکرد و پیامد'],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: جراحی ================= */
      {
        id: 'tx1', title: 'جراحی سرطان', icon: '✂️', items: [
          L('ریشه اندام + ‎-ectomy', `کتاب می‌گوید جراحی برای <b>تومورهای جامدی</b> که در یک ناحیه‌اند بهترین است؛ برای لوسمی یا سرطان پخش‌شده به کار نمی‌رود.${fig('surgery-map')}`),
          M(`${e('<b>pneumonectomy</b>')} یعنی…`, ['برداشتن کامل یک ریه', 'برداشتن یک لوب ریه', 'برش قفسه سینه', 'دیدن درون ریه'], 'pneumon/o + -ectomy.'),
          L('جراحی‌های جدول ۲۰-۵', `${tbl([['جراحی', 'برداشتن'], [e('pneumonectomy'), 'کل یک ریه'], [e('cystectomy'), 'مثانه'], [e('hysterectomy'), 'رحم'], [e('laryngectomy'), 'تمام یا بخشی از حنجره'], [e('lobectomy'), 'یک لوب ریه'], [e('prostatectomy'), 'تمام یا بخشی از پروستات'], [e('orchiectomy'), 'یک یا دو بیضه'], [e('salpingo-oophorectomy'), 'لوله‌ها و تخمدان‌ها']])}${memo('salping/o لوله رحم و oophor/o تخمدان: salpingo-oophorectomy یعنی برداشتن هر دو با هم.')}`),
          P('هر جراحی را به اندامش وصل کن', [['cystectomy', 'مثانه'], ['hysterectomy', 'رحم'], ['orchiectomy', 'بیضه'], ['laryngectomy', 'حنجره']]),
          L('واژه‌های کلی جراحی', `• <b>excision</b>: بریدن و برداشتن بافت<br>• <b>resection</b>: برداشتن بخشی از اندام یا متاستاز (مثلاً در ریه یا کبد)<br>• <b>en bloc resection</b>: برداشتن یکجای تومور با بافت اطراف و غدد<br>• <b>debulking</b> (cytoreduction): برداشتن هرچه بیشتر تومور وقتی همه‌اش قابل برداشتن نیست${pearl('برای سرطان مثانه cystectomy؛ ولی cystoscopy فقط دیدن مثانه است. پسوند را دقیق بخوان!')}`),
          T('جراحی بهترین درمان برای لوسمی است.', false, 'نادرست؛ جراحی برای تومور جامد موضعی است، نه سرطان خون.'),
          M('برداشتن یکجای تومور همراه با بافت اطراف و غدد چه نام دارد؟', ['en bloc resection', 'debulking', 'biopsy', 'lobectomy'], 'en bloc = یکجا.'),
          B('برداشتن یک لوب ریه ___ نام دارد.', ['lobectomy', 'pneumonectomy', 'thoracotomy'], 'lob/o + -ectomy.'),
          W('واژه‌ای بساز به معنی «برداشتن رحم»', ['hyster/o', '-ectomy'], ['-scopy', 'cyst/o', '-tomy'], 'hyster/o + -ectomy = hysterectomy.'),
          S('املای انگلیسی «برداشتن پروستات» را بنویس', 'prostatectomy', 'prostat/o + -ectomy.', 'prostat…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: 'جراحی پستان', icon: '🎗️', items: [
          L('حفظ پستان یا برداشتن آن؟', `${fig('lump-mast')}${tbl([['جراحی', 'تعریف کتاب'], [e('lumpectomy'), 'برداشتن تومور و کمی بافت سالم دور آن'], [e('mastectomy'), 'برداشتن پستان یا بیشتر بافت آن؛ با یا بدون غدد لنفاوی'], [e('modified radical mastectomy'), 'برداشتن پستان، برخی غدد زیر بغل و پوشش روی ماهیچه‌های سینه']])}`),
          M('در lumpectomy چه برداشته می‌شود؟', ['تومور و کمی بافت سالم دور آن', 'کل پستان', 'پستان و ماهیچه سینه', 'فقط غدد زیر بغل'], 'lump = توده.'),
          L('عارضه‌ای که سال‌ها می‌ماند', `برداشتن غدد لنفاوی زیر بغل جریان لنف بازو را می‌بندد و ممکن است <b>lymphedema</b> (ورم لنفاوی) بدهد:${fig('lymphedema-arm', '', 'ورم شدید بازو از انسداد طولانی لنف، سال‌ها پس از جراحی رادیکال سرطان پستان (شکل ۲۰-۹ کتاب).')}${pearl('پس از lymph node dissection، از دست همان سمت خون‌گیری یا فشارسنجی نمی‌کنند تا لنف‌ادم بدتر نشود.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['lumpectomy', 'برداشتن توده'], ['mastectomy', 'برداشتن پستان'], ['lymphedema', 'ورم لنفاوی'], ['modified radical mastectomy', 'پستان، غدد زیر بغل و پوشش ماهیچه']]),
          T('lymphedema بازو می‌تواند سال‌ها پس از برداشتن غدد زیر بغل پیدا شود.', true, 'شکل ۲۰-۹.'),
          L('بازسازی', `پس از ماستکتومی، <b>reconstructive surgery</b> (جراحی بازسازی) شکل پستان را برمی‌گرداند؛ کتاب این را درمان <b>rehabilitative</b> (توان‌بخشی) می‌نامد.`),
          M('بازسازی پستان پس از ماستکتومی کدام رویکرد درمان است؟', ['rehabilitative', 'palliative', 'prophylactic', 'neoadjuvant'], 'جدول ۲۰-۶.'),
          B('اختصار ___ یعنی modified radical mastectomy.', ['MRM', 'SLNB', 'DCIS'], 'ماستکتومی رادیکال تعدیل‌شده.'),
          S('املای انگلیسی «لامپکتومی» را بنویس', 'lumpectomy', 'lump + -ectomy.', 'lump…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: 'جراحی‌های ویژه', icon: '❄️', items: [
          L('سرما، نور و دهانه', `${tbl([['روش', 'توضیح کتاب'], [e('cryosurgery'), 'cry/o = سرما؛ منجمد کردن و نابودی بافت: سرطان پوست اولیه، رتینوبلاستوم، ضایعه پیش‌سرطانی پوست و دهانه رحم'], [e('laser surgery'), 'باریکه نور برای بریدن بافت سطحی یا پوشش اندام‌ها'], [e('colostomy'), 'col/o + ‎-stomy: دهانه روده روی شکم'], [e('port catheter'), 'دستگاه کوچک زیر پوست سینه برای تزریق شیمی‌درمانی']])}`),
          M('cryosurgery با چه چیزی بافت را نابود می‌کند؟', ['سرمای شدید', 'برق', 'نور', 'مواد رادیواکتیو'], 'cry/o = سرما.'),
          L('اکتومی، استومی، تومی', `${fig('ectomy-tomy-stomy')}${memo('کتاب این سه را «واژه‌های گیج‌کننده» می‌نامد: blepharectomy برداشتن، salpingostomy دهانه و prostatolithotomy برش.')}`),
          P('هر پسوند را به معنی‌اش وصل کن', [['-ectomy', 'برداشتن'], ['-stomy', 'ساختن دهانه'], ['-tomy', 'برش'], ['cry/o', 'سرما']]),
          T('colostomy یعنی برداشتن روده بزرگ.', false, 'نادرست؛ برداشتن colectomy است و colostomy ساختن دهانه.'),
          M('دستگاهی که زیر پوست سینه برای شیمی‌درمانی کار گذاشته می‌شود چیست؟', ['port catheter', 'stent', 'pacemaker', 'shunt'], 'کتاب: access devices for chemotherapy.'),
          B('برداشتن تیروئید ___ نام دارد.', ['thyroidectomy', 'thyroidotomy', 'thyroidostomy'], 'thyroid/o + -ectomy.'),
          W('واژه‌ای بساز به معنی «جراحی با سرما»', ['cry/o', 'surgery'], ['radi/o', '-tomy', 'chem/o'], 'cry/o + surgery = cryosurgery.'),
          L('مرور سطح «جراحی»', recap(['جراحی برای تومور جامد موضعی؛ excision، resection، en bloc resection، debulking', 'ectomy‌ها: pneumonectomy، lobectomy، cystectomy، hysterectomy، laryngectomy، prostatectomy، orchiectomy، salpingo-oophorectomy، thyroidectomy', 'پستان: lumpectomy، mastectomy، modified radical mastectomy؛ lymphedema؛ reconstructive surgery', 'cryosurgery، laser surgery، colostomy، port catheter؛ ‎-ectomy برداشتن، ‎-tomy برش، ‎-stomy دهانه'])),
          N('m2r:tx')
        ]
      },

      /* ================= سطح ۲: پرتو و دارو ================= */
      {
        id: 'tx4', title: 'پرتودرمانی', icon: '☢️', items: [
          L('پرتو برای کشتن سلول', `<b>radiation therapy</b> (radiotherapy) با پرتوهای پرانرژی مثل اشعه ایکس سلول‌های سرطانی را می‌کشد یا رشدشان را کند می‌کند. سه راه دارد:${fig('radiation-types')}`),
          M('در brachytherapy منبع پرتو کجاست؟', ['درون یا کنار تومور', 'در دستگاهی بیرون از بدن', 'در خون', 'در مغز استخوان'], 'brachy- = نزدیک.'),
          L('سه نوع در کتاب', `${tbl([['نوع', 'توضیح'], [e('external beam radiation'), 'دستگاه پرتو را از بیرون به محل تومور می‌تاباند'], [e('brachytherapy'), 'دانه، سوزن، سیم یا کاتتر پرتوزا درون یا کنار تومور'], [e('systemic radiation therapy'), 'ماده پرتوزای مایع از دهان یا سیاهرگ در خون می‌گردد']])}${pearl('radioactive iodine (I-131) نمونه پرتودرمانی سیستمیک است: تیروئید ید را می‌گیرد و سلول‌های سرطانی تیروئید از درون پرتو می‌خورند.')}توموری که به‌آسانی با پرتو آسیب می‌بیند <b>radiosensitive</b> (حساس به پرتو) است.`),
          P('هر نوع را به ویژگی‌اش وصل کن', [['external beam', 'دستگاه بیرون از بدن'], ['brachytherapy', 'دانه پرتوزا کنار تومور'], ['systemic', 'مایع پرتوزا در خون'], ['radioactive iodine', 'سرطان تیروئید']]),
          T('کتاب: پرتودرمانی با ماده پرتوزای تزریقی در سیاهرگ نوع systemic است.', true, 'پرسش ۲ پایان فصل.'),
          M('radiosensitive یعنی تومور…', ['به‌آسانی با پرتو آسیب می‌بیند', 'به پرتو مقاوم است', 'پرتو تولید می‌کند', 'با جراحی درمان می‌شود'], 'حساس به پرتو.'),
          B('متخصص پرتودرمانی ___ oncologist است.', ['radiation', 'medical', 'surgical'], 'radiation oncologist.'),
          W('واژه‌ای بساز به معنی «درمان از نزدیک»', ['brachy-', '-therapy'], ['radi/o', 'chem/o', '-tomy'], 'brachy- + -therapy = brachytherapy.'),
          S('املای انگلیسی «براکی‌تراپی» را بنویس', 'brachytherapy', 'brachy- + -therapy.', 'brachy…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx5', title: 'شیمی‌درمانی', icon: '💉', items: [
          L('دارو علیه سلول‌های تندتقسیم', `<b>chemotherapy</b> درمان با داروهای ضدسرطان است که جلوی رشد و تقسیم سلول‌های سرطانی را می‌گیرد. این داروها <b>antineoplastic</b> و اغلب <b>cytotoxic</b> (سلول‌کش) هستند؛ مثل <b>methotrexate</b> و <b>fluorouracil</b>.${memo('cyt/o + ‎-toxic = «سمِ سلول»: شیمی‌درمانی سم دقیقی برای سلول‌های تندتقسیم است.')}`),
          M(`${e('<b>antineoplastic</b>')} یعنی دارویی که…`, ['از رشد و تکثیر سلول‌های سرطانی جلوگیری می‌کند', 'تهوع را کم می‌کند', 'ایمنی را سرکوب می‌کند', 'درد را کم می‌کند'], 'anti- + neo- + plas/o + -tic.'),
          L('چرا عارضه دارد؟', `${fig('chemo-effects')}${tbl([['عارضه', 'معنی'], [e('alopecia'), 'ریزش مو'], [e('mucositis'), 'زخم و التهاب مخاط دهان و گوارش'], [e('neutropenia'), 'کمبود نوتروفیل؛ خطر عفونت'], [e('myelosuppression'), 'کاهش ساخت سلول‌های خون در مغز استخوان']])}`),
          P('هر عارضه را به معنی‌اش وصل کن', [['alopecia', 'ریزش مو'], ['mucositis', 'زخم دهان'], ['neutropenia', 'کمبود نوتروفیل'], ['myelosuppression', 'سرکوب مغز استخوان']]),
          L('درمان حمایتی', `• <b>antiemetic</b>: داروی ضدتهوع؛ anti- + emesis (استفراغ). نمونه‌ها: chlorpromazine و dexamethasone<br>• <b>colony-stimulating factor</b> (CSF، G-CSF): مغز استخوان را به ساختن سلول‌های خون وادار می‌کند${pearl('بیمار با neutropenia و تب، اورژانس انکولوژی است: «تب نوتروپنیک» باید فوراً آنتی‌بیوتیک بگیرد.')}`),
          T('antiemetic دارویی برای جلوگیری از تهوع و استفراغ است.', true, 'جدول داروهای فصل.'),
          M('کدام دارو پس از شیمی‌درمانی ساخت گلبول‌های سفید را تحریک می‌کند؟', ['colony-stimulating factor', 'antiemetic', 'antiestrogen', 'methotrexate'], 'G-CSF.'),
          B('ریزش مو در شیمی‌درمانی ___ نام دارد.', ['alopecia', 'mucositis', 'cachexia'], 'alopecia.'),
          S('املای انگلیسی «شیمی‌درمانی» را بنویس', 'chemotherapy', 'chem/o + -therapy.', 'chemo…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx6', title: 'هورمون و ایمنی', icon: '🛡️', items: [
          L('قفل و کلید', `<b>hormone therapy</b> (endocrine therapy) رشد تومورهای هورمون‌حساس را با جلوگیری از ساخت هورمون یا بستن اثرش کند می‌کند:${fig('hormone-block')}`),
          M('antiestrogen در کدام سرطان به کار می‌رود؟', ['سرطان پستان با گیرنده استروژن مثبت', 'سرطان پوست', 'لوسمی', 'سرطان ریه'], 'کتاب: estrogen positive breast cancer.'),
          L('داروهای هورمونی', `${tbl([['دارو', 'کار'], [e('antiestrogen'), 'بستن اثر استروژن؛ مثل tamoxifen در پستان'], [e('aromatase inhibitor'), 'کم کردن ساخت استروژن پس از یائسگی'], [e('antiandrogen'), 'بستن هورمون مردانه؛ پروستات'], [e('LH-RH agonist'), 'کاهش ترشح هورمون‌های جنسی']])}${memo('andr/o یعنی مرد: antiandrogen «ضد هورمون مردانه» برای پروستات است.')}`),
          P('هر دارو را به کارش وصل کن', [['antiestrogen', 'بستن اثر استروژن'], ['antiandrogen', 'بستن هورمون مردانه'], ['aromatase inhibitor', 'کم کردن ساخت استروژن'], ['LH-RH agonist', 'کاهش هورمون‌های جنسی']]),
          L('بیدار کردن ایمنی', `• <b>immunotherapy</b> (biological therapy): تقویت توان دستگاه ایمنی برای جنگ با سرطان<br>• <b>BCG vaccine</b>: باکتری ضعیف‌شده که در مثانه دستگاه ایمنی را فعال می‌کند<br>• <b>monoclonal antibody</b>: آنتی‌بادی آزمایشگاهی که به هدف ویژه روی سلول سرطانی می‌چسبد<br>• <b>targeted therapy</b>: دارویی که مولکول خاصِ رشد سرطان را هدف می‌گیرد${pearl('immunosuppressant برعکس است: ایمنی را سرکوب می‌کند؛ برای بیماران پیوندی.')}`),
          T('immunotherapy و immunosuppressant یک کار می‌کنند.', false, 'نادرست؛ یکی ایمنی را تقویت و دیگری سرکوب می‌کند.'),
          M('BCG vaccine در کدام سرطان به کار می‌رود؟', ['مثانه', 'پستان', 'پروستات', 'خون'], 'ایمنی‌درمانی درون مثانه.'),
          B('دارویی که ساخت استروژن را پس از یائسگی کم می‌کند ___ inhibitor است.', ['aromatase', 'colony', 'receptor'], 'aromatase inhibitor.'),
          L('مرور سطح «پرتو و دارو»', recap(['radiation therapy: external beam، brachytherapy (نزدیک)، systemic (مثل radioactive iodine)', 'chemotherapy: antineoplastic و cytotoxic؛ methotrexate، fluorouracil', 'عارضه: alopecia، mucositis، neutropenia، myelosuppression؛ حمایت: antiemetic، colony-stimulating factor', 'hormone therapy: antiestrogen، aromatase inhibitor، antiandrogen، LH-RH agonist • immunotherapy: BCG، monoclonal antibody، targeted therapy'])),
          N('ab:tx')
        ]
      },

      /* ================= سطح ۳: رویکرد و پیامد ================= */
      {
        id: 'tx7', title: 'پیوند سلول بنیادی', icon: '🌱', items: [
          L('بازسازی مغز استخوان', `<b>stem cell transplant</b> سلول‌های بنیادی خون‌ساز را که با شیمی‌درمانی یا پرتودرمانی شدید از بین رفته‌اند جایگزین می‌کند؛ بیشتر برای لوسمی و لنفوم.${fig('stem-cell')}`),
          M('پیوند سلول بنیادی بیشتر برای کدام سرطان‌هاست؟', ['لوسمی و لنفوم', 'سرطان پوست', 'سرطان پستان مرحله ۱', 'ملانوم'], 'کتاب.'),
          L('دو منبع سلول', `${vs(['BMT', 'bone marrow transplantation: سلول‌ها از مغز استخوان'], ['PBSCT', 'peripheral blood stem cell transplantation: سلول‌ها از خون محیطی'])}کتاب می‌گوید سلول‌های بنیادی می‌توانند از مغز استخوان، خون یا <b>بند ناف</b> باشند.${pearl('graft-versus-host disease (GVHD) یعنی سلول‌های ایمنی اهداکننده به بدن گیرنده حمله کنند؛ برای پیشگیری immunosuppressant داده می‌شود.')}`),
          P('هر اختصار را به معنی‌اش وصل کن', [['BMT', 'پیوند مغز استخوان'], ['PBSCT', 'پیوند سلول بنیادی خون محیطی'], ['GVHD', 'بیماری پیوند علیه میزبان'], ['CSF', 'فاکتور محرک کلونی']]),
          O('گام‌های پیوند سلول بنیادی را بچین', ['جمع‌آوری سلول‌های بنیادی', 'شیمی‌درمانی شدید', 'تزریق سلول‌ها از سیاهرگ', 'جای‌گیری و ساختن خون تازه'], 'شکل پیوند.'),
          T('در GVHD بدن گیرنده به سلول‌های پیوندی حمله می‌کند.', false, 'نادرست؛ برعکس: سلول‌های پیوندی (graft) به بدن میزبان (host) حمله می‌کنند.'),
          M('سلول‌های بنیادی خون را از کجا می‌توان گرفت؟', ['مغز استخوان، خون یا بند ناف', 'فقط پوست', 'فقط کبد', 'فقط غدد لنفاوی'], 'کتاب.'),
          B('دارویی که ایمنی را سرکوب می‌کند ___ نام دارد.', ['immunosuppressant', 'immunotherapy', 'antineoplastic'], 'immun/o + suppressant.'),
          S('املای انگلیسی «سرکوب مغز استخوان» را بنویس', 'myelosuppression', 'myel/o + -suppression.', 'myelo…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx8', title: 'زمان‌بندی درمان', icon: '⏱️', items: [
          L('پیش، حین و پس از جراحی', `${fig('treatment-timeline')}${vs(['neoadjuvant therapy', 'پیش از جراحی؛ برای کوچک کردن تومور'], ['adjuvant therapy', 'پس از جراحی؛ برای کشتن سلول‌های باقی‌مانده'])}`),
          M('شیمی‌درمانی پیش از جراحی برای کوچک کردن تومور چه نام دارد؟', ['neoadjuvant therapy', 'adjuvant therapy', 'palliative care', 'hospice'], 'neo- = تازه، پیش از.'),
          L('پس از درمان', `${tbl([['واژه', 'معنی'], [e('remission'), 'کاهش یا ناپدید شدن نشانه‌های سرطان؛ complete remission (CR) یعنی سرطانی دیده نمی‌شود'], [e('relapse'), 'بازگشت سرطان پس از دوره بهبود'], [e('recurrence'), 'سرطانی که پس از درمان، در همان جا یا جای دیگر برگشته است'], [e('five-year survival rate'), 'درصد بیمارانی که پنج سال پس از تشخیص زنده‌اند']])}${memo('re- یعنی دوباره: relapse و recurrence هر دو یعنی «دوباره آمد».')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['remission', 'بهبودی'], ['relapse', 'عود'], ['adjuvant', 'پس از جراحی'], ['neoadjuvant', 'پیش از جراحی']]),
          T('complete remission یعنی سرطان قطعاً هرگز برنمی‌گردد.', false, 'نادرست؛ یعنی فعلاً دیده نمی‌شود؛ پیگیری لازم است.'),
          M('پرتودرمانی پس از lumpectomy برای از بین بردن سلول‌های باقی‌مانده چه نوع درمانی است؟', ['adjuvant therapy', 'neoadjuvant therapy', 'prophylactic', 'debulking'], 'پس از درمان اصلی.'),
          B('درصد بیمارانی که پنج سال پس از تشخیص زنده‌اند five-year ___ rate است.', ['survival', 'remission', 'recurrence'], 'نرخ بقای پنج‌ساله.'),
          O('ترتیب رایج درمان یک تومور جامد را بچین', ['neoadjuvant therapy', 'surgery', 'adjuvant therapy', 'follow-up'], 'پیش، حین و پس.'),
          S('املای انگلیسی «بهبودی» را بنویس', 'remission', 're- + mission.', 'remis…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx9', title: 'هدف درمان', icon: '🎯', items: [
          L('هر درمان یک هدف دارد', `کتاب درمان‌ها را بر اساس هدفشان دسته‌بندی می‌کند (جدول ۲۰-۶):${fig('care-goals')}`),
          M('درمان palliative یعنی…', ['تسکین علائم بدون درمان قطعی', 'درمان قطعی', 'پیشگیری از سرطان', 'بازسازی پستان'], 'فرانسوی palliatif: آرام کردن بدون درمان.'),
          L('نمونه‌های جدول ۲۰-۶', `${tbl([['رویکرد', 'نمونه'], [e('curative'), 'primary یا definitive: برداشتن موضعی، en bloc dissection'], [e('palliative'), 'کوچک‌سازی تومور، کنترل درد، حمایت تغذیه‌ای'], [e('prophylactic'), 'برداشتن ضایعه پیش‌سرطانی'], [e('rehabilitative'), 'بازسازی پس از ماستکتومی'], [e('supportive'), 'پورت شیمی‌درمانی، ضدتهوع'], [e('hospice'), 'مراقبت آسایشی پایان زندگی']])}${memo('prophylactic = pro (پیش) + phylax (نگهبان): «نگهبانی از پیش».')}`),
          P('هر رویکرد را به نمونه‌اش وصل کن', [['curative', 'برداشتن کامل تومور'], ['palliative', 'کنترل درد'], ['prophylactic', 'برداشتن پولیپ'], ['rehabilitative', 'بازسازی پستان']]),
          T('کتاب: برداشتن کامل basal cell carcinoma پوست درمان definitive است.', true, 'پرسش ۸ پایان فصل.'),
          M('بیمار با سرطان متاستاتیک برای کاهش درد استخوان پرتو می‌گیرد. هدف درمان چیست؟', ['palliative', 'curative', 'prophylactic', 'rehabilitative'], 'تسکین، نه درمان قطعی.'),
          B('مراقبت آسایشی برای بیماران در پایان زندگی ___ نام دارد.', ['hospice', 'remission', 'resection'], 'hospice.'),
          M('کتاب می‌گوید انتخاب درمان به چه بستگی دارد؟', ['نوع و جای سرطان، مرحله، سن و سلامت عمومی بیمار', 'فقط سن بیمار', 'فقط اندازه تومور', 'فقط نظر بیمار'], 'Cancer Treatment در کتاب.'),
          L('مرور سطح «رویکرد و پیامد»', recap(['stem cell transplant: BMT (مغز استخوان)، PBSCT (خون محیطی)؛ GVHD و immunosuppressant', 'neoadjuvant پیش از جراحی، adjuvant پس از آن؛ remission، relapse، recurrence، five-year survival rate', 'هدف‌ها: curative (definitive)، palliative، prophylactic، rehabilitative، supportive، hospice', 'انتخاب درمان: نوع و جای سرطان، stage، سن و سلامت عمومی'])),
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
    { id: 'lx-0', w: 'lx', lv: 0, name: 'تکه‌یاب', title: 'شکننده واژه‌ها', shape: 'puzzle', color: '#748FFC', acc: ['sparkle'], bio: 'هر واژه ترسناکی را به ریشه و پسوند می‌شکند و از آخر می‌خواند: osteosarcoma یعنی سرطانِ بافت همبندِ استخوان.' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'اِکتومی', title: 'استاد پسوندهای جراحی', shape: 'clipboard', color: '#5C7CFA', acc: ['glasses'], bio: 'فرق ‎-ectomy (برداشتن)، ‎-tomy (برش) و ‎-stomy (دهانه تازه) را می‌داند و هیچ‌وقت colectomy را با colostomy قاطی نمی‌کند.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'پرونده‌خوان', title: 'رمزگشای اختصارها', shape: 'book', color: '#4C6EF5', acc: ['crown'], bio: 'Bx، Dx، Tx، mets و s/p را مثل زبان مادری می‌خواند و جمع metastasis را metastases می‌گوید.' },
    { id: 'cl-0', w: 'cl', lv: 0, name: 'سلولک', title: 'سلول منظم', shape: 'cell', color: '#20C997', acc: ['sparkle'], bio: 'فقط به اندازه نیاز تقسیم می‌شود، با رسیدن به همسایه می‌ایستد و وقتش که برسد با apoptosis آرام کنار می‌رود.' },
    { id: 'cl-1', w: 'cl', lv: 1, name: 'ترمزبان', title: 'ژن سرکوبگر تومور', shape: 'shield', color: '#12B886', acc: ['headband'], bio: 'ترمز تقسیم سلول است و DNA آسیب‌دیده را تعمیر می‌کند؛ اگر جهش بخورد (مثل BRCA1)، سلول بی‌مهار می‌شود.' },
    { id: 'cl-2', w: 'cl', lv: 2, name: 'دی‌ان‌ای', title: 'نگهبان ژن‌ها', shape: 'dna', color: '#0CA678', acc: ['crown'], bio: 'می‌داند انکوژن پدال گاز گیرکرده است و ژن سرکوبگر ترمز؛ جهش در هر دو، سلول را به سوی سرطان می‌برد.' },
    { id: 'nm-0', w: 'nm', lv: 0, name: 'اومای مهربان', title: 'تومور خوش‌خیم', shape: 'bubble', color: '#FFA94D', acc: ['sparkle'], bio: 'کپسول دارد، آهسته رشد می‌کند و جایی نمی‌رود: lipoma، adenoma و osteoma همه از خانواده اویند.' },
    { id: 'nm-1', w: 'nm', lv: 1, name: 'سارکو', title: 'نام‌گذار بافت‌ها', shape: 'bone', color: '#F76707', acc: ['glasses'], bio: 'بافت پوششی را به carcinoma، بافت همبند را به sarcoma، مغز استخوان را به leukemia و لنف را به lymphoma می‌برد.' },
    { id: 'nm-2', w: 'nm', lv: 2, name: 'بلاستو', title: 'شناسای تومورهای جنینی', shape: 'blob', color: '#E8590C', acc: ['crown'], bio: 'retinoblastoma، neuroblastoma و medulloblastoma را می‌شناسد و می‌داند Wilms tumor استثنای این خانواده است.' },
    { id: 'sx-0', w: 'sx', lv: 0, name: 'کاشن', title: 'هفت نشانه هشدار', shape: 'ribbon', color: '#F06595', acc: ['sparkle'], bio: 'هفت حرف CAUTION را از بر است: از تغییر اجابت مزاج تا سرفه سمج و گرفتگی صدا.' },
    { id: 'sx-1', w: 'sx', lv: 1, name: 'خال‌بین', title: 'استاد ABCDE', shape: 'disc', color: '#E64980', acc: ['glasses'], bio: 'هر خال را با پنج سؤال می‌سنجد: نامتقارن؟ لبه ناصاف؟ چند رنگ؟ بزرگ‌تر از ۶ میلی‌متر؟ در حال تغییر؟' },
    { id: 'sx-2', w: 'sx', lv: 2, name: 'غربالچی', title: 'یابنده زودهنگام', shape: 'micro', color: '#C2255C', acc: ['crown'], bio: 'ماموگرافی، پاپ اسمیر، کولونوسکوپی و PSA ابزارهای اویند تا سرطان را پیش از نشانه پیدا کند.' },
    { id: 'dx-0', w: 'dx', lv: 0, name: 'سوزنک', title: 'نمونه‌بردار دقیق', shape: 'syringe', color: '#4DABF7', acc: ['sparkle'], bio: 'گاهی کل توده را برمی‌دارد (excisional)، گاهی تکه‌ای (incisional) و گاهی فقط چند سلول با سوزن ظریف (FNA).' },
    { id: 'dx-1', w: 'dx', lv: 1, name: 'پاتو', title: 'پاتولوژیست زیر میکروسکوپ', shape: 'micro', color: '#228BE6', acc: ['glasses'], bio: 'تشخیص قطعی کار اوست: نوع سلول، درجه (grade) و حاشیه جراحی را در گزارش می‌نویسد.' },
    { id: 'dx-2', w: 'dx', lv: 2, name: 'تی‌ان‌ام', title: 'مرحله‌بند', shape: 'scale', color: '#1971C2', acc: ['crown'], bio: 'با سه حرف T، N و M می‌گوید سرطان چقدر پیش رفته است: از stage 0 (درجا) تا stage IV (متاستاز دوردست).' },
    { id: 'tx-0', w: 'tx', lv: 0, name: 'تیغک', title: 'جراح سرطان', shape: 'glove', color: '#9775FA', acc: ['sparkle'], bio: 'تومور جامد را با حاشیه سالم برمی‌دارد: lumpectomy، mastectomy یا colectomy؛ بسته به اندازه و جای تومور.' },
    { id: 'tx-1', w: 'tx', lv: 1, name: 'پرتوک', title: 'پرتودرمانگر', shape: 'rad', color: '#FAB005', acc: ['glasses'], bio: 'پرتو را از بیرون می‌تاباند، دانه‌های پرتوزا را کنار تومور می‌گذارد (brachytherapy) یا ید ۱۳۱ را به خون می‌فرستد.' },
    { id: 'tx-2', w: 'tx', lv: 2, name: 'شیمیک', title: 'داروساز سرطان', shape: 'capsule', color: '#7048E8', acc: ['crown'], bio: 'شیمی‌درمانی، هورمون‌درمانی و ایمونوتراپی را می‌شناسد و با antiemetic و CSF عارضه‌ها را مهار می‌کند.' }
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
      id: 'r1', w: 'lx', title: 'خلاصه ترخیص: ید ۱۳۱', who: 'خانم ۲۸ ساله با سرطان تیروئید',
      brief: 'خانم اسمیت سابقه papillary carcinoma تیروئید دارد و پس از جراحی برای دومین دوز ید رادیواکتیو بستری شده است. خلاصه ترخیص پر از اختصار است؛ آن را برای خانواده بیمار ترجمه کن.',
      chart: [['تشخیص', 'papillary carcinoma of the thyroid'], ['سابقه جراحی', 's/p left thyroidectomy'], ['درمان', 'I-131، ۱۵۰ mCi'], ['داروی ترخیص', 'Synthroid ۰٫۱ mg p.o. q.d.']],
      fig: { a: ['radiation-types'], l: ['سه راه پرتودرمانی'] },
      steps: [
        P('اختصار', 'هر اختصار پرونده را به معنی‌اش وصل کن', [['s/p', 'وضعیت پس از عمل'], ['p.o.', 'خوراکی'], ['q.d.', 'روزی یک بار'], ['mCi', 'واحد پرتوزایی']]),
        M('جراحی', 'thyroidectomy یعنی…', ['برداشتن غده تیروئید', 'برش تیروئید', 'التهاب تیروئید', 'عکس‌برداری از تیروئید'], 'thyroid/o + -ectomy (برداشتن).'),
        M('نام تومور', 'papillary carcinoma یعنی سرطانی…', ['از بافت پوششی با برآمدگی‌های انگشتی', 'از بافت همبند', 'از مغز استخوان', 'خوش‌خیم و کپسول‌دار'], 'carcinoma = سرطان بافت پوششی؛ papill/o = برآمدگی پستانک‌مانند.'),
        M('درمان', 'ید ۱۳۱ که خوراکی داده می‌شود و در خون به سلول‌های تیروئید می‌رسد، کدام نوع پرتودرمانی است؟', ['systemic radiation therapy', 'external beam radiation', 'brachytherapy', 'cryosurgery'], 'مایع پرتوزا در خون گردش می‌کند: سیستمیک.'),
        T('یافته', 'گره لنفاوی گردنی ۱×۲ سانتی‌متری پس از جراحی می‌تواند نشانه گسترش سرطان باشد.', true, 'گسترش از راه لنف به غدد لنفاوی گردن.'),
        S('املا', 'املای «سرطان‌شناسی» را بنویس', 'oncology', 'onc/o (تومور) + -logy (علم).', 'onco…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: 'یادداشت کمیته تومور', who: 'جلسه هفتگی تیم سرطان',
      brief: 'در کمیته تومور، جراح، پاتولوژیست، انکولوژیست و پرتودرمانگر درباره یک بیمار تصمیم می‌گیرند. منشی جلسه باید یادداشت کوتاه آن‌ها را بفهمد.',
      chart: [['Bx', 'adenocarcinoma'], ['Dx', 'Ca colon، بدون mets'], ['Tx', 'colectomy سپس chemo'], ['F/U', 'هر ۳ ماه']],
      fig: { a: ['onc-team'], l: ['تیم درمان سرطان'] },
      steps: [
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['Bx', 'نمونه‌برداری'], ['Dx', 'تشخیص'], ['Tx', 'درمان'], ['mets', 'متاستازها']]),
        P('تیم', 'هر عضو تیم را به کارش وصل کن', [['pathologist', 'تشخیص زیر میکروسکوپ'], ['surgical oncologist', 'برداشتن تومور'], ['radiation oncologist', 'پرتودرمانی'], ['medical oncologist', 'شیمی‌درمانی']]),
        M('واژه', 'colectomy یعنی…', ['برداشتن روده بزرگ', 'ساختن دهانه روده روی شکم', 'دیدن درون روده', 'برش روده'], 'col/o + -ectomy.'),
        T('اختصار', '«بدون mets» یعنی سرطان به جای دیگری گسترش نیافته است.', true, 'mets = metastases.'),
        M('اختصار', 'NED در یادداشت پیگیری یعنی…', ['بدون نشانه بیماری', 'نیاز به درمان فوری', 'پایان شیمی‌درمانی', 'عود بیماری'], 'no evidence of disease.'),
        S('املا', 'املای «متخصص سرطان» را بنویس', 'oncologist', 'onc/o + -logist.', 'onco…')
      ]
    },
    /* ================= سلول و رشد تومور ================= */
    {
      id: 'r3', w: 'cl', title: 'پاپ اسمیر غیرطبیعی', who: 'خانم ۳۲ ساله',
      brief: 'در غربالگری معمول، پاپ اسمیر خانم جوانی سلول‌های نابه‌هنجار نشان داده و آزمایش HPV مثبت است. پزشک توضیح می‌دهد این هنوز سرطان نیست ولی باید درمان شود.',
      chart: [['Pap smear', 'dysplasia'], ['HPV test', 'positive (high-risk)'], ['biopsy', 'carcinoma in situ نیست'], ['تصمیم', 'برداشتن ناحیه دیسپلاستیک']],
      fig: { a: ['plasia-steps'], l: ['پله‌های تغییر سلول'] },
      steps: [
        M('سلول', 'dysplasia یعنی…', ['رشد نابه‌هنجار سلول‌ها؛ پیش‌سرطانی', 'افزایش تعداد سلول‌های طبیعی', 'سرطان مهاجم', 'مرگ سلول'], 'dys- (نابه‌هنجار) + -plasia (رشد).'),
        O('پله‌ها', 'پله‌های تغییر بافت پوششی را به ترتیب بچین', ['normal', 'hyperplasia', 'dysplasia', 'carcinoma in situ', 'invasive carcinoma'], 'از طبیعی تا مهاجم.'),
        M('علت', 'HPV در این پرونده چه نقشی دارد؟', ['ویروس سرطان‌زا برای دهانه رحم', 'تومور خوش‌خیم', 'نشانگر تومور', 'داروی ضدسرطان'], 'human papillomavirus: انواع پرخطر آن سرطان دهانه رحم می‌دهند.'),
        T('درمان', 'برداشتن ضایعه دیسپلاستیک یک درمان پیشگیرانه (prophylactic) است.', true, 'پیش از تبدیل به سرطان.'),
        M('مرز', 'تفاوت carcinoma in situ با invasive carcinoma چیست؟', ['in situ از غشای پایه عبور نکرده است', 'in situ خوش‌خیم است', 'invasive کپسول دارد', 'تفاوتی ندارند'], 'in situ = در جای خود.'),
        S('املا', 'املای «عامل سرطان‌زا» را بنویس', 'carcinogen', 'carcin/o + -gen.', 'carcino…')
      ]
    },
    {
      id: 'r4', w: 'cl', title: 'سرطان ریه در کبد', who: 'آقای ۶۴ ساله سیگاری',
      brief: 'در سی‌تی‌اسکن یک بیمار با سرطان ریه، توده‌هایی در کبد دیده شده است. خانواده می‌پرسند: «حالا سرطان کبد هم دارد؟» باید پاسخ درست بدهی.',
      chart: [['primary tumor', 'lung adenocarcinoma'], ['CT', 'چند ضایعه در کبد'], ['biopsy کبد', 'سلول‌های adenocarcinoma ریه'], ['risk factor', 'tobacco، ۴۰ سال']],
      fig: { a: ['metastasis-routes'], l: ['راه‌های گسترش سرطان'] },
      steps: [
        M('نام', 'سرطان این بیمار چه نام دارد؟', ['metastatic lung cancer', 'liver cancer', 'lung and liver cancer', 'hepatoblastoma'], 'تومور ثانویه نام تومور اولیه را نگه می‌دارد.'),
        M('راه', 'سلول‌های سرطان ریه از چه راهی به کبد رسیده‌اند؟', ['hematogenous spread (از راه خون)', 'تماس مستقیم', 'از راه هوا', 'جهش ارثی'], 'گسترش دوردست بیشتر از راه خون است.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['primary tumor', 'تومور اولیه'], ['secondary tumor', 'تومور ثانویه'], ['metastasis', 'گسترش به جای دور'], ['carcinogen', 'عامل سرطان‌زا']]),
        T('ریشه', 'meta- یعنی تغییر و ‎-stasis یعنی ایستادن.', true, 'سلول جا عوض می‌کند و جای تازه می‌ایستد.'),
        M('علت', 'کدام عامل خطر در این بیمار مهم‌ترین است؟', ['tobacco', 'ultraviolet radiation', 'HPV', 'asbestos'], 'دخانیات مهم‌ترین علت سرطان ریه است.'),
        S('املا', 'املای جمع metastasis را بنویس', 'metastases', '‎-is → ‎-es.', 'metasta…')
      ]
    },
    /* ================= نام‌گذاری تومورها ================= */
    {
      id: 'r5', w: 'nm', title: 'درد زانوی نوجوان', who: 'پسر ۱۵ ساله فوتبالیست',
      brief: 'نوجوانی چند ماه است درد و تورم بالای زانو دارد. در عکس، تخریب استخوان دیده می‌شود و بیوپسی تشخیص را قطعی کرده است. باید نام تومور را رمزگشایی کنی.',
      chart: [['شکایت', 'درد و تورم بالای زانو'], ['X-ray', 'ضایعه تخریبی ران'], ['biopsy', 'osteosarcoma'], ['CT ریه', 'بدون mets']],
      fig: { a: ['naming-rules'], l: ['قاعده نام‌گذاری تومور'] },
      steps: [
        M('نام', 'osteosarcoma یعنی…', ['سرطان بدخیم استخوان', 'تومور خوش‌خیم استخوان', 'سرطان غضروف', 'التهاب استخوان'], 'oste/o + -sarcoma.'),
        M('قاعده', 'اگر همین تومور خوش‌خیم بود، چه نامی داشت؟', ['osteoma', 'osteocarcinoma', 'osteoblastoma', 'osteoleukemia'], 'root + -oma = خوش‌خیم.'),
        P('نام‌گذاری', 'هر تومور بدخیم را به بافتش وصل کن', [['chondrosarcoma', 'غضروف'], ['liposarcoma', 'چربی'], ['leiomyosarcoma', 'ماهیچه صاف'], ['adenocarcinoma', 'غده']]),
        T('بافت', 'sarcoma از بافت پوششی و carcinoma از بافت همبند پدید می‌آید.', false, 'برعکس: sarcoma از بافت همبند و carcinoma از بافت پوششی.'),
        M('گسترش', 'چرا پیش از درمان، سی‌تی ریه گرفته می‌شود؟', ['ریه شایع‌ترین جای متاستاز سارکوم است', 'برای دیدن قلب', 'برای غربالگری HPV', 'برای سنجش هورمون'], 'سارکوم‌ها اغلب از راه خون به ریه می‌روند.'),
        S('املا', 'املای «سارکوم» را بنویس', 'sarcoma', 'sarc/o + -oma.', 'sar…')
      ]
    },
    {
      id: 'r6', w: 'nm', title: 'توده شکمی کودک', who: 'کودک ۴ ساله',
      brief: 'مادری هنگام حمام کردن کودکش توده‌ای در پهلوی او لمس کرده است. سونوگرافی توده‌ای در کلیه نشان می‌دهد. پزشک از یک تومور جنینی کودکان صحبت می‌کند.',
      chart: [['معاینه', 'توده بزرگ در پهلوی راست'], ['ultrasound', 'توده کلیه'], ['تشخیص', 'Wilms tumor'], ['متخصص', 'pediatric oncologist']],
      fig: { a: ['blastoma-map'], l: ['تومورهای جنینی کودکان'] },
      steps: [
        M('نام', 'Wilms tumor سرطان کدام اندام است؟', ['کلیه', 'کبد', 'شبکیه', 'غده فوق کلیه'], 'تومور جنینی کلیه در کودکان.'),
        M('استثنا', 'چرا Wilms tumor استثنای نام‌گذاری است؟', ['nephroblastoma نامیده نمی‌شود', 'خوش‌خیم است', 'در بزرگسالان است', 'از بافت همبند است'], 'قاعده: ریشه اندام + ‎-blastoma.'),
        P('بلاستوم', 'هر تومور جنینی را به اندامش وصل کن', [['retinoblastoma', 'شبکیه'], ['hepatoblastoma', 'کبد'], ['medulloblastoma', 'مخچه'], ['neuroblastoma', 'غده فوق کلیه و عصب']]),
        T('ریشه', 'blast/o یعنی سلول نابالغ یا جنینی.', true, 'blastoma = تومور سلول‌های نابالغ.'),
        M('تیم', 'کدام متخصص درمان این کودک را هماهنگ می‌کند؟', ['pediatric oncologist', 'hematologist', 'radiologist', 'oncology nurse'], 'انکولوژیست کودکان.'),
        S('املا', 'املای «سرطان جنینی شبکیه» را بنویس', 'retinoblastoma', 'retin/o + -blastoma.', 'retino…')
      ]
    },
    /* ================= نشانه‌ها و غربالگری ================= */
    {
      id: 'r7', w: 'sx', title: 'خالی که عوض شد', who: 'خانم ۴۵ ساله',
      brief: 'خانمی می‌گوید خال پشتش در چند ماه بزرگ‌تر و تیره‌تر شده و لبه‌اش ناصاف است. پزشک خال را با قاعده ABCDE بررسی می‌کند.',
      chart: [['شکایت', 'تغییر رنگ و اندازه خال'], ['اندازه', '۸ میلی‌متر'], ['معاینه', 'نامتقارن، چند رنگ'], ['biopsy', 'melanoma']],
      fig: { a: ['abcde-mole'], l: ['قاعده ABCDE'] },
      steps: [
        P('ABCDE', 'هر حرف را به معنی‌اش وصل کن', [['A', 'عدم تقارن'], ['B', 'لبه ناصاف'], ['C', 'چند رنگ'], ['E', 'تغییر در زمان']]),
        M('اندازه', 'خال ۸ میلی‌متری از نظر حرف D…', ['مشکوک است؛ بیشتر از ۶ میلی‌متر', 'طبیعی است', 'خوش‌خیم است', 'بی‌اهمیت است'], 'Diameter: قطر بیشتر از ۶ میلی‌متر.'),
        M('نام', 'melanoma سرطان کدام سلول است؟', ['سلول رنگدانه‌ساز پوست', 'سلول لایه پایه', 'سلول چربی', 'لنفوسیت'], 'melan/o = سیاه؛ melanocyte.'),
        T('هشدار', '«تغییر آشکار در خال» یکی از هفت نشانه هشدار CAUTION است.', true, 'O = Obvious change in wart or mole.'),
        M('پیش‌سرطان', 'کدام ضایعه احتمال تبدیل به melanoma را بیشتر می‌کند؟', ['dysplastic nevus', 'lipoma', 'hemangioma', 'fibroadenoma'], 'خال دیسپلاستیک.'),
        S('املا', 'املای «ملانوم» را بنویس', 'melanoma', 'melan/o + -oma.', 'mela…')
      ]
    },
    {
      id: 'r8', w: 'sx', title: 'چکاپ مرد ۵۵ ساله', who: 'آقای ۵۵ ساله بی‌علامت',
      brief: 'مردی سالم برای چکاپ سالانه آمده و هیچ شکایتی ندارد. پزشک چند آزمون غربالگری سرطان پیشنهاد می‌کند و تو باید هدف هر کدام را بدانی.',
      chart: [['شکایت', 'ندارد'], ['PSA', 'در حد طبیعی'], ['FOBT', 'مثبت'], ['برنامه', 'colonoscopy']],
      fig: { a: ['screening-tests'], l: ['آزمون‌های غربالگری'] },
      steps: [
        T('غربالگری', 'غربالگری یعنی آزمایش افراد سالم و بی‌نشانه برای یافتن زودهنگام سرطان.', true, 'screening.'),
        P('آزمون', 'هر آزمون را به اندامش وصل کن', [['PSA', 'پروستات'], ['FOBT', 'روده بزرگ'], ['mammography', 'پستان'], ['Pap smear', 'دهانه رحم']]),
        M('یافته', 'FOBT مثبت یعنی…', ['خون پنهان در مدفوع پیدا شده است', 'سرطان قطعی است', 'پروستات بزرگ است', 'چربی خون بالاست'], 'fecal occult blood: خون پنهان مدفوع.'),
        M('گام بعد', 'پس از FOBT مثبت، کدام بررسی انجام می‌شود؟', ['colonoscopy', 'mammography', 'bronchoscopy', 'cystoscopy'], 'دیدن کل روده بزرگ و برداشتن پولیپ.'),
        M('پیش‌سرطان', 'در کولونوسکوپی کدام ضایعه را برمی‌دارند تا سرطان پیشگیری شود؟', ['polyp', 'cyst', 'hematoma', 'nevus'], 'پولیپ روده می‌تواند به adenocarcinoma تبدیل شود.'),
        S('املا', 'املای «کولونوسکوپی» را بنویس', 'colonoscopy', 'colon/o + -scopy.', 'colono…')
      ]
    },
    /* ================= تشخیص و مرحله‌بندی ================= */
    {
      id: 'r9', w: 'dx', title: 'توده پستان', who: 'خانم ۴۹ ساله',
      brief: 'خانمی توده‌ای سفت در پستان چپ لمس کرده است. ماموگرافی ضایعه مشکوک نشان می‌دهد و برای تشخیص و مرحله‌بندی چند بررسی انجام می‌شود.',
      chart: [['mammogram', 'توده نامنظم ۲ سانتی‌متری'], ['core needle biopsy', 'invasive ductal carcinoma'], ['ER/PR', 'positive'], ['SLNB', 'negative']],
      fig: { a: ['mammogram'], l: ['ماموگرام طبیعی برای مقایسه'] },
      steps: [
        M('تشخیص', 'تشخیص قطعی سرطان با کدام روش است؟', ['biopsy', 'mammography', 'breast self-examination', 'tumor marker'], 'تنها نگاه پاتولوژیست به بافت قطعی است.'),
        M('بیوپسی', 'در core needle biopsy چه برداشته می‌شود؟', ['یک استوانه بافت با سوزن ضخیم', 'کل توده با جراحی', 'چند سلول با سوزن ظریف', 'خون سیاهرگی'], 'core = هسته، استوانه.'),
        M('گیرنده', 'ER/PR positive یعنی…', ['تومور با استروژن و پروژسترون رشد می‌کند', 'تومور به پرتو حساس است', 'غدد لنفاوی درگیرند', 'متاستاز دارد'], 'هورمون‌درمانی مؤثر است.'),
        M('غده نگهبان', 'SLNB منفی یعنی…', ['غده لنفاوی نگهبان سرطان ندارد', 'سرطان متاستاز داده است', 'بیوپسی ناموفق بوده است', 'تومور خوش‌خیم است'], 'sentinel lymph node biopsy.'),
        T('مرحله', 'تومور ۲ سانتی‌متری بدون درگیری غده و بدون متاستاز در TNM یعنی N0 و M0.', true, 'N0 = بدون غده؛ M0 = بدون متاستاز دوردست.'),
        S('املا', 'املای «ماموگرافی» را بنویس', 'mammography', 'mamm/o + -graphy.', 'mammo…')
      ]
    },
    {
      id: 'r10', w: 'dx', title: 'سرفه خونی', who: 'آقای ۶۰ ساله سیگاری',
      brief: 'مردی سیگاری با سرفه طولانی و خلط خونی مراجعه کرده است. در سی‌تی‌اسکن توده‌ای در ریه دیده می‌شود و تیم برای تشخیص و مرحله‌بندی برنامه می‌ریزد.',
      chart: [['شکایت', 'hemoptysis، dyspnea'], ['CT', 'توده ۵ سانتی‌متری ریه راست'], ['bronchoscopy + Bx', 'small cell lung cancer'], ['PET', 'غدد لنفاوی میان‌سینه درگیر']],
      fig: { a: ['tnm'], l: ['مرحله‌بندی TNM'] },
      steps: [
        M('نشانه', 'hemoptysis یعنی…', ['خلط خونی', 'تنگی نفس', 'خون در ادرار', 'اشکال در بلع'], 'hem/o (خون) + -ptysis (تف کردن).'),
        M('آندوسکوپی', 'در bronchoscopy چه چیزی دیده می‌شود؟', ['نای و نایژه‌ها', 'مری', 'مثانه', 'روده بزرگ'], 'bronch/o + -scopy.'),
        P('تصویربرداری', 'هر روش را به ویژگی‌اش وصل کن', [['CT', 'برش‌های اشعه ایکس با رایانه'], ['PET', 'قند رادیواکتیو در سلول فعال'], ['MRI', 'آهنربا و امواج رادیویی'], ['sputum cytology', 'بررسی سلول‌های خلط']]),
        M('TNM', 'در TNM حرف N چه چیزی را نشان می‌دهد؟', ['درگیری غدد لنفاوی ناحیه‌ای', 'اندازه تومور', 'متاستاز دوردست', 'درجه سلول‌ها'], 'Nodes.'),
        T('نام', 'small cell lung cancer سلول‌هایی کوچک و گرد شبیه دانه جو دارد.', true, 'oat cell cancer.'),
        S('املا', 'املای «برونکوسکوپی» را بنویس', 'bronchoscopy', 'bronch/o + -scopy.', 'broncho…')
      ]
    },
    /* ================= درمان ================= */
    {
      id: 'r11', w: 'tx', title: 'برنامه درمان سرطان پستان', who: 'همان خانم ۴۹ ساله، پس از تشخیص',
      brief: 'برای سرطان پستان مرحله اولیه با گیرنده هورمونی مثبت، تیم درمان برنامه‌ای چندمرحله‌ای پیشنهاد کرده است. باید هر گام و هدفش را بشناسی.',
      chart: [['جراحی', 'lumpectomy'], ['سپس', 'external beam radiation'], ['دارو', 'antiestrogen (tamoxifen) پنج سال'], ['هدف', 'curative']],
      fig: { a: ['lump-mast'], l: ['لامپکتومی و ماستکتومی'] },
      steps: [
        M('جراحی', 'lumpectomy یعنی…', ['برداشتن توده و کمی بافت سالم دور آن', 'برداشتن کل پستان', 'برداشتن غدد زیر بغل', 'بازسازی پستان'], 'lump = توده.'),
        M('زمان', 'پرتودرمانی پس از جراحی برای کشتن سلول‌های باقی‌مانده، چه نوع درمانی است؟', ['adjuvant therapy', 'neoadjuvant therapy', 'palliative care', 'prophylactic surgery'], 'adjuvant = کمکی، پس از درمان اصلی.'),
        M('هورمون', 'tamoxifen در این بیمار چه می‌کند؟', ['اثر استروژن را بر سلول‌های سرطانی مهار می‌کند', 'سلول‌ها را با پرتو می‌کشد', 'تهوع را کم می‌کند', 'مغز استخوان را تحریک می‌کند'], 'antiestrogen.'),
        O('ترتیب', 'گام‌های درمان این بیمار را به ترتیب بچین', ['biopsy و تشخیص', 'lumpectomy', 'external beam radiation', 'hormone therapy'], 'تشخیص، جراحی، پرتودرمانی کمکی، هورمون‌درمانی.'),
        T('هدف', 'هدف این برنامه تسکینی (palliative) است.', false, 'نادرست؛ هدف درمان قطعی (curative) است.'),
        S('املا', 'املای «برداشتن پستان» را بنویس', 'mastectomy', 'mast/o + -ectomy.', 'mast…')
      ]
    },
    {
      id: 'r12', w: 'tx', title: 'لوسمی در کودکی', who: 'دختر ۶ ساله',
      brief: 'کودکی با خستگی، کبودی‌های زیاد و تب‌های مکرر آورده شده است. شمارش خون غیرطبیعی است و بررسی مغز استخوان تشخیص را قطعی می‌کند. درمان طولانی پیش رو است.',
      chart: [['CBC', 'anemia، thrombocytopenia، blast فراوان'], ['bone marrow aspiration', 'ALL'], ['درمان', 'chemotherapy چندمرحله‌ای'], ['عارضه', 'neutropenia، alopecia، mucositis']],
      fig: { a: ['marrow-crowding'], l: ['مغز استخوان در لوسمی'] },
      steps: [
        M('نام', 'ALL یعنی…', ['acute lymphocytic leukemia', 'acute myeloid leukemia', 'chronic lymphocytic leukemia', 'adult lymphoma'], 'شایع‌ترین سرطان کودکان.'),
        P('نشانه', 'هر یافته را به علتش وصل کن', [['anemia', 'خستگی و رنگ‌پریدگی'], ['thrombocytopenia', 'کبودی و خون‌ریزی'], ['neutropenia', 'عفونت‌های مکرر'], ['alopecia', 'ریزش مو']]),
        M('تشخیص', 'تشخیص قطعی لوسمی با کدام روش است؟', ['bone marrow aspiration', 'mammography', 'colonoscopy', 'PSA'], 'نمونه از مغز استخوان.'),
        M('حمایت', 'کدام دارو تهوع شیمی‌درمانی را کم می‌کند؟', ['antiemetic', 'antiestrogen', 'antiandrogen', 'immunosuppressant'], 'anti- + emesis (استفراغ).'),
        T('پیوند', 'اگر بیماری عود کند، stem cell transplant می‌تواند یک گزینه درمان باشد.', true, 'پس از شیمی‌درمانی شدید، سلول‌های بنیادی جایگزین می‌شوند.'),
        S('املا', 'املای «شیمی‌درمانی» را بنویس', 'chemotherapy', 'chem/o + -therapy.', 'chemo…')
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
    ['Lx', 'معنی واژه را از پسوند شروع کن: osteosarcoma یعنی «سرطان بافت همبندِ» + «استخوان».'],
    ['Lx', 'onc/o یعنی تومور: oncology علم تومور و سرطان است و oncologist متخصص آن.'],
    ['Lx', 'neo- یعنی نو و ‎-plasm یعنی رشد؛ neoplasm یعنی «رشد تازه»، همان تومور.'],
    ['Lx', 'جمع metastasis می‌شود metastases و جمع nevus می‌شود nevi.'],
    ['Lx', 'در apoptosis حرف p دوم بی‌صداست: «اِپوتوسیس»؛ یعنی مرگ برنامه‌ریزی‌شده سلول.'],
    ['Cell', 'سلول سرطانی دو ویژگی دارد: بی‌مهار تقسیم می‌شود و از مرگ برنامه‌ریزی‌شده (apoptosis) فرار می‌کند.'],
    ['Cell', 'hyperplasia یعنی سلول بیشتر، dysplasia یعنی سلول بدشکل و anaplasia یعنی سلول بی‌تمایز.'],
    ['Cell', 'oncogene مثل پدال گاز گیرکرده است و tumor suppressor gene مثل ترمز خراب.'],
    ['Cell', 'meta- یعنی تغییر و ‎-stasis یعنی ایستادن: metastasis یعنی سرطان «جایش را عوض کرده و جای دیگر ایستاده».'],
    ['Cell', 'سرطان ریه‌ای که به کبد رفته هنوز «سرطان ریه» است: metastatic lung cancer، نه سرطان کبد.'],
    ['Name', 'ریشه + ‎-oma معمولاً تومور خوش‌خیم است: lipoma، chondroma، osteoma.'],
    ['Name', 'بافت پوششی ← carcinoma؛ بافت همبند ← sarcoma؛ مغز استخوان ← leukemia؛ لنفوسیت‌ها ← lymphoma.'],
    ['Name', 'melanoma و lymphoma با وجود ‎-oma همیشه بدخیم‌اند؛ hematoma اصلاً تومور نیست!'],
    ['Name', 'my/o ماهیچه است و myel/o مغز استخوان؛ myoma تومور ماهیچه و myeloma سرطان مغز استخوان.'],
    ['Name', 'leiomyoma رحم را در زبان روزمره fibroid (فیبروم) می‌نامند.'],
    ['Name', 'Wilms tumor استثنای نام‌گذاری است: با این‌که تومور جنینی کلیه است، nephroblastoma نامیده نمی‌شود.'],
    ['Sx', 'hem/o + ‎-ptysis یعنی خلط خونی (سرطان ریه) و hemat/o + ‎-uria یعنی خون در ادرار (مثانه و کلیه).'],
    ['Sx', 'خالی که اندازه، رنگ یا شکلش عوض می‌شود باید معاینه شود؛ قاعده ABCDE را به خاطر بسپار.'],
    ['Sx', 'گرفتگی صدای بیش از یک هفته نشانه هشدار سرطان حنجره است.'],
    ['Sx', 'غربالگری یعنی آزمایش افراد سالم و بی‌نشانه؛ هدف پیدا کردن سرطان پیش از بروز علائم است.'],
    ['Sx', 'fecal = مدفوع و occult = پنهان؛ FOBT خون پنهان مدفوع را برای سرطان روده پیدا می‌کند.'],
    ['Dx', 'تشخیص قطعی سرطان با biopsy و نگاه پاتولوژیست زیر میکروسکوپ است، نه با عکس.'],
    ['Dx', 'grade یعنی سلول‌ها چقدر بدشکل‌اند؛ stage یعنی سرطان چقدر پیش رفته است.'],
    ['Dx', 'در TNM، حرف T اندازه تومور، N غدد لنفاوی و M متاستاز دوردست است.'],
    ['Dx', 'sentinel lymph node اولین غده‌ای است که سرطان به آن می‌رسد؛ اگر پاک باشد، بقیه هم احتمالاً پاک‌اند.'],
    ['Rx', '‎-ectomy برداشتن است، ‎-tomy برش و ‎-stomy ساختن دهانه: mastectomy، thoracotomy، colostomy.'],
    ['Rx', 'brachy- یعنی نزدیک: در brachytherapy منبع پرتو را درست کنار تومور می‌گذارند.'],
    ['Rx', 'neoadjuvant پیش از جراحی است و adjuvant پس از آن.'],
    ['Rx', 'palliative یعنی تسکینی: هدف کم کردن درد و علائم است، نه درمان قطعی.'],
    ['Rx', 'شیمی‌درمانی به سلول‌های تندتقسیم آسیب می‌زند؛ برای همین مو، مخاط دهان و مغز استخوان آسیب می‌بینند.']
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
    const M = { id: D.id, bit: D.bit, start: D.startWorld, prefix: D.codePrefix, nameFa: D.nameFa, nameEn: D.nameEn, titleFa: D.titleFa, titleEn: D.titleEn,
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
/* مهار — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مرجع سریع سرطان
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'mahar.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: 'واژه‌نامه', color: '#2F5FD0' },
    { id: 'parse', sym: '✂', name: 'تجزیه‌گر واژه', color: '#7B5CE0' },
    { id: 'roots', sym: '-o-', name: 'ریشه‌ها و پسوندها', color: '#12A594' },
    { id: 'abbr', sym: 'RUQ', name: 'اختصارها', color: '#1899D6' },
    { id: 'ref', sym: '🧭', name: 'مرجع سریع', color: '#E5A500' }
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
      <header class="vhead"><h1>ابزارها</h1><p>واژه‌نامه کامل ${fa(L().TERMS.length)} واژه، ${fa(L().ROOTS.length)} جزء واژه و ${fa(L().ABBR.length)} اختصار؛ همه بدون اینترنت.</p></header>
      <div class="ttabs" role="tablist">${TOOLS.map(x => `<button class="ttab ${x.id === cur ? 'is-on' : ''}" data-tool="${x.id}" style="--tc:${x.color}" role="tab" aria-selected="${x.id === cur}"><span class="ttab__s">${x.sym}</span>${x.name}</button>`).join('')}</div>
      <div class="tcard">${PANES[cur]()}</div>
      <p class="disclaimer">⚕️ مهار ابزار آموزشی است و جایگزین منابع پزشکی و قضاوت بالینی نیست.</p>
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
  const dict = () => `<div class="tpane">${searchBox('جست‌وجو: biopsy، تومور، sarcoma…')}
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
  const SAMPLES = ['osteosarcoma', 'carcinogenesis', 'lymphadenopathy', 'leiomyoma', 'retinoblastoma', 'thrombocytopenia', 'mastectomy', 'antineoplastic'];
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
    return `<div class="tpane">${searchBox('جست‌وجو: carcin، سرطان، \u200e-oma\u200e…')}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]}‌ها <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b dir="ltr">${esc(r.a)}</b><span>${esc(r.fa)}</span><small dir="ltr">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox('جست‌وجو: PSA، لوسمی، TNM…')}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>اختصار</th><th>شکل کامل و معنی</th></tr>${list.map(a => `<tr><td dir="ltr">${esc(a.a)}</td><td><span dir="ltr" class="abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  /* مرجع سریع: جدول‌های پرکاربرد آناتومی که هنگام خواندن پرونده لازم می‌شوند */
  const REF = [
    ['نام‌گذاری تومور', [['root + -oma', 'تومور خوش‌خیم: adenoma، lipoma، osteoma'], ['root + -carcinoma', 'سرطان بافت پوششی: adenocarcinoma'], ['root + -sarcoma', 'سرطان بافت همبند: osteosarcoma، liposarcoma'], ['root + -blastoma', 'تومور سلول‌های جنینی: retinoblastoma'], ['leukemia / lymphoma', 'سرطان خون / سرطان دستگاه لنفاوی'], ['melanoma، lymphoma', 'با وجود ‎-oma، همیشه بدخیم‌اند']]],
    ['خوش‌خیم یا بدخیم؟', [['differentiation', 'خوش‌خیم: خوب تمایزیافته • بدخیم: کم‌تمایز'], ['growth', 'خوش‌خیم: آهسته و با فشار • بدخیم: تند و با نفوذ'], ['capsule', 'خوش‌خیم: اغلب کپسول‌دار • بدخیم: بدون کپسول'], ['spread', 'خوش‌خیم: موضعی • بدخیم: متاستاز از راه خون و لنف']]],
    ['تغییرات سلول', [['hyperplasia', 'سلول بیشتر، ظاهر طبیعی'], ['metaplasia', 'تبدیل یک نوع سلول بالغ به نوع دیگر'], ['dysplasia', 'سلول نابه‌هنجار؛ پیش‌سرطانی'], ['carcinoma in situ', 'سرطان درجا؛ هنوز بدون تهاجم'], ['invasive carcinoma', 'سرطان مهاجم به بافت اطراف']]],
    ['مرحله‌بندی TNM', [['T', 'اندازه و گسترش تومور اولیه (T0 تا T4؛ Tis = درجا)'], ['N', 'درگیری غدد لنفاوی ناحیه‌ای (N0 تا N3)'], ['M', 'متاستاز دوردست (M0 ندارد، M1 دارد)'], ['stage 0 → IV', 'از درجا تا متاستاز دوردست']]],
    ['پسوندهای جراحی', [['-ectomy', 'برداشتن: mastectomy'], ['-tomy', 'برش: thoracotomy'], ['-stomy', 'ساختن دهانه: colostomy'], ['-scopy', 'دیدن با آندوسکوپ: colonoscopy'], ['-opsy', 'دیدن: biopsy']]],
    ['رویکرد درمان', [['curative', 'با هدف درمان قطعی'], ['palliative', 'تسکین علائم، بدون درمان قطعی'], ['prophylactic', 'پیشگیرانه'], ['neoadjuvant', 'پیش از جراحی'], ['adjuvant', 'پس از جراحی']]]
  ];


  const ref = () => `<div class="tpane"><p class="muted">جدول‌های پرکاربرد برای خواندن پرونده و گزارش تصویربرداری.</p>
    ${REF.map(g => `<h3 class="tgh">${g[0]}</h3><table class="mini ref"><tr><th>واژه</th><th>معنی</th></tr>${g[1].map(r => `<tr><td dir="ltr" class="ref__v">${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`).join('')}
    ${EA.ui.figCard({ a: ['tissue-map'], l: ['بافت و نام سرطان'] })}</div>`;

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
