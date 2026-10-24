/* تراپو • ترمینو — حیطه «timar» (Disease and Treatment)
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
  EA.APP = { name: 'تیمار', key: 'timar', title: 'تیمار • ترمینولوژی بیماری و درمان' };

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
    name: 'تیمار', key: 'timar', title: 'تیمار • ترمینولوژی بیماری و درمان', certCode: 'TM',
    subject: 'ترمینولوژی پزشکی بیماری و درمان (Disease and Treatment)',
    kicker: '🩺 ترمینولوژی پزشکی: بیماری و درمان (Disease and Treatment)',
    hello: 'سلام، من <b>تیمار</b> هستم؛',
    landP: () => `سلام، من <b>تیمار</b> هستم؛ کپسولی که از بیمارش خوب مراقبت می‌کند! این‌جا یاد می‌گیری بیماری‌ها چطور نام‌گذاری می‌شوند، میکروب‌ها و پاسخ بدن چیست، پزشک چطور معاینه و تصویربرداری می‌کند، جراح با چه پسوندها و ابزارهایی کار می‌کند و یک نسخه دارویی را چطور بخوانی؛ و هر واژه تازه را خودت <b>رمزگشایی</b> کنی. ${fa(EA.lex.TERMS.length)} واژه با تلفظ و معنی فارسی، ${fa(Object.keys(EA.IMG).length || 30)} تصویر بالینی، ${fa(EA.ART_KEYS.length)} شکل آموزشی، ${fa(EA.rounds.length)} پرونده بالینی و کارت‌های لایتنر منتظرت هستند.`,
    disclaimer: 'تیمار ابزار آموزشی است و جایگزین منابع پزشکی، قضاوت بالینی یا دستور پزشک نیست.',
    eyes: 'ده‌ها شکل آموزشی و تصویر بالینی؛ از شکل باکتری‌ها و التهاب تا معاینه، تصویربرداری، ابزار جراحی و زاویه تزریق.',
    outcomes: [
          'هر واژه بیماری را به پیشوند، ریشه و پسوند بشکنی و با پسوندهایی مثل ‎-itis، ‎-megaly و ‎-stenosis واژه تازه بسازی',
          'انواع بیماری، میکروب‌هایی مثل cocci، bacilli، virus و fungus و واژه‌های شیوع مثل epidemic و nosocomial را بشناسی',
          'پاسخ بدن به بیماری را نام ببری: inflammation، edema، phagocytosis، abscess، neoplasm و hernia',
          'شرح حال و معاینه (IPPA)، علائم حیاتی، ابزارهای معاینه و روش‌های تصویربرداری را در پرونده بخوانی',
          'پسوندهای جراحی مثل ‎-ectomy، ‎-tomy، ‎-stomy و ‎-plasty، ابزارهای اتاق عمل و درمان‌های مکمل را بفهمی',
          'راه‌های تجویز، شکل‌های دارو و اختصارهای نسخه مثل bid، prn، po و SL را بی‌اشتباه بخوانی'
        ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، شرح حال، برگه دستور پزشک و نسخه یک بیمار را مثل زبان مادری می‌خوانی.',
    obHello: 'سلام! من تیمار هستم؛ کپسولی که از بیمارش خوب مراقبت می‌کند 💊 اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان بیماری» بهترین شروع است؛ قطعه‌های واژه‌سازی آن‌جا یاد داده می‌شوند!',
    demo: () => ({
    q: 'در پرونده نوشته شده: <b dir="ltr">osteomalacia</b>. یعنی…',
    fig: { a: ['wordparts'], l: ['ریشه + پسوند'] },
    opts: ['نرمی استخوان', 'مرگ بافت استخوان', 'شکستن استخوان', 'التهاب استخوان'],
    why: `${EA.K.wb('oste/o', '-malacia')}<br><b>oste/o</b> = استخوان • <b>-malacia</b> = نرمی. یعنی <b>نرم شدن استخوان</b>؛ مثلاً در کمبود ویتامین D. اگر <b>-necrosis</b> بود (osteonecrosis) مرگ بافت استخوان و اگر <b>-itis</b> بود (osteitis) التهاب استخوان می‌شد. معنی را از پسوند شروع کن!`
  }),
    titles: ['تازه‌وارد بخش', 'ریشه‌یاب', 'شکارچی میکروب', 'کارآگاه التهاب', 'معاینه‌گر دقیق', 'گوش استتوسکوپ', 'خواننده رادیوگراف', 'دستیار اتاق عمل', 'جراح واژه‌ها', 'نسخه‌خوان', 'داروشناس جوان', 'سرپرست تیمار', 'استاد زبان بیماری و درمان'],
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'دانشجوی علوم آزمایشگاهی', 'کارشناس علوم آزمایشگاهی', 'دانشجوی تغذیه', 'پرستار ICU', 'کارشناس تغذیه بالینی', 'رزیدنت داخلی', 'دانشجوی مامایی', 'دانشجوی داروسازی', 'کارشناس فوریت‌های پزشکی', 'پرستار اتاق عمل'],
    firstBadge: ['🌱', 'اولین گام'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], mc: ['🦠', 'میکروب‌شناس'], rs: ['🛡️', 'نگهبان بدن'], dx: ['🩺', 'معاینه‌گر'], tx: ['✂️', 'جراح'], rx: ['💊', 'داروشناس'] },
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
    ["abscess", "AB-ses", "A localized collection of pus.", "آبسه (دمل)", "rs", "inf", []],
    ["absorption", "ab-SORP-shun", "Drug taken into the circulation through the digestive tract or by transfer across another membrane.", "جذب", "rx", "route", []],
    ["acetaminophen", "ah-set-ah-MIN-o-fen", "Analgesic and antipyretic drug; brand name Tylenol.", "استامینوفن", "rx", "drug", ["APAP"]],
    ["achromatic", "ak-ro-MAT-ik", "Without color.", "بی‌رنگ", "dx", "wp", []],
    ["acid-fast stain", "AS-id-fast", "Laboratory staining procedure used mainly to identify the tuberculosis (TB) organism.", "رنگ‌آمیزی اسیدفست", "mc", "mic", ["AF"]],
    ["acupressure", "AK-u-presh-ur", "Firm finger pressure at specific points on the body surface, with effects similar to acupuncture.", "طب فشاری", "tx", "alt", []],
    ["acupuncture", "AK-u-punk-chur", "Ancient Chinese method of inserting thin needles at specific points to relieve pain, induce anesthesia or promote healing.", "طب سوزنی", "tx", "alt", []],
    ["acute", "ah-KUTE", "Sudden, severe; having a short course.", "حاد", "mc", "type", []],
    ["adaptive immunity", "ah-DAP-tiv", "Specific immunity developed during life from exposure to disease organisms or vaccines; also called acquired immunity.", "ایمنی اکتسابی (تطبیقی)", "rs", "imm", []],
    ["adenectomy", "ad-eh-NEK-to-me", "Excision of a gland (aden/o + -ectomy).", "برداشتن غده", "tx", "surg", []],
    ["adenocarcinoma", "ad-eh-no-kar-sih-NO-mah", "Carcinoma that arises in glandular epithelium (aden/o: gland).", "آدنوکارسینوم (سرطان غده‌ای)", "rs", "neo", []],
    ["adhesion", "ad-HE-zhun", "A uniting of two surfaces or parts that may normally be separated.", "چسبندگی", "rs", "les", []],
    ["adipocele", "AD-ih-po-sele", "Hernia containing fat (adip/o + -cele).", "فتق حاوی چربی", "lx", "wp", []],
    ["aerobic", "air-O-bik", "Pertaining to or requiring air (oxygen).", "هوازی", "dx", "wp", []],
    ["aerosol", "AIR-o-sol", "Solution dispersed as a mist to be inhaled.", "افشانه (آئروسل)", "rx", "route", []],
    ["algesia", "al-JE-ze-ah", "Condition of having pain; sense of pain (root alg/o, algesi/o).", "دردمندی؛ حس درد", "lx", "wp", []],
    ["algesimeter", "al-jeh-SIM-eh-ter", "Instrument used to measure sensitivity to pain.", "دردسنج", "lx", "wp", []],
    ["allergy", "AL-er-je", "Overreaction of the immune system to a harmless substance.", "آلرژی (حساسیت)", "rs", "imm", []],
    ["alpha-fetoprotein", "AL-fah-fe-to-PRO-tene", "A fetal protein that appears in the blood of adults with certain types of cancer.", "آلفافیتوپروتئین", "dx", "exam", ["AFP"]],
    ["amniorrhexis", "am-ne-o-REK-sis", "Rupture of the amniotic sac (bag of waters).", "پارگی کیسه آب جنین", "lx", "wp", []],
    ["ampule", "AM-pule", "A small sealed glass or plastic container used for sterile intravenous solutions.", "آمپول", "rx", "route", []],
    ["anaerobic", "an-er-O-bik", "Not requiring air (oxygen).", "بی‌هوازی", "dx", "wp", []],
    ["analgesia", "an-al-JE-ze-ah", "Absence of pain; loss of the sense of pain (an- + algesi/o + -ia).", "بی‌دردی", "lx", "wp", []],
    ["analgesic", "an-al-JE-zik", "Drug that relieves pain (an- + algesi/o).", "مسکن (ضددرد)", "rx", "drug", []],
    ["anaphylaxis", "an-ah-fih-LAK-sis", "An extreme allergic reaction that can lead to respiratory distress, circulatory collapse and death.", "آنافیلاکسی (واکنش حساسیتی شدید)", "rx", "drug", []],
    ["anaplasia", "ah-nah-PLA-ze-ah", "Lack of normal differentiation, as shown by cancer cells.", "آناپلازی (بی‌تمایزی)", "rs", "neo", []],
    ["anesthesia", "an-es-THE-ze-ah", "Loss of the ability to feel pain, as by administration of a drug.", "بیهوشی (بی‌حسی)", "tx", "surg", []],
    ["antagonist", "an-TAG-o-nist", "A substance that interferes with or opposes the action of a drug.", "آنتاگونیست (مخالف‌اثر)", "rx", "drug", []],
    ["antibody", "AN-tih-bod-e", "Protein made by immune cells that immobilizes foreign invaders and helps destroy them.", "آنتی‌بادی (پادتن)", "rs", "imm", []],
    ["antiemetic", "an-te-eh-MET-ik", "Drug that prevents vomiting (emesis).", "ضداستفراغ", "rx", "drug", []],
    ["antipyretic", "an-te-pi-RET-ik", "Counteracting fever (anti- + pyret/o).", "تب‌بر", "rx", "drug", []],
    ["anxiolytic", "ang-ze-o-LIT-ik", "Drug that reduces anxiety.", "ضداضطراب", "rx", "drug", []],
    ["appendicitis", "ah-pen-dih-SI-tis", "Inflammation of the appendix.", "التهاب آپاندیس", "rs", "inf", []],
    ["aqueous solution", "AKE-we-us", "Substance dissolved in water.", "محلول آبی", "rx", "route", []],
    ["arteriosclerosis", "ar-te-re-o-skleh-RO-sis", "Hardening of the arteries (arteri/o + scler/o + -osis).", "سخت شدن سرخرگ‌ها (آرتریواسکلروز)", "lx", "wp", []],
    ["arteriospasm", "ar-TERE-e-o-spazm", "Spasm of an artery (arteri/o + spasm).", "گرفتگی (اسپاسم) سرخرگ", "lx", "wp", []],
    ["arthrocentesis", "ar-thro-sen-TE-sis", "Puncture of a joint to remove fluid (arthr/o + -centesis).", "آرتروسنتز (کشیدن مایع مفصل)", "tx", "surg", []],
    ["arthrodesis", "ar-THROD-eh-sis", "Fusion of a joint (arthr/o + -desis).", "جوش دادن مفصل", "tx", "surg", []],
    ["arthroplasty", "AR-thro-plas-te", "Plastic repair of a joint (arthr/o + -plasty).", "بازسازی مفصل (آرتروپلاستی)", "tx", "surg", []],
    ["arthroscopy", "ar-THROS-ko-pe", "Endoscopic examination of a joint (arthr/o + -scopy).", "آرتروسکوپی (درون‌بینی مفصل)", "tx", "surg", []],
    ["ascites", "a-SI-teze", "Accumulation of fluid in the peritoneal cavity.", "آسیت (آب آوردن شکم)", "rs", "les", []],
    ["aspiration", "as-pih-RA-shun", "Withdrawal of fluid by needle, as from the chest or a cyst; one way to obtain a biopsy.", "آسپیراسیون (کشیدن با سوزن)", "dx", "exam", []],
    ["aspirin", "AS-pih-rin", "Acetylsalicylic acid; analgesic, antipyretic and anti-inflammatory drug.", "آسپرین", "rx", "drug", ["ASA"]],
    ["audiometer", "aw-de-OM-eh-ter", "Instrument used to measure hearing.", "دستگاه شنوایی‌سنج", "dx", "wp", []],
    ["audiometry", "aw-de-OM-eh-tre", "Measurement of hearing (audi/o).", "شنوایی‌سنجی", "dx", "wp", []],
    ["auscultation", "aws-kul-TA-shun", "Listening for sounds within the body, usually within the chest or abdomen.", "سمع (شنیدن صداهای بدن)", "dx", "exam", []],
    ["autoimmune disease", "aw-to-ih-MUNE", "Immune disorder in which the body makes antibodies to its own tissues.", "بیماری خودایمنی", "mc", "type", []],
    ["bacilli", "bah-SIL-i", "Rod-shaped bacteria; singular: bacillus; cause typhoid, tuberculosis, tetanus and botulism.", "باسیل‌ها (باکتری‌های میله‌ای)", "mc", "mic", []],
    ["bacilluria", "bas-ih-LU-re-ah", "Bacilli in the urine (bacill/i + -uria).", "وجود باسیل در ادرار", "mc", "mic", []],
    ["bacteria", "bak-TE-re-ah", "Simple microscopic organisms widespread throughout the world, some of which can produce disease; singular: bacterium.", "باکتری‌ها", "mc", "mic", []],
    ["bactericidal", "bak-tere-ih-SI-dal", "Killing bacteria (bacteri/o + -cide).", "باکتری‌کش", "mc", "mic", []],
    ["bacteriology", "bak-tere-e-OL-o-je", "Study of bacteria (bacteri/o + -logy).", "باکتری‌شناسی", "mc", "mic", []],
    ["bacteriostatic", "bak-tere-e-o-STAT-ik", "Stopping (stasis) the growth of bacteria.", "باکتریواستاتیک (متوقف‌کننده رشد باکتری)", "mc", "mic", []],
    ["barometer", "bah-ROM-eh-ter", "Instrument used to measure pressure.", "فشارسنج هوا", "dx", "wp", []],
    ["barotrauma", "bah-ro-TRAW-mah", "Injury caused by pressure.", "آسیب ناشی از فشار", "dx", "wp", []],
    ["benign", "be-NINE", "Not recurrent or malignant; describing a tumor that does not spread (metastasize) to other tissues.", "خوش‌خیم", "rs", "neo", []],
    ["biofeedback", "bi-o-FEDE-bak", "Learning control of involuntary responses by monitoring bodily changes electronically and feeding the information back.", "بیوفیدبک (پس‌خوراند زیستی)", "tx", "alt", []],
    ["biopsy", "BI-op-se", "Removal of a small amount of tissue for microscopic examination.", "بیوپسی (نمونه‌برداری)", "dx", "exam", ["bx"]],
    ["blastoma", "blas-TO-mah", "A tumor of immature cells (blast/o + -oma).", "تومور سلول‌های نابالغ (بلاستوم)", "lx", "wp", []],
    ["blepharoptosis", "blef-eh-rop-TO-sis", "Dropping or drooping of the eyelid (blephar/o + ptosis).", "افتادگی پلک", "lx", "wp", []],
    ["blood pressure", "blud PRESH-ur", "Force of blood against artery walls, measured in mm Hg when the heart contracts (systolic) and relaxes (diastolic).", "فشار خون", "dx", "exam", ["BP"]],
    ["bolus", "BO-lus", "A concentrated amount of a diagnostic or therapeutic substance given rapidly intravenously.", "بولوس (تزریق سریع یکجا)", "rx", "route", []],
    ["bougie", "BOO-zhe", "Slender, flexible instrument for exploring and dilating tubes.", "بوژی (میله گشادکننده)", "tx", "inst", []],
    ["bradypnea", "brad-ip-NE-ah", "Slow breathing rate (brady- + -pnea).", "کندی تنفس", "lx", "wp", []],
    ["brand name", "brand", "The trade or proprietary name of a drug, a registered trademark written with an initial capital letter.", "نام تجاری", "rx", "drug", []],
    ["bronchodilator", "brong-ko-di-LA-tor", "Drug that widens the bronchi, used in asthma.", "گشادکننده نایژه", "rx", "drug", []],
    ["bronchoscope", "BRONG-ko-skope", "Endoscope used to examine the bronchi (breathing passages).", "برونکوسکوپ (نایژه‌بین)", "dx", "exam", []],
    ["bronchospasm", "BRONG-ko-spazm", "Sudden contraction of a bronchus (bronch/o + spasm).", "گرفتگی نایژه (برونکواسپاسم)", "lx", "wp", []],
    ["bronchostenosis", "brong-ko-steh-NO-sis", "Narrowing of a bronchus (bronch/o + stenosis).", "تنگی نایژه", "lx", "wp", []],
    ["bruit", "brwe", "A sound, usually abnormal, heard in auscultation.", "بروئی (صدای غیرطبیعی رگ)", "dx", "sx", []],
    ["calorimeter", "kal-o-RIM-eh-ter", "Instrument for measuring the caloric energy of food.", "گرماسنج (کالری‌سنج)", "dx", "wp", []],
    ["cannula", "KAN-u-lah", "Tube enclosing a trocar that allows escape of fluid or air after removal of the trocar.", "کانولا", "tx", "inst", []],
    ["capsule", "KAP-sule", "Material in a gelatin container that dissolves easily in the stomach.", "کپسول", "rx", "route", ["cap"]],
    ["carcinogen", "kar-SIN-o-jen", "A substance that causes cancer (carcin/o + -gen).", "سرطان‌زا (کارسینوژن)", "lx", "wp", []],
    ["carcinogenesis", "kar-sih-no-JEN-eh-sis", "Formation or origin of cancer (carcin/o + -genesis).", "سرطان‌زایی", "lx", "wp", []],
    ["carcinoid", "KAR-sih-noyd", "Resembling a carcinoma; a type of slow-growing tumor (carcin/o + -oid).", "شبه‌کارسینوم (کارسینوئید)", "lx", "wp", []],
    ["carcinoma", "kar-sih-NO-mah", "A malignant neoplasm composed of epithelial cells (Greek carcino: crab).", "کارسینوم (سرطان بافت پوششی)", "rs", "neo", ["CA", "Ca"]],
    ["carcinoma in situ", "in SI-tu", "Localized, noninvasive cancer (in situ: in position) that has not spread.", "کارسینوم درجا", "rs", "neo", ["CIS"]],
    ["cardiomegaly", "kar-de-o-MEG-ah-le", "Enlargement of the heart (cardi/o + -megaly).", "بزرگی قلب", "lx", "wp", []],
    ["cardionecrosis", "kar-de-o-neh-KRO-sis", "Death of heart tissue (cardi/o + necrosis).", "مرگ بافت قلب", "lx", "wp", []],
    ["catheter", "KATH-eh-ter", "A thin tube that can be passed into a body cavity, organ or vessel to remove or introduce fluids.", "کاتتر (لوله باریک)", "tx", "care", []],
    ["cautery", "KAW-ter-e", "Destruction of tissue by a damaging agent such as a chemical, heat or electric current (electrocautery).", "سوزاندن بافت (کوتر)", "tx", "surg", []],
    ["celiocentesis", "se-le-o-sen-TE-sis", "Puncture of the abdomen (celi/o + -centesis).", "کشیدن مایع شکم", "tx", "surg", []],
    ["celioscopy", "se-le-OS-ko-pe", "Examination of the abdominal cavity (celi/o).", "معاینه حفره شکم با آندوسکوپ", "dx", "wp", []],
    ["cellulitis", "sel-u-LI-tis", "A spreading inflammation of tissue.", "سلولیت (التهاب منتشر بافت)", "rs", "inf", []],
    ["cephaledema", "sef-al-eh-DE-mah", "Swelling of the head (cephal/o + edema).", "ورم سر", "lx", "wp", []],
    ["cephalgia", "seh-FAL-je-ah", "Pain in the head; headache (cephal/o + -algia).", "سردرد", "lx", "wp", []],
    ["chemotherapy", "ke-mo-THER-ah-pe", "Use of chemicals to treat disease; often applied specifically to cancer treatment.", "شیمی‌درمانی", "tx", "care", []],
    ["chief complaint", "cheef kom-PLANE", "The main reason, in the patient’s own words, for seeking care.", "شکایت اصلی", "dx", "exam", ["CC"]],
    ["chiropractic", "ki-ro-PRAK-tik", "Science that stresses the nervous system; the spine is often manipulated to correct misalignment (cheir: hand).", "کایروپرکتیک (درمان با دست)", "tx", "alt", []],
    ["chlamydia", "klah-MID-e-ah", "Extremely small bacteria that grow only in living cells but, unlike viruses, are susceptible to antibiotics.", "کلامیدیا", "mc", "mic", []],
    ["chromatic", "kro-MAT-ik", "Having color.", "رنگی", "dx", "wp", []],
    ["chronic", "KRON-ik", "Of long duration, progressing slowly (chron/o: time).", "مزمن", "mc", "type", []],
    ["chronologic", "kron-o-LOJ-ik", "Arranged according to the time of occurrence.", "به ترتیب زمانی", "dx", "wp", []],
    ["chronometer", "kron-OM-eh-ter", "Instrument for measuring time.", "زمان‌سنج", "dx", "wp", []],
    ["chronotropic", "kron-o-TROP-ik", "Affecting timing, such as the rate of the heartbeat.", "اثرگذار بر ریتم (کرونوتروپ)", "rx", "drug", []],
    ["cineradiography", "sin-eh-ra-de-OG-rah-fe", "Making a motion picture of successive images appearing on a fluoroscopic screen.", "سینه‌رادیوگرافی (فیلم رادیولوژی)", "dx", "img", []],
    ["clamp", "klamp", "Instrument used to compress tissue.", "کلمپ (گیره)", "tx", "inst", []],
    ["clubbing", "KLUB-ing", "Enlargement of the ends of the fingers and toes because of soft-tissue growth of the nails; seen especially in lung and heart diseases.", "چماقی شدن انگشتان", "dx", "sx", []],
    ["clysis", "KLI-sis", "Introduction of fluid into the body other than orally, as into the rectum or abdominal cavity; also the solution used.", "تزریق مایع (کلیزیس)", "tx", "care", []],
    ["cocci", "KOK-si", "Round bacteria; may form clusters (staphylococci) or chains (streptococci); singular: coccus.", "کوکسی‌ها (باکتری‌های گرد)", "mc", "mic", []],
    ["colic", "KOL-ik", "Acute abdominal pain associated with smooth muscle spasms.", "قولنج (کولیک)", "dx", "sx", []],
    ["colostomy", "ko-LOS-to-me", "Surgical creation of an opening into the colon (col/o + -stomy).", "کولوستومی (دهانه روده بزرگ)", "tx", "surg", []],
    ["communicable", "ko-MUN-ih-kah-bl", "Capable of passing from one person to another, such as an infectious disease.", "واگیردار (مسری)", "mc", "mic", []],
    ["computed tomography", "kom-PU-ted to-MOG-rah-fe", "Use of a computer to generate cross-sectional images from many x-rays passed at different angles through the body.", "سی‌تی‌اسکن (توموگرافی کامپیوتری)", "dx", "img", ["CT"]],
    ["congenital", "kon-JEN-ih-tal", "Present at birth, such as a congenital malformation.", "مادرزادی", "mc", "type", []],
    ["contraceptive", "kon-trah-SEP-tiv", "Preventing conception (contra-: against).", "ضدبارداری", "rx", "drug", []],
    ["contraindication", "kon-trah-in-dih-KA-shun", "A factor that makes the use of a drug undesirable or dangerous.", "منع مصرف", "rx", "drug", []],
    ["contrast medium", "KON-trast ME-de-um", "Substance such as barium that improves the visibility of soft tissues in imaging.", "ماده حاجب", "dx", "img", []],
    ["countertransport", "kown-ter-TRANS-port", "Movement in an opposite direction (counter-: against).", "جابه‌جایی در جهت مخالف", "rx", "drug", []],
    ["craniomalacia", "kra-ne-o-mah-LA-she-ah", "Softening of the skull (crani/o + malacia).", "نرمی جمجمه", "lx", "wp", []],
    ["cream", "kreme", "A semisolid emulsion used topically.", "کرم", "rx", "route", []],
    ["cryoprobe", "KRI-o-probe", "Instrument used to apply extreme cold.", "پروب سرمایی", "dx", "wp", []],
    ["cryotherapy", "kri-o-THER-ah-pe", "Treatment using cold.", "سرمادرمانی", "dx", "wp", []],
    ["culture and sensitivity", "KUL-chur", "Growing bacteria from a sample and testing which drugs kill them.", "کشت و آنتی‌بیوگرام", "dx", "exam", ["C&S"]],
    ["curet", "KU-ret", "Spoon-shaped instrument for removing material from the wall of a cavity or other surface; curette.", "کورت (قاشقک جراحی)", "tx", "inst", []],
    ["cyanosis", "si-ah-NO-sis", "Bluish discoloration of the skin due to lack of oxygen.", "سیانوز (کبودی)", "dx", "sx", []],
    ["cyst", "sist", "An abnormal filled sac or pouch that is not cancerous; as a root (cyst/o) it means a normal bladder or sac.", "کیست", "rs", "neo", []],
    ["cystic", "SIS-tik", "Pertaining to or having cysts (cyst/o + -ic).", "کیستی", "lx", "wp", []],
    ["cystitis", "sis-TI-tis", "Inflammation of the urinary bladder (cyst/o + -itis).", "التهاب مثانه", "lx", "wp", []],
    ["cystotome", "SIS-to-tome", "Instrument for incising the urinary bladder (cyst/o + -tome).", "ابزار برش مثانه (سیستوتوم)", "lx", "wp", []],
    ["degenerative disease", "de-JEN-er-ah-tiv", "Disease that results from wear and tear, aging or trauma, such as arthritis or emphysema.", "بیماری تحلیل‌برنده (فرسایشی)", "mc", "type", []],
    ["diagnosis", "di-ag-NO-sis", "The process of determining the cause and nature of an illness.", "تشخیص", "dx", "sci", ["Dx"]],
    ["dialysis", "di-AL-ih-sis", "Separation of substances by passage through (dia-) a membrane.", "دیالیز", "lx", "wp", []],
    ["diaphoresis", "di-ah-fo-RE-sis", "Profuse sweating.", "تعریق شدید", "dx", "sx", []],
    ["diastolic pressure", "di-ah-STOL-ik", "Blood pressure recorded when the heart is relaxing.", "فشار دیاستولی (کمینه)", "dx", "exam", []],
    ["disease", "dih-ZEZE", "Any disorder of normal body function.", "بیماری", "mc", "sci", []],
    ["drain", "drane", "Device that allows matter to escape from a wound or cavity, such as a Penrose or Jackson–Pratt drain.", "درن", "tx", "surg", []],
    ["drug", "drug", "A substance that alters body function.", "دارو", "rx", "drug", ["MED"]],
    ["dysentery", "DIS-en-ter-e", "Painful inflammation of the intestine with diarrhea (dys- + enter/o).", "اسهال خونی (دیسانتری)", "lx", "wp", []],
    ["dysphagia", "dis-FA-je-ah", "Difficulty in swallowing (dys- + phag/o).", "دشواری بلع", "lx", "wp", []],
    ["dysplasia", "dis-PLA-je-ah", "Abnormal development of tissue (dys- + plas).", "رشد نابه‌هنجار بافت (دیسپلازی)", "lx", "wp", []],
    ["dystrophy", "DIS-tro-fe", "Abnormal nourishment or development of tissue (dys- + -trophy).", "تغذیه نابه‌هنجار بافت (دیستروفی)", "lx", "wp", []],
    ["echography", "ek-OG-rah-fe", "Recording data obtained by ultrasound; ultrasonography.", "اکوگرافی", "dx", "img", []],
    ["edema", "eh-DE-mah", "Accumulation of fluid in the tissues; swelling; adjective: edematous.", "ادم (خیز، ورم)", "rs", "inf", []],
    ["edematous", "eh-DE-mah-tus", "Swollen with fluid; adjective of edema.", "ادم‌دار (ورم‌کرده)", "rs", "inf", []],
    ["efficacy", "EF-ih-kah-se", "The power to produce a specific result; effectiveness.", "اثربخشی", "rx", "drug", []],
    ["effusion", "eh-FU-zhun", "Escape of fluid into a cavity or other body part.", "افیوژن (تجمع مایع در حفره)", "rs", "les", []],
    ["elective surgery", "e-LEK-tiv", "Optional surgery that would not cause serious consequences if delayed or not done.", "جراحی انتخابی", "tx", "surg", []],
    ["electrocardiogram", "eh-lek-tro-KAR-de-o-gram", "Record of the heart’s electrical activity.", "نوار قلب", "dx", "wp", ["ECG"]],
    ["electroencephalograph", "e-lek-tro-en-SEF-ah-lo-graf", "Instrument used to record the brain’s electrical activity.", "دستگاه نوار مغز", "dx", "wp", []],
    ["electrolysis", "e-lek-TROL-ih-sis", "Decomposition of a substance by means of electric current.", "الکترولیز (تجزیه با برق)", "dx", "wp", []],
    ["elevator", "EL-eh-va-tor", "Instrument for lifting tissue or bone.", "الواتور (بالابر)", "tx", "inst", []],
    ["elixir", "e-LIK-sar", "Clear, pleasantly flavored and sweetened hydroalcoholic liquid for oral use.", "اکسیر (شربت الکلی)", "rx", "route", ["elix"]],
    ["emergency medical technician", "e-MER-jen-se", "Healthcare professional who first arrives at an emergency scene, assesses and stabilizes the patient and transports to a medical facility.", "تکنسین فوریت‌های پزشکی", "mc", "sci", ["EMT"]],
    ["emulsion", "e-MUL-shun", "A mixture in which one liquid is dispersed but not dissolved in another liquid.", "امولسیون", "rx", "route", []],
    ["endemic", "en-DEM-ik", "Occurring at a low level but continuously in a given region, such as the common cold.", "بومی (اندمیک)", "mc", "mic", []],
    ["endoscope", "EN-do-skope", "Instrument for examining the inside of an organ or cavity through a body opening or small incision; most use fiber optics.", "آندوسکوپ (درون‌بین)", "dx", "exam", []],
    ["endotoxin", "en-do-TOK-sin", "A toxin contained within bacterial cells (endo- + tox/o).", "اندوتوکسین (سم درون باکتری)", "lx", "wp", []],
    ["epidemic", "ep-ih-DEM-ik", "Affecting many people in a given region at the same time.", "همه‌گیر (اپیدمی)", "mc", "mic", []],
    ["epidural", "ep-ih-DUR-al", "Injected into the space between the meninges and the spine.", "اپیدورال", "rx", "route", []],
    ["ergometry", "er-GOM-eh-tre", "Measurement of work done.", "کارسنجی", "dx", "wp", []],
    ["etiology", "e-te-OL-o-je", "The cause of a disease.", "سبب‌شناسی؛ علت بیماری", "mc", "type", []],
    ["exacerbation", "eks-zas-er-BA-shun", "Worsening of disease; increase in severity of a disease or its symptoms.", "تشدید بیماری", "mc", "type", []],
    ["excision", "ek-SIZH-un", "Removal by cutting (suffix -ectomy).", "برداشتن با برش", "tx", "surg", []],
    ["exotoxin", "ek-so-TOK-sin", "A toxin secreted by bacterial cells (exo- + tox/o).", "اگزوتوکسین (سم ترشح‌شده)", "lx", "wp", []],
    ["exudate", "EKS-u-date", "Material that escapes from blood vessels as a result of tissue injury.", "تراوش (اگزودا)", "rs", "inf", []],
    ["facies", "FA-she-eze", "The expression or appearance of the face.", "چهره (حالت چهره)", "dx", "sx", []],
    ["febrile", "FEB-ril", "Pertaining to fever.", "تب‌دار", "dx", "sx", []],
    ["fever of unknown origin", "FE-ver", "Fever whose cause cannot be found despite investigation.", "تب با منشأ ناشناخته", "dx", "sx", ["FUO"]],
    ["fissure", "FISH-ur", "A groove or split.", "شقاق (شکاف)", "rs", "les", []],
    ["fistula", "FIS-tu-lah", "An abnormal passage between two organs or from an organ to the surface of the body.", "فیستول (راه غیرطبیعی)", "rs", "les", []],
    ["fixation", "fik-SA-shun", "Holding or fastening a structure in a firm position (suffix -pexy).", "ثابت کردن (فیکساسیون)", "tx", "surg", []],
    ["fluoroscopy", "flor-OS-ko-pe", "Use of x-rays to examine deep structures on a fluorescent screen; the device is a fluoroscope.", "فلوروسکوپی", "dx", "img", []],
    ["forceps", "FOR-seps", "Instrument for holding or extracting.", "فورسپس (پنس)", "tx", "inst", []],
    ["fungus", "FUN-gus", "Simple nongreen plant-like organism, some parasitic; includes yeasts and molds; plural: fungi.", "قارچ", "mc", "mic", []],
    ["gangrene", "GANG-grene", "Death of tissue, usually caused by lack of blood supply; may be associated with bacterial infection and decomposition.", "قانقاریا (گانگرن)", "rs", "les", []],
    ["gastrectasia", "gas-trek-TA-se-ah", "Dilatation of the stomach (gastr/o + ectasia).", "گشادی معده", "lx", "wp", []],
    ["gastrocele", "GAS-tro-sele", "Hernia of the stomach (gastr/o + -cele).", "فتق معده", "lx", "wp", []],
    ["gastrodynia", "gas-tro-DIN-e-ah", "Pain in the stomach (gastr/o + -odynia).", "درد معده", "lx", "wp", []],
    ["gastroplasty", "GAS-tro-plas-te", "Plastic repair of the stomach (gastr/o + -plasty).", "ترمیم معده", "tx", "surg", []],
    ["generic name", "jeh-NER-ik", "The nonproprietary name of a drug, usually a simplified chemical name; not capitalized.", "نام ژنریک", "rx", "drug", []],
    ["Gigli saw", "JE-yle", "Flexible wire saw.", "اره سیمی جیگلی", "tx", "inst", []],
    ["grading", "GRA-ding", "Evaluating a tumor by microscopic examination of its cells; grades I to IV with increasing abnormality.", "درجه‌بندی تومور", "tx", "care", []],
    ["Gram stain", "gram", "Laboratory staining procedure that divides bacteria into gram positive (purple) and gram negative (red).", "رنگ‌آمیزی گرم", "mc", "mic", ["Gm+", "Gm−"]],
    ["helminth", "HEL-minth", "A worm; helminths cause trichinosis and infestations with roundworms, pinworms and hookworms.", "کرم انگلی", "mc", "mic", []],
    ["hemolysis", "he-MOL-ih-sis", "Destruction of blood cells (hem/o + lysis).", "همولیز (تخریب گلبول قرمز)", "lx", "wp", []],
    ["hemorrhage", "HEM-or-ij", "Profuse flow of blood; bleeding (hem/o + -rrhage).", "خون‌ریزی شدید", "lx", "wp", []],
    ["hemostasis", "he-mo-STA-sis", "Stoppage of blood flow (hem/o + stasis).", "بند آمدن خون (هموستاز)", "lx", "wp", []],
    ["hemostat", "HE-mo-stat", "Small clamp for stopping blood flow from a vessel.", "هموستات (پنس خون‌بند)", "tx", "inst", []],
    ["hepatectomy", "hep-ah-TEK-to-me", "Excision of liver tissue (hepat/o + -ectomy).", "برداشتن بخشی از کبد", "tx", "surg", []],
    ["hepatomegaly", "hep-ah-to-MEG-ah-le", "Enlargement of the liver (hepat/o + -megaly).", "بزرگی کبد", "lx", "wp", []],
    ["hepatorrhexis", "hep-ah-to-REK-sis", "Rupture of the liver (hepat/o + -rrhexis).", "پارگی کبد", "lx", "wp", []],
    ["herbal medicine", "ER-bal", "Use of plants to treat disease; also called phytomedicine (phyt/o: plant).", "داروی گیاهی (گیاه‌درمانی)", "rx", "drug", []],
    ["hernia", "HER-ne-ah", "Protrusion of an organ through an abnormal opening; commonly called a rupture.", "فتق", "rs", "les", []],
    ["herniorrhaphy", "her-ne-OR-ah-fe", "Surgical repair of a hernia (herni/o + -rrhaphy).", "ترمیم فتق (هرنیورافی)", "tx", "surg", []],
    ["hiatal hernia", "hi-A-tal", "Protrusion of the stomach through the diaphragm into the thoracic cavity.", "فتق هیاتال (فتق معده از دیافراگم)", "rs", "les", []],
    ["history", "HIS-to-re", "Record of the present illness, past medical history and family and social history, taken at the start of diagnosis.", "شرح حال", "dx", "exam", ["Hx"]],
    ["holistic health care", "ho-LIS-tik", "Treating a person as a whole with physical, emotional, social and spiritual needs, stressing the maintenance of good health.", "مراقبت کل‌نگر", "tx", "alt", []],
    ["homeopathy", "ho-me-OP-ah-the", "Treating disease with drugs in highly diluted form along with healthy life habits (home/o: same, path/o: disease).", "هومیوپاتی", "tx", "alt", []],
    ["hormonal disorder", "hor-MO-nal", "Disorder caused by underproduction or overproduction of hormones or failure of hormones to act, such as diabetes mellitus.", "اختلال هورمونی", "mc", "type", []],
    ["hydrocele", "HI-dro-sele", "Local dilatation containing fluid (hydr/o + -cele).", "کیسه آب (هیدروسل)", "lx", "wp", []],
    ["hyperbaric", "hi-per-BAR-ik", "Pertaining to increased pressure.", "پرفشار (هایپرباریک)", "dx", "wp", []],
    ["hyperplasia", "hi-per-PLA-ze-ah", "Excessive growth of normal cells in normal arrangement.", "هایپرپلازی (افزایش تعداد سلول)", "rs", "neo", []],
    ["hyperpyrexia", "hi-per-pi-REK-se-ah", "Abnormally high body temperature; extremely high fever.", "تب بسیار بالا", "lx", "wp", []],
    ["hyperthermia", "hi-per-THER-me-ah", "Abnormally high body temperature.", "افزایش دمای بدن (هایپرترمی)", "dx", "wp", []],
    ["hypertrophy", "hi-PER-tro-fe", "An increase in the size of an organ without increase in the number of cells, as in exercised muscles.", "هایپرتروفی (بزرگی اندازه سلول)", "rs", "neo", []],
    ["hypnosis", "hip-NO-sis", "Induced state of sleep (hypn/o: sleep).", "خواب مصنوعی (هیپنوتیزم)", "rx", "drug", []],
    ["hypnotic", "hip-NOT-ik", "Drug that induces sleep.", "خواب‌آور", "rx", "drug", []],
    ["hypodermoclysis", "hi-po-der-MOK-lih-sis", "Administration of a solution by subcutaneous infusion; an alternative to IV infusion.", "تزریق مایع زیر پوست", "rx", "route", []],
    ["hypothermia", "hi-po-THER-me-ah", "Abnormally low body temperature.", "کاهش دمای بدن (هیپوترمی)", "dx", "wp", []],
    ["hysteropexy", "HIS-ter-o-pek-se", "Surgical fixation of the uterus (hyster/o + -pexy).", "ثابت کردن رحم", "tx", "surg", []],
    ["iatrogenic", "i-at-ro-JEN-ik", "Caused by the effects of treatment (iatro-: physician).", "یاتروژنیک (ناشی از درمان)", "mc", "type", []],
    ["ibuprofen", "i-bu-PRO-fen", "Nonsteroidal anti-inflammatory drug; brand names Motrin and Advil.", "ایبوپروفن", "rx", "drug", []],
    ["idiopathic", "id-e-o-PATH-ik", "Having no known cause (root idio: self-originating).", "ایدیوپاتیک (با علت ناشناخته)", "mc", "type", []],
    ["immunity", "ih-MU-nih-te", "All our defenses against infectious disease.", "ایمنی", "rs", "imm", []],
    ["immunotherapy", "im-u-no-THER-ah-pe", "Treatment that involves stimulation or suppression of the immune system.", "ایمنی‌درمانی", "tx", "care", []],
    ["incision", "in-SIZH-un", "A cut, as for surgery; also the act of cutting (suffix -tomy).", "برش", "tx", "surg", []],
    ["induration", "in-du-RA-shun", "Hardening; an abnormally hard spot or place.", "سفتی موضعی (اندوراسیون)", "rs", "les", []],
    ["infectious disease", "in-FEK-shus", "Disease caused by harmful microorganisms and other parasites that live at the expense of another organism.", "بیماری عفونی", "mc", "type", []],
    ["inflammation", "in-flah-MA-shun", "A localized response to tissue injury characterized by heat, pain, redness and swelling.", "التهاب", "rs", "inf", []],
    ["inhalation", "in-hah-LA-shun", "Administration through the respiratory system, as by breathing in an aerosol or nebulizer spray.", "استنشاق", "rx", "route", []],
    ["injection", "in-JEK-shun", "Administration by a needle and syringe.", "تزریق", "rx", "route", []],
    ["innate immunity", "ih-NATE", "Inborn protective mechanisms based on genetic makeup that need no previous exposure, such as inflammation, phagocytosis and intact skin.", "ایمنی ذاتی", "rs", "imm", []],
    ["inspection", "in-SPEK-shun", "Visual examination of the body.", "مشاهده (نگاه کردن)", "dx", "exam", []],
    ["instillation", "in-stil-LA-shun", "Liquid dropped or poured slowly into a body cavity or onto a surface, such as into the ear or onto the conjunctiva.", "چکاندن (قطره‌ریزی)", "rx", "route", []],
    ["intradermal", "in-trah-DER-mal", "Injected into the skin.", "داخل‌پوستی", "rx", "route", ["ID"]],
    ["intramuscular", "in-trah-MUS-ku-lar", "Injected into a muscle.", "داخل‌عضلانی", "rx", "route", ["IM"]],
    ["intrathecal", "in-trah-THE-kal", "Injected through the meninges into the spinal fluid; spinal.", "داخل نخاعی (اینتراتکال)", "rx", "route", []],
    ["intravenous", "in-trah-VE-nus", "Injected into a vein.", "داخل‌وریدی", "rx", "route", ["IV"]],
    ["irrigation", "ir-ih-GA-shun", "Flushing of a tube, cavity or area with a fluid.", "شست‌وشو (ایریگیشن)", "tx", "care", []],
    ["karyoclasis", "kar-e-OK-lah-sis", "Breaking of a nucleus (kary/o + -clasis).", "شکستن هسته سلول", "lx", "wp", []],
    ["laparoscopy", "lap-ah-ROS-ko-pe", "Examination of the abdomen through an endoscope (lapar/o).", "لاپاراسکوپی", "dx", "wp", []],
    ["laparotomy", "lap-ah-ROT-o-me", "Surgical incision of the abdomen (lapar/o + -tomy).", "لاپاراتومی (برش شکم)", "tx", "surg", []],
    ["laser", "LA-zer", "Device that transforms light into a beam of intense heat and power; used for surgery and diagnosis.", "لیزر", "tx", "surg", []],
    ["lavage", "lah-VAJ", "The washing out of a cavity; irrigation.", "لاواژ (شست‌وشوی حفره)", "tx", "care", []],
    ["lesion", "LE-zhun", "A distinct area of damaged tissue; an injury or wound.", "ضایعه", "rs", "les", []],
    ["ligature", "LIG-ah-chur", "A tie or bandage; the process of binding or tying (ligation).", "گره بستن رگ (لیگاتور)", "tx", "surg", []],
    ["lipoma", "li-PO-mah", "A tumor of fat cells (lip/o + -oma).", "لیپوم (تومور چربی)", "lx", "wp", []],
    ["liquid biopsy", "LIK-wid BI-op-se", "Diagnosis or monitoring of cancer by analysis of cancer cells or tumor DNA in circulating blood.", "بیوپسی مایع (از خون)", "dx", "exam", []],
    ["lithiasis", "lith-I-ah-sis", "Stone formation (lith + -iasis).", "سنگ‌سازی (لیتیازیس)", "lx", "wp", []],
    ["lithotomy", "lih-THOT-o-me", "Incision of an organ to remove a stone.", "برش برای بیرون آوردن سنگ", "tx", "surg", []],
    ["lithotripsy", "LITH-o-trip-se", "Crushing of a stone (lith/o + -tripsy).", "سنگ‌شکنی", "tx", "surg", []],
    ["lotion", "LO-shun", "Solution prepared for topical use.", "لوسیون", "rx", "route", []],
    ["lozenge", "LOZ-enj", "Pleasant-tasting medicated tablet or disk dissolved in the mouth, such as a cough drop.", "قرص مکیدنی (لوزنج)", "rx", "route", []],
    ["magnetic resonance imaging", "mag-NET-ik REZ-o-nans", "Production of images through the use of a magnetic field and radio waves, without x-rays.", "ام‌آرآی (تصویربرداری تشدید مغناطیسی)", "dx", "img", ["MRI"]],
    ["malabsorption", "mal-ab-SORP-shun", "Poor absorption of nutrients (mal- + absorption).", "سوءجذب", "lx", "wp", []],
    ["malaise", "mah-LAZE", "A feeling of discomfort or uneasiness, often indicative of infection or other disease (mal-: bad).", "کسالت (بی‌حالی)", "dx", "sx", []],
    ["malignant", "mah-LIG-nant", "Growing worse, harmful, tending to cause death; describing an invasive tumor that can spread to other tissues.", "بدخیم", "rs", "neo", []],
    ["malnutrition", "mal-nu-TRISH-un", "Poor nutrition caused by inadequate intake or use of nutrients (mal- + nutrition).", "سوءتغذیه", "lx", "wp", []],
    ["massage", "ma-SAHJ", "Manipulation of the body to calm, relieve tension, increase circulation and stimulate muscles.", "ماساژ", "tx", "alt", []],
    ["meditation", "med-ih-TA-shun", "Clearing the mind by concentrating on the inner self while controlling breathing.", "مراقبه (مدیتیشن)", "tx", "alt", []],
    ["melanoma", "mel-ah-NO-mah", "A cancer of pigmented epithelial cells (melanocytes).", "ملانوم", "rs", "neo", []],
    ["menorrhagia", "men-o-RA-je-ah", "Profuse menstrual flow (men/o + -rrhagia).", "خون‌ریزی شدید قاعدگی", "lx", "wp", []],
    ["menostasis", "men-OS-tah-sis", "Suppression of menstrual flow (men/o + stasis).", "قطع جریان قاعدگی", "lx", "wp", []],
    ["mental disorder", "MEN-tal", "Disorder that affects the mind and the adaptation of a person to the environment.", "اختلال روانی", "mc", "type", []],
    ["metabolic disorder", "met-ah-BOL-ik", "Disorder resulting from lack of enzymes or other factors needed for cellular functions; many are hereditary.", "اختلال متابولیک (سوخت‌وسازی)", "mc", "type", []],
    ["metaplasia", "met-ah-PLA-ze-ah", "Conversion of cells to a form that is not normal for that tissue (meta-: change).", "متاپلازی (تبدیل نوع سلول)", "rs", "neo", []],
    ["metastasis", "meh-TAS-tah-sis", "Spread from one part of the body to another, characteristic of cancer (meta-: change + stasis: stand); verb metastasize.", "متاستاز (دست‌اندازی)", "rs", "neo", ["MET"]],
    ["metered-dose inhaler", "ME-terd dose in-HA-ler", "Device that delivers a measured dose of an aerosol drug for inhalation.", "افشانه دوزدار (اسپری استنشاقی)", "rx", "route", []],
    ["microorganism", "mi-kro-OR-gan-izm", "An organism too small to be seen without the aid of a microscope.", "ریزجاندار (میکروارگانیسم)", "mc", "mic", []],
    ["microscope", "MI-kro-skope", "Instrument for examining very small objects.", "میکروسکوپ (ریزبین)", "dx", "wp", []],
    ["microtome", "MI-kro-tome", "Instrument for cutting thin sections of tissue for microscopic study.", "میکروتوم (ابزار برش نازک بافت)", "tx", "surg", []],
    ["mucolytic", "mu-ko-LIT-ik", "Agent that dissolves or loosens mucus.", "خلط‌شکن (موکولیتیک)", "rx", "drug", []],
    ["multidrug resistant", "mul-te-DRUG re-ZIS-tant", "Describing an organism that cannot be killed by many different antibiotics.", "مقاوم به چند دارو", "mc", "mic", ["MDR"]],
    ["myalgia", "mi-AL-je-ah", "Pain in a muscle (my/o + -algia).", "درد ماهیچه", "lx", "wp", []],
    ["mycology", "mi-KOL-o-je", "Study of fungi (myc/o + -logy).", "قارچ‌شناسی", "mc", "mic", []],
    ["mycosis", "mi-KO-sis", "Any disease caused by a fungus.", "بیماری قارچی (مایکوز)", "mc", "mic", []],
    ["mycotic", "mi-KOT-ik", "Pertaining to a fungus.", "قارچی", "mc", "mic", []],
    ["myolysis", "mi-OL-ih-sis", "Dissolving or destruction of muscle (my/o + lysis).", "تخریب ماهیچه", "lx", "wp", []],
    ["myopathy", "mi-OP-ah-the", "Any disease of muscle (my/o + -pathy).", "بیماری ماهیچه (میوپاتی)", "lx", "wp", []],
    ["myorrhexis", "mi-o-REK-sis", "Rupture of a muscle (my/o + -rrhexis).", "پارگی ماهیچه", "lx", "wp", []],
    ["narcotic", "nar-KOT-ik", "Agent that induces a state of stupor with decreased sensation (narc/o: stupor).", "مخدر", "rx", "drug", []],
    ["naturopathy", "na-chur-OP-ah-the", "Therapeutic philosophy of helping people heal themselves by developing healthy lifestyles.", "طبیعت‌درمانی (ناتوروپاتی)", "tx", "alt", []],
    ["nebulizer", "NEB-u-li-zer", "Device that turns a liquid drug into a fine spray for inhalation.", "نبولایزر (بخورساز دارو)", "rx", "route", []],
    ["necrosis", "neh-KRO-sis", "Death of tissue (necr/o: death); adjective: necrotic.", "نکروز (مرگ بافت)", "rs", "les", []],
    ["neoplasia", "ne-o-PLA-ze-ah", "An abnormal and uncontrolled growth of tissue (neo-: new + plasm: formation).", "نئوپلازی (رشد نو و بی‌مهار)", "rs", "neo", []],
    ["neoplasm", "NE-o-plazm", "A tumor, or abnormal growth, which may be benign or malignant (root onc/o and suffix -oma).", "نئوپلاسم (تومور)", "rs", "neo", []],
    ["nephropathy", "nef-ROP-ah-the", "Any disease of the kidney (nephr/o + -pathy).", "بیماری کلیه (نفروپاتی)", "lx", "wp", []],
    ["nephropexy", "NEF-ro-pek-se", "Surgical fixation of the kidney (nephr/o + -pexy).", "ثابت کردن کلیه", "tx", "surg", []],
    ["nephrotoxin", "nef-ro-TOK-sin", "A substance poisonous or harmful for the kidneys (nephr/o + toxin).", "سم کلیه (نفروتوکسین)", "lx", "wp", []],
    ["neuralgia", "nu-RAL-je-ah", "Pain in a nerve (neur/o + -algia).", "درد عصب", "lx", "wp", []],
    ["neuroma", "nu-RO-mah", "A tumor of a nerve (neur/o + -oma).", "تومور عصب (نوروم)", "lx", "wp", []],
    ["neurotripsy", "nu-ro-TRIP-se", "Crushing of a nerve (neur/o + -tripsy).", "له کردن عصب", "tx", "surg", []],
    ["nocturnal", "nok-TUR-nal", "Pertaining to or occurring at night (noct/i, nyct/o: night).", "شبانه", "dx", "sx", []],
    ["nonsteroidal anti-inflammatory drug", "non-STER-oyd-al", "Drug that reduces inflammation and pain without steroids, such as ibuprofen.", "داروی ضدالتهاب غیراستروئیدی", "rx", "drug", ["NSAID"]],
    ["normal flora", "FLO-rah", "Microorganisms that normally live on or in the body and are generally harmless and often beneficial.", "فلور طبیعی بدن", "mc", "mic", []],
    ["normal saline", "SA-lene", "A salt (NaCl) solution compatible with living cells; physiologic saline solution.", "سرم نمکی (سالین نرمال)", "tx", "care", ["NS", "PSS"]],
    ["nosocomial", "nos-o-KO-me-al", "Describing an infection acquired in a hospital (nos/o: disease, comial: hospital).", "بیمارستانی (عفونت بیمارستانی)", "mc", "mic", []],
    ["nuclear medicine", "NU-kle-ar", "Branch of medicine concerned with the use of radioactive substances (radionuclides) for diagnosis, therapy and research.", "پزشکی هسته‌ای", "dx", "img", []],
    ["ointment", "OYNT-ment", "Drug in a base that keeps it in contact with the skin; unguent.", "پماد", "rx", "route", ["ung"]],
    ["oncogene", "ON-ko-jene", "A gene that causes a tumor (cancer).", "انکوژن (ژن سرطان‌زا)", "lx", "wp", []],
    ["oncogenic", "on-ko-JEN-ik", "Causing a tumor (onc/o + gen + -ic).", "تومورزا", "lx", "wp", []],
    ["oncolysis", "on-KOL-ih-sis", "Destruction of a tumor (onc/o + -lysis).", "تخریب تومور", "lx", "wp", []],
    ["open reduction", "O-pen re-DUK-shun", "Surgical incision to access broken bones directly and realign them.", "جااندازی باز شکستگی", "tx", "surg", []],
    ["ophthalmoscope", "of-THAL-mo-skope", "Instrument for examining the interior of the eye.", "افتالموسکوپ (چشم‌بین)", "dx", "exam", []],
    ["opportunistic", "op-por-tu-NIS-tik", "Describing an infection that occurs because of a host’s poor or altered condition.", "فرصت‌طلب", "mc", "mic", []],
    ["oral", "OR-al", "Given by mouth; per os.", "خوراکی", "rx", "route", ["po"]],
    ["osteoclasis", "os-te-OK-lah-sis", "Breaking of a bone (oste/o + -clasis).", "شکستن استخوان", "lx", "wp", []],
    ["osteomalacia", "os-te-o-mah-LA-she-ah", "Softening of a bone (oste/o + malacia).", "نرمی استخوان", "lx", "wp", []],
    ["osteonecrosis", "os-te-o-neh-KRO-sis", "Death of bone tissue (oste/o + necrosis).", "مرگ بافت استخوان", "lx", "wp", []],
    ["osteopathy", "os-te-OP-ah-the", "System of therapy stressing identification and correction of faulty body structure (oste/o: bone).", "استئوپاتی", "tx", "alt", []],
    ["otoscope", "O-to-skope", "Instrument used to examine the ears.", "اتوسکوپ (گوش‌بین)", "dx", "exam", []],
    ["over-the-counter drug", "O-ver the KOWN-ter", "Drug available without a signed order or prescription.", "داروی بدون نسخه", "rx", "drug", ["OTC"]],
    ["pachycephaly", "pak-ih-SEF-ah-le", "Abnormal thickness of the skull (pachy- + cephal/o).", "ضخامت غیرطبیعی جمجمه", "lx", "wp", []],
    ["pachydactyly", "pak-e-DAK-til-e", "Abnormal thickness of the fingers (pachy- + dactyl/o).", "ضخامت غیرطبیعی انگشتان", "lx", "wp", []],
    ["palliative therapy", "PAL-e-ah-tiv", "Treatment that provides relief but is not intended as a cure.", "درمان تسکینی", "tx", "care", []],
    ["pallor", "PAL-or", "Paleness; lack of color.", "رنگ‌پریدگی", "dx", "sx", []],
    ["palpation", "pal-PA-shun", "Examining by placing the hands or fingers on the surface of the body to determine texture, temperature, movement and consistency.", "لمس (ملامسه)", "dx", "exam", []],
    ["pandemic", "pan-DEM-ik", "Prevalent throughout an entire region or the world.", "همه‌گیری جهانی (پاندمی)", "mc", "mic", []],
    ["paracentesis", "par-ah-sen-TE-sis", "Puncture of a cavity for removal of fluid.", "پاراسنتز (کشیدن مایع از حفره)", "tx", "care", []],
    ["parasite", "PAR-ah-site", "An organism that grows on or in another organism (the host), causing damage to it.", "انگل", "mc", "mic", []],
    ["parenteral", "pah-REN-ter-al", "Describing routes of administration by injection, other than through the digestive tract.", "تزریقی (غیرگوارشی)", "rx", "route", []],
    ["pathogen", "PATH-o-jen", "An organism capable of causing disease (path/o: disease).", "عامل بیماری‌زا (پاتوژن)", "mc", "mic", []],
    ["pathogenesis", "path-o-JEN-eh-sis", "Origin and development of any disease (path/o + -genesis).", "بیماری‌زایی (پاتوژنز)", "lx", "wp", []],
    ["pathogenic", "path-o-JEN-ik", "Producing disease.", "بیماری‌زا", "mc", "mic", []],
    ["pathologist", "pah-THOL-o-jist", "A specialist in the study of disease, especially of tissue changes (path/o + -logist).", "پاتولوژیست (آسیب‌شناس)", "lx", "wp", []],
    ["percussion", "per-KUSH-un", "Tapping the body lightly but sharply to assess underlying tissue by the sounds obtained.", "دق (ضربه زدن)", "dx", "exam", []],
    ["peripherally inserted central catheter", "peh-RIF-er-al-e", "Catheter inserted into an arm vein and threaded into the superior vena cava.", "کاتتر مرکزی از راه رگ محیطی", "tx", "care", ["PICC"]],
    ["phagocyte", "FAG-o-site", "A cell that ingests and destroys bacteria and debris, such as a macrophage.", "فاگوسیت (سلول بیگانه‌خوار)", "rs", "imm", []],
    ["phagocytosis", "fag-o-si-TO-sis", "The ingestion of organisms or small particles by a cell (phag/o: to eat), which then destroys the ingested material.", "فاگوسیتوز (بیگانه‌خواری)", "rs", "imm", []],
    ["pharmacist", "FAR-mah-sist", "Professional who prepares and dispenses drugs; an excellent source of drug information.", "داروساز", "rx", "drug", []],
    ["pharmacology", "far-mah-KOL-o-je", "Study of drugs and their actions.", "داروشناسی (فارماکولوژی)", "rx", "drug", []],
    ["pharmacy", "FAR-mah-se", "The science of preparing and dispensing drugs, or the place where this occurs (pharm, pharmac/o).", "داروخانه؛ داروسازی", "rx", "drug", []],
    ["phlebosclerosis", "fleb-o-skleh-RO-sis", "Hardening of veins (phleb/o + sclerosis).", "سخت شدن سیاهرگ‌ها", "lx", "wp", []],
    ["phonogram", "FO-no-gram", "A record of sound.", "ثبت صدا", "dx", "wp", []],
    ["photoreaction", "fo-to-re-AK-shun", "Response to light.", "واکنش به نور", "dx", "wp", []],
    ["physical examination", "FIZ-ih-kal eg-zam-ih-NA-shun", "Examination of the body, including a review of all systems and observation of any signs of illness.", "معاینه فیزیکی", "dx", "exam", ["PE"]],
    ["phytomedicine", "fi-to-MED-ih-sin", "Another name for herbal medicine (phyt/o: plant).", "گیاه‌درمانی", "rx", "drug", []],
    ["pleurodesis", "plu-ROD-eh-sis", "Binding of the pleura, the membranes around the lungs (pleur/o + -desis).", "پلورودز (چسباندن پرده جنب)", "tx", "surg", []],
    ["polygraph", "POL-e-graf", "Instrument that records many physiologic responses at once; lie detector.", "پلی‌گراف (دروغ‌سنج)", "dx", "wp", []],
    ["polyp", "POL-ip", "A tumor attached by a thin stalk.", "پولیپ", "rs", "neo", []],
    ["portal of entry", "POR-tal", "Route by which an infecting organism enters the body, such as damaged skin or the respiratory, digestive, urinary or reproductive tract.", "راه ورود میکروب", "mc", "mic", []],
    ["positron emission tomography", "POZ-ih-tron e-MISH-un", "Sectional imaging after giving a substance such as glucose labeled with a positron-emitting isotope; shows metabolic activity.", "پت‌اسکن (توموگرافی گسیل پوزیترون)", "dx", "img", ["PET"]],
    ["postoperative", "post-OP-er-ah-tiv", "After surgery; includes recovery from anesthesia, follow-up and home-care instructions.", "پس از عمل", "tx", "surg", ["postop"]],
    ["potentiation", "po-ten-she-A-shun", "Increased potency created by two drugs acting together.", "تقویت اثر (پتانسیاسیون)", "rx", "drug", []],
    ["preoperative", "pre-OP-er-ah-tiv", "Before surgery; includes examination, informed consent and preadmission testing.", "پیش از عمل", "tx", "surg", ["preop"]],
    ["prescription", "pre-SKRIP-shun", "Written and signed order for a drug with directions for its administration.", "نسخه", "rx", "drug", ["Rx"]],
    ["prodrome", "PRO-drome", "A symptom indicating an approaching disease.", "پیش‌نشانه (پرودروم)", "dx", "sx", []],
    ["prognosis", "prog-NO-sis", "Prediction of a disease’s course and outcome.", "پیش‌آگهی", "tx", "care", []],
    ["prolapse", "PRO-laps", "A dropping or downward displacement of an organ or part; ptosis.", "افتادگی اندام (پرولاپس)", "rs", "les", []],
    ["prophylaxis", "pro-fih-LAK-sis", "Prevention of disease.", "پیشگیری", "tx", "care", []],
    ["protozoon", "pro-to-ZO-on", "Single-celled animal; plural: protozoa; causes malaria and dysentery.", "تک‌یاخته (پروتوزوئر)", "mc", "mic", []],
    ["psychotropic", "si-ko-TROP-ik", "Acting on the mind (psych/o).", "روان‌گردان (اثرگذار بر روان)", "rx", "drug", []],
    ["ptosis", "TO-sis", "Dropping, downward displacement or prolapse of an organ or part.", "افتادگی (پتوز)", "rs", "les", []],
    ["pulse", "puls", "Rhythmic expansion of an artery felt with each heartbeat; rate measured in beats per minute.", "نبض", "dx", "exam", ["P"]],
    ["purulent", "PUR-u-lent", "Forming or containing pus.", "چرکی", "rs", "inf", []],
    ["pus", "pus", "A product of inflammation consisting of fluid and white blood cells (root py/o).", "چرک", "rs", "inf", []],
    ["pyocyst", "PI-o-sist", "A cyst filled with pus (py/o + cyst).", "کیست چرکی", "lx", "wp", []],
    ["pyoderma", "pi-o-DER-mah", "A skin disease associated with pus (py/o + derm/o).", "عفونت چرکی پوست (پیودرما)", "lx", "wp", []],
    ["pyogenesis", "pi-o-JEN-eh-sis", "Formation of pus (py/o + -genesis).", "چرک‌سازی", "lx", "wp", []],
    ["pyorrhea", "pi-o-RE-ah", "Discharge of pus (py/o + -rrhea).", "چرک‌ریزی (پیوره)", "lx", "wp", []],
    ["pyrexia", "pi-REK-se-ah", "Fever (root pyr/o, pyret/o: fever, fire).", "تب", "lx", "wp", []],
    ["pyrogenic", "pi-ro-JEN-ik", "Inducing fever (pyr/o + gen + -ic).", "تب‌زا", "lx", "wp", []],
    ["radiation therapy", "ra-de-A-shun", "Treatment of disease, especially cancer, with radiation.", "پرتودرمانی", "tx", "care", ["RATx"]],
    ["radioactive", "ra-de-o-AK-tiv", "Giving off radiation.", "پرتوزا", "dx", "img", []],
    ["radiograph", "RA-de-o-graf", "Image produced by x-rays passed through the body onto film or a digital detector.", "رادیوگراف (عکس رادیولوژی)", "dx", "img", []],
    ["radiography", "ra-de-OG-rah-fe", "Use of x-rays passed through the body to make a visual record (radiograph) of internal structures on film or digitally; roentgenography.", "رادیوگرافی (عکس‌برداری با پرتو X)", "dx", "img", []],
    ["radiology", "ra-de-OL-o-je", "Branch of medicine that uses radiation, such as x-rays, in diagnosis and treatment; specialist: radiologist.", "رادیولوژی", "dx", "img", []],
    ["radionuclide", "ra-de-o-NU-klide", "A substance that gives off radiation; used for diagnosis and treatment; radioisotope.", "رادیونوکلئید (ماده پرتوزا)", "dx", "img", []],
    ["rasp", "rasp", "Surgical file.", "سوهان جراحی", "tx", "inst", []],
    ["rectal", "REK-tal", "Administered by rectal suppository or enema.", "مقعدی", "rx", "route", []],
    ["remission", "re-MISH-un", "Lessening of disease symptoms; the period during which this decrease occurs or no sign of disease exists.", "فروکش (بهبود نسبی)", "mc", "type", []],
    ["resection", "re-SEK-shun", "Partial excision of a structure.", "برداشتن بخشی از اندام (رزکسیون)", "tx", "surg", []],
    ["retinoschisis", "ret-ih-NOS-kih-sis", "Splitting of the retina of the eye (retin/o + -schisis).", "شکافتگی شبکیه", "lx", "wp", []],
    ["retractor", "re-TRAK-tor", "Instrument that maintains exposure by separating a wound and holding back organs or tissues.", "رترکتور (کنارزن)", "tx", "inst", []],
    ["rhinoplasty", "RI-no-plas-te", "Plastic surgery of the nose (rhin/o + -plasty).", "جراحی زیبایی بینی (رینوپلاستی)", "tx", "surg", []],
    ["rickettsia", "rih-KET-se-ah", "Extremely small bacteria that grow in living cells; cause typhus and Rocky Mountain spotted fever.", "ریکتزیا", "mc", "mic", []],
    ["robotic surgery", "ro-BOT-ik", "Computer-assisted surgery using robotic instruments; less invasive and with less bleeding.", "جراحی رباتیک", "tx", "surg", []],
    ["rongeur", "ron-ZHUR", "Gouge forceps.", "رونژور (گاز انبر استخوان)", "tx", "inst", []],
    ["sarcoma", "sar-KO-mah", "A malignant neoplasm arising from connective tissue or muscle (Greek sarco: flesh).", "سارکوم (سرطان بافت همبند)", "rs", "neo", []],
    ["scalpel", "SKAL-pel", "Surgical knife with a sharp blade.", "اسکالپل (تیغ جراحی)", "tx", "inst", []],
    ["scintigraphy", "sin-TIG-rah-fe", "Imaging the distribution of radioactivity in tissues after giving a radionuclide; the record is a scintiscan.", "اسکن هسته‌ای (سینتی‌گرافی)", "dx", "img", []],
    ["scintiscan", "SIN-tih-skan", "Image obtained with a radionuclide and a scintillation camera, such as a bone scan.", "سینتی‌اسکن", "dx", "img", []],
    ["scissors", "SIZ-ors", "A cutting instrument with two opposing blades.", "قیچی جراحی", "tx", "inst", []],
    ["sclerosis", "skle-RO-sis", "Hardening of tissue (scler/o + -osis).", "سفت شدن بافت (اسکلروز)", "lx", "wp", []],
    ["sclerotic", "skleh-ROT-ik", "Hardened; pertaining to sclerosis.", "سفت‌شده", "lx", "wp", []],
    ["sepsis", "SEP-sis", "The presence of harmful microorganisms or their toxins in the blood or other tissues; adjective: septic.", "سپسیس (عفونت خون و بافت)", "rs", "inf", []],
    ["septicemia", "sep-tih-SE-me-ah", "Presence of pathogenic bacteria in the blood; blood poisoning.", "سپتی‌سمی (مسمومیت خون)", "rs", "inf", []],
    ["sequela", "seh-KWEL-ah", "A lasting effect of a disease; plural: sequelae.", "عارضه ماندگار (سکوئل)", "dx", "sx", []],
    ["side effect", "side eh-FEKT", "A result of therapy unrelated to or an extension of its intended effect; usually undesirable.", "عارضه جانبی", "rx", "drug", []],
    ["sign", "sine", "Objective evidence of disease that can be observed or tested, such as fever, rash or high blood pressure.", "نشانه (یافته عینی)", "dx", "sci", []],
    ["single-photon emission computed tomography", "SIN-gl FO-ton", "Scintigraphic technique that shows a radioisotope’s cross-sectional distribution.", "اسپکت (توموگرافی تک‌فوتونی)", "dx", "img", ["SPECT"]],
    ["sonogram", "SON-o-gram", "Record obtained by use of ultrasound (son/o: sound).", "سونوگرام (تصویر سونوگرافی)", "dx", "img", []],
    ["sound", "sownd", "Instrument for exploring a cavity or canal.", "ساند (میله کاوش)", "tx", "inst", []],
    ["speculum", "SPEK-u-lum", "An instrument for examining a canal.", "اسپکولوم (بازکننده مجرا)", "dx", "exam", []],
    ["sphygmomanometer", "sfig-mo-mah-NOM-eh-ter", "Blood pressure apparatus or cuff; pressure is read in mm Hg and reported as systolic/diastolic.", "فشارسنج", "dx", "exam", []],
    ["spirochetes", "SPI-ro-ketze", "Corkscrew-shaped bacteria that move with a twisting motion; cause Lyme disease and syphilis.", "اسپیروکت‌ها (باکتری‌های مارپیچی)", "mc", "mic", []],
    ["splenomalacia", "sple-no-mah-LA-she-ah", "Softening of the spleen (splen/o + malacia).", "نرمی طحال", "lx", "wp", []],
    ["splenoptosis", "sple-nop-TO-sis", "Downward displacement of the spleen (splen/o + ptosis).", "افتادگی طحال", "lx", "wp", []],
    ["splenotoxin", "sple-no-TOK-sin", "A substance poisonous for the spleen (splen/o + toxin).", "سم طحال", "lx", "wp", []],
    ["staging", "STA-jing", "Classifying malignant tumors by extent of spread for diagnosis, treatment and prognosis, as with the TNM system.", "مرحله‌بندی تومور", "tx", "care", ["TNM"]],
    ["staphylococcus", "staf-ih-lo-KOK-us", "A round bacterium that forms grape-like clusters (staphylo-); plural: staphylococci.", "استافیلوکوک", "mc", "mic", ["Staph"]],
    ["stapling", "STA-pling", "Joining tissue with wire staples pushed through the tissue and then bent.", "منگنه جراحی", "tx", "surg", []],
    ["stethoscope", "STETH-o-skope", "Instrument used for listening to sounds produced within the body (steth/o: chest).", "گوشی پزشکی (استتوسکوپ)", "dx", "exam", []],
    ["streptobacillus", "strep-to-bah-SIL-us", "A rod-shaped bacterium that forms chains.", "استرپتوباسیل (باسیل زنجیره‌ای)", "mc", "mic", []],
    ["streptococcus", "strep-to-KOK-us", "A round bacterium that forms chains (strepto-); plural: streptococci.", "استرپتوکوک", "mc", "mic", ["Strep"]],
    ["subacute", "sub-ah-KUTE", "Between acute and chronic in onset and course.", "نیمه‌حاد", "mc", "type", []],
    ["subcutaneous", "sub-ku-TA-ne-us", "Injected beneath the skin; hypodermic.", "زیرجلدی", "rx", "route", ["SC", "SQ", "subcut"]],
    ["sublingual", "sub-LING-gwal", "Administered under the tongue.", "زیرزبانی", "rx", "route", ["SL"]],
    ["substance dependence", "SUB-stans de-PEN-dens", "Chronic or compulsive need for a drug regardless of its adverse effects; psychological or physical.", "وابستگی به مواد", "rx", "drug", []],
    ["suppository", "su-POZ-ih-tor-e", "Substance molded with a base that melts easily when inserted into a body opening.", "شیاف", "rx", "route", ["supp"]],
    ["suppuration", "sup-u-RA-shun", "Pus formation.", "چرک کردن", "rs", "inf", []],
    ["surgeon", "SUR-jun", "A physician who specializes in surgery.", "جراح", "tx", "surg", []],
    ["surgery", "SUR-jer-e", "A method for treating disease or injury by manual operations.", "جراحی", "tx", "surg", []],
    ["suspension", "sus-PEN-shun", "Fine particles dispersed in a liquid; must be shaken before use.", "سوسپانسیون", "rx", "route", ["susp"]],
    ["suture", "SU-chur", "To unite parts by stitching them together; also the thread used or the seam formed (suffix -rhaphy).", "بخیه", "tx", "surg", []],
    ["sympathomimetic", "sim-pah-tho-mih-MET-ik", "Mimicking the effects of the sympathetic nervous system.", "سمپاتومیمتیک (شبه‌سمپاتیک)", "rx", "drug", []],
    ["symptom", "SIMP-tum", "Any evidence of disease; sometimes limited to subjective evidence experienced by the patient, such as pain, dizziness and weakness.", "علامت (شکایت بیمار)", "dx", "sci", []],
    ["synchrony", "SIN-kro-ne", "Occurrence at the same time.", "هم‌زمانی", "dx", "wp", []],
    ["syncope", "SIN-ko-pe", "A temporary loss of consciousness because of inadequate blood flow to the brain; fainting.", "سنکوپ (غش)", "dx", "sx", []],
    ["syndrome", "SIN-drome", "A group of signs and symptoms that together characterize a disease condition.", "سندرم (نشانگان)", "dx", "sx", []],
    ["synergistic", "sin-er-JIS-tik", "Working together with increased effect, such as certain drugs in combination (erg/o: work).", "هم‌افزا", "rx", "drug", []],
    ["synergy", "SIN-er-je", "Combined action of two or more drugs producing an effect greater than any could produce alone; synergism; adjective: synergistic.", "هم‌افزایی (سینرژی)", "rx", "drug", []],
    ["syringe", "sir-INJ", "An instrument for injecting fluid.", "سرنگ", "rx", "route", []],
    ["systemic", "sis-TEM-ik", "Pertaining to the whole body.", "سیستمیک (همه‌بدنی)", "mc", "type", []],
    ["systolic pressure", "sis-TOL-ik", "Blood pressure recorded when the heart is contracting.", "فشار سیستولی (بیشینه)", "dx", "exam", []],
    ["tablet", "TAB-let", "Solid dosage form of a drug prepared by compression or molding; a pill.", "قرص", "rx", "route", ["tab"]],
    ["tachycardia", "tak-ih-KAR-de-ah", "Rapid heart rate (tachy- + cardi/o).", "تندی ضربان قلب (تاکی‌کاردی)", "lx", "wp", []],
    ["therapy", "THER-ah-pe", "Treatment; intervention.", "درمان", "tx", "care", ["Rx"]],
    ["thermometer", "ther-MOM-eh-ter", "Instrument for measuring temperature.", "دماسنج", "dx", "wp", []],
    ["thoracentesis", "thor-ah-sen-TE-sis", "Puncture of the chest (thorac/o + -centesis).", "توراسنتز (کشیدن مایع قفسه سینه)", "tx", "surg", []],
    ["thoracoschisis", "tho-rah-KOS-kih-sis", "Congenital fissure of the chest wall (thorac/o + -schisis).", "شکاف قفسه سینه", "lx", "wp", []],
    ["thrombolytic", "throm-bo-LIT-ik", "Agent that dissolves a blood clot (thrombus).", "لخته‌شکن", "rx", "drug", []],
    ["tincture", "TINK-chur", "Substance dissolved in an alcoholic solution.", "تنتور", "rx", "route", ["tinct"]],
    ["tolerance", "TOL-er-ans", "Condition in which chronic use of a drug results in loss of effectiveness so the dose must be increased.", "تحمل دارویی", "rx", "drug", []],
    ["tonsillitis", "ton-sih-LI-tis", "Inflammation of the tonsils.", "التهاب لوزه‌ها", "rs", "inf", []],
    ["topical", "TOP-ih-kal", "Applied to the surface of the skin.", "موضعی", "rx", "route", []],
    ["toxicity", "tok-SIS-ih-te", "State of being poisonous.", "سمیت", "rx", "drug", []],
    ["toxicology", "tok-sih-KOL-o-je", "Study of poisons (toxic/o + -logy).", "سم‌شناسی", "lx", "wp", []],
    ["toxin", "TOKS-in", "A poison; adjective: toxic (roots tox/o, toxic/o).", "سم (توکسین)", "mc", "mic", []],
    ["toxoid", "TOK-soyd", "Like a poison; an inactivated toxin used as a vaccine (tox/o + -oid).", "شبه‌سم (توکسوئید)", "lx", "wp", []],
    ["tracheostomy", "tra-ke-OS-to-me", "Creation of an opening into the trachea (trache/o + -stomy).", "تراکئوستومی (دهانه نای)", "tx", "surg", []],
    ["tracheotomy", "tra-ke-OT-o-me", "Incision into the trachea (trache/o + -tomy).", "برش نای", "tx", "surg", []],
    ["transdermal", "trans-DER-mal", "Absorbed through the skin, as from a patch placed on the skin.", "از راه پوست (برچسب پوستی)", "rx", "route", []],
    ["trauma", "TRAW-mah", "A physical or psychological wound or injury.", "ضربه؛ آسیب (تروما)", "mc", "type", []],
    ["trocar", "TRO-kar", "Sharp pointed instrument contained in a cannula, used to puncture a cavity.", "تروکار", "tx", "inst", []],
    ["ultrasonography", "ul-trah-son-OG-rah-fe", "Generation of an image from echoes of high-frequency sound waves; also called sonography or echography.", "سونوگرافی (فراصوت‌نگاری)", "dx", "img", []],
    ["urodynia", "u-ro-DIN-e-ah", "Pain on urination (ur/o + -odynia).", "درد هنگام ادرار", "lx", "wp", []],
    ["urolith", "U-ro-lith", "A stone in the urinary tract (ur/o + lith).", "سنگ ادراری", "lx", "wp", []],
    ["vaccine", "vak-SENE", "Preparation given to produce adaptive immunity against a specific disease.", "واکسن", "rs", "imm", []],
    ["vasodilation", "vas-o-di-LA-shun", "Widening of blood vessels (vas/o + dilation).", "گشاد شدن رگ", "lx", "wp", []],
    ["vial", "VI-al", "A small glass or plastic container.", "ویال", "rx", "route", []],
    ["vibrios", "VIB-re-oze", "Short curved rod-shaped bacteria; cause cholera and gastroenteritis.", "ویبریوها (باکتری‌های خمیده)", "mc", "mic", []],
    ["viremia", "vi-RE-me-ah", "Presence of viruses in the blood (vir/o + -emia).", "ویروس در خون (ویرمی)", "mc", "mic", []],
    ["virology", "vi-ROL-o-je", "Study of viruses (vir/o + -logy).", "ویروس‌شناسی", "mc", "mic", []],
    ["virus", "VI-rus", "Submicroscopic infectious agent that can live and reproduce only within living cells; causes colds, influenza and hepatitis.", "ویروس", "mc", "mic", []],
    ["vital signs", "VI-tal", "Measurements that reflect basic functions necessary to maintain life: temperature, pulse, respiration and blood pressure.", "علائم حیاتی", "dx", "exam", ["VS"]],
    ["withdrawal", "with-DRAW-al", "Condition that results from abrupt cessation or reduction of a drug used regularly.", "سندرم ترک (محرومیت)", "rx", "drug", []],
    ["xeroderma", "ze-ro-DER-mah", "Dryness of the skin (xero- + derm/o).", "خشکی پوست", "lx", "wp", []],
    ["xerosis", "ze-RO-sis", "Abnormal dryness (xero- + -osis).", "خشکی غیرطبیعی", "lx", "wp", []]
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
    ['a-, an-', ['an', 'a'], 'without, not, absence of', 'بدون، فاقد', '*'],
    ['ana-', ['ana'], 'lack of, backward', 'فقدان، وارونه', 'rs'],
    ['anti-', ['anti'], 'against', 'ضد', 'rx'],
    ['brady-', ['brady'], 'slow', 'کند', 'lx'],
    ['contra-', ['contra'], 'against, opposite, opposed', 'ضد، مخالف', 'rx'],
    ['counter-', ['counter'], 'against, opposed', 'مخالف، در برابر', 'rx'],
    ['dia-', ['dia'], 'through', 'از میان', 'lx'],
    ['dys-', ['dys'], 'abnormal, painful, difficult', 'نابه‌هنجار، دردناک، دشوار', 'lx'],
    ['endo-', ['endo'], 'within, inner', 'درون', 'lx'],
    ['epi-', ['epi'], 'upon, over', 'روی', 'rx'],
    ['ex-, exo-', ['exo', 'ex'], 'out, away from', 'بیرون', 'lx'],
    ['hyper-', ['hyper'], 'above normal, excessive', 'بیش از حد', '*'],
    ['hypo-', ['hypo'], 'below normal, under', 'کمتر از حد، زیر', '*'],
    ['in-', ['in'], 'in, into; not', 'درون؛ نا', 'rs'],
    ['intra-', ['intra'], 'within, inside', 'داخل', 'rx'],
    ['mal-', ['mal'], 'bad, poor', 'بد، ضعیف', 'lx'],
    ['meta-', ['meta'], 'change, beyond', 'تغییر، فراتر', 'rs'],
    ['micro-', ['micro'], 'small', 'ریز', 'mc'],
    ['neo-', ['neo'], 'new', 'نو، تازه', 'rs'],
    ['pachy-', ['pachy'], 'thick', 'ضخیم', 'lx'],
    ['pan-', ['pan'], 'all', 'همه', 'mc'],
    ['para-', ['para'], 'beside, near', 'کنار', 'tx'],
    ['poly-', ['poly'], 'many, much', 'چند، بسیار', 'dx'],
    ['post-', ['post'], 'after', 'پس از', 'tx'],
    ['pre-', ['pre'], 'before', 'پیش از', 'tx'],
    ['pro-', ['pro'], 'before, in front of', 'پیش', 'dx'],
    ['sub-', ['sub'], 'below, under', 'زیر', 'rx'],
    ['syn-, sym-', ['syn', 'sym'], 'together', 'با هم', 'rx'],
    ['tachy-', ['tachy'], 'rapid', 'تند', 'lx'],
    ['trans-', ['trans'], 'through, across', 'از راه، از میان', 'rx'],
    ['xero-', ['xero'], 'dry', 'خشک', 'lx'],
    ['staphylo-', ['staphylo'], 'grape-like cluster', 'خوشه انگوری', 'mc'],
    ['strepto-', ['strepto'], 'chain', 'زنجیره', 'mc'],
    // جدول ۳-۱: ریشه‌های بیماری
    ['alg/o, algi/o, algesi/o', ['algesi', 'algi', 'alg'], 'pain', 'درد', 'lx'],
    ['carcin/o', ['carcin'], 'cancer, carcinoma', 'سرطان', 'lx'],
    ['cyst/o', ['cyst'], 'filled sac or pouch, cyst, bladder', 'کیسه، کیست، مثانه', 'lx'],
    ['lith/o', ['lith'], 'calculus, stone', 'سنگ', 'lx'],
    ['onc/o', ['onc'], 'tumor', 'تومور', 'lx'],
    ['path/o', ['path'], 'disease', 'بیماری', 'lx'],
    ['py/o', ['py'], 'pus', 'چرک', 'lx'],
    ['pyr/o, pyret/o', ['pyret', 'pyr'], 'fever, fire', 'تب، آتش', 'lx'],
    ['scler/o', ['scler'], 'hard', 'سفت، سخت', 'lx'],
    ['tox/o, toxic/o', ['toxic', 'tox'], 'poison', 'سم', 'lx'],
    // جدول ۳-۵: ریشه‌های عفونت و ریشه‌های بیماری‌های عفونی
    ['bacill/i, bacill/o', ['bacill'], 'bacillus', 'باسیل', 'mc'],
    ['bacteri/o', ['bacteri'], 'bacterium', 'باکتری', 'mc'],
    ['myc/o', ['myc'], 'fungus, mold', 'قارچ', 'mc'],
    ['vir/o', ['vir'], 'virus', 'ویروس', 'mc'],
    ['cocc/o', ['cocc'], 'round bacterium, berry', 'باکتری گرد', 'mc'],
    ['nos/o', ['nos'], 'disease', 'بیماری', 'mc'],
    ['iatr/o', ['iatr'], 'physician, treatment', 'پزشک، درمان', 'mc'],
    ['idi/o', ['idi'], 'self, self-originating', 'خود، خودبه‌خود', 'mc'],
    ['dem/o', ['dem'], 'people', 'مردم', 'mc'],
    // پاسخ بدن
    ['phag/o', ['phag'], 'eat, ingest', 'خوردن، بلعیدن', 'rs'],
    ['cyt/o', ['cyt'], 'cell', 'سلول', 'rs'],
    ['plas', ['plas'], 'formation, development', 'شکل‌گیری، رشد', 'rs'],
    ['necr/o', ['necr'], 'death', 'مرگ', 'rs'],
    ['aden/o', ['aden'], 'gland', 'غده', 'rs'],
    ['melan/o', ['melan'], 'dark, black, melanin', 'تیره، سیاه', 'rs'],
    ['sarc/o', ['sarc'], 'flesh, connective tissue', 'گوشت، بافت همبند', 'rs'],
    ['immun/o', ['immun'], 'immunity, immune system', 'ایمنی', 'rs'],
    ['troph/o', ['troph'], 'nourishment, development', 'تغذیه، رشد', 'rs'],
    ['append/o, appendic/o', ['appendic', 'append'], 'appendix', 'آپاندیس', 'rs'],
    ['tonsill/o', ['tonsill'], 'tonsil', 'لوزه', 'rs'],
    // اندام‌ها (نمونه‌های جدول‌ها و تمرین‌ها)
    ['hepat/o', ['hepat'], 'liver', 'کبد', 'lx'],
    ['gastr/o', ['gastr'], 'stomach', 'معده', 'lx'],
    ['cardi/o', ['cardi'], 'heart', 'قلب', 'lx'],
    ['neur/o', ['neur'], 'nerve', 'عصب', 'lx'],
    ['my/o', ['my'], 'muscle', 'ماهیچه', 'lx'],
    ['oste/o', ['oste'], 'bone', 'استخوان', 'lx'],
    ['nephr/o', ['nephr'], 'kidney', 'کلیه', 'lx'],
    ['splen/o', ['splen'], 'spleen', 'طحال', 'lx'],
    ['cephal/o', ['cephal'], 'head', 'سر', 'lx'],
    ['crani/o', ['crani'], 'skull, cranium', 'جمجمه', 'lx'],
    ['blephar/o', ['blephar'], 'eyelid', 'پلک', 'lx'],
    ['phleb/o', ['phleb'], 'vein', 'سیاهرگ', 'lx'],
    ['arteri/o', ['arteri'], 'artery', 'سرخرگ', 'lx'],
    ['bronch/o', ['bronch'], 'bronchus', 'نایژه', 'lx'],
    ['ur/o', ['ur'], 'urine, urinary tract', 'ادرار، دستگاه ادراری', 'lx'],
    ['men/o', ['men'], 'month, menstruation', 'قاعدگی', 'lx'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', 'خون', 'lx'],
    ['lip/o', ['lip'], 'fat', 'چربی', 'lx'],
    ['adip/o', ['adip'], 'fat', 'چربی', 'lx'],
    ['derm/o, dermat/o', ['dermat', 'derm'], 'skin', 'پوست', 'lx'],
    ['dactyl/o', ['dactyl'], 'finger, toe', 'انگشت', 'lx'],
    ['retin/o', ['retin'], 'retina', 'شبکیه', 'lx'],
    ['kary/o', ['kary'], 'nucleus', 'هسته سلول', 'lx'],
    ['hydr/o', ['hydr'], 'water, fluid', 'آب، مایع', 'lx'],
    ['amni/o', ['amni'], 'amnion, amniotic sac', 'کیسه آمنیون', 'lx'],
    ['blast/o', ['blast'], 'immature cell', 'سلول نابالغ', 'lx'],
    ['enter/o', ['enter'], 'intestine', 'روده', 'lx'],
    ['thorac/o', ['thorac'], 'chest', 'قفسه سینه', 'tx'],
    ['arthr/o', ['arthr'], 'joint', 'مفصل', 'tx'],
    ['pleur/o', ['pleur'], 'pleura', 'پرده جنب', 'tx'],
    ['hyster/o', ['hyster'], 'uterus', 'رحم', 'tx'],
    ['rhin/o', ['rhin'], 'nose', 'بینی', 'tx'],
    ['herni/o', ['herni'], 'hernia', 'فتق', 'tx'],
    ['trache/o', ['trache'], 'trachea', 'نای', 'tx'],
    ['lapar/o', ['lapar'], 'abdominal wall', 'دیواره شکم', 'tx'],
    ['celi/o', ['celi'], 'abdomen', 'شکم', 'tx'],
    ['col/o', ['col'], 'colon', 'روده بزرگ', 'tx'],
    ['steth/o', ['steth'], 'chest', 'سینه', 'dx'],
    ['ophthalm/o', ['ophthalm'], 'eye', 'چشم', 'dx'],
    ['ot/o', ['ot'], 'ear', 'گوش', 'dx'],
    ['audi/o', ['audi'], 'hearing', 'شنوایی', 'dx'],
    ['encephal/o', ['encephal'], 'brain', 'مغز', 'dx'],
    ['cyan/o', ['cyan'], 'blue', 'آبی، کبود', 'dx'],
    ['noct/i, nyct/o', ['noct', 'nyct'], 'night', 'شب', 'dx'],
    ['metr/o', ['metr'], 'measure', 'اندازه', 'dx'],
    ['sphygm/o', ['sphygm'], 'pulse', 'نبض', 'dx'],
    ['man/o', ['man'], 'pressure', 'فشار', 'dx'],
    // جدول ۳-۶: نیروهای فیزیکی
    ['aer/o', ['aer'], 'air, gas', 'هوا، گاز', 'dx'],
    ['bar/o', ['bar'], 'pressure', 'فشار', 'dx'],
    ['chrom/o, chromat/o', ['chromat', 'chrom'], 'color, stain', 'رنگ', 'dx'],
    ['chron/o', ['chron'], 'time', 'زمان', 'dx'],
    ['cry/o', ['cry'], 'cold', 'سرما', 'dx'],
    ['electr/o', ['electr'], 'electricity', 'برق', 'dx'],
    ['erg/o', ['erg'], 'work', 'کار', 'dx'],
    ['phon/o', ['phon'], 'sound, voice', 'صدا', 'dx'],
    ['phot/o', ['phot'], 'light', 'نور', 'dx'],
    ['radi/o', ['radi'], 'radiation, x-ray', 'پرتو، اشعه X', 'dx'],
    ['son/o', ['son'], 'sound', 'صدا (فراصوت)', 'dx'],
    ['therm/o', ['therm'], 'heat, temperature', 'گرما، دما', 'dx'],
    // جدول ۳-۹: دارو
    ['chem/o', ['chem'], 'chemical', 'ماده شیمیایی', 'rx'],
    ['hypn/o', ['hypn'], 'sleep', 'خواب', 'rx'],
    ['narc/o', ['narc'], 'stupor', 'بی‌حسی و منگی', 'rx'],
    ['pharm, pharmac/o', ['pharmac', 'pharm'], 'drug, medicine', 'دارو', 'rx'],
    ['vas/o', ['vas'], 'vessel', 'رگ', 'rx'],
    ['phyt/o', ['phyt'], 'plant', 'گیاه', 'rx'],
    ['psych/o', ['psych'], 'mind', 'روان', 'rx'],
    ['thromb/o', ['thromb'], 'blood clot', 'لخته خون', 'rx'],
    ['muc/o', ['muc'], 'mucus', 'مخاط، خلط', 'rx'],
    ['emet/o', ['emet'], 'vomiting', 'استفراغ', 'rx'],
    ['sympath/o', ['sympath'], 'sympathetic nervous system', 'دستگاه عصبی سمپاتیک', 'rx'],
    ['dilat/o', ['dilat'], 'widen, expand', 'گشاد کردن', 'rx'],
    ['dur/o', ['dur'], 'hard; dura mater', 'سخت؛ سخت‌شامه', 'rx'],
    ['lingu/o', ['lingu'], 'tongue', 'زبان', 'rx'],
    ['cutane/o', ['cutane'], 'skin', 'پوست', 'rx'],
    ['ven/o', ['ven'], 'vein', 'سیاهرگ', 'rx'],
    ['muscul/o', ['muscul'], 'muscle', 'ماهیچه', 'rx'],
    ['thec/o', ['thec'], 'sheath (meninges)', 'غلاف (پرده‌های نخاع)', 'rx'],
    // جدول ۳-۳: پسوندهای بیماری
    ['-algia, -algesia', ['algesia', 'algia'], 'pain', 'درد', 'lx'],
    ['-cele', ['cele'], 'hernia, localized dilation', 'فتق، برآمدگی', 'lx'],
    ['-clasis, -clasia', ['clasis', 'clasia'], 'breaking', 'شکستن', 'lx'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-megaly', ['megaly'], 'enlargement', 'بزرگی', 'lx'],
    ['-odynia', ['odynia', 'dynia'], 'pain', 'درد', 'lx'],
    ['-oma', ['oma'], 'tumor', 'تومور', '*'],
    ['-pathy', ['pathy'], 'any disease of', 'بیماری', 'lx'],
    ['-rhage, -rhagia', ['rrhagia', 'rrhage', 'rhagia', 'rhage'], 'bursting forth, profuse flow, hemorrhage', 'خون‌ریزی شدید، فوران', 'lx'],
    ['-rhea', ['rrhea', 'rhea'], 'flow, discharge', 'جریان، ترشح', 'lx'],
    ['-rhexis', ['rrhexis', 'rhexis'], 'rupture', 'پارگی', 'lx'],
    ['-schisis', ['schisis'], 'fissure, splitting', 'شکاف', 'lx'],
    // جدول ۳-۴: واژه‌هایی که پسوند می‌شوند
    ['-dilation, -dilatation', ['dilatation', 'dilation'], 'expansion, widening', 'گشادی', 'lx'],
    ['-ectasia, -ectasis', ['ectasia', 'ectasis'], 'dilation, distension', 'گشادی، اتساع', 'lx'],
    ['-edema', ['edema'], 'accumulation of fluid, swelling', 'ورم، تجمع مایع', 'lx'],
    ['-lysis', ['lysis'], 'separation, loosening, dissolving, destruction', 'جدا شدن، حل شدن، تخریب', 'lx'],
    ['-malacia', ['malacia'], 'softening', 'نرمی', 'lx'],
    ['-necrosis', ['necrosis'], 'death of tissue', 'مرگ بافت', 'lx'],
    ['-ptosis', ['ptosis'], 'dropping, downward displacement', 'افتادگی', 'lx'],
    ['-sclerosis', ['sclerosis'], 'hardening', 'سفت شدن', 'lx'],
    ['-spasm', ['spasm'], 'sudden contraction, cramp', 'گرفتگی ناگهانی', 'lx'],
    ['-stasis', ['stasis'], 'suppression, stoppage', 'توقف', 'lx'],
    ['-stenosis', ['stenosis'], 'narrowing, constriction', 'تنگی', 'lx'],
    ['-toxin', ['toxin'], 'poison', 'سم', 'lx'],
    // پسوندهای پایه
    ['-genesis', ['genesis'], 'formation, origin', 'پیدایش، ساخته شدن', 'lx'],
    ['-gen, -genic', ['genic', 'gen'], 'producing, causing', 'ایجادکننده، ‌زا', 'lx'],
    ['-logy', ['logy'], 'study of', 'علم، شناخت', '*'],
    ['-logist', ['logist'], 'specialist in a field of study', 'متخصص', '*'],
    ['-osis, -iasis', ['iasis', 'osis'], 'condition, process', 'حالت، فرایند', '*'],
    ['-emia', ['emia'], 'condition of blood', 'حالت خون', 'mc'],
    ['-uria', ['uria'], 'condition of urine', 'حالت ادرار', 'mc'],
    ['-cide, -cidal', ['cidal', 'cide'], 'killing', 'کشنده', 'mc'],
    ['-static', ['static'], 'stopping, controlling', 'متوقف‌کننده', 'mc'],
    ['-pnea', ['pnea'], 'breathing', 'تنفس', 'lx'],
    ['-phagia', ['phagia'], 'eating, swallowing', 'بلع', 'lx'],
    ['-oid', ['oid'], 'like, resembling', 'شبیه', 'lx'],
    ['-plasia, -plasm', ['plasia', 'plasm'], 'formation, development, growth', 'رشد، شکل‌گیری', 'rs'],
    ['-trophy', ['trophy'], 'nourishment, development', 'تغذیه، رشد', 'rs'],
    ['-cyte', ['cyte'], 'cell', 'سلول', 'rs'],
    // جدول ۳-۷: پسوندهای تشخیص
    ['-graph', ['graph'], 'instrument for recording data', 'ابزار ثبت', 'dx'],
    ['-graphy', ['graphy'], 'act of recording data', 'روش ثبت', 'dx'],
    ['-gram', ['gram'], 'a record of data', 'ثبت، تصویر', 'dx'],
    ['-meter', ['meter'], 'instrument for measuring', 'ابزار اندازه‌گیری', 'dx'],
    ['-metry', ['metry'], 'measurement of', 'اندازه‌گیری', 'dx'],
    ['-scope', ['scope'], 'instrument for viewing or examining', 'ابزار دیدن', 'dx'],
    ['-scopy', ['scopy'], 'examination of', 'معاینه با دیدن', 'dx'],
    ['-opsy', ['opsy'], 'viewing', 'دیدن', 'dx'],
    // جدول ۳-۸: پسوندهای جراحی
    ['-centesis', ['centesis'], 'puncture, tap', 'سوراخ کردن و کشیدن مایع', 'tx'],
    ['-desis', ['desis'], 'binding, fusion', 'جوش دادن، بستن', 'tx'],
    ['-ectomy', ['ectomy'], 'excision, surgical removal', 'برداشتن', 'tx'],
    ['-pexy', ['pexy'], 'surgical fixation', 'ثابت کردن', 'tx'],
    ['-plasty', ['plasty'], 'plastic repair, reconstruction', 'ترمیم، بازسازی', 'tx'],
    ['-rhaphy', ['rrhaphy', 'rhaphy'], 'surgical repair, suture', 'ترمیم با بخیه', 'tx'],
    ['-stomy', ['stomy'], 'surgical creation of an opening', 'ساختن دهانه', 'tx'],
    ['-tome', ['tome'], 'instrument for incising (cutting)', 'ابزار برش', 'tx'],
    ['-tomy', ['tomy'], 'incision, cutting', 'برش', 'tx'],
    ['-tripsy', ['tripsy'], 'crushing', 'خرد کردن', 'tx'],
    ['-therapy', ['therapy'], 'treatment', 'درمان', 'tx'],
    // جدول ۳-۹: پسوندهای دارو
    ['-lytic', ['lytic'], 'dissolving, reducing, loosening', 'حل‌کننده، کاهنده', 'rx'],
    ['-mimetic', ['mimetic'], 'mimicking, simulating', 'تقلیدکننده', 'rx'],
    ['-tropic', ['tropic'], 'acting on', 'اثرگذار بر', 'rx'],
    ['-emetic, -emesis', ['emetic', 'emesis'], 'vomiting', 'استفراغ', 'rx'],
    ['-ive', ['ive'], 'pertaining to, tending to', 'دارای، مربوط به', '*'],
    // پسوندهای صفت و اسم
    ['-ic, -al, -ar, -ous', ['ic', 'al', 'ar', 'ous'], 'pertaining to', 'مربوط به', '*'],
    ['-tic', ['tic'], 'pertaining to', 'مربوط به', '*'],
    ['-ia, -y', ['ia', 'y'], 'condition, process', 'حالت، فرایند', '*'],
    ['-ion, -ation', ['ation', 'ion'], 'process', 'فرایند', '*'],
    ['-ist', ['ist'], 'specialist', 'متخصص', '*'],
    ['-ism', ['ism'], 'condition, state', 'حالت', '*'],
    ['-um, -us', ['um', 'us'], 'structure, thing', 'ساختار، چیز', '*'],
    ['-or', ['or'], 'one who, that which', 'کننده', '*']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها و نمادها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    // نمادهای پرونده
    ['1°', 'primary', 'اولیه', 'lx'],
    ['2°', 'secondary (to)', 'ثانویه (به دنبال)', 'lx'],
    ['∆', 'change', 'تغییر', 'lx'],
    ['↑', 'increase(d)', 'افزایش', 'lx'],
    ['↓', 'decrease(d)', 'کاهش', 'lx'],
    ['≠', 'not equal to', 'نابرابر', 'lx'],
    ['±', 'doubtful, slight', 'مشکوک، خفیف', 'lx'],
    ['∼', 'approximately', 'تقریباً', 'lx'],
    ['#', 'number, pound', 'شماره، پوند', 'lx'],
    ['L / R', 'left / right', 'چپ / راست', 'lx'],
    // بیماری و میکروب
    ['AF', 'acid fast', 'اسیدفست', 'mc'],
    ['FUO', 'fever of unknown origin', 'تب با منشأ ناشناخته', 'mc'],
    ['Gm+', 'gram positive', 'گرم مثبت', 'mc'],
    ['Gm−', 'gram negative', 'گرم منفی', 'mc'],
    ['MDR', 'multidrug resistant', 'مقاوم به چند دارو', 'mc'],
    ['MRSA', 'methicillin-resistant Staphylococcus aureus', 'استافیلوکوک طلایی مقاوم به متی‌سیلین', 'mc'],
    ['VRSA', 'vancomycin-resistant S. aureus', 'استافیلوکوک طلایی مقاوم به ونکومایسین', 'mc'],
    ['Staph', 'Staphylococcus', 'استافیلوکوک', 'mc'],
    ['Strep', 'Streptococcus', 'استرپتوکوک', 'mc'],
    ['TB', 'tuberculosis', 'سل', 'mc'],
    ['STI', 'sexually transmitted infection', 'عفونت آمیزشی', 'mc'],
    ['EMT', 'emergency medical technician', 'تکنسین فوریت‌های پزشکی', 'mc'],
    ['WHO', 'World Health Organization', 'سازمان جهانی بهداشت', 'mc'],
    ['CA, Ca', 'cancer', 'سرطان', 'rs'],
    ['CIS', 'carcinoma in situ', 'کارسینوم درجا', 'rs'],
    ['MET', 'metastasis', 'متاستاز', 'rs'],
    // شرح حال و معاینه
    ['ADL', 'activities of daily living', 'فعالیت‌های روزانه زندگی', 'dx'],
    ['BP', 'blood pressure', 'فشار خون', 'dx'],
    ['bpm', 'beats per minute', 'ضربان در دقیقه', 'dx'],
    ['C / F', 'Celsius / Fahrenheit', 'سانتی‌گراد / فارنهایت', 'dx'],
    ['CC', 'chief complaint', 'شکایت اصلی', 'dx'],
    ['c/o', 'complains (complaining) of', 'شکایت دارد از', 'dx'],
    ['EOMI', 'extraocular muscles intact', 'ماهیچه‌های حرکت چشم سالم', 'dx'],
    ['ETOH', 'alcohol (ethyl alcohol)', 'الکل', 'dx'],
    ['HEENT', 'head, eyes, ears, nose and throat', 'سر، چشم، گوش، بینی و گلو', 'dx'],
    ['HIPAA', 'Health Insurance Portability and Accountability Act', 'قانون حفظ حریم اطلاعات سلامت', 'dx'],
    ['h/o', 'history of', 'سابقه', 'dx'],
    ['H&P', 'history and physical', 'شرح حال و معاینه', 'dx'],
    ['HPI', 'history of present illness', 'شرح بیماری فعلی', 'dx'],
    ['HR', 'heart rate', 'ضربان قلب', 'dx'],
    ['Hx', 'history', 'شرح حال', 'dx'],
    ['I&O', 'intake and output', 'جذب و دفع مایعات', 'dx'],
    ['IPPA', 'inspection, palpation, percussion, auscultation', 'مشاهده، لمس، دق، سمع', 'dx'],
    ['IVDA', 'intravenous drug abuse', 'سوءمصرف تزریقی مواد', 'dx'],
    ['NAD', 'no apparent distress', 'بدون ناراحتی آشکار', 'dx'],
    ['NKDA', 'no known drug allergies', 'حساسیت دارویی شناخته‌شده ندارد', 'dx'],
    ['P', 'pulse', 'نبض', 'dx'],
    ['PE', 'physical examination', 'معاینه فیزیکی', 'dx'],
    ['PERRLA', 'pupils equal, regular, react to light and accommodation', 'مردمک‌ها برابر و واکنش‌دار به نور و تطابق', 'dx'],
    ['PMH', 'past medical history', 'سابقه پزشکی گذشته', 'dx'],
    ['pt', 'patient', 'بیمار', 'dx'],
    ['R', 'respiration', 'تنفس', 'dx'],
    ['R/O', 'rule out', 'رد شود', 'dx'],
    ['ROS', 'review of systems', 'مرور دستگاه‌های بدن', 'dx'],
    ['T', 'temperature', 'دما', 'dx'],
    ['TPR', 'temperature, pulse, respiration', 'دما، نبض، تنفس', 'dx'],
    ['VS', 'vital signs', 'علائم حیاتی', 'dx'],
    ['WD', 'well developed', 'خوب رشدیافته', 'dx'],
    ['WNL', 'within normal limits', 'در محدوده طبیعی', 'dx'],
    ['w/o', 'without', 'بدون', 'dx'],
    ['y/o', 'years old, year-old', 'ساله', 'dx'],
    ['ROM', 'range of motion', 'دامنه حرکت', 'dx'],
    // تشخیص و تصویربرداری
    ['ABC', 'aspiration biopsy cytology', 'سیتولوژی بیوپسی آسپیراسیون', 'dx'],
    ['AFP', 'alpha-fetoprotein', 'آلفافیتوپروتئین', 'dx'],
    ['BS', 'bowel sounds; breath sounds', 'صداهای روده؛ صداهای تنفس', 'dx'],
    ['bx', 'biopsy', 'بیوپسی (نمونه‌برداری)', 'dx'],
    ['C&S', 'culture and (drug) sensitivity', 'کشت و آنتی‌بیوگرام', 'dx'],
    ['CT', 'computed tomography', 'سی‌تی‌اسکن', 'dx'],
    ['Dx', 'diagnosis', 'تشخیص', 'dx'],
    ['MRI', 'magnetic resonance imaging', 'ام‌آرآی', 'dx'],
    ['PET', 'positron emission tomography', 'پت‌اسکن', 'dx'],
    ['SPECT', 'single-photon emission computed tomography', 'اسپکت', 'dx'],
    ['UV', 'ultraviolet', 'فرابنفش', 'dx'],
    ['Ci', 'curie (unit of radioactivity)', 'کوری (واحد پرتوزایی)', 'dx'],
    ['ECG', 'electrocardiogram', 'نوار قلب', 'dx'],
    ['TEE', 'transesophageal echocardiogram', 'اکوکاردیوگرافی از راه مری', 'dx'],
    ['AP', 'anteroposterior', 'قدامی‌خلفی (از جلو به پشت)', 'dx'],
    ['PA', 'posteroanterior', 'خلفی‌قدامی (از پشت به جلو)', 'dx'],
    ['LL', 'left lateral', 'نیم‌رخ چپ', 'dx'],
    ['RL', 'right lateral', 'نیم‌رخ راست', 'dx'],
    // درمان، جراحی و بخش
    ['CAM', 'complementary and alternative medicine', 'طب مکمل و جایگزین', 'tx'],
    ['NCCAM', 'National Center for Complementary and Alternative Medicine', 'مرکز ملی طب مکمل و جایگزین', 'tx'],
    ['D/C, dc', 'discontinue', 'قطع شود', 'tx'],
    ['EBL', 'estimated blood loss', 'برآورد خون از دست رفته', 'tx'],
    ['ED', 'emergency department', 'بخش اورژانس', 'tx'],
    ['ICU', 'intensive care unit', 'بخش مراقبت‌های ویژه', 'tx'],
    ['I&D', 'incision and drainage', 'برش و تخلیه', 'tx'],
    ['NS, N/S', 'normal saline', 'سرم نمکی', 'tx'],
    ['PSS', 'physiologic saline solution', 'محلول نمکی فیزیولوژیک', 'tx'],
    ['OR', 'operating room', 'اتاق عمل', 'tx'],
    ['PACU', 'postanesthesia care unit', 'بخش مراقبت پس از بیهوشی (ریکاوری)', 'tx'],
    ['PCA', 'patient-controlled analgesia', 'مسکن با کنترل بیمار', 'tx'],
    ['PICC', 'peripherally inserted central catheter', 'کاتتر مرکزی از راه رگ محیطی', 'tx'],
    ['preop', 'preoperative', 'پیش از عمل', 'tx'],
    ['postop', 'postoperative', 'پس از عمل', 'tx'],
    ['RATx', 'radiation therapy', 'پرتودرمانی', 'tx'],
    ['TNM', '(primary) tumor, (regional lymph) nodes, (distant) metastases', 'تومور، غدد لنفاوی، متاستاز', 'tx'],
    ['PT', 'physical therapist; physical therapy', 'فیزیوتراپیست؛ فیزیوتراپی', 'tx'],
    // دستورها
    ['AMA', 'against medical advice', 'برخلاف توصیه پزشک', 'tx'],
    ['AMB', 'ambulatory', 'سرپایی (قادر به راه رفتن)', 'tx'],
    ['BRP', 'bathroom privileges', 'اجازه رفتن به سرویس بهداشتی', 'tx'],
    ['CBR', 'complete bed rest', 'استراحت مطلق در تخت', 'tx'],
    ['DNR', 'do not resuscitate', 'احیا نشود', 'tx'],
    ['KVO', 'keep vein open', 'رگ باز نگه داشته شود', 'tx'],
    ['TKO', 'to keep open', 'برای باز ماندن رگ', 'tx'],
    ['NPO', 'nothing by mouth (non per os)', 'ناشتا؛ هیچ چیز از راه دهان', 'tx'],
    ['OOB', 'out of bed', 'خارج از تخت', 'tx'],
    ['QNS', 'quantity not sufficient', 'مقدار ناکافی', 'tx'],
    ['QS', 'quantity sufficient', 'مقدار کافی', 'tx'],
    ['STAT', 'immediately', 'فوری', 'tx'],
    // دارو و شکل‌ها
    ['APAP', 'acetaminophen', 'استامینوفن', 'rx'],
    ['ASA', 'acetylsalicylic acid (aspirin)', 'آسپرین', 'rx'],
    ['ASHP', 'American Society of Health System Pharmacists', 'انجمن داروسازان نظام سلامت آمریکا', 'rx'],
    ['cap', 'capsule', 'کپسول', 'rx'],
    ['elix', 'elixir', 'اکسیر', 'rx'],
    ['FDA', 'Food and Drug Administration', 'سازمان غذا و داروی آمریکا', 'rx'],
    ['INH', 'isoniazid (antituberculosis drug)', 'ایزونیازید (داروی ضدسل)', 'rx'],
    ['MED(s)', 'medicine(s), medication(s)', 'دارو(ها)', 'rx'],
    ['NSAID(s)', 'nonsteroidal anti-inflammatory drug(s)', 'داروی ضدالتهاب غیراستروئیدی', 'rx'],
    ['ODS', 'Office of Dietary Supplements', 'دفتر مکمل‌های غذایی', 'rx'],
    ['OTC', 'over-the-counter', 'بدون نسخه', 'rx'],
    ['PDR', 'Physicians’ Desk Reference', 'مرجع مرجع دارویی پزشکان', 'rx'],
    ['Rx', 'drug, prescription, therapy', 'نسخه؛ دارو؛ درمان', 'rx'],
    ['supp', 'suppository', 'شیاف', 'rx'],
    ['susp', 'suspension', 'سوسپانسیون', 'rx'],
    ['tab', 'tablet', 'قرص', 'rx'],
    ['tinct', 'tincture', 'تنتور', 'rx'],
    ['ung', 'ointment', 'پماد', 'rx'],
    ['USP', 'United States Pharmacopeia', 'فارماکوپه آمریکا', 'rx'],
    // دوز و دستور مصرف
    ['ā', 'before (ante)', 'پیش از', 'rx'],
    ['āā', 'of each (ana)', 'از هر کدام', 'rx'],
    ['ac', 'before meals (ante cibum)', 'پیش از غذا', 'rx'],
    ['ad lib', 'as desired (ad libitum)', 'به دلخواه', 'rx'],
    ['aq', 'water (aqua)', 'آب', 'rx'],
    ['bid, b.i.d.', 'twice a day (bis in die)', 'روزی دو بار', 'rx'],
    ['c̄', 'with (cum)', 'همراه با', 'rx'],
    ['s̄', 'without (sine)', 'بدون', 'rx'],
    ['DAW', 'dispense as written', 'همان‌طور که نوشته شده تحویل شود', 'rx'],
    ['DS', 'double strength', 'دو برابر قوی', 'rx'],
    ['hs', 'at bedtime (hora somni)', 'هنگام خواب', 'rx'],
    ['ID', 'intradermal(ly)', 'داخل‌پوستی', 'rx'],
    ['IM', 'intramuscular(ly)', 'داخل‌عضلانی', 'rx'],
    ['IU', 'international unit', 'واحد بین‌المللی', 'rx'],
    ['IV', 'intravenous(ly)', 'داخل‌وریدی', 'rx'],
    ['LA', 'long-acting', 'طولانی‌اثر', 'rx'],
    ['mcg', 'microgram', 'میکروگرم', 'rx'],
    ['mg', 'milligram', 'میلی‌گرم', 'rx'],
    ['mL', 'milliliter', 'میلی‌لیتر', 'rx'],
    ['p̄', 'after (post)', 'پس از', 'rx'],
    ['pc', 'after meals (post cibum)', 'پس از غذا', 'rx'],
    ['po, PO', 'by mouth (per os)', 'خوراکی (از راه دهان)', 'rx'],
    ['pp', 'postprandial (after a meal)', 'پس از وعده غذا', 'rx'],
    ['prn', 'as needed (pro re nata)', 'در صورت نیاز', 'rx'],
    ['qam', 'every morning (quaque ante meridiem)', 'هر روز صبح', 'rx'],
    ['qh', 'every hour (quaque hora)', 'هر ساعت', 'rx'],
    ['q_h', 'every _ hours', 'هر چند ساعت یک بار', 'rx'],
    ['qid, q.i.d.', 'four times a day (quater in die)', 'روزی چهار بار', 'rx'],
    ['SA', 'sustained action', 'اثر پیوسته', 'rx'],
    ['SC, SQ, subcut', 'subcutaneous(ly)', 'زیرجلدی', 'rx'],
    ['SL', 'sublingual(ly)', 'زیرزبانی', 'rx'],
    ['SR', 'sustained release', 'آهسته‌رهش', 'rx'],
    ['ss', 'half (semis)', 'نصف', 'rx'],
    ['tid, t.i.d.', 'three times a day (ter in die)', 'روزی سه بار', 'rx'],
    ['U', 'unit(s)', 'واحد', 'rx'],
    ['x', 'times', 'بار، ضرب در', 'rx']
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
    { id: 'type', icon: '🗂️', name: 'انواع و سیر بیماری' },
    { id: 'mic', icon: '🦠', name: 'میکروب‌ها و شیوع' },
    { id: 'inf', icon: '🔥', name: 'التهاب و عفونت' },
    { id: 'imm', icon: '🛡️', name: 'ایمنی' },
    { id: 'neo', icon: '🔴', name: 'نئوپلاسم و رشد سلول' },
    { id: 'les', icon: '🩹', name: 'ضایعه‌ها و تغییرات بافت' },
    { id: 'sx', icon: '🔎', name: 'علائم و نشانه‌ها' },
    { id: 'exam', icon: '🩺', name: 'شرح حال و معاینه' },
    { id: 'img', icon: '🩻', name: 'تصویربرداری' },
    { id: 'surg', icon: '✂️', name: 'جراحی' },
    { id: 'inst', icon: '🔧', name: 'ابزارهای جراحی' },
    { id: 'care', icon: '🤝', name: 'درمان و مراقبت' },
    { id: 'alt', icon: '🌿', name: 'طب مکمل و جایگزین' },
    { id: 'drug', icon: '💊', name: 'دارو و اثرهای آن' },
    { id: 'route', icon: '💉', name: 'راه‌ها و شکل‌های دارو' }
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

  /* ---------- زبان بیماری ---------- */
  /* آناتومی یک واژه: hepat + o + megaly */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="44" width="${w}" height="42" rx="11" fill="${bg}"/>${t(x + w / 2, 72, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 94 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 118, en, { size: 10, fill: c, w: 900 })}${f((x1 + x2) / 2, 133, fa, { size: 10, fill: c })}`;
    return svg(360, 200, `${f(180, 24, 'یک واژه = ریشه + واکه رابط + پسوند', { size: 11.5, fill: INK, w: 800 })}
      ${part(10, 84, 'hepat', '#1c7ed6', '#e1effc')}${part(100, 30, 'o', '#868e96', '#f1f3f5')}${part(136, 92, 'megaly', '#2b8a3e', '#e6fcf5')}
      ${br(10, 94, 'root', 'ریشه: کبد', '#1c7ed6')}${br(100, 130, 'o', 'رابط', '#868e96')}${br(136, 228, 'suffix', 'پسوند: بزرگی', '#2b8a3e')}
      <path d="M234 64 h8" stroke="${LINE}" stroke-width="2"/><rect x="246" y="40" width="108" height="50" rx="10" fill="${VIO_BG}"/>${f(300, 61, 'بزرگی کبد', { size: 12, fill: VIO, w: 800 })}${t(300, 79, 'hepatomegaly', { size: 9.5, fill: INK })}
      <path d="M200 156 C150 182 92 182 48 156" stroke="${VIO}" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M52 152 l-6 4 l7 3" stroke="${VIO}" stroke-width="2" fill="none"/>
      ${f(180, 194, 'معنی را از آخر بخوان: اول پسوند (چه شده؟)، بعد ریشه (کجا؟)', { size: 10, fill: VIO, w: 700 })}`, 'آناتومی واژه hepatomegaly');
  };

  /* ده ریشه بیماری (جدول ۳-۱) */
  A['disease-roots'] = () => {
    const sh = 's' + (++UID);
    const R = [['alg/o', 'درد', '⚡', '#e8590c'], ['carcin/o', 'سرطان', '🦀', '#c92a2a'], ['cyst/o', 'کیسه، مثانه', '🎈', '#1c7ed6'], ['lith/o', 'سنگ', '🪨', '#5c5f66'], ['onc/o', 'تومور', '🔴', '#c2255c'],
      ['path/o', 'بیماری', '🤒', '#7048e8'], ['py/o', 'چرک', '🟡', '#e67700'], ['pyr/o', 'تب، آتش', '🔥', '#e03131'], ['scler/o', 'سفت', '🧱', '#495057'], ['tox/o', 'سم', '☠️', '#2b8a3e']];
    return svg(360, 262, `<defs>${shadow(sh)}</defs>${f(180, 20, 'ده ریشه پایه برای بیماری', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, e, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 45; return `${card(x, y, 168, 39, '#f8f9fa', sh)}<text x="${x + 150}" y="${y + 26}" font-size="17" text-anchor="middle">${e}</text>${t(x + 12, y + 17, en, { size: 12, fill: c, w: 900, anchor: 'start' })}${f(x + 12, y + 32, fa, { size: 9.5, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, 'ریشه‌های بیماری');
  };

  /* پیشوندهای بیماری (جدول ۳-۲) با نمایه کوچک */
  A['disease-prefixes'] = () => {
    const sh = 's' + (++UID);
    const ecg = (x, y, n, c) => { let d = `M${x} ${y}`; const step = 92 / n; for (let i = 0; i < n; i++) { const a = x + i * step; d += ` L${(a + step * 0.35).toFixed(1)} ${y} l3 -14 l3 22 l3 -8 L${(a + step).toFixed(1)} ${y}`; } return `<path d="${d}" stroke="${c}" stroke-width="1.8" fill="none" stroke-linejoin="round"/>`; };
    const tiles = [
      ['brady-', 'کند', ecg(0, 0, 2, '#1c7ed6'), '#1c7ed6', '#e7f5ff', 'bradypnea: تنفس کند'],
      ['tachy-', 'تند', ecg(0, 0, 6, '#e03131'), '#e03131', '#fff5f5', 'tachycardia: ضربان تند'],
      ['pachy-', 'ضخیم', '<rect x="10" y="-14" width="72" height="22" rx="5" fill="#ffc078" stroke="#e8590c" stroke-width="1.5"/>', '#e8590c', '#fff4e6', 'pachydactyly: انگشت ضخیم'],
      ['xero-', 'خشک', '<path d="M30 -16 C14 4 22 12 40 12 C58 12 64 2 48 -16 Z" fill="#ffe8cc" stroke="#d9480f" stroke-width="1.5"/><path d="M36 -6 l5 5 l-4 4 l6 5" stroke="#d9480f" stroke-width="1.4" fill="none"/>', '#d9480f', '#fff9db', 'xeroderma: خشکی پوست'],
      ['dys-', 'نابه‌هنجار، دشوار', '<path d="M4 0 q10 -16 20 0 t20 0 q6 -24 14 -2 t18 6 q6 -12 14 -4" stroke="#7048e8" stroke-width="2.2" fill="none"/>', '#7048e8', '#f3f0ff', 'dysphagia: دشواری بلع'],
      ['mal-', 'بد، ضعیف', '<path d="M46 12 l-12 -10 l12 -16 l12 16z" fill="none"/><text x="46" y="8" font-size="22" text-anchor="middle">👎</text>', '#5c5f66', '#f1f3f5', 'malabsorption: سوءجذب']];
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, 'شش پیشوند بیماری', { size: 11.5, fill: INK, w: 800 })}
      ${tiles.map(([en, fa, ic, c, bg, ex], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 84; return `${card(x, y, 168, 76, bg, sh)}<g transform="translate(${x + 70} ${y + 26})">${ic}</g>${t(x + 12, y + 22, en, { size: 13, fill: c, w: 900, anchor: 'start' })}${f(x + 12, y + 40, fa, { size: 9.5, fill: INK, w: 800, anchor: 'start' })}${f(x + 84, y + 64, ex, { size: 9 })}`; }).join('')}`, 'پیشوندهای بیماری');
  };

  /* پسوندهای بیماری (جدول ۳-۳) */
  A['disease-suffixes'] = () => {
    const sh = 's' + (++UID);
    const S = [['-algia', 'درد', 'neuralgia', '⚡'], ['-odynia', 'درد', 'urodynia', '😣'], ['-itis', 'التهاب', 'cystitis', '🔥'], ['-megaly', 'بزرگی', 'hepatomegaly', '🎈'],
      ['-cele', 'فتق، برآمدگی', 'gastrocele', '🫧'], ['-clasis', 'شکستن', 'osteoclasis', '🦴'], ['-oma', 'تومور', 'lipoma', '🔴'], ['-pathy', 'بیماری', 'nephropathy', '🤒'],
      ['-rrhage', 'خون‌ریزی شدید', 'hemorrhage', '🩸'], ['-rrhea', 'جریان، ترشح', 'pyorrhea', '💧'], ['-rrhexis', 'پارگی', 'hepatorrhexis', '💥'], ['-schisis', 'شکاف', 'retinoschisis', '✂️']];
    return svg(360, 314, `<defs>${shadow(sh)}</defs>${f(180, 18, 'دوازده پسوند بیماری', { size: 11.5, fill: INK, w: 800 })}
      ${S.map(([en, fa, ex, e], i) => { const x = 6 + (2 - i % 3) * 118, y = 28 + Math.floor(i / 3) * 66; const rr = /rrh/.test(en); return `${card(x, y, 112, 60, rr ? '#fff5f5' : '#f8f9fa', sh)}<text x="${x + 96}" y="${y + 22}" font-size="15" text-anchor="middle">${e}</text>${t(x + 8, y + 20, en, { size: 12, fill: rr ? '#c92a2a' : VIO, w: 900, anchor: 'start' })}${f(x + 56, y + 38, fa, { size: 9.5, fill: INK, w: 800 })}${t(x + 56, y + 53, ex, { size: 8.6, fill: MUTED })}`; }).join('')}
      ${f(180, 306, 'خانه‌های قرمز: پس از ریشه، r را دوتایی بنویس (rr)', { size: 9.5, fill: '#c92a2a', w: 700 })}`, 'پسوندهای بیماری');
  };

  /* قاعده rr دوتایی */
  A['rr-rule'] = () => {
    const row = (y, parts, word, fa) => `${parts.map(([s, c, x]) => t(x, y, s, { size: 18, fill: c, w: 900 })).join('')}${t(250, y, '→', { size: 18, fill: LINE })}${t(310, y - 4, word, { size: 11.5, fill: INK, w: 900 })}${f(310, y + 12, fa, { size: 9.5 })}`;
    return svg(360, 214, `${f(180, 22, 'پسوندهای ‎-rrhage، ‎-rrhea، ‎-rrhexis و ‎-rrhaphy', { size: 11, fill: INK, w: 800 })}${f(180, 40, 'پس از واکه رابط، r دوتایی می‌شود', { size: 10.5, fill: '#c92a2a', w: 800 })}
      <rect x="8" y="54" width="344" height="40" rx="10" fill="#fff5f5"/>${row(80, [['hem', '#1c7ed6', 48], ['o', '#868e96', 84], ['rr', '#c92a2a', 112], ['hage', '#2b8a3e', 158]], 'hemorrhage', 'خون‌ریزی')}
      <rect x="8" y="102" width="344" height="40" rx="10" fill="#fff5f5"/>${row(128, [['py', '#1c7ed6', 48], ['o', '#868e96', 84], ['rr', '#c92a2a', 112], ['hea', '#2b8a3e', 152]], 'pyorrhea', 'چرک‌ریزی')}
      <rect x="8" y="150" width="344" height="40" rx="10" fill="#fff5f5"/>${row(176, [['herni', '#1c7ed6', 40], ['o', '#868e96', 84], ['rr', '#c92a2a', 112], ['haphy', '#2b8a3e', 162]], 'herniorrhaphy', 'ترمیم فتق')}
      ${f(180, 208, 'تنها: ‎-rhage • پس از ریشه: ‎-rrhage', { size: 9.5, fill: MUTED, w: 700 })}`, 'قاعده rr دوتایی');
  };

  /* تغییرات لوله و رگ: واژه‌هایی که پسوند می‌شوند (جدول ۳-۴) */
  A['tube-changes'] = () => {
    const sh = 's' + (++UID);
    const W = 150;
    const flow = (x, y, n) => Array.from({ length: n }, (_, i) => `<circle cx="${x + 16 + i * 26}" cy="${y}" r="3.4" fill="#e03131"/>`).join('');
    const tube = (path, inner, extra) => `<path d="${path}" fill="#ffc9c9" stroke="#c92a2a" stroke-width="2"/>${inner || ''}${extra || ''}`;
    const P = [
      ['normal', 'طبیعی', tube('M8 16 H142 V44 H8 Z', flow(8, 30, 5))],
      ['stenosis', 'تنگی', tube('M8 16 H52 Q75 26 98 16 H142 V44 H98 Q75 34 52 44 H8 Z', flow(8, 30, 2) + `<circle cx="120" cy="30" r="3.4" fill="#e03131"/>`)],
      ['ectasia • dilation', 'گشادی', tube('M8 20 H44 Q75 -6 106 20 H142 V40 H106 Q75 66 44 40 H8 Z', flow(8, 30, 5))],
      ['spasm', 'گرفتگی ناگهانی', tube('M8 16 H40 L50 26 L60 16 L70 26 L80 16 L90 26 L100 16 H142 V44 H100 L90 34 L80 44 L70 34 L60 44 L50 34 L40 44 H8 Z', flow(8, 30, 1) + `<circle cx="126" cy="30" r="3.4" fill="#e03131"/>`)],
      ['sclerosis', 'سفت شدن', `<path d="M8 16 H142 V44 H8 Z" fill="#ffc9c9" stroke="#495057" stroke-width="6"/>${flow(8, 30, 5)}`],
      ['stasis', 'توقف جریان', tube('M8 16 H142 V44 H8 Z', `<circle cx="30" cy="30" r="3.4" fill="#e03131"/><circle cx="40" cy="30" r="3.4" fill="#e03131"/><circle cx="50" cy="30" r="3.4" fill="#e03131"/><path d="M70 22 v16 M78 22 v16" stroke="#c92a2a" stroke-width="3"/>`)]];
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, 'یک لوله (رگ، نایژه) و شش حالت آن', { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([en, fa, g], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 84; return `${card(x, y, 168, 76, '#f8f9fa', sh)}<g transform="translate(${x + 9} ${y})">${g}</g>${t(x + 84, y + 56, en, { size: 11, fill: i ? VIO : MUTED, w: 900 })}${f(x + 84, y + 70, fa, { size: 9.5, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 284, 'bronchostenosis: تنگی نایژه • vasodilation: گشادی رگ', { size: 9.5, fill: MUTED, w: 700 })}`, 'تنگی، گشادی، گرفتگی، سفتی و توقف');
  };

  /* حالت‌های بافت: نرمی، مرگ، افتادگی، حل شدن، ورم، سم */
  A['tissue-states'] = () => {
    const sh = 's' + (++UID);
    const P = [
      ['malacia', 'نرمی', '<path d="M20 34 Q40 10 60 34 Q80 50 100 34" stroke="#adb5bd" stroke-width="10" fill="none" stroke-linecap="round"/>', 'osteomalacia'],
      ['necrosis', 'مرگ بافت', '<ellipse cx="60" cy="30" rx="40" ry="16" fill="#ffc9c9"/><path d="M42 24 q10 -10 22 0 q12 8 18 0 q2 14 -18 16 q-26 2 -22 -16z" fill="#343a40"/>', 'osteonecrosis'],
      ['ptosis', 'افتادگی', '<ellipse cx="40" cy="22" rx="16" ry="10" fill="#ffd8a8" stroke="#e8590c" stroke-dasharray="3 2"/><path d="M52 28 L72 40" stroke="#e8590c" stroke-width="2"/><path d="M68 34 l5 7 l-8 1" fill="#e8590c"/><ellipse cx="84" cy="44" rx="16" ry="10" fill="#ffd8a8" stroke="#e8590c" stroke-width="1.5"/>', 'blepharoptosis'],
      ['lysis', 'حل شدن، تخریب', '<circle cx="36" cy="30" r="15" fill="#ffc9c9" stroke="#c92a2a" stroke-width="1.5"/><path d="M58 30 h12" stroke="#5b6b73" stroke-width="2"/><circle cx="80" cy="22" r="4" fill="#ffc9c9"/><circle cx="92" cy="34" r="3" fill="#ffc9c9"/><circle cx="84" cy="40" r="3.5" fill="#ffc9c9"/><circle cx="98" cy="24" r="2.5" fill="#ffc9c9"/>', 'hemolysis'],
      ['edema', 'ورم، تجمع مایع', '<path d="M30 46 C24 20 40 10 60 12 C82 10 98 22 90 46 Z" fill="#ffd8a8" stroke="#e8590c" stroke-width="1.5"/><circle cx="48" cy="32" r="3" fill="#74c0fc"/><circle cx="62" cy="26" r="3" fill="#74c0fc"/><circle cx="74" cy="36" r="3" fill="#74c0fc"/>', 'cephaledema'],
      ['toxin', 'سم', '<text x="60" y="44" font-size="30" text-anchor="middle">☠️</text>', 'nephrotoxin']];
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, 'شش واژه‌ای که پسوند هم می‌شوند', { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([en, fa, g, ex], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 84; return `${card(x, y, 168, 76, '#f8f9fa', sh)}<g transform="translate(${x + 24} ${y - 2})">${g}</g>${t(x + 84, y + 54, en, { size: 11.5, fill: VIO, w: 900 })}${f(x + 84, y + 69, `${fa} • ${ex}`, { size: 9 })}`; }).join('')}`, 'نرمی، مرگ بافت، افتادگی، تخریب، ورم و سم');
  };

  /* ---------- میکروب‌ها و انواع بیماری ---------- */
  /* هفت گروه بیماری */
  A['disease-types'] = () => {
    const sh = 's' + (++UID);
    const R = [['infectious', 'عفونی', 'میکروب و انگل', '🦠', '#2f9e44', '#ebfbee'], ['degenerative', 'تحلیل‌برنده', 'فرسایش، پیری، آسیب', '🦴', '#868e96', '#f1f3f5'], ['neoplasia', 'نئوپلازی', 'رشد بی‌مهار بافت', '🔴', '#c92a2a', '#fff5f5'],
      ['immune', 'ایمنی', 'آلرژی، خودایمنی', '🛡️', '#1c7ed6', '#e7f5ff'], ['metabolic', 'متابولیک', 'کمبود آنزیم، سوءتغذیه', '⚙️', '#e67700', '#fff9db'], ['hormonal', 'هورمونی', 'مثل diabetes mellitus', '💧', '#7048e8', '#f3f0ff'], ['mental', 'روانی', 'ذهن و سازگاری', '🧠', '#c2255c', '#fff0f6']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, 'هفت گروه بزرگ بیماری (گاهی هم‌پوشان)', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, d, e, c, bg], i) => { const full = i === 6, x = full ? 96 : 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 66; return `${card(x, y, 168, 58, bg, sh)}<text x="${x + 24}" y="${y + 36}" font-size="22" text-anchor="middle">${e}</text>${t(x + 160, y + 20, en, { size: 11.5, fill: c, w: 900, anchor: 'end' })}${f(x + 160, y + 36, fa, { size: 10, fill: INK, w: 800, anchor: 'end' })}${f(x + 160, y + 51, d, { size: 8.6, anchor: 'end' })}`; }).join('')}`, 'انواع بیماری');
  };

  /* حاد و مزمن، تشدید و فروکش */
  A['acute-chronic'] = () => {
    const id = 'm' + (++UID);
    return svg(360, 250, `<defs>${marker(id, LINE)}</defs>
      ${arrow(id, 30, 214, 350, 214)}${arrow(id, 30, 214, 30, 24)}
      ${f(330, 234, 'زمان', { size: 9.5 })}${f(30, 16, 'شدت', { size: 9.5 })}
      <path d="M40 212 C52 212 56 46 70 46 C84 46 88 212 104 212" fill="#ffc9c9" opacity=".6" stroke="#e03131" stroke-width="2.6"/>
      ${t(112, 42, 'acute', { size: 12, fill: '#e03131', w: 900, anchor: 'start' })}${f(112, 57, 'حاد: ناگهانی، شدید، کوتاه', { size: 9.5, fill: '#e03131', anchor: 'start' })}
      <path d="M120 160 C150 156 170 150 190 148 C206 146 214 96 226 96 C238 96 242 144 258 146 C274 148 282 172 300 172 C316 172 326 154 346 152" fill="none" stroke="#1c7ed6" stroke-width="2.6"/>
      ${t(122, 124, 'chronic', { size: 12, fill: '#1c7ed6', w: 900, anchor: 'start' })}${f(122, 140, 'مزمن: طولانی، آهسته', { size: 9.5, fill: '#1c7ed6', anchor: 'start' })}
      <circle cx="226" cy="96" r="5" fill="#e8590c"/>${t(238, 92, 'exacerbation', { size: 9.5, fill: '#e8590c', anchor: 'start' })}${f(238, 105, 'تشدید', { size: 9, fill: '#e8590c', anchor: 'start' })}
      <circle cx="300" cy="172" r="5" fill="#2b8a3e"/>${t(300, 192, 'remission', { size: 9.5, fill: '#2b8a3e' })}${f(300, 205, 'فروکش', { size: 9, fill: '#2b8a3e' })}`, 'بیماری حاد و مزمن');
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
    const T = [['cocci', 'گرد', cl.replace(/cx="(\d+)/g, (m, v) => `cx="${v}`), 'staphylococci: خوشه‌ای'], ['streptococci', 'گرد و زنجیره‌ای', ch, 'strepto- = زنجیره'], ['bacilli', 'میله‌ای', ro, 'tuberculosis، tetanus'],
      ['vibrios', 'میله خمیده', vi, 'cholera'], ['spirochetes', 'مارپیچی', sp, 'syphilis، Lyme disease']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, 'باکتری‌ها را از شکلشان نام می‌بریم', { size: 11.5, fill: INK, w: 800 })}
      ${T.map(([en, fa, g, ex], i) => { const full = i === 4, x = full ? 96 : 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 88; return `${card(x, y, 168, 80, '#f8f9fa', sh)}<g transform="translate(${x + 24} ${y - 6})">${g}</g>${t(x + 84, y + 58, en, { size: 11.5, fill: VIO, w: 900 })}${f(x + 84, y + 73, `${fa} • ${ex}`, { size: 8.8 })}`; }).join('')}`, 'شکل باکتری‌ها');
  };

  /* خانواده میکروب‌ها و انگل‌ها */
  A['microbe-family'] = () => {
    const sh = 's' + (++UID);
    const vir = (x, y) => `${Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return `<path d="M${(x + 9 * Math.cos(a)).toFixed(1)} ${(y + 9 * Math.sin(a)).toFixed(1)} L${(x + 14 * Math.cos(a)).toFixed(1)} ${(y + 14 * Math.sin(a)).toFixed(1)}" stroke="#c92a2a" stroke-width="2"/><circle cx="${(x + 15 * Math.cos(a)).toFixed(1)}" cy="${(y + 15 * Math.sin(a)).toFixed(1)}" r="2" fill="#c92a2a"/>`; }).join('')}<circle cx="${x}" cy="${y}" r="9" fill="#ffa8a8" stroke="#c92a2a" stroke-width="1.5"/>`;
    const M = [
      ['bacteria', 'باکتری', `${rod(50, 30, 20, '#e64980')}${rod(72, 40, -20, '#e64980')}<circle cx="46" cy="48" r="5" fill="#7048e8"/><circle cx="56" cy="50" r="5" fill="#7048e8"/>`, 'تک‌سلولی؛ آنتی‌بیوتیک اثر دارد'],
      ['virus', 'ویروس', vir(60, 38), 'فقط درون سلول زنده'],
      ['fungus', 'قارچ', '<ellipse cx="48" cy="40" rx="12" ry="9" fill="#ffe066" stroke="#e67700" stroke-width="1.5"/><ellipse cx="64" cy="30" rx="7" ry="5" fill="#ffe066" stroke="#e67700" stroke-width="1.5"/><path d="M70 46 q10 -4 16 4 q6 8 14 2" stroke="#e67700" stroke-width="2.4" fill="none"/>', 'مخمر و کپک'],
      ['protozoon', 'تک‌یاخته', '<path d="M34 40 C30 22 50 18 58 26 C66 16 86 22 82 36 C92 46 76 58 62 52 C50 62 30 56 34 40Z" fill="#a5d8ff" stroke="#1c7ed6" stroke-width="1.5"/><circle cx="58" cy="38" r="6" fill="#1c7ed6"/>', 'جانور تک‌سلولی'],
      ['helminth', 'کرم انگلی', '<path d="M24 46 C34 22 50 56 62 34 C72 18 86 44 96 30" stroke="#d6336c" stroke-width="7" fill="none" stroke-linecap="round"/>', 'کرم گرد و کرمک'],
      ['chlamydia • rickettsia', 'باکتری‌های بسیار کوچک', '<circle cx="60" cy="38" r="22" fill="#fff0f6" stroke="#c2255c" stroke-width="1.5"/><circle cx="60" cy="38" r="7" fill="#c2255c" opacity=".7"/><circle cx="46" cy="30" r="2.6" fill="#7048e8"/><circle cx="72" cy="46" r="2.6" fill="#7048e8"/><circle cx="70" cy="28" r="2.6" fill="#7048e8"/>', 'درون سلول؛ آنتی‌بیوتیک مؤثر']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, 'عامل‌های عفونت: از ویروس ریز تا کرم', { size: 11.5, fill: INK, w: 800 })}
      ${M.map(([en, fa, g, d], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 88; return `${card(x, y, 168, 80, '#f8f9fa', sh)}<g transform="translate(${x + 33} ${y - 9}) scale(.85)">${g}</g>${t(x + 84, y + 50, en, { size: 11, fill: VIO, w: 900 })}${f(x + 84, y + 63, fa, { size: 9.3, fill: INK, w: 800 })}${f(x + 84, y + 76, d, { size: 8.3 })}`; }).join('')}`, 'باکتری، ویروس، قارچ، تک‌یاخته و کرم');
  };

  /* رنگ‌آمیزی گرم */
  A['gram-stain'] = () => {
    const sh = 's' + (++UID);
    const slide = (x, c, bg, en, fa, ab) => `${card(x, 34, 166, 150, bg, sh)}<circle cx="${x + 83}" cy="92" r="44" fill="#fff" stroke="#dee2e6" stroke-width="2"/>${dots(x + 83, 92, 34, 16, c, 4.4, x + 3)}${t(x + 83, 156, en, { size: 12, fill: c, w: 900 })}${f(x + 83, 172, fa, { size: 9.5, fill: INK, w: 700 })}${t(x + 140, 54, ab, { size: 11, fill: c, w: 900 })}`;
    return svg(360, 220, `<defs>${shadow(sh)}</defs>${f(180, 20, 'Gram stain: باکتری‌ها را دو گروه می‌کند', { size: 11.5, fill: INK, w: 800 })}
      ${slide(186, '#7048e8', '#f3f0ff', 'gram positive', 'بنفش می‌ماند', 'Gm+')}${slide(8, '#e64980', '#fff0f6', 'gram negative', 'قرمز (صورتی) می‌شود', 'Gm−')}
      ${f(180, 206, 'acid-fast stain (AF) بیشتر برای میکروب سل (TB) است', { size: 9.5, fill: MUTED, w: 700 })}`, 'رنگ‌آمیزی گرم');
  };

  /* شیوع: بومی، همه‌گیر، جهانی */
  A['spread-scale'] = () => {
    const sh = 's' + (++UID);
    const region = (cx, cy, n, seed) => `<path d="M${cx - 40} ${cy} C${cx - 44} ${cy - 30} ${cx - 10} ${cy - 40} ${cx + 10} ${cy - 30} C${cx + 40} ${cy - 34} ${cx + 46} ${cy - 2} ${cx + 34} ${cy + 18} C${cx + 18} ${cy + 40} ${cx - 34} ${cy + 34} ${cx - 40} ${cy}Z" fill="#ebfbee" stroke="#2f9e44" stroke-width="1.5"/>${dots(cx, cy, 28, n, '#e03131', 2.6, seed)}`;
    const globe = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="40" fill="#d0ebff" stroke="#1c7ed6" stroke-width="1.5"/><path d="M${cx - 22} ${cy - 24} q14 4 12 18 q-10 8 -4 22 M${cx + 6} ${cy - 34} q16 10 10 26 q14 6 12 22" stroke="#2f9e44" stroke-width="7" fill="none" stroke-linecap="round" opacity=".8"/>${dots(cx, cy, 34, 34, '#e03131', 2.4, 41)}`;
    const box = (x, g, en, fa, d) => `${card(x, 32, 112, 196, '#f8f9fa', sh)}${g}${t(x + 56, 168, en, { size: 12, fill: VIO, w: 900 })}${f(x + 56, 184, fa, { size: 9.8, fill: INK, w: 800 })}${f(x + 56, 202, d[0], { size: 8.6 })}${f(x + 56, 216, d[1], { size: 8.6 })}`;
    return svg(360, 240, `<defs>${shadow(sh)}</defs>${f(180, 20, 'یک بیماری چقدر گسترده است؟', { size: 11.5, fill: INK, w: 800 })}
      ${box(242, region(298, 96, 4, 5), 'endemic', 'بومی', ['کم ولی همیشگی', 'مثل سرماخوردگی'])}${box(124, region(180, 96, 30, 9), 'epidemic', 'همه‌گیر', ['ناگهان، بسیاری از مردم', 'در یک منطقه'])}${box(6, globe(62, 96), 'pandemic', 'همه‌گیری جهانی', ['در سراسر یک قاره', 'یا جهان'])}`, 'بومی، همه‌گیر و همه‌گیری جهانی');
  };

  /* راه‌های ورود میکروب */
  A.portals = () => {
    const pts = [[180, 44, 232, 40, 'respiratory tract', 'دستگاه تنفس'], [180, 58, 110, 64, 'digestive system', 'دستگاه گوارش (دهان)'], [146, 132, 96, 132, 'damaged skin', 'پوست آسیب‌دیده'], [180, 150, 232, 156, 'urinary & reproductive', 'مجاری ادراری و تناسلی']];
    return svg(360, 250, `${man(180, 22, 0.98)}
      <path d="M140 128 l12 8 M138 136 l10 -4" stroke="#c92a2a" stroke-width="2.4" stroke-linecap="round"/>
      ${pts.map(([x1, y1, x2, y2, en, fa]) => `${pin(x1, y1, x2, y2, VIO)}${lab(x2 + (x2 > 180 ? 4 : -4), y2 - 2, en, fa, { size: 10, fill: VIO, anchor: x2 > 180 ? 'start' : 'end' })}`).join('')}
      ${f(180, 232, 'راه‌های انتقال: هوا • غذا • آب • تماس مستقیم', { size: 10, fill: INK, w: 800 })}${f(180, 18, 'portals of entry: درهای ورود میکروب', { size: 11, fill: INK, w: 800 })}`, 'راه‌های ورود میکروب');
  };

  /* واژه‌های منشأ و شیوه بیماری */
  A['origin-words'] = () => {
    const sh = 's' + (++UID);
    const R = [['iatrogenic', 'ناشی از درمان', 'iatr/o پزشک + gen ایجاد', '👨‍⚕️', '#1c7ed6'], ['idiopathic', 'علت ناشناخته', 'idi/o خود + path/o بیماری', '❓', '#7048e8'], ['nosocomial', 'بیمارستانی', 'MRSA و VRSA', '🏥', '#c92a2a'],
      ['opportunistic', 'فرصت‌طلب', 'وقتی بدن ضعیف است', '🪫', '#e67700'], ['communicable', 'واگیردار', 'از فردی به فرد دیگر', '🤝', '#2b8a3e'], ['systemic', 'همه‌بدنی', 'کل بدن را می‌گیرد', '🧍', '#0c8599']];
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, 'از کجا آمده؟ چطور پخش می‌شود؟', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, d, e, c], i) => { const y = 32 + i * 42; return `${card(8, y, 344, 36, '#f8f9fa', sh)}<text x="330" y="${y + 25}" font-size="17" text-anchor="middle">${e}</text>${t(310, y + 16, en, { size: 11, fill: c, w: 900, anchor: 'end' })}${f(310, y + 31, fa, { size: 9.5, fill: INK, w: 800, anchor: 'end' })}${f(20, y + 23, d, { size: 9, anchor: 'start' })}`; }).join('')}`, 'واژه‌های منشأ و گسترش بیماری');
  };

  /* ---------- پاسخ بدن به بیماری ---------- */
  /* چهار نشانه التهاب روی یک انگشت آسیب‌دیده */
  A['inflammation-signs'] = () => {
    const sh = 's' + (++UID), g = 'g' + (++UID);
    const sig = (x, y, en, la, fa, ic, c, anchor) => `${ic}${t(x, y, en, { size: 12, fill: c, w: 900, anchor })}${t(x, y + 14, la, { size: 9, fill: MUTED, italic: true, anchor })}${f(x, y + 28, fa, { size: 10, fill: INK, w: 800, anchor })}`;
    return svg(360, 250, `<defs>${shadow(sh)}${radial(g, '#ff8787', '#f8dcc6', '45%')}</defs>
      <path d="M96 196 L116 80 C120 54 152 46 166 62 C176 72 176 86 172 100 L160 196 Z" fill="#f8dcc6" stroke="${SKIN_LINE}" stroke-width="1.5"/>
      <ellipse cx="144" cy="96" rx="34" ry="26" fill="url(#${g})" opacity=".85"/><path d="M130 92 l16 8 M136 102 l12 -12" stroke="#c92a2a" stroke-width="2.4" stroke-linecap="round"/>
      ${f(144, 228, 'آسیب ← آزاد شدن مواد شیمیایی ← خون و مایع به بافت', { size: 9.5, fill: INK, w: 700 })}
      <path d="M110 70 q-6 -10 0 -20 q6 -10 0 -20 M124 62 q-6 -10 0 -20 q6 -10 0 -20" stroke="#e8590c" stroke-width="2.2" fill="none"/>
      ${sig(60, 40, 'heat', 'calor', 'گرما', '', '#e8590c', 'middle')}
      <path d="M196 60 l-12 18 h10 l-10 20" stroke="#f59f00" stroke-width="3" fill="none" stroke-linejoin="round"/>${sig(250, 52, 'pain', 'dolor', 'درد', '', '#f59f00', 'middle')}
      ${pin(160, 112, 226, 128, '#e03131')}${sig(272, 124, 'redness', 'rubor', 'سرخی', '', '#e03131', 'middle')}
      <path d="M178 96 q12 2 14 -10 M108 104 q-12 0 -14 -12" stroke="#1c7ed6" stroke-width="2" fill="none" stroke-dasharray="3 2"/>${sig(54, 120, 'swelling', 'tumor', 'تورم', '', '#1c7ed6', 'middle')}
      <rect x="236" y="168" width="112" height="34" rx="10" fill="${VIO_BG}"/>${t(292, 186, 'inflammation • -itis', { size: 10, fill: VIO, w: 900 })}${f(292, 199, 'التهاب', { size: 9, fill: VIO })}`, 'چهار نشانه التهاب');
  };

  /* فاگوسیتوز گام به گام */
  A['phago-steps'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    const mac = (x, y, seed) => `<path d="${blob(x, y, 30, 0.35, 9, seed)}" fill="#a5d8ff" stroke="#1c7ed6" stroke-width="1.5"/><circle cx="${x - 8}" cy="${y + 4}" r="9" fill="#74c0fc" stroke="#1971c2"/>`;
    const bac = (x, y, a) => `<rect x="${x - 9}" y="${y - 4}" width="18" height="8" rx="4" fill="#7048e8" transform="rotate(${a || 0} ${x} ${y})"/>`;
    const st = (x, n, en, fa, g) => `${card(x, 34, 108, 154, '#f8f9fa', sh)}<circle cx="${x + 18}" cy="50" r="10" fill="${VIO}"/>${t(x + 18, 54, n, { size: 10, fill: '#fff', w: 900 })}${g}${t(x + 54, 160, en, { size: 10.5, fill: VIO, w: 900 })}${f(x + 54, 176, fa, { size: 9.3, fill: INK, w: 700 })}`;
    return svg(360, 226, `<defs>${shadow(sh)}${marker(id, LINE)}</defs>${f(180, 20, 'phagocytosis: phag/o (خوردن) + cyt/o (سلول)', { size: 11, fill: INK, w: 800 })}
      ${st(246, '1', 'engulf', 'بلعیدن باکتری', mac(300, 104, 3) + bac(336, 82, 30) + `<path d="M326 90 q-4 6 -10 6" stroke="#1c7ed6" stroke-width="2" fill="none"/>`)}
      ${st(126, '2', 'vesicle', 'زندانی در کیسه', mac(180, 104, 7) + `<circle cx="190" cy="98" r="11" fill="#e5dbff" stroke="#7048e8" stroke-width="1.4"/>` + bac(190, 98, -20) + `<circle cx="170" cy="82" r="5" fill="#69db7c"/>`)}
      ${st(6, '3', 'digest', 'آنزیم تخریبش می‌کند', mac(60, 104, 11) + `<circle cx="70" cy="98" r="11" fill="#d3f9d8" stroke="#2f9e44" stroke-width="1.4"/><path d="M64 96 h4 M71 101 h4 M66 104 h3" stroke="#7048e8" stroke-width="2.6" stroke-linecap="round"/>`)}
      ${arrow(id, 244, 110, 236, 110)}${arrow(id, 124, 110, 116, 110)}
      ${f(180, 210, 'باقی‌مانده: مایع + گلبول سفید = چرک (pus)', { size: 10, fill: '#e67700', w: 800 })}`, 'مراحل فاگوسیتوز');
  };

  /* ایمنی ذاتی و اکتسابی */
  A['immunity-types'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    const item = (x, y, s, c) => `${pill(x, y, 158, 22, '#fff')}${f(x + 79, y + 15, s, { size: 9.3, fill: c || INK, w: 700 })}`;
    return svg(360, 280, `<defs>${shadow(sh)}${marker(id, LINE)}</defs>
      <rect x="110" y="8" width="140" height="40" rx="12" fill="${VIO_BG}" filter="url(#${sh})"/>${t(180, 26, 'immunity', { size: 13, fill: VIO, w: 900 })}${f(180, 41, 'همه دفاع‌های بدن', { size: 9.3, fill: INK })}
      ${arrow(id, 150, 50, 104, 68)}${arrow(id, 210, 50, 256, 68)}
      ${card(188, 70, 166, 200, '#e7f5ff', sh)}${card(6, 70, 166, 200, '#fff4e6', sh)}
      ${t(271, 92, 'innate', { size: 12, fill: '#1c7ed6', w: 900 })}${f(271, 107, 'ذاتی؛ از بدو تولد', { size: 9.5, fill: INK, w: 800 })}
      ${['پوست سالم و غشای مخاطی', 'اسید معده، آنزیم بزاق و اشک', 'inflammation: التهاب', 'phagocytosis: بلعیدن میکروب'].map((s, i) => item(192, 122 + i * 34, s, '#1864ab')).join('')}
      ${t(89, 92, 'adaptive', { size: 12, fill: '#e8590c', w: 900 })}${f(89, 107, 'اکتسابی؛ در طول زندگی', { size: 9.5, fill: INK, w: 800 })}
      ${['پس از ابتلا به بیماری', 'با vaccine (واکسن)', 'antibody: پادتن در خون', 'پایش سلول‌های سرطانی'].map((s, i) => item(10, 122 + i * 34, s, '#d9480f')).join('')}`, 'ایمنی ذاتی و اکتسابی');
  };

  /* تغییرات رشد سلول */
  A['growth-changes'] = () => {
    const sh = 's' + (++UID);
    const N = { c1: '#ebfbee', c2: '#8ce99a', st: '#2f9e44', nc: '#2b8a3e' };
    const row = (cells) => cells.map(([x, y, r, o]) => cellN(x, y, r, o || N)).join('');
    const grid = (r, cols, rows, dx, dy, x0, y0, o) => { const a = []; for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) a.push([x0 + i * dx, y0 + j * dy, r, o]); return row(a); };
    const P = [
      ['normal', 'طبیعی', grid(8, 4, 2, 18, 18, 33, 22)],
      ['hyperplasia', 'سلول بیشتر، آرایش طبیعی', grid(6.5, 6, 3, 13, 13, 27, 14)],
      ['hypertrophy', 'سلول بزرگ‌تر، نه بیشتر', grid(12, 3, 2, 26, 22, 34, 20)],
      ['metaplasia', 'تبدیل به نوع دیگر سلول', grid(8, 2, 2, 18, 18, 33, 22) + grid(8, 2, 2, 18, 18, 69, 22, { c1: '#fff9db', c2: '#ffd43b', st: '#e67700', nc: '#e67700' })],
      ['dysplasia', 'رشد نابه‌هنجار، پیش‌سرطانی', [[34, 22, 7], [52, 26, 10], [70, 20, 6], [88, 26, 9], [40, 42, 9], [62, 44, 7], [84, 44, 8]].map(([x, y, r], i) => i % 2 ? cellC(x, y, r, i + 3, { c1: '#fff4e6', c2: '#ffc078', st: '#e8590c', nc: '#d9480f' }) : cellN(x, y, r, N)).join('')],
      ['anaplasia', 'بی‌تمایز؛ ویژه سرطان', [[34, 24, 9], [56, 22, 7], [78, 28, 10], [96, 20, 6], [44, 44, 8], [70, 46, 9], [92, 44, 7]].map(([x, y, r], i) => cellC(x, y, r, i + 9)).join('')]];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, 'plas = شکل‌گیری • trophy = رشد و تغذیه', { size: 11, fill: INK, w: 800 })}
      ${P.map(([en, fa, g], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 88; return `${card(x, y, 168, 80, i < 4 ? '#f8f9fa' : '#fff5f5', sh)}<g transform="translate(${x + 14} ${y - 2})">${g}</g>${t(x + 84, y + 64, en, { size: 11, fill: i < 4 ? VIO : '#c92a2a', w: 900 })}${f(x + 84, y + 76, fa, { size: 8.8, fill: INK, w: 700 })}`; }).join('')}`, 'هایپرپلازی، هایپرتروفی، متاپلازی، دیسپلازی و آناپلازی');
  };

  /* درخت نئوپلاسم */
  A['neoplasm-tree'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    const leaf = (x, y, en, fa, c) => `${pill(x - 52, y, 104, 34, '#fff', c)}${t(x, y + 15, en, { size: 10, fill: c, w: 900 })}${f(x, y + 28, fa, { size: 8.6, fill: INK, w: 700 })}`;
    return svg(360, 300, `<defs>${shadow(sh)}${marker(id, LINE)}</defs>
      <rect x="110" y="8" width="140" height="40" rx="12" fill="#f8f9fa" filter="url(#${sh})"/>${t(180, 26, 'neoplasm • tumor', { size: 12, fill: INK, w: 900 })}${f(180, 41, 'رشد نو و بی‌مهار بافت', { size: 9.3 })}
      ${arrow(id, 150, 50, 92, 72)}${arrow(id, 210, 50, 268, 72)}
      ${card(198, 74, 156, 70, GOOD_BG, sh)}${t(276, 98, 'benign', { size: 12, fill: GOOD, w: 900 })}${f(276, 114, 'خوش‌خیم؛ پخش نمی‌شود', { size: 9.5, fill: INK, w: 800 })}${f(276, 131, 'lipoma، polyp', { size: 9 })}
      ${card(6, 74, 156, 70, BAD_BG, sh)}${t(84, 98, 'malignant', { size: 12, fill: BAD, w: 900 })}${f(84, 114, 'بدخیم؛ مهاجم و پخش‌شونده', { size: 9.5, fill: INK, w: 800 })}${f(84, 131, 'نام دیگر: cancer • metastasis', { size: 8.6 })}
      ${arrow(id, 60, 146, 60, 160)}${arrow(id, 120, 146, 150, 160)}
      ${leaf(60, 162, 'carcinoma', 'بافت پوششی', BAD)}${leaf(176, 162, 'sarcoma', 'بافت همبند و ماهیچه', BAD)}
      ${arrow(id, 40, 198, 40, 212)}${arrow(id, 84, 198, 112, 212)}
      ${leaf(56, 214, 'adenocarcinoma', 'غده (aden/o)', '#e8590c')}${leaf(170, 214, 'melanoma', 'سلول رنگدانه‌دار', '#e8590c')}
      ${card(232, 160, 122, 90, '#e7f5ff', sh)}${t(293, 180, 'cyst', { size: 12, fill: '#1c7ed6', w: 900 })}${f(293, 196, 'کیسه پر از مایع', { size: 9.3, fill: INK, w: 700 })}${f(293, 212, 'اغلب با سرطان', { size: 8.8 })}${f(293, 226, 'اشتباه می‌شود؛', { size: 8.8 })}${f(293, 240, 'ولی سرطانی نیست', { size: 8.8, fill: '#1c7ed6', w: 800 })}
      ${f(180, 284, 'in situ: درجا، هنوز پخش نشده • carcinoma in situ (CIS)', { size: 9.5, fill: VIO, w: 700 })}`, 'نئوپلاسم خوش‌خیم و بدخیم');
  };

  /* جای تجمع مایع: ادم، افیوژن، آسیت، اگزودا */
  A['fluid-places'] = () => {
    const sh = 's' + (++UID);
    const drops = (x, y, n, s) => dots(x, y, s || 14, n, '#4dabf7', 2.6, x + y);
    const P = [
      ['edema', 'مایع در بافت؛ ورم', '<path d="M30 10 C24 30 22 50 26 66 L54 66 C58 50 62 30 56 10 Z" fill="#f8dcc6" stroke="#c98f6b"/><path d="M64 10 C54 30 52 50 58 66 L96 66 C100 50 104 30 90 10 Z" fill="#ffd8a8" stroke="#e8590c" stroke-width="1.5"/>' + drops(78, 40, 6, 12)],
      ['effusion', 'مایع در یک حفره (مثل پرده جنب)', '<path d="M30 10 C16 20 14 56 30 66 L60 66 L60 10 Z" fill="#ffc9c9" stroke="#c92a2a"/><path d="M14 50 C16 60 22 66 30 66 L60 66 L60 48 Z" fill="#74c0fc" opacity=".8"/>' + t(76, 42, 'pleural', { size: 8, fill: MUTED })],
      ['ascites', 'مایع در حفره صفاق (شکم)', '<ellipse cx="60" cy="40" rx="40" ry="28" fill="#f8dcc6" stroke="#c98f6b"/><ellipse cx="60" cy="46" rx="30" ry="16" fill="#74c0fc" opacity=".7"/>'],
      ['exudate', 'تراوش از رگ پس از آسیب', '<rect x="10" y="24" width="100" height="16" rx="8" fill="#ffc9c9" stroke="#c92a2a"/><path d="M50 40 q-4 10 0 18 M62 40 q4 10 0 18 M74 40 q-2 8 2 16" stroke="#f59f00" stroke-width="2" fill="none"/>' + dots(62, 60, 10, 6, '#f59f00', 2.2, 5)]];
    return svg(360, 214, `<defs>${shadow(sh)}</defs>${f(180, 20, 'مایع کجا جمع شده است؟', { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([en, fa, g], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 90; return `${card(x, y, 168, 82, '#f8f9fa', sh)}<g transform="translate(${x + 30} ${y - 6}) scale(.9)">${g}</g>${t(x + 84, y + 64, en, { size: 11, fill: VIO, w: 900 })}${f(x + 84, y + 77, fa, { size: 8.6, fill: INK, w: 700 })}`; }).join('')}`, 'ادم، افیوژن، آسیت و اگزودا');
  };

  /* ضایعه‌ها و تغییرات بافت */
  A['tissue-lesions'] = () => {
    const sh = 's' + (++UID);
    const skin = '<rect x="10" y="18" width="100" height="40" rx="6" fill="#ffd8c2" stroke="#c98f6b"/>';
    const P = [
      ['abscess', 'چرک جمع‌شده در یک جا', skin + '<ellipse cx="60" cy="40" rx="20" ry="12" fill="#ffe066" stroke="#e67700" stroke-width="1.5"/>'],
      ['cellulitis', 'التهاب پخش‌شده در بافت', '<rect x="10" y="18" width="100" height="40" rx="6" fill="#ffa8a8" stroke="#e03131"/><path d="M14 30 q20 -8 40 4 q24 12 52 -2" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/>'],
      ['fistula', 'راه غیرطبیعی بین دو اندام', '<ellipse cx="28" cy="38" rx="20" ry="16" fill="#ffc9c9" stroke="#c92a2a"/><ellipse cx="92" cy="38" rx="20" ry="16" fill="#d0bfff" stroke="#7048e8"/><path d="M46 36 C60 28 64 48 74 40" stroke="#495057" stroke-width="5" fill="none"/>'],
      ['fissure', 'شکاف، ترک', skin + '<path d="M40 18 L56 34 L48 42 L66 58" stroke="#c92a2a" stroke-width="3" fill="none"/>'],
      ['polyp', 'توده پایه‌دار', '<path d="M10 58 H110" stroke="#c98f6b" stroke-width="6"/><path d="M58 56 V36" stroke="#e64980" stroke-width="5"/><circle cx="58" cy="28" r="12" fill="#faa2c1" stroke="#c2255c" stroke-width="1.5"/>'],
      ['adhesion', 'چسبیدن دو سطح جدا', '<path d="M10 22 H110 M10 54 H110" stroke="#e8590c" stroke-width="5"/><path d="M40 24 q4 14 0 28 M70 24 q-6 14 2 28" stroke="#adb5bd" stroke-width="5" fill="none"/>'],
      ['gangrene • necrosis', 'مرگ بافت (کم‌خونی)', '<path d="M20 58 C20 30 30 16 44 16 C58 16 60 30 60 58 Z" fill="#f8dcc6" stroke="#c98f6b"/><path d="M60 58 C60 30 70 16 84 16 C98 16 100 30 100 58 Z" fill="#495057"/>'],
      ['induration', 'سفتی موضعی', skin + '<ellipse cx="60" cy="38" rx="22" ry="12" fill="#e8b28f" stroke="#a5673f" stroke-width="2"/>']];
    return svg(360, 380, `<defs>${shadow(sh)}</defs>${f(180, 20, 'نشانه‌های بیماری در بافت', { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([en, fa, g], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 86; return `${card(x, y, 168, 78, '#f8f9fa', sh)}<g transform="translate(${x + 30} ${y - 10}) scale(.9)">${g}</g>${t(x + 84, y + 60, en, { size: 11, fill: VIO, w: 900 })}${f(x + 84, y + 73, fa, { size: 8.8, fill: INK, w: 700 })}`; }).join('')}`, 'آبسه، سلولیت، فیستول، شقاق، پولیپ، چسبندگی، گانگرن و سفتی');
  };

  /* فتق و افتادگی */
  A['hernia-prolapse'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    return svg(360, 230, `<defs>${shadow(sh)}${marker(id, '#c92a2a')}</defs>
      ${card(184, 8, 170, 200, '#fff5f5', sh)}${card(6, 8, 170, 200, '#fff4e6', sh)}
      <path d="M200 40 H340 M200 52 H262 M286 52 H340" stroke="#c98f6b" stroke-width="10"/><path d="M262 46 h24" stroke="#fff" stroke-width="12"/>
      <ellipse cx="274" cy="96" rx="44" ry="28" fill="#ffc9c9" stroke="#c92a2a" stroke-width="1.6"/><path d="M262 74 C258 54 262 40 274 34 C286 40 290 54 286 74" fill="#ffc9c9" stroke="#c92a2a" stroke-width="1.6"/>
      ${t(274, 30, 'wall • دیواره', { size: 8.5, fill: MUTED })}
      ${t(269, 150, 'hernia', { size: 13, fill: '#c92a2a', w: 900 })}${f(269, 166, 'فتق؛ بیرون‌زدن اندام', { size: 9.5, fill: INK, w: 800 })}${f(269, 179, 'از یک سوراخ غیرطبیعی', { size: 9, fill: INK })}${f(269, 198, 'hiatal hernia • ‎-cele', { size: 9, fill: MUTED })}
      <ellipse cx="66" cy="50" rx="26" ry="18" fill="none" stroke="#e8590c" stroke-width="1.6" stroke-dasharray="4 3"/>${arrow(id, 78, 68, 96, 92)}
      <ellipse cx="104" cy="110" rx="26" ry="18" fill="#ffd8a8" stroke="#e8590c" stroke-width="1.6"/>
      ${t(91, 150, 'prolapse • ptosis', { size: 12, fill: '#e8590c', w: 900 })}${f(91, 166, 'افتادگی؛ پایین آمدن', { size: 9.5, fill: INK, w: 800 })}${f(91, 179, 'اندام از جای طبیعی', { size: 9, fill: INK })}${f(91, 198, 'blepharoptosis: افتادگی پلک', { size: 9, fill: MUTED })}
      ${f(180, 224, 'هر دو در گروه بیماری‌های ساختاری و تحلیل‌برنده‌اند', { size: 9.5, fill: VIO, w: 700 })}`, 'فتق و افتادگی');
  };

  /* ---------- معاینه و تشخیص ---------- */
  /* نشانه (sign) و علامت (symptom) */
  A['sign-symptom'] = () => {
    const sh = 's' + (++UID);
    const box = (x, c, bg, en, fa, who, items) => `${card(x, 8, 170, 214, bg, sh)}${t(x + 85, 32, en, { size: 14, fill: c, w: 900 })}${f(x + 85, 50, fa, { size: 10, fill: INK, w: 800 })}${f(x + 85, 68, who, { size: 9, fill: c, w: 700 })}${items.map(([e, s], i) => `${pill(x + 10, 80 + i * 34, 150, 28, '#fff')}<text x="${x + 146}" y="${99 + i * 34}" font-size="14" text-anchor="middle">${e}</text>${f(x + 76, 98 + i * 34, s, { size: 9.5, fill: INK, w: 700 })}`).join('')}`;
    return svg(360, 252, `<defs>${shadow(sh)}</defs>
      ${box(184, '#1c7ed6', '#e7f5ff', 'sign', 'نشانه (عینی)', 'پزشک می‌بیند یا اندازه می‌گیرد', [['🌡️', 'تب'], ['🩸', 'فشار خون بالا'], ['🔴', 'بثورات پوستی'], ['🧪', 'آزمایش غیرطبیعی']])}
      ${box(6, '#e8590c', '#fff4e6', 'symptom', 'علامت (ذهنی)', 'بیمار حس می‌کند و می‌گوید', [['⚡', 'درد'], ['💫', 'سرگیجه'], ['😩', 'ضعف'], ['😣', 'malaise: کسالت']])}
      ${f(180, 244, 'syndrome: مجموعه نشانه‌ها و علامت‌های یک بیماری', { size: 9.5, fill: VIO, w: 700 })}`, 'نشانه و علامت');
  };

  /* معاینه فیزیکی IPPA */
  A.ippa = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    const S = [['I', 'inspection', 'مشاهده', 'نگاه کردن', '👁️'], ['P', 'palpation', 'لمس', 'دست و انگشت', '🖐️'], ['P', 'percussion', 'دق', 'ضربه و شنیدن صدا', '👆'], ['A', 'auscultation', 'سمع', 'با گوشی پزشکی', '🩺']];
    return svg(360, 232, `<defs>${shadow(sh)}${marker(id, LINE)}</defs>${f(180, 20, 'معاینه فیزیکی به ترتیب IPPA', { size: 11.5, fill: INK, w: 800 })}
      ${S.map(([L, en, fa, d, e], i) => { const x = 270 - i * 88; return `${card(x, 34, 82, 170, '#f8f9fa', sh)}<circle cx="${x + 41}" cy="62" r="18" fill="${VIO}"/>${t(x + 41, 68, L, { size: 16, fill: '#fff', w: 900 })}<text x="${x + 41}" y="114" font-size="28" text-anchor="middle">${e}</text>${t(x + 41, 146, en, { size: 9.3, fill: VIO, w: 900 })}${f(x + 41, 162, fa, { size: 10.5, fill: INK, w: 800 })}${f(x + 41, 178, d, { size: 8.4 })}${i < 3 ? arrow(id, x - 1, 120, x - 5, 120) : ''}`; }).join('')}
      ${f(180, 224, 'فشار خون: sphygmomanometer + stethoscope', { size: 9.5, fill: MUTED, w: 700 })}`, 'مشاهده، لمس، دق و سمع');
  };

  /* علائم حیاتی */
  A['vital-signs'] = () => {
    const sh = 's' + (++UID);
    const V = [['T', 'temperature', 'دمای بدن', '37 °C', '🌡️', '#e03131'], ['P', 'pulse', 'نبض (bpm)', '60–100', '💓', '#c2255c'], ['R', 'respiration', 'تنفس در دقیقه', '12–20', '🫁', '#1c7ed6'], ['BP', 'blood pressure', 'فشار خون (mm Hg)', '120/80', '🩺', '#7048e8']];
    return svg(360, 250, `<defs>${shadow(sh)}</defs>${f(180, 20, 'vital signs (VS): چهار عدد حیاتی', { size: 11.5, fill: INK, w: 800 })}
      ${V.map(([ab, en, fa, n, e, c], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 96; return `${card(x, y, 168, 88, '#f8f9fa', sh)}<text x="${x + 30}" y="${y + 40}" font-size="24" text-anchor="middle">${e}</text>${t(x + 154, y + 26, ab, { size: 18, fill: c, w: 900, anchor: 'end' })}${t(x + 154, y + 44, en, { size: 9.5, fill: c, w: 800, anchor: 'end' })}${f(x + 154, y + 60, fa, { size: 9.3, fill: INK, w: 700, anchor: 'end' })}${t(x + 84, y + 80, n, { size: 12, fill: INK, w: 900 })}`; }).join('')}
      ${f(180, 238, 'TPR = دما، نبض، تنفس • عددها: محدوده تقریبی بزرگسال در حال استراحت', { size: 8.8, fill: MUTED, w: 700 })}`, 'علائم حیاتی');
  };

  /* خواندن فشار خون */
  A['bp-reading'] = () => {
    const sh = 's' + (++UID);
    const heart = (x, y, s, c) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 22 C-18 10 -22 -2 -14 -10 C-8 -16 0 -12 0 -6 C0 -12 8 -16 14 -10 C22 -2 18 10 0 22Z" fill="${c}"/>`;
    return svg(360, 220, `<defs>${shadow(sh)}</defs>
      ${card(8, 8, 344, 76, VIO_BG, sh)}${t(180, 66, '120 / 80', { size: 30, fill: VIO, w: 900 })}${t(300, 64, 'mm Hg', { size: 11, fill: MUTED })}
      ${f(180, 26, 'فشار خون را این‌طور می‌نویسند: systolic/diastolic', { size: 10, fill: INK, w: 800 })}
      ${card(184, 96, 168, 110, '#fff5f5', sh)}${heart(268, 120, 1, '#e03131')}${t(268, 162, 'systolic', { size: 12, fill: '#c92a2a', w: 900 })}${f(268, 178, 'هنگام انقباض قلب', { size: 9.5, fill: INK, w: 700 })}${f(268, 194, 'عدد بالایی (۱۲۰)', { size: 9 })}
      ${card(8, 96, 168, 110, '#e7f5ff', sh)}${heart(92, 118, 1.25, '#74c0fc')}${t(92, 162, 'diastolic', { size: 12, fill: '#1864ab', w: 900 })}${f(92, 178, 'هنگام استراحت قلب', { size: 9.5, fill: INK, w: 700 })}${f(92, 194, 'عدد پایینی (۸۰)', { size: 9 })}`, 'فشار سیستولی و دیاستولی');
  };

  /* خانواده ‎-scope */
  A['scope-family'] = () => {
    const sh = 's' + (++UID);
    const S = [['ophthalmoscope', 'ophthalm/o', 'چشم', '👁️'], ['otoscope', 'ot/o', 'گوش', '👂'], ['bronchoscope', 'bronch/o', 'نایژه', '🫁'], ['endoscope', 'endo-', 'درون حفره و اندام', '🔦'], ['microscope', 'micro-', 'چیزهای ریز', '🔬']];
    return svg(360, 300, `<defs>${shadow(sh)}</defs>${f(180, 20, '‎-scope: ابزار دیدن • ‎-scopy: معاینه با دیدن', { size: 11, fill: INK, w: 800 })}
      ${S.map(([en, r, d, e], i) => { const y = 32 + i * 40; return `${card(8, y, 344, 34, '#f8f9fa', sh)}<text x="332" y="${y + 23}" font-size="16" text-anchor="middle">${e}</text>${t(312, y + 22, en, { size: 11.5, fill: VIO, w: 900, anchor: 'end' })}${t(20, y + 22, r, { size: 10, fill: INK, w: 800, anchor: 'start' })}${f(84, y + 22, d, { size: 9.5, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}
      ${card(8, 236, 344, 56, '#fff4e6', sh)}<text x="332" y="270" font-size="18" text-anchor="middle">🩺</text>${t(312, 258, 'stethoscope', { size: 11.5, fill: '#e8590c', w: 900, anchor: 'end' })}${f(312, 276, 'استثنا: با آن نمی‌بینیم، می‌شنویم • steth/o سینه', { size: 9.3, fill: INK, w: 700, anchor: 'end' })}`, 'ابزارهای ‎-scope');
  };

  /* ‎-graph، ‎-graphy، ‎-gram، ‎-meter، ‎-metry */
  A['graph-gram'] = () => {
    const sh = 's' + (++UID);
    const R = [['-graph', 'ابزار ثبت', 'electrocardiograph', 'دستگاه نوار قلب', '🖥️'], ['-graphy', 'روش ثبت', 'echography', 'روش ثبت با فراصوت', '⚙️'], ['-gram', 'خود ثبت (نوار، تصویر)', 'electrocardiogram', 'نوار قلب', '📈'],
      ['-meter', 'ابزار اندازه‌گیری', 'thermometer', 'دماسنج', '🌡️'], ['-metry', 'اندازه‌گیری', 'audiometry', 'شنوایی‌سنجی', '📏']];
    return svg(360, 266, `<defs>${shadow(sh)}</defs>${f(180, 20, 'پنج پسوند تشخیص که قاطی می‌شوند', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([s, fa, ex, exfa, e], i) => { const y = 32 + i * 46; return `${card(8, y, 344, 40, i < 3 ? '#e7f5ff' : '#ebfbee', sh)}<text x="334" y="${y + 26}" font-size="16" text-anchor="middle">${e}</text>${t(316, y + 18, s, { size: 13, fill: i < 3 ? '#1864ab' : '#2b8a3e', w: 900, anchor: 'end' })}${f(316, y + 33, fa, { size: 9.3, fill: INK, w: 800, anchor: 'end' })}${t(20, y + 18, ex, { size: 10.5, fill: INK, w: 800, anchor: 'start' })}${f(20, y + 33, exfa, { size: 9, anchor: 'start' })}`; }).join('')}`, 'پسوندهای ثبت و اندازه‌گیری');
  };

  /* انرژی‌های تصویربرداری */
  A['imaging-energy'] = () => {
    const sh = 's' + (++UID);
    const R = [['x-ray', 'پرتو X', ['radiography', 'CT', 'fluoroscopy'], '☢️', '#495057', '#f1f3f5'], ['magnet + radio waves', 'میدان مغناطیسی و امواج رادیویی', ['MRI'], '🧲', '#c92a2a', '#fff5f5'],
      ['sound waves', 'امواج صوتی پرفرکانس', ['ultrasonography', 'sonogram'], '🔊', '#1c7ed6', '#e7f5ff'], ['radionuclide', 'ماده پرتوزا در بدن', ['PET', 'SPECT', 'scintigraphy'], '⚛️', '#2b8a3e', '#ebfbee']];
    return svg(360, 276, `<defs>${shadow(sh)}</defs>${f(180, 20, 'هر روش تصویربرداری با یک نوع انرژی', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, ms, e, c, bg], i) => { const y = 32 + i * 60; return `${card(8, y, 344, 54, bg, sh)}<text x="332" y="${y + 33}" font-size="20" text-anchor="middle">${e}</text>${t(312, y + 20, en, { size: 11, fill: c, w: 900, anchor: 'end' })}${f(312, y + 36, fa, { size: 8.8, fill: INK, w: 700, anchor: 'end' })}${(() => { let x = 16; return ms.map(m => { const w = Math.max(40, m.length * 6.4 + 14); const o = `${pill(x, y + 15, w, 22, '#fff', c)}${t(x + w / 2, y + 30, m, { size: 9.5, fill: c, w: 900 })}`; x += w + 5; return o; }).join(''); })()}`; }).join('')}`, 'انرژی روش‌های تصویربرداری');
  };

  /* چگالی در رادیوگرافی */
  A['xray-density'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    return svg(360, 250, `<defs>${shadow(sh)}${marker(id, '#f59f00')}</defs>
      <rect x="20" y="40" width="40" height="150" rx="8" fill="#495057"/>${t(40, 210, 'x-ray', { size: 10, fill: INK })}${f(40, 224, 'منبع پرتو', { size: 9 })}
      ${[60, 90, 120, 150, 176].map(y => arrow(id, 62, y, 110, y, '#f59f00', 2)).join('')}
      <rect x="120" y="50" width="90" height="140" rx="40" fill="#f8dcc6" stroke="#c98f6b"/><rect x="152" y="54" width="26" height="132" rx="10" fill="#f1f3f5" stroke="#adb5bd"/>
      ${t(165, 44, 'arm', { size: 9, fill: MUTED })}${t(165, 210, 'bone • soft tissue', { size: 9, fill: MUTED })}
      <rect x="250" y="40" width="100" height="150" rx="6" fill="#212529"/><rect x="264" y="50" width="72" height="130" rx="30" fill="#868e96"/><rect x="288" y="54" width="24" height="122" rx="9" fill="#f8f9fa"/>
      ${t(300, 210, 'radiograph', { size: 10, fill: INK })}${f(300, 224, 'تصویر روی فیلم', { size: 9 })}
      ${f(180, 244, 'استخوان: سفید و روشن • بافت نرم: خاکستری • هوا: تیره', { size: 9.5, fill: VIO, w: 800 })}
      ${f(180, 22, 'بافت متراکم پرتو را جذب می‌کند و روشن دیده می‌شود', { size: 10.5, fill: INK, w: 800 })}`, 'چگالی در رادیوگرافی');
  };

  /* نماهای رادیوگرافی */
  A['xray-views'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    const top = (cx, cy) => `<ellipse cx="${cx}" cy="${cy}" rx="30" ry="16" fill="#f8dcc6" stroke="#c98f6b" stroke-width="1.4"/><circle cx="${cx}" cy="${cy}" r="9" fill="#e9b994" stroke="#c98f6b"/><path d="M${cx - 4} ${cy - 8} l4 -6 l4 6" fill="#c98f6b"/>`;
    const V = [['AP', 'anteroposterior', 'از جلو به پشت', 0], ['PA', 'posteroanterior', 'از پشت به جلو', 1], ['LL', 'left lateral', 'پهلوی چپ روی فیلم', 2], ['RL', 'right lateral', 'پهلوی راست روی فیلم', 3]];
    return svg(360, 300, `<defs>${shadow(sh)}${marker(id, '#f59f00')}</defs>${f(180, 20, 'نمای رادیوگرافی: پرتو از کدام سو وارد می‌شود؟ (از بالا)', { size: 10.5, fill: INK, w: 800 })}
      ${V.map(([ab, en, fa, k], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 124, cx = x + 84, cy = y + 40;
        const film = (x1, y1, w, h) => `<rect x="${x1}" y="${y1}" width="${w}" height="${h}" rx="2" fill="#343a40"/>`;
        const ar = k === 0 ? arrow(id, cx, cy - 36, cx, cy - 20, '#f59f00', 2.4) + film(cx - 30, cy + 22, 60, 5) : k === 1 ? arrow(id, cx, cy + 38, cx, cy + 20, '#f59f00', 2.4) + film(cx - 30, cy - 27, 60, 5) : k === 2 ? arrow(id, cx + 72, cy, cx + 34, cy, '#f59f00', 2.4) + film(cx - 40, cy - 22, 5, 44) : arrow(id, cx - 72, cy, cx - 34, cy, '#f59f00', 2.4) + film(cx + 35, cy - 22, 5, 44);
        return `${card(x, y, 168, 116, '#f8f9fa', sh)}${top(cx, cy)}${ar}${t(cx, y + 94, `${ab} • ${en}`, { size: 9.5, fill: VIO, w: 900 })}${f(cx, y + 108, fa, { size: 9, fill: INK, w: 700 })}`; }).join('')}
      ${f(180, 294, 'از بالا: دماغه کوچک = جلوی بدن • مستطیل تیره = فیلم', { size: 8.6, fill: MUTED })}`, 'نماهای AP، PA و جانبی');
  };

  /* راه‌های نمونه‌برداری */
  A['biopsy-ways'] = () => {
    const sh = 's' + (++UID);
    const R = [['needle aspiration', 'کشیدن مایع با سوزن', 'از قفسه سینه یا کیست', '💉'], ['punch', 'سوراخ کوچک', 'مثل نمونه پوست', '⭕'], ['endoscopic', 'با آندوسکوپ', 'دستگاه تنفس یا گوارش', '🔦'], ['surgical', 'برداشتن با جراحی', 'تومور یا غده لنفاوی', '✂️'], ['liquid biopsy', 'بیوپسی مایع (خون)', 'سلول یا DNA تومور در خون', '🩸']];
    return svg(360, 248, `<defs>${shadow(sh)}</defs>${f(180, 20, 'biopsy (bx): برداشتن بافت برای میکروسکوپ', { size: 11, fill: INK, w: 800 })}
      ${R.map(([en, fa, d, e], i) => { const y = 32 + i * 42; return `${card(8, y, 344, 36, i === 4 ? '#fff0f6' : '#f8f9fa', sh)}<text x="332" y="${y + 24}" font-size="16" text-anchor="middle">${e}</text>${t(312, y + 16, en, { size: 10.5, fill: i === 4 ? '#c2255c' : VIO, w: 900, anchor: 'end' })}${f(312, y + 31, fa, { size: 9.3, fill: INK, w: 800, anchor: 'end' })}${f(20, y + 23, d, { size: 9, anchor: 'start' })}`; }).join('')}`, 'روش‌های نمونه‌برداری');
  };

  /* ریشه‌های نیروهای فیزیکی (جدول ۳-۶) */
  A['physical-forces'] = () => {
    const sh = 's' + (++UID);
    const R = [['aer/o', 'هوا، گاز', '💨'], ['bar/o', 'فشار', '⏲️'], ['chrom/o', 'رنگ', '🎨'], ['chron/o', 'زمان', '⏳'], ['cry/o', 'سرما', '❄️'], ['electr/o', 'برق', '⚡'],
      ['erg/o', 'کار', '🏋️'], ['phon/o', 'صدا', '🗣️'], ['phot/o', 'نور', '💡'], ['radi/o', 'پرتو، اشعه X', '☢️'], ['son/o', 'صدا (فراصوت)', '🔊'], ['therm/o', 'گرما، دما', '🌡️']];
    return svg(360, 262, `<defs>${shadow(sh)}</defs>${f(180, 20, 'دوازده ریشه برای نیروهای فیزیکی', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, e], i) => { const x = 6 + (2 - i % 3) * 118, y = 30 + Math.floor(i / 3) * 56; return `${card(x, y, 112, 50, '#f8f9fa', sh)}<text x="${x + 94}" y="${y + 30}" font-size="18" text-anchor="middle">${e}</text>${t(x + 10, y + 21, en, { size: 12, fill: VIO, w: 900, anchor: 'start' })}${f(x + 10, y + 38, fa, { size: 9.3, fill: INK, w: 700, anchor: 'start' })}`; }).join('')}`, 'ریشه‌های نیروهای فیزیکی');
  };

  /* ---------- جراحی و درمان ---------- */
  /* پسوندهای برش و برداشتن روی یک اندام */
  const organ = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="34" ry="24" fill="#ffc9c9" stroke="#e03131" stroke-width="1.6"/>`;
  A['surgery-suffixes'] = () => {
    const sh = 's' + (++UID);
    const P = [
      ['-ectomy', 'برداشتن', 'hepatectomy', `<ellipse cx="60" cy="40" rx="34" ry="24" fill="none" stroke="#e03131" stroke-width="1.6" stroke-dasharray="4 3"/><path d="M46 28 l28 24 M74 28 l-28 24" stroke="#c92a2a" stroke-width="3" stroke-linecap="round"/>`],
      ['-tomy', 'برش', 'laparotomy', organ(60, 40) + `<path d="M34 40 h52" stroke="#1c7ed6" stroke-width="3" stroke-dasharray="6 3"/>`],
      ['-stomy', 'ساختن دهانه', 'tracheostomy', organ(60, 40) + `<circle cx="60" cy="40" r="9" fill="#fff" stroke="#2b8a3e" stroke-width="3"/>`],
      ['-centesis', 'سوراخ و کشیدن مایع', 'thoracentesis', organ(60, 44) + `<path d="M60 48 L26 10" stroke="#495057" stroke-width="2.4"/><rect x="18" y="-2" width="10" height="16" rx="2" transform="rotate(-42 23 6)" fill="#74c0fc"/><circle cx="60" cy="50" r="6" fill="#74c0fc"/>`],
      ['-tome', 'ابزار برش', 'microtome', `<path d="M24 52 L84 22 L92 26 L36 58 Z" fill="#ced4da" stroke="#495057" stroke-width="1.5"/><rect x="84" y="16" width="16" height="9" rx="3" transform="rotate(-27 92 20)" fill="#495057"/>`],
      ['-scopy', 'دیدن درون', 'arthroscopy', organ(60, 44) + `<path d="M20 10 C40 14 46 28 56 40" stroke="#495057" stroke-width="3" fill="none"/><circle cx="56" cy="40" r="3" fill="#ffd43b"/>`]];
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, 'جراح با پسوند حرف می‌زند', { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([en, fa, ex, g], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 84; return `${card(x, y, 168, 76, '#f8f9fa', sh)}<g transform="translate(${x + 4} ${y + 4}) scale(.7)">${g}</g>${t(x + 160, y + 26, en, { size: 13, fill: VIO, w: 900, anchor: 'end' })}${f(x + 160, y + 44, fa, { size: 8.8, fill: INK, w: 800, anchor: 'end' })}${t(x + 160, y + 64, ex, { size: 9.5, fill: MUTED, anchor: 'end' })}`; }).join('')}`, 'پسوندهای جراحی');
  };

  /* پسوندهای ترمیم و ثابت کردن */
  A['repair-suffixes'] = () => {
    const sh = 's' + (++UID);
    const P = [
      ['-plasty', 'ترمیم، بازسازی', 'rhinoplasty', '<path d="M30 54 C40 20 70 14 84 34 C96 50 74 60 58 52" stroke="#e8590c" stroke-width="3" fill="#ffe8cc"/><path d="M86 18 l6 -6 M92 26 l8 -2" stroke="#f59f00" stroke-width="2.4"/>'],
      ['-rrhaphy', 'ترمیم با بخیه', 'herniorrhaphy', '<path d="M20 40 H100" stroke="#e03131" stroke-width="2.4"/>' + [30, 44, 58, 72, 86].map(x => `<path d="M${x} 30 L${x + 6} 50" stroke="#1c7ed6" stroke-width="2.4"/>`).join('')],
      ['-pexy', 'ثابت کردن', 'nephropexy', organ(60, 40) + '<path d="M60 16 V4 M50 6 h20" stroke="#495057" stroke-width="3"/><circle cx="60" cy="18" r="4" fill="#495057"/>'],
      ['-desis', 'جوش دادن', 'arthrodesis', '<rect x="20" y="20" width="36" height="40" rx="10" fill="#f1f3f5" stroke="#868e96"/><rect x="64" y="20" width="36" height="40" rx="10" fill="#f1f3f5" stroke="#868e96"/><rect x="50" y="32" width="20" height="16" fill="#adb5bd"/>'],
      ['-tripsy', 'خرد کردن', 'lithotripsy', '<path d="M30 40 l10 -12 l14 4 l4 14 l-12 10 l-14 -4 z" fill="#868e96"/><path d="M70 28 l6 -4 M76 40 h8 M70 52 l6 4" stroke="#f59f00" stroke-width="3"/><circle cx="94" cy="30" r="3" fill="#868e96"/><circle cx="98" cy="44" r="2.5" fill="#868e96"/><circle cx="92" cy="54" r="2" fill="#868e96"/>'],
      ['-lysis', 'جدا کردن', 'dialysis', '<path d="M20 30 H100 M20 50 H100" stroke="#adb5bd" stroke-width="4"/><path d="M60 24 v32" stroke="#1c7ed6" stroke-width="2" stroke-dasharray="3 3"/>' + dots(40, 40, 10, 6, '#e03131', 2.2, 3) + dots(80, 40, 8, 3, '#e03131', 2.2, 8)]];
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, 'ترمیم، ثابت کردن، جوش دادن، خرد کردن', { size: 11.5, fill: INK, w: 800 })}
      ${P.map(([en, fa, ex, g], i) => { const x = 8 + (1 - i % 2) * 176, y = 32 + Math.floor(i / 2) * 84; return `${card(x, y, 168, 76, '#f8f9fa', sh)}<g transform="translate(${x + 4} ${y}) scale(.8)">${g}</g>${t(x + 160, y + 26, en, { size: 13, fill: VIO, w: 900, anchor: 'end' })}${f(x + 160, y + 44, fa, { size: 8.8, fill: INK, w: 800, anchor: 'end' })}${t(x + 160, y + 64, ex, { size: 9.5, fill: MUTED, anchor: 'end' })}`; }).join('')}`, 'پسوندهای ترمیم و ثابت کردن');
  };

  /* هدف‌های جراحی */
  A['surgery-purposes'] = () => {
    const sh = 's' + (++UID);
    const R = [['treatment', 'درمان', 'excision تومور، ترمیم زخم، fixation اندام افتاده', '🩹', '#2b8a3e', '#ebfbee'], ['diagnosis', 'تشخیص', 'biopsy؛ جراحی اکتشافی', '🔬', '#1c7ed6', '#e7f5ff'],
      ['restoration', 'بازگرداندن کار اندام', 'colostomy، tracheostomy، پیوند، prosthesis', '🔧', '#e8590c', '#fff4e6'], ['relief', 'تسکین (palliative)', 'کاستن درد یا فشار تومور', '🕊️', '#7048e8', '#f3f0ff']];
    return svg(360, 272, `<defs>${shadow(sh)}</defs>${f(180, 20, 'چرا جراحی می‌کنیم؟', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([en, fa, d, e, c, bg], i) => { const y = 32 + i * 50; return `${card(8, y, 344, 44, bg, sh)}<text x="332" y="${y + 29}" font-size="18" text-anchor="middle">${e}</text>${t(312, y + 18, en, { size: 11, fill: c, w: 900, anchor: 'end' })}${f(312, y + 35, fa, { size: 9.5, fill: INK, w: 800, anchor: 'end' })}${f(20, y + 27, d, { size: 8.6, anchor: 'start' })}`; }).join('')}
      ${card(8, 234, 168, 32, '#fff5f5', sh)}${f(92, 254, 'emergency: فوری، خطر حاد', { size: 9, fill: '#c92a2a', w: 800 })}${card(184, 234, 168, 32, '#f8f9fa', sh)}${f(268, 254, 'elective: انتخابی، قابل تأخیر', { size: 9, fill: INK, w: 800 })}`, 'هدف‌های جراحی');
  };

  /* مسیر بیمار در جراحی */
  A['periop-path'] = () => {
    const sh = 's' + (++UID), id = 'm' + (++UID);
    const S = [['preop', 'پیش از عمل', ['معاینه', 'رضایت آگاهانه', 'NPO: ناشتا'], '📋', '#1c7ed6'], ['OR', 'اتاق عمل', ['anesthesia', 'incision', 'EBL'], '🔪', '#c92a2a'],
      ['PACU', 'ریکاوری', ['بیدار شدن', 'از بیهوشی', 'VS'], '🛏️', '#e8590c'], ['postop', 'پس از عمل', ['پیگیری', 'دستور مراقبت', 'در خانه'], '🏠', '#2b8a3e']];
    return svg(360, 230, `<defs>${shadow(sh)}${marker(id, LINE)}</defs>${f(180, 20, 'از پذیرش تا خانه', { size: 11.5, fill: INK, w: 800 })}
      ${S.map(([en, fa, items, e, c], i) => { const x = 270 - i * 88; return `${card(x, 34, 82, 180, '#f8f9fa', sh)}<text x="${x + 41}" y="66" font-size="24" text-anchor="middle">${e}</text>${t(x + 41, 92, en, { size: 12, fill: c, w: 900 })}${f(x + 41, 108, fa, { size: 9.3, fill: INK, w: 800 })}${items.map((s, j) => (/^[A-Za-z]/.test(s) ? t : f)(x + 41, 134 + j * 18, s, { size: 8.6, fill: MUTED, w: 700 })).join('')}${i < 3 ? arrow(id, x - 1, 124, x - 5, 124) : ''}`; }).join('')}`, 'پیش از عمل، اتاق عمل، ریکاوری و پس از عمل');
  };

  /* درجه‌بندی و مرحله‌بندی */
  A['grade-stage'] = () => {
    const sh = 's' + (++UID);
    const cells = (x, y, n) => Array.from({ length: 4 }, (_, i) => (n > i ? cellC(x + i * 16, y, 6.5, i + n * 3) : cellN(x + i * 16, y, 6.5, { c1: '#ebfbee', c2: '#8ce99a', st: '#2f9e44', nc: '#2b8a3e' }))).join('');
    return svg(360, 250, `<defs>${shadow(sh)}</defs>
      ${card(184, 8, 170, 200, '#fff5f5', sh)}${card(6, 8, 170, 200, '#e7f5ff', sh)}
      ${t(269, 32, 'grading', { size: 14, fill: '#c92a2a', w: 900 })}${f(269, 50, 'درجه: سلول‌ها زیر میکروسکوپ', { size: 9.3, fill: INK, w: 800 })}
      ${[1, 2, 3, 4].map(g => `${t(214, 76 + (g - 1) * 32, ['I', 'II', 'III', 'IV'][g - 1], { size: 12, fill: '#c92a2a', w: 900 })}${cells(246, 72 + (g - 1) * 32, g)}`).join('')}
      ${f(269, 200, 'هرچه بالاتر، سلول نابه‌هنجارتر', { size: 8.8 })}
      ${t(91, 32, 'staging', { size: 14, fill: '#1864ab', w: 900 })}${f(91, 50, 'مرحله: گسترش در بدن', { size: 9.3, fill: INK, w: 800 })}
      ${[['T', 'tumor', 'تومور اولیه'], ['N', 'nodes', 'غدد لنفاوی ناحیه'], ['M', 'metastases', 'متاستاز دوردست']].map(([L, en, fa], i) => `<circle cx="32" cy="${82 + i * 38}" r="13" fill="#1c7ed6"/>${t(32, 87 + i * 38, L, { size: 13, fill: '#fff', w: 900 })}${t(52, 80 + i * 38, en, { size: 10, fill: '#1864ab', w: 800, anchor: 'start' })}${f(52, 94 + i * 38, fa, { size: 9, anchor: 'start' })}`).join('')}
      ${f(91, 200, 'نتیجه: stage I تا IV', { size: 8.8 })}
      ${f(180, 236, 'grade = چقدر بدشکل؟ • stage = چقدر پخش شده؟', { size: 10, fill: VIO, w: 800 })}`, 'درجه‌بندی و مرحله‌بندی تومور');
  };

  /* طب مکمل و جایگزین */
  A['alt-med'] = () => {
    const sh = 's' + (++UID);
    const R = [['acupuncture', 'سوزن در نقطه‌های خاص', '📍'], ['biofeedback', 'یادگیری کنترل پاسخ بدن', '📟'], ['chiropractic', 'دستکاری ستون فقرات', '🦴'], ['massage', 'آرام کردن، گردش خون', '💆'],
      ['meditation', 'آرام کردن ذهن', '🧘'], ['homeopathy', 'داروی بسیار رقیق', '💧'], ['naturopathy', 'سبک زندگی سالم', '🌿'], ['osteopathy', 'اصلاح ساختار بدن', '🧍']];
    return svg(360, 318, `<defs>${shadow(sh)}</defs>
      <circle cx="180" cy="150" r="46" fill="${VIO_BG}" filter="url(#${sh})"/>${t(180, 144, 'holistic', { size: 12, fill: VIO, w: 900 })}${f(180, 160, 'کل‌نگر: جسم، ذهن،', { size: 8.6, fill: INK, w: 700 })}${f(180, 173, 'روان و جامعه', { size: 8.6, fill: INK, w: 700 })}
      ${R.map(([en, fa, e], i) => { const a = -Math.PI / 2 + i * Math.PI / 4, x = 180 + 118 * Math.cos(a), y = 150 + 112 * Math.sin(a); return `<text x="${x.toFixed(0)}" y="${(y - 6).toFixed(0)}" font-size="16" text-anchor="middle">${e}</text>${t(x.toFixed(0), (y + 10).toFixed(0), en, { size: 9.5, fill: VIO, w: 900 })}${f(x.toFixed(0), (y + 23).toFixed(0), fa, { size: 8.3 })}`; }).join('')}
      ${f(180, 312, 'CAM: طب مکمل و جایگزین؛ تمرکز بر سلامت، نه فقط بیماری', { size: 9, fill: MUTED, w: 700 })}`, 'طب مکمل و جایگزین');
  };

  /* کانولا و تروکار، کاتتر و درن */
  A['tubes-tools'] = () => {
    const sh = 's' + (++UID);
    return svg(360, 236, `<defs>${shadow(sh)}</defs>${f(180, 20, 'لوله‌ها در درمان', { size: 11.5, fill: INK, w: 800 })}
      ${card(184, 32, 170, 120, '#f8f9fa', sh)}
      <rect x="200" y="62" width="120" height="14" rx="7" fill="#d0ebff" stroke="#1c7ed6" stroke-width="1.5"/><path d="M196 69 H330 L340 69" stroke="#495057" stroke-width="3"/><path d="M330 64 L344 69 L330 74 Z" fill="#495057"/>
      ${t(269, 98, 'trocar + cannula', { size: 11, fill: VIO, w: 900 })}${f(269, 114, 'تروکار تیز سوراخ می‌کند؛ بیرون می‌آید', { size: 8.6, fill: INK, w: 700 })}${f(269, 128, 'و کانولا برای خروج مایع یا هوا می‌ماند', { size: 8.6, fill: INK, w: 700 })}
      ${card(6, 32, 170, 120, '#f8f9fa', sh)}
      <path d="M20 70 C60 50 90 90 130 70 C146 62 156 66 162 70" stroke="#e8590c" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="162" cy="70" r="5" fill="#ffd8a8" stroke="#e8590c"/>
      ${t(91, 98, 'catheter', { size: 11, fill: VIO, w: 900 })}${f(91, 114, 'لوله باریک برای کشیدن یا', { size: 8.6, fill: INK, w: 700 })}${f(91, 128, 'وارد کردن مایع؛ مثل PICC', { size: 8.6, fill: INK, w: 700 })}
      ${[['drain', 'درن: خروج ترشح از زخم'], ['irrigation • lavage', 'شست‌وشوی حفره'], ['paracentesis', 'کشیدن مایع از حفره']].map(([en, fa], i) => `${card(6 + (2 - i) * 118, 162, 112, 62, '#e6fcf5', sh)}${t(62 + (2 - i) * 118, 186, en, { size: 9.5, fill: VIO, w: 900 })}${f(62 + (2 - i) * 118, 204, fa, { size: 8.4, fill: INK, w: 700 })}`).join('')}`, 'کاتتر، تروکار، کانولا و درن');
  };

  /* ---------- دارو و نسخه ---------- */
  /* راه‌های تجویز دارو روی بدن */
  A['routes-body'] = () => {
    const L = [[174, 38, 96, 30, 'inhalation', 'استنشاق'], [176, 46, 96, 62, 'po • oral', 'خوراکی'], [184, 44, 96, 94, 'SL • sublingual', 'زیرزبانی'], [154, 82, 96, 126, 'IM', 'داخل‌عضلانی'], [150, 128, 96, 160, 'IV', 'داخل‌وریدی'], [180, 112, 96, 192, 'intrathecal', 'نخاعی • epidural نیز']];
    const R = [[186, 30, 264, 30, 'instillation', 'چکاندن (چشم، گوش)'], [196, 84, 264, 66, 'transdermal', 'برچسب پوستی'], [206, 120, 264, 102, 'topical', 'روی پوست'], [190, 112, 264, 138, 'SC', 'زیرجلدی'], [186, 104, 264, 174, 'ID', 'داخل‌پوستی'], [184, 140, 264, 210, 'rectal', 'مقعدی (شیاف)']];
    return svg(360, 252, `${man(180, 18, 0.96, { arms: 14 })}<rect x="192" y="78" width="12" height="9" rx="2" fill="#fff" stroke="#7048e8" stroke-width="1.4"/>
      ${L.map(([x1, y1, x2, y2, en, fa]) => `${pin(x1, y1, x2, y2, VIO)}${t(x2 - 4, y2 - 2, en, { size: 9.3, fill: VIO, w: 900, anchor: 'end' })}${f(x2 - 4, y2 + 11, fa, { size: 8.6, anchor: 'end' })}`).join('')}
      ${R.map(([x1, y1, x2, y2, en, fa]) => `${pin(x1, y1, x2, y2, '#e8590c')}${t(x2 + 4, y2 - 2, en, { size: 9.3, fill: '#e8590c', w: 900, anchor: 'start' })}${f(x2 + 4, y2 + 11, fa, { size: 8.6, anchor: 'start' })}`).join('')}
      ${f(180, 246, 'تزریق (injection) = راه‌های parenteral', { size: 9.5, fill: INK, w: 800 })}`, 'راه‌های تجویز دارو');
  };

  /* زاویه سوزن در تزریق */
  A['injection-angles'] = () => {
    const nd = (x, y, ang, c, len) => { const a = ang * Math.PI / 180, x2 = x - Math.cos(a) * len, y2 = y - Math.sin(a) * len; return `<path d="M${x} ${y} L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="#868e96" stroke-width="2"/><path d="M${x2.toFixed(1)} ${y2.toFixed(1)} L${(x2 - Math.cos(a) * 40).toFixed(1)} ${(y2 - Math.sin(a) * 40).toFixed(1)}" stroke="${c}" stroke-width="10" stroke-linecap="round"/>`; };
    return svg(360, 250, `
      <rect x="10" y="120" width="340" height="16" fill="#f8dcc6"/><rect x="10" y="136" width="340" height="40" fill="#ffe8cc"/><rect x="10" y="176" width="340" height="54" fill="#ffc9c9"/>
      ${[186, 196, 206, 216].map(y => `<path d="M10 ${y} H350" stroke="#fa5252" stroke-width=".6" opacity=".5"/>`).join('')}
      ${nd(60, 200, 90, '#1c7ed6', 82)}${nd(150, 162, 45, '#e8590c', 60)}${nd(250, 128, 15, '#f59f00', 40)}
      ${t(70, 30, 'IM • 90°', { size: 11, fill: '#1c7ed6', w: 900, anchor: 'start' })}${f(70, 44, 'داخل ماهیچه', { size: 9, anchor: 'start' })}
      ${t(132, 60, 'SC • 45°', { size: 11, fill: '#e8590c', w: 900, anchor: 'start' })}${f(132, 74, 'زیر پوست', { size: 9, anchor: 'start' })}
      ${t(250, 82, 'ID • 15°', { size: 11, fill: '#f59f00', w: 900 })}${f(250, 96, 'درون پوست', { size: 9, anchor: 'middle' })}
      ${f(344, 132, 'پوست', { size: 8.6, fill: INK, anchor: 'end' })}${f(344, 160, 'بافت زیرجلدی (چربی)', { size: 8.6, fill: INK, anchor: 'end' })}${f(344, 222, 'ماهیچه', { size: 8.6, fill: INK, anchor: 'end' })}
      ${f(180, 246, 'هرچه عمیق‌تر، زاویه بیشتر', { size: 9.5, fill: VIO, w: 800 })}`, 'زاویه تزریق IM، SC و ID');
  };

  /* زمان مصرف دارو در یک روز */
  A['dose-clock'] = () => {
    const sh = 's' + (++UID);
    const X = h => 40 + (h - 6) * (250 / 18);
    const row = (y, ab, fa, hours, c) => `${t(10, y + 4, ab, { size: 11, fill: c, w: 900, anchor: 'start' })}<path d="M${X(6)} ${y} H${X(24)}" stroke="#dee2e6" stroke-width="3" stroke-linecap="round"/>${hours.map(h => `<circle cx="${X(h).toFixed(1)}" cy="${y}" r="6" fill="${c}"/>`).join('')}${f(350, y + 4, fa, { size: 8.6, anchor: 'end' })}`;
    return svg(360, 270, `<defs>${shadow(sh)}</defs>${f(180, 18, 'یک روز از ساعت ۶ صبح تا نیمه‌شب', { size: 11, fill: INK, w: 800 })}
      ${[6, 9, 12, 15, 18, 21, 24].map(h => `${t(X(h).toFixed(1), 38, String(h), { size: 9, fill: MUTED })}`).join('')}<text x="${X(7)}" y="60" font-size="12" text-anchor="middle">🍳</text><text x="${X(13)}" y="60" font-size="12" text-anchor="middle">🍲</text><text x="${X(19)}" y="60" font-size="12" text-anchor="middle">🍽️</text><text x="${X(22.5)}" y="60" font-size="12" text-anchor="middle">🌙</text>
      ${row(84, 'bid', '۲ بار', [8, 20], '#1c7ed6')}${row(112, 'tid', '۳ بار', [8, 14, 20], '#2b8a3e')}${row(140, 'qid', '۴ بار', [8, 12, 16, 20], '#e8590c')}${row(168, 'q4h', 'هر ۴ ساعت', [6, 10, 14, 18, 22], '#7048e8')}
      ${row(196, 'ac', 'پیش از غذا', [6.6, 12.6, 18.6], '#c2255c')}${row(224, 'pc', 'پس از غذا', [7.6, 13.6, 19.6], '#c2255c')}${row(252, 'hs', 'هنگام خواب', [22.5], '#495057')}`, 'زمان‌بندی مصرف دارو');
  };

  /* شکل‌های دارو */
  A['drug-forms'] = () => {
    const sh = 's' + (++UID);
    const col = (x, en, fa, c, bg, items) => `${card(x, 32, 112, 250, bg, sh)}${t(x + 56, 52, en, { size: 12, fill: c, w: 900 })}${f(x + 56, 67, fa, { size: 9.5, fill: INK, w: 800 })}${items.map(([s, d, e], i) => `<text x="${x + 98}" y="${94 + i * 26}" font-size="13" text-anchor="middle">${e}</text>${t(x + 86, 90 + i * 26, s, { size: 9.3, fill: c, w: 900, anchor: 'end' })}${f(x + 86, 101 + i * 26, d, { size: 7.8, anchor: 'end' })}`).join('')}`;
    return svg(360, 290, `<defs>${shadow(sh)}</defs>${f(180, 20, 'Box 3-8: شکل‌های آماده‌سازی دارو', { size: 11, fill: INK, w: 800 })}
      ${col(242, 'liquid', 'مایع', '#1c7ed6', '#e7f5ff', [['aerosol', 'افشانه استنشاقی', '🌫️'], ['solution', 'محلول در آب', '💧'], ['elixir', 'شیرین و الکلی', '🍯'], ['emulsion', 'مخلوط دو مایع', '🥛'], ['lotion', 'برای پوست', '🧴'], ['suspension', 'تکان بده!', '🔄'], ['tincture', 'در الکل', '🧪']])}
      ${col(124, 'semisolid', 'نیمه‌جامد', '#e8590c', '#fff4e6', [['cream', 'امولسیون پوستی', '🧴'], ['ointment', 'پماد؛ ung', '🫙']])}
      ${col(6, 'solid', 'جامد', '#7048e8', '#f3f0ff', [['capsule', 'پوشش ژلاتینی', '💊'], ['lozenge', 'مکیدنی', '🍬'], ['suppository', 'شیاف', '🕯️'], ['tablet', 'قرص؛ pill', '⚪']])}`, 'شکل‌های دارو');
  };

  /* تداخل دارو: هم‌افزایی، آنتاگونیست، تحمل */
  A['drug-interactions'] = () => {
    const sh = 's' + (++UID);
    const bar = (x, y, h, c) => `<rect x="${x}" y="${y - h}" width="22" height="${h}" rx="4" fill="${c}"/>`;
    return svg(360, 250, `<defs>${shadow(sh)}</defs>${f(180, 20, 'وقتی دو دارو با هم یا دارو بارها مصرف می‌شود', { size: 10.5, fill: INK, w: 800 })}
      ${card(242, 32, 112, 196, '#ebfbee', sh)}${bar(252, 130, 30, '#69db7c')}${t(274, 116, '+', { size: 14 })}${bar(286, 130, 30, '#69db7c')}${t(316, 116, '=', { size: 14 })}${bar(326, 130, 76, '#2b8a3e')}
      ${t(298, 156, 'synergy', { size: 11, fill: '#2b8a3e', w: 900 })}${t(298, 170, 'potentiation', { size: 9, fill: '#2b8a3e', w: 800 })}${f(298, 188, 'اثر با هم بیشتر از', { size: 8.6, fill: INK, w: 700 })}${f(298, 201, 'جمع اثرها', { size: 8.6, fill: INK, w: 700 })}
      ${card(124, 32, 112, 196, '#fff5f5', sh)}${bar(134, 130, 60, '#ff8787')}${t(162, 116, '+', { size: 14 })}<rect x="172" y="70" width="22" height="60" rx="4" fill="none" stroke="#c92a2a" stroke-width="2" stroke-dasharray="3 2"/>${t(204, 116, '=', { size: 14 })}${bar(212, 130, 10, '#c92a2a')}
      ${t(180, 156, 'antagonist', { size: 11, fill: '#c92a2a', w: 900 })}${f(180, 174, 'یک دارو جلوی اثر', { size: 8.6, fill: INK, w: 700 })}${f(180, 187, 'دیگری را می‌گیرد', { size: 8.6, fill: INK, w: 700 })}
      ${card(6, 32, 112, 196, '#fff4e6', sh)}${[50, 40, 30, 22].map((h, i) => bar(14 + i * 25, 130, h, '#ffa94d')).join('')}${f(62, 70, 'همان دوز، اثر کمتر', { size: 8.4, fill: INK })}
      ${t(62, 156, 'tolerance', { size: 11, fill: '#e8590c', w: 900 })}${f(62, 174, 'باید دوز را بالا برد', { size: 8.6, fill: INK, w: 700 })}${t(62, 196, 'withdrawal', { size: 10, fill: '#c92a2a', w: 900 })}${f(62, 210, 'نشانه‌ها با قطع ناگهانی', { size: 8.4, fill: INK, w: 700 })}
      ${f(180, 244, 'contraindication: دلیلی برای ندادن دارو • anaphylaxis: حساسیت شدید و خطرناک', { size: 8.4, fill: VIO, w: 700 })}`, 'هم‌افزایی، آنتاگونیسم، تحمل و ترک');
  };

  /* خواندن یک دستور دارویی */
  A['rx-anatomy'] = () => {
    const sh = 's' + (++UID);
    const part = (x, w, s, c) => `<rect x="${x}" y="58" width="${w}" height="34" rx="8" fill="#fff" stroke="${c}" stroke-width="2"/>${t(x + w / 2, 80, s, { size: 12, fill: c, w: 900 })}`;
    const lb = (x, en, fa, c) => `${t(x, 112, en, { size: 9, fill: c, w: 900 })}${f(x, 126, fa, { size: 8.6, fill: INK, w: 700 })}`;
    return svg(360, 220, `<defs>${shadow(sh)}</defs>${card(6, 8, 348, 204, '#fff9db', sh)}
      ${t(22, 40, 'Rx', { size: 22, fill: '#c92a2a', w: 900, anchor: 'start', italic: true })}${f(340, 36, 'یک خط از نسخه کیس ۳-۲', { size: 9.5, fill: MUTED, anchor: 'end' })}
      ${part(14, 128, 'Ativan (lorazepam)', '#7048e8')}${part(146, 46, '1 mg', '#1c7ed6')}${part(196, 36, 'po', '#2b8a3e')}${part(236, 50, 'b.i.d.', '#e8590c')}${part(290, 56, 'prn', '#c2255c')}
      ${lb(78, 'brand (generic)', 'نام تجاری (ژنریک)', '#7048e8')}${lb(169, 'dose', 'مقدار', '#1c7ed6')}${lb(214, 'route', 'راه', '#2b8a3e')}${lb(261, 'frequency', 'دفعات', '#e8590c')}${lb(318, 'when', 'در صورت نیاز', '#c2255c')}
      ${f(180, 160, 'یعنی: یک میلی‌گرم آتیوان (لورازپام)، از راه دهان،', { size: 10, fill: INK, w: 800 })}${f(180, 178, 'روزی دو بار، فقط در صورت نیاز', { size: 10, fill: INK, w: 800 })}
      ${f(180, 200, 'نام تجاری با حرف بزرگ، نام ژنریک با حرف کوچک', { size: 8.8, fill: MUTED, w: 700 })}`, 'اجزای یک دستور دارویی');
  };

  /* اجزای واژه‌های دارویی (جدول ۳-۹) */
  A['drug-parts'] = () => {
    const sh = 's' + (++UID);
    const R = [['anti-', 'ضد', 'antiemetic', 'ضداستفراغ'], ['contra-', 'ضد، مخالف', 'contraceptive', 'ضدبارداری'], ['counter-', 'در برابر', 'countertransport', 'جابه‌جایی مخالف'], ['-lytic', 'حل‌کننده', 'thrombolytic', 'لخته‌شکن'],
      ['-mimetic', 'تقلیدکننده', 'sympathomimetic', 'شبه‌سمپاتیک'], ['-tropic', 'اثرگذار بر', 'psychotropic', 'اثرگذار بر روان'], ['hypn/o', 'خواب', 'hypnotic', 'خواب‌آور'], ['narc/o', 'منگی، بی‌حسی', 'narcotic', 'مخدر'], ['pharmac/o', 'دارو', 'pharmacology', 'داروشناسی']];
    return svg(360, 316, `<defs>${shadow(sh)}</defs>${f(180, 20, 'اجزای واژه برای دارو', { size: 11.5, fill: INK, w: 800 })}
      ${R.map(([p, fa, ex, exfa], i) => { const x = 6 + (2 - i % 3) * 118, y = 30 + Math.floor(i / 3) * 94; return `${card(x, y, 112, 86, '#f3f0ff', sh)}${t(x + 56, y + 24, p, { size: 13, fill: '#6741d9', w: 900 })}${f(x + 56, y + 40, fa, { size: 9.3, fill: INK, w: 800 })}${t(x + 56, y + 62, ex, { size: ex.length > 13 ? 8.4 : 9.5, fill: MUTED, w: 800 })}${f(x + 56, y + 77, exfa, { size: 8.6 })}`; }).join('')}`, 'اجزای واژه‌های دارویی');
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
    id: 'lx', sym: 'Lx', name: 'زبان بیماری', short: 'زبان', sub: 'ریشه‌های بیماری، پیشوندها، پسوندهای درد و التهاب و پارگی، و واژه‌هایی مثل stenosis و malacia که خودشان پسوند می‌شوند',
    color: '#4C6EF5', dark: '#3448B8', light: '#E5EBFF',
    levels: ['ریشه‌های بیماری', 'پیشوندها و پسوندها', 'واژه‌هایی که پسوند می‌شوند'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: ریشه‌های بیماری ================= */
      {
        id: 'lx1', title: 'هر واژه یک پازل', icon: '🧩', items: [
          L('واژه را بشکن', `بیشتر واژه‌های پزشکی از چند <b>قطعه ثابت</b> ساخته می‌شوند: <b>ریشه</b> (root) می‌گوید «کجا یا چه چیزی؟»، <b>پسوند</b> (suffix) می‌گوید «چه شده؟» و میانشان اغلب یک <b>واکه رابط</b>، معمولاً o، می‌آید.${fig('wordparts', '', 'hepatomegaly: hepat/o (کبد) + ‎-megaly (بزرگی) = بزرگی کبد.')}${memo('معنی را از آخر بخوان: اول پسوند (چه شده؟)، بعد ریشه (کجا؟).')}`),
          L('ریشه بیماری: path/o', `${tbl([['واژه', 'ساختار', 'معنی'], [e('pathology'), 'path/o + ‎-logy', 'علم بیماری'], [e('pathologist'), 'path/o + ‎-logist', 'متخصص بیماری‌ها (آسیب‌شناس)'], [e('pathogen'), 'path/o + ‎-gen', 'عامل بیماری‌زا'], [e('pathogenesis'), 'path/o + ‎-genesis', 'پیدایش بیماری']])}${pearl('پاتولوژیست نمونه بافت را زیر میکروسکوپ می‌بیند و تشخیص قطعی بسیاری از بیماری‌ها کار اوست.')}`),
          M(`${e('<b>pathologist</b>')} یعنی…`, ['متخصص بیماری‌ها و تغییرات بافت', 'عامل بیماری‌زا', 'علم بیماری', 'پیدایش بیماری'], 'path/o (بیماری) + -logist (متخصص).'),
          P('هر قطعه را به معنی‌اش وصل کن', [['path/o', 'بیماری'], ['-logy', 'علم، شناخت'], ['-logist', 'متخصص'], ['-genesis', 'پیدایش']]),
          T('در واژه‌های پزشکی، معنی را از پسوند شروع می‌کنیم.', true, 'پسوند می‌گوید چه شده و ریشه می‌گوید کجا.'),
          L('واکه رابط o', `بین ریشه و پسوندی که با <b>بی‌صدا</b> شروع می‌شود، o می‌آید: ${wb('path/o', '-logy')} = pathology. ولی اگر پسوند با <b>واکه</b> شروع شود، o حذف می‌شود: path + ‎-ic می‌شود pathic، نه pathoic.${memo('o مثل چسب است: فقط وقتی لازم است که دو بی‌صدا به هم برسند.')}`),
          B('در pathogen، حرف ___ واکه رابط است.', ['o', 'g', 'p'], 'path + o + gen.'),
          W('واژه‌ای بساز به معنی «علم بیماری»', ['path/o', '-logy'], ['-logist', '-gen', 'onc/o'], 'path/o + -logy = pathology.'),
          M(`${e('<b>pathogenesis</b>')} یعنی…`, ['پیدایش و روند ایجاد بیماری', 'متخصص بیماری', 'عامل بیماری‌زا', 'درمان بیماری'], '-genesis = پیدایش، ساخته شدن.'),
          S('املای «متخصص بیماری‌ها» را بنویس', 'pathologist', 'path/o + -logist.', 'patho…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx2', title: 'درد، سنگ، تومور', icon: '🪨', items: [
          L('پنج ریشه پایه', `جدول مرجع ده ریشه بیماری دارد؛ پنج‌تای اول:${tbl([['ریشه', 'معنی', 'نمونه'], [e('alg/o, algesi/o'), 'درد', 'algesia: دردمندی'], [e('carcin/o'), 'سرطان', 'carcinogen: سرطان‌زا'], [e('cyst/o'), 'کیسه، کیست، مثانه', 'cystic: کیستی'], [e('lith/o'), 'سنگ', 'lithiasis: سنگ‌سازی'], [e('onc/o'), 'تومور', 'oncogenic: تومورزا']])}${fig('disease-roots')}`),
          P('هر ریشه را به معنی‌اش وصل کن', [['alg/o', 'درد'], ['lith/o', 'سنگ'], ['onc/o', 'تومور'], ['carcin/o', 'سرطان']]),
          M(`${e('<b>lithiasis</b>')} یعنی…`, ['سنگ‌سازی در بدن', 'درد سنگ', 'سرطان کلیه', 'التهاب مثانه'], 'lith (سنگ) + -iasis (حالت).'),
          L('درد و بی‌دردی', `${wb('algesi/o', '-ia')} = <b>algesia</b>: حس درد. با پیشوند an- (بدون): <b>analgesia</b> یعنی بی‌دردی؛ و دارویی که درد را می‌برد <b>analgesic</b> (مسکن) است. ابزار سنجش حس درد هم <b>algesimeter</b> است.${pearl('پرستار در پرونده می‌نویسد «PCA برای analgesia»: پمپ مسکنی که خود بیمار دکمه‌اش را می‌زند.')}`),
          M(`${e('<b>analgesia</b>')} یعنی…`, ['بی‌دردی', 'درد شدید', 'درد عصب', 'حس سرما'], 'an- (بدون) + algesi/o (درد) + -ia.'),
          L('سنگ، تومور و سرطان', `${tbl([['واژه', 'معنی'], [e('urolith'), 'سنگ در دستگاه ادراری (ur/o)'], [e('oncogene'), 'ژنی که تومور می‌سازد'], [e('carcinogen'), 'ماده‌ای که سرطان ایجاد می‌کند'], [e('carcinoid'), 'شبیه کارسینوم (‎-oid: شبیه)'], [e('cystic'), 'کیستی، دارای کیست']])}${memo('carcin/o از واژه یونانی «خرچنگ» آمده؛ سرطان با پنجه‌هایش به اطراف چنگ می‌اندازد.')}`),
          M(`${e('<b>carcinogen</b>')} یعنی…`, ['ماده‌ای که سرطان ایجاد می‌کند', 'شبیه سرطان', 'متخصص سرطان', 'تخریب سرطان'], 'carcin/o + -gen (ایجادکننده).'),
          T('urolith یعنی سنگی که در دستگاه ادراری تشکیل شده است.', true, 'ur/o (ادرار) + lith (سنگ).'),
          B('عاملی که تومور ایجاد می‌کند ___ است.', ['oncogenic', 'oncolysis', 'analgesic'], 'onc/o + gen + -ic.'),
          W('واژه‌ای بساز به معنی «ماده سرطان‌زا»', ['carcin/o', '-gen'], ['-oid', 'onc/o', '-logy'], 'carcin/o + -gen = carcinogen.'),
          S('املای «بی‌دردی» را بنویس', 'analgesia', 'an- + algesi/o + -ia.', 'anal…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx3', title: 'چرک، تب، سم و سفتی', icon: '🔥', items: [
          L('دو ریشه که قاطی می‌شوند', `${vs(['py/o', 'چرک: pyocyst (کیست چرکی)، pyoderma (عفونت چرکی پوست)، pyogenesis (چرک‌سازی)'], ['pyr/o, pyret/o', 'تب، آتش: pyrexia (تب)، pyrogenic (تب‌زا)، hyperpyrexia (تب بسیار بالا)'])}${memo('pyr/o یک r اضافه دارد؛ r مثل «رادیاتور» داغ است!')}`),
          M(`${e('<b>pyrexia</b>')} یعنی…`, ['تب', 'چرک', 'سم', 'سنگ'], 'pyr/o, pyret/o = تب.'),
          M(`${e('<b>pyoderma</b>')} یعنی…`, ['عفونت چرکی پوست', 'تب پوستی', 'خشکی پوست', 'سرطان پوست'], 'py/o (چرک) + derm/o (پوست).'),
          T('pyrogenic یعنی چرک‌زا.', false, 'نادرست؛ pyrogenic یعنی تب‌زا. چرک‌زا یعنی pyogenic.'),
          L('سم و سفتی', `${tbl([['ریشه', 'معنی', 'نمونه‌ها'], [e('tox/o, toxic/o'), 'سم', 'toxicology (سم‌شناسی)، toxoid (شبه‌سم، برای واکسن)'], [e('scler/o'), 'سفت، سخت', 'sclerosis (سفت شدن بافت)، sclerotic (سفت‌شده)، arteriosclerosis (سخت شدن سرخرگ‌ها)']])}${vs(['endotoxin', 'endo- (درون): سمی که درون سلول باکتری است'], ['exotoxin', 'exo- (بیرون): سمی که باکتری ترشح می‌کند'])}`),
          P('هر واژه را به معنی‌اش وصل کن', [['toxicology', 'سم‌شناسی'], ['endotoxin', 'سم درون باکتری'], ['exotoxin', 'سم ترشح‌شده باکتری'], ['arteriosclerosis', 'سخت شدن سرخرگ‌ها']]),
          M(`${e('<b>sclerotic</b>')} یعنی…`, ['سفت‌شده، سخت‌شده', 'نرم‌شده', 'پاره‌شده', 'چرکی'], 'scler/o (سفت) + -tic.'),
          B('علم شناخت سم‌ها ___ است.', ['toxicology', 'pathology', 'oncology'], 'toxic/o + -logy.'),
          L('مرور سطح «ریشه‌های بیماری»', recap(['path/o بیماری • ‎-logy علم • ‎-logist متخصص • ‎-gen و ‎-genesis ایجاد و پیدایش', 'alg/o درد (analgesia بی‌دردی) • lith/o سنگ • onc/o تومور • carcin/o سرطان • cyst/o کیسه و مثانه', 'py/o چرک ولی pyr/o تب: pyoderma در برابر pyrexia', 'tox/o سم: endotoxin، exotoxin • scler/o سفت: arteriosclerosis'])),
          W('واژه‌ای بساز به معنی «تب‌زا»', ['pyr/o', '-genic'], ['py/o', '-logy', 'tox/o'], 'pyr/o + -genic = pyrogenic.'),
          S('املای «تب» (واژه پزشکی) را بنویس', 'pyrexia', 'pyr/o + -exia.', 'pyr…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۲: پیشوندها و پسوندها ================= */
      {
        id: 'lx4', title: 'شش پیشوند بیماری', icon: '⚡', items: [
          L('کند و تند', `${vs(['brady-', 'کند: bradypnea یعنی تنفس کند (‎-pnea: تنفس)'], ['tachy-', 'تند: tachycardia یعنی ضربان تند قلب'])}${fig('disease-prefixes')}${memo('tachy مثل «تاکسی»: تند می‌رود؛ brady مثل «برادر بزرگ» که آرام راه می‌رود.')}`),
          M(`${e('<b>tachycardia</b>')} یعنی…`, ['ضربان تند قلب', 'ضربان کند قلب', 'بزرگی قلب', 'درد قلب'], 'tachy- (تند) + cardi/o (قلب) + -ia.'),
          T('bradypnea یعنی تنفس کند.', true, 'brady- (کند) + -pnea (تنفس).'),
          L('بد، ضخیم و خشک', `${tbl([['پیشوند', 'معنی', 'نمونه'], [e('dys-'), 'نابه‌هنجار، دردناک، دشوار', 'dysplasia (رشد نابه‌هنجار بافت)، dysphagia (دشواری بلع)، dystrophy'], [e('mal-'), 'بد، ضعیف', 'malabsorption (سوءجذب)، malnutrition (سوءتغذیه)'], [e('pachy-'), 'ضخیم', 'pachydactyly (انگشت ضخیم؛ dactyl/o: انگشت)، pachycephaly'], [e('xero-'), 'خشک', 'xeroderma (خشکی پوست)، xerosis']])}`),
          P('هر پیشوند را به معنی‌اش وصل کن', [['dys-', 'نابه‌هنجار، دشوار'], ['mal-', 'بد، ضعیف'], ['pachy-', 'ضخیم'], ['xero-', 'خشک']]),
          M(`${e('<b>dysphagia</b>')} یعنی…`, ['دشواری بلع', 'خشکی دهان', 'بلع تند', 'سوءجذب'], 'dys- (دشوار) + phag/o (خوردن، بلعیدن).'),
          M(`${e('<b>xeroderma</b>')} یعنی…`, ['خشکی پوست', 'ضخامت پوست', 'عفونت چرکی پوست', 'التهاب پوست'], 'xero- (خشک) + derm/o (پوست).'),
          B('جذب ضعیف مواد غذایی از روده ___ نام دارد.', ['malabsorption', 'dysplasia', 'xerosis'], 'mal- (بد) + absorption (جذب).'),
          W('واژه‌ای بساز به معنی «انگشتان ضخیم»', ['pachy-', 'dactyl/o', '-y'], ['xero-', 'derm/o', 'brady-'], 'pachy- + dactyl/o + -y = pachydactyly.'),
          S('املای «ضربان تند قلب» را بنویس', 'tachycardia', 'tachy- + cardi/o + -ia.', 'tachy…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx5', title: 'درد، التهاب و بزرگی', icon: '🎈', items: [
          L('دو پسوند برای درد', `${wb('neur/o', '-algia')} = <b>neuralgia</b> (درد عصب) و ${wb('ur/o', '-odynia')} = <b>urodynia</b> (درد هنگام ادرار). هر دو پسوند یعنی <b>درد</b>.${tbl([['واژه', 'معنی'], [e('cephalgia'), 'سردرد (cephal/o: سر)'], [e('myalgia'), 'درد ماهیچه (my/o)'], [e('gastrodynia'), 'درد معده (gastr/o)']])}`),
          P('هر واژه را به معنی‌اش وصل کن', [['neuralgia', 'درد عصب'], ['cephalgia', 'سردرد'], ['myalgia', 'درد ماهیچه'], ['gastrodynia', 'درد معده']]),
          L('التهاب، بزرگی و بیماری', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-itis'), 'التهاب', 'cystitis: التهاب مثانه'], [e('-megaly'), 'بزرگی', 'hepatomegaly: بزرگی کبد • cardiomegaly: بزرگی قلب'], [e('-pathy'), 'بیماری (هر نوع)', 'nephropathy: بیماری کلیه • myopathy: بیماری ماهیچه'], [e('-oma'), 'تومور', 'lipoma: تومور چربی • neuroma • blastoma']])}${fig('disease-suffixes')}`),
          M(`${e('<b>cardiomegaly</b>')} یعنی…`, ['بزرگی قلب', 'التهاب قلب', 'بیماری قلب', 'درد قلب'], 'cardi/o + -megaly.'),
          M(`${e('<b>nephropathy</b>')} یعنی…`, ['هر بیماری کلیه', 'بزرگی کلیه', 'سنگ کلیه', 'درد کلیه'], 'nephr/o (کلیه) + -pathy (بیماری).'),
          T('cystitis یعنی التهاب مثانه.', true, 'cyst/o (مثانه) + -itis (التهاب).'),
          M(`${e('<b>blastoma</b>')} یعنی…`, ['تومور سلول‌های نابالغ', 'تومور چربی', 'تومور عصب', 'التهاب سلول'], 'blast/o (سلول نابالغ) + -oma.'),
          B('بزرگی کبد در معاینه را ___ می‌نامند.', ['hepatomegaly', 'hepatitis', 'hepatorrhexis'], 'hepat/o + -megaly.'),
          W('واژه‌ای بساز به معنی «بیماری ماهیچه»', ['my/o', '-pathy'], ['-algia', 'neur/o', '-megaly'], 'my/o + -pathy = myopathy.'),
          S('املای «درد عصب» را بنویس', 'neuralgia', 'neur/o + -algia.', 'neur…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx6', title: 'فوران، پارگی و شکاف', icon: '💥', items: [
          L('سه پسوند با rr', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-rrhage, -rrhagia'), 'فوران، خون‌ریزی شدید', 'hemorrhage • menorrhagia (خون‌ریزی شدید قاعدگی)'], [e('-rrhea'), 'جریان، ترشح', 'pyorrhea: چرک‌ریزی'], [e('-rrhexis'), 'پارگی', 'hepatorrhexis: پارگی کبد • amniorrhexis: پارگی کیسه آب']])}${fig('rr-rule')}${memo('سه r برای سه چیز جاری: rrhage فوران، rrhea جریان، rrhexis پارگی که مایع را بیرون می‌ریزد.')}`),
          M(`${e('<b>hemorrhage</b>')} یعنی…`, ['خون‌ریزی شدید', 'پارگی رگ', 'جریان چرک', 'توقف خون'], 'hem/o + -rrhage.'),
          M(`${e('<b>hepatorrhexis</b>')} یعنی…`, ['پارگی کبد', 'خون‌ریزی کبد', 'بزرگی کبد', 'التهاب کبد'], 'hepat/o + -rrhexis (پارگی).'),
          T('وقتی ‎-rhage به ریشه‌ای مثل hem/o می‌چسبد، r دوتایی می‌شود: hemorrhage.', true, 'قاعده rr دوتایی مرجع.'),
          L('برآمدگی، شکستن و شکاف', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-cele'), 'فتق، برآمدگی موضعی', 'gastrocele (فتق معده) • hydrocele (کیسه آب) • adipocele'], [e('-clasis, -clasia'), 'شکستن', 'osteoclasis (شکستن استخوان) • karyoclasis (شکستن هسته)'], [e('-schisis'), 'شکاف، دوپارگی', 'retinoschisis (شکافتگی شبکیه) • thoracoschisis']])}`),
          P('هر پسوند را به معنی‌اش وصل کن', [['-cele', 'فتق، برآمدگی'], ['-clasis', 'شکستن'], ['-schisis', 'شکاف'], ['-rrhea', 'جریان، ترشح']]),
          M(`${e('<b>osteoclasis</b>')} یعنی…`, ['شکستن استخوان', 'نرمی استخوان', 'مرگ استخوان', 'درد استخوان'], 'oste/o + -clasis.'),
          B('خون‌ریزی شدید قاعدگی را ___ می‌نامند.', ['menorrhagia', 'menostasis', 'amniorrhexis'], 'men/o + -rrhagia.'),
          L('مرور سطح «پیشوندها و پسوندها»', recap(['brady- کند و tachy- تند • dys- نابه‌هنجار • mal- بد • pachy- ضخیم • xero- خشک', '‎-algia و ‎-odynia درد • ‎-itis التهاب • ‎-megaly بزرگی • ‎-pathy بیماری • ‎-oma تومور', '‎-rrhage فوران و خون‌ریزی • ‎-rrhea جریان • ‎-rrhexis پارگی؛ پس از ریشه r دوتایی', '‎-cele فتق و برآمدگی • ‎-clasis شکستن • ‎-schisis شکاف'])),
          W('واژه‌ای بساز به معنی «پارگی ماهیچه»', ['my/o', '-rrhexis'], ['-rrhea', '-clasis', 'oste/o'], 'my/o + -rrhexis = myorrhexis.'),
          S('املای «خون‌ریزی شدید» را بنویس', 'hemorrhage', 'hem/o + -rrhage؛ r دوتایی.', 'hemo…'),
          N('wb:lx')
        ]
      },
      /* ================= سطح ۳: واژه‌هایی که پسوند می‌شوند ================= */
      {
        id: 'lx7', title: 'تنگی و گشادی', icon: '🫁', items: [
          L('واژه‌هایی که پسوند می‌شوند', `بعضی واژه‌ها هم تنها به کار می‌روند و هم پشت یک ریشه می‌نشینند (جدول ۳-۴). اولینشان حالت‌های یک <b>لوله</b> است: رگ، نایژه، روده.${fig('tube-changes')}`),
          L('تنگ، گشاد، گرفته', `${tbl([['واژه', 'معنی', 'نمونه'], [e('stenosis'), 'تنگی', 'bronchostenosis: تنگی نایژه'], [e('dilation, dilatation'), 'گشادی، باز شدن', 'vasodilation: گشاد شدن رگ'], [e('ectasia, ectasis'), 'گشادی، اتساع', 'gastrectasia: گشادی معده'], [e('spasm'), 'انقباض ناگهانی، گرفتگی', 'arteriospasm • bronchospasm']])}${vs(['stenosis', 'تنگ شدن لوله'], ['ectasia • dilation', 'گشاد شدن لوله'])}`),
          M(`${e('<b>bronchostenosis</b>')} یعنی…`, ['تنگی نایژه', 'گشادی نایژه', 'گرفتگی نایژه', 'التهاب نایژه'], 'bronch/o + stenosis (تنگی).'),
          M(`${e('<b>vasodilation</b>')} یعنی…`, ['گشاد شدن رگ', 'تنگ شدن رگ', 'گرفتگی رگ', 'سخت شدن رگ'], 'vas/o (رگ) + dilation (گشادی).'),
          P('هر واژه را به معنی‌اش وصل کن', [['stenosis', 'تنگی'], ['ectasia', 'گشادی'], ['spasm', 'گرفتگی ناگهانی'], ['vasodilation', 'گشاد شدن رگ']]),
          L('سفتی و توقف', `${wb('phleb/o', '-sclerosis')} = <b>phlebosclerosis</b>: سخت شدن سیاهرگ‌ها. ${e('stasis')} یعنی <b>توقف</b>: ${e('hemostasis')} بند آمدن خون و ${e('menostasis')} قطع جریان قاعدگی.${pearl('در اتاق عمل، «hemostasis خوب است» یعنی خون‌ریزی محل عمل کاملاً بند آمده است.')}`),
          T('hemostasis یعنی خون‌ریزی شدید.', false, 'نادرست؛ hemostasis یعنی بند آمدن خون. خون‌ریزی شدید hemorrhage است.'),
          M(`${e('<b>bronchospasm</b>')} در بیمار آسمی یعنی…`, ['گرفتگی ناگهانی نایژه‌ها', 'تنگی دائمی نایژه', 'گشادی نایژه', 'خون‌ریزی نایژه'], 'bronch/o + spasm.'),
          B('گشادی معده را ___ می‌نامند.', ['gastrectasia', 'gastrocele', 'gastrodynia'], 'gastr/o + ectasia.'),
          W('واژه‌ای بساز به معنی «تنگی نایژه»', ['bronch/o', '-stenosis'], ['-spasm', '-ectasia', 'vas/o'], 'bronch/o + -stenosis = bronchostenosis.'),
          S('املای «تنگی» را بنویس', 'stenosis', 'sten (تنگ) + -osis.', 'sten…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx8', title: 'نرمی، مرگ و افتادگی', icon: '🍂', items: [
          L('شش حالت بافت', `${fig('tissue-states')}${tbl([['واژه', 'معنی', 'نمونه'], [e('malacia'), 'نرمی', 'osteomalacia • craniomalacia'], [e('necrosis'), 'مرگ بافت', 'osteonecrosis • cardionecrosis'], [e('ptosis'), 'افتادگی', 'blepharoptosis • splenoptosis']])}`),
          M(`${e('<b>osteomalacia</b>')} یعنی…`, ['نرمی استخوان', 'مرگ بافت استخوان', 'شکستن استخوان', 'تومور استخوان'], 'oste/o + malacia (نرمی).'),
          M(`${e('<b>cardionecrosis</b>')} یعنی…`, ['مرگ بافت قلب', 'نرمی قلب', 'بزرگی قلب', 'پارگی قلب'], 'cardi/o + necrosis.'),
          L('افتادگی پلک', `${wb('blephar/o', '-ptosis')} = <b>blepharoptosis</b>: افتادگی پلک. در ptosis حرف p نوشته می‌شود ولی خوانده نمی‌شود: «تو-سیس».${fig('ptosis-eyes', 'پلک طبیعی (چپ) و پلک افتاده (راست)')}`),
          M('در تصویر، پلک راست پایین‌تر از حد طبیعی آمده است. نامش…', ['blepharoptosis', 'blepharospasm', 'blepharitis', 'cephaledema'], 'blephar/o (پلک) + ptosis (افتادگی).', null, F('ptosis-eyes', 'پلک طبیعی و پلک افتاده')),
          L('تخریب، ورم و سم', `${tbl([['واژه', 'معنی', 'نمونه'], [e('lysis'), 'جدا شدن، حل شدن، تخریب', 'hemolysis (تخریب گلبول قرمز) • dialysis (جدا کردن مواد از غشا)'], [e('edema'), 'ورم، تجمع مایع', 'cephaledema: ورم سر'], [e('toxin'), 'سم', 'nephrotoxin: سم کلیه • splenotoxin']])}${memo('lysis مثل قند در چای: حل می‌شود و از هم می‌پاشد.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['hemolysis', 'تخریب گلبول قرمز'], ['nephrotoxin', 'سم کلیه'], ['cephaledema', 'ورم سر'], ['splenoptosis', 'افتادگی طحال']]),
          T('dialysis یعنی جدا کردن مواد با عبور از یک غشا.', true, 'dia- (از میان) + lysis.'),
          B('نرم شدن جمجمه را ___ می‌نامند.', ['craniomalacia', 'craniotomy', 'cephalgia'], 'crani/o + malacia.'),
          W('واژه‌ای بساز به معنی «مرگ بافت استخوان»', ['oste/o', '-necrosis'], ['-malacia', '-ptosis', 'cardi/o'], 'oste/o + -necrosis = osteonecrosis.'),
          S('املای «افتادگی پلک» را بنویس', 'blepharoptosis', 'blephar/o + ptosis.', 'blepharo…'),
          N('d2t:lx')
        ]
      },
      {
        id: 'lx9', title: 'واژه‌ساز ماهر', icon: '🏗️', items: [
          L('یک ریشه، ده واژه', `حالا با یک ریشه و پسوندهایی که یاد گرفتی، ده‌ها واژه بساز. با ${e('oste/o')} (استخوان):${tbl([['واژه', 'معنی'], [e('ostealgia'), 'درد استخوان'], [e('osteonecrosis'), 'مرگ بافت استخوان'], [e('osteoma'), 'تومور استخوان'], [e('osteoclasis'), 'شکستن استخوان'], [e('osteomalacia'), 'نرمی استخوان']])}${pearl('تمرین فصل همین است: یک ریشه بگیر و پسوندها را پشتش بچین؛ معنی را از آخر بخوان.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['ostealgia', 'درد استخوان'], ['osteoma', 'تومور استخوان'], ['osteoclasis', 'شکستن استخوان'], ['osteomalacia', 'نرمی استخوان']]),
          L('یک ریشه دیگر: bronch/o', `${tbl([['واژه', 'معنی'], [e('bronchorrhea'), 'ترشح زیاد از نایژه'], [e('bronchitis'), 'التهاب نایژه'], [e('bronchostenosis'), 'تنگی نایژه'], [e('bronchospasm'), 'گرفتگی ناگهانی نایژه']])}و با ${e('-genesis')} (پیدایش): carcinogenesis (سرطان‌زایی)، pathogenesis (پیدایش بیماری) و pyogenesis (چرک‌سازی).`),
          M(`${e('<b>bronchorrhea</b>')} یعنی…`, ['ترشح زیاد از نایژه', 'خون‌ریزی نایژه', 'پارگی نایژه', 'تنگی نایژه'], 'bronch/o + -rrhea (جریان، ترشح).'),
          B('پیدایش و ساخته شدن چرک را ___ می‌نامند.', ['pyogenesis', 'pyrexia', 'pyorrhea'], 'py/o + -genesis.'),
          M(`${e('<b>carcinogenesis</b>')} یعنی…`, ['پیدایش سرطان', 'ماده سرطان‌زا', 'شبیه سرطان', 'تخریب سرطان'], 'carcin/o + -genesis.'),
          O('واژه hepatomegaly را از اول تا آخر بچین', ['hepat', 'o', 'megaly'], 'ریشه + واکه رابط + پسوند.'),
          T('myodynia و myalgia هر دو یعنی درد ماهیچه.', true, '-odynia و -algia هر دو یعنی درد.'),
          L('مرور سطح «واژه‌هایی که پسوند می‌شوند»', recap(['stenosis تنگی • ectasia و dilation گشادی • spasm گرفتگی ناگهانی • stasis توقف', 'sclerosis سفتی • malacia نرمی • necrosis مرگ بافت • ptosis افتادگی', 'lysis حل شدن و تخریب • edema ورم • toxin سم', 'یک ریشه + پسوندهای مختلف = ده‌ها واژه: osteo-، broncho-، hepato-'])),
          W('واژه‌ای بساز به معنی «پیدایش بیماری»', ['path/o', '-genesis'], ['-gen', 'py/o', '-logy'], 'path/o + -genesis = pathogenesis.'),
          S('املای «سرطان‌زایی» را بنویس', 'carcinogenesis', 'carcin/o + -genesis.', 'carcino…'),
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
    id: 'mc', sym: 'Mic', name: 'میکروب‌ها و انواع بیماری', short: 'میکروب', sub: 'هفت گروه بیماری، حاد و مزمن، باکتری‌های گرد و میله‌ای و مارپیچی، ویروس و قارچ و انگل‌ها، راه ورود میکروب، همه‌گیری و عفونت بیمارستانی',
    color: '#40C057', dark: '#2B8A3E', light: '#EBFBEE',
    levels: ['انواع و سیر بیماری', 'میکروب‌ها', 'گسترش عفونت'],
    gens: EA.genIds('mc'),
    lessons: [
      /* ================= سطح ۱: انواع و سیر بیماری ================= */
      {
        id: 'mc1', title: 'بیماری چیست؟', icon: '🗂️', items: [
          L('هفت گروه بیماری', `<b>disease</b> یعنی هر اختلال در کار طبیعی بدن. مرجع بیماری‌ها را در هفت گروه (گاهی هم‌پوشان) می‌گذارد:${fig('disease-types')}`),
          P('هر گروه را به نمونه‌اش وصل کن', [['infectious', 'میکروب و انگل'], ['degenerative', 'فرسایش و پیری، مثل arthritis'], ['hormonal', 'مثل diabetes mellitus'], ['metabolic', 'کمبود آنزیم، سوءتغذیه']]),
          M(`${e('<b>infectious disease</b>')} یعنی بیماری…`, ['عفونی؛ با میکروب یا انگل', 'تحلیل‌برنده و فرسایشی', 'هورمونی', 'مادرزادی'], 'عامل آن ریزجاندارها و انگل‌ها هستند.'),
          L('تحلیل‌برنده و ساختاری', `بیماری <b>degenerative</b> از فرسایش، پیری یا <b>trauma</b> (ضربه، آسیب) پدید می‌آید؛ مثل arthritis، مشکلات قلبی‌عروقی و emphysema. ناهنجاری‌های ساختاری مثل ناهنجاری <b>congenital</b> (مادرزادی)، افتادگی و فتق هم می‌توانند به تغییرات تحلیل‌برنده برسند.${pearl('trauma فقط ضربه جسمی نیست؛ زخم روانی را هم trauma می‌نامند.')}`),
          M(`${e('<b>trauma</b>')} یعنی…`, ['ضربه یا آسیب جسمی یا روانی', 'عفونت', 'تومور', 'کمبود آنزیم'], 'trauma = wound or injury.'),
          T('congenital یعنی بیماری‌ای که از زمان تولد وجود دارد.', true, 'congenital = مادرزادی.'),
          L('ایمنی، هورمون و روان', `${tbl([['گروه', 'توضیح'], [e('immune disorder'), 'نارسایی ایمنی، آلرژی، autoimmune disease (بدن به بافت خودش آنتی‌بادی می‌سازد)'], [e('hormonal disorder'), 'هورمون کم، زیاد یا بی‌اثر؛ مثل diabetes mellitus'], [e('mental disorder'), 'اختلال ذهن و سازگاری فرد با محیط'], [e('neoplasia'), 'رشد غیرطبیعی و بی‌مهار بافت']])}`),
          M(`در ${e('<b>autoimmune disease</b>')}…`, ['بدن به بافت خودش آنتی‌بادی می‌سازد', 'میکروب وارد بدن می‌شود', 'هورمون کم ساخته می‌شود', 'بافت فرسوده می‌شود'], 'auto- = خود.'),
          B('diabetes mellitus نمونه یک اختلال ___ است.', ['hormonal', 'infectious', 'congenital'], 'کمبود یا بی‌اثری هورمون انسولین.'),
          S('املای «بیماری» را بنویس', 'disease', 'dis- + ease (آسودگی).', 'dis…'),
          N('t2f:mc')
        ]
      },
      {
        id: 'mc2', title: 'علت و سیر بیماری', icon: '⏳', items: [
          L('حاد یا مزمن؟', `${fig('acute-chronic')}${vs(['acute', 'ناگهانی، شدید، کوتاه'], ['chronic', 'طولانی، پیشرفت آهسته (chron/o: زمان)'])}<b>subacute</b> میان این دو است. در بیماری مزمن، دوره بدتر شدن را <b>exacerbation</b> (تشدید) و دوره بهتر شدن را <b>remission</b> (فروکش) می‌نامند.`),
          M(`بیماری ${e('<b>acute</b>')}…`, ['ناگهانی، شدید و کوتاه است', 'طولانی و آهسته است', 'علت ناشناخته دارد', 'ناشی از درمان است'], 'acute = sudden, severe, short course.'),
          T('chronic از ریشه chron/o به معنی «زمان» آمده است.', true, 'بیماری مزمن زمان زیادی طول می‌کشد.'),
          P('هر واژه را به معنی‌اش وصل کن', [['exacerbation', 'تشدید بیماری'], ['remission', 'فروکش علائم'], ['subacute', 'میان حاد و مزمن'], ['chronic', 'طولانی و آهسته']]),
          L('علت بیماری', `<b>etiology</b> یعنی علت بیماری؛ گرچه بسیاری از بیماری‌ها چند علت با هم دارند.${tbl([['واژه', 'معنی'], [e('idiopathic'), 'علت ناشناخته (idi/o: خود، خودبه‌خود)'], [e('iatrogenic'), 'ناشی از درمان (iatr/o: پزشک)']])}${memo('idiopathic: «خودش آمد»؛ iatrogenic: «پزشک آورد».')}`),
          M(`${e('<b>etiology</b>')} یعنی…`, ['علت بیماری', 'پیش‌بینی پیامد بیماری', 'نام بیماری', 'درمان بیماری'], 'etiology = the cause of a disease.'),
          M('عارضه‌ای که از خود درمان (مثلاً یک دارو) پیدا شده است…', ['iatrogenic', 'idiopathic', 'congenital', 'chronic'], 'iatr/o (پزشک، درمان) + -genic (ایجادشده).'),
          M('بیماری‌ای که علتش پیدا نشده است…', ['idiopathic', 'iatrogenic', 'acute', 'systemic'], 'idi/o + path/o + -ic.'),
          B('دوره‌ای که علائم بیماری مزمن کم می‌شود ___ نام دارد.', ['remission', 'exacerbation', 'etiology'], 'remission = lessening of symptoms.'),
          S('املای «علت بیماری» را بنویس', 'etiology', 'eti/o (علت) + -logy.', 'etio…'),
          N('d2t:mc')
        ]
      },
      {
        id: 'mc3', title: 'نام بیماری از کجا می‌آید؟', icon: '🏷️', items: [
          L('مکان، شخص یا نشانه', `جعبه ۳-۱ طبق منابع مرجع، بیماری‌ها از راه‌های گوناگون نام می‌گیرند:${tbl([['از روی', 'نمونه'], ['مکان کشف', 'Lyme disease (شهر لایم)، Ebola، West Nile'], ['نام کاشف', 'Hodgkin disease، Crohn disease، Cooley anemia'], ['نشانه بیماری', 'tuberculosis: ضایعه‌های کوچکی به نام tubercle • sickle cell anemia: گلبول داسی'], ['رنگ', 'yellow fever، scarlet fever، rubella']])}${pearl('سازمان جهانی بهداشت (WHO) اکنون نام‌گذاری با نام افراد، مکان‌ها و جانوران را توصیه نمی‌کند؛ چنین نام‌هایی گاهی توهین‌آمیز یا نادرست‌اند.')}`),
          M('tuberculosis از روی چه چیزی نام گرفته است؟', ['ضایعه‌های کوچکی به نام tubercle در ریه', 'نام کاشف آن', 'شهری که در آن کشف شد', 'رنگ پوست بیمار'], 'نام‌گذاری بر پایه نشانه بیماری.'),
          T('Hodgkin disease از روی نام کسی که آن را توصیف کرد نام گرفته است.', true, 'مثل Crohn disease.'),
          L('نام‌های تصویری', `در <b>lupus erythematosus</b> (لوپوس، لاتین: گرگ) بثورات قرمز چهره ظاهری گرگ‌مانند می‌دهد. در <b>anthrax</b> پوستی، ضایعه‌ها سیاه می‌شوند (هم‌ریشه با anthracite، زغال‌سنگ). <b>bubonic plague</b> غدد لنفاوی دردناک و بزرگی به نام bubo می‌سازد.${memo('نام بیماری اغلب یک «عکس» از نشانه آن است: گرگ، زغال، داس.')}`),
          M('lupus در زبان لاتین یعنی…', ['گرگ', 'زغال', 'داس', 'زرد'], 'به خاطر بثورات قرمز گرگ‌مانند چهره.'),
          P('هر بیماری را به ریشه نامش وصل کن', [['Lyme disease', 'شهر محل کشف'], ['sickle cell anemia', 'گلبول قرمز داسی‌شکل'], ['scarlet fever', 'رنگ'], ['Crohn disease', 'نام توصیف‌کننده']]),
          L('تکنسین فوریت‌های پزشکی', `جعبه ۳-۲ مرجع: <b>emergency medical technician</b> (EMT) اولین کادر درمانی است که به صحنه تصادف یا حمله قلبی می‌رسد. او شرح حال می‌گیرد، معاینه می‌کند، بیمار را <b>stabilize</b> (پایدار) می‌کند و به مرکز درمانی می‌رساند؛ با backboard آسیب را بی‌حرکت می‌کند و با AED ایست قلبی را درمان می‌کند.`),
          M(`${e('<b>EMT</b>')} کیست؟`, ['تکنسین فوریت‌های پزشکی', 'متخصص بیماری‌های عفونی', 'پرستار اتاق عمل', 'داروساز'], 'emergency medical technician.'),
          L('مرور سطح «انواع و سیر بیماری»', recap(['هفت گروه: infectious، degenerative، neoplasia، immune، metabolic، hormonal، mental', 'acute ناگهانی و کوتاه • chronic طولانی • exacerbation تشدید • remission فروکش', 'etiology علت • idiopathic علت ناشناخته • iatrogenic ناشی از درمان • congenital مادرزادی • trauma آسیب', 'نام بیماری از مکان، کاشف، نشانه یا رنگ می‌آید؛ WHO نام افراد و مکان‌ها را توصیه نمی‌کند'])),
          B('بیماری‌ای که از زمان تولد هست ___ نامیده می‌شود.', ['congenital', 'chronic', 'iatrogenic'], 'congenital = present at birth.'),
          S('املای «حاد» را بنویس', 'acute', 'a-cute: «اِکیوت».', 'ac…'),
          N('t2f:mc')
        ]
      },
      /* ================= سطح ۲: میکروب‌ها ================= */
      {
        id: 'mc4', title: 'باکتری‌ها از روی شکل', icon: '🦠', items: [
          L('ریزجاندار و عامل بیماری', `<b>microorganism</b> جانداری است که بدون میکروسکوپ دیده نمی‌شود. هر عامل بیماری‌زا را <b>pathogen</b> می‌نامند و جانداری که روی یا درون جاندار دیگر (میزبان) زندگی می‌کند و به آن آسیب می‌زند <b>parasite</b> (انگل) است.${tbl([['واژه', 'معنی'], [e('microorganism'), 'ریزجاندار'], [e('pathogen'), 'عامل بیماری‌زا'], [e('pathogenic'), 'بیماری‌زا'], [e('parasite'), 'انگل']])}`),
          M(`${e('<b>parasite</b>')} یعنی…`, ['جانداری که به هزینه میزبان زندگی می‌کند و به آن آسیب می‌زند', 'هر میکروب بی‌خطر', 'یک نوع آنتی‌بیوتیک', 'سم باکتری'], 'parasite: grows on or in a host, causing damage.'),
          L('سه شکل اصلی باکتری', `<b>bacteria</b>، با مفرد bacterium، را از روی شکلشان نام می‌بریم:${fig('bacteria-shapes')}${tbl([['شکل', 'نام', 'بیماری نمونه'], ['گرد', e('cocci') + '؛ مفرد: ' + e('coccus'), 'pneumonia، septicemia'], ['میله‌ای', e('bacilli') + '؛ مفرد: ' + e('bacillus'), 'tuberculosis، tetanus'], ['میله خمیده', e('vibrios'), 'cholera'], ['مارپیچی', e('spirochetes'), 'syphilis، Lyme disease']])}`),
          M('باکتری میله‌ای را چه می‌نامند؟', ['bacillus', 'coccus', 'vibrio', 'spirochete'], 'جمع: bacilli.', null, F('bact-bacilli', 'باسیل‌ها زیر میکروسکوپ')),
          M('این باکتری‌ها میله‌های کوتاه و خمیده‌اند. نامشان…', ['vibrios', 'bacilli', 'cocci', 'spirochetes'], 'vibrio عامل cholera است.', null, F('bact-vibrio', 'زیر میکروسکوپ')),
          M('باکتری‌های پیچ‌پیچی کنار گلبول‌های قرمز…', ['spirochetes', 'vibrios', 'streptococci', 'bacilli'], 'spirochete با حرکت پیچشی جابه‌جا می‌شود.', null, F('bact-spiro', 'میان گلبول‌های قرمز')),
          P('هر شکل را به نامش وصل کن', [['گرد', 'cocci'], ['میله‌ای', 'bacilli'], ['میله خمیده', 'vibrios'], ['مارپیچی', 'spirochetes']]),
          T('مفرد bacilli می‌شود bacillus و مفرد cocci می‌شود coccus.', true, '-us → -i.'),
          B('هر عامل بیماری‌زا یک ___ است.', ['pathogen', 'parasite', 'toxin'], 'path/o + -gen.'),
          S('املای «ریزجاندار» را بنویس', 'microorganism', 'micro- (ریز) + organism.', 'micro…'),
          N('f2t:mc')
        ]
      },
      {
        id: 'mc5', title: 'خوشه یا زنجیر؟', icon: '🍇', items: [
          L('دو پیشوند برای چیدمان', `باکتری‌های گرد ممکن است کنار هم شکل خاصی بسازند (جدول ۳-۵):${vs(['staphylo-', 'خوشه انگوری: staphylococcus، کوکسی خوشه‌ای'], ['strepto-', 'زنجیره: streptococcus؛ و streptobacillus، باسیل زنجیره‌ای'])}${memo('staph مثل «استکان‌های روی هم» خوشه می‌شود؛ strep مثل «استرپ» (بند) زنجیر می‌شود.')}`),
          M('این تصویر کوکسی‌هایی است که زنجیره ساخته‌اند. نامشان…', ['streptococci', 'staphylococci', 'bacilli', 'vibrios'], 'strepto- = زنجیره.', null, F('bact-strepto', 'کوکسی‌های زنجیره‌ای')),
          M('کوکسی‌هایی که مثل خوشه انگور کنار هم‌اند…', ['staphylococci', 'streptococci', 'spirochetes', 'streptobacilli'], 'staphylo- = خوشه انگوری.', null, F('bact-staph', 'کوکسی‌های خوشه‌ای')),
          T('streptobacillus یک باکتری میله‌ای است که زنجیره می‌سازد.', true, 'strepto- (زنجیره) + bacillus (میله).'),
          L('رنگ‌آمیزی گرم', `<b>Gram stain</b> آزمون آزمایشگاهی است که باکتری‌ها را دو گروه می‌کند: <b>gram positive</b> (Gm+) که بنفش می‌ماند و <b>gram negative</b> (Gm−) که قرمز می‌شود. <b>acid-fast stain</b> (AF) بیشتر برای پیدا کردن میکروب سل (TB) است.${fig('gram-stain')}`),
          M(`باکتری ${e('<b>Gm−</b>')} در رنگ‌آمیزی گرم چه رنگی می‌شود؟`, ['قرمز (صورتی)', 'بنفش', 'سبز', 'بی‌رنگ'], 'gram negative = red.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['Gm+', 'گرم مثبت'], ['Gm−', 'گرم منفی'], ['AF', 'اسیدفست'], ['Staph', 'استافیلوکوک']]),
          B('برای پیدا کردن میکروب سل بیشتر از رنگ‌آمیزی ___ استفاده می‌شود.', ['acid-fast', 'Gram', 'gram negative'], 'acid-fast stain = AF.'),
          W('واژه‌ای بساز به معنی «کوکسی زنجیره‌ای»', ['strepto-', 'cocc/o', '-us'], ['staphylo-', 'bacill/i', 'vir/o'], 'strepto- + cocc/o + -us = streptococcus.'),
          S('املای «استافیلوکوک» را بنویس', 'staphylococcus', 'staphylo- + coccus.', 'staphylo…'),
          N('ab:mc')
        ]
      },
      {
        id: 'mc6', title: 'ویروس، قارچ، تک‌یاخته و کرم', icon: '🧫', items: [
          L('خانواده عامل‌های عفونت', `عفونت‌ها را ویروس‌ها، باکتری‌ها، قارچ‌ها، تک‌یاخته‌ها و کرم‌ها ایجاد می‌کنند (جعبه ۳-۳):${fig('microbe-family')}`),
          L('ویروس و باکتری‌های ریز', `<b>virus</b> عامل عفونی فوق‌ریزی است که <b>فقط درون سلول زنده</b> زندگی و تکثیر می‌کند؛ مثل عامل سرماخوردگی، hepatitis، influenza و AIDS. <b>chlamydia</b> و <b>rickettsia</b> باکتری‌های بسیار کوچکی‌اند که آن‌ها هم درون سلول رشد می‌کنند، ولی برخلاف ویروس‌ها به آنتی‌بیوتیک حساس‌اند.${vs(['virus', 'فقط درون سلول؛ آنتی‌بیوتیک اثر ندارد'], ['chlamydia • rickettsia', 'درون سلول؛ آنتی‌بیوتیک اثر دارد'])}`),
          M(`${e('<b>virus</b>')} چه ویژگی‌ای دارد؟`, ['فقط درون سلول زنده تکثیر می‌شود', 'میله‌ای شکل است', 'با رنگ گرم بنفش می‌شود', 'یک کرم انگلی است'], 'submicroscopic, lives only within living cells.'),
          T('chlamydia برخلاف ویروس‌ها به آنتی‌بیوتیک حساس است.', true, 'باکتری بسیار کوچک درون‌سلولی است.'),
          L('قارچ، تک‌یاخته و کرم', `${tbl([['عامل', 'توضیح', 'بیماری نمونه'], [e('fungus') + '؛ جمع: ' + e('fungi'), 'گیاه ساده بی‌سبزینه؛ مخمر و کپک (myc/o)', 'candidiasis، tinea'], [e('protozoon') + '؛ جمع: ' + e('protozoa'), 'جانور تک‌سلولی', 'malaria، dysentery'], [e('helminth'), 'کرم', 'roundworm، pinworm، hookworm']])}${tbl([['واژه', 'معنی'], [e('mycosis'), 'هر بیماری قارچی'], [e('mycotic'), 'قارچی'], [e('viremia'), 'ویروس در خون (‎-emia)'], [e('bacilluria'), 'باسیل در ادرار (‎-uria)']])}`),
          P('هر عامل را به توضیحش وصل کن', [['fungus', 'مخمر و کپک'], ['protozoon', 'جانور تک‌سلولی'], ['helminth', 'کرم'], ['virus', 'فقط درون سلول زنده']]),
          M(`${e('<b>mycosis</b>')} یعنی…`, ['هر بیماری قارچی', 'عفونت ویروسی', 'کرم روده', 'عفونت تک‌یاخته‌ای'], 'myc/o (قارچ) + -osis.'),
          L('علم هر میکروب', `با ${e('-logy')}: ${wb('bacteri/o', '-logy')} باکتری‌شناسی، ${wb('vir/o', '-logy')} ویروس‌شناسی و ${wb('myc/o', '-logy')} قارچ‌شناسی.`),
          L('مرور سطح «میکروب‌ها»', recap(['microorganism ریزجاندار • pathogen عامل بیماری‌زا • parasite انگل', 'cocci گرد • bacilli میله‌ای • vibrios خمیده • spirochetes مارپیچی', 'staphylo- خوشه و strepto- زنجیره • Gram stain: Gm+ بنفش، Gm− قرمز • AF برای TB', 'virus درون سلول • fungus (myc/o) • protozoon تک‌یاخته • helminth کرم • chlamydia و rickettsia باکتری ریز'])),
          W('واژه‌ای بساز به معنی «ویروس‌شناسی»', ['vir/o', '-logy'], ['myc/o', '-emia', 'bacteri/o'], 'vir/o + -logy = virology.'),
          S('املای «ویروس در خون» را بنویس', 'viremia', 'vir/o + -emia.', 'vir…'),
          N('m2r:mc')
        ]
      },
      /* ================= سطح ۳: گسترش عفونت ================= */
      {
        id: 'mc7', title: 'درهای ورود میکروب', icon: '🚪', items: [
          L('میکروب از کجا وارد می‌شود؟', `میکروب‌ها از چند راه، یا <b>portal of entry</b>، وارد بدن می‌شوند: پوست آسیب‌دیده، دستگاه تنفس، دستگاه گوارش و مجاری ادراری و تناسلی. ترشحات بدن فرد آلوده می‌تواند میکروب را از راه <b>هوا، غذا، آب یا تماس مستقیم</b> پخش کند.${fig('portals')}`),
          M('کدام یک از درهای ورود میکروب نیست؟', ['پوست سالم و بی‌زخم', 'پوست آسیب‌دیده', 'دستگاه تنفس', 'دستگاه گوارش'], 'پوست سالم یک سد دفاعی است.'),
          O('چهار راه انتقال را بچین (به ترتیب مرجع)', ['هوا', 'غذا', 'آب', 'تماس مستقیم'], 'air، food، water و direct contact.'),
          L('سم و واگیر', `بسیاری از میکروب‌ها با <b>toxin</b> (سم) که آزاد می‌کنند بیماری می‌سازند. بیماری‌ای که از فردی به فرد دیگر منتقل شود <b>communicable</b> (واگیردار) است.${pearl('بیمار با سرفه و عطسه قطره‌های تنفسی پخش می‌کند؛ برای همین در بیماری‌های واگیر تنفسی ماسک می‌زنیم.')}`),
          M(`${e('<b>communicable</b>')} یعنی…`, ['واگیردار؛ از فردی به فرد دیگر', 'مادرزادی', 'بی‌علت', 'همه‌بدنی'], 'communicable = capable of passing from one person to another.'),
          L('فلور طبیعی و فرصت‌طلب', `${vs(['normal flora', 'میکروب‌هایی که همیشه روی و درون بدن‌اند؛ معمولاً بی‌خطر و حتی مفید'], ['opportunistic', 'عفونتی که وقتی بدن ضعیف است پیدا می‌شود'])}فلور طبیعی هم اگر سد بدن آسیب ببیند یا ایمنی ضعیف شود، می‌تواند بیماری بسازد.`),
          T('normal flora همیشه بیماری‌زاست.', false, 'نادرست؛ معمولاً بی‌خطر و اغلب مفید است.'),
          M('عفونتی که فقط در بیمار با ایمنی ضعیف رخ می‌دهد…', ['opportunistic', 'congenital', 'endemic', 'idiopathic'], 'opportunistic = occurs because of a host’s poor condition.'),
          B('میکروب‌ها اغلب با ___ که آزاد می‌کنند بیماری می‌سازند.', ['toxins', 'antibodies', 'vaccines'], 'toxin = سم.'),
          S('املای «واگیردار» را بنویس', 'communicable', 'communic + -able.', 'commun…'),
          N('t2f:mc')
        ]
      },
      {
        id: 'mc8', title: 'بومی، همه‌گیر، جهانی', icon: '🌍', items: [
          L('شیوع در سه پله', `${fig('spread-scale')}${tbl([['واژه', 'معنی', 'ساختار'], [e('endemic'), 'کم ولی همیشگی در یک منطقه؛ مثل سرماخوردگی', 'en- (درون) + dem/o (مردم)'], [e('epidemic'), 'ناگهان، بسیاری از مردم یک منطقه', 'epi- (روی) + dem/o'], [e('pandemic'), 'در سراسر یک منطقه بزرگ یا جهان', 'pan- (همه) + dem/o']])}`),
          M('سرماخوردگی که همیشه به مقدار کم در جامعه هست…', ['endemic', 'epidemic', 'pandemic', 'iatrogenic'], 'endemic = continuously at a low level.'),
          M('بیماری‌ای که در سراسر جهان پخش شده…', ['pandemic', 'endemic', 'epidemic', 'systemic'], 'pan- = همه.'),
          P('هر بخش را به معنی‌اش وصل کن', [['dem/o', 'مردم'], ['pan-', 'همه'], ['epi-', 'روی'], ['en-', 'درون']]),
          T('epidemic یعنی بسیاری از مردم یک منطقه در یک زمان مبتلا شده‌اند.', true, 'افزایش ناگهانی در یک منطقه.'),
          L('محلی یا همه‌بدنی؟', `واژه <b>systemic</b> یعنی «مربوط به کل بدن». عفونتی که از یک زخم کوچک به خون برسد و همه بدن را درگیر کند، دیگر موضعی نیست؛ systemic شده است.${memo('system = کل دستگاه؛ systemic = کل بدن.')}`),
          M(`${e('<b>systemic</b>')} یعنی…`, ['مربوط به کل بدن', 'مربوط به یک منطقه جغرافیایی', 'مربوط به بیمارستان', 'مادرزادی'], 'systemic = pertaining to the whole body.'),
          B('بیماری‌ای که ناگهان بسیاری از مردم یک شهر را گرفته ___ است.', ['epidemic', 'endemic', 'pandemic'], 'epi- + dem/o + -ic.'),
          W('واژه‌ای بساز به معنی «همه‌گیری جهانی»', ['pan-', 'dem/o', '-ic'], ['epi-', 'en-', 'path/o'], 'pan- + dem/o + -ic = pandemic.'),
          S('املای «همه‌گیر» (در یک منطقه) را بنویس', 'epidemic', 'epi- + dem/o + -ic.', 'epi…'),
          N('f2t:mc')
        ]
      },
      {
        id: 'mc9', title: 'بیمارستان و میکروب مقاوم', icon: '🏥', items: [
          L('عفونت بیمارستانی', `عفونتی که بیمار در <b>بیمارستان</b> می‌گیرد <b>nosocomial</b> است (nos/o: بیماری؛ comial: بیمارستان). اگر میکروب به آنتی‌بیوتیک مقاوم باشد مشکل جدی است؛ مثل:${tbl([['اختصار', 'معنی'], [e('MRSA'), 'استافیلوکوک طلایی مقاوم به methicillin'], [e('VRSA'), 'استافیلوکوک طلایی مقاوم به vancomycin'], [e('MDR'), 'مقاوم به چند دارو']])}${fig('bact-staph', 'استافیلوکوک‌ها')}`),
          M(`${e('<b>nosocomial</b>')} یعنی…`, ['عفونتی که در بیمارستان گرفته شده', 'عفونتی که از مادر به جنین رسیده', 'بیماری بی‌علت', 'بیماری همیشگی یک منطقه'], 'nos/o + comial.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['MRSA', 'مقاوم به methicillin'], ['VRSA', 'مقاوم به vancomycin'], ['MDR', 'مقاوم به چند دارو'], ['FUO', 'تب با منشأ ناشناخته']]),
          L('ایستادن یا کشتن؟', `${vs(['bacteriostatic', 'رشد باکتری را متوقف می‌کند (stasis: توقف)'], ['bactericidal', 'باکتری را می‌کشد (‎-cide: کشنده)'])}${pearl('آنتی‌بیوگرام (C&S) نشان می‌دهد کدام آنتی‌بیوتیک باکتری بیمار را می‌کشد یا متوقف می‌کند.')}`),
          M(`داروی ${e('<b>bactericidal</b>')}…`, ['باکتری را می‌کشد', 'فقط رشد باکتری را متوقف می‌کند', 'ویروس را می‌کشد', 'تب را پایین می‌آورد'], 'bacteri/o + -cidal.'),
          T('bacteriostatic یعنی متوقف‌کننده رشد باکتری.', true, 'bacteri/o + -static.'),
          L('منشأ و گسترش در یک نگاه', `شش صفت که در پرونده می‌گویند بیماری از کجا آمده و چقدر گسترده است:${fig('origin-words')}`),
          M('عفونت زخم که پس از جراحی در بخش گرفته شده و با یک آنتی‌بیوتیک درمان نمی‌شود…', ['nosocomial و MDR', 'congenital و endemic', 'idiopathic و acute', 'opportunistic و pandemic'], 'بیمارستانی و مقاوم به چند دارو.'),
          L('مرور سطح «گسترش عفونت»', recap(['portal of entry: پوست آسیب‌دیده، تنفس، گوارش، ادراری و تناسلی • انتقال با هوا، غذا، آب، تماس', 'toxin سم • communicable واگیردار • normal flora فلور طبیعی • opportunistic فرصت‌طلب', 'endemic بومی • epidemic همه‌گیر • pandemic جهانی • systemic همه‌بدنی', 'nosocomial بیمارستانی: MRSA، VRSA، MDR • bacteriostatic متوقف‌کننده • bactericidal کشنده'])),
          B('دارویی که رشد باکتری را متوقف می‌کند ولی آن را نمی‌کشد ___ است.', ['bacteriostatic', 'bactericidal', 'antipyretic'], '-static = متوقف‌کننده.'),
          S('املای «عفونت بیمارستانی» (صفت) را بنویس', 'nosocomial', 'nos/o + comial.', 'noso…'),
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
    id: 'rs', sym: 'Path', name: 'پاسخ بدن به بیماری', short: 'پاسخ بدن', sub: 'التهاب و ادم، فاگوسیتوز و چرک، ایمنی ذاتی و اکتسابی، تومور خوش‌خیم و بدخیم، تغییرات رشد سلول، ضایعه‌ها، فتق و افتادگی',
    color: '#F76707', dark: '#C24E00', light: '#FFF4E6',
    levels: ['التهاب و دفاع', 'نئوپلاسم و رشد سلول', 'ضایعه‌ها و تغییرات ساختاری'],
    gens: EA.genIds('rs'),
    lessons: [
      /* ================= سطح ۱: التهاب و دفاع ================= */
      {
        id: 'rs1', title: 'چهار نشانه التهاب', icon: '🔥', items: [
          L('بدن به آسیب پاسخ می‌دهد', `پاسخ رایج بدن به عفونت و آسیب <b>inflammation</b> (التهاب) است: سلول‌های آسیب‌دیده مواد شیمیایی آزاد می‌کنند تا خون و مایع به بافت بیاید. نتیجه، چهار نشانه است:${fig('inflammation-signs')}`),
          O('چهار نشانه التهاب را به ترتیب مرجع بچین', ['heat', 'pain', 'redness', 'swelling'], 'گرما، درد، سرخی و تورم.'),
          P('هر نشانه را به معنی‌اش وصل کن', [['heat', 'گرما'], ['pain', 'درد'], ['redness', 'سرخی'], ['swelling', 'تورم']]),
          L('پسوند ‎-itis', `پسوند <b>‎-itis</b> یعنی التهاب:${tbl([['واژه', 'معنی'], [e('appendicitis'), 'التهاب آپاندیس'], [e('tonsillitis'), 'التهاب لوزه‌ها'], [e('cystitis'), 'التهاب مثانه']])}${memo('itis مثل «آتش»: هر جا بنشیند، آن‌جا داغ و قرمز و متورم است.')}`),
          M(`${e('<b>tonsillitis</b>')} یعنی…`, ['التهاب لوزه‌ها', 'برداشتن لوزه‌ها', 'تومور لوزه', 'بزرگی لوزه'], 'tonsill/o + -itis.'),
          T('تورم و سرخی جزو چهار نشانه التهاب‌اند.', true, 'به‌همراه گرما و درد.'),
          M('در کدام واژه پسوند التهاب آمده است؟', ['appendicitis', 'appendectomy', 'hepatomegaly', 'lipoma'], '-itis = التهاب.'),
          B('التهاب آپاندیس را ___ می‌نامند.', ['appendicitis', 'appendectomy', 'tonsillitis'], 'appendic/o + -itis.'),
          W('واژه‌ای بساز به معنی «التهاب لوزه‌ها»', ['tonsill/o', '-itis'], ['-ectomy', 'appendic/o', '-oma'], 'tonsill/o + -itis = tonsillitis.'),
          S('املای «التهاب» را بنویس', 'inflammation', 'in- + flamm (شعله) + -ation.', 'inflam…'),
          N('t2f:rs')
        ]
      },
      {
        id: 'rs2', title: 'ادم و مایع', icon: '💧', items: [
          L('ورم یعنی مایع در بافت', `التهاب یکی از علت‌های <b>edema</b> است: ورم یا جمع شدن مایع در بافت. نارسایی قلب، انسداد مسیر مایع و به‌هم خوردن ترکیب مایعات بدن هم ادم می‌سازند. صفت آن <b>edematous</b> (ورم‌کرده) است.${fig(['foot-normal', 'foot-edema'], ['پای طبیعی: رگ‌ها و تاندون‌ها پیداست', 'پای ادم‌دار: جزئیات سطح پنهان شده'])}`),
          M('در کدام پا ادم دیده می‌شود؟', ['پای B: ورم‌کرده و بی‌جزئیات', 'پای A: رگ‌ها و تاندون‌ها پیداست', 'هر دو پا', 'هیچ‌کدام'], 'ورم جزئیات سطح پوست را می‌پوشاند.', null, F(['foot-normal', 'foot-edema'], ['A', 'B'])),
          M(`${e('<b>edematous</b>')} یعنی…`, ['ورم‌کرده', 'کبود', 'قرمز', 'سفت'], 'صفت edema.'),
          T('نارسایی قلب هم می‌تواند ادم بسازد.', true, 'التهاب تنها علت ادم نیست.'),
          L('مایع کجا جمع شده؟', `${fig('fluid-places')}${tbl([['واژه', 'معنی'], [e('edema'), 'مایع در بافت؛ ورم'], [e('effusion'), 'فرار مایع به یک حفره، مثل پرده جنب'], [e('ascites'), 'مایع در حفره صفاق (شکم)'], [e('exudate'), 'ماده‌ای که پس از آسیب از رگ‌ها بیرون می‌زند']])}`),
          P('هر واژه را به معنی‌اش وصل کن', [['edema', 'مایع در بافت'], ['effusion', 'مایع در یک حفره'], ['ascites', 'مایع در شکم'], ['exudate', 'تراوش از رگ']]),
          M(`${e('<b>ascites</b>')} یعنی…`, ['تجمع مایع در حفره صفاق (شکم)', 'مایع در پرده جنب', 'ورم پا', 'خون در شکم'], 'ascites = fluid in the peritoneal cavity.'),
          B('فرار مایع به یک حفره بدن ___ نام دارد.', ['effusion', 'ascites', 'exudate'], 'effusion = escape of fluid into a cavity.'),
          S('املای «ادم» را بنویس', 'edema', 'e-de-ma: «ایدیما».', 'ed…'),
          N('d2t:rs')
        ]
      },
      {
        id: 'rs3', title: 'بلعیدن میکروب و چرک', icon: '🦠', items: [
          L('سلول‌هایی که می‌خورند', `بدن با <b>phagocytosis</b> میکروب‌ها، سلول‌های آسیب‌دیده و زباله‌ها را پاک می‌کند: برخی گلبول‌های سفید آن‌ها را <b>می‌بلعند</b> و درون خود نابود می‌کنند. ${wb('phag/o', 'cyt/o', '-osis')} یعنی «حالتِ سلولِ خورنده». خود سلول خورنده <b>phagocyte</b> است.${fig('phago-img', '', 'A: گلبول سفید از دیواره مویرگ رد می‌شود تا باکتری را ببلعد. B: باکتری در کیسه (vesicle) با آنزیم‌های لیزوزوم نابود می‌شود.')}`),
          M(`${e('<b>phagocytosis</b>')} یعنی…`, ['بلعیدن و نابود کردن میکروب به دست سلول', 'تقسیم سلول', 'مرگ سلول', 'ساختن آنتی‌بادی'], 'phag/o (خوردن) + cyt/o (سلول) + -osis.'),
          O('مراحل فاگوسیتوز را بچین', ['بلعیدن باکتری', 'زندانی شدن در کیسه', 'نابودی با آنزیم لیزوزوم'], 'engulf → vesicle → digest.'),
          L('چرک', `باقی‌مانده فاگوسیتوز، مخلوط مایع و گلبول‌های سفید است که <b>pus</b> (چرک) نام دارد؛ ریشه آن py/o است.${fig('phago-steps')}${tbl([['واژه', 'معنی'], [e('purulent'), 'چرکی، دارای چرک'], [e('suppuration'), 'چرک کردن'], [e('abscess'), 'چرک جمع‌شده در یک جا'], [e('cellulitis'), 'التهاب پخش‌شونده بافت']])}`),
          M(`${e('<b>abscess</b>')} یعنی…`, ['چرک جمع‌شده در یک جا', 'التهاب پخش‌شده در بافت', 'ورم پا', 'سم باکتری'], 'abscess = a localized collection of pus.'),
          P('هر واژه را به معنی‌اش وصل کن', [['pus', 'چرک'], ['purulent', 'چرکی'], ['suppuration', 'چرک کردن'], ['cellulitis', 'التهاب پخش‌شونده']]),
          L('وقتی میکروب به خون می‌رسد', `${vs(['sepsis', 'میکروب یا سمش در خون یا بافت‌ها؛ صفت: septic'], ['septicemia', 'باکتری بیماری‌زا در خون؛ «مسمومیت خون»'])}${pearl('بیمار septic تب، ضربان تند و افت فشار دارد؛ یک فوریت پزشکی است.')}`),
          T('pus از مایع و گلبول‌های سفید ساخته می‌شود.', true, 'باقی‌مانده فاگوسیتوز.'),
          L('مرور «التهاب و چرک»', recap(['inflammation: heat، pain، redness، swelling • پسوند ‎-itis', 'edema مایع در بافت • effusion در حفره • ascites در شکم • exudate تراوش از رگ', 'phagocytosis بلعیدن میکروب • phagocyte سلول خورنده • pus چرک', 'abscess چرک جمع‌شده • cellulitis التهاب پخش‌شونده • sepsis و septicemia میکروب در خون'])),
          B('گلبول سفیدی که میکروب را می‌بلعد یک ___ است.', ['phagocyte', 'exudate', 'abscess'], 'phag/o + -cyte.'),
          S('املای «سلول خورنده» را بنویس', 'phagocyte', 'phag/o + -cyte.', 'phago…'),
          N('m2r:rs')
        ]
      },
      /* ================= سطح ۲: نئوپلاسم و رشد سلول ================= */
      {
        id: 'rs4', title: 'دفاع ذاتی و اکتسابی', icon: '🛡️', items: [
          L('ایمنی یعنی همه دفاع‌ها', `<b>immunity</b> یعنی همه دفاع‌های بدن در برابر بیماری عفونی. این دفاع‌ها دو گروه‌اند: <b>innate</b> (ذاتی) و <b>adaptive</b> (اکتسابی).${fig('immunity-types')}`),
          M(`${e('<b>innate immunity</b>')} چیست؟`, ['دفاع مادرزادی که به برخورد قبلی با میکروب نیاز ندارد', 'ایمنی که پس از واکسن ساخته می‌شود', 'آنتی‌بادی ضد یک بیماری خاص', 'حساسیت به گرده'], 'innate = inborn.'),
          P('هر دفاع را به توضیحش وصل کن', [['پوست سالم', 'سد مکانیکی ذاتی'], ['اسید معده', 'ترشح دفاعی ذاتی'], ['inflammation', 'پاسخ به آسیب؛ ذاتی'], ['phagocytosis', 'بلعیدن میکروب؛ ذاتی']]),
          L('ایمنی اکتسابی', `ایمنی <b>adaptive</b>، یا acquired، در طول زندگی و پس از برخورد با میکروب یا با <b>vaccine</b> ساخته می‌شود و <b>اختصاصی</b> است. سلول‌های این دستگاه مهاجم را می‌شناسند و با حمله مستقیم یا ساختن <b>antibody</b> نابودش می‌کنند. همین دستگاه سلول‌های سرطانی را هم پایش می‌کند.`),
          M(`${e('<b>antibody</b>')} یعنی…`, ['پادتن؛ پروتئینی که مهاجم را بی‌اثر می‌کند', 'میکروب بیماری‌زا', 'گلبول قرمز', 'سم باکتری'], 'anti- (ضد) + body.'),
          T('ایمنی اکتسابی اختصاصی است؛ یعنی برای یک بیماری خاص ساخته می‌شود.', true, 'specific for particular diseases.'),
          L('وقتی ایمنی اشتباه می‌کند', `${vs(['allergy', 'واکنش بیش از حد به ماده‌ای بی‌خطر'], ['autoimmune disease', 'واکنش به بافت‌های خود بدن'])}${memo('auto = خود؛ autoimmune یعنی ایمنی علیه «خود».')}`),
          M('ایمنی که به گرده گل واکنش شدید نشان می‌دهد…', ['allergy', 'autoimmune disease', 'innate immunity', 'vaccine'], 'allergy = overreaction to a harmless substance.'),
          B('دفاعی که با برخورد با میکروب یا واکسن ساخته می‌شود، ایمنی ___ است.', ['adaptive', 'innate', 'normal flora'], 'adaptive = acquired.'),
          S('املای «ایمنی» را بنویس', 'immunity', 'immun/o + -ity.', 'immun…'),
          N('t2f:rs')
        ]
      },
      {
        id: 'rs5', title: 'خوش‌خیم یا بدخیم؟', icon: '⚖️', items: [
          L('رشد نو و بی‌مهار', `<b>neoplasia</b> یعنی رشد غیرطبیعی و بی‌مهار بافت (neo-: نو + plasm: شکل‌گیری) و خود توده را <b>neoplasm</b> یا tumor می‌نامند. ریشه onc/o و پسوند ‎-oma هم به نئوپلاسم اشاره دارند.${fig('neoplasm-tree')}`),
          M(`${e('<b>neoplasm</b>')} یعنی…`, ['تومور؛ رشد غیرطبیعی که خوش‌خیم یا بدخیم است', 'فقط تومور بدخیم', 'التهاب بافت', 'کیسه پر از مایع'], 'neo- + -plasm.'),
          L('دو گروه', `${vs(['benign', 'پخش نمی‌شود؛ ولی ممکن است در همان‌جا آسیب بزند'], ['malignant', 'مهاجم؛ به بافت‌های دیگر گسترش می‌یابد (metastasis)؛ همان cancer'])}<b>metastasis</b> (meta-: تغییر + stasis: ایستادن) یعنی گسترش از یک جای بدن به جای دیگر؛ فعل آن metastasize و صفتش metastatic است.`),
          P('هر واژه را به معنی‌اش وصل کن', [['benign', 'خوش‌خیم'], ['malignant', 'بدخیم'], ['metastasis', 'گسترش به جای دیگر'], ['neoplasia', 'رشد نو و بی‌مهار']]),
          M(`${e('<b>metastasis</b>')} یعنی…`, ['گسترش سرطان از یک جای بدن به جای دیگر', 'تومور خوش‌خیم', 'التهاب', 'برداشتن تومور'], 'meta- (تغییر) + stasis (ایستادن).'),
          T('تومور benign به بافت‌های دیگر متاستاز می‌دهد.', false, 'نادرست؛ تومور خوش‌خیم پخش نمی‌شود.'),
          M('صفت metastasis کدام است؟', ['metastatic', 'metastasize', 'metastases', 'metaplastic'], 'metastasize فعل است و metastases جمع.'),
          B('تومور مهاجمی که پخش می‌شود ___ است.', ['malignant', 'benign', 'cystic'], 'malignant = cancerous.'),
          W('واژه‌ای بساز به معنی «رشد نو»', ['neo-', '-plasm'], ['meta-', '-oma', 'onc/o'], 'neo- + -plasm = neoplasm.'),
          S('املای «بدخیم» را بنویس', 'malignant', 'mal- (بد) + ignant؛ g خوانده می‌شود: «مَلیگنَنت».', 'malig…'),
          N('f2t:rs')
        ]
      },
      {
        id: 'rs6', title: 'نام سرطان‌ها و کیست', icon: '🏷️', items: [
          L('سرطان از کدام بافت؟', `${tbl([['نام', 'بافت', 'نکته'], [e('carcinoma'), 'بافت پوششی (epithelium)', 'carcino: خرچنگ'], [e('adenocarcinoma'), 'بافت پوششی غده‌ای', 'aden/o: غده'], [e('melanoma'), 'سلول‌های رنگدانه‌دار (melanocytes)', 'melan/o: تیره'], [e('sarcoma'), 'بافت همبند یا ماهیچه', 'sarco: گوشت']])}${memo('carcinoma پوشش است و sarcoma گوشت؛ c مثل «کاور» و s مثل «سفت».')}`),
          M(`${e('<b>sarcoma</b>')} سرطان کدام بافت است؟`, ['بافت همبند یا ماهیچه', 'بافت پوششی', 'غده', 'سلول رنگدانه‌دار'], 'sarc/o = گوشت، بافت همبند.'),
          M(`${e('<b>adenocarcinoma</b>')} یعنی…`, ['سرطان بافت پوششی غده‌ای', 'تومور خوش‌خیم غده', 'التهاب غده', 'سرطان ماهیچه'], 'aden/o + carcin/o + -oma.'),
          P('هر سرطان را به بافتش وصل کن', [['carcinoma', 'بافت پوششی'], ['sarcoma', 'بافت همبند'], ['melanoma', 'سلول رنگدانه‌دار'], ['adenocarcinoma', 'پوشش غده‌ای']]),
          L('درجا و کیست', `<b>in situ</b> یعنی «در جای خود»: توموری که هنوز تهاجم و پخش نکرده، مثل <b>carcinoma in situ</b> (CIS). <b>cyst</b> کیسه‌ای پر از مایع یا ماده نیمه‌جامد است که غیرطبیعی است ولی سرطانی نیست؛ اغلب با بدخیمی اشتباه می‌شود. محل‌های رایج: پستان، غدد چربی پوست و تخمدان؛ علت: عفونت یا بسته شدن یک مجرا.`),
          M(`${e('<b>CIS</b>')} یعنی…`, ['کارسینوم درجا؛ هنوز پخش نشده', 'سرطان پخش‌شده', 'کیست عفونی', 'تومور خوش‌خیم'], 'carcinoma in situ.'),
          T('cyst همیشه سرطانی است.', false, 'نادرست؛ غیرطبیعی است ولی سرطانی نیست.'),
          L('مرور سطح «نئوپلاسم و ایمنی»', recap(['immunity: innate ذاتی است (پوست، اسید معده، التهاب، فاگوسیتوز) و adaptive اکتسابی (واکسن و پادتن)', 'allergy واکنش بیش از حد • autoimmune disease واکنش به بافت خود', 'neoplasm = tumor • benign پخش نمی‌شود • malignant مهاجم و metastasis', 'carcinoma پوششی • adenocarcinoma غده‌ای • melanoma رنگدانه‌ای • sarcoma همبند • cyst سرطانی نیست'])),
          B('سرطان سلول‌های رنگدانه‌دار پوست ___ است.', ['melanoma', 'lipoma', 'sarcoma'], 'melan/o + -oma.'),
          S('املای «کیست» را بنویس', 'cyst', 'cyst/o: کیسه.', 'cy…'),
          N('m2r:rs')
        ]
      },
      /* ================= سطح ۳: ضایعه‌ها و تغییرات ساختاری ================= */
      {
        id: 'rs7', title: 'سلول بیشتر، بزرگ‌تر یا متفاوت', icon: '🔬', items: [
          L('پنج تغییر رشد', `${fig('growth-changes')}${tbl([['واژه', 'معنی'], [e('hyperplasia'), 'رشد بیش از حد سلول‌های طبیعی با آرایش طبیعی'], [e('hypertrophy'), 'بزرگ شدن اندام بدون افزایش تعداد سلول'], [e('metaplasia'), 'تبدیل سلول به شکلی که برای آن بافت طبیعی نیست'], [e('dysplasia'), 'رشد نابه‌هنجار بافت'], [e('anaplasia'), 'نبود تمایز طبیعی؛ ویژگی سلول سرطانی']])}`),
          M(`${e('<b>hypertrophy</b>')} یعنی…`, ['بزرگ شدن اندام بدون افزایش تعداد سلول', 'افزایش تعداد سلول‌ها', 'تبدیل نوع سلول', 'سلول بی‌تمایز'], 'hyper- + -trophy (رشد، تغذیه).'),
          L('دو واژه که قاطی می‌شوند', `${vs(['hyperplasia', 'سلول «بیشتر»؛ plas: شکل‌گیری'], ['hypertrophy', 'سلول «بزرگ‌تر»؛ trophy: رشد، تغذیه'])}${pearl('ماهیچه ورزشکار با تمرین hypertrophy پیدا می‌کند: هر رشته بزرگ‌تر می‌شود، نه بیشتر.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['hyperplasia', 'سلول بیشتر'], ['hypertrophy', 'سلول بزرگ‌تر'], ['metaplasia', 'تبدیل به نوع دیگر'], ['anaplasia', 'بی‌تمایز']]),
          M(`${e('<b>metaplasia</b>')} یعنی…`, ['تبدیل سلول به شکلی که برای آن بافت طبیعی نیست', 'مرگ سلول', 'رشد بیش از حد طبیعی', 'بزرگ شدن سلول'], 'meta- = تغییر.'),
          T('anaplasia ویژگی سلول‌های سرطانی است.', true, 'Lack of normal differentiation.'),
          M('بزرگی قلب ورزشکار بدون افزایش تعداد سلول‌های ماهیچه…', ['hypertrophy', 'hyperplasia', 'anaplasia', 'metaplasia'], 'افزایش اندازه، نه تعداد.'),
          B('رشد بیش از حد سلول‌های طبیعی با آرایش طبیعی ___ است.', ['hyperplasia', 'hypertrophy', 'dysplasia'], 'hyper- + -plasia.'),
          W('واژه‌ای بساز به معنی «بی‌تمایزی سلول»', ['ana-', '-plasia'], ['meta-', 'hyper-', '-trophy'], 'ana- + -plasia = anaplasia.'),
          S('املای «افزایش تعداد سلول» را بنویس', 'hyperplasia', 'hyper- + -plasia.', 'hyper…'),
          N('d2t:rs')
        ]
      },
      {
        id: 'rs8', title: 'ضایعه و مرگ بافت', icon: '🩹', items: [
          L('ضایعه چیست؟', `<b>lesion</b> یعنی ناحیه مشخصی از بافت آسیب‌دیده؛ یک زخم یا آسیب. فرسایش، پیری یا trauma ممکن است به lesion و حتی <b>necrosis</b> برسد: مرگ بافت، از ریشه necr/o. صفت necrosis، necrotic است.${fig('tissue-lesions')}`),
          M(`${e('<b>lesion</b>')} یعنی…`, ['ناحیه مشخصی از بافت آسیب‌دیده', 'تومور بدخیم', 'مایع در بافت', 'سم باکتری'], 'lesion = a distinct area of damaged tissue.'),
          L('مرگ بافت از کم‌خونی', `<b>gangrene</b> مرگ بافت است، معمولاً به علت قطع خون‌رسانی؛ ممکن است با عفونت باکتریایی و پوسیدگی همراه شود.${vs(['necrosis', 'هر نوع مرگ بافت'], ['gangrene', 'مرگ بافت از کم‌خونی، اغلب با عفونت'])}`),
          M(`${e('<b>gangrene</b>')} معمولاً از چه رخ می‌دهد؟`, ['قطع خون‌رسانی به بافت', 'رشد بیش از حد سلول', 'تجمع مایع در بافت', 'واکنش آلرژیک'], 'Death of tissue, usually caused by lack of blood supply.'),
          L('راه، شکاف و چسبندگی', `${tbl([['واژه', 'معنی'], [e('fistula'), 'راه غیرطبیعی بین دو اندام یا از اندام به سطح بدن'], [e('fissure'), 'شیار یا شکاف'], [e('adhesion'), 'به هم چسبیدن دو سطح که باید جدا باشند'], [e('induration'), 'سفتی؛ نقطه سفت غیرطبیعی'], [e('polyp'), 'توده‌ای که با پایه باریک چسبیده است']])}`),
          P('هر واژه را به معنی‌اش وصل کن', [['fistula', 'راه غیرطبیعی'], ['fissure', 'شکاف'], ['adhesion', 'چسبندگی'], ['induration', 'سفتی موضعی']]),
          T('fistula یک راه غیرطبیعی بین دو اندام است.', true, 'An abnormal passage between two organs.'),
          M('پس از جراحی شکم، روده‌ها به هم چسبیده‌اند. نامش…', ['adhesion', 'fistula', 'fissure', 'polyp'], 'adhesion = uniting of two surfaces.'),
          B('صفت necrosis واژه ___ است.', ['necrotic', 'necrosis', 'nephrotic'], 'necrosis → necrotic.'),
          S('املای «ضایعه» را بنویس', 'lesion', 'le-sion: «لیژن».', 'les…'),
          N('t2f:rs')
        ]
      },
      {
        id: 'rs9', title: 'فتق و افتادگی', icon: '🎈', items: [
          L('بیرون‌زدن یا پایین افتادن', `${fig('hernia-prolapse')}${vs(['hernia', 'بیرون‌زدن اندام از یک سوراخ غیرطبیعی؛ در زبان عامه rupture'], ['prolapse • ptosis', 'افتادن یا پایین آمدن اندام از جای طبیعی'])}`),
          M(`${e('<b>hernia</b>')} یعنی…`, ['بیرون‌زدن اندام از یک سوراخ غیرطبیعی', 'افتادن اندام به پایین', 'پارگی رگ', 'تومور بدخیم'], 'Protrusion of an organ through an abnormal opening.'),
          L('فتق هیاتال', `در <b>hiatal hernia</b> بخشی از معده از سوراخ مری در دیافراگم (esophageal hiatus) به قفسه سینه می‌رود و محل اتصال مری و معده بالاتر می‌آید.${fig(['stomach-normal', 'hiatal-img'], ['معده طبیعی', 'فتق هیاتال'])}`),
          M('در تصویر B، بخشی از معده از دیافراگم بالا آمده است. نامش…', ['hiatal hernia', 'gastrocele ران', 'prolapse رحم', 'gastrectasia'], 'معده از esophageal hiatus بالا رفته است.', null, F(['stomach-normal', 'hiatal-img'], ['A', 'B'])),
          T('در hiatal hernia بخشی از معده به حفره قفسه سینه می‌رود.', true, 'از سوراخ مری در دیافراگم.'),
          L('افتادگی', `<b>prolapse</b> و <b>ptosis</b> هر دو یعنی افتادن یا پایین آمدن یک اندام: blepharoptosis افتادگی پلک و splenoptosis افتادگی طحال. جراح با یک <b>fixation</b> اندام افتاده (مثل مثانه) را سر جایش ثابت می‌کند.${fig('ptosis-eyes', 'پلک طبیعی و پلک افتاده')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['hernia', 'بیرون‌زدن از سوراخ'], ['prolapse', 'پایین افتادن اندام'], ['-cele', 'فتق، برآمدگی'], ['blepharoptosis', 'افتادگی پلک']]),
          M(`${e('<b>prolapse</b>')} هم‌معنی کدام است؟`, ['ptosis', 'stenosis', 'necrosis', 'sclerosis'], 'prolapse = ptosis.'),
          L('مرور سطح «ضایعه‌ها و تغییرات ساختاری»', recap(['hyperplasia سلول بیشتر • hypertrophy سلول بزرگ‌تر • metaplasia تبدیل • anaplasia بی‌تمایز', 'lesion ضایعه • necrosis مرگ بافت • gangrene مرگ از کم‌خونی', 'fistula راه غیرطبیعی • fissure شکاف • adhesion چسبندگی • induration سفتی • polyp توده پایه‌دار', 'hernia بیرون‌زدن از سوراخ • hiatal hernia معده از دیافراگم • prolapse و ptosis افتادگی'])),
          B('بیرون‌زدن معده از دیافراگم ___ نام دارد.', ['hiatal hernia', 'prolapse', 'gastrectasia'], 'از esophageal hiatus.'),
          S('املای «افتادگی اندام» (واژه کلیدی) را بنویس', 'prolapse', 'pro- (پیش، جلو) + lapse (افتادن).', 'pro…'),
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
    id: 'dx', sym: 'Dx', name: 'معاینه و تشخیص', short: 'معاینه', sub: 'شرح حال و اختصارهایش، نگاه و لمس و دق و سمع، علائم حیاتی و فشار خون، نشانه‌های بالینی، ابزارهای ‎-scope و تصویربرداری',
    color: '#1098AD', dark: '#0B7285', light: '#E3FAFC',
    levels: ['شرح حال و معاینه', 'علائم حیاتی و نشانه‌ها', 'ابزارها و تصویربرداری'],
    gens: EA.genIds('dx'),
    lessons: [
      /* ================= سطح ۱: شرح حال و معاینه ================= */
      {
        id: 'dx1', title: 'نشانه یا علامت؟', icon: '🔎', items: [
          L('تشخیص از کجا شروع می‌شود؟', `<b>diagnosis</b> (Dx) یعنی شناختن ماهیت و علت بیماری. تشخیص با <b>history</b> (Hx، شرح حال) آغاز می‌شود: شرح بیماری فعلی، سابقه پزشکی گذشته و سابقه خانوادگی و اجتماعی. سپس <b>physical examination</b> (PE) می‌آید.${tbl([['اختصار', 'معنی'], [e('CC'), 'chief complaint: شکایت اصلی بیمار'], [e('HPI'), 'شرح بیماری فعلی'], [e('PMH'), 'سابقه پزشکی گذشته'], [e('ROS'), 'مرور دستگاه‌های بدن'], [e('H&P'), 'شرح حال و معاینه']])}`),
          P('هر اختصار را به معنی‌اش وصل کن', [['Hx', 'شرح حال'], ['CC', 'شکایت اصلی'], ['PMH', 'سابقه پزشکی گذشته'], ['PE', 'معاینه فیزیکی']]),
          L('دو نوع شاهد بیماری', `${fig('sign-symptom')}${vs(['sign', 'عینی؛ دیده یا اندازه گرفته می‌شود: تب، بثورات، فشار بالا'], ['symptom', 'ذهنی؛ بیمار حس می‌کند: درد، سرگیجه، ضعف'])}<b>syndrome</b> گروهی از نشانه‌ها و علامت‌هاست که با هم یک بیماری را مشخص می‌کنند.`),
          M('تب ۳۹ درجه که با دماسنج اندازه گرفته شده یک… است.', ['sign', 'symptom', 'syndrome', 'prognosis'], 'sign = objective evidence.'),
          M('سرگیجه‌ای که بیمار از آن شکایت می‌کند یک… است.', ['symptom', 'sign', 'lesion', 'etiology'], 'symptom = subjective evidence.'),
          T('syndrome یعنی مجموعه‌ای از نشانه‌ها و علامت‌ها که با هم یک بیماری را مشخص می‌کنند.', true, 'A group of signs and symptoms.'),
          M(`${e('<b>diagnosis</b>')} یعنی…`, ['شناختن علت و ماهیت بیماری', 'پیش‌بینی پیامد بیماری', 'درمان بیماری', 'پیشگیری از بیماری'], 'dia- (از میان) + gnosis (شناخت).'),
          B('مرور همه دستگاه‌های بدن در معاینه با اختصار ___ نوشته می‌شود.', ['ROS', 'HPI', 'CC'], 'review of systems.'),
          S('املای «علامت» (شکایت بیمار) را بنویس', 'symptom', 'sym-p-tom؛ p خوانده نمی‌شود.', 'symp…'),
          N('ab:dx')
        ]
      },
      {
        id: 'dx2', title: 'نگاه، لمس، دق، سمع', icon: '🖐️', items: [
          L('چهار روش معاینه', `در معاینه فیزیکی، پزشک چهار روش را به ترتیب به کار می‌برد (IPPA):${fig('ippa')}`),
          O('چهار روش معاینه را به ترتیب IPPA بچین', ['inspection', 'palpation', 'percussion', 'auscultation'], 'Inspection، Palpation، Percussion، Auscultation.'),
          L('لمس و دق', `<b>palpation</b>: گذاشتن دست یا انگشت روی سطح بدن برای سنجش بافت، دما، حرکت و قوام. <b>percussion</b>: ضربه آرام ولی تند به بدن برای سنجیدن بافت زیرین از روی صدا.${fig(['palpation-img', 'percussion-img'], ['palpation • لمس', 'percussion • دق'])}`),
          M('در این تصویر، معاینه‌گر با دست روی شکم بیمار بافت را می‌سنجد. نام روش…', ['palpation', 'percussion', 'auscultation', 'inspection'], 'palpation = touching with hands or fingers.', null, F('palpation-img', 'معاینه شکم')),
          M('معاینه‌گر روی انگشت خود که بر پشت بیمار است ضربه می‌زند و به صدا گوش می‌دهد. نام روش…', ['percussion', 'palpation', 'inspection', 'auscultation'], 'percussion = tapping the body.', null, F('percussion-img', 'معاینه پشت')),
          L('سمع', `<b>auscultation</b> یعنی شنیدن صداهای درون بدن، معمولاً قفسه سینه یا شکم، با <b>stethoscope</b> (steth/o: سینه).${fig('auscultation-img', 'شنیدن صداهای قلب و ریه با گوشی')}${pearl('در پرونده «BS» یعنی صداهای روده (bowel sounds) یا صداهای تنفس (breath sounds)؛ هر دو با auscultation شنیده می‌شوند.')}`),
          M('شنیدن صدای قلب با گوشی پزشکی…', ['auscultation', 'percussion', 'palpation', 'inspection'], 'auscultation = listening for sounds within the body.', null, F('auscultation-img', 'گوشی روی سینه')),
          P('هر روش را به معنی‌اش وصل کن', [['inspection', 'نگاه کردن'], ['palpation', 'لمس'], ['percussion', 'ضربه زدن'], ['auscultation', 'شنیدن']]),
          T('stethoscope از ریشه steth/o به معنی «سینه» ساخته شده است.', true, 'ابزار شنیدن صداهای قفسه سینه.'),
          S('املای «سمع» (شنیدن صداهای بدن) را بنویس', 'auscultation', 'aus-cul-ta-tion.', 'auscul…'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx3', title: 'زبان شرح حال', icon: '📝', items: [
          L('اختصارهای پرونده', `${tbl([['اختصار', 'معنی'], [e('c/o'), 'شکایت دارد از'], [e('h/o'), 'سابقه'], [e('y/o'), 'ساله'], [e('pt'), 'بیمار'], [e('w/o'), 'بدون'], [e('R/O'), 'رد شود (احتمالی که باید بررسی شود)']])}${pearl('«R/O fracture» یعنی پزشک به شکستگی شک دارد و باید با عکس رد یا تأیید شود.')}`),
          P('هر اختصار را به معنی‌اش وصل کن', [['c/o', 'شکایت دارد از'], ['h/o', 'سابقه'], ['y/o', 'ساله'], ['w/o', 'بدون']]),
          M(`«${e('R/O')} fracture» یعنی…`, ['احتمال شکستگی که باید بررسی شود', 'شکستگی قطعی', 'شکستگی جوش خورده', 'بدون شکستگی'], 'R/O = rule out.'),
          L('یافته‌های طبیعی', `${tbl([['اختصار', 'معنی'], [e('NAD'), 'بدون ناراحتی آشکار'], [e('WNL'), 'در محدوده طبیعی'], [e('NKDA'), 'حساسیت دارویی شناخته‌شده ندارد'], [e('HEENT'), 'سر، چشم، گوش، بینی و گلو'], [e('PERRLA'), 'مردمک‌ها برابر و گرد و به نور و تطابق واکنش‌دار'], [e('ADL'), 'فعالیت‌های روزانه زندگی']])}`),
          M(`${e('<b>NKDA</b>')} در پرونده یعنی…`, ['حساسیت دارویی شناخته‌شده ندارد', 'بدون ناراحتی آشکار', 'در محدوده طبیعی', 'دارو را قطع کنید'], 'no known drug allergies.'),
          T('WNL یعنی یافته در محدوده طبیعی است.', true, 'within normal limits.'),
          L('نمادهای پرونده', `${tbl([['نماد', 'معنی'], ['↑ / ↓', 'افزایش / کاهش'], ['1° / 2°', 'اولیه / ثانویه (به دنبال)'], ['∆', 'تغییر'], ['±', 'مشکوک، خفیف'], ['∼', 'تقریباً']])}${memo('2° در «2° to infection» یعنی «ثانویه به عفونت»؛ عفونت علت اصلی است.')}`),
          M('در پرونده نوشته شده: «WBC ↑». یعنی…', ['گلبول‌های سفید افزایش یافته', 'گلبول‌های سفید کاهش یافته', 'گلبول‌ها تغییری نکرده', 'آزمایش انجام نشده'], '↑ = increase(d).'),
          L('مرور سطح «شرح حال و معاینه»', recap(['Dx تشخیص • Hx شرح حال • CC شکایت اصلی • HPI، PMH، ROS • PE معاینه فیزیکی', 'sign عینی • symptom ذهنی • syndrome مجموعه نشانه‌ها', 'IPPA: inspection نگاه • palpation لمس • percussion دق • auscultation سمع با stethoscope', 'c/o، h/o، y/o، w/o، R/O • NAD، WNL، NKDA، HEENT، PERRLA • ↑ ↓ 1° 2° ∆'])),
          B('برای بیمار ۵۹ ساله، پس از عدد سن، اختصار ___ را می‌نویسند.', ['y/o', 'h/o', 'c/o'], 'y/o = years old.'),
          S('املای «معاینه با نگاه» را بنویس', 'inspection', 'in- + spect (نگاه) + -ion.', 'inspec…'),
          N('ab:dx')
        ]
      },
      /* ================= سطح ۲: علائم حیاتی و نشانه‌ها ================= */
      {
        id: 'dx4', title: 'چهار عدد حیاتی', icon: '🌡️', items: [
          L('علائم حیاتی', `<b>vital signs</b> (VS) اندازه‌هایی‌اند که کارهای پایه برای زنده ماندن را نشان می‌دهند و با محدوده طبیعی مقایسه می‌شوند:${fig('vital-signs')}`),
          P('هر اختصار را به معنی‌اش وصل کن', [['T', 'دما'], ['P', 'نبض'], ['R', 'تنفس'], ['BP', 'فشار خون']]),
          L('نبض', `نبض (pulse) با لمس یک سرخرگ شمرده می‌شود و واحدش <b>bpm</b> (beats per minute) است. نبض معمولاً برابر <b>HR</b> (ضربان قلب) است. <b>TPR</b> یعنی دما، نبض و تنفس.${fig('pulse-img', 'شمردن نبض با لمس سرخرگ مچ')}`),
          M('در این تصویر معاینه‌گر سرخرگ مچ را لمس می‌کند تا… را بشمارد.', ['نبض (pulse) بر حسب bpm', 'فشار خون بر حسب mm Hg', 'دمای بدن', 'تعداد تنفس'], 'pulse rate in beats per minute.', null, F('pulse-img', 'شمردن نبض')),
          M(`${e('<b>TPR</b>')} یعنی…`, ['دما، نبض، تنفس', 'فشار خون و نبض', 'دما و فشار خون', 'تنفس و ضربان قلب'], 'temperature, pulse, respiration.'),
          L('دما', `ریشه <b>therm/o</b> یعنی گرما، دما: <b>thermometer</b> دماسنج، <b>hypothermia</b> دمای پایین بدن و <b>hyperthermia</b> دمای بالای بدن. صفت تب <b>febrile</b> (تب‌دار) است. دما با C (سانتی‌گراد) یا F (فارنهایت) نوشته می‌شود.`),
          M(`${e('<b>hypothermia</b>')} یعنی…`, ['دمای بدن کمتر از طبیعی', 'دمای بدن بیشتر از طبیعی', 'تب', 'لرز'], 'hypo- (کم) + therm/o + -ia.'),
          T('febrile یعنی تب‌دار.', true, 'Pertaining to fever.'),
          B('نبض را با واحد ___ می‌نویسند.', ['bpm', 'mm Hg', 'mL'], 'beats per minute.'),
          W('واژه‌ای بساز به معنی «دمای بالای بدن»', ['hyper-', 'therm/o', '-ia'], ['hypo-', 'bar/o', '-meter'], 'hyper- + therm/o + -ia = hyperthermia.'),
          S('املای «دماسنج» را بنویس', 'thermometer', 'therm/o + -meter.', 'thermo…'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx5', title: 'فشار خون', icon: '🩺', items: [
          L('دو عدد فشار خون', `فشار خون (BP) بر حسب <b>mm Hg</b> (میلی‌متر جیوه) و به صورت systolic/diastolic نوشته می‌شود: عدد بالا <b>systolic pressure</b> (هنگام انقباض قلب) و عدد پایین <b>diastolic pressure</b> (هنگام استراحت قلب) است.${fig('bp-reading')}`),
          M(`${e('<b>systolic pressure</b>')} چه زمانی ثبت می‌شود؟`, ['هنگام انقباض قلب', 'هنگام استراحت قلب', 'هنگام دم', 'هنگام خواب'], 'systolic = when the heart is contracting.'),
          M('در «BP 130/85»، عدد ۸۵ کدام است؟', ['diastolic pressure', 'systolic pressure', 'pulse', 'respiration'], 'عدد پایینی diastolic است.'),
          L('دستگاه فشارسنج', `معاینه‌گر با کاف فشار، یعنی <b>sphygmomanometer</b>، و stethoscope فشار را می‌سنجد. واژه را بشکن: ${wb('sphygm/o', 'man/o', '-meter')} = نبض + فشار + ابزار اندازه‌گیری. دستگاه‌های دیجیتال تازه‌تر عدد را مستقیم نشان می‌دهند.${memo('اسفیگمو-مانو-متر: «نبض-فشار-سنج».')}`),
          P('هر قطعه را به معنی‌اش وصل کن', [['sphygm/o', 'نبض'], ['man/o', 'فشار'], ['-meter', 'ابزار اندازه‌گیری'], ['mm Hg', 'میلی‌متر جیوه']]),
          T('فشار خون با sphygmomanometer و stethoscope سنجیده می‌شود.', true, 'blood pressure cuff + stethoscope.'),
          M('ریشه bar/o هم یعنی «فشار». barometer چیست؟', ['ابزار اندازه‌گیری فشار (هوا)', 'دماسنج', 'نوار قلب', 'گوشی پزشکی'], 'bar/o + -meter.'),
          B('عدد بالایی فشار خون، فشار ___ است.', ['systolic', 'diastolic', 'pulse'], 'systolic = contracting.'),
          W('واژه‌ای بساز به معنی «فشارسنج خون»', ['sphygm/o', 'man/o', '-meter'], ['bar/o', 'therm/o', '-graph'], 'sphygm/o + man/o + -meter = sphygmomanometer.'),
          S('املای «فشارسنج خون» را بنویس', 'sphygmomanometer', 'sphygmo-mano-meter.', 'sphygmo…'),
          N('d2t:dx')
        ]
      },
      {
        id: 'dx6', title: 'نشانه‌هایی که پزشک می‌بیند', icon: '👀', items: [
          L('رنگ و پوست', `پوست، مو و ناخن نشانه‌های آشکاری از سلامت‌اند:${tbl([['واژه', 'معنی'], [e('cyanosis'), 'کبودی پوست از کمبود اکسیژن (cyan/o: آبی)'], [e('pallor'), 'رنگ‌پریدگی'], [e('diaphoresis'), 'تعریق شدید'], [e('clubbing'), 'چماقی شدن نوک انگشتان؛ در بیماری‌های ریه و قلب']])}${fig('clubbing-img', 'A: طبیعی (زاویه ۱۶۰ درجه) • B: چماقی (زاویه بیش از ۱۸۰ درجه)')}`),
          M('در شکل B، نوک انگشت متورم و زاویه ناخن بیش از ۱۸۰ درجه است. نامش…', ['clubbing', 'cyanosis', 'pallor', 'induration'], 'clubbing: soft-tissue growth around the nail.', null, F('clubbing-img', 'انگشت طبیعی و چماقی')),
          M(`${e('<b>cyanosis</b>')} یعنی…`, ['کبودی پوست از کمبود اکسیژن', 'رنگ‌پریدگی', 'زردی', 'سرخی پوست'], 'cyan/o = آبی.'),
          L('احساس‌ها و حال عمومی', `${tbl([['واژه', 'معنی'], [e('malaise'), 'کسالت و ناخوشی؛ اغلب نشانه عفونت (mal-: بد)'], [e('syncope'), 'غش؛ بیهوشی کوتاه از کم شدن خون مغز'], [e('colic'), 'درد حاد شکم با گرفتگی ماهیچه صاف'], [e('nocturnal'), 'شبانه (noct/i: شب)']])}`),
          P('هر واژه را به معنی‌اش وصل کن', [['syncope', 'غش'], ['malaise', 'کسالت'], ['diaphoresis', 'تعریق شدید'], ['pallor', 'رنگ‌پریدگی']]),
          L('پیش و پس از بیماری', `${vs(['prodrome', 'علامتی که نزدیک شدن بیماری را خبر می‌دهد'], ['sequela', 'اثر ماندگار بیماری؛ جمع: sequelae'])}${tbl([['واژه', 'معنی'], [e('facies'), 'حالت و ظاهر چهره'], [e('bruit'), 'صدای غیرطبیعی در سمع، مثلاً روی یک رگ'], [e('FUO'), 'تب با منشأ ناشناخته']])}`),
          M(`${e('<b>sequela</b>')} یعنی…`, ['اثر ماندگار یک بیماری', 'علامت پیش از بیماری', 'غش', 'تب ناشناخته'], 'A lasting effect of a disease.'),
          T('prodrome علامتی است که پس از بهبود بیماری باقی می‌ماند.', false, 'نادرست؛ prodrome پیش از بیماری است و sequela پس از آن.'),
          L('مرور «علائم حیاتی و نشانه‌ها»', recap(['VS: T دما، P نبض (bpm)، R تنفس، BP فشار خون (mm Hg) • TPR • HR', 'systolic انقباض (عدد بالا) • diastolic استراحت (عدد پایین) • sphygmomanometer', 'therm/o: thermometer، hypothermia، hyperthermia • febrile تب‌دار', 'cyanosis، pallor، diaphoresis، clubbing، syncope، malaise، colic • prodrome پیش و sequela پس از بیماری'])),
          B('بیهوشی کوتاه به علت کم شدن خون مغز ___ نام دارد.', ['syncope', 'colic', 'malaise'], 'syncope = fainting.'),
          S('املای «کبودی» را بنویس', 'cyanosis', 'cyan/o + -osis.', 'cyan…'),
          N('t2f:dx')
        ]
      },
      /* ================= سطح ۳: ابزارها و تصویربرداری ================= */
      {
        id: 'dx7', title: 'ابزارهای دیدن و ثبت', icon: '🔦', items: [
          L('خانواده ‎-scope', `${fig('scope-family')}${vs(['-scope', 'ابزار دیدن: bronchoscope'], ['-scopy', 'معاینه با دیدن: celioscopy (حفره شکم)'])}`),
          M('ابزار معاینه درون چشم…', ['ophthalmoscope', 'otoscope', 'endoscope', 'stethoscope'], 'ophthalm/o + -scope.', null, F('ophthalmoscope-img', 'ابزار معاینه چشم')),
          M('ابزار این تصویر با نوک قیفی برای معاینه گوش است. نامش…', ['otoscope', 'ophthalmoscope', 'bronchoscope', 'speculum'], 'ot/o (گوش) + -scope.', null, F('otoscope-img', 'ابزار معاینه گوش')),
          L('آندوسکوپ', `<b>endoscope</b> ابزاری است برای دیدن درون یک اندام یا حفره از راه یک سوراخ طبیعی بدن یا یک برش کوچک؛ بیشتر آن‌ها فیبر نوری دارند. <b>bronchoscope</b> آندوسکوپ نایژه‌هاست. <b>speculum</b> هم ابزاری برای باز کردن و دیدن یک مجراست.${fig('bronchoscopy-img', 'برونکوسکوپ از راه دهان به نایژه‌ها می‌رود')}`),
          M('در این تصویر، کدام ابزار برای دیدن نایژه‌ها به کار رفته است؟', ['bronchoscope', 'stethoscope', 'otoscope', 'sphygmomanometer'], 'bronch/o + -scope.', null, F('bronchoscopy-img', 'معاینه نایژه‌ها')),
          L('ثبت و اندازه‌گیری', `${fig('graph-gram')}${pearl('طبق منابع مرجع، ‎-graphy فقط ثبت نیست؛ تفسیر داده‌ها را هم دربرمی‌گیرد.')}`),
          P('هر پسوند را به معنی‌اش وصل کن', [['-graph', 'ابزار ثبت'], ['-graphy', 'روش ثبت'], ['-gram', 'خود ثبت'], ['-metry', 'اندازه‌گیری']]),
          M(`${e('<b>electrocardiogram</b>')} (ECG) یعنی…`, ['خود نوار ثبت‌شده فعالیت برقی قلب', 'دستگاه ثبت نوار قلب', 'روش ثبت', 'دستگاه اندازه‌گیری فشار'], '-gram = a record.'),
          T('stethoscope ابزار دیدن است.', false, 'نادرست؛ با آن می‌شنویم؛ استثنای خانواده ‎-scope است.'),
          W('واژه‌ای بساز به معنی «شنوایی‌سنجی»', ['audi/o', '-metry'], ['-meter', 'ot/o', '-graphy'], 'audi/o + -metry = audiometry.'),
          S('املای «ابزار معاینه گوش» را بنویس', 'otoscope', 'ot/o + -scope.', 'oto…'),
          N('m2r:dx')
        ]
      },
      {
        id: 'dx8', title: 'نیروهای فیزیکی', icon: '⚡', items: [
          L('دوازده ریشه', `جدول مرجع ریشه‌هایی برای نیروها و انرژی‌ها دارد که در تشخیص و درمان به کار می‌روند:${fig('physical-forces')}`),
          P('هر ریشه را به معنی‌اش وصل کن', [['aer/o', 'هوا'], ['cry/o', 'سرما'], ['phot/o', 'نور'], ['erg/o', 'کار']]),
          L('نمونه‌ها', `${tbl([['واژه', 'معنی'], [e('anaerobic'), 'بی‌نیاز از اکسیژن'], [e('hyperbaric'), 'مربوط به فشار بالا'], [e('chromatic / achromatic'), 'رنگی / بی‌رنگ'], [e('chronologic'), 'به ترتیب زمان'], [e('cryotherapy'), 'سرمادرمانی'], [e('electrolysis'), 'تجزیه با جریان برق'], [e('photoreaction'), 'واکنش به نور'], [e('barotrauma'), 'آسیب ناشی از فشار'], [e('synchrony'), 'هم‌زمانی (syn-: با هم)']])}`),
          M(`${e('<b>aerobic</b>')} یعنی…`, ['نیازمند هوا (اکسیژن)', 'بی‌هوا', 'مربوط به فشار', 'مربوط به نور'], 'aer/o + -bic.'),
          M(`${e('<b>cryotherapy</b>')} یعنی…`, ['درمان با سرما', 'درمان با گرما', 'درمان با نور', 'درمان با برق'], 'cry/o (سرما) + -therapy.'),
          M(`${e('<b>barotrauma</b>')} یعنی آسیبی که از… پدید می‌آید.`, ['فشار', 'سرما', 'صدا', 'نور'], 'bar/o = فشار.'),
          T('son/o و phon/o هر دو به «صدا» مربوط‌اند.', true, 'son/o برای فراصوت و phon/o برای صدا و صوت.'),
          M(`${e('<b>synchrony</b>')} یعنی…`, ['رخ دادن هم‌زمان', 'به ترتیب زمانی', 'کار با هم', 'نبود رنگ'], 'syn- (با هم) + chron/o (زمان).'),
          B('عینک‌های photochromic در پاسخ به ___ رنگ عوض می‌کنند.', ['نور', 'گرما', 'فشار'], 'phot/o = نور؛ chrom/o = رنگ.'),
          W('واژه‌ای بساز به معنی «بی‌رنگ»', ['a-', 'chromat/o', '-ic'], ['chron/o', 'phot/o', 'hyper-'], 'a- + chromat/o + -ic = achromatic.'),
          S('املای «نیازمند اکسیژن» را بنویس', 'aerobic', 'aer/o + -bic.', 'aero…'),
          N('r2m:dx')
        ]
      },
      {
        id: 'dx9', title: 'تصویربرداری', icon: '🩻', items: [
          L('هر روش، یک انرژی', `روش‌های تصویربرداری با انرژی‌های گوناگون تصویر درون بدن را می‌سازند (جعبه‌های ۳-۴ و ۳-۵):${fig('imaging-energy')}`),
          L('رادیوگرافی', `<b>radiography</b> پایه‌ای‌ترین روش است: پرتو X از بدن می‌گذرد و تصویری به نام <b>radiograph</b> روی فیلم یا صفحه دیجیتال می‌سازد. بافت متراکم (استخوان، دندان) پرتو را جذب می‌کند و <b>روشن</b> دیده می‌شود. برای بافت نرم اغلب <b>contrast medium</b> مثل باریم لازم است.${fig(['hand-xray', 'xray-density'], ['radiograph دست راست طبیعی', 'چرا استخوان روشن است'])}`),
          M('در رادیوگراف دست، چرا استخوان‌ها روشن دیده می‌شوند؟', ['چون متراکم‌اند و پرتو X را جذب می‌کنند', 'چون پرتو از آن‌ها راحت می‌گذرد', 'چون ماده حاجب دارند', 'چون گرم‌ترند'], 'Dense tissues absorb most of the x-rays.', null, F('hand-xray', 'رادیوگراف دست')),
          L('CT و MRI', `${vs(['CT • computed tomography', 'پرتو X از زاویه‌های گوناگون + کامپیوتر = برش‌های عرضی؛ بافت نرم را بهتر از عکس ساده نشان می‌دهد'], ['MRI', 'میدان مغناطیسی قوی + امواج رادیویی؛ بدون پرتو X؛ بافت نرم را از CT هم روشن‌تر نشان می‌دهد'])}${tbl([['روش', 'توضیح'], [e('fluoroscopy'), 'دیدن ساختارهای عمیق روی صفحه فلورسنت به صورت زنده'], [e('cineradiography'), 'فیلم از تصویرهای پیاپی فلوروسکوپی']])}`),
          M('کدام روش اصلاً پرتو X ندارد؟', ['MRI', 'CT', 'fluoroscopy', 'radiography'], 'MRI = magnetic field + radio waves.'),
          L('فراصوت و پزشکی هسته‌ای', `<b>ultrasonography</b>، که sonography و echography هم نامیده می‌شود، از پژواک امواج صوتی پرفرکانس تصویر می‌سازد؛ تصویرش <b>sonogram</b> است. در <b>nuclear medicine</b>، ماده‌ای پرتوزا (<b>radionuclide</b>) به بدن داده می‌شود: <b>scintigraphy</b>، <b>PET</b> و <b>SPECT</b>.${fig(['ultrasound-img', 'sonogram-img'], ['سونوگرافی بارداری', 'sonogram رحم باردار؛ H سر، C دنبالچه جنین'])}`),
          M('برای دیدن جنین در رحم، روش ایمن و بدون پرتو کدام است؟', ['ultrasonography', 'radiography', 'CT', 'PET'], 'امواج صوتی پرفرکانس.', null, F('sonogram-img', 'تصویر رحم باردار')),
          P('هر روش را به انرژی‌اش وصل کن', [['radiography', 'پرتو X'], ['MRI', 'میدان مغناطیسی'], ['ultrasonography', 'امواج صوتی'], ['PET', 'ماده پرتوزا']]),
          L('نماهای رادیوگرافی', `${fig('xray-views')}${tbl([['اختصار', 'معنی'], [e('AP'), 'قدامی‌خلفی: پرتو از جلو به پشت'], [e('PA'), 'خلفی‌قدامی: پرتو از پشت به جلو'], [e('LL / RL'), 'نیم‌رخ چپ / راست']])}`),
          T('در نمای PA، پرتو X از پشت بیمار وارد و از جلو خارج می‌شود.', true, 'posteroanterior.'),
          L('مرور سطح «ابزارها و تصویربرداری»', recap(['‎-scope ابزار دیدن • ‎-scopy معاینه با دیدن • ophthalmoscope، otoscope، endoscope، bronchoscope • stethoscope برای شنیدن', '‎-graph ابزار ثبت • ‎-graphy روش • ‎-gram خود ثبت • ‎-meter ابزار و ‎-metry اندازه‌گیری', 'aer/o، bar/o، chrom/o، chron/o، cry/o، electr/o، erg/o، phon/o، phot/o، radi/o، son/o، therm/o', 'پرتو X: radiography و CT • مغناطیس: MRI • صوت: ultrasonography • radionuclide: PET، SPECT، scintigraphy • نماها: AP، PA، LL، RL'])),
          S('املای «سونوگرافی» (نام کامل روش) را بنویس', 'ultrasonography', 'ultra- + son/o + -graphy.', 'ultraso…'),
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
    id: 'tx', sym: 'Tx', name: 'جراحی و درمان', short: 'جراحی', sub: 'برداشتن و برش و دهانه، کشیدن مایع، ترمیم و ثابت کردن، اتاق عمل و ابزارها، کاتتر و شست‌وشو، درمان و پیش‌آگهی و طب مکمل',
    color: '#E64980', dark: '#A61E4D', light: '#FFF0F6',
    levels: ['پسوندهای جراحی', 'اتاق عمل و ابزارها', 'درمان‌ها و طب مکمل'],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: پسوندهای جراحی ================= */
      {
        id: 'tx1', title: 'برداشتن، برش، دهانه', icon: '✂️', items: [
          L('جراح با پسوند حرف می‌زند', `<b>surgery</b> درمان بیماری یا آسیب با کار دستی است و معمولاً با <b>incision</b> (برش) همراه است. ${e('excision')} یعنی برداشتن با برش.${fig('surgery-suffixes')}`),
          L('سه پسوند اصلی', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-ectomy'), 'برداشتن (excision)', 'hepatectomy: برداشتن بافت کبد • adenectomy: برداشتن غده'], [e('-tomy'), 'برش (incision)', 'laparotomy: برش شکم • tracheotomy: برش نای'], [e('-stomy'), 'ساختن دهانه', 'tracheostomy: دهانه نای • colostomy: دهانه روده بزرگ']])}${memo('ectomy: «بیرون» (ec-) برش؛ stomy: «دهان» (stoma) تازه.')}`),
          M(`${e('<b>hepatectomy</b>')} یعنی…`, ['برداشتن بافت کبد', 'برش کبد', 'ثابت کردن کبد', 'دیدن درون کبد'], 'hepat/o + -ectomy.'),
          M(`${e('<b>tracheostomy</b>')} یعنی…`, ['ساختن دهانه در نای', 'برش نای', 'برداشتن نای', 'ترمیم نای'], 'trache/o + -stomy.'),
          P('هر واژه را به معنی‌اش وصل کن', [['laparotomy', 'برش شکم'], ['colostomy', 'دهانه روده بزرگ'], ['adenectomy', 'برداشتن غده'], ['tracheotomy', 'برش نای']]),
          L('ابزار برش', `پسوند <b>‎-tome</b> یعنی ابزار برش: <b>microtome</b> برای برش‌های بسیار نازک بافت جهت میکروسکوپ و <b>cystotome</b> برای برش مثانه.${vs(['-tomy', 'عمل برش'], ['-tome', 'ابزار برش'])}`),
          T('microtome ابزاری برای بریدن برش‌های نازک بافت است.', true, 'micro- (ریز) + -tome.'),
          B('برش شکم برای جراحی را ___ می‌نامند.', ['laparotomy', 'laparoscopy', 'colostomy'], 'lapar/o + -tomy.'),
          W('واژه‌ای بساز به معنی «ساختن دهانه در روده بزرگ»', ['col/o', '-stomy'], ['-tomy', '-ectomy', 'trache/o'], 'col/o + -stomy = colostomy.'),
          S('املای «برداشتن با برش» (واژه کلیدی) را بنویس', 'excision', 'ex- (بیرون) + cision (برش).', 'exc…'),
          N('m2r:tx')
        ]
      },
      {
        id: 'tx2', title: 'سوراخ کردن و دیدن درون', icon: '💉', items: [
          L('‎-centesis', `پسوند <b>‎-centesis</b> یعنی سوراخ کردن و کشیدن مایع (tap):${tbl([['واژه', 'معنی'], [e('thoracentesis'), 'سوراخ کردن قفسه سینه و کشیدن مایع'], [e('arthrocentesis'), 'کشیدن مایع از مفصل'], [e('celiocentesis'), 'کشیدن مایع از شکم'], [e('paracentesis'), 'سوراخ کردن یک حفره برای خروج مایع']])}${pearl('در کیس ماری، زانوی ورم‌کرده با arthrocentesis تخلیه شد و درد کم شد.')}`),
          M(`${e('<b>arthrocentesis</b>')} یعنی…`, ['سوراخ کردن مفصل و کشیدن مایع', 'برش مفصل', 'بازسازی مفصل', 'دیدن درون مفصل'], 'arthr/o + -centesis.'),
          M(`${e('<b>thoracentesis</b>')} یعنی…`, ['کشیدن مایع از قفسه سینه با سوزن', 'برش قفسه سینه', 'عکس قفسه سینه', 'شنیدن صدای قفسه سینه'], 'thorac/o + -centesis.'),
          L('دیدن درون با آندوسکوپ', `${wb('arthr/o', '-scopy')} = <b>arthroscopy</b>: معاینه درون مفصل با آندوسکوپ. ${e('laparoscopy')} درون شکم را نشان می‌دهد. جراح می‌تواند در همین آندوسکوپی‌ها نمونه هم بردارد.${vs(['-centesis', 'سوزن و کشیدن مایع'], ['-scopy', 'آندوسکوپ و دیدن'])}`),
          P('هر واژه را به معنی‌اش وصل کن', [['arthroscopy', 'دیدن درون مفصل'], ['arthrocentesis', 'کشیدن مایع مفصل'], ['celiocentesis', 'کشیدن مایع شکم'], ['laparoscopy', 'دیدن درون شکم']]),
          T('arthroscopy برش بزرگ مفصل است.', false, 'نادرست؛ دیدن درون مفصل با آندوسکوپ است. برش مفصل arthrotomy است.'),
          L('سنگ', `${tbl([['واژه', 'معنی'], [e('lithotomy'), 'برش یک اندام برای بیرون آوردن سنگ'], [e('lithotripsy'), 'خرد کردن سنگ (‎-tripsy)']])}`),
          M(`${e('<b>lithotomy</b>')} یعنی…`, ['برش برای بیرون آوردن سنگ', 'خرد کردن سنگ', 'سنگ‌سازی', 'دیدن سنگ'], 'lith/o + -tomy.'),
          B('کشیدن مایع از حفره شکم با سوزن ___ نام دارد.', ['paracentesis', 'laparotomy', 'lithotripsy'], 'para- + -centesis.'),
          W('واژه‌ای بساز به معنی «کشیدن مایع از مفصل»', ['arthr/o', '-centesis'], ['-scopy', '-desis', 'thorac/o'], 'arthr/o + -centesis = arthrocentesis.'),
          S('املای «دیدن درون مفصل» را بنویس', 'arthroscopy', 'arthr/o + -scopy.', 'arthro…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx3', title: 'ترمیم، ثابت کردن، خرد کردن', icon: '🔧', items: [
          L('پنج پسوند ترمیم', `${fig('repair-suffixes')}${tbl([['پسوند', 'معنی', 'نمونه'], [e('-plasty'), 'ترمیم، جراحی پلاستیک، بازسازی', 'rhinoplasty (بینی) • gastroplasty • arthroplasty'], [e('-rrhaphy'), 'ترمیم با بخیه', 'herniorrhaphy: ترمیم فتق'], [e('-pexy'), 'ثابت کردن', 'hysteropexy (رحم) • nephropexy (کلیه)'], [e('-desis'), 'جوش دادن، بستن', 'pleurodesis (پرده جنب) • arthrodesis (مفصل)'], [e('-tripsy'), 'خرد کردن', 'lithotripsy (سنگ) • neurotripsy (عصب)']])}`),
          M(`${e('<b>rhinoplasty</b>')} یعنی…`, ['جراحی پلاستیک بینی', 'برش بینی', 'برداشتن بینی', 'التهاب بینی'], 'rhin/o + -plasty.'),
          M(`${e('<b>nephropexy</b>')} یعنی…`, ['ثابت کردن کلیه با جراحی', 'برداشتن کلیه', 'سنگ‌شکنی کلیه', 'ترمیم کلیه با بخیه'], 'nephr/o + -pexy (fixation).'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-plasty', 'بازسازی'], ['-rrhaphy', 'بخیه'], ['-pexy', 'ثابت کردن'], ['-desis', 'جوش دادن']]),
          L('دو واژه کلیدی', `${vs(['fixation', 'ثابت نگه داشتن یک ساختار؛ پسوند ‎-pexy'], ['suture', 'به هم دوختن؛ همچنین نخ یا درز بخیه؛ پسوند ‎-rrhaphy'])}${memo('pexy مثل «پیچ» ثابت می‌کند؛ rrhaphy مثل «رفو» می‌دوزد.')}`),
          M(`${e('<b>arthrodesis</b>')} یعنی…`, ['جوش دادن مفصل', 'بازسازی مفصل', 'برش مفصل', 'کشیدن مایع مفصل'], 'arthr/o + -desis.'),
          T('lithotripsy یعنی خرد کردن سنگ.', true, 'lith/o + -tripsy.'),
          B('ترمیم فتق با بخیه را ___ می‌نامند.', ['herniorrhaphy', 'hernioplasty', 'hysteropexy'], 'herni/o + -rrhaphy.'),
          L('مرور سطح «پسوندهای جراحی»', recap(['‎-ectomy برداشتن (excision) • ‎-tomy برش (incision) • ‎-stomy دهانه • ‎-tome ابزار برش', '‎-centesis سوراخ کردن و کشیدن مایع: thoracentesis، arthrocentesis، paracentesis', '‎-scopy دیدن درون: arthroscopy، laparoscopy', '‎-plasty بازسازی • ‎-rrhaphy بخیه (suture) • ‎-pexy ثابت کردن (fixation) • ‎-desis جوش دادن • ‎-tripsy خرد کردن'])),
          W('واژه‌ای بساز به معنی «ثابت کردن رحم»', ['hyster/o', '-pexy'], ['-plasty', '-desis', 'nephr/o'], 'hyster/o + -pexy = hysteropexy.'),
          S('املای «ترمیم فتق» را بنویس', 'herniorrhaphy', 'herni/o + -rrhaphy؛ rr دوتایی.', 'hernio…'),
          N('wb:tx')
        ]
      },
      /* ================= سطح ۲: اتاق عمل و ابزارها ================= */
      {
        id: 'tx4', title: 'چرا جراحی؟', icon: '🎯', items: [
          L('چهار هدف', `${fig('surgery-purposes')}<b>resection</b> یعنی برداشتن بخشی از یک ساختار؛ <b>surgeon</b> پزشک متخصص جراحی است.`),
          P('هر هدف را به نمونه‌اش وصل کن', [['treatment', 'برداشتن آپاندیس ملتهب'], ['diagnosis', 'biopsy'], ['restoration', 'colostomy یا پیوند اندام'], ['relief', 'کاستن درد بیمار لاعلاج']]),
          L('نمونه‌برداری', `<b>biopsy</b> (bx) یعنی برداشتن مقدار کمی بافت برای میکروسکوپ.${fig('biopsy-ways')}${pearl('liquid biopsy با بررسی DNA تومور در خون انجام می‌شود؛ نمونه‌اش ساده‌تر به دست می‌آید.')}`),
          M(`${e('<b>biopsy</b>')} یعنی…`, ['برداشتن مقدار کمی بافت برای بررسی میکروسکوپی', 'برداشتن کامل اندام', 'تصویربرداری', 'کشیدن خون برای آزمایش قند'], 'bi/o (زندگی) + -opsy (دیدن).'),
          M('نمونه‌برداری با کشیدن مایع از کیست با سوزن…', ['needle aspiration', 'punch', 'liquid biopsy', 'resection'], 'aspiration = needle withdrawal of fluid.'),
          L('فوری یا انتخابی؟', `${vs(['emergency', 'فوری؛ خطر حاد مثل ضربه شدید یا انسداد'], ['elective', 'انتخابی؛ اگر عقب بیفتد پیامد جدی ندارد'])}جراحی <b>palliative</b> درد یا ناراحتی را کم می‌کند؛ مثل کوچک کردن تومور برای کم شدن فشار.`),
          T('جراحی elective اگر به تأخیر بیفتد پیامد جدی ندارد.', true, 'optional surgery.'),
          M(`${e('<b>resection</b>')} یعنی…`, ['برداشتن بخشی از یک ساختار', 'برداشتن کامل اندام', 'بخیه زدن', 'ثابت کردن'], 'Partial excision.'),
          B('جراحی‌ای که فقط درد را کم می‌کند و بیماری را درمان قطعی نمی‌کند ___ است.', ['palliative', 'elective', 'emergency'], 'palliative = relief, not cure.'),
          S('املای «نمونه‌برداری» را بنویس', 'biopsy', 'bi/o + -opsy.', 'bio…'),
          N('ab:tx')
        ]
      },
      {
        id: 'tx5', title: 'پیش و پس از عمل', icon: '🛏️', items: [
          L('مسیر بیمار', `${fig('periop-path')}<b>preoperative</b> (preop): معاینه، رضایت آگاهانه و آزمون‌های پیش از پذیرش. <b>postoperative</b> (postop): بهبود از بیهوشی، پیگیری و آموزش مراقبت در خانه.`),
          O('مسیر بیمار در جراحی را بچین', ['preop', 'OR', 'PACU', 'postop'], 'پیش از عمل، اتاق عمل، ریکاوری، پس از عمل.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['OR', 'اتاق عمل'], ['PACU', 'ریکاوری پس از بیهوشی'], ['EBL', 'برآورد خون از دست رفته'], ['NPO', 'هیچ چیز از راه دهان']]),
          L('بیهوشی و بستن زخم', `جراحی معمولاً به <b>anesthesia</b> نیاز دارد: از دست رفتن حس درد با دارو. پس از عمل، برش را با <b>suture</b> (بخیه)، <b>stapling</b> (منگنه)، نوار چسب یا چسب پوست می‌بندند. <b>ligature</b> یعنی بستن یا گره زدن، مثلاً یک رگ.`),
          M(`${e('<b>anesthesia</b>')} یعنی…`, ['از دست رفتن حس درد', 'دارو برای تب', 'بخیه زدن زخم', 'ریکاوری'], 'an- (بدون) + esthesia (حس).'),
          L('ابزارهای انرژی', `${tbl([['واژه', 'معنی'], [e('laser'), 'پرتو نور پرانرژی برای جراحی و تشخیص'], [e('cautery'), 'سوزاندن بافت با گرما، مواد شیمیایی یا برق (electrocautery)'], [e('robotic surgery'), 'جراحی با ابزار رباتیک و کامپیوتر؛ کم‌تهاجمی‌تر و با خون‌ریزی کمتر']])}`),
          M(`${e('<b>cautery</b>')} یعنی…`, ['از بین بردن بافت با گرما، مواد شیمیایی یا برق', 'دوختن زخم', 'بستن رگ با نخ', 'دیدن درون حفره'], 'cauterization.'),
          T('جراحی رباتیک معمولاً خون‌ریزی کمتری از جراحی معمولی دارد.', true, 'less invasive, less bleeding.'),
          B('بیمار پس از عمل ابتدا به بخش ___ می‌رود تا از بیهوشی بیدار شود.', ['PACU', 'ICU', 'ED'], 'postanesthesia care unit.'),
          S('املای «بیهوشی» را بنویس', 'anesthesia', 'an- + esthesia.', 'anes…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx6', title: 'ابزارهای جراحی', icon: '🔪', items: [
          L('شش ابزار شکل ۳-۱۶', `${fig('instruments', '', 'curette، forceps، hemostat، retractor، sound و scalpel')}${tbl([['ابزار', 'کار'], [e('scalpel'), 'تیغ جراحی'], [e('forceps'), 'گرفتن یا بیرون کشیدن'], [e('hemostat'), 'گیره کوچک برای بند آوردن خون رگ'], [e('retractor'), 'کنار زدن لبه زخم و اندام‌ها'], [e('curet'), 'قاشقک برای تراشیدن دیواره حفره'], [e('sound'), 'میله کاوش حفره یا مجرا']])}`),
          M('این ابزار تیغ تیز جراحی است. نامش…', ['scalpel', 'forceps', 'curet', 'sound'], 'scalpel = surgical knife.', null, F('inst-scalpel', 'ابزار برش')),
          M('این ابزار قیچی‌مانند با قفل برای بستن رگ خون‌ریز است. نامش…', ['hemostat', 'scissors', 'retractor', 'rongeur'], 'hem/o + -stat (متوقف‌کننده).', null, F('inst-hemostat', 'گیره خون‌بند')),
          M('ابزاری با سر قاشقی برای تراشیدن دیواره حفره…', ['curet', 'sound', 'forceps', 'trocar'], 'curet (curette) = spoon-shaped.', null, F('inst-curet', 'سر قاشقی')),
          M('این ابزار لبه زخم را کنار می‌زند تا میدان عمل باز بماند. نامش…', ['retractor', 'elevator', 'clamp', 'bougie'], 'retractor = separates a wound.', null, F('inst-retractor', 'کنارزن')),
          M('انبرک دوشاخه برای گرفتن بافت…', ['forceps', 'hemostat', 'scalpel', 'rasp'], 'forceps = holding or extracting.', null, F('inst-forceps', 'انبرک')),
          M('میله بلند و خمیده برای کاوش یک مجرا…', ['sound', 'curet', 'cannula', 'Gigli saw'], 'sound = instrument for exploring a cavity or canal.', null, F('inst-sound', 'میله کاوش')),
          L('ابزارهای دیگر جعبه ۳-۶', `${tbl([['ابزار', 'کار'], [e('clamp'), 'فشردن بافت'], [e('scissors'), 'برش با دو تیغه'], [e('elevator'), 'بالا بردن بافت یا استخوان'], [e('rasp'), 'سوهان جراحی'], [e('rongeur'), 'انبر گاز گرفتن استخوان'], [e('Gigli saw'), 'اره سیمی انعطاف‌پذیر'], [e('bougie'), 'میله نرم برای کاوش و گشاد کردن لوله‌ها'], [e('trocar • cannula'), 'سوزن تیز درون لوله؛ پس از سوراخ کردن، کانولا برای خروج مایع یا هوا می‌ماند']])}`),
          P('هر ابزار را به کارش وصل کن', [['rasp', 'سوهان'], ['elevator', 'بالا بردن استخوان'], ['bougie', 'گشاد کردن لوله'], ['Gigli saw', 'اره سیمی']]),
          L('مرور سطح «اتاق عمل و ابزارها»', recap(['هدف جراحی: treatment، diagnosis (biopsy)، restoration، relief (palliative) • emergency یا elective • resection', 'preop → OR → PACU → postop • anesthesia • EBL • NPO', 'بستن زخم: suture، stapling، ligature • laser، cautery، robotic surgery', 'scalpel، forceps، hemostat، retractor، curet، sound، clamp، scissors، trocar، cannula، bougie، rasp، rongeur'])),
          S('املای «تیغ جراحی» را بنویس', 'scalpel', 'scal-pel.', 'scal…'),
          N('t2f:tx')
        ]
      },
      /* ================= سطح ۳: درمان‌ها و طب مکمل ================= */
      {
        id: 'tx7', title: 'لوله‌ها و شست‌وشو', icon: '🧴', items: [
          L('کاتتر', `<b>catheter</b> لوله باریکی است که وارد حفره، اندام یا رگ می‌شود تا مایع را بیرون بکشد یا وارد کند. یک شکل آموزشی <b>irrigation</b> (شست‌وشوی) مداوم مثانه را با کاتتر نشان می‌دهد.${fig('irrigation-img', 'شست‌وشوی مداوم مثانه با کاتتر')}`),
          M('در این تصویر، مایع کیسه بالا با کاتتر وارد مثانه می‌شود و به کیسه پایین برمی‌گردد. این کار…', ['irrigation', 'paracentesis', 'cautery', 'resection'], 'irrigation = flushing with a fluid.', null, F('irrigation-img', 'شست‌وشوی مثانه')),
          L('شست‌وشو و تخلیه', `${fig('tubes-tools')}${tbl([['واژه', 'معنی'], [e('lavage'), 'شست‌وشوی یک حفره'], [e('drain'), 'وسیله خروج ترشح از زخم یا حفره؛ مثل Penrose و Jackson–Pratt'], [e('clysis'), 'وارد کردن مایع به بدن از راهی جز دهان'], [e('normal saline'), 'محلول نمکی سازگار با سلول‌ها (NS)']])}`),
          P('هر واژه را به معنی‌اش وصل کن', [['lavage', 'شست‌وشوی حفره'], ['drain', 'خروج ترشح از زخم'], ['clysis', 'وارد کردن مایع'], ['catheter', 'لوله باریک']]),
          M(`${e('<b>normal saline</b>')} یعنی…`, ['محلول نمکی سازگار با سلول‌های زنده', 'آب مقطر', 'محلول قندی', 'خون'], 'NaCl solution; NS یا PSS.'),
          T('I&D یعنی برش و تخلیه، مثلاً برای یک آبسه.', true, 'incision and drainage.'),
          M('cannula و trocar با هم به کار می‌روند. نقش trocar چیست؟', ['سوراخ کردن حفره؛ سپس بیرون کشیده می‌شود', 'ماندن برای خروج مایع', 'بخیه زدن', 'بند آوردن خون'], 'trocar تیز است؛ cannula می‌ماند.'),
          B('لوله‌ای که از رگ بازو تا ورید اجوف فوقانی می‌رود کاتتر ___ است.', ['PICC', 'NPO', 'PACU'], 'peripherally inserted central catheter.'),
          W('واژه‌ای بساز به معنی «کشیدن مایع از حفره»', ['para-', '-centesis'], ['-tomy', '-stomy', 'celi/o'], 'para- + -centesis = paracentesis.'),
          S('املای «لوله باریک درمانی» را بنویس', 'catheter', 'cath-e-ter.', 'cath…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx8', title: 'درمان، پیش‌آگهی، پیشگیری', icon: '📈', items: [
          L('درمان و پیامد', `پس از تشخیص، <b>therapy</b> (treatment) آغاز می‌شود: مشاوره، دارو، جراحی، پرتودرمانی، فیزیوتراپی، کاردرمانی یا ترکیبی از آن‌ها. در طول درمان، <b>prognosis</b> (پیش‌بینی سیر و پیامد بیماری) سنجیده می‌شود.${vs(['diagnosis', 'شناختن بیماری'], ['prognosis', 'پیش‌بینی پیامد بیماری'])}`),
          M(`${e('<b>prognosis</b>')} یعنی…`, ['پیش‌بینی سیر و پیامد بیماری', 'شناختن علت بیماری', 'پیشگیری از بیماری', 'علت بیماری'], 'pro- (پیش) + gnosis (شناخت).'),
          L('تسکین و پیشگیری', `${vs(['palliative therapy', 'تسکین، بدون هدف درمان قطعی؛ مثل کاستن درد بیمار لاعلاج'], ['prophylaxis', 'پیشگیری از بیماری'])}${memo('palliative: «پالتو» روی درد می‌کشد ولی بیماری را برنمی‌دارد.')}`),
          M(`${e('<b>prophylaxis</b>')} یعنی…`, ['پیشگیری از بیماری', 'تسکین درد', 'درمان قطعی', 'پیش‌آگهی'], 'Prevention of disease.'),
          L('سرطان: درجه و مرحله', `پزشکان سرطان با دو روش تومور را رده‌بندی می‌کنند:${fig('grade-stage')}درمان‌های رایج سرطان: جراحی، <b>radiation therapy</b> (RATx)، <b>chemotherapy</b> (درمان با مواد شیمیایی) و <b>immunotherapy</b> (تحریک یا مهار دستگاه ایمنی). وقتی نشانه‌ای از بیماری نماند، سرطان در <b>remission</b> است.`),
          P('هر واژه را به معنی‌اش وصل کن', [['grading', 'بررسی بدشکلی سلول‌ها'], ['staging', 'میزان گسترش تومور'], ['chemotherapy', 'درمان با مواد شیمیایی'], ['immunotherapy', 'درمان با دستگاه ایمنی']]),
          M('در TNM، حرف N نشانه چیست؟', ['غدد لنفاوی ناحیه‌ای', 'تومور اولیه', 'متاستاز دوردست', 'شماره درجه'], 'tumor, nodes, metastases.'),
          T('grading بر پایه تغییرات سلول‌ها زیر میکروسکوپ است.', true, 'Grades I to IV.'),
          B('مرحله‌بندی تومور با سیستم ___ انجام می‌شود.', ['TNM', 'IPPA', 'TPR'], 'tumor, nodes, metastases.'),
          S('املای «پیش‌آگهی» را بنویس', 'prognosis', 'pro- + gnosis.', 'progn…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx9', title: 'طب مکمل و جایگزین', icon: '🌿', items: [
          L('کل‌نگری', `در سده گذشته علت‌های اصلی مرگ از بیماری‌های عفونی به بیماری‌های مزمن رسیده است و بسیاری به درمان‌های مکمل روی آورده‌اند. <b>holistic health care</b> فرد را یک «کل» می‌بیند: جسم، احساس، جامعه و روان؛ و بر نگه‌داری سلامت تأکید دارد.${fig('alt-med')}`),
          L('چهار فلسفه درمان', `${tbl([['واژه', 'معنی'], [e('osteopathy'), 'بدن با ساختار طبیعی بر بیماری چیره می‌شود؛ اصلاح ساختار نادرست بدن'], [e('naturopathy'), 'کمک به درمان خود با سبک زندگی سالم'], [e('homeopathy'), 'داروی بسیار رقیق‌شده همراه با عادت‌های سالم (home/o: همانند)'], [e('chiropractic'), 'تأکید بر دستگاه عصبی؛ دستکاری ستون فقرات (cheir: دست)']])}`),
          P('هر فلسفه را به معنی‌اش وصل کن', [['osteopathy', 'اصلاح ساختار بدن'], ['naturopathy', 'سبک زندگی سالم'], ['homeopathy', 'داروی بسیار رقیق'], ['chiropractic', 'دستکاری ستون فقرات']]),
          L('روش‌ها', `${tbl([['روش', 'توضیح'], [e('acupuncture'), 'سوزن‌های نازک در نقطه‌های خاص؛ اگر با فشار انگشت باشد acupressure'], [e('biofeedback'), 'یادگیری کنترل پاسخ‌های غیرارادی با پایش الکترونیکی بدن'], [e('massage'), 'ورزدادن بدن برای آرامش و گردش خون'], [e('meditation'), 'آرام کردن ذهن با تمرکز و کنترل تنفس']])}`),
          M(`${e('<b>biofeedback</b>')} یعنی…`, ['یادگیری کنترل پاسخ‌های غیرارادی با پایش الکترونیکی', 'سوزن زدن در نقطه‌های خاص', 'داروی گیاهی', 'دستکاری ستون فقرات'], 'bi/o (زندگی) + feedback.'),
          M('روش چینی کهن با سوزن‌های نازک در نقطه‌های خاص…', ['acupuncture', 'acupressure', 'chiropractic', 'massage'], 'acu (سوزن) + puncture.'),
          T('NCCAM مرکزی در NIH آمریکاست که درمان‌های مکمل و جایگزین را بررسی می‌کند.', true, 'National Center for Complementary and Alternative Medicine.'),
          L('مرور سطح «درمان‌ها و طب مکمل»', recap(['catheter، irrigation، lavage، drain، clysis، normal saline • I&D • PICC • trocar و cannula', 'therapy درمان • prognosis پیش‌آگهی • palliative تسکینی • prophylaxis پیشگیری', 'grading درجه سلول (I–IV) • staging گسترش با TNM • chemotherapy، immunotherapy، RATx • remission', 'holistic • osteopathy، naturopathy، homeopathy، chiropractic • acupuncture، biofeedback، massage، meditation • CAM'])),
          B('درمانی که فرد را با جسم و روان و جامعه‌اش یک کل می‌بیند ___ است.', ['holistic', 'palliative', 'elective'], 'holistic health care.'),
          S('املای «طب سوزنی» را بنویس', 'acupuncture', 'acu + puncture.', 'acu…'),
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
    id: 'rx', sym: 'Rx', name: 'دارو و نسخه', short: 'دارو', sub: 'دارو و نسخه، نام ژنریک و تجاری، عارضه و تداخل، راه‌های تجویز و زاویه تزریق، شکل‌های دارو، اجزای واژه دارو و اختصارهای bid تا prn',
    color: '#7950F2', dark: '#5F3DC4', light: '#F3F0FF',
    levels: ['دارو و ایمنی', 'راه‌ها و شکل‌های دارو', 'زبان نسخه'],
    gens: EA.genIds('rx'),
    lessons: [
      /* ================= سطح ۱: دارو و ایمنی ================= */
      {
        id: 'rx1', title: 'دارو چیست؟', icon: '💊', items: [
          L('دارو و نسخه', `<b>drug</b> ماده‌ای است که کار بدن را تغییر می‌دهد. بسیاری از داروها <b>over-the-counter</b> (OTC) هستند و بدون نسخه فروخته می‌شوند؛ بقیه به <b>prescription</b> (Rx) نیاز دارند: دستور نوشته و امضاشده با روش مصرف. در آمریکا FDA پیش از فروش، ایمنی و <b>efficacy</b> (اثربخشی) هر دارو را تأیید می‌کند.${tbl([['واژه', 'معنی'], [e('OTC'), 'بدون نسخه'], [e('Rx'), 'نسخه؛ دارو؛ درمان'], [e('efficacy'), 'اثربخشی'], [e('FDA'), 'سازمان غذا و داروی آمریکا']])}`),
          M(`${e('<b>OTC</b>')} یعنی دارویی که…`, ['بدون نسخه فروخته می‌شود', 'فقط در بیمارستان تزریق می‌شود', 'از گیاه ساخته شده', 'ممنوع است'], 'over-the-counter.'),
          M(`${e('<b>efficacy</b>')} یعنی…`, ['اثربخشی؛ توان رسیدن به نتیجه دلخواه', 'عارضه جانبی', 'دوز دارو', 'قیمت دارو'], 'The power to produce a specific result.'),
          L('ژنریک یا تجاری؟', `${vs(['generic name', 'نام غیرانحصاری؛ ساده‌شده نام شیمیایی؛ با حرف کوچک: acetaminophen'], ['brand name', 'نام تجاری ثبت‌شده؛ با حرف بزرگ: Tylenol'])}${tbl([['brand name', 'generic name'], [e('Tylenol'), e('acetaminophen') + ' (APAP)'], [e('Prozac'), e('fluoxetine')], [e('Motrin, Advil'), e('ibuprofen')]])}${memo('Generic «گروهی» است و کوچک نوشته می‌شود؛ Brand «بزرگ» و انحصاری.')}`),
          T('Motrin و Advil دو نام تجاری برای یک داروی ژنریک، یعنی ibuprofen، هستند.', true, 'یک دارو را شرکت‌های مختلف با نام‌های مختلف می‌فروشند.'),
          P('هر نام تجاری را به نام ژنریکش وصل کن', [['Tylenol', 'acetaminophen'], ['Prozac', 'fluoxetine'], ['Advil', 'ibuprofen']]),
          L('منابع اطلاعات دارو', `${tbl([['منبع', 'توضیح'], [e('USP'), 'فارماکوپه آمریکا: فرمول‌ها و استانداردهای کیفیت دارو'], [e('ASHP'), 'انجمن داروسازان نظام سلامت آمریکا'], [e('PDR'), 'مرجع مرجع دارویی پزشکان؛ اطلاعات سازندگان']])}یک منبع عالی دیگر <b>pharmacist</b> (داروساز) است. ${e('pharmacy')} هم علم آماده‌سازی دارو است و هم جای آن؛ ${e('pharmacology')} یعنی داروشناسی.`),
          M('کدام نام ژنریک است؟', ['acetaminophen', 'Tylenol', 'Prozac', 'Motrin'], 'نام ژنریک با حرف کوچک نوشته می‌شود.'),
          B('علم داروها و اثرهایشان ___ است.', ['pharmacology', 'pharmacy', 'toxicology'], 'pharmac/o + -logy.'),
          S('املای «نسخه» را بنویس', 'prescription', 'pre- (پیش) + script (نوشتن) + -ion.', 'prescr…'),
          N('ab:rx')
        ]
      },
      {
        id: 'rx2', title: 'عارضه و تداخل', icon: '⚠️', items: [
          L('اثرهای ناخواسته', `<b>side effect</b> اثری از درمان است که با هدف درمان ربطی ندارد یا ادامه آن است؛ معمولاً ناخواسته. <b>contraindication</b> دلیلی برای ندادن یک دارو به یک فرد است: بیماری‌ها، داروهای دیگر، حساسیت یا سابقه خانوادگی.${tbl([['واژه', 'معنی'], [e('side effect'), 'عارضه جانبی'], [e('contraindication'), 'منع مصرف (contra-: ضد)'], [e('anaphylaxis'), 'واکنش حساسیتی شدید؛ تنگی نفس و افت فشار']])}`),
          M(`${e('<b>contraindication</b>')} یعنی…`, ['دلیلی که مصرف یک دارو را نامطلوب یا خطرناک می‌کند', 'اثر درمانی دارو', 'دوز دارو', 'نام تجاری'], 'contra- (ضد) + indication.'),
          M(`${e('<b>anaphylaxis</b>')} یعنی…`, ['واکنش حساسیتی شدید که می‌تواند کشنده باشد', 'عارضه جانبی خفیف', 'تحمل دارویی', 'هم‌افزایی دو دارو'], 'An extreme allergic reaction.'),
          L('تداخل دو دارو', `${fig('drug-interactions')}${vs(['synergy • potentiation', 'دو دارو با هم اثری بیشتر از هر کدام به‌تنهایی'], ['antagonist', 'ماده‌ای که با اثر دارو مقابله می‌کند'])}${pearl('در کیس چلسی، lorazepam پیش از عمل با داروی بیهوشی synergy دارد و القای بیهوشی را نرم‌تر می‌کند.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['synergy', 'هم‌افزایی'], ['antagonist', 'مخالف‌اثر'], ['side effect', 'عارضه جانبی'], ['anaphylaxis', 'حساسیت شدید']]),
          T('potentiation یعنی دو دارو با هم قوی‌تر عمل می‌کنند.', true, 'Increased potency created by two drugs acting together.'),
          M('دارویی که جلوی اثر داروی دیگر را می‌گیرد…', ['antagonist', 'synergist', 'analgesic', 'generic'], 'antagonist = opposes the action of a drug.'),
          B('کهیر پس از مصرف دارو نشانه یک عارضه ___ است.', ['آلرژیک', 'درمانی', 'ژنریک'], 'نشانه‌های آلرژی مثل کهیر و بثورات.'),
          W('واژه‌ای بساز به معنی «کار با هم»', ['syn-', 'erg/o', '-y'], ['anti-', 'contra-', 'chron/o'], 'syn- + erg/o + -y = synergy.'),
          S('املای «منع مصرف» را بنویس', 'contraindication', 'contra- + indication.', 'contra…'),
          N('t2f:rx')
        ]
      },
      {
        id: 'rx3', title: 'تحمل، وابستگی و داروی گیاهی', icon: '🌿', items: [
          L('مصرف طولانی', `داروهای اثرگذار بر دستگاه عصبی مرکزی ممکن است به <b>substance dependence</b> (وابستگی روانی یا جسمی) برسند. با مصرف تکراری <b>tolerance</b> پیدا می‌شود: همان دوز اثر کمتری دارد و باید دوز را بالا برد. قطع ناگهانی یا کم کردن دارو، <b>withdrawal</b> (سندرم ترک) می‌سازد.${vs(['tolerance', 'همان دوز، اثر کمتر'], ['withdrawal', 'نشانه‌ها پس از قطع دارو'])}`),
          M(`${e('<b>tolerance</b>')} یعنی…`, ['همان دوز دیگر اثر قبلی را ندارد', 'دارو را خوب تحمل می‌کند و عارضه ندارد', 'حساسیت شدید', 'هم‌افزایی'], 'loss of effectiveness with chronic use.'),
          T('withdrawal نشانه‌هایی است که پس از قطع ناگهانی دارو پیدا می‌شود.', true, 'abrupt cessation or reduction of a drug.'),
          M('نیاز مزمن و اجباری به دارو با وجود آسیب‌هایش…', ['substance dependence', 'tolerance', 'efficacy', 'prophylaxis'], 'psychological or physical.'),
          L('داروی گیاهی', `<b>herbal medicine</b> یا <b>phytomedicine</b> (phyt/o: گیاه) درمان با گیاهان است. نگرانی‌ها: خلوص، ایمنی، غلظت، اثربخشی و تداخل با داروها. FDA داروهای گیاهی را آزمایش نمی‌کند؛ پس بیمار باید مصرف آن‌ها را به پزشک بگوید. دفتر مکمل‌های غذایی آمریکا (ODS) پژوهش‌ها را هماهنگ می‌کند.`),
          M(`${e('<b>phytomedicine</b>')} یعنی…`, ['داروی گیاهی', 'داروی شیمیایی', 'داروی تزریقی', 'داروی بدون نسخه'], 'phyt/o = گیاه.'),
          P('هر واژه را به معنی‌اش وصل کن', [['tolerance', 'کاهش اثر همان دوز'], ['withdrawal', 'سندرم ترک'], ['phytomedicine', 'گیاه‌درمانی'], ['efficacy', 'اثربخشی']]),
          T('FDA همه داروهای گیاهی را پیش از فروش آزمایش می‌کند.', false, 'نادرست؛ FDA داروهای گیاهی را آزمایش یا تأیید نمی‌کند.'),
          L('مرور سطح «دارو و ایمنی»', recap(['drug • OTC بدون نسخه • Rx نسخه • efficacy اثربخشی • FDA', 'generic name کوچک (acetaminophen) • brand name بزرگ (Tylenol) • USP، ASHP، PDR، pharmacist', 'side effect • contraindication منع مصرف • anaphylaxis • synergy و potentiation • antagonist', 'substance dependence • tolerance • withdrawal • herbal medicine = phytomedicine • ODS'])),
          B('وقتی بیمار برای همان اثر به دوز بیشتر نیاز دارد، دچار ___ شده است.', ['tolerance', 'withdrawal', 'synergy'], 'tolerance.'),
          S('املای «تحمل دارویی» را بنویس', 'tolerance', 'toler + -ance.', 'toler…'),
          N('d2t:rx')
        ]
      },
      /* ================= سطح ۲: راه‌ها و شکل‌های دارو ================= */
      {
        id: 'rx4', title: 'از دهان، زیر زبان، از پوست', icon: '👅', items: [
          L('راه‌های جذبی', `${fig('routes-body')}${tbl([['راه', 'معنی'], [e('oral • po'), 'از راه دهان (per os)'], [e('sublingual • SL'), 'زیر زبان'], [e('rectal'), 'از راه مقعد با شیاف یا تنقیه'], [e('topical'), 'روی سطح پوست'], [e('transdermal'), 'جذب از راه پوست، مثل برچسب']])}<b>absorption</b> یعنی ورود دارو به گردش خون از راه دستگاه گوارش یا یک غشای دیگر.`),
          M(`${e('<b>sublingual</b>')} یعنی…`, ['زیر زبان', 'از راه دهان و بلع', 'روی پوست', 'از راه مقعد'], 'sub- (زیر) + lingu/o (زبان) + -al.'),
          M(`${e('<b>transdermal</b>')} یعنی…`, ['جذب از راه پوست، مثل برچسب', 'تزریق زیرجلدی', 'روی سطح پوست بدون جذب', 'استنشاقی'], 'trans- (از راه) + derm/o.'),
          L('استنشاق و چکاندن', `<b>inhalation</b>: ورود دارو از دستگاه تنفس، مثل aerosol یا nebulizer؛ <b>instillation</b>: چکاندن یا ریختن آرام مایع در حفره یا روی سطح، مثل قطره گوش و چشم.${fig(['inhaler-img', 'eyedrops-img'], ['inhalation با metered-dose inhaler', 'instillation قطره چشم در کیسه ملتحمه'])}`),
          M('در این تصویر، بیمار دارو را با افشانه دوزدار نفس می‌کشد. این راه…', ['inhalation', 'instillation', 'topical', 'sublingual'], 'inhalation through the respiratory system.', null, F('inhaler-img', 'افشانه دوزدار')),
          M('چکاندن قطره در کیسه پایینی ملتحمه چشم…', ['instillation', 'inhalation', 'injection', 'absorption'], 'instillation = liquid dropped slowly.', null, F('eyedrops-img', 'قطره چشم')),
          P('هر اختصار یا راه را به معنی‌اش وصل کن', [['po', 'خوراکی'], ['SL', 'زیرزبانی'], ['topical', 'روی پوست'], ['rectal', 'مقعدی']]),
          T('po از لاتین per os به معنی «از راه دهان» است.', true, 'po, PO = by mouth.'),
          B('داروی ضددرد به شکل برچسب پوستی، راه ___ است.', ['transdermal', 'sublingual', 'rectal'], 'trans- + derm/o + -al.'),
          S('املای «زیرزبانی» را بنویس', 'sublingual', 'sub- + lingu/o + -al.', 'sub…'),
          N('t2f:rx')
        ]
      },
      {
        id: 'rx5', title: 'تزریق‌ها', icon: '💉', items: [
          L('راه‌های تزریقی', `<b>injection</b> با سوزن و سرنگ است و راه‌های تزریقی را <b>parenteral</b> می‌نامند (جدا از دستگاه گوارش).${tbl([['راه', 'معنی'], [e('intradermal • ID'), 'درون پوست'], [e('subcutaneous • SC, SQ'), 'زیر پوست؛ hypodermic'], [e('intramuscular • IM'), 'درون ماهیچه'], [e('intravenous • IV'), 'درون سیاهرگ']])}`),
          L('زاویه سوزن', `${fig(['injection-img', 'injection-angles'], ['یک شکل آموزشی', 'هرچه عمیق‌تر، زاویه بیشتر'])}${memo('۹۰ - ۴۵ - ۱۵: ماهیچه، زیرجلد، پوست؛ از عمیق به سطحی.')}`),
          M('تزریق داخل‌عضلانی (IM) با چه زاویه‌ای است؟', ['۹۰ درجه', '۴۵ درجه', '۱۵ درجه', '۵ درجه'], 'IM 90°.', null, F('injection-img', 'زاویه‌های تزریق')),
          M('سوزن با زاویه ۱۵ درجه فقط وارد لایه پوست می‌شود. این تزریق…', ['ID', 'SC', 'IM', 'IV'], 'intradermal.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['ID', 'داخل‌پوستی'], ['SC', 'زیرجلدی'], ['IM', 'داخل‌عضلانی'], ['IV', 'داخل‌وریدی']]),
          L('نخاع و تزریق مایع زیر پوست', `${tbl([['راه', 'معنی'], [e('epidural'), 'تزریق در فضای بین پرده‌های نخاع و ستون فقرات'], [e('intrathecal'), 'تزریق از پرده‌ها به مایع نخاع (spinal)'], [e('hypodermoclysis'), 'تزریق آهسته محلول زیر پوست؛ جایگزین سرم وریدی']])}${pearl('بی‌حسی epidural در زایمان رایج است: دارو در فضای اپیدورال، بیرون از پرده سخت‌شامه، تزریق می‌شود.')}`),
          M(`${e('<b>intrathecal</b>')} یعنی تزریق…`, ['به مایع نخاع از میان پرده‌ها', 'درون سیاهرگ', 'زیر پوست', 'درون مفصل'], 'intra- + thec/o (غلاف) + -al.'),
          T('همه راه‌های تزریقی را parenteral می‌نامند.', true, 'Routes by injection.'),
          W('واژه‌ای بساز به معنی «داخل‌وریدی»', ['intra-', 'ven/o', '-ous'], ['sub-', 'cutane/o', 'trans-'], 'intra- + ven/o + -ous = intravenous.'),
          S('املای «زیرجلدی» را بنویس', 'subcutaneous', 'sub- + cutane/o + -ous.', 'subcut…'),
          N('m2r:rx')
        ]
      },
      {
        id: 'rx6', title: 'شکل‌های دارو و ظرف‌ها', icon: '🧴', items: [
          L('مایع، نیمه‌جامد، جامد', `${fig('drug-forms')}${pearl('suspension ذره‌های جامد معلق در مایع است و پیش از مصرف باید تکان داده شود؛ برچسب «Shake well» برای همین است.')}`),
          P('هر شکل را به توضیحش وصل کن', [['elixir', 'مایع شیرین و الکلی خوراکی'], ['suspension', 'باید تکان داده شود'], ['tincture', 'دارو در محلول الکلی'], ['aqueous solution', 'حل‌شده در آب']]),
          M(`${e('<b>suppository</b>')} یعنی…`, ['شیاف؛ در سوراخ بدن ذوب می‌شود', 'قرص مکیدنی', 'پماد', 'کپسول ژلاتینی'], 'A substance that melts easily when inserted into a body opening.'),
          M(`${e('<b>ointment</b>')} یعنی…`, ['پماد؛ دارو در پایه‌ای که روی پوست می‌ماند', 'لوسیون', 'افشانه', 'محلول در آب'], 'ung = ointment.'),
          L('ظرف‌های داروی تزریقی', `${tbl([['واژه', 'معنی'], [e('ampule'), 'ظرف کوچک دربسته شیشه‌ای یا پلاستیکی برای محلول استریل'], [e('vial'), 'شیشه کوچک با درپوش'], [e('syringe'), 'ابزار تزریق مایع'], [e('bolus'), 'مقدار غلیظ دارو که سریع در رگ تزریق می‌شود']])}${fig(['ampule-vial', 'syringe-parts'], ['آمپول (چپ بالا)، ویال (راست بالا)، سرنگ', 'اجزای سرنگ و سوزن'])}`),
          M('در شکل اجزای سرنگ، قسمتی که با فشار آن مایع بیرون می‌رود…', ['plunger', 'barrel', 'bevel', 'hub'], 'plunger = پیستون؛ barrel = بدنه.', null, F('syringe-parts', 'اجزای سرنگ')),
          L('کاتتر مرکزی', `<b>catheter</b> لوله باریکی است که به حفره، اندام یا رگ می‌رود. <b>PICC</b> (peripherally inserted central catheter) از یک سیاهرگ بازو وارد می‌شود و تا ورید اجوف فوقانی می‌رسد؛ برای داروهای طولانی‌مدت و تغذیه وریدی.${fig('picc-img', 'مسیر PICC از رگ بازو تا ورید اجوف فوقانی')}`),
          T('bolus یعنی تزریق آهسته و قطره‌قطره دارو.', false, 'نادرست؛ bolus مقدار غلیظی است که سریع تزریق می‌شود.'),
          L('مرور سطح «راه‌ها و شکل‌ها»', recap(['جذبی: po خوراکی، SL زیرزبانی، rectal، topical، transdermal • inhalation • instillation', 'parenteral: ID ۱۵°، SC ۴۵°، IM ۹۰°، IV • epidural، intrathecal، hypodermoclysis', 'مایع: aerosol، solution، elixir، emulsion، lotion، suspension، tincture • نیمه‌جامد: cream، ointment', 'جامد: capsule، lozenge، suppository، tablet • ampule، vial، syringe، bolus، PICC'])),
          B('قرص مکیدنی مثل قرص سرفه ___ است.', ['lozenge', 'capsule', 'suppository'], 'lozenge = dissolved in the mouth.'),
          S('املای «سرنگ» را بنویس', 'syringe', 'sy-ringe: «سِرینج».', 'syr…'),
          N('f2t:rx')
        ]
      },
      /* ================= سطح ۳: زبان نسخه ================= */
      {
        id: 'rx7', title: 'اجزای واژه دارو', icon: '🧩', items: [
          L('پیشوندها و پسوندها', `${fig('drug-parts')}${tbl([['جزء', 'معنی', 'نمونه'], [e('anti-'), 'ضد', 'antiemetic (ضداستفراغ) • antipyretic (تب‌بر)'], [e('-lytic'), 'حل‌کننده، کاهنده', 'thrombolytic (لخته‌شکن) • mucolytic (خلط‌شکن) • anxiolytic (ضداضطراب)'], [e('-mimetic'), 'تقلیدکننده', 'sympathomimetic'], [e('-tropic'), 'اثرگذار بر', 'psychotropic (روان) • chronotropic (ریتم)']])}`),
          M(`${e('<b>antipyretic</b>')} یعنی…`, ['تب‌بر', 'ضدچرک', 'ضددرد', 'ضداستفراغ'], 'anti- + pyret/o (تب) + -ic.'),
          M(`${e('<b>thrombolytic</b>')} یعنی…`, ['حل‌کننده لخته خون', 'لخته‌ساز', 'گشادکننده رگ', 'ضدتب'], 'thromb/o (لخته) + -lytic.'),
          P('هر واژه را به معنی‌اش وصل کن', [['antiemetic', 'ضداستفراغ'], ['mucolytic', 'خلط‌شکن'], ['psychotropic', 'اثرگذار بر روان'], ['analgesic', 'مسکن']]),
          L('ریشه‌های دارو', `${tbl([['ریشه', 'معنی', 'نمونه'], [e('chem/o'), 'ماده شیمیایی', 'chemotherapy'], [e('hypn/o'), 'خواب', 'hypnosis، hypnotic (خواب‌آور)'], [e('narc/o'), 'منگی، بی‌حسی', 'narcotic (مخدر)'], [e('pharm, pharmac/o'), 'دارو', 'pharmacy، pharmacology'], [e('vas/o'), 'رگ', 'vasodilation'], [e('tox/o'), 'سم', 'toxicity (سمیت)']])}${vs(['contra-', 'ضد، مخالف: contraceptive (ضدبارداری)'], ['counter-', 'در برابر: countertransport'])}`),
          M(`${e('<b>hypnotic</b>')} دارویی است که…`, ['خواب می‌آورد', 'درد را می‌برد', 'تب را پایین می‌آورد', 'اضطراب می‌آورد'], 'hypn/o = خواب.'),
          M('در کیس ۳-۲، Ativan برای عصبی بودن داده می‌شود. پس یک داروی… است.', ['anxiolytic', 'antiemetic', 'bronchodilator', 'thrombolytic'], 'anxi/o (اضطراب) + -lytic.'),
          T('sympathomimetic یعنی دارویی که اثر دستگاه عصبی سمپاتیک را تقلید می‌کند.', true, 'sympath/o + -mimetic.'),
          B('دارویی که استفراغ را پیشگیری می‌کند ___ است.', ['antiemetic', 'antipyretic', 'narcotic'], 'anti- + emet/o + -ic.'),
          W('واژه‌ای بساز به معنی «خلط‌شکن»', ['muc/o', '-lytic'], ['-mimetic', 'thromb/o', '-tropic'], 'muc/o + -lytic = mucolytic.'),
          S('املای «تب‌بر» را بنویس', 'antipyretic', 'anti- + pyret/o + -ic.', 'anti…'),
          N('r2m:rx')
        ]
      },
      {
        id: 'rx8', title: 'زمان مصرف', icon: '⏰', items: [
          L('چند بار در روز؟', `بیشتر اختصارهای زمان مصرف از لاتین آمده‌اند:${fig('dose-clock')}${tbl([['اختصار', 'معنی', 'لاتین'], [e('bid, b.i.d.'), 'روزی دو بار', 'bis in die'], [e('tid, t.i.d.'), 'روزی سه بار', 'ter in die'], [e('qid, q.i.d.'), 'روزی چهار بار', 'quater in die'], [e('qh • q4h'), 'هر ساعت • هر ۴ ساعت', 'quaque hora'], [e('qam'), 'هر روز صبح', 'quaque ante meridiem']])}`),
          P('هر اختصار را به معنی‌اش وصل کن', [['bid', 'روزی دو بار'], ['tid', 'روزی سه بار'], ['qid', 'روزی چهار بار'], ['qam', 'هر روز صبح']]),
          M('«۱ قرص tid» یعنی در یک روز چند قرص؟', ['۳', '۲', '۴', '۱'], 'tid = ter in die = سه بار.'),
          L('غذا، خواب و نیاز', `${tbl([['اختصار', 'معنی', 'لاتین'], [e('ac'), 'پیش از غذا', 'ante cibum'], [e('pc'), 'پس از غذا', 'post cibum'], [e('hs'), 'هنگام خواب', 'hora somni'], [e('prn'), 'در صورت نیاز', 'pro re nata'], [e('ad lib'), 'به دلخواه', 'ad libitum']])}${memo('a = ante (پیش) و p = post (پس): ac پیش از غذا و pc پس از غذا.')}`),
          M(`${e('<b>prn</b>')} یعنی…`, ['در صورت نیاز', 'فوری', 'هر شب', 'پیش از غذا'], 'pro re nata.'),
          M('داروی خواب‌آوری که هنگام خواب خورده می‌شود را با کدام اختصار می‌نویسند؟', ['hs', 'ac', 'pc', 'bid'], 'hora somni.'),
          T('ac یعنی پس از غذا.', false, 'نادرست؛ ac پیش از غذا (ante cibum) و pc پس از غذا (post cibum) است.'),
          O('این زمان‌ها را از کمترین به بیشترین دفعه در روز بچین', ['qam', 'bid', 'tid', 'qid'], '۱، ۲، ۳ و ۴ بار.'),
          B('دستور «هر ۶ ساعت» را با اختصار ___ می‌نویسند.', ['q6h', 'qid', 'qh'], 'q_h: هر _ ساعت.'),
          S('املای اختصار «روزی دو بار» را بنویس', 'bid', 'bis in die.', 'b…'),
          N('ab:rx')
        ]
      },
      {
        id: 'rx9', title: 'خواندن نسخه', icon: '📜', items: [
          L('اجزای یک دستور دارویی', `${fig('rx-anatomy')}هر دستور دارویی پنج بخش دارد: <b>نام دارو</b>، <b>مقدار</b>، <b>راه</b>، <b>دفعات</b> و گاهی <b>شرط</b>، مثل prn.`),
          O('اجزای «Ativan 1 mg po bid prn» را به ترتیب بچین', ['نام دارو', 'مقدار', 'راه', 'دفعات', 'شرط'], 'Ativan • 1 mg • po • bid • prn.'),
          L('واحدها و شکل‌ها', `${tbl([['اختصار', 'معنی'], [e('mg / mcg'), 'میلی‌گرم / میکروگرم'], [e('mL'), 'میلی‌لیتر'], [e('U / IU'), 'واحد / واحد بین‌المللی'], [e('cap • tab'), 'کپسول • قرص'], [e('susp • elix • tinct'), 'سوسپانسیون • اکسیر • تنتور'], [e('supp • ung'), 'شیاف • پماد']])}`),
          M(`${e('<b>mcg</b>')} یعنی…`, ['میکروگرم', 'میلی‌گرم', 'میلی‌لیتر', 'واحد بین‌المللی'], 'mcg = microgram.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['tab', 'قرص'], ['cap', 'کپسول'], ['supp', 'شیاف'], ['ung', 'پماد']]),
          L('دستورهای دیگر نسخه', `${tbl([['اختصار', 'معنی'], [e('c̄ / s̄'), 'همراه با / بدون'], [e('ss'), 'نصف'], [e('DAW'), 'همان‌طور که نوشته شده تحویل شود (بدون جایگزین)'], [e('DS'), 'دو برابر قوی'], [e('SR • SA • LA'), 'آهسته‌رهش • اثر پیوسته • طولانی‌اثر'], [e('NSAID'), 'داروی ضدالتهاب غیراستروئیدی'], [e('APAP / ASA'), 'استامینوفن (acetaminophen) / آسپرین (aspirin)']])}${pearl('DAW روی نسخه یعنی داروساز نباید نام تجاری را با ژنریک عوض کند.')}`),
          M('در کیس ۳-۲: Flovent یک پاف ۵۰ mcg در هر سوراخ بینی، b.i.d. در یک روز چند میکروگرم؟', ['۲۰۰', '۱۰۰', '۲۵۰', '۵۰۰'], '۵۰ × ۲ سوراخ × ۲ بار = ۲۰۰.'),
          M('«Arnica 3 tabs SL t.i.d.» در یک روز چند قرص؟', ['۹', '۶', '۱۲', '۳'], '۳ قرص × ۳ بار.'),
          T('DS یعنی دو برابر قوی (double strength).', true, 'DS = double strength.'),
          L('مرور سطح «زبان نسخه»', recap(['anti-، contra-، counter- • ‎-lytic، ‎-mimetic، ‎-tropic • chem/o، hypn/o، narc/o، pharmac/o، vas/o، tox/o', 'bid ۲ • tid ۳ • qid ۴ • qh و q4h • qam • ac پیش و pc پس از غذا • hs خواب • prn در صورت نیاز • ad lib', 'نسخه: نام دارو + مقدار + راه + دفعات + شرط • mg، mcg، mL، U', 'cap، tab، susp، elix، tinct، supp، ung • c̄ و s̄ • ss • DAW • DS • SR • NSAID • APAP • ASA'])),
          S('املای «آسپرین» را بنویس', 'aspirin', 'ASA = acetylsalicylic acid.', 'asp…'),
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
    { id: 'lx-0', w: 'lx', lv: 0, name: 'تکه‌یاب', title: 'شکننده واژه‌ها', shape: 'puzzle', color: '#748FFC', acc: ['sparkle'], bio: 'هر واژه بیماری را به ریشه و پسوند می‌شکند: path/o بیماری، py/o چرک، scler/o سفت و tox/o سم؛ و معنی را از آخر می‌خواند.' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'آیتیس', title: 'استاد پسوندهای بیماری', shape: 'flame', color: '#5C7CFA', acc: ['glasses'], bio: 'فرق ‎-itis (التهاب)، ‎-megaly (بزرگی)، ‎-rhage (خون‌ریزی شدید) و ‎-rhexis (پارگی) را می‌داند و rr دوتایی را هرگز جا نمی‌اندازد.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'تنگ‌بین', title: 'رمزگشای واژه‌پسوندها', shape: 'tube', color: '#4C6EF5', acc: ['crown'], bio: 'stenosis (تنگی)، ectasia (گشادی)، malacia (نرمی)، ptosis (افتادگی) و sclerosis (سفتی) را روی هر اندامی سوار می‌کند.' },
    { id: 'mc-0', w: 'mc', lv: 0, name: 'کوکو', title: 'باکتری گرد خوشه‌ای', shape: 'cocci', color: '#69DB7C', acc: ['sparkle'], bio: 'گرد است و دوستانش یا خوشه انگورند (staphylococci) یا زنجیر (streptococci)؛ با رنگ‌آمیزی گرم بنفش می‌شود (Gm+).' },
    { id: 'mc-1', w: 'mc', lv: 1, name: 'باسیلو', title: 'باکتری میله‌ای', shape: 'bacillus', color: '#40C057', acc: ['glasses'], bio: 'میله‌ای است؛ پسرعموهایش vibrio خمیده و spirochete پیچ‌پیچی‌اند. می‌داند nosocomial یعنی عفونتی که در بیمارستان گرفته شده.' },
    { id: 'mc-2', w: 'mc', lv: 2, name: 'ویروسک', title: 'انگل درون سلول', shape: 'virus', color: '#2F9E44', acc: ['crown'], bio: 'فقط درون سلول زنده تکثیر می‌شود؛ endemic، epidemic و pandemic را از بر است و فرق fungus، protozoon و helminth را می‌داند.' },
    { id: 'rs-0', w: 'rs', lv: 0, name: 'فاگو', title: 'خورنده میکروب', shape: 'blob', color: '#FFA94D', acc: ['sparkle'], bio: 'گلبول سفید شکمویی است که باکتری را می‌بلعد و هضم می‌کند (phagocytosis)؛ باقی‌مانده کارش چرک (pus) است.' },
    { id: 'rs-1', w: 'rs', lv: 1, name: 'ادمک', title: 'قطره تورم', shape: 'drop', color: '#F76707', acc: ['glasses'], bio: 'چهار نشانه التهاب را می‌شناسد: گرما، درد، سرخی و تورم؛ و می‌داند edema، effusion و ascites هر کدام مایع را کجا جمع می‌کنند.' },
    { id: 'rs-2', w: 'rs', lv: 2, name: 'ایمونو', title: 'نگهبان ایمنی', shape: 'shield', color: '#E8590C', acc: ['crown'], bio: 'ایمنی ذاتی و اکتسابی را می‌شناسد، توده خوش‌خیم را از بدخیم جدا می‌کند و می‌داند hernia و prolapse یعنی بیرون‌زدگی و افتادگی.' },
    { id: 'dx-0', w: 'dx', lv: 0, name: 'گوشی', title: 'معاینه‌گر IPPA', shape: 'stetho', color: '#3BC9DB', acc: ['sparkle'], bio: 'معاینه را به ترتیب انجام می‌دهد: نگاه (inspection)، لمس (palpation)، ضربه (percussion) و شنیدن (auscultation).' },
    { id: 'dx-1', w: 'dx', lv: 1, name: 'دماسنج', title: 'نگهبان علائم حیاتی', shape: 'thermo', color: '#15AABF', acc: ['glasses'], bio: 'TPR و BP را ثبت می‌کند، cyanosis و pallor را از رنگ پوست می‌خواند و فرق sign (نشانه عینی) با symptom (شکایت بیمار) را می‌داند.' },
    { id: 'dx-2', w: 'dx', lv: 2, name: 'رادیو', title: 'خواننده تصویربرداری', shape: 'monitor', color: '#1098AD', acc: ['crown'], bio: 'radiograph، CT، MRI، PET و ultrasound را از هم جدا می‌کند و می‌داند ‎-graph ابزار است، ‎-graphy روش و ‎-gram خود تصویر.' },
    { id: 'tx-0', w: 'tx', lv: 0, name: 'اِکتومی', title: 'استاد پسوندهای جراحی', shape: 'glove', color: '#F06595', acc: ['sparkle'], bio: '‎-ectomy برمی‌دارد، ‎-tomy می‌بُرد، ‎-stomy دهانه می‌سازد، ‎-plasty بازسازی می‌کند و ‎-rhaphy بخیه می‌زند.' },
    { id: 'tx-1', w: 'tx', lv: 1, name: 'هموستات', title: 'دستیار اتاق عمل', shape: 'clipboard', color: '#E64980', acc: ['glasses'], bio: 'scalpel، forceps، retractor و curet را از هم می‌شناسد و EBL، PACU و I&D را در برگه عمل می‌خواند.' },
    { id: 'tx-2', w: 'tx', lv: 2, name: 'هولیس', title: 'حکیم طب مکمل', shape: 'heart', color: '#C2255C', acc: ['crown'], bio: 'بیمار را یک کل می‌بیند (holistic)؛ acupuncture، biofeedback و meditation را می‌شناسد و درمان تسکینی (palliative) را از درمان قطعی جدا می‌کند.' },
    { id: 'rx-0', w: 'rx', lv: 0, name: 'کپسولک', title: 'شناسای شکل دارو', shape: 'capsule', color: '#9775FA', acc: ['sparkle'], bio: 'tablet، capsule، elixir، suspension و ointment را می‌شناسد و می‌داند suspension را باید پیش از مصرف تکان داد.' },
    { id: 'rx-1', w: 'rx', lv: 1, name: 'سرنگی', title: 'استاد راه‌های تجویز', shape: 'syringe', color: '#7950F2', acc: ['glasses'], bio: 'IM با زاویه ۹۰، SC با ۴۵ و ID با ۱۵ درجه؛ po از دهان، SL زیر زبان و transdermal از راه پوست.' },
    { id: 'rx-2', w: 'rx', lv: 2, name: 'نسخه‌خوان', title: 'رمزگشای دستور دارو', shape: 'book', color: '#6741D9', acc: ['crown'], bio: 'bid، tid، qid، prn، ac، pc و hs را مثل زبان مادری می‌خواند و می‌داند synergy، antagonist و contraindication یعنی چه.' }
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
      id: 'r1', w: 'lx', title: 'گزارش بخش داخلی', who: 'آقای ۶۸ ساله با تنگی نفس',
      brief: 'پرستار شیفت شب گزارش آقای رحیمی را با واژه‌های پزشکی نوشته است. برای دانشجوی تازه‌وارد، هر واژه را با شکستن به ریشه و پسوند ترجمه کن.',
      chart: [['تصویر قفسه سینه', 'cardiomegaly'], ['معاینه شکم', 'hepatomegaly'], ['ریه', 'bronchospasm با خس‌خس'], ['سابقه', 'arteriosclerosis']],
      fig: { a: ['wordparts'], l: ['ریشه + پسوند'] },
      steps: [
        M('واژه', 'cardiomegaly یعنی…', ['بزرگی قلب', 'درد قلب', 'التهاب قلب', 'مرگ بافت قلب'], 'cardi/o (قلب) + -megaly (بزرگی).'),
        M('واژه', 'hepatomegaly در معاینه شکم یعنی…', ['کبد بزرگ شده است', 'کبد پاره شده است', 'کبد نرم شده است', 'کبد التهاب دارد'], 'hepat/o + -megaly.'),
        P('پسوند', 'هر واژه را به معنی‌اش وصل کن', [['bronchospasm', 'گرفتگی ناگهانی نایژه'], ['bronchostenosis', 'تنگی نایژه'], ['arteriosclerosis', 'سخت شدن سرخرگ'], ['cephalgia', 'سردرد']]),
        T('پیشوند', 'اگر نبض بیمار تند باشد، در پرونده می‌نویسند bradycardia.', false, 'نادرست؛ تند = tachy-: tachycardia. brady- یعنی کند.'),
        M('ریشه', 'بیمار تب دارد. کدام ریشه یعنی «تب»؟', ['pyr/o', 'py/o', 'path/o', 'tox/o'], 'pyr/o و pyret/o: تب، آتش؛ py/o چرک است.'),
        S('املا', 'املای «بزرگی کبد» را بنویس', 'hepatomegaly', 'hepat/o + -megaly.', 'hepato…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: 'درد پهلو', who: 'آقای ۴۵ ساله با درد کولیکی',
      brief: 'آقای کریمی با درد شدید پهلو و درد هنگام ادرار آمده است. سونوگرافی یک سنگ در مسیر ادرار نشان داده است. واژه‌های پرونده را رمزگشایی کن.',
      chart: [['شکایت', 'urodynia'], ['تشخیص', 'urolith؛ lithiasis'], ['ادرار', 'pyuria ندارد'], ['برنامه', 'lithotripsy']],
      fig: { a: ['disease-roots'], l: ['ریشه‌های بیماری'] },
      steps: [
        M('علامت', 'urodynia یعنی…', ['درد هنگام ادرار', 'سنگ ادراری', 'خون در ادرار', 'التهاب مثانه'], 'ur/o (ادرار) + -odynia (درد).'),
        M('تشخیص', 'urolith یعنی…', ['سنگ در دستگاه ادراری', 'تومور مثانه', 'کیست کلیه', 'گشادی میزنای'], 'ur/o + lith (سنگ).'),
        P('ریشه', 'هر ریشه را به معنی‌اش وصل کن', [['lith/o', 'سنگ'], ['cyst/o', 'کیسه، مثانه'], ['py/o', 'چرک'], ['alg/o', 'درد']]),
        M('درمان', 'lithotripsy یعنی…', ['خرد کردن سنگ', 'برداشتن سنگ با برش', 'دیدن سنگ با آندوسکوپ', 'سنگ‌سازی'], 'lith/o + -tripsy (خرد کردن).'),
        T('واژه', 'اگر مثانه هم التهاب داشته باشد، در پرونده می‌نویسند cystitis.', true, 'cyst/o + -itis.'),
        S('املا', 'املای «سنگ‌سازی» را بنویس', 'lithiasis', 'lith + -iasis.', 'lith…')
      ]
    },
    /* ================= میکروب‌ها و انواع بیماری ================= */
    {
      id: 'r3', w: 'mc', title: 'عفونت زخم پس از عمل', who: 'خانم ۵۲ ساله، روز پنجم پس از جراحی',
      brief: 'زخم جراحی خانم احمدی قرمز و چرکی شده است. آزمایشگاه از ترشح زخم کشت گرفته و زیر میکروسکوپ کوکسی‌های خوشه‌ای گرم مثبت دیده است.',
      chart: [['Gram stain', 'Gm+ cocci in clusters'], ['C&S', 'MRSA'], ['نوع عفونت', 'nosocomial'], ['نکته', 'MDR؛ ایزوله تماسی']],
      fig: { a: ['bact-staph'], l: ['استافیلوکوک‌ها'] },
      steps: [
        M('میکروب', 'کوکسی‌های گرم مثبت که خوشه انگوری می‌سازند کدام‌اند؟', ['staphylococci', 'streptococci', 'bacilli', 'spirochetes'], 'staphylo- یعنی خوشه انگوری؛ strepto- زنجیره است.'),
        T('رنگ‌آمیزی', 'Gm+ یعنی باکتری در رنگ‌آمیزی گرم بنفش می‌ماند.', true, 'گرم مثبت بنفش و گرم منفی قرمز دیده می‌شود.'),
        M('شیوع', 'عفونتی که بیمار در بیمارستان گرفته است…', ['nosocomial', 'endemic', 'congenital', 'idiopathic'], 'nos/o (بیماری) + comial (بیمارستان).'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['MRSA', 'استافیلوکوک مقاوم به متی‌سیلین'], ['C&S', 'کشت و آنتی‌بیوگرام'], ['MDR', 'مقاوم به چند دارو'], ['Staph', 'استافیلوکوک']]),
        M('واژه', 'MRSA یک pathogen است. pathogen یعنی…', ['عامل بیماری‌زا', 'فلور طبیعی بدن', 'آنتی‌بیوتیک', 'گلبول سفید'], 'path/o (بیماری) + -gen (ایجادکننده).'),
        S('املا', 'املای «عفونت بیمارستانی» (صفت) را بنویس', 'nosocomial', 'nos/o + comial.', 'noso…')
      ]
    },
    {
      id: 'r4', w: 'mc', title: 'فصل آنفولانزا', who: 'گزارش مرکز بهداشت شهرستان',
      brief: 'در دو هفته گذشته شمار بیماران مبتلا به آنفولانزا در شهر ناگهان بالا رفته است. کارشناس بهداشت گزارش را برای پزشکان درمانگاه می‌فرستد.',
      chart: [['عامل', 'influenza virus'], ['راه انتقال', 'قطره‌های تنفسی؛ تماس'], ['سیر بیماری', 'acute'], ['وضعیت منطقه', 'epidemic']],
      fig: { a: ['spread-scale'], l: ['بومی، همه‌گیر، جهانی'] },
      steps: [
        M('شیوع', 'افزایش ناگهانی بیماری در یک منطقه در یک زمان…', ['epidemic', 'endemic', 'pandemic', 'sporadic'], 'epi- (روی) + dem/o (مردم).'),
        T('شیوع', 'اگر همین بیماری در چند قاره پخش شود، آن را pandemic می‌نامند.', true, 'pan- یعنی همه.'),
        M('عامل', 'ویروس با باکتری چه فرقی دارد؟', ['فقط درون سلول زنده تکثیر می‌شود', 'میله‌ای شکل است', 'با رنگ گرم بنفش می‌شود', 'آنتی‌بیوتیک آن را می‌کشد'], 'virus انگل اجباری درون سلول است.'),
        M('راه ورود', 'آنفولانزا از کدام portal of entry وارد بدن می‌شود؟', ['دستگاه تنفس', 'پوست سالم', 'دستگاه ادراری', 'خون از راه نیش حشره'], 'قطره‌های تنفسی وارد دستگاه تنفس می‌شوند.'),
        P('سیر', 'هر واژه را به معنی‌اش وصل کن', [['acute', 'ناگهانی و کوتاه'], ['chronic', 'طولانی و آهسته'], ['communicable', 'واگیردار'], ['etiology', 'علت بیماری']]),
        S('املا', 'املای «ویروس در خون» را بنویس', 'viremia', 'vir/o + -emia.', 'vir…')
      ]
    },
    /* ================= پاسخ بدن به بیماری ================= */
    {
      id: 'r5', w: 'rs', title: 'درد شکم سمت راست', who: 'پسر ۱۷ ساله در اورژانس',
      brief: 'علی از دیشب درد شکم دارد که به پایین و راست شکم رفته است. تب دارد و ناحیه درد گرم، قرمز و متورم است. جراح احتمال آپاندیسیت چرکی می‌دهد.',
      chart: [['معاینه', 'درد و حساسیت پایین راست شکم؛ تب'], ['آزمایش', 'افزایش گلبول سفید'], ['سونوگرافی', 'appendicitis با abscess'], ['برنامه', 'appendectomy']],
      fig: { a: ['inflammation-signs'], l: ['چهار نشانه التهاب'] },
      steps: [
        O('التهاب', 'چهار نشانه التهاب را بچین (به ترتیب مرجع)', ['heat', 'pain', 'redness', 'swelling'], 'گرما، درد، سرخی و تورم.'),
        M('واژه', 'appendicitis یعنی…', ['التهاب آپاندیس', 'برداشتن آپاندیس', 'فتق آپاندیس', 'تومور آپاندیس'], 'appendic/o + -itis.'),
        M('ضایعه', 'abscess یعنی…', ['چرک جمع‌شده در یک جا', 'التهاب پخش‌شده در بافت', 'راه غیرطبیعی بین دو اندام', 'توده پایه‌دار'], 'cellulitis التهاب پخش‌شده است و fistula یک راه غیرطبیعی.'),
        T('دفاع', 'pus از مایع و گلبول‌های سفیدی ساخته می‌شود که باکتری‌ها را بلعیده‌اند.', true, 'باقی‌مانده phagocytosis چرک است.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['purulent', 'چرکی'], ['suppuration', 'چرک کردن'], ['phagocytosis', 'بلعیدن میکروب'], ['edema', 'ورم']]),
        S('املا', 'املای «آبسه» را بنویس', 'abscess', 'دو s و یک c وسط: ab-scess.', 'abs…')
      ]
    },
    {
      id: 'r6', w: 'rs', title: 'سوزش سر دل', who: 'خانم ۵۸ ساله',
      brief: 'خانم صادقی سال‌هاست سوزش سر دل دارد. در رادیوگرافی با ماده حاجب (باریم)، بخشی از معده بالاتر از دیافراگم دیده شده است.',
      chart: [['تشخیص', 'hiatal hernia'], ['یافته همراه', 'esophagitis'], ['سابقه', 'polyp خوش‌خیم روده'], ['برنامه', 'herniorrhaphy در صورت نیاز']],
      fig: { a: ['hiatal-img'], l: ['فتق هیاتال'] },
      steps: [
        M('ضایعه', 'hernia یعنی…', ['بیرون‌زدن یک اندام از سوراخ غیرطبیعی', 'افتادن اندام به پایین', 'تنگی یک لوله', 'کیسه پر از مایع'], 'افتادن اندام prolapse یا ptosis است.'),
        T('فتق', 'در hiatal hernia بخشی از معده از دیافراگم به قفسه سینه می‌رود.', true, 'از سوراخ مری در دیافراگم (hiatus).'),
        M('نئوپلاسم', 'polyp یعنی…', ['توده‌ای که با پایه باریک چسبیده است', 'سرطان بافت همبند', 'چرک جمع‌شده', 'شکاف بافت'], 'polyp تومور پایه‌دار است.'),
        M('جراحی', 'herniorrhaphy یعنی…', ['ترمیم فتق با بخیه', 'برداشتن فتق', 'برش فتق', 'دیدن فتق'], 'herni/o + -rrhaphy (ترمیم، بخیه).'),
        P('ضایعه', 'هر واژه را به معنی‌اش وصل کن', [['prolapse', 'افتادگی اندام'], ['adhesion', 'چسبندگی دو سطح'], ['fissure', 'شکاف'], ['ascites', 'مایع در شکم']]),
        S('املا', 'املای «فتق» را بنویس', 'hernia', 'herni/o.', 'her…')
      ]
    },
    /* ================= معاینه و تشخیص ================= */
    {
      id: 'r7', w: 'dx', title: 'ماری در اورژانس', who: 'خانم ۵۹ ساله پس از زمین خوردن با اسکیت',
      brief: 'ماری هنگام اسکیت روی شن‌ها زمین خورد و با دست و زانوی راست فرود آمد. دستیار پزشک (PA) در اورژانس شرح حال گرفت و مچ و زانو را معاینه کرد (کیس آغاز فصل).',
      chart: [['CC', 'درد مچ و زانوی راست'], ['مچ', 'deformed و edematous؛ ROM محدود'], ['زانو', 'سایدگی سطحی؛ تورم'], ['دستور', 'x-ray مچ؛ MRI زانو']],
      fig: { a: ['palpation-img'], l: ['palpation'] },
      steps: [
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['Hx', 'شرح حال'], ['ED', 'بخش اورژانس'], ['ROM', 'دامنه حرکت'], ['y/o', 'ساله']]),
        M('معاینه', 'PA مچ را لمس کرد تا درد را بسنجد. نام این روش…', ['palpation', 'percussion', 'auscultation', 'inspection'], 'palpation یعنی لمس با دست و انگشت.'),
        M('معاینه', 'اول به مچ نگاه کرد: بدون زخم باز، کمی بدشکل. نام این روش…', ['inspection', 'palpation', 'percussion', 'auscultation'], 'inspection = مشاهده.'),
        M('صفت', 'edematous یعنی…', ['ورم‌کرده', 'کبود', 'سفت‌شده', 'چرکی'], 'صفت edema.'),
        M('تصویربرداری', 'برای دیدن شکستگی استخوان مچ بهترین روش ساده کدام است؟', ['radiography', 'ultrasonography', 'PET', 'biofeedback'], 'استخوان متراکم پرتو X را جذب می‌کند و روشن دیده می‌شود.'),
        T('تصویربرداری', 'MRI برای زانو ارزشمند است چون رباط و بافت نرم را بهتر از عکس ساده نشان می‌دهد.', true, 'MRI با میدان مغناطیسی و امواج رادیویی، بدون پرتو X.')
      ]
    },
    {
      id: 'r8', w: 'dx', title: 'تب پس از سفر', who: 'آقای ۳۷ ساله با سابقه تب روماتیسمی (کیس ۳-۱)',
      brief: 'رابرت پس از بازگشت از سفر چند روز تب بالا و ضعف دارد. پزشک خانواده به درگیری قلب شک کرد و او را برای ECG و TEE نزد متخصص قلب فرستاد. او با SBE بستری شد.',
      chart: [['VS', 'T ۳۹٫۸ °C؛ HR ۱۱۲ bpm'], ['آزمون‌ها', 'ECG؛ TEE'], ['تشخیص', 'SBE'], ['یافته', 'IHSS']],
      fig: { a: ['tube-changes'], l: ['تنگی، گشادی، گرفتگی'] },
      steps: [
        M('واژه', 'endocarditis یعنی… لایه درونی قلب', ['التهاب', 'تنگی', 'رشد بیش از حد', 'نازک شدن'], 'endo- (درون) + cardi/o + -itis.'),
        M('واژه', 'stenosis در IHSS یعنی…', ['تنگی', 'التهاب', 'سرطان', 'گشادی'], 'subaortic stenosis = تنگی زیر دریچه آئورت.'),
        M('علت', 'بیماری با علت ناشناخته…', ['idiopathic', 'iatrogenic', 'chronic', 'acute'], 'idi/o (خود) + path/o.'),
        M('رشد', 'افزایش اندازه اندام بدون افزایش تعداد سلول…', ['hypertrophic', 'hyperplastic', 'metaplastic', 'fistular'], 'hypertrophy = بزرگ شدن سلول‌ها؛ hyperplasia = زیاد شدن آن‌ها.'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['ECG', 'نوار قلب'], ['TEE', 'اکوکاردیوگرافی از راه مری'], ['SBE', 'اندوکاردیت باکتریایی نیمه‌حاد'], ['HR', 'ضربان قلب']]),
        T('نشانه', 'تب رابرت یک sign است، نه فقط یک symptom، چون با دماسنج اندازه گرفته می‌شود.', true, 'sign عینی و قابل اندازه‌گیری است.')
      ]
    },
    /* ================= جراحی و درمان ================= */
    {
      id: 'r9', w: 'tx', title: 'ماری در اتاق عمل', who: 'ادامه کیس ماری',
      brief: 'رادیوگراف شکستگی دیستال رادیوس (Colles) را نشان داد. جراح ارتوپد با برش مستقیم استخوان‌ها را جا انداخت و با پلاک و پیچ ثابت کرد. سپس از زانوی ورم‌کرده مایع کشیدند.',
      chart: [['جراحی', 'open reduction + internal fixation'], ['زانو', 'arthrocentesis'], ['دارو', 'NSAID'], ['ترخیص', 'walker؛ آموزش PT']],
      fig: { a: ['periop-path'], l: ['مسیر بیمار در جراحی'] },
      steps: [
        M('جراحی', 'arthrocentesis یعنی…', ['سوراخ کردن مفصل و کشیدن مایع', 'برش مفصل', 'جوش دادن مفصل', 'دیدن درون مفصل'], 'arthr/o + -centesis.'),
        M('جراحی', 'arthroscopy که شاید لازم شود یعنی…', ['دیدن درون مفصل با آندوسکوپ', 'بازسازی مفصل', 'برداشتن مفصل', 'عکس رادیولوژی مفصل'], 'arthr/o + -scopy.'),
        P('پسوند', 'هر واژه مفصل را به معنی‌اش وصل کن', [['arthroplasty', 'بازسازی مفصل'], ['arthrodesis', 'جوش دادن مفصل'], ['arthrotomy', 'برش مفصل'], ['arthrocentesis', 'کشیدن مایع مفصل']]),
        M('واژه', 'fixation با پلاک و پیچ با کدام پسوند هم‌معناست؟', ['-pexy', '-tomy', '-rrhaphy', '-tripsy'], '-pexy = ثابت کردن.'),
        T('دارو', 'NSAID دارویی ضدالتهاب و استروئیدی است.', false, 'نادرست؛ NSAID یعنی ضدالتهاب «غیر»استروئیدی، مثل ibuprofen.'),
        M('پیامد', 'وقتی PA پیامد آسیب ماری را برایش گفت، کدام را گفت؟', ['prognosis', 'diagnosis', 'etiology', 'prophylaxis'], 'prognosis = پیش‌بینی سیر و پیامد.')
      ]
    },
    {
      id: 'r10', w: 'tx', title: 'برگه دستور پس از عمل', who: 'آقای ۴۰ ساله پس از برش و تخلیه آبسه',
      brief: 'آبسه بزرگ ران آقای نوری در اتاق عمل برش داده و تخلیه شد. او پس از ریکاوری به بخش آمد. برگه دستور پزشک را برای پرستار تازه‌کار توضیح بده.',
      chart: [['عمل', 'I&D؛ EBL: ۵۰ mL'], ['مسیر', 'OR → PACU → بخش'], ['دستور', 'NPO تا ۶ ساعت؛ سپس رژیم مایع'], ['سرم', 'NS، KVO'], ['فعالیت', 'OOB با کمک؛ BRP']],
      fig: { a: ['tubes-tools'], l: ['لوله‌ها در درمان'] },
      steps: [
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['I&D', 'برش و تخلیه'], ['EBL', 'برآورد خون از دست رفته'], ['PACU', 'ریکاوری پس از بیهوشی'], ['OR', 'اتاق عمل']]),
        M('دستور', 'NPO یعنی…', ['هیچ چیز از راه دهان', 'هر وقت لازم شد', 'فوری', 'خارج از تخت'], 'non per os.'),
        M('دستور', 'KVO برای سرم یعنی…', ['رگ باز نگه داشته شود', 'سرم قطع شود', 'سرم سریع وصل شود', 'سرم فقط شب'], 'keep vein open.'),
        O('مسیر', 'مسیر بیمار را به ترتیب بچین', ['preop', 'OR', 'PACU', 'postop'], 'پیش از عمل، اتاق عمل، ریکاوری، پس از عمل.'),
        T('دستور', 'STAT در برگه دستور یعنی «در صورت نیاز».', false, 'نادرست؛ STAT یعنی فوری و prn یعنی در صورت نیاز.'),
        M('سرم', 'NS یعنی…', ['سرم نمکی سازگار با سلول‌ها', 'سرم قندی', 'خون کامل', 'محلول الکلی'], 'normal saline.')
      ]
    },
    /* ================= دارو و نسخه ================= */
    {
      id: 'r11', w: 'rx', title: 'داروهای چلسی', who: 'خانم ۲۰ ساله با آسم پیش از جراحی (کیس ۳-۲)',
      brief: 'چلسی یک هفته پیش از جراحی زیبایی به واحد آزمون‌های پیش از پذیرش آمد. پرستار فهرست داروهای او را نوشت. متخصص بیهوشی هم برای پیش از عمل دستور داد.',
      chart: [['Theo-Dur', '1 cap 200 mg t.i.d.'], ['Flovent inhaler', '1 spray (50 mcg هر سوراخ بینی) b.i.d.'], ['Ativan (lorazepam)', '1 mg po b.i.d.'], ['Albuterol MDI', '2 puffs p.r.n. q4–6h'], ['preop', 'lorazepam 4 mg IV'], ['Arnica', '3 tabs SL t.i.d.']],
      fig: { a: ['inhaler-img'], l: ['استنشاق دارو'] },
      steps: [
        M('دوز', 'Flovent: یک پاف ۵۰ mcg در هر سوراخ بینی، b.i.d. در یک روز چند mcg می‌شود؟', ['200 mcg', '100 mcg', '250 mcg', '500 mcg'], '۵۰ × ۲ سوراخ = ۱۰۰ در هر نوبت؛ × ۲ نوبت = ۲۰۰.'),
        M('دوز', 'Arnica: سه قرص SL، t.i.d. در یک روز چند قرص؟', ['9', '6', '12', '33'], '۳ قرص × ۳ بار = ۹.'),
        M('دسته دارو', 'Ativan برای عصبی بودن داده می‌شود؛ پس یک داروی… است.', ['anxiolytic', 'antiemetic', 'analgesic', 'bronchodilator'], 'anxi/o (اضطراب) + -lytic (کاهنده).'),
        M('تداخل', 'lorazepam و داروی بیهوشی با هم اثر بیشتری دارند. این را چه می‌نامند؟', ['synergy', 'antagonism', 'tolerance', 'withdrawal'], 'هم‌افزایی؛ مثل potentiation.'),
        M('شکل دارو', 'دارویی که با inhaler به صورت مه استنشاق می‌شود…', ['aerosol', 'elixir', 'ointment', 'emulsion'], 'aerosol محلولی است که به صورت مه پخش می‌شود.'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['po', 'خوراکی'], ['SL', 'زیرزبانی'], ['IV', 'داخل‌وریدی'], ['p.r.n.', 'در صورت نیاز']])
      ]
    },
    {
      id: 'r12', w: 'rx', title: 'کهیر پس از تزریق', who: 'خانم ۳۰ ساله در درمانگاه',
      brief: 'پنج دقیقه پس از تزریق عضلانی آنتی‌بیوتیک، خانم مرادی دچار کهیر، تنگی نفس و افت فشار شد. تیم درمان فوری اقدام کرد. در پرونده‌اش «NKDA» نوشته شده بود.',
      chart: [['دارو', 'penicillin IM'], ['واکنش', 'anaphylaxis'], ['اقدام', 'epinephrine IM STAT'], ['پس از این', 'penicillin: contraindication']],
      fig: { a: ['injection-angles'], l: ['زاویه تزریق'] },
      steps: [
        M('واکنش', 'anaphylaxis یعنی…', ['واکنش حساسیتی شدید و خطرناک', 'عارضه جانبی خفیف', 'تحمل دارویی', 'سندرم ترک'], 'می‌تواند به تنگی نفس و افت فشار برسد.'),
        M('اختصار', 'NKDA در پرونده یعنی…', ['حساسیت دارویی شناخته‌شده ندارد', 'دارو را قطع کنید', 'هیچ چیز از راه دهان', 'بدون ناراحتی آشکار'], 'no known drug allergies؛ NAD یعنی بدون ناراحتی آشکار.'),
        M('ایمنی دارو', 'از این پس penicillin برای او یک… است.', ['contraindication', 'prescription', 'side effect', 'potentiation'], 'منع مصرف: دلیلی برای ندادن دارو.'),
        M('تزریق', 'تزریق IM با چه زاویه‌ای انجام می‌شود؟', ['۹۰ درجه', '۴۵ درجه', '۱۵ درجه', 'موازی پوست'], 'IM ۹۰، SC ۴۵ و ID ۱۵ درجه.'),
        T('دستور', 'STAT یعنی دارو باید فوراً داده شود.', true, 'STAT = immediately.'),
        S('املا', 'املای «منع مصرف» را بنویس', 'contraindication', 'contra- (ضد) + indication.', 'contra…')
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
    ['Lx', 'معنی واژه را از پسوند شروع کن: hepatomegaly یعنی «بزرگی» + «کبد».'],
    ['Lx', 'path/o یعنی بیماری: pathogen عامل بیماری‌زاست و pathology علم بیماری.'],
    ['Lx', 'در ‎-rhage، ‎-rhea و ‎-rhexis حرف r را دوتایی کن: hemorrhage، pyorrhea، hepatorrhexis.'],
    ['Lx', 'tachy- تند است و brady- کند: tachycardia ضربان تند و bradypnea تنفس کند.'],
    ['Lx', 'stenosis یعنی تنگی و ectasia یعنی گشادی؛ دو واژه با معنی مخالف که هر دو پسوند می‌شوند.'],
    ['Lx', 'py/o (چرک) را با pyr/o (تب) قاطی نکن: pyogenic چرک‌زاست و pyrogenic تب‌زا.'],
    ['Mic', 'staphylo- یعنی خوشه انگور و strepto- یعنی زنجیر؛ staphylococci گرد و خوشه‌ای‌اند.'],
    ['Mic', 'cocci گردند، bacilli میله‌ای، vibrios خمیده و spirochetes پیچ‌پیچی.'],
    ['Mic', 'endemic همیشه و کم، epidemic ناگهانی و زیاد در یک منطقه، pandemic در همه جهان.'],
    ['Mic', 'nosocomial یعنی عفونت بیمارستانی؛ MRSA نمونه مقاوم و خطرناک آن است.'],
    ['Mic', 'iatrogenic یعنی «ناشی از درمان» و idiopathic یعنی «بی‌علت شناخته‌شده».'],
    ['Path', 'چهار نشانه التهاب: گرما، درد، سرخی و تورم؛ و پسوند التهاب ‎-itis است.'],
    ['Path', 'phag/o یعنی خوردن: phagocytosis یعنی بلعیدن میکروب به دست گلبول سفید.'],
    ['Path', 'abscess چرک جمع‌شده در یک جاست و cellulitis التهابی که در بافت پخش می‌شود.'],
    ['Path', 'hyperplasia یعنی سلول بیشتر؛ hypertrophy یعنی سلول بزرگ‌تر، نه بیشتر.'],
    ['Path', 'fistula یک مسیر غیرطبیعی است و fissure یک شکاف؛ polyp توده‌ای پایه‌دار.'],
    ['Dx', 'sign را پزشک می‌بیند یا می‌سنجد (تب، فشار بالا)؛ symptom را بیمار حس می‌کند (درد، سرگیجه).'],
    ['Dx', 'ترتیب معاینه فیزیکی را با IPPA به خاطر بسپار: Inspection، Palpation، Percussion، Auscultation.'],
    ['Dx', '‎-graph ابزار ثبت است، ‎-graphy روش ثبت و ‎-gram خود ثبت: electrocardiograph، electrocardiography، electrocardiogram.'],
    ['Dx', 'در radiograph بافت‌های متراکم مثل استخوان روشن دیده می‌شوند، چون پرتو X را جذب می‌کنند.'],
    ['Dx', 'MRI از میدان مغناطیسی و امواج رادیویی استفاده می‌کند و پرتو X ندارد.'],
    ['Tx', '‎-ectomy برداشتن است، ‎-tomy برش و ‎-stomy ساختن دهانه: hepatectomy، laparotomy، tracheostomy.'],
    ['Tx', '‎-centesis یعنی سوراخ کردن برای کشیدن مایع: thoracentesis، arthrocentesis.'],
    ['Tx', '‎-pexy ثابت می‌کند، ‎-desis جوش می‌دهد و ‎-rhaphy بخیه می‌زند.'],
    ['Tx', 'palliative یعنی تسکینی: درد را کم می‌کند ولی بیماری را درمان قطعی نمی‌کند.'],
    ['Tx', 'prognosis پیش‌بینی پیامد بیماری است و diagnosis شناختن خود بیماری.'],
    ['Rx', 'bid روزی دو بار، tid سه بار و qid چهار بار؛ prn یعنی هر وقت لازم شد.'],
    ['Rx', 'ac پیش از غذاست و pc پس از غذا؛ hs هنگام خواب.'],
    ['Rx', 'نام ژنریک با حرف کوچک نوشته می‌شود (acetaminophen) و نام تجاری با حرف بزرگ (Tylenol).'],
    ['Rx', 'synergy یعنی دو دارو با هم اثری بیشتر از جمع اثرشان دارند؛ antagonist اثر دیگری را خنثی می‌کند.'],
    ['Rx', 'tolerance یعنی همان دوز دیگر اثر قبلی را ندارد و باید دوز را بالا برد.']
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
/* تیمار — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مرجع سریع بیماری و درمان
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'timar.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: 'واژه‌نامه', color: '#2F5FD0' },
    { id: 'parse', sym: '✂', name: 'تجزیه‌گر واژه', color: '#7B5CE0' },
    { id: 'roots', sym: '-o-', name: 'ریشه‌ها و پسوندها', color: '#12A594' },
    { id: 'abbr', sym: 'Rx', name: 'اختصارها', color: '#1899D6' },
    { id: 'ref', sym: '🧭', name: 'مرجع سریع', color: '#E5A500' }
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
      <header class="vhead"><h1>ابزارها</h1><p>واژه‌نامه کامل ${fa(L().TERMS.length)} واژه، ${fa(L().ROOTS.length)} جزء واژه و ${fa(L().ABBR.length)} اختصار؛ همه بدون اینترنت.</p></header>
      <div class="ttabs" role="tablist">${TOOLS.map(x => `<button class="ttab ${x.id === cur ? 'is-on' : ''}" data-tool="${x.id}" style="--tc:${x.color}" role="tab" aria-selected="${x.id === cur}"><span class="ttab__s">${x.sym}</span>${x.name}</button>`).join('')}</div>
      <div class="tcard">${PANES[cur]()}</div>
      <p class="disclaimer">⚕️ تیمار ابزار آموزشی است و جایگزین منابع پزشکی و قضاوت بالینی نیست.</p>
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
  const dict = () => `<div class="tpane">${searchBox('جست‌وجو: biopsy، التهاب، hernia…')}
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
  const SAMPLES = ['hepatomegaly', 'osteomalacia', 'bronchostenosis', 'herniorrhaphy', 'thoracentesis', 'blepharoptosis', 'antipyretic', 'bacteriostatic'];
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
    return `<div class="tpane">${searchBox('جست‌وجو: scler، التهاب، \u200e-itis\u200e…')}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]}‌ها <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b dir="ltr">${esc(r.a)}</b><span>${esc(r.fa)}</span><small dir="ltr">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox('جست‌وجو: bid، فشار خون، NPO…')}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>اختصار</th><th>شکل کامل و معنی</th></tr>${list.map(a => `<tr><td dir="ltr">${esc(a.a)}</td><td><span dir="ltr" class="abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  /* مرجع سریع: جدول‌های پرکاربرد معاینه، جراحی و نسخه که هنگام خواندن پرونده لازم می‌شوند */
  const REF = [
    ['چهار نشانه التهاب', [['heat', 'گرما (calor)'], ['pain', 'درد (dolor)'], ['redness', 'سرخی (rubor)'], ['swelling', 'تورم (tumor)؛ پسوند التهاب: ‎-itis']]],
    ['معاینه فیزیکی (IPPA)', [['inspection', 'نگاه کردن'], ['palpation', 'لمس با دست و انگشت'], ['percussion', 'ضربه زدن و گوش دادن به صدا'], ['auscultation', 'شنیدن صداهای بدن با stethoscope']]],
    ['علائم حیاتی (VS)', [['T', 'دمای بدن؛ °C یا °F'], ['P', 'نبض؛ ضربان در دقیقه (bpm)'], ['R', 'تنفس در دقیقه'], ['BP', 'فشار خون: systolic/diastolic بر حسب mm Hg']]],
    ['پسوندهای تشخیص', [['-graph', 'ابزار ثبت'], ['-graphy', 'روش ثبت'], ['-gram', 'خود ثبت (نوار، تصویر)'], ['-meter / -metry', 'ابزار اندازه‌گیری / اندازه‌گیری'], ['-scope / -scopy', 'ابزار دیدن / دیدن درون']]],
    ['پسوندهای جراحی', [['-ectomy', 'برداشتن'], ['-tomy / -tome', 'برش / ابزار برش'], ['-stomy', 'ساختن دهانه'], ['-centesis', 'سوراخ کردن و کشیدن مایع'], ['-plasty / -rhaphy', 'ترمیم و بازسازی / بخیه'], ['-pexy / -desis', 'ثابت کردن / جوش دادن'], ['-tripsy', 'خرد کردن']]],
    ['زمان مصرف دارو', [['ac / pc', 'پیش از غذا / پس از غذا'], ['hs', 'هنگام خواب'], ['bid • tid • qid', 'روزی ۲ • ۳ • ۴ بار'], ['q4h', 'هر ۴ ساعت'], ['prn', 'در صورت نیاز'], ['STAT', 'فوری']]],
    ['راه‌های تزریق', [['IM', 'درون ماهیچه؛ زاویه ۹۰°'], ['SC', 'زیر پوست؛ زاویه ۴۵° (گاهی ۹۰°)'], ['ID', 'درون پوست؛ زاویه ۱۵°'], ['IV', 'درون سیاهرگ']]]
  ];


  const ref = () => `<div class="tpane"><p class="muted">جدول‌های پرکاربرد برای خواندن پرونده و گزارش تصویربرداری.</p>
    ${REF.map(g => `<h3 class="tgh">${g[0]}</h3><table class="mini ref"><tr><th>واژه</th><th>معنی</th></tr>${g[1].map(r => `<tr><td dir="ltr" class="ref__v">${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`).join('')}
    ${EA.ui.figCard({ a: ['dose-clock'], l: ['زمان مصرف دارو'] })}</div>`;

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
