/* Therapo • ترمینو — حیطه «hormona» (Endocrine System)
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
  EA.APP = { name: 'هورمونا', key: 'hormona', title: 'هورمونا • ترمینولوژی غدد درون‌ریز' };

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
    name: 'هورمونا', key: 'hormona', title: 'هورمونا • ترمینولوژی غدد درون‌ریز', certCode: 'HM',
    subject: 'ترمینولوژی پزشکی دستگاه درون‌ریز (غدد و هورمون‌ها)',
    kicker: '🦋 ترمینولوژی پزشکی: دستگاه درون‌ریز، غدد و هورمون‌ها',
    hello: 'سلام، من <b>هورمونا</b> هستم؛',
    landP: () => `سلام، من <b>هورمونا</b> هستم؛ یک مولکول هورمون با کلید طلایی که در هر سلول هدف را باز می‌کند! این‌جا واژه‌ها را حفظ نمی‌کنی؛ <b>رمزگشایی</b>‌شان می‌کنی: ریشه، پیشوند و پسوند را می‌شناسی و هر واژه تازه را خودت می‌خوانی. ${fa(EA.lex.TERMS.length)} واژه با تلفظ و معنی فارسی، ${fa(Object.keys(EA.IMG).length + EA.ART_KEYS.length)} تصویر و شکل آموزشی، ${fa(EA.rounds.length)} پرونده بالینی و کارت‌های لایتنر منتظرت هستند.`,
    disclaimer: 'هورمونا ابزار آموزشی است و جایگزین قضاوت بالینی، دستور پزشک یا مرجع آزمایشگاه نیست.',
    eyes: 'ده‌ها شکل دوزبانه و تصویر بالینی؛ از نقشه غدد و بازخورد منفی تا گواتر، آکرومگالی و سندرم کوشینگ.',
    outcomes: [
          'هر واژه دستگاه درون‌ریز را به پیشوند، ریشه و پسوند بشکنی و معنی‌اش را بگویی',
          'جای هر غده، هورمون‌هایش و بافت هدفشان را روی نقشه بدن نشان دهی',
          'محور هیپوتالاموس و هیپوفیز و بازخورد منفی را توضیح دهی',
          'بیماری‌های تیروئید، پاراتیروئید و فوق‌کلیه را از روی «زیاد یا کمِ» هورمون بشناسی',
          'انواع دیابت، آزمایش‌های قند، عوارض و درمان‌هایش را با واژه‌های درست توصیف کنی',
          'برگه آزمایش، اختصارها، جراحی‌ها و داروهای غدد را در پرونده بیمار بخوانی'
        ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، واژه‌های غدد و هورمون‌ها را مثل زبان مادری می‌خوانی.',
    obHello: 'سلام! من هورمونا هستم؛ مولکول هورمونی که کلید سلول‌ها را دارد 🔑 اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان هورمون‌ها» بهترین شروع است؛ کلیات دستگاه و ریشه‌های پایه آن‌جا یاد داده می‌شوند!',
    demo: () => ({
    q: 'واژه <b dir="ltr">hypoglycemia</b> یعنی…',
    fig: { a: ['glucose-balance'], l: ['insulin ↓ • glucagon ↑'] },
    opts: ['پایین بودن قند خون', 'بالا بودن قند خون', 'قند در ادرار', 'کمبود انسولین'],
    why: `${EA.K.wb('hypo-', 'glyc/o', '-emia')}<br><b>hypo-</b> = کمتر از حد، <b>glyc/o</b> = قند، <b>-emia</b> = وضعیت خون. پس <b>قند خون پایین</b>؛ همان افتی که با انسولین زیاد یا گرسنگی پیش می‌آید. معنی را از پسوند شروع کن!`
  }),
    titles: ['پیام‌رسان تازه', 'گیرنده کنجکاو', 'کلید جوان', 'نگهبان هومئوستاز', 'رمزگشای ریشه‌ها', 'استاد بازخورد منفی', 'شکارچی hyper و hypo',
    'رهبر ارکستر هیپوفیز', 'نگهبان پروانه گردن', 'استاد کلسیم', 'فرمانده فوق‌کلیه', 'کارآگاه دیابت', 'استاد واژه‌سازی', 'افسانه اندوکرینولوژی', 'اسطوره ترمینولوژی'],
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'دانشجوی علوم آزمایشگاهی', 'کارشناس علوم آزمایشگاهی', 'دانشجوی تغذیه', 'پرستار ICU', 'کارشناس تغذیه بالینی', 'رزیدنت داخلی', 'دانشجوی مامایی', 'دانشجوی داروسازی', 'کارشناس اتاق عمل', 'پرستار بخش غدد', 'آموزش‌دهنده دیابت'],
    firstBadge: ['📨', 'اولین پیام'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], hp: ['👑', 'فرمانده هیپوفیز'], th: ['🦋', 'نگهبان پروانه'], ad: ['🎩', 'سلطان استرس'], pa: ['🔑', 'کلیددار قند'], dx: ['🔬', 'کارآگاه هورمون‌ها'] },
    confetti: ['#6C3FD1', '#0FA3A3', '#FFC800', '#1E88E5', '#8E44D9', '#E8892B', '#D94F7B', '#58CC02'],
    obRoles: [['دانشجوی پزشکی', ''], ['دانشجوی پرستاری یا مامایی', ''], ['علوم آزمایشگاهی', ''], ['تغذیه', ''], ['پرستار یا پزشک', ''], ['سایر', '']],
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
  EA.TERMS_RAW = [["acidosis", "ass-ih-DOH-sis", "Increased acidity (reduced alkalinity) of the blood and body fluids.", "اسیدوز", "pa", "Pathology_and_Disorders", []],
["acromegaly", "ak-roh-MEG-ah-lee", "Enlargement of the bones of the hands, feet, jaw and face caused by excess growth hormone after puberty (acr/o = extremities, -megaly = enlargement).", "آکرومگالی (بزرگی انتهاها)", "hp", "Pathology_and_Disorders", []],
["Adam's apple", "AD-amz AP-el", "The prominence on the front of the neck formed by the thyroid cartilage.", "سیب آدم", "th", "Anatomy_and_Physiology", []],
["Addison disease", "AD-ih-son dih-ZEEZ", "Hypofunction of the adrenal cortex with low cortisol and aldosterone: weakness, weight loss, low blood pressure, hypoglycemia and bronze skin.", "بیماری آدیسون", "ad", "Pathology_and_Disorders", []],
["adenectomy", "ad-eh-NEK-toh-mee", "Surgical removal (excision) of a gland.", "برداشتن غده", "lx", "Pharmacology_and_Treatment", []],
["adenitis", "ad-eh-NY-tis", "Inflammation of a gland.", "التهاب غده", "lx", "Pathology_and_Disorders", []],
["adenocarcinoma", "ad-eh-noh-kar-sih-NOH-mah", "A cancerous tumor of a gland.", "آدنوکارسینوم (سرطان غده)", "lx", "Pathology_and_Disorders", []],
["adenogenous", "ad-eh-NOJ-eh-nus", "Originating in a gland.", "با منشأ غده‌ای", "lx", "Anatomy_and_Physiology", []],
["adenohypophysis", "AD-eh-noh-high-POF-ih-sis", "The anterior lobe of the pituitary gland, which makes GH, TSH, ACTH, FSH, LH and prolactin.", "هیپوفیز قدامی (آدنوهیپوفیز)", "hp", "Anatomy_and_Physiology", []],
["adenohypophysitis", "AD-eh-noh-high-pof-ih-SY-tis", "Inflammation of the anterior pituitary, often related to pregnancy.", "التهاب هیپوفیز قدامی", "hp", "Pathology_and_Disorders", []],
["adenoma", "ad-eh-NOH-mah", "A benign (noncancerous) tumor of glandular tissue; a common cause of hypersecretion.", "آدنوم (تومور خوش‌خیم غده)", "lx", "Pathology_and_Disorders", []],
["adenomectomy", "ad-eh-noh-MEK-toh-mee", "Surgical removal of an adenoma, such as a pituitary tumor.", "برداشتن آدنوم", "hp", "Pharmacology_and_Treatment", []],
["adenopathy", "ad-eh-NOP-ah-thee", "Any disease of a gland (often used for enlarged lymph nodes).", "بیماری غده", "lx", "Pathology_and_Disorders", []],
["adenotomy", "ad-eh-NOT-oh-mee", "Incision into a gland.", "برش غده", "lx", "Pharmacology_and_Treatment", []],
["adrenal", "ah-DREE-nal", "Pertaining to the adrenal glands.", "فوق‌کلیوی", "ad", "Anatomy_and_Physiology", []],
["adrenal cortex", "ah-DREE-nal KOR-teks", "The outer region of the adrenal gland that secretes corticosteroids (cortex = bark).", "قشر فوق‌کلیه", "ad", "Anatomy_and_Physiology", []],
["adrenal feminization", "ah-DREE-nal fem-ih-nih-ZAY-shun", "Female secondary sex characteristics in a male caused by excess adrenal estrogen.", "زنانه‌شدن فوق‌کلیوی", "ad", "Pathology_and_Disorders", []],
["adrenal glands", "ah-DREE-nal GLANDZ", "Two triangular glands on top of the kidneys, each with an outer cortex and an inner medulla (ad- = near, ren/o = kidney).", "غدد فوق‌کلیه", "ad", "Anatomy_and_Physiology", []],
["adrenal insufficiency", "ah-DREE-nal in-suh-FISH-en-see", "Inadequate secretion of adrenal cortex hormones; Addison disease.", "نارسایی فوق‌کلیه", "ad", "Pathology_and_Disorders", []],
["adrenal medulla", "ah-DREE-nal meh-DULL-ah", "The inner region of the adrenal gland that secretes epinephrine and norepinephrine (medulla = marrow).", "مرکز فوق‌کلیه (مدولا)", "ad", "Anatomy_and_Physiology", []],
["adrenal virilism", "ah-DREE-nal VIR-ih-lizm", "Male secondary sex characteristics in a female caused by excess adrenal androgens.", "ویریلیسم فوق‌کلیوی", "ad", "Pathology_and_Disorders", []],
["adrenalectomy", "ah-dree-nal-EK-toh-mee", "Surgical removal of one or both adrenal glands.", "برداشتن فوق‌کلیه", "ad", "Pharmacology_and_Treatment", []],
["adrenaline", "ah-DREN-ah-lin", "Epinephrine.", "آدرنالین", "ad", "Anatomy_and_Physiology", []],
["adrenalitis", "ah-dree-nal-EYE-tis", "Inflammation of one or both adrenal glands.", "التهاب فوق‌کلیه", "ad", "Pathology_and_Disorders", []],
["adrenergic", "ad-ren-ER-jik", "Activated by or related to epinephrine (adrenaline).", "آدرنرژیک", "ad", "Anatomy_and_Physiology", []],
["adrenocortical", "ah-dree-noh-KOR-tih-kal", "Pertaining to the adrenal cortex.", "مربوط به قشر فوق‌کلیه", "ad", "Anatomy_and_Physiology", []],
["adrenocorticotropic hormone", "ah-dree-noh-kor-tih-koh-TROH-pik HOR-mohn", "Anterior pituitary hormone that stimulates the adrenal cortex to secrete cortisol.", "هورمون محرک قشر فوق‌کلیه", "hp", "Anatomy_and_Physiology", ["ACTH"]],
["adrenogenital syndrome", "ah-dree-noh-JEN-ih-tal SIN-drohm", "Overproduction of adrenal androgens causing masculinization; congenital or from an adrenal tumor.", "سندرم آدرنوژنیتال", "ad", "Pathology_and_Disorders", []],
["adrenomegaly", "ah-dree-noh-MEG-ah-lee", "Enlargement of one or both adrenal glands.", "بزرگی فوق‌کلیه", "ad", "Pathology_and_Disorders", []],
["adrenopathy", "ad-ren-OP-ah-thee", "Any disease of the adrenal glands; adrenalopathy.", "بیماری فوق‌کلیه", "ad", "Pathology_and_Disorders", []],
["aldosterone", "al-DOS-ter-ohn", "Mineralocorticoid that makes the kidneys keep sodium and water and excrete potassium.", "آلدوسترون", "ad", "Anatomy_and_Physiology", []],
["alpha cells", "AL-fah SELZ", "Islet cells that produce glucagon.", "سلول‌های آلفا", "pa", "Anatomy_and_Physiology", []],
["amenorrhea", "ay-men-oh-REE-ah", "Absence of menstrual periods in a woman of reproductive age.", "قطع قاعدگی (آمنوره)", "dx", "Pathology_and_Disorders", []],
["amino acid hormone", "ah-MEE-noh AS-id HOR-mohn", "A hormone made of amino acids (proteins and protein-like compounds), such as insulin and epinephrine.", "هورمون آمینواسیدی (پروتئینی)", "lx", "Anatomy_and_Physiology", []],
["androgen", "AN-droh-jen", "A male hormone, such as testosterone, made by the testes and the adrenal cortex (andr/o = male, -gen = producing).", "آندروژن", "ad", "Anatomy_and_Physiology", []],
["anorexia", "an-oh-REK-see-ah", "Lack or loss of appetite for food.", "بی‌اشتهایی", "lx", "Pathology_and_Disorders", []],
["antidiabetics", "an-tee-dye-ah-BET-iks", "Drugs that help control blood sugar in diabetes.", "داروهای ضددیابت", "pa", "Pharmacology_and_Treatment", []],
["antidiuretic hormone", "an-tee-dye-yoo-RET-ik HOR-mohn", "Hormone made in the hypothalamus and released by the posterior pituitary that makes the kidneys reabsorb water; vasopressin.", "هورمون ضدادراری", "hp", "Anatomy_and_Physiology", ["ADH"]],
["antihyperglycemic", "an-tee-high-per-gly-SEE-mik", "A drug that lowers high blood sugar.", "ضد افزایش قند", "pa", "Pharmacology_and_Treatment", []],
["antihypoglycemic", "an-tee-high-poh-gly-SEE-mik", "An agent that raises low blood sugar.", "ضد افت قند", "pa", "Pharmacology_and_Treatment", []],
["antithyroid agents", "an-tee-THIGH-royd AY-jents", "Drugs that block thyroid hormone production in hyperthyroidism, such as methimazole and propylthiouracil.", "داروهای ضدتیروئید", "th", "Pharmacology_and_Treatment", []],
["aquaretics", "ak-wah-RET-iks", "Drugs that increase water excretion without losing sodium, used to treat hyponatremia (aqua = water).", "آکوارتیک‌ها (دفع‌کننده آب)", "dx", "Pharmacology_and_Treatment", []],
["basal metabolic rate", "BAY-sal met-ah-BOL-ik RAYT", "The minimum rate of metabolism needed to support body functions at rest; set mainly by thyroid hormone.", "سوخت‌وساز پایه", "th", "Anatomy_and_Physiology", ["BMR"]],
["beta cells", "BAY-tah SELZ", "Islet cells that produce insulin.", "سلول‌های بتا", "pa", "Anatomy_and_Physiology", []],
["blood serum test", "BLUD SEER-um TEST", "Blood test measuring hormones, electrolytes, calcium and glucose to evaluate endocrine glands.", "آزمایش سرم خون", "dx", "Laboratory_and_Diagnostics", []],
["blood sugar", "BLUD SHUG-ar", "The level of glucose in the blood; blood glucose.", "قند خون", "pa", "Laboratory_and_Diagnostics", ["BS"]],
["bolus", "BOH-lus", "A single large dose of a drug, such as a mealtime insulin dose.", "دوز یکجا (بولوس)", "pa", "Pharmacology_and_Treatment", []],
["buffalo hump", "BUF-ah-loh HUMP", "A fat deposit on the upper back seen in Cushing syndrome.", "کوهان بوفالویی", "ad", "Pathology_and_Disorders", []],
["cachexia", "kah-KEK-see-ah", "Severe wasting, malnutrition and emaciation, seen in some pituitary diseases.", "کاشکسی (تحلیل شدید بدن)", "hp", "Pathology_and_Disorders", []],
["calcitonin", "kal-sih-TOH-nin", "Thyroid hormone that lowers blood calcium by moving calcium into bone.", "کلسی‌تونین", "th", "Anatomy_and_Physiology", ["CT"]],
["calcium", "KAL-see-um", "Mineral needed for bones, muscles and nerves; its blood level is set by PTH and calcitonin.", "کلسیم", "th", "Anatomy_and_Physiology", []],
["catecholamines", "kat-eh-KOH-lah-meenz", "Adrenal medulla hormones (epinephrine and norepinephrine) released in response to stress.", "کاتکول‌آمین‌ها", "ad", "Anatomy_and_Physiology", []],
["chemical thyroidectomy", "KEM-ih-kal thigh-royd-EK-toh-mee", "Destroying thyroid cells with a large dose of radioactive iodine instead of surgery.", "تیروئیدکتومی شیمیایی", "th", "Pharmacology_and_Treatment", []],
["circadian rhythm", "ser-KAY-dee-an RITH-um", "The 24-hour body clock that governs wakefulness and sleep.", "ریتم شبانه‌روزی", "dx", "Anatomy_and_Physiology", []],
["colloid", "KOL-oyd", "The jellylike fluid in the tiny sacs (follicles) of the thyroid where thyroid hormones are stored.", "کلوئید", "th", "Anatomy_and_Physiology", []],
["computed tomography", "kom-PYOO-ted toh-MOG-rah-fee", "Cross-sectional X-ray imaging of the pituitary, adrenals and other organs; CT or CAT scan.", "سی‌تی‌اسکن", "dx", "Laboratory_and_Diagnostics", []],
["congenital", "kon-JEN-ih-tal", "Existing at birth.", "مادرزادی", "lx", "Pathology_and_Disorders", []],
["congenital adrenal hyperplasia", "kon-JEN-ih-tal ah-DREE-nal high-per-PLAY-zhah", "Inherited enzyme defect that lowers cortisol and raises androgens, causing virilization in girls and early puberty in boys.", "هایپرپلازی مادرزادی فوق‌کلیه", "ad", "Pathology_and_Disorders", ["CAH"]],
["congenital hypothyroidism", "kon-JEN-ih-tal high-poh-THIGH-royd-izm", "Lack of thyroid hormone from birth that arrests physical and mental growth; formerly called cretinism.", "کم‌کاری مادرزادی تیروئید", "th", "Pathology_and_Disorders", []],
["Conn syndrome", "KON SIN-drohm", "Hyperaldosteronism caused by an adrenal tumor.", "سندرم کان", "ad", "Pathology_and_Disorders", []],
["convulsions", "kon-VUL-shunz", "Involuntary muscle contractions; a sign of disorders of calcium metabolism.", "تشنج", "th", "Pathology_and_Disorders", []],
["corpus luteum", "KOR-pus LOO-tee-um", "The yellow body formed from a ruptured ovarian follicle; it secretes progesterone.", "جسم زرد", "dx", "Anatomy_and_Physiology", []],
["corticosteroids", "kor-tih-koh-STER-oydz", "Steroid hormones of the adrenal cortex: glucocorticoids, mineralocorticoids and sex hormones; also used as anti-inflammatory drugs.", "کورتیکواستروئیدها", "ad", "Anatomy_and_Physiology", []],
["cortisol", "KOR-tih-sol", "The main glucocorticoid; it helps the body cope with stress, raises blood glucose and inhibits inflammation; hydrocortisone.", "کورتیزول", "ad", "Anatomy_and_Physiology", []],
["craniopharyngioma", "kray-nee-oh-fah-rin-jee-OH-mah", "A benign tumor near the pituitary gland (crani/o = skull, pharyng/o = pharynx, -oma = tumor).", "کرانیوفارنژیوما", "hp", "Pathology_and_Disorders", []],
["cretinism", "KREE-tin-izm", "Old term for congenital hypothyroidism.", "کرتینیسم (نام قدیمی)", "th", "Pathology_and_Disorders", []],
["Cushing disease", "KUSH-ing dih-ZEEZ", "Cushing syndrome caused by excess ACTH from a pituitary tumor.", "بیماری کوشینگ", "ad", "Pathology_and_Disorders", []],
["Cushing syndrome", "KUSH-ing SIN-drohm", "Condition caused by excess cortisol: moon face, buffalo hump, truncal obesity, purple striae, hirsutism and hypertension.", "سندرم کوشینگ", "ad", "Pathology_and_Disorders", []],
["diabetes insipidus", "dye-ah-BEE-teez in-SIP-ih-dus", "Disorder caused by insufficient ADH, producing large amounts of very dilute urine and excessive thirst (insipidus = tasteless).", "دیابت بی‌مزه", "hp", "Pathology_and_Disorders", ["DI"]],
["diabetes mellitus", "dye-ah-BEE-teez MEL-ih-tus", "Disorder of glucose metabolism from lack of insulin or resistance to it, causing hyperglycemia and glycosuria (mellitus = honey-sweet).", "دیابت شیرین", "pa", "Pathology_and_Disorders", ["DM"]],
["diabetic coma", "dye-ah-BET-ik KOH-mah", "Unconsciousness caused by severe uncontrolled diabetes.", "کمای دیابتی", "pa", "Pathology_and_Disorders", []],
["diabetic nephropathy", "dye-ah-BET-ik neh-FROP-ah-thee", "Kidney damage from diabetes that may lead to kidney failure and dialysis.", "نفروپاتی دیابتی", "pa", "Pathology_and_Disorders", []],
["diabetic neuropathy", "dye-ah-BET-ik noo-ROP-ah-thee", "Nerve damage from diabetes causing loss of sensation, numbness or tingling.", "نوروپاتی دیابتی", "pa", "Pathology_and_Disorders", []],
["diabetic retinopathy", "dye-ah-BET-ik ret-ih-NOP-ah-thee", "Damage to the blood vessels of the retina from diabetes, which may lead to blindness.", "رتینوپاتی دیابتی", "pa", "Pathology_and_Disorders", []],
["diaphoresis", "dye-ah-foh-REE-sis", "Profuse sweating; often seen in hypoglycemia.", "تعریق شدید", "pa", "Pathology_and_Disorders", []],
["ductless gland", "DUKT-less GLAND", "Another name for an endocrine gland; it has no duct and secretes directly into the blood.", "غده بدون مجرا", "lx", "Anatomy_and_Physiology", []],
["dwarfism", "DWORF-izm", "Abnormally short stature, for example from lack of growth hormone in childhood.", "کوتاه‌قدی (کوتولگی)", "hp", "Pathology_and_Disorders", []],
["edema", "eh-DEE-mah", "Excess fluid in body tissues causing swelling.", "ادم (خیز)", "lx", "Pathology_and_Disorders", []],
["electrolytes", "ee-LEK-troh-lyts", "Mineral salts such as sodium, potassium and calcium in blood and tissues that conduct electricity.", "الکترولیت‌ها", "ad", "Anatomy_and_Physiology", []],
["emaciation", "ee-may-see-AY-shun", "Excessive leanness; a wasted condition.", "لاغری مفرط", "pa", "Pathology_and_Disorders", []],
["endocrine", "EN-doh-krin", "Pertaining to a ductless gland that secretes hormones directly into the bloodstream (endo- = within, crin/o = to secrete).", "درون‌ریز", "lx", "Anatomy_and_Physiology", []],
["endocrine gland", "EN-doh-krin GLAND", "A ductless gland that releases its hormones directly into the blood.", "غده درون‌ریز", "lx", "Anatomy_and_Physiology", []],
["endocrinologist", "en-doh-krih-NOL-oh-jist", "A physician who specializes in diagnosing and treating endocrine disorders.", "متخصص غدد (اندوکرینولوژیست)", "lx", "Anatomy_and_Physiology", []],
["endocrinology", "en-doh-krih-NOL-oh-jee", "The branch of medicine dealing with the endocrine glands and hormone disorders.", "غدد درون‌ریز (اندوکرینولوژی)", "lx", "Anatomy_and_Physiology", []],
["endocrinopathy", "en-doh-krih-NOP-ah-thee", "Any disease of the endocrine glands.", "بیماری غدد درون‌ریز", "lx", "Pathology_and_Disorders", []],
["epinephrine", "ep-ih-NEF-rin", "Adrenal medulla hormone that raises heart rate, blood pressure, breathing and blood glucose in stress; adrenaline (epi- = upon, nephr/o = kidney).", "اپی‌نفرین", "ad", "Anatomy_and_Physiology", []],
["estradiol", "es-trah-DYE-ol", "The most potent estrogen; measured in blood to evaluate ovarian function.", "استرادیول", "dx", "Laboratory_and_Diagnostics", []],
["estrogen", "ES-troh-jen", "Female sex hormone that develops female characteristics and regulates the menstrual cycle (estr/o = female).", "استروژن", "dx", "Anatomy_and_Physiology", []],
["estrogen receptor test", "ES-troh-jen ree-SEP-tor TEST", "Test of a cancer's response to estrogen that shows whether hormonal treatment will help.", "آزمون گیرنده استروژن", "dx", "Laboratory_and_Diagnostics", []],
["euthyroid", "yoo-THIGH-royd", "Having a normally functioning thyroid gland (eu- = good, normal).", "تیروئید طبیعی (یوتیروئید)", "th", "Anatomy_and_Physiology", []],
["exocrine gland", "EK-soh-krin GLAND", "A gland that delivers its secretions through a duct onto the skin or into a body cavity, such as sweat and salivary glands.", "غده برون‌ریز", "lx", "Anatomy_and_Physiology", []],
["exophthalmic goiter", "ek-sof-THAL-mik GOY-ter", "Goiter with protruding eyeballs; Graves disease.", "گواتر اگزوفتالمیک", "th", "Pathology_and_Disorders", []],
["exophthalmos", "ek-sof-THAL-mos", "Abnormal protrusion of the eyeballs caused by swelling behind the eyes, as in Graves disease (ex- = outward, ophthalm/o = eye).", "بیرون‌زدگی چشم (اگزوفتالمی)", "th", "Pathology_and_Disorders", []],
["fasting blood sugar", "FAS-ting BLUD SHUG-ar", "Blood glucose measured after fasting at least 8 hours; 126 mg/dL or higher suggests diabetes.", "قند خون ناشتا", "pa", "Laboratory_and_Diagnostics", ["FBS", "FBG", "FPG"]],
["fight-or-flight response", "FYT or FLYT ree-SPONS", "The body's rapid reaction to danger driven by epinephrine and norepinephrine.", "پاسخ جنگ یا گریز", "ad", "Anatomy_and_Physiology", []],
["follicle-stimulating hormone", "FOL-ih-kl STIM-yoo-lay-ting HOR-mohn", "Gonadotropin that stimulates growth of ovarian follicles (eggs) in females and sperm production in males.", "هورمون محرک فولیکول", "hp", "Anatomy_and_Physiology", ["FSH"]],
["free thyroxine index", "FREE thigh-ROK-sin IN-deks", "A value calculated from T4 and T3 uptake to diagnose thyroid dysfunction.", "شاخص تیروکسین آزاد", "th", "Laboratory_and_Diagnostics", ["FTI", "T7"]],
["galactorrhea", "gah-lak-toh-REE-ah", "Secretion of milk not related to nursing, for example from excess prolactin (galact/o = milk, -rrhea = flow).", "ترشح نابجای شیر (گالاکتوره)", "hp", "Pathology_and_Disorders", []],
["gametes", "GAM-eets", "Reproductive sex cells: ova in females and sperm in males.", "گامت‌ها (سلول‌های جنسی)", "dx", "Anatomy_and_Physiology", []],
["gestational diabetes mellitus", "jes-TAY-shun-al dye-ah-BEE-teez MEL-ih-tus", "Glucose intolerance that first appears during pregnancy and usually disappears after delivery.", "دیابت بارداری", "pa", "Pathology_and_Disorders", ["GDM"]],
["gigantism", "JYE-gan-tizm", "Abnormal overgrowth of the whole body caused by excess growth hormone before puberty; also giantism.", "غول‌پیکری (ژیگانتیسم)", "hp", "Pathology_and_Disorders", []],
["gland", "GLAND", "An organized group of cells that functions as a secretory or excretory organ (Latin glans, acorn).", "غده", "lx", "Anatomy_and_Physiology", []],
["glucagon", "GLOO-kah-gon", "Alpha-cell hormone that makes the liver release glucose, raising blood glucose.", "گلوکاگون", "pa", "Anatomy_and_Physiology", []],
["glucocorticoids", "gloo-koh-KOR-tih-koydz", "Adrenal cortex hormones, mainly cortisol, that regulate glucose metabolism and reduce inflammation.", "گلوکوکورتیکوئیدها", "ad", "Anatomy_and_Physiology", []],
["glucogenesis", "gloo-koh-JEN-eh-sis", "Production of glucose.", "تولید گلوکز", "pa", "Anatomy_and_Physiology", []],
["glucometer", "gloo-KOM-eh-ter", "A home device for measuring blood glucose from a finger stick.", "دستگاه قندسنج", "pa", "Laboratory_and_Diagnostics", []],
["gluconeogenesis", "gloo-koh-nee-oh-JEN-eh-sis", "Making new glucose from non-carbohydrate sources such as amino acids and fat.", "گلوکونئوژنز (ساخت قند تازه)", "pa", "Anatomy_and_Physiology", []],
["glucose", "GLOO-kohs", "A simple sugar; the main fuel of body cells (Greek gleukos = sweetness).", "گلوکز", "pa", "Anatomy_and_Physiology", []],
["glucose tolerance test", "GLOO-kohs TOL-er-ans TEST", "Blood glucose measured at intervals after drinking a glucose load; 200 mg/dL or higher at 2 hours indicates diabetes.", "آزمون تحمل گلوکز", "pa", "Laboratory_and_Diagnostics", ["GTT", "OGTT"]],
["glucosuria", "gloo-koh-SOO-ree-ah", "Glucose in the urine; glycosuria.", "گلوکز در ادرار", "pa", "Pathology_and_Disorders", []],
["glycated hemoglobin", "GLY-kay-ted HEE-moh-gloh-bin", "Test of glucose bound to hemoglobin that reflects average blood glucose over the previous 2 to 3 months; A1c.", "هموگلوبین گلیکوزیله (A1c)", "pa", "Laboratory_and_Diagnostics", ["HbA1c", "A1c"]],
["glycogen", "GLY-koh-jen", "The storage form of glucose in the liver and muscles.", "گلیکوژن", "pa", "Anatomy_and_Physiology", []],
["glycogenesis", "gly-koh-JEN-eh-sis", "Formation of glycogen from glucose, promoted by insulin.", "گلیکوژن‌سازی", "pa", "Anatomy_and_Physiology", []],
["glycogenolysis", "gly-koh-jeh-NOL-ih-sis", "Breakdown of glycogen to form glucose, promoted by glucagon.", "گلیکوژنولیز (تجزیه گلیکوژن)", "pa", "Anatomy_and_Physiology", []],
["glycolysis", "gly-KOL-ih-sis", "Breakdown of sugar (glucose) to release energy.", "گلیکولیز (تجزیه قند)", "pa", "Anatomy_and_Physiology", []],
["glycosuria", "gly-koh-SOO-ree-ah", "Glucose in the urine.", "قند در ادرار", "pa", "Pathology_and_Disorders", []],
["goiter", "GOY-ter", "Enlargement of the thyroid gland, seen as swelling in the front of the neck.", "گواتر", "th", "Pathology_and_Disorders", []],
["gonadocorticoids", "goh-nad-oh-KOR-tih-koydz", "Sex hormones (androgens and estrogens) secreted in small amounts by the adrenal cortex.", "گنادوکورتیکوئیدها", "ad", "Anatomy_and_Physiology", []],
["gonadotropins", "goh-nad-oh-TROH-pinz", "Pituitary hormones (FSH and LH) that stimulate the gonads.", "گنادوتروپین‌ها (محرک‌های غدد جنسی)", "hp", "Anatomy_and_Physiology", []],
["gonads", "GOH-nadz", "The sex glands (ovaries and testes) that produce gametes and sex hormones.", "غدد جنسی", "dx", "Anatomy_and_Physiology", []],
["Graves disease", "GRAYVZ dih-ZEEZ", "Autoimmune disorder in which antibodies stimulate the thyroid, causing hyperthyroidism, goiter and exophthalmos; diffuse toxic goiter.", "بیماری گریوز", "th", "Pathology_and_Disorders", []],
["growth hormone", "GROHTH HOR-mohn", "Anterior pituitary hormone that stimulates growth of bones, muscles and other tissues; somatotropin.", "هورمون رشد", "hp", "Anatomy_and_Physiology", ["GH", "hGH"]],
["gynecomastia", "gy-neh-koh-MAS-tee-ah", "Development of breast tissue in a male (gynec/o = female, mast/o = breast).", "بزرگی پستان در مرد (ژنیکوماستی)", "ad", "Pathology_and_Disorders", []],
["Hashimoto thyroiditis", "hah-shee-MOH-toh thigh-roy-DYE-tis", "Chronic autoimmune (lymphocytic) thyroiditis; the most common cause of hypothyroidism.", "تیروئیدیت هاشیموتو", "th", "Pathology_and_Disorders", []],
["hirsutism", "HER-soo-tizm", "Excessive hair growth, especially male-pattern hair growth in a female.", "پرمویی (هیرسوتیسم)", "ad", "Pathology_and_Disorders", []],
["homeostasis", "hoh-mee-oh-STAY-sis", "The tendency of the body to keep a stable internal environment regardless of outside changes (home/o = same, -stasis = standing still).", "هومئوستاز (تعادل پایدار درونی)", "lx", "Anatomy_and_Physiology", []],
["hormone", "HOR-mohn", "A chemical messenger secreted by an endocrine gland into the blood that regulates the activity of target cells (Greek hormon, to set in motion).", "هورمون", "lx", "Anatomy_and_Physiology", []],
["hormone replacement therapy", "HOR-mohn ree-PLAYS-ment THER-ah-pee", "Giving natural or synthetic hormones to replace deficient ones, as pills, injections or skin patches.", "هورمون‌درمانی جایگزین", "dx", "Pharmacology_and_Treatment", ["HRT"]],
["human chorionic gonadotropin", "HYOO-man kor-ee-ON-ik goh-nad-oh-TROH-pin", "Placental hormone that keeps the ovary producing estrogen and progesterone in early pregnancy.", "گنادوتروپین جفتی انسان", "dx", "Anatomy_and_Physiology", ["HCG"]],
["human growth hormone therapy", "HYOO-man GROHTH HOR-mohn THER-ah-pee", "Giving growth hormone (somatropin) to children with abnormally short stature.", "درمان با هورمون رشد", "dx", "Pharmacology_and_Treatment", []],
["humoral", "HYOO-mor-al", "Relating to body fluids, especially substances such as hormones carried in the blood.", "هومورال (مربوط به مایعات بدن)", "lx", "Anatomy_and_Physiology", []],
["hydrocortisone", "high-droh-KOR-tih-zohn", "Cortisol; also a medication.", "هیدروکورتیزون", "ad", "Anatomy_and_Physiology", []],
["hyperadrenalism", "high-per-ah-DREE-nal-izm", "Overactivity of the adrenal glands, usually from a tumor.", "پرکاری فوق‌کلیه", "ad", "Pathology_and_Disorders", []],
["hyperaldosteronism", "high-per-al-DOS-ter-ohn-izm", "Excess aldosterone causing sodium retention, potassium loss and hypertension; aldosteronism.", "پرکاری آلدوسترون", "ad", "Pathology_and_Disorders", []],
["hypercalcemia", "high-per-kal-SEE-mee-ah", "Abnormally high calcium in the blood.", "افزایش کلسیم خون", "th", "Pathology_and_Disorders", []],
["hyperglycemia", "high-per-gly-SEE-mee-ah", "Abnormally high glucose in the blood; the main sign of diabetes mellitus.", "افزایش قند خون", "pa", "Pathology_and_Disorders", []],
["hypergonadism", "high-per-GOH-nad-izm", "Excessive secretion of sex hormones by the gonads.", "پرکاری غدد جنسی", "dx", "Pathology_and_Disorders", []],
["hyperinsulinism", "high-per-IN-suh-lin-izm", "Excess insulin in the blood, causing hypoglycemia.", "پرانسولینی", "pa", "Pathology_and_Disorders", []],
["hyperkalemia", "high-per-kah-LEE-mee-ah", "Excess potassium in the blood (kal/i = potassium).", "افزایش پتاسیم خون", "ad", "Pathology_and_Disorders", []],
["hypernatremia", "high-per-nah-TREE-mee-ah", "High sodium in the blood.", "افزایش سدیم خون", "ad", "Pathology_and_Disorders", []],
["hyperparathyroidism", "high-per-pair-ah-THIGH-royd-izm", "Excessive secretion of PTH, usually from a tumor, causing hypercalcemia, bone loss and kidney stones.", "پرکاری پاراتیروئید", "th", "Pathology_and_Disorders", ["PHPT"]],
["hyperpigmentation", "high-per-pig-men-TAY-shun", "Darkening of the skin, such as the bronze skin of Addison disease.", "تیرگی پوست", "ad", "Pathology_and_Disorders", []],
["hyperpituitarism", "high-per-pih-TOO-ih-tah-rizm", "Hypersecretion of one or more pituitary hormones.", "پرکاری هیپوفیز", "hp", "Pathology_and_Disorders", []],
["hyperprolactinemia", "high-per-proh-lak-tih-NEE-mee-ah", "Higher than normal prolactin in the blood, causing milk secretion in women who are not pregnant or nursing.", "افزایش پرولاکتین خون", "hp", "Pathology_and_Disorders", []],
["hypersecretion", "HY-per-seh-KREE-shun", "Excessive hormone production by an endocrine gland; often caused by a tumor.", "ترشح بیش از حد", "lx", "Pathology_and_Disorders", []],
["hypertension", "high-per-TEN-shun", "High blood pressure.", "پرفشاری خون", "ad", "Pathology_and_Disorders", ["HTN"]],
["hyperthyroidism", "high-per-THIGH-royd-izm", "Excessive secretion of thyroid hormones; overactive thyroid with weight loss, rapid heartbeat and heat intolerance.", "پرکاری تیروئید", "th", "Pathology_and_Disorders", []],
["hypoadrenalism", "high-poh-ah-DREE-nal-izm", "Underactivity of the adrenal glands; Addison disease.", "کم‌کاری فوق‌کلیه", "ad", "Pathology_and_Disorders", []],
["hypocalcemia", "high-poh-kal-SEE-mee-ah", "Abnormally low calcium in the blood; it may cause tetany.", "کاهش کلسیم خون", "th", "Pathology_and_Disorders", []],
["hypoglycemia", "high-poh-gly-SEE-mee-ah", "Abnormally low glucose in the blood, causing shakiness, sweating, hunger and confusion.", "افت قند خون", "pa", "Pathology_and_Disorders", []],
["hypoglycemic", "high-poh-gly-SEE-mik", "A drug that lowers blood glucose.", "کاهنده قند خون", "pa", "Pharmacology_and_Treatment", []],
["hypogonadism", "high-poh-GOH-nad-izm", "Deficient secretion of sex hormones by the gonads.", "کم‌کاری غدد جنسی", "dx", "Pathology_and_Disorders", []],
["hypokalemia", "high-poh-kah-LEE-mee-ah", "Low potassium in the blood.", "کاهش پتاسیم خون", "ad", "Pathology_and_Disorders", []],
["hyponatremia", "high-poh-nah-TREE-mee-ah", "Low sodium in the blood (natr/o = sodium).", "کاهش سدیم خون", "ad", "Pathology_and_Disorders", []],
["hypoparathyroidism", "high-poh-pair-ah-THIGH-royd-izm", "Deficient PTH secretion causing hypocalcemia and tetany.", "کم‌کاری پاراتیروئید", "th", "Pathology_and_Disorders", []],
["hypophysectomy", "high-pof-ih-SEK-toh-mee", "Surgical removal of the pituitary gland.", "برداشتن هیپوفیز", "hp", "Pharmacology_and_Treatment", []],
["hypophysial", "high-poh-FIZ-ee-al", "Pertaining to the pituitary gland; also spelled hypophyseal.", "مربوط به هیپوفیز", "hp", "Anatomy_and_Physiology", []],
["hypophysis", "high-POF-ih-sis", "The pituitary gland (hypo- = below, physis = growing), so named because it develops below the hypothalamus.", "هیپوفیز", "hp", "Anatomy_and_Physiology", []],
["hypophysitis", "high-pof-ih-SY-tis", "Inflammation of the pituitary gland.", "التهاب هیپوفیز", "hp", "Pathology_and_Disorders", []],
["hypopituitarism", "high-poh-pih-TOO-ih-tah-rizm", "Hyposecretion of one or more pituitary hormones, often from a tumor or injury.", "کم‌کاری هیپوفیز", "hp", "Pathology_and_Disorders", []],
["hyposecretion", "HY-poh-seh-KREE-shun", "Deficient hormone production by an endocrine gland; usually treated with hormone replacement.", "ترشح کمتر از حد", "lx", "Pathology_and_Disorders", []],
["hypothalamus", "high-poh-THAL-ah-mus", "Part of the brain below the thalamus that controls the pituitary gland and maintains homeostasis; link between the nervous and endocrine systems.", "هیپوتالاموس", "hp", "Anatomy_and_Physiology", []],
["hypothyroidism", "high-poh-THIGH-royd-izm", "Deficient secretion of thyroid hormones; underactive thyroid with fatigue, weight gain and cold intolerance.", "کم‌کاری تیروئید", "th", "Pathology_and_Disorders", []],
["impaired fasting glucose", "im-PAIRD FAS-ting GLOO-kohs", "Fasting blood glucose above normal but below the diabetes range; prediabetes.", "اختلال قند ناشتا", "pa", "Pathology_and_Disorders", ["IFG"]],
["impaired glucose tolerance", "im-PAIRD GLOO-kohs TOL-er-ans", "Blood glucose above normal after a glucose load but below the diabetes range; prediabetes.", "اختلال تحمل گلوکز", "pa", "Pathology_and_Disorders", ["IGT"]],
["infundibulum", "in-fun-DIB-yoo-lum", "The stalk that connects the pituitary gland to the hypothalamus.", "ساقه هیپوفیز (اینفاندیبولوم)", "hp", "Anatomy_and_Physiology", []],
["inhibiting factor", "in-HIB-ih-ting FAK-tor", "A hypothalamic hormone that prevents the pituitary from secreting one of its hormones.", "عامل مهارکننده", "hp", "Anatomy_and_Physiology", []],
["insular", "IN-suh-lar", "Pertaining to the pancreatic islets (insul/o = island).", "مربوط به جزایر پانکراس", "pa", "Anatomy_and_Physiology", []],
["insulin", "IN-suh-lin", "Beta-cell hormone that moves glucose into cells and lowers blood glucose; also the main drug for type 1 diabetes.", "انسولین", "pa", "Anatomy_and_Physiology", []],
["insulin pump", "IN-suh-lin PUMP", "A small device that delivers insulin continuously under the skin, with extra doses before meals.", "پمپ انسولین", "pa", "Pharmacology_and_Treatment", ["CSII"]],
["insulin resistance", "IN-suh-lin ree-ZIS-tans", "Reduced response of body cells to insulin, the starting point of type 2 diabetes.", "مقاومت به انسولین", "pa", "Pathology_and_Disorders", []],
["insulin shock", "IN-suh-lin SHOK", "Severe hypoglycemia from an overdose of insulin: tremor, sweating, rapid heartbeat, hunger and confusion.", "شوک انسولینی", "pa", "Pathology_and_Disorders", []],
["insulinoma", "in-suh-lin-OH-mah", "Tumor of the islet cells that secretes excess insulin, causing hypoglycemia.", "انسولینوما", "pa", "Pathology_and_Disorders", []],
["interstitial cell-stimulating hormone", "in-ter-STISH-al SEL STIM-yoo-lay-ting HOR-mohn", "Name for LH in the male; it stimulates testosterone secretion.", "هورمون محرک سلول‌های بینابینی", "hp", "Anatomy_and_Physiology", ["ICSH"]],
["iodine", "EYE-oh-dine", "A mineral obtained from food and iodized salt that the thyroid needs to make T3 and T4.", "ید", "th", "Anatomy_and_Physiology", []],
["islet transplantation", "EYE-let trans-plan-TAY-shun", "Transfer of healthy insulin-secreting islet cells into a patient with diabetes.", "پیوند جزایر پانکراس", "pa", "Pharmacology_and_Treatment", []],
["islets of Langerhans", "EYE-lets of LAHNG-er-hahnz", "Clusters of endocrine cells in the pancreas that secrete insulin and glucagon; pancreatic islets.", "جزایر لانگرهانس", "pa", "Anatomy_and_Physiology", []],
["isthmus", "IS-mus", "The narrow strip of tissue that connects the right and left lobes of the thyroid.", "تنگه تیروئید (ایستموس)", "th", "Anatomy_and_Physiology", []],
["ketoacidosis", "kee-toh-ass-ih-DOH-sis", "Acidosis caused by excess ketone bodies in uncontrolled diabetes; a medical emergency; diabetic ketoacidosis.", "کتواسیدوز", "pa", "Pathology_and_Disorders", ["DKA"]],
["ketones", "KEE-tohnz", "Acidic waste products (ketone bodies) made when the body burns fat instead of glucose.", "اجسام کتونی", "pa", "Anatomy_and_Physiology", []],
["ketosis", "kee-TOH-sis", "Accumulation of ketone bodies in the body, as in uncontrolled diabetes or starvation.", "کتوز", "pa", "Pathology_and_Disorders", []],
["lactogenic hormone", "lak-toh-JEN-ik HOR-mohn", "Another name for prolactin.", "هورمون شیرساز", "hp", "Anatomy_and_Physiology", ["LTH"]],
["laparoscopic adrenalectomy", "lap-ah-roh-SKOP-ik ah-dree-nal-EK-toh-mee", "Removal of an adrenal gland through small abdominal incisions using an endoscope (lapar/o = abdomen).", "آدرنالکتومی لاپاراسکوپیک", "ad", "Pharmacology_and_Treatment", []],
["levothyroxine", "lee-voh-thigh-ROK-seen", "Synthetic thyroxine used as thyroid replacement in hypothyroidism or after thyroidectomy.", "لووتیروکسین", "th", "Pharmacology_and_Treatment", []],
["lobectomy", "loh-BEK-toh-mee", "Removal of a lobe of an organ, such as one lobe of the thyroid.", "برداشتن یک لوب", "th", "Pharmacology_and_Treatment", []],
["luteinizing hormone", "LOO-tee-ih-nye-zing HOR-mohn", "Gonadotropin that triggers ovulation and formation of the corpus luteum in females and testosterone secretion in males.", "هورمون لوتئینی‌کننده", "hp", "Anatomy_and_Physiology", ["LH"]],
["macrosomia", "mak-roh-SOH-mee-ah", "An abnormally large body, such as a large newborn of a mother with diabetes (macro- = large, somat/o = body).", "درشتی جثه نوزاد (ماکروزومی)", "pa", "Pathology_and_Disorders", []],
["magnetic resonance imaging", "mag-NET-ik REZ-oh-nans IM-ah-jing", "Imaging with radio waves and a magnet that detects tumors precisely, for example in the pituitary.", "تصویربرداری تشدید مغناطیسی", "dx", "Laboratory_and_Diagnostics", ["MRI"]],
["master gland", "MAS-ter GLAND", "Nickname of the pituitary gland, because its hormones regulate many other endocrine glands.", "غده فرمانده (شاه‌غده)", "hp", "Anatomy_and_Physiology", []],
["melanocyte-stimulating hormone", "meh-LAN-oh-site STIM-yoo-lay-ting HOR-mohn", "Pituitary hormone that stimulates melanocytes to make melanin, darkening the skin.", "هورمون محرک ملانوسیت", "hp", "Anatomy_and_Physiology", ["MSH"]],
["melatonin", "mel-ah-TOH-nin", "Pineal hormone, secreted in darkness, that regulates the sleep–wake (circadian) rhythm.", "ملاتونین", "dx", "Anatomy_and_Physiology", []],
["metabolic syndrome", "met-ah-BOL-ik SIN-drohm", "Insulin resistance with obesity, high triglycerides, low HDL and hypertension; syndrome X.", "سندرم متابولیک", "pa", "Pathology_and_Disorders", []],
["metabolism", "meh-TAB-oh-lizm", "The sum of all chemical and physical processes in living cells that provide energy and build new material.", "سوخت‌وساز (متابولیسم)", "lx", "Anatomy_and_Physiology", []],
["metformin", "met-FOR-min", "Oral antidiabetic (brand Glucophage) that lowers glucose in type 2 diabetes.", "متفورمین", "pa", "Pharmacology_and_Treatment", []],
["methimazole", "meth-IM-ah-zohl", "Antithyroid drug (brand Tapazole) that stops the thyroid from making too much hormone.", "متی‌مازول", "th", "Pharmacology_and_Treatment", []],
["mineralocorticoids", "min-er-al-oh-KOR-tih-koydz", "Adrenal cortex hormones, mainly aldosterone, that regulate sodium, potassium and water balance.", "مینرالوکورتیکوئیدها", "ad", "Anatomy_and_Physiology", []],
["moon face", "MOON FAYS", "A round, full face caused by excess cortisol.", "صورت ماه‌گون", "ad", "Pathology_and_Disorders", []],
["multiple endocrine neoplasia", "MUL-tih-pel EN-doh-krin nee-oh-PLAY-zhah", "A hereditary disorder causing tumors in several endocrine glands.", "نئوپلازی متعدد غدد درون‌ریز", "dx", "Pathology_and_Disorders", ["MEN"]],
["myxedema", "mik-seh-DEE-mah", "Advanced hypothyroidism in adults with dry, waxy swelling of the face and skin (myx/o = mucus, -edema = swelling).", "میکزدم", "th", "Pathology_and_Disorders", []],
["negative feedback", "NEG-ah-tiv FEED-bak", "A control loop in which a rising hormone level inhibits further secretion of that hormone.", "بازخورد منفی", "lx", "Anatomy_and_Physiology", []],
["neurohormone", "NOO-roh-hor-mohn", "A hormone produced by nerve cells, such as ADH and oxytocin made by the hypothalamus.", "نوروهورمون (هورمون عصبی)", "hp", "Anatomy_and_Physiology", []],
["neurohypophysis", "NOO-roh-high-POF-ih-sis", "The posterior lobe of the pituitary gland, which stores and releases ADH and oxytocin made in the hypothalamus.", "هیپوفیز خلفی (نوروهیپوفیز)", "hp", "Anatomy_and_Physiology", []],
["noradrenaline", "nor-ah-DREN-ah-lin", "Norepinephrine.", "نورآدرنالین", "ad", "Anatomy_and_Physiology", []],
["norepinephrine", "nor-ep-ih-NEF-rin", "Adrenal medulla hormone that mainly constricts blood vessels and raises blood pressure; noradrenaline.", "نوراپی‌نفرین", "ad", "Anatomy_and_Physiology", []],
["NPH insulin", "NPH IN-suh-lin", "Neutral protamine Hagedorn: an intermediate-acting insulin.", "انسولین NPH", "pa", "Pharmacology_and_Treatment", ["NPH"]],
["obesity", "oh-BEE-sih-tee", "An abnormal amount of fat in the body.", "چاقی", "pa", "Pathology_and_Disorders", []],
["oral hypoglycemic agents", "OR-al high-poh-gly-SEE-mik AY-jents", "Drugs taken by mouth to lower blood glucose in type 2 diabetes, such as metformin and glipizide.", "داروهای خوراکی کاهنده قند", "pa", "Pharmacology_and_Treatment", []],
["osteoporosis", "os-tee-oh-poh-ROH-sis", "Loss of bone density; a risk of long-term corticosteroid use and Cushing syndrome.", "پوکی استخوان", "ad", "Pathology_and_Disorders", []],
["ovarian", "oh-VAIR-ee-an", "Pertaining to the ovary.", "تخمدانی", "dx", "Anatomy_and_Physiology", []],
["ovaries", "OH-vah-reez", "Female gonads in the pelvic cavity that produce ova, estrogen and progesterone.", "تخمدان‌ها", "dx", "Anatomy_and_Physiology", []],
["oxytocin", "ok-see-TOH-sin", "Posterior pituitary hormone that stimulates uterine contractions during labor and milk ejection during breastfeeding.", "اکسی‌توسین", "hp", "Anatomy_and_Physiology", ["OXT"]],
["pancreas", "PAN-kree-as", "Organ behind the stomach with digestive (exocrine) and hormonal (endocrine) functions.", "لوزالمعده (پانکراس)", "pa", "Anatomy_and_Physiology", []],
["pancreatectomy", "pan-kree-ah-TEK-toh-mee", "Surgical removal of all or part of the pancreas.", "برداشتن پانکراس", "pa", "Pharmacology_and_Treatment", []],
["pancreatic", "pan-kree-AT-ik", "Pertaining to the pancreas.", "مربوط به پانکراس", "pa", "Anatomy_and_Physiology", []],
["pancreatitis", "pan-kree-ah-TYE-tis", "Inflammation of the pancreas, most often from alcoholism or gallstones.", "التهاب پانکراس", "pa", "Pathology_and_Disorders", []],
["pancreatotomy", "pan-kree-ah-TOT-oh-mee", "Incision into the pancreas.", "برش پانکراس", "pa", "Pharmacology_and_Treatment", []],
["panhypopituitarism", "pan-high-poh-pih-TOO-ih-tah-rizm", "Deficiency of all pituitary hormones, affecting the thyroid, adrenal cortex and gonads.", "کم‌کاری کامل هیپوفیز", "hp", "Pathology_and_Disorders", []],
["parathormone", "pair-ah-THOR-mohn", "Parathyroid hormone.", "پاراتورمون", "th", "Anatomy_and_Physiology", ["PTH"]],
["parathyroid glands", "pair-ah-THIGH-royd GLANDZ", "Four small oval glands on the posterior surface of the thyroid that secrete parathyroid hormone (para- = beside).", "غدد پاراتیروئید", "th", "Anatomy_and_Physiology", []],
["parathyroid hormone", "pair-ah-THIGH-royd HOR-mohn", "Hormone that raises blood calcium by releasing calcium from bone, saving it in the kidney and activating vitamin D.", "هورمون پاراتیروئید", "th", "Anatomy_and_Physiology", ["PTH"]],
["parathyroidal", "pair-ah-thigh-ROYD-al", "Pertaining to the parathyroid glands.", "مربوط به پاراتیروئید", "th", "Anatomy_and_Physiology", []],
["parathyroidectomy", "pair-ah-thigh-royd-EK-toh-mee", "Surgical removal of one or more parathyroid glands.", "برداشتن پاراتیروئید", "th", "Pharmacology_and_Treatment", []],
["perioral", "per-ee-OR-al", "Around the mouth; perioral numbness is a sign of low calcium.", "دور دهان", "th", "Anatomy_and_Physiology", []],
["peripheral neuropathy", "per-IF-er-al noo-ROP-ah-thee", "Nerve damage in the hands and lower legs, as a result of diabetes mellitus.", "نوروپاتی محیطی", "pa", "Pathology_and_Disorders", []],
["pheochromocytoma", "fee-oh-kroh-moh-sy-TOH-mah", "Usually benign tumor of the adrenal medulla that secretes excess epinephrine and norepinephrine, causing severe hypertension, headache and sweating (phe/o = dusky).", "فئوکروموسیتوما", "ad", "Pathology_and_Disorders", []],
["pineal gland", "PIN-ee-al GLAND", "A small pine cone–shaped gland deep in the brain that secretes melatonin (pineal = like a pine cone).", "غده صنوبری (اپی‌فیز)", "dx", "Anatomy_and_Physiology", []],
["pinealectomy", "pin-ee-ah-LEK-toh-mee", "Surgical removal of the pineal gland.", "برداشتن اپی‌فیز", "dx", "Pharmacology_and_Treatment", []],
["pituitarism", "pih-TOO-ih-tah-rizm", "Any disorder of pituitary function.", "اختلال عملکرد هیپوفیز", "hp", "Pathology_and_Disorders", []],
["pituitary adenoma", "pih-TOO-ih-tair-ee ad-eh-NOH-mah", "A benign glandular tumor of the pituitary, often secreting GH, ACTH or prolactin.", "آدنوم هیپوفیز", "hp", "Pathology_and_Disorders", []],
["pituitary apoplexy", "pih-TOO-ih-tair-ee AP-oh-plek-see", "Sudden hemorrhage into a pituitary tumor causing severe headache, visual loss and sometimes loss of consciousness.", "سکته هیپوفیز", "hp", "Pathology_and_Disorders", []],
["pituitary dwarfism", "pih-TOO-ih-tair-ee DWORF-izm", "Growth hormone deficiency in childhood producing a very short but normally proportioned person.", "کوتاه‌قدی هیپوفیزی", "hp", "Pathology_and_Disorders", []],
["pituitary gland", "pih-TOO-ih-tair-ee GLAND", "A pea-sized gland at the base of the brain that secretes hormones controlling many other glands; the master gland.", "غده هیپوفیز", "hp", "Anatomy_and_Physiology", []],
["polycystic ovary syndrome", "pol-ee-SIS-tik OH-vah-ree SIN-drohm", "Hyperandrogenism in women with absent ovulation, irregular periods, acne, excess hair and metabolic syndrome.", "سندرم تخمدان پلی‌کیستیک", "dx", "Pathology_and_Disorders", ["PCOS"]],
["polydipsia", "pol-ee-DIP-see-ah", "Excessive thirst; a sign of diabetes mellitus or diabetes insipidus.", "پرنوشی (عطش زیاد)", "hp", "Pathology_and_Disorders", []],
["polyphagia", "pol-ee-FAY-jee-ah", "Excessive hunger; a sign of uncontrolled diabetes mellitus.", "پرخوری (گرسنگی زیاد)", "pa", "Pathology_and_Disorders", []],
["polyuria", "pol-ee-YOO-ree-ah", "Excessive urination; a sign of diabetes mellitus or diabetes insipidus.", "پرادراری", "hp", "Pathology_and_Disorders", []],
["postprandial blood sugar", "post-PRAN-dee-al BLUD SHUG-ar", "Blood glucose measured about 2 hours after a meal (post- = after, -prandial = meal).", "قند خون پس از غذا", "pa", "Laboratory_and_Diagnostics", []],
["potassium", "poh-TAS-ee-um", "The main electrolyte inside the cells; excreted by the kidney under aldosterone.", "پتاسیم", "ad", "Anatomy_and_Physiology", ["K+"]],
["prednisone", "PRED-nih-sohn", "Synthetic corticosteroid with strong anti-inflammatory action; long-term use can cause Cushing-like effects and osteoporosis.", "پردنیزون", "ad", "Pharmacology_and_Treatment", []],
["progesterone", "proh-JES-ter-ohn", "Hormone of the corpus luteum that prepares the uterus for pregnancy and helps maintain it.", "پروژسترون", "dx", "Anatomy_and_Physiology", []],
["prolactin", "proh-LAK-tin", "Anterior pituitary hormone that stimulates breast development and milk production (pro- = before, lact/o = milk).", "پرولاکتین", "hp", "Anatomy_and_Physiology", ["PRL", "LTH"]],
["prostaglandins", "pros-tah-GLAN-dinz", "Hormone-like substances made by many cells that affect uterine contractions, blood pressure, clotting and inflammation.", "پروستاگلاندین‌ها", "lx", "Anatomy_and_Physiology", []],
["protein-bound iodine test", "PROH-teen BOWND EYE-oh-dine TEST", "Blood test that measures thyroxine through the iodine bound to blood proteins.", "آزمون ید متصل به پروتئین", "th", "Laboratory_and_Diagnostics", ["PBI"]],
["radioactive iodine therapy", "ray-dee-oh-AK-tiv EYE-oh-dine THER-ah-pee", "Treatment with radioactive iodine (I-131) to destroy overactive thyroid tissue or a thyroid tumor.", "یددرمانی رادیواکتیو", "th", "Pharmacology_and_Treatment", ["RAI", "131I"]],
["radioactive iodine uptake", "ray-dee-oh-AK-tiv EYE-oh-dine UP-tayk", "Test that measures how much radioactive iodine the thyroid absorbs from the blood.", "آزمون جذب ید رادیواکتیو", "th", "Laboratory_and_Diagnostics", ["RAIU"]],
["radioimmunoassay", "ray-dee-oh-im-yoo-noh-AS-ay", "A method of measuring tiny amounts of hormones in plasma using radioactively labeled hormones and antibodies.", "رادیوایمونواسی", "dx", "Laboratory_and_Diagnostics", ["RIA"]],
["receptor", "ree-SEP-tor", "A site on the cell membrane or inside the cell to which a hormone attaches, like a key in a lock.", "گیرنده", "lx", "Anatomy_and_Physiology", []],
["Recklinghausen disease", "REK-ling-how-zen dih-ZEEZ", "Bone degeneration caused by excess parathyroid hormone.", "بیماری استخوانی رکلینگهاوزن", "th", "Pathology_and_Disorders", []],
["releasing factor", "ree-LEE-sing FAK-tor", "A hypothalamic hormone that stimulates the pituitary to secrete one of its hormones.", "عامل آزادکننده", "hp", "Anatomy_and_Physiology", ["RH"]],
["renal calculi", "REE-nal KAL-kyoo-lye", "Kidney stones; a complication of high blood calcium.", "سنگ‌های کلیه", "th", "Pathology_and_Disorders", []],
["renin", "REE-nin", "A hormone secreted by the kidneys that raises blood pressure.", "رنین", "ad", "Anatomy_and_Physiology", []],
["seasonal affective disorder", "SEE-zon-al ah-FEK-tiv dis-OR-der", "A winter mood disorder with sleepiness, depression and overeating, related to melatonin and light.", "اختلال عاطفی فصلی", "dx", "Pathology_and_Disorders", ["SAD"]],
["sella turcica", "SEL-ah TUR-sih-kah", "The saddle-shaped depression in the sphenoid bone that holds the pituitary gland (\"Turkish saddle\").", "زین ترکی", "hp", "Anatomy_and_Physiology", []],
["serum cortisol", "SEER-um KOR-tih-sol", "Cortisol measured in blood or saliva to evaluate adrenal disease.", "کورتیزول سرم", "ad", "Laboratory_and_Diagnostics", []],
["serum potassium", "SEER-um poh-TAS-ee-um", "Blood potassium level, used to detect adrenal tumors that cause potassium loss.", "پتاسیم سرم", "ad", "Laboratory_and_Diagnostics", []],
["Simmonds disease", "SIM-ondz dih-ZEEZ", "Hypofunction of the anterior pituitary (panhypopituitarism), usually after infarction; pituitary cachexia.", "بیماری سیموندز", "hp", "Pathology_and_Disorders", []],
["simple goiter", "SIM-pel GOY-ter", "A nontoxic goiter caused by dietary iodine deficiency.", "گواتر ساده (کمبود ید)", "th", "Pathology_and_Disorders", []],
["sodium", "SOH-dee-um", "The main electrolyte outside the cells; kept in the body by aldosterone.", "سدیم", "ad", "Anatomy_and_Physiology", ["Na+"]],
["somatotropin", "soh-mat-oh-TROH-pin", "Growth hormone (somat/o = body, -tropin = stimulating).", "سوماتوتروپین (هورمون رشد)", "hp", "Anatomy_and_Physiology", ["STH"]],
["sphenoid bone", "SFEE-noyd BOHN", "The bone at the base of the skull that houses the pituitary gland.", "استخوان پروانه‌ای (اسفنوئید)", "hp", "Anatomy_and_Physiology", []],
["steroid hormone", "STER-oyd HOR-mohn", "A hormone made from lipids (cholesterol); includes the sex hormones and the adrenal cortex hormones.", "هورمون استروئیدی", "lx", "Anatomy_and_Physiology", []],
["steroids", "STER-oydz", "Complex substances made from cholesterol; as drugs they control inflammation but can be abused for muscle growth.", "استروئیدها", "dx", "Pharmacology_and_Treatment", []],
["striae", "STRY-ee", "Purple or red stretch marks on the skin, as in Cushing syndrome.", "خطوط کشش پوست (استریا)", "ad", "Pathology_and_Disorders", []],
["subcutaneous", "sub-kyoo-TAY-nee-us", "Beneath the skin; insulin is injected into subcutaneous tissue.", "زیرجلدی", "pa", "Pharmacology_and_Treatment", []],
["suprarenal glands", "soo-prah-REE-nal GLANDZ", "Adrenal glands (supra- = above, ren/o = kidney).", "غدد فوق‌کلیوی", "ad", "Anatomy_and_Physiology", []],
["sympathomimetic", "sim-pah-thoh-mih-MET-ik", "Imitating the action of the sympathetic nervous system, as epinephrine does in stress.", "مقلد سمپاتیک", "ad", "Anatomy_and_Physiology", []],
["syndrome", "SIN-drohm", "A group of signs and symptoms that together present the clinical picture of a disease (syn- = together, -drome = running).", "سندرم", "lx", "Pathology_and_Disorders", []],
["syndrome of inappropriate ADH", "SIN-drohm of in-ah-PROH-pree-et ADH", "Hypersecretion of antidiuretic hormone causing excessive water retention and low blood sodium.", "سندرم ترشح نابجای ADH", "hp", "Pathology_and_Disorders", ["SIADH"]],
["T cells", "TEE SELZ", "Lymphocytes that mature in the thymus and direct immune responses.", "لنفوسیت‌های T", "dx", "Anatomy_and_Physiology", []],
["target cell", "TAR-get SEL", "A cell that has receptors for a specific hormone and responds to it.", "سلول هدف", "lx", "Anatomy_and_Physiology", []],
["target tissue", "TAR-get TISH-oo", "The specific tissue or organ on which a hormone acts; also called target organ.", "بافت هدف (اندام هدف)", "lx", "Anatomy_and_Physiology", []],
["testes", "TES-teez", "Male gonads in the scrotum that produce sperm and testosterone; testicles (singular testis).", "بیضه‌ها", "dx", "Anatomy_and_Physiology", []],
["testicular", "tes-TIK-yoo-lar", "Pertaining to the testes.", "بیضه‌ای", "dx", "Anatomy_and_Physiology", []],
["testosterone", "tes-TOS-ter-ohn", "The main male sex hormone; it develops male characteristics and regulates sperm production.", "تستوسترون", "dx", "Anatomy_and_Physiology", []],
["tetany", "TET-ah-nee", "Nerve irritability and painful muscle spasms, especially of the wrists and ankles, caused by low blood calcium.", "تتانی (اسپاسم دردناک عضلات)", "th", "Pathology_and_Disorders", []],
["tetraiodothyronine", "teh-trah-eye-oh-doh-THIGH-roh-neen", "Thyroxine; tetra- = four iodine atoms.", "تترایدوتیرونین", "th", "Anatomy_and_Physiology", ["T4"]],
["thymectomy", "thigh-MEK-toh-mee", "Surgical removal of the thymus, for example in myasthenia gravis or a thymoma.", "برداشتن تیموس", "dx", "Pharmacology_and_Treatment", []],
["thymic", "THIGH-mik", "Pertaining to the thymus gland.", "مربوط به تیموس", "dx", "Anatomy_and_Physiology", []],
["thymitis", "thigh-MY-tis", "Inflammation of the thymus gland.", "التهاب تیموس", "dx", "Pathology_and_Disorders", []],
["thymoma", "thigh-MOH-mah", "A tumor of the thymus gland.", "تیموما", "dx", "Pathology_and_Disorders", []],
["thymosin", "THIGH-moh-sin", "Thymus hormone that aids the development of T cells.", "تیموسین", "dx", "Anatomy_and_Physiology", []],
["thymus gland", "THIGH-mus GLAND", "A gland in the mediastinum behind the sternum that secretes thymosin and helps T cells mature; large in childhood and shrinks with age.", "غده تیموس", "dx", "Anatomy_and_Physiology", []],
["thyroaplasia", "thigh-roh-ah-PLAY-zee-ah", "Congenital failure of the thyroid to develop, with low thyroid output.", "عدم تشکیل تیروئید", "th", "Pathology_and_Disorders", []],
["thyroid carcinoma", "THIGH-royd kar-sih-NOH-mah", "Cancer of the thyroid gland.", "سرطان تیروئید", "th", "Pathology_and_Disorders", []],
["thyroid cartilage", "THIGH-royd KAR-tih-lij", "The large cartilage covering the larynx above the thyroid gland; it forms the Adam's apple.", "غضروف تیروئید", "th", "Anatomy_and_Physiology", []],
["thyroid echography", "THIGH-royd eh-KOG-rah-fee", "Ultrasound of the thyroid that helps tell a solid nodule from a cyst.", "سونوگرافی تیروئید", "th", "Laboratory_and_Diagnostics", []],
["thyroid function test", "THIGH-royd FUNK-shun TEST", "Blood test measuring T3, T4 and TSH to evaluate thyroid function.", "آزمایش عملکرد تیروئید", "th", "Laboratory_and_Diagnostics", ["TFT"]],
["thyroid gland", "THIGH-royd GLAND", "Butterfly-shaped gland in the neck below the larynx that secretes T3, T4 and calcitonin (Greek thyreos = shield).", "غده تیروئید", "th", "Anatomy_and_Physiology", []],
["thyroid nodule", "THIGH-royd NOD-yool", "A solid or fluid-filled lump within the thyroid; most are benign.", "ندول (گره) تیروئید", "th", "Pathology_and_Disorders", []],
["thyroid replacement hormone", "THIGH-royd ree-PLAYS-ment HOR-mohn", "Thyroid hormone given for hypothyroidism or after thyroidectomy.", "هورمون جایگزین تیروئید", "th", "Pharmacology_and_Treatment", []],
["thyroid scan", "THIGH-royd SKAN", "Imaging of the thyroid after giving radioactive iodine, to find nodules or tumors.", "اسکن تیروئید", "th", "Laboratory_and_Diagnostics", []],
["thyroid storm", "THIGH-royd STORM", "A sudden, life-threatening flare of thyrotoxicosis in untreated or poorly treated hyperthyroidism; thyroid crisis.", "طوفان تیروئیدی", "th", "Pathology_and_Disorders", []],
["thyroid-stimulating hormone", "THIGH-royd STIM-yoo-lay-ting HOR-mohn", "Anterior pituitary hormone that stimulates the thyroid gland to make T3 and T4; thyrotropin.", "هورمون محرک تیروئید", "hp", "Anatomy_and_Physiology", ["TSH"]],
["thyroidal", "thigh-ROYD-al", "Pertaining to the thyroid gland.", "مربوط به تیروئید", "th", "Anatomy_and_Physiology", []],
["thyroidectomy", "thigh-royd-EK-toh-mee", "Surgical removal of the thyroid gland.", "برداشتن تیروئید", "th", "Pharmacology_and_Treatment", []],
["thyroiditis", "thigh-roy-DYE-tis", "Inflammation of the thyroid gland.", "التهاب تیروئید", "th", "Pathology_and_Disorders", []],
["thyrolytic", "thigh-roh-LIT-ik", "Destroying thyroid tissue.", "تخریب‌کننده تیروئید", "th", "Pharmacology_and_Treatment", []],
["thyromegaly", "thigh-roh-MEG-ah-lee", "Enlargement of the thyroid gland.", "بزرگی تیروئید", "th", "Pathology_and_Disorders", []],
["thyroparathyroidectomy", "thigh-roh-pair-ah-thigh-royd-EK-toh-mee", "Removal of the thyroid and parathyroid glands.", "برداشتن تیروئید و پاراتیروئید", "th", "Pharmacology_and_Treatment", []],
["thyrotherapy", "thigh-roh-THER-ah-pee", "Treatment with thyroid preparations.", "درمان با فراورده‌های تیروئید", "th", "Pharmacology_and_Treatment", []],
["thyrotomy", "thigh-ROT-oh-mee", "Incision into the thyroid gland (or surgical division of the thyroid cartilage).", "برش تیروئید", "th", "Pharmacology_and_Treatment", []],
["thyrotoxic", "thigh-roh-TOK-sik", "Having excessive amounts of thyroid hormones (toxic/o = poison).", "مسموم از هورمون تیروئید", "th", "Pathology_and_Disorders", []],
["thyrotoxicosis", "thigh-roh-tok-sih-KOH-sis", "Condition from marked overproduction of thyroid hormone: rapid heart rate, tremor, sweating, anxiety and weight loss.", "تیروتوکسیکوز (مسمومیت تیروئیدی)", "th", "Pathology_and_Disorders", []],
["thyrotropin", "thigh-ROT-roh-pin", "Thyroid-stimulating hormone.", "تیروتروپین", "hp", "Anatomy_and_Physiology", ["TSH"]],
["thyroxine", "thigh-ROK-sin", "The main thyroid hormone, containing four iodine atoms; it increases cell metabolism (also spelled thyroxin).", "تیروکسین", "th", "Anatomy_and_Physiology", ["T4"]],
["thyroxine-binding globulin", "thigh-ROK-sin BYN-ding GLOB-yoo-lin", "The main blood protein that carries thyroxine.", "گلوبولین متصل‌شونده به تیروکسین", "th", "Anatomy_and_Physiology", ["TBG"]],
["total calcium", "TOH-tal KAL-see-um", "Blood test of calcium to detect parathyroid and bone disorders.", "کلسیم تام", "dx", "Laboratory_and_Diagnostics", []],
["toxic goiter", "TOK-sik GOY-ter", "A goiter that secretes excess hormone and causes hyperthyroidism.", "گواتر سمی (پرکار)", "th", "Pathology_and_Disorders", []],
["toxicologist", "toks-ih-KOL-oh-jist", "A specialist in poisons and their effects on the body.", "سم‌شناس", "dx", "Anatomy_and_Physiology", []],
["transsphenoidal hypophysectomy", "trans-sfee-NOY-dal high-pof-ih-SEK-toh-mee", "Minimally invasive removal of a pituitary tumor through the nasal cavity and the sphenoid sinus.", "هیپوفیزکتومی از راه سینوس اسفنوئید", "hp", "Pharmacology_and_Treatment", []],
["triiodothyronine", "try-eye-oh-doh-THIGH-roh-neen", "Thyroid hormone with three iodine atoms that regulates metabolism, growth and body temperature.", "تری‌یدوتیرونین", "th", "Anatomy_and_Physiology", ["T3"]],
["tropic hormone", "TROH-pik HOR-mohn", "A hormone that stimulates another endocrine gland to secrete its own hormones (TSH, ACTH, FSH, LH).", "هورمون محرک (تروپیک)", "hp", "Anatomy_and_Physiology", []],
["type 1 diabetes mellitus", "TYP WUN dye-ah-BEE-teez MEL-ih-tus", "Autoimmune destruction of beta cells with absent insulin; abrupt onset, usually in children; needs daily insulin; insulin-dependent diabetes.", "دیابت نوع ۱", "pa", "Pathology_and_Disorders", ["T1DM", "IDDM"]],
["type 2 diabetes mellitus", "TYP TOO dye-ah-BEE-teez MEL-ih-tus", "Insulin resistance with relative insulin deficiency; gradual onset, usually in overweight adults; non-insulin-dependent diabetes.", "دیابت نوع ۲", "pa", "Pathology_and_Disorders", ["T2DM", "NIDDM"]],
["ulceration", "ul-ser-AY-shun", "Formation of an open, non-healing sore on the skin or a mucous membrane.", "زخم‌شدن", "pa", "Pathology_and_Disorders", []],
["ultrasound", "UL-trah-sownd", "Imaging with sound waves that identifies thyroid, adrenal and pancreatic masses.", "سونوگرافی (فراصوت)", "dx", "Laboratory_and_Diagnostics", []],
["urine calcium", "YOO-rin KAL-see-um", "Calcium measured in urine to evaluate parathyroid disease.", "کلسیم ادرار", "dx", "Laboratory_and_Diagnostics", []],
["urine sugar", "YOO-rin SHUG-ar", "Test for glucose and ketones in the urine.", "قند ادرار", "pa", "Laboratory_and_Diagnostics", []],
["uterine inertia", "YOO-ter-in in-ER-shah", "Loss of uterine muscle contraction during labor, as in oxytocin deficiency.", "اینرسی رحم (توقف انقباض)", "hp", "Pathology_and_Disorders", []],
["vasopressin", "vay-soh-PRES-in", "Antidiuretic hormone; it also constricts blood vessels and raises blood pressure.", "وازوپرسین", "hp", "Anatomy_and_Physiology", ["ADH"]],
["virilism", "VIR-ih-lizm", "Development of male characteristics (deep voice, facial hair, muscle bulk) in a female or early in a boy, from excess androgens; virilization.", "مردانه‌شدن (ویریلیسم)", "ad", "Pathology_and_Disorders", []]];
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
    ['a-, an-', ['an', 'a'], 'without, not', 'بدون، فاقد', '*'],
    ['ad-', ['ad'], 'toward, near', 'نزدیکِ، به سوی', 'ad'],
    ['anti-', ['anti'], 'against', 'ضد، علیه', '*'],
    ['dys-', ['dys'], 'bad, difficult', 'بد، دشوار', '*'],
    ['endo-', ['endo'], 'within, inner', 'درون', 'lx'],
    ['epi-', ['epi'], 'upon, above', 'روی، بالای', 'ad'],
    ['eu-', ['eu'], 'good, normal', 'خوب، طبیعی', 'th'],
    ['ex-, exo-', ['exo', 'ex'], 'outside, outward', 'بیرون، به خارج', 'lx'],
    ['hemi-', ['hemi'], 'half', 'نیم، نصف', 'th'],
    ['hyper-', ['hyper'], 'excessive, above normal', 'بیش از حد، بالاتر از طبیعی', '*'],
    ['hypo-', ['hypo', 'hyp'], 'below, deficient', 'زیر، کمتر از حد', '*'],
    ['macro-', ['macro'], 'large', 'بزرگ', 'pa'],
    ['nor-', ['nor'], 'chemical prefix (parent compound)', 'پیشوند شیمیایی', 'ad'],
    ['pan-', ['pan'], 'all', 'همه، تمام', 'hp'],
    ['para-', ['para'], 'beside, near', 'کنار، مجاور', 'th'],
    ['poly-', ['poly'], 'many, much', 'بسیار، زیاد', 'pa'],
    ['post-', ['post'], 'after', 'پس از', 'pa'],
    ['pro-', ['pro'], 'before, for', 'پیش از، برای', 'dx'],
    ['supra-', ['supra'], 'above', 'بالای', 'ad'],
    ['syn-', ['syn'], 'together', 'با هم', 'lx'],
    ['tetra-', ['tetra'], 'four', 'چهار', 'th'],
    ['trans-', ['trans'], 'across, through', 'از میان', 'hp'],
    ['tri-', ['tri'], 'three', 'سه', 'th'],
    // ریشه‌ها: کلیات و غدد
    ['aden/o', ['aden'], 'gland', 'غده', 'lx'],
    ['crin/o', ['crin'], 'to secrete', 'ترشح کردن', 'lx'],
    ['endocrin/o', ['endocrin'], 'endocrine glands', 'غدد درون‌ریز', 'lx'],
    ['home/o', ['homeo', 'home'], 'same, unchanging', 'یکسان، ثابت', 'lx'],
    ['hypophys/o', ['hypophysi', 'hypophys'], 'pituitary gland (hypophysis)', 'هیپوفیز', 'hp'],
    ['pituitar/o, pituit/o', ['pituitar', 'pituit'], 'pituitary gland', 'هیپوفیز', 'hp'],
    ['thalam/o', ['thalam'], 'thalamus (inner chamber)', 'تالاموس', 'hp'],
    ['thyr/o, thyroid/o', ['thyroid', 'thyr'], 'thyroid gland (shield)', 'تیروئید (سپر)', 'th'],
    ['parathyr/o, parathyroid/o', ['parathyroid', 'parathyr'], 'parathyroid glands', 'پاراتیروئید', 'th'],
    ['adren/o, adrenal/o', ['adrenal', 'adren'], 'adrenal glands', 'غدد فوق‌کلیه', 'ad'],
    ['cortic/o', ['cortic', 'cortis', 'cort'], 'cortex (outer layer, bark)', 'قشر (لایه بیرونی)', 'ad'],
    ['pancreat/o', ['pancreat'], 'pancreas', 'پانکراس', 'pa'],
    ['insul/o', ['insulin', 'insul'], 'island (pancreatic islets)', 'جزیره (جزایر پانکراس)', 'pa'],
    ['thym/o', ['thym'], 'thymus gland', 'تیموس', 'dx'],
    ['pineal/o', ['pineal', 'pine'], 'pineal gland (pine cone)', 'اپی‌فیز (صنوبری)', 'dx'],
    ['gonad/o', ['gonad'], 'sex glands (gonads)', 'غدد جنسی', 'dx'],
    ['ovari/o, oophor/o', ['ovari', 'oophor'], 'ovary', 'تخمدان', 'dx'],
    ['orchi/o, testicul/o', ['testicul', 'orchid', 'orchi'], 'testis', 'بیضه', 'dx'],
    // ریشه‌ها: مواد و املاح
    ['calc/o, calc/i', ['calci', 'calc'], 'calcium', 'کلسیم', 'th'],
    ['iod/o', ['iodo', 'iod'], 'iodine', 'ید', 'th'],
    ['kal/i', ['kal'], 'potassium', 'پتاسیم', 'ad'],
    ['natr/o', ['natr'], 'sodium', 'سدیم', 'ad'],
    ['mineral/o', ['mineral'], 'minerals, electrolytes', 'مواد معدنی، الکترولیت‌ها', 'ad'],
    ['gluc/o', ['gluc'], 'glucose, sugar', 'گلوکز، قند', 'pa'],
    ['glyc/o, glycos/o', ['glycos', 'glyc'], 'sugar', 'قند', 'pa'],
    ['glycogen/o', ['glycogen'], 'glycogen (stored sugar)', 'گلیکوژن (قند ذخیره)', 'pa'],
    ['ket/o', ['keto', 'ket'], 'ketone bodies', 'اجسام کتونی', 'pa'],
    ['toxic/o', ['toxic', 'tox'], 'poison', 'سم', 'th'],
    // ریشه‌ها: بدن، جنس و نشانه‌ها
    ['acr/o', ['acr'], 'extremities, height', 'انتهاها (دست، پا، چهره)', 'hp'],
    ['somat/o', ['somat', 'soma'], 'body', 'بدن', 'hp'],
    ['lact/o, galact/o', ['galact', 'lact'], 'milk', 'شیر', 'hp'],
    ['melan/o', ['melan'], 'black, dark', 'سیاه، تیره', 'hp'],
    ['lute/o', ['lute'], 'yellow', 'زرد', 'hp'],
    ['neur/o', ['neur'], 'nerve', 'عصب', 'hp'],
    ['crani/o', ['crani'], 'skull', 'جمجمه', 'hp'],
    ['pharyng/o', ['pharyng'], 'pharynx (throat)', 'حلق', 'hp'],
    ['vas/o', ['vaso', 'vas'], 'vessel', 'رگ', 'hp'],
    ['ophthalm/o', ['ophthalm'], 'eye', 'چشم', 'th'],
    ['myx/o', ['myx'], 'mucus', 'مخاط', 'th'],
    ['lob/o', ['lob'], 'lobe', 'لوب', 'th'],
    ['nephr/o, ren/o', ['nephr', 'ren'], 'kidney', 'کلیه', 'ad'],
    ['andr/o', ['andr'], 'male', 'مرد، مردانه', 'ad'],
    ['estr/o', ['estr'], 'female', 'زنانه', 'dx'],
    ['gynec/o', ['gynec'], 'female, woman', 'زن', 'ad'],
    ['mast/o', ['mast'], 'breast', 'پستان', 'ad'],
    ['hirsut/o', ['hirsut'], 'hairy', 'پرمو', 'ad'],
    ['viril/o', ['viril'], 'masculine', 'مردانه', 'ad'],
    ['phe/o', ['pheo', 'phe'], 'dusky, brown', 'تیره، قهوه‌ای', 'ad'],
    ['chrom/o', ['chrom'], 'color', 'رنگ', 'ad'],
    ['lapar/o', ['lapar'], 'abdomen', 'شکم', 'ad'],
    ['retin/o', ['retin'], 'retina', 'شبکیه چشم', 'pa'],
    ['cyt/o', ['cyt'], 'cell', 'سلول', '*'],
    ['carcin/o', ['carcin'], 'cancer', 'سرطان', '*'],
    ['path/o', ['path'], 'disease', 'بیماری', '*'],
    ['radi/o', ['radi'], 'radiation, ray', 'پرتو', 'dx'],
    ['immun/o', ['immun'], 'immune, protection', 'ایمنی، محافظت', 'dx'],
    // پسوندها
    ['-al, -ic, -ar, -ary, -an', ['ary', 'eal', 'ial', 'ic', 'al', 'ar', 'an'], 'pertaining to', 'مربوط به', '*'],
    ['-crine', ['crine'], 'secreting', 'ترشح‌کننده', 'lx'],
    ['-dipsia', ['dipsia'], 'thirst', 'تشنگی', 'hp'],
    ['-drome', ['drome'], 'running', 'دویدن (هم‌روی)', 'lx'],
    ['-ectomy', ['ectomy'], 'excision, surgical removal', 'برداشتن (جراحی)', '*'],
    ['-edema', ['edema'], 'swelling', 'تورم', 'th'],
    ['-emia', ['emia'], 'blood condition', 'وضعیت خون', '*'],
    ['-emic', ['emic'], 'pertaining to a blood condition', 'مربوط به وضعیت خون', 'pa'],
    ['-gen, -genic', ['genic', 'gen'], 'producing; that which produces', 'تولیدکننده', 'lx'],
    ['-genesis', ['genesis'], 'production, formation', 'تولید، ساخت', 'pa'],
    ['-graphy', ['graphy'], 'process of recording', 'فرایند ثبت تصویر', 'dx'],
    ['-ine, -in, -one', ['ine', 'in', 'one'], 'chemical substance (hormone name ending)', 'ماده شیمیایی (پایان نام هورمون)', 'lx'],
    ['-ism', ['ism'], 'condition, state of', 'حالت، وضعیت', '*'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-logist', ['logist'], 'specialist', 'متخصص', 'lx'],
    ['-logy', ['logy'], 'study of', 'علم، مطالعه', 'lx'],
    ['-lysis, -lytic', ['lysis', 'lytic'], 'breakdown, destruction', 'تجزیه، تخریب', 'pa'],
    ['-megaly', ['megaly'], 'enlargement', 'بزرگی', '*'],
    ['-meter', ['meter'], 'instrument to measure', 'وسیله اندازه‌گیری', 'pa'],
    ['-oid', ['oids', 'oid'], 'resembling', 'شبیه به', '*'],
    ['-oma', ['oma'], 'tumor', 'تومور', '*'],
    ['-osis, -sis', ['osis', 'sis'], 'abnormal condition', 'وضعیت (غیرطبیعی)', '*'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', '*'],
    ['-phagia', ['phagia'], 'eating, swallowing', 'خوردن', 'pa'],
    ['-plasia', ['plasia'], 'formation, development', 'تشکیل، رشد', 'ad'],
    ['-prandial', ['prandial'], 'pertaining to a meal', 'مربوط به وعده غذا', 'pa'],
    ['-rrhea', ['rrhea'], 'flow, discharge', 'جریان، ترشح', 'hp'],
    ['-scopic, -scopy', ['scopic', 'scopy'], 'visual examination', 'مشاهده (معاینه با دید)', 'ad'],
    ['-stasis', ['stasis'], 'standing still, stable', 'ثابت ماندن', 'lx'],
    ['-therapy', ['therapy'], 'treatment', 'درمان', 'dx'],
    ['-tomy', ['tomy'], 'incision, cutting into', 'برش', '*'],
    ['-tropin, -tropic', ['trophin', 'tropin', 'trophic', 'tropic'], 'stimulating (nourishing)', 'محرک (تغذیه‌کننده)', 'hp'],
    ['-uria', ['uria'], 'urine condition', 'وضعیت ادرار', 'pa'],
    ['-y, -ia', ['y', 'ia'], 'condition, process', 'حالت، فرایند', '*']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    ['A1c, HbA1c', 'glycated hemoglobin (hemoglobin A1c)', 'هموگلوبین گلیکوزیله: میانگین قند ۲ تا ۳ ماه', 'pa'],
    ['ACTH', 'adrenocorticotropic hormone', 'هورمون محرک قشر فوق‌کلیه', 'hp'],
    ['ADA', 'American Diabetes Association', 'انجمن دیابت آمریکا', 'pa'],
    ['ADH', 'antidiuretic hormone (vasopressin)', 'هورمون ضدادراری (وازوپرسین)', 'hp'],
    ['BMR', 'basal metabolic rate', 'سوخت‌وساز پایه', 'th'],
    ['BS', 'blood sugar', 'قند خون', 'pa'],
    ['CAH', 'congenital adrenal hyperplasia', 'هایپرپلازی مادرزادی فوق‌کلیه', 'ad'],
    ['CSII', 'continuous subcutaneous insulin infusion', 'تزریق مداوم زیرجلدی انسولین (پمپ)', 'pa'],
    ['CT', 'calcitonin', 'کلسی‌تونین', 'th'],
    ['DI', 'diabetes insipidus', 'دیابت بی‌مزه', 'hp'],
    ['DKA', 'diabetic ketoacidosis', 'کتواسیدوز دیابتی', 'pa'],
    ['DM', 'diabetes mellitus', 'دیابت شیرین', 'pa'],
    ['FBG', 'fasting blood glucose', 'قند خون ناشتا', 'pa'],
    ['FBS', 'fasting blood sugar', 'قند خون ناشتا', 'pa'],
    ['FPG', 'fasting plasma glucose', 'گلوکز ناشتای پلاسما', 'pa'],
    ['FSH', 'follicle-stimulating hormone', 'هورمون محرک فولیکول', 'hp'],
    ['FTI, T7', 'free thyroxine index', 'شاخص تیروکسین آزاد', 'th'],
    ['GDM', 'gestational diabetes mellitus', 'دیابت بارداری', 'pa'],
    ['GH, hGH', 'growth hormone (human growth hormone)', 'هورمون رشد', 'hp'],
    ['GTT', 'glucose tolerance test', 'آزمون تحمل گلوکز', 'pa'],
    ['HCG', 'human chorionic gonadotropin', 'گنادوتروپین جفتی انسان', 'dx'],
    ['HRT', 'hormone replacement therapy', 'هورمون‌درمانی جایگزین', 'dx'],
    ['HTN', 'hypertension', 'پرفشاری خون', 'ad'],
    ['131I', 'iodine-131 (radioactive iodine)', 'ید ۱۳۱ (ید رادیواکتیو)', 'th'],
    ['ICSH', 'interstitial cell-stimulating hormone', 'هورمون محرک سلول‌های بینابینی (LH در مرد)', 'hp'],
    ['IDDM', 'insulin-dependent diabetes mellitus (type 1)', 'دیابت وابسته به انسولین (نوع ۱)', 'pa'],
    ['IFG', 'impaired fasting glucose', 'اختلال قند ناشتا', 'pa'],
    ['IGT', 'impaired glucose tolerance', 'اختلال تحمل گلوکز', 'pa'],
    ['K+', 'potassium', 'پتاسیم', 'ad'],
    ['LH', 'luteinizing hormone', 'هورمون لوتئینی‌کننده', 'hp'],
    ['LTH', 'lactogenic hormone (prolactin)', 'هورمون شیرساز (پرولاکتین)', 'hp'],
    ['MEN', 'multiple endocrine neoplasia', 'نئوپلازی متعدد غدد درون‌ریز', 'dx'],
    ['MRI', 'magnetic resonance imaging', 'تصویربرداری تشدید مغناطیسی', 'dx'],
    ['MSH', 'melanocyte-stimulating hormone', 'هورمون محرک ملانوسیت', 'hp'],
    ['Na+', 'sodium', 'سدیم', 'ad'],
    ['NIDDM', 'non-insulin-dependent diabetes mellitus (type 2)', 'دیابت غیروابسته به انسولین (نوع ۲)', 'pa'],
    ['NPH', 'neutral protamine Hagedorn (insulin)', 'انسولین NPH (اثر متوسط)', 'pa'],
    ['OGTT', 'oral glucose tolerance test', 'آزمون تحمل گلوکز خوراکی', 'pa'],
    ['OXT', 'oxytocin', 'اکسی‌توسین', 'hp'],
    ['PBI', 'protein-bound iodine', 'ید متصل به پروتئین', 'th'],
    ['PCOS', 'polycystic ovary syndrome', 'سندرم تخمدان پلی‌کیستیک', 'dx'],
    ['PHPT', 'primary hyperparathyroidism', 'پرکاری اولیه پاراتیروئید', 'th'],
    ['PRL', 'prolactin', 'پرولاکتین', 'hp'],
    ['PTH', 'parathyroid hormone (parathormone)', 'هورمون پاراتیروئید (پاراتورمون)', 'th'],
    ['RAI', 'radioactive iodine', 'ید رادیواکتیو', 'th'],
    ['RAIU', 'radioactive iodine uptake', 'جذب ید رادیواکتیو', 'th'],
    ['RH', 'releasing hormone', 'هورمون آزادکننده (هیپوتالاموس)', 'hp'],
    ['RIA', 'radioimmunoassay', 'رادیوایمونواسی', 'dx'],
    ['SAD', 'seasonal affective disorder', 'اختلال عاطفی فصلی', 'dx'],
    ['SIADH', 'syndrome of inappropriate antidiuretic hormone', 'سندرم ترشح نابجای ADH', 'hp'],
    ['STH', 'somatotropic hormone (growth hormone)', 'هورمون سوماتوتروپیک (هورمون رشد)', 'hp'],
    ['T1DM', 'type 1 diabetes mellitus', 'دیابت نوع ۱', 'pa'],
    ['T2DM', 'type 2 diabetes mellitus', 'دیابت نوع ۲', 'pa'],
    ['T3', 'triiodothyronine', 'تری‌یدوتیرونین', 'th'],
    ['T4', 'thyroxine (tetraiodothyronine)', 'تیروکسین (تترایدوتیرونین)', 'th'],
    ['TBG', 'thyroxine-binding globulin', 'گلوبولین متصل‌شونده به تیروکسین', 'th'],
    ['TFT', 'thyroid function test', 'آزمایش عملکرد تیروئید', 'th'],
    ['TSH', 'thyroid-stimulating hormone', 'هورمون محرک تیروئید', 'hp'],
    ['TSH-RH', 'thyroid-stimulating hormone–releasing hormone', 'هورمون آزادکننده TSH', 'hp'],
    ['WNL', 'within normal limits', 'در محدوده طبیعی', 'dx'],
    ['PMHx', 'past medical history', 'سابقه پزشکی گذشته', 'dx'],
    ['ROS', 'review of systems', 'مرور دستگاه‌ها', 'dx']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {
    Anatomy_and_Physiology: 'آناتومی و فیزیولوژی', Pathology_and_Disorders: 'بیماری‌ها و اختلالات',
    Laboratory_and_Diagnostics: 'آزمایشگاه و تشخیص', Pharmacology_and_Treatment: 'درمان، دارو و جراحی'
  };
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], c: r[5], ab: r[6] || [] }));
  /* ---------- دسته‌بندی واژه‌ها ----------
   * دسته اصلی هر واژه در داده آمده (آناتومی، بیماری، آزمایش، درمان)؛ اینجا ریزتر می‌شود:
   * آناتومی ← «غدد و ساختارها» یا «هورمون‌ها و مواد»؛ بیماری ← «بیماری‌ها» یا «نشانه‌ها و یافته‌ها». */
  const CATS = [
    { id: 'body', icon: '🫀', name: 'غدد و ساختارها' },
    { id: 'cell', icon: '🧬', name: 'هورمون‌ها و مواد' },
    { id: 'field', icon: '🎓', name: 'رشته‌ها و متخصصان' },
    { id: 'dz', icon: '🦠', name: 'بیماری‌ها' },
    { id: 'sx', icon: '🌡️', name: 'نشانه‌ها و یافته‌ها' },
    { id: 'lab', icon: '🧪', name: 'آزمایش و تصویربرداری' },
    { id: 'tx', icon: '💊', name: 'درمان، دارو و جراحی' }
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
      const pool = buildable(w), x = rnd(pool);
      const used = new Set(x.parts.map(p => p.r.id));
      const extra = shuffle(ROOTS.filter(r => !used.has(r.id) && inW(r, w) && r.w !== '*')).slice(0, 3).map(r => r.kind === 'root' ? r.a.split(',')[0] : r.a.split(',')[0]);
      return { kind: 'build', tag: 'build', q: `واژه‌ای بساز به معنی «<b>${short(x.t.fa)}</b>»`, parts: x.parts.map(partLabel), extra, why: why(x.t) + `<div class="wbx">${x.parts.map(p => `<span><b dir="ltr">${partLabel(p)}</b> ${p.r.fa}</span>`).join('')}</div>` };
    };
    G['ab:' + W] = () => {
      const pool = ABBR.filter(a => !w || a.w === w), a = rnd(pool);
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
  const f = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${p.size || 10}" font-weight="${p.w || 600}" fill="${p.fill || MUTED}" text-anchor="${FLIP[p.anchor || 'middle']}" direction="rtl" font-family="${FONT_FA}">${LRI(s)}</text>`; };
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
    return svg(360, 190, `${f(180, 22, 'یک واژه = پیشوند + ریشه + پسوند', { size: 11, fill: INK, w: 700 })}
      ${part(10, 74, 'hyper', '#1272a3', '#ddf1fb')}${part(90, 94, 'thyroid', '#7a3fd1', '#efe6fb')}${part(190, 56, 'ism', '#3f8a05', '#e7f9d8')}
      ${br(10, 84, 'prefix', 'پیشوند: بیش از حد', '#1272a3')}${br(90, 184, 'root', 'ریشه: تیروئید', '#7a3fd1')}${br(190, 246, 'suffix', 'پسوند: حالت', '#3f8a05')}
      <rect x="258" y="40" width="94" height="40" rx="10" fill="#f8f6f5"/>${f(305, 58, 'حالتِ کارِ', { size: 10.5, fill: '#3f8a05', w: 800 })}${f(305, 74, 'بیش از حد تیروئید', { size: 10.5, fill: INK, w: 800 })}
      <path d="M232 150 C170 176 100 176 46 150" stroke="#7a3fd1" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M50 146 l-6 4 l7 3" stroke="#7a3fd1" stroke-width="2" fill="none"/>
      ${f(140, 184, 'معنی را از آخر بخوان: پسوند ← پیشوند ← ریشه', { size: 10, fill: '#7a3fd1', w: 700 })}`, 'آناتومی یک واژه پزشکی');
  };

  /* غده برون‌ریز و درون‌ریز */
  A['endo-exo'] = () => {
    const a = 'm' + (++UID), g1 = 'g' + (++UID), g2 = 'g' + (++UID), sh = 'g' + (++UID);
    return svg(360, 220, `
      <rect x="10" y="10" width="164" height="200" rx="14" fill="#f4f9ff"/><rect x="186" y="10" width="164" height="200" rx="14" fill="#fbf4ff"/>
      ${lab(92, 32, 'exocrine gland', 'غده برون‌ریز: با مجرا', { size: 12, fill: '#1272a3' })}
      <rect x="22" y="58" width="140" height="16" rx="4" fill="#f3d6c4"/>${f(92, 70, 'سطح پوست', { size: 9, fill: '#8a5a3a' })}
      <path d="M92 74 v54" stroke="#6aa9d8" stroke-width="7" stroke-linecap="round"/>
      <g filter="url(#${sh})"><circle cx="92" cy="148" r="26" fill="url(#${g1})" stroke="#4f8fc0" stroke-width="1.5"/></g>${dots(92, 148, 18, 14, '#ffffff', 2.2, 4)}
      <path d="M92 96 l0 -18" stroke="#1272a3" stroke-width="2" marker-end="url(#${a})"/>
      ${f(92, 192, 'ترشح از راه مجرا به بیرون', { size: 10, fill: '#1272a3', w: 700 })}${f(92, 204, 'مثل غده عرق و بزاق', { size: 9 })}
      ${lab(268, 32, 'endocrine gland', 'غده درون‌ریز: بدون مجرا', { size: 12, fill: '#7a3fd1' })}
      <path d="M200 70 C240 62 300 62 340 70" stroke="#d64a4a" stroke-width="16" fill="none" stroke-linecap="round" opacity=".85"/>${f(318, 94, 'مویرگ خونی', { size: 9, fill: '#b23a3a' })}
      <g filter="url(#${sh})"><circle cx="268" cy="148" r="26" fill="url(#${g2})" stroke="#8b5bd6" stroke-width="1.5"/></g>
      ${[[252, 126], [268, 116], [284, 126]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#ffb000" stroke="#c98200"/>`).join('')}
      <path d="M268 112 L268 82" stroke="#7a3fd1" stroke-width="2" stroke-dasharray="3 3" marker-end="url(#${a})"/>
      ${f(268, 192, 'هورمون مستقیم وارد خون می‌شود', { size: 10, fill: '#7a3fd1', w: 700 })}${f(268, 204, 'endo- درون + crin/o ترشح', { size: 9 })}`,
      'غده برون‌ریز و درون‌ریز', `${marker(a)}${radial(g1, '#d9ecfb', '#8fbde3')}${radial(g2, '#efe4fd', '#b996ec')}${shadow(sh)}`);
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
      ${L(176, 56, 96, 30)}${lab(56, 26, 'hypothalamus', 'هیپوتالاموس', { size: 10 })}
      ${L(178, 68, 96, 66)}${lab(56, 64, 'pituitary', 'هیپوفیز', { size: 10 })}
      ${L(192, 50, 266, 34)}${lab(306, 30, 'pineal', 'اپی‌فیز (صنوبری)', { size: 10 })}
      ${L(196, 112, 266, 92)}${lab(306, 88, 'thyroid', 'تیروئید', { size: 10 })}
      ${L(190, 118, 266, 128)}${lab(306, 124, 'parathyroids', 'پاراتیروئیدها (پشت تیروئید)', { size: 10 })}
      ${L(168, 150, 96, 128)}${lab(56, 124, 'thymus', 'تیموس', { size: 10 })}
      ${L(212, 206, 266, 182)}${lab(306, 178, 'pancreas', 'پانکراس (جزایر)', { size: 10 })}
      ${L(150, 206, 96, 190)}${lab(56, 186, 'adrenal glands', 'فوق‌کلیه‌ها', { size: 10 })}
      ${L(146, 232, 96, 248, '#b5524a')}${lab(56, 244, 'kidney', 'کلیه (برای جهت‌یابی)', { size: 9.5, fill: MUTED })}
      ${L(200, 292, 266, 280)}${lab(306, 276, 'gonads', 'غدد جنسی: تخمدان یا بیضه', { size: 10 })}
      ${f(180, 370, 'مانکن آناتومی: جای غدد درون‌ریز در بدن', { size: 10 })}`, 'نقشه غدد درون‌ریز',
      `${linear(g, SKIN1, SKIN2, true)}${shadow(sh)}${radial(gt, '#f6a89c', '#d65f52')}${radial(gk, '#d87a70', '#a8473f')}${linear(ga, '#ffd97a', '#f0a92c', true)}${linear(gp, '#ffd2b5', '#f1a578', true)}`);
  };

  /* قفل و کلید: هورمون و گیرنده */
  A['lock-key'] = () => {
    const g = 'g' + (++UID), sh = 'g' + (++UID), a = 'm' + (++UID);
    return svg(360, 222, `
      <path d="M14 40 C60 34 100 34 146 40" stroke="#d64a4a" stroke-width="18" fill="none" stroke-linecap="round" opacity=".8"/>${f(80, 70, 'جریان خون', { size: 9.5, fill: '#b23a3a' })}
      ${[[40, 40, '#ffb000'], [80, 38, '#2bb3a3'], [118, 40, '#ffb000']].map(p => `<rect x="${p[0] - 6}" y="${p[1] - 6}" width="12" height="12" rx="3" fill="${p[2]}" stroke="#fff"/>`).join('')}
      <path d="M126 52 C170 70 190 90 214 108" stroke="${LINE}" stroke-width="2" fill="none" marker-end="url(#${a})" stroke-dasharray="4 3"/>
      <g filter="url(#${sh})"><ellipse cx="270" cy="128" rx="78" ry="58" fill="url(#${g})" stroke="#8b5bd6" stroke-width="1.5"/></g>
      <ellipse cx="282" cy="140" rx="22" ry="18" fill="#b28ae6" opacity=".6"/>${f(282, 144, 'هسته', { size: 9, fill: '#fff', w: 800 })}
      <path d="M208 92 h16 v-10 h16 v10 h0" stroke="#7a3fd1" stroke-width="5" fill="none" stroke-linejoin="round"/>
      <rect x="218" y="70" width="12" height="12" rx="3" fill="#ffb000" stroke="#c98200"/>
      <path d="M318 86 h14 l0 10 h-14z" fill="none" stroke="#7a3fd1" stroke-width="5"/>
      <rect x="330" y="96" width="12" height="12" rx="3" fill="#2bb3a3" stroke="#1d8075" opacity=".9"/>${t(336, 124, '✕', { size: 13, fill: '#c8243f', w: 900 })}
      ${lab(196, 40, 'receptor', 'گیرنده', { size: 10.5, fill: '#7a3fd1' })}${lab(80, 108, 'hormone', 'هورمون = کلید', { size: 10.5, fill: '#c98200' })}
      ${lab(270, 202, 'target cell', 'سلول هدف', { size: 11, fill: '#5a2bb0' })}
      ${f(250, 18, 'فقط کلیدِ جور، قفل را باز می‌کند', { size: 10, fill: INK, w: 700 })}`, 'هورمون و گیرنده',
      `${radial(g, '#f6effe', '#d6c1f3')}${shadow(sh)}${marker(a)}`);
  };

  /* بازخورد منفی: محور هیپوتالاموس، هیپوفیز، تیروئید */
  A.feedback = () => {
    const a = 'm' + (++UID), r = 'm' + (++UID);
    const box = (x, y, w, en, fa, c, bg) => `<rect x="${x}" y="${y}" width="${w}" height="42" rx="12" fill="${bg}" stroke="${c}" stroke-width="1.5"/>${lab(x + w / 2, y + 18, en, fa, { size: 11, fill: c })}`;
    return svg(360, 300, `
      ${box(30, 14, 150, 'hypothalamus', 'هیپوتالاموس', '#6a2fb0', '#f3ecfd')}
      ${box(30, 104, 150, 'anterior pituitary', 'هیپوفیز قدامی', '#8e44d9', '#f0e6fb')}
      ${box(30, 194, 150, 'thyroid gland', 'تیروئید', '#0b7b7b', '#ddf5f4')}
      ${arrow(a, 105, 58, 105, 100, '#3f8a05', 2.4)}${pill(112, 70, 70, 20, '#e7f9d8')}${t(147, 84, 'TRH (+)', { size: 10.5, fill: '#3f8a05', w: 900 })}
      ${arrow(a, 105, 148, 105, 190, '#3f8a05', 2.4)}${pill(112, 160, 70, 20, '#e7f9d8')}${t(147, 174, 'TSH (+)', { size: 10.5, fill: '#3f8a05', w: 900 })}
      ${arrow(a, 105, 238, 105, 270, '#0b7b7b', 2.4)}${pill(60, 272, 90, 22, '#ddf5f4')}${t(105, 287, 'T3, T4', { size: 11.5, fill: '#0b7b7b', w: 900 })}
      ${curve(r, 'M152 282 C252 282 252 40 184 34', '#c8243f', 2.2, true)}${curve(r, 'M152 282 C214 280 220 130 184 124', '#c8243f', 2.2, true)}
      <circle cx="236" cy="150" r="15" fill="#fde3e7" stroke="#c8243f"/>${t(236, 155, '−', { size: 18, fill: '#c8243f', w: 900 })}
      ${f(306, 168, 'هورمون زیاد شد؟', { size: 10, fill: '#c8243f', w: 800 })}${f(306, 182, 'دستور ترشح را', { size: 9.5 })}${f(306, 195, 'متوقف می‌کند', { size: 9.5 })}
      ${f(306, 236, 'مثل ترموستات', { size: 10, fill: INK, w: 800 })}${f(306, 250, 'بازخورد منفی', { size: 9.5 })}`, 'بازخورد منفی', `${marker(a, '#3f8a05')}${marker(r, '#c8243f')}`);
  };

  /* ترشح بیش از حد و کمتر از حد */
  A['hyper-hypo'] = () => {
    const g = 'g' + (++UID);
    return svg(360, 210, `
      <rect x="40" y="20" width="300" height="160" rx="12" fill="#fafafa" stroke="#eee"/>
      <rect x="40" y="76" width="300" height="48" fill="#e7f9d8"/>${f(312, 104, 'طبیعی', { size: 10, fill: '#3f8a05', w: 800 })}
      <rect x="40" y="20" width="300" height="56" rx="12" fill="#fde3e7" opacity=".7"/><rect x="40" y="124" width="300" height="56" rx="12" fill="#e2efff" opacity=".8"/>
      <path d="M50 100 C90 100 100 96 120 92 C150 80 160 40 190 38 C214 36 220 70 238 104 C254 136 270 160 296 158 C316 156 324 120 332 104" stroke="url(#${g})" stroke-width="4" fill="none" stroke-linecap="round"/>
      ${lab(102, 42, 'hypersecretion', 'ترشح بیش از حد: hyper-', { size: 11, fill: '#a31b33' })}
      ${lab(110, 148, 'hyposecretion', 'ترشح کمتر از حد: hypo-', { size: 11, fill: '#1565c0' })}
      ${t(28, 52, '↑', { size: 16, fill: '#a31b33', w: 900 })}${t(28, 158, '↓', { size: 16, fill: '#1565c0', w: 900 })}
      ${f(190, 200, 'بیشتر بیماری‌های غدد = زیاد یا کمِ یک هورمون', { size: 10.5, fill: INK, w: 700 })}`, 'ترشح بیش از حد و کمتر از حد', linear(g, '#7a3fd1', '#1e88e5'));
  };

  /* ================= هیپوتالاموس و هیپوفیز ================= */
  A.pituitary = () => {
    const g = 'g' + (++UID), ga = 'g' + (++UID), gn = 'g' + (++UID), sh = 'g' + (++UID), gb = 'g' + (++UID);
    return svg(360, 262, `
      <path d="M20 20 C120 6 240 6 340 20 L340 96 C260 88 220 90 196 100 L160 100 C136 90 100 88 20 96Z" fill="url(#${g})" stroke="#d4c2ef"/>
      ${f(70, 50, 'مغز', { size: 11, fill: '#8a6fb8', w: 800 })}
      <path d="M140 96 C150 70 210 70 220 96Z" fill="#c9a6f2" stroke="#8e44d9" stroke-width="1.5"/>
      <path d="M172 96 C172 114 176 124 180 134 L188 134 C190 124 192 112 192 96Z" fill="#d8bff5" stroke="#8e44d9" stroke-width="1.3"/>
      <path d="M96 186 C96 150 130 140 150 150 C170 158 210 158 230 150 C250 140 284 150 284 186 C284 214 250 224 190 224 C130 224 96 214 96 186Z" fill="url(#${gb})" stroke="#c7b39a" stroke-width="1.5"/>
      <g filter="url(#${sh})"><path d="M130 170 C130 146 176 138 184 150 L186 214 C160 216 130 204 130 170Z" fill="url(#${ga})" stroke="#a24d7c" stroke-width="1.4"/>
      <path d="M186 150 C196 138 240 146 240 172 C240 202 214 214 188 214Z" fill="url(#${gn})" stroke="#6a55b8" stroke-width="1.4"/></g>
      ${[160, 172, 184].map((x, i) => `<path d="M${x - 2} 92 C${x + 6} 118 ${196 + i * 8} 130 ${206 + i * 8} 160" stroke="#6a2fb0" stroke-width="1.3" fill="none" stroke-dasharray="3 2"/>`).join('')}
      ${lab(250, 44, 'hypothalamus', 'هیپوتالاموس', { size: 10.5, fill: '#5a2bb0' })}<path d="M212 82 L238 60" stroke="#8a97a3" stroke-width="1.2"/>
      <path d="M194 118 L262 104" stroke="#8a97a3" stroke-width="1.2"/>${lab(304, 100, 'infundibulum', 'ساقه هیپوفیز', { size: 10 })}
      ${lab(62, 120, 'adenohypophysis', 'لوب قدامی', { size: 10, fill: '#a24d7c' })}<path d="M96 132 L146 166" stroke="#a24d7c" stroke-width="1.2"/>
      ${lab(306, 140, 'neurohypophysis', 'لوب خلفی', { size: 10, fill: '#5a49a8' })}<path d="M276 150 L230 176" stroke="#5a49a8" stroke-width="1.2"/>
      ${lab(190, 240, 'sella turcica', 'زین ترکی در استخوان اسفنوئید', { size: 10, fill: '#8a6a3c' })}
      ${f(76, 222, 'جلو ←', { size: 9.5 })}${f(310, 222, '→ عقب', { size: 9.5 })}`, 'غده هیپوفیز و هیپوتالاموس',
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
      ${T(180, 40, 'GH', 'bone, muscle', 'استخوان و عضله', '#c2185b', a)}
      ${T(300, 70, 'TSH', 'thyroid', 'تیروئید', '#c2185b', a)}
      ${T(326, 168, 'ACTH', 'adrenal cortex', 'قشر فوق‌کلیه', '#c2185b', a)}
      ${T(270, 262, 'FSH, LH', 'ovary / testis', 'تخمدان / بیضه', '#c2185b', a)}
      ${T(150, 270, 'PRL', 'mammary glands', 'غدد شیری', '#c2185b', a)}
      ${T(44, 220, 'MSH', 'skin', 'پوست (رنگدانه)', '#c2185b', a)}
      ${T(40, 112, 'ADH', 'kidney', 'کلیه (بازجذب آب)', '#7a3fd1', b)}
      ${T(82, 38, 'OXT', 'uterus, breast', 'رحم، پستان', '#7a3fd1', b)}
      ${f(300, 290, '— قدامی (A)', { size: 9.5, fill: '#c2185b', w: 800 })}${f(80, 290, '— خلفی (P)', { size: 9.5, fill: '#7a3fd1', w: 800 })}`, 'هورمون‌های هیپوفیز و اندام‌های هدف',
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
      ${lab(52, 232, 'normal', 'رشد طبیعی', { size: 10.5, fill: '#5a6b7c' })}
      ${lab(130, 232, 'gigantism', 'GH زیاد پیش از بلوغ', { size: 10.5, fill: '#5a2bb0' })}
      ${lab(214, 232, 'dwarfism', 'GH کم در کودکی', { size: 10.5, fill: '#1565c0' })}
      ${lab(298, 232, 'acromegaly', 'GH زیاد پس از بلوغ', { size: 10.5, fill: '#b8651a' })}
      ${f(298, 64, 'دست، پا و فک', { size: 9.5, fill: '#b8651a', w: 800 })}${f(298, 76, 'بزرگ می‌شوند', { size: 9.5, fill: '#b8651a' })}
      ${f(180, 262, 'زمانِ زیادیِ هورمون رشد، نوع بیماری را تعیین می‌کند', { size: 10.5, fill: INK, w: 700 })}`, 'اختلال‌های هورمون رشد', linear(g, '#fff', '#fff'));
  };

  /* ADH: دیابت بی‌مزه و SIADH */
  A.adh = () => {
    const gk = 'g' + (++UID);
    const kid = (x) => `<path d="M${x - 16} 70 c20 -16 44 -2 44 30 c0 32 -22 46 -44 32 c-10 -6 -6 -18 2 -22 c8 -4 8 -14 0 -18 c-8 -4 -12 -16 -2 -22z" fill="url(#${gk})" stroke="#8d3a33" stroke-width="1.4"/>`;
    const drop = (x, y, s) => `<path d="M${x} ${y - 9 * s} C${x} ${y - 9 * s} ${x - 6 * s} ${y - 1 * s} ${x - 6 * s} ${y + 3 * s} a${6 * s} ${6 * s} 0 0 0 ${12 * s} 0 C${x + 6 * s} ${y - 1 * s} ${x} ${y - 9 * s} ${x} ${y - 9 * s}z" fill="#4fb3f0"/>`;
    return svg(360, 240, `
      <rect x="10" y="10" width="164" height="220" rx="14" fill="#f2f8ff"/><rect x="186" y="10" width="164" height="220" rx="14" fill="#fff6ec"/>
      ${lab(92, 30, 'diabetes insipidus', 'ADH کم', { size: 11.5, fill: '#1565c0' })}${kid(84)}
      ${[0, 1, 2, 3, 4].map(i => drop(70 + i * 9, 160 + (i % 2) * 10, 1)).join('')}${[0, 1, 2].map(i => drop(64 + i * 14, 184, 1.1)).join('')}
      ${f(92, 208, 'ادرار زیاد و رقیق (polyuria)', { size: 9.5, fill: '#1565c0', w: 700 })}${f(92, 221, '+ تشنگی شدید (polydipsia)', { size: 9.5 })}
      ${lab(268, 30, 'SIADH', 'ADH زیاد و نابجا', { size: 11.5, fill: '#b8651a' })}${kid(260)}
      ${drop(268, 168, 1)}
      <path d="M244 100 c-20 -10 -30 10 -24 22" stroke="#4fb3f0" stroke-width="3" fill="none"/>${f(268, 192, 'آب در بدن می‌ماند', { size: 9.5, fill: '#b8651a', w: 700 })}${f(268, 205, 'سدیم خون رقیق و کم می‌شود', { size: 9.5 })}${f(268, 218, '(hyponatremia)', { size: 9.5 })}`,
      'دیابت بی‌مزه و SIADH', radial(gk, '#d87a70', '#a8473f'));
  };

  /* ================= تیروئید و پاراتیروئید ================= */
  A.thyroid = () => {
    const gt = 'g' + (++UID), gc = 'g' + (++UID), sh = 'g' + (++UID), gb = 'g' + (++UID);
    return svg(360, 260, `
      <rect x="160" y="28" width="40" height="214" rx="16" fill="url(#${gb})" stroke="#9fb6c6"/>
      ${[120, 140, 160, 180, 200, 220].map(y => `<path d="M162 ${y} h36" stroke="#a9c1cf" stroke-width="5" stroke-linecap="round"/>`).join('')}
      <path d="M150 34 h60 l-6 40 c-8 10 -40 10 -48 0z" fill="url(#${gc})" stroke="#7fa3bd" stroke-width="1.4"/><path d="M180 44 v26" stroke="#7fa3bd"/>
      <g filter="url(#${sh})">${thyroidShape(180, 120, 2.1, gt)}</g>
      ${lab(296, 52, 'thyroid cartilage', 'غضروف تیروئید = سیب آدم', { size: 10 })}<path d="M210 54 L252 52" stroke="#8a97a3" stroke-width="1.2"/>
      ${lab(296, 104, 'left lobe', 'لوب چپ', { size: 10.5 })}<path d="M222 112 L262 104" stroke="#8a97a3" stroke-width="1.2"/>
      ${lab(64, 104, 'right lobe', 'لوب راست', { size: 10.5 })}<path d="M136 112 L98 104" stroke="#8a97a3" stroke-width="1.2"/>
      ${lab(64, 164, 'isthmus', 'تنگه (اتصال دو لوب)', { size: 10.5 })}<path d="M170 138 L104 160" stroke="#8a97a3" stroke-width="1.2"/>
      ${lab(296, 200, 'trachea', 'نای', { size: 10.5 })}<path d="M200 200 L262 198" stroke="#8a97a3" stroke-width="1.2"/>
      ${f(180, 252, 'نمای روبه‌رو: تیروئید پروانه‌ای جلوی نای', { size: 10 })}`, 'غده تیروئید',
      `${radial(gt, '#f8b0a4', '#d65f52')}${linear(gc, '#e9f2f8', '#c6d9e6', true)}${shadow(sh)}${linear(gb, '#eef5f9', '#d6e5ee')}`);
  };

  /* پاراتیروئیدها: نمای پشت */
  A.parathyroid = () => {
    const gt = 'g' + (++UID), sh = 'g' + (++UID), gp = 'g' + (++UID);
    return svg(360, 220, `
      <rect x="164" y="38" width="32" height="172" rx="14" fill="#f1e3d4" stroke="#d2b79c"/>${f(180, 206, 'مری', { size: 9 })}
      <g filter="url(#${sh})">${thyroidShape(180, 106, 2.2, gt)}</g>
      ${[[132, 82], [132, 130], [228, 82], [228, 130]].map(p => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="9" ry="7" fill="url(#${gp})" stroke="#b58a00" stroke-width="1.4"/>`).join('')}
      ${lab(56, 80, 'superior', 'پاراتیروئید فوقانی', { size: 10 })}<path d="M122 82 L92 80" stroke="#8a97a3"/>
      ${lab(56, 132, 'inferior', 'پاراتیروئید تحتانی', { size: 10 })}<path d="M122 130 L92 132" stroke="#8a97a3"/>
      ${lab(304, 104, 'PTH', 'هورمون پاراتیروئید', { size: 11, fill: '#b58a00' })}<path d="M238 104 L274 104" stroke="#8a97a3"/>
      ${f(180, 26, 'نمای پشت: چهار غده کوچک روی تیروئید', { size: 10, fill: INK, w: 700 })}`, 'غدد پاراتیروئید',
      `${radial(gt, '#f8b0a4', '#d65f52')}${shadow(sh)}${radial(gp, '#ffe58a', '#f2b705')}`);
  };

  /* تعادل کلسیم: PTH و کلسی‌تونین */
  A.calcium = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID);
    const bone = (x, y) => `<path d="M${x - 40} ${y - 8} a8 8 0 1 1 6 -12 h68 a8 8 0 1 1 6 12 a8 8 0 1 1 -6 12 h-68 a8 8 0 1 1 -6 -12z" fill="#fbf3e4" stroke="#cdb48c" stroke-width="1.6"/>`;
    return svg(360, 230, `
      ${bone(80, 120)}${lab(80, 150, 'bone', 'استخوان: انبار کلسیم', { size: 10.5, fill: '#8a6a3c' })}
      <rect x="230" y="96" width="110" height="40" rx="20" fill="#fde3e3" stroke="#d64a4a"/>${lab(285, 112, 'blood Ca', 'کلسیم خون', { size: 11, fill: '#a31b33' })}
      ${curve(a, 'M124 104 C160 60 200 60 234 98', '#b58a00', 3)}${pill(138, 44, 84, 22, '#fff4cc')}${t(180, 60, 'PTH ↑ Ca', { size: 11, fill: '#8a6500', w: 900 })}
      ${curve(b, 'M234 134 C200 176 160 176 124 136', '#0b7b7b', 3)}${pill(128, 176, 104, 22, '#ddf5f4')}${t(180, 192, 'calcitonin ↓ Ca', { size: 11, fill: '#0b7b7b', w: 900 })}
      ${f(180, 30, 'parathyroid: کلسیم را از استخوان به خون می‌آورد', { size: 9.5, fill: '#8a6500', w: 700 })}
      ${f(180, 218, 'thyroid: کلسیم را از خون به استخوان می‌برد', { size: 9.5, fill: '#0b7b7b', w: 700 })}`, 'تعادل کلسیم', `${marker(a, '#b58a00')}${marker(b, '#0b7b7b')}`);
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
      ${f(92, 142, 'tetra- = چهار ید', { size: 10.5, fill: '#7a3fd1', w: 800 })}${f(92, 160, 'فراوان‌تر، ذخیره‌ای', { size: 9.5 })}
      ${t(268, 36, 'T3 = triiodothyronine', { size: 12, fill: '#0b7b7b', w: 900 })}${ring(246, 96)}${ring(294, 96)}<path d="M260 96 h20" stroke="#0b7b7b" stroke-width="2"/>
      ${I(228, 70)}${I(256, 66)}${I(312, 70)}
      ${f(268, 142, 'tri- = سه ید', { size: 10.5, fill: '#7a3fd1', w: 800 })}${f(268, 160, 'فعال‌تر و قوی‌تر', { size: 9.5 })}
      ${f(180, 186, 'بدون ید کافی هورمون تیروئید ساخته نمی‌شود ← گواتر', { size: 9.5, fill: INK, w: 700 })}`, 'تیروکسین و تری‌یدوتیرونین');
  };

  /* پرکاری و کم‌کاری تیروئید */
  A['thyroid-compare'] = () => {
    const row = (y, a, b) => `${f(96, y, a, { size: 10.5, fill: INK })}${f(264, y, b, { size: 10.5, fill: INK })}`;
    return svg(360, 250, `
      <rect x="10" y="10" width="166" height="230" rx="14" fill="#fff1ec"/><rect x="184" y="10" width="166" height="230" rx="14" fill="#eef5ff"/>
      ${lab(93, 32, 'hyperthyroidism', 'پرکاری: موتور تند', { size: 11.5, fill: '#c2410c' })}${lab(267, 32, 'hypothyroidism', 'کم‌کاری: موتور کند', { size: 11.5, fill: '#1565c0' })}
      ${t(93, 82, '🔥', { size: 22 })}${t(267, 82, '❄️', { size: 22 })}
      ${row(108, 'کاهش وزن', 'افزایش وزن')}${row(130, 'تپش قلب (tachycardia)', 'ضربان کند')}${row(152, 'گرمازدگی، تعریق', 'سرمازدگی')}${row(174, 'بی‌قراری، بی‌خوابی', 'خستگی، کندی')}${row(196, 'exophthalmos، گواتر', 'پوست خشک، myxedema')}
      ${f(93, 226, 'نمونه: Graves', { size: 10, fill: '#c2410c', w: 800 })}${f(267, 226, 'نمونه: Hashimoto', { size: 10, fill: '#1565c0', w: 800 })}`, 'پرکاری و کم‌کاری تیروئید');
  };

  /* ================= فوق‌کلیه ================= */
  A.adrenal = () => {
    const gk = 'g' + (++UID), ga = 'g' + (++UID), sh = 'g' + (++UID), gc = 'g' + (++UID), gm = 'g' + (++UID);
    return svg(360, 250, `
      <g filter="url(#${sh})">${kidneyAdrenal(80, 140, 2.2, gk, ga, false)}</g>
      ${lab(80, 230, 'kidney + adrenal', 'فوق‌کلیه: کلاهی روی کلیه', { size: 10.5 })}
      <path d="M118 74 C150 60 170 60 196 72" stroke="${LINE}" stroke-width="1.6" fill="none" stroke-dasharray="4 3"/>
      <g filter="url(#${sh})"><path d="M206 190 L270 40 L342 190 Z" fill="url(#${gc})" stroke="#c98a12" stroke-width="2" stroke-linejoin="round"/>
      <path d="M232 174 L270 86 L316 174 Z" fill="url(#${gm})" stroke="#a5531c" stroke-width="1.5" stroke-linejoin="round"/></g>
      ${t(270, 158, 'medulla', { size: 11, fill: '#fff', w: 900 })}${f(270, 172, 'مرکز', { size: 9.5, fill: '#fff' })}
      ${lab(270, 26, 'cortex = قشر', 'کورتیزول، آلدوسترون، آندروژن', { size: 10.5, fill: '#9a6200' })}
      ${f(274, 212, 'مدولا: اپی‌نفرین و نوراپی‌نفرین', { size: 10, fill: '#a5531c', w: 800 })}${f(274, 228, 'قشر مثل پوست درخت، مدولا مثل مغز آن', { size: 9.5 })}`,
      'غده فوق‌کلیه',
      `${radial(gk, '#d87a70', '#a8473f')}${linear(ga, '#ffd97a', '#f0a92c', true)}${shadow(sh)}${linear(gc, '#ffe7a3', '#f4b844', true)}${linear(gm, '#e58b4b', '#b85d22', true)}`);
  };

  /* سه خانواده هورمون قشر: نمک، قند، جنس */
  A['cortex-zones'] = () => {
    const band = (y, h, c, bg, en, fa, ex) => `<rect x="20" y="${y}" width="320" height="${h}" rx="12" fill="${bg}" stroke="${c}"/>${t(36, y + 22, en, { size: 12, fill: c, w: 900, anchor: 'start' })}${f(324, y + 22, fa, { size: 11, fill: c, w: 800, anchor: 'end' })}${f(180, y + 42, ex, { size: 10, fill: INK })}`;
    return svg(360, 240, `${f(180, 22, 'قشر فوق‌کلیه سه «S» می‌سازد', { size: 11.5, fill: INK, w: 800 })}
      ${band(34, 54, '#0b7b7b', '#e2f6f4', 'Salt • mineralocorticoids', 'نمک', 'آلدوسترون: نگه‌داشتن سدیم و آب، دفع پتاسیم')}
      ${band(96, 54, '#b8651a', '#fdefdc', 'Sugar • glucocorticoids', 'قند', 'کورتیزول: افزایش قند خون، ضدالتهاب، کنار آمدن با استرس')}
      ${band(158, 54, '#a8345b', '#fbe6ee', 'Sex • gonadocorticoids', 'جنس', 'آندروژن‌ها: صفات ثانویه جنسی (به مقدار کم)')}
      ${f(180, 230, 'همه از کلسترول ساخته می‌شوند ← corticosteroids', { size: 10, fill: MUTED })}`, 'هورمون‌های قشر فوق‌کلیه');
  };

  /* استرس و اپی‌نفرین */
  A.stress = () => {
    const g = 'g' + (++UID);
    const it = (x, y, ic, fa) => `<circle cx="${x}" cy="${y}" r="22" fill="#fff4e6" stroke="#e8892b"/>${t(x, y + 7, ic, { size: 18 })}${f(x, y + 40, fa, { size: 9.5, fill: INK, w: 700 })}`;
    return svg(360, 250, `
      <path d="M180 92 L198 60 L188 60 L204 30 L168 70 L180 70 Z" fill="url(#${g})" stroke="#b8651a" stroke-width="1.2"/>
      ${lab(180, 112, 'epinephrine', 'اپی‌نفرین (آدرنالین)', { size: 11.5, fill: '#b8651a' })}
      ${it(44, 60, '❤️', 'ضربان قلب ↑')}${it(316, 60, '🩸', 'فشار خون ↑')}${it(44, 168, '🫁', 'تنفس ↑')}${it(316, 168, '🍬', 'قند خون ↑')}${it(180, 164, '👁️', 'مردمک گشاد')}
      ${f(180, 238, 'پاسخ جنگ یا گریز (fight-or-flight)', { size: 10.5, fill: '#b8651a', w: 800 })}`, 'اپی‌نفرین و استرس', linear(g, '#ffd36b', '#f08a1a', true));
  };

  /* کوشینگ و آدیسون */
  A['cushing-addison'] = () => {
    const face = (x, c, round) => round
      ? `<ellipse cx="${x}" cy="88" rx="40" ry="38" fill="${c}" stroke="#c9a27c"/><circle cx="${x - 14}" cy="82" r="3.5" fill="#5b4636"/><circle cx="${x + 14}" cy="82" r="3.5" fill="#5b4636"/><path d="M${x - 10} 104 q10 6 20 0" stroke="#5b4636" stroke-width="2.4" fill="none"/><ellipse cx="${x - 24}" cy="98" rx="8" ry="5" fill="#f08a8a" opacity=".55"/><ellipse cx="${x + 24}" cy="98" rx="8" ry="5" fill="#f08a8a" opacity=".55"/>`
      : `<ellipse cx="${x}" cy="88" rx="27" ry="37" fill="${c}" stroke="#7a5a3c"/><path d="M${x - 18} 98 q4 6 8 4 M${x + 18} 98 q-4 6 -8 4" stroke="#7a5a3c" stroke-width="1.4" fill="none" opacity=".6"/><circle cx="${x - 10}" cy="76" r="3.2" fill="#2f2219"/><circle cx="${x + 10}" cy="76" r="3.2" fill="#2f2219"/><path d="M${x - 8} 102 q8 -4 16 0" stroke="#2f2219" stroke-width="2.2" fill="none"/>`;
    return svg(360, 250, `
      <rect x="10" y="10" width="166" height="230" rx="14" fill="#fff4e8"/><rect x="184" y="10" width="166" height="230" rx="14" fill="#f3f0ee"/>
      ${lab(93, 30, 'Cushing syndrome', 'کورتیزول زیاد', { size: 11.5, fill: '#b8651a' })}${face(93, '#f6d3b5', true)}
      ${['صورت ماه‌گون (moon face)', 'کوهان بوفالویی', 'چاقی تنه + استریا', 'قند و فشار خون ↑'].map((s, i) => f(93, 150 + i * 20, s, { size: 10, fill: INK })).join('')}
      ${lab(267, 30, 'Addison disease', 'کورتیزول و آلدوسترون کم', { size: 11.5, fill: '#6b4a2c' })}${face(267, '#b98a62', false)}
      ${['پوست برنزی (hyperpigmentation)', 'ضعف و کاهش وزن', 'فشار و قند خون ↓', 'سدیم ↓، پتاسیم ↑'].map((s, i) => f(267, 150 + i * 20, s, { size: 10, fill: INK })).join('')}`, 'سندرم کوشینگ و بیماری آدیسون');
  };

  /* ================= پانکراس و دیابت ================= */
  A.pancreas = () => {
    const gp = 'g' + (++UID), sh = 'g' + (++UID), gi = 'g' + (++UID), a = 'm' + (++UID);
    return svg(360, 250, `
      <path d="M20 150 C20 120 40 108 60 112 C56 140 60 170 52 196 C34 196 20 176 20 150Z" fill="#e7c1a0" stroke="#c49773"/>${f(40, 214, 'دوازدهه', { size: 9, fill: '#8a6a3c' })}
      <g filter="url(#${sh})"><path d="M56 126 C90 100 150 112 190 104 C220 98 250 84 268 94 C282 102 278 120 262 124 C230 132 200 140 160 150 C120 160 84 160 60 156Z" fill="url(#${gp})" stroke="#c9845a" stroke-width="1.5"/></g>
      <path d="M62 138 C110 132 170 126 256 106" stroke="#d9a07a" stroke-width="3" fill="none"/>${lab(150, 186, 'pancreatic duct', 'مجرا: آنزیم گوارشی (برون‌ریز)', { size: 9.5, fill: '#9a5a2c' })}<path d="M150 172 L150 132" stroke="#9a5a2c" stroke-width="1.2" stroke-dasharray="3 2"/>
      <circle cx="200" cy="124" r="6" fill="none" stroke="#7a3fd1" stroke-width="2"/>
      ${curve(a, 'M206 120 C240 80 262 70 276 62', '#7a3fd1', 1.6, true)}
      <circle cx="306" cy="74" r="46" fill="#fdf6f0" stroke="#7a3fd1" stroke-width="2"/>
      <circle cx="306" cy="74" r="26" fill="url(#${gi})" stroke="#9a7ad8"/>
      ${dots(306, 74, 22, 16, '#1e88e5', 3.6, 3)}${dots(306, 74, 22, 7, '#e8892b', 3.6, 9)}
      ${lab(306, 138, 'islet of Langerhans', 'جزیره: هورمون (درون‌ریز)', { size: 9.5, fill: '#5a2bb0' })}
      <circle cx="244" cy="166" r="5" fill="#1e88e5"/>${f(296, 170, 'سلول بتا: انسولین', { size: 10, fill: '#1565c0', w: 800 })}
      <circle cx="244" cy="188" r="5" fill="#e8892b"/>${f(296, 192, 'سلول آلفا: گلوکاگون', { size: 10, fill: '#b8651a', w: 800 })}
      ${lab(180, 234, 'pancreas', 'پانکراس پشت معده: هم برون‌ریز، هم درون‌ریز', { size: 10.5 })}`, 'پانکراس و جزایر لانگرهانس',
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
      ${f(92, 154, 'قند خون را پایین می‌آورد', { size: 10, fill: '#1565c0', w: 700 })}${f(268, 146, 'قند خون را بالا می‌برد', { size: 10, fill: '#b8651a', w: 700 })}
      <rect x="40" y="190" width="100" height="40" rx="12" fill="#fff" stroke="#ccc"/>${lab(90, 206, 'glucose', 'گلوکز (خون)', { size: 10.5 })}
      <rect x="220" y="190" width="100" height="40" rx="12" fill="#fff" stroke="#ccc"/>${lab(270, 206, 'glycogen', 'گلیکوژن (کبد)', { size: 10.5 })}
      ${curve(a, 'M140 198 C170 182 190 182 218 198', '#1565c0', 2)}${t(180, 180, 'glycogenesis', { size: 9.5, fill: '#1565c0' })}
      ${curve(b, 'M218 224 C190 240 170 240 142 224', '#b8651a', 2)}${t(180, 248, 'glycogenolysis', { size: 9.5, fill: '#b8651a' })}
      ${f(180, 30, 'دو هورمون متضاد = الاکلنگ قند خون', { size: 11, fill: INK, w: 800 })}${f(180, 48, 'سلول بتا: انسولین • سلول آلفا: گلوکاگون', { size: 9.5 })}`, 'انسولین و گلوکاگون',
      `${marker(a, '#1565c0')}${marker(b, '#b8651a')}`);
  };

  /* دیابت نوع ۱ و ۲: کلید و قفل */
  A['dm-types'] = () => {
    const cellC = (x, c) => `<ellipse cx="${x}" cy="128" rx="62" ry="46" fill="${c}" stroke="#9fb0c0"/>`;
    const lock = (x, y, c) => `<rect x="${x - 10}" y="${y}" width="20" height="16" rx="3" fill="${c}"/><path d="M${x - 6} ${y} v-6 a6 6 0 0 1 12 0 v6" stroke="${c}" stroke-width="3" fill="none"/>`;
    const key = (x, y, c) => `<circle cx="${x}" cy="${y}" r="7" fill="none" stroke="${c}" stroke-width="3"/><path d="M${x + 7} ${y} h18 m-6 0 v6 m-6 -6 v5" stroke="${c}" stroke-width="3" fill="none"/>`;
    return svg(360, 240, `
      <rect x="10" y="10" width="166" height="220" rx="14" fill="#f2f6ff"/><rect x="184" y="10" width="166" height="220" rx="14" fill="#fff6ec"/>
      ${lab(93, 30, 'type 1 DM', 'کلید نیست', { size: 12, fill: '#1565c0' })}${cellC(93, '#eef3f8')}${lock(93, 94, '#7a3fd1')}
      ${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${62 + (i % 3) * 30}" cy="${128 + Math.floor(i / 3) * 22}" r="6" fill="#f2b705"/>`).join('')}
      ${f(93, 190, 'سلول‌های β تخریب شده‌اند', { size: 9.5, fill: INK })}${f(93, 204, 'انسولین صفر ← تزریق انسولین', { size: 9.5, fill: '#1565c0', w: 800 })}${f(93, 218, 'معمولاً کودکان، شروع ناگهانی', { size: 9 })}
      ${lab(267, 30, 'type 2 DM', 'کلید هست، قفل سفت است', { size: 12, fill: '#b8651a' })}${cellC(267, '#eef3f8')}${lock(267, 94, '#9fb0c0')}${key(232, 70, '#1e88e5')}${t(300, 76, '✕', { size: 14, fill: '#c8243f', w: 900 })}
      ${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${236 + (i % 3) * 30}" cy="${128 + Math.floor(i / 3) * 22}" r="6" fill="#f2b705"/>`).join('')}
      ${f(267, 190, 'insulin resistance (مقاومت)', { size: 9.5, fill: INK })}${f(267, 204, 'رژیم، ورزش، داروی خوراکی', { size: 9.5, fill: '#b8651a', w: 800 })}${f(267, 218, 'معمولاً بزرگسالان چاق، تدریجی', { size: 9 })}`, 'دیابت نوع ۱ و ۲');
  };

  /* سه P دیابت */
  A['three-p'] = () => {
    const c = (x, ic, en, fa, sub) => `<circle cx="${x}" cy="76" r="38" fill="#f2f6ff" stroke="#1e88e5" stroke-width="2"/>${t(x, 88, ic, { size: 30 })}${lab(x, 136, en, fa, { size: 11.5, fill: '#1565c0' })}${f(x, 168, sub, { size: 9.5 })}`;
    return svg(360, 200, `${c(62, '🚽', 'polyuria', 'پرادراری', '-uria = ادرار')}${c(180, '🥤', 'polydipsia', 'پرنوشی', '-dipsia = تشنگی')}${c(298, '🍽️', 'polyphagia', 'پرخوری', '-phagia = خوردن')}
      ${f(180, 192, 'poly- = زیاد • سه نشانه کلاسیک دیابت شیرین', { size: 10, fill: INK, w: 700 })}`, 'سه نشانه کلاسیک دیابت');
  };

  /* عوارض مزمن دیابت */
  A['dm-complications'] = () => {
    const it = (x, y, ic, en, fa) => `<circle cx="${x}" cy="${y}" r="26" fill="#fff" stroke="#1e88e5" stroke-width="2"/>${t(x, y + 8, ic, { size: 22 })}${lab(x, y + 44, en, fa, { size: 10 })}`;
    return svg(360, 260, `${[[70, 52], [290, 52], [70, 186], [290, 186]].map(p => `<path d="M180 128 L${p[0]} ${p[1]}" stroke="#bcd3ef" stroke-width="3"/>`).join('')}
      <circle cx="180" cy="128" r="40" fill="#e3f0ff" stroke="#1565c0" stroke-width="2"/>${t(180, 124, 'DM', { size: 18, fill: '#1565c0', w: 900 })}${f(180, 142, 'قند بالا', { size: 10, fill: '#1565c0' })}
      ${it(70, 52, '👁️', 'retinopathy', 'آسیب شبکیه، کوری')}${it(290, 52, '🫘', 'nephropathy', 'آسیب کلیه، دیالیز')}${it(70, 186, '🦶', 'neuropathy', 'بی‌حسی، زخم پا')}${it(290, 186, '🫀', 'vascular', 'سکته، تصلب شرایین')}`, 'عوارض مزمن دیابت');
  };

  /* آزمون‌های تشخیص دیابت */
  A['glucose-tests'] = () => {
    const bar = (y, en, fa, norm, pre, dm, unit) => `${lab(70, y + 4, en, fa, { size: 10.5 })}<rect x="130" y="${y - 10}" width="70" height="22" fill="#e7f9d8"/><rect x="200" y="${y - 10}" width="70" height="22" fill="#fff4cc"/><rect x="270" y="${y - 10}" width="74" height="22" fill="#fde3e7"/>${t(165, y + 5, norm, { size: 10, fill: '#3f8a05', w: 800 })}${t(235, y + 5, pre, { size: 10, fill: '#8a6500', w: 800 })}${t(307, y + 5, dm, { size: 10, fill: '#a31b33', w: 800 })}${t(344, y + 22, unit, { size: 8.5, fill: MUTED, anchor: 'end' })}`;
    return svg(360, 230, `
      ${f(165, 24, 'طبیعی', { size: 10.5, fill: '#3f8a05', w: 800 })}${f(235, 24, 'پیش‌دیابت', { size: 10.5, fill: '#8a6500', w: 800 })}${f(307, 24, 'دیابت', { size: 10.5, fill: '#a31b33', w: 800 })}
      ${bar(58, 'FBS / FPG', 'قند ناشتا', '&lt;100', '100–125', '≥126', 'mg/dL')}
      ${bar(116, '2-h OGTT', 'دو ساعت پس از گلوکز', '&lt;140', '140–199', '≥200', 'mg/dL')}
      ${bar(174, 'HbA1c', 'میانگین ۳ ماه', '&lt;5.7', '5.7–6.4', '≥6.5', '%')}
      ${f(180, 222, 'IFG و IGT = مرحله پیش‌دیابت', { size: 9.5, fill: MUTED })}`, 'معیارهای تشخیص دیابت');
  };

  /* ================= غدد دیگر، تشخیص و درمان ================= */
  /* ساعت ملاتونین */
  A['pineal-clock'] = () => {
    const g = 'g' + (++UID);
    return svg(360, 210, `
      <rect x="20" y="30" width="160" height="140" fill="#fff8df"/><rect x="180" y="30" width="160" height="140" fill="#e6e8fb"/>
      ${t(100, 54, '☀️', { size: 18 })}${t(260, 54, '🌙', { size: 18 })}
      <path d="M20 150 C80 152 140 150 180 120 C210 90 230 60 260 58 C290 58 310 90 340 140" stroke="url(#${g})" stroke-width="4" fill="none" stroke-linecap="round"/>
      ${lab(250, 140, 'melatonin ↑', 'تاریکی: ملاتونین زیاد و خواب', { size: 10.5, fill: '#3a3f9e' })}
      ${lab(96, 96, 'melatonin ↓', 'نور: ملاتونین کم و بیداری', { size: 10.5, fill: '#8a6500' })}
      <path d="M20 170 H340" stroke="#ccc"/>${t(20, 186, '6', { size: 9, fill: MUTED })}${t(180, 186, '18', { size: 9, fill: MUTED })}${t(340, 186, '6', { size: 9, fill: MUTED })}
      ${f(180, 204, 'ریتم شبانه‌روزی (circadian rhythm): ساعت ۲۴ ساعته بدن', { size: 10.5, fill: INK, w: 700 })}`, 'ملاتونین و ریتم شبانه‌روزی', linear(g, '#f2b705', '#3a3f9e'));
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
      ${lab(320 - 6, 96, 'thymus', 'تیموس: پشت جناغ', { size: 10.5, fill: '#a8345b', anchor: 'end' })}<path d="M200 100 L238 100" stroke="#8a97a3"/>
      ${lab(180, 222, 'heart', 'قلب', { size: 9.5, fill: '#b23a3a' })}${lab(70, 222, 'lung', 'ریه', { size: 9.5, fill: MUTED })}
      ${f(180, 16, 'در کودکی بزرگ، در بزرگسالی کوچک و چرب', { size: 10, fill: INK, w: 700 })}`, 'غده تیموس',
      `${linear(g, SKIN1, SKIN2, true)}${shadow(sh)}${linear(gt, '#ffd9c6', '#f2a37f', true)}${linear(gl, '#f6d6dc', '#e9aeb9', true)}`);
  };

  /* غدد جنسی و گنادوتروپین‌ها */
  A.gonads = () => {
    const a = 'm' + (++UID);
    return svg(360, 230, `
      <rect x="130" y="14" width="100" height="40" rx="14" fill="#f0e6fb" stroke="#8e44d9"/>${lab(180, 30, 'pituitary', 'هیپوفیز: FSH و LH', { size: 10.5, fill: '#6a2fb0' })}
      ${arrow(a, 160, 56, 92, 100, '#8e44d9', 2.2)}${arrow(a, 200, 56, 268, 100, '#8e44d9', 2.2)}
      <rect x="14" y="104" width="160" height="112" rx="14" fill="#fbe6ee"/><rect x="186" y="104" width="160" height="112" rx="14" fill="#e3f0ff"/>
      <ellipse cx="94" cy="134" rx="22" ry="14" fill="#f3a6c3" stroke="#c46b8f"/>${dots(94, 134, 12, 6, '#fff', 2.4, 5)}
      ${lab(94, 168, 'ovaries', 'تخمدان‌ها', { size: 11, fill: '#a8345b' })}${t(94, 200, 'estrogen • progesterone', { size: 9.5, fill: INK, w: 700 })}
      <ellipse cx="266" cy="134" rx="16" ry="20" fill="#9fc5f0" stroke="#4f8fc0"/>
      ${lab(266, 168, 'testes', 'بیضه‌ها', { size: 11, fill: '#1565c0' })}${t(266, 200, 'testosterone', { size: 9.5, fill: INK, w: 700 })}`, 'غدد جنسی', marker(a, '#8e44d9'));
  };

  /* نقشه جراحی‌ها: هر غده + -ectomy */
  A.surgery = () => {
    const row = (y, ic, w, fa) => `<rect x="20" y="${y}" width="320" height="30" rx="10" fill="#f8f6fc"/>${t(40, y + 21, ic, { size: 15 })}${t(64, y + 20, w, { size: 11.5, fill: '#5a2bb0', w: 900, anchor: 'start' })}${f(326, y + 20, fa, { size: 10, fill: INK, anchor: 'end' })}`;
    return svg(360, 270, `${f(180, 18, 'نام غده + ectomy- = برداشتن آن غده', { size: 11, fill: INK, w: 800 })}
      ${row(30, '🧠', 'hypophysectomy', 'هیپوفیز')}${row(64, '🦋', 'thyroidectomy', 'تیروئید')}${row(98, '🟡', 'parathyroidectomy', 'پاراتیروئید')}
      ${row(132, '🛡️', 'thymectomy', 'تیموس')}${row(166, '🎩', 'adrenalectomy', 'فوق‌کلیه')}${row(200, '🐟', 'pancreatectomy', 'پانکراس')}${row(234, '🌲', 'pinealectomy', 'اپی‌فیز')}`, 'جراحی غدد درون‌ریز');
  };

  /* ---------- عکس‌های برچسب‌دار: تصویر ترمیم‌شده (inpainting) + برچسب دوزبانه ---------- */
  const IMG = (k, x, y, w, h) => `<image href="${EA.img ? EA.img(k) : 'img/' + k + '.webp'}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet"/>`;
  const pin = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="#5b6b73" stroke-width="1.1"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="#fff" stroke="#c8243f" stroke-width="1.4"/>`;
  /* نشانه‌های سندرم کوشینگ روی تصویر مانکن‌شده */
  A['cushing-signs'] = () => svg(360, 300, `${IMG('cushing-signs', 130, 6, 100, 284)}
    ${pin(186, 14, 252, 18)}${lab(306, 16, 'thinning hair', 'نازک‌شدن مو', { size: 9.5 })}
    ${pin(203, 40, 252, 52)}${lab(306, 52, 'moon face', 'صورت ماه‌گون', { size: 9.5 })}
    ${pin(193, 72, 252, 90)}${lab(306, 88, 'hirsutism', 'موی زیاد صورت و بدن', { size: 9.5 })}
    ${pin(198, 128, 252, 132)}${lab(306, 130, 'purple striae', 'خطوط کشش بنفش', { size: 9.5 })}
    ${pin(212, 146, 252, 174)}${lab(306, 172, 'pendulous abdomen', 'شکم آویزان', { size: 9.5 })}
    ${pin(163, 35, 108, 22)}${lab(56, 20, 'buffalo hump', 'کوهان بوفالویی', { size: 9.5 })}
    ${pin(176, 56, 108, 64)}${lab(56, 62, 'fat pad', 'چربی بالای ترقوه', { size: 9.5 })}
    ${pin(147, 130, 108, 116)}${lab(56, 114, 'slow healing', 'دیر خوب شدن زخم', { size: 9.5 })}
    ${pin(163, 190, 108, 168)}${lab(56, 166, 'easy bruising', 'کبودی آسان', { size: 9.5 })}
    ${pin(170, 222, 108, 222)}${lab(56, 220, 'thin limbs', 'دست و پای لاغر', { size: 9.5 })}
    ${f(306, 270, 'تصویر آموزشی با', { size: 9, fill: MUTED })}${f(306, 283, 'سطح صاف مانکنی', { size: 9, fill: MUTED })}`, 'نشانه‌های سندرم کوشینگ');
  /* برش میکروسکوپی پانکراس */
  A['islet-histology'] = () => svg(360, 236, `<rect x="56" y="8" width="248" height="208" rx="10" fill="#f6f0fb"/>${IMG('islet-histology', 60, 12, 240, 200)}
    <ellipse cx="146" cy="128" rx="30" ry="26" fill="none" stroke="#ffd34d" stroke-width="2.5" stroke-dasharray="5 3"/>
    ${pin(118, 132, 40, 150)}${lab(30, 168, 'islet', 'جزیره (درون‌ریز)', { size: 9.5, fill: '#8a6500' })}
    ${pin(262, 52, 322, 40)}${lab(330, 58, 'acinar cells', 'سلول‌های گوارشی', { size: 9.5, anchor: 'middle' })}
    ${f(180, 230, 'جزیره کم‌رنگ در میان سلول‌های سازنده آنزیم گوارشی', { size: 9.5, fill: MUTED })}`, 'برش میکروسکوپی پانکراس');

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
    id: 'lx', sym: 'Lx', name: 'زبان هورمون‌ها', short: 'پایه', sub: 'پیام‌رسان‌های شیمیایی، نقشه غدد و رمز واژه‌سازی: ریشه‌ها، پیشوندها، پسوندها و دام‌های همزاد',
    color: '#4F5BD5', dark: '#3540A8', light: '#E3E6FB',
    levels: ['پیام‌رسان‌های شیمیایی', 'قطعه‌های پازل', 'مثل یک حرفه‌ای'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: پیام‌رسان‌های شیمیایی ================= */
      {
        id: 'lx1', title: 'پیام‌رسان‌های بدن', icon: '📨', items: [
          L('دو سیستم فرماندهی', `بدن برای هماهنگ کردن اندام‌ها دو «سیستم پیام‌رسانی» دارد:${vs(['دستگاه عصبی', 'پیام برقی، در کسری از ثانیه، از راه عصب‌ها'], ['دستگاه درون‌ریز', 'پیام شیمیایی (هورمون)، آرام‌تر ولی ماندگارتر، از راه خون'])}دستگاه درون‌ریز (${e('endocrine system')}) رشد، سوخت‌وساز، تعادل آب و نمک، پاسخ به استرس و تولیدمثل را تنظیم می‌کند.${memo('عصب مثل «پیامک» است: فوری و کوتاه. هورمون مثل «نامه پستی»: دیرتر می‌رسد، ولی اثرش ساعت‌ها و روزها می‌ماند.')}`),
          L('هورمون یعنی «به حرکت درآوردن»', `${e('<b>hormone</b>')} از واژه یونانی ${e('hormon')} به معنی «برانگیختن، به حرکت درآوردن» آمده است.<br>هورمون یک <b>پیام‌رسان شیمیایی</b> است که:<br>• در یک <b>غده</b> (${e('gland')}) ساخته می‌شود؛<br>• مستقیم وارد <b>خون</b> می‌شود؛<br>• در جای دیگری از بدن روی <b>سلول هدف</b> اثر می‌گذارد.${pearl('هورمون‌ها در مقدار بسیار کم هم اثر قوی دارند؛ برای همین آزمایشگاه آن‌ها را با روش‌های بسیار حساس مثل radioimmunoassay (RIA) اندازه می‌گیرد.')}`),
          M('هورمون از چه راهی به اندام هدف می‌رسد؟', ['از راه جریان خون', 'از راه مجرا (duct)', 'از راه عصب‌ها', 'از راه دستگاه گوارش'], 'غده درون‌ریز مجرا ندارد و هورمون را مستقیم به خون می‌ریزد.'),
          L('درون‌ریز یا برون‌ریز؟', `${wb('endo-', 'crin/o')} ← <b>endocrine</b>: «ترشح به درون» (به خون)<br>${wb('exo-', 'crin/o')} ← <b>exocrine</b>: «ترشح به بیرون» (از راه مجرا)${fig('endo-exo', '', 'غده درون‌ریز مجرا ندارد؛ برای همین به آن ductless gland (غده بدون مجرا) هم می‌گویند.')}${memo('پیشوند endo یعنی درون؛ مثل endoscopy (نگاه به درون بدن). پیشوند exo یعنی بیرون؛ مثل exit (خروج).')}`),
          P('هر غده را به نوعش وصل کن', [['غده عرق', 'برون‌ریز: عرق از مجرا به پوست'], ['غده تیروئید', 'درون‌ریز: T4 به خون'], ['غده بزاقی', 'برون‌ریز: بزاق از مجرا به دهان'], ['غده فوق‌کلیه', 'درون‌ریز: آدرنالین به خون']], 'غده‌های عرق و بزاق ترشح خود را از مجرا بیرون می‌فرستند؛ تیروئید و فوق‌کلیه هورمون را به خون می‌ریزند.'),
          T('پانکراس هم غده درون‌ریز است و هم برون‌ریز.', true, 'درست. جزایر لانگرهانس انسولین و گلوکاگون را به خون می‌ریزند (درون‌ریز)؛ بقیه پانکراس آنزیم گوارشی را از مجرا به روده می‌فرستد (برون‌ریز).'),
          B('غده‌ای که مجرا ندارد و ترشحش را به خون می‌ریزد، غده ___ نام دارد.', ['درون‌ریز', 'برون‌ریز', 'بزاقی'], 'endocrine gland = ductless gland.'),
          M(`${e('<b>endocrinology</b>')} یعنی…`, ['علم غدد درون‌ریز و هورمون‌ها', 'متخصص غدد', 'بیماری غدد', 'برداشتن غده'], 'endocrin/o (غدد درون‌ریز) + -logy (علم). متخصص این رشته endocrinologist است.'),
          W('واژه‌ای بساز به معنی «متخصص غدد درون‌ریز»', ['endocrin/o', '-logist'], ['-logy', 'aden/o', '-pathy'], 'endocrin/o + -logist = endocrinologist.'),
          S('املای انگلیسی «هورمون» را بنویس', 'hormone', 'hormone؛ جمع آن hormones.', 'hor…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: 'قفل، کلید و ترموستات', icon: '🔑', items: [
          L('سلول هدف و گیرنده', `هورمون در خون به همه جای بدن می‌رسد، ولی فقط روی سلول‌هایی اثر دارد که برایش <b>گیرنده</b> (${e('receptor')}) دارند. این سلول‌ها <b>سلول هدف</b> (${e('target cell')}) نام دارند و مجموعه‌شان <b>بافت هدف</b> (${e('target tissue')}) است.${fig('lock-key', '', 'هورمون مثل کلید و گیرنده مثل قفل است؛ فقط کلیدِ جور، قفل را باز می‌کند.')}`),
          M('چرا TSH فقط روی تیروئید اثر می‌گذارد، با اینکه به همه بدن می‌رسد؟', ['چون فقط سلول‌های تیروئید گیرنده TSH دارند', 'چون TSH فقط در گردن ترشح می‌شود', 'چون از راه مجرا به تیروئید می‌رود', 'چون بقیه سلول‌ها آن را تخریب می‌کنند'], 'گیرنده اختصاصی، سلول هدف را تعیین می‌کند.'),
          L('هومئوستاز: تعادل پایدار', `${wb('home/o', '-stasis')} ← ${e('<b>homeostasis</b>')}: «یکسان ماندن».<br>کار اصلی دستگاه درون‌ریز این است که محیط درونی بدن را ثابت نگه دارد: دما، قند خون، کلسیم، آب و نمک، فشار خون.<br><br>${e('<b>metabolism</b>')} (سوخت‌وساز) هم مجموع همه واکنش‌های شیمیایی سلول‌هاست که انرژی می‌سازند.${memo('home/o را با «هم» فارسی به خاطر بسپار: همیشه «هم‌اندازه» و یکسان.')}`),
          T('هومئوستاز یعنی ثابت نگه داشتن محیط درونی بدن، هرقدر محیط بیرون تغییر کند.', true, 'درست؛ مثلاً دمای بدن حدود ۳۷ درجه می‌ماند، چه هوا سرد باشد چه گرم.'),
          L('بازخورد منفی: ترموستات بدن', `بیشتر هورمون‌ها با <b>بازخورد منفی</b> (${e('negative feedback')}) کنترل می‌شوند: وقتی سطح هورمون بالا رفت، خودش دستور ترشح بیشتر را <b>خاموش</b> می‌کند.${fig('feedback', '', 'هیپوتالاموس به هیپوفیز، هیپوفیز به تیروئید فرمان می‌دهد؛ T3 و T4 زیاد، هر دو مرحله بالایی را مهار می‌کنند.')}${memo('درست مثل بخاری با ترموستات: اتاق که گرم شد، بخاری خاموش می‌شود؛ سرد که شد، دوباره روشن.')}`),
          O('مراحل بازخورد منفی تیروئید را مرتب کن', ['هیپوتالاموس TRH ترشح می‌کند', 'هیپوفیز قدامی TSH می‌سازد', 'تیروئید T3 و T4 ترشح می‌کند', 'T3 و T4 زیاد، ترشح TRH و TSH را مهار می‌کند'], 'محور «هیپوتالاموس ← هیپوفیز ← تیروئید» با بازخورد منفی بسته می‌شود.'),
          M('در بازخورد منفی، وقتی سطح هورمون بالا می‌رود چه اتفاقی می‌افتد؟', ['ترشح آن هورمون کم می‌شود', 'ترشح آن بیشتر می‌شود', 'گیرنده‌ها از بین می‌روند', 'غده بزرگ می‌شود'], 'خروجی زیاد، ورودی را خاموش می‌کند؛ نتیجه، تعادل است.'),
          B('محلی روی سلول که هورمون به آن می‌چسبد ___ نام دارد.', ['گیرنده (receptor)', 'مجرا (duct)', 'غده (gland)'], 'receptor مثل قفلی است که فقط با کلید هورمون خودش باز می‌شود.'),
          S('املای انگلیسی «هومئوستاز» را بنویس', 'homeostasis', 'home/o (یکسان) + -stasis (ثابت ماندن).', 'homeo…'),
          N('d2t:lx')
        ]
      },
      {
        id: 'lx3', title: 'نقشه غدد درون‌ریز', icon: '🗺️', items: [
          L('غدد درون‌ریز کجا هستند؟', `غدد درون‌ریز در سراسر بدن پراکنده‌اند:${fig('body-map', '', 'از سر تا لگن: هیپوتالاموس، هیپوفیز، اپی‌فیز، تیروئید، پاراتیروئیدها، تیموس، فوق‌کلیه‌ها، پانکراس و غدد جنسی.')}`),
          L('غدد مرکزی و محیطی', `${tbl([['گروه', 'غدد', 'نکته'], ['مرکزی (در مغز)', 'هیپوتالاموس، هیپوفیز', 'فرماندهی بقیه غدد'], ['محیطی', 'تیروئید، پاراتیروئید، فوق‌کلیه، اپی‌فیز', 'کارشان فقط ساختن هورمون است'], ['دوکاره', 'پانکراس، تیموس، تخمدان، بیضه', 'هم هورمون می‌سازند، هم کار دیگری دارند']])}${pearl('حتی قلب هم هورمون می‌سازد: دهلیزها ANP ترشح می‌کنند که به پایین آوردن فشار خون کمک می‌کند. کلیه هم رنین و اریتروپویتین می‌سازد.')}`),
          M('کدام غده را «غده فرمانده» (master gland) می‌نامند؟', ['هیپوفیز (pituitary)', 'تیروئید (thyroid)', 'تیموس (thymus)', 'پانکراس (pancreas)'], 'هورمون‌های هیپوفیز کار بسیاری از غدد دیگر را تنظیم می‌کنند؛ خود هیپوفیز هم زیر فرمان هیپوتالاموس است.', null, F('body-map')),
          P('هر غده را به جایش وصل کن', [['تیروئید', 'جلوی گردن، زیر حنجره'], ['فوق‌کلیه', 'روی کلیه‌ها'], ['هیپوفیز', 'زیر مغز، در زین ترکی'], ['تیموس', 'پشت جناغ، بالای قلب'], ['پانکراس', 'پشت معده']]),
          T('غدد پاراتیروئید روی سطح پشتی تیروئید قرار دارند.', true, 'درست؛ para- یعنی «کنار». معمولاً چهار غده کوچک‌اند.'),
          M('کدام عضو «دوکاره» است و هم هورمون می‌سازد، هم کار دیگری در بدن دارد؟', ['پانکراس', 'تیروئید', 'پاراتیروئید', 'اپی‌فیز'], 'پانکراس آنزیم گوارشی هم می‌سازد. تیروئید، پاراتیروئید و اپی‌فیز فقط هورمون می‌سازند.'),
          L('غده و هورمونش', `${tbl([['غده', 'هورمون‌های مهم'], ['هیپوفیز', 'GH، TSH، ACTH، FSH، LH، PRL، ADH، اکسی‌توسین'], ['تیروئید', 'T3، T4، کلسی‌تونین'], ['پاراتیروئید', 'PTH'], ['فوق‌کلیه', 'کورتیزول، آلدوسترون، اپی‌نفرین'], ['پانکراس', 'انسولین، گلوکاگون'], ['اپی‌فیز', 'ملاتونین'], ['تیموس', 'تیموسین'], ['غدد جنسی', 'استروژن، پروژسترون، تستوسترون']])}${memo('این جدول نقشه گنج کل دوره است؛ هر دنیا یک ردیفش را باز می‌کند.')}`),
          P('هر هورمون را به غده‌اش وصل کن', [['insulin', 'پانکراس'], ['melatonin', 'اپی‌فیز'], ['cortisol', 'فوق‌کلیه'], ['thymosin', 'تیموس'], ['calcitonin', 'تیروئید']]),
          S('املای انگلیسی «غده هیپوفیز» را بنویس (فقط واژه pituitary)', 'pituitary', 'pituitary؛ دقت کن: pi-TU-i-tary (دو i).', 'pitu…'),
          N('f2t:lx')
        ]
      },

      /* ================= سطح ۲: قطعه‌های پازل ================= */
      {
        id: 'lx4', title: 'آناتومی یک واژه', icon: '🧩', items: [
          L('هر واژه پزشکی یک پازل است', `بیشتر واژه‌های پزشکی از چند قطعه ثابت ساخته شده‌اند:<br>• <b>پیشوند</b> (${e('prefix')}) در ابتدا: ${e('hyper-')} = بیش از حد<br>• <b>ریشه</b> (${e('root')}) در وسط: ${e('thyroid')} = تیروئید<br>• <b>پسوند</b> (${e('suffix')}) در انتها: ${e('-ism')} = حالت${fig('wordparts', '', 'hyperthyroidism: حالتِ کار بیش از حد تیروئید = پرکاری تیروئید.')}`),
          L('واکه رابط o', `ریشه را معمولاً با یک <b>واکه رابط</b> (بیشتر o) به قطعه بعدی وصل می‌کنیم. ریشه + واکه را <b>شکل ترکیبی</b> (${e('combining form')}) می‌گویند و با خط مورب می‌نویسند: ${e('thyr/o')}، ${e('adren/o')}.<br><br>قاعده طلایی: اگر پسوند با <b>حرف صدادار</b> شروع شود، o حذف می‌شود:<br>• ${e('thyr/o + -itis')} ← <b>thyroiditis</b> (نه thyrooitis)<br>• ${e('thyr/o + -megaly')} ← <b>thyromegaly</b> (o می‌ماند)${memo('o مثل «چسب» است: بین دو حرف بی‌صدا لازم است؛ وقتی پسوند خودش با صدادار شروع شود، چسب اضافه است.')}`),
          M(`در واژه ${e('<b>adrenalitis</b>')} چرا واکه o نیامده است؟`, ['چون پسوند -itis با حرف صدادار شروع می‌شود', 'چون adrenal پیشوند است', 'چون o همیشه حذف می‌شود', 'چون واژه لاتین است'], 'adrenal/o + -itis: پسوند با i شروع شده، پس o لازم نیست.'),
          L('معنی را از آخر بخوان', `برای معنی کردن، <b>از پسوند شروع کن</b>، بعد پیشوند، و آخر ریشه را بخوان:<br>${wb('hypo-', 'glyc/o', '-emia')} ← «وضعیتِ خون» + «کم» + «قند» = <b>قند خون پایین</b><br>${wb('adren/o', '-megaly')} ← «بزرگیِ» + «فوق‌کلیه»<br>${wb('pancreat/o', '-itis')} ← «التهابِ» + «پانکراس»${memo('اول بپرس «چه شده؟» (پسوند)، بعد «چقدر؟» (پیشوند) و آخر «کجا؟» (ریشه).')}`),
          P('هر قطعه را به نوعش وصل کن', [['hyper-', 'پیشوند'], ['thyr/o', 'شکل ترکیبی ریشه'], ['-ism', 'پسوند'], ['o در glyc/o', 'واکه رابط']]),
          O(`قطعه‌های ${e('hypoglycemia')} را به ترتیب نوشتن بچین`, ['hypo-', 'glyc/o', '-emia'], 'hypo- (کم) + glyc/o (قند) + -emia (وضعیت خون). در نوشتن از چپ به راست؛ در معنی کردن از آخر.'),
          T(`در ${e('thyromegaly')} واکه o باقی می‌ماند، چون پسوند -megaly با حرف بی‌صدا شروع می‌شود.`, true, 'درست؛ thyr + o + megaly.'),
          B('در واژه hyperthyroidism، قطعه ___ پیشوند است.', ['hyper-', 'thyroid', '-ism'], 'hyper- = بیش از حد؛ thyroid ریشه و -ism پسوند است.'),
          W('واژه‌ای بساز به معنی «التهاب پانکراس»', ['pancreat/o', '-itis'], ['-oma', 'aden/o', '-megaly'], 'pancreat/o + -itis = pancreatitis.'),
          S('املای انگلیسی «پرکاری تیروئید» را بنویس', 'hyperthyroidism', 'hyper- + thyroid + -ism.', 'hyper…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx5', title: 'ریشه‌های غدد', icon: '🏷️', items: [
          L('هر غده یک ریشه', `${tbl([['ریشه', 'معنی', 'نمونه'], [e('aden/o'), 'غده (هر غده‌ای)', e('adenoma')], [e('adren/o, adrenal/o'), 'غده فوق‌کلیه', e('adrenalectomy')], [e('thyr/o, thyroid/o'), 'تیروئید', e('thyroiditis')], [e('parathyr/o'), 'پاراتیروئید', e('parathyroidectomy')], [e('hypophys/o, pituitar/o'), 'هیپوفیز', e('hypophysectomy')], [e('pancreat/o'), 'پانکراس', e('pancreatitis')], [e('thym/o'), 'تیموس', e('thymoma')], [e('gonad/o'), 'غدد جنسی', e('gonadotropin')]])}${memo('thyr/o یعنی «سپر»: غضروف تیروئید شبیه سپر جنگجوهای یونانی است.')}`),
          L('دو جفت خطرناک', `${vs(['aden/o', 'هر غده: adenoma، adenitis'], ['adren/o', 'فقط غده فوق‌کلیه: adrenomegaly'])}${vs(['thyr/o', 'تیروئید در گردن'], ['thym/o', 'تیموس در قفسه سینه'])}${memo(`${e('adren')} = ${e('ad')} (نزدیک) + ${e('ren')} (کلیه): غده‌ای «نزدیک کلیه». یک r اضافه، معنی را از «هر غده» به «فوق‌کلیه» تغییر می‌دهد!`)}`),
          M(`${e('<b>adenoma</b>')} یعنی…`, ['تومور خوش‌خیم یک غده', 'تومور فوق‌کلیه', 'التهاب غده', 'بزرگی تیروئید'], 'aden/o (غده) + -oma (تومور)؛ می‌تواند در هر غده‌ای باشد.'),
          M(`در ${e('<b>adrenalectomy</b>')} کدام عضو برداشته می‌شود؟`, ['غده فوق‌کلیه', 'هر غده‌ای', 'کلیه', 'تیروئید'], 'adrenal/o = فوق‌کلیه؛ -ectomy = برداشتن.'),
          T(`${e('thymectomy')} یعنی برداشتن تیروئید.`, false, 'نادرست؛ thym/o تیموس است. برداشتن تیروئید thyroidectomy است.'),
          P('هر ریشه را به غده‌اش وصل کن', [['pancreat/o', 'پانکراس'], ['hypophys/o', 'هیپوفیز'], ['thym/o', 'تیموس'], ['adren/o', 'فوق‌کلیه'], ['gonad/o', 'غدد جنسی']]),
          L('دو اسم برای هیپوفیز', `هیپوفیز دو ریشه دارد:<br>• ${e('hypophys/o')}: از ${e('hypo')} (زیر) + ${e('physis')} (رویش)، چون <b>زیر</b> هیپوتالاموس رشد می‌کند ← <b>hypophysectomy</b><br>• ${e('pituitar/o')}: از واژه لاتین ${e('pituita')} (خلط)، چون قدیمی‌ها فکر می‌کردند خلط بینی را می‌سازد! ← <b>hypopituitarism</b>${pearl('در گزارش جراحی معمولاً hypophysectomy و در توصیف بیماری hypopituitarism می‌بینی؛ هر دو درباره یک غده‌اند.')}`),
          B('ریشه ___ مثل pituitar/o به معنی هیپوفیز است.', ['hypophys/o', 'hypothalam/o', 'thyr/o'], 'hypophysis نام دیگر pituitary gland است.'),
          W('واژه‌ای بساز به معنی «برداشتن هیپوفیز»', ['hypophys/o', '-ectomy'], ['pituitar/o', '-tomy', '-itis'], 'hypophys/o + -ectomy = hypophysectomy.'),
          S('املای انگلیسی «آدنوم» (تومور غده) را بنویس', 'adenoma', 'aden/o + -oma.', 'aden…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx6', title: 'پیشوندهای دوقلو', icon: '👯', items: [
          L('بیشتر بیماری‌های غدد: زیاد یا کم', `تقریباً هر بیماری غده‌ای یا از ترشح <b>زیاد</b> است یا از ترشح <b>کم</b>:${fig('hyper-hypo', '', 'hypersecretion معمولاً از تومور است و با جراحی یا دارو درمان می‌شود؛ hyposecretion معمولاً با هورمون جایگزین.')}${vs(['hyper-', 'بیش از حد، بالاتر از طبیعی: hyperthyroidism'], ['hypo-', 'کمتر از حد، زیر: hypothyroidism'])}${memo(`${e('hypo')} را با «hippo» (اسب آبی) به یاد بسپار: همیشه <b>زیر</b> آب است. ${e('hyper')} مثل «هایپرمارکت»: بیش از اندازه!`)}`),
          M(`${e('<b>hypoglycemia</b>')} یعنی…`, ['قند خون پایین', 'قند خون بالا', 'قند در ادرار', 'تشنگی زیاد'], 'hypo- (کم) + glyc/o (قند) + -emia (وضعیت خون).'),
          L('پیشوندهای پرکاربرد دیگر', `${tbl([['پیشوند', 'معنی', 'نمونه'], [e('eu-'), 'خوب، طبیعی', e('euthyroid')], [e('pan-'), 'همه', e('panhypopituitarism')], [e('poly-'), 'زیاد', e('polyuria')], [e('para-'), 'کنار', e('parathyroid')], [e('supra-'), 'بالای', e('suprarenal')], [e('epi-'), 'روی', e('epinephrine')], [e('ex-, exo-'), 'بیرون', e('exophthalmos')], [e('anti-'), 'ضد', e('antidiuretic')]])}`),
          P('هر پیشوند را به معنی‌اش وصل کن', [['eu-', 'طبیعی'], ['pan-', 'همه'], ['para-', 'کنار'], ['supra-', 'بالای'], ['poly-', 'زیاد']]),
          M(`بیمار ${e('<b>euthyroid</b>')} است. یعنی…`, ['تیروئیدش طبیعی کار می‌کند', 'تیروئیدش پرکار است', 'تیروئیدش کم‌کار است', 'تیروئید ندارد'], 'eu- = خوب، طبیعی. مثلاً پس از درمان، بیمار «یوتیروئید» می‌شود.'),
          T(`${e('suprarenal')} و ${e('adrenal')} هر دو یعنی غده‌ای که روی (کنار) کلیه است.`, true, 'درست؛ supra- (بالای) و ad- (نزدیک) + ren/o (کلیه). epinephrine هم همین را با ریشه یونانی nephr/o می‌گوید.'),
          L('سه پیشوند در یک واژه', `${wb('pan-', 'hypo-', 'pituitar/o', '-ism')} ← <b>panhypopituitarism</b><br>از آخر بخوان: «حالتِ» + «همه» + «کم‌کاری» + «هیپوفیز» = کم‌کاری <b>همه</b> هورمون‌های هیپوفیز.${pearl('در بیمار با تومور بزرگ هیپوفیز یا خونریزی پس از زایمان، ممکن است همه محورها (تیروئید، فوق‌کلیه، غدد جنسی) هم‌زمان خاموش شوند.')}`),
          B('در exophthalmos پیشوند ___ یعنی «بیرون».', ['ex-', 'eu-', 'epi-'], 'ex- (بیرون) + ophthalm/o (چشم): بیرون‌زدگی چشم.'),
          W('واژه‌ای بساز به معنی «کم‌کاری همه هورمون‌های هیپوفیز»', ['pan-', 'hypo-', 'pituitar/o', '-ism'], ['hyper-', 'poly-', '-itis'], 'pan- + hypo- + pituitar/o + -ism = panhypopituitarism.'),
          N('m2r:lx')
        ]
      },

      /* ================= سطح ۳: مثل یک حرفه‌ای ================= */
      {
        id: 'lx7', title: 'پسوندهای بیماری و نشانه', icon: '🌡️', items: [
          L('پسوندهای همیشگی', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-ism'), 'حالت، وضعیت', e('hypothyroidism')], [e('-itis'), 'التهاب', e('thyroiditis')], [e('-oma'), 'تومور', e('insulinoma')], [e('-megaly'), 'بزرگی', e('acromegaly')], [e('-pathy'), 'بیماری', e('adrenopathy')], [e('-osis'), 'وضعیت (غیرطبیعی)', e('ketosis')]])}${memo('-ism فقط «حالت» است، نه بیماری خاص؛ پیشوند hyper- یا hypo- تعیین می‌کند حالت از چه نوعی است.')}`),
          L('سه پسوند مایعات', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-emia'), 'وضعیت خون', e('hypercalcemia')], [e('-uria'), 'وضعیت ادرار', e('glycosuria')], [e('-dipsia'), 'تشنگی', e('polydipsia')]])}و ریشه‌های مواد شیمیایی خون:<br>${e('calc/o')} کلسیم • ${e('kal/i')} پتاسیم • ${e('natr/o')} سدیم • ${e('gluc/o, glyc/o')} قند${memo(`${e('kal')} از واژه kalium (نام لاتین پتاسیم، نماد K) و ${e('natr')} از natrium (نماد Na) آمده است. نماد شیمیایی را که بدانی، ریشه را هم بلدی!`)}`),
          M(`${e('<b>hyponatremia</b>')} یعنی…`, ['سدیم خون پایین', 'پتاسیم خون بالا', 'کلسیم خون پایین', 'قند خون پایین'], 'hypo- + natr/o (سدیم) + -emia.'),
          P('هر ریشه را به ماده‌اش وصل کن', [['calc/o', 'کلسیم'], ['kal/i', 'پتاسیم'], ['natr/o', 'سدیم'], ['glyc/o', 'قند'], ['iod/o', 'ید']]),
          M(`${e('<b>glycosuria</b>')} یعنی…`, ['قند در ادرار', 'قند در خون', 'ادرار زیاد', 'تشنگی زیاد'], 'glycos/o (قند) + -uria (وضعیت ادرار).'),
          T(`${e('hyperkalemia')} یعنی کلسیم خون بالا.`, false, 'نادرست؛ kal/i پتاسیم است. کلسیم خون بالا hypercalcemia است. این دو واژه را قاطی نکن!'),
          B('polydipsia یعنی ___ زیاد.', ['تشنگی', 'ادرار', 'گرسنگی'], 'poly- (زیاد) + -dipsia (تشنگی). ادرار زیاد polyuria است.'),
          O(`قطعه‌های ${e('hypercalcemia')} را مرتب کن`, ['hyper-', 'calc/o', '-emia'], 'hyper- (بیش از حد) + calc/o (کلسیم) + -emia (وضعیت خون).'),
          W('واژه‌ای بساز به معنی «پتاسیم خون بالا»', ['hyper-', 'kal/i', '-emia'], ['hypo-', 'calc/o', 'natr/o'], 'hyper- + kal/i + -emia = hyperkalemia.'),
          S('املای انگلیسی «پرادراری» را بنویس', 'polyuria', 'poly- + -uria.', 'poly…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: 'پسوندهای هورمون و جراحی', icon: '🔪', items: [
          L('پسوندهایی که در نام هورمون‌ها می‌بینی', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-tropin / -tropic'), 'محرکِ (یک غده دیگر)', e('thyrotropin، gonadotropic')], [e('-gen'), 'تولیدکننده', e('androgen، estrogen')], [e('-ine، -in، -one'), 'ماده شیمیایی', e('thyroxine، insulin، aldosterone')], [e('-genesis'), 'ساخت', e('glycogenesis')], [e('-lysis'), 'تجزیه', e('glycogenolysis')]])}${memo(`${e('-tropin')} را مثل «تروپ» (گروه نمایش) تصور کن که برای غده دیگر «شو» اجرا می‌کند تا به کارش بیندازد.`)}`),
          M(`${e('<b>gonadotropin</b>')} هورمونی است که…`, ['غدد جنسی را تحریک می‌کند', 'غدد جنسی می‌سازند', 'قند خون را پایین می‌آورد', 'غده تیروئید را مهار می‌کند'], 'gonad/o (غدد جنسی) + -tropin (محرک): مثل FSH و LH.'),
          T(`${e('androgen')} یعنی «سازنده (صفات) مردانه».`, true, 'درست؛ andr/o (مرد) + -gen (تولیدکننده)، مثل تستوسترون. estr/o + -gen = estrogen، هورمون زنانه.'),
          L('برش یا برداشتن؟', `دو پسوند جراحی که بیشتر از همه قاطی می‌شوند:${vs(['-tomy', 'برش دادن: thyrotomy (برش تیروئید)'], ['-ectomy', 'برداشتن: thyroidectomy (برداشتن تیروئید)'])}${memo(`${e('ec-')} در یونانی یعنی «بیرون»: ${e('ec + tomy')} = ببُر و <b>بیرون بیاور</b>. بدون ec فقط برش است.`)}${pearl('بعد از برداشتن یک غده درون‌ریز، هورمونش باید تا آخر عمر جایگزین شود؛ مثلاً پس از thyroidectomy، قرص levothyroxine.')}`),
          M(`${e('<b>pancreatectomy</b>')} یعنی…`, ['برداشتن پانکراس', 'برش پانکراس', 'التهاب پانکراس', 'تومور پانکراس'], 'pancreat/o + -ectomy. برش پانکراس pancreatotomy است.'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-ectomy', 'برداشتن'], ['-tomy', 'برش'], ['-logy', 'علم، مطالعه'], ['-logist', 'متخصص'], ['-genesis', 'ساخت، تولید']]),
          B('ساخت گلیکوژن از گلوکز را glycogen___ می‌گویند.', ['esis', 'olysis', 'emia'], 'glycogenesis = ساخت گلیکوژن؛ glycogenolysis = تجزیه گلیکوژن.'),
          M('کدام واژه یعنی «تجزیه گلیکوژن به گلوکز»؟', ['glycogenolysis', 'glycogenesis', 'gluconeogenesis', 'glycosuria'], 'glycogen/o + -lysis (تجزیه). گلوکاگون این کار را در کبد انجام می‌دهد.'),
          W('واژه‌ای بساز به معنی «برداشتن فوق‌کلیه»', ['adrenal/o', '-ectomy'], ['-tomy', 'aden/o', '-megaly'], 'adrenal/o + -ectomy = adrenalectomy.'),
          S('املای انگلیسی «برداشتن تیروئید» را بنویس', 'thyroidectomy', 'thyroid/o + -ectomy.', 'thyroid…'),
          N('sp:lx')
        ]
      },
      {
        id: 'lx9', title: 'دام‌های همزاد', icon: '🎯', items: [
          L('سه «گل» شیرین', `سه واژه شبیه هم که در امتحان‌ها جای هم می‌نشینند:${tbl([['واژه', 'چیست؟', 'نقش'], [e('glucose'), 'قند ساده', 'سوخت سلول'], [e('glycogen'), 'قند ذخیره‌شده', 'انبار قند در کبد و عضله'], [e('glucagon'), 'هورمون', 'آزاد کردن قند از گلیکوژن']])}${memo(`${e('glucaGON')}: وقتی قند «رفت» (gone)، گلوکاگون آن را برمی‌گرداند. ${e('glycoGEN')}: «تولید» و انبار قند.`)}`),
          M('کدام یک «هورمون» است؟', ['glucagon', 'glucose', 'glycogen', 'glycosuria'], 'glucagon هورمون سلول‌های آلفای پانکراس است؛ glucose قند و glycogen شکل ذخیره قند است.'),
          L('همزادهای دیگر', `${tbl([['همزاد ۱', 'همزاد ۲'], [e('hypercalcemia') + ' کلسیم بالا', e('hyperkalemia') + ' پتاسیم بالا'], [e('polyuria') + ' پرادراری', e('polyurea') + ' ماده پلاستیکی (پوشش صنعتی)!'], [e('pancreas') + ' عضو بدن', e('pancrease') + ' نام یک دارو'], [e('glycogenesis') + ' ساخت گلیکوژن', e('glucogenesis') + ' ساخت گلوکز']])}`),
          T(`${e('polyurea')} یکی از نشانه‌های دیابت است.`, false, 'نادرست؛ نشانه دیابت polyuria (پرادراری) است. polyurea یک پلیمر صنعتی است! یک حرف، معنی را کاملاً عوض می‌کند.'),
          L('دو دیابت، دو دنیای متفاوت', `${e('diabetes')} در یونانی یعنی «سیفون، از میان گذشتن»؛ اشاره به ادرار زیاد.${vs(['diabetes mellitus', 'mellitus = عسلی؛ ادرار شیرین از قند؛ مشکل انسولین'], ['diabetes insipidus', 'insipidus = بی‌مزه؛ ادرار رقیق؛ کمبود ADH'])}${pearl('هر دو با پرادراری و پرنوشی می‌آیند، ولی علتشان کاملاً جداست. وقتی فقط «diabetes» گفته می‌شود، منظور تقریباً همیشه diabetes mellitus است.')}`),
          M('دیابتی که از کمبود هورمون ضدادراری (ADH) ایجاد می‌شود کدام است؟', ['diabetes insipidus', 'diabetes mellitus', 'gestational diabetes', 'type 2 diabetes'], 'insipidus (بی‌مزه): ادرار زیاد و رقیق، بدون قند.'),
          L('نام‌های افتخاری (eponyms)', `بعضی بیماری‌ها به نام کاشفشان نام‌گذاری شده‌اند: ${e('Graves disease')}، ${e('Addison disease')}، ${e('Cushing syndrome')}، ${e('Hashimoto thyroiditis')}.<br>امروز بیشتر بدون «s’» مالکیت نوشته می‌شوند (Addison disease)، چون بیمار بیماری را از آدیسون «نگرفته»، آدیسون آن را «کشف» کرده است.${memo('برای این نام‌ها ریشه‌یابی کار نمی‌کند؛ باید هر کدام را به یک تصویر وصل کنی: Graves ← چشم‌های بیرون‌زده، Cushing ← صورت ماه‌گون، Addison ← پوست برنزی.')}`),
          P('هر نام را به نشانه شاخصش وصل کن', [['Graves disease', 'بیرون‌زدگی چشم'], ['Cushing syndrome', 'صورت ماه‌گون'], ['Addison disease', 'پوست برنزی'], ['Hashimoto thyroiditis', 'کم‌کاری تیروئید خودایمنی']]),
          L('مفرد و جمع لاتین', `${tbl([['مفرد', 'جمع'], [e('testis'), e('testes')], [e('ovary'), e('ovaries')], [e('islet'), e('islets')], [e('cortex'), e('cortices')]])}${pearl('در گزارش‌ها می‌خوانی «bilateral testes descended» یا «adrenal cortices»؛ جمع لاتین را بشناس تا گیج نشوی.')}`),
          S('املای انگلیسی «گلوکاگون» را بنویس', 'glucagon', 'gluc/o + agon؛ دقت کن: یک c و آخرش -gon.', 'gluca…'),
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
    id: 'hp', sym: 'Hp', name: 'هیپوتالاموس و هیپوفیز', short: 'هیپوفیز', sub: 'فرمانده‌های مغزی، هورمون‌های محرک، هورمون رشد، ADH و اختلال‌های هیپوفیز',
    color: '#8E44D9', dark: '#6A2FB0', light: '#F0E6FB',
    levels: ['فرمانده و ارکستر', 'هورمون‌های هیپوفیز', 'اختلال‌های هیپوفیز'],
    gens: EA.genIds('hp'),
    lessons: [
      /* ================= سطح ۱: فرمانده و ارکستر ================= */
      {
        id: 'hp1', title: 'هیپوتالاموس: پل عصب و هورمون', icon: '🌉', items: [
          L('رهبرِ رهبر ارکستر', `${e('<b>hypothalamus</b>')} بخش کوچکی از مغز، <b>زیر تالاموس</b>، است:<br>${wb('hypo-', 'thalam/o', '-us')} ← «زیرِ تالاموس»<br>هیپوتالاموس هم بخشی از دستگاه عصبی است و هم غده درون‌ریز؛ اوضاع بدن را می‌سنجد و به هیپوفیز دستور می‌دهد.${memo('اگر هیپوفیز «رهبر ارکستر» غدد است، هیپوتالاموس «آهنگساز» است که نت‌ها را به دست رهبر می‌دهد.')}`),
          L('دو نوع دستور', `هیپوتالاموس با دو نوع هورمون، هیپوفیز قدامی را کنترل می‌کند:${vs(['releasing factor', 'عامل آزادکننده: «ترشح کن!» مثل TRH'], ['inhibiting factor', 'عامل مهارکننده: «ترشح نکن!»'])}علاوه بر این، دو <b>نوروهورمون</b> (${e('neurohormone')}) می‌سازد: ${e('ADH')} و ${e('oxytocin')}. این دو در هیپوفیز خلفی <b>ذخیره</b> و از آن‌جا آزاد می‌شوند.`),
          M('ADH و اکسی‌توسین کجا ساخته می‌شوند؟', ['در هیپوتالاموس', 'در هیپوفیز قدامی', 'در کلیه', 'در تیروئید'], 'در هیپوتالاموس ساخته و در هیپوفیز خلفی ذخیره و آزاد می‌شوند. دام رایج امتحان!'),
          T('هیپوتالاموس هم جزو دستگاه عصبی است و هم جزو دستگاه درون‌ریز.', true, 'درست؛ از نورون ساخته شده، ولی هورمون هم ترشح می‌کند.'),
          L('هیپوتالاموس چه چیزهایی را تنظیم می‌کند؟', `دمای بدن، تشنگی و تعادل آب، گرسنگی، فشار خون و ضربان قلب، چرخه خواب و پاسخ به استرس.${pearl('ضربه به سر یا جراحی نزدیک هیپوتالاموس می‌تواند کل محورهای هورمونی را مختل کند؛ مثلاً بیمار ناگهان ادرار بسیار زیاد پیدا کند (diabetes insipidus).')}`),
          B('هورمونی از هیپوتالاموس که به هیپوفیز می‌گوید «ترشح کن»، عامل ___ نام دارد.', ['آزادکننده', 'مهارکننده', 'ضدادراری'], 'releasing factor (RH)؛ عکس آن inhibiting factor است.'),
          P('هر واژه را به معنی‌اش وصل کن', [['hypothalamus', 'بخشی از مغز زیر تالاموس'], ['neurohormone', 'هورمونی که نورون می‌سازد'], ['releasing factor', 'دستور ترشح'], ['inhibiting factor', 'دستور توقف ترشح']]),
          M(`پیشوند ${e('hypo-')} در hypothalamus یعنی…`, ['زیر', 'کم‌کار', 'بیش از حد', 'کنار'], 'در این‌جا hypo- معنی «زیر» (مکان) دارد، نه «کم».'),
          S('املای انگلیسی «هیپوتالاموس» را بنویس', 'hypothalamus', 'hypo- + thalam/o + -us.', 'hypotha…'),
          N('t2f:hp')
        ]
      },
      {
        id: 'hp2', title: 'هیپوفیز: غده فرمانده', icon: '👑', items: [
          L('نخودی در زین ترکی', `${e('<b>pituitary gland</b>')} یا ${e('<b>hypophysis</b>')} غده‌ای به اندازه یک <b>نخود</b> است که با یک ساقه (${e('infundibulum')}) از هیپوتالاموس آویزان است و در فرورفتگی استخوانی به نام <b>زین ترکی</b> (${e('sella turcica')}) در استخوان اسفنوئید می‌نشیند.${fig('pituitary', '', 'هیپوفیز دو لوب دارد: قدامی (adenohypophysis) و خلفی (neurohypophysis).')}`),
          L('دو لوب، دو دنیا', `${vs(['adenohypophysis', 'لوب قدامی؛ aden/o = غده: خودش هورمون می‌سازد (GH، TSH، ACTH، FSH، LH، PRL)'], ['neurohypophysis', 'لوب خلفی؛ neur/o = عصب: فقط هورمون‌های هیپوتالاموس را ذخیره و آزاد می‌کند (ADH، اکسی‌توسین)'])}${memo('لوب قدامی «کارخانه» است؛ لوب خلفی «انبار».')}`),
          M('لوب خلفی هیپوفیز را چه می‌نامند؟', ['neurohypophysis', 'adenohypophysis', 'infundibulum', 'sella turcica'], 'neur/o (عصب) + hypophysis؛ در واقع ادامه بافت عصبی هیپوتالاموس است.', null, F('pituitary')),
          T('sella turcica غده‌ای است که هورمون رشد می‌سازد.', false, 'نادرست؛ زین ترکی فرورفتگی استخوانی است که هیپوفیز در آن قرار دارد.'),
          P('هر بخش را به توصیفش وصل کن', [['adenohypophysis', 'لوب قدامی، کارخانه هورمون'], ['neurohypophysis', 'لوب خلفی، انبار ADH و اکسی‌توسین'], ['infundibulum', 'ساقه اتصال به هیپوتالاموس'], ['sella turcica', 'جایگاه استخوانی هیپوفیز']]),
          L('چرا «غده فرمانده»؟', `بسیاری از هورمون‌های لوب قدامی، غدد دیگر را روشن می‌کنند: تیروئید، قشر فوق‌کلیه، تخمدان و بیضه. به همین دلیل هیپوفیز را <b>master gland</b> می‌نامند.${pearl('تومور هیپوفیز در عکس رادیولوژی جمجمه یا MRI معمولاً با «بزرگ شدن زین ترکی» دیده می‌شود.')}`),
          B('هیپوفیز از نظر اندازه شبیه یک ___ است.', ['نخود', 'گردو', 'سیب'], 'pea-sized gland؛ با این حال فرمانده بیشتر غدد است.'),
          M(`${e('<b>hypophysial</b>')} یعنی…`, ['مربوط به هیپوفیز', 'برداشتن هیپوفیز', 'التهاب هیپوفیز', 'کم‌کاری هیپوفیز'], 'hypophysi/o + -al (مربوط به)؛ گاهی hypophyseal نوشته می‌شود.'),
          W('واژه‌ای بساز به معنی «التهاب هیپوفیز»', ['hypophys/o', '-itis'], ['-ectomy', 'pituitar/o', '-oma'], 'hypophys/o + -itis = hypophysitis.'),
          S('املای انگلیسی «هیپوفیز» (نام علمی) را بنویس', 'hypophysis', 'hypo- (زیر) + physis (رویش).', 'hypoph…'),
          N('r2m:hp')
        ]
      },
      {
        id: 'hp3', title: 'هورمون‌های محرک (-tropin)', icon: '🎛️', items: [
          L('هورمون‌هایی که غده دیگری را روشن می‌کنند', `پسوند ${e('-tropin')} (اسم) یا ${e('-tropic')} (صفت) یعنی «محرکِ». هورمون‌های تروپیک هیپوفیز:${tbl([['هورمون', 'نام کامل', 'هدف'], [e('TSH'), e('thyroid-stimulating hormone'), 'تیروئید'], [e('ACTH'), e('adrenocorticotropic hormone'), 'قشر فوق‌کلیه'], [e('FSH'), e('follicle-stimulating hormone'), 'فولیکول تخمدان، تولید اسپرم'], [e('LH'), e('luteinizing hormone'), 'تخمک‌گذاری، تستوسترون']])}${memo('نام خودش آدرس را می‌گوید: thyroid-stimulating = محرک تیروئید؛ adreno-cortico-tropic = محرکِ قشرِ فوق‌کلیه.')}`),
          M(`${e('<b>ACTH</b>')} کدام غده را تحریک می‌کند؟`, ['قشر فوق‌کلیه', 'مدولای فوق‌کلیه', 'تیروئید', 'تخمدان'], 'adreno (فوق‌کلیه) + cortico (قشر) + tropic (محرک) ← ترشح کورتیزول.'),
          O(`قطعه‌های ${e('adrenocorticotropic')} را مرتب کن`, ['adren/o', 'cortic/o', '-tropic'], 'adren/o (فوق‌کلیه) + cortic/o (قشر) + -tropic (محرک).'),
          L('گنادوتروپین‌ها', `${e('FSH')} و ${e('LH')} را روی هم ${e('<b>gonadotropins</b>')} می‌نامند (${e('gonad/o')} = غدد جنسی).<br>• در زن: FSH رشد فولیکول (تخمک) و LH تخمک‌گذاری و تشکیل <b>جسم زرد</b> را تحریک می‌کند (${e('lute/o')} = زرد ← luteinizing).<br>• در مرد: FSH تولید اسپرم و LH (که در مرد ${e('ICSH')} هم نامیده می‌شود) ترشح تستوسترون را تحریک می‌کند.`),
          T('FSH و LH هر دو گنادوتروپین هستند.', true, 'درست؛ هر دو غدد جنسی (gonads) را تحریک می‌کنند.'),
          M(`${e('LH')} در زن چه کاری می‌کند؟`, ['تخمک‌گذاری و تشکیل جسم زرد', 'تولید شیر', 'انقباض رحم', 'افزایش قند خون'], 'luteinizing = زرد کننده؛ از فولیکول پاره‌شده جسم زرد (corpus luteum) می‌سازد.'),
          P('هر اختصار را به نام کاملش وصل کن', [['TSH', 'thyroid-stimulating hormone'], ['ACTH', 'adrenocorticotropic hormone'], ['FSH', 'follicle-stimulating hormone'], ['LH', 'luteinizing hormone'], ['ICSH', 'interstitial cell-stimulating hormone']]),
          B('نام دیگر TSH، thyro___ است.', ['tropin', 'xine', 'toxicosis'], 'thyrotropin = محرک تیروئید.'),
          W('واژه‌ای بساز به معنی «هورمون محرک غدد جنسی»', ['gonad/o', '-tropin'], ['thyr/o', '-gen', 'andr/o'], 'gonad/o + -tropin = gonadotropin.'),
          S('املای اختصار «هورمون محرک قشر فوق‌کلیه» را بنویس', 'ACTH', 'adrenocorticotropic hormone.', 'AC…'),
          N('ab:hp')
        ]
      },

      /* ================= سطح ۲: هورمون‌های هیپوفیز ================= */
      {
        id: 'hp4', title: 'هورمون رشد، پرولاکتین و MSH', icon: '📏', items: [
          L('هورمون رشد', `${e('<b>growth hormone</b>')} (${e('GH')}) یا ${e('<b>somatotropin</b>')}:<br>${wb('somat/o', '-tropin')} ← «محرکِ بدن»<br>رشد استخوان‌ها، عضله‌ها و بیشتر بافت‌ها را تحریک می‌کند و بیشتر در <b>آغاز خواب عمیق</b> ترشح می‌شود.${memo('این باور قدیمی که «بچه‌ها در خواب قد می‌کشند» پایه علمی دارد!')}${pearl('امروز GH با مهندسی ژنتیک ساخته می‌شود و برای کودکان کوتاه‌قد با کمبود GH تجویز می‌شود (human growth hormone therapy).')}`),
          M(`${e('<b>somatotropin</b>')} نام دیگر کدام هورمون است؟`, ['هورمون رشد', 'پرولاکتین', 'اکسی‌توسین', 'ملاتونین'], 'somat/o (بدن) + -tropin (محرک) = growth hormone. اختصار دیگرش STH است.'),
          L('پرولاکتین: هورمون شیر', `${wb('pro-', 'lact/o', '-in')} ← ${e('<b>prolactin</b>')} (${e('PRL')})<br>«برای شیر»: رشد پستان و <b>ساخت</b> شیر پس از زایمان را تحریک می‌کند. نام دیگرش ${e('lactogenic hormone')} (${e('LTH')}) است.${vs(['prolactin', 'شیر را می‌سازد (لوب قدامی)'], ['oxytocin', 'شیر را بیرون می‌راند (لوب خلفی)'])}`),
          T('پرولاکتین شیر را از پستان بیرون می‌راند.', false, 'نادرست؛ پرولاکتین شیر را «می‌سازد». بیرون راندن شیر (milk let-down) کار اکسی‌توسین است.'),
          L('MSH: رنگ پوست', `${e('<b>melanocyte-stimulating hormone</b>')} (${e('MSH')}) ملانوسیت‌های پوست را به ساختن رنگدانه ملانین تحریک می‌کند (${e('melan/o')} = سیاه).${pearl('در بیماری آدیسون، پوست بیمار تیره (برنزی) می‌شود؛ چون هیپوفیز برای جبران کمبود کورتیزول، ACTH و هورمون‌های شبیه MSH زیادی می‌سازد.')}`),
          P('هر هورمون را به اثرش وصل کن', [['GH', 'رشد استخوان و عضله'], ['PRL', 'ساخت شیر'], ['MSH', 'رنگدانه پوست'], ['TSH', 'تحریک تیروئید']]),
          M('کدام هورمون هیپوفیز قدامی «تروپیک» نیست، یعنی غده دیگری را تحریک نمی‌کند؟', ['پرولاکتین', 'TSH', 'ACTH', 'FSH'], 'پرولاکتین (و MSH) مستقیم روی بافت (پستان، پوست) اثر دارند، نه روی یک غده دیگر.'),
          B('پیشوند pro- و ریشه lact/o در prolactin یعنی «برای ___».', ['شیر', 'رشد', 'خواب'], 'lact/o و galact/o هر دو یعنی شیر.'),
          W('واژه‌ای بساز به معنی «هورمون رشد» (محرک بدن)', ['somat/o', '-tropin'], ['gonad/o', '-gen', 'thyr/o'], 'somat/o + -tropin = somatotropin.'),
          S('املای انگلیسی «پرولاکتین» را بنویس', 'prolactin', 'pro- + lact/o + -in.', 'prola…'),
          N('f2t:hp')
        ]
      },
      {
        id: 'hp5', title: 'هیپوفیز خلفی: ADH و اکسی‌توسین', icon: '💧', items: [
          L('هورمون ضدادراری', `${wb('anti-', 'diuret', '-ic')} ← ${e('<b>antidiuretic hormone</b>')} (${e('ADH')})<br>«ضدِ ادرار زیاد»: به لوله‌های کلیه دستور می‌دهد <b>آب را بازجذب کنند</b>؛ پس ادرار کمتر و غلیظ‌تر می‌شود.<br>نام دیگرش ${e('<b>vasopressin</b>')} است، چون رگ‌ها را تنگ می‌کند و فشار خون را بالا می‌برد (${e('vas/o')} = رگ).${memo('ADH مثل «سد» است: آب را پشت خودش در بدن نگه می‌دارد.')}`),
          M('ADH چه اثری روی کلیه دارد؟', ['بازجذب آب را زیاد می‌کند و ادرار کم می‌شود', 'دفع آب را زیاد می‌کند', 'دفع قند را زیاد می‌کند', 'تولید ادرار را متوقف می‌کند'], 'anti-diuretic = ضد ادرار زیاد؛ آب در بدن می‌ماند.'),
          T('vasopressin و ADH یک هورمون هستند.', true, 'درست؛ vasopressin نامی است که به اثر تنگ‌کنندگی رگ‌ها اشاره دارد.'),
          L('اکسی‌توسین: زایمان سریع', `${e('<b>oxytocin</b>')} (${e('OXT')}) از یونانی ${e('oxytokos')} یعنی «زایمان سریع»:<br>• انقباض رحم در هنگام زایمان را تحریک می‌کند؛<br>• شیر را از پستان بیرون می‌راند (${e('milk let-down')}).${pearl('در اتاق زایمان، اکسی‌توسین مصنوعی برای القای زایمان یا کنترل خونریزی پس از زایمان تجویز می‌شود. کمبود آن می‌تواند به uterine inertia (توقف انقباض رحم) کمک کند.')}`),
          P('هر هورمون را به هدف و اثرش وصل کن', [['ADH', 'کلیه: بازجذب آب'], ['oxytocin', 'رحم: انقباض در زایمان'], ['vasopressin', 'رگ‌ها: تنگ شدن'], ['prolactin', 'پستان: ساخت شیر']]),
          M('کدام هورمون هم در زایمان و هم در شیردهی نقش دارد؟', ['oxytocin', 'ADH', 'GH', 'TSH'], 'انقباض رحم و جهش شیر (let-down)، هر دو کار اکسی‌توسین است.'),
          M('در این شکل، کدام دو هورمون از لوب خلفی (P) آزاد می‌شوند؟', ['ADH و OXT', 'GH و PRL', 'TSH و ACTH', 'FSH و LH'], 'لوب خلفی فقط این دو هورمون هیپوتالاموسی را آزاد می‌کند.', null, F('pit-targets')),
          B('هورمون ضدادراری با اختصار ___ نوشته می‌شود.', ['ADH', 'ACTH', 'OXT'], 'antidiuretic hormone = ADH.'),
          S('املای انگلیسی «اکسی‌توسین» را بنویس', 'oxytocin', 'oxy (سریع) + tocin (زایمان).', 'oxy…'),
          N('d2t:hp')
        ]
      },
      {
        id: 'hp6', title: 'جدول هورمون‌های هیپوفیز', icon: '📋', items: [
          L('همه در یک نگاه', `${fig('pit-targets', '', 'شش هورمون از لوب قدامی (A) و دو هورمون از لوب خلفی (P)؛ هر پیکان به بافت هدف می‌رسد.')}`),
          L('اختصارهای هم‌معنی', `بعضی هورمون‌ها دو اسم و دو اختصار دارند:${tbl([['هورمون', 'اختصارها'], ['هورمون رشد', e('GH، hGH، STH (somatotropic hormone)')], ['پرولاکتین', e('PRL، LTH (lactogenic hormone)')], ['LH در مرد', e('ICSH')], ['ADH', e('vasopressin')], ['اکسی‌توسین', e('OXT')]])}${memo('برای امتحان، هر هورمون را با «اختصار + هدف» حفظ کن؛ مثلاً «ACTH ← فوق‌کلیه».')}`),
          P('هر اختصار را به معنی‌اش وصل کن', [['STH', 'هورمون رشد'], ['LTH', 'پرولاکتین'], ['OXT', 'اکسی‌توسین'], ['MSH', 'محرک ملانوسیت'], ['ICSH', 'LH در مرد']]),
          M('کدام هورمون در هیپوفیز قدامی ساخته نمی‌شود؟', ['ADH', 'TSH', 'GH', 'PRL'], 'ADH را هیپوتالاموس می‌سازد و هیپوفیز خلفی آزاد می‌کند.'),
          M(`در یک برگه آزمایش نوشته شده «${e('TSH: 0.05 mIU/L')} (پایین)». این هورمون از کجا ترشح می‌شود؟`, ['هیپوفیز قدامی', 'تیروئید', 'هیپوتالاموس', 'هیپوفیز خلفی'], 'TSH هورمون هیپوفیز است، هرچند برای ارزیابی تیروئید اندازه گرفته می‌شود. TSH پایین معمولاً یعنی تیروئید پرکار است (بازخورد منفی).'),
          T('هورمون‌های تروپیک فقط در لوب قدامی هیپوفیز ساخته می‌شوند.', true, 'درست؛ TSH، ACTH، FSH و LH همه از adenohypophysis هستند.'),
          O('مسیر هورمون ADH را مرتب کن', ['ساخته شدن در هیپوتالاموس', 'حرکت در ساقه هیپوفیز', 'ذخیره در هیپوفیز خلفی', 'آزاد شدن در خون و اثر بر کلیه'], 'ADH نوروهورمون است: ساخت در نورون، ذخیره در neurohypophysis.'),
          B('هورمون‌هایی که FSH و LH جزوشان هستند، ___ نام دارند.', ['گنادوتروپین', 'کورتیکواستروئید', 'کاتکول‌آمین'], 'gonadotropins.'),
          M('کدام جفت درست است؟', ['PRL ← پستان', 'ACTH ← تیروئید', 'TSH ← فوق‌کلیه', 'OXT ← کلیه'], 'PRL روی غدد پستانی اثر دارد. بقیه جفت‌ها جابه‌جا شده‌اند.'),
          N('ab:hp')
        ]
      },

      /* ================= سطح ۳: اختلال‌های هیپوفیز ================= */
      {
        id: 'hp7', title: 'هورمون رشد: زیاد یا کم', icon: '🧍', items: [
          L('زمان، نوع بیماری را تعیین می‌کند', `${fig('growth', '', 'اگر GH زیاد پیش از بسته شدن صفحه‌های رشد استخوان باشد، قد بلند می‌شود؛ پس از آن، فقط انتهاها و صورت درشت می‌شوند.')}${tbl([['حالت', 'زمان', 'نتیجه'], [e('gigantism'), 'GH زیاد پیش از بلوغ', 'قد بسیار بلند، تناسب تقریباً طبیعی'], [e('acromegaly'), 'GH زیاد پس از بلوغ', 'درشتی دست، پا، فک و صورت'], [e('dwarfism'), 'GH کم در کودکی', 'قد کوتاه با تناسب طبیعی']])}`),
          L('آکرومگالی', `${wb('acr/o', '-megaly')} ← ${e('<b>acromegaly</b>')}: «بزرگیِ انتهاها»<br>دست‌ها و پاها، فک پایین، بینی، لب‌ها و ابروها درشت می‌شوند. علت معمول: <b>آدنوم هیپوفیز</b>.${fig(['acromegaly-drawing', 'acromegaly-hands'], ['نمای روبه‌رو و نیم‌رخ: فک و بینی درشت', 'دست‌های پهن و ضخیم'], 'آکرومگالی معمولاً در ۳۰ تا ۴۰ سالگی و پس از سال‌ها ترشح زیاد GH تشخیص داده می‌شود.')}${memo('acr/o مثل «اکروبات»: کسی که روی «نوک» انگشتانش راه می‌رود؛ یعنی نوک و انتهای بدن.')}`),
          M('مردی ۴۰ ساله می‌گوید انگشترش دیگر به دستش نمی‌رود و کفش‌هایش تنگ شده‌اند؛ فک پایینش هم جلو آمده است. محتمل‌ترین تشخیص؟', ['acromegaly', 'gigantism', 'dwarfism', 'myxedema'], 'GH زیاد در بزرگسال ← درشتی انتهاها و صورت = آکرومگالی.', [['سن', '۴۰ سال'], ['شکایت', 'تنگ شدن انگشتر و کفش'], ['معاینه', 'فک پایین بزرگ، دست‌های پهن']]),
          L('غول‌پیکری و کوتاه‌قدی', `${e('<b>gigantism</b>')} (${e('giantism')}): GH زیاد در کودکی؛ قد ممکن است به بیش از ۲ متر و ۴۰ سانتی‌متر برسد.<br>${e('<b>pituitary dwarfism</b>')}: GH کم در کودکی؛ قد بسیار کوتاه ولی تناسب بدن طبیعی.${fig(['gigantism-twins', 'giant-dwarf'], ['دوقلوی همسان: یکی با غول‌پیکری', 'غول‌پیکری، قد طبیعی و کوتاه‌قدی'], 'تفاوت دو برادر دوقلوی همسان فقط از ترشح زیاد GH در یکی از آن‌هاست.')}`),
          T('در کوتاه‌قدی هیپوفیزی (pituitary dwarfism) تناسب اندام‌ها به هم می‌خورد.', false, 'نادرست؛ قد کوتاه است ولی تناسب طبیعی است. کوتاه‌قدی با تناسب نابه‌جا بیشتر علت ژنتیکی یا کم‌کاری مادرزادی تیروئید دارد.'),
          P('هر حالت را به علتش وصل کن', [['gigantism', 'GH زیاد پیش از بلوغ'], ['acromegaly', 'GH زیاد پس از بلوغ'], ['pituitary dwarfism', 'GH کم در کودکی']]),
          M('درمان کودکِ کوتاه‌قد با کمبود GH چیست؟', ['هورمون رشد (somatropin) پیش از بسته شدن صفحه‌های رشد', 'برداشتن هیپوفیز', 'ید رادیواکتیو', 'انسولین'], 'تا زمانی که استخوان‌ها هنوز رشد می‌کنند (با عکس مچ دست بررسی می‌شود)، GH قد نهایی را بیشتر می‌کند.'),
          B('واژه acromegaly از acr/o به معنی ___ و -megaly به معنی بزرگی ساخته شده است.', ['انتهاها', 'غده', 'بدن'], 'acr/o = extremities (دست، پا، صورت).'),
          W('واژه‌ای بساز به معنی «بزرگیِ انتهاها»', ['acr/o', '-megaly'], ['somat/o', '-itis', 'aden/o'], 'acr/o + -megaly = acromegaly.'),
          S('املای انگلیسی «غول‌پیکری» را بنویس', 'gigantism', 'gigant + -ism.', 'gigan…'),
          N('t2f:hp')
        ]
      },
      {
        id: 'hp8', title: 'ADH: دیابت بی‌مزه و SIADH', icon: '🚰', items: [
          L('ADH کم: دیابت بی‌مزه', `${e('<b>diabetes insipidus</b>')} (${e('DI')}): هیپوفیز خلفی ADH کافی آزاد نمی‌کند (معمولاً پس از ضربه سر، جراحی یا تومور).<br>کلیه نمی‌تواند آب را نگه دارد ← حجم زیادی ادرار <b>رقیق و بی‌مزه</b> (${e('insipidus')} = بی‌مزه).<br>دو نشانه اصلی: ${e('polyuria')} (پرادراری) و ${e('polydipsia')} (پرنوشی).${fig('adh', '', 'ADH کم: آب از دست می‌رود. ADH زیاد (SIADH): آب می‌ماند و سدیم خون رقیق می‌شود.')}`),
          M('کدام ترکیب، دیابت بی‌مزه را بهتر توصیف می‌کند؟', ['ADH کم، ادرار زیاد و رقیق، تشنگی شدید', 'انسولین کم، قند در ادرار', 'ADH زیاد، احتباس آب', 'کورتیزول زیاد، صورت ماه‌گون'], 'DI = کمبود ADH؛ ادرار بی‌قند و رقیق.'),
          L('ADH زیاد: SIADH', `${e('<b>syndrome of inappropriate ADH</b>')} (${e('SIADH')}): ADH بیش از نیاز و «نابجا» ترشح می‌شود.<br>آب در بدن می‌ماند، خون رقیق می‌شود و سدیم پایین می‌آید: ${e('<b>hyponatremia</b>')}.${pearl('داروهای «آکوارتیک» (aquaretics) مثل tolvaptan دفع آب را بدون دفع سدیم زیاد می‌کنند و برای درمان hyponatremia ناشی از SIADH به کار می‌روند.')}`),
          P('هر حالت را به توصیفش وصل کن', [['diabetes insipidus', 'ADH کم، ادرار زیاد'], ['SIADH', 'ADH زیاد، احتباس آب'], ['polyuria', 'ادرار زیاد'], ['polydipsia', 'تشنگی زیاد'], ['hyponatremia', 'سدیم خون پایین']]),
          T('در دیابت بی‌مزه، ادرار پر از قند است.', false, 'نادرست؛ ادرار رقیق و بی‌قند است. قند در ادرار (glycosuria) نشانه diabetes mellitus است.'),
          M('خانم مارسی پس از ضربه شدید به سر، روزانه بیش از ۸ لیتر ادرار رقیق دفع می‌کند و مدام تشنه است. کدام بخش احتمالاً آسیب دیده است؟', ['هیپوتالاموس یا هیپوفیز خلفی', 'پانکراس', 'قشر فوق‌کلیه', 'تیروئید'], 'ساخت یا آزادسازی ADH مختل شده ← diabetes insipidus.', [['سابقه', 'ضربه به سر'], ['ادرار', '۸ لیتر در روز، رقیق'], ['قند خون', 'طبیعی']]),
          B('در SIADH، سدیم خون ___ می‌شود.', ['کم', 'زیاد', 'طبیعی'], 'آب اضافه سدیم را رقیق می‌کند ← hyponatremia.'),
          M('درمان دیابت بی‌مزه با کدام دارو است؟', ['vasopressin (شکل مصنوعی ADH)', 'insulin', 'levothyroxine', 'methimazole'], 'هورمون کمبود را جایگزین می‌کنیم.'),
          W('واژه‌ای بساز به معنی «تشنگی زیاد»', ['poly-', '-dipsia'], ['-uria', 'hypo-', '-phagia'], 'poly- + -dipsia = polydipsia.'),
          S('املای انگلیسی «insipidus» را بنویس', 'insipidus', 'insipidus = بی‌مزه.', 'insip…'),
          N('sp:hp')
        ]
      },
      {
        id: 'hp9', title: 'تومور، نارسایی و جراحی هیپوفیز', icon: '🧠', items: [
          L('پرکاری و کم‌کاری هیپوفیز', `${vs(['hyperpituitarism', 'ترشح زیاد یک یا چند هورمون؛ اغلب از adenoma'], ['hypopituitarism', 'ترشح کم یک یا چند هورمون؛ از تومور، ضربه یا قطع خون‌رسانی'])}${e('<b>panhypopituitarism</b>')}: کمبود <b>همه</b> هورمون‌های هیپوفیز. نام قدیمی‌اش ${e('Simmonds disease')} است و با لاغری شدید (${e('cachexia')})، خستگی و از دست رفتن صفات جنسی همراه است.`),
          M('بیماری با کم‌کاری هم‌زمان تیروئید، فوق‌کلیه و غدد جنسی مراجعه کرده است. مشکل اصلی کجاست؟', ['panhypopituitarism (کم‌کاری کامل هیپوفیز)', 'Hashimoto thyroiditis', 'Addison disease', 'diabetes mellitus'], 'وقتی همه محورها با هم خاموش‌اند، به فرمانده (هیپوفیز) شک کن.'),
          L('تومورهای هیپوفیز', `${tbl([['واژه', 'معنی'], [e('pituitary adenoma'), 'تومور خوش‌خیم غده‌ای؛ اغلب GH، ACTH یا پرولاکتین می‌سازد'], [e('craniopharyngioma'), 'تومور خوش‌خیم نزدیک هیپوفیز (crani/o جمجمه + pharyng/o حلق)'], [e('pituitary apoplexy'), 'خونریزی ناگهانی در تومور: سردرد شدید و تاری دید'], [e('hyperprolactinemia'), 'پرولاکتین بالا ← ترشح شیر نابجا (galactorrhea)']])}${pearl('تومور هیپوفیز روی محل تقاطع عصب‌های بینایی فشار می‌آورد؛ برای همین بیمار ممکن است اول به چشم‌پزشک مراجعه کند.')}`),
          M(`${e('<b>galactorrhea</b>')} در کدام حالت دیده می‌شود؟`, ['افزایش پرولاکتین (hyperprolactinemia)', 'کمبود ADH', 'افزایش GH', 'کمبود TSH'], 'galact/o (شیر) + -rrhea (جریان): ترشح شیر بدون بارداری یا شیردهی.'),
          L('جراحی از راه بینی', `${e('<b>hypophysectomy</b>')} یعنی برداشتن هیپوفیز. امروز بیشتر تومورها به روش ${e('<b>transsphenoidal hypophysectomy</b>')} برداشته می‌شوند:<br>${wb('trans-', 'sphenoid', '-al')} ← «از میانِ سینوس اسفنوئید»<br>جراح از راه بینی (یا زیر لب بالا) و سینوس اسفنوئید به زین ترکی می‌رسد، بی‌آنکه مغز را باز کند.`),
          O('مراحل تشخیص و درمان آکرومگالی را مرتب کن', ['شک بالینی: درشتی دست و صورت', 'آزمایش خون: GH بالا', 'MRI: آدنوم هیپوفیز', 'transsphenoidal adenomectomy'], 'از نشانه به آزمایش، تصویر و سپس جراحی.'),
          T('Cushing disease یعنی کورتیزول زیاد به علت تومور هیپوفیز که ACTH زیادی می‌سازد.', true, 'درست؛ «بیماری» کوشینگ منشأ هیپوفیزی دارد؛ «سندرم» کوشینگ به هر علت کورتیزول زیاد گفته می‌شود.'),
          P('هر واژه را به معنی‌اش وصل کن', [['hypophysectomy', 'برداشتن هیپوفیز'], ['hypophysitis', 'التهاب هیپوفیز'], ['adenomectomy', 'برداشتن آدنوم'], ['pituitary apoplexy', 'خونریزی ناگهانی هیپوفیز']]),
          W('واژه‌ای بساز به معنی «کم‌کاری هیپوفیز»', ['hypo-', 'pituitar/o', '-ism'], ['hyper-', 'pan-', '-itis'], 'hypo- + pituitar/o + -ism = hypopituitarism.'),
          S('املای انگلیسی «برداشتن هیپوفیز» را بنویس', 'hypophysectomy', 'hypophys/o + -ectomy.', 'hypophys…'),
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
    id: 'th', sym: 'Th', name: 'تیروئید و پاراتیروئید', short: 'تیروئید', sub: 'پروانه گردن، T3 و T4، ید، کلسیم، پرکاری و کم‌کاری، گواتر، آزمایش‌ها و جراحی',
    color: '#0FA3A3', dark: '#0B7B7B', light: '#DDF5F4',
    levels: ['پروانه گردن', 'پرکار، کم‌کار، گواتر', 'کلسیم، آزمایش و درمان'],
    gens: EA.genIds('th'),
    lessons: [
      /* ================= سطح ۱: پروانه گردن ================= */
      {
        id: 'th1', title: 'آناتومی تیروئید', icon: '🦋', items: [
          L('پروانه‌ای جلوی نای', `${e('<b>thyroid gland</b>')} غده‌ای پروانه‌ای در جلوی گردن، زیر حنجره و دو طرف نای است:<br>• دو <b>لوب</b> (${e('lobe')})، راست و چپ؛<br>• نوار باریکی به نام <b>تنگه</b> (${e('isthmus')}) که دو لوب را به هم وصل می‌کند؛<br>• بالای آن <b>غضروف تیروئید</b> که برجستگی «سیب آدم» (${e("Adam's apple")}) را می‌سازد.${fig('thyroid', '', 'لوب راست بیمار در شکل سمت چپ تو قرار دارد؛ مثل روبه‌رو شدن با بیمار.')}`),
          L('چرا «تیروئید»؟', `${wb('thyr/o', '-oid')} ← «شبیه سپر»<br>یونانی‌ها غضروف جلوی حنجره را شبیه <b>سپر</b> جنگجویان می‌دیدند و غده زیر آن را هم به همین نام خواندند.${memo('thyr/o = سپر؛ تیروئید مثل سپری از گردن تو محافظت می‌کند و موتور سوخت‌وساز بدن را می‌گرداند.')}`),
          M('بخشی که دو لوب تیروئید را به هم وصل می‌کند چه نام دارد؟', ['isthmus', 'infundibulum', 'cortex', 'medulla'], 'isthmus یعنی تنگه؛ نوار باریکی روی سطح جلویی نای.', null, F('thyroid')),
          T('سیب آدم همان غده تیروئید است.', false, 'نادرست؛ سیب آدم برجستگی غضروف تیروئید (بخشی از حنجره) است. غده تیروئید پایین‌تر، دو طرف نای قرار دارد.'),
          L('درون تیروئید', `تیروئید از کیسه‌های ریزی به نام <b>فولیکول</b> ساخته شده که با مایع ژله‌ای به نام <b>کلوئید</b> (${e('colloid')}) پر شده‌اند. هورمون‌ها در کلوئید ذخیره می‌شوند تا هنگام نیاز وارد خون شوند.${pearl('تیروئید فقط حدود ۳۰ گرم وزن دارد، ولی روی تقریباً همه سلول‌های بدن اثر می‌گذارد.')}`),
          P('هر بخش را به توصیفش وصل کن', [['isthmus', 'نوار اتصال دو لوب'], ['thyroid cartilage', 'غضروف سپری حنجره'], ['colloid', 'مایع ذخیره هورمون'], ['lobe', 'هر نیمه پروانه']]),
          B('تیروئید دو طرف ___ قرار دارد.', ['نای', 'مری', 'قلب'], 'جلو و دو طرف نای (trachea)، زیر حنجره (larynx).'),
          M(`${e('<b>thyroidal</b>')} یعنی…`, ['مربوط به تیروئید', 'برداشتن تیروئید', 'التهاب تیروئید', 'بزرگی تیروئید'], 'thyroid/o + -al (مربوط به).'),
          S('املای انگلیسی «تنگه تیروئید» را بنویس', 'isthmus', 'isthmus؛ th در وسط تلفظ نمی‌شود: IS-mus.', 'isth…'),
          N('r2m:th')
        ]
      },
      {
        id: 'th2', title: 'T3، T4 و ید', icon: '⚙️', items: [
          L('هورمون‌های موتور سوخت‌وساز', `تیروئید دو هورمون اصلی می‌سازد که سرعت <b>سوخت‌وساز</b> همه سلول‌ها را تنظیم می‌کنند:${fig('iodine', '', 'عددِ اختصار، تعداد اتم‌های ید است: T4 چهار ید، T3 سه ید.')}${tbl([['اختصار', 'نام', 'نکته'], [e('T4'), e('thyroxine') + ' / ' + e('tetraiodothyronine'), 'فراوان‌تر'], [e('T3'), e('triiodothyronine'), 'فعال‌تر']])}`),
          L('ید: ماده خام', `${e('iod/o')} = ید. تیروئید ید را از خون می‌گیرد و با آن T3 و T4 می‌سازد. منبع ید: غذاهای دریایی، لبنیات و <b>نمک یددار</b>.${pearl('در گذشته کمبود ید در مناطق دور از دریا شایع بود و «کمربند گواتر» می‌ساخت. افزودن ید به نمک، این مشکل را در بیشتر کشورها، از جمله ایران، تقریباً حل کرد.')}`),
          M(`عدد ۴ در ${e('T4')} نشانه چیست؟`, ['چهار اتم ید', 'چهار غده پاراتیروئید', 'چهار لوب', 'چهار ساعت عمر'], 'tetra- = چهار؛ tri- = سه.'),
          O(`قطعه‌های ${e('triiodothyronine')} را مرتب کن`, ['tri-', 'iod/o', 'thyronine'], 'tri- (سه) + iod/o (ید) + thyronine (ترکیب پایه هورمون تیروئید که با -ine تمام می‌شود).'),
          L('سوخت‌وساز پایه', `${e('<b>basal metabolic rate</b>')} (${e('BMR')}): کمترین انرژی که بدن در حال استراحت مصرف می‌کند. هورمون تیروئید «پدال گاز» BMR است:<br>• تولید گرما و دمای بدن<br>• ضربان قلب<br>• رشد و تکامل مغز در کودک<br>${e('T4')} و ${e('T3')} در خون بیشتر به پروتئینی به نام ${e('TBG')} (${e('thyroxine-binding globulin')}) چسبیده‌اند.${memo('تیروئید را «ترموستات و پدال گاز» بدن تصور کن: زیاد باشد، موتور تند و داغ است؛ کم باشد، کند و سرد.')}`),
          T('بدون ید کافی، تیروئید نمی‌تواند T3 و T4 بسازد.', true, 'درست؛ ید جزء ساختمان این هورمون‌هاست.'),
          L('کلسی‌تونین', `تیروئید هورمون سومی هم دارد: ${e('<b>calcitonin</b>')} (${e('CT')}). وقتی کلسیم خون زیاد شود، کلسی‌تونین کلسیم را به <b>استخوان</b> می‌برد و کلسیم خون را <b>پایین</b> می‌آورد.${wb('calc/i', 'ton', '-in')}${memo('calci-TONE-in: کلسیم را «تُن» می‌کند و پایین می‌آورد.')}`),
          P('هر هورمون را به کارش وصل کن', [['T4', 'هورمون اصلی و فراوان تیروئید'], ['T3', 'شکل فعال‌تر، سه ید'], ['calcitonin', 'پایین آوردن کلسیم خون'], ['TSH', 'تحریک تیروئید از هیپوفیز']]),
          B('اختصار BMR یعنی ___ پایه.', ['سوخت‌وساز', 'قند', 'فشار'], 'basal metabolic rate.'),
          S('املای انگلیسی «تیروکسین» را بنویس', ['thyroxine', 'thyroxin'], 'thyroxine (و گاهی thyroxin).', 'thyrox…'),
          N('ab:th')
        ]
      },
      {
        id: 'th3', title: 'پاراتیروئید و کلسیم', icon: '🦴', items: [
          L('چهار دانه کوچک پشت پروانه', `${wb('para-', 'thyroid')} ← ${e('<b>parathyroid glands</b>')}: «کنار تیروئید»<br>معمولاً <b>چهار</b> غده کوچک (دو بالا، دو پایین) روی سطح <b>پشتی</b> تیروئید هستند و فقط یک هورمون می‌سازند: ${e('<b>parathyroid hormone</b>')} (${e('PTH')}) یا ${e('parathormone')}.${fig('parathyroid', '', 'نمای پشت: پاراتیروئیدهای فوقانی و تحتانی.')}`),
          L('PTH و کلسی‌تونین: یک الاکلنگ', `${fig('calcium', '', 'PTH کلسیم را از استخوان به خون می‌آورد؛ کلسی‌تونین برعکس.')}PTH وقتی کلسیم خون پایین است، کلسیم خون را از سه راه بالا می‌برد:<br>۱. آزاد کردن کلسیم از <b>استخوان</b><br>۲. نگه‌داشتن کلسیم در <b>کلیه</b><br>۳. فعال کردن <b>ویتامین D</b> برای جذب کلسیم از روده${memo('PTH = «Pull The calcium High»: کلسیم را بالا بکش!')}`),
          M('وقتی کلسیم خون پایین می‌آید، کدام هورمون ترشح می‌شود؟', ['PTH', 'calcitonin', 'thyroxine', 'insulin'], 'PTH کلسیم خون را بالا می‌برد؛ کلسی‌تونین آن را پایین می‌آورد.', null, F('calcium')),
          T('کلسی‌تونین و PTH اثر یکسانی بر کلسیم خون دارند.', false, 'نادرست؛ اثرشان متضاد است: PTH کلسیم را بالا و کلسی‌تونین پایین می‌آورد.'),
          L('چرا کلسیم مهم است؟', `کلسیم فقط برای استخوان نیست؛ عضله‌ها برای انقباض، عصب‌ها برای پیام‌رسانی و خون برای لخته شدن به آن نیاز دارند.${pearl('چون پاراتیروئیدها به تیروئید چسبیده‌اند، در جراحی تیروئید ممکن است آسیب ببینند. پس از thyroidectomy، پرستار مراقب نشانه‌های کمبود کلسیم است: گزگز دور دهان و انگشتان و اسپاسم عضلات.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['parathyroid', 'کنار تیروئید'], ['parathormone', 'هورمون پاراتیروئید'], ['calc/o', 'کلسیم'], ['calcitonin', 'هورمون کاهنده کلسیم']]),
          M('پیشوند para- در parathyroid یعنی…', ['کنار', 'زیاد', 'زیر', 'همه'], 'para- = کنار، مجاور.'),
          B('پاراتیروئیدها معمولاً ___ غده‌اند.', ['چهار', 'دو', 'شش'], 'دو جفت فوقانی و تحتانی؛ گاهی ۴ تا ۶ عدد.'),
          W('واژه‌ای بساز به معنی «برداشتن پاراتیروئید»', ['parathyroid/o', '-ectomy'], ['thyroid/o', '-tomy', '-itis'], 'parathyroid/o + -ectomy = parathyroidectomy.'),
          S('املای انگلیسی «کلسی‌تونین» را بنویس', 'calcitonin', 'calci- + ton + -in.', 'calci…'),
          N('t2f:th')
        ]
      },

      /* ================= سطح ۲: پرکار، کم‌کار، گواتر ================= */
      {
        id: 'th4', title: 'تیروئید پرکار', icon: '🔥', items: [
          L('موتور روی دور تند', `${e('<b>hyperthyroidism</b>')}: ترشح بیش از حد هورمون‌های تیروئید.<br>${fig('thyroid-compare', '', 'هرچه در پرکاری «زیاد و تند» است، در کم‌کاری «کم و کند» است.')}${e('<b>thyrotoxicosis</b>')} (${e('thyr/o')} + ${e('toxic/o')} سم + ${e('-osis')}): حالتی که بدن «مسموم» از هورمون تیروئید است: تپش قلب، لرزش دست، تعریق، بی‌قراری و کاهش وزن.`),
          L('بیماری گریوز', `${e('<b>Graves disease</b>')} شایع‌ترین علت پرکاری تیروئید است: یک بیماری <b>خودایمنی</b> که در آن آنتی‌بادی‌ها مثل TSH عمل می‌کنند و تیروئید را دائم روشن نگه می‌دارند.<br>سه نشانه شاخص: پرکاری تیروئید، <b>گواتر</b> و ${e('<b>exophthalmos</b>')} (بیرون‌زدگی چشم).${fig(['graves-eyes', 'graves-drawing'], ['چشم‌های بیرون‌زده در گریوز', 'نمای آموزشی exophthalmos'], 'تورم بافت پشت کره چشم، چشم‌ها را به جلو هل می‌دهد.')}`),
          M(`${e('<b>exophthalmos</b>')} یعنی…`, ['بیرون‌زدگی کره چشم', 'التهاب چشم', 'خشکی چشم', 'تاری دید'], 'ex- (بیرون) + ophthalm/o (چشم).', null, F('graves-woman')),
          M('ژاسمین، معلم ۳۵ ساله، چند ماه است بی‌قرار است، شب‌ها خوابش نمی‌برد، گرما را تحمل نمی‌کند، وزن کم کرده و چشم‌هایش بیرون زده است. تیروئیدش بزرگ است. محتمل‌ترین تشخیص؟', ['Graves disease', 'Hashimoto thyroiditis', 'myxedema', 'Addison disease'], 'پرکاری + گواتر + اگزوفتالمی = گریوز.', [['بیمار', 'Jasmine، ۳۵ ساله'], ['شکایت', 'بی‌قراری، بی‌خوابی، تعریق'], ['معاینه', 'exophthalmos، تیروئید بزرگ، tachycardia'], ['آزمایش', 'T3 و T4 بالا']]),
          L('طوفان تیروئیدی', `${e('<b>thyroid storm</b>')} (${e('thyroid crisis')}): شعله‌ور شدن ناگهانی و خطرناک تیروتوکسیکوز در بیمار درمان‌نشده، معمولاً پس از بیماری، عفونت یا ضربه: تب بالا، ضربان بسیار تند و آشفتگی.${pearl('طوفان تیروئیدی یک فوریت پزشکی است و بیمار باید فوراً در بیمارستان بستری شود.')}`),
          T('در پرکاری تیروئید، بیمار معمولاً سرما را تحمل نمی‌کند و وزن اضافه می‌کند.', false, 'نادرست؛ این‌ها نشانه کم‌کاری است. در پرکاری، گرما را تحمل نمی‌کند و وزن کم می‌کند.'),
          P('هر واژه را به معنی‌اش وصل کن', [['thyrotoxicosis', 'مسمومیت با هورمون تیروئید'], ['exophthalmos', 'بیرون‌زدگی چشم'], ['tachycardia', 'ضربان تند قلب'], ['thyroid storm', 'تشدید ناگهانی و خطرناک']]),
          B('شایع‌ترین علت پرکاری تیروئید، بیماری ___ است.', ['گریوز', 'آدیسون', 'هاشیموتو'], 'Graves disease (diffuse toxic goiter).'),
          W('واژه‌ای بساز به معنی «مسمومیت تیروئیدی»', ['thyr/o', 'toxic/o', '-osis'], ['-itis', 'hyper-', '-megaly'], 'thyr/o + toxic/o + -osis = thyrotoxicosis.'),
          S('املای انگلیسی «بیرون‌زدگی چشم» را بنویس', 'exophthalmos', 'ex- + ophthalm/o + -os؛ به phth دقت کن.', 'exoph…'),
          N('d2t:th')
        ]
      },
      {
        id: 'th5', title: 'تیروئید کم‌کار', icon: '❄️', items: [
          L('موتور روی دور کند', `${e('<b>hypothyroidism</b>')}: ترشح کمتر از حد هورمون تیروئید. همه چیز کند می‌شود: خستگی، خواب‌آلودگی، افزایش وزن، سرمازدگی، پوست خشک، ریزش مو، یبوست و ضربان کند.<br>شایع‌ترین علت: ${e('<b>Hashimoto thyroiditis</b>')}، التهاب <b>خودایمنی</b> تیروئید که بافت آن را کم‌کم از بین می‌برد.${memo('Graves و Hashimoto هر دو خودایمنی‌اند ولی برعکس هم: Graves «گاز می‌دهد»، Hashimoto «ترمز می‌گیرد».')}`),
          L('میکزدم: کم‌کاری پیشرفته', `${e('<b>myxedema</b>')} (${e('myx/o')} مخاط + ${e('-edema')} تورم): کم‌کاری شدید در بزرگسال با تورم خشک و مومی صورت، پلک‌های پف‌کرده، لب‌ها و بینی ضخیم و کندی حرکات و گفتار.${fig('myxedema', 'صورت پف‌کرده و بی‌حالت در میکزدم', 'با درمان هورمونی، این ظاهر به‌تدریج برمی‌گردد.')}`),
          M('کدام بیماری خودایمنی شایع‌ترین علت کم‌کاری تیروئید است؟', ['Hashimoto thyroiditis', 'Graves disease', 'Cushing syndrome', 'diabetes insipidus'], 'هاشیموتو = تیروئیدیت لنفوسیتی مزمن.'),
          L('کم‌کاری مادرزادی', `${e('<b>congenital hypothyroidism</b>')} (نام قدیمی: ${e('cretinism')}): کمبود هورمون تیروئید از بدو تولد. اگر درمان نشود، رشد جسمی و ذهنی کودک متوقف می‌شود: زبان بزرگ و بیرون‌زده، صورت پف‌کرده و تأخیر تکامل.${fig('cretinism-infant', 'نوزاد با کم‌کاری مادرزادی تیروئید', 'با غربالگری و درمان زودهنگام، کودک کاملاً طبیعی رشد می‌کند.')}${pearl('به همین دلیل در ایران و بسیاری از کشورها از پاشنه پای همه نوزادان در روزهای اول تولد نمونه خون گرفته می‌شود (غربالگری TSH نوزادان).')}`),
          T('اگر کم‌کاری مادرزادی تیروئید زود تشخیص داده و درمان شود، کودک می‌تواند رشد طبیعی داشته باشد.', true, 'درست؛ درمان با تیروکسین مصنوعی آسیب را پیشگیری می‌کند.'),
          M('نام امروزی cretinism چیست؟', ['congenital hypothyroidism', 'myxedema', 'Graves disease', 'thyroid storm'], 'congenital (مادرزادی) + hypothyroidism.'),
          L('تیروئید طبیعی', `${e('<b>euthyroid</b>')} (${e('eu-')} = خوب، طبیعی): بیماری که تیروئیدش طبیعی کار می‌کند. هدف درمان چه در پرکاری و چه در کم‌کاری، رساندن بیمار به حالت یوتیروئید است.`),
          P('هر حالت را به توصیفش وصل کن', [['myxedema', 'کم‌کاری شدید در بزرگسال'], ['congenital hypothyroidism', 'کم‌کاری از بدو تولد'], ['Hashimoto thyroiditis', 'التهاب خودایمنی تیروئید'], ['euthyroid', 'تیروئید طبیعی']]),
          B('تورم مومی صورت در کم‌کاری شدید بزرگسالان ___ نام دارد.', ['myxedema', 'exophthalmos', 'tetany'], 'myx/o (مخاط) + -edema (تورم).'),
          W('واژه‌ای بساز به معنی «کم‌کاری تیروئید»', ['hypo-', 'thyroid/o', '-ism'], ['hyper-', '-itis', 'para-'], 'hypo- + thyroid/o + -ism = hypothyroidism.'),
          S('املای انگلیسی «میکزدم» را بنویس', 'myxedema', 'myx/o + -edema.', 'myx…'),
          N('f2t:th')
        ]
      },
      {
        id: 'th6', title: 'گواتر و ندول', icon: '🔵', items: [
          L('گواتر: بزرگی تیروئید', `${e('<b>goiter</b>')} (از لاتین ${e('guttur')} = گلو) یعنی بزرگ شدن تیروئید که به شکل تورم جلوی گردن دیده می‌شود. نام علمی دیگرش ${e('<b>thyromegaly</b>')} است.<br>گواتر فقط یک «نشانه» است و کار تیروئید ممکن است زیاد، کم یا طبیعی باشد.${fig(['iodine-goiter', 'large-goiter'], ['گواتر ناشی از کمبود ید', 'گواتر بسیار بزرگ'], 'گواتر ساده معمولاً از کمبود ید در رژیم غذایی است.')}`),
          L('انواع گواتر', `${tbl([['نوع', 'توضیح'], [e('simple (nontoxic) goiter'), 'از کمبود ید؛ کار تیروئید معمولاً طبیعی'], [e('toxic goiter'), 'گواتری که هورمون زیادی می‌سازد ← پرکاری'], [e('diffuse toxic goiter'), 'نام دیگر Graves'], [e('nodular goiter'), 'گواتر گره‌دار']])}${fig(['diffuse-goiter', 'nodular-goiter'], ['گواتر منتشر کوچک (Graves)', 'گواتر گره‌دار بزرگ'], '')}`),
          M('کدام جمله درباره گواتر درست است؟', ['گواتر یعنی بزرگی تیروئید و ممکن است با پرکاری، کم‌کاری یا کار طبیعی همراه باشد', 'گواتر همیشه نشانه سرطان است', 'گواتر فقط در پرکاری دیده می‌شود', 'گواتر یعنی التهاب پاراتیروئید'], 'گواتر توصیف «اندازه» است، نه «کار» غده.'),
          L('ندول تیروئید', `${e('<b>thyroid nodule</b>')}: گره یا توده‌ای جامد یا پر از مایع درون تیروئید. بیشتر ندول‌ها <b>خوش‌خیم</b> (مثل ${e('adenoma')}) هستند، ولی برای رد کردن ${e('thyroid carcinoma')} (سرطان تیروئید) بررسی می‌شوند.${pearl('سونوگرافی تیروئید (thyroid echography) ندول جامد را از کیست مایع تشخیص می‌دهد؛ اسکن تیروئید هم «سرد» یا «گرم» بودن ندول را نشان می‌دهد.')}`),
          T(`${e('thyromegaly')} و ${e('goiter')} هر دو به معنی بزرگی تیروئید هستند.`, true, 'درست؛ thyr/o + -megaly.'),
          P('هر نوع گواتر را به توصیفش وصل کن', [['simple goiter', 'کمبود ید'], ['toxic goiter', 'با پرکاری'], ['nodular goiter', 'گره‌دار'], ['thyroid carcinoma', 'سرطان تیروئید']]),
          M('شایع‌ترین علت گواتر ساده در جهان چیست؟', ['کمبود ید در رژیم غذایی', 'تومور هیپوفیز', 'کمبود کلسیم', 'زیادی انسولین'], 'بدون ید، تیروئید برای جبران بزرگ می‌شود.'),
          B('التهاب تیروئید را thyroid___ می‌گویند.', ['itis', 'ectomy', 'megaly'], 'thyroid/o + -itis = thyroiditis.'),
          W('واژه‌ای بساز به معنی «بزرگی تیروئید»', ['thyr/o', '-megaly'], ['-itis', 'aden/o', 'acr/o'], 'thyr/o + -megaly = thyromegaly.'),
          S('املای انگلیسی «گواتر» را بنویس', ['goiter', 'goitre'], 'goiter (در انگلیسی بریتانیایی goitre).', 'goi…'),
          N('wb:th')
        ]
      },

      /* ================= سطح ۳: کلسیم، آزمایش و درمان ================= */
      {
        id: 'th7', title: 'اختلال‌های پاراتیروئید', icon: '⚡', items: [
          L('PTH زیاد: استخوان‌ها و سنگ‌ها', `${e('<b>hyperparathyroidism</b>')}: ترشح زیاد PTH، معمولاً از یک <b>آدنوم</b> پاراتیروئید.<br>کلسیم از استخوان کشیده می‌شود ← ${e('<b>hypercalcemia</b>')}، پوکی و درد استخوان و <b>سنگ کلیه</b> (${e('renal calculi')}).<br>شکل شدید آسیب استخوانی را ${e('Recklinghausen disease')} می‌نامند.${memo('برای پرکاری پاراتیروئید: «Bones, Stones, Groans»؛ استخوان‌های دردناک، سنگ‌های کلیه، و ناله از درد شکم.')}`),
          L('PTH کم: تتانی', `${e('<b>hypoparathyroidism</b>')}: PTH کم ← ${e('<b>hypocalcemia</b>')} (کلسیم خون پایین).<br>کلسیم کم، عصب‌ها و عضله‌ها را «تحریک‌پذیر» می‌کند: گزگز دور دهان (${e('perioral')}) و انگشتان، و ${e('<b>tetany</b>')} یعنی اسپاسم‌های دردناک عضلات، به‌ویژه خم شدن شدید مچ دست و پا، و حتی تشنج (${e('convulsions')}).${pearl('شایع‌ترین علت hypoparathyroidism، آسیب یا برداشته شدن ناخواسته پاراتیروئیدها در جراحی تیروئید است؛ درمان: کلسیم (مثل calcium gluconate) و ویتامین D.')}`),
          M('بیمار یک روز پس از جراحی تیروئید از گزگز دور دهان و انگشتان شاکی است و دست‌هایش منقبض می‌شود. چه شده است؟', ['هیپوکلسمی به علت آسیب پاراتیروئیدها', 'هیپرکلسمی', 'طوفان تیروئیدی', 'کمبود ADH'], 'tetany و perioral numbness = کلسیم پایین ← hypoparathyroidism.', [['جراحی', 'thyroidectomy دیروز'], ['شکایت', 'گزگز دور دهان و انگشتان'], ['معاینه', 'اسپاسم مچ دست'], ['کلسیم سرم', 'پایین']]),
          P('هر حالت را به نشانه‌اش وصل کن', [['hyperparathyroidism', 'سنگ کلیه و درد استخوان'], ['hypoparathyroidism', 'تتانی و گزگز'], ['hypercalcemia', 'کلسیم خون بالا'], ['hypocalcemia', 'کلسیم خون پایین']]),
          T('tetany نشانه کلسیم خون بالاست.', false, 'نادرست؛ tetany نشانه کلسیم خون «پایین» (hypocalcemia) است.'),
          M('شایع‌ترین علت پرکاری اولیه پاراتیروئید (PHPT) چیست؟', ['آدنوم خوش‌خیم یکی از پاراتیروئیدها', 'کمبود ید', 'کمبود ویتامین D', 'برداشتن تیروئید'], 'PHPT = primary hyperparathyroidism. نوع ثانویه بیشتر در نارسایی مزمن کلیه دیده می‌شود.'),
          B('کلسیم خون بالا را hyper___emia می‌نامند.', ['calc', 'kal', 'natr'], 'hypercalcemia؛ با hyperkalemia (پتاسیم) اشتباه نکن.'),
          O(`قطعه‌های ${e('hypoparathyroidism')} را مرتب کن`, ['hypo-', 'parathyroid/o', '-ism'], 'hypo- (کم) + parathyroid/o + -ism (حالت).'),
          W('واژه‌ای بساز به معنی «کلسیم خون پایین»', ['hypo-', 'calc/o', '-emia'], ['hyper-', 'kal/i', '-uria'], 'hypo- + calc/o + -emia = hypocalcemia.'),
          S('املای انگلیسی «تتانی» را بنویس', 'tetany', 'tetany: اسپاسم ناشی از کلسیم پایین (با tetanus یا کزاز اشتباه نکن).', 'teta…'),
          N('sp:th')
        ]
      },
      {
        id: 'th8', title: 'آزمایش‌ها و تصویربرداری تیروئید', icon: '🔬', items: [
          L('آزمایش‌های خون', `${tbl([['آزمایش', 'چه چیزی را می‌سنجد؟'], [e('TFT (thyroid function test)'), 'سطح T3، T4 و TSH'], [e('TSH'), 'حساس‌ترین آزمایش غربالگری'], [e('free T4، FTI (T7)'), 'شاخص تیروکسین آزاد'], [e('TBG'), 'پروتئین حامل تیروکسین'], [e('PBI'), 'ید متصل به پروتئین (روش قدیمی سنجش T4)'], [e('RIA'), 'روش بسیار حساس سنجش هورمون با مواد رادیواکتیو']])}`),
          L('TSH را برعکس بخوان!', `به خاطر <b>بازخورد منفی</b>، TSH معمولاً برعکس هورمون‌های تیروئید حرکت می‌کند:${vs(['پرکاری تیروئید', 'T3 و T4 بالا ← TSH پایین'], ['کم‌کاری تیروئید', 'T3 و T4 پایین ← TSH بالا'])}${memo('TSH مثل «صدای فریاد هیپوفیز» است: هرچه تیروئید تنبل‌تر باشد، هیپوفیز بلندتر فریاد می‌زند (TSH بالاتر).')}`),
          M('در کم‌کاری اولیه تیروئید (مثلاً هاشیموتو)، سطح TSH چگونه است؟', ['بالا', 'پایین', 'طبیعی', 'صفر'], 'T4 پایین، هیپوفیز را تحریک می‌کند تا TSH بیشتری بسازد.'),
          L('تصویربرداری', `${tbl([['روش', 'کاربرد'], [e('RAIU (radioactive iodine uptake)'), 'تیروئید چقدر ید رادیواکتیو جذب می‌کند؟ (پرکار: زیاد)'], [e('thyroid scan'), 'تصویر تیروئید پس از ید رادیواکتیو: ندول و تومور'], [e('thyroid echography'), 'سونوگرافی: جامد یا کیستی بودن ندول']])}${pearl('ید رادیواکتیو تشخیصی دوز بسیار کمی دارد؛ ولی در بارداری انجام نمی‌شود.')}`),
          P('هر آزمایش را به کاربردش وصل کن', [['RAIU', 'میزان جذب ید'], ['thyroid scan', 'تصویر ندول و تومور'], ['thyroid echography', 'افتراق ندول جامد از کیست'], ['TFT', 'سطح T3، T4 و TSH']]),
          T('در پرکاری تیروئید ناشی از Graves، جذب ید رادیواکتیو (RAIU) معمولاً زیاد است.', true, 'درست؛ غده پرکار برای ساخت هورمون، ید زیادی می‌بلعد.'),
          M(`${e('<b>radioimmunoassay</b>')} چیست؟`, ['روش اندازه‌گیری مقدار بسیار کم هورمون با آنتی‌بادی و ماده نشاندار رادیواکتیو', 'جراحی با پرتو', 'تصویربرداری با صوت', 'درمان با ید'], 'radi/o (پرتو) + immun/o (ایمنی) + assay (سنجش) = RIA.'),
          B('اختصار آزمون جذب ید رادیواکتیو ___ است.', ['RAIU', 'RIA', 'TFT'], 'radioactive iodine uptake.'),
          M(`در جواب آزمایش آمده: «${e('TSH')} پایین، ${e('free T4')} بالا». این الگو بیشتر به نفع کدام است؟`, ['پرکاری تیروئید', 'کم‌کاری تیروئید', 'تیروئید طبیعی', 'کمبود کلسیم'], 'T4 زیاد با بازخورد منفی، TSH را پایین آورده است.'),
          N('ab:th')
        ]
      },
      {
        id: 'th9', title: 'جراحی و داروهای تیروئید', icon: '💊', items: [
          L('جراحی‌ها', `${tbl([['واژه', 'معنی'], [e('thyroidectomy'), 'برداشتن تیروئید (کامل یا بخشی)'], [e('lobectomy'), 'برداشتن یک لوب'], [e('thyrotomy'), 'برش تیروئید (یا غضروف تیروئید)'], [e('parathyroidectomy'), 'برداشتن پاراتیروئید'], [e('thyroparathyroidectomy'), 'برداشتن تیروئید و پاراتیروئیدها']])}${pearl('امروز تیروئیدکتومی با روش‌های کم‌تهاجمی و حتی رباتیک از راه زیر بغل هم انجام می‌شود تا جای زخم روی گردن نماند.')}`),
          M(`${e('<b>lobectomy</b>')} در جراحی تیروئید یعنی…`, ['برداشتن یکی از دو لوب', 'برداشتن کل تیروئید', 'برش تنگه', 'برداشتن پاراتیروئیدها'], 'lob/o (لوب) + -ectomy.'),
          L('سه راه درمان پرکاری', `${tbl([['روش', 'نمونه'], ['داروی ضدتیروئید', e('methimazole (Tapazole)') + '، ' + e('propylthiouracil')], ['ید رادیواکتیو', e('RAI، I-131') + ': «تیروئیدکتومی شیمیایی»'], ['جراحی', e('thyroidectomy')]])}${memo('سه راه، سه کلمه: «قرص، ید، تیغ».')}`),
          M('ژاسمین (بیمار گریوز) برای کنترل پرکاری داروی Tapazole گرفت. این دارو در کدام دسته است؟', ['داروی ضدتیروئید (antithyroid)', 'هورمون جایگزین تیروئید', 'کورتیکواستروئید', 'کاهنده قند خون'], 'methimazole (Tapazole) ساخت هورمون تیروئید را مهار می‌کند.'),
          T('پس از برداشتن کامل تیروئید، بیمار باید تا آخر عمر هورمون تیروئید مصرف کند.', true, 'درست؛ با levothyroxine (T4 مصنوعی).'),
          L('درمان کم‌کاری', `کم‌کاری تیروئید با <b>هورمون جایگزین</b> درمان می‌شود: ${e('<b>levothyroxine</b>')} (T4 مصنوعی) یا ${e('liothyronine')} (T3 مصنوعی).${pearl('levothyroxine معمولاً صبح ناشتا با آب خورده می‌شود؛ دوز آن را پزشک بر اساس TSH تنظیم می‌کند.')}`),
          P('هر دارو یا درمان را به کاربردش وصل کن', [['levothyroxine', 'کم‌کاری تیروئید'], ['methimazole', 'پرکاری تیروئید'], ['radioactive iodine therapy', 'تخریب بافت پرکار یا تومور'], ['calcium gluconate', 'کمبود کلسیم پس از جراحی']]),
          B('تخریب تیروئید با ید رادیواکتیو به جای جراحی را تیروئیدکتومی ___ می‌نامند.', ['شیمیایی', 'لاپاراسکوپیک', 'رباتیک'], 'chemical thyroidectomy.'),
          W('واژه‌ای بساز به معنی «برداشتن تیروئید و پاراتیروئید»', ['thyr/o', 'parathyroid/o', '-ectomy'], ['-tomy', 'thym/o', '-itis'], 'thyr/o + parathyroid/o + -ectomy = thyroparathyroidectomy.'),
          S('املای انگلیسی «لووتیروکسین» را بنویس', 'levothyroxine', 'levo + thyroxine.', 'levo…'),
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
    id: 'ad', sym: 'Ad', name: 'غدد فوق‌کلیه', short: 'فوق‌کلیه', sub: 'قشر و مدولا، کورتیزول، آلدوسترون، آدرنالین، کوشینگ، آدیسون و تومورهای فوق‌کلیه',
    color: '#E8892B', dark: '#B8651A', light: '#FDEBD7',
    levels: ['کلاهی روی کلیه', 'پرکاری قشر', 'کم‌کاری، تومور و درمان'],
    gens: EA.genIds('ad'),
    lessons: [
      /* ================= سطح ۱: کلاهی روی کلیه ================= */
      {
        id: 'ad1', title: 'دو غده در یک غده', icon: '🎩', items: [
          L('کلاه کلیه', `${e('<b>adrenal glands</b>')} دو غده مثلثی‌شکل‌اند که مثل <b>کلاه</b> روی هر کلیه نشسته‌اند:<br>${wb('ad-', 'ren/o', '-al')} ← «نزدیکِ کلیه»<br>${wb('supra-', 'ren/o', '-al')} ← ${e('suprarenal')}: «بالای کلیه»${fig('adrenal', '', 'هر فوق‌کلیه دو بخش دارد که در واقع دو غده جدا با هورمون‌های متفاوت‌اند.')}${memo('adrenal و suprarenal هر دو یک چیزند؛ یکی با ad- (نزدیک) و دیگری با supra- (بالای) ساخته شده.')}`),
          L('قشر و مدولا', `${vs(['adrenal cortex', 'قشر بیرونی (cortex = پوست درخت): هورمون‌های استروئیدی'], ['adrenal medulla', 'مرکز درونی (medulla = مغز): اپی‌نفرین و نوراپی‌نفرین'])}${pearl('در اناتومی، cortex همیشه یعنی لایه بیرونی (مثل cortex کلیه یا مغز) و medulla یعنی بخش مرکزی. این قاعده در همه اندام‌ها کار می‌کند.')}`),
          M('بخش بیرونی غده فوق‌کلیه چه نام دارد؟', ['adrenal cortex', 'adrenal medulla', 'renal pelvis', 'capsule only'], 'cortex = پوست درخت؛ لایه بیرونی.', null, F('adrenal')),
          T(`${e('epinephrine')} و ${e('adrenaline')} یک هورمون‌اند و هر دو یعنی «روی کلیه».`, true, 'درست؛ epi- (روی) + nephr/o (کلیه) یونانی است و ad- + ren/o لاتین. هیچ‌کدام کاری به کار کلیه ندارند؛ فقط جایشان را می‌گویند!'),
          P('هر واژه را به معنی‌اش وصل کن', [['adrenal', 'نزدیک کلیه'], ['suprarenal', 'بالای کلیه'], ['cortex', 'لایه بیرونی'], ['medulla', 'بخش مرکزی']]),
          M('کدام ریشه‌ها هر دو به معنی «کلیه» هستند؟', ['ren/o و nephr/o', 'aden/o و adren/o', 'cortic/o و medull/o', 'calc/o و kal/i'], 'ren/o لاتین و nephr/o یونانی است.'),
          B('نام دیگر غدد فوق‌کلیه، غدد ___ است.', ['suprarenal', 'parathyroid', 'pineal'], 'supra- (بالا) + ren/o (کلیه) + -al.'),
          W('واژه‌ای بساز به معنی «بزرگی فوق‌کلیه»', ['adren/o', '-megaly'], ['aden/o', '-itis', 'ren/o'], 'adren/o + -megaly = adrenomegaly.'),
          S('املای انگلیسی «فوق‌کلیه» (صفت) را بنویس', 'adrenal', 'ad- + ren/o + -al.', 'adre…'),
          N('r2m:ad')
        ]
      },
      {
        id: 'ad2', title: 'قشر فوق‌کلیه: نمک، قند، جنس', icon: '🧂', items: [
          L('سه خانواده هورمون', `همه هورمون‌های قشر از <b>کلسترول</b> ساخته می‌شوند و روی هم ${e('<b>corticosteroids</b>')} نام دارند:${fig('cortex-zones', '', 'نمک (مینرالوکورتیکوئید)، قند (گلوکوکورتیکوئید) و جنس (گنادوکورتیکوئید).')}${memo('قشر فوق‌کلیه سه «S» می‌سازد: Salt، Sugar، Sex.')}`),
          L('کورتیزول: هورمون استرس', `${e('<b>cortisol</b>')} (یا ${e('hydrocortisone')}) مهم‌ترین ${e('glucocorticoid')} است:<br>• قند خون را بالا می‌برد (${e('gluc/o')})؛<br>• چربی و پروتئین را برای انرژی آزاد می‌کند؛<br>• التهاب و پاسخ ایمنی را مهار می‌کند؛<br>• به بدن کمک می‌کند با استرس کنار بیاید.${pearl('چون کورتیزول ضدالتهاب قوی است، شکل دارویی‌اش (مثل prednisone) برای آسم، آرتریت روماتوئید و بیماری‌های خودایمنی تجویز می‌شود.')}`),
          M('کدام هورمون مهم‌ترین گلوکوکورتیکوئید است؟', ['cortisol', 'aldosterone', 'epinephrine', 'androgen'], 'gluco (قند) + cortic (قشر) + oid: کورتیزول قند خون را بالا می‌برد.'),
          L('آلدوسترون: هورمون نمک', `${e('<b>aldosterone</b>')} مهم‌ترین ${e('mineralocorticoid')} است و روی کلیه کار می‌کند:<br>• <b>سدیم</b> (${e('Na+')}) و آب را نگه می‌دارد؛<br>• <b>پتاسیم</b> (${e('K+')}) را دفع می‌کند؛<br>• پس حجم خون و فشار خون را بالا نگه می‌دارد.${memo('آلدوسترون «نمک‌دوست» است: سدیم را نگه می‌دارد و پتاسیم را بیرون می‌اندازد.')}`),
          T('آلدوسترون پتاسیم را در بدن نگه می‌دارد و سدیم را دفع می‌کند.', false, 'نادرست؛ برعکس است: سدیم را نگه می‌دارد و پتاسیم را دفع می‌کند.'),
          L('گنادوکورتیکوئیدها', `قشر فوق‌کلیه در زن و مرد مقدار <b>کمی</b> هورمون جنسی، بیشتر ${e('<b>androgen</b>')} (${e('andr/o')} = مرد، ${e('-gen')} = تولیدکننده)، هم می‌سازد که در رویش موی بدن و صفات ثانویه نقش دارد.`),
          P('هر خانواده را به هورمون نمونه‌اش وصل کن', [['glucocorticoids', 'cortisol'], ['mineralocorticoids', 'aldosterone'], ['gonadocorticoids', 'androgens'], ['catecholamines', 'epinephrine']]),
          M('کدام هورمون قشر فوق‌کلیه را تحریک می‌کند تا کورتیزول بسازد؟', ['ACTH از هیپوفیز', 'TSH از هیپوفیز', 'ADH از هیپوتالاموس', 'insulin از پانکراس'], 'adreno-cortico-tropic hormone.'),
          B('واژه mineralocorticoid از mineral/o به معنی ___ ساخته شده است.', ['مواد معدنی، الکترولیت‌ها', 'قند', 'مرد'], 'آلدوسترون الکترولیت‌ها (سدیم و پتاسیم) را تنظیم می‌کند.'),
          S('املای انگلیسی «آلدوسترون» را بنویس', 'aldosterone', 'ald + ster + -one (پسوند شیمیایی).', 'aldo…'),
          N('t2f:ad')
        ]
      },
      {
        id: 'ad3', title: 'مدولا: جنگ یا گریز', icon: '⚡', items: [
          L('هورمون‌های لحظه خطر', `مدولای فوق‌کلیه دو ${e('<b>catecholamine</b>')} می‌سازد:<br>• ${e('<b>epinephrine</b>')} (${e('adrenaline')})<br>• ${e('<b>norepinephrine</b>')} (${e('noradrenaline')})<br>این هورمون‌ها همراه دستگاه عصبی سمپاتیک، بدن را برای <b>جنگ یا گریز</b> (${e('fight-or-flight')}) آماده می‌کنند.${fig('stress', '', 'در چند ثانیه: قلب تندتر، فشار بالاتر، تنفس سریع‌تر، قند خون بیشتر و مردمک گشادتر.')}`),
          M('کدام هورمون مسئول پاسخ «جنگ یا گریز» است؟', ['epinephrine', 'cortisol', 'aldosterone', 'insulin'], 'اپی‌نفرین از مدولای فوق‌کلیه در چند ثانیه آزاد می‌شود.'),
          L('مقلد سمپاتیک', `${wb('sympath/o', 'mimet', '-ic')} ← ${e('<b>sympathomimetic</b>')}: «تقلیدکننده سمپاتیک»<br>${e('<b>adrenergic</b>')}: «فعال‌شده با آدرنالین»؛ داروهایی که مثل آدرنالین عمل می‌کنند را آدرنرژیک می‌نامند.${pearl('در آنافیلاکسی یا ایست قلبی، اولین دارو تزریق epinephrine است؛ همان هورمونی که بدن خودش در خطر می‌سازد.')}`),
          P('هر هورمون را به اثر اصلی‌اش وصل کن', [['epinephrine', 'افزایش ضربان قلب و قند خون'], ['norepinephrine', 'تنگ کردن رگ‌ها و افزایش فشار'], ['cortisol', 'کنار آمدن با استرس طولانی'], ['aldosterone', 'نگه‌داشتن سدیم']]),
          T('هورمون‌های مدولای فوق‌کلیه استروئید هستند.', false, 'نادرست؛ کاتکول‌آمین‌ها از اسید آمینه ساخته می‌شوند. هورمون‌های «قشر» استروئیدی‌اند.'),
          M('پیشوند nor- در norepinephrine چیست؟', ['پیشوند شیمیایی؛ شکل پایه‌تر مولکول', 'یعنی «طبیعی»', 'یعنی «بدون»', 'یعنی «زیاد»'], 'nor- در شیمی شکل ساده‌تر (پایه) یک ترکیب را نشان می‌دهد.'),
          O('رویدادهای یک ترس ناگهانی را مرتب کن', ['دیدن خطر', 'تحریک عصب سمپاتیک', 'ترشح اپی‌نفرین از مدولا', 'افزایش ضربان قلب و قند خون'], 'عصب، مدولا را روشن می‌کند؛ هورمون، بدن را آماده می‌کند.'),
          B('epinephrine و norepinephrine را روی هم ___ می‌نامند.', ['کاتکول‌آمین‌ها', 'کورتیکواستروئیدها', 'گنادوتروپین‌ها'], 'catecholamines.'),
          W('واژه‌ای بساز به معنی «اپی‌نفرین» (روی کلیه)', ['epi-', 'nephr/o', '-ine'], ['supra-', 'ren/o', '-al'], 'epi- + nephr/o + -ine = epinephrine.'),
          S('املای انگلیسی «اپی‌نفرین» را بنویس', 'epinephrine', 'epi- + nephr/o + -ine.', 'epine…'),
          N('d2t:ad')
        ]
      },

      /* ================= سطح ۲: پرکاری قشر ================= */
      {
        id: 'ad4', title: 'سندرم کوشینگ', icon: '🌕', items: [
          L('کورتیزول زیادی', `${e('<b>Cushing syndrome</b>')}: مجموعه نشانه‌های ناشی از کورتیزول زیاد، به هر علتی.${fig('cushing-signs', '', 'تصویر آموزشی با سطح صاف و مانکنی: نشانه‌های کورتیزول زیاد از سر تا پا.')}${tbl([['نشانه', 'انگلیسی'], ['صورت گرد و پُر', e('moon face')], ['چربی پشت گردن', e('buffalo hump')], ['چاقی تنه، دست و پای لاغر', e('truncal obesity')], ['خطوط کشش بنفش', e('purple striae')], ['موی زیاد', e('hirsutism')], ['قند و فشار خون بالا', e('hyperglycemia, hypertension')]])}`),
          L('سندرم یا بیماری؟', `${vs(['Cushing syndrome', 'کورتیزول زیاد به هر علت؛ شایع‌ترین علت: مصرف طولانی داروی کورتون'], ['Cushing disease', 'کورتیزول زیاد به علت تومور هیپوفیز که ACTH زیادی می‌سازد'])}${memo('هر «بیماری کوشینگ» یک «سندرم کوشینگ» است، ولی هر سندرمی بیماری نیست. «Disease» = سرچشمه در هیپوفیز.')}`),
          M('شایع‌ترین علت سندرم کوشینگ چیست؟', ['مصرف طولانی داروهای کورتیکواستروئید', 'تومور هیپوفیز', 'کمبود ید', 'تومور پانکراس'], 'کورتون‌درمانی طولانی (مثلاً برای آسم یا آرتریت) شایع‌ترین علت است.'),
          M('خانمی ۵۶ ساله با چاقی تنه، صورت گرد، موی زیاد صورت، ورم پاها و پوکی استخوان مراجعه کرده است. سطح کورتیزول بالاست و CT یک توده در قشر فوق‌کلیه راست نشان می‌دهد. تشخیص؟', ['Cushing syndrome ناشی از آدنوم فوق‌کلیه', 'Addison disease', 'pheochromocytoma', 'Graves disease'], 'کورتیزول زیاد + توده قشر فوق‌کلیه = سندرم کوشینگ با منشأ فوق‌کلیه. درمان: adrenalectomy.', [['سن', '۵۶ ساله'], ['نشانه‌ها', 'چاقی، moon face، hirsutism، edema'], ['کورتیزول', 'بالا'], ['CT', 'adenoma در قشر فوق‌کلیه راست']]),
          T('در سندرم کوشینگ، دست و پاها معمولاً لاغرند ولی تنه چاق است.', true, 'درست؛ کورتیزول چربی را به تنه و صورت می‌برد و عضلات اندام‌ها را تحلیل می‌دهد.'),
          L('در معاینه بیمار', `${fig('cushing-face', 'صورت ماه‌گون و قرمز با موی زیاد صورت', 'در معاینه: صورت گرد و پُر، گونه‌های سرخ و موی زیاد چانه و لب بالا.')}${pearl('بیمار با کوشینگ ناشی از دارو نباید داروی کورتون را ناگهان قطع کند؛ چون غده فوق‌کلیه‌اش «خوابیده» و ممکن است دچار نارسایی حاد فوق‌کلیه شود. دارو باید به‌تدریج کم شود.')}`),
          P('هر نشانه را به معنی‌اش وصل کن', [['moon face', 'صورت ماه‌گون'], ['buffalo hump', 'کوهان چربی پشت گردن'], ['striae', 'خطوط کشش پوست'], ['hirsutism', 'پرمویی']]),
          B('کوشینگ با منشأ تومور هیپوفیز، ___ کوشینگ نام دارد.', ['بیماری', 'سندرم', 'طوفان'], 'Cushing disease.'),
          S('املای انگلیسی «پرمویی» را بنویس', 'hirsutism', 'hirsut (پرمو) + -ism.', 'hirsu…'),
          N('f2t:ad')
        ]
      },
      {
        id: 'ad5', title: 'آلدوسترون و الکترولیت‌ها', icon: '⚖️', items: [
          L('الکترولیت‌ها', `${e('<b>electrolytes</b>')}: نمک‌های معدنی در خون و بافت‌ها که جریان برق را هدایت می‌کنند: سدیم، پتاسیم، کلسیم.${tbl([['ریشه', 'ماده', 'نماد'], [e('natr/o'), 'سدیم', e('Na+')], [e('kal/i'), 'پتاسیم', e('K+')], [e('calc/o'), 'کلسیم', e('Ca')]])}${memo('Na = natrium، K = kalium: نماد شیمیایی، ریشه پزشکی را لو می‌دهد.')}`),
          L('آلدوسترون زیاد', `${e('<b>hyperaldosteronism</b>')} (${e('aldosteronism')}): آلدوسترون زیاد ← سدیم و آب در بدن می‌مانند و پتاسیم دفع می‌شود:<br>• ${e('hypertension')} (فشار خون بالا)<br>• ${e('hypokalemia')} (پتاسیم پایین): ضعف و گرفتگی عضلات<br>اگر علتش یک تومور فوق‌کلیه باشد، ${e('<b>Conn syndrome</b>')} نام دارد.`),
          M('کدام یافته در سندرم کان (Conn syndrome) انتظار می‌رود؟', ['فشار خون بالا و پتاسیم پایین', 'فشار خون پایین و پتاسیم بالا', 'قند خون پایین', 'کلسیم خون بالا'], 'آلدوسترون زیاد: سدیم و آب می‌ماند، پتاسیم دفع می‌شود.'),
          L('واژه‌سازی با الکترولیت‌ها', `${tbl([['واژه', 'معنی'], [e('hypernatremia'), 'سدیم خون بالا'], [e('hyponatremia'), 'سدیم خون پایین'], [e('hyperkalemia'), 'پتاسیم خون بالا'], [e('hypokalemia'), 'پتاسیم خون پایین']])}${pearl('پتاسیم برای قلب حیاتی است؛ هیپرکالمی شدید می‌تواند ریتم قلب را مختل کند. در بیماری آدیسون (کمبود آلدوسترون) پتاسیم بالا می‌رود.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['hyperkalemia', 'پتاسیم خون بالا'], ['hypokalemia', 'پتاسیم خون پایین'], ['hyponatremia', 'سدیم خون پایین'], ['hypernatremia', 'سدیم خون بالا']]),
          T('در کمبود آلدوسترون، پتاسیم خون بالا می‌رود.', true, 'درست؛ بدون آلدوسترون کلیه پتاسیم را دفع نمی‌کند ← hyperkalemia (مثلاً در آدیسون).'),
          M(`${e('<b>serum potassium</b>')} در ارزیابی فوق‌کلیه برای چه اندازه‌گیری می‌شود؟`, ['برای یافتن تومورهایی که پتاسیم زیادی دفع می‌کنند', 'برای سنجش ید', 'برای سنجش قند', 'برای سنجش کلسیم'], 'تومور سازنده آلدوسترون ← پتاسیم سرم پایین.'),
          B('kal/i یعنی ___ و natr/o یعنی سدیم.', ['پتاسیم', 'کلسیم', 'قند'], 'kalium = پتاسیم.'),
          W('واژه‌ای بساز به معنی «پتاسیم خون پایین»', ['hypo-', 'kal/i', '-emia'], ['hyper-', 'natr/o', 'calc/o'], 'hypo- + kal/i + -emia = hypokalemia.'),
          S('املای انگلیسی «الکترولیت‌ها» را بنویس', 'electrolytes', 'electr/o + lyt + -es.', 'electro…'),
          N('wb:ad')
        ]
      },
      {
        id: 'ad6', title: 'آندروژن‌ها و صفات جنسی', icon: '🧔', items: [
          L('آندروژن زیاد', `اگر قشر فوق‌کلیه آندروژن زیادی بسازد:<br>• ${e('<b>hirsutism</b>')}: موی زیاد با الگوی مردانه در زن (صورت، سینه)<br>• ${e('<b>virilism</b>')} (${e('virilization')}): پیدا شدن صفات مردانه (صدای بم، عضله‌های درشت، موی صورت) در زن، یا بلوغ زودرس در پسر.<br>${e('viril/o')} = مردانه؛ ${e('hirsut/o')} = پرمو.${memo('viril را با «virile» (مردانه، قوی) و hirsute را با «hairy» به خاطر بسپار.')}`),
          L('سندرم‌های مادرزادی', `${e('<b>adrenogenital syndrome</b>')}: ساخت زیاد آندروژن فوق‌کلیه که باعث «مردانه شدن» می‌شود.<br>شایع‌ترین علت مادرزادی‌اش ${e('<b>congenital adrenal hyperplasia</b>')} (${e('CAH')}) است: کمبود ارثی یک آنزیم ← کورتیزول کم، آندروژن زیاد.${pearl('در نوزاد دختر با CAH ممکن است دستگاه تناسلی خارجی مبهم باشد؛ برای همین در برخی کشورها غربالگری نوزادان شامل CAH هم هست.')}`),
          M(`${e('<b>virilism</b>')} یعنی…`, ['پیدا شدن صفات مردانه در زن یا بلوغ زودرس در پسر', 'بزرگی پستان در مرد', 'قطع قاعدگی', 'کمبود موی بدن'], 'viril/o = مردانه؛ علت: آندروژن زیاد.'),
          L('برعکس: زنانه‌شدن', `${e('<b>adrenal feminization</b>')}: پیدا شدن صفات زنانه در مرد به علت استروژن زیاد فوق‌کلیه.<br>یکی از نشانه‌هایش ${e('<b>gynecomastia</b>')} است: رشد بافت پستان در مرد.<br>${wb('gynec/o', 'mast/o', '-ia')} ← «حالتِ پستانِ زنانه»${fig('gynecomastia', 'بزرگی پستان در مرد', 'ژنیکوماستی ممکن است از عدم تعادل هورمونی، دارو یا بیماری کبد هم باشد.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['hirsutism', 'موی زیاد با الگوی مردانه'], ['virilism', 'صفات مردانه در زن'], ['gynecomastia', 'رشد پستان در مرد'], ['adrenogenital syndrome', 'آندروژن زیاد فوق‌کلیه']]),
          T(`در ${e('gynecomastia')}، ریشه mast/o یعنی پستان.`, true, 'درست؛ gynec/o (زن) + mast/o (پستان) + -ia (حالت).'),
          M('کدام مورد در اختصار CAH درست است؟', ['congenital adrenal hyperplasia', 'chronic adrenal hypofunction', 'cortisol and aldosterone hormone', 'calcium and hormone'], 'هایپرپلازی مادرزادی فوق‌کلیه.'),
          B('رشد بافت پستان در مرد ___ نام دارد.', ['gynecomastia', 'galactorrhea', 'hirsutism'], 'gynec/o + mast/o + -ia.'),
          W('واژه‌ای بساز به معنی «بزرگی پستان در مرد» (حالت پستان زنانه)', ['gynec/o', 'mast/o', '-ia'], ['andr/o', '-gen', '-itis'], 'gynec/o + mast/o + -ia = gynecomastia.'),
          S('املای انگلیسی «مردانه‌شدن» را بنویس', ['virilism', 'virilization'], 'viril/o + -ism.', 'viri…'),
          N('m2r:ad')
        ]
      },

      /* ================= سطح ۳: کم‌کاری، تومور و درمان ================= */
      {
        id: 'ad7', title: 'بیماری آدیسون', icon: '🫥', items: [
          L('کورتیزول و آلدوسترون کم', `${e('<b>Addison disease</b>')} (${e('adrenal insufficiency')} یا ${e('hypoadrenalism')}): کم‌کاری قشر فوق‌کلیه، بیشتر به علت تخریب <b>خودایمنی</b>.${fig('cushing-addison', '', 'کوشینگ و آدیسون دو قطب مخالف کورتیزول‌اند.')}${tbl([['کمبودِ', 'نتیجه'], ['کورتیزول', 'ضعف، خستگی، کاهش وزن، قند خون پایین'], ['آلدوسترون', 'فشار خون پایین، سدیم پایین، پتاسیم بالا، کم‌آبی'], ['(ACTH بالا)', 'تیرگی برنزی پوست: hyperpigmentation']])}`),
          M('کدام ترکیب بیشتر به نفع بیماری آدیسون است؟', ['ضعف، فشار خون پایین، پوست برنزی و پتاسیم بالا', 'چاقی تنه، صورت ماه‌گون و فشار بالا', 'بیرون‌زدگی چشم و گواتر', 'پرادراری و قند ادرار'], 'کمبود کورتیزول و آلدوسترون با تیرگی پوست.', null, F('cushing-addison')),
          T('در بیماری آدیسون، پوست تیره می‌شود چون هیپوفیز ACTH زیادی می‌سازد.', true, 'درست؛ ACTH و MSH از یک مولکول مادر ساخته می‌شوند و ACTH زیاد ملانوسیت‌ها را هم تحریک می‌کند.'),
          L('درمان', `هورمون‌های ازدست‌رفته جایگزین می‌شوند: ${e('hydrocortisone')} (یا cortisone) به جای کورتیزول و یک مینرالوکورتیکوئید به جای آلدوسترون، همراه با نمک کافی.${pearl('بیمار آدیسونی در استرس (عفونت، جراحی، تصادف) به دوز بیشتری کورتون نیاز دارد؛ وگرنه ممکن است دچار «بحران آدیسونی» با افت شدید فشار شود. همیشه کارت هشدار پزشکی همراهش باشد.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['hypoadrenalism', 'کم‌کاری فوق‌کلیه'], ['hyperadrenalism', 'پرکاری فوق‌کلیه'], ['adrenal insufficiency', 'نارسایی فوق‌کلیه'], ['hyperpigmentation', 'تیرگی پوست']]),
          M('در بیماری آدیسون، علاوه بر کورتیزول، کمبود کدام هورمون فشار خون را پایین می‌آورد؟', ['aldosterone', 'epinephrine', 'insulin', 'calcitonin'], 'بدون آلدوسترون، سدیم و آب از دست می‌روند ← کم‌آبی و افت فشار.'),
          O('پیامدهای کمبود آلدوسترون را مرتب کن', ['آلدوسترون کم', 'دفع سدیم و آب از کلیه', 'کاهش حجم خون', 'افت فشار خون و سرگیجه'], 'زنجیره نمک ← آب ← حجم ← فشار.'),
          B('کم‌کاری قشر فوق‌کلیه به نام کاشفش، بیماری ___ نامیده می‌شود.', ['آدیسون', 'کوشینگ', 'گریوز'], 'Thomas Addison، پزشک انگلیسی.'),
          W('واژه‌ای بساز به معنی «کم‌کاری فوق‌کلیه»', ['hypo-', 'adrenal/o', '-ism'], ['hyper-', 'aden/o', '-itis'], 'hypo- + adrenal/o + -ism = hypoadrenalism.'),
          S('املای انگلیسی «Addison» را بنویس', 'Addison', 'Addison disease؛ با دو d.', 'Add…'),
          N('t2f:ad')
        ]
      },
      {
        id: 'ad8', title: 'تومورها و بیماری‌های فوق‌کلیه', icon: '🎯', items: [
          L('فئوکروموسیتوما', `${e('<b>pheochromocytoma</b>')}: تومور معمولاً خوش‌خیم <b>مدولای</b> فوق‌کلیه که اپی‌نفرین و نوراپی‌نفرین زیادی می‌سازد.<br>${wb('phe/o', 'chrom/o', 'cyt/o', '-oma')} ← «تومورِ سلول‌هایی که رنگ تیره می‌گیرند»<br>نشانه‌ها حمله‌ای‌اند: <b>فشار خون بسیار بالا</b>، سردرد شدید، تپش قلب و تعریق.${memo('سه «P» فئو: Pressure (فشار)، Pain (سردرد)، Perspiration (تعریق) + Palpitation (تپش).')}`),
          M('مردی جوان حمله‌های ناگهانی سردرد شدید، تعریق، تپش قلب و فشار خون ۲۲۰ دارد. کدام تومور مطرح است؟', ['pheochromocytoma', 'insulinoma', 'thymoma', 'craniopharyngioma'], 'تومور مدولای فوق‌کلیه با کاتکول‌آمین زیاد.'),
          T('فئوکروموسیتوما از قشر فوق‌کلیه منشأ می‌گیرد و آلدوسترون زیادی می‌سازد.', false, 'نادرست؛ از «مدولا» است و کاتکول‌آمین می‌سازد. تومور سازنده آلدوسترون، Conn syndrome را ایجاد می‌کند.'),
          L('واژه‌های عمومی فوق‌کلیه', `${tbl([['واژه', 'معنی'], [e('adrenomegaly'), 'بزرگی فوق‌کلیه'], [e('adrenalitis'), 'التهاب فوق‌کلیه'], [e('adrenopathy'), 'هر بیماری فوق‌کلیه (adrenalopathy)'], [e('hyperadrenalism'), 'پرکاری فوق‌کلیه، اغلب از تومور'], [e('adenocarcinoma'), 'سرطان غده‌ای']])}`),
          P('هر واژه را به معنی‌اش وصل کن', [['adrenomegaly', 'بزرگی فوق‌کلیه'], ['adrenalitis', 'التهاب فوق‌کلیه'], ['adrenopathy', 'بیماری فوق‌کلیه'], ['pheochromocytoma', 'تومور مدولا']]),
          M(`پسوند ${e('-oma')} در pheochromocytoma یعنی…`, ['تومور', 'التهاب', 'بزرگی', 'بیماری'], '-oma = tumor.'),
          B('تومور مدولای فوق‌کلیه که فشار خون را خیلی بالا می‌برد ___ نام دارد.', ['pheochromocytoma', 'insulinoma', 'adenoma of pituitary'], 'phe/o + chrom/o + cyt/o + -oma.'),
          O(`قطعه‌های ${e('pheochromocytoma')} را مرتب کن`, ['phe/o', 'chrom/o', 'cyt/o', '-oma'], 'تیره + رنگ + سلول + تومور.'),
          W('واژه‌ای بساز به معنی «التهاب فوق‌کلیه»', ['adrenal/o', '-itis'], ['aden/o', '-oma', 'ren/o'], 'adrenal/o + -itis = adrenalitis.'),
          S('املای انگلیسی «فئوکروموسیتوما» را بنویس', 'pheochromocytoma', 'pheo + chromo + cyt + oma.', 'pheo…'),
          N('sp:ad')
        ]
      },
      {
        id: 'ad9', title: 'آزمایش، جراحی و داروها', icon: '🏥', items: [
          L('آزمایش‌های فوق‌کلیه', `${tbl([['آزمایش', 'کاربرد'], [e('serum cortisol'), 'کورتیزول در خون یا بزاق: کوشینگ یا آدیسون'], [e('ACTH'), 'افتراق منشأ هیپوفیزی از فوق‌کلیه‌ای'], [e('serum potassium'), 'تومورهای دفع‌کننده پتاسیم'], ['کاتکول‌آمین ادرار', 'فئوکروموسیتوما'], [e('CT / MRI'), 'یافتن توده فوق‌کلیه']])}`),
          M('برای افتراق «بیماری کوشینگ» (هیپوفیز) از «تومور فوق‌کلیه»، کدام هورمون اندازه گرفته می‌شود؟', ['ACTH', 'TSH', 'insulin', 'PTH'], 'در بیماری کوشینگ ACTH بالاست؛ در تومور فوق‌کلیه ACTH پایین است (بازخورد منفی).'),
          L('جراحی', `${e('<b>adrenalectomy</b>')}: برداشتن یک یا هر دو فوق‌کلیه.<br>${e('<b>laparoscopic adrenalectomy</b>')}: از راه چند برش کوچک شکم و با دوربین (${e('lapar/o')} = شکم، ${e('-scopic')} = دیدن).${pearl('پس از برداشتن هر دو فوق‌کلیه، بیمار باید تا آخر عمر کورتیزول و مینرالوکورتیکوئید جایگزین بگیرد.')}`),
          M(`${e('<b>laparoscopic</b>')} یعنی…`, ['مربوط به دیدن درون شکم با دوربین', 'برش بزرگ قفسه سینه', 'تصویربرداری با پرتو', 'برداشتن کلیه'], 'lapar/o (شکم) + -scopic (معاینه با دیدن).'),
          L('داروهای کورتیکواستروئید', `${e('<b>corticosteroids</b>')} مثل ${e('prednisone')} و ${e('hydrocortisone')}:<br>• درمان جایگزین در آدیسون؛<br>• ضدالتهاب قوی در آسم، آرتریت روماتوئید و بیماری‌های خودایمنی.<br>عوارض مصرف طولانی: علائم کوشینگ، ${e('osteoporosis')} (پوکی استخوان)، قند خون بالا و ضعف ایمنی.${memo('کورتون مثل «آتش‌نشان قوی» است: آتش التهاب را خاموش می‌کند، ولی اگر مدام در خانه باشد، خانه را خیس و خراب می‌کند!')}`),
          P('هر مورد را به کاربردش وصل کن', [['prednisone', 'ضدالتهاب قوی'], ['hydrocortisone', 'جایگزین کورتیزول در آدیسون'], ['adrenalectomy', 'برداشتن فوق‌کلیه'], ['serum cortisol', 'سنجش کورتیزول']]),
          T('مصرف طولانی کورتیکواستروئید می‌تواند پوکی استخوان ایجاد کند.', true, 'درست؛ یکی از عوارض مهم کورتون‌درمانی طولانی.'),
          B('برداشتن غده فوق‌کلیه با دوربین از راه شکم، adrenalectomy ___ نام دارد.', ['لاپاراسکوپیک', 'شیمیایی', 'ترانس‌اسفنوئیدال'], 'laparoscopic adrenalectomy.'),
          W('واژه‌ای بساز به معنی «برداشتن فوق‌کلیه»', ['adrenal/o', '-ectomy'], ['-tomy', 'nephr/o', '-scopic'], 'adrenal/o + -ectomy = adrenalectomy.'),
          S('املای انگلیسی «کورتیکواستروئیدها» را بنویس', 'corticosteroids', 'cortic/o + steroid + -s.', 'cortico…'),
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
    id: 'pa', sym: 'Pa', name: 'پانکراس و دیابت', short: 'دیابت', sub: 'جزایر لانگرهانس، انسولین و گلوکاگون، انواع دیابت، آزمایش‌های قند، عوارض و درمان',
    color: '#1E88E5', dark: '#1565C0', light: '#DDEEFD',
    levels: ['جزایر شیرین', 'دیابت شیرین', 'عوارض و درمان'],
    gens: EA.genIds('pa'),
    lessons: [
      /* ================= سطح ۱: جزایر شیرین ================= */
      {
        id: 'pa1', title: 'پانکراس دوکاره', icon: '🏝️', items: [
          L('هم گوارش، هم هورمون', `${e('<b>pancreas</b>')} عضوی دراز پشت معده است (از یونانی «همه‌اش گوشت»):${vs(['بخش برون‌ریز', 'آنزیم‌های گوارشی را از مجرا به دوازدهه می‌فرستد'], ['بخش درون‌ریز', 'جزایر لانگرهانس: انسولین و گلوکاگون را به خون می‌ریزند'])}${fig('pancreas', '', 'جزایر لانگرهانس مثل جزیره‌هایی کوچک میان دریای سلول‌های گوارشی‌اند.')}`),
          L('جزایر لانگرهانس', `${e('<b>islets of Langerhans</b>')} (${e('pancreatic islets')}) خوشه‌های کوچک سلول درون‌ریز در پانکراس‌اند که پل لانگرهانس، آسیب‌شناس آلمانی، آن‌ها را کشف کرد.<br>${e('insul/o')} = جزیره ← ${e('<b>insulin</b>')} هورمون «جزیره‌ای» است.${tbl([['سلول', 'هورمون', 'اثر بر قند خون'], [e('beta (β) cells'), 'insulin', 'پایین می‌آورد ⬇'], [e('alpha (α) cells'), 'glucagon', 'بالا می‌برد ⬆']])}${fig('islet-histology', '', 'در برش میکروسکوپی، جزیره کم‌رنگ میان سلول‌های گوارشی دیده می‌شود.')}${memo('B برای Beta و هم برای «Bring down»: سلول بتا قند را پایین می‌آورد. A برای Alpha و «Add»: سلول آلفا قند اضافه می‌کند.')}`),
          M('انسولین در کدام سلول‌ها ساخته می‌شود؟', ['سلول‌های بتای جزایر لانگرهانس', 'سلول‌های آلفای جزایر', 'سلول‌های گوارشی پانکراس', 'سلول‌های کبد'], 'β cells ← insulin؛ α cells ← glucagon.', null, F('pancreas')),
          T('پانکراس تنها عضوی است که هم کار برون‌ریز و هم کار درون‌ریز دارد.', false, 'نادرست؛ تخمدان‌ها، بیضه‌ها و حتی کلیه و قلب هم کار دوگانه دارند. پانکراس مشهورترین نمونه است.'),
          P('هر بخش را به کارش وصل کن', [['beta cells', 'ساخت انسولین'], ['alpha cells', 'ساخت گلوکاگون'], ['pancreatic duct', 'انتقال آنزیم گوارشی'], ['islets of Langerhans', 'بخش درون‌ریز پانکراس']]),
          M(`${e('<b>insular</b>')} یعنی…`, ['مربوط به جزایر پانکراس', 'التهاب پانکراس', 'مقاوم به انسولین', 'کمبود انسولین'], 'insul/o (جزیره) + -ar (مربوط به).'),
          B('ریشه insul/o در insulin یعنی ___.', ['جزیره', 'قند', 'غده'], 'insula = جزیره؛ چون از جزایر لانگرهانس ترشح می‌شود.'),
          W('واژه‌ای بساز به معنی «مربوط به پانکراس»', ['pancreat/o', '-ic'], ['-itis', 'insul/o', '-oma'], 'pancreat/o + -ic = pancreatic.'),
          S('املای انگلیسی «پانکراس» را بنویس', 'pancreas', 'pancreas؛ با pancrease (نام یک دارو) اشتباه نکن.', 'pancr…'),
          N('r2m:pa')
        ]
      },
      {
        id: 'pa2', title: 'الاکلنگ قند: انسولین و گلوکاگون', icon: '⚖️', items: [
          L('دو هورمون متضاد', `${fig('glucose-balance', '', 'پس از غذا انسولین بالا می‌رود؛ بین وعده‌ها و هنگام ورزش، گلوکاگون.')}${vs(['insulin', 'گلوکز را وارد سلول‌ها می‌کند و قند خون را پایین می‌آورد؛ گلوکز اضافه را گلیکوژن می‌کند'], ['glucagon', 'به کبد دستور می‌دهد گلیکوژن را بشکند و گلوکز آزاد کند؛ قند خون را بالا می‌برد'])}`),
          M('بلافاصله پس از یک وعده غذای پرکربوهیدرات، کدام هورمون بیشتر ترشح می‌شود؟', ['insulin', 'glucagon', 'cortisol', 'epinephrine'], 'قند خون بالا ← انسولین ← ورود قند به سلول‌ها.'),
          L('انسولین: کلید سلول', `انسولین مثل <b>کلیدی</b> است که در سلول را باز می‌کند تا گلوکز وارد شود و انرژی بسازد. بدون انسولین، گلوکز پشت در سلول در خون جمع می‌شود و سلول‌ها با وجود قند زیاد خون «گرسنه» می‌مانند.${memo('دیابت شیرین یعنی «گرسنگی در میان فراوانی»: خون پر از قند، سلول‌ها بی‌قند.')}`),
          L('واژه‌های فرایند قند', `${tbl([['واژه', 'معنی', 'هورمون'], [e('glycogenesis'), 'ساخت گلیکوژن از گلوکز', 'insulin'], [e('glycogenolysis'), 'شکستن گلیکوژن به گلوکز', 'glucagon'], [e('gluconeogenesis'), 'ساخت گلوکز تازه از پروتئین و چربی', 'glucagon، cortisol'], [e('glycolysis'), 'شکستن گلوکز برای انرژی', 'درون سلول']])}${pearl('در ناشتایی طولانی، کبد اول گلیکوژن را می‌شکند (glycogenolysis) و وقتی ذخیره تمام شد، از پروتئین و چربی قند تازه می‌سازد (gluconeogenesis).')}`),
          P('هر فرایند را به معنی‌اش وصل کن', [['glycogenesis', 'ساخت گلیکوژن'], ['glycogenolysis', 'شکستن گلیکوژن'], ['gluconeogenesis', 'ساخت گلوکز تازه'], ['glycolysis', 'شکستن گلوکز']]),
          T('گلوکاگون قند خون را پایین می‌آورد.', false, 'نادرست؛ گلوکاگون قند خون را «بالا» می‌برد. پایین آوردن کار انسولین است.'),
          O('پس از خوردن یک وعده غذا، رویدادها را مرتب کن', ['بالا رفتن قند خون', 'ترشح انسولین از سلول‌های بتا', 'ورود گلوکز به سلول‌ها', 'ذخیره گلوکز اضافه به شکل گلیکوژن در کبد'], 'انسولین قند خون را به سلول‌ها و انبار می‌فرستد.'),
          M(`${e('<b>gluconeogenesis</b>')} یعنی…`, ['ساخت گلوکز تازه از منابع غیرقندی', 'ساخت گلیکوژن', 'قند در ادرار', 'شکستن گلوکز'], 'gluc/o (قند) + neo (تازه) + -genesis (ساخت).'),
          W('واژه‌ای بساز به معنی «شکستن گلیکوژن»', ['glycogen/o', '-lysis'], ['-genesis', 'gluc/o', '-uria'], 'glycogen/o + -lysis = glycogenolysis.'),
          S('املای انگلیسی «گلیکوژن» را بنویس', 'glycogen', 'glyc/o + -gen.', 'glyco…'),
          N('t2f:pa')
        ]
      },
      {
        id: 'pa3', title: 'واژه‌های قند', icon: '🍬', items: [
          L('دو ریشه قند', `${e('gluc/o')} و ${e('glyc/o')} (و ${e('glycos/o')}) هر دو یعنی <b>قند</b>:<br>• ${e('hyperglycemia')}: قند خون بالا<br>• ${e('hypoglycemia')}: قند خون پایین<br>• ${e('glycosuria')} = ${e('glucosuria')}: قند در ادرار${memo('glyc/o و gluc/o از یونانی glykys (شیرین) آمده‌اند؛ همان ریشه‌ای که در «گلیسیرین» هم هست.')}`),
          M(`${e('<b>hyperglycemia</b>')} یعنی…`, ['قند خون بالا', 'قند خون پایین', 'قند در ادرار', 'انسولین بالا'], 'hyper- + glyc/o + -emia.'),
          L('قند خون پایین', `${e('<b>hypoglycemia</b>')}: قند خون کمتر از حد طبیعی. مغز بیش از همه آسیب می‌بیند:<br>لرزش، تعریق سرد (${e('diaphoresis')})، گرسنگی، تپش قلب، گیجی و در موارد شدید تشنج و کما.<br>شایع‌ترین علت: دوز زیاد انسولین یا داروی خوراکی در بیمار دیابتی.${pearl('قانون ۱۵: بیمار هوشیار با قند پایین ۱۵ گرم قند ساده (مثلاً نصف لیوان آب‌میوه) بخورد و ۱۵ دقیقه بعد دوباره قندش را اندازه بگیرد.')}`),
          M('بیمار دیابتی که انسولین تزریق کرده و ناهار نخورده، دچار لرزش، تعریق سرد و گیجی شده است. چه اتفاقی افتاده؟', ['hypoglycemia (افت قند)', 'hyperglycemia', 'ketoacidosis', 'diabetes insipidus'], 'انسولین بدون غذا ← افت قند. درمان فوری: قند خوراکی یا گلوکز.'),
          P('هر واژه را به معنی‌اش وصل کن', [['hyperglycemia', 'قند خون بالا'], ['hypoglycemia', 'قند خون پایین'], ['glycosuria', 'قند در ادرار'], ['diaphoresis', 'تعریق شدید']]),
          L('پس از غذا', `${wb('post-', 'prandial')} ← ${e('<b>postprandial</b>')}: «پس از وعده غذا»<br>${e('postprandial blood sugar')}: قند خون حدود ۲ ساعت پس از غذا.<br>${e('-emic')} یعنی «مربوط به وضعیت خون»: ${e('hypoglycemic')} داروی کاهنده قند است.`),
          T(`${e('glycosuria')} و ${e('glucosuria')} یک معنی دارند.`, true, 'درست؛ هر دو یعنی وجود قند (گلوکز) در ادرار.'),
          B('postprandial یعنی ___ غذا.', ['پس از', 'پیش از', 'بدون'], 'post- (پس از) + -prandial (وعده غذا).'),
          W('واژه‌ای بساز به معنی «قند خون پایین»', ['hypo-', 'glyc/o', '-emia'], ['hyper-', '-uria', 'kal/i'], 'hypo- + glyc/o + -emia = hypoglycemia.'),
          S('املای انگلیسی «قند در ادرار» را بنویس', ['glycosuria', 'glucosuria'], 'glycos/o + -uria.', 'glyco…'),
          N('wb:pa')
        ]
      },

      /* ================= سطح ۲: دیابت شیرین ================= */
      {
        id: 'pa4', title: 'دیابت شیرین چیست؟', icon: '🍯', items: [
          L('ادرار عسلی', `${e('<b>diabetes mellitus</b>')} (${e('DM')}): اختلال سوخت‌وساز قند به علت <b>کمبود انسولین</b> یا <b>مقاومت سلول‌ها به انسولین</b>؛ نتیجه: ${e('hyperglycemia')}.<br>${e('diabetes')} = سیفون (ادرار زیاد)؛ ${e('mellitus')} = عسلی، شیرین.${pearl('پزشکان قدیم برای تشخیص دیابت، ادرار بیمار را می‌چشیدند! امروز با نوار ادرار و قندسنج.')}`),
          L('نشانه‌های کلاسیک', `${fig('three-p', '', 'سه P دیابت: polyuria، polydipsia، polyphagia؛ همراه با کاهش وزن و خستگی.')}زنجیره: قند خون زیاد ← قند به ادرار می‌ریزد (${e('glycosuria')}) ← آب هم با خودش می‌برد (${e('polyuria')}) ← کم‌آبی و تشنگی (${e('polydipsia')}) ← سلول‌های گرسنه (${e('polyphagia')}) و کاهش وزن.`),
          M('کدام نشانه جزو «سه P» دیابت نیست؟', ['polycythemia', 'polyuria', 'polydipsia', 'polyphagia'], 'polycythemia یعنی گلبول قرمز زیاد؛ ربطی به دیابت ندارد.', null, F('three-p')),
          O('زنجیره نشانه‌های دیابت را مرتب کن', ['قند خون بالا (hyperglycemia)', 'ریزش قند به ادرار (glycosuria)', 'ادرار زیاد (polyuria)', 'کم‌آبی و تشنگی زیاد (polydipsia)'], 'قند آب را با خود از کلیه بیرون می‌کشد.'),
          M('دیان، خانمی ۴۵ ساله، از خستگی غیرعادی، تشنگی و ادرار زیاد شاکی است. آزمایش قند خون بالایی نشان می‌دهد. منشأ احتمالی مشکل کدام عضو است؟', ['پانکراس', 'تیروئید', 'هیپوفیز خلفی', 'فوق‌کلیه'], 'قند بالا + سه P ← دیابت شیرین ← انسولین پانکراس.', [['بیمار', 'Diane، ۴۵ ساله'], ['شکایت', 'خستگی، polydipsia، polyuria'], ['آزمایش', 'قند خون بالا']]),
          T('در دیابت شیرین، سلول‌ها با وجود قند زیاد خون، دچار کمبود انرژی‌اند.', true, 'درست؛ گلوکز بدون انسولین (یا با مقاومت به آن) وارد سلول نمی‌شود.'),
          P('هر نشانه را به معنی‌اش وصل کن', [['polyuria', 'ادرار زیاد'], ['polydipsia', 'تشنگی زیاد'], ['polyphagia', 'گرسنگی زیاد'], ['glycosuria', 'قند در ادرار']]),
          B('واژه mellitus یعنی ___.', ['عسلی، شیرین', 'بی‌مزه', 'تلخ'], 'ادرار بیمار قند دارد؛ insipidus برعکس یعنی بی‌مزه.'),
          W('واژه‌ای بساز به معنی «گرسنگی زیاد»', ['poly-', '-phagia'], ['-dipsia', '-uria', 'hyper-'], 'poly- + -phagia = polyphagia.'),
          S('املای انگلیسی «mellitus» را بنویس', 'mellitus', 'mellitus؛ دو l و یک t.', 'mell…'),
          N('f2t:pa')
        ]
      },
      {
        id: 'pa5', title: 'انواع دیابت', icon: '🔑', items: [
          L('نوع ۱ و نوع ۲', `${fig('dm-types', '', 'نوع ۱: کلید (انسولین) وجود ندارد. نوع ۲: کلید هست، ولی قفل (گیرنده) خوب باز نمی‌شود.')}${tbl([['', 'نوع ۱ (T1DM)', 'نوع ۲ (T2DM)'], ['علت', 'تخریب خودایمنی سلول‌های بتا', 'مقاومت به انسولین'], ['سن شروع', 'کودکی و نوجوانی، ناگهانی', 'بزرگسالی، تدریجی'], ['وزن', 'معمولاً لاغر', 'معمولاً چاق'], ['درمان', 'انسولین روزانه', 'رژیم، ورزش، داروی خوراکی؛ گاهی انسولین'], ['نام قدیمی', e('IDDM'), e('NIDDM')]])}`),
          M('کدام ویژگی به دیابت نوع ۱ تعلق دارد؟', ['تخریب خودایمنی سلول‌های بتا و نیاز همیشگی به انسولین', 'مقاومت به انسولین در فرد چاق', 'شروع تدریجی در میانسالی', 'درمان فقط با رژیم غذایی'], 'T1DM = insulin-dependent؛ انسولین تقریباً صفر است.'),
          L('دیابت بارداری و پیش‌دیابت', `${e('<b>gestational diabetes mellitus</b>')} (${e('GDM')}): عدم تحمل قند که اولین بار در بارداری ظاهر می‌شود و معمولاً پس از زایمان برطرف می‌شود، ولی خطر دیابت نوع ۲ را در آینده بیشتر می‌کند. نوزاد مادر دیابتی ممکن است درشت باشد: ${e('macrosomia')}.<br>${e('<b>metabolic syndrome</b>')} (سندرم X): مقاومت به انسولین + چاقی شکمی + چربی خون بالا + فشار خون بالا.<br>${e('IFG')} و ${e('IGT')}: مرحله پیش‌دیابت.`),
          P('هر اختصار را به معنی‌اش وصل کن', [['T1DM', 'دیابت نوع ۱'], ['T2DM', 'دیابت نوع ۲'], ['GDM', 'دیابت بارداری'], ['IGT', 'اختلال تحمل گلوکز'], ['IDDM', 'دیابت وابسته به انسولین']]),
          T('حدود ۹۰٪ موارد دیابت از نوع ۲ است.', true, 'درست؛ و با افزایش چاقی و کم‌تحرکی، در جوان‌ترها هم بیشتر دیده می‌شود.'),
          M('خانم باردار در هفته ۲۶ آزمون تحمل گلوکز غیرطبیعی دارد؛ پیش از بارداری قندش طبیعی بوده است. تشخیص؟', ['gestational diabetes mellitus', 'type 1 diabetes', 'diabetes insipidus', 'metabolic syndrome'], 'دیابت بارداری؛ معمولاً پس از زایمان برطرف می‌شود.'),
          L('مقاومت به انسولین', `${e('<b>insulin resistance</b>')}: سلول‌ها به انسولین پاسخ کمتری می‌دهند. پانکراس اول انسولین بیشتری می‌سازد، ولی کم‌کم خسته می‌شود و قند بالا می‌رود.${memo('مقاومت به انسولین مثل قفل زنگ‌زده است: کلید درست است، ولی باید محکم‌تر بچرخانی؛ کم‌کم کلیدساز (پانکراس) هم خسته می‌شود.')}${pearl('کاهش ۵ تا ۱۰ درصد وزن و ۱۵۰ دقیقه پیاده‌روی تند در هفته، مقاومت به انسولین را به‌طور چشمگیری کم می‌کند.')}`),
          B('NIDDM نام قدیمی دیابت نوع ___ است.', ['۲', '۱', 'بارداری'], 'non-insulin-dependent diabetes mellitus = type 2.'),
          M(`${e('<b>macrosomia</b>')} در نوزاد مادر دیابتی یعنی…`, ['جثه بسیار درشت', 'جثه بسیار کوچک', 'قند خون بالای نوزاد', 'زردی نوزاد'], 'macro- (بزرگ) + somat/o (بدن) + -ia.'),
          S('املای انگلیسی «دیابت بارداری» را بنویس (فقط واژه gestational)', 'gestational', 'gestation = بارداری.', 'gesta…'),
          N('ab:pa')
        ]
      },
      {
        id: 'pa6', title: 'آزمایش‌های قند', icon: '🩸', items: [
          L('سه آزمایش اصلی', `${fig('glucose-tests', '', 'معیارهای رایج: قند ناشتا ≥۱۲۶، قند ۲ ساعته ≥۲۰۰ میلی‌گرم در دسی‌لیتر یا HbA1c ≥۶٫۵٪.')}${tbl([['آزمایش', 'روش'], [e('FBS / FBG / FPG'), 'قند خون پس از دست‌کم ۸ ساعت ناشتایی'], [e('GTT / OGTT'), 'نوشیدن محلول گلوکز و سنجش قند در زمان‌های مشخص'], [e('HbA1c (A1c)'), 'قند چسبیده به هموگلوبین: میانگین ۲ تا ۳ ماه'], [e('postprandial'), 'قند ۲ ساعت پس از غذا']])}`),
          M('کدام آزمایش «میانگین قند خون در ۲ تا ۳ ماه گذشته» را نشان می‌دهد؟', ['HbA1c (glycated hemoglobin)', 'FBS', 'urine sugar', 'GTT'], 'گلوکز به هموگلوبین گلبول‌های قرمز می‌چسبد و گلبول قرمز حدود ۱۲۰ روز عمر می‌کند.'),
          L('چرا HbA1c؟', `گلوکز به هموگلوبین گلبول قرمز می‌چسبد (${e('glycated')} = قنددار شده). هرچه قند در این ۳ ماه بیشتر بوده، درصد HbA1c بالاتر است. برای این آزمایش ناشتایی لازم نیست.${pearl('هدف رایج در بیشتر بیماران دیابتی، HbA1c کمتر از ۷٪ است؛ در یادداشت پزشک می‌خوانی: «HbA1c 7.8% with a goal of <7.0».')}`),
          M('بیمار با قند ناشتای ۱۴۰ میلی‌گرم در دسی‌لیتر، در کدام دسته قرار می‌گیرد؟', ['دیابت (≥۱۲۶)', 'طبیعی', 'پیش‌دیابت', 'افت قند'], 'FPG ≥ 126 mg/dL معیار تشخیص دیابت است (معمولاً با تکرار آزمایش تأیید می‌شود).', null, F('glucose-tests')),
          P('هر اختصار را به آزمایشش وصل کن', [['FBS', 'قند خون ناشتا'], ['OGTT', 'آزمون تحمل گلوکز خوراکی'], ['HbA1c', 'هموگلوبین گلیکوزیله'], ['BS', 'قند خون']]),
          L('پایش در خانه', `${e('<b>glucometer</b>')} (${e('gluc/o')} + ${e('-meter')} = وسیله اندازه‌گیری): قندسنج خانگی با یک قطره خون از نوک انگشت.${fig('glucose-test', 'نوار قندسنج و قطره خون انگشت', 'امروز سنسورهای پایش مداوم قند (CGM) هم هستند که روی بازو می‌چسبند.')}بیمار دیابتی نوع ۱ معمولاً روزی چند بار قندش را می‌سنجد و در قند بالا، ادرارش را از نظر <b>کتون</b> بررسی می‌کند.`),
          T('برای آزمایش HbA1c باید بیمار ۱۲ ساعت ناشتا باشد.', false, 'نادرست؛ HbA1c به ناشتایی نیاز ندارد. FBS و OGTT ناشتایی می‌خواهند.'),
          B('دستگاه خانگی سنجش قند خون ___ نام دارد.', ['glucometer', 'thermometer', 'glucagon'], 'gluc/o + -meter.'),
          M('در آزمون تحمل گلوکز خوراکی، قند ۲ ساعته ۲۱۰ است. نتیجه؟', ['دیابت', 'طبیعی', 'پیش‌دیابت', 'افت قند'], '۲ ساعته ≥ ۲۰۰ = دیابت؛ ۱۴۰ تا ۱۹۹ = اختلال تحمل گلوکز (IGT).'),
          S('املای انگلیسی «قندسنج» را بنویس', 'glucometer', 'gluc/o + -meter.', 'gluco…'),
          N('d2t:pa')
        ]
      },

      /* ================= سطح ۳: عوارض و درمان ================= */
      {
        id: 'pa7', title: 'فوریت‌های قند', icon: '🚨', items: [
          L('کتون و کتواسیدوز', `وقتی سلول‌ها گلوکز ندارند، بدن <b>چربی</b> می‌سوزاند و مواد اسیدی به نام <b>اجسام کتونی</b> (${e('ketones')}) می‌سازد:<br>• ${e('<b>ketosis</b>')}: تجمع کتون‌ها در بدن<br>• ${e('<b>acidosis</b>')}: اسیدی شدن خون<br>• ${e('<b>ketoacidosis</b>')} (${e('DKA')}): اسیدوز ناشی از کتون‌ها؛ فوریت خطرناک دیابت (بیشتر نوع ۱).<br>نشانه‌ها: تنفس تند و عمیق، بوی میوه در نفس، تهوع، کم‌آبی و کاهش هوشیاری.${memo('در DKA بدن مثل اجاقی است که به جای هیزم (قند)، مبلمان (چربی) را می‌سوزاند و خانه پر از دود اسیدی می‌شود.')}`),
          M('دختری ۱۲ ساله با سابقه دو ماه کاهش وزن، پرادراری و پرنوشی، با قند خون ۳۰۰ و اسیدوز بستری شده است. تشخیص پذیرش؟', ['ketoacidosis در دیابت نوع ۱ تازه‌تشخیص', 'hypoglycemia', 'diabetes insipidus', 'thyroid storm'], 'قند بالا + اسیدوز + کتون = DKA؛ پس از انسولین، حالش بهتر شد.', [['سن', '۱۲ ساله'], ['سابقه', 'کاهش وزن، polyuria، polydipsia'], ['FBS', '300 mg/100 mL'], ['وضعیت', 'ketoacidosis، glycosuria']]),
          L('شوک انسولینی', `${e('<b>insulin shock</b>')}: افت شدید قند خون به علت انسولین زیاد. نشانه‌ها: لرزش، ضربان تند، تعریق سرد، گرسنگی، گیجی و در نهایت کما.<br>${e('<b>hyperinsulinism</b>')}: انسولین زیاد در خون؛ از دوز زیاد دارو یا توموری به نام ${e('insulinoma')}.${pearl('بیماری که انسولین تزریق می‌کند همیشه باید یک منبع قند سریع و کارت شناسایی بیماری همراه داشته باشد.')}`),
          L('مقایسه دو فوریت', vs(['DKA (قند بالا)', 'تدریجی (ساعت‌ها تا روزها)، پوست خشک، تشنگی، تنفس عمیق، بوی میوه'], ['hypoglycemia (قند پایین)', 'ناگهانی (دقیقه‌ها)، پوست سرد و خیس، لرزش، گرسنگی، گیجی'])),
          P('هر واژه را به معنی‌اش وصل کن', [['ketosis', 'تجمع کتون'], ['acidosis', 'اسیدی شدن خون'], ['ketoacidosis', 'اسیدوز ناشی از کتون'], ['insulin shock', 'افت قند از انسولین زیاد']]),
          T('در کتواسیدوز دیابتی، پوست بیمار سرد و خیس از عرق است.', false, 'نادرست؛ پوست سرد و خیس (diaphoresis) بیشتر نشانه افت قند است. در DKA بیمار کم‌آب و پوستش خشک است.'),
          M('دانشجویی ۲۲ ساله پس از خوردن فقط یک لیوان نوشیدنی دچار گیجی و تلوتلو شده است. در اورژانس قند خون بالا و کتواسیدوز دارد و جای سوزن روی شکم و ران‌هایش دیده می‌شود. مشکل اصلی؟', ['دیابت نوع ۱ کنترل‌نشده با DKA', 'مسمومیت با الکل', 'بیماری آدیسون', 'هیپوگلیسمی'], 'جای تزریق انسولین، قند بالا و اسیدوز ← DKA. با تزریق انسولین سریع بهبود یافت.'),
          B('اختصار کتواسیدوز دیابتی ___ است.', ['DKA', 'DI', 'DM'], 'diabetic ketoacidosis.'),
          W('واژه‌ای بساز به معنی «اسیدوز ناشی از کتون»', ['ket/o', 'acid', '-osis'], ['glyc/o', '-emia', 'hyper-'], 'ket/o + acid + -osis = ketoacidosis.'),
          S('املای انگلیسی «کتواسیدوز» را بنویس', 'ketoacidosis', 'keto + acid + osis.', 'ketoa…'),
          N('t2f:pa')
        ]
      },
      {
        id: 'pa8', title: 'عوارض مزمن دیابت', icon: '👁️', items: [
          L('قند بالا، رگ‌ها را می‌خورد', `قند بالای طولانی به رگ‌های کوچک و بزرگ و عصب‌ها آسیب می‌زند:${fig('dm-complications', '', 'چشم، کلیه، عصب و قلب و عروق: چهار هدف اصلی عوارض مزمن.')}${tbl([['عارضه', 'معنی'], [e('diabetic retinopathy'), 'آسیب رگ‌های شبکیه؛ تاری دید تا کوری'], [e('diabetic nephropathy'), 'آسیب کلیه؛ نارسایی کلیه و دیالیز'], [e('diabetic neuropathy'), 'آسیب عصب؛ بی‌حسی، گزگز، درد'], ['بیماری عروق', 'تصلب شرایین، سکته قلبی و مغزی، گانگرن']])}`),
          M(`${e('<b>diabetic retinopathy</b>')} یعنی…`, ['آسیب شبکیه چشم در اثر دیابت', 'آسیب کلیه در اثر دیابت', 'آسیب عصب پا', 'التهاب پانکراس'], 'retin/o (شبکیه) + -pathy (بیماری).'),
          P('هر عارضه را به عضوش وصل کن', [['retinopathy', 'شبکیه چشم'], ['nephropathy', 'کلیه'], ['neuropathy', 'عصب'], ['ulceration', 'پوست (زخم پا)']]),
          L('پای دیابتی', `${e('<b>peripheral neuropathy</b>')} حس پاها را کم می‌کند؛ بیمار زخم یا جسم خارجی را حس نمی‌کند. همراه با خون‌رسانی ضعیف، زخم (${e('ulceration')}) بهبود نمی‌یابد و ممکن است عفونی شود.${pearl('در یادداشت جراحی می‌خوانی: «nonsalvageable infection of the left heel in the context of peripheral diabetic neuropathy and poor circulation» یعنی عفونت پاشنه‌ای که دیگر نجات‌دادنی نیست و قطع عضو لازم است. معاینه روزانه پا، این فاجعه را پیشگیری می‌کند.')}`),
          M('مردی ۵۹ ساله با دیابت نوع ۱ کنترل‌نشده، زخم بدبوی پاشنه دارد ولی درد زیادی حس نمی‌کند و نبض پا لمس نمی‌شود. کدام دو عامل در این وضعیت نقش اصلی دارند؟', ['نوروپاتی محیطی و خون‌رسانی ضعیف', 'رتینوپاتی و نفروپاتی', 'کمبود ید و کلسیم', 'پرکاری تیروئید'], 'بی‌حسی (neuropathy) + خون‌رسانی کم = زخم پای دیابتی.', [['بیمار', 'مرد ۵۹ ساله، T1DM طولانی'], ['پا', 'ulceration و erythema پاشنه'], ['معاینه', 'بدون نبض، بدون حس عمقی']]),
          T('معاینه سالانه ته چشم برای بیماران دیابتی توصیه می‌شود.', true, 'درست؛ رتینوپاتی زودهنگام بدون علامت است و درمان به‌موقع از کوری پیشگیری می‌کند.'),
          B('آسیب کلیه ناشی از دیابت، diabetic ___ نام دارد.', ['nephropathy', 'retinopathy', 'neuropathy'], 'nephr/o (کلیه) + -pathy.'),
          M(`در ${e('neuropathy')}، ریشه neur/o یعنی…`, ['عصب', 'کلیه', 'شبکیه', 'رگ'], 'neur/o = nerve.'),
          W('واژه‌ای بساز به معنی «بیماری شبکیه»', ['retin/o', '-pathy'], ['nephr/o', 'neur/o', '-itis'], 'retin/o + -pathy = retinopathy.'),
          S('املای انگلیسی «نوروپاتی» را بنویس', 'neuropathy', 'neur/o + -pathy.', 'neuro…'),
          N('sp:pa')
        ]
      },
      {
        id: 'pa9', title: 'درمان دیابت و بیماری‌های پانکراس', icon: '💉', items: [
          L('انسولین', `${e('<b>insulin</b>')} امروز با مهندسی ژنتیک ساخته می‌شود (مثل ${e('Humulin')}) و انواع سریع‌اثر، متوسط‌اثر (${e('NPH')}) و طولانی‌اثر دارد.<br>• تزریق <b>زیرجلدی</b> (${e('subcutaneous')}) در بازو، ران یا شکم، با چرخاندن محل تزریق؛<br>• ${e('<b>insulin pump</b>')}: دستگاهی به اندازه یک دسته کارت که انسولین را به‌طور مداوم زیر پوست می‌فرستد (${e('CSII')}) و پیش از هر وعده یک دوز اضافه (${e('bolus')}) می‌دهد.`),
          M('اختصار CSII به چه معناست؟', ['تزریق مداوم زیرجلدی انسولین (پمپ)', 'آزمون تحمل گلوکز', 'هموگلوبین گلیکوزیله', 'دیابت بارداری'], 'continuous subcutaneous insulin infusion.'),
          L('داروهای خوراکی و نام‌هایشان', `${tbl([['واژه', 'معنی'], [e('oral hypoglycemic agents'), 'قرص‌های کاهنده قند در نوع ۲؛ مثل metformin (Glucophage) و glipizide'], [e('antidiabetics'), 'داروهای کنترل‌کننده قند در دیابت'], [e('antihyperglycemic'), 'دارویی که قند بالا را پایین می‌آورد'], [e('antihypoglycemic'), 'عاملی که قند پایین را بالا می‌برد (مثل گلوکاگون)']])}${memo('anti-hypo-glycemic = «ضدِ قند پایین» ← قند را بالا می‌برد! پیشوندها را یکی‌یکی از چپ بخوان.')}`),
          M(`${e('<b>antihypoglycemic</b>')} چه اثری دارد؟`, ['قند خون پایین را بالا می‌برد', 'قند خون را پایین می‌آورد', 'ترشح انسولین را زیاد می‌کند', 'فشار خون را پایین می‌آورد'], 'anti- (ضد) + hypoglycemia (قند پایین).'),
          T('داروهای خوراکی کاهنده قند برای درمان اصلی دیابت نوع ۱ کافی‌اند.', false, 'نادرست؛ در نوع ۱ انسولینی ساخته نمی‌شود و تزریق انسولین ضروری است.'),
          L('بیماری‌های دیگر پانکراس', `${tbl([['واژه', 'معنی'], [e('pancreatitis'), 'التهاب پانکراس؛ بیشتر از الکل یا سنگ صفرا'], [e('insulinoma'), 'تومور سلول‌های جزیره‌ای که انسولین زیاد می‌سازد ← افت قند'], [e('pancreatectomy'), 'برداشتن بخشی یا همه پانکراس'], [e('pancreatotomy'), 'برش پانکراس'], [e('islet transplantation'), 'پیوند سلول‌های جزیره‌ای سالم']])}${pearl('در پانکراتیت، آنزیم‌های گوارشی به جای روده، خود پانکراس را «هضم» می‌کنند؛ درد شدید شکم که به پشت می‌زند.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['pancreatitis', 'التهاب پانکراس'], ['insulinoma', 'تومور سازنده انسولین'], ['pancreatectomy', 'برداشتن پانکراس'], ['islet transplantation', 'پیوند جزایر']]),
          M('ماریا (۳۲ ساله، دیابت نوع ۱ از ۳ سالگی) می‌خواهد آزادی بیشتری در وعده‌ها داشته باشد. پزشک کدام روش را پیشنهاد می‌کند؟', ['پمپ انسولین با بولوس پیش از غذا', 'قطع انسولین و شروع metformin', 'برداشتن پانکراس', 'ید رادیواکتیو'], 'insulin pump (CSII) انسولین پایه مداوم و بولوس وعده‌ها را می‌دهد.'),
          B('دارویی که قند خون بالا را پایین می‌آورد، anti___glycemic نام دارد.', ['hyper', 'hypo', 'poly'], 'antihyperglycemic.'),
          W('واژه‌ای بساز به معنی «تومور جزایر سازنده انسولین»', ['insul/o', '-oma'], ['pancreat/o', '-itis', 'glyc/o'], 'insulin + -oma = insulinoma.'),
          S('املای انگلیسی «متفورمین» را بنویس', 'metformin', 'metformin (Glucophage).', 'metf…'),
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
    id: 'dx', sym: 'Dx', name: 'غدد دیگر، تشخیص و درمان', short: 'تشخیص', sub: 'اپی‌فیز، تیموس، غدد جنسی، آزمایش‌ها و تصویربرداری، جراحی‌ها، داروها و جمع‌بندی پرکاری و کم‌کاری',
    color: '#D94F7B', dark: '#A8345B', light: '#FBE3EC',
    levels: ['غدد کم‌صدا', 'آزمایشگاه و تصویربرداری', 'درمان و جمع‌بندی'],
    gens: EA.genIds('dx'),
    lessons: [
      /* ================= سطح ۱: غدد کم‌صدا ================= */
      {
        id: 'dx1', title: 'اپی‌فیز: ساعت بدن', icon: '🌙', items: [
          L('غده‌ای به شکل میوه کاج', `${e('<b>pineal gland</b>')} (${e('pineal')} = شبیه میوه کاج) غده کوچکی در عمق مغز است و هورمون ${e('<b>melatonin</b>')} می‌سازد.<br>ملاتونین در <b>تاریکی</b> زیاد و در <b>نور</b> کم می‌شود و ${e('<b>circadian rhythm</b>')} (ریتم شبانه‌روزی ۲۴ ساعته) خواب و بیداری را تنظیم می‌کند.${fig('pineal-clock', '', 'نور به چشم ← پیام عصبی ← ملاتونین کمتر ← بیداری. تاریکی ← ملاتونین بیشتر ← خواب.')}`),
          M('ملاتونین در کدام شرایط بیشتر ترشح می‌شود؟', ['در تاریکی', 'در نور شدید', 'پس از غذا', 'هنگام ورزش'], 'ملاتونین هورمون شب است و خواب را آسان می‌کند.', null, F('pineal-clock')),
          L('اختلال عاطفی فصلی', `${e('<b>seasonal affective disorder</b>')} (${e('SAD')}): در روزهای کوتاه و تاریک زمستان، بعضی افراد خواب‌آلود، افسرده و پرخور می‌شوند؛ احتمالاً به علت ملاتونین زیاد.${pearl('نوردرمانی (۱۵ دقیقه نور شدید پس از بیدار شدن) حال بیشتر بیماران SAD را بهتر می‌کند. اختصارش هم جالب است: SAD یعنی «غمگین»!')}${memo('circa = حدود، dies = روز: «حدوداً یک روز». ساعت درونی بدن تقریباً ۲۴ ساعته است.')}`),
          T('اپی‌فیز (pineal gland) فقط یک کار دارد: ساختن هورمون.', true, 'درست؛ مثل تیروئید و فوق‌کلیه، غده‌ای «تک‌کاره» است.'),
          P('هر واژه را به معنی‌اش وصل کن', [['pineal gland', 'غده صنوبری مغز'], ['melatonin', 'هورمون خواب'], ['circadian rhythm', 'ریتم ۲۴ ساعته'], ['SAD', 'اختلال عاطفی فصلی']]),
          M('مسافری که از تهران به ونکوور پرواز کرده، برای تنظیم خواب از کدام هورمون به شکل مکمل استفاده می‌کند؟', ['melatonin', 'cortisol', 'insulin', 'thyroxine'], 'ملاتونین برای جت‌لگ و تنظیم چرخه خواب و بیداری استفاده می‌شود.'),
          B('برداشتن اپی‌فیز را pineal___ می‌نامند.', ['ectomy', 'itis', 'oma'], 'pinealectomy.'),
          W('واژه‌ای بساز به معنی «برداشتن اپی‌فیز»', ['pineal/o', '-ectomy'], ['-tomy', 'thym/o', '-itis'], 'pineal/o + -ectomy = pinealectomy.'),
          S('املای انگلیسی «ملاتونین» را بنویس', 'melatonin', 'melatonin؛ با melanin (رنگدانه پوست) اشتباه نکن.', 'mela…'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx2', title: 'تیموس: مدرسه سلول‌های T', icon: '🛡️', items: [
          L('غده دوران کودکی', `${e('<b>thymus gland</b>')} پشت جناغ، بالای قلب (در ${e('mediastinum')}) قرار دارد. هم جزو دستگاه ایمنی است و هم غده درون‌ریز، چون هورمون ${e('<b>thymosin</b>')} می‌سازد.<br>تیموسین به بلوغ <b>لنفوسیت‌های T</b> (${e('T cells')}) کمک می‌کند؛ «T» از همین Thymus آمده است.${fig('thymus', '', 'تیموس در کودکی بزرگ است و پس از بلوغ کوچک می‌شود و با چربی جایگزین می‌شود.')}`),
          M('تیموسین چه نقشی دارد؟', ['کمک به بلوغ لنفوسیت‌های T', 'تنظیم قند خون', 'تنظیم خواب', 'افزایش کلسیم خون'], 'سلول‌های T در تیموس «آموزش» می‌بینند.', null, F('thymus')),
          L('thym/o یا thyr/o؟', `${vs(['thym/o', 'تیموس: thymoma، thymectomy، thymitis'], ['thyr/o', 'تیروئید: thyroma، thyroidectomy، thyroiditis'])}${memo('thyMus در Mediastinum (قفسه سینه)؛ thyRoid با R مثل «رو»ی نای در گردن.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['thymoma', 'تومور تیموس'], ['thymitis', 'التهاب تیموس'], ['thymectomy', 'برداشتن تیموس'], ['thymic', 'مربوط به تیموس']]),
          T(`${e('thymectomy')} گاهی در بیماری میاستنی گراویس یا تومور تیموس انجام می‌شود.`, true, 'درست؛ برداشتن تیموس در myasthenia gravis می‌تواند علائم را بهتر کند.'),
          M('اندازه تیموس در طول عمر چگونه تغییر می‌کند؟', ['در کودکی بزرگ است و پس از بلوغ کوچک می‌شود', 'از تولد تا پیری بزرگ‌تر می‌شود', 'همیشه ثابت است', 'فقط در بارداری بزرگ می‌شود'], 'نقشش در سال‌های اول زندگی، هنگام شکل گرفتن دستگاه ایمنی، مهم‌تر است.'),
          B('حرف T در «لنفوسیت T» از نام غده ___ آمده است.', ['تیموس', 'تیروئید', 'تخمدان'], 'Thymus.'),
          W('واژه‌ای بساز به معنی «تومور تیموس»', ['thym/o', '-oma'], ['thyr/o', '-itis', 'aden/o'], 'thym/o + -oma = thymoma.'),
          S('املای انگلیسی «تیموسین» را بنویس', 'thymosin', 'thym/o + -sin.', 'thymo…'),
          N('r2m:dx')
        ]
      },
      {
        id: 'dx3', title: 'غدد جنسی', icon: '🧬', items: [
          L('گنادها', `${e('<b>gonads</b>')} (غدد جنسی) دو کار دارند: ساختن <b>گامت</b> (${e('gametes')}: تخمک و اسپرم) و ساختن هورمون جنسی.${fig('gonads', '', 'FSH و LH از هیپوفیز، تخمدان‌ها و بیضه‌ها را روشن می‌کنند.')}${tbl([['غده', 'هورمون', 'کار'], [e('ovaries'), e('estrogen'), 'صفات زنانه، چرخه قاعدگی'], ['', e('progesterone'), 'آماده‌سازی رحم برای بارداری'], [e('testes'), e('testosterone'), 'صفات مردانه، ساخت اسپرم']])}`),
          L('ریشه‌ها', `${tbl([['ریشه', 'معنی', 'نمونه'], [e('estr/o'), 'زنانه', e('estrogen')], [e('andr/o'), 'مردانه', e('androgen')], [e('ovari/o, oophor/o'), 'تخمدان', e('ovarian')], [e('orchi/o, testicul/o'), 'بیضه', e('testicular')], [e('gonad/o'), 'غدد جنسی', e('hypogonadism')]])}${memo('pro-gest-erone: «برای حاملگی» (gestation)؛ پروژسترون رحم را برای بارداری آماده می‌کند.')}`),
          M('پروژسترون از کجا ترشح می‌شود و چه می‌کند؟', ['از جسم زرد تخمدان؛ رحم را برای بارداری آماده می‌کند', 'از بیضه؛ اسپرم می‌سازد', 'از هیپوفیز؛ تخمدان را تحریک می‌کند', 'از جفت؛ شیر می‌سازد'], 'corpus luteum (جسم زرد) پس از تخمک‌گذاری پروژسترون می‌سازد.'),
          L('HCG: هورمون بارداری', `${e('<b>human chorionic gonadotropin</b>')} (${e('HCG')}): پس از لانه‌گزینی، جفت این هورمون را می‌سازد تا جسم زرد به ساخت استروژن و پروژسترون ادامه دهد. همین هورمون در «تست بارداری» اندازه‌گیری می‌شود.`),
          L('اختلال‌ها', `${tbl([['واژه', 'معنی'], [e('hypogonadism'), 'کم‌کاری غدد جنسی'], [e('hypergonadism'), 'پرکاری غدد جنسی'], [e('PCOS'), 'سندرم تخمدان پلی‌کیستیک: آندروژن زیاد، قاعدگی نامنظم یا قطع، آکنه، موی زیاد، مقاومت به انسولین'], [e('amenorrhea'), 'قطع قاعدگی در سن باروری']])}${pearl('PCOS هم بیماری غدد است و هم بیماری متابولیک؛ بسیاری از بیماران مقاومت به انسولین دارند و ممکن است metformin هم بگیرند.')}`),
          P('هر هورمون را به منبعش وصل کن', [['estrogen', 'تخمدان'], ['testosterone', 'بیضه'], ['HCG', 'جفت'], ['FSH', 'هیپوفیز قدامی']]),
          T(`${e('amenorrhea')} یعنی قاعدگی دردناک.`, false, 'نادرست؛ a- (بدون) + men/o (قاعدگی) + -rrhea (جریان): «نبود» قاعدگی.'),
          B('کم‌کاری غدد جنسی hypo___ism نام دارد.', ['gonad', 'thyroid', 'adrenal'], 'hypogonadism.'),
          W('واژه‌ای بساز به معنی «کم‌کاری غدد جنسی»', ['hypo-', 'gonad/o', '-ism'], ['hyper-', 'andr/o', '-itis'], 'hypo- + gonad/o + -ism = hypogonadism.'),
          S('املای انگلیسی «تستوسترون» را بنویس', 'testosterone', 'test (بیضه) + ster + -one.', 'testo…'),
          N('f2t:dx')
        ]
      },

      /* ================= سطح ۲: آزمایشگاه و تصویربرداری ================= */
      {
        id: 'dx4', title: 'آزمایش‌های خون و ادرار', icon: '🧪', items: [
          L('آزمایش سرم خون', `بیشتر هورمون‌ها و مواد مهم با یک نمونه خون (${e('blood serum test')}) سنجیده می‌شوند: کلسیم، کورتیزول، الکترولیت‌ها، FSH، GH، گلوکز، انسولین، PTH، T3، T4، تستوسترون و TSH.${tbl([['آزمایش', 'برای ارزیابی'], [e('total calcium'), 'پاراتیروئید و استخوان'], [e('serum cortisol'), 'فوق‌کلیه'], [e('serum potassium'), 'تومورهای فوق‌کلیه'], [e('estradiol'), 'کار تخمدان'], [e('prolactin'), 'ترشح نابجای شیر'], [e('testosterone'), 'بیضه و فوق‌کلیه']])}`),
          L('آزمایش ادرار', `در ادرار هم می‌توان این‌ها را سنجید: <b>کلسیم</b>، <b>کاتکول‌آمین‌ها</b> (فئوکروموسیتوما)، کورتیزول آزاد، الکترولیت‌ها، <b>کتون</b> و <b>گلوکز</b> (${e('urine sugar')}).${pearl('نوار ادرار (dipstick) در چند ثانیه قند و کتون را نشان می‌دهد؛ اولین سرنخ در کودک مشکوک به دیابت.')}`),
          M('برای بررسی فئوکروموسیتوما، کدام ماده در ادرار سنجیده می‌شود؟', ['کاتکول‌آمین‌ها', 'کتون‌ها', 'کلسیم', 'گلوکز'], 'تومور مدولا اپی‌نفرین و نوراپی‌نفرین زیادی می‌سازد که متابولیت‌هایشان در ادرار دفع می‌شوند.'),
          L('RIA: حساس‌ترین ترازو', `${e('<b>radioimmunoassay</b>')} (${e('RIA')}): روش اندازه‌گیری مقدار بسیار کم یک هورمون در پلاسما با کمک <b>آنتی‌بادی</b> اختصاصی و هورمون نشاندار <b>رادیواکتیو</b>.<br>${wb('radi/o', 'immun/o', 'assay')}`),
          P('هر آزمایش را به غده مربوطش وصل کن', [['total calcium', 'پاراتیروئید'], ['serum cortisol', 'فوق‌کلیه'], ['estradiol', 'تخمدان'], ['TSH', 'تیروئید (از هیپوفیز)'], ['HbA1c', 'پانکراس (دیابت)']]),
          T(`${e('estrogen receptor test')} نشان می‌دهد آیا یک سرطان به درمان هورمونی پاسخ می‌دهد یا نه.`, true, 'درست؛ اگر سلول‌های سرطانی گیرنده استروژن داشته باشند، داروهای ضدهورمونی مؤثرند.'),
          M('خانمی که باردار نیست و شیر نمی‌دهد، از ترشح شیر شاکی است. کدام آزمایش خون اول درخواست می‌شود؟', ['prolactin', 'cortisol', 'calcitonin', 'thymosin'], 'galactorrhea ← بررسی hyperprolactinemia.'),
          B('اختصار رادیوایمونواسی ___ است.', ['RIA', 'RAIU', 'MRI'], 'radioimmunoassay = RIA؛ RAIU آزمون جذب ید است.'),
          S('املای انگلیسی «رادیوایمونواسی» را بنویس', 'radioimmunoassay', 'radio + immuno + assay.', 'radioimm…'),
          N('d2t:dx')
        ]
      },
      {
        id: 'dx5', title: 'تصویربرداری غدد', icon: '🩻', items: [
          L('ابزارهای دیدن غدد', `${tbl([['روش', 'کاربرد در غدد'], [e('CT scan (computed tomography)'), 'برش‌های عرضی هیپوفیز، فوق‌کلیه، پانکراس'], [e('MRI (magnetic resonance imaging)'), 'دقیق‌ترین روش برای تومورهای کوچک هیپوفیز'], [e('ultrasound (echography)'), 'توده‌های تیروئید، فوق‌کلیه و پانکراس'], [e('thyroid scan'), 'تصویر تیروئید با ید رادیواکتیو'], [e('RAIU'), 'سنجش جذب ید']])}${memo('-graphy = فرایند ثبت تصویر: echography (ثبت با پژواک صدا)، tomography (ثبت برش‌ها).')}`),
          M('برای یافتن یک میکروآدنوم کوچک هیپوفیز، کدام روش دقیق‌تر است؟', ['MRI', 'thyroid scan', 'urine sugar', 'glucometer'], 'MRI جزئیات بافت نرم مغز و هیپوفیز را بسیار دقیق نشان می‌دهد.'),
          L('عکس ساده هم حرف دارد', `${fig('acromegaly-xray', 'رادیوگرافی نیم‌رخ جمجمه در آکرومگالی', 'فک پایین بزرگ و جلوآمده و زین ترکی پهن‌شده.')}${pearl('در رادیوگرافی جمجمه، بزرگ شدن زین ترکی (sella turcica) سرنخ تومور هیپوفیز است. کلسیفیکاسیون اپی‌فیز هم در عکس‌ها به‌عنوان یک «نشانه جهت‌یابی» استفاده می‌شود.')}`),
          M('در عکس جمجمه بیمار آکرومگالی، کدام یافته انتظار می‌رود؟', ['فک پایین بزرگ و زین ترکی پهن', 'تیروئید بزرگ', 'کلیه کوچک', 'تیموس بزرگ'], 'GH زیاد استخوان‌های صورت را درشت می‌کند؛ آدنوم، زین ترکی را گشاد می‌کند.', null, F('acromegaly-xray')),
          P('هر روش را به کاربردش وصل کن', [['MRI', 'تومور کوچک هیپوفیز'], ['thyroid echography', 'ندول یا کیست تیروئید'], ['CT scan', 'توده فوق‌کلیه'], ['thyroid scan', 'ندول سرد یا گرم']]),
          T(`${e('ultrasound')} از پرتو ایکس برای تصویربرداری استفاده می‌کند.`, false, 'نادرست؛ سونوگرافی از امواج صوتی استفاده می‌کند و پرتو ندارد؛ برای همین در بارداری هم بی‌خطر است.'),
          B('ریشه radi/o یعنی ___.', ['پرتو', 'کلیه', 'قند'], 'radi/o = radiation, ray.'),
          M(`در واژه ${e('<b>echography</b>')}، پسوند -graphy یعنی…`, ['فرایند ثبت تصویر', 'برش', 'برداشتن', 'وسیله اندازه‌گیری'], '-graphy = process of recording.'),
          S('املای اختصار «تصویربرداری تشدید مغناطیسی» را بنویس', 'MRI', 'magnetic resonance imaging.', 'M…'),
          N('ab:dx')
        ]
      },
      {
        id: 'dx6', title: 'خواندن پرونده: اختصارها', icon: '📄', items: [
          L('یادداشت پزشک را بخوان', `در پرونده واقعی، اختصارها همه‌جا هستند:${tbl([['اختصار', 'معنی'], [e('PMHx'), 'سابقه پزشکی گذشته'], [e('ROS'), 'مرور دستگاه‌ها'], [e('WNL'), 'در محدوده طبیعی'], [e('HTN'), 'فشار خون بالا'], [e('BS / FBS'), 'قند خون / قند ناشتا'], [e('HbA1c'), 'هموگلوبین گلیکوزیله']])}${pearl('نمونه یادداشت: «60 y/o female, T2DM onset at age 53. HbA1c 7.8 with goal <7.0. Thyroid palpated: no nodules. Foot exam: WNL.» حالا می‌توانی همه‌اش را بخوانی!')}`),
          M('در یادداشت آمده «Foot exam: WNL». یعنی…', ['معاینه پا در محدوده طبیعی است', 'زخم پا دارد', 'پا قطع شده است', 'نبض پا لمس نمی‌شود'], 'WNL = within normal limits.'),
          L('اختصارهای هورمونی پرتکرار', `${tbl([['اختصار', 'معنی'], [e('DM / DI'), 'دیابت شیرین / دیابت بی‌مزه'], [e('DKA'), 'کتواسیدوز دیابتی'], [e('HRT'), 'هورمون‌درمانی جایگزین'], [e('RAI / 131I'), 'ید رادیواکتیو'], [e('MEN'), 'نئوپلازی متعدد غدد درون‌ریز'], [e('CAH'), 'هایپرپلازی مادرزادی فوق‌کلیه'], [e('PHPT'), 'پرکاری اولیه پاراتیروئید'], [e('SIADH'), 'ترشح نابجای ADH']])}`),
          P('هر اختصار را به معنی‌اش وصل کن', [['DKA', 'کتواسیدوز دیابتی'], ['HRT', 'هورمون‌درمانی جایگزین'], ['MEN', 'نئوپلازی متعدد غدد'], ['PHPT', 'پرکاری اولیه پاراتیروئید'], ['SIADH', 'ترشح نابجای ADH']]),
          M('در گزارشی نوشته شده «PCOS, on metformin». بیمار…', ['سندرم تخمدان پلی‌کیستیک دارد و داروی متفورمین می‌گیرد', 'دیابت نوع ۱ دارد', 'کم‌کاری تیروئید دارد', 'پرکاری پاراتیروئید دارد'], 'PCOS با مقاومت به انسولین همراه است و گاهی با متفورمین درمان می‌شود.'),
          T(`${e('MEN')} یک بیماری ارثی است که در چند غده درون‌ریز تومور ایجاد می‌کند.`, true, 'درست؛ multiple endocrine neoplasia.'),
          O('بخش‌های یک یادداشت پیشرفت (progress note) را مرتب کن', ['شکایت و سابقه (PMHx)', 'مرور دستگاه‌ها (ROS) و معاینه', 'نتایج آزمایش (مثل HbA1c)', 'برنامه درمان و پیگیری'], 'از گفته بیمار تا یافته‌ها و سپس تصمیم.'),
          B('اختصار «در محدوده طبیعی» ___ است.', ['WNL', 'ROS', 'HTN'], 'within normal limits.'),
          S('اختصار «هورمون‌درمانی جایگزین» را بنویس', 'HRT', 'hormone replacement therapy.', 'H…'),
          N('ab:dx')
        ]
      },

      /* ================= سطح ۳: درمان و جمع‌بندی ================= */
      {
        id: 'dx7', title: 'جراحی‌های غدد', icon: '🔪', items: [
          L('خانواده -ectomy', `${fig('surgery', '', 'نام غده + ectomy-؛ پس از برداشتن هر غده، هورمونش باید جایگزین شود.')}${pearl('امروز بیشتر غدد (فوق‌کلیه، هیپوفیز، تیروئید، پاراتیروئید و حتی پانکراس) با روش‌های کم‌تهاجمی مثل لاپاراسکوپی یا آندوسکوپی از راه بینی برداشته می‌شوند.')}`),
          P('هر جراحی را به غده‌اش وصل کن', [['hypophysectomy', 'هیپوفیز'], ['thymectomy', 'تیموس'], ['adrenalectomy', 'فوق‌کلیه'], ['pancreatectomy', 'پانکراس'], ['pinealectomy', 'اپی‌فیز']]),
          L('روش‌های ویژه', `${tbl([['واژه', 'معنی'], [e('transsphenoidal hypophysectomy'), 'برداشتن تومور هیپوفیز از راه بینی و سینوس اسفنوئید'], [e('laparoscopic adrenalectomy'), 'برداشتن فوق‌کلیه با دوربین از برش‌های کوچک شکم'], [e('lobectomy'), 'برداشتن یک لوب تیروئید'], [e('chemical thyroidectomy'), 'تخریب تیروئید با ید رادیواکتیو، بدون جراحی'], [e('adenomectomy'), 'برداشتن آدنوم']])}`),
          M('برداشتن تومور هیپوفیز از راه بینی چه نام دارد؟', ['transsphenoidal hypophysectomy', 'laparoscopic adrenalectomy', 'lobectomy', 'pancreatotomy'], 'trans- (از میان) + sphenoid (سینوس اسفنوئید).'),
          T(`${e('adenectomy')} یعنی برداشتن غده فوق‌کلیه.`, false, 'نادرست؛ aden/o = هر غده‌ای. برداشتن فوق‌کلیه adrenalectomy است.'),
          M('کدام جراحی برش است، نه برداشتن؟', ['thyrotomy', 'thyroidectomy', 'thymectomy', 'adrenalectomy'], '-tomy = برش؛ -ectomy = برداشتن.'),
          B('پس از برداشتن کامل یک غده درون‌ریز، معمولاً ___ آن لازم است.', ['جایگزینی هورمون', 'ید رادیواکتیو', 'پیوند کلیه'], 'مثلاً levothyroxine پس از thyroidectomy یا hydrocortisone پس از adrenalectomy دوطرفه.'),
          W('واژه‌ای بساز به معنی «برداشتن تیموس»', ['thym/o', '-ectomy'], ['thyr/o', '-tomy', '-oma'], 'thym/o + -ectomy = thymectomy.'),
          S('املای انگلیسی «برداشتن پانکراس» را بنویس', 'pancreatectomy', 'pancreat/o + -ectomy.', 'pancreat…'),
          N('wb:dx')
        ]
      },
      {
        id: 'dx8', title: 'داروهای غدد', icon: '💊', items: [
          L('هورمون‌درمانی جایگزین', `${e('<b>hormone replacement therapy</b>')} (${e('HRT')}): جبران کمبود هورمون با قرص، تزریق یا چسب پوستی. نمونه‌ها:${tbl([['کمبود', 'دارو'], ['تیروئید', e('levothyroxine')], ['انسولین', e('insulin')], ['کورتیزول', e('hydrocortisone')], ['ADH', e('vasopressin')], ['GH در کودک', e('somatropin (human growth hormone)')], ['استروژن در یائسگی', e('estrogen ± progesterone')]])}${pearl('HRT در یائسگی علائم را کم می‌کند و از پوکی استخوان پیشگیری می‌کند، ولی در برخی افراد خطر لخته و برخی سرطان‌ها را بالا می‌برد؛ تصمیم باید فردی باشد.')}`),
          M('دارویی که جایگزین T4 در کم‌کاری تیروئید است کدام است؟', ['levothyroxine', 'methimazole', 'metformin', 'prednisone'], 'levothyroxine = T4 مصنوعی.'),
          L('داروهای مهارکننده و تنظیم‌کننده', `${tbl([['گروه دارو', 'کاربرد', 'نمونه'], ['antithyroid', 'پرکاری تیروئید', e('methimazole، propylthiouracil')], ['oral hypoglycemic', 'دیابت نوع ۲', e('metformin، glipizide')], ['corticosteroids', 'ضدالتهاب؛ جایگزین در آدیسون', e('prednisone')], ['aquaretics', 'سدیم پایین (SIADH)', e('tolvaptan، conivaptan')]])}${memo('نام دسته را از اثرش بساز: anti-thyroid (ضد تیروئید)، hypo-glycemic (کاهنده قند)، aqua-retic (دفع‌کننده آب).')}`),
          P('هر دارو را به دسته‌اش وصل کن', [['methimazole', 'ضدتیروئید'], ['metformin', 'کاهنده قند خوراکی'], ['prednisone', 'کورتیکواستروئید'], ['somatropin', 'هورمون رشد'], ['tolvaptan', 'آکوارتیک']]),
          T('استروئیدها گاهی به‌طور غیرقانونی برای بزرگ کردن عضلات سوءمصرف می‌شوند.', true, 'درست؛ و عوارض خطرناکی برای قلب، کبد و غدد جنسی دارند.'),
          M('آقای گروت با کوتاه‌قدی ناشی از کمبود GH در بزرگسالی از پرستار درباره هورمون رشد می‌پرسد. کدام پاسخ درست است؟', ['هورمون رشد فقط تا وقتی صفحه‌های رشد استخوان باز است قد را بیشتر می‌کند', 'هورمون رشد در هر سنی قد را بلند می‌کند', 'هورمون رشد فقط برای دیابت است', 'هورمون رشد خوراکی است'], 'پس از بسته شدن صفحه‌های رشد، GH قد را بیشتر نمی‌کند.'),
          B('اختصار هورمون‌درمانی جایگزین ___ است.', ['HRT', 'RAI', 'TFT'], 'hormone replacement therapy.'),
          M(`داروی ${e('<b>antithyroid</b>')} چه کاری می‌کند؟`, ['ساخت هورمون تیروئید را مهار می‌کند', 'هورمون تیروئید را جایگزین می‌کند', 'تیروئید را بزرگ می‌کند', 'کلسیم را بالا می‌برد'], 'anti- (ضد) + thyroid؛ برای پرکاری تیروئید.'),
          S('املای انگلیسی «استروئیدها» را بنویس', 'steroids', 'steroid + -s.', 'ster…'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx9', title: 'جمع‌بندی: زیاد یا کم؟', icon: '🏁', items: [
          L('جدول طلایی', `کل دوره در یک جدول؛ برای هر هورمون، زیادی و کمی‌اش:${tbl([['هورمون', 'ترشح زیاد', 'ترشح کم'], ['GH', 'gigantism (کودک)، acromegaly (بزرگسال)', 'dwarfism'], ['ADH', 'SIADH', 'diabetes insipidus'], ['T3، T4', 'Graves، thyrotoxicosis', 'congenital hypothyroidism، myxedema'], ['PTH', 'hypercalcemia، آسیب استخوان', 'hypocalcemia، tetany'], ['cortisol', 'Cushing syndrome', 'Addison disease'], ['aldosterone', 'Conn syndrome (aldosteronism)', 'Addison disease'], ['insulin', 'hypoglycemia (insulinoma)', 'diabetes mellitus'], ['catecholamines', 'pheochromocytoma', '—']])}`),
          M('کمبود کدام هورمون دیابت بی‌مزه ایجاد می‌کند؟', ['ADH', 'insulin', 'cortisol', 'PTH'], 'ADH کم ← ادرار زیاد و رقیق.'),
          P('هر بیماری را به هورمونش وصل کن', [['acromegaly', 'GH زیاد'], ['myxedema', 'هورمون تیروئید کم'], ['tetany', 'PTH کم'], ['Cushing syndrome', 'کورتیزول زیاد'], ['diabetes mellitus', 'انسولین کم یا بی‌اثر']]),
          M('کدام بیماری با «زیادی» هورمون ایجاد می‌شود؟', ['Graves disease', 'Addison disease', 'myxedema', 'diabetes insipidus'], 'Graves = پرکاری تیروئید؛ بقیه کمبود هورمون‌اند.'),
          L('غده مقصر را پیدا کن', `${tbl([['بیماری', 'غده'], [e('acromegaly، Simmonds disease'), 'هیپوفیز'], [e('Graves، goiter، myxedema'), 'تیروئید'], [e('tetany'), 'پاراتیروئید'], [e('Cushing، Addison، pheochromocytoma'), 'فوق‌کلیه'], [e('diabetes mellitus، insulinoma'), 'پانکراس'], [e('PCOS'), 'تخمدان']])}${memo('در امتحان، اول «هورمون» را پیدا کن؛ غده و نام بیماری خودشان از جدول بیرون می‌آیند.')}`),
          P('هر بیماری را به غده مقصر وصل کن', [['Simmonds disease', 'هیپوفیز'], ['Hashimoto thyroiditis', 'تیروئید'], ['pheochromocytoma', 'فوق‌کلیه'], ['insulinoma', 'پانکراس'], ['PCOS', 'تخمدان']]),
          T('بیشتر بیماری‌های غدد درون‌ریز یا از ترشح زیاد هستند یا از ترشح کم یک هورمون.', true, 'درست؛ این ساده‌ترین نقشه ذهنی برای کل دستگاه است.'),
          M(`${e('<b>endocrinologist</b>')} چه کسی است؟`, ['پزشک متخصص بیماری‌های غدد و هورمون‌ها', 'متخصص سم‌ها', 'جراح قلب', 'متخصص پوست'], 'endocrin/o + -logist. سم‌شناس toxicologist است.'),
          W('واژه‌ای بساز به معنی «بیماری غدد درون‌ریز»', ['endocrin/o', '-pathy'], ['-logist', 'aden/o', '-itis'], 'endocrin/o + -pathy = endocrinopathy.'),
          S('املای انگلیسی «متخصص غدد» را بنویس', 'endocrinologist', 'endocrin/o + -logist.', 'endocrino…'),
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
    { id: 'lx-0', w: 'lx', lv: 0, name: 'نامه‌رسان', title: 'پیام‌رسان شیمیایی', shape: 'envelope', color: '#8C96F0', acc: ['sparkle'], bio: 'هر هورمون یک نامه است و او پستچی خون! نامه را فقط به سلولی می‌دهد که گیرنده درست دارد. شعارش: «endo یعنی درون، به خون می‌ریزم!»' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'پسوندو', title: 'استاد ‎-ism و ‎-ectomy', shape: 'book', color: '#4F5BD5', acc: ['glasses'], bio: 'لغت‌نامه‌ای زنده که هر واژه را از آخر می‌خواند؛ هیچ‌وقت ‎-tomy را با ‎-ectomy و aden/o را با adren/o قاطی نمی‌کند.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'گیرنده', title: 'قفلِ هر کلید', shape: 'lock', color: '#6C4FD8', acc: ['crown'], bio: 'روی سطح سلول هدف می‌نشیند و فقط با کلید هورمون خودش باز می‌شود. بازخورد منفی را مثل ترموستات بلد است.' },
    { id: 'hp-0', w: 'hp', lv: 0, name: 'نخودی', title: 'غده فرمانده', shape: 'pea', color: '#B98AE8', acc: ['sparkle'], bio: 'به اندازه یک نخود است، ولی در زین ترکی نشسته و به نصف غدد بدن فرمان می‌دهد: TSH، ACTH، FSH و LH.' },
    { id: 'hp-1', w: 'hp', lv: 1, name: 'قدبلند', title: 'هورمون رشد', shape: 'ruler', color: '#8E44D9', acc: ['headband'], bio: 'سوماتوتروپین است و بیشتر شب‌ها، در خواب عمیق، کار می‌کند. زیادی‌اش پیش از بلوغ غول‌پیکری و بعد از آن آکرومگالی می‌سازد.' },
    { id: 'hp-2', w: 'hp', lv: 2, name: 'سدّی', title: 'نگهبان آب (ADH)', shape: 'drop', color: '#4FB3F0', acc: ['crown'], bio: 'هورمون ضدادراری: آب را در کلیه نگه می‌دارد. اگر غایب باشد، دیابت بی‌مزه؛ اگر زیادی کار کند، SIADH!' },
    { id: 'th-0', w: 'th', lv: 0, name: 'پروانه', title: 'تیروئید گردن', shape: 'butterfly', color: '#E77B6E', acc: ['sparkle'], bio: 'دو بال (لوب) دارد و یک تنگه در وسط. پدال گاز سوخت‌وساز بدن است: زیاد شود تند و داغ، کم شود کند و سرد.' },
    { id: 'th-1', w: 'th', lv: 1, name: 'یُدی', title: 'کریستال ید', shape: 'hex', color: '#7A3FD1', acc: ['glasses'], bio: 'بدون او T4 و T3 ساخته نمی‌شوند. چهار تا که باشند تیروکسین، سه تا که باشند تری‌یدوتیرونین. عاشق نمک یددار است.' },
    { id: 'th-2', w: 'th', lv: 2, name: 'کلسی', title: 'نگهبان کلسیم', shape: 'bone', color: '#FBF1E3', acc: ['crown'], bio: 'پاراتیروئیدها او را از استخوان به خون می‌آورند و کلسی‌تونین برش می‌گرداند. اگر کم شود، عضله‌ها گرفتار تتانی می‌شوند.' },
    { id: 'ad-0', w: 'ad', lv: 0, name: 'کلاهی', title: 'کلاه کلیه', shape: 'hat', color: '#F2B33D', acc: ['sparkle'], bio: 'روی هر کلیه یک کلاه مثلثی است: قشرش «نمک، قند و جنس» می‌سازد و مغزش آدرنالین.' },
    { id: 'ad-1', w: 'ad', lv: 1, name: 'آدرنا', title: 'جنگ یا گریز', shape: 'flame', color: '#FF7A45', acc: ['headband'], bio: 'در یک چشم به هم زدن قلب را تند، مردمک را گشاد و قند خون را بالا می‌برد. در آنافیلاکسی اولین نجات‌دهنده است.' },
    { id: 'ad-2', w: 'ad', lv: 2, name: 'نمکی', title: 'استاد آلدوسترون', shape: 'salt', color: '#E8892B', acc: ['crown'], bio: 'سدیم را نگه می‌دارد و پتاسیم را بیرون می‌اندازد. در آدیسون غایب است و در سندرم کان بیش از حد شلوغ می‌کند.' },
    { id: 'pa-0', w: 'pa', lv: 0, name: 'جزیره', title: 'جزیره لانگرهانس', shape: 'island', color: '#3FB6A8', acc: ['sparkle'], bio: 'وسط دریای سلول‌های گوارشی پانکراس زندگی می‌کند؛ سلول‌های بتایش انسولین و سلول‌های آلفایش گلوکاگون می‌سازند.' },
    { id: 'pa-1', w: 'pa', lv: 1, name: 'کلیدو', title: 'کلید انسولین', shape: 'key', color: '#1E88E5', acc: ['glasses'], bio: 'در سلول را باز می‌کند تا گلوکز وارد شود. در دیابت نوع ۱ گم شده و در نوع ۲ قفل‌ها زنگ زده‌اند.' },
    { id: 'pa-2', w: 'pa', lv: 2, name: 'قندسنج', title: 'پایشگر قند', shape: 'meter', color: '#1565C0', acc: ['crown'], bio: 'با یک قطره خون، قند را می‌گوید؛ عاشق HbA1c زیر ۷ است و همیشه یادآوری می‌کند پای دیابتی را هر روز ببینی.' },
    { id: 'dx-0', w: 'dx', lv: 0, name: 'مهتاب', title: 'نگهبان خواب', shape: 'moon', color: '#6C7BD9', acc: ['sparkle'], bio: 'ملاتونین اپی‌فیز است؛ با تاریکی بیدار می‌شود و ساعت شبانه‌روزی بدن را کوک می‌کند.' },
    { id: 'dx-1', w: 'dx', lv: 1, name: 'تیموسی', title: 'مدرسه سلول T', shape: 'shield', color: '#D94F7B', acc: ['glasses'], bio: 'پشت جناغ، در کودکی سلول‌های T را آموزش می‌دهد و بعد کم‌کم بازنشسته می‌شود. با thyr/o اشتباهش نگیر!' },
    { id: 'dx-2', w: 'dx', lv: 2, name: 'آزمایشگر', title: 'کارآگاه هورمون‌ها', shape: 'tube', color: '#A8345B', acc: ['cape', 'crown'], bio: 'از TSH و HbA1c تا RAIU و MRI؛ هر بیماری غده‌ای را با «زیاد یا کم» پیدا می‌کند و پرونده را حل می‌کند.' }
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
      id: 'r1', w: 'hp', title: 'انگشتری که دیگر جا نمی‌شد', who: 'مرد ۴۲ ساله، راننده',
      brief: 'آقای راننده می‌گوید در چند سال اخیر انگشتر ازدواجش تنگ شده، شماره کفشش بزرگ‌تر شده و دندان‌هایش از هم فاصله گرفته‌اند. از سردرد و عرق زیاد هم شاکی است. در معاینه، فک پایین جلو آمده و دست‌ها پهن و ضخیم‌اند.',
      chart: [['شکایت', 'تنگ شدن انگشتر و کفش، سردرد'], ['معاینه', 'فک پایین بزرگ، دست‌های پهن'], ['GH و IGF-1', 'بالا'], ['MRI', 'آدنوم هیپوفیز، زین ترکی پهن‌شده']],
      fig: { a: ['acromegaly-drawing', 'acromegaly-hands'], l: ['نمای صورت', 'دست‌ها'] },
      steps: [
        M('تشخیص', 'محتمل‌ترین تشخیص چیست؟', ['acromegaly', 'gigantism', 'myxedema', 'Cushing syndrome'], 'GH زیاد «پس از» بلوغ ← درشتی انتهاها و صورت.'),
        M('واژه', 'acromegaly از چه قطعه‌هایی ساخته شده است؟', ['acr/o (انتهاها) + -megaly (بزرگی)', 'acro- (بالا) + mega (زیاد)', 'acr/o (اسید) + -emia', 'a- (بدون) + cromegaly'], 'acr/o = extremities.'),
        M('علت', 'شایع‌ترین علت این بیماری چیست؟', ['pituitary adenoma', 'Hashimoto thyroiditis', 'insulinoma', 'pheochromocytoma'], 'تومور خوش‌خیم هیپوفیز که GH زیادی می‌سازد.'),
        T('تصویر', 'در MRI، تومور در زین ترکی (sella turcica) دیده می‌شود.', true, 'هیپوفیز در زین ترکی استخوان اسفنوئید قرار دارد.'),
        M('درمان', 'روش رایج جراحی برای برداشتن این تومور چیست؟', ['transsphenoidal adenomectomy از راه بینی', 'thyroidectomy', 'laparoscopic adrenalectomy', 'pancreatectomy'], 'از راه بینی و سینوس اسفنوئید، بدون باز کردن جمجمه.'),
        S('املا', 'املای «هیپوفیز» (نام علمی) را بنویس', 'hypophysis', 'hypo- (زیر) + physis (رویش).', 'hypo…')
      ]
    },
    {
      id: 'r2', w: 'hp', title: 'تشنگی بی‌پایان پس از تصادف', who: 'Marcy Capell، خانم ۲۸ ساله',
      brief: 'مارسی پس از تصادف رانندگی و ضربه شدید به سر بستری شده است. از روز دوم، هر ساعت مقدار زیادی ادرار بی‌رنگ دفع می‌کند و مدام آب می‌خواهد. قند خونش طبیعی است.',
      chart: [['سابقه', 'ضربه سر (head injury)'], ['ادرار', 'بیش از ۸ لیتر در روز، بسیار رقیق'], ['قند خون', 'طبیعی'], ['سدیم سرم', 'رو به افزایش']],
      fig: { a: 'adh', l: [] },
      steps: [
        M('عضو', 'کدام بخش احتمالاً آسیب دیده است؟', ['هیپوتالاموس یا هیپوفیز خلفی', 'پانکراس', 'تیروئید', 'قشر فوق‌کلیه'], 'ساخت (هیپوتالاموس) یا آزادسازی (هیپوفیز خلفی) ADH مختل شده.'),
        M('تشخیص', 'تشخیص چیست؟', ['diabetes insipidus', 'diabetes mellitus', 'SIADH', 'Addison disease'], 'ADH کم ← ادرار زیاد و رقیق؛ قند طبیعی است.'),
        P('واژه', 'هر نشانه را به نامش وصل کن', [['ادرار زیاد', 'polyuria'], ['تشنگی زیاد', 'polydipsia'], ['هورمون کم', 'ADH'], ['اختصار بیماری', 'DI']]),
        T('افتراق', 'در این بیمار، ادرار پر از قند است.', false, 'نادرست؛ ادرار بی‌قند است (insipidus = بی‌مزه). قند ادرار نشانه diabetes mellitus است.'),
        M('درمان', 'کدام دارو کمبود را جبران می‌کند؟', ['vasopressin (شکل مصنوعی ADH)', 'insulin', 'levothyroxine', 'prednisone'], 'هورمون کمبود را جایگزین می‌کنیم.'),
        S('املا', 'املای «هورمون ضدادراری» (کامل، فقط واژه اول) را بنویس', 'antidiuretic', 'anti- + diuretic.', 'anti…')
      ]
    },
    /* ================= تیروئید و پاراتیروئید ================= */
    {
      id: 'r3', w: 'th', title: 'معلمی که آرام نمی‌گرفت', who: 'Jasmine، معلم ۳۵ ساله',
      brief: 'همسر ژاسمین می‌گوید چند ماه است او بیش از حد پرانرژی است، دائم کار می‌کند و شب‌ها نمی‌خوابد. ژاسمین احساس اضطراب و لرزش دارد، گرما را تحمل نمی‌کند و زیاد عرق می‌کند. وزن کم کرده و چشم‌هایش بیرون زده‌اند. پزشک تیروئید بزرگی لمس می‌کند و ضربانش تند است.',
      chart: [['شکایت', 'بی‌خوابی، اضطراب، تعریق، کاهش وزن'], ['معاینه', 'exophthalmos، goiter، tachycardia'], ['آزمایش', 'T3 و T4 بالا، TSH پایین'], ['درمان', 'Tapazole (methimazole) + قطره چشم']],
      fig: { a: ['graves-eyes', 'diffuse-goiter'], l: ['بیرون‌زدگی چشم', 'گواتر منتشر'] },
      steps: [
        M('تشخیص', 'تشخیص پزشک چیست؟', ['Graves disease', 'Hashimoto thyroiditis', 'myxedema', 'thyroid carcinoma'], 'پرکاری خودایمنی تیروئید با گواتر و اگزوفتالمی.'),
        M('واژه', 'tachycardia یعنی…', ['ضربان تند قلب', 'ضربان کند قلب', 'فشار خون بالا', 'تنفس تند'], 'tachy- (تند) + cardi/o (قلب) + -ia.'),
        M('آزمایش', 'چرا TSH بیمار پایین است؟', ['T3 و T4 زیاد با بازخورد منفی TSH را مهار کرده‌اند', 'هیپوفیز آسیب دیده است', 'ید کافی نیست', 'آزمایش اشتباه است'], 'در گریوز، آنتی‌بادی‌ها تیروئید را روشن نگه می‌دارند و هیپوفیز ساکت می‌شود.'),
        P('درمان', 'هر گزینه درمانی را به توضیحش وصل کن', [['antithyroid drug', 'مهار ساخت هورمون (Tapazole)'], ['radioactive iodine', 'تخریب بافت پرکار'], ['thyroidectomy', 'برداشتن جراحی غده'], ['eye drops', 'تسکین خشکی چشم']]),
        T('پیگیری', 'پس از چند ماه درمان، بیمار بهتر می‌خوابد و کمی وزن اضافه کرده است؛ یعنی دارو مؤثر بوده است.', true, 'درست؛ هدف رسیدن به حالت euthyroid است.'),
        S('املا', 'املای «بیرون‌زدگی چشم» را بنویس', 'exophthalmos', 'ex- + ophthalm/o + -os.', 'exoph…')
      ]
    },
    {
      id: 'r4', w: 'th', title: 'کلسیم بالا در معاینه روتین', who: 'Beth، خانم ۵۸ ساله',
      brief: 'بث سابقه فشار خون بالا (HTN) و جراحی برداشتن بخشی از کلیه به علت سنگ کلیه دارد. در معاینه روتین، کلسیم سرم ۱۰٫۸ میلی‌گرم در دسی‌لیتر است. در جراحی، پاراتیروئید فوقانی راست بزرگ است و برداشته می‌شود؛ پاتولوژی آدنوم را تأیید می‌کند. روز بعد، بث از گزگز و بی‌حسی دور دهان شاکی است.',
      chart: [['سابقه', 'HTN، partial nephrectomy برای renal calculi'], ['کلسیم سرم', '10.8 mg/dL (بالا)'], ['جراحی', 'برداشتن پاراتیروئید فوقانی راست'], ['روز بعد', 'perioral numbness، کلسیم پایین']],
      fig: { a: ['parathyroid', 'calcium'], l: ['چهار پاراتیروئید', 'تعادل کلسیم'] },
      steps: [
        M('تشخیص', 'علت کلسیم بالای بث چیست؟', ['hyperparathyroidism ناشی از آدنوم', 'hypoparathyroidism', 'Graves disease', 'کمبود ویتامین D'], 'PTH زیاد ← کلسیم از استخوان به خون.'),
        M('واژه', 'renal calculi یعنی…', ['سنگ‌های کلیه', 'سنگ کیسه صفرا', 'زخم معده', 'کیست کلیه'], 'ren/o (کلیه) + calculi (سنگ‌ها): عارضه کلسیم بالا.'),
        M('اختصار', 'HTN مخفف چیست؟', ['hypertension', 'hypothyroidism', 'hyperthermia', 'hormone therapy'], 'فشار خون بالا.'),
        M('عارضه', 'گزگز دور دهان (perioral numbness) پس از جراحی نشانه چیست؟', ['hypocalcemia (کلسیم پایین)', 'hypercalcemia', 'hypoglycemia', 'hyperkalemia'], 'غدد باقی‌مانده هنوز «خواب»اند و کلسیم افت کرده است.'),
        T('درمان', 'به بث یک آمپول calcium gluconate داده شد و کلسیمش در دو روز بهتر شد.', true, 'درست؛ درمان کمبود کلسیم، جایگزینی کلسیم است.'),
        S('املا', 'املای «برداشتن پاراتیروئید» را بنویس', 'parathyroidectomy', 'parathyroid/o + -ectomy.', 'parathyroid…')
      ]
    },
    {
      id: 'r5', w: 'th', title: 'گره‌ای در لوب راست', who: 'خانم ۵۹ ساله',
      brief: 'در معاینه روتین یک ندول در لوب راست تیروئید پیدا شده است. بیمار از گرفتگی صدا، اشکال در بلع، حساسیت موضعی و برآمدگی خفیف سمت راست گردن شاکی است. می‌گوید مضطرب است و شب‌ها خوب نمی‌خوابد.',
      chart: [['معاینه', 'ندول لوب راست، برآمدگی گردن'], ['آزمایش', 'TSH پایین، T4 بالا'], ['thyroid scan', 'ندول «گرم» (پرجذب)'], ['echography', 'ندول جامد']],
      fig: { a: ['thyroid', 'nodular-goiter'], l: ['آناتومی تیروئید', 'گواتر گره‌دار'] },
      steps: [
        M('واژه', 'dysphagia یعنی…', ['اشکال در بلع', 'اشکال در سخن گفتن', 'گرفتگی صدا', 'تنگی نفس'], 'dys- (دشوار) + -phagia (خوردن، بلعیدن). با dysphasia (اشکال در گفتار) اشتباه نکن.'),
        M('واژه', 'نام علمی بزرگی تیروئید چیست؟', ['thyromegaly', 'adrenomegaly', 'acromegaly', 'splenomegaly'], 'thyr/o + -megaly؛ همان goiter.'),
        M('آزمایش', 'کدام آزمایش جامد یا کیستی بودن ندول را نشان می‌دهد؟', ['thyroid echography (سونوگرافی)', 'RAIU', 'TSH', 'HbA1c'], 'سونوگرافی بافت را با امواج صوتی می‌بیند.'),
        T('تفسیر', 'ندول «گرم» در اسکن یعنی ید زیادی جذب می‌کند و می‌تواند علت پرکاری باشد.', true, 'درست؛ ندول پرکار (toxic nodule) معمولاً خوش‌خیم است.'),
        M('درمان', 'اگر فقط یک لوب درگیر باشد، کدام جراحی کافی است؟', ['lobectomy', 'thyroparathyroidectomy', 'hypophysectomy', 'adrenalectomy'], 'برداشتن همان لوب.'),
        S('املا', 'املای اختصار «هورمون محرک تیروئید» را بنویس', 'TSH', 'thyroid-stimulating hormone.', 'TS…')
      ]
    },
    /* ================= فوق‌کلیه ================= */
    {
      id: 'r6', w: 'ad', title: 'چاقی، پرمویی و استخوان شکننده', who: 'خانم ۵۶ ساله',
      brief: 'بیمار برای بررسی ضعف، ورم و چاقی به متخصص غدد ارجاع شده است. با وجود رژیم و ورزش، همیشه اضافه‌وزن داشته و اخیراً پس از یک سرفه، دنده‌اش شکسته است (پوکی استخوان). صورت پف‌کرده و سبیل لب بالا دارد. سطح کورتیزول بالاست و CT توده‌ای در قشر فوق‌کلیه راست نشان می‌دهد.',
      chart: [['شکایت', 'weakness، edema، obesity، hirsutism'], ['سابقه', 'osteoporosis، شکستگی دنده'], ['RIA', 'کورتیزول بالا'], ['CT', 'adenoma در قشر فوق‌کلیه راست']],
      fig: { a: ['cushing-signs', 'cushing-face'], l: ['نشانه‌های کوشینگ', 'صورت ماه‌گون'] },
      steps: [
        M('واژه', 'متخصص بیماری‌های غدد درون‌ریز را چه می‌نامند؟', ['endocrinologist', 'nephrologist', 'toxicologist', 'hematologist'], 'endocrin/o + -logist.'),
        M('واژه', 'موی زیاد صورت در زن چه نام دارد؟', ['hirsutism', 'virilism', 'gynecomastia', 'alopecia'], 'hirsut/o (پرمو) + -ism.'),
        M('تشخیص', 'تشخیص نهایی چیست؟', ['Cushing syndrome ناشی از آدنوم قشر فوق‌کلیه', 'Addison disease', 'pheochromocytoma', 'Conn syndrome'], 'کورتیزول زیاد + توده قشر = کوشینگ با منشأ فوق‌کلیه.'),
        M('هورمون', 'هورمون استروئیدی قشر فوق‌کلیه که کربوهیدرات‌ها را تنظیم می‌کند کدام است؟', ['cortisol (glucocorticoid)', 'aldosterone', 'epinephrine', 'thymosin'], 'gluco-cortico-id: قند + قشر.'),
        M('درمان', 'درمان این بیمار چیست؟', ['adrenalectomy سمت راست', 'thyroidectomy', 'تزریق انسولین', 'ید رادیواکتیو'], 'برداشتن فوق‌کلیه درگیر (اغلب لاپاراسکوپیک).'),
        S('املا', 'املای «برداشتن فوق‌کلیه» را بنویس', 'adrenalectomy', 'adrenal/o + -ectomy.', 'adrenal…')
      ]
    },
    {
      id: 'r7', w: 'ad', title: 'خستگی و پوست برنزی', who: 'خانم ۳۴ ساله',
      brief: 'بیمار چند ماه است خسته و بی‌اشتهاست، وزن کم کرده و هنگام برخاستن سرش گیج می‌رود. هوس نمک دارد. پوستش، به‌ویژه در چین‌های کف دست و لثه‌ها، تیره شده است. فشار خون پایین و سدیم کم و پتاسیم بالاست.',
      chart: [['شکایت', 'خستگی، کاهش وزن، سرگیجه'], ['معاینه', 'hyperpigmentation، فشار خون پایین'], ['Na+ / K+', 'سدیم پایین، پتاسیم بالا'], ['کورتیزول صبح', 'بسیار پایین؛ ACTH بالا']],
      fig: { a: 'cushing-addison', l: [] },
      steps: [
        M('تشخیص', 'تشخیص چیست؟', ['Addison disease (adrenal insufficiency)', 'Cushing syndrome', 'Graves disease', 'diabetes mellitus'], 'کمبود کورتیزول و آلدوسترون با پوست برنزی.'),
        P('الکترولیت', 'هر واژه را به معنی‌اش وصل کن', [['hyponatremia', 'سدیم خون پایین'], ['hyperkalemia', 'پتاسیم خون بالا'], ['hypotension', 'فشار خون پایین'], ['hyperpigmentation', 'تیرگی پوست']]),
        M('مکانیسم', 'چرا پوست بیمار تیره شده است؟', ['ACTH زیاد هیپوفیز، ملانوسیت‌ها را هم تحریک می‌کند', 'آفتاب‌سوختگی', 'زردی کبدی', 'کمبود ید'], 'ACTH و MSH از یک مولکول مادر ساخته می‌شوند.'),
        M('علت', 'شایع‌ترین علت این بیماری امروز چیست؟', ['تخریب خودایمنی قشر فوق‌کلیه', 'تومور مدولا', 'مصرف زیاد کورتون', 'کمبود ید'], 'adrenalitis خودایمنی.'),
        T('درمان', 'درمان شامل جایگزینی hydrocortisone و یک مینرالوکورتیکوئید است و در بیماری‌های حاد دوز باید بیشتر شود.', true, 'درست؛ وگرنه «بحران آدیسونی» رخ می‌دهد.'),
        S('املا', 'املای «کم‌کاری فوق‌کلیه» را بنویس', 'hypoadrenalism', 'hypo- + adrenal/o + -ism.', 'hypoad…')
      ]
    },
    /* ================= پانکراس و دیابت ================= */
    {
      id: 'r8', w: 'pa', title: 'دیابت تازه در دختر ۱۲ ساله', who: 'دختر ۱۲ ساله',
      brief: 'دختری ۱۲ ساله با دو ماه کاهش وزن، خستگی، پرادراری و پرنوشی به پزشک اطفال مراجعه کرده است. پدربزرگ، مادر و برادرش دیابت نوع ۱ دارند. قند ناشتا ۳۰۰ میلی‌گرم در ۱۰۰ میلی‌لیتر و نوار ادرار مثبت از نظر قند است. هنگام بستری در وضعیت کتواسیدوز است و با انسولین به‌سرعت بهتر می‌شود.',
      chart: [['تشخیص پذیرش', 'hyperglycemia، ketoacidosis، glycosuria'], ['FBS', '300 mg/100 mL'], ['سابقه خانوادگی', 'T1DM در سه نفر'], ['تشخیص نهایی', 'new-onset type 1 diabetes mellitus']],
      fig: { a: ['three-p', 'dm-types'], l: ['سه نشانه کلاسیک', 'نوع ۱ و ۲'] },
      steps: [
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['hyperglycemia', 'قند خون بالا'], ['glycosuria', 'قند در ادرار'], ['ketoacidosis', 'اسیدوز ناشی از کتون'], ['polydipsia', 'تشنگی زیاد']]),
        M('اختصار', 'FBS یعنی…', ['قند خون ناشتا', 'قند خون پس از غذا', 'آزمون تحمل گلوکز', 'هموگلوبین گلیکوزیله'], 'fasting blood sugar.'),
        M('نوع', 'این بیمار کدام نوع دیابت دارد؟', ['نوع ۱: تخریب سلول‌های بتا و نیاز به انسولین', 'نوع ۲: مقاومت به انسولین', 'دیابت بارداری', 'دیابت بی‌مزه'], 'سن کم، شروع سریع، کتواسیدوز ← نوع ۱.'),
        M('آزمایش', 'روز بعد کدام آزمون تشخیص را تأیید کرد؟', ['glucose tolerance test', 'thyroid scan', 'RAIU', 'serum cortisol'], 'GTT توانایی بدن در مصرف گلوکز را می‌سنجد.'),
        O('آموزش', 'برنامه ترخیص را مرتب کن', ['آموزش تزریق انسولین به خانواده', 'سنجش قند خون دو بار در روز با glucometer', 'تماس با مطب برای تنظیم دوز', 'مراجعه دو هفته بعد'], 'آموزش خانواده رکن درمان دیابت نوع ۱ است.'),
        S('املا', 'املای «کتواسیدوز» را بنویس', 'ketoacidosis', 'ket/o + acid + -osis.', 'keto…')
      ]
    },
    {
      id: 'r9', w: 'pa', title: 'تعطیلات پرخطر', who: 'Kelly Post، خانم ۴۸ ساله با اضافه‌وزن',
      brief: 'کلی در دو ماه گذشته ۵ کیلو وزن کم کرده، خسته و تشنه است. پزشکش او را به متخصص غدد ارجاع داده، ولی کلی تصمیم گرفته تا بعد از تعطیلات صبر کند. پس از چند مهمانی و پرخوری، صبح با سرگیجه، عرق سرد و گرسنگی شدید بیدار شده است. در اورژانس قند خونش خیلی پایین است. پزشک به دلیل اضافه‌وزن، به مقاومت به انسولین شک دارد.',
      chart: [['پیش از تعطیلات', 'کاهش وزن، خستگی، تشنگی'], ['اورژانس', 'سرگیجه، diaphoresis، گرسنگی'], ['قند خون', 'بسیار پایین'], ['وزن', 'اضافه‌وزن']],
      fig: { a: 'glucose-balance', l: [] },
      steps: [
        M('مشکل زمینه‌ای', 'پزشک اول به چه بیماری‌ای شک کرده بود؟', ['diabetes mellitus', 'diabetes insipidus', 'Addison disease', 'Graves disease'], 'کاهش وزن، خستگی و تشنگی ← دیابت شیرین.'),
        M('اورژانس', 'وضعیت کلی در اورژانس چیست؟', ['hypoglycemia', 'hyperglycemia', 'ketoacidosis', 'thyroid storm'], 'قند پایین با عرق سرد و گرسنگی.'),
        M('واژه', 'diaphoresis یعنی…', ['تعریق شدید', 'تنفس سریع', 'ادرار زیاد', 'تهوع'], 'profuse sweating.'),
        M('نوع', 'با توجه به اضافه‌وزن و مقاومت به انسولین، کلی احتمالاً کدام نوع دیابت را دارد؟', ['نوع ۲ (NIDDM)', 'نوع ۱ (IDDM)', 'دیابت بارداری', 'دیابت بی‌مزه'], 'مقاومت به انسولین در فرد چاق ← نوع ۲.'),
        M('آزمایش', 'آزمایشی که قند را حدود ۲ ساعت پس از غذا می‌سنجد چیست؟', ['postprandial blood sugar', 'FBS', 'RAIU', 'TFT'], 'post- (پس از) + -prandial (وعده غذا).'),
        T('سبک زندگی', 'کاهش وزن، رژیم متعادل و ورزش منظم اولین قدم درمان کلی است.', true, 'درست؛ در صورت نیاز داروی خوراکی مثل metformin اضافه می‌شود.')
      ]
    },
    {
      id: 'r10', w: 'pa', title: 'پاشنه‌ای که درد نداشت', who: 'مرد ۵۹ ساله با دیابت نوع ۱ طولانی',
      brief: 'بیمار با دیابت نوع ۱ که هرگز خوب کنترل نشده، با پاشنه چپ داغ و متورم از اورژانس پذیرش شده است. انگشت بزرگ پای راستش قبلاً قطع شده است. در پاشنه چپ زخمی باز و بدبو با قرمزی تا مچ پا دیده می‌شود. نبض‌های پا لمس نمی‌شوند و بیمار حس عمقی ندارد.',
      chart: [['S', 'پاشنه چپ داغ و متورم'], ['O', 'ulceration، erythema تا malleolus، بدون نبض و حس'], ['A', 'عفونت غیرقابل نجات پاشنه؛ peripheral diabetic neuropathy'], ['P', 'مشاوره عروق برای قطع عضو، مشاوره عفونی']],
      fig: { a: 'dm-complications', l: [] },
      steps: [
        P('واژه', 'هر واژه یادداشت را به معنی‌اش وصل کن', [['erythema', 'قرمزی پوست'], ['ulceration', 'زخم باز'], ['calcaneal', 'مربوط به پاشنه'], ['malleolus', 'قوزک پا']]),
        M('عارضه', 'چرا بیمار درد کمی حس می‌کند؟', ['peripheral neuropathy (آسیب عصب‌های محیطی)', 'retinopathy', 'nephropathy', 'hypoglycemia'], 'دیابت طولانی عصب‌ها را آسیب می‌زند.'),
        M('ساختار یادداشت', 'در یادداشت SOAP، حرف A یعنی…', ['Assessment (ارزیابی)', 'Allergy', 'Analysis of lab', 'Amputation'], 'Subjective، Objective، Assessment، Plan.'),
        T('عامل دوم', 'خون‌رسانی ضعیف (بدون نبض) در کنار نوروپاتی، زخم را غیرقابل ترمیم کرده است.', true, 'درست؛ بیماری عروق محیطی هم عارضه دیابت است.'),
        M('پیشگیری', 'کدام توصیه بیشترین نقش را در پیشگیری از این وضعیت دارد؟', ['معاینه روزانه پاها و کنترل دقیق قند', 'نوشیدن آب بیشتر', 'خوردن نمک یددار', 'مصرف ملاتونین'], 'پای دیابتی قابل پیشگیری است.'),
        S('املا', 'املای «نوروپاتی» را بنویس', 'neuropathy', 'neur/o + -pathy.', 'neuro…')
      ]
    },
    /* ================= غدد دیگر، تشخیص و درمان ================= */
    {
      id: 'r11', w: 'dx', title: 'یادداشت پیگیری دیابت نوع ۲', who: 'خانم ۶۰ ساله',
      brief: 'خانمی ۶۰ ساله با اضافه‌وزن خفیف برای پیگیری روتین دیابت نوع ۲ (شروع در ۵۳ سالگی) آمده است. از آخرین ویزیت ۱۳ کیلو وزن کم کرده و طبق توصیه متخصص تغذیه رژیم دارد. شکایتی از پرخوری یا تشنگی ندارد. HbA1c برابر ۷٫۸ با هدف کمتر از ۷ است. تیروئید بدون ندول لمس شد. معاینه عصبی و پا در محدوده طبیعی است.',
      chart: [['PMHx', 'T2DM از ۵۳ سالگی'], ['HbA1c', '7.8% (هدف < 7.0)'], ['معاینه', 'تیروئید بدون ندول؛ Foot exam: WNL'], ['برنامه', 'HbA1c سه ماه بعد (ناشتایی لازم نیست)']],
      fig: { a: 'glucose-tests', l: [] },
      steps: [
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['PMHx', 'سابقه پزشکی گذشته'], ['WNL', 'در محدوده طبیعی'], ['T2DM', 'دیابت نوع ۲'], ['ROS', 'مرور دستگاه‌ها']]),
        M('واژه', 'polyphagia یعنی…', ['پرخوری (گرسنگی زیاد)', 'تشنگی زیاد', 'ادرار زیاد', 'کاهش وزن'], 'poly- + -phagia.'),
        M('تفسیر', 'HbA1c برابر ۷٫۸٪ یعنی…', ['قند در ۳ ماه اخیر بالاتر از هدف بوده است', 'دیابت درمان شده است', 'قند امروز صبح ۷٫۸ بوده', 'بیمار افت قند دارد'], 'هدف رایج زیر ۷٪ است.'),
        T('آزمایش', 'برای HbA1c بعدی بیمار باید ناشتا بیاید.', false, 'نادرست؛ HbA1c به ناشتایی نیاز ندارد.'),
        M('معاینه', 'چرا تیروئید این بیمار هم معاینه شد؟', ['بیماری‌های خودایمنی و غددی گاهی با هم همراه‌اند و تیروئید غده‌ای در دسترس است', 'چون دیابت از تیروئید است', 'برای سنجش قند', 'برای سنجش کلسیم'], 'معاینه کامل غدد بخشی از پیگیری بیمار دیابتی است.'),
        S('املا', 'املای «هموگلوبین گلیکوزیله» (فقط واژه اول) را بنویس', 'glycated', 'glycated hemoglobin = HbA1c.', 'glyc…')
      ]
    },
    {
      id: 'r12', w: 'dx', title: 'قاعدگی نامنظم و جوش', who: 'خانم ۲۴ ساله',
      brief: 'بیمار از قاعدگی‌های نامنظم و گاهی چندماهه، جوش صورت و موی زیاد چانه و شکم شاکی است. اضافه‌وزن دارد و قند ناشتایش در محدوده پیش‌دیابت است. سونوگرافی تخمدان‌ها را پر از کیست‌های کوچک نشان می‌دهد. سطح آندروژن‌ها بالاست.',
      chart: [['شکایت', 'قاعدگی نامنظم، آکنه، hirsutism'], ['قند ناشتا', '110 mg/dL (IFG)'], ['سونوگرافی', 'تخمدان‌های پلی‌کیستیک'], ['هورمون‌ها', 'آندروژن بالا']],
      fig: { a: 'gonads', l: [] },
      steps: [
        M('تشخیص', 'تشخیص محتمل چیست؟', ['polycystic ovary syndrome (PCOS)', 'Addison disease', 'hypothyroidism', 'Cushing disease'], 'آندروژن زیاد + تخمک‌گذاری نامنظم + تخمدان پلی‌کیستیک.'),
        M('واژه', 'قطع کامل قاعدگی در سن باروری چه نام دارد؟', ['amenorrhea', 'galactorrhea', 'dysmenorrhea', 'menorrhagia'], 'a- (بدون) + men/o (قاعدگی) + -rrhea (جریان).'),
        M('اختصار', 'IFG یعنی…', ['اختلال قند ناشتا (پیش‌دیابت)', 'دیابت نوع ۱', 'آزمون تحمل گلوکز', 'گلوکز ادرار'], 'impaired fasting glucose.'),
        T('ارتباط', 'بسیاری از بیماران PCOS مقاومت به انسولین دارند.', true, 'درست؛ به همین دلیل کاهش وزن و گاهی metformin کمک می‌کند.'),
        P('هورمون', 'هر هورمون را به منبعش وصل کن', [['estrogen', 'تخمدان'], ['androgen', 'تخمدان و قشر فوق‌کلیه'], ['FSH و LH', 'هیپوفیز قدامی'], ['insulin', 'سلول‌های بتای پانکراس']]),
        S('املا', 'املای «پرمویی» را بنویس', 'hirsutism', 'hirsut/o + -ism.', 'hirsu…')
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
    ['Lx', 'اگر پسوند با حرف صدادار شروع شود، واکه رابط o حذف می‌شود: thyr/o + -itis = thyroiditis.'],
    ['Lx', 'معنی واژه را از پسوند شروع کن: hypo/glyc/emia یعنی «وضعیتِ خونِ کم‌قند».'],
    ['Lx', '‎-tomy یعنی برش و ‎-ectomy یعنی برداشتن؛ ec- در یونانی یعنی «بیرون».'],
    ['Lx', 'aden/o هر غده‌ای است، ولی adren/o فقط غده فوق‌کلیه؛ یک r معنی را عوض می‌کند.'],
    ['Lx', 'thym/o تیموس در قفسه سینه است و thyr/o تیروئید در گردن.'],
    ['Lx', 'endocrine یعنی «ترشح به درون» (به خون) و exocrine یعنی «ترشح به بیرون» (از راه مجرا).'],
    ['Lx', 'kal/i از kalium (نماد K) و natr/o از natrium (نماد Na) آمده است.'],
    ['Lx', 'hypercalcemia کلسیم بالاست و hyperkalemia پتاسیم بالا؛ قاطی نکن!'],
    ['Lx', 'glucose قند است، glycogen انبار قند و glucagon هورمونی که انبار را باز می‌کند.'],
    ['Lx', 'polyuria نشانه دیابت است؛ polyurea یک پلیمر صنعتی!'],
    ['Hp', 'هیپوفیز به اندازه یک نخود است و در زین ترکی (sella turcica) نشسته است.'],
    ['Hp', 'ADH و اکسی‌توسین در هیپوتالاموس ساخته و در هیپوفیز خلفی ذخیره می‌شوند.'],
    ['Hp', '‎-tropin یعنی «محرکِ»: thyrotropin تیروئید را و gonadotropin غدد جنسی را تحریک می‌کند.'],
    ['Hp', 'هورمون رشد بیشتر در آغاز خواب عمیق ترشح می‌شود.'],
    ['Hp', 'GH زیاد پیش از بلوغ: غول‌پیکری؛ پس از بلوغ: آکرومگالی (acr/o = انتهاها).'],
    ['Hp', 'diabetes insipidus یعنی «دیابت بی‌مزه»: ادرار زیاد و رقیق از کمبود ADH.'],
    ['Hp', 'پرولاکتین شیر را می‌سازد؛ اکسی‌توسین آن را بیرون می‌راند.'],
    ['Hp', 'تومور هیپوفیز امروز معمولاً از راه بینی برداشته می‌شود: transsphenoidal.'],
    ['Th', 'thyr/o یعنی «سپر»؛ غضروف تیروئید شبیه سپر جنگجوهای یونانی است.'],
    ['Th', 'عدد در T4 و T3 تعداد اتم‌های ید است.'],
    ['Th', 'TSH را برعکس بخوان: در پرکاری تیروئید پایین و در کم‌کاری بالاست.'],
    ['Th', 'Graves «گاز می‌دهد» (پرکاری) و Hashimoto «ترمز می‌گیرد» (کم‌کاری)؛ هر دو خودایمنی‌اند.'],
    ['Th', 'exophthalmos یعنی بیرون‌زدگی چشم: ex- (بیرون) + ophthalm/o (چشم).'],
    ['Th', 'PTH کلسیم خون را بالا می‌برد و کلسی‌تونین پایین می‌آورد.'],
    ['Th', 'گزگز دور دهان پس از جراحی تیروئید؟ به کلسیم پایین و آسیب پاراتیروئید فکر کن.'],
    ['Th', 'غربالگری TSH نوزادان، کم‌کاری مادرزادی تیروئید را پیش از آسیب مغزی پیدا می‌کند.'],
    ['Ad', 'adrenal، suprarenal و epinephrine هر سه فقط می‌گویند «روی کلیه».'],
    ['Ad', 'قشر فوق‌کلیه سه S می‌سازد: Salt (آلدوسترون)، Sugar (کورتیزول)، Sex (آندروژن).'],
    ['Ad', 'cortex یعنی پوست درخت (بیرون) و medulla یعنی مغز (مرکز).'],
    ['Ad', 'آلدوسترون سدیم را نگه می‌دارد و پتاسیم را دفع می‌کند.'],
    ['Ad', 'Cushing «سندرم» به هر علت کورتیزول زیاد است؛ «بیماری» کوشینگ منشأ هیپوفیزی دارد.'],
    ['Ad', 'پوست برنزی در آدیسون از ACTH زیاد است که ملانوسیت‌ها را هم تحریک می‌کند.'],
    ['Ad', 'داروی کورتون را بعد از مصرف طولانی ناگهان قطع نکن؛ باید به‌تدریج کم شود.'],
    ['Ad', 'فئوکروموسیتوما: فشار خون حمله‌ای، سردرد، تپش و تعریق.'],
    ['Pa', 'insul/o یعنی جزیره؛ انسولین هورمون جزایر لانگرهانس است.'],
    ['Pa', 'سلول بتا انسولین (قند را پایین می‌آورد) و سلول آلفا گلوکاگون (قند را بالا می‌برد) می‌سازد.'],
    ['Pa', 'mellitus یعنی عسلی و insipidus یعنی بی‌مزه.'],
    ['Pa', 'سه P دیابت: polyuria، polydipsia، polyphagia.'],
    ['Pa', 'HbA1c میانگین قند ۲ تا ۳ ماه گذشته را نشان می‌دهد و به ناشتایی نیاز ندارد.'],
    ['Pa', 'قند ناشتای ۱۲۶ یا بیشتر، قند دو ساعته ۲۰۰ یا بیشتر، یا HbA1c برابر ۶٫۵٪ یا بیشتر: دیابت.'],
    ['Pa', 'پوست سرد و خیس با لرزش؟ افت قند. پوست خشک با تنفس عمیق و بوی میوه؟ کتواسیدوز.'],
    ['Pa', 'antihypoglycemic یعنی «ضد قند پایین»؛ پس قند را بالا می‌برد.'],
    ['Pa', 'بیمار دیابتی باید هر روز پاهایش را نگاه کند؛ نوروپاتی زخم را بی‌درد می‌کند.'],
    ['Dx', 'ملاتونین در تاریکی زیاد می‌شود و ساعت شبانه‌روزی را تنظیم می‌کند.'],
    ['Dx', 'T در «لنفوسیت T» از Thymus آمده است.'],
    ['Dx', 'RIA (رادیوایمونواسی) با RAIU (جذب ید رادیواکتیو) فرق دارد.'],
    ['Dx', 'پس از برداشتن یک غده درون‌ریز، هورمون آن باید جایگزین شود.'],
    ['Dx', 'WNL در پرونده یعنی «در محدوده طبیعی».'],
    ['Dx', 'بیشتر بیماری‌های غدد یا از ترشح زیاد یک هورمون‌اند یا از ترشح کم آن.'],
    ['', 'هر روز پنج دقیقه مرور کارت‌های لایتنر، از یک ساعت خواندن در شب امتحان مؤثرتر است.']
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
/* هورمونا — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مقادیر مرجع
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'hormona.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: 'واژه‌نامه', color: '#6C3FD1' },
    { id: 'parse', sym: '✂', name: 'تجزیه‌گر واژه', color: '#7B5CE0' },
    { id: 'roots', sym: '-o-', name: 'ریشه‌ها و پسوندها', color: '#0FA3A3' },
    { id: 'abbr', sym: 'TSH', name: 'اختصارها', color: '#1899D6' },
    { id: 'ref', sym: 'Lab', name: 'مقادیر مرجع', color: '#E5A500' }
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
      <header class="vhead"><h1>ابزارها</h1><p>واژه‌نامه کامل ${fa(L().TERMS.length)} واژه، ${fa(L().ROOTS.length)} جزء واژه و ${fa(L().ABBR.length)} اختصار؛ همه بدون اینترنت.</p></header>
      <div class="ttabs" role="tablist">${TOOLS.map(x => `<button class="ttab ${x.id === cur ? 'is-on' : ''}" data-tool="${x.id}" style="--tc:${x.color}" role="tab" aria-selected="${x.id === cur}"><span class="ttab__s">${x.sym}</span>${x.name}</button>`).join('')}</div>
      <div class="tcard">${PANES[cur]()}</div>
      <p class="disclaimer">⚕️ هورمونا ابزار آموزشی است؛ مقادیر مرجع بسته به آزمایشگاه، سن و جنس فرق می‌کنند.</p>
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
          <span class="dict__t"><b class="en-text">${esc(t.t)}</b><small>${esc(L().short(t.fa))}</small></span>
          <span class="dict__box" title="خانه لایتنر">${'●'.repeat(EA.S.cardBox(t.id))}</span>
        </button>
        ${op ? `<div class="dict__b">${(c => c ? `<span class="kchip kchip--tag"><i>${c.icon}</i>${c.name}</span> ` : '')(L().CATS.find(c => c.id === t.k))}${t.p ? `<span class="pron" dir="ltr">/${esc(t.p)}/</span>` : ''}${EA.cards.back(t)}
          <div class="dict__act">${EA.cards.canSpeak() ? `<button class="btn btn--ghost btn--sm" data-say="${t.id}">🔊 تلفظ</button>` : ''}<button class="btn btn--ghost btn--sm" data-fav="${t.id}">${fav[t.id] ? '★ نشان‌شده' : '☆ نشان کن'}</button><button class="btn btn--ghost btn--sm" data-parse="${esc(t.t)}">✂ تجزیه</button></div></div>` : ''}
      </li>`;
    }).join('')}</ul>${list.length > st.limit ? `<button class="btn btn--ghost btn--block" data-more>نمایش ${fa(Math.min(40, list.length - st.limit))} واژه دیگر</button>` : ''}`;
  }
  const dict = () => `<div class="tpane">${searchBox('جست‌وجو: goiter، دیابت، thyr…')}
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
  const SAMPLES = ['panhypopituitarism', 'thyroparathyroidectomy', 'hypoglycemia', 'adrenomegaly', 'pheochromocytoma', 'gonadotropin', 'exophthalmos', 'glycogenolysis'];
  const parse = () => `<div class="tpane">
    <p class="muted">یک واژه پزشکی بنویس تا به پیشوند، ریشه و پسوند شکسته شود. قاعده طلایی: معنی را از <b>پسوند</b> شروع کن، بعد پیشوند، و آخر ریشه‌ها.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. hypercalcemia"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: 'پیشوند', root: 'ریشه', suffix: 'پسوند' };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox('جست‌وجو: thyr، قند، \u200e-emia\u200e…')}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]}‌ها <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b class="en-text">${esc(r.a)}</b><span>${esc(r.fa)}</span><small class="en-text">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox('جست‌وجو: TSH، دیابت، hormone…')}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>اختصار</th><th>شکل کامل و معنی</th></tr>${list.map(a => `<tr><td><span class="en-text">${esc(a.a)}</span></td><td><span class="en-text abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  const REF = [
    ['قند ناشتا (FBS / FPG)', '70–99 mg/dL', '۱۰۰ تا ۱۲۵ پیش‌دیابت؛ ۱۲۶ یا بیشتر: دیابت'],
    ['قند دو ساعته (OGTT)', '< 140 mg/dL', '۱۴۰ تا ۱۹۹: اختلال تحمل گلوکز (IGT)؛ ۲۰۰ یا بیشتر: دیابت'],
    ['هموگلوبین گلیکوزیله (HbA1c)', '< 5.7 %', '۵٫۷ تا ۶٫۴ پیش‌دیابت؛ ۶٫۵ یا بیشتر: دیابت؛ هدف درمان معمولاً زیر ۷'],
    ['قند خون تصادفی', '< 140 mg/dL', '۲۰۰ یا بیشتر همراه با علائم: دیابت'],
    ['قند خون پایین', '< 70 mg/dL', 'زیر ۵۴: افت قند مهم و نیازمند درمان فوری'],
    ['هورمون محرک تیروئید (TSH)', '≈ 0.4–4.0 mIU/L', 'پرکاری تیروئید: پایین • کم‌کاری: بالا'],
    ['تیروکسین آزاد (Free T4)', '≈ 0.8–1.8 ng/dL', 'شکل فعال و غیرمتصل T4'],
    ['تری‌یدوتیرونین تام (T3)', '≈ 80–200 ng/dL', 'در پرکاری بالا می‌رود'],
    ['کلسیم تام سرم', '≈ 8.5–10.5 mg/dL', 'بالا: پرکاری پاراتیروئید • پایین: تتانی'],
    ['هورمون پاراتیروئید (PTH)', '≈ 10–65 pg/mL', 'با کلسیم سرم تفسیر می‌شود'],
    ['سدیم (Na+)', '135–145 mEq/L', 'زیر ۱۳۵: hyponatremia (مثلاً در SIADH)'],
    ['پتاسیم (K+)', '3.5–5.0 mEq/L', 'بالا در آدیسون • پایین در هیپرآلدوسترونیسم'],
    ['کورتیزول صبحگاهی', '≈ 5–25 µg/dL', 'بالا در کوشینگ • پایین در آدیسون'],
    ['پرولاکتین (زن غیرباردار)', '< 25 ng/mL', 'بالا: hyperprolactinemia و galactorrhea'],
    ['کتون خون', '< 0.6 mmol/L', 'بالاتر از ۳ همراه با اسیدوز: DKA']
  ];
  const ref = () => `<div class="tpane"><p class="muted">مقادیر تقریبی بزرگسالان، برای یادگیری؛ محدوده هر آزمایشگاه کمی فرق دارد.</p>
    <table class="mini ref"><tr><th>شاخص</th><th>محدوده</th><th>نکته</th></tr>${REF.map(r => `<tr><td>${r[0]}</td><td dir="ltr" class="ref__v">${String(r[1]).split(' ').map(x => `<span>${x}</span>`).join(' ')}</td><td>${r[2]}</td></tr>`).join('')}</table>
    ${EA.ui.figCard({ a: ['glucose-tests', 'feedback'], l: ['معیارهای تشخیص دیابت', 'بازخورد منفی محور تیروئید'] })}</div>`;

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
