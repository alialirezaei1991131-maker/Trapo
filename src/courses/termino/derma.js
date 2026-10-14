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
  EA.APP = { name: 'درما', key: 'derma', title: 'درما • ترمینولوژی پوست' };

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
    name: 'درما', key: 'derma', title: 'درما • ترمینولوژی پوست', certCode: 'DR',
    subject: 'ترمینولوژی پزشکی دستگاه پوششی (پوست، مو، ناخن و غدد پوستی)',
    kicker: '🧴 ترمینولوژی پزشکی: پوست، مو، ناخن و غدد پوستی',
    hello: 'سلام، من <b>درما</b> هستم؛',
    landP: () => `سلام، من <b>درما</b> هستم؛ یک تکه پوست خندان با یک تار مو و خورشید SPF روی شانه‌ام! این‌جا واژه‌ها را حفظ نمی‌کنی؛ <b>رمزگشایی</b>‌شان می‌کنی: ریشه، پیشوند و پسوند را می‌شناسی و هر واژه تازه را خودت می‌خوانی. ${fa(EA.lex.TERMS.length)} واژه با تلفظ و معنی فارسی، ${fa(Object.keys(EA.IMG).length + EA.ART_KEYS.length)} تصویر و شکل آموزشی، ${fa(EA.rounds.length)} پرونده بالینی و کارت‌های لایتنر منتظرت هستند.`,
    disclaimer: 'درما ابزار آموزشی است و جایگزین معاینه، قضاوت بالینی یا دستور پزشک نیست.',
    eyes: 'ده‌ها شکل دوزبانه و تصویر بالینی؛ از برش لایه‌های پوست و ضایعه‌ها تا سوختگی، پسوریازیس و ملانوما.',
    outcomes: [
          'هر واژه پوست را به پیشوند، ریشه و پسوند بشکنی و معنی‌اش را بگویی',
          'لایه‌های پوست، مو، ناخن و غدد پوستی را روی برش پوست نشان دهی',
          'هر ضایعه پوستی را با سه کلید «سطح، محتوا، اندازه» دقیق توصیف کنی',
          'عفونت‌ها، التهاب‌ها و بیماری‌های خودایمنی پوست را از هم جدا کنی',
          'درجه سوختگی را تشخیص دهی و با قانون نُه‌ها درصد سطح سوخته را حساب کنی',
          'سرطان‌های پوست، بیوپسی، جراحی، پیوند، داروها و اختصارهای پرونده را بخوانی'
        ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، واژه‌های پوست را مثل زبان مادری می‌خوانی.',
    obHello: 'سلام! من درما هستم؛ یک تکه پوست خندان 🧴 اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان پوست» بهترین شروع است؛ کلیات دستگاه و ریشه‌های پایه آن‌جا یاد داده می‌شوند!',
    demo: () => ({
    q: 'واژه <b dir="ltr">onychomycosis</b> یعنی…',
    fig: { a: ['nail-anatomy'], l: ['ناخن از رو و از کنار'] },
    opts: ['عفونت قارچی ناخن', 'نرمی ناخن', 'التهاب دور ناخن', 'برداشتن ناخن'],
    why: `${EA.K.wb('onych/o', 'myc/o', '-osis')}<br><b>onych/o</b> = ناخن، <b>myc/o</b> = قارچ، <b>-osis</b> = حالت غیرطبیعی. پس <b>عفونت قارچی ناخن</b>؛ همان ناخن زرد، ضخیم و شکننده. معنی را از پسوند شروع کن!`
  }),
    titles: ['سلول تازه', 'کراتینوسیت کنجکاو', 'لایه‌شناس جوان', 'نگهبان اپیدرم', 'رمزگشای ریشه‌ها', 'استاد ضمائم', 'شکارچی ضایعه‌ها',
    'کارآگاه ماکول و پاپول', 'نگهبان سد پوستی', 'استاد قانون نُه‌ها', 'شکارچی قارچ و باکتری', 'کارآگاه ABCDE', 'استاد واژه‌سازی', 'افسانه درماتولوژی', 'اسطوره ترمینولوژی'],
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'دانشجوی علوم آزمایشگاهی', 'کارشناس علوم آزمایشگاهی', 'دانشجوی تغذیه', 'پرستار ICU', 'کارشناس تغذیه بالینی', 'رزیدنت پوست', 'دانشجوی مامایی', 'دانشجوی داروسازی', 'کارشناس اتاق عمل', 'پرستار بخش سوختگی', 'پرستار زخم'],
    firstBadge: ['🧴', 'اولین لایه'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], ly: ['🧱', 'لایه‌شناس'], ac: ['💅', 'نگهبان ضمائم'], le: ['🔎', 'شکارچی ضایعه'], ds: ['🦠', 'درمانگر پوست'], tx: ['🔬', 'کارآگاه بیوپسی'] },
    confetti: ['#D9643A', '#1F9E8F', '#FFC800', '#1E88E5', '#D9506E', '#E8892B', '#A0673A', '#58CC02'],
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
  EA.TERMS_RAW = [["abrasion", "ah-BRAY-zhun", "Scraping away of the skin surface by friction.", "سایش پوست", "le", "sx", []],
["abscess", "AB-ses", "Localized collection of pus in a cavity surrounded by inflamed tissue.", "آبسه", "ds", "dz", ["I&D"]],
["acne vulgaris", "AK-nee vul-GAIR-is", "Common inflammatory disease of sebaceous glands and hair follicles with comedones, papules and pustules.", "آکنه (جوش معمولی)", "ds", "dz", []],
["actinic keratosis", "ak-TIN-ik ker-ah-TOH-sis", "Rough, scaly precancerous patch on sun-exposed skin (actin/o = ray); may become squamous cell carcinoma.", "کراتوز آفتابی (پیش‌سرطانی)", "tx", "dz", ["AK", "UV"]],
["adipose tissue", "AD-ih-pohs TISH-yoo", "Fat tissue (adip/o = fat, -ose = full of) of the subcutaneous layer.", "بافت چربی", "ly", "body", []],
["albinism", "AL-bih-nizm", "Inherited absence of melanin in skin, hair and eyes (albin/o = white).", "زال‌بودن (آلبینیسم)", "ds", "dz", []],
["allograft", "AL-oh-graft", "Skin graft from another person (allo- = other); also called homograft.", "آلوگرافت (پیوند از انسان دیگر)", "tx", "tx", []],
["alopecia", "al-oh-PEE-shee-ah", "Partial or complete loss of hair; baldness (alopecia areata = patchy hair loss).", "ریزش مو (طاسی)", "ac", "sx", []],
["anhidrosis", "an-hye-DROH-sis", "Absence of sweating (an- = without, hidr/o = sweat).", "فقدان تعریق", "ac", "sx", []],
["anti-inflammatory", "an-tih-in-FLAM-ah-tor-ee", "Drug that reduces inflammation.", "ضدالتهاب", "tx", "tx", []],
["antibiotic", "an-tih-bye-OT-ik", "Drug that kills or stops the growth of bacteria.", "آنتی‌بیوتیک", "tx", "tx", []],
["antifungal", "an-tih-FUNG-gal", "Drug that kills or prevents the growth of fungi.", "ضدقارچ", "tx", "tx", []],
["antihistamine", "an-tih-HIS-tah-meen", "Drug that blocks histamine and relieves allergic itching and hives.", "آنتی‌هیستامین", "tx", "tx", []],
["antipruritic", "an-tih-proo-RIT-ik", "Drug that relieves itching (anti- = against, prurit/o = itching).", "ضدخارش", "tx", "tx", []],
["antiseptic", "an-tih-SEP-tik", "Substance that kills or slows microorganisms on the skin.", "ضدعفونی‌کننده", "tx", "tx", []],
["antiviral", "an-tih-VYE-ral", "Drug that weakens or stops a virus (e.g. for herpes).", "ضدویروس", "tx", "tx", []],
["apocrine gland", "AP-oh-krin gland", "Sweat gland of the armpit and groin that opens into hair follicles and becomes active at puberty.", "غده عرق آپوکرین", "ac", "body", []],
["arrector pili", "ah-REK-tor PYE-lye", "Tiny smooth muscle attached to a hair follicle; it contracts with cold or fear to make goose bumps.", "عضله راست‌کننده مو", "ac", "body", []],
["atopic dermatitis", "ay-TOP-ik der-mah-TYE-tis", "Chronic, itchy eczema linked to allergy, asthma and hay fever; common in children.", "درماتیت آتوپیک", "ds", "dz", ["AD"]],
["atrophy", "AT-roh-fee", "Thinning and wasting of the skin; it looks thin, shiny and wrinkled (a- = without, -trophy = development).", "آتروفی (نازک‌شدن)", "le", "sx", []],
["autograft", "AW-toh-graft", "Skin graft taken from the patient's own body (auto- = self).", "اتوگرافت (پیوند از خود)", "tx", "tx", []],
["avascular", "ay-VAS-kyoo-lar", "Without blood vessels (a- = without, vascul/o = vessel); the epidermis is avascular.", "بدون رگ", "ly", "body", []],
["basal cell carcinoma", "BAY-sal sel kar-sih-NOH-mah", "Most common skin cancer; a pearly papule or nodule with rolled edges from basal-layer cells; rarely spreads.", "کارسینوم سلول قاعده‌ای", "tx", "dz", ["BCC", "UV"]],
["Beau lines", "boh lynz", "Transverse grooves across the nails that appear after a severe illness.", "خطوط بو (شیار عرضی ناخن)", "ac", "sx", []],
["benign", "beh-NYNE", "Not cancerous; does not invade nearby tissue or spread.", "خوش‌خیم", "tx", "sx", []],
["biopsy", "BYE-op-see", "Removal of a small piece of living tissue to examine under a microscope (bi/o = life, -opsy = view of).", "نمونه‌برداری (بیوپسی)", "tx", "lab", ["Bx"]],
["blepharoplasty", "BLEF-ah-roh-plas-tee", "Surgical repair of the eyelid, often to remove sagging skin (blephar/o = eyelid).", "جراحی پلک", "tx", "tx", []],
["body surface area", "BOD-ee SER-fis AIR-ee-ah", "Total area of the skin surface; burn size is given as a percentage of it.", "سطح بدن", "ds", "lab", ["BSA"]],
["bromhidrosis", "brohm-hye-DROH-sis", "Foul-smelling sweat (brom/o = stench).", "بوی بد عرق", "ac", "sx", []],
["bulla", "BUL-ah", "Large blister filled with fluid, larger than 1 cm (plural: bullae).", "بول (تاول بزرگ)", "le", "sx", []],
["burn", "bern", "Injury to tissue from heat, chemicals, electricity or radiation; classified by depth.", "سوختگی", "ds", "dz", ["BSA"]],
["candidiasis", "kan-dih-DYE-ah-sis", "Yeast infection by Candida in moist areas of skin, mouth (thrush) or vagina; also called moniliasis.", "کاندیدیازیس (برفک)", "ds", "dz", []],
["carbuncle", "KAR-bung-kl", "Cluster of connected furuncles involving several hair follicles.", "کفگیرک (کاربونکل)", "ds", "dz", []],
["carcinoma", "kar-sih-NOH-mah", "Cancerous tumor of epithelial tissue (carcin/o = cancer, -oma = tumor).", "کارسینوم", "tx", "dz", []],
["cauterization", "kaw-ter-ih-ZAY-shun", "Destruction of tissue with heat, electricity, freezing or chemicals (cauter/o = to burn).", "سوزاندن بافت (کوتر)", "tx", "tx", []],
["cellulitis", "sel-yoo-LYE-tis", "Bacterial infection of the dermis and subcutaneous tissue with red, hot, swollen and painful skin.", "سلولیت (عفونت بافت نرم)", "ds", "dz", ["C&S"]],
["ceruminous gland", "seh-ROO-mih-nus gland", "Modified sweat gland of the ear canal that secretes cerumen (ear wax).", "غده جرم‌ساز گوش", "ac", "body", []],
["chemical peel", "KEM-ih-kal peel", "Applying a chemical to remove the outer layers of damaged skin (also called chemabrasion).", "لایه‌برداری شیمیایی", "tx", "tx", []],
["cicatrix", "SIK-ah-triks", "A scar; fibrous tissue that replaces normal skin after a wound heals.", "جای زخم (اسکار)", "ly", "sx", []],
["collagen", "KOL-ah-jen", "Strong, fibrous protein of the dermis and connective tissue that gives the skin strength.", "کلاژن", "ly", "cell", []],
["comedo", "KOM-ee-doh", "Plug of sebum and keratin in a hair follicle; open comedo = blackhead, closed comedo = whitehead (plural: comedones).", "جوش سرسیاه یا سرسفید (کومدون)", "ac", "sx", []],
["contact dermatitis", "KON-takt der-mah-TYE-tis", "Skin inflammation caused by touching an irritant or allergen (e.g. poison ivy, nickel).", "درماتیت تماسی", "ds", "dz", []],
["contusion", "kon-TOO-zhun", "Injury that does not break the skin; a bruise.", "کوفتگی", "le", "sx", []],
["corticosteroid", "kor-tih-koh-STAIR-oyd", "Hormone-like drug that reduces inflammation and itching; used as cream or ointment for dermatitis.", "کورتیکواستروئید", "tx", "tx", []],
["crust", "krust", "Dried serum, blood or pus on the skin surface; a scab.", "دلمه", "le", "sx", []],
["cryosurgery", "krye-oh-SER-jer-ee", "Destruction of tissue by extreme cold, usually liquid nitrogen (cry/o = cold).", "سرماجراحی (کرایو)", "tx", "tx", []],
["cryotherapy", "krye-oh-THER-ah-pee", "Treatment with cold, such as freezing warts.", "سرمادرمانی", "tx", "tx", []],
["culture and sensitivity", "KUL-cher and sen-sih-TIV-ih-tee", "Lab test that grows microorganisms from a sample to identify them and find which antibiotic works best.", "کشت و آنتی‌بیوگرام", "tx", "lab", ["C&S"]],
["curettage", "kyoo-reh-TAHZH", "Scraping of a lesion with a spoon-shaped instrument (curette).", "کورتاژ (تراشیدن)", "tx", "tx", []],
["cutaneous", "kyoo-TAY-nee-us", "Pertaining to the skin (cutane/o = skin, -ous = pertaining to).", "پوستی، مربوط به پوست", "lx", "body", []],
["cuticle", "KYOO-tih-kl", "Narrow band of epidermis at the base of the nail (also called eponychium).", "کوتیکول (اپونیکیوم)", "ac", "body", []],
["cyanoderma", "sye-ah-noh-DER-mah", "Bluish discoloration of the skin (cyan/o = blue); also called cyanosis.", "کبودی پوست", "lx", "sx", []],
["cyanosis", "sye-ah-NOH-sis", "Bluish discoloration of skin and mucous membranes from too little oxygen in the blood (cyan/o = blue).", "سیانوز (کبودی)", "le", "sx", []],
["cyst", "sist", "Closed sac under the skin filled with fluid or semisolid material.", "کیست", "le", "sx", []],
["debridement", "day-breed-MON", "Removal of dead, damaged or infected tissue from a wound or burn so it can heal.", "دبریدمان (پاک‌سازی زخم)", "tx", "tx", []],
["decubitus ulcer", "dee-KYOO-bih-tus UL-ser", "Pressure ulcer (bedsore); breakdown of skin over a bony area from long pressure in bedridden patients.", "زخم بستر (زخم فشاری)", "ds", "dz", ["decub"]],
["depigmentation", "dee-pig-men-TAY-shun", "Loss of normal skin pigment (de- = removal, lack of).", "از دست رفتن رنگ پوست", "le", "sx", []],
["dermabrasion", "der-mah-BRAY-zhun", "Sanding the skin with a rotating brush to remove scars, tattoos or wrinkles.", "سایش پوست (درم‌ابریژن)", "tx", "tx", []],
["dermal", "DER-mal", "Pertaining to the skin, especially the dermis.", "درمی، پوستی", "lx", "body", []],
["dermal papillae", "DER-mal pah-PIL-ee", "Small finger-like projections of the dermis into the epidermis; they form fingerprints (papill/o = nipple-like).", "پرزهای درم (پاپیلا)", "ly", "body", []],
["dermatitis", "der-mah-TYE-tis", "Inflammation of the skin (-itis = inflammation), often with redness, swelling and itching.", "التهاب پوست (درماتیت)", "lx", "dz", ["AD"]],
["dermatologist", "der-mah-TOL-oh-jist", "Physician who specializes in diagnosing and treating diseases of the skin, hair and nails.", "متخصص پوست", "lx", "field", ["Derm"]],
["dermatology", "der-mah-TOL-oh-jee", "The medical specialty concerned with the diagnosis and treatment of skin disorders (dermat/o = skin, -logy = study of).", "پوست‌شناسی (درماتولوژی)", "lx", "field", ["Derm"]],
["dermatome", "DER-mah-tohm", "Instrument for cutting thin slices of skin for grafting (-tome = instrument to cut).", "درماتوم (ابزار برش پوست)", "tx", "tx", []],
["dermatomycosis", "der-mah-toh-my-KOH-sis", "Any fungal infection of the skin (myc/o = fungus).", "قارچ پوستی", "ds", "dz", []],
["dermatopathologist", "der-mah-toh-pah-THOL-oh-jist", "Pathologist who specializes in examining skin tissue (biopsy samples) under the microscope.", "آسیب‌شناس پوست", "lx", "field", ["Bx"]],
["dermatopathy", "der-mah-TOP-ah-thee", "Any disease of the skin (-pathy = disease).", "بیماری پوست", "lx", "dz", []],
["dermatoplasty", "DER-mah-toh-plas-tee", "Surgical repair of the skin (-plasty = surgical repair).", "ترمیم جراحی پوست", "tx", "tx", []],
["dermatosis", "der-mah-TOH-sis", "Any abnormal condition of the skin (dermat/o = skin, -osis = abnormal condition).", "بیماری پوستی (درماتوز)", "lx", "dz", []],
["dermis", "DER-mis", "The inner, thick layer of the skin (also called corium); rich in blood vessels, nerves, glands and hair follicles.", "درم (میان‌پوست)", "ly", "body", []],
["diaphoresis", "dye-ah-for-EE-sis", "Profuse sweating (dia- = through, -phoresis = carrying); also called sudoresis.", "تعریق شدید", "ac", "sx", []],
["discoid lupus erythematosus", "DIS-koyd LOO-pus er-ih-them-ah-TOH-sus", "Form of lupus limited to the skin, with round red scaly plaques.", "لوپوس دیسکوئید (پوستی)", "ds", "dz", ["DLE"]],
["dysplastic nevus", "dis-PLAS-tik NEE-vus", "Atypical mole with irregular borders and color; may develop into melanoma.", "خال آتیپیک (دیسپلاستیک)", "tx", "dz", []],
["ecchymosis", "ek-ih-MOH-sis", "Bruise; large black-and-blue area from blood escaping into the skin.", "اکیموز (کبودی)", "le", "sx", []],
["eccrine gland", "EK-rin gland", "Common sweat gland that opens directly onto the skin through a pore and cools the body.", "غده عرق اکرین", "ac", "body", []],
["eczema", "EK-zeh-mah", "Chronic itchy inflammation of the skin with redness, vesicles, crusts and scales; often atopic.", "اگزما", "ds", "dz", ["AD"]],
["edema", "eh-DEE-mah", "Swelling from too much fluid in the tissues.", "ادم (تورم)", "le", "sx", []],
["elastin", "ee-LAS-tin", "Stretchy protein fiber of the dermis that lets the skin return to its shape.", "الاستین", "ly", "cell", []],
["electrodesiccation", "ee-lek-troh-des-ih-KAY-shun", "Drying and destroying tissue with a high-frequency electric current (electr/o = electricity).", "خشکاندن الکتریکی", "tx", "tx", []],
["emollient", "ee-MOL-ee-ent", "Moisturizer that softens and soothes dry skin.", "نرم‌کننده (مرطوب‌کننده)", "tx", "tx", []],
["epidermis", "ep-ih-DER-mis", "The outer, thin layer of the skin; made of stratified squamous epithelium, with no blood vessels or nerves (epi- = upon, derm = skin).", "اپیدرم (روپوست)", "ly", "body", []],
["epidermoid", "ep-ih-DER-moyd", "Resembling the epidermis (epi- = upon, derm = skin, -oid = resembling).", "شبیه اپیدرم", "lx", "body", []],
["epithelium", "ep-ih-THEE-lee-um", "Tissue that covers body surfaces; the epidermis is stratified squamous epithelium.", "بافت پوششی (اپیتلیوم)", "ly", "body", []],
["erosion", "ee-ROH-zhun", "Shallow loss of the epidermis that heals without a scar.", "خوردگی سطحی", "le", "sx", []],
["erythema", "er-ih-THEE-mah", "Redness of the skin caused by widening of capillaries (erythem/o = red, flushed).", "اریتم (قرمزی پوست)", "le", "sx", []],
["erythematous", "er-ih-THEM-ah-tus", "Pertaining to redness of the skin.", "قرمز، اریتماتو", "le", "sx", []],
["erythroderma", "eh-rith-roh-DER-mah", "Abnormal redness of the skin over a wide area (erythr/o = red, -derma = skin).", "قرمزی گسترده پوست", "lx", "sx", []],
["eschar", "ES-kar", "Thick, dark crust of dead tissue after a burn or deep injury.", "اسکار سوختگی (بافت مرده سیاه)", "ds", "sx", []],
["escharotomy", "es-kar-OT-oh-mee", "Surgical incision through burn eschar to relieve pressure and restore blood flow.", "برش اسکار سوختگی", "tx", "tx", []],
["excision", "ek-SIZH-un", "Surgical cutting out of a lesion (ex- = out, cis/o = to cut).", "برداشتن با جراحی", "tx", "tx", []],
["excisional biopsy", "ek-SIZH-un-al BYE-op-see", "Removal of the whole lesion for examination.", "بیوپسی برداشتی (کامل)", "tx", "lab", ["Bx"]],
["excoriation", "eks-koh-ree-AY-shun", "Scratch mark; a linear break in the skin surface, often covered with crust.", "خراشیدگی", "le", "sx", []],
["exfoliative cytology", "eks-FOH-lee-ah-tiv sye-TOL-oh-jee", "Scraping cells from the skin surface to examine under a microscope.", "سیتولوژی تراشه‌ای", "tx", "lab", []],
["exudate", "EKS-yoo-dayt", "Fluid, cells or pus that leak out of tissue or blood vessels into a wound.", "ترشح (اگزودا)", "le", "sx", []],
["fibroblast", "FYE-broh-blast", "Connective tissue cell that makes collagen and elastin; important in wound healing (fibr/o = fiber).", "فیبروبلاست", "ly", "cell", []],
["first-degree burn", "first dih-GREE bern", "Superficial burn of the epidermis only, with redness and pain but no blisters (e.g. sunburn).", "سوختگی درجه یک (سطحی)", "ds", "dz", []],
["fissure", "FISH-er", "Deep crack or groove in the skin (e.g. athlete's foot, chapped lips).", "شقاق (ترک پوست)", "le", "sx", []],
["folliculitis", "foh-lik-yoo-LYE-tis", "Inflammation of hair follicles, often by bacteria, seen as small pustules around hairs.", "التهاب فولیکول مو", "ac", "dz", []],
["free edge", "free ej", "The part of the nail that extends past the fingertip.", "لبه آزاد ناخن", "ac", "body", []],
["frozen section", "FROH-zen SEK-shun", "Quick freezing and thin slicing of tissue for immediate examination during surgery.", "برش منجمد", "tx", "lab", ["FS"]],
["fulguration", "ful-gyoo-RAY-shun", "Tissue destruction by sparks of high-frequency electric current.", "فولگوراسیون", "tx", "tx", []],
["full-thickness skin graft", "ful THIK-nes skin graft", "Graft of the whole epidermis and dermis.", "پیوند پوست تمام‌ضخامت", "tx", "tx", ["FTSG"]],
["fungal scraping", "FUNG-gal SKRAY-ping", "Scraping of skin, hair or nails tested for fungus, often with potassium hydroxide (KOH) or culture.", "تراشه قارچ (آزمایش KOH)", "tx", "lab", ["KOH"]],
["furuncle", "FYOO-rung-kl", "Boil; painful pus-filled infection of a hair follicle.", "کورک (فورونکل)", "ds", "dz", []],
["gangrene", "GANG-green", "Death of tissue from loss of blood supply, often followed by bacterial invasion.", "قانقاریا (گانگرن)", "ds", "dz", []],
["granulation tissue", "gran-yoo-LAY-shun TISH-yoo", "New, red, bumpy connective tissue with tiny blood vessels that fills a healing wound.", "بافت جوانه‌ای (گرانولاسیون)", "ly", "body", []],
["hair", "hair", "Thread-like structure of keratin that grows from a follicle in the dermis (pil/o, trich/o = hair).", "مو", "ac", "body", []],
["hair follicle", "hair FOL-ih-kl", "Tube-like sac in the dermis from which a hair grows (follicul/o = small sac).", "فولیکول مو (پیاز مو)", "ac", "body", []],
["hair papilla", "hair pah-PIL-ah", "Cluster of blood vessels and connective tissue at the base of the follicle that feeds the growing hair.", "پاپیلای مو", "ac", "body", []],
["hair root", "hair root", "The part of a hair below the skin surface, inside the follicle.", "ریشه مو", "ac", "body", []],
["hair shaft", "hair shaft", "The visible part of a hair above the skin surface.", "ساقه مو", "ac", "body", []],
["hemangioma", "hee-man-jee-OH-mah", "Benign tumor of blood vessels; a strawberry birthmark in infants (hem/o = blood, angi/o = vessel).", "همانژیوم (خال توت‌فرنگی)", "tx", "dz", []],
["hematoma", "hee-mah-TOH-mah", "Collection of clotted blood under the skin forming a raised swelling (hemat/o = blood, -oma = mass).", "هماتوم (لخته خون)", "le", "sx", []],
["herpes simplex", "HER-peez SIM-pleks", "Viral infection with painful vesicles; type 1 causes cold sores (fever blisters) on the lips.", "تبخال (هرپس سیمپلکس)", "ds", "dz", ["HSV"]],
["herpes zoster", "HER-peez ZOS-ter", "Shingles; painful vesicles along a nerve path caused by reactivation of the chickenpox virus.", "زونا", "ds", "dz", ["VZV"]],
["hidradenitis", "hye-drad-eh-NYE-tis", "Inflammation of sweat glands (hidr/o = sweat, aden/o = gland, -itis).", "التهاب غدد عرق", "ac", "dz", []],
["hidrosis", "hye-DROH-sis", "Production and excretion of sweat; also used for excessive sweating (hidr/o = sweat).", "تعریق", "ac", "sx", []],
["hirsutism", "HER-soot-izm", "Excessive hair growth, especially in a male pattern in women (hirsut/o = hairy).", "پرمویی", "ac", "sx", []],
["histiocytoma", "his-tee-oh-sye-TOH-mah", "Benign firm nodule of the dermis made of tissue cells (also called dermatofibroma).", "هیستیوسیتوم (درماتوفیبروم)", "tx", "dz", []],
["hyperhidrosis", "hye-per-hye-DROH-sis", "Excessive sweating (hyper- = excessive).", "تعریق بیش از حد", "ac", "sx", []],
["hyperpigmentation", "hye-per-pig-men-TAY-shun", "Darker areas of skin from extra melanin (e.g. age spots).", "پررنگ‌شدن پوست", "le", "sx", []],
["hypodermic", "hye-poh-DER-mik", "Pertaining to under the skin; a hypodermic needle injects drugs under the skin.", "زیرپوستی (سوزن تزریق)", "ly", "body", []],
["hypodermis", "hye-poh-DER-mis", "Another name for the subcutaneous layer beneath the dermis (hypo- = under).", "هیپودرم (زیرپوست)", "ly", "body", []],
["hyponychium", "hye-poh-NIK-ee-um", "Thickened skin under the free edge of the nail (hypo- = under, onych/o = nail).", "زیرناخن (هیپونیکیوم)", "ac", "body", []],
["ichthyosis", "ik-thee-OH-sis", "Inherited condition with dry, rough, fish-like scales on the skin (ichthy/o = fish, dry, scaly).", "ایکتیوز (پوست ماهی)", "ds", "dz", []],
["impetigo", "im-peh-TYE-goh", "Highly contagious bacterial skin infection (staph or strep) with pustules that rupture and form honey-colored crusts, often around the nose and mouth.", "زرد زخم (ایمپتیگو)", "ds", "dz", ["staph", "strep"]],
["incision and drainage", "in-SIZH-un and DRAY-nij", "Cutting into a lesion such as an abscess and letting the pus drain out.", "برش و تخلیه", "tx", "tx", ["I&D"]],
["incisional biopsy", "in-SIZH-un-al BYE-op-see", "Removal of only part of a large lesion for examination.", "بیوپسی برشی (بخشی)", "tx", "lab", ["Bx"]],
["induration", "in-doo-RAY-shun", "Hardening of an area of skin, often from inflammation (used to read skin tests).", "سفتی بافت", "le", "sx", []],
["integument", "in-TEG-yoo-ment", "The skin; the outer covering of the body (from Latin integumentum, a covering).", "پوشش بدن (پوست)", "lx", "body", []],
["integumentary system", "in-teg-yoo-MEN-tah-ree SIS-tem", "The skin and its accessory organs: hair, nails, sweat glands and sebaceous glands.", "دستگاه پوششی", "lx", "body", []],
["intradermal", "in-trah-DER-mal", "Pertaining to within the skin (intra- = within); e.g. intradermal injection for skin tests.", "داخل‌پوستی (اینترادرمال)", "ly", "body", ["ID"]],
["jaundice", "JAWN-dis", "Yellow color of skin and eyes from too much bilirubin in the blood (jaund/o = yellow).", "یرقان (زردی)", "le", "sx", []],
["Kaposi sarcoma", "KAP-oh-see sar-KOH-mah", "Cancer of blood vessel walls with purple skin lesions, often in people with AIDS.", "سارکوم کاپوزی", "tx", "dz", []],
["keloid", "KEE-loyd", "Raised, thickened overgrowth of scar tissue beyond the wound edges, from excess collagen.", "کلوئید (اسکار برجسته)", "le", "sx", []],
["keratin", "KER-ah-tin", "Tough, waterproof protein of the outer epidermis, hair and nails (kerat/o = horny tissue, hard).", "کراتین", "ly", "cell", []],
["keratinocyte", "ker-ah-TIN-oh-site", "The main cell of the epidermis; it produces keratin (-cyte = cell).", "سلول کراتین‌ساز (کراتینوسیت)", "ly", "cell", []],
["keratolytic", "ker-ah-toh-LIT-ik", "Agent that breaks down and loosens keratin to remove warts, scales or calluses (-lytic = breaking down).", "کراتولیتیک (لایه‌بردار)", "tx", "tx", []],
["laceration", "las-er-AY-shun", "Torn, jagged wound or cut in the skin.", "پارگی پوست", "le", "sx", []],
["laser therapy", "LAY-zer THER-ah-pee", "Use of a focused light beam to remove lesions, tattoos, scars or blood vessel marks.", "لیزردرمانی", "tx", "tx", []],
["lesion", "LEE-zhun", "Any wound, injury or abnormal change in tissue, such as a sore or a spot on the skin.", "ضایعه", "le", "sx", []],
["leukoderma", "loo-koh-DER-mah", "White patches of skin from loss of pigment (leuk/o = white, -derma = skin).", "سفیدی تکه‌ای پوست (لکودرما)", "lx", "sx", []],
["lichenification", "lye-ken-ih-fih-KAY-shun", "Thickened, leathery skin with deep lines from long-term scratching or rubbing.", "ضخیم و چرمی شدن پوست", "le", "sx", []],
["lipectomy", "lih-PEK-toh-mee", "Surgical removal of fat tissue.", "برداشتن چربی", "tx", "tx", []],
["lipocyte", "LIP-oh-site", "Fat cell (lip/o = fat, -cyte = cell); also called adipocyte.", "سلول چربی (لیپوسیت)", "ly", "cell", []],
["lipoma", "lih-POH-mah", "Benign, soft tumor of fat cells (lip/o = fat).", "لیپوم (توده چربی)", "tx", "dz", []],
["liposuction", "lip-oh-SUK-shun", "Removal of fat with a suction tube (lip/o = fat).", "ساکشن چربی", "tx", "tx", []],
["local anesthetic", "LOH-kal an-es-THET-ik", "Drug that numbs a small area of skin for a procedure.", "بی‌حسی موضعی", "tx", "tx", []],
["lunula", "LOO-nyoo-lah", "Pale half-moon area at the base of the nail (Latin luna = moon).", "هلال ناخن", "ac", "body", []],
["macule", "MAK-yool", "Flat, discolored spot less than 1 cm, not raised or depressed (e.g. freckle).", "ماکول (لکه مسطح کوچک)", "le", "sx", []],
["malignant", "mah-LIG-nant", "Cancerous; tends to invade tissue and spread (metastasize).", "بدخیم", "tx", "sx", []],
["malignant melanoma", "mah-LIG-nant mel-ah-NOH-mah", "Most dangerous skin cancer, arising from melanocytes; spreads early to lymph nodes and organs.", "ملانوم بدخیم", "tx", "dz", ["MM", "UV"]],
["Mantoux test", "man-TOO test", "Tuberculin skin test; purified protein derivative (PPD) is injected intradermally and the induration is measured after 48–72 hours.", "تست مانتو (توبرکولین)", "tx", "lab", ["PPD", "TB", "ID"]],
["Meissner corpuscle", "MYS-ner KOR-pus-l", "Touch receptor in the dermal papillae that senses light touch.", "گیرنده لمس (جسمک مایسنر)", "ly", "body", []],
["melanin", "MEL-ah-nin", "Dark pigment that gives color to skin, hair and eyes and absorbs ultraviolet light (melan/o = black).", "ملانین (رنگدانه پوست)", "ly", "cell", ["UV"]],
["melanocyte", "meh-LAN-oh-site", "Pigment cell in the basal layer of the epidermis that produces melanin (melan/o = black, -cyte = cell).", "سلول رنگدانه‌ساز (ملانوسیت)", "ly", "cell", []],
["metastasis", "meh-TAS-tah-sis", "Spread of cancer cells from the original site to distant parts of the body.", "متاستاز (گسترش سرطان)", "tx", "sx", []],
["Mohs surgery", "mohz SER-jer-ee", "Removal of skin cancer layer by layer, each checked under the microscope until no cancer cells remain; saves healthy tissue.", "جراحی موس", "tx", "tx", ["BCC", "SCC"]],
["MRSA infection", "MER-sah in-FEK-shun", "Skin infection by methicillin-resistant Staphylococcus aureus, a staph bacterium resistant to many antibiotics.", "عفونت استافیلوکوک مقاوم (MRSA)", "ds", "dz", ["MRSA"]],
["nail", "nail", "Hard plate of keratin that protects the tip of each finger and toe (onych/o, ungu/o = nail).", "ناخن", "ac", "body", []],
["nail bed", "nail bed", "Skin beneath the nail body; its blood vessels give the nail its pink color.", "بستر ناخن", "ac", "body", []],
["nail body", "nail BOD-ee", "The visible, flat part of the nail (also called nail plate).", "تنه ناخن (صفحه ناخن)", "ac", "body", []],
["nail matrix", "nail MAY-triks", "Growth region under the nail root where new nail cells are made.", "ماتریکس ناخن (ناحیه رشد)", "ac", "body", []],
["nail root", "nail root", "The part of the nail hidden under the skin fold at the base.", "ریشه ناخن", "ac", "body", []],
["necrosis", "neh-KROH-sis", "Death of cells or tissue (necr/o = death).", "نکروز (مرگ بافت)", "ds", "sx", []],
["necrotizing fasciitis", "NEK-roh-tye-zing fas-ee-EYE-tis", "Rapidly spreading, life-threatening bacterial infection that destroys skin, fat and fascia ('flesh-eating' infection).", "فاشئیت نکروزان", "ds", "dz", []],
["nevus", "NEE-vus", "Mole or birthmark; benign pigmented spot from a cluster of melanocytes (plural: nevi).", "خال (نووس)", "tx", "dz", []],
["nodule", "NOD-yool", "Solid, raised lesion deeper and larger than a papule, 1–2 cm.", "ندول (گره)", "le", "sx", []],
["onychectomy", "on-ih-KEK-toh-mee", "Surgical removal of a nail (-ectomy = excision).", "برداشتن ناخن", "ac", "tx", []],
["onychia", "oh-NIK-ee-ah", "Inflammation of the nail bed (onych/o = nail, -ia = condition).", "التهاب بستر ناخن", "ac", "dz", []],
["onychocryptosis", "on-ih-koh-krip-TOH-sis", "Ingrown nail (onych/o = nail, crypt/o = hidden, -osis).", "ناخن در گوشت فرورفته", "ac", "dz", []],
["onycholysis", "on-ih-KOL-ih-sis", "Separation of the nail from the nail bed (-lysis = separation, loosening).", "جداشدن ناخن از بستر", "ac", "sx", []],
["onychomalacia", "on-ih-koh-mah-LAY-shee-ah", "Abnormal softening of the nails (-malacia = softening).", "نرمی ناخن", "ac", "sx", []],
["onychomycosis", "on-ih-koh-my-KOH-sis", "Fungal infection of the nails (onych/o = nail, myc/o = fungus, -osis); also called tinea unguium.", "قارچ ناخن", "ac", "dz", []],
["onychopathy", "on-ih-KOP-ah-thee", "Any disease of the nails.", "بیماری ناخن", "ac", "dz", []],
["onychophagia", "on-ih-koh-FAY-jee-ah", "Nail biting (onych/o = nail, -phagia = eating, swallowing).", "ناخن‌جویدن", "ac", "sx", []],
["onychotomy", "on-ih-KOT-oh-mee", "Incision into a nail (-tomy = incision).", "برش ناخن", "ac", "tx", []],
["Pacinian corpuscle", "pah-SIN-ee-an KOR-pus-l", "Pressure receptor deep in the dermis and subcutaneous tissue.", "گیرنده فشار (جسمک پاچینی)", "ly", "body", []],
["pallor", "PAL-or", "Unusual paleness of the skin.", "رنگ‌پریدگی", "le", "sx", []],
["papule", "PAP-yool", "Small, solid, raised lesion less than 1 cm (e.g. a pimple without pus, a wart).", "پاپول (برجستگی کوچک)", "le", "sx", []],
["paronychia", "par-oh-NIK-ee-ah", "Infection and inflammation of the skin fold around a nail (para- = beside).", "عفونت دور ناخن (پارونیکیا)", "ac", "dz", []],
["patch", "pach", "Flat, discolored area larger than 1 cm (e.g. vitiligo).", "پچ (لکه مسطح بزرگ)", "le", "sx", []],
["patch test", "pach test", "Allergy test in which possible allergens are taped to the skin for 48 hours.", "تست پچ (چسبی)", "tx", "lab", []],
["pathogen", "PATH-oh-jen", "Microorganism that causes disease; intact skin is the body's first barrier against pathogens (path/o = disease, -gen = producing).", "عامل بیماری‌زا", "lx", "cell", []],
["pediculicide", "peh-DIK-yoo-lih-side", "Drug that kills lice.", "داروی ضدشپش", "tx", "tx", []],
["pediculosis", "peh-dik-yoo-LOH-sis", "Infestation with lice (pedicul/o = louse); nits are lice eggs attached to hairs.", "شپش‌زدگی", "ds", "dz", []],
["pemphigus", "PEM-fih-gus", "Rare autoimmune disease with large blisters (bullae) on the skin and mucous membranes.", "پمفیگوس", "ds", "dz", []],
["percutaneous", "per-kyoo-TAY-nee-us", "Performed through the skin (per- = through), such as a needle puncture.", "از راه پوست (پرکوتانئوس)", "ly", "body", []],
["petechiae", "peh-TEE-kee-ee", "Tiny, pinpoint red or purple spots from bleeding under the skin (singular: petechia).", "پتشی (نقاط خونریزی)", "le", "sx", []],
["photosensitivity", "foh-toh-sen-sih-TIV-ih-tee", "Abnormal sensitivity of the skin to sunlight (phot/o = light), causing rash or burning.", "حساسیت به نور", "lx", "sx", ["UV"]],
["phototherapy", "foh-toh-THER-ah-pee", "Treatment with ultraviolet light, often for psoriasis (phot/o = light).", "نوردرمانی", "tx", "tx", ["PUVA", "UV"]],
["pilonidal cyst", "pye-loh-NYE-dal sist", "Cyst containing hair, usually over the tailbone (pil/o = hair, nid/o = nest, -al = pertaining to).", "کیست مویی (پایلونیدال)", "ac", "dz", []],
["plaque", "plak", "Raised, flat-topped lesion larger than 1 cm, often formed by papules merging (e.g. psoriasis).", "پلاک (برجستگی پهن)", "le", "sx", []],
["polyp", "POL-ip", "Mass of tissue that projects outward from a surface on a stalk.", "پولیپ (زائده)", "le", "sx", []],
["pore", "por", "Tiny opening of a sweat gland on the skin surface.", "منفذ پوست", "ac", "body", []],
["primary lesion", "PRY-mar-ee LEE-zhun", "The first lesion that appears on healthy skin from a disease (macule, papule, vesicle…).", "ضایعه اولیه", "le", "sx", []],
["pruritic", "proo-RIT-ik", "Itchy; pertaining to itching.", "خارش‌دار", "le", "sx", []],
["pruritus", "proo-RYE-tus", "Severe itching.", "خارش", "le", "sx", []],
["psoriasis", "soh-RYE-ah-sis", "Chronic skin disease with red plaques covered by silvery scales, often on elbows, knees and scalp.", "پسوریازیس", "ds", "dz", []],
["punch biopsy", "punch BYE-op-see", "Removal of a small cylinder of skin with a round punch instrument.", "بیوپسی پانچ", "tx", "lab", ["Bx"]],
["purpura", "PER-pyoo-rah", "Purple patches from bleeding under the skin, larger than petechiae.", "پورپورا", "le", "sx", []],
["purulent", "PYOO-roo-lent", "Containing or producing pus.", "چرکی", "le", "sx", []],
["pustule", "PUS-tyool", "Small raised lesion filled with pus (e.g. acne, impetigo).", "پوسچول (جوش چرکی)", "le", "sx", []],
["pyoderma", "pye-oh-DER-mah", "Any skin condition with pus (py/o = pus, -derma = skin).", "چرک‌پوستی (پیودرما)", "lx", "dz", []],
["rash", "rash", "Temporary eruption of red spots or patches on the skin; also called exanthem.", "بثورات پوستی", "le", "sx", []],
["retinoid", "RET-ih-noyd", "Vitamin A–like drug (e.g. isotretinoin) used for severe acne and wrinkles.", "رتینوئید", "tx", "tx", []],
["rhytid", "RIT-id", "A wrinkle in the skin (rhytid/o = wrinkle); increases as collagen and elastin decrease with age.", "چین و چروک پوست", "ly", "sx", []],
["rhytidectomy", "rit-ih-DEK-toh-mee", "Face-lift; surgical removal of excess skin to remove wrinkles (rhytid/o = wrinkle).", "لیفت صورت (ریتیدکتومی)", "tx", "tx", []],
["rosacea", "roh-ZAY-shee-ah", "Chronic redness of the cheeks and nose with small visible blood vessels and pimples (acne rosacea).", "روزاسه (آکنه گل‌سرخی)", "ds", "dz", []],
["rubella", "roo-BEL-ah", "German measles; viral infection with a pink rash, dangerous to the fetus in pregnancy.", "سرخجه", "ds", "dz", []],
["rubeola", "roo-bee-OH-lah", "Measles; contagious viral disease with fever and a red, blotchy rash.", "سرخک", "ds", "dz", []],
["rule of nines", "rool uv nynz", "Method of estimating the percentage of body surface burned by dividing the adult body into areas of 9% (or multiples of 9).", "قانون نُه‌ها", "ds", "lab", ["BSA"]],
["scabicide", "SKAY-bih-side", "Drug that kills scabies mites (-cide = killing).", "داروی ضدگال", "tx", "tx", []],
["scabies", "SKAY-beez", "Contagious skin infestation by the itch mite, which burrows under the skin and causes intense itching.", "گال (جرب)", "ds", "dz", []],
["scale", "skayl", "Thin flake of dead epidermis that peels from the skin (e.g. psoriasis, dandruff).", "پوسته (اسکیل)", "le", "sx", []],
["scleroderma", "sklair-oh-DER-mah", "Autoimmune disease with hardening and thickening of the skin (scler/o = hard) and sometimes internal organs.", "اسکلرودرمی (سخت‌شدن پوست)", "ds", "dz", []],
["scratch test", "skrach test", "Allergy test in which allergens are placed on scratches or pricks of the skin (prick test).", "تست خراش (پریک)", "tx", "lab", []],
["sebaceous cyst", "seh-BAY-shus sist", "Closed sac under the skin filled with sebum and keratin.", "کیست چربی", "ac", "dz", []],
["sebaceous gland", "seh-BAY-shus gland", "Oil gland of the dermis that secretes sebum into a hair follicle (seb/o = sebum, oil).", "غده چربی (سباسه)", "ac", "body", []],
["seborrhea", "seb-oh-REE-ah", "Excessive discharge of sebum (seb/o = sebum, -rrhea = flow, discharge).", "ترشح زیاد چربی (سبوره)", "ac", "sx", []],
["seborrheic dermatitis", "seb-oh-REE-ik der-mah-TYE-tis", "Inflammation with greasy yellow scales on the scalp, face and chest; dandruff is a mild form.", "درماتیت سبوره", "ds", "dz", []],
["seborrheic keratosis", "seb-oh-REE-ik ker-ah-TOH-sis", "Benign, waxy, brown 'stuck-on' growth common in older adults.", "کراتوز سبوره‌ای", "tx", "dz", []],
["sebum", "SEE-bum", "Oily secretion of sebaceous glands that keeps skin and hair soft and waterproof.", "سبوم (چربی پوست)", "ac", "cell", []],
["second-degree burn", "SEK-ond dih-GREE bern", "Partial-thickness burn of the epidermis and part of the dermis, with blisters and severe pain.", "سوختگی درجه دو (نیمه‌ضخامت)", "ds", "dz", []],
["secondary lesion", "SEK-on-dar-ee LEE-zhun", "Lesion that develops from a primary lesion through scratching, healing or infection (crust, scale, scar…).", "ضایعه ثانویه", "le", "sx", []],
["shave biopsy", "shayv BYE-op-see", "Removal of a raised lesion by slicing it off with a blade at the skin surface.", "بیوپسی تراشیدنی", "tx", "lab", ["Bx"]],
["skin graft", "skin graft", "Transplant of skin to cover a wound, burn or area where skin was removed.", "پیوند پوست", "tx", "tx", ["SG", "STSG", "FTSG"]],
["skin tag", "skin tag", "Small, soft, benign flap of skin on a stalk, common on the neck and armpits.", "زائده گوشتی پوست", "tx", "dz", []],
["skin test", "skin test", "Test in which a substance is applied to or injected into the skin to see if a reaction occurs (allergy or tuberculosis).", "تست پوستی", "tx", "lab", []],
["skin turgor", "skin TER-gor", "Fullness and elasticity of the skin; poor turgor (skin stays tented when pinched) suggests dehydration.", "کشسانی (تورگور) پوست", "ly", "sx", []],
["split-thickness skin graft", "split THIK-nes skin graft", "Graft of the epidermis and part of the dermis.", "پیوند پوست با ضخامت نسبی", "tx", "tx", ["STSG"]],
["squamous", "SKWAY-mus", "Flat and scale-like (squam/o = scale); describes the flat cells of the epidermis.", "سنگفرشی (پولک‌مانند)", "ly", "body", []],
["squamous cell carcinoma", "SKWAY-mus sel kar-sih-NOH-mah", "Skin cancer of the flat keratinocytes; a firm, scaly or ulcerated nodule on sun-exposed skin that can spread.", "کارسینوم سلول سنگفرشی", "tx", "dz", ["SCC", "UV"]],
["stasis ulcer", "STAY-sis UL-ser", "Ulcer of the lower leg caused by poor venous circulation and blood stasis.", "زخم وریدی (استاز)", "ds", "dz", []],
["steatoma", "stee-ah-TOH-mah", "Fatty tumor or sebaceous cyst (steat/o = fat).", "استئاتوم (تومور چربی)", "tx", "dz", []],
["stratum basale", "STRAT-um bay-SAY-lee", "Deepest, growing layer of the epidermis (also called stratum germinativum or basal layer); new cells and melanocytes are found here.", "لایه قاعده‌ای (زاینده)", "ly", "body", []],
["stratum corneum", "STRAT-um KOR-nee-um", "The outermost, horny layer of the epidermis; made of dead, flat cells filled with keratin that are constantly shed.", "لایه شاخی", "ly", "body", []],
["stratum granulosum", "STRAT-um gran-yoo-LOH-sum", "Granular layer of the epidermis where cells begin to die and fill with keratin.", "لایه دانه‌دار", "ly", "body", []],
["stratum lucidum", "STRAT-um LOO-sih-dum", "Thin, clear layer of the epidermis found only in thick skin of the palms and soles.", "لایه شفاف", "ly", "body", []],
["stratum spinosum", "STRAT-um spy-NOH-sum", "Spiny (prickle-cell) layer of the epidermis above the basal layer.", "لایه خاردار", "ly", "body", []],
["subcutaneous", "sub-kyoo-TAY-nee-us", "Pertaining to beneath the skin (sub- = under, cutane/o = skin, -ous = pertaining to).", "زیرجلدی", "ly", "body", ["SubQ"]],
["subcutaneous tissue", "sub-kyoo-TAY-nee-us TISH-yoo", "Layer of fat and loose connective tissue under the dermis (also called hypodermis or superficial fascia); insulates and cushions the body.", "بافت زیرجلدی (هیپودرم)", "ly", "body", ["SubQ"]],
["sudoriferous gland", "soo-dor-IF-er-us gland", "Sweat gland (sudor/o = sweat, fer = to carry); found in the dermis all over the body.", "غده عرق", "ac", "body", []],
["sunscreen", "SUN-skreen", "Cream or lotion that blocks ultraviolet light; its strength is shown by the sun protection factor (SPF).", "ضدآفتاب", "tx", "tx", ["SPF"]],
["suture", "SOO-cher", "Stitch used to close a wound, or the act of stitching.", "بخیه", "tx", "tx", []],
["systemic", "sis-TEM-ik", "Pertaining to the whole body rather than one local area.", "سیستمیک (مربوط به کل بدن)", "lx", "sx", []],
["systemic lupus erythematosus", "sis-TEM-ik LOO-pus er-ih-them-ah-TOH-sus", "Chronic autoimmune disease affecting skin, joints, kidneys and other organs; a butterfly rash across cheeks and nose is typical.", "لوپوس اریتماتوی سیستمیک", "ds", "dz", ["SLE"]],
["thermoregulation", "ther-moh-reg-yoo-LAY-shun", "Control of body temperature; the skin helps by sweating and by widening or narrowing its blood vessels.", "تنظیم دمای بدن", "lx", "body", []],
["third-degree burn", "therd dih-GREE bern", "Full-thickness burn destroying epidermis and dermis, sometimes deeper; skin is white or charred and may be painless.", "سوختگی درجه سه (تمام‌ضخامت)", "ds", "dz", ["FTSG"]],
["tinea", "TIN-ee-ah", "Fungal infection of the skin, hair or nails; commonly called ringworm.", "کچلی (عفونت قارچی پوست)", "ds", "dz", ["KOH"]],
["tinea capitis", "TIN-ee-ah KAP-ih-tis", "Ringworm of the scalp.", "کچلی سر", "ds", "dz", []],
["tinea corporis", "TIN-ee-ah KOR-poh-ris", "Ringworm of the body, with round red rings that clear in the center.", "کچلی بدن", "ds", "dz", []],
["tinea cruris", "TIN-ee-ah KROO-ris", "Fungal infection of the groin (jock itch).", "کچلی کشاله ران", "ds", "dz", []],
["tinea pedis", "TIN-ee-ah PED-is", "Fungal infection of the foot (athlete's foot).", "پای ورزشکار (قارچ پا)", "ds", "dz", []],
["tinea versicolor", "TIN-ee-ah VER-sih-kul-or", "Fungal infection causing patches of lighter or darker skin on the trunk.", "تینه‌آ ورسیکالر (قارچ رنگارنگ)", "ds", "dz", []],
["topical", "TOP-ih-kal", "Applied directly to the skin surface, like a cream or ointment.", "موضعی", "tx", "tx", ["oint"]],
["transdermal", "trans-DER-mal", "Pertaining to through the skin (trans- = across); e.g. a transdermal patch delivers drug through unbroken skin.", "از راه پوست (ترانس‌درمال)", "ly", "tx", []],
["trichomycosis", "trik-oh-my-KOH-sis", "Fungal infection of the hair (trich/o = hair, myc/o = fungus).", "عفونت قارچی مو", "ac", "dz", []],
["trichopathy", "trih-KOP-ah-thee", "Any disease of the hair (trich/o = hair, -pathy = disease).", "بیماری مو", "ac", "dz", []],
["tumor", "TOO-mor", "Solid raised mass larger than 2 cm; may be benign or malignant.", "تومور (توده)", "le", "sx", []],
["ulcer", "UL-ser", "Open sore or erosion of the skin that extends into the dermis or deeper (e.g. decubitus ulcer).", "زخم (اولسر)", "le", "sx", []],
["ultraviolet light", "ul-trah-VYE-oh-let lyte", "Invisible rays of the sun that tan and burn the skin and are the main cause of skin cancer.", "پرتو فرابنفش", "tx", "cell", ["UV"]],
["urticaria", "er-tih-KAIR-ee-ah", "Hives; itchy wheals usually from an allergic reaction.", "کهیر (اورتیکاریا)", "le", "dz", []],
["varicella", "var-ih-SEL-ah", "Chickenpox; contagious viral disease with itchy vesicles that crust over.", "آبله‌مرغان", "ds", "dz", ["VZV"]],
["vascular", "VAS-kyoo-lar", "Pertaining to or rich in blood vessels; the dermis is vascular.", "پررگ، عروقی", "ly", "body", []],
["verruca", "veh-ROO-kah", "Wart; benign growth of the epidermis caused by human papillomavirus (HPV).", "زگیل", "ds", "dz", ["HPV"]],
["vesicle", "VES-ih-kl", "Small blister filled with clear fluid, less than 1 cm (vesic/o = sac, bladder).", "وزیکول (تاول کوچک)", "le", "sx", []],
["vitamin D", "VYE-tah-min DEE", "Vitamin made in the skin when exposed to ultraviolet light; needed to absorb calcium.", "ویتامین D", "lx", "cell", ["UV"]],
["vitiligo", "vit-ih-LYE-goh", "Loss of melanocytes causing white patches of skin (depigmentation).", "ویتیلیگو (پیسی)", "ds", "dz", []],
["wheal", "wheel", "Smooth, slightly raised, itchy swelling that is redder or paler than surrounding skin and goes away quickly (e.g. hives, insect bite).", "کهیر (ویل)", "le", "sx", []],
["Wood lamp", "wood lamp", "Ultraviolet lamp used to look for fungal infections and pigment changes, which glow under it.", "لامپ وود", "tx", "lab", ["UV"]],
["xanthoderma", "zan-thoh-DER-mah", "Yellow discoloration of the skin (xanth/o = yellow, -derma = skin).", "زردی پوست", "lx", "sx", []],
["xanthoma", "zan-THOH-mah", "Yellow nodule or plaque of fat deposits in the skin (xanth/o = yellow).", "گزانتوم (توده زرد)", "tx", "dz", []],
["xenograft", "ZEN-oh-graft", "Skin graft from an animal, such as a pig (xen/o = foreign); also called heterograft.", "زنوگرافت (پیوند از حیوان)", "tx", "tx", []],
["xeroderma", "zee-roh-DER-mah", "Abnormally dry, rough skin (xer/o = dry, -derma = skin).", "خشکی پوست", "lx", "sx", []]];
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
    ['a-, an-', ['an', 'a'], 'without, not', 'بدون، فاقد', '*'],
    ['allo-', ['allo'], 'other, different', 'دیگری', 'tx'],
    ['anti-', ['anti'], 'against', 'ضد', 'tx'],
    ['auto-', ['auto'], 'self', 'خود', 'tx'],
    ['de-', ['de'], 'removal, lack of', 'برداشتن، فقدان', 'le'],
    ['dia-', ['dia'], 'through, across', 'از میان', 'ac'],
    ['dys-', ['dys'], 'bad, abnormal', 'بد، غیرطبیعی', 'tx'],
    ['ec-, ex-', ['ex', 'ec'], 'out, outside', 'بیرون', 'tx'],
    ['epi-', ['epi'], 'upon, above', 'روی، بالای', 'lx'],
    ['hetero-', ['hetero'], 'different', 'متفاوت', 'tx'],
    ['homo-', ['homo'], 'same', 'یکسان', 'tx'],
    ['hyper-', ['hyper'], 'excessive, above normal', 'بیش از حد', '*'],
    ['hypo-', ['hypo'], 'under, below, deficient', 'زیر، کمتر از حد', '*'],
    ['intra-', ['intra'], 'within', 'درون', 'ly'],
    ['para-', ['para', 'par'], 'beside, around', 'کنار، اطراف', 'ac'],
    ['per-', ['per'], 'through', 'از راه', 'ly'],
    ['sub-', ['sub'], 'under, below', 'زیر', 'ly'],
    ['trans-', ['trans'], 'through, across', 'از میان، از راه', 'ly'],
    ['ultra-', ['ultra'], 'beyond, excess', 'فرا، ماورای', 'tx'],
    // ریشه‌ها: پوست و لایه‌ها
    ['derm/o, dermat/o', ['dermat', 'derm'], 'skin', 'پوست', 'lx'],
    ['cutane/o', ['cutane'], 'skin', 'پوست', 'lx'],
    ['kerat/o', ['keratin', 'kerat'], 'horny tissue, hard; keratin', 'شاخی، سخت (کراتین)', 'ly'],
    ['squam/o', ['squam'], 'scale', 'پولک، فلس', 'ly'],
    ['adip/o', ['adip'], 'fat', 'چربی', 'ly'],
    ['lip/o', ['lip'], 'fat', 'چربی', 'ly'],
    ['steat/o', ['steat'], 'fat', 'چربی', 'tx'],
    ['fibr/o', ['fibr'], 'fiber', 'رشته (فیبر)', 'ly'],
    ['papill/o', ['papill'], 'nipple-like projection', 'برجستگی پستانک‌مانند', 'ly'],
    ['vascul/o, angi/o', ['vascul', 'angi'], 'vessel', 'رگ', 'ly'],
    ['cyt/o', ['cyt'], 'cell', 'سلول', '*'],
    ['therm/o', ['therm'], 'heat', 'گرما', 'lx'],
    ['phot/o', ['phot'], 'light', 'نور', 'lx'],
    ['path/o', ['path'], 'disease', 'بیماری', '*'],
    // ریشه‌ها: رنگ‌ها
    ['erythr/o, erythem/o', ['erythemat', 'erythem', 'erythr'], 'red', 'قرمز', 'lx'],
    ['melan/o', ['melan'], 'black, dark', 'سیاه، تیره', 'ly'],
    ['leuk/o', ['leuk'], 'white', 'سفید', 'lx'],
    ['albin/o', ['albin'], 'white (no pigment)', 'سفید (بی‌رنگدانه)', 'ds'],
    ['cyan/o', ['cyan'], 'blue', 'آبی، کبود', 'lx'],
    ['xanth/o', ['xanth'], 'yellow', 'زرد', 'lx'],
    ['jaund/o', ['jaund'], 'yellow', 'زرد', 'le'],
    ['chrom/o', ['chrom'], 'color', 'رنگ', 'lx'],
    // ریشه‌ها: ویژگی‌ها
    ['xer/o', ['xer'], 'dry', 'خشک', 'lx'],
    ['ichthy/o', ['ichthy'], 'dry, scaly (fish-like)', 'خشک و پولکی (ماهی‌وار)', 'ds'],
    ['scler/o', ['scler'], 'hard, hardening', 'سخت', 'ds'],
    ['rhytid/o', ['rhytid'], 'wrinkle', 'چروک', 'tx'],
    // ریشه‌ها: ضمائم
    ['trich/o', ['trich'], 'hair', 'مو', 'ac'],
    ['pil/o', ['pil'], 'hair', 'مو', 'ac'],
    ['follicul/o', ['follicul'], 'follicle (small sac)', 'فولیکول (کیسه کوچک)', 'ac'],
    ['onych/o', ['onych'], 'nail', 'ناخن', 'ac'],
    ['ungu/o', ['ungu'], 'nail', 'ناخن', 'ac'],
    ['seb/o', ['seb'], 'sebum, oil', 'چربی پوست (سبوم)', 'ac'],
    ['hidr/o', ['hidr'], 'sweat', 'عرق', 'ac'],
    ['sudor/o', ['sudor'], 'sweat', 'عرق', 'ac'],
    ['aden/o', ['aden'], 'gland', 'غده', 'ac'],
    ['crypt/o', ['crypt'], 'hidden', 'پنهان', 'ac'],
    ['nid/o', ['nid'], 'nest', 'لانه', 'ac'],
    ['brom/o', ['brom'], 'stench, foul odor', 'بوی بد', 'ac'],
    // ریشه‌ها: ضایعه، عفونت و مرگ بافت
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', 'خون', 'le'],
    ['vesic/o', ['vesic'], 'sac, blister', 'کیسه، تاول', 'le'],
    ['py/o', ['py'], 'pus', 'چرک', 'le'],
    ['prurit/o', ['prurit'], 'itching', 'خارش', 'le'],
    ['myc/o', ['myc'], 'fungus', 'قارچ', 'ds'],
    ['pedicul/o', ['pedicul'], 'louse (lice)', 'شپش', 'ds'],
    ['staphyl/o', ['staphyl'], 'clusters (like grapes)', 'خوشه‌ای', 'ds'],
    ['strept/o', ['strept'], 'twisted chains', 'زنجیره‌ای', 'ds'],
    ['necr/o', ['necr'], 'death', 'مرگ', 'ds'],
    // ریشه‌ها: تومور، تشخیص و درمان
    ['carcin/o', ['carcin'], 'cancer', 'سرطان', 'tx'],
    ['sarc/o', ['sarc'], 'flesh (connective tissue)', 'گوشت (بافت همبند)', 'tx'],
    ['histi/o', ['histi'], 'tissue', 'بافت', 'tx'],
    ['actin/o', ['actin'], 'ray, radiation', 'پرتو', 'tx'],
    ['bi/o', ['bi'], 'life', 'زندگی، زنده', 'tx'],
    ['cry/o', ['cry'], 'cold', 'سرما', 'tx'],
    ['electr/o', ['electr'], 'electricity', 'برق', 'tx'],
    ['cauter/o', ['cauter'], 'to burn, heat', 'سوزاندن', 'tx'],
    ['cis/o', ['cis'], 'to cut', 'بریدن', 'tx'],
    ['blephar/o', ['blephar'], 'eyelid', 'پلک', 'tx'],
    ['xen/o', ['xen'], 'foreign, strange', 'بیگانه', 'tx'],
    ['system/o', ['system'], 'system, whole body', 'دستگاه، کل بدن', 'lx'],
    ['theli/o', ['theli'], 'nipple (covering tissue)', 'نوک پستانک (بافت پوششی)', 'ly'],
    ['coll/a', ['colla'], 'glue', 'چسب', 'ly'],
    ['elast/o', ['elast'], 'elastic, stretchy', 'کشسان', 'ly'],
    ['pigment/o', ['pigment'], 'pigment, color', 'رنگدانه', 'le'],
    ['kel/o', ['kel'], 'growth, tumor', 'رشد، برآمدگی', 'le'],
    ['cyst/o', ['cyst'], 'sac, bladder', 'کیسه', 'le'],
    ['pur/o', ['pur'], 'pus', 'چرک', 'le'],
    ['hirsut/o', ['hirsut'], 'hairy', 'پرمو', 'ac'],
    ['psor/o', ['psor'], 'itch', 'خارش', 'ds'],
    ['candid/o', ['candid'], 'Candida (yeast)', 'کاندیدا (مخمر)', 'ds'],
    ['cellul/o', ['cellul'], 'little cell (cell tissue)', 'بافت سلولی', 'ds'],
    ['sept/o', ['sept'], 'infection', 'عفونت', 'tx'],
    ['fung/i', ['fung'], 'fungus', 'قارچ', 'tx'],
    ['vir/o', ['vir'], 'virus', 'ویروس', 'tx'],
    ['abras/o', ['abras'], 'to scrape off', 'ساییدن، تراشیدن', 'le'],
    // پسوندها
    ['-al, -ic, -ous, -ar, -ary', ['ary', 'eal', 'ial', 'ous', 'ic', 'al', 'ar'], 'pertaining to', 'مربوط به', '*'],
    ['-ation, -ion', ['ation', 'ion'], 'process', 'فرایند', '*'],
    ['-cle, -le', ['cle', 'le'], 'small', 'کوچک', 'le'],
    ['-in, -ine', ['ine', 'in'], 'substance', 'ماده', '*'],
    ['-is, -um, -us, -a', ['is', 'um', 'us', 'a'], 'noun ending', 'پایان اسم', '*'],
    ['-ulent', ['ulent'], 'full of', 'پر از', 'le'],
    ['-cele', ['cele'], 'hernia, swelling', 'فتق، برآمدگی', 'ly'],
    ['-cide', ['cide'], 'killing', 'کشنده', 'tx'],
    ['-coccus', ['coccus', 'cocci'], 'berry-shaped bacterium', 'باکتری کروی', 'ds'],
    ['-cyte', ['cyte'], 'cell', 'سلول', '*'],
    ['-derma', ['derma'], 'skin', 'پوست', 'lx'],
    ['-ectomy', ['ectomy'], 'excision, surgical removal', 'برداشتن (جراحی)', '*'],
    ['-esis', ['esis'], 'condition', 'حالت', 'ac'],
    ['-gen', ['gen'], 'producing', 'تولیدکننده', 'lx'],
    ['-graft', ['graft'], 'transplantation', 'پیوند', 'tx'],
    ['-ia, -y', ['ia', 'y'], 'condition', 'حالت', '*'],
    ['-iasis', ['iasis'], 'abnormal condition', 'بیماری، حالت', 'ds'],
    ['-ism', ['ism'], 'condition, state of', 'حالت، وضعیت', '*'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-logist', ['logist'], 'specialist', 'متخصص', 'lx'],
    ['-logy', ['logy'], 'study of', 'علم، مطالعه', 'lx'],
    ['-lysis, -lytic', ['lysis', 'lytic'], 'breakdown, separation', 'تجزیه، جداشدن', 'tx'],
    ['-malacia', ['malacia'], 'softening', 'نرمی', 'ac'],
    ['-oid', ['oid'], 'resembling', 'شبیه به', '*'],
    ['-oma', ['oma'], 'tumor, mass', 'تومور، توده', '*'],
    ['-opsy', ['opsy'], 'view of', 'مشاهده، دیدن', 'tx'],
    ['-ose', ['ose'], 'full of, pertaining to', 'سرشار از', 'ly'],
    ['-osis', ['osis', 'sis'], 'abnormal condition', 'وضعیت غیرطبیعی', '*'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', '*'],
    ['-phagia', ['phagia'], 'eating, swallowing', 'خوردن', 'ac'],
    ['-phoresis', ['phoresis'], 'carrying, transmission', 'حمل، انتقال', 'ac'],
    ['-plasia, -plastic', ['plastic', 'plasia'], 'formation, growth', 'رشد، شکل‌گیری', 'tx'],
    ['-plasty', ['plasty'], 'surgical repair', 'ترمیم جراحی', 'tx'],
    ['-rrhea', ['rrhea'], 'flow, discharge', 'جریان، ترشح', 'ac'],
    ['-therapy', ['therapy'], 'treatment', 'درمان', 'tx'],
    ['-tome', ['tome'], 'instrument to cut', 'ابزار برش', 'tx'],
    ['-tomy', ['tomy'], 'incision, cutting into', 'برش', 'tx'],
    ['-trophy', ['trophy'], 'development, nourishment', 'رشد، تغذیه', 'le'],
    ['-ule', ['ule'], 'small', 'کوچک', 'le']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    ['AD', 'atopic dermatitis', 'درماتیت آتوپیک', 'ds'],
    ['AK', 'actinic keratosis', 'کراتوز آفتابی (پیش‌سرطانی)', 'tx'],
    ['BCC', 'basal cell carcinoma', 'کارسینوم سلول قاعده‌ای', 'tx'],
    ['bid', 'twice a day (bis in die)', 'دو بار در روز', 'tx'],
    ['BSA', 'body surface area', 'سطح بدن (درصد سوختگی)', 'ds'],
    ['Bx, bx', 'biopsy', 'نمونه‌برداری (بیوپسی)', 'tx'],
    ['C&S', 'culture and sensitivity', 'کشت و آنتی‌بیوگرام', 'tx'],
    ['decub', 'decubitus ulcer', 'زخم بستر', 'ds'],
    ['Derm, derm', 'dermatology', 'پوست‌شناسی', 'lx'],
    ['DLE', 'discoid lupus erythematosus', 'لوپوس دیسکوئید (پوستی)', 'ds'],
    ['Dx', 'diagnosis', 'تشخیص', 'lx'],
    ['FH', 'family history', 'سابقه خانوادگی', 'lx'],
    ['FS', 'frozen section', 'برش منجمد', 'tx'],
    ['FTSG', 'full-thickness skin graft', 'پیوند پوست تمام‌ضخامت', 'tx'],
    ['HPV', 'human papillomavirus', 'ویروس پاپیلومای انسانی (عامل زگیل)', 'ds'],
    ['hs', 'at bedtime (hora somni)', 'هنگام خواب', 'tx'],
    ['HSV', 'herpes simplex virus', 'ویروس هرپس سیمپلکس (تبخال)', 'ds'],
    ['Hx', 'history', 'شرح حال، سابقه', 'lx'],
    ['I&D', 'incision and drainage', 'برش و تخلیه', 'tx'],
    ['ID', 'intradermal', 'داخل‌پوستی', 'ly'],
    ['IM', 'intramuscular', 'داخل عضلانی', 'ly'],
    ['IV', 'intravenous', 'داخل وریدی', 'ly'],
    ['KOH', 'potassium hydroxide (fungal test)', 'پتاسیم هیدروکسید (آزمایش قارچ)', 'tx'],
    ['MM', 'malignant melanoma', 'ملانوم بدخیم', 'tx'],
    ['MRSA', 'methicillin-resistant Staphylococcus aureus', 'استافیلوکوک طلایی مقاوم به متی‌سیلین', 'ds'],
    ['oint', 'ointment', 'پماد', 'tx'],
    ['PE', 'physical examination', 'معاینه فیزیکی', 'lx'],
    ['PPD', 'purified protein derivative (tuberculin)', 'مشتق پروتئینی خالص (تست سل)', 'tx'],
    ['prn', 'as needed (pro re nata)', 'در صورت نیاز', 'tx'],
    ['PUVA', 'psoralen plus ultraviolet A', 'پسورالن همراه با پرتو UVA (نوردرمانی)', 'tx'],
    ['qid', 'four times a day', 'چهار بار در روز', 'tx'],
    ['Rx', 'prescription, treatment', 'نسخه، درمان', 'lx'],
    ['SCC', 'squamous cell carcinoma', 'کارسینوم سلول سنگفرشی', 'tx'],
    ['SG', 'skin graft', 'پیوند پوست', 'tx'],
    ['SLE', 'systemic lupus erythematosus', 'لوپوس اریتماتوی سیستمیک', 'ds'],
    ['SPF', 'sun protection factor', 'ضریب محافظت در برابر آفتاب', 'tx'],
    ['staph', 'staphylococcus', 'استافیلوکوک (باکتری خوشه‌ای)', 'ds'],
    ['strep', 'streptococcus', 'استرپتوکوک (باکتری زنجیره‌ای)', 'ds'],
    ['STSG', 'split-thickness skin graft', 'پیوند پوست با ضخامت نسبی', 'tx'],
    ['SubQ, subcut', 'subcutaneous', 'زیرجلدی', 'ly'],
    ['TB', 'tuberculosis', 'سل', 'tx'],
    ['tid', 'three times a day', 'سه بار در روز', 'tx'],
    ['UV', 'ultraviolet', 'فرابنفش', 'tx'],
    ['UVA, UVB', 'ultraviolet A, ultraviolet B', 'پرتو فرابنفش نوع A و نوع B', 'tx'],
    ['VZV', 'varicella-zoster virus', 'ویروس آبله‌مرغان و زونا', 'ds'],
    ['y/o', 'years old', 'ساله', 'lx']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {
    Anatomy_and_Physiology: 'آناتومی و فیزیولوژی', Pathology_and_Disorders: 'بیماری‌ها و اختلالات',
    Laboratory_and_Diagnostics: 'آزمایشگاه و تشخیص', Pharmacology_and_Treatment: 'درمان، دارو و جراحی'
  };
  /* دسته ریز هر واژه در داده آمده (k)؛ دسته اصلی (c) از روی آن ساخته می‌شود */
  const CATS = [
    { id: 'body', icon: '🖐️', name: 'ساختارهای پوست و ضمائم' },
    { id: 'cell', icon: '🧬', name: 'سلول‌ها و مواد' },
    { id: 'field', icon: '🎓', name: 'رشته‌ها و متخصصان' },
    { id: 'dz', icon: '🦠', name: 'بیماری‌ها' },
    { id: 'sx', icon: '🔍', name: 'ضایعه‌ها و نشانه‌ها' },
    { id: 'lab', icon: '🧪', name: 'تشخیص و آزمایش' },
    { id: 'tx', icon: '💊', name: 'درمان، دارو و جراحی' }
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
      const own = ABBR.filter(a => !w || a.w === w), pool = own.length >= 4 ? own : ABBR, a = rnd(pool);
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
  const f = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${p.size || 10}" font-weight="${p.w || 600}" fill="${p.fill || MUTED}" text-anchor="${FLIP[p.anchor || 'middle']}" direction="rtl" font-family="${FONT_FA}">${LRI(s)}</text>`; };
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
    return svg(360, 192, `${f(180, 22, 'یک واژه = پیشوند + ریشه + پسوند', { size: 11, fill: INK, w: 700 })}
      ${part(10, 60, 'sub', '#1272a3', '#ddf1fb')}${part(76, 108, 'cutane', '#b24e26', '#fde6da')}${part(190, 56, 'ous', '#3f8a05', '#e7f9d8')}
      ${br(10, 70, 'prefix', 'پیشوند: زیر', '#1272a3')}${br(76, 184, 'root', 'ریشه: پوست', '#b24e26')}${br(190, 246, 'suffix', 'پسوند: مربوط به', '#3f8a05')}
      <rect x="258" y="40" width="94" height="40" rx="10" fill="#f8f6f5"/>${f(305, 58, 'مربوط به', { size: 10.5, fill: '#3f8a05', w: 800 })}${f(305, 74, 'زیرِ پوست', { size: 10.5, fill: INK, w: 800 })}
      <path d="M232 150 C170 176 100 176 46 150" stroke="#b24e26" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M50 146 l-6 4 l7 3" stroke="#b24e26" stroke-width="2" fill="none"/>
      ${f(140, 186, 'معنی را از آخر بخوان: پسوند ← پیشوند ← ریشه', { size: 10, fill: '#b24e26', w: 700 })}`, 'آناتومی یک واژه پزشکی');
  };

  /* نقشه کامل پوست: لایه‌ها و ضمائم */
  A['skin-block'] = () => {
    const s = section(92, 66, 170, { e: 16, d: 92, s: 54, amp: 6 });
    const sh = nid();
    const hx = 132, sx = 214;
    return svg(360, 300, `${f(180, 18, 'برش پوست: سه لایه و ضمائم', { size: 11.5, fill: INK, w: 800 })}
      <g filter="url(#${sh})">${s.body}</g>
      ${hairUnit(hx, s.y, s.yE + 66, { len: 46 })}${sebGland(hx + 10, s.yE + 26)}
      <path d="M${hx + 8} ${s.yE + 50} L${hx + 36} ${s.yE + 4}" stroke="#c0392b" stroke-width="2.2" stroke-linecap="round"/>
      ${sweatGland(sx, s.yD - 14, s.y)}
      <path d="M${s.x} ${s.yE + 40} C${s.x + 50} ${s.yE + 30} ${s.x + 120} ${s.yE + 60} ${s.x + 170} ${s.yE + 48}" stroke="${C.nerve}" stroke-width="2" fill="none"/>
      ${bracket(86, s.y, s.yE, 'epidermis', 'اپیدرم', 'left', '#b24e26')}
      ${bracket(86, s.yE, s.yD, 'dermis', 'درم', 'left', '#b03e5c')}
      ${bracket(86, s.yD, s.yS, 'subcutaneous', 'زیرجلدی', 'left', '#9a6a00')}
      ${pin(hx - 4, s.y - 30, 280, 36)}${lab(318, 34, 'hair shaft', 'ساقه مو', { size: 9.5 })}
      ${pin(sx + 2, s.y, 280, 74)}${lab(318, 72, 'pore', 'منفذ عرق', { size: 9.5 })}
      ${pin(hx + 16, s.yE + 30, 280, 112)}${lab(318, 110, 'sebaceous gland', 'غده چربی', { size: 9.5 })}
      ${pin(hx + 24, s.yE + 26, 280, 150)}${lab(318, 148, 'arrector pili', 'عضله راست‌کننده مو', { size: 9.5 })}
      ${pin(sx, s.yD - 12, 280, 188)}${lab(318, 186, 'sweat gland', 'غده عرق', { size: 9.5 })}
      ${pin(hx, s.yE + 60, 280, 226)}${lab(318, 224, 'hair follicle', 'فولیکول مو', { size: 9.5 })}
      ${pin(s.x + 150, s.yD + 30, 280, 262)}${lab(318, 260, 'adipose tissue', 'بافت چربی', { size: 9.5 })}
      ${pin(s.x + 8, s.yD - 4, 56, 262)}${lab(46, 276, 'blood vessels', 'رگ‌های خونی', { size: 9.5 })}`,
      'برش پوست با لایه‌ها و ضمائم', `${s.defs}${shadow(sh)}`);
  };

  /* پنج کار پوست */
  A['skin-functions'] = () => {
    const card = (x, y, ic, en, fa, sub, c) => `<rect x="${x}" y="${y}" width="108" height="76" rx="14" fill="${c}"/>${t(x + 54, y + 26, ic, { size: 20 })}${t(x + 54, y + 46, en, { size: 10.5, w: 900 })}${f(x + 54, y + 60, fa, { size: 9.5, fill: INK, w: 700 })}${sub ? f(x + 54, y + 72, sub, { size: 8.5 }) : ''}`;
    return svg(360, 200, `${f(180, 18, 'پوست بزرگ‌ترین اندام بدن است و پنج کار اصلی دارد', { size: 11, fill: INK, w: 800 })}
      ${card(10, 30, '🛡️', 'protection', 'محافظت', 'سد میکروب، آب و UV', '#fde9df')}
      ${card(126, 30, '🌡️', 'temperature', 'تنظیم دما', 'تعریق و تغییر قطر رگ', '#fdecef')}
      ${card(242, 30, '✋', 'sensation', 'حس', 'لمس، فشار، درد، دما', '#fff4d6')}
      ${card(68, 114, '☀️', 'vitamin D', 'ساخت ویتامین D', 'با نور فرابنفش', '#eef7e6')}
      ${card(184, 114, '💧', 'excretion', 'دفع و ترشح', 'عرق و چربی پوست', '#e6f2fc')}`, 'کارهای پوست');
  };

  /* رنگین‌کمان ریشه‌های رنگ */
  A['color-roots'] = () => {
    const row = (y, col, root, en, fa, ex) => `<circle cx="34" cy="${y}" r="13" fill="${col}" stroke="#00000022"/>${t(60, y + 4, root, { size: 13, w: 900, anchor: 'start', fill: INK })}${t(146, y + 4, en, { size: 10, anchor: 'start', fill: MUTED })}${f(250, y + 4, fa, { size: 10.5, fill: INK, w: 800, anchor: 'end' })}${t(350, y + 4, ex, { size: 10, anchor: 'end', fill: '#b24e26', w: 800 })}`;
    return svg(360, 236, `${f(180, 18, 'ریشه‌های رنگ: پوست را با رنگش توصیف کن', { size: 11, fill: INK, w: 800 })}
      ${row(44, '#e04a3c', 'erythr/o', 'red', 'قرمز', 'erythema')}
      ${row(78, '#2b2b2b', 'melan/o', 'black', 'سیاه', 'melanoma')}
      ${row(112, '#fbfbfb', 'leuk/o', 'white', 'سفید', 'leukoderma')}
      ${row(146, '#5b7fd6', 'cyan/o', 'blue', 'آبی، کبود', 'cyanosis')}
      ${row(180, '#f2c230', 'xanth/o', 'yellow', 'زرد', 'xanthoma')}
      ${row(214, '#f4ece6', 'albin/o', 'white', 'سفید (بی‌رنگدانه)', 'albinism')}`, 'ریشه‌های رنگ');
  };

  /* دوقلوهای فریبنده: hidr/o و hydr/o */
  A.twins = () => {
    const box = (x, c, bg, w1, m1, ex, ic) => `<rect x="${x}" y="34" width="160" height="130" rx="14" fill="${bg}"/>${t(x + 80, 64, ic, { size: 24 })}${t(x + 80, 96, w1, { size: 20, fill: c, w: 900 })}${f(x + 80, 116, m1, { size: 11, fill: INK, w: 800 })}${t(x + 80, 142, ex, { size: 10.5, fill: c, w: 800 })}`;
    return svg(360, 186, `${f(180, 20, 'یک حرف، دو معنی کاملاً متفاوت', { size: 11, fill: INK, w: 800 })}
      ${box(12, '#b24e26', '#fde9df', 'hidr/o', 'عرق', 'hyperhidrosis', '💦')}
      ${box(188, '#1565c0', '#e6f2fc', 'hydr/o', 'آب', 'hydration', '🚰')}
      ${f(180, 180, 'hidr/o بدون y = عرق؛ hydr/o با y = آب', { size: 10, fill: MUTED, w: 700 })}`, 'hidr/o و hydr/o');
  };

  /* ================= لایه‌های پوست ================= */
  /* پنج لایه اپیدرم */
  A['epidermis-strata'] = () => {
    const x = 50, w = 130;
    const bands = [
      ['stratum corneum', 'لایه شاخی: سلول مرده', '#f3e2cf', 30],
      ['stratum lucidum', 'لایه شفاف: کف دست و پا', '#fbf6ee', 14],
      ['stratum granulosum', 'لایه دانه‌دار', '#f2c9a2', 22],
      ['stratum spinosum', 'لایه خاردار', '#eeb48c', 34],
      ['stratum basale', 'لایه قاعده‌ای (زاینده)', '#d98b66', 22]
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
    body += `<path d="${wave(x, x + w, y, 6, 4)} V${y + 30} H${x} Z" fill="#f6c5bb"/>${f(x + w / 2, y + 22, 'درم', { size: 10, fill: '#b03e5c', w: 800 })}`;
    body += `<path d="M30 ${y - 6} V48" stroke="#b24e26" stroke-width="2" marker-end="url(#mk)"/>`;
    return svg(360, 250, `${f(180, 20, 'اپیدرم از پایین به بالا ساخته می‌شود', { size: 11, fill: INK, w: 800 })}${body}
      ${f(180, 222, 'سلول‌ها بالا می‌روند، کراتینی می‌شوند و می‌ریزند', { size: 9, fill: '#b24e26' })}
      ${f(180, 238, 'سلول‌های قهوه‌ای = ملانوسیت در لایه قاعده‌ای', { size: 9, fill: C.mel })}`, 'لایه‌های اپیدرم', marker('mk', '#b24e26'));
  };
  function hexP(cx, cy, r) { let d = ''; for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * Math.PI / 3; d += (i ? 'L' : 'M') + (cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy + r * Math.sin(a)).toFixed(1); } return d + 'Z'; }

  /* ملانوسیت و رنگدانه */
  A.melanocyte = () => {
    const a = nid();
    let kc = '';
    for (let i = 0; i < 6; i++) kc += `<rect x="${40 + i * 48}" y="96" width="40" height="40" rx="10" fill="#f1c0a0" stroke="#c98d6f"/><path d="M${52 + i * 48} 102 q8 -6 16 0" stroke="${C.mel}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    return svg(360, 236, `${f(180, 18, 'ملانین چتری روی هسته سلول‌ها می‌سازد', { size: 11, fill: INK, w: 800 })}
      ${['56', '120', '184', '248', '312'].map(x => arrow(a, +x, 30, +x - 8, 84, '#f2a20c', 2.4)).join('')}
      ${lab(22, 40, 'UV', 'پرتو فرابنفش', { size: 11, fill: '#d98a00', anchor: 'start', sym: true })}
      ${kc}
      <path d="M40 150 H330" stroke="#d98b66" stroke-width="2"/>
      <g><ellipse cx="180" cy="162" rx="20" ry="12" fill="${C.mel}"/><path d="M164 156 Q130 140 100 134 M196 156 Q232 140 262 134 M174 152 Q160 130 150 120 M188 152 Q204 128 214 118" stroke="${C.mel}" stroke-width="4" fill="none" stroke-linecap="round"/>
      ${[100, 262, 150, 214].map((x, i) => `<circle cx="${x}" cy="${[134, 134, 120, 118][i]}" r="4" fill="#3a2010"/>`).join('')}</g>
      ${pin(180, 172, 170, 192)}${lab(170, 204, 'melanocyte', 'ملانوسیت در لایه قاعده‌ای', { size: 10.5, fill: C.mel })}
      ${pin(112, 118, 40, 192)}${lab(52, 204, 'keratinocyte', 'سلول کراتین‌ساز', { size: 9.5 })}
      ${f(292, 210, 'melanin: رنگ پوست، مو و چشم', { size: 9.5, fill: INK, w: 700 })}${f(292, 224, 'آفتاب ← ملانین بیشتر ← برنزه', { size: 9 })}`, 'ملانوسیت و ملانین', marker(a, '#f2a20c'));
  };

  /* درم: کلاژن، رگ و گیرنده‌ها */
  A.dermis = () => {
    const s = section(112, 40, 160, { e: 14, d: 120, s: 30, amp: 9, waves: 5 });
    return svg(360, 236, `${f(180, 20, 'درم: لایه زنده، پرعروق و پر از عصب', { size: 11, fill: INK, w: 800 })}${s.body}
      <ellipse cx="140" cy="64" rx="5" ry="8" fill="#f7d6a8" stroke="#c99a1d"/><path d="M140 72 V132" stroke="${C.nerve}" stroke-width="1.8"/>
      <g transform="translate(236 136)"><ellipse rx="13" ry="9" fill="#f7e2bd" stroke="#c99a1d"/><ellipse rx="8" ry="5" fill="none" stroke="#c99a1d"/><ellipse rx="3" ry="2" fill="#c99a1d"/></g>
      <path d="M190 60 C180 80 210 92 196 110 C190 120 210 130 206 150" stroke="${C.art}" stroke-width="2.2" fill="none"/>
      ${bracket(106, s.yE, s.yE + 30, 'papillary layer', 'لایه پرزدار', 'left', '#b03e5c')}
      ${bracket(106, s.yE + 34, s.yD, 'reticular layer', 'لایه مشبک (کلاژن)', 'left', '#b03e5c')}
      ${pin(118, 46, 40, 40)}${lab(56, 34, 'epidermis', '', { size: 10, fill: '#b24e26' })}
      ${pin(140, 62, 288, 56)}${lab(322, 54, 'Meissner', 'گیرنده لمس', { size: 9.5 })}
      ${pin(198, 100, 288, 100)}${lab(322, 98, 'capillaries', 'مویرگ‌ها', { size: 9.5 })}
      ${pin(244, 136, 288, 146)}${lab(322, 144, 'Pacinian', 'گیرنده فشار', { size: 9.5 })}
      ${pin(160, 120, 288, 192)}${lab(322, 190, 'collagen', 'رشته کلاژن', { size: 9.5 })}
      ${f(180, 228, 'dermis = corium • اپیدرم رگ ندارد و از مویرگ‌های درم غذا می‌گیرد', { size: 9, fill: MUTED })}`, 'لایه‌های درم', s.defs);
  };

  /* تنظیم دما: گرما و سرما */
  A.thermo = () => {
    const a = nid();
    const s1 = section(18, 70, 150, { e: 10, d: 60, s: 20, fat: false, fib: false, vessels: false, amp: 4 });
    const s2 = section(192, 70, 150, { e: 10, d: 60, s: 20, fat: false, fib: false, vessels: false, amp: 4 });
    return svg(360, 236, `${lab(93, 22, 'hot • vasodilation', 'گرما: گشاد شدن رگ‌ها', { size: 11, fill: '#c62828' })}${lab(267, 22, 'cold • vasoconstriction', 'سرما: تنگ شدن رگ‌ها', { size: 11, fill: '#1565c0' })}
      ${s1.body}${s2.body}
      <path d="M18 112 H168" stroke="${C.art}" stroke-width="10" opacity=".85"/><path d="M192 112 H342" stroke="${C.art}" stroke-width="3" opacity=".85"/>
      ${sweatGland(70, 130, 70)}${sweatGland(130, 130, 70)}
      ${[60, 92, 124, 150].map(x => arrow(a, x, 66, x, 50, '#e05a2b', 2)).join('')}
      ${t(70, 62, '💧', { size: 11 })}${t(132, 62, '💧', { size: 11 })}
      <path d="M262 134 l-5 -10 M262 134 l5 -10 M262 134 V108" stroke="#8aa2b8" stroke-width="2" fill="none"/>${t(286, 64, '🥶', { size: 14 })}
      ${f(93, 176, 'خون بیشتر به سطح ← گرما دفع می‌شود', { size: 9.5, fill: INK, w: 700 })}${f(93, 192, 'عرق تبخیر می‌شود ← خنک', { size: 9.5 })}
      ${f(267, 176, 'خون کمتر به سطح ← گرما حفظ می‌شود', { size: 9.5, fill: INK, w: 700 })}${f(267, 192, 'سیخ شدن مو (arrector pili)', { size: 9.5 })}
      ${f(180, 222, 'thermoregulation: پوست ترموستات بدن است', { size: 10, fill: '#b24e26', w: 800 })}`, 'تنظیم دما', s1.defs + s2.defs + marker(a, '#e05a2b'));
  };

  /* ترمیم زخم در سه مرحله */
  A['wound-healing'] = () => {
    const panel = (px, n, fa, en, draw) => { const s = section(px, 64, 104, { e: 10, d: 44, s: 22, amp: 4 }); return { b: `${s.body}${draw(s)}${lab(px + 52, 172, en, fa, { size: 10 })}${t(px + 52, 40, n, { size: 15, fill: '#b24e26', w: 900 })}`, d: s.defs }; };
    const p1 = panel(10, '1', 'لخته و دلمه', 'clot / scab', s => `<path d="M${s.x + 36} ${s.y} L${s.x + 46} ${s.yE + 30} L${s.x + 58} ${s.yE + 30} L${s.x + 68} ${s.y} Z" fill="${C.blood}"/><path d="M${s.x + 32} ${s.y} Q${s.x + 52} ${s.y - 10} ${s.x + 72} ${s.y}" fill="#6b2a1c"/>`);
    const p2 = panel(128, '2', 'بافت جوانه‌ای', 'granulation tissue', s => `<path d="M${s.x + 36} ${s.y} L${s.x + 46} ${s.yE + 30} L${s.x + 58} ${s.yE + 30} L${s.x + 68} ${s.y} Z" fill="#e8556a"/>${[0, 1, 2, 3].map(i => `<circle cx="${s.x + 44 + i * 5}" cy="${s.yE + 8 + (i % 2) * 8}" r="2.6" fill="#ff8fa0"/>`).join('')}<path d="M${s.x + 32} ${s.y} Q${s.x + 52} ${s.y - 6} ${s.x + 72} ${s.y}" fill="#7a3a26"/>`);
    const p3 = panel(246, '3', 'اسکار (جای زخم)', 'scar (cicatrix)', s => `<path d="M${s.x + 40} ${s.y} L${s.x + 48} ${s.yE + 26} L${s.x + 56} ${s.yE + 26} L${s.x + 64} ${s.y} Z" fill="#fbe7e1"/>${[0, 1, 2, 3].map(i => `<path d="M${s.x + 42 + i * 2} ${s.yE + 4 + i * 6} h20" stroke="#e6c3b8" stroke-width="1.6"/>`).join('')}`);
    return svg(360, 214, `${f(180, 18, 'ترمیم زخم: دلمه ← بافت جوانه‌ای ← اسکار', { size: 11, fill: INK, w: 800 })}${p1.b}${p2.b}${p3.b}
      ${f(180, 204, 'fibroblast کلاژن می‌سازد؛ اگر بیش از حد بسازد ← keloid', { size: 9.5, fill: '#b24e26', w: 700 })}`, 'مراحل ترمیم زخم', p1.d + p2.d + p3.d);
  };

  /* راه‌های تزریق و زاویه سوزن */
  A['injection-routes'] = () => {
    const s = section(16, 90, 328, { e: 14, d: 42, s: 32, amp: 5, waves: 10 });
    /* سوزن: نوک در لایه هدف، بدنه با زاویه داده‌شده بیرون از پوست */
    const needle = (tx, ty, ang, c) => { const r = ang * Math.PI / 180, L = 72; const sx = tx - Math.cos(r) * L, sy = ty - Math.sin(r) * L; return `<path d="M${sx.toFixed(1)} ${sy.toFixed(1)} L${tx} ${ty}" stroke="${c}" stroke-width="3" stroke-linecap="round"/><rect x="${(sx - 6).toFixed(1)}" y="${(sy - 6).toFixed(1)}" width="12" height="12" rx="3" fill="${c}" transform="rotate(${ang} ${sx.toFixed(1)} ${sy.toFixed(1)})"/><circle cx="${tx}" cy="${ty}" r="2.4" fill="#fff" stroke="${c}"/>`; };
    const muscle = `<rect x="16" y="${s.yS}" width="328" height="26" fill="#d98080"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<path d="M${22 + i * 41} ${s.yS + 6} h32 M${22 + i * 41} ${s.yS + 14} h32 M${22 + i * 41} ${s.yS + 22} h32" stroke="#c46666" stroke-width="1"/>`).join('')}`;
    return svg(360, 258, `${f(180, 18, 'سوزن تا کدام لایه می‌رود؟', { size: 11, fill: INK, w: 800 })}${s.body}${muscle}
      ${needle(90, s.yE + 3, 12, '#b24e26')}${needle(150, s.yD + 16, 45, '#9a6a00')}${needle(214, s.yS + 16, 90, '#b03e5c')}${needle(312, s.yD + 3, 25, '#1565c0')}
      <path d="M290 ${s.yD + 3} q24 -4 50 0" stroke="${C.vein}" stroke-width="8" fill="none" opacity=".9"/>
      ${lab(64, 226, 'ID 10–15°', 'داخل‌پوستی', { size: 10, fill: '#b24e26', sym: true })}${lab(140, 226, 'SubQ 45°', 'زیرجلدی', { size: 10, fill: '#9a6a00', sym: true })}
      ${lab(220, 226, 'IM 90°', 'داخل عضله', { size: 10, fill: '#b03e5c', sym: true })}${lab(300, 226, 'IV 25°', 'داخل ورید', { size: 10, fill: '#1565c0', sym: true })}
      ${f(180, 254, 'تست مانتو (PPD) داخل‌پوستی است؛ انسولین زیرجلدی', { size: 9.5, fill: MUTED })}`, 'راه‌های تزریق', s.defs);
  };

  /* ================= ضمائم پوست ================= */
  /* آناتومی مو */
  A['hair-anatomy'] = () => {
    const s = section(70, 92, 150, { e: 14, d: 104, s: 30, amp: 5 });
    const hx = 128;
    return svg(360, 264, `${f(180, 18, 'مو از فولیکول در درم می‌روید', { size: 11, fill: INK, w: 800 })}${s.body}
      ${hairUnit(hx, s.y, s.yE + 86, { len: 64, lean: -4 })}${sebGland(hx + 11, s.yE + 30)}
      <path d="M${hx + 8} ${s.yE + 58} L${hx + 44} ${s.yE + 4}" stroke="#c0392b" stroke-width="2.6" stroke-linecap="round"/>
      ${pin(hx - 2, s.y - 40, 248, 40)}${lab(300, 38, 'hair shaft', 'ساقه مو (بیرون پوست)', { size: 10 })}
      ${pin(hx, s.yE + 20, 248, 84)}${lab(300, 82, 'hair root', 'ریشه مو (درون پوست)', { size: 10 })}
      ${pin(hx + 18, s.yE + 34, 248, 126)}${lab(300, 124, 'sebaceous gland', 'غده چربی', { size: 10 })}
      ${pin(hx + 30, s.yE + 26, 248, 166)}${lab(300, 164, 'arrector pili', 'عضله راست‌کننده مو', { size: 10 })}
      ${pin(hx + 9, s.yE + 70, 248, 206)}${lab(300, 204, 'hair follicle', 'فولیکول مو', { size: 10 })}
      ${pin(hx, s.yE + 87, 64, 236)}${lab(60, 248, 'hair papilla', 'پاپیلا: تغذیه پیاز مو', { size: 10 })}
      ${f(200, 256, 'trich/o و pil/o هر دو یعنی مو', { size: 9.5, fill: '#7a4a22', w: 800 })}`, 'آناتومی مو', s.defs);
  };

  /* آناتومی ناخن: عکس از رو + برش از کنار */
  A['nail-anatomy'] = () => {
    const sh = nid(), gb = nid(), gn = nid();
    return svg(360, 300, `${f(180, 18, 'ناخن از رو و از کنار', { size: 11, fill: INK, w: 800 })}
      ${IMG('nail-surface', 20, 30, 210, 132)}
      ${pin(52, 96, 262, 40)}${lab(306, 38, 'free edge', 'لبه آزاد', { size: 9.5 })}
      ${pin(90, 96, 262, 74)}${lab(306, 72, 'nail body', 'تنه ناخن', { size: 9.5 })}
      ${pin(126, 100, 262, 108)}${lab(306, 106, 'lunula', 'هلال ناخن', { size: 9.5 })}
      ${pin(144, 96, 262, 142)}${lab(306, 140, 'cuticle', 'کوتیکول', { size: 9.5 })}
      <g filter="url(#${sh})"><path d="M20 250 C20 214 60 196 120 196 H250 V284 H120 C60 284 20 276 20 250Z" fill="url(#${gb})" stroke="#c98d6f"/>
      <path d="M30 222 C50 206 90 202 130 202 L196 206 L196 214 L130 212 C100 212 60 216 34 228Z" fill="url(#${gn})" stroke="#b9a08c"/>
      <path d="M196 206 C206 206 212 214 208 222 L190 224" fill="#f3d9c8" stroke="#c98d6f"/>
      <path d="M170 216 Q196 216 200 232 L170 232Z" fill="#e8a596" opacity=".9"/>
      <path d="M44 236 H170" stroke="#e7a39a" stroke-width="5" opacity=".8"/>
      <path d="M60 252 C90 246 150 246 220 254" stroke="#e7d7c4" stroke-width="12" opacity=".9"/></g>
      ${pin(70, 210, 52, 186)}${lab(46, 176, 'nail plate', 'صفحه ناخن', { size: 9 })}
      ${pin(110, 236, 112, 186)}${lab(122, 176, 'nail bed', 'بستر ناخن', { size: 9 })}
      ${pin(184, 226, 196, 186)}${lab(204, 176, 'matrix', 'ماتریکس (رشد)', { size: 9 })}
      ${pin(26, 236, 14, 292)}${lab(54, 294, 'hyponychium', 'زیرناخن', { size: 9 })}
      ${pin(200, 216, 290, 220)}${lab(318, 218, 'nail root', 'ریشه ناخن', { size: 9 })}
      ${pin(150, 252, 290, 262)}${lab(318, 260, 'phalanx', 'استخوان بند انگشت', { size: 9 })}`, 'آناتومی ناخن',
      `${shadow(sh)}${linear(gb, '#f6d3bd', '#e9b394', true)}${linear(gn, '#fff4ee', '#f1d6c8', true)}`);
  };

  /* غدد عرق اکرین و آپوکرین */
  A['sweat-glands'] = () => {
    const s1 = section(18, 64, 150, { e: 12, d: 82, s: 26, amp: 4 });
    const s2 = section(192, 64, 150, { e: 12, d: 82, s: 26, amp: 4 });
    return svg(360, 240, `${lab(93, 22, 'eccrine gland', 'اکرین: همه‌جای بدن', { size: 11, fill: '#1565c0' })}${lab(267, 22, 'apocrine gland', 'آپوکرین: زیربغل و کشاله', { size: 11, fill: '#8a4a12' })}
      ${s1.body}${s2.body}
      ${sweatGland(92, s1.yD - 12, s1.y)}
      ${hairUnit(262, s2.y, s2.yE + 52, { len: 16 })}
      <path d="M296 ${s2.yD - 6} C300 ${s2.yE + 40} 280 ${s2.yE + 24} 268 ${s2.yE + 20}" stroke="#c07a3a" stroke-width="2.6" fill="none"/>
      ${[0, 1, 2, 3].map(i => `<ellipse cx="${296 + (i % 2 ? 4 : -4)}" cy="${s2.yD - 10 + i * 3.4}" rx="11" ry="4.2" fill="none" stroke="#c07a3a" stroke-width="2.8"/>`).join('')}
      ${f(93, 196, 'مجرا مستقیم به منفذ پوست', { size: 9.5, fill: INK, w: 700 })}${f(93, 212, 'خنک‌کردن بدن • sudoriferous', { size: 9.5 })}
      ${f(267, 196, 'مجرا به فولیکول مو', { size: 9.5, fill: INK, w: 700 })}${f(267, 212, 'پس از بلوغ؛ منشأ بوی عرق', { size: 9.5 })}
      ${f(180, 234, 'hidr/o و sudor/o = عرق', { size: 10, fill: '#7a4a22', w: 800 })}`, 'غدد عرق', s1.defs + s2.defs);
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
    const ps = [panel(8, 'normal follicle', 'فولیکول سالم', 0), panel(96, 'whitehead', 'سرسفید (بسته)', 1), panel(184, 'blackhead', 'سرسیاه (باز)', 2), panel(272, 'pustule', 'جوش چرکی', 3)];
    return svg(360, 214, `${f(180, 20, 'سبوم + کراتین در فولیکول گیر می‌کند ← comedo', { size: 11, fill: INK, w: 800 })}${ps.map(p => p.b).join('')}
      ${f(180, 202, 'سیاهی سرسیاه از اکسید شدن ملانین است، نه کثیفی', { size: 9.5, fill: MUTED })}`, 'مراحل آکنه', ps.map(p => p.d).join(''));
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

  A['lesions-flat'] = () => grid3('ضایعه‌های مسطح: رنگ عوض می‌شود، سطح نه', [
    ['macule < 1 cm', 'ماکول: لکه کوچک', (s, cx) => `<rect x="${cx - 12}" y="${s.y}" width="24" height="7" rx="2" fill="#9a5a3a"/>`],
    ['patch > 1 cm', 'پچ: لکه بزرگ', (s, cx) => `<rect x="${cx - 40}" y="${s.y}" width="80" height="7" rx="2" fill="#9a5a3a" opacity=".75"/>`],
    ['petechiae', 'نقاط خونریزی', (s, cx) => [-30, -12, 6, 22, 36].map(d => `<circle cx="${cx + d}" cy="${s.y + 4}" r="2.6" fill="#b3263b"/>`).join('')]
  ], 'ضایعه‌های مسطح', 168);

  A['lesions-raised'] = () => grid3('ضایعه‌های برجسته و جامد', [
    ['papule < 1 cm', 'پاپول', (s, cx) => dome(cx, s.y, 12, 12, '#f0a487')],
    ['plaque > 1 cm', 'پلاک: پهن و تخت', (s, cx) => `<path d="M${cx - 40} ${s.y} V${s.y - 10} Q${cx - 40} ${s.y - 14} ${cx - 34} ${s.y - 14} H${cx + 34} Q${cx + 40} ${s.y - 14} ${cx + 40} ${s.y - 10} V${s.y}Z" fill="#e88a74" stroke="#c47652"/>${[-30, -14, 2, 18].map(d => `<path d="M${cx + d} ${s.y - 15} h10" stroke="#f6e8e0" stroke-width="2.4" stroke-linecap="round"/>`).join('')}`],
    ['nodule 1–2 cm', 'ندول: عمیق‌تر', (s, cx) => `<ellipse cx="${cx}" cy="${s.yE + 12}" rx="20" ry="17" fill="#e48e76" stroke="#b9614a"/>${dome(cx, s.y, 21, 9, '#f2b293')}`],
    ['tumor > 2 cm', 'تومور: توده بزرگ', (s, cx) => `<ellipse cx="${cx}" cy="${s.yE + 6}" rx="36" ry="26" fill="#d9776a" stroke="#a9524a"/>${dome(cx, s.y, 37, 18, '#e99a84', '#a9524a')}`],
    ['wheal', 'کهیر: ورم گذرا', (s, cx) => `<path d="M${cx - 34} ${s.y} C${cx - 30} ${s.y - 16} ${cx - 10} ${s.y - 12} ${cx} ${s.y - 16} C${cx + 14} ${s.y - 20} ${cx + 30} ${s.y - 12} ${cx + 34} ${s.y} Z" fill="#f7c9c3" stroke="#e46a5e" stroke-width="2"/><ellipse cx="${cx}" cy="${s.y - 8}" rx="12" ry="4" fill="#fff" opacity=".6"/>`],
    ['polyp', 'پولیپ: زائده پایه‌دار', (s, cx) => `<path d="M${cx - 4} ${s.y} C${cx - 4} ${s.y - 10} ${cx - 16} ${s.y - 12} ${cx - 14} ${s.y - 24} C${cx - 12} ${s.y - 34} ${cx + 12} ${s.y - 34} ${cx + 14} ${s.y - 24} C${cx + 16} ${s.y - 12} ${cx + 4} ${s.y - 10} ${cx + 4} ${s.y}Z" fill="#efa58c" stroke="#c47652"/>`]
  ], 'ضایعه‌های برجسته');

  A['lesions-fluid'] = () => grid3('ضایعه‌های پر از مایع', [
    ['vesicle < 1 cm', 'وزیکول: تاول کوچک', (s, cx) => `<path d="M${cx - 13} ${s.y + 3} Q${cx} ${s.y - 22} ${cx + 13} ${s.y + 3} Z" fill="${C.fluid}" stroke="#7aa6d8" stroke-width="1.4"/><ellipse cx="${cx - 4}" cy="${s.y - 6}" rx="3" ry="2" fill="#fff"/>`],
    ['bulla > 1 cm', 'بول: تاول بزرگ', (s, cx) => `<path d="M${cx - 38} ${s.y + 4} Q${cx} ${s.y - 38} ${cx + 38} ${s.y + 4} Z" fill="${C.fluid}" stroke="#7aa6d8" stroke-width="1.4"/><ellipse cx="${cx - 12}" cy="${s.y - 10}" rx="6" ry="3" fill="#fff"/>`],
    ['pustule', 'پوسچول: پر از چرک', (s, cx) => `<path d="M${cx - 15} ${s.y + 3} Q${cx} ${s.y - 26} ${cx + 15} ${s.y + 3} Z" fill="${C.pus}" stroke="#c99a1d" stroke-width="1.4"/><path d="M${cx - 18} ${s.y + 2} Q${cx} ${s.y - 30} ${cx + 18} ${s.y + 2}" stroke="#e45b4b" stroke-width="2" fill="none" opacity=".6"/>`],
    ['cyst', 'کیست: کیسه بسته', (s, cx) => `<ellipse cx="${cx}" cy="${s.yE + 16}" rx="26" ry="16" fill="#fbf2dd" stroke="#b98d55" stroke-width="2.4"/>${dome(cx, s.y, 26, 6, '#f2b89a')}`],
    ['abscess', 'آبسه: چرک در حفره', (s, cx) => `<ellipse cx="${cx}" cy="${s.yE + 14}" rx="24" ry="15" fill="${C.pus}" stroke="#d9493c" stroke-width="3"/>${dome(cx, s.y, 28, 8, '#f19b85', '#d9493c')}`],
    ['hematoma', 'هماتوم: لخته خون', (s, cx) => `<ellipse cx="${cx}" cy="${s.yE + 14}" rx="24" ry="14" fill="#7a1f33" stroke="#4e1020"/>${dome(cx, s.y, 28, 6, '#a7647a', '#6a3045')}`]
  ], 'ضایعه‌های پر از مایع');

  A['lesions-secondary'] = () => grid3('ضایعه‌های ثانویه و فرورفته', [
    ['crust', 'دلمه', (s, cx) => `<path d="M${cx - 30} ${s.y} L${cx - 24} ${s.y - 7} L${cx - 10} ${s.y - 5} L${cx} ${s.y - 9} L${cx + 14} ${s.y - 6} L${cx + 28} ${s.y - 8} L${cx + 32} ${s.y}Z" fill="#c98a3a" stroke="#8a5a20"/>`],
    ['scale', 'پوسته', (s, cx) => [-34, -16, 2, 20].map((d, i) => `<path d="M${cx + d} ${s.y} q6 -${6 + i % 2 * 3} 14 -${3 + i}" stroke="#e9e3dc" stroke-width="4" fill="none" stroke-linecap="round"/>`).join('')],
    ['lichenification', 'ضخیم و چرمی', (s, cx) => `<rect x="${cx - 46}" y="${s.y - 6}" width="92" height="${s.yE - s.y + 8}" fill="#d98b66"/>${[-40, -24, -8, 8, 24, 40].map(d => `<path d="M${cx + d} ${s.y - 6} v8" stroke="#8a4a32" stroke-width="1.6"/>`).join('')}`, { e: 9 }],
    ['fissure', 'شقاق: ترک عمیق', (s, cx) => `<path d="M${cx - 6} ${s.y - 1} L${cx} ${s.yE + 20} L${cx + 6} ${s.y - 1}Z" fill="#fff"/><path d="M${cx - 6} ${s.y} L${cx} ${s.yE + 20} L${cx + 6} ${s.y}" stroke="#b9614a" stroke-width="1.6" fill="none"/>`],
    ['ulcer', 'زخم: تا درم', (s, cx) => `<path d="M${cx - 30} ${s.y - 1} C${cx - 26} ${s.yE + 22} ${cx + 26} ${s.yE + 22} ${cx + 30} ${s.y - 1}Z" fill="#fff"/><path d="M${cx - 30} ${s.y} C${cx - 26} ${s.yE + 22} ${cx + 26} ${s.yE + 22} ${cx + 30} ${s.y}" stroke="#c83a3a" stroke-width="2.6" fill="none"/><path d="M${cx - 22} ${s.yE + 12} C${cx - 10} ${s.yE + 18} ${cx + 10} ${s.yE + 18} ${cx + 22} ${s.yE + 12}" stroke="#e8556a" stroke-width="3" fill="none"/>`],
    ['keloid', 'کلوئید: اسکار برجسته', (s, cx) => `<path d="M${cx - 40} ${s.y} C${cx - 36} ${s.y - 16} ${cx - 14} ${s.y - 22} ${cx} ${s.y - 18} C${cx + 18} ${s.y - 24} ${cx + 38} ${s.y - 14} ${cx + 40} ${s.y}Z" fill="#c9787a" stroke="#9a4a4e"/><path d="M${cx - 6} ${s.y + 2} V${s.yE + 20} H${cx + 6} V${s.y + 2}" fill="#f6dcd4"/>`]
  ], 'ضایعه‌های ثانویه');

  /* خونریزی زیر پوست: از نقطه تا توده */
  A['bleed-spots'] = () => {
    const box = (x, en, fa, size, draw) => `<rect x="${x}" y="34" width="80" height="80" rx="14" fill="#f8d9c6"/>${draw(x + 40, 74)}${lab(x + 40, 132, en, fa, { size: 10 })}${f(x + 40, 160, size, { size: 9, fill: '#9c2f3f', w: 700 })}`;
    return svg(360, 190, `${f(180, 20, 'کوچک به بزرگ: همه خونِ بیرون‌زده از رگ‌اند', { size: 11, fill: INK, w: 800 })}
      ${box(6, 'petechiae', 'پتشی', 'زیر ۳ میلی‌متر', (x, y) => [[-20, -16], [8, -22], [18, 4], [-6, 10], [-22, 16], [22, 22], [0, -4]].map(p => `<circle cx="${x + p[0]}" cy="${y + p[1]}" r="2.4" fill="#b3263b"/>`).join(''))}
      ${box(94, 'purpura', 'پورپورا', 'لکه بنفش', (x, y) => `<path d="M${x - 22} ${y - 6} C${x - 18} ${y - 22} ${x + 4} ${y - 18} ${x + 10} ${y - 10} C${x + 24} ${y - 6} ${x + 22} ${y + 14} ${x + 4} ${y + 16} C${x - 12} ${y + 22} ${x - 26} ${y + 8} ${x - 22} ${y - 6}Z" fill="#8e3b8a" opacity=".85"/>`)}
      ${box(182, 'ecchymosis', 'اکیموز (کبودی)', 'کبودی بزرگ', (x, y) => `<ellipse cx="${x}" cy="${y}" rx="32" ry="26" fill="#6b4a9e" opacity=".55"/><ellipse cx="${x + 2}" cy="${y + 2}" rx="20" ry="15" fill="#3f2a78" opacity=".7"/><ellipse cx="${x - 8}" cy="${y + 12}" rx="14" ry="6" fill="#c9b03a" opacity=".5"/>`)}
      ${box(270, 'hematoma', 'هماتوم', 'لخته برجسته', (x, y) => `<ellipse cx="${x}" cy="${y + 4}" rx="28" ry="20" fill="#5e1e33"/><ellipse cx="${x - 8}" cy="${y - 4}" rx="8" ry="4" fill="#fff" opacity=".25"/>`)}`, 'خونریزی زیر پوست');
  };

  /* خط‌کش یک سانتی‌متری */
  A['size-rule'] = () => {
    const row = (y, small, big, fs, fb) => `${t(70, y, small, { size: 12, fill: '#b24e26', w: 900 })}${f(70, y + 15, fs, { size: 9.5 })}${t(180, y + 5, '1 cm', { size: 12, w: 900, sym: true })}${t(290, y, big, { size: 12, fill: '#1565c0', w: 900 })}${f(290, y + 15, fb, { size: 9.5 })}`;
    return svg(360, 200, `${f(180, 18, 'مرز یک سانتی‌متری: کوچک یا بزرگ؟', { size: 11, fill: INK, w: 800 })}
      ${t(70, 42, '< 1 cm', { size: 11, fill: '#b24e26', w: 900, sym: true })}${t(290, 42, '> 1 cm', { size: 11, fill: '#1565c0', w: 900, sym: true })}
      ${row(72, 'macule', 'patch', 'لکه مسطح کوچک', 'لکه مسطح بزرگ')}
      ${row(112, 'papule', 'plaque / nodule', 'برجستگی کوچک', 'برجستگی بزرگ')}
      ${row(152, 'vesicle', 'bulla', 'تاول کوچک', 'تاول بزرگ')}
      <path d="M130 186 H230" stroke="${INK}" stroke-width="2"/>${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `<path d="M${130 + i * 10} 186 v${i % 5 ? -5 : -9}" stroke="${INK}" stroke-width="1.4"/>`).join('')}`, 'اندازه ضایعه‌ها');
  };

  /* ================= بیماری‌ها ================= */
  /* عمق سوختگی */
  A['burn-depth'] = () => {
    const s = section(56, 52, 250, { e: 18, d: 62, s: 40, amp: 6, waves: 9 });
    const zone = (x1, x2, y2, c, op) => `<rect x="${x1}" y="${s.y}" width="${x2 - x1}" height="${y2 - s.y}" fill="${c}" opacity="${op}"/>`;
    return svg(360, 262, `${f(180, 18, 'درجه سوختگی = عمق آسیب', { size: 11, fill: INK, w: 800 })}${s.body}
      ${zone(56, 139, s.yE, '#ff6b3d', .45)}${zone(139, 222, s.yE + 34, '#ff4b2b', .45)}${zone(222, 306, s.yS, '#3a2a24', .55)}
      <path d="M${86} ${s.y} Q${98} ${s.y - 26} ${112} ${s.y}" fill="none"/>
      <path d="M150 ${s.y + 1} Q180 ${s.y - 28} 210 ${s.y + 1}Z" fill="${C.fluid}" stroke="#7aa6d8"/>
      <path d="M228 ${s.y} h72 v-5 h-72z" fill="#2a1d18"/>
      ${lab(98, 210, '1st degree', 'فقط اپیدرم', { size: 10, fill: '#d9531e' })}${f(98, 238, 'قرمزی، بدون تاول', { size: 9 })}
      ${lab(180, 210, '2nd degree', 'تا بخشی از درم', { size: 10, fill: '#c62828' })}${f(180, 238, 'تاول، درد شدید', { size: 9 })}
      ${lab(264, 210, '3rd degree', 'تمام‌ضخامت', { size: 10, fill: '#3a2a24' })}${f(264, 238, 'سفید یا سوخته', { size: 9 })}
      ${bracket(50, s.y, s.yE, 'epi', 'اپیدرم', 'left', '#b24e26')}${bracket(50, s.yE, s.yD, 'dermis', 'درم', 'left', '#b03e5c')}${bracket(50, s.yD, s.yS, 'subQ', 'زیرجلدی', 'left', '#9a6a00')}
      ${t(180, 256, 'superficial • partial-thickness • full-thickness', { size: 9, fill: MUTED, w: 600 })}`, 'عمق سوختگی', s.defs);
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
      ${t(60, 92, back ? '18' : '18', { size: 13, w: 900, fill: '#b24e26' })}${f(60, 106, back ? 'پشت تنه' : 'جلوی تنه', { size: 8.5 })}
      ${t(46, 190, '9', { size: 11, w: 900, fill: '#b24e26' })}${t(74, 190, '9', { size: 11, w: 900, fill: '#b24e26' })}
      ${back ? '' : `${t(60, 152, '1', { size: 9, w: 900, fill: '#b24e26' })}`}</g>`;
    return svg(360, 300, `${f(180, 18, 'بزرگسال: هر ناحیه ۹٪ یا مضرب آن (جمع ۱۰۰٪)', { size: 11, fill: INK, w: 800 })}
      ${body(40, false)}${body(200, true)}
      ${f(100, 252, 'جلو (anterior)', { size: 10, fill: INK, w: 800 })}${f(260, 252, 'پشت (posterior)', { size: 10, fill: INK, w: 800 })}
      ${f(180, 274, 'سر ۹ • هر دست ۹ • هر پا ۱۸ • تنه ۳۶ • ناحیه تناسلی ۱', { size: 9.5, fill: INK, w: 700 })}
      ${f(180, 292, 'رقم روی هر نیمه: درصد سطح بدن (BSA)', { size: 9, fill: MUTED })}`, 'قانون نه‌ها', `${linear(g, '#fbd7b6', '#efbc94', true)}${shadow(sh)}`);
  };

  /* نقاط فشار در بیمار بستری */
  A['pressure-points'] = () => {
    const g = nid(), sh = nid();
    const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="7" fill="#e5484d" opacity=".85"/><circle cx="${x}" cy="${y}" r="12" fill="none" stroke="#e5484d" stroke-width="1.6" opacity=".5"/>`;
    return svg(360, 200, `${f(180, 18, 'زخم بستر روی برجستگی‌های استخوانی', { size: 11, fill: INK, w: 800 })}
      <rect x="14" y="118" width="332" height="16" rx="6" fill="#d9e3ea"/><rect x="14" y="132" width="332" height="10" rx="4" fill="#b9c7d1"/>
      <g filter="url(#${sh})"><circle cx="44" cy="96" r="20" fill="url(#${g})" stroke="#c98d6f"/>
      <path d="M64 92 C80 82 110 82 140 86 L230 92 C250 92 262 100 262 108 L300 106 C318 104 330 110 332 116 H64 Z" fill="url(#${g})" stroke="#c98d6f"/></g>
      ${dot(40, 116)}${dot(96, 116)}${dot(160, 116)}${dot(196, 116)}${dot(326, 114)}
      ${lab(40, 166, 'occiput', 'پس سر', { size: 9.5 })}${lab(96, 166, 'scapula', 'کتف', { size: 9.5 })}${lab(160, 166, 'elbow', 'آرنج', { size: 9.5 })}
      ${lab(206, 166, 'sacrum', 'خاجی (شایع‌ترین)', { size: 9.5, fill: '#c62828' })}${lab(318, 166, 'heel', 'پاشنه', { size: 9.5 })}
      ${f(180, 196, 'decubitus = خوابیده؛ هر ۲ ساعت تغییر وضعیت', { size: 9.5, fill: MUTED })}`, 'نقاط فشار', `${linear(g, '#fbd7b6', '#efbc94', true)}${shadow(sh)}`);
  };

  /* مراحل زخم فشاری */
  A['ulcer-stages'] = () => {
    const panel = (px, n, fa, draw) => { const s = section(px, 40, 80, { e: 9, d: 34, s: 22, amp: 3, waves: 3, vessels: false }); return { b: `${s.body}<rect x="${px}" y="${s.yS}" width="80" height="14" fill="#d98080"/><rect x="${px}" y="${s.yS + 14}" width="80" height="10" fill="#f1ede6"/>${draw(s, px + 40)}${t(px + 40, 30, 'Stage ' + n, { size: 11, fill: '#b24e26', w: 900 })}${f(px + 40, s.yS + 46, fa, { size: 9.5, fill: INK, w: 700 })}`, d: s.defs }; };
    const crater = (s, cx, depth, w) => `<path d="M${cx - w} ${s.y - 1} C${cx - w + 4} ${depth} ${cx + w - 4} ${depth} ${cx + w} ${s.y - 1}Z" fill="#fff"/><path d="M${cx - w} ${s.y} C${cx - w + 4} ${depth} ${cx + w - 4} ${depth} ${cx + w} ${s.y}" stroke="#c83a3a" stroke-width="2.4" fill="none"/>`;
    const ps = [
      panel(8, 1, 'قرمزی پایدار', (s, cx) => `<rect x="${cx - 24}" y="${s.y}" width="48" height="6" fill="#e5484d" opacity=".7"/>`),
      panel(96, 2, 'زخم سطحی', (s, cx) => crater(s, cx, s.yE + 8, 18)),
      panel(184, 3, 'تا چربی', (s, cx) => crater(s, cx, s.yD + 12, 22)),
      panel(272, 4, 'تا عضله و استخوان', (s, cx) => crater(s, cx, s.yS + 22, 26))
    ];
    return svg(360, 196, `${ps.map(p => p.b).join('')}${f(180, 190, 'pressure ulcer = decubitus ulcer = bedsore', { size: 9.5, fill: MUTED })}`, 'مراحل زخم فشاری', ps.map(p => p.d).join(''));
  };

  /* نقشه کچلی‌ها روی بدن */
  A['tinea-sites'] = () => {
    const g = nid(), sh = nid();
    const ring = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#c0392b" stroke-width="2.4" stroke-dasharray="3 2"/>`;
    return svg(360, 300, `${f(180, 18, 'tinea + نام لاتین محل', { size: 11, fill: INK, w: 800 })}
      <g filter="url(#${sh})"><circle cx="180" cy="56" r="20" fill="url(#${g})" stroke="#c98d6f"/>
      <path d="M154 82 H206 Q218 82 218 96 V170 H142 V96 Q142 82 154 82Z" fill="url(#${g})" stroke="#c98d6f"/>
      <path d="M142 88 Q124 92 122 112 L116 176 H130 L138 118Z" fill="#f4d0ae" stroke="#c98d6f"/><path d="M218 88 Q236 92 238 112 L244 176 H230 L222 118Z" fill="#f4d0ae" stroke="#c98d6f"/>
      <path d="M144 170 H178 L174 270 H152Z" fill="#f2c9a6" stroke="#c98d6f"/><path d="M182 170 H216 L208 270 H186Z" fill="#f2c9a6" stroke="#c98d6f"/>
      <path d="M148 270 H176 L178 282 H140Z" fill="#f2c9a6" stroke="#c98d6f"/><path d="M186 270 H212 L220 282 H184Z" fill="#f2c9a6" stroke="#c98d6f"/></g>
      ${ring(180, 46, 12)}${ring(192, 126, 12)}${ring(178, 176, 9)}${ring(162, 278, 10)}${ring(124, 176, 6)}
      ${pin(170, 42, 96, 48)}${lab(56, 44, 'tinea capitis', 'کچلی سر', { size: 10 })}
      ${pin(202, 126, 268, 120)}${lab(306, 116, 'tinea corporis', 'کچلی بدن', { size: 10 })}
      ${pin(186, 178, 268, 184)}${lab(306, 180, 'tinea cruris', 'کچلی کشاله ران', { size: 10 })}
      ${pin(152, 278, 96, 266)}${lab(56, 262, 'tinea pedis', 'پای ورزشکار', { size: 10 })}
      ${pin(122, 180, 96, 200)}${lab(56, 196, 'tinea unguium', 'قارچ ناخن', { size: 10 })}
      ${f(306, 270, 'capitis = سر • corporis = بدن', { size: 9, fill: MUTED })}${f(306, 284, 'cruris = ران • pedis = پا', { size: 9, fill: MUTED })}`, 'محل‌های کچلی', `${linear(g, '#fbd7b6', '#efbc94', true)}${shadow(sh)}`);
  };

  /* ================= تومور، تشخیص و درمان ================= */
  /* ABCDE ملانوما */
  A.abcde = () => {
    const card = (x, y, L, en, fa, draw) => `<rect x="${x}" y="${y}" width="108" height="112" rx="14" fill="#fbf1ea"/>${t(x + 16, y + 22, L, { size: 18, w: 900, fill: '#b24e26', sym: true })}${draw(x + 62, y + 40)}${lab(x + 54, y + 82, en, fa, { size: 10 })}`;
    const mole = (c, d) => `<path d="${d}" fill="${c}"/>`;
    return svg(360, 268, `${f(180, 18, 'هشدار ملانوما: ABCDE', { size: 11.5, fill: INK, w: 800 })}
      ${card(8, 28, 'A', 'Asymmetry', 'عدم تقارن', (x, y) => mole('#3a2116', `M${x - 22} ${y} C${x - 22} ${y - 18} ${x + 2} ${y - 20} ${x + 8} ${y - 8} C${x + 22} ${y - 6} ${x + 14} ${y + 14} ${x - 2} ${y + 10} C${x - 14} ${y + 16} ${x - 22} ${y + 8} ${x - 22} ${y}Z`))}
      ${card(126, 28, 'B', 'Border', 'لبه نامنظم', (x, y) => mole('#4a2a1a', `M${x - 20} ${y} l6 -10 l-2 -8 l10 2 l6 -6 l6 8 l10 -2 l-2 10 l6 8 l-8 4 l2 10 l-10 -2 l-6 6 l-6 -8 l-10 0 l2 -8z`))}
      ${card(244, 28, 'C', 'Color', 'رنگ‌های متعدد', (x, y) => `<ellipse cx="${x}" cy="${y}" rx="22" ry="17" fill="#6b3a22"/><ellipse cx="${x - 7}" cy="${y - 3}" rx="10" ry="8" fill="#1d1410"/><ellipse cx="${x + 9}" cy="${y + 5}" rx="7" ry="6" fill="#c0392b"/><ellipse cx="${x + 6}" cy="${y - 8}" rx="5" ry="4" fill="#8aa0b8"/>`)}
      ${card(66, 148, 'D', 'Diameter', 'قطر بیش از ۶ میلی‌متر', (x, y) => `<circle cx="${x - 8}" cy="${y - 2}" r="15" fill="#4a2a1a"/><path d="M${x - 23} ${y + 18} H${x + 7}" stroke="${INK}" stroke-width="1.6"/>${t(x + 24, y + 2, '> 6 mm', { size: 9, sym: true })}`)}
      ${card(184, 148, 'E', 'Evolving', 'تغییر در زمان', (x, y) => `<circle cx="${x - 14}" cy="${y}" r="7" fill="#6b3a22"/><path d="M${x - 4} ${y} h8" stroke="${INK}" stroke-width="1.6"/><path d="M${x + 2} ${y - 3} l4 3 l-4 3" fill="none" stroke="${INK}" stroke-width="1.6"/><ellipse cx="${x + 18}" cy="${y}" rx="11" ry="13" fill="#3a2116"/>`)}`, 'معیار ABCDE ملانوما');
  };

  /* سه سرطان پوست و عمقشان */
  A['skin-cancers'] = () => {
    const s = section(20, 58, 320, { e: 18, d: 64, s: 30, amp: 5, waves: 11 });
    return svg(360, 252, `${f(180, 18, 'سه سرطان شایع پوست از سه نوع سلول', { size: 11, fill: INK, w: 800 })}${s.body}
      <path d="M${46} ${s.y} Q${62} ${s.y - 14} ${78} ${s.y - 12} Q${94} ${s.y - 14} ${110} ${s.y}" fill="#f6ddd0" stroke="#d8a48f"/><ellipse cx="78" cy="${s.y - 8}" rx="7" ry="4" fill="#e9b9a6"/><path d="M58 ${s.yE - 2} q20 14 40 0" fill="#e7b7a2" stroke="#c98d6f"/>
      <path d="M140 ${s.y} L150 ${s.y - 14} L176 ${s.y - 16} L196 ${s.y - 8} L204 ${s.y}Z" fill="#d9a07a" stroke="#a86a4a"/><path d="M150 ${s.y} L160 ${s.yE + 24} L188 ${s.yE + 20} L196 ${s.y}" fill="#e3a993" stroke="#a86a4a"/>
      <path d="M232 ${s.y} C232 ${s.y - 10} 300 ${s.y - 10} 304 ${s.y}" fill="#2a1a12"/><path d="M240 ${s.y} L252 ${s.yE + 30} L268 ${s.yD - 4} L284 ${s.yE + 36} L296 ${s.y}Z" fill="#3a2116" opacity=".9"/>
      <path d="M268 ${s.yD - 4} L272 ${s.yD + 20}" stroke="#3a2116" stroke-width="2" stroke-dasharray="3 2"/><circle cx="276" cy="${s.yD + 24}" r="4" fill="#3a2116"/>
      ${lab(78, 196, 'BCC', 'سلول قاعده‌ای', { size: 11, fill: '#b24e26', sym: true })}${f(78, 226, 'شایع‌ترین، کم‌خطر', { size: 9 })}
      ${lab(176, 196, 'SCC', 'سلول سنگفرشی', { size: 11, fill: '#8a4a32', sym: true })}${f(176, 226, 'گاهی پخش می‌شود', { size: 9 })}
      ${lab(272, 196, 'MM', 'ملانوسیت', { size: 11, fill: '#2a1a12', sym: true })}${f(272, 226, 'خطرناک‌ترین', { size: 9 })}
      ${f(180, 246, 'عامل اصلی هر سه: پرتو فرابنفش آفتاب (UV)', { size: 9.5, fill: MUTED })}`, 'سرطان‌های پوست', s.defs);
  };

  /* انواع بیوپسی */
  A['biopsy-types'] = () => {
    const panel = (px, en, fa, draw) => { const s = section(px, 92, 80, { e: 9, d: 40, s: 22, amp: 3, waves: 3, vessels: false }); return { b: `${s.body}${draw(s, px + 40)}${lab(px + 40, 190, en, fa, { size: 10 })}`, d: s.defs }; };
    const lesion = (s, cx) => dome(cx, s.y, 14, 8, '#7a4a32', '#4a2a1a');
    const ps = [
      panel(8, 'shave', 'تراشیدنی', (s, cx) => `${lesion(s, cx)}<path d="M${cx - 30} ${s.y - 2} L${cx + 26} ${s.y - 2}" stroke="#4f6a80" stroke-width="2.4" stroke-dasharray="5 3"/><path d="M${cx + 24} ${s.y - 12} l12 6 l-12 6z" fill="#8aa0b4"/>`),
      panel(96, 'punch', 'پانچ', (s, cx) => `${lesion(s, cx)}<rect x="${cx - 8}" y="${s.y - 40}" width="16" height="${s.yD - s.y + 40}" fill="none" stroke="#4f6a80" stroke-width="2.2" stroke-dasharray="4 3"/><rect x="${cx - 10}" y="${s.y - 52}" width="20" height="14" rx="4" fill="#8aa0b4"/>`),
      panel(184, 'incisional', 'برشی: بخشی', (s, cx) => `<path d="M${cx - 34} ${s.y} Q${cx} ${s.y - 22} ${cx + 34} ${s.y}Z" fill="#7a4a32"/><path d="M${cx - 8} ${s.y - 14} L${cx} ${s.yD - 6} L${cx + 8} ${s.y - 14}" fill="none" stroke="#4f6a80" stroke-width="2.4" stroke-dasharray="4 3"/>`),
      panel(272, 'excisional', 'برداشتی: کامل', (s, cx) => `${lesion(s, cx)}<path d="M${cx - 26} ${s.y - 2} L${cx} ${s.yD} L${cx + 26} ${s.y - 2}" fill="none" stroke="#4f6a80" stroke-width="2.4" stroke-dasharray="4 3"/>`)
    ];
    return svg(360, 226, `${f(180, 20, 'bi/o (زنده) + -opsy (دیدن): نمونه زنده برای میکروسکوپ', { size: 11, fill: INK, w: 800 })}${ps.map(p => p.b).join('')}
      ${f(180, 220, 'خط‌چین = مرز برداشت • Bx = biopsy', { size: 9.5, fill: MUTED })}`, 'انواع بیوپسی', ps.map(p => p.d).join(''));
  };

  /* پیوند پوست: ضخامت و منبع */
  A['graft-types'] = () => {
    const s = section(20, 50, 150, { e: 14, d: 56, s: 30, amp: 5, waves: 5 });
    const row = (y, en, fa, ic) => `${t(206, y, ic, { size: 16, anchor: 'start' })}${t(232, y - 2, en, { size: 11, w: 900, anchor: 'start', fill: '#1f7a6f' })}${f(232, y + 12, fa, { size: 9.5, anchor: 'start' })}`;
    return svg(360, 232, `${f(180, 18, 'پیوند پوست: چقدر ضخیم؟ از کجا؟', { size: 11, fill: INK, w: 800 })}${s.body}
      <path d="M20 ${s.yE + 20} H170" stroke="#1f7a6f" stroke-width="2.4" stroke-dasharray="5 3"/><path d="M20 ${s.yD} H170" stroke="#0b5a8a" stroke-width="2.4" stroke-dasharray="5 3"/>
      ${t(176, s.yE + 24, 'STSG', { size: 10, w: 900, fill: '#1f7a6f', anchor: 'start', sym: true })}${t(176, s.yD + 4, 'FTSG', { size: 10, w: 900, fill: '#0b5a8a', anchor: 'start', sym: true })}
      ${f(95, 178, 'STSG: اپیدرم + بخشی از درم', { size: 9.5, fill: '#1f7a6f', w: 700 })}${f(95, 194, 'FTSG: اپیدرم + تمام درم', { size: 9.5, fill: '#0b5a8a', w: 700 })}
      ${row(58, 'autograft', 'از بدن خود بیمار', '🧑')}${row(100, 'allograft', 'از انسان دیگر (homograft)', '👥')}${row(142, 'xenograft', 'از حیوان (heterograft)', '🐖')}
      ${f(180, 222, 'dermatome ابزار برداشتن لایه نازک پوست برای پیوند است', { size: 9.5, fill: MUTED })}`, 'انواع پیوند پوست', s.defs);
  };

  /* جراحی موس: لایه به لایه */
  A.mohs = () => {
    const a = nid();
    const s = section(30, 60, 170, { e: 14, d: 58, s: 24, amp: 4, waves: 6 });
    return svg(360, 220, `${f(180, 18, 'جراحی موس: برداشتن لایه به لایه تا پاک شدن', { size: 11, fill: INK, w: 800 })}${s.body}
      <path d="M80 ${s.y} L92 ${s.yE + 30} L112 ${s.yE + 40} L128 ${s.yE + 22} L150 ${s.y}Z" fill="#7a4a32" opacity=".85"/>
      <path d="M70 ${s.y - 2} Q115 ${s.yE + 18} 160 ${s.y - 2}" stroke="#1f7a6f" stroke-width="2.4" fill="none" stroke-dasharray="5 3"/>
      <path d="M64 ${s.y - 2} Q115 ${s.yE + 40} 166 ${s.y - 2}" stroke="#0b5a8a" stroke-width="2.4" fill="none" stroke-dasharray="5 3"/>
      <path d="M58 ${s.y - 2} Q115 ${s.yE + 58} 172 ${s.y - 2}" stroke="#2e7d32" stroke-width="2.4" fill="none" stroke-dasharray="5 3"/>
      ${t(178, s.y + 8, '1', { size: 11, w: 900, fill: '#1f7a6f' })}${t(184, s.yE + 26, '2', { size: 11, w: 900, fill: '#0b5a8a' })}${t(190, s.yE + 46, '3 ✓', { size: 11, w: 900, fill: '#2e7d32' })}
      ${curve(a, `M206 ${s.y + 20} C230 ${s.y} 250 ${s.y} 262 ${s.y + 14}`, '#5b6b73', 2)}
      <circle cx="292" cy="${s.y + 40}" r="26" fill="#eef4f8" stroke="#5b6b73" stroke-width="2"/><circle cx="292" cy="${s.y + 40}" r="16" fill="#f7d6cc"/>${t(292, s.y + 44, '🔬', { size: 14 })}
      ${f(292, s.y + 86, 'هر لایه زیر میکروسکوپ', { size: 9.5, fill: INK, w: 700 })}${f(292, s.y + 100, 'تا لبه بدون سرطان', { size: 9.5 })}
      ${f(115, 196, 'بیشترین بافت سالم حفظ می‌شود (صورت)', { size: 9.5, fill: INK, w: 700 })}${f(115, 212, 'BCC و SCC', { size: 9.5 })}`, 'جراحی موس', s.defs + marker(a));
  };

  /* آزمون‌های پوستی */
  A['skin-tests'] = () => svg(360, 240, `${f(180, 18, 'سه آزمون پوستی: چسبی، خراش، داخل‌پوستی', { size: 11, fill: INK, w: 800 })}
    ${IMG('skin-tests', 10, 28, 340, 116)}
    ${lab(70, 162, 'intradermal / Mantoux', 'تزریق داخل‌پوستی (ID)', { size: 10 })}${lab(270, 162, 'scratch (prick) test', 'تست خراش برای آلرژی', { size: 10 })}
    <rect x="16" y="190" width="328" height="42" rx="12" fill="#eef7f5"/>
    ${f(180, 207, 'PPD تست سل: پس از ۴۸ تا ۷۲ ساعت قطر سفتی (induration) را می‌خوانند', { size: 9.5, fill: '#1f7a6f', w: 700 })}
    ${f(180, 224, 'patch test: آلرژن روی پوست چسبانده و پس از ۴۸ ساعت خوانده می‌شود', { size: 9.5, fill: INK })}`, 'آزمون‌های پوستی');

  /* ساعت دارو: bid، tid، qid، hs، prn */
  A['rx-clock'] = () => {
    const row = (y, ab, fa, n, c) => `${t(30, y + 5, ab, { size: 13, w: 900, fill: c, anchor: 'start', sym: true })}${f(150, y + 5, fa, { size: 10, fill: INK, w: 700, anchor: 'end' })}${Array.from({ length: n }, (_, i) => `<circle cx="${180 + i * 30}" cy="${y}" r="10" fill="${c}" opacity=".85"/>${t(180 + i * 30, y + 4, '💊', { size: 9 })}`).join('')}`;
    return svg(360, 230, `${f(180, 18, 'نسخه‌خوانی: چند بار در روز؟', { size: 11, fill: INK, w: 800 })}
      ${row(48, 'bid', 'دو بار در روز', 2, '#1f7a6f')}${row(84, 'tid', 'سه بار در روز', 3, '#0b5a8a')}${row(120, 'qid', 'چهار بار در روز', 4, '#b24e26')}
      ${t(30, 161, 'hs', { size: 13, w: 900, fill: '#6a4a9e', anchor: 'start', sym: true })}${f(150, 161, 'هنگام خواب', { size: 10, fill: INK, w: 700, anchor: 'end' })}${t(182, 161, '🌙', { size: 16 })}
      ${t(30, 197, 'prn', { size: 13, w: 900, fill: '#9a6a00', anchor: 'start', sym: true })}${f(150, 197, 'در صورت نیاز', { size: 10, fill: INK, w: 700, anchor: 'end' })}${t(182, 197, '❔', { size: 16 })}
      ${f(290, 162, 'oint = پماد', { size: 9.5, fill: MUTED })}${f(290, 178, 'top = موضعی', { size: 9.5, fill: MUTED })}${f(290, 194, 'SubQ = زیرجلدی', { size: 9.5, fill: MUTED })}`, 'اختصارهای نسخه');
  };

  /* ---------- عکس‌های برچسب‌دار: تصویر بالینی + برچسب دوزبانه ---------- */
  function IMG(k, x, y, w, h) { return `<image href="${EA.img ? EA.img(k) : 'img/' + k + '.webp'}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet"/>`; }
  /* برش میکروسکوپی پوست با برچسب لایه‌ها */
  A['skin-histology'] = () => svg(360, 300, `${f(180, 18, 'پوست زیر میکروسکوپ (رنگ‌آمیزی H&E)', { size: 11, fill: INK, w: 800 })}
    ${IMG('skin-histology', 30, 28, 200, 266)}
    ${bracketR(236, 30, 70, 'epidermis', 'اپیدرم: نوار بنفش بالا', '#7a3fd1')}
    ${bracketR(236, 74, 190, 'dermis', 'درم: صورتی و رشته‌ای', '#c2185b')}
    ${bracketR(236, 194, 292, 'subcutaneous', 'زیرجلدی: چربی (سفید)', '#9a6a00')}`, 'برش میکروسکوپی پوست');
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
    id: 'lx', sym: 'Lx', name: 'زبان پوست', short: 'زبان پوست', sub: 'پوست چه می‌کند و واژه‌هایش چطور ساخته می‌شوند: ریشه، پیشوند، پسوند و رنگ‌ها',
    color: '#D9643A', dark: '#A8461F', light: '#FCE9E0',
    levels: ['پوست، بزرگ‌ترین اندام', 'ریشه‌های پوست', 'پیشوندها و پسوندها'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: پوست، بزرگ‌ترین اندام ================= */
      {
        id: 'lx1', title: 'پوست: لباسی که هرگز درنمی‌آید', icon: '🧥', items: [
          L('بزرگ‌ترین اندام بدن', `پوست بزرگ‌ترین اندام بدن است؛ در بزرگسالان حدود ۲ متر مربع سطح دارد.<br>نام علمی آن ${e('<b>integument</b>')} است، از واژه لاتین ${e('integumentum')} یعنی «پوشش».<br>پوست و ضمائمش (مو، ناخن، غدد عرق و غدد چربی) با هم ${e('<b>integumentary system</b>')} یا <b>دستگاه پوششی</b> را می‌سازند.${memo('integument را «اینتِگ‌یومِنت» بخوان و به «یک پوشش یک‌تکه» فکر کن؛ لباسی که از روز تولد تنت است.')}`),
          L('پزشک پوست کیست؟', `${wb('dermat/o', '-logy')} ← ${e('<b>dermatology</b>')} یعنی علم پوست (پوست‌شناسی)<br>${wb('dermat/o', '-logist')} ← ${e('<b>dermatologist</b>')} یعنی متخصص پوست<br>متخصص پوست بیماری‌های پوست، مو و ناخن را درمان می‌کند؛ از آکنه و اگزما تا سرطان پوست. گاهی هم ضایعه پوستی نشانه یک بیماری <b>سیستمیک</b> (کل بدن) است؛ مثل زخم پای بیمار دیابتی.${pearl('در پرونده، بخش پوست را کوتاه Derm می‌نویسند: «ارجاع به Derm» یعنی ارجاع به متخصص پوست.')}`),
          M('نام علمی «پوست» که دستگاه پوششی از آن نام گرفته چیست؟', ['integument', 'epidermis', 'cutis vera', 'dermatome'], 'integument از لاتین integumentum یعنی «پوشش».'),
          T('دستگاه پوششی فقط شامل پوست است و مو و ناخن جزو آن نیستند.', false, 'نادرست؛ مو، ناخن، غدد عرق و غدد چربی «ضمائم پوست» و جزو دستگاه پوششی‌اند.'),
          M(`${e('<b>dermatologist</b>')} کیست؟`, ['متخصص پوست', 'آسیب‌شناس', 'جراح پلاستیک', 'متخصص زخم بستر'], 'dermat/o (پوست) + -logist (متخصص).'),
          B('پسوند ___ یعنی «متخصص» و ‎-logy یعنی «علم».', ['‎-logist', '‎-itis', '‎-osis'], 'dermatologist متخصص است و dermatology رشته علمی.'),
          P('هر واژه را به معنی‌اش وصل کن', [['integument', 'پوشش بدن (پوست)'], ['dermatology', 'پوست‌شناسی'], ['dermatologist', 'متخصص پوست'], ['systemic', 'مربوط به کل بدن']], 'این چهار واژه پایه همه درس‌های بعدی‌اند.'),
          S('املای انگلیسی «متخصص پوست» را بنویس', 'dermatologist', 'dermat/o + -logist.', 'dermato…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: 'پنج کار پوست', icon: '🛡️', items: [
          L('پوست بیکار نیست!', `${fig('skin-functions', [], 'پنج کار اصلی پوست')}پوست فقط یک پوشش ساده نیست؛ پنج کار اصلی دارد:<br>۱. <b>محافظت</b>: سد میکروب‌ها (${e('pathogens')})، از دست رفتن آب و پرتو فرابنفش<br>۲. <b>تنظیم دما</b> (${e('thermoregulation')})<br>۳. <b>حس</b>: لمس، فشار، درد، گرما و سرما<br>۴. <b>ساخت ویتامین D</b> با نور خورشید<br>۵. <b>دفع و ترشح</b>: عرق و چربی پوست`),
          L('ترموستات بدن', `${fig('thermo', [], 'گرما و سرما')}وقتی گرمت است، رگ‌های درم <b>گشاد</b> می‌شوند و غدد عرق کار می‌کنند؛ تبخیر عرق بدن را خنک می‌کند.<br>وقتی سردت است، رگ‌ها <b>تنگ</b> می‌شوند تا گرما حفظ شود و موها سیخ می‌شوند.${memo('PTSEV: Protection، Temperature، Sensation، vitamin D، Excretion؛ پنج انگشت یک دست برای پنج کار پوست.')}`),
          M('پوست با کمک کدام نور ویتامین D می‌سازد؟', ['پرتو فرابنفش (UV)', 'نور مادون قرمز', 'پرتو ایکس', 'نور سبز'], 'UV خورشید پیش‌ساز ویتامین D را در پوست فعال می‌کند.'),
          T('در هوای گرم، رگ‌های پوست تنگ می‌شوند تا گرما بیرون نرود.', false, 'نادرست؛ در گرما رگ‌ها گشاد می‌شوند (vasodilation) تا گرما دفع شود.', F('thermo', [])),
          M(`${e('<b>pathogen</b>')} یعنی…`, ['عامل بیماری‌زا', 'غده عرق', 'لایه بیرونی پوست', 'داروی ضدمیکروب'], 'path/o (بیماری) + -gen (تولیدکننده). پوست سالم اولین سد در برابر آن است.'),
          P('هر کار را به مثالش وصل کن', [['محافظت', 'جلوگیری از ورود میکروب'], ['تنظیم دما', 'تعریق'], ['حس', 'درک لمس و درد'], ['دفع', 'خروج مقداری املاح با عرق']], 'پنج کار اصلی پوست.'),
          O('وقتی بدنت گرم می‌شود، این مراحل را به ترتیب بچین', ['دمای بدن بالا می‌رود', 'رگ‌های پوست گشاد می‌شوند', 'غدد عرق ترشح می‌کنند', 'عرق تبخیر و بدن خنک می‌شود'], 'thermoregulation: خون بیشتر به سطح و تبخیر عرق.'),
          B('تنظیم دمای بدن را در اصطلاح پزشکی ___ می‌نامند.', ['thermoregulation', 'photosensitivity', 'hidrosis'], 'therm/o = گرما.'),
          S('املای انگلیسی «عامل بیماری‌زا» را بنویس', 'pathogen', 'path/o + -gen.', 'path…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: 'نقشه پوست: سه لایه', icon: '🗺️', items: [
          L('سه طبقه یک ساختمان', `${fig('skin-block', [], 'برش پوست با لایه‌ها و ضمائم')}پوست سه لایه دارد:<br>۱. ${e('<b>epidermis</b>')} (اپیدرم): لایه بیرونی و نازک؛ <b>رگ ندارد</b>.<br>۲. ${e('<b>dermis</b>')} (درم): لایه میانی و ضخیم؛ پر از رگ، عصب، غده و فولیکول مو.<br>۳. ${e('<b>subcutaneous tissue</b>')} (بافت زیرجلدی): چربی که بدن را عایق و ضربه‌گیر می‌کند.`),
          L('نام لایه‌ها را رمزگشایی کن', `${wb('epi-', 'derm', '-is')} ← «روی درم»<br>${wb('sub-', 'cutane/o', '-ous')} ← «زیر پوست»<br>${wb('hypo-', 'derm', '-is')} ← نام دیگر لایه زیرجلدی${memo('ساختمان سه‌طبقه: پشت‌بام (epidermis) آب‌بند است ولی لوله ندارد؛ طبقه وسط (dermis) همه لوله‌کشی و سیم‌کشی را دارد؛ زیرزمین (subcutaneous) انبار چربی است.')}`),
          M('کدام لایه پوست رگ خونی ندارد؟', ['epidermis', 'dermis', 'subcutaneous tissue', 'هر سه رگ دارند'], 'اپیدرم avascular است و از مویرگ‌های درم تغذیه می‌شود.', null, F('skin-block', [])),
          M('غدد عرق و فولیکول مو در کدام لایه قرار دارند؟', ['dermis', 'epidermis', 'stratum corneum', 'nail bed'], 'درم لایه زنده و پرامکانات پوست است.'),
          T('لایه زیرجلدی بیشتر از بافت چربی ساخته شده است.', true, 'درست؛ adipose tissue بدن را گرم نگه می‌دارد و ضربه را جذب می‌کند.'),
          W('واژه‌ای بساز به معنی «مربوط به زیر پوست»', ['sub-', 'cutane/o', '-ous'], ['epi-', 'derm/o', '-itis'], 'sub- + cutane/o + -ous = subcutaneous.'),
          O('لایه‌های پوست را از بیرون به درون بچین', ['epidermis', 'dermis', 'subcutaneous tissue', 'muscle'], 'زیر بافت زیرجلدی عضله قرار دارد.'),
          P('هر لایه را به ویژگی‌اش وصل کن', [['epidermis', 'بدون رگ، لایه محافظ'], ['dermis', 'رگ، عصب و غده'], ['subcutaneous tissue', 'چربی و عایق'], ['stratum corneum', 'سلول‌های مرده سطحی']], 'stratum corneum بالاترین بخش اپیدرم است.'),
          S('املای انگلیسی «اپیدرم» را بنویس', 'epidermis', 'epi- (روی) + derm (پوست) + -is.', 'epi…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲: ریشه‌های پوست ================= */
      {
        id: 'lx4', title: 'آناتومی یک واژه', icon: '🧩', items: [
          L('واژه پزشکی یک پازل است', `${fig('wordparts', [], 'پیشوند + ریشه + پسوند')}هر واژه پزشکی از قطعه‌هایی ساخته می‌شود:<br>• <b>ریشه</b> (${e('root')}): معنی اصلی، مثل ${e('derm')} = پوست<br>• <b>پیشوند</b> (${e('prefix')}): اول واژه، مثل ${e('sub-')} = زیر<br>• <b>پسوند</b> (${e('suffix')}): آخر واژه، مثل ${e('-itis')} = التهاب<br>• <b>واکه رابط</b> (معمولاً ${e('o')}): ریشه را به پسوند می‌چسباند: ${e('dermat/o/logy')}`),
          L('قاعده طلایی خواندن', `معنی را از <b>پسوند</b> شروع کن، بعد <b>پیشوند</b>، و آخر <b>ریشه</b>:<br>${wb('dermat/o', '-itis')} ← «التهابِ پوست»<br>${wb('hypo-', 'derm/o', '-ic')} ← «مربوط به زیرِ پوست»${memo('اگر پسوند با حرف صدادار شروع شود، واکه رابط حذف می‌شود: dermat/o + -itis = dermatitis، نه dermatoitis.')}`),
          M(`در ${e('<b>dermatitis</b>')} پسوند کدام است و چه معنی دارد؟`, ['‎-itis = التهاب', '‎-osis = حالت غیرطبیعی', '‎-oma = تومور', '‎-logy = علم'], 'dermatitis = التهاب پوست.'),
          M(`${e('<b>dermatosis</b>')} یعنی…`, ['هر بیماری یا حالت غیرطبیعی پوست', 'التهاب پوست', 'تومور پوست', 'برداشتن پوست'], 'dermat/o + -osis (حالت غیرطبیعی).'),
          T('در dermatitis واکه رابط o حذف شده، چون ‎-itis با حرف صدادار شروع می‌شود.', true, 'درست؛ dermat + itis.'),
          B('در واژه ___ ریشه dermat/o به پسوند ‎-logy با واکه o وصل شده است.', ['dermatology', 'dermatitis', 'epidermis'], 'dermat/o/logy.'),
          W('واژه‌ای بساز به معنی «هر بیماری پوست»', ['dermat/o', '-pathy'], ['-itis', 'sub-', '-logist'], 'dermat/o + -pathy = dermatopathy.'),
          P('هر قطعه را به نوعش وصل کن', [['sub-', 'پیشوند'], ['cutane/o', 'ریشه'], ['-ous', 'پسوند'], ['o در dermatology', 'واکه رابط']], 'سه قطعه اصلی + واکه رابط.'),
          S('املای انگلیسی «التهاب پوست» را بنویس', 'dermatitis', 'dermat/o + -itis.', 'derma…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: 'ریشه‌های پوست، چربی و خشکی', icon: '🧴', items: [
          L('سه ریشه برای «پوست»', `${tbl([['ریشه', 'معنی', 'مثال'], [e('derm/o, dermat/o'), 'پوست', e('dermatology')], [e('cutane/o'), 'پوست', e('subcutaneous')], [e('-derma'), 'پوست (پسوند)', e('xeroderma')]])}${memo('cutane شبیه «کات» است: پوست اولین چیزی است که با «کات» (بریدن) آسیب می‌بیند.')}`),
          L('چربی، سختی، خشکی', `${tbl([['ریشه', 'معنی', 'مثال'], [e('adip/o, lip/o, steat/o'), 'چربی', e('lipoma')], [e('kerat/o'), 'شاخی، سخت (کراتین)', e('keratosis')], [e('xer/o'), 'خشک', e('xeroderma')], [e('ichthy/o'), 'خشک و پولکی (ماهی)', e('ichthyosis')], [e('scler/o'), 'سخت', e('scleroderma')], [e('squam/o'), 'پولک', e('squamous')]])}`),
          M(`${e('<b>xeroderma</b>')} یعنی…`, ['خشکی پوست', 'قرمزی پوست', 'زردی پوست', 'سفتی پوست'], 'xer/o (خشک) + -derma (پوست).'),
          M('کدام ریشه معنی «چربی» ندارد؟', ['kerat/o', 'lip/o', 'adip/o', 'steat/o'], 'kerat/o یعنی شاخی و سخت.'),
          T('ichthyosis یعنی پوستی خشک و پولک‌دار، شبیه پوست ماهی.', true, 'ichthy/o = ماهی، خشک و پولکی.'),
          W('واژه‌ای بساز به معنی «سخت‌شدن پوست»', ['scler/o', '-derma'], ['xer/o', '-itis', 'lip/o'], 'scler/o + -derma = scleroderma.'),
          P('هر ریشه را به معنی‌اش وصل کن', [['xer/o', 'خشک'], ['lip/o', 'چربی'], ['kerat/o', 'شاخی، سخت'], ['squam/o', 'پولک']], 'squamous cell = سلول پولک‌مانند اپیدرم.'),
          B('واژه ___ یعنی «پوست چرکی».', ['pyoderma', 'xeroderma', 'leukoderma'], 'py/o (چرک) + -derma.'),
          S('املای انگلیسی «خشکی پوست» را بنویس', 'xeroderma', 'xer/o + -derma.', 'xero…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: 'رنگین‌کمان ریشه‌ها', icon: '🎨', items: [
          L('پوست را با رنگش توصیف کن', `${fig('color-roots', [], 'ریشه‌های رنگ')}پزشک‌ها با رنگ پوست حرف می‌زنند: قرمز، کبود، زرد، سفید و سیاه هر کدام یک ریشه دارند.`),
          L('رنگ + derma', `${wb('erythr/o', '-derma')} ← قرمزی گسترده پوست<br>${wb('leuk/o', '-derma')} ← لکه‌های سفید پوست<br>${wb('xanth/o', '-derma')} ← زردی پوست<br>${wb('cyan/o', '-osis')} ← کبودی (کمبود اکسیژن)${memo('Erythrocyte = گلبول قرمز؛ Leukocyte = گلبول سفید. همان رنگ‌ها روی پوست هم می‌نشینند.')}${pearl('کبودی لب و ناخن (cyanosis) یعنی اکسیژن خون کم است؛ یک نشانه فوری در بالین.')}`),
          M('کدام ریشه یعنی «زرد»؟', ['xanth/o', 'xer/o', 'cyan/o', 'leuk/o'], 'xanth/o = زرد؛ xer/o = خشک. یک حرف فرق دارد!'),
          M(`${e('<b>melanoma</b>')} از کدام ریشه رنگی ساخته شده است؟`, ['melan/o = سیاه', 'erythr/o = قرمز', 'leuk/o = سفید', 'cyan/o = آبی'], 'melan/o + -oma (تومور): تومور سلول‌های رنگدانه‌ای.'),
          T('erythroderma یعنی قرمزی گسترده پوست.', true, 'erythr/o (قرمز) + -derma.'),
          W('واژه‌ای بساز به معنی «سفیدی تکه‌ای پوست»', ['leuk/o', '-derma'], ['melan/o', '-oma', 'xer/o'], 'leuk/o + -derma = leukoderma.'),
          P('هر رنگ را به ریشه‌اش وصل کن', [['قرمز', 'erythr/o'], ['سیاه', 'melan/o'], ['آبی', 'cyan/o'], ['زرد', 'xanth/o']], 'چهار رنگ پرکاربرد.'),
          B('زال‌بودن یا نبود کامل رنگدانه را ___ می‌نامند.', ['albinism', 'cyanosis', 'erythema'], 'albin/o = سفید (بی‌رنگدانه).'),
          S('املای انگلیسی «کبودی» را بنویس', 'cyanosis', 'cyan/o + -osis.', 'cyan…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳: پیشوندها و پسوندها ================= */
      {
        id: 'lx7', title: 'پیشوندهای جا و جهت', icon: '🧭', items: [
          L('سوزن کجاست؟', `${fig('injection-routes', [], 'راه‌های تزریق')}پیشوندها جای هر چیز را نسبت به پوست می‌گویند:<br>${tbl([['پیشوند', 'معنی', 'مثال'], [e('epi-'), 'روی', e('epidermis')], [e('sub-, hypo-'), 'زیر', e('subcutaneous, hypodermic')], [e('intra-'), 'درون', e('intradermal')], [e('trans-, per-'), 'از میان، از راه', e('transdermal, percutaneous')]])}`),
          L('دو پیشوند کمیت', `${e('<b>hyper-</b>')} = بیش از حد: ${e('hyperhidrosis')} (تعریق زیاد)<br>${e('<b>an-, a-</b>')} = بدون: ${e('anhidrosis')} (بی‌عرقی)، ${e('avascular')} (بدون رگ)${vs(['hypo-', 'زیر یا کمتر از حد: hypodermic'], ['hyper-', 'بیش از حد: hyperhidrosis'])}`),
          M(`${e('<b>intradermal</b>')} یعنی…`, ['داخل پوست', 'زیر پوست', 'روی پوست', 'از راه پوست'], 'intra- (درون) + derm + -al. تست مانتو داخل‌پوستی است.'),
          M('چسب دارویی که دارو را از پوست سالم عبور می‌دهد چه نام دارد؟', ['transdermal patch', 'intradermal injection', 'subcutaneous injection', 'epidermal graft'], 'trans- = از میان.'),
          T('hypodermic needle سوزنی برای تزریق زیر پوست است.', true, 'hypo- (زیر) + derm + -ic.'),
          W('واژه‌ای بساز به معنی «بدون رگ»', ['a-', 'vascul/o', '-ar'], ['hyper-', 'derm/o', '-itis'], 'a- + vascul/o + -ar = avascular.'),
          P('هر پیشوند را به معنی‌اش وصل کن', [['epi-', 'روی'], ['sub-', 'زیر'], ['intra-', 'درون'], ['trans-', 'از میان']], 'چهار پیشوند جا و جهت.'),
          B('پیشوند ___ یعنی «بدون»؛ مثل anhidrosis.', ['an-', 'hyper-', 'epi-'], 'an- + hidr/o + -osis = بی‌عرقی.'),
          S('املای انگلیسی «داخل‌پوستی» را بنویس', 'intradermal', 'intra- + derm/o + -al.', 'intra…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: 'پسوندهای بیماری و جراحی', icon: '✂️', items: [
          L('پسوندهای بیماری', `${tbl([['پسوند', 'معنی', 'مثال'], [e('-itis'), 'التهاب', e('dermatitis')], [e('-osis'), 'حالت غیرطبیعی', e('dermatosis')], [e('-oma'), 'تومور، توده', e('lipoma')], [e('-pathy'), 'بیماری', e('onychopathy')], [e('-malacia'), 'نرمی', e('onychomalacia')], [e('-rrhea'), 'جریان، ترشح', e('seborrhea')]])}`),
          L('پسوندهای جراحی و درمان', `${tbl([['پسوند', 'معنی', 'مثال'], [e('-ectomy'), 'برداشتن', e('lipectomy')], [e('-tomy'), 'برش', e('onychotomy')], [e('-tome'), 'ابزار برش', e('dermatome')], [e('-plasty'), 'ترمیم جراحی', e('dermatoplasty')], [e('-therapy'), 'درمان', e('cryotherapy')], [e('-graft'), 'پیوند', e('autograft')]])}${memo('-tomy کار است (بریدن)، -tome ابزار است (چاقو)؛ m در -tome مثل «میز ابزار» است.')}`),
          M(`${e('<b>lipoma</b>')} یعنی…`, ['تومور خوش‌خیم چربی', 'التهاب چربی', 'برداشتن چربی', 'سلول چربی'], 'lip/o (چربی) + -oma (تومور).'),
          M('کدام پسوند یعنی «ترمیم جراحی»؟', ['‎-plasty', '‎-ectomy', '‎-tomy', '‎-tome'], 'dermatoplasty = ترمیم جراحی پوست.'),
          T('dermatome ابزاری برای برداشتن لایه نازک پوست برای پیوند است.', true, '-tome = ابزار برش.'),
          W('واژه‌ای بساز به معنی «برداشتن ناخن»', ['onych/o', '-ectomy'], ['-tomy', 'trich/o', '-plasty'], 'onych/o + -ectomy = onychectomy.'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-itis', 'التهاب'], ['-oma', 'تومور'], ['-ectomy', 'برداشتن'], ['-malacia', 'نرمی']], 'چهار پسوند پرکاربرد.'),
          B('درمان با سرما را ___ می‌نامند.', ['cryotherapy', 'phototherapy', 'cryotomy'], 'cry/o (سرما) + -therapy.'),
          S('املای انگلیسی «ترمیم جراحی پوست» را بنویس', 'dermatoplasty', 'dermat/o + -plasty.', 'dermato…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: 'دام‌های همزاد', icon: '🪤', items: [
          L('یک حرف، یک دنیا فرق', `${fig('twins', [], 'hidr/o در برابر hydr/o')}${vs(['hidr/o', 'عرق: hyperhidrosis'], ['hydr/o', 'آب: hydration'])}${vs(['xer/o', 'خشک: xeroderma'], ['xanth/o', 'زرد: xanthoma'])}`),
          L('دوقلوهای دیگر', `${vs(['-tomy', 'برش: onychotomy'], ['-ectomy', 'برداشتن: onychectomy'])}${vs(['onych/o', 'ناخن: onychomycosis'], ['onc/o', 'تومور: oncology'])}${vs(['pil/o', 'مو: pilonidal'], ['py/o', 'چرک: pyoderma'])}${memo('در hidr/o عرق «i»ن‌ها را خیس کرده؛ در hydr/o «y» شبیه لیوان آب است.')}`),
          M(`${e('<b>hyperhidrosis</b>')} یعنی…`, ['تعریق بیش از حد', 'آب زیاد در بدن', 'خشکی بیش از حد', 'ادرار زیاد'], 'hidr/o = عرق، نه آب.'),
          M('کدام واژه به ناخن مربوط است؟', ['onychomycosis', 'oncology', 'oncogene', 'carcinoma'], 'onych/o = ناخن؛ onc/o = تومور.'),
          T('xanthoma یعنی توده‌ای خشک روی پوست.', false, 'نادرست؛ xanth/o یعنی زرد: توده زرد چربی در پوست.'),
          M('فرق onychotomy و onychectomy چیست؟', ['اولی برش ناخن، دومی برداشتن ناخن', 'هر دو برداشتن ناخن', 'اولی التهاب، دومی برش', 'اولی ناخن دست، دومی ناخن پا'], '-tomy برش و -ectomy برداشتن است.'),
          P('هر جفت را درست وصل کن', [['hidr/o', 'عرق'], ['hydr/o', 'آب'], ['xer/o', 'خشک'], ['xanth/o', 'زرد']], 'دوقلوهای فریبنده.'),
          B('بی‌عرقی را ___ می‌نامند.', ['anhidrosis', 'anhydrosis', 'xerosis'], 'an- + hidr/o + -osis؛ با i، نه y.'),
          S('املای انگلیسی «تعریق بیش از حد» را بنویس', 'hyperhidrosis', 'hyper- + hidr/o + -osis.', 'hyperh…'),
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
    id: 'ly', sym: 'Ly', name: 'لایه‌های پوست', short: 'لایه‌ها', sub: 'اپیدرم و پنج طبقه‌اش، ملانین، درم و گیرنده‌ها، چربی زیرجلدی، ترمیم زخم و راه‌های تزریق',
    color: '#D9506E', dark: '#A83350', light: '#FCE6EC',
    levels: ['اپیدرم', 'درم', 'زیرجلدی و ترمیم'],
    gens: EA.genIds('ly'),
    lessons: [
      /* ================= سطح ۱: اپیدرم ================= */
      {
        id: 'ly1', title: 'اپیدرم: دیوار بی‌رگ', icon: '🧱', items: [
          L('لایه محافظ بیرونی', `${e('<b>epidermis</b>')} نازک‌ترین لایه پوست است: روی پلک نازک‌ترین و روی کف دست و پا ضخیم‌ترین.<br>از ${e('<b>stratified squamous epithelium</b>')} ساخته شده؛ یعنی چند ردیف سلول <b>سنگفرشی</b> (squam/o = پولک) روی هم.<br>اپیدرم ${e('<b>avascular</b>')} است: نه رگ دارد و نه عصب. غذا و اکسیژنش را از مویرگ‌های درم می‌گیرد.`),
          L('کراتین: زره پوست', `سلول اصلی اپیدرم ${e('<b>keratinocyte</b>')} است که پروتئین سخت و ضدآب ${e('<b>keratin</b>')} می‌سازد (kerat/o = شاخی، سخت).<br>همین کراتین در مو و ناخن هم هست.${memo('keratin را «کِراتین = کره‌ی سخت» تصور کن: یک زره ضدآب روی بدن.')}${pearl('بریدگی سطحی که فقط اپیدرم را بردارد خونریزی ندارد؛ اگر خون آمد یعنی به درم رسیده است.')}`),
          M('چرا خراش خیلی سطحی پوست خونریزی نمی‌کند؟', ['چون اپیدرم رگ ندارد', 'چون کراتین خون را می‌بندد', 'چون اپیدرم عصب دارد', 'چون درم چربی دارد'], 'اپیدرم avascular است.'),
          M(`${e('<b>keratinocyte</b>')} یعنی…`, ['سلول کراتین‌ساز اپیدرم', 'سلول رنگدانه‌ساز', 'سلول چربی', 'سلول التهابی'], 'keratin + -cyte (سلول).'),
          T('اپیدرم روی کف دست و پا ضخیم‌تر از روی پلک است.', true, 'جاهایی که بیشتر ساییده می‌شوند ضخیم‌ترند.'),
          W('واژه‌ای بساز به معنی «بدون رگ»', ['a-', 'vascul/o', '-ar'], ['epi-', 'derm/o', '-itis'], 'a- + vascul/o + -ar = avascular.'),
          P('هر واژه را به معنی‌اش وصل کن', [['epidermis', 'لایه بیرونی پوست'], ['keratin', 'پروتئین سخت و ضدآب'], ['squamous', 'سنگفرشی، پولک‌مانند'], ['avascular', 'بدون رگ']], 'چهار ویژگی اپیدرم.'),
          B('پروتئین سخت اپیدرم، مو و ناخن ___ نام دارد.', ['keratin', 'collagen', 'melanin'], 'kerat/o = شاخی.'),
          S('املای انگلیسی «سنگفرشی» را بنویس', 'squamous', 'squam/o (پولک) + -ous.', 'squa…'),
          N('t2f:ly')
        ]
      },
      {
        id: 'ly2', title: 'پنج طبقه اپیدرم', icon: '🏢', items: [
          L('از پایین به بالا', `${fig('epidermis-strata', [], 'لایه‌های اپیدرم')}هر لایه اپیدرم ${e('stratum')} (لایه) نام دارد. سلول‌ها در ${e('<b>stratum basale</b>')} ساخته می‌شوند، رو به بالا حرکت می‌کنند، کراتینی می‌شوند و در ${e('<b>stratum corneum</b>')} مرده و ریخته می‌شوند. این سفر حدود ۴ هفته طول می‌کشد.`),
          L('نام هر طبقه', `${tbl([['لایه', 'معنی'], [e('stratum corneum'), 'شاخی: سلول‌های مرده'], [e('stratum lucidum'), 'شفاف: فقط کف دست و پا'], [e('stratum granulosum'), 'دانه‌دار'], [e('stratum spinosum'), 'خاردار'], [e('stratum basale'), 'قاعده‌ای یا زاینده (germinativum)']])}${memo('از بالا: «Come, Let\'s Get Sun Burned»: Corneum، Lucidum، Granulosum، Spinosum، Basale.')}`),
          M('سلول‌های تازه اپیدرم در کدام لایه ساخته می‌شوند؟', ['stratum basale', 'stratum corneum', 'stratum lucidum', 'dermis'], 'لایه قاعده‌ای همان لایه زاینده (germinativum) است.', null, F('epidermis-strata', [])),
          M('لایه شفاف (stratum lucidum) کجا دیده می‌شود؟', ['فقط در پوست ضخیم کف دست و پا', 'روی پلک', 'در همه پوست بدن', 'در درم'], 'پوست نازک این لایه را ندارد.'),
          T('stratum corneum از سلول‌های زنده و پر از رگ ساخته شده است.', false, 'نادرست؛ سلول‌هایش مرده و پر از کراتین‌اند و دائم ریخته می‌شوند.'),
          O('لایه‌های اپیدرم را از درون به بیرون بچین', ['stratum basale', 'stratum spinosum', 'stratum granulosum', 'stratum lucidum', 'stratum corneum'], 'Basale ← Spinosum ← Granulosum ← Lucidum ← Corneum.'),
          P('هر لایه را به معنی نامش وصل کن', [['corneum', 'شاخی'], ['lucidum', 'شفاف'], ['granulosum', 'دانه‌دار'], ['spinosum', 'خاردار']], 'نام لاتین هر لایه ظاهرش را می‌گوید.'),
          B('نام دیگر stratum basale، stratum ___ (لایه زاینده) است.', ['germinativum', 'corneum', 'reticulare'], 'germ = جوانه، رویش.'),
          S('املای انگلیسی «لایه شاخی» را بنویس (دو کلمه)', 'stratum corneum', 'stratum (لایه) + corneum (شاخی).', 'stratum c…'),
          N('f2t:ly')
        ]
      },
      {
        id: 'ly3', title: 'ملانین و رنگ پوست', icon: '☀️', items: [
          L('چتر رنگی پوست', `${fig('melanocyte', [], 'ملانوسیت و ملانین')}${e('<b>melanocyte</b>')} سلول رنگدانه‌ساز لایه قاعده‌ای است (melan/o = سیاه، -cyte = سلول).<br>این سلول با زائده‌هایش ${e('<b>melanin</b>')} را به کراتینوسیت‌ها می‌دهد؛ ملانین مثل چتر روی هسته سلول‌ها می‌نشیند و پرتو فرابنفش (UV) را جذب می‌کند.`),
          L('برنزه، کک‌مک و زال', `آفتاب ← ملانین بیشتر ← برنزه شدن. تعداد ملانوسیت‌ها در همه نژادها تقریباً یکسان است؛ تفاوت رنگ پوست به <b>مقدار ملانین</b> برمی‌گردد.<br>${e('<b>albinism</b>')}: نبود ارثی ملانین در پوست، مو و چشم.${pearl('ملانوما سرطان همین ملانوسیت‌هاست؛ پس هر خال تیره تازه یا در حال تغییر را جدی بگیر.')}`),
          M('ملانین در کدام سلول ساخته می‌شود؟', ['melanocyte', 'keratinocyte', 'lipocyte', 'fibroblast'], 'melan/o + -cyte.'),
          M('کار اصلی ملانین چیست؟', ['جذب پرتو فرابنفش و محافظت از هسته سلول‌ها', 'ساختن کراتین', 'تنظیم تعریق', 'ذخیره چربی'], 'ملانین یک ضدآفتاب طبیعی است.'),
          T('تفاوت رنگ پوست انسان‌ها بیشتر به تعداد ملانوسیت‌ها برمی‌گردد.', false, 'نادرست؛ تعداد تقریباً یکسان است؛ مقدار ملانین تولیدشده فرق می‌کند.'),
          W('واژه‌ای بساز به معنی «سلول رنگدانه‌ساز»', ['melan/o', '-cyte'], ['-oma', 'leuk/o', 'kerat/o'], 'melan/o + -cyte = melanocyte.'),
          P('هر واژه را به معنی‌اش وصل کن', [['melanin', 'رنگدانه پوست'], ['melanocyte', 'سلول رنگدانه‌ساز'], ['albinism', 'نبود ارثی ملانین'], ['ultraviolet', 'پرتو فرابنفش']], 'رنگ پوست و آفتاب.'),
          B('نبود ارثی ملانین در پوست، مو و چشم را ___ می‌نامند.', ['albinism', 'vitiligo', 'leukoderma'], 'albin/o = سفید.'),
          S('املای انگلیسی «ملانین» را بنویس', 'melanin', 'melan/o (سیاه) + -in (ماده).', 'mela…'),
          N('r2m:ly')
        ]
      },
      /* ================= سطح ۲: درم ================= */
      {
        id: 'ly4', title: 'درم: لایه زنده', icon: '❤️', items: [
          L('کارخانه زیر سطح', `${fig('dermis', [], 'لایه‌های درم')}${e('<b>dermis</b>')} یا ${e('<b>corium</b>')} لایه ضخیم زیر اپیدرم است. برخلاف اپیدرم ${e('<b>vascular</b>')} است و رگ، عصب، غدد عرق و چربی و فولیکول مو دارد.<br>دو بخش دارد: ${e('papillary layer')} (لایه پرزدار، بالایی) و ${e('reticular layer')} (لایه مشبک، پایینی و پر از کلاژن).`),
          L('پرزهای درم و اثر انگشت', `${e('<b>dermal papillae</b>')} برجستگی‌های انگشتی درم‌اند که در اپیدرم فرو می‌روند (papill/o = برجستگی پستانک‌مانند). این پرزها سطح تماس دو لایه را بیشتر می‌کنند و روی سر انگشتان، <b>اثر انگشت</b> را می‌سازند.${memo('اثر انگشت = نقشه پرزهای درم. برای همین با سوختگی سطحی اثر انگشت عوض نمی‌شود.')}`),
          M('نام دیگر dermis کدام است؟', ['corium', 'cuticle', 'stratum corneum', 'hypodermis'], 'corium = درم (پوست حقیقی).'),
          M('اثر انگشت از کدام ساختار درست می‌شود؟', ['dermal papillae', 'stratum lucidum', 'sebaceous glands', 'arrector pili'], 'پرزهای درم الگوی برجستگی‌ها را می‌سازند.'),
          T('درم برخلاف اپیدرم رگ خونی و عصب دارد.', true, 'درم vascular است.', F('dermis', [])),
          W('واژه‌ای بساز به معنی «مربوط به پوست»', ['derm/o', '-al'], ['-itis', 'epi-', '-oma'], 'derm/o + -al = dermal.'),
          P('هر بخش را به ویژگی‌اش وصل کن', [['papillary layer', 'بخش بالایی درم با پرزها'], ['reticular layer', 'بخش پایینی و پرکلاژن'], ['dermal papillae', 'سازنده اثر انگشت'], ['vascular', 'پررگ']], 'دو بخش درم.'),
          B('اپیدرم بدون رگ است؛ درم ___ است.', ['vascular', 'avascular', 'squamous'], 'vascul/o = رگ.'),
          S('املای انگلیسی «درم» را بنویس', 'dermis', 'derm + -is.', 'der…'),
          N('d2t:ly')
        ]
      },
      {
        id: 'ly5', title: 'گیرنده‌ها و رگ‌ها', icon: '✋', items: [
          L('پوست، بزرگ‌ترین اندام حسی', `درم پر از گیرنده‌های حسی است:<br>• ${e('<b>Meissner corpuscle</b>')}: لمس سبک، در پرزهای درم<br>• ${e('<b>Pacinian corpuscle</b>')}: فشار و لرزش، در عمق درم<br>• ${e('free nerve endings')}: درد، گرما و سرما`),
          L('رگ‌ها و دما', `مویرگ‌های درم هم به اپیدرم غذا می‌رسانند و هم دما را تنظیم می‌کنند: گشاد شدن رگ‌ها (${e('vasodilation')}) گرما را دفع می‌کند و تنگ شدنشان (${e('vasoconstriction')}) گرما را حفظ می‌کند.${pearl('پوست سرد و رنگ‌پریده در شوک یعنی بدن خون را از پوست به اندام‌های حیاتی برده است.')}`),
          M('کدام گیرنده فشار عمیق و لرزش را حس می‌کند؟', ['Pacinian corpuscle', 'Meissner corpuscle', 'melanocyte', 'sebaceous gland'], 'جسمک پاچینی لایه‌لایه و عمیق است.'),
          M('گیرنده لمس سبک در کجای پوست قرار دارد؟', ['پرزهای درم (Meissner)', 'لایه شاخی', 'بافت چربی', 'ماتریکس ناخن'], 'Meissner corpuscle نزدیک سطح است.'),
          T('در سرما رگ‌های درم گشاد می‌شوند تا گرما به پوست برسد.', false, 'نادرست؛ در سرما رگ‌ها تنگ می‌شوند تا گرما حفظ شود.'),
          O('مسیر پیام لمس را بچین', ['لمس پوست', 'تحریک گیرنده Meissner', 'پیام از راه عصب', 'درک لمس در مغز'], 'گیرنده ← عصب ← مغز.'),
          P('هر گیرنده یا ساختار را به کارش وصل کن', [['Meissner corpuscle', 'لمس سبک'], ['Pacinian corpuscle', 'فشار و لرزش'], ['free nerve endings', 'درد و دما'], ['capillaries', 'تغذیه و تنظیم دما']], 'درم = لایه حسی و عروقی.'),
          B('گشاد شدن رگ‌ها را ___ می‌نامند.', ['vasodilation', 'vasoconstriction', 'vascular'], 'vas/o = رگ.'),
          S('املای انگلیسی «پررگ، عروقی» را بنویس', 'vascular', 'vascul/o + -ar.', 'vasc…'),
          N('t2f:ly')
        ]
      },
      {
        id: 'ly6', title: 'کلاژن، الاستین و چین و چروک', icon: '🪢', items: [
          L('طناب‌ها و فنرهای درم', `${e('<b>collagen</b>')} پروتئین رشته‌ای محکم درم است (coll/a = چسب، -gen = سازنده) و استحکام می‌دهد.<br>${e('<b>elastin</b>')} رشته کشسانی است که پوست را پس از کشیده شدن برمی‌گرداند.<br>سازنده هر دو، سلول ${e('<b>fibroblast</b>')} است (fibr/o = رشته).`),
          L('پیری و تورگور', `با افزایش سن و آفتاب‌خوردگی، کلاژن و الاستین کم می‌شود ← ${e('<b>rhytid</b>')} (چین و چروک).<br>${e('<b>skin turgor</b>')} کشسانی پوست است: اگر پوست پشت دست را نیشگون بگیری و دیر برگردد، تورگور کم است.${pearl('تورگور کم در کودک اسهالی نشانه کم‌آبی (dehydration) است.')}`),
          M('کدام پروتئین به پوست استحکام می‌دهد؟', ['collagen', 'melanin', 'sebum', 'keratin'], 'کلاژن پروتئین اصلی درم است.'),
          M(`${e('<b>rhytid</b>')} یعنی…`, ['چین و چروک', 'اسکار', 'تاول', 'خال'], 'rhytid/o = چروک؛ rhytidectomy = لیفت صورت.'),
          T('پوستی که پس از نیشگون دیر به حالت اول برمی‌گردد تورگور کمی دارد.', true, 'نشانه کم‌آبی یا پیری پوست.'),
          W('واژه‌ای بساز به معنی «سازنده رشته (سلول همبند)»', ['fibr/o', '-blast'], ['-cyte', 'kerat/o', '-oma'], 'fibr/o + -blast (سلول جوان سازنده) = fibroblast.'),
          P('هر واژه را به معنی‌اش وصل کن', [['collagen', 'رشته محکم درم'], ['elastin', 'رشته کشسان'], ['fibroblast', 'سازنده کلاژن'], ['skin turgor', 'کشسانی پوست']], 'ساختار درم.'),
          B('چین و چروک پوست را در اصطلاح پزشکی ___ می‌نامند.', ['rhytid', 'cicatrix', 'fissure'], 'rhytid/o = چروک.'),
          S('املای انگلیسی «کلاژن» را بنویس', 'collagen', 'coll/a (چسب) + -gen.', 'coll…'),
          N('m2r:ly')
        ]
      },
      /* ================= سطح ۳: زیرجلدی و ترمیم ================= */
      {
        id: 'ly7', title: 'بافت زیرجلدی و چربی', icon: '🧈', items: [
          L('زیرزمین گرم', `${e('<b>subcutaneous tissue</b>')} یا ${e('<b>hypodermis</b>')} (و ${e('superficial fascia')}) زیر درم قرار دارد. بیشترش ${e('<b>adipose tissue</b>')} یا بافت چربی است.<br>سه کار: عایق گرما، ضربه‌گیر، و انبار انرژی. همچنین پوست را به عضله زیرش می‌چسباند.`),
          L('سه ریشه چربی', `${e('adip/o')}، ${e('lip/o')} و ${e('steat/o')} همه یعنی چربی:<br>${wb('lip/o', '-cyte')} ← سلول چربی<br>${wb('lip/o', '-oma')} ← تومور خوش‌خیم چربی<br>${wb('steat/o', '-oma')} ← تومور چربی یا کیست چربی${memo('adipose = آدیپوز = «اَدیبِ چاق»؛ lip/o مثل «لیپید» و steat/o مثل «استیک چرب».')}`),
          M('بیشتر بافت زیرجلدی از چه ساخته شده است؟', ['adipose tissue', 'keratin', 'cartilage', 'melanin'], 'بافت چربی.'),
          M(`${e('<b>lipocyte</b>')} یعنی…`, ['سلول چربی', 'تومور چربی', 'برداشتن چربی', 'التهاب چربی'], 'lip/o + -cyte.'),
          T('hypodermis نام دیگر بافت زیرجلدی است.', true, 'hypo- (زیر) + derm + -is.'),
          W('واژه‌ای بساز به معنی «تومور خوش‌خیم چربی»', ['lip/o', '-oma'], ['-cyte', 'kerat/o', '-itis'], 'lip/o + -oma = lipoma.'),
          P('هر واژه را به معنی‌اش وصل کن', [['adipose tissue', 'بافت چربی'], ['lipocyte', 'سلول چربی'], ['hypodermis', 'لایه زیرجلدی'], ['lipoma', 'تومور چربی']], 'چربی زیر پوست.'),
          B('ساکشن چربی را ___ می‌نامند.', ['liposuction', 'lipectomy', 'lipocyte'], 'lip/o + suction (مکش).'),
          S('املای انگلیسی «زیرجلدی» را بنویس', 'subcutaneous', 'sub- + cutane/o + -ous.', 'subcu…'),
          N('wb:ly')
        ]
      },
      {
        id: 'ly8', title: 'ترمیم زخم', icon: '🩹', items: [
          L('سه مرحله ترمیم', `${fig('wound-healing', [], 'مراحل ترمیم زخم')}۱. <b>لخته و دلمه</b>: خون لخته می‌شود و دلمه (${e('crust')}) سطح را می‌پوشاند.<br>۲. <b>بافت جوانه‌ای</b> (${e('granulation tissue')}): بافت قرمز و دانه‌دار پر از مویرگ جای خالی را پر می‌کند.<br>۳. <b>اسکار</b> (${e('<b>cicatrix</b>')}): فیبروبلاست‌ها کلاژن می‌سازند و جای زخم می‌ماند.`),
          L('اسکار زیادی: کلوئید', `اگر کلاژن بیش از اندازه ساخته شود، اسکار برجسته‌ای فراتر از لبه زخم می‌سازد: ${e('<b>keloid</b>')} (kel/o = برآمدگی).${pearl('زخم سطحی که فقط اپیدرم را درگیر کند بدون اسکار خوب می‌شود؛ زخمی که تا درم برود اسکار می‌گذارد.')}${vs(['hypertrophic scar', 'برجسته ولی در محدوده زخم'], ['keloid', 'برجسته و فراتر از لبه زخم'])}`),
          M('بافت قرمز و دانه‌دار که زخم را از کف پر می‌کند چه نام دارد؟', ['granulation tissue', 'eschar', 'keloid', 'stratum granulosum'], 'بافت جوانه‌ای پر از مویرگ تازه است.'),
          M(`${e('<b>cicatrix</b>')} یعنی…`, ['جای زخم (اسکار)', 'دلمه', 'تاول', 'خراش'], 'cicatrix = scar.'),
          T('کلوئید اسکاری است که از لبه‌های زخم فراتر می‌رود.', true, 'از ساخت زیاد کلاژن.', F('keloid-ear', ['کلوئید پس از سوراخ کردن گوش'])),
          O('مراحل ترمیم زخم را بچین', ['لخته شدن خون', 'تشکیل دلمه', 'بافت جوانه‌ای', 'تشکیل اسکار'], 'clot ← scab ← granulation ← scar.'),
          P('هر واژه را به معنی‌اش وصل کن', [['crust', 'دلمه'], ['granulation tissue', 'بافت جوانه‌ای'], ['cicatrix', 'اسکار'], ['keloid', 'اسکار برجسته و زیادی']], 'واژه‌های ترمیم.'),
          B('سلولی که کلاژن اسکار را می‌سازد ___ است.', ['fibroblast', 'melanocyte', 'lipocyte'], 'fibr/o = رشته.'),
          S('املای انگلیسی «کلوئید» را بنویس', 'keloid', 'kel/o + -oid.', 'kel…'),
          N('sp:ly')
        ]
      },
      {
        id: 'ly9', title: 'راه‌های ورود دارو از پوست', icon: '💉', items: [
          L('سوزن تا کجا می‌رود؟', `${fig('injection-routes', [], 'راه‌های تزریق و زاویه سوزن')}${tbl([['راه', 'لایه', 'زاویه'], [e('intradermal (ID)'), 'درم', '۱۰ تا ۱۵ درجه'], [e('subcutaneous (SubQ)'), 'زیرجلدی', '۴۵ درجه'], [e('intramuscular (IM)'), 'عضله', '۹۰ درجه'], [e('intravenous (IV)'), 'ورید', '۲۵ درجه']])}`),
          L('بی‌سوزن: از راه پوست', `${e('<b>topical</b>')}: موضعی، مثل پماد روی پوست.<br>${e('<b>transdermal</b>')}: دارو از پوست سالم عبور می‌کند و به خون می‌رسد (چسب نیکوتین).<br>${e('<b>percutaneous</b>')}: «از راه پوست» با سوزن یا لوله.${memo('ID ← In Dermis؛ SubQ ← Sub Cutaneous؛ هرچه زاویه بیشتر، سوزن عمیق‌تر.')}${pearl('مراقب باش: ID در نسخه یعنی intradermal ولی I&D یعنی incision and drainage!')}`),
          M('تست سل (PPD) با کدام راه تزریق می‌شود؟', ['intradermal', 'subcutaneous', 'intramuscular', 'intravenous'], 'تست مانتو داخل‌پوستی است و برآمدگی کوچکی می‌سازد.'),
          M('انسولین معمولاً با کدام راه تزریق می‌شود؟', ['subcutaneous (SubQ)', 'intradermal (ID)', 'intravenous (IV)', 'topical'], 'زیرجلدی با زاویه ۴۵ درجه.'),
          T('چسب دارویی که دارو را از پوست سالم به خون می‌رساند transdermal است.', true, 'trans- = از میان.'),
          O('راه‌های تزریق را از سطحی به عمیق بچین', ['intradermal', 'subcutaneous', 'intramuscular'], 'درم ← زیرجلدی ← عضله.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['ID', 'داخل‌پوستی'], ['SubQ', 'زیرجلدی'], ['IM', 'داخل عضلانی'], ['IV', 'داخل وریدی']], 'چهار راه تزریق.'),
          W('واژه‌ای بساز به معنی «از راه پوست» (با per-)', ['per-', 'cutane/o', '-ous'], ['sub-', 'derm/o', '-itis'], 'per- + cutane/o + -ous = percutaneous.'),
          S('املای انگلیسی «از راه پوست (چسب دارویی)» را بنویس', 'transdermal', 'trans- + derm/o + -al.', 'trans…'),
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
    id: 'ac', sym: 'Ac', name: 'ضمائم پوست', short: 'ضمائم', sub: 'مو و فولیکول، ناخن و بیماری‌هایش، غدد عرق و چربی، آکنه و تعریق',
    color: '#A0673A', dark: '#7A4A22', light: '#F6EBDF',
    levels: ['مو', 'ناخن', 'غدد پوست'],
    gens: EA.genIds('ac'),
    lessons: [
      /* ================= سطح ۱: مو ================= */
      {
        id: 'ac1', title: 'آناتومی مو', icon: '💇', items: [
          L('مو از کجا می‌روید؟', `${fig('hair-anatomy', [], 'آناتومی مو')}${e('<b>hair shaft</b>')}: بخش بیرون از پوست<br>${e('<b>hair root</b>')}: بخش درون پوست<br>${e('<b>hair follicle</b>')}: کیسه لوله‌ای در درم که مو از آن می‌روید (follicul/o = کیسه کوچک)<br>${e('<b>hair papilla</b>')}: گره‌ای از رگ‌ها در ته فولیکول که پیاز مو را تغذیه می‌کند`),
          L('عضله سیخ‌کننده مو', `${e('<b>arrector pili</b>')} عضله صاف کوچکی است که به فولیکول وصل است. در سرما یا ترس منقبض می‌شود، مو را راست می‌کند و «مورمور» یا سیخ شدن مو پدید می‌آید.${memo('arrector مثل «ایرکت = ایستاده»: عضله‌ای که مو را می‌ایستاند.')}`),
          M('بخش دیدنی مو که بیرون از پوست است چه نام دارد؟', ['hair shaft', 'hair root', 'hair papilla', 'hair follicle'], 'shaft = ساقه.', null, F('hair-anatomy', [])),
          M('کدام ساختار پیاز مو را تغذیه می‌کند؟', ['hair papilla', 'arrector pili', 'sebaceous gland', 'stratum corneum'], 'papilla پر از مویرگ است.'),
          T('arrector pili عضله‌ای است که مو را سیخ می‌کند.', true, 'درست؛ همان «مورمور شدن».'),
          O('اجزای مو را از ته تا نوک بچین', ['hair papilla', 'hair root', 'hair shaft'], 'تغذیه در ته، ریشه درون پوست، ساقه بیرون.'),
          P('هر ساختار را به توضیحش وصل کن', [['hair follicle', 'کیسه رویش مو'], ['hair root', 'بخش درون پوست'], ['hair shaft', 'بخش بیرون پوست'], ['arrector pili', 'عضله سیخ‌کننده مو']], 'ساختار مو.'),
          B('کیسه لوله‌ای که مو از آن می‌روید ___ نام دارد.', ['hair follicle', 'hair papilla', 'nail matrix'], 'follicul/o = کیسه کوچک.'),
          S('املای انگلیسی «فولیکول مو» (کلمه دوم) را بنویس', 'follicle', 'follicul/o = کیسه کوچک.', 'foll…'),
          N('t2f:ac')
        ]
      },
      {
        id: 'ac2', title: 'دو ریشه برای مو', icon: '🪮', items: [
          L('trich/o و pil/o', `هر دو یعنی «مو»:<br>${wb('trich/o', '-pathy')} ← بیماری مو<br>${wb('trich/o', 'myc/o', '-osis')} ← عفونت قارچی مو<br>${wb('pil/o', 'nid/o', '-al')} ← «لانه مو»: ${e('pilonidal cyst')}، کیستی پر از مو روی دنبالچه`),
          L('مو کم یا زیاد', `${e('<b>alopecia</b>')}: ریزش مو، طاسی؛ ${e('alopecia areata')} = ریزش تکه‌ای و سکه‌ای.<br>${e('<b>hirsutism</b>')}: موی زیاد، به‌ویژه الگوی مردانه در زنان (hirsut/o = پرمو).${vs(['alopecia', 'مو کم: طاسی'], ['hirsutism', 'مو زیاد: پرمویی'])}${pearl('کیست پایلونیدال در جنگ جهانی دوم «بیماری جیپ» نام گرفت؛ سربازان با نشستن طولانی روی صندلی سفت جیپ به آن دچار می‌شدند.')}`),
          M(`${e('<b>trichopathy</b>')} یعنی…`, ['هر بیماری مو', 'ریزش مو', 'برداشتن مو', 'التهاب فولیکول'], 'trich/o (مو) + -pathy (بیماری).'),
          M('ریزش مو یا طاسی در اصطلاح پزشکی چیست؟', ['alopecia', 'hirsutism', 'folliculitis', 'trichomycosis'], 'alopecia areata = ریزش تکه‌ای.'),
          T('hirsutism یعنی رشد زیاد مو، به‌ویژه با الگوی مردانه در زنان.', true, 'hirsut/o = پرمو.'),
          W('واژه‌ای بساز به معنی «عفونت قارچی مو»', ['trich/o', 'myc/o', '-osis'], ['onych/o', '-itis', 'pil/o'], 'trich/o + myc/o + -osis = trichomycosis.'),
          P('هر واژه را به معنی‌اش وصل کن', [['alopecia', 'ریزش مو'], ['hirsutism', 'پرمویی'], ['trichopathy', 'بیماری مو'], ['pilonidal cyst', 'کیست مویی دنبالچه']], 'واژه‌های مو.'),
          B('پیشوند یا ریشه ___ مثل trich/o معنی «مو» دارد.', ['pil/o', 'py/o', 'pedicul/o'], 'pil/o = مو؛ py/o = چرک.'),
          S('املای انگلیسی «ریزش مو» را بنویس', 'alopecia', 'alopecia areata = ریزش تکه‌ای.', 'alo…'),
          N('m2r:ac')
        ]
      },
      {
        id: 'ac3', title: 'مشکلات فولیکول', icon: '🔴', items: [
          L('فولیکول ملتهب', `${e('<b>folliculitis</b>')}: التهاب فولیکول مو، معمولاً با باکتری استافیلوکوک؛ جوش‌های چرکی کوچک دور موها.<br>اگر عفونت عمیق‌تر شود ← ${e('<b>furuncle</b>')} (کورک)؛ چند کورک به‌هم‌پیوسته ← ${e('<b>carbuncle</b>')} (کفگیرک).${fig('furuncle', ['کورک گردن'], 'آبسه گنبدی از فولیکول مو')}`),
          L('ترتیب شدت', `${tbl([['ضایعه', 'عمق'], [e('folliculitis'), 'سطحی، دور یک مو'], [e('furuncle'), 'آبسه یک فولیکول'], [e('carbuncle'), 'چند فولیکول به‌هم‌پیوسته']])}${memo('folliculitis ← furuncle ← carbuncle: «F، F، C» مثل بزرگ شدن یک جوش تا یک کفگیرک.')}${pearl('کورک روی صورت را هرگز فشار نده؛ عفونت ممکن است به سینوس‌های مغز برسد.')}`),
          M('التهاب فولیکول مو را چه می‌نامند؟', ['folliculitis', 'onychia', 'hidradenitis', 'cellulitis'], 'follicul/o + -itis.'),
          M('چند کورک به‌هم‌پیوسته چه نام دارد؟', ['carbuncle', 'furuncle', 'pustule', 'comedo'], 'carbuncle = کفگیرک.'),
          T('furuncle همان کورک است؛ آبسه دردناک یک فولیکول مو.', true, 'boil = furuncle.', F('furuncle', [])),
          O('ضایعه‌ها را از سطحی به شدید بچین', ['folliculitis', 'furuncle', 'carbuncle'], 'یک فولیکول ← آبسه ← چند فولیکول.'),
          P('هر واژه را به معنی‌اش وصل کن', [['folliculitis', 'التهاب فولیکول'], ['furuncle', 'کورک'], ['carbuncle', 'کفگیرک'], ['staphylococcus', 'باکتری خوشه‌ای']], 'عفونت‌های فولیکول.'),
          B('شایع‌ترین میکروب کورک ___ است.', ['staphylococcus', 'streptococcus', 'Candida'], 'staphyl/o = خوشه‌ای.'),
          S('املای انگلیسی «کورک» را بنویس', 'furuncle', 'furuncle = boil.', 'furu…'),
          N('sp:ac')
        ]
      },
      /* ================= سطح ۲: ناخن ================= */
      {
        id: 'ac4', title: 'آناتومی ناخن', icon: '💅', items: [
          L('ناخن از رو و از کنار', `${fig('nail-anatomy', [], 'آناتومی ناخن')}${e('<b>nail body</b>')} (تنه، صفحه ناخن) روی ${e('<b>nail bed</b>')} (بستر صورتی) نشسته است.<br>${e('<b>lunula</b>')}: هلال سفید پایه ناخن (luna = ماه).<br>${e('<b>cuticle</b>')} یا ${e('eponychium')}: نوار پوستی پایه ناخن.<br>${e('<b>nail matrix</b>')}: ناحیه رشد زیر ریشه ناخن.`),
          L('ریشه‌های ناخن', `${e('onych/o')} (یونانی) و ${e('ungu/o')} (لاتین) هر دو یعنی ناخن.<br>${wb('hypo-', 'onych/o', '-ium')} ← ${e('hyponychium')}: پوست زیر لبه آزاد<br>${wb('para-', 'onych/o', '-ia')} ← ${e('paronychia')}: عفونت دور ناخن${memo('lunula = ماه کوچک؛ ناخن هم یک «ماه نو» در پایه‌اش دارد.')}${pearl('رنگ صورتی ناخن از مویرگ‌های بستر ناخن است؛ برای همین در cyanosis ناخن‌ها کبود می‌شوند.')}`),
          M('هلال سفید پایه ناخن چه نام دارد؟', ['lunula', 'cuticle', 'matrix', 'free edge'], 'luna = ماه.', null, F('nail-anatomy', [])),
          M('ناخن تازه در کدام بخش ساخته می‌شود؟', ['nail matrix', 'nail bed', 'free edge', 'lunula'], 'matrix = ناحیه رشد.'),
          T('رنگ صورتی ناخن از مویرگ‌های بستر ناخن است.', true, 'nail bed پررگ است.'),
          P('هر بخش را به توضیحش وصل کن', [['nail body', 'صفحه دیدنی ناخن'], ['nail bed', 'پوست زیر ناخن'], ['cuticle', 'نوار پوستی پایه'], ['free edge', 'لبه جلوتر از انگشت']], 'بخش‌های ناخن.'),
          B('نام دیگر cuticle، ___ است.', ['eponychium', 'hyponychium', 'paronychium'], 'epi- (روی) + onych/o.'),
          W('واژه‌ای بساز به معنی «بیماری ناخن»', ['onych/o', '-pathy'], ['trich/o', '-oma', '-itis'], 'onych/o + -pathy = onychopathy.'),
          S('املای انگلیسی «هلال ناخن» را بنویس', 'lunula', 'luna = ماه + -ula (کوچک).', 'lun…'),
          N('f2t:ac')
        ]
      },
      {
        id: 'ac5', title: 'بیماری‌های ناخن', icon: '🦶', items: [
          L('onych/o + پسوند', `${tbl([['واژه', 'معنی'], [e('onychia'), 'التهاب بستر ناخن'], [e('paronychia'), 'عفونت چین پوستی دور ناخن'], [e('onychomycosis'), 'قارچ ناخن (tinea unguium)'], [e('onychocryptosis'), 'ناخن فرورفته در گوشت'], [e('onychomalacia'), 'نرمی ناخن'], [e('onycholysis'), 'جدا شدن ناخن از بستر'], [e('onychophagia'), 'ناخن‌جویدن']])}${fig('paronychia', ['پارونیکیا'], 'عفونت و التهاب چین‌های پوستی دور ناخن')}`),
          L('ناخن آینه بدن', `${fig('beau-lines', ['خطوط بو'], 'شیار عرضی ناخن پس از بیماری شدید')}${e('<b>Beau lines</b>')}: شیارهای عرضی ناخن که پس از یک بیماری شدید (یا شیمی‌درمانی) پیدا می‌شوند؛ رشد ناخن مدتی متوقف شده است.${memo('onychocryptosis = ناخنِ «پنهان» (crypt/o) در گوشت؛ مثل گنجی که در دخمه (crypt) پنهان شده.')}`),
          M(`${e('<b>onychocryptosis</b>')} یعنی…`, ['ناخن فرورفته در گوشت', 'قارچ ناخن', 'نرمی ناخن', 'ناخن‌جویدن'], 'crypt/o = پنهان.'),
          M('عفونت چین پوستی دور ناخن چیست؟', ['paronychia', 'onychia', 'onycholysis', 'onychomalacia'], 'para- = کنار.', null, F('paronychia', [])),
          T('onychophagia یعنی عادت جویدن ناخن.', true, '-phagia = خوردن.'),
          W('واژه‌ای بساز به معنی «نرمی ناخن»', ['onych/o', '-malacia'], ['-lysis', 'trich/o', '-phagia'], 'onych/o + -malacia = onychomalacia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['onychomycosis', 'قارچ ناخن'], ['onycholysis', 'جدا شدن ناخن'], ['onychophagia', 'ناخن‌جویدن'], ['Beau lines', 'شیار عرضی پس از بیماری']], 'بیماری‌های ناخن.'),
          B('نام لاتین قارچ ناخن، tinea ___ است.', ['unguium', 'pedis', 'capitis'], 'ungu/o = ناخن.'),
          S('املای انگلیسی «قارچ ناخن» را بنویس', 'onychomycosis', 'onych/o + myc/o + -osis.', 'onycho…'),
          N('wb:ac')
        ]
      },
      {
        id: 'ac6', title: 'جراحی و بالین ناخن', icon: '🩺', items: [
          L('برش یا برداشتن', `${vs(['onychotomy', 'برش ناخن (-tomy)'], ['onychectomy', 'برداشتن ناخن (-ectomy)'])}در ناخن فرورفته عودکننده گاهی بخشی از ناخن و ماتریکس آن برداشته می‌شود تا دوباره در گوشت نرود.`),
          L('چه وقت ناخن را جدی بگیریم؟', `• کبودی بستر ناخن ← کمبود اکسیژن (${e('cyanosis')})<br>• خطوط عرضی ← بیماری شدید اخیر (${e('Beau lines')})<br>• ضخیم، زرد و شکننده ← قارچ (${e('onychomycosis')})<br>• قرمزی و چرک دور ناخن ← ${e('paronychia')}${pearl('در تشخیص قارچ ناخن، تراشه ناخن را با پتاسیم هیدروکسید (KOH) زیر میکروسکوپ می‌بینند.')}`),
          M(`${e('<b>onychectomy</b>')} یعنی…`, ['برداشتن ناخن', 'برش ناخن', 'ترمیم ناخن', 'التهاب ناخن'], '-ectomy = برداشتن.'),
          M('ناخن ضخیم، زرد و شکننده بیشتر نشانه چیست؟', ['onychomycosis', 'Beau lines', 'paronychia حاد', 'onychophagia'], 'قارچ ناخن.'),
          T('onychotomy یعنی برداشتن کامل ناخن.', false, 'نادرست؛ -tomy برش است. برداشتن = onychectomy.'),
          O('مراحل تشخیص و درمان قارچ ناخن را بچین', ['شک بالینی: ناخن ضخیم و زرد', 'تراشه ناخن برای KOH', 'دیدن قارچ زیر میکروسکوپ', 'درمان با antifungal'], 'تشخیص آزمایشگاهی پیش از درمان.'),
          P('هر یافته را به معنی‌اش وصل کن', [['ناخن کبود', 'کمبود اکسیژن'], ['شیار عرضی', 'بیماری شدید اخیر'], ['ناخن زرد و ضخیم', 'قارچ'], ['قرمزی دور ناخن', 'پارونیکیا']], 'ناخن آینه بدن.'),
          B('برش ناخن را ___ می‌نامند.', ['onychotomy', 'onychectomy', 'onycholysis'], 'onych/o + -tomy.'),
          S('املای انگلیسی «برداشتن ناخن» را بنویس', 'onychectomy', 'onych/o + -ectomy.', 'onyche…'),
          N('d2t:ac')
        ]
      },
      /* ================= سطح ۳: غدد پوست ================= */
      {
        id: 'ac7', title: 'غدد عرق', icon: '💦', items: [
          L('دو نوع غده عرق', `${fig('sweat-glands', [], 'اکرین و آپوکرین')}${e('<b>sudoriferous gland</b>')} = غده عرق (sudor/o = عرق).<br>• ${e('<b>eccrine</b>')}: همه‌جای بدن؛ مستقیم به ${e('pore')} (منفذ) باز می‌شود و بدن را خنک می‌کند.<br>• ${e('<b>apocrine</b>')}: زیربغل و کشاله ران؛ به فولیکول مو باز می‌شود و از بلوغ فعال است.<br>• ${e('ceruminous gland')}: غده عرق تغییرشکل‌یافته گوش که جرم گوش (${e('cerumen')}) می‌سازد.`),
          L('ریشه‌های عرق', `${e('hidr/o')} و ${e('sudor/o')} = عرق.<br>${wb('hyper-', 'hidr/o', '-osis')} تعریق زیاد • ${wb('an-', 'hidr/o', '-osis')} بی‌عرقی • ${wb('brom/o', 'hidr/o', '-osis')} بوی بد عرق<br>${e('<b>diaphoresis</b>')} = تعریق شدید (dia- + -phoresis)${memo('دوباره: hidr/o با i = عرق؛ hydr/o با y = آب.')}${pearl('تعریق شدید سرد همراه درد قفسه سینه (diaphoresis) یک علامت هشدار سکته قلبی است.')}`),
          M('غده عرقی که همه‌جای بدن هست و مستقیم به منفذ باز می‌شود؟', ['eccrine gland', 'apocrine gland', 'sebaceous gland', 'ceruminous gland'], 'اکرین = خنک‌کننده بدن.', null, F('sweat-glands', [])),
          M(`${e('<b>diaphoresis</b>')} یعنی…`, ['تعریق شدید', 'بی‌عرقی', 'بوی بد عرق', 'ترشح چربی'], 'dia- + -phoresis؛ مترادف sudoresis.'),
          T('غدد آپوکرین از دوران بلوغ فعال می‌شوند و در زیربغل فراوان‌اند.', true, 'بوی عرق از تجزیه ترشح آن‌ها با باکتری است.'),
          W('واژه‌ای بساز به معنی «بی‌عرقی»', ['an-', 'hidr/o', '-osis'], ['hyper-', 'seb/o', '-rrhea'], 'an- + hidr/o + -osis = anhidrosis.'),
          P('هر واژه را به معنی‌اش وصل کن', [['hyperhidrosis', 'تعریق زیاد'], ['anhidrosis', 'بی‌عرقی'], ['bromhidrosis', 'بوی بد عرق'], ['hidradenitis', 'التهاب غدد عرق']], 'hidr/o = عرق.'),
          B('غده سازنده جرم گوش ___ نام دارد.', ['ceruminous gland', 'sebaceous gland', 'eccrine gland'], 'cerumen = جرم گوش.'),
          S('املای انگلیسی «تعریق شدید» را بنویس', 'diaphoresis', 'dia- + -phoresis.', 'diapho…'),
          N('r2m:ac')
        ]
      },
      {
        id: 'ac8', title: 'غدد چربی و سبوم', icon: '🫒', items: [
          L('روغن طبیعی پوست', `${e('<b>sebaceous gland</b>')} غده چربی درم است که ${e('<b>sebum</b>')} (سبوم) را به فولیکول مو می‌ریزد (seb/o = چربی پوست).<br>سبوم پوست و مو را نرم و ضدآب نگه می‌دارد و کمی ضدمیکروب است.<br>${wb('seb/o', '-rrhea')} ← ${e('seborrhea')}: ترشح زیاد چربی`),
          L('وقتی منفذ بسته می‌شود', `${fig('acne-steps', [], 'از فولیکول سالم تا جوش')}سبوم و کراتین در فولیکول گیر می‌کند ← ${e('<b>comedo</b>')} (جمع: ${e('comedones')}):<br>• بسته = سرسفید (whitehead)<br>• باز = سرسیاه (blackhead)؛ سیاهی از اکسید شدن ملانین است، نه کثیفی!${memo('seb/o مثل «صابون چرب»: سبوم روغن طبیعی پوست است.')}`),
          M('غده‌ای که سبوم می‌سازد چه نام دارد؟', ['sebaceous gland', 'sudoriferous gland', 'apocrine gland', 'lacrimal gland'], 'seb/o = سبوم.'),
          M(`${e('<b>comedo</b>')} چیست؟`, ['توپی سبوم و کراتین در فولیکول (سرسیاه یا سرسفید)', 'تاول کوچک', 'کیست مویی', 'خال رنگی'], 'جمع: comedones.', null, F('acne-steps', [])),
          T('سیاهی جوش سرسیاه از کثیفی و گردوخاک است.', false, 'نادرست؛ از اکسید شدن ملانین و چربی در دهانه باز فولیکول است.'),
          O('مراحل تشکیل جوش را بچین', ['ترشح زیاد سبوم', 'بسته شدن دهانه فولیکول (comedo)', 'رشد باکتری', 'التهاب و pustule'], 'سبوم ← توپی ← باکتری ← چرک.'),
          W('واژه‌ای بساز به معنی «ترشح زیاد چربی پوست»', ['seb/o', '-rrhea'], ['hidr/o', '-osis', '-oma'], 'seb/o + -rrhea = seborrhea.'),
          P('هر واژه را به معنی‌اش وصل کن', [['sebum', 'چربی پوست'], ['seborrhea', 'ترشح زیاد چربی'], ['blackhead', 'کومدون باز'], ['whitehead', 'کومدون بسته']], 'واژه‌های غدد چربی.'),
          S('املای انگلیسی «سبوم» را بنویس', 'sebum', 'seb/o + -um.', 'seb…'),
          N('t2f:ac')
        ]
      },
      {
        id: 'ac9', title: 'جمع‌بندی ضمائم', icon: '🧺', items: [
          L('یک نگاه به همه ضمائم', `${tbl([['ضمیمه', 'ریشه', 'نمونه بیماری'], ['مو', e('trich/o, pil/o'), e('alopecia, folliculitis')], ['ناخن', e('onych/o, ungu/o'), e('onychomycosis, paronychia')], ['غده عرق', e('hidr/o, sudor/o'), e('hyperhidrosis')], ['غده چربی', e('seb/o'), e('seborrhea, acne')]])}`),
          L('عرق یا چربی؟', `${vs(['sudoriferous gland', 'عرق آبکی؛ خنک‌کردن بدن؛ به منفذ'], ['sebaceous gland', 'سبوم چرب؛ نرم‌کردن پوست؛ به فولیکول'])}${pearl('در سوختگی تمام‌ضخامت، فولیکول‌ها و غدد عرق از بین می‌روند؛ پوست پیوندی عرق نمی‌کند و مو ندارد.')}`),
          M('کدام جفت ریشه هم‌معنی است؟', ['hidr/o و sudor/o', 'hidr/o و hydr/o', 'pil/o و py/o', 'onych/o و onc/o'], 'هر دو یعنی عرق.'),
          M('غده چربی ترشحش را به کجا می‌ریزد؟', ['فولیکول مو', 'مستقیم به منفذ پوست', 'خون', 'غدد لنفاوی'], 'sebum از راه فولیکول به سطح می‌رسد.'),
          T('ungu/o و onych/o هر دو یعنی ناخن.', true, 'یکی لاتین و دیگری یونانی.'),
          P('هر ضمیمه را به ریشه‌اش وصل کن', [['مو', 'trich/o'], ['ناخن', 'onych/o'], ['عرق', 'hidr/o'], ['چربی پوست', 'seb/o']], 'چهار ریشه ضمائم.'),
          M('بیمار از «تعریق شدید کف دست که در کار روزانه مشکل ساخته» شاکی است. واژه مناسب؟', ['hyperhidrosis', 'seborrhea', 'anhidrosis', 'hirsutism'], 'hyper- + hidr/o + -osis.'),
          B('التهاب غدد عرق، ___ است.', ['hidradenitis', 'folliculitis', 'onychia'], 'hidr/o + aden/o (غده) + -itis.'),
          S('املای انگلیسی «غده چربی» (کلمه اول) را بنویس', 'sebaceous', 'seb/o + -aceous (مربوط به).', 'seba…'),
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
    id: 'le', sym: 'Le', name: 'ضایعه‌ها و نشانه‌ها', short: 'ضایعه‌ها', sub: 'ماکول تا تومور، تاول و چرک، دلمه و زخم، رنگ‌های پوست، خونریزی زیر پوست و خارش',
    color: '#D48A00', dark: '#A56A00', light: '#FFF4D6',
    levels: ['ضایعه‌های اولیه', 'مایع، ثانویه و فرورفته', 'رنگ‌ها و نشانه‌ها'],
    gens: EA.genIds('le'),
    lessons: [
      /* ================= سطح ۱: ضایعه‌های اولیه ================= */
      {
        id: 'le1', title: 'ضایعه چیست؟', icon: '🔎', items: [
          L('هر تغییر غیرطبیعی', `${e('<b>lesion</b>')} (ضایعه) هر زخم، آسیب یا تغییر غیرطبیعی در بافت است؛ از یک لکه تا یک زخم.<br>• ${e('<b>primary lesion</b>')}: اولین تغییری که روی پوست سالم پیدا می‌شود (ماکول، پاپول، تاول…)<br>• ${e('<b>secondary lesion</b>')}: از ضایعه اولیه با خاراندن، ترمیم یا عفونت پدید می‌آید (دلمه، پوسته، اسکار…)`),
          L('سه سؤال برای هر ضایعه', `۱. <b>مسطح، برجسته یا فرورفته؟</b><br>۲. <b>جامد یا پر از مایع؟</b><br>۳. <b>کوچک‌تر یا بزرگ‌تر از ۱ سانتی‌متر؟</b>${fig('size-rule', [], 'مرز یک سانتی‌متری')}${memo('برای توصیف هر ضایعه سه کلید داری: سطح، محتوا، اندازه.')}`),
          M('دلمه‌ای که پس از خاراندن یک تاول تشکیل شده چه نوع ضایعه‌ای است؟', ['secondary lesion', 'primary lesion', 'systemic lesion', 'vascular lesion'], 'از تغییر یک ضایعه اولیه پدید آمده است.'),
          M('مرز اندازه برای جدا کردن macule از patch چقدر است؟', ['۱ سانتی‌متر', '۱ میلی‌متر', '۵ سانتی‌متر', '۱۰ سانتی‌متر'], 'زیر ۱ cm ماکول، بالای آن پچ.', null, F('size-rule', [])),
          T('ماکول و پاپول هر دو ضایعه اولیه‌اند.', true, 'هر دو مستقیم روی پوست سالم پیدا می‌شوند.'),
          P('هر ضایعه را به نوعش وصل کن', [['macule', 'اولیه، مسطح'], ['papule', 'اولیه، برجسته'], ['crust', 'ثانویه'], ['ulcer', 'فرورفته']], 'سطح و ترتیب پیدایش.'),
          B('ضایعه‌ای که از تغییر ضایعه دیگر پدید می‌آید ___ نام دارد.', ['secondary lesion', 'primary lesion', 'macule'], 'ثانویه.'),
          O('ضایعه‌ها را از کوچک به بزرگ بچین', ['papule', 'nodule', 'tumor'], 'زیر ۱ cm ← ۱ تا ۲ cm ← بیش از ۲ cm.'),
          S('املای انگلیسی «ضایعه» را بنویس', 'lesion', 'lesion = زخم یا تغییر غیرطبیعی.', 'les…'),
          N('t2f:le')
        ]
      },
      {
        id: 'le2', title: 'ضایعه‌های مسطح', icon: '🟤', items: [
          L('فقط رنگ عوض می‌شود', `${fig('lesions-flat', [], 'ضایعه‌های مسطح')}${e('<b>macule</b>')}: لکه مسطح و تغییررنگ‌یافته کوچک‌تر از ۱ سانتی‌متر (کک‌مک).<br>${e('<b>patch</b>')}: لکه مسطح بزرگ‌تر از ۱ سانتی‌متر (ویتیلیگو).<br>با لمس، مرزش حس نمی‌شود؛ فقط دیده می‌شود.`),
          L('نمونه‌ها', `${fig(['vitiligo-legs', 'nevus-face'], ['ویتیلیگو: پچ‌های سفید', 'خال‌های صورت'], 'نمونه‌های بالینی')}${memo('macule ← «ماک» = کوچک و صاف؛ patch ← «وصله» بزرگ.')}${pearl('هر ماکول یا خال تازه با رنگ‌های متعدد و لبه نامنظم را با معیار ABCDE بررسی کن.')}`),
          M('لکه قهوه‌ای مسطح ۴ میلی‌متری روی صورت چه نام دارد؟', ['macule', 'patch', 'papule', 'plaque'], 'مسطح و زیر ۱ cm.'),
          M('لکه‌های سفید بزرگ ویتیلیگو از چه نوع‌اند؟', ['patch', 'papule', 'wheal', 'vesicle'], 'مسطح و بزرگ‌تر از ۱ cm.', null, F('vitiligo-legs', ['ویتیلیگو'])),
          T('در لمس ماکول، برجستگی حس می‌شود.', false, 'نادرست؛ ماکول کاملاً مسطح است.'),
          P('هر ضایعه را به نمونه‌اش وصل کن', [['macule', 'کک‌مک'], ['patch', 'ویتیلیگو'], ['petechiae', 'نقاط ریز خونریزی'], ['nevus', 'خال']], 'ضایعه‌های مسطح و رنگی.'),
          B('لکه مسطح بزرگ‌تر از ۱ سانتی‌متر ___ نام دارد.', ['patch', 'macule', 'plaque'], 'patch = وصله.'),
          M('فرق macule و patch در چیست؟', ['اندازه', 'رنگ', 'برجستگی', 'محتوای مایع'], 'هر دو مسطح‌اند؛ مرز ۱ cm.'),
          S('املای انگلیسی «ماکول» را بنویس', 'macule', 'macule = لکه کوچک.', 'mac…'),
          N('f2t:le')
        ]
      },
      {
        id: 'le3', title: 'ضایعه‌های برجسته و جامد', icon: '⛰️', items: [
          L('از پاپول تا تومور', `${fig('lesions-raised', [], 'ضایعه‌های برجسته')}${tbl([['ضایعه', 'ویژگی'], [e('papule'), 'برجسته و جامد، زیر ۱ cm'], [e('plaque'), 'برجسته و تخت، بیش از ۱ cm (پسوریازیس)'], [e('nodule'), 'جامد و عمیق‌تر، ۱ تا ۲ cm'], [e('tumor'), 'توده جامد بیش از ۲ cm'], [e('wheal'), 'ورم گذرا و خارش‌دار (کهیر)'], [e('polyp'), 'زائده پایه‌دار']])}`),
          L('کهیر: آمد و رفت', `${e('<b>wheal</b>')} ورم صاف و کمی برجسته است که چند ساعته می‌آید و می‌رود؛ مثل نیش پشه یا کهیر آلرژیک (${e('urticaria')}).${fig('urticaria', ['کهیر'], 'ویل‌های پراکنده در کهیر')}${memo('پلاک مثل «پلاک خودرو»: تخت و پهن.')}`),
          M('برجستگی جامد ۵ میلی‌متری چیست؟', ['papule', 'nodule', 'plaque', 'vesicle'], 'جامد و زیر ۱ cm.'),
          M('ضایعه‌های تخت و پهن پوسته‌دار پسوریازیس چه نام دارند؟', ['plaque', 'papule', 'bulla', 'wheal'], 'برجسته، تخت و بزرگ‌تر از ۱ cm.', null, F('psoriasis-knee', ['پسوریازیس زانو'])),
          T('wheal ضایعه‌ای پایدار است که هفته‌ها بدون تغییر می‌ماند.', false, 'نادرست؛ ویل گذراست و معمولاً در چند ساعت می‌رود.'),
          O('این ضایعه‌های جامد را از کوچک به بزرگ بچین', ['papule', 'nodule', 'tumor'], 'زیر ۱، ۱ تا ۲، بیش از ۲ سانتی‌متر.'),
          P('هر ضایعه را به توصیفش وصل کن', [['papule', 'برجستگی جامد کوچک'], ['plaque', 'برجستگی تخت و پهن'], ['nodule', 'گره عمیق‌تر'], ['wheal', 'ورم گذرای خارش‌دار']], 'ضایعه‌های برجسته.'),
          B('زائده‌ای که با یک پایه از سطح بیرون زده ___ است.', ['polyp', 'plaque', 'macule'], 'polyp = زائده پایه‌دار.'),
          S('املای انگلیسی «پاپول» را بنویس', 'papule', 'papule = برجستگی کوچک.', 'pap…'),
          N('d2t:le')
        ]
      },
      /* ================= سطح ۲: مایع، ثانویه و فرورفته ================= */
      {
        id: 'le4', title: 'تاول، چرک و کیست', icon: '💧', items: [
          L('ضایعه‌های پر از مایع', `${fig('lesions-fluid', [], 'ضایعه‌های پر از مایع')}${e('<b>vesicle</b>')}: تاول کوچک با مایع شفاف، زیر ۱ cm (vesic/o = کیسه)<br>${e('<b>bulla</b>')}: تاول بزرگ، بیش از ۱ cm (جمع: bullae)<br>${e('<b>pustule</b>')}: برجستگی کوچک پر از چرک<br>${e('<b>cyst</b>')}: کیسه بسته پر از مایع یا ماده نیمه‌جامد<br>${e('<b>abscess</b>')}: حفره‌ای پر از چرک با بافت ملتهب دور آن`),
          L('نمونه‌های بالینی', `${fig(['burn-blisters', 'pemphigus'], ['تاول سوختگی درجه دو', 'پمفیگوس: بول‌ها'], 'تاول‌های بزرگ')}${memo('vesicle مثل «وزیکول» = کیسه کوچک؛ bulla مثل «بالن» = کیسه بزرگ.')}${pearl('مایع زرد کدر و چرکی یعنی عفونت؛ مایع شفاف بیشتر در سوختگی، تبخال و آبله‌مرغان دیده می‌شود.')}`),
          M('تاول بزرگ‌تر از ۱ سانتی‌متر چه نام دارد؟', ['bulla', 'vesicle', 'pustule', 'papule'], 'bulla = تاول بزرگ.', null, F('burn-blisters', ['تاول سوختگی'])),
          M('برجستگی کوچک پر از چرک چیست؟', ['pustule', 'vesicle', 'cyst', 'wheal'], 'pustule = جوش چرکی.'),
          T('vesicle تاول کوچکی پر از مایع شفاف است.', true, 'vesic/o = کیسه.'),
          O('مراحل پیدایش آبسه را بچین', ['ورود باکتری به پوست', 'التهاب و هجوم گلبول‌های سفید', 'تجمع چرک در حفره (abscess)', 'برش و تخلیه (I&D)'], 'عفونت ← التهاب ← چرک ← تخلیه.'),
          P('هر ضایعه را به محتوایش وصل کن', [['vesicle', 'مایع شفاف (کوچک)'], ['pustule', 'چرک'], ['cyst', 'کیسه بسته'], ['hematoma', 'لخته خون']], 'ضایعه‌های پر از مایع.'),
          B('حفره‌ای پر از چرک با بافت ملتهب اطراف ___ نام دارد.', ['abscess', 'cyst', 'bulla'], 'درمان معمول: I&D.'),
          S('املای انگلیسی «تاول کوچک» را بنویس', 'vesicle', 'vesic/o + -le.', 'vesi…'),
          N('t2f:le')
        ]
      },
      {
        id: 'le5', title: 'ضایعه‌های ثانویه', icon: '🍂', items: [
          L('پس از خاراندن و ترمیم', `${fig('lesions-secondary', [], 'ضایعه‌های ثانویه و فرورفته')}${e('<b>crust</b>')}: دلمه؛ سرم، خون یا چرک خشک‌شده<br>${e('<b>scale</b>')}: پوسته‌های نازک اپیدرم مرده<br>${e('<b>lichenification</b>')}: پوست ضخیم و چرمی با خطوط عمیق، از خاراندن طولانی<br>${e('<b>excoriation</b>')}: خراش خطی<br>${e('<b>keloid</b>')}: اسکار برجسته فراتر از لبه زخم`),
          L('نمونه‌ها', `${fig(['lichenification', 'impetigo-nose'], ['لیکنیفیکاسیون مچ پا', 'دلمه عسلی زردزخم'], 'ضایعه‌های ثانویه')}${memo('lichen = گلسنگ: پوست ضخیم و خط‌خطی مثل گلسنگ روی سنگ.')}${pearl('دلمه «عسلی‌رنگ» دور بینی و دهان کودک = زردزخم (impetigo)؛ واگیردار است.')}`),
          M('پوست ضخیم و چرمی بر اثر خاراندن طولانی چه نام دارد؟', ['lichenification', 'excoriation', 'keloid', 'scale'], 'در اگزمای مزمن.', null, F('lichenification', [])),
          M('خراش خطی ناشی از ناخن چیست؟', ['excoriation', 'fissure', 'erosion', 'ulcer'], 'ex- + cori (پوست) + -ation.'),
          T('scale یعنی پوسته‌های نازک اپیدرم مرده، مثل شوره سر.', true, 'در پسوریازیس پوسته‌ها نقره‌ای‌اند.'),
          P('هر واژه را به معنی‌اش وصل کن', [['crust', 'دلمه'], ['scale', 'پوسته'], ['excoriation', 'خراش'], ['keloid', 'اسکار برجسته']], 'ضایعه‌های ثانویه.'),
          O('رخدادها را بچین', ['خارش پوست', 'خاراندن', 'excoriation', 'crust'], 'خارش ← خراش ← دلمه.'),
          B('اسکار برجسته‌ای که از لبه زخم فراتر می‌رود ___ است.', ['keloid', 'cicatrix', 'crust'], 'kel/o + -oid.'),
          S('املای انگلیسی «خراشیدگی» را بنویس', 'excoriation', 'ex- + cori + -ation.', 'excor…'),
          N('sp:le')
        ]
      },
      {
        id: 'le6', title: 'ترک، زخم و فرورفتگی', icon: '🕳️', items: [
          L('ضایعه‌های فرورفته', `${e('<b>fissure</b>')}: ترک عمیق و خطی (پای ورزشکار، لب ترک‌خورده)<br>${e('<b>erosion</b>')}: از دست رفتن سطحی اپیدرم؛ بی اسکار خوب می‌شود<br>${e('<b>ulcer</b>')}: زخم باز که تا درم یا عمیق‌تر می‌رود؛ با اسکار خوب می‌شود<br>${e('<b>atrophy</b>')}: نازک و فرورفته شدن پوست${vs(['erosion', 'فقط اپیدرم؛ بی اسکار'], ['ulcer', 'تا درم یا عمیق‌تر؛ با اسکار'])}`),
          L('زخم در بالین', `${fig(['stasis-ulcer', 'decubitus-ulcer'], ['زخم وریدی مچ پا', 'زخم بستر'], 'دو زخم مزمن رایج')}${memo('fissure مثل «فیشور» = شکاف؛ ulcer مثل «اولسر معده» = زخم باز.')}`),
          M('ترک عمیق و خطی پوست چه نام دارد؟', ['fissure', 'erosion', 'excoriation', 'ulcer'], 'fissure = شکاف.'),
          M('زخم بازی که تا درم رفته چیست؟', ['ulcer', 'erosion', 'macule', 'crust'], 'زخم عمیق با اسکار ترمیم می‌شود.', null, F('stasis-ulcer', ['زخم وریدی'])),
          T('erosion معمولاً بدون اسکار ترمیم می‌شود.', true, 'چون فقط اپیدرم را درگیر کرده است.'),
          P('هر ضایعه را به توصیفش وصل کن', [['fissure', 'ترک خطی عمیق'], ['erosion', 'از دست رفتن سطحی اپیدرم'], ['ulcer', 'زخم تا درم'], ['atrophy', 'نازک شدن پوست']], 'ضایعه‌های فرورفته.'),
          O('مراحل زخم فشاری را از سطحی به عمیق بچین', ['Stage 1: قرمزی پایدار', 'Stage 2: زخم سطحی', 'Stage 3: تا بافت چربی', 'Stage 4: تا عضله و استخوان'], 'هر مرحله یک لایه عمیق‌تر.'),
          B('نازک، براق و فرورفته شدن پوست ___ نام دارد.', ['atrophy', 'hypertrophy', 'keloid'], 'a- + -trophy.'),
          S('املای انگلیسی «زخم» را بنویس', 'ulcer', 'ulcer = زخم باز.', 'ulc…'),
          N('m2r:le')
        ]
      },
      /* ================= سطح ۳: رنگ‌ها و نشانه‌ها ================= */
      {
        id: 'le7', title: 'رنگ‌های پوست', icon: '🌈', items: [
          L('پنج رنگ هشدار', `${tbl([['واژه', 'رنگ و علت'], [e('erythema'), '<b>قرمز</b>: گشاد شدن مویرگ‌ها (التهاب، آفتاب)'], [e('cyanosis'), '<b>آبی</b>: کمبود اکسیژن خون'], [e('pallor'), '<b>رنگ‌پریده</b>: کم‌خونی، شوک'], [e('jaundice'), '<b>زرد</b>: بیلی‌روبین بالا (کبد)'], [e('hyperpigmentation'), '<b>تیره</b>: ملانین بیشتر']])}`),
          L('erythema و erythematous', `${e('<b>erythema</b>')} اسم است (قرمزی) و ${e('<b>erythematous</b>')} صفت (قرمز): «یک پلاک erythematous».<br>${e('<b>hyperpigmentation</b>')} در برابر ${e('<b>depigmentation</b>')}: رنگ بیشتر یا از دست رفتن رنگ.${fig('age-spots', ['لکه‌های پیری'], 'پررنگ‌شدن پوست با افزایش سن و آفتاب')}${pearl('یرقان را اول در سفیدی چشم ببین؛ در پوست تیره زودتر از پوست دیده می‌شود.')}`),
          M('قرمزی پوست از گشاد شدن مویرگ‌ها چه نام دارد؟', ['erythema', 'cyanosis', 'pallor', 'jaundice'], 'erythem/o = قرمز.'),
          M('بیمار با لب و ناخن کبود؛ کدام واژه؟', ['cyanosis', 'erythema', 'jaundice', 'pallor'], 'cyan/o = آبی؛ کمبود اکسیژن.'),
          T('jaundice یعنی زرد شدن پوست و چشم از بیلی‌روبین بالا.', true, 'jaund/o = زرد.'),
          W('واژه‌ای بساز به معنی «پررنگ‌شدن پوست»', ['hyper-', 'pigment/o', '-ation'], ['de-', 'melan/o', '-oma'], 'hyper- + pigment + -ation.'),
          P('هر رنگ را به واژه‌اش وصل کن', [['قرمز', 'erythema'], ['آبی', 'cyanosis'], ['رنگ‌پریده', 'pallor'], ['زرد', 'jaundice']], 'رنگ‌های پوست.'),
          B('صفت «قرمز» برای ضایعه پوستی ___ است.', ['erythematous', 'erythema', 'erythrocyte'], 'erythemat/o + -ous.'),
          S('املای انگلیسی «رنگ‌پریدگی» را بنویس', 'pallor', 'pallor = رنگ‌پریدگی.', 'pal…'),
          N('wb:le')
        ]
      },
      {
        id: 'le8', title: 'خونریزی زیر پوست', icon: '🩸', items: [
          L('از نقطه تا توده', `${fig('bleed-spots', [], 'خونریزی زیر پوست')}${e('<b>petechiae</b>')}: نقطه‌های ریز قرمز یا بنفش (مفرد: petechia)<br>${e('<b>purpura</b>')}: لکه‌های بنفش بزرگ‌تر<br>${e('<b>ecchymosis</b>')}: کبودی بزرگ آبی و بنفش<br>${e('<b>hematoma</b>')}: لخته خون برجسته زیر پوست (hemat/o = خون، -oma = توده)`),
          L('نمونه‌های بالینی', `${fig(['petechiae', 'purpura-hand'], ['پتشی', 'پورپورا روی دست'], 'نقطه و لکه')}${e('<b>contusion</b>')} = کوفتگی: آسیبی که پوست را پاره نمی‌کند.${memo('از کوچک به بزرگ: پتشی ← پورپورا ← اکیموز؛ هماتوم برجسته است.')}${pearl('پتشی‌ها با فشار انگشت محو نمی‌شوند؛ این تست ساده آن‌ها را از بثورات قرمز جدا می‌کند.')}`),
          M('نقطه‌های ریز قرمز از خونریزی زیر پوست چه نام دارند؟', ['petechiae', 'purpura', 'ecchymosis', 'erythema'], 'مفرد: petechia.', null, F('petechiae', [])),
          M('کبودی بزرگ آبی و بنفش پس از ضربه چیست؟', ['ecchymosis', 'petechiae', 'hematoma', 'cyanosis'], 'ecchymosis = bruise.'),
          T('hematoma یعنی تجمع خون لخته‌شده که برآمدگی می‌سازد.', true, 'hemat/o + -oma.'),
          O('این ضایعه‌ها را از کوچک به بزرگ بچین', ['petechiae', 'purpura', 'ecchymosis'], 'نقطه ← لکه ← کبودی بزرگ.'),
          P('هر واژه را به معنی‌اش وصل کن', [['petechiae', 'نقاط ریز خونریزی'], ['purpura', 'لکه‌های بنفش'], ['ecchymosis', 'کبودی'], ['contusion', 'کوفتگی']], 'خونریزی زیر پوست.'),
          W('واژه‌ای بساز به معنی «توده خون»', ['hemat/o', '-oma'], ['-itis', 'melan/o', 'cyan/o'], 'hemat/o + -oma = hematoma.'),
          S('املای انگلیسی «کبودی بزرگ» را بنویس', 'ecchymosis', 'ecchymosis = bruise.', 'ecchy…'),
          N('t2f:le')
        ]
      },
      {
        id: 'le9', title: 'خارش، کهیر و ترشح', icon: '🤚', items: [
          L('نشانه‌های رایج', `${e('<b>pruritus</b>')}: خارش؛ صفت آن ${e('pruritic')} (خارش‌دار)<br>${e('<b>urticaria</b>')}: کهیر؛ ویل‌های خارش‌دار، معمولاً آلرژیک<br>${e('<b>rash</b>')} یا ${e('exanthem')}: بثورات پوستی<br>${e('<b>edema</b>')}: تورم از مایع اضافه در بافت<br>${e('<b>induration</b>')}: سفتی بافت (در خواندن تست سل)`),
          L('ترشح زخم', `${e('<b>exudate</b>')}: مایع، سلول یا چرکی که از زخم بیرون می‌آید.<br>${e('<b>purulent</b>')}: چرکی (pur/o = چرک).${vs(['pruritus', 'خارش (نشانه)'], ['urticaria', 'کهیر (ضایعه و بیماری)'])}${pearl('داروی ضدخارش antipruritic است؛ مراقب باش با antipyretic (تب‌بر) اشتباه نشود!')}`),
          M('خارش شدید در اصطلاح پزشکی چیست؟', ['pruritus', 'urticaria', 'edema', 'erythema'], 'prurit/o = خارش.'),
          M('ترشح زخمی که پر از چرک است را چگونه توصیف می‌کنند؟', ['purulent', 'pruritic', 'erythematous', 'squamous'], 'pur/o (چرک) + -ulent (پر از).'),
          T('urticaria همان کهیر است و معمولاً واکنش آلرژیک است.', true, 'ویل‌های خارش‌دار.', F('urticaria', ['کهیر'])),
          P('هر واژه را به معنی‌اش وصل کن', [['pruritus', 'خارش'], ['edema', 'تورم'], ['exudate', 'ترشح زخم'], ['induration', 'سفتی بافت']], 'نشانه‌های پوستی.'),
          W('واژه‌ای بساز به معنی «داروی ضدخارش»', ['anti-', 'prurit/o', '-ic'], ['-itis', 'pyret/o', 'derm/o'], 'anti- + prurit/o + -ic = antipruritic.'),
          B('صفت «خارش‌دار» ___ است.', ['pruritic', 'purulent', 'pyretic'], 'prurit/o + -ic.'),
          S('املای انگلیسی «خارش» را بنویس', 'pruritus', 'prurit/o + -us.', 'prur…'),
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
    id: 'ds', sym: 'Ds', name: 'بیماری‌های پوست', short: 'بیماری‌ها', sub: 'عفونت‌های باکتریایی، قارچی و ویروسی، انگل‌ها، اگزما و پسوریازیس، آکنه، لوپوس، سوختگی و زخم بستر',
    color: '#C8423C', dark: '#9A2C28', light: '#FDE5E3',
    levels: ['عفونت‌ها و انگل‌ها', 'التهاب و خودایمنی', 'سوختگی و زخم'],
    gens: EA.genIds('ds'),
    lessons: [
      /* ================= سطح ۱: عفونت‌ها و انگل‌ها ================= */
      {
        id: 'ds1', title: 'عفونت‌های باکتریایی', icon: '🦠', items: [
          L('زردزخم و سلولیت', `${e('<b>impetigo</b>')}: عفونت باکتریایی بسیار واگیردار (استاف یا استرپ)؛ پوسچول‌هایی که می‌ترکند و <b>دلمه عسلی‌رنگ</b> می‌سازند؛ اغلب دور بینی و دهان کودکان.<br>${e('<b>cellulitis</b>')}: عفونت درم و بافت زیرجلدی؛ پوست قرمز، گرم، متورم و دردناک.${fig(['impetigo-nose', 'impetigo-lips'], ['زردزخم کنار بینی', 'زردزخم دور لب'], 'دلمه‌های عسلی‌رنگ')}`),
          L('دو باکتری مشهور', `${e('<b>staphylococcus</b>')} (staph): باکتری‌های کروی <b>خوشه‌ای</b> (staphyl/o = خوشه انگور)<br>${e('<b>streptococcus</b>')} (strep): باکتری‌های کروی <b>زنجیره‌ای</b> (strept/o = پیچیده، زنجیر)<br>${e('<b>MRSA</b>')}: استافیلوکوک طلایی مقاوم به متی‌سیلین؛ به بسیاری از آنتی‌بیوتیک‌ها پاسخ نمی‌دهد.${pearl('برای انتخاب آنتی‌بیوتیک درست، از ترشح زخم «کشت و آنتی‌بیوگرام» (C&S) می‌گیرند.')}`),
          M('دلمه‌های عسلی‌رنگ دور بینی کودک نشانه کدام بیماری است؟', ['impetigo', 'cellulitis', 'scabies', 'psoriasis'], 'زردزخم بسیار واگیردار است.', null, F('impetigo-nose', ['زردزخم'])),
          M('عفونت درم و بافت زیرجلدی با پوست قرمز، گرم و دردناک چیست؟', ['cellulitis', 'impetigo', 'folliculitis', 'eczema'], 'cellul/o + -itis.'),
          T('staphylococcus باکتری‌های زنجیره‌ای‌اند.', false, 'نادرست؛ استاف خوشه‌ای است و استرپ زنجیره‌ای.'),
          P('هر واژه را به معنی‌اش وصل کن', [['impetigo', 'زردزخم'], ['cellulitis', 'عفونت بافت نرم'], ['abscess', 'حفره چرکی'], ['MRSA', 'استاف مقاوم به آنتی‌بیوتیک']], 'عفونت‌های باکتریایی.'),
          B('درمان آبسه معمولاً ___ است.', ['incision and drainage (I&D)', 'cryotherapy', 'phototherapy'], 'برش و تخلیه چرک.'),
          M('C&S در پرونده یعنی…', ['کشت و آنتی‌بیوگرام', 'سرطان سلول سنگفرشی', 'برش و تخلیه', 'بیوپسی'], 'culture and sensitivity.'),
          S('املای انگلیسی «زردزخم» را بنویس', 'impetigo', 'impetigo = عفونت باکتریایی واگیردار.', 'impe…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds2', title: 'عفونت‌های قارچی', icon: '🍄', items: [
          L('کچلی: حلقه‌ای که کرم نیست', `${e('<b>tinea</b>')} عفونت قارچی پوست، مو یا ناخن است که به آن ${e('ringworm')} (کرم حلقوی) هم می‌گویند؛ ولی هیچ کرمی در کار نیست! حلقه‌های قرمز با مرکز روشن‌تر.${fig('tinea-sites', [], 'tinea + نام لاتین محل')}`),
          L('نام محل را بگو', `${tbl([['نام', 'محل'], [e('tinea capitis'), 'سر'], [e('tinea corporis'), 'بدن'], [e('tinea cruris'), 'کشاله ران'], [e('tinea pedis'), 'پا (پای ورزشکار)'], [e('tinea unguium'), 'ناخن'], [e('tinea versicolor'), 'لکه‌های رنگارنگ تنه']])}${e('<b>candidiasis</b>')}: عفونت مخمری کاندیدا در جاهای مرطوب؛ در دهان «برفک».${memo('capitis = کاپیتان (سر)؛ pedis = پدال (پا)؛ corporis = کورپوس (بدن).')}`),
          M('پای ورزشکار در اصطلاح پزشکی چیست؟', ['tinea pedis', 'tinea capitis', 'tinea cruris', 'tinea corporis'], 'pedis = پا.', null, F('tinea-sites', [])),
          M('حلقه‌های قرمز با مرکز روشن روی تنه کدام است؟', ['tinea corporis', 'psoriasis', 'urticaria', 'vitiligo'], 'کچلی بدن.', null, F('tinea-corporis', ['کچلی بدن'])),
          T('ringworm از یک کرم انگلی ایجاد می‌شود.', false, 'نادرست؛ از قارچ است؛ فقط شکل حلقه‌ای دارد.'),
          W('واژه‌ای بساز به معنی «قارچ پوست»', ['dermat/o', 'myc/o', '-osis'], ['onych/o', '-itis', 'trich/o'], 'dermat/o + myc/o + -osis = dermatomycosis.'),
          P('هر نام را به محلش وصل کن', [['tinea capitis', 'سر'], ['tinea cruris', 'کشاله ران'], ['tinea pedis', 'پا'], ['tinea unguium', 'ناخن']], 'tinea + نام لاتین محل.'),
          B('عفونت مخمری که در دهان برفک می‌سازد ___ است.', ['candidiasis', 'impetigo', 'pediculosis'], 'candid/o + -iasis.'),
          S('املای انگلیسی «کچلی» را بنویس', 'tinea', 'tinea = ringworm.', 'tin…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds3', title: 'ویروس‌ها و انگل‌ها', icon: '🐛', items: [
          L('ویروس‌های پوست', `${e('<b>verruca</b>')}: زگیل؛ از ویروس پاپیلومای انسانی (${e('HPV')})<br>${e('<b>herpes simplex</b>')}: تبخال؛ وزیکول‌های دردناک لب (${e('HSV')})<br>${e('<b>varicella</b>')}: آبله‌مرغان؛ وزیکول‌های خارش‌دار که دلمه می‌بندند<br>${e('<b>herpes zoster</b>')}: زونا؛ بیدار شدن دوباره ویروس آبله‌مرغان (${e('VZV')}) در مسیر یک عصب${fig('varicella', ['آبله‌مرغان'], 'بثورات در حال دلمه بستن')}`),
          L('انگل‌ها', `${e('<b>scabies</b>')}: گال؛ کنه ریزی که زیر پوست تونل می‌زند و خارش شدید شبانه می‌دهد.<br>${e('<b>pediculosis</b>')}: شپش‌زدگی (pedicul/o = شپش)؛ تخم‌های شپش (nits) به مو می‌چسبند.${memo('herpes zoster = «زونا» مثل «زون»: فقط یک ناحیه (مسیر یک عصب) در یک طرف بدن.')}${pearl('هرکس آبله‌مرغان گرفته، ویروس در عصبش خفته است و ممکن است سال‌ها بعد زونا بگیرد.')}`),
          M('زگیل را کدام ویروس ایجاد می‌کند؟', ['HPV', 'HSV', 'VZV', 'HIV'], 'human papillomavirus.'),
          M('زونا بیدار شدن دوباره کدام ویروس است؟', ['ویروس آبله‌مرغان (VZV)', 'ویروس تبخال (HSV)', 'HPV', 'ویروس سرخک'], 'varicella-zoster virus.'),
          T('scabies از کنه‌ای ایجاد می‌شود که زیر پوست تونل می‌زند.', true, 'خارش شدید، به‌ویژه شب‌ها.', F('scabies', ['گال'])),
          P('هر بیماری را به عاملش وصل کن', [['verruca', 'HPV'], ['herpes simplex', 'HSV'], ['herpes zoster', 'VZV'], ['scabies', 'کنه گال']], 'ویروس‌ها و انگل‌ها.'),
          W('واژه‌ای بساز به معنی «شپش‌زدگی»', ['pedicul/o', '-osis'], ['-itis', 'py/o', 'myc/o'], 'pedicul/o + -osis = pediculosis.'),
          B('آبله‌مرغان را در اصطلاح پزشکی ___ می‌نامند.', ['varicella', 'rubella', 'verruca'], 'varicella = chickenpox.'),
          S('املای انگلیسی «زونا» (کلمه دوم) را بنویس', 'zoster', 'herpes zoster = shingles.', 'zos…'),
          N('ab:ds')
        ]
      },
      /* ================= سطح ۲: التهاب و خودایمنی ================= */
      {
        id: 'ds4', title: 'درماتیت و اگزما', icon: '🧴', items: [
          L('سه نوع درماتیت', `${tbl([['نوع', 'ویژگی'], [e('atopic dermatitis'), 'اگزمای خارش‌دار مزمن؛ همراه آسم و آلرژی؛ کودکان'], [e('contact dermatitis'), 'تماس با ماده محرک یا آلرژن (نیکل، پیچک سمی)'], [e('seborrheic dermatitis'), 'پوسته‌های چرب و زرد سر و صورت (شوره)']])}${fig(['atopic-dermatitis', 'contact-dermatitis'], ['درماتیت آتوپیک مچ دست', 'درماتیت تماسی از کفش'], 'دو نوع درماتیت')}`),
          L('اگزما', `${e('<b>eczema</b>')} التهاب مزمن و خارش‌دار پوست با قرمزی، وزیکول، دلمه و پوسته است؛ با خاراندن طولانی ← ${e('lichenification')}.${fig('eczema-arm', ['اگزمای ساعد'], 'قرمزی، دلمه و پوسته در اگزما')}${pearl('برای پیدا کردن عامل درماتیت تماسی، «تست پچ» انجام می‌دهند: آلرژن‌ها را ۴۸ ساعت روی پوست می‌چسبانند.')}${memo('atopic = «بی‌جا» (a- + topos): بدن به چیزهای بی‌خطر واکنش نشان می‌دهد.')}`),
          M('اگزمای مزمن کودک با سابقه آسم و آلرژی چه نام دارد؟', ['atopic dermatitis', 'contact dermatitis', 'seborrheic dermatitis', 'psoriasis'], 'AD = atopic dermatitis.', null, F('atopic-dermatitis', [])),
          M('قرمزی و تاول زیر بند ساعت فلزی بیشتر کدام است؟', ['contact dermatitis', 'atopic dermatitis', 'impetigo', 'tinea'], 'آلرژی به نیکل.'),
          T('شوره سر شکل خفیف seborrheic dermatitis است.', true, 'پوسته‌های چرب و زرد.'),
          P('هر نوع را به ویژگی‌اش وصل کن', [['atopic dermatitis', 'همراه آسم و آلرژی'], ['contact dermatitis', 'تماس با آلرژن'], ['seborrheic dermatitis', 'پوسته چرب سر'], ['eczema', 'التهاب خارش‌دار مزمن']], 'انواع درماتیت.'),
          B('اختصار AD یعنی ___.', ['atopic dermatitis', 'actinic dermatosis', 'acne disease'], 'درماتیت آتوپیک.'),
          O('مراحل تست پچ را بچین', ['چسباندن آلرژن‌ها روی پشت', 'صبر ۴۸ ساعت', 'برداشتن چسب‌ها', 'خواندن واکنش قرمزی'], 'patch test.'),
          S('املای انگلیسی «اگزما» را بنویس', 'eczema', 'eczema = التهاب خارش‌دار مزمن.', 'ecz…'),
          N('d2t:ds')
        ]
      },
      {
        id: 'ds5', title: 'پسوریازیس، آکنه و روزاسه', icon: '🔴', items: [
          L('پسوریازیس', `${e('<b>psoriasis</b>')}: بیماری مزمن با <b>پلاک‌های قرمز و پوسته‌های نقره‌ای</b>، بیشتر روی آرنج، زانو و سر. سلول‌های اپیدرم بسیار سریع تکثیر می‌شوند.${fig(['psoriasis-plaque', 'psoriasis-silvery'], ['پلاک پسوریازیس', 'پوسته‌های نقره‌ای'], 'پسوریازیس')}`),
          L('آکنه و روزاسه', `${e('<b>acne vulgaris</b>')}: آکنه معمولی نوجوانان؛ کومدون، پاپول و پوسچول در صورت، سینه و پشت (vulgaris = معمولی).<br>${e('<b>rosacea</b>')}: قرمزی مزمن گونه و بینی با رگ‌های ریز و جوش؛ بیشتر بزرگسالان.${fig('acne-forehead', ['آکنه پیشانی'], 'پاپول و پوسچول‌های آکنه')}${pearl('درمان شدیدترین آکنه‌ها با رتینوئید خوراکی (isotretinoin) است؛ در بارداری ممنوع است.')}`),
          M('پلاک‌های قرمز با پوسته نقره‌ای روی آرنج و زانو؟', ['psoriasis', 'eczema', 'tinea corporis', 'impetigo'], 'psor/o = خارش + -iasis.', null, F('psoriasis-knee', ['پسوریازیس زانو'])),
          M('vulgaris در acne vulgaris یعنی…', ['معمولی، رایج', 'چرکی', 'مزمن', 'شدید'], 'آکنه معمولی.', null, F('acne-face', ['آکنه صورت'])),
          T('rosacea بیشتر در نوجوانان و با کومدون‌های فراوان دیده می‌شود.', false, 'نادرست؛ روزاسه بیشتر در بزرگسالان و بدون کومدون است؛ آکنه نوجوانی کومدون دارد.'),
          P('هر بیماری را به ویژگی‌اش وصل کن', [['psoriasis', 'پوسته نقره‌ای'], ['acne vulgaris', 'کومدون نوجوانی'], ['rosacea', 'قرمزی گونه و بینی'], ['seborrhea', 'چربی زیاد']], 'سه بیماری شایع.'),
          W('واژه‌ای بساز به معنی «پسوریازیس»', ['psor/o', '-iasis'], ['-itis', 'derm/o', '-oma'], 'psor/o (خارش) + -iasis.'),
          B('داروی خوراکی آکنه شدید از خانواده ___ است.', ['retinoid', 'antifungal', 'scabicide'], 'isotretinoin یک رتینوئید است.'),
          S('املای انگلیسی «پسوریازیس» را بنویس', 'psoriasis', 'p اول تلفظ نمی‌شود: سوریازیس.', 'psor…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds6', title: 'خودایمنی و ارثی', icon: '🧬', items: [
          L('بدن علیه پوست', `${e('<b>systemic lupus erythematosus</b>')} (${e('SLE')}): بیماری خودایمنی مزمن پوست، مفاصل، کلیه و…؛ <b>بثورات پروانه‌ای</b> روی گونه‌ها و بینی.<br>${e('<b>discoid lupus erythematosus</b>')} (${e('DLE')}): لوپوس محدود به پوست با پلاک‌های گرد پوسته‌دار.<br>${e('<b>scleroderma</b>')}: سفت و ضخیم شدن پوست (scler/o = سخت).<br>${e('<b>pemphigus</b>')}: تاول‌های بزرگ (بول) روی پوست و مخاط.`),
          L('رنگ و پوسته ارثی', `${e('<b>vitiligo</b>')}: از بین رفتن ملانوسیت‌ها ← پچ‌های سفید.<br>${e('<b>albinism</b>')}: نبود ارثی ملانین.<br>${e('<b>ichthyosis</b>')}: پوست خشک با پوسته‌های ماهی‌وار.${fig(['discoid-lupus', 'ichthyosis'], ['لوپوس پوستی سینه', 'ایکتیوز'], 'خودایمنی و ارثی')}${pearl('بیمار مشکوک به لوپوس باید از آفتاب دوری کند و ضدآفتاب بزند؛ نور بثورات را بدتر می‌کند (photosensitivity).')}`),
          M('بثورات پروانه‌ای روی گونه و بینی به همراه درد مفاصل بیشتر به چه فکر می‌کنی؟', ['SLE', 'psoriasis', 'rosacea', 'impetigo'], 'لوپوس اریتماتوی سیستمیک.'),
          M('سفت و ضخیم شدن پوست در بیماری خودایمنی چه نام دارد؟', ['scleroderma', 'xeroderma', 'leukoderma', 'erythroderma'], 'scler/o + -derma.'),
          T('vitiligo از بین رفتن ملانوسیت‌هاست و پچ‌های سفید می‌سازد.', true, 'depigmentation.', F('vitiligo-legs', [])),
          P('هر بیماری را به ویژگی‌اش وصل کن', [['SLE', 'بثورات پروانه‌ای'], ['pemphigus', 'تاول‌های بزرگ'], ['vitiligo', 'پچ‌های سفید'], ['ichthyosis', 'پوسته ماهی‌وار']], 'خودایمنی و ارثی.'),
          W('واژه‌ای بساز به معنی «پوست خشک و پولکی ارثی»', ['ichthy/o', '-osis'], ['xer/o', '-derma', 'scler/o'], 'ichthy/o + -osis.'),
          B('لوپوس محدود به پوست، با اختصار ___ نوشته می‌شود.', ['DLE', 'SLE', 'AD'], 'discoid lupus erythematosus.'),
          S('املای انگلیسی «ویتیلیگو» را بنویس', 'vitiligo', 'vitiligo = پیسی.', 'viti…'),
          N('wb:ds')
        ]
      },
      /* ================= سطح ۳: سوختگی و زخم ================= */
      {
        id: 'ds7', title: 'درجه‌های سوختگی', icon: '🔥', items: [
          L('عمق آسیب', `${fig('burn-depth', [], 'درجه سوختگی = عمق آسیب')}${tbl([['درجه', 'نام دیگر', 'لایه', 'ظاهر'], ['یک', e('superficial'), 'اپیدرم', 'قرمز و دردناک'], ['دو', e('partial-thickness'), 'اپیدرم و بخشی از درم', 'تاول و درد شدید'], ['سه', e('full-thickness'), 'اپیدرم و تمام درم', 'سفید یا سوخته، گاهی بی‌درد']])}`),
          L('چرا سوختگی درجه سه درد کمتری دارد؟', `در سوختگی تمام‌ضخامت، پایانه‌های عصبی درم هم از بین می‌روند. لایه سیاه و سخت بافت مرده ${e('<b>eschar</b>')} نام دارد.${fig('burn-blisters', ['تاول در سوختگی درجه دو'], 'partial-thickness burn')}${memo('درجه ۱ = آفتاب‌سوختگی؛ درجه ۲ = تاول؛ درجه ۳ = «سوخته و بی‌حس».')}`),
          M('آفتاب‌سوختگی ساده بدون تاول چه درجه‌ای است؟', ['درجه یک (superficial)', 'درجه دو', 'درجه سه', 'درجه چهار'], 'فقط اپیدرم.', null, F('burn-depth', [])),
          M('سوختگی با تاول‌های بزرگ و درد شدید؟', ['second-degree (partial-thickness)', 'first-degree', 'third-degree', 'eschar'], 'تا بخشی از درم.'),
          T('سوختگی درجه سه همیشه دردناک‌ترین نوع است.', false, 'نادرست؛ چون عصب‌ها از بین رفته‌اند ممکن است بی‌درد باشد.'),
          O('درجه‌های سوختگی را از سطحی به عمیق بچین', ['superficial', 'partial-thickness', 'full-thickness'], 'یک ← دو ← سه.'),
          P('هر درجه را به ویژگی‌اش وصل کن', [['first-degree', 'قرمزی بدون تاول'], ['second-degree', 'تاول'], ['third-degree', 'سفید یا سوخته'], ['eschar', 'بافت مرده سیاه']], 'درجه‌های سوختگی.'),
          B('لایه سیاه و سخت بافت مرده پس از سوختگی ___ است.', ['eschar', 'crust', 'keloid'], 'eschar = بافت مرده سوختگی.'),
          S('املای انگلیسی «اسکار سوختگی» را بنویس', 'eschar', 'eschar را با scar (جای زخم) اشتباه نکن.', 'esc…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds8', title: 'قانون نُه‌ها', icon: '9️⃣', items: [
          L('چند درصد بدن سوخته؟', `${fig('rule-of-nines', [], 'قانون نه‌ها در بزرگسال')}${e('<b>rule of nines</b>')} درصد سطح بدن (${e('BSA')}) سوخته را در بزرگسال تخمین می‌زند:<br>سر و گردن ۹٪ • هر دست ۹٪ • هر پا ۱۸٪ • جلوی تنه ۱۸٪ • پشت تنه ۱۸٪ • ناحیه تناسلی ۱٪ = ۱۰۰٪`),
          L('از درصد تا درمان', `هرچه درصد بیشتر و عمق بیشتر، مایع‌درمانی و خطر عفونت بیشتر.<br>${e('<b>debridement</b>')}: برداشتن بافت مرده؛ ${e('<b>escharotomy</b>')}: برش اسکار سفت برای آزاد کردن گردش خون؛ سپس ${e('skin graft')}.${pearl('در کودکان سر نسبت به بدن بزرگ‌تر است؛ برای آن‌ها از جدول‌های جداگانه (Lund-Browder) استفاده می‌شود.')}`),
          M('در قانون نه‌ها، یک دست کامل بزرگسال چند درصد است؟', ['۹٪', '۱۸٪', '۴٫۵٪', '۱٪'], 'هر دست ۹٪.', null, F('rule-of-nines', [])),
          M('سوختگی کل پای راست (جلو و پشت) چند درصد است؟', ['۱۸٪', '۹٪', '۳۶٪', '۲۷٪'], 'هر پا ۱۸٪.'),
          T('در قانون نه‌ها، ناحیه تناسلی ۱٪ حساب می‌شود.', true, 'تا جمع به ۱۰۰ برسد.'),
          M('بیمار بزرگسال: سوختگی کل دست چپ و جلوی تنه. جمع؟', ['۲۷٪', '۱۸٪', '۳۶٪', '۹٪'], 'دست ۹ + جلوی تنه ۱۸ = ۲۷٪.'),
          P('هر ناحیه را به درصدش وصل کن', [['سر و گردن', '۹٪'], ['هر پا', '۱۸٪'], ['تنه (جلو و پشت)', '۳۶٪'], ['ناحیه تناسلی', '۱٪']], 'جمع = ۱۰۰٪.'),
          B('اختصار درصد سطح بدن ___ است.', ['BSA', 'BMI', 'BCC'], 'body surface area.'),
          S('املای انگلیسی «دبریدمان» را بنویس', 'debridement', 'برداشتن بافت مرده؛ تلفظ فرانسوی: دی‌بریدمان.', 'debri…'),
          N('ab:ds')
        ]
      },
      {
        id: 'ds9', title: 'زخم بستر و گانگرن', icon: '🛏️', items: [
          L('فشار، خون‌رسانی، مرگ بافت', `${e('<b>decubitus ulcer</b>')} (زخم بستر، pressure ulcer): از فشار طولانی روی برجستگی‌های استخوانی در بیمار بستری. فشار خون‌رسانی را قطع می‌کند و بافت می‌میرد (${e('necrosis')}).${fig('pressure-points', [], 'نقاط فشار')}`),
          L('مراحل و انواع زخم', `${fig('ulcer-stages', [], 'مراحل زخم فشاری')}${e('<b>stasis ulcer</b>')}: زخم ساق از گردش خون ضعیف وریدی.<br>${e('<b>gangrene</b>')}: مرگ بافت از قطع خون‌رسانی، اغلب همراه عفونت.${pearl('پیشگیری: تغییر وضعیت هر ۲ ساعت، تشک مواج، تغذیه خوب و پوست خشک و تمیز.')}`),
          M('شایع‌ترین محل زخم بستر در بیمار خوابیده به پشت؟', ['ناحیه خاجی (sacrum)', 'پیشانی', 'کف دست', 'زانو از جلو'], 'روی برجستگی استخوانی.', null, F('pressure-points', [])),
          M(`${e('<b>necrosis</b>')} یعنی…`, ['مرگ بافت', 'التهاب بافت', 'سفتی بافت', 'تورم بافت'], 'necr/o = مرگ.', null, F('gangrene-foot', ['گانگرن پا'])),
          T('زخم stage 4 تا عضله و استخوان رسیده است.', true, 'عمیق‌ترین مرحله.', F('pressure-ulcer-deep', ['زخم فشاری عمیق'])),
          O('رخدادهای زخم بستر را بچین', ['فشار طولانی روی استخوان', 'قطع خون‌رسانی', 'مرگ بافت (necrosis)', 'زخم باز'], 'فشار ← ایسکمی ← نکروز ← زخم.'),
          P('هر زخم را به علتش وصل کن', [['decubitus ulcer', 'فشار طولانی'], ['stasis ulcer', 'گردش خون ضعیف وریدی'], ['gangrene', 'قطع کامل خون‌رسانی'], ['burn', 'گرما یا مواد شیمیایی']], 'علت هر زخم.'),
          B('decubitus در لاتین یعنی ___.', ['خوابیده', 'سوخته', 'عفونی'], 'زخم کسی که دراز کشیده.'),
          S('املای انگلیسی «قانقاریا» را بنویس', 'gangrene', 'gangrene = مرگ بافت از قطع خون.', 'gang…'),
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
    id: 'tx', sym: 'Tx', name: 'تومور، تشخیص و درمان', short: 'تشخیص و درمان', sub: 'خال و تومورهای خوش‌خیم، سه سرطان پوست و ABCDE، بیوپسی و آزمون‌های پوستی، جراحی، پیوند و داروها',
    color: '#1F9E8F', dark: '#137568', light: '#DDF5F1',
    levels: ['تومورهای پوست', 'تشخیص و پرونده', 'درمان'],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: تومورهای پوست ================= */
      {
        id: 'tx1', title: 'رشدهای خوش‌خیم', icon: '🟫', items: [
          L('خوش‌خیم یعنی چه؟', `${vs(['benign', 'خوش‌خیم: پخش نمی‌شود'], ['malignant', 'بدخیم: تهاجم و متاستاز'])}${tbl([['واژه', 'معنی'], [e('nevus'), 'خال (جمع: nevi)'], [e('hemangioma'), 'تومور خوش‌خیم رگ‌ها؛ خال توت‌فرنگی نوزاد'], [e('lipoma'), 'توده نرم چربی'], [e('seborrheic keratosis'), 'رشد قهوه‌ای مومی «چسبیده»'], [e('skin tag'), 'زائده گوشتی کوچک'], [e('histiocytoma'), 'گره سفت درم (dermatofibroma)']])}`),
          L('نمونه‌ها', `${fig(['nevus-face', 'hemangioma'], ['خال‌های صورت', 'همانژیوم نوزاد'], 'رشدهای خوش‌خیم')}${e('<b>actinic keratosis</b>')} پوسته زبر روی پوست آفتاب‌خورده است و <b>پیش‌سرطانی</b> است؛ ممکن است به SCC تبدیل شود (actin/o = پرتو).${memo('hemangioma = hem (خون) + angi (رگ) + oma: توده رگ‌های خونی.')}`),
          M('خال توت‌فرنگی نوزاد که از رگ‌های خونی است؟', ['hemangioma', 'lipoma', 'nevus', 'keloid'], 'hem/o + angi/o + -oma.', null, F('hemangioma', ['همانژیوم'])),
          M('کدام ضایعه پیش‌سرطانی است؟', ['actinic keratosis', 'seborrheic keratosis', 'lipoma', 'skin tag'], 'روی پوست آفتاب‌خورده؛ ممکن است SCC شود.'),
          T('benign یعنی توموری که به بافت‌های دیگر پخش نمی‌شود.', true, 'خوش‌خیم.'),
          W('واژه‌ای بساز به معنی «تومور رگ خونی»', ['hem/o', 'angi/o', '-oma'], ['lip/o', '-itis', 'melan/o'], 'hem/o + angi/o + -oma = hemangioma.'),
          P('هر ضایعه را به توصیفش وصل کن', [['nevus', 'خال'], ['lipoma', 'توده چربی'], ['seborrheic keratosis', 'رشد مومی چسبیده'], ['skin tag', 'زائده گوشتی']], 'رشدهای خوش‌خیم.'),
          B('توده زرد چربی در پوست، ___ است.', ['xanthoma', 'melanoma', 'hematoma'], 'xanth/o = زرد.'),
          S('املای انگلیسی «خال» را بنویس', 'nevus', 'جمع: nevi.', 'nev…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: 'سه سرطان پوست', icon: '⚠️', items: [
          L('سه سلول، سه سرطان', `${fig('skin-cancers', [], 'BCC، SCC و ملانوما')}${tbl([['سرطان', 'سلول', 'ویژگی'], [e('basal cell carcinoma (BCC)'), 'لایه قاعده‌ای', 'شایع‌ترین؛ پاپول مرواریدی با لبه برجسته؛ کمتر پخش می‌شود'], [e('squamous cell carcinoma (SCC)'), 'سنگفرشی', 'ندول سفت، پوسته‌دار یا زخمی؛ ممکن است پخش شود'], [e('malignant melanoma (MM)'), 'ملانوسیت', 'خطرناک‌ترین؛ متاستاز زودرس']])}`),
          L('چهره بالینی', `${fig(['bcc-pearly', 'scc-face', 'melanoma'], ['BCC مرواریدی', 'SCC صورت', 'ملانوما'], 'سه سرطان پوست')}${e('<b>Kaposi sarcoma</b>')}: سرطان دیواره رگ‌ها با ضایعه‌های بنفش، اغلب در بیماران AIDS.<br>${e('<b>metastasis</b>')}: گسترش سرطان به جاهای دور.${pearl('عامل اصلی هر سه، پرتو فرابنفش است؛ تخت برنزه هم همین خطر را دارد.')}`),
          M('شایع‌ترین سرطان پوست کدام است؟', ['basal cell carcinoma', 'malignant melanoma', 'squamous cell carcinoma', 'Kaposi sarcoma'], 'BCC شایع‌ترین و کم‌خطرترین است.', null, F('bcc-nose', ['BCC بینی'])),
          M('خطرناک‌ترین سرطان پوست از کدام سلول است؟', ['melanocyte', 'keratinocyte', 'basal cell', 'lipocyte'], 'malignant melanoma.'),
          T('carcinoma سرطان بافت پوششی (اپیتلیال) است.', true, 'carcin/o + -oma؛ sarcoma سرطان بافت همبند است.', F('scc-cheek', ['SCC گونه'])),
          P('هر اختصار را به معنی‌اش وصل کن', [['BCC', 'کارسینوم سلول قاعده‌ای'], ['SCC', 'کارسینوم سلول سنگفرشی'], ['MM', 'ملانوم بدخیم'], ['AK', 'کراتوز آفتابی']], 'اختصارهای تومور.'),
          O('سرطان‌ها را از کم‌خطر به پرخطر بچین', ['BCC', 'SCC', 'malignant melanoma'], 'BCC کمتر پخش می‌شود؛ ملانوما زود متاستاز می‌دهد.'),
          B('گسترش سرطان به اندام‌های دور ___ نام دارد.', ['metastasis', 'necrosis', 'keratosis'], 'meta- (فراتر) + stasis.'),
          S('املای انگلیسی «ملانوما» را بنویس', 'melanoma', 'melan/o + -oma.', 'mela…'),
          N('d2t:tx')
        ]
      },
      {
        id: 'tx3', title: 'ABCDE و پیشگیری', icon: '🔍', items: [
          L('خال را با ABCDE بسنج', `${fig('abcde', [], 'معیار ABCDE ملانوما')}${e('<b>A</b>symmetry')}: عدم تقارن • ${e('<b>B</b>order')}: لبه نامنظم • ${e('<b>C</b>olor')}: چند رنگ • ${e('<b>D</b>iameter')}: بیش از ۶ میلی‌متر • ${e('<b>E</b>volving')}: تغییر در زمان`),
          L('ضدآفتاب', `${fig('melanoma-abc', ['A، B و C روی ملانوما'], 'عدم تقارن، لبه نامنظم، تنوع رنگ')}${e('<b>sunscreen</b>')} پرتو UV را می‌گیرد؛ قدرتش با ${e('<b>SPF</b>')} (ضریب محافظت) سنجیده می‌شود؛ معمولاً SPF 30 یا بیشتر.<br>${e('UVA')} پیری و ${e('UVB')} سوختگی بیشتری می‌دهد؛ هر دو سرطان‌زا هستند.${memo('ABCDE: «A Bad Color Doesn\'t Evolve quietly».')}${pearl('در پرونده Joanne (مورد BCC بینی)، پزشک توصیه کرد همیشه SPF 30 بزند و تخت برنزه را کنار بگذارد.')}`),
          M('در ABCDE، حرف D یعنی…', ['قطر بیش از ۶ میلی‌متر', 'رنگ تیره', 'خونریزی', 'خارش'], 'Diameter.'),
          M('SPF یعنی…', ['ضریب محافظت در برابر آفتاب', 'سرطان سلول سنگفرشی', 'پیوند پوست', 'اسکار برجسته'], 'sun protection factor.'),
          T('خالی که در چند ماه بزرگ‌تر و تیره‌تر شده (Evolving) باید معاینه شود.', true, 'E = تغییر؛ مهم‌ترین هشدار.', F('abcde', [])),
          P('هر حرف را به معنی‌اش وصل کن', [['A', 'عدم تقارن'], ['B', 'لبه نامنظم'], ['C', 'رنگ‌های متعدد'], ['E', 'تغییر در زمان']], 'ABCDE.'),
          O('مراحل بررسی خال مشکوک را بچین', ['دیدن تغییر در خال', 'معاینه با ABCDE', 'بیوپسی', 'گزارش پاتولوژی'], 'شک ← معاینه ← نمونه ← تشخیص.'),
          B('پرتو نامرئی آفتاب که عامل اصلی سرطان پوست است ___ است.', ['ultraviolet (UV)', 'infrared', 'X-ray'], 'UV = فرابنفش.'),
          S('املای انگلیسی «ضدآفتاب» را بنویس', 'sunscreen', 'sun + screen (پرده).', 'suns…'),
          N('ab:tx')
        ]
      },
      /* ================= سطح ۲: تشخیص و پرونده ================= */
      {
        id: 'tx4', title: 'بیوپسی و آزمایش', icon: '🔬', items: [
          L('نمونه زنده', `${fig('biopsy-types', [], 'انواع بیوپسی')}${wb('bi/o', '-opsy')} ← ${e('<b>biopsy</b>')} (Bx): برداشتن تکه‌ای از بافت زنده برای میکروسکوپ.<br>• ${e('shave')}: تراشیدن ضایعه برجسته • ${e('punch')}: استوانه کوچک با پانچ<br>• ${e('incisional')}: بخشی از ضایعه بزرگ • ${e('excisional')}: کل ضایعه`),
          L('آزمایش‌های دیگر', `${tbl([['آزمایش', 'کار'], [e('frozen section (FS)'), 'برش منجمد فوری حین جراحی'], [e('culture and sensitivity (C&S)'), 'کشت میکروب و یافتن آنتی‌بیوتیک مؤثر'], [e('fungal scraping (KOH)'), 'تراشه پوست برای دیدن قارچ'], [e('Wood lamp'), 'لامپ UV؛ قارچ و تغییر رنگ را نشان می‌دهد'], [e('exfoliative cytology'), 'تراشیدن سلول‌های سطحی برای میکروسکوپ']])}${pearl('در بیوپسی برداشتی، گزارش پاتولوژی باید «لبه‌های پاک» (clean margins) را تأیید کند؛ یعنی همه تومور برداشته شده.')}`),
          M('برداشتن کامل یک خال مشکوک برای بررسی چه نوع بیوپسی است؟', ['excisional', 'incisional', 'shave', 'punch'], 'ex- = بیرون: کل ضایعه.', null, F('biopsy-types', [])),
          M('برای یافتن بهترین آنتی‌بیوتیک زخم عفونی چه می‌فرستند؟', ['culture and sensitivity', 'frozen section', 'Wood lamp', 'patch test'], 'C&S.'),
          T('biopsy از bi/o (زندگی) و -opsy (دیدن) ساخته شده است.', true, 'نمونه زنده برای دیدن.'),
          P('هر آزمایش را به کارش وصل کن', [['frozen section', 'تشخیص فوری حین جراحی'], ['KOH', 'دیدن قارچ'], ['Wood lamp', 'نور UV برای قارچ و رنگ'], ['punch biopsy', 'نمونه استوانه‌ای']], 'آزمایش‌های پوست.'),
          W('واژه‌ای بساز به معنی «مشاهده بافت زنده»', ['bi/o', '-opsy'], ['-tomy', 'cyt/o', '-logy'], 'bi/o + -opsy = biopsy.'),
          B('اختصار biopsy در پرونده ___ است.', ['Bx', 'Dx', 'Tx'], 'Bx.'),
          S('املای انگلیسی «بیوپسی» را بنویس', 'biopsy', 'bi/o + -opsy.', 'bio…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx5', title: 'آزمون‌های پوستی', icon: '🧪', items: [
          L('سه آزمون، یک هدف', `${fig('skin-tests', [], 'آزمون‌های پوستی')}${tbl([['آزمون', 'روش', 'برای'], [e('patch test'), 'چسباندن آلرژن ۴۸ ساعت', 'درماتیت تماسی'], [e('scratch (prick) test'), 'آلرژن روی خراش کوچک', 'آلرژی'], [e('intradermal test'), 'تزریق داخل‌پوستی', 'آلرژی یا سل']])}`),
          L('تست مانتو', `${e('<b>Mantoux test</b>')}: مقدار کمی ${e('PPD')} (مشتق پروتئینی خالص) داخل‌پوستی تزریق می‌شود؛ پس از ۴۸ تا ۷۲ ساعت قطر ${e('<b>induration</b>')} (سفتی) را با خط‌کش می‌خوانند — نه قرمزی را!${fig('mantoux-test', ['خواندن تست مانتو'], 'اندازه‌گیری سفتی با خط‌کش')}${memo('PPD = «پی‌پی‌دی»؛ TB = سل؛ ID = داخل‌پوستی.')}`),
          M('در تست مانتو چه چیزی اندازه‌گیری می‌شود؟', ['قطر سفتی (induration)', 'قطر قرمزی', 'مدت خارش', 'تعداد تاول‌ها'], 'سفتی ملاک است.', null, F('mantoux-test', [])),
          M('برای یافتن علت درماتیت تماسی کدام آزمون؟', ['patch test', 'Mantoux test', 'frozen section', 'Wood lamp'], 'آلرژن‌ها روی پوست چسبانده می‌شوند.'),
          T('تست مانتو را بلافاصله پس از تزریق می‌خوانند.', false, 'نادرست؛ پس از ۴۸ تا ۷۲ ساعت.'),
          O('مراحل تست مانتو را بچین', ['تزریق داخل‌پوستی PPD', 'صبر ۴۸ تا ۷۲ ساعت', 'لمس محل تزریق', 'اندازه‌گیری قطر سفتی'], 'Mantoux.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['PPD', 'مشتق پروتئینی خالص'], ['TB', 'سل'], ['ID', 'داخل‌پوستی'], ['FS', 'برش منجمد']], 'اختصارهای تشخیص.'),
          B('آزمون آلرژی که آلرژن را روی خراش کوچک پوست می‌گذارند ___ است.', ['scratch test', 'patch test', 'punch biopsy'], 'prick test.'),
          S('املای انگلیسی «سفتی بافت» را بنویس', 'induration', 'in- + dur (سخت) + -ation.', 'indu…'),
          N('ab:tx')
        ]
      },
      {
        id: 'tx6', title: 'خواندن پرونده', icon: '📋', items: [
          L('اختصارهای پرونده', `${tbl([['اختصار', 'معنی'], [e('Hx'), 'شرح حال، سابقه'], [e('FH'), 'سابقه خانوادگی'], [e('PE'), 'معاینه فیزیکی'], [e('Dx'), 'تشخیص'], [e('Rx'), 'نسخه، درمان'], [e('y/o'), 'ساله'], [e('Derm'), 'پوست‌شناسی']])}`),
          L('یک یادداشت واقعی', `«خانم ۳۲ ${e('y/o')} با سابقه ${e('psoriasis')} از نوجوانی. ${e('pruritus')} سر و شکم دارد. ${e('FH')} پسوریازیس منفی. در ${e('PE')}: ${e('erythematous plaques')} پوشیده از پوسته زرد-سفید روی سر و تنه.<br>${e('Dx')}: ${e('psoriasis vulgaris')}.»${pearl('اول اختصارها را باز کن، بعد هر واژه را از پسوند بخوان؛ یادداشت مثل یک داستان کوتاه خوانده می‌شود.')}`),
          M('Dx در پرونده یعنی…', ['تشخیص', 'درمان', 'نسخه', 'سابقه'], 'diagnosis.'),
          M('«FH of melanoma» یعنی…', ['سابقه ملانوما در خانواده', 'معاینه ملانوما', 'برش منجمد ملانوما', 'ملانوم بدخیم'], 'family history.'),
          T('PE در یادداشت پوست یعنی physical examination.', true, 'معاینه فیزیکی.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['Hx', 'سابقه'], ['Dx', 'تشخیص'], ['Rx', 'نسخه'], ['PE', 'معاینه']], 'اختصارهای پرونده.'),
          M('در یادداشت: «multiple erythematous papules». یعنی…', ['چند برجستگی کوچک قرمز', 'چند لکه مسطح سفید', 'یک تاول بزرگ', 'چند پوسچول زرد'], 'erythematous = قرمز؛ papule = برجستگی کوچک.'),
          O('بخش‌های یک یادداشت را به ترتیب معمول بچین', ['شکایت اصلی', 'Hx و FH', 'PE', 'Dx', 'Rx'], 'از گفته بیمار تا درمان.'),
          B('«۴۰ ___» یعنی ۴۰ ساله.', ['y/o', 'Hx', 'FH'], 'years old.'),
          S('املای انگلیسی «خارش» را بنویس', 'pruritus', 'prurit/o + -us.', 'pru…'),
          N('f2t:tx')
        ]
      },
      /* ================= سطح ۳: درمان ================= */
      {
        id: 'tx7', title: 'جراحی‌های پوست', icon: '🔪', items: [
          L('برداشتن و نابود کردن', `${tbl([['روش', 'ابزار یا روش'], [e('excision'), 'بریدن و برداشتن ضایعه (ex- + cis/o)'], [e('cryosurgery'), 'انجماد با نیتروژن مایع (cry/o)'], [e('electrodesiccation'), 'خشکاندن با جریان برق'], [e('cauterization'), 'سوزاندن با گرما یا مواد شیمیایی'], [e('curettage'), 'تراشیدن با کورت قاشقی'], [e('incision and drainage (I&D)'), 'برش و تخلیه آبسه'], [e('debridement'), 'برداشتن بافت مرده'], [e('laser therapy'), 'نور متمرکز برای ضایعه، خال‌کوبی و رگ']])}`),
          L('جراحی موس', `${fig('mohs', [], 'جراحی موس')}${e('<b>Mohs surgery</b>')}: سرطان پوست (BCC و SCC) لایه به لایه برداشته و هر لایه همان لحظه زیر میکروسکوپ بررسی می‌شود تا لبه‌ها پاک شوند؛ بیشترین بافت سالم صورت حفظ می‌شود.${pearl('در گزارش مشاوره پوست، BCC عودکننده گونه با «deep excision… followed by dermatoplasty» درمان شد.')}`),
          M('درمان زگیل با نیتروژن مایع چه نام دارد؟', ['cryosurgery', 'electrodesiccation', 'curettage', 'excision'], 'cry/o = سرما.'),
          M('روش برداشت لایه به لایه سرطان با بررسی فوری میکروسکوپی؟', ['Mohs surgery', 'dermabrasion', 'liposuction', 'chemical peel'], 'بیشترین حفظ بافت سالم.', null, F('mohs', [])),
          T('I&D یعنی برش و تخلیه، مثلاً برای آبسه.', true, 'incision and drainage.'),
          P('هر روش را به ابزارش وصل کن', [['cryosurgery', 'سرما'], ['electrodesiccation', 'برق'], ['curettage', 'کورت قاشقی'], ['laser therapy', 'نور متمرکز']], 'روش‌های جراحی پوست.'),
          W('واژه‌ای بساز به معنی «بیرون بریدن ضایعه»', ['ex-', 'cis/o', '-ion'], ['in-', '-tomy', 'cry/o'], 'ex- + cis/o + -ion = excision.'),
          B('برداشتن بافت مرده زخم یا سوختگی ___ است.', ['debridement', 'dermabrasion', 'cauterization'], 'debridement.'),
          S('املای انگلیسی «سرماجراحی» را بنویس', 'cryosurgery', 'cry/o + surgery.', 'cryo…'),
          N('wb:tx')
        ]
      },
      {
        id: 'tx8', title: 'پیوند و جراحی ترمیمی', icon: '🧵', items: [
          L('پیوند پوست', `${fig('graft-types', [], 'انواع پیوند پوست')}بر اساس منبع: ${e('<b>autograft</b>')} (از خود بیمار)، ${e('<b>allograft</b>')} یا homograft (از انسان دیگر)، ${e('<b>xenograft</b>')} یا heterograft (از حیوان).<br>بر اساس ضخامت: ${e('<b>STSG</b>')} (اپیدرم + بخشی از درم) و ${e('<b>FTSG</b>')} (تمام درم).<br>${e('<b>dermatome</b>')}: ابزار برداشتن لایه نازک پوست.`),
          L('جراحی ترمیمی و زیبایی', `${tbl([['روش', 'معنی'], [e('dermatoplasty'), 'ترمیم جراحی پوست'], [e('dermabrasion'), 'سایش پوست برای اسکار و چروک'], [e('chemical peel'), 'لایه‌برداری شیمیایی (chemabrasion)'], [e('rhytidectomy'), 'لیفت صورت (rhytid/o = چروک)'], [e('blepharoplasty'), 'جراحی پلک'], [e('liposuction'), 'ساکشن چربی']])}${fig('autograft', ['اتوگرافت تازه روی پا'], 'پوست اهداکننده سوراخ‌سوراخ شده تا بیشتر کش بیاید')}${pearl('در پرونده Kathleen، زخم فشاری مرحله ۳ با دبریدمان و FTSG از ران خودش بسته شد؛ یعنی یک autograft.')}`),
          M('پیوند پوست از بدن خود بیمار؟', ['autograft', 'allograft', 'xenograft', 'heterograft'], 'auto- = خود.', null, F('autograft', [])),
          M('لیفت صورت در اصطلاح پزشکی؟', ['rhytidectomy', 'blepharoplasty', 'dermatoplasty', 'lipectomy'], 'rhytid/o (چروک) + -ectomy.'),
          T('xenograft پیوندی از حیوان، مثلاً پوست خوک، است.', true, 'xen/o = بیگانه.'),
          P('هر اختصار یا واژه را به معنی‌اش وصل کن', [['STSG', 'پیوند با ضخامت نسبی'], ['FTSG', 'پیوند تمام‌ضخامت'], ['allograft', 'پیوند از انسان دیگر'], ['dermatome', 'ابزار برش پوست']], 'پیوند پوست.'),
          W('واژه‌ای بساز به معنی «جراحی ترمیمی پلک»', ['blephar/o', '-plasty'], ['-ectomy', 'rhytid/o', 'derm/o'], 'blephar/o + -plasty = blepharoplasty.'),
          B('سایش پوست با برس چرخان برای اسکار آکنه ___ است.', ['dermabrasion', 'dermatome', 'debridement'], 'derm + abrasion.'),
          S('املای انگلیسی «اتوگرافت» را بنویس', 'autograft', 'auto- + -graft.', 'auto…'),
          N('sp:tx')
        ]
      },
      {
        id: 'tx9', title: 'داروهای پوست', icon: '💊', items: [
          L('anti- + هدف', `${tbl([['دارو', 'کار'], [e('antibiotic'), 'علیه باکتری'], [e('antifungal'), 'علیه قارچ'], [e('antiviral'), 'علیه ویروس (تبخال، زونا)'], [e('antihistamine'), 'علیه هیستامین؛ کهیر و خارش آلرژیک'], [e('antipruritic'), 'ضدخارش'], [e('antiseptic'), 'ضدعفونی‌کننده سطح پوست'], [e('corticosteroid'), 'ضدالتهاب قوی؛ پماد اگزما'], [e('keratolytic'), 'حل‌کننده کراتین؛ زگیل و پوسته'], [e('scabicide / pediculicide'), 'کشنده گال / شپش']])}`),
          L('نسخه را بخوان', `${fig('rx-clock', [], 'اختصارهای نسخه')}${e('<b>topical</b>')} = موضعی؛ ${e('oint')} = پماد. مثال: «hydrocortisone 2% oint ${e('hs')}» یعنی پماد هیدروکورتیزون ۲٪ هنگام خواب.${vs(['antipruritic', 'ضدخارش'], ['antipyretic', 'تب‌بر'])}${pearl('رتینوئیدها (مثل isotretinoin) در آکنه شدید کارسازند، ولی در بارداری خطر نقص جنینی دارند.')}`),
          M('داروی کرم کچلی پا از کدام گروه است؟', ['antifungal', 'antibiotic', 'antiviral', 'scabicide'], 'tinea قارچی است.'),
          M('«oint tid» یعنی…', ['پماد سه بار در روز', 'قرص دو بار در روز', 'پماد هنگام خواب', 'تزریق زیرجلدی'], 'oint = پماد؛ tid = سه بار در روز.'),
          T('keratolytic داروهایی‌اند که کراتین را نرم و جدا می‌کنند.', true, 'kerat/o + -lytic.'),
          P('هر دارو را به کاربردش وصل کن', [['antihistamine', 'کهیر آلرژیک'], ['antiviral', 'زونا و تبخال'], ['corticosteroid', 'التهاب اگزما'], ['scabicide', 'گال']], 'داروهای پوست.'),
          P('هر اختصار نسخه را به معنی‌اش وصل کن', [['bid', 'دو بار در روز'], ['qid', 'چهار بار در روز'], ['hs', 'هنگام خواب'], ['prn', 'در صورت نیاز']], 'نسخه‌خوانی.'),
          W('واژه‌ای بساز به معنی «داروی ضدخارش»', ['anti-', 'prurit/o', '-ic'], ['-itis', 'derm/o', 'pyret/o'], 'anti- + prurit/o + -ic.'),
          B('داروی کشنده شپش ___ است.', ['pediculicide', 'scabicide', 'antibiotic'], 'pedicul/o + -cide.'),
          S('املای انگلیسی «ضدقارچ» را بنویس', 'antifungal', 'anti- + fung/i + -al.', 'antif…'),
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
    { id: 'lx-0', w: 'lx', lv: 0, name: 'پوستو', title: 'لباس یک‌تکه بدن', shape: 'tile', color: '#F2A07C', acc: ['sparkle'], bio: 'بزرگ‌ترین اندام بدن است و سه طبقه دارد: پشت‌بام اپیدرم، طبقه وسط درم و زیرزمین چربی. هیچ‌وقت درش نمی‌آوری!' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'ریشه‌یاب', title: 'استاد derm/o و cutane/o', shape: 'book', color: '#D9643A', acc: ['glasses'], bio: 'لغت‌نامه‌ای زنده که هر واژه پوست را به ریشه، پیشوند و پسوند می‌شکند و رنگ‌ها را از erythr/o تا xanth/o می‌شناسد.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'پازلی', title: 'سلطان پیشوند و پسوند', shape: 'puzzle', color: '#B24E26', acc: ['crown'], bio: 'sub- و epi- را جا می‌اندازد، -itis و -ectomy را می‌چسباند و هیچ‌وقت hidr/o را با hydr/o قاطی نمی‌کند.' },
    { id: 'ly-0', w: 'ly', lv: 0, name: 'کراتین', title: 'زره اپیدرم', shape: 'shield', color: '#E8A06F', acc: ['sparkle'], bio: 'پروتئین سخت و ضدآب لایه شاخی است. هر چهار هفته پوست تازه‌ای می‌پوشد و لایه کهنه را می‌ریزد.' },
    { id: 'ly-1', w: 'ly', lv: 1, name: 'مویرگی', title: 'قلب تپنده درم', shape: 'heart', color: '#E0607E', acc: ['headband'], bio: 'در درم زندگی می‌کند؛ در گرما گشاد و در سرما تنگ می‌شود و به اپیدرم بی‌رگ غذا می‌رساند.' },
    { id: 'ly-2', w: 'ly', lv: 2, name: 'چربو', title: 'بالشتک زیرجلدی', shape: 'cloud', color: '#F6CF6A', acc: ['crown'], bio: 'نرم و گرم است؛ بدن را عایق می‌کند، ضربه را می‌گیرد و انرژی ذخیره دارد. adip/o، lip/o و steat/o سه نام اویند.' },
    { id: 'ac-0', w: 'ac', lv: 0, name: 'فولیکول', title: 'لانه مو', shape: 'hair', color: '#C08A5A', acc: ['sparkle'], bio: 'ته کیسه‌اش یک پاپیلای پررگ دارد که پیاز مو را تغذیه می‌کند. وقتی می‌ترسد، arrector pili موهایش را سیخ می‌کند!' },
    { id: 'ac-1', w: 'ac', lv: 1, name: 'ناخنک', title: 'سپر سر انگشت', shape: 'nail', color: '#F2C3A0', acc: ['glasses'], bio: 'روی بستر صورتی نشسته و هلال سفیدی (lunula) در پایه دارد. onych/o و ungu/o را از بر است.' },
    { id: 'ac-2', w: 'ac', lv: 2, name: 'قطره', title: 'غده عرق خنک‌کن', shape: 'drop', color: '#4FB3F0', acc: ['crown'], bio: 'از غدد اکرین بیرون می‌آید و با تبخیر بدن را خنک می‌کند. hidr/o و sudor/o نام‌های اویند؛ hydr/o پسرعموی آبی اوست!' },
    { id: 'le-0', w: 'le', lv: 0, name: 'ماکولی', title: 'لکه آرام', shape: 'blob', color: '#C98A5A', acc: ['sparkle'], bio: 'کاملاً مسطح است و فقط رنگش فرق دارد. اگر از ۱ سانتی‌متر بزرگ‌تر شود، اسمش patch می‌شود.' },
    { id: 'le-1', w: 'le', lv: 1, name: 'تاولو', title: 'وزیکول شفاف', shape: 'blister', color: '#9FD8F5', acc: ['headband'], bio: 'پر از مایع شفاف است. بزرگ‌تر از ۱ سانتی‌متر که شود bulla می‌شود و اگر چرکی شود pustule.' },
    { id: 'le-2', w: 'le', lv: 2, name: 'نشانه‌یاب', title: 'کارآگاه رنگ و خارش', shape: 'thermo', color: '#E5484D', acc: ['crown'], bio: 'erythema را از cyanosis و jaundice تشخیص می‌دهد و پتشی را با فشار انگشت از قرمزی ساده جدا می‌کند.' },
    { id: 'ds-0', w: 'ds', lv: 0, name: 'استافی', title: 'باکتری خوشه‌ای', shape: 'grape', color: '#8BC34A', acc: ['sparkle'], bio: 'مثل خوشه انگور است و عاشق کورک و زردزخم. با کشت و آنتی‌بیوگرام (C&S) شکارش می‌کنند.' },
    { id: 'ds-1', w: 'ds', lv: 1, name: 'پمادی', title: 'آرام‌کننده التهاب', shape: 'ointment', color: '#7DC6B8', acc: ['glasses'], bio: 'اگزما و پسوریازیس را آرام می‌کند؛ کورتیکواستروئید موضعی است و نسخه‌اش را با oint و bid می‌نویسند.' },
    { id: 'ds-2', w: 'ds', lv: 2, name: 'آتش‌نشان', title: 'نگهبان سوختگی', shape: 'flame', color: '#FF7A45', acc: ['crown'], bio: 'درجه‌های سوختگی را از عمقشان می‌شناسد و با قانون نُه‌ها در یک نگاه درصد سطح سوخته را حساب می‌کند.' },
    { id: 'tx-0', w: 'tx', lv: 0, name: 'آفتابگیر', title: 'ضدآفتاب SPF', shape: 'sun', color: '#FFC24B', acc: ['sparkle'], bio: 'خورشید مهربانی است که همیشه SPF 30 می‌زند و هر خال را با ABCDE بررسی می‌کند.' },
    { id: 'tx-1', w: 'tx', lv: 1, name: 'بیوپسی', title: 'کارآگاه زیر میکروسکوپ', shape: 'tube', color: '#1F9E8F', acc: ['glasses'], bio: 'از shave و punch تا excisional؛ هر نمونه را به آسیب‌شناس می‌رساند و منتظر «لبه‌های پاک» می‌ماند.' },
    { id: 'tx-2', w: 'tx', lv: 2, name: 'چسب‌زخم', title: 'استاد جراحی و پیوند', shape: 'bandage', color: '#F4C59A', acc: ['cape', 'crown'], bio: 'از جراحی موس تا autograft و STSG؛ هر زخم و سوختگی را می‌پوشاند و ترمیم می‌کند.' }
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
      id: 'r1', w: 'lx', title: 'پنج تشخیص آقای Cave', who: 'Lin Cave، مرد ۳۸ ساله',
      brief: 'پرونده آقای Cave را مرور می‌کنی. پزشک پنج تشخیص نوشته و بیمار می‌خواهد بداند هر کدام یعنی چه. باید هر واژه را با ریشه و پسوندش رمزگشایی کنی.',
      chart: [['۱', 'Hidrosis'], ['۲', 'Mycosis of left big toe'], ['۳', 'Xeroderma of right hand'], ['۴', 'Seborrhea'], ['۵', 'Trichopathy']],
      fig: { a: 'wordparts', l: [] },
      steps: [
        M('واژه', 'Hidrosis یعنی…', ['تعریق (زیاد)', 'آب زیاد در بدن', 'خشکی پوست', 'التهاب غده'], 'hidr/o = عرق، نه آب (hydr/o).'),
        M('واژه', 'Mycosis of left big toe یعنی…', ['عفونت قارچی شست پای چپ', 'التهاب ناخن شست', 'زخم شست پا', 'ناخن فرورفته'], 'myc/o = قارچ؛ اگر ناخن درگیر باشد onychomycosis.'),
        M('واژه', 'Xeroderma of right hand یعنی…', ['خشکی پوست دست راست', 'قرمزی دست راست', 'زردی دست راست', 'سفتی پوست دست'], 'xer/o = خشک.'),
        P('واژه', 'هر تشخیص را به معنی‌اش وصل کن', [['Seborrhea', 'ترشح زیاد چربی پوست'], ['Trichopathy', 'بیماری مو'], ['Hidrosis', 'تعریق'], ['Xeroderma', 'خشکی پوست']], 'ریشه + پسوند.'),
        T('افتراق', 'Trichopathy به بیماری ناخن اشاره دارد.', false, 'نادرست؛ trich/o = مو. ناخن = onych/o.'),
        S('املا', 'املای «خشکی پوست» را بنویس', 'xeroderma', 'xer/o + -derma.', 'xero…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: 'پوست سرد و خیس در تریاژ', who: 'مرد ۵۸ ساله در اورژانس',
      brief: 'مردی با درد قفسه سینه به اورژانس آمده است. پرستار تریاژ می‌نویسد: پوست سرد، رنگ‌پریده و خیس از عرق؛ لب‌ها و بستر ناخن‌ها کبود است. بیمار بی‌قرار است.',
      chart: [['پوست', 'سرد، رنگ‌پریده (pallor)'], ['تعریق', 'شدید (diaphoresis)'], ['لب و ناخن', 'کبود (cyanosis)'], ['فشار خون', 'پایین']],
      fig: { a: 'color-roots', l: [] },
      steps: [
        M('نشانه', 'تعریق شدید در پرونده با کدام واژه آمده است؟', ['diaphoresis', 'anhidrosis', 'seborrhea', 'pruritus'], 'dia- + -phoresis؛ مترادف sudoresis.'),
        M('نشانه', 'کبودی لب و بستر ناخن نشانه چیست؟', ['کمبود اکسیژن خون (cyanosis)', 'یرقان', 'التهاب پوست', 'کم‌آبی'], 'cyan/o = آبی.'),
        T('فیزیولوژی', 'پوست سرد و رنگ‌پریده یعنی رگ‌های پوست تنگ شده‌اند تا خون به اندام‌های حیاتی برسد.', true, 'vasoconstriction در شوک.'),
        P('واژه', 'هر یافته را به واژه‌اش وصل کن', [['رنگ‌پریدگی', 'pallor'], ['کبودی', 'cyanosis'], ['تعریق شدید', 'diaphoresis'], ['قرمزی', 'erythema']], 'رنگ و ترشح پوست.'),
        M('ریشه', 'کدام ریشه رنگ در این پرونده دیده می‌شود؟', ['cyan/o', 'xanth/o', 'erythr/o', 'melan/o'], 'cyanosis = cyan/o + -osis.'),
        S('املا', 'املای «کبودی» را بنویس', 'cyanosis', 'cyan/o + -osis.', 'cya…')
      ]
    },
    /* ================= لایه‌های پوست ================= */
    {
      id: 'r3', w: 'ly', title: 'تست سل کارمند تازه', who: 'پرستار ۲۶ ساله، پیش از استخدام',
      brief: 'برای استخدام، از پرستار تست سل (Mantoux) گرفته‌اند. ۰٫۱ میلی‌لیتر PPD داخل‌پوستی در ساعد تزریق شده و یک برآمدگی کوچک سفید ایجاد شده است. ۷۲ ساعت بعد برای خواندن برمی‌گردد.',
      chart: [['آزمون', 'Mantoux / PPD'], ['راه', 'ID (intradermal)'], ['زمان خواندن', '۴۸ تا ۷۲ ساعت'], ['یافته', 'induration 4 mm']],
      fig: { a: ['mantoux-test', 'injection-routes'], l: ['خواندن تست', 'راه‌های تزریق'] },
      steps: [
        M('راه', 'سوزن در تست مانتو تا کدام لایه می‌رود؟', ['درم (intradermal)', 'زیرجلدی', 'عضله', 'ورید'], 'ID با زاویه ۱۰ تا ۱۵ درجه.'),
        M('خواندن', 'در خواندن تست چه چیزی اندازه‌گیری می‌شود؟', ['قطر سفتی (induration)', 'قطر قرمزی', 'شدت خارش', 'تعداد تاول'], 'سفتی ملاک است، نه قرمزی.'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['PPD', 'مشتق پروتئینی خالص'], ['ID', 'داخل‌پوستی'], ['TB', 'سل'], ['SubQ', 'زیرجلدی']], 'اختصارهای این پرونده.'),
        O('روند', 'مراحل تست را بچین', ['تزریق داخل‌پوستی PPD', 'ایجاد برآمدگی کوچک', 'صبر ۴۸ تا ۷۲ ساعت', 'اندازه‌گیری سفتی'], 'Mantoux.'),
        T('تفسیر', 'سفتی ۴ میلی‌متری در یک کارمند سالم معمولاً منفی تلقی می‌شود.', true, 'در بیشتر کارکنان سالم، مرز مثبت ۱۰ میلی‌متر است.'),
        S('املا', 'املای «داخل‌پوستی» را بنویس', 'intradermal', 'intra- + derm/o + -al.', 'intra…')
      ]
    },
    {
      id: 'r4', w: 'ly', title: 'کودکی که پوستش برنمی‌گشت', who: 'پسر ۲ ساله با اسهال',
      brief: 'کودک دو روز است اسهال و استفراغ دارد. لب‌ها خشک‌اند. پرستار پوست شکمش را نیشگون می‌گیرد؛ پوست چند ثانیه چین‌خورده می‌ماند و دیر برمی‌گردد. دست و پایش سرد است.',
      chart: [['تورگور پوست', 'کاهش‌یافته'], ['مخاط', 'خشک'], ['اندام‌ها', 'سرد'], ['تشخیص', 'dehydration (کم‌آبی)']],
      fig: { a: 'dermis', l: [] },
      steps: [
        M('نشانه', 'دیر برگشتن پوست پس از نیشگون یعنی کاهش…', ['skin turgor', 'melanin', 'keratin', 'sebum'], 'کشسانی پوست؛ نشانه کم‌آبی.'),
        M('ساختار', 'کدام رشته‌های درم پوست را به حالت اول برمی‌گردانند؟', ['elastin', 'keratin', 'melanin', 'sebum'], 'elastin = رشته کشسان.'),
        T('فیزیولوژی', 'سرد بودن دست و پا یعنی رگ‌های پوست برای حفظ خون اندام‌های حیاتی تنگ شده‌اند.', true, 'vasoconstriction.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['skin turgor', 'کشسانی پوست'], ['collagen', 'رشته محکم درم'], ['elastin', 'رشته کشسان'], ['dermis', 'لایه زنده و پررگ']], 'ساختار درم.'),
        M('لایه', 'تورگور به خاصیت کدام لایه وابسته است؟', ['dermis', 'stratum corneum', 'nail bed', 'hair shaft'], 'کلاژن و الاستین در درم‌اند.'),
        S('املا', 'املای «الاستین» را بنویس', 'elastin', 'elast/o + -in.', 'elas…')
      ]
    },
    /* ================= ضمائم پوست ================= */
    {
      id: 'r5', w: 'ac', title: 'انگشت ملتهب آشپز', who: 'آشپز ۳۴ ساله',
      brief: 'آشپزی که دست‌هایش مدام خیس است، از ۴ روز پیش دور ناخن انگشت اشاره‌اش قرمز، متورم و دردناک شده و کمی چرک دارد. ناخن‌های پایش هم ضخیم، زرد و شکننده‌اند.',
      chart: [['دست', 'قرمزی و چرک دور ناخن'], ['پا', 'ناخن ضخیم و زرد'], ['KOH ناخن پا', 'قارچ مثبت'], ['C&S چرک', 'Staphylococcus aureus']],
      fig: { a: ['paronychia', 'nail-anatomy'], l: ['پارونیکیا', 'آناتومی ناخن'] },
      steps: [
        M('تشخیص', 'عفونت چین پوستی دور ناخن دست چیست؟', ['paronychia', 'onychia', 'onycholysis', 'onychocryptosis'], 'para- = کنار.'),
        M('تشخیص', 'ناخن ضخیم و زرد پا با KOH مثبت؟', ['onychomycosis', 'Beau lines', 'onychomalacia', 'paronychia'], 'onych/o + myc/o + -osis = tinea unguium.'),
        M('درمان', 'برای تخلیه چرک دور ناخن چه می‌کنند؟', ['incision and drainage (I&D)', 'cryosurgery', 'Mohs surgery', 'phototherapy'], 'برش و تخلیه.'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['KOH', 'آزمایش قارچ'], ['C&S', 'کشت و آنتی‌بیوگرام'], ['I&D', 'برش و تخلیه'], ['staph', 'باکتری خوشه‌ای']], 'اختصارهای پرونده.'),
        T('درمان', 'برای قارچ ناخن پا داروی antifungal لازم است.', true, 'قارچ با ضدقارچ درمان می‌شود.'),
        S('املا', 'املای «پارونیکیا» را بنویس', 'paronychia', 'par- + onych/o + -ia.', 'paro…')
      ]
    },
    {
      id: 'r6', w: 'ac', title: 'جوش‌های امتحان', who: 'دختر ۱۶ ساله',
      brief: 'نوجوانی با جوش‌های صورت، پیشانی و پشت آمده است. سرسیاه و سرسفید فراوان و چند جوش چرکی دارد. پوستش چرب است و می‌گوید پیش از امتحان بدتر می‌شود.',
      chart: [['ضایعه', 'comedones، papules، pustules'], ['پوست', 'چرب (seborrhea)'], ['محل', 'صورت، پیشانی، پشت'], ['Dx', 'acne vulgaris']],
      fig: { a: ['acne-steps', 'acne-forehead'], l: ['مراحل آکنه', 'آکنه پیشانی'] },
      steps: [
        M('ساختار', 'سبوم در کدام غده ساخته می‌شود؟', ['sebaceous gland', 'eccrine gland', 'apocrine gland', 'ceruminous gland'], 'seb/o = سبوم.'),
        M('ضایعه', 'سرسیاه یعنی…', ['comedo باز', 'comedo بسته', 'pustule', 'nodule'], 'سیاهی از اکسید شدن ملانین است.'),
        O('روند', 'مراحل تشکیل جوش را بچین', ['ترشح زیاد سبوم', 'بسته شدن فولیکول (comedo)', 'رشد باکتری', 'التهاب و pustule'], 'از چربی تا چرک.'),
        T('افتراق', 'vulgaris در acne vulgaris یعنی «معمولی و رایج».', true, 'آکنه معمولی نوجوانی.'),
        M('درمان', 'برای آکنه شدید و مقاوم کدام گروه دارویی به کار می‌رود؟', ['retinoid خوراکی (isotretinoin)', 'scabicide', 'antiviral', 'antihistamine'], 'در بارداری ممنوع است.'),
        S('املا', 'املای «ترشح زیاد چربی» را بنویس', 'seborrhea', 'seb/o + -rrhea.', 'sebo…')
      ]
    },
    /* ================= ضایعه‌ها ================= */
    {
      id: 'r7', w: 'le', title: 'پنج ضایعه خانم Arlia', who: 'Rose Arlia، خانم ۵۰ ساله',
      brief: 'پزشک خانم Arlia را معاینه کرده و پنج یافته نوشته است. تو باید هرکدام را به زبان ساده برای بیمار توضیح دهی.',
      chart: [['۱', 'Vascular lesion, lower right leg'], ['۲', 'Macule, right hand'], ['۳', 'Small papule, right wrist'], ['۴', 'Bulla, left hand'], ['۵', 'Pilonidal cyst']],
      fig: { a: ['lesions-flat', 'lesions-fluid'], l: ['ضایعه‌های مسطح', 'ضایعه‌های پر از مایع'] },
      steps: [
        M('ضایعه', 'Macule روی دست راست یعنی…', ['لکه مسطح تغییررنگ‌یافته کوچک', 'تاول کوچک', 'برجستگی جامد', 'زخم باز'], 'مسطح و زیر ۱ cm.'),
        M('ضایعه', 'Bulla روی دست چپ یعنی…', ['تاول بزرگ‌تر از ۱ سانتی‌متر', 'لکه بنفش', 'جوش چرکی', 'پوسته'], 'تاول بزرگ.'),
        M('ضایعه', 'Vascular lesion یعنی ضایعه‌ای مربوط به…', ['رگ‌های خونی', 'غدد عرق', 'مو', 'ناخن'], 'vascul/o = رگ.'),
        P('ضایعه', 'هر یافته را به توضیحش وصل کن', [['macule', 'لکه مسطح'], ['papule', 'برجستگی کوچک جامد'], ['bulla', 'تاول بزرگ'], ['pilonidal cyst', 'کیست مویی دنبالچه']], 'پنج یافته.'),
        T('ریشه', 'pilonidal یعنی «لانه مو».', true, 'pil/o (مو) + nid/o (لانه) + -al.'),
        S('املا', 'املای «پاپول» را بنویس', 'papule', 'برجستگی جامد کوچک.', 'pap…')
      ]
    },
    {
      id: 'r8', w: 'le', title: 'نقطه‌هایی که محو نمی‌شوند', who: 'دختر ۷ ساله',
      brief: 'مادر کودکی می‌گوید از دیروز روی ساق‌های دخترش نقطه‌های ریز قرمز-بنفش پیدا شده و چند کبودی بزرگ بی‌دلیل هم دارد. پزشک لیوان شیشه‌ای را روی نقطه‌ها فشار می‌دهد؛ رنگشان محو نمی‌شود.',
      chart: [['ضایعه', 'نقاط ریز قرمز-بنفش'], ['کبودی', 'چند ecchymosis بی‌علت'], ['تست فشار', 'محو نمی‌شود'], ['اقدام', 'آزمایش فوری شمارش پلاکت']],
      fig: { a: ['bleed-spots', 'petechiae'], l: ['خونریزی زیر پوست', 'پتشی'] },
      steps: [
        M('ضایعه', 'نقاط ریز قرمز-بنفش که با فشار محو نمی‌شوند؟', ['petechiae', 'erythema', 'macule آفتابی', 'urticaria'], 'خونریزی ریز زیر پوست.'),
        M('ضایعه', 'کبودی بزرگ آبی و بنفش چه نام دارد؟', ['ecchymosis', 'hematoma', 'cyanosis', 'purpura'], 'bruise.'),
        O('اندازه', 'ضایعه‌ها را از کوچک به بزرگ بچین', ['petechiae', 'purpura', 'ecchymosis'], 'نقطه ← لکه ← کبودی.'),
        T('افتراق', 'قرمزی التهابی (erythema) با فشار کم‌رنگ می‌شود ولی پتشی نه.', true, 'در پتشی خون بیرون از رگ است.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['petechiae', 'نقاط ریز خونریزی'], ['purpura', 'لکه‌های بنفش'], ['ecchymosis', 'کبودی'], ['hematoma', 'لخته برجسته']], 'خونریزی زیر پوست.'),
        S('املا', 'املای «پتشی» (جمع) را بنویس', 'petechiae', 'مفرد: petechia.', 'pete…')
      ]
    },
    /* ================= بیماری‌ها ================= */
    {
      id: 'r9', w: 'ds', title: 'زخم بستر کاتلین', who: 'Kathleen، خانم سالمند پس از سکته مغزی',
      brief: 'کاتلین پس از سکته مغزی بستری در خانه است. پرستار مراقبت در منزل می‌بیند پوستش خشک است و تورگور کمی دارد. روی ناحیه خاجی یک زخم باز ۲ سانتی‌متری به عمق ۱ سانتی‌متر با حاشیه قرمز دیده می‌شود. آرنج‌ها و پاشنه‌ها هم قرمزند. ۶ ماه بعد زخم بدتر شد و جراح پلاستیک دبریدمان و پیوند پوست تمام‌ضخامت (FTSG) از ران انجام داد.',
      chart: [['محل', 'sacrum'], ['مرحله اول', 'stage II pressure ulcer'], ['پس از ۶ ماه', 'stage III'], ['درمان', 'debridement + FTSG from thigh']],
      fig: { a: ['pressure-points', 'ulcer-stages'], l: ['نقاط فشار', 'مراحل زخم'] },
      steps: [
        M('تشخیص', 'نام دیگر زخم فشاری چیست؟', ['decubitus ulcer', 'stasis ulcer', 'erosion', 'fissure'], 'decubitus = خوابیده.'),
        M('علت', 'علت اصلی این زخم چیست؟', ['فشار طولانی روی برجستگی استخوانی', 'عفونت قارچی', 'سوختگی', 'آلرژی'], 'فشار خون‌رسانی را قطع می‌کند.'),
        O('روند', 'رخدادها را بچین', ['بستری طولانی', 'فشار روی sacrum', 'قطع خون‌رسانی و necrosis', 'زخم باز'], 'از فشار تا زخم.'),
        M('درمان', 'FTSG از ران خود بیمار چه نوع پیوندی است؟', ['autograft تمام‌ضخامت', 'allograft', 'xenograft', 'split-thickness'], 'auto- = خود؛ FTSG = full-thickness.'),
        P('پیشگیری', 'هر اقدام را به هدفش وصل کن', [['تغییر وضعیت هر ۲ ساعت', 'کاهش فشار'], ['تشک مواج', 'پخش فشار'], ['تغذیه کافی', 'ترمیم بافت'], ['debridement', 'برداشتن بافت مرده']], 'مراقبت زخم.'),
        S('املا', 'املای «دبریدمان» را بنویس', 'debridement', 'برداشتن بافت مرده.', 'debr…')
      ]
    },
    {
      id: 'r10', w: 'ds', title: 'سلولیت ساق پا', who: 'خانم ۶۴ ساله',
      brief: 'شش هفته پیش زیر زانوی راست بیمار خارش شدید و قرمزی شروع شد؛ یک هفته بعد برجستگی‌های چرکی پیدا شدند، ترکیدند و زخم باز ماند. اکنون زخم ۳ × ۵ سانتی‌متری تا لایه عمقی پوست رفته و لبه‌هایش نشانه مرگ بافت دارد. کشت ترشح استافیلوکوک نشان داد.',
      chart: [['شکایت', 'open sore, right leg'], ['سابقه', 'pruritus، erythema، pustules'], ['زخم', 'تا dermis، لبه necrotic'], ['C&S', 'Staphylococcus'], ['Dx', 'cellulitis'], ['Tx', 'debridement + antibiotic cream']],
      fig: { a: 'stasis-ulcer', l: ['زخم ساق'] },
      steps: [
        P('بازنویسی', 'هر عبارت عامیانه را به واژه پزشکی‌اش وصل کن', [['زخم باز', 'ulcer'], ['خارش شدید', 'pruritus'], ['قرمزی پوست', 'erythema'], ['برجستگی‌های چرکی', 'pustules']], 'Chart note transcription.'),
        M('واژه', '«نشانه مرگ بافت» در لبه زخم یعنی…', ['necrosis', 'cyanosis', 'keratosis', 'sclerosis'], 'necr/o = مرگ.'),
        M('آزمایش', 'آزمایشی که میکروب را رشد داد و بهترین آنتی‌بیوتیک را پیدا کرد؟', ['culture and sensitivity (C&S)', 'biopsy', 'frozen section', 'Wood lamp'], 'C&S.'),
        M('تشخیص', '«التهاب بافت همبند پوست» چه نام دارد؟', ['cellulitis', 'dermatitis', 'folliculitis', 'impetigo'], 'cellul/o + -itis.'),
        T('درمان', 'debridement یعنی برداشتن بافت مرده و آسیب‌دیده زخم.', true, 'تا زخم بتواند ترمیم شود.'),
        S('املا', 'املای «متخصص پوست» را بنویس', 'dermatologist', 'dermat/o + -logist.', 'derma…')
      ]
    },
    {
      id: 'r11', w: 'ds', title: 'زردزخمی که آلرژی داد', who: 'خانم ۲۹ ساله',
      brief: 'بیمار هفته پیش دچار خارش پیشانی شد و پزشک اریترومایسین (آنتی‌بیوتیک) داد. دو روز بعد بثورات کل صورت را گرفت و با تشخیص زردزخم بستری شد. متخصص پوست می‌بیند ضایعه‌ها قرمزتر شده، روی پیشانی، بینی و گونه‌ها پوسچول دارد و تورم صورت آن‌قدر است که چشم‌ها به‌سختی باز می‌شوند. خارش پاها هم پیدا شد که واکنش به دارو تلقی شد و آنتی‌بیوتیک عوض شد.',
      chart: [['Dx', 'impetigo؛ allergic response to erythromycin'], ['یافته', 'erythematous rash، pustules، facial edema'], ['Rx', 'antibiotic عوض شد + antipruritic']],
      fig: { a: ['impetigo-nose', 'impetigo-lips'], l: ['زردزخم', 'دلمه عسلی'] },
      steps: [
        M('تشخیص', 'impetigo چه نوع عفونتی است؟', ['باکتریایی و واگیردار', 'قارچی', 'ویروسی', 'انگلی'], 'استاف یا استرپ.'),
        P('واژه', 'هر واژه پرونده را به معنی‌اش وصل کن', [['erythematous', 'قرمز'], ['pustules', 'جوش‌های چرکی'], ['edema', 'تورم'], ['pruritus', 'خارش']], 'Exercise 4-9.'),
        M('دارو', 'antipruritic برای چیست؟', ['رفع خارش', 'پایین آوردن تب', 'کشتن قارچ', 'بی‌حسی'], 'با antipyretic (تب‌بر) اشتباه نکن.'),
        T('افتراق', 'خارش پاها پس از آنتی‌بیوتیک یک واکنش آلرژیک دارویی تلقی شد.', true, 'برای همین دارو عوض شد.'),
        M('واژه', 'dermatitis یعنی…', ['التهاب پوست', 'بیماری مو', 'تومور پوست', 'عفونت ناخن'], 'dermat/o + -itis.'),
        S('املا', 'املای «زردزخم» را بنویس', 'impetigo', 'عفونت باکتریایی سطحی.', 'impe…')
      ]
    },
    {
      id: 'r12', w: 'ds', title: 'بثورات پروانه‌ای', who: 'خانم ۴۰ ساله',
      brief: 'متخصص داخلی بیمار را برای بررسی SLE به متخصص پوست فرستاده است. بیمار بثورات قرمز روی گونه‌ها و بینی دارد، در آفتاب بثورات برجسته می‌شوند، چند ناحیه ریزش مو دارد و مفاصلش درد و خشکی دارند. متخصص پوست برای رد علل دیگر سیتولوژی تراشه‌ای و تراشه قارچ می‌گیرد و کرم کورتیکواستروئید و ضدآفتاب تجویز می‌کند.',
      chart: [['شکایت', 'erythema rash cheeks & nose'], ['یافته', 'photosensitivity، patches of alopecia'], ['آزمایش', 'exfoliative cytology، fungal scrapings، biopsy'], ['Rx', 'corticosteroid cream + sunscreen']],
      fig: { a: 'discoid-lupus', l: ['لوپوس پوستی'] },
      steps: [
        M('تشخیص', 'SLE مخفف چیست؟', ['systemic lupus erythematosus', 'skin lesion examination', 'squamous lesion of epidermis', 'superficial lupus edema'], 'بیماری خودایمنی چنداندامی.'),
        P('نشانه', 'هر نشانه را به معنی‌اش وصل کن', [['erythema', 'قرمزی پوست'], ['photosensitivity', 'حساسیت به نور'], ['alopecia', 'ریزش مو'], ['arthralgia', 'درد مفصل']], 'یافته‌های پرونده.'),
        M('آزمایش', 'fungal scrapings برای چه گرفته شد؟', ['رد عفونت قارچی به عنوان علت بثورات', 'تشخیص سل', 'اندازه‌گیری قند', 'تأیید سرطان'], 'برای رد سایر علل.'),
        M('درمان', 'کرم کورتیکواستروئید چه اثری دارد؟', ['کاهش التهاب', 'کشتن باکتری', 'ضدقارچ', 'بی‌حسی موضعی'], 'ضدالتهاب قوی.'),
        T('پیشگیری', 'در لوپوس، ضدآفتاب لازم است چون نور بثورات را بدتر می‌کند.', true, 'photosensitivity.'),
        S('املا', 'املای «ریزش مو» را بنویس', 'alopecia', 'alopecia areata = تکه‌ای.', 'alop…')
      ]
    },
    {
      id: 'r13', w: 'ds', title: 'سوختگی در آشپزخانه', who: 'مرد ۳۵ ساله',
      brief: 'روغن داغ روی بیمار ریخته است. کل دست راست تاول‌های بزرگ و درد شدید دارد. جلوی تنه هم قرمز و تاول‌دار است. ناحیه کوچکی روی ساعد سفید، خشک و بی‌درد است.',
      chart: [['دست راست', 'blisters، severe pain'], ['جلوی تنه', 'blisters'], ['ساعد', 'white, leathery, painless'], ['اقدام', 'محاسبه BSA با rule of nines']],
      fig: { a: ['rule-of-nines', 'burn-depth'], l: ['قانون نه‌ها', 'عمق سوختگی'] },
      steps: [
        M('درجه', 'نواحی تاول‌دار و بسیار دردناک چه درجه‌ای‌اند؟', ['second-degree (partial-thickness)', 'first-degree', 'third-degree', 'fourth-degree'], 'تا بخشی از درم.'),
        M('درجه', 'ناحیه سفید، خشک و بی‌درد ساعد؟', ['third-degree (full-thickness)', 'first-degree', 'superficial', 'erythema'], 'عصب‌ها از بین رفته‌اند.'),
        M('محاسبه', 'دست راست کامل + جلوی تنه چند درصد BSA است؟', ['۲۷٪', '۱۸٪', '۳۶٪', '۹٪'], '۹ + ۱۸ = ۲۷.'),
        O('درمان', 'مراحل درمان سوختگی عمیق را بچین', ['خنک کردن و مایع‌درمانی', 'debridement بافت مرده', 'escharotomy در صورت نیاز', 'skin graft'], 'از اورژانس تا پیوند.'),
        T('واژه', 'eschar همان جای زخم (scar) پس از ترمیم است.', false, 'نادرست؛ eschar بافت مرده سیاه سوختگی است.'),
        S('املا', 'املای «اتوگرافت» را بنویس', 'autograft', 'auto- + -graft.', 'auto…')
      ]
    },
    /* ================= تومور، تشخیص و درمان ================= */
    {
      id: 'r14', w: 'tx', title: 'برآمدگی کنار بینی جوآن', who: 'Joanne، مربی ورزش ۳۲ ساله',
      brief: 'جوآن هنگام شستن صورت «یک برآمدگی ریز و سفت» در پایه سوراخ چپ بینی دیده که ۲ ماه است مانده. سال‌ها نجات‌غریق بوده و مرتب به سالن برنزه می‌رود. نگران ملانوماست. متخصص پوست یک ندول کوچک سفید-مرواریدی می‌بیند. جراح پلاستیک ضایعه را برمی‌دارد و پاتولوژی BCC با لبه‌های پاک گزارش می‌کند. توصیه: همیشه SPF 30 و دوری از سالن برنزه.',
      chart: [['ضایعه', 'pearly-white nodule, left ala'], ['ریسک', 'sun exposure، tanning bed (UV)'], ['Tx', 'excision'], ['Path', 'BCC, clean margins'], ['توصیه', 'SPF 30']],
      fig: { a: ['bcc-pearly', 'skin-cancers'], l: ['BCC مرواریدی', 'سه سرطان پوست'] },
      steps: [
        M('تشخیص', 'BCC یعنی…', ['basal cell carcinoma', 'benign cyst of cheek', 'biopsy of cutaneous cells', 'bulla of cheek'], 'سرطان سلول قاعده‌ای.'),
        M('علت', 'علت احتمالی این سرطان چیست؟', ['پرتو فرابنفش (آفتاب و تخت برنزه)', 'عفونت قارچی', 'آلرژی', 'کمبود ویتامین D'], 'actinic effect.'),
        M('ضایعه', 'ضایعه جامد برجسته بزرگ‌تر از پاپول چه نام دارد؟', ['nodule', 'macule', 'vesicle', 'wheal'], 'ندول.'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['BCC', 'سرطان سلول قاعده‌ای'], ['SPF', 'ضریب محافظت از آفتاب'], ['FTSG', 'پیوند تمام‌ضخامت'], ['MM', 'ملانوم بدخیم']], 'Case Study 4-1.'),
        T('پاتولوژی', '«clean margins» یعنی کل تومور با حاشیه‌ای از بافت سالم برداشته شده است.', true, 'لبه‌های پاک.'),
        S('املا', 'املای «سایش پوست» (درمان قبلی اسکار آکنه) را بنویس', 'dermabrasion', 'derm + abrasion.', 'derma…')
      ]
    },
    {
      id: 'r15', w: 'tx', title: 'برگشت سرطان روی گونه', who: 'مرد ۷۴ ساله',
      brief: 'پنج سال پیش از دو ضایعه صورت بیمار بیوپسی گرفتند و BCC بود که برداشته شد. حالا ضایعه گونه چپ برگشته، خارش دارد و بزرگ‌تر می‌شود. در معاینه، ضایعه ۱۰ × ۱۴ میلی‌متری با قرمزی شدید و لبه‌های نامشخص دیده می‌شود؛ اطرافش بی‌رنگ شده و وزیکول دارد.',
      chart: [['علت مشاوره', 'recurrence of BCC, left cheek'], ['Hx', 'biopsies: BCC × 2, excised'], ['PE', 'marked erythema، depigmentation، vesicles'], ['توصیه', 'deep excision + dermatoplasty']],
      fig: { a: ['mohs', 'bcc-ruler'], l: ['جراحی موس', 'BCC با خط‌کش'] },
      steps: [
        P('واژه', 'هر واژه گزارش را به معنی‌اش وصل کن', [['pruritus', 'خارش'], ['erythema', 'قرمزی'], ['depigmentation', 'از دست رفتن رنگ'], ['vesicles', 'تاول‌های کوچک']], 'Dermatology Consultation Report.'),
        M('روش', 'برای حفظ بیشترین بافت سالم صورت، کدام جراحی مناسب است؟', ['Mohs surgery', 'liposuction', 'dermabrasion', 'cryotherapy'], 'برداشت لایه به لایه.'),
        M('واژه', 'dermatoplasty یعنی…', ['ترمیم جراحی پوست', 'برداشتن پوست', 'برش پوست', 'نمونه‌برداری پوست'], 'dermat/o + -plasty.'),
        O('روند', 'مراحل درمان را بچین', ['بیوپسی تأیید عود', 'deep excision از اپیدرم و درم', 'بررسی لبه‌ها', 'dermatoplasty'], 'تشخیص ← برداشت ← بازسازی.'),
        T('اختصار', 'Hx در گزارش یعنی history.', true, 'شرح حال و سابقه.'),
        S('املا', 'املای «بیوپسی» را بنویس', 'biopsy', 'bi/o + -opsy.', 'bio…')
      ]
    },
    {
      id: 'r16', w: 'tx', title: 'یادداشت پسوریازیس', who: 'خانم ۳۲ ساله',
      brief: 'بیمار از نوجوانی پسوریازیس متناوب دارد که در سال اخیر پس از آفتاب بدتر شده است. خارش سر و شکم دارد. سابقه خانوادگی پسوریازیس ندارد. در معاینه، پلاک‌های قرمز ضخیم با پوسته زرد-سفید روی سر، گوش‌ها و تنه دیده می‌شود و روی ساق‌ها چند ماکول و پاپول قهوه‌ای سفت.',
      chart: [['Hx', 'intermittent psoriasis since teens'], ['FH', 'negative for psoriasis'], ['PE', 'erythematous plaques with scales'], ['Dx', 'psoriasis vulgaris؛ multiple histiocytomas']],
      fig: { a: ['psoriasis-plaque', 'lesions-raised'], l: ['پسوریازیس', 'ضایعه‌های برجسته'] },
      steps: [
        M('اختصار', 'FH در یادداشت یعنی…', ['سابقه خانوادگی', 'سابقه پزشکی', 'یافته معاینه', 'برش منجمد'], 'family history.'),
        M('واژه', 'intermittent یعنی…', ['متناوب: می‌آید و می‌رود', 'مزمن و ثابت', 'شدید', 'ارثی'], 'condition that comes and goes.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['plaque', 'برجستگی پهن و تخت'], ['scale', 'پوسته'], ['macule', 'لکه مسطح'], ['pruritus', 'خارش شدید']], 'Chart note analysis.'),
        M('درمان', 'کدام درمان نوری برای پسوریازیس به کار می‌رود؟', ['phototherapy (PUVA)', 'cryosurgery', 'liposuction', 'I&D'], 'نور UV کنترل‌شده.'),
        T('تشخیص', 'histiocytoma گره خوش‌خیم درم است.', true, 'dermatofibroma.'),
        S('املا', 'املای «پسوریازیس» را بنویس', 'psoriasis', 'p اول بی‌صداست.', 'psor…')
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
    ['Lx', 'پوست بزرگ‌ترین اندام بدن است: حدود ۲ متر مربع و ۱۶٪ وزن بدن.'],
    ['Lx', 'معنی واژه را از پسوند شروع کن: hypo/derm/ic یعنی «مربوط به زیرِ پوست».'],
    ['Lx', 'اگر پسوند با حرف صدادار شروع شود، واکه رابط حذف می‌شود: dermat/o + -itis = dermatitis.'],
    ['Lx', 'derm/o، dermat/o و cutane/o هر سه یعنی پوست؛ -derma هم پسوند پوست است.'],
    ['Lx', 'hidr/o با i یعنی عرق؛ hydr/o با y یعنی آب. hyperhidrosis تعریق زیاد است!'],
    ['Lx', 'xer/o یعنی خشک و xanth/o یعنی زرد؛ xeroderma خشکی پوست است و xanthoma توده زرد.'],
    ['Lx', '‎-tomy یعنی برش، ‎-ectomy یعنی برداشتن و ‎-tome یعنی ابزار برش.'],
    ['Lx', 'erythr/o قرمز، melan/o سیاه، leuk/o سفید، cyan/o آبی و xanth/o زرد است.'],
    ['Lx', 'onych/o یعنی ناخن ولی onc/o یعنی تومور؛ یک حرف، دو دنیا.'],
    ['Ly', 'اپیدرم رگ ندارد (avascular)؛ برای همین خراش سطحی خونریزی نمی‌کند.'],
    ['Ly', 'لایه‌های اپیدرم از بالا: Corneum، Lucidum، Granulosum، Spinosum، Basale.'],
    ['Ly', 'اپیدرم هر ۴ هفته تقریباً نو می‌شود؛ بیشتر گرد خانه پوسته‌های مرده ماست!'],
    ['Ly', 'تعداد ملانوسیت‌ها در همه نژادها تقریباً یکسان است؛ مقدار ملانین فرق می‌کند.'],
    ['Ly', 'اثر انگشت از پرزهای درم (dermal papillae) ساخته می‌شود.'],
    ['Ly', 'تست مانتو داخل‌پوستی (ID) است و انسولین زیرجلدی (SubQ).'],
    ['Ly', 'کلاژن استحکام می‌دهد و الاستین کشسانی؛ هر دو را فیبروبلاست می‌سازد.'],
    ['Ly', 'keloid اسکاری است که از لبه زخم فراتر می‌رود؛ از ساخت زیاد کلاژن.'],
    ['Ac', 'trich/o و pil/o هر دو یعنی مو؛ pilonidal یعنی «لانه مو».'],
    ['Ac', 'arrector pili عضله کوچکی است که مو را سیخ می‌کند؛ همان مورمور شدن.'],
    ['Ac', 'lunula یعنی ماه کوچک: هلال سفید پایه ناخن.'],
    ['Ac', 'paronychia عفونت دور ناخن است؛ para- یعنی کنار.'],
    ['Ac', 'سیاهی جوش سرسیاه از اکسید شدن ملانین است، نه کثیفی.'],
    ['Ac', 'غدد اکرین همه‌جای بدن‌اند؛ آپوکرین در زیربغل و از بلوغ فعال می‌شوند.'],
    ['Ac', 'Beau lines شیارهای عرضی ناخن‌اند که پس از یک بیماری شدید پیدا می‌شوند.'],
    ['Le', 'macule مسطح است، papule برجسته؛ مرز اندازه هر دو ۱ سانتی‌متر است.'],
    ['Le', 'vesicle تاول کوچک است و bulla تاول بزرگ (بیش از ۱ سانتی‌متر).'],
    ['Le', 'پتشی با فشار انگشت محو نمی‌شود؛ قرمزی التهابی محو می‌شود.'],
    ['Le', 'erythema اسم است (قرمزی) و erythematous صفت (قرمز).'],
    ['Le', 'erosion فقط اپیدرم را برمی‌دارد و بی اسکار خوب می‌شود؛ ulcer تا درم می‌رود.'],
    ['Le', 'antipruritic ضدخارش است؛ antipyretic تب‌بر. قاطی نکن!'],
    ['Le', 'از کوچک به بزرگ: petechiae ← purpura ← ecchymosis.'],
    ['Ds', 'ringworm (tinea) قارچ است، نه کرم!'],
    ['Ds', 'tinea + نام محل: capitis سر، corporis بدن، cruris کشاله ران، pedis پا، unguium ناخن.'],
    ['Ds', 'زونا بیدار شدن ویروس آبله‌مرغان در یک عصب است؛ فقط یک طرف بدن.'],
    ['Ds', 'staph خوشه‌ای است و strep زنجیره‌ای.'],
    ['Ds', 'دلمه عسلی‌رنگ دور بینی کودک = زردزخم (impetigo).'],
    ['Ds', 'پسوریازیس: پلاک قرمز با پوسته نقره‌ای روی آرنج و زانو.'],
    ['Ds', 'قانون نه‌ها: سر ۹، هر دست ۹، هر پا ۱۸، تنه ۳۶، ناحیه تناسلی ۱.'],
    ['Ds', 'سوختگی درجه سه ممکن است بی‌درد باشد؛ عصب‌ها هم سوخته‌اند.'],
    ['Ds', 'شایع‌ترین محل زخم بستر ناحیه خاجی (sacrum) است.'],
    ['Ds', 'eschar بافت مرده سیاه سوختگی است؛ scar جای زخم ترمیم‌شده.'],
    ['Tx', 'BCC شایع‌ترین سرطان پوست است؛ ملانوما خطرناک‌ترین.'],
    ['Tx', 'ABCDE: عدم تقارن، لبه نامنظم، چند رنگ، قطر بیش از ۶ میلی‌متر، تغییر.'],
    ['Tx', 'biopsy = bi/o (زنده) + -opsy (دیدن).'],
    ['Tx', 'autograft از خود بیمار، allograft از انسان دیگر، xenograft از حیوان.'],
    ['Tx', 'جراحی موس سرطان را لایه به لایه برمی‌دارد و بیشترین بافت سالم را حفظ می‌کند.'],
    ['Tx', 'ID یعنی intradermal ولی I&D یعنی incision and drainage!'],
    ['Tx', 'bid دو بار، tid سه بار و qid چهار بار در روز؛ hs هنگام خواب.'],
    ['Tx', 'SPF 30 حدود ۹۷٪ پرتو UVB را می‌گیرد؛ هر ۲ ساعت دوباره بزن.'],
    ['Tx', 'در تست مانتو قطر سفتی (induration) را می‌خوانند، نه قرمزی را.']
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
    const M = { id: D.id, bit: D.bit, start: D.startWorld, prefix: D.codePrefix, nameFa: D.nameFa, nameEn: D.nameEn, titleFa: D.titleFa, titleEn: D.titleEn,
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
/* درما — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و ماشین‌حساب سوختگی (قانون نُه‌ها)
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'derma.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: 'واژه‌نامه', color: '#D9643A' },
    { id: 'parse', sym: '✂', name: 'تجزیه‌گر واژه', color: '#B24E26' },
    { id: 'roots', sym: '-o-', name: 'ریشه‌ها و پسوندها', color: '#1F9E8F' },
    { id: 'abbr', sym: 'BCC', name: 'اختصارها', color: '#1899D6' },
    { id: 'ref', sym: '9%', name: 'محاسبه سوختگی', color: '#C8423C' }
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
      <header class="vhead"><h1>ابزارها</h1><p>واژه‌نامه کامل ${fa(L().TERMS.length)} واژه، ${fa(L().ROOTS.length)} جزء واژه و ${fa(L().ABBR.length)} اختصار؛ همه بدون اینترنت.</p></header>
      <div class="ttabs" role="tablist">${TOOLS.map(x => `<button class="ttab ${x.id === cur ? 'is-on' : ''}" data-tool="${x.id}" style="--tc:${x.color}" role="tab" aria-selected="${x.id === cur}"><span class="ttab__s">${x.sym}</span>${x.name}</button>`).join('')}</div>
      <div class="tcard">${PANES[cur]()}</div>
      <p class="disclaimer">⚕️ درما ابزار آموزشی است؛ واژه‌نامه و محاسبه سوختگی جای معاینه و قضاوت بالینی را نمی‌گیرند.</p>
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
  const dict = () => `<div class="tpane">${searchBox('جست‌وجو: derm، ناخن، tinea…')}
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
  const SAMPLES = ['onychomycosis', 'hyperhidrosis', 'subcutaneous', 'dermatoplasty', 'xanthoderma', 'rhytidectomy', 'onychocryptosis', 'pediculosis'];
  const parse = () => `<div class="tpane">
    <p class="muted">یک واژه پزشکی بنویس تا به پیشوند، ریشه و پسوند شکسته شود. قاعده طلایی: معنی را از <b>پسوند</b> شروع کن، بعد پیشوند، و آخر ریشه‌ها.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. dermatitis"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: 'پیشوند', root: 'ریشه', suffix: 'پسوند' };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox('جست‌وجو: onych، مو، \u200e-itis\u200e…')}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]}‌ها <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b class="en-text">${esc(r.a)}</b><span>${esc(r.fa)}</span><small class="en-text">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox('جست‌وجو: BCC، پیوند، biopsy…')}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>اختصار</th><th>شکل کامل و معنی</th></tr>${list.map(a => `<tr><td><span class="en-text">${esc(a.a)}</span></td><td><span class="en-text abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- ماشین‌حساب سوختگی: قانون نُه‌ها (بزرگسال) ---------- */
  const NINES = [
    ['head', 'سر و گردن', 9], ['armR', 'دست راست', 9], ['armL', 'دست چپ', 9],
    ['trunkF', 'جلوی تنه', 18], ['trunkB', 'پشت تنه', 18],
    ['legR', 'پای راست', 18], ['legL', 'پای چپ', 18], ['groin', 'ناحیه تناسلی', 1]
  ];
  const burnSum = () => NINES.reduce((a, r) => a + (st.burn[r[0]] ? r[2] * (st.burn[r[0]] === 'h' ? 0.5 : 1) : 0), 0);
  const burnOut = () => { const v = burnSum(); return `<b>${fa(v)}٪</b> <span>سطح بدن (BSA)</span><small>${v === 0 ? 'ناحیه‌های سوخته را انتخاب کن' : v < 10 ? 'سوختگی محدود' : v < 20 ? 'سوختگی متوسط؛ ارزیابی پزشکی' : 'سوختگی گسترده؛ نیاز به مایع‌درمانی و مرکز سوختگی'}</small>`; };
  const ref = () => `<div class="tpane"><p class="muted">ناحیه‌های سوخته را انتخاب کن؛ «نیم» یعنی نیمی از آن ناحیه. فقط سوختگی درجه دو و سه حساب می‌شود.</p>
    <div class="burn">${NINES.map(r => `<div class="burn__r"><span class="burn__n">${r[1]} <small>${fa(r[2])}٪</small></span><span class="seg">${[['', 'هیچ'], ['h', 'نیم'], ['f', 'کامل']].map(o => `<button class="seg__b ${(st.burn[r[0]] || '') === o[0] ? 'is-on' : ''}" data-burn="${r[0]}" data-v="${o[0]}">${o[1]}</button>`).join('')}</span></div>`).join('')}</div>
    <div class="burn__out" aria-live="polite">${burnOut()}</div>
    ${EA.ui.figCard({ a: ['rule-of-nines', 'burn-depth'], l: ['قانون نه‌ها', 'درجه سوختگی'] })}
    <table class="mini"><tr><th>درجه</th><th>لایه</th><th>ظاهر</th></tr>
      <tr><td>یک <bdi dir="ltr">(superficial)</bdi></td><td>اپیدرم</td><td>قرمز و دردناک</td></tr>
      <tr><td>دو <bdi dir="ltr">(partial-thickness)</bdi></td><td>اپیدرم و بخشی از درم</td><td>تاول و درد شدید</td></tr>
      <tr><td>سه <bdi dir="ltr">(full-thickness)</bdi></td><td>اپیدرم و تمام درم</td><td>سفید یا سوخته، گاهی بی‌درد</td></tr></table></div>`;

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
